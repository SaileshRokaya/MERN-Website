const mongoose = require('mongoose');

const URI = "mongodb://127.0.0.1:27017/mern_admin";

// mongoose.connect(URI);

const connectDb = async()=>{
    try {
        await mongoose.connect(URI);
        console.log("DB connected");
    } catch (error) {
        console.error("Error connecting to DB", error.message);
        process.exit(0);
    }
};

module.exports = connectDb;