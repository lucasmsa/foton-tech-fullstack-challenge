import "reflect-metadata";
import "./shared/infra/typeorm"
import express from "express"

const app = express()
app.use(express.json())

app.listen(5000, () => {
  console.log("API listening on port 5000 🎺")
})