const express = require("express")
const app = express()
const port = 8000

app.get('/', (req, res) => {
    res.send("hello alura world!")
}) 

app.listen(port, () => {
    console.log(`listening... ${port}`)
})
