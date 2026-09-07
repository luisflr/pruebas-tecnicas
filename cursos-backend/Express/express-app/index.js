const express = require("express"); // importamos express
const app = express(); // creamos nuestra aplicación con express

// Creamos una peticion de tipo get que retorna un mensaje de bienvenida
app.get("/", (req, res) => {
	res.send("Hola mundo, este es un servidor simple con Express!");
});

// Agregamos el puerto en donde se ejecutara nuestro servidor
app.listen(3000, () => {
	console.log("Servidor corriendo en el puerto 3000")
});