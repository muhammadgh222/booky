import express, { Request, Response } from 'express';

const app = express();

app.all('*', (req: Request, res: Response) => {
  res.send('Hello');
});

export default app;
