const express = require('express');
const app = express();

const {routerUser} = require('./routers/users.js');
//definir middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));



app.use('/api/user',routerUser);//ruta padre










app.listen(3000,()=>{
    console.log('Servidor escuchando en el puerto 3000');
});