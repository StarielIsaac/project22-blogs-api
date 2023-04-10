module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      id: { 
        type: DataTypes.INTEGER, 
        allowNull: false,
        autoIncrement: true,    
        primaryKey: true 
      },
      
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    }, {
      tableName: 'users',
      timestamps: false,
      underscored: true,
    });
  
    // hasMany -> Tem muitos
    
    User.associate = (model) => {
      User.hasMany(model.BlogPost,
        { foreignKey: 'userId', as: 'posts' })
    }
    return User;
  }