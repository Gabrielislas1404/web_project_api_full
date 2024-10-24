const express = require("express");
const router = express.Router();
const {
  getUsers,
  createUser,
  login,
  getUserById,
  updateProfile,
  updateAvatar,
  newUser,
} = require("../controllers/users");
const { Joi, Segments, celebrate } = require("celebrate");
const auth = require("../middleware/auth");
router.get("/crash-test", () => {
  setTimeout(() => {
    throw new Error("El servidor va a caer");
  }, 0);
});

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

router.get("/users", getUsers);
router.get("/users/me", getUserById);
router.post("/users", newUser);

router.patch(
  "/users/me",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required().min(5).max(40),
      about: Joi.string().required().min(5).max(200),
    }),
  }),
  updateProfile
);
router.patch(
  "/users/me/avatar",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      avatar: Joi.string().required().uri(),
    }),
  }),
  updateAvatar
);

module.exports = router;
