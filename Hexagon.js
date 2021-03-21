class Hexagon{
    constructor(x, y,r) {
        var options = {
            isStatic:false,
            'restitution':0.5,
            'friction':1.0,
            'density':1.0,
            stiffness:0.4
        }
        this.body = Bodies.circle(x,y,r,options);
        this.r = r;
        this.width = width;
        this.height = height;
        this.image = loadImage("polygon.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos = this.body.position;

        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,20,6,60,60);
        pop();
      }
}
