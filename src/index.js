const express = require ('express');
const cors = require('cors')
const {dbConection} = require( './config/mongo.config' ) // Importamos la configuracion de mongoose 
const PORT = process.env.PORT
const app = express();

// http://localhost:4000/api/products

app.use( express.json() );
app.use(cors())
app.use('/api/menu', require('./routes/menu.routs'))  
app.use('/api/camping', require('./routes/camping.routers'))
app.use('/api/reservas', require('./routes/reservas.routes'))
app.use('/api/pedidos', require('./routes/pedidosmenu.routes'))
app.use('/api/cliente', require('./routes/users.routes'))
app.use('/api/pedidocamping', require('./routes/pedidocamping.routes'))
app.use('/api/cafe', require('./routes/cafe.routers'))
app.use('/api/pedidocafe', require('./routes/pedido-cafe.routes'))


dbConection(); // invoca la configuracion 

app.listen( PORT, function (){
    console.log(`Servidor corriendo en el puerto ${PORT}` );
})