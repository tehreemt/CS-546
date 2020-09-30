//const privateRoutes = require('./private');
//const logoutRoutes = require('./logout');
//const loginRoutes = require('./login');
//const homeRoutes=require('./home');
/*
const constructorMethod = (app) => {
	app.use('/private', privateRoutes);
//	app.use('/logout', logoutRoutes);
	app.use('/login', loginRoutes);
	app.use('/',homeRoutes);
	
	
	app.use('*', (req, res) => {
		res.sendStatus(404);
	});
};
*/
//const privateRoutes = require('./private');
const resultRoutes = require('./result');
const constructorMethod = app => {
  app.use("/", resultRoutes);
 // app.use('/private', privateRoutes);

  app.use("*", (req, res) => {
   //   res.status(404);
      res.render('posts/error', { title: "Error 400", hasErrors:true, error:"Page not found!"});
  });
};

//module.exports = constructorMethod;


module.exports = constructorMethod;