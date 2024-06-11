const express = require ('express')
const server = express()
const dotenv = require ('dotenv')
dotenv.config()
const routerproductos = require('./src/route/index')
const PORT = process.env.PORT || 3000

server.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5501");
    next();
});

server.get('/',(req, res) =>{
    res.send('API TIENDA')
})

server.use('/api', routerproductos)

server.listen(PORT, () =>{
    console.log('servidor corriendo en http://localhost:${PORT}');
})