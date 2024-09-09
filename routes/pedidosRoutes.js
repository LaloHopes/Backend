// routes/pedidoRoutes.js
const Pedido = require('../models/Pedido');

module.exports = (app) => {
  // Obtener todos los pedidos
  app.get('/pedidos', async (req, res) => {
    try {
      const pedidos = await Pedido.findAll();
      res.json(pedidos);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener los pedidos", error });
    }
  });

  // Crear un nuevo pedido
  app.post('/pedidos', async (req, res) => {
    try {
      const nuevoPedido = await Pedido.create(req.body);
      res.status(201).json(nuevoPedido);
    } catch (error) {
      res.status(400).json({ message: "Error al crear el pedido", error });
    }
  });

  // Actualizar un pedido por ID
  app.put('/pedidos/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const [updated] = await Pedido.update(req.body, { where: { id } });
      if (updated) {
        const updatedPedido = await Pedido.findOne({ where: { id } });
        res.json(updatedPedido);
      } else {
        res.status(404).json({ message: "Pedido no encontrado" });
      }
    } catch (error) {
      res.status(400).json({ message: "Error al actualizar el pedido", error });
    }
  });

  // Eliminar un pedido por ID
  app.delete('/pedidos/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Pedido.destroy({ where: { id } });
      if (deleted) {
        res.status(204).json({ message: "Pedido eliminado" });
      } else {
        res.status(404).json({ message: "Pedido no encontrado" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error al eliminar el pedido", error });
    }
  });
};
