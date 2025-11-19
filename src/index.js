require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const routes = require("./routes");

const app = express();
app.use(express.json());

// conexão
connectDB();

// rotas
app.use("/api", routes);

// erro global
app.use((err, req, res, next) => {
  console.error("Erro:", err);
  res.status(500).json({ error: "Erro interno no servidor" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
