// Add your Circle class here

class Circle {

  constructor(radius) {
    this.radius = radius
  }//end of constructor

  get diameter() {
        return this.radius * 2;
      } //end of diameter

  get circumference() {
        return Math.PI * (this.radius * 2);
      }//end of circumference

  get area() {
        return Math.PI * (this.radius * this.radius);
      }//end of area

  set diameter(diameter){
        this.radius = diameter / 2
      }//end of set for diameter

  set circumference(circumference){
        this.radius = circumference/(Math.PI * 2)
      }//end of set for circumference

}//end of Class
