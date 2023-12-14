const livroModel = require('./models/livroModel');

class livroController {
  // Create
  async criarLivro(livroData) {
    try {
      const livro = new livroModel(livroData);
      const novoLivro = await livro.save();
      return novoLivro;
    } catch (error) {
      throw new Error(`Erro ao criar livro: ${error.message}`);
    }
  }

  // Read (todos os livros)
  async obterTodosLivros() {
    try {
      const livros = await livroModel.find();
      return livros;
    } catch (error) {
      throw new Error(`Erro ao obter todos os livros: ${error.message}`);
    }
  }

  // Read (um livro por ID)
  async obterLivroPorId(livroId) {
    try {
      const livro = await livroModel.findById(livroId);
      return livro;
    } catch (error) {
      throw new Error(`Erro ao obter livro por ID: ${error.message}`);
    }
  }

  // Update
  async atualizarLivro(livroId, livroData) {
    try {
      const livroAtualizado = await livroModel.findByIdAndUpdate(
        livroId,
        livroData,
        { new: true }
      );
      return livroAtualizado;
    } catch (error) {
      throw new Error(`Erro ao atualizar livro: ${error.message}`);
    }
  }

  // Delete
  async excluirLivro(livroId) {
    try {
      await livroModel.findByIdAndDelete(livroId);
    } catch (error) {
      throw new Error(`Erro ao excluir livro: ${error.message}`);
    }
  }
}

module.exports = new livroController();
