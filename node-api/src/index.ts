import express from 'express';
import bookRoutes from './routes/book.routes';
import authorRoutes from './routes/author.routes';
import sequelize from './database/connection';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/books', bookRoutes);
app.use('/authors', authorRoutes);

// Sync models with the database
sequelize.sync().then(() => {
  console.log('Database synced');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
