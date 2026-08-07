const {
    default: makeWASocket,
    useMultiFileAuthState,
    fetchLatestBaileysVersion,
    DisconnectReason
} = require("@whiskeysockets/baileys");

const { Boom } = require("@hapi/boom");
const logger = require("../lib/logger");

async function startBot() {

    const { state, saveCreds } = await useMultiFileAuthState("./auth");

    const { version } = await fetchLatestBaileysVersion();

    const sock = makeWASocket({
        version,
        auth: state,
        printQRInTerminal: true
    });

    sock.ev.on("creds.update", saveCreds);

    sock.ev.on("connection.update", ({ connection, lastDisconnect }) => {

        if (connection === "close") {

            const shouldReconnect =
                (lastDisconnect?.error instanceof Boom
                    ? lastDisconnect.error.output.statusCode
                    : 0) !== DisconnectReason.loggedOut;

            logger.info("Disconnected");

            if (shouldReconnect) {
                startBot();
            }

        } else if (connection === "open") {

            logger.info("==========================");
            logger.info("PUMMARKET BOT CONNECTED");
            logger.info("==========================");

        }

    });

}

module.exports = startBot;
