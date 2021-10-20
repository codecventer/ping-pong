class Table {
  constructor(size, area) {
    // Properties
    this.size = size;
    this.area = area;

    // Move loop to constructor:
    // for (var i = 1; i < this.size; i++) {
    //   for (var j = 1; j <= this.size; j++) {
    //     this.area = result + "-";
    //   }
    //   this.area = result + "\n";
    // }
  }

  // Method, get area ?

  // Method, out of bounds - return bool?
  outOfBounds() {
    console.log("Warning! Out of bounds, try again...");
  }

  // Method
  table(size) {
    let area = "";
    for (var i = 1; i <= size; i++) {
      for (var j = 1; j <= size; j++) {
        area = area + "-";
      }
      area = area + "\n";
    }
    return area;
  }
}

// Export class
module.exports = Table;
