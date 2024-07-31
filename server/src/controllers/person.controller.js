import responseHandler from "../handlers/response.handler.js";
import tmdbApi from "../tmdb/tmdb.api.js";

let personDetail=async(req,res)=>{
try {
    let {personId}=req.params

    let person =await tmdbApi.personDetail({personId})

    responseHandler.ok(res,person)
} catch  {
    responseHandler.error(res)
}
}

let personMedias=async(req,res)=>{
    try {
        let {personId}=req.params;

        let medias=await tmdbApi.personMedias({personId})
        responseHandler.ok(res,medias)
    } catch  {
        
    }
}

export default {
    personDetail,
    personMedias
}