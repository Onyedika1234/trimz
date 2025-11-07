import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());

app.use(helmet());

app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.post("/", (req, res) => {
  const { data } = req.body;

  if (!data || typeof data !== "string")
    return res
      .status(422)
      .json({ error: "Data is required and must be a string" });

  res.send(data);
});

app.listen(process.env.PORT, () => console.log("Server running..."));
