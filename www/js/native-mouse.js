'use strict';

var nativeMouse = {
	init: function(prntId){
		var area = newArea('nativeMouse');
	
		area.addEventListener('mousedown', function(ev){
			var element = ev.target;
				element.pressed = true;
			element.setAttribute('class', 'area mousedown');
		});

		area.addEventListener('mousemove', function(ev){
			var element = ev.target;
			if (element.pressed) {
				element.setAttribute('class', 'area mousemove');
			}
		});

		area.addEventListener('mouseup', function(ev){
			var element = ev.target;
				element.pressed = false;
			element.setAttribute('class', 'area mouseup');
			window.setTimeout(function(){element.setAttribute('class','area')}, 500);
		});

		$(prntId).append(area);
	}
}