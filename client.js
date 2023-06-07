const net = require('net');
const { IP, PORT } = require('./constants');

const name = process.argv[2]; //get user name from CLI

const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  conn.setEncoding('utf8');
  conn.on('connect', () => {
    console.log('Successfully connected to server.');
    conn.write(`Name: ${name || 'Nim'}`); //set user name
  });
  conn.on('data', data => {
    console.log(data);
  });

  return conn;
};

module.exports = { connect };
