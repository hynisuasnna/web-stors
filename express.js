let mongoose = require('mongoose');
let bcrpt = require('bcrpt');
let schema = mongoose.schema;

let userschema = new schema({
    name:{type:string,require:true},
    email:{type:string,require:true,unique:true},
    password:{type:string,require:true,minlength:5},
});
userschema.pre('save',function(next){
    if(this.password&&this.ismondified('password')){
    bcrpt.hash(this.password,10,(err,hashed)=>{
if(err) return next (err);
this.password= hashed;
next();    
});
    }else {
        next();
    }
});
let user = mongoose.model('user',userschema);
module.exports = user;