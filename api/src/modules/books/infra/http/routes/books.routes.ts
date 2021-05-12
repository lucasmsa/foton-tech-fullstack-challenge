import { Router, } from 'express'
import { param, body } from 'express-validator'
import BookController from '../controller/BookController'

const booksRouter = Router()
const bookController = new BookController()

booksRouter.get('/:id', bookController.show)
booksRouter.get('/search/:name', bookController.search)
booksRouter.get('/', bookController.index)

booksRouter.post(
  '/',
  body('author')
    .isString()
    .withMessage('Name field must be a string'),
  body('description')
    .isLength({ min: 10, max: 500 })
    .withMessage('Description field must be have a length of at least 10 and at most 300'),
  body('name')
    .isString()
    .withMessage('Name field must be a string'),
  bookController.create
)


export default booksRouter