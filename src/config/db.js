// conexão com o banco de dados
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const url = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;

async function connectDB() {
  try {
    await mongoose.connect(url);
    console.log("Conectado ao MongoDB");
  } catch (err) {
    console.log("Erro ao conectar no banco MongoDB: ", err);
    process.exit(1);
  }
}

module.exports = connectDB;
