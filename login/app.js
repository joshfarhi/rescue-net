const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');

const app = express();


//DB cfg
const db = require('./config/keys').mongoURI

// Connect to MONGO 
    // mongoose.connect(db, {useNewUrlParser: true})
    // .then(() => console.log('MongoDB Connected...'))
    // .catch(err => console.log(err));


    app.use(express.static(__dirname + '/public'));

    
// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Routes
app.use('/' , require('./routes/index'));
app.use('/users' , require('./routes/users'));
app.use('/dashboard' , require('./routes/dashboard'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log('Server Started on PORT 5000'));
