const Genero = require('../models/Genero'); // Asegúrate de importar correctamente el modelo

// Obtener todos los géneros
module.exports = (app) =>{
app.get("/genero", async (req, res) => {
  try {
    const genero = await Genero.findAll();
    res.json(genero);
  } catch (error) {
    console.error("Error al obtener todos los géneros", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

// Crear un nuevo género
app.post("/genero", async (req, res) => {
  try {
    const newGenero = await Genero.create(req.body);
    res.status(201).json(newGenero);
  } catch (error) {
    console.error("Error al crear un nuevo género", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

// Actualizar un género existente
app.put("/genero/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedGenero = await Genero.update(req.body, {
      where: { id: id },
      returning: true, // Esta opción no está soportada en todos los dialectos
    });
    if (!updatedGenero) {
      return res.status(404).json({ error: "Género no encontrado" });
    }
    res.json(updatedGenero);
  } catch (error) {
    console.error("Error al actualizar el género", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

// Eliminar un género
app.delete("/genero/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedGenero = await Genero.destroy({
      where: { id: id }
    });
    if (!deletedGenero) {
      return res.status(404).json({ error: "Género no encontrado" });
    }
    res.status(204).send();
  } catch (error) {
    console.error("Error al eliminar el género", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});
};
