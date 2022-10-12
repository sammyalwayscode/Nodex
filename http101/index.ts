import os from "os";

console.log(os.cpus());
let m = os.cpus();
let xx = m[0].model;
let x = xx.split(" ")[2].split("-")[0].split("")[1];

console.log(x);
