const { errorHandler } = require('../utils/errorHandler');
const Profession = require('../app').models.professions;

exports.getProfessions = async (req, res, next) => {
	try {
		// Consulta todas las profesiones
		const proffesions = await Profession.findAll();

		if (!proffesions)
			throw errorHandler('An error with professions ocurred', 500, {});
		// Retorna las profesiones en formato JSON
		res.json(proffesions);
	} catch (error) {
		next(err);
	}
};
