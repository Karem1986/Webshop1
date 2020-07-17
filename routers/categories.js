const { Router } = require('express') //Router class from express
//Import the corresponding models
const Categories = require("../models").category;
//Instantiate a router
const router = new Router();
//Register a GET / route that gets all the products!
router.get("/", async (req, res, next) => { //dont run with other gets and  /, only one get route in the same path 
    try {
        //Get ALL images/ one image is by id with findByPk
        const categories = await Categories.findAll()
        res.json(categories)
    } catch (e) {
        next(e)
    }
})

//Get products by category 

//EXPORT THE ROUTER
module.exports = router;