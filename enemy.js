class pig extends parent   {
    constructor(x,y)  {
        super(x,y,50,50)
        this.img=loadImage("enemy.png");
    }
    display()  {
        console.log(this.body.speed);
        super.display();
    }
}