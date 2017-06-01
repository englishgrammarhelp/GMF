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
		{src:"sounds/be.mp3", id:"be"},
		{src:"sounds/couldieverbe.mp3", id:"couldieverbe"},
		{src:"sounds/High_Screaming_Gtr.mp3", id:"High_Screaming_Gtr"},
		{src:"sounds/needtoreview.mp3", id:"needtoreview"},
		{src:"sounds/organ_f_chord.mp3", id:"organ_f_chord"},
		{src:"sounds/pop_up.mp3", id:"pop_up"},
		{src:"sounds/powersynth.mp3", id:"powersynth"},
		{src:"sounds/predicateverbsdefinition.mp3", id:"predicateverbsdefinition"},
		{src:"sounds/right_answer.mp3", id:"right_answer"},
		{src:"sounds/salsa_groove.mp3", id:"salsa_groove"},
		{src:"sounds/thatisthequestion.mp3", id:"thatisthequestion"},
		{src:"sounds/thatisthequestion2.mp3", id:"thatisthequestion2"},
		{src:"sounds/tobeornottobe.mp3", id:"tobeornottobe"},
		{src:"sounds/trumpet_lick.mp3", id:"trumpet_lick"},
		{src:"sounds/wrong_answer.mp3", id:"wrong_answer"}
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


