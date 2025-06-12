const mongoose = require("mongoose");
const { DB_NAME } = require("../constants");

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("Mongodb connection failed",error);
        process.exit(1);
    }
};

module.exports = connectDB;


