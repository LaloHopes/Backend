// routes/ofertaRoutes.js
const Oferta = require('../models/Oferta');

module.exports = function(app) {
  // Obtener todas las ofertas
  app.get("/ofertas", async (req, res) => {
    try {
      const ofertas = await Oferta.findAll();
      res.json(ofertas);
    } catch (error) {
      console.error("Error al obtener las ofertas", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  });

  // Crear una nueva oferta
  app.post("/ofertas", async (req, res) => {
    try {
      const newOferta = await Oferta.create(req.body);
      res.status(201).json(newOferta);
    } catch (error) {
      console.error("Error al crear una nueva oferta", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  });

  // Actualizar una oferta
  app.put("/ofertas/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const [updated] = await Oferta.update(req.body, { where: { id } });
      if (!updated) {
        return res.status(404).json({ error: "Oferta no encontrada" });
      }
      const updatedOferta = await Oferta.findByPk(id);
      res.json(updatedOferta);
    } catch (error) {
      console.error("Error al actualizar la oferta", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  });

  // Eliminar una oferta
  app.delete("/ofertas/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Oferta.destroy({ where: { id } });
      if (!deleted) {
        return res.status(404).json({ error: "Oferta no encontrada" });
      }
      res.status(204).send();
    } catch (error) {
      console.error("Error al eliminar la oferta", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  });
};
