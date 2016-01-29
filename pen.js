var Pen = Shape.extend({

	constructor: function() {
		this.base("Pen");
		this.points = [];
	},

	draw: function(canvas) {
		canvas.strokeStyle = this.color;
		canvas.lineWidth = this.linewidth;
		canvas.beginPath();
		canvas.moveTo(this.points[0].x, this.points[0].y);
		for (var i = 1; i < this.points.length; i++) {
			canvas.lineTo(this.points[i].x, this.points[i].y);
		}
		canvas.stroke();
		this.base(canvas);

	},

	drawing:function(point) {
		this.points.push(point);
	},

	added: function(canvas) {
		if(this.size.x < 0) {
			this.pos.x += this.size.x;
			this.size.x = Math.abs(this.size.x);
		}

		if(this.size.y < 0) {
			this.pos.y += this.size.y;
			this.size.y = Math.abs(this.size.y);
		}
	},	

});