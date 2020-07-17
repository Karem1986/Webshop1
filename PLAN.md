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

Create queries--> queries.js [x]





