const { Buffer } = require("buffer");

const memory = Buffer.alloc(3);

memory[0] = 0x48;
memory[1] = 0x69;
memory[2] = 0x21;

// you can also write this as

const memoryAlloc = Buffer.from([0x48, 0x69, 0x21]);
const memoryAlloc2 = Buffer.from("486921", "hex");
const memoryAlloc3 = Buffer.from("Hi!", "utf-8");

console.log(memory.toString("utf-8"));
console.log(memoryAlloc.toString("utf-8"));
console.log(memoryAlloc2.toString("utf-8"));
console.log(memoryAlloc3.toString("utf-8"));
