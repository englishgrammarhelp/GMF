(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"sounds/asentencecontainsasubjectandaverb.mp3", id:"asentencecontainsasubjectandaverb"},
		{src:"sounds/wrong_answer.mp3", id:"wrong_answer"},
		{src:"sounds/doogwindsurfs.mp3", id:"doogwindsurfs"},
		{src:"sounds/right_answer.mp3", id:"right_answer"},
		{src:"sounds/hesoars.mp3", id:"hesoars"},
		{src:"sounds/High_Screaming_Gtr.mp3", id:"High_Screaming_Gtr"},
		{src:"sounds/OrganBlip.mp3", id:"OrganBlip"},
		{src:"sounds/powersynth.mp3", id:"powersynth"},
		{src:"sounds/salsa_groove.mp3", id:"salsa_groove"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.Wordwindsurfs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AghBDQgTgGAAgNQAAgEAEgEQAEgEAFAAQAEAAAGAGQADADAKABIAOACQAIAAAIgCQALgEAAgHQAAgRgXgGIgLgDQgQgDgHgFQgKgFAAgNQAAgaAYgLQAIgDAOgFIAXgHQAFgDAGAAQAFAAADADQAEAEAAAFIABALIACAKQAAAGgEADQgDAEgFAAQgHAAgDgFQgCgDgBgKQgJACgTAHQgSAHAAAMIAHACQAaAEAOAKQAUAKAAAZQAAATgRALQgPAIgTAAQgQAAgPgGg");
	this.shape.setTransform(50.6,7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgTBoQgDgEAAgFIAAgCQADgQgBgTIAAghIAAghIgTABQgMAAAAgMQAAgMAVgBIALAAIADgTQADgbAKgMQALgQAbAAQARAAAAAMQAAAMgPAAQgeAAgDApIgBAHIAbgBQAUAAgBAMQAAAJgJACIgKAAQgFAAgXACIgBAaIABAWIAAAXQAAAXgCANQgBAKgJAAQgFAAgEgDg");
	this.shape_1.setTransform(38.3,4.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AguA4IAAhUIABgMIAAgMQgBgNALAAQAMAAAAAVQAXgXAbAAQALAAAEAIQAFAHAAAPIAAAJQgBAPgLAAQgLAAAAgMIAAgJIAAgKQgUACgKAJQgKAIgIAQIABBBQAAAMgMAAQgLAAAAgMg");
	this.shape_2.setTransform(26.6,7.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AAbA6QgQAHgRABQgQAAgLgHQgLgIgDgQQgEggAAgXQAAgRADgVQACgKAKAAQAFgBAEAEQADADAAAFIgCASIgBATIABAhQABAPADAJIAIADIAIABQAOAAASgGIAAgYIAAgWQAAgbACgTQABgLALAAQAFAAAEADQADAEAAAFIgCAuIAAAYIAAAbIABAIIAAAJQAAAEgEAEQgDAEgFgBQgKABgCgMg");
	this.shape_3.setTransform(13.7,7.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AghBDQgTgGAAgNQAAgEAEgEQAEgEAFAAQAEAAAGAGQADADAKABIAOACQAIAAAIgCQALgEAAgHQAAgRgXgGIgLgDQgQgDgHgFQgKgFAAgNQAAgaAYgLQAIgDAOgFIAXgHQAFgDAGAAQAFAAADADQAEAEAAAFIABALIACAKQAAAGgEADQgDAEgFAAQgHAAgDgFQgCgDgBgKQgJACgTAHQgSAHAAAMIAHACQAaAEAOAKQAUAKAAAZQAAATgRALQgPAIgTAAQgQAAgPgGg");
	this.shape_4.setTransform(0.8,7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgrBTQgRgRAAgcQABggARgRQARgVAZAAQAPAAAIAFIALAJQACg0ACgSQACgLAJAAQALAAAAAMQABARgGA6QgBAQAAASQAAApAEAUIAAAEQAAAEgEAEQgDACgFAAQgHABgEgLQgIAGgKAEQgJACgJAAQgYAAgSgQgAgcABQgKAMAAAZQAAAQALALQAMAMAOAAQAJAAAHgEIANgLIAEgDIAAgWIAAgNIAAgPQgEgJgJgDQgHgGgLAAQgTAAgKAKg");
	this.shape_5.setTransform(-12.4,4.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AAdA7IgDgbQgCgOAAgNIAAgJIABgLQAAgbgKAAQgNAAgLARQgLAOgGAVIgCALIgBAMIABAMIABALQAAAFgDAEQgEADgFAAQgFAAgEgDQgDgEAAgFIAAgLIgBgMIACghIABgiIAAgMIgBgMQABgEADgEQADgEAFABQAMgBABARIAAAOQAUgbAUgBQATABAIAQQAGAMAAAXIAAAMIAAAJQAAAKACAQQAEARAAAJQAAAGgEADQgDADgGABQgLAAgBgMg");
	this.shape_6.setTransform(-25.9,7.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgLBYQgDgDAAgGIAAgWIgBgWIABgcIACgbQAAgFADgEQADgDAGAAQADAAADADQADAEAAAFIgBAbIgBAcIABAWIAAAWQAAAGgDADQgEADgDAAQgFAAgEgDgAgHhCQgEgEAAgGQAAgGAEgEQAFgEAEAAQAFAAAFAEQAEAEAAAGQAAAGgEAEQgFAEgFAAQgEAAgFgEg");
	this.shape_7.setTransform(-36,4.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AAHAjIgFgdIgCgZIgKAVIgSAzQgCAEgEADQgDAHgIAAQgJABgJglQgEgTgEgeIgEgTIgBgSQAAgFAEgDQADgEAFAAQAKAAACAKIACASIACASIAHA1QAOgkAOgxQAFgNAIAAQAJAAADAOIAIAsQAFAdAEARIAJggIAQhCQABgGAJAAQAFAAAEADQAEADAAAFIgCAFQgJApgPAvQgEAMgIALQgEAHgIAAQgMgBgIggg");
	this.shape_8.setTransform(-48.2,7.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59,-15.9,118.1,38.8);


(lib.Wordsoars = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AghA/QgSgHAAgNQAAgMAOAAQAFAAALADQALAEAFAAQAXAAABgKQAAgGgSgIQgXgLgHgDQgRgMgBgRQAAgZAagIQAQgFAdAAQANAAAFADQAIAEAAALQAAAWgMAAQgMAAgCgKIgKgBQgbAAgBAIQAAAFAQAIQAYALAJAGQASALAAARQgBAVgTAKQgPAJgWAAQgQAAgNgFg");
	this.shape.setTransform(25.5,7.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgvA/QgEgEAAgHIAAhOIABgLIAAgMQAAgHAEgEQAEgFAIAAQANAAADAOQATgQAbAAQAYAAAAAhIAAAIQgCASgPAAQgPAAAAgPIgBgNQgaAFgLAXIAAA8QAAAHgFAEQgFAFgHAAQgIAAgEgFg");
	this.shape_1.setTransform(13.8,7.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AAdA4IgUAIQgJACgDAAQgdAAgPgPQgPgQAAgfQAAgcAWgUQAVgWAcAAQAMAAAPAHQATAIAAAKQAAAFgDADIgCAMIAAARQgBAWAEAJIAGANIAEAMQAAAHgEAEQgGADgGAAQgGAAgMgKgAgQgXQgMANAAAPQgBAQAHAIQAFAJAMgBQAGABAGgDQAHgDAGgEQgDgcgBgOIABgJIABgLIgDgBIgEgBQgOAAgNANg");
	this.shape_2.setTransform(0.7,7.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgnAzQgSgRgBgcQAAgZAPgVQATgZAfAAQAYAAAPATQANASAAAaQAAAagPAUQgRAWgbAAQgXAAgQgPgAgQgTQgIALAAAOQAAAOAJAIQAGAGAJAAQAJAAAHgHQAJgIABgPQACglgXAAQgNAAgIAOg");
	this.shape_3.setTransform(-13.1,7.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgiA/QgRgHgBgNQAAgMAPAAQAGAAAKADQALAEAFAAQAXAAAAgKQAAgGgRgIQgXgLgHgDQgRgMAAgRQAAgZAZgIQAQgFAdAAQANAAAFADQAIAEAAALQAAAWgMAAQgMAAgCgKIgKgBQgbAAgBAIQAAAFAQAIQAYALAJAGQASALAAARQAAAVgUAKQgPAJgWAAQgQAAgOgFg");
	this.shape_4.setTransform(-25.7,7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.7,-15.9,67.5,38.8);


(lib.Wordoog = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("Ag+BOQAAgHAFgFQAEgDAHAAIAQABQAKACAIAAQARAAAIgLQAIgKACgYQgHAGgIADQgHAEgHAAQgYAAgQgQQgPgQAAgWQAAgiAUgUQAVgWAiAAQALAAAIAEQAJACAFAGQAPACAAAQQAAAJgCANQgFAdgBAfQgBAngMARQgQAZgnAAQgvgBgBgSgAgSg2QgJAMgBAUQABAOAFAIQAGAFALAAQAHAAALgKQAJgKABgLIAGglIgIgEIgIgBQgTAAgMAOg");
	this.shape.setTransform(13,10.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s().p("AgnAzQgSgRgBgcQAAgZAPgVQATgZAfAAQAYAAAPATQANASAAAaQAAAagPAUQgRAWgbAAQgXAAgQgPgAgQgTQgIALAAAOQAAAOAJAIQAGAGAJAAQAJAAAHgHQAJgIABgPQACglgXAAQgNAAgIAOg");
	this.shape_1.setTransform(-0.2,7.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000FF").s().p("AgnAzQgSgRgBgcQAAgZAPgVQATgZAfAAQAYAAAPATQANASAAAaQAAAagPAUQgRAWgbAAQgXAAgQgPgAgQgTQgIALAAAOQAAAOAJAIQAGAGAJAAQAJAAAHgHQAJgIABgPQACglgXAAQgNAAgIAOg");
	this.shape_2.setTransform(-13.4,7.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.8,-15.9,43.7,38.8);


(lib.Worde = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AgpA0QgUgPAAgcQAAgdARgVQARgYAdAAQAVAAAOAHQATAJAAATQAAAOgPAJQgHAGgVAGIgmATQAFAGAIADQAJADAIAAQARAAALgGQALgGAFAAQANAAAAAMQAAAOgVAJQgQAHgUAAQgaAAgUgOgAgPgcQgJAHgEAQIAcgMQAOgHAJgHQgHgEgOgBQgJAAgIAIg");
	this.shape.setTransform(-0.2,7.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.1,-15.9,18.2,38.8);


(lib.staticwake = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0000FF").ss(0.1,1,1).p("AAegNQAAgCACgCQAFgHgBgHQgBgFgFgCQgJgCAAgIQADgJgBgJQgBgEgFgEQgBAAgBgBQgBgCgBgCQAAgDgDgDQAAAEgCACQgEAHgFAFQgJAGAFAIQAEAGgFADQgDAFgGADQgBACgCAAQgBAIAGABQAHAAgDAHQAAAFgJABQgDgFgDgFQgEgIAJgEQABAAAAAAQABgBACgBAAEg2QgCADgCADQADAFAGAFQACACgDABQgFAJAFAEQAFADACgKQACgBACgBQACgCgBgDQABgGgGgDQgEgCAAgEQAGgHgIgIQAAAHgFAFgAgSgMQABADABADQgCABgBABQgJACgHAEQgCADgCAHQACAFAEAFQAGAFgDAHQAAADgBAEQgFAIAJAIIAAABQAGAHgDAJQACAGAEADQAIAGAHgGIAKgXQgCgKAAgJQgDgIAPgCQAEgBADgBIAAAAQgDgGAEgEQACgCAEgCQAHgEABgHQACgFgFgEQAAAFgDABQgBAFgHAFQgKgKAJgHQAEgDACgEAgWAMQAAgEAAgDQAEAGgBAGQACAEAGABQACAAABAHQABAGgGAFQgCABgCAAQgBAAAAAAQAAgHgDgGQgIgJAHgHgAAkgFQgHgEABgEAAEAdQgEgJAHgIQACgEgEgHQAGAGAAAHQABAIgIAHgAAHA8QAYgSgHgN");
	this.shape.setTransform(4,8.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AABAtQgBgIAMgDIAHgBQAHAMgXASQgDgKABgIgAgWAsIgBAAQAAgGgDgHQgIgJAIgHIAAgHQAEAHgCAFQACAEAHACQABgBACAIQABAGgHAFIgDAAIgBAAgAACAPQACgEgEgGQAGAFABAIQABAHgIAHQgDgIAFgJgAATgCIAGgIQAAAFAGAEQAAACgDADQAAAFgHAGQgKgLAIgGgAgdgTQgDgIAJgEIAAAAIABAAQgBAJAGAAQAHAAgDAIQAAAFgKAAIgGgKgAAEgTQgEgDAEgKQAAAAABAAQAAAAAAgBQAAAAAAAAQAAgBgBgBQgEgEgCgGIACgFQAEgFAAgHQAIAHgGAHQAAAFAEABQAHADgBAGQABAEgCACIgEABQgCAIgDAAIgCgBg");
	this.shape_1.setTransform(4.5,8.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00CCFF").s().p("AgSBTQgEgDgCgGQADgJgGgHIAAgBQgJgIAFgIIABgHQADgHgGgFIgGgKQACgHACgDQAHgEAJgCIADgCIgCgGQAJgBAAgFQADgHgHAAQgGgBABgIIADgCQAGgDADgFQAFgDgEgGQgFgIAJgGQAFgFAEgHQACgCAAgEQADADAAADIACAEIACABQAFAEABAEQABAJgDAJQAAAIAJACQAFACABAFQABAHgFAHQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABIgGAHQgJAHAKAKQAHgFABgFQADgBAAgFQAFAEgCAFQgBAHgHAEIgGAEQgCADAAADIABAEIAAAAIgHACQgPACADAIQAAAJACAKIgKAXQgEADgEAAQgDAAgEgDgAgNAoQAGgFgBgGQgBgHgCAAQgGgBgCgEQABgGgEgGIAAAHQgHAHAIAJQADAGAAAHIABAAIAEgBgAAHAMQgHAIAEAJQAIgHgBgIQAAgHgGgGQAEAHgCAEgAAEg2IgEAGQADAFAGAFQAAABABAAQAAABAAAAQAAAAgBABQAAAAgBAAQgFAJAFAEQAFADACgKIAEgCQACgCgBgDQABgGgGgDQgEgCAAgEQAGgHgIgIQAAAHgFAFgAAYAdgAAYAdIgBgEQAAgDACgDIACADQADAFgGACg");
	this.shape_2.setTransform(4,8.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,10.1,19.3);


(lib.letters = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAVAhIgEgUIgRADIgPADIgKAYQgCAEgEAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAQAAgEAJgUIgBgDQAAgFAGgCIATgeQANgXADAAQAFgBACAIIAEAVIAKAqIADAKIACAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgGAAgFgOgAgHAEIAVgEIgFgXg");
	this.shape.setTransform(4.5,8.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgcAwQgDgCAAgDIAAgTIACgYIABgaIABgRQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAIgDALAAQAJAAALAIQAMAIAAANQAAARgNAHQAJAEAFAFQAFAFAAAGQAAAHgIAIQgGAFgHACQgMAGgWAAQgDAAgCgDgAgSAZIAAANQARgBAIgEIAJgFQADgEAAgBQAAgDgIgEIgLgEIgFgBIgDAAIgCAAIgIgBIAAAPgAgPglIgBAMIgBAYIAKABQAHgBAHgFQAGgGAAgJQAAgGgHgFQgGgFgGAAIgJAAg");
	this.shape_1.setTransform(4.2,8.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgZAmQgJgKAAgMQAAgUASgXQAPgSANAAIAGAAIAEABQADgEAEAAQADAAACAGIABAMQAAAEgBACQgCACgDAAQgFAAgCgFIgDgFIgHAAQgIAAgKAOQgPASAAAQQAAAIAFAFQAGAHAHAAQAEgBAIgDIAKgHQAEgDACAAQABAAAAAAQABAAABABQAAAAABAAQAAABAAAAQABAAAAABQABABAAAAQAAABAAAAQAAABAAAAQAAADgCADQgRAPgPgBQgNABgJgLg");
	this.shape_2.setTransform(3.9,8.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSAzQgIgCgDgDIgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgBAAAAIABgUIABgUIgBgUIAAgXQABgCACgDQACgDADAAQACAAAIAEIALAGQARAGANAMQAOAPAAAQQAAALgEAKQgGAKgJAGQgJAHgRAAIgKgBgAgWgQIAAAQIgCAjIACABQAGADAIAAQANAAAGgEQAGgEAEgHQADgIAAgHQABgQgUgNQgFgEgXgKg");
	this.shape_3.setTransform(4.7,8.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgaAwQgHgFAAgVIAAgJIABgKIgBgDIABgCIACgbIgBgHIgBgHQAAgHAHAAQABAAAAAAQABAAAAAAQABAAAAABQABAAABAAIAOgDIALgBQAPAAAJAEQAEACABAEQAAABgBAAQAAABAAABQAAAAAAABQgBAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAIgBgBQgMgDgJAAIgKABIgNADIABAHIgBAYIAagCIAPgCQAAAAABAAQAAAAABABQAAAAABAAQABABAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAEgGAAIgPACIgbACIAAAJIgBAHQAAAOACADQABACAJAAIAKgBIAMAAIADAAIAEgBQAHAAAAAHQAAAFgFABQgHACgRAAQgUAAgFgGg");
	this.shape_4.setTransform(4.1,8.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgdAzQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAIAAgmIABgkIAAgIIgBgIQAAgDACgCQABgBAAAAQABgBAAAAQABAAAAAAQABAAABAAIAEABIAOgCIAJgBQAHAAAJACQANADAAAFQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgCACgDAAIgCgBQgIgDgNAAIgIABIgNACIAAAbQAMgDAGAAIATABQAGABAAAGQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAIgKAAIgIAAQgEAAgOADIgBAsQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABgBAAQAAAAgBAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBg");
	this.shape_5.setTransform(4.1,8.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfArQgIgJAAgRQAAgRAIgPQAHgSANgKQAIgIAHAAQAGABAJADQALAFAAAFQABADgCACQAAABgBAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgFgCQgKgFgGgBQgEABgEAFIgIAIQgOATAAAWQAAAMADAEQAEAFALAAQAKAAAIgHQAJgIADgNQgSABgKAFIgCABQgEAAgCgCQgBgCAAgDQAAgEADgCQAMgGAiAAQAAAAABAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAAAQAAAAABAAQAAABAAAAQAAABAAAAQAAAFgDACQgFATgMAMQgMAMgQAAQgQgBgHgIg");
	this.shape_6.setTransform(4.3,8.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgmAxQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIABgUIABgUIAAgJIAAgLIAAgPIABgOQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAABgBQAAAAAAAAQABAAABAAQAAgBABAAQABAAAAABQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAQABABAAAAQAAABAAAAQAAABAAABIgBAPIAAAPIAAAOIAagDQAQgDALgBIABgaIABgKQACgHAEAAIAEABQABABAAABQAAAAABABQAAAAAAABQAAAAAAABIAAACIgBAJIAAAFIAAAFIgBATIgBARIAAAPIABAPQAAAAAAABQAAAAAAABQgBAAAAABQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAgBgBAAQAAgBAAAAQAAgBAAAAIgBgPIAAgPIAAgJQgLABgPADIgaAEIgBARIgBAQQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBAAQgBABAAAAQgBAAAAgBQgBAAgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape_7.setTransform(4.9,8.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgbAuQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAAAQAAgDACgCQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAIANgBIABgMIAAgLIgBgKIACgjIgIAAIgJAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgCgCAAgDQAAgGAGgBIATAAQALAAATADQAGAAAAAGQAAADgDACQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAIgKgBIgKgBIgCAhIAAALIABALIgBALIAUgBQABAAAAAAQABABABAAQAAAAABAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAADgBACQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAIgLABIgKAAIgLABIgMABQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBgBg");
	this.shape_8.setTransform(3.4,8.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgZArQgMgJAAgLQAAgIAHAAQAGAAAAAIQAAAFAIAFQAHAFAGAAQADAAACggIABgkIAAgGIgDAAIgGgBIgIAAQgDAAgCgBQgBgCAAgDQAAgHAIAAIAHAAIAFABIALgBIAMAAQAPAAAAAHQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQgCADgDAAIgEgBIgEAAIgHAAIAAAHQAAAugGAVQgEAOgJAAQgLAAgLgIg");
	this.shape_9.setTransform(4.2,9.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

	// circle
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AAxg9QAUAaAAAjQAAAkgUAaQgVAbgcgBQgcABgUgbQgUgaAAgkQAAgjAUgaQAUgaAcgBQAcABAVAag");
	this.shape_10.setTransform(4,9);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.9,-3.5,15.9,22.5);


(lib.skiptomenu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AATApQgLAGgMAAQgMAAgHgFQgJgGgBgKQgEgYABgQQgBgMADgPQABgIAHAAQAEAAADADQACACAAAEIgBANIgBANIABAXQABALACAGIAGADIAFAAQAKAAANgDIAAgSIgBgPQAAgTACgOQABgIAIAAQADAAADACQADADgBADIgBAhIAAARIAAATIAAAGIAAAGQABAEgDACQgDADgDAAQgHAAgCgJg");
	this.shape.setTransform(16.7,0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AAVAqIgDgTIgBgTIABgGIAAgJQAAgSgHgBQgKAAgHAMQgIALgFAOIgBAIIAAAJIAAAIIABAIQAAAEgCADQgDACgEAAQgDAAgDgCQgCgDAAgEIgBgIIAAgIIABgYIABgYIAAgIIAAgJQAAgDACgDQADgDADABQAIAAABALIAAAKQAPgUAOAAQAOAAAFANQAEAIAAAQIAAAJIAAAGIACATQACAMAAAHQAAAEgCADQgDABgEAAQgHABgBgJg");
	this.shape_1.setTransform(7.5,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgdAmQgNgMAAgTQAAgVALgQQAMgQATgBQAOAAAJAGQALAFAAANQAAAJgKAHQgEADgOAFIggAQQAFAIAHADQAIADAIAAQAGAAAIgBQAKgDADgFQADgFAEAAQADAAACADQACACAAADQAAAKgPAGQgOAHgMAAQgSAAgNgKgAgRgWQgHAIgDAPIAbgLQAOgIAGgFQgHgIgNAAQgKABgHAIg");
	this.shape_2.setTransform(-2.2,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgEAzQgCgCAAgEIgCggIgCgdQAAgJgDgGQgGADgHAHIgKALIgEAGIgBANIgBAPIAAAIIABAHQAAADgCADQgDACgEAAQgKAAAAgWIABgQIABgOIAAgOIgBgOQAAgUAJAAQADAAADADQADADAAAEIgBAFIAAAFIAAAJQAFgJAIgIQAJgHAHAAQANAAAEAOQAEgHAHgDQAHgDAIAAQAPAAAFAQQACADACAVIAGAxQABADgDADQgDACgDAAQgIAAgBgIIgDgbIgDgZQgBgGgCgGQgDgIgDAAQgEAAgJAGQgIAFgDADIABAQIACAWQACAOAAAJQAAAEgCACQgDADgEAAQgBAAgDgDg");
	this.shape_3.setTransform(-14.1,0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("AkZh7IIzAAIAAD3IozAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AkZB8IAAj3IIzAAIAAD3g");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAVAuQgMAGgOAAQgMAAgJgGQgJgGgBgMQgEgZAAgSQAAgNADgRQABgJAIAAQAEAAADADQADADAAAEIgCAOIgBAPIABAZQABAMACAHIAGADIAGAAQALAAAPgEIAAgTIAAgRQAAgVABgPQABgJAJAAQAEAAADACQADADgBAEIgBAlIAAATIAAAVIAAAGIAAAHQAAAEgCACQgDADgEAAQgIAAgCgJg");
	this.shape_6.setTransform(18.3,0.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAXAvIgDgWIgBgVIAAgHIABgJQAAgVgIAAQgLAAgIANQgJALgFAQIgBAKIAAAJIAAAJIABAJQAAAEgDADQgCACgFAAQgEAAgCgCQgDgDAAgEIgBgJIAAgJIABgaIACgbIgBgJIAAgJQAAgFADgCQACgDAEAAQAJAAABANIAAALQARgWAPAAQAPAAAGAOQAFAJAAASIAAAKIAAAHQAAAIACAMQACANAAAIQAAAEgDADQgDADgEAAQgIAAgBgJg");
	this.shape_7.setTransform(8.2,0.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AggApQgPgMAAgWQAAgXAMgRQAOgSAVAAQAPAAAKAFQANAHAAAOQAAAJgMAIQgEAEgQAFIgjASQAFAIAJAEQAIAEAJAAQAHAAAIgDQALgDAEgFQADgFAEAAQADAAADACQADADAAADQAAALgRAIQgPAGgOAAQgVAAgNgLgAgTgZQgHAJgEARIAdgMQAQgJAIgGQgJgIgOAAQgLAAgIAJg");
	this.shape_8.setTransform(-2.4,0.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgEA5QgDgDAAgFQAAgLgCgXQgDgVAAgMQAAgKgCgGQgHADgHAHIgMANIgEAGIgCAPIgBARIABAIIABAIQAAAEgDACQgDADgEAAQgLAAAAgZIACgRIABgPIgBgQIgBgPQAAgWAKAAQADAAAEADQADAEAAADIgBAGIAAAGIAAAKQAFgKAKgJQAJgIAHAAQAPAAAEAPQAGgHAHgDQAHgEAKAAQAQAAAGARIAEAcIAHA1QAAAEgDADQgDACgEAAQgIAAgBgIQgCgLgCgTIgDgcIgDgNQgEgJgEAAQgDAAgKAGQgJAGgDADIAAASIADAYQACAQAAAJQAAAFgCADQgDACgEAAQgCAAgDgCg");
	this.shape_9.setTransform(-15.6,0.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(2,1,1).p("AE3CJIptAAIAAkRIJtAAg");
	this.shape_10.setTransform(0,0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00FFFF").s().p("Ak2CJIAAkRIJsAAIAAERg");
	this.shape_11.setTransform(0,0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AATApQgLAGgMAAQgMAAgHgFQgJgGgBgKQgEgYABgQQgBgMADgPQABgIAHAAQAEAAADADQACACAAAEIgBANIgBANIABAXQABALACAGIAGADIAFAAQAKAAANgDIAAgSIgBgPQAAgTACgOQABgIAIAAQADAAADACQADADgBADIgBAhIAAARIAAATIAAAGIAAAGQABAEgDACQgDADgDAAQgHAAgCgJg");
	this.shape_12.setTransform(16.7,1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAVArIgDgUIgBgTIABgHIAAgHQAAgUgHAAQgKAAgHAMQgIALgFAOIgBAJIAAAIIAAAIIABAIQAAAEgCACQgDACgEAAQgDAAgDgCQgCgCAAgEIgBgIIAAgIIABgYIABgYIAAgJIAAgIQAAgEACgCQADgCADgBQAIAAABAMIAAAKQAPgTAOgBQAOAAAFANQAEAIAAARIAAAIIAAAGIACAUQACALAAAHQAAAEgCACQgDACgEABQgHgBgBgHg");
	this.shape_13.setTransform(7.5,0.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgdAlQgNgLAAgTQAAgVALgPQAMgSATABQAOAAAJAEQALAHAAAMQAAAJgKAHQgEADgOAFIggAQQAFAHAHAEQAIAEAIAAQAGgBAIgCQAKgDADgEQADgFAEAAQADAAACACQACACAAAEQAAAJgPAIQgOAFgMAAQgSAAgNgKgAgRgWQgHAIgDAPIAbgLQAOgIAGgGQgHgGgNgBQgKAAgHAJg");
	this.shape_14.setTransform(-2.2,0.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgEAzQgCgCAAgEIgCggIgCgdQAAgJgDgGQgGADgHAHIgKALIgEAGIgBANIgBAPIAAAIIABAHQAAADgCADQgDACgEAAQgKAAAAgWIABgQIABgOIAAgOIgBgOQAAgUAJAAQADAAADADQADADAAAEIgBAFIAAAFIAAAJQAFgJAIgIQAJgHAHAAQANAAAEAOQAEgHAHgDQAHgDAIAAQAPAAAFAQQACADACAVIAGAxQABADgDADQgDACgDAAQgIAAgBgIIgDgbIgDgZQgBgGgCgGQgDgIgDAAQgEAAgJAGQgIAFgDADIABAQIACAWQACAOAAAJQAAAEgCACQgDADgEAAQgBAAgDgDg");
	this.shape_15.setTransform(-14.1,1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(2,1,1).p("AEah7IAAD3IozAAIAAj3g");

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0066CC").s().p("AkZB8IAAj3IIzAAIAAD3g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.2,-16.9,58.6,30.5);


(lib.general_buttoncolor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{resetRed:1});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_8 = function() {
		this.gotoAndPlay("resetRed");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(2));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#D5FFD7","#61EF01","#1DA400","#004A00"],[0,0.345,0.635,0.937],0.4,7,0,0.4,7,18.8).s().p("AAAB2QgvAAgjgjQgjgjAAgwQAAgvAjgjQAjgjAvAAQAwAAAjAjQAjAjAAAvQAAAwgjAjQgjAjgwAAIAAAAg");
	this.shape.setTransform(11.9,11.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","#EC0000","#9D0000","#480000"],[0,0.345,0.635,0.937],0.4,7,0,0.4,7,18.8).s().p("AAAB2QgvAAgjgjQgjgjAAgwQAAgvAjgjQAjgjAvAAQAwAAAjAjQAjAjAAAvQAAAwgjAjQgjAjgwAAIAAAAg");
	this.shape_1.setTransform(11.9,11.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},8).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23.7,23.6);


(lib.frb_rightOut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("AgpAbIAHgGQALALARAAQAPAAAMgLQALgMAAgPQAAgPgLgNIAGgHQAPAOAAAVQAAATgPAOQgPAPgSAAQgVAAgOgPg");
	this.shape.setTransform(4.3,4.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,8.5,8.5);


(lib.frb_rightIn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D4D0D8").s().p("AghAWIAIgHQAIAJAMgBQALABAIgJQAJgJAAgLQABgLgJgJIAHgIQAMANAAAPQAAAPgMAMQgMAMgPAAQgRAAgLgMg");
	this.shape.setTransform(3.4,3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,6.8,6.8);


(lib.frb_leftOut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Symbol_22:0});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("AgpAHQAAgTAOgPQAPgOATAAQAUAAAPAPIgHAHQgNgMgPAAQgPAAgLAMQgMALAAAPQAAARAMALIgHAHQgPgOAAgVg");
	this.shape.setTransform(4.3,4.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,8.6,8.6);


(lib.frb_leftIn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Symbol_23:0});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D4D0D8").s().p("AghAFQAAgOAMgMQAMgMAOAAQAQAAANAMIgHAHQgJgJgNAAQgKAAgJAJQgJAJAAAKQAAANAJAJIgHAHQgMgLAAgSg");
	this.shape.setTransform(3.4,3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,6.9,6.9);


(lib.frb_hitArea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("AhABAIAAiAICAAAIAACAg");
	this.shape.setTransform(6.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13,13);


(lib.frb_dot_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AgMAOQgHgGAAgIQAAgGAHgGQAGgHAGAAQAIAAAGAHQAFAGAAAGQAAAIgFAGQgGAFgIAAQgGAAgGgFg");
	this.shape.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4,4);


(lib.frb_dot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMAOQgHgGAAgIQAAgGAHgGQAGgHAGAAQAIAAAGAHQAFAGAAAGQAAAIgFAGQgGAFgIAAQgGAAgGgFg");
	this.shape.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4,4);


(lib.frb_background_pressed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAVQgJgJAAgMQAAgLAJgJQAJgJALAAQAMAAAJAJQAJAKAAAKQgBAMgIAJQgJAJgMAAQgLAAgJgJg");
	this.shape.setTransform(3,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,6,6);


(lib.frb_background_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAVQgJgJAAgMQAAgLAJgJQAJgJALAAQAMAAAJAJQAJAKAAAKQgBAMgIAJQgJAJgMAAQgLAAgJgJg");
	this.shape.setTransform(3,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,6,6);


(lib.frb_background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUAVQgJgJAAgMQAAgLAJgJQAJgJALAAQAMAAAJAJQAJAKAAAKQgBAMgIAJQgJAJgMAAQgLAAgJgJg");
	this.shape.setTransform(3,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,6,6);


(lib.fcb_rightOut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("AhABAIAAgKIB2AAIAAh2IAKAAIAACAg");
	this.shape.setTransform(6.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13,13);


(lib.fcb_rightIn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D4D0D8").s().p("Ag2A2IAAgKIBiAAIAAhiIAKAAIAABsg");
	this.shape.setTransform(6.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,11,11);


(lib.fcb_leftOut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("Ag7A7IAAh2IB2AAIAAAKIhsAAIAABsg");
	this.shape.setTransform(6,6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,12,12);


(lib.fcb_leftIn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D4D0D8").s().p("AgxAxIAAhiIBiAAIAAAKIhYAAIAABYg");
	this.shape.setTransform(6,6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,10,10);


(lib.fcb_hitArea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("AhABAIAAiAICAAAIAACAg");
	this.shape.setTransform(6.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13,13);


(lib.fcb_check_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("AgLAiIAAAAIgVgWIgCgDIABgRQgBgGAGAAIAEACIAQAQIAggjIAFgCQAGAAAAAGIAAARIgCAEIgmAmIgEACg");
	this.shape.setTransform(3.6,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7.1,7);


(lib.fcb_check = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgLAiIAAAAIgVgWIgCgDIABgRQgBgGAGAAIAEACIAQAQIAggjIAFgCQAGAAAAAGIAAARIgCAEIgmAmIgEACg");
	this.shape.setTransform(3.6,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7.1,7);


(lib.fcb_background_pressed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgsAtIAAhZIBZAAIAABZg");
	this.shape.setTransform(4.5,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,9,9);


(lib.fcb_background_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgsAtIAAhZIBZAAIAABZg");
	this.shape.setTransform(4.5,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,9,9);


(lib.fcb_background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsAtIAAhZIBZAAIAABZg");
	this.shape.setTransform(4.5,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,9,9);


(lib.Copyright = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAbAHIgDgKIgEAKQgEAIgDAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQgBgBAAgBIgCgIIgBgHQgGASgCAAIgDgBIgBgCIABgCQADgFABgFIACgNQABAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAEAAACAJIADAKIACgGIADgJQADgEACAAQAAAAABAAQAAAAAAAAQABABAAAAQAAABAAAAIAEAKIACAGIACAIIABACIgBACIgCABQgDAAgDgJgAgTANIgBgIIAAgGIgBgHIgFAAIgGAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAABgBQAAAAABAAIAFABIAEAAIAPAAIADgBIAEAAQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAABAAAAQAAAAAAABQAAAAgBAAIgOAAIAAAIIABAFIABAEIABAEIgCACIgCABQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAgBAAAAg");
	this.shape.setTransform(57.3,-0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgLAYQgGgDgBgEIABgDQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAIAEACIAEABIAFABIAFgBQADgBAAgDQABgGgJgCIgCgBIgIgDQgEAAAAgFQAAgKAIgEIAHgCIAIgDIAEgBIADABIABAEIABADIAAAEIgBADIgCABQgBAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAIgCgFIgJADQgFADgBAEIADABQAIACAFACQAHADAAAJQAAAHgGAEQgFADgGAAQgFAAgGgCg");
	this.shape_1.setTransform(51,2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgLATQgHgGABgKQAAgGAFgKQAHgKAGAAQAEAAAGACQAGACABAEIgBADQgBAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgDgBIgBgBQgDgCgGAAQgCAAgFAIQgDAHAAADQAAAGADAEQAEADAEAAIAGgCIAEgCIACgBIAEABIABADQgBADgGADQgGADgEAAQgHAAgGgFg");
	this.shape_2.setTransform(46.6,2.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgDAfQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAAAIAAgJIAAgIIAAgKIAAgIQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABgBIACgBIACABQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABIAAAIIgBAKIAAAIIABAJQAAAAAAAAQAAABgBAAQAAABAAAAQAAAAgBAAIgBABIgDgBgAgBgXQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAAAgBQABABAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQgBAAAAgBg");
	this.shape_3.setTransform(43.1,1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAKAVIgBgJIgBgKIABgDIAAgDQAAgKgEAAQgFAAgCAFQgEAGgCAGIgBAEIAAAFIAAADIAAAFIgBADIgDABIgDgBIgBgDIAAgFIgBgDIABgMIAAgLIAAgFIAAgEIABgDIAEgBQAEAAAAAFIAAAGQAHgKAGAAQAHAAADAGQACAEAAAJIAAAEIAAACIABAKIABAJIgBADIgDABQgEAAgBgEg");
	this.shape_4.setTransform(39.5,2.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAOAWIgDgDIgIADIgDABQgKABgFgHQgFgFAAgLQAAgJAIgHQAHgIAIAAQAEAAAFACQAGADAAADIgBACIgBAFIAAAJIABAIIACAIIACACIAAABIgBADIgDABIgDgCgAgGgKQgFAGAAAGQAAAGADAEQACAEAFgBQADABADgCIAEgDIgBgPIAAgFIABgEIgDgBIgCgBQgFAAgFAFg");
	this.shape_5.setTransform(34.8,2.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AALAhIgBgLIgBgKIAAgDIAAgEQAAgGgEAAQgFAAgDADIgGAKQAAARgCACQAAABgBABQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAIgBgDIABgBIAAgHIAAgHIAAgeIABgHIgBgFIAAgEQAAAAAAAAQAAgBAAAAQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQAEAAAAAEIABAIIAAAKIAAAJIAAAEQADgFAEgCQACgDAFAAQAHAAADAFQABADABAGIABAJIAAAIIACAKIAAABQAAABAAAAQAAAAAAABQgBAAAAAAQAAABAAAAIgDABQgEAAgBgDg");
	this.shape_6.setTransform(30,1.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgLATQgHgGABgKQAAgGAFgKQAHgKAGAAQAEAAAGACQAGACABAEIgBADQgBAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgDgBIgBgBQgDgCgGAAQgCAAgFAIQgDAHAAADQAAAGADAEQAEADAEAAIAGgCIAEgCIACgBIAEABIABADQgBADgGADQgGADgEAAQgHAAgGgFg");
	this.shape_7.setTransform(25,2.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgOATQgGgGAAgKQAAgKAFgHQAGgJAJAAQAGABAFACQAGADAAAHQAAAEgFADIgKAEIgOAHQACAEAEABQAEADACAAIAIgBQAFgCABgDQABAAAAAAQAAgBABAAQAAAAABAAQAAAAAAAAIADAAIABADQAAAFgIADQgGADgHABQgIgBgGgEgAgIgKQgDAEgCAGIANgFQAGgDAEgDQgEgDgGgBQgEAAgEAFg");
	this.shape_8.setTransform(20.3,2.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAaAgIgCgGIgBgIQgCgHgEgWIgJAYIgDAJIgDAIQgBAEgCAAQgDgBgBgDIgCgEIgBgFIgIgfIgCAHIgFAWIgCAMQgBAEgDAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBgBAAAAIgBgEQAAgHADgLIAFgPIADgOQACgKABgDQACgCADAAQACAAACADQACAEABAMQADAOAFAPQAFgPAEgSIACgGIACgHQABgDADAAQAEAAACAIIACAKQADASADAOIACAHIACAHQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAIgCABQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBgBg");
	this.shape_9.setTransform(13.8,1.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgQAUIAAgdIAAgEIABgFQAAgEADAAQAFAAAAAHQAHgIAKAAQADAAACADQACACAAAGIAAADQgBAFgEAAQgEAAAAgEIAAgDIAAgEQgHABgCADQgEADgDAGIABAWQAAAEgFAAQgEAAAAgEg");
	this.shape_10.setTransform(5.1,2.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAOAWIgDgDIgIADIgDABQgKABgFgHQgFgFAAgLQAAgJAIgHQAHgIAIAAQAEAAAFACQAGADAAADIgBACIgBAFIAAAJIABAIIACAIIACACIAAABIgBADIgDABIgDgCgAgGgKQgFAGAAAGQAAAGADAEQACAEAFgBQADABADgCIAEgDIgBgPIAAgFIABgEIgDgBIgCgBQgFAAgFAFg");
	this.shape_11.setTransform(0.5,2.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgBAZQAAAAgBAAQAAgBAAAAQAAAAAAgBQgBAAAAgBIgBgPIgBgOQAAgFgBgCQgDABgDADIgFAGIgDADIAAAGIgBAHIABAEIAAADQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAAAIgDABQgFAAAAgLIAAgIIABgGIgBgHIAAgHQAAgKAFAAIACACQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAIAAADIgBACIAAAFQADgFAEgDQAFgEADAAQAGAAACAHQACgEADgBQAEgCAEAAQAHAAADAIIACAMIADAYIgBADIgDABQgEAAgBgEIgBgOIgCgLIgBgGQgCgEgCAAIgFADIgGAEIAAAHIABALIABALIgBADIgDACQAAAAAAAAQAAAAAAgBQAAAAAAAAQgBAAAAgBg");
	this.shape_12.setTransform(-5.2,2.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgBAZQAAAAgBAAQAAgBAAAAQAAAAAAgBQgBAAAAgBIgBgPIgBgOQABgFgCgCQgDABgDADIgFAGIgCADIgBAGIgBAHIABAEIABADQAAABgBAAQAAABAAAAQAAAAAAABQgBAAAAAAIgDABQgFAAAAgLIABgIIAAgGIAAgHIgBgHQAAgKAEAAIADACQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAIAAADIgBACIAAAFQADgFAEgDQAFgEADAAQAGAAABAHQADgEADgBQADgCAFAAQAHAAADAIIACAMIADAYIgCADIgCABQgEAAgBgEIgCgOIgBgLIgBgGQgCgEgCAAIgFADIgGAEIAAAHIABALIABALIgBADIgDACQAAAAAAAAQAAAAAAgBQAAAAAAAAQgBAAAAgBg");
	this.shape_13.setTransform(-12.2,2.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAOAWIgDgDIgIADIgDABQgKABgFgHQgFgFAAgLQAAgJAIgHQAHgIAIAAQAEAAAFACQAGADAAADIgBACIgBAFIAAAJIABAIIACAIIACACIAAABIgBADIgDABIgDgCgAgGgKQgFAGAAAGQAAAGADAEQACAEAFgBQADABADgCIAEgDIgBgPIAAgFIABgEIgDgBIgCgBQgFAAgFAFg");
	this.shape_14.setTransform(-18.1,2.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgQAUIAAgdIAAgEIABgFQAAgEADAAQAFAAAAAHQAHgIAKAAQADAAACADQACACAAAGIAAADQgBAFgEAAQgEAAAAgEIAAgDIAAgEQgHABgCADQgEADgDAGIABAWQAAAEgFAAQgEAAAAgEg");
	this.shape_15.setTransform(-22.4,2.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgVAeQgFgGgBgMQABgMAFgKQAFgMAIgIQAHgEAEAAQAEAAAGACQAIAEAAADIgBADIgEABIgCgBQgHgDgEAAQgDgBgCAEIgGAGQgKAOAAAOQABAIACADQACAEAIAAQAGgBAGgFQAGgEACgLQgMABgGAEIgDABQAAgBAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAIgBgDQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQAIgEAXAAIADABIABACQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQgDANgIAJQgJAHgKABQgKgBgGgFg");
	this.shape_16.setTransform(-27.7,1.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgNAhIgBgDIACgJIAKgWQAFgOAHgIIABgBIgVAAIgJgBQgFAAAAgEQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAIAQAAIAPABIAIAAQAFAAAAACQAAADgDADIgEAFQgGAGgFAKIgHAPIgCAKIgEAKQgBABAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgDgBg");
	this.shape_17.setTransform(-36.2,1.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AABAiIgHAAIgFgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQgBgEAIAAIACAAIABAAIAAgHIgBgGIABgPIABgRQgFAFgCAAIgDgBIgBgDQAAgDADgCIAHgGQACgEAEAAQAAAAABAAQAAABABAAQAAABAAAAQAAABAAABIAAADIAAADIAAAEIAAAEIgBAPIgBANIAAAGIABAGIAFAAQAAAAAAAAQABAAAAABQABAAAAAAQAAAAABABIAAADIAAADIgDABg");
	this.shape_18.setTransform(-41,1.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgSAXQgFgKAAgNQAAgMAGgKQAHgMAKAAQAMABAGAJQAGAJAAANQAAARgGAKQgGAJgMAAQgMABgGgMgAgLgRQgEAIAAAJQAAAMAEAHQAEAHAHAAQAIABAEgLQADgIAAgJQAAgMgDgGQgEgGgIAAQgGAAgFAIg");
	this.shape_19.setTransform(-45.9,1.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AANAhIgDgBIgHAAIgFABIgFAAIgFAAIgBAAIgCAAQgDAAgBgDIAAgFQAAgKAGgHQACgDALgFIAHgHQADgEAAgGQAAgDgDgCQgDgCgDAAQgDAAgDADIgGAEIgDACQgFAAAAgEQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAFgFAEgCQAFgDAEAAQAHAAAFAEQAGAEAAAHIgBAIIgEAHQgDACgIAFQgGAFgDADQgFAFABAHIAJgBIALAAIAGABQAEABAAADQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAIgDABIgDAAg");
	this.shape_20.setTransform(-51.3,1.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgeAAQAAgKALgJQALgKALAAQAOAAAHAIQAHAIAAAMQAAAJgJAKQgKALgMAAIAAABQgeAAAAgegAgOgOQgIAGAAAIQAAAMAGAFQAGAEAKAAQAJAAAIgIQAGgIAAgGQAAgJgEgFQgFgGgIAAIgCAAQgKAAgIAHgAgKAJQgGgEAAgFQAAgGAIgFQAGgFAFAAQABAAAAABQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAABAAAAQgBABAAAAQgBAAgBAAIgCgBIgBAAQgDAAgEADQgEACAAADQAAABADACIAFABQABAAAEgCIAEgCIADAAIABADQAAADgEADQgGADgDAAQgFAAgFgDg");
	this.shape_21.setTransform(-57.7,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.3,-7.1,126.6,16.6);


(lib.blank_gr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("Aj9CqIAAlSIH7AAIAAFSg");
	this.shape.setTransform(32.5,17,1.275,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65,34);


(lib.animsharkfin1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0033FF").ss(0.1,1,1).p("AgaALQAFgGAJgBIAGAAQAGABAIgKQAEgEADABQAFABAHgD");
	this.shape.setTransform(0.6,1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AAPAOQgFgUALgZQgngBgCBA");
	this.shape_1.setTransform(0,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AAUgfQgKAZAFAUQgJAMgGgBIgGAAQgIABgFAGQABhAAmABg");
	this.shape_2.setTransform(0,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(10));

	// Layer 5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0033FF").ss(0.1,1,1).p("AAaABQgUAJgfADQAagVAJgEQgGAPAWgCg");
	this.shape_3.setTransform(0.6,1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0099FF").s().p("AAKgMQgGAPAWgCQgUAJgfADQAagVAJgEg");
	this.shape_4.setTransform(0.6,1.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#0033FF").ss(0.1,1,1).p("AAZAFQgUAJgdADAgYAHQAYgTAJgE");
	this.shape_5.setTransform(1.8,1.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0099FF").s().p("AgYAHQAYgTAJgEQAQANAAAIQgUAJgdADg");
	this.shape_6.setTransform(1.8,1.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#0033FF").ss(0.1,1,1).p("AgKgKQA6gIhAAfQASgRgMgGg");
	this.shape_7.setTransform(3,1.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0099FF").s().p("AgKgKQA6gIhAAfQASgRgMgGg");
	this.shape_8.setTransform(3,1.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#0033FF").ss(0.1,1,1).p("AgKgLQA9gThEAwQAMgSgFgLg");
	this.shape_9.setTransform(5.4,0.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0099FF").s().p("AgKgLQA9gThEAwQAMgSgFgLg");
	this.shape_10.setTransform(5.4,0.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#0033FF").ss(0.1,1,1).p("AgUARQARgQgOgLQBOgWhRAxg");
	this.shape_11.setTransform(6.1,0.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0099FF").s().p("AgRgKQBOgWhRAxQARgQgOgLg");
	this.shape_12.setTransform(6.1,0.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#0033FF").ss(0.1,1,1).p("AgVgJQBXgRhWApQAUgXgVgBg");
	this.shape_13.setTransform(7.9,-0.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0099FF").s().p("AgVgJQBXgRhWApQAUgXgVgBg");
	this.shape_14.setTransform(7.9,-0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#0033FF").ss(0.1,1,1).p("AgMALQAzgfgzANQAMACgMAQg");
	this.shape_15.setTransform(9.7,-0.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0099FF").s().p("AgMgHQAzgNgzAfQAMgQgMgCg");
	this.shape_16.setTransform(9.7,-0.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#0033FF").ss(0.1,1,1).p("AgJAJQAogXgnAJQAIADgJALg");
	this.shape_17.setTransform(11,-1.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0099FF").s().p("AgIgFQAngJgoAXQAJgLgIgDg");
	this.shape_18.setTransform(11,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_18},{t:this.shape_17}]},1).to({state:[]},1).wait(1));

	// Layer 6
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#0033FF").ss(0.1,1,1).p("AAFgEIgMAIIAPABg");
	this.shape_19.setTransform(-1,2.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgHAEIAMgIIADAJg");
	this.shape_20.setTransform(-1,2.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#0033FF").ss(0.1,1,1).p("AAGgJIgTAOQAKAKARgLQgPgEAHgJg");
	this.shape_21.setTransform(0.8,1.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgNAFIATgOQgHAJAPAEQgKAGgFAAQgHAAgFgFg");
	this.shape_22.setTransform(0.8,1.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#0033FF").ss(0.1,1,1).p("AgOAQQA4gsgxASQAHAAgOAag");
	this.shape_23.setTransform(4.2,1.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgHgKQAxgSg4AsQAOgagHAAg");
	this.shape_24.setTransform(4.2,1.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#0033FF").ss(0.1,1,1).p("AgKgMQAIACgPAZQBDgmg8ALg");
	this.shape_25.setTransform(6.1,0.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgKgMQA8gLhDAmQAPgZgIgCg");
	this.shape_26.setTransform(6.1,0.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#0033FF").ss(0.1,1,1).p("AgHgIQAGABgKASQAugbgqAIg");
	this.shape_27.setTransform(11.3,-1.5,0.4,0.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgHgIQAqgIguAbQAKgSgGgBg");
	this.shape_28.setTransform(11.3,-1.5,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_20},{t:this.shape_19}]},2).to({state:[{t:this.shape_22},{t:this.shape_21}]},1).to({state:[{t:this.shape_24,p:{x:4.2,y:1.1}},{t:this.shape_23,p:{x:4.2,y:1.1}}]},1).to({state:[{t:this.shape_24,p:{x:4.6,y:1.2}},{t:this.shape_23,p:{x:4.6,y:1.2}}]},1).to({state:[{t:this.shape_26,p:{x:6.1,y:0.6,scaleX:1,scaleY:1}},{t:this.shape_25,p:{x:6.1,y:0.6,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.shape_26,p:{x:8.1,y:-0.1,scaleX:1,scaleY:1}},{t:this.shape_25,p:{x:8.1,y:-0.1,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.shape_26,p:{x:9.8,y:-1.3,scaleX:0.694,scaleY:0.694}},{t:this.shape_25,p:{x:9.8,y:-1.3,scaleX:0.694,scaleY:0.694}}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.1,-4.5,7.5,8.5);


(lib.animH = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AA0BcQgGgEAAgHIAAgbIgBgbIAAgLQgTAAgaAFIgvAJIgCAaIgBAaQAAAGgFAEQgEAFgIAAQgHAAgEgFQgFgEgBgHQAAgLADgZIACgjIABgsIAAguQABgHAEgEQAFgFAHAAQAHAAAFAFQAFAEAAAHIgBAcIAAAbIgCAMIAAANIAvgJQAZgFAUgBIABgsQABgKAGgMQAGgPAJAAQAGAAAGAEQAEAEAAAIIAAADQgCAKAAAGIgBAKIAAALIgCAiIgBAhIACAbIABAbQgBAGgEAFQgFAFgHAAQgHAAgFgFg");
	this.shape.setTransform(0.3,4.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},4).wait(2).to({_off:false},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.7,-15.9,23.4,38.8);


(lib.animD = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AglBiQgOgDgIgGQgIABgEgFQgFgFAAgHIABglIABgkIAAgnIgBgpQAAgGAGgGQAHgIAHAAQAEABAQAHIAXAKQAiAMAZAYQAeAdAAAhQAAAVgKAUQgLASgSANQgUAMgjAAQgJAAgLgCgAgqA9IALAGIAOABQAZAAALgHQALgIAGgLQAHgNAAgNQAAgcgkgWQgKgHgngQg");
	this.shape.setTransform(0.5,4.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},3).wait(1).to({_off:false},0).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.1,-15.9,22.2,38.8);


(lib.anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgLBdQgFgHAAgFQAAgHAFgEQAFgFAGAAQAFAAAGAIQAGAHAAAHQAAAGgFAEQgFAFgGgBQgFABgHgJgAgIA1QgEgEAAgHIgBgOIAAgOIAAgwIABg0QAAgGAEgEQAFgFAEABQAHgBAFAFQAEAEAAAGIAACAQAAAHgEAEQgFAEgHAAQgFAAgEgEg");
	this.shape.setTransform(4.9,20.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},3).wait(2).to({_off:false},0).to({_off:true},3).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10.2,38.9);


(lib.Diagramstatement2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.animH("single",0);
	this.instance.setTransform(51.5,16);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},4).to({alpha:0},5).wait(1));

	// Layer 3
	this.instance_1 = new lib.Worde();
	this.instance_1.setTransform(72.1,19.5,1,1,0,0,0,0,3.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},4).to({alpha:0},5).wait(1));

	// Layer 2
	this.instance_2 = new lib.Wordsoars();
	this.instance_2.setTransform(171.1,20.3,1,1,0,0,0,0,3.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},4).to({alpha:0},5).wait(1));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgXAlQgCgDAAgDIAAgyIAAgGIAAgGQABgFAIgBIAMgBQAHAAAJAGQAKAGAAALQAAAGgDAEQgBADgEACQAFABADAFQAEAFAAAFQAAAHgHAGQgEADgGACQgJAFgRAAQgDAAgDgCgAgMAZQAJAAAIgDQAIgCAAgDQAAgEgFgCQgFgDgDgBIgMAAgAgMgOIAAAKIAHAAQANgBAAgKQAAgDgEgDQgEgEgEAAIgIAAg");
	this.shape.setTransform(175.6,53.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgZAkQgCgCAAgDIAAgLIAAgLIAAglQAAgDACgDQACgDAFAAIAMABIAKADQAUALAAAPQAAAHgEADQgEAFgJADQANAHAGAIQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAgBABQgCACgDAAQgCAAgDgCQgOgOgQgFIAAAPQAAADgCACQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQgDAAgCgCgAgOABIACAAQAMAAAEgBIAFgDIACgEQAAgFgHgFQgFgFgHgBIgGAAg");
	this.shape_1.setTransform(169.2,53.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgVAlQgGgFAAgQIABgRIABgUIAAgFIgBgFQAAgIAHAAIAEACIALgCIAHgBQANAAAHADQAFABAAAFQAAAAAAABQgBABAAAAQAAABAAAAQgBABAAAAQgCADgDAAIgCgBQgIgCgIAAIgFABIgJACIgBATIARgCIAMgBQADAAACACQACACAAADQAAAEgGAAIgMABIgTACIAAAKQAAAKABABIAGABIAHAAIAKAAIACgBIADAAQADAAACACQACABAAAEQAAAFgFABQgFABgOAAQgQAAgEgEg");
	this.shape_2.setTransform(162.9,53.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgJAiQgGgOgHgZIgEgNQgDgJAAgEQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQACgCADAAQAEAAACAEIACAJIAFAQIAHAXIAKgcIAEgMQADgGADgEQACgDADAAQADAAACACQABAAAAABQAAABABAAQAAABAAAAQAAABAAAAIgBAFQgDADgCAGIgDAJIgOAhIgFALQgCAEgCAAQgFAAgCgFg");
	this.shape_3.setTransform(156.3,53.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0000FF").s().p("AgDAjQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBIAAgCIAAgCIAAgHIgBgHIgBgPIgBgSIgDAAQgKAAgHgCQgFgBAAgFQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBQADgCADAAIAIABIAHABIAJAAIAHgBIALABIAMAAQAAAAABAAQABAAAAABQABAAAAAAQABABAAAAQACACAAADQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAIgMgBIgMAAIABAUIABARIAAAFIABAFQAAAEgCADQgCAEgDAAQgBAAgCgCg");
	this.shape_4.setTransform(78.6,53.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0000FF").s().p("AgVAdQgGgHgBgLQAAgOAPgRQAMgPALAAIADABIADAAQADgCACAAQAFAAACAGIABAJIgBAFQgCACgEAAQgFAAgCgEIgCgDIgDAAQgHAAgGAJQgLAMAAALQAAAGADADQAEAEAFAAQADAAAFgCIAHgFIAGgDQADAAACACQACACAAADQAAADgDACQgNALgMAAQgLAAgIgIg");
	this.shape_5.setTransform(72.1,53.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0000FF").s().p("AgVAlQgGgFAAgQIABgRIABgUIAAgFIgBgFQAAgIAHAAIAEACIALgCIAHgBQANAAAHADQAFABAAAFQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQgCADgDAAIgCgBQgIgCgIAAIgFABIgJACIgBATIARgCIAMgBQADAAACACQACACAAADQAAAEgGAAIgMABIgTACIAAAKQAAAKABABIAGABIAHAAIAKAAIACgBIADAAQADAAACACQACABAAAEQAAAFgFABQgFABgOAAQgQAAgEgEg");
	this.shape_6.setTransform(65.9,53.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0000FF").s().p("AgUAhQgKgHAAgKQAAgHAHAAQAHAAAAAHQAAADAFAEQAFADAEAAQACAAAAgHIAAgOIABgaIAAgEIgBAAIgEAAIgGAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBgBQgCgBAAgDQAAgHAJAAIAFAAIADAAIAJAAIAJAAQANAAAAAHQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgCACgDAAIgDAAIgDAAIgDAAIgBAEQAAAggEAQQgEANgIAAQgJAAgJgHg");
	this.shape_7.setTransform(59.4,53.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0000FF").s().p("AgXAkQgCgCAAgDIAAgxIAAgHIAAgHQABgEAIgBIAMgBQAHAAAJAFQAKAIAAAKQAAAGgDADQgBADgEADQAFACADAEQAEAGAAAFQAAAGgHAGQgEAEgGACQgJAEgRAAQgDAAgDgDgAgMAaQAJgBAIgDQAIgCAAgDQAAgEgFgDQgFgCgDAAIgMgBgAgMgPIAAAKIAHABQANgBAAgKQAAgDgEgEQgEgDgEAAIgIAAg");
	this.shape_8.setTransform(53,53.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0000FF").s().p("AgSAhQgNgKAAgXIAAgGIABgHIAAgHIAAgFIABgHQACgFADAAQADAAACACQACACAAADIAAAIIAAAJIAAAHIgBAGQAAAGACAGQADAHAEADQACACAHAAQALABAFgXQACgJAAgVIABgFQACgEAEAAQAEAAACADQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAATgCALQgCAOgJAMQgDAEgFADQgHAFgEAAQgMgBgGgEg");
	this.shape_9.setTransform(46,53.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0000FF").s().p("AgZAfQgGgEAAgGQAAgDACgCQACgDADAAQAEAAADAFQACAGAKAAQAHAAAHgEQAJgDAAgFQAAgGgGgCIgMgCQgIAAgHgCQgJgDAAgHQAAgKAKgIQAKgIAKAAQAFAAAHACQAJADAAAEQAAAAAAABQgBABAAAAQAAABAAAAQgBABAAAAQgCACgDAAIgHgBIgHgBQgGAAgEADQgGADAAAEQAAAAAAABQAAAAABABQAAAAAAAAQABABAAAAIAFACIALAAQALABAGAFQAHAEAAALQAAAMgOAHQgLAFgMAAQgNAAgHgGg");
	this.shape_10.setTransform(38.9,53.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(10));

	// Layer 1
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(5,1,1).p("AkHAZIAAkHAkHDwIAAjXAyzAZIOqAAAS0AZI27AA");
	this.shape_11.setTransform(120.4,38.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,0,245.8,65.1);


(lib.Diagramstatement1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.animD("single",0);
	this.instance.setTransform(28.6,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},5).to({alpha:1},4).wait(1));

	// Layer 3
	this.instance_1 = new lib.Wordoog();
	this.instance_1.setTransform(57.2,16.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},5).to({alpha:1},4).wait(1));

	// Layer 2
	this.instance_2 = new lib.Wordwindsurfs();
	this.instance_2.setTransform(168.1,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:0},5).to({alpha:1},4).wait(1));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgXAkQgCgCAAgDIAAgxIAAgHIAAgHQABgEAIgBIAMgBQAHAAAJAFQAKAIAAAKQAAAGgDADQgBADgEADQAFACADAEQAEAGAAAFQAAAGgHAGQgEAEgGACQgJAEgRAAQgDAAgDgDgAgMAaQAJgBAIgDQAIgCAAgDQAAgEgFgDQgFgCgDAAIgMgBgAgMgPIAAAKIAHABQANgBAAgKQAAgDgEgEQgEgDgEAAIgIAAg");
	this.shape.setTransform(172.2,49.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgZAkQgCgCAAgDIAAgLIAAgLIAAglQAAgDACgDQACgDAFAAIAMABIAKADQAUALAAAPQAAAHgEADQgEAFgJADQANAHAGAIQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAgBABQgCACgDAAQgCAAgDgCQgOgOgQgFIAAAPQAAADgCACQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQgDAAgCgCgAgOABIACAAQAMAAAEgBIAFgDIACgEQAAgFgHgFQgFgFgHgBIgGAAg");
	this.shape_1.setTransform(165.8,49.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgVAlQgGgFAAgQIABgRIABgUIAAgFIgBgFQAAgIAHAAIAEACIALgCIAHgBQANAAAHADQAFABAAAFQAAAAAAABQgBABAAAAQAAABAAAAQgBABAAAAQgCADgDAAIgCgBQgIgCgIAAIgFABIgJACIgBATIARgCIAMgBQADAAACACQACACAAADQAAAEgGAAIgMABIgTACIAAAKQAAAKABABIAGABIAHAAIAKAAIACgBIADAAQADAAACACQACABAAAEQAAAFgFABQgFABgOAAQgQAAgEgEg");
	this.shape_2.setTransform(159.5,49.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgJAiQgGgOgHgZIgEgNQgDgJAAgEQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABgBQACgCADAAQAEAAACAGIACAIIAFAQIAHAWIAKgbIAEgLQADgHADgFQACgCADAAQADAAACACQABABAAAAQABABAAAAQAAABAAAAQAAABAAABIgBADQgDAEgCAGIgDAJIgOAgIgFAMQgCAEgCAAQgFAAgCgFg");
	this.shape_3.setTransform(152.9,50);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0000FF").s().p("AgDAjQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIAAgCIAAgCIAAgHIgBgHIgBgPIgBgSIgDAAQgKAAgHgCQgFgBAAgFQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBQADgCADAAIAIABIAHABIAJAAIAHgBIALABIAMAAQAAAAABAAQABABAAAAQABAAAAAAQABABAAAAQACACAAADQAAABAAAAQAAABAAABQAAAAgBABQAAAAgBABQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAIgMgBIgMAAIABAUIABARIAAAFIABAFQAAAEgCADQgCAEgDAAQgBAAgCgCg");
	this.shape_4.setTransform(68.5,50);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0000FF").s().p("AgUAdQgIgHAAgLQABgOAOgRQAMgPAKAAIAFABIACAAQADgCADAAQAEAAACAGIABAJIgCAFQgBACgEAAQgFAAgCgEIgBgDIgFAAQgGAAgFAJQgMAMAAALQAAAGAEADQADAEAFAAQADAAAFgCIAIgFIAFgDQADAAACACQACACAAADQAAADgDACQgNALgMAAQgLAAgHgIg");
	this.shape_5.setTransform(62,50);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0000FF").s().p("AgVAlQgGgFAAgQIABgRIABgUIAAgFIgBgFQAAgIAHAAIAEACIALgCIAHgBQANAAAHADQAFABAAAFQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQgCADgDAAIgCgBQgIgCgIAAIgFABIgJACIgBATIARgCIAMgBQADAAACACQACACAAADQAAAEgGAAIgMABIgTACIAAAKQAAAKABABIAGABIAHAAIAKAAIACgBIADAAQADAAACACQACABAAAEQAAAFgFABQgFABgOAAQgQAAgEgEg");
	this.shape_6.setTransform(55.8,50);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0000FF").s().p("AgUAhQgKgHAAgJQAAgIAHAAQAHAAAAAIQAAADAFADQAFADAEAAQACAAAAgHIAAgPIABgaIAAgCIgBAAIgEAAIgGAAQgBAAAAgBQgBAAgBAAQAAAAgBgBQAAAAgBAAQgCgDAAgDQAAgGAJAAIAFAAIADAAIAJAAIAJgBQANAAAAAIQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBABQgCACgDAAIgDAAIgDgBIgDAAIgBADQAAAigEAPQgEAMgIAAQgJABgJgHg");
	this.shape_7.setTransform(49.3,50.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0000FF").s().p("AgXAlQgCgDAAgDIAAgyIAAgGIAAgGQABgFAIgBIAMgBQAHAAAJAGQAKAGAAALQAAAFgDAFQgBADgEACQAFABADAFQAEAFAAAFQAAAHgHAGQgEAEgGABQgJAFgRAAQgDAAgDgCgAgMAZQAJAAAIgDQAIgCAAgDQAAgEgFgCQgFgDgDgBIgMAAgAgMgOIAAAKIAHAAQANgBAAgKQAAgEgEgCQgEgEgEAAIgIAAg");
	this.shape_8.setTransform(42.9,50);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0000FF").s().p("AgSAhQgNgKAAgXIAAgHIAAgGIAAgHIAAgFIACgHQACgEADgBQADABACABQACACAAADIAAAIIAAAJIAAAGIAAAHQAAAFACAHQABAIAFADQACABAHAAQALAAAFgVQACgKAAgVIABgFQACgDAFgBQADABABACQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAATgCALQgCAOgJALQgDAGgFACQgGAEgFABQgNAAgFgFg");
	this.shape_9.setTransform(35.9,50.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0000FF").s().p("AgZAfQgGgEAAgGQAAgDACgCQACgDADAAQAEAAADAFQACAGAKAAQAHAAAHgEQAJgDAAgFQAAgGgGgCIgMgCQgIAAgHgCQgJgDAAgHQAAgKAKgIQAKgIAKAAQAFAAAHACQAJADAAAEQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQgCACgDAAIgHgBIgHgBQgGAAgEADQgGADAAAEQAAAAAAABQAAAAABABQAAAAAAAAQABABAAAAIAFACIALAAQALABAGAFQAHAEAAALQAAAMgOAHQgLAFgMAAQgNAAgHgGg");
	this.shape_10.setTransform(28.8,50.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(10));

	// Layer 1
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(5,1,1).p("AkHAZIAAkIAkHDwIAAjXAyzAZIOqAAAS0AZI27AA");
	this.shape_11.setTransform(120.4,36.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,0,245.8,63.1);


(lib.goNext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0.961)","rgba(255,255,255,0)","#2B2B2B"],[0,1,1],0,0.1,0,0,0.1,11.3).s().p("AhLAqQghgSACgYQgCgXAhgRQAggTArAAQAsAAAgATQAfARAAAXQAAAYgfASQggASgsAAQgrAAgggSg");
	this.shape.setTransform(22.8,8.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.502)").s().p("AhThcICoBdIioBcg");
	this.shape_1.setTransform(25.1,20.4);

	this.blinker = new lib.general_buttoncolor();
	this.blinker.setTransform(23.4,20.1,1.5,1.5,0,0,0,11.9,11.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["rgba(255,255,255,0.961)","rgba(255,255,255,0)","#2B2B2B"],[0,1,1],0,0.1,0,0,0.1,14.8).s().p("AhiA3QgrgXACggQgCgfArgWQApgYA5AAQA5AAAqAYQAqAWAAAfQAAAggqAXQgqAXg5AAQg5AAgpgXg");
	this.shape_2.setTransform(23.4,8.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(0,0,0,0.502)").ss(1,1,1,3,true).p("AAACxQhIAAg0g0Qg0g1AAhIQAAhHA0g1QA0g0BIAAQBJAAA0A0QA0A1AABHQAABIg0A1Qg0A0hJAAg");
	this.shape_3.setTransform(23.3,20.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["rgba(103,103,103,0.839)","rgba(134,134,134,0)"],[0.678,0.918],-0.8,0,0,-0.8,0,24.9).s().p("AisCkQhFhEAAhgQAAhgBFhDQBEhFBhAAQBfAABBAwQBCAwAVCqQAVCskMAbQhhAAhEhFgAgHCQQBEAAAzgwIABAAIADgEQA0g0AAhHQAAhJg0g0IgFgFIgBgBQgyguhDAAIAAAAIgBAAIAAAAIgBAAQhEAAgyAuIgBABIgCACIgBABIAAAAIgCACQg0A0AABJQAABHA0A0IACACIABABQAzAxBHAAIAAAAIAAAAIAAAAIAAAAQhHAAgzgxIgBgBIgCgCQg0g0AAhHQAAhJA0g0IACgCIAAAAIABgBIACgCIABgBQAyguBEAAIABAAIAAAAIABAAIAAAAQBDAAAyAuIABABIAFAFQA0A0AABJQAABHg0A0IgDAEIgBAAQgzAwhEAAIAAAAIgBAAIABAAIAAAAg");
	this.shape_4.setTransform(24.2,23.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.blinker},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.blinker},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.blinker},{t:this.shape_1},{t:this.shape}]},2).wait(1));

	// Layer 2
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#33FFFF").s().p("AioCqQhGhHAAhjQAAhiBGhGQBGhHBiAAQBjAABGBHQBHBGgBBiQABBjhHBHQhGBGhjAAQhiAAhGhGg");
	this.shape_5.setTransform(24.4,21.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0099FF").s().p("AioCqQhGhHAAhjQAAhiBGhGQBGhHBiAAQBjAABGBHQBHBGgBBiQABBjhHBHQhGBGhjAAQhiAAhGhGg");
	this.shape_6.setTransform(24.4,21.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48.5,46.7);


(lib.frb_background_pressed_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//var component = _parent._parent;
		////::: don't delete the above
		//
		////::: SKIN ELEMENT REGISTRATION
		///*      To add styleFormat properties to your skins :
		//   1) Break up your skin into individual movie clips (skinElements)
		//   2) add a registerSkinElement line of code for each skinElement
		//
		//component.registerSkinElement(skinElement, propertyName)
		//// makes the skinElement Listen to the propertyName specified (eg: "background")
		//
		//																	  n*/
		//component.registerSkinElement(background_mc, "backgroundDisabled");
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin element
	this.background_mc = new lib.frb_background_pressed();
	this.background_mc.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,2,6,6);


(lib.frb_background_disabled_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//var component = _parent._parent;
		////::: don't delete the above
		//
		////::: SKIN ELEMENT REGISTRATION
		///*      To add styleFormat properties to your skins :
		//   1) Break up your skin into individual movie clips (skinElements)
		//   2) add a registerSkinElement line of code for each skinElement
		//
		//component.registerSkinElement(skinElement, propertyName)
		//// makes the skinElement Listen to the propertyName specified (eg: "background")
		//
		//																	  n*/
		//component.registerSkinElement(background_mc, "backgroundDisabled");
		//
		//
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin element
	this.background_mc = new lib.frb_background_disabled();
	this.background_mc.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,2,6,6);


(lib.frb_background_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//var component = _parent._parent;
		////::: don't delete the above
		//
		////::: SKIN ELEMENT REGISTRATION
		///*      To add styleFormat properties to your skins :
		//   1) Break up your skin into individual movie clips (skinElements)
		//   2) add a registerSkinElement line of code for each skinElement
		//
		//component.registerSkinElement(skinElement, propertyName)
		//// makes the skinElement Listen to the propertyName specified (eg: "background")
		//
		//																	  n*/
		//component.registerSkinElement(background_mc, "background");
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin element
	this.background_mc = new lib.frb_background();
	this.background_mc.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,2,6,6);


(lib.frb_frame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//var component = _parent._parent;
		////::: don't delete the above
		//
		////::: SKIN ELEMENT REGISTRATION
		///*      To add styleFormat properties to your skins :
		//   1) Break up your skin into individual movie clips (skinElements)
		//   2) add a registerSkinElement line of code for each skinElement
		//
		//component.registerSkinElement(skinElement, propertyName)
		//// makes the skinElement Listen to the propertyName specified (eg: "background")
		//
		//																	  n*/
		//component.registerSkinElement(shadow_mc, "shadow");
		//component.registerSkinElement(darkshadow_mc, "darkshadow");
		//component.registerSkinElement(highlight_mc, "highlight");
		//component.registerSkinElement(highlight3D_mc, "highlight3D");
		//
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin elements
	this.highlight3D_mc = new lib.frb_rightOut();
	this.highlight3D_mc.setTransform(1.5,1.5);

	this.highlight_mc = new lib.frb_rightIn();
	this.highlight_mc.setTransform(2.2,2.2);

	this.shadow_mc = new lib.frb_leftIn();
	this.shadow_mc.setTransform(1,1);

	this.darkshadow_mc = new lib.frb_leftOut();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.darkshadow_mc},{t:this.shadow_mc},{t:this.highlight_mc},{t:this.highlight3D_mc}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10,10);


(lib.frb_dot_disabled_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//var component = _parent._parent;
		////::: don't delete the above
		//
		////::: SKIN ELEMENT REGISTRATION
		///*      To add styleFormat properties to your skins :
		//   1) Break up your skin into individual movie clips (skinElements)
		//   2) add a registerSkinElement line of code for each skinElement
		//
		//component.registerSkinElement(skinElement, propertyName)
		//// makes the skinElement Listen to the propertyName specified (eg: "background")
		//
		//																	  n*/
		//component.registerSkinElement(disabled_mc, "foregroundDisabled");
		//
		//
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin element
	this.disabled_mc = new lib.frb_dot_disabled();
	this.disabled_mc.setTransform(3,3);

	this.timeline.addTween(cjs.Tween.get(this.disabled_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,4,4);


(lib.frb_dot_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//var component = _parent._parent;
		////::: don't delete the above
		//
		////::: SKIN ELEMENT REGISTRATION
		///*      To add styleFormat properties to your skins :
		//   1) Break up your skin into individual movie clips (skinElements)
		//   2) add a registerSkinElement line of code for each skinElement
		//
		//component.registerSkinElement(skinElement, propertyName)
		//// makes the skinElement Listen to the propertyName specified (eg: "background")
		//
		//																	  n*/
		//component.registerSkinElement(dot_mc, "radioDot");
		//
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin elements
	this.dot_mc = new lib.frb_dot();
	this.dot_mc.setTransform(3,3);

	this.timeline.addTween(cjs.Tween.get(this.dot_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,4,4);


(lib.fcb_background_pressed_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//var component = _parent._parent;
		////::: don't delete the above
		//
		////::: SKIN ELEMENT REGISTRATION
		///*      To add styleFormat properties to your skins :
		//   1) Break up your skin into individual movie clips (skinElements)
		//   2) add a registerSkinElement line of code for each skinElement
		//
		//component.registerSkinElement(skinElement, propertyName)
		//// makes the skinElement Listen to the propertyName specified (eg: "background")
		//
		//																		  n*/
		//component.registerSkinElement(background_mc, "backgroundDisabled");
		//
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin element
	this.background_mc = new lib.fcb_background_pressed();
	this.background_mc.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,2,9,9);


(lib.fcb_background_disabled_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//var component = _parent._parent;
		////::: don't delete the above
		//
		////::: SKIN ELEMENT REGISTRATION
		///*      To add styleFormat properties to your skins :
		//   1) Break up your skin into individual movie clips (skinElements)
		//   2) add a registerSkinElement line of code for each skinElement
		//
		//component.registerSkinElement(skinElement, propertyName)
		//// makes the skinElement Listen to the propertyName specified (eg: "background")
		//
		//																		  n*/
		//
		//component.registerSkinElement(background_mc, "backgroundDisabled");
		//
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin element
	this.background_mc = new lib.fcb_background_disabled();
	this.background_mc.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,2,9,9);


(lib.fcb_background_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//var component = _parent._parent;
		////::: don't delete the above
		//
		////::: SKIN ELEMENT REGISTRATION
		///*      To add styleFormat properties to your skins :
		//   1) Break up your skin into individual movie clips (skinElements)
		//   2) add a registerSkinElement line of code for each skinElement
		//
		//component.registerSkinElement(skinElement, propertyName)
		//// makes the skinElement Listen to the propertyName specified (eg: "background")
		//
		//																		  n*/
		//component.registerSkinElement(background_mc, "background");
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin element
	this.background_mc = new lib.fcb_background();
	this.background_mc.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,2,9,9);


(lib.fcb_frame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//var component = _parent._parent;
		////::: don't delete the above
		//
		////::: SKIN ELEMENT REGISTRATION
		///*      To add styleFormat properties to your skins :
		//   1) Break up your skin into individual movie clips (skinElements)
		//   2) add a registerSkinElement line of code for each skinElement
		//
		//component.registerSkinElement(skinElement, propertyName)
		//// makes the skinElement Listen to the propertyName specified (eg: "background")
		//
		//																		  n*/
		//component.registerSkinElement(shadow_mc, "shadow");
		//component.registerSkinElement(darkshadow_mc, "darkshadow");
		//component.registerSkinElement(highlight_mc, "highlight");
		//component.registerSkinElement(highlight3D_mc, "highlight3D");
		//
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin elements
	this.darkshadow_mc = new lib.fcb_leftOut();

	this.shadow_mc = new lib.fcb_leftIn();

	this.highlight_mc = new lib.fcb_rightIn();

	this.highlight3D_mc = new lib.fcb_rightOut();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.highlight3D_mc},{t:this.highlight_mc},{t:this.shadow_mc},{t:this.darkshadow_mc}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13,13);


(lib.fcb_check_disabled_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//var component = _parent._parent;
		////::: don't delete the above
		//
		////::: SKIN ELEMENT REGISTRATION
		///*      To add styleFormat properties to your skins :
		//   1) Break up your skin into individual movie clips (skinElements)
		//   2) add a registerSkinElement line of code for each skinElement
		//
		//component.registerSkinElement(skinElement, propertyName)
		//// makes the skinElement Listen to the propertyName specified (eg: "background")
		//
		//																		  n*/
		//component.registerSkinElement(check_mc, "foregroundDisabled");
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin element
	this.check_mc = new lib.fcb_check_disabled();
	this.check_mc.setTransform(2.9,3.2);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.9,3.2,7.1,7);


(lib.fcb_check_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//var component = _parent._parent;
		////::: don't delete the above
		//
		////::: SKIN ELEMENT REGISTRATION
		///*      To add styleFormat properties to your skins :
		//   1) Break up your skin into individual movie clips (skinElements)
		//   2) add a registerSkinElement line of code for each skinElement
		//
		//component.registerSkinElement(skinElement, propertyName)
		//// makes the skinElement Listen to the propertyName specified (eg: "background")
		//
		//																		  n*/
		//
		//component.registerSkinElement(check_mc, "check");
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin element
	this.check_mc = new lib.fcb_check();
	this.check_mc.setTransform(2.9,3.2);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.9,3.2,7.1,7);


(lib.blank = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.blank_gr("synched",0);
	this.instance.setTransform(32.6,17,1,1,0,0,0,32.5,17);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,65,34);


(lib.animwindsurfer2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AgThQQgHADgEAAQACgFAFgFQgFABACgIQABgDAEgDQACgCABgJQgEgCACgEQAKANAGgNQAGAMAOgIQAHgCAEgCQgIAJAIAIQAEAFAGABQAEAGgIgBQgCAFABABQAAABABABQALAEAKABQAEAIAAAJQAGAIABALQAAAIABAMQACAKAFAHAgRhEQgBgGAAgHIgBABAALgTQgFACgGABQgFgBgGgBQgIgBgGgBQgIAAgIgGQgJgIgKADQgDAFgIAAQgEgGgDAAQgHAGAAgMQgGgGAJgHQgFgGAFgFQAOgJAEAMQAEAIAEAGQAIAFAOACQANAAANgHQACgBAGgEQAAgBADgBQgBAAgCgBQAAAAAAAAQgBgBgCAAQgIgDgEgHIAAgBQgBgBgBgCQgCgGAAgGAAOg/QgKgHAAgKQgEAJgJgHQgDAFgFAFAAOg/QAAgBABgCQACgEAGACIACABQAAgBAAgCAAZhGQAAgEgBgEQAFACAHAEQgBgEgCgFAAMg6QAAAAABAAIgBAAIAAAAIAAABIABgBAAOg/IAAABQAAABAAAAQgBACgBABAAMg5QgDAEgDABQgBAAAAAAQgBAAgBAAAALgTQAFgCADgGAAAgyQAFAEAGAEAAWAQQAKALALgCQALgCAIgIQAFgLAGgHQADAFAFAKQACAEgFAEQABAKgLAGQgHAFgGAGQAQAFALADQAKADgFAJQACALgPABQgFAAgHgEQAJgBAEgKQgXgBgKgHQACAAACgBQAFgFAEgDAAgA5IgIAGQACgBAVALQAWALADAFQAEAEABAGQACACABACQAAAFgGAGQgGABgOACQgPADAFgMQAPgFgDgMQgLgBgLgCQgNgBgIgJQgOgGAAgOQAAgIAJgPIgBAAIAAAAQALgNAEgGQgGgJAAgHQADgLgIgIAAIAjQAIAPAOAGQABABABAAAAqA4QgGADgEgC");
	this.shape.setTransform(6,1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s().p("AgLAeIgCgBQgOgGgIgPIgBAAIAPgRQAKAJALAAQAJgCAIgIQAFgLAGgJIAIARQACAEgFAEQABAIgLAHIgNAKIgJAIIgCACIgGABIgEgBg");
	this.shape_1.setTransform(10.5,4.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000066").s().p("AAAAAIAAAAIAAAAg");
	this.shape_2.setTransform(6.8,5.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC99").s().p("AAsBaQAPgFgDgMIgWgDQgNgBgIgJQgOgGAAgOQAAgIAJgPQAIAPAOAGIACABIgIAGQACgBAVALQAWALADAFQAEAEABAGIADAEQAAAFgGAGIgUADIgFABQgJAAAEgKgAA+A5QAJgBAEgKQgXgBgKgHIAEgBIAJgIIAbAIQAKADgFAJQACALgPABIgCAAQgEAAgGgEgAAWAAQgGgJAAgJQADgLgIgIQAFgCADgGQgDAGgFACQgFACgGABIgLgCIgOgCQgIAAgIgGQgJgIgKADQgDAFgIAAQgEgGgDAAQgHAGAAgMQgGgGAJgHQgFgGAFgFQAOgJAEAMIAIAOQAIAFAOACQANAAANgHIAIgFIALAIIgLgIIADgCIgDgBIAAAAIgDgBQgIgDgEgHIAAgBIgCgDIAIgKQAJAHAEgJQAAAKAKAHIABgDIAAgDIABAAIAAAAQADAAAEABIgBAAIgCAAIgBAAIAAAAIAAAAQgBAAgBAAQAAAAgBAAQAAAAgBABQAAAAAAABQAAgBAAAAQABgBAAAAQABAAAAAAQABAAABAAIAAAAIAAAAIABAAIACAAIABAAIACABIAAgDIAAAAIgBgIQAFACAHAEIgDgJQALAEAKABQAEAIAAAJQAGAIABALIABAUQACAKAFAHQgGAJgFALQgIAGgLACIgDABQgKAAgIgIgAAGhGQADgBADgEQgDAEgDABIgBAAIgCAAIACAAIAAAAIABAAgAAMhLIABgBIgBAAIACgDIAAgBIAAgBIAAABIAAABIgCADIAAAAIAAABgAAMhMIABAAIgBABgAAMhMIABAAIgBAAgAAMhMg");
	this.shape_3.setTransform(6,3.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF99").s().p("AAAAKQgEAIgJgHIgIAKQgBgGAAgGIgBAAQgGAEgFAAQACgGAFgEQgEAAABgFQABgEAEgDQACgCABgJQgEgBACgFQAKAOAGgOQAIAMAMgIIALgEQgIAJAJAJQADAEAGACQAEAEgIgBQgCAEABACIABABIADAKQgHgFgFgBIABAHIAAAAIAAAEIgCgBQgEgCgDABIgBAAIABAAIgBAAIAAACIgBAEQgKgIAAgJg");
	this.shape_4.setTransform(6.4,-7.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(9));

	// Layer 3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(0.1,1,1).p("AB2CQQA1iqAcinIAUgUQAFCcg3C0IhCBaQgbAZgKgXIAqg8QjsiihbjaQAfA3AlA0QAcAlAfAkQAbAeAdAbQABAAAAABQAbAbAcAZQAfAbAiAbQAQAMARANgABsCbQAYAKgOgV");
	this.shape_5.setTransform(-1.6,2.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("ACdC9QjtilhajXQAeA3AmAzQAbAmAfAkQAbAcAbAdIABABQAbAaAeAaQAfAbAiAaIAhAZQAKAPgIAAQgEAAgHgDg");
	this.shape_6.setTransform(-6.4,-1.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CC3333").s().p("AhLDRIAqg8QAXALgNgWQAzipAcioIAUgUQAECcg2C0IhABaQgOANgKAAQgIAAgFgLg");
	this.shape_7.setTransform(12.7,2.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(9));

	// Layer 5
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(0.1,1,1).p("ACqhTIAGgTIAHABIhAETIgKgNQAAgBABgBIA4jiIAEgPgAByhLQAaAFAaADAA4hXQAdAHAdAFIhEDCIg8g2IgBAAIguhBQgbgQgggwQgOgYgKgSQgKgRgcgyIBhArAg9AAIA1hoQgngLgmgPIgjBCAi2itQCkA+C8AcABtChIg/gqAgPBBIBHiYQgigHgegK");
	this.shape_8.setTransform(-5.3,-2.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CCCCCC").s().p("ABtChIABgCIA4jiIg0gIQgdgFgdgHQgigHgegKQgngLgmgPIhhgrQCkA+C8AdIAAAAIgEAPIAEgPIAAAAIAGgUIAHACIhAESg");
	this.shape_9.setTransform(-5.3,-2.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0000CC").s().p("Ag6AUIA1hoQAfAKAhAIIhGCXg");
	this.shape_10.setTransform(-5.6,-4.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00CC00").s().p("Ag2AAIAihAQAkAOAnAMIg0BnQgZgRgggwg");
	this.shape_11.setTransform(-11.9,-9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFF00").s().p("AgJAMIgmhBIBfArIgjBAIgWgqg");
	this.shape_12.setTransform(-18.8,-14.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("Ag7BMIBDjBIA0AIIg5DhIgBACg");
	this.shape_13.setTransform(5.3,1.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6600CC").s().p("Ag8AxIAAAAIBGiXQAeAGAdAGIhFDBgAg8AxIAAAAIgIARgAg8Axg");
	this.shape_14.setTransform(-0.8,-0.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(0.1,1,1).p("ACqhTIAGgTIAHABIhLETIgKgNQABgBAAgBIBCjiIAFgPgABxhLQAaAFAaADAA2hXQAdAHAeAFIhTDRAhRAXQgZgggXgsQgcg2gZhCIBgArIgrBNAgJhoIhIB/AhWiCQAmAPAnALQAeAKAhAHABiChQgigIghgSIAAgBIgBAAQgfgUgfgfQgZgagYgiAi2itQCjA+C9AcAggBTIBWiq");
	this.shape_15.setTransform(-4.8,-2.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0000CC").s().p("AhDAjIBGiAQAgAKAhAHIhWCqQgZgagYghg");
	this.shape_16.setTransform(-6.2,-3.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00CC00").s().p("Ag6AAIAqhMQAkAOAnAMIhGB/QgYgjgXgqg");
	this.shape_17.setTransform(-11.8,-7.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFF00").s().p("Agvg7IBfAsIgrBLQgag2gahBg");
	this.shape_18.setTransform(-18.4,-13.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AhBBcIAAAAIgBgBIBRjQIA0AIIhCDhIgBACQghgHgggTg");
	this.shape_19.setTransform(5,1.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#6600CC").s().p("AhIA7IBWipQAdAHAeAFIhRDRQghgUgfggg");
	this.shape_20.setTransform(-0.8,-0.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CCCCCC").s().p("ABiChIABgCIBCjiIg0gIQgegFgdgHQghgHgegKQgngLgmgPIhggrQCjA+C9AdIAAAAIgFAPIAFgPIAAAAIAGgUIAHACIhLESg");
	this.shape_21.setTransform(-4.8,-2.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(0.1,1,1).p("ACqhTIAGgTIAHABIhLETIgKgNQABgBAAgBIBCjiIAFgPgABxhLQAaAFAaADAA2hXQAdAHAeAFIhWDZIgBAAQgjgQgfgcIgBABAhbAqQgagkgVgsQAAAAAAgBQgag7gShLQCjA+C9AcAiJgnIAzhbIhggrAhWiCQAmAPAnALQAeAKAhAHAgoBiIgBAAQgbgYgXggIBSiSAAbCPIAAgBABiChQglgFghgNIgBgBAgoBiIBei5");
	this.shape_22.setTransform(-4.8,-2.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0000CC").s().p("AgWBlQgbgYgXggIBQiSQAgAKAhAHIheC5IgBAAIABAAIgBABg");
	this.shape_23.setTransform(-6.7,-2.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFF00").s().p("AgDBCQgZg6gThKIBfArIgxBaIgCgBg");
	this.shape_24.setTransform(-18.4,-13.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00CC00").s().p("Ag/AFIABgBIAzhZQAkAOAnAMIhRCRQgZgjgVgug");
	this.shape_25.setTransform(-12.3,-6.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF0000").s().p("AhDBkIAAgBIBUjYIA0AIIhCDhIgBACQgkgEghgOgAhEBkIABgBIAAABIgBAAg");
	this.shape_26.setTransform(4.9,1.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#6600CC").s().p("AgIByQglgQgfgbIBei5QAdAHAeAFIhUDYIgBAAIABAAIAAABIgBgBg");
	this.shape_27.setTransform(-1.2,0.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(0.1,1,1).p("ACqhTIAGgTIAIABIhMETIgKgNIAAAAQABgBABgBIBCjiIAEgPgABxhLQAaAFAbADAA2hXQAdAHAeAFIheDwQgqgDgjgVQghgUgZgkIBri9QgngLgmgPIhggrQCjA+C9AcAifgJIBJh5AifgJQgThCgFhdQABgCAAgDIAAAAAh0BVQgbgmgQg4Ag6CNIBwjkQghgHgegKABiChQgqAIglgE");
	this.shape_28.setTransform(-4.8,-2.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0000CC").s().p("AhVBDIBpi9QAhAKAhAHIhxDkQghgUgZgkg");
	this.shape_29.setTransform(-7.9,-0.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFF00").s().p("AgvhLIAAgFIAAgBIBfAsIhHB3QgThDgFhag");
	this.shape_30.setTransform(-18.4,-11.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#00CC00").s().p("AhKAMIBJh3QAkAOAnAMIhpC9QgagngRg5g");
	this.shape_31.setTransform(-13.3,-4.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF0000").s().p("AhIB4IBcjwIA1AIIhCDhIgCACQgcAGgbAAIgWgBg");
	this.shape_32.setTransform(4.5,2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#6600CC").s().p("AhVBmIBwjjQAdAGAeAFIhcDwQgsgDgjgVg");
	this.shape_33.setTransform(-2.1,1.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#CCCCCC").s().p("ABiChIAAAAIABgCIBCjiIg0gIQgegFgdgHQghgHgegKQgngLgmgPIhggrQCjA+C9AdIAAAAIgFAPIAFgPIAAAAIAGgUIAHACIhLESg");
	this.shape_34.setTransform(-4.8,-2.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(0.1,1,1).p("ACshcIAGgUIAIACIhMETIgJgNQAAgCABgBIBCjhIAEgPgAB0hUQAaAEAaAEAA5hgQAdAHAeAFIhkEHQgCAAgBAAQg4ALgmgOQgjgQgWgeQgdgogLhGQgNhQALh7IBhAsQAlAOAoAMQAeAJAhAIgAiyAUIBfifAiKCCICEjzAi0i3QCkA+C8AdABlCYQguATgnAIAhRCwICKkQ");
	this.shape_35.setTransform(-5.1,-1.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#0000CC").s().p("AhhBjICCjzQAgAKAhAHIiKEQQgjgQgWgeg");
	this.shape_36.setTransform(-9.2,1.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#00CC00").s().p("AhUAZIBcifQAmAOAnAMIiBDzQgdgogLhGg");
	this.shape_37.setTransform(-14.4,-2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFF00").s().p("AgshlIBeArIhdCgQgNhSAMh5g");
	this.shape_38.setTransform(-18.6,-9.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF0000").s().p("AAXiDIA0AIIhBDhIgCADQgsAUgnAHg");
	this.shape_39.setTransform(4.2,3.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#6600CC").s().p("AhiCEICKkPQAdAGAeAFIhjEHIgCABQgZAEgVAAQgcAAgWgIg");
	this.shape_40.setTransform(-3.4,2.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(0.1,1,1).p("AA2hXQAdAHAeAFQAaAFAbADIAEgPIAAgBIAGgTIAIABIhMETIgKgNIAAAAQABgBABgBIBCjiAi2itIBgArQAmAPAnALIhrC9AifgJQgThCgFhdQABgCAAgDIAAAAAifgJIBJh5AATClQgqgDgjgVQghgUgZgkQgbgmgQg4ACqhTQi9gcijg+AgJhoQAeAKAhAHABiChQgqAIglgEAg6CNIBwjkABxhLIheDw");
	this.shape_41.setTransform(-4.8,-2.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#CCCCCC").s().p("ABiChIAAAAIABgCIBCjiIAFgPIAAAAIAAAAIgFAPIg0gIQgegFgdgHQghgHgegKQgngLgmgPIhggrQCjA+C9AdIAGgUIAHACIhLESg");
	this.shape_42.setTransform(-4.8,-2.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(0.1,1,1).p("AA2hXQAdAHAeAFQAaAFAaADIAFgPIAAgBIAGgTIAHABIhLETIgKgNQABgBAAgBIBCjiAi2itIBgArQAmAPAnALIhSCSQgagkgVgsQAAAAAAgBQgag7gShLgAiJgnIAzhbAgoBiIgBABAgoBiIgBAAQgbgYgXggAAbCPIAAgBIgBAAQgjgQgfgcIBei5ABiChQglgFghgNIgBgBACqhTQi9gcijg+AgJhoQAeAKAhAHABxhLIhWDZ");
	this.shape_43.setTransform(-4.8,-2.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#CCCCCC").s().p("ABiChIABgCIBCjiIAFgPIAAAAIAAAAIgFAPIg0gIQgegFgdgHQghgHgegKQgngLgmgPIhggrQCjA+C9AdIAGgUIAHACIhLESg");
	this.shape_44.setTransform(-4.8,-2.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(0.1,1,1).p("ACqhTIAGgTIAHABIhAETIgKgNQAAgBABgBIA4jiIAEgPgAByhLQAaAFAaADAA4hXQAdAHAdAFIhMDZIgBAAQglgQgfgcIAAABAhUAqQgbgkgWgsQAAAAgBgBQgbg7gVhLQCkA+C8AcAiEgnIAvhbIhhgrAhViCQAmAPAnALQAeAKAiAHAgfBiIAAAAQgcgYgZggIBMiSAAlCPIABgBABtChQgmgFghgNIAAgBAgfBiIBXi5");
	this.shape_45.setTransform(-5.3,-2.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#0000CC").s().p("AgRBlQgcgYgYggIBKiSQAgAKAhAHIhWC5IgBAAIABAAIgBABg");
	this.shape_46.setTransform(-6.8,-2.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#00CC00").s().p("Ag9AFIABgBIAvhZQAkAOAnAMIhKCRQgbgjgWgug");
	this.shape_47.setTransform(-12.5,-6.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFF00").s().p("AAABCQgag6gVhKIBfArIguBaIgCgBg");
	this.shape_48.setTransform(-18.8,-13.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FF0000").s().p("Ag+BkIgBgBIBLjYIA0AIIg4DhIgCACQgjgEghgOgAg/BkIAAgBIABABIgBAAg");
	this.shape_49.setTransform(4.9,1.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#6600CC").s().p("AgDByQglgQgggbIBWi5QAdAHAeAFIhLDYIgBAAIABAAIAAABIgBgBg");
	this.shape_50.setTransform(-1.2,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},2).to({state:[{t:this.shape_21},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_21},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_42},{t:this.shape_32},{t:this.shape_33},{t:this.shape_30},{t:this.shape_31},{t:this.shape_29},{t:this.shape_41}]},1).to({state:[{t:this.shape_44},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_43}]},1).to({state:[{t:this.shape_9},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]},1).wait(1));

	// Layer 4
	this.instance = new lib.staticwake("synched",0);
	this.instance.setTransform(17.5,-2.6,0.648,1.154,0,0,0,3.1,16.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:16.6,scaleX:1.72,scaleY:1.72,y:-2.9},4).to({scaleX:1.34,scaleY:1.21,y:-3},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.7,-23,46.3,49);


(lib.animwindsurfer1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AgMg2QgFACgDAAQABgEAEgDQgDAAABgFQAAgCADgCQACgCAAgGQgCgBABgDQAHAJAEgJQAEAIAJgFQAFgCACgBQgFAGAGAGQACADAEABQADAEgGAAQgBADABABQAAAAAAABAACgjQgBAAgBgBQAAAAAAAAQAAAAgCgBQgFgCgDgEIAAgBQAAgBgBgBQADgEADgDQAFAFADgGQAAAGAGAGQABgBAAgCQABgCAEABIACABQAAgBAAgBQACABABABAAIgnQABgBAAgBQAAgBAAAAIAAAAAgLguQgBgFAAgDAgLguQgBgEAAgFIAAABAAHgMQgDABgEAAQgDAAgEgBQgFgBgEAAQgGAAgFgEQgHgGgGACQgDAEgFAAQgDgEgCgBQgFAFAAgJQgEgEAGgFQgDgEAEgDQAJgGADAIQADAGACAEQAGADAJABQAJAAAJgEQABgBAEgCQAAgBACgBQAAAAABAAQAAAAABAAQACgBACgDIAAAAQAAAAABAAIgBAAAAIgnIAAAAAAIgnIABAAAAHgMQAEgCACgEAAAghQADACAFADAARgwQAAgCgBgDQAEABAFADQgBgDgCgDQAIADAHABQADAFAAAGQAEAFAAAIQAAAGABAIQABAGAEAGQACACAEAHQABADgEACQABAHgIAFQgEADgEAEQgDACgDADQgCABgBABQgEABgDgBQgBAAAAgBQgKgEgGgKIAAAAQAHgJADgEQgEgHAAgEQACgHgGgFAAygBQgEAEgDAHQgGAFgIACQgHABgHgHAAWAnIgFAEQABgBAOAIQAPAHACAEQADADABAEQABABAAACQABADgEAEQgEAAgKACQgKACADgIQAKgEgCgIQgHAAgIgCQgIAAgGgHQgJgEAAgKQAAgFAFgKAAmAgQALADAHADQAHACgEAGQACAHgKABQgEAAgEgDQAFAAADgHQgPgBgHgE");
	this.shape.setTransform(3.7,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s().p("AgHAUIgBAAQgKgFgGgKIAAAAIAKgLQAHAGAHAAQAGgBAGgFQADgIAEgGIAGALQABADgEADQABAFgIAEIgIAHIgGAGIgBABIgEABIgDgBg");
	this.shape_1.setTransform(6.8,3.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("AAeA9QAKgDgCgIIgPgCQgIgBgGgGQgJgFAAgJQAAgGAFgKQAGAKAKAFIABAAIgFAFQABgBAOAHQAPAIACADQADADABAEIABADQABAEgEADIgOADIgEAAQgGAAADgHgAArAnQAFgBADgHQgPgBgHgEIADgBIAGgGIASAGQAHACgEAGQACAIgKAAIgBABQgEAAgDgDgAAPAAQgEgGAAgGQACgIgGgFQAEgBACgEQgCAEgEABQgDACgEAAIgHgBIgJgCQgGAAgFgEQgHgGgGADQgDADgFAAQgDgEgCAAQgFAEAAgIQgEgEAGgFQgDgEAEgEQAJgGADAIIAFAKQAGAEAJABQAJAAAJgFIAFgDIACgCIgCAAIAAAAIgCgBQgFgCgDgFIAAAAIgBgDIAGgHQAFAFADgGQAAAHAGAFIABgCQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAIAAAAIACABIAAAAIACAAIAAgCIADADIgDgDIAAAAIgBgFIAJAEIgDgGIAPADQADAFAAAHQAEAFAAAHIABAOQABAHAEAFQgEAGgDAIQgGADgIACIgCAAQgGAAgGgFgAAIgpIgIgFIAIAFgAADgwIABAAQACAAACgDIABgBIgBAAIABAAIgBABIAAgBIABgCIAAgBIAAAAIAAAAIAAABIgBACIAAABIAAAAQgCADgCAAIgBAAIgBAAIABAAgAAIgzIABgBIgBABgAAKg7IABAAIAAAAIAEABIAAAAIgCgBIAAAAQgBAAAAAAQgBAAAAABQAAAAAAAAQgBABAAAAIAAgCgAAPg6IAAAAg");
	this.shape_2.setTransform(3.7,2.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF99").s().p("AAAAGQgCAGgGgFIgGAHIgBgIIAAAAQgFACgDAAQABgDAEgDQgDAAABgDQABgDADgCQABgBAAgGQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAHAJAEgJQAFAIAJgGIAHgCQgGAGAGAGQACADAEABQAEACgHgBIAAAEIAAACIADAGIgJgEIABAFIAAAAIABACIgCAAIgFgBIAAAAIAAAAIAAAAIAAACIgBACQgHgFAAgHg");
	this.shape_3.setTransform(4,-5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(9));

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.1,1,1).p("ABKBWQAhhlAShlIAMgMQADBegiBsIgqA2QgQAPgHgOIAbgkQiUhhg5iDQATAhAYAfQARAXAUAVQAQATATAPQAAAAABABQARAQAQAPQAUARAVAPQAKAIALAHQAIAOgOgH");
	this.shape_4.setTransform(-1.1,1.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("ABiByQiUhkg4iBQATAhAXAgQASAWATAWQARAQAQARIABABIAjAgQAUAQAVAQIAVAPQAGAJgFAAIgHgCg");
	this.shape_5.setTransform(-4.2,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CC3333").s().p("AgvB+IAbgkQAOAGgIgNQAfhlAShmIAMgMQADBfgiBrIgoA3QgIAIgGAAQgGAAgDgHg");
	this.shape_6.setTransform(7.9,2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(9));

	// Layer 5
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(0.1,1,1).p("ABvgzIAEgMIAFABIgqCqIgHgIQAAgBABgBIAliLIACgJgABLguQARADARACAAkg1QATAEAUADIgtB4AhOgnQgJgPgHgLQgGgLgTgfQBsAnB6ARAhOgnIAXgpIhAgbAgFhAIgiBAQgSgJgVgeAgFhAQgZgHgZgJAAkg1IgtBdAgFhAQAUAGAVAF");
	this.shape_7.setTransform(-2.9,-0.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(0.1,1,1).p("AA4AyIgqgaIgmggIAAAAIgfgp");
	this.shape_8.setTransform(-1.4,4.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CCCCCC").s().p("ABHBkIABgCIAliLIgigFIgngHIgpgLQgZgHgZgJIhAgbQBsAnB6ARIAAABIgCAJIACgJIAAgBIAEgMIAFABIgqCqg");
	this.shape_9.setTransform(-2.9,-0.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0000CC").s().p("AglAMIAig/IApAKIgtBdg");
	this.shape_10.setTransform(-3.1,-2.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00CC00").s().p("AgjAAIAWgnQAXAJAaAHIgjA/QgPgKgVgeg");
	this.shape_11.setTransform(-7.2,-5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFF00").s().p("AgFAHIgZgoIA9AbIgWAnIgOgag");
	this.shape_12.setTransform(-11.8,-8.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AgmAvIArh3IAiAFIglCLIgBABg");
	this.shape_13.setTransform(4.1,1.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6600CC").s().p("AgmAeIgBAAIABAAIgGALIAFgLIAuhdIAmAHIgtB4g");
	this.shape_14.setTransform(0,0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(0.1,1,1).p("ABvgzIAEgMIAFABIgyCqIgGgIQAAgBABgBIAriLIADgJgABKguQARADARACAAjg1QATAEAUADIg2CBAhUggQgSgigRgpIA/AbgAg4hQQAZAJAaAHQATAGAVAFABABkQgXgFgVgMIAAAAIAAAAQgUgMgVgUQgQgQgPgVQgRgTgPgbAg0AOIAvhOAh3hrQBrAnB7ARAgVAzIA4ho");
	this.shape_15.setTransform(-2.6,-0.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0000CC").s().p("AgrAVIAthOIAqALIg3BoQgRgQgPgVg");
	this.shape_16.setTransform(-3.5,-1.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00CC00").s().p("AgmAAIAcgvQAXAJAaAHIgtBPQgRgWgPgag");
	this.shape_17.setTransform(-7.2,-4.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFF00").s().p("AgegkIA9AbIgcAuQgQgigRgng");
	this.shape_18.setTransform(-11.4,-8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AgqA5IAAAAIgBgBIA1iAIAiAFIgrCLIgBABQgVgEgVgMg");
	this.shape_19.setTransform(3.9,1.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#6600CC").s().p("AgvAlIA4hoIAnAHIg1CAQgVgMgVgTg");
	this.shape_20.setTransform(0,0.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CCCCCC").s().p("ABABkIABgCIAriLIgigFIgngHIgpgLQgZgHgZgJIg/gbQBrAnB7ARIAAABIgDAJIADgJIAAgBIAEgMIAFABIgyCqg");
	this.shape_21.setTransform(-2.6,-0.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(0.1,1,1).p("AAjg1QATAEAUADQARADARACIADgJIAAgBIAEgMIAFABIgyCqIgGgIQAAgBABgBIAriLAh3hrIA/AbQAZAJAaAHIg2BaQgRgWgOgbQAAAAAAgBQgRgkgMgvgAhZgXIAhg5AgaA9IAAAAAgaA9IAAAAQgSgPgPgUAARBYIABAAIgBAAQgWgKgVgRIA9hyABABkQgZgDgVgJIAAAAABvgzQh7gRhrgnAgFhAQATAGAVAFABKguIg4CG");
	this.shape_22.setTransform(-2.6,-0.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0000CC").s().p("AgOA/QgSgPgPgUIA0haIArALIg9ByIgBAAIABAAIgBAAg");
	this.shape_23.setTransform(-3.8,-1.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00CC00").s().p("AgoADIAAgBIAhg2QAXAJAZAHIgzBZQgRgWgNgcg");
	this.shape_24.setTransform(-7.5,-3.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFF00").s().p("AgBApQgRgkgMgtIA9AbIgfA2IgBAAg");
	this.shape_25.setTransform(-11.4,-7.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#6600CC").s().p("AgFBHIABAAIgBAAQgYgKgUgRIA9hyIAmAHIg2CGIAAAAIgBAAg");
	this.shape_26.setTransform(-0.2,0.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF0000").s().p("AgrA+IgBAAIA3iGIAiAFIgrCLIgBABQgXgDgVgIgAgsA+IAAAAIABAAIgBAAg");
	this.shape_27.setTransform(3.7,1.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CCCCCC").s().p("ABABkIABgCIAriLIADgJIAAgBIAAABIgDAJIgigFIgngHIgpgLQgZgHgZgJIg/gbQBrAnB7ARIAEgMIAFABIgyCqg");
	this.shape_28.setTransform(-2.6,-0.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(0.1,1,1).p("AAjg1QATAEAUADQARADARACIADgJIAAgBIAEgMIAFABIgyCqIgGgIIAAgBQAAAAABgBIAriLAg4hQQAZAJAaAHIhGB1QgSgYgKgiIAvhLIg/gbQAAAAAAAAQAAACAAACQADA5ANApAglBXQgWgMgQgWAAMBmQgbgCgWgNIBIiMQgVgFgTgGABKguIg+CUABABjQgcAFgYgCAh3hrQBrAnB7AR");
	this.shape_29.setTransform(-2.6,-0.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0000CC").s().p("Ag3AqIBEh1IArALIhJCMQgWgMgQgWg");
	this.shape_30.setTransform(-4.6,0.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#00CC00").s().p("AgwAHIAwhJQAXAJAZAHIhEB1QgRgYgLgkg");
	this.shape_31.setTransform(-8.2,-2.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFF00").s().p("AgeguIAAgDIAAgBIA9AbIguBKQgMgqgDg3g");
	this.shape_32.setTransform(-11.5,-6.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#6600CC").s().p("Ag3A/IBJiMIAmAHIg7CUQgdgCgXgNg");
	this.shape_33.setTransform(-0.8,1.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF0000").s().p("AguBKIA7iUIAiAFIgrCLIgBABQgRAEgSAAIgOgBg");
	this.shape_34.setTransform(3.5,1.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#CCCCCC").s().p("ABABkIAAgBIABgBIAriLIADgJIAAgBIAAABIgDAJIgigFIgngHIgpgLQgZgHgZgJIg/gbQBrAnB7ARIAEgMIAFABIgyCqg");
	this.shape_35.setTransform(-2.6,-0.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(0.1,1,1).p("ABxg5IAEgMIAFABIgyCqIgGgIQAAgBABgBIAriLIADgJgABMg0QARADARACAAlg7QATAEAUADIhCCiQgBABgBAAQgkAHgYgJQgXgKgPgTQgTgYgHgsQgJgxAIhMIA/AbQAZAJAZAHQATAGAWAFgAh0AMIA+hiAhaBQIBWiWAh1hxQBrAnB7ARABCBeQgeAMgaAEAg0BtIBZio");
	this.shape_36.setTransform(-2.8,-0.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#0000CC").s().p("Ag/A+IBUiXIArALIhaCoQgXgKgOgSg");
	this.shape_37.setTransform(-5.4,1.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#00CC00").s().p("Ag3AQIA9hjQAYAJAaAHIhUCXQgTgZgIgrg");
	this.shape_38.setTransform(-8.9,-0.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFF00").s().p("Agcg+IA9AbIg8BiQgJgzAIhKg");
	this.shape_39.setTransform(-11.6,-5.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF0000").s().p("AAPhRIAiAFIgrCLIgBACQgcAMgZAFg");
	this.shape_40.setTransform(3.3,2.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#6600CC").s().p("AhABSIBaioIAnAHIhBCjIgBAAQgQADgOAAQgSAAgPgFg");
	this.shape_41.setTransform(-1.6,2.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(0.1,1,1).p("ABvgzIAEgMIAFABIgyCqIgGgIIAAgBQAAAAABgBIAriLIADgJgABKguQARADARACAAjg1QATAEAUADIg+CUQgbgCgWgNQgWgMgQgWQgSgYgKgiQgNgpgDg5QAAgCAAgCQAAAAAAAAQBrAnB7ARAhngFIAvhLIg/gbAg4hQQAZAJAaAHQATAGAVAFAhLA1IBGh1ABABjQgcAFgYgCAglBXIBIiM");
	this.shape_42.setTransform(-2.6,-0.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#CCCCCC").s().p("ABABkIAAgBIABgBIAriLIgigFIgngHIgpgLQgZgHgZgJIg/gbQBrAnB7ARIAAABIgDAJIADgJIAAgBIAEgMIAFABIgyCqg");
	this.shape_43.setTransform(-2.6,-0.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(0.1,1,1).p("ABHBkIAHAIIAqiqIgFgBIgEAMIAAABIgCAJIglCLQgBABAAABgABLguQARADARACAAkg1QATAEAUADIgyCGIAAAAQAWAJAYADAhWgXIAfg5IhAgbQAOAvASAkQABABAAAAQAOAbASAWQAQAUASAPIAAAAIA4hyAg3hQQAZAJAZAHAgUA9IAAAAAAYBYIABAAIgBAAQgYgKgUgRAg2AaIAxhaQAUAGAVAFABvgzQh6gRhsgn");
	this.shape_44.setTransform(-2.9,-0.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#0000CC").s().p("AgKA/IAAAAIAAAAQgTgPgQgUIAwhaIArALIg4ByIAAAAg");
	this.shape_45.setTransform(-3.9,-1.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#00CC00").s().p("AgnADIAAgBIAfg2QAXAJAZAHIgvBZQgSgWgOgcg");
	this.shape_46.setTransform(-7.6,-3.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFF00").s().p("AAAApQgRgkgNgtIA9AbIgeA2IgBAAg");
	this.shape_47.setTransform(-11.8,-7.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FF0000").s().p("AgoA+IAAAAIAAAAIgBAAIABAAIAwiGIAiAFIglCLIgBABQgWgDgWgIg");
	this.shape_48.setTransform(3.8,1.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#6600CC").s().p("AgBBHQgYgKgWgRIA4hyIAnAHIgxCGIAAAAIAAAAIAAAAIAAAAg");
	this.shape_49.setTransform(-0.2,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},2).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]},1).to({state:[{t:this.shape_21},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_43},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_42}]},1).to({state:[{t:this.shape_28},{t:this.shape_26},{t:this.shape_27},{t:this.shape_24},{t:this.shape_25},{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_9},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]},1).wait(1));

	// Layer 4
	this.instance = new lib.staticwake("synched",0);
	this.instance.setTransform(11.4,-2,0.376,0.67,0,0,0,3.1,16.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:16.6,scaleX:1,scaleY:1,y:-2.2},4).to({scaleX:0.78,scaleY:0.7},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.9,-14.2,30.3,30.9);


(lib.scene2sharkchase = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{startAgain:0});

	// timeline functions:
	this.frame_159 = function() {
		/* gotoAndPlay("startAgain");*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(159).call(this.frame_159).wait(1));

	// middle
	this.instance = new lib.animwindsurfer2();
	this.instance.setTransform(-266.5,-216.9,0.799,0.799);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(79).to({_off:false},0).to({scaleX:0.84,scaleY:0.84,rotation:9.3,x:-266.3,y:-206.7},14).to({scaleX:0.94,scaleY:0.94,rotation:30.6,x:-265.8,y:-183.7},66).wait(1));

	// shark fin
	this.instance_1 = new lib.animsharkfin1();
	this.instance_1.setTransform(-224.2,-282.5,1.031,1.031);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.17,scaleY:1.17,x:-327.4,y:-268.2},35).to({scaleX:1.18,scaleY:1.18,skewY:180,x:-325.3,y:-266.8},1).to({scaleX:1.43,scaleY:1.43,x:-247.8,y:-246.5},42).wait(1).to({x:-233.3,y:-225.8},14).wait(1).to({skewY:0},0).to({x:-239.4,y:-204},65).wait(1));

	// far away
	this.instance_2 = new lib.animwindsurfer1();
	this.instance_2.setTransform(-294.4,-253.6,0.999,1,27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleY:1,rotation:18.3,guide:{path:[-294.2,-253.5,-294.2,-253.4,-294.1,-253.3,-291.1,-247.9,-286.9,-243.2,-281.4,-236.9,-275.3,-231,-274.6,-230.2,-273.9,-229.4]}},78).to({_off:true},1).wait(81));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AApAWIgCgHIAFAAIAFAHIgCAGQgEgCgCgEgAgwgaIAjgBQACALAFAHQgagEgQgNg");
	this.shape.setTransform(-343,-213);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AkQElQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAgBQgBgEACgIIADgCIACAAQAFAJAFAHIgGACIgEABIgDgBgAkpEMQgDAAgCgDQgCgDABgHQAGAHAKAGIgIAAIgCAAgAk7EEQAFgEAAAGIgFgCgAEpkgIACgEIAPAAQACADAAAEIgTgDgAEYkhIgMAAQAIgHAEAHg");
	this.shape_1.setTransform(-314.9,-262.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAAAAIABAAIgBAAg");
	this.shape_2.setTransform(-380.7,-310.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("AgHAQIAAACIgBAAIgCABIADgDgAAIgOIAAgEIADADIAAACIgDgBg");
	this.shape_3.setTransform(-174.4,-207.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#33CC00").s().p("A8dMQIAA3tIAOAAQCZAACXgMIABgFIAAAAIAAgDIAjgBQAoAdA9AJIACAAQAIAEAOgCIACAAQAtgBAsgDIACAAIApAAIACAAQBAAEAqAYIACAAQAMgEAPgBIACAAIAbAAIACAAIAkAFIACAAQAIAEAOgBIACAAQATAIAPAKIACABQAPgCALgGIABgCQAoAAAaAPQAIAEARgCQAJAFAPgDIACAAIAWAAIACAAIADAAQBOAJAvAoIgDAAQgcAGgdADIgDAAQgJAAACAKIAAACQgJAegiAEIAAACQACAOgCAMQgFAKgJAGQgYANgWAPQAHAhAYAPQANAKARADQA1ALAlAaQgmArhNAOQgJACgGgBQgwAAgOAfQARAgAiAQIABABIABABQBgASBKAoIADAAIgHAHIAIACIAFACIAIADQACADAEABQANAHAJANQAAABAAABQAAAAAAABQABAAAAAAQAAABABAAQAFAIAEAKIACAFIAJgKIABACQANAUAIAaIgBACQgLATgKAWQgHAFgJADQgeAKADAVIABAAIguAfIACABQAcAMAeAKQAFAFAHAFQAIAEAJACQgSAUgdAHQgiAJgSAYIABABQASASARATIgCAAIg4ApIgkAbIAAACQgBAIALAJQAFAEgDAEQgPAVgTAQQgWASgbAMIgPAGIgKADIgJABQghACgcAHIAAAAQglAKgbASIAAADQADAKgPAJIgBABIgGAJQgRAagdAWIAAAAIgDgCIgCAAIgBABIgBACIACAEQgCADAAAEIgCABIgBACIAAABIAAABIgBABIABgBIAAABIAAABIAAABIAAACIAAAAIABABIACAAIAFAAIASABIADAAIACAAIADADQADADAAAEQAAAFgBADIgBAAQgJAGgKgCQgKgCgJAFIgGABQgFAAgBADIgJgBIgDgBQgUAOgRARIgQASIgDACIgHADIAAACQAHABAIACQAGACACAGIACAGIAAABQgMAMgQAEIgJAEIAAAAIAAAAIgBABIAAACIgBABQgcAPgYAWQgEACgCAFQgNAHgPAEIgEAAQgVADgUADIgLADIgNAIQgKAGgGAIIABACIgGACIgIAIQgFAFgHAAIgGAAQgiAPgqAJIgVAEIgBAAIgDAVIgXAOIgVgCQgEACgDgBQhOgJhTABQhEAXhPgDQgBAAgCAEgAccLYIgCgFQg2gBg1gDIgPAAQhlgDhhgSIgBABIgCABQgUgMgcgEQgcgFgUgOIAAgCIgigBIgCAAQhLAGghgjIgDAAIhFgHIAAgCIgbgBIgCAAIgrAAIAAgBQgMgBgMAAIAAACIgDAAIgJAAIgRAAIgBgBIgFgDQgPgMgKgOIgBgDQgDgJABgPIgDgHIAAAAIgJgJQgFgDgHgBQgwgKghgZIAAgCQAYgdAFgwQgIgQgNgMQgigfgZgqIAAgCQAQAIgQgNIgBgBIgBgCQAegjAjgeQADgCgBgIQgJgMgLgJIgGgEIgIgFIgCAAIAEgDIAEgDQAZgOAggGQAegGAVgOIACgBIAIgHQAHgDAFgEIAVgHIAcgLQABgYAYgLQAAgEgCgHIgBAAIgBgCIgGgRIAAgDQgBgMgEgKIgBgDIgCgEQgDgegLgQIABgBQAfghAvgQIABgCIATgdIACAAQAtgMAbgdIgBgCQgQgmgdgbIgCAAQgkgQgKgeQgFgGAKAAQAiAAATgQQAEgHgJgHQgugghDgMQgIgBgHgEQgwgVgzgSQhSgchIgjQBPghBlANQARACAQgEQAOgDANgGIAXgCIABgBIACAAQA0ABAUggIgBgCQgSgngrgNIgMgEIANgBQBjgNBqACIACAAIATgBIABgBIAtAAIADAAIAVgBIAAgBQAigFAfgHIACAAQAJgBAIgCIAAgCQAWgSgHgsIAAgDQAkgbA0gNIAAgBQAMgnA4ADIACAAQALgFAKgHIABgCQAJgTARgLQA4gOA6AEIAAgDIACAAIAAXngAv6H6IABAAIgKABIAJgBgAv7HQIABgCIAAAAIgBAIIAAgGg");
	this.shape_4.setTransform(-283.2,-218.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC9900").s().p("A8dPRIAAo9IAVAAQA6ADA6AAIAbgBQA4gFA2ALQAvAKAsgXIAAgBIAIgBQAPgIAEgUIABgGIACAAIAPgEQA0gQAygRIAIgDIACgBIAAABIAAAAIAAABIABADIAAABIABAEIACAJIAAAAIABAMIAAABIAAACIAAAfIAAADQAAAJABAKQAFAYAAAbIgBALIAAAAIAAADQgBApgMAjQAQAyAMA1IABABQAGgVgJgdQgHgYgJgWQANgkABgkIAAgUIAAAAIgBgFIAAgCIAAgCIgBgHQgCgSgFgSIAAgDQAEgLgCgSIAAgCIAAgCIgBgJIgCgQIAAgDIAAgBIAAAAIgBgJIAAAAIAAgCIAAgBIgBgGIgBgEIAAgBIAAAAIAAgBIAAgDIAAAAIgBgHIACAAIADAAIAAAGIAAABIABACIAAAAIAAAAIABAAIAAAAIABgBIABgCIAAAAIAAgBIAAAAIABgCIABgBIAAgCIAAgBIABgFIgBgJIAGgDIAAAHIAAAFIABAEIAAACIABAAIAAABIAAABIAAABIABABIAAABIAAAAIAAAAIABABIAAAAIABABIACAAIABAAIAAAAIAAgBIAAgBIABAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAgCIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAgDIgCgEIAAAAIAAgBIAAgCIgBgBIAAgBIAAAAIAAgBIgBAAIAFgDIAHgBIAAABIABAAIAAgBIAAABIgBAAIAAAAIAAACIADAAIAAAAIABAAIADgBIAAAAIAAAAIAAAAIABAAIAAAAIgBAAIAAgBIAAAAIAAgBIAJgBIAAADIgBAAIABgBIgCAAIAAABIgBAAIgBAAIgBAAIgCABIgCAAIAAABIAAAAIgHABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAAAIAAABIAAAAIAAABIABACIAAABIABAAIAAABIAAAAIAAACIAAAAIAAABIAAACIAAABIAAABIABABIAAACIAAABIAAABIAAAAIAAABIABABIAAAAIAAABIAAAAIAAABIABABIAAAAIABAAIABAAIAAgBIABAAIAAAAIAAAAIAAAAIAAgBIABAAIAAgCIAAgBIAAgCIAAAAIAAAAIgDAAIACgBIABAAIAAgEIAAAAIAAgCIAAAAIAAgCIgBAAIAAgBIAAAAIAAgBIAAAAIAAAAIAAgBIgBAAIAAgBIAAAAIAAgBIAAgCIAAAAIAAAAIAAAAIAGgBIABABIAAAAIABABIAAgBIgBAAIABgBIABAAIABABIAAABIAAABIAAAAIAAABIAAABIAFgBIABgBIAAAAIAAAAIABAAIAAgBIAAgBIAEAAIAAAAIABAAIAEAAIAAABIABAAIAAADIAAAAIAAAFIAAAAIAAABIAAAAIABAAIABAAIAAABIAAAAIAAAAIAAABIAAAAIAAABIAAAAIABAAIAAABIAAAAIAAAAIAAABIAAAAIAAAAIAAAAIABABIAAAAIAAAAIAAABIAAAAIAAAAIAAABIAAAAIABAAIAAABIABABIABAAIAAgBIABAAIAAAAIAAgBIAAAAIAAAAIAAgBIAAAAIAAgCIABAAIAAgFIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgEIAAAAIAAAAIACAAIgBAAIgBAAIABAAIACAAIAAAAIAAAAIABAAIABAAIABAAIAAAAIAFAAIAAAAIgEAAIAAAAIAAgBIgEAAIAAABIAAgBIgCAAIgLAAIADAAIACAAIABAAIABAAIACAAIABAAIAAgBIAAAAIAAgBIgBgBIAAAAIAAgBIgFACIAFgCIAAAAIAAgBIAAAAIAAAAIgBgBIAAAAIAAgBIAAAAIAAAAIAAAAIgBgBIAAgBIAAgBIgBgBIAKgDQADACABADIAAABIABAAIAAABIAAABIAAAAIAAABIAAAAIAAAAIABAAIAAACIAEAAIAAgEIABgBIAAABIAAAAIABABIAAAAIAAAAIAAABIAAAAIAAABIAAAAIABAAIAAABIAAAAIAAAAIAAABIAAAAIABAAIAAAAIAAABIAAAAIAAAAIAAABIAAAAIAAAAIgBAAIAAABIABAAIABAAIAAAAIgCAAIAAAAIACAAIAAABIAAAAIAAAAIAAABIABABIAAABIAAABIAAAAIABABIAAAAIAAABIAAAAIABABIAAABIAAABIAAAAIAAAAIABABIAAABIAAAAIAAABIAAABIAAABIAAAAIABABIAAAAIAAABIAAAAIAAABIAAAAIAAABIABABIAAAAIAAABIAAAAIAAAAIAAACIABAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIABAAIAAABIAAABIAAABIAAAAIAAACIAAAAIAAACIABAAIAAABIAAACIAAAAIAAABIAAACIABACIAAABIAAACIAAAAIAAADIAAADIAAABIAAABIAAABIABABIAAABIAAAFIAAAEIgBAMIAAABIAAABIgDAeIAAACIgDAbIAAABIgBAEIAAALIADAEIAFAFIAEAFIAAABIAAAAIAFAHIABAAIACAKIABACIAAAAQAEAhABAlIAAACIAUAVIACABQAHApgCA0IAAADQALARAJAVIABAAIgDgaIgCAAIAAgDIAAghIAAgDQAEABgBgGIAAgCIABAAQADgPgEgJQACgJgBgDIgBgLIAAgDIgCgEIgBgBIAAgBIgBgBIgBAAIgBAAIgBAAIgCABIAAAAIgBABIAAACIAAADIgBAAQAAgBAAgBQAAAAAAgBQgBgBAAAAQAAAAgBgBIgCAAIAAgCIgEgEIAAgBIgBgBIAAAAIAAgBIgBAAIAAgBIAAAAIgDgEIgDgFIgBAAIgHgMIgEgIIAAgCIAAAAIAAgYIAAgCIAAgFIABgDIAAgLQgBgEgCgEIAAgBIAAAAIgBgFIAAgBIgBgBIAAgBIAAgBIAAAAIgBgBIgBgBIAAgCIgBgBIgBgBIgHgJIAAgBIAAAAIgDgGQgFgLgBgOQAFgOACgQIAAgBIABgKIAAgDIABAAIABgOIgBgTIAAgDIAAgBIAAgBIgBgGIAAgCIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIgBgCIAAgBIAAgBIAAgBIAAgDIAAgBIAAgBIAAgBIAAgCIAAgBIAAgDIgBAAIAAgCIAAgBIAAgCIAAgBIAAgBIAAAAIAAgCIgBgBIAAAAIAAgBIAAgBIAAAAIAAgFIAAgBIAAgBIAAAAIABABIAAAAIABABIgBAAIAAAAIABAAIAAAAIAAABIAAAAIAAABIAAAAIABAAIAAABIAAAAIAAABIAAAAIAAABIAAABIABAAIAAACIAAAAIAAAAIAAABIAAADIABAAIAAABIAAABIAAAAIAAABIABABIAAAAIAAABIAAACIAAACIAAAAIAAACIAAAAIABABIAAAAIAAABIAAAAIAAABIAAAAIAAACIABAAIAAABIAAABIAAABIAAAAIAAABIABAAIAAACIAAABIAAABIACAFIABACIAAABIAAABIAAABIABACIAAAAIAAABQADAHAAgIIAAAAIAAgGIAAgIIgBAAIAAgBIgBgBIAAgBIAAgBIgBgBIAAgBIAAAAIAAgBIAAgBIgCgHIAAgBIAAgBIAAgBIAAgBIgBgBIAAgCIAAgBIAAAAIAAgCIgBgBIAAgBIAAAAIAAgCIAAgBIAAAAIAAgCIAAgBIAAgCIgBgCIAAAAIAAgBIAAAAIAAgDIAAAAIAAgBIAAgBIgBgBIAAgEIAAgBIAAgBIgBAAIABAAIAAAAIAAgDIABgBIABAAIACAAIABAAIABgJIgggDIAlgbIAAADIACgCIAEgBIADABQADgHAEgGIAGgEQAGgEAEgFIAJgEQALgDAIgHIgBAFIgFAQIAAABQAJAEACAMIABAHIACgHQACgIgBgLIAAgDIAAAAIAAgMIABgJIgBgDIAAgCIAAgBIAAgFIAAgLIAAAAIAAgGIgLgCIAEgFIApgiIACgCIAEABQAFAOgCAPIAHgBIAAgXIAAgBQgDgCABgFIAPgFIAKgBIAMAAIgDAjIABAFQABAGgGACIgDABIgBADQATgCAAgVIAAgDIAAgCIAAgDIAAgRIABgCQAGgQAKgNIgPgEIAAgBIgBAAQgLgEgMAAIABgIQAFgBAHgIIAogpIARgRQADAGABAIIABAOIABAFIgBATIAAABIAAABIAAABQAEAGADAIIABAFIACABIgBAJQgBAfAFAYIACAIQAFAPAHANIACAAQABgNgGgPIgDgHIgCgBIAAgBIAAgXIAAgCIAAgCIAAgMIAAgDIAAgCIAAgDIAAgHQgBgKgDgIQgDgHgFgGIAAgCIAAgOIAAgNIAAgCIAAgJIAAgWIAAgDQgBgDgGgCQALgDAJgGIAIgGIABgCIAJgBIA2gMIA4gOQATgFAPgLIATgOQAQgOANgPQAKAuAUAlIACABQABAUgGAMIAAACIgDAAIACATIABAAQANAfgCAwIABAAQAKABgBAVIAAACIAGAKIADAEQASAhACA0IAAAJIAAAAIgBAbIAAABIAAABIAAABIAAADIAAAIIAAADIAAACIAAAAIAAADIAAABIAAAEIAAABIAAACIAAABIAAALIAAABIAAABIAAADIABAGQABAPAEAOIABAHIAAABQAEALAEALIABAAIgEAEIgBABIgBABIgWASIAAAAIgBABIgDACIgBABIgBABIgDACIAAAAIgFADIgEADQgEADgDAFIAAACIgDAJIgBAAQAAgIgDgEIAAgDQABgHgCgFIAAgBIgCgEIAAAAIAAgCQgEgLgBgOIAAgBIAAgDIABgOQAAgPgDgMIAAgCQgDgNgFgKIAAgBIgBgBIgBgBIAAACIAAABQgBAMADAJIAAACIABACIABAmIAAAGIAAACIABAAIAFAbIACAJIAGAWIABABIAAABIABABIACgBQAEALgFAIQgSAYgcAPIgDACIgFACIgFADIgBAAIAAAAIgBAAIgBABIAAAAIgDABIgFACIgBAAIAAAAIgBAAIgCABIgBAAIgBAAIgJgBIAAAAIAAgBIgBgCIAAgBIgBgBIAAgBIAAAAIAAAAIgBgCIAAgCIAAAAIgBgBIAAAAIgBgCIAAgBIgCgFIgDgGIgCgFIgDgEIAAAAQgHgLgIgIIgEgPIABgPIABgTIABgPIABgKQABgWgGgRIgBgEIgBAAIgBABIAAAAIAAACIgDANIgDAUIAAAHIAAAPIAAAOIAAABIAAAAIAAAGIAAADIAAACIAAAEIAAABIAAACIAAADIAAAIIAAALIAAACIAAABIABAAIAAAAIABABIAAAAIABABIAAABIABAAIACACIAAAAIABABIAFAFIADACIAAAAIACABIABADIACAGIABACIAAAAIAAAAIABADIACAEIAAABIAAAAIAAABIAAABIgBAAIAAAAIAAgCIAAAAIgBgBIAAgBIgBgBIgBgBIgDgBIAAACIAAAAIABACIAAACIAAAAIAAACIAAABIAAABIAAABIAAAAIABACIABAEIAAABIAAABIAAACIAAABIAAABIAAAAIABABIAAADIAAAAIABACIABAFIADAAIAAAFIAAABIABAHIAAAFIAAADIAAAAIAAAHIAAAAIABAKIAAAAIAAADIAAACIAAADIAAABIAAABIAAAAIABAHIAAADIAAAKIAAAVIgCAAQgPASgTANIgCAAIgRAAIAAABQgnAQgfAWIAAABIgBAAIgDADIAAAAIgBAAIgBABIgFAEIgDACIgBAAIgBgBIgCgJIAAgBIgCgGIAAgCIAAgBQgGgTgKgQIABgCQAFgpgLgYQgEgIgFgHIAAAAIgBgRIAAAAIgBgBQgEgmgOgbQgTglAJg1QAFgbgGgNIgBAAIgGAuIAAABIgIAxQAKAcACAlIAAACIAAANIAAABIABAKIAAAMIAAACIAAAAIAAADIABAGIAAABIABAAIADAMIAAAAIAAADIADAIIAAABIACAEIABABIAAAMIAAAEIABADIABADIABACIAAAHIAAABIABANIABAAIACAGIAAACIABADIABACQAAAAABABQAAAAAAAAQAAABAAAAQAAAAAAgBIAAAAIABgBIAAgFIgBgIIAAgCIAAgCIAAgLQAAgFgCgEIgBgCQgDgMgBgOIAAgDIgCgJIAAgBIgDgHIAAgBQgEgCACgGIAAgDIAAgmIAAgCIAAAAQABgMgEgFIAAgDIAAgCIAIAWQAFARAEATIABABIADAQIAAACQAEAXACAZIAAACIAAAEIABAPIABAAIAAALIAAABIABALIAAABIAAAAIAAAAQABAJAFAGIAAACIAEAKIAHAWIADAMIABACIABAEQAAAAABABQAAABAAAAQAAABABAAQAAAAAAAAIAFAKQgZAigkAXIgDgFIgIglIgDgLIgCgGIgLglIgGgQIgGgOIgFgKIAAgBIgDgFIgEgJIAAgBIAAgBIAAgRIgBgBQgDgEgCgGIAAAAIgBgGIAAgCIAAgDQABgGgBgEQgBgFgEgCIAAgCIAAgCIAAgCIAAgEIAAgCIAAgBIAAAAIAAgBIgBgBIAAgBIAAAAIAAgCIAAAAIAAgBIAAAAIAAAAIgBgBIAAAAIAAgBIAAAAIAAgBQgCgFgDgEIgBgBIgBgBIgDgDIABAEIABAAIAAAAIAAABIAAAAIADALIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAACIAAABIAAAAIABACIAAAAIAAAFIAAABIAAABIAAAEIAAABIACAAIAAABIABASIAAAAIABAAIABAGIAAABIADAKIABAAQACAQAEAOIACAGIAAABIADAJIABACQAIANAGAQQAGAPAEASIAAADQAAAJADAHIACAAIAAADIAQA+IAAACQgYAeggAUIgNgCIgOAGQgWAHgIATIgKAFQg/AVguAoQAAAAABABQAAAAABABQAAAAABAAQAAABABAAQAHACAHAAIAAARgAwSKcIgBgCIgBgEIAAAAIAAgCIgBgHIgBgCIAAgBIgBgFIAAgBIgHgeIAAAAIgEgRIAAgBIgCgJIgCgHIAAgBIgBgBIAAAAIAAgBIgBgCIAAgCIAAAAIAAgBIgCgGIAAgBIAAgBIAAgBIAAAAIAAgCIAAgBIAAgBIgBgBIgBAAIgDAAIAAABIAAABIAAACIAAABIAAACIAAAAIAAABIAAACIAAAAIAAACIABAEIAAABIAAACIABAAIAAACIAAABIAAAJIAAACIgCAAIgBgCIgDgIIAAgBIAAAAIAAgBIAAAAIgBgBIAAAAIAAAAIAAgCIgCgEIAAAAIAAgBIgBgBIAAgBIAAAAIAAgBIgBgBIAAgBIgBgBIAAgBIAAgBIgBAAIAAAAIAAgBIgBgBIAAAAIAAgBIgBgCIgCgEIAAgBIgCgGIgBgBIAAAAIAAgBIAAAAIgBgBIAAgBIgCgDIgGgOIAAAFIAAADIAAACIgCACIAAgCIgNgTIAAAAIAAgBIAAAAIgHgLIgCgDIAAACIABAAIAAABIAAABIABACIABACIABACIAAACIAAABIABACIAAABIAFANIAAAAIADAHIABADIAAABIABACIABACIAAACIABAAIAAABIAAABIAAABIACAEIAAAAIAAAAIABADIABADIAAABIAAABIABAAIAAAAIAAABIAAAAIAAABIABABIAAABIAAAAIAAABIABABIAAABIAAACIAAADIAAABIAAABIAAACIAAABIAAAAIABABIAAACIAAABIAAABIAAABIAAAAIAAACIAAACIAAAAIAAABIABADIABAAIAAABQAAAAAAABQAAAAABAAQABAAAAAAQABAAABgBIABgBIAAAAIAAgDIAAAAIAAgFIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIgBgBIAAAAIAAgBIAAgBIAAAAIgCgFIAAgBIAAgCIAAAAIAAgBIAAgBIAAgBIAAgCIAAgBIgBgCIAAgBIgBgIIAAgBIAAgBIACAAIAEAKIAAADIABAAIAAABIAAAAIAAABIAAAAIABABIAAABIABABIAAABIAAABIABAEIABABIAAAAIAAAAIAAABIAAAAIAAAAIAAABIABACIAAABIABABIAAAAIAAABIAAABIAAAAIAAABIABAAIAAABIADAKIAKAnIACAAQADgDgFgQIgBgDIAAgCIAAgNIAAgBIADAAIAAABIAAABIAAAEQAGAYAIAWIADAHIABABIAGAOIAAAAgAx3HrIAAABIAAABIAAACIAAABIABAEIAAAAIAAACIAAAAIAAABIAAABIAAAAIABAFIABACIAAAAIABAEIAAABIAAAAIABABIADAJIABAAIABADIACAGIAAAAIABACIAAAAIAAABIACAFIACAFIACAEIACADIAAABIAAAAIAAABIABABIAAACIAAAAIABABIAAAAIABACIABAEIABAAIAAABIAAABIAAgBIAAgDIgBgEIAAgBIAAgCIAAgBIgBgCIAAAAIAAgCIAAgBIgBgBIAAgCIAAgBIAAAAIgBgCIAAAAIgBgGIAAAAIgBgBIgBgDIAAAAIAAgBIgFgMIgBgBIgBAAIgDgGIgBgCIAAgBIAAgDIAAgBIgBgBIAAgBIAAAAIAAgCIAAgCIAAAAIAAgBIgBgCIgBgDIAAgCIgBgBIgBgDIgDgDIAAADgAwRIaIABAAIAAACIAAABIABACIABAFIAAABIAAAAIABAAIACgGIAAgBIAAgBIAAgBIAAgCIAAgMQgBgFgCgEIAAgDIAAgBIgEgBIABAagA1NIHIAAADQAAAKADAIIADAIIABAAIACgFIAAgCQAFgTgKgVIgBgBIgDAAIAAATgAtjH/IAAABIAAACIAAABIABAXIABAAIADACIAAgBIABgEQABgIgBgGIgBgGIgBgBIAAAAIAAAAIgBgCIgBgCIgCgDIAAAEgA1yH+IABAAIAAACQgBAQAIAIIACgCQgCgRADgSIABgDIAAAAQACgPgCgFQAAgBgBAAQAAgBgBAAQAAAAgBgBQAAAAgBAAQgDABgEACIAAAMIAAACIgCAAQAAAKABAKgAtbHtIABAAIAAAHIABADIAAABIAAAEIAAAAIAAABIABABIAAAAIAAABIAAABIAAAAIAAAAIABABQABAEAEgDIAAgBIABgBIAAgCIgBgBIAAgBIAAAAIAAAAIAAgBIAAAAIAAAAIgBgBIAAgDIAAAAIgBgDIAAgBIAAgDIgBgGIAAgCIABgHIAAAAIgBgBIAAgBIAAgBIAAgBIAAgBIAAAAIgCgFIgBgCIgCAAIAAACIAAADIgCAAQAAAJABAKgAtSGqIABALIABABQgCAGAEACIAAABIACATIABAAIAAADIAAACIAAABIAAABIAAABIAAABIAAAEIAAABIAAADIAAABIAAABIAAAFIAAAAIAAABIAAABIAAAGIABADIAAABIAAABIAAABIAAAAIAAABIABAAIAAABIAAABIABAAIAAAAIABAAIABAAIAEgBIABgBIAAAAIAAgBIAAAAIAAAAIAAgBIABgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgLIAAgDIAAAAIAAgBIAAgBIAAgBIgBAAIAAgBIAAgBIAAAAIAAgBIAAAAIgBAAIAAgBIAAAAIAAAAIgCgCIAAgCIAAAAIAAAAIAAgBIAAgCIAAgBIgDACIACgCIABAAIgBgCIgBgIQgCgOgGgLIAAgDQABgIgBgBIgBgBQgBAAgCAGgAyFHaIABAJIAAABIAAAAIABABIAAAAIAAABIAAAAIAAAAIAAABIAAABIABAAIAAABIABADIABABIAAABIACAEIAEAEIAAAAIAAAAIAAgCIgCgHIAAAAIAAgBIgBgDIgBgBIAAAAIAAgBIAAAAIgBgBIAAgBIgHgNIAAgBIABADgAsnHdIAAAAIAAABIAAAAIAAACIABAAIAAABIAAABIAAACIAAAAIABAEIAAABIAAABIAAAAIADgBIAAAAIAAgBIAAAAIAAgBIAAgCIABgBIAAgBIgBgDIAAgBQgBgCgEgBIAAABgAs6F+IAAABIABAOIABAAIAAACIAAAPIAAAQIABAMIAAAOIAAAEIAAACIAAABIAAABIAAAAIABAAIAAABIABABIAAAAIAAABIAAABIAAAAIAAABIABAAIAAABIAAAAIAAABIAAAAIAAABIABAAIAAAAIAAABIAAAAIAAAAIAAABIABABIABAAIAAAAIAAgBIABAAIAAAAIAAgBIAAAAIAAAAIAAgBIABgBIAAAAIAAgCIAAgCIAAAAIABgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIgBABIAAAAIABgBIAAgDIAAgBIAAgBIAAAAQAAgMgBgKIgBgDIAAgCIgBgCIAAgDIAAgCIAAgDIAAAAIABgGIAAAAQAAgIgDgFIAAgCQABgHgEAAIABgDIAAgFIgBgGIgBgBQgBgFgFgCIADAOgAs2HZIABAAIgBAAgAznG/IABAHIAAABQABACACACQADABAEAAIAAgBIAAgBIAAgBIAAgBIAAgCIAAgJIAAgHIAAgFIAAgFIAAgCIAAgKQAAgEgCgDIAAgDQAAgNgCgDQAAAAAAAAQAAgBgBAAQAAAAAAABQgBAAAAAAIgEAHIAAACIAAADIgCAAIABAYIABAAIAAACQgBAGADACIABACIgDAAIgBAJgAxKFpIABATIAAAEIABANIABAAIAAACIAAADQADADgBAGIAAADIABAHIACAAIABADIADAHIABADIAAAAIAAAAIAAAAIgCgMIgBgEIAAgCIAAgCQACgIgEgCIAAgCIAAgIIAAgCIAAgFIAAgCQAAgQgDgNIAAgCIgCAAIAAACIgDAAIAAAFgAqqGAIAAABIAAABIABAGIABAAQgBAIACAFIABADQACgIAAgJIAAAAIAAgBIAAgCQAAgJgCgKIAAgBIgCgHIgCAAIAAAXgAwhECIAAACIAAACIgCAAIAAAGQACALAAAMIAAADIACADIACAGIABAAIAEASIACAGIABAAIAAADQAFAggKAZIAEAHQAGAFAEgVQAFgggJgXIgCgFIAAgDQABgHgEgCIAAgDIgFgTIAAgCIAAgKIABgCQABgHgCgDQgBgCgEAAIgCAAgAyDFHIAAAAIAAACIABADIAAAAIAAABIAAABIAAAAIABAAIAAABIABABIABACIACAFIACABIAAgEIgBgHIAAgBIAAgBIAAAAIAAgBIAAgDIAAAAIgHAAIAHAAIAAgBIAAgCIAAAAIAAgBIAAAAIAAgBIAAgHIAAgBIgBADQAAAAAAABQAAAAAAABQgBAAAAAAQgBABAAAAIgEABIAAABIAAABIAAABIAAABIAAABIAAABgAyuFRIAAAAIgBABIABAAIABABIABAAIgBgBIAAgBIgBAAIAAAAgAy3EpIABAAIAAABIACAAIAAAAIAAAAIABAAIAAACIAAABIAAAFIAAAAIAAADIAAAAIAAADIABABIAAACIAAAAIAAABIAAAAIAAACIABAAIAAABIAAAAIAAAAIABABIAAABIAAAAIAAAAIAAABIAAAAIAAABIAAAAIABABIAAABIAAAAIAAAAIAAABIABABIAAAAIAAAAIAAABIABAAIAAAAIAAABIABAAIABAAIAAAAIAAgBIAAAAIAAAAIABgBIAAAAIAAAAIAAgBIAAgCIAAgBIAAAAIABgBIAAAAIAAAAIAAgCIAAgBIAAgEIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIgBgBIAAgBIAAAAIAAAAIAAgBIAAAAIAAAAIgBgBIAAgBIAAAAIAAgBIgBAAIAAgBIAAAAIAAgBIgBgBIAAAAIAAAAIAAgBIAAAAIgBgBIAAAAIAAgBIAAAAIAAAAIgBAAIABgBIgEAAIABAAIABAAIAAAAIAAAAIABAAIABAAIgFAAIAEgBIAAgCIAAAAIgEABIAAACIgBAAIgCAAgAyyFIIACABIgBgBIAAAAIgBAAIAAAAIAAAAIgBAAIgCgBIACABIABAAIgBAAIAAAAgAy4FIIAAAAIABAAIAAAAIACAAIABAAIABAAIgBAAIAAAAIgBAAIgBAAgAywFIIAAAAIABAAIgBAAIAAAAIAAAAIgCgBIACABIgBAAgAyxFIIAAAAIAAAAIgBAAgAx5EjIAAABIAAABIABADIAAABIAAACIABADIAAAAIAAABIAAACIAAAAIABABIAAABIAAABIABACIAAABIAAABIAAACIACAHIAAABIACAEIAAABIAAAAIABAAIABAAIAAAAIAAAAIABgFIAAgDIAAgBIAAgFQgGgDABgJIAAgQIgBgBIgBAAIAAgBIgCgEIgCAMgAyzE8IABAAIgBAAgAyzE8IAAAAIAAAAgAzRE8IgBAAIAAgCIAAgBIAAgCIAAAAIAAgCIAAAAIAAgJIgHACIAAAAIAAABIAAACIAAAAIAAADIABAAIAAABIAAAAIABAAIgBAAIAAABIABAAIAAABIAAAAIAAABIAAAAIABAAIAAAAIAAABIAAAAIABABIAAAAIAAAAIAAABIAAAAIAAAAIABAAIABAAIACABIAAAAgAzyE6IAKgBIgJAAgAy1E0IAAAAIAAAAIACAAIgBAAIgBAAgAy2E0IAAAAIAAAAgAzLE0IABAAIAAAAgAseEQIAAAFIAAAAIABADIAAADQACAHADAGQADAEAFADIAAAAIABAAIAAgCIgCgEIAAgBIgBgDIgDgIIgEgJIgBAAIgBgBIgDgFIAAACgAzwEqIAGAAIAAgBgAy3EqIABAAIgBgBgAszD/IAAABIAAAFIABABIABAIIADAJIAHAPIABAAIAAgNIgBgDIAAAAIgBgFIgBgDIgBgFIAAgBIgDgEQgCgFgEgCIAAACgAqQDiIAAADIAAAOIAAAAIABAJIAAAAIAAAHIAAAAIAAABIABAAIAAAAIADAPIAAABIAAADIABACIAAABIAAAAIABAAIAAAAIADADIAAAAIABAAIABAAIAAgBQABgEgCgLIAAAAIAAgBIgBgBIAAgCIAAAAIAAgCIAAgDIAAgCIAAgGIAAgJIAAAAQgBgHgCgFIAAgCQgCgIgFgEIAAAJgAtSC7IAAAAIABANQACAMADAKIABACIAAABIAAAIIAAAFIAAACIABAGIABAAIAAAAIAAABIAAABIAAADIAAACQABATAHADIACgFIAAgDIAAgKIAAAAIgBgCIAAAAIgCgFIAAgBIAAAAIAAgBIABgCIAAgCIAAgDIAAgGIgBgCIgCgHIAAgCQgFgcgJgWIAAANgAtrCRIABACIAAAFIABAOIABAAIAAADQAAAJABAKIAAAAIAAAAIABAAIACAMIACAOIADAKIAAACIABADIAEAOIAAADIABgCIABgBIAAgCIAAAAIAAgLIAAgBIgBgHIgBgBIgCgNIgBgHIgBgLIAAgCIAAAAQABgLgEgGIAAgCQgEghgNgZIAHAigAqvCkQABAWAEAUIAAABIABAHIAEALIABADIAAAAIAGAPIABAAIgBgIIAAAAIgDgUQgFgdgJgYIAAACgArDB+IABACIABAaIABAAQADAYAGAVIADAJIABAEIABAAIgBgEIAAgBIgJhKIgCAAIAAgDQAAgGgDgEQgCgEgEgCQAAAIAEAEgAuWAZQAFAYAIAWIAAABIACABIAAACIAAAYIAAAMIAAADQAHASAHAUIAEANIAGAYIAAAAIAEAPIABACIAAgGIAAgCIAAgEIAAgFIAAgBQgBgEgCgDIAAgCIgEgNIgEgOIgIgpIgDgOIAAgCQACgMgEgFIgBgDQgIgtgPglQABAQADAQgAXbI+QgHgBgGgDIgDAAIgEACIgBAAIgEgBQgTgFgSgHQgUgIgcACQgegVgsgIIgDAAIgDgCIgFgDQgMgHgNgFIAAgBIAAAAQgTgHgVgFIgHgCIgrgIQgZgFgFgWQg4gThBgJIgCAAIgBAAIgCAAIgBAAIgCgBIgDAAIgBAAQgFgBgCgCIgBgBIAAAAIgBgDQgHADgFgDIgCAAIhIggIgFgEIgBgBIAAAAIAAgBIAAgBQgEgRAAgQQAAgdALgaIABAAIAAgkIAAgDQgZguAUg7IAAgDQAvANAnAWIABABQABAkAWAQIANAJIACABIADACIAJAGQBjgHBYAOIACAAIABAAQAHAJAKAFIACAAIAAADIgCAAIgFAOIAAAWIAAACIgDAAIAAARIAAACIAAARIAAADQgCAVAGgCIAFgDIABgCQAEgJgCgPIAAgCIAAgDIAAgfIAAgCIAAgMQAEgFAAgKIABAAQAaALAlgBIACAAQAIAEAOgCIACAAIAYAAIACAAQApAXA3AIIAAAAIAAADQAYAKAcADQCKARCKgEIAAgEIACAAIAADxIgGAAIgDgEIggACQgqACgqAAQhjAAhjgOgAQREEQACAZgHAQQAGARACAWIABASIABAAIADAIQAAAAABAAQAAABAAAAQAAAAABgBQAAAAAAAAQACgDgBgVIgBAAIAAgDIAAgMIABAAQADgMgEgHIAAgCQAIgRgGgTQAAAAgBAAQAAABAAAAQAAAAAAABQAAAAAAAAIgBAFIAAgdQgLABABALgANkEjIAAgCQAAgRgCgOQAMgiADgnQABgTgBgVIgBgNIgGhaQgBgXAAgaIAAgCQACgLgEgGIAAgBQAjAfAiAvIAAADIgMAtIgBABQgOAQgBAOQALAMgHATQgEANgCANQgFAnAVAiIAAACIAAAWIgCABQgKAUgCAbIAAABQgagQgSgagAyyFIgAyDFHgAp1EtIABgFIACgIIAAgCIABgHIAAgBQABgMgBgNIgBgBQgHgOgBgTIAAgCQABgPgEgJIAAgDQAAgagHgTIgCgBQgHgHgDgLIAAgDQACgRgEgMIgBgDIgDgCQgFgjgLgbQABgLADgKQADgIgGgMQgWgvgFhCIgCAAQgHgHgFgHQAogjAwgcIAAgCQAIAuASAkIABACQgBAaADAWIAAACIgCAAIABAUIABAAQAEAHgBAMIAAACQAFAKAEAMIAAACIABAuIACAAQADAjARAWIABABQACgQgKgRIgBgBQABgOgDgKIgBgCIAAgDQACgbgEgTIgBAAQgBgOgIgFIAAgCQgCgTAAgUIABAAQADgMgEgHIAAgCIAAgdIAAgCIAAgGIgBgDIgCgIIABgCQABgNgEgHIAAgCIAAgDIAAgCQACgTgEgMIAAgCQgDgggIgbIgEgLIABAOIAEAbIAAACIABAYIABAAIAAACQAAAOACANIABAAIABAOIABAAIAAADQACALgEAFIAAgCIgWhgIAAgCIAAgUIAAgCIAAgHQAHACABgEIACgBIABAAQAIgEAKgCIACgBIAAABIAAAEIAAACQAAAOACANIABAAIACAaIAAADQAIAggDgjIAAgCIAAgDQAAgOgCgMIAAgCQABgPgEgJIAAgCIgCgDIAAgCQAQgHAKgBIABABQARBOgSBQIAAACQAAAFADACQANADACAMQAGAlgMAgIACABQADAJAHAFIAAACQACAigEApIABAAQAIANAKALIAAACQgFAfgHAdQAPASgBAhQgBAfAEAYIgBACQgPAPgNAQIgCABQgfAFgYALIgBAAIgLAFIgBABIgFADIgHADIABgCgAzjEpIAAgBIAAAAIAAgBIAAgBIAAgBIABAAIACAAIABAAIACAAIABAAIABgBIABAAIAAAAIAAACIAAABIAAAAIAAABIAAABIgEAAIAAAAIgCAAIgDAAIAAAAIAAABIAAgBgAzSEiIAAgBIAAgBIAIgBIABAAIAAABIAAAEIAAABIAAAEIgJAAgAp/kIIAAgCQAMAAgCAbIgBAJIgCACQgJgMACgYgARVmoIgugbIgBgCQgGgKgDgOQAHgTAAgYIAAgDQAEgFgBgMIAAgCIAAgCIAAgMIABgBQADgPgEgLQgBgdgCgYQgDgXgEgFIAAACQgHAKAAAKQAAAJAHAKIAAACQAFBJgKBCIgCAAQgXgIgegBIAAgCQgLgHACgSIgDAAQgUgMgcgFIAAgCQgCgNgDgLIAAgCQABgIgIAAIgCAAQgdgGgfgDIgBgCQgRgRgXgKIgBAAQgEgPAAgTQAIgJgDgUIAAgCQAJgZgBghIgBg7QAjAJAhAKQAhALAgANIAqATQAfAOAdAQIAAABQAmABAVASQABACAAADIAAAbIAAACQgDAXAHgCQAJgCgCgRIgBgJIABgBQADgPgEgLIAAgCIAAgCQARADgFAZIAAADIAAATIAAACIAAADQgEAigNAaIABACQAGAQgCAZIgBAAQgIAVgFAWIAFARQAHAegPALIgDAAIgBAAgAPUpoIABAAIABgBIAJghIAAgCQgDgQgJgLIAAACQADASgBAVIAAADIgCAAIABATgANzsCIABAOIABABQAEAeABAgIAAACQAFADABAJIABAAQgDAfAGAOIAAgBQAGgEABgIQACgIgCgMQgKgvgFgzIAAgCQgDgDgFAAIgBAAgAOsqnIAAADIAAARIAAACIAAAKIAAAGIAAABQAAABAAAAQAAABAAABQABAAAAAAQAAABAAAAQAEABADgFQACgFABgMIgBgQQgCgVgKgGQAAAMACAJgARrmyIgGg8QAJgXAEgbIACAAQgDgNgEgLIgBgDQAJgZAJgNIACAAQAMAPAEAZIACAAIADgCQgHgTALAIIABACQAEAgAAAlIABAAQAGgKABgQIAAgCIAAgDQACgLgEgGQgBgWAJAQQgCAmABArIgDAAQgaAJgKAbIgBAAQgJAKgOAEgAropoIgUgHIAAgDQAAgOgFgKIAAgCQACgOgEgIIAAgCIAAgFIAAgCIAAgRIAMgCIACgBIABAbIACAAQAJAggCggIAAgDIAAgCIAAgaIASgIIA/gbIACACQADAEAAAHIABBSIACAAQAAAEABADIABACIAAAbIAAACIgEAKIgBACQgqgFgpgOgArnp0IACACQAHgJgEgEQgCgDgFgBQgBAKADAFgArUq5IABACQAAAPABAQIABAAIADAAIABgBQADgNgEgIIAAgCQABgPgJgEQgBAHADADgAR/qkIABgDQANAPgIAaIgBADQgIgPADgagASQqfQAGgCgBAEIAAACIAAAYIAAADIAAABQgIgKADgWgAStqRIAEABIABABQAFAEgBAIIgCAAIAAABIgBAAQgKAAAEgPgASfqKIAAgRQALASgLADgAr/srQgOgHgMgMIgBAAQAAgRgIgTQAOgDADARIABAIQAAAMAGAJQAAgWgDgSIgCgLIACgBIADADIAEAGIAAADIACATIABAAQgBAGACAEIABACQAIgVgPgZIAAgCQANgNAHAHQAGAFACAMIADAEQACACABAEQAJACgIgWQgJgZgCgbQAUgFAPgKIABgBIAQArIABACQACAJAAAKIAAADIgCAAIABATIABAAIAAACIAHAkIAAADQgFANgJALIAAABQgjgBgcgPgAqotDQgBgJgEgHIgBgBIgBgHIAAgCIAAgRIAAgCQgGgjgLgeIAAgCQgDgJABgNIAAgCIAAgDQAhgGATAJIAAAHIgCAAIABAVIABAAIAAADIAAACQABAJADAIIABAAQAMATgCAWIAAACIgDAAIAAAWIAAACIgBABQgSARgTAEIAAgDgAQmuSQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABgBQAYgJAUASQABACAAAEQAAAfAHgkIABgCQAMAJgKASQgGALABAHQANgJABgUIABgCIAAgCQADgIAGAGIAAACIgBAAIgGAOIAAACQACAKgEAFIAAAEIACABQAAADAFAAIAAABIgDABQgqAJgnACQAPgggEgjg");
	this.shape_5.setTransform(-283.2,-180.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C6FFFF").s().p("AAIDOIgEAAIgCAAIgEAAIgPgBIgjgCIgBACIgBAAIAAgBIgTgBIgCAAIgYAAIgDAAIgrAAIAAACIgCAAIgFAAIAAgBIgdgBIgCAAIgkAAIgDAAIgCAAIgmAAIgDAAIgTAAIgCAAIgKAAIgHAAIgDAAIgkAAIgCAAIgpAAIgCAAIgYAAIgDAAIh6AAIjdAAIAAgBIAAAAIgpgBIgGAAIgNAAIAAACIgCAAIgDAAIAAgBIghgBIgDAAIgTAAIAAACIgCAAIgKAAIAAgBIgagBIgDAAIgQAAIgDAAIgVAAIgKAAIgCAAIg4AAIgCAAIgiAAIgCAAIgfAAIgDAAIhIAAIgMAAIgCAAIgRAAIgCAAIgWAAIgCAAIgfAAIgDAAIgwAAIgCAAIgRAAIgCAAIgRAAIgDAAIgHAAIgCAAIgbAAIgCAAIgRAAIAAgCIgTgBIgCAAQgUgKgVgJIAAgBIgdgBIgCAAIgDAAIgcAAIgUACIABABIgEgBIgzgEQhfAPhkAGQgKAAABAJIgOAAIAAmaMA47AAAIAAFoIgCAAIgCgEIg2gDIgygDIAAABQgKACgHAIIgDAEIAAADIAAACIgIAEIgCAAQgIARgKANIgBACIgwACIgCAAIAAgBIgYgBIAAACIgDAAIhkAAIgDAAIgyAAIgDAAIghAAIgDAAIgTAAIgCAAIgKAAIgCAAIguAAIgCAAIhbAAIgDAAIgRAAIgCAAIgWAAIgCAAIgiAAIhgAAImwAAIAAgBIgkgBIAAACIgCAAIgmAAIgBgBIgXgBIAAACIgDAAIAAgBIgTgBIAAACIgCAAIgFAAIAAgBIgpgBIAAACIgCAAIgDAAIAAgBIgYgBIgCAAIgTAAIgDAAIgRAAIgCAAIgaAAIgDAAIgaAAIgDAAIg8AAIAAACIgCAAIAAgBIgmgBQgHABgJABQgIAAgGgCIgSAAIAAACQg4AAg3ACQgRABgKgEQgIAEgMAAIgCAAgA4PCpIABAAIAAAAIgBgCIAAACgA4EBBIABACIgBgDgAvPASIAAABIACgBIgCAAg");
	this.shape_6.setTransform(-283.2,-312.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AzJRRQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBgBAAgBQAtgnA/gWIALgEQAIgUAWgHIANgFIANABQAhgUAXgdIABgCIgRg/IAAgCIgBAAQgDgIgBgJIAAgCQgDgSgGgQQgGgQgJgNIAAgCIgDgIIAAgCIgCgFQgEgPgDgQIgBAAIgCgKIAAAAIgBgGIgCAAIAAgBIgBgRIAAgCIgBAAIAAAAIAAgEIAAgBIAAgCIgBgEIAAAAIAAgCIAAgBIAAgBIAAgCIAAAAIAAgBIAAAAIAAgBIgBgBIAAgBIAAgBIgCgLIAAAAIgBgBIAAgBIAAAAIgBgDIADADIAAAAIACACQADADACAFIAAABIAAAAIAAABIAAABIAAAAIAAAAIABABIAAAAIAAABIAAABIAAABIAAAAIABACIAAAAIAAABIAAAAIAAACIAAAEIAAACIAAADIAAACQAEACABAEQABAEgBAHIAAACIAAADIABAFIAAAAQACAGACAFIACAAIAAARIAAACIAAABIAEAIIACAFIABABIAEAKIAGAPIAGAQIAMAkIACAGIACALIAIAmQABACACADIABAAQAkgXAYgiIACgBIAAgBIgCgOIAAgBIAAgCIAAAAIgCgIIgBAAIAAACIAAAGIAAAAIAAACIAAACQAAABAAABQAAABAAABQAAAAgBAAQAAABAAAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAgBIgCgEIAAgCIgDgMIgHgVIgEgKIgBgCQgEgGgBgJIAAAAIgBgBIAAAAIgBgMIAAAAIABgLIgCAAIgBgQIAAgDIAAgDQgBgZgEgWIgBgCIgDgQIAAgBQgEgTgFgRIgIgWIAAACIAAACQAEAGgCALIAAABIAAACIAAAmIAAACQgBAHADACIABABIADAHIAAAAIABAKIAAACQACAOADANIAAACQACADABAFIAAALIAAADIAAACIAAAIIAAAEIAAACIAAAAQAAAAAAAAQAAAAAAAAQAAAAgBgBQAAAAAAgBIgBgBIgBgEIAAgBIgCgGIgBAAIgBgOIAAgBIgBgHIAAgCIgBgCIgBgDIAAgFIAAgMIgBAAIgCgFIAAgBIgDgIIgBgCIAAgBIgDgLIgBAAIAAgBIAAgGIAAgEIAAAAIAAgBIgBgMIAAgKIAAgBIAAgNIAAgDQgCgkgKgdIAIgwIAAgBIAFguIABgBQAGAOgEAbQgKA1ATAkQAPAcAEAmIAAAAIAAABIACARIAAAAQAFAGAEAIQAKAZgFAoIAAADQAKAPAFAUIABABIAAABIACAHIAAABIACAIIAAACIACAAIADgCIAFgFIABgBIABAAIAAAAIADgCIABgBIAAAAQAfgWAmgQIABgCIAQAAIADAAQATgNAPgRIACgBIAAgUIgBgLIAAgCIAAgHIAAAAIAAgCIAAAAIAAgEIAAgCIAAgCIAAAAIgBgKIAAgBIAAgGIAAAAIAAgEIgBgEIAAgIIAAAAIgBgGIgCAAIgBgFIgBgBIAAAAIgBgDIAAgCIAAAAIAAgBIAAAAIgBgCIAAgBIAAgBIgBgEIAAgCIAAgBIAAAAIAAgCIAAAAIgBgCIAAgBIAAgBIAAgCIAAgBIAAgBIADABIABABIABABIAAABIAAAAIABABIAAABIAAABIABAAIAAgBIAAgBIAAgBIgBgBIgBgDIgBgDIAAAAIAAgBIgBgCIgCgFIgBgEIgCAAIgBgBIgCgBIgGgGIAAAAIgBgBIgBgBIgBgBIAAAAIgBgBIgBgBIAAAAIAAAAIgBgBIAAAAIAAgCIAAgLIAAgIIAAgDIAAgCIAAgBIAAgEIAAgDIAAgCIAAgGIAAAAIAAgCIAAgOIAAgOIAAgHIADgVIACgMIABgDIAAAAIABAAIAAAAIACADQAGASgBAVIgBALIgBAPIgCASIAAAPIAAAMIACACIAAAAIACACQAIAIAGAKIABAAIACAFIADAFIADAFIACAGIAAAAIABACIAAABIAAABIAAAAIABABIABACIAAAAIAAABIAAAAIABACIAAAAIAAADIAAAAIABABIAJABIABgBIAAAAIADgBIABAAIAAAAIAAAAIAGgCIACgBIABAAIABAAIAAAAIABgBIAAAAIAGgCIAFgCIADgCQAcgPASgZQAFgHgEgLIgDABIAAgCIAAAAIgBgCIgGgWIgCgIIgFgbIgBAAIAAgCIgBgHIgBglIAAgCIgBgCQgCgKABgMIAAAAIAAgDIABACIAAABIAAAAQAGALACANIABACQADAMAAAOIgBAPIAAACIAAABQABAOADAMIABABIAAABIACADIAAACQABAEgBAIIAAACQADAEABAIIABAAIACgJIABgBQADgFAEgDIAEgDIAFgEIAAAAIADgCIAAAAIACgBIADgDIABgBIAAAAIAVgSIACgBIABgBIADgDIAAgBQgFgKgDgMIAAAAIgCgHQgDgOgCgQIAAgFIAAgDIAAgCIAAAAIgBgLIAAgBIAAgDIAAAAIAAgFIAAgBIAAgCIAAgBIAAgBIAAgEIABgHIAAgEIAAgBIAAgBIAAAAIABgbIAAAAIgBgKQgBg0gSggIgDgFIgGgJIAAgDQABgVgLAAIgBAAQACgwgNgfIgBgBIgBgTIACAAIABgCQAFgNgBgVIgBAAQgUglgKgvQgNAQgQANIgUAPQgPAKgTAGIg4AOIg1ALIgKACIAAABIgJAHQgIAFgLAEQAFABABAGIABACIAAAWIAAAJIAAADIAAAMIAAAOIAAADQAFAFACAIQAEAIAAAKIABAHIAAACIAAADIAAACIAAAMIAAADIAAACIAAAXIAAABIABAAIAEAIQAGAPgCANIgBgBQgIgMgEgQIgCgIQgFgYABgeIAAgKIgBAAIgCgFQgCgIgEgGIAAgCIAAAAIAAgCIAAgTIAAgFIgBgNQgCgIgCgGIgRARIgoApQgHAIgFABIgBAAIAAACIAAAGQAMgBALAEIABABIAAABIAPAEQgKANgHAQIAAACIAAARIAAACIAAADIAAADQAAAUgTADIABgEIADgBQAGgCgBgGIgCgFIAEgiIgMAAIgBgBIgJACIgQAEQAAAFADACIAAACIAAAWIgIABQACgOgEgOIgEgBIgCACIgpAiIgEAFIAKACIABAGIgBAAIAAALIAAAFIAAABIAAACIABACIAAAKIAAALIAAABIAAACQAAALgCAJIgCAHIgBgIQgBgLgJgFIAAgBIAFgQIABgEQgIAHgLADIgJADQgEAGgGAEIgGAEQgEAGgEAHIgCgCIgFACIgBABIAAgDIglAcIAgADIgBAIIgCAAIgBABIgBAAIgBAAIAAAEIAAAAIgBAAIABAAIAAABIAAAAIAAAEIAAABIAAACIABAAIAAABIAAACIAAABIAAABIAAAAIAAABIAAADIABAAIAAACIAAABIAAABIAAACIAAAAIAAAAIAAABIAAADIABAAIAAABIAAACIAAABIAAAAIABABIAAACIAAABIABAGIABABIAAABIAAABIAAABIAAAAIABACIAAAAIAAABIAAABIABAAIABAJIAAAGIAAAAQAAAIgDgHIAAgBIAAAAIgBgDIAAgBIAAAAIgBgBIAAgDIgCgFIAAAAIAAgCIgBgBIAAgBIAAAAIAAgBIAAAAIgBgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIgBAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgCIgBgCIAAAAIAAAAIAAgBIAAgBIAAgBIAAAAIgCAAIAAgEIABAAIAAAAIgBAAIAAgCIAAgBIAAgBIAAAAIAAgBIAAAAIAAAAIgBgBIAAAAIAAgBIAAAAIAAgBIAAAAIgBAAIAAAAIAAgBIAAAAIAAAAIgBgBIAAAAIAAgBIAAABIAAABIAAAGIAAAAIAAABIAAAAIAAABIAAAAIAAACIABABIAAABIAAAAIAAACIAAABIAAACIAAABIAAADIABABIAAABIAAABIAAACIAAAAIAAAEIAAABIAAAAIAAABIAAACIAAABIAAABIAAABIAAABIABAAIAAABIAAAAIAAABIAAABIAAABIABAHIAAAAIAAACIAAACIAAATIgBAPIgBAAIAAACIAAALIgBABQgBAQgFANQABAPAFALIACAFIABABIAAAAIAHAKIAAAAIABACIABABIABACIAAAAIAAABIABABIAAABIAAAAIABABIABAFIAAABIAAABQACADABAFIgBALIAAACIAAAFIAAADIAAAXIAAABIAAACIAEAHIAHAMIAAAAIADAFIADAEIABABIAAAAIAAABIABAAIAAABIAAAAIABABIADAEIABACIACABQABAAAAABQAAAAAAABQABAAAAABQAAABAAAAIABAAIAAgCIAAgDIAAAAIABAAIACgBIABAAIAAAAIABAAIACABIAAAAIABACIACAEIAAADIABALQAAADgCAJQAEAJgCAOIgCABIABACQABAFgEAAIAAACIAAAiIAAACIABAAIAEAbIgCgBQgIgVgMgRIAAgCQADg0gIgqIgBAAIgUgVIAAgDQgBgkgFgiIAAAAIAAgCIgBgFIAAAAIAAgCIAAgCIAAAAIgBAAIgBgBIgFgHIAAAAIgBgBIgDgEIgFgFIgEgEIABgMIAAgEIAAgBIADgaIABgDIADgeIAAgBIAAgBIAAgLIAAgFIAAgEIAAgCIAAgBIAAAAIAAgBIAAgBIAAgEIAAgCIAAgBIgBgCIAAgBIAAgCIAAgCIAAAAIAAgBIAAgBIgBgCIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIgBgBIAAAAIAAAAIAAgCIAAAAIAAgBIAAAAIAAgCIgBAAIAAgBIAAgBIAAgBIAAAAIAAgBIgBAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIgBAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIgBAAIAAgBIAAgBIAAAAIgBgBIAAgBIAAAAIAAgBIgBgBIAAAAIAAAAIAAgBIAAgBIAAgBIgBgBIAAAAIAAgBIAAAAIgBAAIgCAAIAAAAIACAAIAAgBIAAAAIgCAAIABAAIABAAIAAAAIAAgBIAAAAIAAAAIAAgBIgBAAIAAAAIAAgBIAAAAIAAAAIAAgBIAAAAIgBAAIAAgBIAAAAIAAAAIAAAAIAAgBIgBAAIAAgBIAAgBIAAAAIgBgBIAAABIAAAEIgFAAIAAgBIAAAAIAAgBIAAAAIAAAAIAAgBIAAAAIgBgBIAAgBIAAAAQgBgDgDgDIgKADIAAABIABACIAAAAIAAABIAAAAIABABIAAAAIAAAAIAAABIAAAAIAAABIABAAIAAAAIAAAAIgGADIAGgCIAAAAIAAABIAAAAIAAABIABABIAAAAIgCAAIgBAAIgBAAIgBABIgDAAIgCAAIAAAAIAAAAIgCAAIgIAAIAAAAIAHAAIACAAIAAAAIABAAIAAAAIgBAAIABAAIAAAAIAAAAIAAAAIALAAIACAAIAAAAIAAAAIAEAAIAAAAIAAAAIAEAAIAAABIgGAAIABAAIgBAAIgCAAIABAAIgCgBIAAAAIAAAAIABABIAAAAIgBAAIABAAIgCAAIgBgBIABAAIAAAAIABABIAAgBIgBAAIAAAAIgBAAIAAABIAAAAIAAAEIAAAAIAAACIAAAAIAAACIAAAAIAAABIgBAAIAAAFIAAABIAAABIAAABIAAAAIAAAAIAAABIgBAAIAAABIAAAAIgBAAIAAAAIgBgBIAAAAIgBgBIAAAAIAAAAIAAAAIAAgBIAAAAIgBgBIAAAAIAAAAIAAAAIAAgBIAAAAIAAAAIAAgBIgBAAIAAAAIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIgBAAIAAAAIgBAAIAAAAIAAAAIAAgBIAAgBIAAgEIgBAAIAAgDIAAgBIAAAAIgEAAIgBAAIAAAAIgFAAIAAAAIAAACIAAgBIAAAAIAAABIgBAAIgFACIAAgCIgBAAIAAgBIAAAAIAAgCIgBAAIAAAAIgBAAIABAAIAAACIgBgBIAAgBIgBAAIgGAAIAAAAIAAAAIgBABIAAACIAAAAIABABIAAAAIAAABIAAAAIABABIAAAAIAAABIAAAAIAAAAIAAABIAAABIABABIAAABIAAABIAAAEIgBAAIgCAAIADAAIAAAAIAAABIAAACIgBAAIAAACIAAAAIAAABIAAABIAAAAIgBAAIgBAAIAAABIAAAAIgBAAIAAgBIgBgBIAAAAIAAgBIgBAAIAAgBIAAgBIAAAAIAAgBIAAgBIgBAAIAAgDIAAAAIAAgCIAAgBIAAgCIAAgBIAAAAIAAgBIAAAAIAAgBIgCAAIAAgBIAAgDIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAAAIAAAAIAAgBIAHgBIAAgBIAAgBIABAAIADgBIAAAAIACAAIAAAAIABAAIACAAIgBAAIABAAIAAgCIgJABIAAAAIAAABIAAAAIAAAAIAAABIgEAAIAAABIgBAAIgDAAIAAgCIABgBIABAAIAAAAIgBAAIgBAAIAAAAIgGAAIgGAEIACAAIAAAAIAAABIAAABIAAABIABACIAAAAIAAABIABAEIABADIAAAAIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAABIgBAAIAAABIAAABIAAAAIAAACIAAAAIgBAAIgCgBIgBgBIgBAAIAAAAIAAgBIAAAAIgBgBIAAAAIAAgCIAAAAIAAgBIgBAAIAAgDIgBgDIAAgGIgBgHIgFAEIAAAJIAAAFIAAABIgBACIgBAAIAAACIAAABIAAAAIgBAAIgBADIAAAAIAAABIgBAAIAAAAIgBgBIAAgBIAAgBIgBgGIgCAAIgCAAIABAHIAAAAIAAADIAAAAIAAABIAAAAIABAFIAAAGIAAAAIABACIAAAAIABAJIAAABIAAABIAAADIACAPIABAJIAAADIAAACQACARgFAMIABACQAFASACASIABAHIAAACIAAACIAAAFIAAABIABATQgCAkgMAkQAIAXAHAXQAJAegFAUIgCAAQgLg2gQgxQALgkACgpIAAgDIAAAAIAAgKQABgbgFgZQgCgJAAgKIAAgCIAAgfIAAgDIAAgBIgBgLIAAgBIgBgIIgBgFIAAAAIgBgEIAAgBIAAAAIgBAAIgCAAIgIADQgyARgzAQIgQAFIgBAAIgBAGQgEAUgPAHIgIACIAAAAQgsAXgwgJQg1gLg4AEIgcACQg5AAg6gEQABgEACAAQBPADBDgWQBUgCBOAKQADAAADgCIAWACQAMgEAKgIIAAgBIAAAAIAEgWIABAAIAVgEQApgIAjgQIAFAAQAIAAAFgFIAIgIIAFgCIgBgBQAGgJAKgGIANgHIALgEQAVgDAVgCIADgBQAPgEAOgHQACgEAEgCQAXgXAdgPIAAgBIAAgCIABAAIAAgBIABAAIAIgEQARgEALgMIAAAAIgBgHQgCgGgGgCQgIgCgIgBIABgBIAHgDIADgDIAQgSQARgQAUgOIACAAIAKACQABgDAFgBIAFgBQAJgFAKACQALACAIgGIABAAQACgDgBgEQAAgFgDgDIgCgCIgDAAIgCgBIgTgBIgEAAIgCAAIgBgBIgBAAIAAgCIAAgBIAAAAIABgBIgBAAIAAAAIAAgCIAAgBIACgCIABgBQABgEABgCIgBgFIAAgBIACgBIABgBIADACIABABQAdgWARgaIAGgJIABgCQAPgJgDgKIAAgDQAbgSAlgJIAAAAQAbgHAhgDIAKgBIAJgDIAQgGQAbgMAWgSQATgQAOgVQADgDgEgFQgLgJABgIIAAgCIAjgZIA4goIADgBQgRgTgTgRIAAgCQASgYAigJQAdgHARgTIAMACIACAHQADADAEADIgCAGIACACIgCAAIAAAAIAFApIAAACQAEAJgDAPIgBAAIAAADQgFApgCArIABABQAcAggRA4IAAACQASAigLA3QAAAAABAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAHALAJAKIAAACQAAAlgKAZQAHAKACANIALBDIAAACIAAAAIAAABIACALIgBABQgSASgPAVIgCABQgfAHgaALIgBAAIgOAHIAAAAIgEACIgNAHIgBAAIAAABIgBAAIAAACIAAABIAAABIACAFQADALACANIACAMIAAABIAAACIABACQAEACADADIACAEIACAFIAAABIAAABIAAAEQgDAHgGADIgBABIgBAAIgBABIgFADQgKAGgIAHIgDADIgCABIAAABIgGAFIgHAIIgCAEIgCADIAAACIAAAdIgCABQgRAYgfAJIgEABIgMADIgEAAIAAABIgBABIgIAFIgIAFIgCACIgJAIIgBABIgFAGIAAABIAAADIAAADIAAAFIAAADIAAAEIAAADIAAADIAAABIAAAFIAAAGIAAAAIAAACIAAACIAAACIAAAAIABADIABAMIAAAPIAAACIAAAAIgCAJIgCACQgFAAgDADQgHAGgJAEIgLAEIgEABIgDABIAAAAQgxAQglAbIgBABIgEADIgLAJIAAACIACAMIAAAAIAAABIAAANIAAADIAAADIgBAAIAAAAQgcAlgjAbQADAYgRANQgVASgXAQIAAABQhIA5hXAiIgHAEQgIAAgHgCgAsEKRIAAAAIAAABIAAABIAAAAIACABIAAAAIABAAIABgBIgEgCgAp9g5QgvAdgpAgQAGAIAHAGIACABQAFBBAVAvQAGANgDAKQgCAKgBALQAKAaAFAkIADACIABADQAEALgBASIAAACQADALAHAIIACAAQAGAUABAaIAAACQAEAJgCAPIAAADQABATAHAOIACAAQABAOgBAMIAAAAIgBAIIgBACIgBAIIgCAEIAAADIAGgEIAFgDIABAAIAMgGIAAAAQAZgKAegGIADAAQANgRAPgPIAAgCQgDgXABggQABgggPgSQAHgdAEgfIABgDQgLgKgHgNIgCgBQAFgogCgkIAAgDQgIgEgDgKIgBAAQALghgGglQgCgMgNgCQgCgDAAgEIAAgDQARhNgQhPIgBAAQgLAAgPAIIgBABIACADIABACQAEAJgCAPIAAADQACAMAAAOIABACIAAADQADAjgIghIAAgCIgDgbIgBAAQgBgNAAgNIAAgCIAAgEIAAgBIgCAAQgKACgIAEIgCABIgBAAQgCAEgGgCIAAAIIAAACIAAATIAAADIAVBeIAAACQAEgDgBgMIAAgCIgCAAIgBgPIgBAAQgBgNAAgNIAAgCIgBgBIgBgXIgBgDIgDgaIgBgPIAEAMQAIAaACAgIAAACQAEANgBATIAAACIAAACIAAADQAEAGgCALIAAACIACAJIAAACIAAAGIAAADIAAAcIAAADQAEAHgCAMIgCAAQABAUACASIAAADQAIAFAAAOIABAAQAEAVgBAbIAAACIAAADQADAKgBAOIACAAQAJARgBAQIgCAAQgQgWgEgjIgBAAIgBgwIgBgCQgDgMgGgKIAAgDQACgMgEgHIgCAAIgBgTIADAAIAAgCQgEgWABgaIAAgDQgSghgIguIgBABgAzpG9IAAAAIAAgBIADAAIACAAIAAABIAEAAIAAgBIAAgBIAAAAIAAgBIAAgCIAAAAIgCAAIAAAAIgCAAIgCAAIAAAAIgDABIAAAAIAAAAIAAACIAAABIAAAAIAAAAIAAABgAzQGyIgJABIAAACIAAAAIAAAIIAKgBIAAgEIAAAAIAAgFIAAgBIgBAAgAyhG6IgEAAIgMACIARgCIgBAAIABgBIAHAAIAAAAIAAAAIgDAAIAAAAIgEAAIgDAAIgHABIAIAAgAysG6IADgBIgBAAgAqGh2IAAACQgBAXAJANIABgDIACgJQABgagLAAIgBAAgAsdOXQAVgRAQgVIACgBQgMAjgbAFgAsmNgQANgIAKgKIACgDIADgDIABgBQAMgMAIgOIABgCQgCgFAAgEQABgFACgEIAAgBIAEgEQAEgEAHgEIACgCIAEgDIAAgDIAAgJIAAAAIAAgGIAAgGIACAAQAEACABAFIAAAGIAAAAIAAABIAAADIAAACQgBAHgEADIgCAAIgRAYQAAAdgUASIgCABIgCACIgCABIAAAAQgOAKgJAAIgGgBgAtuNcIAAgBQAagHgJgQIgCgCQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAcgKAXgPIADgBIABgBIAMgIIAAAAIAEgDIAAAAIATgQIADgCIACgBIAIgIIACgGIAAAAIABgDIAAgBIABgFQAAgLgFgGIgDgCIgBgCIABAAIAEABIAGACQAEADACAEIAAAAIAAACIgDAMIgBADIAAAAIgBADIAAABQgEAKgFAIIgDAFQgGAHgGAGQgGAGgIAEIAAABIgHADIgFADQgLAFgNACQgOADgIAJQADAcgZAAIgGAAgAwfMiIAAgCIgDgGQgIgWgGgYIgBgEIAAgBIAAgCIgCAAIAAABIAAAOIAAACIAAACQAGARgEADIgBgBIgKgmIgDgKIgBgBIAAgBIAAAAIAAgBIAAgBIgBAAIAAgBIAAAAIAAgCIgBgBIAAgBIAAgBIAAAAIAAAAIAAgBIgBAAIAAAAIgBgEIgBgCIAAAAIAAgBIAAgBIgBgBIAAgBIAAAAIAAgBIgBAAIAAgBIgBgDIgDgJIgDAAIAAAAIAAACIACAHIAAACIAAACIAAABIAAABIABACIAAAAIAAABIAAABIAAABIAAABIACAFIAAABIAAABIAAAAIAAABIAAAAIABABIAAAAIAAABIAAABIAAACIAAABIAAAAIAAABIAAABIAAAAIgBAGIAAAAIAAACIAAABIAAABQgBAAgBABQgBAAAAAAQgBAAAAgBQAAAAgBgBIAAgBIgBAAIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgCIAAgCIAAAAIAAgDIAAgDIgBgBIAAgBIAAAAIAAgBIAAAAIgBgCIAAAAIAAgBIgBAAIAAAAIAAgBIAAgBIAAAAIgBgEIgBgCIAAAAIAAgBIgCgEIAAgBIAAAAIgBgBIAAgBIgBgCIAAgCIgBgCIAAAAIgCgEIgCgGIAAgBIgFgNIAAAAIgBgDIAAAAIgBgCIAAgCIgBgDIgBgBIAAgCIgBAAIAAgBIAAgBIACACIAHALIAAABIAAAAIAAAAIAMAUIABACIABgDIABgCIAAgCIAAgFIAGANIACAEIAAABIAAAAIABABIAAAAIAAABIABABIACAFIAAABIACAEIABACIAAABIAAAAIABABIAAABIAAAAIAAABIABABIAAABIAAAAIABABIAAACIAAAAIABABIAAAAIAAABIAAABIABABIABAEIABABIAAAAIAAABIAAAAIAAABIABAAIAAABIAAABIADAHIAAADIADAAIAAgDIAAgJIAAgBIAAgCIgBAAIAAgBIAAgBIgBgFIAAgBIAAAAIAAgCIAAgBIAAAAIgBgCIAAgCIAAgBIAAgBIAAgCIAEAAIABABIABABIAAABIAAAAIgBACIAAABIAAAAIAAABIABACIACAGIAAAAIAAABIAAABIABACIAAABIAAABIAAAAIABACIACAHIACAJIAAAAIAEARIAAABIAHAeIAAAAIABAFIAAACIAAACIACAHIAAABIAAABIABADIAAADIgGgOgAq/MAQAEgBgBgHIACAAIAAAAIAAgCIAAgOQAJAFgHAJIAAACIAAADQgCAGgCACIgBAAQAAAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBgAZ4LwQhXgKhWgGIgIgHQgegHgYgOIgCAAIgkAAQgNgIgOgFQgbgJgYgMIAAAAIgJgEIgNgHIgBgBIgFgCIgCAAIgFAAIgBAAIgLACIgDgBQgZgOgggFQgJgBgIgDQgXgIgLgVQgZgMgfgEIgBAAIgDAAQgdgEgbgGIAAAAIgCAAIgCAAIgBgBIgCAAIgCgBIgDAAIgDgBIAAAAIgBAAIgagHQgYgIgWgJIgVgLIgOgHIAAAAIgBgBIABgCIAAgHIAAgCIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgDQgBgKgCgJIgBgEIgBgEIgBgBQgRgMgOgQQgFgBABAEIgBACIgBgCIgFgIQgGgMgEgOIgCABQgJAKABAMIAAABIAAAFIAAABIAAAAIABABIADACIAIAEIACABIACABIAIADIAAAAIAKAEIAAACIALALIAAAAIAIAIIAAACIAAABIAAAFIAAACIAAAEIAAAGIAAACIAAAHIABABIABAJIABABIAFAEIABABIACABIAAAAQAFAFgBACQAAABAAAAQAAAAgBABQAAAAgBAAQAAABgBAAIgCgBQgFgCgEgEIgFgFIAAgBQgDgFgDgGIAAgDIAAgHIAAgFIAAgCIAAgMIAAgCIgFgEIgGgIIgBgCIgCgCIgCgEIgBAAIgCAAQgHAAgFgBQgLgDgFgIIgDgFIgCgIIAAAAIAAgEIABgDIAAgBIABgFIABgCQAFgKAIAAIADAAIAAgDQABgKgBgSQAWgmgPgsIAAgCQAEgMABgPIAAgCIAAgDIAAgQIAAgDQAEhHgLhHIAAgBIgCgOIAAgBIgCgIIAAgDIgBgEIAAgCQAfgmAmggIAAgCIgDgEIgCgCQgPgNgRgNIgBgCQAzgeBDgNIACAAIgIgDIADgBIANAAIAIgCIgJAHIgBACQgVANgeAGQghAGgZAPIgDACIgEADIACAAIAHAFIAGAEQAMAIAJAMQAAAHgDACQgjAegeAjIABACIACABQAPANgPgHIAAABQAYAqAjAfQAMAMAIAQQgEAwgYAdIgBACQAiAZAwAKQAGACAFADIAJAIIABABIADAGQgCAPAEAJIAAADQALAPAPALIAFADIAAACIASAAIAJAAIACAAIAAgDQAMAAAMACIAAABIArAAIADAAIAaABIAAABIBGAHIACAAQAiAjBKgGIADAAIAhABIAAACQAUAOAdAFQAcAFAUALIACgBIAAgBQBiASBlADIAOAAQA2AEA1ABIADAEIAAADQiKAFiKgRQgdgEgYgJIABgEIAAAAQg3gIgpgWIgDAAIgYAAIgCAAQgOACgIgFIgCAAQglABgZgKIgCAAQABAKgEAEIAAAMIAAADIAAAfIAAACIAAADQACAPgFAJIAAABIgFAEQgGABACgVIAAgCIAAgRIAAgCIAAgRIACAAIAAgDIAAgVIAGgOIABgBIAAgCIgCgBQgKgFgHgIIAAAAIgCgBQhZgOhiAHIgJgFIgEgCIgBgBIgOgKQgVgPgCgkIAAgCQgngVgvgNIgBACQgTA7AZAvIAAACIAAAkIgCABQgLAZABAeQAAAPAEARIAAACIAAABIAAAAIAAAAIAGAEIBHAgIACABQAGADAHgEIABADIAAABIABAAQACADAFAAIABABIADAAIABAAIACAAIACAAIABABIACAAQBBAJA3ASQAFAXAaAEIAqAIIAIACQAVAFASAIIABAAIAAAAQANAGAMAHIAFADIADACIACAAQAsAHAfAVQAcgBATAHQATAIATAFIAEABIAAgBIAFgCIACAAQAHAEAHABQCMAUCNgJIAhgBIACAEIAAADQgzAQg3AAQgXAAgYgDgANgB4QAEAFgBALIAAADQgBAcACAWIAGBbIAAAMQACAVgCATQgCAogNAhQADAPAAAQIAAADQARAZAaARIAAgBQADgcAKgUIABAAIAAgWIAAgCQgUgjAFgmQABgNAFgOQAGgTgLgLQACgPANgQIACAAIAMguIAAgCQgjgvgjgigAVbLeIgCgBIgUgQIgCAAQgLAAgGgFIgCAAQgEgCgGAAIgDAAQgHgCgHgDIAAgBIgBAAQgLgBgJgDQgOgDgLgGIgBAAIAAAAIgBgBIgFgCIgDgCQgMgIgJgLIgCAAQgkgIgfgLIgDgBQgSgFgNgLIgCgBIgKgLIgCgBIgngJIgCAAQgMACgFgEIgCAAIgagGIgCgBIgCgBIgEgBQgpgMghgUIAvAQIABAAIAdAIIADABIACAAIACABIACAAIACABQAeAHAfAGQAUAEALANIAEAFIAiARIACAAIATAFIAQAEIABAAIAAAAIAiAKIACAAQAHAKAJAGIADADIAGADIABAAIADACIADAAIAUAHIAOAEIABAAIADABIAHACIADABIAQADIAAACIADABIACABIAWAEIACABQAIAIAJAGIACAAIACABQAKAIgEAAQgCAAgKgEgASxK5IgBgBQAUABARAGIAFACIAEACQAMAFALAIIABACIhFgZgAxkLLIAAAAIAAgBIgCgEIAAgBIAAgBIgBAAIAAgBIgBgCIAAgBIAAAAIgBgBIAAAAIgBgEIgCgEIgCgEIgCgFIAAgBIAAgBIgBgBIAAAAIgCgHIgBgCIgBAAIgEgJIAAgBIAAgBIAAgBIgBgDIAAgBIgBgBIgBgFIAAgBIAAAAIAAgBIAAgBIgBgBIAAgBIAAgEIAAAAIAAgDIAAAAIAAgBIgBgDIADADIACACIAAABIABACIABADIAAADIAAAAIABABIAAABIAAACIAAAAIAAABIAAACIAAAAIABAEIAAABIABABIACAGIACABIAAABIAGAMIAAAAIAAABIABADIAAABIAAAAIACAFIAAABIAAABIABABIAAAAIAAACIAAABIABACIAAABIAAAAIABADIAAAAIAAACIAAABIABAFIAAACIAAABIgBgBgAwUK5IAAgBIgBAAIgBgGIAAgCIAAAAIAAgCIgCAAIgBgaIAEABIABABIAAACQACAEABAGIgBAMIAAACIAAAAIAAACIAAABIgBAGIgBAAIAAAAgA1NK3IgDgIQgDgIAAgKIAAgCIAAgTIACAAIACAAQAKAWgFATIAAACIgCAFIgBgBgAtnKuIgBAAIgCgYIAAAAIAAgCIAAgCIAAgDIADADIABABIABACIAAAAIAAABIAAAAIACAGQABAGgCAIIAAAEIgBABgA13KUIAAgDIgBAAQgCgJAAgKIADAAIAAgCIAAgMQAEgDADAAQAAAAABAAQABAAAAABQABAAAAAAQAAABABABQACAFgDAOIAAABIAAADQgDASABAQIgBADQgIgIABgQgAqqKZQgHgBgFgHQAigGANgWQAJgNABgTIgBAAQgJgCAAgFQAAgEADgEIABgCQAFgEAGgBIAIgCIACAAIACgBIAAAAIAKgKIABAAIAAAAIACgCIAGgHIABgBIAAgDQAEgDADgEIAAgCIAAgDQgCgIgFgGQAJABADAGQAEAGgDALIgBAAIAAACQgCAHgFADIgCAAIgEAGIAAABIgCACIgBAAIAAABIgGAFIgBAAQgIAGgMADIgBACQgHAHANAKQgCAQgGAMIgDAFQgGAIgJAGIgPAKQgIAGgHAAIAAAAgAteKUIAAAAIAAgBIAAAAIAAAAIgBgBIAAgBIAAgBIAAAAIAAgBIgBgDIAAgBIAAgDIAAgIIgBAAQgCgJABgKIACAAIAAgCIAAgDIACABIAAACIACAEIAAAAIABACIAAABIAAAAIAAABIAAABIAAABIAAAHIAAACIAAAGIABACIAAABIAAADIAAABIABACIAAABIAAAAIABABIAAAAIAAAAIAAABIAAAAIAAACIAAABIAAACIgBABIgCABQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBgBgBgAtNKPIgBAAIgBgBIAAAAIAAAAIAAgCIgBAAIAAgBIAAAAIAAgBIgBgBIAAAAIAAgDIAAgGIAAgCIAAAAIAAgBIgBgFIAAgBIAAAAIAAgDIAAgBIAAgEIAAgBIAAgCIAAAAIAAgBIAAgDIAAgCIgBAAIgBgTIgBgCQgDgBACgHIgCAAIgBgMQADgGABABQABACAAAIIAAACQAGALACAOIABAJIAAABIAAABIgDABIADgBIAAABIAAACIABAAIAAAAIAAABIAAABIACACIAAAAIAAABIAAAAIAAABIABAAIAAAAIAAABIAAAAIAAABIAAABIABABIAAAAIAAABIAAABIAAACIAAALIAAABIAAACIAAABIgBABIAAAAIAAACIAAAAIAAAAIAAABIAAAAIAAABIgBABIgFABgAyAKKIgEgFIgCgEIgBAAIAAgCIgBgDIgBAAIAAgBIAAAAIAAgBIAAgBIAAAAIgBAAIAAgBIAAAAIAAgBIAAAAIgCgKIAAgCIAAAAIAHAOIAAAAIABABIAAABIAAAAIAAABIAAAAIACAEIAAAAIAAABIACAHIAAACIAAAAgAsrJ9IAAAAIAAgBIgBgEIAAAAIAAgCIgBgCIAAAAIAAgBIAAgBIAAAAIAAgBIAAAAIgBgBQAEAAACADIAAABIAAACIAAACIAAABIAAACIAAAAIAAABIAAAAIgBABIgCABgAs4JuIgBgBIAAAAIAAgBIAAAAIAAAAIABAAIABAAIgCAAIgBAAIAAAAIAAgBIAAAAIAAgBIAAAAIAAAAIgBgBIAAgBIAAAAIAAgBIAAAAIgBgBIAAgBIAAgBIAAAAIgBAAIAAgBIAAAAIAAgCIAAgBIAAgEIgBgOIAAgMIAAgQIAAgPIAAgDIgCAAIAAgOIAAAAIgDgOQAEACACAFIAAAAIACAHIgBAFIAAACQAEABgBAGIgBADQAEAFgBAIIAAAAIAAAFIAAABIAAACIAAADIAAACIABADIAAACIABADQABAJAAAMIAAAAIAAACIgBAAIAAADIgBACIABgBIAAAAIAAAAIAAABIAAACIAAAAIAAABIAAABIAAAAIAAACIAAAAIAAACIgBABIAAABIAAAAIAAABIAAAAIAAABIAAAAIgBABIAAAAIAAAAIAAAAgAs8JsIABAAIgBAAgAzpJeQgCgBgBgDIgBAAIgBgIIACgJIACAAIAAgBQgDgDABgFIAAgDIgBAAIgBgYIACAAIAAgCIAAgDIAEgGQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAAAABQACACgBAOIAAACQACADABAEIAAAKIAAADIAAAEIAAAFIAAAIIAAAJIAAACIAAAAIAAACIAAABIAAABQgEAAgDgCgApHJTIgBgCQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAIAAgGIAAgCIAAgDQAHgDAEgGIABAAIAAgDQAIgHAGgIQAOgTAFgbIAAgBIAAgEIAAAAIABgDIAAgDQgMgIADgKIACgBIAVgNIABgBIABgBIAjgXIACAAIAFgOIACgBIAAgBIAAgGIAAgBIAAgFIAAAAIAAgGIAAgBIAAgKIAAgKIAAgDIgBgBIgFgEIgIgHQAHABAFACQAEADACAEIABACQAEAGgCALIAAABIAAABIAAADIABAEIAAABIAAAJIAAAAIgBACIAAABIAAABIAAACIAAADIgCAKIgCABIgHAHQgRAPgUAMIgBAAIgQAJIgBAAQgEAIAHAEIACABIABABIAAAFIAAAAIAAACIAAABIAAABIgFAUIgGARIgBACIgHAMQgHALgKAIIAAACIgHAIIAAACIAAAFIAAACIAAADQgDAJgBAAQgCAAgBgJgAxDJFIgCgCIgDgIIgBgDIgBAAIgBgHIAAgCQAAgHgDgDIAAgCIAAgDIgBAAIAAgMIgBgFIAAgTIAAgEIACAAIAAgDIACABIABACQADAMAAAQIAAADIgBAFIAAACIAAAHIAAADQAEACgBAHIAAADIAAACIABAEIACALIAAAAIAAABgAqtIoQgCgEABgIIgCgBIAAgFIAAgCIAAgBIgBgXIADAAIABAHIABACQACAKAAAJIAAABIAAABIAAABQAAAJgCAHgAwcIdIgEgGQAKgagFggIAAgCIgCAAIgBgHIgEgRIgCAAIgBgHIgCgDIAAgCQAAgNgCgLIgBgFIACgBIABgBIAAgDQAFAAACADQACADgCAGIAAADIAAAJIAAADIAEATIABACQAEACgCAIIAAACIADAFQAJAXgGAgQgDARgEAAIgCgBgAM4HgIgBgDQgNgFgFgMIgDgHIAAgCQAJgJAHgLIABAAIABgCIAIgNIAAABQAAAIgDAHIAAAAIAAAAIgCAEIAAAAIAAABIgEAGQgDAFgGAGIgBACIAEAEIALAJIACABIAFAOQAIARAKAPIABACQgUgHgGgfgAQTIBIgEgHIgBAAIAAgSQgCgWgGgSQAGgPgBgZQgBgMAKAAIAAAcIABgEQAAgBABAAQAAAAAAAAQAAgBAAAAQABAAAAgBQAGAUgIAQIgBADQAEAGgCANIgCAAIAAAMIAAACIABAAQACAWgCADIgBAAIgBgBgApYHzQAKgTgRgPIAAgCIAWgIIAAAAQAYgJAWgNIAOgJIAMgJIACAAQAGgMACgKIAAgBIABgLIAAgBIAAgBIgEgHIgBgBIAAAAIAAAAIAAgCIADACIAAAAIAEAEIAAAAIAAAAIAGAGIACAAIAAAGQABAHgCAGIAAAAIAAAAIgDAIIgFAHIgBACIgHAHQgNAKgPAIIgBABQgUAJgXAGIAAAAIgHABQgNADAGAIQAQASgVAMgAyDHrIgCgFIgBgCIgBgBIAAgBIgBAAIAAgBIAAAAIAAgBIAAgBIgBgDIAAgBIAAgBIAAAAIAAgCIAAgBIAAAAIgBgCIAAgBIAEgBQABAAABAAQAAAAAAgBQABAAAAAAQAAgBAAgBIAAgCIABABIAAAHIAAAAIAAABIAAAAIAAABIAAACIAAAAIgHAAIAHABIAAAAIAAACIAAABIAAABIAAABIAAABIABAGIgBAFIAAAAIgBgBgAyzHmIgBAAIgBgBIAAAAIABgBIAAAAIAAAAIAAABIABABIAAAAgAyzHdIgBgBIAAAAIAAgBIAAAAIgBgBIAAAAIAAAAIAAgBIAAgBIAAAAIAAAAIgBgBIAAgBIAAAAIAAgBIAAAAIAAAAIgBgBIAAgBIAAAAIAAgBIAAAAIAAgBIgBAAIAAgBIAAgBIAAgBIgBAAIAAgCIAAgBIAAgCIAAAAIAAgEIAAAAIAAgFIgBAAIAAgDIABABIABgBIABAAIABAAIgCAAIAAAAIgBAAIABAAIAAAAIAAAAIgCAAIABAAIAAAAIgDAAIACAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIgCAAIAAAAIgBAAIAAAAIAAAAIAAAAIABAAIACAAIAAgBIAAgCIAFAAIAAAAIAAACIgEAAIAEAAIAAAAIgBAAIgBABIABgBIgBABIgBAAIADAAIgBAAIACAAIAAABIAAAAIAAAAIAAABIAAABIABAAIAAAAIAAABIAAAAIAAAAIABABIAAABIAAAAIAAABIABAAIAAABIAAAAIAAABIABABIAAAAIAAAAIAAABIAAAAIAAABIAAAAIAAABIABABIAAABIAAABIAAABIAAAAIAAAFIAAAAIAAACIgBAAIAAABIAAAAIAAABIAAAAIAAADIAAAAIAAABIgBAAIAAAAIAAABIAAAAIAAAAIgBAAIAAABgAy5HcIgBAAIABAAIAAgBIABAAIABABIAAAAIAAAAgAy+HcIgBAAIADgBIABAAIgCABIgBAAgAy2HcIAAgBIABABgAy2HcIgBgBIABAAIgCAAIACAAIAAABgAy6HbIgBAAIAAAAIABAAIAAABgAy4HbIAAAAIAAAAIABAAgAy5HbIgCAAIACAAIABAAIgBAAgAy7HbgAx2HbIgBAAIgBAAIAAgBIgBgEIAAgCIgCgHIAAgCIAAAAIgBgBIAAgDIAAAAIgBgCIAAAAIAAgBIAAgBIAAgBIgBgBIAAgDIAAgBIgBgBIAAgDIAAgCIAAAAIACgNIACAEIAAACIABAAIAAABIAAAPQAAAJAGADIAAAGIAAAAIAAADIgBAFIAAAAIAAABgAy5HPIAAAAIAAAAgAy6HPIAAAAIABAAgAzYHPIgCAAIgBAAIAAAAIAAgBIAAAAIAAAAIAAAAIAAgBIgBgBIAAAAIgBAAIAAAAIAAgBIAAAAIAAAAIAAgBIgBAAIgBAAIAAgBIACgBIgBAAIgBAAIAAAAIAAgBIAAgCIAAgBIAAgCIAAAAIAAAAIAGgCIAAAIIABAAIAAACIAAABIAAACIAAAAIAAACIABAAgAz3HNIAJAAIgKAAgAy8HIIABgBIABAAIABABIgCAAIAAAAgAy9HIIAAgBIABABgAzQHHIAAAAIgBABgAsWHCIgBAAQgEgDgDgEQgDgFgCgHIgBgEIAAgDIAAAAIAAgEIAAgDIADAFIABACIAAAAIAFAJIADAIIABADIAAAAIABAEIAAADIAAgBgAzwG9IAAABIgGAAgAzTG9IACAAIgBAAgAsuG5IgGgOIgDgKIgCgIIAAgBIgBgFIAAAAIAAgDQAEADADAEIACAFIABAAIABAFIABADIABAFIAAABIAAADIABAMgAzpG3IAAgBIAAAAIAAABgAqLGxIgBAAIAAgBIgDgDIAAAAIgBAAIgBAAIAAgBIAAgBIAAgEIAAAAIgDgPIgBAAIAAgBIAAgBIAAAAIgBgGIAAAAIAAgJIAAgBIAAgOIgBgCIABgKQAFAFABAHIABADQACAFABAHIAAAAIAAAIIgBAGIAAADIAAACIAAACIAAABIAAACIABAAIABABIAAAAQACAMgBADIgBABIAAABIAAAAgAMrGoIAAgOQAQgXgPAmIAAACIgBgDgAtPGQIAAgCIAAgDIAAAAIAAgBIAAgBIgBAAIgBgGIAAgCIAAgFIgBgIIAAAAIAAgDQgEgKgBgMIgBgMIAAAAIgBgOQAKAXAEAcIABACIACAGIAAACIABAHIAAACIgBACIAAADIAAABIAAAAIAAABIACAEIAAABIABABIAAABIgBAKIAAACIgBAFQgHgCgBgUgAtgGHIgEgOIgBgEIgBgBIgCgLIgDgOIgBgLIgBAAIAAAAIAAgBQgCgJABgKIAAgCIgCAAIgBgOIAAgFIAAgDIgHghQAMAZAFAgIAAADQAEAFgCALIAAABIAAACIACALIABAHIACAMIAAABIABAHIABACIAAALIAAAAIgBABIAAABIgBACIAAgCgAqlGHIgFgPIAAAAIgBgDIgEgMIgBgHIgBgBQgEgTgBgWIAAgDQAKAZAFAcIADAVIAAAAIAAAIgAq5FnIgCgEIgCgJQgGgUgDgYIgCAAIgBgaIAAgCQgFgFAAgIQAFADACAEQACAEABAGIAAACIABABIAKBJIAAABIABAFIgBgBgAtyFgIgDgQIAAAAIgHgXIgEgNQgGgUgIgTIAAgCIAAgMIAAgZIAAgCIgBAAIgBgCQgHgVgFgYQgDgRgCgRQAPAnAJAtIAAACQAEAGgBALIAAACIACAPIAJApIAEANIADANIABACQACADABAFIAAAAIAAAFIgBAEIAAADIAAAGIAAAAIgBgCgAQKhSQASgCAQgOIABgBIACAAIABAAIAAgDQAPgNACgTIADABIAAgCIgCgCIAAgGQgBgsgngMIgBgBIACgBQAQgWgBgeIAAgBQANgHALgJIgCAAQgPgTgYgJIAAgDIgOgdIgDAAQgmgBgWgSQABgLgGgEQgSgLgWgFQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBAAAAgBQgKgPgDgWIgCAAQgTABgKgJIgCAAIgWAAIgHgFQgRgQgdgFIAAgCQgHgZACgjIAJgYIABAAIgFh7IAAgCQBDghBbAIIANABIAEAAIARAAIADAAQAPgBAOgEIACAAQAWgegIglIAAgDQAFgOAIgLIACgBQASgEAWgBIACAAIABAAIAAgCIATAAIACAAQBAgJBEgDIADAAQAMAAAMABIAAABIA5gCIADAAIAAgDQALAAAKACIAAABQBBgEA1gQIAAgCQAGgTgDgfIgBgDQAcgjA4gFIADAAQAGgaAUgKIADAAQgXgFgcACIgCAAIAAABQgMACgMAAIgDAAIgkAAIkKAAIgCAAIgUAAIgCAAIgRAAIgCAAIgdAAIgCAAIgDAAIgCAAIgRAAIgCAAQgfABgZgEIgCAAIgRAAIAAABQgRADgMgEIgCAAIgOAAIgBABQgRADgLgEIgDAAIAAABQgNADgIgEIgDAAIgYAAIAAABQgPADgJgEIgCAAIgkAAIAAABQgaADgUgEIgCAAIgFAAIAAABIgTACIgCAAIgYAAIgDAAIgYAAIgCAAIgFAAIgCAAQgfABgZgEIgCAAIgCAAIAAABQghADgbgEIgDAAIilAAIgDAAIgTAAIgCAAIgDAAIgaAAIgDAAIgVAAIgDAAIgTAAIgCAAIhGAAIgCAAIhDAAIAAADIAAACIgJgCIgCAAQgSgEgYABIgDAAIgTAAIgCAAIgWAAIgCAAIhZAAIgEAFIgHgCQAAgEgCgDIAGAAIACAAIACAAQANABAJgFQAKAEARgBQA3gCA3AAIAAgCIATAAQAGACAHAAQAKAAAHgCIAlABIAAABIADAAIAAgCIA8AAIACAAIAbAAIACAAIAaAAIADAAIARAAIACAAIATAAIADAAIAYABIAAABIACAAIACAAIAAgCIApABIAAABIAFAAIACAAIAAgCIAUABIAAABIACAAIAAgCIAYABIAAABIAmAAIADAAIAAgCIAkABIAAABIGwAAIBgAAIAhAAIADAAIAVAAIADAAIARAAIACAAIBbAAIADAAIAtAAIADAAIAJAAIADAAIATAAIACAAIAiAAIACAAIAzAAIACAAIBlAAIACAAIAAgCIAYABIAAABIADAAIAwgCIAAgCQALgNAIgRIACAAIAHgEIAAgCIABgDIACgEQAHgIALgCIAAgBIAxADIA2ADIADAEIAAADQg6gEg4AOQgRALgKATIgBACQgJAHgMAGIgCAAQg3gEgMAoIAAABQg0ANglAaIAAADQAHAsgVASIgBACQgHACgJABIgDAAQgeAIgiAEIgBABIgVABIgCAAIguAAIAAACIgTABIgDAAQhpgDhjANIgOACIAMADQAsAOASAmIAAACQgUAgg0AAIgCAAIAAABIgYABQgMAGgOADQgQAEgSgCQhkgNhQAhQBIAkBTAcQAzARAvAWQAHADAJABQBCAMAvAgQAJAHgFAIQgTAPghAAQgLAAAGAGQAKAeAkAQIACAAQAcAbARAmIAAACQgbAegtALIgCAAIgTAdIAAACQgwAQgfAhIAAACQALARADAeIABAEIABAEQAEAJABAMIAAADIAHARIAAACIACAAQACAHgBAFQgXALgBAXIgcALIgVAHIAFgGgAQdnoQADAXAAAeQAEAKgDAQIgBAAIAAAMIAAADIAAACQACALgEAGIAAACQgBAZgGASQADAOAGALIAAACIAvAbIAEgBQAOgKgHgfIgFgQQAGgWAHgVIABgBQADgZgHgQIAAgCQAMgZAEgjIAAgCIAAgDIAAgTIABgCQAFgagSgDIAAACIAAADQAFAKgDAQIgCAAIABAKQADAQgJADQgHACADgYIAAgCIAAgaQAAgEgCgBQgVgSglgBIgBgCQgdgQgegOIgqgSQgggNghgLQghgLgjgJIABA8QABAhgKAZIABACQACATgHAKQgBASAEAPIABAAQAYALARAQIAAACQAgADAcAHIADAAQAHgBAAAIIAAACQADAMABAMIABADQAcAEAUAMIACABQgBASAKAGIABACQAdABAYAIIACABQAKhDgFhJIAAgCQgHgJAAgKQAAgKAGgKIABgCQAEAGACAXgARflaIAGA8IABAAQANgFAJgJIACgBQAJgbAbgIIACgBQgBgrACglQgJgRABAXQAEAFgBAMIgBACIAAACQAAARgHAKIgBAAQAAglgEghIAAgBQgMgIAIATIgDABIgCABQgEgagNgPIgCABQgIANgJAZIAAACQAFALACANIgBAAQgFAcgIAXgAR5oRQgDAaAIAPIAAgCQAJgagOgPIAAACgASKoMQgEAXAJAJIAAgBIAAgCIAAgYIAAgDQAAAAAAgBQAAAAAAAAQgBgBAAAAQgBAAAAAAIgDAAgASunuIAAgBIABAAQABgJgFgDIAAgCIgEgBQgEARALgBgASYn2IAAADQALgCgLgSIAAARgAQgsDQAAABAAAAQAAABgBAAQAAABAAAAQAAABAAAAQAEAjgPAhQAngCArgKIACAAIAAgBQgFAAAAgEIgBAAIgBgFQAEgEgBgKIgBgDIAGgNIACgBIgBgCQgFgFgEAHIAAACIAAADQgCAUgMAJQgCgHAGgLQALgTgNgJIAAACQgHAkAAgfQAAgDgCgCQgMgMgQAAQgHAAgJADgAqXjKIgCAAIAvgiIgBAAQgEgVAegKQAKgDAHgEQAJgWAMgUIABgCQgIgZgOgVIAAgCIgKAKIgBgEQgEgKgFgJQACACAFgCIAGgCQAFAHAGAFIACACQASAXAFAkIgBACQgNAUgMAVQgPADgKAIIgMAGIAFABIAAABQgRAOADAXIABAEIgjAAQAQAOAaAEIACADIACACIADADQgegLgdgMgAptmTIACAAIAIgBQAHAEAJADIgDADQgCAIABAEQgJgNgNgIgAp6maQAAgFgFAEIgJgCIAHgIIgCAAQhLgohggRIAAgCIgCAAQghgRgRggQANgfAxABQAGAAAIgCQBOgOAmgrQglgZg2gMQgQgDgOgJQgYgQgHghQAXgPAXgNQAKgGAEgJQACgNgCgOIAAgCQAigEAJgeIABgCQgCgKAJAAIACAAQAegDAcgGIACAAQgugohPgIIgCAAIgCAAIgWAAIgCAAQgPACgJgFQgRADgJgFQgagPgoABIAAABQgMAGgOACIgCAAQgPgLgTgIIgCAAQgOACgIgEIgCgBIgkgEIgDAAIgaAAIgDAAQgPAAgLAFIgCgBQgrgYg/gEIgCAAIgpAAIgDAAQgrADgtACIgDAAQgOABgHgEIgDAAQg8gJgpgdIgiABIgCABIABADIAAAAIAAAEQiXANiZgBQgBgJAJAAQBkgGBfgPIAzAFIAEAAIAAgBIAUgCIAcAAIACAAIADAAIAcABIAAABQAWAJATAKIADAAIATABIAAACIARAAIACAAIAaAAIADAAIAHAAIACAAIARAAIADAAIAQAAIADAAIAwAAIACAAIAfAAIADAAIAVAAIADAAIARAAIACAAIAMAAIBIAAIACAAIAgAAIACAAIAiAAIACAAIA3AAIADAAIAJAAIAWAAIACAAIARAAIACAAIAbABIAAABIAJAAIADAAIAAgCIATAAIACAAIAiABIAAABIACAAIADAAIAAgCIANAAIAGAAIApABIAAAAIAAABIDdAAIB6AAIACAAIAYAAIADAAIAoAAIADAAIAkAAIACAAIAIAAIAJAAIACAAIAUAAIACAAIAmAAIADAAIACAAIAkAAIADAAIAcABIAAABIAFAAIADAAIAAgCIArAAIACAAIAYAAIADAAIATABIAAABIAAAAIACgBIAjABIgCAEIgRgBQgEgHgIAIIgKAAIgPAGQhtgEh6ACIgCAAIgDAAIgQAAIgDAAIgVAAIgDAAQgWABgQgEIgDAAIgJAAIAAABQgOADgIgEIgCABQgJADgPgBIgCAAQgMABgFgEIgDAAIAAABQgcADgWgEIgCAAIAAABIgBAAQgRACgSAAIgDAAIgRAAIgCAAQgugEg0ABIgBABQgTADgOgEIgCAAIhNAAIgDAAIgQAAIgDAAIgCAAIgDAAIgVAAIgDAAIgCAAIgYAAIgCAAQgXgBgQABIgCAAIgTAAIgDAAIhBAAIgCAAIgaAAIgDAAIgCAAIgDAAQgXACgRgEIgDAAQgbADgcgDIAAABQgXADgSgEIgCAAIjdAAQAWAIAfgBIACAAIATABIAAABQAkgDAngBIACAAIAAgDIArABIAAACQA3AEAmAVIABABQBAgHBEAJIACAAQAQALASAIIACABQAtgQApATQANAGATAAIAkABIAAACQBWAHA6AjIACABQAAAOgCAMIAAADIAAACQABAFgDAAIAAAYIAAACQAIAaAHAbQACAHgDADIAAACQACAQgEAKIgUAPQgZATgUAYQAOALATAHIAAABQAHASAEAUIABABQAFAngCAtIAAACIABAEIABABQAEAQgDAWIgBAAIAAACIgFABQgBAbAaAAQACAGAEAEQgBAHACAEIgIgEgAr+orIgMACIAAARIAAACIAAAFIAAADQAEAHgBAOIAAADQAEAJABAPIAAACIATAIQAqAOAqAEIAAgCIAFgKIAAgCIAAgaIgBgCQgCgDAAgFIgBAAIgBhSQgBgHgCgDIgCgDIg/AbIgTAIIAAAaIAAADIAAACQADAggKggIgBAAIgBgaIgDAAgAsprOQAJASAAASIABAAQAMALAOAIQAbAOAkABIAAgBQAIgLAGgNIAAgCIgHgkIAAgDIgCAAIgBgTIADAAIAAgCQAAgLgDgIIAAgDIgQgrIgBACQgQAKgTAFQACAaAJAaQAIAWgKgCQgBgEgCgDIgDgDQgCgMgFgGQgHgHgNANIAAADQAPAYgIAVIgBgCQgCgDAAgHIgBAAIgBgTIgBgCIgDgGIgDgEIgCACIACAKQACATAAAWQgFgJgBgNIAAgHQgDgPgKAAIgFABgArJs6IAAACIAAACQgBANADAJIABACQAKAeAGAjIAAADIAAAQIAAADIABAHIACAAQADAHABAKIABACQATgDARgSIACAAIAAgDIAAgVIACAAIAAgDQADgWgMgTIgCAAQgCgHgBgJIAAgDIAAgCIgBAAIgBgWIACAAIgBgGQgLgGgQAAQgLAAgOADgAPNnVIgBgTIADAAIAAgCQAAgVgCgSIgBgCQAJAKADAQIAAADIgIAhIgBAAgArtnhQgDgFABgJQAFABACACQAEAFgIAJgAN7oTIgCAAQAAgJgGgDIAAgDQgBgggDgeIgCAAIgBgOQAHgBACADIABACQAFA0AJAvQADAMgCAIQgCAIgGADIAAABQgFgNADgfgAOnnpQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAgBAAgBIAAgBIAAgFIAAgLIAAgCIAAgRIAAgCQgDgKAAgMQALAGACAWIAAAPQAAAMgDAFQgCAFgDAAIgBgBgArXoFIgBAAQgCgPAAgQIAAgCQgEgCACgIQAIAFgBAOIAAADQAEAHgDAOIgBAAIgCAAgA4VvsIABACIgBAAIgBAAIABgCgA4LxSIABAAIAAACIgBgCg");
	this.shape_7.setTransform(-282.5,-195.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0099CC").s().p("A2IQVIAAgSIAIgEQBXgjBIg5IAAAAQAWgQAWgSQARgOgEgXQAkgcAbgkIABAAIABgBIAAgDIAAgDIgBgMIAAgBIAAgBIgBgLIgBgDIAMgJIAEgCIAAgBQAlgbAygQIAAAAIACgBIAFgBIALgFQAIgDAIgHQADgCAEAAIADgCIACgJIAAAAIAAgCIAAgPIgBgNIgBgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgFIAAgFIAAgCIAAgCIAAgDIAAgFIAAgCIAAgFIAAgEIAAgCIAAgBIAEgGIABgBIAJgIIADgCIAHgGIAJgFIAAgBIAAAAIAEgBIAMgCIAEgBQAggJARgZIABAAIAAgdIAAgDIACgDIADgDIAHgIIAFgGIABAAIABgCIADgCQAJgIAKgGIAFgDIABAAIABgBIAAAAQAHgDADgHIAAgEIAAgBIgBgBIgBgGIgCgDQgDgEgFgCIAAgBIAAgDIAAAAIgCgMQgCgNgEgLIgBgGIgBgBIAAAAIAAgCIABAAIABgBIAAAAIAOgHIADgCIABgBIAOgGIABAAQAagMAegGIADgBQAPgVASgSIAAgCIgBgLIAAAAIAAgBIgBgBIgKhEQgCgMgHgKQAKgaAAgkIAAgCQgJgKgHgMQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQALg2gSgjIgBgCQARg1gbghIgBgBQABgsAGgpIAAgDIABgBQADgOgEgJIAAgDIgFgoIAAAAIACAAIgCgCIABgHIABgGIgEgGIgFgBIgMgCQgJgCgIgEQgHgFgFgFIgDgDIgBgBIgDgEQgEgHgDgLIAAgDQgEgYASgNIAAgBIgFgBIAMgGQAKgIAOgDQAMgWAOgTIAAgCQgFgkgRgXIgCgCQgGgGgFgGQgGgHgEgJIgDAAQgJgDgHgEQgJgGgGgHQgEgFgCgFQgaAAABgcIAEAAIABgCIABAAQADgWgEgRIgCAAIgBgEIAAgCQADgugFgnIgBAAQgFgVgGgRIgBgBQgSgIgOgKQAUgYAZgUIATgOQAEgKgBgQIgBgDQADgDgBgGQgHgbgIgaIAAgDIAAgYQADABgBgFIAAgCIAAgDQACgMAAgPIgCAAQg6gkhWgGIAAgCIgkgBQgUAAgMgGQgpgTgtAPIgCAAQgSgIgQgLIgCAAQhEgJhAAHIgBgBQgmgWg3gEIAAgBIgrgBIAAACIgDAAQgmACgkADIAAgBIgTgBIgCAAQggABgVgJIDcAAIADAAQASAFAWgDIAAgCQAdAEAbgEIADAAQAQAFAYgCIACAAIADAAIACAAIAbAAIACAAIBBAAIADAAIATAAIACAAQAQgBAWABIADAAIAXAAIADAAIADAAIAVAAIACAAIADAAIACAAIARAAIACAAIBOAAIACAAQAOAEATgDIABgBQA0gBAuADIACAAIARAAIACAAQASAAASgBIAAAAIACgBQAXAEAcgDIACgBQAGAEALgCIACAAQAQACAJgDIACgBQAIAEAOgDIAAgBIAJAAIADAAQAQAEAWgCIACAAIAWAAIACAAIARAAIACAAIADAAQB5gBBuADIAPgFIAJgBIAMAAIARABIATADIAJADIAFgFIBZAAIACAAIAVAAIADAAIATAAIADAAQAXgCATAFIACgBIAIADIABgDIAAgCIBAAAIADAAIBFAAIADAAIATAAIADAAIAVAAIADAAIAaAAIADAAIACAAIATAAIACAAICmAAIACAAQAbAEAigDIAAgBIACAAIACAAQAZAEAegCIADAAIAEAAIADAAIAYAAIACAAIAYAAIADAAIATgBIAAgBIAFAAIACAAQAUAEAZgDIABgBIAkAAIACAAQAJAEAPgDIAAgBIAYAAIACAAQAJAEANgDIAAgBIADAAQALAEARgDIAAgBIAPAAIACAAQALAEASgDIAAgBIARAAIACAAQAZAEAegCIADAAIARAAIACAAIACAAIADAAIAdAAIACAAIARAAIACAAIATAAIADAAIEKAAIAkAAIACAAQAMAAANgBIAAgBIACAAQAcgCAXAEIgDABQgVAKgFAZIgDAAQg5AGgbAjIAAADQAEAegGAUIAAACQg1APhBAFIAAgBQgLgCgLAAIAAADIgCAAIg5ACIAAgBQgMgCgMABIgDAAQhFACg/AJIgCAAIgTAAIgBADIgCAAQgWABgSAEIgCAAQgJAMgEAOIAAACQAHAmgVAeIgDAAQgNADgQABIgCAAIgRAAIgFAAIgMgBQhbgIhDAiIAAACIAFB7IgBAAIgJAXQgCAkAGAYIABADQAdAEARARIAHAFIAWAAIACAAQAJAIATgBIADAAQADAXAKAPQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAAAAAQAXAFASAKQAGAEgBAMQAWASAmABIACAAIAPAdIAAACQAYAKAPASIABABQgLAJgMAGIAAACQABAegQAWIgCAAIABACQAmALABAtIAAAFIAAAEQgDASgOAOIgDADIgBABQgRANgRADIgGAGQgEAEgHADIgJABIgNABIgCABIAIACIgDABQhDANgyAdIAAACQARAOAQAPIACACIADADIgBACQglAggfAkIAAACIABAFIAAACIACAJIAAABIACAOIAAAAQAKBHgDBIIAAACIAAARIAAACIAAADQgCAOgDAMIAAADQAPAsgWAmQABASgBAKIAAACIgDAAQgJAAgEAKIgBADIgCAFIAAAAIgBAEIABADIAAABIACAIIADAFQAFAIALADQAFABAHAAIABAAIABAAIADADIABADIABABIAHAIIAEAFIABABIAAAMIAAACIAAAFIAAAIIAAACQACAHAEAFIAAAAIAEAFQAEAEAFADIADAAQABAAAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQABgDgFgEIgBAAIgBgCIgCgBIgEgDIgBgCIgCgIIAAgBIgBgIIAAgCIAAgGIAAgEIAAgBIAAgGIABAAIAAgCIgIgIIAAgBIgLgKIgBgDIgJgDIgBAAIgIgEIgCAAIgBgCIgIgEIgDgBIgBgBIAAAAIAAgBIgBgGIAAAAQAAgMAJgLIACAAQAEAOAGALIAEAJIACACIAAgDQAAgDAFABQAOAQARAMIAAABIACAEIABAEQACAJAAAKIAAACIAAACIAAABIAAABIAAAAIAAABIABADIAAACIgBAGIAAADIAAAAIABAAIAOAIIAVAKQAWAKAYAHIAaAHIAAAAIABAAIADABIADABIACAAIABABIACAAIABABIADAAIAAAAQAbAGAdAEIACAAIABAAQAfAEAaAMQAKAVAXAIQAIADAJABQAhAFAZANIADABIALgBIAAAAIAGgBIACAAIAFADIAAAAIAOAHIAJAFIAAAAQAYALAbAKQAOAFANAHIAkAAIACAAQAYAOAeAIIAIAHQBWAFBWAKQBRAKBJgWIAAgEIAHAAIAAGGgAvGMhQgQAVgUARIAAABQAbgFAMgjIgDABgAusKlIAAAFIAAABIAAAJIAAADIgDACIgCADQgHADgEAEIgEAFIAAAAQgDAEAAAFQAAAFACAFIgBABQgJAPgLAMIgBABIgDADIgCACQgLAKgNAJQALADATgMIAAAAIACgBIACgCIABgBQAVgSgBgeIASgXIACgBQAEgCAAgIIAAgCIAAgCIAAgBIAAAAIAAgGQgBgFgDgDIgDAAIAAAHgAvrLLIAAAAIgMAIIgBAAIgCACQgYAOgbALQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAAAIABADQAKAQgbAGIAAABQAgAFgDggQAIgJAOgDQAMgDALgFIAGgCIAGgEIABAAQAHgEAGgGQAHgGAFgHIAEgGQAFgIADgKIABAAIABgDIAAAAIABgEIADgLIAAgCIAAgBQgDgEgEgCIgGgCIgDgBIgBAAIABACIACACQAGAGAAAKIgBAGIAAAAIgBADIAAABIgCAGIgJAHIgBACIgDACIgTAQIgBAAIgEADgAuMKvQAAABAAABQABABAAAAQAAABABAAQAAAAABgBQABgBADgHIAAgCIAAgCQAHgJgKgGIAAAPIAAACIAAAAIgBAAQAAAGgDABgARIJwIAAABQAHADAHACIADAAQAGAAAEACIACAAQAGAFALAAIACAAIATAQIACAAQAYAKgRgNIgCgBIgCAAQgJgHgIgIIgCAAIgWgEIgCgBIgDgCIAAgBIgQgDIgDgBIgHgCIgEgBIAAAAIgOgFIgVgGIgCgBIgEgBIAAAAIgGgEIgDgCQgKgGgGgKIgCAAIgigKIgBAAIAAAAIgRgEIgSgFIgCgBIgigQIgEgFQgLgNgVgEQgfgGgegHIgCgBIgBgBIgCAAIgCgBIgEAAIgcgJIgBAAIgwgPQAiATApANIADABIACAAIADABIAZAGIADAAQAFAEAMgBIACAAIAmAJIADAAIAKAMIACABQAMALATAFIACABQAgALAkAIIACAAQAIALAMAHIAEACIAFADIABAAIAAAAIABAAQALAHANADQAKACALACIAAgBIABABgAPkJoIBEAaIAAgCQgLgIgMgGIgFgCIgEgBQgSgGgTgCIABABgAtFHuQgHACgFAEIAAACQgEAEAAADQAAAFAJADIABAAQAAATgJANQgOAVghAHQAFAHAGAAQAHAAAJgFIAOgKQAJgGAGgJIADgEQAHgMABgQQgMgKAHgHIABgDQALgCAJgGIAAAAIAGgFIABgBIABgBIABgCIABAAIAEgGIACAAQAFgDACgHIAAgDIABAAQACgLgDgGQgDgGgKAAQAGAGABAIIABADIgBACQgCAEgFADIAAACIAAACIgGAGIgCACIgBAAIAAABIgKAJIAAAAIgCACIgCAAIgIABgAqzEnIAFAFIABABIAAACIAAALIAAAKIAAABIAAAFIAAABIAAAFIAAAAIAAAHIAAABIgCABIgFANIgCABIgjAXIgBABIgCAAIgVAOIgBABQgDAKAMAIIAAACIgBADIAAAAIgBAFIAAAAQgFAbgNATQgGAJgIAHIAAACIgCABQgDAGgHADIAAACIAAADIAAAFQAAABAAAAQAAABABAAQAAAAAAABQABAAAAAAIAAACQABAIACAAQACAAADgIIAAgDIAAgDIAAgEIAAgDIAHgHIAAgCQAKgIAHgLIAHgMIABgDIAGgQIAEgVIAAAAIABgCIAAgBIAAAAIAAgFIgCgBIgBgBQgIgEAEgIIACgBIAQgIIAAgBQAVgMAQgPIAIgHIABAAIACgLIABgDIAAgCIAAAAIAAgCIAAgBIAAAAIAAgKIAAAAIAAgFIAAgCIAAgBIAAgBQABgMgEgFIAAgCQgCgFgFgCQgEgDgIAAIAJAGgAKFG1IgBgCQgKgOgIgSIgFgNIgCgBIgLgJIgEgFIAAgCQAGgFAEgGIAEgGIAAAAIAAgBIACgDIAAAAIAAAAQACgHABgIIAAgBIgIANIgIgEQAPgmgQAWIAAAPQAAAEABgDIAGAGQgHAKgKAKIABACIACAHQAGAMANAFIABACQAFAgAVAGIAAAAgAstF+IABACQAQAPgKATIAAABQAWgLgQgSQgHgJAOgCIAHgBIAAAAQAXgGATgKIABAAQAQgIANgLIAHgGIAAgCIAFgIIADgHIAAAAIAAgBQACgGAAgGIgBgGIgBgBIgGgFIAAgBIgBAAIgDgDIgBgBIgCgBIAAABIAAABIAAAAIAAAAIAFAIIAAABIAAABIgBALIAAAAQgCALgHAMIgBAAIgMAJIgPAJQgVAMgYAKIAAAAIgXAHgAJNA7IABAAIgBgBgAJ8ApIACgCIgDAAgAJrAcIABABIABgBIgCAAgAI1ggIAAgBIAAAAgAI4ubIAAABIACgBIgCAAg");
	this.shape_8.setTransform(-262,-187.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AzJRRQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBgBAAgBQAtgnA/gWIALgEQAIgUAWgHIANgFIANABQAhgUAXgdIABgCIgRg/IAAgCIgBAAQgDgIgBgJIAAgCQgDgSgGgQQgGgQgJgNIAAgCIgDgIIAAgCIgCgFQgEgPgDgQIgBAAIgCgKIAAAAIgBgGIgCAAIAAgBIgBgRIAAgCIgBAAIAAAAIAAgEIAAgBIAAgCIgBgEIAAAAIAAgCIAAgBIAAgBIAAgCIAAAAIAAgBIAAAAIAAgBIgBgBIAAgBIAAgBIgCgLIAAAAIgBgBIAAgBIAAAAIgBgDIADADIAAAAIACACQADADACAFIAAABIAAAAIAAABIAAABIAAAAIAAAAIABABIAAAAIAAABIAAABIAAABIAAAAIABACIAAAAIAAABIAAAAIAAACIAAAEIAAACIAAADIAAACQAEACABAEQABAEgBAHIAAACIAAADIABAFIAAAAQACAGACAFIACAAIAAARIAAACIAAABIAEAIIACAFIABABIAEAKIAGAPIAGAQIAMAkIACAGIACALIAIAmQABACACADIABAAQAkgXAYgiIACgBIAAgBIgCgOIAAgBIAAgCIAAAAIgCgIIgBAAIAAACIAAAGIAAAAIAAACIAAACQAAABAAABQAAABAAABQAAAAgBAAQAAABAAAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAgBIgCgEIAAgCIgDgMIgHgVIgEgKIgBgCQgEgGgBgJIAAAAIgBgBIAAAAIgBgMIAAAAIABgLIgCAAIgBgQIAAgDIAAgDQgBgZgEgWIgBgCIgDgQIAAgBQgEgTgFgRIgIgWIAAACIAAACQAEAGgCALIAAABIAAACIAAAmIAAACQgBAHADACIABABIADAHIAAAAIABAKIAAACQACAOADANIAAACQACADABAFIAAALIAAADIAAACIAAAIIAAAEIAAACIAAAAQAAAAAAAAQAAAAAAAAQAAAAgBgBQAAAAAAgBIgBgBIgBgEIAAgBIgCgGIgBAAIgBgOIAAgBIgBgHIAAgCIgBgCIgBgDIAAgFIAAgMIgBAAIgCgFIAAgBIgDgIIgBgCIAAgBIgDgLIgBAAIAAgBIAAgGIAAgEIAAAAIAAgBIgBgMIAAgKIAAgBIAAgNIAAgDQgCgkgKgdIAIgwIAAgBIAFguIABgBQAGAOgEAbQgKA1ATAkQAPAcAEAmIAAAAIAAABIACARIAAAAQAFAGAEAIQAKAZgFAoIAAADQAKAPAFAUIABABIAAABIACAHIAAABIACAIIAAACIACAAIADgCIAFgFIABgBIABAAIAAAAIADgCIABgBIAAAAQAfgWAmgQIABgCIAQAAIADAAQATgNAPgRIACgBIAAgUIgBgLIAAgCIAAgHIAAAAIAAgCIAAAAIAAgEIAAgCIAAgCIAAAAIgBgKIAAgBIAAgGIAAAAIAAgEIgBgEIAAgIIAAAAIgBgGIgCAAIgBgFIgBgBIAAAAIgBgDIAAgCIAAAAIAAgBIAAAAIgBgCIAAgBIAAgBIgBgEIAAgCIAAgBIAAAAIAAgCIAAAAIgBgCIAAgBIAAgBIAAgCIAAgBIAAgBIADABIABABIABABIAAABIAAAAIABABIAAABIAAABIABAAIAAgBIAAgBIAAgBIgBgBIgBgDIgBgDIAAAAIAAgBIgBgCIgCgFIgBgEIgCAAIgBgBIgCgBIgGgGIAAAAIgBgBIgBgBIgBgBIAAAAIgBgBIgBgBIAAAAIAAAAIgBgBIAAAAIAAgCIAAgLIAAgIIAAgDIAAgCIAAgBIAAgEIAAgDIAAgCIAAgGIAAAAIAAgCIAAgOIAAgOIAAgHIADgVIACgMIABgDIAAAAIABAAIAAAAIACADQAGASgBAVIgBALIgBAPIgCASIAAAPIAAAMIACACIAAAAIACACQAIAIAGAKIABAAIACAFIADAFIADAFIACAGIAAAAIABACIAAABIAAABIAAAAIABABIABACIAAAAIAAABIAAAAIABACIAAAAIAAADIAAAAIABABIAJABIABgBIAAAAIADgBIABAAIAAAAIAAAAIAGgCIACgBIABAAIABAAIAAAAIABgBIAAAAIAGgCIAFgCIADgCQAcgPASgZQAFgHgEgLIgDABIAAgCIAAAAIgBgCIgGgWIgCgIIgFgbIgBAAIAAgCIgBgHIgBglIAAgCIgBgCQgCgKABgMIAAAAIAAgDIABACIAAABIAAAAQAGALACANIABACQADAMAAAOIgBAPIAAACIAAABQABAOADAMIABABIAAABIACADIAAACQABAEgBAIIAAACQADAEABAIIABAAIACgJIABgBQADgFAEgDIAEgDIAFgEIAAAAIADgCIAAAAIACgBIADgDIABgBIAAAAIAVgSIACgBIABgBIADgDIAAgBQgFgKgDgMIAAAAIgCgHQgDgOgCgQIAAgFIAAgDIAAgCIAAAAIgBgLIAAgBIAAgDIAAAAIAAgFIAAgBIAAgCIAAgBIAAgBIAAgEIABgHIAAgEIAAgBIAAgBIAAAAIABgbIAAAAIgBgKQgBg0gSggIgDgFIgGgJIAAgDQABgVgLAAIgBAAQACgwgNgfIgBgBIgBgTIACAAIABgCQAFgNgBgVIgBAAQgUglgKgvQgNAQgQANIgUAPQgPAKgTAGIg4AOIg1ALIgKACIAAABIgJAHQgIAFgLAEQAFABABAGIABACIAAAWIAAAJIAAADIAAAMIAAAOIAAADQAFAFACAIQAEAIAAAKIABAHIAAACIAAADIAAACIAAAMIAAADIAAACIAAAXIAAABIABAAIAEAIQAGAPgCANIgBgBQgIgMgEgQIgCgIQgFgYABgeIAAgKIgBAAIgCgFQgCgIgEgGIAAgCIAAAAIAAgCIAAgTIAAgFIgBgNQgCgIgCgGIgRARIgoApQgHAIgFABIgBAAIAAACIAAAGQAMgBALAEIABABIAAABIAPAEQgKANgHAQIAAACIAAARIAAACIAAADIAAADQAAAUgTADIABgEIADgBQAGgCgBgGIgCgFIAEgiIgMAAIgBgBIgJACIgQAEQAAAFADACIAAACIAAAWIgIABQACgOgEgOIgEgBIgCACIgpAiIgEAFIAKACIABAGIgBAAIAAALIAAAFIAAABIAAACIABACIAAAKIAAALIAAABIAAACQAAALgCAJIgCAHIgBgIQgBgLgJgFIAAgBIAFgQIABgEQgIAHgLADIgJADQgEAGgGAEIgGAEQgEAGgEAHIgCgCIgFACIgBABIAAgDIglAcIAgADIgBAIIgCAAIgBABIgBAAIgBAAIAAAEIAAAAIgBAAIABAAIAAABIAAAAIAAAEIAAABIAAACIABAAIAAABIAAACIAAABIAAABIAAAAIAAABIAAADIABAAIAAACIAAABIAAABIAAACIAAAAIAAAAIAAABIAAADIABAAIAAABIAAACIAAABIAAAAIABABIAAACIAAABIABAGIABABIAAABIAAABIAAABIAAAAIABACIAAAAIAAABIAAABIABAAIABAJIAAAGIAAAAQAAAIgDgHIAAgBIAAAAIgBgDIAAgBIAAAAIgBgBIAAgDIgCgFIAAAAIAAgCIgBgBIAAgBIAAAAIAAgBIAAAAIgBgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIgBAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgCIgBgCIAAAAIAAAAIAAgBIAAgBIAAgBIAAAAIgCAAIAAgEIABAAIAAAAIgBAAIAAgCIAAgBIAAgBIAAAAIAAgBIAAAAIAAAAIgBgBIAAAAIAAgBIAAAAIAAgBIAAAAIgBAAIAAAAIAAgBIAAAAIAAAAIgBgBIAAAAIAAgBIAAABIAAABIAAAGIAAAAIAAABIAAAAIAAABIAAAAIAAACIABABIAAABIAAAAIAAACIAAABIAAACIAAABIAAADIABABIAAABIAAABIAAACIAAAAIAAAEIAAABIAAAAIAAABIAAACIAAABIAAABIAAABIAAABIABAAIAAABIAAAAIAAABIAAABIAAABIABAHIAAAAIAAACIAAACIAAATIgBAPIgBAAIAAACIAAALIgBABQgBAQgFANQABAPAFALIACAFIABABIAAAAIAHAKIAAAAIABACIABABIABACIAAAAIAAABIABABIAAABIAAAAIABABIABAFIAAABIAAABQACADABAFIgBALIAAACIAAAFIAAADIAAAXIAAABIAAACIAEAHIAHAMIAAAAIADAFIADAEIABABIAAAAIAAABIABAAIAAABIAAAAIABABIADAEIABACIACABQABAAAAABQAAAAAAABQABAAAAABQAAABAAAAIABAAIAAgCIAAgDIAAAAIABAAIACgBIABAAIAAAAIABAAIACABIAAAAIABACIACAEIAAADIABALQAAADgCAJQAEAJgCAOIgCABIABACQABAFgEAAIAAACIAAAiIAAACIABAAIAEAbIgCgBQgIgVgMgRIAAgCQADg0gIgqIgBAAIgUgVIAAgDQgBgkgFgiIAAAAIAAgCIgBgFIAAAAIAAgCIAAgCIAAAAIgBAAIgBgBIgFgHIAAAAIgBgBIgDgEIgFgFIgEgEIABgMIAAgEIAAgBIADgaIABgDIADgeIAAgBIAAgBIAAgLIAAgFIAAgEIAAgCIAAgBIAAAAIAAgBIAAgBIAAgEIAAgCIAAgBIgBgCIAAgBIAAgCIAAgCIAAAAIAAgBIAAgBIgBgCIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIgBgBIAAAAIAAAAIAAgCIAAAAIAAgBIAAAAIAAgCIgBAAIAAgBIAAgBIAAgBIAAAAIAAgBIgBAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIgBAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIgBAAIAAgBIAAgBIAAAAIgBgBIAAgBIAAAAIAAgBIgBgBIAAAAIAAAAIAAgBIAAgBIAAgBIgBgBIAAAAIAAgBIAAAAIgBAAIgCAAIAAAAIACAAIAAgBIAAAAIgCAAIABAAIABAAIAAAAIAAgBIAAAAIAAAAIAAgBIgBAAIAAAAIAAgBIAAAAIAAAAIAAgBIAAAAIgBAAIAAgBIAAAAIAAAAIAAAAIAAgBIgBAAIAAgBIAAgBIAAAAIgBgBIAAABIAAAEIgFAAIAAgBIAAAAIAAgBIAAAAIAAAAIAAgBIAAAAIgBgBIAAgBIAAAAQgBgDgDgDIgKADIAAABIABACIAAAAIAAABIAAAAIABABIAAAAIAAAAIAAABIAAAAIAAABIABAAIAAAAIAAAAIgGADIAGgCIAAAAIAAABIAAAAIAAABIABABIAAAAIgCAAIgBAAIgBAAIgBABIgDAAIgCAAIAAAAIAAAAIAAAAIALAAIACAAIAAAAIAAAAIAEAAIAAAAIAAAAIAEAAIAAABIgGAAIABAAIgBAAIgCAAIABAAIgCgBIAAAAIgBAAIAAAAIgBAAIAAABIAAAAIAAAEIAAAAIAAACIAAAAIAAACIAAAAIAAABIgBAAIAAAFIAAABIAAABIAAABIAAAAIAAAAIAAABIgBAAIAAABIAAAAIgBAAIAAAAIgBgBIAAAAIgBgBIAAAAIAAAAIAAAAIAAgBIAAAAIgBgBIAAAAIAAAAIAAAAIAAgBIAAAAIAAAAIAAgBIgBAAIAAAAIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIgBAAIAAAAIgBAAIAAAAIAAAAIAAgBIAAgBIAAgEIgBAAIAAgDIAAgBIAAAAIgEAAIgBAAIAAAAIgFAAIAAAAIAAACIAAgBIAAAAIAAABIgBAAIgFACIAAgCIgBAAIAAgBIAAAAIAAgCIgBAAIAAAAIgBAAIABAAIAAACIgBgBIAAgBIgBAAIgGAAIAAAAIAAAAIgBABIAAACIAAAAIABABIAAAAIAAABIAAAAIABABIAAAAIAAABIAAAAIAAAAIAAABIAAABIABABIAAABIAAABIAAAEIgBAAIgCAAIADAAIAAAAIAAABIAAACIgBAAIAAACIAAAAIAAABIAAABIAAAAIgBAAIgBAAIAAABIAAAAIgBAAIAAgBIgBgBIAAAAIAAgBIgBAAIAAgBIAAgBIAAAAIAAgBIAAgBIgBAAIAAgDIAAAAIAAgCIAAgBIAAgCIAAgBIAAAAIAAgBIAAAAIAAgBIgCAAIAAgBIAAgDIAAAAIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAAAIAAAAIAAgBIAHgBIAAgBIAAgBIABAAIADgBIAAAAIACAAIAAAAIABAAIACAAIgBAAIABAAIAAgCIgJABIAAAAIAAABIAAAAIAAAAIAAABIgEAAIAAABIgBAAIgDAAIAAgCIABgBIABAAIAAAAIgBAAIgBAAIAAAAIgGAAIgGAEIACAAIAAAAIAAABIAAABIAAABIABACIAAAAIAAABIABAEIABADIAAAAIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAABIgBAAIAAABIAAABIAAAAIAAACIAAAAIgBAAIgCgBIgBgBIgBAAIAAAAIAAgBIAAAAIgBgBIAAAAIAAgCIAAAAIAAgBIgBAAIAAgDIgBgDIAAgGIgBgHIgFAEIAAAJIAAAFIAAABIgBACIgBAAIAAACIAAABIAAAAIgBAAIgBADIAAAAIAAABIgBAAIAAAAIgBgBIAAgBIAAgBIgBgGIgCAAIgCAAIABAHIAAAAIAAADIAAAAIAAABIAAAAIABAFIAAAGIAAAAIABACIAAAAIABAJIAAABIAAABIAAADIACAPIABAJIAAADIAAACQACARgFAMIABACQAFASACASIABAHIAAACIAAACIAAAFIAAABIABATQgCAkgMAkQAIAXAHAXQAJAegFAUIgCAAQgLg2gQgxQALgkACgpIAAgDIAAAAIAAgKQABgbgFgZQgCgJAAgKIAAgCIAAgfIAAgDIAAgBIgBgLIAAgBIgBgIIgBgFIAAAAIgBgEIAAgBIAAAAIgBAAIgCAAIgIADQgyARgzAQIgQAFIgBAAIgBAGQgEAUgPAHIgIACIAAAAQgsAXgwgJQg1gLg4AEIgcACQg5AAg6gEQABgEACAAQBPADBDgWQBUgCBOAKQADAAADgCIAWACQAMgEAKgIIAAgBIAAAAIAEgWIABAAIAVgEQApgIAjgQIAFAAQAIAAAFgFIAIgIIAFgCIgBgBQAGgJAKgGIANgHIALgEQAVgDAVgCIADgBQAPgEAOgHQACgEAEgCQAXgXAdgPIAAgBIAAgCIABAAIAAgBIABAAIAIgEQARgEALgMIAAAAIgBgHQgCgGgGgCQgIgCgIgBIABgBIAHgDIADgDIAQgSQARgQAUgOIACAAIAKACQABgDAFgBIAFgBQAJgFAKACQALACAIgGIABAAQACgDgBgEQAAgFgDgDIgCgCIgDAAIgCgBIgTgBIgEAAIgCAAIgBgBIgBAAIAAgCIAAgBIAAAAIABgBIgBAAIAAAAIAAgCIAAgBIACgCIABgBQABgEABgCIgBgFIAAgBIACgBIABgBIADACIABABQAdgWARgaIAGgJIABgCQAPgJgDgKIAAgDQAbgSAlgJIAAAAQAbgHAhgDIAKgBIAJgDIAQgGQAbgMAWgSQATgQAOgVQADgDgEgFQgLgJABgIIAAgCIAjgZIA4goIADgBQgRgTgTgRIAAgCQASgYAigJQAdgHARgTIAMACIACAHQADADAEADIgCAGIACACIgCAAIAAAAIAFApIAAACQAEAJgDAPIgBAAIAAADQgFApgCArIABABQAcAggRA4IAAACQASAigLA3QAAAAABAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAHALAJAKIAAACQAAAlgKAZQAHAKACANIALBDIAAACIAAAAIAAABIACALIgBABQgSASgPAVIgCABQgfAHgaALIgBAAIgOAHIAAAAIgEACIgNAHIgBAAIAAABIgBAAIAAACIAAABIAAABIACAFQADALACANIACAMIAAABIAAACIABACQAEACADADIACAEIACAFIAAABIAAABIAAAEQgDAHgGADIgBABIgBAAIgBABIgFADQgKAGgIAHIgDADIgCABIAAABIgGAFIgHAIIgCAEIgCADIAAACIAAAdIgCABQgRAYgfAJIgEABIgMADIgEAAIAAABIgBABIgIAFIgIAFIgCACIgJAIIgBABIgFAGIAAABIAAADIAAADIAAAFIAAADIAAAEIAAADIAAADIAAABIAAAFIAAAGIAAAAIAAACIAAACIAAACIAAAAIABADIABAMIAAAPIAAACIAAAAIgCAJIgCACQgFAAgDADQgHAGgJAEIgLAEIgEABIgDABIAAAAQgxAQglAbIgBABIgEADIgLAJIAAACIACAMIAAAAIAAABIAAANIAAADIAAADIgBAAIAAAAQgcAlgjAbQADAYgRANQgVASgXAQIAAABQhIA5hXAiIgHAEQgIAAgHgCgAsEKRIAAAAIAAABIAAABIAAAAIACABIAAAAIABAAIABgBIgEgCgAp9g5QgvAdgpAgQAGAIAHAGIACABQAFBBAVAvQAGANgDAKQgCAKgBALQAKAaAFAkIADACIABADQAEALgBASIAAACQADALAHAIIACAAQAGAUABAaIAAACQAEAJgCAPIAAADQABATAHAOIACAAQABAOgBAMIAAAAIgBAIIgBACIgBAIIgCAEIAAADIAGgEIAFgDIABAAIAMgGIAAAAQAZgKAegGIADAAQANgRAPgPIAAgCQgDgXABggQABgggPgSQAHgdAEgfIABgDQgLgKgHgNIgCgBQAFgogCgkIAAgDQgIgEgDgKIgBAAQALghgGglQgCgMgNgCQgCgDAAgEIAAgDQARhNgQhPIgBAAQgLAAgPAIIgBABIACADIABACQAEAJgCAPIAAADQACAMAAAOIABACIAAADQADAjgIghIAAgCIgDgbIgBAAQgBgNAAgNIAAgCIAAgEIAAgBIgCAAQgKACgIAEIgCABIgBAAQgCAEgGgCIAAAIIAAACIAAATIAAADIAVBeIAAACQAEgDgBgMIAAgCIgCAAIgBgPIgBAAQgBgNAAgNIAAgCIgBgBIgBgXIgBgDIgDgaIgBgPIAEAMQAIAaACAgIAAACQAEANgBATIAAACIAAACIAAADQAEAGgCALIAAACIACAJIAAACIAAAGIAAADIAAAcIAAADQAEAHgCAMIgCAAQABAUACASIAAADQAIAFAAAOIABAAQAEAVgBAbIAAACIAAADQADAKgBAOIACAAQAJARgBAQIgCAAQgQgWgEgjIgBAAIgBgwIgBgCQgDgMgGgKIAAgDQACgMgEgHIgCAAIgBgTIADAAIAAgCQgEgWABgaIAAgDQgSghgIguIgBABgAzQG9IABAAIAAAAIAAAAIAAAAgAzZG9IAAAAIAHAAIACAAIAAAAIABAAIgCAAIgBAAIgBAAIACAAgAzpG9IAAAAIAAgBIADAAIACAAIAAABIAEAAIAAgBIAAgBIAAAAIAAgBIAAgCIAAAAIgCAAIAAAAIgCAAIgCAAIAAAAIgDABIAAAAIAAAAIAAACIAAABIAAAAIAAAAIAAABgAzQGyIgJABIAAACIAAAAIAAAIIAKgBIAAgEIAAAAIAAgFIAAgBIgBAAgAyhG6IgEAAIgMACIARgCIgBAAIABgBIgDAAIgHABIAIAAgAysG6IADgBIgBAAgAygG5IAHAAIAAAAIAAAAIgDAAIAAAAgAqGh2IAAACQgBAXAJANIABgDIACgJQABgagLAAIgBAAgAsdOXQAVgRAQgVIACgBQgMAjgbAFgAsmNgQANgIAKgKIACgDIADgDIABgBQAMgMAIgOIABgCQgCgFAAgEQABgFACgEIAAgBIAEgEQAEgEAHgEIACgCIAEgDIAAgDIAAgJIAAAAIAAgGIAAgGIACAAQAEACABAFIAAAGIAAAAIAAABIAAADIAAACQgBAHgEADIgCAAIgRAYQAAAdgUASIgCABIgCACIgCABIAAAAQgOAKgJAAIgGgBgAtuNcIAAgBQAagHgJgQIgCgCQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAcgKAXgPIADgBIABgBIAMgIIAAAAIAEgDIAAAAIATgQIADgCIACgBIAIgIIACgGIAAAAIABgDIAAgBIABgFQAAgLgFgGIgDgCIgBgCIABAAIAEABIAGACQAEADACAEIAAAAIAAACIgDAMIgBADIAAAAIgBADIAAABQgEAKgFAIIgDAFQgGAHgGAGQgGAGgIAEIAAABIgHADIgFADQgLAFgNACQgOADgIAJQADAcgZAAIgGAAgAwfMiIAAgCIgDgGQgIgWgGgYIgBgEIAAgBIAAgCIgCAAIAAABIAAAOIAAACIAAACQAGARgEADIgBgBIgKgmIgDgKIgBgBIAAgBIAAAAIAAgBIAAgBIgBAAIAAgBIAAAAIAAgCIgBgBIAAgBIAAgBIAAAAIAAAAIAAgBIgBAAIAAAAIgBgEIgBgCIAAAAIAAgBIAAgBIgBgBIAAgBIAAAAIAAgBIgBAAIAAgBIgBgDIgDgJIgDAAIAAAAIAAACIACAHIAAACIAAACIAAABIAAABIABACIAAAAIAAABIAAABIAAABIAAABIACAFIAAABIAAABIAAAAIAAABIAAAAIABABIAAAAIAAABIAAABIAAACIAAABIAAAAIAAABIAAABIAAAAIgBAGIAAAAIAAACIAAABIAAABQgBAAgBABQgBAAAAAAQgBAAAAgBQAAAAgBgBIAAgBIgBAAIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgCIAAgCIAAAAIAAgDIAAgDIgBgBIAAgBIAAAAIAAgBIAAAAIgBgCIAAAAIAAgBIgBAAIAAAAIAAgBIAAgBIAAAAIgBgEIgBgCIAAAAIAAgBIgCgEIAAgBIAAAAIgBgBIAAgBIgBgCIAAgCIgBgCIAAAAIgCgEIgCgGIAAgBIgFgNIAAAAIgBgDIAAAAIgBgCIAAgCIgBgDIgBgBIAAgCIgBAAIAAgBIAAgBIACACIAHALIAAABIAAAAIAAAAIAMAUIABACIABgDIABgCIAAgCIAAgFIAGANIACAEIAAABIAAAAIABABIAAAAIAAABIABABIACAFIAAABIACAEIABACIAAABIAAAAIABABIAAABIAAAAIAAABIABABIAAABIAAAAIABABIAAACIAAAAIABABIAAAAIAAABIAAABIABABIABAEIABABIAAAAIAAABIAAAAIAAABIABAAIAAABIAAABIADAHIAAADIADAAIAAgDIAAgJIAAgBIAAgCIgBAAIAAgBIAAgBIgBgFIAAgBIAAAAIAAgCIAAgBIAAAAIgBgCIAAgCIAAgBIAAgBIAAgCIAEAAIABABIABABIAAABIAAAAIgBACIAAABIAAAAIAAABIABACIACAGIAAAAIAAABIAAABIABACIAAABIAAABIAAAAIABACIACAHIACAJIAAAAIAEARIAAABIAHAeIAAAAIABAFIAAACIAAACIACAHIAAABIAAABIABADIAAADIgGgOgAq/MAQAEgBgBgHIACAAIAAAAIAAgCIAAgOQAJAFgHAJIAAACIAAADQgCAGgCACIgBAAQAAAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBgAZ4LwQhXgKhWgGIgIgHQgegHgYgOIgCAAIgkAAQgNgIgOgFQgbgJgYgMIAAAAIgJgEIgNgHIgBgBIgFgCIgCAAIgFAAIgBAAIgLACIgDgBQgZgOgggFQgJgBgIgDQgXgIgLgVQgZgMgfgEIgBAAIgDAAQgdgEgbgGIAAAAIgCAAIgCAAIgBgBIgCAAIgCgBIgDAAIgDgBIAAAAIgBAAIgagHQgYgIgWgJIgVgLIgOgHIAAAAIgBgBIABgCIAAgHIAAgCIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgDQgBgKgCgJIgBgEIgBgEIgBgBQgRgMgOgQQgFgBABAEIgBACIgBgCIgFgIQgGgMgEgOIgCABQgJAKABAMIAAABIAAAFIAAABIAAAAIABABIADACIAIAEIACABIACABIAIADIAAAAIAKAEIAAACIALALIAAAAIAIAIIAAACIAAABIAAAFIAAACIAAAEIAAAGIAAACIAAAHIABABIABAJIABABIAFAEIABABIACABIAAAAQAFAFgBACQAAABAAAAQAAAAgBABQAAAAgBAAQAAABgBAAIgCgBQgFgCgEgEIgFgFIAAgBQgDgFgDgGIAAgDIAAgHIAAgFIAAgCIAAgMIAAgCIgFgEIgGgIIgBgCIgCgCIgCgEIgBAAIgCAAQgHAAgFgBQgLgDgFgIIgDgFIgCgIIAAAAIAAgEIABgDIAAgBIABgFIABgCQAFgKAIAAIADAAIAAgDQABgKgBgSQAWgmgPgsIAAgCQAEgMABgPIAAgCIAAgDIAAgQIAAgDQAEhHgLhHIAAgBIgCgOIAAgBIgCgIIAAgDIgBgEIAAgCQAfgmAmggIAAgCIgDgEIgCgCQgPgNgRgNIgBgCQAzgeBDgNIACAAIgIgDIADgBIANAAIAIgCIgJAHIgBACQgVANgeAGQghAGgZAPIgDACIgEADIACAAIAHAFIAGAEQAMAIAJAMQAAAHgDACQgjAegeAjIABACIACABQAPANgPgHIAAABQAYAqAjAfQAMAMAIAQQgEAwgYAdIgBACQAiAZAwAKQAGACAFADIAJAIIABABIADAGQgCAPAEAJIAAADQALAPAPALIAFADIAAACIASAAIAJAAIACAAIAAgDQAMAAAMACIAAABIArAAIADAAIAaABIAAABIBGAHIACAAQAiAjBKgGIADAAIAhABIAAACQAUAOAdAFQAcAFAUALIACgBIAAgBQBiASBlADIAOAAQA2AEA1ABIADAEIAAADQiKAFiKgRQgdgEgYgJIABgEIAAAAQg3gIgpgWIgDAAIgYAAIgCAAQgOACgIgFIgCAAQglABgZgKIgCAAQABAKgEAEIAAAMIAAADIAAAfIAAACIAAADQACAPgFAJIAAABIgFAEQgGABACgVIAAgCIAAgRIAAgCIAAgRIACAAIAAgDIAAgVIAGgOIABgBIAAgCIgCgBQgKgFgHgIIAAAAIgCgBQhZgOhiAHIgJgFIgEgCIgBgBIgOgKQgVgPgCgkIAAgCQgngVgvgNIgBACQgTA7AZAvIAAACIAAAkIgCABQgLAZABAeQAAAPAEARIAAACIAAABIAAAAIAAAAIAGAEIBHAgIACABQAGADAHgEIABADIAAABIABAAQACADAFAAIABABIADAAIABAAIACAAIACAAIABABIACAAQBBAJA3ASQAFAXAaAEIAqAIIAIACQAVAFASAIIABAAIAAAAQANAGAMAHIAFADIADACIACAAQAsAHAfAVQAcgBATAHQATAIATAFIAEABIAAgBIAFgCIACAAQAHAEAHABQCMAUCNgJIAhgBIACAEIAAADQgzAQg3AAQgXAAgYgDgANgB4QAEAFgBALIAAADQgBAcACAWIAGBbIAAAMQACAVgCATQgCAogNAhQADAPAAAQIAAADQARAZAaARIAAgBQADgcAKgUIABAAIAAgWIAAgCQgUgjAFgmQABgNAFgOQAGgTgLgLQACgPANgQIACAAIAMguIAAgCQgjgvgjgigAVbLeIgCgBIgUgQIgCAAQgLAAgGgFIgCAAQgEgCgGAAIgDAAQgHgCgHgDIAAgBIgBAAQgLgBgJgDQgOgDgLgGIgBAAIAAAAIgBgBIgFgCIgDgCQgMgIgJgLIgCAAQgkgIgfgLIgDgBQgSgFgNgLIgCgBIgKgLIgCgBIgngJIgCAAQgMACgFgEIgCAAIgagGIgCgBIgCgBIgEgBQgpgMghgUIAvAQIABAAIAdAIIADABIACAAIACABIACAAIACABQAeAHAfAGQAUAEALANIAEAFIAiARIACAAIATAFIAQAEIABAAIAAAAIAiAKIACAAQAHAKAJAGIADADIAGADIABAAIADACIADAAIAUAHIAOAEIABAAIADABIAHACIADABIAQADIAAACIADABIACABIAWAEIACABQAIAIAJAGIACAAIACABQAKAIgEAAQgCAAgKgEgASxK5IgBgBQAUABARAGIAFACIAEACQAMAFALAIIABACIhFgZgAxkLLIAAAAIAAgBIgCgEIAAgBIAAgBIgBAAIAAgBIgBgCIAAgBIAAAAIgBgBIAAAAIgBgEIgCgEIgCgEIgCgFIAAgBIAAgBIgBgBIAAAAIgCgHIgBgCIgBAAIgEgJIAAgBIAAgBIAAgBIgBgDIAAgBIgBgBIgBgFIAAgBIAAAAIAAgBIAAgBIgBgBIAAgBIAAgEIAAAAIAAgDIAAAAIAAgBIgBgDIADADIACACIAAABIABACIABADIAAADIAAAAIABABIAAABIAAACIAAAAIAAABIAAACIAAAAIABAEIAAABIABABIACAGIACABIAAABIAGAMIAAAAIAAABIABADIAAABIAAAAIACAFIAAABIAAABIABABIAAAAIAAACIAAABIABACIAAABIAAAAIABADIAAAAIAAACIAAABIABAFIAAACIAAABIgBgBgAwUK5IAAgBIgBAAIgBgGIAAgCIAAAAIAAgCIgCAAIgBgaIAEABIABABIAAACQACAEABAGIgBAMIAAACIAAAAIAAACIAAABIgBAGIgBAAIAAAAgA1NK3IgDgIQgDgIAAgKIAAgCIAAgTIACAAIACAAQAKAWgFATIAAACIgCAFIgBgBgAtnKuIgBAAIgCgYIAAAAIAAgCIAAgCIAAgDIADADIABABIABACIAAAAIAAABIAAAAIACAGQABAGgCAIIAAAEIgBABgA13KUIAAgDIgBAAQgCgJAAgKIADAAIAAgCIAAgMQAEgDADAAQAAAAABAAQABAAAAABQABAAAAAAQAAABABABQACAFgDAOIAAABIAAADQgDASABAQIgBADQgIgIABgQgAqqKZQgHgBgFgHQAigGANgWQAJgNABgTIgBAAQgJgCAAgFQAAgEADgEIABgCQAFgEAGgBIAIgCIACAAIACgBIAAAAIAKgKIABAAIAAAAIACgCIAGgHIABgBIAAgDQAEgDADgEIAAgCIAAgDQgCgIgFgGQAJABADAGQAEAGgDALIgBAAIAAACQgCAHgFADIgCAAIgEAGIAAABIgCACIgBAAIAAABIgGAFIgBAAQgIAGgMADIgBACQgHAHANAKQgCAQgGAMIgDAFQgGAIgJAGIgPAKQgIAGgHAAIAAAAgAteKUIAAAAIAAgBIAAAAIAAAAIgBgBIAAgBIAAgBIAAAAIAAgBIgBgDIAAgBIAAgDIAAgIIgBAAQgCgJABgKIACAAIAAgCIAAgDIACABIAAACIACAEIAAAAIABACIAAABIAAAAIAAABIAAABIAAABIAAAHIAAACIAAAGIABACIAAABIAAADIAAABIABACIAAABIAAAAIABABIAAAAIAAAAIAAABIAAAAIAAACIAAABIAAACIgBABIgCABQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBgBgBgAtNKPIgBAAIgBgBIAAAAIAAAAIAAgCIgBAAIAAgBIAAAAIAAgBIgBgBIAAAAIAAgDIAAgGIAAgCIAAAAIAAgBIgBgFIAAgBIAAAAIAAgDIAAgBIAAgEIAAgBIAAgCIAAAAIAAgBIAAgDIAAgCIgBAAIgBgTIgBgCQgDgBACgHIgCAAIgBgMQADgGABABQABACAAAIIAAACQAGALACAOIABAJIAAABIAAABIgDABIADgBIAAABIAAACIABAAIAAAAIAAABIAAABIACACIAAAAIAAABIAAAAIAAABIABAAIAAAAIAAABIAAAAIAAABIAAABIABABIAAAAIAAABIAAABIAAACIAAALIAAABIAAACIAAABIgBABIAAAAIAAACIAAAAIAAAAIAAABIAAAAIAAABIgBABIgFABgAyAKKIgEgFIgCgEIgBAAIAAgCIgBgDIgBAAIAAgBIAAAAIAAgBIAAgBIAAAAIgBAAIAAgBIAAAAIAAgBIAAAAIgCgKIAAgCIAAAAIAHAOIAAAAIABABIAAABIAAAAIAAABIAAAAIACAEIAAAAIAAABIACAHIAAACIAAAAgAsrJ9IAAAAIAAgBIgBgEIAAAAIAAgCIgBgCIAAAAIAAgBIAAgBIAAAAIAAgBIAAAAIgBgBQAEAAACADIAAABIAAACIAAACIAAABIAAACIAAAAIAAABIAAAAIgBABIgCABgAs4JuIgBgBIAAAAIAAgBIAAAAIAAAAIABAAIABAAIgCAAIgBAAIAAAAIAAgBIAAAAIAAgBIAAAAIAAAAIgBgBIAAgBIAAAAIAAgBIAAAAIgBgBIAAgBIAAgBIAAAAIgBAAIAAgBIAAAAIAAgCIAAgBIAAgEIgBgOIAAgMIAAgQIAAgPIAAgDIgCAAIAAgOIAAAAIgDgOQAEACACAFIAAAAIACAHIgBAFIAAACQAEABgBAGIgBADQAEAFgBAIIAAAAIAAAFIAAABIAAACIAAADIAAACIABADIAAACIABADQABAJAAAMIAAAAIAAACIgBAAIAAADIgBACIABgBIAAAAIAAAAIAAABIAAACIAAAAIAAABIAAABIAAAAIAAACIAAAAIAAACIgBABIAAABIAAAAIAAABIAAAAIAAABIAAAAIgBABIAAAAIAAAAIAAAAgAs8JsIABAAIgBAAgAzpJeQgCgBgBgDIgBAAIgBgIIACgJIACAAIAAgBQgDgDABgFIAAgDIgBAAIgBgYIACAAIAAgCIAAgDIAEgGQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAAAABQACACgBAOIAAACQACADABAEIAAAKIAAADIAAAEIAAAFIAAAIIAAAJIAAACIAAAAIAAACIAAABIAAABQgEAAgDgCgApHJTIgBgCQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAIAAgGIAAgCIAAgDQAHgDAEgGIABAAIAAgDQAIgHAGgIQAOgTAFgbIAAgBIAAgEIAAAAIABgDIAAgDQgMgIADgKIACgBIAVgNIABgBIABgBIAjgXIACAAIAFgOIACgBIAAgBIAAgGIAAgBIAAgFIAAAAIAAgGIAAgBIAAgKIAAgKIAAgDIgBgBIgFgEIgIgHQAHABAFACQAEADACAEIABACQAEAGgCALIAAABIAAABIAAADIABAEIAAABIAAAJIAAAAIgBACIAAABIAAABIAAACIAAADIgCAKIgCABIgHAHQgRAPgUAMIgBAAIgQAJIgBAAQgEAIAHAEIACABIABABIAAAFIAAAAIAAACIAAABIAAABIgFAUIgGARIgBACIgHAMQgHALgKAIIAAACIgHAIIAAACIAAAFIAAACIAAADQgDAJgBAAQgCAAgBgJgAxDJFIgCgCIgDgIIgBgDIgBAAIgBgHIAAgCQAAgHgDgDIAAgCIAAgDIgBAAIAAgMIgBgFIAAgTIAAgEIACAAIAAgDIACABIABACQADAMAAAQIAAADIgBAFIAAACIAAAHIAAADQAEACgBAHIAAADIAAACIABAEIACALIAAAAIAAABgAqtIoQgCgEABgIIgCgBIAAgFIAAgCIAAgBIgBgXIADAAIABAHIABACQACAKAAAJIAAABIAAABIAAABQAAAJgCAHgAwcIdIgEgGQAKgagFggIAAgCIgCAAIgBgHIgEgRIgCAAIgBgHIgCgDIAAgCQAAgNgCgLIgBgFIACgBIABgBIAAgDQAFAAACADQACADgCAGIAAADIAAAJIAAADIAEATIABACQAEACgCAIIAAACIADAFQAJAXgGAgQgDARgEAAIgCgBgAM4HgIgBgDQgNgFgFgMIgDgHIAAgCQAJgJAHgLIABAAIABgCIAIgNIAAABQAAAIgDAHIAAAAIAAAAIgCAEIAAAAIAAABIgEAGQgDAFgGAGIgBACIAEAEIALAJIACABIAFAOQAIARAKAPIABACQgUgHgGgfgAQTIBIgEgHIgBAAIAAgSQgCgWgGgSQAGgPgBgZQgBgMAKAAIAAAcIABgEQAAgBABAAQAAAAAAAAQAAgBAAAAQABAAAAgBQAGAUgIAQIgBADQAEAGgCANIgCAAIAAAMIAAACIABAAQACAWgCADIgBAAIgBgBgApYHzQAKgTgRgPIAAgCIAWgIIAAAAQAYgJAWgNIAOgJIAMgJIACAAQAGgMACgKIAAgBIABgLIAAgBIAAgBIgEgHIgBgBIAAAAIAAAAIAAgCIADACIAAAAIAEAEIAAAAIAAAAIAGAGIACAAIAAAGQABAHgCAGIAAAAIAAAAIgDAIIgFAHIgBACIgHAHQgNAKgPAIIgBABQgUAJgXAGIAAAAIgHABQgNADAGAIQAQASgVAMgAyDHrIgCgFIgBgCIgBgBIAAgBIgBAAIAAgBIAAAAIAAgBIAAgBIgBgDIAAgBIAAgBIAAAAIAAgCIAAgBIAAAAIgBgCIAAgBIAEgBQABAAABAAQAAAAAAgBQABAAAAAAQAAgBAAgBIAAgCIABABIAAAHIAAAAIAAABIAAAAIAAABIAAACIAAAAIgHAAIAHABIAAAAIAAACIAAABIAAABIAAABIAAABIABAGIgBAFIAAAAIgBgBgAyzHmIgBAAIgBgBIAAAAIABgBIAAAAIAAAAIAAABIABABIAAAAgAyzHdIgBgBIAAAAIAAgBIAAAAIgBgBIAAAAIAAAAIAAgBIAAgBIAAAAIAAAAIgBgBIAAgBIAAAAIAAgBIAAAAIAAAAIgBgBIAAgBIAAAAIAAgBIAAAAIAAgBIgBAAIAAgBIAAgBIAAgBIgBAAIAAgCIAAgBIAAgCIAAAAIAAgEIAAAAIAAgFIgBAAIAAgDIAAAAIAAAAIAAAAIABAAIAAAAIgDAAIACAAIgCAAIAAAAIgBAAIAAAAIAAAAIAAAAIABAAIACAAIAAgBIAAgCIAFAAIAAAAIAAACIgEAAIAEAAIAAAAIgBAAIgBABIABgBIgBABIgBAAIADAAIgBAAIACAAIAAABIAAAAIAAAAIAAABIAAABIABAAIAAAAIAAABIAAAAIAAAAIABABIAAABIAAAAIAAABIABAAIAAABIAAAAIAAABIABABIAAAAIAAAAIAAABIAAAAIAAABIAAAAIAAABIABABIAAABIAAABIAAABIAAAAIAAAFIAAAAIAAACIgBAAIAAABIAAAAIAAABIAAAAIAAADIAAAAIAAABIgBAAIAAAAIAAABIAAAAIAAAAIgBAAIAAABgAy5G+IABgBIgCAAgAy4G9IABAAIABAAIgCAAIAAAAIgBAAIABAAIAAAAgAy5HcIgBAAIABAAIAAgBIABAAIABABIAAAAIAAAAgAy+HcIgBAAIADgBIABAAIgCABIgBAAgAy2HcIAAgBIABABgAy2HcIgBgBIABAAIgCAAIACAAIAAABgAy6HbIgBAAIAAAAIABAAIAAABgAy4HbIAAAAIAAAAIABAAgAy5HbIgCAAIACAAIABAAIgBAAgAy7HbgAx2HbIgBAAIgBAAIAAgBIgBgEIAAgCIgCgHIAAgCIAAAAIgBgBIAAgDIAAAAIgBgCIAAAAIAAgBIAAgBIAAgBIgBgBIAAgDIAAgBIgBgBIAAgDIAAgCIAAAAIACgNIACAEIAAACIABAAIAAABIAAAPQAAAJAGADIAAAGIAAAAIAAADIgBAFIAAAAIAAABgAy5HPIAAAAIAAAAgAy6HPIAAAAIABAAgAzYHPIgCAAIgBAAIAAAAIAAgBIAAAAIAAAAIAAAAIAAgBIgBgBIAAAAIgBAAIAAAAIAAgBIAAAAIAAAAIAAgBIgBAAIgBAAIAAgBIACgBIgBAAIgBAAIAAAAIAAgBIAAgCIAAgBIAAgCIAAAAIAAAAIAGgCIAAAIIABAAIAAACIAAABIAAACIAAAAIAAACIABAAgAz3HNIAJAAIgKAAgAy8HIIABgBIABAAIABABIgCAAIAAAAgAy9HIIAAgBIABABgAzQHHIAAAAIgBABgAsWHCIgBAAQgEgDgDgEQgDgFgCgHIgBgEIAAgDIAAAAIAAgEIAAgDIADAFIABACIAAAAIAFAJIADAIIABADIAAAAIABAEIAAADIAAgBgAzCG+IgBAAIABAAIgCAAIgBgBIABAAIAAAAIABABIAAgBIAAAAIABABgAzwG9IAAABIgGAAgAy6G9IAAAAIAAAAgAy4G9gAsuG5IgGgOIgDgKIgCgIIAAgBIgBgFIAAAAIAAgDQAEADADAEIACAFIABAAIABAFIABADIABAFIAAABIAAADIABAMgAzpG3IAAgBIAAAAIAAABgAqLGxIgBAAIAAgBIgDgDIAAAAIgBAAIgBAAIAAgBIAAgBIAAgEIAAAAIgDgPIgBAAIAAgBIAAgBIAAAAIgBgGIAAAAIAAgJIAAgBIAAgOIgBgCIABgKQAFAFABAHIABADQACAFABAHIAAAAIAAAIIgBAGIAAADIAAACIAAACIAAABIAAACIABAAIABABIAAAAQACAMgBADIgBABIAAABIAAAAgAMrGoIAAgOQAQgXgPAmIAAACIgBgDgAtPGQIAAgCIAAgDIAAAAIAAgBIAAgBIgBAAIgBgGIAAgCIAAgFIgBgIIAAAAIAAgDQgEgKgBgMIgBgMIAAAAIgBgOQAKAXAEAcIABACIACAGIAAACIABAHIAAACIgBACIAAADIAAABIAAAAIAAABIACAEIAAABIABABIAAABIgBAKIAAACIgBAFQgHgCgBgUgAtgGHIgEgOIgBgEIgBgBIgCgLIgDgOIgBgLIgBAAIAAAAIAAgBQgCgJABgKIAAgCIgCAAIgBgOIAAgFIAAgDIgHghQAMAZAFAgIAAADQAEAFgCALIAAABIAAACIACALIABAHIACAMIAAABIABAHIABACIAAALIAAAAIgBABIAAABIgBACIAAgCgAqlGHIgFgPIAAAAIgBgDIgEgMIgBgHIgBgBQgEgTgBgWIAAgDQAKAZAFAcIADAVIAAAAIAAAIgAq5FnIgCgEIgCgJQgGgUgDgYIgCAAIgBgaIAAgCQgFgFAAgIQAFADACAEQACAEABAGIAAACIABABIAKBJIAAABIABAFIgBgBgAtyFgIgDgQIAAAAIgHgXIgEgNQgGgUgIgTIAAgCIAAgMIAAgZIAAgCIgBAAIgBgCQgHgVgFgYQgDgRgCgRQAPAnAJAtIAAACQAEAGgBALIAAACIACAPIAJApIAEANIADANIABACQACADABAFIAAAAIAAAFIgBAEIAAADIAAAGIAAAAIgBgCgAQKhSQASgCAQgOIABgBIACAAIABAAIAAgDQAPgNACgTIADABIAAgCIgCgCIAAgGQgBgsgngMIgBgBIACgBQAQgWgBgeIAAgBQANgHALgJIgCAAQgPgTgYgJIAAgDIgOgdIgDAAQgmgBgWgSQABgLgGgEQgSgLgWgFQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBAAAAgBQgKgPgDgWIgCAAQgTABgKgJIgCAAIgWAAIgHgFQgRgQgdgFIAAgCQgHgZACgjIAJgYIABAAIgFh7IAAgCQBDghBbAIIANABIAEAAIARAAIADAAQAPgBAOgEIACAAQAWgegIglIAAgDQAFgOAIgLIACgBQASgEAWgBIACAAIABAAIAAgCIATAAIACAAQBAgJBEgDIADAAQAMAAAMABIAAABIA5gCIADAAIAAgDQALAAAKACIAAABQBBgEA1gQIAAgCQAGgTgDgfIgBgDQAcgjA4gFIADAAQAGgaAUgKIADAAQgXgFgcACIgCAAIAAABQgMACgMAAIgDAAIgkAAIkKAAIgCAAIgUAAIgCAAIgRAAIgCAAIgdAAIgCAAIgDAAIgCAAIgRAAIgCAAQgfABgZgEIgCAAIgRAAIAAABQgRADgMgEIgCAAIgOAAIgBABQgRADgLgEIgDAAIAAABQgNADgIgEIgDAAIgYAAIAAABQgPADgJgEIgCAAIgkAAIAAABQgaADgUgEIgCAAIgFAAIAAABIgTACIgCAAIgYAAIgDAAIgYAAIgCAAIgFAAIgCAAQgfABgZgEIgCAAIgCAAIAAABQghADgbgEIgDAAIilAAIgDAAIgTAAIgCAAIgDAAIgaAAIgDAAIgVAAIgDAAIgTAAIgCAAIhGAAIgCAAIhDAAIAAADIAAACIgJgCIgCAAQgSgEgYABIgDAAIgTAAIgCAAIgWAAIgCAAIhZAAIgEAFIgHgCQAAgEgCgDIAGAAIACAAIACAAQANABAJgFQAKAEARgBQA3gCA3AAIAAgCIATAAQAGACAHAAQAKAAAHgCIAlABIAAABIADAAIAAgCIA8AAIACAAIAbAAIACAAIAaAAIADAAIARAAIACAAIATAAIADAAIAYABIAAABIACAAIACAAIAAgCIApABIAAABIAFAAIACAAIAAgCIAUABIAAABIACAAIAAgCIAYABIAAABIAmAAIADAAIAAgCIAkABIAAABIGwAAIBgAAIAhAAIADAAIAVAAIADAAIARAAIACAAIBbAAIADAAIAtAAIADAAIAJAAIADAAIATAAIACAAIAiAAIACAAIAzAAIACAAIBlAAIACAAIAAgCIAYABIAAABIADAAIAwgCIAAgCQALgNAIgRIACAAIAHgEIAAgCIABgDIACgEQAHgIALgCIAAgBIAxADIA2ADIADAEIAAADQg6gEg4AOQgRALgKATIgBACQgJAHgMAGIgCAAQg3gEgMAoIAAABQg0ANglAaIAAADQAHAsgVASIgBACQgHACgJABIgDAAQgeAIgiAEIgBABIgVABIgCAAIguAAIAAACIgTABIgDAAQhpgDhjANIgOACIAMADQAsAOASAmIAAACQgUAgg0AAIgCAAIAAABIgYABQgMAGgOADQgQAEgSgCQhkgNhQAhQBIAkBTAcQAzARAvAWQAHADAJABQBCAMAvAgQAJAHgFAIQgTAPghAAQgLAAAGAGQAKAeAkAQIACAAQAcAbARAmIAAACQgbAegtALIgCAAIgTAdIAAACQgwAQgfAhIAAACQALARADAeIABAEIABAEQAEAJABAMIAAADIAHARIAAACIACAAQACAHgBAFQgXALgBAXIgcALIgVAHIAFgGgAQdnoQADAXAAAeQAEAKgDAQIgBAAIAAAMIAAADIAAACQACALgEAGIAAACQgBAZgGASQADAOAGALIAAACIAvAbIAEgBQAOgKgHgfIgFgQQAGgWAHgVIABgBQADgZgHgQIAAgCQAMgZAEgjIAAgCIAAgDIAAgTIABgCQAFgagSgDIAAACIAAADQAFAKgDAQIgCAAIABAKQADAQgJADQgHACADgYIAAgCIAAgaQAAgEgCgBQgVgSglgBIgBgCQgdgQgegOIgqgSQgggNghgLQghgLgjgJIABA8QABAhgKAZIABACQACATgHAKQgBASAEAPIABAAQAYALARAQIAAACQAgADAcAHIADAAQAHgBAAAIIAAACQADAMABAMIABADQAcAEAUAMIACABQgBASAKAGIABACQAdABAYAIIACABQAKhDgFhJIAAgCQgHgJAAgKQAAgKAGgKIABgCQAEAGACAXgARflaIAGA8IABAAQANgFAJgJIACgBQAJgbAbgIIACgBQgBgrACglQgJgRABAXQAEAFgBAMIgBACIAAACQAAARgHAKIgBAAQAAglgEghIAAgBQgMgIAIATIgDABIgCABQgEgagNgPIgCABQgIANgJAZIAAACQAFALACANIgBAAQgFAcgIAXgAR5oRQgDAaAIAPIAAgCQAJgagOgPIAAACgASKoMQgEAXAJAJIAAgBIAAgCIAAgYIAAgDQAAAAAAgBQAAAAAAAAQgBgBAAAAQgBAAAAAAIgDAAgASunuIAAgBIABAAQABgJgFgDIAAgCIgEgBQgEARALgBgASYn2IAAADQALgCgLgSIAAARgAQgsDQAAABAAAAQAAABgBAAQAAABAAAAQAAABAAAAQAEAjgPAhQAngCArgKIACAAIAAgBQgFAAAAgEIgBAAIgBgFQAEgEgBgKIgBgDIAGgNIACgBIgBgCQgFgFgEAHIAAACIAAADQgCAUgMAJQgCgHAGgLQALgTgNgJIAAACQgHAkAAgfQAAgDgCgCQgMgMgQAAQgHAAgJADgAqXjKIgCAAIAvgiIgBAAQgEgVAegKQAKgDAHgEQAJgWAMgUIABgCQgIgZgOgVIAAgCIgKAKIgBgEQgEgKgFgJQACACAFgCIAGgCQAFAHAGAFIACACQASAXAFAkIgBACQgNAUgMAVQgPADgKAIIgMAGIAFABIAAABQgRAOADAXIABAEIgjAAQAQAOAaAEIACADIACACIADADQgegLgdgMgAptmTIACAAIAIgBQAHAEAJADIgDADQgCAIABAEQgJgNgNgIgAp6maQAAgFgFAEIgJgCIAHgIIgCAAQhLgohggRIAAgCIgCAAQghgRgRggQANgfAxABQAGAAAIgCQBOgOAmgrQglgZg2gMQgQgDgOgJQgYgQgHghQAXgPAXgNQAKgGAEgJQACgNgCgOIAAgCQAigEAJgeIABgCQgCgKAJAAIACAAQAegDAcgGIACAAQgugohPgIIgCAAIgCAAIgWAAIgCAAQgPACgJgFQgRADgJgFQgagPgoABIAAABQgMAGgOACIgCAAQgPgLgTgIIgCAAQgOACgIgEIgCgBIgkgEIgDAAIgaAAIgDAAQgPAAgLAFIgCgBQgrgYg/gEIgCAAIgpAAIgDAAQgrADgtACIgDAAQgOABgHgEIgDAAQg8gJgpgdIgiABIgCABIABADIAAAAIAAAEQiXANiZgBQgBgJAJAAQBkgGBfgPIAzAFIAEAAIAAgBIAUgCIAcAAIACAAIADAAIAcABIAAABQAWAJATAKIADAAIATABIAAACIARAAIACAAIAaAAIADAAIAHAAIACAAIARAAIADAAIAQAAIADAAIAwAAIACAAIAfAAIADAAIAVAAIADAAIARAAIACAAIAMAAIBIAAIACAAIAgAAIACAAIAiAAIACAAIA3AAIADAAIAJAAIAWAAIACAAIARAAIACAAIAbABIAAABIAJAAIADAAIAAgCIATAAIACAAIAiABIAAABIACAAIADAAIAAgCIANAAIAGAAIApABIAAAAIAAABIDdAAIB6AAIACAAIAYAAIADAAIAoAAIADAAIAkAAIACAAIAIAAIAJAAIACAAIAUAAIACAAIAmAAIADAAIACAAIAkAAIADAAIAcABIAAABIAFAAIADAAIAAgCIArAAIACAAIAYAAIADAAIATABIAAABIAAAAIACgBIAjABIgCAEIgRgBQgEgHgIAIIgKAAIgPAGQhtgEh6ACIgCAAIgDAAIgQAAIgDAAIgVAAIgDAAQgWABgQgEIgDAAIgJAAIAAABQgOADgIgEIgCABQgJADgPgBIgCAAQgMABgFgEIgDAAIAAABQgcADgWgEIgCAAIAAABIgBAAQgRACgSAAIgDAAIgRAAIgCAAQgugEg0ABIgBABQgTADgOgEIgCAAIhNAAIgDAAIgQAAIgDAAIgCAAIgDAAIgVAAIgDAAIgCAAIgYAAIgCAAQgXgBgQABIgCAAIgTAAIgDAAIhBAAIgCAAIgaAAIgDAAIgCAAIgDAAQgXACgRgEIgDAAQgbADgcgDIAAABQgXADgSgEIgCAAIjdAAQAWAIAfgBIACAAIATABIAAABQAkgDAngBIACAAIAAgDIArABIAAACQA3AEAmAVIABABQBAgHBEAJIACAAQAQALASAIIACABQAtgQApATQANAGATAAIAkABIAAACQBWAHA6AjIACABQAAAOgCAMIAAADIAAACQABAFgDAAIAAAYIAAACQAIAaAHAbQACAHgDADIAAACQACAQgEAKIgUAPQgZATgUAYQAOALATAHIAAABQAHASAEAUIABABQAFAngCAtIAAACIABAEIABABQAEAQgDAWIgBAAIAAACIgFABQgBAbAaAAQACAGAEAEQgBAHACAEIgIgEgAr+orIgMACIAAARIAAACIAAAFIAAADQAEAHgBAOIAAADQAEAJABAPIAAACIATAIQAqAOAqAEIAAgCIAFgKIAAgCIAAgaIgBgCQgCgDAAgFIgBAAIgBhSQgBgHgCgDIgCgDIg/AbIgTAIIAAAaIAAADIAAACQADAggKggIgBAAIgBgaIgDAAgAsprOQAJASAAASIABAAQAMALAOAIQAbAOAkABIAAgBQAIgLAGgNIAAgCIgHgkIAAgDIgCAAIgBgTIADAAIAAgCQAAgLgDgIIAAgDIgQgrIgBACQgQAKgTAFQACAaAJAaQAIAWgKgCQgBgEgCgDIgDgDQgCgMgFgGQgHgHgNANIAAADQAPAYgIAVIgBgCQgCgDAAgHIgBAAIgBgTIgBgCIgDgGIgDgEIgCACIACAKQACATAAAWQgFgJgBgNIAAgHQgDgPgKAAIgFABgArJs6IAAACIAAACQgBANADAJIABACQAKAeAGAjIAAADIAAAQIAAADIABAHIACAAQADAHABAKIABACQATgDARgSIACAAIAAgDIAAgVIACAAIAAgDQADgWgMgTIgCAAQgCgHgBgJIAAgDIAAgCIgBAAIgBgWIACAAIgBgGQgLgGgQAAQgLAAgOADgAPNnVIgBgTIADAAIAAgCQAAgVgCgSIgBgCQAJAKADAQIAAADIgIAhIgBAAgArtnhQgDgFABgJQAFABACACQAEAFgIAJgAN7oTIgCAAQAAgJgGgDIAAgDQgBgggDgeIgCAAIgBgOQAHgBACADIABACQAFA0AJAvQADAMgCAIQgCAIgGADIAAABQgFgNADgfgAOnnpQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAgBAAgBIAAgBIAAgFIAAgLIAAgCIAAgRIAAgCQgDgKAAgMQALAGACAWIAAAPQAAAMgDAFQgCAFgDAAIgBgBgArXoFIgBAAQgCgPAAgQIAAgCQgEgCACgIQAIAFgBAOIAAADQAEAHgDAOIgBAAIgCAAgA4VvsIABACIgBAAIgBAAIABgCgA4LxSIABAAIAAACIgBgCg");
	this.shape_9.setTransform(-282.5,-195.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_2},{t:this.shape_9},{t:this.shape_4},{t:this.shape_8},{t:this.shape_5},{t:this.shape_1},{t:this.shape},{t:this.shape_3}]},159).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-465.4,-333.1,364.5,250.5);


(lib.frb_states = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{unselectedEnabled:0,press:1,unselectedDisabled:2,selectedDisabled:3,selectedEnabled:4});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();
		*/
	}
	this.frame_1 = function() {
		/* stop();
		*/
	}
	this.frame_2 = function() {
		/* stop();
		*/
	}
	this.frame_3 = function() {
		/* stop();
		*/
	}
	this.frame_4 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// dot_enabled
	this.instance = new lib.frb_dot_1();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(1));

	// dot_disabled
	this.instance_1 = new lib.frb_dot_disabled_1();
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({_off:true},1).wait(1));

	// background pressed/disabled
	this.instance_2 = new lib.frb_background_pressed_1();

	this.instance_3 = new lib.frb_background_disabled_1();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

	// background up/static
	this.instance_4 = new lib.frb_background_1();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5));

	// radio button frame
	this.frb_frame_mc = new lib.frb_frame();

	this.timeline.addTween(cjs.Tween.get(this.frb_frame_mc).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10,10);


(lib.fcb_states = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{up:0,"press":1,uncheckedDisabled:2,checkedDisabled:3,checkedPress:4,checkedEnabled:5});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();
		*/
	}
	this.frame_1 = function() {
		/* stop();
		*/
	}
	this.frame_2 = function() {
		/* stop();*/
	}
	this.frame_3 = function() {
		/* stop();
		*/
	}
	this.frame_4 = function() {
		/* stop();
		*/
	}
	this.frame_5 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1));

	// check_enabled
	this.instance = new lib.fcb_check_1();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(2));

	// check_disabled
	this.instance_1 = new lib.fcb_check_disabled_1();
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({_off:true},1).wait(2));

	// background pressed/disabled
	this.instance_2 = new lib.fcb_background_pressed_1();

	this.instance_3 = new lib.fcb_background_disabled_1();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},2).to({state:[]},1).wait(1));

	// background static
	this.frb_frame_mc = new lib.fcb_background_1();

	this.timeline.addTween(cjs.Tween.get(this.frb_frame_mc).wait(6));

	// check box frame
	this.fcb_frame_mc = new lib.fcb_frame();

	this.timeline.addTween(cjs.Tween.get(this.fcb_frame_mc).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13,13);


(lib.Scene2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("OrganBlip");
	}
	this.frame_3 = function() {
		playSound("wrong_answer");
	}
	this.frame_7 = function() {
		playSound("asentencecontainsasubjectandaverb");
	}
	this.frame_51 = function() {
		playSound("doogwindsurfs");
		playSound("OrganBlip");
	}
	this.frame_64 = function() {
		playSound("OrganBlip");
	}
	this.frame_69 = function() {
		playSound("wrong_answer");
	}
	this.frame_81 = function() {
		playSound("right_answer");
	}
	this.frame_110 = function() {
		playSound("hesoars");
		playSound("OrganBlip");
	}
	this.frame_115 = function() {
		playSound("OrganBlip");
	}
	this.frame_121 = function() {
		playSound("wrong_answer");
	}
	this.frame_129 = function() {
		playSound("right_answer");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(4).call(this.frame_7).wait(44).call(this.frame_51).wait(13).call(this.frame_64).wait(5).call(this.frame_69).wait(12).call(this.frame_81).wait(29).call(this.frame_110).wait(5).call(this.frame_115).wait(6).call(this.frame_121).wait(8).call(this.frame_129).wait(31));

	// text
	this.instance = new lib.animD();
	this.instance.setTransform(-86.6,99,1,0.999);

	this.instance_1 = new lib.Wordoog();
	this.instance_1.setTransform(-57.9,99.3,1,0.999);

	this.instance_2 = new lib.Wordwindsurfs();
	this.instance_2.setTransform(26,100.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgJAKQgFgEAAgGQAAgFAFgEQAEgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgEgFg");
	this.shape.setTransform(90,112.9);

	this.instance_3 = new lib.Diagramstatement1();
	this.instance_3.setTransform(43.1,113.6,1,1,0,0,0,166.2,30.6);

	this.instance_4 = new lib.animH();
	this.instance_4.setTransform(-64.6,102.5,1.001,1,0,0,0,0,3.5);

	this.instance_5 = new lib.Worde();
	this.instance_5.setTransform(-43.9,102.5,1.001,1,0,0,0,0,3.5);

	this.instance_6 = new lib.Wordsoars();
	this.instance_6.setTransform(19.1,103.3,1,0.999,0,0,0,0,3.5);

	this.instance_7 = new lib.anim();
	this.instance_7.setTransform(58,102.4,1,1.001,0,0,0,5.1,19.4);

	this.instance_8 = new lib.Diagramstatement2();
	this.instance_8.setTransform(50.3,114.5,1,1,0,0,0,166.2,31.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1,p:{scaleY:0.999}},{t:this.instance,p:{scaleY:0.999}}]},52).to({state:[{t:this.instance_2},{t:this.instance_1,p:{scaleY:1}},{t:this.instance,p:{scaleY:1}}]},12).to({state:[{t:this.instance_2},{t:this.instance_1,p:{scaleY:1}},{t:this.instance,p:{scaleY:1}},{t:this.shape}]},5).to({state:[{t:this.instance_2},{t:this.instance_1,p:{scaleY:1}},{t:this.instance,p:{scaleY:1}},{t:this.shape}]},6).to({state:[{t:this.instance_3}]},6).to({state:[]},26).to({state:[{t:this.instance_5,p:{scaleX:1.001,scaleY:1,y:102.5}},{t:this.instance_4,p:{scaleX:1.001,scaleY:1,y:102.5}}]},4).to({state:[{t:this.instance_6,p:{scaleY:0.999,y:103.3}},{t:this.instance_5,p:{scaleX:1,scaleY:0.999,y:102.5}},{t:this.instance_4,p:{scaleX:1,scaleY:0.999,y:102.5}}]},5).to({state:[{t:this.instance_6,p:{scaleY:1.001,y:103.5}},{t:this.instance_5,p:{scaleX:1,scaleY:1.001,y:102.7}},{t:this.instance_4,p:{scaleX:1,scaleY:1.001,y:102.8}},{t:this.instance_7}]},6).to({state:[]},7).to({state:[{t:this.instance_8}]},1).to({state:[]},27).wait(3));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EghKAVEMgAFgqHMBCaAAAMAAFAqHg");
	mask.setTransform(0.3,-12.2);

	// background
	this.instance_9 = new lib.scene2sharkchase();
	this.instance_9.setTransform(522.4,347.5,1.764,1.764);

	this.instance_9.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({scaleX:2.14,scaleY:2.14,x:576.9,y:462.9},73).to({x:496.9,y:336.8},79).to({x:489.8,y:325.7},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-212.6,-147,425.8,269.7);


// stage content:



(lib.compSen_Scene2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene2:0,scene2_repeat:140});

	// timeline functions:
	this.frame_0 = function() {
		this.btn_menu.addEventListener("click", openMenu.bind(this));
		this.btn_goNext.addEventListener("click", openNext.bind(this));
		this.btn_goBack.addEventListener("click", openPrev.bind(this));
		
		
		function openMenu(){
		
		 window.open ("../menu/menu.html","_self");
		}
		
		
		function openNext(){
		
		 window.open ("compSen_Scene3.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("compSen_Scene1.html","_self");
		}
	}
	this.frame_139 = function() {
		/* _root.gonow = true;*/
	}
	this.frame_158 = function() {
		/* gotoAndPlay("scene2_repeat");*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(139).call(this.frame_139).wait(19).call(this.frame_158).wait(1));

	// frame
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1,1).p("EAlFAXeUglFAAAglEAAAMAAAgu7MBKJAAAg");
	this.shape_1.setTransform(268.1,195.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(159));

	// Scene2
	this.instance_10 = new lib.Scene2();
	this.instance_10.setTransform(267.2,209.3,1.116,1.116);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(159));

	// navigation
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgHAHQgEgDAAgEQAAgDAEgDQADgDAEAAQAFAAAEADQADADAAADQAAAEgDADQgEADgFAAQgEAAgDgDg");
	this.shape_2.setTransform(406.3,37.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AglA7QgEgEAAgFIAAhRIgBgKIABgKQABgIANgBQAFgCAPAAQAMAAANAKQAQALABAQQgBAJgDAGQgDAFgGAFQAIADAGAHQAGAJABAIQAAAKgMAJQgIAHgIADQgQAHgcAAQgEAAgEgEgAgUApQAOgBAOgEQANgEAAgEQgBgHgIgEQgHgEgFgBIgUAAgAgTgYIgBAQIALABQAWgCAAgQQAAgFgHgFQgGgGgHAAIgNAAg");
	this.shape_3.setTransform(398.2,31.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgpA6QgEgDAAgFIABgRIAAgSIAAg9QAAgFADgEQAEgFAHAAIATACQALABAGAEQAiARAAAZQAAAKgIAGQgGAIgOAFQAUAMALAMQADADAAADQgBAFgDADQgDADgFAAQgDAAgFgDQgXgWgagJIABAZQAAAFgEADQgDADgEAAQgFAAgDgDgAgWACIACAAQAUAAAHgDQAEgCADgDQADgEAAgBQAAgJgLgIQgIgIgLgBIgJgBg");
	this.shape_4.setTransform(387.9,31.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgjA7QgIgHAAgZIABgeIABgfIgBgIIAAgJQAAgLALAAQADAAADACIASgDIANgCQAUAAALAFQAIACAAAHQAAAEgEAEQgDAEgEgBIgEAAQgNgEgLABIgLABIgOACIgBAfIAdgDIATgCQAEAAAEADQADAEAAAEQAAAIgKABIgTACIgfACIgBARQAAAPACACQABABAJAAIAMAAIAPAAIAEgBIAFAAQAFAAADACQADADABAGQAAAIgKACQgIABgWAAQgZAAgIgHg");
	this.shape_5.setTransform(377.8,31.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgQA3QgJgXgMgpIgGgVQgFgOAAgGQAAgFAEgDQADgDAEAAQAIAAADAIIADAOIAHAZIAMAlIARgtIAGgSQAFgMAFgGQAEgEAFAAQAEAAAEAEQADADAAAEQAAADgCADQgEAGgEAJIgGAPIgVA1IgIASQgEAHgEAAQgIAAgEgIg");
	this.shape_6.setTransform(367.2,32);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AASAkIgMAEQgGACgCAAQgTAAgJgKQgJgKAAgUQAAgRAOgNQANgNASAAQAHAAAKADQAMAGAAAHQAAAAAAABQAAAAgBABQAAAAAAABQAAABgBAAIgBAIIgBALQAAANACAGIAEAIIADAIQAAAEgDACQgDADgEAAQgEAAgIgGgAgKgOQgIAIAAAJQAAAKAEAGQAEAEAHAAQADABAEgCQAFgCAEgCQgDgSAAgJIABgFIABgHIgDgBIgCgBQgJAAgIAJg");
	this.shape_7.setTransform(350.4,33.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAVA7QgGACgFABIgKABQgRABgMgMQgMgLAAgRQAAgWAMgKQAMgNARAAIALABQAEABAEACQABgaABgKQABgKAJAAQAFAAACADQADAEAAAEIgBAiIgCAgQAAAcACAKIAAABQAAAFgDADQgEADgEgBQgFAAgDgEgAgPADQgGAGAAAOQABAJAFAFQAHAHAIgBQAEAAAEgBIAGgFIADgDIAAgcQgDgFgDgBQgFgCgFABQgKAAgGAEg");
	this.shape_8.setTransform(334.2,31.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAQAkIgDgRIgBgQIABgEIAAgHIAAgEIAAgDQAAgHgEAAQgGAAgEAJQgHAIgDAMIgBAHIAAAHIgBAHIgBAHQAAAEgDADQgDADgFAAQgEAAgDgDQgDgDAAgEIAAgHIgBgHIABgVIABgTIAAgHIgBgIQAAgEADgDQAEgDAEAAQAKAAACAMIAAABQALgLAKAAQAPAAAGAMQADAIABARIAAAFIAAADIABAQIACAQQAAAFgDACQgEADgEAAQgJAAgBgJg");
	this.shape_9.setTransform(325.5,33.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AASAkIgMAEQgGACgCAAQgTAAgJgKQgJgKAAgUQAAgRAOgNQANgNASAAQAHAAAKADQAMAGAAAHQAAAAAAABQAAAAgBABQAAAAAAABQAAABgBAAIgBAIIgBALQAAANACAGIAEAIIADAIQAAAEgDACQgDADgEAAQgEAAgIgGgAgKgOQgIAIAAAJQAAAKAEAGQAEAEAHAAQADABAEgCQAFgCAEgCQgDgSAAgJIABgFIABgHIgDgBIgCgBQgJAAgIAJg");
	this.shape_10.setTransform(316.8,33.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0000FF").s().p("AgGA4QgEgCAAgGIAAgCIABgEIgBgLIAAgLIgCgaIgCgcIgEAAQgSgBgKgCQgIgCAAgIQAAgEACgDQAEgEAFAAIAMABIANABIAOAAIAMAAIASABIASABQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAIgTgBIgTgBIACAgIACAeIAAAIIABAIQAAAGgDAEQgDAGgFAAQgDAAgDgDg");
	this.shape_11.setTransform(299.8,31.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0000FF").s().p("AghAvQgMgNAAgQQAAgYAXgcQAUgWARAAIAHAAIAEABQAEgEAFAAQAIAAACAJIABAPQAAAFgCACQgDAFgGAAQgHAAgDgHQgBgEgCgBIgHgBQgKAAgKAQQgSAUAAASQAAAJAFAFQAGAGAIABQAGAAAIgFIAMgHQAGgEADAAQAFAAADADQADAEAAADQAAAFgEAEQgVASgVAAQgSAAgLgNg");
	this.shape_12.setTransform(289.3,31.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0000FF").s().p("AgjA7QgJgHABgZIABgeIACgfIgBgIIgBgJQAAgLALAAQADAAADACIASgDIANgCQATAAAMAFQAIACAAAHQgBAEgDAEQgCAEgGgBIgCAAQgNgEgMABIgLABIgOACIgBAfIAdgDIATgCQAEAAAEADQADAEAAAEQAAAIgKABIgTACIgfACIgBARQAAAPACACQABABAJAAIANAAIAOAAIAEgBIAFAAQAFAAADACQADADABAGQgBAIgIACQgJABgWAAQgZAAgIgHg");
	this.shape_13.setTransform(279.5,31.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0000FF").s().p("AggA2QgRgMAAgPQAAgMALAAQAMAAAAAMQAAAFAHAFQAIAFAHAAQADAAABgLIAAgXIABgrIAAgFIgBAAIgIAAIgJgBQgFABgDgDQgDgDAAgFQAAgKAOAAIAHAAIAHAAIAOgBIAPAAQAVAAAAALQAAAFgDADQgDADgFAAIgFAAIgFgBIgGAAIAAAGQAAA2gIAaQgFASgOABQgOAAgOgKg");
	this.shape_14.setTransform(269,32.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0000FF").s().p("AglA7QgEgEAAgFIAAhRIgBgKIABgKQABgIANgBQAFgCAOAAQANAAANAKQAQALABAQQgBAJgDAGQgCAFgHAFQAIADAFAHQAIAJAAAIQAAAKgMAJQgHAHgJADQgQAHgcAAQgEAAgEgEgAgUApQAOgBANgEQAOgEAAgEQAAgHgJgEQgGgEgGgBIgUAAgAgTgYIgBAQIALABQAWgCAAgQQAAgFgHgFQgGgGgIAAIgMAAg");
	this.shape_15.setTransform(258.9,31.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0000FF").s().p("AgeA1QgVgQAAglIABgMIAAgLIAAgJIAAgJQAAgGADgFQADgHAFAAQAFAAADACQADADAAAFIAAANIAAANIAAALIgBALQAAAKADAKQADANAHAEQADADAMAAQATAAAHgjQAEgQAAgiQAAgEADgEQADgFAHAAQAFAAADADQACADAAAEQAAAfgDARQgFAZgNARQgFAIgIAFQgKAGgJAAQgTAAgKgHg");
	this.shape_16.setTransform(247.5,32.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0000FF").s().p("AgpAyQgJgHAAgKQAAgFACgDQADgDAGAAQAHAAADAHQAEAKAQAAQAMAAAMgGQANgGAAgHQAAgKgIgDQgGgDgPAAQgOAAgKgEQgPgGAAgMQABgPAQgNQAQgMARAAQAIAAALADQAOAFAAAFQAAAEgDADQgDAEgFAAIgLgCIgLgBQgKAAgHAFQgKAFAAAFQAAADADACQADACAGABIASABQARABAKAJQALAHAAARQAAAUgXAKQgRAIgVAAQgTAAgMgJg");
	this.shape_17.setTransform(236.2,32.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AASAkIgMAEQgGACgCAAQgTAAgJgKQgJgKAAgUQAAgRAOgNQANgNASAAQAHAAAKADQAMAGAAAHQAAAAAAABQAAAAgBABQAAAAAAABQAAABgBAAIgBAIIgBALQAAANACAGIAEAIIADAIQAAAEgDACQgDADgEAAQgEAAgIgGgAgKgOQgIAIAAAJQAAAKAEAGQAEAEAHAAQADABAEgCQAFgCAEgCQgDgSAAgJIABgFIABgHIgDgBIgCgBQgJAAgIAJg");
	this.shape_18.setTransform(219.3,33.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgVAoQgLgEAAgIQAAgIAJAAIALACQAGADADgBQAOAAABgGQgBgEgKgFIgTgJQgLgHAAgLQAAgPARgGQAKgDARAAQAIAAAEACQAFADAAAHQAAAOgIAAQgHAAgCgGIgGgBQgRAAAAAFQAAADAKAFIAUAKQALAIAAAKQAAANgMAHQgKAGgNgBQgKAAgJgDg");
	this.shape_19.setTransform(203.8,33.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAPAkIgCgRIgBgQIAAgEIAAgHIAAgEIABgDQAAgHgDAAQgHAAgFAJQgGAIgEAMIAAAHIgBAHIAAAHIgBAHQAAAEgCADQgEADgEAAQgFAAgDgDQgDgDAAgEIAAgHIgBgHIABgVIABgTIAAgHIAAgIQAAgEACgDQAEgDAFAAQAKAAAAAMIAAABQAMgLALAAQAOAAAGAMQADAIAAARIAAAFIAAADIADAQIABAQQAAAFgDACQgEADgEAAQgJAAgCgJg");
	this.shape_20.setTransform(195.9,33.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgIA4QgDgDAAgEIgBgPIAAgOIABgRIABgQQAAgEACgDQADgDAFAAQADAAADADQADADAAAEIgBAQIgBARIAAAOIABAPQAAAEgDADQgDADgDAAQgFAAgCgDgAgGgnQgDgDAAgFQAAgFADgDQAEgDADAAQAFAAADADQAEADAAAFQAAAFgEADQgDAEgFAAQgDAAgEgEg");
	this.shape_21.setTransform(189.6,31.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AASAkIgMAEQgGACgCAAQgTAAgJgKQgJgKAAgUQAAgRAOgNQANgNASAAQAHAAAKADQAMAGAAAHQAAAAAAABQAAAAgBABQAAAAAAABQAAABgBAAIgBAIIgBALQAAANACAGIAEAIIADAIQAAAEgDACQgDADgEAAQgEAAgIgGgAgKgOQgIAIAAAJQAAAKAEAGQAEAEAHAAQADABAEgCQAFgCAEgCQgDgSAAgJIABgFIABgHIgDgBIgCgBQgJAAgIAJg");
	this.shape_22.setTransform(182.7,33.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgFA2QgEgDAAgEIAAgIIAAgJIgBgnIgPgBQgJgBgBgJQAAgEAEgEQADgDAEAAIAOABIgBgIIAAgIQAAgEADgCQADgEAEAAQAKAAAAAUIAAAGIAIgBIAMABQAHADgBAHQAAAFgCACQgEADgFAAIgDAAIgEAAIgIABIACAnIAAAEIAAAFQAAARgLABQgCgBgDgCg");
	this.shape_23.setTransform(174.5,32.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAPAkIgCgRIgBgQIAAgEIAAgHIAAgEIABgDQAAgHgDAAQgHAAgFAJQgGAIgEAMIAAAHIgBAHIAAAHIAAAHQAAAEgDADQgEADgEAAQgFAAgDgDQgDgDAAgEIgBgHIAAgHIABgVIABgTIAAgHIAAgIQAAgEADgDQADgDAFAAQAKAAAAAMIAAABQAMgLALAAQAOAAAGAMQAEAIgBARIAAAFIAAADQAAAGADAKIABAQQAAAFgDACQgEADgEAAQgKAAgBgJg");
	this.shape_24.setTransform(166.6,33.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgYAgQgMgKAAgTQgBgPAKgNQAMgQATAAQAQAAAJAMQAIALAAARQAAAQgJANQgLAOgRAAQgOAAgKgKgAgKgMQgFAIAAAHQAAAKAGAFQAEAEAFAAQAFAAAFgFQAGgFAAgJQABgYgOAAQgIAAgFAJg");
	this.shape_25.setTransform(158,33.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgXAiQgMgLAAgQQAAgOALgRQAMgSAPgBQAIABALAEQANAFAAAHQAAAEgDADQgDADgEAAQgDAAgFgDQgFgEgJAAQgEAAgHAMQgHALAAAHQAAAHAGAFQAFAFAIAAQAFAAAHgEIAKgEQAEAAADADQADADAAAEQAAAGgNAGQgMAFgHABQgQAAgLgKg");
	this.shape_26.setTransform(149.6,33.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgjA7QgJgHAAgZIACgeIACgfIgBgIIgBgJQAAgLALAAQADAAADACIARgDIAOgCQATAAAMAFQAIACgBAHQAAAEgDAEQgDAEgFgBIgCAAQgOgEgLABIgLABIgOACIgBAfIAcgDIATgCQAFAAADADQAEAEAAAEQAAAIgKABIgTACIgfACIgBARQAAAPACACQABABAJAAIANAAIAOAAIAFgBIAEAAQAFAAADACQAEADAAAGQgBAIgIACQgJABgWAAQgZAAgIgHg");
	this.shape_27.setTransform(134,31.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgiAvQgLgNAAgQQAAgYAXgcQATgWATAAIAGAAIAEABQAEgEAFAAQAIAAACAJIABAPQAAAFgCACQgDAFgGAAQgHAAgDgHQgCgEgBgBIgGgBQgLAAgKAQQgSAUAAASQAAAJAFAFQAGAGAIABQAGAAAIgFIAMgHQAGgEADAAQAEAAAEADQADAEAAADQAAAFgEAEQgWASgUAAQgRAAgNgNg");
	this.shape_28.setTransform(123.9,31.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("Ag2A7QgDgDAAgEIABgKIAAgJIABgNIAAgPIAAgNIAAgOIgBgOIgBgOQAAgFAEgDQAEgEAFAAQAGAAAHAKQAhAyAjAfIAAgNIgBgxIgBgJIgBgIQAAgLAMAAQAMAAAAAnIAAAMIAAAwIgCAMQgBAKgKAAQgFAAgHgGQgegbgkgvIgBAXIABATIAAASQAAAXgLAAQgGAAgEgEg");
	this.shape_29.setTransform(112.3,31.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgjA7QgIgHAAgZIABgeIABgfIAAgIIgBgJQAAgLALAAQADAAADACIASgDIANgCQAUAAALAFQAIACAAAHQAAAEgEAEQgDAEgEgBIgEAAQgNgEgLABIgLABIgOACIgBAfIAdgDIATgCQAEAAAEADQADAEAAAEQAAAIgKABIgTACIgfACIgBARQAAAPACACQABABAJAAIAMAAIAPAAIAEgBIAFAAQAFAAADACQADADAAAGQABAIgKACQgIABgWAAQgZAAgIgHg");
	this.shape_30.setTransform(101.1,31.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgGA4QgEgCAAgGIAAgCIABgEIgBgLIAAgLIgCgaIgCgcIgEAAQgSgBgKgCQgIgCAAgIQAAgEACgDQAEgEAFAAIAMABIANABIAOAAIAMAAIASABIASABQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAIgTgBIgTgBIACAgIACAeIAAAIIABAIQAAAGgDAEQgDAGgFAAQgDAAgDgDg");
	this.shape_31.setTransform(90.3,31.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("Ag2A7QgDgDAAgEIABgKIAAgJIABgNIAAgPIAAgNIAAgOIgBgOIgBgOQAAgFAEgDQAEgEAFAAQAGAAAHAKQAhAyAjAfIAAgNIgBgxIgBgJIgBgIQAAgLAMAAQAMAAAAAnIAAAMIAAAwIgCAMQgBAKgKAAQgFAAgHgGQgegbgkgvIgBAXIABATIAAASQAAAXgLAAQgGAAgEgEg");
	this.shape_32.setTransform(78.2,31.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgjA7QgJgHAAgZIACgeIACgfIgBgIIgBgJQAAgLALAAQADAAADACIARgDIAOgCQATAAAMAFQAIACgBAHQAAAEgDAEQgDAEgFgBIgCAAQgOgEgLABIgLABIgOACIgBAfIAcgDIATgCQAFAAADADQAEAEAAAEQAAAIgKABIgTACIgfACIgBARQAAAPACACQABABAJAAIANAAIAOAAIAFgBIAEAAQAFAAADACQAEADAAAGQgBAIgIACQgJABgWAAQgZAAgIgHg");
	this.shape_33.setTransform(66.9,31.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgpAyQgJgHAAgKQAAgFACgDQADgDAGAAQAHAAADAHQAEAKAQAAQAMAAAMgGQANgGAAgHQAAgKgIgDQgGgDgPAAQgOAAgKgEQgPgGAAgMQABgPAQgNQAQgMARAAQAIAAALADQAOAFAAAFQAAAEgDADQgDAEgFAAIgLgCIgLgBQgKAAgHAFQgKAFAAAFQAAADADACQADACAGABIASABQARABAKAJQALAHAAARQAAAUgXAKQgRAIgVAAQgTAAgMgJg");
	this.shape_34.setTransform(56.1,32.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAbAsQgEgKgEgMIgTACQgJABgHACIgMAZQgEAGgGAAQgFAAgDgDQgDgDgBgEQAAgEAMgXIgBgFQABgEAGgCIAZgmQASgdAFAAQAIAAADAKIAFAZIAMAyIADAKQADAHABADQAAAFgEADQgEACgEAAQgGAAgGgOgAgFAGIAJgBIALgBIgFgYIgPAag");
	this.shape_35.setTransform(37.7,32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(159));

	// buttons
	this.btn_menu = new lib.skiptomenu();
	this.btn_menu.setTransform(514.1,20.3);
	new cjs.ButtonHelper(this.btn_menu, 0, 1, 2, false, new lib.skiptomenu(), 3);

	this.instance_11 = new lib.Copyright("synched",0);
	this.instance_11.setTransform(275,393.5);

	this.btn_goBack = new lib.goNext();
	this.btn_goBack.setTransform(57.6,352.3,1,1,0,0,180);
	new cjs.ButtonHelper(this.btn_goBack, 0, 1, 2, false, new lib.goNext(), 3);

	this.btn_goNext = new lib.goNext();
	this.btn_goNext.setTransform(494,352.3);
	new cjs.ButtonHelper(this.btn_goNext, 0, 1, 2, false, new lib.goNext(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_goNext},{t:this.btn_goBack},{t:this.instance_11},{t:this.btn_menu}]}).wait(159));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(208.8,141.3,717.8,493.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;