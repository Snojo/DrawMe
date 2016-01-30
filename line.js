var Line = Shape.extend({

	constructor: function() {
		this.base("Line");
	},

	draw: function(canvas) {
		canvas.strokeStyle = this.color;
		canvas.lineWidth = this.linewidth;

		canvas.beginPath();
		canvas.moveTo(this.pos.x, this.pos.y);
		canvas.lineTo(this.size.x, this.size.y);
		canvas.stroke();
		canvas.closePath();

		this.base(canvas);
	},

	drawing:function(point) {
		this.size.x = point.x;
		this.size.y = point.y;
	},

	startDrawing:function(point) {
		this.size.x = point.x;
		this.size.y = point.y;
	},

	added: function(canvas) {
	},	

});