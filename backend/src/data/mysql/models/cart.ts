import { DataTypes, Model, Optional } from "sequelize";
import { mySqlDatabase } from "../mysql.connector";
import { Product } from "./product";

interface CartAttributes {
  id: string;
  user_id: string; 
}


export interface CartInput extends Optional<CartAttributes, 'user_id'> { };
export interface CartOutput extends Required<CartAttributes> { };

export class Cart extends Model<CartAttributes, CartInput> implements CartAttributes {
  declare id: string;
  declare user_id: string;

 
}


Cart.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  user_id: {
    type: DataTypes.UUID,
    allowNull: false
  }
}, {
  sequelize: mySqlDatabase,
  tableName: 'carts',
  timestamps: false,
  // freezeTableName: true,
  // underscored: true,
  // paranoid: true,
  // timestamps: true,
  // createdAt: false,
  // updatedAt: false
});

Cart.hasMany(Product, {
  foreignKey: {
    name: 'cart_id',
    allowNull: false
  },
  sourceKey: 'id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});

Product.belongsTo(Cart, { foreignKey: 'cart_id' });

