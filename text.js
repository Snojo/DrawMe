var Text = Shape.extend({

	constructor: function() {
		this.base("Text");
		this.fontsize = fontsize;
		this.font = font;
		this.textstring = "";
		this.textarea = document.createElement('textarea');
		this.textarea.id = "text";
	},

	draw: function(canvas) {
		canvas.font = this.fontsize + " " + this.font;
		canvas.fillStyle = this.color;
		canvas.fillText(this.textstring, this.pos.x, this.pos.y);
		this.base(canvas);
	},

	drawing:function(point) {
	    this.textarea.focus();
	},

	startDrawing:function(point) {
		container.appendChild(this.textarea);
	     
	    this.textarea.style.left = point.x + app.canvasOffset.x - 5 + 'px';
	    this.textarea.style.top = point.y + app.canvasOffset.y - 10 + 'px';
	    this.textarea.style.width = 70 + 'px';
	    this.textarea.style.height = 30 + 'px';
	     
	    this.textarea.style.display = 'block';
	    this.textarea.focus();

	    $(document).bind("keypress.key13", function(e) {
			if(e.which == 13) {
				var evt = document.createEvent("MouseEvents");
				evt.initEvent("mouseup", true, true);
				document.getElementById("canvas").dispatchEvent(evt);
			}
		});
	},

	stopDrawing:function(point) {
		this.textstring = this.textarea.value;
		container.removeChild(this.textarea);
		$(document).unbind("keypress.key13");
	},

	added: function(canvas) {
	},	

});