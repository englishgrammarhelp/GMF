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
		{src:"sounds/_12a.mp3", id:"_12a"},
		{src:"sounds/_12b.mp3", id:"_12b"},
		{src:"sounds/_13b.mp3", id:"_13b"},
		{src:"sounds/_13c.mp3", id:"_13c"},
		{src:"sounds/_16a.mp3", id:"_16a"},
		{src:"sounds/_18b.mp3", id:"_18b"},
		{src:"sounds/_19b.mp3", id:"_19b"},
		{src:"sounds/_2a.mp3", id:"_2a"},
		{src:"sounds/_3a.mp3", id:"_3a"},
		{src:"sounds/_4a.mp3", id:"_4a"},
		{src:"sounds/_6a.mp3", id:"_6a"},
		{src:"sounds/_7b.mp3", id:"_7b"},
		{src:"sounds/_9a.mp3", id:"_9a"},
		{src:"sounds/bgmusic.mp3", id:"bgmusic"},
		{src:"sounds/JinglePronoun.mp3", id:"JinglePronoun"},
		{src:"sounds/MenuPronoun.mp3", id:"MenuPronoun"},
		{src:"sounds/s_coolcheer.mp3", id:"s_coolcheer"},
		{src:"sounds/hesheit.mp3", id:"hesheit"},
		{src:"sounds/himherit.mp3", id:"himherit"},
		{src:"sounds/i.mp3", id:"i"},
		{src:"sounds/me.mp3", id:"me"},
		{src:"sounds/nominative.mp3", id:"nominative"},
		{src:"sounds/objectis.mp3", id:"objectis"},
		{src:"sounds/objectivecase.mp3", id:"objectivecase"},
		{src:"sounds/objectsof.mp3", id:"objectsof"},
		{src:"sounds/replaces.mp3", id:"replaces"},
		{src:"sounds/subjectis.mp3", id:"subjectis"},
		{src:"sounds/subjectof.mp3", id:"subjectof"},
		{src:"sounds/substitutes.mp3", id:"substitutes"},
		{src:"sounds/them.mp3", id:"them"},
		{src:"sounds/they.mp3", id:"they"},
		{src:"sounds/us.mp3", id:"us"},
		{src:"sounds/we.mp3", id:"we"},
		{src:"sounds/you.mp3", id:"you"}
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



