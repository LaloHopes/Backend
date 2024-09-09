// routes/movieRoutes.js
const Movie = require('../models/Movie');

module.exports = function(app) {
  // Obtener todas las películas
  app.get("/movies", async (req, res) => {
    try {
      const movies = await Movie.findAll();
      res.json(movies);
    } catch (error) {
      console.error("Error al obtener todas las películas", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  });

  // Crear una nueva película
  app.post("/movies", async (req, res) => {
    try {
      const newMovie = await Movie.create(req.body);
      res.status(201).json(newMovie);
    } catch (error) {
      console.error("Error al crear una nueva película", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  });

  // Actualizar una película
  app.put("/movies/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const [updated] = await Movie.update(req.body, { where: { id } });
      if (!updated) {
        return res.status(404).json({ error: "Película no encontrada" });
      }
      const updatedMovie = await Movie.findByPk(id);
      res.json(updatedMovie);
    } catch (error) {
      console.error("Error al actualizar la película", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  });

  // Eliminar una película
  app.delete("/movies/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Movie.destroy({ where: { id } });
      if (!deleted) {
        return res.status(404).json({ error: "Película no encontrada" });
      }
      res.status(204).send();
    } catch (error) {
      console.error("Error al eliminar la película", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  });
};
