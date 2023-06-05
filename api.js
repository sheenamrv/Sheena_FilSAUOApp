// const client = require('./connection.js')
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
// const { config } = require('rxjs');
app.use(bodyParser.json());
pg = require('pg')

var config = {
    host: "localhost",
    user: "admin", 
    port: 5432,
    password: "admin1234",
    database: "FilsauoDB"
}


// client.connect()



var pool = new pg.Pool(config)

//GET

app.get('/', function(req, res){
    pool.connect(function(err, client, done) {
        if(err) {
            return console.error('Error', err);
        }
        client.query('SELECT * FROM events', function(err, result) {
            if(err) {
                return console.error('error running query', err);
            }
            res.send(result.rows);
            done();
        });
    });
});

// app.get('/events', function(req, res){
//     pool.connect (function (err, client, done) {
//         if (err) {
//             return console.error('Error', err);
//         }
    
//     client.query(`Select * from events`, function(err, result){
//         if(!err){
//             res.send(result.rows);
//             done();
//         }
//     }
//   })


  
//   client.end;

// client.connect();


// //POST
// app.post('/events', (req, res)=> {
//   const event = req.body;
//   let insertQuery = `insert into events(event_id, event_name, event_description, event_date, photo) 
//                      values(${event.eventid}, '${event.eventname}', '${event.eventdescription}', '${event.eventdate}')`

//   client.query(insertQuery, (err, result)=>{
//       if(!err){
//           res.send('Insertion was successful')
//       }
//       else{ console.log(err.message) }
//   })
//   client.end;
// })

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

app.listen(3300, function(){
    console.log("Sever is now listening at port 3300");
})