const mongoose = require("mongoose");

const Signup = new mongoose.Schema({
    
    name :{
        type :String,
        required : true
    },
    Age:{
        type :Number,
        required : true
    },
    Phn :{
        type :Number,
        required : true
        
    },
    email :{
        type :String,
        required : true
    },
    password :{
        type :String,
        required : true
    }
})

module.exports = mongoose.model("signup",Signup)