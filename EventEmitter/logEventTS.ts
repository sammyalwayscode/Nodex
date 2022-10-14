import fs from "fs";
import fsPromises from "fs/promises";
import path from "path";
import { format } from "date-fns";
import { v4 as uuid } from "uuid";

// import event from "events";

// const myEmitter = new event();
// console.log(myEmitter);

const eventLog = async (message: any) => {
  const dateTime = `${format(new Date(), "yyyy-MM-dd\tHH:mm:ss")}`;
  const logMessage = `${dateTime}\t${uuid()}\t${message}`;
  console.log(logMessage);

  try {
    if (!fs.existsSync(path.join(__dirname, "logs"))) {
      await fsPromises.mkdir(path.join(__dirname, "logs"));
    }

    await fsPromises.appendFile(
      path.join(__dirname, "logs", "eventLogs.txt"),
      message
    );
  } catch (error) {
    console.log(error);
  }
};

// myEmitter.on("logs", (msg) => eventLog(msg));

// myEmitter.emit("logs", "Logs Event Emitted");

// setInterval(() => {
//   myEmitter.emit("logs", "Logs Event Emitted");
// }, 2000);

export default eventLog;
