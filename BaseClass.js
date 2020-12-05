class BaseClass{
  constructor(x,y,width,height){
    var options = {
      isStatic:true,
      restitution:0,
      friction:1,
      density:1.2
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
        this.image = ("base.png");
        this.width = width;
        this.height = height;
        World.add(world,this.image);
  }
display(){
var pos = this.body.position;

push();
translate(pos.x,pos.y);
imageMode(CENTER);
image(this.image,0,0,this.width,this.height);
pop();
}
}