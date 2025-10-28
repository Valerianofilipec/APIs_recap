import "dotenv/config"
import express from "express"

const app = express()
const port = process.env.SERVER_PORT || 8080

app.get('/health', (req, res) => {
  res.status(200).send('OK')
})

app.listen(port, () => {
  console.log(`REST API listening on port: ${port}`)
})
