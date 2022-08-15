import { Options } from "sequelize/types";

const options: Options = {
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

export default options;

