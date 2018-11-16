<template>
  <div class="ivu-layout" style="width: 80%; height: 100%; flex: 0 1 auto; ">


    <!--头部-->
    <login-header></login-header>


    <div class="ivu-layout-content" style="height: 92%">
      <!--房间标签-->
      <div class="scroll-outer" style="height: 5%">
        <div class="scroll-body" style="left: 0px;">
            <span>
              <router-link v-for=" item in room" :key="index" :to="'/buildingo/6floor/room'"
                           class="ivu-tag ivu-tag-default ivu-tag-dot ivu-tag-closable ivu-tag-checked"
                           style="background-color: #8c8c8c">
                 <span class="ivu-tag-text" @click="clickShowRoom(item.roomNum)">{{item.roomNum}}</span>
              </router-link>
            </span>
        </div>
      </div>

      <div class="node"
           :style="{background: 'url(' + '/static/images/'+roominfo.roomNum+'.png' + ')' +'0% 0% / 63%' + 'no-repeat'}">

        <div v-for="(specialRoom,indexr) in roominfo.roomSpecialComment" :key="indexr"
             :style="{left : specialRoom.left+'%',top : specialRoom.top+'%',width:specialRoom.width+'rem',height:specialRoom.height+'rem'}"
             class="drag-div">
          <div class="select-item">
            ONE
          </div>
        </div>

        <!--<div style="left:2%;top:77%;width: 2.9rem;height: 2.1rem " class="drag-div">-->
        <!--<div class="select-item">-->
        <!--Three-->
        <!--</div>-->
        <!--</div>-->

        <!--将每个用户对应到具体的位置 index rowNum indexs lineNum-->
        <div v-for="(employees,index) in employee" :key="index">

          <!--奇数-->
          <div v-for="(employe,indexs)  in employees" :key="indexs"
               v-if="indexs%2==0" :style="{left : roominfo.roomNormalComment.inWidth*indexs+roominfo.roomNormalComment.jLeft*1+'%',
                                           top : roominfo.roomNormalComment.inHeight*index+roominfo.roomNormalComment.jTop*1+'%',
                                           width:roominfo.roomNormalComment.width*1+'%',height:roominfo.roomNormalComment.height*1+'%'}"
               :class=" index+' drag-div ' +indexs " @drop='drop($event)' @dragover='allowDrop($event)'
               @click="clickOnes(employe,$event)">

            <div v-if="employe.employeeName!==null" draggable="true" class="select-item"
                 @dragstart="drag($event,employe)">{{employe.employeeName}}
            </div>

          </div>

          <!--偶数-->
          <div v-else
               :style="{left : roominfo.roomNormalComment.inWidth*indexs+roominfo.roomNormalComment.oLeft*1+'%',
                        top : roominfo.roomNormalComment.inHeight*index+roominfo.roomNormalComment.oTop*1+'%',
                        width:roominfo.roomNormalComment.width*1+'%',height:roominfo.roomNormalComment.height*1+'%'}"
               :class=" index+' drag-div ' +indexs " @drop='drop($event)' @dragover='allowDrop($event)'
               @click="clickOnes(employe,$event)">
            <div v-if="employe.employeeName!==null" draggable="true" class="select-item"
                 @dragstart="drag($event,employe)">{{employe.employeeName}}
            </div>

          </div>
        </div>

        <!--展示用户详细信息-->
        <div class="showImployeeInfo"
             x-placement="bottom">
          <div class="ivu-tooltip-inner">
            <div style=" text-align: center; width: auto;height: auto">
              <img src="../../../../static/images/1.png" style="width: 40%; height: 40%; border-radius: 50%;">
              <p style="margin-bottom: 2%;">
                <span v-if="CurentEmployee.employeeName!==null" style="font-weight: bold;"
                      @click="employeeDialog.dialogFormVisible = true">name:{{CurentEmployee.employeeName}}<i-button
                  type="info">Change Emoloyee</i-button></span>

                <span v-else @click="employeeDialog.dialogFormVisible = true">No Employee<i-button
                  type="info">Add new</i-button></span>

              </p>
              <div style="text-align: left;">
                <p style="margin: 0"><span style="margin-right: 5%; font-weight: bold;">Designation</span>{{CurentEmployee.designation}}
                </p>
                <p style="margin: 0"><span style="margin-right: 5%; font-weight: bold;">Employement Status</span>CPEBJ
                </p>
                <p style="margin: 0"><span style="margin-right: 5%; font-weight: bold;">Project</span>BGC-SHELL</p>
                <p style="margin: 0"><span style="margin-right: 5%; font-weight: bold;">Email</span>wll@bjhuazhong.com
                </p>
                <p style="margin: 0"><span
                  style="margin-right: 5%; margin-top: 5%;font-weight: bold;">Company Details</span></p>
                <p style="margin: 0"><span
                  style="margin-right: 5%; margin-top: 5%;font-weight: bold;">AccessCard Num:</span></p>


                <p style="margin: 0"><span style="margin-right: 5%; font-weight: bold;">Telepnone</span>Ext 50295</p>
                <p style="margin: 0"><span style="margin-right: 5%; font-weight: bold;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>TEl.No
                  04-555555</p>
                <p style="margin: 0"><span style="margin-right:5%; font-weight: bold;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Beijing
                  No.N/A</p>
                <p style="margin: 0"><span style="margin-right:5%; font-weight: bold;">EmailAddress</span>heqiao@cepbj.com
                </p>
                <hr style="color: black"/>
                <p style="margin: 0"><span style="margin-right:5%; font-weight: bold;">Asset Info:</span></p>
              </div>
              <div>
                <a class="guide_item"><i class="iconfont icon-zhuji" @click="clickForAssetInfo(1)"></i></a>
                <a class="guide_item"><i class="iconfont icon-computer" @click="clickForAssetInfo(2)"></i></a>
                <a class="guide_item"><i class="iconfont icon-laptop" @click="clickForAssetInfo(3)"></i></a>
                <a class="guide_item"><i class="iconfont icon-telephone2" @click="clickForAssetInfo(4)"></i></a>
              </div>
            </div>
          </div>
        </div>

        <!--展示资产详细信息-->
        <div class="showAssetInfo" v-show="assetIsShow" :class="{'meng ': assetIsShow} " x-placement="bottom">
          <div class="ivu-tooltip-inner">
            <div v-if=" this.CurentAseet !== '' " style="text-align: center; width: auto;height: 9rem">
              <div style="text-align: left; width: 80%;float: left ">
                <span style="font-weight: bold; clear: both">Lenovo P300 Series</span>
                <p style="margin: 0"><span style="margin-right: 10%; font-weight: bold;">Serial Number</span>{{CurentAseet.serialNumber}}
                </p>
                <p style="margin: 0"><span style="margin-right: 10%; font-weight: bold;">Tagged Number</span>{{CurentAseet.taggerNumber}}
                </p>
                <p style="margin: 0"><span style="margin-right: 10%; font-weight: bold;">Project</span>xxxxxxxx</p>
                <p style="margin: 0"><span style="margin-right: 10%; font-weight: bold;">DXB Code</span>xxxxxxxx</p>
                <p style="margin: 0"><span style="margin-right: 10%; font-weight: bold;">FN Code</span>xxxxxxxx</p>

              </div>
              <div style="width: 20%;float: left;height: 80%;line-height: 7.2rem">
                <a class="guide_item"><i class="iconfont icon-angle-right"></i></a>
              </div>

              <div style="margin-top: 0.5rem;margin-bottom: 0.5rem;clear: both">
                <span @click="dialog.dialogFormVisible = true"><i-button type="info">Change Another</i-button></span>
                <span @click="returnConfirms"><i-button type="warning">Remove</i-button></span>
              </div>
            </div>
            <div v-else>
              <div>
                <span v-if="this.assetType===1">NO CPU ASSET</span>
                <span v-else-if="this.assetType===2">No MONITER ASSET</span>
                <span v-else-if="this.assetType===3">No LAPTOP ASSET</span>
                <span v-else="this.assetType===4">No PHONE ASSET</span>
                <span @click="dialog.dialogFormVisible = true"><i-button type="info">Add new</i-button></span>
              </div>
            </div>
          </div>
        </div>

        <!--新增修改 -->
        <el-dialog :title="dialog.dialogTitle" :visible.sync="dialog.dialogFormVisible">
          <el-form :model="changeAssetForm" ref="recordForm" label-width="100px">

            <el-form-item label="serialNumber" prop="serialNumber">
              <el-input v-model="changeAssetForm.serialNumber"></el-input>
            </el-form-item>

          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialog.dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="save">确 定</el-button>
          </div>
        </el-dialog>


        <!--新增employee -->
        <el-dialog :title="employeeDialog.dialogTitle" :visible.sync="employeeDialog.dialogFormVisible">
          <el-form :model="changeEmployeeForm" ref="recordForm" label-width="100px">
            <el-form-item label="employeeNum" prop="employeeNum">
              <el-input v-model="changeEmployeeForm.employeeNum"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="employeeDialog.dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="saveEmployee">确 定</el-button>
          </div>
        </el-dialog>

      </div>


    </div>


  </div>
