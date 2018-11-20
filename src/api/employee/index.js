/*

 */
import ajax from '../ajax'
const BASE_URL='http://172.30.1.83:8001'
// const BASE_URL='http://127.0.0.1:8001'
// const BASE_URL='/api'

//1、根据roomNum获取roomeployee
export const  reqEmpInfo=({roomNum})=>ajax(BASE_URL+"/employee/getEmployeeByroomNum",{roomNum},'POST')

//6、用户修改座位信息
export const changeEmp=({employeeUuid,xindex,yindex})=>ajax(BASE_URL+'/employee/changeemp',{employeeUuid,xindex,yindex},'POST')

//15、位置新增员工，或者更换员工
export const  changeOrSaveEmp=(employeeVo)=>ajax(BASE_URL+"/employee/changeOrSaveEmp",employeeVo,"POST")

//16、获取所有员工
export const getAllEmp=({pageNum,pageSize,queryPo})=>ajax(BASE_URL+"/employee/search_employee_info",{pageNum,pageSize,queryPo},'POST')

//17、创建新用户
export const createNewEmployee=(employee)=>ajax(BASE_URL+"/employee/add",employee,"POST")
