import { getRepository, Repository, ILike } from "typeorm";
import Book from "../entity/Book";
import IBooksRepository from "../../../IRepository/IBooksRepository";
import ICreateBookDTO from "../../../DTOs/ICreateBookDTO";

export default class BooksRepository implements IBooksRepository {
  private ormRepository: Repository<Book>

  constructor() {
    this.ormRepository = getRepository('books')
  }

  public async findBooks(name: string): Promise<Book[] | []> {
    const books = await this.ormRepository.find({ name: ILike(`%${name}%`) })

    return books
  }

  public async createNewBook({ author, description, name, imageUrl }: ICreateBookDTO): Promise<Book> {
    const book = this.ormRepository.create({
      author,
      description,
      name,
      imageUrl: imageUrl || null
    })
    await this.ormRepository.save(book)

    return book
  }

  public async getBookByName(name: string): Promise<Book | undefined> {
    const book = await this.ormRepository.findOne({ where: { name: name } })

    return book || undefined
  }

  public async getBookById(id: string): Promise<Book | undefined> {
    const book = await this.ormRepository.findOne(id)

    return book || undefined
  }

  public async getAllBooks(): Promise<Book[] | []> {
    const books = await this.ormRepository.find()

    return books
  }
}