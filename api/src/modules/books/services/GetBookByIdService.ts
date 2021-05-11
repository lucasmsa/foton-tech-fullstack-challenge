import { inject, injectable } from "tsyringe";
import Book from "../infra/typeorm/entity/Book";
import IBooksRepository from "../IRepository/IBooksRepository";

@injectable()
export default class GetBookByIdService {

  constructor(
    @inject('BooksRepository')
    private booksRepository: IBooksRepository,
  ) { }

  public async run(id: string): Promise<Book> {
    const book = await this.booksRepository.getBookById(id)
    if (!book) throw new Error('Book with this ID does not exist!')

    return book
  }
}