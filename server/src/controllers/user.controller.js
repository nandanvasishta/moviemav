import userModel from "../models/user.model.js"
import jsonwebtoken from 'jsonwebtoken'
import responseHandler from "../handlers/response.handler.js"
import "dotenv/config"

let signup= async(req,res)=>{
    try {
        let{username,password, displayName}=req.body;

        let checkUser =await userModel.findOne({username})

        if(checkUser) return responseHandler.badrequest(res, "username already used");

        let user=new userModel()

        user.displayName =displayName
        user.username=username
        user.setPassword(password);

        await user.save();

        let token=jsonwebtoken.sign(
            {data:user.id},
            process.env.TOKEN_SECRET,
            {expiresIn:"24h"}
        );
        responseHandler.created(res,{
            token,
            ...user._doc,
            id:user.id,
        })
    } catch {
       responseHandler.error(res) 
    }
}

let signin=async(req,res)=>{
    try {
        let {username,password}=req.body

        let user=await userModel.findOne({username}).select("username password salt id displayName")

        if(!user) return responseHandler.badrequest(res, "User not exist")

            if(!user.validPassword(password)) return responseHandler.badrequest(res,"Wrong password")

                let token=jsonwebtoken.sign(
                    {data:user.id},
                    process.env.TOKEN_SECRET,
                    {expiresIn:"24h"}
                );
                user.password = undefined;
               user.salt=undefined
             responseHandler.created(res,{
                    token,
                    ...user._doc,
                    id:user.id,
                })
        
    } catch  {
        responseHandler.error(res)
    }
}

let updatePassword=async(req,res)=>{
    try {
        let{password,newPassword}=req.body

        let user= await userModel.findById(req.user.id).select("password id salt")

        if(!user) return responseHandler.unauthorize(res)

            if(!user.validPassword(password)) return responseHandler.badrequest(res,"Wrong password")

                user.setPassword(newPassword)

                await user.save()

                responseHandler.ok(res)
    } catch {
       responseHandler.error(res) 
    }
}

let getInfo= async (req,res )=>{
    try {
        let user= await userModel.findById(req.user.id)

        if(!user) return responseHandler.notfound(res)
            responseHandler.ok(res,user)
    } catch  {
        responseHandler.error(res)
    }
}

export default {
    signup,
    signin,
    getInfo,
    updatePassword,
}