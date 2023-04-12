module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
        postId: {
            primaryKey: true,
            type: DataTypes.INTEGER
          },
          categoryId: {
            type: DataTypes.INTEGER,
            primaryKey: true
          },
    }, {
      timestamps: false,
      underscored: true,
      tableName: 'posts_categories',
    });
  
    // belongsTo - Pertence a muitos
    PostCategory.associate = ({ Category, BlogPost}) => { 
      BlogPost.belongsToMany(Category, {
        through: 'PostCategory', 
        foreignKey: 'categoryId',
        as: 'categories',
      }), 
      // belongsTo - Pertence a muitos
      Category.belongsToMany(BlogPost, {
        through: 'PostCategory',
        foreignKey: 'postId', 
        as: 'blogposts' 
    }
  )}
    return PostCategory;
  } 