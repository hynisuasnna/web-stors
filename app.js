let mongoose = require ('mongoose');

mongoose.connect('mongodb://localhost:27017/regis',
{ useNewUrlParser: true, useUnifiedTopology: true },
(err) => {console.log(err ? err : ' connection true');}
);