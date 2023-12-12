const net = require("net");
const { IP, PORT, NAME } = require("./constants");



const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.on(`connect`, () => {
    console.log(`Successfully connected to game server`);
    conn.write(NAME);
  })

  // interpret incoming data as text
  conn.on('data', (data) => {
    console.log(data.toString());
    conn.end();
  });

  conn.setEncoding("utf8");

  return conn;
};

module.exports = {
  connect,
};