(lib.VertLine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("AAKEiIgTAAIAApDIATAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgIEhIAApBIARAAIAAJBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-30,4,60);


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


(lib.pronounwinIcanwin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AA1BrIgGgwQgDgaAAgXIABgSIAAgVQAAgwgRAAQgZAAgUAdQgUAbgLAnIgCAVIgCAWIACATIABAUQgBAKgGAGQgGAGgJAAQgKAAgFgGQgHgGABgKIgBgUIgCgTQAAgXADgmQADgoAAgXIgBgVIgBgVQABgJAGgGQAGgGAKAAQATAAACAcIABAaQAlgxAlAAQAjAAAOAfQAJAUABApIAAAWIAAATQAAASAFAdQAEAdAAASQABAJgHAGQgGAGgJAAQgUAAgCgUg");
	this.shape.setTransform(22.4,7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgUCeQgGgFAAgLIgBgnIgBgnQAAgVACgfQACgcAAgWQAAgJAHgHQAGgFAJAAQAHAAAHAFQAGAHAAAJQAAAWgDAcQgCAfAAAVIABAnIABAnQAAALgGAFQgGAHgIAAQgJAAgGgHgAgNh4QgIgIAAgKQAAgLAIgHQAIgIAIAAQALAAAHAIQAIAHAAALQAAAKgIAIQgHAHgLABQgIgBgIgHg");
	this.shape_1.setTransform(4.2,1.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AANA/QgEgTgFggIgFgvIgSAoIghBaQgDAJgGAEQgGANgPAAQgQABgQhCQgIgigIg5IgFggQgDgUAAgOQAAgJAHgGQAGgGAJAAQARAAAEASQADANABATIAEAhIANBgQAYhBAahZQAHgYARAAQARAAAGAbQAGAaAIA1QAJA2AHAfIAQg8IAch2QAEgNAPAAQAJAAAHAGQAHAGAAAJIgCAKQgRBIgcBYQgGAUgOAVQgIAMgNAAQgYgBgOg7g");
	this.shape_2.setTransform(-17.8,7.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.5,-33.3,71.1,66.7);


(lib.pronounheader = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAdA7IgDgbQgCgOAAgMIABgKIAAgMQAAgagKAAQgOAAgKAQQgLAPgGAVIgBAMIgCALIACALIAAAMQAAAFgDAEQgDADgGAAQgFAAgEgDQgDgEAAgFIAAgMIgBgLIABghIACgiIAAgMIgBgLQABgFADgEQADgEAFAAQAMAAABAQIAAAPQAUgcAUABQATgBAJASQAFALAAAWIAAANIAAAJQAAALACAPQAEAQAAALQgBAFgDAEQgEACgFAAQgLAAgBgLg");
	this.shape.setTransform(134.8,3.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAbA6QgQAHgRAAQgQAAgLgGQgLgJgDgPQgEgfAAgYQAAgQADgWQACgLAKAAQAFAAAEAEQADADAAAGIgCASIgBASIABAhQABAPADAIIAIAEIAIABQAOAAASgGIAAgYIAAgWQAAgbACgSQABgMALAAQAFAAAEAEQADADAAAFIgCAuIAAAZIAAAaIABAIIAAAJQAAAFgEADQgDADgFABQgKgBgCgLg");
	this.shape_1.setTransform(121.5,4.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgjAzQgRgRgBgcQAAgaAOgVQARgYAdAAQAYAAANAWQAKASAAAZQgBAagOATQgPAVgYAAQgVAAgOgPgAgVgXQgIANAAAQQAAASAKAKQAIAIALAAQALAAAJgJQAKgLABgRQACgtgcgBQgQAAgKASg");
	this.shape_2.setTransform(108.2,4.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhRBfQgDgEgBgFIABgPIABgQIAAgXIABgWIAAgXIgBgYIgBgXIgCgXQAAgGAGgEQAEgFAHAAQAFAAALAOQAdAuAYAeQAcAiAjAgIAAgPIgBgPQAAg0gEggIgDgNQgDgIAAgEQAAgPANAAQAVAAAABQIAAAmIgBApIgCATQgCAMgKAAQgHAAgJgJQgygvg/hWIAAAbIgBAaIABAfIAAAeQAAAhgMAAQgHAAgEgEg");
	this.shape_3.setTransform(92.1,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAnA+IgJgJIgUAKQgJADgEAAQgdAAgNgQQgMgPAAggQAAgbAUgVQAVgVAaAAQAKAAAOAFQAQAHAAAKQAAADgCADIgCAPIgBAZQAAAPACAJIAIAWIADAGIAAACQAAAFgDADQgDADgFAAQgCAAgGgFgAgTgdQgOAPAAASQAAAUAHAKQAHAKAOAAQAKAAAIgEIANgJQgEgfAAgQIAAgLIACgNIgHgDIgGgCQgRAAgNAQg");
	this.shape_4.setTransform(68.1,4.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AghBDQgTgHAAgLQAAgFAEgEQAEgEAFAAQAEAAAGAGQADADAKACIAOABQAIAAAIgCQALgEAAgIQAAgQgXgGIgLgDQgQgEgHgEQgKgFAAgOQAAgZAYgLQAIgDAOgFIAXgHQAFgDAGAAQAFAAADAEQAEADAAAGIABAKIACAKQAAAGgEADQgDAEgFgBQgHABgDgFQgCgDgBgKQgJACgTAGQgSAIAAALIAHADQAaAFAOAIQAUALAAAYQAAAVgRAKQgPAIgTAAQgQAAgPgGg");
	this.shape_5.setTransform(47.8,3.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgoA1QgTgQAAgcQAAgdAPgWQARgXAbAAQATAAANAHQAQAIAAARQAAANgOAKQgGAFgUAGIgtAXQAHAKALAFQAKAFALAAQAJAAALgDQAOgEAFgHQAEgGAEAAQAFAAADADQADADAAAFQAAANgVAKQgTAIgSAAQgZAAgRgNgAgYggQgKAMgFAVIAmgQQAUgLAJgIQgKgJgSAAQgOAAgKALg");
	this.shape_6.setTransform(35.4,4.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgiA1QgRgQAAgaQAAgWAQgbQASgdAVAAQAMAAAPAGQATAHAAAKQAAAFgDADQgDAEgFAAQgDAAgDgCIgFgEQgHgGgRAAQgKAAgMAWQgLAVAAAMQAAARALAJQAKAIAOAAQAHAAAJgDIAOgIIAFgCQAEAAAEAEQADADAAAFQAAAJgTAIQgQAHgLAAQgXAAgRgPg");
	this.shape_7.setTransform(22,4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAnA+IgJgJIgUAKQgJADgEAAQgdAAgNgQQgMgPAAggQAAgbAUgVQAVgVAaAAQAKAAAOAFQAQAHAAAKQAAADgCADIgCAPIgBAZQAAAPACAJIAIAWIADAGIAAACQAAAFgDADQgDADgFAAQgCAAgGgFgAgTgdQgOAPAAASQAAAUAHAKQAHAKAOAAQAKAAAIgEIANgJQgEgfAAgQIAAgLIACgNIgHgDIgGgCQgRAAgNAQg");
	this.shape_8.setTransform(9.1,4.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgMBYIABgsIABgsIABgrIAAgsQABgMAJAAQAMAAABAMIgBAsIAAArIgDA8IgBAcQAAAMgKAAQgLAAAAgMg");
	this.shape_9.setTransform(-0.7,0.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AguBjQgDgEAAgFIAAgxIAAgvQAAgbgCgVIgCgZQAAgJADgGQAEgHAHAAQAFAAADAEQADACAAAGIAAADIgBAIQALgIAJgDQAJgEAIAAQAZAAAMAWQAJASAAAdQAAAYgOARQgPATgZAAQgLAAgOgFIgBA7QAAAFgDAEQgDADgFAAQgGAAgDgDgAgKg/QgHADgKAJQACAcAAAcQANAGAMgBQAPABAIgLQAHgJAAgPQAAgXgFgLQgGgLgLAAQgJAAgJAGg");
	this.shape_10.setTransform(-10.7,7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgoA1QgTgQAAgcQAAgdAPgWQARgXAbAAQATAAANAHQAQAIAAARQAAANgOAKQgGAFgUAGIgtAXQAHAKALAFQAKAFALAAQAJAAALgDQAOgEAFgHQAEgGAEAAQAFAAADADQADADAAAFQAAANgVAKQgTAIgSAAQgZAAgRgNgAgYggQgKAMgFAVIAmgQQAUgLAJgIQgKgJgSAAQgOAAgKALg");
	this.shape_11.setTransform(-24.1,4.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AguA4IAAhUIABgMIAAgMQgBgNALAAQAMAAAAAVQAXgXAbAAQALAAAEAIQAFAHAAAPIAAAJQgBAPgMAAQgKAAAAgMIAAgJIAAgKQgUACgKAJQgKAIgIAQIABBBQAAAMgNAAQgKAAAAgMg");
	this.shape_12.setTransform(-36.8,4.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#9C30CE").s().p("AAdA7IgDgbQgCgOAAgMIABgKIAAgMQAAgagKAAQgOAAgKAQQgLAPgGAVIgBAMIgCALIACALIAAAMQAAAFgDAEQgDADgGAAQgFAAgEgDQgDgEAAgFIAAgMIgBgLIABghIACgiIAAgMIgBgLQABgFADgEQADgEAFAAQAMAAABAQIAAAPQAUgcAUABQATgBAJASQAFALAAAWIAAANIAAAJQAAALACAPQAEAQAAALQgBAFgDAEQgEACgFAAQgLAAgBgLg");
	this.shape_13.setTransform(-56.9,3.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#9C30CE").s().p("AAbA6QgQAHgRAAQgQAAgLgGQgLgJgDgPQgEgfAAgYQAAgQADgWQACgLAKAAQAFAAAEAEQADADAAAGIgCASIgBASIABAhQABAPADAIIAIAEIAIABQAOAAASgGIAAgYIAAgWQAAgbACgSQABgMALAAQAFAAAEAEQADADAAAFIgCAuIAAAZIAAAaIABAIIAAAJQAAAFgEADQgDADgFABQgKgBgCgLg");
	this.shape_14.setTransform(-70.2,4.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#9C30CE").s().p("AgjAzQgRgRgBgcQAAgaAOgVQARgYAdAAQAYAAANAWQAKASAAAZQgBAagOATQgPAVgYAAQgVAAgOgPgAgVgXQgIANAAAQQAAASAKAKQAIAIALAAQALAAAJgJQAKgLABgRQACgtgcgBQgQAAgKASg");
	this.shape_15.setTransform(-83.5,4.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#9C30CE").s().p("AAdA7IgDgbQgCgOAAgMIAAgKIABgMQAAgagKAAQgNAAgLAQQgLAPgGAVIgCAMIgBALIABALIABAMQAAAFgDAEQgEADgFAAQgFAAgEgDQgDgEAAgFIAAgMIgBgLIACghIABgiIAAgMIgBgLQABgFADgEQADgEAFAAQAMAAABAQIAAAPQAUgcAUABQATgBAIASQAGALAAAWIAAANIAAAJQAAALACAPQAEAQAAALQAAAFgEAEQgDACgGAAQgLAAgBgLg");
	this.shape_16.setTransform(-96.1,3.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#9C30CE").s().p("AgjAzQgRgRgBgcQAAgaAOgVQARgYAdAAQAYAAANAWQAKASAAAZQgBAagOATQgPAVgYAAQgVAAgOgPgAgVgXQgIANAAAQQAAASAKAKQAIAIALAAQALAAAJgJQAKgLABgRQACgtgcgBQgQAAgKASg");
	this.shape_17.setTransform(-109.8,4.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#9C30CE").s().p("AguA4IAAhUIAAgMIAAgMQAAgNALAAQANAAAAAVQAWgXAbAAQALAAAEAIQAFAHAAAPIAAAJQgBAPgMAAQgKAAAAgMIAAgJIAAgKQgUACgKAJQgKAIgIAQIABBBQAAAMgNAAQgKAAAAgMg");
	this.shape_18.setTransform(-121.7,4.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#9C30CE").s().p("AgyBdQgEgDAAgFIAAgkQAAgRADggIACgyIAAgRQAAgMACgFQADgLAJABIALgBIASgBQAUAAATAQQAWAQAAAYQAAAfgXAPQgVAQgaAAIgPgBIgBBAQAAAFgDADQgEAEgEAAQgFAAgDgEgAgahHIAAAWIgDAxIAOAAQASAAAOgJQAQgMAAgTQAAgOgPgJQgOgJgNAAIgKAAIgHABg");
	this.shape_19.setTransform(-134.5,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-143.2,-19.4,286.4,38.8);


(lib.Ipointingredstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AloApIAAAAQAAAAAAAAQAFAEAFADQAWALAaACQAOABALAAQATgCATgDQATgDAVgDQARgDARgEQAPgEANgBQAagCAagHQANgDANgCQASgDASgBQASgBAPgEQAUgFAVgFQAQgDAPAAQAQAAAOgCQAMgBAJACQADABABAEQgCgFgCgHQAAgCgBgCQABgCAAgBQAFgOAFgNQAIgQAHgRQAHgRAFgSQAGgRAJgPQAKgQAUAAQAKAAALgBQASgCASAEQASAEASADQASADARAEQASAEARAIQARAHAQAFQAVAIAAAQQAAAAgBAAQgEAEgFACQgSAGgTgCQgNgCgNABQgCAAgDABQgDgBgDAAQgTgEgUgEQgRgEgQgGADfgCQgSgJAFgNQABgEAFgCQgKgIgHgOQgJgRALgKQACgCgCgEQgHgTAOgJAFRgUQAAAGgCAHQAAAIgFAMQgJASgRAGQgSAHgTADQgSADgTADQgRADgTAEQgSADgRAEQgSAEgSAEQgTAFgSADQgSACgTAHQgSAGgSgBQgVgCgGAPQgBAAgBgBQgDAAgFAAQgRADgSADQgSAEgSABQgTABgTABQgSABgTAEQgSAEgTAEQgTAEgTADQgRACgRADQgTAEgTAEQgOADgUgBQgTgBgSgFQgTgGgLgVQgKgWgDgOAFihSQgDAAgDAAQgCAQgHAQQAAABgBAAQAAABAAAAQgBACgBADQACAKgBANQgOgBgSgIQgSgHgTgEAFTgyQgCgBgDACQACABACAAAFOgxQgMgDgMgDQgUgFgNgH");
	this.shape.setTransform(39.3,-8.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("AleCdQgUgBgSgFQgTgGgKgVQgKgWgDgOQgEgNATgCQASgBAQgPQAQgPAFgBIAAAAIALAHQAVALAbACIAYABIAmgFIAogGQARgDARgEQAPgEANgBQAbgCAagHIAagFQASgDARgBQASgBAQgEIAogKQAQgDAQAAQAQAAANgCQAMgBAKACQACABACAEIgEgMIgCgEIACgDIAKgbIAOghQAHgRAGgSQAFgRAJgPQAKgQAUAAIAWgBQASgCARAEIAkAHIAjAHQATAEARAIIAgAMQAVAIAAAQIAAAAQgFAEgFACQgSAGgTgCQgMgCgNABIgFABIgHgBIgmgIQgRgEgRgGQARAGARAEIAmAIIAHABIgHAAQgCAQgHAQQgCgBgDACIAEABIgCAFQADAKgBANQgOgBgTgIQgRgHgTgEQATAEARAHQATAIAOABIgCANQAAAIgGAMQgJASgRAGQgRAHgUADIgkAGIglAHIgjAHIgkAIQgSAFgSADQgTACgTAHQgSAGgRgBQgVgCgGAPIgDgBIgHAAIgkAGQgSAEgSABIglACQgTABgSAEIgmAIIglAHIgjAFIglAIQgMADgOAAIgIgBgADfgCQgOgHAAgJIABgGQACgEAFgCQgKgIgHgOQgFgHAAgHQAAgHAGgGIABgDIgBgDQgCgGAAgFQAAgLAJgGQgJAGAAALQAAAFACAGIABADIgBADQgGAGAAAHQAAAHAFAHQAHAOAKAIQgFACgCAEIgBAGQAAAJAOAHgAE2g3IAYAGIgYgGQgTgFgNgHQANAHATAFg");
	this.shape_1.setTransform(39.3,-8.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.9,-25.7,88.5,33.6);


(lib.Imirrorpointstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AgvBEQAKgLABANQABAJAHAFQAHAGAJABQAJACAGACQAIACAHACQAIACAJACQAHACAIACQAJACAJADQAJADAJABQAJACAIABQAKABAKABQAKAAAHABQAHABBhgFIgghWQgEgCgegBQghgBgJgCQgJgDgJgCQgJgCgIgDQgIgEgJgDQgJgDgKgCQgJgBgFgDQAAAAgBAAQgEgHgEgIQgEgIgCgHQgDgJgDgIQgDgIgEgIQgEgJgHgIQgFgGgHgFQgHgFgIgEQgJgEgIgEQgJgDgIgDQgIgDgIgCQgKgCgKAAQgIAAgJAAQgJAAgJABQgJACgIABQgJABgKABQgJABgKABQgJACgGAGQgHAFgFAGQgGAHgGAHQgGAHgHAHQgHAHgGAHQgCADgBABQAEAEAEAAQAFABAGAAQAHAAAFgDQADgCADgCQAFgDAFgDQAFgEAEgEQAEgDADgDQAEgDAEgBQAGgCAGgBQAIgCAHAAQAHAAAGgCQAGgCAFgBQACAAAFAAQgCACgCACQgGAHgHAHQgGAGgIAFQgJAFgCAIQgBAFACAEQAEAIAFAIQAEAHAAAIQAIgHAGgGQAHgIAHgGQAHgHAGgHQAFgEADgGAh3A+QACAFAFAFQAFAEAFAFQAHAFAIADQAJADAJgDQAJgDAHgHQAFgFAGgCQAAgBgBAAQgCgBgCgCQgDgEAAgGQgBgJgGgHAhyhUQAEgGADgGAiOgCQAAACAAAAQAAAEAAAFQAHAKAHAGQAIAHABAJQACAGgCAHQAAAEAAAEQABgCACgCQADgHACgHQACgIADgHQADgKADgJQAEgKAAgK");
	this.shape.setTransform(4.9,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("ACMB6IgRgBIgUgCIgRgDQgJgBgJgDIgSgFIgPgEIgRgEIgPgEIgPgEQgJgBgHgGQgHgFgBgJQgBgNgKALQgDgEAAgGQgBgJgGgHQAGAHABAJQAAAGADAEIAEADIABABQgGACgFAFQgHAHgJADQgJADgJgDQgIgDgHgFIgKgJQgFgFgBgFIACgEIAFgOIAFgPIAGgTQAEgKAAgKQAAAKgEAKIgGATIgFAPIgFAOIgCAEIgBgIQACgHgCgGQgBgJgIgHQgHgGgHgKIAAgJIAAgCIAOgNIAOgOIANgOIAIgKIgIAKIgNAOIgOAOIgOANQAAgIgEgHIgJgQQgCgEABgFQACgIAJgFQAIgFAGgGIANgOIAEgEIgHAAIgLADQgGACgHAAIgPACQgGABgGACQgEABgEADIgHAGIgJAIIgKAGIgGAEQgFADgHAAIgLgBQgEAAgEgEIADgEIANgOIANgOIAMgOIAMgLQAGgGAJgCIATgCIATgCIARgDQAJgBAJAAIARAAQAKAAAKACIAQAFIARAGIARAIIAPAJQAHAFAFAGQAHAIAEAJIAHAQIAGARIAGAPIAIAPIABAAQAFADAJABQAKACAJADIARAHIARAFIASAFQAJACAhABQAeABAEACIAgBWIhkAEIgEAAgAhyhUIAHgMIgHAMg");
	this.shape_1.setTransform(4.9,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.5,-13.3,50.9,26.6);


(lib.isentstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhgChQgGgGAAgKQAAgJAGgHQAHgGAJAAQAOAAAhgFQACgSAAgXIgBglIgCgkQAAgxAHhMIgdABIgdAAQgJAAgGgGQgHgGAAgKQAAgVAVgCQASgCAwAAQAqAABCAKQAUADAAAUQAAALgIAGQgGAFgJAAQgOAAgVgDIgkgEQgFA/AAA5IABAmIABAmQAAAUgCARIBGgBQAJAAAGAHQAGAGAAAKQAAAJgGAHQgGAGgJAAIglABIglABQgNAAgcAEQgdAEgPAAQgJAAgHgHg");
	this.shape.setTransform(0.2,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.4,-33.3,28.8,66.7);


(lib.ibubblestill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A000FF").s().p("AguBPQgDgEAAgEQAAgFADgDQADgDAEAAQAHAAARgDIABgUIgBgSIAAgSQAAgWACgmIgOABIgNAAQgFAAgEgDQgCgDAAgFQAAgKAKgBIAggBQATAAAhAFQAKABgBAKQAAAFgDADQgDADgFAAIgRgBIgSgDQgCAgAAAaIAAATIABASIgBATIAigBQAFAAADADQADADAAAFQAAAFgDADQgDADgFAAIgSAAIgSABIgTACIgWACQgEAAgDgDg");
	this.shape.setTransform(-0.4,-2.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1,1).p("ABADYQggABggAAQjXAAiahAQiZg/AAhaQAAhZCZhAQBtgtCLgNQAlgDAngCQAXAAAWAAQDZAACZA/QCZBAAABZQAABaiZA/Qg4AYhAAP");
	this.shape_1.setTransform(0,-4.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgUA0QgfgjgkgZQgEgDgBgFIABgKIABgFQADgGAGgFQAZgFAVAMQAHAFAGAFIAPAOIAMAMQAGgZARgTQAHgHAJgHIAQgLQAYgDAHAQIABAFIABAHQABARgOAKQgaAQgGAfIgEANQgGANgIAJQgJADgIAAQgSAAgPgRg");
	this.shape_2.setTransform(15.7,19.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ACVDZIgPgOQgHgGgHgEQgVgNgZAGQgGAFgDAGIgBAFQggACggAAQjXAAiZhAQiahAAAhYQAAhaCahAQBsgtCLgNQAlgEAngBIAtgBQDZAACYBAQCaBAAABaQAABYiaBAQg3AXhAAPIgCgFQgGgQgZADIgQALQgIAHgHAHQgSATgGAbIgNgOg");
	this.shape_3.setTransform(0,-3.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.8,-28,107.7,54.6);


(lib.HorizontalLine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("AXWAKMgurAAAIAAgTMAurAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("A3VAJIAAgRMAurAAAIAAARg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.5,-2,301,4);


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


(lib.canwinstillcan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AA1BrIgGgwQgDgaAAgXIABgSIAAgVQAAgwgRAAQgZAAgUAdQgUAbgLAnIgCAVIgCAWIACATIABAUQgBAKgFAGQgHAGgJAAQgKAAgFgGQgHgGABgKIgBgUIgCgTQAAgXADgmQADgoAAgXIgBgVIgBgVQABgJAGgGQAGgGAKAAQATAAACAcIABAaQAlgxAlAAQAjAAAOAfQAJAUABApIAAAWIAAATQAAASAFAdQAEAdAAASQABAJgHAGQgGAGgJAAQgUAAgCgUg");
	this.shape.setTransform(23.7,7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABGBwQgKgJgFgHQgVALgQAGQgQAGgJAAQgzAAgYgdQgWgcAAg4QAAgzAlgmQAkgmAxABQATgBAYALQAeAMAAARQAAAGgFAEQgCAJgBATIgCAvQAAAbAEAQQACAKAMAdIAFALIABAFQAAAIgGAGQgGAFgIABQgEAAgLgKgAgkg2QgZAcAAAiQAAAlANARQANATAZgBQATAAAPgIQAIgDAOgNQgHg4AAgdIACgUIADgZIgOgGIgJgCQggAAgZAcg");
	this.shape_1.setTransform(-0.1,7.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag+BgQgggdAAgvQAAgqAegwQAhg0AoAAQAVAAAaAKQAiANAAASQAAAJgGAGQgEAHgJAAQgGAAgFgEIgJgIQgNgKgdAAQgVAAgWAoQgUAlAAAYQAAAdAUARQATAQAaAAQANAAAPgHIAagOQAGgDADAAQAIAAAHAGQAFAHAAAIQAAAQghAPQgeANgUAAQgqAAgfgbg");
	this.shape_2.setTransform(-23,7.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.9,-33.3,73.8,66.7);


(lib.canwinstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgSATQgIgIAAgLQAAgKAIgIQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIQgIAIgLAAQgKAAgIgIg");
	this.shape.setTransform(33.7,17.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AA1BrIgGgwQgDgaAAgXIABgSIAAgVQAAgwgRAAQgZAAgUAdQgUAbgLAnIgDAVIgBAWIABATIABAUQAAAKgFAGQgHAGgJAAQgJAAgHgGQgFgGAAgKIgBgUIgDgTQAAgXAEgmQADgoAAgXIAAgVIgBgVQAAgJAGgGQAGgGAJAAQAVAAACAcIAAAaQAlgxAlAAQAjAAAOAfQAKAUABApIAAAWIgBATQAAASAFAdQAEAdABASQAAAJgHAGQgGAGgKAAQgTAAgCgUg");
	this.shape_1.setTransform(16.8,7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgUCeQgGgFAAgLIgBgnIgBgnQAAgVACgfQACgcAAgWQAAgJAHgHQAGgFAJAAQAHAAAHAFQAGAHAAAJQAAAWgDAcQgCAfAAAVIABAnIABAnQAAALgGAFQgGAHgIAAQgJAAgGgHgAgNh4QgIgIAAgKQAAgLAIgHQAIgIAIAAQALAAAHAIQAIAHAAALQAAAKgIAIQgHAHgLABQgIgBgIgHg");
	this.shape_2.setTransform(-1.4,1.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AANA/QgEgTgFggIgFgvIgSAoIghBaQgDAJgGAEQgGANgPAAQgQABgQhCQgIgigIg5IgFggQgDgUAAgOQAAgJAHgGQAGgGAJAAQARAAAEASQADANABATIAEAhIANBgQAYhBAahZQAHgYARAAQARAAAGAbQAGAaAIA1QAJA2AHAfIAQg8IAch2QAEgNAPAAQAJAAAHAGQAHAGAAAJIgCAKQgRBIgcBYQgGAUgOAVQgIAMgNAAQgYgBgOg7g");
	this.shape_3.setTransform(-23.4,7.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.1,-33.3,82.3,66.7);


(lib.beachbannerstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAHAiQgDgCgBgHQgLAMgLAAQgGAAgEgEQgFgDAAgHQAAgIAIgHQAHgHAWgJIAAgHIgBgLIgCgDIgFgBQgGAAgCACQgBAAAAAAQAAABgBAAQAAABAAAAQAAABAAAAIACAEQADADAAADQAAAEgDADQgDACgFAAQgEAAgEgDQgDgCAAgFQAAgFAEgFQAEgFAIgDQAIgCAIAAQAJAAAGAEQAHAEACAGQABACAAAMIAAAaIAAAHIABACIACAAQACAAACgDIADACQgEAGgFACQgEADgFAAQgGAAgEgDgAgJAHQgDAEAAAFQAAAEACADQACABAEAAQAEAAADgEIAAgWQgIADgEAGg");
	this.shape.setTransform(35.1,11.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAIAqQgFAHgDADQgEACgFAAQgOAAgJgNQgGgKAAgOQAAgMAEgIQAEgJAHgFQAHgEAIAAQAFAAADACQADACAFAFIAAgWIgBgKQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAIgFgBIAAgDIAfgBIAABSIABAKQAAABAAABQAAAAAAABQABAAAAABQAAAAABAAQACACAEAAIAAACIgfAHgAgJgMQgDACgBAGQgCAEAAANQAAAOACAGQACAHADADQACACADAAQAFAAAGgLIAAglQgGgLgGAAQgDAAgCACg");
	this.shape_1.setTransform(26.6,10);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgYAbQgJgMAAgPQABgOAIgLQAJgMAPAAQAIAAAJAEQAIAFAEAJQAFAKAAAJQAAAOgIAMQgJAMgRAAQgPAAgJgLgAgFgcQgDACgBAKIgBAWIABAPQABAGADADQADADACAAQADAAACgCQADgDABgEQACgIAAgVQAAgNgCgFQgBgEgDgDQgCgBgDgBQgDAAgCAEg");
	this.shape_2.setTransform(18,11.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgaAyIAEAAQAEAAADgCQABAAAAAAQAAgBABAAQAAgBAAAAQABgBAAgBQABgBAAgIIAAhQIgIAAQgLAAgFAFQgGAGgDAMIgCAAIAAgdIBdgBIAAAdIgDAAQgDgKgCgEQgDgFgGgCQgDgCgHAAIgIABIABBQQAAAIABACQAAAAAAABQAAAAABABQAAAAABAAQAAABABAAQADABAEAAIADAAIAAADIg1ABg");
	this.shape_3.setTransform(10.1,9.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAIAqQgFAHgDADQgEACgFAAQgOAAgJgNQgGgKAAgOQAAgMAEgIQAEgJAHgFQAHgEAIAAQAFAAADACQADACAFAFIAAgWIgBgKQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAgBgBIgFgBIAAgDIAfgBIAABSIABAKQAAABAAABQAAAAABABQAAAAAAABQAAAAABAAQACACAEAAIAAACIgfAHgAgJgMQgDACgBAGQgCAEAAANQAAAOACAGQACAHADADQACACADAAQAFAAAGgLIAAglQgGgLgGAAQgDAAgCACg");
	this.shape_4.setTransform(36.7,-9.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AACAiQAEAAACgDQABgCABgIIAAgfIgBgKIgCgFIgFgBQgEAAgGAKIAAAlQAAAJACACQACACAEAAIAAADIgmAAIAAgDQAFAAACgDQABgBAAgJIAAgnQAAgJgBgCQgCgCgFAAIAAgDIAeAAIAAAJQAGgFADgEQAFgCAFAAQAIAAAEAEQAGADABAGQABAEAAANIAAAbQAAAIACACQABACAFAAIAAADIglABg");
	this.shape_5.setTransform(27.7,-8.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAHAjQgDgDgBgGQgLAMgLgBQgGAAgEgDQgFgFAAgGQAAgIAIgHQAHgGAWgJIAAgIIgBgKIgCgEIgFgCQgGAAgCADQgBAAAAAAQAAABgBAAQAAABAAAAQAAAAAAABIACAEQADADAAADQAAAEgDADQgDADgFgBQgEAAgEgCQgDgDAAgFQAAgFAEgFQAEgFAIgDQAIgCAIAAQAJgBAGAFQAHAEACAFQABADAAANIAAAZIAAAHIABACIACAAQACAAACgDIADACQgEAGgFADQgEACgFAAQgGAAgEgCgAgJAIQgDAEAAAEQAAADACADQACADAEAAQAEAAADgFIAAgXQgIAEgEAHg");
	this.shape_6.setTransform(19.5,-8.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgvA1IAAgDIAKgBQACgCABgCQABgCAAgJIAAhDQAAgIgBgCQAAgBgBgBQAAAAAAgBQgBAAAAAAQgBgBAAAAQgEgBgHAAIAAgDIAxAAQATgBAHAEQAHADAFAGQAEAHAAAHQAAAIgFAGQgGAGgOADQAPACAHAFQAJAHgBALQAAAMgJAIQgMAJgXABgAgIAjIAAADQAAAFACACQACACAEAAQAFAAAFgDQAFgDADgFQADgGAAgGQAAgIgDgFQgEgGgGgCQgGgCgKAAgAgIgDQAJAAAGgDQAFgCADgFQACgFAAgHQAAgHgDgEQgCgFgFgCQgGgCgJAAg");
	this.shape_7.setTransform(9.8,-9.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AACAyQAEgBACgDQABgBAAgJIAAggIAAgJIgDgEIgEgBQgCAAgCACQgDACgDAFIAAAlQAAAJABABQACADAEABIAAACIglAAIAAgCQAFgBACgDQABgBAAgJIAAhIQAAgIgCgCQgBgCgFAAIAAgEIAdAAIABArQAFgHADgCQAFgDAGABQAHgBAFAEQAFADACAGQABAFAAAKIAAAdQAAAIACACQABADAFAAIAAADIglAAg");
	this.shape_8.setTransform(-3.8,-9.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgUAbQgJgLAAgQQAAgMAIgMQAJgNAPAAQALAAAHAFQAHAGAAAHQAAAEgDAEQgCACgFAAQgEAAgDgDQgDgDgBgIQgBgFgBgCIgFgCQgCABgCAEQgEAFAAANQAAAJADAIQADAKAEAFQAEADAGAAQAEAAAEgCQADgCAFgFIACACQgFAJgIAGQgHAEgJAAQgNAAgIgLg");
	this.shape_9.setTransform(-11.7,-8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAHAiQgDgCgBgHQgLAMgLABQgGAAgEgFQgFgEAAgGQAAgIAIgHQAHgHAWgIIAAgIIgBgKIgCgEIgFgCQgGAAgCACQgBABAAAAQAAABgBAAQAAABAAAAQAAAAAAABIACAEQADADAAAEQAAADgDADQgDACgFABQgEAAgEgEQgDgDAAgDQAAgGAEgFQAEgFAIgDQAIgDAIAAQAJAAAGAFQAHAEACAGQABADAAAMIAAAaIAAAGIABACIACAAQACAAACgDIADACQgEAGgFACQgEAEgFAAQgGAAgEgEgAgJAHQgDAFAAAEQAAADACADQACACAEAAQAEABADgFIAAgXQgIAEgEAGg");
	this.shape_10.setTransform(-19.1,-8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgWAaQgHgKAAgPQAAgRAKgKQAJgLALAAQAMAAAJAJQAHAJABASIgmAAQABANAHAIQADAHAIAAQAEAAAEgEQAEgCAEgHIADACQgGAMgHAFQgHAFgKAAQgOAAgIgMgAgDgcQgFAHAAAMIAAADIATAAQAAgNgCgEQgBgFgCgDQgCgBgEAAQgBAAgCAEg");
	this.shape_11.setTransform(-26.8,-7.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgvA1IAAgDIAKgBQADgCAAgCQABgCAAgJIAAhDQAAgIgBgCQAAgBgBgBQAAAAAAgBQgBAAAAAAQgBgBAAAAQgDgBgHAAIAAgDIAwAAQASgBAIAEQAHADAFAGQAEAHAAAHQAAAIgFAGQgGAGgOADQAQACAGAFQAJAHAAALQAAAMgKAIQgMAJgWABgAgIAjIAAADQAAAFACACQACACAEAAQAFAAAFgDQAFgDADgFQADgGAAgGQAAgIgEgFQgDgGgGgCQgGgCgKAAgAgIgDQAJAAAGgDQAFgCADgFQACgFAAgHQAAgHgDgEQgDgFgEgCQgGgCgKAAg");
	this.shape_12.setTransform(-35.9,-9.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49,-20.8,98,41.7);


(lib.texti = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_114 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(114).call(this.frame_114).wait(1));

	// vert 1
	this.instance = new lib.VertLine("synched",0);
	this.instance.setTransform(-66.6,156.1,0.8,0.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({_off:false},0).to({alpha:1},5).wait(51));

	// horz
	this.instance_1 = new lib.HorizontalLine("synched",0);
	this.instance_1.setTransform(0.1,163.9,0.8,1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({_off:false},0).to({alpha:1},5).wait(51));

	// win
	this.instance_2 = new lib.canwinstill();
	this.instance_2.setTransform(55.4,146.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.instance_3 = new lib.pronounwinIcanwin();
	this.instance_3.setTransform(62.1,140.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(35).to({_off:false},0).to({alpha:1},6).wait(13).to({y:162.9,alpha:0},0).to({_off:true},25).wait(36));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(79).to({_off:false},0).to({alpha:1},5).wait(10).to({alpha:0},0).to({alpha:1},6).wait(15));

	// can
	this.instance_4 = new lib.canwinstillcan();
	this.instance_4.setTransform(-29.7,147.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(29).to({_off:false},0).to({alpha:1},6).wait(19).to({y:164.1,alpha:0},0).wait(20).to({x:-27.7,y:141.1},0).to({alpha:1},5).wait(15).to({alpha:0},0).to({alpha:1},6).wait(15));

	// i
	this.instance_5 = new lib.isentstill();
	this.instance_5.setTransform(0,159.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:2.59,scaleY:2.59,x:2,y:160},9).to({scaleX:1,scaleY:1,x:0,y:159},5).to({x:-90.4,y:146},8).wait(32).to({y:168,alpha:0},0).wait(15).to({y:141},0).to({alpha:1},5).wait(20).to({alpha:0},0).to({alpha:1},6).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.4,125.9,28.8,66.7);


(lib.Ipointingred = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_11 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(11).call(this.frame_11).wait(1));

	// Layer 1
	this.instance = new lib.Ipointingredstill();
	this.instance.setTransform(-64,-21.2,0.999,0.999,57.7,0,0,-30.7,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:9.9,rotation:12.7,x:-73.1,y:4},11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.3,-17.2,73,90.1);


(lib.Imirrorpoint = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_11 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(11).call(this.frame_11).wait(1));

	// Layer 1
	this.instance = new lib.Imirrorpointstill();
	this.instance.setTransform(21.3,13.1,0.998,0.998,-56.6,0,0,18.7,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:18.8,scaleX:1,scaleY:1,rotation:5.7,x:22,y:5.2},11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.9,-6.4,47.5,54.4);


(lib.ibubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// Layer 1
	this.instance = new lib.ibubblestill();
	this.instance.setTransform(0,0,0.151,0.151);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({scaleX:1,scaleY:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.1,-4.2,16.3,8.3);


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


(lib.beachbanner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.beachbannerstill();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49,-20.8,98,41.7);


(lib.I = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Ipointingred();
	this.instance.setTransform(-73.4,-3.3);

	this.instance_1 = new lib.Imirrorpoint();
	this.instance_1.setTransform(-140.4,-8.6);

	this.instance_2 = new lib.beachbanner();
	this.instance_2.setTransform(120.2,-65.9);

	this.instance_3 = new lib.ibubble();
	this.instance_3.setTransform(-96.1,-126.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AUVxQQgCAFAAAGQgBAOAEAOQADAFAAAEQgBAAAAgBQgBgEgBgEAUZwgQAAADgBACQgDAQgLAPQgIALgGgJQgBgCgBgEQgHgTAEgTQAEgTAGgRQAFgGAEgCQgMAEgRAAQj8A/j8gXQgCAAgCAAQgRADgRAEQgHABgFAEQgHAFgDAHQAAACgBABQAAABAAAAQgDATABAUQABAFABAFQgEACgBADQgEAHgHAHQgOANgDgQQgBgDAAgDQgBgPAEgRQAFgVALgQQAAgBAAgBQgJgCgKgBImSgYQgNAHgHAOQgEAHgCAHQgEAJgBAKQgDAPABAOIAmgBAT8v6IgGAAQkUguj6BjQAIgEAEgGAUKxSQAFgDAGAFAVMwGQgMAAgNgDQgTgDgHgUAdNycQkfA9kNgFQgKAIgCAMAbdrYQgFAAgEgCQgKgGgKABQgQABgQAFQgRAHgTgCQgTgCgPgMQgQgMgSgMQgMAHgNAIQgQAKgTADQgVAEgVgIQgYgIAEgZQABgJgJgCQgOgDgOAFQgQAGgQAHQgPAHgQADQgWAFgWACQgVABgUgFQgXgEgTgPQgNgKgOAKQgQAKgSAFQgUAFgVgDQgLgCgIgGQgKgJgKAEQgQAGgOAKQgPAJgPAJQgPAJgRAEQgPADgQACQgZAEgWgJQgDgBgBgEQgDgVARgUQATgJAEgQQAEgSAPgNQAMgKAPgFQARgFASgCQAYgDAWAJQAGADAEgGQAHgNAPgGQASgHATgBQAWgCAUAIQAJAEAJAAQAGAAAFgFQALgJAOgCQASgEATABQASAAASACQAbAEAWAKQAQAHALgTQAIgPAPgIQAQgJASgFQAQgFAQACQASACAQAHQASAIASAHQASAHASgJQARgJARgIQATgKAWABQAHABAEAEQAKAJARAFQAVAGASgGIgDinIgBgoAa7x5QgCACgDACQAKAFAKACQACAAABAAQADABAEAAIAAAAQAKAAALgDQANgCANgDAbLxnQAEAGAGADIAAAAQACABABAAQAGADAHAAQAVABARABAVMwGQAGAAAHgBQAAgBABAAQACgBACgBQCthKDMApIBhgJIADgPQgGgKgEgMQgFgRAHgSQAHgQANgMQADgCADgCIAKgBIAIgBQADABACADQgJgMgOAKAVMwGIAOgCAEFwFQAQAEATgCQARgCARAEQAWAFgQAHQgDACgEABQgSADgSABQgTABAAALAEDuhQgMgHgIgMQgJgPgCgSQAAgEgBgFIoGAQIAAAQIAGCJIKGgsQAAAAAAAAQAAgBAAgBQgBgSgCgSQgDgSgIgRIBggKAEDuhQADACAEABQAAgCAAgCgAEKuiQAAgDABgCQAEgIACgHAIWtoQgDgCgCgCAG7u8QAAAEAAAEQAAALgFAKQAAACAAACQgBAEAAADQgCATgCAUQgBARgBARQAAABAAAAQAAABAAAAQgBAPgBAOQgBAOgBANQAAAHgBAGQAAAJgBAIQgCAPgCAPQgDARgCASQgCATgBATQgBASgBASQAEAOgCAPAGiuWQgFATgCATQAAALgCAKQgBALAAALQgBATAAATQAAAFAAAFQADAEAAAFQgBACAAAFQgCgIAAgIAF5uTQAAAKAAAJQAAALABAKQAAAKABALQABATADATQABAJABAKQADAEgBAFQAAAEgCAEQAAgIAAgJAFtqMQABgDAAgEQABgQADgRQACgRABgSQAAgSgBgTQAAgHgBgHQAAgJgBgIQgBgCAAgBQgBgHgBgJQgCgKgBgKQgDgPAAgQAGvtJQAPABANAHQASAIAMAQQAKAOAKAPQAMAPAJAQQADAFABAGQgCgSADgTQACgRADgRAFbuqIhRAIAK5wOQgFgJgLADALSu/QACAAACgBQABAAABAAQACADABADQADAGAEAGQgLgIgFgJQgBgBAAgCQACAAAEABQABABAAAAAK4vZQAEAOAKAHQAFAFAHAAALiuuQAAABAAAAQAFAEAAAEQACAGADAGQAGAOACARQACALAAALQABAIAAAHQgCgCgBgDQgIgRgRgJQgQgJgRgIQgMgFgNgEQgUgIgWgEQgOgCgMgDQgBAAAAgBQgIgBgHgDQAIADAHAFQASANARAPQAMALAJAOQALARAHAUQAFANgBANQgCAQgGAIQgGgNgJgMQgLgPgRgGQgTgIgTgGQgQgGgQgHQgPgGgMgJQADATACATQABAOAAALQAAgCAAgCQACgHACgHAKXvJQgKgEgIAEIjKAVAKXvJQADABAEACALnulIgBAAQgCgEgCgFALovFQgHADgJACAJRp4IB8A+AJnkEICpgtAbepiI0Sg5IgLAAQgBgCgCgCQgDgDgEgEQgCgCgDgCAG0kHQABAAAAgEQABgEADgJQAHgRAFgSQAFgRAGgRQAFgQAFgRQAFgQAHgRQAHgQADgRQAEgRACgSQABgRAAgSQABgTgDgUQgDgTgGgRQgGgRgIgPQgJgPgJgOQgFgHgGgGAGrl9QgBABgBAAQgGAEgHABQgKADgJABQgKABgKAAQgEgBgEAAQgQgEABgTQAAgGABgFQAAgOACgOQACgSABgSQABgTABgUQAAgBAAgBQAAgSABgSQAAgRAAgRQgBgUABgSQAAADAAAEQAAgEABgDQAAgEABgDQADgNABgNIAAgBQgQgEgPABQgTACgUADQgRABgSAAQgPAAgPgDAGbpiQgBgHgBgIQgDgMgBgMAGbpoQAAABAAAAIAAAFQABAMABALQAAADgBACQgDASgBASQgBATACATQACAQADARQAAABAAACQAEASADASQADASAEASQADAKgEAJQAAABgBABQAAABAAAAQAAAAgBAAQAAABAAABQAAgBABAAQACAKAAALQAAACABACQAAAHAAAIQABARABAQQABANACAMQAAADABACQAAAEAAADQABACAAACQABAIAAAHQAAADAAADQAFAKgBAGQALgKAPgDQASgEARAKQAPAKAMAOQALANAMAKQgFADgFAEAALqtQAFgJAIgJQANgPAOgNQAOgMAQgFQAUgHAUAFQARAFANAMQAMANADARQgPgHgVgFQgUgEgVADQgXAEgMATQgKAOgDAPQgBAEgBADQACAAACgBQAOgFAQgGQABgBACAAQAegKAfAIQAjAJADAhQACANgDAKQgBgEgMgBQABADAAADQABAUgDASIAAAAQgDAPAAAPQAAAEAAADQAAANgDANQgBAHgBAHQgDASgOAOQgDADgBADQAEgBAEAAQASgBAOAMQAPAMADASQABABAAACQADAUgQAPQgNAMgSAIQgRAGgSAEQgSAEgRgBIgBAAQgEASgKAPQgKAPgQAKQgPAKgSAFQgPAFgQAJQgJAEgJAGQgOAKgQAEQgSADgRADQgFABgFAAQAAAAgBAAQABgBACgDQgBACgBACQgBAFAAAHQAAAQACARIAAAAQAAADAAADQACATACATQAAAEAAAEQAQACASgBQAEAAADgBQALgDAJgKQAPgPASgNQAHgFAHgEIhkgDAChpkQAAAAAAAAQgDgNgOgIQgQgJgRgFQgPgEgRgBQgSgCgOAFACdoaQAHgSAPgLQAPgLASgFQATgFAUgCQAVgBAPAOQAOAOAIASQAHARgCASQgBARgHARQgDgSgMgOQgLgMgOgHQAKARAEAWQAEAUgHASQgIgHgIgNQACAHAFAPQAAABABAAQAAAEACADQAEAOgFANQAAAAgBABQAAABgBACIABAAIBDADADmmbQADgLgBgMQADAGACAKQABADABAFQADARgCASQAEgEAFgEQAMgLAHgPACImfQADACADACQAIAGgBAEADPmcQAFAPABAOQAJgGAFgLQACgFABgGIAJABADNmeQgCgDAAgDQgBgDAAgEQACAGACAHQABABAAABQAAAAAAAAQgFAFAAAEQgDgDgDgCQgDgCgDgCADPmcIAAAAADPmcQgBgBgBgBQABAAAAAAADBmdIAOABADPmcQAAAAAAAAAGFnzQAAAJgBAPQAAAAAAABQgBAGAAAGQgCASgGAQQgCAFgCAFAGOnZQAFAPAAASQgBALgBAMQgBACAAADQAAABAAABQAAACgBABQABgCAAgDAGtlgQgCAFgFADQgMAHgNABQgBAAAAAAQgDAAgDgBQgVgCgHgHQAAACAAACQAAASgCAVQgCASgCASQgBAQgBAPQgBAJAAALQACAOgCAIQAAgFAAgEQAAgHAAgGAGOk5QgDAQgCARQgBAQAHAOQABAEACADAG3jhQgCACgCACQADALAFAHQAGAHAIAEQARAHAIAQQAFAJACAJQgFgHgGgGAG1jyQABAJABAIQABgBABAAQgBABgBACQAAgBAAgBAFuimQAAgBAAAAQgBgBAAgBQgEgJAEgHQAEgGAKgFQAOgIAPgCQAEAAAEAAQAQgCAIAIQAEADACAEAFuimIAAAAQgHgCgHABQgDAAgCABQgGABgGACQgKAEgFAIQgBACAAABQgDAHABAIQACATgOAMQAFAHAKAFQAVAIAVgaQADADAEAEQAFAGgBAFQgCAGgHAHQgPANgDATQgCAQALAKQADADAFACQAAgBABgBQAAAAAAAAIAAAAQABgFABgCAFuimQACACACADQAFADAGACQARAGANAOQAJAJAEAMQgFgEgEgDAGshXQADgEAEgCQAKgDAOAJQATgHANgJQAbAEAJgTQAFgLgDgJAG4AVQAAgBABAAQAJgMAMgKQAPgOATgHQARgGAQgIQANgHAKgKQAMgLANgDQASgEAMgRQAMgQgFgUQgDgLABgKQgBgJACgJQgFADgEADAG4AUQABgCABgBQAHgMAJgKQAIgNAJgNAFqhsQgMgJgOgEAFjgTQgMAPgGAQQgFARgKAQQgIANgHAOQgJAPgJAPQgKAPgHAQQgBADgBADQgGAOgFAQQgFARgHAQQgHARgJAQQgGANgHAMQABAAAAAAIgCAFQgEAMgEAMQgFAPgFAOQgEAKgEAKQgFAOgIALQgFgNgEgOQgEgTgGgSQgFgRgBgRQAAABAAABQgDgTgFgTQgFgSgEgSQgEgSgEgSQgBgHgCgHQgCgMgCgNQgEgSgBgSQgCgSgDgRQgDgSgCgTQgBgQAAgSQABgLgCgJQgCgJgDgIQAAgCAAgCQgBgTAAgSQgBgTgEgSQgEgRgLgOQgCgCgDgCIAFAAIDjAHAEQCLIgCAAAG4AVQAAgBAAAAIAAAAQgBACgBACQABgCABgBQgDAQgDARQgCAIgBAIIAAAAQgBAMABALQABAUAAAUQABATADAUQACASABATQABAPABANQAAACAAABQgCAAgBgBQABgBACgBQAEgCAFgBQAVgGAVgEQAJgBAJgBQAKgBAJACQAMADAJAKQACAEADAEQABADACADQADgFAFgDQARgNAUgFQARgFAQgEQAEgBAEgBQAGgBAGACQATAIASALQAGADAGAFQADADABADQAMgZAagNQATgKAVgEQAKgCAKADQAWAFAPAQQAFAGADAGQAMgOAPgKQAPgJARgFQARgFAPAHQAPAGALAMQAKALAJALQACADACACAG4AUQgIADgHAGQgGAGgEAJQgJASgJASQgBACAAABQgIAQgJAQQgFAIgEAJQgBABgBACQgDAGgCAGQgIATgFATQgCAGgBAGQgDANgCAOQAAACAAACQgBADAAADQgCAMgDAMQgEATgFASQgFASgIAQQgHAQgHAQQgFAJgEAKQgEAHgDAGQgJARgHARQgCAEgBAFQgCAGgBAHQABgCACgBQACgGgCgEQgBgCgBgBAFwCHQgEAfgCAVQgEAfAAAHQAAADAAADQAAABAAAAQAAADAAACQAAAKABAKQAAAIAAAJQABASAAASQAAATAEATQABADAAAEQACAMgBAMQAAACAAACQAAABABADQACgEACgDQAGgNAEgNIAAAAQAAgBAAgCQAHgXgDgXQgCgYgLgZQgFgMgEgMAGTDjQAAAGABAGQAAABAAABQAAAIAAAJQAAAOAAANQABAKAAAKQAAAFAAAGQABACAAADQAAAAAAABQAAAJgBAJQAAAHAAAIQgBACAAACQACAGgBADQAAACgBAHQgBgJABgJAG5DwQABADAAADQAAAFABAGQAAANABAOQAAANAAAOQAAAGAAAFQAAAFAAAEIAAAAQAAAPACAOQADATABASQAAAGAAAGQgEgBgEgCQAAAAAAAAQgBAAAAAAQgEAKACALQABAAABAAQACABABAAQASAHgPARQgNAOgEATQgDALgBAMIAAAAQgBAGgBAHQgBAKgCALQgBAIgCAJQgDALgCAMQABgCACgBQAAAGgBAGIAAAAQAAAGAAAGQgCASAAASQAAAUgDATQgCATAAATQABATgEASQgDASgCAUQgBATABAUQABATAAATQAAAUABATQABASACASQgBAAgBAAQAAAAABABQACADAAAEQABAKAAAMQAAALABALQAAAFAEAEQAEAEAEAEQAEAEAEAFQgJAAgKAAQgHAAgHABAKxjFQADAJgIAJQgEAHgJgBQgSgCgSAEQgMACgKAFAKxjFQgDgGgIgHQgPgKgUABQgSABgTAFQgTAFgRAKQgKAGgIAGQACACACACQAOAMAPAJQAMAHAMAGQABABACABIAAAAQADABADABAIPkRIDHhZAIKprICgBdAG1j4QAEAEgEACAbZoaQgBgCgBgCQgDgFgDgEQALgEARgIQAEgBAEgCQANgGANgEQAJgDAJAAQAIAAAJACQALAEADAIQABACABACQAAACAAACQAAABAAABQABAGACAGQgQBsgFBqQgJCkARCjQAAAAAAABQAGBBALBDQgLACgKADQgDABgDABQgPAEgPAHQgOAHgPAFQAHALACAJQAGgDAHgCQARgIASgDQANgDALADQAEAAADACAPcDpQALgJAKgIQAOgNASgIQARgHATAAQASAAAQAJQAQAJAMAOQAIALAFAMQAEgDAFgFQALgLAPgGQANgFAMADQAWAGAWAIQAOAFALALQADAAADgDQAGgFAHgFQARgLAUgEQAUgEAUAFQAQADANAKQAHAFAKgJQAXgTAegEQAYgCAXAIQAMAFANAGQAEADAEADQACgDACgDQAFgGAHgFQALgJANgDQANgDALAFQAHAEAFAFQAJANASgLQAEgCAFAAQASAAAQAHQAJAFAJAFQAGADABAEQAEAMgMAEQgJAEgKACQgLABgMgDQgWgIgXgHQgLgEgHAIQgFAFgEAGQgFAHgFAGQgOAPgWACQgSAAgSAAQgVAAgSgKQgZgPgaARQgkAYgqgHQgHgBgIgCQgWgGgTgLQgBADgCAEQgCAHgHAEQgMAJgNAGQgKAEgKAAQgDAAgDAAQgDAAgDABQgQAEgPABIgBAAQAAAAAAAAAbWiNIwlg4AG2BHIUgAAIACBnQgDACgDACAdXydQgDABgCADQgCADABAEQABAEABADAdkyaQARAOACAUQADATgCATQgBAUgRAKAdHw2QgBAAgBgCQgGgFgEgGAdHw2IAfACQAAAAAAAAQgRAKgOgMgAc4w0IAPgCAcXsTQgCADgBAEQgCAHAAAIQAAAIACAKQAAADABADQAAADAAADQACAMABALQABAOAAAOQAAAOAAAOQAAADgBADAc4w0QgPCQAGCQQAEBiANBhIhSAEIgPABIgBgWIgBh2IAAgCIgDiqAb1o2QABAEAAAEAb1o2QgCgMgFgLAbZoaQADAJgEALIAAgPQAAAAAAgBQAAgCABgCgAdCotIADAOAbWiNQARhgAAheQABhegQhdAcWg5QAJAUAEAXQABAHAAAGIAAABQABAAAAAAQABALAAALQABARgCARQgBAOgDANQgBAFgCAFAcWg5QAAgDgBgEQgDgHAEAOgAcJgbQAFAIAEATQAEATgEATQgDAPgEAPAbzChQAAAAAAAAQgCABgBABQgNAEgLAHAcKDoQABASADASQADASADASQAAABABABQADAOAEAPQAGATACATQABgDAAgIQACgNABgOQABgRABgSQABgcgJgbQAFgFAEABQAHABAGABAb8C1QgIADgJAEQgQAGgMAMQAKAHAJATQAHAPAEAQQAFATAFASQABAGACAGQAAADABADQAAAAAAAAQgBAAgBABQgEABgEABQgSAEgUAAQgIAAgJAAQgLAAgLAAQgSAAgTABQgSABgSAFQgRAFgTACQgEAAgDAAIgBAAQgOABgPACQgSADgTACQgRACgRgGQgSgHgUAEQgTADgSADQgIABgJACQgJABgKACQgSADgSAHQgQAFgRAEQAEAAAFACQgDACgDABIgBAAQAAAAAAABQgHACgIACQgRAEgQAFQgSAFgTACQgNABgNABQgGAAgGAAQgQAAgPABQgQAAgQAAQgSAAgSgBQgSAAgTAAQgRAAgRAAQgSAAgRABQgRAAgRACQgRABgSABQgTACgUABQgTACgUAAQgPAAgPABQgSABgSABQgPABgQADQgPACgPABQgRABgQACQgSADgRAFQgTAFgTAHQgRAGgRAHQgTAGgSAIQgNAFgOAGQgPAGgPAGQgSAHgPALAdJCtQAAAXACAdQAAAJAAAJQAAAGAAAGQgBAOAAAPQAAAQgBARQgCAQgBARQgDAVgCAUQgCAPgCAOQgCATgBAUQAAABAAACQAAACAAACQAAADAAAEQgBANgBANQgCATgBATQAAASABASQAAAAAAABQABASgCARQgCAUAAATQAAATABATQABARABASQABAUACATQABATAFARQACAKABAIQAAAIAAAHQACAJADAJQAKAYgXAFQgTAEgRgFQgBgBgBAAQgNgEgJgIQgEgEgEgDQgIgKgDgMQgBgDAAgCQgBgEABgDAbfpMIgJAAAbWBHQAFgzABgvQAAg6gGg4AbrE4QAFgBAHACQABABABACQABAAAAABQABAAAAABQACAKABALQABAJAAAJQgMgPgVgCQgSgBgSABQgTACgQAKQgOAJgMAJQgDACgEgDQgPgJgRgGQgSgGgUAAQgYgBgHAPQgBAEgDABQgGAEgHACQAHAKgLgBQgWgBgWgCQgYgCgYABQgfABgOAWQgCAEgFACQgGACgHAAQgZACgYAFQgMADgJAIQgFACgDABQgGgBgGAAQgKgBgJgCQgLgCgLgCQgcgEgVgBQAFADACAEQACAFgBAFQgFASgYAAQgSAAgSgBQgTgBgTgBQgTgBgTgBQgRgCgQgBQgRgBgRAAQgRABgSABQgSAAgRAFQgSAEgUAFQgSAEgSABQgTACgSACQgTACgUAAQgTAAgSgBQgSgBgRgCQgSgCgRAGQgSAGgRAGQgQAHgQAFQgSAGgSgFQgTgFgTAEQgTAFgSAIQgRAIgQAJQgPAJgOAKAcBHRQABgEAAgFQABgMAAgOQABgLABgKAb/FlQABAKAAALQgBATAAAUQAAATAAATQAAABAAAAQAAAEAAAFIAAAAQABAFAAAEQABgEAAgFQAFAQAAAUQABAQAAARQABATAAAUQAAARgBAQQgBATgDATQgCATgCATQgCASgDASQgEASgDARQgEASgBARQgDAQgBARQAAACAAABQAGAAABgCAbqM8QAAgCAAgCAcUL9QAEAPgCAbQgBAPgGANQgDAFAEABAcTNuQAAACABACQACANgFAUAb6OWQALAAAMABQAIAAAHAAQAUABATACQAEAAACABQgCAOgEAQQgEAPgBAQQgCARABATQAAATABATQABASABASQAAATACAUQADASACASQACASAAATQABAQAAARQAAATABATQAAASADASQADASAIAQQAAABABACQABAAABAAQAEAQACARQADAQABARQABATAIASQAGALAEANQACAFACAGQABAEAAAGIChAAMAAAguzAb3OWQABACAAADQAAAPgCAWQgBARgCARQgBAQgBAQQgBATADASQADAWgBAWQAAATAAASQABAPABAQQABASABASQABASAAASQAAAPACAQQACASABASQgCAUACAOQgBARgCARQgBASgGATQgFASgIASQgIATAAAUQAFACABgBAcOOvQgEASADAUQACASABARQAAAPAAAPQgBAGABAHQABADABAEAddVDQADAAAAACIAAABAb/UiQABASABASQAAAEAAADQgBgEgBgFAc9XaQAAgIAAgDQAAgKAAgJQgCgSgBgTQAAgSAAgTQAAgLAAgLAdUVtQAAAFADAXQACAQADAPQADALAAALAc9XaIBFAAAGcXaIVKAAIBXAAAVKEtQAEASARAIQAKAEAEABASrE3IAAAAQAEgFAGgEQATgKALAIASIE0QALAEANACQAFAAAFAAQAAgBABgCQAFABAFAAQgDABgDABQgBAAgBAAIgBAAQAAAAgBAAQAAAAgBAAQAAABABAAQABAAABABIAAAAQAAAAABAAQAAAPAWAJQAIAEAIgBASIE0QASACARABAUZGrQgBAAAAABQgCABgDABQgBAAgBAAQgBAAgBABQACAAACgBQAGAAAFABQAKAAAJgEAQHExQAIACAIABQARADASgDQAEgBAEgBQAEgBAEgCQANgGANACQASABASAIAOFEyQAHABAGAAQARABAQgDQAGgBAGgBQAHgCAGgCQAFgCADgBQAWgCAQAGQAGADAHACQAdAAAeABAOFEyQgBARAMAMQAJAKALAFQARAIATACAMbE6QAFgDAEgDQAGgEAAgHQAGAGAIgCQASgEASAEQAUADAVACAMYE8QAEAbAXAQQAPALATAEAMYE8QABgBACgBAHCFLQARALATABQAVABAOgPQAQgRASAHQATAHATAAQARAAAQgFQALgDALgEQAHgCAGgCQASgHALgOQAHAKAKAJQAaAZAlgIQALgEALgFQgBgDAAgCQABAAADADAKMFEQAEATAMAQQALAOAQAHQAVAKAMgKQACgHABgEAGnDzQAAAHAAAIQAAAMAAALQABAMAAALQAAAEAAADQAAAPgDAOAFvGDQgEAKgDAKQgDAKACAHQALgLAPgHQAYgNAXAKQAFABAEACAG3GrQgRgFgQAGQgRAHgSAJQgQAIgMANQgGAIAAAKQABAUABATQABATABASQACASACASQAAABAAABQAAADAAACQABAPgDAPQgDATACASQABAMAAANQAAABAAABQAAAAAAABQAAADAAACQAAAGAAAHQgBAJAAALQAAAQgBARQgBASgBASQgCAUAAATQgBAPgBAPQAAAEAAAFQgCATABAUQABATADAUQADAVgOAOQgBAGgBAFQgBAOAGAFQAXACATgDQALgCAMAAAGDHeQAAADAAADQAAAaABAZQAAACABACQAAAMAAAMQABAOgBAOQAAABAAABQAAAMgDAMQgCgFgDgIAAxF6QAIAQAGAQQAGASAHASQAHASAHARQAHARAIAQQAJARAHARQAJAVAUABQAUAAAPgLQAPgLAOgNQAOgNAJgSQAGgLAFgLQAJgSAHgRQABgBAAAAAFuIBQABAMABAOQAAAFAAAFQAAARABARQAAAFAAAFQAAAFABAFQAAABAAAAIAAABQAAAEAAAEQABAQgCARQgCASgBASQgBAQgCARAGdJGQAAAEgBAFQAAACgBADQAAAFAAAEQgFgIgDgIQgFgPACgPQAAgKgDgKAEjF8IAtABAF4MXQABAEAAAEQACAcABAfQABAKAAALQABAKABAKQAAAEAAAEQAAAFAAAEQABAOgBANQgBAKAAALQAAABAAABQgBAHABAGAFlNqQABAEAAADQADAVACAVQABANABAMQAAAIAAAIQgCgIAAgBQgBgCADgFAGMQnQgBAAgBAAQgSgBgTABQgLAAgKgBQgBAAAAAAQgEAAgDAAAFfT8QAAgCAAgBQACgSACgRQACgTABgSQABgRABgSQABgSgDgSQgDgRgGgRQgHgRgGgRAGrQnQgPABgQgBQgBgVAAgUAGrQsQAAATgDATQgDATgDASQgDAUgDATQgCASgDASQAAAAAAABQgCAKgBALQgBAHAAAHQAAACAAACAGJTcQABAAABgFQACgLAAgLIAAAAQABgEAAgDQAAgMAAgNQAAgCAAgBQAAgGAAgEQAAgNADgHAGCS6QgBAIgBAIQABgFABgFQABgDgBgDgAGDRRQgJAIAEAXQACASACASQABATgBATAGdW7QAMgHgJgTQgHgRgDgSQgDgSgDgTQgDgSACgTQACgTAAgUQAAgSACgRQgGADgHACQgSAEgMALQgBABAAABQgCACgBADQgDAQACAUQABATABATQAAAUgEATQgDASgHARQgHASgHAUQAKADAMgBQATgDAUABQAKAAAKgDQACgBABAAQAAAKgBAJQAAACAAADQAAADAAAEAFxTUQgEAIgCAIQgBAEgBAEQgBAFgBAEQgBAEgBAEQAAABgBABQAAAAAAAAQAAADgBACIAAABQgCAEgBAFQgCgJABgJQAAAAAAAAArKtBIgBAAIyBimIgKgBA2prDQgGgFgJgBQgGgBgHgBQgGgCgHgCQgIgBgIgCQgKgCgKgBQgIgCgJACQgIAAgIAAQgIAAgIABQgJABgJAAQgJABgIACQgJACgJADQgJABgIAEQgIABgIADQgJADgHADQgJAFgDAJQgDAIgBACQAAgBAAAAQADgHgBgJQgCgJgGgHQgGgGgGgCQgJgCgJgEQgKgEgJgCQgJgDgJgCQgJgDgJAAQgFAAgDAAQgBAAAAAAQgEABgDABQgJABgIAFQgHAEgHAFQgBABgBABQgEADgDADQAGgCAFgCQABAAAAgBQAAAAABAAQANgEAQgDQAEAAACABQgDABgDABQgOADgMAIQgBABAAAAQgBAAAAAAQgQANgJASQgEAIAAAIQAIgIAOgKQgKAJgIAMQgBABgBABQgIAMABAQQACgDACgCIAAAAQAIgJANgHQgKAHgGANQAAACgBACQgEAKgBAMQAAAIAEAIQAAABABABQACgHACgHQADgIAFgJQAEgFACgCQgDAFgDAGQgGAIgCAKQgCAHAAAGQgBANAEAMQACgIADgFQADgFAFgFQAAACgCAFQgDAIgBAIQAAACgBACQAAAKACAKQAAgDABgCQABgCACgDQABgBABgCQABAEgBADQAAAAAAABQABAAAAABQACADgEABA41oHQgFABgEABQgHABgIADQgIABgIACQgKACgJgCQgKgBgJgDQgIgDgHgEQgIgFgHgHQgHgFgEgJQgGgIgEgIQgFgIgEgHQgEgJAAgKQgBgJABgJQABgJAFgIQAFgHAGgGQACgEADAAQACAAADACQACADAEABQAFABAEACA5Bn9QABgBAAAAQACgBACgCQAGgEAHgBQAKgCALAAQAAABAAgBQASABAQAIQAFACAEACQAJAEAFAIQAAABAAAAQgDgDgHAAQgKAAgHAHQgIAFgCAJQgDAJAAAJQABAKAGAIQAGAJAKABQAFABADgBQABAAAAAAQAAAAgBAAQgIAHgLABQgNAEgOgBQgJgBgIgDQgHgDgFgFQgTgTgGgaQgBgFADgFQADgFADgEQADgFAEgDQAAgBABgBQAAAAABAAIAAAAQACgBADgBA5Bn9QABgBACgDQAEgDAFgDQAEgBAEgCQALgDAKgDQAIgDAKAAQADAAADgBQgFgBgFAAQgKAAgJACQgJADgJAFQgDABgDADA5Bn9QgBABgBAAQgEAEgEAEQgHAIgGAJIAAAAQgEAGACAHQgCAAgCAAQgCACgDAAQgEAAgDAAQgSgBgRADQgSADgRAGQgIAEgHADQgSAIgRgCQgBAAgBAAQgCgBgCAAQgDAAgDgCQgFgDgFgCQgDgBgBAAQgKgCgKACQgGABgFACA4AoUQAHgBAFgCQAJgEAHgGQAHgEAHgFQAJgGAHgHQAGgGAGgFQAHgFAHgFQAHgFAHgHQAHgHAEgIQABgBAAgBQADgHADgHQADgIAAgJQAAgIgCgIQgBgHgCgFQgDgBABgCQgCgBACgBQACgDADgDQABgBABgBQAGgFAGgEQAKgFAKgBQANgBAMACQAPADANAHQALAGAKAIQAHAFAHAGQAFAEACAEQACgEABgDQADgGABgGQABgGgCgIQgBgFgCgFQgCgHgDgHQAEAEAFAEQAGAFADAAQABgGAAgFQgBgFgDgFQgCgDgCgDQgBAAAAAAQgBAAgBAAQAAAAgBAAQgGgEgHAAQgKAAgKAAQgJABgJABQgIACgJACQgJABgIAEQgHAEgHADQgGADgHAEQgGADgFACA4AoUQAEABAEABQAKACAIAGQAHAGAIAGQAHAHAEAJQADAJACAJQABAFAAAGQAAADAAAEQgBAHgDAGQAHgHAKgDQAIgDAJgCQAGgCADABQABABABABQACAIACADQADgBADAAQAKgBAKAEQAEACADACQADgBADAAQAKAAAKgCQAJgBAIgFQAIgEAFgGQADgCACgCQgLAAgGgJQgGgIgBgKQgBgKAFgJQAEgJAHgGQAHgGAKAAQAIAAAFAFQABABABABQABAAACACQABAIgDAJQgDAIgEAJQgEAIgFAGQgEAFgEAFA6sqYQAAAAABAAQAAgBAAgBQABgDgBgDQAAgCgDgDQAAgBgBgCQgCgBgBgCQgFgGgFgFQgGgGgIgEQgKgFgHgBA6sqYQAAAAgBgBQgBAAgBgBIAAgBQAAAAAAAAQgDgDgDgDQgCgCgCgCQgDgEgFgDQgGgDgGgCQgJgEgJgBQgIgBgJAAQgJABgJACQgKACgBAHA66qPQgHgBgJACQgHACgHACQgIACgHADQgJACgHAGQgHAHgGAHQgHAHgGAIA6sqYQAAABgBgBQAAABgBAAQgBAAAAAAQgBAAgCAAIAAAAQgEAAgEgBIAAAAQgBAAgBAAQgJgBgJgCQgIgBgHACQgJABgJADQgJACgHAFQgJAFgHAGA88pKQAAABAAAAQABACABABA8EooQABAIADAHQACAHACAGQAEAJAFAJQACAEACAFQACAEACADQAFAFAEAFQAGACADAFQgBgCgCAAQgDgDgDgCA8PolQAAAGAAAFQABAKABAIQABAJADAIQAEAIAEAHQAEAGAFAFQAGAHAIAFQAGADADABA8poaQAAACgBADQgCAGgEAFQgGAIADAJQADAIACAJQABAIAFAIQAEAHADAIQACAEABADQAAABABABQABgBABgBQgBAAgCAAQgHgBgFAGQgHAHgCAKQgBAIgCAHQgDAKgBAKQgCAJABAKQABAJACAKQACAJAEAIQADAIAHAFQAGAGAHAEQAJAGAKABQAJABAIgFQAIgFAHgFQAGgDAEgFQABgBABgCQAAAAABAAQAGgCAFAIQAEAIADAJQADAHADAIQADAKAGAHQAFAHAFAGQAFAHAFAHQAGAHAHAGQAHAHAIAFQAHAEAIAEQAIAEAIAEQAIAEAJACQAJAEAJABQAJADAKABQAFAAAFABQABAAABAAQADABAEAAQAIAAAIABQAKAAAJgBQAKAAAKgBQAKgBAJAAQAIgBAIAAQAIgBAIgCQAFgBAFgBQAEgBADgCQAIgCAHgDQAJgEAHgHQAHgGAHgEQAJgFAHgHQAIgGAHgHQAGgHAHgHQAHgGAGgIQAFgGADgHQAAgCABgBQABgCACgDQACgEACgFQADgIADgJQADgJABgJQACgIgBgJQAAgKAAgJQgBgJABgJQAAgJAAgJQAAgKgDgKQgCgIgDgHQgFAEgFAEQgHAFgIADQAAAAgBABQgJADgKAAQgJABgMgBQAAgBAAAAQgEgDgEgDA7opKQAAAGAAAFQABAEABAEQACAJADAIQAEAJAEAIQAEAGAEAGQAFAGAHAEQACABABACQAEgCABACQAAABABACQgCgCgEgBA7SpoQAAAEgBAMQgBAKABAJQABAKADAKQADAIADAJQAEAHADAJQABADADADQACADACABA72o9QgJgFAAALQAAAGABAGQAAAAAAABQADAIAEAGQAEAIAFAHQAFAHAFAGQAFAHAIAGQAHAFAIADA8KmRQgJABgEAHQgDAHgEAGQgEAHAAAHQAAABAAAAQABAKAFAHQADAFAGABA8MlyQgCgDgBgCQgEgKAFgIQABgDACgDQAAgBABgBA71lTQAAgFgDgEQgEgHgHgFQgGgFgDgFA7+mWQgHgCgFAHA8ZltQAEgKAJAFA3hnuQACADACADQAFALAAAMQABAHgDAHQgCAIgFAFQgDAFgFADA3PmxQgCAAgBAAQABgBACgBQAAABAAABQgDAEgEAFQgEAFgFACQgDADgEABQgJADgKADQgIACgKAAQgJAAgJgCQgJgBgIgEQgJgDgIgFQgHgEgFgIQgEgHgEgJQgEgJgBgKQAAgIAAgIA5+ljQAHAFAEAIQADAFAEADQAHAGAGAHQAGAHAHAHQAFAHAHAFQAHAFAIADQAIACAHACQAJADAJAAQAJAAAJABQAJABAKAAQAIgBAIAAQAIgBAIAAQAKAAAJgDQAJgCAJgDQAJgEAJgFQAIgEAIgFQAIgFAJgEQAIgFAHgGQAHgFABgGA5ol4QgEABgHAHQgGAHgFAGA6alVQACACAKgFQAIgDAGgHQABAAABgBA4rjCQAFAIAFAHQAFAIAEAJQAEAIACAJQABAJgBAIQgBAJgCAJQgCAKgHAGQgCACgDABQACACABADQADAEACAGQAFAJACAJQADAJACAJQABAJABAJQACAJAEAJQADAHAEAJQADAIAHAHQAGAGAHAFQAHAFAHAFQAHAGAJAEQAIAEAJACQAJACAJgBQAKgBAKgBQAJgBAJgDQAJgCAGgHQAHgHACgKQADgJABgKQABgJAAgIQAAgJAAgKQAAgKgCgJQgDgJgDgJQgDgIgEgIQgDgJgEgIQgDgIgCgJQgBgJABgKQgBABgBAAQgJADgJAEQgEADgEgCQgJgCgFgJQgFgJgCgJQgCgIABgJQACgKAAgJQAAgIACgJA4jhaQgFACgHABQgJAAgJABQgFAAgFgBQAFAEADAIQAEAJACAJQACAIAAAKQAAAKgBAKQgBAJgBAJQgBAIAAAJQgBAJAAAJQABAJABAJQABAJAAAKQAAADAAAEQAAAFAAAFQAAADACACA5LhXQgFgBgEgBQgIgCgHgEQgIgEgIgDQgJgEgJgBQgKgDgJADQgJABgJAEQgIAEgIAFQgHAEgGAFQgGAFgGAFQgHAHgFAIQgEAJgCAJQgDAHgCAIQgEAHgEAJQgEAIgCAIQgBABAAABQgGAFgDAKQgCAJgFAIQgEAIgGAHQgFAJgFAJQgEAIgEAJQgEAIgDAJQgCAJgCAKQgCAJgDAKQgCAJgCAKQgCAJgDAJQgDAJgDAIQgDAGgDAHIgCAEQAAABgBABIAAAEQgBACgBACQABgEABgEIAAy5A4jhaQAAgBAAAAQAAAAAAAAgA4ghWQAAAAgBgBQgBAAgBgDA9MDYQABAEgBACQgBAAAAAAIAAFpQAEgFAFgEQAHgHAGgHQAFgIAFgHQAGgIAFgJQADgGAGgEQACgCADgBQAAAAAAAAQADgIAEgIQAEgIADgJQADgHADgHQAEgHADgIQADgGACgHQADgHACgGQACgKAEgJQADgJADgIQADgKADgJQACgIADgJQABgCAAgCQABgCAAgCQAEgVAAgTQAAgCAAgBQAAAAAAgBQABgIACgJQABgIADgHQADgIADgHQADgIADgIQAEgHADgJQADgIADgIQAEgJAFgKQADgJAEgJQAEgIADgIQADgIADgIQADgHADgHQADgHADgIQAEgMAJgHQACAFADAHQADAIAEAJQADAHACAIQABAIADAIQADAKADAJQACAJABAJQABAIABAIQAAAAABABIgBAAQAAgBAAAAA58BbQgCgEgBgDA49BOQABABAAADQAAABAAACQABAEAAAEQAAACAAACQABAJgBAKQgBAHAAAHQgBAKgBALQgBALgGAKQgDAHgEAHQgEAFgEAGQgFAFgCADQADAHACAJQABAFABAFQABAGgCAGQgCAFgDAFQgEAGADAJQADAIABAIQACAKAAAKQAAAJgBAJQAAAHAAAIQAAAHABAHQABABgBAHQgBAJgDAJQgDAIgDAJQgCAJgDAIQgCAIgBAIQgCAIAAAIQgBAJAAAJQgBAJABAJQABAIABAIQABAIgBAJQgBAIgBAJQAAAHAAAHQABACAAADQgDAGgDAIQgDAJgEAJQgEAIgCAIQgDAJgCAIQgDAJgDAIQgDAHgCAIQgDAIgDAJQgDAIgDAIQgDAIgDAJQgDAIgEAIQgEAIgEAIQgDAIgDAIQgDAHgDAHQgDAGgCAGIHbg5IABAAA5UDnQABAEAAAEQACALAJADQAIADAJABQAIABAIAAQAJABAIABQAJACAJAAQAJABAJACQAJADAKACQAIABAIABQAIACAIACQAJABAIAAQAJAAAJAAQAJABAJABQAJAAAJABQAJABAJABQAJABAKAAQAJAAAJABQAJAAAKAAQAKAAAJAAQAKAAAJgBQAKgBAJgBQAIgBAHAAQAJgBAJgBQAKgBAJgBQAJgBAKgBQAKgBAIgDQADgCACAAQAAABAAABQACgCgBgBQADgBACgBQAAgBAAAAQAAgBAAgBQgBgJgCgJQgBgKgCgKQgBgJgCgJQgBgJgCgJQgCgJgDgKQgCgIgDgIQgDgJgEgIQgEgJgFgHQgGgIgDgJQgCgJgEgHQAAgBgBAAIAAAAQgDgGgEgGQgGgIgGgGQgCgCgBgBIAAAAQgGgFgGgFQgIgFgIgGQgHgFgHgGQgHgFgHgEQgIgFgHgFQgIgGgHgEQgHgFgGgGQgGgFgGgGQgHgGgFgIQgFgHgDgHQgCgFgCgEQgCgFgBgGQgDgIgCgIQgDgKgBgKQgCgMADgJQAJgBAHABQAKABAJADQAGACAFADQAHgBAGADQABAAAAAAQABABACABQADACADABQAEACAFABQAIACAJADQAJACAJABQAHADAIACQAJADAJABQAKADAJACQAJADAJADQAIADAJACQAIADAIAEQAJADAIAFQAIAFAJADQAJACAIAFQABAAAAAAQAEAAACABQACABACACQAGABAHADIAAAAIgUAWAwvx/ILvC6IAdAHA3zweIM1CcIAAAAIGbBOIAGgBIABA7QgGgDgIgCQgRgFgTACQgVADgNAMQAUgFAQAKQgaADgTAWQARgHARAIQgbAFgUARQgBABAAAAQgFAFgFAGQgKALgDAOQANgRAVgFQgZANgBAbQAbgRAfgGQAdgFAWASQAFAFAEAFQACAEABADQACADAAAEQAAAAAAAAQAAACAAABQAAAIgCAIQgDARgGASQAAAAAAAAQAAACgBABQABgBABgBQAHgQANgMQAKgKAKgJQAEgDAEgDQACgBACgCQALgIALgDQACgBACgBQgFAJACALQAEAaARAUQAZAdAiAMQgGgBgIABQgSACgQAGQgJACgIADQABABABABQgKAGgIAJQgIAJgGAJQgDAHgCAHAkjvOIgJjMAkcr6QALAFAJAHQAPALAOAOQAOANALAPQAFAIABAIQAOgKAPgHQASgIAUgEQARgDASgBQATgBASABQARACAQABQAVABAMANQAGAHAEAFQAAACgBABQgBADgBAEA0Tr9QgCgDgCgDQgBgBgBgBQgGgHgHgFQgIgGgJgCQgJgCgKAAQgJABgJABQgKADgJACQgIADgIAFQgIAFgHAFQgIAGgFAJQgFAHgDAIQgDAJAAAJQAAAFgCAFQAAADgBACQAAAHAFADA2Sq1QAAgJAFgIQABgBAAgCQAEgGAFgGQAFgFAGgHQAGgFAHgFQAIgGAIgFQAHgEAIgCQAJgEAJgBQAJgBAJAAQAHAAAGACQAEABAEACA0KrlQABABAAABQgBgBgCgCQgBgBgBgCQACACACACQAAgJgEgIQgCgEgDgDArKtBIAIABA0BrbQgBgBAAAAQgBgBAAgBQgDgEgEgDA2QqoQAAABAAAAA2QqpQAAABAAAAA2OqkQgBgCgBgCA2SppQAIAGAGAIQAGAHAFAIQAFAIACAJQACAHABACQgDABgDABQgIACgGAEQgJAFgHAGQgHAHgGAIQgEAHgDAIQgDAKABAKQAAAKAEAIQADAIADAGQABABABAAQAAABAAAAQAAAAAAAAA1voyQAFgCAGgBQAIgCAJAAQAJAAAIACQAJACAIAGQAHAGAEAJQAEAJABAKQADACABAGQAAAKgBAKQgBAKgCAIQgDAJgGAIQgCACgCADA3Km9QgBADgBACQgBADgCACA2ZnAQgHABgFAEQgBAAAAAAQgEgBgEABQgGAAgFABQgMAFgKAEA1wmzQAIAHgCAKQgCAKgJAFQgHAFgJABQgKABgKgEQgGgCgEgDA2mm7QgIAFgEAIAtdBSIAAAAQgDgCgBAAQAAgBgBAAQgHgDgJgEQgJgEgJgEQgJgEgJgDQgJgDgJgEQgJgDgJgFQgIgFgIgEQgJgFgIgGQgHgFgIgFQgGgDgHgEQgHgFgIgDQgIgFgJgFQgHgEgIgEQgGgEgGgEQgHgDgHgEQgGgCgGgDIC4jSAxcgtQACAAACABQAAgBgBAAQgBAAgCAAgAxjgxQAEACADACA1viDQgBAAgBAAQgIAAgHADA00hzQAAgBAAgCQAAgBAAgBA1EhXIAYgbIACgBIGNmoAzdA5QAAgBABAAQAFgEAGgBQAKgCAKAAQAIgBAJACQAJACAIADQAIADAJADQAIADAIAEQAHADAHAEQAHAEAHADQAIADAHAEQAIAEAIACQAJACAJADQAIADAJADQAJAEAKADQAIADAIADQAJAEAIACQAIADAIAFQAIAEAVAOQgQAJgPAJQgMAHgbATQgGAEgGAEQAAABAAAAQAAABAAABQgCgBACgCArJB/QgPAEgPAEQgTAGgRAIQgQAIgPAJQgPAJgPAKQgPAKgQAIQgRAJgSAFQgSAFgPAIQgGADgIABQgSABgRgGQgTgGgSgHQgMgFAAgFAu7CXQABAAAAAAQAAgBABAAQAQgKAQgKQAOgKAOgNQAOgMAOgKQACgCACgBQAAAAAAAAQANgKAOgHQASgJASgIQAPgHAQgGQASgHARgIQAJgEAKgFQAGgCAFgDQASgGARgKQARgKASgJQARgIARgLQAPgJAOgJQAQgKARgFQARgFAQgFQAQgFAQgHQARgHAQgGQASgJASgGQATgHATgDQAJgCAKABQAJABAKACQASAFAPANQAOAMAHAQQgBgBgCAAQgJgCgLAHQgRALgIASQgIAQgMAOQgLAOgNANQgMAMgPAJQgQAJgPAKQgQAKgNANQgNALgJAOQgBACgBACQgKARgKAQQgJARgGASQgHATgBAUQgCAUACATQACAPAMACQABAPgCARQgDASgBATQAAAQACAQQACASgBASQAAAFAAAFQgBAMABAMQACATABAUQABATAEATQADASAEATQAEAQAEAPQABADABADQABAAABgBArJB/QABgBABAAQAPgEANgGQADgCADgBQAMgHAMgHQAQgKARgHQARgGAQgGQASgGASgHQAQgHAOgJQARgJAWgKQAJAGgBATQgBATACATArJB+IAAABAyejTIEek3AhmoUQARACASAAQAOAAAOgCQAPgBAOgDQAagEAbgIQAMgEAJgGABEnRQgBgDAAgHQAAgMgKAEQgTAIADgPQACgKAGgHQADgDACgIQACgHgBgJQgJgJAQgOQABgBABAAQAHgFAGgFAjMqpQAAACAAABQABAIgEAJQgIAFgFAGQgCgGgCgFQgJgYgRgTIgBAAQgGgIgJgGQAIAHAHAIQAPASACAcQAAACgBABQAAAEgCADQgDAGgCAEQgJgNgKgPQgBAAAAgBQgGgIgGgJQgJgMgKgJQgIgHgBAJAjnneQgCAPAGAPQAHATAUAEQARAFATACQAUABARgGQATgJAKgQQALgRgDgVQgDgSgLgQQgOgRgVAAQgUAAgSADQgFABgEABQgBAAgBAAQgHADgFADQAAABgBAAAjPn3QgEACgDAGAjPn3QAHgEALAGQAFACADAEQALAJACAQQADAPgLAIQgPAMgSgKQgRgKgDgUQgBgEAAgEQACgPAOgGQATgIAOARAhJnsQAAgBAAgBQgDgNgIgKQgIgKgKgFQgIgBgJgCQgJgCgKgDQAMAAAMADQAHACAFADAhJnsQABAEAAAFQABAFgBAGQgDgCgCgCAhInYQgCAOgJALQgLAOgOAKQgQANgUACQgTAAgTgEQgTgEgQgLQgRgKgGgSQgBgBAAgBQgGgSgTgIQgUgHgQAMQgBABAAAAQgNALAAAQQAAAEABAEAjnneQAAgBABgBQAAgBAAgCQAAAAAAAAQAGgVARABAjvnjQAAADABACQAFAAACAAAjvnjQgCAFgBAFQgBAHACAJAjpnsQgEAFgCAEQgEgOgMgIQgQgJgOAJAjynZQgGgIgKgIQgPgMgUAIQADgFACgCQAAAAAAAAQABgDACgCQACgFACgFQACgIAAgIQAAgHgEgEQgEgEgDgEQgBgBgCgCQgMgOgTgDQgTgCgTAEQgKADgIAEQgJAFgHAHQgIAHgEAIQgFAIgBAJQgEAUALARQAKAPAPALQAPAKARABQACAAABAAQARABAOgIAmLmJQAJASAMAQQALAPAMAQQALAOAQAJQARAIASAEQASAFASABQARACARAAQATAAASgEQARgDASgEQATgEARgKQAQgKANgOQANgPAGgSQAGAIADAJQAFAQgEgBAhInYQALAIAOADQARAEAQAEQARAFAUAAQATAAATAAQATAAARACQACAAACAAQABAAAAgBQgJgFgKgIQgBgBgBgBQgBAAgBgBQgCgCgCABQgDgBgEAAQAAAAgBAAQgTgDgUgEQgRgDgQgBQgUgBgTgGQgPgEgOgFACDnFQgBAAAAAAQgNACgNAGQgBAAgCgBABom9QAAgBgCgBABPnPQAAAAgBAAQgBAAgCgBACCmfQgCgDgCgCQAGACAEADIgGAAIg3gDQASgEAUAAQAEAAADAAQADABADABACCmfQAAAAABACQAFAJgFAMQgFAOgKAAAg/lvQAAgBAAAAQgEgGgHgGABLlZQADgCAFgFQAEgDAEgEABLlZQABACgBABIAAAAQgBAAgCAAQABgBACgCgABHlhQAEADAAAFAkmqlQAFADAEAEQAAABABABQAFAFAEAGQAJANAIAOAkoo6QAAAAgBAAQgKgHgMgDQgSgDgSACQgQADgOAJQgDACgCABQgGAFgGAGQgHAIgGAJQAAAAgBAAQgFAKgCAKQgCAHAAAIQAAASAHAPQABACACADQAJARASAKQARAKATgDQAUgDARgIQAEAUAUAGQAWAGAJgQAl7oWQgHAAgHAEQgHAEgEAEQAAABAAABQgCALAEAJQADAHAIAFQARALAOgQQAOgPgNgPQgJgLgLAAgAmUoKQgJAKALAMAmUoKQAGgVATAJAknpAQAAADgBADQAAAEAAADQABAEABADQABACAAABAqwqcIEZAZIB2ALAklntIAAAAQgDAIgHAHQABAAAAAAQAFAEAEABAminWQgLANgJARQgFAKgDAKIAAACIjtgYAjqjcQAAgBgBAAQgIgBgIgBQgIgBgHgCQgMgCgMgCQgSgFgRgEQgRgFgPgHQgRgJgPgMQgOgMgMgOQgOgPgJgSQgHgPgDgRQgEgVADgUQABgHACgHIAJAAAh1h/QABAPgEAPQgGARgGATQgFATgKARQgJAQgMANQgLAOgKAPQgLAPgMAPQgMAOgOAMQgQANgRABQgOAAgNgEQgUgGgGgUQgGgTADgUQAEgSAKgQQALgOAMgMQANgNANgNQANgNALgPQACgBABgDQAKgOACgRQACgSAAgSQAAgTgDgTQgDgQgFgPQAIABAIAAQASADASgCQASgCARgBQAMgCAMgBAqXCJICFgJAqXivIGGgOABJiuQgLgMgRgDQgTgDgRAGQgJAEgJAFABogsQgEgEAAgEQAAgFgBgEAkQhdQAHABAGACQALADALADAhMh/QAAASgHATQgGARgEASQgEAQgFAQQgGASgCARQgDATACATQABAUAGATQAGATAMARQAKAMALAMIABABQAIAHAIAHAkEjLIAEBnAgdCUIAFAAQABAJAAAJQABAHAAAGQABADAAAEQACAKADAKQAEAJAFAJQAKARAIATQAAACABABQADACAAAEAgdCUQABgIABgIQACAIABAIAgnCpQAAAAAAABQgEAFAAAKQAAAUgEASQgBAFgCAEQgBACgCADQgBADAAADQAAATAAATQABATgBATQgBAUADATQACAKAAAJAghCtQAAAAAAABQgDgCgCgCQgBAAAAAAQgEgDgFgDIAJAFIAGAEQABgFABgEQgFACgDADAgfCkQACgIAAgIAg1DtQgHAHgLACQgSACgRAHQgRAIgSAHQgRAHgVgBQgRAAgRAAQgTAAgTABQgSAAgRAEQgSAEgTAAQgUAAgTgCQgTgCgRgFQgSgGgSgIQgSgIgTgEQgKgBgJACQgIACgGgBQAAgCAAgDAy9oDIDmjkAy/ovIDkjgArKtBIABNMAAMEHQACAEABAEQAAgBAAgBQAEARAEASQAEASAGASQAGATAJARQAAABABABAAKK1QgBgCgCgDQgIgQgIgSQgHgSgFgSQgEgTgEgSQgDgTgDgTQgDgSgDgTQgEgSAAgTQgBgSgBgSQgCgSAAgSQAAgKgBgKIBjABAAHK1IADAAIEsADAmzLTQAGAIALAGQAPAIAQAJQAQAJASAHQARAGARAFQARAEAQAEQAUAEATAAQARAAARgBQARAAASgCQATgCATgDQATgDATgDQATgDAUgCQAUgDASgHQASgGALgMQANgMAKAAQgBgDgBgDQAAgBAAAAQAAgDgBgCQgCgBgCgBQAEAGABABAAYLSQAAgBAAAAQgGgOgIgOABzPZQAJgVgEgVQgDgUgBgVQgBgLABgJQABgPgEgPQgFgQgDgQQgDgNgHgMQgFgKgGgJQgJgMgJgLQgKgOgQgJQgIgFgIgDAqXGcICJgNAnjI4QAEACAAADQACAPAFAPQAGAQAFARQAGATAFATQAEAQAEAPQAAABAAABAm5LDIgBAAQABABAAACQACAFACAFQABABABACQAAAAgBABQgGAOgJAOQgNASgMASQgJAOgKAOQgLAOgJAQQgHAPgHAOQgJAQgIARQAAAAAAABQgBACgBADIAAAAQAXgRAagNQAMgHAOAAQASgBASACQAUADAVAEQAYAFAXAKQAOAHALALQAKAKAJALQAFAFAEAFQAFAHAEAIQAEAKADAKQADAHABAJQAAAFAAAGQAEgBADgBQgJANgHAOQgJAQgKAPQgIALgIALQgIANgIAMQgKAPgJAQQgJAQgJAQQgJAPgHAPQgEAJgFAJQgCAGgDAHQgGAPgHAQQgHASgFATQgGASgIATQgGAPgEAQQAAADgBACQAAACgBACQgBABAAABQgFASgFASQgGASgFASQgFATgBARA9ENgIV8icIAOgBAokOSQgHAJgFAMQgHAPgIAPQgCAEgDAEIgEAIQgDAIgEAIQgHASgLARQgJAPgJAOQgLARgLAQQgKAOgJAPQgJAQgHASQgHAPgGAQQgHASgGASQgGARgEARQgCAJgDAJIxiCtAoiOMQAAADgCADAlEVeQgCACgBACQAAgCAAgDQAAgGABgFQACgSAEgSQADgRAFgRQAFgSAFgSQAFgSAFgRQACgFABgEQAEgOAFgOQAGgRAGgSQAFgQAFgPQAGgRAEgQQAEgUABgTQAAgRABgQQABgRgIgRQAAAAABAAQANgOAQgJQAEgCAEgDQANgHANgHQAQgJAUAAQASABASAAQAUgBATACQATACAUACQASACARADQASAEASAFQATAFAOAPQAGAGAFAHQAGAIAEAJQAEAIACAIQAAAAAAAAQACgCABgBQAKgKAGgPQAAgBAAAAAmOTJIBmgPAkNPxQAAAAAAgBQAHgQANgNABgP2QAAAAAAAAQgHAMgKALQgMAOgIARQgIASgJARQgJARgJARQgJAQgIAQQgHAQgKAQQgHALgFANQgCAEgBAFQgGARgGARQgGARgEASQgCALgDAMQAAAEgBAEQAAADgBADQgCAMgDANQgBAEgBAEQAAACgBACArIKHIAAALAvJJJICki6AwmJbID8j0AyWELIgBABQAAgBAAAAQABAAAAAAgAyXEOQgBANACAOQACAKABAKQAAAGAAAFQAAAIAAAJQAAAJAAAJQAAAIgBAHQgBAJgCAIQgCAKgCAJQgCAIgBAIQgCAHgBAIQgBAKgBAJQgCAIAAAIQAAABAAACQgBABAAACQgBAHgDAGQgCAIgCAJQgBAIgCAJQgDAJgCAKQgDAIgDAIQgDAJgEAKQgCAHgCAHQgDAIgCAIQgBAKgDAJQgCAKgCAKQgBAIgCAIQgCAJgCAJQgDAIgCAHQgBABAAACQAAABgBACIAAABIABgBIIZhAIgBoIAsEXaQAAgFAAgEQABgTAFgSQAEgTAFgTQADgQAGgPQABgDABgCQABgDABgEQAEgTADgTQADgTAFgSQACgKACgKAg7VVQACAGgFAGQgDAPgFAPQgEAPgDAPQgDAUgGASQgDAJADAIAlEVeQACgEADgEQAIgNAJgMAlLXaQABgLgBgLQAAgSABgRQACgSACgSQACgQAAgPAsEXaIEiAAICXAAID1AAIHyAAA7SEzQgBgCABgCA6+MBQgBADgBAEA9NMSIgUADA9NMSIAAAMA6+MBIiPARA9NJHIAADLApIPVI0JDGEAgagXZMhA8AAAMAAAAuzIUeAAAFFPuIjSgVAgWTJIF1Az");
	this.shape.setTransform(-13.2,-24.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AskBWQgJgCgIgDIgRgIQgHgEgFgIIgIgQQgEgJgBgKIABgQQAGgJAGgGIAIgIIAEAEIgHAIIgGAIQgDAFABAFQAGAaATATQAFAFAHADQAIADAJABQAOAAANgDQALgCAIgGIABgBIgBABQgDABgFgBQgKgBgGgJQgGgIgBgKQAAgJADgJQACgJAIgGQAHgEAKAAQAHAAAEACIgBAAQgFgIgJgEIgJgEQgQgIgRgBIgBAAQgLAAgKACQgHABgGAEIgDADIgCABIADgEIAJgGIAIgDIAVgGQAIgDAKAAIAHgBIAHACQAKACAIAGIAPAMQAHAHAEAIQADAHACAKIABAKIAAAIQgBAHgDAGQAHgHAKgDIARgFQAHgCACABIACACIAEALQgGABgGADIgBABIgIgBIgLACIgWAIIAAgBIADgGIACgEIgCAEIgDAGIgDACIADgBIgHAKQgEAEgFADIgHAEIgTAGQgIACgKAAQgJAAgJgCgArhAqQgCAHgFAGQgDAFgFACQAFgCADgFQAFgGACgHQADgGAAgGIgBgDQAAgLgFgLIgDgFIADAFQAFALAAALIABADQAAAGgDAGgAJBBRQgTgEgQgLQgRgKgGgSIgBgCQgCgJABgIQgGgIgKgHQgPgKgTAGIAEgFIAAAAIADgFQAOgJAQAJQANAIADAMIgDAJIADgJIABAFIAHAAQgCAPAGAPQAHATAUAEQARAFATABQAUACARgHQATgIAKgRQALgRgDgUQgDgQgLgQQgOgRgVAAQgUAAgSADIgJACQARgGARgCIAPAAIASAFIARADQALAFAHAKQAIAKADAMIAAABIABAIIABAFIgBAHIgFgEIAFAEIABgHIgBgFIgBgIIAdAJQATAGAUABQASABARADQAUAEATACIACABIAGABIADABIABAAIACABIACACQAKAIAKAFIgCABIgEAAQgRgCgTAAIgmAAQgUAAgTgFIghgIQgOgDgLgIQgCAOgJALQgLAOgOAKQgQANgUABIgHABQgQAAgPgEgAFzA3QgSgKgJgSIgDgEQgHgPAAgQQAAgIACgHQACgKAGgKIAAgBQAGgJAHgHIAMgLIAFgDQAOgJAQgDQASgDASAEQAMADAKAHIABAAIAAAHIACAHIACADQgNgOgTgDQgTgCgTAEQgKADgIAEQgJAFgHAHQgIAHgEAIQgFAIgBAJQgEAUALAPQAKAPAPALQAPAKARABIADAAQARABAOgJIABAJQgRAIgUADIgJABQgOAAgNgIgAp2A6IgBgBIgIgGQADgCADABQAKAAAKgCQAJgBAIgFQAIgEAFgGIAFgFIAIgJQAFgGAEgIIAHgPQACgGAAgHIAAgFQADADABAGQAAAKgBAKQgBAHgCAJQgDAJgGAHIgEAGIgKAIQgGAFgIADIgCAAQgJAEgKAAIgFABIgPgBgAImAwQgRgKgDgUIAAgIQAFgUARACQgEACgDAGQADgGAEgCQAHgFALAHIAIAFQALAIACAPQADAPgLAJQgIAGgJAAQgIAAgIgEgApTATQgGgIgBgKQgBgIAFgJQAEgJAHgGQAHgGAKAAQAIAAAFAFIACACIADABIAAAFQAAAHgCAGIgHAPQgEAIgFAGIgIAJIgBAAQgKAAgGgIgAFwAFQgIgFgDgGQgEgIACgLIAAgCQAEgEAHgEQAIgEAGAAQAMAAAIAKQANAQgOANQgIAKgJAAQgHAAgHgFgAoogdIAAAAg");
	this.shape_1.setTransform(-89.3,-74.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6400").s().p("AP0CuIgBgIQgDgKgDgGQABAMgCALIgEALQgEALgJAGQgBgNgFgPIgBgBIAAgCIgEgNIAAAHQAAADACADIACACIgNAAIgEAAQgDgSgPgNQgOgMgTABIgIABIAFgGQAOgNACgTIADgOQACgLAAgKIAAgEIAAgIIAAAIIAAAEQAAAKgCALIgDAOQgCATgOANIgFAGIgBAAQgNADgMAFIgCgBQgKgGgJgIIgCgBIgDgBQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAgBABIgGgCQgCgDABgHQAAgLgKADQgTAIACgPQACgJAHgIQACgDACgHQACgIAAgJQgJgJAPgNIADgCQgKAGgMAEQgbAJgbAEIgdAEQgOABgPAAQgRABgRgDQgGgDgHgCQgLgCgMgBQgigMgZgdQgSgSgEgZQgCgLAGgJIgEABQgMADgKAIIgFAEIgHAGIgVATQgMAMgIANIgBADIABgDIAAgBQAFgQAEgRIACgQIgBgCIAAgBIgBgHIgEgGQgDgGgGgFQgWgSgcAGQggAGgbARQABgcAagMQgVAEgOARQAEgOAJgLIAKgKIABgBQAUgSAbgFQgQgIgRAHQASgVAagDQgPgLgUAFQANgMAVgDQASgCASAFIAOAGQAKAEAJAHQAQALAOAOQANAOALAPQAFAHABAIQAOgKAQgHQASgIATgDQASgDASgBQASgCASACIAiACQAVABANAOIALAMIgBACIgCAHIACgHIABgCQAEgJAIgKQANgPAPgNQANgLARgGQATgHAUAGQASAEAMANQANAMACARQgPgHgUgFQgVgEgUADQgXAEgNATQgJAOgEAQIgBAHIAEgCIAdgLIADgBQAegKAfAIQAkAKADAgQABANgCALQgCgFgLAAIABAGQABATgEAQIAAAAQgCAPgBAPQAIgRAPgMQAPgLASgFQATgDATgCQAVgBAPAMQAPAOAHATQAHAQgBASQgBASgHAQQgEgSgMgOQgKgMgOgHQAJASAEAVQAEAUgHATQgIgHgIgNIAIAWIAAAAIACAIQAEANgFANIAAABIgCADQgGAPgNALIgJAIQACgSgDgRgANGAaIAMgKIgMAKgANVhCQAQABAQAFQARAFAPAJQAOAIADAMIABABIgBgBQgDgMgOgIQgPgJgRgFQgQgFgQgBQgTgBgOAEQALgDANAAIAJAAgAHmhTIABABIAKALIARAbIgRgbIgKgLIgBgBIgIgIIAIAIgAIRgyIAGgKIACgHIAAgDQgCgcgPgTQgGgIgJgGQAJAFAHAIIAAAAQASAUAJAXIADALQAFgGAIgFQAEgIAAgHIAAgBIgBgEIABAEIAAABQAAAHgEAIQgIAFgFAGIgDgLQgJgXgSgUIAAAAQgHgIgJgFQAJAGAGAIQAPATACAcIAAADIgCAHIgGAKIgTgcIATAcgAHfh2QAKAKAIALIAMARIgMAJIANgHIgBgCIgMgRQgIgLgKgKQgEgCgCgBIAAAAIAAAAQgDAAgBAFQABgFADAAIAAAAIAAAAQACABAEACIAAAAgAvdCMIgCAAIgDgBIgGgCIgLgFIgEgBQgKgCgKACQgGABgEADIgEgBIgDgHIgHgOQgEgIgCgJIgEgRQgDgJAFgIQAEgFACgGQABAAABgBQAAAAABAAQAAgBAAAAQAAgBgBgBIAAgBIgBgBQABgDAAgDIgCACIgDAGIgCAEQgCgKABgKIAAgDQABgJADgIIACgGIgHAJQgEAGgBAHQgEgMAAgNIACgLQADgKAFgIIAHgLIgGAIQgFAIgDAJIgFANIgBgCQgEgIABgIQAAgLAEgLIACgDQAGgOAJgHQgMAHgJAJIAAAAIgEAFQAAgPAIgMIABgCQAIgNAKgIQgOAJgIAIQAAgIAEgIQAJgSARgMIAAAAIABgBQANgJAOgDIAGgBQgCgCgFABQgPACgOAFIgBAAIAAAAIgLAEIAGgGIADgCIANgJQAIgFAJgBIAHgBIABAAIAIgBQAJABAJACIASAFIATAGIASAHQAHABAGAHQAGAHABAJQACAIgDAHIgBABIAEgKQAEgJAIgEIAQgHIAQgEIASgFIARgFIARgCIATgBIAQgBIAQgBQAIgBAJABIATADIAQAEIAOADIANACQAIACAHAEIABgFIABgKQABgJADgIQADgJAEgHQAFgJAIgFQAIgGAIgFQAHgFAIgCIATgFIATgCQAJgBAJACQAJACAIAGIAOAMIABACIAFAGIgIgDQgHgCgGAAQgJAAgJABQgKACgJADQgHADgHAEIgQAKIgOALIgLAMIgIAMIgBACQgFAIAAAKQAAgKAFgIIABgCIAIgMIALgMIAOgLIAQgKQAHgEAHgDQAJgDAKgCQAJgBAJAAQAGAAAHACIAIADIAEAIQAEAIABAJIgFgEIADADIACADIAAgCIAGAGIABACIABABIgBAAIgBAAIgCAAQgFgDgIgBIgDAAIgDAAIAAAAIgBAAIgFAAIgHABIgSACIgRADQgJACgIAEIgOAGIgNAHIgMAFIAMgFIANgHIAOgGQAIgEAJgCIARgDIASgCIAHgBIAFAAIABAAIAAAAIADAAIADAAQAIABAFADIACAAIABAAIABAAIAFAHQADAEAAAFIAAALQgEAAgGgEIgIgJIAFAOIADALQABAHgBAHQgBAGgCAFIgDAIQgCgEgGgFIgNgLQgKgHgMgHQgNgHgOgDQgNgCgMABQgLABgJAFIgMAJIgDACIgEAGQgBABAAAAQAAAAAAAAQgBABABAAQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAABABQAAAAABAAIAEAMIABAQQABAJgEAJIgFANIgBACQgFAJgHAHIgOAMIgNAIIgNAKQgHAHgIAGIgOAKQgIAFgIAEIgMAEIgLgCQgJAAgKACQgJADgIAFIgHAEIgIACIgPAEIgRADQgJACgKgCQgJgBgJgDQgIgCgHgEIgPgMQgHgGgFgIIgKgRIgIgPQgEgHgBgJIAAgGIABgMQABgKAFgIIAKgNQADgDACgBIABAAIAAAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAABQACADAEABIAKACIgKgCQgEgBgCgDQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAIAAAAIgBAAQgCABgDADIgKANQgFAIgBAKIgBAMIAAAGQABAJAEAHIAIAPIAKARQAFAIAHAGIAPAMQAHAEAIACQAJADAJABQAKACAJgCIARgDIAPgEIAIgCIgIAHIgEADIgCACIgHAHQgHAIgGAJIAAABQgEAGACAHIgFAAIgEABIgIAAQgRgBgRADQgSADgRAHIgQAGQgOAHgOAAIgHgBgAwJAvIABARQACAJADAIIAIAPQAEAHAFAFQAGAGAHAFIAJAEIgJgEQgHgFgGgGQgFgFgEgHIgIgPQgDgIgCgJIgBgRIAAgMIAAAMIAAAAgAvWBtIACACQgDgFgFgCIAGAFgAv7AvIAFANIAIASIAFAJIAEAHIAJAKIgJgKIgEgHIgFgJIgIgSIgFgNIgEgOIAEAOgAv6ARIACAMIAAABQACAIAEAHQAEAIAGAGIAJANQAGAIAIAFQAHAFAHADQgHgDgHgFQgIgFgGgIIgJgNQgGgGgEgIQgEgHgCgIIAAgBIgCgMIAAAAQAAgHAEAAIAAAAIABAAIADABIAAAAIACABIgCgBIAAAAIgDgBIgBAAIAAAAQgEAAAAAHIAAAAIAAAAgAu8BMIAGAEIgCgEIgCgBIgCABgAviAKIABAHQACAJAEAJIAIAQIAIAMQAEAHAHADIAEADIgEgDQgHgDgEgHIgIgMIgIgQQgEgJgCgJIgBgHIgBgKIAAAAIAAAAIABAKgAvNAEQABAKADAJIAGARIAGAQIAEAHIAFAEIgFgEIgEgHIgGgQIgGgRQgDgJgBgKIgBgKIAAgIIACgPIgCAPIAAAIIABAKgAvEhDIgPAEIgPAEQgIADgHAGIgOANQgHAHgFAJQAFgJAHgHIAOgNQAHgGAIgDIAPgEIAPgEIABAAIAAgBIABAAIAHgBIACAAIAAAAIAEAAIAAAAIAAAAIgEAAIAAAAIgCAAIgHABIgBAAIAAABIgBAAgAvYhQIgSAEQgIADgIAEIgQALIAQgLQAIgEAIgDIASgEIABAAIAIgBIAAAAIAAAAIADABIADAAIATACIABABIABAAIADAAIACAAIABAAIAAAAIABAAIABAAIACAAIACAAIABAAIABAAIAAgBIAAgBIABgEIAAgCIAAACIgBAEIAAABIgBAAIgCgCIAAAAIgBAAIgGgHIgDgEQgEgEgEgCIgNgGQgIgDgJgBQgJgCgIABQgKAAgIACQgKADgCAGQACgGAKgDQAIgCAKAAQAIgBAJACQAJABAIADIANAGQAEACAEAEIADAEIAGAHIABAAIAAAAIgDADIgBAAIgBAAIAAAAIgBAAIgCAAIgDAAIgBAAIgBgBIgTgCIgDAAIgDgBIAAAAIAAAAIgIABIgBAAIAAAAgAvFh2QAIAEAHAHIAJAKIAIAMIgDgGIgCgCIgDgEIgJgKQgHgHgIgEQgJgEgIgBQAIABAJAEgAqfhvQgEgCAAgHIAAgBIAAABQAAAHAEACgAFtg8QAbgRAggGIg7AbgAGohTg");
	this.shape_2.setTransform(-90.5,-83.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("ANMItQgEgJgGgIIgLgNQgOgPgUgFQgRgFgTgEQgSgDgTgCIgngEQgTgCgTABIglgBQgUAAgQAJIgZAOIgIAFQgQAJgOAOIAAAAQgNANgHAQIgBABIgGACIgBgLQgBgIgCgIQgDgKgFgKQgEgIgFgHIgIgKIgUgVQgLgLgOgHQgWgKgZgFIgpgHQgRgCgSABQgOAAgNAHQgZAOgXAQQACgDAAgDIAQghIAPgdQAIgQALgOIATgcIAagkQAJgOAGgOIABgBQAGAIALAGIAeARQARAJARAHQARAGASAFIAhAIQATAEAUAAIAhgBIAkgCIAlgFIAngGIAngFQATgDATgHQARgGAOgMQANgMAKAAIgCgGIAAgBIgBgFIAQAIQAPAJALAOIARAXIAMATQAGAMADANIAIAgQAEAPgBAPIAAAUQABAVAEAUQADAWgIAUIgBACQgGAPgJAJIgDADIgBAAQgCgIgDgIgAGFicQgSgCgSgFQgRgGgSgIQgSgIgUgEQgJgBgJACQgIACgGgBIAAgFIAAAFQgMgCgCgPQgCgTABgUQABgUAHgTQAGgSAKgRIATghIADgEQAJgOAMgLQAOgNAPgKIAfgTQAQgJAMgOQANgNALgOQALgOAIgQQAJgSARgLQALgHAIACIAEABIANADIAWAHIgDAEQgLAOgNANIgaAaQgNANgKAPQgLAQgDASQgEAUAGATQAHAUATAGQANAEAOAAQASgBAPgNQAOgMAMgOIAYgeIAVgdQALgPAJgQQAKgRAGgTIALgkQAFgOgBgQQAPADATgCIAGgBQABASgIAUQgGAQgEASIgJAgQgFASgDATQgCATABATQACAUAFATQAGATANARQAKAMALAMIAAABQAIAIAJAGIAJAGQgEAFAAAKQAAAUgEASIgDAJIgEAFQgGAHgLACQgSACgRAHIgjAPQgRAHgWgBIghAAIgnABQgRAAgRAEQgSAEgUAAQgTAAgUgCgAo9ibIgTAAIgRgBQgKAAgKgBIgRgCIgTgBIgRgCIgSAAIgRgBIgRgEIgQgCIgTgFQgIgCgJgBIgTgCIgQgCIgRgBQgIgBgIgDQgKgDgBgLIgBgIIgDgKIgFgQIAIgIIAHgLIAIgOQAFgKACgLIABgVIABgOQABgKAAgJIAAgEIgBgIIgBgDQAAgBAAgBQAAAAAAgBQAAAAAAAAQAAgBgBAAIAAgHIgBgTIgBgSIAAgSIACgTIABgSIABgUQABgJgCgJIgGgSQgDgIgGgEIAKABIATgBQAGgBAGgCIABADIACABIAFAKQAEAJADAJQADAJABAJIADASQACAJADAJIAIASQADAIAGAHIAOALIANAKQAIAGAIAEQAJAEAJACQAJACAJgBIATgCIASgEQAJgCAHgHQAGgHADgKIADgTIACgTIAAgTQAAgKgDgJIgGgSIgGgQIgHgRQgEgIgBgIQgBgKABgKQAHgCAHgBIADAAQgEAJACANIAEATIAFARIAEAKIAEAJQADAHAEAHQAGAIAGAGIANALIAMALIAPAMIAPAKIAOAJIAPALIAPALIAMAKIABAAIACADQAHAGAFAIQAFAGADAGIAAAAIAAABQAFAHACAJQADAJAFAIQAGAHAEAJIAHARIAFAQIAEATIAEASIADASIADAUIACASIAAACIABABIgGACIAAAAIAAABIgFACQgJADgJABIgTACIgTACIgSACIgQABIgSACIgTABIgUAAg");
	this.shape_3.setTransform(-88.5,19.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AptJ3QgTgBgRgKIgHAAIABgJIAAgLIAAgcIgCgaIAAgMIgBgFIAAgDIAJgEQAVgGAVgDIASgDQAKAAAJACQAMADAJAKIAFAHIADAHQADgFAFgEQARgMAUgGIAhgIIAIgCQAGgBAGACQATAHASALIAMAIQADADABAEQAMgaAagNQATgKAVgDQAKgCAKACQAWAFAPARQAFAFADAGQAMgOAPgJQAPgKARgFQARgEAPAGQAPAHALAMIATAWIAEAFIgEgFIAVgSQAOgNASgHQARgHATAAQASAAAOAJQAQAJAMAOQAIAKAFAMIAJgHQALgMAPgGQANgEAMADQAWAFAWAIQAOAGALAKQADAAADgCIANgKQARgMAUgEQAUgDAUAEQAQAEANAJQAHAGAKgJQAXgUAegDQAYgDAXAJQAMAEANAHIAIAGIAEgGQAFgGAHgGQALgIANgDQANgEALAGQAHADAFAGQAJANASgLQAEgDAFAAQASABAQAHIASAJQAGADABAFQAEAMgMAEQgJAEgKABQgLACgMgEIgtgPQgLgDgHAHQgFAFgEAHIgKAMQgOAQgWABIgkABQgVAAgSgLQgZgPgaARQgkAYgqgGIgPgDQgWgGgTgLIgDAHQgCAHgHAEQgMAIgNAGQgKAFgKAAIgGAAIgBgKQgLgIgTAKQgGADgEAGIAAAAIgjgEQgSgHgSgCQgNgBgLAGIgIADIg7gCIgNgEQgQgHgWACIgIAEIgNADIgMADQgQACgRAAIgNgBQgVgCgUgEQgSgDgSAEQgIACgGgHQAAAHgGAFIgJAGIgEgDIABAFQgLAFgLADQglAJgagaQgKgIgHgKQgLAOgSAGIgNAFIgWAHQgQAEgRAAQgTAAgTgGQgSgHgQARQgMANgTAAIgEAAgAmiBaQgDgHgIgGQgPgKgUABQgSABgTAFQgTAFgRAKIgTAMQgLgLgLgMQgMgOgPgKQgRgKgSAEQgPADgLAJQABgGgFgJQAEgCgEgFIgBgOQAAAAAAAAQABAAAAgBQAAAAAAgBQAAgBAAgBQABgEADgJQAHgPAFgSIALgiIAKghQAFgRAHgQQAHgQADgRQAEgSACgSIABgiQABgTgDgUQgDgTgGgRQgGgRgIgPIgSgdIAAgNIURA5IAAAVIgJABIAJgBIAPAAQAFALACALIgIAEIgcAMIAGAIIACAFIgBADIAAACIAAAPQAQBdgBBeQAABcgRBggAnsAbICpgrgApEAOIDHhXgAmpjtIighdgAmGkZIh8g+gAiumxQgDgBgBgEQgDgVARgUQATgJAEgQQAEgSAPgNQAMgKAPgFQARgFASgCQAYgDAWAJQAGADAEgGQAFgNAPgGQASgHATgBQAWgCAUAIQAJAEAJAAQAGAAAFgFQALgJAOgCQASgEATABQASAAASACQAbAEAWAKQAQAHALgUQAIgOAPgIQAQgJASgFQAQgFAQACQASACAQAHIAkAPQASAHASgJIAigSQATgKAWACQAHABAEAEQAKAJARAFQAVAGASgGIACCpIgIAAQgKgFgKAAQgQACgQAFQgRAHgTgCQgTgCgPgMQgQgMgSgMIgZAPQgQAKgTADQgVADgVgHQgYgIAEgZQABgJgJgCQgOgDgOAFIggANQgPAHgQADQgWAFgWACQgVABgUgFQgXgEgTgPQgNgKgOAKQgQAKgSAFQgUAFgVgDQgLgCgIgGQgKgJgIAEQgQAGgOAKIgeASQgPAJgRAEIgfAFIgOABQgRAAgQgGg");
	this.shape_4.setTransform(97.7,-53.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006600").s().p("Ag/BxQgJgRgMgQIgUgbQgMgRgSgIQgOgHgOgBIAAgBIAAgBIACggIAEgnIABgHIAAgEQAEgKABgLIDHgVQAJgEAKAEQADAQAOgNQAHgHAEgHQABgDAEgCQADAOALAIQAFAEAHAAQAFAJAKAIIAFAJIAAAAIAGAMQAGAPACAQIACAWIABANIgDgFQgIgOgRgKQgRgJgRgIIgYgJQgUgIgWgEIgbgFIgBAAIgMgFQAGADAHAFQASANARAPQAMAMAJANQALAQAHATQAFANgBANQgCAQgGAIQgGgNgJgLQgLgPgRgIQgTgHgRgGQgQgGgQgGQgPgFgMgJIgFgEIAFAEIAFAkQABAOAAAMIgFAhQgDATACASQgBgGgDgEg");
	this.shape_5.setTransform(46.3,-111.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CC9900").s().p("AeCXZIgBgJIgEgMQgEgMgGgMQgIgRgBgUIgEggIgGghIAAgBQAAAAAAgBQgBAAAAAAQAAAAgBgBQgBAAAAAAIABADIACAAIAGAhIAEAgQABAUAIARQAGAMAEAMIAEAMIABAJIhFAAIAAgLIAAgSIgDglIAAglIAAgXIAAAXIAAAlIADAlIAAASIAAALIhXAAIAAgCQgBAAgFgBQAAgVAIgSQAIgSAFgSQAGgTABgTIADghIACAJIAAgHIgCgkIgDgkQgCgQAAgQIgBgjIgCglIgCgfIAAgkQABgWgDgXQgDgRABgTIACggIADgiQACgWAAgPIgBgFIADAAIAXAAIAAgDQAFgUgDgNIgBgEIACgEIACAAIABABIAEABIAOABIABAAIAAAAIAMgBIAEgBQAQgDAAgNQAAgFgDgIIgFgSIAAgGIAAgIIgDgSQgFgRgBgTIgDgnIgCgkIgBglQAAgTACgUIABgXIAAgMIAAgBIAAAAIgBgYIAAgMIADgnIACgZIAAgHIAAgCIAAgDIAAgBIAAgBIADgnIAEgdIAFgpIADgiQABgQAAgRIABgdIAAgLIAAgDIAAgPIgCg1IACA1IAAAPIAAADIAAALIgBAdQAAARgBAQIgDAiIgFApIgEAdIgDAnIAAABIAAABIAAADIAAACIAAAHIgCAZIgDAnIAAAMIABAYIAAAAIAAABIAAAMIgBAXQgCAUAAATIABAlIACAkIADAnQABATAFARIADASIAAAIIAAAGIAFASQADAIAAAFQAAANgQADIgEABIgMABIAAAAIgBAAIgOgBIgEgBIgBgBIgCAAQgNgEgKgIIgHgHQgIgKgDgMIgBgFIAAgEIAAgDIAEgiQABgRAEgRIAHgjQADgSACgSIAEgnIAEglIABghIgBgoIgBggQAAgVgFgPIABgJIABgaIACgWIgCAWIgBAaIgBAJIgCAAIAAgJIAAgBIAAgnIABgmIgBgVIgBgSIgDgWIgBgFIgDgMIgKgmQgEgQgHgOQgJgTgKgHQAMgMAQgGIARgHQgCgJgHgLIAdgMQAPgHAPgEIAGgCIAVgFQgLhDgGhBIAAgBIAAAAQgLhsAAhtQAAg2ADg4QAFhqAQhsIgDgOIAAgEIgCgEQgDgIgLgDIgBgBIgBAAIgNgCIgBAAIAAAAIgBAAQgJAAgJADIgaAKQgCgMgFgLIBSgDQgNhigEhiQgCgpAAgoQAAhoALhnIAPgCIABABIAAAAIABABIAAAAQAGAEAHAAIABAAIAAAAQAHAAAIgEIAAAAIgfgCIgPACIADgPQAEAGAGAGIACABIgCgBQgGgGgEgGIgDAPQgLBnAABoQAAAoACApQAEBiANBiIhSADIgPABIAAgWIgDh2IAAgCIgCipIgDioIBhgJIhhAJIgBgnIABAnQjMgpitBKIgFACIgNACQgMAAgNgDQgTgDgIgUIAAAFQgDARgLAOQgIALgGgJIgGABQkUgvj6BjQAIgEAEgHQgEAHgIAEQgHADgJACIgBgBIgGAAIABACQgHAAgFgEQgKgIgEgOQgEACgBADQgEAHgHAHQgOANgDgQIAHADIgHgDIgBgHIAAgGQAAgMADgMQAFgWALgQQgLAQgFAWQgDAMAAAMIAAAGIABAHQgKgEgIAEIjKAVIAAgCIAAgGIAAAGIAAACIhgAKIhRAIIABgFIAGgPIgGAPIgBAFIBRgIQAIARADASIADAkIAAABIAAABIAAAAIAAAAIAAgBIAAgBIgDgkQgDgSgIgRIBggKQAAALgFAKIAAAEIgBAHIgEAnIgCAiIAAABIAAABIgCAeIgCAaIAAANIgCARIgEAdIgFAkIgDAmIgCAkIAAABIAAAFIACAXIgBAFQgDASgBASQgBATACATIAEAhIABADIAHAkIAHAkQADAKgEAJIgCACQgGADgHABIgTAEIgIAAIgHABIgBAAIgBAAIgBAAIgCAAIgHgBQgQgEAAgRIAAgCIABgLIACgcIADgkIACgnIAAgBIAAgCIABgjIAAgRIAAgRIgBgRIABgWIAAAIIAAgIIACgGQADgNABgNIAAgBQgQgEgPABIgnAEQgRADgSAAQgPAAgPgEQAPAEAPAAQASAAARgDIAngEQAPgBAQAEIAAABQgBANgDANIgCAGIAAAIIAAgIIgBAWIABARIAAARIAAARIgBAjIAAACIAAABIgCAnIgDAkIgCAcIgBALIAAACQAAARAQAEIAHABIACAAIABAAIABAAIABAAIAHgBIAIAAIATgEQAHgBAGgDIACgCIgBACIAAABIgBABIAAABIABgBIACAVIABAEIAAAPIACAhIADAZIABAFIABAHIAAAEIABAPIAAAGIACARIgEAEQACALAGAHIgDADQgIgIgQACIgJ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gFQgIgQgIgSQgHgSgFgSIgIgmIgGgmIgGgkQgEgTAAgTIgCgjQgCgSAAgTIgBgTIBjABIhjgBIgCgTQgDgUABgTQABgTgBgTIAAgmIABgGIADgFIADgJQAEgTAAgTQAAgKAEgFIABAAIAFADIAAgBIACgIIADgQIAEAAIABASIACANIAAAHQACAJADALQAEAJAFAJQAKARAIATIABADIADAIIAAgCIAIAjQAEASAGASQAGASAJASIABACQAIAQAGAQIANAkIAOAjIAPAhIAQAiQAJAVAUAAQAUAAAPgKQAPgLAOgNQAOgNAJgSIALgXIAQgiIABgCQACgFgCgFIADgIQAHgRAJgRIAHgNIAJgTIAOggQAIgQAFgSQAFgTAEgSIAFgYIABgGIAAgEIAFgbIADgNQAFgTAIgSIAFgMIACgDIAJgRIARggIABgDIASgkQAEgJAGgGQAHgGAIgDIgCAEIACgEIgGAiIgDAQIAAAAIAAAXIABAoIAEAmQACATABATIACAcIgDACIADABIABAFIAAAMIACAaIAAAcIAAALIgBAJIAAAAQABAPACAOQADATABARIAAAMIgIgCIAAAAIgBAAIgJgDIgBgBQgJgEgKAAIAAAAIAAAAQgMAAgMAGIgBAAIAAAAIgBABIAAAAIgBABQgPAHgLALIgBgGQAAgFACgGIAHgUIAEgIQAGgMAEgNIAAAAIABgDQAEgRAAgRIgBgMQgCgYgLgaQgFgLgEgMQAEAMAFALQALAaACAYIABAMQAAARgEARIgBADIAAAAQgEANgGAMIgEAIIgHAUQgCAGAAAFIABAGQALgLAPgHIABgBIAAAAIABgBIAAAAIABAAQAMgGAMAAIAAAAIAAAAQAKAAAJAEIABABIAJADQgEAKACAKIACABIADABQASAHgPARQgNAOgEATIgEAXIAAAAIgCANIgDAUIgDARIgFAYIADgDIgBAMIAAAAIAAAMQgCARAAATQAAATgDAUQgCASAAATQABATgEATQgDASgCAUQgBATABATQABAUAAASIABAoQABASACASIgCAAIABABQACADAAAEIABAVIABAXQAAAFAEADIAIAJIAIAJIgTAAIgOABIABApQAQABAPgCIAAAGQAAASgDAUIgGAlIgGAnIgFAjIAAABIgDAWIgBAOIAAAEQgGADgHABQgSAFgMALIgBACIgDAFQgCAKAAAMIABAOIACAmQAAATgEAUQgDASgHAQIgOAnIACABIAMABIAAAAIAAAAIAHAAIABAAIABgBIADAAIABAAIAYgCIAAAAIAAAAIAFAAIAFAAIACABIABAAIABAAQAIgBAHgCIABAAIADgBIgBATIAAAFIAAAGgAFgUOIADgJIAAgBIACgFIgBAAIABAAIAAgCIACgIIACgJIACgJIAGgPIgGAPIgCAJIgCAJIgCAIIAAACIgBAAIABAAIgCAFIAAABIgDAJIgBgLIAAgHIAAAAIAAAAIAAAAIAAAAIAAAHIABALgAFfT8IAAgDIAEgkIADgkIACgkIAAgHQAAgOgCgOQgDgSgGgQIgNgiIANAiQAGAQADASQACAOAAAOIAAAHIgCAkIgDAkIgEAkIAAADIl1gzgAGOS5IgBAIIAAAAIgCAWQgBAFgBAAQABAAABgFIACgWIAAAAIABgIIAAgMIAAgMIAAgCIAAgBIAAgLIgBAAIABALIAAABIAAACIAAAMIAAAMgAGCS5IgCARIACgKQABgDgBgEIAAgSIAAgTIgEglIgBgLQAAgNAGgGQgGAGAAANIABALIAEAlIAAATIAAASIAAAAgAGOSTQAAgMADgHQgDAHAAAMgAGKQnIABAAIABAAIgBAAIgBAAIgFAAIgHgBIgMAAIAAAAIgBAAIgGAAIgGAAIgDABIgBAAIgFAAIAAAAIAAAAIgKgBIgCAAIgBAAIgHAAIAHAAIABAAIACAAIAKABIAAAAIAAAAIAFAAIABAAIADgBIAGAAIAGAAIABAAIAAAAIAMAAIAHABIAFAAgAFHPiIgCAMIACgMQALgLAAgQIAAgHIgEgoIAAgPIABgXIAAgJIACgeQAAgTACgUIACglIABggIAAgHIAAgOIABgMIAAgCIAAgDIAAgBIAAgBIAAAAIAAgBIgBgZIgBgNQAAgMACgMQADgMAAgMIAAgGIgBgFIAAgCIgEglIgCgkIgCgnIAAgCQAAgJAGgHQAMgNAQgJIAjgPIABAAIACgBIAAAAIAAAAQAIgCAHAAIABAAIAAAAQAGAAAHABIABAAIgBAAQgHgBgGAAIAAAAIgBAAQgHAAgIACIAAAAIAAAAIgCABIgBAAIgjAPQgQAJgMANQgGAHAAAJIAAACIACAnIACAkIAEAlIAAACIABAFIAAA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");
	this.shape_6.setTransform(-13.2,-24.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0099CC").s().p("AqsDrIAEgVIABgNIAAAAIAEgXQAEgTANgOQAQgRgTgHIgDgBIgCAAQgCgKAEgLIABAAIABAAIAHADIAAgMQgBgSgDgTQgCgOAAgPIAAAAIAGAAQARALATABQAVABAOgPQAQgRASAHQATAHATAAQARAAAQgFIAWgHIANgEQASgFALgOQAIAKAJAHQAaAZAlgIQAMgDAKgGQAEAbAXAQQAQALASAEQgSgEgQgLQgXgQgEgbIADgCIAKgGQAFgCAAgHQAGAGAIgCQASgEASAEQAUADAVABIAAACQAAAPALALQAJAKALAFQARAIATACQgTgCgRgIQgLgFgJgKQgLgLAAgPIAAgCIANAAQARABARgBIALgCIANgEIAIgDQAXgCAPAGIANAFIARABQARADARgDIAIgBIAIgCQALgGANACQASABASAGQAMAEAMACIAKAAIABABIACABIAAAAIABAAIABAAIAAAAQAPgBAQgEIAGgBIAGAAQAKAAAKgDQAOgFALgJQAHgEACgHIAEgHQASALAWAGIAQADQApAHAlgYQAZgRAZAPQASAKAWAAIAjAAQAXgCAOgPIAJgNQAEgGAFgFQAIgIALAEIAtAPQALADALgBQAKgCAJgEQAMgEgEgMQgBgEgGgDIgSgKQgQgHgRAAQgGAAgDACQgTALgJgNQgFgFgHgEQgKgFgNADQgOADgLAJQgHAFgEAGIgFAGIgIgGQgNgGgMgFQgXgIgYACQgeAEgWATQgKAJgIgFQgNgKgQgDQgUgFgUAEQgTAEgRALIgOAKQgDADgDAAQgLgLgOgFQgVgIgXgGQgMgDgNAFQgPAGgLALIgJAIQgFgMgIgLQgLgOgQgJQgPgJgSAAQgTAAgRAHQgSAIgOANIgVARIgTgWQgLgMgPgGQgPgHgQAFQgSAFgPAJQgPAKgMAOQgDgGgFgGQgPgQgWgFQgKgDgJACQgWAEgTAKQgaANgMAZQgBgDgDgDIgMgIQgRgLgUgIQgGgCgGABIgIACIghAJQgUAFgRANQgFADgDAFIgDgGIgFgIQgJgKgMgDQgJgCgKABIgSACQgUAEgWAGIgJADIgCgcQAAgTgDgSIgEgnIgBgoIABgXIAGABIUfAAIABBnQALgHANgEIADgCIAAAAQAHALACAJIgRAHQgPAGgNAMQALAHAIATQAIAPADAQIAKAlIADAKIgBAEIgCgDIgIgBIgCAAIgCAAIACAAIACAAIAIABIACADIAAADIACgBIAAAAIADAVIABASQgMgPgUgCQgTgBgSABQgSACgQAKIgbASQgDACgEgDQgPgJgQgGQgTgGgUAAQgYgBgHAPQgBAEgCABQgGAEgIACQAHAKgKgBIgtgDQgYgCgYABQgfABgOAWQgCAEgFACQgGACgHAAQgYACgZAFQgMADgJAIIgIADIgMgBIgTgDIgWgEQgbgEgWgBQAFADACAEQADAFgCAFQgFASgXAAIglgBIgkgCIgmgCIghgDQgRgBgRAAIgjACQgSAAgRAFIgmAJQgRAEgTABIgkAEIgnACQgUAAgSgBIgigDQgTgCgRAGIgiAMIghAMQgSAGgSgFQgTgFgTAEQgSAFgSAIIgiARQgPAJgOAKgAiABdIgiACIgjACIgnADIgnACIgeABIgkACIgeAEIgeADQgRABgRACQgSADgRAFQgTAFgSAHIgjANIglAOIgaALIgeAMQgTAHgOALQAOgLATgHIAegMIAagLIAlgOIAjgNQASgHATgFQARgFASgDQARgCARgBIAegDIAegEIAkgCIAegBIAngCIAngDIAjgCIAigCIAkgBIAhAAIAmAAIAhABIAgAAIAfgBIAMAAIAagCQATgCASgFIAigJIAOgEIAAgBIABAAIAGgDIgJgCQARgEAQgFQASgHATgDIATgDIAQgDIAlgGIABAAIABAAIANgBIAAAAIAAAAQALAAAJADIACAAIAAAAIABABIABAAQAMAEAMAAIABAAIAAAAIAHAAIABAAIAlgFIAdgDIABAAIAHAAQATgCARgFQASgFASgBQATgBASAAIALAAIAIAAIABAAIACAAIASAAQATAAASgEIAIgCIgIACQgSAEgTAAIgSAAIgCAAIgBAAIgIAAIgLAAQgSAAgTABQgSABgSAFQgRAFgTACIgHAAIgBAAIgdADIglAFIgBAAIgHAAIAAAAIgBAAQgMAAgMgEIgBAAIgBgBIAAAAIgCAAQgJgDgLAAIAAAAIAAAAIgNABIgBAAIgBAAIglAGIgQADIgTADQgTADgSAHQgQAFgRAEIAJACIgGADIgBAAIAAABIgOAEIgiAJQgSAFgTACIgaACIgMAAIgfABIggAAIghgBIgmAAIghAAIgkABgAl5BJIADgLIgDALQgGAFgIAAQgIAAgKgFQgRgHgKgOQgMgQgFgTQAFATAMAQQAKAOARAHQAKAFAIAAQAIAAAGgFgACAAkIAAAAIACAAIgCAAIAAAAIgBAAIAAAAQgFAAgFgCIgBAAIAAAAIgDgBQgWgJAAgPQAAAPAWAJIADABIAAAAIABAAQAFACAFAAIAAAAIABAAgAEMAUIAOAFIgOgFQgRgIgEgQQAEAQARAIgAJ/h/IAGgEIgGAEgAKmAJIAAAAg");
	this.shape_7.setTransform(97.5,5.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCC99").s().p("AEBQwIAAgVQAAgSABgRIAEgkQACgQAAgPIAFgIIgHgFIAGgjQADgSAFgRIAKgkIAKgiIADgJIAJgcIAMgjIAKggIAKghQAEgTABgUIABghQABgQgIgRIABAAQANgOAQgJIAJgFIAZgOQAQgJAUAAIAkAAQAUAAATACIAnAEQASACASADQATAEASAEQATAGAOAOIAMAOQAFAIAEAJQAEAHACAJIAAAAIAAAAQgHAMgKALQgMAOgIARIgRAiIgSAjIgRAgIgTAgQgHALgFANIgDAIIgMAjQgGAQgEATIgEAXIgCAIIgBAGIgFAZIgCAIIgBAEIgIAdQgEAPgDAQQgDATgGATQgDAJADAIIAAAFgAENOtIARgZIgRAZgAi2QwIAAgIQABgTAFgTIAJglQADgQAHgPIACgFIABgHIAHgnQADgSAFgSIAFgUIAEgSIAKgiIANgkIANggQAHgRAJgQQAJgPAKgPIAWggIASgdQALgRAHgSIAGgQIAEgIIAEgIIAPgeQAFgMAHgJQAXgRAagOQAMgGAOgBQASAAASACIApAHQAYAFAXAKQAOAHALALIATAVIAJAKQAFAGAEAIQAEALADAKQADAHABAJIAAAKIAHgBQgJANgHAOQgJAPgKAPIgQAXIgQAZIgTAeIgSAhQgJAOgHAPIgIATIgGAMIgNAgQgHASgFATIgOAkQgGAQgEAQIgBAFIgBAEIgBACIgKAkIgLAkQgFATgBARIAAAEgAEuFsIghgIQgRgFgRgHQgSgHgQgIIgfgRQgLgGgGgJIgBgCQgDgFgCgFIAAgEIAAAAIgBgCIgIgeIgLgmIgLghQgFgPgCgPQAAgDgDgCQgFgPgEgQIgHgmQgEgSgBgUIgDgkQgBgMABgNIAAgKQABgRgCgSQgCgQAAgQQABgTADgTQACgQAAgPQAFABAIgCQAJgDAKACQATAEASAIQASAIASAGQARAEATACQATACAUABQATgBASgEQARgDASAAIAmgBIAiAAQAVABARgHIAjgPQARgIASgCQAMgBAGgHIgBAGIAAAmQABATgBATQgBATADAUIADATIAAATQAAATACAQIACAjQAAATAEATIAGAkIAGAmIAIAmQAFASAHASQAIASAKAQIAAAFIADAAQAIAOAGAOIAAABIgEgCIAFAHIAAABIACAFQgKAAgNANQgNAMgSAGQgSAHgUADIgnAEIgmAGIgmAGIgjACIgiABQgTAAgUgEgAxrFMIAGgOIAGgQIAIgQIAHgRIAGgQIAGgRIAGgQIAFgPIAGgRIAFgSIAGgQIAHgSIAGgNIgBgFIAAgOIACgRQABgJgBgIIgCgQQgBgJABgJIABgTIACgQIADgNIAFgRIAGgRIAEgSQABgHgBgBIgBgPIAAgOIABgSQAAgKgCgKIgEgQQgDgJAEgGIAFgKQACgGgBgGIABAIQACALAJADQAIACAJABIAQACIARACIASACQAJABAJACIATAFIAQACIAQAEIARABIASAAIASACIASABIASABQAJACAKAAIASAAIATABIATAAIATgCIATgCIAPgBIASgBIATgCIATgCQAKgBAIgDIAFgCIAAACQgBANACAOIADATIAAAMIAAAQIAAASIgBAQIgDARIgEATIgDAOIgDAOIgCAUIgCAQIAAADIgBADIgEANIgEAQIgDARIgFATIgGARIgHASIgEAPQgDAIgCAHIgEAUIgEAUIgDAQIgEASIgFAPIgBADIgCADInbA6IAFgMgAz/jJIABAAQABgCgBgEIACgEIAGgNIAGgSIAFgSIAEgTIAFgSIAEgTQADgKAEgHIAIgSIAKgRIAKgQQAFgHACgJQADgKAGgFIABgCQACgKAEgIIAIgQIAFgQQACgJAEgIQAFgIAHgHIAMgKQAGgFAHgEIAQgJQAJgEAJgBQAJgCAKACQAJABAJAEIAQAHIAPAGIAJACQAGAEACAIIAGARQACAJAAAKIgBAUIgCASIgBATIgBASIACASIABATIAAAHIAAAKQAAACACADIAAAEQABAJgBAKIgBANIgCAWQgBALgGAKIgHAOIgIALIgHAIIgBgBIgCgQIgDgSIgGgTQgDgIgBgIIgFgQIgHgRIgFgLIgDgHIADAHQgJAHgEALIgGAQIgGAOIgGAPIgHARIgHASIgJATIgGAQIgHAQIgGAPIgGAPIgEAQIgDARIAAADQAAAUgEAUIgBAFIgBAEIgFARIgGASIgGARIgGARIgFAOIgFANIgHAPIgGAOIgHARIgHAPIAAABIgFACQgFAFgEAGQgFAJgGAHIgKAPQgGAIgHAHIgJAJgALHB7IgQgiIgPghIgOgjIgNgiQgGgQgIgQIgBgCQgJgSgGgSQgGgSgEgSIgIgjIAAgBQAAgDgDgCIgBgDQgIgTgMgRQgFgJgEgJQgDgLgCgJIAAgHIgCgNIgBgSIgDgQIgBAQIgDAQQgFACgCADIgJgFQgJgHgIgHIAAgBQgMgMgKgMQgMgRgGgTQgGgUgBgUQgCgSADgTQACgTAGgSIAJggQAEgSAGgQQAHgUAAgSQALgDAJgKQAPgPASgNIAOgJQAKgFAKgEQARgGATADQARADAMAMIAEAFQALANAEARQAEASABASIABAmIABAEIAAAJQAAAEAEAEQACAJgBALQAAASABARIAFAmIAFAiQABATAEASIAEAZIADAOIAIAjIAJAkIAIAnIABgCQABARAEAQIAKAlIAJAbQAIgKAFgOIAIgUIAKgdIAIgYIACgFIgBAAIANgZIAQgiQAHgQAFgQQAFgQAGgPIACAAIAAgFQAHgRAKgPIASgdIAPgbQAKgQAFgSQAGgRAMgPQgLgKACgQQADgTAPgNQAIgHABgFQABgHgFgFIgHgHQgLgJgPgFQAPAFALAJQgVAagVgIQgKgFgFgIQAOgLgCgTQgBgIADgHIABgDQAFgIAKgEIAMgEIAFAAQAHgBAHACIAAAAIAAgBIgBgCQgEgJAEgHQAEgGAKgFQAOgIAPgCIAIAAQAQgCAIAIIADgDQgFgHgDgLIAEgEIAAACIACgDQALgKAPgDQASgEARAKQAPAKAMAPQALAMAMAKIASgMQARgKATgFQATgEASgCQAUgBAPAKQAIAHADAGQADAJgIAKQgEAGgJgBQgSgDgSAFQgMACgKAGIgJAFIAJgFQgBAIAAAIIgDgBIgYgNQgPgJgOgMIgEgEIgKAHIAKgHIAEAEQAOAMAPAJIAYANIADABQgBALADALQAFAUgMARQgMAQgSAEQgNADgMAMQgKAKgNAGQgQAIgRAGQgTAHgPAOIgEgDIARgbIgRAbIgQAYIgBADQgJADgGAGQgHAGgEAJIgSAkIgBADIgRAgIgJARIgCADIgFAMQgIASgFATIgDANIgFAbIAAAEIgBAGIgFAYQgEASgFATQgFASgIAQIgOAgIgJATIgHANQgJARgHAPIgFAGIACACIgDAOIADgEIgBACIgQAiIgLAXQgJASgOANQgOANgPALQgPAKgUAAQgUAAgJgVgAO5m3IABgCIAAAAIAAAAIACgHIgCAHIAAAAIgJgDIAIAFgAQZoAQATgHANgJIADAAIAAAAIAGABIAAAAIAAAAQASAAAIgOIABgBIAAgBQADgGAAgGIgBgIIABAIQAAAGgDAGIAAABIgBABQgIAOgSAAIAAAAIAAAAIgGgBIAAAAIgDAAQgNAJgTAHQgKgHgHAAIgBAAIAAAAIgFABIAAAAIAAAAQgEACgEAEQAEgEAEgCIAAAAIAAAAIAFgBIAAAAIABAAQAHAAAKAHgAP2ocQgEgMgJgJQgNgOgRgGQgGgCgFgDIgEgFIAEAFQAFADAGACQARAGANAOQAJAJAEAMIgJgIIAJAIgAQ3pAQgCgKgFgIQgIgQgRgHQgIgEgGgHQAGAHAIAEQARAHAIAQQAFAIACAKIgLgNIALANgAQMpqQgCgEgEgDQAEADACAEgAJaigQADACAAADIAAABIAAACIgDgIgAJaigIAAAAgAmOjCQgTgGgSgHQgLgFgBgFIAAgCIAAgBIAMgIQAbgTAMgHIAfgSIABAAIABgBIAggVQAOgJAOgNQAOgMAOgLIAEgCIAAAAQANgKAOgHIAkgRIAfgNIAjgPIATgJIALgFQASgJARgJQARgKASgJQARgJARgKIAbgTQAQgJARgFIAhgKQAQgGAQgGIAhgNQASgJASgGQATgHATgDQAKgCAJABQAKAAAJADQASAFAPAMQAPANAHAQIgEgBQgJgCgLAHQgRALgIARQgIAQgMAOQgLAOgNAOQgMANgPAKIgfASQgQALgNANQgNALgJAOQgCgTABgUQABgSgJgGQgWAKgRAJQgOAJgQAGIgkAOIgfAMQgRAHgQAKIgYANIgGAEQgNAGgPAEIgCAAIAAAAIgeAJQgTAFgRAJQgQAIgPAJIgeATIgfASQgRAJgSAEQgSAFgPAIQgGAEgIABIgHAAQgOAAgOgFgAmKkiQgIgFgIgDIgRgGIgQgGIgTgHIgRgHIgSgFQgIgBgIgEIgPgHIgOgHIgOgIIgQgGIgRgHQgIgCgJgCQgJgCgIAAQgKABgKACQgGABgFAEIgBABIgMgKIgQgLIgOgLIgOgJIgPgKIgPgMIgNgLIgMgLQgHgGgFgJQgFgGgDgHIgEgJIgDgKIgFgRIgEgTQgCgNAEgJIAPAAQAKABAJADIAMAEIAFADIAHAFIAAgDIAAgCIABAAIADACIAFAEIABgBIAJADIARAFIASADIAPAFIASAEIATAFIASAGIARAFIAQAHIARAJQAIAFAJACQAJACAIAFIABAAIAHAEIAEABIgBgBIANADIAAABIAMAFIAOAHIAMAHIAPAJIARAKIAPAJIANAIIAPAKIARALIAQAJQAJAFAJADIASAHQAJADAJADIASAJIAQAHIABABIAEACIAAAAIgEACQgOALgOAMQgOANgOAJIggAVIgBABIgBAAQgVgOgIgEgAoSm7IAUgXgAr2oAIAZgbgAEilEQgUgHgGgUQgGgSADgUQAEgSAKgQQALgPAMgNIAagaQANgNALgOIADgFQAKgOACgRQACgRAAgTQAAgTgDgSIgHghIAPACIADABIARABIABAAIAAAAIAHgBIAIAAIAjgEIAYgCIgYACIgjAEIgIAAIgHABIAAAAIgBAAIgRgBIgDgBIgPgCIgBAAIgRgCIgPgDIgYgFIgjgIQgRgFgPgHQgRgJgPgMQgOgMgMgOQgOgPgJgSQgHgPgDgRQgEgVADgUIADgOIABgCQADgKAEgJQAJgRALgOIADAEQAJASASAKQARAKATgDQAUgDARgHIgBgJQAAgQANgLIABgBIAAAAQAGgHADgIIABAAQATgIAPAMQAKAIAGAHQgBAIACAJIABACQAGATARAJQAQALATAEQATAEATgBQAUgBAQgMQAOgLALgOQAJgLACgOQALAIAOADIAhAIQATAFAUAAIAmAAQATAAARACIAEAAQABAAAAAAQABABAAAAQAAAAABAAQAAAAABgBQAMgFANgCIABAAIAIgBQASgBAOAMQAPAMAEASIAAACQADAVgQAOQgNANgSAIQgRAGgSAEQgRAEgSgBIAAgDIAHgGIAIgHIgIAHIgHAGQAAgFgFgDQAFADAAAFIgEADIADAAQgEASgKAPQgKAPgQAKQgPALgSAFQgRAFgQAHQgJAFgJAGQgOAKgQADIgjAHIgJABIABgEIgDAEIACAAQgCAFAAAHIACAhIAAAAIAAAGIAEAmIABAIQAAAPgEAPIgMAkQgFATgKARQgJAPgMAPIgVAeIgXAeQgMAOgOAMQgQAMgRABIgDABQgMAAgMgEgAFxrGQATAAASgDIAjgIQATgFARgJQAQgJANgOQANgQAHgSQAFAIADAJIABACIAAAAIAAABQADAMgCAAIAAAAIgBAAIABAAIAAAAQACAAgDgMIAAgBIAAAAIgBgCQgDgJgFgIIgBgBQgEgGgHgFQAHAFAEAGIABABQgHASgNAQQgNAOgQAJQgRAJgTAFIgjAIQgSADgTAAQgRAAgRgBQgSgCgSgFQgSgEgRgIQgQgJgLgOIgXgfQgMgQgJgSQAJASAMAQIAXAfQALAOAQAJQARAIASAEQASAFASACQARABARAAIAAAAgALRsxQgFAOgKABQAKgBAFgOQACgGAAgFQAAgGgCgEQACAEAAAGQAAAFgCAGgALjs6IAAgBQAAgEgHgFIgFgEIgLgFIgGgBIgHgBQgUAAgSAEIA3ADIABACIAGgCIAFAEQAHAFAAAEIAAABgAE0tHQANAAAGgLIABgBIgBABQgGALgNAAIAAAAIgBAAIgIgBIAAgBIgCAAQgUgGgEgTQAEATAUAGIACAAIAAABIAIABIABAAIAAAAgACXtLIgJAAgAFCuMQATAIAGASQgGgSgTgIQgIgCgHAAIAAAAIAAAAQgLAAgJAGIgBABIABgBQAJgGALAAIAAAAIAAAAQAHAAAIACIAAAAgAEnuCIgJgFIAJAFgAwulMIAAAAgAtsloQgJgBgIgFQgJgDgHgHIgOgKIgNgKQgHgHgDgIIgHgSQgEgJgCgKIgCgSQgCgIgDgJQgCgKgFgIIgFgKIgDgFIAFgDQAHgGACgJIADgSQABgJgBgJQgCgJgEgIIgJgRIgJgPIABAAIAHABIAQABIATgBIAUgBIATgCIAQAAIAQgCIALgDQgDAJAAAIIgCASQgBAKACAIQACAJAFAJQAFAIAJADQAEACAEgDIASgHIACgBQgBAKABAKQACAIADAHIAHARIAHAQIAGATQACAJAAAJIAAAUIgBATIgEATQgCAKgHAGQgGAIgJACIgSAEIgUABIgGABIgMgCgAO4oVIAAAAgASyo8IAAAAgASzpMIAAAAgAvUpqIgHgBIgBAAIgLgCIgTgCIgSgGQgJgCgIgEIgQgIIgPgIQgIgFgHgHIgNgNIgKgOIgKgNQgGgHgDgKIgGgQIgHgQQgFgIgGACIgBAAIgCADQgDAFgHADIgPAKQgIAFgJgBQgKgBgJgFIgNgKQgHgGgDgIQgEgIgCgKQgCgIgBgKQgBgKACgKIAEgSIADgRQACgJAHgHQAFgGAHABIABACIACgCQAFgCAGgBQAKgCAKABIAEACIAKAFIAGACIAEABIACAAQARACASgIIAPgHQARgGASgDQARgDASABIAHAAIAFgBIAGADQABAJAEAJIAIARQAFAHAHAEIARAIQAIAEAJABQAJACAJAAQAKAAAIgCIATgGIAHgEQAFgCAEgFIAHgJIAWgIIALgDIAIABIABgBQAGgDAGgBIAGgBQAKgBAKAEIAHAEIAIAGIABABQALABAJgBQAKAAAJgEIACAAQAHgDAHgFIAKgIIAFAQQADAJAAAJIAAATIAAASIAAATQABAJgCAIQgBAKgDAIIgGARIgEAJIgDAFIgBADQgDAHgFAGQgGAIgHAHIgNANQgHAHgIAGQgHAHgJAEQgHAFgHAGQgHAIgJADIgPAFIgGADIgLADIgQACIgQAAIgTACIgUABIgTABIgQgBgAupq/IADAAIADAAIAQgBIAQgBQAKgBAJgCQAJgCAJgDQAJgEAJgEIAQgKIARgJIAPgLQAHgFABgGQgBAGgHAFIgPALIgRAJIgQAKQgJAEgJAEQgJADgJACQgJACgKABIgQABIgQABIgDAAIgDAAIAAAAIgBAAIgFAAIgHAAIgSgCQgJgBgJgCIgPgEQgIgDgHgFQgHgFgFgHIgNgOQgGgHgHgFQgEgEgDgEQgEgJgHgFQAHAFAEAJQADAEAEAEQAHAFAGAHIANAOQAFAHAHAFQAHAFAIADIAPAEQAJACAJABIASACIAHAAIAFAAIABAAIAAAAgAy1sRQAHAEAEAIQADAEABAFQgBgFgDgEQgEgIgHgEQgGgFgDgFQADAFAGAFgAxIr+IAAAAIAIgCQAIgEAGgHIACgBIALgMQAHgJAEAAQgEAAgHAJIgLAMIgCABQgGAHgIAEIgIACIAAAAIgCABIAAAAIgCgBIACABIAAAAIACgBgAzUsWQABAKAFAHQADAFAGACQgGgCgDgFQgFgHgBgKIAAAAIAAgBIAAAAQAAgHAEgGIAHgOQAEgGAJgCIgBACIgDAFQgCAFAAAFQAAAEABAEIADAGIgDgGQgBgEAAgEQAAgFACgFIADgFIABgCIACgBQADgEAEAAIAAAAIAAAAIABAAIACAAIgCAAIgBAAIAAAAIAAAAQgEAAgDAEIgCABQgJACgEAGIgHAOQgEAGAAAHIAAAAIAAABIAAAAgAzLsWIABgBIAAAAQACgGAEAAIABAAIAAAAIAEABIABABIgBgBIgEgBIAAAAIgBAAQgEAAgCAGIAAAAIgBABgAs7s2IACAAIACAAQAJgBAHgFQAJgFACgKIAAgEQAAgIgFgFQAFAFAAAIIAAAEQgCAKgJAFQgHAFgJABIgCAAIgCAAIgBAAIAAAAIgLgBIgBgBIgDgBQgGgCgEgDQAEADAGACIADABIABABIALABIAAAAIABAAgAtktXQAEgIAIgFQgIAFgEAIgAvcprIAAAAgAIOsYIAAAAgAt4tzIAAgIIgBgKQgCgJgDgJQgEgJgHgHIgPgMQgIgFgKgDIgHgCIALgDQAJgEAHgGIAOgJQAJgGAHgHIAMgKIAOgLIAOgMQAHgGAEgJIABgCQAIAGAGAIQAGAHAFAHQAFAJACAJIADAJIgGACIgOAGQgJAFgHAGQgHAHgGAIQgEAHgDAJQgDAJABAKQAAAKAEAIIAGAOQgCgBgHACIgRAFQgKADgHAHQADgGABgHgAKRt7QgTgBgUgFQgRgDgSgBQgUgBgTgGIgdgJIAAgCQgDgNgIgKQgHgKgLgFQASACARAAQAOAAAOgBIAdgFQAcgEAbgIQAMgEAJgGIgCACQgQANAJAJQABAJgCAHQgCAIgDADQgGAHgCAKQgDAOATgHQAKgDAAALQAAAHACADIgCgBgAFNuhQgQgKgOAJIAEgKQACgIAAgHQAAgIgEgDIgHgJIgCgDIgCgDIgCgHIAAgHIABgFIACgEQAIgPAMgMIAUgTIAIgFIAFgEQAKgIAMgEIADAAQgFAJACAKQAEAaARAUQAZAdAjAMIgPAAQgRACgRAGIgRAFIACACQgKAGgIAJQgIAJgGAJQgEAFgCAEQgDgOgNgHg");
	this.shape_8.setTransform(-72.2,17.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C6FFFF").s().p("AqDJBIgHgBIACgQIAHghIAAgBQAJgMANgMQAOgOATgHQASgGAQgIQANgGAKgKQALgMANgDQATgEALgQQAMgRgFgUQgCgLAAgKIABAAIAFADIgFgDIgBAAQAAgJACgIQAJgGAMgCQASgEASACQAJABAFgGQAHgKgDgJIQkA4QAGA4AAA6QgBAxgFAzgAqKDIIgCghIgBgPIAAgEIgCgVIACgCIAFgFQATgOgCgWIgEgGQgBAQgGAPQgEAJgIAFQADgJgCgKIgIgkIgGgjIgBgEIgEgfQgDgTABgSQACgTADgRIABgGQABgPgDgNIABglIAEgmIAEgjIAEgeIACgQIABgOIABgaIACgeQAPABAOAHQASAIAMARIAUAcQALAQAKAQQADAFABAFQgCgSACgTIAFghIABgFIADgOIgFgHIgFgmQANAJAOAHQAQAHARAFQATAGASAIQASAHALAPQAJALAGANQAGgIABgPQABgOgEgNQgIgTgLgSQgJgNgMgMQgQgPgTgNIABgDIAbAGQAVADAVAIIAYAJQARAIAQAJQARAKAIARIADAFIAAgQIgCgWQgDgQgGgPIgFgLQABgFgFgEIgBAAIgGgNIgDgGQAJgCAGgDQD7hjERAvIAHgBQAFAJAIgKQAMgPADgRIAAgEQAHATAUAEQAMACAMAAIANgBIABgBIAFgCQCshKDNApIACCoQgSAGgUgGQgRgFgKgJQgFgEgHgBQgVgCgTAKIgjARQgRAJgSgHIglgPQgPgHgSgCQgRgBgQAEQgRAFgRAJQgOAIgIAPQgMATgPgHQgXgKgagDQgSgDgTAAQgSAAgSADQgPADgKAJQgGAFgGAAQgJAAgJgEQgUgJgWACQgTACgSAHQgOAFgIANQgDAGgHgDQgUgJgYADQgSACgRAGQgPAEgMALQgOAMgEASQgEAQgTAJQgRAVADAUQAAAEADABQAXAJAZgDIAfgGQAQgEAPgIIAfgTQAMgJAPgGQALgEAKAIQAIAHAKABQAVADAUgFQASgFAQgKQAPgJANAKQASAOAXAFQAVAEAUgBQAXgBAWgFQAQgDAPgHIAggNQANgFAOACQAKACgCAJQgEAZAZAJQAUAHAVgDQATgDARgKIAYgPQASALAQANQAPALAUACQASACASgGQAPgGAQgBQALgBAJAGQAFACAEAAIACB2I0Qg5IgLAAIALAAIgBANIASAdQAJAQAFAQQAGASADATQADATAAAUIgCAgQgBASgEARQgEARgGARQgHAQgFARIgLAgIgLAjQgFASgGARIgHAAIgDgZgAqCisIAHAHIADAEIAKANIgKgNIgDgEIgHgHIgFgEIAFAEg");
	this.shape_9.setTransform(95.2,-75.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFF99").s().p("AqyJDIAAgHIAAgFIABgTQAMgHgJgTQgHgRgDgSIgGglQgDgSACgTQACgTAAgUQAAgSABgRQAKgGAEgMQAEgLABgLQADgRAAgSQABgTgHgVIAGglQADgTAAgTIAAgFQgPABgQgBIgBgpIAOAAIATAAIgIgKIgIgIQgEgEAAgFIgBgWIgBgWQAAgEgCgDIABgBQgCgRgBgRIgBgnQAAgTgBgTQgBgUABgTQACgUADgSQAEgSgBgTQAAgTACgTQADgTAAgUQAAgSACgSIAAgMIAAAAIABgMIgDADIAFgXIADgRIAHABQAOgKAPgJIAhgRQASgIATgFQATgEATAFQASAFASgGIAggMIAjgMQARgGASACIAjADQASABATAAIAngCIAlgEQASgBASgEIAmgJQARgFASAAIAjgCQARAAARABIAhADIAmACIAkACIAkABQAYAAAFgSQABgFgCgFQgCgEgFgDQAVABAcAEIAWAEIATADIAMABIgCABIAEgBIALABIgGgEQAKgIAMgDQAYgFAZgCQAHAAAGgCQAFgCACgEQAOgWAfgBQAYgBAYACIAsADQALABgHgKQAHgCAGgEQADgBABgEQAHgPAYABQAUAAASAGQARAGAPAJQAEADADgCIAagSQAQgKATgCQASgBASABQAVACAMAPIABAVIgBAnIAAAmIAAABIAAAJIAAAAIABAJIABgJQAFAQAAAUIABAhIABAnIgBAhIgEAmIgEAmQgCASgDASIgHAjQgEASgBARIgEAhQgBAEAAADIABAFQAEAMAIAKIAHAHQAKAIANAEIgCAEIABAEQADAOgFATIAAACIgXAAIgDAAIABAEQAAAPgCAWIgDAiIgCAgQgBATADASQADAWgBAWIAAAlIACAfIACAkIABAkQAAAPACAQIADAkQgCAUACAOIgDAiQgBASgGATQgFASgIASQgIATAAAUQAFACABgBIAAADgADRnmQAIAAAHgDIABgBIgBABQgHADgIAAIgBAAIAAAAIgBAAIgBAAIABAAIABAAIAAAAIABAAg");
	this.shape_10.setTransform(97.2,67);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-222.5,-175.6,418.7,301.6);


// stage content:
(lib.pronoun_Scene4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.btn_menu.addEventListener("click", openMenu.bind(this));
		this.btn_goNext.addEventListener("click", openNext.bind(this));
		this.btn_goBack.addEventListener("click", openPrev.bind(this));
		
		function openMenu(){
		
		 window.open ("../menu/main_menu.html","_self");
		}
		
		function openNext(){
		
		 window.open ("pronoun_Scene5.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("pronoun_Scene3.html","_self");
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// text
	this.instance_4 = new lib.texti();
	this.instance_4.setTransform(274.9,199.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Layer 1
	this.instance_5 = new lib.Copyright("synched",0);
	this.instance_5.setTransform(275,389.5);

	this.btn_goBack = new lib.goNext();
	this.btn_goBack.setTransform(57.6,352.3,1,1,0,0,180);
	new cjs.ButtonHelper(this.btn_goBack, 0, 1, 2, false, new lib.goNext(), 3);

	this.btn_goNext = new lib.goNext();
	this.btn_goNext.setTransform(494,352.3);
	new cjs.ButtonHelper(this.btn_goNext, 0, 1, 2, false, new lib.goNext(), 3);

	this.btn_menu = new lib.skiptomenu();
	this.btn_menu.setTransform(514.1,20.3);
	new cjs.ButtonHelper(this.btn_menu, 0, 1, 2, false, new lib.skiptomenu(), 3);

	this.instance_6 = new lib.pronounheader();
	this.instance_6.setTransform(275,18);

	this.instance_7 = new lib.I();
	this.instance_7.setTransform(287.9,204.8,0.902,0.902);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#0066FD","#CCCCCC","#FFFFFF","#FFFFFF","#FFFFFF","#996600","#FFCC00"],[0,0.184,0.788,0.937,1,1,1],170.8,205.9,170.8,205.9).s().p("AgVATQgEgFACgHQAEgQAPgMQAEgFAJgBQASAEgDARQgBAGgGAEQgJAHgEAKQgBADgDABQgDADgFAAQgIAAgFgJg");
	this.shape_11.setTransform(170.8,205.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.instance_7},{t:this.instance_6},{t:this.btn_menu},{t:this.btn_goNext},{t:this.btn_goBack},{t:this.instance_5}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(284.2,198.6,537.1,400.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;