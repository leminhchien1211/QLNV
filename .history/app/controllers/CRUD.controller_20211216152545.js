const db = require("../models");
const Staff = db.staffs;

// Create and Save a new data in GP1
exports.create = (req, res) => {
  // Validate request Name
  if (!req.body.name) {
    res.status(400).send({ message: "Name can not be empty!" });
    return;
  }

  // Create new Staff
  const _staff = new Staff({
    name: req.body.name,
    age: req.body.age,
    workplace: req.body.workplace
  });

  // Save Staff in the database
  _staff
    .save(_staff)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Staff."
      });
    });
};