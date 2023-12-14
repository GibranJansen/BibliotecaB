const express = require('express');
const router = express.Router();
const UserController = require('./caminho/do/seu/userController');

// Obter todos os usuários
router.get('/getUsers', async (req, res) => {
  try {
    const users = await UserController.getUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Não foi possível recuperar os usuários' });
  }
});

// Deletar usuário por CPF
router.delete('/deleteUser/:id', async (req, res) => {
  try {
    await UserController.deleteUserById(req, res);
  } catch (error) {
    res.status(500).json({ message: 'Não foi possível remover o usuário' });
  }
});

// Obter usuário por CPF
router.get('/getUser', async (req, res) => {
  try {
    const user = await UserController.getUser(req, res);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Não foi possível recuperar o usuário no momento' });
  }
});

// Atualizar usuário
router.put('/updateUser', async (req, res) => {
  try {
    await UserController.updateUser(req, res);
  } catch (error) {
    res.status(500).json({ message: 'Não foi possível atualizar os dados do usuário' });
  }
});

// Criar usuário
router.post('/createUser', async (req, res) => {
  try {
    await UserController.createUser(req, res);
  } catch (error) {
    res.status(500).json({ message: 'Não foi possível criar o usuário' });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    await UserController.login(req, res);
  } catch (error) {
    res.status(500).json({ message: 'Não foi possível realizar o login' });
  }
});

module.exports = router;
