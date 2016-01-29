var Circle = Shape.extend({

	constructor: function() {
		this.base("Circle");
	},

	draw: function(canvas) {
		canvas.strokeStyle = this.color;
		canvas.lineWidth = this.linewidth;
		canvas.beginPath();
		canvas.arc(this.pos.x, this.pos.y, this.size.x, 0, 2*Math.PI);
		canvas.stroke();
		this.base(canvas);
	},

	drawing:function(point) {
		this.size.x = Math.sqrt(((point.x - this.pos.x) * (point.x - this.pos.x)) + ((point.y - this.pos.y) * (point.y - this.pos.y)));
	},

	added: function(canvas) {
	},	

});