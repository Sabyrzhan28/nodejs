var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require ('path');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.get('/student', function(req, res){
var model = { user: { name: 'Sabyrzhan' } };

res.render('index.ejs', model );

app.post('/action_page',function(req,res,next){
	var uname = req.body.uname;
	res.redirect('/student/'+uname);
});

app.get('/student/:id',function(req,res,next){
	res.render('test.ejs',{output: req.params.id});
});

});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.listen(3000);