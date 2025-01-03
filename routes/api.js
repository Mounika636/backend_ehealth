const express = require('express');
const router = express.Router();
const AppointmentSchema = require("../models/appointment");

// Book appointment
//router.post('/bookDoctor/:id', async(req, res) => {
router.post('/bookDoctor', async(req, res) => {
    try {
        const appointment = new AppointmentSchema({
            patientName: req.body.patientName,
            patientNumber: req.body.patientNumber,
            patientAge: req.body.patientAge,
            appointmentDate: req.body.appointmentDate,
            appointmentTime: req.body.appointmentTime,
            status: "booked"  //added this line after removing :id from above
        });
        
        const savedAppointment = await appointment.save();
        res.status(201).json({
            success: true,
            message: 'Appointment booked successfully',
            data: savedAppointment
        });
    } catch (error) {
        console.error('Appointment booking error:', error);
        res.status(400).json({ 
            success: false,
            message: error.message || 'Error booking appointment'
        });
    }
});

// Search doctor
router.get("/searchDoctor", async(req, res) => {
    try {
        const { specialization, location } = req.query;
        const query = {};
        
        if (specialization) query.specialization = specialization;
        if (location) query.address = new RegExp(location, 'i');
        
        const doctors = await Doctor.find(query);
        res.json(doctors);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Medicine request
router.post("/medicineRequest", async(req, res) => {
    // Implement medicine request logic
    res.status(501).json({ message: "Not implemented yet" });
});

module.exports = router;