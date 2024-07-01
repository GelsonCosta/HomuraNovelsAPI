
const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
  try {
    const { username, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 8);

    const user = await User.create({
      username,
      password: hashedPassword,
      role
    });

    res.status(201).send({ message: 'Usuário registrado com sucesso!' });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(404).send({ message: 'Usuário não encontrado.' });
    }

    const passwordIsValid = await bcrypt.compare(password, user.password);
    if (!passwordIsValid) {
      return res.status(401).send({ accessToken: null, message: 'Senha inválida!' });
    }

    const token = jwt.sign({ id: user.id, role: user.role }, 'secret-key', {
      expiresIn: 86400 // 24 horas
    });

    res.status(200).send({
      id: user.id,
      username: user.username,
      role: user.role,
      accessToken: token
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
