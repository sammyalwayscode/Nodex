const fs = require("fs");
const path = require("path");

fs.writeFile(
  path.join(__dirname, "files", "appTest.txt"),
  "Trying to Append",
  (err) => {
    if (err) {
      console.log("Failed to Write");
    } else {
      console.log("Write Complete");
    }

    fs.appendFile(
      path.join(__dirname, "files", "appTest.txt"),
      "\n\nFIle Appended, Thats File Updated, Again and again 👍",
      (err) => {
        if (err) throw err;
        console.log("Appended");
      }
    );

    fs.rename(
      path.join(__dirname, "files", "appTest.txt"),
      path.join(__dirname, "files", "newAppTest.txt"),
      (err) => {
        if (err) throw err;
        console.log("Renamed");
      }
    );
  }
);
