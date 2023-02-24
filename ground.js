class Ground{
    constructor(x,y,w,h){
        this.x=x
        this.y=y
        this.w=w
        this.h=h
        var option={isStatic:true}
        this.body=Bodies.rectangle(x,y,w,h,option)
        World.add(world,this.body)
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rectMode(CENTER)
        strokeWeight(4)
        fill("blue")
        rect(0,0,this.w,this.h)
        pop()
    }

}