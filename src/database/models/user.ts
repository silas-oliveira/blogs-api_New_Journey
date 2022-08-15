import { INTEGER, Model, STRING } from 'sequelize';
import db from '.';
import BlogPost from './blogPost';

class User extends Model {
  public id: number;
  public displayName: string;
  public email: string;
  public password: string;
  public image: string;
}

User.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  displayName: STRING(),
  email: STRING(),
  password: STRING(),
  image: STRING(),
}, {
    sequelize: db,
    tableName: 'Users',
    modelName: 'User',
    timestamps: false,
    underscored: true,
})

User.hasMany(BlogPost, { foreignKey: 'userId', as: 'blogPosts' })

export default User;