var Pen = Shape.extend({

	constructor: function() {
		this.base("Pen");
	},

	draw: function(canvas) {
		canvas.strokeStyle = this.color;
		canvas.lineWidth = 5;
		canvas.lineJoin = canvas.lineCap = 'round';
		canvas.moveTo(this.size.x, this.size.y);
		canvas.lineTo(this.size.x, this.size.y);
		canvas.stroke();
		this.base(canvas);
	},

	drawing:function(point) {
		this.size.x = point.x;
		this.size.y = point.y;
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