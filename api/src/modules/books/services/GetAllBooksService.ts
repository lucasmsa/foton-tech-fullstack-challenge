import { inject, injectable } from "tsyringe";
import Book from "../infra/typeorm/entity/Book";
import IBooksRepository from "../IRepository/IBooksRepository";

@injectable()
export default class GetAllBooksService {

  constructor(
    @inject('BooksRepository')
    private booksRepository: IBooksRepository,
  ) { }

  public async run(): Promise<Book[] | []> {
    const books = await this.booksRepository.getAllBooks()

    return books
  }
}