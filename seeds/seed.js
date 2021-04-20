const sequelize = require("../config/connection");
const { User, Blogpost } = require("../model");

const userData = require("./userData.json");
const BlogpostData = require("./seedData.json");
// const { Blogpost } = require('../model');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  //   for (const Blogpost of BlogpostData) {
  //     await Blogpost.create({
  //       ...Blogpost,
  //       user_id: users[Math.floor(Math.random() * users.length)].id,
  //     });
  //   }

  process.exit(0);
};

seedDatabase();
