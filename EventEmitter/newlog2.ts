import events from "events";
import eventLogReady from "./NewLog";

const EventEmitter = new events();

EventEmitter.on("logs", (msg) => eventLogReady(msg));

setInterval(() => {
  EventEmitter.emit("logs", "You were In Office Today");
}, 2000);
