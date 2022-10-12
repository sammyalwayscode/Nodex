import TypedEvent from "events";
import eventLog from "./logEventTS";

const myEmitter = new TypedEvent();

myEmitter.on("log", (msg) => eventLog(msg));

setInterval(() => {
  myEmitter.emit("logs", "Logs Event Emitted");
}, 2000);
