'use strict';

var pointer = {
	state: {
		mousedown: false,
		mousemove: false,
		mouseup: false,
		
		touchstart: false,
		touchmove: false,
		touchend: false,
	},

	// mouse
	mousedown: function(arg=''){
		//console.log('pointer.mousedown('+arg+')');
		//var state = this.state.mousedown;
		switch(arg){
			case '':
				return this.state.mousedown;
			case true:
				this.state.mousedown = true;
				break;
			case false:
				this.state.mousedown = false;
				break;
			default:
				//console.error('pointer.mousedown: неизвестный тип аргумента "'+typeof(arg)+'"');
		}
	},

	mousemove: function(arg=''){
		switch(arg){
			case '':
				return this.state.mousemove;
			case true:
				this.state.mousemove = true;
				break;
			case false:
				this.state.mousemove = false;
				break;
			default:
				//console.error('pointer.mousemove: неизвестный тип аргумента "'+typeof(arg)+'"');
		}
	},

	mouseup: function(arg=''){
		//console.log('pointer.mouseup('+arg+')');
		switch(arg){
			case '':
				return this.state.mouseup;
			case true:
				this.state.mouseup = true;
				setTimeout(function(){ pointer.mouseup(false)}, 500);
				break;
			case false:
				this.state.mouseup = false;
				break;
			default:
				//console.error('pointer.mouseup: неизвестный тип аргумента "'+typeof(arg)+'"');
		}
	},

	// touch
	touchstart: function(arg=''){
		switch(arg){
			case '':
				return this.state.touchstart;
			case true:
				this.state.touchstart = true;
				break;
			case false:
				this.state.touchstart = false;
				break;
			default:
				//console.error('pointer.touchstart: неизвестный тип аргумента "'+typeof(arg)+'"');
		}
	},

	touchmove: function(arg=''){
		switch(arg){
			case '':
				return this.state.touchmove;
			case true:
				this.state.touchmove = true;
				break;
			case false:
				this.state.touchmove = false;
				break;
			default:
				//console.error('pointer.touchmove: неизвестный тип аргумента "'+typeof(arg)+'"');
		}
	},

	touchend: function(arg=''){
		switch(arg){
			case '':
				return this.state.touchend;
			case true:
				this.state.touchend = true;
				setTimeout(function(){ pointer.touchend(false)}, 500);
				break;
			case false:
				this.state.touchend = false;
				break;
			default:
				//console.error('pointer.touchend: неизвестный тип аргумента "'+typeof(arg)+'"');
		}
	},
}