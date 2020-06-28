class bin {
    constructor(width,height) {
      var options={
        isStatic:false,
        density:1.2,
        restitution:0.3
      }
      this.body=Bodies.rectangle(1000,600,width,length,options);
      this.width=width;
      this.height=height;
      this.image=loadImage("sprites/dustbingreen.png")
      World.add(world,this.body);
      
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      fill("white");
      image(this.image,1000,600,this.width,this.height)
    }
  };
  