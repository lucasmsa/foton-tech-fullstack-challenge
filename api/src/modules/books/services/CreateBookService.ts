import { inject, injectable } from "tsyringe";
import IBookDTO from "../DTOs/IBookDTO";
import Book from "../infra/typeorm/entity/Book";
import IBooksRepository from "../IRepository/IBooksRepository";

@injectable()
export default class CreateBookService {

  constructor(
    @inject('BooksRepository')
    private booksRepository: IBooksRepository,
  ) { }

  public async run({ author, description, name }: IBookDTO): Promise<Book> {
    const bookExists = await this.booksRepository.getBookByName(name)
    if (bookExists) throw new Error('Book with this name already exists!')

    const book = await this.booksRepository.createNewBook({ author, description, name })

    return book
  }
}