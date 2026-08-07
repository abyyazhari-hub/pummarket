require("dotenv").config();

module.exports = {
    STORE_NAME: process.env.STORE_NAME || "pummarket.id",
    OWNER_NAME: process.env.OWNER_NAME || "Pum",
    PREFIX: process.env.PREFIX || ".",
    OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
    PORT: process.env.PORT || 3000
};
