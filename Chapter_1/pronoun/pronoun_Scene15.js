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



(lib.yousent2still = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag6CjQgIgGAAgJQAAgOAIgLQAIgNANAAQAVAAAAAaQAAAMgGALQgHALgLAAQgKAAgIgHgAgsBQQgHgIAAgJQAAgOAcgXIAzglQAcgZAAgUQAAgZgYgWQgXgVgYAAQgOABgVAOQgVANgFAAQgJAAgHgGQgGgIAAgJQAAgRAhgRQAegQAUAAQAqAAAkAiQAkAjAAAsQAAAhgUAXQgNAOghAYQghAYgMAQQgHAIgJABQgJAAgHgHg");
	this.shape.setTransform(-0.7,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.9,-33.3,27.8,66.7);


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


(lib.Usredheadmouthstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgrAyIgFgBQgIgQgTgFQgBAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAWAJA2ABIACAAQApgqAfg2IAAgBIADgBQgEBLglAwIgBAEQgmgGgogIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.7,-6.4,15.6,12.8);


(lib.Usguysmouthstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUAuQgegPgIgjIAAgEIArAAIAFAAQAhgRAggUIADABQgIBKhBAQIgFAAg");
	this.shape.setTransform(0.6,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgTA9QgngbgRgvIAAgFQBMASArg3IAFgFIANAAIAHAFQAKARgEATQgEASgQATQgLANgIAQQgWAMgcACIgFAAgAg0AAQAIAlAeAPIAFAAQBBgRAIhKIABgCIgEABQggAVghAQIgFAAIgrAAIAAADg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.6,-6.2,15.4,12.4);


(lib.Usgoldennotestill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("Ai4H0IgGgDQgJgHgHgIQgDgGAAgHIABgFIABgBIACgCIABAAIACAAQADADgBADIgCACQAAAFADAFIACACIACACQADAEAFADQAHAEAHADQAFABAFgBQAHgCAGgEQAIgPAGgQIAAgDIACgDIABgCQAGgWgDgXIAAgGIgBgBIgBgCQgCgJgFgIIgBgEIgBgBIAAgBIgDgJIAAgDIABAAIgBgDQgCgGABgHIAAgIIAAgEIAAgKQACgDAAgDIgBgFIAAgFIgDADQgFAJgIAEIgEACIgEAAIgUAAQgTgEgMgQIAAAAIAAgBQgGgGABgJIABgLIAAgKIAHgNIABgCIADgEIABgBQAMgUAXgIIAFgDQALgIAIgMQACgCADgBIAGgMIABgBIAAgBIABgBIAAgFIABgCIABgBIAAAAIgBgIIABgMIAAgRIAAgBIACgEIgBgDIABgBIABgCIAAgBIABgCIAAAAQACgDAAgDIAAgCIACgDQAHgKAMgEIAYABQAMAIAEAOIABAJQABANgFALIAAABQgCAHgEAHIgCACQgCAFgDAEIgJAIIgFAEQgBAEgEAEIgCACQgFAEgGACQgGAFgHgBQABAGgBAIIAAAGIAAAEIgCAJIgDAbIgBAVIgBAHIABABQADACAEgCIAPAAIABABIAAAAQAMACAJAJQAGAGAEAHQAHAMgBAPIgCALQgEAOgPADQgHABgHADIgOAAQAEAMAAANIAAAEQACAfgNAcIgIATQgCADgDADQgKAIgLAAQgIAAgJgFgAiJE0IgBAtQAAAHAEAHQAEAHAHADIAIAAQAOgCAMgIQAIgOgEgRIgCgEIgBgCQgBgDgDgCIgEgGIgCgBIgBgBIgCgCIgGgDIgEgEIgHgBIgBAAIAAAAIgIAAIgBAAIgJABgAiXDUIgGAHQgOANgSAFQgJAHgHAKIAAAAIgBACQgNAPACAVQAAAEACADQAEAGAFAFIACADIACABIABABQAEAAAEADQAFAAAEACIARAAIAEgCIABAAQALgKAGgLQADgMgBgNQgBgIACgHIAAgBIAAgCIABgBIgBAAIgBgCQAAgDgBgDIAAgDQgEgQABgSIgEAEgAhrBpQgKADgGAHQgGAPgBAPIABArIAIgDIAFAAIAAAAIAHgCIAHAAIAOgPIAAAAIAAgCIABAAIAAgBQAEgFACgGIABgCIAAAAIAAgCIABAAIAAgBIABgDIAAgBIABgCIABgTIAAgEIAAgBIgMgNIAAgBIgBAAIgBgBIgQAAIgBABgADJhXIgPAAIAAgBIgFgBIAAAAQgFgCgFgEIgCgCIAAAAIgFgBQgIgCgDgHIABgDQADgEAEAEQAFAEAGACQAGACAFAEIACABQALADALgCIAFgHIABgBQAFgJgCgKIgBgFQgEgMgIgKIgBgBQgGgIgDgKIgDgDQgDgFgBgFIgFABQgOABgPAAIAAgBQgHgCAGgFQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAABAAIAAgBIACgBIAHgDIAEgCIAKgEIgBgBIgBgEQgGgHgEgJIgCgDIgRgaQgCgEgEgDQgFgEgCgEIAAAUQAAAFgDADQgDADgCgDQgCgCABgDQACgPgDgPQgDgWgGgVIgCgJQgHAJgJAFIgKAGQgCADgEABQgEAFgGADIgEAGIgDALQAAAGgCAFQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAQgFgBABgHIABgJIAAgCQABgFACgEIAGgMQAHgMAMgHIAKgGIANgKIgDgEQgNgMgJgOIgBgCIgIgOIgBgDIgEgJIgBgEIgDgSIgCgKQgDgLAAgLIADgWQABgHACgHQAFgNAOgCIACgBIANgCIADAAIACAAIAAAAIACgBIATABIACAAQAMAEAHAKIAAABIADAEIABADIAAABIADAEQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABIAAABIACADIAAABQAEAIABAJIABAGQAEAUgDAVIgCALQgCAIgFAGIgHAKQgFAJgIAGIgCABIgFAEIgFAGIgBACIAAABIAAAEQAEAGADAIIAAABQAFACACAEQAKAEAJAFIAIAEIAUAIQAWAIANASIAEAHQAHAQgEAQQgCAFgDAEIgEAGQgEAKgJAFIAAABQgCAEgDAEIgCADIgBABQAFAEACAGQAEAHACAHQAOAQAEAVQADAUgOAOQgEADgGAAIgCAAgACQkXQgBAIAGAHQAHAHAEALIAFAJQADAEACAFIABACIAJAPIACADIAEAEIAJgEIAFgCIACAAIABgCIACgEIABgBIADgFIAFgKIgBgEQACgYgUgMIgBgCIgCAAIgEgBIAAAAIgCgBIAAAAIgJgCQgOABgNgEIgFgBIgBADgABantQgHACgGADQgGAEAAAGIgBADQgDAPAAAPQAAAKADAJIADAPIABAJIABABIADALIABACIABACQAFAGADAIQAEAHAFAFIAPAPQABgGAEgDQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAAAQADgDAEgBIACgBIAEgCIAKgNIABgBIAIgNIABgDIABgBIADgRQABgKgBgKIgDgRIgEgMIgGgSQgDgFgFgEIgIgHIAAAAIgBAAIgCgBIgBAAIgEAAIgEABIgGAAIgSABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.5,-50.5,45,101);


(lib.uswordsstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9900FF").s().p("AgaA2QgPgGAAgJQAAgEADgDQADgDAEAAQADAAAFAFQACACAIABIAMABQAFAAAHgCQAJgCAAgHQAAgNgTgFIgIgCQgNgDgFgDQgIgEAAgLQAAgUATgJIARgGQANgEAFgDQAFgBAEAAQAEAAADACQACADAAAFIACAIIABAIQAAAFgDACQgDADgDAAQgGAAgCgEQgBgCgBgIIgXAHQgOAGAAAJIAGACQAUAEALAHQAQAIAAATQAAAQgNAIQgMAHgPAAQgNAAgMgEg");
	this.shape.setTransform(5,2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9900FF").s().p("AAWAuQgNAHgOAAQgMgBgJgFQgJgHgCgLQgEgbAAgRQAAgOADgRQACgJAIAAQAEAAADADQACADAAAEIgBAOIgBAQIABAaQABALACAHIAGACIAGABQAMAAAOgDIAAgUIAAgRQAAgWACgPQABgJAIAAQAEAAADADQADACAAAFIgCAlIAAASIAAAVIABAHIAAAHQAAAEgDADQgDADgEAAQgHAAgCgKg");
	this.shape_1.setTransform(-4.8,3.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.1,-15.9,24.3,31.9);


(lib.ussentyoustill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhWBzQgYgcgGg3QgDgZAAhIIABgsQABgSADgHQAEgOANAAQASAAAAAhIAAByQAAB1BRAAQBOAAAAjGIAAgTIAAgPQgBgMAFgKQAGgLAKAAQAUAAgBAaIABAZIAAAYQAADgh1AAQg7AAgegjg");
	this.shape.setTransform(29.1,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhhB4QgpgigBg4QAAhCAog3QAug+BAABQBAAAAfAdQAiAegBBAQABBCglA3QgqA+hBAAQg4AAglgigAhEhBQgfAsAAAzQAAAlAdAYQAaAWAoAAQAtABAfgxQAcgqAAg0QAAgugWgTQgTgTgwAAQgtABgiAvg");
	this.shape_1.setTransform(-1.7,2.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgpCVQgGgFAAgJQAAgGASgjIAYgsQgjgtgKgYQgJgXgUgeIgigzQgCgGAAgFQAAgIAGgGQAGgGAIAAQAJAAAHAJIAQAZIAbApQAPAYAHAVQAHAQATAaIAthrIAVgpQAGgOAMAAQAIAAAGAGQAGAFABAJQAAAJgLASQgFAIgIAPIghBTQgTAtgSAjIgXAsIgJAVQgHALgLAAQgHAAgHgGg");
	this.shape_2.setTransform(-31.1,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.5,-29.8,91,59.8);


(lib.ussentstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9900FF").s().p("AhXCXQgpgSgBghQAAgJAHgGQAGgGAJAAQALAAAIAMQALARAJAGQATAMAkAAQAgAAAdgPQAlgSAAgiQAAgcgfgQQgbgNglgBQgjgBgYgNQgfgSAAghQAAgnAsghQArgeArAAQAVAAAbAIQAkAJAAAOQAAAUgUAAQgJAAgWgFQgWgEgMAAQggAAgYAQQgZASAAAXQAAATAhAIQAMACAgACQAzAFAcAbQAaAYAAAlQAAA0gwAfQgqAbg2AAQgoAAghgQg");
	this.shape.setTransform(16.9,2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9900FF").s().p("AhgCCQgcgggGg+QgEgcAAhSQAAgfACgSQABgUACgIQAGgQAOAAQAUAAABAlIAACBQAACDBbAAQBXAAAAjeIAAgVIAAgSQAAgOAFgKQAGgNAMAAQAWAAAAAeIAAAbIAAAbQAAD9iEAAQhCAAghgng");
	this.shape_1.setTransform(-15.2,2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.2,-33.3,68.5,66.7);


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


(lib.forus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZBIQgDgCAAgFQAAgGADgFQAEgFAFAAQAJAAABAMQgBAFgCAEQgDAFgFAAQgEAAgEgDgAgTAjQgDgDAAgEQAAgHANgJIAVgQQANgLAAgJQAAgLgLgKQgLgJgJAAQgGAAgKAGQgJAHgCAAQgEAAgDgEQgDgDAAgEQAAgIAPgHQANgHAJAAQASAAAQAPQAQAQAAATQAAAOgJAKQgGAGgOALQgPAKgFAHQgDAEgEAAQgEAAgDgDg");
	this.shape.setTransform(34.6,-1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgkAsIAAhCIAAgKIAAgJQAAgKAJAAQAJAAAAAQQASgSAWAAQAIAAAEAGQADAGAAAMIAAAHQAAAMgJAAQgJAAAAgKIAAgHIAAgIQgPACgIAHQgJAGgFANIAAAzQAAAKgKAAQgIAAAAgKg");
	this.shape_1.setTransform(-4.8,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgcApQgNgOgBgWQAAgUALgRQAOgUAXAAQATAAAKASQAIAOAAAUQAAAUgLAQQgNARgTAAQgQAAgMgMgAgQgTQgGAMAAAMQAAAOAHAIQAHAGAIAAQAJAAAHgHQAIgIABgOQABgkgWAAQgMAAgIANg");
	this.shape_2.setTransform(-15.3,0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AguBPQgDgDAAgEIABg6IABg4IAAgNIgBgNQAAgFADgCQADgDAEAAQADAAADABIAWgDIAPAAQALAAAOACQAUAFAAAIQAAADgDADQgDAEgEAAIgDgBQgNgEgTgBIgOABIgTADIAAAqQATgEAJAAIAdABQAKABAAAJQAAAFgDADQgDAAgEAAIgQAAIgNAAQgGAAgXAEIAABEQAAAEgDADQgDACgEAAQgEAAgDgCg");
	this.shape_3.setTransform(-25.9,-1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.6,-18.7,76.8,31.9);


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


(lib.ussent2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhLBfQghgcAAgxQAAg4AcgmQAegqAyAAQAjAAAXAMQAcAPAAAgQAAAVgYATQgLAHglAPIhRAoQAMASASAJQATAKAWAAQAPAAAVgGQAagHAHgMQAHgMAJAAQAIAAAGAGQAGAGAAAHQAAAZgoARQghAPggAAQgvAAgggYgAgsg6QgSAVgJAnIBDgeQAngTAQgOQgSgSghAAQgbAAgRAVg");
	this.shape.setTransform(47.9,7.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag8B6QgigMAAgXQAAgIAHgGQAHgHAIAAQAHAAALAKQAFAFATADQAOADALAAQAQABAOgFQAUgGAAgOQAAgegpgLIgVgFQgdgGgNgIQgRgLAAgZQAAguArgUQANgGAbgHQAdgJANgGQAJgDAKAAQAKgBAGAHQAGAGAAAKQAAAGADAMQACANAAAGQAAAKgGAGQgGAGgJABQgMgBgFgIQgEgFgCgTQgRAFgiALQghAOAAAUIANAEQAwAJAZAQQAkAVAAAsQAAAjgfATQgaAPglgBQgdAAgagJg");
	this.shape_1.setTransform(23.6,6.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhABdQgegfgCgzQgBgwAbglQAegtA1AAQAsAAAXAoQASAhgBAtQAAAvgZAjQgcAngtAAQglAAgagbgAgmgsQgOAaAAAdQAAAgARASQAPAPATAAQAVAAARgRQASgTABgfQADhTgxAAQgeAAgSAeg");
	this.shape_2.setTransform(1,7.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AA7CmQgFgSgEgiQgEgfAAgVIABgRIAAgSQAAgngVAAQgaAAgVAXQgMANgUAlQAABUgGAPQgHAOgNAAQgIAAgHgHQgHgGAAgJIACgJQABgGABgaIABghIABifIABglQAAgLgCgKQgCgKAAgLQAAgJAGgGQAHgGAJAAQASAAADATQADAVAAASIgBAwQgBAYAAAYIAAATQASgYAVgMQASgMAXAAQAlAAAOAYQAJAQABAmIACAqIAFAuQADAZAEAUIABAGQAAAJgHAGQgHAGgJAAQgPAAgFgQg");
	this.shape_3.setTransform(-23.1,1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag+BgQgggdABgvQgBgqAegwQAhg0AnAAQAWAAAbAKQAhANAAASQAAAJgFAGQgGAHgIAAQgGAAgFgEIgJgIQgNgKgeAAQgUAAgWAoQgUAlAAAYQAAAdAUARQATAQAbAAQANAAAPgHIAZgOQAGgDAEAAQAHAAAGAGQAHAHAAAIQAAAQgjAPQgdANgTAAQgsAAgegbg");
	this.shape_4.setTransform(-47.8,7.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.7,-33.3,123.5,66.7);


(lib.Usguysmouth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// Layer 1
	this.instance = new lib.Usguysmouthstill();
	this.instance.setTransform(0,0,0.366,0.366);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.03,scaleY:1.03},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.8,-2.2,5.6,4.5);


(lib.Usgoldennotes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Usgoldennotestill();
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance.cache(-24,-52,49,105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.5,-50.5,45,101);


(lib.Usredheadmouth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// Layer 1
	this.instance = new lib.Usredheadmouthstill();
	this.instance.setTransform(-3.4,1.8,0.436,0.436);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.97,scaleY:0.97,x:0.4,y:0.2},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.8,-1,6.8,5.6);


(lib.uswords = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.uswordsstill();
	this.instance.setTransform(6.4,34.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({alpha:0},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.8,18.8,24.3,31.9);


(lib.usbubblestill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.uswords();
	this.instance.setTransform(4,-40.1);

	this.instance_1 = new lib.forus();
	this.instance_1.setTransform(-4.5,-3.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgGCvQi+gBiHgzQiJgzAAhIQAAhHCJg0QCKgzDBAAQDCAACJAzQCKA0AABHQAABIiKAzQhNAdheAN");
	this.shape.setTransform(0,-4.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAmA3QghgCgYgUIgRgOQgSgSgOgSIgKgMQgFgFABgEQAAgEAEgDQAHABAHAGIADAEQAOAQALASQAfAfApALQACgJgBgJQgBgKAEgJIAKgWIADgHQAFgMAHgKIAGgIIADgCQAKAAgBAHIgBAFIgHALIgHALIgFAPIgDAFIgCAEIgDAFQgEAVgBAVQAAAFgFADQgFAAgCgCg");
	this.shape_1.setTransform(7.7,16.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAnCtQgMgSgNgRIgEgEQgGgFgFgCQgFADAAAEQi+gBiHgzQiJgzAAhHQAAhICJg0QCKgzDBAAQDCAACJAzQCKA0AABIQAABHiKAzQhNAdheANQABgHgKgBIgDADIgGAHQgIALgEAMIgEAGIgJAZQgEAJABAKQABAJgCAIQgrgKgfghg");
	this.shape_2.setTransform(0,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.9,-23.5,95.9,46);


(lib.usbubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.instance = new lib.usbubblestill();
	this.instance.setTransform(0,-17.7,0.045,0.045);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.57,scaleY:1.57},4).to({scaleX:1,scaleY:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.1,-18.7,4.2,2);


(lib.US = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.usbubble();
	this.instance.setTransform(5.3,-93.9);

	this.instance_1 = new lib.Usguysmouth();
	this.instance_1.setTransform(68.8,-96.5);

	this.instance_2 = new lib.Usredheadmouth();
	this.instance_2.setTransform(108.2,-47);

	this.instance_3 = new lib.Usgoldennotes();
	this.instance_3.setTransform(-61.5,-61.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CC33").s().p("AkyEgIjUgNQgTgSgVgNQgKgGgMAAQgwgzg8gfIg7ggQgygVgwgZIgjgOIgJgKQhEgmhBgsQgbgTgfgMQgXhbgLhdQA1AJAxgQQCeg1CngWIA2AfQAGADAGAGQBIAhBLgUIABgDIACgBQARAwAPAyQAGASAKALIACADQgKAlglALIgPAEIgFABQhpAah1gWQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAAAAAAAQgQgjglAHIgCgBIAAABIgDAAQgSAFgBATQgBALAJAHQASAPAVALIALAGQAQAKARAIQADADADAAIAAABIACABQAUATAcACIABABIA7AAQAQAKAQAMIABABQAAAAAAAAQAAAAABABQAAAAAAABQAAAAAAABQAMAFAQAAIAFAAIAGAGIAEADQARANAaAFIAEAAQAlAHAWAkQAAAAAAAAQAAABAAAAQABAAAAAAQABAAABAAIBnAAIAFAAQApgaAfgjIAEgBQBFgFBJAMIAAgCQAHgCAAgFQABgFgFgHIgCgEIgEgFIgZglQhKh5g5iMQAWARAngSIArAcIAOAMQAuAFAsgLIACgDIAFgFQAtAeAvgVIABgDIADgDQBhBvBLCEIABAFQgHAPgMAMQgNAOgUAGIgBADIgEABQg9AVhWgDQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAgBgBAAQgpgRglAGIAAAAIAAAAIgDABIgBAAQgGAKABANIABACIAPAPIABACIABAAIACACIAIAGQADAFAEADIAcAWQAKAZAigHIAFAAQAtAkBCgeQAygWAqgfIBpAAIAEAAQAlgLAOghIABgDQgDgTgHgOQgHgLgKgIIgHgEIgEAAIgBgDQh6hnhGicQAOAIAQAGQBfAgBegdQArAaA4AMQAXAFAZACIAHABIAFAAIAAADQAxAHAkATIgEABQgqAag+AGIAAAAIgBAAIAAAFIgFAAQgYAAgXAEIgBAEQgXAPgSAUIAAAFIAAADIgFAAQgBAQAHAJQAHAJAOACIAFAFQALAMAQgMQALgIAPgEQATAWAYgMIABAEQABADADACQAbgHAiAFIAAgCQAZgVAsgKQAOgDAVAAQAiATAigaQAAgBAAAAQABgBAAAAQAAAAABAAQABAAAAgBQAmAMApAHQABABAAAJIAAATIAAAUIAAADIgCAAQAAASgEAPQgHAhgTASIAAACQgrgTghAaQgFAeANAKIABAEQBaAZBaAEQALABgWgOIABgDQAhAEANgpIACAAQAFgvgLgfIgBgEIgCgDIAAgBIAAgFIgBgEQgJgTAAgfQAHAKADAOIACAIIACAAQAIATAPAKIAEACIAAAAIAJADQALADAOgCIASgEQACgBACgHQAAgDADgCIAEACIAABOQgJAggWAjIgMAPQgyA1ggAoQj7ARj3AVQlBAZlHgBIhkABgAlkj5IAHAAIABgBIAFgDQAIgBAEgEQAYA7AWA+IgCABQgmgtgfhEg");
	this.shape.setTransform(84.4,114.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC6633").s().p("AENCbQgVgJgJgXQAAAAAAAAQgBAAAAAAQAAAAgBgBQAAAAgBAAIAAgEIgJgiIgFgdIAFgIIASgdIABgFIAAgCIAHgDIAFAAQABgSABgWIAgA/IgJABQggASAKAlIABAGQACAbAYAIQAVAIAMgJIAAAMQgLgFgEAFQgEAEAAAHIgKADIgXAFgAkgBPIAEgBQARgbg1ATIAAgFIAAgFQAMgLAKgNIABgEQAhgOAmgJIAFgBQBEgIAtghIABgEQAYAFAcAAIAEAAQAuALAqAOIABADQgQABgIAHQguAuhGAZQgBAAgBAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQgEgKgGgBIAZgBQAKgBAIgLQARgZgOgZQgFgLgLgCQgTgCgUgBIAAAAQgMAFgIAKIgBABQgOAAgIAFQgaAXAVAcQAFAFAHABQAVABAWAAQgKACgOATIAAgJQgBgJgDAEQgXAdgUgPQADgCABgDQAGgQgLAHQgqAcAKgXQgBgZgiAaQgSANgIAAQgHAAABgKgAgbAzQAXgfAlgPIAFgBQALgEAMgDIAEgBQAoAGANAkIAAAEIAAADQgiAIgqgCQgFgFgGAEQgUAMgOAAQgOAAgKgLgABxhLQAYgLAUgGIAiAMQgaACgTAIIgFAAIgKABQgMAAgGgGgABahHQgRgHgaADIAAgCQgZgGgVgKIgFgEQgVgLgQgOQAFAAAEgCQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBIAAgFQASgNANgMQAMAIAQAGIBxAsQgXAMgYARIgEgBg");
	this.shape_1.setTransform(163.8,100.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("ACsEAIAAAAIgOgJQhOgrhdAwIgCAAQgChCgPAlIAAACQgjgMgygUIgBAAIgJgEIAAgEIAAgFQAKgEAIgGIABgBQAQgMAIgUIAAgEQAzAUBQAGQBWAFApguQAbgPAVgPIgBAHIAAAOIABAEQAIAjgEAuQAAAAgBAAQAAAAAAABQgBAAAAAAQAAAAAAAAQgNAigRAbQgCAFABADIgFADIgQgLgAjjifIAAgFIAAgJQAbgCApgBIAIAAIAAgCIADAAQAEgtAgAIQAEAAADACIACACQAkgCAVguIATgHQAzAXAuAgIgBAFQgiBEhgAIIAAgDQgcgJgXgMQAAAFACAEQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAABAAIgBADQgZAQgWACIgHAAQgjAAgdgkg");
	this.shape_2.setTransform(122.2,5.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6400").s().p("ACYCvQANALAJgjIAOg1IABgDIABAEQAfA/gyAugACgCAIAGgYQACgCACgDIABgEQAEASgDARgACtBQQgCgKAAgJIgBgEQgQgkgVAaQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAgBQgCgGAAgHIAAgFIAAgEQAXgLAKgVIAAgCIAKgBIAFgBIAGAAQATAHAZgKQAGgCgLAFQgWALgFAZQAAALACAEQABAHAEAFIgCAAIAAAFQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAAAAAQgGATgPgKQAAAFACADQAAAAAAAAQABABAAAAQAAAAABAAQABAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAIgDABgAAqgIIAAgCQgegBgTgHIgFAAIg5gXIgFAAQgPgBAjAPIACAFQgogJgZgcIACgCQgBgRgTgiQAyg9ByAEIAEAAIAHAAQgOgMgmADQAlgXAoALQACAAgDAGQgIATAKAFQAKAHAOACIAOABIAFAAIABAEQAqArg+gqQAhAaAGAXIgLADQgHABAQAWQARAXADgIQgFgvAYA0IAAgFIAAgKIgCAAIgEgOQgMgtgegaQAKgJATACIAAACQAcALAxgCIAbgCIAAADQgMACgKAHIgEADQglAdgWgRIgFAAQALAMADAUIAAAFIgDgBQgDgBgDgDQgCAGABADQABADAFAAIAAADIAAAFQABAMgEAJQgDAHgGAEIgVAHQAAAAgBAAQAAAAgBABQAAAAAAAAQAAABAAAAQgMACgPgBQAHAKARgBIAEAAIABAAIABABQgZALglAAQgQAAgTgCgAkogWIgBgFQgGgIACgPQAVguAygPIAFgBQABAAAAAAQAAAAABAAQAAAAAAABQABAAAAABQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABIgFADQgXAQgRAVQgGAIgDAHQgNAegJAAIAAAAgACvhUQAVAdATgXIADgBIAEABQAHAEgPAEQAngKgTAQQgDABgCADIgBABQgQAMgMAAQgUAAgFglgAkfhnQAJgbARgTIADgBQARgLAVgCQATgBAWAHQABAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAIgBAEIgDABIgFAAIghAAIgBADQgrALgRAlgAiahnIgBgDQgugZg0AKQAYgVAvACIAEAAQAbgEAKAOIABAEIAAAFQgDATgIAAIgDgBgAEmhyQgoABgWgDQAUgSAggGIAFAAQAWATgNAIIgEABgACRinQgPgDgOAFQgUAJgPgbIAAgEQANgMAPgHIAEgBIAFAAQAogBAWAQQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAgBAAQgbAKgwACIAAACQAYAAASABIALABIAEABQAWAGgIAMQgPgKgPgCgAkQipIAMgJIAfgXIAEgBQAqAAAVAXIADABIABADQAGAGgRAFQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBQgmgXgqAUIAAAFIgFAAIgHABQgHAAAAgGg");
	this.shape_3.setTransform(114,-66.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#009933").s().p("ABjD8Qglg9g/ghIgDgBQgCgEAAgFIAGgIQAMgOAIgQIABgEQAAAAABAAQABAAAAAAQAAAAAAgBQABAAAAAAQBGhpAyh8IgDABQg3ByhGBgIAAAFIAAAFIgBADIgDAEQgUAdgWAeIgEABQghAPgdgCQAdgdASgmIABgEQAAAAABAAQABAAAAAAQAAAAAAgBQABAAAAAAIAZgoQA8hmArhpIAAgEQhCB6hGB0IAAAFIAAAEQgBAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAAAQgSAnggAWIgDAGQgZAWgTAFIgFgBQgpgRgjgZIAEgBIABgEQBEhaBBhdQBDhiAohjQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAABAAAAQhyDGiICwIgCACQAAAAABAAQAAABAAAAQAAAAABABQAAAAAAAAIADABIAAADQgqgBgdANQAnAJgjAXIgEgBQgZgCACgdQAYgZAVgdQAVgdASgfIABgEQAvg6AlhFIABgEQA4hPA5hOIABgEIAAgFQAbAJAgABQASAAAUgCIAFAFIgKALQAGAvAoARQAWAJAggBQAQAAASgCQBTgMBIAJIgBAEQgGAXAHA0IgCAAQgDAXgNALIAAAFQgBAAgBAAQAAAAgBAAQAAAAAAABQAAAAAAAAQg+BOg7BVIAAAEIgFAcIgDABQgsAvglA0QgBAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAg");
	this.shape_4.setTransform(45.7,6.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgLAsQAAgBgBAAQAAAAgBgBQAAAAAAgBQAAgBAAAAQAEAAAEgDQAFgEAAgIQAAgJgFgEQgEgHgMACIgEADIgBAAQgDABgDAEIgDAFIgCgFQAAAAABAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAgBAAAAQAcggAZgYQAGAAAFAEIABACQAEAEABAGQgCAugsAfg");
	this.shape_5.setTransform(74,-117.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFCC99").s().p("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");
	this.shape_6.setTransform(98,3.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#996600").s().p("AglCAQgBgDAAgFQALgIAKgJQAOgOAJgRIAEgFQALgjgJgeIgEgBQgogthEgSIgFgBQgDgCgDgDQgCgEgBgFIAAgFIAAgrQAZgKAmAVQAnAVAgAZQAtAgAmAkQALAJABAVQgKAxgoAXIAAABIgBACQgJACgEAFQgFAEgCAAQgjAAgrANQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAg");
	this.shape_7.setTransform(92.5,-119);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("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IgEABIgDABIgCAAQgPAHgRAEIgLACIAAAFIABADIABAOIAAABIAAAgQgBATgCAQQgDAXgFAUIAAACIgUACIgCABQg7AHg1AMIgSAEIgMABQgbAFgWAJQgTAHgOAAQgOAAgLgHgAB7oFQAFgJAIgHIABgDIABgBQAPgMAQAFIAGACIAEABIAEABQAfASgeAAIgBgDQg2gXASAyQAIAHAUgFIAHgCQgMAIgKACIgGAAQgUAAgLgdgAixpRIgIgDQgOgFgMgGIAagHQAWgFAZgCIAGgBIAFAAIAAgCQAoABAWgMQAAgHgDgDIgGgFIANABQADAAACAEQgDAigsgGIgFAAIgEABQggAJgpAAIgNAAIANADIBtAbIACABQg6gDgtgOgAIyqRIgBAIQgDAJgFAFQgJgIAQgdIACgBQAHABACACQADADABADQgBAQgGANQAEgJgKgNgAg9wzIgBgEQgJgMACgXQAJgBACgNIACAAIABgEQAOgTASgPIAGgEIAEgBQANgHAGACQAIADAEAMIAAAFQABAngSAUQgQAVgmABIgDAAIgFAAgAAEyNQgiALgVAaIAAAFQAmAAgeAlIgDABIAAACQA3gLgBhIIgEABgAg4y4IAAACIAAABIAAABIAAgEg");
	this.shape_8.setTransform(84.3,-1.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C6FFFF").s().p("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");
	this.shape_9.setTransform(76.6,-17.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(3,1,1).p("EAkKANeIAAJKMhITAAAEAkKgWnMAAAAj8");
	this.shape_10.setTransform(-6,6.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(3,1,1).p("EgkIgWnMAxzAAAIACAAIWeAAEgkIgWnIgCAAEgkIAWoIgCqJIABiGMAABghA");
	this.shape_11.setTransform(-6.1,6.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C6FFFF").s().p("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gEgFIgCgCQAegQADgVIABgFIAngbIADgBIACAAQgBgRgKgLIAFgBIAhgOIAIgDIgKAAQgLgCgHgIIgEgGQgIAAAHgHIABAAIAAgBIAEgDIAEgEQATgSAGgOQgRAGgQAIIgEACIgFADIgTgbIACgCIAMgJQgWACgNALQgIAIADgJQAIgageAJQAAABgBAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQgSAegWgfIgGgCQgHgEAIgFQAdgSgKgIQgUAEgHAQQgRAigRgMQgTgIASgPIAFgFQgJgJgYAgQgKADgEgEIgDgDQAGgbgWAIIgDAFIgDAHQAkAVgegFQACAWgHgHQgFgGgCAAQgPgGgCgIQgEgegPARQAEAaAYAIIABADIgFAAQgiAFgSgFIABgEQAZg6goA5QAFAWAcgCIAEAAIAAACQgiACgRAPQgJgNAFgZIABgEIAAgFIgBAFQgIAngoADIAAAGIAAADIAAAEQAEALAJAFIABADIgFABQglAIgLgJIAAgEQgBgmgCArIgBAEQADAMALABIAHACQgUANgYgJIgBgPQgBgdgCAeQgDA4gWgqQgPAAAEATQACANAHAEIAKAGQgkAdgTgcQgDAqAfgIIAEgBQABAAABAAQAAAAAAAAQABAAAAAAQAAAAAAABQALAUglgDIAAAKIAAAFIAGAEIADABQADAKgEgEQgFgFgGgDQgUgLgZANQAOAFANAIIAIAGQAPALgcgJQgPgEAMATQAGAJATgCQgDAKAEADQAHAFggATQAEAHAGAGQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAQATAEASAHIAAADIgBADQgLAKgZgDQAWAIAMAUIAJAJQATASgigEQgUAaAsgLIAFAAQAPAEAHALQAAAAAAABQABAAAAABQAAAAAAAAQABABAAAAIgBAEQgGAOgRABQgEANANgDIAFAAQAVABAVADIAFABIgBAEQgHAKgLAFQABAIAIABIAFAAQAKAFAIAFIABAEQAAAFACADIADABIAMAAIAAACIABAHIABANIAAAAQgCARgMAGIAAAAIgBAAIgFACIgDABIAAAAIgLADIgDACQgsACg4gHIAAACQgbAGgQAPIAAAFIgEABIgFAEQgSAOgQAQIgHAHIgBABIgEAEIgDAEIgBABIgDACQgRAUgPAVIgIgFQAIgLAHgMIAB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");
	this.shape_12.setTransform(-6.1,-22);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00CC33").s().p("EgkIAGHIgCqHIABiGIADAAQACAHACAAIACAAIAAACQABAcAWgTQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIgOgIQBNgDA3APIADANIACAGIANAOIAGAGQBVABBUgCQACAAADgDIAbAKQgVAygLA7QgFAegIAaQgbBcg+A4IAAADQgBAAgBABQAAAAgBAAQAAAAgBAAQAAABAAAAQg1AdgmArQAAAWACAVIADAAQAwAgBQgKQAYgEAWAGQARASAWANQAPAIARAGQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAABABIAvAAQAAAAAAABQAAAAABABQAAABAAAAQABABAAAAQACACADABIAlAAQAHAAAHgCQAIgEAHgFIAUgQIAMgJIAWgSQADgDABgDIAKgFIABgEQBjAjBeglQAAABABgBQAAAAAAAAQAAAAAAgBQAAgBAAAAIAFAAQA9gLAYgzIgJgCIgOgBIAAAAIgFAAQibgGhqgzIAAgDIAAgPIB9jaIAAAAQgBADACACQAFAIAGAGQBvADBvgMQACgBADgCIABAAIgFAMIAAAEIAAAFIgDABQg0BphlA3IAAAFIgEABIgUAXQAIA9BOgBIAYgBQAOgCASABQAUABANAFIAIALQAYAdAnAOIAAADQAyADAogKQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBIATAAIAEAAQAygOArgWIAPgIQAAAAAAAAQABgBAAAAQAAAAAAgBQAAgBAAAAQAxAGAdgPQAbgFAZgMQAEgCADgDQADgEAAAAQATgagygDIgFAAIAAgCQiRgBhqgoIAAgFIAAgXQAngyAmgyQA8AEA8gKQAegFAjAJQAvAMAvAKQBbATBUgbQDrhOD9AuIACAAQALBcAXBbQAfAMAbAUQBBAsBCAmIAJAJIAjAPQAwAZAyAVIA7AfQA8AgAwAyQAMAAAKAGQAVANATATIDUANIAyAlIBkgBQFJACFBgaQD3gVD7gRQAggoAyg0IAMgQQAWgiAJggIAAhPQAfALgEgJIAjABQAiAOAggSQASgJgNgPIgDgBQgPgRgYgJQBLAAA4gHIAAgCQAcAMAZgLQAGgDAHgEIABgDQgCgagMgRQgMgQgWgHIgEgBQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBAAAAAAQhEgihqAIIAAgFIAAgFQATgUARgXIAFAEQAAAAAAABQAAAAAAAAQAAAAABABQAAAAAAAAQAbAMAdABQACAAADgEIABgDQgXgGgYgEIAAAAQBYAQBYgZIAAJIgA+NAuIgfgLIgBgDQgOgNAGgeQA5hDAwhLQAog9AihDIABAAQAIADAGAGQAUACATgCQgjCxhdBvIgZAcIAAACQgCAJAGACQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAAAAAIAAADIgtgPg");
	this.shape_13.setTransform(-6.1,112.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CC6633").s().p("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");
	this.shape_14.setTransform(186.3,78.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgSAgQgEgCgCgEQgCgDAAgGQgBgQAEgNQAEgOALgGQAFgBADABIADAAIABAAQAJACAFAMIADAHIADAHQgFgDgJABQgDABgDAEQgHAKAKAKQAHAGAJgGIAEgEIAAADIAAAEQgCAEgDADQgIAEgGgEIgIAEIgIABQgFAAgFgCg");
	this.shape_15.setTransform(-83,-83.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0000FF").s().p("AlTFkIAAgrQAEgdAHABIABABIAIANIAYAjQAAAHgOgEQgQgEgOAcIAAgFgAgfFjQgmgohIgHQgCgCgDgBQgMgCgHgGQgbgXgKgpIAAgGQBiBSCWgVQATgDgEATQAHAUgyABIAAACIgEABQgYAKgSASIgDgBgAD+guIgvgIIABgEQAWgOAGgeQAAAAABAAQABAAAAAAQAAAAABAAQAAgBAAAAQAHgRgPgBIAAAAIAAAFQgQBFhYgDIgFgBQhAgMg6gUIgDABQgkAUgogGQAhgfAugRIAEAAQA+g0AnhLQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQgCgYgGgTQgFgRgHgNIgJgcIgBgDQAAgEgDgBIAEgFIAHgCIACAIQAJAgAHAgIAAAAIALA2IgHAAQA4ANAsAYIAEAAIAGAHQAJAIAJAAIADAAQAPgDAOgVIABgEQBIABgBBiIAAAEQgCAIgHADQgHADgMgCIAAADIgDABQgRAgghAOIgFgBgAESjiQgEgGgBgHIgBgFQgDgigBglQAHAUAEAXIABAIIACAdIABAGIAAAHIAAADIgFgHg");
	this.shape_16.setTransform(-124.4,-21.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00CC00").s().p("AAzCqIABgDIABgGIgBgDIgDgCIgJgBIgIgCQhnAFhnAVQghgmgWgyQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAIABgDIASgsIABgEIAJgDIgEgMQgDgBgCgCIAAgDIADgSQAEABAIgeQAUhIAAhVIAAAAIAHAAQAhAkArAcIANAJIABACQAxARAygEQAUgBAVgFIAFARQgBAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAAAQgGAfAEAjQAIAIAHAJIANAQQAjANATAfQAAAAAAABQAAAAAAAAQABAAAAAAQABAAABAAQApAyAkA2QhOAHhMAUgAgXBBQAZAbAYAfIAQAWIgQgiQgLgagJgcIADgEIgCgDQgLAMgOgOQAAALgFAGg");
	this.shape_17.setTransform(-195.6,31.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F3D28D").s().p("Al1PxIABgDIAFgBIgBgBIgEABQgTAGgdgEIgFgBIgSgGQglgOgagbQgWgEgTACQhMAIg1gYIAAgFIAAgKQAfg7A2gjIAFgBQA3g1AehPQATgxAJg7QAKg7AXguQAWgqAggOIANgFIgNgOIhzhzIhIhKIAAgBIgBAAQBrgGBqgSIAZASIgCAGQAAAEACAEQAqBQAeBcQgLBKgcA3IgGgBIgBAFQgCAGgCADQgDAFgDADIAEADQghA8glA5Qg2BSg9BJIAAADQgBALABAJQACAPAJAJIADABIATALQAlAUAtALQAhAJAmADIARABIAAgDIAFgBIA0gcIAFABQAgAMgXAaQgBAIgNABQgGABgEgCQgWgNgXADQgKABgKAEQgJAEgKAHQAJgCAJABQANAAAOADQACgCAEgBQAEACADAEIAGABQADABgGACIgBACIAAADIgHAGIgEgEQgIgHgLgBIgDABIgBABIgBAAIgBADIABAEIAAAAIASAKIgKAIQgFgOgQAAIAAAAIgDABIgBAAIgBABIAAACIAAAEIAAABIADACIAGACQAGAFAGAAIgNALIgBABQAAgKgJgFIgCAAIgBABQAAAAAAAAQAAABgBAAQAAAAAAABQAAAAAAAAQgBAJACAJQgGADgHAAIgJABQgJAAgJgCgAjZO2IgBgBQAVgcgZgYIAAgCQgsABguAZIgEABQgsABgagRQgJgFgGgIIAAgFIAAgDIAAgCIAPgQIASgPQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQBOh2AhinIABAAIABAAIAAgDIACgIIgCgBIADgOQADgUAKgSQARgcAPgdQAKgJALAGIAGADIhThRQgRgKgIgWQgUg2gggwIABABQBQgHBSgNIADgEQA0BUAoBfIADABIAAAFQAGBdgrA/IAAAFIgBAEQhMB7hGCBQgGAbAPADIAAgCQBWArBrAGQAcABAdgBQAkgCgIATQgNALgJACQgGgSgVAAIAAABIgCAAIgBAAIgGgBIAFACIgBABIAAADIAAADIAAAAIgEgCIAAABIgDAAIgBABIgBABIAAADQABAKALADQACAKAIgBIgCADQgEAFgHgDIgDgCQAAgMgNgFIgDACQAAAAgBABQAAAAAAABQAAAAAAAAQAAABAAAAIAGAQIADADQABAAAAAAQAAABgBAAQAAAAA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");
	this.shape_18.setTransform(-154.2,28.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CC9966").s().p("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");
	this.shape_19.setTransform(-104.4,13.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("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IAFAEIAFADIADACIAAABIACABIAFAGQADACAAADIACACIACAEQAEARgIAPQgMAHgPADIgIAAgAq4jkIABAFQAOAfANgMQAVgBgHgVQgJgdgLAAQgKAAgMAbgArLjyIgFAAQAIgEAFgIIAEgEIAAAGIAAAEQAAADgBADIgBAKQgBgGgJgEgArxj5QgDgDgFAAIgBgBIgBgBIgDgDQgFgFgDgGQgCgDgBgEQgCgVAOgPIABgCIAAAAQAGgKAKgHQASgFANgNIAGgHIAEgEQgBASAFARIAAACQABADgBAEIABABIABAAIAAABIAAACIAAABQgCAHABAIQABANgEAMQgGALgKAKIgCAAIgDACIgRAAQgFgBgFgBgArKlZQghAVgYAeIABADQAYAYAWAQIABgFQAaglgNg1IgEABgAqylWQAAgIgBgGQAIABAFgFQAHgCAFgEIACgCQADgEABgEIAGgEIAIgIQAEgEACgEIACgDQADgGACgIIABAAQAFgLgBgOIgCgJQgDgNgNgJIgXAAQgMADgHAKIgDAEIAAACQABADgCACIgBAAIAAADIgBAAQABgNgBgOQAAgFANABQAXgGAPAIQAPAIAHAWIABAFQgQA6gvAcQgDACAAAHIgBAEIgEABIABgGgAqxmmQAAgPAGgOQAGgIAKgDIABgBIAQAAIABABIACABIAAAAIALANIAAABIABAFIgBASIgBACIAAABIgBADIgBABIAAABIAAABIAAABIgBABQgCAGgEAFIgBABIAAAAIAAACIgBABIgOAOIgHAAIgGACIgBAAIgFAAIgIADIAAgrgAqum0IAAAFQgLA1AigKQALgNADgRQAGgmgOAAQgJAAgUAUgA2qpOQgEgDABgGIAAgFIACgEIABgCIACAAIAFgBIAAAAQAcARAdARIADACIABAHIgCAFQgkAAgegbgAl3sJIgCgDIgKgPIgBgCQgBgFgDgEIgFgJQgEgLgIgHQgFgHABgHIAAgEIAFABQANAEAOgBIAJACIABAAIABABIABAAIAEABIABAAIABACQAVANgCAXIABAFIgGAJIgDAFQAQhHhHAOIABAFQARAwAiAJIAAAAIgBACIgBAAIgFACIgKAEIgDgEgAnMugQgGgGgDgHQgEgHgFgHIAAgBIgBgDIgEgLIAAgBIgBgJIgDgPQgDgJAAgKQgBgPAEgPIAAgDQABgGAFgEQAGgDAHgCQAMgCAMABIAFgBIAEAAIAAABIACAAIABABIABAAIAIAGQAFAEACAGIAHARIAEANIACAQQABAKgBAKIgDASIAAAAIgCADIgIANIAAABIgLANIgDACIgCABQgFABgDADQAAAAAAAAQgBABAAAAQAAAAAAAAQAAABAAAAQgEADgBAGIgOgOgAnTwjQgKAHgFAMIgBADQgCBLAoAfIAAgCQAggLABgpQAAAAAAAAQAAAAABAAQAAAAABAAQABABABAAIgBgFIAGAFQgJgJABgBQACgdgKgRQgNgUgfgBQgBAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAABg");
	this.shape_20.setTransform(-5.5,-4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-239.1,-139.9,466.1,293);


(lib.textus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_99 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(1));

	// vert2
	this.instance = new lib.VertLine("synched",0);
	this.instance.setTransform(75.8,152.9,1,0.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(54).to({_off:false},0).to({alpha:1},5).wait(41));

	// vert1
	this.instance_1 = new lib.VertLine("synched",0);
	this.instance_1.setTransform(-57.4,162.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(54).to({_off:false},0).to({alpha:1},5).wait(41));

	// horz
	this.instance_2 = new lib.HorizontalLine("synched",0);
	this.instance_2.setTransform(0.1,171);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(54).to({_off:false},0).to({alpha:1},5).wait(41));

	// period
	this.instance_3 = new lib.yousent2still();
	this.instance_3.setTransform(145.6,158.4);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(34).to({_off:false},0).to({alpha:1},5).wait(5).to({alpha:0},0).wait(56));

	// us
	this.instance_4 = new lib.ussentstill();
	this.instance_4.setTransform(0,161);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1.75,scaleY:1.75,y:159},9).to({scaleX:1,scaleY:1,y:161},5).to({x:94},5).wait(25).to({alpha:0},0).to({alpha:1},5).to({_off:true},1).wait(19).to({_off:false,x:116,y:149},0).wait(15).to({alpha:0},0).to({alpha:1},5).wait(11));

	// chose
	this.instance_5 = new lib.ussent2();
	this.instance_5.setTransform(-7,160);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(24).to({_off:false},0).to({alpha:1},5).wait(15).to({alpha:0},0).to({alpha:1},5).to({_off:true},1).wait(14).to({_off:false,x:8,y:149},0).wait(20).to({alpha:0},0).to({alpha:1},5).wait(11));

	// you
	this.instance_6 = new lib.ussentyoustill();
	this.instance_6.setTransform(-117,163);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(19).to({_off:false},0).to({alpha:1},5).wait(20).to({alpha:0},0).to({alpha:1},5).to({_off:true},1).wait(9).to({_off:false,x:-106,y:151},0).wait(25).to({alpha:0},0).to({alpha:1},5).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.2,127.7,68.5,66.7);


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


// stage content:



(lib.pronoun_Scene15 = function(mode,startPosition,loop) {
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
		
		 window.open ("pronoun_Scene16.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("pronoun_Scene14.html","_self");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// text
	this.instance_4 = new lib.textus();
	this.instance_4.setTransform(275,176.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// main
	this.btn_menu = new lib.skiptomenu();
	this.btn_menu.setTransform(514.1,20.3);
	new cjs.ButtonHelper(this.btn_menu, 0, 1, 2, false, new lib.skiptomenu(), 3);

	this.instance_5 = new lib.pronounheader();
	this.instance_5.setTransform(275,18);

	this.instance_6 = new lib.US();
	this.instance_6.setTransform(280.2,167.9,0.881,0.881);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.btn_menu}]}).wait(1));

	// btn
	this.instance_7 = new lib.Copyright("synched",0);
	this.instance_7.setTransform(275,389.5);

	this.btn_goBack = new lib.goNext();
	this.btn_goBack.setTransform(57.6,352.3,1,1,0,0,180);
	new cjs.ButtonHelper(this.btn_goBack, 0, 1, 2, false, new lib.goNext(), 3);

	this.btn_goNext = new lib.goNext();
	this.btn_goNext.setTransform(494,352.3);
	new cjs.ButtonHelper(this.btn_goNext, 0, 1, 2, false, new lib.goNext(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_goNext},{t:this.btn_goBack},{t:this.instance_7}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(284.2,198.6,537.1,400.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;