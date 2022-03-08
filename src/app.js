const Logger = require('./logger');
const logger = new Logger();

const path = require('path');
//console.log(path.parse(__filename));

/* OS Module */
const os = require('os');
var totalmemory = os.totalmem();
//console.log(totalmemory);
//console.log(`Total Memory : ${totalmemory}`);

/* file system Module */
const fs = require('fs')
const files = fs.readdirSync('./');

/*fs.readdir('./',function(err,files){
	if(err)
	console.log(err);
	else
	console.log(`Files:${files}`);
});*/

/* Events Module */

const EventEmitter = require('events');
//const emitter = new EventEmitter();
//Register a Listener
/*emitter.on('messageLogged', function(args){
	console.log(`messageLogged : Listener called : ${args}`);
})*/
/*
Using arrow funciton 

emitter.on('messageLogged', args => {
	console.log(`Listener called : ${args}`);
})*/
/*emitter.on("logging", args => {
	console.log("logging : Listener called : "+args.data);
});
*/
logger.on('msgLogged', (args) => {
	console.log("Listener called :"+ args);
});
logger.log("message");
//Emitter
/*emitter.emit("messageLogged",{id:1,url:'http://google.com'});

emitter.emit("logging",{data:"message"});*/