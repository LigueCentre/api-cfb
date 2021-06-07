const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const importclubfiltered = require('./clubs.json');
const cities = require('./cities.json');
const categories = require('./categories.json');
const allteams = require('./allteams.json');

app.use(express.json())
app.use(cors());

app.get('/club' , (req, res) => {
    res.status(200).send(`L'api fonctionne`)
});

app.get("/", (req, res) => {
    res.send("API fonctionnelle")
})

app.get('/clubsfiltered' , (req, res) =>{
    res.send(importclubfiltered)
})

app.get('/cities' , (req, res) => {
    res.send(cities)
})

app.get('/categories' , (req, res) => {
    res.send(categories)
})

app.get('/allteams', (req, res) => {
    res.send(allteams)
})

app.listen(
    PORT,
    () => console.log(`it's running on http://localhost:${PORT}`));

