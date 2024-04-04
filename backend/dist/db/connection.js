"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const sequelize = new sequelize_1.Sequelize('inprocode_data', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb',
});
exports.default = sequelize;
sequelize.authenticate()
    .then(() => {
    console.log('Connection has been established successfully.✨');
})
    .catch(err => {
    console.error('Unable to connect to the database:', err);
});
