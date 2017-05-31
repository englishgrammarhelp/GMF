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
		{src:"sounds/_2a.mp3", id:"_2a"},
		{src:"sounds/_3b.mp3", id:"_3b"},
		{src:"sounds/_4b.mp3", id:"_4b"},
		{src:"sounds/_4c.mp3", id:"_4c"},
		{src:"sounds/_5b.mp3", id:"_5b"},
		{src:"sounds/_6b.mp3", id:"_6b"},
		{src:"sounds/_7a.mp3", id:"_7a"},
		{src:"sounds/_7b.mp3", id:"_7b"},
		{src:"sounds/JinglePreposition.mp3", id:"JinglePreposition"},
		{src:"sounds/MenuPreposition.mp3", id:"MenuPreposition"},
		{src:"sounds/s_coolcheer.mp3", id:"s_coolcheer"},
		{src:"sounds/above.mp3", id:"above"},
		{src:"sounds/across.mp3", id:"across"},
		{src:"sounds/alongside.mp3", id:"alongside"},
		{src:"sounds/around.mp3", id:"around"},
		{src:"sounds/behind.mp3", id:"behind"},
		{src:"sounds/below.mp3", id:"below"},
		{src:"sounds/beneath.mp3", id:"beneath"},
		{src:"sounds/between.mp3", id:"between"},
		{src:"sounds/down.mp3", id:"down"},
		{src:"sounds/from.mp3", id:"from"},
		{src:"sounds/_in.mp3", id:"_in"},
		{src:"sounds/infront.mp3", id:"infront"},
		{src:"sounds/inside.mp3", id:"inside"},
		{src:"sounds/into.mp3", id:"into"},
		{src:"sounds/near.mp3", id:"near"},
		{src:"sounds/off.mp3", id:"off"},
		{src:"sounds/on.mp3", id:"on"},
		{src:"sounds/out.mp3", id:"out"},
		{src:"sounds/outof.mp3", id:"outof"},
		{src:"sounds/outside.mp3", id:"outside"},
		{src:"sounds/over.mp3", id:"over"},
		{src:"sounds/preposition.mp3", id:"preposition"},
		{src:"sounds/slurp.mp3", id:"slurp"},
		{src:"sounds/to.mp3", id:"to"},
		{src:"sounds/toward.mp3", id:"toward"},
		{src:"sounds/under.mp3", id:"under"},
		{src:"sounds/up.mp3", id:"up"},
		{src:"sounds/upon.mp3", id:"upon"},
		{src:"sounds/within.mp3", id:"within"}
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


