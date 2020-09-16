const rentBook = require("../models/bookSchema");

class rentBookController{
    async store(req, res) {
        try {
          var result = await rentBook.create(req.body);
          res.status(201).json(result);
        } catch (error) {
          res.status(500).json(error);
        }
      }

      async get(req, res) {
        var result = await rentBook.find({});
        res.status(200).json(result);
      }
    
      async getById(req, res) {
        var result = await rentBook.findById(req.params.rentId);
        res.status(200).json(result);
      }
}

module.exports = new rentBookController();
