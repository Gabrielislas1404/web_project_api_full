const express = require("express");
const router = express.Router();
const {
  getUsers,
  getUserById,
  updateProfile,
  updateAvatar,
} = require("../controllers/users");
const auth = require("../middleware/auth");

router.use(auth);

router.get("/", getUsers);
router.get("/:userId", getUserById);
router.patch("/me", updateProfile);
router.patch("/me/avatar", updateAvatar);

router.get("/users/me", getUsers);

module.exports = router;