</template>

<script>
  import loginHeader from '../../../components/LoginHeader/loginHeader'
  import draggable from 'vuedraggable';
  import {mapState} from 'vuex'
  import {reqAssetBy, returnAsset, changeAsset, changeEmp, reqRoomInfoByFloor, changeOrSaveEmp} from "../../../api";

  let dom = '';
  export default {
    data() {
      return {
        employeeDialog: {
          dialogEdit: false,
          dialogTitle: '修改员工信息',
          dialogFormVisible: false
        },


        dialog: {
          dialogEdit: false,
          dialogTitle: '修改资产信息',
          dialogFormVisible: false
        },

        changeEmployeeForm: {
          employeeNum: '',
          currentEmployeeNum: '',
          roomNum: 601,
        },

        changeAssetForm: {
          curentSerialNumber: '',
          serialNumber: '',
          employeeUuid: '',
          assetType: ''
        },
        CurrentEmployeeUUID: '',
        CurentAseet: '',
        CurentEmployee: {},
        assetIsShow: false,
        assetType: '',
        changeIsShow: false,

      }
    },

    methods: {

      clickShowRoom(roomNum) {
        this.$store.dispatch('getEmployee', {roomNum})
        console.log(roomNum)
      },


      //点击每一个位置来显示右边的匡
      clickOnes(employee, event) {    //
        this.CurentAseet = ''
        this.CurentEmployee = employee;
        if (this.CurentEmployee.employeeName === null) {
          this.assetIsShow = true
          console.log(employee)
          var xindex = event.srcElement.classList[0]
          var yindex = ''
          if (event.srcElement.classList.length === 3) {
            yindex = event.srcElement.classList[2]
          } else {
            yindex = xindex
          }
          this.changeEmployeeForm.xindex = xindex
          this.changeEmployeeForm.yindex = yindex
        } else {
          this.assetIsShow = true
          console.log(employee)
          var xindex = event.srcElement.parentElement.classList[0]
          var yindex = ''
          if (event.srcElement.parentElement.classList.length === 3) {
            yindex = event.srcElement.parentElement.classList[2]
          } else {
            yindex = xindex
          }
          this.changeEmployeeForm.xindex = xindex
          this.changeEmployeeForm.yindex = yindex
        }
      },

      //根据用户编号和用户的资产号码获取用户对应资产的详细信息
      async clickForAssetInfo(assetType) {
        this.CurentAseet = ''
        this.assetType = assetType;
        const employeeUuid = this.CurentEmployee.employeeUuid
        const asset = await reqAssetBy({employeeUuid, assetType});
        if (asset.length > 0) {
          this.CurentAseet = asset[0]
        }
      },

      //归还资产
      async returnConfirms() {
        const result = confirm("confirm to Remove Asset?")
        console.log(result)
        if (result) {
          const employeeUuid = this.CurentEmployee.employeeUuid
          const serialNumber = this.CurentAseet.serialNumber
          console.log(serialNumber)
          const result = await returnAsset({employeeUuid, serialNumber});
          console.log(result)
          if (result.code === 0) {
            this.CurentAseet = ''
            this.clickForAssetInfo(this.assetType)

          }

        }
      },

      //增加或者编辑资产进行保存
      async save() {
        console.log(this.form)
        this.changeAssetForm.employeeUuid = this.CurentEmployee.employeeUuid
        this.changeAssetForm.assetType = this.assetType
        this.changeAssetForm.curentSerialNumber = this.CurentAseet.serialNumber
        var changeOrSaveAsset = this.changeAssetForm
        const result = await changeAsset(changeOrSaveAsset)
        if (result.code === 0) {
          this.dialog.dialogFormVisible = false;
          this.$message.success(result.errmsg);
          this.clickForAssetInfo(this.assetType)
        } else {
          this.$message.error(result.errmsg);
        }
      },

      saveEmployee: async function () {
        this.changeEmployeeForm.currentEmployeeNum = this.CurentEmployee.employeeUuid
        const employeeVo = this.changeEmployeeForm
        const result = await changeOrSaveEmp(employeeVo)
        if (result.code === 0) {
          this.$message.success("Change Or Save Employee successfully!");
          this.$store.dispatch('getEmployee', {roomNum: 601})
          this.employeeDialog.dialogFormVisible = false

        } else {
          this.$message.error("System Wrong,please try later")
        }


      },

      //进行div拖拽Begin
      //进行拖拽开始
      drag(event, employe) {
        dom = event.currentTarget;
        this.CurrentEmployeeUUID = employe.employeeUuid
      },

      //放下div执行的方法
      async drop(event) {
        //preventDefault方法是阻止元素发生的默认的行为（例如，当点击提交按钮是阻止对表单的提交）
        event.preventDefault()
        const conf = confirm("Are you sure to move here")
        if (conf) {
          if (event.srcElement.className != 'select-item') {
            var xindex = event.srcElement.classList[0]       //要移到的座位坐标，xindex,yindex
            var yindex = ''
            //为了防止xindex和yindex类名一致而只有一个
            if (event.srcElement.classList.length === 3) {
              yindex = event.srcElement.classList[2]
            } else {
              yindex = xindex
            }
            var employeeUuid = this.CurrentEmployeeUUID
            await changeEmp({employeeUuid, xindex, yindex})
            event.target.appendChild(dom);
          } else {
            this.$message.error("The seats have been taken")
          }
        } else {
          this.$message.error("Canceled")
        }
      },

      allowDrop(event) {
        event.preventDefault();
      },
      //进行div拖拽End


    },

    computed: {

      //从state中取到employee和room employee [[{},{}],[{},{}],]
      ...mapState(['employee', 'room', 'roominfo'])
    },

    async mounted() {

      //通过楼层号找到对应的房间号，为的是显示头table 601 602 603这些按钮
      const result = await reqRoomInfoByFloor({floor: 6})
      this.$store.dispatch('commitRoom', {room: result})

      //通过房间号照度奥对应的employee,并提交到state
      //created:this.$store.dispatch('getEmployee', {roomNum: 601})

      //给指定div设置颜色 xindex yindex div的坐标
      var xindex = this.$route.params.xindex
      var yindex = this.$route.params.yindex
      if (xindex !== undefined && yindex !== undefined) {
        setTimeout(function () {
          var e
          if (xindex < yindex) {
            e = document.getElementsByClassName(xindex + " drag-div " + yindex)[0].children
          } else {
            e = document.getElementsByClassName(xindex + " drag-div " + yindex)[1].children
          }
          e[0].style.backgroundColor = "red"
        }, 2000)
      }
    },

    components: {
      draggable,
      loginHeader
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .node {
    width 100%
    padding-bottom 50%
    /*background: url("../../../pages/rooms/6FloorRooms/images/621-622.png") no-repeat*/
     background-size 63% //背景照片

    position relative
    text-align center
    height: 0px

  }

  .showAssetInfo {
    position: absolute;
    left 65%
    top 95%
    will-change: top, left;
    width 30%
    height auto
    float left
  }

  .showImployeeInfo {
    position: absolute;
    left 65%
    will-change: top, left;
    width 30%
    float left
  }

  .select-item {
    width 100%
    height 100%
    background-color: #5bc0de;
    display: inline-block;
    text-align: center;
    border-radius: 3px;
    margin-right: 10px;
    cursor: pointer;
    color: #fff;
  }

  .select-item:hover {
    background-color rgba(170, 170, 170, 0.5)
  }

  //存在的位置
  .drag-div {
    background-color rgba(70, 70, 70, 0.5)
    border 1px solid black
    margin auto 0
    text-align: center;
    width: 5%;
    cursor: pointer;
    height 10%
    position absolute
  }

  .drag-div:hover {
    background-color rgba(170, 170, 170, 0.5)
  }

  .drag-people-label {
    margin-bottom: 0;
  }

  .ivu-tooltip-inner {
    max-width none
  }

  .iconfont {
    font-size 1.8rem
    padding-right 10%

  }

  .guide_item
    color #fff
    &.on
      color #02a774


</style>
