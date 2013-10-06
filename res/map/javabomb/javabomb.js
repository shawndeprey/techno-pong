function map_javabomb()
{
	var self = this;
	self.name = 'javabomb';
	self.height = 2;
	self.width = 2;
	self.tileSize = 1024;
	self.ball = new Hex_Ball(1);
	self.enemy = new Entity_CPU(1);

	this.initialize = function(map)
	{
		physics.addCollisionArea('col1', 500, 1024, 565, 45); // Left
		physics.addCollisionArea('col2', 1549, 1024, 565, 45); // Right
		physics.addCollisionArea('col3', 1024, 759, 45, 1015); // Top
		physics.addCollisionArea('col4', 1024, 1289, 45, 1015); // Bottom

		// EventArea(NAME, X, Y, H, W, ACTIVE, ON_ENTER, ON_ACTION, ON_EXIT)
		map.em.addEvent('cpu_score', 1525, 1024, 485, 15, true, 'cpu_score', 'null', 'null');
		map.em.addEvent('player_score', 524, 1024, 485, 15, true, 'player_score', 'null', 'null');


		self.ball.initialize();
		world.addEntity(self.ball);
		physics.addEntity(self.ball);

		world.addEntity(self.enemy);
		physics.addEntity(self.enemy);

		var colorIntensity = 150;
		var lightSpecular = 0.75;
		var minRadius = 200;
		var maxRadius = 300;
		// Light(NAME, X, Y, R, G, B, Brightness, Radius, Shader, SpecularFactor, LightInterraction)
		map.lights.push(new Light('techno_light', 525, 850, colorIntensity, 0, 0, 80, minRadius, 1, lightSpecular, false));
		map.lights.push(new Light('techno_light', 775, 850, colorIntensity, colorIntensity, 0, 80, minRadius, 1, lightSpecular, false));
		map.lights.push(new Light('techno_light', 1025, 850, 0, 0, colorIntensity, 80, minRadius, 1, lightSpecular, false));
		map.lights.push(new Light('techno_light', 1275, 850, 0, colorIntensity, 0, 80, minRadius, 1, lightSpecular, false));
		map.lights.push(new Light('techno_light', 1525, 850, colorIntensity, 0, colorIntensity, 80, minRadius, 1, lightSpecular, false));
		map.lights.push(new Light('techno_light', 1525, 1200, colorIntensity, 0, 0, 80, minRadius, 1, lightSpecular, false));
		map.lights.push(new Light('techno_light', 1275, 1200, colorIntensity, colorIntensity, 0, 80, minRadius, 1, lightSpecular, false));
		map.lights.push(new Light('techno_light', 1025, 1200, 0, 0, colorIntensity, 80, minRadius, 1, lightSpecular, false));
		map.lights.push(new Light('techno_light', 775, 1200, 0, colorIntensity, 0, 80, minRadius, 1, lightSpecular, false));
		map.lights.push(new Light('techno_light', 525, 1200, colorIntensity, 0, colorIntensity, 80, minRadius, 1, lightSpecular, false));

		ru.addRU(function(){
			radius = 25;
			for(var i = 0; i < map.lights.length; i++){
				if(map.lights[i].name == "techno_light" || map.lights[i].name == "ball_techno_light"){
					if(clock.e % system.techno_speed == 0){
						if(map.lights[i].name == "techno_light"){
							// Techno of Lights
							// Brightness
							b = map.lights[i].brightness += ((Math.random() * 1000) - 500) * clock.delta;
							b = b > colorIntensity ? colorIntensity : b;
							b = b < 75 ? 75 : b;
							map.lights[i].setBrightness(b);
							// Radius
							r = b + minRadius / 1.5;
							r = r > maxRadius ? maxRadius : r;
							r = r < minRadius ? minRadius : r;
							map.lights[i].setRadius(Math.round(r / lighting.resolution));
							// Movement of Lights
							x = map.lights[i].worldX + ((Math.random() * 500) - 250) * clock.delta;
							y = map.lights[i].worldY + ((Math.random() * 500) - 250) * clock.delta;
							if( (x < map.lights[i].startX + radius) && (x > map.lights[i].startX - radius) ){
								map.lights[i].setX(x);
							}
							if( (y < map.lights[i].startY + radius) && (y > map.lights[i].startY - radius) ){
								map.lights[i].setY(y);
							}
						}

						// Color
						map.lights[i].r = Math.round(Math.random() * colorIntensity) + (colorIntensity / 2);
						map.lights[i].g = Math.round(Math.random() * colorIntensity) + (colorIntensity / 2);
						map.lights[i].b = Math.round(Math.random() * colorIntensity) + (colorIntensity / 2);
					}
				}
			}
		});

		/*
		map.bgm['chords'] = true;
		fx.addFXEmitter('explosion1', 500, 150, -1, 50, true, 'muteOn', 'explosion-emitter');
		world.addEntity(new Entity_NPC('test1', 1425, 310.5, 300, 0.25, 48, 128, false, 'base_idle', 'base_secondary_update'));
		PROPS.get('testprop1')(500, 180);
		map.navi.addNode('start', 250, 219, 32, 32, 0);
		map.navi.addNode('node2', 500, 219, 32, 32, 1);
		map.navi.addNode('node3', 800, 219, 32, 32, 2);
		map.navi.addNode('node4', 1200, 300, 32, 32, 3);
		map.navi.addNode('node5', 1450, 350, 32, 32, 4);
		map.checkpoint.addCheckpoint('spot2', 700, 219, 32, 32, false);
		map.checkpoint.addCheckpoint('start', 400, 219, 32, 32, true);
		*/
	}
}
MAP_STORE.add('javabomb', new map_javabomb());