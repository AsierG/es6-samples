class Point {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        // (x, y)
        return `(${this.x}, ${this.y})`;
    }

}

var p = new Point(25, 26);
console.log(p.toString());