const express = require ('express');
const cors = require('cors')
const multer = require('multer');
const upload = multer({dest: 'uploads/'});
const app = express();

const {dbConection} = require( './config/mongo.config' ) // Importamos la configuracion de mongoose 
const PORT = process.env.PORT

// http://localhost:4000/api/products

app.post('/images/single',upload.single('imagenCafe'), (req, res)=> {
    console.log(req.file);
    res.send('Cargada...');
});

app.use( express.json() );
app.use(cors())

app.use('/api/cafe', require('./routes/cafe.routers'))
app.use('/api/servicios', require('./routes/servicios.routers'))
app.use('/api/pedidocafe', require('./routes/pedido-cafe.routes'))

dbConection(); // invoca la configuracion 

app.listen( PORT, function (){
    console.log(`Servidor corriendo en el puerto ${PORT}` );
})

