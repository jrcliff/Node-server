const express = require('express')

const PORT = process.env.PORT || 3001

const app = express();

app.get("/api", (req, res) => {
    res.json({message: 'Hello from your server'})
});

app.get("/hello", (req, res) => {
    res.json({message: 'Hello World!!!!'})
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});