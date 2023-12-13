# Snake Client Project

Snake game is a very popular video game. It is a video game concept where the player maneuvers a dot and grows it by ‘eating’ pieces of food. As it moves and eats, it grows and the growing snake becomes an obstacle to smooth maneuvers. The goal is to grow it to become as big as possible without bumping into the side walls, or bumping into itself, upon which it dies.

This is simply a multiplayer take on the genre.

Before you can run this client, you will need to be running the server side which you can download and install from [here](https://github.com/lighthouse-labs/snek-multiplayer). 

## Getting Started

- Follow the steps inside the [snek server repo](https://github.com/lighthouse-labs/snek-multiplayer) to run the server side
  ***NOTE*** *If you would like to change your name before playing visit the constants.js file and replace "Name: WWS" with "Name: ___" With whatever three initials you would like your name to be.*
- Run the development snake client using the `node play.js` command.
- Once you are met with the "Successfully connected to game server" message you can start playing!

## Controls
Movement                    Want to banter?
W Key - Move Up          B - "Boo!"
A Key - Move Left        C - "Come get me!"
S Key - Move Down        V - "LOL!"
D Key - Move Right

You can exit the game at any time by pressing Ctrl+C.

## Troubleshooting

If you are having issues connecting to the game server you can double-check the IP and PORT being used by the server by looking at the server terminal while the server is running.

Please check that these match the IP and PORT within the constants.js file should you be having issues connecting.
