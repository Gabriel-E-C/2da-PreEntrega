import fs from "fs";
import path from "path";
import { __dirname } from "../utils.js";

export class CartManager {
    constructor (fileName) {
        this.path = path.join(__dirname,`/files/${fileName}`);
        console.log(this.path);
    };
}