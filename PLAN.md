-Product 
[x] model & migration //Migration files have the model name in plural!!!


-Category
[x] model & migration 


-Customer
[x] model & migration


-Order
[x] model & migration

Add Relationships(separate migration)
1. Write a migration to add the foreign keys[x] //Model is in plural!!!
2. Add the relations to our sequelize models:
> Product belongsTo order
>Orders hasMany products-->productId on orders[x]
> Customer hasMany orders-->userId on Orders[x]
>Category hasMany products-->categoryId on Product table[x]
>Customer can order many products and a product can be ordered 
by many customers--> manytomany [x]

Add seed data

[x] seeds for categories(related data, categoryId)
[x] seeds for customers(related data, userId)
[x] seeds for products (related data, productId)
[x]seeds for orders-Join table with userId and productId

Create queries--> queries.js [x] ---Done with Sequelize! 

//ROUTING STEPS:
1. Create index.js [x]
2. npm install express [x]
2. Start a simple express server [x]
3. Create a simple GET route [x]
4. Test with httpie [x]
if all works--> Start building the routes we need to access our 
database (REST routes)

//ROUTES GET/POST as in https://reader.codaisseur.com/courses/backend-bootcamp/04-advanced-apis/02-rest
1. Create a folder "routers" [x]
2. Inside create files according to our data: 
- products.js [x]
- categories.js []
- orders.js 
3. Inside those files: [x]
-- Import the Router class from express.
-- Import the corresponding model.
-- Instantiate a router.
-- Register a GET / route that responds with all the images/users.
-- Export the router.
4. Index.js do the following: 
- Export parser middleware before routes [x]
-- set up routes with app.use [x]

5. Login and authentication--https://reader.codaisseur.com/courses/backend-bootcamp/04-advanced-apis/04-jwt













