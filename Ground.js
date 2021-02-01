class Ground  {
    constructor(x,y,w,h)  {
        this.body=Matter.Bodies.rectangle(x,y,w,h,{isStatic:true});
        Matter.World.add(myWorld,this.body);
        this.width=w;
        this.height=h;
    }
    display()  {
        rectMode(CENTER);
        fill("green");
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}