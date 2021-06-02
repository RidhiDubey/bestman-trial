class Drop{
    constructor(x,y){
        var options={
            'restitution':0.5,
            'density':0.3,
            }
            
        this.body=Bodies.circle(x,y,10,options);
        this.radius=10;
        World.add(world,this.body);
    }
    
    display(){
        var pos=this.body.position;
        fill("blue");
       
        
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.radius,this.radius);
        
        
        
    }

    update(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,1000),y:random(0,1000)})
        }
    }
}