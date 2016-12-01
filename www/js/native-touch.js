'use strict';

var nativeTouch = {
	init: function(prntId){
		var area = newArea('nativeTouch');
	
		area.addEventListener('touchstart', function(ev){
			var element = ev.target;
				element.pressed = true;
			element.setAttribute('class', 'area start');
		});

		area.addEventListener('touchmove', function(ev){
			var element = ev.target;
			if (element.pressed) {
				element.setAttribute('class', 'area move');
			}
		});

		area.addEventListener('touchend', function(ev){
			var element = ev.target;
				element.pressed = false;
			element.setAttribute('class', 'area finish');
			window.setTimeout(function(){element.setAttribute('class','area')}, 500);
		});

		$(prntId).append(area);
	}
}