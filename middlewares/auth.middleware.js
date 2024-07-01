const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
  let token = req.headers['authorization'];
  if (!token) {
    return res.status(403).send({ message: 'Nenhum token fornecido!' });
  }

  if (token.startsWith('Bearer ')) {
    token = token.slice(7, token.length).trimLeft();
  }

  jwt.verify(token, 'secret-key', (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: 'Não autorizado!' });
    }
    req.userId = decoded.id;
    req.userRole = decoded.role;
    next();
  });
};
