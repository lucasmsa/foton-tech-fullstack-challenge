import { v4 } from 'uuid'
import IBooksRepository from '../../../../IRepository/IBooksRepository'
import ICreateBookDTO from '../../../../DTOs/ICreateBookDTO'
import Book from '../../entity/Book'

export default class FakeBooksRepository implements IBooksRepository {

  private books: Book[] = []

  public async createNewBook({ name, author, description, imageUrl }: ICreateBookDTO): Promise<Book> {
    const book = new Book()
    Object.assign(book, { id: v4(), author, description, name, imageUrl })
    this.books.push(book)

    return book;
  }

  public async getBookById(id: string): Promise<Book | undefined> {
    const [book] = this.books.filter(book => book.id === id)

    return book || undefined
  }

  public async getBookByName(name: string): Promise<Book | undefined> {
    const [book] = this.books.filter(book => book.name === name)

    return book || undefined
  }

  public async getAllBooks(): Promise<Book[] | []> {
    return this.books
  }

  public async findBooks(name: string): Promise<Book[] | []> {
    const regexQuery = new RegExp(name)
    const books = this.books.filter(book => regexQuery.test(book.name))

    return books
  }
}