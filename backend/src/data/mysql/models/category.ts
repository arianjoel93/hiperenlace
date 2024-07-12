import { DataTypes, Model, Optional } from "sequelize";
import { mySqlDatabase } from "../mysql.connector";
import { Product } from "./product";

interface CategoryAttributes {
  id: string;
  name: string;
}


export interface CategoryInput extends Optional<CategoryAttributes, 'name'> { };
export interface CategoryOutput extends Required<CategoryAttributes> { };

export class Category extends Model<CategoryAttributes, CategoryInput> implements CategoryAttributes {
  declare id: string;
  declare name: string;

 
}


Category.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize: mySqlDatabase,
  tableName: 'category',
  timestamps: false,
  // freezeTableName: true,
  // underscored: true,
  // paranoid: true,
  // timestamps: true,
  // createdAt: false,
  // updatedAt: false
});

Category.hasMany(Product, {
  foreignKey: {
    name: 'category_id',
    allowNull: false
  },
  sourceKey: 'id'
});

Product.belongsTo(Category, { foreignKey: 'category_id' });
