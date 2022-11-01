let mongoose = require ('mongoose');

let schema = mongoose.schema;

let userSchema = new schema({
    name :{type: string, require: true},
    email :{type: string, require: true, unique: true },
    password:{type: string, require : true, minlenght:8},
});
let user = mongoose.model('user',userschema);

module.exports = users;