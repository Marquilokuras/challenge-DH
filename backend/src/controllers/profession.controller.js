const { errorHandler } = require('../utils/errorHandler');
const Profession = require('../app').models.professions;

exports.getProfessions = async (req, res, next) => {
	try {
		// Consulta todas las profesiones
		const profesiones = await Profession.findAll();

		if (!profesiones)
			throw errorHandler('An error with professions ocurred', 500, {});
		// Retorna las profesiones en formato JSON
		res.json(profesiones);
	} catch (error) {
		next(err);
	}
};
