import mongoose from "mongoose";

const connectDB = async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/note-app`)
        console.log("MongoDB connect successfully");
        
    } catch (error) {
        console.log("MongoDB connection failed", error);
        
    }
}

export default connectDB;