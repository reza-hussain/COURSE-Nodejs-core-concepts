const { Buffer } = require("buffer");

const memoryContainer = Buffer.alloc(4); // 4 bytes (32 bits)

memoryContainer[0];

// lets write data on this piece of memory allocated for us

memoryContainer[0] = 0xf4;
memoryContainer[1] = 0xe4;
memoryContainer[2] = 0xb6;
memoryContainer[3] = 0x1ff;

// console.log({ memoryContainer });
// console.log({ first: memoryContainer[0] });
// console.log({ second: memoryContainer[1] });
// console.log({ third: memoryContainer[2] });
// console.log({ fourth: memoryContainer[3] });

// memoryContainer.write* - any method that starts with write will allow us to writing something to our buffers

// to write negative number to our buffer
memoryContainer.writeInt8(-34, 2); // -34 is the number, 2 is the offset/position/index

console.log(memoryContainer[2]);
console.log(memoryContainer.readInt8(2));
