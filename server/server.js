const express = require("express")
const app = express()
const cors = require("cors")
const PORT = 5000

app.use(cors())
app.use(express.json())

app.get("/api/home", (req, res)=> {
    res.json({message: "Hello from the backend. *wink *wink"})
})

app.post('/api/sendemail', (req, res) => {
    const { email } = req.body;
    console.log('Received email:', email);

    res.status(200).json({ message: 'Thanks! We got your little email.' });
});

app.listen(PORT, ()=>{ console.log(`Running on port ${PORT}`)})