class Circle {

  constructor(radius){
    this.radius = radius
  }

  get diameter() {
    return this.radius * 2
  }

  get circumference() {
    return (2 * Math.PI) * this.radius
  }

  get area() {
    return Math.PI * (this.radius * this.radius)
  }

  set diameter(number) {
    this.radius = number / 2
  }

  set circumference(number) {
    this.radius = number / (2 * Math.PI)
  }

  set area(number) {
    this.radius = Math.sqrt(number / Math.PI)
  }

}
