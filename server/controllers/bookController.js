const bookSchema = require('../models/bookSchema.js');

class bookSchemaController{
    async store(req, res) {
        try {
          var result = await bookSchema.create(req.body);
          res.status(201).json(result);
        } catch (error) {
          res.status(500).json(error);
        }
      }

      async get(req, res) {
        var result = await bookSchema.find({});
        res.status(200).json(result);
      }
      
    
      async getById(req, res) {
        var result = await bookSchema.findById(req.params.bookId);
        res.status(200).json(result);
      }
}

module.exports = new bookSchemaController();
