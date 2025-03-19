const { messages } = require("../data/messages");

exports.viewMessage = (req, res) => {
    const message = messages.find(message => message.id == req.params.id)
    res.render("message", { message });
};

exports.messageForm = (req, res) => {
    res.render("form");
};

exports.addMessage = (req, res) => {
    messages.push({ text: req.body.message, user: req.body.user, added: new Date(), id: Date.now() });
    res.redirect("/");
};
