import { Request, Response } from "express";
import { Distribuido, DistribuidoI } from "../models/Distribuido";


export class DistribuidoController{
   
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

    public async createDistribuido(req:Request, res: Response){
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
  public async borrarDistribuido(req: Request, res: Response){
    try {

        const { id } = req.body;
    
        const response = await Distribuido.destroy({
          where: { id: id }
        })
        .then( function(data){
          const res = { success: true, data: data, message:"Realizado el recorrido" }
          return res;
        })
        .catch(error => {
          const res = { success: false, error: error }
          return res;
        })
        res.json(response);
    
      } catch (e) {
        console.log(e);
      }
}  

 }
 
 
 
