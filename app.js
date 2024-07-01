const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/db.config');
const swagger = require('./swagger/swagger.config');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Rotas
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/users', require('./routes/user.routes'));
app.use('/api/webnovels', require('./routes/webnovel.routes'));
app.use('/api/chapters', require('./routes/chapter.routes'));
app.use('/api/comments', require('./routes/comment.routes'));

// Swagger
app.use('/api-docs', swagger.serve, swagger.setup);


sequelize.sync().then(() => {
  app.listen(8000, () => {
    console.log('Servidor Dançando na Porta: 8000');
    console.log('Swagger : /api-docs');
  });
}).catch((error) => {
  console.log('Tá duro:', error);
});
