// routes/compraRoutes.js
const Compra = require('../models/Compra');

module.exports = function(app) {
  // Obtener todas las compras
  app.get("/compras", async (req, res) => {
    try {
      const compras = await Compra.findAll();
      res.json(compras);
    } catch (error) {
      console.error("Error al obtener todas las compras", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  });

  // Crear una nueva compra
  app.post("/compras", async (req, res) => {
    try {
      const newCompra = await Compra.create(req.body);
      res.status(201).json(newCompra);
    } catch (error) {
      console.error("Error al crear una nueva compra", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  });

  // Actualizar una compra
  app.put("/compras/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const [updated] = await Compra.update(req.body, { where: { id } });
      if (!updated) {
        return res.status(404).json({ error: "Compra no encontrada" });
      }
      const updatedCompra = await Compra.findByPk(id);
      res.json(updatedCompra);
    } catch (error) {
      console.error("Error al actualizar la compra", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  });

  // Eliminar una compra
  app.delete("/compras/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Compra.destroy({ where: { id } });
      if (!deleted) {
        return res.status(404).json({ error: "Compra no encontrada" });
      }
      res.status(204).send();
    } catch (error) {
      console.error("Error al eliminar la compra", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  });
};
