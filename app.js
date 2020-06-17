const express = require('express');
const bodyParser = require('body-parser');

const app = express();
var items = [
    'eat',
    'sleep',
    'code'
];
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {

    var today = new Date();

    options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
    };

    var day = today.toLocaleDateString('en-US', options);


    res.render("list", { kindofDay: day, newListItems: items });

});

app.post('/', function (req, res) {
   var item = req.body.newItem;
   items.push(item);
    console.log(item);

    res.redirect("/");

});




app.listen(3000, function (req, res) {
    console.log('server starting on port : 3000')
})