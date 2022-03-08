/**
 * 
 */

const EventEmitter = require('events');
const emitter = new EventEmitter();

const Logger = require("./logger");
const logger = new Logger();
logger.on("msgLogged",(args) => {
	console.log("listener called :"+args.id+ args.value);
});
logger.log("message");