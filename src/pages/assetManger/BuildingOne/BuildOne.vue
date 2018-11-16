<template>
  <div>
    <el-form :model="inServForm" ref="inServForm"  label-width="0px" size="small">
      <el-form-item label=""  prop="servin" >
        <el-button type="primary" @click="addRow(infiledList)">新增</el-button>
        <template>
          <el-table border :data="infiledList" style="width: 100%" >
            <el-table-column prop="fildna" label="名称" style="width:6vw;" >
              <template slot-scope="scope">
                <el-input size="mini" v-model="scope.row.fildna"  ></el-input>
              </template>
            </el-table-column>
            <el-table-column  prop="fildtp" label="类型">
              <template slot-scope="scope">
                <el-select v-model="scope.row.fildtp" clearable  >
                  <el-option
                    v-for="item in fildtps"
                    :key="item.value"
                    :label="item.text"
                    :value="item.value">
                  </el-option>
                </el-select>
              </template>
            </el-table-column>
            <el-table-column prop="remark" label="备注">
              <template slot-scope="scope">
                <el-input size="mini" v-model="scope.row.remark" disabled="disabled"  ></el-input>
              </template>
            </el-table-column>
            <el-table-column fixed="right"  label="操作">
              <template slot-scope="scope">
                <el-button @click.native.prevent="deleteRow(scope.$index, infiledList)" size="small"> 移除 </el-button>
              </template>
            </el-table-column>
          </el-table>
        </template>
      </el-form-item>
    </el-form>
    <div data-v-5bc6381c="" class="ivu-input-wrapper ivu-input-type"><!----> <!----> <i class="ivu-icon ivu-icon-load-c ivu-load-loop ivu-input-icon ivu-input-icon-validate"></i> <input autocomplete="off" spellcheck="false" type="text" placeholder="" class="ivu-input ivu-input-disabled"> <!----></div>

  </div>
</template>

<script>
    export default {

      data() {
        return {
          infiledList: [],
          fildtps: [{text: '字符', value: '1'}, {text: '数字', value: '2'}],

        }
      },

      methods: {
        deleteRow(index, rows) {//删除改行
          rows.splice(index, 1);
        },
        addRow(tableData,event){
          tableData.push({ fildna: '',fildtp:'',remark:''
          })
        },
      }
    }




</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
