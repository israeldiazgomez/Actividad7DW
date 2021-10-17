import { Request, Response } from "express";
import { Compra } from '../models/Compra'

export class CompraController {
    
    public async getCompras(req: Request, res: Response){

        try {
            const compras = await Compra.findAll()
            if(!compras){
                res.status(400).json({ msg: 'no conexion'})
            }
            return res.status(200).json({compras})
        } catch (error) {
            res.status(500).json({ msg: 'Error interno'})
        }
    }
}