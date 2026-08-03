import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";
import audioRoutes from "./routes/audioRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use(
  "/uploads",
  // eslint-disable-next-line no-undef
  express.static(path.join(process.cwd(), "src/uploads")),
);

app.use("/usuarios", userRoutes);

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
