import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("Attempting to connect to MongoDB...");
    console.log("MONGO_URI:", process.env.MONGO_URI ? "is set" : "MISSING!");

    const conn = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
      maxPoolSize: 10,
    });

    console.log(`MongoDB Connected successfully: ${conn.connection.host}`);
    console.log(`Database name: ${conn.connection.name}`);
  } catch (error) {
    console.error("MongoDB connection FAILED:");
    console.error(error.message);
    // Show full error only in development (optional)
    if (process.env.NODE_ENV !== "production") {
      console.error(error);
    }
    process.exit(1);
  }
};

export default connectDB;
