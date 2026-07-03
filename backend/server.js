import express from "express";
import cors from "cors";
import analysisRoute from "./routes/analysis.js";

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api", analysisRoute);

// test route
app.get("/", (req, res) => {
  res.send("Fake Internship Detector API Running");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});