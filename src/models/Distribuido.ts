import exp from 'constants';
import {Model, DataTypes} from 'sequelize';
// const Sequelize = require('sequelize');
import { database } from '../database/db';
//import { Producto } from './Producto';
import {Proveedore} from './Proveedore';




export class Distribuido extends Model {
   public cantidad!: number;
   
}


export interface DistribuidoI{
    cantidad: number;
   
}
Distribuido.init(
   {
       cantidad: {
           type:DataTypes.INTEGER,
           allowNull: false 
       },

       
   },

   {
       tableName: "distribuidos",
       sequelize: database,
       timestamps: true 
   }
);


//Distribuido.hasMany(Producto);
//Producto.belongsTo(Distribuido);

Proveedore.hasMany(Distribuido);
Distribuido.belongsTo(Proveedore);
