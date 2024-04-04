import db from '../db/connection';
import { DataTypes } from 'sequelize';

const events = db.define('events', {

    id:{
        type: DataTypes.INTEGER,
    
    },
    title: {
        type: DataTypes.STRING,
    
    },
    date: {
        type: DataTypes.DATE,
    },    
},
 {
    createdAt: false,
    updatedAt: false,
});

export default events;
