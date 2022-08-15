require('dotenv').config();

const environment = process.env.NODE_ENV || 'test';

type TSuffix = {
  [key: string]: string;
}

const suffix: TSuffix = {
  dev: '-dev',
  development: '-dev',
  test: '-test',
};

const options = {
  host: process.env.HOSTNAME || process.env.MYSQL_HOST || 'localhost',
  port: process.env.MYSQL_PORT || '3306',
  database: 
    `${process.env.MYSQL_DB_NAME || 'blogs-api'}${suffix[environment] || suffix.test}`,
  username: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'password',
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: process.env.DEBUG !== 'false',
};

export default {
  development: {
    ...options,
  },
  test: {
    ...options,
  },
};
