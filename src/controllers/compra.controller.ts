import { Request, Response } from "express";
import { Compra } from '../models/Compra'

export class CompraController {
    public index(req: Request, res: Response){
        Compra.findAll({})
            .then((compras: Array<Compra>) => res.json(compras))
            .catch((err: Error) => res.status(500).json(err));
    }
}