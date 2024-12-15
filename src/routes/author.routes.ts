import { AuthorController } from '@/controller/author.controller';
import express from 'express';

const authorsController = new AuthorController();

const router = express();

router.get('/authors', authorsController.getAuthors);
router.get('/authors/:id', authorsController.getUserById);

export default router;
