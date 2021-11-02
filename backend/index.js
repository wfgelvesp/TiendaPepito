import express from "express";
import cors from "cors";
import db from "./db/db.js";
import dotenv from "dotenv";
import producto from "./routes/producto.js";
dotenv.config();

const app=express();

app.use(express.json());
app.use(cors());
app.use("/api/producto",producto);
app.listen(process.env.PORT,()=>console.log("Puerto "+process.env.PORT));
db.dbConnection();