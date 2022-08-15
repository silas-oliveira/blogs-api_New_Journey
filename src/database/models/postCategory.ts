import { Model } from 'sequelize';
import BlogPost from './blogPost';
import Category from './category';

class PostCategory extends Model {
  public postId: number;
  public categoryId: number;
}

PostCategory.belongsToMany(Category, {
  as: 'categories',
  through: PostCategory,
  foreignKey: 'postId',
  otherKey: 'categoryId',
})

PostCategory.belongsToMany(BlogPost, {
  as: 'blogPosts',
  through: PostCategory,
  foreignKey: 'categoryId',
  otherKey: 'postId',
})

export default PostCategory;