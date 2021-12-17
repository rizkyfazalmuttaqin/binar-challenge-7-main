const { Game } = require("../models");
module.exports = {
  index: async (req, res) =>
    await Game.findAll({
      order: [["updatedAt", "DESC"]],
      limit: 10,
    }).then((game) =>
      res.status(200).render("roomHistory", {
        title: "Rooms History",
        style: "dashboard",
        game,
        name: req.query.user,
      })
    ),
};
