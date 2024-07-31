import publicClient from "../client/public.client"

let genreEndpoints={
    list:({mediaType})=>`${mediaType}/genres`
}

let genreApi={
   getList:async({mediaType})=>{
    try{
        let response=await publicClient.get(genreEndpoints.list({mediaType}))
        return{response}
    }catch (err) {return{err}}
   }
}
export default genreApi