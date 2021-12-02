const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("successfully connected");
    conn.write("Name: AFIF");

    setTimeout(() => {
      conn.write("wassup");
    }, 3000);
    setTimeout(() => {
      conn.write("HELLO TESTING");
    }, 2000);

    setTimeout(() => {
      conn.write("final test BYE");
    }, 3000);

    conn.on("close", () => {
      console.log("disconnected");
    });
  });
  return conn;
};

module.exports = { connect };
