const compraModel = require('./models/compraModel');

class compraController {
  // Create
  async criarCompra(compraData) {
    try {
      const compra = new compraModel(compraData);
      const novaCompra = await compra.save();
      return novaCompra;
    } catch (error) {
      throw new Error(`Erro ao criar compra: ${error.message}`);
    }
  }

  // Read (todas as compras)
  async obterTodasCompras() {
    try {
      const compras = await compraModel.find();
      return compras;
    } catch (error) {
      throw new Error(`Erro ao obter todas as compras: ${error.message}`);
    }
  }

  // Read (uma compra por ID)
  async obterCompraPorId(compraId) {
    try {
      const compra = await compraModel.findById(compraId);
      return compra;
    } catch (error) {
      throw new Error(`Erro ao obter compra por ID: ${error.message}`);
    }
  }

  // Update
  async atualizarCompra(compraId, compraData) {
    try {
      const compraAtualizada = await compraModel.findByIdAndUpdate(
        compraId,
        compraData,
        { new: true }
      );
      return compraAtualizada;
    } catch (error) {
      throw new Error(`Erro ao atualizar compra: ${error.message}`);
    }
  }

  // Delete
  async excluirCompra(compraId) {
    try {
      await compraModel.findByIdAndDelete(compraId);
    } catch (error) {
      throw new Error(`Erro ao excluir compra: ${error.message}`);
    }
  }
}

module.exports = new compraController();
