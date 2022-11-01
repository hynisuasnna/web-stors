var cookieparser = require ('cookie parser');
var logger = require('morgon');
var sassmiddleware = require('node-sass-middleware');
var mongoose = require('mongoose');
var indexrouter = require('./routes/index');
var userRouter = require('./routes/users'); 
mongoose.connect(
    'mongodb://localhost:207017/army',
    {UseNewUrlparser:true,UserUnifieldTOpology:true},
    (err) => {
        console.log(err?err:'connection true');
    }
    );
    var app = express();
    app.set('views',path.join(_dirname,'views'));
    app.set('view engine','ejs');