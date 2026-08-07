const config = require("./src/config/config");
const logger = require("./src/lib/logger");

logger.info("==================================");
logger.info("PUMMARKET.ID BOT");
logger.info("==================================");

logger.info("Store : " + config.STORE_NAME);
logger.info("Owner : " + config.OWNER_NAME);
logger.info("Bot Starting...");
