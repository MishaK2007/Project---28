class Ground{
    constructor(x,y,w,h){
      var options={
          isStatic: true
      }

    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    
    this.body = Bodies.rectangle(x,y,200,50,options);
    World.add(world,this.body);
    }

    display(){
      
      fill(153,102,102);
      strokeWeight(3);
      rectMode(CENTER);
      rect(this.x,this.y,this.w,this.h);
     
    }
}