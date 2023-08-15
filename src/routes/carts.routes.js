import { Router } from "express";
import { CartManager } from "../dao/cartManager.js";

const cartService = new CartManager ("carts.json")

const router = Router();

export { router as cartsRouter } 