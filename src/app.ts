import express, { Request, Response } from 'express';
import authorRoutes from './routes/author.routes';

const app = express();

app.use('/api/v1', authorRoutes);

app.all('*', (req: Request, res: Response) => {
  res.send('Hello');
});

export default app;
