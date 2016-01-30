var Text = Shape.extend({

	constructor: function() {
		this.base("Text");
		this.textstring = "fuck y'all";
		this.textarea = document.createElement('textarea');
		this.textarea.id = "text";
	},

	draw: function(canvas) {
		canvas.font="20px Georgia";
		canvas.fillText(this.textstring, this.pos.x, this.pos.y);
	},

	drawing:function(point) {
		this.size.x = point.x - this.pos.x;
		this.size.y = point.y - this.pos.y;
	},

	startDrawing:function(point) {
		container.appendChild(this.textarea);
		    // Tmp canvas is always cleared up before drawing.
	     
	    var x = this.pos.x;
	    var y = this.pos.y;
	    var width = this.size.x;
	    var height = this.size.y;
	     
	    this.textarea.style.left = point.x + 'px';
	    this.textarea.style.top = point.y + 'px';
	    this.textarea.style.width = 50 + 'px';
	    this.textarea.style.height = 25 + 'px';
	     
	    this.textarea.style.display = 'block';
	},

	stopDrawing:function(point) {
		this.textstring = this.textarea.value;
		container.removeChild(this.textarea);
	},

	added: function(canvas) {
	},	

});