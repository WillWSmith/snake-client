const { IP, PORT, NAME, UP, DOWN, LEFT, RIGHT, B, V, C } = require("./constants");

let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }
  if (key === `w`) {
    connection.write(UP);
  }
  if (key === `a`) {
    connection.write(LEFT);
  }
  if (key === `s`) {
    connection.write(DOWN);
  }
  if (key === `d`) {
    connection.write(RIGHT);
  }
  //banter buttons
  if (key === `b`) {
    connection.write(B);
  }
  if (key === `v`) {
    connection.write(V);
  }
  if (key === `c`) {
    connection.write(C);
  }

};

module.exports = {
  setupInput,
}
