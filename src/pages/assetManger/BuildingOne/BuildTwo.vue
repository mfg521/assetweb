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
                      <el-option label="assetName" value="assetName"></el-option>
                      <el-option label="assetType" value="assetType"></el-option>
                      <el-option label="taggerNumber" value="taggerNumber"></el-option>
                      <el-option label="computerModel" value="computerModel"></el-option>
                    </el-select>
                    <el-button type="danger" class="danger" slot="append" icon="el-icon-search"
                               @click="query"></el-button>
                  </el-input>
                </li>
              </ul>

              <!-- 添加用户和删除 -->
              <ul class="btn-edit fr">
                <li>
                  <el-button type="primary" @click="dialogCreateVisible = true">Add Asset</el-button>
                  <el-button type="primary" icon="delete" :disabled="selected.length==0" @click="removeUsers()">删除
                  </el-button>
                </li>
              </ul>

              <!-- 用户列表-->
              <el-table ref="multipleTable" :data="users" tooltip-effect="dark" style="width: 100%" border stripe
                        @selection-change="tableSelectionChange">
                <el-table-column align="center" type="selection" width="50"></el-table-column>

                <el-table-column align="center" prop="assetName" label="assetName">
                  <template slot-scope="scope">
                    <el-input v-if="showEdit[scope.$index]" v-model="scope.row.assetName" size="small"
                              placeholder="请输入内容"></el-input>
                    <span v-if="!showEdit[scope.$index]">{{scope.row.assetName}}</span>
                  </template>
                </el-table-column>

                <el-table-column align="center" prop="serialNumber" label="serialNumber">
                  <template slot-scope="scope">
                    <el-input v-if="showEdit[scope.$index]" v-model="scope.row.serialNumber" size="small"
                              placeholder="请输入内容"></el-input>
                    <span v-if="!showEdit[scope.$index]">{{scope.row.serialNumber}}</span>
                  </template>
                </el-table-column>
                <el-table-column align="center" prop="computerBrand" label="computerBrand">
                  <template slot-scope="scope">
                    <el-input v-if="showEdit[scope.$index]" v-model="scope.row.computerBrand" size="small"
                              placeholder="请输入内容"></el-input>
                    <span v-if="!showEdit[scope.$index]">{{scope.row.computerBrand}}</span>
                  </template>
                </el-table-column>
                <el-table-column align="center" prop="computerModel" label="computerModel">
                  <template slot-scope="scope">
                    <el-input v-if="showEdit[scope.$index]" v-model="scope.row.computerModel" size="small"
                              placeholder="请输入内容"></el-input>
                    <span v-if="!showEdit[scope.$index]">{{scope.row.computerModel}}</span>
                  </template>
                </el-table-column>

                <el-table-column align="center" prop="assetType" label="assetType">
                  <template slot-scope="scope">
                    <el-input v-if="showEdit[scope.$index]" v-model="scope.row.assetType" size="small"
                              placeholder="请输入内容"></el-input>
                    <span v-if="!showEdit[scope.$index]">{{scope.row.assetType}}</span>
                  </template>
                </el-table-column>

                <el-table-column align="center" label="操作" width="300%">
                  <template slot-scope="scope">
                    <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"><span class="edit-btn">Edit</span>
                    </el-button>
                    <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
                    <el-button size="mini" @click="searchRecord(scope.row.serialNumber)"><span
                      class="edit-search">Search</span></el-button>
                    <el-button size="mini" @click="searchLocation(scope.row.assetStatus,scope.row.serialNumber)"><span
                      class="edit-search">Location</span></el-button>

                    <el-button size="mini" @click="searchQrcode(scope.row.assetQrcodeAddress)"><span
                      class="edit-search">QRcode</span></el-button>

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
          <el-form-item label="assetName" prop="assetName">
            <el-input v-model="create.assetName"></el-input>
          </el-form-item>
          <el-form-item label="taggerNumber" prop="taggerNumber">
            <el-input v-model="create.taggerNumber"></el-input>
          </el-form-item>
          <el-form-item label="serialNumber" prop="serialNumber">
            <el-input v-model="create.serialNumber" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="computerModel" prop="computerModel">
            <el-input v-model="create.computerModel"></el-input>
          </el-form-item>
          <el-form-item label="assetType" prop="assetType">
            <el-input v-model="create.assetType"></el-input>
          </el-form-item>
          <el-form-item label="email" prop="email">
            <el-input v-model="create.email"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogCreateVisible = false">取 消</el-button>
          <el-button type="primary" :loading="createLoading" @click="createUser">确 定</el-button>
        </div>
      </el-dialog>

      <!-- 原来修改用户 begin 改为生成二维码-->
      <el-dialog title="修改资产信息" :visible.sync="dialogUpdateVisible" :close-on-click-modal="false"
                 :close-on-press-escape="false">
        <div class="dialogCare">
          <div style="border: 2px solid black;width: 255px;margin-top: 2px;margin-bottom: 2px " >
            <div style="float: left">
              <img src="../../../assets/cpelogo.png" style="width: 26px"/>
              <span style="font-size: 14px"> ASSET DETAILS: </span>
              <p style="margin: 0;font-size: 10px"><span style="margin-right: 5px; font-weight: bold;font-size: 10px">Serial Number</span>1234567</p>
              <p style="margin: 0;font-size: 10px"><span style="margin-right: 5px; font-weight: bold;font-size: 10px">Tagged Number</span></p>
              <p style="margin: 0;font-size: 10px"><span style="margin-right: 5px; font-size: 10px">CPE_IT_2018_222</span></p>
            </div>
            <div>
              <img :src="this.QrcodeUrl" style="width:83px; height: 83px" />
            </div>
          </div>
        </div>


        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogUpdateVisible = false">取 消</el-button>
          <el-button @click="printBtn()">打 印</el-button>
        </div>
      </el-dialog>
    </div>

  </div>
