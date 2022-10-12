// const http = require("http");

// console.log(http);
// // const PORT = 2000;

// // const app = http.createServer((req, res) => {
// //   res.writeHead(200);
// //   res.write("Rest API");
// //   res.end();
// // });

// // app.listen(PORT, () => {
// //   console.log("Listening To Port" + PORT);
// // });

// const os = require("os");
// console.log(os.type());
// console.log(os.release());
// console.log(os.hostname());
// console.log(os.platform());
// console.log(os.cpus());
// console.log(os.networkInterfaces());
// console.log(os.userInfo());
// console.log(os.homedir());
// console.log(os.release());
// console.log(os.version());
// console.log(os.arch());

// const global = require("global");

setTimeout(() => {
  console.log("Hello There");
}, 2000);

setInterval(() => {
  console.log("This is the Interval");
  setTimeout(() => {
    console.log("Hello There");
  }, 4000);
}, 2000);
