module.exports = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
      id: { 
        type: DataTypes.INTEGER, 
        allowNull: false,
        primaryKey: true, 
        autoIncrement: true 
    },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      published: DataTypes.DATE,
      updated: DataTypes.DATE,
    }, {
        timestamps: false,
        underscored: true,
        tableName: 'blog_posts',
    })
    BlogPost.associate = (model) => {
      BlogPost.belongsTo(model.User,
        { foreignKey: 'userId', as: 'user' })
    }
  
    return BlogPost;
  }