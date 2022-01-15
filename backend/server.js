const express = require('express')
const cors = require('cors')
const movieRouter=require('./routes/movie')
const app = express()

app.use(express.json())

app.use("/movie",movieRouter)

app.listen(4000, "0.0.0.0", () => {
    console.log(` Server started on port 4000`)
})