/*

 */
import ajax from './ajax'
// const BASE_URL='http://172.30.1.83:8001'
const BASE_URL='http://127.0.0.1:8001'
// const BASE_URL='/api'

//1、根据位置坐标获取位置信息
export const  reqEmpInfo=({roomNum})=>ajax(BASE_URL+"/employee/listroom",{roomNum},'POST')

//
export const reqRoomInfo=(roomNum)=>ajax(BASE_URL+"/room/roomInfo",roomNum,"POST")

//2、根据楼层号码获取每个楼层的room信息
export const  reqRoomInfoByFloor=({floor})=>ajax(BASE_URL+"/room/listroom",{floor},'POST')

//3、根据用户ID和对应编号来获取定应的资产信息
export const reqAssetBy=({employeeUuid,assetType})=>ajax(BASE_URL+"/record/getasset",{employeeUuid,assetType},"POST")

//4、用户回收资产
export const returnAsset=({employeeUuid,serialNumber})=>ajax(BASE_URL+"/record/returnasset",{employeeUuid,serialNumber},'POST')

//5、用户修改资产
export const changeAsset=(changeOrSaveAsset)=>ajax(BASE_URL+"/record/changeasset",changeOrSaveAsset,'POST')

//6、用户修改座位信息
export const changeEmp=({employeeUuid,xindex,yindex})=>ajax(BASE_URL+'/employee/changeemp',{employeeUuid,xindex,yindex},'POST')

//7、获取所有的资产信息
export const getAllAsset=({pageNum,pageSize,queryPo})=>ajax(BASE_URL+"/asset/search_asset_info",{pageNum,pageSize,queryPo},'POST')

//8、添加新的资产信息
export const createNewAsset=(asset)=>ajax(BASE_URL+"/asset/add",asset,"POST")

//9、更新资产信息
export const updateAsset=(asset)=>ajax(BASE_URL+"/asset/update",asset,"PUT")

//10、登陆接口
export const userLogin=(userVo)=>ajax(BASE_URL+"/user/login",userVo,"POST")

//11、获取首页数据接口
export const reqAssetHomeData=()=>ajax(BASE_URL+"/asset/home",'',"GET")

//12、获取所有资产记录信息
export const getAllAssetRecord=({pageNum,pageSize,queryPo})=>ajax(BASE_URL+"/record/search_record_info",{pageNum,pageSize,queryPo},'POST')

//13、根据资产信息获取具体位置信息,返回的是这个资产的拥有者
export const getLocationByAsset=(serialNumber)=>ajax(BASE_URL+"/asset/search_location",serialNumber,'POST')

//14、根据地址获取图片
export const getQRcodeByAddress=(assetQrcodeAddress)=>ajax(BASE_URL+"/asset/search_qrcode",assetQrcodeAddress,"POST")

//15、位置新增员工，或者更换员工
export const  changeOrSaveEmp=(employeeVo)=>ajax(BASE_URL+"/employee/changeOrSaveEmp",employeeVo,"POST")

//16、获取所有员工
export const getAllEmp=({pageNum,pageSize,queryPo})=>ajax(BASE_URL+"/employee/search_employee_info",{pageNum,pageSize,queryPo},'POST')

//17、创建新用户
export const createNewEmployee=(emplouyee)=>ajax(BASE_URL+"employee/add",emplouyee,"POST")
