class Paper {
  constructor(x,y) {
    var options = {
      isStatic:false,
      'density':1.0,
      'friction': 0,
      'restitution':0.3
    }

    this.x = x;
    this.y = y;
    this.radius = 70;
    this.body = Bodies.circle(this.x, this.y, (this.radius-15)/2, options);
    this.image = loadImage("paper.png");
    World.add(world, this.body);
  }
  

display(){
    var pos = this.body.position;
    rectMode(CENTER);
    push()
			translate(pos.x, pos.y);
     //ellipse(0,0,this.radius,this.radius);
     imageMode(CENTER);
     image(this.image,0,0,this.radius,this.radius);
			pop();
    
}
  };