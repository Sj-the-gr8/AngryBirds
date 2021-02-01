var myEngine,myWorld,ground,a,b;
function setup()  {
    createCanvas(400,400);
    myEngine=Matter.Engine.create();
    myWorld=myEngine.world;
    ground=new Ground(200,390,400,20);
    b=[];
}

function draw()  {
    background(225);
    Matter.Engine.update(myEngine);
    ground.display();
    for(var i=0;i<b.length;i++)  {
        fill(b[i][1]);
        ellipse(b[i][0].position.x,b[i][0].position.y,20,20);
    }
}

function mouseDragged()  {
    a=Matter.Bodies.circle(mouseX,mouseY,10);
    Matter.World.add(myWorld,a);
    b.push([a,color(random(0,255),random(0,255),random(0,255))]);
}