function map_javabomb()
{
	var self = this;
	self.name = 'javabomb';
	self.height = 1;
	self.width = 1;
	self.tileSize = 1024;

	this.initialize = function(map)
	{
		physics.addCollisionArea('col1', 0, 250, 485, 15);
		physics.addCollisionArea('col2', 1000, 250, 485, 15);
		physics.addCollisionArea('col3', 500, 0, 15, 1015);
		physics.addCollisionArea('col4', 500, 500, 15, 1015);

		// Light(NAME, X, Y, R, G, B, Brightness, Radius, Shader, SpecularFactor, LightInterraction)
		map.lights.push(new Light('techno_light', 0, 50, 150, 0, 0, 80, 250, 1, 0.5, false));
		map.lights.push(new Light('techno_light', 250, 50, 150, 150, 0, 80, 250, 1, 0.5, false));
		map.lights.push(new Light('techno_light', 500, 50, 0, 0, 150, 80, 250, 1, 0.5, false));
		map.lights.push(new Light('techno_light', 750, 50, 0, 150, 0, 80, 250, 1, 0.5, false));
		map.lights.push(new Light('techno_light', 1000, 50, 150, 0, 150, 80, 250, 1, 0.5, false));
		map.lights.push(new Light('techno_light', 1000, 450, 150, 0, 0, 80, 250, 1, 0.5, false));
		map.lights.push(new Light('techno_light', 750, 450, 150, 150, 0, 80, 250, 1, 0.5, false));
		map.lights.push(new Light('techno_light', 500, 450, 0, 0, 150, 80, 250, 1, 0.5, false));
		map.lights.push(new Light('techno_light', 250, 450, 0, 150, 0, 80, 250, 1, 0.5, false));
		map.lights.push(new Light('techno_light', 0, 450, 150, 0, 150, 80, 250, 1, 0.5, false));

		map.lights.push(new Light('techno_light', 1000, 225, 150, 0, 0, 80, 250, 1, 0.5, false));
		map.lights.push(new Light('techno_light', 750, 225, 150, 150, 0, 80, 250, 1, 0.5, false));
		map.lights.push(new Light('techno_light', 500, 225, 0, 0, 150, 80, 250, 1, 0.5, false));
		map.lights.push(new Light('techno_light', 250, 225, 0, 150, 0, 80, 250, 1, 0.5, false));
		map.lights.push(new Light('techno_light', 0, 225, 150, 0, 150, 80, 250, 1, 0.5, false));

		ru.addRU(function(){
			radius = 75;
			for(var i = 0; i < map.lights.length; i++){
				if(map.lights[i].name == "techno_light"){
					// Techno of Lights
					b = map.lights[i].brightness += ((Math.random() * 5000) - 2500) * clock.delta;
					b = b > lighting.dark ? lighting.dark : b;
					b = b < 1 ? 1 : b;
					map.lights[i].setBrightness(b);
					map.lights[i].setRadius(Math.round((b + 50) / lighting.resolution));

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