import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/connection';
import Book from './Book';

class Author extends Model {
  public id!: number;
  public name!: string;
}

Author.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Author',
  }
);

// Author.belongsToMany(Book, { through: 'BookAuthor' });
// Book.belongsToMany(Author, { through: 'BookAuthor' });

export default Author;
