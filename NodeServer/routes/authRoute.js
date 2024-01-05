const {Router} = require("express")
const login = require("../controller/Login");
const auth = require("../controller/auth");

const router = Router()

router.post("/login", login)
router.post("/auth", auth)

module.exports = router; 