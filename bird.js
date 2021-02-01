class bird /*extends parent*/   {
    constructor(x,y)   {
        //super(x,y,50,50);
        this.width=50;
        this.height=50;
        var properties={restitution:0.8,density:1,friction:0.3};
        this.body=b.rectangle(x,y,this.width,this.height,properties);
        Matter.World.add(myWorld,this.body);
        this.img=loadImage("bird.png");
    }
    display()   {
        //this.body.position.x=mouseX;
        //this.body.position.y=mouseY;
        var a=this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(a);
        imageMode(CENTER);
        image(this.img,0,0,this.width,this.height);
        pop();
        //super.display();
    }
}