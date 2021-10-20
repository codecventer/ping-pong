const Table = require("./table");
const Ball = require("./ball");

function PingPong() {
  // Create variables:
  let vert = 0;
  let hori = 3;
  let size = 8;

  // Instantiate new ball:
  let ball = new Ball();
  console.log("Initial position: ", ball.position(vert, hori));
  console.log();

  // Instantiate new table:
  let table = new Table();
  console.log(table.table(size));

  // Key press events:
  var stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.resume();
  stdin.setEncoding("utf8");
  console.log("Press arrow keys to move...");

  stdin.on("data", function (key) {
    if (key == "\u001B\u005B\u0041") {
      if (vert > 6) {
        // Out of bounds method:
        table.outOfBounds();
      } else {
        vert++;
        console.log("Moving ball up...");
        console.log();
        console.log(table.table(size));
        ball.move(vert, hori);
        console.log("New Position: ", ball.position(vert, hori));
        console.log("Press arrow keys to move...");
      }
    }
    if (key == "\u001B\u005B\u0042") {
      if (vert <= 0) {
        // Out of bounds method:
        table.outOfBounds();
      } else {
        vert--;
        console.log("Moving ball down...");
        console.log();
        console.log(table.table(size));
        ball.move(vert, hori);
        console.log("New Position: ", ball.position(vert, hori));
        console.log("Press arrow keys to move...");
      }
    }
    if (key == "\u001B\u005B\u0044") {
      if (hori <= 0) {
        // Out of bounds method:
        table.outOfBounds();
      } else {
        hori--;
        console.log("Moving ball left...");
        console.log();
        console.log(table.table(size));
        ball.move(vert, hori);
        console.log("New Position: ", ball.position(vert, hori));
        console.log("Press arrow keys to move...");
      }
    }
    if (key == "\u001B\u005B\u0043") {
      if (hori > 6) {
        // Out of bounds method:
        table.outOfBounds();
      } else {
        hori++;
        console.log("Moving ball right...");
        console.log();
        console.log(table.table(size));
        ball.move(vert, hori);
        console.log("New Position: ", ball.position(vert, hori));
        console.log("Press arrow keys to move...");
      }
    }
    if (key == "\u0003") {
      process.stdout.write("Closing game...");
      process.exit();
    }
  });
}

function Main() {
  PingPong();
}
Main();
