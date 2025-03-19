const { Router } = require("express");
const { showInfo } = require("../controllers/indexController");

const router = Router();

router.get("/", showInfo);

module.exports = router;
