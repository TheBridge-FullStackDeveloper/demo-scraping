const express = require('express')
const app = express()
const port = ''

// Middlewares para habilitar recepción de JSONs
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Importamos las rutas


app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
