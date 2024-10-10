import mongoose from "mongoose";
import { ENV_VARS } from "./envVars.js";

const connectDB = async () => {
  try {
    await mongoose.connect(ENV_VARS.MONGO_URI);
    console.log("Connected to mongodb");
  } catch (error) {
    console.error("error: ", error);
    console.log("Failed to connect to mongoDB");
    process.exit(1);
  }
};

export default connectDB;
