const db = require("../../models");
const router = require("express").Router();

/**
 * User Read - All
 */
router.get("/", function(req, res) {
  console.log(db.User);
  db.User.findAll(req.query)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

/**
 * User Read - One
 */
router.get("/:id", function(req, res) {
  db.User.findAll({
    where: {
      id: req.params.id
    }
  })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

/**
 * User - Create
 * Notice how we are using the 'withPassword' scope.
 * This allows for us to modify a user's password, as defined in the User model
 */
router.post("/", function(req, res) {
  db.User.scope("withPassword")
    .create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

module.exports = router;