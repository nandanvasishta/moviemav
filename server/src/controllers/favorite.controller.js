import responseHandler from "../handlers/response.handler.js";
import favoriteModel from "../models/favorite.model.js";

let addFavorite =async (req,res)=>{
    try{
        let isFavorite=await favoriteModel.findOne({
            user:req.user.id,
            mediaId:req.body.mediaId
        })
        if(isFavorite) return responseHandler.ok(res, isFavorite)

            let favorite=new favoriteModel({
                ...req.body,
                user:req.user.id
            })
            await favorite.save()

            responseHandler.created(res,favorite)
    }catch{
       responseHandler.error(res) 
    }
}


let removeFavorite=async (req,res)=>{
    try {
        let {favoriteId}=req.params
     let favorite=await favoriteModel.findOne({
        user:req.user.id,
        _id:favoriteId
     })
       
     if(!favorite)  return responseHandler.notfound(res)

        await favorite.remove()
        responseHandler.ok(res)
    } catch {
        responseHandler.error(res)
    }
}

let getFavoritesOfUser=async (req,res)=>{
    try {
        let favorite=await favoriteModel.find({user:req.user.id}).sort("-createdAt");
        responseHandler.ok(res,favorite)
    } catch  {
        responseHandler.error(res)
    }
}
 
export default {addFavorite,
    removeFavorite,
    getFavoritesOfUser
}