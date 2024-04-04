import db from '../db/connection';
import { DataTypes } from 'sequelize';

const Map = db.define('map', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
    },
    latitude: {
        type: DataTypes.STRING,
    },
    longitude: {
        type: DataTypes.STRING,
    },
    category: {
        type:DataTypes.STRING
    }
 
}, {
    createdAt: false,
    updatedAt: false,
});

export default Map;