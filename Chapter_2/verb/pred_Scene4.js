(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	manifest: [
		{src:"sounds/beam3.mp3?1494964501754", id:"beam3"},
		{src:"sounds/High_Screaming_Gtr.mp3?1494964501754", id:"High_Screaming_Gtr"},
		{src:"sounds/iamthereforeiexist.mp3?1494964501754", id:"iamthereforeiexist"},
		{src:"sounds/needtoreview.mp3?1494964501754", id:"needtoreview"},
		{src:"sounds/organ_f_chord.mp3?1494964501754", id:"organ_f_chord"},
		{src:"sounds/pop_up.mp3?1494964501754", id:"pop_up"},
		{src:"sounds/powersynth.mp3?1494964501754", id:"powersynth"},
		{src:"sounds/predicateverbsdefinition.mp3?1494964501754", id:"predicateverbsdefinition"},
		{src:"sounds/right_answer.mp3?1494964501754", id:"right_answer"},
		{src:"sounds/salsa_groove.mp3?1494964501754", id:"salsa_groove"},
		{src:"sounds/trumpet_lick.mp3?1494964501754", id:"trumpet_lick"},
		{src:"sounds/wrong_answer.mp3?1494964501754", id:"wrong_answer"}
	]
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


(lib.tobeblondeblinkstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhVAuIgLgLIgBgjIA5gTIATAAIgIARIAXAiQgUAfgXAAQgRAAgTgRgAA3gTIgFgcIAIgPIAoALIgBAeIgJAIg");
	this.shape.setTransform(-1.1,3.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ah6gPIAEgSQALgLAMgGIAJgFIADgBQAZgKAbAKIhNAqIgKAuIA6AAIg4ATIABAmIACATQgVg9AMg+gAgwAxIAHgRIgTAAIAAgKIBBgTIAAgHIASAAIABgUIAUADQAfABAWgWIACgsIgbgFIgmAwIAAgTIAdgdIAAgJIAcgHQAKABAJAHIAPAiQADAfgCAiQAAALgFAFQgPAIgPAQIgDADIg0AAIgCgBIAwAAIgEgLIABgfIgpgJIgHANIghAJIACANQAEAngdAUgAg8Agg");
	this.shape_1.setTransform(0.8,-1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("AhfCCIgbghQgQguAIgqQgCgYAAgbIAAgDIAtgWQgLAHgLAKIgEASQgNA+AVA9IgBgTIAKALQAtAoAig2QAegVgGgmIgDgMIAjgJIAGAbIAgAGIAJgIIAFALIgwAAIACABIgCAAQgNAdgbAZQgGASgPAJIgHAKQgbANgkAAIgHAAgAhtAQIAKguIBMgqQgagKgZAJIATgJIArgHIAMgKIBHgSIAAAKIgcAdIAAATIAmgwIAbAFIgDArQgVAWgfAAIgUgDIgBATIgSAAIAAAKIhBARIAAAKgAB2hzQgJgHgKgBIAbgGQAGAXACAZg");
	this.shape_2.setTransform(-0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.5,-13,27.1,26.1);


(lib.tobe2wordsamstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgCAiQAAgBgBAAQAAAAAAgBQAAAAgBgBQAAgBAAAAIgBgVIgBgTQAAgHgCgDQgEACgEAEIgHAIIgDAEIgBAIIgBAKIABAFIAAAFIgBAEQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgGAAAAgPIAAgKIABgJIAAgJIgBgJQAAgOAGAAQAAAAABAAQABABAAAAQABAAAAAAQABABAAAAQABABAAAAQAAABABAAQAAABAAABQAAAAAAABIAAADIAAAEIAAAGQADgHAGgFQAGgFAEAAQAIAAACAJQAEgEAEgCQAEgCAGAAQAKAAAEAKIACARIAEAfQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQgEAAgBgFIgCgSIgCgQIgCgIQgCgFgDAAQgCAAgGADIgHAGIAAAKIACAOIABAQQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBABQAAAAAAAAQgBAAgBABQAAAAgBAAQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape.setTransform(2.1,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AASAeIgEgFIgKAFIgFABQgOAAgGgHQgGgIAAgPQAAgMAKgKQAKgKALAAQAFAAAHADQAIACAAAGIgBACIgBAIIgBAKIABAMIAEALIABACIABABQAAABAAABQgBAAAAABQAAAAAAABQgBAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAHQAAAKADAFQAEAFAGAAQAEAAAEgCIAGgEIgCgWIAAgFIABgHIgDgBIgDgBQgHAAgHAIg");
	this.shape_1.setTransform(-5.7,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.8,-10.3,21.6,20.7);


(lib.tobe2wordsstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEAFQgCgDAAgCQAAgCACgCQACgCACAAQACAAADACQACACAAACQAAACgCADQgDACgCAAQgCAAgCgCg");
	this.shape.setTransform(66.1,4.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgCAoQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIAAgHIAAgHIgBggIgNgBQgFgBAAgEQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABgBAAAAIAMABIAAgIIAAgHQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAEgBAAAKIABAEIAAAEIgBADIAJgBIAHABQAEABAAAFQAAAAAAABQAAAAAAABQgBAAAAABQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAIgCAAIgDAAIgIABIABAhIAAADIAAADQAAAMgGAAQAAAAAAAAQAAAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_1.setTransform(61.8,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgPAgQgJgDAAgGQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAQACAAADADIAGACIAGABIAHgBQAFgCABgEQgBgIgKgCIgFgCQgIgBgCgDQgGgBAAgHQAAgMAMgFIAKgEIAKgEIAGgBQAAAAABAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAIABAFIABAFQAAABAAAAQAAABAAABQgBAAAAAAQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgDAAgCgCIgBgGIgNAEQgIADAAAGIAEABQALACAGAEQAKAFAAALQAAAKgIAFQgHAEgJAAQgHAAgHgDg");
	this.shape_2.setTransform(55.9,1.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgEAqQgBgBAAAAQAAgBAAAAQgBAAAAgBQAAgBAAAAIAAgLIAAgKIAAgOIABgMQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBABAAQAAAAAAAAQABgBABAAQAAAAAAAAQAAAAAAAAQABAAAAABQABAAAAAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAIAAAMIgBAOIAAAKIABALQAAAAAAABQAAABgBAAQAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAAAABQAAAAAAAAQgBAAAAAAQgBgBgBAAQAAAAAAAAQgBgBAAAAgAgCgfQgCgCAAgDQAAgDACgCQACgCABAAQAAAAABAAQABAAAAABQABAAAAAAQABABAAAAQACACAAADQAAADgCACQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgBAAgCgCg");
	this.shape_3.setTransform(51.5,0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AASAfIgSgYIgLAMIgKAJQAAABgBAAQAAABgBAAQAAAAgBAAQAAABAAAAQgBAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAFgGIAGgEIAMgMIgIgLIgIgJQAAgBgBAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAQADgBAHAKIAIANIALgKQAHgHADgEQACgCADAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQABAEgGAFIgIAIIgLAKIATAXIACAFIgCADIgEACQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAg");
	this.shape_4.setTransform(46.2,1.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgTAZQgJgHAAgOQAAgNAIgKQAIgLAMAAQAJAAAGADQAIAEAAAIQAAAGgHAFIgMAEIgVALQADAFAFACQAFADAFAAIAJgCQAHgCACgDQACgDACAAIAEACQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAAHgLAEQgJAEgIAAQgLAAgJgGgAgLgOQgEAFgDAJIASgGQAJgFAEgEQgFgFgIAAQgGAAgFAGg");
	this.shape_5.setTransform(39.5,1.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgYArQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABgBQAAAAAAAAQABAAABgBQAAAAABAAIAMgBIABgLIAAgKIgBgJIACggIgIAAIgHAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgFAFgBIASAAQAKAAARACQAFABAAAGQAAAAAAABQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgJgBIgKgBIgBAfIAAAKIABAKIgBAKIATAAQAAAAABAAQABAAAAAAQABAAAAABQAAAAABABQAAAAAAABQABAAAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQgBAAAAAAIgKAAIgKAAIgKABIgLABQgBAAAAAAQgBAAgBAAQAAAAAAgBQgBAAAAAAg");
	this.shape_6.setTransform(29.2,0.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgGAMQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIADgJIAEgKQABgDACAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAIABAEIgIASQAAADgCAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBg");
	this.shape_7.setTransform(21,5.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgTAZQgJgHAAgOQAAgNAIgKQAIgLAMAAQAJAAAGADQAIAEAAAIQAAAGgHAFIgMAEIgVALQADAFAFACQAFADAFAAIAJgCQAHgCACgDQACgDACAAIAEACQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAAHgLAEQgJAEgIAAQgLAAgJgGgAgLgOQgEAFgDAJIASgGQAJgFAEgEQgFgFgIAAQgGAAgFAGg");
	this.shape_8.setTransform(15.9,1.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgWAbIAAgoIABgGIAAgFQAAgGAFAAQAGAAAAAJQAKgLANAAQAEAAADAEQACAEAAAHIAAAEQAAAHgFABQgGAAAAgHIAAgDIAAgGQgKACgDAEQgFAEgDAHIAAAfQAAAFgGAAQgGAAAAgFg");
	this.shape_9.setTransform(9.8,2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgQAYQgIgIAAgNQgBgMAHgKQAIgMANAAQAMAAAGALQAFAJAAALQgBAMgGAJQgIALgLAAQgJAAgHgIgAgJgKQgEAGAAAHQAAAIAFAFQAEAEAEAAQAFAAAEgFQAFgFABgIQAAgVgNAAQgGAAgFAJg");
	this.shape_10.setTransform(3.5,2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgIAyQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAgBIAAgBIABgRIAAgPIAAgPIgJABQgGAAAAgHQAAgFAKgBIAGAAIABgJQABgNAFgGQAFgHANAAQAIAAAAAFQAAAGgIAAQgOAAgCAUIAAADIANgBQAJAAAAAHQAAAEgEAAIgFABIgNABIgBALIAAALIABALQAAALgBAGQAAAFgEAAIgEgBg");
	this.shape_11.setTransform(-2.7,0.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgTAZQgJgHAAgOQAAgNAIgKQAIgLAMAAQAJAAAGADQAIAEAAAIQAAAGgHAFIgMAEIgVALQADAFAFACQAFADAFAAIAJgCQAHgCACgDQACgDACAAIAEACQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAAHgLAEQgJAEgIAAQgLAAgJgGgAgLgOQgEAFgDAJIASgGQAJgFAEgEQgFgFgIAAQgGAAgFAGg");
	this.shape_12.setTransform(-8.8,1.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgWAbIAAgoIABgGIAAgFQAAgGAFAAQAGAAAAAJQAKgLANAAQAEAAADAEQADAEAAAHIgBAEQAAAHgFABQgFAAgBgHIAAgDIAAgGQgJACgEAEQgFAEgDAHIAAAfQAAAFgGAAQgGAAAAgFg");
	this.shape_13.setTransform(-14.8,2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgTAZQgJgHAAgOQAAgNAIgKQAIgLAMAAQAJAAAGADQAIAEAAAIQAAAGgHAFIgMAEIgVALQADAFAFACQAFADAFAAIAJgCQAHgCACgDQACgDACAAIAEACQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAAHgLAEQgJAEgIAAQgLAAgJgGgAgLgOQgEAFgDAJIASgGQAJgFAEgEQgFgFgIAAQgGAAgFAGg");
	this.shape_14.setTransform(-21.1,1.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAPAsIgCgOIgBgOIAAgEIAAgFQAAgJgFAAQgHAAgFAFIgIANQAAAWgCAEQgBAEgEAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIABgCIAAgJIABgIIAAgpIAAgKIAAgGIgBgFQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQAFAAABAFIAAAKIAAANIAAANIAAAFQAFgGAFgDQAEgEAGAAQAJAAAEAHQADAEAAAJIABALIABAMIACAMIAAACQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgEAAgCgEg");
	this.shape_15.setTransform(-27.9,0.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgDAoQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIAAgHIAAgHIgBggIgNgBQgFgBAAgEQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABgBAAAAIANABIAAgIIgBgHQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQADgBABAKIAAAEIAAAEIAAADIAJgBIAIABQADABAAAFQAAAAAAABQAAAAAAABQgBAAAAABQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAIgEAAIgCAAIgJABIABAhIAAADIABADQAAAMgGAAQAAAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_16.setTransform(-34.2,1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgIAhQAAgEAFgIQADgHAEAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAACgEAFQgEAFgBACQAAAFgDAAQgFAAAAgFgAAAgXQAAAAAAgBQAAAAAAAAQgBgBAAgBQAAAAAAgBIAAgCIAAgCQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAGAAAAAKQAAABAAAAQAAABAAABQAAAAgBAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAgBQAAAAAAgBg");
	this.shape_17.setTransform(-42.9,2.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgYArQgBgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABgBQAAAAAAAAQABAAABgBQAAAAABAAIAMgBIABgLIAAgKIgBgJIACggIgIAAIgHAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgFAFgBIASAAQAKAAARACQAFABAAAGQAAAAAAABQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgJgBIgKgBIgBAfIAAAKIABAKIgBAKIATAAQAAAAABAAQABAAAAAAQABAAAAABQAAAAABABQAAAAAAABQABAAAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQgBAAAAAAIgKAAIgKAAIgKABIgLABQgBAAAAAAQgBAAgBAAQAAAAAAgBQgBAAAAAAg");
	this.shape_18.setTransform(-65.5,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.8,-10.3,140.6,20.7);


(lib.tobe2bubblestill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ALmi7QDuBOAABtQAABtjuBOQjtBPlPAAQlOAAjuhPQjthOAAhtQAAhtDthOQDuhOFOAAQFPAADtBOgAqVhZQAWANAAARQAAASgWAMQgVAMgfAAQgeAAgWgMQgWgMAAgSQAAgRAWgNQAWgMAeAAQAfAAAVAMgAuVAiQgLADgPAAQgPAAgKgDQgLgDAAgEQAAgEALgDQAKgDAPAAQAPAAALADQAKADAAAEQAAAEgKADgAt8gnQAPgGAUAAQAVAAAOAGQAPAGAAAIQAAAJgPAFQgOAGgVAAQgUAAgPgGQgPgFAAgJQAAgIAPgGg");
	this.shape.setTransform(-15.2,-17.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AmRC8QjuhPAAhtQAAhsDuhPQDthOFNAAQFQAADtBOQDtBPAABsQAABtjtBPQjtBOlQAAQlNAAjthOgAvIAjQgKgEAAgEQAAgDAKgEQALgDAPAAQAOAAALADQALAEAAADQAAAEgLAEQgLACgOAAQgPAAgLgCgAt8gKQgOgGAAgJQAAgIAOgGQAPgFAUAAQAVAAAOAFQAPAGABAIQgBAJgPAGQgOAFgVAAQgUAAgPgFgAr9gdQgWgMAAgSQAAgRAWgNQAWgLAeAAQAfAAAVALQAXANgBARQABASgXAMQgVAMgfAAQgeAAgWgMg");
	this.shape_1.setTransform(-15.2,-17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114.2,-45.1,198,55.2);


(lib.scene2bottomtitlestill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("ABfB1QgEgIgEgRIgGgbQgGgZgOhTIgfBcIgJAeQgGARgGAMQgHALgJAAQgJAAgFgKQgEgGgDgKIgEgSQgQg3gMg9IgFAcIgUBRQgCAOgGAdQgFAMgLAAQgHAAgFgGQgEgEAAgHQAAgaALgmIARg9IAJgxQAHgjAHgLQAHgJAJAAQAKAAAFAMQAGAOAIArQAHAzASA6QAVg6ARhBIAFgXQACgOAFgIQAGgMALAAQANAAAIAaQACAJADAcQAKBFAOAyIAHAaQAGAWAAAFQAAAHgFAEQgFAFgGAAQgJAAgGgJg");
	this.shape.setTransform(41.3,1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AA2BRQgEgOgHgkIgpAIIgnAJQgJAUgSAoQgFAIgJAAQgGAAgFgEQgFgFAAgGQAAgIAXgxQgCgFAAgFQAAgMAPgEQASggAbgrQAjg7AKAAQAMAAAEARIAKA1IAXBqIAJAZQAFAMAAAFQAAAGgFAFQgFAEgGAAQgPAAgKgkgAgTALIA3gLIgMg7g");
	this.shape_1.setTransform(15.1,1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgSAhQgEgEAAgGQAAgEAKgVIAMgbQADgIAHAAQAFABAEAEQAEAEAAAFQAAAEgWAwQgCAJgIAAQgFgBgEgEg");
	this.shape_2.setTransform(-9.5,14.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AhDB4QgPgOAAgyIAAgWIABgaQgBgDAAgEQAAgEADgEQADgtAAgWIgCgQIgBgRQAAgTAPAAQAHAAAEAEQATgFARgCQARgDAMAAQAmAAAXAKQAKAEAAALQAAAGgEAFQgEAFgHAAIgFgBQgagHgZAAQgMAAgOACQgPACgRAFIABAQQAAAWgDAmIBDgGIAlgEQAHAAAEAFQAFAEAAAIQAAAMgOABIgmAEIhGAGIgBAVIAAATQAAAiAFAGQAEAFAUAAIAcgBIAdAAIAJgBIAJgBQARAAAAAQQAAANgOADQgOADgvAAQgxAAgNgNg");
	this.shape_3.setTransform(-24.4,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AhIB4QgGgHAAgGIAAguQAAgWADgoQADgsAAgVIACgqQABgIAEgDQAVgGAbAAQAaAAAZATQAeAWAAAfQAAAoggAWQAYAJALAMQAMAMAAAPQAAATgVARQgOANgPAGQgiAOg2AAQgHAAgGgGgAgvA+IAAAgQApgBAXgKQALgFALgJQAJgIAAgEQAAgHgUgKQgPgGgNgEIgQgCIgGAAIgHAAIgSgBIAAAjgAgohcIgBAbIgDA9IAXABQAXgCAOgMQARgOgBgWQAAgPgQgMQgQgNgRAAIgXABg");
	this.shape_4.setTransform(-44.1,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.2,-24.3,114.4,48.6);


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


(lib.tobeblondeblink = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tobeblondeblinkstill();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiNBwQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAgBgBAAQgDgFgLAAQgDgEABgEIABgFQALgFAMgBQAJAAAJACIACgBQgPg1ALg2IAEgSQALgLALgGIAJgFIAEgBQAZgKAaAKIgDACQAGADACAIIACADIAAACIAAADIABACIACADQgCAOAEAOIABAHIACAAIACADIAAACIAAADQAGAIAAAJIAAAIQgQASgYAHIgDAFIgDAFQgTAJgOASIgGABIgEACIgBADIgCACIAAACQgOAFgNACIgKAAIgFAAgAhqgTIgFAXQgHAIAAALQABAfADAfQAVgPASgSQARgIAKgPQAKgJALAGIADgBQgNgagDggIgBgHIgEgFIgDgDIgBgCgAAmAmIgCgBIAsAAIAKAAIgBABgAB4AaQgpAAgngJQgJgCgEgIIAAgHIAAgEQADgFAHAAQgGgWABgXIABgFIADgCIAAgGIAcgdIAAgJIAcgGQAKABAJAHIAQAhQACAUAAAVQgCgJgDgHQgJgTgPgHIABgUIgbgFIgVAbQgGADgEAFIACABIACACQABAVAGATIABAFQAlAEAlAJIASACQAKACAEAIIgBAFIgBAEQgHADgIgDIgCADIgBABIgSABIgDAAg");
	this.shape.setTransform(0.6,-1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("AhhCCIgYgeQANgBAOgGIABgCIABgCIACgCIAEgCIAGgCQANgRATgKIADgFIAEgFQAYgHAQgSIAAgHQAAgKgHgGIAAgCIAAgDIgBgCIgCgDIgBgHQgEgNACgPIgCgCIgCgDIAAgCIAAgDIgBgCQgDgIgFgEIADgBQgbgKgZAJIATgJIAsgHIANgKIBGgSIAAAKIgdAdIAAAGIgCABIgBAFQgBAXAGAWQgHAAgDAGIAAAFIAAAHQAEAHAIABQAoAJAoAAIgCAEQgDAFgFADIgTgBIgLAAIgsAAIACABIgCAAQgNAdgbAZQgGASgPAJIgHAKQgaANgkAAIgIAAgAiCBLQgIgiAGggQgCgYAAgbIAAgDIAugWQgMAHgLAKIgEASQgLA2APA1IgBABQgJgCgJABgAhwALQgBgLAHgFIAFgZIA6ggIAAADIADACIAFAFIABAIQACAfANAbIgDABQgLgHgKAJQgKAQgRAIQgRARgWAQQgCgfgBgggAA8gYIgBgFQgFgUgCgUIgCgCIgCgBQAFgFAGgEIAUgaIAbAFIgBATQAQAHAIAUQAEAHABAIIABAGQABAMgBALQgmgJglgDgAB1hzQgJgHgKgBIAbgGQAFAXACAZg");
	this.shape_1.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.shape}]},14).to({state:[{t:this.shape_1},{t:this.shape}]},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.5,-13,27.1,26.1);


(lib.tobe2wordsam = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tobe2wordsamstill();
	this.instance.setTransform(-0.3,29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({alpha:0},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.1,19.2,21.6,20.7);


(lib.scene2bottomtitle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.scene2bottomtitlestill();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},14).to({alpha:1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.2,-24.3,114.4,48.6);


(lib.Scene2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_38 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(38).call(this.frame_38).wait(1));

	// eyes
	this.instance = new lib.tobeblondeblink();
	this.instance.setTransform(-57,-57.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39));

	// text
	this.instance_1 = new lib.tobe2wordsstill();
	this.instance_1.setTransform(72.1,-98.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.instance_2 = new lib.tobe2wordsam();
	this.instance_2.setTransform(20.9,-129.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},28).to({state:[{t:this.instance_1},{t:this.instance_2}]},10).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(28).to({_off:false},0).to({x:71.3,y:-100.1,alpha:1},10).wait(1));

	// bubble
	this.instance_3 = new lib.tobe2bubblestill();
	this.instance_3.setTransform(45.8,-97.4,0.075,0.075);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).to({scaleX:1,scaleY:1,x:70.1,y:-81.5},9).wait(11));

	// drawing
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ANTiAQADgNACgPQABgEAAgDQAAgDgBgCQAAgBgCgCQgKgJgFgOQgIgRgGgTQgEgPgEgPQgEgPgFgQQgEgLgCgLQgBgEgDgEQABgJgBgJQAAgFgBgEQACgXABgWQAAgOACgOQABgHABgIQAEgwAIgvQACgJADgKQAAgCAAgBQABgDABgCQABgDABgDQALgpALgrQABgGACgFQAAgBAAAAQAKgpANglQAIgYAMgVQALgVAVgNQADgCAEgDQAGgGAHgGQAKgJANgHQAEgEAGgEQAHgHAIgDQACgEADgCQACgBACgCQABgBAAAAQAQgOAUgNQAWgPAeABQAPABAPADQAgAGAXAcQAfAlAUAuQAUAtADAvQADAxgKAuQgEATgJATQgDAIAAAJQAAAFgCAFQgRAsgOAsQgGARgFASQgHAWgLAUQgTApgYApQgJARgQAMQgEADgDADQgMAMgMAJQgEACgEADQgBAAgBABQAAAAgBAAIAAABQgEACgFADQgFACgCAEQgBgBgCACQgUAGgUAJQgBABgBAAQgBABAAAAQgUAJgSAJQgKAGgGAHQgEAAgBADQgDAEgBADASErEQAAgHAAgHQgBgGgBgFQAAgFgBgGIAAAAQAAgCgBgCQAAgBAAgCQgGgVgHgVQgBgDgBgDQgMgUgRgSQgNgKgSgEQgFgBgGAAQgBAAgBAAQgCgBgDAAQAAAAgBAAQgHAAgIABQgJgBgJAEQgFADgFAEQgEAEgEAEQgDAFgDAEQgBABgBABIgEAFQgBABgBABQAAABgBAAQgCADgBACIgEAEQgFAGgGAHQgMAPgNASQgPAVgTASQgJAJgHAJQgCADgCAEQgDAEgDAEQgDAGgDAGQgBACgBABQgEAKgDAKQgHAUgEAWQgBAOgFAMQgBACgBACQgCAMgCAMQgBADgBAEQgBACAAACQAAABgBABQgBAGgCAFQgBADAAAEQgBAMgDAJQgBADAAAEQgBACAAADQgBALgCALQgEAaAAAbQABAnABAmQAAAEAAAEQACAMAEAKQAFALAHAKQAHAJAJAHQAJAKAQACQACAAADAAQAXABAYABQAMAAAKgFQAKgEAIgHQAKgKAIgMQAFgGACgEQACgDAAgDQgTAVgegEQgEAAgEgBQgXgFgVgLQgDgCgDAAQgGgBgEgGQgGgHgEgIQgBgDgBgCQgLgUgDgXQgDgRgCgSQgBgLAAgLQACgxAKguQABgDABgCQABgEABgDQANglAPglQAKgXAOgVQAMgYANgYQATgfASgfQAIgNAKgLQAJgLAMgIAQQs9QgFAEgFAEQADgFAEgEQACABABAAgAPyk6QADgDADgEQASgYAMgcQACgEACgEQAXgsAWgsQAVgpALgsQAGgXAEgYQAEgbAEgbQgBgIABgIQABgZgBgZQAAgLgCgKQAAgDgBgCQgCgIgEgIQgPgfgZgUQgIgGgJgEQgNgGgPgBQgFgBgEADQAAAAgCAAQAJgFAJgEAOUiQQAHgEAKgCIABAAQAEgBACgBQAIgCAIgBQAbgCAZAEQAFABAFAAQAaABASASQAFAHAAAKQAAADAAACQABAUgPAKQgJAGgKAFQAAAAAAAAQgFACgGACQgFABgFABQgDABgFgBQgXAHgagBQgDAAAAgBQgCgDgFAAQgGABgHgBQgCAAgDAAQgGAAgFgBQgIARgEABQgDABgCADQgCACgCABQgZAPgOAWQgBABgBAAQgDADgCAFQAAABgBABQAAABgBABIAAAAQAAAAAAABQAAABgBAAQgBADAAAEQgCAFAAAGQABADACABQADABADABIABAAQAFABAFABQACAAABAAIAAAAQACAAACAAQADAAACAAQABAAABAAQABAAABAAQABAAAAAAQAOgBAPgFQABAAABgBQACAAABAAQAcgKAcgKQANgEAOgDQADAAADABQAGgCAGgCQAEgBADgBQALgBAKgBQABgBAAAAQAIgCADgEQABAAAAAAIAAAAQABgBABgBQABgCABgBQAAgDABgCQACgEABgEQAAgFAGgCQgCAMgJAKQAAAAgBABQAAABgBABIAAABQAAAEADADQAEACADADQAKAHgBAKQAAAIgBAHQAAABAAABIAAAAQgBAHgCAGQgBAFgBAFQgBACgBABQgMASgVAEQgDAAgBgBQgQAGgRACQgDABgDAAQAJAFAJACQAHACAIADQARAHAPAJQAQAIAYAHQADABACABQANAFAPADQACABADAAQAcAEAbAGQACABACABQAGAGgFAIQgMAUgaACQgdACgcgEQgcgFgbgHQgGgCgGgCQgYgLgVgKQgEgCgCgBQgLgKgNgBQgNgBgJAEQgEAFgFADAP/hCQAYAEALACQAKABACALQACAIgBAHANvBOQABACACABQADACAGAAQAEABADAAQARABAQgBQAAAAABAAIAAAAQAFgBAFAAQABgBACAAQABAAACgBQAYgEAWgGQAXgGAVgIQAKgEAGgIQABgBABgCQADgCABgEQABgEgBgFQAAgBgBgBQgDgFgFgDAOUiQQgBgBgBAAQgCAAgCAAQgMgCgJACQgEABgEABQAAABgBAAIAAAAQgDABgCACIAAAAQgDADgDADQgDAEgBAGQAAABAAAAQAAACAAACQAIAXASAQQAGAFAFAFQABABAEAAQAEADAGACIAAAAAOUiQQAGABAEACAMhhTQAGgGAGgGQAEgEADgDQAPgOANgKQACgBABgBQAAAAAAAAIAAAAQAAABAAAAQABABAAAAQAAABAAAAQACAFACAFQAAAAAAABQANAqgNAsQgDAJgDAIQAAACgBABIAAAAQgDAEgDADQgBABgCAAQgCABgCAAQgDABgCABQgHAEgIABQgIACgIAAQgMABgNgBAF2F6QAMAAAHgHQAIgDALgFQAbgWAdgOQADgBACgCQACgCACgBQABgBACgBQAFgEAGgDQALgGANgEQAMgIARgJQADgBADgDQAGgEAFgEQAEgCACgCQAIgGAIgEQAEgCADgDQACgCACgBQAGgDAFgGQAVgYAUgaQACgDACgFQAJgGAEgKQAQgSANgVQADgDACgDQAFgIAAgKQABgQACgQQgBgcgHgZQgEgPAAgNQAAgTAKgOQAEgFADgDQACgCACgBQAYgTAcgMQACgBADgBQAXgGATgEANvBOIAAAAQAAAAgBAAQgBgCgBgCQAAAAAAgBQAAAAAAgBQAAgBgBgBIAAAAQAAgBAAgBQAAgBAAgBQAAgEAjgcANvBOQgHASAAAEQAAACAAACQAAADgBADQgEAbgIAaQAAAAAAAAIAAABQgGASgHASQgHARgIAQQgKAWgPARQgBACgCABQgOAUgXAIQgFACgFgBQgLgCgBgMQAAgDAAgCQAAgSAFgSQAMgrAEgvQACgDABgEQADgOAEgOQAHgbAHgaQAAgBABgCIAAAAQABgDAAgDQADgJABgLQABgJAFgDAOpCTQABgCACgCQAEgJADgHAOpCTIgBAAQgDACgDgCQgHAFAFADQgCABgDABQgYALgcgCALdEdQgcARgUAZQgCADgCADQgRAbgaAWQglAegmAeQgUAQgPAVQgCADgCADQgQAYgVATQgCAEgEACQgLATgRAMQgnAcguAJQgTAEgVgCQgDAAgEgBQgYgCgTgLQgDgDgFgBQgGgBgEgHQgkgfgUgqQgFgJgEgIQgTgjgOgkQgFgLgFgLQgTgsgLguQgCgGACgBQABgCAEACAnlu8QAFgLAGgIQAIgLALgKQAIgHAIgHQATgQAUgMQAMgHAKgJQAmghAtgMQAEAAADgCQAJgFAJgCQARgFAPgEQAGgBAFgBQAJgCAIgBQAUgCAUgCQADAAACABQAFACgCAKArDpNQAAgBABgDQABgBAAgCQAEgUAAgWQAAgDgBgCQgBgNgIgLQgEgGgHgGQgMgJgNgJQgEgCgDgFQgGgHgHgFQgDgBgCgCQgBgCgCgCQgMgKgHgNQgGgLgFgLQgBgDgBgCQgFgXAGgWQAAgBAAgCQAAgOAMgKQADgDAEgDQAJgIAJgGQAEgEAGgDQADgCADgCQAggSAjgKQADgDADgCQALgHAMgCQALgCANgDQAEgDAHgBQAEgBADgBQAMgDANgCQALgCAMgCQAEAAADgBQAMgFANgCQAWgDATgEAniu3QASAFgEAXQgBAKgLADIAAAAQgCABgDAAQAAABgBAAQgDABgEACQgYAJgaAKQgWAIgWAHQgtAPgrAMQgEADgEABQgIAEgEAIAnsuEQAEgCADAAQABABACAAQADABADABQAIACAIACQAAABABAAQABAAAAAAQADABADABQACABACABQABAAABABIAAAAQADAAACABQACABACABQAJADAIAGQAJAFgHAIQgOASgXADQgBAAAAAAQgDABgDAAQgBAAgCAAQgCABgCAAQgEABgEAAQgGABgHgBQgLAEgKAEQgKADgJADQgpAOgsANQgcAJgbAJAnHtGQgCACAKADQACABADABQAHAFAHAHQABABgBACQgCACgCACQgIAJgMAIQgEADgGABQgIAJgMACQgDABgCABQgCABgCABIAAAAQgGADgIACQgrANgsANQgQAFgOAFQgJADgGAEQgEACgBADAnqsFQAFAHAFAIQAEAIgCAJQgBAEgEAGQgCACgCABQgHAIgLAFQgCACgDABQgEAGgIABQgFACgEACQgBADgCgBQgCADgCACQgCABgCABQgVAJgWAFQgTAEgOAHQgBABgCACQgBAAgCABQgCACgDABQgCACgCADAp6gkQgBAAgCAAQgMAAgKAEQgIACgIABQgIABgJABQgBAAgCAAQgMACgKAEQgOAEgQACQgxgDgxAAQgYgBgXgDQgDAAgCAAQgdgFgdgBQgHAAgIABQgMABgNgBQgTgBgVABQgCAAgDAAQgQgCgTAAQgaABgagBQgDAAgCgBQgOgBgOgBQgIAAgJgBQgMgBgLgDQgEAAgGgDQgDgBgEgBQgIgCgHgEQgGgDgEgFQgGgIgBgJQgCgKAEgKQAIgWALgVQANgXAQgYQANgUATgPQASgQAUgLQAngWAmgcQAEgCADgCQAQgLAPgPQADgDADgDQAmggAmgbQAHgEAGgGQAHgDAGgFQAQgNAPgPQAEgFAEgEQAEgDADgDQACgCACgBQAFgDAEgGQARgVAUgRQAFgDAEgFQAGgHAIgEQANgHAMgIQAZgPASgXQACgDABgDQABgFADACApdn8QgHgCgCAGQgBACgCACQgBABgBABQgTATgVARQgLAGgHALQgGAFgFAGQgFACgDAFQgRAQgSAQQgPARgPARQgCADgEADQgnAegnAdQgKAHgLAIQgUAOgVAOQgUANgUAIQgHADgGADQgGADgDADQgCACgCACQgCACgCABQgNAFgIAHQgFAFgEADQgBACgCADQgBADgCACQgGgFABAKQAAACgBADQAAADAAACQABABAAAAQACAEAGAAQADABACAAQASACAPgGQAHgCAFgDQADgCADAAQAVgHAXgGQAKgDAKgCQADgBACgBQALgFAMgBQAEAAADgCQAUgGAXgCQACAAADgBQAbgBAZgFQAagEAbgDQAHAAAGgCQADgBAEAAQAbAAAcgBQACAAADAAQAGgBAGABQAPADASgBQgCAVgFAVQgFAZgJAWQgDAHgBAIQAAAFgCAFQgIAZgJAZQgDAIgEAHQgCAEgDAFQAAAAgBABQAAABAAABQgUAigLAlQgOAsgEAxQgDArABAtQgBAEgBAFQgCAKABAKQABAKAAAKQADAvASArQANAgALAeQABACABABQACACABABQgBgDgCgDQgWgvABg3QAAg2AYgwQAFgKAFgKQABgDABgCQACABAAABQAAAFgCAFQgCAHgCAIQgLAqAAArQAAAPABAPQABAoAJAlQABADABADQABADABADIAAAAQAHAVAHAUQAEAHADAHQAUAnAYAjQAEACgGgFQgBgCgBgDQgJgYgFgaQgCgKABgKQABgoALglQAAAoAAAoQAAAgAJAeQACAHACAGQAKAoAfAZQAEAEAFACQAKAHAMAEQATAHATAHQACABACABQAEADAJACQAEABADABQgHgLgDgOQgBgFAAgFQgBgRgBgQQgCgyAHgvQAEgYAFgYQADgHAAgHQAIgxAQgsQAPgsAMgsQACgDABgEQACgDACgDQAEgKADgKQABgCABgCQAHgVAJgWQADgJADgIQAAgBAAgBQAAAAAAAAIAAgBIABgDQAEgKABgMAknrRQAAgGAAgGQgCgiAIgfQAGgYANgTQASgYAWgXQAIgIAIgGQAGgFAFgHQABgBABAAQAAgBABgBQALgMAMgLQAJgIAKgIQAGgFAGgEQASgMASgOQAMgJgCgNQgBgEgDgEQgGgJgHgHQgEgDgEgDAk6BqQAFgRADgTQAAgFABgGIAAAAQABgEAAgDQABgOACgPQAAgJABgJQAAgFABgGQADgNgBgOQAAgFABgFQAAgDABgDQACgLgBgNQAAgIABgHQAHgwAIgvQABgEABgDQAFgNACgNQACgLABgLQABgOABgOQADgvABgwQAAgvACgvQgCgJABgJQgFgYABgYQAAgYgEgXQgFgagDgbQgDgfgJgdQgBgGgDgFQgGgLAAgNAppqNQABANAMAJQACAEACAEQAIALAAAOQABAYgDAXQgBANgBAMQAAAJACAHQAAADABADQACADABACApdnrQgCAHAEAHQADAFABAHQASAsAEAwQAEAvgBAwQAAAbgDAaAisxUQABAHAIgDQACAAABgBQABgBABAAQAAAAAAAAIABgBQAXgQAagKQATgMAYgBQAXgBAUAEQAWAGAVAEQAEABADACQALAFALAFQAcAMAZASQAVAOATAPQAIAGAHAHQAGAGAEAJQALAXAEAYQADAPADAPQABADAAACQADAMACANQgDASgCARQABAKgBAKIAAABQAAADAAAEQAAACgCADACbtwQgFgHgGgFQgCgDgIgIQgFgFgGgGAEIhgQAGgMgBgDQgBgCgBgCQgCgDgCgFQgEgQgGgJQgFgKgDgKQgDgJgFgMQgBgCAAgCQgIgKgCgMQgCgEgBgEQgHgKgFgKQgFgLgCgMQgBgCgBgCQgCgGADgKQgBgLABgLQAAgEABgDQAHgaAHgZQADgNACgOQAEgiAAgkQgBgxAAgxQAAgDgBgEQgEgNABgPQABgKgBgKQgCgWAAgWQgDgLgCgKQgDgJgBgLQAAgCgBgCQgDgHgBgGQgBgMgEgLQgCgJgFgLQgBgCgCgCQgDgGgBgHQAAgCAAgBQgBgKgBgLQAAgDAAgDQAAgEgBgEQgBgPgCgPQAAgGgBgFIAAgBQAAgBAAgBQgBgDAAgDQgBgCABgCQADgFAEAEACltiQgBAAAAAAQgDgCgCgDQgCgFgCgEQAFAHAFAHQADAEAAAEIgCgFQgBgBAAgCgAAUsiQgJgGAKABQABAAABAAQAUALAZgBQAaAAAYADQAHABAGgCQACAAABAAQAJgDAKABQAEAKACAJQAAAFgBADQAAAAAAABQgBADgDABQgCACgCACQgHAHgGAIQgIALgKAKQAAABAAAAQAAABAAACQABADAFAFQACACgBAEQAPAUANAVQALAVAGAYQADANAAAPQAAADABAEQABANgBAMQAAAJgBAJQgDAWgIAUQgEAIgEAJQgCADgCADQgHAKgJAJQgIAIgHAIQgBABgBACQgHAFgGALQgSARgPAQQgFACgGAGQgNAKgLAIQgBACgCAAQgCABgCABQgUAMgWACQgNABgMACQgMABgLAFQgHgBABAIQABAIABAHQABAKAIAIQADAEADADQAKALAMACAhywRQABAAAAAAQACABAEAAQAvgBAvAAQAHACAGAAQAbABAdAAQAMAAALAEQADABAGAJQAFAKAHARQAIAQACARQACALABgJIABAEAhNugQgHgIgNgBQgKgBgIAEQgVAJgQAMQgNAIgJAMQgDAEgBAGAAfvGQADgOAOgEQADAAACgBQAPgCAKAIQACADABACABxvCQAHBDACADQABADABADQAAALABAMQAAAEAAAEQAAABAAABQABAMABAKQABAGABAHQACAKACAKAB3rVQgBABAAABQgCABgCACQgJAHgGAFQgDACgDACQgCACgDABAgMpLQgFgCgFgCQABAAABAAQAFgBADAFQADAAAEABQAPACAQAEQAGACAGACQAXAIAWAFQgTgCgKAPQgBACgBACQgCADgCAHQgCAUAIAPAA6nwQgCAAgCAAQAAAAgBAAQgGgBgGgDQgpgXgXgqQgGgLAJAAAgqkNQAEAAADgCQAEgDAFgBQAGgCAGgBQAMgBAKgEQAZgGAcACQAHAAAGgDQACgBACAAQARAAAQACQAvAGAmAdQAEAEACAEQABADACACQAAABAAAAQAOAWABAbQABAYgBAYQAAACgBADQgCAIgCAIQAAABgBABIABAAQAFAAAGAAQABABABAAQAKABAHAGQAKAHAJAJQACAAACABQAAAAABABQAlAhAKAwQAAAKACAHQAAAHgBAGQAAADgBACQgKAlgUAdQgEAHgHAJQgEAGgFAFQgGAHgIAHQgCACgEACQgDACgDABQgCACgEADQgCADgDABQgUAMgVAJQgYALgYAGQgDABgDABQgWAGgYAAQgDAAgEAAQgSABgRgBQgMgCgLACQgDABgEABQgPABgNACQgEAAgEAAQgLABgLAAQgPgBgNAEQgEAAgDAAQgvAAgugBQgEAAgDgDQgXgDgWgGQgDgBgCgBQgKgGgNgDQgCAAgDgBQgSgHgTgHQgKgDgKgCQgKgCgFgEAkgg0QAWgIAUgNQAFgFAHgCQATgLAVgEQAlgLAoAHQAYAEAXAIQAWAHATAJQAPAHARgDQANABAMgBQAEAAAEgBQAggJAcgPQAEgBADAAQADgBACAAQApgbAxAAQAIAAAIABQgBAGgCAGACNDPQgIABACAMQABAGgBAGQgGAegHAeQAAADgBACQgBAEgCADQgCANgFANQgJAUgPAVQgOAOgGASQgFAEgDAGQgUAfgUAfQgIANgJALQgCADgBAEQgCADgDADQgJAMgJALQgSAWgTAVQgEAEgDAFQgJAMgFAQQgJAbgGAcQgGAcgBAdQgBAQABARQAAAAABAAQAAACAAAAQACADABACAERBzQgEAAgBACQgBACADAEQADAEACAGQAHAWAIAWQAKAbALAYQAMATAJAUQAIASAHASQALAZAJAaQABAGACAFQACAHACAGQABADAAAEQABACAAADQACAEADACAkYAZQAbAAAaADQAEABAFABQAAAAABAAQACABADABQAFACAAgEAjjBZQgBAAgCAAQgDABgEABQghAIgjAGQgBAAgCAAIAAAAQgCABgDAAQgBAAAAAAAjjBZQADgCAEAAQABAAABAAQACABgGAAQgCABgDAAgAkfA+QgEgBgEgBQgBAAgBAAQALgFAOABQAJAAAIgBQAQgBAPgCAkgg0QgEAEgBAAQAAgBAAAAQgBAAAEgCQABAAABgBgAklBIQAAAAAGAAQAgAAAhABAlBBuQgDgBACgBQABAAAAAAQADgBAEgBQgBACgBACQgBAGgEAGQAAgGAAgGgAlBBsQAAABAAABQACAAADAAAsNRuQALgfAFghQADgTADgTQAJgvAIgwQAIgvAMgwQAGgYAMgVQAKgRAKgRQAEgHAEgHQAVggAZgeQACgHABgFQABgBAAgBQAAAAAAAAQABgDABgCQAHgPADgQQAKgqgDgtQAAgKgCgKQgCgTgCgUQgDgCABgEQAAgBAAgCQABAFABAEApeK5IAAAAQADAEACAEQABACgCAEApsKjQgCAEAFADQAIAFADAKQgDAFAGAIQABABAAAAQADAEAAAEQAYAgAnAQQAJAFAJAGQAsASAqAQQAXAJAYAEQAvAIAwgBQAJAAAJgBQAFAAAFgBQAegDAbgIQAWgGASgLQAMgHAIgJQADAAACgBQAMgHANgNAmkKPQACADACACQADAEADADAsNRuQgDAHgDAGAhhMJQALAQAHATQAFANAGANQAEALAEALQAQAuALAuQAEAYgBAXQACAIgBAIQAEAdADAcQABAFABAFQAEAUABAUQAAAGABAGQAAADAAADQAAAEACADAhwL8QABAAABgBIAAAAQAAAAAAgBQAAgBAAgBAsNRuIL+AAIABAA");
	this.shape.setTransform(-53.6,25.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","#6699FF"],[0.157,1],0.9,1.3,0,0.9,1.3,32.3).s().p("AgpELIgIgBQgXgFgVgMIgGgCQgGgBgEgFQgGgIgEgIIgCgFQgLgUgDgWIgFgjQgBgLAAgMQACgwAKgvIACgFIACgHQANgjAPgkQAKgXAOgWIAZgwIAlg9QAIgOAIgLQAKgLALgIIAKgHIACgBQAEgCAFAAQAPACANAFQAJAFAIAGQAZAUAPAeIAGAQIABAFQACAKAAAMQABAZgBAZIAAAPIgIA3QgEAYgGAVQgLArgVAqIgtBYIgEAIQgMAcgSAYIgGAGQgOASgZAAIgIAAg");
	this.shape_1.setTransform(46.8,-30.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC9966").s().p("AjwJkQgLgCgBgMIAAgFQAAgSAFgSQAMgrAEgvQADgDAAgEIAHgdIAOg0IABgDIAAAAIACgGQADgJABgLQAAgJAFgDIAAgUIAPgCQAIgBAHgEIAGgCIAEgCIADgCIAFgHIAAAAIACgDIAFgRQAOgsgOgrIAAAAIgDgKIgBgBIAAgBIAAgBIgBAAQAEgNACgPIAAgIIAAgEIgDgDQgJgJgGgOQgHgRgGgTIgIgeIgKgfIgGgUIgDgIIAAgTIgBgIIACgtQABgOACgOIABgPQAFgwAIgvIAEgUIABgCIABgFIACgGIAWhUIADgMIABgBQAKgoAMglQAIgYAMgVQAMgVAUgNIAHgFIAOgMQAKgJANgHIAKgIQAGgHAIgDQACgEABgCIAFgDIABgBQAPgOAUgNQAXgPAdABQAQABAOADQAhAGAXAcQAfAlAUAuQATAtADAvQADAxgKAuQgEATgIATQgEAIAAAJQABAFgCAFQgRAsgPAsIgLAjQgHAWgKAUQgUApgXAnQgJARgRAMIgGAGQgMAMgNAJIgIAFIgBABIgBAAIAAAAIgKAGQgEACgCAEQAAgBgBAAQAAAAAAABQgBAAAAAAQgBAAAAABQgVAGgSAJIgCABIgBABIglASQgKAGgHAHQgEAAAAADIgEAHIADAQQgKACgHADIgDAAIgEAAQgLgCgJACIgIACIgBABIgBAAIgEADIgBAAIgGAGQgDAEAAAGIgBABIAAAEQAJAXASAQIAKAKIAGABQAEADAFACIAAAAQgIARgDABQgEABgCADIgEADQgYAPgPAVIgCADIgEAJIgBACIgBACIAAAAIAAABIgBABIgCAHIgBALQAAABAAAAQAAABABAAQAAABAAAAQABAAAAABIAHACIAAAAIALABIACABIABAAIAEAAIAFAAIACAAIACAAIABAAQAOgBAOgFQgjAcAAADIABADIAAACIAAAAIAAACIABABIAAABIACADIAAABIABAAQgIASAAAEIABADIgBAHQgFAbgIAZIAAABIAAABQgGASgHASIgOAhQgLAWgPARIgCADQgPAUgWAIIgGABIgFAAgAilhuIABBNIABAIQABAMAFAKQAFAJAHAJQAHAKAJAHQAJAKAPACIAFAAIAwACQAMgBAKgEQAKgEAHgHQALgKAGgMIAHgIIACgGIAFgHQASgYANgcIAEgIIAthYQAVgpALgsQAFgXAEgYIAJg2IgBgQQABgZAAgZQAAgLgCgLIgCgFIgGgPQgOgfgZgUQgIgGgKgEQgNgGgPgBQgFgBgDADIgCAAQAIgFAKgEQgKAEgIAFIgDgBIgIAIQgLAJgKALQgJALgGANIgmA+IgYAwQgPAVgJAXQgPAlgOAlIgCAHIgBAFQgKAugCAxQgBALACALIAEAjQAEAXAKAUIADAFQADAIAGAHQAEAGAGABIAGACQAWAJAXAFIAHABQAeAEASgTIgCAGIgHAIQgGAMgLAKQgHAHgKAEQgKAEgMABIgwgCIgFAAQgPgCgJgKQgJgHgHgKQgHgJgFgJQgFgKgBgMIgBgIIgBhNQAAgbADgaIADgWIABgFIACgHQACgJABgMIACgHIADgLIAAgCIABgFIACgGIAFgYIABgEQAFgMACgOQADgWAHgUIAIgUIABgDIAHgMIAFgIIAFgHQAHgJAJgJQASgSAPgVQANgSAMgPIAMgNIADgEIAEgFIAAgBIADgCIABgFIACgCIAHgJIAHgIQAFgEAGgDIAAAAIABAAIABgBIABAAQAGgCAGAAIABAAIAAAAIABAAIABAAIACgBIAFAAIAEAAIABAAIAAAAIABAAIACAAIABAAIAFAAIABABIAMABQARAEAOAKQARASALAUIADAGIANAqIAAADIAAAEIAAAAIACALIABALIAAAJIAAAFIAAgFIAAgJIgBgLIgCgLIAAAAIAAgEIAAgDIgNgqIgDgGQgLgUgRgSQgOgKgRgEIgMgBIgBgBIgFAAIgBAAIgCAAIgBAAIAAAAIgBAAIgEAAIgFAAIgCABIgBAAIgBAAIAAAAIgBAAQgGAAgGACIgBAAIgBABIgBAAIAAAAQgGADgFAEIgHAIIgHAJIgCACIgBAFIgDACIAAABIgEAFIgDAEIgMANQgMAPgNASQgPAVgSASQgJAJgHAJIgFAHIgFAIIgHAMIgBADIgIAUQgHAUgDAWQgCAOgFAMIgBAEIgFAYIgCAGIgBAFIAAACIgDALIgCAHQgBAMgCAJIgCAHIgBAFIgDAWQgDAaAAAbIAAAAgAANgGIAAAAgAAroJIAAAAg");
	this.shape_2.setTransform(46.1,-5.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("AolJ0QALgfAFghIAGgmIARhfQAIgvAMgwQAGgYAMgVIAUgiIAIgOQAVggAZgeIADgMIABgCIAGACQgCAEAFADQAIAFADAKQgDAFAGAIIABABQADADAAAFQAYAgAnAQIASALQAsASAqAQQAXAJAYAEQAvAIAwgBIASgBIAKgBQAegDAZgIQAWgGASgLQAMgHAIgJQADAAACgBQAMgHANgNIADgBQAAAAAAAAQABAAAAAAQAAAAAAAAQABgBAAAAIAAAAIAAgBIAAgCIAGAAIABAAIAAACIADAFIADAKQALAQAHATIALAaIAIAWQAQAuALAuQAEAYgBAXQACAIgBAIIAHA5IACAKQAEAUABAUIAAAMgACZkwIhdgBQgEAAgDgDQgXgDgWgGIgFgCQgIgGgNgDIgFgBIglgOIgUgFQgKgCgFgFIAAgBIAAAAIAAgBIABgDQAEgLABgLQAEgGABgGIACgEIABAAIAFgBIAAAAIADAAQAjgGAhgIIAFgCIADAAIgDAAIgFACQghAIgjAGIgDAAIAAAAIgFABIgBAAQAFgRADgTIABgLIAAAAIABgHIADgdIABgSIABgNQADgNgBgOIABgKIABgGIACAAIAAABQABAAAEgEQAWgIAUgNQAFgFAHgCQARgLAVgEQAlgLAoAHQAYAEAXAIQAWAHATAJQAPAHATgDQANABAMgBQAEAAAEgBQAggJAcgPIAHgBIAFgBQApgbAxAAIAQABIgDAMIADgMIABAAIALAAIACABQAKABAHAGIATAQIAEABIABABQAlAhAKAwQAAAKACAJIgBANIgBAFQgKAlgUAdIgLAQIgJALIgOAOIgGAEIgGADIgGAFQgCADgDABQgUAMgVAJQgYALgYAGIgGACQgWAGgYAAIgHAAIgjAAQgMgCgLACIgHACIgeADIgIAAQgLABgLAAQgPgBgNAEIgHAAgAADmfIAFgBIAEgBIgCAAQgEAAgDACIAAAAgAg3mwIA/ABIg/gBIgDAAIAAAAIgDAAIAAAAIAAAAIADAAIAAAAIADAAgAhBm8IACAAIAIACIgIgCIgCAAIABgBIABAAQAIgDAKAAIAAAAIAAAAIACAAIADAAIADAAIADAAIAAAAIAAAAIAGAAIAFgBIAdgDIgdADIgFABIgGAAIAAAAIAAAAIgDAAIgDAAIgDAAIgCAAIAAAAIAAAAQgKAAgIADIgBAAIgBABIAAAAgAAVnYQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAgBIAAAAIAAAAQAAABAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAIAAAAIgBAAIgCAAIAAAAIgFgCIgBAAIgJgCQgYgDgbAAQAbAAAYADIAJACIABAAIAFACIAAAAIACAAIABAAIAAAAg");
	this.shape_3.setTransform(-76.8,76.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC99").s().p("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AAGgCIAHgBIA3gBIAFAAQAGgBAHABQAPADARgCQgCAWgEAVQgFAZgKAWQgDAHAAAIIgDAKIgQAwIgHAPIgFAIIgBACIgEAAQgMAAgKAEQgHACgIABIgSACIgCAAQgMACgLAEQgOAEgQACQgwgDgxAAgAnRsbIAHgCIACABIgCgBIgHACgAkNA2QACgMAAgMQgBgIABgHIAQhdIACgHQAEgNADgNIADgWIACgcQADgvAAgwQABgvACgvQgCgJABgJQgFgYAAgYQABgYgFgXQgFgagCgbQgDgfgJgdQgCgGgDgFQgGgLAAgNIADgFIgBgMQgBgiAHgfQAGgYAOgTQASgYAWgXIAPgOQAGgFAGgHIABgCIABgBQALgMAMgLIAUgQIALgJIAlgaQALgJgCgNQAAgEgDgEQgHgJgHgHIAEgEIABAAIAFABIBcgBQAIACAGAAIA5ABQAMAAALAEQADABAGAJQAFAKAIAQQAHARADARQABALACgJQAGBDACADIACAGIABAXIAAAIIABACIACAWIACANIAEAUIAAACIgCABIgBAAIgBABIgBAAIgBAAIgFABIAAAAIAAAAIgCgBIgBAAIgBAAIAAAAQgVgDgXAAIgFAAIgBAAIgCAAIgBAAIAAAAIAAAAQgYAAgSgKIgDAAIgBAAIgBAAQgFAAAFAEIAAAAIABABIAAAAIABAAIgBAAIAAAAIgBgBIAAAAQgFgEAFAAIABAAIABAAIADAAQASAKAYAAIAAAAIAAAAIABAAIACAAIABAAIAFAAQAXAAAVADIAAAAIABAAIABAAIACABIAAAAIAAAAIAFgBIABAAIABAAIABgBIABAAIACgBQAJgCALABIAGATIgCAHIAAABQgBAEgCABIgEAEQgIAHgFAIQgIALgLAKIgBABIABAAIABACQABAEAFAFQACACgBAEQAPAUAMAVQAMAVAFAYQADANABAPIAAAHQABANAAAMIgCASQgCAWgJAUIgIARIgDAGQgHAKgJAJIgPAPIgDAEQgGAFgHALQgSARgOAQQgFACgGAGIgYASIgEACIgDACQgUAMgZACIgXADQgLABgMAFQgHgBACAIIACAPQAAAKAIAIIAGAHQALALALACIABACIgJAFQgDACgEAAQAEAAADgCIAJgFIAKgCQANgBAMgEQAZgGAbACQAIAAAFgDIAFgBQARAAAPACQAwAGAmAdQAEAEACAEIACAFIABABQAOAWAAAbQABAYgBAYIgBAFIgEAPIAAACIgQAAQgxAAgpAZIgGABIgGABQgdAPggAJQgDABgEAAQgNABgNgBQgTADgNgHQgTgJgWgHQgWgIgYgEQgogFgmAJQgVAEgSALQgHACgFAFQgVANgWAIIgBABQgCAAAAAAQgBABgBAAQAAAAAAABQAAAAAAAAgABVmHIAuAnIgygsIgBAFIAAAAQgGgBgHgDQgpgXgYgqQgCgFAAgCQAAgEAFAAQgFAAAAAEQAAACACAFQAYAqApAXQAHADAGABIAAAAIAFAAgABRmMQgHgMAAgPIAAgIIAFgKIACgEIABgBQAIgMAQAAIAAAAIAAAAIADAAIABAAQgWgFgXgIIgNgEQgQgEgQgCIgIgCQgCgEgFABIgDAAIAKADIAIACQAQACAQAEIANAEQAXAIAWAFIgBAAIgDAAIAAAAIAAAAQgQAAgIAMIgBABIgCAEIgFAKIAAAIQAAAPAHAMgACMpnIgPAMIgGAEIgEADIAEgDIAGgEIAPgMIAEgEIgEAEgAhZs9QgUAJgRAMQgNAIgJAMQgDAEgBAGQABgGADgEQAJgMANgIQARgMAUgJQAGgDAIAAIAAAAIAAAAIACAAIACAAQAOABAHAIQgHgIgOgBIgCAAIgCAAIAAAAIAAAAQgIAAgGADgABQtwIgFABQgPAEgDAOQADgOAPgEIAFgBIAAAAIACAAIABAAIADAAIAAAAIAAAAQAJAAAHAFIABAAIABABIAEAFIgEgFIgBgBIgBAAQgHgFgJAAIAAAAIAAAAIgDAAIgBAAIgCAAIAAAAgANHAIIAAAAgACqsTIgKgMIgLgKIgJgsIACgJIACgUIAEALIABAFIANArIABAFQADATALAQIAEAIIgLgMg");
	this.shape_4.setTransform(-56.3,15.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF99").s().p("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");
	this.shape_5.setTransform(-74.7,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(39));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-179.7,-90,252.2,231.6);


(lib.content_scene4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AguA5QgLgJAAgKQAAgGAEgEQADgDAGAAQAIAAADAIQAFALASAAQANAAAPgHQAOgHAAgIQAAgLgJgDQgHgDgRAAQgQgBgMgEQgPgGAAgOQAAgRASgOQASgPATAAQAJAAANAEQAPAFAAAHQAAAEgCAEQgEAEgFAAIgNgCIgNgCQgLAAgIAGQgLAFABAGQAAAEADACQADACAGABIAUABQAUACAMAJQAMAJAAASQAAAXgaAMQgUAJgXAAQgWAAgNgKg");
	this.shape.setTransform(122.2,25.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgqBDQgEgFAAgFIAAhbIgBgMQAAgHABgEQABgJAOgBQAHgCAPAAQAPgBAPALQASANAAASQAAALgEAGQgDAGgHAFQAIAEAHAIQAIAJAAAKQAAALgNAKQgJAIgJADQgTAIgfgBQgFAAgEgDgAgXAvQAQgBAPgFQAQgFAAgFQgBgHgJgEQgIgFgGgBIgXAAgAgXguIABATIgBASIANABQAYgCAAgSQAAgGgIgFQgGgHgJAAIgOAAg");
	this.shape_1.setTransform(110.6,24.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgvBBQgDgDAAgFIAAgUIAAgUIAAhFQAAgFAEgFQAEgGAIABIAWABQAMACAHAEQAmATAAAcQAAAMgIAHQgIAIgQAGQAXANAMAOQADADAAAFQAAAFgDADQgEAEgFAAQgFAAgEgEQgbgZgegKIABAdQAAAFgDADQgEAEgFAAQgFAAgEgEgAgaACIAEAAQAVAAAJgDQAEgCAEgEQAEgEAAgCQAAgKgNgJQgKgIgNgCIgKAAg");
	this.shape_2.setTransform(99.1,24.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgoBDQgJgJAAgcIACgiIABgjIAAgJIgBgJQAAgNAMAAQADAAAEACIAUgEIAPgBQAVAAAOAFQAIADAAAIQAAAFgDADQgDAEgGAAIgDAAQgPgEgNAAIgNABIgQADIgBAjIAhgEIAVgBQAFAAAEADQAEADAAAGQAAAIgLACIgWABIgjAEIgBASQAAARACACQABACALAAIAOgBIAQAAIAGgBIAEAAQAGAAADADQAFADAAAGQAAAKgLACQgJABgZAAQgdAAgJgHg");
	this.shape_3.setTransform(87.8,24.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgSA+QgLgZgNgvIgHgXQgFgRAAgHQAAgFAEgDQAEgDAFgBQAIAAADAJIAEAQIAIAcIANArIATgzIAIgVQAFgNAGgHQAEgEAFAAQAFAAAEADQAEAEAAAEQAAAEgCADQgFAIgEAJIgHASIgXA7QgEAKgGALQgEAGgFABQgJAAgEgJg");
	this.shape_4.setTransform(75.9,25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgnBDQgKgJAAgcIACgiIABgjIAAgJIgBgJQgBgNAMAAQAFAAADACIATgEIAPgBQAXAAANAFQAIADAAAIQAAAFgDADQgDAEgGAAIgEAAQgOgEgOAAIgLABIgQADIgBAjIAggEIAVgBQAGAAADADQAEADAAAGQAAAIgMACIgUABIgkAEIgBASQABARACACQAAACALAAIAOgBIARAAIAEgBIAGAAQAEAAAFADQADADAAAGQAAAKgKACQgIABgaAAQgdAAgIgHg");
	this.shape_5.setTransform(56.6,24.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgmA1QgNgOAAgSQAAgcAagfQAWgaAVAAIAHAAIAFABQAEgEAFAAQAJAAADALIABARQAAAEgDAEQgDAFgGAAQgIAAgEgIQgCgFgBAAQgCgBgFAAQgLAAgNASQgUAWAAAVQAAAJAGAHQAHAHAJAAQAGAAAJgFIAOgJQAGgEAEAAQAFAAAEAEQADAEAAAEQAAAGgEADQgYAVgXgBQgUAAgOgOg");
	this.shape_6.setTransform(45.2,24.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("Ag8BDQgEgDAAgFIABgLIAAgLIABgPIAAgQIAAgOIAAgRIgBgQIgCgQQAAgFAFgEQAFgEAFAAQAGAAAJALQAmA5AmAiIAAgNIgBg5IgBgJIgBgKQABgMANAAQAOAAgBAsIAAAOIAAA2IgBAOQgCALgMAAQgGAAgHgHQgigfgpg1IAAAaIAAAVIAAAVQAAAagMAAQgHAAgDgEg");
	this.shape_7.setTransform(32.2,24.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgoBDQgJgJAAgcIABgiIACgjIgBgJIgBgJQABgNAMAAQAEAAADACIAUgEIAOgBQAXAAANAFQAIADAAAIQAAAFgDADQgDAEgGAAIgDAAQgPgEgOAAIgLABIgRADIAAAjIAggEIAVgBQAFAAAEADQAEADAAAGQAAAIgMACIgVABIgjAEIAAASQAAARACACQAAACAKAAIAPgBIARAAIAEgBIAGAAQAEAAAEADQAEADAAAGQABAKgLACQgJABgaAAQgcAAgJgHg");
	this.shape_8.setTransform(19.5,24.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgHA/QgEgDAAgFIAAgEIABgEIgBgMIgBgMIgBgeIgDggIgFAAQgTAAgMgDQgJgCAAgJQAAgFADgEQADgEAGABIAOABIAOABIARAAIAOAAIAUABIAUABQAFAAAEADQADADAAAFQAAAFgDAEQgEADgFAAIgWgBIgVAAIACAjQACAVAAANIABAJIAAAJQAAAGgCAGQgEAGgGAAQgEAAgDgDg");
	this.shape_9.setTransform(7.5,24.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AguA5QgLgJAAgKQAAgGAEgEQADgDAGAAQAIAAADAIQAFALASAAQANAAAPgHQAOgHAAgIQAAgLgJgDQgGgDgSAAQgQgBgLgEQgRgGABgOQAAgRASgOQASgPATAAQAJAAANAEQAPAFAAAHQAAAEgDAEQgDAEgGAAIgMgCIgNgCQgLAAgIAGQgKAFAAAGQAAAEACACQAEACAGABIAVABQATACALAJQANAJAAASQAAAXgaAMQgTAJgYAAQgWAAgNgKg");
	this.shape_10.setTransform(-5,25.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AgoA/QgEgDAAgFQAAgFAEgDQAEgEAFAAIARgBIAAgoQAAgWACgWIgTABQgGAAgDgDQgEgEAAgFQAAgFAEgDQADgDAEgBIAbgBQAOAAAaAEQALACAAAKQAAAGgFADQgCADgFAAIgXgDIgBApIgBAoIAYAAQAGAAADADQAEAEAAAFQAAAEgEAEQgEADgFAAIgPABIgPAAIgPABIgSACQgGAAgDgEg");
	this.shape_11.setTransform(-16.2,25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AAZAyIgLgRIgMgPIgZAdIgQASQgEAEgFAAQgFAAgEgEQgEgEAAgFQAAgEADgDIAQgRIAfggIgSgXIgKgNQgGgHgFgFQgGgEAAgFQAAgEAEgFQAEgDAFAAQAFAAAHAHIAKAKIALANIAOAUIAWgdQARgVAGAAQAFAAAEADQAEAEAAAFQAAAEgDADIgSAXIgWAbIATAZIATAZQAEAEAAAEQAAAEgEAEQgEAEgFAAQgJAAgOgUg");
	this.shape_12.setTransform(-27.8,25.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AgnBDQgKgJAAgcIACgiIABgjIAAgJIgBgJQAAgNALAAQAEAAAEACIATgEIAQgBQAWAAANAFQAIADAAAIQAAAFgDADQgEAEgFAAIgEAAQgOgEgNAAIgNABIgPADIgCAjIAhgEIAVgBQAGAAADADQAEADAAAGQAAAIgLACIgWABIgjAEIgBASQAAARACACQACACAKAAIAOgBIAQAAIAGgBIAEAAQAGAAADADQAFADAAAGQAAAKgLACQgIABgaAAQgdAAgIgHg");
	this.shape_13.setTransform(-39.5,24.8);

	this.instance = new lib.Scene2();
	this.instance.setTransform(188.2,201);

	this.instance_1 = new lib.scene2bottomtitle();
	this.instance_1.setTransform(200.2,363.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AGTGnQgbhAgChJQAAgPgIgPQhHiFhyhnQhghUhjhTQhihRh1g3Qhqgzhcg/IAAgKIABgKIAPgIIABgBIAJAEQBOA4BaArIAuAXQCxBaCQCJIBPBJQCMB8A9CuQAEANAAAQQADAwAHArIgDAEIgKAFIgMgEg");
	this.shape_14.setTransform(233.7,203.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.instance_1},{t:this.instance},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.5,9.6,324.1,378.1);


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


// stage content:
(lib.pred_Scene4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene4:0,scene4_repeat:93});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
		this.btn_menu.addEventListener("click", openMenu.bind(this));
		this.btn_goNext.addEventListener("click", openNext.bind(this));
		this.btn_goBack.addEventListener("click", openPrev.bind(this));
		
		function openMenu(){
		
		 window.open ("verb_menu.html","_self");
		}
		
		function openNext(){
		
		 window.open ("pred_Scene5.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("pred_Scene3.html","_self");
		}
	}
	this.frame_2 = function() {
		playSound("beam3");
	}
	this.frame_22 = function() {
		playSound("pop_up");
	}
	this.frame_29 = function() {
		playSound("iamthereforeiexist");
	}
	this.frame_107 = function() {
		this.gotoAndPlay("scene4_repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(20).call(this.frame_22).wait(7).call(this.frame_29).wait(78).call(this.frame_107).wait(1));

	// content
	this.instance = new lib.content_scene4();
	this.instance.setTransform(267.3,190.3,1,1,0,0,0,197.3,189);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(108));

	// main
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.btn_goNext},{t:this.btn_goBack},{t:this.instance_1},{t:this.btn_menu}]}).wait(108));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(284.2,201.8,537.1,401.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;