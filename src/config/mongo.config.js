const mongoose = require( 'mongoose' )

async function dbConection(){
    try {
        await mongoose.connect(  process.env.DB_URL, {})
        console.log('base de datos inicializada exitosamente');
    }
    catch(error){
        console.log(error);  // mensaje para el desarrollador
        throw new Error('Error al iniciar la base de datos');
    }
}


module.exports = {
    dbConection,

}