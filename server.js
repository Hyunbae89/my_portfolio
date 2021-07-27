const express = require('express');
const bodyParser = require('body-parser');
//body-parser 는 POST 요청시 body data를 읽을 수 있는 구문으로 파싱해준다.


const app = express();
const port = process.env.PORT || 5000;
const bcrypt = require('bcrypt');
const mysql = require('mysql');
const config = require('./routes/config')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//false : node.js내 기본 QueryString 사용, true : npm qs 라이브러리 사용
//qs 라이브러리가 추가적인 보안이 가능한 확장된 형태.

const connection = mysql.createConnection(config);
connection.connect();

app.get('/api/ratings',(req,res)=>{
    connection.query(
           "SELECT * FROM RATING",
           (err,rows,fields)=>{
               res.send(rows);
           }
       )
});

app.get('/api/users/:id/rating',(req,res)=>{
    let sql = "SELECT * FROM RATING where user_id=?";
    let user_id = req.params.id;

    connection.query(sql,[user_id],(err,rows)=>{
        if(err){
            throw err;
        }else{
            res.json(rows[0])
        }
    })
});

app.post('/api/users/:id/rating',(req,res)=>{
    let selectSql = "SELECT * FROM RATING where user_id=?";
    let user_id = req.params.id;

    connection.query(selectSql,[user_id], (err,rows)=>{
        if(rows.length===0){
            let rating = req.body.rating;
            let comment = req.body.rating_comment;
            let date = req.body.create_date;
            let params = [rating,comment,date, user_id];

            let insertSql = 'INSERT INTO RATING VALUES (NULL, ?,?,?,?)';

            connection.query(insertSql, params, (err,rows)=>{
                if(err){
                    throw err;
                }else{
                    res.json(rows[0]);
                }
            })
        }
    })
});

//**--------Guest--------**//
    app.get('/api/guest',(req,res)=>{
       connection.query(
           "SELECT * FROM GUEST",
           (err,rows,fields)=>{
               res.send(rows[0]);
           }
       )
    });

//**--------User--------**//
    app.get('/api/users',(req,res)=>{
       connection.query(
           "SELECT * FROM USER",
           (err,rows,fields)=>{
               res.json(rows);
           }
       )
    });

    app.get('/api/users/:id',(req,res)=>{

       connection.query(
           "SELECT * FROM USER where id="+"'"+req.params.id+"'",
           (err,rows,fields)=>{
               res.send(rows[0]);
           }
       )
    });


    app.post('/api/users',(req,res)=>{

        let selectSql = "SELECT * FROM USER where user_name=?";

        let user_name = req.body.user_name;
        let encryptedPassword = bcrypt.hashSync(req.body.user_password,10);
        let params = [user_name, encryptedPassword];

        connection.query(selectSql, [user_name], (err,rows)=>{

            if(rows.length === 0){

                let insertSql = 'INSERT INTO USER VALUES (NULL, ?,?)';

                connection.query(insertSql, params, (err, rows, fields) =>{
                    if(err){
                        console.log(err) ;
                    }else{
                        res.json(rows[0]);
                    }
               })
            }else{
                res.json();
            }
           }
       )
    });

    app.post('/api/login',(req,res)=>{

        let selectSql = "SELECT * FROM USER where user_name=?";

        let user_name = req.body.name;

        let params = [user_name];

        connection.query(selectSql, params, (err,rows)=>{
            if(rows.length === 0){
                res.json();
            }else{
                bcrypt.compare(req.body.password, rows[0].user_password).then(function (result){
                    if(result){
                        res.json(rows[0])
                    }else{
                        res.json();
                    }
                })
            }
           }
       )
    });

    app.put('/api/users/:id',(req,res)=>{
        let sql = 'UPDATE USER SET user_password =? WHERE id=? ';
        let encryptedPassword = bcrypt.hashSync(req.body.user_password,10);
        let params = [encryptedPassword, req.params.id];

       connection.query(sql, params,(err,rows)=>{
            if(err){
                throw err;
            }else{
                res.json(rows[0])
            }
        })
    });
    app.delete('/api/users/:id',(req,res)=>{
        let sql = 'DELETE FROM USER WHERE id= ?';
        let params = [req.params.id];

       connection.query(sql, params,(err,rows)=>{
            if(err){
                throw err;
            }else{
                res.json(rows)
            }
        })
    });

