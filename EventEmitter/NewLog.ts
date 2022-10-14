import { format } from "date-fns";
import { v4 as uuid } from "uuid";
import fsPromises from "fs/promises";
import fs from "fs";
import path from "path";

const eventLogReady = async (message: string) => {
  const dateTime = `${format(new Date(), "dd-MM-yyyy\tHH:mm:ss")}`;
  const uniqueID = uuid();
  const detailLog = `${dateTime}\t${uniqueID}\t${message}\n\n`;
  console.log(detailLog);

  try {
    if (!fs.existsSync(path.join(__dirname, "office"))) {
      await fsPromises.mkdir(path.join(__dirname, "office"));
    }

    await fsPromises.appendFile(
      path.join(__dirname, "office", "workers.txt"),
      detailLog
    );
  } catch (error) {
    console.log("Failed to Process Data" + error);
  }
};

export default eventLogReady;
