import express from "express";
import notesRoutes from "./Routes/noteRoutes.js";
import connectDB from "./config/db.js"
const app = express();
const  PORT = process.env.PORT || 5001;
connectDB();
app.use(express.json());
app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
  console.log("Server is running on port: ", PORT);
});
