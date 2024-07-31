import "dotenv/config"
let baseUrl=process.env.TMDB_BASE_URL
let key=process.env.TMDB_KEY

let getUrl=(endpoint,params)=>{
    let qs=new URLSearchParams(params)

    return `${baseUrl}${endpoint}?api_key${key}&${qs}`
}
export default {getUrl}