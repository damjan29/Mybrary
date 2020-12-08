// if (process.env.NODE_ENV !== 'production') {
//     require('dotenv').parse();
// }



const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');

const indexRouter = require('./routes/index');

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true
}).then(() => {
console.log("DB connected!");
})


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));


app.use('/', indexRouter);

app.listen(process.env.PORT || 3000);