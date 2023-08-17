import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/connection';
import Author from './Author';

class Book extends Model {
  public id!: number;
  public title!: string;
  public chapters!: number;
  public pages!: number;
}

Book.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    chapters: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pages: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Book',
  }
);

// Book.belongsToMany(Author, { through: 'BookAuthor' });
// Author.belongsToMany(Book, { through: 'BookAuthor' });

export default Book;
