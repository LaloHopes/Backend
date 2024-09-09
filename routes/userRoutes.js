const User = require('../models/User');

module.exports = function(app) {
  app.get("/users", async (req, res) => {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (error) {
      console.error("Error al obtener todos los usuarios", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  });

  app.post("/users", async (req, res) => {
    try {
      const newUser = await User.create(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      console.error("Error al crear un nuevo usuario", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  });

  app.put("/users/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const [updated] = await User.update(req.body, { where: { id } });
      if (!updated) {
        return res.status(404).json({ error: "Usuario no encontrado" });
      }
      const updatedUser = await User.findByPk(id);
      res.json(updatedUser);
    } catch (error) {
      console.error("Error al actualizar el usuario", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  });

  app.delete("/eliminar/users/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await User.destroy({ where: { id } });
      if (!deleted) {
        return res.status(404).json({ error: "Usuario no encontrado" });
      }
      res.status(204).send();
    } catch (error) {
      console.error("Error al eliminar el usuario", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  });
};

