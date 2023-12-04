const client = require('./connection.js')
const express = require("express")
const app = express()
const cors = require("cors")
const PORT = 5000

app.use(cors())
app.use(express.json())

client.connect()

app.get("/api/home", (req, res)=> {
    res.json({message: "Hello from the backend. *wink *wink"})
});

app.get('/api/email-subscribers', (req, res) => {
    client.query('SELECT * FROM email_subs', (err, result) => {
        if (err) {
            console.error(err.message);
            res.status(500).json({ error: "Internal server error" });
        } else {
            res.json(result.rows);
        }
    });
});

app.post('/api/sendemail', (req, res)=> {
    const { email } = req.body;
    let insertQuery = `INSERT INTO email_subs(email_sub) 
    VALUES($1)`
    client.query(insertQuery, [email], (err, result)=>{
        if(!err){
            res.status(200).json({ message: 'Thanks! We got your little email.' });
        }
        else{ console.log(err.message) }
    })
    // client.end;
})


app.listen(PORT, ()=>{ console.log(`Running on port ${PORT}`)})