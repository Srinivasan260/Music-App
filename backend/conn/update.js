const mongoose = require('mongoose')

const UpdateSchema = new mongoose.Schema({

    Fieldname :{
        type:String,
        required : true

    },
    newvalue :{
        type:String,
        required : true

    }
})


try {
    if (mongoose.model('signups')) return mongoose.model('signups');
  } catch(e) {
    if (e.name === 'MissingSchemaError') {
       var schema = new mongoose.Schema({ name: 'abc' })
       return mongoose.model('signups', schema);
    }
  }

// module.exports = mongoose.model("signups",UpdateSchema) 