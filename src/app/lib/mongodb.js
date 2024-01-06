import mongoose from "mongoose";
require("dotenv").config();

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;

    if (!uri) {
      console.error("MONGODB_URI is undefined");
      return;
    }

    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(uri);
      console.log("DB Connected");
    }
  } catch (error) {
    console.error("Connection Error", error);
  }
};

export default connectDB;
