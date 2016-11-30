//'use strict';

$(document).ready(function(){
	$(window).on('resize', function(){ $('#container').height(window.innerHeight); });
	$(window).on('load', function(){ $('#container').height(window.innerHeight); });

	app.init();
});

