import FakeBooksRepository from '../infra/typeorm/repository/fakes/FakeBooksRepository';
import { v4 } from 'uuid'
import GetBookByIdService from './GetBookByIdService';
import AppError from '../../../shared/error/AppError';

let fakeBooksRepository: FakeBooksRepository
let getBookByIdService: GetBookByIdService

describe('Get a book passing its ID', () => {
  beforeEach(() => {
    fakeBooksRepository = new FakeBooksRepository()
    getBookByIdService = new GetBookByIdService(fakeBooksRepository)
  })
  it('should be able to return a book that contains a valid ID', async () => {
    const { id } = await fakeBooksRepository.createNewBook({
      author: "Robert D. Putnam",
      description: "Deep and accelerating inequality; unprecedented political polarization; vitriolic public discourse; a fraying social fabric; public and private narcissism",
      name: "The Upswing: How America Came Together a Century Ago and How We Can Do It Again",
      imageUrl: "https://images-na.ssl-images-amazon.com/images/I/41Bm8qRLqPL._SX329_BO1,204,203,200_.jpg"
    })

    const book = await getBookByIdService.run(id)

    expect(book.author).toBe("Robert D. Putnam");
  })

  it('should return an error whenever an id not registered in the database is provided', async () => {
    expect(getBookByIdService.run(v4())).rejects.toBeInstanceOf(AppError)
  })
})