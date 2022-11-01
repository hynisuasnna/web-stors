var express = require('express');
var router = express.router();
let user = require('../models/user');
/*get users listing*/
router.get('/',function (req,res,next){
    res.send('respond with a resource');
});
//register new user
router.get('/register',(req,res,next)=>{
res.render('user registration from');
});
router.post('/register',(req,res,next)=>{
    data=req.body;
    user.create(data,(err,user)=>{
        if(err) return next (err);
        res.redirect('/users/login');
    });
});
module.exports = router;