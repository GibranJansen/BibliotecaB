const carrinhoModel = require('./models/carrinhoModel');

class carrinhoController {
  // Adicionar item ao carrinho
  async adicionarItem(carrinhoId, novoItem) {
    try {
      const carrinho = await carrinhoModel.findById(carrinhoId);
      carrinho.produtos.push(novoItem);
      await carrinho.save();
      return carrinho;
    } catch (error) {
      throw new Error(`Erro ao adicionar item ao carrinho: ${error.message}`);
    }
  }

  // Atualizar item no carrinho
  async atualizarItem(carrinhoId, itemId, novoItem) {
    try {
      const carrinho = await carrinhoModel.findById(carrinhoId);
      const index = carrinho.produtos.findIndex((item) => item.id === itemId);

      if (index !== -1) {
        carrinho.produtos[index] = novoItem;
        await carrinho.save();
      }

      return carrinho;
    } catch (error) {
      throw new Error(`Erro ao atualizar item no carrinho: ${error.message}`);
    }
  }

  // Remover item do carrinho
  async removerItem(carrinhoId, itemId) {
    try {
      const carrinho = await carrinhoModel.findById(carrinhoId);
      carrinho.produtos = carrinho.produtos.filter((item) => item.id !== itemId);
      await carrinho.save();
      return carrinho;
    } catch (error) {
      throw new Error(`Erro ao remover item do carrinho: ${error.message}`);
    }
  }

  // Ler todos os itens no carrinho
  async obterTodosItens(carrinhoId) {
    try {
      const carrinho = await carrinhoModel.findById(carrinhoId);
      return carrinho.produtos;
    } catch (error) {
      throw new Error(`Erro ao obter todos os itens no carrinho: ${error.message}`);
    }
  }
}

module.exports = new carrinhoController();
