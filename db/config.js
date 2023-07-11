const mongoose = require('mongoose')

try{
    // sisodiyasagar08
    // sagar
    mongoose.connect('mongodb+srv://sisodiyasagar08:sagar@yummies.5e58jwl.mongodb.net/yummies?retryWrites=true&w=majority')
    console.log("conntect")
}catch(error){
    console.log(error)
}