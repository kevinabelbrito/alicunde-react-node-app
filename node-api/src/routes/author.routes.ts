import express from 'express';
import { getAllAuthors } from '../controllers/author.controller';

const router = express.Router();

router.get('/', getAllAuthors);

export default router;
