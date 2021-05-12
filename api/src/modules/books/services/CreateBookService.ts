import { inject, injectable } from "tsyringe";
import AppError from "../../../shared/error/AppError";
import IBookDTO from "../DTOs/IBookDTO";
import Book from "../infra/typeorm/entity/Book";
import IBooksRepository from "../IRepository/IBooksRepository";

@injectable()
export default class CreateBookService {

  constructor(
    @inject('BooksRepository')
    private booksRepository: IBooksRepository,
  ) { }

  public async run({ author, description, name, imageUrl }: IBookDTO): Promise<Book> {
    const bookExists = await this.booksRepository.getBookByName(name)
    if (bookExists) throw new AppError('Book with this name already exists!', 422)

    const book = await this.booksRepository.createNewBook({ author, description, name, imageUrl })

    return book
  }
}