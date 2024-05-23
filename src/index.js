const express = require ('express');
const app = express();

const {dbConection} = require( './config/mongo.config' ) // Importamos la configuracion de mongoose 

// htpp://localhost:3000/api/products
app.use('/api/products', require('./routes/product.routes'))  

dbConection(); // invoca la configuracion 

app.listen( 3000, function (){
    console.log('Servidor corriendo en el puerto 3000' );
});
