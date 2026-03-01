import mongoose from "mongoose";

// ✅ Function to connect to MongoDB using Mongoose
const dbConnect = async () => {
  try {
    // Attempt to connect to MongoDB using the URI from environment variables
    await mongoose
      .connect(
        "mongodb+srv://appseralabs_db_user:Appseralabs@cluster0.o09t5ji.mongodb.net/?appName=Cluster0",
      )
      .then(() => {
        console.log(`Database Connected Successfully :)`);
      })
      .catch((error) => {
        // Catch connection errors inside the .catch block
        console.log(`Database Connection failed due to: ${error.message}`);
      });
  } catch (error) {
    // Catch any unexpected errors during the connection process
    console.error(`Database connection error: ${error.message}`);
  }
};

export default dbConnect;
