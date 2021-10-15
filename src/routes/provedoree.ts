import { Request, Response, Application } from "express";
import { ProveedoreController } from "../controllers/proveedore.controller";


export class ProveedoreRoutes{
    public proveedoreController: ProveedoreController = new ProveedoreController();
    public routes(app: Application): void{
        
        app.route('/proveedore').get(this.proveedoreController.getProveedores); 
        app.route('/crearproveedor').post(this.proveedoreController.createProveedores);
        app.route('/borrarproveedor').delete(this.proveedoreController.borrarProveedor);
        
    }

} 