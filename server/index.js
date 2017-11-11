// подключение express
const express = require('express');
const bodyParser = require('body-parser');

const mainRoute = require('./src/routes/main');
const medicalsRoute = require('./src/routes/medicals');

// создаем объект приложения
const app = express();
app.set('view engine', 'pug');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.redirect('/main');
});

app.use('/main', mainRoute);
app.use('/medicals', medicalsRoute);

app.listen(3000);

