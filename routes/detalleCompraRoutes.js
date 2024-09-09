// routes/detalleCompraRoutes.js
const DetalleCompra = require('../models/DetalleCompra');

module.exports = function(app) {
  // Obtener todos los detalles de compra
  app.get("/detalle-compras", async (req, res) => {
    try {
      const detalleCompras = await DetalleCompra.findAll();
      res.json(detalleCompras);
    } catch (error) {
      console.error("Error al obtener los detalles de compra", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  });

  // Crear un nuevo detalle de compra
  app.post("/detalle-compras", async (req, res) => {
    try {
      const newDetalleCompra = await DetalleCompra.create(req.body);
      res.status(201).json(newDetalleCompra);
    } catch (error) {
      console.error("Error al crear un nuevo detalle de compra", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  });

  // Actualizar un detalle de compra
  app.put("/detalle-compras/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const [updated] = await DetalleCompra.update(req.body, { where: { id } });
      if (!updated) {
        return res.status(404).json({ error: "Detalle de compra no encontrado" });
      }
      const updatedDetalleCompra = await DetalleCompra.findByPk(id);
      res.json(updatedDetalleCompra);
    } catch (error) {
      console.error("Error al actualizar el detalle de compra", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  });

  // Eliminar un detalle de compra
  app.delete("/detalle-compras/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await DetalleCompra.destroy({ where: { id } });
      if (!deleted) {
        return res.status(404).json({ error: "Detalle de compra no encontrado" });
      }
      res.status(204).send();
    } catch (error) {
      console.error("Error al eliminar el detalle de compra", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  });
};
