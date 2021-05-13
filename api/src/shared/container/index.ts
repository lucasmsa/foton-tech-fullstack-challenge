import { container } from 'tsyringe'

import IBooksRepository from "../../modules/books/IRepository/IBooksRepository";
import BooksRepository from "../../modules/books/infra/typeorm/repository/BooksRepository"

container.registerSingleton<IBooksRepository>(
  'BooksRepository',
  BooksRepository
)