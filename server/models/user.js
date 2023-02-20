// require modules for the User Model
let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');
let bcrypt   = require('bcrypt-nodejs');

let User = mongoose.Schema
(
    {
        username: 
        {
            type: String,
            default: '',
            trim: true,
            required: 'username is required'
        },
        // password: 
        // {
        //     type: String,
        //     default: '',
        //     trim: true,
        //     required: 'password is required'
        // },
       email: 
       {
            type: String,
            default: '1234',
            trim: true,
            required: 'email address is required'
       },
       displayName: 
       {
            type: String,
            default: '',
            trim: true,
            required: 'Display Name is required'
       },
       created: 
       {
            type: Date,
            default: Date.now
       },
       update: 
       {
            type: Date,
            default: Date.now
       }
    },
    {
        collection: "users"
    }
);

// configure options for User Model
// generating a hash
// User.methods.generateHash = function(password) {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };

// // checking if password is valid
// User.methods.validPassword = function(password) {
//     return bcrypt.compareSync(password, this.password);
// };


let options = ({ missingPasswordError: 'Wrong / Missing Password'});

User.plugin(passportLocalMongoose, { usernameField : 'email' });

module.exports.User = mongoose.model('User', User);