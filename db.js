const{Pool}=require("pg");
const pool =new Pool({
user:"postgres",
host:"localhost",
database:"courier",
password:"endcode123",
port: 5432 
});
module.exports=pool;