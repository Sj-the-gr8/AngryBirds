class slingshot  {
    constructor(a,b)  {
        var properties={bodyA:a,pointB:b,stiffness:1,length:10};
        this.pointB=b;
        this.sling=c.create(properties);
        Matter.World.add(myWorld,this.sling);
        console.log(this.sling);
        this.sling1=loadImage("sling1.png");
        this.sling2=loadImage("sling2.png");
        this.sling3=loadImage("sling3.png");
    }
    display()  {
        if(this.sling.bodyA != null)  {
        var a=this.sling.bodyA.position;
        var b=this.pointB;
        push();
        strokeWeight(5);
        stroke("#401D0B");
        line(a.x-20,a.y,b.x-20,b.y);
        line(a.x+20,a.y,b.x+20,b.y);
        image(this.sling3,a.x-25,a.y,10,20);
        pop();
        }
        image(this.sling1,200,500,30,80);
        image(this.sling2,180,505,30,40);
    }
    detatch()  {
        this.sling.bodyA=null;
    }
}