const mongoose = require("mongoose");

const appointmentSchema = mongoose.Schema({
    patientName : {
        type: String,
        required: true
    },
    patientNumber :{
        type: Number,
        required: true,
        unique: true
    },
    patientAge: {
        type : String,
        required: true
    },
    appointmentDate:{
        type: Date,
        required: true
    },
    appointmentTime: {
        type : String,
        required: true,
    },
    status:{
        type: String,
        enum:["booked","Cancelled","Complete"],
        default: "Booked"
    }
})

module.exports = mongoose.model("AppointmentSchema", appointmentSchema);