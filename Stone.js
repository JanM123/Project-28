class Stone {

     constructor(x, y, radius){
    
     var options = {
       isStatic: false,
       'density': 1.0

     };

     this.body = Bodies.circle(x, y, radius/2, options);
     this.image = loadImage("images/stone.png");
     this.r = radius;
    
     World.add(world, this.body);
    
     }

     display() {
    
     var pos = this.body.position;
     push();
     translate(pos.x, pos.y);
     imageMode(CENTER);
     image(this.image, 0, 0, this.r*2, this.r*2);
     pop();
  
     }
}