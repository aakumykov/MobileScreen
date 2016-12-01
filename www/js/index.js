'use strict';

$(document).ready(function(){
	$(window).on('resize', function(){ $('#container').height(window.innerHeight); });
	$(window).on('load', function(){ $('#container').height(window.innerHeight); });

	nativeClick.init('#container');
	nativeTouch.init('#container');
});

function newArea(id) {
	var area = document.createElement('DIV');
		area.setAttribute('class','area');
		area.setAttribute('id',id);
	var title = document.createElement('DIV');
		title.setAttribute('class', 'title');
		title.innerHTML = id;
		area.appendChild(title);
	return area;
}
