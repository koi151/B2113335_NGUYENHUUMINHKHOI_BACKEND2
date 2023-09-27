const ApiError = require("../api-error");
const ContactService = require("../services/contact.service");

exports.create= (req, res) => {
  res.send({message: 'create handler'});
};

exports.findAll= (req, res) => {
  res.send({message: 'findAll handler'});
};

exports.findOne= (req, res) => {
  res.send({message: 'findOne handler'});
};

exports.update= (req, res) => {
  res.send({message: 'update handler'});
};

exports.delete= (req, res) => {
  res.send({message: 'delete handler'});
};

exports.deleteAll= (req, res) => {
  res.send({message: 'deleteAll handler'});
};
exports.findAllFavorite= (req, res) => {
  res.send({message: 'findAllFavorite handler'});
};

// exports.create = async (req, res, next) => {
//   if (!req.body?.name) {
//     return next(new ApiError(400, 'Name can not be empty'));
//   } 

//   try {
//     const contactServices = new ContactService(MongoDB.client);
//     const document = await ContactService.create(req.body);
//     return res.send(document);
//   } catch (error) {
//     return next(
//       new ApiError(500, 'An error occurred while creating the contact')
//     );
//   }
// };