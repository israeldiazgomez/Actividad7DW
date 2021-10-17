import { ClienteRoutes } from './clientes';
import {ProductoRoutes} from './producto';
import {ProveedoreRoutes} from './provedoree';
import { DistribuidoRoutes } from './distribuido';
import { CompraRoutes } from './compra';


export class Routes {
    public productoRoutes: ProductoRoutes = new ProductoRoutes();
    public clienteRoutes: ClienteRoutes = new ClienteRoutes();
    public proveedoreRoutes: ProveedoreRoutes = new ProveedoreRoutes();
    public distribuidoRoutes: DistribuidoRoutes = new DistribuidoRoutes();
    public compraRoutes: CompraRoutes = new CompraRoutes();
    
}


