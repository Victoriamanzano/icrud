import { Sequelize } from "sequelize"; 
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize('inprocode_data', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb',
  });

  export default sequelize;
  
  sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.✨');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });