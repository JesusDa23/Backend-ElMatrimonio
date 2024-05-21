const express = require ('express');
const app = express();

app.get( '/', function (request ,response){
    const data = {
        message: 'Bienvendio a la web'
    }
    response.json(data)
})

app.get('/api', function (request, response){
    response.json([
        {nombre: 'nidia', genero:'femenino'},
        {nombre: 'maria', genero:'femenino'},
    ])
})

app.listen( 3000, function (){
    console.log('Servidor corriendo en el puerto 3000' );
});
