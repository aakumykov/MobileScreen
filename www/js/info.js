'use strict';

var info = {
	update: function(){
		//console.log('info.update()');
		var states = [
			'mousedown',
			'mousemove',
			'mouseup',
			'touchstart',
			'touchmove',
			'touchend',
		];
		for (var key in states) {
			var name = states[key];
			this.updateInfo(name);
		}
	},

	updateInfo: function(name){
		var active = pointer[name]();
		var element = $('#'+name);
		//console.log('updateInfo('+name+'): '+active);
		if (active) {
			element.addClass('active');
		} else {
			element.removeClass('active');
		}
	},
}