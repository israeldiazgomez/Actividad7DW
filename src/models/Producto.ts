const Sequelize = require('sequelize');
import {database} from "../database/db";

export class Producto extends Sequelize.Model {
    public descripcion!: string;
    public precio!: string;
    public numero_exitencia!: string;
}
export interface ProductoI {
    descripcion: string;
    precio: string;
    numero_existencia: string;
}
Producto.init (
    {
        descripcion: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        },
        precio: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        },
        numero_existencia: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        },
    },
    {
        tableName: "productos",
        sequelize: database,
        timetamps: true
    }
);