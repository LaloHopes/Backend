const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
require("dotenv").config();

const sequelize = require('./db'); 
const User = require('./models/User'); 
const Genero = require('./models/Genero');
const Clasificacion = require('./models/Clasificacion');
const Roles = require('./models/Roles'); 
const Pedido = require('./models/Pedido'); 
const RolxPermiso = require('./models/RolxPermiso');
const Permiso = require('./models/Permiso'); // Importa el modelo Permiso
const Movie = require('./models/Movie');
const Compra = require('./models/Compra.js');
const DetalleCompra = require('./models/DetalleCompra.js');
const Contacto = require('./models/Contacto.js');
const Cupon = require('./models/Cupon.js');
const Oferta = require('./models/Oferta'); // Agregar el modelo de Oferta


const app = express();
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Configuración de multer para manejar la subida de archivos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage });

// Endpoint para subir la imagen
app.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No se subió ningún archivo" });
  }
  res.status(200).json({ filepath: `uploads/${req.file.filename}` });
});

// Rutas CRUD para usuarios y otros modelos
require('./routes/userRoutes')(app);  
require('./routes/generoRoutes')(app);
require('./routes/clasificacionRoutes')(app);
require('./routes/rolesRoutes')(app);
require('./routes/pedidosRoutes')(app);
require('./routes/rolxpermisoRoutes')(app);
require('./routes/permisoRoutes')(app); // Importa las rutas de permisos
require('./routes/movieRoutes')(app);
require('./routes/compraRoutes')(app);
require('./routes/detalleCompraRoutes')(app); // Importar rutas de detalles de compra
require('./routes/contactoRoutes')(app); // Importar rutas de contacto
require('./routes/cuponRoutes')(app); // Importar rutas de cupones
require('./routes/ofertaRoutes')(app);  // Agregar las rutas de Oferta




// Sincronizar modelos con la base de datos y lanzar servidor
sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Servidor en funcionamiento en http://localhost:${process.env.PORT}`);
  });
}).catch((error) => {
  console.error('Error al sincronizar las tablas:', error);
});
