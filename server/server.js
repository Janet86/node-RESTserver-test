require('./config/config.js');
// llamo al file config que contiene lo del puerto

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
// paquete que uso para obtener la info que envio usando POST

// parse application/x-www-form-urlencoded
// app.use es una function que hace que cada vez que se 
//eecute una petición siempre pase por estas líneas
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/usuario', function(req, res) {
    //res.send('Hello World') esto me da un HTML y quiero JSON
    res.json("Hola a todos")

})

app.post('/usuario', function(req, res) {

    let body = req.body;
    // guardo en body el body del parser que solicité antes

    if (body.nombre === undefined) {
        //si el usuario de mi API no envia el nombre, es decir,
        //ese atributo es undefined
        //retornar un status 400 y un obejeto para explicar
        res.status(400).json({
            ok: false,
            mensaje: "El atributo nombre es necesario q lo envíe"
        });
    } else {

        //res es como un return
        //res.send('Hello World') esto me da un HTML y quiero JSON
        //res.json("Haciendo un post a usuario")
        res.json({
            persona: body
        });
    }
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto 3000');
});
// process.env.PORT es una variable global de process