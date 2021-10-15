import { Request, Response, Application } from "express";
import { DistribuidoController } from "../controllers/distribuido.controller";

export class DistribuidoRoutes{
    public distribuidoController: DistribuidoController = new DistribuidoController();
    public routes(app: Application): void{
    //     app.route('/distribuido').get(this.distribuidoController.index);
  
        app.route('/distribuido').get(this.distribuidoController.getDistribuidos);
    }

} 