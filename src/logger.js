const EventEmitter = require('events');

class Logger extends EventEmitter{
	log(message){
		console.log(message);
		// Raise an event
		this.emit("msgLogged",{id:1, value:"Test"});
	}
}
module.exports = Logger;