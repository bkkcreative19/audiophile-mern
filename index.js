import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import path from "path";

import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// route imports
import productRouter from "./routes/product.js";

dotenv.config();

const app = express();

connectDB();

// middleware
app.use(express.static(path.join(__dirname, "client", "build")));
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

// routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
app.use("/api", productRouter);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
