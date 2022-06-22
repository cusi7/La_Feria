const express = require ('express');
const cors = require ('cors');
const dotenv = require ('dotenv');
const DB = require ('./db.js');
const routes = require('./Routes/index.js');

const app = express();

dotenv.config();

DB();

//CORS
app.use(cors());

//MIDDLEWARES
app.use(express.json());

app.use('/', routes);

app.listen(3001, () => {
    console.log("Listen in Port 3001")
});

