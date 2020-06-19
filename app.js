const express = require('express');
const bodyParser = require('body-parser');

const app = express();
let items = [
    'eat',
    'sleep',
    'code'
];
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get('/', function (req, res) {

    let today = new Date();

    options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
    };

    let day = today.toLocaleDateString('en-US', options);


    res.render("list", { listTitle: day, newListItems: items });

});

app.post('/', function (req, res) {
   var item = req.body.newItem;
   items.push(item);
    console.log(item);

    res.redirect("/");

});


app.get('/work', function(req,res){
    res.render('list', {listTitle: 'work list', newListItems:workItem})
})



app.listen(3000, function (req, res) {
    console.log('server starting on port : 3000')
})