import { DataTypes, Model, Optional } from "sequelize";
import { mySqlDatabase } from "../mysql.connector";
import { User } from "./user";

interface UserAddressAttributes {
  id: string;
  user_id: string;
  address_line_1: string;
  address_line_2: string;
  post_code: string;
  country: string;
}


export interface UserAddressInput extends Optional<UserAddressAttributes, 'country'> { };
export interface UserAddressOutput extends Required<UserAddressAttributes> { };

export class UserAddress extends Model<UserAddressAttributes, UserAddressInput> implements UserAddressAttributes {
  declare id: string;
  declare user_id: string;
  declare address_line_1: string;
  declare address_line_2: string;
  declare post_code: string;
  declare country: string;
}


UserAddress.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  user_id: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'users', // nombre de la tabla a la que se hace referencia
      key: 'id', // columna de la tabla a la que se hace referencia
    },
  },
  address_line_1: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address_line_2: {
    type: DataTypes.STRING,
    allowNull: false
  },
  post_code: {
    type: DataTypes.STRING,
    allowNull: false
  },
  country: {
    type: DataTypes.STRING,
    allowNull: true
  },

}, {
  sequelize: mySqlDatabase,
  tableName: 'user_address',
  timestamps: false,
  // freezeTableName: true,
  // underscored: true,
  // paranoid: true,
  // timestamps: true,
  // createdAt: false,
  // updatedAt: false
})

User.hasOne(UserAddress, {
  foreignKey: 'user_id',
  sourceKey: 'id',

});
UserAddress.belongsTo(User, { foreignKey: 'user_id' }); // Relación inversa en UserAddress