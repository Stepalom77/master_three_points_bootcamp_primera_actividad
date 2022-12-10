require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 2000;
const mongoUrl = process.env.ME_CONFIG_MONGODB_URL || 'mongodb://root:example@mongodb'

//Middlewares 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

mongoose.connect(
  mongoUrl, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

//Routes
const lenguajesRoutes = require('./server/routes/lenguajesRoutes')
app.use('/api/v1', lenguajesRoutes);

app.get('/', (req, res) => {
    res.send('Servidor en linea ✅');
  })

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto:${PORT}`))