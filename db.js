const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'awseb-e-hs73ecx9rn-stack-awsebrdsdatabase-zvb6iuvugkzx.cathhnhlauwn.us-west-2.rds.amazonaws.com',
  user: 'ArifShahzad',
  password: 'Arif!0300',
  database: 'user'
});

module.exports = connection;