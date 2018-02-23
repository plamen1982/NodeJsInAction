import { isMaster } from 'cluster';

const bcrypt = require('bcrypt-nodejs');
const mongoose = require('mongoose');

const SALT_FACTOR = 10;

const userSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    displayName: String,
    bio: String
});

userSchema.methods.name = () => {
    return this.displayName || this.username
};
//do nothing function fot use with bcrypt module
let noop = () => {};

//runs before model is saved
userSchema.pre('save', (done)=>{
    let user = this;

//skips if password is not modified
    if(!user.isModified("password")) {
        return done();
    }
//generate a salt for the hash, and calls the inner function to completed
    bcrypt.genSalt(SALT_FACTOR, (err, salt) => {
        if(err) { return done(err); }
        bcrypt.hash(user.password, salt, noop, (err, hashedPassword) => {
            if(err) { return done(); }
//stores the password and continue with saving
            user.password = hashedPassword;
            done(); 
        });
    });
});

userSchema.methods.checkPassword = (guess, done) => {
    bcrypt.compare(guess, this.password, (err, isMatch) => {
        done(err, isMatch);
    });
};