(lib.Bk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#009999").ss(3,1,1).p("EgnNgXjMBObAAAMAAAAvHMhObAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#CCFFFF","#FEFDB4"],[0,1],0,-153.2,0,153.3).s().p("EgnNAXkMAAAgvHMBOaAAAMAAAAvHg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-252.5,-152.3,505,304.7);


(lib.tobespeakbubblestill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmnEwIgHgBIgFgEIgDgDIgFgCIgEgBQgggWgRgjQgJgTgCgVIgLhsQgEgogCgqQgBg5AFg6IAAgKIAAgLIAAgFIACgCIACgDIAAgNIAAgTIAAgLIAAgNIAAgDIAAgHIAAgDIgBgCIgBgDQAAgiAMgfIAEgFIAFgIQAZgCAYgHQAHgCAHAAQB6ABB5gCIABACQBTACBUgBQDjgEDkARQAOABALAIQAGAEADAGIADAFQAEABADACIACACIAAACIAAADIABACIABAGIAAACIACADIACACIAAADIAAACIACADIACADIACACQAKAggCAjIgBAXIAAACIAAAIIAAACIAAADIAAACIACADIACACIACADIABADIABACIACAFIAAADIABACIAAADIACACIADADQAFACADAGIACACIACADIAAACQggAKgfAFIgHABIgYAGIgGABIgIACIgEABIgZAWIgLAKIgBACQgCAEgEAEIgCACIgCADIgCAAIAAANIAAAFIAAAIIAAADIAAAHIAAADIAAACIAAADQgEADgBAFIgDAHIgEAIIgBACQAAAFgCADIgCADIgBACIgCADIAAAXQAAANgDAMQgMA9gdA2IgFAKQgDAGgEAEQgFADgFABQgMAQgWACQhhAIhigBQg4gBg6AFQgPACgPAAQhiAChjAAIiDgBg");
	this.shape.setTransform(-0.9,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AmvFBQgMAAgMgEIgBgCIgBgCIgCgBIgGgCIgDgCIgEgGIgCgCIgCgCIgGgCIgDgCIgCgCIgHgHIgFgCIgDgFIgGgKQgFgEgDgGQgRgbgBggIgEgxQgJhTgChRQgBhBAFg/IADgkQgCgaABgbIAAghIACgCIAEgFQAJgrAugEQARgBARAAIDbgEIAPAAQDjAJDkgHIheAFIACAAIARAAICmAAQBDAAA7AZQAGACAGAFQATARAEAbIACADIACACIABADQABADAAAEIABADQAEANAAANIABBHIADADIACACIABADIADAFIABACIAAADIABADIABACIADADIABACQADAFAEACIAEAEIAJAHIAHAFIABADIABACIgBADIAAACIgBADIgBACIgCAAIgEABIgSADIgQAEIgIACIhXAUIgBADIgCABIgEADQgDADgDABIgEADIgIAHQgFAEgEAEIgGAIIAAACIAAADIAAACIAAAIIAAADQAAAJgCAIIgLAnQgCAGgFAEIAAAFIAAAKIAAALQgBAjgMAjQgRAygeAuIgHADQgIADgGAFQgLAIgNACQhlAQhrgEQg2gCg5AEIgQADQgIACgJAAIhIAAQh/AAh/gDgAnJktQgYAHgZADIgFAHIgEAGQgMAfAAAiIABACIABADIAAACIAAAIIAAACIAAANIAAAMIAAATIAAANIgCACIgCADIAAAFIAAAKIAAAKQgFA6ABA6QACApAEApIALBrQACAWAJASQARAjAgAWIAEACIAFACIADACIAFAEIAHABQCkACCkgDQAPAAAPgBQA6gFA4AAQBiABBhgIQAWgCAMgPQAFgCAFgDQAEgDADgGIAFgKQAdg3AMg9QADgMAAgNIAAgXIACgCIABgDIACgCQACgEAAgEIABgDIAEgHIADgIQABgEAEgEIAAgCIAAgDIAAgCIAAgIIAAgCIAAgIIAAgFIAAgNIACgBIACgCIACgDQAEgDACgEIABgDIALgKIAZgVIAEgBIAIgCIAGgCIAYgFIAHgBQAfgFAggKIAAgCIgCgDIgCgDQgDgFgFgDIgDgCIgCgDIAAgCIgBgDIAAgCIgCgFIgBgDIgBgCIgCgDIgCgDIgCgCIAAgDIAAgCIAAgDIAAgHIAAgDIABgXQACgjgKgfIgCgDIgCgDIgCgCIAAgDIAAgCIgCgDIgCgCIAAgDIgBgFIgBgDIAAgCIAAgDIgCgBQgDgDgEgBIgDgFQgDgFgGgFQgLgIgOgBQjkgQjjADQhUABhTgBIgBgCQh5ACh6gCQgHAAgHACg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55,-32.4,110.1,64.9);


(lib.tobe4wordsstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHAIQgDgEgBgEQABgDADgEQADgEAEABQAFgBADAEQADAEABADQgBAEgDAEQgDAEgFgBQgEABgDgEg");
	this.shape.setTransform(102.2,12.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AggAqQgPgMAAgWQAAgYAMgRQANgTAWAAQAPAAAKAGQANAGAAAOQAAAKgLAIIgVAJIgjASQAFAIAIAEQAJAEAIAAQAHAAAJgCQAMgEADgFQADgFAEAAQAEAAACACQADADAAADQAAALgRAIQgPAHgPAAQgUAAgNgLgAgTgZQgIAJgEARIAegMQAQgJAHgGQgIgIgOAAQgLAAgIAJg");
	this.shape_1.setTransform(94.4,8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgdBIQgDAFgEABQgEAAgDgDQgCgCAAgEIAAgIIAAgHIAAgfIgBgeIAAgbIAAgbQAAgGADgEQADgHAGAAQAHAAAAAJIAAAEIgBAEIAAAVIAAAZQAIgFAIgDQAHgDAFAAQAVAAANAQQANANAAAXQAAAVgPAQQgOAQgUAAQgPAAgMgHgAgOgDIgOAIIgBAQIABAPIAAARIANAFQAGACAHAAQANAAAJgKQAJgKAAgOQAAgQgIgJQgHgJgOAAQgGABgIAEg");
	this.shape_2.setTransform(83.1,5.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgcApQgNgOgBgWQAAgUALgRQAOgUAXAAQATAAAKASQAIAOAAAUQAAAUgLAQQgNARgTAAQgQAAgMgMgAgQgTQgGAMAAAMQAAAOAHAIQAHAGAIAAQAJAAAHgHQAIgIABgOQABgkgWAAQgMAAgIANg");
	this.shape_3.setTransform(65.5,8.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgFBEQgDgCAAgEIAAgLIAAgLIgCg4IgVgBQgIgCAAgIQgBgEADgDQADgDAEABIAUABIAAgNIgBgNQABgEACgCQADgDAEAAQAHAAABAPIAAAIIAAAGIAAAGIAOgBQAKAAADABQAHABgBAHQAAAFgCADQgDACgEAAIgFAAIgFAAIgNABIACA4IAAAEIAAAGQABAVgLAAQgCAAgDgDg");
	this.shape_4.setTransform(55.8,6.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgFBEQgDgCAAgEIAAgLIAAgLIgCg4IgVgBQgIgCAAgIQgBgEADgDQACgDAFABIAUABIAAgNIgBgNQABgEACgCQADgDAEAAQAHAAABAPIAAAIIAAAGIAAAGIAOgBQALAAACABQAHABAAAHQgBAFgCADQgDACgEAAIgFAAIgFAAIgNABIACA4IAAAEIAAAGQABAVgLAAQgCAAgDgDg");
	this.shape_5.setTransform(40.4,6.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgcApQgNgOgBgWQAAgUALgRQAOgUAXAAQATAAAKASQAIAOAAAUQAAAUgLAQQgNARgTAAQgQAAgMgMgAgQgTQgGAMAAAMQAAAOAHAIQAHAGAIAAQAJAAAHgHQAIgIABgOQABgkgWAAQgMAAgIANg");
	this.shape_6.setTransform(30.3,8.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAYAvIgDgVIgCgWIABgHIAAgJQAAgVgIAAQgKAAgJANQgJALgEAQIgCAKIAAAJIAAAJIABAJQAAAEgDADQgCADgFAAQgEAAgCgDQgDgDAAgEIgBgJIgBgJIACgaIACgbIgBgKIAAgJQAAgEADgDQACgCAFAAQAIAAACAMIAAAMQAQgWAPAAQAQAAAGAOQAFAJgBASIAAAKIAAAHQAAAIADANQACANAAAIQgBAEgCADQgDACgEAAQgIAAgBgJg");
	this.shape_7.setTransform(20.3,7.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgkAsIAAhCIAAgKIAAgJQAAgKAJAAQAJAAABAQQARgSAWAAQAIAAAEAGQADAGAAAMIAAAHQAAAMgJAAQgIAAgBgKIAAgHIAAgIQgQACgHAHQgJAGgFANIAAAzQAAAKgKAAQgJAAABgKg");
	this.shape_8.setTransform(4.3,8.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgcApQgNgOgBgWQAAgUALgRQAOgUAXAAQATAAAKASQAIAOAAAUQAAAUgLAQQgNARgTAAQgQAAgMgMgAgQgTQgGAMAAAMQAAAOAHAIQAHAGAIAAQAJAAAHgHQAIgIABgOQABgkgWAAQgMAAgIANg");
	this.shape_9.setTransform(-6.2,8.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AggAqQgPgMAAgWQAAgYAMgRQANgTAWAAQAPAAAKAGQANAGAAAOQAAAKgLAIIgVAJIgjASQAFAIAIAEQAJAEAIAAQAHAAAJgCQAMgEADgFQADgFAEAAQAEAAACACQADADAAADQAAALgRAIQgPAHgPAAQgUAAgNgLgAgTgZQgIAJgEARIAegMQAQgJAHgGQgIgIgOAAQgLAAgIAJg");
	this.shape_10.setTransform(-22.5,8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AgdBIQgDAFgEABQgEAAgDgDQgCgCAAgEIAAgIIAAgHIAAgfIgBgeIAAgbIAAgbQAAgGADgEQADgHAGAAQAHAAAAAJIAAAEIgBAEIAAAVIAAAZQAIgFAIgDQAHgDAFAAQAVAAANAQQANANAAAXQAAAVgPAQQgOAQgUAAQgPAAgMgHgAgOgDIgOAIIgBAQIABAPIAAARIANAFQAGACAHAAQANAAAJgKQAJgKAAgOQAAgQgIgJQgHgJgOAAQgGABgIAEg");
	this.shape_11.setTransform(-33.8,5.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgcApQgNgOgBgWQAAgUALgRQAOgUAXAAQATAAAKASQAIAOAAAUQAAAUgLAQQgNARgTAAQgQAAgMgMgAgQgTQgGAMAAAMQAAAOAHAIQAHAGAIAAQAJAAAHgHQAIgIABgOQABgkgWAAQgMAAgIANg");
	this.shape_12.setTransform(-51.4,8.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgGBHQgDgCAAgFIABgFIAAgEIAAgOIgBgOIgCgmIgDgnIgJAAQgVAAgNgDQgHgCAAgIQAAgEACgDQADgDAFAAIAPACIAQABIASAAIAQAAIAWABIAWABQAEAAADACQADADAAAEQAAAFgDADQgDADgEgBIgWgBIgWAAIgHAAIACAsQADAaAAAPIAAALIABAKQAAAHgCAEQgDAHgFAAQgDAAgDgDg");
	this.shape_13.setTransform(-62.4,5.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.1,-11.1,184.9,31.9);


(lib.tobe4words2still = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgFAGQgCgDgBgDQABgCACgDQADgDACAAQADAAADADQACADAAACQAAADgCADQgDADgDAAQgCAAgDgDg");
	this.shape.setTransform(-1.3,20.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AASAjIgDgPIgBgRIABgEIAAgIQAAgQgGAAQgIAAgGAKQgGAJgEAMIgBAHIAAAHIAAAGIABAHQAAAEgCACQgCACgEAAQgDAAgCgCQgCgCAAgEIAAgHIgBgGIABgUIABgUIAAgHIAAgHQAAgDACgCQACgCADAAQAHAAABAKIAAAIQAMgQALAAQAMAAAEAKQAEAHAAANIAAAIIAAAFIABAQIACAPQAAADgCACQgCACgDAAQgHAAAAgHg");
	this.shape_1.setTransform(-7,17.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgUAeQgKgKgBgRQAAgOAJgNQAKgPAQAAQAPAAAHAOQAGALAAAOQAAAPgIAMQgKANgOAAQgLAAgJgKgAgLgOQgFAJAAAIQAAALAGAGQAEAFAGAAQAHAAAFgGQAGgGABgKQABgbgRAAQgIAAgGAKg");
	this.shape_2.setTransform(-15.2,17.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgGA0QgCgCAAgDIAAgNIAAgNIABgRIAAgQQAAgDACgCQACgCADAAQACAAACACQACACAAADIgBAQIgBARIABANIAAANQAAADgCACQgCACgBABQgEgBgCgCgAgDgnQgDgDAAgDQAAgDADgDQACgDACAAQADAAADADQACADAAADQAAADgCADQgDADgDgBQgCABgCgDg");
	this.shape_3.setTransform(-21,15.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgDAzQgDgCAAgCIABgJIAAgIIgCgpIgQgBQgGgBAAgHQAAgDABgCQACgCAEAAIAPACIAAgLIgBgJQAAgDACgCQADgCADAAQAEAAABALIAAAHIAAAEIAAAFIALgCIAKABQAEACAAAEQAAAEgCACQgCACgDAAIgEAAIgDAAIgKABIABApIAAADIAAAEQABAQgIAAQgBAAgCgCg");
	this.shape_4.setTransform(-26.7,16.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgTAoQgMgEABgIQAAgCACgCQACgCADAAQACAAAEADQACACAGAAIAIABQAEAAAFgBQAGgCABgFQAAgJgOgEIgGgCQgKgCgDgDQgHgCAAgIQAAgQAPgGIAMgEIAOgGIAHgBQACAAACACQACADAAADIACAGIABAGQAAADgDADQgBABgEAAQgEABgCgDIgCgIIgQAFQgKAFAAAHIAEABQAPADAIAFQAMAGAAAOQAAAMgKAGQgJAGgLAAQgJgBgJgDg");
	this.shape_5.setTransform(-34.1,17.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgYAfQgLgJAAgRQAAgQAJgNQAKgOAQgBQALAAAIAEQAJAGAAAKQAAAHgIAHIgQAGIgaANQAFAGAFADQAHADAGAAQAFAAAHgCQAJgCACgEQACgEADAAQADAAACACQAAABABAAQAAABAAAAQABABAAAAQAAABAAABQAAAHgOAGQgKAGgLAAQgPAAgKgJgAgOgTQgGAIgDAMIAXgKQALgGAGgFQgHgFgKgBQgIABgGAGg");
	this.shape_6.setTransform(-41.5,17.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAQAjQgJAEgKAAQgKAAgGgEQgHgFgBgJQgDgTAAgNQAAgLACgMQABgHAGAAQADAAACADQACACAAACIgBALIgBAMIABATIACANIAFADIAFABQAIgBAKgDIAAgOIAAgNQAAgQACgMQAAgGAHAAQADAAACACQACACAAADIgBAbIAAAOIAAARIAAAEIAAAFQAAAEgCABQgCADgDAAQgGgBgBgGg");
	this.shape_7.setTransform(-49.6,17.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAKA0IAAgJIABgIIABgQIgIACQgOAAgKgIQgLgJAAgOQAAgVAMgNQANgOATAAQAEAAACAEQADgDADAAQACAAADACQACACAAADQAAAWgDAZIgDAaIgCAdQAAADgCACQgCACgDAAQgHAAAAgHgAAIgtQgMACgHAMQgFAJAAAMQAAAJAFADQAGAGAIAAQAHAAADgHQAEgHAAgTIABgUIgFAAIgDAAIgCAAg");
	this.shape_8.setTransform(-57.7,19.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgYAfQgLgJAAgQQAAgSAJgNQAKgNAQAAQALAAAIADQAJAFAAALQAAAIgIAFIgQAGIgaAOQAFAGAFADQAHADAGAAQAFAAAHgCQAJgCACgEQACgEADAAQADAAACACQAAAAABABQAAABAAAAQABABAAAAQAAABAAAAQAAAIgOAHQgKAEgLAAQgPABgKgJgAgOgSQgGAGgDAMIAXgIQALgHAGgEQgHgHgKAAQgIAAgGAIg");
	this.shape_9.setTransform(22,-5.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AATA3IgDgRIgBgSIAAgGIAAgFQAAgMgGAAQgJAAgGAGIgKARQAAAcgDAFQgCAFgEgBQgDAAgCgCQgDgBAAgEIABgDIABgKIAAgLIAAg0IABgMIgBgHIgBgHQAAgEADgCQACgCADAAQAGABABAGIABANIgBAQIAAAQIAAAGQAGgIAHgEQAFgDAIAAQAMAAAEAIQADAFABALIAAAOIACAQIACAPIABACQAAACgCACQgDACgDABQgFAAgCgGg");
	this.shape_10.setTransform(13.5,-7.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgDA0QgDgCAAgEIABgIIAAgIIgCgpIgQgBQgGgBAAgGQAAgDABgDQACgCAEAAIAPABIAAgKIgBgJQAAgDACgCQADgCADAAQAEAAABALIAAAGIAAAFIAAAEIALgBQAHAAADABQAEABAAAGQAAADgCACQgCACgDAAIgEAAIgDAAIgKABIABApIAAAEIAAADQABAQgIAAQgBAAgCgBg");
	this.shape_11.setTransform(5.5,-6.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgTAoQgLgEAAgHQgBgDADgDQACgCADAAQACABAEADQABACAHABIAIABQAEgBAFgBQAGgCAAgFQAAgKgNgDIgGgCQgJgCgFgCQgFgDAAgIQAAgPAOgHIAMgFIAOgEIAGgBQADAAADABQACADAAADIABAGIAAAGQAAADgBADQgCACgEAAQgEgBgBgCIgDgIIgQAFQgKAFAAAGIAEACQAPADAIAFQAMAGAAAOQAAANgKAFQgJAFgLABQgKAAgIgEg");
	this.shape_12.setTransform(-6.3,-5.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AgGA1QgCgCAAgEIAAgNIAAgOIABgRIAAgOQAAgEACgCQACgCADAAQACAAACACQACACAAAEIgBAOIgBARIABAOIAAANQAAAEgCACQgCABgBAAQgEAAgCgBgAgDgnQgDgCAAgEQAAgDADgDQACgDACABQADgBADADQACADAAADQAAAEgCACQgDACgDABQgCgBgCgCg");
	this.shape_13.setTransform(-11.8,-7.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgEA1QgCgCAAgDIAAgDIABgEIgBgKIAAgLIgCgcIgCgdIgHAAQgQAAgJgCQgGgCAAgGQAAgDACgCQACgCAEAAIAMABIALABIAOAAIALAAIARAAIARABQADAAACACQACADAAADQAAADgCACQgCACgDAAIgRgBIgRAAIgFAAIACAgIABAfIABAIIABAIQAAAFgCAEQgCAEgEAAQgBAAgDgCg");
	this.shape_14.setTransform(-23,-7.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAZAmIgFgXIgTADIgSAEIgMAcQgDAEgEAAQgDAAgCgCQgCgCAAgDQAAgDALgYIgBgEQAAgGAHgCIAVgiQAPgcAFAAQAFAAACAJIAFAYIALAxIAEAMIACAIQAAADgCACQgCACgDAAQgHAAgFgRgAgIAFIAZgFIgGgbg");
	this.shape_15.setTransform(-34.3,-7.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgtA5QgCgBAAgEIACgWIABgYIAAgKIgBgMIABgRIABgSQAAgDACgDQACgBADAAQADAAACABQACADAAADIgBASIgBARIABARIAegFQASgDANAAIABggQAAgFACgGQACgIAEAAQADAAACACQADACAAAEIgBACIgBAJIAAAHIAAAHIgBAVIgBAUIAAAQIABARQAAAEgCACQgCACgDAAQgDAAgCgCQgCgCAAgEIgBgRIgBgQIABgLQgNABgRADIgeAGIgBASIgCATQAAAEgCABQgCACgDAAQgDAAgCgCg");
	this.shape_16.setTransform(-45.3,-7.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgEA1QgCgCAAgDIAAgDIABgEIgBgKIAAgLIgCgcIgCgdIgHAAQgQAAgJgCQgGgCAAgGQAAgDACgCQACgCAEAAIAMABIALABIAOAAIALAAIARAAIARABQADAAACACQACADAAADQAAADgCACQgCACgDAAIgRgBIgRAAIgFAAIACAgIABAfIABAIIABAIQAAAFgCAEQgCAEgEAAQgBAAgDgCg");
	this.shape_17.setTransform(-55.6,-7.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgSA2QgDgCAAgDQAAgEACgFQADgEAEAAQAHABAAAIQAAAEgCAEQgCADgEAAQgDABgCgDgAgOAaQgCgCAAgDQAAgFAJgHIAQgMQAJgIAAgGQAAgJgIgIQgHgGgHAAQgFAAgHAFQgHAEgCAAQgDAAgCgCQgCgDAAgDQAAgGALgFQAKgGAHABQANgBAMAMQAMAMAAAPQAAAKgHAHQgEAFgLAHQgLAIgDAGQgDACgDAAQgDABgCgDg");
	this.shape_18.setTransform(54.1,-29.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AgYAfQgLgJAAgRQAAgQAJgNQAKgOAQgBQALAAAIAFQAJAEAAALQAAAHgIAHIgQAGIgaANQAEAGAGADQAHADAGAAQAFAAAHgCQAIgCADgEQACgEADAAQADAAACACQAAABABAAQAAABAAAAQABABAAAAQAAABAAABQAAAHgOAGQgLAGgKgBQgPAAgKgIgAgOgTQgGAIgDAMIAWgKQAMgFAGgGQgHgFgKAAQgIAAgGAGg");
	this.shape_19.setTransform(42,-28.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AgVA2QgDAEgDAAQgCAAgCgCQgDgCAAgDIABgGIAAgFIgBgXIAAgWIAAgUIAAgUQAAgFACgDQACgFAFAAQAFAAABAHIgBADIAAADIAAAQIgBASQAHgEAFgCQAGgCADAAQAQAAAJAMQAKAJAAARQAAARgLALQgKAMgPAAQgLAAgJgFgAgKgCIgKAFIgBANIAAALIABAMIAJAFIAKABQAJAAAHgIQAHgHAAgLQAAgLgGgHQgGgGgKAAQgEAAgGADg");
	this.shape_20.setTransform(33.5,-30.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgbAhIAAgyIAAgHIAAgHQABgIAGABQAHAAAAAMQANgNAQAAQAHgBACAFQADAEAAAJIAAAFQAAAKgHgBQgGABAAgIIAAgFIgBgGQgLABgFAGQgHAEgEAKIAAAmQAAAIgHAAQgHAAAAgIg");
	this.shape_21.setTransform(21,-28.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgYAfQgLgJAAgRQAAgQAJgNQAKgOAQgBQALAAAIAFQAJAEAAALQAAAHgIAHIgPAGIgaANQADAGAHADQAGADAGAAQAFAAAHgCQAJgCACgEQADgEACAAQADAAACACQABABAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAHgNAGQgLAGgLgBQgOAAgLgIgAgOgTQgGAIgDAMIAXgKQALgFAFgGQgFgFgLAAQgIAAgGAGg");
	this.shape_22.setTransform(13.3,-28.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgHAhIgLgdIgNggIgBgDQAAgDADgCQACgDADAAQAEAAACAFIASAxIANggIAGgQQACgFAEAAQADAAADACQACACAAADQAAADgMAcIgPAhQgBAHgFAAQgEAAgDgHg");
	this.shape_23.setTransform(5.4,-28.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgYAfQgLgJAAgRQAAgQAJgNQAKgOAQgBQALAAAIAFQAJAEAAALQAAAHgIAHIgPAGIgbANQAFAGAGADQAGADAGAAQAFAAAHgCQAJgCACgEQACgEADAAQADAAACACQAAABABAAQAAABAAAAQABABAAAAQAAABAAABQAAAHgNAGQgMAGgKgBQgPAAgKgIgAgOgTQgGAIgDAMIAXgKQALgFAGgGQgHgFgKAAQgIAAgGAGg");
	this.shape_24.setTransform(-2.2,-28.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgfA2QgCgCAAgEQAAgDACgCQACgCADgBIAQgBIABgNIgBgNIAAgMQAAgPACgaIgKABIgJAAQgDAAgDgCQgCgCAAgEQAAgGAHgBIAWgBQANABAWADQAGAAAAAIQABADgDACQgCABgDAAIgMAAIgLgCIgCAnIAAAMIABAOIgBAMIAXAAQADAAACABQACADAAADQAAADgCACQgCACgDABIgMAAIgNAAIgMACIgPABQgDAAgCgCg");
	this.shape_25.setTransform(-15.1,-30);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgZAyQgKgLAAgQQAAgUAKgKQALgLAOgBQAJABAFACIAHAFIACgpQAAgHAHABQAGAAAAAGIgDAtIAAAUQAAAYABANIAAABQAAABAAABQAAABAAAAQAAABgBAAQAAABAAAAQgBAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgEAAgDgHQgFAEgGADQgFABgFAAQgOABgLgKgAgQAAQgGAIAAAPQAAAJAGAHQAHAGAJAAQAEAAAFgCIAIgGIACgCIAAgNIAAgIIAAgJQgCgFgFgCQgFgDgHAAQgKAAgGAFg");
	this.shape_26.setTransform(-28.1,-30.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgHA0IABgaIABgaIAAgZIAAgbQAAgHAGAAQAHAAAAAHIgBAbIAAAZIgBAkIAAARQgBAHgFAAQgHAAAAgIg");
	this.shape_27.setTransform(-34.5,-30.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAQAiQgJAFgKAAQgKAAgGgEQgHgFgBgJQgDgTAAgNQAAgKACgNQABgHAGAAQADABACACQACACAAACIgBALIgBAMIABASIACAPIAFACIAFABQAIgBAKgDIAAgOIAAgNQAAgQACgMQAAgGAHAAQADAAACACQACACAAADIgBAbIAAAOIAAARIAAAEIAAAFQAAADgCADQgCACgDAAQgGAAgBgIg");
	this.shape_28.setTransform(-40.5,-28.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgUAeQgKgKgBgRQAAgOAJgNQAKgPAQAAQAPAAAHAOQAGALAAAOQAAAPgIAMQgKANgOAAQgLAAgJgKgAgLgOQgFAJAAAIQAAALAGAGQAEAFAGAAQAHAAAFgGQAGgGABgKQABgbgRAAQgIAAgGAKg");
	this.shape_29.setTransform(-48.5,-28.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgdAsQgKgLAAgPQAAgXAVgaQARgWAQAAIAGAAIAFABQADgDAEAAQAFAAABAGIABAPQAAADgBACQgCADgEAAQgFAAgCgFQgCgFgCgBIgHgBQgLAAgLAQQgSAWAAASQAAAJAHAHQAGAHAJAAQAFAAAIgEIANgJQAEgDACAAQADAAACADQACACAAADQAAADgCADQgUARgRAAQgQAAgKgMg");
	this.shape_30.setTransform(-56.7,-30.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.4,-43.2,123.9,70.7);


(lib.tobe4wordbubblestill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AknDhQjXgRisgpQkbhGAAhhQAAhHCag4QA3gUBKgTQEbhFGPAAQGQAAEbBFQEbBFAABhQAABhkbBGQkbBFmQAAQg3AAg2gC");
	this.shape.setTransform(1.9,4.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AlRDtQgXgqgqgLIgMgCIAAAAIgKACQgHAEAAAKIABAGQjYgQirgqQkbhFAAhgQAAhICag5QA3gUBKgSQEbhFGQAAQGPAAEbBFQEbBFAABiQAABgkbBFQkbBFmPAAIhugBIgBgGQgDgKgLACIgGABQgqALgQAsQgHgHgHgMgAQVCwIAEgBQAagLAYgPIABAAIABAAIgIAKQgGAIgCAJIgoAAg");
	this.shape_1.setTransform(15.4,6.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgHA2IgEgJIAAgBIgIgUQgPgegcgXQgZABgEgTIgBgHQAAgJAHgEIAKgCIAAAAIAMACQAqALAVAqQAHAMAHAFQAQgqAqgLIAGgCQALgCADAKIABAGQACAVgXAJQgKAEgFAIQgRAfgOAfQgBAEgGAAQgSgBgIgPg");
	this.shape_2.setTransform(-18.5,31.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.2,-20.7,221.9,59.6);


(lib.scene1wordsforprostill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape.setTransform(39.1,-7.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAUAoIgDgSIgBgTIAAgFIAAgIQAAgSgGAAQgJAAgGALQgIAKgFANIgBAIIAAAIIAAAIIABAHQAAAEgCACQgDADgDAAQgDAAgDgDQgCgCAAgEIgBgHIAAgIIABgWIABgXIAAgIIgBgIQAAgDADgDQACgCAEAAQAHAAABALIAAAKQAOgTANAAQANAAAGAMQADAIAAAPIAAAIIAAAGQABAHABALIACARQAAAEgDACQgBADgFAAQgGAAgBgIg");
	this.shape_1.setTransform(32.7,-11.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgYAiQgLgLAAgTQgBgRAKgOQAMgRASAAQARAAAJAPQAGANAAAQQAAARgJANQgLAPgQAAQgOAAgKgLgAgOgQQgFAKAAAKQAAAMAHAHQAFAFAHAAQAHAAAGgGQAHgHABgMQABgegTAAIgBAAQgJAAgHALg");
	this.shape_2.setTransform(23.4,-11.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgGA7QgDgBAAgFIAAgOIAAgPIAAgTIABgSQAAgEACgCQADgDADABQABgBADADQADACAAAEIgCASIgBATIABAPIAAAOQAAAFgCABQgDADgBAAQgDAAgCgDgAgEgtQgDgCAAgEQAAgEADgDQADgDACAAQAEAAADADQACADABAEQgBAEgCACQgDADgEABQgCgBgDgDg");
	this.shape_3.setTransform(16.9,-13.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgEA6QgCgCAAgDIAAgKIAAgJIgCgvIgSgBQgHgBAAgIQAAgDACgDQACgCAEAAIARABIAAgLIgBgKQAAgEADgCQACgCAEAAQAFAAABAMIABAHIgBAFIAAAFIAMgBIALABQAFACAAAGQAAADgCADQgCACgEAAIgEAAIgEAAIgLABIABAvIAAAEIABAEQAAASgJAAQgBAAgDgCg");
	this.shape_4.setTransform(10.3,-13);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgWAuQgMgFAAgIQAAgEACgCQADgCADgBQACAAAEAEQACADAHABIAKABQAFgBAFgBQAIgDAAgEQAAgMgQgEIgGgCQgMgCgEgEQgHgCAAgJQAAgSAQgHIAPgGQALgCAEgDQADgBAFAAQADAAACACQACADAAADIACAHIABAHQAAAEgDADQgCABgDAAQgFAAgCgCIgCgJIgTAFQgMAFAAAJIAGABQAQADAKAGQANAHAAARQAAANgMAHQgJAFgNABQgLgBgKgDg");
	this.shape_5.setTransform(2,-11.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgbAjQgNgKAAgTQAAgTALgPQALgQASAAQANAAAJAFQALAFgBAMQAAAJgJAGIgSAIIgeAPQAFAHAHADQAHAEAIAAQAFAAAIgDQAJgCADgFQADgEADAAQAEAAACACQACACAAADQAAAJgPAHQgNAGgLAAQgRAAgMgKgAgQgVQgHAIgDANIAZgKQAOgHAGgFQgHgHgMAAQgJAAgHAIg");
	this.shape_6.setTransform(-6.4,-11.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AASAnQgLAFgLABQgKAAgIgFQgIgGgBgKQgDgVgBgQQABgLACgPQABgHAHAAQADAAADADQADACgBADIgBANIgBAMIABAWQABAKABAFIAGADIAFABQAJAAAMgEIAAgQIAAgOQABgTABgNQABgIAHAAQADAAADADQADACgBADIgBAgIAAAQIAAASIAAAFIAAAGQAAAEgCACQgCACgEAAQgGAAgCgIg");
	this.shape_7.setTransform(-15.6,-11.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AALA7IAAgKIACgJIABgSIgKACQgQAAgLgKQgMgKAAgQQAAgYANgPQAOgPAXABQAEAAADADQADgDADAAQADAAADADQACACAAAEQAAAYgDAdIgEAdQgCASAAAPQAAADgCADQgCACgEAAQgHAAgBgIgAgMgkQgHALAAAOQAAAKAGAEQAHAHAJgBQAIAAAEgIQAEgIAAgWIABgWIgFAAIgGAAQgOADgHAMg");
	this.shape_8.setTransform(-24.8,-9.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgbAjQgNgKAAgTQAAgTAKgPQAMgQASAAQANAAAIAFQAMAFgBAMQAAAJgJAGIgSAIIgdAPQAEAHAHADQAHAEAIAAQAFAAAIgDQAJgCAEgFQACgEADAAQAEAAACACQACACAAADQAAAJgPAHQgMAGgMAAQgSAAgLgKgAgQgVQgGAIgEANIAZgKQANgHAHgFQgHgHgMAAQgJAAgHAIg");
	this.shape_9.setTransform(55,-37.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAWA/IgDgUIgCgUIAAgHIAAgGQAAgOgHAAQgKAAgHAIQgEAFgIANQAAAggCAGQgDAFgFABQgDgBgDgCQgCgDAAgDIABgDIAAgNIABgLIAAg8IABgNIgBgIIgBgIQAAgEACgCQADgDADABQAHAAABAHIACAOIgBASIAAASIAAAIQAGgJAIgEQAGgFAJAAQANAAAGAJQADAGABANIAAAQIACARIADARIAAACQAAAEgCACQgDACgDAAQgGAAgCgFg");
	this.shape_10.setTransform(45.4,-39.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgEA6QgCgCAAgDIAAgKIAAgJIgCgvIgSgBQgHgBAAgIQAAgDACgDQACgCAEAAIARABIAAgLIgBgKQAAgEADgCQACgCAEAAQAFAAABAMIABAHIgBAFIAAAFIAMgBIALABQAFACAAAGQAAADgCADQgCACgEAAIgEAAIgEAAIgLABIABAvIAAAEIABAEQAAASgJAAQgBAAgDgCg");
	this.shape_11.setTransform(36.3,-38.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgWAuQgMgFAAgIQgBgEADgCQADgDADAAQADABAEAEQABABAIABIAJABQAFAAAFgBQAIgDAAgFQAAgLgQgEIgHgCQgLgCgEgDQgHgDAAgKQAAgRAQgHIAOgFQAMgDAEgDQADgBAFgBQADABACACQADACAAAEIABAHIABAHQAAAEgCACQgDACgEABQgEgBgCgDIgCgJIgTAHQgMAFAAAHIAFACQARADAJAGQAOAHAAAQQAAAOgMAHQgJAGgNgBQgLABgKgEg");
	this.shape_12.setTransform(22.9,-37.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AgHA7QgCgCAAgDIAAgPIAAgPIAAgUIABgRQAAgEACgCQACgCAEgBQACABACACQACACABAEIgBARIgBAUIAAAPIAAAPQAAADgCACQgCADgCAAQgEAAgCgDgAgEgsQgDgDAAgEQAAgEADgDQADgDACAAQAEAAADADQACADAAAEQAAAEgCADQgDACgEAAQgCAAgDgCg");
	this.shape_13.setTransform(16.8,-39.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgEA6QgCgCAAgDIAAgKIAAgJIgCgvIgSgBQgHgBAAgIQAAgDACgDQACgCAEAAIARABIAAgLIgBgKQAAgEADgCQACgCAEAAQAFAAABAMIABAHIgBAFIAAAFIAMgBIALABQAFACAAAGQAAADgCADQgCACgEAAIgEAAIgEAAIgLABIABAvIAAAEIABAEQAAASgJAAQgBAAgDgCg");
	this.shape_14.setTransform(5.1,-38.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAaAqIgGgGIgNAGQgHADgBAAQgUAAgJgMQgJgKAAgVQAAgSAOgPQAOgNASAAQAHAAAIADQAMAFAAAGIgBAFIgCAKIgBAQQAAAKACAHIAFAOIACAFIAAABQAAADgCADQgCACgDAAQgBgBgFgDgAgNgUQgJALAAALQAAAOAFAHQAFAHAJAAQAHAAAFgDIAJgHQgDgUAAgKIAAgIIACgJIgGgCIgDgBQgLAAgKAKg");
	this.shape_15.setTransform(-3.2,-37.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAWA/IgDgUIgCgUIAAgHIAAgGQAAgOgHAAQgKAAgHAIQgEAFgIANQAAAggCAGQgDAFgFABQgDgBgDgCQgCgDAAgDIABgDIAAgNIABgLIAAg8IABgNIgBgIIgBgIQAAgEACgCQADgDADABQAHAAABAHIACAOIgBASIAAASIAAAIQAGgJAIgEQAGgFAJAAQANAAAGAJQADAGABANIAAAQIACARIADARIAAACQAAAEgCACQgDACgDAAQgGAAgCgFg");
	this.shape_16.setTransform(-12.4,-39.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgEA9QgDgDAAgDIABgEIAAgEIgBgMIAAgMIgDggIgCghIgHAAQgTAAgKgDQgGgBgBgHQAAgDADgDQADgDADAAIAOACIANABIAPAAIANAAIATAAIATABQAEAAACADQACACABAEQgBAEgCACQgCACgEAAIgTgBIgTAAIgGAAIACAlIACAjIABAJIABAJQgBAFgCAEQgCAGgEAAQgCAAgCgCg");
	this.shape_17.setTransform(-22.4,-39.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31,-53.9,98.2,53.4);


(lib.scene1slimthumbstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.8,1,1).p("AAEAzQACgGABgFQABgIACgHQABgEABgEIAAgBQACgCAAgCIAAgBQADgDADgEQAAgBABgBQADgDACgGQABgEACgDQAIgMABgPQAAgEABgDQAAgHgDgGQgBgBgCAAQgKgBgKAAQgIABgHABQgBABgBABQAAAAgBAAQgBABgCAAQgIAHgHAIQgCADgCADQgCAEgBAEQgCAOgCANQgBAHAAAJQAAAHgBAIQgBAKAAAKQgBAGAAAFQAAACAAACIAAAA");
	this.shape.setTransform(9.5,-4.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("AgeBLIAEgBIgFACIABgBgAggBAIgCgDIgCgCQgCgEAAgDIAAAAIAAgEIABgLIABgUIABgPIABgQIAEgbQABgEACgEIAEgGQAHgIAIgHIADgBIABAAIACgCIAPgCIAUABQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQADAGAAAHIgBAHQgBAPgIAMIgDAHQgCAGgDAFIgBACIgGAGIAAAAQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAIAAABIgCAIIgDAPIgDALIACAEQAAAGgDADIgDABQAAAFgBADQgGACgEgDQgFADgEgDIAAABQgBAEgEABIgCABQgDAAgCgDg");
	this.shape_1.setTransform(9.5,-3.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.5,-11.7,9.9,16.4);


(lib.scene1prospeakbubblestill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhkDpIhIAAIhSAAIhTAAIhTgBIhTgBIglgBIhLgEIgagEIgegNIgBg/QAAggABggQAAgJADgJQADgIAEgJIAGgLIAMgXIAJgUIACgGIAsgeIAlgJIBFgUIAJgEIARgGIANgGQAIgDAIgEIAMABIAWgFIAfgKQAWgHAXgDQAdgFAegBIAigBIBEgBQAigDAhgEQAJgCAIgFIgBgYQAAgRgEgQQgCgKgHgIQgIgJgJgIIAwACIAJALIADAHIASAYIAAAMQAHAKAJAIQAJAIAJAFQAIADAKACIADAEIAeABIA6ABIBGABIBIAIIBAAEIBOAEIAwAAIA9AFQAbAFAbACQAaAGAcACIAYATQALAJAIAMQAGAJACAJQADATAAATIgBBJIgCAjIgCARIgHAeQgGAWgIATIgMAbIgJADQhVAFhVACIhmABIjwABIjWAAg");
	this.shape.setTransform(-32.8,-31);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgKD3IhhgBIg3AAIgcAAIgcgBIgbAAIgcAAIgbAAIgcgBIgbAAIgcAAIgcAAIgcgBIgigCIgigBIgbgDIg3gEIgdgCQgRAAgQgCQgRgEgPgIIgDgCQgBgtABgtQAAgdAEgdIAEgSQAHgXAJgUQAIgPAOgOQAUgTAYgPQANgIAPgFQAHgCAHgBQApgJApgNIA+gTIAZgHIASgHIAUgEIASgGIATgCIAcAAIAcAAIAcAAIAbgCIAcgBIAcgCIAcgCIAbgDIgBg0IgvgcIgCgIIAJgJIAqABIAUAGQAJADAJAFQAQAJAMAPIAHAJIABAOQAIAKAJAHQAKAHAMAAQAkAFAlACQAyABAxAEQBMAIBNAEIBhADIBHAKQArAFAqAJQARACARAHQAHADAGAFIANAKIALALIAHAJIAFBGQABAVgBAVIgFBIQgCAUgGAUIgJAeQgGARgMAOIAAAIQgKADgJACQgKADgJABIg6ACIhhAEIjMACIiDABIiBgBgAm9haIgMAFIgSAHIgJAEIhEAUIglAJIgsAeIgDAGIgIAUIgMAXIgGALQgFAIgDAJQgCAJgBAJQgBAgABAgIAAA/IAeAMIAaAFIBLAEIAmABIBTABIBSABIBTAAIBSAAIBJAAIDVAAIDwgBIBmgCQBWgCBUgEIAKgEIAMgaQAIgUAFgVIAIgfIACgRIACgiIAAhKQAAgTgDgSQgCgKgFgIQgIgMgLgJIgZgUQgbgCgbgFQgbgCgagFIg9gFIgwgBIhPgDIg/gFIhJgHIhGgBIg6gBIgdgCIgEgDQgJgCgJgEQgJgEgIgIQgJgIgIgKIAAgNIgSgXIgDgHIgJgLIgwgCQAKAIAHAJQAHAHADAKQADARABARIAAAYQgIAEgIACQgiAFghACIhEACIgiABQgeABgdAFQgXACgWAIIgfAJIgWAGIgMgBQgIAEgJADg");
	this.shape_1.setTransform(-32.7,-30.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101.5,-55.6,137.7,49.7);


(lib.musclearmstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AidFNQgYgDgNgdQgVgyAHg3QAQiABOhmQAVgbAagVIgBgCQApgcgagpIgbgoQgJgOAGgLQgDgCgBgEQgDgSAMgNQAUgXAegFIAKABIgDgFQgBgFACgFQAMgYAZgEIAQABQAFgIAJgGQAFgDAHAAQAagCALATIADADQARgYAfgFQAYAIAKAZQALAbgJAcQAJgBAJAEIACABQAPAagQAbQgEAGgCAIQgKAHgOABQgcABgcgDQgTAKgIATIgDAFIgBAAIgCAAQAEAQgFAVQgMA8geA2QgNAVgHAYQgMAqAFApQABAOAIALIAAACQAAABgBAAQAAABgBAAQAAAAAAAAQgBAAgBAAIgDAAQgbg1AXg8IAKgZQAVg3AXg5QAFgOABgPQABgVAKgMIABABQADgSARgJIAIgGIAAgBIABgBIABgBQApAKAkgQQADgBACgCQANgXgFgZQAAgEgDgDQgOgDgMABQgEACgHAAQgbAFgVAYIgDgBIAAAAQARgWAYgJQgPgFgJgOQgDgFAEgBQAOAVAXAAIAHAAIABgBIgDgBIAAgBQAAgBAAAAQABAAAAgBQAAAAAAAAQABAAAAAAIADABIAAgEIABgBQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAABQAGgsgigdQgHgFgJADQgWAIgOASQAQARADAZQADAQgRgBQgGAAgFgDQgBAFgEAFQgIAKgKAHQgHAAgFgDQAKANgMAOQgFAHgJABQgjACgdgOIAAAAIAZAFQAcAHAXgKQALgUgWgNQgZgQgbgLIgEgCQgIABgKgBQgGAAgGACQgmANgDAkIABAEIADgDQAEADAAAEQATAEARgIQAIgDAHABIAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQgZAKgZgFIgCAHIgBABQAgAkAKAtQAEAQgLANQgGAHgHAGQgBAKgNAKQgTAPgPATQhLBegVB3QgNBIAnA7QAEAFAHACQAOADAHAIIgBAAQAMAGAIAKIAAABQAAAAAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIgEABQgTgHgKgLgABDjyIADAAQAKgJAHgKIgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAIAAAAQABgEACgDIACgCIgBgCQgSgjglgKIAAgBIAAgBQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBIABgCQgYABgPARQgIAGAAALIAAAAQACADAEABIABAAQAFgBACAFIgBAAIgBABQAfAMAbAWIACABIADgBQAEAAAEADgABfkOIAFAEIABAAQAGACAGgCQADgCABgDIABgEQgGgbgTgTIAAAAIgBgCIgEgDIgBgBIAAAAQgRgRgYAOIgHAGIACAAIACABQAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAIgEgBIgCADQAnALATAlIABABIAAgBIABACgAgPiiQgJgIADgGQAVAeAlgMQAPgFAQgCIABABQgVAKgYADIgKABQgQAAgNgMg");
	this.shape.setTransform(1.1,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAAAAIAAAAIAAAAg");
	this.shape_1.setTransform(-4.2,-20.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC9966").s().p("AiIFbQgZgNgPgWIgCgFQgbgqgCg0QgBgYAJgUIADgEQgBgQAFgRIAHgVQADgMAHgJQAEgMAIgKQgEgGAFgKIAVgmQAMgSAPgRQAHgTATgMIABAAIgBgEIAAgDQARgYAagMIABABIAEgIIAAgPIgCgLIAAgIIgCgFQgCgDAAgEIgCgEIgBgEQgDgCACgDIAAgCIgCgHIgBAAQgNgRgLgSQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAQAAgFADgEIgDgBIgCAAQgDAAgBgDIgBgCQgCgOAIgOQAEgGAGgFQAIgGAIgBIAAAAQAMgIAQgBIADAAIgCgDIACAAQADgKAFgLQABgEAEgCQAEgDAAgEIgBgBIAEgDQAGgDAGgBQAMgCAKAFQAIgKANgFIAIgCQAUgBAIANIAHADIAFADQAGgPASgHIARgGQAOAFAJANQAAAAABAAQAAAAABABQAAAAAAABQAAAAABABIAAABIADAGQAFAMABAMIADAGIABAGQAGAMgLAPIgBABIAGABIAHgCIACAAQASAFgGAPIAEABIAAABIgCAQIAAABQgBAFgDAFQgEAFAAAGIgEACIgEAAIgFADIgHADIAAABIgPAEQgJADgJgCQgMgDgMABIgBAAIAAAAIAAAAIgEAAIgDABQgKACAAAHIgGAFIgDAAIgGAGQADADgDAGIgEAGQgBAEgCACIgCAAQgCAKAAALIgBACIgCACIgCAJIgGAZIgMAoIgBABQgDAEAAAGIgBABQgJALgEAOQgHATgEAVIgBAAIAAABIgBAAIgBACIgBABIgBAFIgCABQgDAEgCAGQgEAOACAOIgBAEIgBALIAAAAIgBABIAAAAIgCAIQgCAQAHAPIABAJIABAEQAFADAAAFQAKAIgKANIgbAmQgSAXgVAWQgeAfgbAjQgKANgOAGIgDABIgEgBgAg0jIIACAAIgCgBgAAwj1IADACIACABIADgCIgCAAIgFgCIgBABgACZj8IAAABIACgBIgCgBIAAABgAAOkHIAIAEIgIgGIAAACgABxkEIABAAIAEgDIAAgBIAAgCIAAAAQgFADgFAAIgBABIACAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABgAADkOIAEABIgEgCIAAABgACSlOIgBgBIgDABIAEAAIAAAAg");
	this.shape_2.setTransform(1.1,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-35.5,42.2,70.3);


(lib.hand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("AABghQAAACAAACQgBABAAAAQAAACAAAGIgMAZQABACgCAFQgCADAAAGQAAABAAABQAAAAAAABAAFAdQAGgEADgHIACgIAgPAZQAAABABABIACAFQAGAEAEgD");
	this.shape.setTransform(-6.7,4.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("AgFAfIgEAAIgCgBIgBgBIgCgBIgCgBIgCgFIAAAAIAAAAIAAgCIgBAAIAAgCIABgBIAAAAIAAgBIAAgCIABgBIAAAAIAAgBIAAAAIABAAIAAgBIABAAIAAgCIABAAIABgBIAAgBIgBgBIAAgBIAAgDIAAgBIABgBIAAAAIABAAIAAgCIACgBIAAgBIABAAIAAgBIABgDIAAgCIADgDIABgBIgBgBIABgCIAAAAIABgCIAAgBIAAgBIACgEIABgBIAAgCIAAAAIABAAIAAgBIACgBIADAAQADgBACACIACAAIACACIAAAAIACABIABABQgBAAAAABQAAAAAAAAQAAAAAAAAQAAAAABAAIABACIAAABIAAABIAAABIABABIgBACIABABIgCABIABABIAAAAIgBACIAAABIgBAAIABABIgBACIABABIgBAAIAAABIAAABIABABIgBABIAAABIgBABIgBACIgDACIAAAAIgBACIABABIAAAAIAAABQAAABAAAAQgBAAAAABQAAAAAAAAQAAAAgBAAIABABIgBABIAAABIgBACIgEAGIAAAAIgBABIgDAFIAAAAIgBACIgBABIgEABg");
	this.shape_1.setTransform(-6.3,5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AANBMQgHgBgEgEQgCADgGAAQgHgFgIgCIAAgCIAAAAQgPAEgIgPIgBgEIgEAFIAAABIAAABIgCABIAAgBIgBgBIAAgBIAAAAIADgDIACgDIABgBIgBgCIABAAIAAgBIAAgCIAAgBQAKgTAEgWIAAAAIABgBIACABIAAAAQgDAXgLAVQABAOAPACQADABADgBIABgIIAAgBIABAAIAAgBIACABIAAAAIAAAJIAAABIgBACQAHACAFAEIAGgDIAAgDQgBgHABgHIAAgBIAAAFQAAAEACACIACAFIAAAAIACACIAAABQAFAFAKgBQAGgBADgEQAEgKAKgGIAGgCIABgBQABgDgCgEIAAAAIgBAAIAAgBIAAAAQgJgCgJAEIgBAAQAAABAAAAQgBAAAAAAQAAAAgBAAQAAAAgBgBIAAgBQAFgIAGgGIAAgBIAAAAIgDgEIABgBIABAAIABAAIAEADIAFgDIACgBIAAABIABAAIAEgDQACACAEgKQADgKAAgBIAAAAIAAgDIAAAAIgBgBIgCgEIAAAAIgBgBQgEgIgHgEIAAAAIAEgCIAIgKIABgCIAAgBIACgCIAAAAIABAAIACAAIAAABIAAABIgCAHIgBACIgCAOQAJAHgEAQQgFASgJAEIgEABQADAAACAGIAAABIAAABIACAIQgIADgFAHQgFAEgDAGIAAABIgBABIgBABIAAAAQgGAGgIAAIgFgBgAAiAlIAAAAIAAAAgAAlAhIACgBIAAgBIgCACgAhCARIAAgEQABgKAEgHIANgiQAFgPAWgJIAAgBIAKgFQAHgEAFgCQAGgCAFAAIAAACIAAABIAAAAIgBAAQgWAGgUAOIAAAAQgFAFgLAXQgLAWgDALIgCANIAAAAIgDABIAAABIAAgGg");
	this.shape_2.setTransform(0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC99").s().p("AARBLIgKgDIAAgBIgBgBIgCAAIgBAAQgFADgGgEIgBABIgDAAIABgDIgFgFQgNADgJgMQgGgIAGgGIACgBIADgIIAEgXIgBAEQgDARgIAPQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAIgBAAIgCADIgCgBIAAAAIgEgCIgBAAIgMgNIgCgDIAAAAIABgBIgBgEIAAgDIAAgDQAFgFAEgIIAOgcIADgJIAEgFIABgCIABgBIABgEIAEgGIAAAEIABAAIgBgCQACgEAFgDQARgLASgGQAHgBAAAEIADgBIAJADQAKADAJAFQALAFAFAKIgBACQADADgCAGIgBADQgFAFgDAHIACACIAAAAQAQAQgOAQQgGAIgJADIgBACQADADgBAFIgBAAIABABQAMADgGAKIgDADQgKAGgGALQgFAIgHgEIAAABIgDABIgDAAgAg6AgIAAAAIAAAAgAAtAaIABABIAAgBIgBAAgAgcAAIAAACIACgFgAA8gmIgCACIABAAIACgDIgBABgAgJg4IAEgBIAFgEIgJAFgAhDAeIAAgBIAAABIAAAAg");
	this.shape_3.setTransform(-0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.3,-7.8,16.3,17);


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


(lib.scene1slimthumb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_79 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(79).call(this.frame_79).wait(1));

	// Layer 1
	this.instance = new lib.scene1slimthumbstill();
	this.instance.setTransform(17.5,4.4,0.683,0.683,-159.7,0,0,8.3,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(69).to({regX:7.7,regY:1.1,x:17.9,y:4.2},0).to({regX:7.8,regY:1,scaleX:0.68,scaleY:0.68,rotation:-31.1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11.2,0.5,9.2,12.1);


(lib.musclearm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.musclearmstill();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-45,x:-12.6,y:5},14).to({rotation:0,x:0,y:0},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-35.5,42.2,70.3);


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


(lib.scene1slimarm2sill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjrCAIgCgBIAAAAIgIgIQAGACAFAFIABAAIAAABIACACIABABIAHAAIgJACIgDgEgAjTB2QABgEACgFQAEgFAGgDIABABQAAgGgDgGQgDgGgHgDQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAHADAEADIADAAIADAAQAQgLgDgSIgCgHIADANQACAGgEAGQgFAHgGAGIgFABQAEAGgCAKIAAABQAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAgBgBIAAAAIgDACQgEADgCAFIgCAEQAAAAAAAAQAAAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAABQAAABAAABQABAEgFADIADgIgAkPB8IAAgCIgCgEIADAAQAFgVACgXIAAAAQADADgBAGIgCAJIgEAbQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAABABAAIgCgCIgBAGIAAAAgAklBvIACgGIAAADIAEADIgBAAIgDAAIgBAAIgBAAgAk6BMQgHACgHgGQgJgHAJgIIABgBQALgHAJgJIAGgHIAAgEQAFgYAVgLQAAAAABgBQABAAAAAAQABAAAAgBQABAAAAAAQAIgFANgEQAngMAkgTIAhgPIBUgQIABgDIAHABIADAAQAGgFAegJQAfgKBWgDQBXgDAVgNIABAAIgBgBIAAgBIAAgBIACgBQAZgHAXAJIAAAAQgIAEgMgDQgIgBgHABQgdAQgnAEQgnAEg6ACQg6ACgXAJIggAKQgGACgCgBQgbAJgeAEQgbADgZANQglATgmAPQgOAFgNADIgBAAQgZAIgEAaIAAABIABgCQACADgEAFIgBABIgEAPIgDAHIgCAHQAAADgBAEQgDAMgGANIAFgVgAkzArIgFAEIgQAPQgDACABAEQAGAIAKgBIABgEQABgFACgEIAEgRIACgFIgDADgAi7AmIgBAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBIAAAAQAFgNALgLQAHgHAJgFQAIgFAIgDIADAAIACgCIAUgIQA6gKA6gBQAlgBAngDQA7gEA8gGQA4gFA4gIQAOgCALgJIABAAIAAABIABABIgBAAIAAABQgQAQgaAAIgMAAQg8AJg+AEIh3AIQg0AEg2ACQghABgcAOQgGADgFgBIAAgBIgJAEQgHADgGADQgUASgGANIADAJQAAgBgBAAQAAgBAAAAQgBAAAAAAQAAAAAAAAg");
	this.shape.setTransform(1,-2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.instance = new lib.hand();
	this.instance.setTransform(-23.9,3.2);

	this.instance_1 = new lib.scene1slimthumb();
	this.instance_1.setTransform(-43.7,-5.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("Ak9BxIgDgDIABAAIAEADIAAADIgCgDgAjIAdIgBgBIgBgCIACgCQgCgDgBgDIgDgDIgJgHIgFgDIAAAAIgBgBIgCgBIgBAAIgOgGIAAAAIgJABIgBAAIAAgDIABgCIADAAQALgDALgFQgBgGAHgCQAGgBAGgDQASgLAUgHIAHgDIAagEIACABIAfgFQAFgEAIgBQAHAAAFgDQANAAAFgBIARgHQANgGAVgDIAngFQAGgBAHACQAKgDAtgBQAtgBAKgBQAJgCAMgDQANgDARgNIAEgDQAOABAPAEIACgCIAGAFQADACADAEIAFADQABAFAEAAIACAFIAOAMIAKAHIAJABIALAJIAIABIADADIgEADIgDAAIgkAHIgBAAIgCABQgQAEgQACQgfADgfAEQgLACgLgBIgDgBQgBADgEABQgIABgJgBIg/ADIgJAAQgXAEgWAAIgHAAIgBAAIgBAAQgKgBgNABIgPACIggABIgTACIgcAFQgFABgDgCIgLACIgWAJIgTAEIgGAFIgWATIgCABIgBAAgAjPAMIABgCIgJgFIgFgDIANAKg");
	this.shape_1.setTransform(2.7,-3.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgCgBIAAgDIABAAIABAEIAAAAIACAAIABAFIgFgGg");
	this.shape_2.setTransform(-28.5,8.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.6,-15.6,67.5,27.2);


(lib.scene1slimarm2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_67 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(67).call(this.frame_67).wait(1));

	// Layer 1
	this.instance = new lib.scene1slimarm2sill();
	this.instance.setTransform(33.5,-14.2,1,1,15,0,0,32.1,-13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(53).to({rotation:45,x:36.4,y:-14.6},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.4,-32.9,72.1,42.9);


(lib.scene1slimarmstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhMDfQgEAAgBgEQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAIABAAIAFADQAZgUAJggIAEgPQAUg4AWg2IAGgQQAFgPAIgLIgGgCIgBgDQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQA8gpAdhEQAIgRAAgTIADgCIADgBIAFADIABABQAABHg4A0QgQAPgTAMQgZAtgRA0QgTA5gYA2QgJATgSAAIgCAAgAiAB4IAAgBQAAgFAEgBIADgBQA0hMAXhWQgHhDAlg/QAQgcAdgOQAFABACAFIAAABQhCA+gEBbIACABIABABQgUBlg/BVIgCABIgGABQgFgDgBgFg");
	this.shape.setTransform(29.5,-10.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.instance = new lib.scene1slimarm2();
	this.instance.setTransform(20,8,1,1,0,0,0,32.5,-12.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("AhDDgIgIgBIgLgJIgJgBIgKgHIgOgMIgCgFQgEAAgBgFIgFgDQgDgEgDgCIgGgFQANgKAKgNQAOgTAJgYIAWg0IARgsQAhhVAZhaIA3gxIADAEIABABIAGAAQAFAHAHACIADAFIAGACIAHAKIAkAcIAAgGIADAJIAJAGIgHgDIADAHQAHAQAAASIgLgKQgBAZgMAXIgGgBIgDAGIgLANIgUATIAAAAIgCADIgCAEQgCACgDAAIgDAFIgIAIIgVAaIgQAaIgJAQQgKAUgHAVIgVAvIgRAnQgJAWgMAUIgCADgAAmjiQAHABAFAEIgDABg");
	this.shape_1.setTransform(28.9,-11.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.9,-34,91.3,64.9);


(lib.scene1slimarm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(1));

	// Layer 1
	this.instance = new lib.scene1slimarmstill();
	this.instance.setTransform(36.8,-28.1,1,1,0,0,0,36.8,-28.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({regY:-28,scaleX:1,scaleY:1,rotation:29.1,x:36.9},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.9,-34,91.3,64.9);


(lib.Scene1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		playSound("be");
	}
	this.frame_19 = function() {
		playSound("pop_up");
	}
	this.frame_31 = function() {
		playSound("tobeornottobe");
	}
	this.frame_60 = function() {
		playSound("pop_up");
	}
	this.frame_65 = function() {
		playSound("thatisthequestion");
	}
	this.frame_93 = function() {
		playSound("pop_up");
	}
	this.frame_98 = function() {
		playSound("couldieverbe");
	}
	this.frame_115 = function() {
		playSound("thatisthequestion2");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(15).call(this.frame_19).wait(12).call(this.frame_31).wait(29).call(this.frame_60).wait(5).call(this.frame_65).wait(28).call(this.frame_93).wait(5).call(this.frame_98).wait(17).call(this.frame_115).wait(50));

	// Mouth Guy
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgTAAIAHAAQAVABALAB");
	this.shape.setTransform(-123.5,-58.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AgTgeQgDAIAFAHIAMAOQgIAIAFAIQABAFAHAFQAGAFAGAAQAGgBADAC");
	this.shape_1.setTransform(-124.7,-58.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC9966").s().p("AgXAiQgDgHAAgKQgBgEgGgMIgBgNQAAgjAdAAIAJAIIALgDQAMAAAFAUIADAVQAAAqgPAAQgHAAgGgGQgDANgJAAQgOAAgEgOg");
	this.shape_2.setTransform(-122.8,-60.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AgZgfQgBANAQAAQAKgEAQgCIAKAAIAAACQgnAIAAAVQAAAQASAJ");
	this.shape_3.setTransform(-124.2,-58.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC9966").s().p("AgcAVQAAgKAPgHQAPgGACgEIgEAAQgJAEgHADQgEADgHAAQgQAAAEgQQAAgPAGAAIAEABQAMgQARgCIAAAAQASADAPARQAAAIAEAEQAEAGAAAGQAAAAgSAUQgQAWgHgEQAAAHgIABQgUAAAAgZg");
	this.shape_4.setTransform(-122.4,-60.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AgZAFQAOgJAdAAQAFAAADAC");
	this.shape_5.setTransform(-123.6,-61.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CC9966").s().p("AAYAKQgFgJgEAAQgIAAgJAEQgJAFgOAAQgSAAAAgIQAAgEAFAAQAGAAADgEQAIgMAOAAQALgBAOAFQAOAEgBAGQANANAAAEQAAAGgHAAQgHABgGgKg");
	this.shape_6.setTransform(-122.2,-62.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,1,1).p("AARAsQAAgCgPgSQgMgSAAgFQAAgRAmgEQgBgEgIgBQgEAAgLgBIgCAAIgSAGQAIgNgTgK");
	this.shape_7.setTransform(-125.2,-58.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CC9966").s().p("AgUAhQgPgPAAgMQAAgOAhgDQgXgFgHgBQgIAAAAgJQAAgLAVgEQACgDAKgHQAIgGAEAAIAGAHIAYAGQAFABAAAGQgQAWAAABIACAFQABgJAGAAQAFAAACAMIABAMQAAAGgGAAQgFAAgFgEQAFAIAAAIQAAAIgFAMIgIAIQgIAGgCAAQgEAAgXgZg");
	this.shape_8.setTransform(-122.6,-59.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},67).to({state:[{t:this.shape_4},{t:this.shape_3}]},5).to({state:[{t:this.shape_6},{t:this.shape_5}]},2).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},2).to({state:[{t:this.shape_8},{t:this.shape_7}]},2).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).wait(84));

	// Mouth Sitting Guy
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("AgUgJQAUAEAVAP");
	this.shape_9.setTransform(105.5,-25.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFCC99").s().p("AAHAbIgPACQgSAAgFgGQgGgKgGgCQgMgDAAgQQAAgbAXAAQALAAAVAEQA4AAAAAfQAAAkgdAAg");
	this.shape_10.setTransform(108.9,-25.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(2,1,1).p("AAAgOQAAAHAAACQAAANABAH");
	this.shape_11.setTransform(111,-25.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(2,1,1).p("AgMgCQgJgGgFABQACAFASAEQAQAGARAA");
	this.shape_12.setTransform(107.5,-26.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFCC99").s().p("AgmAfQgLgPAAgIIADgJIgCgOQAAgjAXAAQAYAAANANQAHAHALgDQAKgDAGAFQAEAGAAAEQAAAMgYAAQgUAAgNgHQgLgHgEgBIgBAIQAAAFAjAKQAlAJAAAPQAAAcgzAAQgVAAgPgUg");
	this.shape_13.setTransform(107.8,-24.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgOAKQgCgFAAgFQAAgTAQAAQASAAgCATQAAATgQABQgKAAgEgKg");
	this.shape_14.setTransform(105.2,-25.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFCC99").s().p("AgBAyIgEgGQgEABgHgEQgIgEgBgDQgFgIgGgIQgDgCAAgIQAAgRAQgQQAAgDgHgMQAAgOARAAQAdAAgGATIAGAAQAFgDAFAAQAQAAgDAQQgDAJAAAFIADATQAAAUgOAFQgEACgDAJQgCAIgKAAQgFAAgCgFg");
	this.shape_15.setTransform(107.2,-24.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,1,1).p("AAZAQQACABABAAIACAAQgDgCgCABgAgcgQQgBAQAXAGQAKAEAVAG");
	this.shape_16.setTransform(105.3,-26);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFCC99").s().p("AgdAmQgNgMAAgCQAAgIAZgPIgQglQAAgPANAAQAHAAANASQAEAAAHgDQAPAAAKAKQAHAHAAAFQAAAKgIACQAGAHAAAKQAAAIgOANQgQAQgRAAQgJAAgOgOg");
	this.shape_17.setTransform(107.6,-24.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1,1,1).p("AAAgCQgCgCgDAAQgQgEgSgLIgBAAQADAKAUAHQgBgCgBgDIACAAQAEABAGAFQABABABAAQgCAAgCAAQABgBABAAQADgBAEAAQAEACAFABIAFADQgKAAgHgBQgGgBgFAAQACgCADAAAALAOQgXAAgZgRQgCADAAABQAAATAzAAIAUgEIAAgDQABgBABgBQACgDAFgKIglgBQgDAAgBABAgRgCQACADAAAAQABAAAAAAQAAABAAABQAAgBAAAAQAAAAAAgBQgTgBgEgKAgRgCQAEABAEABAAHANIAEABQAHgBAIgCQgIAAgBgBQAFAAACgBIgKgFQAJAAAJAAIAAAJQgEACgGAAIgLgBAAaALQAAAAABAAIAAADg");
	this.shape_18.setTransform(106.5,-26.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(1,1,1).p("AAZAQQACgBADACIgCAAQgBAAgCgBgAgcgQQgBAQAXAGQAKAEAVAG");
	this.shape_19.setTransform(105.3,-26);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(1,1,1).p("AgPgCQABAAgCgCIAAgIQAHAAANgBQAMAAABADQAAAGAAAEIAAAOQgGgQgJgGQgCgCgBAAQgBAAAAAAQAIAAAEACIgIAA");
	this.shape_20.setTransform(104.2,-25.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(1,1,1).p("AAUAMQgIgXgVAAQgDAAgHAJ");
	this.shape_21.setTransform(104.1,-25);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFCC99").s().p("AgUAsQgMgGgCgEQgGgHAAgOQAAgLALgLQAAgGgJgSQAAgRAYAAQAOAAABATIAJgBQAdAAACAiQAAALgOASQgQAUgOAAQgFAAgMgHg");
	this.shape_22.setTransform(107.8,-24.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(1,1,1).p("AALgHQAAgPgHAAIgEAFQgCACAAABIAAgBIACgCQAAgBABgCQgLgCAAAZQAAAUAJAAQABAAAFgIQAFgIAAgD");
	this.shape_23.setTransform(105,-25.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(1,1,1).p("AAAgRQgCACAAABIAAgBgAALgHQAAgPgHAAIgEAFQAAgBABgCQgLgCAAAZQAAAUAJAAQABAAAFgIQAFgIAAgD");
	this.shape_24.setTransform(105,-25.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(1,1,1).p("AgDAAQABAAACABQAAAAACABQABAAACAAAgDAAIgBAAIAAgBQAAABABAAg");
	this.shape_25.setTransform(103.9,-25.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(1,1,1).p("AAAgCQgCgCgDAAQgQgEgSgLIgBAAQADAKAUAHQgBgCgBgDIACAAQAEABAGAFQABABABAAQgCAAgCAAQABgBABAAQADgBAEAAQAEACAFABIAFADQgKAAgHgBQgGgBgFAAQACgCADAAAALAOQgXAAgZgRQgCADAAABQAAATAzAAIAUgEIAAgDQABgBABgBQACgDAFgKIglgBQgDAAgBABAgOABQAAABAAABQAAgBAAAAAgRgCQACADAAAAQABAAAAAAQAAABAAAAAgRgCQAEABAEABAgOABQgTgBgEgKAAHANIAEABQAHgBAIgCQgIAAgBgBQAFAAACgBIgKgFQAJAAAJAAIAAAJQgEACgGAAIgLgBAAaALIABADIAAgDQgBAAAAAAg");
	this.shape_26.setTransform(106.6,-26);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(1,1,1).p("AgMgIQgBgBgBgBIgGAAIgBABIAAADIADAAAAVALQgEgHgLAAQgGAGAAABIgOgLQADgCAFgFQABgFgFgCQgCAEAAAAIAAACQACABABABIgDAAIAAgCAAVALQABACAAACIgCgBg");
	this.shape_27.setTransform(105.6,-27.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(1,1,1).p("AgJgHIgKAAQgKgDAAgHQAAgFADgDIAUAAQAkAZAAAMQgCADgCACIgEgBIgCAAQgDACgFAAQAAgKgHgIQgGgCgDgDQgCgBgDgBgAgJgKQgLgIgEgEIgCAAQAHAMAGAAQADAAABAAQADABACACIgCAAIgDAAAAPAGQgRgVgEAAQAAADgDACAgEgFQgBgBgBgBAgdgCQAUACAMAMQAMAOACAAQACAAAHgJAAPAGQABABABABIADAAQgDgBgCgBgAAFAAQAEADAGAD");
	this.shape_28.setTransform(105.8,-26.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFCC99").s().p("AgnAYQAAgGAGgSQAAgBgJgIQgJgKAAgGQAAgaAaAAQAzAAAaBGQAAAhgsAAQgvAAAAgcg");
	this.shape_29.setTransform(108.5,-24.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(1,1,1).p("AgQgGIgEABIAAgBgAgbAAIAGAAQANAAAYAIIAKAAIACgCQgLAAgGgFIgGgDQgKgFgKAAIgBAB");
	this.shape_30.setTransform(105.2,-25.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(1,1,1).p("AgRACQAPgLADAAQAFAAAEAHQAHAIABABIAAADQgFgKgMgE");
	this.shape_31.setTransform(104.4,-26.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(1,1,1).p("AgQgGIgEAAIAAABgAgbAAIAGAAQANAAAYAIIAKAAIACgCQgLAAgGgFIgGgDQgKgFgKAAIgBAB");
	this.shape_32.setTransform(105.2,-25.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(1,1,1).p("AgqgBQAGAGAkAAQAeAAANgJ");
	this.shape_33.setTransform(107.7,-25);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFCC99").s().p("AghAhIACgKQgBgCgGgIQAAgEAMgLIAAgBQgMgCAAgHQAAgMAHgFIgEgNQAAgHAJAAQAMAAADAFQACAFAEAAIAFgBQAJAAgBAGQABAEgHACQALABANAOQANANAAAGQgOAsgbAAQgfAAAAgRg");
	this.shape_34.setTransform(107.9,-24.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]}).to({state:[{t:this.shape_15},{t:this.shape_14}]},32).to({state:[{t:this.shape_17,p:{x:107.6,y:-24.5}},{t:this.shape_16}]},2).to({state:[{t:this.shape_17,p:{x:107.6,y:-24.5}},{t:this.shape_19,p:{x:105.3,y:-26}},{t:this.shape_18}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},10).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},3).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_23}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},5).to({state:[{t:this.shape_17,p:{x:107.6,y:-24.5}},{t:this.shape_19,p:{x:105.3,y:-26}}]},3).to({state:[{t:this.shape_17,p:{x:107.6,y:-24.5}},{t:this.shape_19,p:{x:105.3,y:-26}},{t:this.shape_18}]},1).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},5).to({state:[{t:this.shape_15},{t:this.shape_14}]},39).to({state:[]},2).to({state:[{t:this.shape_15},{t:this.shape_14}]},3).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_24}]},1).to({state:[{t:this.shape_17,p:{x:107.7,y:-24.3}},{t:this.shape_19,p:{x:105.5,y:-25.8}},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[]},8).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]},7).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_23}]},8).to({state:[]},2).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_31},{t:this.shape_32}]},2).to({state:[{t:this.shape_34},{t:this.shape_33}]},3).wait(24));

	// animation
	this.instance = new lib.musclearm();
	this.instance.setTransform(-159.4,-55.8);

	this.instance_1 = new lib.scene1slimarm();
	this.instance_1.setTransform(97.5,27.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(165));

	// slimtext1
	this.instance_2 = new lib.tobe4wordsstill();
	this.instance_2.setTransform(50.8,-106.9,1.09,1.09);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(31).to({x:45.1,y:-103},0).to({x:54.4,alpha:1},14).wait(120));

	// slimBubble1
	this.instance_3 = new lib.tobe4wordbubblestill();
	this.instance_3.setTransform(63.3,-92.2,0.045,0.045);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(18).to({scaleX:1,scaleY:1,x:67,y:-101.6,alpha:1},8).wait(139));

	// slimText2
	this.instance_4 = new lib.tobe4words2still();
	this.instance_4.setTransform(0.1,87.2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(103).to({_off:false},0).to({x:-2.5,y:92.9,alpha:1},10).wait(52));

	// slimBubble2
	this.instance_5 = new lib.tobespeakbubblestill();
	this.instance_5.setTransform(14.5,81.1,0.08,0.08);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(93).to({_off:false},0).to({scaleX:1.26,scaleY:1.31,x:0.1,y:87.2},10).wait(62));

	// proText
	this.instance_6 = new lib.scene1wordsforprostill();
	this.instance_6.setTransform(3.2,44.6);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(66).to({_off:false},0).to({x:2.4,y:40.2,alpha:1},14).wait(85));

	// proBubble
	this.instance_7 = new lib.scene1prospeakbubblestill();
	this.instance_7.setTransform(0,0,0.036,0.036);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(60).to({regX:-30.6,regY:-54.2,x:-1.1,y:-1.9},0).to({regX:-33.5,regY:-54.6,scaleX:0.83,scaleY:1.27,x:13.9,y:-23.8},10).wait(95));

	// drawing
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(0.1,1,1).p("AgcgeQAGACAEAEQACACABACQAEAFAAAFQAAABAAABQAAAFgBADQgBAAAAAAAATAKQABgBAAgCQAFgBAGABQACABABAAQADACACACQABABACACQADAHgCAHQgBAGgLALAgagxIAAAAIAAAAAgWABIAAAAAgrgLQAAAAABAAAAsAyIAAAAAAWAiQgBAAAAAAIAAAA");
	this.shape_35.setTransform(113.2,-39.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(1,1,1).p("ATzq5IAAAAIAAA0IgwhLIgFgJIgBAIQgCADACAEIgCAXIAAARIgqg4Ig0gTIg5AAIgVAAIAHAGIADADIANALIABABIAAACQgBgBAAgCATyq9QAAABABAAIAAADIAAAAIBjBhIAJAIIgxA7IhVBbIgBgDAQ4p+IgBgCIAAgIIAAgWIgTgNIgqgcIAFgBIABgBIABAAIAZgJIAFgBIAIgDAQlrdQABABAAADAQ8p7IgDgDIADADIACABQAAABAAABIgCgDIgEgDAQ/p3IgBgBQAIAaAuASQALAFALAFIAXAJAQapQIAAgHIAAgMIAegbAQKoqQAKgGAEgNQABgEABgEQAAgBAAgBIAAgJAQComQACgBACgBQACAAABgBAPQnHQAfAKAfgKAPrmeIABAAQAQATgTATQgOASAkAGQAngXgWgiQgggIgIgTAPrmeQgBgDgCgTQgIACALAUgAPQnHQgKgIgHgHQgEgEAFgKQAEgKAUgKASGnNIAAglAQUoJQgfAOgdADIAnguAMUFoQAAgCgBgDQgFgPgCgWQgDgXAFgXQABgGAAgHQAEgVAAgVQAAgHAGgTQAFgSAMgeQAAgCAAgDQABgBAAgBQAAgCABgCQAAgBAAgCQAAgBABgCQABgDAAgFQAAgBAAgBQABgDAAgCQABgBAAgCQAAgBAAgBQABgHABgGQAEgSAEgSQACgIABgIQACgGABgGQABgEAAgEQABgFABgEQAFgRACgUQADgTAEgSQAEgTAFgSQACgFABgFQACgJACgJQACgKAEgKQABgDAGgSQAFgLAEgLQABgEAFgNQAEgHAFgDQAGgFAIgCQACgBADAAQALgCAKAAQAFAAAFAAQAOABAOAAQACAAABgBQAJgCAIgDQAGgDAMgFIA9ghIgUgvIg6AAQgngIgEglIAShaAQ3kRIALAeASgo7IABACASqodIAAgDIgJgZASHnzQAhgJACgaQAAgBAAgBASGnNIAQgHQATgZAdAEQADACACACQADADACADQABABABACQABABAAABQAEAJgDAKIAAAAATYm+IABAEQgBASgTASIgmAWQgDADgEABIgNAHIAfBoQACgBACAAQALgCALgBQADgBACAAQABAAACAAIgDAAIA7gIIABAAIADABQEfAJCSHlQAAgDABgEQAAADABAHQACANACAZQADApgKApQgJApgDAGQgDAGAAAEATYnAIgCgIASqkNQgFAEgEAMIAJgPgAa5DVIACADAa5DVQgBACAAACQAAAEAAADQgCAJgFAMQAAACgBACQgFAJgJAHQgDAGgEAEQgDADgIACQgNADgOACQgbAEgcAEQgMABgLACQgNABgMADQgCABgDAAQgVACgVABQgyABgtgOQgDAAgCgCQgUgJgSgKQgCgBgCgBQgEgBgEgCQgEgCgEgDQgCgBgDAAQgJAAgIgBQgFgBgFAAQgZAAgYACQgGAAgHABQgCABgPAEQgKAEgRAFQgBABgBACQgHAIgNABQgJABgIgDQgKgDgNgBQgNgBgMAAQgcAAgVAAQg3ABgUAFQgOAEgMACQgMACgKAEQgBABgCABQgVALgYAHQgKAEgNAAQgCAAgCABQAAAAAAAAIAAAAATYHaQgDADALABQACAAADABQAZAEAZADQAMABANgBQAGAAAGAAQATgCATgEQAXgFAVgFQALgCAIgFQACgBACgBQAqgSAugOQACgBADgBQAogTAygFQAFAAAFgBQATgCASgDQADAAAEAAQAGgDAFAAQAFAAAEgCIADABIBVADIgOJVImeBRIhlgcAcfUmIgPAAIAAAFATQFLQAAAFAAAFQgBABAAAAQARAKAKAUQANAcgGAgQABAIgCAHQgGAKgGAGQgBAAAAAAQgBABAAAAQgCADgEABATQFLIABAAQAfgDAiABATSEJQAOATgEAMQgFAMgDAIQgEAIAAAHAVJEJQAdgHAFgVQAEgSgCgUQAAgBgBgBQAAgEgBgDQgDgJgEgIQhsiih0hTQgGgEgGgEQABACACABAR4hQIABACASEhIQgGgCgDgDQgBgBgBAAIgBgCQgegagngJQgFgBgFgBQgZgCgUALQgUAKgMARQgLAOgKAQQgYAogMArQgIAXgDAYQgDAbgCAaQgCAHgDAGQAAADgCADQABADgCACQABAEgCAPQgDAPgFAbQgaA8ABAqQAAABAAACIAAAAQgPABgNAEQgCABgDABQgDAAgEABQgMADgLAGQgMAGgHAKQgCADgBACQACAKgHACQAAABAAABQgBAMgEALQAAABAAABQgBADgCACQABAHAAAGQgEAVAAAYQAAACAAABQAAACABABQABAHAGAHAOHHkQgBgDgBgEQgBgJAAgJQgCgVAIgTQABgCgCgEQABgFAEgEQAGgHAGgEQAUgLASgIQALgEAMgDQAbgFAcgDQAwgFAvgKQAEgBADgBQAtgGAvgFATgHLQgDAAgCAAQgCAAgBAAQgwAAgvgBQgCAAgDAAQgMgBgNABQgDAAgEAAQgNACgMADQgaADgWANQgDACgCAAAP6HGQgDAFAIAHQADAHAEAHQAAABAAAAQAMAYAQAXQAdAiAJAqQADAPAAAPQAAAEAAAEQABAOAEAJQABACABACQABADAAACQADAIACAKQACAHACAGQACADABAEQAKAtAIAvQACANAEAMQAHATAIATQADAIACAMQABACACADQAIANADAOQABAEABAEQAAABAAABQABAHAAAHQABAGADACQADgCAAAAQACgDACgFQgCgGgBgGAMPF0QACgGADgGAMEHRQAAgBAAgCQgBgHAAgGQgBgRABgSQAAgJABgJQAAgDAAgEQABgPAJgBQAAgBABAAAOHHkQgXAjABASQABASgFARQAAACgBADQgBAIgFAHQgOATgOASQgCACgCACQAAABgBACQgFAHgHAFQgEADgCADQgEAMgFAIQgEAJgGAIQgEAMgIAKQAAAEgDACQgFALgEAHQgBACgDABQgKATgHAUQgBACgBABQgHAWgGAXQgNAtgMAtQgBAFgBAFQAAACAAADQgEAFACAKQgBACgBACQgDAGACAHQAAATAAATQACATgJArQgJArgwgEQgqAGhmABQh/ABgCgFQgCgFgBgCQgWgBgQgMQgCgCgDgBQgGgBgEgFQgJgLgFgMQgBgCgBgCQgEgHAAgJQAAgKADgKQADgNAOgCQAKgBAIAEQABABABAAQAJACAGAEQADACACAAQAaAKASASQA5AWA2gRQA2gSBJhVQADgIADgIQAJgWAIgVQAJgYALgXQAEgHADgGQACgEABgEQAHgUAIgUQAKgXAGgbQABgBAAgCQAJgUAGgWQADgLADgLQAHgVACgWQABgCAAgCQAFgLAAgMQABgDAAgCQADgZAGgZQAAgCAAgBQAEgSgDgUQABgCAAgCQAEgJgCgKQAAgBAAgCARSPvQgBgTgEgRQgCgCgBgCQgNgrgOgtQgGgVgIgVQgRgsgRguQgSgsgRgsQgRgpgSgnQgBgDAAgEQAAgFAEAEQgHgIgIgMQgFgGgEgFQgTgagKgeASnOtQAJAaAPAZQACACABACQAJAXAVANQAIAFAEAHQAAABABABQABABABACQAIAHgCALQAAACAAADQAAAOgLAGQgKAFgNABQgBAAgCABQgKADgMABQgCAAgDAAQgKABgKABQgPABgPgDQgFgBgEABQgNADgPgBQgEgBgDABQggAJgdASQgRALgUAGQgDAAgCACQgDACgFABQgLADgLAAQgdACgYgHQgCAAgCgBQgXgKgWgNQgDgBgDgCQgggUgSgfQgBgCgBgEQgHgGAAgKQABgLAEgJQACgDABgDQAEgJAKgDQAKgDAMAAQADACACAAQAQAAANAIQAKAIALAIQADACADACQACABACABQANAEAPAFQAWAGAZACQANABAMABQAEAAADABQAGACAHAAQAaADATgOQAJgHAGgKQADgDAAgDQACgFABgFQAAgHAAgHIjLgwIAAnbAVSQyIgUo/ALtIOQADACADABAz4mLQicB0lXhLQgBAAAAAAQgCAAgDgBIAIgJQB3iVANgNQANgNAKgPQAEgFACgFA29yXQAAgBgBgBQgHgIAAgLQAAgJAEgIQABgBABgBQABgBAAgBQAFgHAJgDQACAAABAAQAEgBADAAQABABABAAA3kwAIAAAAQgDgJAEgIQADgHAFgEQgFgCgDAAQgDAAgBgCQgBAAAAgCQAAgBAAAAQgEgEgCgCQgBgBAAAAQgHgGgBgLQAAgEAAgEQAAgJADgIQAEgHAHgFQABgBABAAQACAAABABQABAAABAAQAGADAEAEQgDgDgBgEQgBgDgBgCQgBgDABgDQAAgCAAgCQAAgCAAgCQABgGADgFQABgBAAgCQABgBABgCQAEgHAHgFQAHgFAIgCQAAAAAAAAQABABABABQAFADAEACQgBgFgEgBQgBAAgBAAQgBgBgCAAIgBAAA2NzLQAAgBAAgCQAAgDABgDQABgEACgFQADgGADgGQAEgGAFgGQAHgJALgFQAHgCAFgBQAIgBAGAGQADADADADQAFAEABAGQABAFABAEQABABAAABQAAABAAABQAAgBAAgBQACgKABgKQACgGADgGQADgFAEgFQAKgLAPgDQAFAAAFAAQAKACAEALQABADABACQAAABAAAAQABgBAAAAQADgMAKgHQAOgLARAAQAHAAAEAFQADACABADQACAEAAADQABAHABAGQADgCADgEQADgEAEgEQAEgDAFgDQATgKAUACQAOABAJALQACADABAEQAAAEgBAFQAAAGgBAFQAAABAAAAQgBACAAABQABgCAAgCQAEgJAHgHQAOgOASgHQAEgCAFgBQAKgDAJAFQACABAAACQADAFgCAFQgBAEgCAFQgCAHgDAGQAAACgBABQABAAAAgBQABAAAAgBQACgBABgCQAEgDAFgCQAVgKAYABQAKABAAAJQABAIgFAHQgFAGgGAGQALgHALgEQAHgDAGgBQAHgBAGABQAKAAAJAFQADADADADQAGAHgHAIQgFAFgGAEQgDACgDACQgDACgCABQgBAAAAABQAAAAABgBQAKgBALgBQAGAAAGABQAKAAAGAIQAJAJgFAKQgGAMgLAGQgDACgDACQgDACgCABQAAABABAAQAEAAAFAAQAOABAJALQADADAAAEQABADgCACQgBADgCACQgEAEgFABQgCABgBACQAOAAAKAKQABACAAABQABAGgDADQgDADgCADQgBACgDACQgBACgBACQACACAEAAQAEAAADABQAKADAFAJQADAGgEAEQgCACgCABQAAABgBABQgCACgCAAQACAAACAAQAHAAAHABQACAAACABQACAAABABQgBAHgGAEIgBAAQAAAAgBAAQABAAABAAQAAAAAAAAQACABACAAQAEAAADAEQACACAAACQABAEgBADQgFAQgOAIQgCAAgCABQABAAAAAAQACgBABAAQAEgBADAAQAKAAADAIQAHAXgNAUQgJAMgOAFQgBAAAAAAQABABAAAAQADACADABQAJAEAEAHQAEAIgHAFQgHAFgKgBQADACAEABQADABACABQAEADABAEQAAADgBACQgCAEgEACQgGADgIABQADAEADAFQACACAAACQABACAAADQABAFgEADQgTAOgXgCQAIADAIAFQAMAGAHALQABACABABQAAACgBACQgBACgCACQAAAAAAAAQADACACABQADADgEADQgBABgCABQgJAGgIgGQgBgBgBgBA2NzLIAAAAQADABACABQACABABAAQgFACgCgDQAAAAgBAAQgBAAgBAAQgDgBgDAAQgDgBgEAAQgEgBgEABQADgBADAAQAJgBAIACgA2MzJQgBAAAAgCAvAzTQgBAAgBAAQAAAAgBAAQABAAACAAgAzYvRQAAAFABAEQAAAFACAFQAFALALACQACABACAAQACAAACAAQgBgCABgDQABgCAAgDQABgKAEgKQAFgMANgGQADgBAEgBQADAAADgBQAQgCAJAMQAMAOAEASQABAFAAAFQACAMAAAMQAAAJgFAIQgCAEgDACQgJAHgLACQgGABgHABQgEAAgFAAQgKAAgLgBAzavdQgCADgDADIAAAAQgCACgDACQgMAHgOAAQgFgBgFgBQgLgCgIgIQABgBABgBQAHgGABgIAyBtQQAAABgBABIAAAAQgBABAAABQgCADACADQABACABACQABABABAAQAIAAAHAAQACAAABgBQAAAAABAAQABAAABgBQABAAABAAQgCABgDADQgGAGgDAHQAAACAAACQAAAHAHABQgEACgEACQgBABgBABQgGAKgBALQAAAEAFAAQACAAADAAQgDAHAAAIQgBAFADADQACABABABQANACAJgKQACgBABgCQADgEACgEQAAAKAHAGQACADAEACQACAAACABQAFAAADgEQABgBABgCQACgCACgCQACgEABgEQABgBAAgCQABABgBACQABAFAAAGQABACABACQADAEAGACQACABADgBQADAAADgCQACgBADgCQAGgHAEgIQACgBAAADQAAACAAABQADAGAHADQADABACABQACAAACAAQAKAAABgKQAAgCAAgCQAFADAFgBQAEAAAEgBQADAAADgCQALgEgBgLQAAgDgBgDQgDgHgFgGQAJAHALABQAFABAFAAQAFAAAEgBQADAAACgBQAHAAgBgHQAAgBAAgBQABAAABABQAIAHAJgHQACgCACgDQADgEgCgFQAAAAAAgBQAAgBgBgBQABABABABIAAAAQAgArAVAMQAQAJARAIQAQAIARAAQAUABAPgMQARgNAQgOQAOgNAOgMQANgMAMgNQAPgQATgKQAOgIAOgGQAOgHAQgGQASgHASgGQASgFASgFQAUgGATgCQAQgCAPAAQATABARAEQAKACAJAFQAGADAGAFQAJAJAGAJAyBtQQAAAAAAAAQADgDAFABQgDACgFAAgAygtnQgBADABAEQAAADABACQACACABABQALAIANABQACAAABgBAxotDIAAAAQAAAAABAAQgBAAAAAAgAzoqKIgBAAQgBAAgBAAQgMgBgLgEQgEgBgCgFQgFgOAMgZQgDAAgDAAQgOgBAKgQQAAAAAAAAQABAAACgCQAUgHABgSQAHgSgIgSQgCgFgHgBQgEgFgHANQgPANgRAHQgEgRgNgEQgXABgOgKQgEgDgCgFQgEgNAQgPQAGgRAAgUQABgUgHgTQgDgHgEgHQgEgIgGgIQAAAAgBgBQAAgBAAAAQAAAAgBgBQAAAAAAgBA5BowQAPgLARgEQASgLAVgBQARgJARgDQATgEATgCQATgCASAGQATABARAGQASAGATACQATACAQgLQAQgLANgOQAOgNAKgMQACgBABgCQABAAAAgBIAAgBQADABAEAAIACAAQAUAAANgIQAQgJAJgOQAKgQAGgNAvUseQgCgDgEgDAvtr7QgCgCgBgBQgEgEACgEQABABABAAQABACABABQABADAAAEgA1bu8QgJAJgIAIQAAAAgBAAIAAABQgHAEgHgBQgEAAgEAAQgJgBgGgDQgBgBAAgBQgDgIAEgCQgKAEgMgCQgDAAgBgBQgEgBgDgCQgCgBgBgBQgFgFgCgGQAAgBAAgCQAAgJAGgGQgIAAgHgBQgDAAgBgCQgCgCgDgBQgBgBgCgBQgHgCAAgFQgBgCgBgCQgCgCAAgCQgDgIgCgJA1YvKQgCACgFAGQgFAGgLAIQgBABgCAAQAAABgBAAQAAAAgBAAA0bvYQgCACgCABQgDADgEADQgGAEgIACQgDABgDABQgEAAgEAAQgJAAgKgCQgBAAgBAAQgBAAAAgBQAAgBABAAQACgDADgDQADgDACgDA0Zt1QABAAABgBQACgBACgBQADgBABgCQAKgJACgNQABgDAAgDQABgFgDgEQgBgCgCgBQgDgEgDgEQgCgCgCgCQgGgEgHgCQgDgBgDAAQgFgBgGABQgKABgFAIQgDADgCACQgEAEgBAEQAAADgCABQACAGADAEQADAFADAEQACgJAJgEQAFgDAGAAQAHABAEAFQAKAIgBANQAAAEgCACQAAACgCABgA0ct0QABAAACgBIAAAAQgCACgBgBQgDAAgEAAQgCAAgDgBQgCgBgCgBQgLgIgIgKA32m5QACgCADABQABAAABABQAOAJARACQAFAAAFABQAcAEAWgLQAKgFAGgKQAEgHAEgGAxZk1QgGAAgGABQgRgFgTgHQgQgFgQgJQgRgJgPgMQgPgLgOgOQgIgIgGgKQgCgCgCgEQgBgCgCgDQgKgRgIgNAurmoQAEANAPAMQAOALARAIQAQABAQgDAurmoQABgFACgGAxZk1QAMgCALAAQARgCAPgEQASgFARgGQARgGAQgJQASgJAMgQQAMgPAIgVQgBgIACgMAwihoQABgRAAgPQAAgUAAgUQgEgSgIgRQACgVgGgTQgGgTgNgOQgMgPgJgKAt9jsQgEAAACAQQACARAHAOQABAVAHASQAHAQACAFAl0uHQARgGATgKQAQgCAUgCQAQgJATACQATgDATAEQAQAGAPAMQAPAKAPAMQAIARAIARQAIARABAUQACASgDARQgJAPgKAOIgBAAQAAABAAAAQAAAAAAAAQAAABgBAAQAAABgBABQgLAPgOANQgGAEgDAFAl2qAQAEgDAFgDQAMgKAOgNQANgMALgNQANgQADgUQAHgPgCgLQAEgOACgJAihryIAAAAIAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAALgGAPQgFASgCASQgIARgCARQgHATAAATQgJATgGATQgFARgFARQgEAPgGAPQAJAEAKAKQAFASAIAUQACAGgCALQAHAMAEAPQAFATAHASQAGANgGANQgGANgMAOQgMAPgJAMQgGAIgJAEQgJADgFgHQABgDAAgHQgEAEgGAFQgQALgRADQgMACgMABQgKAAgCgKQgOASgUgDQgLgCgIgFQgGgEAAgIQgDADgDADQgNASgSgKQgRgKgFgVQgIgQgDgUQAAAAAAgBQAPgLAPgIQAOgJAQgCAo2sBQgHgCAEgKQADgIAEgHQAEgGAFgGQAYgZAkAFQAEABABADAodp2QAOAQAbAHAl2qAQgMAHgKAFQgQAKgSAEQgTAHgTgCQgRABgPABQg0gGgIAWQABASgFATQADAUgHAQQgGATgLAQQgKAQgPALQgHAFgHAEQgJAGgKAFQgPAIgNAMApum6QgFASABAUQAAARAAARQAAARABAQQAAATADASQADATAFATQADARAIAPQABABAAABQACADABADQAAABAAABQACADAAAEAwchkQABAAABABQADACAEABQAkAKAiAOQACABADAAQAUAEAWgCQAKgBAIgDQAEgBADAAQAvgIAsgSQAXgKAYgMQAMgGAMgEQAGgCAGgDQAEgDAFgCQASgGARgKQAKgGAJgFQAOgJALgJQACgCACgCQACgBACgCQAJgJAGgGQAGgHALgEAm+laQAAABgBAAQgSAOgQgQQgQgPAFgVQACgSALgNQALgSAVABQATACASACQADABABAEQANgQAIgSQAHgSAJgSQAAgUAIgTQgCgTADgTQgCgTgGgQQABgYgHgMApTjlQABAAAAAAQAEAFADAFQAAAAgBAAQgFgFgDgDQABgBAAgBQAFAEAEAEQADADACADQgDgCgDgCApUjjQgCADgBACApbjmQABgBAGAEApFjXQAMAJAKAMQALAPAHARQAGARADASQAEASACARQAFATgBASQAAASgGARQgGATgJAOQgFAJgIAAQgGAJgQAJQgVAMgRAMQgNAKgOALQgKAIgMAHQgOAIgOAHQgLAKgLAJQgKAIgJAKQgPALgOALQgOAKgMAJQgWAbgPAbQgCADgBACQgJgFgLgFAjukwQAEgDADgDAxkDTQAEgCAHgEQAXgEATgBQATgBASABQATAAASADQASACARAEQATAEAUABQARAFAQAHQATAEAQAKQADABADABQAAAAAAAAQAAABAAAAQgKAOgFAKQgGAKgNANQgNAOgTAQQgSARgRAHQgCAAgBABQgDABgCAAIgBABQgBAAgBABQgBAAgBAAQgDADgCAMQACABACABQBLApAzCPQAbBLAUBoQBRBdgwAVQgwAVgEAAQgBABgCAAQgDAAgCABQgRACgRADQgEABgEAAQgNACgMAFQgDABgDAAQgFABgFADQgHADgIACQgFABgEADQgEADgEABQgEACgDACQgJAFgJACQgDAAgCABQgHADgIABQgCABgCAAQgBABgBAAQgEAAgDAAQgIgBgIgCQgDAAgCAAQgFAAgEgEQAAgBAAAAQADgHAGgCQgFAAgFAAQgHABgGgCQgBgBgBAAQgBgBgCgBQgBgBgBgBQgCgDABgEQAAgBAAgBQABgBABgBQADgHAGgDQgBAAAAAAQgBAAgBAAQgCgBgDAAQgGABgFgDQgCgBgBgBQgCgBgCgBQgDgCgBgEQgBgGADgCQAGgEADgGQgBABgBAAQgFAAgFAAQgJABgJgCQgFgBgEgEQgCgCAAgCQAAgEABgFQABgBABgCQABgBAAgBQACAAAAgCQACgBABgBQADgGAFgDQAFgEAFgDQACAAABgBQAIgFAJgEQARgJAUAAQACAAADgBQAFgCAGABQAFAAAFAAQAEgBAEAAQAHABAHAAQADAAACABQADABAEAAQADABAEAAQADABACAAQARAAAXgIIjXkIQgbgYgSgbQgQgjgEglQgEgnAJgmQADgMAFgLQAEgKAEgJQgJAAgJgDQgdACgYAFQgTAEgCgOQAAgCAAgCQAAAAAAgBQAAgDgBgDQgBgKgEgJQgHgTgMgQQgNgRgOgOQgOgPgQgMQgRgOgWgGQgQgEgUgCQgTADgSAEIAAAAQgEABgFABQALgOAPgJQAQgKARgHQAOgRAQgPQAKgKAQgHQAPgHAQgHQAQgJARgHQATgIASgMQAQgJAQgJQAQgJASgGQARgGARgHQAOgHAOgHQAagMAWgMQAAACAAABQAAADAAADAwchkQgDAAAAgBQABAAAAAAQAAAAACABgAxkDTQAGgUAIgRQAKgXATgUQAEgEAEgFQALgOAPgKQAFgEAEgEQARgQARgSQACgCACgCQACgBACgCQACgCAAgDQABgDAFgCAyDEJQAEgIAEgHQAKgRAJgSQABgCADgCAzmD/QgHACgHAEQgEACgDABQgCABgBABQgBABgBABQgBABgBABQAAABgBAAQgEAEAAAGQAAACgBACQAAADAAADQgBAKACAJQAAACAAACQABAJABAKQABAJACAJQAAACAAACQABALABAKQAAADAAACQABAEAAADQABAIAAAIQAAAQgCAPQAAAEAAAFQgDATgCAUQAAACAAABQgBACAAACQgBAFgBAFQgBAJgCAHQgBAJgCAIQAAAEgBADQAAADgBADQgBAEgCAFQAAABgBACQgDAJgEAJQgCAFgDAEQgEAIgFAKQgFAJgFAIQgCADgCACQgEAIgHAGQgGAHgFAHQgGAIgGAHQgBABAAAAQgBABgBABQgCAFgDAEQAAAAAAABQAAAAAAAAQgBABgBACQAAACgBACQgFALgFALQgBAFgCAEQgDAFgBAFQAAACgCABQgBACAAACQgCAFgBAFQgCAEgBAFQAAACAAACQAAABgBABQAAASAAARQAAACABABQABADAAAEQgBADAAACQAAACgBABQAAAFgCAEQgCAFgBAFQAAABgBABQgFAHgGAIQgBACgBAAQgBABAAABQgCACgCABQgBACgCACQgIAIgJAFQgBABgBAAQgLAEgJAEQgDACgCABQgCABgCAAQgDABgCABQgIACgHACQgCAAgCAAQgNABgNAAQgCAAgCgBQgCAAgDAAQgCAAgDgBQgDAAgDgBQgBAAgCgBQgEgBgEgBQgBAAgBgBQgFgDgFAAQgCgBgEAAQgCAAgDgBQgBAAgBAAQgOgBgNABQgKAAgKgCQgBAAgBAAQgDgCgFABQgCAAgDAAQgBABgBgBQgPABgQAAQgCAAgCABQgBAAgCAAQgEABgEACQgBABgCAAQgEABgDACQgEACgFACQgBgBgCAAQgBABgBAAQgBABgCAAQAAAAgBAAQgBABAAAAQgEACgEAAQgGACgHABQgDABgCAAQgJAAgJABQgJAAgIgCQgTgFgKgQQgFgIAAgJQAAgIAEgHQAGgIAKABQABAAABAAQACABABAAQAEACAFACQADABADACA8BM+QgCgCAAgDQAAgEADgBQAHgEAHADQABAAABABQACABABAAIAAAAQgBgBgBgCQAAgBAAgBQADgIAFgDQAFgDAFAAQAIgBAHAEQACABgBgBQAAgBgBgBQgEgCAAgEQAAgBABgBQAEgGAGABQADAAABABQACAAACAAQABABABAAQADACAFACQABAAAAAAQADABACgBQACAAABAAQAFgBAFAAQACAAABAAQAGgBAGgCQACAAADgBQACAAABAAQAGgCAHgCQAFgBAEgBQAIgCAJgBQADgBACgBQATgDATgFQACgBABAAQAFgBAEgCQAKgGAHgGQACgCABgCQAEgDACgEQAJgKAHgLQAFgIAEgIQAKgQADgSQAAgDAAgDQACgIgBgIQAAgCADgCQgBgBAAgBQABgEAAgEQAAgEABgDQAAgCAAgDQAAgGAAgGQABgUADgTQABgEAAgFQAAgDABgEQADgSABgSQABgBAAAAQAAgDAAgEQAAgDABgEQACgTAAgUQAAgTAAgUQAAgCgBgCQgBgIABgJQAAgBgBgBQgCgCABgEQAAgBAAgCQgBgGAAgGQAAgBAAgBQAAgBAAgCQgBgKAAgKQAAgLgDgKQAAgCgBgDQAAgCAAgDQAAgCAAgDQgBgMAAgNQAAgCABgDQAAgBAAgBQABgKAAgJQAAgCABgBQACgEAAgEQAAgCAAgBQABgDAAgDQAAgBAAgCQAEgIACgJQAAgBABgCQAAAAAAgBQAAgDACgCQABgBAAgBQAAgCABgCQABgDABgCQABgEABgEQACgFABgFQACgKAGgIQABgBABgCQAAAAAAgBIAAAAQABgBABgBQABgCABgEQABgBAAgBQACgCABgCQABgBABgBQAEgIAGgJQAFgJAHgIQABgBABgBA1ZKcQgBACgBADQAAABgBABQgDACgCADAvLFfQAEgBAEgC");
	this.shape_36.setTransform(5.5,14.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(1,1,1).p("AR+CmQABACACABQAJAJAMAAIABAAQAEAAAEgBQAHgCAGgGQAJgIAAgNQAAgMgJgJQgJgJgMAAQgDAAgCAAATaDjQACAAABAAQAJABAHgFQAIgEAEgIQABgDABgDQABgCAAgBQACgLgGgJQgGgLgMgDQgHgCgFABIgHABQAAABAAAAQgCABgCABQgCABgBAAQgCACgCABIAAABQgBABgBACIgBAAIgCAEQgBABAAAAATDDTQgEgHAAgHQAAAAAAgBQAAgCABgDQAAgBAAgBIABAAQAAgBAAgBATDDUQAEAGAEADQABABABABQAEACAFABQACABACAAAzzjWQAAgDgCgCQgBgCgBgCQgCgCgCgBIAAgB");
	this.shape_37.setTransform(-6.6,-57.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAXA2IgEAAIAAAAIgEgBIgIgEQAKgLACgFQACgIgEgGIgDgEIgEgDIgEgBQgFgCgDACIAAgBIACgEIAAgBIACgDIAAAAIADgCIADgBIAEgCIABAAIAGgBQAGgBAGABQAMAEAHAIQAFAKgCALIAAADIgCAFQgEAIgIAFQgIAEgHAAIgBAAgAguAFIAAAAIAAAAgAglACIACgGIAAgCQgBgGgDgFIgDgDQgEgEgHgDIACgIIABgCIAAgIIAAgBIAAAAIAAgHIAEAAQANAAAIAIQAJAJAAANQAAAMgJAJQgFAEgHACIAAgCg");
	this.shape_38.setTransform(115.7,-39.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#C6FFFF").s().p("AgEFNIgCgDIAJAIQgDgCgEgDgAApCNIABABIgJAPQAEgMAEgEgAAqh6IAAgCIAAACgAhAjcIABABIgBgBIgBgCIABACIgDgDIgDgDIAEADIABABIACADIABADQAFAHAHAFIAIAGIASANIAOAJQgvgSgHgagAhGjiIgCgCIAAgIIAGAMIABAAIAAABIgBAAIgEgDIADADgACEkEIAAgBIABABIgBAAgAiEkrIAEgBIABAAIAAAAIABABIABAAQAEAGAJACIAVAUIAAABgAA8kuIABABIADAFIgCALIgDAGgAA/k2IgCABIAAgIIAGAJIgEgCgAhRk0IABgDIADADIgEAAgAhgk3IABABIgGAAgAhYk8IAAAAIAAACIAAgCgAhllIIAIAFIAEACIABAFgAhvlRIAUAAIgFAAQgIAAAAAGg");
	this.shape_39.setTransform(120.7,-26.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.rf(["#000000","#996600","#996600"],[0,0.376,1],140.1,88.2,0,140.1,88.2,0).s().p("AAPFUIgSo9IASI9IhjgcIgBgCQgDgHgJgFQgVgNgJgWIgDgFQgPgZgIgZIgEgNIAEANIgFAHIgCACQgEgCgBgGQABgHgCgHIAAgCIgBgIQgDgOgJgNIgDgFQgCgMgDgIIgPgmQgDgMgDgNQgIgvgKgrIgDgHQgCgGgBgHIgGgRIgBgGIgBgEQgFgJgBgOIAAgIQABgPgEgPQgJgpgdgjQgQgXgLgYIAEgCQAWgNAagDIAZgEIAIgBQAMgBANABIAEABIBgAAIACAAIAFAAIADAFIAAABIgGADIgEAHQgEADALAAIAFABQAZAEAZADQAMABANAAIANgBQARgBASgFIAsgKQALgBAIgGIAEgCQArgSAtgOIAFgCQApgTAxgEIAKgBIAlgGIAHAAQAGgCAFAAQAFAAAEgCIAEAAIBUADIgOJTImeBRgAm6DhIAAnYQAKAeAUAZIAIALIAPAVQgEgEAAAEQAAAEABADQASAnARApIAjBWIAiBaQAIAWAGAVIAbBXIADAEQAFARAAATg");
	this.shape_40.setTransform(140.1,88.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#009933").s().p("AivCLQgZgCgZgFIgFgBQgLAAADgDIAFgGIAFgEIABgBIABgBQAGgGAHgKQABgHgBgIQAGgfgNgdQgKgUgRgHIABgBIAAgKQABgIADgIIAIgUQAEgMgNgSIAQgGIANAAQAZgDAYAAIAKABQAIACAJAAIAFABIAIAFIAIADIAEACIAmATIAFACQAtANAwgBQAVAAAVgDIAFgBQAMgDANgBIAXgDIA3gHIAbgFQAIgCADgEQAEgEAEgGQAIgGAFgKIACgEIAGgUIAAgIIABgDIADADIADAlQADApgKApQgJAogDAFQgDAGAAAEIgDAAQgEACgFAAQgFAAgGADIgHAAIglAFIgKABQgxAEgpATIgFACQguAPgoARIgEACQgIAGgLABIgsALQgSAEgUABIgMABIgJAAIgQgBgAj1gNIAEgBQAVgCAWAAIABAAIAAAAIAIAAIAJABIgJgBIgIAAIAAAAIgBAAQgWAAgVACIgEABIgBAAIABAAgAD0iAgADxiDIABgIIACALg");
	this.shape_41.setTransform(153.4,49.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#996633").s().p("AArCcIAAgDIgBgDIgBgHIABgDIgBACIgBAAIAAAAIAAABIgBABIAEAMIgBgDIgDgJIgBgBQACgEAAgFQAAgFgCgFQACAFAAAFQAAAFgCAEIAAAAIgNgiIAEAEIgEgEQgcgEgSAZIgQAHIAAAAIgBglIABAlQgGgIACgLIABgDQgGgJAIgGIABgBIADgCIAHgDQAQgMAKgSIAAAAIAAgCIAAgBIAAgCIgBgCIAAgDIgDgPIgCgEQgCgDAAgDIgBgBIgBAAIgFgCQgHgEgIgBIgCgBIgWgJIgPgKIgRgLIgIgGQgHgFgFgHIgBgCIgCgEIAAgBIAAgBIgBAAIgGgMIAAgWIgTgMIAAgBIgVgUQgJgCgEgGIgBAAIgBAAIAAgBIgBAAIACgBIAAAAIAZgIIgZAIIAAAAIgCABIAAgBIgDAAIAGgCIAAAAQAMgFAMgBIAFgBIAAgBIAIgDIAAgCIAAAAIgBgEIgEgDIgIgFIgEgDQABgGAHAAIAGAAQANgDAPAAQAJgEAKABQAFAAAFAGQAZgDAUAQIAAAAIABABIABAAIADAAIABABQAIgBAFAIIAHAJQALAOAEARIAEAEIADgIIAAARIgog4Ig1gTIg5AAIA5AAIA1ATIAoA4IAAgRIADgGIACgLIgDgFIgBgBQgCgEADgCIACgCIAEACIAwBLIAAg0IAAAAIAAAAQgBgBgBgBQAAAAAAgBQAAAAAAAAQAAgBABABIABAAIAAADIAAAAIBiBhIAJAGIgxA7IhVBbgAAdBxIAJAcIAAgIIgBgFIgDgJIADADIABAHIAAgFIgBgBIgBgGIABAFIgDgDIgBgIIgFgBIAAAAIABADgAAuCGIAEgFIAAAAIgEAFgAglBjQAhgJADgaQgDAaghAJgABXhIIABAAIgBgBgAh+h4IAEAAIgDgDgAgjCMIgCgDIAQgHIgLALIgDgBgAgVCCIAAAAgAAZBtIAAAAgAgjAUQgLgEgJgFIAWAJIgCAAgAg3ALIAAAAgACoAAgABGhhIAAAAIAAgDIACACIABABQAHABAHAFQAKAKAKAIIARALQAIAEAAAHQAFAEgBAEIAHAEIACADIADAEQAGANAKAKIAEAJgAAWh4QADADABAEIABgBIAEAEIADACIABABIAFAFIAIAOQAJAOAEAQIAFAFIgEgNIAAAAQAIAAgEgHIAAgFIgBgFIACABIAAgIIgHgJQgBAAAAgBQAAAAAAgBQAAgBABAAQAAgBABAAIABgBIAIAHIAAA0gAh1gwIgHgPQgEgLgIgIIATAMIAAAWIAAAAgAiIhSgABGhhIAAAAgAAWh4IAAAAgAiTiMIAAAAIgBgBIgDgCIABAAIAEADg");
	this.shape_42.setTransform(125.2,-45.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFCC99").s().p("AhRN9IgEgBQgXgKgWgNIgHgDQgfgUgSgfIgBgGQgIgGAAgKQABgLAEgJIADgGQAEgJAKgDQAKgDAMAAQACACADAAQAQAAANAIIAVAQIAFAEIAFACIAcAJQAWAGAZACIAXACIAHABQAGACAHAAQAaADASgOQAJgHAHgKQACgDAAgDIAEgKIAAgOQgBgUgEgQIgDgEIgbhYQgGgVgIgVIgjhaIghhYQgQgpgSgnQgCgDAAgEQABgFAEAEIgQgUIgIgLQgUgagJgeIgCgHIgBgSIgBgFQAAgTAGgQIABgCIgCgEQACgFAEgEQAFgHAHgEQAUgLASgIQALgEAMgDQAZgFAcgDQAwgFAugKIAIgCIBcgLIgBAKIAAABQARAJAKAVQAMAcgFAgQABAIgCAHQgGAJgGAHIgBAAIgEgEIgEAAIgDAAIhfgBIgFAAQgMgBgNABIgHAAIgZAFQgbADgVANIgFACIgBgBIgGgOQgGgFAAgEIACgDIgCADQAAAEAGAFIAGAOIABABQAMAXAPAYQAeAiAIAqQAEAPAAAPIAAAIQAAAOAFAJIABAEIACAFIAFASQACAHACAGIADAHQAKAtAIAvQACANAEAMIAOAmQAEAIACAMIACAFQAJANADAOIACAIIAAACQABAHAAAHQABAGADACIACgCIAFgIQAJAaAPAZIADAEQAJAXAUANQAJAFAEAHIABABIACAEQAIAHgCALIAAAFQAAAOgMAGQgJAFgNABIgDABQgKADgMABIgFAAIgUACQgPABgPgDQgFgBgEABQgNADgPgBIgIAAQgfAJgdASQgSALgUAGQgCAAgCACIgGADQgLADgMAAIgMAAQgVAAgTgFgAp7NPIgDgHQgVgBgRgMIgFgDQgGgBgEgFQgJgLgFgMIgCgEQgEgHgBgJQAAgKAEgKQADgNAOgCQAKgBAIAEIACABQAJACAGAEIAFACQAaAJASASQA5AWA2gRQA2gRBJhVIAGgQIARgrQAJgYAKgXIAIgNIADgIQAGgUAJgUQAKgXAGgbIABgDQAJgUAFgWIAHgWQAHgVACgWIABgEQAFgLABgMIAAgFQADgZAGgZIAAgDQAEgSgDgUIABgEQAEgJgCgKIAAgBIAAgCIAAgDQAAgYAEgVQAAgGgBgHIADgFIAAgCQADgLACgMIAAgCQAHgCgCgKIADgFQAHgLAMgFQALgGALgDIAIgBIAFgCQAOgEAOgBQgOABgOAEIgFACIgIABQgLADgLAGQgMAFgHALIgDAFIgBgFQgFgPgCgWQgDgXAEgXIADgNQADgTAAgVQAAgHAGgTIARgwIAAgFIABgCIABgEIAAgDIABgDQABgDAAgFIAAgCIABgFIAAgDIABgCIADgNIAHgkIADgQIADgMIABgIIACgJQAEgTADgUQADgTAEgSIAJglIACgKIAFgSIAFgUIAIgVIAIgWIAIgRQADgHAFgDQAGgFAIgCIAFgBIAVgCIAKAAQANABAOAAIAFgBIAQgFIAQgIIA9ghIgUgvIg4AAQgngIgEglIARhaQAfAKAegKQgeAKgfgKIgQgPQgEgEAEgKQAFgLAUgJQAbgDAfgOQgfAOgbADIAlguIADAAIAEgCIADAEQAJAIAMABIABAAIAIgCQAHgCAFgFQAKgJgBgMQABgNgKgJQgIgIgMAAIgFAAIAAgMIAegbIADADIADADQAIAaAuASQAKAGAKAEIACAAIAXAJIAIAZIABADIAAACIAAACIAAABIAAACQgJASgRAMIgGADIgEACIAAABQgIAGAFAJIAAADQgDAKAGAJIAAAAIADADIADABIAKgLQATgZAdAEIAOAiIAAAAIAAAAIAEAKIABADQgBASgTASIgmAWQgDADgEABIgNAHIAfBoIAEgBIAWgDIAFgBIADAAIgDAAIA7gIIABAAIADABQEfAICSHoIgBAEIAAAHIgHAVIgBAEQgGAIgIAGQgDAGgFAEQgDADgHACIgcAFIg3AIIgWADQgNABgMADIgFABQgVACgVABQgzABgsgOIgGgCIgmgTIgDgCIgIgDQAdgGAFgUQAEgSgCgUIAAgCIgCgHQgDgJgEgIQhsiih1hVIgLgIIABACIgBgCQgegbgngIIgKgCQgZgCgUALQgSAKgNARQgKAOgKAQQgXAogOAtQgGAXgEAYIgGA1QgBAHgDAGQAAADgDADQABABAAAAQAAABAAABQAAAAAAABQAAAAgBABQABAEgCAPIgIAqQgbA6ACAqIAAADIAAAAIAAAAIABAAIADgBQANAAAKgEQAYgHAVgLIADgCQAKgEAMgCIAZgGQATgFA3gBIAxAAIAZABQANABAJADQAJADAJgBQANgBAGgIIADgDIAcgJQANATgEAMIgIAUQgEAIAAAHIhcALIgIACQguAKgwAFQgcADgZAFQgMADgLAEQgSAIgUALQgHAEgFAHQgEAEgCAFIACAEIgBACQgGAQAAATIABAFIABASIACAHQgXAjAAASQACASgFARIgBAFQgCAIgEAHIgdAlIgCAEIgCADQgGAHgHAFIgFAGQgEAMgFAIQgFAJgGAIQgDAMgJAKQAAAEgCACIgJASQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBABQgKATgIAUIgBADIgNAtIgaBaIAAAKIgBAFQgEAFACAKIgCAEQgDAGACAHQgBATABATQACATgJArQgJAqgwgDQgqAGhnABIgpAAQhVAAgCgEgAjiDfQgGgHgCgIQACAIAGAHgABSn2IgLgegACxoAIAJgPIAAgBQgFAEgEAMgAgDqhIABAAQAOATgRATQgOASAiAGQAngXgWgiQgggIgGgTQgIACALAUgAB1rtQAIAAAIgEQAIgFAEgIIACgGIABgDQABgKgFgKQgGgLgMgDQgHgCgGABIgGACIAAAAIgFACIgCACIgEADIAAAAIgCADIgBAAIgCAEIgBACIgBACIgBACIAAABIAAACIgBAEIAAABQAAAIAEAGIAAAAIABABIgBABQADAFAFAEIACABIAJAEIADABIABgBIADABgAhnDhIAAAAgADgBIIAAAAgABwAUIAAAAgAA/AQIAIAAQARgBAMACQAGABAGACIgxgEgADlrKIAAgBIABABIACAHIAAACIABAEIgEgNgADbroIgBgDIAEABIACAIIgFgGIAFAGIACAIIACAGIAAAIIgJgcgADgriIAAAAg");
	this.shape_43.setTransform(106.3,40.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AwTMSIgBgEIAAgBIAAgHQgCgJgDgJQgIgUgMgQQgMgQgPgPQgNgOgQgNQgSgOgWgFQgQgEgUgDIglAIIAAAAIgIABQALgNAPgKQAPgJARgHQAOgRAQgPQALgKAQgHIAegPIAigQQATgKASgLIAfgTQAQgJASgGQARgFARgIIAdgNQAZgMAWgMIAAADIAEAAIACAAIACABIAHADQAlAKAiAOIAEACQAVAEAWgDQAJgBAJgCIAHgCQAugHAsgTIAvgVQAMgGANgFIALgFIAJgEQATgHARgJIATgMQAOgJALgJIADgDIAEgEIAPgPQAHgGAKgFIADAHIgDgHIASAGQAMAJAKAMQAMAOAGARQAGASAEARQAEASABASQAGASgBATQgBARgGASQgFASgJAQQgFAKgIgBQgHAKgQAJQgVAMgQAMIgbAUQgLAJgMAHIgbAOIgXAUQgKAIgIAJIgeAXIgaATQgWAbgPAbIgDAFIgTgKIgBAAIgFgDQgQgKgUgEIghgMQgUAAgSgFQgSgEgRgCQgTgCgTgBQgSgBgSABQgUABgWAFIgMAGQAHgUAHgRQALgYASgTIAIgKQAMgOAPgKIAJgIIAighIADgEIAEgEQACgCABgCQABgDAEgCQgEACgBADQgBACgCACIgEAEIgDAEIgiAhIgJAIQgPAKgMAOIgIAKQgSATgLAYQgHARgHAUIgEAEQgIARgKARIgIAPQgKAAgIgCQgdACgZAFIgHABQgMAAgBgLgAtXGuIAAgGIAAAGgAS0CVQATgTgQgTIAAAAIgEgWQAIATAgAHQAWAjgnAXQgkgGAOgSgASzBZIAEAWQgMgUAIgCgAUeAcQgFgDgDgGIABgBIgBAAIAAAAQgEgHAAgHIAAgBIABgDIAAgCIABAAIAAgCIABgCQAFgCAGABIADACIAFADIADACQADAGgCAHQgBAGgLALIgCgCgATpgNIAAAAQgMAAgJgJIgDgDIADgCIABAAQAKgGAEgNQAGACAEAEIADAEQAEAFAAAGIAAABIgBAJIgBABIgIABgAtcjbQgGgBgDgFIgBgEIgBgLIAAgCIgBACQgBAFgDADIgDAEIgDAEQgCAEgGgBIgEgBQgDgBgDgDQgHgHABgJIgFAHIgEAEQgIAJgNgCIgDgBQgDgEAAgFQABgHACgIIgFAAQgFABABgEQAAgMAHgKIACgCIAIgEQgIgBAAgGIABgEQADgIAFgGIAFgDIABgBIgBAAIAAABIgBAAIgDABIgBAAIgCAAIgPAAIgCgBIgCgDQgCgDABgDIABgCIAAAAIABgCQAFAAAEgDQgGAAgCACIgBABIgCAAQgNAAgLgIIgDgEIgCgEIAAgIIAAgNIAKgBIAMgBQALgCAJgHQAEgDACgDQAEgIABgJQAAgMgCgMIgCgKQgEgSgLgPQgKgLgPACIgHABIgHACQgNAFgFANQgDAKgBAKIgCAEQgBAEABACIgEgBIgDAAQgLgCgFgLIgDgKIAAgJIgIgGIAAAAIAFgGIgFAGIAAAAIgFAEQgMAHgOgBIgKgBQgLgDgIgHIADgDQAGgGACgIQgCAIgGAGIgDADIgEADIgHAFQgGAFgIACIgGABIgHAAIgTgBIgDgBIgBgBIABgBIAGgGIAEgFIgEAFIgGAGIgBABIgHAJQgFAGgLAHIgCACIgCABIAAAAIAAAAIAEADIACAEIAAAAQgHAFgHgBIgHgBQgJgBgGgDIgCgCQgDgIAFgCQgKAEgNgBIgEgBIgGgDIgEgCQgFgFgCgHIAAgCQABgKAFgFIgPgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAIgEgEIgEgCQgGgCgBgEIgCgEIgCgEIgEgRIgDAAIAAAAQgDgJAEgIQADgHAFgEIgHgCQgBAAgBAAQAAAAgBgBQgBAAAAAAQgBgBAAAAIgBgCIAAgCIgGgGIgBgBQgHgGAAgKIgBgJQAAgJAEgHQAEgIAGgFIADAAIACAAIADABQAFACAFAFQgDgEgCgEIgCgFIAAgGIAAgEIABgDQAAgGADgGIACgCIABgDQAFgHAGgFQAHgFAIgCIABAAIACABIAIAGQAAgFgFgBIgBgBQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAIAAAAIgCgCQgHgJAAgLQAAgJAEgHIACgCIACgCQAEgIAKgCIACgBIAHAAIACAAIAJAAIAGABIAGABIADABIAAAAQACACAFgBIgCgCIgFgBIgBAAIAAgDIACgHIADgIIAGgMIAIgNQAIgJALgEIAMgDQAIgBAFAFIAHAGQAFAFABAGIACAIIAAADIAAABIAAgBIAEgVQABgGADgFIAIgKQAKgMAOgCIAKAAQAKACAEAKIACAGIABAAIAAgBQAEgLAJgIQAOgKASgBQAGAAAFAFIAEAGQACADAAAEIABAMQAEgBACgFIAHgHIAKgGQASgKAVACQAOABAIALQADADAAADIAAAJIgCAMIgBADIABgCIAAgBQAEgKAIgHQANgNASgIIAKgDQAKgCAIAFIADACQACAFgBAFIgEAJIgEAOIgCACIABAAIACgBIADgDIAIgFQAWgLAXACQALAAAAAKQAAAIgFAHIgKALQAKgHAMgEIAMgDIAOgBQAKABAIAFIAHAFQAFAIgHAHQgEAFgGAEIgHAEIgFADIgBABIABAAIAVgCIANAAQAKABAGAHQAIAJgFALQgGALgKAHIgHAEIgFADIABAAIAJABQAOAAAKALQADADAAAFQAAACgBADIgEAEQgDAEgFACIgEACQAPAAAKALIABADQAAAFgDAEIgEAGIgEADIgCAEQACADAEgBIAGABQAKADAFAJQADAGgEAFIgDADIgCACIgDACIADgBIAPABIAEABIACABQgBAHgGAFIgCgBIACABIAAAAIABAAIADAAQAFAAADAEIABAEQABAEgBADQgFAQgNAIIgEACIABAAIADgCIAHgBQAJAAADAJQAIAWgOAUQgJANgOAFIgBAAIACABIAGACQAIAEAEAIQAFAHgHAFQgIAGgKgCIAIADIAFADQADACABAFQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQgCAFgFACQgGADgHABIAGAIIACAEIABAFQAAAGgDACQgTAOgYgCIARAIQALAHAHAKIACAEQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAIgEAEIABABIAEADQADACgDADIgEADQgIAFgIgFIgDgDIABADIAAAAQACAFgDAFIgEAEQgJAHgIgHIgBgBIAAADQAAAGgGABIgFABIgJAAIgKAAQgMgCgJgGQAFAFADAHIACAHQAAALgKAEIgHACIgHABQgGABgFgEIAAAFQAAAKgKAAIgEgBIgFgBQgHgDgDgHIgBgCQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAgBAAQgDAIgHAHIgFAEQgDACgDAAIgCAAIgDgBgAsljwIADADIgBgGIgCgDIgBgBQgCADADAEgAsJkPIgFgGIAFAGgAr4rEIACAAIABgBIgDABgAxXlmIgFgBIgFgCQgLgHgIgKQADgJAIgFQAGgDAGABQAGAAAFAFQAJAJAAANQAAADgDADIgCADIgDAAIgDABIgDgBg");
	this.shape_44.setTransform(-14.9,-37.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#CC9966").s().p("AgIO7IgQgDIgFAAQgFAAgEgEIAAgBQADgHAGgCIgKAAQgHABgGgCIgCgBIgDgCIgCgCQgCgDABgEIAAgCIACgCQADgHAGgDIgBAAIgCAAIgFgBQgGABgFgDIgDgCIgEgCQgDgCgBgEQgBgGADgCQAGgEADgGIgCABIgKAAQgJABgJgCQgFgBgEgEQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIABgJIACgDIABgCIACgCIADgCQADgGAFgDIAKgHIADgBIARgJQARgJAUAAIAFgBQAFgCAGABIAJAAIAHgBIAOABIAFABIAHABIAHABIAFABQARAAAXgIIjVkIQgbgYgSgbQgQgjgEglQgEgnAIgmQAEgMAFgLIAIgTIAIgPQAKgRAJgSIADgEIAMgGQAXgEATgBQATgBASABQATAAASADQAQACARAEQATAEAUABIAhAMQATAEAQAKIAGACIAAAAIgBABQgJAOgGAKQgFAKgNAOIggAeQgSAQgRAHIgEABIgEACIgBAAIgDABIgBAAIgJADIAEAMIADACQBLApAzCPQAbBLAVBoQBQBdgwAVQgvAVgEAAIgDABIgFABQgRACgRADIgIABQgNACgMAFIgGABIgKAEIgPAFIgJAEQgEADgEABIgHAEQgJAFgJACIgFABQgHADgIABIgDABIgBABIgEAAIgDAAgAslOsQgTgFgKgQQgFgIgBgJQAAgIAFgHQAGgIAKABIACAAIACABIAKAEIAFADIgFgDIgKgEIAFgKQgCgCAAgDQAAgEADgBQAHgEAHADIACABIADABIAAAAIgCgDIAAgCQADgIAFgDQAEgDAGAAQAIgBAHAEQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIgCgCQgDgCAAgEIABgCQAEgGAGABIAEABIAEAAIACABIAIAEIABAAIAFAAIADAAIAKgBIADAAQAGgBAGgCIAFgBIADAAIANgEIAJgCIARgDIAFgCIAmgIIADgBQAFgBAEgCQAKgGAHgGIADgEIAGgHQAJgKAHgLIAJgQQAKgQACgSIABgGQACgIgBgIQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAIAAgCIABgIIAAgHIABgFIAAgMQABgUADgTIABgJIABgHIAEgkIAAgBIABgHIABgHQACgTAAgUIAAgnIgBgEQgBgIABgJIgBgCQgCgCABgEIAAgDQgCgGABgGIAAgCIgBgDIAAgUQAAgLgDgKIgBgFIAAgFIgBgFIAAgZIAAgFIABgCIABgTIABgDQACgEAAgEIAAgDIABgGIAAgDQAEgIACgJIABgDIAAgBQAAgDACgCIABgCIABgEIACgFIACgIQACgFABgFQACgKAGgIIACgDIAAgBIAAAAIABgCQACgCABgEIABgCIADgEIACgCIAKgRIAMgRIACgCIgBgFIAlgHQAUACAQAEQAWAGARAOQAQAMAOAPQAOAOANARQAMAQAHATQAEAJABAKIABAHIAAAAIgHAAQgHACgHAEIgHADIgDACIgCACIgCACIgBABQgEAEAAAGIgBAEIAAAGQgBAKACAJIAAAEIACATIADASIAAAEIACAVIAAAFIABAHIABAQQAAAQgCAPIAAAJIgFAnIAAADIgBAEIgCAKIgDAQIgDARIgBAHIgBAGIgDAJIgBADIgHASIgFAJIgJASIgKARIgEAFQgEAIgHAGIgMAOIgLAPIgBABIgCACIgFAJIAAABIgBAAIgBADIgBAEIgKAWIgDAJQgDAFgBAFIgCADIgBAEIgDAKIgDAJIAAAEIgBACIAAAjIABADQABADAAAEIgBAFIgBADIgCAJIgDAKIgBACIgLAPIgCACIgCACIgDADIgDAEQgIAIgJAFIgCABIgUAIIgFADIgEABIgFACIgPAEIgEAAIgaABIgEgBIgFAAIgFgBIgGgBIgDgBIgIgCIgCgBQgFgDgFAAIgGgBIgFgBIgCAAIgbAAQgKAAgKgCIgCAAQgDgCgFABIgFAAIgCAAIgfABIgEABIgDAAIgIADIgDABQgEABgDACIgJAEIgDgBIgCABIgDABIgBAAIgCABIgHACIgNADIgFABIgSABIgDAAQgIAAgGgCgAANgeIgFgBQgggOgkgKIgHgDIgDgBIgCgBIAAAAIgDAAIAAgDIABggIAAgoQgEgSgIgRQACgVgGgTQgGgTgNgOIgVgZIAXgCQARgCAPgEIAjgLQARgGAQgJQAQgJAMgQQAMgPAIgVIgBgFIACgPIgCAPIABAFQgIAVgMAPQgMAQgQAJQgQAJgRAGIgjALQgPAEgRACIgXACIgMABIgkgMQgQgFgQgJQgRgJgPgMQgPgLgOgOQgIgIgGgJIgEgGIgDgGIgSgeIASAeIADAGIAEAGIgEACQicB0lYhKIAAgBIACgKQB4iVAMgNQAOgNAKgPIAGgKIAHAEQAPgLARgEQASgLAVgBQARgJARgDQATgEATgCQATgCASAGQATABARAGQASAGATACQATACAQgLQAQgLANgOQAOgNAKgMIADgDIABgBIAGAAIADAAQAUAAANgIQAQgJAJgOQAKgQAGgNQgGANgKAQQgJAOgQAJQgNAIgUAAIgDAAIgGAAIgBAAIgDgBQgLgBgLgEQgEgBgCgFQgFgOAMgZIgGAAQgOgBAJgQIABAAIADgCQAUgHABgSQAHgSgIgSQgCgFgHgBQgEgFgHANQgPANgRAHQgEgRgNgEQgXABgOgKQgEgDgCgFQgEgNAQgPQAGgRAAgUQABgUgHgTIgHgOIgKgQIgBgBIgBgBIAAAAIgBgBIgBgFIAAgBIASgRIgSARIAAABIgDgEIgDgEIgBAAIAAAAIACgBIADgBQALgIAFgGIAHgIIAAABIADAAIATACIAIAAIAGgBQAHgDAHgEIAHgGIAEgDQAHAIAMACIAKACQAOAAAMgHIAFgEIAHAGIABAJIACAKQAFALALACIAEABIAEAAQgCgCACgDIABgFQABgKAEgKQAFgMANgGIAHgCIAGgBQAQgCAJAMQAMAOAEASIABAKQACAMAAAMQAAAJgFAIQgCAEgDACQgJAHgLACIgNACIgJAAIgCAAIAAAAIgKAAIAAAAIgHgBIgCAAIACAAIAHABIAAAAIAKAAIAAAAIACAAIAAAOIAAAHIABAFIADADQALAIANABIADAAIgBABIAAAAIgBACQgCADACADIACAEIACABIAPAAIACAAIACgBIACgBIABAAIgEAEQgGAGgDAHIAAAEQAAAHAHABIgIAEIgCACQgGAKgBALQAAAEAFAAIAFAAQgDAHAAAIQgBAFADADIADACQANACAJgKIADgDIAFgIQAAAKAHAGQACADAEACIAEABQAFAAADgEIACgDIAEgEQACgEABgEIABgDIAAADIABALIACAEQADAEAGACQACABADgBQADAAADgCIAFgDQAGgHAEgIQAAAAABAAQAAAAAAAAQABAAAAABQAAABAAAAIAAADQADAGAHADIAFACIAEAAQAKAAABgKIAAgEQAEADAGgBIAIgBIAEgCQALgEgBgLIgBgGQgDgHgFgGQAIAHAMABIAKABIAJgBIAFgBQAHAAgBgHIAAgCIABABQAJAHAJgHIAEgFQACgEgBgFIAAAAIAAgBIABABQAfAqAWAMIAhARQAQAIARAAQAUABAPgMIAhgbIAcgZIAZgZQAPgQATgKIAcgOIAegNIAkgNIAkgKQAUgGATgCQAQgCAPAAQATABARAEQAKACAJAFIAEgHQARgGATgKIAkgEQAQgJATACQATgDATAEQAQAGAPAMIAeAWIAQAiQAIARABAUQACASgDARQgKAPgKAOIAAAAIAAAAIAAABIABAAIAAABIAAACQAAAKgGAPQgFASgCASQgIARgCARQgHATAAATQgJATgGATIgKAiIgKAeQAJAEAKAKQAFASAIAUQACAGgCALQAHAMAEAPQAFATAHASQAGANgGANQgGANgMAOIgVAbQgGAIgJAEQgJADgFgHIABgKIgKAJQgQALgRADQgMACgMABQgKAAgCgKQgOASgUgDQgLgCgIgFQgGgEAAgIIgGAGQgNASgSgKQgRgKgFgVQgIgQgDgUIAAAAQAOgMAQgIQAOgJAQgCQgQACgOAJQgQAIgOAMIgBAAQgSAOgQgQQgQgPAFgVQACgSALgNQALgSAVABIAlAEQADABABAEQANgQAIgSIAQgkQAAgUAIgTQgCgTADgTQgCgTgGgQQABgYgHgMIAJgGIAagXQANgMALgNQANgQADgUQAFgLAAgJIAAgGIAGgXIgGAXIAAAGQAAAJgFALQgDAUgNAQQgLANgNAMIgaAXIgJAGIgWAMQgQAKgSAEQgTAHgTgCIggACQgbgHgOgQQAOAQAbAHQg0gGgIAWQABASgFATQADAUgHAQQgGATgLAQQgKAQgPALIgPAJIADAFQgFASABAUIAAAiIABAhQAAATADASQADATAFATQADARAIAQIgNAUIgPAPIgEADIgEAEQgLAJgOAJIgTALQgRAKgSAGIgJAFIgMAFQgMAEgMAGIgvAWQgsASgvAIIgHABQgIADgKABIgRABQgNAAgMgDgABWizQACARAHAOQABAVAHASIAJAVIgJgVQgHgSgBgVQgHgOgCgRIgBgIQAAgIADAAQgDAAAAAIIABAIgALnkHIAHgGIgHAGgAAql/QAEANAPAMQAOALARAIIAIAAQAMAAAMgCQgMACgMAAIgIAAQgRgIgOgLQgPgMgEgNIADgLIgDALIAAAAgAFSmLQgPAIgNAMQANgMAPgIIASgLIgSALgAngmDQASAAAPgHIABAAIABgBQAKgFAGgKIAIgNIgIANQgGAKgKAFIgBABIgBAAQgPAHgSAAIAAAAIgBAAIgNgBIgBAAIgKgBQgRgCgOgJIgCgBIgBAAIgBAAIAAAAIgDABIAAAAIAAAAIAAAAIAAAAIADgBIAAAAIABAAIABAAIACABQAOAJARACIAKABIABAAIANABIABAAIAAAAgAMzrIIAAAAIgBABIgBACQgLAPgOANQgGAEgDAFQADgFAGgEQAOgNALgPIABgCIABgBIAAAAIAAgBIAAABgAGfrYQgFgBAAgFIACgGIAHgPIAJgMIABgBIAAAAIABgBIAAAAIABgBIAAAAIABgBQASgRAZAAIAAAAIAAAAIANABQAEABABADQgBgDgEgBIgNgBIAAAAIAAAAQgZAAgSARIgBABIAAAAIgBABIAAAAIgBABIAAAAIgBABIgJAMIgHAPIgCAGQAAAFAFABgAJptPQAJAJAGAJQgGgJgJgJQgGgFgGgDQAGADAGAFgAlCtMIAAAAIACgBIAEgCQADgBABgCQAKgJACgNIABgGQAAgFgDgEIgDgDIgFgIIgEgEQgGgEgHgCIgGgBIgLAAQgKABgGAIIgFAFQgDAEgBAEQAAABAAABQgBAAAAABQAAAAgBABQAAAAAAAAIAFAKIAGAJQAIAKALAIIAEACIAFABIAGAAQABAAAAAAQABAAAAAAQAAAAABAAQAAAAABgBgAkdlkIAAAAgAjJtMg");
	this.shape_45.setTransform(-92.8,10.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35}]}).wait(165));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-179.4,-119.1,368.3,267.3);


(lib.content_scene3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhDB4QgPgOAAgyIAAgWIABgaQgBgDAAgEQAAgEADgEQADgtAAgWIgCgQIgBgRQAAgTAPAAQAHAAAEAEQATgFARgCQARgDAMAAQAmAAAXAKQAKAEAAALQAAAGgEAFQgEAFgHAAIgFgBQgagHgZAAQgMAAgOACQgPACgRAFIABAQQAAAWgDAmIBDgGIAlgEQAHAAAEAFQAFAEAAAIQAAAMgOABIgmAEIhGAGIgBAVIAAATQAAAiAFAGQAEAFAUAAIAcgBIAdAAIAJgBIAJgBQARAAAAAQQAAANgOADQgOADgvAAQgxAAgNgNg");
	this.shape.setTransform(188.6,338.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AhIB4QgGgHAAgGIAAguQAAgWADgoQADgsAAgVIACgqQABgIAEgDQAVgGAbAAQAaAAAZATQAeAWgBAfQABAoggAWQAXAJAMAMQAMAMAAAPQAAATgUARQgPANgQAGQggAOg4AAQgGAAgGgGgAgvA+IAAAgQAogBAYgKQAMgFAJgJQAKgIAAgEQAAgHgUgKQgPgGgNgEIgQgCIgGAAIgGAAIgSgBIgBAjgAgphcIAAAbIgDA9IAYABQAVgCAQgMQAPgOABgWQAAgPgRgMQgQgNgRAAIgYABg");
	this.shape_1.setTransform(168.9,338.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AguA5QgLgJAAgKQAAgGADgEQAEgDAGAAQAHAAAFAIQAEALASAAQANAAAOgHQAPgHAAgIQAAgLgJgDQgGgDgSAAQgQgBgMgEQgPgGgBgOQABgRASgOQASgPAUAAQAIAAANAEQAQAFAAAHQAAAEgEAEQgDAEgGAAIgMgCIgMgCQgMAAgIAGQgLAFAAAGQAAAEADACQAEACAHABIATABQAUACALAJQANAJAAASQAAAXgaAMQgUAJgXAAQgWAAgNgKg");
	this.shape_2.setTransform(110.1,-1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgqBDQgEgFAAgFIAAhbIgBgMQAAgHABgEQABgJAOgBQAHgCAPgBQAPAAAPALQASANAAASQAAAKgEAHQgDAGgHAFQAIAEAHAIQAIAJAAAKQAAALgNAKQgJAIgJADQgTAHgfAAQgFAAgEgDgAgXAvQAQgBAPgFQAQgFAAgEQgBgIgJgEQgIgFgGAAIgXgBgAgXguIABATIgBASIANABQAYgCAAgSQAAgGgIgFQgGgHgJAAIgOAAg");
	this.shape_3.setTransform(98.5,-1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgvBBQgDgDAAgFIAAgUIAAgUIAAhFQAAgFAEgFQAEgGAIABIAWABQAMACAHAEQAmATAAAcQAAAMgIAHQgIAIgQAGQAXANAMAOQADADAAAFQAAAFgDADQgEAEgFAAQgFAAgEgEQgbgZgegKIABAdQAAAFgDADQgEAEgFAAQgFAAgEgEgAgaACIAEAAQAVAAAJgDQAEgCAEgEQAEgEAAgCQAAgKgNgJQgKgIgNgCIgKAAg");
	this.shape_4.setTransform(87,-1.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgoBDQgJgJAAgcIABgiIACgjIgBgJIgBgJQABgNALAAQAFAAADACIATgEIAPgBQAXAAANAFQAIADAAAIQAAAFgDADQgDAEgGAAIgEAAQgOgEgOAAIgLABIgRADIAAAjIAggEIAVgBQAFAAAEADQAEADAAAGQAAAIgMACIgUABIgkAEIAAASQAAARACACQAAACAKAAIAPgBIARAAIAEgBIAGAAQAFAAAEADQADADAAAGQAAAKgKACQgJABgaAAQgcAAgJgHg");
	this.shape_5.setTransform(75.7,-1.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgSA+QgLgagNguIgHgXQgFgRAAgHQAAgEAEgEQAEgDAFAAQAIgBADAKIAEAPIAIAcIANArIATgzIAIgWQAFgMAGgHQAEgFAFABQAFgBAEAEQAEAEAAAEQAAAEgCAEQgFAHgEAJIgHASIgXA6QgEALgGALQgEAGgFABQgJAAgEgJg");
	this.shape_6.setTransform(63.8,-1.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgoBDQgJgJAAgcIABgiIACgjIAAgJIgCgJQAAgNANAAQAEAAADACIAUgEIAPgBQAVAAAOAFQAIADAAAIQAAAFgDADQgEAEgFAAIgDAAQgPgEgNAAIgNABIgQADIgBAjIAhgEIAVgBQAFAAAEADQAEADAAAGQAAAIgLACIgWABIgjAEIgBASQAAARACACQACACAJAAIAPgBIAQAAIAGgBIAEAAQAGAAADADQAFADAAAGQAAAKgLACQgIABgbAAQgcAAgJgHg");
	this.shape_7.setTransform(44.5,-1.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgmA1QgNgOAAgSQAAgcAagfQAWgaAVAAIAHAAIAFABQAEgDAFAAQAJAAADAKIABARQAAAFgDADQgDAFgGAAQgIAAgEgJQgCgEgBAAQgCgBgFAAQgLAAgNASQgUAWAAAVQAAAJAGAHQAHAHAJAAQAGAAAJgFIAOgIQAGgFAEAAQAFAAAEAEQADAEAAAEQAAAGgEADQgYAVgXAAQgUgBgOgOg");
	this.shape_8.setTransform(33.1,-1.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("Ag9BDQgDgDAAgFIAAgLIABgLIAAgPIABgQIgBgOIAAgRIgBgQIgBgQQABgFAEgEQAEgEAGAAQAHAAAHALQAmA5AnAiIAAgNIAAg5IgBgJIgBgKQAAgMAMAAQAPAAAAAsIAAAOIgBA2IgCAOQgBALgMAAQgFAAgJgHQghgfgpg1IAAAaIAAAVIAAAVQAAAagMAAQgGAAgFgEg");
	this.shape_9.setTransform(20.1,-1.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgnBDQgKgJAAgcIACgiIABgjIAAgJIgBgJQgBgNAMAAQAEAAAEACIATgEIAPgBQAXAAANAFQAIADAAAIQAAAFgDADQgEAEgFAAIgEAAQgOgEgOAAIgMABIgPADIgBAjIAggEIAVgBQAGAAADADQAEADAAAGQAAAIgLACIgVABIgkAEIgBASQAAARADACQABACAKAAIAOgBIAQAAIAFgBIAGAAQAEAAAFADQAEADgBAGQABAKgLACQgIABgaAAQgdAAgIgHg");
	this.shape_10.setTransform(7.4,-1.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AgHA/QgEgDAAgFIAAgEIABgEIgBgMIgBgMIgBgeIgDggIgFAAQgTAAgMgDQgJgCAAgJQAAgFADgEQADgEAGABIAOABIAOABIARAAIAOAAIAUABIAUABQAFAAAEADQADADAAAFQAAAFgDAEQgEADgFAAIgWgBIgVAAIACAjIACAiIABAJIAAAJQAAAGgCAGQgEAGgGAAQgEAAgDgDg");
	this.shape_11.setTransform(-4.6,-1.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AguA5QgLgJAAgKQAAgGADgEQAEgDAGAAQAHAAAFAIQAEALASAAQANAAAOgHQAPgHAAgIQAAgLgJgDQgHgDgRAAQgPgBgNgEQgQgGAAgOQABgRASgOQASgPAUAAQAIAAANAEQAQAFAAAHQAAAEgDAEQgEAEgFAAIgNgCIgMgCQgMAAgIAGQgLAFAAAGQAAAEAEACQADACAHABIATABQAUACAMAJQAMAJAAASQAAAXgaAMQgUAJgXAAQgWAAgNgKg");
	this.shape_12.setTransform(-17.1,-1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AgpA/QgDgDAAgFQAAgFAEgDQADgEAGAAIARgBIAAgoQAAgWABgWIgTABQgFAAgEgDQgDgEAAgFQAAgFADgDQAEgDAEgBIAagBQAPAAAbAEQAKACAAAKQAAAGgEADQgDADgFAAIgXgDIgBApIgBAoIAZAAQAFAAAEADQADAEAAAFQAAAEgDAEQgFADgEAAIgQABIgPAAIgQABIgSACQgFAAgEgEg");
	this.shape_13.setTransform(-28.3,-1.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AAZAyIgLgSIgMgOIgZAdIgQASQgEADgFAAQgFAAgEgDQgEgEAAgFQAAgDADgEIAQgRIAfggIgSgXIgKgNQgGgHgFgFQgGgEAAgFQAAgFAEgEQAEgDAFAAQAFAAAHAHIAKAKIALANIAOAUIAWgdQARgVAGAAQAFAAAEADQAEAEAAAFQAAAEgDADIgSAXIgWAbIATAZIATAZQAEADAAAFQAAAEgEAEQgEAEgFAAQgJAAgOgUg");
	this.shape_14.setTransform(-39.9,-1.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AgoBDQgJgJAAgcIABgiIACgjIgBgJIgBgJQABgNAMAAQAEAAADACIAUgEIAOgBQAXAAANAFQAIADAAAIQAAAFgDADQgDAEgGAAIgDAAQgPgEgOAAIgLABIgRADIgBAjIAhgEIAVgBQAFAAAEADQAEADAAAGQAAAIgMACIgVABIgjAEIAAASQAAARABACQABACAKAAIAPgBIARAAIAEgBIAFAAQAFAAAEADQAEADAAAGQABAKgLACQgJABgaAAQgcAAgJgHg");
	this.shape_15.setTransform(-51.6,-1.4);

	this.instance = new lib.Scene1();
	this.instance.setTransform(191.6,155.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.6,-16.6,439.6,378);


// stage content:



(lib.pred_Scene3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene3:0,scene3repeat:155});

	// timeline functions:
	this.frame_0 = function() {
		this.btn_menu.addEventListener("click", openMenu.bind(this));
		this.btn_goNext.addEventListener("click", openNext.bind(this));
		this.btn_goBack.addEventListener("click", openPrev.bind(this));
		
		function openMenu(){
		
		 window.open ("verb_menu.html","_self");
		}
		
		function openNext(){
		
		 window.open ("pred_Scene4.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("pred_Scene2.html","_self");
		}
	}
	this.frame_169 = function() {
		/* gotoAndPlay("scene3repeat");*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(169).call(this.frame_169).wait(1));

	// content
	this.instance = new lib.content_scene3();
	this.instance.setTransform(273.7,213,1,1,0,0,0,189.7,189);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(170));

	// Main
	this.btn_menu = new lib.skiptomenu();
	this.btn_menu.setTransform(514.1,20.3);
	new cjs.ButtonHelper(this.btn_menu, 0, 1, 2, false, new lib.skiptomenu(), 3);

	this.instance_1 = new lib.Copyright("synched",0);
	this.instance_1.setTransform(275,393.5);

	this.btn_goBack = new lib.goNext();
	this.btn_goBack.setTransform(57.6,352.3,1,1,0,0,180);
	new cjs.ButtonHelper(this.btn_goBack, 0, 1, 2, false, new lib.goNext(), 3);

	this.btn_goNext = new lib.goNext();
	this.btn_goNext.setTransform(494,352.3);
	new cjs.ButtonHelper(this.btn_goNext, 0, 1, 2, false, new lib.goNext(), 3);

	this.instance_2 = new lib.Bk("synched",0);
	this.instance_2.setTransform(275,190.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.btn_goNext},{t:this.btn_goBack},{t:this.instance_1},{t:this.btn_menu}]}).wait(170));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(284.2,201.8,537.1,401.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;