//**--------URL Picker--------**//
    app.get('/api/users/:id/urls',(req,res)=>{

       connection.query(
           "SELECT * FROM USER_TO_URL where user_id="+"'"+req.params.id+"'",
           (err,rows,fields)=>{
               if(err){
                   console.log(err);
               }else{
                   res.send(rows);
               }
           }
       )
    });

    app.post('/api/urls',(req,res)=>{

        let sql = 'INSERT INTO URL_PICKER VALUES (NULL, ?,?,?)';
        let title = req.body.url_title;
        let address = req.body.url_address;
        let date = req.body.create_date;
        let params = [title,address,date];

        connection.query(sql, params,
            (err, rows) =>{
            res.send(rows);
            }
        )
    });

    app.post('/api/users/:id/urls',(req,res)=>{

        let sql = 'INSERT INTO USER_TO_URL VALUES (NULL, ?,?,?,?,?)';
        let user_id = req.params.id;
        let url_id = req.body.urlId;
        let title = req.body.url_title;
        let address = req.body.url_address;
        let date = req.body.create_date;

        let params = [user_id,url_id,title,address,date];

        connection.query(sql, params,
            (err, rows) =>{
            res.send(rows);
            }
        )
    });

    app.put('/api/urls/:id',(req,res)=>{

        let sql = 'UPDATE URL_PICKER SET title =?, address=?, create_date=? WHERE id= '+req.params.id;
        let title = req.body.url_title;
        let address = req.body.url_address;
        let date = req.body.create_date;

        let params = [title,address,date];

        connection.query(sql, params,
            (err, rows) =>{
            res.send(rows);
            }
        )
    });

    app.put('/api/users/:id/urls',(req,res)=>{
        let sql = 'UPDATE USER_TO_URL SET title =?, address=?, create_date=? WHERE user_id=? AND url_id=? ';

        let title = req.body.url_title;
        let address = req.body.url_address;
        let date = req.body.create_date;
        let user_id = req.params.id;
        let url_id = req.body.urlId;

        let params = [title,address,date,user_id,url_id];

        connection.query(sql, params,
            (err, rows) =>{

            res.send(rows);
            }
        )
    });

    app.get('/api/urls/:id',(req,res)=>{

       connection.query(
           "SELECT * FROM URL_PICKER where id="+"'"+req.params.id+"'",
           (err,rows,fields)=>{

               res.send(rows[0]);
           }
       )
    });

    app.delete('/api/urls/:id',(req,res)=>{

        let sql = 'DELETE FROM URL_PICKER WHERE id= ?';
        let params = [req.params.id];

        connection.query(sql, params,
            (err, rows) =>{
            res.send(rows);
            }
        )
    });

    app.delete('/api/users/:user-id/urls/:id',(req,res)=>{

        let sql = 'DELETE FROM USER_TO_URL WHERE id= ?';
        let params = [req.params.id];

        connection.query(sql, params,
            (err, rows) =>{
            res.send(rows);
            }
        )
    });

//**--------Quote--------**//

    app.get('/api/quotes', (req,res)=>{

        connection.query("SELECT * FROM QUOTE", (err,rows)=>{
           if(err){
               console.log(err);
           }else{
               res.json(rows);
           }
       })
    });

    app.get('/api/quotes/:id', (req,res)=>{
       let sql = "SELECT * FROM QUOTE where id=?";
       let id = req.params.id;

       connection.query(sql,[id], (err,rows)=>{
           if(err){
               console.log(err);
           }else{
               res.json(rows[0]);
           }
       })

    });

    app.get('/api/users/:id/quotes', (req,res)=>{
       let sql = "SELECT * FROM USER_TO_QUOTE where user_id=?";
       let id = req.params.id;

       connection.query(sql,[id], (err,rows)=>{
           if(err){
               console.log(err);
           }else{
               res.json(rows);
           }
       })

    });

    app.get('/api/users/quotes/:id', (req,res)=>{
       let sql = "SELECT * FROM USER_TO_QUOTE where quote_id=?";
       let id = req.params.id;

       connection.query(sql,[id], (err,rows)=>{
           if(err){
               console.log(err);
           }else{
               let id = rows[0].user_id;

               let getUserSQL = "SELECT id, user_name FROM USER where id=?";
               connection.query(getUserSQL,[id],(err,rows)=>{
                   if(err){
                       throw err;
                   }else{
                       res.json(rows[0]);
                   }
               })
           }
       })

    });

    app.post('/api/quotes',(req,res)=>{

        let sql = 'INSERT INTO QUOTE VALUES (NULL, ?,?,?)';

        let content = req.body.content;
        let source = req.body.source;
        let date = req.body.create_date;
        let params = [content,source,date];

        connection.query(sql, params, (err, rows)=>{
           if(err){
               throw err;
           }else{
               res.json(rows);
           }
        });
    });

    app.post('/api/users/:id/quotes',(req,res)=>{
        let sql = 'INSERT INTO USER_TO_QUOTE VALUES (NULL, ?,?)';
        let user_id = req.params.id;
        let quote_id = req.body.quoteId;

        let params = [user_id, quote_id];

        connection.query(sql, params, (err, rows)=>{
            if(err){
                throw err;
            }else{
                res.send(rows);
            }
        })
    });

    app.put('/api/quotes/:id',(req,res)=>{
        let sql = 'UPDATE QUOTE SET content =?, source=?, create_date=? WHERE id=? ';
        let content = req.body.content;
        let source = req.body.source;
        let date = req.body.create_date;

        let params =[content,source,date, req.params.id];

        connection.query(sql, params,(err,rows)=>{
            if(err){
                throw err;
            }else{
                res.json(rows)
            }
        })
    })

    app.delete('/api/quotes/:id',(req,res)=>{
        let sql = 'DELETE FROM QUOTE WHERE id= ?';
        let params = [req.params.id];

        connection.query(sql, params, (err, rows) =>{
            if(err){
                throw err;
            }else{
                res.send(rows);
            }
        })
    });

    app.delete('/api/users/quotes/:id',(req,res)=>{
        let sql = 'DELETE FROM USER_TO_QUOTE WHERE quote_id= ?';
        let params = [req.params.id];

        connection.query(sql, params, (err, rows) =>{
            if(err){
                throw err;
            }else{
                res.send(rows);
            }
        })
    })



app.listen(port, (err) => {
    if(err) return console.log(err)
    return console.log(`listening on port ${port}`)
});