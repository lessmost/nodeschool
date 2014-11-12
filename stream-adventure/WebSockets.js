var ws = require("websocket-stream"),
    stream;
    
stream = ws('ws://localhost:8000');
ws.end('Hello\n');
