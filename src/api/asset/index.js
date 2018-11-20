/*

 */
import ajax from '../ajax'
const BASE_URL='http://172.30.1.83:8001'
// const BASE_URL='http://127.0.0.1:8001'
// const BASE_URL='/api'

//1、获取所有的资产信息
export const getAllAsset=({pageNum,pageSize,queryPo})=>ajax(BASE_URL+"/asset/search_asset_info",{pageNum,pageSize,queryPo},'POST')

//2、添加新的资产信息
export const createNewAsset=(asset)=>ajax(BASE_URL+"/asset/add",asset,"POST")

//3、更新资产信息
export const updateAsset=(asset)=>ajax(BASE_URL+"/asset/update",asset,"PUT")

//4、获取首页数据接口
export const reqAssetHomeData=()=>ajax(BASE_URL+"/asset/home",'',"GET")

//5、根据资产信息获取具体位置信息,返回的是这个资产的拥有者
export const getLocationByAsset=(serialNumber)=>ajax(BASE_URL+"/asset/search_location",serialNumber,'POST')

//6、根据地址获取图片
export const getQRcodeByAddress=(assetQrcodeAddress)=>ajax(BASE_URL+"/asset/search_qrcode",assetQrcodeAddress,"POST")

