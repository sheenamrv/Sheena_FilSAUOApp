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

// module.exports = client

// const client = require('./connection.js')
// const express = require('express');
// const app = express();

// app.listen(3300, ()=>{
//     console.log("Sever is now listening at port 3000");
// })

// const bodyParser = require("body-parser");
// app.use(bodyParser.json());

// //GET
// app.get('/events', (req, res)=>{
//   client.query(`Select * from events`, (err, result)=>{
//       if(!err){
//           res.send(result.rows);
//       }
//   });
//   client.end;
// })
// client.connect();


//POST
app.post('/events', (req, res)=> {
  const event = req.body;
  let insertQuery = `insert into events(id, firstname, lastname, location) 
                     values(${event.id}, '${event.firstname}', '${event.lastname}', '${event.location}')`

  client.query(insertQuery, (err, result)=>{
      if(!err){
          res.send('Insertion was successful')
      }
      else{ console.log(err.message) }
  })
  client.end;
})

// //PUT
// app.put('/events/:id', (req, res)=> {
//   let event = req.body;
//   let updateQuery = `update events
//                      set firstname = '${event.firstname}',
//                      lastname = '${event.lastname}',
//                      location = '${event.location}'
//                      where id = ${event.id}`

//   client.query(updateQuery, (err, result)=>{
//       if(!err){
//           res.send('Update was successful')
//       }
//       else{ console.log(err.message) }
//   })
//   client.end;
// })


// //DELETE
// app.delete('/events/:id', (req, res)=> {
//   let insertQuery = `delete from events where id=${req.params.id}`

//   client.query(insertQuery, (err, result)=>{
//       if(!err){
//           res.send('Deletion was successful')
//       }
//       else{ console.log(err.message) }
//   })
//   client.end;
// })