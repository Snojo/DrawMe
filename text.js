var Text = Shape.extend({

	constructor: function() {
		this.base("Text");
		this.textstring = "";
	},

	draw: function(canvas) {
		canvas.font="20px Georgia";
		canvas.fillText(this.textstring, this.pos.x, this.pos.y);
	},

	drawing:function(point) {
		
	},

	added: function(canvas) {
	},	

});