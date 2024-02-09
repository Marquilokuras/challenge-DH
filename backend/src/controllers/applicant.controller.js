const { errorHandler } = require('../utils/errorHandler');
const Applicant = require('../app').models.applicants;

exports.getApplicants = async (req, res) => {
	// const data = await Product.findAll({
	//   attributes: ['id', 'name', 'description'],
	//   include: ['requeriment'],
	// });
	// res.json({
	//   code: 200,
	//   count: data.length,
	//   countByCategory: countCategory(dataCategories, dataProductCategories),
	//   products: data,
	// });
	try{
		// Consulta todas los aspirantes
		const applications = await Applicant.findAll();
		
		if(!applications)
			throw errorHandler('An error with applications ocurred', 500, {})
		//Retorna los aspirantes en formato JSON
		res.json(applications);
	}catch{
		next(err);
	}
};
