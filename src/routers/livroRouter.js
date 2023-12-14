const express = require('express');
const router = express.Router();
const LivroController = require('./controllers/livroController');

// Criar livro
router.post('/criarLivro', async (req, res) => {
  const livroData = req.body;

  try {
    const novoLivro = await LivroController.criarLivro(livroData);
    res.json(novoLivro);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obter todos os livros
router.get('/obterTodosLivros', async (req, res) => {
  try {
    const livros = await LivroController.obterTodosLivros();
    res.json(livros);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obter livro por ID
router.get('/obterLivroPorId/:livroId', async (req, res) => {
  const { livroId } = req.params;

  try {
    const livro = await LivroController.obterLivroPorId(livroId);
    res.json(livro);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Atualizar livro
router.put('/atualizarLivro/:livroId', async (req, res) => {
  const { livroId } = req.params;
  const livroData = req.body;

  try {
    const livroAtualizado = await LivroController.atualizarLivro(livroId, livroData);
    res.json(livroAtualizado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Excluir livro
router.delete('/excluirLivro/:livroId', async (req, res) => {
  const { livroId } = req.params;

  try {
    await LivroController.excluirLivro(livroId);
    res.json({ message: 'Livro excluído com sucesso.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
