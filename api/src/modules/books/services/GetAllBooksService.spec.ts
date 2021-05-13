import FakeBooksRepository from '../infra/typeorm/repository/fakes/FakeBooksRepository';
import GetAllBooksService from './GetAllBooksService';

describe('List all books', () => {
  it('should be able to return all stored books', async () => {
    let fakeBooksRepository = new FakeBooksRepository()
    let getAllBooksService = new GetAllBooksService(fakeBooksRepository)

    await fakeBooksRepository.createNewBook({
      author: "Michael J. Sandel",
      description: "In his acclaimed book―based on his legendary Harvard course―Sandel offers",
      name: "Justice: What's The Right Thing To Do?",
      imageUrl: "https://images-na.ssl-images-amazon.com/images/I/41lJWligwkL._SX327_BO1,204,203,200_.jpg"
    })

    await fakeBooksRepository.createNewBook({
      author: "Michael J. Sandel",
      description: "These are dangerous times for democracy. We live in an age of winners and losers, where the odds are stacked in favor of the already fortunate",
      name: "The Tyranny of Merit: What's Become of the Common Good?",
      imageUrl: "https://images-na.ssl-images-amazon.com/images/I/41lJWligwkL._SX327_BO1,204,203,200_.jpg"
    })

    const books = await getAllBooksService.run()

    expect(books).toHaveLength(2);
  })
})