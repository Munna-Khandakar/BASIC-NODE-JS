const EventEmitter = require("events");

// create class
class MyEmitter extends EventEmitter {}

// init object
const myEmitter = new MyEmitter();

// event listener
myEmitter.on("event", () => console.log("Event Fired..."));
myEmitter.on("event2", () => console.log("Event2 Fired..."));

// init event
myEmitter.emit("event");
myEmitter.emit("event2");
