
const express = require("express")
const app = express()
const cors = require("cors")
const path = require ('path')
require('dotenv').config()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())


//DEFINE ROUTES
app.use('/api/email-subscribers', require('./routes/subscribers'))

app.get("/api/home", (req, res)=> {
    res.json({message: "Hello from the backend. *wink *wink"})
});

//SERVE STATIC ASSETS IN PRODUCTION?
if(process.env.NODE_ENV === 'production'){

    app.use(express.static('client/build'))

    app.get('*', (req, res) => {  
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')) //
    })
}


app.listen(PORT, ()=>{ console.log(`Running on port ${PORT}`)})