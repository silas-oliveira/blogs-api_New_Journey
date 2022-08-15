"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const blogPost_1 = __importDefault(require("./blogPost"));
const category_1 = __importDefault(require("./category"));
class PostCategory extends sequelize_1.Model {
}
PostCategory.belongsToMany(category_1.default, {
    as: 'categories',
    through: PostCategory,
    foreignKey: 'postId',
    otherKey: 'categoryId',
});
PostCategory.belongsToMany(blogPost_1.default, {
    as: 'blogPosts',
    through: PostCategory,
    foreignKey: 'categoryId',
    otherKey: 'postId',
});
exports.default = PostCategory;
