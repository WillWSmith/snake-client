// Importing movement and communication constants from an external module
const { UP, DOWN, LEFT, RIGHT, B, V, C } = require("./constants");

// Variable to store the connection object
let connection;

// Function to set up input from the user
const setupInput = function (conn) {
  // Assign the connection object passed as a parameter to the global variable
  connection = conn;

  // Set up standard input (stdin) to receive user input
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  // Event listener for data input from the user
  stdin.on("data", handleUserInput);

  // Return the stdin object for further use, although it's not used in this example
  return stdin;
};

// Function to handle user input
const handleUserInput = function (key) {
  // If the user presses ctrl+c, exit the program
  if (key === '\u0003') {
    process.exit();
  }

  // Send movement commands to the server based on user input
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

  // Send banter messages to the server based on user input
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

// Export the setupInput function for use in other modules
module.exports = {
  setupInput,
};
