import express from "express"
import mediaController from "../controllers/media.controller.js"

let router =express.Router({mergeParams:true})

router.get("/serach",mediaController.search)

router.get("/genres",mediaController.getGenres)

router.get("/detail/mediaId",mediaController.getDetail)

router.get("/:mediaCategory",mediaController.getList)

export default router