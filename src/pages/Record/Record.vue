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
                      <el-option label="employeeUuid" value="employeeUuid"></el-option>
                      <el-option label="serialNumber" value="serialNumber"></el-option>
                      <el-option label="assetType" value="assetType"></el-option>
                    </el-select>
                    <el-button type="danger" class="danger" slot="append" icon="el-icon-search"
                               @click="query"></el-button>
                  </el-input>
                </li>
              </ul>

              <!-- 用户列表-->
              <el-table ref="multipleTable" :data="users" tooltip-effect="dark" style="width: 100%" border stripe>
                <el-table-column align="center" prop="employeeUuid" label="employeeUuid">
                  <template slot-scope="scope">
                    <span>{{scope.row.employeeUuid}}</span>
                  </template>
                </el-table-column>
                <el-table-column align="center" prop="serialNumber" label="serialNumber">
                  <template slot-scope="scope">
                    <span>{{scope.row.serialNumber}}</span>
                  </template>
                </el-table-column>
                <el-table-column align="center" prop="borrowedDate" label="borrowedDate" width="150%">
                  <template slot-scope="scope">
                    <span>{{scope.row.borrowedDate}}</span>
                  </template>
                </el-table-column>
                <el-table-column align="center" prop="returnDate" label="returnDate" width="150%">
                  <template slot-scope="scope">
                    <span>{{scope.row.returnDate}}</span>
                  </template>
                </el-table-column>
                <el-table-column align="center" prop="assetType" label="assetType">
                  <template slot-scope="scope">
                    <span v-if="scope.row.assetType===1">CPU</span>
                    <span v-else-if="scope.row.assetType===2">MONITER</span>
                    <span v-else-if="scope.row.assetType===3">LAPTOP</span>
                    <span v-else>PHONE</span>
                  </template>
                </el-table-column>
                <el-table-column align="center" prop="isReturned" label="isReturned">
                  <template slot-scope="scope">
                    <span v-if="scope.row.isReturned===0">No</span>
                    <span v-else>Yes</span>
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
    </div>
  </div>
</template>

<script>
  import loginHeader from '../../components/LoginHeader/loginHeader'

  import {getAllAssetRecord} from "../../api/record";

  var placeholders = {"name": "请输入查找姓名", "username": "请输入查找用户名", "phone": "请输入查找电话"};

  export default {

    data: function () {

      return {
        users: [],

        queryFilter: {},
        filter: {
          per_page: 10, // 页大小
          page: 1, // 当前页
          employeeUuid: '',
          serialNumber: '',
          assetType:''
        },
        total_rows: 0,
        keywords: '', //搜索框的关键字内容
        select: 'employeeUuid', //搜索框的搜索字段
        loading: true,
        placeholder: placeholders["employeeUuid"],
        showEdit: [false],
        isPopover: false,

      };
    },

    mounted: function () {
      this.getUsers(this.$route.params.serailNumber,0);
      this.getUsers(this.$route.params.employeeUuid,0)
    },

    methods: {



      searchFieldChange(val) {
        this.placeholder = placeholders[val];
        console.log(`搜索字段： ${val} `);
      },

      pageSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.filter.per_page = val;
        this.getUsers(0);
      },

      pageCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.filter.page = val;
        this.getUsers(0);
      },


      //查询资产记录
      query() {
        this.queryFilter = {}
        this.getUsers(0);
      },

      //获取用户列表
      async getUsers(searchType) {
        if(searchType!==0){
          let routerParams=this.$route.params
          this.queryFilter=routerParams
        }
        this.loading = true;
        var pageNum = this.filter.page
        var pageSize = this.filter.per_page
        if (this.keywords !== "") {
          this.queryFilter[this.select] = this.keywords;
        }
        const result = await getAllAssetRecord({pageNum, pageSize, queryPo: this.queryFilter})
        if (result.code === 0) {
          this.users = result.data.list
          this.total_rows = result.data.total
          this.loading = false
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
  @import '../../static/plugins/bootstrap/css/bootstrap.min.css';
  @import '../../static/css/global.css';
  @import '../../static/css/main.min.css';
</style>
