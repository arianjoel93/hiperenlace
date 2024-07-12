import { DataTypes, Model, Optional } from "sequelize";
import { mySqlDatabase } from "../mysql.connector";

interface ProductAttributes {
  id: string;
  name: string;
  description: string;
  category_id: string;
  image_url: string;
  price: string;
  availability: boolean;
}


export interface ProductInput extends Optional<ProductAttributes, 'image_url'> { };
export interface ProductOutput extends Required<ProductAttributes> { };

export class Product extends Model<ProductAttributes, ProductInput> implements ProductAttributes {
  declare id: string;
  declare name: string;
  declare description: string;
  declare category_id: string;
  declare image_url: string;
  declare price: string;
  declare availability: boolean;
}


Product.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  category_id: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image_url: {
    type: DataTypes.STRING,
    allowNull: true
  },
  price: {
    type: DataTypes.STRING,
    allowNull: false
  },
  availability: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }

}, {
  sequelize: mySqlDatabase,
  tableName: 'products',
  timestamps: false,
  // freezeTableName: true,
  // underscored: true,
  // paranoid: true,
  // timestamps: true,
  // createdAt: false,
  // updatedAt: false
})

