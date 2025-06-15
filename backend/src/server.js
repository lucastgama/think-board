import express from "express";
import routes from "./routes/notesRoutes.js";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors(
  {
    origin: process.env.CORS_ORIGIN || "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }
));
app.use(express.json());
app.use(rateLimiter);
app.use("/api/notes", routes);

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch((error) => {
  console.error("Error connecting to MongoDB:", error);
});

