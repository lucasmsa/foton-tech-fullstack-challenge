import { Router, } from 'express'
import { body } from 'express-validator'
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
    .isLength({ min: 1 })
    .withMessage('Field must be a valid string'),
  body('description')
    .isLength({ min: 10, max: 500 })
    .withMessage('Field must be have a length of at least 10 and at most 500'),
  body('name')
    .isString()
    .isLength({ min: 1 })
    .withMessage('Field must be a valid string'),
  bookController.create
)


export default booksRouter