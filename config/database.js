// const mongoose = require('mongoose');

// const MONGO_URL = "mongodb://localhost:27017"

// mongoose.connect(MONGO_URL)
//     .then(() =>
//         console.log("connected to db")
//     )
//     .catch((error)=>{
//         console.log(error)
//     })

// module.exports = mongoose;   



// const mongoose = require('mongoose');
// const MONGO_URL = "mongodb://localhost:27017/ehealth-care"  // Add database name

// mongoose.connect(MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
//     .then(() => console.log("Connected to MongoDB"))
//     .catch((error) => console.log("MongoDB connection error:", error));

// module.exports = mongoose;  



const mongoose = require('mongoose');
const MONGO_URL = "mongodb://127.0.0.1:27017/ehealth-care";

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};

module.exports = connectDB;