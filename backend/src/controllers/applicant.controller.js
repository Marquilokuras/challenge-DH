const { errorHandler } = require('../utils/errorHandler');
const Applicant = require('../app').models.applicants;
const Profession = require('../app').models.professions;
const Applicant_Profession = require('../app').models.applicants_professions;

exports.getApplicants = async (req, res, next) => {
	try {
		// Consulta todas los aspirantes con las profesiones asociadas
		const applicants = await Applicant.findAll({
			include: [
				{
					model: Profession,
					as: 'professions', // alias para la relación
					through: {
						model: Applicant_Profession,
						attributes: [], // Evitar traer todos los campos de la tabla intermedia
					},
				},
			],
		});

		if (!applicants)
			throw errorHandler('An error with applicants ocurred', 500, {});

		//Retorna los aspirantes en formato JSON
		res.json(applicants);
	} catch (err) {
		next(err);
	}
};
