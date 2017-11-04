// подключение express
const express = require('express');
const bodyParser = require('body-parser');

const mainRoute = require('./src/routes/main');
const medicalsRoute = require('./src/routes/medicals');
const medicalsNewRoute = require('./src/routes/medicals-new');

// создаем объект приложения
const app = express();
app.set('view engine', 'pug');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.redirect('/main');
});

app.get('/main', mainRoute);
app.get('/medicals', medicalsRoute);
app.get('/medicals/:id', medicalsRoute);
app.post('/medicals/new', medicalsNewRoute);

app.listen(3000);

