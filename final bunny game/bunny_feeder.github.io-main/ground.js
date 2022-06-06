class Ground {
    constructor(a,b,c,d){
this.x=a
this.y=b
this.w=c
this.h=d

var ground_options={
    isStatic: true,
}


this.body=Bodies.rectangle(a,b,c,d,ground_options);
World.add(world,this.body);
    }

    display(){
rect(this.body.position.x,this.body.position.y,this.w,this.h)
    }
}