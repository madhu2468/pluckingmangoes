class Slingshot{
  constructor(bodyA, pointB){
      var options = {
          bodyA: bodyA,
          pointB:pointB,
          stiffness: 0.004,
          length: 5
      }
      this.pointB = pointB;
      this.sling = Constraint.create(options);
      World.add(world, this.sling);
  }

  release(){
    this.sling.bodyA = null;
        }

  display(){
      if(this.sling.pointA){
          var pointA = this.sling.bodyA.position;
          var pointB = this.pointB;
          strokeWeight(4);
          line(pointA.x, pointA.y,pointB.x, pointB.y);
} 
}
}