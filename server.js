const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

const mysql = require('mysql');
const config = require('./routes/config')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const connection = mysql.createConnection(config);
connection.connect();

app.get('/api/user/:guest',(req,res)=>{
   connection.query(
       "SELECT * FROM GUEST",
       (err,rows,fields)=>{
           res.send(rows[0]);
       }
   )
});

app.get('/api/users',(req,res)=>{
   connection.query(
       "SELECT * FROM USERS",
       (err,rows,fields)=>{
           res.send(rows);
       }
   )
});
app.get('/api/users/:id',(req,res)=>{

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

    connection.query(
       "SELECT * FROM USERS where user_name=" + "'" + req.body.user_name + "' and user_password= '" + req.body.user_password + "' ",
       (err,rows)=>{

           if(rows.length < 1){
               let sql = 'INSERT INTO USERS VALUES (NULL, ?,?)';

               let user_name = req.body.user_name;
               let user_password = req.body.user_password;
               let params = [user_name,user_password];

               connection.query(sql,params,
                   (err, rows, fields) =>{
                   res.send(rows);
                   })
           }else {
               res.send();
           }

       }
   )


});

app.post('/api/login',(req,res)=>{

    connection.query(
       "SELECT * FROM USERS where user_name=" + "'" + req.body.name + "' and user_password= '" + req.body.password + "' ",
       (err,rows)=>{
           if(rows !== null){
               res.send(rows[0]);
           }else {
               res.send();
           }

       }
   )

});


// app.get('/api/hello', (req, res) => {
//    res.send({message: "Hello Express!"});
// });




app.listen(port, () => console.log(`listening on port ${port}`));
