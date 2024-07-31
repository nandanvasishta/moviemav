import responseHandler from "../handlers/response.handler.js";
import reviewModel from "../models/review.model.js";

let create=async(req,res)=>{
    try {
         let {movieId}=req.params

         let review=new reviewModel({
            user:req.user.id,
            movieId,
            ...req.body
         })
         await review.save()

         responseHandler.created(res,{
            ...review._doc,
            id:review.id,
            user:req.user
         })
    } catch {
        
    }
}

let remove=async(req,res)=>{
    try {
       let {reviewId}=req.params
       
       let review =await reviewModel.findOne({
        _id:reviewId,
        user:req.user.id
       })

       if(!review) return responseHandler.notfound(res)

        await review.remove()

        responseHandler.ok(res)
    } catch  {
     responseHandler.error(res)   
    }
}
  

let getReviewsOfUser=async (req,res)=>{
    try {
        let reviews=await reviewModel.find({
            user:req.user.id
        }).sort("-createdAt")

        responseHandler.ok(res,reviews)
    } catch  {
        responseHandler.error(res)
    }
}

export default {create,remove,getReviewsOfUser}