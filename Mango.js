class Mango {

     constructor(x, y, radius){
    
     var options = {
       isStatic: true,
       restitution: 0,
       friction: 1

     };

     this.body = Bodies.circle(x, y, radius/2, options);
     this.image = loadImage("images/mango.png");
     this.r = radius;
    
     World.add(world, this.body);
    
     }

     display() {
    
     var pos = this.body.position;
     push();
     imageMode(CENTER);
     image(this.image, pos.x, pos.y, this.r*2, this.r*2);
     pop();
  
     }
}