import axiosRequest from './axios'
export const loginRequest =async (userInfo:object)=>{
    let result=await axiosRequest.post({
        url:'Login.login',
        data:userInfo
    })
    return result
}