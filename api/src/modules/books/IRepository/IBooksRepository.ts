import ICreateBookDTO from "../DTOs/ICreateBookDTO";
import Book from "../infra/typeorm/entity/Book";

export default interface IBooksRepository {
  getBookById(id: string): Promise<Book | undefined>;
  getBookByName(name: string): Promise<Book | undefined>;
  createNewBook(data: ICreateBookDTO): Promise<Book>;
  findBooks(name: string): Promise<Book[] | []>;
  getAllBooks(): Promise<Book[] | []>
}