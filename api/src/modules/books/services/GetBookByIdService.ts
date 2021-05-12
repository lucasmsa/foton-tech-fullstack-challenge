import { inject, injectable } from "tsyringe";
import AppError from "../../../shared/error/AppError";
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
    if (!book) throw new AppError('Book with this ID does not exist!', 404)

    return book
  }
}