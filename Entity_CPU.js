function Entity_CPU()
{
	var self = this;
	self.name = "cpu";
	self.x = 547;
	self.y = 1024;
	self.baseSpeed = 325;
	self.speed = self.baseSpeed;
	self.heading = 0;//0=up, 1=down;
	//Values for Physics
	self.height = 96;
	self.width = 16;
	self.level = 1;
	self.moving = false;
	self.lightInteraction = true;

	this.setLevel = function(LEVEL)
	{
		self.level = LEVEL;
		self.setSpeed();
	}

	this.setSpeed = function()
	{
		self.speed = self.baseSpeed + (self.level * 100);
	}

	this.setPosition = function(X, Y)
	{
		self.x = X;
		self.y = Y;
	}

  this.update = function()
  {
		// Get facking ball
		for(var i = 0; i < world.entity.length; i++){
			if(world.entity[i].name == 'ball'){
				ball = world.entity[i];
				if(Math.abs(self.x - ball.x) < 300 && ball.xHeading == 0){
					console.log(self.y + " | " + ball.y);
					self.y += (self.speed * clock.delta) * ((self.y < ball.y) ? 1 : -1);
				}
				break;
			}
		}
  }

	this.draw = function()
	{
		canvas.fillStyle = "rgb(255,0,255)";
    canvas.fillRect(h.X(self.x - self.width / 2), h.Y(self.y - self.height / 2), self.width, self.height);
	}
}