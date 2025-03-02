const mongoose = require('mongoose');

const getConnection =async() =>{

    try {
        //const url ="mongodb+srv://raulramirez:12345@cluster0.ptdfk.mongodb.net/Contenido?retryWrites=true&w=majority&appName=Cluster0"
        const url ="mongodb+srv://santiagolopezf:nCJRX9WD9Gh4vBID@cluster0.qaeh2.mongodb.net/Contenido?retryWrites=true&w=majority&appName=Cluster0"

        await mongoose.connect(url);

        console.log("conexion exitosa");

    } catch(error){
        console.log(error);
    }
}
    module.exports = { 
        getConnection,
    }



