import { Model, DataTypes } from 'sequelize';
import { database } from '../database/db';

export class Compra extends Model {
    public fecha!: Date;
}

export interface CompraI {
    fecha: Date;
}

Compra.init (
    {
        fecha: {
            type: DataTypes.DATE,
            allowNull: false
        },
    },

    {
        tableName: "compras",
        sequelize: database,
        timestamps: true
    }
);