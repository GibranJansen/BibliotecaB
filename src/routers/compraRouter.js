const express = require('express');
const router = express.Router();
const CompraController = require('./controllers/compraController');

// Criar compra
router.post('/criarCompra', async (req, res) => {
  const compraData = req.body;

  try {
    const novaCompra = await CompraController.criarCompra(compraData);
    res.json(novaCompra);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obter todas as compras
router.get('/obterTodasCompras', async (req, res) => {
  try {
    const compras = await CompraController.obterTodasCompras();
    res.json(compras);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obter compra por ID
router.get('/obterCompraPorId/:compraId', async (req, res) => {
  const { compraId } = req.params;

  try {
    const compra = await CompraController.obterCompraPorId(compraId);
    res.json(compra);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Atualizar compra
router.put('/atualizarCompra/:compraId', async (req, res) => {
  const { compraId } = req.params;
  const compraData = req.body;

  try {
    const compraAtualizada = await CompraController.atualizarCompra(compraId, compraData);
    res.json(compraAtualizada);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Excluir compra
router.delete('/excluirCompra/:compraId', async (req, res) => {
  const { compraId } = req.params;

  try {
    await CompraController.excluirCompra(compraId);
    res.json({ message: 'Compra excluída com sucesso.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
