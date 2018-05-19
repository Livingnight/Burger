const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const PORT = process.env.PORT || 8081;

const app = express();

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

const routes = require('./controllers/burger_controllers');

app.use(routes);

app.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`);
});
	//I am making a change to test my connection to git
