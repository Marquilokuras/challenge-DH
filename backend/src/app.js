const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const db = require('./database/models/index');
const initModels = require('./database/models/init-models');
exports.models = initModels(db.sequelize);

const applicantRoute = require('./routes/applicant.route');
const professionRoute = require('./routes/profession.route');

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

app.use('/api/applicants', applicantRoute);
app.use('/api/professions', professionRoute);

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
