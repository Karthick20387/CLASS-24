class Log{
    constructor(x,y,height,angle){

       var options = {
           friction:1.0,
           restitution:0.8,
           density:1.0
       }

        this.log=Bodies.rectangle(x,y,20,height,options)
        Matter.Body.setAngle(this.log,angle)
        this.width=20
        this.height=height
        World.add(world,this.log)
    }

    display(){
        var angle = this.log.angle
        push();
        translate(this.log.position.x,this.log.position.y)
        rotate(angle)
        rectMode(CENTER)
        fill("brown")
        rect(0,0,this.width,this.height)
        pop();
    }

}