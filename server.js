const app = require('./app');
const dotenv = require('dotenv').config()
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://dbUser:21211986@cluster0.ctppj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useFindAndModify:true,useNewUrlParser: true,useUnifiedTopology: true});


const PORT = process.env.PORT || 3001;

app.listen(PORT,() => {
    console.log("server ayaga kalkti",PORT);
})