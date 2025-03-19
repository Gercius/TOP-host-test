const { Router } = require("express");
const { messageForm, addMessage, viewMessage } = require("../controllers/messageController");

const router = Router();

router.route("/new")
    .get(messageForm)
    .post(addMessage);

router.get("/:id", viewMessage)

module.exports = router;
