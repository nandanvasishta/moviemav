import privateClient from "../client/private.client";

let reviewEndpoints={
    list:"reviews",
    add:"reviews",
    remove:({reviewId})=>`review/${reviewId}`
}

let reviewApi={
    add:async({
        mediaId,
        mediaType,
        mediaTitle,
        mediaPoster,
        content
    })=>{
       try {
        let response= await privateClient.post(
            reviewEndpoints.add,
            {
                mediaId,
                mediaType,
                mediaTitle,
                mediaPoster,
                content
            }
        )
        return {response}
       } catch (err) { return {err}}
    },
    remove:async({reviewId})=>{
           try {
            let response= await privateClient.delete(reviewEndpoints.remove({
                reviewId
            }))
            return {response}
           } catch (err) { return {err}}
        },
        getList:async()=>{
            try {
             let response= await privateClient.get(reviewEndpoints.remove(reviewEndpoints.list))
             return {response}
            } catch (err) { return {err}}
         }

}
export default reviewApi;