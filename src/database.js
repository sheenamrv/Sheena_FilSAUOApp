const {Client} = require('pg')

const client = new Client ({
    host: "localhost",
    user: "admin", 
    port: 5432,
    password: "admin1234",
    database: "FilsauoDB"
})

client.connect();

client.query (`Select * from events`, (err, res) => {
  if(!err) {
    console.log(res.rows);
  } else {
    console.log(err.message);
  }

  client.end
})