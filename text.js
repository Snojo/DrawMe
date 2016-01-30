var Text = Shape.extend({

	constructor: function() {
		this.base("Text");
		this.textstring = "fuck y'all";
		this.textarea = document.createElement('textarea');
		this.textarea.id = "text";
	},

	draw: function(canvas) {
		//canvas.font="20px Georgia";
		//canvas.fillText(this.textstring, this.pos.x, this.pos.y);
		container.appendChild(this.textarea);
		    // Tmp canvas is always cleared up before drawing.
		    canvas.clearRect(0, 0, canvas.width, canvas.height);
		     
		    var x = this.pos.x;
		    var y = this.pos.y;
		    var width = this.size.x;
		    var height = this.size.y;
		     
		    this.textarea.style.left = x + 'px';
		    this.textarea.style.top = y + 'px';
		    this.textarea.style.width = width + 'px';
		    this.textarea.style.height = height + 'px';
		     
		    this.textarea.style.display = 'block';
		
	},

	drawing:function(point) {
		this.size.x = point.x - this.pos.x;
		this.size.y = point.y - this.pos.y;
	},

	added: function(canvas) {
	},	

});