'use strict';

$(document).ready(function(){
	$(window).on('resize', function(){ $('#container').height(window.innerHeight); });
	$(window).on('load', function(){ $('#container').height(window.innerHeight); });

	nativeMouse.init('#container');
});

function newArea(id) {
	var area = document.createElement('DIV');
		area.setAttribute('class','area');
		area.setAttribute('id',id);
	return area;
}
