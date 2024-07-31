import privateClient from "../client/private.client"

let favoriteEndpoints={
    list:"user/favorites",
    add: "user/favorites",
    remove:({favoriteId})=>`user/favorites/${favoriteId}`
}

let favoriteApi={
    getList:async()=>{
        try{
            let response=await privateClient.get(favoriteEndpoints.list)
            return{response}
        }catch (err) {return{err}}
    },
    add:async({
        mediaId,
        mediaType,
        mediaTitle,
        mediaPoster,
        mediaRate
    })=>{
        try{
            let response=await privateClient.post(favoriteEndpoints.remove,{
                mediaId,
                mediaType,
                mediaTitle,
                mediaPoster,
                mediaRate
            })
            return{response}
        }catch (err) {return{err}}
    },
    remove:async({favoriteId})=>{
        try{
            let response=await privateClient.delete(favoriteEndpoints.delete({favoriteId}))
            return{response}
        }catch (err) {return{err}}
    },
}
export default favoriteApi