const express = require("express");
const router = express.Router();
const {
  getUsers,
  createUser,
  login,
  getUserById,
  updateProfile,
  updateAvatar,
} = require("../controllers/users");
const { Joi, Segments, celebrate } = require("celebrate");
const auth = require("../middleware/auth");

router.post(
  "/signup",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().required(),
      password: Joi.string().required(),
    }),
  }),
  createUser
);

router.post(
  "/signin",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().required(),
      password: Joi.string().required(),
    }),
  }),
  login
);

router.use(auth);

router.get("/", getUsers);
router.get("/:userId", getUserById);
router.patch("/me", updateProfile);
router.patch("/me/avatar", updateAvatar);

router.get("/users/me", getUsers);

router.patch(
  "/me",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required().min(5).max(40),
      about: Joi.string().required().min(5).max(200),
    }),
  }),
  userController.updateProfile
);
router.patch(
  "/me/avatar",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      avatar: Joi.string().required().uri(),
    }),
  }),
  userController.updateAvatar
);

module.exports = router;
