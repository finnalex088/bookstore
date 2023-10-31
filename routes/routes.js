const express = require('express')

const router = express.Router()
const { createBook, findallthebooks, deletebook, bookdetails, updateBook } = require("../controllers/book")

router.post("/update/:id", updateBook)
router.post("/createBook", createBook)
router.get("/listofthebook", findallthebooks)
router.get("/deleteBook/:id", deletebook)
router.get('/singlebookdetails/:id', bookdetails)



module.exports = router

//653f8ae72e43ef49a7543df//