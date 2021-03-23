class Stone{
    constructor(x,y,r){
       var options={
           isStatic: false,
           restitution: 0,
           friction: 1,
           density: 1.2 
       }
      
      this.x = x;
      this.y = y;
      this.r = r;

      this.body = Bodies.circle(x,y,r/2,options);
      this.stoneImage = loadImage("sprites/stone.png");
      World.add(world,this.body);

    }

    display(){
     
        var stonepos = this.body.position;
        var angle = this.body.angle;
       push();
       translate(stonepos.x,stonepos.y);
       rotate(angle);
       ellipseMode(CENTER);
       imageMode(CENTER);
       image(this.stoneImage,0,0,this.r,this.r);
       pop();
    }
}