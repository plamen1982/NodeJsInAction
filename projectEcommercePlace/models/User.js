const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const SALT_FACTOR = 10;

let userSchema = mongoose.Schema({

    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },    
    firstName: { type: String },    
    createdAt: { type: Date, default: Date.now()},
    roles: [String]

});

//do nothing function for use with bcrypt module
const noop = () => {};

userSchema.pre('save', function(done) {
    let user = this;

    if(!user.isModified('password')) {
        return done();
    } else {
        bcrypt.genSalt(SALT_FACTOR, (err, resultSalt) => {
            if(err) { 
                return done(); 
            } else {
                bcrypt.hash(user.password, resultSalt, noop, (err, hashedPassword) => {
                    user.password = hashedPassword;
                    done();
                });
            }
        });
    }
});

userSchema.methods.checkPassword = function(guess, done) {
    bcrypt.compare(guess, this.password, (err, isMatch) => {
        done(err, isMatch);
    });
}

userSchema.methods.showName = function() {
    return this.username || this.firstName
}

let User = mongoose.model('User', userSchema);

module.exports = User;