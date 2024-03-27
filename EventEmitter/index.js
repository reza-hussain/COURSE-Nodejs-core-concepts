const EventEmitter = require("./events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on("foo", () => {
  console.log("event named foo was called");
});

myEmitter.on("foo", (x) => {
  console.log("event named foo with params for emitted");
  console.log(x);
});

myEmitter.on("bar", () => {
  console.log("event named bar was emitted");
});

myEmitter.removeListener("bar", () => {
  console.log("event named bar was emitted");
});

myEmitter.emit("foo");
