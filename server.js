const app = require('./app');
const dotenv = require('dotenv').config()
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL, {useFindAndModify:true,useNewUrlParser: true,useUnifiedTopology: true});


const PORT = process.env.PORT || 3001;

app.listen(PORT,() => {
    console.log("server ayaga kalkti",PORT);
})