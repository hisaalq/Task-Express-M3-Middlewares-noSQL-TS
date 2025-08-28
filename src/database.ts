import { connect } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

console.log(process.env.MONGO_URL);

const connectDB = async () => {
    try {
        const conn = await connect(process.env.MONGO_URL || "");
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1);
    }
};

export default connectDB;