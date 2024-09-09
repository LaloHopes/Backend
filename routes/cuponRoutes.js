// routes/cuponRoutes.js
const Cupon = require('../models/Cupon');

module.exports = function(app) {
  // Obtener todos los cupones
  app.get("/cupones", async (req, res) => {
    try {
      const cupones = await Cupon.findAll();
      res.json(cupones);
    } catch (error) {
      console.error("Error al obtener todos los cupones", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  });

  // Crear un nuevo cupón
  app.post("/cupones", async (req, res) => {
    try {
      const newCupon = await Cupon.create(req.body);
      res.status(201).json(newCupon);
    } catch (error) {
      console.error("Error al crear un nuevo cupón", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  });

  // Actualizar un cupón
  app.put("/cupones/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const [updated] = await Cupon.update(req.body, { where: { id } });
      if (!updated) {
        return res.status(404).json({ error: "Cupón no encontrado" });
      }
      const updatedCupon = await Cupon.findByPk(id);
      res.json(updatedCupon);
    } catch (error) {
      console.error("Error al actualizar el cupón", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  });

  // Eliminar un cupón
  app.delete("/cupones/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Cupon.destroy({ where: { id } });
      if (!deleted) {
        return res.status(404).json({ error: "Cupón no encontrado" });
      }
      res.status(204).send();
    } catch (error) {
      console.error("Error al eliminar el cupón", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  });
};
