const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.use('/', express.static('./build'));

app.use((req, res, next) => {
	res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'DELETE,GET,PATCH,POST,PUT');
    res.append('Access-Control-Allow-Headers', 'Content-Type,Authorization');

	if (res.method == 'OPTIONS')
		res.send(200);
	else next();
})


app.post('/api/add', (req, res) => {
	console.log('add', req.body);

	const {x, y} = req.body;

	res.json({
		result: x + y
	})
})


app.post('/api/subtract', (req, res) => {
	console.log('subtract', req.body);

	const {x, y} = req.body;

	res.json({
		result: x - y
	})
})



app.listen(80, () => {
	console.log('Server has started!')
})