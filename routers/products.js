const { Router } = require('express') //Router class from express
//Import the corresponding model-Image
const Product = require("../models").product;
//Instantiate a router
const router = new Router();
//Register a GET / route that gets all the products!
router.get("/", async (req, res, next) => { //dont run with other gets and  /, only one get route in the same path 
    try {
        //Get ALL images/ one image is by id with findByPk
        const products = await Product.findAll()
        res.json(products)
    } catch (e) {
        next(e)
    }
})

//EXPORT THE ROUTER
module.exports = router;