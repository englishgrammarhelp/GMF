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



(lib.youplwordstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9900FF").s().p("AAUAsQgLAGgNAAQgNAAgIgFQgIgGgCgMQgEgYAAgSQAAgMADgRQABgIAIAAQAEAAADADQACACAAAEIgBAOIgBAOIABAZQABALACAHIAGACIAGABQAKAAAOgEIAAgTIAAgQQAAgUABgPQABgIAIAAQAEAAADADQADACAAAEIgCAjIAAASIAAAUIAAAGIABAHQAAAEgDACQgDADgEAAQgHAAgCgJg");
	this.shape.setTransform(8.7,3.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9900FF").s().p("AgaAnQgNgNgBgWQAAgTALgQQANgSAVAAQATAAAJARQAIANAAATQgBATgKAPQgMAQgSAAQgPAAgLgLgAgPgSQgGALAAALQAAAOAHAHQAGAGAIAAQAIAAAHgHQAIgHAAgOQACgigVAAQgMAAgHANg");
	this.shape_1.setTransform(-1.5,3.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9900FF").s().p("AgSBHQgDgDgBgEQABgDAIgRIAMgVQgRgVgFgLQgEgKgJgPIgRgYIgBgFQAAgEADgDQADgCAEAAQAFAAADAEIAHAMIANATQAGAMAEAKQADAHAJAMIAVgyIAKgUQADgGAFAAQAEAAAEACQACADAAAEQAAAEgFAJIgGALIgQAnIgRAlIgLAVIgEAKQgDAFgFAAQgDAAgDgCg");
	this.shape_2.setTransform(-12.6,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.4,-15.2,36.1,30.5);


(lib.Youpredpointstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("AiOBIQAAgBgBAAQAAAAAAgBQAAAAgBgBQAAAAAAgBIAGgGQAGgGAGgEIAAgBIgBAAIgBAAIAAgBIAAgBIgBAAIgCgBIAAgBIAAgBIABgCIACgBIAFAAIACAAQAEgDAEABIABAAIADgBIABgBIABAAIACAAQANgDAOAAIAIgCQAjgEAigIQAigIAjgNIACAAQgCgLgBgSIgBgPIgBgJIACgBIABgCQAQgGANgKIACAAQAVgDAYAGIABABQgKAJgWgEIgCAAQgKAMgPAFIABAAQASgCANAFIAAACIABAAIgBAEIgBACIgCACIgGgBQgMACACABQACABAMABQABAAABAAQABAAAAAAQABAAAAAAQAAAAAAABQACAHgPADQAOABAMAFIAAACQAGAUgUgFQAEAAgBgFIgBgCQgKAJgJAPIgCAAQgtAPgwALIgDgKIADAKIgBABQglAJgpAGIgaAEIgoAEIgBgBgAA4g3IAAAAIAAAAg");
	this.shape.setTransform(-0.2,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiRBKIgCAAIAAgGIABgBQAAABABAAQAAABAAAAQAAABABAAQAAABABAAIAAABIApgEIAagEQAogGAlgJIABAAIAAAAQAwgMAtgPIACAAQAKgPAKgJIAAACQABAFgEAAQAUAFgFgUIAAgCQgNgFgNgBQAOgDgBgHQAAAAgBgBQAAAAAAAAQgBAAgBAAQAAAAgBAAQgNgBgCgBQgBgBALgCIAHABIABgCIACgCIAAgEIAAAAIgBgCQgMgFgTACIgBAAQAQgFAJgMIADAAQAVAEAKgJIAAgBQgZgGgVADIgBAAQgOAKgQAGIAAACIgCABIAAAJIABAQQABARADALIgDAAQgjANgiAIQgiAIgjAEIgIACQgOAAgNADIgCAAIAAAAIgCABIgCABIgCAAQgEgBgDADIgCAAIgGABQABgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAIABgBIAHgCQAGABAGgCQAJgDAKgCQALgDAKAAQAGAAAFgCIABgBQA9gJA0gTIgCAAQgOgPAEgVIAEgMIADgFIAAAAIAAAAIAFgEIAJgGIAGgEIALgHIAAACIABAAQALgDAbABIACAAIAAAAIAHABIADACIADABIAEADIAFAFQABAGgEAAQgUAAgSAGQASAHgFAHQgBAEgDADIACAAQANAFACARIAAACIAEADIACAHIgBAAIgBABQgLANgVABIAAACIABAEIgJADQguAOgwAMIAAAAIgkAKIgrAKIgGACIgUAEIgNAAQgQAAgOgEg");
	this.shape_1.setTransform(0,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.8,-7.6,29.7,15.8);


(lib.Youppointstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("AiRCBIAAgBIAAgIIABgDIAAAAIAAgDIAAgIIAAgBIAAgDIAAgBIAAgEIAAgDIABgCIAAgCIAAgBIAAgBIAAgBIAAgBIADgEIALgVQAHgPAFgSQAUhFAhg8IAAgBIAAgBIABgBQALgUANgUIANgCQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAIARgEIABAAIACAAIAWgBIANgBIAHgCIACgBQAVAAASACIABABIABAAIABAAQANACAMADIAEABQATAGAOAJIABACQgPAIgXgGIgDAAIgBAAIgBAAIAAAAIgLgCQgGgCgFgDIgCAAQgsgFgcAMIAAAAIgCABIgBAAIgHAGIAAACQAIATATAKQAEgBAFABIAAAAQATgBAKAGQAEADADAEQgDAFgEgBIgBAAQgogCgWAIIgCAAQgRgJgOgKQgGAqgRApQgRAngOApIgBACQgEAMgFALQgRAhgbAVQAAgOgDgNgAAmhiIAAgDQAGgVgLADIABAEQACAFAAAFQgRANgQgTIgBgCQgCgGAEgFIABAAIACgBQAagGAbABIAAABQAAAAAAAAQgBABAAAAQAAABAAAAQAAABAAABIAAAIIAAAAIAAACIAAACIABABQgFAPgKAAIgHgBg");
	this.shape.setTransform(-0.2,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiSCZQAcgVAQghQAGgLAEgMIABgCQAOgpARgnQARgpAGgqQAOAKARAJIACAAQAVgIApACIABAAQAEABADgFQgDgEgFgDQgKgGgSABIAAAAQgFgBgEABQgTgKgIgTIAAgCIAHgGIABAAIACgBIAAAAQAcgMAsAFIACAAQAFADAGACIALACIAAAAIABAAIABAAIADAAQAWAGAQgIIAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQgBAAAAAAQgPgJgSgGIgDgBIgCAAQgLgDgOgCIAAAAIgBAAIgBgBQgSgCgWAAIgBABIgHACIgNABIgWABIgCAAIgBAAIgRAEQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAIgNACQgNAUgLAVIgBAAIAAABIgBABQggA8gUBFQgFASgHAPIgLAVIgDAEIAAAAIAAgDIAAgBIAAgCIgBgBIAAgCIAAAAQAghgAshVIAPgcIAEgHIAAgCQAKgHANgDIABAAIAGgBIADgBIAJgCIACgBIAJAAIAAAAIATgBIADAAIAGgBIAHABQA7gBAsAPQAKADgBANQgTANgdgJIAAAAIAAgCIgDAAIAAAAQgSgEgSAAIgBAAIgBAAQADABgBAFIAAACQABAEgBAEIgCAMIgEAEIgCADIAGAAQAMADAAARQgHAJgRABQgvADgegNIgCAAQgaBPghBKIgKAXIgXAvIgBABQgIAKgNAFIAAgJgAAjhoIgBADIABAAQAQAGAFgUIAAgBIAAgCIAAgCIAAAAIAAgIQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAIABAAIgBAAQgbgCgaAGIgCABIgBAAQgFAGAEAFIAAACQAQATARgNQAAgFgCgFIgBgEIADAAQAHAAgFASg");
	this.shape_1.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.8,-16.2,29.8,32.5);


(lib.Youppointfatguystill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("Ah6BrQgBgNABgMIAAgCQgFgRgCgSIAAgBIgPgcQgGgKgLgGIABAAIAIgCQAAABAAAAQAAAAAAAAQAAABAAAAQABAAAAAAQAEAAAFAAQAHgCAFgEIABAAQAEgBADgDIAJgEIABAAIAFgCIACAAIAFgBIADAAIACgBQAGgBAFgEIAHgDIABAAQAGgCAGgDQADgBACgCIAAAAIAKgFIADAAQALgEALgCIAEgBIAXgCIAGAAIAdgBIADgBIAOgCIABgCIAAgCIAAgGIAAgEIABgHQACgDACgBIABgBQAGgGAIgGIAEgCIADgCQAJgFALgDQAMgEALAAIADAAIAAAAIAFAAIABAAIAJACQAKADAIAGQgCAJgOAEIAAABIgDAAIgKACIgEAAQgUACgOALIAagFIADAAIABACQASAUgeAEIAIAAIABAAIABgBIAEgBQADgBADABIAEABQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAEAFgBAFIAAAAQABALgZgBQgEgBACADIABAAIAAAAIANAAIADAAIAAAAIAEABIACABIADAAQADACABADIADAFQABAGgCAFIgDADQgEAEgGAAQgHABgIgBQgMAPgcgBIgBACQgvA5hNAZIgDAAQgcACgeAAIgRAAgAh3gTIgBABIgJAEIAKgFgAhygVIASgGIAAAAIgGADIgDABIgBAAIgHACIgBAAg");
	this.shape.setTransform(1.1,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhABtIACAAIAAgBIgGABQgcAEgigCIAAABIAAgIQAoABAjgDIACAAQBOgZAvg5IAAgCQAdABAMgPQAHABAIgBQAGAAAEgEIADgCQACgGgBgGIgDgFQgBgDgEgCIgCAAIgCgBIgFgBIAAAAIgCAAIgNAAIgBAAIAAAAQgCgDAEABQAZABgBgLIAAAAQABgFgEgFQgBAAAAgBQAAAAgBAAQAAAAgBAAQAAAAgBAAIgDgBQgDgBgEABIgDABIgBABIgBAAIgIAAQAegEgTgUIAAgCIgDAAIgaAFQAOgLAUgCIAEAAIAJgCIAEAAIAAgBQAOgEACgJQgJgHgJgCIgJgCIgBAAIgFAAIAAAAIgDAAQgLAAgMAEQgLADgKAFIgCACIgEACQgIAFgHAHIAAABQgDABgBADIgBAHIAAAEIAAAGIAAACIgBACIgOACIgDABIgdABIgEAAIgZACIgFABQgKACgLAEIgDAAIgKAFIAAAAQgCACgDABQgGADgGACIgCAAIgGADQgFAEgHABIgCABIgCAAIgFABIgCAAIgFACIgBAAIgJAEQgDADgEABIgBAAQgGAEgHACQgEACgEgCQAAAAgBAAQAAAAAAgBQAAAAAAAAQgBgBAAAAIAAAAQADgEAGgBQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAAAIADgCIABAAIABgBIAAAAIADgCIAAAAIADgBIAAAAIAJgEIABgBIAAAAIAEgBIABgBIABAAIAGgCIACAAIADgBIAGgDIABAAQAIgBAGgEIAHgDIAHgEIABAAIADgBIACgBIABAAQAHgEAIgCIAAAAQAKgDAJgBIACABIAIgCQAkAAAcgJIACgCQADgEABgGIAAgDIALgMIABgCQAagQAigBIADgBIAFAAIAKABIALABQAKABAEAIQACAOgJACIgCABIgOABIAAAAQgPACgGAEIABAAIABAAIAVAhIAAADIAEAKIAAACIAAAGQACAMgCAKIgDACIgFAFQAAgBgBAAQAAAAgBABQgBAAAAAAQgBAAAAABIgBABIgHABQgEABgGgBQgEAAgDACIgKAGIgGACIgKABQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAABgBAAIgDADIgBAAQghAxg9ATQgMADgKAFIgGACQgGAFgIAEIAAgDg");
	this.shape_1.setTransform(1.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.2,-11.2,33.3,22.5);


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


(lib.pronounpickedipicked = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhFCFQgbgcAAgrQAAg0AcgeQAbgfAqAAQAXAAAMAHIATAOQADhTADgcQADgSAPAAQASAAAAATQAAAcgIBcQgDAbABAdQgBBBAHAhIAAAEQAAAIgGAFQgFAFgHAAQgMAAgGgRQgOAKgPAFQgPAGgOAAQgpAAgbgbgAgtADQgRATAAAnQABAZARATQATASAYAAQAOAAALgGQAHgEAPgMIAFgGIAAgiIAAgXIAAgXQgHgPgMgHQgNgIgQAAQggAAgQASg");
	this.shape.setTransform(48.4,1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhCBUQgegZAAgsQAAgwAZgiQAbgmAsAAQAfAAAUALQAZAOAAAbQAAAUgWAQQgJAHggANIhJAjQALAQARAIQAQAJAUgBQANAAASgEQAXgHAHgKQAHgLAHAAQAHAAAGAFQAFAFAAAHQAAAWgjAQQgeANgcAAQgrAAgbgWgAgng0QgQATgIAjIA8gbQAhgQAPgOQgQgPgdAAQgXAAgQASg");
	this.shape_1.setTransform(26.1,6.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AA0CVQgLgUgUgbIghgvIgjAZQgCAfAAAcQAAAJgFAGQgGAFgIAAQgUAAABgaIABgxQADggAAgRIABhBIABhEIgBgVIgBgUQAAgJAFgGQAFgFAJAAQAJAAAFAFQAFAGAAAJIABAVIABAVIgBA/QgBAiAAAgQAagUAXgXIArgsQAHgHAHAAQAIAAAGAGQAGAHAAAIQAAAGgGAHQgYAcgjAeIArA6QAeApAAAMQgBAIgFAGQgGAFgJAAQgKAAgGgLg");
	this.shape_2.setTransform(5.2,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag3BVQgcgaAAgpQAAgmAagqQAdguAkgBQASAAAYAJQAeAMAAAQQAAAIgFAGQgFAGgHgBQgFABgEgEIgJgHQgMgJgZAAQgTAAgTAkQgSAgAAAWQAAAaARAPQARANAYAAQALAAAOgFIAWgNQAGgDADAAQAHAAAFAGQAGAGAAAHQAAAPgeAMQgaAMgSAAQgmAAgbgYg");
	this.shape_3.setTransform(-16.9,6.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgSCNQgFgGAAgIIgBgjIgBgjQAAgTACgbQACgaAAgSQAAgJAGgFQAFgGAIAAQAHAAAFAGQAFAFAAAJQAAASgCAaQgCAbAAATIABAjIABAjQAAAIgFAGQgGAFgGAAQgJAAgFgFgAgMhrQgGgGAAgKQAAgJAGgHQAHgGAIAAQAJAAAHAGQAHAHAAAJQAAAKgHAGQgHAHgJAAQgIAAgHgHg");
	this.shape_4.setTransform(-32.5,1.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhKCeQgGgFAAgJIAAhOIAAhMQAAgrgCgjIgEgoQAAgNAGgKQAFgMAMAAQAIABAEAFQAGAFAAAIIgBAGIgBALQAQgLAQgGQAPgFANAAQAogBASAkQAQAcAAAvQAAAngYAcQgYAdgnAAQgSAAgYgHIAABeQABAJgGAFQgGAGgIAAQgIAAgFgGgAgRhmQgLAFgQAPQADAsAAAwQAVAHAUAAQAYABANgSQALgOAAgZQAAgkgJgSQgIgRgSgBQgQAAgOAJg");
	this.shape_5.setTransform(-49,11.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.1,-29.8,124.3,59.8);


(lib.pronounperiod = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgQARQgHgHAAgKQAAgIAHgHQAHgIAJAAQAJAAAIAIQAHAHAAAIQAAAKgHAHQgIAHgJAAQgJAAgHgHg");
	this.shape.setTransform(0.2,15.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-29.8,14.1,59.8);


(lib.pronouniipicked = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhVCPQgFgFAAgJQAAgJAFgFQAGgGAIAAQANAAAdgEQACgQAAgUIgBghIgCghQAAgrAGhEIgZABIgaABQgIAAgGgGQgGgFAAgKQAAgSATgBQAQgCArAAQAlAAA6AJQASACAAATQAAAJgHAFQgGAEgHAAQgNAAgTgCIgfgEQgFA5AAAxIABAiIABAiQAAASgCAQIA+gBQAIAAAGAFQAFAHAAAIQAAAIgFAGQgGAGgIAAIghAAIghABQgLAAgZADQgaAEgNAAQgIAAgGgGg");
	this.shape.setTransform(0.1,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13,-29.8,26,59.8);


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


(lib.youobplsentstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9900FF").s().p("AhWBzQgYgcgGg3QgDgZAAhIIABgsQABgSADgHQAEgOANAAQASAAAAAhIAAByQAAB1BRAAQBOAAAAjGIAAgTIAAgPQgBgMAFgKQAGgLAKAAQAUAAgBAaIABAZIAAAYQAADgh1AAQg7AAgegjg");
	this.shape.setTransform(29.1,-1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9900FF").s().p("AhhB4QgpgigBg4QAAhCAog3QAug9BAAAQBAAAAfAcQAiAegBBCQABBBglA2QgqA/hBgBQg4ABglgigAhEhAQgfArAAAzQAAAmAdAXQAaAWAoABQAtAAAfgxQAcgqAAgzQAAgvgWgTQgTgTgwAAQgtAAgiAxg");
	this.shape_1.setTransform(-1.7,-1.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9900FF").s().p("AgpCVQgGgFAAgJQAAgGASgjIAYgsQgjgtgKgYQgJgXgUgeIgigzQgCgGAAgFQAAgIAGgGQAGgGAIAAQAJAAAHAJIAQAZIAbApQAPAYAHAVQAHAQATAaIAthrIAVgpQAGgOAMAAQAIAAAGAGQAGAFABAJQAAAJgLASQgFAIgIAPIghBTQgTAtgSAjIgXAsIgJAVQgHALgLAAQgHAAgHgGg");
	this.shape_2.setTransform(-31.1,-1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.5,-33.3,91,59.8);


(lib.Youppredpoint = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_18 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(18).call(this.frame_18).wait(1));

	// Layer 1
	this.instance = new lib.Youpredpointstill();
	this.instance.setTransform(-11.5,8,0.999,0.999,68.7,0,0,-11.5,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({rotation:-6.3,x:-11.9,y:4.7},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.6,0.3,25.5,33.4);


(lib.youplword = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.youplwordstill();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({alpha:0},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.4,-15.2,36.1,30.5);


(lib.youplbubblestill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEBJQgFgFAAgEQAAgDAEgDQACgCADAAQACAAAEAEQADAFAAAEQAAADgDADQgCACgEAAQgBAAgDgEgAgFAhIAAgKIgBgMIABgnIAAgnQgBgJAHAAQAIAAAAAJIAABkQAAAJgIAAQgHAAABgJg");
	this.shape.setTransform(39,-2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgZAzQgOgFAAgJQAAgEADgDQADgDAEAAQACAAAFAFQACACAIABIALACQAFAAAGgCQAJgDAAgGQAAgMgSgFIgHgCQgNgDgFgDQgHgEAAgKQAAgTASgJIAQgGIARgGQAEgBAEAAQAEAAADACQADADAAAEIABAIIABAIQAAAEgDADQgCACgEAAQgFAAgCgDQgCgDgBgHIgVAGQgNAGAAAJIAFABQAUAEAKAHQAPAIAAASQAAAPgNAIQgLAGgOAAQgNAAgLgEg");
	this.shape_1.setTransform(32.1,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgXBIQgDgDAAgDQAAgKAUgsIghg+IgFgGQgCgFAAgCQAAgFADgDQADgCADAAQAFgBACAEQAQAWAQAoIAOggQAHgRAHgMQADgEAFAAQADAAADACQADADAAAEIgBAEIggBEIgQAqIgGASQgDAHgGgBQgEAAgCgCg");
	this.shape_2.setTransform(22.5,2.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAUAsQgLAGgNAAQgNAAgIgFQgIgGgCgMQgEgYAAgSQAAgMADgRQABgIAIAAQAEAAADADQACACAAAEIgBAOIgBAOIABAZQABALACAHIAGACIAGABQAKAAAOgEIAAgTIAAgQQAAgUABgPQABgIAIAAQAEAAADADQADACAAAEIgCAjIAAASIAAAUIAAAGIABAHQAAAEgDACQgDADgEAAQgHAAgCgJg");
	this.shape_3.setTransform(12.9,0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgfBHQgMgCAAgHQAAgJAIAAIALACQAJACAJAAQAPgBAIgRQAEgLAAgXQgFAJgHAEQgGAFgIAAQgQAAgLgLQgLgMAAgQQAAgZAPgPQAPgQAXAAQAJAAAGACQAGACADAFQAKAAAAALIgCARIgDASIgCAdQAAASgDAMQgFAPgJAHQgLAJgTAAQgMAAgJgCgAgQgtQgJALAAARQAAANAGAFQAFAHAKAAQAIAAAIgJQAIgKABgJIAFggIgIgEIgJgBQgPAAgKAMg");
	this.shape_4.setTransform(2.7,2.7);

	this.instance = new lib.youplword();
	this.instance.setTransform(-19,-2.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(3,1,1).p("AFECHQALgEAMgEQCQg1AAhKQAAhJiQg1QiQg1jLAAQjKAAiQA1QiQA1AABJQAABKCQA1QCQA1DKAAQByAABfgRADWCiQACAAACgB");
	this.shape_5.setTransform(0,-3.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AACA2QgEgEACgLQAAgJgDgIQgIgQgNgLIAAABIgeAAIgBgCQgIgIAJgFIABgBIAAAAIAAAAIAEAAIAEAAIAAgBIAAAAQgLgIALgIQATAEAPAMQAHAFAAAGQAJAMAHAQIABABIAAgBIABgDIAMgmQgBgCACgEIADgIIAEgFIAHgHQAAgHAGgDIAGACQAIACgCAHIgBACIAAAEIgCAKQgCALgHAJQgLAegPAgQgDAGgGAEQgJAAgBgGg");
	this.shape_6.setTransform(26.5,15.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AEVC/QgHgQgLgOQAAgGgHgFQgQgMgTgEQgKAIALAIIgEABIgEAAIAAAAIgBAAIAAABQhfAQhyAAQjKAAiQg1QiQg0AAhJQAAhKCQg1QCQg1DKAAQDLAACQA1QCPA1ABBKQgBBJiPA0IgXAIQACgHgIgCIgGgCQgGADAAAHIgHAHIgEAFIgEAIQgBAEAAACIgLAoIgBADg");
	this.shape_7.setTransform(0,-2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.instance},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.6,-22.7,101.2,44);


(lib.youplbubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(1));

	// Layer 1
	this.instance = new lib.youplbubblestill();
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.6,-22.7,101.2,44);


(lib.Youppointfatguy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_18 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(18).call(this.frame_18).wait(1));

	// Layer 1
	this.instance = new lib.Youppointfatguystill();
	this.instance.setTransform(-5.5,3.2,0.999,0.999,58.9,0,0,-11.8,3.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({scaleX:1,scaleY:1,rotation:0,x:-11.8},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.1,-7.1,36.4,40.1);


(lib.Youppoint = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.instance = new lib.Youppointstill();
	this.instance.setTransform(-15.6,12.7,0.999,0.999,-11.2,0,0,-14.3,12.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:16.7,x:-13.7},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.7,-20.9,35.5,37.6);


(lib.textyouplobj = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_109 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(109).call(this.frame_109).wait(1));

	// vert2
	this.instance = new lib.VertLine("synched",0);
	this.instance.setTransform(37.9,154.9,1,0.65);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({_off:false},0).to({alpha:1},5).wait(46));

	// vert1
	this.instance_1 = new lib.VertLine("synched",0);
	this.instance_1.setTransform(-94.1,163.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({_off:false},0).to({alpha:1},5).wait(46));

	// horz
	this.instance_2 = new lib.HorizontalLine("synched",0);
	this.instance_2.setTransform(0.1,172.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(59).to({_off:false},0).to({alpha:1},5).wait(46));

	// period
	this.instance_3 = new lib.pronounperiod();
	this.instance_3.setTransform(145.1,161.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(34).to({_off:false},0).wait(15).to({alpha:0},5).wait(10).to({_off:true},1).wait(45));

	// picked
	this.instance_4 = new lib.pronounpickedipicked();
	this.instance_4.setTransform(-25.9,161.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(24).to({_off:false},0).to({alpha:1},5).wait(20).to({alpha:0},5).wait(15).to({x:-27.9,y:149.8},0).to({alpha:1},5).wait(15).to({alpha:0},0).to({alpha:1},5).wait(16));

	// i
	this.instance_5 = new lib.pronouniipicked();
	this.instance_5.setTransform(-124.9,164.8);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(19).to({_off:false},0).to({alpha:1},5).wait(25).to({alpha:0},5).wait(10).to({x:-116.9,y:150.8},0).to({alpha:1},5).wait(20).to({alpha:0},0).to({alpha:1},5).wait(16));

	// you
	this.instance_6 = new lib.youobplsentstill();
	this.instance_6.setTransform(0,167);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:1.53,scaleY:1.53,y:166},9).to({scaleX:1,scaleY:1,y:167},5).to({x:97.2,y:166},5).wait(30).to({alpha:0},5).wait(20).to({x:95.2,y:153},0).to({alpha:1},5).wait(10).to({alpha:0},0).to({alpha:1},5).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.5,133.7,91,59.8);


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


(lib.Youplural = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.youplbubble();
	this.instance.setTransform(-40.7,-66.5);

	this.instance_1 = new lib.Youppointfatguy();
	this.instance_1.setTransform(49.2,-9.6);

	this.instance_2 = new lib.Youppredpoint();
	this.instance_2.setTransform(12.3,5.9);

	this.instance_3 = new lib.Youppoint();
	this.instance_3.setTransform(-29.6,0.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.3,1,1).p("AggAAQAAgHAKgHQAKgGAMAAQANAAAKAGQAKAHAAAHQAAAIgKAGQgKAHgNAAQgMAAgKgHQgKgGAAgIg");
	this.shape.setTransform(47.9,71.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1,1).p("AXjJCIAAgBIAA4TMgvFAAAIAAXRIAAAEIAAHQMAvFAAAg");
	this.shape_1.setTransform(8.9,-5.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC00").s().p("AApDaIgBAAQgLgBgNgGIgBgCIgEgFQgFgIgFgKQgCgIgCgKIgBgDIgCgGIAFgCQgFgJgCgLIgBgGQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAIgCgKIAAgFQgFgCAAgGIACgHQgCgHABgIIABgEIgBgKIAAgLIABgaIAAgMIAEibIABgaIgBAAQgFgSgVgBQgIgBgCAEQgFAIgDACQgBABgBAAQAAABgBAAQgBAAAAgBQAAAAgBgBIAAgCIAAgCQgBgDgCgCIgHgLIgCgEIAAgBIgBgDIgCgLIAAgDQAOgHAPgCQAPgCAQABIACABIADAAQAiAOAAAwIgCABIgBABIgCABQgLAFgFALIgBADQAAAWAVAEIAAAFIAAAEQgBAKgFAHQgCANAFAGIABABIABACIADAIQACAMgKALIgCAAIgBgCQgIAJgEAMQABAlAZgUIABgBIAAACQAAAPgIAIIgCABIgBAIIgEAQIAAACQAFAKAMACIACAAIAFANQAFAHAFAGIACAAQALACAJgBQASgCAMgNIABgCIABABQAHAIABANIAAACIAAACIAAACQAEAXAJARQAIAPANAKIgcAQIgTALIAAABIgFAFQgOAJgSABIgQAAgAAkDBQAKAHAOAAQAOAAAKgHQAKgGAAgIQAAgJgKgHQgKgGgOAAQgOAAgKAGQgJAHAAAIQAAAJAJAGgAAkDBQgJgGAAgJQAAgIAJgHQAKgGAOAAQAOAAAKAGQAKAHAAAJQAAAIgKAGQgKAHgOAAQgOAAgKgHgAAbCyIAAAAgACWCyIAAgCIgGgFIgDgBIAAgBQgLgJgIgLIgBgCQgFgVgGgUIAAgDQgDgVAAgRIACgHQADgPALgJIAAAAQAFgEAGgDIACAAIACgBQAVAKAOASIABABIAAAAQAKAOAGATIACAPIABANIABAEIAAADIAAAcIgCABIAAAAIAAADQgDALgHAHIgBABQgKAEgOAAIgHAAgAB8AkIgBAaQAAA+AcAiQADADAGAAQARAAADgMQABgEgBgGIgBAAIAAADQgBAMgLACQgDAAgDgCQgZgSgHglIgCgQIAAgWIACgSIACAAIACARQACAMADAKIABADIABAAIgCgDQgBgUADgFIABABIACAbIABALIACAAIABgMIAAgSIgDgXIACAAIAFAWIADASIAAABIABAWIAAACQAFgKgBgOIgDgRIgBgCQgCgJACgDIAFALIAFATIAAAAQADASgBAVIAAADIABgCIAAgBIABgHQACgNgDgUIAAAAIACAAIAAAAQAEAQACASIAAgBIACACIAAAAIAAABQAAgigNgXQgJgPgPgKIgCAAIgHgCQgEAAgEACgACwB6IABAIIAAgIIgBgCIAAgCIAAAEgAASAuIAAgDQATgbgBAlQgBAGgCAIIgBAAQgRAAADgVgAAHAHQgEgCABgFQAEgPAIgJIAIgHIACgBQADABACACIADAIIgBAGIAAADQgIAUgNAAIgFgBgAi/hYQgCgCAAgEQALgQAFgLIABgCQgIgRAQgRQAOgOASgJQAFAHACAJQACAKgBAMIAAACIgTANIgIAGIgBAAQgTAQgOATgAALh/IgCgBQAAAIgEgEQgDgCAAgGQAHgKAIgBIAFABQAEABAFADIACABQgEATgHAAQgFAAgGgJg");
	this.shape_2.setTransform(41.8,53.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFFFFF","#FFCC66"],[0,0.333],41.2,68.7,41.2,68.7).s().p("AAAAKIgCgPIAAgCIAAgCQACAJADAJIgDABg");
	this.shape_3.setTransform(41.2,68.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000099").s().p("AAeBqQgRgBgPgDIgCgBIgBgCQgJAEgCgJQgGgYgJAKIgCAAQg3AJgxgOIgHgCIAAgCQgngYgpgLIgGgCQgFgBAAgBQgBg4gNgyIgDgCQAFgGgGgFIgBgBQAEgGgBgEQgBgEgHgDQAJAAAGACIACAAQBhAsCDALQAxAEAmgLIAxgCIAGAAIACAAQAlgPArgJIACAAQASgRAZgEIAAgBQAFABAAAGQgFAggKAaQgEAKgBAKQgCAYABAYQABATADATIgiADQgwAHgnAPIAAAAQgkANgoAAIgQAAg");
	this.shape_4.setTransform(71.9,22.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#996633").s().p("ABtAnIgBgCQgFgJgFgDQgGgDgHAEIAAAEIAAADIgDgEQgHgJgRgJIgBAAQACANgBAQIAAgEQgCgHgDgEQgIgKgIgCIgBAAQgIgCgIAHIAAACIgBgBQgKgGgKAGIgEACIADgDQgJgFgPABIgTACIgCAAQAAgHASgDIAAgBQgFgFgOAAQgKAAgNAAIgDADIgYACIgnABQASgHASgHIABAAQAGAAAGgDIACgCIABAAIAAAAIAGgHIABgCQAAgBAAgBQAAAAAAgBQAAgBAAAAQgBgBAAAAIABgBIAdACIABAAQAXABAXgDIACAAIAFgGQAJgGAIgBIAAAAIAAABIgBABIgEAFIgDAFIgCAEQAIgEAJgCIABAAIADgBIAKgBIAEAAQAQgBAUACIAAABQgVACgNAHIgKAGIAQgBIAAAAIACAAIABAAIAEAAQAOAAAMADQAKACAKAEQAWAIgOACIgDgBIABABIABABIACABIAKAJIAGAKQAEAHAAAIIgBgBQgXgIABAGIAFAFQgEACgCAAQgBAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape_5.setTransform(76.7,-43.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AAmDBIAAgDIALgVIABAAQALgFAOAEIACABQAGADAEAGIACAAIABAAQgKgSggACQAcgqAQg2IACAAQAQAKAFAVQAGAegGAWQgGAVgSANIAAACIgCABIAAACQgLgBgGACIgJADQgIADgHAAQgFAAgFgCgAgXCMIgEgCQgRgJgMgPQALgRAQgMIACAAQARAFASADIAaADIAAABQgMAagOAZIgIAPIAAABQgIgQgPgIgAhZg0IgBgBQgGgDgEgEIAMAIgAhbg+IgLgKIAAgCIgBgBIAAgBIgBgCIgBgBIgCgDIgKgXIAAgJIABgFIACgFQAIgVAEgVQAMAAABALIAAAFIgCAIIgCAIIABADQAFAEAGADIAQAAQAGgCAFgEQAFgHAFgIIACAAIgBgBIAAgBIABgCIgBgCQAJgWAMgTIAAgCQAGAMAAAaQABAiAWAOIAAACIABAAQAUACADASQAAAEgBACIgHAGIgBAAQgQAGgQABIgUACIgBAAIgEgCIgCACQgDgCgFACIgCABQgJABgJAEQgGACgFAAQgIAAgHgFg");
	this.shape_6.setTransform(30.2,12.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF6600").s().p("ABoBDIgCgBQgEgOgFgKQgHgKgJgGIAAgCQgEgCAAgGQATAFAAgHIAAgCQgBgHADgIIABgBIAAAAIAAAAIABAAIABAAQAbgKAQAPIACABIgDAKIgGAGIgIALIAAAAIAAACIgBAAIAAACQgGgMgMgHIgCAAQAKAGAHAWIAAADQgKgIgHgLIgCAAIABABQAQATgDASIAAABQgIgGgLgSIgFgIIABACIADAGQAIAOAAAOIAAgCgAA7AxQgHgDgLABQAHgHABgMIAAgFQgGAXgGgQIABgGQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQgJgEALgOQAFgGgGACIgCABQgFgNgCAGIgEACQg9AMgfgiIgBgCQgEgGgBgJIAAgBIAAgDIACgDIAAAAQAIgKAPgDIAAgBQAYgCATAEQgkgDgaATIAAABQAfgRAwAKIACAAQAdANANAeIACAAQgBAWABALQABABAAAAQAAAAABAAQAAAAABABQABAAAAAAQAHAAAGAEIAAACQAHARgKAMIAAABQgEgIgKgDgABYgGIACgBIAAAAIAEgCIABAAIABADIgBAAIgCABQgLAFgGAEQAFgFAHgFgAh1gUIAAgDQAYgLARAZQADADAHAAIgBgCIgTgPIgBAAQgCgIAKgGIgBgBQgKgRgWgEIAAgCQAiADAIAcIABACIASAWIgDABQgFADgHgEIACAEIACABIgOABQgaAAgPgUgAiMgQIAAgBIADgGQAIgWAiABIAAACQgjABgIAZgAiOgzIAGgGQAOgPAHAGIgDAAQgEABAAAEIgCAAQgDAEgHABIAAACIgGAEg");
	this.shape_7.setTransform(25.1,-24.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#009933").s().p("AgZB3IgBgEQAAgLAJgDQAQAFgXANgAgcBlQgFAAgGgJIAAAAIgFgLQgfhIgvg3IAAgCIAAgEIABgDQAJgNAFgSIABAAQAAgQACgQIABAAIABABQARALAegCIAVAAQALgJAKACIgBAAQACAJAKAMIACAAQAXAIAQAQQAQARASAPIABABIACACIAAABIAAAAIACABIAMAMIAMAMIAKAJIAIAGIADAEIgDACIgJADIgCAAQgZAOgTAHIgCAAQgQgQgUgMQAUAQANAXIAAABIAAAAIgDADIgGACIgDABQgjAOgbAVIAAACQgGACgDAFQgDADgCAAIAAAAg");
	this.shape_8.setTransform(-75.9,28.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#996600").s().p("Ag7BBIAAAAIgBgCQAEgJADgQIABgGQAEgaAMgPQAGAMgLATIgGAMIgBAFQgDAJAAAKIAAACIgFANQgBgEgCgEgAgHBFIAAgBQgJgLABgMQgGAQgKgPIADgEIABgCIACgIIABgCIAXg1QABgDADAAQAHACgJAUIgBACQgHAOgEAUQADgHAFgGIAAAAQACAZgDARQAAABAAAAQAAABAAAAQAAgBAAAAQAAgBABgBIAAgCQAEgYgBAbIAAABQAAADgDADIgBADgAhCAaQgCAKgEACIAAgBQgFgMgCgPIAAgCQANgKAHADIABgBQADgFAJABQgHAegJAeIgBAAIgDgegAgtA1IgBgJIACgEIACgFQALgYAJgYIAEgDQAKAJgLAPQgFAIgDALIAAACIgDAKIgCADQgEAHgHAFIgCgBgAATgFQAGgKABgOQACgOALgCQACASgIAQIgBABQgGADgEAEIgDACIgDABIADgFgAAqgOIgCgCIgBAAQAHgSAGgVIABAAQAMgDAOgOIABAAQAEAggaAPIAAgBIAAAAQAAgNgEAMQgFANgFAAIgCAAg");
	this.shape_9.setTransform(-52.6,-35.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#FFFFFF","#996600"],[0,0.333],-96.2,10.6,-96.2,10.6).s().p("AAhGiIAAgBIgHgDQgPgHgLgKIAAgBIgRgEIgFgDIgBgBQglgkgDhEIAAgDQAHgmATgaQABgKgBgIQgBgGgDgEIgCgDIAAAAIAAADIAAAAIABACIAAACQABAJAAAMIAAADIgIALQgPAagEAlIAAACIAAADQAKBCApAjIACAAIAEACIAGAAIAEAAQABADABACIAAABIAEABQARAIgDAEQgFAAgEgBQgPgHgPgJIAAAAIAAAAQgugggOhAIAAgCIABgNQADgqAUgYIAAgDIAAgVQgEAAAAgFIgBgBIAAgBIAAgBIgBAAIgBgBIAAAAQgegUgKgoIAAgCQgCgLgBgOIAAgDQAMgLADAIQADAHgEAUIAAADQASAdAYAVIAAABIAAAAIADACQgVgZgRgfIAAgCIAAgaIAAgDIADAAIACAAIADACQAQAHAWAAIAAgCQgNgBAJgIIAFgDIABAAIAAgCIACgIIAAgGIABgHIAAgBIgBgDIAAgCIgBgHIgDgJIAAgDIAGALIADAHIABADIAAABIAAABIABABIAAABIAAAAIABAEIAAABIAAACIAAAAIABADIAAABIAAADIAAADIAAABIAAACIAAABIABAAIAAgBIAAgBIAAgBIAAgBIAAgDIAAgEIAAgBIAAgDIAAAAIAAgCIAAAAIAAgEIAAgBIgBgCIAAAAIAAgBIAAAAIgBgEIAAAAIgCgHIAAgCIAAACIABACIACAEIAAABIAAAAIABACIAAACIABABIAAAAIABACIAAAAIAAABIAAAAIABADIAAAAIAAABIAAAAIABAEIABAAIAAABIABAEIAAACIAAAAIABABIAAABIAAABIABABIAAADIABACIAAABIAAAAIABAEIAAACIACAGIAAACIADARIACANIAAACIAAAAIABAAIgCgOIgCgOIAAgEIAAAAIgBgCIAAgBIAAgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIgBgCIAAgBIAAgBIgBgEIAAAAIAAgBIgCgJIgBgDIAAgBIAAgBIAAAAIAAAAIAAgBIAAAAIAAgBIgBAAIAAgDIAAAAIAAgBIgBgBIAAAAIAAgBIAAgCIAAgBIgBgBIAAgBIAAgBIAAAAIgBgCIAAgBIAAAAIAAgBIAAgCIgBgCIgBgEIgHgZIgDgKIAAgDQgCgFgDgGQgDgGgEgFIgCAAQgFgEAHATQABADgCACIgCABQgFgNgCAJIgIgZIAAgBIgHgTIgDgJIgIggQAIADACANQABALAEgHIgBgBQgLgXALgIIABAAIABABQAIADgDgJIAAgCIgCgDIAAgCIAAgFIACgCIAAAAIADgEQAHgDAFAUIAKAmIACALIAFAUIAAAAIABABIACAIIAAADIABADIAAABIACAFIAAABIAHAaIAAAAIAAABIAGAXIAAABIABADIABACIAAACIAAABIABABIAAABIAAABIAAABIABABIAAABIAAABIAAAAIAAABIAAAAIAAAAIABABIAAACIAAABIABABIAAABIAAACIABACIAAAAIAAABIABABIACAOIAAAEIAAABIAAAAIACAFIAAACIADAHIAAAAIAAABIAAAAIAKAiIAAAEIABABIABAEIAAABIACAKIAFAWIAAACIAAADQABAGgEABIgBAAIgBgGIgGgbIgCgKIAAAAIgBAAIgBgEIAAgCIgBgEIgJghIAAgBIAAAAIAAAAIgBgBIgBgDIAAACIAAAAIAAACIAAADIACAHIACANIADAMIAAAAIABADIAAABIAAAAIAAABIABAAIAAABIABAEIAAAAIAAAAIADAKIACAKIAAABIAAAAIAEAQIAAAAIAAABIABAEIAAAAQAMAvAJAwIgBAAQgRgsgOgxIgBgDIAAAAIAAgBIAAAAIgBgDIgEgNIAAAAIgDgUIgBgGIAAAAIAAAAIgBgBIAAgBIAAAAIAAgCIAAACIAAAAIAAADIAFAZIAAABIABAIIABAEIABAEIABAEIAVBhIgBABQgLAHgBARIAAACQAIAUAUAJIgCADIgaALIABAKIABAAQAwgGAugSIACAAIAAgCIgFgBIADgBQAJABAAgFQABgHgIAEQgLAHgSgDIAAgCQgQAHgIgIQAOABAIgFIACgBQAHgIAFgSIAAgCQgIgTgLgFIgCAAIgDAAIgCAAIgMguIgWhQIgBgGIgCgEIAAgBIAAAAIgBgEIAAgBIgBgBIAAgBIAAAAIgThGIAAgBIgDgLIAAAAIAAgBIgBgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIgBAAIAAgBIAAgBIAAgBIgBAAIAAgCIAAAAIgBgDIAAAAIAAgCIgBgEIgEgWIgIgZIAAgBIgDgMIAAgBIAAgBIgBgBIAAAAIgBgGIgGgVIAAAAIgBgGIAAgBIgLgqIAOApIAAABIACAGIAAAAIAGAUIABADIABABIAAADIAAAAIADAQQADAOAEALIAIATIADAGIABACIABABIABABIAAABIAAAAIAAABIABAAIABADIAAAAIAAAAIAAAAIABACIACAAIAAgDIAAgDIAAgCIAAAAIAAgCIABABIABABQAMAIAKgSQAFgLAKgBQAEgBAEADIACABIABAAQAmAtgaA4IgCAEIgCAEIAAACIAAAAQAAAHADADQAyA3AdBLQAPAmgGAlIAAABIAAACIgBABQgCAPgHAPIgCABIgIAGIgBACIgCACQgJAFgJADQgDAEgEACIgLAHIgJAEIgBAAQgOADgOACIgmAAgAg6hpIAAACIAAACIADAKIACAKIAFAPIABAEIAAAAIACAJIAGAUIAAABIAAABIADAKIAAABIACAJIAAAAIABACIAEAMIAAABIADAMIAAABIAHAYIABAEIABACIAAABIAAAAIAAADIABAAIAAAAIAAACIAAAAIAAAAIABABIAAAAIAAABIAAAAIAAABIAAAAIABADIAAAAIAAABIAAABIAAABIABAAIAAABIAAABIAAABIAAABIAAAAIABACIAAAAIAAABIABADIACAJIABABIAAABIAAABIAAABIABACIAAABIAAABIAAAAIABACIAAABIABABIAAAAIAAABIACAAIAAAAIAAgBIAAAAIAAgBIAAgBIgBgDIAAAAIgBgBIAAgBIAAgBIAAgBIgBgCIAAgBIgDgNIAAAAIAAgCIgBAAIAAgBIAAgCIAAgBIgBAAIAAgBIAAgBIAAAAIAAgBIAAgBIgBgBIAAAAIAAgCIAAgBIgBAAIAAgBIAAgBIAAgBIAAAAIAAAAIgBgBIAAAAIAAgDIAAAAIgBgBIAAgBIgBgDIAAgCIAAAAIgGgYIAAgBIAAAAIgHgZIgBgBIAAgBIAAgBIAAgBIAAAAIgCgHIgBgCIgCgJIAAgBIAAgBIgGgTIgDgKIAAgDIgOgxIAAAKgAA6FJIgCgCQgXAAADgaQAHgNAMADIACAAIAAgCQATAMAAgIQAAgNAIAPIAFAGQgBARgQACIgDAAQAJAHgPAGIAAAAQgCAAgDgEgAA4ESQgSg7gQg+IgCgKIAAAAIgBgFIgBgBIAAgDIgLguIAAgBIgBAAIgDgKIgDgTIAAgCIgBgCIAAAAIAAgBIAAgBIgBgBIAAAAIAAgBIAAgBIgBgCIAAAAIAAgBIAAgBIgBgBIAAAAIAAgDIgBgCIAAgCIgBgCIgGgXIAAAAIgIgaIAAAAIgCgIIAAAAIAAgBIgBgCIAAgCIgDgJIAAAAIgGgUIgCgKIgThAQgCgGAFADIAEABQADAFACAJQABADAEACQACAAAAAFIgBAAQgBgEgFACIAMAsIACAJIAGAUIAAAAIACAIIAAACIABABIAAABIABACIACAIIAAAAIAIAZIAAABIAGAWIABADIAAACIAAAAIAAAEIAAABIAAABIAAAAIAAABIABABIAAAAIAAABIAAABIAAAAIABABIAAABIAAAAIAAACIABABIAAABIAEAOIAFARIAAACIANAuIABADIAAABIABAEIABAAIADAKIAXBPQAIAagFASgAh5jUIgJgOQgHgLgMgGIgKgEIAAgCQgGgKgEgMIAAgCIAAgWIAUhJIABgBIABAAIgCAJQgHAggDAjIAAADIAAACQADAQAHAMQALAQAWAHIAAACIABACQADAIgBAKQAAAEgFABIgDgCgAhyjqIgCgGIAAgBQgVgFgFgUIgBAAQAEgOgKgKIAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAAAIABgCIADgGQABgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAIAAgBIgCgBIAAAAQgCgIABgFIABgIQAKgwAagpIACAAQAOAHAKAMQgXAPgIAdQgIAaAFAWQACAIADAIIADAAQASAGAKgNIADAAQARALgFAKIgBACIgGAFIAAABQgHALACAOIAFAPIACAHIgOAEIgTAEg");
	this.shape_10.setTransform(-96.3,10.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AElBPIgBgBIgEgFQgDgCgCgEIgBgEQgCgMAKgHIAEgHIABgCIAKgGIAZgBQAGACAFAEIACABQAHAHgCARIgBACQgNAUgZAAQgHAAgJgCgAEjAtQgDAAgBAEIgCAHQgCAGAEAEQABAAAAABQABAAAAAAQABABAAAAQABAAAAAAIALAAIADgBQAFgEgBgHQAAgFgCgEQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAIgIAAIgEABgADxBCQgDgCgCgEQgDgGAAgHQAAAIAGADIABAAIAHgBQAIgCAAgJIAAgCQgDgKgLABIgDACIgEADIACgDQACgEAEgBIABAAQAPgMAYAGIABACQAIAEgFAKIgBACQgGARgOAJIgCABQgVgBgBgEgAlVgeIgBgBIgFgBIAAgDIAAgWIABgKIABgIIABgCIACgCIACgBIAKABIABAAIACABIAAAAQAFABAFADQADACACADIABADIAAAAQgDgBgGAAIAAAAIgFAAQgEACgCAEQgJAMALAJQAEADAEAAIgFADIgHADIgBABIgHAAgAkyguIgBACIAAACIgFACQAEgCACgEg");
	this.shape_11.setTransform(-11.5,-25.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFCC99").s().p("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AAAIAiADQAjADAjgBIACAAIAUgLIACgBIABAAQAlgRAwgGIABAAIABAIIAAADQgEAVAAAbIAGAJQALAQgEAYQgLBHgaA5IAAADIgBACQgJAZACAlIACABQAMAZgEASIAAABQAIACAGALIADAFIAAACQgFAXgWAGQgVACgOgDIgTgEQgpgIglALIAAACIgBAAQgXAKgcAIQgKACAHgNQgIAJgLACIgFAAQgIAAgJgDgAKNHaQgRAAgQgHIgBAAIgDgQIgBgDIAAgDQgEgQgIgMQgOgUgXgKIgDgCIAAgBQgCgSgFgSIgNg4QgPhHgOhJIAAgNIABgEQAAgMgIgdIBJAfIABABIABAAIAGADQAWAKAbABQAdABAZADIAEAAIAAADIAAACIgBADIAAACIgDAMIgEAOIABAEQAEAYAJARQADAGABAIQABAHgBAJQgHBAgBBGIABAZQABASAEAQIAEASQgCAIgKgBIgDAAIgCABQgRAEgPAAIgFAAgAGMHRIgDgDIhHhUIgBAAIgHgJIgKgMIgJgLIgJgPQgFgHgDgIIgKgSIgDgSIABgEIAHgQIAKgSIABgBIAKACQANAAALgJIABgBIALgJQAHgEAFACIABAAQgJAXgOAbIgBABIgEAHIAEABQAIADAFAHQAhAtAaAzIAGAKIAAADIADAYIABALIAAAFIgBgBIAAAEQAAAKABAJIgBADIgBAEIgDgEgAEvDPIgCgLQgDgOgEgKIgCAAIgGAEQgOAJgQAIIgBgCIAAgJIAAgGQAGgKAOgBIACgBQAZACAHgUIAFgPIAFgNQAIgXAMgVQARghAMgoIAAgBQgGgxgLg6IAAgDQgCgtgTgdQgGACADAFQARAcgYgLIgBAAIgBgBQgagWACgzQAJgPAQgIQAKgGANgCIACgBQAhAxAGBMIAAADIAAACQALBNADBUIgBABIgoBVIgCAFQgBAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAQgEABAAACQABAIgDAJIgGAKIAAAOIAAACIAEAGIACACQAAABABAAQAAABAAAAQABAAAAgBQAAAAABAAIAAABIAAAAIAAABIAAABIAAABIABAAIAAABIABADIABAAIAAABIABABIACAEIAAAAIABABIAAAAIAAABIABAAIACAEIABAAIAAABIAAABIAAADQgCAKgEAEQgEAEgGgDIAAAAIAAgBIAEgLQADgOgIgNIgCgDIgDgEIAAgCIgCgBIADAIQADAMABAQIgBAAQgFgQgNgKIAAACQAPAUgLAYIAAABIgCABQACgYgIgMQgDgEgDgDQgEAFADAIQAHASgDALQgDAOgTAEQANgKgEgWgAE/AlQgVgBgQgGIgCgBIgIgJIAAgCQgOg4gUgzIgCABIAAgBIgFgKQAIABAHgEIAGgCQAIgBAHgDIADgBIAfgCIABgBIALgBIAGgBIAXgDIACAAIATBzIAAACIgBAAQgEAVgJAQIgCAAIgRABIgLgBgAHmg5IgBgBQgkgbAIhGIAAgDQAHgFAJgFIgGACQgGAFgIAEIAAgDIACAAIAAgBIgHABQgWADgcgBQgFgMgJgKIAAgCIgCgDQgJgtgTghIgBgCQgOgIgJAHIgCAAIAAgBIgBABIAAAAIgGAAIgCAAIABAAIABAAIAGgCQgEgOACgUQAJgNAHgNIABgCIABgBQABgEgCgDQASgTgLAZIACgBQAGgIAEABQAXgCAHgRIgBAAQgCgLgEgIIABAAQAEgLAIgIIADgDIACAAQARgQAOAEIACAAQAggfAvgQIA6gTQAVgGASACQAgBCBmgHIAAgBQheAAgkg5IgCgBIAAgCIAAgVIAAgFIAFgIQASgUAggGIADAAIAEgPQAIgWAMgTQAAAAAAgBQABAAAAAAQABgBABAAQAAAAABAAIAAgBIADgDQADAEAJgCIACAAQAigBgbAOQgXALALACIADgCQACACgCAEIgBAAQgMABACALIgBABIAAACQAFARgCAGQgEALAJAHIAEADQATAGALgJIAFgEIgCAAQgHADgGABQgFABgEgBQgMgCgFgOIABAAQAKgOAVAHIAAACQAHgEACgLIABgFQABgIgBgLIAAgCQgMgGAKAAIASADQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAgBABQAEADAGgBQAGgBAIgFIABgBQAEgBgCAIIARgLIAEACQALAHAIAMIAAADIABgBIAEAHIABADIACgCIAAgBQgDgZAFgBIACAAQAMAQAKAPIAAgCIAAgFQABgeALAZIACADIAAACQgIANAbgOQAGgDAJAEQAMAJgHASIAAACIgCAAQgEAJgGAFQgMAJgTABQAKAFAIAIQADADAAAGQgCATAJgDQA7ALAoAoIAlAoIAjApQAEASAGAQIACAAQALBOgvApIgEADIAAAAIgBABIgBAAIAAABIgDACIgBABQgJAFgIAGIgHAGIgOALIgNAKIgMAIIgXAOQgHgBAAAGIAAAAQAYANAHAhIgCAAIgBACQgUgRgUgTIAAAAIgDgCIABABIABACIAAAAQAVATAGAXIgBADIgkgjIAAAAIgQgQQALARANAOQARATgKANIgGgBQgTgHgGgUQgGgUgIgJIgDgDIABADQAHAWAJATIAGANIAEAFIABAAQgFAKgWAAIgBAAIgHgLQgOgVgGgbQgFgRgEgEIgGACIggAHQgZAFgGgOIAAgCQAUgZAqgEIABgCIAAgCQAWhAAsgqIgCgBQgigagegeIgBgBIABACIAAABQAZAeAgAZIgCAAQghApgWA0IgGAPIgCAAQgmAHgYATIAAADIAAACIgDAAQAOAXArgLIAQgEIAEgBQAHAoAVAaIAJAKIABABQgTAHgXAFQgSADgTACIgCAAIgDAAQgpAEgnAAQiHAAhqgygAHik3IAAABIgBADQgDAJgBAJIgBABIgBABIAAACIgEAPIgBADQgDAEgBAEIAAABIABAAIABABIABgBIABgBIADgGIAIgcIAFgSQACgHADgHIABgBIABAAIgBAAIABgCIAOgWIAAgBQgGAEgFAFIAAAAIgBABIgBABQgGAHgFAJIADAAIgEANgAKkn4IAAACIAHAIIABACIAAABIACABIABAAIADADIABACIAAABIACABQAGAIAMAAQAbABAagBIAIgBIAAgCQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAIACgCIABgEIgBgBIAAAAIgBgBQgBAAAAAAQgBAAAAABQgBAAAAABQAAAAAAABIgCABIgBABIgBACQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAABgBAAIg2AAIgCAAQgGgBgFgFIAAgBIgBgBIgCgBIgEgFQgFgHgHgFIgBAAgAMGn4QAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAABABQAAAGADAFIACAAIAAABIAAABIABACQAGAEAHgBIABgCIAAAAIgBgBIAAAAQgNgDgCgNIgBAAIAAgBIgBAAIgCAAgAMZo7QgLADgHAJIgGAKIAAADQAAAFACAEQAFAMARgFIACAAQATgLgBgSIAAgCQgBgGgCgGIgDAAIgCA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QgBIACAAQgDAMAVgHIAFgBQADAAADADQAEAVgKALQgHAFgLADIAAABQgEADgHgDQgRgKAEAKIAAABIACABQgHASgOAOIAAACQAEAZANAQIgBACQgEATgHAQIgBAAIgBABIgEAGIgDAEIAAABIAAABQgFAHgIACIgKAAgACYkzQgBABAAAAQAAABAAABQAAAAABAAQAAABABAAIABABIABAAIAEADIABABIABAAIAAABIADACIABABIACABQAEACAFABIAPAAIAEgCIADgBIACgBIABAAIAEgDIADgEQAFgDACgGIABgBQACgDAAgDIABgCIABgCQAAgBAAgBQAAgBgBAAQAAAAAAgBQgBAAgBAAIgBABIgBAEIgCAEIAAABIgFAIIAAAAIgGAGIgBABIAAAAIgBABIgCABIgBAAIgBABIgGACIgNAAQgFAAgFgDIgEgDIgCgDIgGgDIgDAAIAAAAgAD2luQABgPgEgJIAAgCQgJgHgKgGIgCABIgLACIgCAAIgLABIgBAAIAAABQgPAAgLgHIAAgDQAcADANgNIAAgCQAXANAjgBIgBAAQgbAEgQgEIADADQARAHATgBIAEAAIAFAAIAKgEIADAAQgBAMgLAKIAAACQgDAJgMgBIgDgBQADAIgNACgAEJmQIgCAAQgDABgBAAQgBAAABAAQAAAAACAAQABAAADgBgAnFn4IABgBIgBAIIAAgHgAmyn8IgCgBIACABIAAAAg");
	this.shape_12.setTransform(-0.9,17.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C6FFFF").s().p("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gCIgRifIAAgCIAAgHIgCgFIgBgDQgDgFgCgHIAAgCIAAAAIgBgBIAAgBIAAgCIAAgBIACgBIACAAIACAEIAAACQAJAKAFAMQAcABAXgEIAGgBIAAACIgCAAIAAACQAAAFgDACQgCA4ARAiIgDABQgDALAOASIABADIACACIAAAHIAAADQAFAiABAhIAAAjIADACQAGACAJgBIACAEIAJAgIAAAFIAAABIAAASIAAAMQAAAXAHAXQANAqAKAtIAGAbIgCABIgTgDQgDADgFAAIhAACIgCgMgAEuLyIgBgBIgkgDIgBAAQAAABAAAAQgBAAAAABQAAAAABAAQAAAAABAAIgCACQgMgQgOgPIgOgOIgBgCQAUgcARgdIAGgLIAEgGQAFgGAIgCIAKgBQASAKgBAcIAAACQgCAugEAtgABVLuIgFAAIAAABQgJgegOgZIgBgBQgFgCABgHQAWgXAagSQAZgRAcgLIgBAEQgCANAHABIACAAIgDADQgQAQADARIAAADQgHAPgKALIABAFQAGAYANgLIACgBQAIgXASgOIAAgBQAAAHgCAIQgCAHgFAHIAAACIgBACIgCABIAAAQIAAADIAEAGIAIAMIABACIhagCgAtvLTQgCgCABgGQAHgagBgbIAAgCIACAAIgBACIAYgJIAAACQAYAJALAWIABAAQgRAOgTAMQgRALgLABgAwqEwIAAgBIgBgEIgOgvIACgBQALgJAFgPIAEgMQADgJgDgKQgCgIgHgFIgGgDIAOgSQAignAkgmQArgtAugpIACABQA2AlAwAtIgEAEQgzAUguAZQhRAsgyBKQgNAUgMAWIgJAPIgBADIgCgFgACyC5QgNgNAAgaQANgIAKgLIABgDQAMAAALgDIABgBIAIgIIAKgNIABgDQAFgIAEgKIAGgRQACgDAAAEQAGALgEAJIAAACIgOAPIAAACIgBABQgVAcAJAlIgCAAIgBAAIADAAIABAGIgDAAIgBABQgTAJgXAEIgBgCg");
	this.shape_13.setTransform(8.9,-26);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00CC33").s().p("A3iDoIAAnPIANAAQAAABAAABQAAAAAAAAQAAABAAAAQABAAAAAAIAxAIQAvgDAoAWIACACIAMAAQAQACAOAEIAXABIAKAAQASgBASACIAOABIADAAIBJAAIABgBIAqgCIAMAAIgBgEIAFAGIACACIACADIABAAIAAAAIADABIADABIAAAAIAFAHIABABIABAAIADADIAAABIABAAQAHACAHAEIADACIADADQAIAAAGACQAIACAHABIABAAIAFABIACgBIAKAAIAaAAIABAAIAPgDQAKgCAKgEQAFgBAFgEIABAAIABgCIACgBIAEgEQATgIAOgKQgZAegbAdIgEAEQAAAEgDADQgDACgDABIgSASQgdAdgeAbQgMALgNAGQg3AcgnAmQAEASAUAFQgIADgLADIgDABIABABIADAAQASgCAOgEIACgBQAAgEgCAAIAFgDQAAAEAFgBIACAAQANABgBAGIAEgCQAYgGAWADQgKAFAUgEQASgDASAAQAfAAAeAMQAQAGATABQAKgGAMgEIACAAQARALAOgOIAAgCIAEAAQAeABAKgWIACAAIAkAEIACABQAZgJAcgHQAIgDACgKQgBgNgJgCIgCAAQgUgHgTAEIgCABQgQAOgfgIQgSgDgRgBQgmgFgZgQQgCgBADgHIBmhyQAkgpAoglQAWALAaADIAAACIAOAAIAAgBQCrAHCrACQAUABAQAIQAIAEAJABIBAADQBnADBigKIAAgCIAFgDIAAABQAqBWAqBOIAFAIIAFAJIgBAAIgBABIgCAAIgFACQgWAFgdgBQghgCgegEIgZgDIgQgBIgKAAIgJABQABANACAAIAAACQAEAEAGAAIgBABIABAGIACACQABABAAAAQABAAAAAAQAAABABAAQABAAAAAAIAGABIAAADQABAEADABIACAAQABAIADAFQAGAIALACIABABQAKAAAHgCIAIgDIABAAQANACAMABQAeACAcgKQALgEALgBIAFgBIASAAIABAAIAAAAQAOABABAIIAAABIgBACQgFAGAEAFQATAMAWAKQAQAGARAFIADABIABAAQAAgBAAAAQABAAAAAAQAAgBgBAAQAAAAAAgBIADAAIAAABIACAAIABAAIAAACQAUARAqgKIADAAQAMgJAQgEIABgCQAeAEAYgDIARAAIABAAIAPgCIABAAQAEgBADgDQAEgBADgDIABAAIADgEIAAAAIADgCIABgBQgCgRANgIQAEgCAGgCQAGgCAHgDIAEAAQAaADAQgIIAGgDIAAgCIAMgXQADgFAHgDQANAAAAAMIAAABIgBAEIAAAHQAMAFAHAKIAAACQAPACAOAAQArgBAfgXIAAgCIAAgCQAlgDApAFIAaADQAJACAMAAIAHAAQAFgGAKgBIACAAIANgRIACgBIgFgJIgCgEQgXgxAIg+IAAgDQAIgeAMgbQAIADAJAAQBWADBWAFQAWABAVAFQASAEATgBIAJAAIAFgBQAbAHAdAAIBcACQB0ADB1AAIADAAIAAgBIABgBIAAgBIAEAAIAAGPgADkAqIgHgBIgNgBIgDAAIgZgCIgDAAIgBgBQgJgDAOgIQAEgFgBgEIgRgSIACACQgJgDgEgIIgJgQIgGgLIgIgPIgFgIIgCgDIgHgNIAAgBIAAAAIgBAAQgVgtgMg2IgFgTIAFABQAAADACgBIABgBIAAgBIgBAAIBYACIABgBIAIANIAGAKIAJALIAFAGIAHAIIAJAOIABAAIAAABQApA2AuAxIABACIAAAJQABAJADAGIAAABQAAALAFAFQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgCABQggAVguAAIgKAAgAvnAAIgBgIQAkg1AwgnIATgPIAAgBQAAALgNALIgBACIgBACQgoAtgrApIgCADIAAABgAF4gzQAAgHgDgDQgDgCAAgCIACgeIgBgYIgCAAQgJgGgBgOQgBgGABgHQAIgFgFgNIAAAAIgFgRQAvAGArgJIAAgBIACgBQAGAhAFAhIgBACQgJAEgHAGIAAACQgFAKgDALIgEASIgBACQgQAMgTAKIgCAAQgKAAgHgCgAJvgzQgIgIgDgJQgDgKAAgMIgCAAIgGgMIABgXIABgUIADgnIAiACIABgBIABAAQAEA2ABA4IAAACQgIALgNAHIgBACIgCAAIAAAAgAEHjAIACgCQASADASAAIABgBIABAAIgGBCQgOglgUgdg");
	this.shape_14.setTransform(8.9,68.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("ADeKzIAAgCIgBAAIgBAAIAAgBIgEAAQABABAAAAQAAAAAAABQAAAAAAAAQAAAAgBABIgBAAIgCgBQgRgFgQgGQgWgJgUgNQgDgFAFgGIABgCIAAgBQgCgIgNgBIAAAAIgCAAIgSAAIgFABQgLABgLAEQgcAKgegCQgMAAgKgDIgCAAIgJAEQgIACgKgBIAAgBQgMgCgFgIQgEgFAAgIIgDAAQgCgBgBgEIAAgDIgGgBQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBIgDgCIAAgGIAAgBQgGAAgDgEIAAgDQgDAAgBgOIAKgBIAJAAIARABIAZADQAeAEAgACQAeABAWgFIAEgBIADgBIABAAIAAgBIgEgIIgFgIQgrhPgphWIAAAAIgVgwIgDgGIgBgCIAAgCQgEgKACgPQATgYASgWQA3g9BDgwIACgBQALgcAMgaIABgGIgBAAQgOg7gYgwIACAAIgFgNIgDgBIgCgBIgMgHIgHgIQgJgQgGgQIgBgGIgBgBIAAgCIAAgIIAAgCIgCADIgEAMIAAgCIAAgBIAAAAIgCABQgrAggtAcQAAAEgFACIgDACIgBAAIAAAAIgBAAIgMAGQgLAJgMAHQgKAGgJAIIAAAAIgBABIgDAAIgBgBIgBAAIAAgBIAAgCIACgBIgCAAIgBAAIAGgFIAOgIIAjgWIADgBIAEgDIABgBIABgBIABgBIABAAIABgCIAAAAIABgBIACAAIABAAIAFgEIACgBQAtgdAqgiIABgBIABAAIABgEQAAgDACgCIACgFIABgCIAGgVIAAgBQADgGAAgHQgEgFgKgCIgDAAIgJABQgIADgIAGIgQANIgPALIgMAJIgcAcIgfAfIgaAbIgBABIgqAtIAAABIAAAEIgCABIAAAGIAAgBQgEgGABgMIADgDQAWgZAXgVIAagYIAegbIAcgbIAMgIQAMgGAGgKIAPgKIARgJIABgBIACgBQAFgCADABQAGADADAEIADAAIAAAAIABgBIABAAIABgBIACABQALgDACgNIAAgCQgDgNgJgIIgCgBQg7ABgRgqIgBgCIAAgCIAAgfIACgBQAFgRgJgVQADgLAIgHQAHgHALgDIACgBQgIgEgLAAIgFAAQABAIgDAAQgDABgHgHIAAACQgFALAAgPQAEgGABgJIAAgCQAJgZAjgCIABAAIgCgCQghgBgJAXIgCAFIAAABQgEAJgBgEIgBgDQgJAGACgWQAJADACgEIAAAAQABgDgDgFQgEgEAHgGIAHgFIAAgCQAHAAADgEIACgBQAAgEAEAAIADgBQgHgGgOAQIgGAFIAAABQgIAHgBgLQAPgXAoACIADAAQAMAFAIAJIABAAQAwgUAqAaIAGAEQAOAKgCgIIgJgFIAAAAIAAAAIAEAAIABAAIACAAQARAMAKAUIAFALIABABQgCAYADAGIACABQACgSAKgKIAAgBIAAAAQALgLASgDIACAAQADAEgSAIIgCABIAAAAIgEACIAAABIgCAAQgHAFgGAHQAHgFALgGIACAAIABgBIASgGIACgBQAXAOASgCIACAAQgBgQALALIACAAQBKguBlgVIADAAIAAgFQAAgNADgLIABgFIAAgCQAJgFAIgHIAAgCQASgDAOgGIACgBIADgKIANgmIABgCIgBAAIgEAAIgrAHIgDAAQAPgUAcgHIADgCIABAAIAIgDIAFgGIABgDIgBgCIABgBIgNgCQAugFApAIIACAAIAIgGQANgKAPgDIgCAEQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABIAAAAIgBAAIAAgBIAAAAQgIAAgJAHIgHAGIgCAAQgXACgXAAIgBAAIgegCIAAABQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAIgBADIgGAGIAAAAIgBABIgDABQgFADgGABIgBAAQgSAHgSAJIAngCIAYgCIAAABQgBAAgBABQAAAAgBAAQgBAAAAABQAAAAgBAAQgLATgIAWIgFAPIgCAAQggAGgSAUIgGAIIAAAFIAAAVIAAACIACABQAlA5BdAAIAAABQhmAHgghCQgSgCgVAGIg6ATQgvAQgfAfIgCAAQgOgEgSAQIgBAAIgDADQgJAIgDALIgBAAQAEAIABALIABAAQgHARgXACQgDgBgHAIIgBABQALgZgTATQADADgBAEIgCABIAAACQgIANgJANQgBAUAEAOIgGACQgIglAVgcIAAgCIABgCIANgPIABgCQADgIgGgLQAAgEgBADIgHARQgDAKgFAIIgCACIgKAOIgIAHIAAACQgLADgNAAIgBACQgJAMgOAIQABAaANANIAAACQAYgEASgJIACgBIACgBIgBgFIAFAAIAAAAIABgBIABABIABAAQAKgHAOAIIAAACQAUAiAIAsIgCAAIgBABIAAABIAAABIAAABIAAABIABABIAAACQACAHADAFIAAACIADAGIAAAHIAAACIARCcIAAADQAWAMAKAaIABAAQAAAdgHAWQgHAZgQAQIgBACIAAAAIABAAIAFABQAvAPgHAxIgBAEIgCAAIACABQAHAFADAGQAIANgOASQgDAEAAAGQAAAEAHgBQAFABABADQANAZgaAOIACALIA/gCQAGAAADgCIATACIgBABQgrAJgugGIACAJQgCgCgDgBIgCABIgIAGQgIAKgEAOQgBAIAEABQAQAFAKgaIAAgCIABgGIAAAAQAEANgIAFQAAAHAAAGQACAOAIAGIACAAIACAYIgCAeQgBACADACQAEADgBAHQAHACAKAAIACAAQAUgKAQgMIAAgCIAEgSQAEgLAEgKIAAgCQAIgGAJgEIAAgCQgFghgGggIgFgbQgKgtgNgrQgHgWAAgYIAAgLIgBgSIAAgBIABgFIgKggIgBgEQgKABgFgDIgDgBIAAgjQgBghgFgjIAAgCIAAgIQANAyABA6QAAACAFABIAGACQApALAnAYIAAABIAHACQAxAOA3gIIACgBQAJgJAGAXQACAJAJgDIABACIACAAQARAEARAAQAyAEAqgQIAAgBQAogOAwgHIAhgEQgDgSgBgTQgBgZACgaQABgJAEgLQAKgaAFgfQAAgHgFAAIAAABQgZAEgSAQIgCAAQgrAJglAPIgCAAIgGABIgxACQgmAKgzgEQiDgKhhgsIgCgBQgGgCgJAAQAHADABAFQABAEgEAFIABABQAGAGgFAFIAAgCQgPgSADgLIAEAAIgBgBQgRggACg4QAEgCAAgFQAIgDAGgGIAFgCQgIAFgIAFIAAADQgIBEAlAbIAAABQCJBAC5gSIACAAIADAAQATgCASgDQAWgEAUgIIgCgBIgIgJQgVgagIgnIgDABIgQAEQgsALgNgXIACAAIAAgCIAAgDQAZgTAmgHIACAAIAGgPQAWg0AhgpIABAAQgfgYgZgfIgBgBIAAgCIABABQAeAeAiAaIACABQgsAqgWBAIgBACIAAACQgqAEgUAZIgBACQAGAOAagFIAggHIAGgCQAEAEAEARQAHAZAOAVIAHALIABAAQAVAAAFgKIgBAAIgDgFIgHgNQgIgTgHgUIgBgDIACADQAIAKAGARQAHAUASAHIAHABQAKgNgRgTQgNgMgLgRIAPAQIABABIAjAgIABgDQgFgXgVgRIAAAAIgCgCIAAgBIACACIABABQATARAVAQIABgCIABAAQgHgfgYgNIAAAAQABgGAGABIAYgOIALgIIANgKIAPgLIAHgGQAIgGAIgEIACgBIADgDIAAgBIAAAAIABgBIABAAIAEgDQAvgpgMhOIgBAAQgHgQgEgSIgjgpIglgoQgogog6gLQgJADABgTQABgGgDgDQgIgIgLgFQAUAAAMgKQAGgFAEgJIABAAIABgCQAHgSgNgJQgIgEgHADQgaAOAIgNIgBgCIgBgDQgMgYgBAdIAAAFIAAACQgJgPgMgQIgDAAQgFABADAZIAAABIgBACIgBgDIgEgGIgCgDQgHgLgLgIQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAgBgBABQAAAAAAAAQgBAAgBAAIgRALQACgHgDAAIgCABQgHAFgGABQgGABgEgDQABAAAAgBQAAAAABgBQAAAAAAAAQAAAAgBgBIgRgCQgKgBALAGIAAACQABALAAAIIgBAGQgDAKgGAEIgBgCQgUgHgLAOIgBAAQAGAOALACQAEABAFgBQAHgBAHgDIABAAIgEAEQgLAJgUgGIgDgDQgJgHAEgLQACgGgFgRIgBgCIABAAQgBgMALgBIABABQACgEgCgDIgCACQgLgCAWgLQAbgOghABIgDAAQgJACgDgEQAOgBAKAAQANACAGAEIAAACQgSACAAAHIACAAIASgCQAQAAAJAFIgDACIAEgBQAMgGAJAFIACABIAAgBQAIgHAIACIAAAAQAIABAIAKQAEAFACAHIAAADQABgQgCgMIABAAQARAJAHAIIADAEIAAgCIAAgFQAHgDAFADQAGADAFAJIAAACQADAFAHgFIgEgFQgCgFAXAIIACAAQgBgHgDgHIACACQAWAYgMAaIgBADQgCAFgDAEQgDAFgGADIAAAMIAAACIAAACIABAHQADARAUACQAGABAIAEQBkAzAxBnQAEBcgyAmIAAAAIgDADIgDADIgMAIIgLAHQgGAEgCAGIgGAOQgDAIACAHQACAXgDAQIAAACIgMAOIABADQAHAOgDAYIAAACQgNAXgLAXIAAADQgEAbADAXQACAYAJATIgDAAQgUABgTADIgBAAIAAAAQgwAHglAQIgBAAIgCABIgVALIgCAAQgiACgjgDIgigEIAAABQAUBiAHByIACBBQAAAHgDADQgIAMgOAGIgCABIAAABIgQAGIgIADIAAABQgYAFgYAAIgYgCIgBAKQAAALAJABIAEAAIADAAIACABQALAKASADIAAACQgXgGgBAKQAAAEACAFIAEAAQAMgHAUgDIABAAQgSAFAAAOIADABQAMAFAKgCQAKgCAJgJQgIANALgCQAcgHAXgLIABAAIgBACQgeAXgrABQgOAAgPgCIgBgCQgGgKgNgFIABgHIAAgEIAAAAQAAgPgNAAQgGADgEAHIgLAXIgBACIgFADQgQAIgagDIgFAAQgGADgHACQgFACgFACQgMAIABARIAAABIgDACIAAAAIgEAEIgBAAQgCADgEABQgDADgFABIAAAAIgQACIAAAAIgRAAQgZADgegEIAAACQgRAEgMAJIgCAAQgPAEgNAAQgWAAgNgLgADrKjQgHAEACAMIAAABQAVAFAkgEIABgBQAMgFALgGIAFAAIACAAIAMAAIAgAAIACAAIAOgBIAOgBIAAABQAGAAAGgCIAFgBIACgDIABAAIABgBIABgBIACgBIgCAAIAAAAQAEgEABgFIAAgBIAAAAIgEABIgFABIAAAAIAAAAIgDABIAAAAIgFACIgJADIgBgBIgQAFIgMADIAAAAIgCAAIgXgMIgJgFIAAgCIgJgSIgDgIIgBAAIgBAAQgjAQgvgBIAAAAIgLgBIgHAAIgMgCIgDAAIgCgBQgNgDgLAAIgFAAQgIAAgGABQgHACgGADIAAAAIAAACQAHAUAPgEQAHgBAHgGIAHgBQAHADgUAEQgFABAAACQAAACAEACQAFAGAFABQAFAAAFgGQADgDAGABQABAAABAAQAAABAAAAQAAAAgBAAQgCAAgCAAQgTAOAagFIACgDIADgEIAGgBIAGAAQAEABgEAFIgGAFIgDADQAAAAAAAAQgBABAAAAQAAAAABAAQAAABAAAAIAHAAIABAAIABABQAAgGADgDIAFgCIAEgBIABAAIAAAAgAEaEPQAVABAFASIABAAIgBAaIgECcIAAAMIgBAbIAAALIABAKIgBAEQgBAIACAHIgCAHQAAAGAFACIAAAFIACAJQAAABABAAQAAAAABAAQAAABABAAQAAAAABAAIABAGIAAACIAAACIACARIAAAAIACAGIABAEQACAKAEAIQAFAKAFAHIAEAGIABACQANAGALAAIABABIAQAAQASgCAOgJIAFgFIAAAAIATgLIAcgQQgNgKgIgPQgJgRgEgXIAAgCIAAgDIAAgCQgBgNgHgIIgBgBIgBACQgMAOgSACQgJABgLgCIgCgBQgGgFgEgHIgFgNIgCgBQgMgCgFgJIAAgDIAEgPIABgJIACAAQAIgIAAgQIAAgBIgBAAQgZAUgDgmQAGgNAIgJIABACIACABQAKgMgCgMIgDgIIgBgCIgBAAQgFgGACgNQAEgHACgKIAAgFIAAgFQgXgDAAgXIABgCQAHgLALgGIACAAIABgBIACgBQAAgxgkgOIgDAAIgCAAQgQgBgPACQgPACgOAHIAAACIACAMIABACIAAABIACAEIAHALQACADABADIAAABIAAADQAAABABAAQAAAAABAAQABAAAAAAQABAAABgBQADgCAFgIQACgDAFAAIADAAgAgrJzQgDAIAMAJIACABQALADAIgCQAFgCAEgDIAEgFIAAgBQAIAJANABQANABARgHQALgEARgBIAPgBIAGAAIABAAIAFAAIAAAAIASgBIAAAAIAdAAIACAAQANAAAEgJIgBgGIgFgLIgCgCIgHgEIgHgMIgFgHIgKgQIgGgMIgHgOIgLgQIAAgBIgDgFQgZgwgMg9QgGgigPgaIAAgBIgDAAQgHgBAAgIQAZgXAbgVQA0gqA5gkIACgBIAAgCIAAgHIgBgBQgJgPgMgKQgNgJgPgEIgIAGIhUBBQgYATgTAVQgSAVgNAWIAAACIAAADIAAACIAAAdQAqBZAwBWIAGAKIANAaIAEAIIAFALIgBABIgDABIgBAAIAAABIgDABIgFACIAAAAQgVAHgdABIgYAAQgXgBgVgEIgVgFIgQgGIgFAAQgBAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAIgBADIgDAHIAAAAIABABIAAAAIAAABIgCAAIABAEIABAAIAHACIABAHIAAABIAAAAIABAAIAAABIABAAQAEADAFgBIABAAQgBAEACADIABABIABABIABAAIAAgIIAEgBQALgFAHACQAIACAEAJIgCgBQgHgDgJAAQgGAEgCAEgADJKAIACAAIANACIAIAAIAKAAQAuAAAggVIACgBQAAAAABgBQAAAAAAA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CgBQgGgBgGAAQgHAAgGACgACxB6QgQAMgLARQAMAPARAJIAEACQAPAIAIAQIABgBIAJgPQAOgZAMgaIAAgBIgagDQgUgCgRgGIgCAAgACpBpIABACIAHAJIACABQARAGAUACQAOAAAOgBIACAAQAJgQAFgWIABAAIAAgDIgThxIgDAAIgXAEIgFAAIgMABIAAABIgfADIgEAAQgHADgHABIgGACQgIAEgHgBIAEAKIABABIABgBQAVAxANA6gANWgbIgBABIgEABQAYANAIAcIABAAQAJgKAFgOIABAAIAAgWIAAgCIgBgBIgBgCIgKgDQgPACgQAJgABoiBQgEAVgIAVIgCAFIgBAFIAAAJIAKAXIACADIABABIABACIAAABIABABIAAACIALAKQAMAJAOgGQAJgEAJgBIACgBQAFgCADACIACgBIAEABIABAAIAUgCQASgBAQgGIACAAIAGgGQABgCAAgEQgDgSgUgCIgBAAIAAgCQgYgOgBgiQAAgagGgMIAAACQgLATgKAWIABACIgBACIAAABIABABIgCAAQgEAIgGAHQgFAEgGACIgQAAQgGgCgEgFIgCgDIACgIIABABIAAABIAAACQAEAEAEADIAAAAIABAAIACABIABAAIAKAAQAJgCAEgHIABgBIAAgBIADgDIAEgHIABgBIAAAAQAHgQAFgTIAAgCQgNgQgEgZIAAgCQAOgOAIgSIgCgBIgBgBQgEgKASAKQAHADADgDIABgBQALgCAGgGQALgKgFgWQgCgDgEAAIgFABQgUAHADgMIgDAAQgPABgOANIgCABQgLAFAEgIQAKgCAFgGIACgDIgBgBQgIgCgXAHIgBAAQgNAUgigBIgBgBQgNgRgMAEQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIAAABQgVgEgMAPQABAIAHAAQAYAAAEACIAAABQgUAHgRgIIgBAAIAAACIAGAcQADANAMAFIAZAMQAigBALgBQgKAGAJAOIABABQABAZgDAVQAAgLgNAAIAAAAgAEFkCQAAgOgIgNIgEgHIAAgCIAFAIQALATAIAGIAAgCQADgSgRgSIgBgCIACABQAHALALAHIgBgCQgGgWgKgHIACABQALAGAHAMIAAgCIABAAIAAgBIAAAAIAIgMIAGgGIADgKIgCgBQgQgQgbAJIgBAAIgBABIAAAAIgBAAIAAABQgDAJAAAIIAAABQABAHgTgFQgBAHAFACIAAABQAJAHAGAKQAGAKADANIACACIABABIAAAAgABgk4IgKAGIgBACIgEAHQgKAHACAMIABAEQACAFADABIAEAFIABACQAlAIARgaIABgDQACgQgHgIIgCAAQgFgEgGgDIgZABgADYkWQAKADAEAJIAAgBQAJgMgGgRIgBgDQgFgDgHgBQAAAAgBAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQgCgLABgYIgBgBQgNgegdgNIgCAAQgzgKgfASIABgCQAagSAkACQgTgDgZABIAAACQgPADgHAKIAAAAIgCACIAAAEIAAABQABAJAEAGIAAACQAfAkBAgOIADgDQACgFAGAMIABAAQAHgDgGAIQgKAPAIADQABABAAAAQAAAAAAABQAAAAAAABQAAABAAAAIgBAHQAGAQAGgXIgBAEQAAANgHAHIAGAAQAHAAAFABgAAbkZQACAEADACQACAFAUAAIACAAQAOgKAGgQIABgCQAFgKgIgFIgBgBQgYgGgPAMIgBAAQgEABgCADIgCAEIAEgDIADgDQALgBADAKIAAADQAAAIgIADIgHABIgBgBQgGgDAAgHQAAAHADAFgACMkxIABACQAEAJgCAPIAAACIABAAQAOgCgEgIIAEABQAMABACgJIABgCQALgKAAgMIAAgCIgDACIgKAEIgEABIgEAAQgTAAgSgHIgCgDQAQAEAbgDIADgBIgDAAQgjABgWgNIgBACQgNANgbgDIAAADQAKAHAQAAIAAgBIAAAAIALgBIADAAIAKgCIADgBQAKAGAIAHgAAmlfIAAACQATAaAkgHIgCgBIgDgEQAIAFAFgDIADgCIgSgVIgBgCQgJgcghgEIgBAAIAAADQAXAEAKARIABAAQgLAGADAIIABABIATAPIAAABQgGABgDgEQgMgQgPAAQgHAAgHADgAJmnmQAHADgBAIIABADQgBADgDABIgFACIgIACQAIAJANgIQABgBAAAAQABAAABAAQAAAAAAAAQABAAAAAAQAFAJALgOIAAgCIABgBQAGgUgWgDQgJADgHAGgAurKbQgdgLgggBQgRAAgSADQgUAEAKgFQgXgDgXAGIgFACQACgGgNgBIgDAAQgFABAAgEQA2gEA6AGIABAAIACAAIACAAQAdADAeAHQAiAHAagMQAWAOAEgXIAAgDQgkgDAXgFIABAAIAHgBIADAAIAGACIAAAAQAMAFABAKIAEgBIADgCQABgOgOgFQAQAFALAAIACAAIgBgBQgMgPATANIACAAQAVgLgQgNQgMgIgMAIQgQALALAEIABAAQgEADgLgCIgCgBIAAAAIgGgCIgBAAIAAAAIAIgDQANgGAJgLIgUgCIgCgBQgKAAgJgCQgdgHgOgTQAEgBAAgGIABAAIAAgDQBShkBfhZIgGgDQAAAAAAAAQAAgBAAAAQAAAAAAgBQABAAAAgBIAKABIANgMIABgBIAPgNIAZgXQANgLAFgRQgPgdgYgVIgBAAQgMgBgFgHQgMgSgdgBIgCABQgSAGgLANQgFACAFAEIADADQgFgEgNAEIgBAAIgBAAIABABQAQADgKABIgCAAIAAACQAkAZAfAfIgBACQgGAHACARIAAABIAAABQg2Awg7ArQgUAPgNAVQgaAsggAkIgYAaIgCABQgUARgXAQQABAMAJAFIgBAAIgCAAQgEADgEAAQgKABABgYIAAgCIAAgFQBFhdBchFQA+gvA6g0IAAAAQgBgPgDgOIgBAAQgfgYgegaIgBgBQgsAJgYAbIgCAAQANANAQAIQATAKACAPIAAAFQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAAAQgcAQgVAXQhUBchcBSQgIAHgIAFQgzAegtAkQAGAUAbABIABABQACAAAAAEIgCABQgPAFgRABIgDABIgBgCIADgBQAKgCAJgEQgVgFgEgSQAogoA2gcQAOgGALgLQAfgbAdgcIARgTQAEAAACgDQADgDABgEIAEgDQAbgdAZgfQgOAKgTAIIgEAEIgCABIgCACIgBAAQgEAEgFABQgKAEgLACIgOADIgCAAIgZAAIgBgBIgRABIAAAAQgIgBgHgCQgGgCgIAAIgDgDIgEgCQgGgEgHgCIgBAAIgBgBIgDgDIgBAAIAAgBIgFgHIgBAAIgDgBIgCgBIgBAAIgCgDIgDgCIgFgGIABAEIgMAAIgqACIhMABIgOgBQgSgCgSABIgKAAIgYgBQgNgEgRgCIgLAAIgCgCQgogWgvADIgxgIQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAgBAAgBIABgEIBYABIAGAEQASAIAPANIAZACQBUAGBUgFIAPABQAdACAcAGQgZgegJgtIgBgDIAAgCQgCgwAYgiIAAgCQABgPgDgKIAAgBIgBgCQgtgXgChDIACAAIAAgCIAAgCQAMgKARgEIAAACIACAAQALAMASgKIgBgCIgEgHQgIgOALgUIgBgDIgShBIAAAAIgFgTIgDgKIAAAAIgJgcIgBgCQgVgBACgYIgCgBQgFgBAAgDQAAgGgBgEQADAJAJAFIAAAAIABAAIAAABQgDATAPAAIADAAQADgJAIgFIAAgBIABgBIAAgDIAAgMQALAFAFgLIAAgBIAAAAIABgBIAAgCIAAgBIABgBIABgCIAAgDQAFgGAIgCIAHALQADAHABAKQAMgIAGgOIABAAIACgGQAFgQgKgNIgHgIQgCgHADgHQADgIAFgHIABAAIAXgXIASgSIAegeIAJgKQAngoApgnIABgBQBCAlAuA5IABACIgHgGQgwgtg2gnIgCgBQgtArgsAtQgjAlgiAoIgPARIAGAEQAIAEACAJQACAKgDAJIgDAMQgGAPgLAJIgCAAIAOAvIACAFIAAABIABAFIACgDIAJgQQALgVAOgUQAyhKBQgsQAugZA0gUQhGAmhCAqQhKAwgqBNQgCAEgBAGIgHAKIgBAAIADAKIABACIADAGQAPAfAOAjQAAAAAAAAQABABAAAAQABAAAAAAQABAAABAAQACgUAPgIIACgBQAOAEAJAJIABABIAAAAQASAOAJAWIACAAIACABQAtAMAqgPIACAAQAbheBMgvIADgBIAAgCQApgjBAgNIADAAQAgBLAqA/IABACIADAFIABABQAPAYARAVIABABIADgBIAAAAIACACIAAAFIgFABIgBAAQgUgZgRgbIgEgGQgpg/gdhMIgDAAQg9AQgsAgIgBACQhFAtgdBTQgFAJAFAAQAMgCgRAPQAHAEADAIIAAACQAbAIAQASQAQASARAQIACACIABABIAAAAIACAAIAIAGIAIAIIAHAIIgFgEIAJAJIADADIAEADIAOAKIAFAFIALAHIAGADIACACIABAAQgEAKARAJIABACIAAACQAdATAOAiQgEAQgLAKIguAqIgLAKQAhAFAgACQClAJClABQAYABASAMIBMACIDLAGIgBACQhiALhmgEIhBgDQgJgBgHgEQgRgIgTgBQirgCisgHIAAAAIgNgBQgagDgXgLQgnAlglApIhmByQgCAHACABQAYAQAmAFQARACATAEQAeAIAQgQIADgBQASgEAUAHIACAAQAKAEAAANQgBAKgJADQgcAHgYAJIgDgBIgkgEIgBAAQgKAWgegBIgEAAIgBACQgOAOgQgLIgDAAQgMAEgJAGQgUgBgQgGgAsZJ3QAIAIASgBIAEgBQADgSAUAJQAIAAADgFQALgWgBASQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAAAQAFALAJgWIAAgBQgPgRgcAGQgEAQgWgBQgPAAgCARgAuGHjIgSAPQgxAngjA1IABAJIABAAIAAgCIADgCQArgqAogtIABgCIAAgCQANgKABgMIgBABgAxLDMIACADQADAEABAGQABAIgBAKQgTAagHAmIAAADQADBEAlAkIAAABIAGADIAQAEIABABIABAAQALAKAQAHIAHADIAAABIAmAAQAOgBANgEIABAAIAJgEIAMgHQAEgCACgDQAKgEAJgFIABgCIACgCIAIgGIACgBQAGgPADgPIAAgBIABgCIAAgBQAGglgPgmQgdhLgyg3QgDgDgBgGIAAgBIABgCIACgEIAAADIAAADQAvA4AfBJIAFALIAAAAQAGAIAFABQACAAADgEQADgEAGgCIAAgCQAdgWAjgOIADAAIAGgDIADgCIAAAAIAAgBQgNgXgUgRQAUAMAQAQIACABQATgIAZgNIACgBIAJgCIADgDIABAAIgEgDIgIgHIgKgKIgMgNIgMgMIgCAAIAAgBIAAAAIgCgCIgBgBQgSgQgQgQQgQgRgZgHIgCgBQgKgMgCgJIABAAQgKgCgLAJIgVABQgeABgRgKIgBgBIgBAAQgCAPAAAQIgBAAQgFASgJAOQAag5glgtIgBAAIgDgBQgEgDgDABQgKABgGALQgJASgMgIIgBgBIgBgBIAAACIAAAAIAAADIAAACIAAADIgDAAIAAgCIAAAAIAAAAIAAAAIgBgCIgBgBIAAAAIAAgBIgBAAIAAgBIgBgCIgCgCIgCgFIgJgUQgFgNgDgNIgEgOIAAgBIAAgDIAAgBIgBgDIgGgUIAAAAIgCgGIAAgBIgPgpIALAqIABABIABAGIAAAAIAFAVIACAGIAAAAIAAABIABABIAAABIADALIAAAAIAIAcIAFAVIABAEIABACIAAAAIABADIAAAAIAAACIAAAAIAAABIABABIAAABIAAABIAAAAIABABIAAAAIAAAAIAAABIAAABIAAABIABABIAAAAIADAMIAAAAIATBGIAAAAIAAABIAAABIABABIABAEIAAAAIAAABIABAFIACAFIAWBQIAMAuIACAAIACAAIADAAQALAFAIATIAAACQgFASgHAIIgCABQgIAFgOgBQAIAIAQgHIAAACQARADAMgHQAHgEAAAHQgBAFgJgBIgCABIAEABIABACIgDAAQguASgvAGIgCAAIgBgKIAbgLIACgBIAAgBIgBAAQgTgKgJgUIAAgCQACgRAKgHIACAAIAAAAIgWhiIgBgEIgBgEIgBgEIgBgIIAAgBIgHgZIAAgDIAAAAIAAgCIABACIAAAAIAAABIAAABIABAAIAAABIABAFIAFAUIAAAAIADANIABADIAAAAIABABIAAAAIABAEQANAwARAsIABABIABAAIAAgBQgKgwgLgvIAAAAIgBgEIAAgBIAAAAIgEgQIAAAAIAAgBIgDgJIgCgKIAAgBIgBAAIgBgEIAAgBIAAAAIAAgBIAAAAIAAgBIgBgCIAAgBIgEgMIgDgNIgCgHIAAgDIAAgBIAAgBIAAgCIABAEIAAAAIAAAAIABAAIAAACIALAgIABAEIAAACIABAEIAAAAIAAABIADAKIAGAaIABAGIABAAQAEgBgBgGIgBgDIAAgCIgEgWIgCgKIgBgBIgBgEIAAgBIgBgDIgJgiIAAgBIgBAAIAAgBIgCgHIgBgCIgBgFIAAAAIAAgBIgBgEIgEgOIAAgBIAAgBIAAAAIgBgCIAAgCIgBgBIAAgBIAAgBIgBgCIAAAAIAAgBIAAAAIAAgBIAAAAIgBgBIAAgBIAAgBIAAgBIAAAAIgBgCIAAgBIAAgBIgBgCIAAgCIgBgCIAAgCIgGgXIAAgBIAAAAIgHgcIAAAAIgCgEIAAgBIgBgDIgBgCIgBgIIgBgCIAAAAIgFgUIgDgLIgJgmQgFgUgHAEIgDADIAAAAIgCACIAAAFIAAACIABADIABACQACAJgHgDIgBgBIgBAAQgLAIALAXIABABQgFAHgBgLQgBgNgJgDIAJAgIADAJIAGAUIAAAAIAJAXQACgJAFAPIACgBQACgCgCgFQgGgRAEADIACAAQAFAEADAGQADAGABAHIAAADIAEAKIAHAZIABAEIAAACIABACIAAABIAAAAIAAABIABACIAAABIAAAAIAAABIAAABIABABIAAACIAAABIAAAAIAAABIABABIAAABIAAACIAAAAIAAABIABAAIAAABIAAAAIAAAAIAAABIAAABIABADIACAJIAAABIAAABIABADIAAABIAAABIAAACIAAAAIABABIAAAAIAAABIAAABIAAABIAAABIAAABIAAABIABACIAAAAIAAABIAAABIAAACIAAAAIABAFIACANIACAOIgBAAIAAAAIAAgCIgCgNIgDgRIgBgCIgBgGIAAgCIgBgEIAAAAIAAgBIgBgCIgBgDIAAAAIAAgBIgBgCIAAgBIAAAAIgBgCIgBgEIAAAAIAAgBIgBgEIAAAAIAAgBIAAAAIgBgCIAAgBIgBgBIAAAAIAAgCIAAAAIgBgBIgBgCIAAgCIAAAAIAAAAIgCgFIgBgCIgBgCIABACIACAHIAAAAIABAEIAAAAIAAABIAAABIAAABIAAACIABADIAAAAIAAACIAAAAIAAAEIAAAAIAAAEIAAADIAAABIAAABIAAABIAAABIgBAAIAAgBIAAgCIAAAAIAAgEIgBgDIAAgBIAAgCIAAgBIAAgCIgBgBIAAgEIAAAAIgBAAIAAgCIAAgBIAAgBIgBgDIgDgHIgGgLIAAADIADAJIABAHIAAADIAAACIAAABIAAAHIAAAGIgCAIIgBACIgBAAIgEAEQgJAHANABIAAACQgWAAgQgHIgDgCIgDAAIgCAAIAAADIAAAaIAAACQARAfAVAaIgDgDIAAAAIgBgBQgYgVgRgdIAAgDQADgUgCgHQgEgIgMALIAAADQABAOADAMIAAABQAJAoAfAUIAAAAIABABIAAABIABAAIAAABIAAABQABAFAEAAIAAAVIAAADQgVAYgDAqIAAANIAAACQANBBAuAfIABAAIAAAAQAOAKASAGQAEABAFAAQADgEgSgIIgDgBIAAgBQgDgCgBgDIgEAAIgHAAIgEgCIgCAAQgpgjgJhCIAAgDIAAgCQAEglAPgaIAHgLIAAgDQABgLgBgKIAAgCIgBgCIAAAAIAAgDIAAAAgAtvE1IABADIAAACQAAAbgGAaQgCAGADACIABABQAMgBARgLQATgMARgOIgCgBQgKgWgYgIIAAgCIgYAJIAAgCQAXgMgQgFQgJACAAAMgAvkFbQADAEACAAQAOgGgIgHIACAAQAQgCABgRIgEgGQgJgPAAANQAAAIgSgMIAAACIgCAAQgMgDgIANQgCAaAWAAgAxVhwIASBAIADAKIAGAUIAAAAIACAJIABADIABACIAAAAIAAAAIACAGIAAAAIAIAcIAAAAIAGAXIAAACIABACIAAACIABADIAAAAIAAABIABACIAAAAIAAAAIABACIAAABIAAABIAAAAIAAABIABABIAAABIAAAAIAAACIABACIAFATIACAKIACAAIAAABIAKAuIABADIAAACIABAEIABAAIACAKQAPA+ATA7IABAAIAAAAQAFgSgIgaIgYhPIgDgKIAAAAIgBgEIAAgBIgBgDIgOguIAAgCIgEgRIgEgOIgBgBIAAgBIAAgCIAAAAIgBgBIAAgBIAAAAIAAAAIgBgCIAAAAIAAgBIAAgBIAAAAIgBgBIAAgBIgBgDIAAgBIgBgCIgBgDIgGgWIAAAAIgIgcIAAAAIgCgGIAAgCIgBgBIAAgBIAAgCIgDgIIAAAAIgFgUIgCgJIgNgsQAFgCABAEIABAAQAAgFgBAAQgFgCAAgDQgCgJgDgEIgEgCIgDgBQAAAAgBAAQAAABAAAAQAAABAAAAQABABAAABgAtPJ4IgGgBIAGAAIABAAIAAABIgBAAgAvNJuQA2ABA0AFIgDAAIgLABQgxAAgrgHgAtXJyIgFAAIABAAIAGgCIAAABIAAABIgCAAgAMaJmQgMAAgJgCIgagDQgpgEglACQAlgKApAHIASAEQAOADAWgCQAVgGAFgXIAAgCIAFAJIgCABIgMATIgDAAQgJABgFAGIgHAAgAHbJhQgcgiAAg+IABgaQAHgEAIADIACABQAPAKAJAPQANAWAAAiIAAAAIAAAAIgCgDIAAABQgCgRgEgQIAAgBIgCAAIAAABQACAUgBANIgBAHIAAABIgBABIAAgCQABgVgDgSIAAgBIgFgSIgFgMQgCAEACAJIABACIADAQQABAPgFAKIAAgDIgBgWIAAAAIgDgSIgFgWIgCAAIAAAAIADAXIAAASIgBAMIgCgBIgBgLIgCgbIAAgBIgBABQgDAEABAUIACAEIgBAAIgBgEQgDgKgCgLIgCgRIgCAAIgCASIAAAWIACAPQAHAmAZASQADACADAAQALgDABgMIAAgCIABAAQABAFgBAEQgDANgRgBIgBABQgGAAgCgDgAH0I8IAAgDIAAACIABABIAAAIIgBgIgAMrIwIgBgBQAFgSgNgZIgBgBQgDglAKgZIAAgCIAAgDQAbg5AKhHQAEgYgKgQIgHgJQAAgbAFgVIAAgDQAEAPgEAfIAAACQAKAPAIASIABABQgBAxgRAiIgIASIABgBIAAAAQAyAAAzADIBoAHIBFAGIAFABIAcADIAbACQAvABAvgBQAuAAAtACQBKADBJABIABABIAAABIAAABIgBABIgCAAQh1AAh1gDIhbgCQgdAAgcgHIgEABIgKAAQgSABgTgEQgVgFgVgBQhWgFhXgDQgIAAgJgDQgLAcgJAdIAAADQgHA+AWAxQgGgMgIgCgAEEGUQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAABgBIAAAAIAkADIABABIgBABQgSAAgSgDgAwkBwIgCAAIAAAAIAAgBIAAgBIAAgBIgBgCIAAAAIAAgBIAAgBIgBgCIAAAAIAAgCIgBgBIAAgBIgCgJIgBgDIAAgBIAAAAIgBgBIAAgBIAAgBIAAAAIgBgBIAAgBIAAgBIAAgBIAAgBIAAgBIgBAAIAAgDIAAAAIAAAAIAAgBIgBAAIAAgBIAAgBIAAAAIAAAAIgBgCIAAAAIAAAAIAAgCIgBgBIAAAAIAAgCIgBgFIgHgYIAAgBIgDgMIAAAAIgEgPIgBgCIAAAAIgCgHIgBgBIgCgKIgBgBIAAAAIgFgUIgDgKIAAAAIgBgEIgEgPIgCgKIgDgKIgBgCIAAgCIAAgKIAOAxIABADIADAKIAFAUIAAAAIABABIACAJIABACIABAFIAAAAIABACIAAAAIAAABIAAABIAHAbIABAAIAAABIAFAYIABAAIAAACIABADIAAABIAAABIAAABIABACIAAAAIAAABIAAAAIABAAIAAABIAAABIAAABIAAAAIAAABIABACIAAABIAAAAIAAABIABABIAAAAIAAABIAAABIAAABIAAAAIABADIAAAAIAAABIAAABIABAAIADANIAAABIABADIAAAAIAAABIAAABIAAABIAAAAIABADIAAABIABABIAAAAIAAABgAoBAOIgCgCIgFgEIgBgBIgBgBIgCgBIAAgBIAAAAIgBAAIgBgCIgGgEIgFgFIgBgBQgBgCgDgBIAAgBIgFgLQgSglgGgtQgIg/gRg0IgBgCQgRgFgJgHQAbgRAnALQASAFAMgHQAQgKAGgGIAAADQgFALgMAFQgNAFgPgCQghgFgXAFQAdAaADA3QAEBTAfA7QABAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAIAAABIABAAIAAABIAAAAIAAABIABABIADACIABABIALAIIAAABIAHAEIADADIgBACIgBADIgCgCgAyVhuIgFgFIgJgEQgCgLACgLIAAgHIgHgHIAFgNQAFALAAAMIgBAMQgBAGAHAFQABAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQACACAAAFIABAEIABAEIgCgEgAyjixIADgPQACgJgHgFQgJgEgHgGQgQgMgGgXIgBgCQgDgKABgQQAHguASgjQANgZAUgTIACAAQAOAFAUALIACABQgkAZgGA2QgCALACAJQACAIAHAFQAPAGAJgMIACgBQAQAHAHAPIABACIgEADIgGAGQgEAEgCAEIgBACIAAANIAAAJIAAAHIgEgPQgDgOAHgKIABgBIAGgGIAAgCQAGgKgSgLIgCAAQgKANgTgGIgCAAQgEgIgCgIQgEgVAHgbQAIgdAYgPQgKgMgPgHIgCAAQgZApgKAxIgCAHQgBAFACAIIABAAIABABIABABQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABIgDAGIgBACQAAAAAAAAQgBABABAAQAAAAAAABQAAAAAAABIABAAQAJAKgEAOIABAAQAGAUAUAFIABABIACAGIAGAVIATgEIANgEIACgBQAFgBAFgCIAHgDIAFgIIAIgJIAIgIIA8g+QA5g+A3hAIACAAQARAFAPAHIAGADQAwAWAnAlIAbAaQAjAiAoAeQAEADAHABQAMgHAIgJQAJgKAGgNIABgCIABAAQgEAQgJAMIgDADQgHAIgJAGQgRgBgMgHQgMgHgKgLQg5g7hAgzQgPgMgTgIIgFgCQgPgGgRgEIgdAgQgpAugoAwIgbAgQgIALgJAIQgJAIgJAGIgQAOIgDAHIgDABIgEADQgNAHgPACIgPADIgIACIgGADQgKAHgGAKIACgIgAy1ldIgUBIIAAAWIAAACQAEAMAFAKIABACIAKAEQALAGAIALIAJAOIACACQAFgBABgEQABgKgEgIIAAgCIAAgCQgWgGgLgRQgHgMgDgQIAAgCIAAgDQADgjAHggIACgJIgCAAIAAACgAFsirIAAAAIgBgBQABgEADgEIABgDIAFgPIAAgCIAAgBIABgBQACgJADgJIAAgDIAAgBIAFgNIgDABQAFgKAGgHIAAgBIACgBIAAAAQAFgFAGgEIAAABIgOAWIgBACIABAAIgCABIAAAAQgEAHgCAHIgEASIgJAcIgDAGIgBABIAAABIgCgBgABJjLQgFgBgEgCIgCgBIAAgBIgEgCIAAgBIAAAAIgBgBIgEgDIgCAAIAAgBQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBIABAAIADAAIAFADIADADIAEADQAFADAFAAIAMAAIAGgCIABgBIACAAIABgBIABgBIABAAIABgBIAFgGIABAAIAEgIIAAgBIACgEIABgEIACgBQABAAAAABQABAAAAAAQABABAAAAQAAABgBABIAAACIgBACQgBADgCADIgBABQgCAGgEADIgEAEIgEADIAAAAIgCABIgEABIgDACIgQAAgAoEkRQgHgUgIgPIAAgBQAOAJAWAEIABgBQAFgQgCgWIgBAAQgJgPAGADIACAAQAeAAABgcIAAgCQgTgFgYACIgBAAQgLgsgWghQAaAaAJArIABABQAKAFAYABQAFAAAFADQgBAggcAEIgDAAIABABQAMAbgPAVIAAACQgTgHgHAHIAAACQACAMAHAIIAAACIgBAAQgDAAgCgGgABSkQQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAgBgBQgEgEACgGIACgGQABgEADgBIAEgBIAIABQABAAABAAQAAAAABABQAAAAAAABQABAAAAAAQACAEAAAFQABAHgFAFIgDABIgFAAIgGAAgAqFkpIgBAAQgTgYgPgcIAAgCIACgHQgBAAAAAAQgBAAAAgBQAAAAAAgBQgBgBAAgBIgCgGIAAgBQgDgEAAgFIAAAAQgJgQgHgUIAAgCIAAgTQAIgDAGgFIABgCQBagZBAg2IACAAQgFAkgEAVIACAEIgBAGQgDgCgEAAQgQAAgPAIIgBABIgEAEIgGADIgDACQgFAFgGACIgDACIgCACIAAAAQgEAGgHAAIAAABIAAACQACAPAFALIAAADQgEASgIADQADgCAAgEIAAgBQADgbgGAZIAAACQgBABAAABQAAAAAAAAQAAAAAAAAQAAAAAAgBQADgSgCgYIAAgCIAAACQgFAGgDAGQAEgTAJgRIABgCQAJgTgHgDQgFABgBACIgXA3IgBACIgCAJIgBACIgDAEQAKAPAGgQQgBAMAJAKIAAACQgOgKgUgEIgBACQgMAKgBAUIAAACIABAAQAIAgAZgSIADgDIABAAIgBAEQgDAJgLAKQAAAAAAABQgBAAABABQAAABAAAAQAAABABAAIACADQADAFACAHIgBgBgAqgmXIgBAGQgDARgEAIIABACIAAABQACAEABAEIAFgNIAAgCQAAgKADgKIABgFIAGgLQALgUgGgOQgMARgEAagAqrl+IAAACIABgCQAJgeAHghQgJgBgDAGIgBACQgHgFgNAMIAAADQACAOAFAMIAAABQAFgBABgLIADAfgAqAnIIgCACQgJAbgLAYIgCAEIgCAEIABAKIACAAQAHgEAEgHIACgDIADgKIAAgCQADgLAFgIQALgRgKgJIgBgBIgBABgApQnVQgBAOgGAKIgDAFIADgCIADgCQAEgEAGgCIABgBQAIgQgCgTQgLADgCAOgApDnJIABAAIACADQAHACAFgQQAFgLgBANIAAAAIAAABIAAgBQAagOgEghIgBgCIAAACQgOAOgMAEIgBAAQgGAUgHASgACgk5IADAAIgHABIAEgBgAoxl4IgBgRIAAgMQAAgIACgIIAAgBQADgEAEgCQAKgBAJACIABABIADACIABAAIAFADIACADIAAAAIACADQAAABAAABQAAAAAAAAQAAABAAAAQAAABgBAAQgCgEgDgBQgFgDgFgCIgBAAIgBAAIgBgBIgKgBIgCABIgCACIgBACIgBABIAAAHIgBALIAAAWIAAACIgFgBgAoUmDQgJgIAHgKQACgDADgBIAAAAQAGgBADACQADABACADQACADAAAFIAAADIgCAEIAAAAIgDACQgEADgDAAQgEAAgDgDgAJgmEQgLAAgHgIIgBgBIgBgBIAAgCIgEgDIAAAAIgCgBIgBgBIgBgCIgGgIIAAgCIABgBIABAAQAGAFAGAHIAEAFIACABIAAABIABABQAEAFAGABIACAAIA3AAQAAAAABAAQAAgBABAAQABAAAAAAQABAAAAAAIABgCIABgBIADgBQAAgBAAAAQAAgBABAAQAAAAAAAAQABgBAAAAIACABIAAAAIAAABIgBAEIgBACQgBAAAAAAQAAAAgBAAQAAAAgBABQAAAAAAAAIgBACIgHABIgkABIgSgBgAKmmQIgBgCIgBgBIAAgBIgBAAQgEgFAAgGQAAAAAAgBQAAAAAAAAQAAAAABAAQAAAAAAgBIABAAIACAAIAAABIAAAAQACANANADIABAAIAAABIAAAAIAAACIgEAAQgFAAgEgDgAKdnBQgCgEAAgGIgBgDIAHgKQAHgJAKgDQAHgCAIAAIACAAQADAHAAAFIABACQABATgTAKIgDAAIgJACQgJAAgDgIgAKinEIAAABQAYAMAJgcIACAAIABgFQAAgLgMAAQgOAEgCAFIAAAAQAMACgDALQgBAKgKgCIgGABgAMWoCIgCgCIgBAAIgBgBIADAAQAOgDgXgJQgJgDgKgDQgNgCgNgBIgEAAIgBAAIgCAAIgBAAIgPACIAKgGQANgIAUgCIAAgBQgTgCgQACIgEAAIgKABIgEABIAAAAQgJACgIADIACgEIADgEIAEgFIABgBIAAACIAAAAIgCADIADABIAEAAIABAAIACABIAMgBIAEgBIAIgBQAWgFALAHIAFADQgQADgMAGIgBABIABAAQANACALADQAjAIAQASIgEAAQgLgBACAGIgJgJgAnYojIAAAAIAAAAIAAAAgAl8pdIAAgEIABAEIAAAAIgBAAgAGCq7IgCgBIAAgBIADAAIAAABIAAABg");
	this.shape_15.setTransform(9.4,8.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-143.3,-105.4,304.5,198.9);


// stage content:



(lib.pronoun_Scene16 = function(mode,startPosition,loop) {
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
		
		 window.open ("pronoun_Scene17.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("pronoun_Scene15.html","_self");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// TEXT
	this.instance = new lib.textyouplobj();
	this.instance.setTransform(275,185.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// main
	this.btn_menu = new lib.skiptomenu();
	this.btn_menu.setTransform(514.1,20.3);
	new cjs.ButtonHelper(this.btn_menu, 0, 1, 2, false, new lib.skiptomenu(), 3);

	this.instance_1 = new lib.pronounheader();
	this.instance_1.setTransform(275,18);

	this.instance_2 = new lib.Youplural();
	this.instance_2.setTransform(262.3,181.7,1.352,1.352);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.btn_menu}]}).wait(1));

	// btn
	this.instance_3 = new lib.Copyright("synched",0);
	this.instance_3.setTransform(275,389.5);

	this.btn_goBack = new lib.goNext();
	this.btn_goBack.setTransform(57.6,352.3,1,1,0,0,180);
	new cjs.ButtonHelper(this.btn_goBack, 0, 1, 2, false, new lib.goNext(), 3);

	this.btn_goNext = new lib.goNext();
	this.btn_goNext.setTransform(494,352.3);
	new cjs.ButtonHelper(this.btn_goNext, 0, 1, 2, false, new lib.goNext(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_goNext},{t:this.btn_goBack},{t:this.instance_3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(284.2,198.6,537.1,400.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;