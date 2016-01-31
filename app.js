function App(canvasSelector) {
	var self = this;
	self.getEventPoint = function(e) {
		return new Point(e.pageX - self.canvasOffset.x,e.pageY - self.canvasOffset.y);
	}

	self.drawingStart = function(e) {	
		var startPos = self.getEventPoint(e);
		var shape = self.shapeFactory();
		shape.pos = startPos;
		shape.color = self.color;
		shape.linewidth = self.linewidth;
		shape.fontsize = self.fontsize;
		shape.font = self.font;

		shape.startDrawing(startPos,self.canvasContext);
		startPos.log('drawing start');
	
		var drawing = function(e) {
			var pos = self.getEventPoint(e);
			
			shape.drawing(pos,self.canvasContext);

			self.redraw();
			shape.draw(self.canvasContext);
		}

		var drawingStop = function(e) {
			var pos = self.getEventPoint(e);

			shape.stopDrawing(pos,self.canvasContext);

			pos.log('drawing stop');

			self.shapes.push(shape);
			shape.added(self.canvasContext);

			// Remove drawing and drawingStop functions from the mouse events
			self.canvas.off({
				mousemove:drawing,
				mouseup:drawingStop
			});

			self.redraw();
		}

		// Add drawing and drawingStop functions to the mousemove and mouseup events
		self.canvas.on({
			mousemove:drawing,
			mouseup:drawingStop
		});	
	}

	self.mousedown = function(e) {
		if(self.shapeFactory != null) {
			self.drawingStart(e);
			self.redoarray = [];
		} else {
		}

		self.redraw();
	}

	self.redraw = function() {
		self.canvasContext.clearRect(0, 0, self.canvasContext.canvas.width, self.canvasContext.canvas.height);
		for(var i = 0; i < self.shapes.length; i++) {
			self.shapes[i].draw(self.canvasContext);
		}
	}
	
	self.clear = function() {
		self.shapes = [];
		self.redoarray = [];
		self.redraw();
	}

	self.selectText = function() {
		var link = document.getElementById('fontsize');
		link.style.display = 'inline';
		var link = document.getElementById('font');
		link.style.display = 'inline';
		var link = document.getElementById('linewidth');
		link.style.display = 'none';
	}

	self.selectDrawing = function() {
		var link = document.getElementById('fontsize');
		link.style.display = 'none';
		var link = document.getElementById('font');
		link.style.display = 'none';
		var link = document.getElementById('linewidth');
		link.style.display = 'inline';
	}

	self.undo = function() {
		if(self.shapes.length > 0) {
			self.redoarray.push(self.shapes[self.shapes.length-1]);
			self.shapes = self.shapes.slice(0,-1);
			self.redraw();
		}
	}

	self.redo = function() {
		if(self.redoarray.length > 0) {
			self.shapes.push(self.redoarray[self.redoarray.length-1]);
			self.redoarray = self.redoarray.slice(0,-1);
			self.redraw();
		}
	}
	
	self.setColor = function(color) {
		self.color = color;
	}

	self.setLineWidth = function(width) {
		self.linewidth = width;
	}

	self.setFontSize = function(fontsize) {
		self.fontsize = fontsize;
	}

	self.setFont = function(font) {
		self.font = font;
	}

	self.init = function() {
		// Initialize App	
		self.canvas = $(canvasSelector);
		self.canvasOffset = new Point(self.canvas.offset().left,self.canvas.offset().top);
		self.canvas.on({
			mousedown:self.mousedown
		});
		self.shapeFactory = null;
		self.canvasContext = canvas.getContext("2d");
		self.shapes = new Array();
		self.redoarray = new Array();
		
		// Set defaults
		self.color = '#ff0000';	
		self.linewidth = 1;
		self.fontsize = "16px";
		self.font = "Georgia";
		self.shapeFactory = function() {
			return new Pen();
		};
		$("#penbutton").prop("checked", true);
		$("#linewidth1").prop("selected", "selected");
	}
	
	self.init();
}

var app = null;
$(function() {
	// Wire up events
	app = new App('#canvas');
	$('#squarebutton').click(function(){app.shapeFactory = function() {
		return new Square();};
		app.selectDrawing();});
	$('#circlebutton').click(function(){app.shapeFactory = function() {
		return new Circle();};
		app.selectDrawing();});
	$('#linebutton').click(function(){app.shapeFactory = function() {
		return new Line();};
		app.selectDrawing();});
	$('#penbutton').click(function(){app.shapeFactory = function() {
		return new Pen();};
		app.selectDrawing();});
	$('#textbutton').click(function(){app.shapeFactory = function() {
		return new Text();};
		app.selectText();
		});
	$('#clearbutton').click(function(){app.clear()});
	$('#undobutton').click(function(){app.undo()});
	$('#redobutton').click(function(){app.redo()});
	$('#color').change(function(){app.setColor($(this).val())});
	$('#linewidth').change(function(){app.setLineWidth($(this).val());});
	$('#fontsize').change(function(){app.setFontSize($(this).val())});
	$('#font').change(function(){app.setFont($(this).val())});
});
