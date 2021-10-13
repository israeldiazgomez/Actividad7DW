import { Request, Response } from "express";
import { Producto } from '../models/Producto';

export class ProductoController {
    public index(req: Request, rest: Response){
        Producto.findAll({})
        .then((productos: Array<Producto>) => rest.json(productos))
        .catch((err: Error) => rest.status(500).json(err));
    }
    
}