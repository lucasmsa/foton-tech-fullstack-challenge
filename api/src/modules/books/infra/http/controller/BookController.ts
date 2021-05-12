import { Request, Response } from 'express'
import GetAllBooksService from '../../../services/GetAllBooksService'
import { container } from 'tsyringe'
import GetBookByIdService from '../../../services/GetBookByIdService'
import CreateBookService from '../../../services/CreateBookService'
import FindBooksService from '../../../services/FindBooksService'
import { checkBookCreationFieldErrors } from '../../../utils/checkBookCreationFieldErrors'

export default class BooksController {
  public async index(request: Request, response: Response): Promise<Response> {
    try {
      const getAllBooksService = container.resolve(GetAllBooksService)

      const books = await getAllBooksService.run()

      return response.json(books)
    } catch (err) {
      return response.status(400).json(err.message)
    }
  }

  public async show(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params
      const getBookByIdService = container.resolve(GetBookByIdService)

      const book = await getBookByIdService.run(id)

      return response.json(book)
    } catch (err) {
      return response.status(400).json(err.message)
    }
  }

  public async create(request: Request, response: Response): Promise<Response> {
    try {
      checkBookCreationFieldErrors(request)
      const { author, description, name, imageUrl } = request.body
      const createBookService = container.resolve(CreateBookService)

      const book = await createBookService.run({ author, description, name, imageUrl: imageUrl || null })

      return response.json(book)
    } catch (err) {
      return response.status(400).json(err.message)
    }
  }

  public async search(request: Request, response: Response): Promise<Response> {
    try {
      const { name } = request.params
      const findBooksService = container.resolve(FindBooksService)

      const books = await findBooksService.run(name)

      return response.json(books)
    } catch (err) {
      return response.status(400).json(err.message)
    }
  }
}
