const express = require ('express');
const cors = require ('cors');
const dotenv = require ('dotenv');
const DB = require ('./db.js');

const app = express();

dotenv.config();

DB();

//CORS
app.use(cors());

//MIDDLEWARES
app.use(express.json());

app.get('/', (req, res) => {
    res.send('HOLA!!')
});

app.get('/home', (req, res) => {
    res.send('<h1>Ahora estoy en /home</h1>');
})

app.get('/json', (req, res) => {
    let cusi = {nombre: 'Griselda', apellido : 'Juarez'};
    res.json(cusi)
})

app.listen(3001, () => {
    console.log("Listen in Port 3001")
});

