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
		{src:"sounds/AccousticGroove.mp3", id:"AccousticGroove"},
		{src:"sounds/ball_bounce.mp3", id:"ball_bounce"},
		{src:"sounds/ball_kick.mp3", id:"ball_kick"},
		{src:"sounds/ball_throw.mp3", id:"ball_throw"},
		{src:"sounds/High_Screaming_Gtr.mp3", id:"High_Screaming_Gtr"},
		{src:"sounds/organ_f_chord.mp3", id:"organ_f_chord"},
		{src:"sounds/right_answer.mp3", id:"right_answer"},
		{src:"sounds/thesubjectanswerswhoorwhatinfrontoftheveb.mp3", id:"thesubjectanswerswhoorwhatinfrontoftheveb"},
		{src:"sounds/thesubjectofasentenceisalways.mp3", id:"thesubjectofasentenceisalways"},
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



(lib.static_ball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("ADmgEQAAgBAAAAQgChOgwg7QgIgKgJgKQgPgOgQgMQgBAAgCgBIgagCIgTA4IgFAOIBXAKIACgDIgBADIgBAAIgvBAIAGgCIAhAMIAbAtgAC5AIIACADIgsAiIg5gMIgBAAIgkgoIAYggIAugIACiCkQAAgBABAAQBDhEAAhfQAAgBAAgDAgXiqIAEADIA0gcIAHgfQgUgDgUAAQgNAAgPACIgVAnIAaASIgHAkIg3AnIgBAFIAAABIgGA4IgBAKIA2AgIACgCIAyg4IAAgBIAFgrIgRgNIgfgcABUiHIhTAdACBi9QgogdgxgIAiUiuQAAAAAAAAQgHAGgHAGQgRASgNATIARAiIAogGIADgLIANgoIgdgaQA1guBDgHAhcghIgTAoIADAGIARAkIgoA3AjeA6IBHgvIArACAjAh9QglA3AABGQAAAeAHAcQAIAeAPAbIBCgIIACgDIBKASIACgFIAYgsIAAgBIAEABIgKhCAhWhaIgugSAg3B1IAEAGIgGgBAjHBzQAPAZAWAXQAfAfAlAQIBHgjIADABIA2AOIAgg0IgGgIIAKACIBcAgABVAhIABABIg4A7IAeAlAAeBdIgBgCIg4gSABCCKIAEgGAgzB7IAeAzIABACAheDSQAsAUAyAAQBeAABEhCAC0iOIgMAc");
	this.shape.setTransform(23.1,23.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgCDEIgBgCIgegzIgEgGIAYgsIAAgBIAEACIA4ARIACACIAdAlIAGAIIggA0gAjMBOIBHgvIArACIARAkIgoA3IgCADIhCAIQgPgbgIgegABoA1IgBAAIgkgqIAYgeIAugIIAGgCIAhANIAbAsIACADIgsAigAhLgDIABgJIAGg5IAAgBIABgFIA3gnIAfAcIAQAOIgEArIAAAAIgyA4IgCACgAithpQAMgTARgRIAOgNIAAAAIAeAaIgOAoIgDAMIgoAFgABhhlIAFgNIATg5IAbACIACACQAQALAOAPIASATIgMAdIgCACgAgFiWIgZgSIAVgnQAMgCAOAAQAVAAAUADIgHAfIg0Acg");
	this.shape_1.setTransform(21.3,21);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhdDRIBGgjIADABIA2AOIAgg0IAEgGIBbAgQhDBCheAAQgyAAgrgUgAiiCiQgWgXgPgZIBCgIIACgDIAog3IgRgkIgDgGIATgnIgTAnIADAGIgrgCIhHAvQgHgcAAgdQAAhHAmg3IAQAiIAogFIADgMIAuASIAAABIgGA5IgBAJIA2AgIACgCIAyg4IAAAAIAEgrIgQgOIBTgcIhTAcIgfgcIAHgkIAEADIA0gcIAHgfQAxAIApAdIgbgCIgTA5IgFANIBXAKIABAAIABgCIAMgdQAwA7ACBOIAAABIgtAMIAtgMIAAAFQAABehEBEIgBABIhbggIgKgCIgdglIA3g7IAAgBIA5AMIAsgiIgCgDIgbgsIghgNIgGACIAvhAIgvBAIguAIIgYAgIAkAoIABABIg3A7IgCgCIg4gRIgKhDIAKBDIgEgCIAAABIgYAsIgCAFIAGABIAeAzIgCABIhGAjQgmgQgfgfgAg5B5IhKgSgABWAhgAhWhbIgugSIAOgoIgegaQA1gtBEgIIgVAnIAZASIgHAkIg3AnIgBAFg");
	this.shape_2.setTransform(23.1,23.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,48.1,48.1);


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


(lib.Background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6600CC").ss(3,1,1).p("EglvgWPMBLfAAAMAAAAsfMhLfAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FEFE78","#FEB367"],[0,1],-0.2,199.3,549.7,199.3).s().p("EgluAWPMAAAgsdMBLdAAAMAAAAsdg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-243.1,-143.9,486.2,287.8);


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


(lib.anim_buffy_throws_up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		playSound("ball_throw");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(11));

	// arm
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AhBjIQgBgFgBgFQAAAAAAgBQgCgHgBgIQAAgBAAgCQgCgXAKgEQAIgCARAKQAFAEACAHQABASACARQAAABAAABQALAFAEAJQAEAGACAIQACAFABAFQAAAAgBgBQABACAAABQAAgBAAgBQAEANAEAKQD1AdALAjQAGARgZAgIgeAWIgrAeQgFADgEADQgKAHgKAHQgVAPgUAOQgIAGgIAGQgVAQgUATQgHAHgHAIQgHAIgHAIQgOAVgMAXQgKAVgFATAgujQQgJgEgGACAhZjIQABAAABAAQAGgBAFAAQAFAAAGABQAEARAIAPAhahhQAOgDAMgFQABAAABAAQANgFAIgOQAHgLADgPABWg4QhdgPgHgCQgJgEgJgFQgBgBgBAAIAAAAQgZgBgdgCQAAAAAAgBQgCAAgCAAQAAAAgBAAQgWAdgdgKQgOgEgOgJQgBAAgBgBQAAAAgBAAQgDgCgEgDQgSgNgRgDQgEgBgEAAQgSgIgEgKQgEgLAOgPQAEgEAJACQAFABAGAEQACADADADQABACACACQACACACACQACACACACQABABABAAQAAABABAAQABABAAABQAAgBgBgBIgBgBIAAAAQAAgBgBgBIAAAAQgJgNgGgHQgGgJgEgDQgDgDgGgEQgFgFgFgFQAAgBgBgBQAAAAAAAAQgDgEgCgEQgIgNgFgVQgGgYAQgGQASgHAHAhQAGAcATAJQACAAACABQABAAAAABQADABAEAAQgEgFgEgFQgBgCgCgCQgBgBgBgCQgCgCgBgCQgKgfACgnQAGAAAGACQAbAIAGAhQAEAXARAVQABABABACQAFAFAEAFAgbjIQACAKABAJAheAhICJhMIArgNIBKgWAiBi7QABgDAAgEQAAgEgBgDQAAgCAAgBQgHgXgGgXQgCgIgBgHQAAAAAAgBQAAgBAAAAQAAgCAAgCQAAgVATgGQAHgCAGAGQANANgCATQgEAfARAfIAAAAQAFAGAEAGQADADADAEAhtjEQgDgCgDgCAiBi7IAAAAQAAABAAABQgBARAIANQAMAQANgKAh6j4QgEgIgHgIAiRi9QAIACAIAAAjhjAQgFABgDAFAi7i5QACADADAEQAEAFAEAGQACACADADQABACACACQAAAEAEACQABACAAABQAGAMAQgEAjBh7QABABAAAAQAIAKAJAHQADACACABQANAIAPACAiujMQgHgEgIAAAitiIQgIgBgIADAivErQgMgbAAgfQABgHAAgHQAEglALgjQAKgiAWgfQAUgbAZgd");
	this.shape.setTransform(48.6,31.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CE9F6E").s().p("AiSEuQgRgFgMgFQgMgbAAggIABgNQAEglALgjQAKgjAWgeQAUgcAZgdIAAAAICJhNIArgNQhdgOgHgDIgSgJIgCgBIAAAAQgZAAgdgDIAAAAIgEgBIgBABQgWAcgdgKQgOgEgOgIIgCgBIgBgBIgHgEQgSgNgRgEIgIgBQgSgIgEgJQgEgMAOgPQAEgDAJABQAFABAGAEIAFAGIADAEIAEAEIAEAEIACACIABABIABABIgBgCIgBAAIAAgBIgBgBIAAgBIgPgUIgKgMIgJgHQgFgEgFgGIgBgCIAAAAIgFgHQgIgOgFgVQgGgYAQgGQASgHAHAhQAGAcATAJIAEABIABABIAHABIgIgKIgDgEIgCgDIgDgEQgKgfACgnIAMACQAbAIAGAhQAEAXARAVIACADIAJAKIgJgKIgCgDQAIADAIgBIABgHIgBgHIAAgDIgNguIgDgOIAAgCIAAgBIAAgEQAAgVATgGQAHgCAGAGQANANgCATQgEAgARAeIAAAAIACAAIALgBIALABQAEARAIAPQgIgPgEgRIgCgKIAAAAIgDgQIAAgCQgCgYAKgDQAIgDARAKQAFAEACAHIADAjIAAACIADATIgDgTQALAGAEAIQAEAGACAIIADALIAAABIgBgDIABACIgBgCIABADIAAgBIAIAWQD1AdALAkQAGAQgZAhIgtAcIgEAFIATgLIgrAdIgJAHIgUAOIgpAcIgQAMQgVAQgUATIgOAPIgOAQQgOAVgMAYQgKAUgFATQAFgTAKgUQAMgYAOgVQAYAbgEAiIgDAOQgKAigaAYQgaAWgnAFQgPACgOAAQgYAAgXgFgABWhAIBKgVgAjAiCQAIALAJAGIAFAEQANAHAPACQgPgCgNgHIgFgEQgJgGgIgLIgBgBIABABgAgpiDQgIANgNAFIgCAAQgMAFgOADQAOgDAMgFIACAAQANgFAIgNQAHgLADgPQgDAPgHALgAi9iOIABAAIAFgBIABAAIAGgBIABAAIAAAAIABAAIABAAIgBAAIgBAAIAAAAIgBAAIgGABIgBAAIgFABIgBAAgAiSiTIAHgCIgHACIAAAAIgBAAQgJgBgFgIIAAgBIgBgDQgEgCAAgDIgDgEIgFgGIgIgLIgFgHIAFAHIAIALIAFAGIADAEQAAADAEACIABADIAAABQAFAIAJABIABAAIAAAAgAhriZQAFAAAFgEQgFAEgFAAIAAAAIAAAAQgHAAgHgJIgBgBQgHgLAAgOIAAgFIAAgCIAAAAIAAAAIAAACIAAAFQAAAOAHALIABABQAHAJAHAAIAAAAIAAAAgAgDimIABAGIABAAIAAAAIgCgIIAAACgAhQjEIAGAHIgGgHIgJgMIAJAMgAjpjCQADgFAFgBQgFABgDAFgAhtjMIgGgEIAGAEgAiujTQgGgEgHAAIgBAAIAAAAIgBAAIABAAIAAAAIABAAQAHAAAGAEgAgujXIgBgBQgFgCgDAAIgBAAIgBAAIgDAAIgBAAIABAAIADAAIABAAIABAAQADAAAFACIABABIAAAAgAh6j/QgEgJgHgHQAHAHAEAJg");
	this.shape_1.setTransform(48.6,31.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.1,1,1).p("AhBjIQgBgFgBgFQAAAAAAgBQgCgHgBgIQAAgBAAgCQgCgXAKgEQAIgCARAKQAFAEACAHQABASACARQAAABAAABQALAFAEAJQAEAGACAIQACAFABAFQAAABAAABQAAgBgBgCQABABAAAAQAEANAEAKQD1AdALAjQAGARgZAgIgeAWIgrAeQgFADgEADQgKAHgKAHQgVAPgUAOQgIAGgIAGQgVAQgUATQgHAHgHAIQgHAIgHAIQgOAVgMAXQgKAVgFATAgujQQgJgEgGACAhZjIQABAAABAAQAGgBAFAAQAFAAAGABQAEARAIAPAhahhQAOgDAMgFQABAAABAAQANgFAIgOQAHgLADgPABWg4QhdgPgHgCQgJgEgJgFQgBgBgBAAIAAAAQgZgBgdgCQAAAAAAgBQgCAAgCAAQAAAAgBAAQgWAdgdgKQgOgEgOgJQgBAAgBgBQAAAAgBAAQgDgCgEgDQgSgNgRgDQgEgBgEAAQgSgIgEgKQgEgLAOgPQAEgEAJACQAFABAGAEQACADADADQABACACACQACACACACQACACACACQABABABAAQAAABABAAQABABAAABQAAgBgBgBIgBgBIAAAAQAAgBgBgBIAAAAQgJgNgGgHQgGgJgEgDQgDgDgGgEQgFgFgFgFQAAgBgBgBQAAAAAAAAQgDgEgCgEQgIgNgFgVQgGgYAQgGQASgHAHAhQAGAcATAJQACAAACABQABAAAAABQADABAEAAQgEgFgEgFQgBgCgCgCQgBgBgBgCQgCgCgBgCQgKgfACgnQAGAAAGACQAbAIAGAhQAEAXARAVQABABABACQAFAFAEAFAgbjIQACAKABAJAheAhICJhMIArgNIBKgWAiBi7QABgDAAgEQAAgEgBgDQAAgCAAgBQgHgXgGgXQgCgIgBgHQAAAAAAgBQAAgBAAAAQAAgCAAgCQAAgVATgGQAHgCAGAGQANANgCATQgEAfARAfIAAAAQAFAGAEAGQADADADAEAhtjEQgDgCgDgCAiBi7IAAAAQAAABAAABQgBARAIANQAMAQANgKAh6j4QgEgIgHgIAiRi9QAIACAIAAAjhjAQgFABgDAFAi7i5QACADADAEQAEAFAEAGQACACADADQABACACACQAAAEAEACQABACAAABQAGAMAQgEAjBh7QABABAAAAQAIAKAJAHQADACACABQANAIAPACAiujMQgHgEgIAAAitiIQgIgBgIADAivErQgMgbAAgfQABgHAAgHQAEglALgjQAKgiAWgfQAUgbAZgd");
	this.shape_2.setTransform(48.6,31.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CE9F6E").s().p("AiSEuQgRgFgMgFQgMgbAAggIABgNQAEglALgjQAKgjAWgeQAUgcAZgdIAAAAICJhNIArgNQhdgOgHgDIgSgJIgCgBIAAAAQgZAAgdgDIAAAAIgEgBIgBABQgWAcgdgKQgOgEgOgIIgCgBIgBgBIgHgEQgSgNgRgEIgIgBQgSgIgEgJQgEgMAOgPQAEgDAJABQAFABAGAEIAFAGIADAEIAEAEIAEAEIACACIABABIABABIgBgCIgBAAIAAgBIgBgBIAAgBIgPgUIgKgMIgJgHQgFgEgFgGIgBgCIAAAAIgFgHQgIgOgFgVQgGgYAQgGQASgHAHAhQAGAcATAJIAEABIABABIAHABIgIgKIgDgEIgCgDIgDgEQgKgfACgnIAMACQAbAIAGAhQAEAXARAVIACADIAJAKIgJgKIgCgDQAIADAIgBIABgHIgBgHIAAgDIgNguIgDgOIAAgCIAAgBIAAgEQAAgVATgGQAHgCAGAGQANANgCATQgEAgARAeIAAAAIACAAIALgBIALABQAEARAIAPQgIgPgEgRIgCgKIAAAAIgDgQIAAgCQgCgYAKgDQAIgDARAKQAFAEACAHIADAjIAAACIADATIgDgTQALAGAEAIQAEAGACAIIADALIgBgCIABADIAAgBIAIAWQD1AdALAkQAGAQgZAhIgtAcIgEAFIATgLIgrAdIgJAHIgUAOIgpAcIgQAMQgVAQgUATIgOAPIgOAQQgOAVgMAYQgKAUgFATQAFgTAKgUQAMgYAOgVQAYAbgEAiIgDAOQgKAigaAYQgaAWgnAFQgPACgOAAQgYAAgXgFgABWhAIBKgVgAjAiCQAIALAJAGIAFAEQANAHAPACQgPgCgNgHIgFgEQgJgGgIgLIgBgBIABABgAgpiDQgIANgNAFIgCAAQgMAFgOADQAOgDAMgFIACAAQANgFAIgNQAHgLADgPQgDAPgHALgAi9iOIABAAIAFgBIABAAIAGgBIABAAIAAAAIABAAIABAAIgBAAIgBAAIAAAAIgBAAIgGABIgBAAIgFABIgBAAgAiSiTIAHgCIgHACIAAAAIgBAAQgJgBgFgIIAAgBIgBgDQgEgCAAgDIgDgEIgFgGIgIgLIgFgHIAFAHIAIALIAFAGIADAEQAAADAEACIABADIAAABQAFAIAJABIABAAIAAAAgAhriZQAFAAAFgEQgFAEgFAAIAAAAIAAAAQgHAAgHgJIgBgBQgHgLAAgOIAAgFIAAgCIAAAAIAAAAIAAACIAAAFQAAAOAHALIABABQAHAJAHAAIAAAAIAAAAgAgDimIABAGIABAAIAAAAIgCgIIAAACgAhQjEIAGAHIgGgHIgJgMIAJAMgAjpjCQADgFAFgBQgFABgDAFgAhtjMIgGgEIAGAEgAiujTQgGgEgHAAIgBAAIAAAAIgBAAIABAAIAAAAIABAAQAHAAAGAEgAgujXIgBgBQgFgCgDAAIgBAAIgBAAIgDAAIgBAAIABAAIADAAIABAAIABAAQADAAAFACIABABIAAAAgAh6j/QgEgJgHgHQAHAHAEAJgAgEirIABACIAAABIgBgDg");
	this.shape_3.setTransform(48.6,31.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.1,1,1).p("AgEk1QABgBAAgCIAAAAIAAAAQABgBAAgBIAAgBQADgOACgJQADgLABgEQAAgFAAgHQAAgHACgHQAAgBABgBIAAgBQABgEACgEQAGgPANgQQAQgTAOAJQAQAKgVAZQgTAWAFAVQAAACABACQAAAAAAABQABADACADQABgGACgGQABgDAAgCQABgCABgCQAAgCABgCQATgbAggWQADAGACAFQALAagXAZQgQAQgHAbQAAACAAABQgCAIgBAGAiLCpID7iMQgwifgCgHQgCgKgBgKQgBgBAAAAIAAgBQgPgUgPgYQAAgBAAAAQgBgBgBgCQAAAAAAAAQgigBgKgdQgGgOgBgQQAAgBAAgBQgBgBAAAAQAAgEAAgEQgBgXgHgPQgCgEgCgEQgFgSAGgJQAGgLAVADQAFABAEAIQABAEAAAIQAAADAAAEQgBACAAADQgBADAAADQgBACAAADQAAABAAABQgBABAAABQAAABAAABQAAABAAAAQgEAMAAAMQAAADABADQABAPAGANAAQktQgEgHgHgFABGlWQgBgJgFgGAAvlWQgBAEgCAEQgBAGgCAHQgBAEgBADQgBADAAACQgDACABAFQgBABgBACQgGAMANAKAAel4QgEgEgGABABJj4QgRgFAHgTQAFgPAOgJQABAAABgBIAAAAQADgBADgDQACgCADgCQABgBABgBQAOgUAPgTQAFgGAFgEQAAgBABAAQAAgBABAAQABgBABgBQASgNAQAMQAGAEgBAIQgDATgRAJQgbAQgOAgIAAAAQABABABABQADADADAFQAEAEACAFQADgEAEgEQAAAAAAAAQAGgGAFgFQABgBABgBQASgQAJAGQAHAFABATQAAAHgEAGQgNALgNAMQgBABgBABQACALgDAJQgDAGgFAHQgDAEgEAFQABgBAAgBQgBABgBACQABgBAAAAQgGAMgGAJQB9DSgWAfQgFAHgTATQgBACgCACIgBAAIgkATIgrAgQgEADgFADQgJAHgKAHQgVAPgUAOQgIAGgIAGQgWAQgRATQgIAHgHAIQgHAHgGAIQgQAVgMAYQgLAVgFATAAkjUQAKAKALAGQABABABABQAMAHAPgCQANgBAOgGACIlIQAEgIACgKACWjzQgCgKgFgDAB2kRQgCAHgCAIQgBAEgBAEABnkeQgBgEAAgEACbjfQgHAHgGAGACEj+QgLANgHAQABLk3QADAIAGAGAjdGzQgLgbAAgfQAAgHABgHQADglALgjQALgiAWgfQAUgcAYgd");
	this.shape_4.setTransform(53.1,17.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CE9F6E").s().p("Ai/G1QgSgEgMgGQgLgbAAgfIABgOQADglALgjQALgiAWgfQAUgbAYgdIABgBID7iMIgyilIgDgUIgBgCIAAAAQgPgUgPgZIAAgBIgCgDIAAAAQgigBgKgdQgGgOgBgQIAAgCIgBgBIAAgIQgBgXgHgPIgEgHQgFgTAGgJQAGgLAVADQAFABAEAIQABAFAAAHIAAAHIgBAFIgBAGIgBAFIAAADIgBABIAAACIAAACQgEALAAALIAAABIABAGQABAPAGAOQgGgOgBgPIgBgGIAAgBQAAgLAEgLIAAgCIABgCIAAgBIAAAAIABgCIAAgBIAFgXIAEgPIAAgMQAAgHACgHIABgCIAAAAIADgJQAGgOANgRQAQgTAOAJQAQAKgVAZQgTAWAFAVIABAEIAAABIADAGIADgMIABgFIACgEIABgEQATgbAggVIAFAKQALAagXAZQgQARgHAbIAAADIgDANIADgNIAAgDQADAHAGAGIAAABIgCAAQgOAJgFAPQgCAGAAAEQAAALAMADQgMgDAAgLQAAgEACgGQAFgPAOgJIACAAIAAgBIAGgDIAFgFIACgCIAdgmIAKgLIABgBIABgBIACgCQASgNAQAMQAGAFgBAHQgDATgRAJQgbAQgOAgIAAABIACABIAGAIIAGAJIAHgHIAAgBIALgLIACgCQASgQAJAGQAHAFABAUQAAAGgEAGIgaAYIgCABQACAMgDAIQgDAHgFAHIgHAIIABgCIgCADIABgBIgBABIACgDIgBACIgMAWQB9DSgWAeQgFAHgTAUIgDADIgBAAIgyAaIgFAGIATgNIgrAgIgJAGIgTAOIgpAdIgQAMQgWAQgRATIgPAPIgNAQQgQAVgMAXQgLAVgFATQAFgTALgVQAMgXAQgVQAYAbgFAiIgDAOQgJAhgdAZQgaAWgmAFQgPACgPAAQgYAAgWgGgACFi2IAAAAIAAAAIAEgFIgEAFgABRjEIAFAAQANgBAOgHQgOAHgNABIgFAAIAAAAIgBAAQgLAAgJgFIAAgBIgBAAIAAAAIgCgBQgLgHgKgJQAKAJALAHIACABIAAAAIABAAIAAABQAJAFALAAIABAAIAAAAgACOjZIANgOIgNAOgAByjpQAHgPALgOQgLAOgHAPgACWj7QgCgKgFgDQAFADACAKgABykKIgCAIIACgIIAEgOIgEAOgAApkdQgJgHAAgHQAAgEACgEIACgDIAAAAQAAgFACgBIABgFIACgIIADgNIADgIIgDAIIgDANIgCAIIgBAFQgCABAAAFIAAAAIgCADQgCAEAAAEQAAAHAJAHgABnkmIgBgHIABAHgAAQk1QgEgHgHgEQAHAEAEAHgACIlPQAEgJACgKQgCAKgEAJgABGleQgBgJgFgGQAFAGABAJgAAemAIAAAAIgBAAQgDgDgEAAIAAAAIAAAAIgCAAIACAAIAAAAIAAAAQAEAAADADIABAAIAAAAg");
	this.shape_5.setTransform(53.1,18.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.1,1,1).p("ADXlkQACAAABgBIAAAAIABAAQABAAABgBIAAAAQAOgGAJgEQAKgEADgDQAFgCAFgFQAFgEAHgEQABAAAAAAIABgBQAEgBAEgCQAPgEAWgBQAYAAADARQADATgigBQgdAAgNARQgBACgBABQAAABgBAAQgBADgBADQgEACgEACQgGADgGADQgEABgDACQgCABgDABQgDAAgDADQgCAAgBAAQgNADAAARAEil0QAAgFgEgEAgcAFQAfgCADgLIAAABQAHgOAMgVQACgCACgDQAPgYAXghQA6hTADgFQAGgIAHgIQABAAAAgBIAAAAQAGgZAJgbQAAgBAAAAQABgBAAgCQAAAAAAgBQgWgcAPgbQAHgNAMgLQAAgBABgBQAAAAAAAAQADgDADgDQARgPAHgQQACgEABgEQALgPALgCQAMgCAMASQACAEgDAJQgCAEgGAFQgDACgDACQgDABgCABQgDACgCABQgCACgDABQgBABgBAAQAAABgBAAQgBABgBAAQAAABgBAAQgLAFgJAIQgDACgCACQgKALgFAOAETlRQAGgCAFgDQADgBACgBQACgBABAAQADgBACgBQAggDAmALQgCAGgDAFQgNAZgigCQgXgBgZAMQgBAAgBABQgHAEgFADADglOQACgHgBgJACokFQAAAOACANQAAABAAABQACAOALALQAJAJAOAGADckAQgHgPATgIQAOgGAQAFQABABABAAIAAAAAENkmQgDAHgCAIQADACAEAAQADABAEAAQABAAACAAQAYgBAYgBQAIAAAGABQABAAABAAQABAAAAAAQACAAACABQAVAFABAUQAAAHgGAEQgQALgSgHQgegLgiAKIAAAAQAAABAAABQAAAGgCAFQgBAFgCAFQAFAAAFAAQABAAAAAAQAIABAHABQACAAABAAQAYADABALQABAIgOAOQgFAEgHABQgSgDgRgCQgBAAgCAAQgHAJgJACQgHACgIABQgFAAgGAAQgNADgLACQhNDaglAOQgDAEgEADQgBACgCABIAAABIglATIgoAfQgFAEgFADQgJAHgKAHQgVAOgUAOQgIAGgIAGQgVAQgUATQgHAIgIAHQgGAIgHAIQgQAVgMAYQgLAUgFATAEMjtQgGADgIADQgDACgFACAEMkCQADgCADgDAFCkDQAJgCAJgFAEHjWQgRABgRAEAEik/QAGgGABgIADUiiQABAAABAAQgCAAgBAAQABAAAAAAgAD+iwQgJgBgKgBABKBLQgCABgDAAQgDABgGAAAloGaQgLgbAAggQAAgGABgHQADglALgjQALgjAWgeQAUgcAZgdAkWCQID6iLAEKjCQAHgHgBgG");
	this.shape_6.setTransform(67,20);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CE9F6E").s().p("AlKGcQgSgEgMgGQgLgbAAgfIABgOQADglALgjQALgiAWgfQAUgcAZgdIAAAAID6iIIAAAAQAfgCADgNIAAAAQAHgOAMgUIAEgFIAmg5IA9hZIANgPIABgCIAAAAQAGgYAJgcIAAAAIABgEIAAAAQgWgdAPgaQAHgNAMgMIABgBIAAgBIAGgGQARgPAHgPIADgIQALgPALgCQAMgCAMARQACAFgDAIQgCAFgGAFIgGADIgFADIgFADIgFACIgCACIgBAAIgCACIADgBIAAAAIABAAIACgBIAAgBIAXgJIANgHIAKgHQAFgFAHgDIABgBIABAAIAIgDQAPgFAWAAQAYgBADARQADATgiAAQgdAAgNARIgCADIgBABIgCAGIgIADIgMAGIgHADIgFADIAAgBIAAAAIAAAAIgBAAQgCABgCACIgBAAIgDABQgNACAAAQIAAABIAAgBQAAgQANgCIADgBIABAAQACgCACgBIABAAIAAAAIAAAAIAAABIAFgDIAHgDIAMgGIAIgDIALgFIAFgCIADgCIAFgCQAggDAmALIgFALQgNAZgigCQgXgBgZAMIgCACIgMAGIAMgGIACgCQgDAHgCAJIAHACIAHABIADAAIAwgDIAOABIACAAIABAAIAEABQAVAFABAVQAAAHgGAEQgQAKgSgHQgegLgiALIAAAAIgOAGIgIADIAIgDIAOgGIAAACIgCAKIgDAKIAKABIABAAIAPABIADABQAYADABAKQABAJgOANQgFAFgHAAIgjgEIgDgBIgTgBIATABQgHAJgJADQgHACgIAAIgLABIACgBIgDABIABAAIgYAFQhNDZglAPIgFABIgBAAIgEAAIgBAAIgDAAIADAAIABAAIAEAAIABAAIAFgBIgHAGIgDAEIAAAAIgzAZIgFAHIATgNIgoAgIgKAGIgTAOIgpAdIgQAMQgVAQgUATIgPAPIgNAPQgQAVgMAYQgLAVgFATQAFgTALgVQAMgYAQgVQAYAcgFAhIgDAPQgJAhgdAZQgaAWgmAFQgPABgOAAQgZAAgWgFgADRipIgGgBIgBABIAAAAIAHAAgACqjvQACANALALQAJAKAOAGQgOgGgJgKQgLgLgCgNIAAgBIAAgBQgCgMAAgLIAAgEIAAAEQAAALACAMIAAABIAAABgAEKjJQAGgGAAgGIAAgCIAAACQAAAGgGAGgADljZQARgEARgBQgRABgRAEgADckHQgCgFAAgEQAAgJAOgFIABgBIABAAQAGgDAIAAIAAAAIAAAAIAJABIAAAAIACABIACAAIABAAIAAABIACABIAAAAIAAAAIgCgBIAAgBIgBAAIgCAAIgCgBIAAAAIgJgBIAAAAIAAAAQgIAAgGADIgBAAIgBABQgOAFAAAJQAAAEACAFgAEMkJIAGgFIgGAFgAFCkKQAJgDAJgFQgJAFgJADgADWlrQgLAFgJAIIgFAEQgKALgFAPQAFgPAKgLIAFgEQAJgIALgFIABAAIgBAAgAEilHQAGgGABgHQgBAHgGAGgADglVQACgGAAgGIgBgEIABAEQAAAGgCAGgAEil7IAAgBQAAgFgEgEQAEAEAAAFIAAABgABKBEIAAAAgADUipIAAAAgADTipIADgBIgCABIgBAAgAD+i4IAAAAgAEMj0IAAAAgAENkuIAAAAg");
	this.shape_7.setTransform(67,20.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(0.1,1,1).p("ADfjPQAbgOAfgPQABAAAAgBQACAAACgBQAAgBABAAQAQgqAhgIQARgFARAAQABAAABAAQAAAAABAAQAEAAAEAAQAXACATgHQAFgBAFgDQAUgDAHAHQAJAJgMAYQgDAFgKAEQgFACgIAAQgDgBgEgCQgCgBgCgBQgDgBgDgBQgCAAgDgBQgBAAgBgBQgBAAgBAAQgBAAgBgBQAAAAgBAAQgLgFgMgBQgDgBgDAAQgQABgRAHAGekGQgCAAgDgBIAAAAQgCAAgBAAQABABABAAIAAAAQANAIAIADQAKAFAEABQAFABAHABQAHABAHADQAAAAABAAQAAABABAAQADACAEACQAMAJAMARQANAUgPAQQgSASgQgcQgPgYgXADQgCAAgCAAQgBABgBAAQgDABgEABQAGADAFADQACABACABQACABACAAQACABACABQATAZAJAoQgHAEgGABQgfAKgQgeQgKgUgZgLQgBAAgCgBQgHgDgFgCAHJjXQAGgFABgHAGTkJQABABABABIABAAIAAAAAGTkJQABABABABQABAAAAAAAGfjIQgEgBgEgCQgFgDgGgDQgEgBgDgCQgCgBgCgBQgBgDgFAAQgBgBgBgBQgKgJgQAOAGCjvQAJgFAHgHAEfjjQgPAMgMANQgNANgFASQgEAQABAQADdjOQABAAABAAIAAgBADdjOQABAAABgBAE6h8QgGgDgGgEQgEgBgEgCAEhhuQADAEADAFQAAAAAAAAQAEAHADAHQAAABABACQAIAWgJAJQgIAIgUAAQgHgBgEgFQgHgRgGgQQgBgBAAgBQgNABgHgGQgFgEgFgGQgGgHgEgKQgbAEgWAFQgDABgDAAQgSAFgPAGQgQAGhAAcQgNAFgPAHQgYAIgbALQgIADgIADQgPAGgNAHQgIAFgIAEQgKAFgKAIQgcAUggAXQgVAOgUAOQgIAGgIAGQgVAQgUATQgHAIgHAHQgHAIgHAIQgQAVgMAYQgKAUgFATAD5hWQgEgJgEgJAEQhbQAKAAAGgGAE6h8QgBABAAAAQgGAEgFADQgGAEgHACQgJgOgMgKAE1izQALgTARAJQANAIADARQAAABAAABIAAABQABADABAEQABADACADQAAACABABQANATAOATQAEAGADAGQAAABAAABQAAAAABABQAAACABABQAFAWgTARQgGAGgIgCQgSgFgCgUQgFgigbgTIgBAAAFPiNQAEAAAEAAAFrhhQAHAFAKAEAFziqQgJADgJAGAChjJQABAAACgBQAfgEAaAAAChjJQAAAAgBAAQACAAACgBAChjJQABAAAAAAQAdgDAegCAmeAnQAagbAfgUQAegVAdgRQAfgSAkgPQAigPAmgJQAfgHAegKQAGgCAHgCQABgBACgBQAWgIAWgHQALgDALgDQAggKAhgKQACgBADgBQACAAACgBQAigKAjgLQALgDALgDAGWitQAJAAAIgFAnvExQgMgbAAggQAAgGABgHQAEglALgjQAKgjAWgeQAUgcAZgd");
	this.shape_8.setTransform(80.6,30.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CE9F6E").s().p("AnSEzQgRgEgMgGQgMgbAAgfIABgOQAEglALgjQAKgiAWgfQAUgcAZgdIAAAAQAagbAfgTQAegWAdgQQAfgTAkgOQAigPAmgJQAfgHAegLIANgEIADgBIAsgPIAWgHIBBgUIAFgBIAEgCIBFgUIAWgHIAFgBIAGgCIABAAIABAAQAdgEAegCIACAAIAAAAQAbgPAfgPIABAAIAEgCIABgBQAQgpAhgJQARgEARgBIACAAIABAAIAIABQAXABATgGIAKgEQAUgEAHAIQAJAIgMAYQgDAGgKAEQgFACgIgBIgHgCIgEgCIgGgCIgFgCIgCAAIgCAAIgCgBIACABIABABIAAAAIACABIAAAAIAVALIAOAFIAMACQAHABAHADIABABIABAAIAHAEQAMAJAMARQANAUgPAQQgSASgQgcQgPgYgXADIgEABIgCAAIgHADIALAFIAEACIAEACIAEACQATAZAJAoIgNAFQgfAJgQgdQgKgVgZgKIgDgCIgMgEIAMAEIADACQgJACgJAGIAAAAIAAgCQgDgSgNgHIAAgBIgBAAQgFgDgFAAIAAAAIAAAAQgKABgHAMQAHgMAKgBIAAAAIAAAAQAFAAAFADIABAAIAAABQANAHADASIAAACIAAAAIACAHIADAHIABACIAbAmQAEAGADAHIAAABIABABIABAEQAFAVgTASQgGAGgIgCQgSgFgCgVQgFghgbgTIgBgBIgMgGIgIgEIAIAEIAMAGIgBACIgLAHIgNAFIAGAJIAAABIAHAOIABACQAIAWgJAKQgIAIgUgBQgHAAgEgGIgNghIgBgCIgIgRIAIARQgNABgHgFQgFgFgFgGQgGgHgEgKQgbAEgWAFIgGACQgSAEgPAGIhQAiIgcAMIgzATIgQAHQgPAFgNAIIgQAJIgUAMIg8ArIgpAdIgQAMQgVAQgUATIgOAPIgOAPQgQAVgMAYQgKAVgFATQAFgTAKgVQAMgYAQgVQAYAcgEAhIgDAPQgKAhgcAZQgaAWgnAFQgPABgOAAQgZAAgWgFgAF8hgQgKgDgHgGQAHAGAKADgAEQhiQAKgBAGgGQgGAGgKABgAEhh2QgJgOgMgKQAMAKAJAOgADviSIAAgJQAAgMADgLQAFgSANgNQAMgOAPgLQgPALgMAOQgNANgFASQgDALAAAMIAAAJgAFXiUIgIAAIAIAAgAGWi0QAJgBAIgFQgIAFgJABgAF5jjIACADQAFAAABADIAEACIAHADIALAFIAIAEIgIgEIgLgFIgHgDIgEgCQgBgDgFAAIgCgDIgBAAQgDgDgFAAIAAAAIAAAAQgHAAgIAHIAAAAIgBAAIAAABIAAAAIgBABIABgBIAAAAIAAgBIABAAIAAAAQAIgHAHAAIAAAAIAAAAQAFAAADADIABAAgAHJjfQAGgEABgHQgBAHgGAEgAGCj3QAJgEAHgIQgHAIgJAEgAF1kXQgQAAgRAIQARgIAQAAIABAAIAAAAIACAAIADAAQAMABALAFIABABIgBgBQgLgFgMgBIgDAAIgCAAIAAAAIgBAAIAAAAgAD5heIAAAAgAFzixIAAAAg");
	this.shape_9.setTransform(80.6,31.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},2).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).wait(8));

	// ball
	this.instance = new lib.static_ball("synched",0);
	this.instance.setTransform(31.4,5.7,1,1,0,0,0,23.1,23.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({x:63.8,y:-24.1},0).wait(1).to({x:110.4,y:-51.2},0).to({scaleX:1.83,scaleY:1.83,x:300.1,y:-309.7},8).wait(1));

	// head
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(0.1,1,1).p("ACOjPQACAFAAAFQAAACgBACQAAACgCAAQgCACgCABQgFABgCAEQgCAEAEADQABACAAAAQAAABgBABQgDACgDABQgDACgEAAQgDACgBACQAAABAAABQABAEgBAEQgDAEgEADQgDACgDACABnhJQgBgEABgEQAAgEACgFQACgCADgCQADgBACgBQACABAAgBQABAAABgBQAEgEAAgGQAAgCABgCQABgHAGgBQAFAAAFABQACAAABAAQAIgBADgGQACgEgBgEQgBgFgCgFQAAgBABgBQACAAABAAQAFAAAEAAQACAAACgBQADgEgBgFQAAgBgBgBQgBgBgBgCIABgBQAFgDAGABQAEAAADAAIAAABQABAAACAAQACABACACQABAAAAAAQADgDgBgEQAAgCgBgCQgEgFgFgFABchHQgBgKADgIQACgFADgGQADgFAAgGQAAgBgBAAQgBgBAAgBQABABAAAAQAGABAGgBQADAAACgBQACAAAAgCQABgBABgCQABgEgBgEQgBgCgBgDQAAgBAAgCQgDgEAEgDQAFgDAGACQADACADAAQABABABgBQABgBAAgDQABgBAAgCQAAgCgBgCQAAgCgBgCQgBgCABgCQACgBABgBQAFgCADACQACACACAAQACACACgBQAHgDAAgHQABgHACgHADUiVQgEAEgDABQgDACgDAAQgCgBgDAAQAAAAgBABQgFAGACAIQAAABAAACQAAAGgHABQgDAAgEAAQABAFAAAEQgBAFgGADQgBACgCAAQgCAAgCgBQgCAAgCAAQAAABAAACQgBADgDACQgCACgEABAC8iiQgDAFgBACQgFAJgEAJQgDAFgCAGQgDAIgDAIQgCACgDAAQgCABgCAAQgDABgEACQgCABgCABIgBABQAAABAAAAQABACAAACQABAEgCADQgDAGgHAEQgBABgCgBQAAAAgBgBQgBgBgCgCQgCgCgCAAQgDgBgDACQgCABgCACQgCADAAADQAAADAAAEQABAFAEADADRhpQgCgCgEgBQgFAAgFACQgCACgCACQgBACgBACQgEAJgKADQgDACgDAAQgFAAgFgCAC8hLIAAgBQAAgBAAgCQgBgBgBAAQgDgBgDABACsg6QgCgEgEgFQgBgBgCgBQAAAAgCAAQgEAEgFACQgDACgDABQAAAAgBgBQgBgBgBgCQAAgBgBgBIAAAAQgBgCgCgCQgCgCgEgBQgDgBgDABQgDACgCADQgBAEgBAEACMg+QgBACABADACMg5QACAGABAHQABAGAAAGQAAAEAAADQgBALACAJQABAEACABQAKgDAHgHQAAgBAAAAQACgBABgEACQBnQADgCADgDQAFgHADgJQABgHACgHQACgKgBgJQAFgDAFgDQADgCACgDQAGgHgBgKQgCgMgLAAQgGABgHgEQgFgCgDgEQgBABgCAAQgBABAAAAQABADAAADQABAGgEAGIAAABQgGAJgKAAQgJABgFgKQgFgIgCgJQgDgIAEgJQABgLAIgHQADgDADAEQAIAFAEAIQAGAJAEAIQABAAAAACQAAAAgBAAQABADABADACPACQgEABgEAAQgEgBgDgBQgEALAJAGQAEACAFAAACQBnQgCgHAAgHQgIABgKAAQgKABgJABQgJABgKgBQgEAAgEABQAAAAgBAAQAAAAgBgBQgKgDgHgHQgJgDgHAJQgFAHACAHQAEAGADADQAAAAAAABQAGAIAGAHQAGAIAFAJQACADADAEQgFAHgIAGQgIAFgLAAQgJABgKgBQgKgCgKAAQgIAAgJgBQgKgCgIgFQgFgCgDgDQgDgDgCgEQgEgHgCgIAB5BqIAAAAQAHADAJABQADgBAFgCQAAgCgBgCABhjHQAAABAAAAQgBABAAAAQgBABgBABQgBADACABQABABACABQADABACAAQACACACAAQABABAAABQAAABAAAAQgDADgEACQgFADgCAFQAAACAAACQABABAAAAQACAAABAAQADABACABQADABgBAEQAAACgBAAQgEAEgFABQgFABgFADQgCAAAAACQABADACACQABABAAABQABACAAAAQABADgCABQgBACgBACQgGAIgBAKQgBACACAAQACACABABQADABABACQABACABACQACADgBACQgBACgBAAQgBACgCABQgCABgDAAQgCACgCABQgCABAAABQgCAGAAAHQACAFABAFABgjMIAAAAAAggsQgGgFgFgGQgBAAAAgCQAAgBAAgBQAAgCACgBQACAAACgCQAGgCAEgFQABgBAAgBQAAgCgBgCQgBgDgCgCQgEgFgEgGQAAgBgBgBQgCgIAGgGQABgCACgCQACgDADgCQABgBAAgBQgBgHgFgEQgDgCgCgCQgBgBAAgCQgBgEAEgDQABgBABAAQACAAABgBQAAAAABgBQAAgBABgCQABgEgDgEQgBgBgCgBQgCgBgBgBQgDgDACgCIABgBQADgGAFgFQACgCABgBQABgBABgBQADgCgCgEQgBgCgCgEQgBgFAEgEQADgDADgBAA0g1QAAgHgDgGQgBgCgBgDQgBgCAAgCIABAAQAFAAAEADQACAAABAAIABAAQAAgBABgBQAAgBAAgCQAAgBgBgCQgBgCgBgBQgCgDgCgDQgBAAAAgCQAAgDADgBQACgBACgBQAEgBACAAQABABACAAQAAgDgDgCQgEgFgFgEQgBgBgCgBQgDgDgBgEQAAgDAAgDQABgBAAgCQAEgGAHgEQADgDgBgEQgBgBAAgCQgCgIgEgHQgBgDAAgDQACgJACgIQAAgBABgBQACgCABgCQAGgFAFgGQACgDAAgDQAAgDgBgDAAGhFQAGgIAAgKQAAgBAAgDQgBgEgEgBQgBAAgBAAQAAAAAAgBQgBAAAAgCQABgCABgDQAEgEAFgFQACgBABgBQACgBAAgDQABgFgFgEQgDgDgEgDQgEgCgCgEQgBgBgBgCQgBgBAAgCQAAgHADgHQABgBABgDQABgBAAgCQADgEACgEQABgCABgCQACgGgEgFQAAgBgBgBQAAAAgBgBQgFgFgEgDAAPgoQgJgFgGgGQAAgCAAgCQgBgEABgFQAAAAAAgBQgBgBgBgBQgFgCgDgGQgBgBgCgCQgBgGABgFQADgJAGgIQABgBABgCQACgFgCgFQgBgDgDgBQAAAAgBgCQgDgEgDgDQgBgBgBgCQgBgFABgFQACgFACgGQABgBAAgCQABgGgEgFQAAgBgBAAQAAgBgBgBQgEgCgEAAQgBAAAAgBQgEgDgCgEAAAggQAAgDgBgDQgCgBgDgBQgCAAgCgBQgBAAgBgBQgCgCgBgDQAAgFABgDQABgDgBgDQgBgDgEgCQgCAAgCgBQgBgBgBgBQgBgDAAgEQAAgCAAgDQAAgCgBgCQgCgCgBgCQgBAAAAgCQAAgDABgEQAEgFACgFQABgBAAgCQABgCgBgCQgDgEgDgEQgBgCgCgBQgFgEgCgGQAAgBAAgDQAAgGAEgGQAAAAAAgBQABgCAAgBQAAgCgDgCQgCgBgCgBQgFgDgFABQgCAAgDAAQgCAAgBgDQgBgBgBgCQgBgCAAgCQgBgEABgEAhaiqQABAFACADQACADADACQAFACAEACQAEADADAFQAEAFgBAGIAAABQAAAFgBAEQAAACAAACQAAADACACQAEAEAFACQABABACABQAEAEADAFQACAEgBAEQAAACAAABQABAEgCAEQAAACAAABQAAAFADAEQABABgBAAQABACAAABQADAGABAHQABADACADQABABABAAQACABAAADQAAABAAABQACADACABQABABACAAQACAAAAAAQABABABABQADAEACAEAgyg3QAAgEgBgGQgBgCgBgEQgDgJADgIQABgBAAgCQABgBgBAAQgBgBgBAAQgDgBgDgBQgEAAgCgFQAAAAgBgCQABgDgBgDQABgCgBgBQgBgDgDgBQgCgBgCAAQgCAAgCAAQgDgBgCAAQgBAAgBgCQgFgFACgHQACgDAAgEQAAgFgEgEQgEgFgGgCQgEgBgFgBAhDhEQABgBgBAAQAAgDABgDQAAgEgDgCQgDgCgCgCQgBgBgBgBQgDgDAAgDQAAgBAAgBQABgEgBgCQAAgBgBgBQgEgCgEAAQgFAAgGgBQgFgBgCgEQAAgBgBgBQAAgBgBgCQAAgBAAgCQAAgDAAgFQAAgHgHgDQgCgBgDgBQgIgFgDgJAhDhEIABABIAAAAQAAgBgBAAgAgUgFQAAgBAAAAQABgDABgEQAAgBgBgBQgBgCgDAAQgCgBgCgBQgDAAgDgBQgFABgFgDQgCgBgBgCQgCgCgBgDQAAgEAAgEQABgCAAgCQABgCgDAAQgCgBgCgBQgCAAgDgBQgFgBgBgGQABgDgCgDQgBAAgBgBQgDgBgDgCQgBgBAAgBQgCgFAAgFQAAgFgFgBQgDAAgCAAQgKABgIgFQgCgBgCgCQgBgBgBgCQAAgCgBgCQAAgDgBgDQAAgFgEgEQgCgBgCgBQgFgDgGgCQgEAAgEgBAhGgFQAAgFgBgFQgBgCgCgBQgEgEgGACQgDABgDABQgDgKABgIQgBAAAAAAQgCgBgBAAQgDABgEgBQgBAAgBgBQgDgEACgDQACgEABgDQABgCgCgBQgGgFgHACQgCABgCACQgCABgBABQgCABgBAAQgGACgEgEQgDgDgBgFQAAgDgBgCQAAgDgBgCIAAgBQAAgBgCgBQgBgBgCAAQgDAAgDABQgEABgDACQgDABgCABQgEADgEgCQgCAAgCgBQgCgBgCgBQgCgCgBgCQgHgHgJACQgDAAgGADAglgBQgGgEgHgBQgEgBgEADQgJAEgHAGQgGAHgDAIQgDAJAEAHQAAABAAAAQABAAAAABQAEAHAGAHQAHAGAJACQAKADAJgBQAGAAABgDAglgBQABgHgDgCQgBAAgCAAQgHgDgIAAQgBAAgCgBQgBABAAgCQgBgEAAgEQABgFgEgEQAAgBgCgBQgBgBgDgCQgCgBgDgBQgEgCgEgBQgCgBgBgBQgCAAAAgBQAAgDABgDQABgFgDgDQgCgBgCgBQgEgDgGgCQgCAAgCAAQgFgBgGAAQgCgBgCgCQAAgCABgCQAAgCABgDQACgFgEgEQAAAAgBgBQgBgBgCAAQgCgBgCgBQgDAAgDAAQgBABgCAAQgDAAgEAAQgDABgDgCQgBgBAAgCQABgDABgCQAAgCAAgCQAAgCAAgCQgBgBgBAAQgCgBgCABQgCABgCgBQgCABgDgCQgDgCgCgDQgCgEAAgEACAABQgFgBgFgBQgGgEgDgFQgDgEAAABAhagSQgCABgDACQgEABgDgBQgGgCgDgFQgBgCAAgBQgBgGgFgBQgDgBgCABQgFgBgEADQgCABgCgBQgBAAgBgBQgCgBgCgBQgDgDgBgEQgBgDgDgBQgBAAgBAAQgBABgCAAQgBAAgCABQgEAAgEAAQgBAAgBgBQgDgDgCgDQgBgBgBAAQAAgBgBgBQgCgBgEABQgEAAgEACQgBAAgBgBQgCAAgBgBQgCgCgBgDAhdAPQgDgCgCgCQgCgCgBgDQgBgDgCgDQgBAAgCgBQAAgBgBgBQgBgDgEABQgDABgEAAQAAAAgBgBQAAgCgBgBQgCgDgDgBQgDAAgCgBQgCgBgBgCQgCgCgBgDQgBgBgBAAQgBgBAAAAQgDABgDAAQgDABgEAAQgCAAgCAAQgCgBgDgBQgFgBgFgBQgDgBgBgCQgCgBgBgDQAAgDAAgDQAAgCgCgCQgBgCgCABQgGAFgHADQgBABgBgBQgDgBgCgCQgBgCgCgDQgCgEgBgFAhPAAQABgCAAgDQgBgBgCgBQgBgBgBABQgCAAgBAAQgCACgCABQAAACgCAAQgDAAgCgBAhfA8IAAgBQABgHgBgJQAAgCAAgBQgBgBgBAAQgCgBgBABQgBABgBABQgBAEgCAEQgCACgCAAQgCgBgDgBQgFgCgBgFQgBgDABgEQABgFgDgEQAAgBgBAAQAAgBgBAAQgFABgFACQgCABgCAAQgDAAgCgBQgBgBgBAAQgBgBAAgCQAAgCABgDQAAgBAAgBQABgDgCgBQgCgBgBgBQgBgCgCgCQgGgEgHABQgDABgCABQgDACgBAEQAAABgBABQgCAEgEABQgCABgCgBAiNBoIAAABQgBAAgBAAQAAAAACgCQgVAGgQAEAiOBoQABAAAAgBAhuBnQAFgDADgEQAFgJAAgKQABgFAAgFQAAgCABgDAi9AQQgCgBgCgBABdCNQgEgFgJgFQgHgFgKgFQgIgEgIgFQAAgBAAAAABNBdQADADADABQAJACAKADQAJABAKADAghAfQgCgLgJgEQgKgGgBALQgBAHAFAFAglgBQADABACAAQAEADABADQACAEgDAFAAADZIAAAAAAEDCQgEgGgFgHABdCNQACgCACgEQAFgJAGgIQAGgGAHgGABLCXQAEADAEADQAIAFAFgHQAHgJgKgF");
	this.shape_10.setTransform(68.2,25.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(0.1,1,1).p("ADDioQgQgKgOgKQAAgBgBAAQgQgagcgLQgcgMgbgBQgQgBgLgDQgPgEgPgDQgdgGgWASQgDACgHgBQgigNgGAkQgCAOgPACQgOACgMAIQAAAfgiAAQgOgBgIAOQgMATABAcQgVAAgHAUQgCAHACAJQAGAWAOAPQgIAUAEAVQAEATALAOQALAQAPADQADABABACQADADACADQACAEAFgBQAJgBAIABQADABAAACQAAABABABQAEAHAJABQAEABAFACQABAAAAAAQABAAABAAQABAAAAABQAEAFAEgBQABAAABAAQACgBADgCQABAAAAAAQACAAADAAQAAAAABAAQADADAAABADZiZQgBgBAAgBQgFgDgFgDQgBgBgCAAQgBAAgBAAQgDgDgDgDQAGADAFAEQAGABAEAFQABABAAABgADmiAQgCgBgCgDQgFgKgDgKQAAgBgBAAQAJAMAEANgACZACQAOgJAOgPQAIgIAJgJIAAgBQAKgNALgQQAEgHAEgIQAGgJAAgOQAAgLgDgKACYgeQgBAAgBABQgBAAAAABQABAAAAABQAAABgBABQAAABAAABQAAABAAABQAAAAAAAAQABABgBACQAAABABAAQABACgBABQgCACgCABQgDACgDgFQAAAAAAgBQgBgDgCAAQgBAAAAAAQgCgCgCABQgCABgDACQAAAAgBAAQgCgCgEACQgCgDgCgBQgDAAgDAAQgBAAAAAAQgFACgEAAQgDAAgDABQgBAAgBgBQgBAAgBAAQgHABgHACQgFACgFAEQgDACgEABQgCgBgDACQgCAAgCABQgBAAgBAAQgHAEgHAFQgBAAAAAAQgBAAgCABQgBAAgBgBQgCAAgBAAQgGgCgFAFQgBABgDACQgFACgEAEQgBABAAABQAAACAAADQAAAAAAABQAAAEgDACQgCABgCAAQgCgBgCgCQgBgBAAgBQgCgBgBADQgBAHgCAGABqijQABgCgBgDIgBABIABgBQADgLABgFQAIgegngBABVi0QgIgXgTAMQADgZgUgNAAHilQgDgJgEgMQgSAKgFgYQgCgLgOgHAgViTQgQgFgIgVQgbgKgHgbAA4iuQgTgEgLgXQgegLgJgZAg1iSQgKgYgdACQgHABgCgGQgBgFAEgFAh6h1QgeAJgMgUAh/ihQAWgDAYAeAhkh4QgPgXgVgDAjJgqQACgRgBgUAi3AyQgMgIgBgNQgBgHgDgGAiChTQgBgEgLgDQgggLgCgaAhWBiQAAgBAAgBQAAAAABAAQAAgCACgBQAGgEAAgEQACgFACgGQAAAAABgBAiDCMIgBAAAhlCLIgeABAiwA2QgBgBgCgBQAAAAgBAAAgeC9QgDAKgCAJQgCAJgBAJAAQDqQAAgBgBAAQgCgDgFgHQgDAAgBgBQgFgCgFgDQgOgHgPgCAAQDqIABABAACDYQADADAEAFQACACACAEQABABABABQABABAAABIAAAAIAAABIAAgBAACDYIACAGAACDYQADAEADADAAKD8IgGgeACYirQgNgRgSgR");
	this.shape_11.setTransform(67.2,21.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0000FF").s().p("ABKA+QgRgFgDgKIgGgfIAEABIAHAKIABABIABABIAAAAIAbAjQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAgBAAIgNgDgAA9AdIAAAAIAAAAIgBgBIABABgAAwAQIgBgFIAFAGIgEgBgAhXhAIAAAAIAAABg");
	this.shape_12.setTransform(62.8,42.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CC9A67").s().p("ABTBeIgIgGIgGgHIgLgQIgLgQIAAAAQAHAFAJAEIARAKQAJAFADAFQALAFgIAJQgDAEgDAAQgDAAgDgCgAB5ArIgBAAIgTgEIgSgFQgDgBgDgDIABAAQAEgBAEAAQAJABAJgBIAUgCIASgBQgBAHADAIIABADIgJADQgIgBgHgDgAiNApIgBAAIgBABIACgBgACGg6IgGgBQgGgCgFgDQgGgEgCgFQgBgBgBAAQAAgBgBAAQAAgBgBAAQAAAAAAAAQACgLAHgHQADgCAEADQAHAFAFAJIAJAQIABAEIgBAAIgGABIgCAAg");
	this.shape_13.setTransform(68.2,31.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgBAGQgKgFAFgJIAGABQACABAFgBIABAFQACAEgEAHQgFgBgCgCg");
	this.shape_14.setTransform(81.8,26.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgJBDIgRgJQgIgEgIgGIgBgBIgGgJQgCgGAFgHQAHgKAJAEQAGAHAKADIACABQADACADABIARAFIATAFIgNAMQgGAIgGAJIgDAFQgCgFgJgFgAAUgoQgFgIgCgKQgCgJADgJQABAAAAAAQAAAAAAAAQABABABAAQAAABABABQADAEAGAEQAFAEAFABQgEALAJAFQAEADAFAAIgBAAQgFAJgKABIgBAAQgJAAgFgJg");
	this.shape_15.setTransform(77.3,31.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CE9F6E").s().p("AglB7QgpgUhlhGIAlgKIgCABIACAAIAegBQAFgDADgFQAFgJABgIIABgJIAAgGIAAgBIABgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQAGgDAAgEIAEgLIABgBIAAABQAFAIAGAGQAHAHAJACIAAAAIABAAIANACIAAAAIAAAAIAFAAIAAAAIABAAQADgBACgCIABgBIgBABQgCACgDABIgBAAIAAAAIgFAAIAAAAIAAAAIgNgCIgBAAIAAAAQgJgCgHgHQgGgGgFgIIAAgBIAAAAQgFgIAEgIQACgJAGgHQAHgIAKgEQADgCAEAAQAHACAHADIAEADQAEADABADIADgMQAAgBABAAQAAgBAAAAQABAAAAAAQAAAAABAAIABABIAEADIAEAAQAEgCgBgEIAAgCIACgEIABgCQAEgEAEgDIADgCQAFgFAGACIADAAIACAAIADAAIABgBIAOgKIACgBIAEgBIAFgBIAHgCQAFgEAFgCQAHgDAHAAIACAAIACABIAGgBQAEAAAFgCIABgBIAGABQACABACACQAEgCACADIABgBIAFgCQABAAAAAAQABAAAAAAQAAAAABAAQAAAAABABIABAAQAAAAABAAQAAAAAAABQABAAAAABQAAAAABABIAAABQADAFADgCIAEgDQAAgBAAAAQABAAAAgBQgBAAAAAAQAAgBAAAAIgBgBIAAgDIADAMIABANIAAAHQAAALABAIQABAEACADIgDACIgBAAIgBgDIgJgRQgFgIgHgGQgEgDgDACQgHAHgCAMQgEAIADAKQACAKAFAIQAFAJAJAAQAKgBAGgJIAAAAQAEgHgBgGIgBgGIABAAIADgCQADAFAGACQAGADAHAAQALgBABAMQABAKgFAIQgDADgDACIgKAGQABAJgCAKIgDAMQgCAIgGAIIgFAFQgDgIABgGIgSABIgUACQgJABgJgBQgEgBgEACIgBAAIgCgBQgKgDgGgHQgKgCgHAIQgEAHACAGIAGAJIABABIALAQIALAQIAGAHQgFAIgJAFQgIAFgKABIgTgBIgVgBQgHAAgJgCQgKgBgJgFIgIgGIgEgHQgEgGgCgIQACAIAEAGIAEAHIgFATQAPACAOAHIAMAFIAFAeIAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQgHAAgegPgAgxBuIADgSIgDASgAg1gtQgEgFAAgGIAAgCQABgHAFAAIAAAAIABAAIADABIACABQAJAFACAKQgCgKgJgFIgCgBIgDgBIgBAAIAAAAQgFAAgBAHIAAACQAAAGAEAFgAgehAQACgDAAgCIgBgEIABAEQAAACgCADgAAFB2IgBgCIAAAAIABACgAgHBkIAHAHIACAHIgJgOgAgpBJIAAAAgAiPAYIABAAIgBAAIABgBIAAABIAAAAIgCAAIABAAgAiOAYg");
	this.shape_16.setTransform(68.3,33.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AhZCuIgBAAIgFgBIgBABIgFADIgCAAQgEABgEgFIgBgBIgCgBIgBAAIgJgCQgJgBgEgIIgBgBQAAgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBAAQgIgBgJABQgFAAgCgDIgFgHIgEgDQgPgCgLgQQgLgPgEgSQgEgYAIgUQgOgPgGgVQgCgJACgGQAHgTAVgBQgBgbAMgUQAIgNAOAAQAiABAAggQAMgIAOgBQAPgCACgPQAGgjAiAMQAHACADgDQAWgRAdAGIAeAHQALACAQABQAbACAcAMQAcALAQAZIABABIAeAUIAGAGIACABIADAAIAKAGIABACIABACQADAJAFAKIAEAFQADAJAAALQAAAOgGAKIgIAMIgGgCIgBAAIgBAAIAAAAIgBAAIgGABIgBABIAAAAIgFADIgCAEQgEAJgKAEIgBAAIgBABIgCAAIgBAAIAAAAIgLgBIALABIAAAAIABAAIACAAIABgBIABAAQAKgEAEgJIACgEIAFgDIAAAAIABgBIAGgBIABAAIAAAAIABAAIABAAIAGACQgLARgKANIAAAAIAAAAIgBgDIgCgCIgBAAIgBAAIAAAAIAAAAIgEAAIAEAAIAAAAIAAAAIABAAIABAAIACACIABADIAAAAIgRASQgCgFgDgEIgDgCIgCAAIgJAFIgHADIAAAAIAAAAIgBgBIgBgDIgBgCIgBAAIgCgDQgDgDgDgBIgDAAIgBAAIgBAAIgBAAIgBABQgDABgBAEIgCAHIACgHQABgEADgBIABgBIABAAIABAAIABAAIADAAQADABADADIACADIABAAIABACIABADIABABIAAAAIAAAAIAHgDIAJgFIACAAIADACQADAEACAFQgOAOgOALIgBgMIgDgMIAAgBIAAgBIAAgCIABgCIgBgCIAAAAIABgBIACgBIgCABIgBABIAAAAIABACQgCACABADIAAABIAAADIABABQAAAAAAAAQAAABAAAAQABABgBAAQAAAAAAABIgEADQgDABgDgEIAAgBQgBgBAAgBQAAAAgBgBQAAAAAAAAQgBAAAAAAIgBgBQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAABgBAAIgFACIgBAAQgCgCgEACQgCgCgCgBIgGgBIgBABQgFACgEAAIgGAAIgCAAIgCAAQgHAAgHADQgFABgFAEIgHADIgFABIgEABIgCABIgOAKIgBABIgDAAIgCAAIgDgBQgGgBgFAEIgEADQgFACgEAFIgBABIAAAFIAAABQAAAFgDACIgEAAIgEgDIABgBIACgGIAAgBIgBgCIgFgCIgEgBIgFgBIgBAAIAAAAIgBAAIAAAAIgBAAIgGgCIgCAAIgDgDIgCgGIgBgEIABgEIABgDIAAgBQAAgBAAAAQAAAAgBAAQAAgBAAAAQgBAAAAAAIgFgCIgEgBQgGgBAAgGIAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBgBAAIgCgCIgFgCIgCgDIgBgIIAAgBQgBgGgFAAIgFAAIAAAAIgCAAQgIgBgIgEIgDgCIgCgDIgBgFIgCgFQAAgGgEgCIgDgCIgMgEIgHgBIAHABIAMAEIADACQAEACAAAGIACAFIABAFIACADIADACQAIAEAIABIACAAIAAAAIAFAAQAFAAABAGIAAABIABAIIACADIAFACIACACQABAAAAABQAAAAAAABQAAABABAAQAAABAAAAIAAABQAAAGAGABIAEABIAFACQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABIAAABIgBADIgBAEIABAEIACAGIADADIACAAIAGACIABAAIAAAAIABAAIAAAAIABAAIAFABIAEABIAFACIABACIAAABIgCAGIgBABIgBgBQgBAAAAAAQAAgBgBABQAAAAAAAAQgBABAAAAIgDANQgBgDgEgDIgEgDIAAgDQAAgEgCgBIgDgBQgHgDgIAAIAAAAIgBAAIgCAAIAAAAIgBAAIAAAAIgBgBIAAAAIAAgJIAAgBQAAgEgDgDIgCgCIgEgDIgGgDIgIgDIgDgBQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAgBAAAAIAAgBIABgFIABgCQAAgDgDgCIgDgDIgKgEIgEgBIgMgBQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBIgBgBIABgDIABgEIABgEQAAgDgCgCIgCgBIgDgCIgEgBIgEgBIAAAAIAAAAIgBAAIgEABIgCAAIgDABIAAAAIgBAAIgCAAIgBAAIgDgBIAAAAIgBgDIAAgBIABgFIABgEIgBgEIgCAAIgBAAIAAAAIgBAAIgBAAIAAAAIgCAAIgBAAIAAAAIAAAAIgBAAIgBAAIAAAAIgBAAIgCAAIgBAAQgEgCgBgDQgCgDgBgFQABAFACADQABADAEACIABAAIACAAIABAAIAAAAIABAAIABAAIAAAAIAAAAIABAAIACAAIAAAAIABAAIABAAIAAAAIABAAIACAAIABAEIgBAEIgBAFIAAABIABADIAAAAIADABIABAAIACAAIABAAIAAAAIADgBIACAAIAEgBIABAAIAAAAIAAAAIAEABIAEABIADACIACABQACACAAADIgBAEIgBAEIgBADIABABQAAABAAAAQABABAAAAQABAAAAABQABAAAAAAIAMABIAEABIAKAEIADADQADACAAADIgBACIgBAFIAAABQAAAAAAABQAAAAABAAQAAAAAAABQABAAAAAAIADABIAIADIAGADIAEADIACACQADADAAAEIAAABIAAAJIAAAAIABABIAAAAIABAAIAAAAIACAAIABAAIAAAAQAIAAAHADIADABQACABAAAEIAAADQgHgEgHgBQgEAAgDACQgKAEgHAIQgGAHgCAJQgEAIAFAIIgBABIgEAKQAAAFgGADQAAAAgBABQAAAAgBAAQAAABAAAAQAAABAAAAIAAgBIAAgGIgBgKIAAgDIgBgBIgBAAIAAAAIgBAAIgBABIgCACIgEAIIAAAAIAAAAIgBAAIgCABIAAAAIgBAAIgEgBQgFgCgCgGIAAgDIAAgEIABgCQAAgEgCgDIgBgBIgCAAQgFAAgFADIgBAAIgBAAIgBAAIAAAAIgBAAIAAAAIgBAAIAAAAIgEgBIgCgBIgBgCIABgGIABgCIAAgBQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAgBgBAAIgCgCIgEgDIgBgBIgBgBQgDgBgEgBIAAAAIAAAAIgDABIgBAAIgEABQgDACgCAEIgBADQgCADgEABIgCABIgCgBIgDgBIgBAAIgDgDQgMgHgBgOQgBgHgDgFQADAFABAHQABAOAMAHIADADIABAAIADABIACABIACgBQAEgBACgDIABgDQACgEADgCIAEgBIABAAIADgBIAAAAIAAAAQAEABADABIABABIABABIAEADIACACQABAAAAABQAAAAABAAQAAABAAAAQAAAAAAABIAAABIgBACIgBAGIABACIACABIAEABIAAAAIABAAIAAAAIABAAIAAAAIABAAIABAAIABAAQAFgDAFAAIACAAIABABQACADAAAEIgBACIAAAEIAAADQACAGAFACIAEABIABAAIAAAAIACgBIABAAIAAAAIAAAAIAEgIIACgCIABgBIABAAIAAAAIABAAIABABIAAADIABAKIAAAGIAAABIgBABIAAABIAAAGQAAgBgBAAQAAAAAAgBQAAAAgBgBQAAgBgBAAgAhiBpIABACIACADIAEAHQAAACACACQACADAEABQgEgBgCgDQgCgCAAgCIgEgHIgCgDIgBgCIAAAAIgDgCIAAAAIgBAAIgBAAIgDABIgCAAIgBAAIAAAAIAAAAIgBAAIgCgBIAAgDQgCgDgEAAIgFgCQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAAAIgEgGIgCgBIgBgBIgGACIAAAAIgGABIAAAAIAAAAIgBAAIAAAAIAAAAIgDgBIgFgBIgLgDQAAAAgBgBQgBAAAAAAQgBgBAAAAQAAAAgBgBIgCgEIgBgGIAAAAIAAgBIgBgDIgCgBIAAAAIAAAAIgBABIgOAIIgCAAIgEgDIgEgGIgCgIIACAIIAEAGIAEADIACAAIAOgIIABgBIAAAAIAAAAIACABIABADIAAABIAAAAIABAGIACAEQABABAAAAQAAAAABABQAAAAABAAQABABAAAAIALADIAFABIADABIAAAAIAAAAIABAAIAAAAIAAAAIAGgBIAAAAIAGgCIABABIACABIAEAGQAAAAAAAAQAAABABAAQAAAAAAABQABAAAAAAIAFACQAEAAACADIAAADIACABIABAAIAAAAIAAAAIABAAIACAAIADgBIABAAIABAAIAAAAIADACIAAAAgAhGBtIABgEIAAgBIgCgDIgBAAIAAAAIgBAAIAAAAIAAAAIgEABIgDADIgCABIgBAAIAAAAIAAAAIgEgBIAEABIAAAAIAAAAIABAAIACgBIADgDIAEgBIAAAAIAAAAIABAAIAAAAIABAAIACADIAAABIgBAEgAhABaIACAEIACAJIgCgJIgCgEIgBAAIAAgBIgBAAIgFgCIAAAAIgBAAIgDABIgFACIAFgCIADgBIABAAIAAAAIAFACIABAAIAAABIABAAgAhtBMQAGABABAGIABADQACAFAGACIAEAAIADAAIAGgDIgGADIgDAAIgEAAQgGgCgCgFIgBgDQgBgGgGgBIgDAAIgBAAIAAAAIgBAAQgFAAgEACIAAAAIAAAAIgCABIAAAAIAAAAIgBgBIAAAAIgDgBIgDgCQgEgDgBgEQAAgBAAgBQgBAAAAgBQAAAAgBAAQgBgBAAAAIgDAAIgDACIgCAAIgDAAIgDABIgBAAIgBAAIAAAAIAAAAIAAAAIgBgBIgBAAIAAAAIgGgHIgBgBIgBgCIgBAAIgBAAIAAAAIgBAAIAAAAIgBAAIAAAAIgBAAIgBAAIgIACIAAAAIgBAAIgBAAIgEgCQgCgCAAgDQAAADACACIAEACIABAAIABAAIAAAAIAIgCIABAAIABAAIAAAAIABAAIAAAAIABAAIAAAAIABAAIABAAIABACIABABIAGAHIAAAAIABAAIABABIAAAAIAAAAIAAAAIABAAIABAAIADgBIADAAIACAAIADgCIADAAQAAAAABABQABAAAAAAQAAABABAAQAAABAAABQABAEAEADIADACIADABIAAAAIABABIAAAAIAAAAIACgBIAAAAIAAAAQAEgCAFAAIABAAIAAAAIABAAIADAAgAhQBaQgDgIAAgHIAAgCIgBgBIgDgBQgDABgEgBIAAAAIgBAAIgBgBIgBgEIAAgDIADgHIABgBIgBgBQgEgEgFAAIgBAAIAAAAIgBAAIAAAAIgCAAIAAAAIgFADIgDACIgDACIgBAAIgBAAIAAAAIgBAAIgFgBIgBgBIAAAAIAAgBIgBAAQgDgDAAgFIgBgFIgBgFIgBAAIgBgCIgDgBIAAAAIAAAAIgCAAIgFAAIgHADIgFADIgEABIAAAAIgBAAIgDAAIgDgBIgEgDIgEgEIgBAAIAAgBQgFgEgGAAIAAAAIAAAAIgDAAIgBAAQgDAAgGADIABgZIAAgKIAAAKIgBAZQAGgDADAAIABAAIADAAIAAAAIAAAAQAGAAAFAEIAAABIABAAIAEAEIAEADIADABIADAAIABAAIAAAAIAEgBIAFgDIAHgDIAFAAIACAAIAAAAIAAAAIADABIABACIABAAIABAFIABAFQAAAFADADIABAAIAAABIAAAAIABABIAFABIABAAIAAAAIABAAIABAAIADgCIADgCIAFgDIAAAAIACAAIAAAAIABAAIAAAAIABAAQAFAAAEAEIABABIgBABIgDAHIAAADIABAEIABABIABAAIAAAAQAEABADgBIADABIABABIAAACQAAAHADAIgAgJBNIABABIAGAJIgGgJIgBgBIgCAAIgBAAIAAAAIgBAAIgBgBIAAAAIgBAAIAAAAIgDgEIAAgDIAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAAAgBAAIgCgCQgCgCAAgEQgCgGgDgHIAAgCIAAgBIAAAAQgDgFAAgFIAAgBIAAgBIABgIIAAgBIAAgDIAAgCIgBgGQgDgFgFgDIgDgCQgFgBgDgDQgCgCAAgDIAAAAIAAgFIABgJIAAAAIAAgBQAAgGgDgFQgDgEgFgDIgIgFQgDgBgCgEQgDgDgBgEIgBgCIgBgBQgUgYgUgBIAAAAIAAAAIgEABIAEgBIAAAAIAAAAQAUABAUAYIABABIABACQABAEADADQACAEADABIAIAFQAFADADAEQADAFAAAGIAAABIAAAAIgBAJIAAAFIAAAAQAAADACACQADADAFABIADACQAFADADAFIABAGIAAACIAAADIAAABIgBAIIAAABIAAABQAAAFADAFIAAAAIAAABIAAACQADAHACAGQAAAEACACIACACQABAAAAAAQABAAAAABQAAAAAAABQABAAAAABIAAAAIAAADIADAEIAAAAIABAAIAAAAIABABIABAAIAAAAIABAAIACAAgAgFA9QAAADACACIADACIACAAIAEADIAEAFIgEgFIgEgDIgCAAIgDgCQgCgCAAgDIAAgBIABgHIAAgDIAAgDQgBgDgEgBIgEgCIgCgCQgCgDAAgDIAAgBIABgDIgBgBIgBgFIgDgDIAAgDIAAgBIABgFIAGgLIABAAIAAgBIgBgDQgCgFgEgEIgDgDQgEgEgCgFIgBgEQAAgHAEgFIABgCIAAgCIAAAAQAAgBAAgBQAAAAgBgBQAAAAAAAAQgBgBgBAAIgEgDQgDgCgEAAIAAAAIAAAAIgBAAIgBAAIgGABQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAAAIgBgEIgCgDIAAgFIAAgEIAAAAIAAgBQgKgVgYAAIAAAAIAAAAIgFABIgBAAIAAAAIgBAAQgEgBgCgDIgBgBIAAgCQAAgEADgFQgDAFAAAEIAAACIABABQACADAEABIABAAIAAAAIABAAIAFgBIAAAAIAAAAQAYAAAKAVIAAABIAAAAIAAAEIAAAFIACADIABAEQAAAAABABQAAAAAAABQABAAAAAAQABABAAAAIAGgBIABAAIABAAIAAAAIAAAAQAEAAADACIAEADQABAAABABQAAAAAAAAQABABAAAAQAAABAAABIAAAAIAAACIgBACQgEAFAAAHIABAEQACAFAEAEIADADQAEAEACAFIABADIAAABIgBAAIgGALIgBAFIAAABIAAADIADADIABAFIABABIgBADIAAABQAAADACADIACACIAEACQAEABABADIAAADIAAADIgBAHIAAABgAAHA1QAAABAAAAQABABAAAAQAAABABAAQAAABAAAAQAHAHAIAFQgIgFgHgHQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBIAAgEIAAgEIAAgBIAAgBIgCgCQgFgCgBgFIgCgEIgBgFIABgFQACgKAEgHIACgDIABgDIgBgFQgBgDgCgBIgCgCIgEgIIgBgCIgBgFIABgFIAEgLIABgDIAAgCQAAgFgDgEIgBgCIgCgBQgDgCgFgBIgBgBQgEgCgCgEQACAEAEACIABABQAFABADACIACABIABACQADAEAAAFIAAACIgBADIgEALIgBAFIABAFIABACIAEAIIACACQACABABADIABAFIgBADIgCADQgEAHgCAKIgBAFIABAFIACAEQABAFAFACIACACIAAABIAAABIAAAEIAAAEgAAdAzIACADQAFAGAFAFQgFgFgFgGIgCgDIAAgBIAAgBIAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQABAAAAAAIAEgCQAGgDAFgFIABgCIgCgEIgCgFIgIgLIgCgCIAAgEQAAgGAEgDIADgCIAGgGIABgCQgBgGgGgEIgFgFIgBgCIAAgBQAAgEADgDIADgBIAAAAIAAAAIACAAIACgBIAAgDIABgCQAAgEgDgCIgCgCIgEgDIgBgDIABgCIAAAAQAEgHAFgFIADgDIACgBIABgEIAAgCIgDgGIgBgEQAAgDADgCQADgEADgBQgTgDgLgYQgegLgJgYQAJAYAeALQALAYATADQgDABgDAEQgDACAAADIABAEIADAGIAAACIgBAEIgCABIgDADQgFAFgEAHIAAAAIgBACIABADIAEADIACACQADACAAAEIgBACIAAADIgCABIgCAAIAAAAIAAAAIgDABQgDADAAAEIAAABIABACIAFAFQAGAEABAGIgBACIgGAGIgDACQgEADAAAGIAAAEIACACIAIALIACAFIACAEIgBACQgFAFgGADIgEACQAAAAgBAAQAAAAAAAAQAAABgBAAQAAAAAAABIAAAAIAAABIAAABgAA5AlIABAFQADAGAAAHQAAgHgDgGIgBgFIgBgDIAAAAIAAgBQAFABAFACIACAAIAAAAIABAAIABgCIAAgBIAAgBIAAgDIgDgEIgEgFIgBgCQABgDACgCIAFgBIABAAIAAgBIABAAIACAAIABAAIAAAAIABAAIACABIAAgBQAAgDgCgCIgKgHIgCgCQgEgDAAgEIgBgDIABgCIABgDQAEgHAGgEQADgCAAgCIgBgDIAAgDIgGgOIgBgGIAAAAQABgJADgIIAAgCIADgEQAGgFAFgHQACgCAAgDIAAgBIgBgFIAAgCQgGgOgJAAIgBAAIAAAAQgFAAgFAEIgBAAIAAgGQAAgUgRgMQARAMAAAUIAAAGIABAAQAFgEAFAAIAAAAIABAAQAJAAAGAOIAAACIABAFIAAABQAAADgCACQgFAHgGAFIgDAEIAAACQgDAIgBAJIAAAAIABAGIAGAOIAAADIABADQAAACgDACQgGAEgEAHIgBADIgBACIABADQAAAEAEADIACACIAKAHQACACAAADIAAABIgCgBIgBAAIAAAAIgBAAIgCAAIgBAAIAAABIgBAAIgFABQgCACgBADIABACIAEAFIADAEIAAADIAAABIAAABIgBACIgBAAIAAAAIgCAAQgFgCgFgBIAAABIAAAAIABADgAgsAlIADAHIABAJIgBgJIgDgHQgBgEAAgEQAAgEACgFIABgCIAAgBIgBgBIgBgBIgGgBQgFgBgBgEIgBgDIAAgDIAAgDIAAAAIgBgBQgBgDgDgBIgBAAIgBAAIgBAAIAAAAIAAAAIgFgBIgFgBIAAAAIgBgBIgBAAIAAAAQgDgEAAgEIABgFIABgGIAAgBQAAgFgDgDQgEgGgHgCIgIgCIAIACQAHACAEAGQADADAAAFIAAABIgBAGIgBAFQAAAEADAEIAAAAIABAAIABABIAAAAIAFABIAFABIAAAAIAAAAIABAAIABAAIABAAQADABABADIABABIAAAAIAAADIAAADIABADQABAEAFABIAGABIABABIABABIAAABIgBACQgCAFAAAEQAAAEABAEgABRAoIACAKIgCgKIAAgFQAAgEABgFQAAAAAAAAQABgBAAAAQAAAAAAgBQABAAAAAAIAFgCIAFgCIADgCIACgDIAAgBIgBgDIgCgEIgEgEIgDgCIgCgBIAAAAQABgKAGgIIADgDIABgDIgBgBIgBgCIgBgDQgCgCAAgCIAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQABgBAAAAQAFgDAGgBQAFgBAEgDIABgDIAAgBQAAgBAAAAQAAgBgBAAQAAgBgBAAQAAgBgBAAIgEgBIgDgBIgBAAIAAAAIAAAAIgBAAIAAgCIABgCQABgFAFgEQAEgCADgDIABgBIgBgBIgFgCIgFgBIgDgCIgBgCIABgCIABgCIABgCIAAAAIAAAAIABgCIgBgDIABADIgBACIAAAAIAAAAIgBACIgBACIgBACIABACIADACIAFABIAFACIABABIgBABQgDADgEACQgFAEgBAFIgBACIAAACIABAAIAAAAIAAAAIABAAIADABIAEABQABAAAAABQABAAAAABQABAAAAABQAAAAAAABIAAABIgBADQgEADgFABQgGABgFADQAAAAgBABQAAAAAAAAQAAAAAAABQAAAAAAAAIAAABQAAACACACIABADIABACIABABIgBADIgDADQgGAIgBAKIAAAAIACABIADACIAEAEIACAEIABADIAAABIgCADIgDACIgFACIgFACQAAAAgBAAQAAABAAAAQAAAAgBABQAAAAAAAAQgBAFAAAEIAAAFgAB4AoQAAAFAEADQgEgDAAgFIgBgEIAAgDIADgFIAEgEIADgBIABAAIABAAIAFADIADADIABAAIABABIAAAAIABgBIAAAAQAHgEAEgGIABgEIgBgCIAAgFIAAAAIAAgBIAAAAIAFgDIAHgDIAEAAQADgBABAAIAHgQIAEgKIAKgSIADgIIADABQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABIABAAQADgDAAgDIAAAAIgCgEQgDgGgFgFQAFAFADAGIACAEIAAAAQAAADgDADIgBAAQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgDgBIgDAIIgKASIgEAKIgHAQQgBAAgDABIgEAAIgHADIgFADIAAAAIAAABIAAAAIAAAFIABACIgBAEQgEAGgHAEIAAAAIgBABIAAAAIgBgBIgBAAIgDgDIgFgDIgBAAIgBAAIgDABIgEAEIgDAFIAAADIABAEgAg5AoIAAACIAAgBIAAgBIAAAAIAAgBIAAgCIAAgEIAAgBQAAgDgDgCQgDgCgCgCIgCgCQgCgDgBgDIAAgBIAAgBIABgDIgBgDIgBgBIgBgBIgCgBIgBAAIgCAAIgBAAIAAAAIAAAAIgBAAIgKgBQgFgBgCgDIgBgBIgBgDIAAgCIAAgBIAAgEIAAgEQAAgHgHgDIgFgDQgIgFgEgIQAEAIAIAFIAFADQAHADAAAHIAAAEIAAAEIAAABIAAACIABADIABABQACADAFABIAKABIABAAIAAAAIAAAAIABAAIACAAIABAAIACABIABABIABABIABADIgBADIAAABIAAABQABADACADIACACQACACADACQADACAAADIAAABIAAAEIAAACIAAABIAAAAIAAAAgAAQAoQAFgIAAgJIAAgBIAAgEQAAgFgFgBIAAAAIgBABIAAAAIgBgCIgBgBIACgFIAKgHIACgCQABgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAIAAgCQAAgEgEgEIgHgFQgEgDgDgDIgCgEIgBgCIAAgDQAAgGAEgFIACgEIABgDIAFgJIABgDIABgFQAAgDgCgEIgBgBIgCgCIgLgIIALAIIACACIABABQACAEAAADIgBAFIgBADIgFAJIgBADIgCAEQgEAFAAAGIAAADIABACIACAEQADADAEADIAHAFQAEAEAAAEIAAACQAAAAgBABQAAAAAAABQgBAAAAABQAAAAgBABIgCACIgKAHIgCAFIABABIABACIAAAAIABgBIAAAAQAFABAAAFIAAAEIAAABQAAAJgFAIgABlAlIAAgCQAAgIADgIIAEgKQADgFAAgEIAAgBIAAAAIAAgBIAAgBIADABIADAAIAAAAIABAAIAFgBIAFAAQAAgBAAAAQABAAAAAAQAAAAABAAQAAgBAAAAIABgDIABgEIgBgEIgBgFIgBgEIgBgDQAAgBAAAAQAAAAAAgBQABAAAAgBQABAAAAAAIABgBIAEgBIACAAIAAAAIAEABIABAAIAAAAIAAAAIAEABIABAAIAAAAIABAAIAAABIABgBQAAAAABAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAAgDIAAgBIAAgBIAAgDIgCgDIAAgCIABgDIADgCIADgBIAAAAIAAAAIAFACIADACIABAAIACABIACgBQAGgCABgIQAAgHACgGQgCAGAAAHQgBAIgGACIgCABIgCgBIgBAAIgDgCIgFgCIAAAAIAAAAIgDABIgDACIgBADIAAACIACADIAAADIAAABIAAABIAAADQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAIgBABIAAgBIgBAAIAAAAIgBAAIgEgBIAAAAIAAAAIgBAAIgEgBIAAAAIgCAAIgEABIgBABQAAAAgBAAQAAABgBAAQAAABAAAAQAAAAAAABIABADIABAEIABAFIABAEIgBAEIgBADQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAABIgFAAIgFABIgBAAIAAAAIgDAAIgDgBIgCAAIACABIAAABIAAAAIAAABQAAAEgDAFIgEAKQgDAIAAAIIAAACgABxAkIgBgGIAAgCQAAgFADgEQACgDADgBIAFgCIACAAIABgBQAEgFABgGIAAgBQABgIAHAAIABAAIABAAIAAAAIABAAIACAAIAFABIADAAQAHgCAEgGIABgFIAAgDIgDgKIAAAAIAAgBIAEgBIAJAAIADgBQADgDAAgDIgBgDIAAgBIgCgEIAAAAQAEgDAFAAIAAAAIAAAAIACAAIABAAIAGABIAAAAIAAAAIgGgBIgBAAIgCAAIAAAAIAAAAQgFAAgEADIAAAAIACAEIAAABIABADQAAADgDADIgDABIgJAAIgEABIAAABIAAAAIADAKIAAADIgBAFQgEAGgHACIgDAAIgFgBIgCAAIgBAAIAAAAIgBAAIgBAAQgHAAgBAIIAAABQgBAGgEAFIgBABIgCAAIgFACQgDABgCADQgDAEAAAFIAAACIABAGgACoALQAAAEgDACIgGADIAGgDQADgCAAgEIAAgDIAFABIAAAAIABAAIABAAIAAAAIABAAIABAAIAAAAIAAAAIACgBIAAAAIAAAAIABAAQAFgDABgFIAAgBIAAgGIAAAAIABAAIABAAIAFgBQAHAAAAgHIAAAAIgBgDIAAgDQAAgGAEgFIABgBIAEABIACAAIAAAAIABAAIACgBIABAAQAEgCADgEQgDAEgEACIgBAAIgCABIgBAAIAAAAIgCAAIgEgBIgBABQgEAFAAAGIAAADIABADIAAAAQAAAHgHAAIgFABIgBAAIgBAAIAAAAIAAAGIAAABQgBAFgFADIgBAAIAAAAIAAAAIgCABIAAAAIAAAAIgBAAIgBAAIAAAAIgBAAIgBAAIAAAAIgFgBIAAADgAiOgQQALAEABAEQgBgEgLgEQgggKgCgbQACAbAgAKgAB8grQgCAEgFADIgGAEIAGgEQAFgDACgEIABgEIgBgDIAAgBIAAgCQACgCADgBIAHgDIAFgDIABgBIAAAAIAAgBIgBgBQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIABgDQACgEAEgCIAFgDQAAAAABAAQAAAAAAAAQAAgBABAAQAAAAAAgBIAAgDQAAgGgBgEQgNgRgSgSQASASANARQABAEAAAGIAAADQAAABAAAAQgBAAAAABQAAAAAAAAQgBAAAAAAIgFADQgEACgCAEIgBADQAAAAAAABQAAAAABABQAAAAAAABQABAAAAABIABABIAAABIAAAAIgBABIgFADIgHADQgDABgCACIAAACIAAABIABADIgBAEgAiKgoQAIAAAIgCQgIACgIAAIAAAAIAAAAQgRAAgJgNIAAgBIAAABQAJANARAAIAAAAIAAAAgAhkguQgPgXgVgCQAVACAPAXgAgthiQAIAUAQAGQgQgGgIgUQgbgLgHgaQAHAaAbALgAAHhbIgHgUIAAAAIAAAAIAAAAQgFADgDAAIgBAAIAAAAQgJgBgEgOIgBgCQgCgMgOgGQAOAGACAMIABACQAEAOAJABIAAAAIABAAQADAAAFgDIAAAAIAAAAIAAAAIAHAUgABqhdIgBAAIABAAIAAAAIAEgQIABgKQAAgVggAAQAgAAAAAVIgBAKIgEAQIAAAAgACWAuIAAAAgADbADIAAAAgABvgCIAAAAgAg1hIIAAAAgAA4hkIAAAAg");
	this.shape_17.setTransform(67.2,14.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]}).wait(13));

	// body
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(0.1,1,1).p("ABRjIQASAhAZAVQAZAVAdAIIAgAPQAQAiAFAWQAGAhAMAiQALAmgcAgQgXAagmACAAOCUQAIADAJACAjCBRQBXAaBKAaQAZAJAWAGQgxgKgyAiQhOA0hYgp");
	this.shape_18.setTransform(50.4,58.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(0.1,1,1).p("AAbByQgcgOgbgcQgZgaACgqQADglAWghQAWggAfgQQAUAAAVgCQAOgCAPgCQAngFAlgIQASgDATgCQATgCAUgBQAeAAAdAEQAfAFAgACQAoADAdAZQAfAagGAqQgFAkgVAgQgVAhgWAbQgHAIgHAJQgEAHgFAGQgPAWgWARQgUAPgUARQgJAIgJAIQgbAagaAZQgYAXgaAZQgLAKgJALQgHgEgHgEAA9mpQATAWAKAdQADAIACAIQAJAngJAjQAvAFA1gKQAPgCAPABQAJgIgCgZQgCgSgGgPQgBgDgIgdAicj3QAAACAAADQABAJAAAKQgFgHACgMQABgDABgCQAMAFARAFQAkAIAogFQAngFAYgWQAcgYAKgiQACgHABgHQAEgigXgbAgWCMIAAABQgkALgpgDQgogDgbgTQgcgVgTggQgUgggFgkQgHgjARghQAGgNAIgMQALgQAPgOQAbgaAEgmQAAgEABgEQABgSAAgQAAbByQAcAEAlgMQAmgMAcgXQAcgWAZgWQADgDADgCQAVgSAWgOADZAWQgDAogSAcQgUAegWAfQgWAggKAkQgGAYgIAXQAAAAAAABQgEALgEAMQgJAZgTATQgJAeAZAJACXFPQACgCACgCQAXALAcAFQAmAHAoAAQAYAAAVgFQAPgCANgFQAbgKgGAhQgHAignAGQgmAFgogBQgngCgmACQgoACgmgFQgHgBgHgBQgggDgeAEQgiAFAHgcQgLAFgNACQgfASgmgJQgjgIgkgSQgkgSgnAFQgYACgXAMQgjASggARQgXAMgdAFQgvAHgJgcQAigPAMgtQAUgSgJAJQAtgjAdghQANgIAPgGQAhgNATAUQAZAbAiAHQAnAIAjgLQAogNAegMQAcgKAjgDQAogDAaAHQgHgNgKgQQgRgcgagZQgSgSgWgRQAfgOASgMAEoDDQALAgAIAjQAKAkABAjQABALACAFABIFOQgHAHgJAGQgeAVgeAOAmjFYQAGgFAFgEAgWCMQgIgFgIgF");
	this.shape_19.setTransform(46.7,85.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0000FF").s().p("Ah7EfQgogDgbgTQgcgVgTggQgUgggFgkQgHglARghQAGgNAIgMQBYAqBOg0QAzgiAwAKIARAFIgRgFIgvgPQhKgYhXgbIACgiIgBgSIAdAEQAkAIAogFQAngFAagWQAagYAKgiIADgOQAEgigYgbIAOgQIAOgPQATAXAKAdIAFAPQAJAngJAjQAvAFA1gKQAPgCAPABQAJgIgCgZQgCgRgGgQIgJggIAgAPQAQAiAFAVQAGAhAMAkQALAmgcAgQgXAbgmABIACANQgTAAgSADQglAIgnAFIgdAEQgVACgUAAQgfAQgWAgQgWAhgDAnQgCAqAZAaQAbAcAcAOQgQANghAOIgQgLIAQALIAAAAQgcAJgfAAIgSgBgAguEXIAAAAg");
	this.shape_20.setTransform(49.1,72.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CE9F6E").s().p("AnRGrQAigPAMgtIALgJQAtgjAdghQANgIAPgGQAhgNATAUQAZAbAiAHQAnAIAjgLQAogNAegMQAcgKAjgDQAogDAaAHIgRgdQgRgcgagZQgSgSgWgQQAfgOASgNIABAAIADAAIALABIAAAAIABAAQAVAAAZgIIABAAIACgBQAmgMAcgXQAcgWAZgWIAGgFQAVgSAWgQQgWAQgVASIgGAFQgZAWgcAWQgcAXgmAMIgCABIgBAAQgZAIgVAAIgBAAIAAAAIgLgBIgDAAIgBAAQgcgOgbgcQgZgaACgqQADglAWghQAWggAfgQQAUAAAVgCIAdgEQAngFAlgIQASgDATgCQATgCAUgBQAeAAAdAEQAfAFAgACQAoADAdAZQAfAagGAqQgFAkgVAgQgVAhgWAbIgOARIgJAOQgPAVgWARQgUAPgUARIgSAQIg1AzIgyAwIgUAVIgOgIIAOAIIAUgVIAygwIA1gzIASgQQALAgAIAjQAKAkABAjQABALACAGQAPgDANgFQAbgKgGAhQgHAignAGQgmAFgogBQgngCgmACQgoACgmgFIgOgBQgggDgeADQgiAFAHgcQgLAFgNACQgfASgmgJQgjgIgkgSQgkgSgnAFQgYACgXAMIhDAjQgXAMgdAFIgSABQgfAAgHgWgAA4FyQgeAVgeAOQAegOAegVQAJgGAHgHQgCAIAAAGQAAASASAHQgSgHAAgSQAAgGACgIQgHAHgJAGgADOFyQAmAHAoAAQAYAAAVgEQgVAEgYAAQgoAAgmgHQgcgFgXgLIgEAEIAEgEQAXALAcAFgADEBxQgUAegWAfQgWAggKAkQgGAYgIAXIAAABIgIAXQgJAagTASQATgSAJgaIAIgXIAAgBQAIgXAGgYQAKgkAWggQAWgfAUgeQASgcADgoQgDAogSAcgAjWhAQALgQAPgOQAbgaAEgmIABgIQBWAbBIAaIAxAPQgygKgxAiQgsAdguAAQglAAgngTgABfkFQAJgjgJgnIgFgPQgKgdgTgXQAUgTAVgQIARgLQARAhAZAVQAZAUAdAJIAJAgQAGAQACARQACAZgJAIQgPgBgPACQgkAHghAAIgfgCg");
	this.shape_21.setTransform(46.7,83.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},1).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-18.4,95.4,148);


(lib.Definition = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_5 = function() {
		playSound("thesubjectanswerswhoorwhatinfrontoftheveb");
	}
	this.frame_71 = function() {
		playSound("thesubjectofasentenceisalways");
	}
	this.frame_87 = function() {
		playSound("ball_bounce");
	}
	this.frame_93 = function() {
		playSound("ball_bounce");
	}
	this.frame_99 = function() {
		playSound("ball_kick");
	}
	this.frame_107 = function() {
		playSound("ball_bounce");
	}
	this.frame_115 = function() {
		playSound("ball_bounce");
	}
	this.frame_121 = function() {
		playSound("ball_kick");
	}
	this.frame_130 = function() {
		playSound("ball_bounce");
	}
	this.frame_145 = function() {
		playSound("ball_kick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(5).call(this.frame_5).wait(66).call(this.frame_71).wait(16).call(this.frame_87).wait(6).call(this.frame_93).wait(6).call(this.frame_99).wait(8).call(this.frame_107).wait(8).call(this.frame_115).wait(6).call(this.frame_121).wait(9).call(this.frame_130).wait(15).call(this.frame_145).wait(57));

	// Moving Ball
	this.instance = new lib.static_ball("synched",0);
	this.instance.setTransform(163.6,-105.9,1,1,0,0,0,23.1,23.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(127).to({_off:false},0).to({scaleX:0.84,scaleY:0.84,guide:{path:[163.4,-105.8,170.3,-105.4,177.1,-103.2,186.1,-100.4,193.2,-94.6,200.4,-88.6,206.4,-81.4,212.2,-74.4,215,-64.6,217.7,-55.4,219.9,-45.8,222.1,-36.4,225.2,-7,225.2,-6.6,225.3,-6.1,225.4,-6.5,225.5,-6.9]}},6).to({scaleX:0.68,scaleY:0.68,guide:{path:[225.5,-6.7,229.8,-19.5,239,-30.7,251.2,-45.5,272.3,-36.3,282.8,-31.8,284.1,-18.8,286,0.2,286.1,19.9,286.2,26.6,286,29.3,285.9,32,285.5,30.7]}},6).to({scaleX:0.52,scaleY:0.52,x:148.3,y:250.1},9).wait(54));

	// Moving Ball
	this.instance_1 = new lib.static_ball("synched",0);
	this.instance_1.setTransform(164.9,-105.8,1,1,0,0,0,23.1,23.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(103).to({_off:false},0).to({scaleX:0.84,scaleY:0.84,guide:{path:[164.7,-105.7,170.9,-105.2,177.1,-103.3,186.1,-100.5,193.2,-94.6,200.4,-88.6,206.4,-81.4,212.2,-74.5,215,-64.7,217.7,-55.4,219.9,-45.8,222.1,-36.4,225.2,-7,225.2,-6.6,225.3,-6.1]}},3).to({regX:23,regY:23,scaleX:0.66,scaleY:0.66,guide:{path:[225.3,-5.9,225.3,-5.9,225.3,-5.9,229.5,-19.2,239,-30.7,251.2,-45.5,272.3,-36.3,282.8,-31.8,284.1,-18.8,286,0.2,286.1,19.9,286.2,26.6,286,29.3,285.9,32,285.5,30.7,285.5,30.7,285.5,30.7]}},6).to({regX:23.1,regY:23.1,scaleX:0.52,scaleY:0.52,x:148.3,y:218.1},6).wait(84));

	// Moving Ball
	this.instance_2 = new lib.static_ball("synched",0);
	this.instance_2.setTransform(163.6,-105.9,1,1,0,0,0,23.1,23.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(83).to({_off:false},0).to({scaleX:0.79,scaleY:0.79,guide:{path:[163.4,-105.8,170.3,-105.4,177.1,-103.2,186.1,-100.4,193.2,-94.6,200.4,-88.6,206.4,-81.4,212.2,-74.4,215,-64.6,217.7,-55.4,219.9,-45.8,222.1,-36.6,225.1,-8]}},4).to({regX:23.2,regY:23,scaleX:0.65,scaleY:0.65,guide:{path:[225.1,-7.8,225.1,-7.3,225.2,-6.8,225.2,-6.4,225.3,-5.9,229.5,-19.2,239,-30.7,251.2,-45.5,272.3,-36.3,282.8,-31.8,284.1,-18.8,286,0.2,286.1,19.9,286.2,25.7,286.1,28.5,286,31.3,285.7,31.1]}},6).to({regX:23.1,regY:23.1,scaleX:0.52,scaleY:0.52,x:148.3,y:184.2},6).wait(103));

	// Woman
	this.instance_3 = new lib.anim_buffy_throws_up();
	this.instance_3.setTransform(25.1,91.4,0.538,0.538,0,0,0,46.7,55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(202));

	// The SUBJECT
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAiA2IgIgIIgSAJQgIADgDAAQgZAAgLgOQgLgNAAgcQAAgYASgTQASgSAWAAQAKAAALAFQAPAFAAAJQAAADgCACIgCAOIgBAVQAAAOACAIIAHATIACAFIABACQAAAEgDADQgDADgEAAQgCAAgFgFgAgRgaQgMAOAAAQQAAARAGAJQAGAJANAAQAIAAAHgEIALgIQgDgbAAgOIAAgKIACgLIgHgDIgEgBQgPAAgMANg");
	this.shape.setTransform(422,151.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdA7QgQgGAAgKQAAgFADgDQADgEAFAAQADAAAFAGQADADAJABIAMABQAHAAAHgCQAKgDAAgHQAAgPgUgFIgKgCQgOgDgGgFQgJgDAAgNQAAgWAWgKQAGgDAMgDIAUgHQAFgCAFAAQAFAAADADQADADAAAFIABAJIABAJQAAAFgDADQgDADgEAAQgGAAgDgEQgBgDgBgJIgZAHQgPAHgBAKIAHACQAWAFAMAIQASAJAAAVQAAASgPAIQgNAIgRAAQgOAAgNgFg");
	this.shape_1.setTransform(404.1,151.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgbBUQgEgDAAgFQAAgLAYgzIgnhIIgFgIQgDgFAAgDQAAgFAEgDQADgDAEAAQAFAAADAEQASAZATAvIAQglQAJgUAIgNQADgGAGAAQAEAAADADQAEADAAAEIgCAFIglBPQgOAdgFAUIgHAVQgDAHgHAAQgEAAgDgCg");
	this.shape_2.setTransform(393.1,154.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAiA2IgIgIIgSAJQgIADgDAAQgZAAgLgOQgLgNAAgcQAAgYASgTQASgSAWAAQAKAAALAFQAPAFAAAJQAAADgCACIgCAOIgBAVQAAAOACAIIAHATIACAFIABACQAAAEgDADQgDADgEAAQgCAAgFgFgAgRgaQgMAOAAAQQAAARAGAJQAGAJANAAQAIAAAHgEIALgIQgDgbAAgOIAAgKIACgLIgHgDIgEgBQgPAAgMANg");
	this.shape_3.setTransform(382.1,151.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAZA8QgMAAgHgdIgEgZIgCgWIgIASIgRAtQgBAEgDACQgDAGgHAAQgIABgIghQgEgQgEgbIgCgQIgCgQQAAgFAEgDQADgDAEAAQAIAAACAJIADAQIABAQIAHAuIAYhKQAEgMAHAAQAIAAADANIAHAnQAEAZAEAPIAIgdIANg5QACgGAIAAQAEAAAEADQADADAAAEIgBAFQgJAjgNAqQgDAKgHAKQgDAGgGAAIgBAAg");
	this.shape_4.setTransform(368.9,151.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgLBNIABgnIACgmIAAglIABgnQAAgLAIAAQALAAAAALIgBAnIAAAlIgCA1IgBAZQgBAKgIAAQgKAAAAgLg");
	this.shape_5.setTransform(358.4,148.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAiA2IgIgIIgSAJQgIADgDAAQgZAAgLgOQgLgNAAgcQAAgYASgTQASgSAWAAQAKAAALAFQAPAFAAAJQAAADgCACIgCAOIgBAVQAAAOACAIIAHATIACAFIABACQAAAEgDADQgDADgEAAQgCAAgFgFgAgRgaQgMAOAAAQQAAARAGAJQAGAJANAAQAIAAAHgEIALgIQgDgbAAgOIAAgKIACgLIgHgDIgEgBQgPAAgMANg");
	this.shape_6.setTransform(349.7,151.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgdA7QgQgGAAgKQAAgFADgDQADgEAFAAQADAAAFAGQADADAJABIAMABQAHAAAHgCQAKgDAAgHQAAgPgUgFIgKgCQgOgDgGgFQgJgDAAgNQAAgWAWgKQAGgDAMgDIAUgHQAFgCAFAAQAFAAADADQADADAAAFIABAJIABAJQAAAFgDADQgDADgEAAQgGAAgDgEQgBgDgBgJIgZAHQgPAHgBAKIAHACQAWAFAMAIQASAJAAAVQAAASgPAIQgNAIgRAAQgOAAgNgFg");
	this.shape_7.setTransform(331.9,151.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgJBNQgDgDAAgEIAAgUIgBgTIABgZIABgXQAAgFADgDQADgDAFAAQACAAADADQADADAAAFIgBAXIgBAZIAAATIABAUQAAAEgDADQgDADgDAAQgEAAgDgDgAgFg6QgEgEAAgFQAAgFAEgEQADgDAEAAQAEAAAFADQADAEAAAFQAAAFgDAEQgFAEgEAAQgEAAgDgEg");
	this.shape_8.setTransform(324,148.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgkAuQgQgNAAgZQAAgZANgTQAPgVAYAAQARAAALAGQANAHAAAQQABALgMAIQgGAEgRAGIgnAUQAFAJAKAEQAJAFAKAAQAHAAAKgDQAMgEAFgFQADgGAEAAQAEAAADADQADADAAADQAAAMgUAJQgQAHgPAAQgWAAgQgMgAgVgbQgJAKgEASIAhgOQASgJAHgHQgIgJgQAAQgNAAgIALg");
	this.shape_9.setTransform(308.3,151.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgeAuQgPgNAAgXQAAgUAPgXQAQgaASAAQAKAAANAFQARAGAAAJQAAAEgDADQgDADgEABQgDAAgCgCIgEgEQgHgFgOAAQgJAAgLAUQgKARAAAMQAAAOAKAIQAJAIAMgBQAHABAHgEIAMgHIAFgBQAEAAADADQADADAAAEQAAAIgRAIQgOAGgKAAQgUAAgPgOg");
	this.shape_10.setTransform(296.5,151.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAaA0IgDgYIgCgXIABgIIAAgKQAAgYgJAAQgMABgJAOQgKANgFARIgBALIgBALIABAJIABAKQAAAFgDADQgDADgFAAQgFAAgDgDQgDgDAAgFIAAgKIgBgJIACgeIABgeIAAgKIgBgLQAAgEAEgDQADgDAEAAQAKAAABAOIAAAMQASgYARABQARAAAHAPQAFAKAAAUIAAALIAAAIQAAAJADANQACAOAAAJQAAAFgDADQgDADgFAAQgJAAgBgKg");
	this.shape_11.setTransform(285.3,151.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgjAuQgRgNAAgZQAAgZANgTQAPgVAYAAQAQAAAMAGQAOAHAAAQQAAALgNAIQgFAEgRAGIgoAUQAHAJAJAEQAIAFAKAAQAIAAAKgDQAMgEAFgFQADgGAEAAQAEAAADADQADADAAADQAAAMgTAJQgRAHgQAAQgWAAgOgMgAgVgbQgJAKgEASIAhgOQASgJAIgHQgKgJgPAAQgMAAgJALg");
	this.shape_12.setTransform(273.5,151.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgGBLQgDgDAAgEIAAgMIABgMIgCg9IgYgCQgKgBAAgKQAAgEADgDQADgEAFAAIAWACIAAgOIgBgOQAAgEADgDQADgDAFAAQAIAAABAQIAAAJIAAAHIAAAGIAPgCQAMAAADABQAHACAAAIQAAAGgDACQgDAEgFAAIgFAAIgGgBIgOACIACA9IAAAFIAAAGQAAAXgLAAQgDAAgDgDg");
	this.shape_13.setTransform(262.1,149.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAaA0IgDgYIgCgXIABgIIAAgKQAAgYgJAAQgMABgJAOQgKANgFARIgBALIgBALIABAJIABAKQAAAFgDADQgDADgFAAQgFAAgDgDQgDgDAAgFIAAgKIgBgJIACgeIABgeIAAgKIgBgLQAAgEAEgDQADgDAEAAQAKAAABAOIAAAMQASgYARABQARAAAHAPQAFAKAAAUIAAALIAAAIQAAAJADANQACAOAAAJQAAAFgDADQgDADgFAAQgJAAgBgKg");
	this.shape_14.setTransform(251.5,151.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgjAuQgRgNAAgZQAAgZANgTQAPgVAYAAQARAAALAGQANAHAAAQQAAALgMAIQgFAEgRAGIgoAUQAHAJAJAEQAJAFAJAAQAIAAAKgDQAMgEAFgFQADgGAEAAQAEAAADADQADADAAADQAAAMgTAJQgRAHgQAAQgWAAgOgMgAgVgbQgJAKgEASIAhgOQARgJAJgHQgKgJgPAAQgNAAgIALg");
	this.shape_15.setTransform(239.7,151.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgdA7QgQgGAAgKQAAgFADgDQADgEAFAAQADAAAFAGQADADAJABIAMABQAHAAAHgCQAKgDAAgHQAAgPgUgFIgKgCQgOgDgGgFQgJgDAAgNQAAgWAWgKQAGgDAMgDIAUgHQAFgCAFAAQAFAAADADQADADAAAFIABAJIABAJQAAAFgDADQgDADgEAAQgGAAgDgEQgBgDgBgJIgZAHQgPAHgBAKIAHACQAWAFAMAIQASAJAAAVQAAASgPAIQgNAIgRAAQgOAAgNgFg");
	this.shape_16.setTransform(227.8,151.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAiA2IgIgIIgSAJQgIADgDAAQgZAAgLgOQgLgNAAgcQAAgYASgTQASgSAWAAQAKAAALAFQAPAFAAAJQAAADgCACIgCAOIgBAVQAAAOACAIIAHATIACAFIABACQAAAEgDADQgDADgEAAQgCAAgFgFgAgRgaQgMAOAAAQQAAARAGAJQAGAJANAAQAIAAAHgEIALgIQgDgbAAgOIAAgKIACgLIgHgDIgEgBQgPAAgMANg");
	this.shape_17.setTransform(210.6,151.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgQBbQgDgDgBgEIABgCQACgOAAgRIAAgcIAAgeIgRABQgLAAAAgKQAAgLATAAIAKAAIACgRQACgYAKgLQAJgOAYAAQAPAAAAALQAAAKgOAAQgaAAgDAkIAAAHIAXgBQASAAgBAKQABAIgJACIgJAAIgYABIgBAXIABAUIAAAUQAAAUgCAMQAAAIgJAAQgEAAgDgDg");
	this.shape_18.setTransform(192.6,149.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgfAtQgPgPAAgZQAAgWAMgSQAPgXAZAAQAVAAALAVQAJAPAAAWQAAAXgNAQQgNATgVABQgSAAgNgOgAgSgUQgHALAAAOQAAAQAIAIQAHAIAKgBQAJABAIgJQAJgIABgQQABgngYAAQgNgBgJAQg");
	this.shape_19.setTransform(181.3,151.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0066FF").s().p("AgJBNQgFgEAAgGIAAgFIABgEIgBgPIAAgPQAAgPgDgWIgDgnIgFAAQgYAAgOgEQgMgDAAgLQAAgFAEgFQAEgFAIABIARABIARACIATgBIASAAIAYABIAZABQAGAAAFAFQAEAEAAAGQAAAGgEAEQgFAEgGAAIgagBIgagBIADAsIACAqIABAKIAAALQAAAIgDAHQgEAIgIAAQgEAAgFgEg");
	this.shape_20.setTransform(161.5,148.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0066FF").s().p("AgvBBQgQgRAAgXQAAgiAgglQAaghAbAAIAIABIAHABQAEgFAHABQALAAACAMQACAJABAMQgBAGgDAEQgEAFgHAAQgKABgFgLQgCgEgCgCIgIAAQgOAAgQAVQgYAcAAAZQAAAMAIAIQAHAJALAAQAIgBAMgFIAQgLQAJgFADAAQAHAAAEAFQAFAEAAAFQAAAHgGAEQgeAZgcAAQgYAAgRgRg");
	this.shape_21.setTransform(147.1,148.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0066FF").s().p("AgwBRQgMgJAAgkIACgoQACgdAAgPIgBgLIgBgLQgBgQAPAAQAGAAADADQANgEALgCIATgBQAbAAAQAHQAKADAAAKQAAAGgDAEQgEAFgHAAIgFgBQgRgFgRAAIgPACIgUADIgBArIApgEIAagCQAFAAAFAEQAFAEgBAHQAAALgNABIgaADIgsAEIAAAVQgBAWADACQACACAMAAIASgBIAUAAIAGgBIAHAAQAGAAAEADQAFAFAAAHQAAAMgMACQgLACggAAQgjAAgKgKg");
	this.shape_22.setTransform(133.6,148.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0066FF").s().p("AgtBJQgWgPAAgVQAAgQAPAAQAPAAAAAQQAAAGALAIQALAHAJAAQAEAAACgOIAAgiQACgWAAglIgBgHIgBAAIgMAAIgMAAQgHAAgEgEQgFgEAAgHQAAgPATAAIALABIAKAAIATgBIAUAAQAdAAAAAQQAAAFgEAFQgEAEgHAAIgGAAIgHAAIgIAAIAAAHQAABLgLAjQgIAagTAAQgUAAgTgOg");
	this.shape_23.setTransform(119.2,149.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0066FF").s().p("Ag0BRQgFgFAAgGIAAhwIAAgOQgBgJABgGQACgJARgDQAIgCATAAQASAAATANQAWAPAAAXQAAAMgFAJQgDAHgJAGQAKAFAIAKQAKALAAALQAAAOgQANQgKAJgMAFQgXAJgmAAQgHAAgFgGgAgbA5QASAAAUgHQASgFAAgGQAAgIgMgHQgJgFgIgBIgbgBgAgbghIAAAXIAOAAQAfgDAAgVQAAgIgKgGQgIgIgLAAIgQAAg");
	this.shape_24.setTransform(105.2,148.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0066FF").s().p("AgqBJQgcgWAAg0IABgPIAAgQIAAgMIABgNQAAgIACgHQAFgKAHAAQAGAAAFAEQAEADAAAHIAAASIAAASIgBAQIAAAPQAAAOAEAOQAEARAJAHQAFADAQAAQAbAAAKgwQAFgXAAguQAAgGAEgGQAEgHAJAAQAIAAADAFQADAEAAAFQAAAqgEAYQgGAjgRAYQgJALgLAGQgNAJgNAAQgbAAgNgKg");
	this.shape_25.setTransform(89.7,149.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0066FF").s().p("Ag4BFQgOgKAAgNQAAgGAEgFQAFgEAGAAQAKgBAFAKQAGANAWAAQAQAAARgHQASgJAAgJQAAgOgLgEQgIgEgWAAQgTgBgPgFQgTgIAAgQQABgWAWgRQAVgSAZAAQAKAAAQAFQAUAGgBAIQAAAFgDAFQgFAFgHAAQgFAAgJgCIgQgCQgOgBgKAHQgNAHAAAIQAAAEAEADQAEACAHABIAaABQAYACAOAMQAPALAAAXQAAAbgfAOQgZAMgcAAQgcAAgPgNg");
	this.shape_26.setTransform(74.1,149.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgjAuQgRgNAAgZQAAgZANgTQAPgVAYAAQAQAAAMAGQANAHAAAQQAAALgMAIQgFAEgRAGIgnAUQAFAJAKAEQAJAFAKAAQAHAAAKgDQAMgEAFgFQADgGAEAAQAEAAADADQADADAAADQAAAMgUAJQgQAHgPAAQgWAAgPgMgAgVgbQgJAKgEASIAhgOQARgJAIgHQgIgJgQAAQgNAAgIALg");
	this.shape_27.setTransform(54.2,151.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAdBRQgDgJgCgQQgCgQAAgKIAAgIIABgJQAAgSgKAAQgNAAgKAKQgFAHgKASQAAAogDAIQgDAHgHAAQgEAAgDgDQgEgDAAgFIABgEQABgDAAgNIABgQIAAhNIABgSIgBgKIgBgKQAAgFADgDQADgDAFAAQAIAAACAKQACAKAAAIIgBAYIgBAXIAAAKQAJgMAKgGQAIgGAMAAQARAAAHAMQAFAIAAARIABAVIACAWQACANACAJIABAEQAAAEgEADQgDADgEAAQgIAAgCgIg");
	this.shape_28.setTransform(41.7,148.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgGBOQgEgDAAgFIABgEIAAgFIAAgQIgBgQQAAgPgCgaQgDgeAAgNIgKAAQgYAAgNgEQgJgCAAgIQAAgFADgDQADgEAFABIARABIASACIATAAIASgBIAZABIAYACQAFAAADADQADADAAAFQAAAEgDADQgDAEgFAAIgYgCIgZgBIgIAAIADAwQADAdAAASIAAALIABALQAAAIgCAFQgDAHgGAAQgDAAgDgDg");
	this.shape_29.setTransform(28.7,148.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},71).wait(131));

	// NounPronoun
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_30.setTransform(330.4,91.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF0000").s().p("Ag0BRQgFgFAAgGIAAhwIAAgOQgBgJABgGQACgKARgCQAIgDATAAQASAAATAOQAWAPAAAXQAAAMgFAJQgDAHgJAGQAKAFAIAKQAKALAAALQAAAOgQANQgKAJgMAFQgXAIgmABQgHAAgFgGgAgbA5QASAAAUgHQASgFAAgHQAAgHgMgHQgJgFgIgBIgbgBgAgbghIAAAXIAOAAQAfgDAAgVQAAgIgKgGQgIgIgLAAIgQAAg");
	this.shape_31.setTransform(321,83.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF0000").s().p("Ag6BQQgEgEABgHIAAgYIAAgYIAAhVQAAgHAEgFQAFgIAKABIAbACQAPACAIAFQAuAYAAAiQAAAOgJAJQgJAKgUAIQAcAQAPAQQADAFAAAFQAAAGgEAEQgEAFgHAAQgFAAgFgFQghgeglgMIABAiQABAHgFAEQgEAEgGAAQgHAAgFgEgAggADIAFAAQAaAAALgFIAKgHQAEgFABgCQAAgMgQgLQgNgLgPgCIgNAAg");
	this.shape_32.setTransform(306.9,83.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF0000").s().p("AgwBRQgMgJgBgkIACgoQADgeAAgOIgBgLIgCgLQAAgQAPgBQAFABAEADQANgEALgCIATgBQAcAAAQAHQAKADgBAKQAAAGgDAEQgFAFgHAAIgEgBQgSgFgQAAIgPABIgUAFIAAAqIAogEIAZgCQAHAAAEAEQAEAEAAAHQAAALgNABIgZACIgsAFIgBAVQAAAWACACQABACAMAAIATgBIAUAAIAGgBIAGAAQAHAAAEADQAFAFAAAHQAAALgMADQgLACggAAQgjAAgKgKg");
	this.shape_33.setTransform(293.1,83.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF0000").s().p("AgWBMQgNgfgQg5IgJgdQgGgVAAgHQAAgHAFgEQAEgEAGAAQALAAAEALIAEATIAKAiIAQA1IAXg/IAKgaQAGgPAHgJQAFgFAHAAQAGAAAFAEQAEAEAAAHQAAAEgCAEQgGAIgFAMIgIAWIgdBIQgFANgHANQgFAIgGAAQgMAAgEgKg");
	this.shape_34.setTransform(278.5,83.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgkAuQgQgNAAgZQAAgZANgTQAPgVAYAAQARAAALAGQANAHAAAQQABALgMAIQgGAEgRAGIgnAUQAFAJAKAEQAJAFAKAAQAHAAAKgDQAMgEAEgFQAEgGAEAAQAEAAADADQADADAAADQAAAMgUAJQgQAHgPAAQgXAAgPgMgAgVgbQgJAKgEASIAhgOQASgJAHgHQgIgJgQAAQgNAAgIALg");
	this.shape_35.setTransform(258.7,86.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAdBRQgDgJgCgQQgCgQAAgKIAAgIIABgJQAAgSgKAAQgNAAgKAKQgFAHgKASQAAAogDAIQgDAHgHAAQgEAAgDgDQgEgDAAgFIABgEQABgDAAgNIABgQIAAhNIABgSIgBgKIgBgKQAAgFADgDQADgDAFAAQAIAAACAKQACAKAAAIIgBAYIgBAXIAAAKQAJgMAKgGQAIgGAMAAQARAAAHAMQAFAIAAARIABAVIACAWQACANACAJIABAEQAAAEgEADQgDADgEAAQgIAAgCgIg");
	this.shape_36.setTransform(246.3,83.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgGBLQgDgDAAgEIAAgMIABgMIgCg9IgYgCQgKgBAAgKQAAgEADgEQADgDAFAAIAWACIAAgOIgBgOQAAgEADgDQADgDAFAAQAIAAABAQIAAAKIAAAGIAAAGIAPgCQAMAAADABQAHADAAAHQAAAGgDACQgDADgFABIgFAAIgGgBIgOACIACA9IAAAFIAAAGQAAAXgLAAQgDAAgDgDg");
	this.shape_37.setTransform(234.6,84.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgQBbQgEgDAAgEIABgCQACgOAAgQIAAgdIAAgeIgRABQgLAAAAgKQAAgLATAAIAKAAIACgRQADgYAJgLQAJgOAXAAQAQAAAAALQAAAKgOAAQgaAAgDAkIgBAHIAZgBQARgBAAALQAAAIgJACIgIAAIgZABIgBAXIABAUIAAAUQAAAUgCAMQAAAIgIAAQgFAAgDgDg");
	this.shape_38.setTransform(217.1,83.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgfAtQgPgPAAgZQgBgWANgSQAPgXAZAAQAWAAAKAVQAJAPAAAWQAAAXgNAQQgNATgVAAQgSAAgNgNgAgSgVQgHAMAAAOQAAAQAIAIQAIAIAJgBQAJABAIgJQAJgJABgPQABgngYAAQgNgBgJAPg");
	this.shape_39.setTransform(205.8,86.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgGBLQgDgDAAgEIAAgMIABgMIgCg9IgYgCQgKgBAAgKQAAgEADgEQADgDAFAAIAWACIAAgOIgBgOQAAgEADgDQADgDAFAAQAIAAABAQIAAAKIAAAGIAAAGIAPgCQAMAAADABQAHADAAAHQAAAGgDACQgDADgFABIgFAAIgGgBIgOACIACA9IAAAFIAAAGQAAAXgLAAQgDAAgDgDg");
	this.shape_40.setTransform(188.4,84.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAaA0IgDgYIgCgXIABgIIAAgLQAAgWgJAAQgMgBgJAOQgKAOgFARIgBALIgBAKIABAKIABAKQAAAEgDADQgDAEgFAAQgFAAgDgEQgDgDAAgEIAAgKIgBgKIACgdIABgeIAAgKIgBgLQAAgEAEgDQADgDAEAAQAKAAABAOIAAAMQASgYARAAQARABAHAPQAFAKAAATIAAAMIAAAIQAAAIADAOQACAOAAAKQAAAEgDADQgDADgFAAQgJAAgBgKg");
	this.shape_41.setTransform(177.8,86.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgfAtQgPgPAAgZQgBgWANgSQAPgXAZAAQAVAAALAVQAJAPAAAWQAAAXgNAQQgNATgVAAQgSAAgNgNgAgSgVQgHAMAAAOQAAAQAIAIQAHAIAKgBQAKABAHgJQAJgJABgPQABgngYAAQgNgBgJAPg");
	this.shape_42.setTransform(165.9,86.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgoAxIAAhKIAAgKIAAgLQAAgKAKAAQAKAAAAARQAUgTAYAAQAJgBAEAHQAEAGAAAOIAAAHQAAAOgKAAQgKAAAAgLIAAgHIAAgJQgRACgJAHQgJAHgGAOIAAA5QAAAKgLABQgJgBAAgKg");
	this.shape_43.setTransform(155.4,86.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgQBbQgDgDgBgEIABgCQACgOAAgQIAAgdIAAgeIgRABQgLAAAAgKQAAgLATAAIAKAAIACgRQACgYAKgLQAJgOAYAAQAPAAAAALQAAAKgOAAQgaAAgDAkIAAAHIAXgBQASgBgBALQABAIgJACIgJAAIgYABIgBAXIABAUIAAAUQAAAUgCAMQAAAIgJAAQgEAAgDgDg");
	this.shape_44.setTransform(144,83.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAaA0IgDgYIgCgXIABgIIAAgLQAAgWgJAAQgMgBgJAOQgKAOgFARIgBALIgBAKIABAKIABAKQAAAEgDADQgDAEgFAAQgFAAgDgEQgDgDAAgEIAAgKIgBgKIACgdIABgeIAAgKIgBgLQAAgEAEgDQADgDAEAAQAKAAABAOIAAAMQASgYARAAQARABAHAPQAFAKAAATIAAAMIAAAIQAAAIADAOQACAOAAAKQAAAEgDADQgDADgFAAQgJAAgBgKg");
	this.shape_45.setTransform(126.6,86.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgJBNQgDgDAAgEIgBgUIAAgTIABgZIABgXQABgFADgDQADgDAEAAQACAAADADQAEADAAAFIgBAXIgBAZIAAATIAAAUQAAAEgDADQgDADgDAAQgEAAgDgDgAgGg6QgDgEAAgFQAAgFADgEQAFgDADAAQAEAAAEADQAEAEAAAFQAAAFgEAEQgEAEgEAAQgDAAgFgEg");
	this.shape_46.setTransform(117.7,83.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#0066FF").s().p("AgeBSQgGgEAAgHQAAgHAFgGQAFgIAIAAQAIAAAEAGQADAEAAAGQAAAHgEAGQgEAHgIAAQgGAAgFgEgAgYAkQgFgEAAgGQAAgJAOgKIAYgQQAOgLAAgIQAAgKgKgJQgLgJgJAAQgFAAgKAHQgKAGgFAAQgGAAgEgEQgFgFAAgGQAAgKATgJQAQgIAKAAQAWAAATARQATARAAAXQAAAWgXAPIgRAMQgLAIgEAGQgFAGgGAAQgGAAgFgFg");
	this.shape_47.setTransform(355.8,51);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#0066FF").s().p("AgJBNQgFgEAAgGIAAgFIABgEIgBgPIAAgPQAAgPgDgWIgDgnIgFAAQgYAAgOgEQgMgDAAgLQAAgFAEgFQAEgFAIABIARABIARACIATgBIASAAIAYABIAZABQAGAAAFAFQAEAEAAAGQAAAGgEAEQgFAEgGAAIgagBIgagBIADAsIACAqIABAKIAAALQAAAIgDAHQgEAIgIAAQgEAAgFgEg");
	this.shape_48.setTransform(342.1,50.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#0066FF").s().p("AA2BQQgIAAgJgUQgGgMgEgRIgaADIgYACQgFAMgMAYQgFAIgIAAQgGAAgFgEQgEgEAAgHQAAgFAPggIgBgGQAAgFAKgDIAig1QAZgpAGAAQAMAAAEAPIAHAiIAQBFIAFAOQAEAJAAAFQAAAGgEAEQgFAFgFAAIgBgBgAgHAJIANgBIAPgBIgHgjIgVAlg");
	this.shape_49.setTransform(326.2,51.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#0066FF").s().p("AAtBSQgEgFAAgFIgBgYIgBgXIABgLQgRAAgXAFIgpAIIgCAWIgBAXQAAAGgEAEQgEADgHAAQgGAAgEgDQgEgEAAgGIACggIACggIAAgmIABgoQAAgGAEgEQAEgEAGAAQAHAAAEAEQAEAEAAAGIAAAYIgBAZIgBAKIAAALIApgIQAWgEASgBIABgnQAAgIAFgLQAGgNAIAAQAFAAAFAEQAEAEAAAGIAAADQgCAIAAAGIgBAJIAAAJIgBAfIgBAcIABAYIABAXQAAAGgEAEQgFAEgGAAQgGAAgFgDg");
	this.shape_50.setTransform(310,50.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#0066FF").s().p("AAVBTQgGgEAAgGQgFgMgBgIIgLhDQgHATgIASQgMAZgEAPIABAFQAAAHgGAEQgFADgGAAQgIAAgFgDQgGgFAAgIIgEgMIgLgyQgHgYgRgvIgBgFQAAgGAFgEQAEgEAHAAQAIAAAFAHQACAEAEAKQAKAeAOA4QAIgVAJgaQAHgXAFgKQALgYAJAAQAKAAAFAMQACAFADAPIACAVQADATALAvIAfhLIAFgUQADgMAFgHQAFgIAJAAQAGAAAFAFQAEADAAAHIgEALIgEALIgGATIgTAsIgUAuQgEALgEAHQgFAJgLAAQgGAAgFgEg");
	this.shape_51.setTransform(290,51.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgoAxIAAhJIAAgLIAAgLQAAgLAKAAQAKAAAAASQAUgUAYABQAJAAAEAGQAEAHAAANIAAAHQAAANgKAAQgKAAAAgKIAAgIIAAgJQgRACgJAIQgJAHgGAOIAAA5QAAAKgLAAQgJAAAAgKg");
	this.shape_52.setTransform(267.1,53.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgfAtQgPgPAAgZQgBgWANgSQAPgXAZABQAVgBALAVQAJAPAAAWQAAAXgNAQQgNATgVABQgSAAgNgOgAgSgUQgHAMAAANQAAAQAIAIQAHAIAKgBQAKABAHgJQAJgIABgQQABgogYABQgNAAgJAPg");
	this.shape_53.setTransform(255.6,53.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#0066FF").s().p("AgeBSQgGgEAAgHQAAgHAFgGQAFgIAIAAQAIAAAEAGQADAEAAAGQAAAHgEAGQgEAHgIAAQgGAAgFgEgAgYAkQgFgEAAgGQAAgJAOgKIAYgQQAOgLAAgIQAAgKgKgJQgLgJgJAAQgFAAgKAHQgKAGgFAAQgGAAgEgEQgFgFAAgGQAAgKATgJQAQgIAKAAQAWAAATARQATARAAAXQAAAWgXAPIgRAMQgLAIgEAGQgFAGgGAAQgGAAgFgFg");
	this.shape_54.setTransform(237.1,51);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#0066FF").s().p("Ag4BCQgYgUAAgfQAAgjAXgeQAaghAlAAQAlAAATARQATARAAAjQAAAigVAeQgZAiglAAQggAAgWgSgAghgfQgQAWAAAYQAAASAOALQANALAUAAQAWAAAQgYQAOgUAAgZQAAgXgKgJQgKgIgYAAQgWAAgRAXg");
	this.shape_55.setTransform(222.1,51.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#0066FF").s().p("AAtBSQgEgFAAgFIgBgYIgBgXIABgLQgRAAgXAFIgpAIIgCAWIgBAXQAAAGgEAEQgEADgHAAQgGAAgEgDQgEgEAAgGIACggIACggIAAgmIABgoQAAgGAEgEQAEgEAGAAQAHAAAEAEQAEAEAAAGIAAAYIgBAZIgBAKIAAALIApgIQAWgEASgBIABgnQAAgIAFgLQAGgNAIAAQAFAAAFAEQAEAEAAAGIAAADQgCAIAAAGIgBAJIAAAJIgBAfIgBAcIABAYIABAXQAAAGgEAEQgFAEgGAAQgGAAgFgDg");
	this.shape_56.setTransform(205.1,50.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#0066FF").s().p("AAVBTQgGgEAAgGQgFgMgBgIIgLhDQgHATgIASQgMAZgEAPIABAFQAAAHgGAEQgFADgGAAQgIAAgFgDQgGgFAAgIIgEgMIgLgyQgHgYgRgvIgBgFQAAgGAFgEQAEgEAHAAQAIAAAFAHQACAEAEAKQAKAeAOA4QAIgVAJgaQAHgXAFgKQALgYAJAAQAKAAAFAMQACAFADAPIACAVQADATALAvIAfhLIAFgUQADgMAFgHQAFgIAJAAQAGAAAFAFQAEADAAAHIgEALIgEALIgGATIgTAsIgUAuQgEALgEAHQgFAJgLAAQgGAAgFgEg");
	this.shape_57.setTransform(185.1,51.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgdA7QgQgGAAgKQAAgFADgDQADgDAFAAQADgBAFAGQADADAJABIAMABQAHAAAHgCQAKgDAAgHQAAgOgUgGIgKgCQgOgDgGgFQgJgDAAgNQAAgWAWgJQAGgEAMgDIAUgHQAFgCAFAAQAFAAADADQADADAAAFIABAJIABAJQAAAFgDADQgDADgEAAQgGAAgDgEQgBgDgBgJIgZAHQgPAHgBAKIAHACQAWAFAMAIQASAJAAAVQAAASgPAIQgNAIgRAAQgOAAgNgFg");
	this.shape_58.setTransform(161.5,53.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgoAxIAAhJIAAgLIAAgLQAAgLAKAAQAKAAAAASQAUgUAYABQAJAAAEAGQAEAHAAANIAAAHQAAANgKAAQgKAAAAgKIAAgIIAAgJQgRACgJAIQgJAHgGAOIAAA5QAAAKgLAAQgJAAAAgKg");
	this.shape_59.setTransform(151.5,53.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgjAuQgRgNAAgZQAAgZANgTQAPgVAYAAQAQAAAMAGQANAHAAAQQAAALgMAIQgFAEgRAGIgnAUQAFAJAKAEQAJAFAKAAQAHAAAKgDQAMgEAFgFQADgGAEAAQAEAAADADQADADAAADQAAAMgUAJQgQAHgPAAQgWAAgPgMgAgVgbQgJAKgEASIAhgOQARgJAIgHQgIgJgQAAQgNAAgIALg");
	this.shape_60.setTransform(140.1,53.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AAZA8QgMAAgHgdIgEgZIgCgWIgIASIgRAtQgBAEgDACQgDAGgHAAQgIABgIghQgEgQgEgbIgCgQIgCgQQAAgFAEgDQADgDAEAAQAIAAACAJIADAQIABAQIAHAuIAYhKQAEgMAHAAQAIAAADANIAHAnQAEAZAEAPIAIgdIANg5QACgGAIAAQAEAAAEADQADADAAAEIgBAFQgJAjgNAqQgDAKgHAKQgDAGgGAAIgBAAg");
	this.shape_61.setTransform(126.4,53.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgdA7QgQgGAAgKQAAgFADgDQADgDAFAAQADgBAFAGQADADAJABIAMABQAHAAAHgCQAKgDAAgHQAAgOgUgGIgKgCQgOgDgGgFQgJgDAAgNQAAgWAWgJQAGgEAMgDIAUgHQAFgCAFAAQAFAAADADQADADAAAFIABAJIABAJQAAAFgDADQgDADgEAAQgGAAgDgEQgBgDgBgJIgZAHQgPAHgBAKIAHACQAWAFAMAIQASAJAAAVQAAASgPAIQgNAIgRAAQgOAAgNgFg");
	this.shape_62.setTransform(113.2,53.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AAaA0IgDgXIgCgYIABgIIAAgKQAAgYgJAAQgMABgJAOQgKANgFARIgBALIgBALIABAJIABAKQAAAEgDAEQgDACgFAAQgFAAgDgCQgDgEAAgEIAAgKIgBgJIACgeIABgeIAAgKIgBgKQAAgFAEgDQADgDAEAAQAKAAABAOIAAAMQASgXARAAQARAAAHAPQAFAKAAAUIAAALIAAAIQAAAJADAOQACANAAAJQAAAFgDADQgDADgFAAQgJAAgBgKg");
	this.shape_63.setTransform(102.7,53.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAiA2IgIgIIgSAJQgIADgDAAQgZAAgLgPQgLgNAAgbQAAgYASgSQASgTAWAAQAKAAALAEQAPAGAAAJQAAADgCACIgCAOIgBAVQAAAOACAIIAHATIACAFIABACQAAAEgDADQgDADgEAAQgCAAgFgFgAgRgaQgMAOAAAQQAAARAGAJQAGAJANAAQAIAAAHgEIALgIQgDgbAAgOIAAgKIACgLIgHgDIgEgBQgPAAgMANg");
	this.shape_64.setTransform(91.1,53.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#0066FF").s().p("AgJBNQgFgEAAgGIAAgFIABgEIgBgPIAAgPQAAgPgDgWIgDgnIgFAAQgYAAgOgEQgMgDAAgLQAAgFAEgFQAEgFAIABIARABIARACIATgBIASAAIAYABIAZABQAGAAAFAFQAEAEAAAGQAAAGgEAEQgFAEgGAAIgagBIgagBIADAsIACAqIABAKIAAALQAAAIgDAHQgEAIgIAAQgEAAgFgEg");
	this.shape_65.setTransform(290.6,18.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#0066FF").s().p("AguBBQgQgRgBgXQABgiAfglQAbggAagBIAIABIAHABQAEgEAHgBQALAAACANQACAJAAAMQAAAGgDAEQgEAGgHgBQgKAAgFgKQgCgEgCgBIgIgBQgOAAgQAVQgZAcABAZQAAALAHAJQAIAIALAAQAJABALgGIAQgLQAJgFADAAQAHAAAEAEQAFAFAAAFQAAAHgGAFQgeAZgcgBQgYAAgQgRg");
	this.shape_66.setTransform(276.2,18.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#0066FF").s().p("AgwBSQgNgLAAgiIADgqQACgcAAgPIgBgLIgBgLQAAgQAOAAQAGAAADACQANgDALgBIATgCQAbAAAQAGQALAEgBAKQAAAGgDAEQgFAFgGAAIgFgBQgRgFgRABIgPABIgUADIgBArIApgEIAagCQAFAAAFAEQAFAEgBAGQAAAMgNABIgaADIgrADIgBAXQgBAUADADQACACAMAAIASAAIAUAAIAGgCIAGAAQAHAAAEAEQAFADAAAHQAAANgMACQgLACggAAQgjAAgKgJg");
	this.shape_67.setTransform(262.7,18.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#0066FF").s().p("AgtBJQgWgPAAgVQAAgQAPAAQAPAAAAAQQAAAGALAIQALAHAJAAQAEAAACgOIAAgiQACgWAAglIgBgHIgBAAIgMAAIgMAAQgHAAgEgEQgFgEAAgHQAAgPATAAIALABIAKAAIATgBIAUAAQAdAAAAAQQAAAFgEAFQgEAEgHAAIgGAAIgHAAIgIAAIAAAHQAABLgLAjQgIAagTAAQgUAAgTgOg");
	this.shape_68.setTransform(248.3,18.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#0066FF").s().p("Ag0BSQgFgGAAgGIAAhwIAAgPQgBgIABgFQACgKARgDQAIgDATABQASAAATANQAWAPAAAXQAAANgFAIQgDAHgJAGQAKAEAIALQAKALAAAMQAAAOgQANQgKAIgMAEQgXAKgmgBQgHAAgFgEgAgbA5QASgBAUgGQASgFAAgGQAAgJgMgGQgJgGgIAAIgbgBgAgbghIAAAWIAOABQAfgCAAgWQAAgHgKgHQgIgIgLAAIgQAAg");
	this.shape_69.setTransform(234.3,18.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#0066FF").s().p("AgqBJQgcgWAAg0IABgQIAAgOIAAgNIABgMQAAgJACgHQAEgKAIAAQAGAAAFADQAEAFAAAGIAAASIAAATIgBAOIAAAQQAAAOAEAOQAEAQAKAIQAEADAQAAQAbABAKgxQAFgYAAgtQAAgGADgGQAFgHAKAAQAHAAADAFQADAEAAAFQAAArgEAXQgGAigSAZQgHAKgMAIQgNAIgNAAQgbAAgNgKg");
	this.shape_70.setTransform(218.8,18.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#0066FF").s().p("Ag4BGQgOgLAAgNQAAgGAEgFQAFgEAHgBQAJABAFAJQAGANAWABQAQgBARgHQASgJAAgJQAAgOgLgEQgIgDgWgBQgTAAgPgGQgTgIAAgQQAAgWAWgRQAWgRAZAAQAKgBAQAFQAUAHAAAHQAAAGgFAEQgEAFgHAAQgFAAgJgDIgQgBQgOAAgKAGQgNAHAAAHQAAAFAEACQAEADAHABIAaACQAYACANALQAQALAAAXQAAAcgfAOQgZAKgcABQgcgBgPgLg");
	this.shape_71.setTransform(203.2,18.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgkAuQgQgNAAgZQAAgZANgTQAPgVAYAAQARAAALAGQANAHAAAQQABALgMAIQgGAEgRAGIgnAUQAFAJAKAEQAJAFAKAAQAHAAAKgDQAMgEAFgFQADgGAEAAQAEAAADADQADADAAADQAAAMgUAJQgQAHgPAAQgWAAgQgMgAgVgbQgJAKgEASIAhgOQASgJAHgHQgIgJgQAAQgNAAgIALg");
	this.shape_72.setTransform(183.2,20.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AAdBRQgDgJgCgQQgCgQAAgKIAAgIIABgJQAAgSgKAAQgNAAgKAKQgFAHgKASQAAAogDAIQgDAHgHAAQgEAAgDgDQgEgDAAgFIABgEQABgDAAgNIABgQIAAhNIABgSIgBgKIgBgKQAAgFADgDQADgDAFAAQAIAAACAKQACAKAAAIIgBAYIgBAXIAAAKQAJgMAKgGQAIgGAMAAQARAAAHAMQAFAIAAARIABAVIACAWQACANACAJIABAEQAAAEgEADQgDADgEAAQgIAAgCgIg");
	this.shape_73.setTransform(170.8,18);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgGBOQgEgDAAgFIABgEIAAgFIAAgQIgBgQQAAgPgCgaQgDgeAAgNIgKAAQgYAAgNgEQgJgCAAgIQAAgFADgDQADgEAFABIARABIASACIATAAIASgBIAZABIAYACQAFAAADADQADADAAAFQAAAEgDADQgDAEgFAAIgYgCIgZgBIgIAAIADAwQADAdAAASIAAALIABALQAAAIgCAFQgDAHgGAAQgDAAgDgDg");
	this.shape_74.setTransform(157.7,18.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgeBSQgGgEAAgHQAAgHAFgGQAFgIAIAAQAIAAAEAGQADAEAAAGQAAAHgEAGQgEAHgIAAQgGAAgFgEgAgYAkQgFgEAAgGQAAgJAOgKIAYgQQAOgLAAgIQAAgKgKgJQgLgJgJAAQgFAAgKAHQgKAGgFAAQgGAAgEgEQgFgFAAgGQAAgKATgJQAQgIAKAAQAWAAATARQATARAAAXQAAAWgXAPIgRAMQgLAIgEAGQgFAGgGAAQgGAAgFgFg");
	this.shape_75.setTransform(237.1,51);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("Ag4BCQgYgUAAgfQAAgjAXgeQAaghAlAAQAlAAATARQATARAAAjQAAAigVAeQgZAiglAAQggAAgWgSgAghgfQgQAWAAAYQAAASAOALQANALAUAAQAWAAAQgYQAOgUAAgZQAAgXgKgJQgKgIgYAAQgWAAgRAXg");
	this.shape_76.setTransform(222.1,51.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AAtBSQgEgFAAgFIgBgYIgBgXIABgLQgRAAgXAFIgpAIIgCAWIgBAXQAAAGgEAEQgEADgHAAQgGAAgEgDQgEgEAAgGIACggIACggIAAgmIABgoQAAgGAEgEQAEgEAGAAQAHAAAEAEQAEAEAAAGIAAAYIgBAZIgBAKIAAALIApgIQAWgEASgBIABgnQAAgIAFgLQAGgNAIAAQAFAAAFAEQAEAEAAAGIAAADQgCAIAAAGIgBAJIAAAJIgBAfIgBAcIABAYIABAXQAAAGgEAEQgFAEgGAAQgGAAgFgDg");
	this.shape_77.setTransform(205.1,50.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AAVBTQgGgEAAgGQgFgMgBgIIgLhDQgHATgIASQgMAZgEAPIABAFQAAAHgGAEQgFADgGAAQgIAAgFgDQgGgFAAgIIgEgMIgLgyQgHgYgRgvIgBgFQAAgGAFgEQAEgEAHAAQAIAAAFAHQACAEAEAKQAKAeAOA4QAIgVAJgaQAHgXAFgKQALgYAJAAQAKAAAFAMQACAFADAPIACAVQADATALAvIAfhLIAFgUQADgMAFgHQAFgIAJAAQAGAAAFAFQAEADAAAHIgEALIgEALIgGATIgTAsIgUAuQgEALgEAHQgFAJgLAAQgGAAgFgEg");
	this.shape_78.setTransform(185.1,51.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgJBNQgFgEAAgGIAAgFIABgEIgBgPIAAgPQAAgPgDgWIgDgnIgFAAQgYAAgOgEQgMgDAAgLQAAgFAEgFQAEgFAIABIARABIARACIATgBIASAAIAYABIAZABQAGAAAFAFQAEAEAAAGQAAAGgEAEQgFAEgGAAIgagBIgagBIADAsIACAqIABAKIAAALQAAAIgDAHQgEAIgIAAQgEAAgFgEg");
	this.shape_79.setTransform(342.1,50.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AA2BQQgIAAgJgUQgGgMgEgRIgaADIgYACQgFAMgMAYQgFAIgIAAQgGAAgFgEQgEgEAAgHQAAgFAPggIgBgGQAAgFAKgDIAig1QAZgpAGAAQAMAAAEAPIAHAiIAQBFIAFAOQAEAJAAAFQAAAGgEAEQgFAFgFAAIgBgBgAgHAJIANgBIAPgBIgHgjIgVAlg");
	this.shape_80.setTransform(326.2,51.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#0066FF").s().p("AhKBSQgEgEAAgGIAAgNIABgOIAAgSIABgTIAAgSIgBgVIgBgUIgBgTQAAgGAFgFQAGgFAHAAQAIAAAJAOQAvBFAwAqIAAgQIgBhFIgCgMIgBgMQAAgPAQAAQARAAAAA2IAAARIAABCIgCARQgCAOgOAAQgHAAgKgJQgpglgyhBIgBAgIABAZIAAAaQAAAggQAAQgHAAgFgFg");
	this.shape_81.setTransform(276.7,183.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#0066FF").s().p("AgqBJQgcgWAAg0IAAgQIABgOIAAgNIABgMQAAgJADgIQADgJAIAAQAGAAAEADQAGAFAAAGIAAASIgBATIAAAOIgBAQQAAAOAEAOQAEAQAKAHQAEAEAQAAQAbABAKgyQAFgXAAgtQAAgGADgGQAGgHAJAAQAGAAAEAFQADAEAAAFQAAArgEAXQgGAigSAZQgHAKgMAIQgNAIgNAAQgbAAgNgKg");
	this.shape_82.setTransform(259.5,183.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#0066FF").s().p("Ag4BCQgYgUAAgfQAAgiAXgfQAaghAlAAQAlAAATARQATARAAAiQAAAjgVAeQgZAiglAAQggAAgWgSgAghgfQgQAWAAAYQAAASAOALQANALAUAAQAWAAAQgXQAOgWAAgZQAAgWgKgJQgKgIgYAAQgWAAgRAXg");
	this.shape_83.setTransform(242.7,183.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#0066FF").s().p("AhKBSQgEgEAAgGIAAgNIABgOIAAgSIABgTIAAgSIgBgVIgBgUIgBgTQAAgGAFgFQAGgFAHAAQAIAAAJAOQAvBFAwAqIAAgQIgBhFIgCgMIgBgMQAAgPAQAAQARAAAAA2IAAARIAABCIgCARQgCAOgOAAQgHAAgKgJQgpglgyhBIgBAgIABAZIAAAaQAAAggQAAQgHAAgFgFg");
	this.shape_84.setTransform(225,183.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AAiA3IgIgIIgSAIQgIADgDAAQgZAAgLgPQgLgNAAgbQAAgYASgSQASgTAWAAQAKAAALAEQAPAHAAAIQAAADgCADIgCANIgBAWQAAANACAIIAHASIACAHIABABQAAAFgDADQgDACgEAAQgCAAgFgEgAgRgaQgMAOAAAQQAAASAGAIQAGAJANAAQAIAAAHgEIALgIQgDgbAAgNIAAgKIACgMIgHgDIgEgBQgPAAgMANg");
	this.shape_85.setTransform(421.8,151.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgdA7QgQgGAAgLQAAgEADgDQADgDAFAAQADAAAFAFQADACAJACIAMABQAHAAAHgCQAKgDAAgHQAAgPgUgEIgKgDQgOgDgGgFQgJgEAAgMQAAgWAWgJQAGgEAMgEIAUgGQAFgCAFAAQAFAAADADQADADAAAEIABAKIABAJQAAAFgDADQgDADgEAAQgGAAgDgEQgBgDgBgJIgZAIQgPAGgBALIAHACQAWAEAMAHQASAKAAAVQAAASgPAJQgNAHgRAAQgOAAgNgFg");
	this.shape_86.setTransform(404,151.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgbBUQgEgDAAgFQAAgLAYgzIgnhIIgFgIQgDgFAAgDQAAgFAEgDQADgDAEAAQAFAAADAEQASAZATAvIAQglQAJgUAIgNQADgGAGAAQAEAAADADQAEADAAAEIgCAFIglBPQgOAdgFAUIgHAVQgDAHgHAAQgEAAgDgCg");
	this.shape_87.setTransform(392.9,154.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AAiA3IgIgIIgSAIQgIADgDAAQgZAAgLgPQgLgNAAgbQAAgYASgSQASgTAWAAQAKAAALAEQAPAHAAAIQAAADgCADIgCANIgBAWQAAANACAIIAHASIACAHIABABQAAAFgDADQgDACgEAAQgCAAgFgEgAgRgaQgMAOAAAQQAAASAGAIQAGAJANAAQAIAAAHgEIALgIQgDgbAAgNIAAgKIACgMIgHgDIgEgBQgPAAgMANg");
	this.shape_88.setTransform(381.9,151.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgLBNIACgnIABgmIAAglIAAgnQAAgLAJAAQALAAAAALIgBAnIgBAlIgBA1IgBAZQgBAKgHAAQgLAAAAgLg");
	this.shape_89.setTransform(358.2,148.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AAiA3IgIgIIgSAIQgIADgDAAQgZAAgLgPQgLgNAAgbQAAgYASgSQASgTAWAAQAKAAALAEQAPAHAAAIQAAADgCADIgCANIgBAWQAAANACAIIAHASIACAHIABABQAAAFgDADQgDACgEAAQgCAAgFgEgAgRgaQgMAOAAAQQAAASAGAIQAGAJANAAQAIAAAHgEIALgIQgDgbAAgNIAAgKIACgMIgHgDIgEgBQgPAAgMANg");
	this.shape_90.setTransform(349.6,151.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgdA7QgQgGAAgLQAAgEADgDQADgDAFAAQADAAAFAFQADACAJACIAMABQAHAAAHgCQAKgDAAgHQAAgPgUgEIgKgDQgOgDgGgFQgJgEAAgMQAAgWAWgJQAGgEAMgEIAUgGQAFgCAFAAQAFAAADADQADADAAAEIABAKIABAJQAAAFgDADQgDADgEAAQgGAAgDgEQgBgDgBgJIgZAIQgPAGgBALIAHACQAWAEAMAHQASAKAAAVQAAASgPAJQgNAHgRAAQgOAAgNgFg");
	this.shape_91.setTransform(331.7,151.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgJBNQgDgDAAgEIgBgUIAAgTIABgZIABgXQABgFADgDQADgDAEAAQACAAADADQAEADAAAFIgBAXIgBAZIAAATIAAAUQAAAEgDADQgDADgDAAQgEAAgDgDgAgFg6QgEgEAAgFQAAgFAEgEQAEgDACAAQAFAAAEADQAEAEAAAFQAAAFgEAEQgEAEgFAAQgCAAgEgEg");
	this.shape_92.setTransform(323.8,148.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgjAuQgRgNAAgZQAAgZANgTQAPgVAYAAQAQAAAMAGQAOAHAAAQQAAALgNAIQgFAEgRAGIgoAUQAHAJAJAEQAIAFAKAAQAIAAAKgDQAMgEAFgFQADgGAEAAQAEAAADADQADADAAADQAAAMgTAJQgRAHgQAAQgWAAgOgMgAgVgbQgJAKgEASIAhgOQASgJAIgHQgKgJgPAAQgMAAgJALg");
	this.shape_93.setTransform(308.2,151.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgeAvQgPgOAAgYQAAgTAPgYQAQgZASAAQAKAAANAFQARAGAAAJQAAAEgDAEQgDACgEAAQgDAAgCgBIgEgEQgHgFgOAAQgJAAgLATQgKASAAALQAAAPAKAIQAJAIAMAAQAHgBAHgDIAMgGIAFgCQAEAAADADQADADAAAEQAAAIgRAHQgOAHgKAAQgUAAgPgNg");
	this.shape_94.setTransform(296.3,151.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AAaA0IgDgXIgCgYIABgIIAAgLQAAgXgJAAQgMAAgJAOQgKANgFATIgBAKIgBAKIABAKIABAKQAAAFgDADQgDACgFAAQgFAAgDgCQgDgDAAgFIAAgKIgBgKIACgdIABgeIAAgKIgBgKQAAgFAEgDQADgDAEAAQAKAAABAOIAAANQASgZARAAQARAAAHAQQAFAKAAATIAAALIAAAIQAAAKADAOQACAOAAAIQAAAFgDADQgDADgFAAQgJAAgBgKg");
	this.shape_95.setTransform(285.2,151.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgkAuQgQgNAAgZQAAgZAOgTQAOgVAYAAQAQAAAMAGQAOAHAAAQQgBALgLAIQgGAEgRAGIgoAUQAHAJAJAEQAJAFAJAAQAIAAAKgDQANgEADgFQAEgGAEAAQAEAAADADQADADAAADQAAAMgUAJQgQAHgQAAQgVAAgQgMgAgVgbQgJAKgEASIAhgOQARgJAJgHQgKgJgPAAQgMAAgJALg");
	this.shape_96.setTransform(273.4,151.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgGBLQgDgCAAgFIAAgMIABgNIgCg8IgYgCQgKgBAAgJQAAgFADgDQADgDAFAAIAWACIAAgQIgBgMQAAgFADgDQADgDAFAAQAIAAABAPIAAAKIAAAGIAAAHIAPgBQAMAAADABQAHABAAAJQAAAFgDADQgDACgFAAIgFAAIgGAAIgOABIACA+IAAAFIAAAFQAAAYgLAAQgDAAgDgDg");
	this.shape_97.setTransform(261.9,149.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AAaA0IgDgXIgCgYIABgIIAAgLQAAgXgJAAQgMAAgJAOQgKANgFATIgBAKIgBAKIABAKIABAKQAAAFgDADQgDACgFAAQgFAAgDgCQgDgDAAgFIAAgKIgBgKIACgdIABgeIAAgKIgBgKQAAgFAEgDQADgDAEAAQAKAAABAOIAAANQASgZARAAQARAAAHAQQAFAKAAATIAAALIAAAIQAAAKADAOQACAOAAAIQAAAFgDADQgDADgFAAQgJAAgBgKg");
	this.shape_98.setTransform(251.3,151.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgjAuQgRgNAAgZQAAgZAOgTQAOgVAYAAQAQAAAMAGQAOAHAAAQQgBALgMAIQgFAEgRAGIgoAUQAHAJAJAEQAIAFAKAAQAIAAAKgDQANgEADgFQAEgGAEAAQAEAAADADQADADAAADQAAAMgTAJQgRAHgQAAQgVAAgPgMgAgVgbQgJAKgEASIAhgOQASgJAIgHQgKgJgPAAQgMAAgJALg");
	this.shape_99.setTransform(239.5,151.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgdA7QgQgGAAgLQAAgEADgDQADgDAFAAQADAAAFAFQADACAJACIAMABQAHAAAHgCQAKgDAAgHQAAgPgUgEIgKgDQgOgDgGgFQgJgEAAgMQAAgWAWgJQAGgEAMgEIAUgGQAFgCAFAAQAFAAADADQADADAAAEIABAKIABAJQAAAFgDADQgDADgEAAQgGAAgDgEQgBgDgBgJIgZAIQgPAGgBALIAHACQAWAEAMAHQASAKAAAVQAAASgPAJQgNAHgRAAQgOAAgNgFg");
	this.shape_100.setTransform(227.6,151.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AAiA3IgIgIIgSAIQgIADgDAAQgZAAgLgPQgLgNAAgbQAAgYASgSQASgTAWAAQAKAAALAEQAPAHAAAIQAAADgCADIgCANIgBAWQAAANACAIIAHASIACAHIABABQAAAFgDADQgDACgEAAQgCAAgFgEgAgRgaQgMAOAAAQQAAASAGAIQAGAJANAAQAIAAAHgEIALgIQgDgbAAgNIAAgKIACgMIgHgDIgEgBQgPAAgMANg");
	this.shape_101.setTransform(210.4,151.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgQBcQgEgDAAgFIABgCQACgOAAgRIAAgdIAAgdIgRABQgLAAAAgKQAAgLATgBIAKAAIACgQQACgYAKgLQAJgOAXAAQAQAAAAAKQAAALgOAAQgaAAgDAkIgBAGIAZgBQARAAAAALQAAAIgJABIgIABIgaACIAAAWIAAAUIAAAUQAAAUgBALQgBAJgHAAQgFAAgDgCg");
	this.shape_102.setTransform(192.4,149.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgfAtQgPgPAAgZQgBgWANgTQAPgVAZAAQAVAAAMATQAIAQAAAWQAAAWgNARQgNAUgVAAQgSAAgNgOgAgSgVQgHAMAAAOQAAAPAIAKQAHAGAKABQAJgBAIgHQAJgJABgQQABgogYAAQgNAAgJAPg");
	this.shape_103.setTransform(181.1,151.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#0066FF").s().p("AgvBBQgPgRAAgXQgBgiAggmQAbgfAZgBIAJABIAHABQAFgEAGgBQALAAADANQACAJAAAMQAAAGgDAEQgFAGgIAAQgJAAgEgLQgDgEgCgBIgJgBQgNAAgPAVQgaAcABAZQgBAMAJAIQAHAJALgBQAJABAKgGIARgKQAIgGAFAAQAGAAAFAEQAEAFAAAGQAAAGgGAFQgdAZgdAAQgYgBgRgRg");
	this.shape_104.setTransform(147,148.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#0066FF").s().p("AgxBSQgMgLABgiIABgqQADgcAAgPIgCgLIgBgLQABgRAPAAQAEAAAFADQAMgDALgBIAUgCQAaAAARAGQAJAEABAKQAAAGgFAEQgDAFgIAAIgEgBQgRgEgQAAIgQAAIgTAEIgBArIAngEIAagCQAGAAAFAEQAEAEABAGQAAALgOACIgaACIgsAEIgBAXQABAUACAEQABABAMAAIATAAIAUAAIAGgBIAHgBQAFAAAFAEQAFAEAAAGQAAANgNACQgKACggAAQgjAAgLgJg");
	this.shape_105.setTransform(133.5,148.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#0066FF").s().p("Ag0BSQgFgGAAgGIAAhwIAAgPQgBgIABgFQACgLARgCQAIgCATgBQASAAATAOQAWAPAAAXQAAAMgFAJQgDAGgJAHQAKAEAIALQAKALAAAMQAAAOgQANQgKAIgMAEQgXAJgmAAQgHAAgFgEgAgbA5QASAAAUgHQASgFAAgGQAAgJgMgGQgJgGgIAAIgbgBgAgbghIAAAWIAOABQAfgCAAgWQAAgHgKgIQgIgHgLAAIgQAAg");
	this.shape_106.setTransform(105.1,148.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#0066FF").s().p("AgqBJQgcgWAAg0IAAgQIABgOIAAgNIAAgMQAAgJAEgIQAEgJAHAAQAGAAAEADQAFAFABAGIAAASIgBATIgBAOIAAAQQAAAOAEAOQAFAQAIAHQAFAEARAAQAaABAKgyQAFgXAAgtQAAgGAEgGQAFgHAIAAQAHAAAFAFQACAEAAAFQAAArgEAXQgGAigRAZQgJAKgKAIQgOAIgMAAQgbAAgOgKg");
	this.shape_107.setTransform(89.6,149.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#0066FF").s().p("Ag5BGQgNgKAAgOQAAgGAEgFQAFgFAGAAQAKABAFAJQAGANAVABQARAAARgJQASgIAAgKQAAgNgLgEQgIgDgWgBQgTAAgOgGQgUgIAAgRQAAgUAXgSQAWgRAYAAQALgBAPAFQATAGAAAIQAAAGgDAEQgFAFgGAAQgGAAgKgDIgPgCQgOABgKAGQgNAHAAAHQAAAFAEACQADADAJABIAZACQAYACAOALQAPALAAAWQAAAdggAOQgYALgdgBQgbABgQgMg");
	this.shape_108.setTransform(74,149.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgjAuQgRgNAAgZQAAgZAOgTQAOgVAYAAQAQAAAMAGQAOAHAAAQQAAALgNAIQgFAEgRAGIgoAUQAHAJAJAEQAIAFAKAAQAIAAAKgDQANgEADgFQAEgGAEAAQAEAAADADQADADAAADQAAAMgTAJQgRAHgQAAQgWAAgOgMgAgVgbQgJAKgEASIAhgOQASgJAIgHQgKgJgPAAQgMAAgJALg");
	this.shape_109.setTransform(54,151.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AAZA8QgMAAgHgdIgEgZIgCgWIgIASIgRAtQgBAEgDACQgDAGgHAAQgIABgIghQgEgQgEgbIgCgQIgCgQQAAgFAEgDQADgDAEAAQAIAAACAJIADAQIABAQIAHAuIAYhKQAEgMAHAAQAIAAADANIAHAnQAEAZAEAPIAIgdIANg5QACgGAIAAQAEAAAEADQADADAAAEIgBAFQgJAjgNAqQgDAKgHAKQgDAGgGAAIgBAAg");
	this.shape_110.setTransform(126.4,53.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#0066FF").s().p("AgJBNQgFgEAAgGIAAgFIABgEIgBgPIAAgPQAAgPgDgWIgDgnIgFAAQgYAAgOgEQgMgDAAgLQAAgFAEgFQAEgFAIABIARABIARACIATgBIASAAIAYABIAZABQAGAAAFAFQAEAEAAAGQAAAGgEAEQgFAEgGAAIgagBIgagBIADAsIACAqIABAKIAAALQAAAIgDAHQgEAIgIAAQgEAAgFgEg");
	this.shape_111.setTransform(290.6,18.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#0066FF").s().p("AgtBJQgWgPAAgVQAAgQAPAAQAPAAAAAQQAAAGALAIQALAHAJAAQAEAAACgOIAAgiQACgWAAglIgBgHIgBAAIgMAAIgMAAQgHAAgEgEQgFgEAAgHQAAgPATAAIALABIAKAAIATgBIAUAAQAdAAAAAQQAAAFgEAFQgEAEgHAAIgGAAIgHAAIgIAAIAAAHQAABLgLAjQgIAagTAAQgUAAgTgOg");
	this.shape_112.setTransform(248.3,18.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AAdBRQgDgJgCgQQgCgQAAgKIAAgIIABgJQAAgSgKAAQgNAAgKAKQgFAHgKASQAAAogDAIQgDAHgHAAQgEAAgDgDQgEgDAAgFIABgEQABgDAAgNIABgQIAAhNIABgSIgBgKIgBgKQAAgFADgDQADgDAFAAQAIAAACAKQACAKAAAIIgBAYIgBAXIAAAKQAJgMAKgGQAIgGAMAAQARAAAHAMQAFAIAAARIABAVIACAWQACANACAJIABAEQAAAEgEADQgDADgEAAQgIAAgCgIg");
	this.shape_113.setTransform(170.8,18);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgGBOQgEgDAAgFIABgEIAAgFIAAgQIgBgQQAAgPgCgaQgDgeAAgNIgKAAQgYAAgNgEQgJgCAAgIQAAgFADgDQADgEAFABIARABIASACIATAAIASgBIAZABIAYACQAFAAADADQADADAAAFQAAAEgDADQgDAEgFAAIgYgCIgZgBIgIAAIADAwQADAdAAASIAAALIABALQAAAIgCAFQgDAHgGAAQgDAAgDgDg");
	this.shape_114.setTransform(157.7,18.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#0066FF").s().p("AhKBSQgEgEAAgHIAAgMIABgOIAAgTIABgSIAAgSIgBgVIgBgUIgBgTQAAgGAFgFQAGgFAHAAQAIAAAJAOQAvBFAwAqIAAgQIgBhFIgCgMIgBgMQAAgPAQAAQARAAAAA2IAAARIAABCIgCARQgCAOgOAAQgHAAgKgJQgpglgyhBIgBAgIABAZIAAAaQAAAggQAAQgHAAgFgFg");
	this.shape_115.setTransform(320,218.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#0066FF").s().p("AgqBJQgcgWAAg0IAAgQIABgOIAAgNIAAgMQAAgJAEgIQAEgJAHAAQAGAAAFADQAEAFABAGIAAASIgBATIgBAOIAAAQQAAAOAEAOQAFAQAIAHQAFAEARAAQAaABAKgyQAFgXAAgtQAAgGAEgGQAFgHAIAAQAHAAAFAFQACAEAAAFQAAArgEAXQgGAigRAZQgJAKgKAIQgOAIgMAAQgbAAgOgKg");
	this.shape_116.setTransform(302.9,218.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#0066FF").s().p("AhKBSQgEgEAAgHIAAgMIABgOIAAgTIABgSIAAgSIgBgVIgBgUIgBgTQAAgGAFgFQAGgFAHAAQAIAAAJAOQAvBFAwAqIAAgQIgBhFIgCgMIgBgMQAAgPAQAAQARAAAAA2IAAARIAABCIgCARQgCAOgOAAQgHAAgKgJQgpglgyhBIgBAgIABAZIAAAaQAAAggQAAQgHAAgFgFg");
	this.shape_117.setTransform(268.4,218.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#0066FF").s().p("Ag4BCQgYgUAAgfQAAgiAXgfQAaghAlAAQAlAAATARQATARAAAiQAAAjgVAeQgZAiglAAQggAAgWgSgAghgfQgQAWAAAYQAAASAOALQANALAUAAQAWAAAQgXQAOgWAAgZQAAgWgKgJQgKgIgYAAQgWAAgRAXg");
	this.shape_118.setTransform(250.6,218.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#0066FF").s().p("Ag6BQQgDgEAAgHIAAgYIAAgYIAAhVQAAgHAEgFQAFgIALABIAaACQAPACAJAFQAtAYABAiQAAAOgKAJQgJAKgUAIQAdAQAOAQQAEAFAAAFQAAAGgFAEQgFAFgGAAQgFAAgFgFQgggeglgMIAAAiQAAAHgEAEQgEAEgHAAQgGAAgFgEgAggADIAFAAQAaAAALgFIAKgHQAFgFgBgCQAAgMgPgLQgMgLgRgCIgMAAg");
	this.shape_119.setTransform(235.1,218.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#0066FF").s().p("AgwBRQgDgEAAgGIAAgdIABgwIACgxQABgcAPABIAKgBIAQgBQAUAAARAOQAWAPAAAWQAAAbgXAPQgTAOgZAAIgJgBIAAAxQAAAGgFAEQgDAEgHAAQgFAAgFgEgAgTg4IAAAPIgCAlIAHABQAPAAALgIQAMgIAAgOQAAgJgLgHQgKgHgLAAIgGAAIgFAAg");
	this.shape_120.setTransform(222,217.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#0066FF").s().p("Ag4BCQgYgUAAgfQAAgiAXgfQAaghAlAAQAlAAATARQATARAAAiQAAAjgVAeQgZAiglAAQggAAgWgSgAghgfQgQAWAAAYQAAASAOALQANALAUAAQAWAAAQgXQAOgWAAgZQAAgWgKgJQgKgIgYAAQgWAAgRAXg");
	this.shape_121.setTransform(242.7,183.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#0066FF").s().p("AgFA/QgDgEAAgEQAAgNgDgaQgCgXAAgNQAAgLgDgHQgIAEgIAHIgMAPIgGAGIgBARIgBATIABAJIABAIQAAAFgDADQgEADgEAAQgMAAAAgcIABgTIABgRIgBgRIgBgSQAAgYALAAQAEAAAEAEQADADAAAFIAAAGIgBAHIAAALQAGgMALgJQALgJAHAAQARAAAEAQQAGgHAJgEQAIgEAKAAQASAAAHATQABAEADAaIAIA8QAAAEgDADQgDADgFAAQgJAAgBgJIgEghIgEggQgBgHgCgHQgEgKgEAAQgEAAgLAHIgOAKIABAUIADAbQACARAAALQAAAEgDAEQgDADgEAAQgDAAgDgDg");
	this.shape_122.setTransform(337.2,251.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#0066FF").s().p("AgoAxIAAhJIAAgLIAAgLQAAgLAKAAQAKABAAARQAUgTAYAAQAJAAAEAGQAEAGAAAOIAAAHQAAAOgKgBQgKAAAAgKIAAgIIAAgJQgRACgJAIQgJAHgGAOIAAA5QAAAKgLAAQgJAAAAgKg");
	this.shape_123.setTransform(323.5,251.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#0066FF").s().p("AgfAtQgPgPAAgZQgBgWANgSQAPgXAZAAQAVAAALAVQAJAPAAAWQAAAXgMAQQgOATgVABQgSAAgNgOgAgSgUQgHALAAAOQAAAQAIAIQAHAIAKgBQAJABAIgJQAJgIABgQQABgngYAAQgNgBgJAQg");
	this.shape_124.setTransform(312,251.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#0066FF").s().p("AgQBbQgEgDABgEIAAgCQACgOAAgRIAAgcIAAgeIgRABQgLAAAAgKQAAgLATgBIAKAAIACgQQACgYAKgLQAJgOAXAAQAQAAAAALQAAAKgOAAQgaAAgDAkIgBAHIAYgBQARAAABAKQAAAIgJACIgJAAIgZABIAAAXIAAAUIAAAUQAAAUgBAMQgBAIgHAAQgFAAgDgDg");
	this.shape_125.setTransform(300.6,249.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#0066FF").s().p("AhKBSQgEgEAAgGIAAgOIABgMIAAgTIABgUIAAgSIgBgUIgBgTIgBgTQAAgHAFgFQAGgFAHAAQAIAAAJANQAvBGAwAqIAAgQIgBhGIgCgLIgBgMQAAgPAQAAQARAAAAA2IAAARIAABCIgCARQgCAOgOAAQgHAAgKgIQgpgmgyhBIgBAgIABAaIAAAaQAAAfgQAAQgHAAgFgFg");
	this.shape_126.setTransform(276.7,248.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#0066FF").s().p("AgqBJQgcgWAAg0IAAgPIABgQIAAgMIABgNQAAgIADgHQADgKAIAAQAGAAAEADQAGAEAAAHIAAASIgBASIAAAQIgBAPQAAAOAEAOQAEARAKAHQAEADAQAAQAbAAAKgwQAFgXAAguQAAgGADgGQAGgHAJAAQAGAAAEAFQADAEAAAFQAAAqgEAYQgGAjgSAYQgHALgMAGQgNAJgNAAQgbAAgNgKg");
	this.shape_127.setTransform(259.5,249.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#0066FF").s().p("AhKBSQgEgEAAgGIAAgOIABgMIAAgTIABgUIAAgSIgBgUIgBgTIgBgTQAAgHAFgFQAGgFAHAAQAIAAAJANQAvBGAwAqIAAgQIgBhGIgCgLIgBgMQAAgPAQAAQARAAAAA2IAAARIAABCIgCARQgCAOgOAAQgHAAgKgIQgpgmgyhBIgBAgIABAaIAAAaQAAAfgQAAQgHAAgFgFg");
	this.shape_128.setTransform(225,248.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#0066FF").s().p("Ag4BCQgYgUAAgfQAAgjAXgeQAaghAlAAQAlAAATARQATARAAAjQAAAigVAeQgZAiglAAQggAAgWgSgAghgfQgQAWAAAYQAAASAOALQANALAUAAQAWAAAQgYQAOgUAAgZQAAgXgKgJQgKgIgYAAQgWAAgRAXg");
	this.shape_129.setTransform(222.1,51.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_74,p:{x:157.7,y:18.2}},{t:this.shape_73,p:{x:170.8,y:18}},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68,p:{x:248.3,y:18.8}},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65,p:{x:290.6,y:18.2}},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61,p:{x:126.4,y:53.7}},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55,p:{x:222.1,y:51.1}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51,p:{x:290}},{t:this.shape_50,p:{x:310}},{t:this.shape_49},{t:this.shape_48,p:{x:342.1,y:50.8}},{t:this.shape_47,p:{x:355.8}},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:246.3,y:83.3}},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]}).to({state:[{t:this.shape_74,p:{x:157.7,y:18.2}},{t:this.shape_73,p:{x:170.8,y:18}},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68,p:{x:248.3,y:18.8}},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65,p:{x:290.6,y:18.2}},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61,p:{x:126.4,y:53.7}},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_78,p:{x:185.1}},{t:this.shape_77,p:{x:205.1}},{t:this.shape_76},{t:this.shape_75,p:{x:237.1}},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51,p:{x:290}},{t:this.shape_50,p:{x:310}},{t:this.shape_49},{t:this.shape_48,p:{x:342.1,y:50.8}},{t:this.shape_47,p:{x:355.8}},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:246.3,y:83.3}},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]},22).to({state:[{t:this.shape_74,p:{x:157.7,y:18.2}},{t:this.shape_73,p:{x:170.8,y:18}},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68,p:{x:248.3,y:18.8}},{t:this.shape_67},{t:this.shape_66},{t:this.shape_48,p:{x:290.6,y:18.2}},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61,p:{x:126.4,y:53.7}},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_51,p:{x:185.1}},{t:this.shape_50,p:{x:205.1}},{t:this.shape_55,p:{x:222.1,y:51.1}},{t:this.shape_47,p:{x:237.1}},{t:this.shape_53},{t:this.shape_52},{t:this.shape_78,p:{x:290}},{t:this.shape_77,p:{x:310}},{t:this.shape_80},{t:this.shape_79},{t:this.shape_75,p:{x:355.8}},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:246.3,y:83.3}},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]},16).to({state:[{t:this.shape_74,p:{x:157.7,y:18.2}},{t:this.shape_73,p:{x:170.8,y:18}},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68,p:{x:248.3,y:18.8}},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65,p:{x:290.6,y:18.2}},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61,p:{x:126.4,y:53.7}},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55,p:{x:222.1,y:51.1}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51,p:{x:290}},{t:this.shape_50,p:{x:310}},{t:this.shape_49},{t:this.shape_48,p:{x:342.1,y:50.8}},{t:this.shape_47,p:{x:355.8}},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:246.3,y:83.3}},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]},14).to({state:[{t:this.shape_114},{t:this.shape_113},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_112},{t:this.shape_67},{t:this.shape_66},{t:this.shape_111},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_110},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55,p:{x:222.1,y:51.1}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51,p:{x:290}},{t:this.shape_50,p:{x:310}},{t:this.shape_49},{t:this.shape_65,p:{x:342.1,y:50.8}},{t:this.shape_47,p:{x:355.8}},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_73,p:{x:246.3,y:83.3}},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_74,p:{x:28.5,y:148.8}},{t:this.shape_36,p:{x:41.6,y:148.6}},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_68,p:{x:119.1,y:149.4}},{t:this.shape_105},{t:this.shape_104},{t:this.shape_48,p:{x:161.4,y:148.8}},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_61,p:{x:368.8,y:151.7}},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83,p:{x:242.7,y:183.7}},{t:this.shape_82},{t:this.shape_81}]},47).to({state:[{t:this.shape_114},{t:this.shape_113},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_112},{t:this.shape_67},{t:this.shape_66},{t:this.shape_111},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_110},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55,p:{x:222.1,y:51.1}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51,p:{x:290}},{t:this.shape_50,p:{x:310}},{t:this.shape_49},{t:this.shape_65,p:{x:342.1,y:50.8}},{t:this.shape_47,p:{x:355.8}},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_73,p:{x:246.3,y:83.3}},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_74,p:{x:28.5,y:148.8}},{t:this.shape_36,p:{x:41.6,y:148.6}},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_68,p:{x:119.1,y:149.4}},{t:this.shape_105},{t:this.shape_104},{t:this.shape_48,p:{x:161.4,y:148.8}},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_61,p:{x:368.8,y:151.7}},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_121},{t:this.shape_82},{t:this.shape_81},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_83,p:{x:286.1,y:218.4}},{t:this.shape_116},{t:this.shape_115}]},19).to({state:[{t:this.shape_114},{t:this.shape_113},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_112},{t:this.shape_67},{t:this.shape_66},{t:this.shape_111},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_110},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_129},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51,p:{x:290}},{t:this.shape_50,p:{x:310}},{t:this.shape_49},{t:this.shape_65,p:{x:342.1,y:50.8}},{t:this.shape_47,p:{x:355.8}},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_73,p:{x:246.3,y:83.3}},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_74,p:{x:28.5,y:148.8}},{t:this.shape_36,p:{x:41.6,y:148.6}},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_68,p:{x:119.1,y:149.4}},{t:this.shape_105},{t:this.shape_104},{t:this.shape_48,p:{x:161.4,y:148.8}},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_61,p:{x:368.8,y:151.7}},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_121},{t:this.shape_82},{t:this.shape_81},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_83,p:{x:286.1,y:218.4}},{t:this.shape_116},{t:this.shape_115},{t:this.shape_128},{t:this.shape_55,p:{x:242.7,y:249}},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122}]},27).wait(57));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,447.5,130.7);


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
(lib.subject_scene1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene1:0,scene1repeat:182});

	// timeline functions:
	this.frame_0 = function() {
		this.btn_menu.addEventListener("click", openMenu.bind(this));
		this.btn_goNext.addEventListener("click", openNext.bind(this));
		
		function openMenu(){
		
		 window.open ("../menu/menu.html","_self");
		}
		
		function openNext(){
		
		 window.open ("subject_scene2.html","_self");
		}
		
		/*function openPrev(){
		
		 window.open ("puzzle_aux.html","_self");
		}*/
		playSound("AccousticGroove");
		playSound("AccousticGroove",-1);
	}
	this.frame_198 = function() {
		this.gotoAndPlay("scene1repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(198).call(this.frame_198).wait(1));

	// Nav
	this.btn_menu = new lib.skiptomenu();
	this.btn_menu.setTransform(514.1,20.3);
	new cjs.ButtonHelper(this.btn_menu, 0, 1, 2, false, new lib.skiptomenu(), 3);

	this.instance = new lib.Copyright("synched",0);
	this.instance.setTransform(275,393.5);

	this.btn_goNext = new lib.goNext();
	this.btn_goNext.setTransform(494,352.3);
	new cjs.ButtonHelper(this.btn_goNext, 0, 1, 2, false, new lib.goNext(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_goNext},{t:this.instance},{t:this.btn_menu}]}).wait(199));

	// Whole Scene 1
	this.instance_1 = new lib.Definition();
	this.instance_1.setTransform(271,201.3,1,1,0,0,0,223.7,131.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(199));

	// Bk
	this.instance_2 = new lib.Background("synched",0);
	this.instance_2.setTransform(275,195.5,1.069,1.05);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(199));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(290.2,201.8,531.1,401.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;