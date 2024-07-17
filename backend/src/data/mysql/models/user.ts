import { DataTypes, Model, Optional, STRING } from "sequelize";
import { mySqlDatabase } from "../mysql.connector";
import { Cart } from "./cart";

interface UserAttributes {
  id: string;
  name: string;
  email: string;
  emailValidated: boolean;
  password: string;
  phone?: string;
  isActive?: boolean;
  role?: string[];
}


export interface UserInput extends Optional<UserAttributes, 'phone' | 'isActive' | 'id' | 'emailValidated' | 'role'> { };
export interface UserOutput extends Required<UserAttributes> { };

export class User extends Model<UserAttributes, UserInput> implements UserAttributes {
  declare id: string;
  declare name: string;
  declare email: string;
  declare emailValidated: boolean;
  declare password: string;
  declare phone?: string;
  declare isActive?: boolean;
  declare role?: string[]
}


User.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  emailValidated: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  role: {
    type: DataTypes.ENUM('admin', 'user'),
    allowNull: false,
    defaultValue: 'user'
  }

}, {
  sequelize: mySqlDatabase,
  tableName: 'users',
  timestamps: false,
  // freezeTableName: true,
  // underscored: true,
  // paranoid: true,
  // timestamps: true,
  // createdAt: false,
  // updatedAt: false
})

User.hasOne(Cart, {
  foreignKey: {
    name: 'user_id',
    allowNull: false,
  },
  sourceKey: 'id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'

});
Cart.belongsTo(User, { foreignKey: 'user_id' })