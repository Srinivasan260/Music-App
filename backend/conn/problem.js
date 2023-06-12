const mongoose = require('mongoose')

const Problem = new mongoose.Schema({

    problem:{
        type:String,
        required:true
    },

    email:{
        type :String,
        required :true
    }
  
})

module.exports = mongoose.model("problem",Problem)