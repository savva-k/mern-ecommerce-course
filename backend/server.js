import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";

import productRoutes from "./routes/productRoutes.js";

dotenv.config();
connectDB();
const app = express();

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;
const ENV = process.env.NODE_ENV;

app.listen(
  PORT,
  console.log(`Server running in ${ENV} mode on port ${PORT}`.yellow.bold)
);
