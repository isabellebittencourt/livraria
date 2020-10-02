const shoppingCart = require('../models/shoppingCart.js');

class shoppingCartSchemaController{

    async store(req, res) {
        try {
          var result = await shoppingCart.create(req.body);
          res.status(201).json(result);
        } catch (error) {
          res.status(500).json(error);
        }
      }

      async get(req, res) {
        var result = await shoppingCart.find({});
        res.status(200).json(result);
      }
      
    
      async getById(req, res) {
        var result = await shoppingCart.findById(req.params.shoppingCartId);
        res.status(200).json(result);
      }
 }

module.exports = new shoppingCartSchemaController();
