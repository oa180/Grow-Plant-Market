const router=require("express").Router()
const PlantController=require("../app/controller/plant.controller")
const {auth}=require("../app/middlewares/auth.middlewares")
router.post("/createPlant",auth,PlantController.createPlant)
router.get("/GetPlant/:id",auth,PlantController.Getplant)
router.get("/GetAllPlants",auth,PlantController.GetAllPlants)
router.patch("/editPlant/:id",auth,PlantController.editPlant)
router.delete("/deletePlant/:id",auth,PlantController.deletShop)
router.get("/buyPlant/:id",auth,PlantController.buyPlant)

module.exports=router