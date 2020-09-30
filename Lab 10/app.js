const express = require('express');
const app = express();
const session = require('express-session');
const cookieParser = require('cookie-parser');
const configRoutes = require('./routes');
app.use(cookieParser());

app.use(express.json());

const static = express.static(__dirname + '/public');
const exphbs = require('express-handlebars');
app.use('/public', static);
app.use(express.urlencoded({extended: true}));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');





  //Middleware should log current time-stamp, request method, request route and whether the user is authenticated
app.use(async (req, res, next) => {
	let currentTimeStamp= new Date().toUTCString();
	console.log("Current Timestamp:"+currentTimeStamp);
	console.log("Request Method:"+ req.method);
	console.log("Request Route:"+ req.originalUrl);
	
	next();
});

//Initializing middleware for session:
app.use(session({
	name: 'AuthCookie',
	secret: 'some secret string!',
	resave: false,
	saveUninitialized: true
  }))
//If user is authenticated, redirect to /private ; else ask the user to login
/*
app.use('/',  (req, res, next) => {
    if(!req.session.user) {
		 return res.sendStatus(403);
	} else {
		next();
		return res.redirect('/private');
	}
	
});

*/
app.use(async (req, res, next) => {
if(req.session.user){
	console.log("This user is an Authenticated User");
}
else {
console.log("This user is Not an Authenticated User");
}
next();
});
//Above middleware should be used only for /private route like:
  app.use('/private', (req, res, next) => {
	if (!req.session.user) {
		//return an HTML page saying that the user is not logged in, and the page must issue an HTTP status code of 403
		//console.log("Error");
		return res.status(403).render('posts/error', {
		error: "User is not logged in."});
			}	else {
	//	req.method='GET';
	console.log("here");
		next();
	}
	
});






configRoutes(app);

  app.listen(3000, () => {
	console.log("We've now got a server!");
	console.log('Your routes will be running on http://localhost:3000');
});
