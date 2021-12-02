const net = require("net");
const { connect } = require("./client");

const { setupInput } = require("./input");

// establishes a connection with the game server
// const connect = function () {
//   const conn = net.createConnection({
//     host: "165.227.47.243",
//     port: 50541,
//   });

//   // interpret incoming data as text
//   conn.setEncoding("utf8");

//   conn.on("connect", () => {
//     console.log("successfully connected");
//   });
//   conn.on("close", () => {
//     console.log("disconnected");
//   });

//   return conn;
// };

// const setupInput = function () {
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding("utf8");
//   stdin.resume();
//   stdin.on("data", handleUserInput);
//   return stdin;
// };

// const handleUserInput = function (key) {
//   process.stdin.on("data", (key) => {
//     if (key === "\u0003") {
//       process.exit();
//     }
//   });
//   return key;
// };

const connection = connect();

// setupInput(connection);

console.log("Connecting ...");

// myobject.connect;

setupInput(connection);

// module.exports = (pushthisthing:)
