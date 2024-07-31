import axios from "axios";

let get=async (url)=>{
    let response=await axios.get(url)
    return response.data
}
export default {get};