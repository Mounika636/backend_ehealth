const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address:{
        type: String,
        requied: true,
    },
    appointmentTiming: {
        type: String,
        required: true,
    },
    fees: {
        type: String,
        required: true
    },
    specialization : {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model("Doctors", doctorSchema); 