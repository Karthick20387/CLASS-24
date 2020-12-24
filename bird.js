class Bird{
    constructor(x,y){

       var options = {
           restitution:0.8,
           friction:0.3,
           density:1.0,
       }

        this.bird = Bodies.rectangle(x,y,50,50,options)
        this.width=50
        this.height=50
        World.add(world,this.bird)
    }

    display(){
        var angle = this.bird.angle
        push();
        translate(this.bird.position.x,this.bird.position.y)
        rotate(angle)
        rectMode(CENTER)
        fill("red")
        rect(0,0,this.width,this.height)
        this.bird.position.x=mouseX
        this.bird.position.y=mouseY
        pop();
    }

}