const mongoose = require("mongoose");

const url = "mongodb://localhost/emiro_munoz";

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("CONECTADO A MONGO"))
  .catch((e) => console.log("El error de la conexión es: " + e));

const personaShema = mongoose.Schema(
  {
    nombre: String,
    edad: Number,
    pais: String,
  },
  { versionKey: false }
);
//hasta aqui se ha creado el esquema

const PersonaModel = mongoose.model("personas", personaShema);

//crearemos las funciones

//mostrar, esto trabaja de forma asincrona

const mostrar = async () => {
  const personas = await PersonaModel.find(); //de esta forma traera todos los resultados
  console.log(personas); //mostraremos todos los registros
};

//ahora haremos una funcion para crear registros

const crear = async () => {
  const persona = new PersonaModel({
    nombre: "MARINELLA",
    edad: 41,
    pais: "Colombia",
  });
  const resultado = await persona.save();
  console.log(resultado);
};

//crearemos la funcion de actualizar

const actualizar = async (id) => {
  const persona = await PersonaModel.updateOne(
    { _id: id },
    {
      $set: {
        nombre: "MARINELLA MODIFICADO",
      },
    }
  );
};

actualizar("636089346d0dc16366c29024");


//finalmente eliminaremos, de esta forma eliminamos algo
const eliminar = async (id) =>{
    const persona = await PersonaModel.deleteOne({_id: id})
    console.log(persona)
}

eliminar('63608a711159124539ab5256')
eliminar('636089cc6ac6baf06f244246')
eliminar('6360897b106bc5fdb7f0da4a')
eliminar('636089bffd108ad153a7d4f2')
eliminar('6360898f371598399e3d03c5')

// de esta forma hemos realizado todas las operaciones en un CRUD con node y MongoDB