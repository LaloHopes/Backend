// routes/rolxpermisoRoutes.js
const RolxPermiso = require('../models/RolxPermiso');

module.exports = (app) => {
  // Obtener todos los rolxpermiso
  app.get('/rolxpermiso', async (req, res) => {
    try {
      const rolxpermisos = await RolxPermiso.findAll();
      res.json(rolxpermisos);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener rolxpermiso", error });
    }
  });

  // Crear un nuevo rolxpermiso
  app.post('/rolxpermiso', async (req, res) => {
    try {
      const nuevoRolxPermiso = await RolxPermiso.create(req.body);
      res.status(201).json(nuevoRolxPermiso);
    } catch (error) {
      res.status(400).json({ message: "Error al crear el rolxpermiso", error });
    }
  });

  // Actualizar un rolxpermiso por ID
  app.put('/rolxpermiso/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const [updated] = await RolxPermiso.update(req.body, { where: { id } });
      if (updated) {
        const updatedRolxPermiso = await RolxPermiso.findOne({ where: { id } });
        res.json(updatedRolxPermiso);
      } else {
        res.status(404).json({ message: "RolxPermiso no encontrado" });
      }
    } catch (error) {
      res.status(400).json({ message: "Error al actualizar el rolxpermiso", error });
    }
  });

  // Eliminar un rolxpermiso por ID
  app.delete('/rolxpermiso/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await RolxPermiso.destroy({ where: { id } });
      if (deleted) {
        res.status(204).json({ message: "RolxPermiso eliminado" });
      } else {
        res.status(404).json({ message: "RolxPermiso no encontrado" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error al eliminar el rolxpermiso", error });
    }
  });
};
