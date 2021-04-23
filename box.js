class Box {
    constructor(x,y) {
      var options = {
          restitution : 0.8,
          friction : 1.0,
          density : 0.04
      }
      this.body = Bodies.rectangle(x,y,60, 60,options);
      this.width = 60;
      this.height = 60;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(2);
      stroke("black");
      fill("pink");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };