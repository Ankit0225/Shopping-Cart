### Prepare DB

- Login in into Your Database

-  mysql -u root -p;

   Enter Passowrd: (Your Default Mysql Password)  

```sql
create database shopping_cart_db;

create user owner identified by 'shopping';

use shopping_cart_db;
grant all privileges on shopping_cart_db to owner; 
grant all privileges on shopping_cart_db.* to owner; 
```