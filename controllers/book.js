const book = require("../models/book")



const createBook = async (req, res) => {
    try {
        const { title, author, summary } = req.body
        if (!title || !author || !summary) {
            await res.status(400).send({ message: "please enter all the details" })
        } else {
            const findtodb = await book.find({
                title: title
            })
            console.log(findtodb, 'thid is the value')
            if (findtodb == "") {
                const createtodb = await book.create({
                    title: title,
                    author: author,
                    summary: summary
                })
                await res.status(200).send({ message: "details are saved to the db", data: createtodb })
            } else {
                await res.status(400).send({ message: "book is already exist" })
            }
        }
    } catch (error) {
        await res.status(400).send({ message: error.message })
    }
}


const findallthebooks = async (req, res) => {
    try {
        const data = await book.find({})
        await res.status(200).send({ message: "here is the list ", data: data })

    } catch (error) {
        await res.status(400).send({ message: error.message })
    }
}


const deletebook = async (req, res) => {
    try {

        const deletebooktodb = await book.findByIdAndDelete({ _id: req.params.id })
        await res.status(200).send({ message: "book is deleted", data: deletebooktodb })
    } catch (error) {
        await res.status(400).send({ message: error })
    }
}

const bookdetails = async (req, res) => {
    try {
        const id = req.params.id
        if (!id) {
            res.status(400).send({ message: "please provide the id" })
        } else {
            const singlebookdetails = await book.findById(id)
            await res.status(200).send({ message: "here are the details of the book", data: singlebookdetails })
        }
    } catch (error) {
        await res.status(400).send({ message: error.message })
    }
}
const updateBook = async (req, res) => {
    try {
        const object = {}
        const { title, author, summary } = req.body
        if (title) {
            object['title'] = title
        }
        if (author) {
            object['author'] = author
        }
        if (summary) {
            object['summary'] = summary
        }
        const id = req.params.id
        if (!id) {
            await res.status(400).send({ message: "please provide the id" })
        } else {
            const result = await book.findByIdAndUpdate(id, { object })

            await res.status(200).send({ message: "updated successfully", data: result })
        }

    } catch (error) {
        await res.status(400).send({ message: error.message })
    }
}

module.exports = { createBook, findallthebooks, deletebook, bookdetails, updateBook }