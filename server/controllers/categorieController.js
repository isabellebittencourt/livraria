const categorie = require('../models/categorieSchema.js');
const categorieSchema = require('../models/categorieSchema.js');

class categorieSchemaController{

    async store(req, res) {
        try {
          var result = await categorieSchema.create(req.body);
          res.status(201).json(result);
        } catch (error) {
          res.status(500).json(error);
        }
      }

      async get(req, res) {
        var result = await categorieSchema.find({});
        res.status(200).json(result);
      }
      
    
      async getById(req, res) {
        var result = await categorieSchema.findById(req.params.bookId);
        res.status(200).json(result);
      }
 }

module.exports = new categorieSchemaController();
