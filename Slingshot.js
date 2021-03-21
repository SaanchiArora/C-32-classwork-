class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1=loadImage("sling.jpg");
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA = body;
    }
    
    display(){

        image(this.sling1,80,160);
       

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;

            push();
            
            stroke(48,22,8);
            if(pointA.x<220)
            {
                strokeWeight(10);
            line(pointA.x-20, pointA.y, pointB.x+50, pointB.y);
            line(pointA.x-15, pointA.y, pointB.x+30, pointB.y-3);
            

            }
            else 
            {
                strokeWeight(5);
                line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x+25, pointA.y, pointB.x+30, pointB.y-3);
                image(this.sling3,pointA.x+25,pointA.y-10,20,30);
            }
            pop();

        }
    }
    
}
