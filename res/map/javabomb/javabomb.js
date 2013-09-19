function map_javabomb()
{
	var self = this;
	self.name = 'javabomb';
	self.height = 2;
	self.width = 2;
	self.tileSize = 1024;

	this.initialize = function(map)
	{
		physics.addCollisionArea('col1', 525, 1024, 485, 15);
		physics.addCollisionArea('col2', 1524, 1024, 485, 15);
		physics.addCollisionArea('col3', 1024, 774, 15, 1015);
		physics.addCollisionArea('col4', 1024, 1274, 15, 1015);

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
		/*map.lights.push(new Light('techno_light', 1000, 225, colorIntensity, 0, 0, 80, 250, 1, lightSpecular, false));
		map.lights.push(new Light('techno_light', 750, 225, colorIntensity, colorIntensity, 0, 80, 250, 1, lightSpecular, false));
		map.lights.push(new Light('techno_light', 500, 225, 0, 0, colorIntensity, 80, 250, 1, lightSpecular, false));
		map.lights.push(new Light('techno_light', 250, 225, 0, colorIntensity, 0, 80, 250, 1, lightSpecular, false));
		map.lights.push(new Light('techno_light', 0, 225, colorIntensity, 0, colorIntensity, 80, 250, 1, lightSpecular, false));*/

		ru.addRU(function(){
			radius = 25;
			for(var i = 0; i < map.lights.length; i++){
				if(map.lights[i].name == "techno_light"){
					if(clock.e % 2 == 0){
						// Techno of Lights
						// Brightness
						b = map.lights[i].brightness += ((Math.random() * 1000) - 500) * clock.delta;
						b = b > 200 ? 200 : b;
						b = b < 75 ? 75 : b;
						map.lights[i].setBrightness(b);
						// Radius
						r = b + minRadius / 1.5;
						r = r > maxRadius ? maxRadius : r;
						r = r < minRadius ? minRadius : r;
						map.lights[i].setRadius(Math.round(r / lighting.resolution));
						// Color
						map.lights[i].r = Math.round(Math.random() * colorIntensity) + (colorIntensity / 2);
						map.lights[i].g = Math.round(Math.random() * colorIntensity) + (colorIntensity / 2);
						map.lights[i].b = Math.round(Math.random() * colorIntensity) + (colorIntensity / 2);
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
		map.em.addEvent('endOfLevel', 1500, 340, 64, 100, true, 'endOfLevel1', 'null', 'null');
		map.checkpoint.addCheckpoint('spot2', 700, 219, 32, 32, false);
		map.checkpoint.addCheckpoint('start', 400, 219, 32, 32, true);
		*/
	}
}
MAP_STORE.add('javabomb', new map_javabomb());