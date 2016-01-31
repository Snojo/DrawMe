var Text = Shape.extend({

	constructor: function() {
		this.base("Text");
		this.textstring = "";
		this.textarea = document.createElement('textarea');
		this.textarea.id = "text";
	},

	draw: function(canvas) {
		canvas.font="20px Georgia";
		canvas.fillText(this.textstring, this.pos.x, this.pos.y);
	},

	drawing:function(point) {
	    this.textarea.focus();
	},

	startDrawing:function(point) {
		container.appendChild(this.textarea);
	     
	    this.textarea.style.left = point.x - 25 + 'px';
	    this.textarea.style.top = point.y + 15 + 'px';
	    this.textarea.style.width = 70 + 'px';
	    this.textarea.style.height = 30 + 'px';
	     
	    this.textarea.style.display = 'block';
	    this.textarea.focus();

	    $(document).bind("keypress.key13", function(e) {
			if(e.which == 13) {
				//app.drawingStart.drawingStop();
				alert('Hér ætti þetta að kalla í stopDrawing');
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