const {Router} = require("express")
const router = Router()

router.get('/', (req, res) => {
    res.send("hello alura world!")
}) 

router.post('/', (req, res) => {
    res.send('requisição do tipo POST')
})

router.patch('/', (req, res) => {
    res.send('requisição do tipo PATCH')
})

router.delete('/', (req, res) => {
    res.send('requisição do tipo DELETE')
})

module.exports = router