import "reflect-metadata";
import "./shared/infra/typeorm"
import "./shared/container"
import express from "express"
import booksRouter from './modules/books/infra/http/routes/books.routes'

const app = express()

app.use(express.json())
app.use('/books', booksRouter)

app.listen(5000, () => {
  console.log("App listening on port 5000 🗺")
})