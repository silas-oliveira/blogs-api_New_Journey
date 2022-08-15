import { Sequelize } from "sequelize";
import vars from "../../vars";
import options from '../config/config';


const sequelize = new Sequelize(vars.db.uri, options);

export default sequelize;
