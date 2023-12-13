// Import the 'net' module to create TCP connections and constants from an external file
const net = require("net");
const { IP, PORT, NAME } = require("./constants");

// Function to establish a connection to the game server
const connect = function () {
  // Create a connection object with the specified host and port
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // Event handler when the connection is established
  conn.on(`connect`, () => {
    console.log(`Successfully connected to game server`);
    // Send the player's name to the server after connecting
    conn.write(NAME);
  })

  // Event handler for incoming data
  conn.on('data', (data) => {
    console.log(data.toString());
    // Close the connection when data is received
    conn.end();
  });

  // Set the encoding for incoming data to utf8
  conn.setEncoding("utf8");

  // Return the connection object
  return conn;
};

// Export the 'connect' function for use in other modules
module.exports = {
  connect,
};
