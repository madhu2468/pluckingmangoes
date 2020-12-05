class Stone {
  constructor(){
    var option = {isStatic : false,
                  restitution:0,
                  friction:1,
                  density:1.2
    }
this.body = Bodies.rectangle(140,390,40,40,option);
this.image = loadImage("stone.png");
Matter.Body.scale(this.body,40,40);
World.add(world,this.body);
  }

display(){

  var pos = this.body.position;

  imageMode(CENTER);
  image(this.image,pos.x,pos.y,40,40);
}
}