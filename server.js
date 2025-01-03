// const express = require("express");
// const cors = require("cors");
// const userRoutes = require('./routes/user');
// const apiRoutes = require('./routes/api');

// const mongoose = require('./config/database')

// const app = express();

// app.use(cors());
// app.use(express.json())

// app.use('/api/user', userRoutes);
// app.use('/api', apiRoutes);

// app.listen(5000, () => {
//     console.log("server is running on port 5000")
// });  


const express = require("express");
const cors = require("cors");
const userRoutes = require('./routes/user');
const apiRoutes = require('./routes/api');
const errorHandler = require('./middleware/errorHandler');
const connectDB = require('./config/database');

const app = express();

// CORS configuration
connectDB();
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));



app.use(express.json());

// Test route
app.get('/test', (req, res) => {
    res.json({ message: 'Backend is working!' });
});

// Routes
app.use('/api/user', userRoutes);
app.use('/api', apiRoutes);

// Error handling
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


