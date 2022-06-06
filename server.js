const express = require('express');
const cors = require('cors');
const app = express();

const corsOptions = {

    origin: "http://localhost:3000"
};


app.use(cors(corsOptions));

// convirtiendo las peticiones de contenido tipo - application/x-www-form-urlencoded
app.use(express.urlencoded({extended : true}));
// convirtiendo las peticiones contenido tipo - aplication/json
app.use(express.json());

// ruta simple
app.get('/', (req, res) =>{
    res.json({ message: "My sql api"});
});

//require("./app/routes/routes.js")(app);

// seteando el puerto, por este valor escuchara las peticiones
const PORT  = process.env.PORT || 3000;
app.listen(PORT, () =>{
    console.log("Server is running on port " + PORT);
})
