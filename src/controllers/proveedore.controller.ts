import { Request, Response } from "express";
import { where } from "sequelize";
import { Where } from "sequelize/types/lib/utils";
import { Proveedore, ProveedoreI } from "../models/Proveedore";


export class ProveedoreController{
  
     public async getProveedores(req: Request,  res: Response ){
       try {
           const proveedores = await Proveedore.findAll()
           if(!proveedores){ 
               res.status(400).json({msg:'No Existe'})
            }
            return res.status(200).json({proveedores})

       } catch (error) {
           res.status(500).json({msg:'No hay conexion'})
       }
    }
    
     public async createProveedores(req:Request, res: Response){
          const body: ProveedoreI = req.body
          try {
              if((!body.codigo && !body.nombre && !body.apellido && !body.direccion && !body.provincia && !body.telefono)) return res.status(400).json({msg:'Se requieren datos'});

              const proveedoreExist: Proveedore | null = await Proveedore.findOne(   {where: {codigo: body.codigo},
            }
           );

          
           if(proveedoreExist){
            return res.status(400).json({msg:'El codigo ya existe'});
           }


           const proveedore = await Proveedore.create(body);
           res.status(200).json({proveedore});

            } catch (error) {
              
          }

    }


   
}



