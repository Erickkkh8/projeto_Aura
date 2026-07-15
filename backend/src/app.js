import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";

import audioRoutes from "./routes/audioRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use(
  "/uploads",
  express.static(path.join("src", "uploads"))
);

mongoose
  // eslint-disable-next-line no-undef
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Banco conectado"))
  .catch((err) => console.log(err));

app.use("/audios", audioRoutes);

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});