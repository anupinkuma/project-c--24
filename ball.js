class Ball{
    constructor(x,y,r){
       var option={resitution:0.4,friction:1,density:1} 
       this.body=Bodies.circle(x,y,r,option)
       this.r=r
       World.add(world,this.body);
    }


display(){
    var p=this.body.position
    push();
    translate(p.x,p.y)
    rotate(this.body.angle)
    ellipseMode(CENTER)
    fill("maroon")
    ellipse(0,0,this.r*2,this.r*2)
    pop();
}
}