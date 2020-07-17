//Routing
//Express server 
const express = require("express");
const PORT = 4005;
const app = express();
const Product = require("./models").product;
const Category = require("./models").category;
const Customer = require("./models").customer;
const Order = require("./models").order;
//Import the routes for products, categories and orders
const products = require("./routers/products")
const categories = require("./routers/categories")
const customers = require("./routers/customers")

//Start a simple express server:
//Gets all customers
// app.get("/customers", async (req, res, next) => {
//     try {
//         const customers = await Customer.findAll({ include: [Product] });
//         console.log('testing customers', customers)
//         res.send(customers);
//     } catch (e) {
//         next(e);
//     }
// }); //test with  http :4005/customers

// app.get("/products", async (req, res, next) => {
//     try {
//         const products = await Product.findAll({ include: [Category] });
//         res.send(products);
//     } catch (e) {

//         next(e);
//     }
// });

// app.get("/customers", async (req, res, next) => {
//     try {
//         const customers = await Customer.findAll();
//         console.log('testing customers', customers)
//         res.send(customers);
//     } catch (e) {
//         next(e);
//     }
// }); //test with  http :4005/customers
// app.get("/orders", async (req, res, next) => {
//     try {
//         const customers = await Order.findAll({ include: [Customer] });
//         console.log('testing customers', customers)
//         res.send(customers);
//     } catch (e) {
//         next(e);
//     }
// }); //test with  http :4005/customers

//Parser Middleware
//1.SET UP PARSER MIDDLEWARE-ALWAYS BEFORE ROUTERS: 
const jsonParser = express.json();
app.use(jsonParser);
//2Register routes here
app.use("/products", products)
app.use("/categories", categories)//gets all products from product.js route 
app.use("/customers", customers)//gets all customers from customers.js 

app.listen(PORT, () => console.log("server running!"));
