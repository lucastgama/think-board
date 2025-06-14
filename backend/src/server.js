import express from "express";
import routes from "./routes/notesRoutes.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(express.json());
app.use("/api/notes", routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

