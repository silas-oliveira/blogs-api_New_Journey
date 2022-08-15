"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const options = {
    host: 'localhost',
    port: 3306,
    database: 'blogs-api',
    username: 'root',
    password: 'password',
    dialect: 'mysql',
    dialectOptions: {
        timezone: 'Z',
    },
};
exports.default = options;
