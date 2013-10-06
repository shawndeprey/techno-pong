function Hex_Ball(LEVEL)
{
	var self = this;
	self.name = "ball";
	self.x = 1024;
	self.y = 1024;
	self.level = LEVEL;
	self.baseSpeed = 300;
	self.xSpeed = self.baseSpeed;
	self.ySpeed = self.baseSpeed;
	self.xHeading = Math.round(Math.random());//0=left, 1=right;
	self.yHeading = Math.round(Math.random());//0=up, 1=down;
	//Values for Physics
	self.height = 32;
	self.width = 32;
	self.moving = false;
	self.lightInteraction = true;

	this.initialize = function()
	{
		// Light(NAME, X, Y, R, G, B, Brightness, Radius, Shader, SpecularFactor, LightInterraction)
		self.light = new Light('ball_techno_light', 525, 850, 200, 0, 0, 50, 75, 1, 1.0, false);
		map.lights.push(self.light);
	}

	this.setLevel = function(LEVEL)
	{
		self.level = LEVEL;
		self.setSpeed();
	}

	this.setSpeed = function()
	{
		self.xSpeed = self.baseSpeed + (self.level * 100);
		self.ySpeed = self.baseSpeed + (self.level * 50);
	}; self.setSpeed();

	this.setPosition = function(X, Y)
	{
		self.x = X;
		self.y = Y;
	}

	this.decreaseYSpeed = function()
	{
		self.ySpeed -= Math.round(Math.random() * 50);
	}

  this.update = function()
  {
  	if(self.collideLeft || self.collideRight || self.collideTop || self.collideBottom){
  		r = Math.round(Math.random() * 255);
			g = Math.round(Math.random() * 255);
			b = Math.round(Math.random() * 255);
			fx.addFX('explosion1', self.x, self.y, 3, 50, false, 'rgb('+r+','+g+','+b+')');
  	}

		if(self.collideLeft || self.collideRight){
			self.setSpeed();
			self.xHeading = self.collideLeft ? 1 : 0;
		}
		if(self.collideTop || self.collideBottom){
			self.decreaseYSpeed();
			self.yHeading = self.collideTop ? 1 : 0;
		}
  	self.x += (self.xSpeed * (self.xHeading == 0 ? -1 : 1)) * clock.delta;
  	self.y += (self.ySpeed * (self.yHeading == 0 ? -1 : 1)) * clock.delta;
		self.light.setX(self.x - 4);
		self.light.setY(self.y - 4);
  }

	this.draw = function()
	{
		canvas.fillStyle = "rgba(0,255,255,0.2)";
		canvas.beginPath();
		canvas.strokeStyle = "rgba(0,0,0,0.2)";
		canvas.lineWidth = 3;
    canvas.arc(h.X(self.x - self.width / 2) + 16, h.Y(self.y - self.height / 2) + 16, self.width / 2, 0, 2 * Math.PI, false);
    canvas.fill();
    canvas.stroke();
    canvas.closePath();
    //canvas.fillRect(h.X(self.x - self.width / 2), h.Y(self.y - self.height / 2), self.width, self.height);
	}
}