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
		{src:"sounds/beamisare.mp3", id:"beamisare"},
		{src:"sounds/Cowbell.mp3", id:"Cowbell"},
		{src:"sounds/heistheyarebutiamnot.mp3", id:"heistheyarebutiamnot"},
		{src:"sounds/High_Screaming_Gtr.mp3", id:"High_Screaming_Gtr"},
		{src:"sounds/needtoreview.mp3", id:"needtoreview"},
		{src:"sounds/organ_f_chord.mp3", id:"organ_f_chord"},
		{src:"sounds/pop_up.mp3", id:"pop_up"},
		{src:"sounds/powersynth.mp3", id:"powersynth"},
		{src:"sounds/predicateverbsdefinition.mp3", id:"predicateverbsdefinition"},
		{src:"sounds/right_answer.mp3", id:"right_answer"},
		{src:"sounds/salsa_groove.mp3", id:"salsa_groove"},
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



(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("AiDAJQAAABABAAQAnADAjgBQAmACAmgGQAMgLAMgLQAMgMAMgNQAMgPAGgLQAEgGAGgEQACgDADABQAUABASABQAUABATACQAFgBABAHQgKABgKACQgTADgSAFQgHACgHAAQASACASACQATADARAFQAMACgHAIQgYADgTACQgOABgOACQgDABgFAAABtgFQgEgCgEgBAB3gXQARAFARAHQAPAGAMAHQgIADgKACQgXACgRgJQgGgCgHgDQAOAIAMANQAIAGAEAGQAOASgYgBQgCAAgEgCQgQgIgMgLQgFgEgEgFQgDgCgDgDABeAPQgIARgUAEQgTAFgOgDQgfAJggAIQgdAHgdAHQgVAFgVAEAiFAJQABAAABAAQgQgDgOADAirANQgRAHgDAO");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("AiNA2IAAABIAAABQgBAAAAAAQAAABgBAAQAAAAAAAAQAAABAAAAIgCABIgGAEIgBgBIAAABIgDAAQAAAAgBAAQAAAAAAAAQAAABAAAAQAAAAAAAAIgCAAIgGgBIgFgBQgBAAgBAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBgBIgHgLIgCgFQgDgEAAgFIAAgDIABgCQgBAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIABgCIABgDIABgCQAAAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAgBIAGgEQADgCAEgBIABgBIACAAIAEAAIAAAAQAEgBAEABIABAAIALgBIAEABIACAAIACABQAmADAjgBQAnACAlgGIAZgWIAYgZQALgPAHgLQAEgGAFgEQACgDAEABIAlACIAnADQAFgBABAHIgTADQgTADgSAFQgHACgHAAIAkAEQATADARAFQALACgGAIIgrAFIgcADIAhAMQAPAGANAHIgTAFQgWACgRgJIgNgFQAOAIAMANQAIAGAEAGQANASgYgBIgGgCQgPgIgNgLIgIgJIgHgFIAHAFQgJARgTAEQgTAFgOgDIg/ARIg7AOIgpAJgABpgFIgIgDIAIADgABrgWIAIgBIgIABg");
	this.shape_1.setTransform(0.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.3,-8.8,40.6,17.7);


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


(lib.wordsbestill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgTAZQgJgHAAgOQAAgNAIgKQAIgLAMAAQAJAAAGADQAIAEAAAIQAAAGgHAFIgMAEIgVALQADAFAFACQAFADAFAAIAJgCQAHgCACgDQACgDACAAIAEACQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAAHgLAEQgJAEgIAAQgLAAgJgGgAgLgOQgEAFgDAJIASgGQAJgFAEgEQgFgFgIAAQgGAAgFAGg");
	this.shape.setTransform(3.6,1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgRAsQgBACgDAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIAAgFIAAgEIAAgTIgBgRIAAgPIAAgRQAAgDACgDQACgEADAAQAFAAAAAFIgBACIAAADIAAANIAAAPIAJgGIAHgBQANAAAHAJQAIAIAAANQAAANgJAJQgIAKgLAAQgJAAgIgDgAgIgBIgIADIAAAKIAAAKIAAAJIAIAEQADABAFAAQAGAAAGgGQAFgGAAgJQAAgJgEgGQgFgEgIAAQgDAAgFADg");
	this.shape_1.setTransform(-3.2,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.9,-10.3,17.9,20.7);


(lib.wordsarestill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgTAZQgJgHAAgOQAAgNAIgKQAIgLAMAAQAJAAAGADQAIAEAAAIQAAAGgHAFIgMAEIgVALQADAFAFACQAFADAFAAIAJgCQAHgCACgDQACgDACAAIAEACQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAAHgLAEQgJAEgIAAQgLAAgJgGgAgLgOQgEAFgDAJIASgGQAJgFAEgEQgFgFgIAAQgGAAgFAGg");
	this.shape.setTransform(3.7,1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgWAbIAAgoIABgGIAAgFQAAgGAFAAQAGAAAAAJQAKgLANAAQAEAAADAEQACAEAAAHIAAAEQAAAHgFABQgGAAAAgHIAAgDIAAgGQgKACgDAEQgFAEgDAHIAAAfQAAAFgGAAQgGAAAAgFg");
	this.shape_1.setTransform(-2.3,2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AASAeIgEgFIgKAFIgFABQgOAAgGgHQgGgIAAgPQAAgMAKgKQAKgKALAAQAFAAAHADQAIACAAAGIgBACIgBAIIgBAKIABAMIAEALIABACIABABQAAABAAABQgBAAAAABQAAAAAAABQgBAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAHQAAAKADAFQAEAFAGAAQAEAAAEgCIAGgEIgCgWIAAgFIABgHIgDgBIgDgBQgHAAgHAIg");
	this.shape_2.setTransform(-8.5,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.6,-10.3,27.2,20.7);


(lib.wordsamstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgCAiQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAgBAAAAIgBgVIgBgTQAAgHgCgDQgEACgEAEIgHAIIgDAEIgBAIIgBAKIABAFIAAAFIgBAEQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgGAAAAgPIAAgKIABgJIAAgJIgBgJQAAgOAGAAQAAAAABAAQABABAAAAQABAAAAAAQABABAAAAQABABAAAAQABABAAAAQAAABAAABQAAAAAAABIAAADIAAAEIAAAGQADgHAGgFQAGgFAEAAQAIAAACAJQAEgEAEgCQAEgCAGAAQAKAAAEAKIACARIAEAfQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQgEAAgBgFIgCgSIgCgQIgCgIQgCgFgDAAQgCAAgGADIgHAGIAAAKIACAOIABAQQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAgBgBAAg");
	this.shape.setTransform(3.1,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AASAeIgEgFIgKAFIgFABQgOAAgGgHQgGgIAAgPQAAgMAKgKQAKgKALAAQAFAAAHADQAIACAAAGIgBACIgBAIIgBAKIABAMIAEALIABACIABABQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAHQAAAKADAFQAEAFAGAAQAEAAAEgCIAGgEIgCgWIAAgFIABgHIgDgBIgDgBQgHAAgHAIg");
	this.shape_1.setTransform(-4.7,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.8,-10.3,19.7,20.7);


(lib.wordisstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgPAgQgJgDAAgGQAAAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAQACAAACADIAHACIAHABIAGgBQAGgCgBgEQAAgIgLgCIgDgCQgIgBgEgDQgEgBAAgHQAAgMALgFIAJgEIAMgEIAEgBQABAAABAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQABABAAAAIAAAFIABAFQAAABAAAAQAAABAAABQgBAAAAAAQAAABAAAAQgBABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgDAAgBgCIgCgGIgNAEQgIADAAAGIADABQAMACAHAEQAJAFAAALQAAAKgIAFQgHAEgIAAQgIAAgHgDg");
	this.shape.setTransform(1.5,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgEAqQgBgBAAAAQAAgBAAAAQgBAAAAgBQAAgBAAAAIAAgLIAAgKIAAgOIABgMQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQAAAAAAAAQAAAAABABQABAAAAAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAIAAAMIgBAOIAAAKIABALQAAAAAAABQAAABgBAAQAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAAAABQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAgAgCgfQgCgCAAgDQAAgDACgCQACgCABAAQAAAAABAAQABAAAAABQABAAAAAAQABABAAAAQACACAAADQAAADgCACQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgBAAgCgCg");
	this.shape_1.setTransform(-2.9,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.7,-10.3,13.4,20.7);


(lib.scene3bottomstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhDB4QgPgOAAgyIAAgWIABgaQgBgDAAgEQAAgEADgEQADgtAAgWIgCgQIgBgRQAAgTAPAAQAHAAAEAEQATgFARgCQARgDAMAAQAmAAAXAKQAKAEAAALQAAAGgEAFQgEAFgHAAIgFgBQgagHgZAAQgMAAgOACQgPACgRAFIABAQQAAAWgDAmIBDgGIAlgEQAHAAAEAFQAFAEAAAIQAAAMgOABIgmAEIhGAGIgBAVIAAATQAAAiAFAGQAEAFAUAAIAcgBIAdAAIAJgBIAJgBQARAAAAAQQAAANgOADQgOADgvAAQgxAAgNgNg");
	this.shape.setTransform(110.9,1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AhPB2QgEgFAAgHIgBglIgBgkQAAgPADgaQADgdAAgOIgCgYIgBgXQAAgJAFgHQAGgIAKABIAmADQAVACANAIQA/AiAAAwQAAAYgVAQQgSAPgaAIQAxAaAYAdQAEAFAAAFQAAAHgFAFQgEAEgHAAQgGAAgFgFQg0gzg9gRIABAeIABAfQAAAHgEAFQgFAEgGAAQgHAAgFgEgAgxhFIABATQAAAMgCATIgDAdIAHAAIAHAAQAnAAASgKQAJgDAIgIQAIgJAAgGQAAgVgZgTQgUgRgZgDIgXgCg");
	this.shape_1.setTransform(90.7,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AA2BRQgEgOgGgkIgqAIIgnAJQgJAUgSAoQgGAIgIAAQgGAAgFgEQgFgFAAgGQAAgIAYgxQgDgFAAgFQAAgMAPgEQASggAbgrQAkg7AJAAQALAAAFARIAKA1IAXBqIAJAZQAFAMAAAFQAAAGgFAFQgFAEgGAAQgPAAgKgkgAgTALIA3gLIgMg7g");
	this.shape_2.setTransform(68.4,1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgSAhQgEgEAAgGQAAgEAKgVIAMgbQADgIAGAAQAGABAEAEQAEAEAAAFQAAAEgWAwQgCAJgIAAQgFgBgEgEg");
	this.shape_3.setTransform(53.4,14.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("Ag+BsQgdgOAAgXQAAgHAEgEQAFgEAGAAQAIAAAGAJQAIALAGAFQANAIAaABQAWAAAVgLQAagNAAgZQAAgTgWgLQgTgLgaAAQgYAAgSgJQgWgMAAgYQAAgcAggXQAegVAegBQAPABATAEQAZAHAAALQAAANgOAAQgGAAgPgDQgQgEgJABQgWAAgRAMQgSAMAAARQAAANAYAFQAIACAXACQAkADAUATQASARAAAaQAAAlgiAWQgeAUglAAQgdgBgYgKg");
	this.shape_4.setTransform(37.1,2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AhEBzQgEgFAAgHQAAgGAEgFQAFgFAHAAQAKAAAXgDQACgNAAgQIgBgbIgBgZQAAgiAEg2IgUAAIgVABQgGAAgFgFQgEgFgBgGQAAgPAPgCQANgBAjAAQAdAAAuAHQAPACAAAPQgBAHgFAEQgEAEgGAAQgLAAgPgCIgZgDQgEAtABAnIABAbIAAAbIgBAbIAxgBQAGABAFAEQAEAFAAAHQAAAGgEAFQgFAEgGABIgaAAIgbABQgIAAgVACQgUADgKAAQgHAAgFgEg");
	this.shape_5.setTransform(17.1,1.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgSAhQgEgEAAgGQAAgEAJgVIANgbQACgIAIAAQAFABAEAEQAEAEAAAFQAAAEgWAwQgCAJgHAAQgGgBgEgEg");
	this.shape_6.setTransform(-4.7,14.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("ABfB1QgEgIgEgRIgGgbQgGgZgOhTIgfBcIgJAeQgGARgGAMQgHALgJAAQgJAAgFgKQgEgGgDgKIgEgSQgQg3gMg9IgFAcIgUBRQgCAOgGAdQgFAMgLAAQgHAAgFgGQgEgEAAgHQAAgaALgmIARg9IAJgxQAHgjAHgLQAHgJAJAAQAKAAAFAMQAGAOAIArQAHAzASA6QAVg6ARhBIAFgXQACgOAFgIQAGgMALAAQANAAAIAaQACAJADAcQAKBFAOAyIAHAaQAGAWAAAFQAAAHgFAEQgFAFgGAAQgJAAgGgJg");
	this.shape_7.setTransform(-24,1.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AA2BRQgEgOgHgkIgpAIIgnAJQgJAUgSAoQgFAIgJAAQgGAAgFgEQgFgFAAgGQAAgIAXgxQgCgFAAgFQAAgMAPgEQASggAbgrQAjg7AKAAQAMAAAEARIAKA1IAXBqIAJAZQAFAMAAAFQAAAGgFAFQgFAEgGAAQgPAAgKgkgAgTALIA3gLIgMg7g");
	this.shape_8.setTransform(-50.2,1.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgSAhQgEgEAAgGQAAgEAKgVIAMgbQADgIAHAAQAFABAEAEQAEAEAAAFQAAAEgWAwQgCAJgIAAQgFgBgEgEg");
	this.shape_9.setTransform(-74.7,14.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AhDB4QgPgOAAgyIAAgWIABgaQgBgDAAgEQAAgEADgEQADgtAAgWIgCgQIgBgRQAAgTAPAAQAHAAAEAEQATgFARgCQARgDAMAAQAmAAAXAKQAKAEAAALQAAAGgEAFQgEAFgHAAIgFgBQgagHgZAAQgMAAgOACQgPACgRAFIABAQQAAAWgDAmIBDgGIAlgEQAHAAAEAFQAFAEAAAIQAAAMgOABIgmAEIhGAGIgBAVIAAATQAAAiAFAGQAEAFAUAAIAcgBIAdAAIAJgBIAJgBQARAAAAAQQAAANgOADQgOADgvAAQgxAAgNgNg");
	this.shape_10.setTransform(-89.6,1.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AhIB4QgGgHAAgGIAAguQAAgWADgoQADgsAAgVIACgqQABgIAEgDQAVgGAbAAQAaAAAZATQAeAWAAAfQAAAoggAWQAYAJALAMQAMAMAAAPQAAATgVARQgOANgPAGQgiAOg2AAQgHAAgGgGgAgvA+IAAAgQApgBAXgKQALgFALgJQAJgIAAgEQAAgHgUgKQgPgGgNgEIgQgCIgGAAIgHAAIgSgBIAAAjgAgohcIgBAbIgDA9IAXABQAXgCAOgMQARgOgBgWQAAgPgQgMQgQgNgRAAIgXABg");
	this.shape_11.setTransform(-109.4,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.4,-24.3,244.8,48.6);


(lib.new_arm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(17.5,23.7,1,0.997,0,-16.1,-15.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1,rotation:-2,skewX:0,skewY:0,x:19.6,y:27},15).to({startPosition:0},5).to({rotation:-16,x:17.5,y:23.8},12).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("AAeBOQgPgPgHgGQgTgVgVgVQgXgWgTgZQgKgJgCgEQgDgDgBgDAgUhNQgBAAAAABQADACACADQAHAGAGAHQAaAbAlAfQAjAegFAU");
	this.shape.setTransform(9.5,40.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("AAgBeIgWgVIgogqQgXgYgTgXIgBgBIABgCIgDgBQgFgDgEgHIgEgFIgDgFIgBgNIABgPQAAgJABgDQACgGAFgHIACgDIA+AiIAAACIAFAFIANANQAaAbAlAdQAjAggFAUQgNAfgdAAQgIAAgKgDg");
	this.shape_1.setTransform(9.3,39.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(33));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,10.7,37.2,39);


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


(lib.wordsbe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wordsbestill();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({alpha:0},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.9,-10.3,17.9,20.7);


(lib.wordsare = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wordsarestill();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({alpha:0},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.6,-10.3,27.2,20.7);


(lib.wordsamstill_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wordsamstill();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({alpha:0},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.8,-10.3,19.7,20.7);


(lib.wordis = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wordisstill();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({alpha:0},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.7,-10.3,13.4,20.7);


(lib.scene3bottom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.scene3bottomstill();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},14).to({alpha:1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.4,-24.3,244.8,48.6);


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


(lib.wordsstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_28 = function() {
		playSound("Cowbell");
	}
	this.frame_52 = function() {
		playSound("Cowbell");
	}
	this.frame_74 = function() {
		playSound("Cowbell");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(28).call(this.frame_28).wait(24).call(this.frame_52).wait(22).call(this.frame_74).wait(46));

	// Layer 1
	this.instance = new lib.wordis();
	this.instance.setTransform(21.9,2.1,2.655,2.655);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgJB5QgGgIAAgGQAAgGAFgEQAEgDAGAAQAEgBAGAJQAGAHAAAGQAAAGgEAEQgEAEgHABQgDAAgHgJgAgJA5IgBgTIAAgTIAAhCIABhEQAAgOALAAQAOAAAAAOIAACsQAAANgOAAQgLAAAAgNg");
	this.shape.setTransform(38.3,3.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag0BDQgYgUAAgjQAAgmAUgbQAVgeAjAAQAYAAARAIQAUALAAAWQAAAQgSANQgHAFgaAKIg5AcQAJANAMAHQAOAGAPAAQALAAAOgEQASgFAGgIQAFgJAGAAQAFAAAFAFQAEAEAAAFQAAARgcANQgXAKgXAAQgiAAgVgRgAgfgpQgNAPgGAcIAwgVQAagOAMgKQgNgMgXAAQgTAAgMAOg");
	this.shape_1.setTransform(-2.2,7.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhgB6QgFgEAAgHQAAgQADghQADghAAgQIgBgYIAAgaIABglIACglQAAgGAEgFQAEgEAHAAQAGAAAEAEQAFAFAAAGIgCAmIgCAlIABAlIBCgKQAngIAbAAQACgWAAgtQAAgMAEgMQAFgRAJAAQAGAAAFAEQAFAFAAAGIgCAHQgCAGAAANIAAAOIABANQAAAQgDAfQgDAdAAAPIACAkIABAjQAAAHgEAEQgEAEgGAAQgHAAgEgEQgEgEAAgHIgCgjIgCgkIABgXQgbABglAHIhBANQAAAOgDAaQgDAZAAAOQAAAHgEAEQgEAFgHAAQgGAAgEgFg");
	this.shape_2.setTransform(-23.2,4.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAAAAIAAAAIABAAIgBAAg");
	this.shape_3.setTransform(-57.8,20.2);

	this.instance_1 = new lib.wordsare();
	this.instance_1.setTransform(10.9,2.9,1.769,1.769);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgIAJQgDgEAAgFQAAgEADgDQAEgEAEAAQAFAAAEAEQADADAAAEQAAAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_4.setTransform(82.5,11.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgIAJQgDgEAAgFQAAgEADgDQAEgEAEAAQAFAAAEAEQADADAAAEQAAAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_5.setTransform(77.2,11.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgIAJQgDgEAAgFQAAgEADgDQAEgEAEAAQAFAAAEAEQADADAAAEQAAAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_6.setTransform(71.9,11.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgFBJQgDgDAAgEIAAgMIAAgMIgCg6IgXgCQgJgBAAgJQAAgFADgDQADgDAEAAIAWACIgBgOIAAgNQAAgEADgDQADgDAEAAQAHAAACAPIAAAJIAAAGIAAAHIAPgCQALAAADABQAGACAAAIQAAAFgDADQgDACgEAAIgFAAIgFAAIgOACIACA7IAAAEIAAAGQAAAWgLAAQgCAAgDgCg");
	this.shape_7.setTransform(64.2,4.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAXAxQgNAGgPAAQgOAAgJgFQgKgHgBgNQgEgbAAgUQAAgOADgSQABgJAIAAQAFAAADADQADACAAAFIgBAPIgCAQQAAARABALQABAMADAIIAGADIAHABQAMgBAPgEIAAgVIAAgSQAAgWACgRQABgKAJAAQAEABADADQADADAAAEIgCAnIAAAUIAAAXIABAHIAAAGQAAAFgDADQgDADgEAAQgIAAgCgKg");
	this.shape_8.setTransform(53.8,6.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgfBNQgDAFgFAAQgEAAgCgDQgDgDAAgEIAAgIIAAgIIAAghIgBgfIAAgcIAAgdQAAgGADgFQADgGAHAAQAHAAABAJIgBAEIgBAEIAAAXIAAAaQAJgGAIgDQAIgDAFAAQAXAAANARQANAOAAAYQAAAXgPARQgPAQgUAAQgRAAgNgGgAgPgEIgPAJIgBARIABARIAAARIAOAFQAHACAIAAQANAAAJgKQAJgLAAgPQABgQgIgKQgIgJgPAAQgHAAgIAEg");
	this.shape_9.setTransform(42.2,3.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgLAWQgDgDAAgEQAAgDAHgNIAHgSQACgEAEAAQAEAAACACQADADAAAEQAAACgPAfQAAAFgFAAQgDABgDgDg");
	this.shape_10.setTransform(27,12.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgaBRQgDgDAAgFQAAgKAWgxIglhGIgFgHQgDgFAAgDQAAgEAEgEQADgDAEAAQAFAAACADQASAZASAtIAPgjIAQghQAEgFAFAAQAEAAAEACQADADAAAFIgBAFIgkBLQgOAdgFATIgGAUQgDAIgHgBQgEAAgDgCg");
	this.shape_11.setTransform(-20.5,9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgiAsQgQgNAAgXQAAgZANgSQAPgUAWAAQAQAAALAGQAOAHAAAPQgBAKgMAJIgVAJIgmATQAGAJAIAEQAKAEAJAAQAHAAAJgCQANgEADgFQAEgGAEAAQADAAAEADQACADAAADQAAAMgSAIQgQAHgPAAQgWAAgOgMgAgUgbQgIAKgFASIAggNQARgJAIgHQgJgIgPAAQgLAAgJAJg");
	this.shape_12.setTransform(-31.3,6.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAcBOQgDgJgCgPIgBgZIAAgIIAAgIQAAgSgKAAQgMAAgJAKQgFAGgKARQAAAogDAHQgDAHgGAAQgEAAgEgDQgDgDAAgEIABgFQABgDAAgMIABgPIAAhLIABgRIgBgKIgBgKQAAgEADgDQADgDAEAAQAJAAABAJIACASIgBAXIgBAXIABAJQAIgLAKgGQAHgGALAAQASAAAGALQAFAIAAARIABAUIACAVQABAMADAKIAAADQAAAEgDADQgDADgFAAQgHAAgCgIg");
	this.shape_13.setTransform(-43.3,3.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgGBMQgDgDAAgFIAAgEIABgFIgBgPIgBgQIgCgnIgDgqIgJAAQgXAAgNgDQgIgCAAgIQAAgFACgDQAEgEAEABIARACIARABIATAAIARgBIAXABIAYACQAEAAADADQADADAAAEQAAAFgDADQgDADgEAAIgYgBQgPgCgIABIgIAAIADAuIACAtIABALIABALQAAAHgCAFQgDAHgGAAQgDAAgDgDg");
	this.shape_14.setTransform(-55.9,3.6);

	this.instance_2 = new lib.wordsamstill_1();
	this.instance_2.setTransform(-7.3,0.7,2.341,2.341);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgLAMQgEgFAAgHQAAgFAEgFQAFgGAGAAQAGAAAGAGQAEAFAAAFQAAAHgEAFQgGAFgGAAQgGAAgFgFg");
	this.shape_15.setTransform(73.8,12.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgKAMQgGgFAAgHQAAgFAGgFQAFgGAFAAQAHAAAEAGQAGAFAAAFQAAAHgGAFQgEAFgHAAQgFAAgFgFg");
	this.shape_16.setTransform(66.7,12.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgLAMQgEgFgBgHQABgFAEgFQAFgGAGAAQAGAAAGAGQAEAFAAAFQAAAHgEAFQgGAFgGAAQgGAAgFgFg");
	this.shape_17.setTransform(59.7,12.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgIBgQgEgEAAgFIABgQIAAgPIgDhOIgegDQgMgBAAgMQAAgGADgEQAEgEAGAAIAdACIgBgTIgBgRQAAgFAEgEQAEgEAGAAQAKAAADAUIAAANIAAAHIAAAJIATgCQAOAAAFABQAIADAAAKQAAAGgEAEQgEAEgFAAIgHAAIgHgBIgTACIADBPIAAAGIAAAHQABAfgPAAQgEAAgEgEg");
	this.shape_18.setTransform(49.5,3.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgoA6QgSgUgBgfQgBgdAQgYQATgcAhABQAbAAAOAZQAMATgBAdQAAAdgQAVQgRAYgbAAQgXAAgRgQgAgXgbQgJAQAAASQAAAUAKAKQAKAKAMAAQAMAAAKgLQAMgLABgTQACg0gfAAQgSAAgLATg");
	this.shape_19.setTransform(35.4,6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAhBDIgEgeQgCgQAAgOIABgMIAAgNQAAgdgLAAQgPAAgMASQgNARgHAXIgBANIgBAOIABAMIAAAMQAAAHgDADQgEAEgGAAQgGAAgDgEQgEgDAAgHIgBgMIgBgMIACgmIACgnIgBgNIAAgNQAAgFAEgEQAEgEAGAAQAMAAABASIABAQQAXgfAWAAQAWAAAJATQAFANABAaIAAANIAAALQAAAMADASQADASAAALQAAAGgEAEQgEADgFAAQgNAAgBgMg");
	this.shape_20.setTransform(21.3,5.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("Ag7BlQgEgFAAgFQAAgGAEgFQAEgEAFAAQAJAAAVgCIABgaIAAgXIgCgXQABgdAEgwIgSAAIgSABQgGAAgEgEQgEgEAAgHQAAgMANgBIApgBQAaAAAoAFQANADAAAMQAAAGgFAEQgEADgFABIgXgCIgVgDQgDAoAAAiIAAAYIABAYIgBAXIArgBQAFAAAEAFQAFADAAAHQAAAFgFAEQgEAEgFAAIgXABIgYABQgGAAgTACQgRADgKgBQgFAAgEgDg");
	this.shape_21.setTransform(-36.1,2.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgDABIAAgBIAHABIgHAAg");
	this.shape_22.setTransform(-0.4,28);

	this.instance_3 = new lib.wordsbe();
	this.instance_3.setTransform(80.8,2.1,1.857,1.857);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_23.setTransform(95.4,10.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgLBOIABgnIACgnIAAgmIABgnQAAgLAIAAQALAAAAALIAAAnIgBAmIgCA1IAAAaQgCAKgIAAQgKAAAAgLg");
	this.shape_24.setTransform(62.7,2.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgLBOIABgnIACgnIAAgmIABgnQAAgLAIAAQALAAAAALIgBAnIAAAmIgCA1IAAAaQgCAKgHAAQgLAAAAgLg");
	this.shape_25.setTransform(56.6,2.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgJBOQgEgDABgFIAAgTIgBgUIABgZIABgYQAAgFADgDQADgDAFAAQADAAADADQACADAAAFIgBAYIgBAZIAAAUIABATQAAAFgDADQgDADgCAAQgFAAgDgDgAgGg7QgEgDABgGQgBgFAEgEQAEgDADAAQAGAAADADQAEAEAAAFQAAAGgEADQgDAEgGAAQgDAAgEgEg");
	this.shape_26.setTransform(50.6,3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAGAfIgEgZIgCgXIgIATIgRAtQgCAEgDACQgDAHgHAAQgIAAgIghQgEgQgEgbIgDgRIgBgQQAAgFADgCQAEgEAEAAQAJAAABAJIADAQIACAQIAGAvQAMgfANgsQADgMAIAAQAIAAADANIAHAoIAIAoIAIgdIAOg6QACgGAHAAQAEAAAEADQAEADgBAEIgBAFQgIAkgOArQgDAJgHALQgDAGgIAAQgLgBgHgdg");
	this.shape_27.setTransform(39.8,5.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgpAxIAAhKIAAgLIAAgKQAAgMAKAAQALAAAAASQAUgTAZgBQAIABAEAGQAFAHAAANIAAAIQgBANgKAAQgKAAABgLIgBgHIAAgKQgRACgJAIQgJAIgGAOIAAA5QAAAMgMAAQgJAAAAgMg");
	this.shape_28.setTransform(20.4,5.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgkAuQgRgNAAgZQAAgaAOgTQAPgVAYAAQARAAALAGQAOAIAAAPQAAALgMAJQgFAEgSAGIgoAUQAGAJAKAEQAJAFAKAAQAHAAAKgDQANgDAEgGQAEgGAEAAQAEAAADADQADADAAAEQAAAMgUAIQgRAIgPAAQgXAAgPgNgAgVgcQgJAKgEATIAhgOQASgKAIgHQgJgIgQAAQgNAAgIAKg");
	this.shape_29.setTransform(8.8,5.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgKAyIgRgsIgTgwIgCgFQAAgFAEgDQADgDAFAAQAGAAADAGIAbBLQAGgSANgfIAJgZQADgHAHAAQAFAAACAEQAEADAAAEQAAAEgSArIgWAxQgBAKgIAAQgHAAgDgJg");
	this.shape_30.setTransform(-2.8,5.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgkAuQgRgNAAgZQAAgaAOgTQAPgVAYAAQARAAALAGQAOAIAAAPQAAALgMAJQgFAEgSAGIgoAUQAGAJAKAEQAJAFAKAAQAHAAAKgDQANgDAEgGQAEgGAEAAQAEAAADADQADADAAAEQAAAMgUAIQgRAIgPAAQgXAAgPgNgAgVgcQgJAKgEATIAhgOQASgKAIgHQgJgIgQAAQgNAAgIAKg");
	this.shape_31.setTransform(-14.2,5.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAaA1IgDgYIgCgYIABgIIAAgLQAAgXgJAAQgMAAgJAOQgKAOgFASIgBAKIgBALIABAKIAAAJQAAAFgDADQgDADgEAAQgFAAgDgDQgDgDAAgFIgBgJIgBgKIACgeIACgeIAAgLIgBgKQAAgFADgDQADgDAFAAQAJAAACAPIAAAMQATgYAQAAQASAAAHAPQAFAKAAAVIAAALIAAAIQAAAJACAOQACAOABAJQAAAFgDADQgEADgEAAQgKAAgBgKg");
	this.shape_32.setTransform(-26,5.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AglBKQgQgQAAgYQAAgdAQgPQAPgSAXAAQAMAAAHAEIALAIQABguACgQQACgKAIAAQAKAAAAALQAAAPgEA0QgCAOAAAQQAAAkAEASIAAADQAAAEgDADQgDADgEAAQgHAAgDgKQgIAGgIADQgJADgHAAQgXAAgOgPgAgYABQgJALAAAWQAAAOAKAKQAKAKANAAQAHAAAGgDIANgJIADgEIgBgSIAAgNIABgNQgEgIgHgDQgHgFgKAAQgQAAgJAJg");
	this.shape_33.setTransform(-45.4,2.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAaA1IgDgYIgCgYIABgIIAAgLQAAgXgJAAQgMAAgJAOQgKAOgFASIgBAKIgBALIABAKIAAAJQAAAFgCADQgEADgEAAQgFAAgDgDQgDgDAAgFIgBgJIgBgKIACgeIACgeIAAgLIgBgKQAAgFADgDQADgDAFAAQAKAAAAAPIABAMQATgYAQAAQASAAAHAPQAFAKAAAVIAAALIAAAIQAAAJACAOQACAOAAAJQAAAFgCADQgEADgEAAQgKAAgBgKg");
	this.shape_34.setTransform(-57.4,5.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAiA3QgFgEgCgEIgSAJQgIADgEAAQgZAAgMgPQgLgNAAgcQAAgYASgTQATgTAXAAQAJAAAMAFQAPAGAAAJQAAADgCACQgCAEAAAKIgBAWQAAANACAIIAHATIACAGIABACQAAAEgDADQgDADgEAAQgCAAgGgFgAgRgaQgMAOAAAQQAAASAGAJQAGAJANAAQAIAAAIgEIALgIQgEgcAAgOIABgKIACgMIgHgDIgFgBQgPAAgMAOg");
	this.shape_35.setTransform(-69.2,5.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3,p:{x:-57.8,y:20.2}},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_3,p:{x:-57.8,y:20.2}},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]},28).to({state:[{t:this.shape_3,p:{x:-47,y:25}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance_1}]},1).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.instance_2}]},24).to({state:[{t:this.shape_3,p:{x:-40.8,y:26.5}},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.instance_3}]},22).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.9,-25.4,115.7,55.5);


(lib.tobe3talkbubblestill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.wordsstill();
	this.instance.setTransform(15.1,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AqZjKQEVhUGEAAQGGAAEVBUQEVBUAAB2QAAB3kVBUQkVBUmGAAQmGAAkVhUQkUhUAAh3QAAhHBmg7");
	this.shape.setTransform(25.5,-1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AhegyQAjAAAYALQAZAMAAARQAAAPgZALQgYANgjAAQgjAAgZgNQgYgLAAgPQAAgRAYgMQAZgLAjAAgAkmAYQAIgCAKAAQAVAAAQAIQAPAIAAALQAAALgPAHQgQAIgVAAQgWAAgPgIQgQgHAAgLQAAgLAQgIQAIgEAJgCQABAAABAAgACaBEQgygDgkgRQgtgWAAgcQAAgeAtgVQAtgVA/AAQBAAAAtAVQAtAVAAAeQAAAcgtAWQgtAVhAAAQgLAAgLgBg");
	this.shape_1.setTransform(-74.2,-21.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AnbDKQkVhUAAh2QAAhHBmg7IAXAAQA/ABAugWQAsgVABgeQEUhTGEAAQGHAAEUBTQEVBUAAB2QAAB2kVBUQkUBUmHAAQmGAAkUhUgAxfiDQgPgIAAgLQAAgLAPgIQAJgEAJgCIACAAQAIgCAJABQAWAAAPAHQAQAIAAALQAAALgQAIQgPAHgWABQgVgBgQgHgAqKiCQgxgDgkgSQgugVABgeQgBgeAugWQAtgUA/AAQA/AAAuAUQAsAWABAeQgBAegsAVQguAWg/gBIgXAAgAu/i2QgYgMgBgRQABgQAYgMQAZgMAiAAQAkAAAYAMQAYAMABAQQgBARgYAMQgYAMgkAAQgiAAgZgMgAxOi1IADAGIgCAAgAnZjKIAAAAg");
	this.shape_2.setTransform(6.4,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108.2,-31.4,229.1,59.4);


(lib.tobe3talkbubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_31 = function() {
		playSound("pop_up");
	}
	this.frame_33 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(31).call(this.frame_31).wait(2).call(this.frame_33).wait(1));

	// Layer 1
	this.instance = new lib.tobe3talkbubblestill();
	this.instance.setTransform(-80.1,9.8,0.019,0.019,0,180,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABLBVQgOgFgLgKIgHgGQgIgCgIgFQgPgIgRgDQgMgCgIgIQgWgGgCgWIgBgCQgUgGgVgGIgigJQgsgMAYgmIABgBQAFgRAWgBQBJgCBBAbQAgANAkAAQAmgBAXAZQAIAJgFANQgLAWgZAAQgDAKgHAGQASAZghAUQgFADgFAAIgHgBg");
	this.shape.setTransform(-43.1,14.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance,p:{scaleX:0.019,scaleY:0.019,skewX:180,x:-80.1,y:9.8}}]},22).to({state:[{t:this.shape},{t:this.instance,p:{scaleX:1,scaleY:1,skewX:0,x:0,y:0}}]},11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Scene3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// msg
	this.instance = new lib.tobe3talkbubble();
	this.instance.setTransform(20.8,-96);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1.5,1,1).p("AALgsQAAAEAAADQAAASgJAMQAAADgCAEQgBAFAAABQgIAQgBASIAAADQAAABAAAB");
	this.shape.setTransform(133.1,-3.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AALgpQgBAEgBAGQgGALgCAGIgCALQgGAMgCALQgBAFAAAKAgKAoQAAABAAAB");
	this.shape_1.setTransform(133.1,-3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF99").s().p("AgRA8QgNgCgFgLQgCgFAAgKQAAgLAEgGIAFgIQAFgHACgRQACgHAKgRQAGgJADgDQAFgFAJgBIABAAQAOAAAGANQAGALgHAMIgCAEIABAEQADAJgFAGIgGAJQgGAGgGAOIgGAMIgGAKQgFAJgKAAIgDAAg");
	this.shape_2.setTransform(136.4,-3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// animation
	this.instance_1 = new lib.new_arm();
	this.instance_1.setTransform(122.6,-20.5,1,1,-29,0,0,12.5,24.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(0.1,1,1).p("AAUg0QgRAVgIAVIgGARQgEAJgCAHQgEAPACAKQADAEABAB");
	this.shape_3.setTransform(132.4,-2.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AytTbIgFAAIw2AFIAIqbIgIx9QAFgLABgBQAVgoAjgoQBAhIBOg3QAKgHALgGQAagMAdgRQAsgXAugHQAFgBAGgBQACgBACAAQAKgCAGADQABABAJgBQAFgsAQgmQAKgYAUgQQARgPAPgKQgUgBgSAAQgHAAgHACQgYAIgbAAQALgRAPgMQAGgEAIgBQAUgSAegHQAUgFARAFQAPAHAEgIQAOgaAIgdQADgLACgLQAEgYAOgKQAAACABADQACAFACAFQALAVAPAYQAPgGAKgSQASgQAVgRQAdgXAmgUQAHgGAVgFQAFgFAIgDQAVgJAXgFQAGgBAFgBQAIgBAHgBQAdgBASAEQAdgCAZACQAFAAAFAAQAYABARAHQAFACAFABQAXAEAMANQgsAJgvAJQgNABgHALQgBACgBACQADAAAEAAQAXABAWgDQAGABAEgBQARADATgCQAmABARAbQgIAIgMgBQgWgCgXAAQgDAAgCAAA9BtdQgCACgDAFQAAABgBACIAAAAIgBAAQAAABgBABQgDAHgFAGQgDAFgDAEQgIAMgIALQgWAkgTAkQgJARgKAOQgMAQARgBA09yeQgLAAgJABQgFAAgDAAA1IyuQgLgBABAIAzlx+QARAAAOAIQAEACAEACQAZAOASASQANAMABAOQgOgFgPAAQgBAAgBAAIAAAAQgEABgEAAQgFABgGABQAeAOAKANQAWATgBAfQAEALAAAKAzSwkQAGgCAIACAzSwkQgnABgBAAQgHAAgDAAQABABABABQAAABAAABQABABAAAAQABADABACQAEAKADAJQACAGACAFQARgQAKgSQADgFAEgCgAyPvdQggAFALAiQAAACAJACQAfgCgIgjQgBgGgGgEQAAAAgBAAQgDgDgBgCAyzv7QAKgBAKAGAx1vTQACARgOASQgCADgDABQgHACgHAAQgDAAgDABQgTABgSgDQgDgEgEgBQgCgCgBgDQgBgBAAgBQgCgDgCgEQgCgEgBgEQgDgMADgPQADgGADgEQALgQANAAQAcgIAPAZQAFADAIAEQADAGACAFQAAADABACQApATAmAOQAIADAIAEQAbAMAPAXQAHAKAFANQADAHACAHQAGAaAAAdQAAArgCArQAAAFgBAFQgBAOgEAHQgCAEgBAFQgOAwgdAiQgEAEgCAFQgNAXgVAPQgEADgEADQgEAEgEAEQhDA8hfAJQgFAAgFACQgkAJgegJQgUgFgTgEQgbgEgZgIQgdgJgGgbA8RspQABgBAAAAQABgEACgEQAAgBABgCQAEgHAEgFQAAAAAAgBQAGgHAHgEQACgHAEgCQAQgGAIAHQABAAAAAAQACADACADQAMgbgBADQAAADAAABQABACAFgFQAYgcAfgdQALgLAMAQQAlAxAOA4QAUgVgBgeQgBgKABgKQADglgGghQATARAYAUQAFADADAFQACADACACQAJgEgBgQQAAgIABgHQABgNgDgNQgEgUgDgUQAVAIAUALQAHAEAJAIQADgIABgKQAAAAAAgBQABgKgDgMQgFgeAegKQAQgDAVgHQAKACAKgBQAsgIAvABQAHAAAGgBQAEgBAEgBQAGgBAGgDQABAAABgBQAcABAdAAA1Zv7QgGgGgLAEA1Zv7QgIgBgJgBQgQgCgSAAQgJAAgHAJQgKAJgEAMQgCAGAAAGQAHgDAIgDQAKgEALgEQABAAABgBQABAAAAAAQAJgDAKgDQAJgCAHgDQAEgCAEgBQADgBADgDQgCgDgDgCgA1tuyQgCAAgBABQgDAAgCABQgKADgHAIQgRASAEAcQACANAFAMQAHAPASAGQAaALAWgNQADAAADgBQAKgCAHgGQAOgJAMgNQAFgHADgJQADgIABgKQAAgFgDgFIAAAAQgCgFgDgEQgBgBgBgBIAAAAQgEgEgFgDQgBgBgCgBQgDgBgDgBQgKgBgFgBQgIgBgggBQgJgBgLgBgA1ZuwQgFgCgCABQgHgBgGAAA1AuhQAAAAgBAAQgCACAAgDQACABABAAgA1AuhQgMAGgQARQgFAGgCAIQgEAXASADQADABADACQAHAEAHgBQAGgBAGgFQAOgMAIgVQACgEAAgFQAAgIgCgGQgDgGgFgCQgCgBgCAAQgIgCgNAEAyxtDQgGgHAHgOQABgBAAgBQAIgNAPgKQAEgCAFgDQAYgCAQAPA9JtdQAAAAAAgBQAHgSATgIQAJACgCANQgBAHgBAHIAAAAQAAAIgBAJQgBACAAADQAAABAAABQABAKAaAQQgPAqATApQAEAIADAHQAHAPASAGQAFACAFACQAaAKAdgJQAmgMAXgTA9NtdQAAACAAACQAAACAAABIAAAAQAAABAAABIAAAAQAAgBABgBIAAAAQABgCACgFQgCAAgCAAgA9JtdQAEAAAEAAQAJgKAJAIQgKABgIABAy4pnQgWgCgPATQAHARAYgIQAbgVgBgjQgRgEgMAJQgDACgDADAgUhAQgCgTgEgSQAAgDgBgDQgDgNgCgNQAAgBAAAAQAAgBAAAAIAAAAQgGgcgIgaQgBgEgBgEQAAgCgCgGQgCgFgUhBQgJgfgFgLQgkhul9kFQhGg2hQgkQhRgthVgjQgXgJgXgHQgsgOhfgQArEm7QgGgKgKgCQgCgBgDAAQAHAeAWAeQAMASAKAVQAIARAMAPQAQAjATAeQABABABABQAAABABABQAAAAAAAAIAAAAQABABAAAAIgBAAIAAAAIAAAAQgBgBgBAAQAAAAgCAAQgBgBgCAAQgugLgyABQgcgBgcgCQgagCgYgFQgKgCgKgEQgwABgwABQgYAAgbAEQgbAFgkAQQgkAQggAWQggAWAAAxQgBAaAPAOQAJAVATADQAIABAHADQAbAKAcgMQALgEAKgFQAPgIAOgJQAGgDAGgDQARgHASgCQACgBADgBQATgGgJAPAprj/QATAFASAGQAIADAIADQAYAJAQAMQAMAIAMAJQATAOAXAOQAfAUAeAaQAEADAEAEQARAVAQANAprj/QAIAMAJAMQAIAJgEgNASnp1QAKgBAJgCQAFgBAEgBQAIgDAJAAQACAAABAAQAJAAAGgCQAEgBAEABQACABACAAQAIADAGAEQAEACAEACQAAABAAABQAAACADAAQAKAFAJAGQADADAEABQAKAIAIAJQABABABABQAAAAABABQABACACACQAAAAAAAAIABABQAHAKAIAKQABAAAAAAQADAEADADQACADACACQAEAEAEAEQABABAAABQAPAQAGAUQABAEABAEQADAMABANQAAACAAACQAAAFAAAEQAAABAAABQAAAFABAFQAAAEAAADQgCAZgHAYQgCAEgBAEIAAAAQgDAHgBAGQgFAMgEALQAAABAAAAQAAABgBAAIAAABQgFAPgFAPQgCAFgBAFQgBACgBACQgDAMACANATkkCQAAgHABgGQAEgMADgNQAAgBABgCQADgDAHgBQACAAADgBQADAAAEgBQADgBACgBQACAAACgBQADgCAEgBQAPgEAOgJIAAAAQACgDACgDQAGgHAEgIQABgBAAAAIAAgBQABgBABgBQABgCABgCQAAgBABgBIAAgBQAAAAAAAAQAAgBAAgBQABgDABgCQAFgQADgQQAAgCAAgCQAAgBAAgBQAAgBAAAAQABgEAAgFQACgPABgjQgCgCgBgDQgDgGgCgGQgHgQgFgSQgCgGgDgFQgBgDgCgDQgDgEgDgEQAAAAAAgBQgBAAAAgBQgDgEgCgCQgBgBgCgBQgFgDgEgDQgCgBgBgCIgBAAQgBAAAAgBQgBAAgBgBQgBAAAAAAQAAgBAAAAQgBAAAAAAQgBAAAAAAQgBgBgBAAQgCgBgBgBQgGgCgFgDQgJgDgJgEQgRgFgQgGQgDgBgCgBQgEAAgEgDIgDgCQAAABAAAAQAAABAAAAAT7ocQADgFAIABAUSoRQgCgCgCgBQgDgCgDAAQgDAAgDAFIAAABQgCAEABAGQAAAEACAFQAAAAAAABQABADADADQADAEADACQACAAACABQABAAACAAQADgBACgBQADgCAAgEQgBgIgDgJQgDgFgDgEIAEABQAGAAAFgBQAEgBAEgCATBpQQABgBAAgBIgBABIAAABIAAAAQAAABAAABQgCAMgGAMQgDAIgCAHQgBABAAABIAAABQgDAGgBAGIAAABQAAAAAAABQgBADgBADQAAAFgBAEQAAABAAABQAAACAAABQAAABAAABIAAAAQAAACAAACQgBAHgBAHQABAFABAFQAAADABADIAAAAQACAQAFAPQACAJAEAIQACAGACAFQADAKACAKQABABAAABQAAABAAAAQAAABAAAAQAAAAAAABQACAKAAAKQAAAJAAAJQgBAIgBAHQABAPgCAOQgBAEgBAEQgCANgCANQgBABAAABQAAAFgBAGQAAAAAAABQgBAEgBAFQgDASgGASQgCAIgDAHQgBADgBAEQAAACgBABQgDALgFAJQgBADgCADQgCAEgDAFQgEAHgEAHQgCADgBADQAAABgBACQgCAEgCAEIAAAAQAAACgBABQgBABAAABQgBADgBACQgDANABAPQAAACAAABQABAFABAEQAFgBAEgBQABAAABAAQABgBABAAQABAAACgBQAAAAABAAQAOgEAOgEQACgBACAAQAOgCAPgCQAGgBAEACQABABAAAAQACAAABABQAGADAHAEQABACACAAQAdADAdgEQALgCAMAAQACAAACAAQAHgBAEgFQACgEACgFQABgBABgCQAEgJAEgKIABAAQABAAABAAQANABAJAEIAAAAQAJADAHAIQAEAEADACQATAXAQAYQADAFADAFQAGANAGALQAFAJAFAHQAFAGAHAGQAGAFAIAAQAMABAJgGQAFgDAEgEQAPgNAPgPQADgBABgBQALgMALgMQAFgFAEgFQAGgKAGgJQABgDACgBQADgHADgHQADgIADgIQAAgBABgBQAHgLAFgJQAAAAABAAQAAgBAAAAQADgEACgDQACgDABgCQAFgGAEgIQABgBABgCQAAAAAAgBQACgBABgCIAAAAIAAAAIAAgBQAAAAAAAAQAAAAABgBQAAgBABgBQABgCABgCQAAAAAAgBIABgBQAAAAAAgBIAAAAQAAAAABAAQAAgBAAAAIAAgBQAAAAAAAAQABgBAEgDQAAAAABgBIABAAQADgCAGgDIAAAAIAAABQAAAAAAAAQAAABAAAAQAAABABAAIAAAAQAAACAAABQAAADABACQAAABAAAAIAAABQABABAAAAQAAABAAAAAS2oWQADAAAEAAQAAAAAAAAIABAAQADAAADAAATfoDQgBgBgCgBQgBAAgBAAQgBgBAAAAQgBgBgBgBQgBgCgBgBIAAAAQgBAAgBgBQgBAAgBgBIAAAAQgBgBgCAAQgDgBgDABQgBAAgBAAQgBAAAAABQAAAAgBAAQgBABgBACQgBABAAABQAAABAAABQgBABAAAAQAAACAAABQAAACAAACQABAGAEAFQAHgKAOgFQADgBACAAgATFnzQABAAAAABQABABACABQAFAGAIABQADABAEAAQAAAAABAAQAAgBAAAAIABAAQAAAAAAAAQACAAACgBQACgBAAgEQAAgCABgBQAAgBAAAAIAAgBQAAgBgCgCQAAgFgBgDQgBgCgBgBQgBgBgBAAATBoIQgKgBgDADQgBABAAAAQgCACAAABQgBABAAABQgBADADABQAEACAFABAUPoDQABABABAAQACABABAAQgEABgBgDgAUDn8QAEgKAIADAUEnPQAHAFAJAAQADABACgCQAAACgEADQgEADgDADQgDACgCADAUfmpQgBACACADQAAACABACIAAAAQABACABABQAEAFAGACAT0mVQAHABAGAAQALABAJgEQACgBADgCQACgFAFgBASfp1QgJgCgJACQgNADgNADQgNAEgLAIQgDACgCADQgRAVgKAXQgDAHgCAHQAAACgBADQgCAHgBAIQAAAFAAAGQABATgCAQQgCAPACANQABAEAAAEQACANADAMQACAGABAEQABACAAACQAFANABAOQABAFABAFQADAKAAALQABACAAACQAAAJABAJQABAMABALQAAAEAAADQABAPgBAPQgBAAABABQgBABAAAAIAAABQAAADAAADQAAAHgDAHQAAACgBACQAAABAAABQgEAMgDALQgGARgFARQgBAEAAADQAAACAAACQAAABAAABQAAACAAACQAAACAAACQAAACAAABQAAABAAABQAAAAAAABQgBAEAAADQgBAMABAMQAAABAAAAQAAACAAACQAAANACANQABADAAACQABAGABAGQAAACAAACQAAAAAAABQACAWAOAQQAAgNAAgNQACAKADAIQAEAIAEAHIABABQABADACACQABADACABQAAAAABAAIgGAJIAAABIAAgBIAAAAAQVibQABgBACgBQABgBABgBQABgBABAAQAAgBACAAQAEgBAQAHATxmPQADACACAFQABACAAABQAIALAKAIQADABAEAAQAEAAADgBASwjDIAFACQAEABADABQARAEAPAIQABABAAABQADACACgCQADgCAEgBQACgBADgBQAHgDAHgCQAAgBABAAQABAAABgBQANgEAOAAQAEAAAEABQAJgBALABQAFAAADADQABAAAAABQAHADAEAGQABADACACQACADACADQAEAGAGAHQAEAFADAGQAEAFgDAGQgDAFgCAFIAAAAAVLkSQgLAGgKAHQgIAGgJAEQgIADgIABQgIABgJgBQgHgBgIgFQgDgBgDgCAUjmdQgJAOAAAPAaRkwQgBgCgBgEQABgBAAgBQAAgLgGgIQgGgMgLgMQgBgBgBgCQgKgKgGgOQgHgNgEgNQgGgSgEgSQgHgcgCgcQgCgcAGgcQABgEAAgEQAHgeATgXQAHgJALgCQACAAACgBQANAAAOAAQACAAACAAQAHABAGAEQABABABAAQADACADABQAFADAEAFQAAABABABQAAABABAAQADAFADAEQAAABABABQABACAAACQACAFACAFQACAGACAFQAEAJAEAJQADAGACAGQADAGADAGQAEAJADAKQACAJACAJQAAADABAEQABADgBAEQgBALgBANQAAAHgCAHQgDAOgHAPQgDAGgEAGQgKAVgHAWQgBADAAADQgBACgBACQAAACgBACIAAABQAAABAAABQAAAAAAAAIAAABQgCAUACAUAarpiQgFADgCgCQgEgCgDgCQgCgBgCgBQgTgDgLASQgQAZgDAeQAAAFgBAEQgBAdAGAcQABAFABAFQAGAcALAaQAHASAOAKQADADADACQACADAEAAQACABABABQACAAACAAQAIAAAGgDQAFgDAEgHQAFgJADgJQAHgVADgVQAGgcgCgdQAAgDgBgDQgFgdgMgbQgHgRgIgRQgDgFgFgCgAVRkJQANADAKAKQAPAOAIAUQACAEACAFQAHAOAEAPQABACAAACQABABAAABQABADABADQABABAAACQADAHAEAHQABADACADQAGAJAIAJQAJAKALAKQAMALAIANQABACABACQAGAIAGAHQAEAFAGABQADAAADgCQABgBACgBQAMgIALgKQAFgFAGgFQAGgFAFgGQABgBACgCQAMgLALgKQABgBACgCQACgEADgDQAFgGAEgFQAEgGAEgGQADgFADgFQABgDACgDQABgDACgDQABgBAAgCQAEgIAFgIQAAAAAAAAQABgBAAgCQABgBACgCQAAAAAAAAQAAgBABgBQAAgBABgBQACgFABgEQAGgRABgSQAAgBAAgBQAAgEABgCQABgDABgBQAAgBAAAAQACgBABgBQABgCABgBQABgBAAAAQABgBABAAQABgBABAAQABgBABgBQAAAAABgBQABAAAAAAQACgBACgBQAAAAABAAQABAAABABQABAAAAAAIABAAQAAAAABAAIAAAAQAAAAABAAIAAAAQAAABABAAIAAAAQAAgCAAgCIAAAAQAAgFgBgCQAAgEgCgDQgCgBAAgCQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAAAQgBgBAAgCAaUknQgBgEgBgDIgBAAQAAgBAAgBAa9kdQACgBACgCIABAAQAAgBABAAIABgBIAAAAQACgBABgBIABgBIAAAAQAAAAABgBQAAAAABgBQAAAAABAAQAEgEAFgEQAFgEADgEQAEgEAGgCQAJgBADAHQABABABABQADAJgHAFQgCABgBACQgFAEgHACQAGgBAGgBQANgCANAAQACAAACAAQAJABgCAJQAAACgBAAQgJAJgNABQgBAAgCAAQgUAAgSACQAAAAgBABQgCAAgDAAQAAAAgBAAIAAAAQgBAAAAAAIgBAAQAAAAAAAAIgEAAQAAAAAAAAIgBAAQgBAAAAAAQgBAAAAAAIgBAAQgBAAAAAAIAAAAQgBAAAAAAQgCAAgBAAQgBAAAAAAIgBAAQgBAAgBgBIgBAAIAAAAIgBABQAAAAAAAAIAAAAQAAABgBAAQAAAAAAAAIgBABQAAAAgBABIAAAAQAAAAgBAAIAAAAQgBABgBAAIAAAAQgBABAAAAIgBAAQAAAAAAAAIgBABIAAAAQgBAAAAAAIgBAAQAAAAAAAAQgBAAgBAAIAAAAQgBAAgBABQAAAAAAAAIgBAAQAAAAAAAAIgBAAQgBABAAAAQgBAAgBAAIAAAAIAAABQgBAAgBAAQAAAAAAAAIgBAAIAAAAQgBAAgBABIAAAAQAAAAAAAAQgBAAAAAAIgBAAIAAAAQAAAAgBAAIAAAAIgCABQgBAAAAAAIAAAAIgBAAQgBACAAABQAAADAAADQAAABAAAAQAAABAAAAQAAABAAABQAAABAAABQABAGADAcQAAACABADIAAAAQAAADABACAbGkbQACABADgBQACAAADAAQAGgBAFgBQADAAADgBAbLkEQADAAADAAQAFABAFABQAOAAANADQAEAAADAAQACABACAAQAHABAGADQADABgBADQgDAKgIAFQgBABgCABIAAAAQAGASgDAEQgCACgCACQgCACgEABQgHAEgJgBQgDAAgDAAQgGgCgGgBQgKgBgHgGIAAAAQgBgBAAgBQgCgFACgDQAAgBAAAAQABgCAEgBAa+j2QgBAIADAFIAAAAQAAAAAAAAQABABAAAAIABABQACACADABIAAAAQABABABAAIABAAQAAAAAAAAQABAAAAAAIABAAQAAABABAAIAAAAQAMAEAMgBQAMgBAKgDQADgBAEgBAaxkVQgCAAgBAAQgBAAgBAAQgBAAgBAAIgBAAQgDABgDAAQgBAAgCAAQgCAAgBAAIgBAAQgBAAgBgBIgBAAQAAAAgBAAQAAAAAAAAIAAAAQgBAAAAAAAa/jJQgBADAAADQgBACAAACQAAAEgBAEQAAADAAAEQAAABAAABQAAADgBADQAAABgBACQAAABAAAAQgBADgCACQgCAAgBABQgCABgBAAQgEABgDgDQgFgEgDgFQAAAAAAgBQAAgCgBgCQAAAAAAgBQgCgDgBgDIAAAAQgEAAgDAAAdDAMQgPgFAAgOQAAgCABgCQADgGgBgHQAAgLAEgKQAIgTAUgDQAEAAADABQANAGAFAMQgBgCAAgCQACgMAJgFQAWgOALAVQAAgEABgEQABgBAAgBQAIgNANgIQANgIAMAGQAKAFADAMQAAABABABQABgBAAgBQAAgJADgFQAHgOAQgBQAEgBADAAQAOAAAHAMQADAGACAGQADAJAEAIQACgGAGgEQACgBACAAQAUADAQAPQADADACACQAAgCABgBQAJgJAKAKQAEAEAEADQAIAIABAKQABAHAAgEQABgFAHAAQASABACAVQAAADABABQAEAGACAGQAAAEABAEQABAMgFAKQgFALgHgDQADAEABAEQABACABACQADAMgDALQgCAMgLABQACABADABQACACACABQAUATgJAYQgDAAAAgBQgCgGAAAEQgFAZgUAOIAAAAIAAAAQACgFADgEQABgBABgBQAFgHAEgKEAh1AC2QADACAEAFQAFAFAGAEQAMAIAJALQAiAUAQAcQABAHADABQAKARANAbIAAEWEAirAFfQAIAOACAOQACAOgEAPEAjiAJTQgBABgBABQgBABgBABQAAAAgBABQgBABAAABQgBAAgBABQAAAAAAABQgGADgFADAe2LHQAEgFAEgEQAHgHAIgGQAGgFAFgFQADgCAEgBQACABABgBQAHgCAIgBQACABADgBQARAAAQgDQAEABAFgBQAKAAAKgCQAEAAADgBQANgBAOgCQAJAAAJgCQAGgCAFgBQABAAACgBQAPgEAPgFQAKgDAKgEQAQgIAPgNQAEgEAFgFQAAAEABAFQAAAFAAAGQAAAJAAAJQAAACgBADQAAACgBACQAAADgBACQgBAFgCAEQgDAJgEAJQgBACgBADQgBADgBACQgBAFAAAGQAAACgBACQAAACAAABQgBABAAABQAAAEAAADQAAABAAACQgBAFABAFEAjBAL4QgDADgCADQgBAAAAAAQgLANgGACQgMAFgMACQgHgBgGABQgGAAgGABQgSABgSABQgZACgYAFQgFABgEACQgHACgGACQgFABgDAEEAjCAMDQgBAJAAAJQAAAJAAAKQAAAJAAAIQAAAIAAAIQAAAEgBAEQgBAJABAKQAAAJAAAJQAAAKAAAKQAAAIAAAJQAAAKAAAKQAAAJAAAKQAAAJAAAJQAAAKAAAKQAAAEAAADEAhPACAQgGAEgJAAQgLgLAFgGQACgDAGgCQgFABgDgBQgLgDACgQQACgGgBAAQgbgDgDgbQgFAPgTgHQgDgBgFgDQgDABgFADQgEAAgEAAQgBAAgBAAQgXAAgMgMQgCABgBABQgPAIgSABQgBAAgBAAQgBAAgBAAQAAAAgBAAQgBAAgCAAQgDAAgEAAQgTABgGgNQgCANgKADQgBAAgBABQgDAAgDAAQgCAAgBAAIgBAAQAAAAgBAAQgBAAAAAAQgCAAgDgBQAAAAgBAAIAAAAQgBgBgBAAQgBgBgBAAIAAAAQgCgBgBgBQgGgFgBgEIAAgBQABAAACgBQACgBAAgFQgGADABAEQgQAFgCgRQgBgKAEgGQADgFAEgDQADgCADgCAdPAKQgFgCgHAEAeoBuQACgCACgDQABgCACgDQACgIgCgIQgBgBgCgBQgBgBgCAAQgDgBgCAAQgBgCAAgBQgDgCgDAAQgBAAgCABIAAAAQgBAAgCABQgCADgCACQgBADgBACQgBABAAABQADAAADABQAEAAACABQAAAAABAAQABABACABIAAAAQAEACACAEQADAFgBAGgAekBwQACgBACgBAeQBZQgBABAAAAQgCAHACAIQABAEADACQABABACAAQABABABAAQADABADgBIAAAAQABAAAAAAQABAAABAAQABAAABgBIAAAAQABAAAAAAQACABABgCQAAAAABgBAfRD/QgTAFgUgDQgBAAgBgBQgBAAgBAAQgEgBgEgBQgBgBgBAAQgBAAAAAAQgBgBgBAAQgFgCgEgDQgMgHgEgLQgBgBAAgBQgHgMgJgJQgCgCgEgHQgDgGgCgDQgDgEABAAQAAgBgEgFQgCgDgDgFQgFgNgCgPQAAgBAAgBIAAgBIAAAAQAAgBgBgCQgBgbAMgqAerDoQAAAAgBAAQgDAAgDgCQgFgCgEgEQgEgEgCgFQACgHABgGQABgCAAgDQAAgCAAgDQAAgKgFgIQgCgDgCgCAXPJEQABgBABgCQAFgHAFgHQADgEADgGQACgDACgEQAFgKAMgCQADgBADAAQARgDASgCQABAAAAAAQACAAAQgOQABgEAAgIQgBgHgCgHQgFgdgJgbQgBgDgBgDQgGgTgDgUQAAgDAAgCQAAgQABgQQAEgcALgZQADgGADgFQACgBAAgCQABgCABgDQAGgJAFgIQAHgMALgHQABgBAAAAQAJgEAFgFQAGgFAAgBQABgCAEgCQAEgBAFgFQAMgKAMgJQACgBABgBQAWgNAagFQAKgBAKgBQABAAAAAAQANgCANgCQANgCANgCQAJgCAJgBQAPgDAPgHQANgGAKgJAcfE3QgBAAAAABIABAAIACAAQAAAAAAgBAZ6IIQABgCABgBQABgDACgEQAGgLAEgLQABgFACgEQAEgVABgUQgBgdgIgaQgBgEADgCQANABAMACQAdAHAbgMQALgEAJgIQADgCACgDQAOgMAKgOQAGgKAFgMQAAAAAIABQAAgBABAAQABABAAAAQgCAAAAAAAe0DmQgEACgFAAAe0DmQgBAAAAAAQgBABgCAAQgDABgCAAEAhpAC/QgEAHgDgJIAAgBQgBgDgBgEQAAAFgBAFQgHATgQgPQgKgJgCgQQACgFABgDQAEABACgBQAJgEAFgIQAEgIgBgMQAAgFAAgHQgBgBAAgBQgHgIAAAGQgBABAAACQAAAEACAHEAhWAB2QADAFACACEAhwAC0IAAAAQgBgBAAgBQAAgBgBgCQABgNgCAOQAAACAAACQAAAAgBABQAAABAAABQAAAAAAABQAAgBABgBQAAAAABgBQAAAAABAAQAAgBABAAgEAh1AC2QgBAAAAAAQgBABgBAAQgBAAgBgCQAAAAAAgBEAh6ACuQgBACgBACQgCACgBACEAhpAC/QABgCABgDQAAgBABgBQgCADgBAEgEAhWAB2QgCAHgFADAfbBmQAQgCACAVIAAAAQgDADgEACQACgBAFgCAfvB7QgBgBgBgBIAAAAQABgBABADQALgKgDgJQgDgJgGgEQgHgEgGAAQgHAFgEAHQgCAEgBADQgCAJADAFQADAGAIABQACABABgBQABAAABAAQABAAABgBQAAAAAAAAIAAAAAedCoQATAMAYgBQALAAAFgFQgDAGgEAGQgMAQgGASQgEAIgHACAeoCOQALgBAKAEAamExQAKgLAOgHQAQgIAQgGAamIgQALABAKAEQAFACADADQABAFADACQABABABADQAFAJgFAKQgCAGgFADQgGACgIAAQgCgBgBAAQgNgGgKgJQgEgDgDgGQgFgGgHgCQgIgDgKAAQgIAAgHAEQgCABgBABQgGAEgFABQgCAAgCAAQgBABgCAAIAAAAQgFABgFABQgCAAgCABIAAABQgBAAgBAAQgFADgEAEIAAABQgBAAAAABIAAAAQAAAAgBAAQAAABAAAAQgBAAAAABQAAABgBAAQgCADgBADQAAABAAAAIAAAAQgBAAAAABQAAAAAAAAQAAABgBAAQAAABAAAAQgCACgBACQgDAHgFAHIAAABQAAAAAAAAQgHAKgPACQgJAAgFgEQgBAAABgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAgBAAAAQABgBAAgBQABgDACgFQACgDABgDQAEgIAEgGQACgDACgDQAAgBAAAAIAAAAQADgEACgEQABgCABgBQABgCABAAQABgDADgBAamIgIAAAAQgDAAgCgBQgCABgBAAQgIgBgHgDQAAAAAAAAQgJgGgHgIQAAgBgBgBQgBgBAAAAIAAAAQgBgBgCgCQAEACgBAAIAAABIgDgDAbyIUQgIgBgHgCQgPgDgPABQgEAAgEACQgGACgGACQgHACgEAJAXVJVIAAAAQABgBAAAAIAAAAQAGgMAIgKQACgCAAgCQACgFAEgBAX7JrQgIAAgFAAQgHgBgFgHQgBgBAAgBQACgDABgCIAAgBQADgFADgFQAFgHAHgGQACgDACgDQABgBACgBQAAAAAAgBQABgBAAgCQAEgHAGgCAXMJLQAAgBAAgBQABgDACgCQgBACgBADQgBABAAABgAXVJVQgIgHgBgDAXaJeQgJgCAEgHAbTOqQgEgHgBgHQABgDgBgDQgCgJgCgKQgBgBABgCQgCgEgDgEQgGgKgEgNQAAgCgBgDQgIgcgOgYQgJgQgKgPQgBgCgBgBQgBgCgBgBQgLgLgEgJQguhIgJgNQgFgGgDgGIAAgBQgBgBAAgCQgEgIgBgJQgCgJAAgJIAAAAQAAgEAAgFQAAgDAAgTAa/K2QAFAMAGAMQACAEACAEEAhEAFCQAHAKAGAKQABACAAACQACAGgEABQgIADgHAHQgKAHgIALQgCADgCADQgGAKgEAKQgCAEgCAFQgFANAAAOQAAAQACAPQABAEABAEQAJAaAPAWQACACABACQAKANAOAEQAEABADABQAEAAAFAAQAEAAAEAAAfaG6QgBgDAGAAQAJABAJAAQANABALADAe0HNQACAGAEAFQADAEACAEQADAGABAGQABAFAAAGQgBAJAAAJQgBACAAABQAAABAAABQAAAEgBADAf/I0QgLACgKAEQgCACgDABQgEABgDACQgOAFgNAGQgDABgDABQgHADgHADQgMAFgKAHQgGADgEAEQAAABgCAAQgHAAgHgDQgMgEgMAFQgDADgDABQAAAAAAABQgRAGgKAOQgDAFgEAEQgGAJgHAJQgCADgCADQgEAIACAKQAAABABABQADABACAAQADAAACgDQAIgIAHgIQAGgFAHgBQACAAACgBQAJgCACAHQgFAFgHADQgBABgCACQgRAOgBAWIAAAAQAAACAAACQAAACAAACQAAABAAABQAAABAAABQABAJADAIQAAABABABQAAAAABAAQAAABAAAAIAAAAIAAAAQACABABAAQAEAAACgDIAAAAIAAAAQgBgJABgIQADgDAAgDQABgLAFgIAd+IJQACAAADABQACACADABQAPAFAOAGQAIAEAHADQAEABAEACIABAAQABAAACABQABAAAAAAQAcAKAcAFQACAAAEACQAAgBABAAQABAAABgBQABABAAAAQACAAABgBQACAAACAAQAMgBAMgDQATgDATABQADABADgBIAAAAQAIABAEAFAf/I0QAAAAAAAAQABAAAAgBQACAAABAAQADABADgBQABAAAAgBAcfE8QACAKgBAMQAAAEABAEQABAcARAWQACADADACQAIAGAJADQAGACAGADQANAEAMAGAdUGkQAAgBAAgBIAAAAQAAAAAAACQAAABAAABQAAADAAACQAAACABACQAEAbAQAWQAHALAGAMIAAAAQACACABADQACAEABAEIAAAAAcnKbQAAgEAAgDQAAgBgBgBQAAgFgBgGQAAAAAAgBQAAAAAAgBQgBgBAAgCQAAgBAAgBQgBgEAAgFQAAgBAAgCQgBgEgBgEQAAgCAAgCQgBgBAAgBQAAgBgBgCQgBgFgBgFQAAgCgBgBQgCgDgBgEQAAgCgBgCQgBgCgBgCQgDgHgDgGQgFgIgFgHQgBgCgBgCQgBgBgCgCQgBgBgCgCQgHgGgFgHQAGABAHABQAcAFAdABQAEAAAEABQAfADAWgTQADgEAEgFQABABAAABQABACAAABQADAJADAJAcwLYIAAAAQgGgBgCgCQgOgGgPAAIAAABQACACABACQAAABAAAAQAAABABAAIAAAAQABADACAEQAAAAAAABQAFAJADAKQABADABAEQAAAAAAABQAAAAABABQAAACABABQAEAQACARQADASgBATQAAAUAAAUQABAIADAGQAFAMAIALQAJANAIAPQAAABABABQAHANAGALQABACABABQAIAKgDAPQgBAEgCADQgDACgCADQgEAHgKACQgKAEgMgDQgRgDgSgBQgCAAgCAAQgPgBgLAEQgCACgBABQgGACgFAEQgBABgBABQgBAAgBABQgBAAAAAAQgBABgBABQgFADgEADQgCABgCABQgBABAAAAQgCABgDABQgBABAAAAQgBAAgBABQgBAAAAAAQgCABgBAAQgDACgCABQgHADgGAEQgBABgBAAQgFACgDADQgDADgCAEQgBABgBABQgCACgCABQgBABgCAAQgBAAgBABQgEABgDADQgMACgLAHQgBABgCABQgOAJgPgFQgGgCgGgDQgBAAgCgBQgGgGgDgHQgBgBAAgCQgCgNAHgLQABgBABgCQABgEADgCQAAgBAAAAQgCgIACgDQABgBABgBIAAgBQAEgEAJAAAbVRwQgFADgFABQgBAAgCABQgDABgDgBQgBAAgBAAQgJAAgHgEQgBgBgBgBQgDgEABgHQACgOALgLQABgBAAgBQAAAAABgBQACgCADgDIAAAAQABAAABgBQAHgDAIgDQABgBABAAQAAAAABAAQACgBACgBQAHgCAHgBQABgBABAAQAHgCAIgBQAbgHAeAAQABAAAAAAQAdABAdAAQAIAAAHgCQAHgBAHgEQACgBACgBQAHgFAHgDQABAAACgBIAAAAQABgCABgBQACgEABgFQABgBAAgBQADgRgBgTQgBgCAAgDQgEgcgTgWQgCgCgCgDQgKgKgHgOQgOgagOgZQgOgagLgbQgKgZgFgbQgBgCAAgCQAAAAAAgBIAAAAQAAgBAAgBQgBgCAAgBQgCgLAAgKIAAgBAcyK0QgDAWABAHQAAAAAAABIAAAAQAAABAAACQAAABAAACIAAAAAdQLsIAAAAQACgBAAgDQACgFACgFQAAAIABAIQAAABABABQAGAHAIAAQABAAABgCQAMgEACgLQABgEACgEQAAgBAAAAQABABAAACAcLLPQAAAAAAAAQgCgFgBgFQgBgCAAgCQgJgZgSgSAe2LHQgDADgCAEQgDAFABAGQgBACAAABQACAGAAAJQAAAFgDAEQAAACgCABQgFAIgHABQgBgEgBgEQgCgEgCgFQgBgDgBgDQgBgJgBgKQAAgBAAAAQAAgFAAgBAeXLpQgBgCAAgBQgCAFgBAGQgCAHgGADQgFADgEgDQgJgGABgLQAAgCAAgBQABgEgBgDQAAgJAAgJQAAgIADgDAe2LHQACABACAAQAHADAGADQADABADABQAYAHASATQAEAEACAFQANAWgCAaQgBAEgBADQgCASAAAJQABAFAAAEQAAAQgEAPQgIAbAAAdQAAAEgBADQgCAJACAKQABAGABAIQABAMAFALQAFALAGAKQAAAAAAAAQABABAAAAQAEAHAGAGQACACABADQAJAKAGAMQAIANgBAQQAAAJgEAHQgHAMgQgCQgMgCgNgBQgCAAgCgBQgRAAgRAAQgBABgBAAQgBAAAAAAQgJAAgHADQgCABgBABQgCABgDAAQgBABgCAAQgDABgEABQgBABAAAAQgQAEgPAGQgHACgBABQgCABgLAEQgKAEgMAFQgLAFgEACQgEACgFAAQgRACgRgBQgBgBgBgBQgGgEABgHQAAgFAEgBEAjAAP0QgEAAgEAAQAAAAgBABQgBAAgCAAQgHAAgHAAQgJAAgJAAQgKAAgJAAQgJAAgKAAQgIAAgJAAQgJAAgJAAQgJAAgJAAQgKAAgJAAQgJgBgJAAAcFR0QgEABgEgCIAAAAIgBAAQAAgBAAAAIAAAAIAAAAQgBgBgBAAQAAAAgBgBIAAAAQAAAAAAgBQgDgJAJgFAb5RwQgBABgBABQgGAEgFAAQgLACgFgHIAAgBIAAAAQgBgBgBgBQgCgEABgFQADgHADgHAcbR7QgGACgEgCQgCgBAAgCQgBgBAAgCQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAgBQABgDADgDAfCRZQgBAAgBABQgCABgCAAQgBABgBAAAZGP7QgCgDACgEQACgEAEgBQAAAAABAAQAAgCABgCQABgCACgBQABgBABAAQAEgCAEgDQAUgBAMAAQADgBAEAAQADAAAEAAQARAAAMgFQADgBACgBQABAAABgBQAGgCAEgEQABgBABgBQADgDADgCQABgBABgBQACgDADgDQADgBABgFQAAAAABgBQAEgGACgHQABgCAAgCQAAAAABgBIAAAAQACgLAAgNAZJQNQABAAAAgBQABAAAAAAQAEgBAGACQACABABAAQAGAAAHAAQACgBACAAQABAAAAAAQADgBADAAQABAAACgBQAAAAABAAQAEgBAFAAAVahiQAAAcgNAaQgCAEgCADQgCAEgDADQgDAEgDAEQgCADgDADQgBACgCACQgBABAAABQgGAIgGAFQgIAKgHAKQgEAGgDAHQgCADgBACQAAABgBABQAAACgBACQgEAZADAdQAAACAAADQgBABgBABQAAABgBABQgKALgNAHQgBABgCAAQgEABgDADQgHAEgGACQgLAGgOACQgGAAgHAAQgeABgdgDQgKgCgKgEQgCAAgCgBQgQgHgMgLQgKgKgHgNQgEgHgCgIIAAgBIAAAAQgBgBAAAAQAAgEgBgEQAAAAABgBQACgDACgCQABAAAAgBQALgJALgJQACgBABgBQADgCADgBQAOgHgCgPQgCgMgGgJQgBgBAFgNASEhOQAAABAAABIAAABQABACABADQABAFABAFQABACAAACQAFAQACARQACAKAAAMQACACACAEQABABAAABQABADAAAEQgGgDgFgDQgHgEgJgCQgTgEgMgNQgBgBgBAAIAAAAIAAAAQAAABgBAAIAAAAASMiIQgDACgBAFQAAABgBACQgBACAAABAQZibQgBAQAEAPQAAADADACQABACAAACQABACAAACQAEAGABAEQACACABABQABAIAIACQABABABAAARcgQIAAgBQAAAAgBAAQAAgBgBgCQAAAAAAgBAQHDUQAAgIAAgHQAAgDAAgEQAAgPACgPQAFgdAMgbQACgEACgEQADgGAHgFIAHgFQgBABABAAIAAABQABAAAAAAARcgRQgBgCgBgCQgDgKgDgKAQHDUQAEAAAEgFQAGgGAIgDQAEgBAEgBQAXgIAYgCQALgBALABQAYAEAUAMQAJAHAKAHQACABACACQAIAIgFAWIAAAAQAhgmAagNQADgBADgCQAJgDAJABQACABACABQACACACABQACABABABIgCgFQgBgFADAIQAAABAAABARNJvQgBgFgBgGQgEgYgFgYQgEgbgGgbQgBgFgBgEQgGgdgHgdQgEgUgEgTQgFgXgGgXQgGgdgHgdQgEgOAAgOQgCgbAEghAUNBxQAAABAAABQAAAAAAABQAAAHADAHQABAKABALQABANgCAMQgBALgCALQABACACAFQAGARACAaQACAZAAAIQgBAbgFAaQgFAbgEAcQgDAdgGAeQABAEgCAFQgEAUgGATQgDAIgCAIQgBAEgBAEQgDAJgDAJQgBACAAABQgCAFgBAEQgDAMgDAMQgGAegFAbQAAADAHAIQgDAHgCAGQgFAPAAAIQAAAeABAdQAAAQgCAQQAAAAAAAAQAAAFAAAFQAAAQgBARQgBAFAAAFQAAACAAABQABAdgCAcQAAAPgBAOQAAAWAAAVQABAEAAADQACAPADAPQAAAHADAHQABAGACAHQAAABABABQACAHADAGQAKASATAMQADACAEABQABADABABQAGAEAHACQABABACABQAMAFAJAHQAIAGAGAIQABABABABQABACABABQAEAFgDABAUNBqQAAABAAABQAAABAAABQAAACAAABQAAABAAACQABACABACIAAABQAAAAAAABQAAAEABAEASwD5QABAFAAAEQABAdABAdQABAdgCAdQgBAegFAdQgBAGAAAGQgEAdgBAdQAAALgBAMQgCAdACAeQgBAHABAFQAAADAAACQABADAAADQAAACAAACQAAAGAAAFIAAABQAAAGAAAGQAAABAAABIAAAAQAAABAAAAQAAAIAAAIQABAIAAAIQABAEAAADQAEAdAEAdQADANgBAPQAAADAAACQABAMABANQABANgBANQgBAEAAAEQgCAdgFAdQAAAEAAAEQgFAcgDAcQgDAaABAbQAAADAAACQAAAOADANQAAADAAADQAAAGgCAPQgNAJgEAEQgGAGgHAHQgEAEgEAEQgBABgBABQgKAMgLAKQgGAEgFAFQgGAFgEAHQgBABgBACQgHAQgPANQgJAIgNACQgSABgSgBQgKAAgIgEQgLgFABgLQABgIAIgDQACgBABgCQAIgGAHgFQAPgKAMgMQAQgPAOgRQADgEADgEQAKgRAUgOQABgDABgEQABgDABgEQAEgOABgOQAAgOgCgPQgDgcgBgcQAAgeAAgeQAAgdgBgdQAAgPgBgQQAAgDgBgEQgCgdgCgeQAAgJgBgJQgCgPgCgPQgBgDAAgEQgCgIgBgJAgQghQgCgEAAgGQgBgLgBgKQADAPABAQgAnKFSQAWAHAcAGQAcAGBIgOQAggGASgBQBMgUA1gyQA0gyADgGQALgWAIgZQAGgFABgHQAMgOAFgSQAMgtADgyQACgYgBgZQAAgEgBgEAVBRiQgKAEgMAAQgQAAgPgGQgFgCgDgEQgBgBgBgBQgHgLgKgKQgBgCgDgCQgHgEgIgDQgCgBgDgBQgIgCgIAAQgDAAgCAAQgOgBgTgNAvEhFQAFgDAFgEQAGABADAAAwChaQgBAJAGAHQALAQAZAAIAAAAQAFgKAQgBAvZg6QAFAAAFgBQACgDAEgCQACgCADgDAuJgnQgMADgKAKQgDAEgDAEQgDAFgKABQgiAGgGghQgCgMADgHIAAAAAwChaQACgHAFgHQAPgVATAMAuVgQQgSgBgKAHQgLAIgBAQQgBAFADAFQANAaAlgHQABAAACgBQAEgBADgCQAQgKAJgPAuGAqQgBABgBABQgRAPADAaQABAOALAMQAEAEAEAEQAMAOAbgDQAFgCAFgBQALgCAygzQBLArA6BqQAdBLCoAoQggBugMAXQgNAWgJAVQgXAwgiAoQgJAKgJAKQAAAAgBABQgDAEgEADQgaAYgjAVQhRAwhMA5QgTAOgUAJQhTAlheAEQgKABgKAAQguACgtgCQgOAAgMAEQgJADgKAAQAAAAgBAAQhiAAhjgBQgxAAgvgLQgJgDgKgCQgNgDgNgDQgzgKgygNQg4gPgughQgVgQgRgRQgFgGgKgKQgjgigsghQgGgEgGgEQgXgQgUgLQgEgCgEgCQgDgBgDgCQgbgTgigQQgSgJgPgMQgCgHgGgBQgUgPgLgQQgPgUgIgQQgrhQgbhYQgKgegJgeQgCgHgCgHQgBgDAAgDQAAgJgFgHQgCgEACgEApPKHIATAAIABAAQAAABgBABQAAABAAABQgFARgCASQgJBcAABeQABBgAABgQAABUgCBTAytTbQAAAAAAgBQgDgGgCgEQgDgYgBgWQgEgNgBgNQgCgjAAgjQAAgcACgcQAEgwADgwQABgWAKgIApNTbIpgAAA/5h9QgRgMgNAWQguBTgpBWQgHAVgHAUQgQAxgQAyQAAAAgBAAQAAABAAACQgEAMgEAMQgFAhgJAhQgOA0gJA1QgFAagHAaQgBAEAAAFQADAXgGATQgCAGgBAIQgCAJAIAG");
	this.shape_4.setTransform(25.2,15.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#FFFFFF","#6699FF"],[0.325,1],2.4,0,0,2.4,0,13.6).s().p("AAFB2IgEgBQgBgBgDgDIgFgEQgPgLgHgRQgLgbgFgbIgDgKQgFgaABgdIAAgJQADgeARgaQAKgRAUADIADABIAGAFQACABAEgDQAGACACAGIAQAiQALAbAGAcIABAHQABAbgFAcQgEAVgGAUQgDAKgFAIQgEAHgGADQgGAEgHAAIgEgBg");
	this.shape_5.setTransform(194.6,-33.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#000000","#996600","#996600"],[0,0.427,0.545],-163.2,-103.3,0,-163.2,-103.3,819.2).s().p("AhQB9QgGgKgFgLQgFgLgBgMIgCgOQgCgKACgJIABgHQAAgdAIgZQAEgPAAgQIgBgJQAAgJACgSQADgEAFgBIANgEIAJgDQAYgFAZgCIAigCIAMgBIANAAQAMgCAMgFQAGgCALgNIABAAIAGAFQgBAJAAAJIAAATIAAARIAAAQIgBAIQgBAJABAKIAAASIAAASIAAARIAAAUIAAATIAAASIAAAUIAAAHIAAAFIgIAAIgBABIgDAAIgOAAIgSAAIgTAAIgTAAIgRAAIgQAAIgSAAIgTAAIgSgBIgJAFIAAAAg");
	this.shape_6.setTransform(239.3,105);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#996633").s().p("Ak3DAIAAgCIABgFIABgRIAAAAIACgNQACgOgJgBQgTAHgHASIAAABIgEAAQAFgrAPgmQALgZAUgQQARgOAOgKIglgBQgIAAgGACQgYAIgbAAQALgSAPgLQAGgCAHgCQAVgSAegHQAUgEAQAEQAPAIAFgJQANgZAJgeQADgKABgLQAEgZAPgKIABAFIAEAKQALAWAPAYQAPgHAJgRQATgRAVgQQAdgXAlgVQAIgGASgFQAGgEAIgEQAVgIAXgFIALgCIAPgCQAdgBASADQAdgCAZACIAKABQAYABAQAHIALADQAXADAMAOIhcARQgMABgHAMIgCAEIAHAAQAWABAXgEQAGABAEgBQARAEATgCQAlAAASAbQgIAIgMgBQgXgCgWAAQARABAOAHIAIAEQAZAPASARQAMANABAOQgNgFgPAAIgCAAIAAAAIgIAAIgLACIg6AAIgBAAIgMAFIgIABIgNABQgvAAgsAHQgKACgLgDQgUAHgQAEQgeAKAFAcQADALgBAKIAAACQgBAJgEAIQgJgIgGgEQgUgLgTgIQADAVADAUQABAMAAANQgBAIAAAHQABARgHAEIgFgGQgDgEgEgEIgrglQAGAigDAlQgBAKABAKQABAegUAUQgOg3gmgyQgLgPgLAKQgfAdgYAdQgFAFgBgCIAAgFQABgDgMAbIgEgFIgBgBQgIgHgQAHQgEABgCAHQgHAFgGAGIgBABIgHANIgCADIgCAHIgBABQgagPgBgLgAEOh5IgGAAIADAAIADAAgACiiYIgIABIAIgBIACAAIALAAIAAAAIABAAIACAAIAEAAIgEAAIgCAAIgBAAIAAAAIgLAAIgCAAgAChiiIAAAAQAAgGAGAAIABgBIAAAAIADABIgDgBIAAAAIgBABQgGAAAAAGIAAAAIAAAAgABJAiQADgMALgJQAGgJAKAAQASAAAQACIARACIAEAGQgCACgDABIgIAEIgQAFIgTAFIgBAAIgDABIgVAIIgOAHQAAgHACgGgAD7AAIgHgTIgCgFIgBgCIgBgCIgBgCIAJABIApgCQgFACgCAFQgLATgQAOIgEgJg");
	this.shape_7.setTransform(-127.3,-87.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFF00").s().p("AgEDgQAEgXgHgHIgEgEIgTgNQgUgNgYgDQgLgBgLAAQgYACgXAIIgIACQgIADgGAGQgEAFgEAAIAAgPIAAgGQAAgQACgPQAFgdAMgaIAEgIQADgHAHgFIAHgFIAAABIAAABIABAAQACAIAEAHQAHANAKAKQAMALAQAHIAEACQAKAEAKACQAdADAcgBIANgBQAOgBALgGIANgHIAHgDIADgCQANgHAKgLIABgBIACgDIAAADIAAABIAAAEIAAACQAAAHADAHIACAWQABAMgCANIgDAVQAAgCgBgBQAAgBgBgBQAAAAAAAAQAAABAAABIACAGIgDgCIgEgDIgEgCQgJgCgJAEIgGACQgaANgfAngAgyhwIAAgEQgBgOADgOIACgEIABgDIABgCIAAgBIAEgIIABgDIADgFIAIgPIAFgJIADgFIAIgUIABgEIAHACIAEACIAGACQARAFAPAIIABABQABABABAAQAAAAABAAQAAAAABAAQABAAAAgBQADgCAEgBIAFgCIAOgFIABAAIACgBQANgFAOAAIAIABIAUAAQAFAAADADIABABQAHAEAEAGIADAFIAEAFIAKANIAHALQAEAFgDAGIgFAKIAAAAIgIATIgCAEIgEAJQgEAEgHABIgEABQgMAAgLABQgdAFgdgEQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAIgNgIIgDgBIgBAAQgEgCgGAAIgcAEIgDABIgcAJIgBAAIgDABIgCAAIgCABIgJABIgCgIgAiLh7IgDgDIgFgKIgBgEIgBgEQgDgCAAgEQgEgOABgRIgBgCIACgCIACgBIACAAQAFgBAPAGIAAABIgBAHQgBAMABANIAAABIAAADQAAAOACANIgBAEQgIgCgBgIgAiZiiIAEAFIgEgFIAAgGQAAgIADgKQgDAKAAAIIAAAGg");
	this.shape_8.setTransform(145.8,18.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCC99").s().p("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ABIgEgBIgCAAIgBAAIAAAAIgBAAIgGABIgoABIgJAAIABACgAWcDHIAAAAgAVmBfQgKgCgKgEIgEgBQgPgHgMgLQgLgKgHgNQgEgHgCgIIAAgBIAAAAIAAgBIgBgIIABgBIAEgFIABgBIAVgQIAEgCIAFgDQAPgHgDgPQgBgMgHgLQgBgBAFgNIAAAAIACgBIgBAAIAAAAIACABQANANATAGQAIACAHAEIALAGIAAgHIgBgCIgEgIIgCgWQgDgRgEgQIgBgEIgDgKIgBgFIAAgBIgBgCIAJgCIACAAIACgBIADgBIACAAIAcgIIADgBIAdgEQAGgBAEACIACABIACABIANAHQABABAAAAQAAAAABABQAAAAABAAQAAAAABAAQAdADAdgEQALgCALAAIAEAAQAHgBAEgFIAFgJIAGADQgBAcgMAaIgEAHIgFAHIgHAIIgEAGIgDAEIgCACIgMAPIgPAUIgGANIgDAFIgBACIgBAEQgFAXADAdIAAAFIgBACIgCACQgJALgOAHIgDABIgHAEIgMAGQgMAGgOACIgMAAIgPABQgXAAgWgDgAbSgjQgHAAgGgFQgHgGgGgIIgJgQIgNgYIgGgKQgPgYgTgXIgHgGQgIgIgJgDIAAAAQgJgEgMgBIgDAAIAAAAIAAAAIAEgKQADgGgDgFIgIgLIgKgNIgEgGIgDgFQgDgGgHgDIgCgBQgCgDgGAAIgUAAIgIgBQgOAAgMAEIgDABIgBABIgOAFIgFACQgEABgCACQgBAAgBABQAAAAgBAAQAAAAgBAAQgBgBAAAAIgCgCQgOgIgRgEIgIgCIgFgCIgGgCIACgHIAFgPQAGgSADgSIABgJIAAgBIACgLIAAgCIAEgaIACgIQADgOgBgPIABgPIABgSQAAgKgCgKIAAgBIgBgBIAAgBIAAgCIgGgUIgEgLIgGgRQgFgPgCgQIAAAAIgBgGIgBgKIACgOIAAgEIAAAAIAAgCIAAgDIAAgCIABgJIABgGIAAgBIAAgBIAEgMIAAgBIABgCIAGgPQAFgMACgMIAAgBIABgBIADACQADADAEAAIAFACIAhALIATAHIAKAFIAEACIABABIABAAIABAAIAAABIABAAIACABIACABIAAAAIADADIAKAGIACACIAFAGIABABIABABIAFAIIAEAGIAEALQAFASAHAQIAFAMIADAFIgCAyIgBAJIAAABIgBACIAAAEQgDAQgEAQIgCAFIgBACIAAAAIAAABIgBACIgCAEIgBACIgBABIAAABIgKAPIgFAGIAAAAQgOAJgPAEIgHADIgDABIgFACIgIABIgFABQgHABgDADIgBADIgGAZIgCANIAMACIAGADQAHAFAIABQAIABAJgBQAIgBAIgDQAIgEAIgGQALgHALgGIAFAAIAAAJQANADAKAKQAPAOAJAUIAEAJQAHAOADAPIACAEIAAACIACAGIACADIAGAOIADAGQAGAJAIAJIAVAUQALALAIANIADAEIALAPQAEAFAHABQADAAACgCIAEgCQAMgIALgKIAKgKIALgLIAEgDIAWgVIADgDIAGgHIAIgLIAIgMIAGgKIADgGIADgGIACgDIAIgQIAAAAIACgDIACgDIAAAAIABgCIABgCIAEgJQAFgRABgSIAAgCIABgGIACgEIABgBIACgCIADgDIAAgBIADgBIABgBIACgCIACgBIABAAIADgCIABAAIACABIABAAIABAAIABAAIAAAAIABAAIAAAAIABABIAAAAIABAAIAAAAIABAAIABAAIAAAAIADABIAAAAIADAAIAEAAIAGgBIAAAAIACAAIACAAIADAAIAGALIAAABIgBAAIAAAAIAAABIgBAAIAAABIgCABIAAAAIAAAAIgBAAIgBABIgBAAIgBABIAAAAIgBAAIgBABIAAAAIgBAAIAAAAIgBAAIgCAAIAAAAIgBABIgBAAIAAAAIgBAAIAAAAIgCABIgBAAIgBAAIAAABIgBAAIgBAAIgBAAIAAAAIgBABIAAAAIgBAAIgBAAIAAAAIgBAAIAAAAIgBAAIgCABIgBAAIAAAAIgBAAIAAADIgBAGIAAABIAAABIAAACIAAACIAEAiIABAFIAAAAIABAFIAAAAIgJAFIAAAAIgCABIgEAEIgBAAIAAABIAAABIAAAAIAAAAIgBABIAAABIgBABIgCAEIgBACIAAABIgBAAIAAABIAAAAIAAAAIgDADIAAABIgCADIgIAOIgEAFIgEAHIgBABIAAAAIgMAUIgCACIgFAQIgHAOIgDAEIgMATIgIAKIgWAYIgEACIgfAeIgJAHQgIAGgJAAIgEgBgAX7mjIAHgBIgHABQgDAAgDgBQgKgIgIgLIgCgDQgBgFgDgCQADACABAFIACADQAIALAKAIQADABADAAIAAAAgAYGmyIAAgCQAAgOAIgNQgIANAAAOIAAACgAXxnFQAHAAAGgDIABAAIABgBIAFgDQADgFAFgBIAAAAIABADQAEAFAGACQgGgCgEgFIgBgDIAAAAIgCgEIgBgFIAAAAIAAAAIABAFIACAEQgFABgDAFIgFADIgBABIgBAAQgGADgHAAIAAAAIAAAAIgCAAIgCgBIgOgBIAOABIACABIACAAIAAAAIAAAAgAYAn4IgHAGIgEAFIAEgFIAHgGQAEgCAAgCIAAgBIAAABIgCAAIgBABIgCgBQgJAAgHgFQAHAFAJAAIACABIABgBIACAAIAAgBIAAABQAAACgEACgAWso6IAAACIAAABIgBADIABAEQABAGAEAFIAAABIADACQAGAGAHABIAHABIABAAIABgBIAAAAIABAAIAEgBQACgBgBgEIABgDIAAgBIAAgBIgBgDQAAgFgCgDIgCgDIgCgBIgCgCIgCAAIgCgBIgCgCIgCgDIAAAAIgBgBIgCgBIgBAAIgCgBQgEgBgDABIgCAAIgBABIAAAAIgDADIgBACIgDAAIgBAAIgBAAQgFAAgDACIgBABIgCADIgBACIAAABQAAABAAAAQAAABABAAQAAAAAAABQABAAABAAIAJADIgJgDQgBAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBIAAgBIABgCIACgDIABgBQADgCAFAAIABAAIABAAIADAAIAAAAgAX0pIQgEAAgCAFIAAABQgCAFABAFQAAAEABAFIABABIADAGQADAEAEACIADABIAEAAIAFgCQADgCgBgEQgBgIgDgJQgCgFgEgEIAFABIABAAIABAAIABAAIAIgBIAIgDIgIADIgIABIgBAAIgBAAIgBAAIgFgBIgEgDIgEgCIgBAAgAWopIIABAAIABAAIAFAAIgFAAIgBAAIgBAAIgDAAIgDAAIADAAIADAAgAXnpOQACgEAFAAIABAAIAAAAIABAAIABAAIgBAAIgBAAIAAAAIgBAAQgFAAgCAEgAfXj3IgGAAIgNgDQgJgBgHgGIgBAAIgBgCQgBgFABgDIAAgBQACgCADgBIABgFIABAAIABAAIABAAIAAABQAIACAIAAIABAAIAAAAIAFAAQALgBAKgDIAHgCIgHACQgKADgLABIgFAAIAAAAIgBAAQgIAAgIgCIAAgBIgBAAIgBAAIgBAAIgBgBIgBAAIAAAAIgBAAIAAAAIgDgBIAAAAQgDgBgCgCIAAgBIgBgBIgBAAIAAAAQgDgFABgIIANgOIAHAAIAKACQANAAAOADIAHAAIADABIANAEQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAQgCAKgJAFIgDACIAAAAQAHASgEAEIgDAEIgGADQgHADgIAAIgBAAgAe7lNIAMgCIAFgBIgFABIgMACIgFAAIgFAAIgCgHIABAAIADgCIAAgBIAAAAIABgBIABgBIABAAIAJgIIAJgIQAEgEAFgCQAJgBADAHIADACQADAJgIAFIgDADQgFAEgHACIAMgCQANgCAOAAIAEAAQAIABgBAJQAAABAAAAQgBAAAAABQAAAAAAAAQAAAAgBAAQgJAJgNABIgCAAQgUAAgSACg");
	this.shape_9.setTransform(1.6,20.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFF99").s().p("AhIFCQgHgEgJgDQgTgFgNgNIgBgCIAAAAIAAAAIAAAAIgJgIIAAAAIgIgPIgFgSIAAAZQgPgQgBgWIAAgBIAAgEIgCgMIgBgEQgCgNAAgOIAAgDIAAgBQgBgNABgMIAAgHIABgBIAAgCIAAgCIAAgEIAAgFIAAgBIAAgEIABgHIALgjIAGgXIABgCIABgEQADgGAAgIIAAgGIAAAAIAAgCIAAgBQACgPgBgPIAAgGIgCgWIgBgSIgBgDQAAgLgDgLIgCgKQgBgOgFgMIgBgEIgDgKIgFgaIgBgIQgCgMACgPQACgRgBgSIAAgMQABgIACgHIABgFIAFgNQAKgXARgWIAFgEQALgJANgDIAagGQAJgCAJABIAIAAIATgDIAJgCQAIgDAJAAIABAAQAJABAGgCQAEgBAEAAQABAAAAABQAAAAABAAQAAAAABAAQAAAAABAAIAOAHIAIAEIAAACQAAABAAAAQAAABABAAQAAAAAAAAQABABABAAQAKAEAJAHIAHADQAKAIAIAJIACACIABABIADAEIAAABIAAAAIAQAUIABAAIAGAHIAEAFIAIAJIABABQAPAQAGAUIACAJQADALABANIAAAFIAAAJIAAABIABAKIAAAIQgDAYgHAYIgCAIIAAABIgEANIgJAXIAAAAIgBACIAAAAIgKAfIgEAIIgBAEQgDALACAOIgDAAIgFAAQgLAGgKAIQgIAGgJADQgIADgIABQgIABgJAAQgHgBgIgFIgGgEIgLgCIABgMIAHgZIABgDQADgDAHgBIAFgBIAHgCIAFgBIAEgCIAHgCQAPgDANgJIABAAIAEgFIAKgQIABgBIAAAAIACgDIABgEIABgCIABAAIAAgBIAAgBIACgGQAFgQACgPIABgEIAAgDIAAgBIABgIIADgyIgDgGIgFgMQgHgQgFgRIgFgMIgDgGIgGgIIAAAAIgBgCIgFgGIgDgBIgJgHIgEgCIAAgBIgCgBIgBgBIgBAAIgBAAIgBgBIAAAAIgCgBIgEgCIgKgEIgSgHIgfgMIgFgBQgEgBgEgCIgDgCIABgDIgBACIAAAAIAAAAIAAACQgCAMgGANIgGAOIAAADIAAAAIgEANIAAAAIgBABIgBAHIgBAIIAAADIAAADIAAABIAAABIAAAEIgCAOIACAKIAAAFIAAAAQADAQAEAPIAHASIADAKIAGAUIABADIAAAAIAAABIAAABQACAKAAAKIAAASIgCAQQABAPgCAMIgCAIIgFAaIAAABIgBALIgBABIgBAJQgDATgGASIgFAOIgCAHIgBAEIgIAUIgDAFIgFAJIgIAPIgDAFIgBADQgDACgBAFIgBADIgCAEIgBAEQgDAOABAOIAAAEIACAIIAAADIAAAAIABAFIADAKIABAEQAFAQACARIACAWIAEAJIABACIABAGIgLgFgAh7EkIABACIABABIgCgEIAAABgAh7EjIgGgVIAGAVgAh5Eng");
	this.shape_10.setTransform(149.1,-15.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AZSN/QACgagNgWQgCgFgEgEQgSgTgZgHIgFgCIgNgGIgEgBIAIgJIAPgNIALgKIAHgDIADAAIAPgDQAAAAABABQABAAAAAAQABAAAAAAQABgBABAAQARAAAQgDQAEABAFgBQAKAAAKgCQAEAAADgBIAbgDQAJAAAJgCIALgDIACgBIAfgJQAKgDAKgEQAQgIAPgNIAKgBIAAAMIAAASIgBAFIgBAEIgBAFIgDAJIgHASIgCAFIgCAFIgBALIgBAEIAAADIgBACIAAAHIAAADQgBAFABAFIADATIgEAFIgBABQgLANgGACQgMAFgMACIgNAAIgMABIgkACQgZACgYAFIgJADIgNAEQgFABgDAEIACgHgAVxL3IAAgHIgBgCIgBgLIAAgBIAAgBIgBgDIAAgCIgBgJIAAgDIgCgIIAAgEIgBgCIgBgDIgCgKIgBgDIgDgHIgBgEIgCgEIgGgNIgKgPIgCgEIgDgDIgDgDQgHgGgFgHIANACQAcAFAdABQAEAAAEABQAfADAWgTIAHgJIABACIABADQAAAAABAAQABAAAAAAQABAAAAAAQABABABAAIAFADIAdALIAPAHIAIACIAAAAIAEACIABAAQAcAKAcAFIAFABQgKACgKAFIgFADIgHADIgbALIgGACIgOAGQgMAFgKAHIgKAHIgCABQgHAAgHgDQgMgEgMAFIgGAEIAAABQgRAFgKAPIgHAJIgNASIgEAGgAXOJ3IgGgSIAGASgAaSEfQgKgJgCgQIACgIQAFABACgBQAJgEAFgIQAEgIgBgMIAAgMIgCgDQgGgHgBAGIAAADIABALQgFAEgJAAQgLgLAFgGQACgDAGgCIgIAAQgLgDACgQIABgGQgbgDgDgbQgFAPgTgHIgIgEIgIAEIgIAAIgCAAQgXAAgMgMIgEACQgOAHgSACIgCAAIgCAAIgBAAIgDAAIgHAAQgTABgGgNQgCAMgLAEIgBABIgGAAIgDAAIgBAAIgBAAIgBAAIgFgBIgBAAIAAAAIgDgBIgBgBIAAAAIgDgCQgGgFgBgEIAAgBIADgBQACgBAAgFQgGADABAEQgQAFgCgRQgBgKAEgGQADgFAEgDIAGgEIABAAIAAAAIAAgBIABAAIAEgBIADgBIAAAAIADABIAAAAIAAAAIgDgBIAAAAIgDABIgEABIgBAAIAAABIAAAAIgBAAQgPgFAAgQIABgEQADgGgBgHQAAgLAEgKQAIgTAUgDQAEAAADABQANAGAFAMIgBgEQACgMAJgFQAWgOALAVIABgIIABgCQAIgNANgGQANgIAMAGQAKADADAMIABACIABgCQAAgJADgDQAHgOAQgBIAHgBQAOAAAHAMIAFAKQADAJAEAIQACgGAGgEIAEgBQAUADAQAPIAFAFIABgDQAJgJAKAKIAIAHQAIAIABAKQAAACAAABQABABAAAAQAAABAAgBQAAAAAAgBQABgFAHAAQASABACAVIABAEQAEAGACAIIABAIQABAMgFAKQgFALgHgDIAEAIIACAEQADAMgDALQgCAMgLABIAFACIAEADQAUATgJAYQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAAAAAQgCgGAAAEQgFAZgUAOIAAAAIAFgJIACgCQAFgHAEgKQgEAKgFAHIgCACIgFAJIAAAAIgCAEIgDAEIgBAAIgCABIgCgCIAAgBIAAAAIgBgCIgBgDQABgNgCAOIAAADIgBACIAAACIgBABIgCAHQgEAHgDgKIAAAAIgCgHQAAAFgBAFQgEALgHAAQgFAAgHgHgAalDZIgFgHIAFAHgAYpDbQgIgCgDgFQgDgFACgJIADgHIAFADQAQgCACAVIAAAAQgDADgEACIAAAAIgBAAIgBABIgCAAIgBABIgCgBgAXoDNIAAAAIgGAAIgCgBIgDgBQgEgCAAgEQgCgIACgHIABgBIAGAAIAGACIABAAIADACIAAAAQAEACACAEQADAFgCAGIgDACIgBAAIAAAAIgDABIgBAAIAAAAIgBAAgA8FsDIgGgDQgSgDAEgXQACgIAFgGQAQgRAMgGQAJADAMgFIAEABQAFACADAGQACAFAAAJQAAAFgCAEQgIAVgOAMQgGAFgGABIgCAAQgGAAgGgDgA5ataQgLgiAggFIADgEIABAAQAGAEABAGQAIAjgfACQgJgCAAgCg");
	this.shape_11.setTransform(69,6.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CC9966").s().p("AguN9IgCgCQgGgDAAgHQABgFAEgCQgEACgBAFIgJACQgFADgFgDIgBgCIgBgDIAAgBIAAgBIAAgBIAAgBIABgBQAAgEADgCQgDACAAAEIgBABIAAABIAAABIgKAAQgEABgDgCIAAAAIgBAAIAAgBIAAAAIgBAAIgBgBIgBAAIAAgBIgBAAIAAgEQAAgGAHgEQgHAEAAAGIAAAEIABAAIgDACQgGAEgEABQgLABgGgHIAAAAIAAgBIgBgBQgCgDAAgDIABgDIAGgOIgGAOIgBADQAAADACADIgFACQgFACgGABIgCABIgGABIgDAAQgJAAgGgFIgCgCQgEgEACgHQACgOAKgKIACgDIAAAAIAFgFIABgBIACAAIAOgHIACgBIABAAIAFgBIANgEIACgBIAQgDQAbgHAdABIACAAIA4AAQAIAAAHgBQAHgCAGgDIAFgDIAOgHIADgBIAAAAIACgEIADgIIAAgDQAEgRgCgSIgBgFQgEgdgSgVIgFgFQgJgLgIgOIgbgyQgMgagLgbQgLgagEgaIgBgFIAAgBIAAAAIgBgCIAAgDIgDgVIAAAAIAAgBIAAgDIAAgBIAAgBIAAgBIAAgBIAAgBIADgcQACAAACgCIAQgQQAFgGAIgBIAEAAIAAAAIACgBIAAAAIAAAAQAFAAACAEIAAABIAAAAQgFAFgFAEIgEACQgQAOgCAWIAAABIAAACIAAACIAAABIAAACIABABIgBABIABACQAAAJAEAIQgEgIAAgJIgBgCIABgBIgBgBIAAgCIAAgBIAAgCIAAgCIAAgBQACgWAQgOIAEgCQAFgEAFgFIAAAAIAAgBQgCgEgFAAIAAAAIAAAAIgCABIAAAAIgEAAQgIABgFAGIgQAQQgCACgCAAIgBAAIgCAAIgCgBIAAAAIgBgBIgBgHQAAgGADgGIAEgGIANgRIAHgKQAKgOAPgGIAAAAIAGgEQAMgFAMAEQAHACAHAAIACgBIAJgHQALgHAMgFIAOgFIAGgCIAbgMIAHgDIAFgCQAKgFAKgCIgFgCQgcgEgcgKIgBgBIgEgBIAAAAIgIgDIgPgGIgdgMIgFgCQgBgBgBAAQAAAAgBgBQgBAAAAAAQgBAAAAAAIgBgCIgBgCIAAgBIgDgIIgDgFIAAAAQgGgMgHgKQgOgXgEgbIgBgDIgBgFIAAgDIAAgCIACgDIAWAKIgWgKIgMgEQgJgEgJgFIgEgFQgRgWgBgcIgBgJQAAgLgCgLIAAgEIACAAIAAAAIAAgCIgCABIgHgBQgFAMgHAKQgJAPgOAMIgGAFQgIAIgLAEQgbALgdgGQgNgDgMgBQgDADABADQAIAbABAcQgBAVgFAVIgCAIIgKAXIgEAGIgBADIADADIAAAAIAAABIACACQAHAJAJAFIAAAAQAGAEAIAAIAEAAIAFAAIAAAAQAEgJAGgBIANgFQADgBAFAAQAPgBAPADIAPACQAFAIAHAGIADADIADADIACADIAKAQIAGAMIACAEIABAFIACAGIABAEIADAKIABADIABACIAAADIABAJIABACIABAKIAAACIAAACIABACIAAABIABALIAAABIAAAHIAIAEQgDAGAAAGIABAHIABABIAAAAIACABIACAAIABAAIgDAcIAAABIAAABIAAABIAAABIAAABIAAADIAAABIAAAAIgHgEQgPgGgOABIAAgBIgEgKIAAgDQgJgagSgSQASASAJAaIAAADIAEAKIAAABIAAAAIADAFIAAABIAAAAIABABIACAGIABABIAHATIADAHIAAABIAAABIABAEQAFAQACARQADASgBASIAAApQABAIADAGQAFALAHALIARAcIABACIAOAZIACACQAGALgEAOQAAAEgBADIgEAGQgFAHgJACQgKADgMgCQgRgDgSgBIgFAAQgOgCgMAEIgDADIgKAGIgDACIgCABIAAABIgDACIgIAFIgEADIgBAAIgFADIgBAAIgCABIgCABIgCABIgFACIgNAIIgCABQgFABgEAEIgFAGIgBACIgEADIgDABIgDABIgHAEQgLADgLAGIgDACQgOAJgQgFIgLgEIgDgCQgGgGgDgGIgBgEQgCgNAHgLIABgDQACgEADgCIAAgBQgCgHACgEIABgCIABgBQAEgEAIAAQgIAAgEAEIgBABIgEgDQgCgDACgFQACgDADgCIACAAIABgDIADgEIACgBIAIgFIAggBIAGAAIAIgBQARABAMgGIAFgCIACAAQAFgCAFgFIABgCIAHgFIABgCIAGgFQADgCABgEIAAgCQAEgGADgHIABgEIAAAAIAAgBQADgJAAgKIgBgEIABAEQAAAKgDAJQgDgHgBgGIAAgGIgEgTQAAgBAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIgEgJQgGgKgEgMIgBgFQgJgdgNgYIgTgfIgCgDIgDgDQgKgLgEgJIg3hVIgIgMIAAAAIgCgEQgDgIgCgJIgBgSIAAAAIAAgIIAAgXIAAAAIAAgBIABAAQAEgEAFgDIABgBIAAAAIAFgCIAKgCIAAAAIADAAIAEgBQAFgBAGgDIACgCQAIgFAIAAIABAAIAAAAIAAAAIABAAQAIAAAHADIABAAQAHADAFAGQADAFAEAEQAKAIAMAGIAEABIABAAIABAAIAAAAIABAAQAGAAAEgCQAFgDADgGQACgFAAgEQAAgFgDgFQAAAAAAgBQAAgBAAAAQAAAAgBgBQAAAAAAAAQgDgDgCgEQgCgDgGgDQgJgDgLgCQALACAJADQAGADACADQACAEADADQAAAAAAAAQABABAAAAQAAAAAAABQAAABAAAAQADAFAAAFQAAAEgCAFQgDAGgFADQgEACgGAAIgBAAIAAAAIgBAAIgBAAIgEgBQgMgGgKgIQgEgEgDgFQgFgGgHgDIgBAAQgHgDgIAAIgBAAIAAAAIAAAAIgBAAQgIAAgIAFIgCACQgGADgFABIgEABIgDAAIAAAAIgKACIgFACIAAAAIgBABQgFADgEAEIgBAAIAAABIAAAAIgBABIAAAAIgBABIgBACIgEAGIAAAAIAAAAIAAABIAAABIgBABIAAAAIgDAFIgIAOIAAAAIAAAAQgHALgQABQgIABgFgEIAAgCIAAAAIAAgBIABgBIAAgCIABgBIADgIIADgHIAHgOIAEgGIABgBIAAAAIAFgIIACgDIACgCQABgCADgCQgDACgBACIgCACIgCADIgFAIIAAAAIgBABIgEAGIgHAOIgDAHIgDAIIgBABIAAACIgBABIgGgCIgMgBQgHgBgGgGIAAgCIADgGIAAAAIAGgLQAFgHAHgFIAEgGIACgDIAAAAIACgDQAEgHAGgCQgGACgEAHIgCADIAAAAIgCADIgEAGQgHAFgFAHIgGALIAAAAIgDAGIgHgDQgJgCAEgIIAAAAIAAgBIAAAAQAHgMAIgKIACgEQACgEADgCQgDACgCAEIgCAEQgIAKgHAMIAAAAIAAABIAAAAQgIgHgBgDIAAgCIADgFIACgCIAKgOIAFgKIAFgHQAFgLAMgCIAGgBIAjgFIABAAQACAAAQgNQABgFgBgIIgCgOQgFgcgJgbIgCgHQgHgTgCgUIgBgFIABgfQAFgcAKgZIAHgMQAAAAABAAQAAgBAAAAQAAAAAAgBQABAAAAAAIACgFIAKgQQAIgMAKgHIACgBQAJgEAFgFQAFgEABgCQAAgCAEgBQAFgCAFgEIAYgTIACgCQAXgOAagEIAUgDIABAAIAagDIAagFIASgDQAPgCAOgHQAOgGAKgJIAFAAIAAAAIABACQABAQAGANIADAIIADAFIAAAAIAAAAIACAEIAGAKIAFAIQAKAKAGALIABACQAFAMALAHIAKAEIABABIABAAIADABIAIACIABABIADAAIACAAIAOACIAAAAIABAAQALAAALgDQgLADgLAAIgBAAIAAAAIgOgCIgCAAIgDAAIgBgBIgIgCIgDgBIgBAAIgBgBIgKgEQgLgHgFgMIgBgCQgGgLgKgKIgFgIIgGgKIgCgEIAAAAIAAAAIgDgFIgDgIQgGgNgBgQIgBgCIAAAAIAAgBIAAgCQgBgcAJgpIAEAAIAFgBIACgBQALgDACgNQAFANAUAAIAHAAIADAAIABAAIABgBIACAAQATgBAOgIIAEgCQAMAMAXAAIACAAIAIAAIAIgDIAHAEQAUAGAFgPQADAcAbADIgCAGQgBAPALADIAIABQgGACgCACQgFAHALAKQAJAAAFgEQAGgDACgHIAAANQABAMgEAIQgFAHgJAEQgDABgEgBIgCAJQACAQAKAJQAQAOAGgTQACgEAAgGIACAHIAAABQADAJAEgHIABgEIABgDIACgCIABAAIABgBIAAAAIABABIACABIABAAIACgBQADACAEAFQAFAFAGAFQAMAHAJAMQAiAUAPAZQACAHADACQAKAQANAcIAAEVIgHAAIgCADIgCABIgBABIgBACIgCABIAAABIgMAGIACADIgJAIQgPAOgRAHQgJAFgKADIgfAJIgCAAIgLADQgJACgJAAIgcADQgCACgFgBQgJACgLAAQgEABgFAAQgPADgSAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAIgQADIgCAAIgIADIgKAKIgPANIgIAIIAEACIANAGIAFABQAZAHASATQAEAEACAFQANAXgDAaIgBAHQgCASAAAJIAAAJQAAAPgDAPQgIAcAAAdIgBAGQgCAJACAKIACAOQABANAFALQAEAKAHAKIAAABIABAAIAJANIAEAFQAJALAGALQAHAOAAAQQAAAIgFAHQgHAMgPgCIgZgDIgEAAIgiAAIgCAAIgCAAQgIAAgIADIgCABIgDACIgCABIgDABIgHACIgCAAIgfAKIgIADIgMAFIgWAJIgNAHQgEACgFABIgTABIgPgBgAkEMFIACABIAOAAIAEgBIABAAIAFgBIADAAIABgBIAKAAIgKAAIgBABIgDAAIgFABIgBAAIgEABIgOAAIgCgBIgDgBIgCAAIgBAAIgBAAIAAAAIgBAAIAAAAIgCAAIAAAAIgBABIgBAAIABAAIABgBIAAAAIACAAIAAAAIABAAIAAAAIABAAIABAAIACAAIADABgAA6HOIACATIACAGIAEAKIACAIQAHgCAEgHQABgBAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAQAEgEAAgEIAAgCQAAgJgDgFIACgDIgBgDQAAgFADgDIAFgIIgFAIQgDADAAAFIABADIgCADQADAFAAAJIAAACQAAAEgEAEQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAgBABQgEAHgHACIgCgIIgEgKIgCgGIgCgTIAAAAIAAgBIAAgGIAAAGIAAABIAAAAgAAsH1IADgBIABAAQAFgEACgHIAEgLIABADIgBgDIgEALQgCAHgFAEIgBAAIgDABIAAAAIgBAAIgEgCIAAAAQgIgFAAgKIAAgCIAAgDIAAgDIAAgDIAAgTQAAgHACgDQgCADAAAHIAAATIgBgEIgBABIgCAIQgCAMgMAEQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAQgIAAgDgGIgBgCIgBgRIgEALIgCADIAAABIgBgBIAAAAIAAgHIABgKQADgCAAgDQABgMAFgHQgFAHgBAMQAAADgDACIgBAKIAAAHIAAAAIABABIgLgCIABACIAAABIABAAIAAAAIAAAAIADABQAEAAACgCIAAgBIACgDIAEgLIABARIABACQADAGAIAAQABAAAAAAQABAAAAAAQAAAAAAgBQABAAAAAAQAMgEACgMIACgIIABgBIABAEIAAADIAAADIAAADIAAACQAAAKAIAFIAAAAIAEACIABAAIAAAAgAiPHGIAEAJIgEgJIgLgYIALAYgAClErIgCABIABAAIABgBIADAAQADABADAAIABgCIAYgDIADgBIAAAAQALgCAMAAIAAAAIAAAAIAFAAIAHABIABAAIABAAIAAAAIABAAIACgBIABAAQAIABAEAGQgEgGgIgBIgBAAIgCABIgBAAIAAAAIgBAAIgBAAIgHgBIgFAAIAAAAIAAAAQgMAAgLACIAAAAIgDABIgYADIgEABIgDAAIgBAAIgCAAgAEDEiIAJgBIgJABIgIgBIgHgBQgPgFgJgMIgDgFQgPgVgJgaIgCgJQgCgPgBgPQAAgOAGgOIADgIQAFgLAFgJIAFgHQAIgKAKgIQAGgGAIgDQADgBAAgDIAAgDIgBgEQgGgKgIgKQAIAKAGAKIABAEIAAADQAAADgDABQgIADgGAGQgKAIgIAKIgFAHQgFAJgFALIgDAIQgGAOAAAOQABAPACAPIACAJQAJAaAPAVIADAFQAJAMAPAFIAHABIAIABIAAAAgABnECIAAACIAAACIgBAIIABgIIAAgCIAAgCIACgTIgBgLIgEgLQgCgFgDgDQgFgFgBgGQABAGAFAFQADADACAFIAEALIABALIgCATgACECwIASABQANABALACQgLgCgNgBIgSgBIgBAAIAAAAIgBAAQgBAAAAAAQgBAAgBAAQAAABAAAAQAAAAAAABIAAABIAAgBQAAgBAAAAQAAAAAAgBQABAAABAAQAAAAABAAIABAAIAAAAIABAAIAAAAgAFXCQQADgKAAgKIAAgJQgCgOgIgNQAIANACAOIAAAJQAAAKgDAKgAibAXQgOAHgLAMQALgMAOgHQAQgIAPgFQgPAFgQAIgAA5hYQAFAIAAALIAAAFIgBAFIgDAMQACAGAEAEQADADAFADIAHABIABAAQAFAAADgCQAIgCADgIQAHgRALgRQAFgFACgGQgEAEgLABQgYAAgTgLIgJAFIgEgFIAEAFgABhh1IgCgBQgGgCgGAAIgBAAIAAAAIgEAAIgBAAIABAAIAEAAIAAAAIABAAQAGAAAGACIACABgACFiuQgHAEgDAIIgDAHQgCAIADAGQADAFAIACIACAAIACgBIACAAIABgBIAHgDIgHADQAEgBADgEIACACQALgJgDgJQgDgJgHgFQgFgDgGAAIgCAAgABDiUIABAAIABgBIADAAIAAAAIABgBQAAABABAAQAAAAAAAAQABAAAAgBQAAAAABAAIAAgCIAEgEIAEgGQACgIgCgHIgDgDIgDgBIgFgBIgCgCQgCgDgDAAIgDABIgBAAIgCACIgEAEIgDAFIgBACIAAABQgCAHABAIQABAEAEADIADABIACAAIAGABgAAfHZIAAAAgACSiNIAAAAQAAAAAAAAQABAAAAAAQAAAAAAABQABAAAAABIgCgCgACSiNIAAAAgAivmmQgGgFgCgFIAAAAIgBgEIgBgBIgCgHIAAAAIgBgCIAAAAIAAgBIgCgFIAAgEIAAAAIAAAAIAAgBIAAgBIAAAAIgCgFIAAgBIAAgFIgFgiIAAgCIAAgBIAAgBIAAgBIABgHIAAgCIABAAIABgBIAAAAIADAAIAAAAIABAAIAAAAIAAgBIABAAIABAAIAAAAIABAAIAAgBIABAAIABAAIACAAIAAAAIAAAAIABgBIACAAIAAAAIABgBIAAAAIABAAIABgBIABAAIABAAIABAAIABAAIABAAIAAAAIAAAAIABgBIAAAAIACAAIAAgBIACgBIAAAAIABAAIAAAAIABgBIAAAAIABgBIABAAIAAgBIAAAAIABgBIAAABIAAAAIADAAIAAAAIACAAIADAAIAAAAIABAAIAAAAIACAAIAAAAIACAAIABAAIAAAAIADAAIABAAIABAAIAAAAIABAAIAAAFIgNAPQgBAHACAFIABAAIAAABIABABIAAAAQADACACABIABAAIACABIAAAAIABAAIABABIAAAAIACAAIgCAFQgDABgBACIgBABQgBADACAFIABACIgJAGIgBAGIgBAFIgBAIIAAAGIAAADIgBAFIgBADIgBACIgDAFIgCAAIgEACIgBAAQgDAAgCgCgAi5ocIgEAAIAAAAIgCAAIgBAAIgBgBIAAAAIgBAAIAAAAIAAgDIAAgBIgBgHIgCgHIgDgHIAAAAIgBgBIgBgGIABgDQAAgKgGgIQgHgNgKgLIgDgDQgJgLgHgNQgGgNgEgOIgKgjQgIgcgBgdQgCgcAFgbIACgIQAGgfATgXQAHgIALgCIAFgCIAbAAIAEAAQAGACAHADIACACIAFACQAGAEADAEIACADIABAAIAFAKIABABIACAFIAEAKIAEAKIAHATIAGALIAGANIAGASIAFASIABAIQAAADAAADIgCAYIgCAOQgDAPgIAOIgGANQgKAUgHAXIgCAFIgBAFIgBAEIAAAAIAAACIAAABIAAAAQgCAUABAVIAGAHIAAAAIgDACIAAAAIgBABIgCABIAAABIgEADIgMAHIgDAAIgCAAIgCABIgBAAIgGAAIgCAAIgBAAgAjetgQgRAagDAeIAAAJQgBAdAGAcIACAKQAGAbALAbQAGARAPALIAGAEQACADADABIAEABIAEABQAHAAAGgEQAGgDAEgHQAFgIADgKQAHgUADgVQAGgcgCgdIgBgHQgGgcgLgbIgPgiQgDgGgGgCQgEADgCgBIgIgFIgDgBIgGgBQgPAAgJAPg");
	this.shape_12.setTransform(213.5,42.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000099").s().p("AtNiMIAJg4QgHgHABgJQABgHADgHQAFgSgCgXQgBgFABgFQAHgZAFgbQAJg1APg0QAIghAFghIAIgYIAKAAQgCAEACAEQAGAHgBAJIABAGIAEAOIATA8QAbBYArBQQAJAQAOAUQAMAQATAPQAHABABAHQAPAMASAJQAjARAaASIAGAEIAIADQAUALAXAQIAMAIQAtAhAiAiIAQAOQARARAUAQQAvAiA3AOQAyANAzALIAaAFIAUAFQAvALAuAAIDFABIABAAQAKAAAJgDQANgEANABQAuACAtgCIAUgCQBegEBTgkQAUgKATgOQBNg4BQgvQAjgVAagXIAIgIIAcAYIgBAAIgTAAIATAAIAAAFQgEAQgDASQgJBbAABeIABDAQABBTgDBTIAAAMIpgAAIAAAAIgFgLQgDgYgBgWQgEgNAAgMQgCgjAAgkQAAgbACgcIAGhgQABgWALgJQgLAJgBAWIgGBgQgCAcAAAbQAAAkACAjQAAAMAEANQABAWADAYIAAALIw0AFgADfH9IAAAAg");
	this.shape_13.setTransform(-117.5,88.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-204,-110,458.4,251.7);


(lib.content_scene5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AguA5QgLgJAAgKQAAgGAEgEQADgDAGAAQAIAAAEAIQAFALARAAQANAAAPgHQAOgHAAgIQAAgLgJgDQgHgDgRAAQgPgBgNgEQgPgGAAgOQAAgRASgOQASgPATAAQAJAAANAEQAPAFAAAHQAAAEgCAEQgEAEgFAAIgNgCIgNgCQgLAAgIAGQgLAFAAAGQABAEADACQADACAHABIATABQAUACAMAJQAMAJAAASQAAAXgaAMQgUAJgXAAQgWAAgNgKg");
	this.shape.setTransform(169.8,33.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgqBDQgEgFAAgFIAAhbIgBgMQAAgHABgEQABgJAOgBQAHgCAPgBQAPAAAPALQASANAAASQAAAKgEAIQgDAFgHAFQAIAEAHAIQAIAJAAAKQAAALgNAKQgJAIgJADQgTAHgfAAQgFAAgEgDgAgXAvQAQgBAPgFQAQgFAAgEQgBgIgJgEQgIgFgGgBIgXAAgAgXguIABATIgBASIANABQAYgCAAgSQAAgGgIgFQgGgHgJAAIgOAAg");
	this.shape_1.setTransform(158.2,33.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgvBBQgDgDAAgFIAAgUIAAgUIAAhFQAAgFAEgFQAEgGAIABIAWABQAMACAHAEQAmATAAAcQAAAMgIAHQgIAIgQAGQAXANAMAOQADADAAAFQAAAFgDADQgEAEgFAAQgFAAgEgEQgbgZgegKIABAdQAAAFgDADQgEAEgFAAQgFAAgEgEgAgaACIAEAAQAVAAAJgDQAEgCAEgEQAEgEAAgCQAAgKgNgJQgKgIgNgCIgKAAg");
	this.shape_2.setTransform(146.7,33.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgoBDQgJgJAAgcIABgiIACgjIAAgJIgCgJQAAgNANAAQAEAAADACIAUgEIAPgBQAVAAAOAFQAIADAAAIQAAAFgDADQgEAEgFAAIgDAAQgPgEgNAAIgNABIgQADIgBAjIAhgEIAVgBQAFAAAEADQAEADAAAGQAAAIgLACIgWABIgjAEIgBASQAAARACACQACACAJAAIAPgBIAQAAIAGgBIAEAAQAGAAADADQAFADAAAGQAAAKgLACQgIABgbAAQgcAAgJgHg");
	this.shape_3.setTransform(135.4,33.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgSA+QgLgagNguIgHgXQgFgRAAgHQAAgEAEgEQAEgDAFAAQAIgBADAKIAEAPIAIAcIANArIATgzIAIgWQAFgMAGgHQAEgFAFABQAFgBAEAEQAEAEAAAEQAAAEgCAEQgFAHgEAJIgHASIgXA6QgEALgGALQgEAGgFABQgJAAgEgJg");
	this.shape_4.setTransform(123.5,33.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgnBDQgKgJAAgcIACgiIABgjIAAgJIgBgJQgBgNAMAAQAEAAAEACIATgEIAPgBQAXAAANAFQAIADAAAIQAAAFgDADQgEAEgFAAIgEAAQgOgEgOAAIgMABIgPADIgBAjIAggEIAVgBQAGAAADADQAEADAAAGQAAAIgLACIgVABIgkAEIgBASQAAARADACQABACAKAAIAOgBIAQAAIAGgBIAFAAQAEAAAFADQADADAAAGQAAAKgKACQgIABgaAAQgdAAgIgHg");
	this.shape_5.setTransform(104.2,33.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgmA1QgNgOAAgSQAAgcAagfQAWgaAVAAIAHAAIAFABQAEgDAFAAQAJAAADAKIABARQAAAFgDADQgDAFgGAAQgIAAgEgJQgCgEgBAAQgCgBgFAAQgLAAgNASQgUAWAAAVQAAAJAGAHQAHAHAJAAQAGAAAJgFIAOgIQAGgFAEAAQAFAAAEAEQADAEAAAEQAAAGgEADQgYAVgXgBQgUABgOgPg");
	this.shape_6.setTransform(92.8,33.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("Ag8BDQgEgDAAgFIAAgLIABgLIABgPIAAgQIAAgOIAAgRIgCgQIgBgQQAAgFAFgEQAFgEAFAAQAHAAAIALQAlA5AnAiIAAgNIgBg5IgBgJIgBgKQAAgMANAAQAOAAABAsIAAAOIgBA2IgBAOQgCALgMAAQgGAAgHgHQgigfgpg1IAAAaIAAAVIAAAVQAAAagMAAQgGAAgEgEg");
	this.shape_7.setTransform(79.8,33.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgnBDQgKgJAAgcIABgiIACgjIgBgJIgBgJQABgNALAAQAFAAADACIATgEIAPgBQAXAAANAFQAIADAAAIQAAAFgDADQgDAEgGAAIgEAAQgOgEgOAAIgLABIgRADIAAAjIAggEIAVgBQAFAAAEADQAEADAAAGQAAAIgMACIgUABIgkAEIAAASQAAARACACQAAACAKAAIAPgBIARAAIAEgBIAGAAQAFAAAEADQADADAAAGQAAAKgKACQgJABgaAAQgcAAgIgHg");
	this.shape_8.setTransform(67.1,33.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgHA/QgEgDAAgFIAAgEIABgEIgBgMIgBgMIgBgeIgDggIgFAAQgTAAgMgDQgJgCAAgJQAAgFADgEQADgEAGABIAOABIAOABIARAAIAOAAIAUABIAUABQAFAAAEADQADADAAAFQAAAFgDAEQgEADgFAAIgWgBIgVAAIACAjQACAVAAANIABAJIAAAJQAAAGgCAGQgEAGgGAAQgEAAgDgDg");
	this.shape_9.setTransform(55.1,33.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AguA5QgLgJAAgKQAAgGAEgEQADgDAGAAQAIAAADAIQAFALASAAQANAAAPgHQAOgHAAgIQAAgLgJgDQgHgDgRAAQgQgBgMgEQgPgGAAgOQAAgRASgOQASgPATAAQAJAAANAEQAPAFAAAHQAAAEgCAEQgEAEgFAAIgNgCIgNgCQgLAAgIAGQgLAFABAGQAAAEADACQADACAGABIAUABQAUACAMAJQAMAJAAASQAAAXgaAMQgUAJgXAAQgWAAgNgKg");
	this.shape_10.setTransform(42.6,33.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AgoA/QgEgDAAgFQAAgFAEgDQADgEAGAAIARgBIAAgoQAAgWACgWIgTABQgGAAgDgDQgEgEAAgFQAAgFAEgDQADgDAEgBIAagBQAPAAAaAEQALACAAAKQAAAGgEADQgDADgFAAIgXgDIgBApIgBAoIAYAAQAGAAADADQAEAEAAAFQAAAEgEAEQgEADgFAAIgPABIgPAAIgPABIgSACQgGAAgDgEg");
	this.shape_11.setTransform(31.4,33.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AAZAyIgLgSIgMgOIgZAdIgQASQgEADgFAAQgFAAgEgDQgEgEAAgFQAAgDADgEIAQgRIAfggIgSgXIgKgNQgGgHgFgFQgGgEAAgFQAAgFAEgEQAEgDAFAAQAFAAAHAHIAKAKIALANIAOAUIAWgdQARgVAGAAQAFAAAEADQAEAEAAAFQAAAEgDADIgSAXIgWAbIATAZIATAZQAEADAAAFQAAAEgEAEQgEAEgFAAQgJAAgOgUg");
	this.shape_12.setTransform(19.8,33.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AgoBDQgJgJAAgcIACgiIABgjIAAgJIgBgJQAAgNAMAAQADAAAEACIAUgEIAPgBQAVAAAOAFQAIADAAAIQAAAFgDADQgDAEgGAAIgDAAQgPgEgNAAIgNABIgQADIgBAjIAhgEIAVgBQAFAAAEADQAEADAAAGQAAAIgLACIgWABIgjAEIgBASQAAARACACQABACALAAIAOgBIAQAAIAGgBIAEAAQAGAAADADQAFADAAAGQAAAKgLACQgJABgZAAQgdAAgJgHg");
	this.shape_13.setTransform(8.1,33.2);

	this.instance = new lib.Scene3();
	this.instance.setTransform(204.2,180.2);

	this.instance_1 = new lib.scene3bottom();
	this.instance_1.setTransform(220.3,340.7,0.77,0.77);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgIAHIgBgBIAAgBQgBgEAEgBIAAAAIgBgBIAAAAIAAgBIAGgDIABgBIAAABIAAAAIAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAAQAAAAAAAAQABAAAAABQAAAAAAAAQABAAAAABIAAAAIAAABIABAAIADADIAAAAIgBABIAAABIAAAAIgCAAIgBgBIgEgEIgCAAIgCABIgBABQgCACgBADIgCAAg");
	this.shape_14.setTransform(297.1,128.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.instance_1},{t:this.instance},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,18,457.9,341.4);


// stage content:
(lib.pred_Scene5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene5:0,scene5_repeat:121});

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
		
		 window.open ("pred_Scene6.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("pred_Scene4.html","_self");
		}
	}
	this.frame_2 = function() {
		playSound("beamisare");
	}
	this.frame_19 = function() {
		playSound("pop_up");
	}
	this.frame_32 = function() {
		playSound("heistheyarebutiamnot");
	}
	this.frame_139 = function() {
		/* gotoAndPlay("scene5_repeat");*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(17).call(this.frame_19).wait(13).call(this.frame_32).wait(107).call(this.frame_139).wait(1));

	// content
	this.instance = new lib.content_scene5();
	this.instance.setTransform(232.6,197.4,1.096,1.096,0,0,0,191,189);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(140));

	// Layer 1
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.btn_goNext},{t:this.btn_goBack},{t:this.instance_1},{t:this.btn_menu}]}).wait(140));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(284.2,201.8,537.1,401.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;