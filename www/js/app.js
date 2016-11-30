'use strict';

var app = {
	init: function(){
		setInterval(function(){
			info.update();
		}, 10);

		this.initJSMouse();
	},

	initJSMouse: function(){
		var jsMouse = document.getElementById('jsMouse');

		// mouse*
		jsMouse.addEventListener('mousedown', function(){
			pointer.mousedown(true);
			pointer.mouseup(false);
		});
		
		jsMouse.addEventListener('mousemove', function(){
			pointer.mousemove( pointer.mousedown() );
		});
		
		jsMouse.addEventListener('mouseup', function(){
			pointer.mouseup(true);
			pointer.mousedown(false);
			pointer.mousemove(false);
		});


		// touch*
		var jsTouch = document.getElementById('jsTouch');

		jsTouch.addEventListener('touchstart', function(){
			pointer.touchstart(true);
			pointer.touchend(false);
		});
		
		jsTouch.addEventListener('touchmove', function(){
			pointer.touchmove( pointer.touchstart() );
		});
		
		jsTouch.addEventListener('touchend', function(){
			pointer.touchend(true);
			pointer.touchstart(false);
			pointer.touchmove(false);
		});
		
	},


}
