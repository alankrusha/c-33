class String{
    constructor(bodyA, pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 1.2,
            lenght : 250
        }
        this.pointB = pointB;
        this.string = Constraint.create(options)
        World.add(world, this.string);
    }
    display(){
        if(this.string.bodyA){
            var pointA  = this.string.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(5);
            stroke("black");
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop();
        }
    }
}