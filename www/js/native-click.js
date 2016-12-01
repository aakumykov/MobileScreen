'use strict';

var nativeClick = {
	init: function(prntId){
		var area = newArea('nativeClick');
	
		area.addEventListener('mousedown', function(ev){
			var element = ev.target;
				element.pressed = true;
			element.setAttribute('class', 'area start');
		});

		area.addEventListener('mousemove', function(ev){
			var element = ev.target;
			if (element.pressed) {
				element.setAttribute('class', 'area move');
			}
		});

		area.addEventListener('mouseup', function(ev){
			var element = ev.target;
				element.pressed = false;
			element.setAttribute('class', 'area finish');
			window.setTimeout(function(){element.setAttribute('class','area')}, 500);
		});

		$(prntId).append(area);
	}
}