import fs from "fs";
import path from "path";

fs.readFile(
  path.join(__dirname, "files", "letter.txt"),
  "utf8",
  (error, data): void => {
    if (error) {
      console.log("Failed to Read File");
    } else {
      console.log("Read Sucessfull\n", data);
    }
  }
);
