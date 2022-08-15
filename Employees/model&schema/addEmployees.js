const mongoose = require('mongoose');
const UserSchemas = new mongoose.Schema({
    firstname:String,
    lastname:String,
    age:String,
    cnic:String,
    email:String,
    contactno:String,
    gender:String
    
});
module.exports = mongoose.model('employes', UserSchemas);