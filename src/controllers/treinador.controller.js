import treinadorService from '../services/treinador.service.js';

class TreinadorController {
  async create(req, res) {
    try {
      const { nome } = req.body;

      if (!nome) {
        return res.status(400).json({ mensagem: 'O nome do treinador é obrigatório.' });
      }

      const treinador = await treinadorService.createTreinador(nome);
      return res.status(201).json(treinador);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const treinadores = await treinadorService.getAllTreinadores();
      return res.status(200).json(treinadores);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }
}

export default new TreinadorController();