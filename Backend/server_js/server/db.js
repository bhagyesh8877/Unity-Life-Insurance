const mysql=require('mysql'); 
const Pool=mysql.createPool({  
    host:'localhost',
    user:'root',
    password:'Shubh@7770025901',
    port:3306,
    database:'svrp',
    connectionLimit:100

});
// Pool.connect((err) => {
//     if (err) throw err;
//     console.log('Connected to MySQL server');
//   });
module.exports={
    Pool,
}