import AppError from '../../../shared/error/AppError';
import FakeBooksRepository from '../infra/typeorm/repository/fakes/FakeBooksRepository';
import CreateBooksService from './CreateBookService';

let fakeBooksRepository: FakeBooksRepository
let createBooksService: CreateBooksService

describe('Create a new Book', () => {
  beforeEach(() => {
    fakeBooksRepository = new FakeBooksRepository()
    createBooksService = new CreateBooksService(fakeBooksRepository)
  })
  it('should be able to create a new book', async () => {
    const book = await createBooksService.run({
      author: "H. P. Lovecraft",
      description: "Kurôzu-cho, a small fogbound town on the coast of Japan, is cursed.",
      name: "Uzumaki",
      imageUrl: null
    })

    expect(book.name).toBe('Uzumaki');
    expect(book.author).toBe('H. P. Lovecraft');
  })

  it('should not be able to create a new book if another book with the same name exists', async () => {
    fakeBooksRepository.createNewBook({
      author: "Stan Lee",
      description: "THE AMAZING SPIDER-MAN by Stan Lee 1979",
      name: "The Amazing Spider-Man",
      imageUrl: null
    })

    expect(createBooksService.run({
      author: "Stun Leeson",
      description: "Not that amazing Spider-man",
      name: "The Amazing Spider-Man",
      imageUrl: null
    })).rejects.toBeInstanceOf(AppError)
  })
})