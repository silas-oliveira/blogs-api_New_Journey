"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class Category extends sequelize_1.Model {
}
Category.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.INTEGER,
    },
    name: {
        type: (0, sequelize_1.STRING)()
    }
}, {
    sequelize: _1.default,
    tableName: 'Categories',
    modelName: 'Category',
    timestamps: false,
    underscored: true,
});
exports.default = Category;
