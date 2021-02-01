class parent  {
    constructor(x,y,w,h,a)  {
       this.width=w;
       this.height=h;
       var properties={restitution:0.8,density:1,friction:0.3};
       this.body=b.rectangle(x,y,this.width,this.height,properties);
       this.img=loadImage("base.png");
       Matter.World.add(myWorld,this.body);
    }
    display()  {
        var a=this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(a);
        imageMode(CENTER);
        image(this.img,0,0,this.width,this.height);
        pop();
    }
}