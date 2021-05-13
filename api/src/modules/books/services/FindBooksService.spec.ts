import FakeBooksRepository from '../infra/typeorm/repository/fakes/FakeBooksRepository';
import FindBooksService from './FindBooksService';

let fakeBooksRepository: FakeBooksRepository
let findBooksService: FindBooksService

describe('Query books by names', () => {
  beforeEach(() => {
    fakeBooksRepository = new FakeBooksRepository()
    findBooksService = new FindBooksService(fakeBooksRepository)
  })
  it('should be able to return books with names related to the search query', async () => {
    const book1 = await fakeBooksRepository.createNewBook({
      author: "J.K. Rowling",
      description: "It was always difficult being Harry Potter and it isn't much easier now that he is an overworked employee of the Ministry of Magic",
      name: "Harry Potter and the Cursed Child",
      imageUrl: "https://m.media-amazon.com/images/I/51G+WN7UghL.jpg"
    })

    const book2 = await fakeBooksRepository.createNewBook({
      author: "J.K. Rowling",
      description: "When Dumbledore arrives at Privet Drive one summer night to collect Harry Potter, his wand hand is blackened and shrivelled",
      name: "Harry Potter and the Half-Blood Prince",
      imageUrl: "https://m.media-amazon.com/images/I/51myHyjJsyL.jpg"
    })

    const book3 = await fakeBooksRepository.createNewBook({
      author: "Yuval Noah Harari",
      description: "Yuval Noah Harari envisions a near future in which we face a new set of challenges",
      name: "Homo Deus: A Brief History of Tomorrow",
      imageUrl: "https://m.media-amazon.com/images/I/41x9l0H2UGL.jpg"
    })

    const books = await findBooksService.run("Pot")

    expect(books).toHaveLength(2);
  })
})