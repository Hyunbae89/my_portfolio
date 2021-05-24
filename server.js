const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

const mysql = require('mysql');
const config = require('./routes/config')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

const connection = mysql.createConnection(config);
connection.connect();

app.get('/api/guest',(req,res)=>{
   connection.query(
       "SELECT * FROM GUEST",
       (err,rows,fields)=>{
           res.send(rows[0]);
       }
   )
});

// app.get('/api/users',(req,res)=>{
//    connection.query(
//        "SELECT * FROM USERS",
//        (err,rows,fields)=>{
//            res.send(rows);
//        }
//    )
// });
app.get('/api/users/:id',(req,res)=>{
    console.log(req.params.id);
   connection.query(
       "SELECT * FROM USERS where id="+"'"+req.params.id+"'",
       (err,rows,fields)=>{
           res.send(rows[0]);
       }
   )
});
// app.get('/api/users/:username',(req,res)=>{
//    console.log(req.params);
//    connection.query(
//        "SELECT * FROM USERS where name="+"'"+req.params.username+"'",
//        (err,rows,fields)=>{
//            res.send(rows[0]);
//        }
//    )
// });


app.post('/api/users',(req,res)=>{


   let sql = 'INSERT INTO USERS VALUES (NULL, ?)';

   let name = req.body.name;
   let params = [name];

   connection.query(sql,params,
       (err, rows, fields) =>{
       res.send(rows);
       })
});


// app.get('/api/hello', (req, res) => {
//    res.send({message: "Hello Express!"});
// });




app.listen(port, () => console.log(`listening on port ${port}`));
