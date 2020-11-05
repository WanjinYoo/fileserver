const net = require(`net`);
const fs = require(`fs`);
const server = net.createServer();
server.on('connection', (client) => {
  client.setEncoding('utf8');
  client.write(`you are connected`);
  client.on(`data`, (msg) =>{
    fs.readFile(msg , (err, data) =>{
      console.log(msg);
      if (!err) {
        client.write(data);
      } else {
        client.write('can\'t read file');
      }
    });
  });
});

server.on('end', () => {
  console.log('client disconnected');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000!');
});