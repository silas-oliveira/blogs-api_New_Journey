"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const user_1 = __importDefault(require("./user"));
class BlogPost extends sequelize_1.Model {
}
BlogPost.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.INTEGER,
    },
    title: {
        type: (0, sequelize_1.STRING)(),
    },
    content: {
        type: (0, sequelize_1.STRING)()
    },
    userId: {
        type: sequelize_1.INTEGER,
    },
    published: {
        allowNull: false,
        type: (0, sequelize_1.DATE)(3),
        field: 'created_at',
    },
    updated: {
        allowNull: false,
        type: (0, sequelize_1.DATE)(3),
        field: 'updated_at',
    },
}, {
    sequelize: _1.default,
    tableName: 'BlogPosts',
    modelName: 'BlogPost',
    timestamps: true,
    underscored: true,
});
BlogPost.belongsTo(user_1.default, { foreignKey: 'userId', as: 'user' });
exports.default = BlogPost;
