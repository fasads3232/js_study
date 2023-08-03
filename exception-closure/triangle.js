class Triangle {
    constructor(sideA, sideB, sideC) {
      if (this.isValidTriangle(sideA, sideB, sideC)) {
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
      } else {
        throw new Error("Треугольник с такими сторонами не существует");
      }
    }
  
    isValidTriangle(a, b, c) {
      return a + b > c && a + c > b && b + c > a;
    }
  
    getPerimeter() {
      return this.sideA + this.sideB + this.sideC;
    }
  
    getArea() {
      const s = (this.sideA + this.sideB + this.sideC) / 2;
      const area = Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));
      return area.toFixed(3);
    }
  }
  
  function getTriangle(sideA, sideB, sideC) {
    try {
      return new Triangle(sideA, sideB, sideC);
    } catch (error) {
      return {
        getArea: function () {
          return "Ошибка! Треугольник не существует";
        },
        getPerimeter: function () {
          return "Ошибка! Треугольник не существует";
        }
      };
    }
  }

  console.log(getTriangle(111,2,3))