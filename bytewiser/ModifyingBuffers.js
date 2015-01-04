process.stdin.on('data', function (buf) {
   for (var i = 0; i < buf.length; i++) {
       if (buf[i] === 46) {
           buf[i] = 33;
       }
   }
   console.log(buf);
});