const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {
        type:String,
    },
    email : {
        type:String,
        // lowercase:true
    },
    password : {
        type:String
    },
    number : {
        type : String
    }
})

module.exports = mongoose.model('users' , UserSchema)