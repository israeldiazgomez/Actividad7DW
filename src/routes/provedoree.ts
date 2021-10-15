import { Request, Response, Application } from "express";
import { ProveedoreController } from "../controllers/proveedore.controller";


export class ProveedoreRoutes{
    public proveedoreController: ProveedoreController = new ProveedoreController();
    public routes(app: Application): void{
        // app.route('/proveedore').get(this.proveedoreController.index);
        app.route('/proveedore').get(this.proveedoreController.getProveedores);

        //crear usuario 
        app.route('/crearproveedor').post(this.proveedoreController.createProveedores);
    }

} 