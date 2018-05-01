const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://mesa:1234@localhost:27017/fashion';

app.use(bodyParser.json());
app.use(cors());

app.get('/data', (req, res)=>{
    MongoClient.connect(url, (error, db)=>{
        var collection = db.collection('produk');
        collection.find({}).toArray((err, docs)=>{
            console.log(docs);
            res.send(docs);
            db.close();
        })
    })
})


app.listen(3210, console.log('Server Run'));