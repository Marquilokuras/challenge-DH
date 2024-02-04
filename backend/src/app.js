const express = require('express');
const morgan = require('morgan');

require('dotenv').config();

let corsOptions = {
	origin: '*',
	methods: ['OPTIONS, POST, GET, PUT, DELETE'],
};

const app = express();

app.set(process.env.PORT);
app.use(cors(corsOptions));
app.use(express.json());

app.use(morgan('dev'));

//app.use('/', mainRoute);

//app.use('/api/professions', apiProfession);
//app.use('/api/applicants', apiApplicant);

app.use(async (err, req, res, next) => {
	try {
		console.log('Error(middleware): ', err);
		const status = err.statusCode || 500;
		const message = err.message || 'Server error';
		const data = err.data || {};

		return res.status(status).json({
			message,
			data,
		});
	} catch (error) {
		console.error('Error fetching data:', error);
		return res.status(500).json({ message: 'Server error' });
	}
});

app.listen(app.get(process.env.PORT) || 8080);
