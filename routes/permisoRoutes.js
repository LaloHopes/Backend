// routes/permisoRoutes.js
const Permiso = require('../models/Permiso');

module.exports = (app) => {
  // Obtener todos los permisos
  app.get('/permisos', async (req, res) => {
    try {
      const permisos = await Permiso.findAll();
      res.json(permisos);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener permisos", error });
    }
  });

  // Crear un nuevo permiso
  app.post('/permisos', async (req, res) => {
    try {
      const nuevoPermiso = await Permiso.create(req.body);
      res.status(201).json(nuevoPermiso);
    } catch (error) {
      res.status(400).json({ message: "Error al crear el permiso", error });
    }
  });

  // Actualizar un permiso por ID
  app.put('/permisos/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const [updated] = await Permiso.update(req.body, { where: { id } });
      if (updated) {
        const updatedPermiso = await Permiso.findOne({ where: { id } });
        res.json(updatedPermiso);
      } else {
        res.status(404).json({ message: "Permiso no encontrado" });
      }
    } catch (error) {
      res.status(400).json({ message: "Error al actualizar el permiso", error });
    }
  });

  // Eliminar un permiso por ID
  app.delete('/permisos/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Permiso.destroy({ where: { id } });
      if (deleted) {
        res.status(204).json({ message: "Permiso eliminado" });
      } else {
        res.status(404).json({ message: "Permiso no encontrado" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error al eliminar el permiso", error });
    }
  });
};
