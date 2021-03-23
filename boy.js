class Boy{
    constructor(x,y,w,h){

      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;

      this.boy = Bodies.rectangle(this.x,this.y,this.w,this.h);
      this.boyImage = loadImage("sprites/boy.png");
      World.add(world,this.boy);

    }
      display(){
       
        image(this.boyImage,0,0);
        rectMode(CENTER);
        rect(x,y,w,h);
    }
}