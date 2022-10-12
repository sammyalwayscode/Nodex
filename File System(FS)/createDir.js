const fs = require("fs");

fs.mkdir("./newDir", (err) => {
  if (err) {
    console.log("Failed To Create Dir");
  } else {
    console.log("Directory Created");
  }
});

if (!fs.existsSync("./newest")) {
  fs.mkdir("./newest", (err) => {
    if (err) throw err;
    console.log("New Creatred");
  });
}

if (fs.existsSync("./newest")) {
  fs.rmdir("./newest", (err) => {
    if (err) throw err;
    console.log("New Removed");
  });
}
