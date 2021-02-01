const e=Matter.Engine;
const w=Matter.World,b=Matter.Bodies,c=Matter.Constraint;
var myEngine,myWorld,ground,elevation,sling,box1,box2,box3,box4,box5,box6,box7,log1,log2,log3,log4,log5,bird1,pig1,pig2,pig3,bird1,thread,backg;
function setup()   {
    createCanvas(1200,800);
    myEngine=e.create();
    myWorld=myEngine.world;
    ground=new Ground(width/2,height-10,width,20);
    elevation=new Ground(150,680,200,200);
    bird1=new bird(50,700);
    sling=new slingshot(bird1.body,{x:205,y:515});
    box1=new box(650,755);
    box2=new box(750,755);
    box3=new box(850,755);
    box4=new box(950,755);
    box5=new box(700,600);
    box6=new box(800,600);
    box7=new box(900,600);
    log1=new log(700,725,100,PI/2);
    log2=new log(800,725,100,PI/2);
    log3=new log(900,725,100,PI/2);
    log4=new log(800,600,300,PI/2);
    pig1=new pig(700,695);
    pig2=new pig(800,695);
    pig3=new pig(900,695);
    /*thread=c.create({
        bodyA:  bird1.body,
        pointB:  {x:300,y:400},
        length:100,
        stiffness:0.2
    })
    w.add(myWorld,thread);*/
}

function preload()   {
    backg=loadImage("bg.png");
}

function draw()   {
    background(225);
    image(backg,0,0,width,height);
    e.update(myEngine);
    //console.log(box1.body.position.y+"\t"+log1.body.position.y+"\t"+pig2.body.position.y);
    /*console.log(bird1.body.position.x+"\t"+bird1.body.position.y+"\t"+mouseX+"\t"+mouseY+"\t"+thread.bodyA.position.x+"\t"+thread.bodyA.position.y);
    push()
    strokeWeight(4);
    stroke("red");
    line(thread.bodyA.position.x,thread.bodyA.position.y,thread.pointB.x,thread.pointB.y);
    pop();*/
    ground.display();
    elevation.display();
    bird1.display();
    sling.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    pig1.display();
    pig2.display();
    pig3.display();
}

function mouseDragged()  {
    sling.sling.stiffness=0.01;
    Matter.Body.setPosition(bird1.body,{x:mouseX,y:mouseY});
    console.log("72");
}

function mouseReleased()  {
    sling.detatch();
}

function keyPressed()  {
    if(keyCode == 32)  {
        sling.sling.bodyA=bird1.body;
    }
}