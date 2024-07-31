import privateClient from "../client/private.client"
import publicClient from "../client/public.client"

let userEndpoints={
    signin: "user/signin",
    signup:"user/signup",
    getInfo:"user/info",
    passwordUpdate:"user/update-password",
  

}

let userApi={
    signin:async({username,password})=>{
        try {
          let response =await publicClient.post(
            userEndpoints.signin,
            {username,password}
          );
          return {response}    
        } catch (err) {
            return {err}
            
        }
    },

    signup:async({username,password,confirmPassword, displayName})=>{
        try {
          let response=await publicClient.post(
            userEndpoints.signup,
            {username,password,confirmPassword, displayName}
          )  
          return {response}
        } catch (err) {
            return {err}
            
        }
    },

    getInfo:async()=>{
        try {
             let response=await privateClient.get(userEndpoints.getInfo)
             return {response}  
        } catch (err) {
            return {err}
            
        }
    },
    passwordUpdate:async({password,newpassword,confirmNewPassword})=>{
        try {
             let response=await privateClient.post(userEndpoints.signup,
                {password,newpassword,confirmNewPassword}
             )
             return {response}  
        } catch (err) {
            return {err}
            
        }
    },

}
export default userApi;