</template>

<script>
  import loginHeader from '../../../components/LoginHeader/loginHeader'

  import {getAllAsset, createNewAsset, updateAsset, getLocationByAsset, getQRcodeByAddress} from "../../../api";

  var placeholders = {"assetName": "请输入资产名称", "assetType": "请输入资产类型", "computerModel": "请输入资产型号"};

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
        users: [],
        create: {
          assetId: '',
          assetName: '',
          taggerNumber: '',
          serialNumber: '',
          computerBrand: '',
          computerModel: '',
          assetType: '',
          email: '',
          assetStatus: 0,
          is_active: true
        },
        currentId: '',
        update: {
          name: '',
          phone: '',
          email: '',
          is_active: true
        },
        rules: {
          assetName: [
            {required: true, message: '请输入姓名', trigger: 'blur'},
            {min: 3, max: 15, message: '长度在 3 到 15 个字符'}
          ],
          taggerNumber: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
            {min: 3, max: 25, message: '长度在 3 到 25 个字符'},
            {pattern: /^[A-Za-z0-9]+$/, message: '用户名只能为字母和数字'}
          ],
          serialNumber: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            {min: 6, max: 25, message: '长度在 6 到 25 个字符'}
          ],
          computerBrand: [
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
        updateRules: {
          name: [
            {required: true, message: '请输入姓名', trigger: 'blur'},
            {min: 3, max: 15, message: '长度在 3 到 15 个字符'}
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
          assetName: '',
          assetType: '',
          taggerNumber: '',
          computerModel: '',
        },
        total_rows: 0,
        keywords: '', //搜索框的关键字内容
        select: 'assetName', //搜索框的搜索字段
        loading: true,
        selected: [], //已选择项
        dialogCreateVisible: false, //创建对话框的显示状态
        dialogUpdateVisible: false, //编辑对话框的显示状态 改为生成二维码的dialog
        createLoading: false,
        updateLoading: false,
        placeholder: placeholders["assetName"],
        showEdit: [false],

      };
    },

    mounted: function () {
      this.getUsers(this.$route.params.assetType,this.$route.query.serialNumber);

    },

    methods: {
      //表格最前面选择匡
      tableSelectionChange(val) {
        this.selected = val;
        console.log(this.selected)
      },

      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {
          });
      },

      //排序属性
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
        this.getUsers(0,0);
      },

      //搜索字段发生变化触发的方法
      searchFieldChange(val) {
        this.placeholder = placeholders[val];
        console.log(`搜索字段： ${val} `);
      },

      //页数改变时触发的方法
      pageSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.filter.per_page = val;
        this.getUsers(0,0);
      },

      //当前页改变时创建的方法
      pageCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.filter.page = val;
        this.getUsers(0,0);
      },

      setCurrent(user) {
        this.currentId = user.id;
        this.update.name = user.name;
        this.update.phone = user.phone;
        this.update.email = user.email;
        this.update.is_active = user.is_active;
        this.dialogUpdateVisible = true;
      },

      // 重置表单
      reset() {
        this.$refs.create.resetFields();
      },

      //查询资产信息,当前页点击搜索触发的方法
      query() {
        this.queryFilter = {}
        this.getUsers(0,0);
      },

      // 获取资产信息列表
      async getUsers(searthType,serialNumber) {
        //扫秒二维码时的操作
        if(serialNumber !== 0 && undefined!==serialNumber){
          let routerParams = this.$route.query
          this.queryFilter = routerParams
          this.loading = true;
          var pageNum = this.filter.page
          var pageSize = this.filter.per_page
          if (this.keywords !== "") {
            this.queryFilter[this.select] = this.keywords;
          }
          const result = await getAllAsset({pageNum, pageSize, queryPo: this.queryFilter})
          if (result.code === 0) {
            this.users = result.data.list
            this.total_rows = result.data.total
            this.loading = false
            this.searchLocation(this.users[0].assetStatus,serialNumber)
          }
        }else if(searthType===0){
          //从当前页面查看
          this.loading = true;
          var pageNum = this.filter.page
          var pageSize = this.filter.per_page
          if (this.keywords !== "") {
            this.queryFilter[this.select] = this.keywords;
          }
          const result = await getAllAsset({pageNum, pageSize, queryPo: this.queryFilter})
          if (result.code === 0) {
            this.users = result.data.list
            this.total_rows = result.data.total
            this.loading = false
          }
        }else {
          //从首页或者当前页查
          let routerParams = this.$route.params
          this.queryFilter = routerParams

          this.loading = true;
          var pageNum = this.filter.page
          var pageSize = this.filter.per_page
          if (this.keywords !== "") {
            this.queryFilter[this.select] = this.keywords;
          }
          const result = await getAllAsset({pageNum, pageSize, queryPo: this.queryFilter})
          if (result.code === 0) {
            this.users = result.data.list
            this.total_rows = result.data.total
            this.loading = false
          }
        }
      },

      // 创建资产信息
      createUser() {
        // 主动校验
        this.$refs.create.validate(async (valid) => {
          if (valid) {
            console.log(this.create)
            this.create.assetUuid = getuuid();
            this.createLoading = true;
            const asset = this.create
            const result = await createNewAsset(asset)
            console.log(result)
            if (result.code === 0) {
              this.$message.success('Create new asset scuccessfully！');
              this.dialogCreateVisible = false;
              this.createLoading = false;
              this.reset();
              this.getUsers(0,0);
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
                this.getUsers(0,0);
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
                this.getUsers(0,0);
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
      searchRecord(serialNumber) {
        this.$router.push({
          path: '/arecordmanager/buildingo',
          name: 'arecord',
          params: {
            serialNumber: serialNumber
          },
        })
      },

      //根据资产信息查找相应的位置信息
      async searchLocation(asset_status, serialNumber) {
        if (asset_status === 0) {
          this.$message.error('该设备未使用....');
        } else if (asset_status === 2) {
          this.$message.error('该设备已损坏.....');
        } else {
          const result = await getLocationByAsset(serialNumber)
          if (result.code === 0) {
            this.$store.dispatch('changeToFalse')
            this.$router.push({
              name: "room",
              params: {
                xindex: result.data.xindex,
                yindex: result.data.yindex
              },
            })

          } else {
            this.$message.error(result.errmsg);
          }
        }
      },

      //返回图片流直接在src中用就可以
      async searchQrcode(assetQrcodeAddress) {
        this.QrcodeUrl = "http://172.30.1.82:8088/asset/search_qrcode?assetQrcodeAddress=" + assetQrcodeAddress
        this.dialogUpdateVisible = true

      },

      printBtn() {
        let newstr = document.getElementsByClassName('dialogCare')[0].innerHTML;
        console.log(newstr)
        window.document.body.innerHTML = newstr;
        let oldstr = window.document.body.innerHTML;
        window.print();
        window.location.reload();   //解决打印之后按钮失效的问题
        window.document.body.innerHTML = oldstr;
        return false;
      }

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
