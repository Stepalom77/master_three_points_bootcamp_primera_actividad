require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express()

const port = process.env.PORT || 7000

//Middlewares 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.get('/', (req, res) => {
    res.send('Servidor en linea ✅');
})

app.listen(port, () => console.log(`Servidor corriendo en el puerto:${port}`))