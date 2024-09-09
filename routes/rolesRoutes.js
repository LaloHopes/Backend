const Roles = require('../models/Roles'); // Asegúrate de que esta ruta sea correcta

module.exports = (app) => {
  // Obtener todos los roles
  app.get('/roles', async (req, res) => {
    try {
      const roles = await Roles.findAll();
      res.json(roles);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener los roles", error });
    }
  });

  // Crear un nuevo rol
  app.post('/roles', async (req, res) => {
    try {
      const nuevoRol = await Roles.create(req.body);
      res.status(201).json(nuevoRol);
    } catch (error) {
      res.status(400).json({ message: "Error al crear el rol", error });
    }
  });

  // Actualizar un rol por ID
  app.put('/roles/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const [updated] = await Roles.update(req.body, { where: { id } });
      if (updated) {
        const updatedRol = await Roles.findOne({ where: { id } });
        res.json(updatedRol);
      } else {
        res.status(404).json({ message: "Rol no encontrado" });
      }
    } catch (error) {
      res.status(400).json({ message: "Error al actualizar el rol", error });
    }
  });

  // Eliminar un rol por ID
  app.delete('/roles/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Roles.destroy({ where: { id } });
      if (deleted) {
        res.status(204).json({ message: "Rol eliminado" });
      } else {
        res.status(404).json({ message: "Rol no encontrado" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error al eliminar el rol", error });
    }
  });
};

