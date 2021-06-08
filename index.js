const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const importclubfiltered = require('./clubs.json');
const cities = require('./cities.json');
const categories = require('./categories.json');
const allteams = require('./allteams.json');
const cors = require('cors')

app.use(express.json())
app.use(cors({
    origin : '*'
}));

app.get('/club' , (req, res) => {
    res.header('Acces-Control-Allow-Origin', '*');
    res.status(200).send(`L'api fonctionne`)
});

app.get("/", (req, res) => {

    res.send("API fonctionnelle")
})

app.get('/clubsfiltered' , (req, res) =>{
    res.header('Acces-Control-Allow-Origin', '*');
    res.send(importclubfiltered)
})

app.get('/cities' , (req, res) => {
    res.header('Acces-Control-Allow-Origin', '*');
    res.send(cities)
})

app.get('/categories' , (req, res) => {
    res.header('Acces-Control-Allow-Origin', '*');
    res.send(categories)
})

app.get('/allteams', (req, res) => {
    res.header('Acces-Control-Allow-Origin', '*');
    res.send(allteams)
})

app.listen(
    PORT,
    () => console.log(`it's running on http://localhost:${PORT}`));

