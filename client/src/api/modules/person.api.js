import publicClient from "../client/public.client"

let personEndpoints={
    detail:({personId})=> `person/${personId}`,
    medias:({personId})=>`person/${personId}/medias`
}

let personApi={
    detail:async ({personId})=>{
        try {
           let response=await publicClient.get(personEndpoints.detail({personId})) 
           return {response};
        } catch(err) {return {err}}
    },
    medias:async ({personId})=>{
        try {
           let response=await publicClient.get(personEndpoints.medias({personId})) 
           return {response};
        } catch(err) {return {err}}
    }
}

export default personApi