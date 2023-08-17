import { Request, Response } from 'express';
import Book from '../models/Book';

export const createBook = async (req: Request, res: Response) => {
  try {
    const { title, chapters, pages, authorIds } = req.body;
    const book = await Book.create({
      title,
      chapters,
      pages,
    });
    // if (authorIds) {
    //   await book.setAuthors(authorIds);
    // }
    return res.status(201).json(book);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await Book.findAll({ include: 'Authors' });
    return res.json(books);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};
