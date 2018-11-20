/*

 */
import ajax from '../ajax'
const BASE_URL='http://172.30.1.83:8001'
// const BASE_URL='http://127.0.0.1:8001'
// const BASE_URL='/api'

//1、根据用户ID和对应编号来获取定应的资产信息
export const reqAssetBy=({employeeUuid,assetType})=>ajax(BASE_URL+"/record/getasset",{employeeUuid,assetType},"POST")

//2、用户回收资产
export const returnAsset=({employeeUuid,serialNumber})=>ajax(BASE_URL+"/record/returnasset",{employeeUuid,serialNumber},'POST')

//3、用户修改资产
export const changeAsset=(changeOrSaveAsset)=>ajax(BASE_URL+"/record/changeasset",changeOrSaveAsset,'POST')

//4、获取所有资产记录信息
export const getAllAssetRecord=({pageNum,pageSize,queryPo})=>ajax(BASE_URL+"/record/search_record_info",{pageNum,pageSize,queryPo},'POST')
