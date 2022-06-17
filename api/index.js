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

app.listen(3001, () => {
    console.log("Listen in Port 3001")
});

