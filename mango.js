class Mango{
    constructor(x,y,radius){
        var options={
           isStatic: true,
           restitution: 0,
           friction: 1
        }

        this.x = x;
        this.y = y;
        this.radius = radius;

        this.body = Bodies.circle(this.x,this.y,this.radius,options);
        this.mangoImage = loadImage("sprites/mango.png");
        World.add(world,this.body);

      
    }

    display(){
        
      var mangopos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(mangopos.x,mangopos.y);
      rotate(angle);
      ellipseMode(CENTER);
      imageMode(CENTER);
      image(this.mangoImage,0,0,this.radius,this.radius);
      pop();

    }
}