(lib.ButtonBackground = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(0.1,1,1).p("AEtC5IpZAAIAAlxIJZAAg");
	this.shape.setTransform(31.2,19);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AkrC5IAAlxIJYAAIAAFxg");
	this.shape_1.setTransform(31.2,19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,-0.6,62.2,39.2);


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



(lib.prep_Scene7 = function(mode,startPosition,loop) {
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
		
		 window.open ("prep_Test.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("prep_Scene6.html","_self");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Definition
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AggA9QgRgHgBgMQAAgMAPgBQAFABAKADQALADAFAAQAWAAgBgJQAAgGgQgIQgWgKgGgDQgRgMAAgQQAAgYAZgIQAPgEAbAAQAMAAAGADQAHADABAMQAAAUgMABQgMAAgCgKIgJgBQgbAAAAAIQAAAEAPAIQAXALAJAFQAQALABAQQAAAUgTAKQgQAIgTAAQgQAAgNgEg");
	this.shape.setTransform(488.8,75.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAXA1IgDgYQgCgNAAgLIABgJIAAgKIABgEIAAgGQAAgJgFAAQgKAAgIANQgJAMgGASIgBALIAAAKIgBALIgBAKQAAAHgEAEQgFAFgHAAQgHAAgFgFQgEgEAAgHIgBgKIgBgKIACggIACgeIgBgLIAAgKQAAgHAEgEQAFgFAHAAQAPAAABATIABABQARgRARAAQAWAAAIASQAGANAAAYIAAAJIAAAFQAAAJACAPQADAOAAAJQAAAHgFAEQgFAFgGAAQgPAAgCgPg");
	this.shape_1.setTransform(477,75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgOBUQgEgEAAgHIAAgVIgBgWIABgaIABgXQAAgIAFgEQAFgFAHABQAFgBAEAFQAFAEAAAIIgBAXIgCAaIABAWIAAAVQAAAHgEAEQgFAFgFAAQgHAAgFgFgAgKg7QgFgFAAgGQAAgIAFgFQAGgFAFAAQAIAAAFAFQAGAFAAAIQAAAGgGAFQgFAGgIAAQgFAAgGgGg");
	this.shape_2.setTransform(467.5,72.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAcA1IgTAJQgIACgEAAQgcAAgPgPQgOgPAAgfQAAgZAVgVQAVgUAbAAQALAAAPAHQASAHAAAKQAAAEgDADIgCAMIgBAQQAAAVAEAJIAFAMIAFAMQAAAGgFAEQgFAEgGAAQgGAAgLgLgAgPgXQgMANAAAPQAAAPAFAIQAGAIALAAQAGAAAGgCQAHgDAFgFQgDgaAAgNIAAgJIACgLIgEgBIgDgBQgOAAgMAMg");
	this.shape_3.setTransform(457.2,75.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJBRQgGgEAAgGIABgNIAAgNIgCg7IgWgBQgOgCAAgOQgBgGAFgFQAEgFAIAAIAUACIgBgNIgBgLQAAgGAFgFQAFgEAGAAQAQAAAAAdIAAAKIAMgCQANABAFACQAKACAAALQgBAIgEADQgFAFgHAAIgGAAIgFAAIgMABIADA8IAAAGIAAAGQAAAbgRAAQgEAAgFgEg");
	this.shape_4.setTransform(444.9,73.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAXA1IgDgYQgCgNAAgLIABgJIAAgKIABgEIAAgGQAAgJgFAAQgKAAgIANQgJAMgGASIgBALIAAAKIgBALIgBAKQAAAHgEAEQgFAFgHAAQgHAAgFgFQgEgEAAgHIgBgKIgBgKIACggIACgeIgBgLIAAgKQAAgHAEgEQAFgFAHAAQAPAAABATIABABQARgRARAAQAWAAAIASQAGANAAAYIAAAJIAAAFQAAAJACAPQADAOAAAJQAAAHgFAEQgFAFgGAAQgPAAgCgPg");
	this.shape_5.setTransform(433,75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AglAxQgRgRgBgbQgBgYAPgUQASgYAeAAQAXAAAOATQAMARAAAZQAAAZgOATQgRAWgZAAQgWAAgPgPgAgQgTQgHALAAANQAAAOAIAIQAHAGAIAAQAIAAAIgHQAIgIABgOQABgkgVAAQgMAAgJANg");
	this.shape_6.setTransform(420.2,75.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgkAyQgSgOAAgaQAAgWAQgYQAUgcAWgBQAMABARAGQATAIAAALQAAAFgDAFQgEAFgHAAQgGAAgHgGQgGgGgPAAQgHAAgKASQgKASAAAKQAAAMAJAIQAIAGAMAAQAHAAAMgGQAMgGADAAQAGAAAEAFQAFAEAAAGQAAAJgUAKQgSAHgLABQgYgBgSgPg");
	this.shape_7.setTransform(407.7,75.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag1BZQgNgLAAgmQAAgQACgdIACgvIgBgMIgBgNQAAgRARAAQAFAAAEACIAagFIAVgBQAdAAATAGQAKAFAAAKQAAAGgEAFQgFAGgHAAIgFgBQgTgFgSAAIgRABQgKABgLADIgBAvIAsgFIAcgCQAHAAAFAEQAEAFABAHQAAAMgPACIgcACIgwAFIgBAYQAAAXADADQABABANAAIAUAAIAWAAIAHgBIAHgBQAHAAAEAEQAGAFAAAHQAAAOgOACQgLACgjAAQgmAAgMgKg");
	this.shape_8.setTransform(384.2,72.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag+BMQgPgLAAgPQABgHAEgFQAFgEAHAAQALgBAFALQAHAOAXAAQASABATgJQATgJABgLQAAgPgNgFQgIgDgZAAQgTgBgRgGQgVgJAAgSQABgXAYgTQAXgTAcAAQALAAARAFQAUAHAAAIQAAAHgDAEQgFAGgIAAQgFgBgLgCIgQgCQgPAAgNAHQgOAHABAJQAAAFAEADQAEACAJABIAbACQAbACAPAMQARAMAAAZQAAAfgjAPQgbAMgfAAQgeAAgRgNg");
	this.shape_9.setTransform(368,72.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AA7BYQgJgBgJgVQgHgOgEgSIgcADQgRABgKACQgFANgOAaQgFAIgJAAQgGAAgFgEQgGgFAAgHQAAgGASgiQgCgEAAgDQABgGAKgDQARgbAVgfQAbgsAHAAQANAAAEAQIAHAlIASBLIAGAQQAEAKAAAFQAAAHgFAEQgFAFgGAAIgBAAgAgIAKIAPgCIAQgBIgHglIgYAog");
	this.shape_10.setTransform(350.8,72.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag/BXQgEgEAAgHIAAgaIAAgbIAAhcQAAgIAFgGQAGgIAKABIAeACQAQACAJAGQAyAZAAAlQAAAQgKAJQgLAMgVAIQAgASAPASQAEAEAAAGQAAAHgFAEQgEAFgHAAQgHAAgFgFQgjghgpgNIABAmQAAAHgEAEQgFAFgHAAQgHAAgFgFgAgjADIAFAAQAdAAAMgFQAGgDAFgFQAFgFAAgDQAAgNgRgMQgOgMgRgBIgOgBg");
	this.shape_11.setTransform(334.7,72.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAxBZQgFgFAAgGIAAgZIgBgbIAAgLQgSAAgZAFIgtAJIgCAZIgBAZQAAAGgFAEQgEAEgHAAQgHAAgFgEQgEgFAAgGIACgiIACgjIABgqIAAgsQAAgHAFgEQAFgEAGAAQAHAAAFAEQAEAFAAAGIAAAbIgBAbIgBALIAAAMIAtgJQAYgEATgBIACgqQAAgKAFgMQAHgOAIAAQAGAAAFAEQAFAEAAAHIAAAEQgDAJAAAFIAAALIgBAKIgBAhIgBAfIABAaIABAaQAAAGgEAFQgFAEgHAAQgHAAgFgEg");
	this.shape_12.setTransform(317.8,72.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag0BZQgEgFAAgGIAAghQAAgSACgiIACg2QABgfARACIALgBIARgBQAVAAAUAPQAWARAAAYQAAAdgYAQQgVAQgbAAIgKgBIAAA2QAAAGgFAFQgEAEgHAAQgGAAgFgEgAgVgtIgCAoIAIABQAQABANgJQAMgKAAgOQAAgLgMgHQgLgIgMAAIgHABIgEAAIgBAQg");
	this.shape_13.setTransform(302,71.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag9BGIACglQADgxAAg+QAAgHAFgFQAFgEAHAAQAHAAAEAEQAFAFAAAHQAAA+gDAzIgCAcQAbAAAqgNIAFgBQAHAAAFAFQAEAFAAAGQAAAKgKAFQgOAGgdAFQgYAEgRAAQgdAAAAgZg");
	this.shape_14.setTransform(278.9,72.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AA7BYQgJgBgJgVQgHgOgEgSIgcADQgRABgKACQgFANgOAaQgFAIgJAAQgGAAgFgEQgGgFAAgHQAAgGASgiQgCgEAAgDQABgGAKgDQARgbAVgfQAbgsAHAAQANAAAEAQIAHAlIASBLIAGAQQAEAKAAAFQAAAHgFAEQgFAFgGAAIgBAAgAgIAKIAPgCIAQgBIgHglIgYAog");
	this.shape_15.setTransform(263,72.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhRBaQgEgFAAgHIAAgOIABgOIABgVIAAgUIAAgVIgBgWIgBgVIgCgVQAAgHAHgFQAGgGAHAAQAJAAALAPQAzBMA0AuIAAgSQAAg4gCgUIgBgNIgBgMQAAgRARAAQATAAAAA7IAAATIgBBIIgCASQgCAQgPAAQgIAAgLgKQgtgog2hIIgBAkIAAAcIABAbQAAAjgRAAQgJAAgFgFg");
	this.shape_16.setTransform(244.6,72.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag9BIQgagVAAgiQAAgmAZghQAcglApAAQAoAAAVATQAUATAAAlQAAAmgXAhQgaAlgpAAQgjAAgYgUgAgkgiQgRAYAAAbQAAATAOAMQAPAMAWAAQAYAAARgZQAQgXAAgcQAAgYgLgKQgLgJgaAAQgZAAgSAZg");
	this.shape_17.setTransform(225.3,72.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag2BVQgFgFAAgGQAAgHAFgFQAFgEAHAAQAJAAAOgCIgBg1QAAgeADgdIgZAAQgIAAgEgEQgFgEAAgIQAAgGAFgFQAEgDAGgBIAjgBQAUAAAjAFQAOACAAAOQAAAHgFAFQgFAEgFAAIgfgEQgCAWAAAiIAAA0IAgAAQAHAAAEAFQAFAEAAAGQAAAIgFAEQgEAEgHABIgVAAIgUAAIgVACIgYACQgIAAgEgEg");
	this.shape_18.setTransform(209.1,72.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgKBVQgFgFAAgHIAAgFIABgFIgBgQIgBgRQAAgPgCgZQgDgfAAgMIgHAAQgaAAgPgDQgNgEAAgMQAAgGAEgFQAFgFAIAAIATACIASABIAWAAIATAAIAbABIAbABQAHAAAEAFQAFAFAAAGQAAAHgFAFQgEAEgHAAIgdgBIgcgBIADAvQACAdAAARIABAMIABAMQAAAJgEAHQgFAJgIAAQgFAAgFgEg");
	this.shape_19.setTransform(194.4,72.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag2BVQgFgFAAgGQAAgHAFgFQAFgEAIAAQAIAAAOgCIgBg1QAAgeADgdIgZAAQgIAAgEgEQgFgEAAgIQAAgGAEgFQAFgDAGgBIAigBQAVAAAjAFQAOACAAAOQAAAHgFAFQgFAEgFAAIgfgEQgCAWAAAiIAAA0IAgAAQAHAAAFAFQAEAEAAAGQAAAIgEAEQgFAEgHABIgVAAIgUAAIgWACIgXACQgIAAgEgEg");
	this.shape_20.setTransform(179.3,72.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ag+BMQgPgLAAgPQABgHAEgFQAEgEAIAAQALgBAFALQAHAOAXAAQASABATgJQATgJABgLQAAgPgNgFQgIgDgZAAQgTgBgRgGQgVgJAAgSQAAgXAZgTQAXgTAcAAQALAAARAFQAUAHABAIQgBAHgDAEQgFAGgIAAQgFgBgLgCIgQgCQgQAAgMAHQgOAHABAJQgBAFAFADQAEACAJABIAcACQAZACAQAMQAQAMAAAZQABAfgjAPQgaAMggAAQgeAAgRgNg");
	this.shape_21.setTransform(164.5,72.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ag9BIQgagVAAgiQAAgmAZghQAcglAoAAQAqAAAUATQAUATAAAlQAAAmgWAhQgbAlgpAAQgiAAgZgUgAgkgiQgSAYAAAbQABATAPAMQAOAMAWAAQAYAAARgZQAQgXAAgcQAAgYgLgKQgLgJgbAAQgYAAgSAZg");
	this.shape_22.setTransform(146.6,72.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag0BZQgEgFAAgGIAAghQAAgSACgiIACg2QABgfARACIALgBIARgBQAVAAAUAPQAWARAAAYQAAAdgYAQQgVAQgbAAIgKgBIAAA2QAAAGgFAFQgEAEgHAAQgGAAgFgEgAgVgtIgCAoIAIABQAQABANgJQAMgKAAgOQAAgLgMgHQgLgIgMAAIgHABIgEAAIgBAQg");
	this.shape_23.setTransform(130.7,71.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Ag1BZQgNgLAAgmQAAgQACgdIADgvIgCgMIgBgNQAAgRAQAAQAGAAAEACIAagFIAVgBQAeAAASAGQAKAFAAAKQAAAGgEAFQgFAGgHAAIgFgBQgTgFgSAAIgQABQgLABgLADIgBAvIArgFIAdgCQAHAAAFAEQAEAFAAAHQAAAMgOACIgcACIgwAFIgBAYQAAAXACADQACABAOAAIATAAIAWAAIAHgBIAHgBQAGAAAFAEQAGAFAAAHQAAAOgOACQgLACgkAAQgmAAgLgKg");
	this.shape_24.setTransform(117.1,72.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("Ag/BXQgEgEAAgHIAAgaIAAgbIAAhcQAAgIAFgGQAGgIAKABIAeACQAQACAJAGQAyAZAAAlQAAAQgKAJQgLAMgVAIQAgASAPASQAEAEAAAGQAAAHgFAEQgEAFgHAAQgHAAgFgFQgjghgpgNIABAmQAAAHgEAEQgFAFgHAAQgHAAgFgFgAgjADIAFAAQAdAAAMgFQAGgDAFgFQAFgFAAgDQAAgNgRgMQgOgMgRgBIgOgBg");
	this.shape_25.setTransform(101.8,72.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("Ag0BZQgEgFAAgGIAAghQAAgSACgiIACg2QABgfARACIALgBIARgBQAVAAAUAPQAWARAAAYQAAAdgYAQQgVAQgbAAIgKgBIAAA2QAAAGgFAFQgEAEgHAAQgGAAgFgEgAgVgtIgCAoIAIABQAQABANgJQAMgKAAgOQAAgLgMgHQgLgIgMAAIgHABIgEAAIgBAQg");
	this.shape_26.setTransform(87.5,71.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AA7BYQgJgBgJgVQgHgOgEgSIgcADQgRABgKACQgFANgOAaQgFAIgJAAQgGAAgFgEQgGgFAAgHQAAgGASgiQgCgEAAgDQABgGAKgDQARgbAVgfQAbgsAHAAQANAAAEAQIAHAlIASBLIAGAQQAEAKAAAFQAAAHgFAEQgFAFgGAAIgBAAgAgIAKIAPgCIAQgBIgHglIgYAog");
	this.shape_27.setTransform(61.8,72.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Background
	this.btn_menu = new lib.skiptomenu();
	this.btn_menu.setTransform(514.1,20.3);
	new cjs.ButtonHelper(this.btn_menu, 0, 1, 2, false, new lib.skiptomenu(), 3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgnAyQgTgPgBgbQABgbAPgUQASgYAbAAQAUABANAGQASAJAAASQAAANgOAKQgGAEgUAIIgmARQAGAGAIADQAHADAJAAQAPAAAMgHQAJgFAGAAQANgBAAAMQAAAOgUAJQgQAGgTAAQgaAAgSgNgAgPgbQgHAHgFAPIAagMQAOgGAKgGQgJgFgMAAQgJAAgIAHg");
	this.shape_28.setTransform(478,265.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgQA0IgnhdIgBgGQAAgHAEgFQAGgEAHABQAJgBAFAJQAGAOATAzIAQgmIAKgaQAFgJAKAAQAGAAAFAFQAFAEABAGQAAAFgUAqIgYAzQgBAFgEAEQgEAEgFgBQgLABgFgMg");
	this.shape_29.setTransform(465.9,265.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgOBUQgEgEAAgGIAAgWIgBgWIABgaIABgYQAAgGAFgFQAFgFAHABQAFgBAEAFQAFAFAAAGIgBAYIgCAaIABAWIAAAWQAAAGgEAEQgFAFgFAAQgHAAgFgFgAgKg7QgFgEAAgHQAAgIAFgFQAGgFAFAAQAIAAAFAFQAGAFAAAIQAAAHgGAEQgFAFgIABQgFgBgGgFg");
	this.shape_30.setTransform(456.7,262.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgKBRQgEgEAAgHIAAgMIAAgNIgCg6IgWgCQgOgCAAgNQgBgHAFgFQAFgEAGgBIAVACIgBgNIgBgLQAAgHAFgEQAFgEAGAAQAQAAAAAdIAAAJIAMgBQANAAAFACQAKAEAAALQAAAHgFADQgFAFgHAAIgGAAIgFAAIgMABIADA8IAAAFIAAAHQAAAbgRAAQgEAAgGgEg");
	this.shape_31.setTransform(447.5,263.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgkAzQgSgPAAgaQAAgWARgYQASgdAYABQAMAAAQAGQAUAIgBALQAAAFgDAFQgFAFgHgBQgEABgIgGQgGgFgOgBQgIABgKARQgLARAAALQABAMAIAIQAJAGAMAAQAIAAALgGQALgGAEAAQAGAAAFAEQAEAFAAAGQAAAJgUAKQgSAHgLABQgYAAgSgPg");
	this.shape_32.setTransform(435.4,265.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgnAyQgTgPgBgbQAAgbAQgUQASgYAbAAQAUABANAGQASAJAAASQAAANgOAKQgHAEgUAIIglARQAGAGAIADQAHADAJAAQAPAAAMgHQAJgFAGAAQANgBAAAMQgBAOgTAJQgRAGgSAAQgaAAgSgNgAgPgbQgHAHgFAPIAagMQAOgGAKgGQgIgFgNAAQgJAAgIAHg");
	this.shape_33.setTransform(422.6,265.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgpBSQgCgEAAgDQAAgHAGgEQAFgFAGAAQAIAAAFAIIAJAQQAEAIAEAAQAGAAABgRQAAgMgEg1IgEg8QAAgHAEgGQAFgGAIAAQAFAAAGADQAGAEAAAGIAEA/IADBFQAAARgLAPQgMAPgRAAQgbAAgSgogAAEhbQgEgFAAgHQAAgIAEgFQAFgFAIAAQAHAAAGAFQAFAFAAAIQAAAHgFAFQgGAFgHAAQgIAAgFgFg");
	this.shape_34.setTransform(410,265.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAgBYQgIAFgJABQgIACgHAAQgaAAgSgRQgSgRAAgbQAAgfASgSQASgTAbAAQAJAAAHACQAGACAFADQACgnACgQQACgOANAAQAHAAAEAFQAFAEAAAHQAAARgDAiQgDAgAAARQAAAqADAOIAAAEQAAAGgEAEQgFAFgGAAQgJAAgEgIgAgXAFQgIAKAAAUQAAAMAJAKQAJAJANAAQAHAAAEgDQAEgBAHgGIAEgEIAAgrQgEgHgGgCQgGgDgJAAQgPAAgJAIg");
	this.shape_35.setTransform(399.1,262);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAcA2IgTAIQgIACgEAAQgcAAgPgPQgOgQAAgeQAAgaAVgTQAVgVAbAAQALAAAPAGQASAIAAAKQAAAEgDADIgCAMIgBAQQAAAVAEAJIAFAMIAFALQAAAHgFAEQgFAEgGAAQgGAAgLgKgAgPgXQgMANAAAOQAAAQAFAIQAGAIALAAQAGAAAGgCQAHgDAFgEQgDgbAAgNIAAgJIACgLIgEgBIgDgBQgOAAgMAMg");
	this.shape_36.setTransform(385.6,265.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgKBRQgEgEAAgHIAAgMIAAgNIgCg6IgWgCQgOgCAAgNQgBgHAFgFQAFgEAGgBIAVACIgBgNIgBgLQAAgHAFgEQAFgEAGAAQAQAAAAAdIAAAJIAMgBQANAAAFACQAKAEAAALQAAAHgFADQgFAFgHAAIgGAAIgFAAIgMABIADA8IAAAFIAAAHQAAAbgRAAQgEAAgGgEg");
	this.shape_37.setTransform(362.9,263.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAXA5QgPAGgOAAQgQAAgMgHQgNgIgCgQQgFgdAAgVQAAgPAEgTQACgNANAAQAIAAAEAEQAFAEAAAHIgCAQIgBAQIABAbIADAUIAGACIAFABQALAAAQgEIAAgUIAAgSQAAgYACgSQACgNAOAAQAHAAAEAEQAFAEAAAHIgDApIAAAWIABAXIAAAIIAAAHQABAHgFAEQgFAEgGAAQgKAAgFgJg");
	this.shape_38.setTransform(350.9,265.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AglAxQgRgRgBgbQgBgYAPgUQASgYAeAAQAXAAAOATQAMARAAAZQAAAZgOATQgRAWgZAAQgWAAgPgPgAgQgTQgHALAAANQAAAOAIAIQAHAGAIAAQAIAAAIgHQAIgIABgOQABgkgVAAQgMAAgJANg");
	this.shape_39.setTransform(338.3,265.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAbBVQgDgJgCgRQgCgRAAgLIAAgIIAAgJIAAgKQgBgFgFAAQgNAAgJAKQgFAGgKARQAAAqgEAIQgEALgKAAQgHAAgFgFQgFgFAAgGIABgGQABgDABgdIAAhMIAAgEIABgTIgBgKIgBgLQAAgGAFgFQAEgEAHAAQAMAAAEAMQACAHAAAPIgBAYIAAAWQAIgIAKgEQAIgEALgBQAUAAAJAMQAGAIACAQIABAdIACAWQACANACALIABADQAAAHgFAFQgFAEgHAAQgMAAgDgMg");
	this.shape_40.setTransform(325.5,262.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgKBRQgEgEAAgHIAAgMIAAgNIgCg6IgWgCQgPgCAAgNQAAgHAFgFQAFgEAGgBIAUACIgBgNIAAgLQAAgHAFgEQAFgEAGAAQAQAAAAAdIAAAJIALgBQAOAAAFACQAKAEgBALQABAHgFADQgFAFgHAAIgGAAIgGAAIgLABIACA8IAAAFIABAHQAAAbgRAAQgEAAgGgEg");
	this.shape_41.setTransform(312.7,263.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgOBUQgEgEAAgGIAAgWIgBgWIABgaIABgYQAAgGAFgFQAFgFAHABQAFgBAEAFQAFAFAAAGIgBAYIgCAaIABAWIAAAWQAAAGgEAEQgFAFgFAAQgHAAgFgFgAgKg7QgFgEAAgHQAAgIAFgFQAGgFAFAAQAIAAAFAFQAGAFAAAIQAAAHgGAEQgFAFgIABQgFgBgGgFg");
	this.shape_42.setTransform(303.9,262.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAXBbQgGgEgBgHQgFgOgBgIIgNhKQgHAWgJATQgNAcgEAQIABAFQAAAIgHAEQgFAEgHAAQgJAAgFgEQgGgFgBgIIgDgOIgNg3QgIgagSgzIgBgGQAAgHAGgEQAEgEAHAAQAJAAAFAIQADAEAEALQALAhAPA9QAJgXAKgdQAIgZAFgLQALgZALAAQALAAAFAMQADAGACAQIADAXQADAVAMAzQANgdAVg1IAGgWQADgNAFgHQAGgIAJAAQAHAAAFAEQAFAEAAAHQAAADgEAKIgFAMIgGAUIgWAwQgPAigGAQIgJAUQgFAKgMAAQgGAAgGgEg");
	this.shape_43.setTransform(287.8,262.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgnAyQgTgPgBgbQABgbAPgUQASgYAbAAQAUABANAGQASAJAAASQAAANgOAKQgGAEgUAIIgmARQAGAGAIADQAHADAJAAQAPAAAMgHQAJgFAGAAQANgBAAAMQAAAOgUAJQgQAGgTAAQgaAAgSgNgAgPgbQgHAHgFAPIAagMQAOgGAKgGQgJgFgMAAQgJAAgIAHg");
	this.shape_44.setTransform(231.9,263.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgQA0IgnhdIgBgGQAAgHAEgFQAGgDAHgBQAJAAAFAJQAGAOATAzIAQgmIAKgaQAFgJAKAAQAGAAAGAFQAEAEABAGQAAAFgUAqIgYAzQgBAFgEAEQgEAEgFgBQgLABgFgMg");
	this.shape_45.setTransform(219.7,263.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgOBUQgEgEAAgGIAAgWIgBgWIABgaIABgYQAAgGAFgFQAFgFAHABQAFgBAEAFQAFAFAAAGIgBAYIgCAaIABAWIAAAWQAAAGgEAEQgFAFgFAAQgHAAgFgFgAgKg7QgFgEAAgHQAAgIAFgFQAGgFAFAAQAIAAAFAFQAGAFAAAIQAAAHgGAEQgFAFgIABQgFgBgGgFg");
	this.shape_46.setTransform(210.6,261.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgKBRQgEgEAAgHIAAgMIAAgNIgCg6IgWgCQgOgCAAgNQgBgHAFgFQAFgEAGgBIAVACIgBgNIgBgLQAAgGAFgFQAFgEAGAAQAQAAAAAdIAAAJIAMgBQANAAAFACQAKAEAAALQAAAHgFADQgFAFgHAAIgGAAIgFAAIgMABIADA8IAAAFIAAAHQAAAbgRAAQgEAAgGgEg");
	this.shape_47.setTransform(201.3,262);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgkAzQgSgPAAgaQAAgWARgYQASgdAYABQAMAAAQAGQAUAIgBALQAAAFgDAFQgFAFgHgBQgEABgIgGQgGgFgOgBQgIABgKARQgLARAAALQABAMAIAIQAJAGAMAAQAIAAALgGQALgGAEAAQAGAAAFAEQAEAFAAAGQAAAJgUAKQgSAHgLABQgYAAgSgPg");
	this.shape_48.setTransform(189.2,263.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgnAyQgTgPgBgbQAAgbAQgUQASgYAbAAQAUABANAGQASAJABASQgBANgOAKQgHAEgUAIIglARQAGAGAIADQAHADAJAAQAPAAAMgHQAJgFAGAAQANgBAAAMQgBAOgTAJQgRAGgSAAQgaAAgSgNgAgPgbQgHAHgFAPIAagMQAOgGAKgGQgIgFgNAAQgJAAgIAHg");
	this.shape_49.setTransform(176.4,263.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgpBSQgCgEAAgDQAAgHAGgEQAFgFAGAAQAIAAAFAIIAJAQQAEAIAEAAQAGAAABgRQAAgMgEg1IgEg8QAAgHAEgGQAFgGAIAAQAFAAAGADQAGAEAAAGIAEA/IADBFQAAARgLAPQgMAPgRAAQgbAAgSgogAAEhbQgEgFAAgHQAAgIAEgFQAFgFAIAAQAHAAAGAFQAFAFAAAIQAAAHgFAFQgGAFgHAAQgIAAgFgFg");
	this.shape_50.setTransform(163.9,264.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAgBYQgIAFgJABQgIACgHAAQgaAAgSgRQgSgRAAgbQAAgfASgSQASgTAbAAQAJAAAHACQAGACAFADQACgnACgQQACgOANAAQAHAAAEAFQAFAEAAAHQAAARgDAiQgDAgAAARQAAAqADAOIAAAEQAAAGgEAEQgFAFgGAAQgJAAgEgIgAgXAFQgIAKAAAUQAAAMAJAKQAJAJANAAQAHAAAEgDQAEgBAHgGIAEgEIAAgrQgEgHgGgCQgGgDgJAAQgPAAgJAIg");
	this.shape_51.setTransform(152.9,260.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAcA2IgTAIQgIACgEAAQgcAAgPgPQgOgQAAgeQAAgaAVgTQAVgVAbAAQALAAAPAGQASAIAAAKQAAAEgDADIgCAMIgBAQQAAAVAEAJIAFAMIAFALQAAAHgFAEQgFAEgGAAQgGAAgLgKgAgPgXQgMANAAAOQAAAQAFAIQAGAIALAAQAGAAAGgCQAHgDAFgEQgDgbAAgNIAAgJIACgLIgEgBIgDgBQgOAAgMAMg");
	this.shape_52.setTransform(139.5,264);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAbBVQgDgKgCgQQgCgRAAgLIAAgIIAAgJIAAgKQgBgFgFAAQgNAAgJAKQgFAGgKARQAAAqgEAIQgEALgKAAQgHAAgFgFQgFgFAAgGIABgGQABgDABgdIAAhMIAAgEIABgTIgBgKIgBgLQAAgGAFgFQAEgEAHAAQAMAAAEAMQACAHAAAPIgBAYIAAAWQAIgIAKgEQAIgEALgBQAUAAAJAMQAGAIACAQIABAdIACAWIAEAYIABADQAAAHgFAFQgFAEgHAAQgMAAgDgMg");
	this.shape_53.setTransform(115.6,260.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgJBRQgGgEABgHIAAgMIAAgNIgCg6IgWgCQgOgCAAgNQgBgHAFgFQAEgEAIgBIAUACIgBgNIgBgLQAAgGAFgFQAFgEAGAAQAQAAAAAdIAAAJIAMgBQANAAAFACQAKAEAAALQgBAHgEADQgFAFgHAAIgGAAIgFAAIgMABIADA8IAAAFIAAAHQAAAbgRAAQgEAAgFgEg");
	this.shape_54.setTransform(102.9,262);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgOBUQgEgEAAgGIAAgWIgBgWIABgaIABgYQAAgGAFgFQAFgFAHABQAFgBAEAFQAFAFAAAGIgBAYIgCAaIABAWIAAAWQAAAGgEAEQgFAFgFAAQgHAAgFgFgAgKg7QgFgEAAgHQAAgIAFgFQAGgFAFAAQAIAAAFAFQAGAFAAAIQAAAHgGAEQgFAFgIABQgFgBgGgFg");
	this.shape_55.setTransform(94.1,261.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAXBbQgGgEgBgHQgFgOgBgIIgNhKQgHAWgJATQgNAcgEAQIABAFQAAAIgHAEQgFAEgHAAQgJAAgFgEQgGgFgBgIIgDgOIgNg3QgIgagSgzIgBgGQAAgHAGgEQAEgEAHAAQAJAAAFAIQADAEAEALQALAhAPA9QAJgXAKgdQAIgZAFgLQALgZALAAQALAAAFAMQADAGACAQIADAXQADAVAMAzQANgdAVg1IAGgWQADgNAFgHQAGgIAJAAQAHAAAFAEQAFAEAAAHQAAADgEAKIgFAMIgGAUIgWAwQgPAigGAQIgJAUQgFAKgMAAQgGAAgGgEg");
	this.shape_56.setTransform(78,261.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FF0000").s().p("AgtA8QgEgEAAgGIAAhLIABgLIAAgLQAAgGADgFQAFgEAHAAQANAAACANQATgPAZAAQAYAAAAAfIAAAIQgCASgPAAQgPAAAAgQIAAgLQgYAEgMAXIAAA5QABAGgFAFQgFAEgHAAQgHAAgEgFg");
	this.shape_57.setTransform(409.4,301.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FF0000").s().p("AgnAyQgUgPABgbQAAgbAPgUQARgYAcAAQAUABAOAGQASAJAAASQgBANgOAKQgHAEgUAHIglASQAGAGAHADQAJADAIAAQAPAAALgGQALgHAFABQAMgBAAAMQAAAOgTAJQgRAGgSAAQgaAAgSgNgAgPgbQgHAHgFAPIAagMQAOgHAJgFQgHgFgNAAQgJAAgIAHg");
	this.shape_58.setTransform(396.5,301.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FF0000").s().p("AAbBVQgDgJgCgRQgCgRAAgLIAAgIIAAgJIAAgKQgBgFgFAAQgNAAgJAKQgFAGgKARQAAAqgEAJQgEAJgKABQgHAAgFgFQgFgFAAgGIABgGQABgDABgdIAAhMIAAgEIABgSIgBgLIgBgLQAAgGAFgFQAEgEAHAAQAMAAAEAMQACAHAAAPIgBAYIAAAWQAIgIAKgFQAIgDALAAQAUgBAJAMQAGAIACAQIABAdIACAWIAEAYIABADQAAAHgFAFQgFAEgHAAQgMAAgDgMg");
	this.shape_59.setTransform(383.3,298.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFF00").s().p("AgtA8QgEgEAAgGIAAhLIAAgLIAAgLQAAgGAFgFQAEgEAHAAQANAAADANQASgPAaAAQAXAAAAAfIgBAIQAAASgQAAQgPAAABgQIgBgLQgZAEgKAXIAAA5QAAAGgFAFQgFAEgHAAQgHAAgEgFg");
	this.shape_60.setTransform(360.2,301.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFF00").s().p("AglAxQgRgRgBgbQgBgYAPgUQASgYAeAAQAXAAAOATQAMARAAAZQAAAZgOATQgRAWgZAAQgWAAgPgPgAgQgTQgHALAAANQAAAOAIAIQAHAGAIAAQAIAAAIgHQAIgIABgOQABgkgVAAQgMAAgJANg");
	this.shape_61.setTransform(347.8,301.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFF00").s().p("AgVBiQgFgEAAgGIAAgDQADgRAAgPIAAg4IgHABIgHAAQgIAAgEgEQgFgEAAgHQAAgLALgEQAGgBAPgBIACgNQADgaALgNQAMgQAcAAQAVAAAAAQQAAAPgUAAQgOAAgGAKQgGAHgBAQIgBADIAXgBQAWAAAAAPQAAAPgYAAIgVABIgBAdIABAgQgBAVgCANQgDANgKAAQgHAAgFgFg");
	this.shape_62.setTransform(335.4,298.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FF0000").s().p("AhRBaQgEgFAAgHIAAgOIABgOIABgVIAAgUIAAgVIgBgWIgBgVIgCgVQAAgHAHgFQAGgGAHAAQAJAAALAPQAzBMA0AuIAAgSQAAg4gCgUIgBgNIgBgMQAAgRARAAQATAAAAA7IAAATIgBBIIgCASQgCAQgPAAQgIAAgLgKQgtgog2hIIgBAkIAAAcIABAbQAAAjgRAAQgJAAgFgFg");
	this.shape_63.setTransform(402.5,187.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FF0000").s().p("AguBQQgfgYAAg5IABgRIABgQIAAgOIAAgNQAAgKADgIQAFgLAIAAQAHAAAFAEQAFAEAAAHIAAAVIAAAUIgBAQIgBAQQAAARAFAOQAFATAJAHQAFAEATAAQAcAAALg0QAGgaAAgyQAAgGAEgGQAFgJAKAAQAIAAAEAGQADAEAAAFQAAAvgFAaQgGAmgUAaQgIAMgMAIQgPAJgNAAQgeAAgPgLg");
	this.shape_64.setTransform(383.7,187.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FF0000").s().p("Ag9BIQgagVAAgiQAAgmAZghQAcglApAAQApAAAUATQAUATAAAlQAAAmgXAhQgaAlgpAAQgjAAgYgUgAgkgiQgRAYAAAbQgBATAQAMQAOAMAWAAQAYAAARgZQAQgXAAgcQAAgYgLgKQgKgJgbAAQgYAAgTAZg");
	this.shape_65.setTransform(365.4,187.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FF0000").s().p("AhRBaQgEgFAAgHIAAgOIABgOIABgVIAAgUIAAgVIgBgWIgBgVIgCgVQAAgHAHgFQAGgGAHAAQAJAAALAPQAzBMA0AuIAAgSQAAg4gCgUIgBgNIgBgMQAAgRARAAQATAAAAA7IAAATIgBBIIgCASQgCAQgPAAQgIAAgLgKQgtgog2hIIgBAkIAAAcIABAbQAAAjgRAAQgJAAgFgFg");
	this.shape_66.setTransform(346.1,187.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FF0000").s().p("Ag9BIQgagVAAgiQAAgmAZghQAcglAoAAQApAAAVATQAUATAAAlQAAAmgWAhQgbAlgpAAQgjAAgYgUgAgkgiQgRAYgBAbQAAATAPAMQAPAMAWAAQAYAAARgZQAQgXAAgcQAAgYgLgKQgLgJgbAAQgYAAgSAZg");
	this.shape_67.setTransform(326.8,187.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FF0000").s().p("Ag/BXQgEgEAAgHIAAgaIAAgbIAAhcQAAgIAFgGQAGgIAKABIAeACQAQACAJAGQAyAZAAAlQAAAQgKAJQgLAMgVAIQAgASAPASQAEAEAAAGQAAAHgFAEQgEAFgHAAQgHAAgFgFQgjghgpgNIABAmQAAAHgEAEQgFAFgHAAQgHAAgFgFgAgjADIAFAAQAdAAAMgFQAGgDAFgFQAFgFAAgDQAAgNgRgMQgOgMgRgBIgOgBg");
	this.shape_68.setTransform(309.8,187.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FF0000").s().p("Ag0BYQgEgEAAgHIAAggQAAgSACgiIACg2QABgeARABIALgCIARAAQAVAAAUAPQAWAQAAAYQAAAegYAQQgVAPgbAAIgKAAIAAA1QAAAHgFAEQgEAFgHAAQgGAAgFgFgAgVgtIgCApIAIABQAQAAANgJQAMgJAAgQQAAgKgMgIQgLgHgMAAIgHAAIgEAAIgBARg");
	this.shape_69.setTransform(295.5,187.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgtA8QgEgEAAgGIAAhLIABgLIAAgLQAAgGADgFQAFgEAHAAQANAAACANQATgPAZAAQAYAAAAAfIAAAIQgCASgPAAQgOAAAAgQIgBgLQgZAEgLAXIAAA5QABAGgFAFQgEAEgIAAQgHAAgEgFg");
	this.shape_70.setTransform(273.1,190.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AglAxQgRgRgBgbQgBgYAPgUQASgYAeAAQAXAAAOATQAMARAAAZQAAAZgOATQgRAWgZAAQgWAAgPgPgAgQgTQgHALAAANQAAAOAIAIQAHAGAIAAQAIAAAIgHQAIgIABgOQABgkgVAAQgMAAgJANg");
	this.shape_71.setTransform(260.7,190.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FF0000").s().p("AhRBaQgEgFAAgHIAAgOIABgOIABgVIAAgUIAAgVIgBgWIgBgVIgCgVQAAgHAHgFQAGgGAHAAQAJAAALAPQAzBMA0AuIAAgSQAAg4gCgUIgBgNIgBgMQAAgRARAAQATAAAAA7IAAATIgBBIIgCASQgCAQgPAAQgIAAgLgKQgtgog2hIIgBAkIAAAcIABAbQAAAjgRAAQgJAAgFgFg");
	this.shape_72.setTransform(234.4,187.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FF0000").s().p("AguBQQgfgYAAg5IABgRIABgQIAAgOIAAgNQAAgKADgIQAFgLAIAAQAHAAAFAEQAFAEAAAHIAAAVIAAAUIgBAQIgBAQQAAARAFAOQAFATAJAHQAFAEATAAQAcAAALg0QAGgaAAgyQAAgGAEgGQAFgJAKAAQAIAAAEAGQADAEAAAFQAAAvgFAaQgGAmgUAaQgIAMgMAIQgPAJgNAAQgeAAgPgLg");
	this.shape_73.setTransform(215.7,187.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FF0000").s().p("Ag9BIQgagVAAgiQAAgmAZghQAcglApAAQAoAAAVATQAUATAAAlQAAAmgXAhQgaAlgpAAQgjAAgYgUgAgkgiQgRAYAAAbQAAATAOAMQAPAMAWAAQAYAAARgZQAQgXAAgcQAAgYgLgKQgLgJgaAAQgZAAgSAZg");
	this.shape_74.setTransform(197.4,187.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FF0000").s().p("AhRBaQgEgFAAgHIAAgOIABgOIABgVIAAgUIAAgVIgBgWIgBgVIgCgVQAAgHAHgFQAGgGAHAAQAJAAALAPQAzBMA0AuIAAgSQAAg4gCgUIgBgNIgBgMQAAgRARAAQATAAAAA7IAAATIgBBIIgCASQgCAQgPAAQgIAAgLgKQgtgog2hIIgBAkIAAAcIABAbQAAAjgRAAQgJAAgFgFg");
	this.shape_75.setTransform(178.1,187.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AAcA2IgTAHQgIADgEAAQgcAAgPgPQgOgQAAgdQAAgbAVgTQAVgVAbAAQALAAAPAGQASAIAAAKQAAAEgDADIgCAMIgBAQQAAAVAEAJIAFANIAFAKQAAAHgFAEQgFAEgGAAQgGAAgLgKgAgPgWQgMAMAAAOQAAAQAFAIQAGAIALAAQAGAAAGgDQAHgCAFgEQgDgbAAgNIAAgJIACgKIgEgCIgDgBQgOAAgMANg");
	this.shape_76.setTransform(151.3,190.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgLArQgEgEgBgGIAAgUIgPABQgJAAgGgDQgIgEAAgHQAAgIAIgCQADgCAMAAIAPAAIAAgFIAAgGQAAgXAQAAQAEAAAEAEQAFADAAAGIAAAGIAAAGIAAAIIADAAIAIAAIAHAAQAYAAAAANQAAAFgEAEQgEAFgHAAIgFgBIgDAAIgKAAIgJAAIAAAKIAAAKQAAAGgFAEQgEAEgEAAQgHAAgEgEg");
	this.shape_77.setTransform(127,188.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AghBzQgFgEABgGQAAgHAGgGIANgJQAXgZAAg3QAAgUgFgWQgGgZgMgOIgMgLQgIgIABgGQgBgGAFgEQAEgFAHAAQAEAAAGAEQAXAQAPAlQAMAgAAAdQAABYgxAcQgGADgGAAQgFAAgFgEg");
	this.shape_78.setTransform(443.3,153.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgKBcQgFgFAAgHIAAigQAAgHAFgEQAFgEAFAAQAHAAAEAEQAFAEAAAHIAACaQAAAWgQAAQgFAAgFgEg");
	this.shape_79.setTransform(435.1,151.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AAcA2IgTAIQgIACgEAAQgcAAgPgPQgOgPAAgfQAAgaAVgTQAVgVAbAAQALAAAPAGQASAIAAAKQAAAEgDADIgCAMIgBAQQAAAUAEAKIAFAMIAFALQAAAHgFAEQgFAEgGAAQgGAAgLgKgAgPgWQgMAMAAAOQAAAQAFAIQAGAIALAAQAGAAAGgDQAHgCAFgEQgDgbAAgNIAAgJIACgKIgEgCIgDgBQgOAAgMANg");
	this.shape_80.setTransform(425.4,155);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AAXA1IgDgYQgCgNAAgLIABgJIAAgKIABgEIAAgGQAAgJgFAAQgKAAgIANQgJAMgGASIgBALIAAAKIgBALIgBAKQAAAHgEAEQgFAFgHAAQgHAAgFgFQgEgEAAgHIgBgKIgBgKIACggIACgeIgBgLIAAgKQAAgHAEgEQAFgFAHAAQAPAAABATIABABQARgRARAAQAWAAAIASQAGANAAAYIAAAJIAAAFQAAAJACAPQADAOAAAJQAAAHgFAEQgFAFgGAAQgPAAgCgPg");
	this.shape_81.setTransform(412.5,154.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AglAxQgRgRgBgbQgBgYAPgUQASgYAeAAQAXAAAOATQAMARAAAZQAAAZgOATQgRAWgZAAQgWAAgPgPgAgQgTQgHALAAANQAAAOAIAIQAHAGAIAAQAIAAAIgHQAIgIABgOQABgkgVAAQgMAAgJANg");
	this.shape_82.setTransform(399.7,155);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgOBUQgEgEAAgGIAAgWIgBgVIABgbIABgYQAAgGAFgFQAFgFAHAAQAFAAAEAFQAFAFAAAGIgBAYIgCAbIABAVIAAAWQAAAGgEAEQgFAFgFAAQgHAAgFgFgAgKg6QgFgFAAgHQAAgIAFgFQAGgFAFAAQAIAAAFAFQAGAFAAAIQAAAHgGAFQgFAEgIAAQgFAAgGgEg");
	this.shape_83.setTransform(390.4,152.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgJBRQgGgEAAgHIABgMIAAgNIgCg6IgWgCQgOgCAAgNQAAgHAEgFQAEgEAIgBIAUACIgBgMIgBgMQAAgGAFgFQAFgEAHAAQAPAAAAAdIAAAJIAMgBQANAAAFACQAJAEAAALQAAAGgEAEQgFAFgHAAIgFAAIgGAAIgLABIACA8IAAAFIAAAHQAAAbgRAAQgFAAgEgEg");
	this.shape_84.setTransform(381.2,153);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgwBeQgEgFAAgHIAAgrIAAgtQAAgZgCgSIgBgXQAAgKAEgHQAFgIAIAAQAHAAAEAFQAFAEAAAGIAAABQAIgEAIgCQAGgCAHgBQAbAAANAYQAJARAAAbQAAAYgPARQgPASgaAAQgJAAgLgDIAAAwQAAAHgFAFQgEAEgHAAQgHAAgFgEgAgGg3QgHAEgIAHIABAuQALADAJABQALAAAHgHQAGgHAAgOQAAgPgCgHQgDgOgMAAQgHAAgGADg");
	this.shape_85.setTransform(369.2,157.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AglAxQgRgRgBgbQgBgYAPgUQASgYAeAAQAXAAAOATQAMARAAAZQAAAZgOATQgRAWgZAAQgWAAgPgPgAgQgTQgHALAAANQAAAOAIAIQAHAGAIAAQAIAAAIgHQAIgIABgOQABgkgVAAQgMAAgJANg");
	this.shape_86.setTransform(356.2,155);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AANB0QgzgcAAhYQABgdANggQAPglAWgQQAGgEAEAAQAGAAAFAFQAEAEABAGQAAAGgJAJIgKAKQgNAOgHAZQgEAWAAAUQAAAYAEAVQAIAbAPAMQAPAKABAIQgBAGgEAEQgFAEgGAAQgFAAgFgDg");
	this.shape_87.setTransform(346,153.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#00CCFF").s().p("AghBzQgFgEABgGQgBgHAIgGIAMgJQAXgZAAg3QAAgUgFgWQgGgZgMgOIgMgLQgHgIAAgGQgBgGAFgEQAFgFAGAAQAEAAAGAEQAXAQAOAlQANAgAAAdQABBYgyAcQgHADgFAAQgGAAgEgEg");
	this.shape_88.setTransform(326.8,153.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#00CCFF").s().p("Ag+BMQgPgLAAgPQAAgHAFgEQAFgGAHAAQALAAAFALQAGAOAYAAQASAAATgIQAUgJAAgLQgBgPgLgEQgJgEgYgBQgVAAgPgGQgWgJAAgSQAAgXAYgTQAZgTAbAAQALAAAQAFQAWAHgBAJQAAAGgDAEQgFAFgHABQgGAAgLgDIgQgCQgPAAgMAHQgOAHgBAJQABAEAEADQAEADAIACIAcABQAbACAPANQAQAMABAYQAAAegjAQQgbAMgfAAQgeAAgRgNg");
	this.shape_89.setTransform(313.8,152.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#00CCFF").s().p("AANB0QgzgcAAhYQAAgdANggQAQglAWgQQAGgEAEAAQAGAAAFAFQAFAEAAAGQAAAGgJAJIgKAKQgNAOgHAZQgFAWABAUQAAAYAEAVQAIAbAPAMQAQAKAAAIQAAAGgFAEQgFAEgGAAQgEAAgGgDg");
	this.shape_90.setTransform(301.4,153.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#00CCFF").s().p("Ag1BZQgNgLAAgmQAAgQACgdIADgvIgCgMIgBgNQAAgRAQAAQAGAAAEACIAagFIAVgBQAeAAASAGQAKAFAAAKQAAAGgEAFQgFAGgHAAIgFgBQgTgFgSAAIgQABQgLABgLADIgBAvIArgFIAdgCQAHAAAFAEQAEAFAAAHQAAAMgOACIgcACIgwAFIgBAYQAAAXADADQABABAOAAIATAAIAWAAIAHgBIAHgBQAGAAAFAEQAGAFAAAHQAAAOgOACQgLACgkAAQgmAAgLgKg");
	this.shape_91.setTransform(279.1,151.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#00CCFF").s().p("AgYBTQgPgigRg/IgKgfQgGgWAAgJQAAgHAFgEQAFgFAGAAQAMAAAEAMIAFAUIALAmQAJAgAJAaIAZhFIAKgcQAHgRAIgJQAFgGAIAAQAGAAAFAFQAFAEAAAHQAAAFgDAEQgGAJgFANIgJAXIgfBQQgGAOgIAOQgFAJgHAAQgMAAgFgLg");
	this.shape_92.setTransform(263.2,152.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#00CCFF").s().p("Ag2BVQgFgFAAgHQAAgGAFgFQAFgFAIABQAIgBAOgCIgBg1QABgdACgdIgZABQgIgBgEgEQgFgFAAgHQAAgGAEgEQAFgFAGAAIAigBQAVAAAjAFQAOACAAAOQAAAIgFAEQgFAEgGgBIgegDQgCAWAAAhIAAA1IAgAAQAHAAAFAFQAEAEAAAHQAAAGgEAFQgGAFgHAAIgUAAIgUAAIgWACIgXACQgIAAgEgEg");
	this.shape_93.setTransform(248.4,152.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#00CCFF").s().p("AgKBVQgFgFAAgHIAAgFIABgFIgBgQIgBgRQAAgPgCgZQgDgfAAgMIgHAAQgaAAgPgDQgNgEAAgMQAAgGAEgFQAFgFAIAAIATACIASABIAWAAIATAAIAbABIAbABQAHAAAEAFQAFAFAAAGQAAAHgFAFQgEAEgHAAIgdgBIgcgBIADAvQACAdAAARIABAMIABAMQAAAJgEAHQgFAJgIAAQgFAAgFgEg");
	this.shape_94.setTransform(233.7,151.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#00CCFF").s().p("AgzBHQgRgTAAgZQAAglAigpQAdgjAdAAIAJABIAHABQAFgFAIAAQAMAAACANQACAKAAANQAAAGgDAFQgEAGgJAAQgKAAgFgLQgDgFgCgBIgJgBQgPAAgSAXQgbAfAAAbQAAANAJAJQAJAJALAAQAKAAAMgGIASgLQAJgGAFAAQAHAAAFAFQAEAFAAAGQAAAHgGAFQggAbggAAQgaAAgSgTg");
	this.shape_95.setTransform(217.9,152);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#00CCFF").s().p("Ag1BZQgNgLAAgmQAAgQADgdIACgvIgBgMIgCgNQAAgRAQAAQAGAAAEACIAagFIAVgBQAeAAARAGQALAFAAAKQAAAGgEAFQgFAGgHAAIgFgBQgTgFgSAAIgQABQgLABgLADIgBAvIArgFIAdgCQAHAAAFAEQAFAFgBAHQAAAMgOACIgcACIgwAFIgBAYQAAAXACADQACABAOAAIATAAIAWAAIAHgBIAHgBQAGAAAGAEQAFAFAAAHQAAAOgOACQgMACgjAAQgmAAgLgKg");
	this.shape_96.setTransform(203.2,151.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#00CCFF").s().p("AgyBQQgYgQABgXQAAgSAQAAQAQAAAAASQABAHAMAIQALAHAKAAQAFAAACgPIAAglQACgYAAgoIgBgIIgBAAIgNAAIgNAAQgIAAgFgEQgEgFAAgHQAAgQAUAAIANAAIAKAAIAVAAIAWgBQAgAAgBARQAAAGgDAFQgGAFgHAAIgGAAIgIAAIgJAAIAAAIQAABSgMAmQgJAcgVAAQgVAAgWgPg");
	this.shape_97.setTransform(187.6,152.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#00CCFF").s().p("AgjBeQgOgDgIgFQgHAAgFgFQgEgEAAgHIABgjIABgjIAAglIgBgnQAAgGAGgHQAGgHAIAAQADAAAQAIIAVAJQAhAMAYAXQAdAcAAAgQAAAUgKASQgKASgRAMQgUANghAAQgJgBgKgCgAgoA7QAFADAFABQAHACAHAAQAXAAALgHQALgGAGgMQAGgMAAgMQAAgbgigWQgKgHglgPg");
	this.shape_98.setTransform(171.3,152.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#00CCFF").s().p("AA7BYQgJgBgJgVQgHgOgEgSIgcADQgRABgKACQgFANgOAaQgFAIgJAAQgGAAgFgEQgGgFAAgHQAAgGASgiQgCgEAAgDQABgGAKgDQARgbAVgfQAbgsAHAAQANAAAEAQIAHAlIASBLIAGAQQAEAKAAAFQAAAHgFAEQgFAFgGAAIgBAAgAgIAKIAPgCIAQgBIgHglIgYAog");
	this.shape_99.setTransform(153.2,152.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgLArQgEgEgBgGIAAgUIgPABQgJAAgGgDQgIgEAAgHQAAgIAIgCQADgCAMAAIAPAAIAAgFIAAgGQAAgXAQAAQAEAAAEAEQAFADAAAGIAAAGIAAAGIAAAIIADAAIAIAAIAHAAQAYAAAAANQAAAFgEAEQgEAFgHAAIgFgBIgDAAIgKAAIgJAAIAAAKIAAAKQAAAGgFAEQgEAEgEAAQgHAAgEgEg");
	this.shape_100.setTransform(127,153.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFF00").s().p("AhRBaQgEgFAAgHIAAgOIABgOIABgVIAAgUIAAgVIgBgWIgBgVIgCgVQAAgHAHgFQAGgGAHAAQAJAAALAPQAzBMA0AuIAAgSQAAg4gCgUIgBgNIgBgMQAAgRARAAQATAAAAA7IAAATIgBBIIgCASQgCAQgPAAQgIAAgLgKQgtgog2hIIgBAkIAAAcIABAbQAAAjgRAAQgJAAgFgFg");
	this.shape_101.setTransform(338,116.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFF00").s().p("Ag9BIQgagVAAgiQAAgmAZghQAcglAoAAQApAAAVATQAUATAAAlQAAAmgWAhQgbAlgpAAQgjAAgYgUgAgkgiQgRAYgBAbQAAATAPAMQAPAMAWAAQAYAAARgZQAQgXAAgcQAAgYgLgKQgLgJgbAAQgYAAgSAZg");
	this.shape_102.setTransform(318.7,116.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFF00").s().p("Ag2BVQgFgFAAgHQAAgGAFgFQAFgFAIABQAIAAAOgDIgBg0QABgeACgdIgZABQgIgBgEgEQgFgEAAgIQAAgGAEgEQAFgEAGgBIAigBQAVAAAjAFQAOACAAAOQAAAIgFAEQgFAEgFgBIgfgDQgCAWAAAhIAAA1IAgAAQAHAAAFAFQAEAEAAAHQAAAGgEAFQgGAFgHAAIgUAAIgUAAIgWACIgXACQgIAAgEgEg");
	this.shape_103.setTransform(302.5,116.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFF00").s().p("AgKBVQgFgFAAgHIAAgFIABgFIgBgQIgBgRQAAgPgCgZQgDgfAAgMIgHAAQgaAAgPgDQgNgEAAgMQAAgGAEgFQAFgFAIAAIATACIASABIAWAAIATAAIAbABIAbABQAHAAAEAFQAFAFAAAGQAAAHgFAFQgEAEgHAAIgdgBIgcgBIADAvQACAdAAARIABAMIABAMQAAAJgEAHQgFAJgIAAQgFAAgFgEg");
	this.shape_104.setTransform(287.8,116.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFF00").s().p("Ag2BVQgFgFAAgHQAAgGAFgFQAFgFAIABQAIAAAOgDIgBg0QABgeACgdIgZABQgIgBgEgEQgFgEAAgIQAAgGAEgEQAFgEAGgBIAigBQAVAAAjAFQAOACAAAOQAAAIgFAEQgFAEgGgBIgegDQgCAWAAAhIAAA1IAgAAQAHAAAFAFQAEAEAAAHQAAAGgEAFQgGAFgHAAIgUAAIgUAAIgWACIgXACQgIAAgEgEg");
	this.shape_105.setTransform(272.7,116.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFF00").s().p("Ag+BMQgOgLAAgPQAAgHAEgEQAEgFAJgBQAKAAAFALQAHAOAXAAQASAAATgIQATgJAAgLQAAgPgLgEQgJgEgZgBQgTAAgRgGQgWgJABgSQABgXAXgTQAYgTAbAAQAMAAAQAFQAWAHAAAJQAAAFgFAFQgEAFgIABQgFAAgLgDIgRgCQgPAAgMAHQgNAIAAAIQgBAFAFADQAEACAIACIAdABQAaACAOANQASALgBAZQAAAegiAQQgaAMggAAQgeAAgRgNg");
	this.shape_106.setTransform(257.9,117.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFF00").s().p("Ag9BIQgagVAAgiQAAgmAZghQAcglApAAQApAAAUATQAUATAAAlQAAAmgXAhQgaAlgpAAQgjAAgYgUgAgkgiQgRAYgBAbQABATAPAMQAOAMAWAAQAYAAARgZQAQgXAAgcQAAgYgLgKQgKgJgbAAQgYAAgTAZg");
	this.shape_107.setTransform(240,116.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFF00").s().p("Ag0BZQgEgFAAgHIAAggQAAgSACgiIACg2QABgeARABIALgCIARAAQAVAAAUAPQAWARAAAXQAAAfgYAPQgVAPgbAAIgKAAIAAA1QAAAHgFAFQgEAEgHAAQgGAAgFgEgAgVgtIgCApIAIAAQAQAAANgIQAMgJAAgQQAAgJgMgJQgLgHgMAAIgHABIgEAAIgBAQg");
	this.shape_108.setTransform(224.1,116.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFF00").s().p("Ag1BZQgNgLAAgmQAAgQACgdIACgvIgBgMIgBgNQAAgRARAAQAFAAAEACIAagFIAVgBQAdAAATAGQAKAFAAAKQAAAGgEAFQgFAGgHAAIgFgBQgTgFgSAAIgRABQgKABgLADIgBAvIAsgFIAcgCQAHAAAFAEQAEAFABAHQAAAMgPACIgcACIgwAFIgBAYQAAAXADADQABABANAAIAUAAIAWAAIAHgBIAHgBQAHAAAEAEQAGAFAAAHQAAAOgOACQgLACgjAAQgmAAgMgKg");
	this.shape_109.setTransform(210.5,116.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFF00").s().p("Ag/BXQgEgEAAgHIAAgaIAAgbIAAhcQAAgIAFgGQAGgIAKABIAeACQAQACAJAGQAyAZAAAlQAAAQgKAJQgLAMgVAIQAgASAPASQAEAEAAAGQAAAHgFAEQgEAFgHAAQgHAAgFgFQgjghgpgNIABAmQAAAHgEAEQgFAFgHAAQgHAAgFgFgAgjADIAFAAQAdAAAMgFQAGgDAFgFQAFgFAAgDQAAgNgRgMQgOgMgRgBIgOgBg");
	this.shape_110.setTransform(195.2,116.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFF00").s().p("Ag0BZQgEgFAAgHIAAggQAAgSACgiIACg2QABgeARABIALgCIARAAQAVAAAUAPQAWARAAAXQAAAfgYAPQgVAPgbAAIgKAAIAAA1QAAAHgFAFQgEAEgHAAQgGAAgFgEgAgVgtIgCApIAIAAQAQAAANgIQAMgJAAgQQAAgJgMgJQgLgHgMAAIgHABIgEAAIgBAQg");
	this.shape_111.setTransform(180.9,116.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AAcA2IgTAIQgIACgEAAQgcAAgPgPQgOgQAAgeQAAgaAVgTQAVgVAbAAQALAAAPAGQASAIAAAKQAAAEgDADIgCAMIgBAQQAAAVAEAJIAFAMIAFALQAAAHgFAEQgFAEgGAAQgGAAgLgKgAgPgXQgMANAAAOQAAAQAFAIQAGAIALAAQAGAAAGgCQAHgDAFgEQgDgbAAgNIAAgJIACgLIgEgBIgDgBQgOAAgMAMg");
	this.shape_112.setTransform(157.5,119.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FF0000").s().p("AgnAyQgTgPgBgbQABgbAPgVQASgWAbAAQAUAAANAGQASAJAAASQAAANgOAKQgGAEgUAIIgmARQAGAGAIADQAHADAJAAQAPAAAMgHQAJgFAGAAQANAAAAAMQAAANgUAIQgQAIgTgBQgaAAgSgNgAgPgbQgHAIgFAOIAagMQAOgHAKgFQgJgFgMAAQgJAAgIAHg");
	this.shape_113.setTransform(219.7,297);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FF0000").s().p("AgQA0IgnhdIgBgHQAAgGAEgFQAGgDAHAAQAJgBAFAKQAGAOATAyIAQgmIAKgZQAFgKAKAAQAGAAAFAEQAFAFABAGQAAAFgUAqIgYAzQgBAFgEAEQgEADgFAAQgLABgFgMg");
	this.shape_114.setTransform(207.6,296.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FF0000").s().p("AAcA2IgTAHQgIADgEAAQgcAAgPgPQgOgQAAgeQAAgaAVgTQAVgVAbAAQALAAAPAGQASAIAAAKQAAAEgDADIgCAMIgBAQQAAAVAEAJIAFANIAFAKQAAAHgFAEQgFAEgGAAQgGAAgLgKgAgPgWQgMAMAAAOQAAAQAFAIQAGAIALAAQAGAAAGgDQAHgCAFgEQgDgbAAgNIAAgJIACgKIgEgCIgDgBQgOAAgMANg");
	this.shape_115.setTransform(194.9,297.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FF0000").s().p("AAEAlQgDgLgDgbIgDAEIgSAuQgBAFgEACQgFAIgKABQgFAAgGgKQgHgKgEgQQgDgPgIgvIgCgQQAAgHAFgEQAFgEAHAAQANAAADAMIACAQIACARIAFAcIAUg6QAEgPAMAAQANAAAEARIAGAfIAGAfIAShFQADgKAMAAQAGAAAGAEQAFAFAAAGIgBAEQgMAtgNAkQgDAKgIAMQgGAHgJAAQgPAAgIgcg");
	this.shape_116.setTransform(180.1,297.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#00CCFF").s().p("AgnAyQgUgPAAgbQABgbAPgVQASgWAbAAQAUAAAOAGQASAJAAASQAAANgPAKQgGAEgVAIIglARQAGAGAHADQAJADAIAAQAPAAALgHQALgFAFAAQAMAAAAAMQAAANgTAIQgRAIgSgBQgaAAgSgNgAgPgbQgIAIgEAOIAagMQAOgHAJgFQgHgFgNAAQgJAAgIAHg");
	this.shape_117.setTransform(154.5,297);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#00CCFF").s().p("AAbBVQgDgKgCgQQgCgRAAgLIAAgIIAAgJIAAgLQgBgEgFAAQgNAAgJAKQgFAGgKARQAAAqgEAIQgEAKgKAAQgHABgFgFQgFgEAAgHIABgGQABgDABgdIAAhMIAAgEIABgTIgBgKIgBgLQAAgHAFgEQAEgEAHAAQAMAAAEAMQACAHAAAPIgBAYIAAAWQAIgIAKgEQAIgFALAAQAUAAAJAMQAGAIACAPIABAeIACAWIAEAYIABADQAAAHgFAEQgFAFgHAAQgMAAgDgMg");
	this.shape_118.setTransform(141.3,293.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#00CCFF").s().p("AgJBRQgGgEABgHIAAgMIAAgNIgCg6IgWgDQgOgBAAgNQgBgHAFgFQAEgEAIgBIAUACIgBgMIgBgMQAAgGAFgFQAFgEAGAAQAQAAAAAdIAAAJIAMgBQANAAAFACQAKADAAAMQgBAGgEAEQgFAFgHAAIgGAAIgFAAIgMABIADA7IAAAGIAAAHQAAAbgRAAQgEAAgFgEg");
	this.shape_119.setTransform(128.5,295.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFF00").s().p("AAXA1IgDgYQgCgNAAgLIABgJIAAgKIABgEIAAgGQAAgJgFAAQgKAAgIANQgJAMgGASIgBALIAAAKIgBALIgBAKQAAAHgEAEQgFAFgHAAQgHAAgFgFQgEgEAAgHIgBgKIgBgKIACggIACgeIgBgLIAAgKQAAgHAEgEQAFgFAHAAQAPAAABATIABABQARgRARAAQAWAAAIASQAGANAAAYIAAAJIAAAFQAAAJACAPQADAOAAAJQAAAHgFAEQgFAFgGAAQgPAAgCgPg");
	this.shape_120.setTransform(106.3,296.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFF00").s().p("Ag9BIQgagVAAgiQAAgmAZghQAcglApAAQAoAAAVATQAUATAAAlQAAAmgXAhQgaAlgpAAQgjAAgYgUgAgkgiQgRAYAAAbQAAATAOAMQAPAMAWAAQAYAAARgZQAQgXAAgcQAAgYgLgKQgLgJgaAAQgZAAgSAZg");
	this.shape_121.setTransform(90.3,294.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgPAfQAAgGAFgFQAFgEAFAAQASAAAAAbQAAAHgFAFQgFAEgHgBQgQAAAAgbgAgLgXQgFgFAAgGIAAgEIgBgEQAAgGAFgFQAFgEAHAAQAQgBAAAYQAAAGgFAFQgFAFgGgBQgGABgFgFg");
	this.shape_122.setTransform(158.9,226.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AggA8QgSgGAAgNQABgMAOABQAFAAAKADQAKAEAGAAQAWAAAAgKQAAgGgRgIQgWgKgGgDQgRgLAAgRQAAgYAZgHQAPgGAbAAQAMAAAFAEQAIADAAALQAAAWgLAAQgMAAgCgKIgKgBQgaAAAAAIQAAAFAPAHQAXALAJAFQARALAAAQQgBAUgSAKQgPAJgVAAQgPAAgNgGg");
	this.shape_123.setTransform(147.5,227.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgnAyQgTgPAAgbQAAgbAPgUQARgYAcAAQAUABANAGQATAJgBASQAAANgOAKQgHAEgTAIIgmARQAGAGAHADQAJADAIAAQAPAAALgHQALgFAFAAQAMAAAAAMQABANgUAIQgRAIgSgBQgaAAgSgNgAgPgbQgHAIgFAOIAagMQAOgGAKgGQgJgFgMAAQgJAAgIAHg");
	this.shape_124.setTransform(135,227.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgKBcQgFgFAAgHIAAigQAAgHAFgEQAFgEAFAAQAHAAAEAEQAFAEAAAHIAACaQAAAWgQAAQgFAAgFgEg");
	this.shape_125.setTransform(125,224.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgwBeQgEgFAAgHIAAgrIAAgtQAAgZgCgSIgBgYQAAgJAEgHQAFgIAIAAQAHAAAEAFQAFAEAAAHIAAAAQAIgEAIgCQAGgCAHgBQAbAAANAYQAJARAAAbQAAAYgPARQgPASgaAAQgJAAgLgDIAAAwQAAAHgFAFQgEAEgHAAQgHAAgFgEgAgGg2QgHADgIAHIABAuQALADAJABQALAAAHgHQAGgHAAgOQAAgPgCgHQgDgOgMAAQgHAAgGAEg");
	this.shape_126.setTransform(115.6,230.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgJBDQgFgEAAgHQAAgNgCgaQgDgYAAgNQAAgIgCgEQgNAHgOATIgCACIAAAjIgBAJIAAAIQAAAHgFADQgFAEgHAAQgJAAgEgJQgCgGAAgMIAAgqIgBgRIAAgRQAAgLADgIQAFgLAIAAQAHAAAFAFQAFAFAAAGIgBALQASgVAQAAQASAAAGAOQAHgHAJgDQAJgDAKAAQAXAAAIAXIAFAgQADARAFAsQABAHgFAEQgFAEgHAAQgOAAgCgNQgCgMgCgWIgEggQgDgVgFAAQgDAAgKAFQgJAFgFAEQAAAOAEAXQADAZAAANQAAAHgFAEQgEAFgHAAQgFAAgFgFg");
	this.shape_127.setTransform(99.9,227.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AAcA2IgTAIQgIACgEAAQgcAAgPgPQgOgPAAgfQAAgaAVgTQAVgVAbAAQALAAAPAGQASAIAAAKQAAAEgDADIgCAMIgBAQQAAAUAEAKIAFAMIAFALQAAAHgFAEQgFAEgGAAQgGAAgLgKgAgPgXQgMANAAAOQAAAQAFAIQAGAIALAAQAGAAAGgDQAHgCAFgEQgDgbAAgNIAAgJIACgKIgEgCIgDgBQgOAAgMAMg");
	this.shape_128.setTransform(83.8,227.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AAhA9IgigpIgdAcIgJAIQgGAGgGAAQgHAAgEgFQgFgEAAgGQAAgHAKgJIAPgNIAXgUIgOgTQgIgKgHgGQgGgFgBgHQAAgGAGgEQAEgFAHAAQAIAAAOARIARAYIAUgRQANgLAFgIQAFgHAIAAQAGAAAFAFQAFAEAAAGQAAAIgMAMIgRAPIgSAQIAkAqQADAFAAAFQABAGgGAEQgFAFgGAAQgHAAgEgGg");
	this.shape_129.setTransform(70,227.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("Ag1BZQgNgLAAgmQAAgQADgdIACgvIgBgMIgCgNQAAgRAQAAQAGAAAEACIAagFIAVgBQAeAAARAGQALAFAAAKQAAAGgEAFQgFAGgHAAIgFgBQgTgFgSAAIgQABQgLABgLADIgBAvIArgFIAdgCQAHAAAFAEQAFAFgBAHQAAAMgOACIgcACIgxAFIAAAYQAAAXACADQACABANAAIAUAAIAWAAIAHgBIAHgBQAGAAAGAEQAFAFAAAHQAAAOgOACQgMACgjAAQglAAgMgKg");
	this.shape_130.setTransform(55.7,224.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#FFFFFF").ss(1,1,1).p("EghFAAAIbvAAAgTAAMAhZAAA");
	this.shape_131.setTransform(275.2,280.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").ss(3,1,1).p("EAjxAWWUgjxAAAgjwAAAMAAAgsrMBHhAAAg");
	this.shape_132.setTransform(274.8,178.8);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#663366").s().p("EgjwAWWMAAAgsrMBHhAAAMAAAAsrMhHhAAAgEAhKAP1MghYAAAgAlSP1I7uAAg");
	this.shape_133.setTransform(274.8,178.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.btn_menu}]}).wait(1));

	// btn
	this.instance = new lib.Copyright("synched",0);
	this.instance.setTransform(275,387.5);

	this.btn_goBack = new lib.goNext();
	this.btn_goBack.setTransform(57.6,352.3,1,1,0,0,180);
	new cjs.ButtonHelper(this.btn_goBack, 0, 1, 2, false, new lib.goNext(), 3);

	this.btn_goNext = new lib.goNext();
	this.btn_goNext.setTransform(494,352.3);
	new cjs.ButtonHelper(this.btn_goNext, 0, 1, 2, false, new lib.goNext(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_goNext},{t:this.btn_goBack},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(284.2,201.8,537.1,397.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;