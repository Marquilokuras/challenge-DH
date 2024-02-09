const { errorHandler } = require('../utils/errorHandler');
const Profession = require('../app').models.professions;

exports.getProfessions = async (req, res, next) => {
	try {
		// Consulta todas las profesiones

		const professions = await Profession.findAll();

		if (!professions)
			throw errorHandler('An error with professions ocurred', 500, {});
		// Retorna las profesiones en formato JSON
		res.json(professions);
	} catch (err) {

		next(err);
	}
};
