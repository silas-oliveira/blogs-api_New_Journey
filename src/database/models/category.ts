import { INTEGER, Model, STRING } from 'sequelize';
import db from '.';

class Category extends Model {
  public id: number;
  public name: string;
}

Category.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  name: {
    type: STRING()
  }
}, {
    sequelize: db,
    tableName: 'Categories',
    modelName: 'Category',
    timestamps: false,
    underscored: true,
})

export default Category;