
const express = require("express")
const app = express()
const cors = require("cors")
const PORT = 5000

app.use(cors())
app.use(express.json())


//DEFINE ROUTES
app.use('/api/email-subscribers', require('./routes/subscribers'))

app.get("/api/home", (req, res)=> {
    res.json({message: "Hello from the backend. *wink *wink"})
});


app.listen(PORT, ()=>{ console.log(`Running on port ${PORT}`)})