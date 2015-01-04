var int = parseInt(process.argv[2], 10);
var u32view = new Uint32Array(1);
u32view[0] = int;
var u16view = new Uint16Array(u32view.buffer);
console.log(JSON.stringify(u16view));