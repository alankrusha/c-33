class Ball{
    constructor(x, y,radius){
        var options = {
            density : 1,
            frictionAir : 0.005
        }
        this.radius = radius;
        this.body = Bodies.circle(x, y, this.radius/2, options);
        
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(2);
        stroke("black");
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0, 0, this.radius);
        pop();
    }
}