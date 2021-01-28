class Rope {
    constructor(bodyA,bodyB){
        var options = {
            length: 100,
            stiffness: 0.001,
            bodyA: bodyA,
            bodyB: bodyB
        }
        this.body = Constraint.create(options);
        World.add(world,this.body)
    }
    display(){
        strokeWeight(10);
        line(this.body.bodyA.position.x,this.body.bodyA.position.y,
            this.body.bodyB.position.x,this.body.bodyB.position.y)
    }
}