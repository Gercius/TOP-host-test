const { messages } = require("../data/messages");

exports.showInfo = (req, res) => {
    res.render("index", { messages });
};
