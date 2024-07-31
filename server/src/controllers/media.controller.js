import responseHandler from "../handlers/response.handler.js";
import tmdbApi from "../tmdb/tmdb.api.js"
import userModel from "../models/user.model.js";
import favoriteModel from "../models/favorite.model.js"
import reviewModel from "../models/review.model.js"
import tokenMiddlerware from "../middlewares/token.middleware.js"
let getList= async (req,res)=>{
    try {
        let{page}=req.query
        let {mediaType,mediaCategory}=req.params

        let response=await tmdbApi.mediaList({mediaType,mediaCategory,page})

        return responseHandler.ok(res,response)
    } catch  {
        responseHandler.error(res)
    }
}

let getGenres =async(req,res)=>{
    try {
        let {mediaType}=req.params

        let response =await tmdbApi.mediaGenres({mediaType})

        return responseHandler.ok(res,response)
    } catch{
      responseHandler.error(res)  
    }
}

let search=async(req,res)=>{
    try {
        let {mediaType}=req.params;
        let {query,page}=req.query;

        let response =await tmdbApi.mediaSearch({
            query,
            page,
            mediaType:mediaType==="people"?"person":mediaType
        })
        responseHandler.ok(res,response);
    } catch  {
        responseHandler.error(res)
    }
}


let getDetail=async(req,res)=>{
    try {
        let {mediaType,mediaId}=req.params;
        let params={mediaType,mediaId}

        let media=await tmdbApi.mediaDetail(params);

        media.credits=await tmdbApi.mediaCredits(params)

        let videos=await tmdbApi.mediaVideos(params)

        media.videos=videos

        let recommend =recommend.results

        media.images=await tmdbApi.mediaImages(params)

        let tokenDecoded=tokenMiddlerware.tokenDecode(req)

        if(tokenDecoded){
            let user= await userModel.findById(tokenDecoded.data)
            if(user){
                let isFavorite= await favoriteModel.findOne({user:user.id,mediaId})
                media.isFavorite=isFavorite !==null
            }
        }
        media.reviews=await reviewModel.find({mediaId}).populate("user").sort("-createdAt")

        responseHandler.ok(res,media);
    } catch  {
        responseHandler.error(res)
    }
}
export default {
    getList,getGenres,search,getDetail
}