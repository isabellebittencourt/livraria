const userSchema = require("../models/userSchema");

class userSchemaController{
    async store(req, res) {
        try {
          var result = await userSchema.create(req.body);
          console.log(req.body);
          res.status(201).json(result);
        } catch (error) {
          res.status(500).json(error);
        }
      }

      async get(req, res) {
        var result = await userSchema.find({});
        res.status(200).json(result);
      }
      
    
      async getById(req, res) {
        var result = await userSchema.findById(req.params.userId);
        res.status(200).json(result);
      }
}

module.exports = new userSchemaController();
