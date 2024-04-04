import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Client = db.define('Client', {
    name: {
        type: DataTypes.STRING
    },
    surname: {
        type: DataTypes.STRING
    },
    dni: {
        type: DataTypes.STRING
    },
    birthdate: {
        type:DataTypes.TEXT
    },
    address: {
        type: DataTypes.TEXT
    },
    postalcode: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.STRING
    },
}, {
    createdAt: false,
    updatedAt: false
});

export default Client;