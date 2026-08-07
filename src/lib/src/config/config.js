require("dotenv").config();

module.exports = {
  store: process.env.STORE_NAME || "pummarket.id",
  owner: process.env.OWNER_NAME || "Abi",
  prefix: process.env.PREFIX || ".",
  openai: process.env.OPENAI_API_KEY || "",
  port: process.env.PORT || 3000
};
