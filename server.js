const express = require("express");
const next = require('next');
const cors = require("cors");
const helmet = require("helmet");
require('dotenv').config();

const PORT = process.env.PORT || 5000;
const dev = process.env.NODE_ENV !== 'production';
const app = express();
const nextApp = next({ dev, dir: "./client" });
const handle = nextApp.getRequestHandler();

app.use(cors());
app.use(helmet());
app.use(express.json());

// Define API routes
app.use('/api/email-subscribers', require('./routes/subscribers'));
app.get("/api/home", (req, res) => {
    res.json({ message: "Hello from the backend. *wink *wink" });
});

// Prepare Next.js app
nextApp.prepare().then(() => {
    // Handle all other routes with Next.js
    app.get('*', (req, res) => {
        return handle(req, res);
    });

    app.listen(PORT, () => {
        console.log(`Running on port ${PORT}`);
    });
});


