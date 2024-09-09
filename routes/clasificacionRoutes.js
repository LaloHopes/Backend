const Clasificacion = require('../models/Clasificacion');
// Obtener todas las clasificaciones
module.exports = function(app) {
app.get("/clasificacion", async (req, res) => {
  try {
    const clasificaciones = await Clasificacion.findAll();
    res.json(clasificaciones);
  } catch (error) {
    console.error("Error al obtener todas las clasificaciones", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

// Crear una nueva clasificación
app.post("/clasificacion", async (req, res) => {
  try {
    const nuevaClasificacion = await Clasificacion.create(req.body);
    res.status(201).json(nuevaClasificacion);
  } catch (error) {
    console.error("Error al crear una nueva clasificación", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

// Actualizar una clasificación existente
app.put("/clasificacion/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const [rowsUpdate, [updatedClasificacion]] = await Clasificacion.update(req.body, {
      where: { id: id },
      returning: true
    });
    if (!rowsUpdate) {
      return res.status(404).json({ error: "Clasificación no encontrada" });
    }
    res.json(updatedClasificacion);
  } catch (error) {
    console.error("Error al actualizar la clasificación", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

// Eliminar una clasificación
app.delete("/clasificacion/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Clasificacion.destroy({
      where: { id: id }
    });
    if (deleted) {
      res.status(204).send(); // 204 No Content
    } else {
      return res.status(404).json({ error: "Clasificación no encontrada" });
    }
  } catch (error) {
    console.error("Error al eliminar la clasificación", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});
};