const express = require("express");
const connectDB = require("./Config/connection");
const cloudinary = require("cloudinary");
const expressFileUpload = require("express-fileupload");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const categoryRoute = require("./routes/categoryRoute");

const app = express();
const PORT = 5000;

// Database Connect
connectDB();

// Middlewares
app.use(cors({ origin: ["http://localhost:3000"], credentials: true }));
app.use(bodyParser.urlencoded({ limit: "200mb", extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(expressFileUpload());

// Cloudinary Config
cloudinary.config({
  cloud_name: "dzavnlfj9",
  api_key: "664596811844284",
  api_secret: "STNq9A8XdoPhZbP4VVgBeESWP8Q",
});

// API Routes
app.use("/api/user", userRoutes);
app.use("/api/product", productRoute);
app.use("/api/category", categoryRoute);

app.listen(PORT, () => {
  console.log(`Server Running At http://localhost:${PORT}`);
});
