import db from '../db/connection';
import { DataTypes } from 'sequelize';

const Chartjs = db.define('chartjs', {
    year: {
        type: DataTypes.INTEGER,
    },
    amount: {
        type: DataTypes.INTEGER,
    },
    colorcode: {
        type: DataTypes.STRING,
    },
    
 
}, {
    createdAt: false,
    updatedAt: false,
});

export default Chartjs;