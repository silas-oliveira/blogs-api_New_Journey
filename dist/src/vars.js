"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { env } = process;
exports.default = {
    api: {
        port: Number(env.API_PORT || env.PORT || 3001),
    },
    db: {
        uri: env.DB_URI || "mysql://root:password@127.0.0.1:3306/blogs_api_db",
    },
};
