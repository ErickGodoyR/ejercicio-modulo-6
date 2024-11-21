// Crear un servidor con Node.js.
// El servidor debe responder a solicitudes HTTP para realizar operaciones sobre los datos.

// Crear un archivo principal llamado app.js.
// Este archivo será el punto de entrada del servidor y manejará todas las rutas necesarias.

//en un archivo de datos llamado peliculas.json, estará almacenada la información de películas.

//Implementar las siguientes funcionalidades:
//CRUD completo:

//Crear nuevas películas con datos como título, género, año y director.
//Leer los datos completos del archivo y también los de una película específica por su ID o por su título.
//Actualizar la información de una película existente, identificándola por su ID.
//Eliminar una película del archivo, también identificándola por su ID.

//La funcionalidad será probada en Postman para verificar el cumplimiento de todos los puntos.


// desarrollo
const express = require('express');
const app = express();
const PORT = 3000;
const path = './peliculas.json'
const fs = require('fs')

//funcion para leer y crear archivo json
const leerPeliculas = () => {
    if(!fs.existsSync(path)){
        fs.writeFileSync(path, JSON.stringify([]))
    }
    const data = fs.readFileSync(path, "utf-8")
    return JSON.parse(data)
};

//funcion para agregar nuevo registro
const agregarPelicula = (data) => {
    fs.writeFileSync(path, JSON.stringify(data, null, 2))
};


app.get("/peliculas", (req, res)=>{
    const peliculas = leerPeliculas()
    res.send(peliculas)
});

app.post("/peliculas", (req, res)=>{
    const peliculas = leerPeliculas()
    const nuevaPelicula = {id: usuarios.length + 1, ...req.body}

    // console.log(peliculas)
    // console.log(nuevaPelicula)
    peliculas.push(nuevaPelicula)
    agregarPelicula(peliculas)
    res.status(201).json(nuevaPelicula);
   });

app.put("/", (req, res)=>{
    res.send("bienvenido al put")
});

app.delete("/", (req, res)=>{
    res.send("bienvenido al delete")
});


app.listen(PORT, ()=>{
    console.log(`Conectado correctamente al puerto ${PORT}`)
});
