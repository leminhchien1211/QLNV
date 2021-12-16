module.exports = app => {
    const Staff = require("../controllers/CRUD.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Staff
    router.post("/create", Staff.create);
  
    // Retrieve all Staff
    router.get("/", Staff.findAll);
  
    // Retrieve a single Staff with id
    router.get("/:id", Staff.findOne);
  
    // Update a Staff with id
    //router.put("/:id", Staff.update);
  
    // Delete a Staff with id
    //router.delete("/:id", Staff.delete);
  
    // Create a new Staff
    //router.delete("/", Staff.deleteAll);
  
    app.use('/api/staffs', router);
  };