import {validationResult} from "express-validator"

let validate=(req,res,next)=>{
    let errors=validationResult(req)

    if(!errors.isEmpty()) return res.status(400).json(errors.array()[0].msg);
}

export default { validate}