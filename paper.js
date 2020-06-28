class paper {
    constructor(x, y,width,height) {
      var options={
        isStatic:false,
        density:1.2,
        restitution:0.3
      }
      this.body=Bodies.rectangle(x,y,width,height,options);
      this.width=width;
      this.height=height;
      this.image=loadImage("sprites/paper.png")
      World.add(world,this.body);
      
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      imageMode(CENTER);
      fill("white");
      image(this.image,0,0,this.width,this.height)
      pop();
    }
  };
  