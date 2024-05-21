const express = require ('express');
const app = express();

app.get( '/', function (request ,response){
    const homePage = `<h1>Home Page</h1>
    <p>Esta es la Pagina de inicio de la tienda virtual</p>`
    response.send( homePage )
})

app.get('/contactenos', function (request, response){
    response.send(`<h1>Contact page</h1><form>
        <input />
        <button>Send</button>
    </form>`)
})

app.listen( 3000, function (){
    console.log('Servidor corriendo en el puerto 3000' );
});
