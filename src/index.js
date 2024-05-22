const express = require ('express');
const router = require('./routes/product.routes');
const app = express();

// htpp://localhost:3000/api/products
app.use('/api/products', require('./routes/product.routes'))  

app.listen( 3000, function (){
    console.log('Servidor corriendo en el puerto 3000' );
});
