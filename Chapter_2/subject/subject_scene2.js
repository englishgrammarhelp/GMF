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
		{src:"sounds/ball_bounce.mp3", id:"ball_bounce"},
		{src:"sounds/buffy.mp3", id:"buffy"},
		{src:"sounds/cowbell_3times.mp3", id:"cowbell_3times"},
		{src:"sounds/diagnal_line.mp3", id:"diagnal_line"},
		{src:"sounds/High_Screaming_Gtr.mp3", id:"High_Screaming_Gtr"},
		{src:"sounds/organ_f_chord.mp3", id:"organ_f_chord"},
		{src:"sounds/rhodes_f9_chord.mp3", id:"rhodes_f9_chord"},
		{src:"sounds/right_answer.mp3", id:"right_answer"},
		{src:"sounds/thesubjectanswerswhoorwhatinfrontoftheveb2.mp3", id:"thesubjectanswerswhoorwhatinfrontoftheveb2"},
		{src:"sounds/whoorwhat2.mp3", id:"whoorwhat2"},
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



(lib.static_line = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#660099").ss(1,1,1).p("AM8AAI53AA");
	this.shape.setTransform(82.8,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,167.6,2);


(lib.static_bar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#660099").s().p("AgNAUIAAgnIAcAAIAAAng");
	this.shape.setTransform(0,0.1,1,0.637);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.2,3,2.6);


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


(lib.SentencesSUBJECT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgJAIQgEgDAAgFQAAgDAEgDQAFgFAEAAQAGABAEADQAEAEAAADQAAAFgEADQgFADgFABQgEgBgFgDg");
	this.shape.setTransform(145.6,21.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgHBEQgEgDAAgFIAAh3QAAgGAEgDQADgDAEAAQAFAAADADQADADAAAGIAAByQABARgMAAQgEAAgDgEg");
	this.shape_1.setTransform(139.2,15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgHBEQgEgDAAgFIAAh3QAAgGAEgDQADgDAEAAQAFAAADADQADADAAAGIAAByQABARgMAAQgEAAgDgEg");
	this.shape_2.setTransform(134.3,15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAVAoIgPAGQgGACgCAAQgVAAgLgLQgKgMAAgWQAAgUAPgOQAQgQAUAAQAIAAALAFQANAGAAAHQAAADgCADIgBAJIgBAMQAAAOADAIIAEAJIADAIQAAAFgDADQgEADgEAAQgEAAgJgIgAgLgRQgJAKAAALQAAALAEAGQAEAGAJAAQADAAAFgCQAFgCAEgDQgCgUAAgKIAAgGIABgIIgDgCIgCAAQgKAAgJAJg");
	this.shape_3.setTransform(126.9,17.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgZBCQgDADgFABQgFgBgDgDQgDgCAAgGIAAgGIAAgGIAAhiQAAgHADgEQAEgGAGAAQAJAAAAAKIAAADIAAAEIAAAiQAGgEAGgCQAGgBAEAAQAUgBANAPQAMANAAATQAAAVgOAOQgOAPgTAAQgMAAgLgFgAgJAAIgNAFIAAAmQAMAFAIAAQAKAAAHgIQAHgHAAgMQAAgLgGgHQgGgGgKAAQgDAAgGADg");
	this.shape_4.setTransform(116.5,15.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgcAlQgPgLgBgTQABgVALgQQAOgQATAAQAPAAALAEQANAHAAAOQAAAKgLAHQgFADgPAFIgbANQAEAFAGACQAGACAGAAQALAAAJgFQAHgEAEAAQAKAAgBAJQAAAKgOAHQgNAEgNAAQgTABgNgLgAgKgTQgHAFgDAKIAUgIIARgKQgGgDgKAAQgGAAgFAGg");
	this.shape_5.setTransform(98.2,17.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAUBAQgCgHgCgNIgBgVIAAgGIAAgHIAAgHQgBgDgEAAQgJAAgGAHQgEAEgHANQAAAggEAGQgDAHgHAAQgFAAgEgDQgEgDAAgFIABgFQABgCAAgVIAAg5IAAgDIABgOIgBgIIgBgIQAAgFAEgDQADgEAGAAQAIAAADAKQACAFAAALIgBASIAAARQAGgGAIgEQAFgDAIAAQAPAAAHAJQAFAGABALIABAWIACARIADARIAAADQAAAFgEAEQgDADgFAAQgJAAgDgJg");
	this.shape_6.setTransform(88.3,15.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgHA9QgDgDAAgFIAAgKIABgJIgDgsIgPgBQgMgBAAgKQAAgFAEgEQADgDAFAAIAPABIgBgJIAAgJQAAgFAEgDQADgEAGAAQALAAgBAWIAAAIIAJgBQALAAADABQAHADAAAIQAAAFgEADQgCADgGAAIgEAAIgFAAIgIABIABAsIAAAFIAAAFQAAAUgMAAQgDAAgEgDg");
	this.shape_7.setTransform(78.7,16);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgXAtQgOgFAAgJQAAgJALAAQAEAAAHADQAIACAEAAQAQAAAAgHQAAgEgMgGQgQgIgFgCQgNgIAAgNQAAgRATgGQALgEAUAAQAJAAAEACQAGADAAAJQAAAPgIAAQgJAAgCgHIgHAAQgTAAAAAFQAAAEAKAGQASAIAGADQANAIAAAMQAAAPgOAIQgMAGgOAAQgMAAgJgEg");
	this.shape_8.setTransform(62.1,17.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AADAcQgDgJgBgUIgDAEIgMAhQgCAEgDACQgEAGgGAAQgFABgEgIQgFgIgDgMQgDgLgGgiIgBgMQAAgFAEgDQADgEAFAAQAKAAACAKIACAMIABAMIAEAUIAPgqQAEgLAIAAQAJAAADAMIAFAYIAFAWIANgzQACgIAJAAQAFAAAEAEQAEADAAAFIgBACIgSA9QgDAIgGAIQgEAGgHAAQgLAAgGgVg");
	this.shape_9.setTransform(51.8,17.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgcAkQgMgLgBgVQgBgRAMgPQANgTAWABQARAAALANQAJANAAATQAAASgLAPQgMAPgTAAQgQAAgMgLgAgLgOQgGAJAAAJQAAAKAGAGQAFAEAGABQAGAAAGgGQAGgFABgLQABgagQgBQgJABgGAJg");
	this.shape_10.setTransform(40.8,17.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AghAtQgDgDAAgFIAAg4IAAgIIAAgIQAAgFADgDQADgDAGAAQAJAAACAKQAOgMATAAQARAAAAAXIAAAGQAAAOgMAAQgLAAAAgMIgBgIQgRADgJARIAAAqQAAAFgDADQgDAEgGAAQgFAAgDgEg");
	this.shape_11.setTransform(32,17.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAUBAQgCgHgCgNIgBgVIAAgGIAAgHIAAgHQgBgDgEAAQgJAAgGAHQgEAEgHANQAAAggEAGQgDAHgHAAQgFAAgEgDQgEgDAAgFIABgFQABgCAAgVIAAg5IAAgDIABgOIgBgIIgBgIQAAgFAEgDQADgEAGAAQAIAAADAKQACAFAAALIgBASIAAARQAGgGAIgEQAFgDAIAAQAPAAAHAJQAFAGABALIABAWIACARIADARIAAADQAAAFgEAEQgDADgFAAQgJAAgDgJg");
	this.shape_12.setTransform(22.5,15.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgGA9QgEgDAAgFIAAgKIABgJIgDgsIgPgBQgMgBAAgKQAAgFAEgEQADgDAFAAIAPABIgBgJIAAgJQABgFADgDQADgEAGAAQALAAgBAWIAAAIIAJgBQALAAADABQAHADAAAIQAAAFgDADQgDADgGAAIgFAAIgEAAIgIABIABAsIAAAFIAAAFQAAAUgMAAQgDAAgDgDg");
	this.shape_13.setTransform(12.9,16);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgZBDQgEgDAAgFQAAgIATgoIgfg2IgEgHQgCgEAAgEQAAgEAEgEQADgDAFAAQAGAAADAEQANAQAOAiIAMgZIAMgXQAEgHAGAAQAFAAAEAEQAEADAAAFIgBAFIgfA9IgQAmIgFAQQgDAJgIAAQgFAAgEgEg");
	this.shape_14.setTransform(-4.2,19.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgPBKQgEgEAAgEIABgDQABgMAAgLIAAgqIgGABIgEAAQgGAAgDgDQgEgDAAgGQAAgIAIgCIAQgCIABgKQACgTAJgKQAIgMAVAAQAQAAAAAMQAAALgPAAQgLAAgEAIQgEAFgBAMIAAACIARgBQAQAAAAAMQAAALgRAAIgRABIAAAVIAAAYQAAAQgCAJQgCAKgIAAQgEAAgEgDg");
	this.shape_15.setTransform(-13.8,15.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgPBKQgEgEAAgEIAAgDQACgMAAgLIAAgqIgFABIgGAAQgFAAgEgDQgDgDAAgGQAAgIAJgCIAPgCIABgKQADgTAIgKQAIgMAVAAQAQAAAAAMQAAALgPAAQgKAAgFAIQgEAFgBAMIgBACIARgBQARAAAAAMQAAALgRAAIgSABIAAAVIABAYQAAAQgCAJQgCAKgHAAQgGAAgDgDg");
	this.shape_16.setTransform(-23,15.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AARArQgLAEgKAAQgNAAgIgFQgKgGgCgMQgDgVAAgQQAAgLADgPQABgKAKAAQAGABADADQAEACAAAGIgCALIgBANIABAUQABAJACAGIAEACIAEAAQAIAAALgDIAAgPIAAgNQAAgSACgNQABgLALAAQAFABADADQAEADAAAFIgCAeIAAAQIAAASIABAGIAAAFQAAAFgEADQgDADgFABQgIAAgDgHg");
	this.shape_17.setTransform(-32.2,17.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgqBDQgEgFAAgFIAAhbIgBgMQAAgHABgEQABgJAOgBQAHgCAPgBQAPAAAPALQASANAAASQAAAKgEAHQgDAGgHAFQAIAEAHAIQAIAJAAAKQAAALgNAKQgJAIgJADQgTAHgfAAQgFAAgEgDgAgXAvQAQgBAPgFQAQgFAAgEQgBgIgJgEQgIgFgGgBIgXAAgAgXguIABATIgBASIANABQAYgCAAgSQAAgGgIgFQgGgHgJAAIgOAAg");
	this.shape_18.setTransform(-42.1,15.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0066FF").s().p("AARArQgLAEgKAAQgNAAgIgFQgKgGgCgMQgDgVAAgQQAAgLADgPQABgKAKAAQAGABADADQAEACAAAGIgCALIgBANIABAUQABAJACAGIAEACIAEAAQAIAAALgDIAAgPIAAgNQAAgSACgNQABgLALAAQAFABADADQAEADAAAFIgCAeIAAAQIAAASIABAGIAAAFQAAAFgEADQgDADgFABQgIAAgDgHg");
	this.shape_19.setTransform(-32.2,17.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0066FF").s().p("AgqBDQgEgFAAgFIAAhbIgBgMQAAgHABgEQABgJAOgBQAHgCAPgBQAPAAAPALQASANAAASQAAAKgEAHQgDAGgHAFQAIAEAHAIQAIAJAAAKQAAALgNAKQgJAIgJADQgTAHgfAAQgFAAgEgDgAgXAvQAQgBAPgFQAQgFAAgEQgBgIgJgEQgIgFgGgBIgXAAgAgXguIABATIgBASIANABQAYgCAAgSQAAgGgIgFQgGgHgJAAIgOAAg");
	this.shape_20.setTransform(-42.1,15.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0066FF").s().p("AgPBKQgEgEAAgEIAAgDQACgMAAgLIAAgqIgFABIgGAAQgFAAgEgDQgDgDAAgGQAAgIAJgCIAPgCIABgKQADgTAIgKQAIgMAVAAQAQAAAAAMQAAALgPAAQgKAAgFAIQgEAFgBAMIgBACIARgBQARAAAAAMQAAALgRAAIgSABIAAAVIABAYQAAAQgCAJQgCAKgHAAQgGAAgDgDg");
	this.shape_21.setTransform(-23,15.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0066FF").s().p("AgPBKQgEgEAAgEIABgDQABgMAAgLIAAgqIgGABIgEAAQgGAAgDgDQgEgDAAgGQAAgIAIgCIAQgCIABgKQACgTAJgKQAIgMAVAAQAQAAAAAMQAAALgPAAQgLAAgEAIQgEAFgBAMIAAACIARgBQAQAAAAAMQAAALgRAAIgRABIAAAVIAAAYQAAAQgCAJQgCAKgIAAQgEAAgEgDg");
	this.shape_22.setTransform(-13.8,15.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0066FF").s().p("AgZBDQgEgDAAgFQAAgIATgoIgfg2IgEgHQgCgEAAgEQAAgEAEgEQADgDAFAAQAGAAADAEQANAQAOAiIAMgZIAMgXQAEgHAGAAQAFAAAEAEQAEADAAAFIgBAFIgfA9IgQAmIgFAQQgDAJgIAAQgFAAgEgEg");
	this.shape_23.setTransform(-4.2,19.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_21},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_21},{t:this.shape_22},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_21},{t:this.shape_22},{t:this.shape_23},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.2,0,201.9,29.1);


(lib.header = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHAGQgDgDAAgDQAAgCADgDQAEgDADAAQAEAAADADQAEADAAACQAAADgEADQgDADgEAAQgDAAgEgDg");
	this.shape.setTransform(-20.3,47.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AggA0QgEgEABgEIAAhHIgBgIIABgKQAAgGALgCQAFgBANAAQAKAAANAJQANAJAAAPQAAAHgDAGQgBAFgHADQAIACAEAHQAGAHAAAIQAAAIgKAJQgHAFgHADQgOAGgYAAQgEAAgDgDgAgRAkQAMAAAMgEQAMgEgBgEQAAgFgHgEQgGgDgFgBIgRgBgAgRgjIAAAPIAAANIAKABQASgBAAgOQAAgFgFgEQgGgGgGABIgLAAg");
	this.shape_1.setTransform(-27.5,42.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgkAyQgCgCgBgEIAAgPIAAgQIAAg1QAAgEADgEQAEgFAGABIARABQAJABAFAEQAdAOAAAWQAAAJgFAFQgHAHgMAEQASALAKAKQACADAAADQgBAEgCADQgDADgEAAQgDAAgEgDQgVgUgXgHIABAWQAAAEgCACQgDADgEAAQgEAAgDgDgAgUABIADAAQARAAAGgCIAHgEQACgDAAgCQABgIgLgHQgHgGgKgBIgIgBg");
	this.shape_2.setTransform(-36.5,42.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgeA0QgIgHAAgWIACgaIABgbIgBgHIgBgHQAAgLAKAAQADAAADACIAPgDIALgBQARAAALAEQAGACAAAHQAAADgCADQgDADgEAAIgDAAQgLgDgLAAIgJABIgMACIgBAbIAZgDIAQgBQAEAAADADQADACAAAFQAAAGgJABIgQABIgbADIgBAOQAAANACACIAJABIAKAAIANAAIAEgBIAEAAQAEAAADACQADACAAAFQAAAIgIABQgHACgTAAQgXAAgGgGg");
	this.shape_3.setTransform(-45.3,42.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgOAwQgIgUgKgjIgFgTQgFgNAAgFQAAgEADgCQADgDAEAAQAGAAADAHIADAMIAGAWIALAhIAOgoIAGgQQAEgKAFgFQADgEAEAAQADAAADADQAEADAAAEIgCAFQgEAFgDAIIgFANIgTAuQgDAIgEAIQgDAGgEAAQgHAAgDgHg");
	this.shape_4.setTransform(-54.5,42.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgWAdQgMgJAAgPQAAgPAKgMQAKgOAPAAQAMAAAIAEQAKAFAAALQAAAHgIAGIgQAGIgUAKQACAEAGACQAEABAEAAQAJAAAGgDQAGgEADAAQAIAAgBAHQAAAIgLAFQgJAEgLAAQgOAAgLgIgAgIgPQgFAEgCAJIAPgHQAIgEAFgEQgEgCgIAAQgEAAgFAEg");
	this.shape_5.setTransform(-69.4,44.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAQAyQgCgGgBgKIgCgQIAAgFIABgFIgBgGQAAgCgDAAQgIAAgEAFIgIANQAAAZgDAFQgCAGgGAAQgEAAgDgDQgDgCAAgEIABgEIABgSIAAgsIAAgCIAAgLIAAgGIgBgGQAAgEADgDQACgCAEAAQAHAAADAHIABANIgBANIAAAOQAFgFAGgDQADgCAHAAQAMAAAFAGQAEAFAAAJIABAQIACAOIACANIAAADQAAADgDADQgDACgEAAQgGAAgCgGg");
	this.shape_6.setTransform(-77.2,42.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgEAvQgDgCgBgEIAAgIIABgHIgCgiIgMgBQgJAAAAgJQAAgDADgDQADgCADgBIAMABIAAgHIgBgGQAAgFAEgCQACgDAEABQAIgBAAASIAAAFIAHgBQAIAAACABQAGACAAAHQAAAEgCACQgDADgEAAIgDAAIgEAAIgHAAIACAiIAAAEIAAADQAAAQgKABQgCgBgCgCg");
	this.shape_7.setTransform(-84.6,43.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgMA5QgDgCAAgEIABgCIABgSIAAggIgEAAIgEABQgEAAgDgDQgDgCAAgEQAAgHAHgCIAMgBIABgIQACgPAGgHQAGgKAQAAQANAAAAAJQAAAJgMAAQgIAAgEAGQgDAEgBAKIAAACIANgBQANAAAAAIQAAAJgOAAIgNABIAAAQIABATQAAAMgCAHQgCAIgFAAQgEAAgDgDg");
	this.shape_8.setTransform(-97.6,42.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgVAdQgKgKAAgQQgBgNAJgMQAKgOARAAQAOAAAIALQAHAKAAAOQAAAPgJAKQgJANgPAAQgMAAgJgIgAgIgKQgEAGAAAHQAAAIAEAEQAEAEAEAAQAFAAAEgEQAFgEABgJQAAgUgMAAQgGAAgFAIg");
	this.shape_9.setTransform(-104.9,44.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgFAvQgDgCAAgEIAAgIIABgHIgCgiIgMgBQgJAAAAgJQAAgDADgDQADgCAEgBIALABIAAgHIAAgGQAAgFACgCQADgDAEABQAIgBAAASIAAAFIAHgBQAIAAACABQAGACAAAHQAAAEgDACQgCADgEAAIgEAAIgDAAIgHAAIABAiIABAEIAAADQAAAQgKABQgCgBgDgCg");
	this.shape_10.setTransform(-117.8,43.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AANAfIgBgOIgBgOIAAgFIAAgGIAAgCIABgDQAAgGgEAAQgGAAgDAIQgGAHgDAKIgBAGIAAAGIAAAGIgBAGQAAAEgCADQgDACgEAAQgEAAgDgCQgDgDABgEIgBgGIAAgGIABgSIAAgRIAAgGIAAgGQAAgEADgDQADgCADAAQAKAAAAAKIAAABQALgKAIAAQAOAAAEALQADAHABAPIAAAEIAAADIABAOIABANQAAAEgCADQgDACgEAAQgJAAgBgIg");
	this.shape_11.setTransform(-124.7,44.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgVAdQgKgKAAgQQgBgNAJgMQAKgOARAAQAOAAAIALQAHAKAAAOQAAAPgJAKQgJANgPAAQgMAAgJgIgAgIgKQgEAGAAAHQAAAIAEAEQAEAEAEAAQAFAAAEgEQAFgEABgJQAAgUgMAAQgGAAgFAIg");
	this.shape_12.setTransform(-132.2,44.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgaAjQgCgCAAgEIAAgrIABgGIAAgHQgBgDADgDQACgDAFAAQAHAAACAIQAKgJAOAAQAOAAAAASIAAAFQgBAKgJAAQgIAAgBgIIAAgHQgNACgGANIAAAhQAAAEgEACQgCADgEAAQgEAAgDgDg");
	this.shape_13.setTransform(-139,44.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgMA5QgDgCAAgEIABgCIABgSIAAggIgEAAIgEABQgEAAgDgDQgDgCAAgEQAAgHAHgCIAMgBIABgIQACgPAGgHQAGgKAQAAQANAAAAAJQAAAJgMAAQgIAAgEAGQgDAEgBAKIAAACIANgBQANAAAAAIQAAAJgOAAIgNABIAAAQIABATQAAAMgCAHQgCAIgFAAQgEAAgDgDg");
	this.shape_14.setTransform(-146.2,42.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAOAfIgDgOIgBgOIABgFIAAgGIAAgCIAAgDQAAgGgDAAQgFAAgEAIQgFAHgDAKIgBAGIAAAGIgBAGIAAAGQgBAEgDADQgCACgEAAQgEAAgDgCQgDgDAAgEIAAgGIgBgGIABgSIACgRIAAgGIgBgGQAAgEADgDQADgCAEAAQAIAAABAKIABABQAJgKAJAAQAOAAAEALQAEAHgBAPIAAAEIAAADIACAOIACANQAAAEgEADQgCACgEAAQgJAAAAgIg");
	this.shape_15.setTransform(-159.3,44.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgHAxQgDgCAAgEIAAgNIAAgMIAAgQIABgNQAAgEACgCQADgDAEAAQADAAACADQACACABAEIgBANIAAAQIAAAMIAAANQAAAEgDACQgCADgCAAQgFAAgCgDgAgFghQgDgDAAgFQAAgEADgDQADgDACAAQAFAAADADQAEADgBAEQABAFgEADQgDADgFAAQgCAAgDgDg");
	this.shape_16.setTransform(-164.8,42.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgSA0QgEgDAAgEQAAgEADgFQADgEAGAAQAEAAACADQADADAAAEQAAAEgDAEQgCAFgGgBQgEAAgCgCgAgPAXQgCgDAAgEQgBgFAKgHIAOgJQAIgHABgGQAAgGgHgFQgGgGgGAAQgDAAgHAEQgGAFgDgBQgDAAgEgCQgDgEAAgEQABgGALgGQALgEAGgBQANABAMAKQANALAAAOQAAAOgPAKIgLAHQgHAFgBAEQgEAEgDgBQgEABgEgDg");
	this.shape_17.setTransform(-176.9,42.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgFAxQgDgCAAgEIAAgDIABgDIgBgKIAAgJIgCgXIgCgZIgDAAQgQAAgIgCQgIgCAAgHQAAgEACgCQADgEAFABIALABIALABIAMgBIALAAIAPABIAQABQAEAAADACQACADAAAEQAAAEgCADQgDACgEAAIgRAAIgQgBIABAcIACAZIAAAHIABAHQAAAFgCAFQgDAFgFAAQgCAAgDgDg");
	this.shape_18.setTransform(-185.7,42.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAYAmQgEgHgCgMIgRACIgPACIgLAXQgCAEgGABQgEAAgDgDQgDgCAAgEQAAgEAKgUIgBgEQABgDAGgCIAVghQAPgaAEAAQAIAAADAJIAEAWIAKArIAEAJQACAGAAADQAAAEgDACQgDADgDAAQgGAAgFgNgAgEAGIAIgBIAJgBIgEgVIgNAXg");
	this.shape_19.setTransform(-195.8,42.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAdAzQgDgCAAgEIgBgPIAAgPIAAgGIgZACIgaAGIgBAOIAAAPQAAADgDACQgDADgEAAQgEAAgCgDQgDgCAAgDIABgVIABgUIABgYIAAgZQAAgEADgCQACgDAEAAQAEAAADADQADACAAAEIgBAPIAAAQIgBAHIAAAGIAagFIAZgCIABgZQAAgGADgHQAEgIAFAAQADAAADACQADADAAAEIAAACIgCAJIAAAFIAAAGIgBATIgBASIABAPIABAPQAAAEgDACQgCADgEAAQgEAAgDgDg");
	this.shape_20.setTransform(-206.1,42.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AANA1QgDgCAAgEIgFgOIgGgqQgEAMgGALQgHARgDAJIABADQAAAEgEADQgDACgEAAQgFAAgDgCQgDgDgBgFIgCgIIgHgfQgFgPgLgdIAAgEQAAgEADgCQADgDAEAAQAFAAADAFIAEAIQAGAUAJAiIALgdIAHgVQAHgPAGAAQAGAAAEAHIACANIACAOQABAMAIAcIATguIAEgNQACgHADgFQADgFAFAAQAFAAACADQADACAAAEIgCAIIgDAHIgDALIgNAbIgMAeIgGAMQgDAFgHAAQgDAAgEgCg");
	this.shape_21.setTransform(-218.9,42.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgaAjQgCgCAAgEIAAgrIAAgGIAAgHQABgDACgDQACgDAEAAQAIAAABAIQAKgJAPAAQAOAAAAASIAAAFQgBAKgIAAQgJAAAAgIIAAgHQgOACgHANIAAAhQAAAEgCACQgDADgEAAQgFAAgCgDg");
	this.shape_22.setTransform(-2.8,22.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgVAcQgKgJAAgQQgBgNAJgMQAKgOARAAQAOAAAIALQAHAKAAAPQAAANgJALQgJANgPAAQgMAAgJgJgAgIgKQgEAGAAAHQAAAIAEAEQAEAEAEAAQAFAAAEgEQAFgEABgJQAAgUgMAAQgGAAgFAIg");
	this.shape_23.setTransform(-10.1,22.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgTA0QgDgDAAgEQAAgFACgEQAEgEAFgBQAFAAACAEQADADAAAEQAAAEgDAEQgCAEgGAAQgDAAgEgCgAgOAXQgDgDAAgDQAAgGAJgHIANgKQAJgGAAgFQABgHgHgGQgGgFgGAAQgDAAgHAEQgGAEgDABQgEAAgDgEQgCgDAAgDQgBgHAMgGQALgFAGABQANgBAMALQAMALAAAPQAAAOgNAJIgMAHQgHAFgCAEQgDADgDABQgFgBgCgCg");
	this.shape_24.setTransform(-23.7,21.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgjAqQgPgNAAgTQAAgWAOgTQARgVAXAAQAXAAAMALQAMALAAAWQAAAVgNATQgQAVgXAAQgUAAgOgLgAgVgTQgKAOAAAPQAAALAJAHQAJAHAMAAQAOAAAKgPQAJgNAAgPQAAgPgHgFQgGgGgPAAQgOAAgLAPg");
	this.shape_25.setTransform(-33.3,21.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAdA0QgDgDAAgEIgBgPIAAgPIAAgHIgZAEIgaAEIgBAPIAAAOQAAAEgDADQgDACgEAAQgEAAgCgCQgDgDAAgEIABgUIABgUIABgYIAAgaQAAgDADgDQACgCAEAAQAEAAADACQADADAAADIgBARIAAAPIgBAGIAAAHIAagEIAZgEIABgZQAAgFADgHQAEgIAFAAQADAAADACQADADAAADIAAADIgCAIIAAAHIAAAGIgBATIgBARIABAPIABAPQAAAEgDADQgCACgEAAQgEAAgDgCg");
	this.shape_26.setTransform(-44.1,20.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAOA1QgEgCgBgFIgEgMIgGgqQgFAMgFALQgHAPgCAKIAAAEQAAADgDADQgEACgEABQgFgBgDgCQgDgDgBgEIgCgIIgIghQgEgOgKgeIgBgDQAAgEADgDQADgCAEAAQAFAAADAEIAEAJQAHATAIAkQAGgOAFgQIAIgVQAGgPAGAAQAHAAACAIIAEAMIABAOQACALAHAeIATgwIAEgMQACgHADgFQADgEAFAAQAFgBADADQACADAAAEIgCAHIgDAGIgEANIgMAaIgNAeIgFAMQgDAFgGAAQgFAAgCgCg");
	this.shape_27.setTransform(-56.8,21.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgSAjQgKgDAAgIQAAgHAIAAIAJACQAGACADAAQAMAAAAgFQAAgEgKgEIgQgIQgJgGAAgKQAAgOAOgEQAJgDAPAAQAHAAADACQAFACAAAGQAAANgHAAQgGAAgCgFIgFgBQgPAAAAAEQAAADAIAFQAOAFAEADQAKAGAAAKQAAALgLAGQgIAFgLAAQgJAAgIgDg");
	this.shape_28.setTransform(-73.7,22.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgaAjQgCgCAAgEIAAgrIAAgGIAAgHQABgDACgDQACgDAEAAQAIAAABAIQAKgJAPAAQAOAAAAASIAAAFQgBAKgIAAQgJAAAAgIIAAgHQgOACgHANIAAAhQAAAEgCACQgDADgEAAQgFAAgCgDg");
	this.shape_29.setTransform(-80.2,22.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgWAdQgMgJABgPQgBgPAKgMQAKgOAPAAQAMAAAIAEQAKAFAAALQAAAHgIAGIgQAGIgUAKQACAEAGACQAEABAEAAQAJAAAHgDQAFgEAEAAQAGAAAAAHQAAAIgLAFQgKAEgKAAQgPAAgKgIgAgIgPQgEAEgDAJIAPgHQAIgEAFgEQgEgCgIAAQgEAAgFAEg");
	this.shape_30.setTransform(-87.8,22.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AACAVIgDgVIgBACIgKAaIgDAFQgDAEgGAAQgDABgEgGQgDgGgDgKIgHgjIgBgJQAAgEAEgCQACgDAEAAQAHAAACAHIACAKIABAJIACAQIAMghQADgJAGAAQAHAAADAKIADASIADASIAMgoQABgGAHAAQAEAAADADQADACAAAEIAAACIgPAvQgCAGgFAGQgDAFgGAAQgIAAgFgRg");
	this.shape_31.setTransform(-96.3,22.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgSAjQgKgDAAgIQAAgHAIAAIAJACQAGACADAAQAMAAAAgFQAAgEgKgEIgQgIQgJgGAAgKQAAgOAOgEQAJgDAPAAQAHAAADACQAFACAAAGQAAANgHAAQgGAAgCgFIgFgBQgPAAAAAEQAAADAIAFQAOAFAEADQAKAGAAAKQAAALgLAGQgIAFgLAAQgJAAgIgDg");
	this.shape_32.setTransform(-104.7,22.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAOAfIgDgOIgBgOIABgFIAAgGIAAgCIAAgDQAAgGgDAAQgFAAgEAIQgFAHgDAKIgBAGIAAAGIgBAGIAAAGQgBAEgDADQgCACgEAAQgEAAgDgCQgDgDAAgEIAAgGIgBgGIABgSIACgRIAAgGIgBgGQAAgEADgDQADgCAEAAQAIAAABAKIABABQAJgKAJAAQAOAAAEALQAEAHgBAPIAAAEIAAADIACAOIACANQAAAEgEADQgCACgEAAQgJAAAAgIg");
	this.shape_33.setTransform(-111.6,22.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAQAfIgLAFIgGABQgQAAgJgJQgIgJAAgRQAAgPAMgLQAMgMAPAAQAHAAAIAEQAKAEAAAGQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABIgBAHIAAAJQAAALACAGIACAHIADAHQAAADgDADQgDACgDAAQgDAAgHgGgAgJgMQgGAHAAAHQAAAKADAEQADAFAHAAIAGgCIAHgEIgCgWIABgFIAAgGIgCgBIgCgBQgHAAgIAIg");
	this.shape_34.setTransform(-119.2,22.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0000FF").s().p("AgFAxQgDgCAAgEIAAgDIABgDIgBgKIAAgJIgCgXIgCgZIgDAAQgQAAgIgCQgIgCAAgHQAAgEACgCQADgEAFABIALABIALABIAMgBIALAAIAPABIAQABQAEAAADACQACADAAAEQAAAEgCADQgDACgEAAIgRAAIgQgBIABAcIACAZIAAAHIABAHQAAAFgCAFQgDAFgFAAQgCAAgDgDg");
	this.shape_35.setTransform(-134,20.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#0000FF").s().p("AgdApQgKgLAAgOQAAgVAUgYQARgUAPAAIAGAAIAEABQADgDAEAAQAHAAACAIIABANQAAADgCADQgCAEgFAAQgGAAgDgHQgBgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAAAIgGgBQgIAAgJAOQgQARAAAQQAAAHAFAGQAFAFAHAAQAFAAAHgEIAKgGQAFgEADAAQAEAAADADQADADAAADQAAAFgEADQgTAPgRAAQgQAAgKgLg");
	this.shape_36.setTransform(-143.2,20.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#0000FF").s().p("AgeA0QgIgHAAgWIACgaIABgbIgBgHIgBgHQAAgLAKAAQADAAADACIAPgDIALgBQARAAALAEQAGACAAAHQAAADgCADQgDADgEAAIgDAAQgLgDgLAAIgJABIgMACIgBAbIAZgDIAQgBQAEAAADADQADACAAAFQAAAGgJABIgQABIgbADIgBAOQAAANACACIAJABIAKAAIANAAIAEgBIAEAAQAEAAADACQADACAAAFQAAAIgIABQgHACgTAAQgXAAgGgGg");
	this.shape_37.setTransform(-151.8,20.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#0000FF").s().p("AgcAvQgPgKAAgNQABgLAJAAQAKAAAAALQAAAEAHAEQAHAFAGAAQACAAABgJIAAgVIABglIAAgFIgBAAIgHAAIgIAAQgEAAgCgCQgEgDAAgEQAAgKANAAIAGABIAGAAIAMgBIANAAQASAAAAAKQABADgDADQgDADgEAAIgEAAIgFAAIgEAAIgBAFQAAAvgGAWQgGAQgLAAQgNAAgMgIg");
	this.shape_38.setTransform(-160.9,21.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#0000FF").s().p("AggAzQgEgDABgEIAAhGIgBgJIABgJQAAgHALgBQAGgCAMAAQAKAAANAIQAOAKgBAOQAAAJgCAFQgDAEgGAEQAIADAEAGQAGAIAAAGQAAAKgJAHQgIAGgHADQgOAGgYAAQgEAAgDgEgAgRAkQAMAAAMgFQALgDABgEQgBgFgHgEQgGgDgFgBIgRAAgAgRgjIAAAOIAAAPIAKAAQASgCAAgOQABgEgHgFQgFgEgGAAIgLAAg");
	this.shape_39.setTransform(-169.8,20.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#0000FF").s().p("AgaAuQgSgOAAggIAAgKIABgKIAAgIIAAgHQAAgGACgFQADgGAEAAQAEAAADACQADADAAAEIAAAMIAAALIgBAKIAAAKQAAAIACAJQADALAGAEQADACALAAQAPAAAHgfQADgOABgdQAAgEABgDQAEgFAFAAQAFAAACAEQACACAAADQAAAbgCAPQgFAWgLAPQgEAHgHAEQgKAGgGAAQgSAAgIgHg");
	this.shape_40.setTransform(-179.6,21.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#0000FF").s().p("AgkAsQgIgGAAgJQAAgEADgDQACgDAFAAQAGAAADAHQAEAIANAAQAKAAALgFQAMgFAAgHQAAgIgHgDQgGgCgNAAQgMgBgJgDQgNgEABgLQAAgNAOgLQAOgMAPAAQAGAAAKAEQAMADAAAFQAAAEgCADQgDADgEAAIgKgCIgJgBQgJAAgGAEQgIAEAAAFQAAADACACIAIACIAPABQAPABAJAIQAKAGAAAOQAAASgUAJQgQAHgRAAQgSAAgKgIg");
	this.shape_41.setTransform(-189.6,21.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgWAdQgMgJAAgPQAAgPAKgMQAKgOAPAAQAMAAAIAEQAKAFAAALQAAAHgIAGIgQAGIgUAKQADAEAEACQAFABAEAAQAJAAAGgDQAGgEADAAQAIAAgBAHQAAAIgLAFQgJAEgLAAQgOAAgLgIgAgIgPQgFAEgCAJIAPgHQAIgEAFgEQgFgCgHAAQgFAAgEAEg");
	this.shape_42.setTransform(-204.5,22.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAQAyQgCgGgBgKIgCgQIAAgFIABgFIgBgGQAAgCgDAAQgIAAgEAFIgIANQAAAZgDAFQgCAGgGAAQgEAAgDgDQgDgCAAgEIABgEIABgSIAAgsIAAgCIAAgLIAAgGIgBgGQAAgEADgDQACgCAEAAQAHAAADAHIABANIgBANIAAAOQAFgFAGgDQADgCAHAAQAMAAAFAGQAEAFAAAJIABAQIACAOIACANIAAADQAAADgDADQgDACgEAAQgGAAgCgGg");
	this.shape_43.setTransform(-212.3,20.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgFAxQgDgCAAgEIAAgDIABgDIgBgKIAAgJIgCgXIgCgZIgDAAQgQAAgIgCQgIgCAAgHQAAgEACgCQADgEAFABIALABIALABIAMgBIALAAIAPABIAQABQAEAAADACQACADAAAEQAAAEgCADQgDACgEAAIgRAAIgQgBIABAcIACAZIAAAHIABAHQAAAFgCAFQgDAFgFAAQgCAAgDgDg");
	this.shape_44.setTransform(-221.3,20.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-228.2,8.6,236.9,45.1);


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


(lib.Wordswho = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,flash:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.gotoAndPlay("flash");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("AgIBHQgFgEAAgGIABgEIAAgEIAAgOIgBgOQAAgNgCgUIgDgjIgFAAQgWAAgMgEQgLgCAAgKQAAgFADgEQAEgFAHAAIAQACIAPABIASAAIAQAAIAWABIAWABQAGAAAEAEQAEADAAAGQAAAFgEAEQgEAEgGAAIgXgBIgYgBIACAoQADAXAAAPIAAAJIABAKQAAAIgDAGQgEAHgHAAQgEAAgEgDg");
	this.shape.setTransform(91.5,16.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("AgqA7QgPgQAAgUQAAgfAdgjQAYgcAXAAIAIAAIAGABQAFgEAGAAQAKAAACALQACAIAAALQAAAFgDAEQgEAGgHAAQgJAAgEgKQgCgEgCgBIgIgBQgMABgOASQgXAaAAAXQAAAKAIAIQAHAIAKAAQAHgBAKgFIAPgJQAIgFAEgBQAGAAAEAFQADAEAAAFQAAAGgFAEQgaAXgaAAQgWAAgPgQg");
	this.shape_1.setTransform(78.4,16.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066FF").s().p("AgsBKQgLgJAAggIACglIACgnIgBgLIgBgKQAAgOANAAQAFAAADACIAWgFIASgBQAYAAAPAGQAJAEAAAIQAAAGgDADQgEAFgGAAIgFgBQgPgEgPAAIgPABIgRAEIgBAmIAkgDIAYgDQAGABAEAEQADADAAAGQAAAJgMACIgXACIgoAEIAAAUQgBATADADQABABALAAIAQAAIASAAIAGgBIAGAAQAFAAAFADQAEADAAAGQAAAMgLACQgKABgcABQghAAgJgJg");
	this.shape_2.setTransform(66.2,16.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0066FF").s().p("AgpBDQgUgOAAgTQAAgPAOAAQAOAAgBAPQAAAGAKAGQAKAHAJAAQADAAACgNIAAgeQACgVgBghIAAgGIgBAAIgKAAIgMgBQgGAAgEgDQgEgEAAgGQAAgNASAAIAJAAIAJAAIARgBIATAAQAaAAAAAOQAAAFgDAEQgFAFgGAAIgFAAIgHgBIgHAAIAAAHQAABEgKAgQgHAXgRAAQgTAAgRgMg");
	this.shape_3.setTransform(53.1,17.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0066FF").s().p("AgvBKQgFgFAAgFIAAhmIAAgNIAAgNQACgKAQgBQAHgCARAAQARAAAQALQAUAPAAAUQAAAMgEAHQgDAHgIAFQAJAEAIAJQAIALAAAKQAAANgOALQgKAJgKADQgVAIgiAAQgGABgFgFgAgZA0QARgBARgFQASgGgBgFQAAgIgLgFQgIgFgHgBIgZgBgAgZgeIAAAUIANABQAcgCAAgUQAAgHgJgGQgHgHgKAAIgPAAg");
	this.shape_4.setTransform(40.4,16.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0066FF").s().p("AgmBCQgagUAAgvIABgOIAAgOIABgLIAAgLQAAgIADgHQADgJAHAAQAGAAAEADQAEAFAAAFIAAAQIAAARIgBAOIAAAOQAAAMADANQAFAPAHAHQAFADAPAAQAYABAJgtQAEgVAAgpQAAgGAEgFQAEgGAIgBQAHABADAEQADAEAAAEQAAAngEAVQgFAggRAVQgHALgKAFQgMAJgLAAQgZgBgMgJg");
	this.shape_5.setTransform(26.2,17.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0066FF").s().p("Ag0A/QgLgJAAgMQAAgGADgEQAEgEAGAAQAJAAAFAJQAFAMATAAQAQAAAPgIQAQgHABgJQAAgMgKgEQgIgDgTgBQgSAAgNgFQgSgHAAgPQABgTATgQQAVgQAWAAQAKAAANAEQASAGAAAHQAAAFgDAEQgFAEgGAAIgNgCIgOgCQgNABgJAGQgMAGAAAHQAAADAEADQAEACAGABIAYACQAVABANALQAOAJgBAVQABAZgdANQgWAKgaAAQgZAAgPgLg");
	this.shape_6.setTransform(12.1,17.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.1,0,97.4,31.9);


(lib.Wordsverb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,"flash":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.gotoAndPlay("flash");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgbBKQgFgDAAgGQAAgHADgFQAFgIAJABQAGAAAEAEQACAFAAAGQAAAFgCAGQgFAGgHAAQgFAAgFgEgAgWAhQgDgEAAgGQAAgHAMgKIAVgOQAMgKAAgHQABgKgKgHQgJgJgHAAQgGAAgJAHQgJAFgEAAQgGABgEgFQgEgEAAgFQAAgKARgIQAOgHALAAQATAAAQAQQASAPAAAVQAAATgUAOIgRALIgNAMQgEAGgGAAQgFAAgFgEg");
	this.shape.setTransform(73.6,16.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgbAyQgOgFAAgLQAAgKALABQAFAAAIADQAJACAFAAQASAAgBgIQAAgFgNgGIgYgLQgOgJAAgOQAAgUAVgHQANgDAXAAQAJAAAEACQAHAEAAAIQAAASgJAAQgKAAgCgIIgIgBQgWAAAAAGQABAEAMAHQATAJAHAEQAOAJAAANQAAAQgQAJQgMAIgRAAQgNAAgLgFg");
	this.shape_1.setTransform(63,19.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AggAqQgRgNAAgWQABgXANgRQAOgTAWAAQARAAAMAGQAPAHAAAPQgBALgMAIIgWAJIgfAPQAGAFAGACQAHADAGAAQANAAAKgFQAHgFAFAAQAKAAAAAKQAAALgQAHQgOAGgPAAQgVAAgPgLgAgMgWQgHAGgEAMIAXgJQALgGAIgFQgHgEgLAAQgHAAgGAGg");
	this.shape_2.setTransform(52.5,19.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgfApQgOgOgBgXQAAgTAMgRQAPgUAZAAQATAAAMAQQAKAOAAAUQAAAVgMAQQgOASgVAAQgSAAgNgMgAgNgPQgFAJAAAKQAAAMAGAGQAFAFAHAAQAHAAAGgFQAHgHABgMQABgdgSAAQgKAAgHALg");
	this.shape_3.setTransform(41.7,19.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgeBOQgLgCgGgEQgGAAgEgEQgEgEAAgGIABgdIABgdIAAgfIgBggQAAgGAFgFQAGgFAFAAQAEAAANAGQAPAHADABQAaAJAUAUQAZAXAAAaQAAARgJAPQgIAPgPAKQgQAKgbAAQgHAAgKgCgAghAxQAEADAFABQAFABAGAAQATAAAJgGQAJgFAFgKQAFgJAAgLQAAgWgcgSQgIgGgfgMg");
	this.shape_4.setTransform(29.7,16.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(20.1,0,61.3,31.9);


(lib.Wordscomplement = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,"flash":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.gotoAndPlay("flash");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AgcBKQgEgDAAgGQAAgHADgFQAGgIAIABQAGAAAEAEQACAFAAAGQAAAFgCAGQgFAGgHAAQgFAAgGgEgAgWAhQgDgEAAgGQAAgHAMgKIAVgOQAMgKAAgHQABgKgKgHQgIgJgIAAQgGAAgJAHQgJAFgEAAQgGABgEgFQgEgEAAgFQAAgKARgIQAOgHALAAQASAAARAQQASAPAAAVQAAATgUAOIgRALIgNAMQgEAGgGAAQgGAAgEgEg");
	this.shape.setTransform(77.1,16.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009900").s().p("AgIBEQgEgEAAgFIABgLIAAgLIgCgwIgSgCQgMgBgBgMQABgFADgEQAEgDAGAAIARABIgBgKIgBgKQABgFAEgFQADgDAGAAQANAAAAAZIAAAIIAJgBQAMAAADABQAJACgBAKQAAAFgDAEQgEAEgGAAIgFAAIgFgBIgJACIACAxIAAAFIAAAFQAAAXgOAAQgDAAgFgDg");
	this.shape_1.setTransform(66.8,17.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009900").s().p("AAXAsQgJAFgHACQgGACgEAAQgXAAgLgMQgMgNgBgZQAAgWASgQQARgRAXAAQAIAAANAFQAPAGAAAJQAAADgCADIgCAJIgBAOQAAARADAIIAEAKIAFAJQgBAFgEAEQgDADgGAAQgFAAgJgJgAgNgSQgJAKgBAMQABANAEAGQAFAHAJAAQAFAAAFgCQAFgCAFgEQgDgWAAgLIAAgHIACgJIgEgBIgCgBQgLAAgLALg");
	this.shape_2.setTransform(56.6,19.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#009900").s().p("AAWBHQgCgIgCgOIgCgXIABgHIAAgIIAAgIQgBgDgFAAQgKAAgHAIQgFAFgIAOQAAAjgDAHQgEAIgIAAQgFAAgFgEQgEgDAAgGIABgFIABgaIAAg/IABgEIAAgPIgBgJIgBgJQAAgGAEgDQAEgEAGAAQAKAAADALQACAGAAAMIgBATIAAATQAHgHAIgDQAGgEAJAAQARAAAHAKQAGAHABAMIABAZIACATIADATIABADQAAAGgEADQgEAEgGAAQgKAAgDgKg");
	this.shape_3.setTransform(45.4,16.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#009900").s().p("AATBMQgFgEgBgGQgEgLgBgHIgKg9QgHASgHAPQgKAYgEANIAAAFQAAAGgEAEQgFADgGAAQgHAAgFgEQgFgEAAgHIgDgLIgLguQgGgVgPgqIgBgFQAAgGAEgEQAFgDAFAAQAHAAAFAGQACAEADAJQAKAbAMAzQAIgTAIgYQAGgVAFgJQAJgVAJAAQAJAAAEAKQACAFADANIACAUQACARAKAqQALgYASgsIAEgSQADgKAFgHQAEgHAIAAQAGAAAEAEQAEAEAAAFIgEALIgDAKIgGARIgSAnIgSAqIgHARQgFAIgJAAQgFAAgFgDg");
	this.shape_4.setTransform(29.1,17.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},3).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16.6,0,68.3,31.9);


(lib.Wordssubject = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,"flash":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.gotoAndPlay("flash");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("AgbBKQgFgEAAgFQAAgHAEgFQAFgIAHAAQAHAAADAGQAEADAAAHQAAAFgEAGQgEAGgHAAQgGAAgEgEgAgVAhQgFgEAAgFQAAgJANgJIAVgOQAMgKAAgIQAAgJgJgIQgIgHgJgBQgFAAgJAHQgJAFgEABQgGAAgEgFQgEgEAAgGQAAgJASgJQAOgGAJAAQATAAASAQQARAPAAAUQAAAUgUAOIgRALIgMANQgFAFgFAAQgHAAgDgEg");
	this.shape.setTransform(91.5,46.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("AgHBEQgFgEAAgFIAAgLIABgLIgCgwIgTgBQgLgCAAgMQgBgFAEgEQAEgDAFAAIASABIgBgKIAAgKQAAgFADgEQAEgEAGAAQAMAAAAAYIAAAJIAKgBQALgBAFACQAHADABAJQAAAGgFADQgDAEgGAAIgFAAIgFAAIgJABIABAxIABAEIAAAHQAAAWgOAAQgDAAgEgDg");
	this.shape_1.setTransform(81.2,47.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066FF").s().p("AAXAsQgJAFgHACQgHACgCAAQgYAAgMgMQgLgNAAgZQAAgWARgQQARgRAWAAQAKAAAMAFQAOAGAAAJQAAADgBADIgCAJIAAAOQgBARADAIIAFAKIADAJQAAAFgDAEQgFADgFAAQgEAAgKgJgAgMgSQgKAKAAAMQgBANAFAGQAFAHAKAAQADAAAGgCQAFgCAFgEQgDgWAAgLIABgHIABgJIgDgBIgEgBQgKAAgKALg");
	this.shape_2.setTransform(71,49.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0066FF").s().p("AAWBHQgCgIgCgOIgCgXIABgHIAAgIIAAgIQgBgDgFAAQgKAAgHAIQgFAFgIAOQAAAjgDAHQgEAIgIAAQgFAAgFgEQgEgDAAgGIABgFIABgaIAAg/IABgEIAAgPIgBgJIgBgJQAAgGAEgDQAEgEAGAAQAKAAADALQACAGAAAMIgBATIAAATQAHgHAIgDQAGgEAJAAQARAAAHAKQAGAHABAMIABAZIACATIADATIABADQAAAGgEADQgEAEgGAAQgKAAgDgKg");
	this.shape_3.setTransform(59.7,46.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0066FF").s().p("AATBMQgFgEAAgGQgFgLgBgHIgKg9QgHASgHAPQgLAYgDANIABAFQAAAGgGAEQgEADgGAAQgHAAgFgEQgFgEAAgHIgDgLIgKguQgHgVgPgqIgBgFQAAgGAFgEQAEgDAFAAQAHAAAFAGQACAEAEAJQAJAbAMAzQAIgTAIgYQAHgVADgJQAKgVAJAAQAJAAAFAKQACAFABANIADAUQACARALAqQAKgYARgsIAGgSQACgKAEgHQAFgHAIAAQAGAAAEAEQAEAEAAAFIgDALIgFAKIgFARIgRAnIgSAqIgIARQgFAIgJAAQgFAAgFgDg");
	this.shape_4.setTransform(43.4,47);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0066FF").s().p("AglAyQgEgDAAgGIAAg+IABgJIAAgJQAAgFAEgEQACgDAHAAQAKAAACALQAQgNAVAAQATAAABAaIAAAGQgCAPgMAAQgMAAAAgMIgBgKQgUADgKATIAAAvQAAAGgDAEQgEADgGAAQgGAAgDgEg");
	this.shape_5.setTransform(19.7,49.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0066FF").s().p("AgfApQgOgOgBgXQAAgTAMgRQAPgUAZAAQATAAAMAQQAKAOAAAUQAAAVgMAQQgOASgVAAQgSAAgNgMgAgNgPQgFAJAAAKQAAAMAGAGQAFAFAHAAQAHAAAGgFQAHgHABgMQABgdgSAAQgKAAgHALg");
	this.shape_6.setTransform(9.4,49.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0066FF").s().p("AgfApQgOgOgBgXQAAgTAMgRQAPgUAZAAQATAAAMAQQAKAOAAAUQAAAVgMAQQgOASgVAAQgSAAgNgMgAgNgPQgFAJAAAKQAAAMAGAGQAFAFAHAAQAHAAAGgFQAHgHABgMQABgdgSAAQgKAAgHALg");
	this.shape_7.setTransform(66.8,19.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0066FF").s().p("AAWBHQgCgIgCgOIgCgXIABgHIAAgIIAAgIQgBgDgFAAQgKAAgHAIQgFAFgIAOQAAAjgDAHQgEAIgIAAQgFAAgFgEQgEgDAAgGIABgFIABgaIAAg/IABgEIAAgPIgBgJIgBgJQAAgGAEgDQAEgEAGAAQAKAAADALQACAGAAAMIgBATIAAATQAHgHAIgDQAGgEAJAAQARAAAHAKQAGAHABAMIABAZIACATIADATIABADQAAAGgEADQgEAEgGAAQgKAAgDgKg");
	this.shape_8.setTransform(56.1,16.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0066FF").s().p("AATBMQgFgEgBgGQgEgLgBgHIgKg9QgHASgHAPQgLAYgDANIAAAFQAAAGgEAEQgGADgFAAQgHAAgFgEQgFgEAAgHIgDgLIgLguQgGgVgPgqIgBgFQAAgGAEgEQAEgDAGAAQAIAAAEAGQACAEADAJQAKAbAMAzQAIgTAIgYQAGgVAEgJQAKgVAJAAQAJAAAEAKQADAFACANIACAUQACARAKAqQALgYARgsIAFgSQADgKAFgHQAEgHAIAAQAGAAAEAEQAEAEAAAFIgEALIgDAKIgGARIgSAnIgSAqIgHARQgEAIgKAAQgFAAgFgDg");
	this.shape_9.setTransform(39.8,17.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},3).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.2,0,97,61.8);


(lib.Wordsbuffy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,"flash":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.gotoAndPlay("flash");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("AgZBDQgEgDAAgFQAAgIATgoIgfg2IgEgHQgCgEAAgEQAAgEAEgEQADgDAFAAQAGAAADAEQANAQAOAiIAMgZIAMgXQAEgHAGAAQAFAAAEAEQAEADAAAFIgBAFIgfA9IgQAmIgFAQQgDAJgIAAQgFAAgEgEg");
	this.shape.setTransform(92.9,19.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("AgPBKQgEgEAAgEIAAgDQACgMABgLIAAgqIgGABIgGAAQgFAAgEgDQgDgDAAgGQAAgIAJgCIAPgCIABgKQACgTAJgKQAIgMAVAAQAQAAAAAMQAAALgOAAQgLAAgFAIQgEAFgBAMIgBACIARgBQARAAAAAMQAAALgSAAIgRABIAAAVIABAYQAAAQgCAJQgCAKgHAAQgGAAgDgDg");
	this.shape_1.setTransform(83.3,15.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066FF").s().p("AgPBKQgEgEAAgEIABgDQACgMAAgLIAAgqIgHABIgEAAQgGAAgDgDQgEgDAAgGQAAgIAIgCIAQgCIABgKQACgTAJgKQAIgMAVAAQAQAAAAAMQAAALgOAAQgMAAgEAIQgEAFgBAMIAAACIAQgBQARAAAAAMQAAALgSAAIgRABIAAAVIABAYQAAAQgCAJQgCAKgIAAQgEAAgEgDg");
	this.shape_2.setTransform(74.2,15.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0066FF").s().p("AARArQgLAEgKAAQgNAAgIgFQgKgGgCgMQgDgVAAgQQAAgLADgPQABgKAKAAQAGABADADQAEACAAAGIgCALIgBANIABAUQABAJACAGIAEACIAEAAQAIAAALgDIAAgPIAAgNQAAgSACgNQABgLALAAQAFABADADQAEADAAAFIgCAeIAAAQIAAASIABAGIAAAFQAAAFgEADQgDADgFABQgIAAgDgHg");
	this.shape_3.setTransform(65,17.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0066FF").s().p("AgqBDQgEgFAAgFIAAhbIgBgMQAAgHABgEQABgJAOgBQAHgCAPgBQAPAAAPALQASANAAASQAAAKgEAHQgDAGgHAFQAIAEAHAIQAIAJAAAKQAAALgNAKQgJAIgJADQgTAHgfAAQgFAAgEgDgAgXAvQAQgBAPgFQAQgFAAgEQgBgIgJgEQgIgFgGgBIgXAAgAgXguIABATIgBASIANABQAYgCAAgSQAAgGgIgFQgGgHgJAAIgOAAg");
	this.shape_4.setTransform(55,15.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,147,29.1);


(lib.anim_pencil = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{notinuse:0,inuse:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(2));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("ASq7QQhKApg8BqQgUAYgZAeQgKgUguAKQAHAcAJAaQAVgXATgVAPxsfQBKgXBSgTQCdhwB1ioQgLgfA7g6QANgNCNiSQgGgohligQhlifjvgQAPxsfQBFhHBJhLAWfxhQhLAVgmgSQgPgHgPgIQjxh8hQjyAO/4RQiZCViDCOQgEA9AgBAQiyC8ieClQgvAyguAwQweRRhIAyQj+Cui9DaQgRBDAAA9QgBABAAAAQgsAfgeAgQhCBHAFBKQAGBRBfBUQANANAPAMQBfBLBfAgQAAAAABAAQBhAXBYiRQCfkLDDjzQANgQATgWQA7hEByh5Qh7gggyhPQAriGCRgyQBHgYBOgUQgMBeA+AWQBIhKBUhVQCliqGrm1QBUhXBehiQB3h6CGiLAJClhQlgA4AwmFAFvsQQA+FWFHhgAmAJ8QAogpAugxQA7g9BFhIAkqIiQhDg6gig7AotM5Qgni2Anh2A0hPeQAAAAABgBQAAABAAAAQgCDZDICQQBLA3BgghA0gPdIAAAAA2oSuQh8EQgnC3QgMA6gRAiQABAAAAAAQGVicBpheAjcEpQBigZBsgSAZp1ZQl6hOhFkp");
	this.shape.setTransform(164.1,174.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFCC").s().p("A5LZ1QAni3B8kQQAGBRBfBUQhZEVjLBpIgBAAQARgiAMg6gASq7QQDvAQBlCfQBlCgAGAoQl6hOhFkpg");
	this.shape_1.setTransform(164.1,174.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEFE49").s().p("AAki9IAcAYQBfBLBfAhQhoBcmTCbQDKhpBXkSg");
	this.shape_2.setTransform(25.6,330);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AsORzIAAgBQhggghehLIgdgYQhehVgGhRQgGhKBChHQAeggAsgfIABAAQgCDZDICQQBMA3BgghQhNB9hTAAQgNAAgNgCgAjTCoQAsiGCRgvQBFgZBOgUQgDAQABAOQAABCA0ATIiBCEQhAg6gig7QAiA7BAA6IhUBbQh6ghgzhPQAzBPB6AhQhyB4g7BEQgmi2Amh2gAB7gcQgBgOADgQQBhgZBtgSIicCeQg0gTAAhCgAJswTIBehhQA+FVFHhfIizC4QgsAHgmAAQkHAAAplUg");
	this.shape_3.setTransform(129.4,210.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEFD85").s().p("AARE1IgbgPQjxh9hQjvIAngtIAug1QA7hqBLgqQBFEqF3BMIiZCfQg7A6ALAfQgpALgeAAQgZAAgSgIg");
	this.shape_4.setTransform(294.9,31.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AyZWbQjIiQACjZIAAAAIAAgBQAAg9ARhDQC9jaD+iuQBIgxQexRQgwGEFgg4QmrG2ilCpQhsAThiAZQhOAUhHAYQiRAxgrCHQgnB1AnC3IggAlQjDDzifELQgkANghAAQg3AAgvgjgAEwq7IFQliQgghAAEg8QCDiPCZiVQAHAcAJAbQBQDxDxB9IAeAOQAmASBLgVQh1CpidBwQhSAThKAXICOiTIiOCTIj9EFQhHAVg7AAQjSAAgxkLg");
	this.shape_5.setTransform(170.4,166.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.1,1,1).p("AUv5oQDtARBmCfQBlCfAFAoQl4hNhFkqQhLAqg8BpQgUAZgZAdQgTAVgVAYQgJgbgHgcQAugKAKAUART1yQBQDxDxB9QAOAHAPAHQAnASBLgVQgLgfA7g5QANgOCMiSARD2pQiaCViCCPQgEA8AgBAQiyC8ieCmAGWpFQAtgwAwgyQA+FVFIhfQhfBhhUBXQlgA4AwmEgAR2q2QBEhHBJhMAR2q2QBIgXBTgTQCdhwB1ipAN5mxQB2h6CHiLAhYGSQgNBeA/AWQhGBHg6A+QhDg7gig7AmqJ2QAsiHCRgxQBHgYBOgUQBfgZBtgTAmpOiQgTAVgNAQQjEDzieELQhgAhhMg3QjHiQACjZQAAAAAAAAQgBAAgBAAQABAAABgBQAAg9ARhDQC9jaD9iuQBJgxQexRAimKLQgvAwgnAqQhyB4g7BFQgni3Amh1Aj8LlQh7ghgzhOAycRFIAAABAsrXFQhZCRhhgWIAAAAQhFA9nageQgjADgegEQgpgFgigQQg0gYgogxQCpgnBXgMQBWgNByiqQAEA5AwA7QgRBehwA1Qh/A7iggPAzwWKQAUAZAcAZQAOAMAPAMQBfBLBfAhA0kUWQgGhJBDhHQAdggAsggALGj5QmrG2inCpQhUBWhGBK");
	this.shape_6.setTransform(150.9,184.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEFE49").s().p("AjIBlQgjADgegEQgogFgjgQQCgAPCAg7QBtgzARheQAVAZAbAZIAdAYQBfBJBfAhQguApjkAAQhvAAicgKg");
	this.shape_7.setTransform(16.9,337.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AsORzIgBAAQhfghhfhLIgcgYQgcgZgUgZQgxg7gEg5QgFhJBChHQAeggAsggIABAAQgCDZDICQQBLA3BgghQhMB9hUAAQgMAAgNgCgAjTCpQAriHCRgvQBFgYBOgUQgCAPAAAOQAABCA0ATIiACFQhBg7gig7QAiA7BBA7IhUBaQh7ghgyhOQAyBOB7AhQhyB4g7BFQgni3Anh1gAB6gcQAAgOACgPQBigZBtgTIidCeQg0gTAAhCgAJswSIBdhiQA+FVFIhfIizC4QgsAHgmAAQkIAAAqlTg");
	this.shape_8.setTransform(129.5,230.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FEFD85").s().p("AARE0IgbgOQjxh9hQjvIAngtIAug2QA7hpBLgqQBFEqF3BLIiZCgQg7A5ALAfQgpAMgeAAQgZAAgSgJg");
	this.shape_9.setTransform(294.9,51.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("AyZWbQjIiQACjZIAAAAIAAgBQABg9AQhDQC9jaD+iuQBIgxQexRQgwGEFgg4QmrG2ikCpQhtAThiAZQhOAUhHAYQiRAxgrCHQgnB1AnC3QgTAVgNAQQjDDzifELQgkANghAAQg3AAgvgjgAEwq7IFQliQgghAAEg8QCDiPCZiVQAHAcAJAbQBQDxDxB9IAeAOQAmASBLgVQh1CpidBwQhSAThJAXICNiTIiNCTIj9EFQhIAVg7AAQjSAAgxkLg");
	this.shape_10.setTransform(170.4,186.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFCC").s().p("A6QZXQgzgYgogwQCognBXgNQBWgMByiqQAEA5AwA7QgRBehvA0QhmAvh5AAQggAAghgDgAUu5ZQDvAQBlCfQBlCfAGApQl6hOhFkpg");
	this.shape_11.setTransform(150.9,182.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,330.2,351.2);


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


(lib.anim_buffy_toss = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{sitStable:0,sitStart:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_21 = function() {
		this.gotoAndPlay("sitStart");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(21).call(this.frame_21).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AADpyQABAAACgBQACAAACABQABAAAAgBQABgEgCgDQgBgBgCgBQgGgDgEgCAAdpyQgBAFgCADQgBADgDABQgCAAgDACQAAAAAAABQgBAHAFAGQABABAAABQAEAGgGAEQgDACgDABQADAEACAEQACAFgDAFQgBACgBAAQgCACgCAAQgCABgCAAQABACAAABQACADgCADQgBADgCADAggn3QgFgIgCgJQAAgFgBgFQAAgGgDgFQAAgBgBAAQgBAAgBgBQABAAABAAQAFgCAFgEQACgBACgBQABgBAAgCQgBgCAAgCQgBgDgDgDQgBgCgCgCQgBgBgCgBQgEgCACgFQADgFAGgBQADAAADgBQABAAAAgBQABgBgBgCQAAgCgBgCQgBgCgCgBQgBgBgBgBQgCgCAAgCQABgCAAgBQAEgEAEAAQACABABAAQADAAABgCQAFgGgDgGQgEgGgBgHAgIn5QgFgBgDgDQgCgDgBgDQgBgDAAgDQABgCABgDQACgCACgBQADgBACABQACAAACABQABAAABAAQABAAAAgCQACgGAAgHQAAgDAAgDQgBgBgCgCQAAAAAAgBIAAAAQABgDABgCQABgDACgDQABgBACgBQACgCAAgCQAAgJgCgIQgBgFAAgGQgBgKAAgKQAAgCAAgGAgXn+QgEgCgBgEQgCgEAAgFQABgDABgDQACgCACgCQABAAAAgBQABAAAAgBQABgGgCgFQgBgCAAgCQgDgGAFgEQAEgDAFgBQACgBAAAAQAGgFAAgHQAAgEgDgDQgDgDgEgEQAAAAAAgBQABgBABgBQAEgDAEgCQACgBAAgBQABgFgDgEQAAgBgBAAQgCgBgCgBIABgBQACgFAGgDQABgBADgBIAAAAAAwpMQgDAAgDABQgEACgDAEQgCADgBACQAAACAAADQACAJgHAIQgBACgDACQgEACgFACAgDn8QgBgDgBgEQAAgDABgDQADgDABAAQADgBADABQADAAABABIABAAQABABAAAAQACABABABQABAAAAAAQADgCACgDQADgFABgEQABgBABAAQABAAACAAQAGACAEADAAtopIAAAAQgBgBgBgBQgBgBgCAAQgCABgDADAAKoHQABADACACAANoCQAFAEAEAFQADAFADAFQACADACADQAFAJAFAHQADADADABQAGgIACgKQAAAAAAgBQABgCgBgDAgpnkQgEgEgDgDQgEgGgBgGQgBgBABgCQABgCACgCQACgCABgCQACgBAAgCQAAgBAAgCQgBgDgCgBQgCgBgBgBQgDgBgDAAQgBAAgCgBQgCABgBgCQgDgJAAgKQABgCAAgCQAAgCgBgBQgBgBgBgBQgBgBgBAAQgDgBgCgCQgBgBABgBQADgFAEgEQAEgDACgFQAAgBAAgCQgBgDgEAAQgDAAgCABQgBABgBABQgBAAgBAAQgBgCAAgCQgBgFACgFQADgEAAgEQABAAgBgBQAAAAgBgBQgCABgDAAQgCAAgCABQgCAAgCAAQgCgBAAgCQgBgBABgCQAAAAAAgBQAAgBAAAAAAFnNQgEgKADgJQABgEAFABQAJABAIAFQAIAEAIAGQABABABABQABgBAAAAQABgBABgCQAEADAGgBQAHAAAFgEQAJgFAHAJQAGAHgBAKQAAADgCADQgDAFgDAFQAFAHADAKQACAGACAHQACAIgBAJQAAAEgCADQgFgFgDgGQgHAFgIAFQgIAFgHAGQgHAFgJADQgDACgDADQAAAAgBABQAEAAADAAQAIgCAKgDQAJgDAJgCQgDAIgCAIQgCAJAAALQABAEgBACQALAAgCALQgBAIgIgBQgFAAgFgBQAAAJgFAIQgFAJgIAFQgIAFgIAEQgKADgIAFQgHAFgHADQgJAEgKgBQgJAAgIgEQgGgEgFgGAAtnRQAAAAAAABQACABACACQAEAFAAAHQgFACgEAAQgKAAgCgLQADgBADgBQAEgBADgDAA1nBIAAABQgBAKgIAFQgHAFgJgFQgIgEgHgHQgHgIgBgJQAAgBAFACQAEACAHABQAGAAAFgBAAxnNQgBgCgDgCABel8QACABABACQgDAEgDACQgHADgIABIAAABAAhlkQgBAAgBAAQgKACgJgDQgJABgBAMQgBAIAFAFQAGADAEABQAAAAABABQAIAEAJADQAJAEAIAFQAEACAEABAAQlHQAAAAABAAQAJABAJAAQAKgBAJABQAJAAAGACAAjjpQAEACAEACQAIAEAHAEQAFADADACQAHAEAFAFQAFAGADAGQAHAOASAHQASAHANANQADACANALIAAgcQAAgCABgSQABgRgIgUQgHgVABgUQAAgNAGgBQAEAAAFADQAOAKAJAJQAJAKgEAWQgCAMABAjQAsgYAPgWQAPgXANgGQAOgHADAAQAEAAADABQALAEgEAKQgDAKgGAEQgGAEgRAPQgNALgVAUAAHkDQgCAIgBAIQAKAFAIADQgFgDgEgBAAZjqQALAMAGAGQACACABABQAAABABAAQADACACABQACABABABQAKAHAHALQAIAMAAAOQgJAHgNAFQgPAHgSAGQgSAGgRAEQgYAGgFgRQgEgRgHgQQgCgFgCgFQAAgBAAAAQgBgBAAAAQgFgKgGgJQAAgCgCgCQgDgDgGgGQgNgOgcgbQADgFAAgGQAAgJgFgJQgBgEgCgEQgBgDgCgCAEgi2QARgVACgEQADgEAIgBQAJAAACASQACARgPANQgDAFgSAJQgSAJgXALQAqAAARgIQAJgFADgCIAAABQAZgVAEAJQAEAIgFAPQgEAOgNAGQgNAHgLACQgaAFgkAAQBLAIgBAFQgBAFgEAFQgEAEgdAAQgdgBgHAAQgDAPgGAPQgOAigTAZQgSAZgXAbQgVAZgVAVQgDADgOAIQgOAJgcARQgdARgZAFQgXAFgKAFQgiATgggZQgfgYgRgZQgKgPgMgOQgJgLgKgLQgWgYgPgbQgQgagHgjQgHgmAGgjQACgMADgLQAFgNAHgMQAEgIAGgHQAEgIAFgHQACgDASgSQAEgEAFgFQAMgLAPgPAg3qBQAEADACAEQABACABACQAAABgBABQgBADgBACQgDADAAAFQAAAEAEABQACABAAAAQABABgBABQgBADgCACQgCADgDADQgCACAAADQAAABABABQAEACAAAEQAAAFgDAEQgBADgCADAg5nVQgDgFgGgEQgBgCgCgCQgCgBgBgBIAAgBQAEgCAFAAQABgBACAAIAAAAQAAgBAAgCQgBAAAAgCQgBgBgBgBQgCgBgCgBQgDgBgDgCQgBAAAAgBQgBgDABgCQACgCABgBQACgDACgBQACAAABgBQgBgCgEgBQgFgCgHgBQgBAAgCAAQgEgCgDgDQgBgBgBgDQgBgBAAgCQAAgIAEgGQACgEgEgDQgBgBgBgBQgFgFgHgFQgCgCgBgCQgDgIgCgIQgBgBAAgBQABgDAAgCQADgHABgIQABgDgCgDQgCgCgCgCAhGnDQgHgCgHgDQgBABgBgCQAAAAgBgBQgBgCABgCQACgBABgCQAEgFABgGQABgBgBgCQgBgBgCgCQgCgBgDgBQgGgDgGgDQgBAAgBgBQgGgGADgHQAAgCAAgDQABgDABgEQABgBgBgBQgDgFgHgBQgDAAgDgBQgBgBgBgBQgDgEACgEQAAgBABAAQABgBABgBQAAgBABgBQgBgBAAgCQgBgEgFgBQgBgBgCAAQgCAAgCAAQgDgBAAgDIABgBQgBgHACgHQABgCAAgBQABgCAAgBQABgEgDgBQgDgCgCgCQgEgEABgFQABgEACgCAhcpoIAAAAAhnnMQABgKgFgIQgBgBgBgCQgCgEgEACQgBAAgBABQAAAAgBgBQgBAAAAgBQgBgCAAgDQACgGABgGQABgCABgBQABgCgBgDQgDgFgFgBQgEgBgFAAQgEAAgEgCQgCgBgBgBQgBgBgBgBQgFgGABgHQAAgCAAgCQAAgCgBgBQAAgFAAgFQAAgCAAgCQgBgGgGgCQgBgBgBAAQgBgBgBAAQgGgBgGAAAhSm4QgJAAgJgCQgCgBgCgCQgCgDgCgEQAAAAgBgBQAAgBgCAAQgGABgEgDQgCgBgCgBQgEgEgBgFQgCgJABgJQAAgCAAgBQgBgGgEgDQgCgCgCAAQgBAAgCAAQgEgCgFgCQgBgBgBgBQgDgDgCgFQgBgGgBgFQAAgBAAgCQgDgGgFgCQgBgBgBAAQAAAAgBAAQgFAAgEABQAAABgBgBQgEAAgEgCAhamqQgDgCgDgBQgCgBgDABQgCAAgCABQgBAAgCAAQgCgBgCgCQgCgEgBgDQgBgDgCgCQgCgCgEABQgCAAgDAAQgBAAgBgBQgDgBgCgEQAAgCgCgBQgBgCgCgCQgCgBgCAAQgBgBgBgBQgBgDgBgDQABgGgBgGQAAgBAAgBQgBgCgCgCQgEgCgFgCQgBgBgDAAQgFgBgEgEQgCgBgBgCQgDgGABgGQAAAAAAgBQAAgCgBgBQgCgCgDAAQgCAAgCAAQgFAAgEADQgCABgDACQgBABgDgCQgBgBgCgBQgBgBgBgBQgDgDgCgFAjqnyQADADAEACQADACADAAQAFgBAEAAQAGABAEACQAGADACAFQAAABAAAAQACAEACAEQABABABACQABADADABQAFABAFAAQACAAACAAQAFAAAFADQADADACAEQABABAAABQADAEABAEQAAABAAABQADAEAEADQABAAAAABQABAAABABQAGAEAEAFQACADADABQABAAABAAQADAAABACQABABAAABQADABACABQACAAABgBQACgBAAAAQABAAABAAQAFACAEADAiRmlQgDgDgDgEQgCgCgDgDQgGgFgCgJQAAgCAAgBQAAgBgBAAQgBAAgBAAQgDABgCABQgEACgEgDQgBgBgBgBQgBgDgCgCQAAgCgCgBQgCgCgDABQgCAAgBABQgCABgCABQgDABgCAAQgBABgBgBQgHgCgBgHQgBgDgBgDQgCgFgGgBQgFgDgHACQgEABgEABAkFnQQAHAGAJAAQAEAAACAAQAHgBAEAGQACADACADQAAACABABQABABABABQABABABAAQAEADAEgCQAFgCAFgCQAEgCAEAAQABAAAAAAQACACABADQAAACABAAQABADAEABQABAAACABQACABAEAAQAEAAABADQABADACACQAAABAAAAIABABIAAAAQAAAAgBgBAhgmJQAAgBAAAAQgBgDgBgDQgBgCgBAAQgCgBgDABQgCAAgCABQgCABgDABQgEADgGAAQgCAAgCgBQgCgBgCgCQgDgDgBgEQgBgCAAgBQAAgDgDABQgCAAgDABQgBABgDAAQgFACgDgFQgBgCgDgCQgBAAgCAAQgDABgCgBQgCAAgBgBQgEgDgCgEQgDgFgEACQgCACgDABQgIAFgJAAQgCAAgCgBQgBAAgCgBQgCgCgBgBQgCgCgCgDQgDgEgFgCQgCAAgCAAQgGABgGABQgDACgEABAkbmiQADADADACQADACAEAAQADAAACgBQACgBABgBQABgCACAAQABAAABAAQABABABACQABABABACQABADAAACQABACACABQADAAACgDQADgBACgCQACgBABgBQACgCADAAQACgBACAAQACgBABAAQABAAABABQAFABABAFQAAADABACQAAACABABQACACACgBQAGgCAFgDQABAAACgBQAGgBAFAAQACAAACABQAEAAABAFQABADABACQABACACgBQABAAACAAQAEgBAEgBQADAAADAAQADAAACAAQABAAACABQAFABABAFQACADADAEQAAABABgBQACAAABgBQAHgEAHgBQACgBABAAQADAAACAGQgGAAgHACQgEACgCAEQgFAIgDAKQgCAIACAJQACAIAHAFQABAAAAABQAIAEAIACQAJACAIgCQAKgDAHgFQAFgCgBgEAihlzQgHgGgEgHQAAAAgBAAQgBAAgCAAQgCADgEABQgBABgBgBQgEgCAAgDQAAgEgBgEQAAgCgBAAQgIgBgFAFQgCACgBACQAAACgBACQgBABgBABQgEAEgFgBQgEgBgDgEQgBgCgCgCQgCgCgCgCQAAAAAAAAQgBgBgBAAQgCAAgCABQgCABgDACQgCADgCADQgCACgBADQgCAEgFAAQgBABgCAAQgCAAgCAAQgDgBgCgBQgJgCgHAGQgCABgEAGAkOlgQABADADAAQACAAABAAQABAAABgBQADgDADgCQADgDACAAQABAAABABQABAAABABQAEABAEABQABABABgBQADgCADgCQABgBABgBQABgBABgCQABAAABgBQACAAACACQADADAFABQACAAACAAQABAAABgBQACAAABgBQADgFAEgCQACgBACgBQAFgCAEAFQABABABABQAFADAGgBQADgBACgDQACgCACgDAiTlUQgDABgEgCQgCAAgCgCQgCgCgEgCQgBAAgCgBQgBgBgBAAQgDgCgCADQgCACgEABQAAABgBgBQgBgBgBgBQgDgCgEACQgCABgDAAQgBAAgCgBQgDgBgCgCQgBAAgCAAQAAAAgBAAQgCACgCACQgCACgDACQgCABgCAAQgCABgDAAQgFACgFABQgCABgDgBQgBAAgCgCQgCgCgCgDQgBgCgCgBQgCAAgBABQgDAHgEAHQgBABgBAAQgDAAgCgBQgDgBgDgCQgDgDgDgDAhtl+QADAAADABQAEAAADACQAEADgBAFAhZljQgHgIgKAAQgLABAEAJQADAHAHACAiPloQAAgDgCgCQgBgBgCAAQgBAAgBABQgBABgCACQAAABgBADQAAABgBABQgCACgDgBAh/ktIgBgBQgCgGgFgHQgBgBgBgCQgBAAgBAAQgCABAAABQgBACAAABQABAEAAAEQAAACgDABQgCABgCAAQgFABgEgEQgCgCgBgEQgCgFgEgCQgBAAgBAAQAAAAgBAAQgEADgDAFQgBABgCABQgCABgCAAQgBAAgCABQgBgBgBgBQgBgDgBgDQAAAAAAgBQgBgDgCAAQgCABgCgBQgCgBgCAAQgHgBgFAEQgCACgBACQgCADABADQAAACAAACQAAADgDADQgBACgCAAAiKlxQgCgEgEgEQgBgBgDAAQgGgBgEAEQgBACgCACAjjklQgCAAgCAAAiQjxQgBAAgBABQgBAAACgCAiSjxQABgBAAAAAiRjyIABABQARAPAMAKQAGAGAFADQAEAEACACQAPAOAHAOQAIAQACATQADAUgCATQgCAUgGAQQgBAEgCADQAQARAEAaQACAJACALQAFAWAGAgQAPgSAUgSQAZgZAfgIQAigLAdgRQAagQASgbIABg+AiPGmQgRgGgTgHQglgPgQghQgQgiAAgmQAAglAHgkQADgMADgLQAHgVAMgUQAUgeAngXABPijIAHgDAgpA9IAAAAAgpA9QgFAGgFAHIAKgMgABRECQgQgLgWgCQgngDgkAKQgmAKgZAZQgZAagTAjQgTAjAPAnABRECQgFAFgHABQAiAPAgAWQADACACACQAdATAiAMQAkANAkAQQAjAQAeATQAcATAYAbQAZAcAFAkQABACAAADQAFAlgVAbQgUAcgjALQgiALgqACQgjABglgFQgkgGgkgGQglgGgngDQgngDgjgMQgIgDgJgCQgbgJgbgKQgigMgjgGQgjgGgnAFQglAFgjACQgSABgRAEQgQAEgOAHQgkARgcAVQgggoAbgWQAYgUAcgRQAcgSAegQQAhgSAegSQAcgQAlgCQAogCAYAVQAYAWAPAdQARgGARgFQATgHATgFQAkgJAmgEQAmgFAmABQAiAAAiAKQAlALAhAWQAQAJAIAOABYD4QgBACgCADQgCADgCACAB9ByQgEAjgHAlQgHAhgTAdQAlAOAgAOQAdAMAgANQAlAPAmAJQAkAJAdAQQAfAQAcAXQAcAXAFAkQAGAsghAXAgpA9IAAAAAg/HhQgngUgpgnAgjJKQgTgEgWAHQgiAMgkAKQghAJgogDQgRgBgGAKQgJAQgSAAQgbABgLgTQgGgKgGgNQgJgPgLga");
	this.shape.setTransform(45.2,68.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AAUmtQgBgBgBAAQgFgBgGAAQgGAAgEAAQgSgBgRgCQgBAAAAAAQgagOgdAEQgdAEgYALQgNAHgLADQgOAEgPAFQgdAKgJAZQgCAEgGABQgjAGAMAhQAFANgLAJQgLAIgHAMQAPAbgcAPQgNAHAAAPQAAAWAOAXQgSALAEATQABAHAHAHQAOAPAUAGQACAVAPARQAMAOAQAHQASAIANgFQADAAACABQAEABAEACQADACAEgDQAGgFAIgDQADgBABACQAAAAABABQAIAEAHgDQAEgCAFgBQABAAAAAAQABAAABgBQAAAAABABQAGACADgDQABAAAAgBQACgCABgDQABAAAAgBQACAAACgCQAAAAABAAQAEABAAABAArmfQgCAAgDgBQgJgGgHgHQgBAAgBAAQgBgBgBgBQgFgBgGABQgBABgCAAQgBABAAgBQgDAAgDgBAAqkLQAGgQAFgTQADgLADgMIAAAAQACgQABgTQAAgIAAgIQAAgKgGgMQgFgKgIgHAAUmtQAOAFAJAJAhSiXQgCgFgCgHQAAgCABAAQABAAABAAQADABACAAQABgBACgBQACgEgDgDQAAgBAAAAQgBgDAAgCQAAgBAAgBQACgGADgEQABgCABgCQACgGAFgCQABAAACgBQABAAABgBQABgBABAAQABgBAAAAQADgIAEgIQABgBAAgBQACgBABgBQACgCACgBQADgDACgDQACgGADgEQAFgFAGgEQAAAAABAAQABAAABgBQACgDADgBQADgBADgEQABgBAAgBQADgBABgBQACAAACABQADgDADAAQAAABAAgBQACgDABgCQACgBACAAQAAAAABAAQABgBADACQAAAAABABQAEACACgDQABgCABgCQAAgCgCgBQgBAAAAAAQAAgCgBgBQAAAAgBAAQAAgBAAAAQgBgBAAgBQAAgBgBgBQAAAAgBgBQAAAAAAgBIAAAAQABgBAAgBAAmgGQgEgBgQgHQADABAGACQANAEAJACAAmgGIAAAAIAAAAgAEagKQACAKAJAAAhLmBQgBgCgCgBIAAAAIAAAAQgDgLgBgFQgIgdghASAgpmdQgTgIgXgGAhlmFQgSgPgKATQgKgWgXgCAiglTQgHgGgJgHQgLARgQgSQgIgIgOABAh7lyQgRAGgVgOQggAGgUgRAiwk1QgRADgQgNQgcAEgSgTAjLklQgUgPgXAPQgGAEgEgEQgDgDABgHAj3jrQgVAVgUgLAkViHQgHgPgKgRAjahAQgNgBgIgLQgDgFgFgEAhxhHQAAgBAAAAQgBgBAAAAQAAgBABgDQADgFgBgEQgCgFAAgGQAAAAAAgBAjRhBQgCABgCAAQAAAAgBAAAiEgNIABAAIAAAAIAagQAkQkOQARgNAiANAjujLQgCgDgLADQggAGgOgVAjmj5QgXgMgTAIAjdGlQAOADALACQAEABADAAQAKABAJAGQABABADAAQAaACAaAFQADAAACABQACABABAAQAGABAGAAQAHABAGAAQAGAAAGAAQATgBATgBQAEAAADgBQAMgBALgBQAMgBANgDQADgBACAAQAIgBAHgBQARgDASAAQAHAAADgFQAAgBADgBQABAAABgBQAFgBAFgBQADAAACgCQAFgDAIAAQACAAAEgCAD+ArQgLALgKANQgBAFAGADQAUgDAIgFQAIgFANgIQANgJACgBAE6AyQADAEAEAAADeBRQAIAMAHAJADvB3QACAHAEAFADKAuQgJAIgBASAgbEiIAAgBAgmDsQAUAJAYAI");
	this.shape_1.setTransform(43.8,45.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AABAIQgIAAgCgJIAGgCQADgBACgDIAEADQAEAEAAAGQgFACgEAAIAAAAg");
	this.shape_2.setTransform(49.5,22.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAOBCIgRAAIgSgBIgBAAIgKgEQgEgFAAgIQACgMAJgBQAJADAKgCIACAAQADABABgBIASgFIATgFIgFAQQgCAJAAALIgBAGQgFgCgKAAgAgKgnQgIgEgGgHQgHgHgBgKQAAAAAAAAQAAAAABAAQABAAAAAAQABABABAAQAFADAHAAQAFABAGgCQABALAIAAQAFABAEgDIAAABQAAAKgJAFQgDADgCAAQgEAAgFgDg");
	this.shape_3.setTransform(49.1,28.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC9A67").s().p("Ah4B3IgBABIAAABIAAAAIABgCgABeA4IgKgCIgIgDIgRgIIgRgIIAAAAIASAAIATAAQAJAAAGACQALAAgCALQgBAIgIAAIAAAAgAA6AFIABAAIAGgFQAJgCAHgFIAPgLIAPgKQADAGAFAFIADADIgGAGQgHAEgIABIAAAAIgSADIgSAFIgDAAIgEAAgAAuheQgHAAgEgDQgBAAgBAAQgBgBgBAAQAAAAAAAAQgBAAAAABQgEgLADgJQABgEAFABQAJABAIAFIAQAKIACACIAAABQgDADgEABIgGACIgIABIgDAAg");
	this.shape_4.setTransform(42.7,31.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("Ag7DFIgHgDIgFgBQgOAFgRgIQgQgHgMgOQgPgRgDgVQgTgGgPgPQgGgHgCgHQgEgTASgLQgOgXABgWQAAgPAMgGQAdgOgPgbQAGgMALgIQALgJgFgNQgMghAjgGQAGgBACgEQAKgZAdgKIAdgJQAKgDAOgHQAVgLAdgEQAdgEAaAOIABAAIAjADIAIACIACAAIADgCIALABIACABIABABQAIAGAJAGIAFACQAHAHAFAJQAHAMAAAKIgBARIAAAAIAAAAIAAAAIgBAAIgFABQgEABgDAFIgCAFIgBACIABACIAAADQAAAIgGAGQgBADgDABIgJAEIAJgEQADgBABgDQAGgGAAgIIAAgDIgBgCIABgCIACgFQADgFAEgBIAFgBIABAAIAAAAIAAAAIAAAAQAAASgDAQIAAABIAAgBIgCgCIgCAAIAAAAIgGADIAGgDIAAAAIACAAIACACIAAABIgFAWQgEgDgFgBIgEgBIgBABIgFAJIgFAFIgBAAIgDgBIgBgBIAAAAIgFgCQgDgBgDABQgDABgCACQgCADAAADIAAABIACAHIgCgHIAAgBQAAgDACgDQACgCADgBQADgBADABIAFACIAAAAIABABIADABIABAAIAFgFIAFgJIABgBIAEABQAFABAEADQgFATgHAQIgGgJIgJgJIACACIAAABQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIgCAFQgCADgEgDIgBgBQAAAAgBgBQgBAAAAAAQgBAAAAAAQAAAAgBAAIgBAAQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAABIgDAEIgBABQgDgBgCADIgFAAIgFACIgBABQgDAEgEACIgFADIgCABIgBAAQgGAEgEAEQgEAEgCAFIgEAGIgFADIgCADIgBABIgHAQIgBABIgCABIgCACIgDABQgGABgBAGIgDAEQgDAFgBAFIgBACIABAFIABABQADAEgDADIgDACIgEgBIAAgBIgCgGIgCgCIgBAAIAAAAIgBAAIgCAAIgBAAIgEABIgFADIAAAAQgEACgEABIgBAAIgBAAIAAAAIAAAAIgEgBIgEgEIgEgHIgBgDIAAAAIgBgCIgBAAIAAAAIAAAAIgBABIgCAAIgFACIgCAAIAAAAIAAAAQgDAAgDgDIAAAAIAAAAIAAAAQgBgDgDgBIgDgBIAAAAIgBABIAAAAIgBAAIgBAAIgBAAIAAAAIAAAAIAAAAIgBAAIAAAAIgDgBQgDgEgCgEIgBAAQgCgDgCAAIAAAAIgBAAIgCABIAAAAIAAAAIgEACQgIAFgIAAIgBAAIgBAAIAAAAIgEgBIgDgBIgDgDIgEgEQgDgFgEgBIgDAAIgBAAIAAAAIAAAAIgBAAIgLACIgHACIAHgCIALgCIABAAIAAAAIAAAAIABAAIADAAQAEABADAFIAEAEIADADIADABIAEABIAAAAIABAAIABAAQAIAAAIgFIAEgCIAAAAIAAAAIACgBIABAAIAAAAQACAAACADIABAAQACAEADAEIADABIAAAAIABAAIAAAAIAAAAIAAAAIABAAIABAAIABAAIAAAAIABgBIAAAAIADABQADABABADIAAAAIAAAAIAAAAQADADADAAIAAAAIAAAAIACAAIAFgCIACAAIABgBIAAAAIAAAAIABAAIABACIAAAAIABADIAEAHIAEAEIAEABIAAAAIAAAAIABAAIABAAQAEgBAEgCIAAAAIAFgDIAEgBIABAAIACAAIABAAIAAAAIABAAIACACIACAGIAAABIgCAAQgBAAAAAAQAAAAAAABQAAAAgBAAQAAABAAABIAEAMQgCgCgFgBIgFAAIgBgBIAAgBQgCgEgDAAIAAAAIAAAAIgDAAQgHACgGADIgBABIgCAAIAAAAIgBAAIAAABIgBgBIAAAAIgFgHQgBgEgDgCIgDAAIgFgBIgBAAIgBAAIgEABIgIABIgCAAIgBAAIAAAAIgBABIAAAAIgCgBIgCgFQAAgFgFgBIgEAAIAAAAIgBAAIgEAAIgGABIgDABIgKAFIgCAAIAAAAIgBAAIgBgBIgBAAIgBgEIgBgEQgBgGgFgBIgCAAIAAAAIAAAAIgBAAIgCAAIgEABIgFACIgCADIgGADQgCACgDAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBgBAAIgBgFIgBgEIgDgDIgBAAIAAAAIgBAAIgDACIgDADIgDAAIAAAAIgCAAIAAAAIAAAAQgEAAgCgBQgEgCgCgEQACAEAEACQACABAEAAIAAAAIAAAAIACAAIAAAAIADAAIADgDIADgCIABAAIAAAAIABAAIADADIABAEIABAFQABAAAAABQAAAAAAAAQABABAAAAQABAAAAAAQADAAACgCIAGgDIACgDIAFgCIAEgBIACAAIABAAIAAAAIAAAAIACAAQAFABABAGIABAEIABAEIABAAIABABIABAAIAAAAIACAAIAKgFIADgBIAGgBIAEAAIABAAIAAAAIAEAAQAFABAAAFIACAFIACABIAAAAIABgBIAAAAIABAAIACAAIAIgBIAEgBIABAAIABAAIAFABIADAAQADACABAEIAFAHIAAAAIABABIAAgBIABAAIAAAAIACAAIABgBQAGgDAHgCIADAAIAAAAIAAAAQADAAACAEIAAABIABABQgHgBgHADQgEABgCAEQgFAIgCAKQgCAJACAIQABAJAHAEIAAABIACALQACAEgDAGIgBADIAAABIABABIACAFIgEgCIgBABIgEACIgBAAIgDAGIgBAAQgDADgEgCIgCAAIgBAAIgCABIgIACQgIADgHgEIgBgBQgBgBAAAAQgBAAAAAAQgBgBAAABQgBAAgBAAQgHADgHAFIgEACIgDgBgAhQC2IAAAAIAAAAIAAAAIAAAAIgCAAIgBAAIgBAAIABAAIABAAIACAAgAhWC2IACAAIgCAAIgCAAIACAAgAhtCqQAHALAOABQgOgBgHgLQgEgFgFgEQAFAEAEAFgAhKCtQAAAEgDADIgDACIADgCQADgDAAgEIAAgBIAAgCIAAgCIABgFIADgDIABgBIAAAAIABgBQAEgCAEAAIAAAAIAAAAIABAAIABAAIAFACIADAAIAAAAIAAAAIACAAIABACIABACIABAGIADABIACAAIAAAAIABAAIADgBIADgDQADgEAEgDIACgBIABABQAEACACAFIADAGQADADAEAAIABAAIAAAAIABAAIAEgBQABgBAAAAQAAAAAAAAQAAgBAAAAQAAgBAAAAIAAgDIAAgGIAAAAIAAgCQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAAAAAIACAAIACADQAFAGADAHIAAAAIAAAAQgDgHgFgGIgCgDIgCAAQAAAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAABIAAACIAAAAIAAAGIAAADQAAAAAAABQAAAAAAABQAAAAAAAAQAAAAgBABIgEABIgBAAIAAAAIgBAAQgEAAgDgDIgDgGQgCgFgEgCIgBgBIgCABQgEADgDAEIgDADIgDABIgBAAIAAAAIgCAAIgDgBIgBgGIgBgCIgBgCIgCAAIAAAAIAAAAIgDAAIgFgCIgBAAIgBAAIAAAAIAAAAQgEAAgEACIgBABIAAAAIgBABIgDADIgBAFIAAACIAAACIAAABgAh4CPIABAAIAAAAIACgBIAHgNQABgBAAAAQAAAAAAAAQAAgBABAAQAAAAAAAAIABAAIAAAAQABABAAAAQABAAAAABQABAAAAAAQAAABAAAAIAEAFIAEACIACABIABAAIABAAIAAAAIAKgDIAGgBIADgCIAFgEIAEgEIABAAIADABIAFADIABAAIAAAAIACAAIAAAAIAAAAIAAAAIABAAIAAAAIABAAIADgBIABAAIACAAIAAAAIABAAIADABIACACIACAAQADgCACgCIAAAAIABAAIACgCIAAAAIABAAIABABIAAAAIACABIAEACIAFADIAFADIAEABIABgBIABAAIAAAAIAAAAIgBAAIgBABIgEgBIgFgDIgFgDIgEgCIgCgBIAAAAIgBgBIgBAAIAAAAIgCACIgBAAIAAAAQgCACgDACIgCAAIgCgCIgDgBIgBAAIAAAAIgCAAIgBAAIgDABIgBAAIAAAAIgBAAIAAAAIAAAAIAAAAIgCAAIAAAAIgBAAIgFgDIgDgBIgBAAIgEAEIgFAEIgDACIgGABIgKADIAAAAIgBAAIgBAAIgCgBIgEgCIgEgFQAAAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBgBIAAAAIgBAAQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAgBABIgHANIgCABIAAAAIgBAAIAAAAIAAAAIgBAAIgDgBIgFgCIgHgGIAHAGIAFACIADABIABAAIAAAAIAAAAgAh6B+IABAAIABgBIABAAIABAAIAHgGQACgCACAAIACAAIACABIAIACIACAAIAHgEIABgBIACgDIACgBIABgBIAAAAIACABIABABIABAAQACADAFABIAEAAIABAAIAAAAIACAAIAAAAIAAAAIAAAAIAAAAIACgCQADgEAFgDIADgBIAAgBIACAAIAAAAIABAAIAAAAIAAAAQADAAACACIABABIACACIACABIAFABIAAAAIABAAIADAAQADgBADgCIADgFQgHgHgDgHIgBAAIgDABIgHADIgCAAQgEgBAAgEIAAgHQAAgBgBAAQAAgBAAAAQAAAAAAAAQgBAAAAAAIgCgBIgBAAIgBAAIAAAAQgEABgEACIgBABIgCAFIgCADIgCADIAAAAIgBABIgFACIgBAAIAAAAIgCgBQgEgBgDgEIgDgEIgDgDIgBgBIgCAAIgBgBIAAABIgCAAIgFAEIgFAFIgDAFQgCAEgEABIgDABIgBAAIAAAAIgBAAIAAAAIgDgBIgFgBIgBAAIgEgBIgBAAIAAAAQgEAAgEADIgBAAIAAAAIgBABIAAAAIgGAHIAGgHIAAAAIABgBIAAAAIABAAQAEgDAEAAIAAAAIABAAIAEABIABAAIAFABIADABIAAAAIABAAIAAAAIABAAIADgBQAEgBACgEIADgFIAFgFIAFgEIACAAIAAgBIABABIACAAIABABIADADIADAEQADAEAEABIACABIAAAAIABAAIAFgCIABgBIAAAAIACgDIACgDIACgFIABgBQAEgCAEgBIAAAAIABAAIABAAIACABQAAAAABAAQAAAAAAAAQAAAAAAABQABAAAAABIAAAHQAAAEAEABIACAAIAHgDIADgBIABAAQADAHAHAHIgDAFQgDACgDABIgDAAIgBAAIAAAAIgFgBIgCgBIgCgCIgBgBQgCgCgDAAIAAAAIAAAAIgBAAIAAAAIgCAAIAAABIgDABQgFADgDAEIgCACIAAAAIAAAAIAAAAIAAAAIgCAAIAAAAIgBAAIgEAAQgFgBgCgDIgBAAIgBgBIgCgBIAAAAIgBABIgCABIgCADIgBABIgHAEIgCAAIgIgCIgCgBIgCAAQgCAAgCACIgHAGIgBAAIgBAAIgBABIgBAAIAAAAIAAAAIgBAAIAAAAQgCgBgCgCQACACACABIAAAAIABAAIAAAAIAAAAgAgPB4IADgCIABgCIACgEIACgCIACgBIAAAAIAAAAIABAAIABAAIABABIACAFIgCgFIgBgBIgBAAIgBAAIAAAAIAAAAIgCABIgCACIgCAEIgBACIgDACIgBAAIgBAAIABAAIABAAgAiUBvQgGgPgLgRQALARAGAPgAgFBgIAEACIAEAHIgEgHIgEgCIgBAAIAAAAIAAAAIgBAAQgEAAgDADIAAABIgEAEIAEgEIAAgBQADgDAEAAIABAAIAAAAIAAAAIABAAgAAjA7IAJAFIgJgFIgBAAIgBAAIAAAAIgCAAIAAABIgBAAIgBAAIgBAAIgEgBIgCgCQAAgBAAAAQgBgBAAAAQgBAAAAAAQAAAAgBAAIAAAAIgBAAIAAAAIAAAAIAAAAIgBAAIgBAAIgFgEQgEgFgGgEIgBgCIAAgBQgEgCgCgEIgBgCIgDgIIgCgDQgCgEgDgCQgFgDgFgBIgEAAIgBAAIgBAAIAAAAIgBAAIgHgBQgCAAgCgDIgCgEIgDgGIgBAAQgCgGgGgCQgEgDgFAAIgKAAIAAAAIgBAAIgEgBIAAAAIAAAAIgBgBIAAAAQgEgBgDgDIgBgBIgBAAIgCgBQgOgFgMAAIAAAAIgBAAQgMAAgIAGIAAAAIgBAAIABAAIAAAAQAIgGAMAAIABAAIAAAAQAMAAAOAFIACABIABAAIABABQADADAEABIAAAAIABABIAAAAIAAAAIAEABIABAAIAAAAIAKAAQAFAAAEADQAGACACAGIABAAIADAGIACAEQACADACAAIAHABIABAAIAAAAIABAAIABAAIAEAAQAFABAFADQADACACAEIACADIADAIIABACQACAEAEACIAAABIABACQAGAEAEAFIAFAEIABAAIABAAIAAAAIAAAAIAAAAIABAAIAAAAQABAAAAAAQAAAAABAAQAAAAABABQAAAAAAABIACACIAEABIABAAIABAAIABAAIAAgBIACAAIAAAAIABAAIABAAgAgVAZIABACQABAJAHAGIAEAEIAGAIIgGgIIgEgEQgHgGgBgJIgBgCIAAgBIAAAAIAAAAIAAAAIAAAAIAAAAIgBAAIgBAAIAAAAIgBAAIgFABIgDABIAAAAIAAAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBIAAAAIgCgCIgDgFIgBgCIgBgBIgCgBIgBAAIAAAAIgBAAIgBABIgDABIgEACIgFABIgCAAQgHgCgBgHIgCgHQgCgCgFgCIgBAAIgGgBIgBgBIAAAAIgEABIAAAAIgBAAIgIADIAIgDIABAAIAAAAIAEgBIAAAAIABABIAGABIABAAQAFACACACIACAHQABAHAHACIACAAIAFgBIAEgCIADgBIABgBIABAAIAAAAIABAAIACABIABABIABACIADAFIACACIAAAAQABABAAAAQABAAAAAAQABABAAAAQABAAABAAIAAAAIAAAAIADgBIAFgBIABAAIAAAAIABAAIABAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAABgAgVA0IgBgBIAAAAIABABgAgaAtIADAFIABABIgBgBIgDgFQgBgEgEAAIAAAAIAAAAIgBAAIAAAAIgFgBIgDgBQgDgBgCgCIgBgCIgDgFIgBgBIgBAAIAAAAIAAAAIgGACIgBAAIgKAEIgCABIAAAAIgBAAIAAAAIgBAAIgEgBIgCgCIgCgCIgBgCIgEgHQgDgEgFgBIAAAAIgBAAIAAAAIgBAAIAAAAIgGAAQgJAAgHgFIgBABIgBABIgCABQgLAKgMABIgBAAIAAAAQgHAAgGgEQAGAEAHAAIAAAAIABAAQAMgBALgKIACgBIABgBIABgBQAHAFAJAAIAGAAIAAAAIABAAIAAAAIABAAIAAAAQAFABADAEIAEAHIABACIACACIACACIAEABIABAAIAAAAIABAAIAAAAIACgBIAKgEIABAAIAGgCIAAAAIAAAAIABAAIABABIADAFIABACQACACADABIADABIAFABIAAAAIABAAIAAAAIAAAAQAEAAABAEgAAtAtIAGADIgGgDIgFAAIgEABIgCAAQgDAAgCgDIgDgHQAAgDgDgCIgDgBIgBAAIAAAAIgBAAIgBAAIAAAAIgCAAIgBAAIAAAAIgBAAIgBAAIAAAAIgCAAQgDgCgCgDIgBgEIgDgDIgDgCIgBgCQgCgCAAgEIAAgGIAAgDIgBgDIgCgDQgFgDgEgBIgFgCQgFgBgEgDIgDgDQgCgFAAgGIAAgBIAAgBIAAgBIgBgDIAAAAIgBgBIgBAAIgCAAIAAAAIAAAAIgBAAIgEgBQgFAAgEAEIgEACIgBAAIgBABIAAAAIgCgBIgEgDIgCgCQgDgDgCgEQACAEADADIACACIAEADIACABIAAAAIABgBIABAAIAEgCQAEgEAFAAIAEABIABAAIAAAAIAAAAIACAAIABAAIABABIAAAAIABADIAAABIAAABIAAABQAAAGACAFIADADQAEADAFABIAFACQAEABAFADIACADIABADIAAADIAAAGQAAAEACACIABACIADACIADADIABAEQACADADACIACAAIAAAAIABAAIABAAIAAAAIABAAIACAAIAAAAIABAAIABAAIAAAAIABAAIADABQADACAAADIADAHQACADADAAIACAAIAEgBIADAAIACAAgAiHAsIAMgBIAAAAIABAAIAEgBIAEAAIABAAIAAAAQAEAAABABQgBgBgEAAIAAAAIgBAAIgEAAIgEABIgBAAIAAAAIgMABIgBAAIAAAAQgUAAgLgQIgBAAIABAAQALAQAUAAIAAAAIABAAgAA7AjIAAAAIgBAAQgIgBgGgBIgCgBIgFgCIgDgHIgBgCIgDAAIgBAAIAAAAIgBAAIgCAAIAAAAIgFgCIgBgBIgEgCQgDgEgCgEQgBgHAAgEIAAgGIAAgCIAAgBQgBgFgEgEIAAAAIgDgBIgBAAIAAAAIAAAAIAAAAIgBgBIgIgEIgDgBQgDgEgBgFIgCgLIgBgDQgDgFgFgDIgCAAIgBgBIgBAAIgBAAIgGACIAAAAIgBAAIAAAAIAAAAIgBAAIAAAAQgEgBgDgCQADACAEABIAAAAIABAAIAAAAIAAAAIABAAIAAAAIAGgCIABAAIABAAIABABIACAAQAFADADAFIABADIACALQABAFADAEIADABIAIAEIABABIAAAAIAAAAIAAAAIABAAIADABIAAAAQAEAEABAFIAAABIAAACIAAAGQAAAEABAHQACAEADAEIAEACIABABIAFACIAAAAIACAAIABAAIAAAAIABAAIADAAIABACIADAHIAFACIACABQAGABAIABIABAAIAAAAgABIAXQgHgBgHgDIgBAAIAAAAIAAAAIgBgBIgBAAIgBgCIAAgCIABgBIACgDQAEgGABgEIABgBIgBgBIgDgDIgFgDIgLgFIgDgBQgEgFAAgFIABgEIABgEIACgIIAAgBIAAgBQgEgFgHAAIgGgCIgCgBQgCgDAAgCIABgDIABgCIACgCIABgBIgBgDQgBgFgFgBIgDgBIgEAAQgBAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBIABgBIAAAAIAAgCQAAgGABgGIABgEIABgDIABgBQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBgBAAIgFgEQgDgCAAgEIAAgCQABgEADgDIgBAAQgEACgEAAIAAAAIgBAAQgLAAgLgHIgCgBIgBgBIgCgBIgQABIAAAAIAAAAQgUAAgOgKIgBgCIABACQAOAKAUAAIAAAAIAAAAIAQgBIACABIABABIACABQALAHALAAIABAAIAAAAQAEAAAEgCIABAAQgDADgBAEIAAACQAAAEADACIAFAEQABAAAAABQABAAAAABQAAAAAAABQABAAAAABIgBABIgBADIgBAEQgBAGAAAGIAAACIAAAAIgBABQAAABABAAQAAABAAAAQAAABABAAQAAAAABAAIAEAAIADABQAFABABAFIABADIgBABIgCACIgBACIgBADQAAACACADIACABIAGACQAHAAAEAFIAAABIAAABIgCAIIgBAEIgBAEQAAAFAEAFIADABIALAFIAFADIADADIABABIgBABQgBAEgEAGIgCADIgBABIAAACIABACIABAAIABABIAAAAIAAAAIABAAQAHADAHABgAAmAOIABgDQAAgIgFgEIgCgEIAAAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQgBAAAAAAIgBAAIAAAAIgBAAIAAAAIgBAAIgCABIAAAAIAAAAIAAAAIgBgBIAAAAIgBgBIgBgEIAAgBIAEgMIABgDIAAgCIAAgCQgCgFgGgBIgIgBQgFgBgEgCIgBgCIgCgBQgEgGAAgGIAAgCIAAgCIAAgCIAAgDIgBgKIAAgBIAAgCQgBgHgGgCIgBgBIgDAAIgMgCIAMACIADAAIABABQAGACABAHIAAACIAAABIABAKIAAADIAAACIAAACIAAACQAAAGAEAGIACABIABACQAEACAFABIAIABQAGABACAFIAAACIAAACIgBADIgEAMIAAABIABAEIABABIAAAAIABABIAAAAIAAAAIAAAAIACgBIABAAIAAAAIABAAIAAAAIABAAQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAABIAAAAIACAEQAFAEAAAIIgBADgABFgIIADADIADADQAGACADAGQgDgGgGgCIgDgDIgDgDIAAAAQAEgCAGgBIACgBIAAAAIAAgCIAAAAIgBgCIgCgDIgDgCIgGgCIgCgBIgBgDIABgDIADgDIAFgDIACgBQgBgDgDgBIgMgCIgEgBQgEgBgDgDIgCgEIgBgDQAAgIAEgHIABgCQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAIgDgDIgLgJIgEgFIgFgPIAAgDIAAgEIAEgPIAAgCIgBgEIgEgEIAAgBIgBAAQgHgGgGAAIgBAAIAAAAQgHAAgEAJIAAABQgJgWgXgCQAXACAJAWIAAgBQAEgJAHAAIAAAAIABAAQAGAAAHAGIABAAIAAABIAEAEIABAEIAAACIgEAPIAAAEIAAADIAFAPIAEAFIALAJIADADQAAAAAAABQABAAAAABQAAAAABABQAAAAAAABIgBACQgEAHAAAIIABADIACAEQADADAEABIAEABIAMACQADABABADIgCABIgFADIgDADIgBADIABADIACABIAGACIADACIACADIABACIAAAAIAAACIAAAAIgCABQgGABgEACIAAAAgAhlAAIAAgBQgOgHgMAAIgBAAIAAAAQgIAAgHADQAHgDAIAAIAAAAIABAAQAMAAAOAHIAAABIAAAAgABYgbQABAHAEAFIAHAIIgHgIQgEgFgBgHIAAgBIAAgCIADgDIADgEIACgEIAAgBIAAgCQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAgBAAIgDgDIgFgBIgBAAIgDAAIgBAAIAAAAIAAAAIgBgBIAAgBQgEgHAAgIIABgDIAAgEIAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBAAAAgBIgCgBIgCgCIgFgCIAAgCIABgBQACgFAEgDQAEgEACgEIAAgCIAAgBQgBgDgDgBIAAAAIAAAAIgBABIgEABIgDABIgBAAIgCgDIAAgDQAAgEACgEQACgDABgEIAAgBIAAAAIgCgBIgFAAIgEACIgEAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAgCIAAgBIAAgCIAAAAIAAAAIAAACIAAABIAAACQAAAAAAABQAAAAABAAQAAABAAAAQABAAAAABIAEAAIAEgCIAFAAIACABIAAAAIAAABQgBAEgCADQgCAEAAAEIAAADIACADIABAAIADgBIAEgBIABgBIAAAAIAAAAQADABABADIAAABIAAACQgCAEgEAEQgEADgCAFIgBABIAAACIAFACIACACIACABQAAABABAAQAAAAAAABQAAAAAAAAQAAABAAAAIAAABIAAAEIgBADQAAAIAEAHIAAABIABABIAAAAIAAAAIABAAIADAAIABAAIAFABIADADQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAIAAACIAAABIgCAEIgDAEIgDADIAAACIAAABgABlg2IABALQACAJAFAIQgFgIgCgJIgBgLIAAgBQAAgFgDgFIgBgBIAAgBQAFgBAFgEIAEgDIABgCIAAgBIgBgDQgBgEgDgDIgDgDIgDgDQAAAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIABgDQACgGAHAAIAAAAIABAAIADgBIABgBIABAAIAAAAIAAAAIABAAIAAgCIgBgCIgBgDIgCgDIgDgDQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAgBIACgDIAAgBIAEgCIACAAIABAAIAAAAIAEAAIAAAAIACAAIABgBIABgBQACgDAAgEIgBgFQgEgGgBgGQABAGAEAGIABAFQAAAEgCADIgBABIgBABIgCAAIAAAAIgEAAIAAAAIgBAAIgCAAIgEACIAAABIgCADIAAABQAAABAAAAQAAAAAAABQABAAAAABQAAAAABAAIADADIACADIABADIABACIAAACIgBAAIAAAAIAAAAIgBAAIgBABIgDABIgBAAIAAAAQgHAAgCAGIgBADQAAAAAAABQAAAAAAABQABAAAAABQABAAAAAAIADADIADADQADADABAEIABADIAAABIgBACIgEADQgFAEgFABIgCABIACAAIABABQADAFAAAFIAAABIAAAAgAB6gnIAEAGQACAEAFAAQgFAAgCgEIgEgGIgBgEIAAgBIACgGQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAgBIACAAIABAAIABAAIAAAAIABAAIAEABIACAAIACgBQADgHABgHQgBgDgCgCIgCgEIgBAAIAAgBIADgEIAEgGIADgCQADgCAAgDIgCgRIgCgKIAAgPIAAgFIgBgIIADgBIAAAAIABgBIABAAIAAAAIABABIAAAAIABAAIABAAIABgDQAAAAAAgBQgBgBAAAAQAAgBAAAAQgBgBAAAAIgDgDIgMgEIAMAEIADADQAAAAABABQAAAAAAABQAAAAABABQAAABAAAAIgBADIgBAAIgBAAIAAAAIgBgBIAAAAIgBAAIgBABIAAAAIgDABIAAAAIgGACQgGACgCAGIgBABIAEACIABABQADACAAADIgBADIgCADIgHAEIgDACIAAABIAAAAIAHAIQADACAAAEQAAAHgFAFIgDABIgJAFQgDACAAAEIABAEIABADQACAEAAAEIAAADIgBABIgCACIgDAEIgCAFIAAABQAAAFABADQACAEADADQgDgDgCgEQgBgDAAgFIAAgBIACgFIADgEIACgCIABgBIAAgDQAAgEgCgEIgBgDIgBgEQAAgEADgCIAJgFIADgBQAFgFAAgHQAAgEgDgCIgHgIIAAAAIAAgBIADgCIAHgEIACgDIABgDQAAgDgDgCIgBgBIgEgCIABgBQACgGAGgCIAGgCIAAAAIABAIIAAAFIAAAPIACAKIACARQAAADgDACIgDACIgEAGIgDAEIAAABIABAAIACAEQACACABADQgBAHgDAHIgCABIgCAAIgEgBIgBAAIAAAAIgBAAIgBAAIgCAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAABgBAAIgCAGIAAABIABAEgACcglIAAgBIAAABgACZgsIABABQAAADACACIgBgBIgBgCIAAgCIgBgBIAAAAIAAgBIAAAAIABgBIgBABIAAAAIAAABIAAAAgAh+gtQAAABABAAQAAABABAAQAAAAABAAQAAAAABAAQADAAADgCIABAAIAAgBIAAAAQALgGAJgBIABAAIAAAAQALABAJAGIAAABIAAgBQgJgGgLgBIAAAAIgBAAQgJABgLAGIAAAAIAAABIgBAAQgDACgDAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQgDgDAAgFIAAgCIAAACQAAAFADADgAg1g8IAGgBIABAAIgBAAIgGABIAAAAIgCAAQgMgBgLgJIgCgBIgKABIAAAAIAAAAQgTAAgPgOIAAAAIgBAAIAAgBIgBgBIABABIAAABIABAAIAAAAQAPAOATAAIAAAAIAAAAIAKgBIACABQALAJAMABIACAAIAAAAgACZhKIgEAFIAEgFIAAgDIAAgEIgBgCIADgBIAEgCIACgDQACgDAAgDIgBgEIgEgHIAFgEQAEgCAAgDIgBgEIgCgCQgEgFAAgGIAAgDIABgBIAEgCQADgBABgCQACgDABgFQgBAFgCADQgBACgDABIgEACIgBABIAAADQAAAGAEAFIACACIABAEQAAADgEACIgFAEIAEAHIABAEQAAADgCADIgCADIgEACIgDABIABACIAAAEIAAADgAgehbIgRgNIAAAAIAAABIAAAAIAAAAIgBAAQgFAHgGAAIAAAAIgBAAQgGAAgHgIIgBgBIAAAAQgHgHgNAAIAAAAIAAAAIgBAAIgBAAIABAAIABAAIAAAAIAAAAQANAAAHAHIAAAAIABABQAHAIAGAAIABAAIAAAAQAGAAAFgHIABAAIAAAAIAAAAIAAgBIAAAAIARANgABXhhIgEAGIAEgGQACgFAAgEIAAAAQAAgEgEgDIgBgCQAAgDACgCIAFgGIADgFIABgBIgBAAIgBgBQgFgBAAgFIAAAAIAAgBQAAgEADgDIACgEIABgCIAAgBIgBgDQgDgFgEgDQgSgIgYgGQAYAGASAIQAEADADAFIABADIAAABIgBACIgCAEQgDADAAAEIAAABIAAAAQAAAFAFABIABABIABAAIgBABIgDAFIgFAGQgCACAAADIABACQAEADAAAEIAAAAQAAAEgCAFgAA0iIQAAgBAAgBQgBAAAAgBQAAAAgBAAQAAgBgBAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAABgAAticIAEAQIAAAAIAAAAIAAAAIgEgQIAAgBIgBgBQgFgQgNAAIAAAAIgBAAQgHAAgLAGIAAAAIgCABIACgBIAAAAQALgGAHAAIABAAIAAAAQANAAAFAQIABABIAAABIAAAAgACSiVIAAAAg");
	this.shape_5.setTransform(30.8,20.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0000FF").s().p("AiFFHQglgPgQghQgRgiABgmQAAglAHgkIAGgXIAYAFIAIABQAJAAAJAGIAEABQAbACAaAFIAFACIACAAIANACIAMAAIANAAIAlgCIAGAAIAWgCQAPgBANgEIAFgBIAPgCQAQgDATAAQAHAAACgFIADgBIADgBIAKgCQACAAADgCQAFgEAHAAQADABADgCQgHAhgSAdIgEAFIgEAFQgQgLgWgCQgmgDgmAKQgkAKgZAZQgZAagUAjQgSAjAOAnIgjgNgAgGhJIgEgWQgFgagQgRIAEgHQAFgQADgUQACgTgDgUQgDgTgIgQQgHgOgOgOIgHgGIgLgJIgdgZIAAgBIAAAAIAZgPIAqApIAIAJIADAEIALASIAAACIABABIAEAKQAFAQAEARQAEARAZgGQATgEASgGIAggNQANgGAJgGQAAgOgHgMQgHgLgKgHIgDgCIgGgDIgBgBIgDgDIgRgSIAAAAIAAAAIAAAAIAAAAIAAAAIgVgJIASAIIgJgFIAXAHIAIAEIAPAIIAHAFQAHAEAFAFQAFAGADAGQAHAOATAHQASAHANANIAPANIgBA+QgRAbgbAQQgcARgiALQggAKgbAZQgagJgRgJgAB8j1IAIgDgAhjlEIgBAAIABAAg");
	this.shape_6.setTransform(40.6,76.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CE9F6E").s().p("AkzIxIgMgXQgJgQgLgaQgQAEgOAHQgkARgcAVQgggoAbgWQAYgTAcgSQAcgRAegRIA/gkQAcgQAlgCQAogBAYAVQAYAWAPAdIAigMQgngTgpgnQgPgnATgjQATgjAZgaQAZgaAmgJQAkgKAnADQAWABAQALQgFAFgHABQAiAQAgAWIAFADQAdATAiAMQAkAOAkAQQAjAPAeAUQAcASAYAbQAZAdAFAjIABAFIgBgFQgFgjgZgdQgYgbgcgSQgegUgjgPQgkgQgkgOQgigMgdgTIgFgDQgggWgigQQAHgBAFgFIAEgFIADgFIBFAcIA9AaQAlAPAmAJQAkAJAdAPQAfARAcAWQAcAXAFAlQAGAsghAWQAFAlgVAcQgUAbgjALQgiALgqACQgjACglgGIhIgLQglgHgngCQgngDgjgNIgRgFIg2gSQgigMgjgGIgCgBIgDAAQgRgDgSAAIgBAAIAAAAQgOAAgOACIgCAAIgDAAQglAFgjACQgSABgRAEQARgEASgBQAjgCAlgFIADAAIACAAQAOgCAOAAIAAAAIABAAQASAAARADIADAAIACABQAjAGAiAMIA2ASQgTgEgWAHQgiAMgkAKQghAKgogDQgRgBgGAJQgJARgSAAIgBAAQgaAAgLgSgAB9GEQAiAAAiAKQAlALAhAWQAQAKAIAOQgIgOgQgKQghgWglgLQgigKgiAAIgHAAIgBAAIAAAAQgiAAgiAEQgmAEgkAKIgmALIAmgLQAkgKAmgEQAigEAiAAIAAAAIABAAIAHAAgAhfCaIgNgBIgMgBIgDgBIgFgBQgagFgagCIgEgBQgJgGgKgBIgHgBIgZgFQAHgVAMgTQAUgfAngXQAMAPAKAOQARAaAfAXIACACQASANARAAIABAAIAAAAQAOAAAOgIQAKgGAXgFQAZgFAdgRIAqgZQAOgJADgCQgEAigHAlQgEACgCAAQgIAAgFADQgCACgDAAIgKACIgCABIgDACQgDAFgHAAQgSAAgRADIgPACIgFABQgLADgOABIgXACIgHABIgmACIgGAAIgGAAgAgyCAQgRAAgSgNIgCgCQgfgXgRgaQgKgOgMgPIgTgWQgWgWgPgbQgQgbgHgjQgHgmAGgkQACgMADgKQAFgNAHgMIAKgQIAJgPIAUgUIAJgKIAbgaIAAABIgBAAIABgBIgBACIACgBIgCABIAAgBIABAAIABAAIAdAZIALAKIAGAGQAPANAHAOQAIAQACAUQADATgCAUQgCAUgGAQIgDAGQAQASAEAZIAEAXIALA1IgLg1QAUAJAaAIQgUASgPASQAPgSAUgSQAZgYAfgLQAigLAdgRQAagQASgbIABg9IAAgdIABgTQABgSgIgUQgHgVABgUQAAgNAGgBQAEAAAFADQAOAKAJAKQAJAJgEAWQgCAMABAjQAsgXAPgXQAPgWANgHQAOgGADAAQAEgBADABQALAEgEAKQgDAKgGAEIgXATIgiAfQgLALgKANQgBAFAGADQAVgCAHgGIAVgNIAPgKIATgZQADgEAIAAQAJgBACASQACARgPANQgDAFgSAJIgpAVQAqAAARgJIAMgGIAAAAQAZgVAEAJQAEAIgFAPQgEAOgNAHQgNAGgLACQgaAGgkAAQBLAHgBAFQgBAFgEAFQgEAFgdgBIgkgBQgDAPgGAQQgOAigTAaQgSAagXAZQgVAZgVAVQgDACgOAJIgqAZQgdARgZAFQgXAFgKAGQgOAIgOAAIAAAAIgBAAgAgzAKIAKgKIAAAAIAAAAIgKAKIAKgKIgKAKgAgpAAIAAgBIAAABIAAAAgADnifQgEgFgCgHQACAHAEAFgADfi8IgPgVIAPAVgACyjaQABgSAJgIQgJAIgBASgAEzjsQgEAAgDgEQADAEAEAAgAEXkkQgJAAgCgKQACAKAJAAgAgpAAgAgpAAIAAgBIAAABgAgojLQgEgQgHgRIgEgKIAAgBIgBgBIgLgTIgCgDIgJgKIgpgpQADgFAAgFQAAgKgFgJIgDgIIgDgFIAAgBIAAgBIABgEQADgFgCgEIgCgLIAAgBIABABQAIAEAIADIABAAIAHABIAAAAIABAAIAHgBIABgBQAKgCAHgFQAFgDgBgEQABAEgFADQgHAFgKACIgBABIgHABIgBAAIAAAAIgHgBIgBAAQgIgDgIgEIgBgBQgHgEgCgJQgCgIACgJQADgKAFgIQACgEAEgBQAHgDAGAAIAGABQAEAAADACIgEgMQAAAAAAgBQAAAAABgBQAAAAAAAAQAAAAABAAIACAAIAEABIADgCQACgDgDgEIAAgBIgBgFIAAgCQACgGADgEIACgEQACgGAFgCIADgBIADgBIABgBIABgBIAHgQIACgCIACgCIAEgDIAFgGQACgGAEgEQAEgFAGgEIABAAIACgBIAFgEQADgBAEgEIABgCIAEgCIAFABQADgDADAAIABAAIABgFQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAIABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAIABABQAEACACgDIACgEQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAAAgBgBIgBAAIgBgDIAJAJIAGAKIAEAHQAFAJAFAGQADADADACIgCACIgBABIgCgCIgQgKQgIgFgJgBQgFgBgBAEQgDAJAEALQABAJAHAHQAHAHAIAEQAJAGAHgFQAIgGABgKIAAAAQAAgIgEgEIgEgFIABgBIACgCQAEACAGgBQAHAAAFgEQAJgFAHAJQAGAIgBAJQAAAEgCADIgGAKQAFAHADAJIAEANQACAJgBAIIgCAHQgFgFgDgGIgPAKIgPALQgHAFgJAEIgGAFIgBAAIgCAAQgKACgJgDQgJACgBALQgBAIAFAFIAKAEIABABIARAIIARAIIAIADQAAAJgFAJQgFAIgIAFIgQAJIgSAIQgHAFgHADIgEABQgGADgHAAIgBAAIgBAAIgBAAIgBAAQgGgBgGgDIAAAAIAAAAIgDgBQgGgEgFgFQAFAFAGAEIADABIAAAAIAAAAQAGADAGABIABAAIABAAIABAAIABAAQAHAAAGgDIAEgBQAHgDAHgFIgDARIAUAIIABAAIARASIADAEIABABIAFADIADACQAKAHAHAKQAIANAAANQgJAHgNAGIghAMQgSAHgRAEIgKABQgPAAgEgNgAhxmhQADAHAHACQgHgCgDgHIgBgEQAAgFAIgBIABAAIAAAAQAJAAAGAHIABABIgBgBQgGgHgJAAIAAAAIgBAAQgIABAAAFIABAEgAhdmzIAAAAQABgFgEgDQAEADgBAFIAAAAg");
	this.shape_7.setTransform(45.2,74.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AAAAAIAAAAIAAAAg");
	this.shape_8.setTransform(85.7,47.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(22));

	// Layer 3
	this.instance = new lib.static_ball("synched",0);
	this.instance.setTransform(84,38.7,1,1,0,0,0,23.1,23.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).to({rotation:360,y:4.7},9,cjs.Ease.get(-1)).to({rotation:720,y:38.7},10,cjs.Ease.get(1)).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-0.4,109,133.8);


(lib.DiagramSUBJECT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{SUBJECT:82});

	// timeline functions:
	this.frame_2 = function() {
		playSound("thesubjectanswerswhoorwhatinfrontoftheveb2");
	}
	this.frame_55 = function() {
		playSound("ball_bounce");
	}
	this.frame_66 = function() {
		playSound("rhodes_f9_chord");
	}
	this.frame_82 = function() {
		playSound("whoorwhat2");
	}
	this.frame_100 = function() {
		playSound("diagnal_line");
	}
	this.frame_117 = function() {
		playSound("buffy");
		playSound("cowbell_3times");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(53).call(this.frame_55).wait(11).call(this.frame_66).wait(16).call(this.frame_82).wait(18).call(this.frame_100).wait(17).call(this.frame_117).wait(44));

	// pen
	this.pen = new lib.anim_pencil();
	this.pen.setTransform(31.9,-28.2);

	this.timeline.addTween(cjs.Tween.get(this.pen).to({regX:-7.2,regY:352,x:-490.4,y:577.4},4).to({x:-27.9,y:583.8},10).to({x:-378.4,y:472.3},5).to({y:652.6},6).to({x:-173.5,y:474.1},5).to({x:-172,y:583.8},7).to({x:27.8,y:370},7).to({_off:true},1).wait(116));

	// textClips
	this.instance = new lib.Wordswho();
	this.instance.setTransform(-431.6,524.5,1,1,0,0,0,51.8,10.4);

	this.instance_1 = new lib.Wordsverb();
	this.instance_1.setTransform(-261.9,430.1,1,1,0,0,0,50.7,14.6);

	this.instance_2 = new lib.Wordscomplement();
	this.instance_2.setTransform(-86,430.1,1,1,0,0,0,50.7,14.6);

	this.instance_3 = new lib.Wordssubject();
	this.instance_3.setTransform(-434.9,431.8,1,1,0,0,0,50.7,19.7);

	this.instance_4 = new lib.SentencesSUBJECT();
	this.instance_4.setTransform(-248.6,711.4,1,1,0,0,0,50.7,14.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},66).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},16).to({state:[{t:this.instance_3},{t:this.instance},{t:this.instance_4},{t:this.instance_2},{t:this.instance_1}]},18).to({state:[{t:this.instance_3},{t:this.instance_4},{t:this.instance_2},{t:this.instance_1}]},13).wait(48));

	// TEXT
	this.instance_5 = new lib.header();
	this.instance_5.setTransform(-255.7,357.8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2).to({_off:false},0).wait(159));

	// images
	this.sitClip = new lib.anim_buffy_toss();
	this.sitClip.setTransform(-435.7,526.5,0.801,0.801,0,0,0,48.7,66.2);

	this.instance_6 = new lib.Wordsbuffy();
	this.instance_6.setTransform(-433,520.8,1,1,0,0,0,73.5,22.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.sitClip}]},100).to({state:[{t:this.instance_6}]},17).to({state:[{t:this.sitClip}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.sitClip}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.sitClip}]},2).wait(34));

	// ball
	this.instance_7 = new lib.static_ball("synched",0);
	this.instance_7.setTransform(-575.8,582.1,1.911,1.911,0,0,0,23.1,23.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(45).to({_off:false},0).to({scaleX:0.43,scaleY:0.43,guide:{path:[-575.8,581.9,-567.2,567.3,-556.7,551.4,-546.9,536.6,-536.8,521.3,-526.2,505.2,-513.6,492.2,-500.9,479.1,-482.8,474.2,-463.9,469,-443.8,469.4,-424.9,469.9,-407.7,476.6,-389,483.9,-373.7,494.3,-357.5,505.3,-343.2,520.3,-330.7,533.3,-318.9,545.9,-306.6,559.1,-293.5,573.6,-281.7,586.9,-270.7,600.7,-259.2,615.1,-252.9,630.9,-249.9,638.4,-247.1,644.8]}},11,cjs.Ease.get(-1)).to({scaleX:10.23,scaleY:10.23,guide:{path:[-246.9,644.8,-246.9,644.9,-246.8,644.9,-246.9,625.9,-250.2,607.8,-253.7,588.6,-253.4,568.9,-253,548.9,-254.6,529.9,-256.3,510.8,-254,491.1,-251.8,473,-249.9,454,-247.9,434.8,-246.9,415.9,-245.8,396.9,-245,378,-244.5,368.7,-223.1,115.1]}},7,cjs.Ease.get(1)).to({_off:true},1).wait(97));

	// right bar
	this.instance_8 = new lib.static_bar();
	this.instance_8.setTransform(-166.2,471.3,0.882,0.391,0,0,0,0.1,-1.2);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(30).to({_off:false},0).to({scaleX:1.18,scaleY:45.6,x:-164.7,y:465.4},7).wait(124));

	// left bar
	this.instance_9 = new lib.static_bar();
	this.instance_9.setTransform(-371.1,469.4,0.882,0.391,0,0,0,0.1,-1.2);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(19).to({_off:false},0).to({scaleX:1.18,scaleY:75.63,y:465.7},6).wait(136));

	// line1
	this.instance_10 = new lib.static_line("synched",0);
	this.instance_10.setTransform(-483.2,574.5,0.02,2.236,0,63.4,0,162.5,0.1);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(4).to({_off:false},0).to({regX:164,regY:1.6,scaleX:2.8,skewX:-116.6,x:-22,y:579.3},10).wait(147));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(31.8,-28.2,328.3,349.3);


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
(lib.subject_scene2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene2:0,scene2repeat:140});

	// timeline functions:
	this.frame_0 = function() {
		this.btn_menu.addEventListener("click", openMenu.bind(this));
		this.btn_goNext.addEventListener("click", openNext.bind(this));
		this.btn_goBack.addEventListener("click", openPrev.bind(this));
		
		
		function openMenu(){
		
		 window.open ("../menu/menu.html","_self");
		}
		
		
		function openNext(){
		
		 window.open ("subject_scene3.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("subject_scene1.html","_self");
		}
	}
	this.frame_156 = function() {
		this.gotoAndPlay("scene2repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(156).call(this.frame_156).wait(1));

	// Scene
	this.instance = new lib.DiagramSUBJECT();
	this.instance.setTransform(444.4,-3.1,1,1,0,0,0,-79.7,340.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(157));

	// Main
	this.instance_1 = new lib.Background("synched",0);
	this.instance_1.setTransform(275,195.5,1.069,1.05);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(157));

	// buttons
	this.btn_menu = new lib.skiptomenu();
	this.btn_menu.setTransform(514.1,20.3);
	new cjs.ButtonHelper(this.btn_menu, 0, 1, 2, false, new lib.skiptomenu(), 3);

	this.instance_2 = new lib.Copyright("synched",0);
	this.instance_2.setTransform(275,393.5);

	this.btn_goBack = new lib.goNext();
	this.btn_goBack.setTransform(57.6,352.3,1,1,0,0,180);
	new cjs.ButtonHelper(this.btn_goBack, 0, 1, 2, false, new lib.goNext(), 3);

	this.btn_goNext = new lib.goNext();
	this.btn_goNext.setTransform(494,352.3);
	new cjs.ButtonHelper(this.btn_goNext, 0, 1, 2, false, new lib.goNext(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_goNext},{t:this.btn_goBack},{t:this.instance_2},{t:this.btn_menu}]}).wait(157));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(284.2,-172.2,875.1,775.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;