<template>
  <div class="ivu-layout" style="width: 80%; height: 100%; flex: 0 1 auto; ">
    <!--头部-->
    <login-header></login-header>

    <div class="ivu-layout-content" style="height: 92%">
      <section class="main-content-wrapper wrapper">
        <section id="main-content">
          <div class="row">
            <div class="col-md-12">
              <!-- 查询 -->
              <ul class="btn-edit fl">
                <li class="input-serach">
                  <el-input :placeholder="placeholder" v-model="keywords" style="width: 300px;">
                    <el-select v-model="select" @change="searchFieldChange" slot="prepend">
                      <el-option label="employeeName" value="employeeName"></el-option>
                      <el-option label="department" value="department"></el-option>
                      <el-option label="sponsor" value="sponsor"></el-option>
                    </el-select>
                    <el-button type="danger" class="danger" slot="append" icon="el-icon-search"
                               @click="query"></el-button>
                  </el-input>
                </li>
              </ul>

              <!-- 添加用户和删除 -->
              <ul class="btn-edit fr">
                <li>
                  <el-button type="primary" @click="dialogCreateVisible = true">Add Employee</el-button>
                  <el-button type="primary" icon="delete" :disabled="selected.length==0" @click="removeUsers()">删除
                  </el-button>
                </li>
              </ul>

              <!-- 员工列表-->
              <el-table ref="multipleTable" :data="employee" tooltip-effect="dark" style="width: 100%" border stripe
                        @selection-change="tableSelectionChange">
                <el-table-column align="center" type="selection" width="50"></el-table-column>

                <el-table-column align="center" prop="employeeName" label="employeeName">
                  <template slot-scope="scope">
                    <el-input v-if="showEdit[scope.$index]" v-model="scope.row.employeeName" size="small"
                              placeholder="请输入内容"></el-input>
                    <span v-if="!showEdit[scope.$index]">{{scope.row.employeeName}}</span>
                  </template>
                </el-table-column>

                <el-table-column align="center" prop="joinedDate" label="joinedDate">
                  <template slot-scope="scope">
                    <el-input v-if="showEdit[scope.$index]" v-model="scope.row.joinedDate" size="small"
                              placeholder="请输入内容"></el-input>
                    <span v-if="!showEdit[scope.$index]">{{scope.row.joinedDate}}</span>
                  </template>
                </el-table-column>
                <el-table-column align="center" prop="department" label="department">
                  <template slot-scope="scope">
                    <el-input v-if="showEdit[scope.$index]" v-model="scope.row.department" size="small"
                              placeholder="请输入内容"></el-input>
                    <span v-if="!showEdit[scope.$index]">{{scope.row.department}}</span>
                  </template>
                </el-table-column>
                <el-table-column align="center" prop="sponsor" label="sponsor">
                  <template slot-scope="scope">
                    <el-input v-if="showEdit[scope.$index]" v-model="scope.row.sponsor" size="small"
                              placeholder="请输入内容"></el-input>
                    <span v-if="!showEdit[scope.$index]">{{scope.row.sponsor}}</span>
                  </template>
                </el-table-column>

                <el-table-column align="center" prop="designation" label="designation">
                  <template slot-scope="scope">
                    <el-input v-if="showEdit[scope.$index]" v-model="scope.row.designation" size="small"
                              placeholder="请输入内容"></el-input>
                    <span v-if="!showEdit[scope.$index]">{{scope.row.designation}}</span>
                  </template>
                </el-table-column>

                <el-table-column align="center" label="operation" width="300%">
                  <template slot-scope="scope">
                    <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"><span class="edit-btn">Edit</span>
                    </el-button>
                    <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Departure</el-button>
                    <el-button size="mini" @click="searchRecord(scope.row.employeeUuid)"><span
                      class="edit-search">Record</span></el-button>
                    <el-button size="mini" @click="searchLocation(scope.row.xindex,scope.row.yindex,scope.row.roomNum)"><span
                      class="edit-search">Location</span></el-button>
                  </template>
                </el-table-column>
              </el-table>


              <!--分页begin-->
              <el-pagination class="tc mg"
                             :current-page="filter.page"
                             :page-sizes="[5,10, 20, 50, 100]"
                             :page-size="filter.per_page"
                             layout="total, sizes, prev, pager, next, jumper"
                             :total="total_rows"
                             @size-change="pageSizeChange"
                             @current-change="pageCurrentChange">
              </el-pagination>
              <!--分页end-->

            </div>
          </div>
        </section>
      </section>

      <!-- 创建新资产 begin-->
      <el-dialog title="Add New Asset" :visible.sync="dialogCreateVisible" :close-on-click-modal="false"
                 :close-on-press-escape="false"
                 @close="reset">
        <el-form id="#create" :model="create" :rules="rules" ref="create" label-width="120px">
          <el-form-item label="employeeName" prop="employeeName">
            <el-input v-model="create.employeeName"></el-input>
          </el-form-item>
          <el-form-item label="department" prop="department">
            <el-input v-model="create.department"></el-input>
          </el-form-item>
          <el-form-item label="sponsor" prop="sponsor">
            <el-input v-model="create.sponsor" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="designation" prop="designation">
            <el-input v-model="create.designation"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogCreateVisible = false">取 消</el-button>
          <el-button type="primary" :loading="createLoading" @click="createEmp">确 定</el-button>
        </div>
      </el-dialog>

    </div>
  </div>
