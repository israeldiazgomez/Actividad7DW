// const Sequelize = require('sequelize');
import { Model, DataTypes } from 'sequelize';
import {database} from "../database/db";

export class Producto extends Model {
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
            type: DataTypes.STRING,
            allowNull: false
        },
        precio: {
            type: DataTypes.STRING,
            allowNull: false
        },
        numero_existencia: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        tableName: "productos",
        sequelize: database,
        timestamps: true
    }
)