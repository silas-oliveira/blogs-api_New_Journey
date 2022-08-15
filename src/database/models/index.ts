import { Sequelize } from "sequelize";
import vars from "../../vars";

const sequelize = new Sequelize(vars.db.uri, {
  dialect: "mysql",
});

export default sequelize;
