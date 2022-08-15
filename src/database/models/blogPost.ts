import { DATE, INTEGER, Model, STRING } from 'sequelize';
import db from '.';
import User from './user';

class BlogPost extends Model{
  public id: number;
  public title: string;
  public content: string;
  public userId: number;
  public published: string;
  public updated: string;
}

BlogPost.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  title: {
    type: STRING(),
  },
  content: {
    type: STRING()
  },
  userId: {
    type:INTEGER,
  },
  published: {
    allowNull: false,
    type: DATE(3),
    field: 'created_at',
  },
  updated: {
    allowNull: false,
    type: DATE(3),
    field: 'updated_at',
  },
},
  {
      sequelize: db,
      tableName: 'BlogPosts',
      modelName: 'BlogPost',
      timestamps: true,
      underscored: true,
});

BlogPost.belongsTo(User, { foreignKey: 'userId', as: 'user' });

export default BlogPost;
