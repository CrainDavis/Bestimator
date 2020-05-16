const db = require("../../models");
const router = require("express").Router();

/**
 * Answer - Read All
 */
router.get("/", function (req, res) {
  db.Answer.findAll(req.query)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

/**
 * Answer - Read One
 */
router.get("/:id", function (req, res) {
  db.Answer.findById(req.params.id)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

/**
 * Answer - Create
 * Notice how we are also taking in the User Id! Important!
 */
router.post("/", async function (req, res) {
  var correctAnswer = await db.Question.findByPk(req.body.QuestionId).get("answer");
  var score = 100*(1-(Math.abs(req.body.user_response - correctAnswer))/correctAnswer);
  console.log(score);
  db.Answer.create({
    UserId: req.user.id,
    answer_score: score,
    ...req.body
  })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

module.exports = router;