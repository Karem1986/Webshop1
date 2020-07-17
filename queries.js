const Category = require("./models").category;
const Product = require("./models").product;
const Customer = require("./models").customer;
const Order = require("./models").order;


//This retrieves all products in all categories
// const getCategoryWithProducts = async () => {
//     const categories = await Category.findAll({ include: [Product] });
//     const plainCategories = categories.map(c => c.get({ plain: true }));
//     console.log(plainCategories[0]);
// };
// //test with node queries.js
// getCategoryWithProducts();

//Find all orders with their customers-WORKS but only finding all orders
// const getCustomersWithOrders = async () => {
//     const customerswithorders = await Order.findAll({ include: [Customer] });
//     // console.log("testing customers:", customers)
//     const plainOrders = customerswithorders.map(c => c.get({ plain: true }));
//     // console.log('testing plainOrders:', plainOrders)//returns orders and their customers
//     console.log(plainOrders); //Works without the [0] because otherwise we just get in the array the first customer. 
// };
// //Test in terminal: node queries.js
// getCustomersWithOrders();

const getCustomersWithOrders = async () => {
    const customerswithorders = await Customer.findAll({ include: [Order] });
    // console.log("testing customers:", customers)
    const plainOrders = customerswithorders.map(c => c.get({ plain: true }));
    // console.log('testing plainOrders:', plainOrders)//returns orders and their customers
    console.log(plainOrders); //Works without the [0] because otherwise we just get in the array the first customer. 
};
//Test in terminal: node queries.js
getCustomersWithOrders();

// //Find a product by id--WORKS
// async function getProductById(key) {
//     const productbyId = await Product.findByPk(key)
//     return productbyId ? productbyId.get({ plain: true }) : "Product not found"
// }
// // getProductById(2).then(productId => console.log("This is product id:", productId))

// //Find all categories--WORKS 
// async function getAllCategories() {
//     const allCategories = await Category.findAll();
//     return allCategories.map(item => item.get({ plain: true }))
// }
// getAllCategories().then(c => console.log("these are all the categories", c))

//NEXT: ROUTING!!! 