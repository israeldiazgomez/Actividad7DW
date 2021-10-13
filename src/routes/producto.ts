import { request, Response, Application} from "express";
import { ProductoController } from '../controllers/producto.controller';

export class ProductoRoutes {
    public productoController: ProductoController = new ProductoController();
    public routes(app: Application): void {
        app.route('/productos').get(this.productoController.index);
    }
}