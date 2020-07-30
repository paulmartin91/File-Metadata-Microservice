var express = require('express');
var app = express();
var bodyParser = require('body-parser')


app.use( bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
})); 
app.use(express.json());       
app.use(express.urlencoded()); 
app.use(express.static('public'))

app.post('/fileMetadata', (req, res) => {
    res.json(302, req.body)
})

var listener = app.listen(8000, ()=> {
    console.log(`you are listening on port ${listener.address().port}`)
})