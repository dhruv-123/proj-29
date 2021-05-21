class Polygon
{
	constructor(x,y,width,height)
	{
		var options={
			
			restitution:0.5,
			friction:1,
			density:1.2
			}
		
		
		this.pimage=loadImage("polygon.png");
		this.body=Bodies.rectangle(x, y, width,height, options)
		this.width=width;
		this.height=height;
		World.add(world, this.body);

	}
	display()
	{
			var angle=this.body.angle;		
			push()
			translate(this.body.position.x, this.body.position.y);
		   // ellipseMode(CENTER)
			rotate(angle)
			imageMode(CENTER);
			//ellipse(0,0,40,40);
			image(this.pimage, 0,0,this.width,this.height)
			pop()
    }
	}