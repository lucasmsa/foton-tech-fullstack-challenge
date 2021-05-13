import { inject, injectable } from "tsyringe";
import Book from "../infra/typeorm/entity/Book";
import IBooksRepository from "../IRepository/IBooksRepository";

@injectable()
export default class FindBooksService {

  constructor(
    @inject('BooksRepository')
    private booksRepository: IBooksRepository,
  ) { }

  public async run(name: string): Promise<Book[] | []> {
    const books = await this.booksRepository.findBooks(name)

    return books
  }
}