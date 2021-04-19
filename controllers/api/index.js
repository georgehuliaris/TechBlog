const router = require("express").Router();
const blogpostRoutes = require('./blogpostRoutes');
const userRoutes = require("./userRoutes");


router.use("/post", blogpostRoutes);
router.use("/user", userRoutes);


module.exports = router;