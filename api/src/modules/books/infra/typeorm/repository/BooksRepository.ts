import { getRepository, Repository } from "typeorm";
import Book from "../entity/Book";
import createTreeQueryBuilder from 'typeorm-query';
import IBooksRepository from "../../../IRepository/IBooksRepository";
import IBookDTO from "../../../DTOs/IBookDTO";

export default class BooksRepository implements IBooksRepository {
  private ormRepository: Repository<Book>

  constructor() {
    this.ormRepository = getRepository('books')
  }

  public async findBooks(name: string): Promise<Book[] | []> {
    const books = await createTreeQueryBuilder<Book>()
      .param('name', name)
      .orderBy('name', "ASC")
      .getMany()

    return books
  }

  public async createNewBook({ author, description, name }: IBookDTO): Promise<Book | undefined> {
    const book = this.ormRepository.create({ author, description, name })
    await this.ormRepository.save(book)

    return book || undefined
  }

  public async getBookByName(name: string): Promise<Book | undefined> {
    const book = await this.ormRepository.findOne({ where: { name: name } })

    return book || undefined
  }

  public async getBookById(id: string): Promise<Book | undefined> {
    const book = await this.ormRepository.findOne(id)

    return book || undefined
  }
}