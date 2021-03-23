class Tree{
    constructor(x,y,w,h){
       var options={
           isStatic: true
       }

    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    
    this.body = Bodies.rectangle(x,y,w,h,options);
    this.treeImage = loadImage("sprites/tree.png");
    World.add(world,this.body);
    
    }
        
    display(){

    image(this.treeImage,400,300);
    rectMode(CENTER);
    rect(this.x,this.y,this.w,this.h);
      
    }
}

