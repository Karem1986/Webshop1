const { Router } = require('express') //Router class from express
//Import the corresponding models
const Customers = require("../models").customer;
//Instantiate a router
const router = new Router();
//Import bcrypt for Password:
const bcrypt = require('bcrypt')
// //Register a GET / route that gets all the products!
// router.get("/", async (req, res, next) => { //dont run with other get routes// USE only one get route in the same path 
//     try {
//         //Get ALL customers
//         const customers = await Customers.findAll()
//         res.json(customers)
//     } catch (e) {
//         next(e)
//     }
// })

//Register a POST to create a new customer router.post 
// router.post("/", async (req, res, next) => { //uses image route in index.js
//     try {
//         //create a new image in the database    
//         const { name, lastName, address, email, phone, password } = req.body //the model has these properties
//         if (!name || !lastName || !address || !email || !phone) {
//             res.status(404).send("Missing one or more parameters");
//         } else {
//             const hashedPassword = bcrypt.hashSync(password, 10)
//             const customerCreate = await Customers.create({ name, lastName, address, email, phone, password: hashedPassword });
//             res.json(customerCreate);
//         }
//     } catch (e) {//tested with: http POST :4005/customers name="Dortel" lastName="serhujik" 
//         next(e)
//     }
// })


//EXPORT THE ROUTER
module.exports = router;