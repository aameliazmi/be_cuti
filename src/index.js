require('dotenv').config()
const express = require('express')
const cors = require('cors')
const userRoute = require('./routes/leave')
const middlewareLogs = require('./middleware/logs')
const app = express()
const port = process.env.PORT

app.use(cors())
app.use(express.json())
app.use(middlewareLogs)

app.use("/users", userRoute);

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})