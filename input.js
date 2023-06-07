const CONSTANTS = require('./constants');
const MOVE_KEYS = CONSTANTS.MOVE_KEYS;
const MESSAGES = CONSTANTS.MESSAGES;

let connection;

const setupInput = (conn) => {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);

  return stdin;
};

const handleUserInput = key => {
  if (key === '\u0003') { //CTRL C quits the game
    process.exit();
  } else if (MOVE_KEYS[key]) { //handling movement
    connection.write(`Move: ${MOVE_KEYS[key]}`);
  } else if (MESSAGES[key]) { //sending messages
    connection.write(`Say: ${MESSAGES[key]}`)
  }
};

module.exports = {setupInput};