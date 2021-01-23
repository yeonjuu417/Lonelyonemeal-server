'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class recipeLog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.users)
    }
  };
  recipeLog.init({
    id: {
      type: DataTypes.NUMBER,
      primaryKey: true,
    },
    userId: DataTypes.INTEGER,
    foodImg: DataTypes.STRING,
    foodName: DataTypes.STRING,
    link : DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'recipeLogs',
  });
//   recipeLog.associate = function(models) {
//     recipeLog.belongsTo(models.user, {
//       foreignKey: 'id'
//       })
// };
  return recipeLog;
};
