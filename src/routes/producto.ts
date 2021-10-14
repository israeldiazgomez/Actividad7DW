import { request, Response, Application} from "express";
import { ProductoController } from '../controllers/producto.controller';

export class ProductoRoutes {
    public productoController: ProductoController = new ProductoController();
    public routes(app: Application): void {
        app.route('/productos').get(this.productoController.getProductos)
        app.route('/borrarproductos').delete(this.productoController.borrarProducto)
        app.route('/createproductos').post(this.productoController.createProducto)
    }
}