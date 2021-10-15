import { Request, Response } from "express";
import { Distribuido, DistribuidoI } from "../models/Distribuido";


export class DistribuidoController{
    // public index(req:Request, res:Response){
    //     Distribuido.findAll({})
    //            .then((distribuidos:Array<Distribuido>)=> res.json(distribuidos))
    //            .catch((err:Error) => res.status(500).json(err));
    // }
    public async getDistribuidos(req: Request,  res: Response ){
        try {
            const distribuidos = await Distribuido.findAll()
            if(!distribuidos){ 
                res.status(400).json({msg:'No Existe'})
             }
             return res.status(200).json({distribuidos})
 
        } catch (error) {
            res.status(500).json({msg:'No hay conexion'})
        }
     }
      public mostrarDistribuidos(){
 
     
     }
    //  obtener una venta en especial
 
    //  public async getDistribuido(req: Request,  res: Response ){}
    // -----otras consultas (CRUD - crear ) ------
    public async createDroveedores(req:Request, res: Response){
        const body: DistribuidoI = req.body
        try {
            if((!body.cantidad )) return res.status(400).json({msg:'Se requieren datos'});
            
            const Distri: Distribuido | null = await Distribuido.findOne(   {where: {cantidad: body.cantidad},
            }
           );
           
       

         const distribuido = await Distribuido.create(body);
         res.status(200).json({distribuido});

          } catch (error) {
            
        }

  }

 }
 
 
 
