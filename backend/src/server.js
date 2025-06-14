import express from "express";
import routes from "./routes/notesRoutes.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
console.log(`Connecting to MongoDB at ${process.env.MONGO_URI}`);
console.log(`Connecting to MongoDB at ${process.env.PORT}`);

connectDB();

app.use("/api/notes", routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

