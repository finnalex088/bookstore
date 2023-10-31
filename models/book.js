const mongoose = require("mongoose")




const bookschema = new mongoose.Schema({
    title: {
        type: String,
        default: ""
    },
    author: {
        type: String,
        default: ""
    },
    summary: {
        type: String,
        default: ""
    }
})



const book = mongoose.model("book", bookschema)

module.exports = book