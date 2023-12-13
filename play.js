// Import the 'connect' function from the "./client" module
const { connect } = require("./client");

// Import the 'setupInput' function from the "./input" module
const { setupInput } = require("./input");

// Log a message indicating the start of the connection process
console.log("Connecting ...");

// Establish a connection to the game server and store the connection object
const connection = connect();

// Set up input handling, passing the connection object to handle user input
setupInput(connection);
