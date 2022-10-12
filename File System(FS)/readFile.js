const fs = require("fs");

fs.readFile("./files/starter.txt", "utf8", (error, data) => {
  if (error) {
    console.log("Failed to Read File" + error);
  } else {
    console.log(data);
  }
});

//Using the path method to find Our Directory

const path = require("path");

fs.readFile(
  path.join(__dirname, "files", "starter.txt"),
  "utf-8",
  (error, data) => {
    if (error) throw error;

    console.log(data);
  }
);
