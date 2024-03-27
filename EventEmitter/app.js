const { EventEmitter, errorMonitor } = require("events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// eventEmitter.on() method registers a listener.

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

// eventEmitter.emit() method registers an emitter.

myEmitter.emit("foo", "test");
myEmitter.emit("bar");

// When you use an arrow function, you don't get access to the 'this' keyword.
// When using an ordinary function, you get access to 'this' keyword.

myEmitter.on("notArrowFunc", function () {
  console.log("Not using arrow function");
  console.log(this);
});

myEmitter.emit("notArrowFunc");

// eventEmitter.once() registers a listener which will only get called
// once no matter how many times you call it's emitter.

let temp = 0;

myEmitter.once("emitOnlyOnce", () => {
  ++temp;
  console.log("temp was incremented: ", temp);
});

myEmitter.emit("emitOnlyOnce");
myEmitter.emit("emitOnlyOnce");
myEmitter.emit("emitOnlyOnce");
myEmitter.emit("emitOnlyOnce");
myEmitter.emit("emitOnlyOnce");
myEmitter.emit("emitOnlyOnce");

// Errors

myEmitter.emit("error", new Error("whoops"));

// Monitoring 'errors'

myEmitter.emit(errorMonitor, () => {
  MyMonitoringTool.log(err);
});
