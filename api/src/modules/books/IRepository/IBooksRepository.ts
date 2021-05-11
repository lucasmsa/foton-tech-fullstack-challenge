import IBookDTO from "../DTOs/IBookDTO";
import Book from "../infra/typeorm/entity/Book";

export default interface IBooksRepository {
  getBookById(id: string): Promise<Book | undefined>;
  getBookByName(name: string): Promise<Book | undefined>;
  createNewBook(data: IBookDTO): Promise<Book>;
  findBooks(name: string): Promise<Book[] | []>;
  getAllBooks(): Promise<Book[] | []>
}