const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userId:{
        type: String,
        require:true,
        unique:true,
    },
    name:{
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true,
        unique: true
    },
    age: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required:true,
        unique:true,
    },
    role:{
        type:String,
        required:true,
    }
})

module.exports = mongoose.model("User", userSchema);

userSchema.methods.generateAuthToken = function() {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
      expiresIn: '24h'
    });
  };