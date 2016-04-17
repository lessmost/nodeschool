var seneca = require('seneca')();

seneca.client({ type: 'tcp' })
  .act({ role: 'math', cmd: 'sum', left: process.argv[2], right: process.argv[3] }, function (err, result) {
    if (err) {
      return console.log(err)
    }
    console.log(result);
    this.close();
  });
