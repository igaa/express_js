
// app.js
const express = require('express');
const bodyParser = require('body-parser');
// initialize our express app
const product = require('./routes/product.routes'); // Imports routes for the products
const app = express();



// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb+srv://someuser:abcd1234@productiontutorial.ianek.mongodb.net/productiontutorial?retryWrites=true&w=majority';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//body parser 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use('/products', product);
app.set('view engine', 'ejs')

//res.render(views, locals)

//html rendering 

app.get('/', (req, res) => {
    res.render('index.ejs', {title: 'Aplikasi Product'})
    //res.sendFile(__dirname + '/views/index.ejs', { title: 'Aplikasi Mahasiswa' })
    // console.global(__dirname); 

    // Note: __dirname is the current directory you're in. Try logging it and see what you get!
    // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
  })


//setting port 
let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
