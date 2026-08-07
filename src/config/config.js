require("dotenv").config();

module.exports = {
  store: process.env.STORE_NAME,
  owner: process.env.OWNER_NAME,
  prefix: process.env.PREFIX,
  openai: process.env.OPENAI_API_KEY
};
