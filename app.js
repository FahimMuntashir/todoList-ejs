const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use('view engine', 'ejs');

app.get('/', function(req,res){

    var today  = new Date();
    if (today.getDay()===1 || today.getDay() ===2) {
        res.send('weah. its holiday');
    }else{
        res.send('its time yo worl');
    }
})


app.listen(3000, function(req, res){
    console.log('server starting on port : 3000')
})