import { DataTypes, Model, Optional } from "sequelize";
import { mySqlDatabase } from "../mysql.connector";


// TODO: definir QUIEN se crean las categorias, DEBE SER UN ADMIN o SUPER ADMIN
// si es asi el modelo debe tener el campo de user y este debe ser role: admin
interface CategoryAttributes {
  id: string;
  name: string;
  availability?: boolean;
}


export interface CategoryInput extends Optional<CategoryAttributes, 'id'> { };
export interface CategoryOutput extends Required<CategoryAttributes> { };

export class Category extends Model<CategoryAttributes, CategoryInput> implements CategoryAttributes {
  declare id: string;
  declare name: string;
  declare availability: boolean;


}


Category.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  availability: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
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

// Category.hasMany(Product, {
//   foreignKey: 'category_id',
//   sourceKey: 'id'
// });

// Product.belongsTo(Category, { foreignKey: 'category_id' });