</template>

<script>
  import loginHeader from '../../../components/LoginHeader/loginHeader'

  import {createNewEmployee, updateAsset, getAllEmp} from "../../../api";

  var placeholders = {"employeeName": "请输入员工名称", "department": "请输入员工部门", "sponsor": "请输入员工sponsor"};

  //获取UUId
  function getuuid() {
    var uid = [];
    var hexDigits = "0123456789abcdefghijklmnopqrst";
    for (var i = 0; i < 32; i++) {
      uid[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    uid[6] = "4";
    uid[15] = hexDigits.substr((uid[15] & 0x3) | 0x8, 1);
    var uuid = uid.join("");
    return uuid;
  }

  export default {
    data: function () {

      //密码输入规则
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.create.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };

      return {
        QrcodeUrl: '',
        url: 'url',
        employee: [],
        create: {
          employeeUuid: '',
          employeeName: '',
          department: '',
          sponsor: '',
          designation: '',
        },
        currentId: '',
        update: {
          name: '',
          phone: '',
          email: '',
          is_active: true
        },
        rules: {
          employeeName: [
            {required: true, message: '请输入姓名', trigger: 'blur'},
            {min: 3, max: 15, message: '长度在 3 到 15 个字符'}
          ],
          taggerNumber: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
            {min: 3, max: 25, message: '长度在 3 到 25 个字符'},
            {pattern: /^[A-Za-z0-9]+$/, message: '用户名只能为字母和数字'}
          ],
          department: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            {min: 6, max: 25, message: '长度在 6 到 25 个字符'}
          ],
          sponsor: [
            {required: true, message: '请再次输入密码', trigger: 'blur'},
            {validate: validatePass, message: '两次输入的密码不一致'}
          ],
          email: [
            {type: 'email', message: '邮箱格式不正确'}
          ],
          phone: [
            {pattern: /^1[34578]\d{9}$/, message: '请输入中国国内的手机号码'}
          ]
        },
        queryFilter: {},
        filter: {
          per_page: 10, // 页大小
          page: 1, // 当前页
          employeeName: '',
          department: '',
          sponsor: '',
        },
        total_rows: 0,
        keywords: '', //搜索框的关键字内容
        select: 'employeeName', //搜索框的搜索字段
        loading: true,
        selected: [], //已选择项
        dialogCreateVisible: false, //创建对话框的显示状态
        createLoading: false,
        updateLoading: false,
        placeholder: placeholders["employeeName"],//搜索placeholder  占位符
        showEdit: [false],
        isPopover: false,

      };
    },

    mounted: function () {
      this.getEmp();

    },

    methods: {
      tableSelectionChange(val) {
        this.selected = val;
      },

      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {
          });
      },

      tableSortChange(val) {
        console.log(`排序属性: ${val.prop}`);
        console.log(`排序: ${val.order}`);
        if (val.prop != null) {
          if (val.order == 'descending') {
            this.filter.sorts = '-' + val.prop;
          }
          else {
            this.filter.sorts = '' + val.prop;
          }
        }
        else {
          this.filter.sorts = '';
        }
        this.getEmp();
      },

      searchFieldChange(val) {
        this.placeholder = placeholders[val];
        console.log(`搜索字段： ${val} `);
      },

      pageSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.filter.per_page = val;
        this.getEmp(0,0);
      },

      pageCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.filter.page = val;
        this.getEmp(0,0);
      },

      setCurrent(user) {
        this.currentId = user.id;
        this.update.name = user.name;
        this.update.phone = user.phone;
        this.update.email = user.email;
        this.update.is_active = user.is_active;
      },
      // 重置表单
      reset() {
        this.$refs.create.resetFields();
      },

      //查询资产信息
      query() {
        this.queryFilter = {}
        this.getEmp();
      },

      // 获取employee信息列表
      async getEmp() {
          this.loading = true;
          var pageNum = this.filter.page
          var pageSize = this.filter.per_page
          if (this.keywords !== "") {
            this.queryFilter[this.select] = this.keywords;
          }
          const result = await getAllEmp({pageNum, pageSize, queryPo: this.queryFilter})
          if (result.code === 0) {
            this.employee = result.data.list
            this.total_rows = result.data.total
            this.loading = false
          }
      },

      // 创建资产信息
      createEmp() {
        // 主动校验
        this.$refs.create.validate(async (valid) => {
          if (valid) {
            console.log(this.create)
            this.create.employeeUuid = getuuid();
            this.createLoading = true;
            const employee = this.create
            const result = await createNewEmployee(employee)
            console.log(result)
            if (result.code === 0) {
              this.$message.success('Create new employee scuccessfully！');
              this.dialogCreateVisible = false;
              this.createLoading = false;
              this.reset();
              this.getEmp();
            } else {
              this.$message.error(result.errmsg);
              this.createLoading = false;
            }
          }
          else {
            return false;
          }
        });
      },

      // 删除单个资产信息
      removeUser(user) {
        this.$confirm('此操作将永久删除用户 ' + user.username + ', 是否继续?', '提示', {type: 'warning'})
          .then(() => {
            // 向请求服务端删除
            var resource = this.$resource(this.url + "{/id}");
            resource.delete({id: user.id})
              .then((response) => {
                this.$message.success('成功删除了用户' + user.username + '!');
                this.getEmp();
              })
              .catch((response) => {
                this.$message.error('删除失败!');
              });
          })
          .catch(() => {
            this.$message.info('已取消操作!');
          });
      },

      //删除多个资产信息
      removeUsers() {
        this.$confirm('此操作将永久删除 ' + this.selected.length + ' 个用户, 是否继续?', '提示', {type: 'warning'})
          .then(() => {
            console.log(this.selected);
            var ids = [];
            //提取选中项的id
            $.each(this.selected, (i, user) => {
              ids.push(user.id);
            });
            // 向请求服务端删除
            var resource = this.$resource(this.url);
            resource.remove({ids: ids.join(",")})
              .then((response) => {
                this.$message.success('删除了' + this.selected.length + '个用户!');
                this.getEmp();
              })
              .catch((response) => {
                this.$message.error('删除失败!');
              });
          })
          .catch(() => {
            this.$Message('已取消操作!');
          });
      },

      //编辑单个资产信息
      async handleEdit(index, row) {
        var editBtn = document.getElementsByClassName('edit-btn')[index];
        if (editBtn.innerHTML == 'Edit') {
          editBtn.innerHTML = 'Confirm'
          this.$set(this.showEdit, index, true)
        }
        else {
          editBtn.innerHTML = 'Edit';
          this.$set(this.showEdit, index, false)
          var asset = row
          console.log(asset)
          const result = await updateAsset(asset)
          this.$message.success('修改用户资料成功！');
          console.log(result)
        }
      },

      //查找记录
      searchRecord(employeeUuid) {
        this.$router.push({
          path: '/arecordmanager/buildingone',
          name: 'arecord',
          params: {
            employeeUuid: employeeUuid
          },
        })
      },

      //根据资产信息查找相应的位置信息
      async searchLocation(xindex, yindex,roomNum) {
        if (xindex === -1) {
          this.$message.error('此用户没有位置');
        } else {
            this.$store.dispatch('changeToFalse')
            this.$router.push({
              name: 'room',
              params: {
                xindex: xindex,
                yindex: yindex
              },
            })
        }
      },
    }
    ,
    components: {
      loginHeader
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../../static/plugins/bootstrap/css/bootstrap.min.css';
  @import '../../../static/css/global.css';
  @import '../../../static/css/main.min.css';
</style>
