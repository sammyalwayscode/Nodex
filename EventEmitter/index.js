const logEvent = require("./logEvent");
const EventEmmiter = require("events");

//Initalize Object
const myEmmiter = new EventEmmiter();

//Add Listener for log Event
myEmmiter.on("log", (msg) => logEvent(msg));

setInterval(() => {
  //Calling a Disturbance
  myEmmiter.emit("log", "Log Event Emitted ");
}, 2000);
