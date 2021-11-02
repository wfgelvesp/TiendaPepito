import express from "express";
import producto from "../controllers/producto.js";

const router=express.Router();
// http://localhost:3001/api/producto/registerProducto
router.post("/registerProducto",producto.registerProducto);

export default router;