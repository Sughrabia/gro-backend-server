const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Hardcoded MongoDB URI
    const mongoURI = "mongodb://localhost:27017/Saifgrocery"; // Replace with your actual URI
    const conn = await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected Successfully...!: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
