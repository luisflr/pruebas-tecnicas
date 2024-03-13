//Se utilizó el patron de diseño Strategy 
abstract class Poligon {
  constructor() {}

  abstract area(): {}
}

class Square implements Poligon {
  private side: number;
  
  constructor(side: number) {
    this.side = side;
  }

  area(): number{
    return this.side * this.side
  }
}

class Triangle implements Poligon {
  private width: number;
  private height: number;
  
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height
  }

  area(): number{
    return (this.width * this.height)/2
  }
}

class Rectangle implements Poligon {
  private width: number;
  private height: number;
  
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height
  }

  area(): number{
    return this.width * this.height
  }
}

class Circle implements Poligon {
  private radio: number;
  
  constructor(radio: number) {
    this.radio = radio;
  }

  area(): string{
    return `${this.radio * this.radio}π`
  }
}

const getArea = (poligon: Poligon) =>{
  console.log(poligon.area())
}

getArea(new Circle(2))