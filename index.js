const express = require("express")
const conn = require("./db/db")
const port = 6000
const router = require("./routes/routes")

const app = express()


app.use(express.json())
conn()
app.use("/api", router)

app.listen(port, () => {
    console.log(`server is running on the port on ${port}`)
})