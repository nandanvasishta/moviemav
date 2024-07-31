import express from "express"
import personController from "../controllers/person.controller.js"

let router =express.Router({mergeParams:true})

router.get("/:person/medias",personController.personMedias)

router.get("/:personId",personController.personDetail)

export default router