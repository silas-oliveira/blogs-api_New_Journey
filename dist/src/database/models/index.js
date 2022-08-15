"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const vars_1 = __importDefault(require("../../vars"));
const config_1 = __importDefault(require("../config/config"));
const sequelize = new sequelize_1.Sequelize(vars_1.default.db.uri, config_1.default);
exports.default = sequelize;