import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import path from "path";

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

const port = process.env.PORT || 5001;

app.listen(port, () => console.log(`listening on port ${port}`));
