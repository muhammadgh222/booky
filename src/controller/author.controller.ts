import { AppDataSource } from '@/database/data-source';
import { AuthorEntity } from '@/database/entities/author.entity';
import { Request, Response } from 'express';

export class AuthorController {
  async getAuthors(req, res) {
    const authors = await AppDataSource.getRepository(AuthorEntity).find();

    return res.status(200).json({
      status: 'success',
      authors,
    });
  }

  async getUserById(req, res) {
    const author = await AppDataSource.getRepository(
      AuthorEntity
    ).findOneByOrFail({ id: req.params.id });

    return res.status(200).json({
      status: 'success',
      author,
    });
  }
}
