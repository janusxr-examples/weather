var timer = 5;
var stage = 0;
var last_thunder = 0;
function getRandomInt(min, max)
{
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}
room.update = function(dt)
{
	timer = timer - dt * 0.001;
	if (timer <= 0)
	{
		timer = Math.random()*30;
		room.playSound('js_thunder_sfx_'+(last_thunder+1).toString());
		room.objects['js_sky'].col = Vector(1,1,0);
		room.objects['js_lightning_light'].light_intensity = 9;
		last_thunder = (last_thunder + 1) % 3;
	}
	room.objects['js_sky'].col.x = Math.max(0.05, room.objects['js_sky'].col.x - dt * 0.001);
	room.objects['js_sky'].col.y = Math.max(0.075, room.objects['js_sky'].col.y - dt * 0.001);
	room.objects['js_sky'].col.z = Math.max(0.1, room.objects['js_sky'].col.z - dt * 0.001);
	room.objects['js_lightning_light'].light_intensity = Math.max(0.0, room.objects['js_lightning_light'].light_intensity - dt * 0.001 * 10);
}