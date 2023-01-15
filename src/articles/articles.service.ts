import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ArticlesService {
  // `private` here is a parameter property 
  // https://www.typescriptlang.org/docs/handbook/2/classes.html#parameter-properties
  constructor(private prisma: PrismaService) {}

  create(createArticleDto: CreateArticleDto) {
    return this.prisma.article.create({ data: createArticleDto }); 
  }

  private findAllWhere(published: boolean) {
    return this.prisma.article.findMany({ where: { published } }); 
  }

  findAll() {
    return this.findAllWhere(true); 
  }

  findAllDrafts() {
    return this.findAllWhere(false);
  }

  findOne(id: number) {
    return this.prisma.article.findUnique({ where: { id } }); 
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    // If no such Article record is found in the database, Prisma 
    // will return an error. In such cases, the API does not return
    // a user-friendly error message. You will learn about error 
    // handling with NestJS in a future tutorial.
    return this.prisma.article.update({ 
      where: { id }, 
      data: updateArticleDto 
    }); 
  }

  remove(id: number) {
    return this.prisma.article.delete({ where: { id }}); 
  }
}
