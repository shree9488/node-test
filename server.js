const express = require("express");
var app = express();

app.get('/', (req, res) => {
    res.send("Hellow Express");
});

var mysql = require('mysql');
const port =  process.env.PORT || 3000;
// var con = mysql.createConnection({
//   host: "192.168.1.99",
//   user: "root",
//   password: "abv",
//   database: "abs"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   var pre_query = new Date().getTime();
//   const query =  'select * from subusers';
//   con.query(query, function (err, result, fields) {
//     var post_query = new Date().getTime();
//     if (err) throw err;
//     console.log(result);
//    // return result;
//     //console.log(con. );
//     var duration = (post_query - pre_query) / 1000;
//     console.log('duration ===>',duration);
//     con.end();
//   });
// });


app.listen(port,() => {
    console.log(`Server is up on port ${port}`);
    
});