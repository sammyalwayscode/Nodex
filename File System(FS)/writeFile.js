const fs = require("fs");
const path = require("path");

fs.writeFile(
  path.join(__dirname, "files", "writing.txt"),
  "We Are Writing to The File we just Named",
  (error) => {
    if (error) {
      console.log("Failed to write file" + error);
    } else {
      console.log("Write SUcessfull");
    }
  }
);

const letterTOMili =
  "We are writing to you based on the issue of Increased Rent, We are here to tell you that we will not be paying please come and take Your House";

fs.writeFile(
  path.join(__dirname, "files", "letter.txt"),
  letterTOMili,
  (error) => {
    if (error) {
      console.log("Write Failed" + error);
    } else {
      console.log("Sucessfull Write");
    }
  }
);
