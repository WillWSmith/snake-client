const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "172.20.114.119",
    port: "50541",
  });

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