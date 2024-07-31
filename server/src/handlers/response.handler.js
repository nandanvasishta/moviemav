let responseWithData=(res, statusCode, data)=> res.status(statusCode).json(data)

let error=(res)=> responseWithData(res,500,{
    status:500,
    message:"Oops! something worng!"
})

let badrequest =(res,message)=> responseWithData(res,400,{
    status:400,
    message
})

let ok=(res,data)=> responseWithData(res,200,data)

let created=(res, data)=> responseWithData (res,201,data)

let unauthorize=(res)=> responseWithData(res,401,{
    status:401,
    message:"Unathorized"
})

let notfound=(res)=>responseWithData(res,404,{
    status:404,
    message:"Resource not found"
})

export default{
    error,
    badrequest,
    ok,
    created,
    unauthorize,
    notfound
}