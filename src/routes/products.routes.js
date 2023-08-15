import { Router } from "express";
import { ProductManager } from "../dao/productManager.js";
import { __dirname } from "../utils.js";

const router = Router();

const productService = new ProductManager ("products.json");

router.post("/", (req,res)=>{
    const newProduct = req.body;
    let products;
    if (!newProduct.title || !newProduct.price || !newProduct.description || !newProduct.code || !newProduct.stock){
        return res.send(console.log("Hay un campo obligatorio incompleto."));
    } else {
        products = productService.addProduct(...Object.values(newProduct));        
        return res.json({status:"success", payload:products});
    }
});

router.get("/", (req,res)=>{
        console.log(req.query);
        let limit = req.query.limit;
        console.log("El limite es",limit);
        let products = productService.getProduct();
        let limitedProducts =[];
        if (limit || limit >= products.length){
            return res.send (limitedProducts = products.slice(0,limit));
        }else{
            return res.send(products);
        }
});

router.get("/:pid", (req,res)=>{
        let productID = parseInt(req.params.pid);
        console.log(productID);
        let product = productService.getProductByID(productID);
        return res.send(product);   
});

router.put("/:pid", (req,res)=>{
    const newProduct = req.body;  
    let productID = parseInt(req.params.pid);
    let products = productService.updateProduct(productID, newProduct);
    return res.json({status:"success", payload:products});
});

router.delete("/:pid", (req,res)=>{
    const newProduct = req.body;  
    let productID = parseInt(req.params.pid);
    let products = productService.deleteProduct(productID);
    return res.json({status:"success", payload:products});
});

export { router as productsRouter } 