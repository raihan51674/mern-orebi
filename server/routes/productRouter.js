import express from "express";
import { addProduct } from "../controllers/productController.js";


const productRouter = express.Router();
productRouter.post('/add', addProduct)


export default productRouter;