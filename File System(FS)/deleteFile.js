const fs = require("fs");
const path = require("path");

fs.unlink(path.join(__dirname, "files", "starter.txt"), (err) => {
  if (err) throw err;
  console.log("File Deleted");
});
