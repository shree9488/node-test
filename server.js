const express = require("express");
var app = express();

app.get('/', (req, res) => {
    res.send("Hellow Express");
});

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "192.168.1.99",
  user: "root",
  password: "K!s$ht@2@15",
  database: "db_fastbanking"
});

con.connect(function(err) {
  if (err) throw err;
  var pre_query = new Date().getTime();
  con.query(`SELECT 
  COUNT(*) AS numrows
FROM
  tbl_fastbanking_merchant_user_transaction_data
      LEFT JOIN
  tbl_fastbanking_merchant ON tbl_fastbanking_merchant.merchant_id = tbl_fastbanking_merchant_user_transaction_data.merchant_id
      LEFT JOIN
  tbl_fastbanking_subusers ON tbl_fastbanking_subusers.subuser_id = tbl_fastbanking_merchant_user_transaction_data.final_decision_subuser_id
      LEFT JOIN
  tbl_fastbanking_merchant_site_registration ON tbl_fastbanking_merchant_site_registration.site_id = tbl_fastbanking_merchant_user_transaction_data.site_id
      LEFT JOIN
  tbl_fastbanking_users ON tbl_fastbanking_users.user_id = tbl_fastbanking_merchant_user_transaction_data.user_id
      LEFT JOIN
  tbl_fastbanking_customer_loan ON tbl_fastbanking_customer_loan.transaction_id = tbl_fastbanking_merchant_user_transaction_data.transaction_id
      LEFT JOIN
  tbl_fastbanking_promo_offers ON tbl_fastbanking_promo_offers.offer_id = tbl_fastbanking_merchant_user_transaction_data.offer_id
      LEFT JOIN
  tbl_fastbanking_state ON tbl_fastbanking_state.state_id = tbl_fastbanking_users.present_address_state_id
      LEFT JOIN
  tbl_fastbanking_financier ON tbl_fastbanking_financier.financier_id = tbl_fastbanking_merchant_user_transaction_data.assigned_financier_id
WHERE
  (tbl_fastbanking_merchant_user_transaction_data.status) = 'DENIED_2'`, function (err, result, fields) {
    var post_query = new Date().getTime();
    if (err) throw err;
    console.log(result);
   // return result;
    //console.log(con. );
    var duration = (post_query - pre_query) / 1000;
    console.log('duration ===>',duration);
    con.end();
  });
});


app.listen(3000);