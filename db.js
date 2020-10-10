const mongoose = require('mongoose');

const database = ()=>{
    mongoose.connect('mongodb://localhost:27017/ecommerce', {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
        console.log("mongo db connected")
    }).catch((err)=>{
        console.log(err)
    });
    
}

module.exports = database