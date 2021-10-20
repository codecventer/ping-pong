class Ball {
  constructor(x, y) {
    // Properties, initial positions
    this.x = x;
    this.y = y;
  }

  // Method
  move(x, y) {
    this.x = x;
    this.y = y;
    return { x, y }; // Return JSON, not array
  }

  // Method
  position(x, y) {
    this.x = x;
    this.y = y;
    return { x, y }; // Return JSON, not array
  }
}

// Export class
module.exports = Ball;
