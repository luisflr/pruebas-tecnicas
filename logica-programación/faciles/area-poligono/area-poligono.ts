//Se utilizó el patron de diseño Strategy 
abstract class Poligon {
  constructor() {}

  abstract area(): {}
}

class Square extends Poligon {
  private side: number;
  
  constructor(side: number) {
    super()
    this.side = side;
  }

  area(): number{
    return this.side * this.side
  }
}

class Triangle extends Poligon {
  private width: number;
  private height: number;
  
  constructor(width: number, height: number) {
    super()
    this.width = width;
    this.height = height
  }

  area(): number{
    return (this.width * this.height)/2
  }
}

class Rectangle extends Poligon {
  private width: number;
  private height: number;
  
  constructor(width: number, height: number) {
    super()
    this.width = width;
    this.height = height
  }

  area(): number{
    return this.width * this.height
  }
}

class Circle extends Poligon {
  private radio: number;
  
  constructor(radio: number) {
    super()
    this.radio = radio;
  }

  area(): string{
    return `${this.radio * this.radio}π`
  }
}

const square = new Square(2)
const rectangle = new Rectangle(2,3)
const triangle = new Triangle(4,5)
const circle = new Circle(3)
console.log('The area of square is', square.area())
console.log('The area of rectangle is', rectangle.area())
console.log('The area of triangle is', triangle.area())
console.log('The area of circle is', circle.area())