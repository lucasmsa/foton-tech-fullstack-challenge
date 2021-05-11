import { Router } from 'express'
import BookController from '../controller/BookController'

const booksRouter = Router()
const bookController = new BookController()

booksRouter.get('/:id', bookController.show)
booksRouter.get('/search/:name', bookController.search)
booksRouter.get('/', bookController.index)
booksRouter.post('/', bookController.create)

export default booksRouter