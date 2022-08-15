"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const blogPost_1 = __importDefault(require("./blogPost"));
class User extends sequelize_1.Model {
}
User.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.INTEGER,
    },
    displayName: (0, sequelize_1.STRING)(),
    email: (0, sequelize_1.STRING)(),
    password: (0, sequelize_1.STRING)(),
    image: (0, sequelize_1.STRING)(),
}, {
    sequelize: _1.default,
    tableName: 'Users',
    modelName: 'User',
    timestamps: false,
    underscored: true,
});
User.hasMany(blogPost_1.default, { foreignKey: 'userId', as: 'blogPosts' });
exports.default = User;
