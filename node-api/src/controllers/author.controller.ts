import { Request, Response } from 'express';
import Author from '../models/Author';

export const getAllAuthors = async (req: Request, res: Response) => {
  try {
    const authors = await Author.findAll({ include: 'Books' });
    return res.json(authors);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};
