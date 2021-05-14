const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

const router = express.Router();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/guest',(req,res)=>{
   res.send({
       "id":1,
       "name": "Guest"
   })
});
// app.get('/api/hello', (req, res) => {
//    res.send({message: "Hello Express!"});
// });




app.listen(port, () => console.log(`listening on port ${port}`));
