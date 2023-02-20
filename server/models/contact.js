let mongoose = require('mongoose');

// create a model class
let contactModel = mongoose.Schema({
    name: String,
    contactNumber: String,
    email: String,
    role:String,
    company:String
},
{
    collection: "contacts"
});

module.exports = mongoose.model('Contact', contactModel);