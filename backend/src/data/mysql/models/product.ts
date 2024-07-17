import { DataTypes, Model, Optional } from "sequelize";
import { mySqlDatabase } from "../mysql.connector";
import { Category } from "./category";

interface ProductAttributes {
  id: string;
  name: string;
  description: string;
  price: number;
  availability: boolean;
  image_url?: string;
  category_id?: string;
  cart_id?: string;
}


export interface ProductInput extends Optional<ProductAttributes, 'id'| 'category_id'| 'cart_id' | 'image_url'> { };
export interface ProductOutput extends Required<ProductAttributes> { };

export class Product extends Model<ProductAttributes, ProductInput> implements ProductAttributes {
  declare id: string;
  declare name: string;
  declare description: string;
  declare price: number;
  declare availability: boolean;
  declare image_url?: string;
  declare category_id?: string;
  declare cart_id?: string
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
    type: DataTypes.UUID,
    allowNull: true,
  },
  cart_id: {
    type: DataTypes.UUID,
    allowNull: true,
  },
  image_url: {
    type: DataTypes.STRING,
    allowNull: true
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  availability: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
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

Product.belongsTo(Category, { foreignKey: 'category_id' });

Category.hasMany(Product, {
  foreignKey: 'category_id',
  sourceKey: 'id'
});

