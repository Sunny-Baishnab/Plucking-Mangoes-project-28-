class Mango{
    constructor(x,y){
        var option={
            isStatic:true
        }
        this.body = Bodies.circle(x,y,40,option);
        this.radius = 40;
        this.image = loadImage("Images/mango.png");
        World.add(world,this.body);
    }
    display(){
        imageMode(CENTER);
        var pos = this.body.position;
        image(this.image,pos.x,pos.y,40,40);
    }
}