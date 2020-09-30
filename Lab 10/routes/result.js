const express = require('express');
const router = express.Router();
const userData=require('../data/userData');
var username;

router.get('/', async (req, res) => {
    if(!req.session.user) {
        	res.render('posts/loginForm');
      //  console.log("hi");
        
            } else {
                return res.redirect('/private');
            }
});
router.post('/login', async (req, res) => {
   // console.log("Yay");
     username = req.body.username;
    let password=req.body.password;
   // console.log("i am here");
    const result = await userData.authenticate(username,password);
    if(result){
       // console.log("Yay");
        req.session.user="AuthCookie";
        res.redirect('/private');
    }
    else {
    res.status(401).render('posts/loginForm',{error:"Invalid Username or Password!"});
    }
});

router.get('/private', async (req, res) => {
   // let username = req.body.username;
   if (req.session.user) {
    //return an HTML page saying that the user is not logged in, and the page must issue an HTTP status code of 403
    const data = await userData.getUserData(username);
    res.render('posts/userDetails', { response: data });
}});

router.get('/logout', async (req, res) => {
    if(req.session.user) {
        req.session.destroy();
        res.render('posts/logout',{message: "You have been logged out successfully!"});
   
            } else {
                res.render('posts/logout',{message: "Please log in!"});
                }
});

module.exports = router;