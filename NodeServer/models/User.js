const mongoose = require("mongoose")
const {isEmail} = require("validator")

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true, "Please enter username"]
    },
    date: {
        type:Date,
        required: [true, "Please Enter Date"],
    },
    email: {
        type:String,
        required: [true, "Please Enter Email"],
        unique: true,
        validate: [isEmail, "Please enter a valid Email"]
    },
    password: {
        type: String,
        required: [true, "Please enter password"],
        minlength: [6, "Your password is too short"]
    },
});;

const User = mongoose.model("user", userSchema)

module.exports = User;