import jsonwebtoken from "jsonwebtoken"
import responseHandler from "../handlers/response.handler.js"
import userModel from "../models/user.model.js"
import "dotenv/config"

let tokenDecode=(req)=>{
    try{
        let bearerHeader=req.headers["authorization"]

        if(bearerHeader){
            let token = bearerHeader.split(" ")[1]

            return jsonwebtoken.verify(
                token,
                process.env.TOKEN_SECRET
            )
        }
        return false;
    }catch{
        return false
    }
}

let auth = async (req,res,next)=>{
    let tokenDecoded=tokenDecode(req)

    if(!tokenDecoded)return responseHandler.unauthorize(res)

        let user= await userModel.findById(tokenDecoded.data)

        if(!user) return responseHandler.unauthorize(res)

            req.user =user;

            next();
}
export default {auth,tokenDecode}