const resultRoutes = require('./result');
const constructorMethod = app => {
  app.use("/", resultRoutes);


  app.use("*", (req, res) => {
   //   res.status(404);
      res.render('posts/error', { title: "Error 400", hasErrors:true, error:"Page not found!"});
  });
};

module.exports = constructorMethod;


/*
const express = require('express');
const router = express.Router();


router.get('/', async (req, res) => {
 //res.sendFile(path.resolve('static/about.html'));
 res.render('posts/index',{});
});
module.exports=router;
/*
router.post('/', async (req, res) => {
  let text = req.body;
let result1;
  if (!text) {
    res.status(400).json({error: 'You must provide text to test for palindrome'});
    return;
  }
else 
result1= palindrome(text);
res.render('posts/result',{result1:text});
 
});
*/
