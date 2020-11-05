const net = require('net');
const stdin = process.stdin;
const conn = net.createConnection({
  host: "localhost",
  port: "3000"
});
stdin.on(`data`, (data) => {
  if (data === '\u0003') {
    conn.end();
    process.exit();
  } else conn.write(data.replace(/(\r\n|\n|\r)/gm, ""));
});
conn.on('connect', () => {
  console.log('conncected');
});
conn.on(`data`, (data)=> {
  console.log(data);
});
conn.setEncoding('utf8');
stdin.setEncoding(`utf8`);