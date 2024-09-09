// routes/contactoRoutes.js
const Contacto = require('../models/Contacto');

module.exports = function(app) {
  // Obtener todos los contactos
  app.get("/contactos", async (req, res) => {
    try {
      const contactos = await Contacto.findAll();
      res.json(contactos);
    } catch (error) {
      console.error("Error al obtener todos los contactos", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  });

  // Crear un nuevo contacto
  app.post("/contactos", async (req, res) => {
    try {
      const newContacto = await Contacto.create(req.body);
      res.status(201).json(newContacto);
    } catch (error) {
      console.error("Error al crear un nuevo contacto", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  });

  // Actualizar un contacto
  app.put("/contactos/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const [updated] = await Contacto.update(req.body, { where: { id } });
      if (!updated) {
        return res.status(404).json({ error: "Contacto no encontrado" });
      }
      const updatedContacto = await Contacto.findByPk(id);
      res.json(updatedContacto);
    } catch (error) {
      console.error("Error al actualizar el contacto", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  });

  // Eliminar un contacto
  app.delete("/contactos/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Contacto.destroy({ where: { id } });
      if (!deleted) {
        return res.status(404).json({ error: "Contacto no encontrado" });
      }
      res.status(204).send();
    } catch (error) {
      console.error("Error al eliminar el contacto", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  });
};
