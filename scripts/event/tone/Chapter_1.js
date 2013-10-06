/*GAME_EVENT.add('endOfLevel1', function(){
	g.get('changelevel')('javabomb2');
});

GAME_EVENT.add('endOfLevel2', function(){
	g.get('changelevel')('javabomb');
});*/
GAME_EVENT.add('endOfLevel1', function(){
	g.get('changelevel')('javabomb');
});

GAME_EVENT.add('player_score', function(){
	world.player_score += 1;
	gm.getMenu('system').getElement('player_score').updateContent(world.player_score+'');
	for(var i = 0; i < world.entity.length; i++){
		if(world.entity[i].name == 'ball'){
			ball = world.entity[i];
			r = Math.round(Math.random() * 255);
			g = Math.round(Math.random() * 255);
			b = Math.round(Math.random() * 255);
			fx.addFX('explosion2', ball.x, ball.y, 3, 50, false, 'rgb('+r+','+g+','+b+')');
			break;
		}
	}
});

GAME_EVENT.add('cpu_score', function(){
	world.cpu_score += 1;
	gm.getMenu('system').getElement('cpu_score').updateContent(world.cpu_score+'');
	for(var i = 0; i < world.entity.length; i++){
		if(world.entity[i].name == 'ball'){
			ball = world.entity[i];
			r = Math.round(Math.random() * 255);
			g = Math.round(Math.random() * 255);
			b = Math.round(Math.random() * 255);
			fx.addFX('explosion2', ball.x, ball.y, 3, 50, false, 'rgb('+r+','+g+','+b+')');
			break;
		}
	}
});