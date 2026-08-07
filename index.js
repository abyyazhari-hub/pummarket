require("dotenv").config();

const logger = require("./src/lib/logger");
const startBot = require("./src/whatsapp/connection");

logger.info("================================");
logger.info("PUMMARKET.ID BOT");
logger.info("================================");

startBot();
