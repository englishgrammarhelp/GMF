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
		{src:"sounds/asneakysam.mp3", id:"asneakysam"},
		{src:"sounds/bubfloppeddownthelargedrifting.mp3", id:"bubfloppeddownthelargedrifting"},
		{src:"sounds/wrong_answer.mp3", id:"wrong_answer"},
		{src:"sounds/diagnal_line.mp3", id:"diagnal_line"},
		{src:"sounds/High_Screaming_Gtr.mp3", id:"High_Screaming_Gtr"},
		{src:"sounds/inserted_word_appears.mp3", id:"inserted_word_appears"},
		{src:"sounds/mickrapidlyrolled.mp3", id:"mickrapidlyrolled"},
		{src:"sounds/right_answer.mp3", id:"right_answer"},
		{src:"sounds/rhodes_f9_chord.mp3", id:"rhodes_f9_chord"},
		{src:"sounds/rhodes_f_note.mp3", id:"rhodes_f_note"},
		{src:"sounds/rhodes_low_f_note.mp3", id:"rhodes_low_f_note"},
		{src:"sounds/synth_brass_4times.mp3", id:"synth_brass_4times"}
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



(lib.text_wildly = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhEA5QgDgEAAgFQgBgFADgDQAGgGAqgPIASg8IACgIQABgEAAgCQAEgEAFAAQAFAAADAEQAFAEgBAFQgDAVgMAhIAagIQANgEAMgDQAHgCAEAFQAEADABADQAAAFgEAEIgFADIhAAXQgYAIgOAGIgQAIIgGABQgFAAgDgDg");
	this.shape.setTransform(38.9,43.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgyAzQgEgEAAgEQAAgFAEgEIBUhUQAEgEAEABQAFAAADAEQAEAEAAAEQABAEgEAEIhRBRQgGAGgGAAQgEAAgEgDg");
	this.shape_1.setTransform(36.4,37);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgYA3QgFAAgDgEQgFgEACgHQgHgBgFgEIgKgJQgOgOAAgQQgBgSAOgOQARgRAUgBQAUgBANAPQAFAFACAFQADAEABAFQAVgUAKgHQAIgGAHAHQAEADgBAFQABAEgEAEIgdAaIgcAXQgUAWgGAJIgCADQgDADgEAAIgBAAgAgVggQgKABgKAKQgHAHAAAKQAAAIAHAGQAFAFADACIAKABIAEAAIAVgVQACgGgCgFQgBgFgDgEQgJgJgJAAIgBAAg");
	this.shape_2.setTransform(31.5,33.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgyAzQgEgEAAgEQAAgFAEgEIBUhUQAEgEAEABQAFAAADAEQAEAEAAAEQABAEgEAEIhRBRQgGAGgGAAQgEAAgEgDg");
	this.shape_3.setTransform(25.4,26);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgwAuQgEgEAAgFQAAgFAEgDIALgMIALgLIAPgLIAMgOQAEgDAFAAQAEAAAEAEQADADABAFQAAAFgEADIgOAMIgNANIgLALIgLAMQgEADgEABQgFAAgEgEgAAngWQgGAAgEgEQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGABAEAEQAEAEAAAFQABAGgEAEQgEADgEAAIgCAAg");
	this.shape_4.setTransform(21.8,22.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgZA6QgIgIALgTQAEgIANgSIgFADIghAOQgEACgEgBQgGACgFgFQgEgDACgJQACgIAHgJQAFgKAWgeIAIgJQADgEAGABQAEAAAEAEQAEAGgCAJIgIAJIgHAKIgOASIAogVQALgFAHAHQAHAHgHALIgNASIgPAUIAwgbQAHgEAGAGQADADABAFQAAAFgDAEIgCABQgfASgbANQgFAEgKACIgCAAQgGAAgEgEg");
	this.shape_5.setTransform(14.6,17.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57.3,57.3);


(lib.text_verb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgZBCQgDADgFABQgFgBgDgDQgDgCAAgGIAAgGIAAgGIAAhiQAAgHADgEQAEgGAGAAQAJAAAAAKIAAADIAAAEIAAAiQAGgEAGgCQAGgBAEAAQAUgBANAPQAMANAAATQAAAVgOAOQgOAPgTAAQgMAAgLgFgAgJAAIgNAFIAAAmQAMAFAIAAQAKAAAHgIQAHgHAAgMQAAgLgGgHQgGgGgKAAQgDAAgGADg");
	this.shape.setTransform(36,15.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgiAtQgCgDAAgFIAAg4IAAgIIAAgIQAAgFADgDQADgDAGAAQAJAAACAKQAOgMASAAQASAAAAAXIAAAGQAAAOgMAAQgLAAAAgMIgBgIQgSADgIARIAAAqQAAAFgDADQgDAEgGAAQgGAAgDgEg");
	this.shape_1.setTransform(26.5,17.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgdAlQgOgLAAgTQAAgVALgQQANgQAVAAQAOAAALAEQANAHAAAOQAAAKgLAHQgEADgPAFIgcANQAEAFAGACQAGACAGAAQAMAAAHgFQAIgEAFAAQAIAAABAJQAAAKgPAHQgMAEgOAAQgTABgOgLgAgLgTQgFAFgEAKIAUgIIARgKQgGgDgJAAQgHAAgGAGg");
	this.shape_2.setTransform(16.8,17.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgSA+QgLgagNguIgHgXQgFgRAAgHQAAgEAEgEQAEgDAFAAQAIgBADAKIAEAPIAIAcIANArIATgzIAIgWQAFgMAGgHQAEgFAFABQAFgBAEAEQAEAEAAAEQAAAEgCAEQgFAHgEAJIgHASIgXA6QgEALgGALQgEAGgFABQgJAAgEgJg");
	this.shape_3.setTransform(5.9,15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.3,0,45.7,29.1);


(lib.text_the = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgJAvQgMgFgKgKQgPgOgCgRQgDgQAPgPQAPgPATgDQAUgDAPAQQALALAEAKQAFAOgKAIQgHAHgNgDQgGgBgPgGIgcgJQgBAEADAGQACAGAGAFQAIAJAIACQAIACADADQAGAHgGAGQgDAEgHAAQgDAAgHgDgAgMgVIASAIIAVAGQgCgHgHgGQgGgGgIAAQgGAAgKAFg");
	this.shape.setTransform(26.6,31);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAABNQgEAAgEgEQgGgGAFgIQADgHAGgKQAIgKAFgGIAFgEIAFgFIAFgFQADgEgDgDQgHgFgLAAIgSAEQgXAWgHACQgHADgFgFQgEgEAAgFQgBgFAEgDIAEgDIARgOIAogpIACgDIAKgJIAGgGIAFgGQADgEAFAAQAFABADADQAGAGgEAJQgDAFgHAIIgNAMIgMAMQAJAAAHADQAHACAGAGQALAKgBAKQgBAIgJAKIgPAQIgLANIgKAOIgCADQgDAEgEAAIAAgBg");
	this.shape_1.setTransform(19.1,22);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgsAuQgDgDgBgFQAAgFADgDIAHgHIAHgGIAfggIgKgMQgIgJAIgHQADgEAFAAQADABADADIAKALIAHgGIAFgHQAEgDAFAAQAFAAADADQAKAKgQAPIgFAFIAHAGQAHAHACACQADAHgGAFQgDAEgFAAQgFAAgEgEIgDgDIgDgDIgHgGIgdAiIgDADIgDAEQgJAIgHAAQgEAAgEgDg");
	this.shape_2.setTransform(13.7,15.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,44,44);


(lib.text_subject = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("AgGA9QgEgDAAgFIAAgKIAAgJIgCgsIgQgBQgLgBAAgKQAAgFAEgEQADgDAFAAIAPABIgBgJIAAgJQABgFADgDQADgEAFAAQALAAABAWIAAAIIAJgBQAKAAADABQAHADAAAIQAAAFgDADQgDADgGAAIgFAAIgDAAIgJABIABAsIAAAFIAAAFQAAAUgMAAQgDAAgDgDg");
	this.shape.setTransform(65.4,16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("AgaAmQgOgMAAgSQAAgQANgSQANgWASAAQAIAAANAFQAPAGAAAIQgBAEgDADQgCAEgGAAQgEAAgFgEQgFgEgKAAQgGAAgHANQgIANAAAIQAAAIAHAGQAGAFAJAAQAFAAAJgFQAIgEACAAQAGAAADADQADAEAAAEQAAAHgPAHQgNAGgIAAQgSAAgNgLg");
	this.shape_1.setTransform(56.4,17.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066FF").s().p("AgdAlQgPgLAAgTQAAgVANgQQANgQAUAAQAOAAALAEQANAHAAAOQAAAKgKAHQgGADgOAFIgcANQAEAFAGACQAGACAGAAQAMAAAHgFQAIgEAEAAQAJAAAAAJQAAAKgOAHQgNAEgNAAQgTABgOgLgAgLgTQgFAFgEAKIAUgIIARgKQgGgDgJAAQgHAAgGAGg");
	this.shape_2.setTransform(46.8,17.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0066FF").s().p("AgeA+IgBgGQAAgFADgEQAEgCAFAAQAGgBAEAHIAGALQADAGADAAQAEAAACgNIgEgwIgCgtQAAgFACgFQAEgEAFAAQAFAAAEACQAEADABAEIACAvIACA0QABANgJALQgIAMgNgBQgUAAgNgdgAADhEQgDgEAAgGQAAgFADgEQAEgDAGAAQAFAAAEADQAEAEABAFQgBAGgEAEQgEAEgFAAQgGAAgEgEg");
	this.shape_3.setTransform(37.4,17.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0066FF").s().p("AgZBCQgDADgFABQgFgBgDgDQgDgCAAgGIAAgGIAAgGIAAhiQAAgHADgEQAEgGAGAAQAJAAAAAKIAAADIAAAEIAAAiQAGgEAGgCQAGgBAEAAQAUgBANAPQAMANAAATQAAAVgOAOQgOAPgTAAQgMAAgLgFgAgJAAIgNAFIAAAmQAMAFAIAAQAKAAAHgIQAHgHAAgMQAAgLgGgHQgGgGgKAAQgDAAgGADg");
	this.shape_4.setTransform(29.3,15.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0066FF").s().p("AARArQgLAEgKAAQgNAAgIgFQgKgGgCgMQgDgVAAgQQAAgLADgPQABgKAKAAQAGABADADQAEACAAAGIgCALIgBANIABAUQABAJACAGIAEACIAEAAQAIAAALgDIAAgPIAAgNQAAgSACgNQABgLALAAQAFABADADQAEADAAAFIgCAeIAAAQIAAASIABAGIAAAFQAAAFgEADQgDADgFABQgIAAgDgHg");
	this.shape_5.setTransform(19.2,17.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0066FF").s().p("AguA5QgLgJAAgKQAAgGAEgEQADgDAGAAQAIAAADAIQAFALASAAQANAAAPgHQAOgHAAgIQAAgLgJgDQgHgDgRAAQgQgBgMgEQgPgGAAgOQAAgRASgOQASgPATAAQAJAAANAEQAPAFAAAHQAAAEgCAEQgEAEgFAAIgNgCIgNgCQgLAAgIAGQgLAFABAGQAAAEADACQADACAHABIATABQAUACAMAJQAMAJAAASQAAAXgaAMQgUAJgXAAQgWAAgNgKg");
	this.shape_6.setTransform(8.4,15.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,71.7,29.1);


(lib.text_sneaky = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhEA5QgDgEAAgFQgBgFADgDQAGgGAqgPIASg8IACgIQABgEAAgCQAEgEAFAAQAFAAADAEQAFAEgBAFQgDAVgMAhIAagIQANgEAMgDQAHgCAEAFQAEADABADQAAAFgEAEIgFADIhAAXQgYAIgOAGIgQAIIgGABQgFAAgDgDg");
	this.shape.setTransform(46,50.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgDBMQgFgBgEgDQgFgFACgHQADgJACgOIADgXIgOgCIgSAQQgDADgFABQgEgBgEgEQgJgIALgLIAPgMIAPgNIAVgVIATgUIAGgHIAGgGQAEgEAEAAQAFAAAEAEQADAEABAEQAAAFgEAEIgGAGIgGAHIgSARIgQASQANACAjgBQAFABAEADQADACAAAFQAAAFgDADQgDADgFAAQgPABgUgBIgDAdQgDAWgFAFQgDADgCAAIgBAAg");
	this.shape_1.setTransform(40.5,42.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgBA1QgFAAgDgEQgDgDgBgLIgOgGQgGgDgDgDQgPgPABgOQAAgPAQgQQAPgPAUAAQAWAAAPAQQAGAGAEALQAGANgFAFQgDABgDAAIgHAFIgJAJQgLALgEAHIgEAKIgDAIQgDADgCAAIgBAAgAgRgUQgIAIgCAIQgBAFAGAGQAEAEAFACQAFACAFABQALgQAHgGIAFgEIAHgGIgCgCIgBgCQgIgJgNAAQgLAAgJAJg");
	this.shape_2.setTransform(33.2,38.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgJAvQgMgFgKgKQgPgOgCgRQgDgQAPgPQAPgPATgDQAUgDAPAQQALALAEAKQAFAOgKAIQgHAHgNgDQgGgBgPgGIgcgJQgBAEADAGQACAGAGAFQAIAJAIACQAIACADADQAGAHgGAGQgDAEgHAAQgDAAgHgDgAgMgVIASAIIAVAGQgCgHgHgGQgGgGgIAAQgGAAgKAFg");
	this.shape_3.setTransform(26.1,30.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAAA8QgFAAgEgEQgIgIAHgHIAKgQIALgOIAGgFIAGgFIACgBIADgCQAFgFgCgCQgGgGgLACQgMACgMAHIgGAEIgGAFIgGAEIgGAFQgDAEgFAAQgFAAgEgEQgDgDAAgFQAAgFADgCIAFgGIAFgFIASgQIASgQIAFgGIADgGQAEgEAFABQAFAAADADQAJAJgKAKIAAABQASAAAKAKQAMAMgGAOQgDAIgNANIgFAEIgEAEIgLAOQgGAJgFAFQgDADgDAAIAAAAg");
	this.shape_4.setTransform(18.9,23.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgNAvQgMgEgMgMQgIgIgFgKQgGgNAHgEQAGgHAIAIQADADADAFQAEAIACACQANANAGgFQADgDgFgNIgJgXQgCgOAJgJQAKgNASAJQAKAFAQAQQAGAGABAFQACAGgGAFQgLAKgGgGQgGgEAEgGIgFgGQgPgPgEAEQgCADAFANQAHAQABAIQACAPgIAIQgIAIgIAAIgIgBg");
	this.shape_5.setTransform(12.8,16.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,64.4,64.4);


(lib.text_sam = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("AgGAyQgEgDAAgFIgCgdIgCgcIgBgJQgKAGgKAOIgCABIAAAaIAAAHIgBAGQAAAFgEADQgDACgFAAQgIAAgCgGQgCgFAAgJIAAgfIgBgNIAAgNQAAgIADgGQADgIAHAAQAFAAADAEQAEAEAAAEIgBAIQAOgPAMAAQANAAAEAKQAGgFAGgCQAHgDAHAAQASAAAGASQABADADAUIAGAuQAAAFgEADQgDADgFAAQgLAAgBgKIgEgZIgCgYQgDgQgDAAQgDAAgHAEIgKAHQAAAKACARQADATAAAKQAAAFgEADQgDAEgGAAQgDAAgDgEg");
	this.shape.setTransform(31.7,17.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("AAVAoIgPAGQgGACgCAAQgVAAgLgLQgKgMAAgWQAAgUAPgOQAQgQAUAAQAIAAALAFQANAGAAAHQAAADgCADIgBAJIgBAMQAAAOADAIIAEAJIADAIQAAAFgDADQgEADgEAAQgEAAgJgIgAgLgRQgJAKAAALQAAALAEAGQAEAGAJAAQADAAAFgCQAFgCAEgDQgCgUAAgKIAAgGIABgIIgDgCIgCAAQgKAAgJAJg");
	this.shape_1.setTransform(19.6,17.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066FF").s().p("AguA5QgLgJAAgKQAAgGAEgEQADgDAGAAQAIAAADAIQAFALASAAQANAAAPgHQAOgHAAgIQAAgLgJgDQgHgDgRAAQgQgBgMgEQgPgGAAgOQAAgRASgOQASgPATAAQAJAAANAEQAPAFAAAHQAAAEgCAEQgEAEgFAAIgNgCIgNgCQgLAAgIAGQgLAFABAGQAAAEADACQADACAHABIATABQAUACAMAJQAMAJAAASQAAAXgaAMQgUAJgXAAQgWAAgNgKg");
	this.shape_2.setTransform(8.4,15.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,40.6,29.1);


(lib.text_rotating = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag2AqQgYgZAJgJQAEgEAEABQAEAAAEADIAHAJIAIALQAJAJAKgBQAKgCALgLQgEAAgGgCQgFgDgFgFQgNgMABgOQAAgQAMgMQARgRATAAQAVAAATASQAGAGACAGQAEAFgBAGQAHAJgIAIIgNAIQgRAMgRAQQgVATgNADIgHABQgRAAgRgRgAAUgkQgLABgJAKQgHAIgBAGQgBAHAGAEQADAEALgBQAKAAAGgDIAWgQIgCgGIgEgEQgJgKgMAAIgCAAg");
	this.shape.setTransform(53.2,60.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAAA8QgFAAgEgEQgIgIAHgHIAKgQIALgOIAGgFIAGgFIACgBIADgCQAFgFgCgCQgGgGgLACQgMACgMAHIgGAEIgGAFIgGAEIgGAFQgDAEgFAAQgFAAgEgEQgDgDAAgFQAAgFADgCIAFgGIAFgFIASgQIASgQIAFgGIADgGQAEgEAFABQAFAAADADQAJAJgKAKIAAABQASAAAKAKQAMAMgGAOQgDAIgNANIgFAEIgEAEIgLAOQgGAJgFAFQgDADgDAAIAAAAg");
	this.shape_1.setTransform(48.1,52.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgwAuQgEgEAAgFQAAgFAEgDIALgMIALgLIAPgLIAMgOQAEgDAFAAQAEAAAEAEQADADABAFQAAAFgEADIgOAMIgNANIgLALIgLAMQgEADgEABQgFAAgEgEgAAngWQgGAAgEgEQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGABAEAEQAEAEAAAFQABAGgEAEQgEADgEAAIgCAAg");
	this.shape_2.setTransform(45,46.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgsAuQgDgDgBgFQAAgFADgDIAHgHIAHgGIAfggIgKgMQgIgJAIgHQADgEAFAAQADABADADIAKALIAHgGIAFgHQAEgDAFAAQAFAAADADQAKAKgQAPIgFAFIAHAGQAHAHACACQADAHgGAFQgDAEgFAAQgFAAgEgEIgDgDIgDgDIgHgGIgdAiIgDADIgDAEQgJAIgHAAQgEAAgEgDg");
	this.shape_3.setTransform(39.6,41.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgBA1QgFAAgDgEQgDgDgBgLIgOgGQgGgDgDgDQgPgPABgOQAAgPAQgQQAPgPAUAAQAWAAAPAQQAGAGAEALQAGANgFAFQgDABgDAAIgHAFIgJAJQgLALgEAHIgEAKIgDAIQgDADgCAAIgBAAgAgRgUQgIAIgCAIQgBAFAGAGIAJAGQAFACAFABQALgQAHgGIAFgEIAHgGIgCgCIgBgCQgIgJgNAAQgLAAgJAJg");
	this.shape_4.setTransform(32.1,37.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgsAuQgDgDgBgFQAAgFADgDIAHgHIAHgGIAfggIgKgMQgIgJAIgHQADgEAFAAQADABADADIAKALIAHgGIAFgHQAEgDAFAAQAFAAADADQAKAKgQAPIgFAFIAHAGQAHAHACACQADAHgGAFQgDAEgFAAQgFAAgEgEIgDgDIgDgDIgHgGIgdAiIgDADIgDAEQgJAIgHAAQgEAAgEgDg");
	this.shape_5.setTransform(26.5,28.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgiAgQgLgLgBgQQAAgQAOgPQANgOATgDQAUgDARARQAMAMgDARQgCAOgNANQgOAPgRACIgFABQgQAAgNgNgAAAgTQgHADgIAHQgHAIAAAGQAAAHAEAEQAGAGAIAAQAGAAAIgHQAVgRgMgMQgFgFgIAAIgGAAg");
	this.shape_6.setTransform(19.1,23.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgzAhQgDgDAAgFQAAgEADgEIApgmIAGgGIAEgFQADgEAFAAQAEgBAEAEQAHAHgGAIQATADAOAOQAMAKgQARIgEAEQgKAJgIgIQgIgIAIgIIAFgHQgQgKgQAEIgfAgQgEADgEABQgFgBgEgEg");
	this.shape_7.setTransform(12.7,15.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0.1,72.3,72.3);


(lib.text_rolled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAYBCQgGADgHABIgLABQgUAAgNgMQgNgNAAgUQAAgXANgNQAOgPATAAQAHAAAFACIAJAEQABgeACgLQABgLAKAAQAFAAAEAEQADADAAAFIgCAnIgCAjQAAAgACALIAAACQAAAFgDAEQgEACgFAAQgGAAgDgFgAgRAEQgGAHAAAPQAAAJAHAHQAHAHAJAAQAFAAADgBIAIgGIADgDIAAggQgDgGgEgBQgFgCgGAAQgLAAgHAGg");
	this.shape.setTransform(45.3,15.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgcAlQgQgLAAgTQAAgVANgQQANgQAUAAQAPAAAKAEQANAHAAAOQAAAKgKAHQgFADgQAFIgbANQAEAFAGACQAGACAGAAQALAAAIgFQAIgEAEAAQAJAAAAAJQAAAKgOAHQgNAEgNAAQgTABgNgLgAgLgTQgFAFgEAKIAUgIIARgKQgGgDgJAAQgHAAgGAGg");
	this.shape_1.setTransform(35,17.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgHBEQgEgDAAgFIAAh3QABgGADgDQADgDAEAAQAFAAADADQADADABAGIAAByQgBARgLAAQgEAAgDgEg");
	this.shape_2.setTransform(27.5,15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgHBEQgEgDAAgFIAAh3QABgGADgDQADgDAEAAQAFAAADADQADADABAGIAAByQgBARgLAAQgEAAgDgEg");
	this.shape_3.setTransform(22.6,15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgcAkQgMgLgBgVQgBgRAMgPQANgTAWABQARAAALANQAJANAAATQAAASgLAPQgMAPgTAAQgQAAgMgLgAgLgOQgGAJAAAJQAAAKAGAGQAFAEAGABQAGAAAGgGQAGgFABgLQABgagQgBQgJABgGAJg");
	this.shape_4.setTransform(15.4,17.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgiAtQgCgDAAgFIAAg4IAAgIIAAgIQAAgFADgDQADgDAFAAQAKAAACAKQANgMAUAAQARAAAAAXIAAAGQAAAOgMAAQgLAAAAgMIAAgIQgTADgIARIAAAqQAAAFgEADQgDAEgFAAQgGAAgDgEg");
	this.shape_5.setTransform(6.6,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,52.7,29.1);


(lib.text_rapidly = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhEA5QgDgEAAgFQgBgFADgDQAGgGAqgPIASg8IACgIQABgEAAgCQAEgEAFAAQAFAAADAEQAFAEgBAFQgDAVgMAhIAagIQANgEAMgDQAHgCAEAFQAEADABADQAAAFgEAEIgFADIhAAXQgYAIgOAGIgQAIIgGABQgFAAgDgDg");
	this.shape.setTransform(46.7,51.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgyAzQgEgEAAgEQAAgFAEgEIBUhUQAEgEAEABQAFAAADAEQAEAEAAAEQABAEgEAEIhRBRQgGAGgGAAQgEAAgEgDg");
	this.shape_1.setTransform(44.2,44.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgYA3QgFAAgDgEQgFgEACgHQgHgBgFgEIgKgJQgOgOAAgQQgBgSAOgOQARgRAUgBQAUgBANAPQAFAFACAFQADAEABAFQAVgUAKgHQAIgGAHAHQAEADgBAFQABAEgEAEIgdAaIgcAXQgUAWgGAJIgCADQgDADgEAAIgBAAgAgVggQgKABgKAKQgHAHAAAKQAAAIAHAGQAFAFADACIAKABIAEAAIAVgVQACgGgCgFQgBgFgDgEQgJgJgJAAIgBAAg");
	this.shape_2.setTransform(39.2,41.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgwAuQgEgEAAgFQAAgFAEgDIALgMIALgLIAPgLIAMgOQAEgDAFAAQAEAAAEAEQADADABAFQAAAFgEADIgOAMIgNANIgLALIgLAMQgEADgEABQgFAAgEgEgAAngWQgGAAgEgEQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGABAEAEQAEAEAAAFQABAGgEAEQgEADgEAAIgCAAg");
	this.shape_3.setTransform(33.1,34.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhAA0QgEgEAAgFQAAgEADgEIAYgXIAYgXIAVgXIALgOQAFgFAGgBQAHgCAFAFQADADAAAFQAAAFgDADIgBABQAGABAGAEQAFACAFAFQAOAOgGARQgEAOgPAOQgNAOgRABQgSABgMgOIgKgMIgaAZQgDAEgEAAQgFAAgEgEgAgFAKQAEAHAEAGQAGAGAIgBQAHgBAHgHQAJgIACgEQAGgIgGgFQgEgEgGgDIgOgDIgXAZg");
	this.shape_4.setTransform(24.2,30);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgBA1QgFAAgDgEQgDgDgBgLIgOgGQgGgDgDgDQgPgPABgOQAAgPAQgQQAPgPAUAAQAWAAAPAQQAGAGAEALQAGANgFAFQgDABgDAAIgHAFIgJAJQgLALgEAHIgEAKIgDAIQgDADgCAAIgBAAgAgRgUQgIAIgCAIQgBAFAGAGQAEAEAFACQAFACAFABQALgQAHgGIAFgEIAHgGIgCgCIgBgCQgIgJgNAAQgLAAgJAJg");
	this.shape_5.setTransform(19.4,24.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgzAhQgDgDAAgFQAAgEADgEIApgmIAGgGIAEgFQADgEAFAAQAEgBAEAEQAHAHgGAIQATADAOAOQAMAKgQARIgEAEQgKAJgIgIQgIgIAIgIIAFgHQgQgKgQAEIgfAgQgEADgEABQgFgBgEgEg");
	this.shape_6.setTransform(12.7,15.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65.1,65.1);


(lib.text_predicate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#993300").s().p("AgcAlQgPgLgBgTQAAgVAMgQQAOgQATAAQAPAAALAEQANAHAAAOQAAAKgLAHQgFADgPAFIgbANQAEAFAGACQAGACAGAAQALAAAJgFQAHgEAEAAQAKAAAAAJQgBAKgOAHQgNAEgNAAQgTABgNgLgAgKgTQgHAFgDAKIAUgIIARgKQgGgDgKAAQgGAAgFAGg");
	this.shape.setTransform(141.8,17.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#993300").s().p("AgHA9QgDgDAAgFIAAgKIAAgJIgBgsIgRgBQgLgBAAgKQAAgFADgEQAEgDAFAAIAPABIAAgJIAAgJQgBgFAEgDQAEgEAEAAQAMAAAAAWIAAAIIAJgBQAJAAAEABQAHADAAAIQAAAFgEADQgDADgFAAIgFAAIgDAAIgJABIACAsIAAAFIAAAFQAAAUgNAAQgDAAgEgDg");
	this.shape_1.setTransform(132.6,16);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#993300").s().p("AAVAoIgPAGQgGACgCAAQgVAAgLgLQgKgMAAgWQAAgUAPgOQAQgQAUAAQAIAAALAFQANAGAAAHQAAADgCADIgBAJIgBAMQAAAOADAIIAEAJIADAIQAAAFgDADQgEADgEAAQgEAAgJgIgAgLgRQgJAKAAALQAAALAEAGQAEAGAJAAQADAAAFgCQAFgCAEgDQgCgUAAgKIAAgGIABgIIgDgCIgCAAQgKAAgJAJg");
	this.shape_2.setTransform(123.4,17.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#993300").s().p("AgaAmQgOgMAAgSQAAgQAMgSQAPgWAQAAQAKAAALAFQAQAGgBAIQAAAEgCADQgDAEgFAAQgEAAgGgEQgFgEgLAAQgEAAgJANQgHANAAAIQAAAIAGAGQAHAFAIAAQAHAAAIgFQAJgEABAAQAFAAAEADQADAEAAAEQAAAHgPAHQgNAGgJAAQgRAAgNgLg");
	this.shape_3.setTransform(113.6,17.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#993300").s().p("AgKA/QgDgDAAgFIgBgQIAAgQIABgUIABgSQAAgFAEgDQADgDAFAAQADAAAEADQADADAAAFIAAASIgBAUIAAAQIAAAQQAAAFgEADQgDADgDABQgGgBgDgDgAgHgsQgEgDAAgGQAAgFAEgEQAFgEADABQAGgBAEAEQAEAEAAAFQAAAGgEADQgEAEgGABQgDgBgFgEg");
	this.shape_4.setTransform(106.8,15.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#993300").s().p("AAYBCQgGADgHABIgLABQgUAAgNgMQgNgNAAgUQAAgXANgNQAOgPATAAQAHAAAFACIAJAEQABgeACgLQABgLAKAAQAFAAAEAEQADADAAAFIgCAnIgCAjQAAAgACALIAAACQAAAFgDAEQgEACgFAAQgGAAgDgFgAgRAEQgGAHAAAPQAAAJAHAHQAHAHAJAAQAFAAADgBIAIgGIADgDIAAggQgDgGgEgBQgFgCgGAAQgLAAgHAGg");
	this.shape_5.setTransform(98.7,15.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#993300").s().p("AgdAlQgOgLAAgTQAAgVALgQQANgQAVAAQAOAAALAEQANAHAAAOQAAAKgLAHQgEADgPAFIgcANQAEAFAGACQAGACAGAAQAMAAAHgFQAIgEAFAAQAIAAABAJQAAAKgPAHQgMAEgOAAQgTABgOgLgAgLgTQgFAFgEAKIAUgIIARgKQgGgDgJAAQgHAAgGAGg");
	this.shape_6.setTransform(88.4,17.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#993300").s().p("AgiAtQgCgDAAgFIAAg4IAAgIIAAgIQAAgFADgDQADgDAFAAQAKAAACAKQAOgMASAAQASAAAAAXIAAAGQAAAOgMAAQgLAAAAgMIAAgIQgSADgJARIAAAqQAAAFgEADQgDAEgFAAQgGAAgDgEg");
	this.shape_7.setTransform(79.3,17.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#993300").s().p("AgnBDQgDgEAAgEIAAgZIACgmIACgpQAAgXAMABIAJgBIAMgBQAQAAAPAMQARAMAAASQAAAWgSAMQgQALgUAAIgHAAIgBApQAAAEgDAEQgDACgFAAQgFAAgEgCgAgPguIAAANIgCAeIAGABQAMAAAJgHQAJgHAAgLQAAgIgJgFQgIgGgJAAIgEAAIgEAAg");
	this.shape_8.setTransform(70.1,15.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#993300").s().p("AgdAlQgOgLAAgTQAAgVAMgQQAMgQAVAAQAOAAALAEQANAHAAAOQAAAKgKAHQgFADgPAFIgcANQAEAFAGACQAGACAGAAQALAAAIgFQAIgEAFAAQAIAAABAJQAAAKgPAHQgMAEgOAAQgTABgOgLgAgLgTQgFAFgEAKIAUgIIARgKQgGgDgJAAQgHAAgGAGg");
	this.shape_9.setTransform(52.3,17.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#993300").s().p("AgHA9QgDgDAAgFIAAgKIABgJIgDgsIgPgBQgMgBAAgKQAAgFAEgEQADgDAFAAIAPABIgBgJIAAgJQAAgFAEgDQADgEAGAAQALAAgBAWIAAAIIAJgBQALAAADABQAHADAAAIQAAAFgEADQgCADgGAAIgEAAIgFAAIgIABIABAsIAAAFIAAAFQAAAUgMAAQgDAAgEgDg");
	this.shape_10.setTransform(43.1,16);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#993300").s().p("AgdAlQgPgLAAgTQAAgVANgQQANgQAUAAQAOAAALAEQANAHAAAOQAAAKgKAHQgGADgOAFIgcANQAEAFAGACQAGACAGAAQAMAAAHgFQAIgEAEAAQAJAAAAAJQAAAKgOAHQgNAEgNAAQgTABgOgLgAgLgTQgFAFgEAKIAUgIIARgKQgGgDgJAAQgHAAgGAGg");
	this.shape_11.setTransform(33.7,17.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#993300").s().p("AgHBEQgEgDAAgFIAAh3QAAgGAEgDQADgDAEAAQAFAAADADQADADAAAGIAAByQABARgMAAQgEAAgDgEg");
	this.shape_12.setTransform(26.3,15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#993300").s().p("AgkBGQgCgDAAgFIAAghIAAghIgBghIgCgRQAAgHADgFQAEgGAGAAQAFAAAEADQADADAAAFIAAABIAMgFQAEgCAFAAQAVAAAJARQAHANAAAVQAAARgLANQgMANgTAAIgOgBIAAAkQAAAFgEADQgEADgFAAQgFAAgEgDgAgDgpQgHADgFAFIABAiQAIADAGAAQAJAAAFgEQAEgGAAgKIgBgRQgDgKgJAAQgFAAgDACg");
	this.shape_13.setTransform(19.2,19.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#993300").s().p("AgGAyQgEgDAAgFIgCgdIgCgcIgBgJQgKAGgKAOIgCABIAAAaIAAAHIgBAGQAAAFgEADQgDACgFAAQgIAAgCgGQgCgFAAgJIAAgfIgBgNIAAgNQAAgIADgGQADgIAHAAQAFAAADAEQAEAEAAAEIgBAIQAOgPAMAAQANAAAEAKQAGgFAGgCQAHgDAHAAQASAAAGASQABADADAUIAGAuQAAAFgEADQgDADgFAAQgLAAgBgKIgEgZIgCgYQgDgQgDAAQgDAAgHAEIgKAHQAAAKACARQADATAAAKQAAAFgEADQgDAEgGAAQgDAAgDgEg");
	this.shape_14.setTransform(7.4,17.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#993300").s().p("AgcAkQgMgLgBgVQgBgRAMgPQANgTAWABQARAAALANQAJANAAATQAAASgLAPQgMAPgTAAQgQAAgMgLgAgLgOQgGAJAAAJQAAAKAGAGQAFAEAGABQAGAAAGgGQAGgFABgLQABgagQgBQgJABgGAJg");
	this.shape_15.setTransform(-4.5,17.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#993300").s().p("AgmA1QgNgOAAgSQAAgcAagfQAWgaAVAAIAHAAIAFABQAEgDAFAAQAJAAADAKIABARQAAAFgDADQgDAFgGAAQgIAAgEgJQgCgEgBAAQgCgBgFAAQgLAAgNASQgUAWAAAVQAAAJAGAHQAHAHAJAAQAGAAAJgFIAOgIQAGgFAEAAQAFAAAEAEQADAEAAAEQAAAGgEADQgYAVgXgBQgUAAgOgOg");
	this.shape_16.setTransform(-14.6,15.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#993300").s().p("AgdAlQgOgLAAgTQAAgVAMgQQAMgQAVAAQAOAAALAEQANAHAAAOQAAAKgKAHQgFADgPAFIgcANQAEAFAGACQAGACAGAAQALAAAIgFQAIgEAFAAQAIAAABAJQAAAKgPAHQgMAEgOAAQgTABgOgLgAgLgTQgFAFgEAKIAUgIIARgKQgGgDgJAAQgHAAgGAGg");
	this.shape_17.setTransform(-33.2,17.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#993300").s().p("AAUBAQgCgHgCgNIgBgVIAAgGIAAgHIAAgHQgBgDgEAAQgJAAgGAHQgEAEgHANQAAAggEAGQgDAHgHAAQgFAAgEgDQgEgDAAgFIABgFQABgCAAgVIAAg5IAAgDIABgOIgBgIIgBgIQAAgFAEgDQADgEAGAAQAIAAADAKQACAFAAALIgBASIAAARQAGgGAIgEQAFgDAIAAQAPAAAHAJQAFAGABALIABAWIACARIADARIAAADQAAAFgEAEQgDADgFAAQgJAAgDgJg");
	this.shape_18.setTransform(-43.2,15.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#993300").s().p("AgHA/QgEgDAAgFIAAgEIABgEIgBgMIgBgMIgBgeIgDggIgFAAQgTAAgMgDQgJgCAAgJQAAgFADgEQADgEAGABIAOABIAOABIARAAIAOAAIAUABIAUABQAFAAAEADQADADAAAFQAAAFgDAEQgEADgFAAIgWgBIgVAAIACAjIACAiIABAJIAAAJQAAAGgCAGQgEAGgGAAQgEAAgDgDg");
	this.shape_19.setTransform(-54.6,15.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.1,0,212.1,29.1);


(lib.text_mick = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("AAUBBQgEgIgJgLIgMgSIgMAIIAAAYQAAAFgEADQgEADgFAAQgMAAAAgOIABgVIABgVIAAgbIAAgdIAAgJIAAgJQAAgFADgDQADgEAGAAQAFAAADAEQAEADAAAFIABAJIAAAJIAAAZIgBAXQAMgIAXgYQADgEAFAAQAFAAAEAEQADADAAAFQAAAEgDAEQgKAJgOANIASAYQANARAAAGQAAAFgEAEQgEADgFAAQgGAAgEgHg");
	this.shape.setTransform(37.5,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("AgaAmQgOgMAAgSQAAgQAMgSQAPgWAQAAQAJAAAMAFQAPAGABAIQAAAEgDADQgEAEgEAAQgFAAgFgEQgFgEgLAAQgFAAgIANQgHANAAAIQAAAIAGAGQAHAFAIAAQAHAAAIgFQAJgEACAAQAEAAAEADQADAEAAAEQAAAHgPAHQgNAGgJAAQgRAAgNgLg");
	this.shape_1.setTransform(27.5,17.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066FF").s().p("AgKA/QgDgDAAgFIAAgQIgBgQIABgUIABgSQAAgFADgDQAEgDAFAAQAEAAADADQADADAAAFIAAASIgBAUIAAAQIAAAQQAAAFgEADQgDADgDABQgFgBgEgDgAgHgsQgEgDAAgGQAAgFAEgEQAEgEAEABQAGgBAEAEQAEAEAAAFQAAAGgEADQgEAEgGABQgEgBgEgEg");
	this.shape_2.setTransform(20.8,15.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0066FF").s().p("AAvA5IgFgVQgEgQgFgcIgNAjIgGAQQgCAKgEAGQgFAIgGAAQgIAAgFgKIgEgQQgIgWgFgXIgLApIgDAUQgEAMgKAAQgGAAgDgEQgDgEAAgEQAAgPAGgUIAKggIAFgbQAEgTAEgGQAFgGAHAAQAIAAAEAIQADAHAFAYQADAXAIAZQAIgZAIgfIAGgUQAEgNAKAAQAJAAAGAPQABAGACAQQAGAjAIAbIAHAeQAAAFgEADQgEAEgFAAQgKAAgEgOg");
	this.shape_3.setTransform(10.2,15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,44.1,29.1);


(lib.text_log = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AgsA4QAAgFADgDQADgDAFAAIALABIAOACQALAAAGgIQAGgIABgRQgEAFgGACQgFACgGAAQgRAAgLgLQgLgMAAgPQAAgYAPgPQAPgPAXAAQAJAAAGACQAGACAEAEQALABAAAMIgCAQQgEAVgBAVQgBAcgIANQgMARgaAAQgjAAAAgNgAgNgmQgGAIAAAPQAAAKADAFQAEAEAIAAQAFAAAHgHQAIgIABgHIADgbIgFgCIgGgBQgNAAgJAKg");
	this.shape.setTransform(21.2,19.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009900").s().p("AgcAkQgMgLgBgVQgBgRAMgPQANgTAWABQARAAALANQAJANAAATQAAASgLAPQgMAPgTAAQgQAAgMgLgAgLgOQgGAJAAAJQAAAKAGAGQAFAEAGABQAGAAAGgGQAGgFABgLQABgagQgBQgJABgGAJg");
	this.shape_1.setTransform(11.7,17.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009900").s().p("AgIBEQgCgDAAgFIAAh3QgBgGAEgDQAEgDADAAQAFAAADADQAEADgBAGIAAByQAAARgLAAQgEAAgEgEg");
	this.shape_2.setTransform(4.5,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28.1,29.1);


(lib.text_large = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgJAvQgMgFgKgKQgPgOgCgRQgDgQAPgPQAPgPATgDQAUgDAPAQQALALAEAKQAFAOgKAIQgHAHgNgDQgGgBgPgGIgcgJQgBAEADAGQACAGAGAFQAIAJAIACQAIACADADQAGAHgGAGQgDAEgHAAQgDAAgHgDgAgMgVIASAIIAVAGQgCgHgHgGQgGgGgIAAQgGAAgKAFg");
	this.shape.setTransform(36.8,41.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag2AqQgYgZAJgJQAEgEAEABQAEAAAEADIAHAJIAIALQAJAJAKgBQAKgCALgLQgEAAgGgCQgFgDgFgFQgNgMABgOQAAgQAMgMQARgRATAAQAVAAATASQAGAGACAGQAEAFgBAGQAHAJgIAIIgNAIQgRAMgRAQQgVATgNADIgHABQgRAAgRgRgAAUgkQgLABgJAKQgHAIgBAGQgBAHAGAEQADAEALgBQAKAAAGgDIAWgQIgCgGIgEgEQgJgKgMAAIgCAAg");
	this.shape_1.setTransform(27.9,35.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgzAhQgDgDAAgFQAAgEADgEIApgmIAGgGIAEgFQADgEAFAAQAEgBAEAEQAHAHgGAIQATADAOAOQAMAKgQARIgEAEQgKAJgIgIQgIgIAIgIIAFgHQgQgKgQAEIgfAgQgEADgEABQgFgBgEgEg");
	this.shape_2.setTransform(23.3,25.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgBA1QgFAAgDgEQgDgDgBgLIgOgGQgGgDgDgDQgPgPABgOQAAgPAQgQQAPgPAUAAQAWAAAPAQQAGAGAEALQAGANgFAFQgDABgDAAIgHAFIgJAJQgLALgEAHIgEAKIgDAIQgDADgCAAIgBAAgAgRgUQgIAIgCAIQgBAFAGAGQAEAEAFACQAFACAFABQALgQAHgGIAFgEIAHgGIgCgCIgBgCQgIgJgNAAQgLAAgJAJg");
	this.shape_3.setTransform(16.8,21.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgyAzQgEgEAAgEQAAgFAEgEIBUhUQAEgEAEABQAFAAADAEQAEAEAAAEQABAEgEAEIhRBRQgGAGgGAAQgEAAgEgDg");
	this.shape_4.setTransform(13.2,13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.1,54.1);


(lib.text_hill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAUBAQgCgHgCgNIgBgVIAAgGIAAgHIAAgHQgBgDgEAAQgJAAgGAHQgEAEgHANQAAAggEAGQgDAHgHAAQgFAAgEgDQgEgDAAgFIABgFQABgCAAgVIAAg5IAAgDIABgOIgBgIIgBgIQAAgFAEgDQADgEAGAAQAIAAADAKQACAFAAALIgBASIAAARQAGgGAIgEQAFgDAIAAQAPAAAHAJQAFAGABALIABAWIACARIADARIAAADQAAAFgEAEQgDADgFAAQgJAAgDgJg");
	this.shape.setTransform(7.4,15.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgJA/QgEgDAAgFIgBgQIAAgQIABgUIABgSQAAgFAEgDQADgDAFAAQAEAAADADQADADAAAFIgBASIAAAUIAAAQIAAAQQAAAFgDADQgEADgDABQgFgBgDgDgAgHgsQgEgDAAgGQAAgFAEgEQAFgEADABQAFgBAFAEQAEAEAAAFQAAAGgEADQgFAEgFABQgDgBgFgEg");
	this.shape_1.setTransform(15.2,15.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgIBEQgCgDAAgFIAAh3QgBgGAEgDQAEgDADAAQAFAAADADQADADAAAGIAAByQAAARgLAAQgEAAgEgEg");
	this.shape_2.setTransform(19.9,15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgIBEQgCgDAAgFIAAh3QgBgGAEgDQAEgDADAAQAFAAADADQADADAAAGIAAByQAAARgLAAQgEAAgEgEg");
	this.shape_3.setTransform(24.9,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,30.6,29.1);


(lib.text_flopped = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAYBCQgGADgHABIgLABQgUAAgNgMQgNgNAAgUQAAgXANgNQAOgPATAAQAHAAAFACIAJAEQABgeACgLQABgLAKAAQAFAAAEAEQADADAAAFIgCAnIgCAjQAAAgACALIAAACQAAAFgDAEQgEACgFAAQgGAAgDgFgAgRAEQgGAHAAAPQAAAJAHAHQAHAHAJAAQAFAAADgBIAIgGIADgDIAAggQgDgGgEgBQgFgCgGAAQgLAAgHAGg");
	this.shape.setTransform(56.6,15.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgcAlQgQgLABgTQgBgVAMgQQANgQAUAAQAQAAAKAEQANAHAAAOQAAAKgLAHQgEADgPAFIgcANQAEAFAGACQAGACAGAAQAMAAAIgFQAHgEAFAAQAJAAAAAJQAAAKgPAHQgMAEgOAAQgTABgNgLgAgKgTQgHAFgDAKIAUgIIARgKQgGgDgKAAQgGAAgFAGg");
	this.shape_1.setTransform(46.3,17.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgjBGQgEgDAAgFIAAghIAAghIgBghIgBgRQAAgHADgFQAEgGAHAAQAEAAADADQAEADAAAFIAAABIAMgFQAEgCAFAAQAVAAAJARQAHANAAAVQAAARgLANQgMANgTAAIgPgBIAAAkQAAAFgDADQgDADgFAAQgGAAgDgDgAgEgpQgFADgGAFIABAiQAHADAHAAQAIAAAFgEQAFgGAAgKIgBgRQgDgKgJAAQgFAAgEACg");
	this.shape_2.setTransform(36.7,19.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgkBGQgCgDAAgFIAAghIAAghIgBghIgCgRQAAgHADgFQAEgGAHAAQAFAAADADQADADAAAFIAAABIAMgFQAEgCAGAAQAUAAAJARQAHANAAAVQAAARgLANQgLANgUAAIgPgBIAAAkQABAFgEADQgEADgFAAQgFAAgEgDgAgDgpQgHADgFAFIABAiQAIADAGAAQAIAAAGgEQAEgGAAgKIgBgRQgDgKgIAAQgGAAgDACg");
	this.shape_3.setTransform(27.1,19.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgcAkQgMgLgBgVQgBgRAMgPQANgTAWABQARAAALANQAJANAAATQAAASgLAPQgMAPgTAAQgQAAgMgLgAgLgOQgGAJAAAJQAAAKAGAGQAFAEAGABQAGAAAGgGQAGgFABgLQABgagQgBQgJABgGAJg");
	this.shape_4.setTransform(17.4,17.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgIBEQgDgDABgFIAAh3QAAgGADgDQADgDAEAAQAFAAADADQAEADAAAGIAAByQAAARgMAAQgEAAgEgEg");
	this.shape_5.setTransform(10.2,15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgPBKQgEgEAAgEIAAgDQACgMAAgLIAAgqIgFABIgGAAQgFAAgEgDQgDgDAAgGQAAgIAJgCIAPgCIABgKQADgTAIgKQAIgMAVAAQAQAAAAAMQAAALgPAAQgKAAgFAIQgEAFgBAMIgBACIASgBQAQAAAAAMQAAALgRAAIgSABIAAAVIABAYQAAAQgCAJQgCAKgHAAQgGAAgDgDg");
	this.shape_6.setTransform(3.1,15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.4,0,67.5,29.1);


(lib.text_dunes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXAtQgOgFAAgJQAAgJALAAQAEAAAHADQAIACAEAAQAQAAAAgHQAAgEgMgGQgQgIgFgCQgNgIAAgNQAAgRATgGQALgEAUAAQAJAAAEACQAGADAAAJQAAAPgIAAQgJAAgCgHIgHAAQgTAAAAAFQAAAEAKAGQASAIAGADQANAIAAAMQAAAPgOAIQgMAGgOAAQgMAAgJgEg");
	this.shape.setTransform(69,17.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdAlQgOgLAAgTQAAgVAMgQQAMgQAVAAQAOAAALAEQANAHAAAOQAAAKgLAHQgEADgPAFIgcANQAEAFAGACQAGACAGAAQAMAAAHgFQAIgEAFAAQAIAAABAJQAAAKgPAHQgMAEgOAAQgTABgOgLgAgLgTQgFAFgEAKIAUgIIARgKQgGgDgJAAQgHAAgGAGg");
	this.shape_1.setTransform(59.6,17.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AARAoIgCgSIgBgTIAAgFIAAgIIAAgDIABgEQAAgHgEAAQgHAAgGAJQgHAKgEANIgBAIIAAAHIgBAIIAAAIQAAAFgEADQgDADgGAAQgFAAgDgDQgEgDAAgFIAAgIIgBgHIABgYIACgWIgBgIIAAgIQAAgFAEgDQADgDAFgBQAMABABAOIAAABQANgOAMAAQAQAAAHAPQAEAJAAASIAAAGIAAAEQAAAHACAKQACAMAAAGQAAAFgEADQgDADgGAAQgKABgCgLg");
	this.shape_2.setTransform(50.1,17.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AARArQgLAEgKAAQgNAAgIgFQgKgGgCgMQgDgVAAgQQAAgLADgPQABgKAKAAQAGABADADQAEACAAAGIgCALIgBANIABAUQABAJACAGIAEACIAEAAQAIAAALgDIAAgPIAAgNQAAgSACgNQABgLALAAQAFABADADQAEADAAAFIgCAeIAAAQIAAASIABAGIAAAFQAAAFgEADQgDADgFABQgIAAgDgHg");
	this.shape_3.setTransform(40.5,17.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAYBCQgGADgHABIgLABQgUAAgNgMQgNgNAAgUQAAgXANgNQAOgPATAAQAHAAAFACIAJAEQABgeACgLQABgLAKAAQAFAAAEAEQADADAAAFIgCAnIgCAjQAAAgACALIAAACQAAAFgDAEQgEACgFAAQgGAAgDgFgAgRAEQgGAHAAAPQAAAJAHAHQAHAHAJAAQAFAAADgBIAIgGIADgDIAAggQgDgGgEgBQgFgCgGAAQgLAAgHAGg");
	this.shape_4.setTransform(30.5,15.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAYBCQgGADgHABIgLABQgUAAgNgMQgNgNAAgUQAAgXANgNQAOgPATAAQAHAAAFACIAJAEQABgeACgLQABgLAKAAQAFAAAEAEQADADAAAFIgCAnIgCAjQAAAgACALIAAACQAAAFgDAEQgEACgFAAQgGAAgDgFgAgRAEQgGAHAAAPQAAAJAHAHQAHAHAJAAQAFAAADgBIAIgGIADgDIAAggQgDgGgEgBQgFgCgGAAQgLAAgHAGg");
	this.shape_5.setTransform(12.2,15.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AARAoIgCgSIgBgTIAAgFIAAgIIAAgDIABgEQAAgHgEAAQgHAAgGAJQgHAKgEANIgBAIIAAAHIgBAIIAAAIQAAAFgEADQgDADgGAAQgFAAgDgDQgEgDAAgFIAAgIIgBgHIABgYIACgWIgBgIIAAgIQAAgFAEgDQADgDAFgBQAMABABAOIAAABQANgOAMAAQAQAAAHAPQAEAJAAASIAAAGIAAAEQAAAHACAKQACAMAAAGQAAAFgEADQgDADgGAAQgKABgCgLg");
	this.shape_6.setTransform(2.4,17.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAVAoIgPAGQgGACgCAAQgVAAgLgLQgKgMAAgWQAAgUAPgOQAQgQAUAAQAIAAALAFQANAGAAAHQAAADgCADIgBAJIgBAMQAAAOADAIIAEAJIADAIQAAAFgDADQgEADgEAAQgEAAgJgIgAgLgRQgJAKAAALQAAALAEAGQAEAGAJAAQADAAAFgCQAFgCAEgDQgCgUAAgKIAAgGIABgIIgDgCIgCAAQgKAAgJAJg");
	this.shape_7.setTransform(-7.3,17.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgXAtQgOgFAAgJQAAgJALAAQAEAAAHADQAIACAEAAQAQAAAAgHQAAgEgMgGQgQgIgFgCQgNgIAAgNQAAgRATgGQALgEAUAAQAJAAAEACQAGADAAAJQAAAPgIAAQgJAAgCgHIgHAAQgTAAAAAFQAAAEAKAGQASAIAGADQANAIAAAMQAAAPgOAIQgMAGgOAAQgMAAgJgEg");
	this.shape_8.setTransform(-16.9,17.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.2,0,98.8,29.1);


(lib.text_drifting = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag2AqQgYgZAJgJQAEgEAEABQAEAAAEADIAHAJIAIALQAJAJAKgBQAKgCALgLQgEAAgGgCQgFgDgFgFQgNgMABgOQAAgQAMgMQARgRATAAQAVAAATASQAGAGACAGQAEAFgBAGQAHAJgIAIIgNAIQgRAMgRAQQgVATgNADIgHABQgRAAgRgRgAAUgkQgLABgJAKQgHAIgBAGQgBAHAGAEQADAEALgBQAKAAAGgDIAWgQIgCgGIgEgEQgJgKgMAAIgCAAg");
	this.shape.setTransform(51,58.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAAA8QgFAAgEgEQgIgIAHgHIAKgQIALgOIAGgFIAGgFIACgBIADgCQAFgFgCgCQgGgGgLACQgMACgMAHIgGAEIgGAFIgGAEIgGAFQgDAEgFAAQgFAAgEgEQgDgDAAgFQAAgFADgCIAFgGIAFgFIASgQIASgQIAFgGIADgGQAEgEAFABQAFAAADADQAJAJgKAKIAAABQASAAAKAKQAMAMgGAOQgDAIgNANIgFAEIgEAEIgLAOQgGAJgFAFQgDADgDAAIAAAAg");
	this.shape_1.setTransform(45.9,50.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgwAuQgEgEAAgFQAAgFAEgDIALgMIALgLIAPgLIAMgOQAEgDAFAAQAEAAAEAEQADADABAFQAAAFgEADIgOAMIgNANIgLALIgLAMQgEADgEABQgFAAgEgEgAAngWQgGAAgEgEQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGABAEAEQAEAEAAAFQABAGgEAEQgEADgEAAIgCAAg");
	this.shape_2.setTransform(42.7,43.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgsAuQgDgDgBgFQAAgFADgDIAHgHIAHgGIAfggIgKgMQgIgJAIgHQADgEAFAAQADABADADIAKALIAHgGIAFgHQAEgDAFAAQAFAAADADQAKAKgQAPIgFAFIAHAGQAHAHACACQADAHgGAFQgDAEgFAAQgFAAgEgEIgDgDIgDgDIgHgGIgdAiIgDADIgDAEQgJAIgHAAQgEAAgEgDg");
	this.shape_3.setTransform(37.4,39.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhDAvQgDgDAAgFQgBgFAEgDIABgCQALgHAHgIIAggdIgFgEIgEgDQgEgEAAgEQAAgFADgEQAGgGAIAFQAEACAIAHIAGgGQAPgMANgBQAQgBAPAPQALALgIAJQgIAIgLgLQgHgHgJABQgGACgKAHIgBACIAMALQAMAKgIAIQgIAIgMgNIgMgKIgQAPIgQASQgLALgJAFQgDACgDAAQgFAAgEgEg");
	this.shape_4.setTransform(32.1,32.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgwAuQgEgEAAgFQAAgFAEgDIALgMIALgLIAPgLIAMgOQAEgDAFAAQAEAAAEAEQADADABAFQAAAFgEADIgOAMIgNANIgLALIgLAMQgEADgEABQgFAAgEgEgAAngWQgGAAgEgEQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGABAEAEQAEAEAAAFQABAGgEAEQgEADgEAAIgCAAg");
	this.shape_5.setTransform(26.7,27.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgzAhQgDgDAAgFQAAgEADgEIApgmIAGgGIAEgFQADgEAFAAQAEgBAEAEQAHAHgGAIQATADAOAOQAMAKgQARIgEAEQgKAJgIgIQgIgIAIgIIAFgHQgQgKgQAEIgfAgQgEADgEABQgFgBgEgEg");
	this.shape_6.setTransform(20.1,22.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgYA3QgFAAgDgEQgFgEACgHQgHgBgFgEIgKgJQgOgOAAgQQgBgSAOgOQARgRAUgBQAUgBANAPQAFAFACAFQADAEABAFQAVgUAKgHQAIgGAHAHQAEADgBAFQABAEgEAEIgdAaIgcAXQgUAWgGAJIgCADQgDADgEAAIgBAAgAgVggQgKABgKAKQgHAHAAAKQAAAIAHAGQAFAFADACIAKABIAEAAIAVgVQACgGgCgFQgBgFgDgEQgJgJgJAAIgBAAg");
	this.shape_7.setTransform(15.7,18.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70.1,70.1);


(lib.text_down = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAAA8QgFAAgEgEQgIgIAHgIIAKgPIALgOIAGgFIAGgFIACgBIADgCQAFgFgCgCQgGgGgLACQgMACgMAHIgGAEIgGAFIgGAFIgGAEQgDAEgFABQgFgBgEgEQgDgDAAgFQAAgFADgCIAFgFIAFgGIASgQIASgQIAFgGIADgGQAEgEAFABQAFAAADADQAJAJgKAKIAAABQASAAAKAKQAMAMgGAOQgDAIgNANIgFAEIgEAEIgLAOQgGAJgFAFQgDADgDAAIAAAAg");
	this.shape.setTransform(35.5,40);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgZA6QgIgIALgTQAEgIANgSIgFADIghAOQgEACgEgBQgGACgFgFQgEgDACgJQACgIAHgJQAFgKAWgeIAIgJQADgEAGABQAEAAAEAEQAEAGgCAJIgIAJIgHAKIgOASIAogVQALgFAHAHQAHAHgHALIgNASIgPAUIAwgbQAHgEAGAGQADADABAFQAAAFgDAEIgCABQgfASgbANQgFAEgKACIgCAAQgGAAgEgEg");
	this.shape_1.setTransform(28.7,31.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgiAgQgLgLgBgQQAAgQAOgPQANgOATgDQAUgDARARQAMAMgDARQgCAOgNANQgOAPgRACIgFABQgQAAgNgNgAAAgTQgHADgIAHQgHAIAAAGQAAAHAEAEQAGAGAIAAQAGAAAIgHQAVgRgMgMQgFgFgIAAIgGAAg");
	this.shape_2.setTransform(20.4,24.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgYA3QgFAAgDgEQgFgEACgHQgHgBgFgEIgKgJQgOgOAAgQQgBgSAOgOQARgRAUgBQAUgBANAPQAFAFACAFQADAEABAFQAVgUAKgHQAIgGAHAHQAEADgBAFQABAEgEAEIgdAaIgcAXQgUAWgGAJIgCADQgDADgEAAIgBAAgAgVggQgKABgKAKQgHAHAAAKQAAAIAHAGQAFAFADACIAKABIAEAAIAVgVQACgGgCgFQgBgFgDgEQgJgJgJAAIgBAAg");
	this.shape_3.setTransform(15.7,18.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53,53);


(lib.text_complement = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AgGA9QgEgDAAgFIAAgKIABgJIgDgsIgPgBQgMgBAAgKQAAgFAEgEQADgDAFAAIAPABIgBgJIAAgJQABgFADgDQADgEAGAAQALAAgBAWIAAAIIAKgBQAKAAADABQAHADAAAIQAAAFgDADQgDADgGAAIgFAAIgDAAIgJABIABAsIAAAFIAAAFQAAAUgMAAQgDAAgDgDg");
	this.shape.setTransform(93.4,16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009900").s().p("AARAoIgCgSIgBgTIAAgFIAAgIIAAgDIABgEQAAgHgEAAQgHAAgGAJQgHAKgEANIgBAIIAAAHIgBAIIAAAIQAAAFgEADQgDADgGAAQgFAAgDgDQgEgDAAgFIAAgIIgBgHIABgYIACgWIgBgIIAAgIQAAgFAEgDQADgDAFgBQAMABABAOIAAABQANgOAMAAQAQAAAHAPQAEAJAAASIAAAGIAAAEQAAAHACAKQACAMAAAGQAAAFgEADQgDADgGAAQgKABgCgLg");
	this.shape_1.setTransform(84.6,17.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009900").s().p("AgcAlQgQgLABgTQgBgVAMgQQANgQAUAAQAQAAAKAEQANAHAAAOQAAAKgLAHQgEADgQAFIgbANQAEAFAGACQAGACAGAAQAMAAAIgFQAHgEAFAAQAJAAAAAJQAAAKgPAHQgMAEgOAAQgTABgNgLgAgKgTQgHAFgDAKIAUgIIARgKQgGgDgKAAQgGAAgFAGg");
	this.shape_2.setTransform(74.6,17.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#009900").s().p("AgGAyQgEgDAAgFIgCgdIgCgcIgBgJQgKAGgKAOIgCABIAAAaIAAAHIgBAGQAAAFgEADQgDACgFAAQgIAAgCgGQgCgFAAgJIAAgfIgBgNIAAgNQAAgIADgGQADgIAHAAQAFAAADAEQAEAEAAAEIgBAIQAOgPAMAAQANAAAEAKQAGgFAGgCQAHgDAHAAQASAAAGASQABADADAUIAGAuQAAAFgEADQgDADgFAAQgLAAgBgKIgEgZIgCgYQgDgQgDAAQgDAAgHAEIgKAHQAAAKACARQADATAAAKQAAAFgEADQgDAEgGAAQgDAAgDgEg");
	this.shape_3.setTransform(62.9,17.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#009900").s().p("AgdAlQgOgLAAgTQAAgVAMgQQAMgQAVAAQAOAAALAEQANAHAAAOQAAAKgLAHQgEADgPAFIgcANQAEAFAGACQAGACAGAAQAMAAAHgFQAIgEAFAAQAIAAABAJQAAAKgPAHQgMAEgOAAQgTABgOgLgAgLgTQgFAFgEAKIAUgIIARgKQgGgDgJAAQgHAAgGAGg");
	this.shape_4.setTransform(50.6,17.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#009900").s().p("AgHBEQgDgDAAgFIAAh3QAAgGADgDQAEgDADAAQAFAAADADQAEADgBAGIAAByQABARgMAAQgEAAgDgEg");
	this.shape_5.setTransform(43.1,15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#009900").s().p("AgkBGQgDgDAAgFIAAghIAAghIAAghIgCgRQAAgHADgFQAEgGAGAAQAGAAACADQAEADAAAFIAAABIAMgFQAEgCAFAAQAVAAAJARQAHANAAAVQAAARgLANQgMANgTAAIgOgBIAAAkQgBAFgDADQgDADgGAAQgFAAgEgDgAgEgpQgFADgGAFIABAiQAIADAGAAQAIAAAFgEQAFgGAAgKIgBgRQgDgKgJAAQgFAAgEACg");
	this.shape_6.setTransform(36.1,19.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#009900").s().p("AgGAyQgEgDAAgFIgCgdIgCgcIgBgJQgKAGgKAOIgCABIAAAaIAAAHIgBAGQAAAFgEADQgDACgFAAQgIAAgCgGQgCgFAAgJIAAgfIgBgNIAAgNQAAgIADgGQADgIAHAAQAFAAADAEQAEAEAAAEIgBAIQAOgPAMAAQANAAAEAKQAGgFAGgCQAHgDAHAAQASAAAGASQABADADAUIAGAuQAAAFgEADQgDADgFAAQgLAAgBgKIgEgZIgCgYQgDgQgDAAQgDAAgHAEIgKAHQAAAKACARQADATAAAKQAAAFgEADQgDAEgGAAQgDAAgDgEg");
	this.shape_7.setTransform(24.3,17.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#009900").s().p("AgcAkQgMgLgBgVQgBgRAMgPQANgTAWABQARAAALANQAJANAAATQAAASgLAPQgMAPgTAAQgQAAgMgLgAgLgOQgGAJAAAJQAAAKAGAGQAFAEAGABQAGAAAGgGQAGgFABgLQABgagQgBQgJABgGAJg");
	this.shape_8.setTransform(12.3,17.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#009900").s().p("AgmA1QgNgOAAgSQAAgcAagfQAWgaAVAAIAHAAIAFABQAEgDAFAAQAJAAADAKIABARQAAAFgDADQgDAFgGAAQgIAAgEgJQgCgEgBAAQgCgBgFAAQgLAAgNASQgUAWAAAVQAAAJAGAHQAHAHAJAAQAGAAAJgFIAOgIQAGgFAEAAQAFAAAEAEQADAEAAAEQAAAGgEADQgYAVgXgBQgUAAgOgOg");
	this.shape_9.setTransform(2.2,15.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.5,0,105.3,29.1);


(lib.text_careening = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag2AqQgYgZAJgJQAEgEAEABQAEAAAEADIAHAJIAIALQAJAJAKgBQAKgCALgLQgEAAgGgCQgFgDgFgFQgNgMABgOQAAgQAMgMQARgRATAAQAVAAATASQAGAGACAGQAEAFgBAGQAHAJgIAIIgNAIQgRAMgRAQQgVATgNADIgHABQgRAAgRgRgAAUgkQgLABgJAKQgHAIgBAGQgBAHAGAEQADAEALgBQAKAAAGgDIAWgQIgCgGIgEgEQgJgKgMAAIgCAAg");
	this.shape.setTransform(62,69.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAAA8QgFAAgEgDQgIgJAHgIIAKgPIALgNIAGgGIAGgFIACgBIADgCQAFgEgCgDQgGgGgLACQgMACgMAHIgGAEIgGAFIgGAEIgGAFQgDAEgFAAQgFAAgEgEQgDgDAAgFQAAgFADgCIAFgGIAFgFIASgQIASgQIAFgFIADgHQAEgEAFABQAFAAADADQAJAJgKAKIAAABQASAAAKAKQAMAMgGAOQgDAIgNANIgFAEIgEAFIgLANQgGAJgFAFQgDADgDAAIAAAAg");
	this.shape_1.setTransform(56.9,61.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgwAuQgEgEAAgFQAAgFAEgDIALgMIALgLIAPgLIAMgOQAEgDAFAAQAEAAAEAEQADADABAFQAAAFgEADIgOAMIgNANIgLALIgLAMQgEADgEABQgFAAgEgEgAAngWQgGAAgEgEQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGABAEAEQAEAEAAAFQABAGgEAEQgEADgEAAIgCAAg");
	this.shape_2.setTransform(53.7,54.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAAA8QgFAAgEgEQgIgIAHgIIAKgPIALgOIAGgFIAGgFIACgBIADgCQAFgFgCgCQgGgGgLACQgMACgMAHIgGAEIgGAFIgGAEIgGAFQgDAEgFAAQgFAAgEgEQgDgDAAgFQAAgFADgCIAFgGIAFgFIASgQIASgQIAFgGIADgGQAEgEAFABQAFAAADADQAJAJgKAKIAAABQASAAAKAKQAMAMgGAOQgDAIgNANIgFAEIgEAEIgLAOQgGAJgFAFQgDADgDAAIAAAAg");
	this.shape_3.setTransform(46.6,51.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgJAvQgMgFgKgKQgPgOgCgRQgDgQAPgPQAPgPATgDQAUgDAPAQQALALAEAKQAFAOgKAIQgHAHgNgDQgGgBgPgGIgcgJQgBAEADAGQACAGAGAFQAIAJAIACQAIACADADQAGAHgGAGQgDAEgHAAQgDAAgHgDgAgMgVIASAIIAVAGQgCgHgHgGQgGgGgIAAQgGAAgKAFg");
	this.shape_4.setTransform(40.1,44.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgJAvQgMgFgKgKQgPgOgCgRQgDgQAPgPQAPgPATgDQAUgDAPAQQALALAEAKQAFAOgKAIQgHAHgNgDQgGgBgPgGIgcgJQgBAEADAGQACAGAGAFQAIAJAIACQAIACADADQAGAHgGAGQgDAEgHAAQgDAAgHgDgAgMgVIASAIIAVAGQgCgHgHgGQgGgGgIAAQgGAAgKAFg");
	this.shape_5.setTransform(33,37.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgzAhQgDgDAAgFQAAgEADgEIApgmIAGgGIAEgFQADgEAFAAQAEgBAEAEQAHAHgGAIQATADAOAOQAMAKgQARIgEAEQgKAJgIgIQgIgIAIgIIAFgHQgQgKgQAEIgfAgQgEADgEABQgFgBgEgEg");
	this.shape_6.setTransform(26.3,28.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgBA1QgFAAgDgEQgDgDgBgLIgOgGQgGgDgDgDQgPgPABgOQAAgPAQgQQAPgPAUAAQAWAAAPAQQAGAGAEALQAGANgFAFQgDABgDAAIgHAFIgJAJQgLALgEAHIgEAKIgDAIQgDADgCAAIgBAAgAgRgUQgIAIgCAIQgBAFAGAGIAJAGQAFACAFABQALgQAHgGIAFgEIAHgGIgCgCIgBgCQgIgJgNAAQgLAAgJAJg");
	this.shape_7.setTransform(19.8,24.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgNAsQgOgFgGgGQgNgOgCgRQgCgQAOgOQAMgMAWgEQAXgFANANQAHAGAFAMQAGAPgGAEQgDADgEAAQgFABgDgEQgDgBgBgGQgBgHgHgIQgFgEgOADQgNAEgHAHQgGAGAAAHQABAIAIAHQAEAEAJADQAHADACACQADADAAAFQAAAFgDADQgCACgDAAQgFAAgIgDg");
	this.shape_8.setTransform(13.1,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,81.1,81.1);


(lib.text_came = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgcAlQgPgLgBgTQABgVAMgQQANgQATAAQAQAAAKAEQANAHAAAOQAAAKgKAHQgGADgPAFIgbANQAEAFAGACQAGACAGAAQALAAAJgFQAHgEAEAAQAKAAgBAJQAAAKgOAHQgNAEgNAAQgTABgNgLgAgKgTQgGAFgEAKIAUgIIARgKQgGgDgKAAQgGAAgFAGg");
	this.shape.setTransform(40.3,17.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgGAyQgEgDAAgFIgCgdIgCgcIgBgJQgKAGgKAOIgCABIAAAaIAAAHIgBAGQAAAFgEADQgDACgFAAQgIAAgCgGQgCgFAAgJIAAgfIgBgNIAAgNQAAgIADgGQADgIAHAAQAFAAADAEQAEAEAAAEIgBAIQAOgPAMAAQANAAAEAKQAGgFAGgCQAHgDAHAAQASAAAGASQABADADAUIAGAuQAAAFgEADQgDADgFAAQgLAAgBgKIgEgZIgCgYQgDgQgDAAQgDAAgHAEIgKAHQAAAKACARQADATAAAKQAAAFgEADQgDAEgGAAQgDAAgDgEg");
	this.shape_1.setTransform(28.5,17.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AAVAoIgPAGQgGACgCAAQgVAAgLgLQgKgMAAgWQAAgUAPgOQAQgQAUAAQAIAAALAFQANAGAAAHQAAADgCADIgBAJIgBAMQAAAOADAIIAEAJIADAIQAAAFgDADQgEADgEAAQgEAAgJgIgAgLgRQgJAKAAALQAAALAEAGQAEAGAJAAQADAAAFgCQAFgCAEgDQgCgUAAgKIAAgGIABgIIgDgCIgCAAQgKAAgJAJg");
	this.shape_2.setTransform(16.4,17.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgaAmQgOgMAAgSQAAgQANgSQAOgWAQAAQAKAAAMAFQAPAGgBAIQAAAEgCADQgEAEgFAAQgDAAgGgEQgFgEgLAAQgEAAgIANQgIANAAAIQAAAIAGAGQAHAFAIAAQAHAAAIgFQAJgEABAAQAFAAAEADQADAEAAAEQAAAHgPAHQgNAGgJAAQgRAAgNgLg");
	this.shape_3.setTransform(6.6,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,47.5,29.1);


(lib.text_bub = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("AgZBCQgDADgFABQgFgBgDgDQgDgCAAgGIAAgGIAAgGIAAhiQAAgHADgEQAEgGAGAAQAJAAAAAKIAAADIAAAEIAAAiQAGgEAGgCQAGgBAEAAQAUgBANAPQAMANAAATQAAAVgOAOQgOAPgTAAQgMAAgLgFgAgJAAIgNAFIAAAmQAMAFAIAAQAKAAAHgIQAHgHAAgMQAAgLgGgHQgGgGgKAAQgDAAgGADg");
	this.shape.setTransform(28.2,15.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("AARArQgLAEgKAAQgNAAgIgFQgKgGgCgMQgDgVAAgQQAAgLADgPQABgKAKAAQAGABADADQAEACAAAGIgCALIgBANIABAUQABAJACAGIAEACIAEAAQAIAAALgDIAAgPIAAgNQAAgSACgNQABgLALAAQAFABADADQAEADAAAFIgCAeIAAAQIAAASIABAGIAAAFQAAAFgEADQgDADgFABQgIAAgDgHg");
	this.shape_1.setTransform(18.1,17.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066FF").s().p("AgqBDQgEgFAAgFIAAhbIgBgMQAAgHABgEQABgJAOgBQAHgCAPgBQAPAAAPALQASANAAASQAAAKgEAHQgDAGgHAFQAIAEAHAIQAIAJAAAKQAAALgNAKQgJAIgJADQgTAHgfAAQgFAAgEgDgAgXAvQAQgBAPgFQAQgFAAgEQgBgIgJgEQgIgFgGgBIgXAAgAgXguIABATIgBASIANABQAYgCAAgSQAAgGgIgFQgGgHgJAAIgOAAg");
	this.shape_2.setTransform(8.1,15.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,35.6,29.1);


(lib.text_a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgBA1QgFAAgDgEQgDgDgBgLIgOgGQgGgDgDgDQgPgPABgOQAAgPAQgQQAPgPAUAAQAWAAAPAQQAGAGAEALQAGANgFAFQgDABgDAAIgHAFIgJAJQgLALgEAHIgEAKIgDAIQgDADgCAAIgBAAgAgRgUQgIAIgCAIQgBAFAGAGQAEAEAFACQAFACAFABQALgQAHgGIAFgEIAHgGIgCgCIgBgCQgIgJgNAAQgLAAgJAJg");
	this.shape.setTransform(13.3,18.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30.6,30.6);


(lib.static_mick_arm2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AABAlQgBgCgDgDQgHgdANghQABgDACgD");
	this.shape.setTransform(8.5,33.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(0.1,1,1).p("AEGhKQg7gMgegeQgPgPgRgLQgggTghgQQgMgGgMgDQgWgFgZAFQgjAHgfAYQgfAZgQAhQgEAIgEAIQgEAHgDAGQgKARgKAPQgUAdgIAfQgBAHgCAGQAAAAgBABQgIAWgTAHQgLAEgLAAQgrABAGAkQALALAFACQAHgOAaAAQAEABAEABAiqBnQgKgDgOANQAAAAgBABQgDgDgGgCQgKgRAKgNAiqBnQAAAAAAAAAisBtQgDAOAeAIQANADAMABQAAABABAAQARACANgBQAMgvgWgQQgDgCgEgDQAAAAAAAAQgBAAAAAAQgDgCgDgCQgCgBgCgBQAEgDAEgFQAmgpAZgLQAZgIASgfQAOgZAOgUQADgDACgEQACgCACgDAh6BfQgLABgSgKQgNAJgGAIAh1A/QgOgIACgRAAehYQACAFAAACQgGAaAHAUQAEAKAHAIQAEAEAEADQAUAPAhACQADAAAgAjAjeCrQABABABACQASAdAcgZQAAAAAAAAAj1B5QgFAKAGATQAFAPANgEQACAGACAEAiuCyQAfAXAUgiQAKgRgGgOAjDByQgWAVgFAk");
	this.shape_1.setTransform(26.3,19);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.1,1,1).p("AhSAvQAfAiBAgQQBCgRAEgtQAFgsgygc");
	this.shape_2.setTransform(48.7,18.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC99").s().p("AjzCuIgBgDQAEgkAXgVQgEgDgFgCQgGgJAAgHQAAgHAFgHQgFAHAAAHQAAAHAGAJIgJgCQgaAAgHAOQgFgCgKgLQgGgkAqgBQAMAAALgEQASgHAJgWIAAgBIAEgNQAHgfAUgdQAKgPAKgRIAHgNIAIgQQAQghAfgZQAfgYAmgHQAWgFAWAFQAMADAMAGQAhAQAhATQARALAPAPQAeAeA7AMQAxAdgEAtQgFAshBAQQhCAQgggiQgfgjgEAAQghgCgUgPIgIgHQgHgIgDgKQgIgUAGgaQAAgCgCgFIAEgFIgEAFIgFAHQgMAUgPAZQgSAfgaAIQgZALglApIgIAIIADACIAGAEIABAAIABAAIAGAFQAXAQgMAvQgOABgRgCQAGAOgKARQgTAigggXIAAAAIgGgFQgCgJAAgKQAAgVAKgYIADgGIAAAAIAAAAQAFgIAOgJIADACQALAFAIACIAFAAIAAAAIABAAIAAAAIAAAAIgBAAIAAAAIgFAAQgIgCgLgFIgDgCQgOAJgFAIIgEAAIAAAAIAAAAQgKAAgLAKIAAABIAAgBQALgKAKAAIAAAAIAAAAIAEAAIAAAAIAAAAIgDAGQgKAYAAAVQAAAKACAJIAGAFIAAAAQgNALgKAAQgNAAgKgPgAinCDIAYAEIABABIgBgBIgYgEQgcgHAAgNIAAgCIAAACQAAANAcAHgAiLA/QgNgHAAgOIAAgEIAAAEQAAAOANAHgAj0CrIgFgKQgNAEgFgPQgGgTAFgKQAHgOAaAAIAJACQAFACAEADQgXAVgEAkIAAAAgAjiBtIAAAAgAjABnIAAAAgAjABnIAAAAg");
	this.shape_3.setTransform(28.5,19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,59.2,40);


(lib.static_mick_arm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AgbAVQATgeAkgL");
	this.shape.setTransform(4.7,2.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(0.1,1,1).p("AhXANQAEgDAEgCQABAAACgBQADgBADgCQANgEAPAAQAngDAkADQALABAKABQAZABARgDQARgvAbgSQAGgDAIgBQAmgFAiAMQAjAMgMAYQgFAJAGAJQAJAOgPAFQgWAJAAAYQABAogoACQgZACgVgNQgggTgkAVQgHAEgIAFQgVANgWASQgaAXgjAHQgGABgGACQgfAGggAJQgeACgfglQgMgPgIgJQgBgBgBgBQgJgLAAgBQgTgdgJgjQgJgjACgnQADgnAPghAixihQBDgNABAqQACArgDAEQAOBEAJAeQgLAGgKAL");
	this.shape_1.setTransform(25.4,16.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("Ai6CCIgUgYIgCgCIACACIgDgCIgCgDIADADIgJgMQgTgdgJgjQgJgjACgnQADgnAPghQATggAmgLQBDgNABAqQACArgDAEQAOBEAJAeIAIgFIADgBIAGgDQANgEAPAAQAngDAkADIAVACQAZABARgDQARgvAbgSQAGgDAIgBQAmgFAiAMQAjAMgMAYQgFAJAGAJQAJAOgPAFQgWAJAAAYQABAogoACQgZACgVgNQgggTgkAVIgPAJQgVANgWASQgaAXgjAHIgMADQgfAGggAJIgDAAQgdAAgdgjgAhsAeQAKgLALgGQgLAGgKALg");
	this.shape_2.setTransform(25.4,16.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,52.8,35.1);


(lib.sam = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AGdjkQgLgPgLgPQgLgOgKgOQgKgOgNgKQgPgNgMgMQgNgPgLgPQgHgLgMgKQgQgJgSgFQgSgFgSgGQgQgFgRgFQgSgFgTAAQgSAAgTgBQgTgBgTAAQgSAAgTgBQgTgBgQADQgSACgPAEQgTAEgTAFQgTAFgTAFQgSAFgRAHQgRAIgQAIQgRAJgNAJQgPALgOAJQgRALgQALQgQAKgNAOQgMANgMAPQgNAPgKAPQgKAPgLAPQgLAPgKAPQgKAQgFARQgFAPgDAPQgBACAAABQgEASgEASQgFASgGATQgGASgBARQgCASgBASQgCAUADATQADATAFASQAGASAGATQAFASAHARQAHARAJANQAHAPANANQAMALAMANQANAOAOAOQAOANAOANQAOANANAMQANAMAQAKQAPAKAQAFQARAGAQAFQATAGARAHQARAGARAFQARAFASABQATACAUACQASABATABQASAAATgCQARgDASgCQASgCATgDQAIgBAJgCQASgEATgGQATgFARgHQAQgGARgLQAQgKAPgNQAOgMAOgMQAPgNALgMQAHgGAFgIQABgBABgCQAJgNAKgOQALgOAJgPQAJgPALgQQALgQAIgQQAKgRAHgSQAHgQAGgRQAGgSAEgSQAEgRAAgRQgBgTgCgSQgDgTgCgSQgCgTABgTQAAgTgCgTQgCgTgCgTQgBgTgHgTQgGgRgKgQgADMCVQACgDACgEQAEgIADgHQACgFACgEQACgJACgKQACgJACgJQACgJACgJQACgIACgJQADgJABgKQAAgKADgJQACgIABgIQACgKAAgJIAAAAQAAgCAAgCQABgHgCgIQgDgJgEgIQgEgJgDgJQgEgIgEgJQgEgJgEgJQgFgIgFgIQgEgIgEgHQgEgIgFgIQgFgIgGgGQgEgEgCgDQgHgGgGgIQgFgGgFgFQgBgBgBgBQgFgGgEgGQgEgHgIgFQgIgGgHgDQgJgEgIgEQgJgDgJgDQgIgDgJgBQgJgCgJgBQgKgBgJgDQgIgDgKgBQgCgBgCAAQAFADAFACQADABADABQADABACABQADABACACQAIAEAHAGQAHAHAIAGQANAJAFAIQgEgBgDgBQgIgEgIgDQgTgIgSABQACADADACQAKAKAEADQgHgGgGgDQgHgDgIgDQAAAKgCAJQgBAJgBAKQAAABgBACQAAAHgCAIQgBADgCAEQgFgFgFgFQgHgGgHgFAiHjIQAAgBAAAAQAFgIAFgIQAFgIAGgGIAAAAQAHgFAHgEQAHgEAKACQAKACAJABQAJABAJACQAGABAGACQgDgJgIgFQALgCANAEQAIADAHACQAGACAEACQAAAAABABAAAkSQgFgBgIAAQgJABgJACQgJACgJADQgJACgKACQgIACgJACQgJADgJADQgJAEgHAEQgJAGgFAFQgGAGgIAFQgBABgBABQgGAFgGADQAAAAgBABQgCABgBABQgBABgCAAQgDACgDAAQgFACgFAEQgGAFgEAFIgBABQgDACgDADQAAAAgBABQAEAJAAAKQgBAIgCAJQgJApgXAYQAAABAAAAQAAACAAADQAEgCAFAAAgYjHQAIgEAIAFQAEACAEACAgEgkQAEgHABgHQADgHAEgHQAGgHAHgGQAIgGAJgDQAIgDAKAAQAJABAIAFQAGAEAGAHQAHAHAFAFQABACABACQAGgJAGgGQAGgGAHgHQAHgGAIgCQAJgDAKABQAJABAHAGQACACACADQAHAHADAHQAEAIACAJQADAJABAJQABAKABAKQABAKgCAHQgCAJgBAKQgBAIAAAHQgCAHABAJQAAAKAAAJQAAAKAAAKQAAAJAAAKQAAAKABAKQAAAEABAEQAFAEADAFAgFisQAAAAAAAAQABABABABQACACABACQgBAFgFAFQgGAGgIACQAAAAgBAAQgKADgMgBQgDAAgDgBAgUiUQgBACABADQAAAJgDAIQgDAHgGAIQgBABgBACIAAAAQgBABAAAAQgFAFgFAEQgGAEgJADQgJAEgIACQgJADgJAAQgKABgJABQgDAAgCABQAEAHAFAGQAGAIAHAFQAHAFAIAFQAHAGAIAEQABABACABQABAAACAAQADAAACAAQAKAAAJgDQAIgDAJgBQAHgBAGACQACAAABABQAAABABAAQACACABACQAAAAAAAAQgHAGgIADQgGACgJAEQgJAEgJADQgJACgJAEQgIADgHAFQAKABAKgBQAJgCAIgCQAKgBAIgDQAHgDAHgDQABAAABgBQAJgFAEAGQADACgCADQgEAFgHAEQgBABgCAAQgHADgIACQgHABgIACQgBABgCAAQgIACgIADQgBAAAAAAQgNAGANAAQABAAABAAQACAAADAAQAJAAAKgBQAJgBAIgDQAFgCAFAAQABAAABAAQADAAAAAFQgBAEgBACQgDAFgFADQgJADgJACQgJACgKAAQgBAAgCAAQgCAAgBAAQgGABgCAFQgBACABACQABAGgBAEQgBADgCABQgFAFgHACQgIAEgIAFQgHAFgHAGQgEAEgFAEAAYB9QgCgGgBgGQgCgKgCgJQgBgKgBgJQgBgJgBgKQgBgJAAgKABuA4QABgGABgGQAAgBAAgBQABgJACgJQABgJAAgKQAAgHgBgJQgBgIgDgJQgDgJgDgIQgCgGgEgFACYCiQgEgHgFgGQgFgHgFgIQgFgIgEgJQgEgJgDgJQgCgIgCgJQgCgJgBgKQAAgEAAgDQgBACAAACQgCAJgBAJQgBAGAAAFQAAAAAAABQgBAJACAIQABAIABAHQACAKgBAKQAAAKgBAJQgBAKgCAJQgBAKABAKQAAADACAEQAIAHAJgFQAIgFAFgHQAGgIADgIQAEgJABgJQAAgBABAAgAi4ioQgDgIADgHQAEgJAHgHQAEgEAEgBQAEgBAEADQACABACABQAAAAABABQADAFgDAHAiljSQgBAAgBABQgEABgDABAiMjIIAFAAQgCACgCACQAAgCgBgCgAiVjdQACAFADAEQACAGACAGAhYjAQAFgIAKgCQAKgBAJACQAEABADAAAiYjHIAMgBAkZgaQAAgCABgBQABgGADgFQADgHADgIQADgJAEgIQADgIADgJQADgJADgIQAEgIADgJQADgJAFgJQAEgIAFgHQAGgIAGgGQAAAAAAAAQABgCABgBQAGgGAFgFAjphNIAAAAQgIADgHAGQgGAGgGAHQgGAHgGAHQgFAHgEAIQgBAAAAAAQAAABAAAAQAAgBABAAAkagZQgBABAAABQgDAFgDAEQgFAIgGAGQgFAIgFAJQgFAHgDAJQgBACgBABQgFAIgCAJQgCAKgDAJQgCAJgCAJQgBAGABAHQAAACAAACQABAGADAHQABADABADQAHANAHAMQAFAIAFAHQAGAHAGAEQAIAGAKABQAIABAIAAQAKABAJAAQAKABAJgEQAFgCAFgDQACgBADgCQAHgFAIgFQAIgFAHgGQAHgGAGgHQAHgGAHgGQAIgFAGgGQAHgGAHgFQACgBACgCQABAAAAAAQAQAgABAHQACAJAEAIQAFAIAHAGQAHAGAJAEQAIAEAKACQAJACAKABQAJAAAKAAQAHgBAEgCQABgBABAAQgBAAAAABQgCAIgFAGQgIAHgFAIQgFAIgFAHQgFAHgFAIQgGAIgGAFQgEADgDAAQgBAAgBAAQgIgCgHgCQgJgCgIgCQgKgDgJgCQgJgCgIgEQgJgEgIgGQgIgFgJgFQgHgFgIgFQgHgFgHgGQgHgGgHgIQgFgGgDgHAhgh1QAKAAAIABQAKACAJAAQAIABAGgEAh3hPQgHACgDAHQgEAJgBAKAi4ioQAAABAAABQAEAJAIAEQAHAFALgCQAFAAADgEAjGilQAHgBAHgCAhAgfQgCAAgBAAQgEAAgEgBQgJgBgHADQgJAFgCAJQgCAJgCAHQgDAJgCAJQgCAJgBAKQgBAIAAAIQgBABAAABQgBABgCAAQgJABgJACQgJABgJADQgJADgIACQgJACgJADQgIADgGAEQgIAGgIAEQgIAFgIAFQgIAEgJABQgKACgJgBQACgFADgFQAFgHAFgIQAFgHAEgJQADgHADgHQAEgIAAgJQAAgJgBgIQAAgJAAgIAg5EJQAAAAAAAAQAIABAIAAQAJAAAJAAQAJAAAJAAQAIAAAJAAQAJgBAKABQAJAAAJAAQAFgBAFgBQAFgBAEgBQAKgCAJgDQAGgCAHgBQAFgFAKgEQAIgDAHgGQAGgGAGgGQAHgHAGgFQAGgHAGgGQAGgHAFgHQAFgHAGgGQAGgGAFgIQACgFACgEADECMQgCgCgDgBQgIgEgKADQgJADgFAHQgGAHgBAJAABC+QAEgJADgHQAEgIAEgJQAEgJACgJQACgGAAgIAA7EIQgHgDgEgIQgEgHgBgJQgBgJAAgJIAAgBQAAgGAAgGQAAgJgBgKQAAgDAAgCQgBgKgDgJQgCgJgEgJQgDgIgDgIQgBgCAAgC");
	this.shape.setTransform(45.2,43.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF00").s().p("AAuBQIgCAAIgPgEIgRgEIgQgFQgJgCgJgEQgJgEgIgGIgQgKIgPgKIgOgLQgIgGgGgIQgFgGgEgFIAGgDIAPgKQAIgFAGgGIANgNIAPgMIAOgLQAGgGAIgFIAEgDIAAAAQAOAgACAHQABAJAFAIQAFAIAGAGQAHAGAJADQAJADAKACQAJACAKABIASAAQAIgBAFgCIACgBIAAABQgEAIgGAGQgHAHgFAIIgLAPIgKAPQgFAIgHAFQgDADgDAAIgBAAg");
	this.shape_1.setTransform(34.7,61.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F3D28D").s().p("ABzD1QgEgHgBgJIgCgSIAAgBIAAgMIAAgTIAAgFQgBgKgDgJIgGgSIgGgQIgCgEIgCgMIgEgTIgDgTIgBgTIgBgTIABATIABATIADATIAEATIACAMQABAIgCAGQgCAJgEAJIgIARIgHAQQgGACgIABIgSAAQgKgBgJgCQgKgCgHgEQgIgEgIgGQgGgGgFgIQgFgIgBgJQgBgHgQggIgBABIgEACQgIAFgGAGIgOALIgPAMIgMANQgHAGgIAFIgPAKIgGAEIgJAEQgJAEgKgBIgTgBIgQgBQgKgBgIgGQgGgEgGgHIgKgPIgOgZIgCgGIgEgNIgBgEQAAgGABgHIAEgSIAEgTQADgJAFgIIABgDIAJgQIAKgPIAKgQIAGgJIABgBIABgBIAAgBIAJgPIANgOIAMgNQAGgGAJgDIAAAAIAAgFIAAgBQAXgYAJgpQACgJAAgIIAOgDQgDgIAEgHQAEgJAGgHQAEgEAEgBQAFAAAEACIADACIACACIAMgCIABAEIADgEIABgBIAKgQQAFgHAGgHIAAAAIANgJQAIgEAKACIAQADIASADIANADQgDgJgIgFQALgCANAEIAPAFIALAEIACABIgCATIgCATIgBADIgKgEIgBAAQgDgCgEgBIgBAAIAAAAQgDAAgDACIgBAAIAAAAIAAAAIABAAQADgCADAAIAAAAIABAAQAEABADACIABAAIAKAEQgCAIgDAHIgCAHIgKgKQgHgGgIgFQAIAFAHAGIAKAKIAAAAIABACIAFAEQgCAFgFAFQgGAGgIACIgBAAQgIADgIAAIgGgBQgDAAgDgBQADABADAAIAGABQAIAAAIgDIABAAIAAAFQAAAJgDAIQgDAHgGAIIgCADIgBAAIgBACIgJAIQgGAEgJADIgPAGQgJADgJAAIgTACIgGABQAFAHAFAGQAGAIAHAFIAOAKIAQAKIgBACIgIgBIAAAAIgCAAIgBAAIgCAAIAAAAIAAAAQgFAAgEACIgBAAQgJAFgCAJIgEARIgFARIgDATIgCARIAAACIgDAAIgTADIgRAEIgSAFIgRAFQgJADgFAEIgQAKIgRAKQgHAEgKABIgDABIgHAAIAAAAIgBAAIgIAAIAGgKIAKgPQAFgHAEgJIAGgOQADgIABgJIAAgGIgBgLIAAgJIAAgHIAAAHIAAAJIABALIAAAGQgBAJgDAIIgGAOQgEAJgFAHIgKAPIgGAKIAIAAIABAAIAAAAIAHAAIADgBQAKgBAHgEIARgKIAQgKQAFgEAJgDIARgFIASgFIARgEIATgDIADAAIAAgCIACgRIADgTIAFgRIAEgRQACgJAJgFIABAAQAEgCAFAAIAAAAIAAAAIACAAIABAAIACAAIAAAAIAIABIABAAIAEAAIAFAAQAKAAAIgDQAJgDAJgBQAHgBAGACIADACIAAAAIAEAEIAAABQgHAFgIADIgQAGQgIAEgJADIgRAGQgHADgHAHQAKABAIgBIARgEIASgGIANgFIACgCIACAAQADgCADAAIABAAIAAAAQAEAAADADQAAAAABAAQAAABAAAAQAAAAABABQAAAAAAAAIgCADQgEAHgIAEIgDABIgPADIgPAEIgDAAIgQAFIgBAAQgFADAAACQAAABAFAAIACAAIAFAAIATgBQAJgBAIgDIAJgCIADAAQAAAAABABQAAAAABAAQAAABAAAAQABABAAABIgBABIgBAHQgDAEgGADIgSAFIgBABIgNABIAAAAIAAAAIgDAAIgBAAIgDAAIgDAAQgGACgCAEIgBADIABABIAAAFIgBAFIgBAFQgFAEgGACQgIAEgIAFQgHAFgHAGIgJAIIAJgIQAHgGAHgFQAIgFAIgEQAGgCAFgEIABgFIABgFIAAgFIgBgBIABgDQACgEAGgCIADAAIADAAIABAAIADAAIAAAAIAAAAIANgBIABgBIASgFQAGgDADgEIABgHIABgBQAAgBgBgBQAAAAAAgBQgBAAAAAAQgBgBAAAAIgDAAIgJACQgIADgJABIgTABIgFAAIgCAAQgFAAAAgBQAAgCAFgDIABAAIAQgFIADAAIAPgEIAPgDIADgBQAIgEAEgHIACgDQAAAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAAAQgDgDgEAAIAAAAIgBAAQgDAAgDACIgCAAIgCACIgNAFIgSAGIgRAEQgIABgKgBQAHgHAHgDIARgGQAJgDAIgEIAQgGQAIgDAHgFIAAgBIgEgEIAAAAIAHgPIAHgOQAGgHAHgGQAHgGAKgDQAIgDAKAAQAJABAIAFQAFAEAHAHIAMAMIACAEQAGgJAGgGIANgNQAHgGAIgCQAJgDAKABQAJABAHAGIAEAFQAHAHADAHQAEAIACAJIAEASIACAUQABAKgCAJIgDARIgBAPQgCAHAAAJIABATIAAAUIAAATQAAAKAAAKIACAIQAFAEADAGIgEAIQgFAIgGAGQgGAGgFAHIgLAOIgMANIgNAMIgNAMQgGAGgIADQgKAEgFAFIgOADIgSAFIgJACQgHgDgEgIgACwA0IgDASIgCALIAAABQAAAJACAIIACAPQABAKAAAKQAAAKgBAJIgDATQgBAKAAAKIADAIQAIAGAJgFQAHgFAGgHQAFgIAEgIQAEgJABgJIAAgBQACgJAFgHQAGgHAJgDIAAAAIABAAIAGgBIAAAAIAAAAQAGAAAEACIABAAIAFADIgFgDIgBAAQgEgCgGAAIAAAAIAAAAIgGABIgBAAIAAAAQgJADgGAHQgFAHgCAJIgIgNIgKgPIgJgRIgHgSIgEgRIgDgTIgBgHIAAAEgAC2AQIgEASIAAADIgCALIACgLIAAgDIAEgSIABgRIgBgSQgCgIgCgJIgGgRIgGgLIAGALIAGARQACAJACAIIABASIgBARgAg+hOQgEAJgBAKQABgKAEgJQADgHAGgCQgGACgDAHgAimhVIAJgCIgJACgAAIh6QAGAAAEgCIACgBIgCABQgEACgGAAIAAAAIAAAAIgBAAIgBAAIgRgCQgIgBgKAAQAKAAAIABIARACIABAAIABAAIAAAAIAAAAgAhcidIAEgBQAGAAADgEQgDAEgGAAIgEABIgBAAIAAAAQgGAAgFgDIgCgBQgHgEgEgJIgBgCIABACQAEAJAHAEIACABQAFADAGAAIAAAAIABAAgAhVjDIABgGQAAgDgBgCQABACAAADIgBAGgAgGjSQgKACgFAIQAFgIAKgCIABAAIAFAAIAAAAIAAAAIAJABIABAAIABAAIAHABIgHgBIgBAAIgBAAIgJgBIAAAAIAAAAIgFAAIgBAAg");
	this.shape_2.setTransform(38.5,43.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AiJAjIABgBIAFgFIABAAIALgLIAJgGIAHgBIACgCIADgCIACAAIALgHIAFAIIAFALIgFgLIgFgIIADgCIANgLIAOgLIAQgIIASgGIASgEIAQgEIATgFIASgCIAPABIAJAEIAHACIAFACIAFADQAIAFAGAFIAQANQAMAKAFAIIgHgDIgQgHQgTgIgSABIAGAFIANAMQgGgEgHgDIgPgHIgBAAIgLgEIgPgGQgNgDgMACQAIAFADAIIgMgCIgQgDIgSgEQgKgCgIAFIgNAIIAAAAQgGAHgFAFIgKAQIgBABIgEAAIAEAAIgDAEIgBgEIgNACIgBgCIgDgCQgFgCgEABQgEAAgEAEQgHAIgEAIQgDAHADAIIgOAEQAAgLgDgJg");
	this.shape_3.setTransform(38.8,21);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgmGtIgngEQgSgBgRgFQgRgFgRgGIgkgNIghgLQgQgFgPgKQgQgKgNgMIgbgZIgcgaIgbgcIgYgYQgNgNgHgPQgJgNgHgRQgHgRgFgSIgMglQgFgSgDgTQgDgTACgUIADgkQABgRAGgSIALglIAIgkIABgDIAIgeQAFgRAKgQIAVgeIAVgeQAKgPANgPQAMgPAMgNQANgOAQgKIAhgWIAdgUQANgJARgJIAhgQQARgHASgFIAmgKIAmgJIAhgGQAQgDATABIAlABIAmABIAlABQATAAASAFIAhAKIAkALQASAFAQAJQAMAKAHALQALAPANAPQAMAMAPANQANAKAKAOIAVAcIAWAeQAKAQAGARQAHATABATIAEAmQACATAAATQgBATACATIAFAlQACASABATQAAARgEARQgEASgGASIgNAhQgHASgKARQgIAQgLAQIgUAfQgJAPgLAOIgTAbIgCADQgFAIgHAGIgaAZIgcAYQgPANgQAKQgRALgQAGQgRAHgTAFIglAKIgRADIglAFIgjAFQgTACgSAAIglgCgAjMC/QAHAIAHAGIAOALIAPAKIARAKQAIAGAJAEQAIAEAJACIATAFIARAEIAPAEIACAAIAAAAIAQABIASAAIASAAIARAAIATAAIASAAIAKgCIAJgCIATgFIANgDQAFgFAKgEQAIgDAHgGIAMgMIANgMIAMgNIALgOQAFgHAGgGQAGgGAFgIIAEgJIAEgHIAHgPIAEgJIAEgTIAEgSIAEgSIAEgRQADgJABgKQAAgKADgJIADgQIACgTIAAAAIAAgEQABgHgCgIIgHgRIgHgSIgIgRIgIgSIgKgQIgIgPIgJgQQgFgIgGgGIgGgHIgNgOIgKgLIgCgCIgJgMQgEgHgIgFIgPgJIgRgIIgSgGQgIgDgJgBIgSgDQgKgBgJgDQgIgDgKgBIgEgBIgNgBIgSADIgSAFIgTAEIgRAEIgSAGIgQAIIgOALIgOALIgCACIgMAIIgBABIgDACIgCABIgHACIgKAGIgKAKIgBABIgGAFIgBABIgLALIgCADIAAAAIgMAOIgJAPIgIASIgHARIgGARIgGARIgHARIgGAPIgEALIgBADIgBABIgBACIgGAJIgLAOIgKARIgIAQIgCADQgFAIgCAJIgFATIgEASQgBAGABAHIAAAEIAEANIACAGIAOAZIAKAPQAGAHAGAEQAIAGAKABIAQABIATABQAKABAJgEIAKgFQADAHAFAGg");
	this.shape_4.setTransform(45.2,43.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,92.5,88.2);


(lib.micksleg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(0.1,1,1).p("AB7kBQgBABAAAAQgSAPgWARQgoAhgVAtQAAABgBABQANAEANAFQABAAABABQARAHARAJQAYAOAbALQAcALAcALQAGADAFACAEhgBQADgGACgHQAOgkAQgeQAUgkgigcQgagVghgTQgggSghgVQgegTghgPQAOgLALgJQgXgNgXgLQgHgEgIgDQghgPgbgWQgbgXgagaAkmnhQgVAdgJAhQgJAkADAnQADAkAYAaQANAOAOALQAPALARAHQAiAQAkAOQAlAPAiANQAjANAaAYQABAAAAAAQAGAGAGAHQAPASAJAZQAHAcAQgCQACAAACgBQAAAAABgBQAPgZAFghQABgIACgFAEYAJQAAgBAAgBQADgHAGgBAEYAJQAFgEADgFQABAAAAgBAAUiQQgEgBgEgBAAMhIQAAgIAAgIQgCgeAKgaAC9hHQggAZgTAdQgSAbgGAmQgGAmACAoQABApgLAkQgLAigSAhQgTAigUAdQgWAegIAgQgFAbASAMQAfATAmgFQAogGAkAOQAiAMAiAKQAkAJAhgOQAkgQgNghQgDgHACgIQAHgYgSgSQABg7goAXQgGADgBAKQgDAmgvgBQguAAgFgnQgGgnAPgjQAOghAJgjQAKglANgjQAOgiATgbQAUgdALgdABUFYQgXAPAKAb");
	this.shape.setTransform(33.2,48.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("AA+FuQgigKgggMQglgOgnAGQgmAFgggTQgTgMAHgbQAIggAVgeQAVgdASgiQASghALgiQAMgkgCgpQgCgmAGgmQAGgmATgdQASgdAegZIAMAFIgMgFIg1gWQgcgLgYgOQgQgJgRgHIgCgBIgagJIABgCQAUgtApghIAnggIABgBQAhAPAdATQAgAVAhASQAhATAaAVQAhAcgTAkQgQAegOAkIgGANQgGADgCAHIgBACQgLAcgUAeQgSAbgOAgQgOAjgJAlQgJAjgOAhQgNAjAFAnQAEAnAuAAQAuABAEgmQAAgKAGgDQApgXgCA7QATASgHAYQgDAIADAHQANAhgkAQQgUAJgUAAQgOAAgOgEgAhdESQgDgIAAgIQAAgPAQgLQgQALAAAPQAAAIADAIg");
	this.shape_1.setTransform(49.9,59.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("ABVC3QgJgZgPgTIgMgMIgBAAQgagYghgNIhHgcQgkgOgigQQgRgHgPgLQgOgLgNgMQgYgagDgkQgDgnAJgkQAJghAVgdIAAAHIAAACQAbAcAhAUQAhATAjAPQAjAPAjgEQAkgEAfgMIAAAAQAaAaAeAYQAbAWAhAPIAPAHQAXALAXANIgZASIgBABIgoAgQgoAhgVAtIgBACIgIgCIAIACIAaAJIgDANQgFAhgPAYIgBACIgEABIgCAAQgPAAgIgagABoC3IAAAQIAAgQIgBgKQAAgZAJgVQgJAVAAAZIABAKg");
	this.shape_2.setTransform(24,20.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,68.4,98.5);


(lib.line = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOCHIAAkNIAdAAIAAENg");
	this.shape.setTransform(1.5,13.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3.1,27.2);


(lib.bracketdisplay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("ApvEXIAAouITgAAIAAIug");
	var mask_graphics_1 = new cjs.Graphics().p("ApvEXIAAouITgAAIAAIug");
	var mask_graphics_2 = new cjs.Graphics().p("ApvEXIAAouITgAAIAAIug");
	var mask_graphics_3 = new cjs.Graphics().p("ApvEXIAAouITgAAIAAIug");
	var mask_graphics_4 = new cjs.Graphics().p("AguEXIAAouITgAAIAAIug");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:52.1,y:6.2}).wait(1).to({graphics:mask_graphics_1,x:83.6,y:6.2}).wait(1).to({graphics:mask_graphics_2,x:115.1,y:6.2}).wait(1).to({graphics:mask_graphics_3,x:146.6,y:6.2}).wait(1).to({graphics:mask_graphics_4,x:120.3,y:6.2}).wait(1));

	// right
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AJOByQg+i6lGA6QlDA4i/gjQi+gghXhY");
	this.shape.setTransform(177,11.4);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(5));

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AguEXIAAouITgAAIAAIug");
	var mask_1_graphics_1 = new cjs.Graphics().p("ApwEXIAAouIThAAIAAIug");
	var mask_1_graphics_2 = new cjs.Graphics().p("ApwEXIAAouIThAAIAAIug");
	var mask_1_graphics_3 = new cjs.Graphics().p("ApwEXIAAouITgAAIAAIug");
	var mask_1_graphics_4 = new cjs.Graphics().p("ApwEXIAAouITgAAIAAIug");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:120.3,y:6.2}).wait(1).to({graphics:mask_1_graphics_1,x:147.6,y:6.2}).wait(1).to({graphics:mask_1_graphics_2,x:117.1,y:6.2}).wait(1).to({graphics:mask_1_graphics_3,x:86.6,y:6.2}).wait(1).to({graphics:mask_1_graphics_4,x:56.1,y:6.2}).wait(1));

	// left
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1,1).p("AJOhxQhhBKi1AuQi1AwlIg+QlKhAg+C5");
	this.shape_1.setTransform(59,11.4);

	this.shape_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(115.6,-1.5,4,25.8);


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


(lib.anim_budroll2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// limbs
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AnImyQgNAWgkACQgMABgDgLQgJgfAYgbQgJAHgQABQgpAEAZggQAUgaAigJQgOgEgLgDQgLgEgDgJQgUgvBBAOQAtAKAUAkQAigYAggYQAfgYA2ABQAuAAAtAFQAxAGAnAPQAqAQAlAYQAjAYARAqQASApANApQAHAXAIAaAnImyQAEgHACgJAlCmDQANASgcAVQgQANgUgIQgkgOAMgmQgKAbgaAHQghAIADglQABgXAGgVArikjQAagYApgOQAlgMAdAWQAgAZAmgKQATgFATAIQAnAPgPA7QgEAPgCAPQgDABgDABArikjQgDADgDADArXkbQgGgFgFgDAr+j6QgHgFgFAEQAEACAIgBQAFAFAGAKAsKj7QgGgEACgJQAKgvAiAUAqgiVQAHABAJABQAaAEALgQQAcgqA1AQQAXAIAKgSAsai1QgEgEgHgIQAAgoAOAEQAJACAPAWAr/i5QgPAAgJADQgCABgBAAArQiOQgBACgCABQgKAPgUAEQgmAHgLgbQgOgfAWgKAqjhfQgDABgEACQAEgcAGgdQgdgBgTAIQAFgKADgNAnFgUQAuAIAnAbQAaAUAbAOQAOAIAOAKQgFADgEAEQghAbgnAQQgqASgvAEQgoACglgDQgKgBgLgCQgxgHgfgcQgfgbgMglQgOgnAGg0QACgSACgTAnfjFQgFAfADAhQACAdAOAbQAPAdgDAcQgCAPgHANAsXjlQAGgSAHgEAjBlyQAFgxggABQgOAAgNAEQgoAOgjANQgEgHgLgGAiHE2QAaAOARgFQAAAAABAAQAFA3gOAtQgGATgHARQgBABgBACQgRARgXAHQgXAIgYAFQgTAEgTADQgwAHgsgHQgwgHgUgdQgDgEgCgEQgKgRgEgTQgIgsAFgwQAGguAmgeQAhgZApgcQAkgXAhgVQAAABAAACQACgCAAgDQgBgEgBgFQABgpADgmQAEgqgbggQAqgmAXArQAGALABAMQgDAIgBALQgBADAAAFAhPBvQgDABgDABAiJAvQAcgqAIAxQACAQgIAKQAxgtgNBDQgBAEgEADQgBABgCABQAEABABgDQAbgoAHA0QABAIgKAHQgBABgCABQgHAEgGADAhrBQQgBACgCABQgCADgDACAiJAvQgBAEgBAFQgCAFgBAEAi2AVQALgWAcADQAKABgBAUQgBAMgCAMAg0CKQAJAPABAMQABAVgUASQgGAVADAXQADAVgIAYAHSBDQAegQAtAKQAPADAPAFQAcAKAaARQAmAYAoAZQAgATAhAkQAeAhAIAvQAKA0ghAkQggAkgcAkQgYAfgIAlQABAAABAAQAfgBAMAVQAFAJgGAHQgTAZgagOQAIAIAFAKQAGAMgOABQgoAEgTgjQADANALALQAMAMgKAKQgXAWgSgUQgWgXgSgSQgIgIgHgGQAMASgDAkQg3ALgCgzQgCg8g4AGQgaADgLgNQghgnBHADQAYABAJgLQATgWAIgkQAIgsAOgnQAKgagPgOQgcgbggALAKzH8IAAAAQgIAAgHAAAKyIrQgGgFgIgF");
	this.shape.setTransform(0.7,-0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("AJjJbQgWgXgSgSIgPgOQAMASgDAkQg3ALgCgzQgCg8g4AGQgaADgLgNQghgnBHADQAYABAJgLQATgWAIgkQAIgsAOgnQAKgagPgOQgcgbggALIAMgeIABgFQAEgYgBgaQgEgsgLgwIgDgLQAegQAtAKQAPADAPAFQAcAKAaARIBOAxQAgATAhAkQAeAhAIAvQAKA0ghAkQggAkgcAkQgYAfgIAlIAAAAIgPAAIAPAAIAAAAIACAAQAfgBAMAVQAFAJgGAHQgTAZgagOQgGgFgIgFQAIAFAGAFQAIAIAFAKQAGAMgOABQgoAEgTgjQADANALALQAMAMgKAKQgMALgKAAQgKAAgJgJgAlMH2QgwgHgUgdIgFgIQgKgRgEgTQgIgsAFgwQAGguAmgeQAhgZApgcIBFgsIAAADQACgCAAgDIgCgJQABgpADgmQAEgqgbggQAqgmAXArQAGALABAMQALgWAcADQAKABgBAUQgBAMgCAMQAcgqAIAxQACAQgIAKQAxgtgNBDQgBAEgEADIgDACQAEABABgDQAbgoAHA0QABAIgKAHIgDACIgNAHIANgHQAJAPABAMQABAVgUASQgGAVADAXQADAVgIAYIgWAaQAFA3gOAtQgGATgHARIgCADQgRARgXAHQgXAIgYAFIgmAHQgZADgYAAQgWAAgVgDgAhlFAIAHAAIABgBIABAAIABAAIgBAAIgBAAIgBABIgHAAIAAAAIgBAAQgNAAgRgIIgBgBIgBAAIgBgBIABABIABAAIABABQARAIANAAIABAAIAAAAgAhVBxIAGgCIgGACgAhuBTIgFAFIAFgFIADgDIgDADgAiLA4IgDAJIADgJIACgJIgCAJgAi6AoIgBAIIABgIQABgLADgIQgDAIgBALgAoWCKIgVgDQgxgHgfgcQgfgbgMglQgOgnAGg0IAEglIAHgDIgHADIAKg5QgdgBgTAIQAFgKADgNQgDANgFAKIgDADQgKAPgUAEQgmAHgLgbQgOgfAWgKIgLgMQAAgoAOAEQAJACAPAWQgPgWgJgCQAGgSAHgEQgGgEACgJQAKgvAiAUIgGAGIAGgGQAagYApgOQAlgMAdAWQAgAZAmgKQATgFATAIQAnAPgPA7QgEAPgCAPIgGACIAGgCQgFAfADAhQACAdAOAbQAPAdgDAcQAuAIAnAbQAaAUAbAOQAOAIAOAKIgJAHQghAbgnAQQgqASgvAEIghABQgWAAgWgCgAnOAIQAHgNACgPQgCAPgHANgAqHiSQATAAAJgNQAUgeAhAAIAAAAIAAAAQANAAAPAEIAAAAQAHACAFAAIAAAAIABAAQANAAAHgMQgHAMgNAAIgBAAIAAAAQgFAAgHgCIAAAAQgPgEgNAAIAAAAIAAAAQghAAgUAeQgJANgTAAIAAAAIgBAAIgHgBIgBAAIgQgCIAQACIABAAIAHABIABAAIAAAAgAsXi2IgDABIADgBQAJgDAPAAQgPAAgJADgAr+j6QAFAFAGAKQgGgKgFgFQgHgFgFAEQAEACAIgBIAAAAgArXkbIgLgIIALAIgArQiOIAAAAgAl1lXQgkgOAMgmQgKAbgaAHQghAIADglQABgXAGgVQAEgHACgJQgCAJgEAHQgNAWgkACQgMABgDgLQgJgfAYgbQgJAHgQABQgpAEAZggQAUgaAigJIgZgHQgLgEgDgJQgUgvBBAOQAtAKAUAkIBCgwQAfgYA2ABQAuAAAtAFQAxAGAnAPQAqAQAlAYQAjAYARAqQASApANApIAPAxIgZgUQgggZgxgBQgygBgvAIQgmAHgmAKQAFgxggABQgOAAgNAEQgoAOgjANQANASgcAVQgKAIgMAAQgHAAgHgDgAlCmDQgEgHgLgGQALAGAEAHg");
	this.shape_1.setTransform(0.7,-0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.1,1,1).p("Aizp1QgVAOgigOQgLgFACgKQAFggAigOQgLACgPgFQgmgPAjgSQAegPAiAHQgLgKgIgHQgIgJABgJQADgzA0ApQAkAdACApQApgHAngIQAlgIAwAZQApATAmAZQAqAbAdAeQAeAgAXAnQAXAlgDAtQgCAsgGArQgDAYgEAbAAbnJQAagqgdgNQgNgHgLgBQgqgFglgDQADAVgiAHQgUAEgOgPQgbgcAcgeQgVAUgagFQgigHATggQALgUAPgQQAHgEAFgIAoCphQAigLArAGQAnAFAQAhQASAkAmAIQAUAEANAPQAdAegnAvQgKAMgJAMQgDAAgDgBAo3pPQgEgGAGgHQAeglAVAgQgEABgEACApMpBQANgNAIgBQACAEAIADQgDgIgHABAopo2QgBgMgDgGAoCphQADAFAEAHAoEnEQAGADAHAFQAWAPARgKQArgZApAlQASARARgLApJoOQgOgHgKgBQgBAAgCAAAoynUQgCABgCACQgQAIgUgFQglgKACgdQABgiAYABQgCgGgDgKQASgkALAJQAHAGAEAaAommVQAEAAAEAAAommVQAQgYASgXQgZgOgVgCQAJgGAIgLAl3jxQAmAbAWArQAPAdASAYQAJAOAIAPQgGABgFABQgpAKgrgCQgtgDgsgRQglgOgfgUQgJgFgJgGQgqgdgPgmQgQglAFgnQAFgrAcgtQAKgPAKgPAhPoQQgBgJgHgKAlCmcQgRAagNAfQgKAaABAfQABAhgPAYQgJAMgNAKAing/QACgEADgDQAFgJAHgFQAUgSAXARQAIAGgJARQgGALgHAJQgDAEgDADQgEAEgDADAjqDCQARAYASADQAAAAABAAQgUAzggAjQgOAPgNALQgCABgBABQgXAIgYgDQgYgEgYgFQgTgFgSgGQgugPglgYQgogcgFgjQgBgFAAgEQgCgTAFgUQAMgrAagpQAZgnAvgJQAogJAxgHQArgFAngFQgBACAAACQADgCAAgCQACgFABgEQATgjATggQAVglgJgqQA2gQACAxQAAAOgEAMAhtAAQgCAAgBABQgDABgEABAhhAnQgDAAgDgBAhtAAQBAgSgpA0QgDAEgEABQgCAAgCAAQADADADgCQApgZgQAyQgDAIgMABQgBABgCAAQgIABgHAAAh5gqQArgagOAwQgFAPgMAFAhUBLQABARgEAMQgIATgbAIQgOAQgHAWQgGAUgSASAGjDnQAigCAkAdQAMAJALALQAVAVAQAbQAXAmAaAoQAUAfAOAvQANAqgNAuQgOAzgtASQgtATgoAUQgjARgYAeIAAAAQgHgEgHgDAGYL/QADAKABALQAAAOgNgFQgmgOgCgoQgDANAFAPQAGAQgNAFQgfAJgHgaQgJgegJgYQgEgKgEgJQADAWgSAeQg2gOAUguQAYg3g0gTQgZgIgEgRQgOgxA/AhQAWALANgGQAagLAXgdQAbgkAdgdQAUgTgHgTQgNgkgigEAGYL/QgEgIgFgHAGtLVQABAAABABQAcANACAXQAAAKgIAEQgcAPgRgY");
	this.shape_2.setTransform(4.7,6.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC99").s().p("AGPMdQgmgOgCgoQgDANAFAPQAGAQgNAFQgfAJgHgaQgJgegJgYIgIgTQADAWgSAeQg2gOAUguQAYg3g0gTQgZgIgEgRQgOgxA/AhQAWALANgGQAagLAXgdQAbgkAdgdQAUgTgHgTQgNgkgigEIAYgWIADgEQAOgUAKgYQAQgqALgvIACgLQAigCAkAdQAMAJALALQAVAVAQAbIAxBOQAUAfAOAvQANAqgNAuQgOAzgtASQgtATgoAUQgjARgYAeIAAAAIgOgHIAOAHIAAAAIACABQAcANACAXQAAAKgIAEQgcAPgRgYQgEgIgFgHQAFAHAEAIQADAKABALQAAAKgHAAIgGgBgAlHFUQgYgEgYgFIglgLQgugPglgYQgogcgFgjIgBgJQgCgTAFgUQAMgrAagpQAZgnAvgJQAogJAxgHIBSgKIgBAEQADgCAAgCIADgJQATgjATggQAVglgJgqQA2gQACAxQAAAOgEAMQAUgSAXARQAIAGgJARQgGALgHAJIgGAHIgHAHIAHgHIAGgHQArgagOAwQgFAPgMAFIgDABIgHACIAHgCIADgBQBAgSgpA0QgDAEgEABIgEAAQADADADgCQApgZgQAyQgDAIgMABIgDABIgJABIgFAAIAAAAIgBAAIABAAIAAAAIAFAAIAJgBQABARgEAMQgIATgbAIQgOAQgHAWQgGAUgSASIgfAOIgBAAQgSgDgRgYQARAYASADIABAAQgUAzggAjQgOAPgNALIgDACQgRAGgRAAIgNgBgAhhAnIgGgBIAGABgAiihGIgFAHIAFgHQAFgJAHgFQgHAFgFAJgAlohPQgtgDgsgRQglgOgfgUIgSgLQgpgdgQgmQgQglAFgnQAFgrAcgtIAUgeIAIAAIgIAAIAigvQgZgOgVgCQAJgGAIgLQgIALgJAGIgEADQgQAIgUgFQglgKACgdQABgiAYABIgFgQQASgkALAJQAHAGAEAaQgEgagHgGQANgNAIgBQACAEAIADQgDgIgHABQgEgGAGgHQAeglAVAgIgIADIAIgDIAHAMIgHgMQAigLArAGQAnAFAQAhQASAkAmAIQAUAEANAPQAdAegnAvQgKAMgJAMIgGgBIAGABQgRAagNAfQgKAaABAfQABAhgPAYQAmAbAWArQAPAdASAYQAJAOAIAPIgLACQghAIgiAAIgRAAgAmNjbQANgKAJgMQgJAMgNAKgAlnmhQAGAAAGgDIABgBIAAAAIABAAIgBAAIAAAAIgBABQgGADgGAAIAAAAIgBAAQgKAAgKgKIgBAAIgBgCIgBAAQgXgUgXAAIgBAAIAAAAQgRAAgRAKIgBABIgBAAQgGADgGAAIgBAAIAAAAQgLAAgNgJIgNgIIANAIQANAJALAAIAAAAIABAAQAGAAAGgDIABAAIABgBQARgKARAAIAAAAIABAAQAXAAAXAUIABAAIABACIABAAQAKAKAKAAIABAAIAAAAgAphoWQAKABAOAHQgOgHgKgBIgDAAIADAAgAopo2QgBgMgDgGQADAGABAMgAEAlYQgSglgtgWQgsgXgugNQgmgLgmgHQAagqgdgNQgNgHgLgBQgqgFglgDQgBgJgHgKQAHAKABAJQADAVgiAHQgUAEgOgPQgbgcAcgeQgVAUgagFQgigHATggQALgUAPgQQAHgEAFgIQgFAIgHAEQgVAOgigOQgLgFACgKQAFggAigOQgLACgPgFQgmgPAjgSQAegPAiAHIgTgRQgIgJABgJQADgzA0ApQAkAdACApIBQgPQAlgIAwAZQApATAmAZQAqAbAdAeQAeAgAXAnQAXAlgDAtQgCAsgGArIgHAzIgPgdg");
	this.shape_3.setTransform(4.7,6.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.1,1,1).p("ACLjnQgBgIACgEQADgHAJACQAwAHgSAjQgDgDgDgDACMjzQAEAFgFAHAB1j+QgCAJgUAQAB+jbQAJgGAEgGACvjDQAEgGADgFQAaAYARAnQAPAlgUAeQgXAiANAlQAGAQgGAUQgMAog9gLQgPgDgPgBQgBgCgBgDAB1j+QASAEAFAHAAtiCQAAAHgBAJQgBAaARAKQArAYgMA2QgGAWATAJAAjiyQAKAFAOACAAjiyQgCgBgBgBQgQgKgFgTQgKglAagNQAegQALAVQAEgFAIgHQAogCgDAOABLjjQgBgPgEgJQgBgCgBgBAhBBfQgEAvgaAoQgSAcgMAcQgHAPgKAOQgEgEgDgEQgdgfgTgmQgWgpgGguQgGgnABglQAAgLABgLQAEgwAZggQAZghAkgPQAngRA1ACQASABATABQACADACAEABrA4QgfgCghAFQgcAEgYAQQgcARgcgBQgPgBgPgGAgKiIQAaACAdAEQAAgdgKgT");
	this.shape_4.setTransform(-8.7,-10.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC99").s().p("AiVEDQgdgfgTgmQgWgpgGguQgGgnABglIABgWQAEgwAZggQAZghAkgPQAngRA1ACIAlACIA3AGQAAgdgKgTQAKAFAOACQgOgCgKgFIgDgCQgQgKgFgTQgKglAagNQAegQALAVQAEgFAIgHQAogCgDAOQASAEAFAHQgCAEABAIQgEAGgJAGQAJgGAEgGQAFgHgEgFQADgHAJACQAwAHgSAjIgGgGIAGAGIgHALIAHgLQAaAYARAnQAPAlgUAeQgXAiANAlQAGAQgGAUQgMAog9gLQgPgDgPgBIgCgFIACAFQgfgCghAFQgcAEgYAQQgcARgcgBQgPgBgPgGQAPAGAPABQgEAvgaAoQgSAcgMAcQgHAPgKAOIgHgIgABoAfQgOgHAAgPIABgJQADgLAAgKQAAgmgigTQgQgKAAgWIAAgEIABgQIgBAQIAAAEQAAAWAQAKQAiATAAAmQAAAKgDALIgBAJQAAAPAOAHgAgGiBIgEgHIAEAHgABGj7QAEAJABAPQgBgPgEgJIgCgDIACADgABfjlQAUgQACgJQgCAJgUAQgAAjiyIAAAAgACMjzIAAAAg");
	this.shape_5.setTransform(-8.7,-10.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.1,1,1).p("ABbj0QAYAXAZAXQAcAZAaApQAXAmgBAwQAAAzgnAdQgmAdgiAeQgdAagPAjQABAAABAAQAeAFAHAWQAEAKgHAGQgXAWgXgTQAGAJADAKQAEANgOgBQgogEgLglQABANAHAMQAKAPgMAIQgZARgOgXQgRgbgPgVQgGgJgGgIQAJAVgKAiQg4ABAIgzQAJg7g4gEQgagCgIgPQgagsBGAPQAXAGALgJQAXgSAOgiQAFgLAGgMQAAgBAAAAAA9CaIgBgBQgHgBgIgBAAzDIQgFgHgIgG");
	this.shape_6.setTransform(29.9,62.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCC99").s().p("AgiDoQgRgbgPgVIgMgRQAJAVgKAiQg4ABAIgzQAJg7g4gEQgagCgIgPQgagsBGAPQAXAGALgJQAXgSAOgiIALgXIAAgBQCBhvAsh1IAxAuQAcAZAaApQAXAmgBAwQAAAzgnAdQgmAdgiAeQgdAagPAjIACAAQAeAFAHAWQAEAKgHAGQgXAWgXgTQAGAJADAKQAEANgOgBQgogEgLglQABANAHAMQAKAPgMAIQgJAHgJAAQgNAAgIgNgAAzDIQgFgHgIgGQAIAGAFAHgAA8CZIABABIgBgBIgPgCIAPACg");
	this.shape_7.setTransform(29.9,62.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(0.1,1,1).p("AiummQgRATgkgFQgNgCAAgLQgEggAegWQgLAFgPgCQgpgEAegaQAZgXAigCQgNgGgKgGQgKgGgBgIQgKgzA8AbQAqASAOAnQAlgRAkgSQAjgRAzAKQAtAJArAOQAvAPAkAWQAmAXAgAfQAfAeAJAtQAKArAFArQADAYADAbABFk2QAPgwgggFQgOgDgNACQgoAGglAHQgDgIgJgIAg0lfQAJATgfAQQgTAJgRgLQghgUATgkQgPAZgbACQgiACAKgkQAFgWALgTQAFgHADgJACkF8QALgGAKgKQAhgjgygcQgXAlgpAKQgkAKgnANQgFACgEACQgCABgDgBQACAAABgBQgcgZgigaQgogegjgWQgogbgtAKQgwALgmAWQgRAKgMAPQgEADgCAEQgWAdAKAwQAIArAWArQAJARAKARQANAUAPAUQAOATAWALQABAAACAAQASACAUgBQAvgBAygXQAAgBAAAAQgKgOAEgdAg2I/QAaAAATgKQASgKAVgCQAYAOAUgIQALgFALgNQACABABABQAJAGAIgDQAvgYgvgLQgDgBAAgEQgCgCgCgDACaGuQgFABgEAAQgFAAgFAAACJF/QAEgBAEgBQAKgCAJABACEHVQgBAAgCgBQgDgBgDgCACaGuQAMgBAMgEQATgFgCgKQgFgcgagCACEHVQANAEAOgHQAsgXgxgNABxH6QABACACABQADACAFgBQBDgJg7ggABgIdQgGgFgFgF");
	this.shape_8.setTransform(-5.4,1.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCC99").s().p("AjdJKIgDAAQgWgLgOgTQgPgUgNgUQgKgRgJgRQgWgrgIgrQgKgwAWgdIAGgHQAMgPARgKQAmgWAwgLQAtgKAoAbQAjAWAoAeIA+AzIgDABQABABAAAAQABAAABAAQAAAAABAAQABAAAAgBIAJgEQAngNAkgKQApgKAXglQAyAcghAjQgKAKgLAGQAaACAFAcQACAKgTAFQgMAEgMABIgJABIgFAAIgCAAIgCAAIgBAAIABAAIACAAIACAAIAFAAIAJgBQAxANgsAXQgOAHgNgEQA7AghDAJQgFABgDgCIgDgDIgEgFIAEAFQAAAEADABQAvALgvAYQgIADgJgGIgDgCIgLgKIALAKQgLANgLAFQgUAIgYgOQgVACgSAKQgTAKgaAAIgggMIAAgBQgHgKAAgRIABgQIgBAQQAAARAHAKIAAABQgyAXgvABIgLAAIgbgBgACBHUIADABIgDgBIgGgDIAGADgACRF9IgIACIAIgCIAEgBIADAAIADAAIAEAAIABAAIAAAAIACAAIACAAIgCAAIgCAAIAAAAIgBAAIgEAAIgDAAIgDAAIgEABgAFAkEQgbgfgxgKQgxgLgwgBQgngBgnAEQAPgwgggFQgOgDgNACQgoAGglAHQgDgIgJgIQAJAIADAIQAJATgfAQQgTAJgRgLQghgUATgkQgPAZgbACQgiACAKgkQAFgWALgTQgRATgkgFQgNgCAAgLQgEggAegWQgLAFgPgCQgpgEAegaQAZgXAigCIgXgMQgKgGgBgIQgKgzA8AbQAqASAOAnIBJgjQAjgRAzAKQAtAJArAOQAvAPAkAWQAmAXAgAfQAfAeAJAtQAKArAFArIAGAzIgVgYgAiummQAFgHADgJQgDAJgFAHg");
	this.shape_9.setTransform(-5.4,1.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(0.1,1,1).p("AhfhbQAHAFAIAEAhfhbQgIgHgGgJQgHgMAOgCQAogHAVAhQgEgMgLgKQgOgMAKgLQAVgXAUATQAVAVAUARQAIAHAIAGQgOgSAAgkQA2gOAGAyQAHA7A3gKQAZgFAMAMQAkAlhHADQgYABgIALQgSAVgFAlQgBAOgCANIgBAAQgaADgHARQgTgCgeABQgbACgVAAQgUABgFAAQhoAggBARQgOgCgJACQABgdATgYQAegmAYgmQAWgeAFgmIABAAQAIAAAHgBAhdgsQAAAAgBAAQgfADgNgTQgGgJAFgHQARgbAbAM");
	this.shape_10.setTransform(-19,-41.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFCC99").s().p("AiuBkQAegmAYgmQAWgeAFgmIABAAIAPgBIgPABIgBAAIgBAAQgfADgNgTQgGgJAFgHQARgbAbAMQAHAFAIAEQgIgEgHgFQgIgHgGgJQgHgMAOgCQAogHAVAhQgEgMgLgKQgOgMAKgLQAVgXAUATQAVAVAUARIAQANQgOgSAAgkQA2gOAGAyQAHA7A3gKQAZgFAMAMQAkAlhHADQgYABgIALQgSAVgFAlIgDAbIgBAAQgaADgHARQgTgCgeABIgwACIgZABQhoAggBARQgOgCgJACQABgdATgYg");
	this.shape_11.setTransform(-19,-41.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(0.1,1,1).p("AggjbQAHAEAKACAggjbQgVgOgBgkQAAgMALgDQAfgIAYAZQgGgJgBgQQgCgpAeAZQAaAWAHAhQAFgOAEgKQAEgLAIgDQAwgSgQBBQgMAsglATQAYAiAXAhQAWAggCA2QgCArgGAtQgIAxgRAnQgRAogaAlQgZAkgoAPQgpARgqALQgXAGgaAIAhThXQgSALgUgdQgNgQAJgTQAPgkAmANQgbgLgGgZQgHgiAkAFQAXACAVAHAhThXQAHgFAHgLAhpAmQAyAHgBgfQABgOgEgMQgMgogMgj");
	this.shape_12.setTransform(57.4,5.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFCC99").s().p("Ah0ElQAbgfACgyQADgzgGgvQgGgmgJgmQAyAHgBgfQABgOgEgMIgYhLQAHgFAHgLQgHALgHAFQgSALgUgdQgNgQAJgTQAPgkAmANQgbgLgGgZQgHgiAkAFQAXACAVAHQAHAEAKACQgKgCgHgEQgVgOgBgkQAAgMALgDQAfgIAYAZQgGgJgBgQQgCgpAeAZQAaAWAHAhIAJgYQAEgLAIgDQAwgSgQBBQgMAsglATIAvBDQAWAggCA2QgCArgGAtQgIAxgRAnQgRAogaAlQgZAkgoAPQgpARgqALIgxAOIAUgZg");
	this.shape_13.setTransform(57.4,5.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(0.1,1,1).p("AipCtQgLAFgOABQgwAEAJg4QArAFAigZQAegXAigWQAFgCAEgCQADgBAAgDQgBABgCABQAAgnABgpQACgyAEgpQAFgwAkgdQAkgeApgPQATgIATAAQAFAAAEAAQAkABAfAlQAdAiATAsQAIASAHASQAIAXAGAYQAFAXgFAXQgBAAAAABQgKAPgNAQQgfAjgxAZQgBgBAAAAQgFgRgZgPAipCtQAFgHAIgHQADgDADgCAh8DFQAEgEADgDQADgEADgDAh8DFQgIAIgLAHQgPALgHgIQgTgVAPgVAB2B8QgQAUgTAJQgVAJgPAQQgEAbgTAKQgKAFgQABQAAACAAACQgBALgHADQgwAWAUgrQACgDgDgDQAAgDgCgDAgnDUQABACgBACQAAAEgEADQgxAvAMhCQgFANgOAGQguAUAVguAhQDMQABgBAAgCQABgDAAgEAgCDdQABgIgBgH");
	this.shape_14.setTransform(-49.7,18.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFCC99").s().p("AgmDaQACgDgDgDIgCgGIACAGIAAAEQAAAEgEADQgxAvAMhCIABgDIABgHIgBAHIgBADQgFANgOAGQguAUAVguQgIAIgLAHQgPALgHgIQgTgVAPgVQAFgHAIgHIAGgFIgGAFQgIAHgFAHQgLAFgOABQgwAEAJg4QArAFAigZQAegXAigWIAJgEQABAAAAgBQABAAAAAAQAAgBABgBQAAAAAAgBIgDACIABhQQACgyAEgpQAFgwAkgdQAkgeApgPQATgIATAAIAJAAQAkABAfAlQAdAiATAsQAIASAHASQAIAXAGAYQAFAXgFAXIgBABQgKAPgNAQQgfAjgxAZIgBgBQgFgRgZgPQAZAPAFARIABABIgLAgQgQAUgTAJQgVAJgPAQQgEAbgTAKQgKAFgQABIAAgGIAAgJIAAAJIAAAGIAAAEQgBALgHADQgQAHgJAAQgQAAANgcgAh1C+IgHAHIAHgHIAGgHIgGAHg");
	this.shape_15.setTransform(-49.7,18.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(0.1,1,1).p("AhzARQgmAZgwAGQgiADgdAIQgPAEgSABQABgFACgFQAFgqASglQASgqAggjQAbgdAdgWQAJgHAJgFQApgdApAAQApgCAgATQAlAUAgArQALAOAKAPQAAAEgDAEADxhgQAGAAAKABQAbAegMAHQAIAQgDAIQgBAGgJABQAGgGAEgBQAHgBAFAHQAYApgmAHQgCAkgUAlQgUAjgkADQgoADgVAhQgLARgTAHQgnAQgdg2QgHgNgJgMQgRgagXgWQgVgUgcgKQgfgLgRgWQgJgNgEgNAChhKQgBgCABgCQgDgTAMgQQAXgeAaALQAfAOgJAWADghLQALgJAFgKQAAgBABgBACCglQgGAFgHAFQgVAOADASQAIAxgyAZQgWAKAFAUAEGAWQAHgBAGgBQAAgEABgFAEQg6QgJAEgZgGAD5geQALADAHAAACCglQAXgSAIgTQADAKAGAMABihVQARAYAPAYAAWCAQACgDACgC");
	this.shape_16.setTransform(11.1,44.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFCC99").s().p("AAmCZQgHgNgJgMIAEgFIgEAFQgRgagXgWQgVgUgcgKQgfgLgRgWQgJgNgEgNQAEANAJANQgmAZgwAGQgiADgdAIQgPAEgSABIADgKQAFgqASglQASgqAggjQAbgdAdgWQAJgHAJgFQApgdApAAQApgCAgATQAlAUAgArQALAOAKAPQAAAEgDAEQADgEAAgEIAgAwIgNAKQgSAMAAAPIAAAFIABANQAAAogrAVQgSAJAAAPIABAGIgBgGQAAgPASgJQArgVAAgoIgBgNIAAgFQAAgPASgMIANgKQAXgSAIgTIAAgEQgDgTAMgQQAXgeAaALQAfAOgJAWIAQABQAbAegMAHIgBAAIgIACIgBAAIgDgBIgQgCIgBAAIAAAAIgBAAIgDgBIADABIABAAIAAAAIABAAIAQACIADABIABAAIAIgCIABAAQAIAQgDAIQAHgBAFAHQAYApgmAHIABgJIgBAJIgNACIANgCQgCAkgUAlQgUAjgkADQgoADgVAhQgLARgTAHQgJAEgIAAQgcAAgXgqgAELgbQgHAAgLgDQALADAHAAgAELgbQAJgBABgGQgEABgGAGgACqg0QgGgMgDgKQADAKAGAMgADwheQgFAKgLAJQALgJAFgKIABgCIgBACgAETAUIAAAAgAhzARIAAAAg");
	this.shape_17.setTransform(11.1,44.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(0.1,1,1).p("AjUiMQAMAGAJADAjUiMQgHgDgHgEQAWgbAdAIQAKgQAPgNQAjgfAngVQAggSAWAVQAjAhgbAmQAOADAQAHQAkARAeAlQABABAAAAQAdAkgCAoQANgHALgIQAbgQAggFQALgBALgCQABgBACAAQAjAJAeAZQAlAgAOAkQAPAqgIAqQgIArgcAlQgbAkgqARQgRAGgUAAQgTABgYgGQgBABgCgBQgPAFgQABQgcAFgYgEQgcgEgSgPQgEgFgFgGQgEgFgFgGQgWgfgXgfQgagkgegkQgegjgMgnQAAgCgBgDAAAh1QgYgNgVARAivimQAHADAGADAj6hkQAAABABACQAMAEALAFAkPg1QgBAAAAgBQgkgmA6gIQgNglAzgDAkPg1QAPAPAPgOAkuAHQgFgDgFgDQAAgdApgZAkuAHQABAAABAAQAXALANgLAkFA6QgCAkgpAEQgeAEgIglQgIgqAwgQAiJAGQgfApgoAJQgcAGgZgEQABgFAAgG");
	this.shape_18.setTransform(-62.8,10.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFCC99").s().p("ABGD/QgcgEgSgPIgJgLIgJgLIgtg+QgagkgegkQgegjgMgnIgBgFIABAFQgfApgoAJQgcAGgZgEIABgLIgBALQgCAkgpAEQgeAEgIglQgIgqAwgQIACAAQAXALANgLQgNALgXgLIgCAAIgKgGQAAgdApgZIACABIAAABIAAAAQAHAGAHAAIAAAAIAAAAQAGAAAGgFIAAAAIABgBIABgBIgBABIgBABIAAAAQgGAFgGAAIAAAAIAAAAQgHAAgHgGIAAAAIAAgBIgCgBIgBgBQgkgmA6gIQgNglAzgDQAMAGAJADQgJgDgMgGIgOgHQAWgbAdAIQAKgQAPgNQAjgfAngVQAggSAWAVQAjAhgbAmQAOADAQAHQAkARAeAlIABABQAdAkgCAoIAYgPQAbgQAggFIAWgDIADgBQAjAJAeAZQAlAgAOAkQAPAqgIAqQgIArgcAlQgbAkgqARQgRAGgUAAQgTABgYgGQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQgPAFgQABQgPACgOAAQgMAAgLgBgAj5hhIAXAJIgXgJIgBgDIABADgAgthxIAAgBIABgBIAAAAIABAAQALgIALAAIABAAIABAAQAJAAAJAFIABABIgBgBQgJgFgJAAIgBAAIgBAAQgLAAgLAIIgBAAIAAAAIgBABIAAABgAiiigIgNgGIANAGg");
	this.shape_19.setTransform(-62.8,10.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(0.1,1,1).p("AEhj7QglgPguAAQgqABgsAJQguALgkAbQgkAcgSAjQgBABgBABQAHATASAMQgLABgNACQgvAKgiAdQgjAfgRAlQgCAEgCAFQgSgfgoAHQgBAAgBAAQgcAGABAjQABAYgVANQgiAWgGAlQgCANAFAKQAEAAAFgBAkqCFQgZAGgKAXQgJAYAQALQAxAkAFg6QAAAaAJARQASAjAHgcQARAvAbgbQAHAUAGABQAvAIgKgnQApAAASgnQAOgeAYggQAAgBAAAAQADgEACgDAjsDcQgBADgBACAjCD1QAEgEAFgGAhpAEQgeAOgIAbAgvCFQAuAGAqABQAuACAsgEQAqgEArgPQAogOAbglQAXgfARgnQASgqgFgvQgFgtgLgnQgJghgPgjAAHh6QACAAABAAQAegBAdAJ");
	this.shape_20.setTransform(-39.4,73.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFCC99").s().p("Ai1EKQgGgBgHgUIAJgKIgJAKQgbAbgRgvIACgFIgCAFQgHAcgSgjQgJgRAAgaQgFA6gxgkQgQgLAJgYQAKgXAZgGIAJgBIgJABQgFgKACgNQAGglAigWQAVgNgBgYQgBgjAcgGIACAAQAogHASAfIAEgJQARglAjgfQAigdAvgKQANgCALgBQgSgMgHgTIACgCQASgjAkgcQAkgbAugLQAsgJAqgBQAuAAAlAPIAHAIQAPAjAJAhQALAnAFAtQAFAvgSAqQgRAngXAfQgbAlgoAOQgrAPgqAEQgsAEgugCQgqgBgugGIAFgHIgFAHIAAABQgYAggOAeQgSAngpAAQAIAggeAAIgPgBgAiPAtQAIgbAegOQgeAOgIAbgABFhyIgBAAIgBgBIgDgBIgBAAIAAAAQgXgGgXAAIgBAAIAAAAIgGAAIgDAAIADAAIAGAAIAAAAIABAAQAXAAAXAGIAAAAIABAAIADABIABABIABAAIAAAAg");
	this.shape_21.setTransform(-39.4,73.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(0.1,1,1).p("AmBpRQAFACAEACQANAHAQAJQAQAIARAJQAQAHANAKQAOALAPAJQAPAKAOAKQAPAJAOAKQAPAKARAJQAQAJAOAMQAMALAKANQAKAPAJAPQAJAPAIAQQAGARAEARQAFARACASQAAASgBARQgEAegEAeQgCAJgBAIQgCANgBANAERBwIAAAAQACgBABgCQAPgDAOgEQASgFASgDQASgDARgFQASgEATgDQASgDAQAGQAQAGAPAKQAPAJAMAMQANANANANQALAMAJAOQAGAQAFASQADAMADAMQACAPgDAOQgDAPgGAPQgKAYgMAWQgGAKgCAKQgCAFgBAFQATADAGASQABADgCAEQASgGASABQAWACAFAPQAGAQgRAHQgQAHgSADQgJACgKAAQgBABAAAAQgBACgCADQgCAEgDAEAmhqEQgBADgBACAmhqEQAFgKgEgRQgDgKAEgIQAHgPARAQQANAMABAUQAAATgIAPQgIANAIAQQgHgCgIAAAoTqsQgCgFABgHQACgQAPgHQARgIAPAJQAPAKANAMQAOAMAFARQAGASANAFAntpdQgHgHgKgGQgNgIgPgGQgQgEgSgBQgHAAgFgFQgKgKAHgNQAIgRASgGQARgEANAIQABACABABQAEAGAJACQARAFAOAIQAMAIAKANAn+odQAAgCgBgBQgJgNgMgJQgPgKgNALQgMALgTAAQgSAAgDgUQgCgTAKgJQAJgGAKgIQAMgJASgCQARgCARAIQARAHALAJQAEADADAEAn+odQAGgDAHgCQAFgBACgGAnIngQgIAFgMgBQgHAAgGACQgTAHgJAOQgJAPgPgNQgMgKgDgQQgEgRAJgOQAKgPANgJQAJgFAJgEAk0lTQgOgIgLgJQgLgKgOgLQgLgIgNgKQgOgLgNgLQgNgLgKgOQgJgLgJgPQgEgGgCgGQADgCADgDQAJgNgDgUAk0lTQABgCACgCQADgDACgEAlPjlQgHgMACgNQACgRAEgPQAEgTAJgPQAFgLAIgIAojLTQgQgBgKACAF/E9QAFgFAGgFQAOgMAFgSAF/E9QgIAGgHAFQgOAMgQAIQgQAHgRADQgTADgRAEQgTAEgSAAQgTAAgRgDQgJgCgMgCAHIIMQgDARgKAMQgKAOgQAHQgRAHgQgIQgRgJADgVQABgSAKgOQAKgOAGgRQADgJgBgKQgDAIgFAGQgIAMgSABQgNABgJgGQgGgDgIgBQgGAOgNAJQgMAIgDgKQgGgRgEgRQgEgSAMgPQAMgMASgDQARgDASgEQgHgRACgRQACgRAIgQQAHgOANgNAH9HfQAEgBADgDAIgG9QARABALAPQALAPACASQACARgTAGQgTAFgQgKQgNgIgHgOQADANADAOQAEATgOAJQgOAKgTgBQgOAAgEgOQgDgIABgIQAAgIACgIQAFgOgFgQAIBHqIgBAAQgBgBAAgDQABACABACgAH/HmQgBgCgBgFAHyHiQAGgBAFgC");
	this.shape_22.setTransform(23.6,-11);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFCC99").s().p("AGAKGQgRgIADgWQABgRAKgOQAKgOAGgRQADgJgBgKQgDAHgFAGQgIAMgSACQgNABgJgHQgGgDgIAAQgGAOgNAIQgMAJgDgKQgGgSgEgRQgEgSAMgOQAMgNASgDIAjgGQgHgRACgSQACgRAIgPQAHgPANgNIALgJQAOgNAFgSQgFASgOANIgLAJIgPAMQgOALgQAIQgQAHgRAEIgkAHQgTADgSABQgTgBgRgDIgVgEQgCgjgFgkQgIgugNgqIgEgNIAMgFQATgJAOgQQAPgSACgYQADABACACQANAJARgCQATgEAOgLIAAAAIADgDIAdgIQASgFASgCIAjgIQASgFATgDQASgDAQAGQAQAHAPAJQAPAJAMAMIAaAbQALALAJAOIALAjIAGAXQACAPgDAPQgDAPgGAPQgKAXgMAXQgGAJgCAKIgDALQATACAGASQABAEgCAEQASgHASACQAWACAFAPQAGAPgRAHQgQAHgSADIgTADIgBAAIgDAFIgFAJIAFgJQARABALAPQALAPACASQACASgTAFQgTAFgQgKQgNgIgHgNIAGAaQAEATgOAKQgOAJgTAAQgOAAgEgPQgDgIABgIQAAgIACgHQADgHAAgIQAAgHgDgIQADAIAAAHQAAAIgDAHQgCAHAAAIQgDARgKANQgKANgQAHQgIAEgIAAQgJAAgIgFgAIAIzIABABIgCgFIABAEgAH9IpIACAGIgCgGIAHgFIgHAFIAAAAgAHyIrIALgCIgLACgAiAhzQgjgRgqgOQgmgMgqgDQgegCgUAHQgHgLACgOQACgQAEgQQAEgSAJgQQAFgKAIgIIADgEIAFgHIgFAHIgDAEQgOgJgLgJIgZgVIgYgSIgbgVQgNgLgKgOQgJgMgJgPIgGgLIAGgGQAHgKAAgPIgBgIIABAIQAAAPgHAKIgGAGQgIAEgMAAQgHgBgGACQgTAHgJAPQgJAPgPgOQgMgJgDgRQgEgRAJgOQAKgPANgIQAJgGAJgEIgBgDQgJgNgMgJQgPgKgNAMQgMAKgTAAQgSABgDgVQgCgTAKgIIATgPQAMgIASgCQARgCARAHQARAHALAJIAHAHIgHgHQgHgHgKgGQgNgIgPgFQgQgFgSAAQgHgBgFgEQgKgLAHgNQAIgRASgFQARgFANAJIACADQAEAFAJADQARAEAOAJQAMAHAKANQgKgNgMgHQgOgJgRgEQgJgDgEgFIgCgDQgCgFABgIQACgQAPgHQARgIAPAKQAPAKANALQAOAMAFARQAGATANAFIgCAFIACgFQAFgLgEgQQgDgLAEgHQAHgPARAPQANAMABAVQAAATgIAOQgIANAIARQgHgCgIgBQAIABAHACIAJAEIAdAPIAhARQAQAIANAJIAdAVIAdATIAdATIAgAUQAQAJAOAMQAMAKAKAOIATAdQAJAPAIARQAGAQAEASQAFARACASQAAARgBARIgIA8IgDASQgCANgBANQgYgcgcgNgAnxnYIgNAEIANgEQAFgCACgFQgCAFgFACg");
	this.shape_23.setTransform(23.6,-18.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(0.1,1,1).p("ADXh4QABACACACQAEAOADAPQAFARADATQADASAFARQAEAQADATQADARgGAQQgGARgJAOQgKAPgLANQgOANgNAMQgMALgNAKQgSAFgRAGQgMADgMACQgPADgOgDQgPgEgPgFQgXgKgVgNQgKgFgKgDQgFgCgFgBQgDATgSAHQgEABgEgCQAHASgBASQgDAVgOAGQgPAFgIgQQgGgQgEgSQgCgJAAgKQgBgBABAAQgDgCgCgBQgFgCgEgDAAKgKQgFgHgFgHQgLgPgIgQQgHgQgEgRQgCgSgEgSQgEgTAAgSQAAgTAEgRQABgIACgNAjDA9QgRgDgMgJQgOgLgHgPQgHgSAIgNQAJgRAVACQASACAOAKQAOAKAQADQAKAEAKgCQgHgDgHgCQgLgIgDgTQAAgNAGgIQADgGABgIQgPgHgIgMQgIgNAKgDQAQgFASgEQASgEAPAMQAMALAEATQACARAEARQARgGARABQARACAQAIQAOAIALAMQAFAGAFAEQAMAOASAFAihB2QACgBACAAQACgBAFgCQACAEACAEAidB1QgDAAgBABIAAAAAiZBoQAAAFADAFAhzCWQgCAQgPALQgPALgSADQgRACgGgUQgFgTAKgPQAIgNAOgIQgNAEgOADQgTAEgKgOQgJgOABgUQAAgNAOgFQAIgCAIAAQAIAAAIADQAOAFAQgF");
	this.shape_24.setTransform(16.3,69.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFCC99").s().p("AhiDfQgGgQgEgSQgCgJAAgKIAAgBIgFgDIgJgFIAJAFQgCAQgPALQgPALgSADQgRACgGgUQgFgTAKgPQAIgNAOgIQgNAEgOADQgTAEgKgOQgJgOABgUQAAgNAOgFQAIgCAIAAQAIAAAIADQAOAFAQgFQgQAFgOgFQgIgDgIAAQgRgDgMgJQgOgLgHgPQgHgSAIgPQAJgPAVACQASACAOAIQAOAKAQAFQAKAEAKgCQgHgDgHgEQgLgIgDgRQAAgNAGgIQADgGABgIQgPgHgIgMQgIgNAKgDQAQgFASgEQASgEAPAMQAMALAEATIAGAiQARgGARABQARACAQAIQAOAIALAKIAKAMQAMAOASAFQgSgFgMgOIgKgMIgKgMQgLgPgIgQQgHgQgEgRIgGgkQgEgTAAgSQAAgTAEgRIADgVQAhgBAkgFQAugIArgOIAMgEIAFAMQAJATARAPQASAPAYACIgDAFQgKAMADARQAEATALAOIADAEIAHAdQAFARADATIAIAjQAEAQADATQADARgGAQQgGARgJAOQgKAPgLANIgbAZQgMALgNAKIgjALQgMADgMACQgPADgOgDQgPgEgPgFQgXgKgVgNQgKgFgKgDIgKgDQgDATgSAHQgEABgEgCQAHASgBASQgDAVgOAGIgHABQgKAAgGgMgAiWCCIAEAIIgEgIQgDgFAAgFQAAAFADAFIgHADIgEABIAAAAIAEgBIAHgDIAAAAgAiWCCIAAAAg");
	this.shape_25.setTransform(16.3,68.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(0.1,1,1).p("AAmlOQgBABAAACQgBAHAEAIQAJAQAEAQQADAOgCAPAAmlOQACgFAGgFQANgKAPAGQASAHAEARQADARABASQABASgIAQQgJARAGANQgDABgCABABajhQALgEAIgOQAGgKAIgCQAQgGABAXQABARgOAQQgNAOgQAEQgPAEgHARQACAEACAFQAFAOAFARQAFASAGASQAGAQADAQQACASADARQAEARAEAPQADARADARQADASAGATQAFARABATQABAQgCAQQgEARgDASQgEARgHARQgIAQgIAPQgKAQgLAOQgMAMgNAMQgYASgYATQgHAEgHAGQgJAHgJAJABMimQgDgHgFgGAAJj7QgBgLgCgLQgEgPgFgOQgHgPgMgNQgFgFgBgHQAAgOAPgFQAQgGAQAJQAPAJAEAPAgujaQAAgBABgCQADgPgCgQQgEgRgRgBQgQgCgNgNQgOgMANgQQAMgQANACQALABANACQAOACAOALQAOALAEASQAHAQACAPQAAAEAAAFAg0iJQgIgCgJgJQgEgGgGgCQgSgIgQADQgSAEgBgUQgBgPAJgNQAKgPAQgEQARgEAPAEQAKACAKAEQAGACAGADQAFADAFgCAg0iJQAEABAEgBQAQgCAMgQAgvBCQgEgQgBgOQgBgPgCgSQgCgMgCgPQgDgSgBgRQgBgRACgRQACgPAEgQQACgHACgGAiPB7QADgMALgIQANgKAOgJQAQgJARgGQALgDALAAQADgBADAAQAEAAAEgB");
	this.shape_26.setTransform(37.7,-43.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFCC99").s().p("AgZErQgOglgUgnQgRgkgdggQgTgXgTgJQADgMALgIQANgKAOgJQAQgJARgGQALgDALAAQgEgQgBgOIgDghIgEgbQgDgSgBgRQgBgRACgRIAGgfIAEgNQgIgCgJgJQgEgGgGgCQgSgIgQADQgSAEgBgUQgBgPAJgNQAKgPAQgEQARgEAPAEIAUAGIAMAFIABABIAEABIAAAAIABAAIADgBIABAAIgBAAIgDABIgBAAIAAAAIgEgBIgBgBIgMgFIABgDQADgPgCgQQgEgRgRgBQgQgCgNgNQgOgMANgQQAMgQANACIAYADQAOACAOALQAOALAEASQAHAQACAPIgDgWQgEgPgFgOQgHgPgMgNQgFgFgBgHQAAgOAPgFQAQgGAQAJQAPAJAEAPIgBADIgBADQAAAGAEAGQAJAQAEAQQACAIAAAJIgBAMIABgMQAAgJgCgIQgEgQgJgQQgEgGAAgGIABgDIABgDQACgFAGgFQANgKAPAGQASAHAEARQADARABASQABASgIAQQgJARAGANIgFACIAFgCQALgEAIgOQAGgKAIgCQAQgGABAXQABARgOAQQgNAOgQAEQgPAEgHARIAEAJIAKAfIALAkQAGAQADAQQACASADARIAIAgIAGAiQADASAGATQAFARABATQABAQgCAQIgHAjQgEARgHARQgIAQgIAPQgKAQgLAOQgMAMgNAMIgwAlIgOAKQgJAHgJAJQACglgKgdgAgpBBIgGABIAGgBIAIgBIgIABgAgsiJQAQgCAMgQQgMAQgQACIgEAAIgEAAIAEAAIAEAAgABMimQgDgHgFgGQAFAGADAHgAAJjyIAAgJIAAAJg");
	this.shape_27.setTransform(37.7,-43.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(0.1,1,1).p("AB1geQAkgeAvgKQAggHAcgLQAQgGARgDQAAAGgBAFQgBArgOAoQgNAqgdAlQgXAggbAZQgIAIgIAGQgmAhgpAFQgoAGgkgPQgmgQgkgnQgNgNgMgOQABgEABgEAkQAGQgBghAPgoQAQgkAkgHQAogIARgjQAJgRASgKQAlgUAjAzQAIAMAKALQgBADgBADAh5AyQAFgGAHgFQATgSgFgTQgNgtAvgeQAVgNgHgTAiUBaQABACAAACQAEASgKASQgTAhgbgJQghgLAHgWAh5AyQgVAUgGAUQgEgKgIgLAhVBeQgSgVgSgXAB1geQAKAMAGAOAggh+QAVAYAZAUQAWARAeAHQAgAIATAUAkCAEQgIABgGABQAAAFAAAEAkMA/QgHACgFgHQgdgoAlgMAkMA/QABgHAIgCQgFAHgEACgAkEBWQgKgPACgIAkEBWQAIgEAaADAjxA3QgLgCgHABAjTBhQgKALgDAKQgBABAAACQgGABgLgBQgegbAMgI");
	this.shape_28.setTransform(-61.1,38.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFCC99").s().p("AAOCwQgmgQgkgnIgZgbIACgIIgCAIIgkgsIAMgLQAPgOAAgPIgBgIQgDgIAAgKQABgiAkgXQAQgKAAgNQAAgEgCgFQACAFAAAEQAAANgQAKQgkAXgBAiQAAAKADAIIABAIQAAAPgPAOIgMALQgVAUgGAUQgEgKgIgLQAIALAEAKIABAEQAEASgKASQgTAhgbgJQghgLAHgWQgGABgLgBQgegbAMgIIABAAQAEgCALAAIAAAAIABAAIAEAAIAEAAIADAAIABAAIABAAIAAAAIAEABIgEgBIAAAAIgBAAIgBAAIgDAAIgEAAIgEAAIgBAAIAAAAQgLAAgEACIgBAAQgKgPACgIQAEgCAFgHQgIACgBAHQgHACgFgHQgdgoAlgMQgBghAPgoQAQgkAkgHQAogIARgjQAJgRASgKQAlgUAjAzQAIAMAKALIgCAGIACgGQAVAYAZAUQAWARAeAHQAgAIATAUQAKAMAGAOQgGgOgKgMQAkgeAvgKQAggHAcgLQAQgGARgDIgBALQgBArgOAoQgNAqgdAlQgXAggbAZIgQAOQgmAhgpAFIgVACQgdAAgagLgAjgB2IgBADIABgDQADgKAKgLQgKALgDAKgAjxA3IgCAAIgGgBIgCAAIgBAAIgBAAIgBAAIgEAAIgBAAIABAAIAEAAIABAAIABAAIABAAIACAAIAGABIACAAIAAAAgAkQAGIAAAJIAAgJIAOgCIgOACg");
	this.shape_29.setTransform(-61.1,38.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(0.1,1,1).p("Ajih3QgUAeglgRQgdgMALgkQAPgoAyAKQgDgFgEgGQAQgaAwgBQAGAUAUgEAjsi4QAAABABABQAOAUARgCAjih3QADgEADgFABWiNQgPgYgaAEAgnkQQAQgIAUgFQArgJAtACQAlAAAIAcQAQAwgsATQALAJALAPQAXAhAIAvQgBABABAAQAHAvgWAgQAPABAOgBQAfgBAfAMQAJACALAEQACAAABABQAaAaANAjQAQAugGApQgIAsgcAgQgdAhgrASQgpASgtgGQgSgDgRgKQgRgJgSgSQgBAAgBAAQgQgEgOgGQgYgLgUgQQgWgRgIgWQgBgGgBgIQgBgGgBgIQgGgngEgmQgFgsgIgsQgIgtAJgoQABgCABgDAhUkMQAHALAHAIAgnkQQAEAFAEAGAhUkMQgFgGgEgHQAhgMAVAVAizjeQgBAAAAgCQgMgzA3AXQgBABAAABQAJALAGAJAhdhmQgvAUgngNQgcgJgTgPAiJj8QAHgmAuAW");
	this.shape_30.setTransform(-59.9,-17.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFCC99").s().p("ABtEkQgSgDgRgKQgRgJgSgSIgCAAQgQgEgOgGQgYgLgUgQQgWgRgIgWIgCgOIgCgOQgGgngEgmQgFgsgIgsQgIgtAJgoIACgFIgCAFQgvAUgngNQgcgJgTgPIAGgJIgGAJQgUAeglgRQgdgMALgkQAPgoAyAKIgHgLQAQgaAwgBIABACIAAAAQAFAPAOAAIAAAAIAAAAIAGgBIgGABIAAAAIAAAAQgOAAgFgPIAAAAIgBgCIgBgCQgMgzA3AXIgBACIAPAUIgPgUIABgCQAHgmAuAWQAHALAHAIQgHgIgHgLIgJgNQAhgMAVAVQAQgIAUgFQArgJAtACQAlAAAIAcQAQAwgsATQALAJALAPQAXAhAIAvIAAABQAHAvgWAgQAPABAOgBQAfgBAfAMIAUAGIADABQAaAaANAjQAQAugGApQgIAsgcAgQgdAhgrASQgeANggAAQgMAAgMgBgABWiNIAAgCIAAAAQgNgTgUAAIgBAAIAAAAIgHABIAHgBIAAAAIABAAQAUAAANATIAAAAIAAACgAjPikIADAAIgDAAIAAAAIgBAAQgMAAgLgOIgBgBIgBgBIgBgBIgBgBIgBgCIABACIABABIABABIABABIABABQALAOAMAAIABAAIAAAAgAgfkFIgIgLIAIALg");
	this.shape_31.setTransform(-59.9,-17.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(0.1,1,1).p("ABbkPQAhAIAbAkQAJAMAIAOQAOAaAJAeQANArAOAsQAMAkABAvQABAsgYApQgbAugwAFQgwAHgsAJQgmAIgdAWIAAgBQgGgEgFgFAg6DzQACAKgDALQgEANgLgIQgggYAIgmQgGALAAAQQACARgOABQggABAAgbQgCgfgCgaQgBgLgCgJQgCAWgaAZQgwgcAfgoQAlgugtggQgWgPAAgQQAAgyA1AuQARARAOgDQAcgDAegXQAjgaAkgUQAWgNgBgVQgDgmgegMAgaDPQABABABAAQAXAUgEAXQgDAKgIACQgfAHgLgbQgBgJgDgJ");
	this.shape_32.setTransform(36.9,39.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFCC99").s().p("AhKENQgggYAIgmQgGALAAAQQACARgOABQggABAAgbIgEg5IgDgUQgCAWgaAZQgwgcAfgoQAlgugtggQgWgPAAgQQAAgyA1AuQARARAOgDQAcgDAegXQAjgaAkgUQAWgNgBgVQgDgmgegMIAcgQIACgCQATgPAQgVQAbglAWgrIAGgKQAhAIAbAkQAJAMAIAOQAOAaAJAeIAbBXQAMAkABAvQABAsgYApQgbAugwAFQgwAHgsAJQgmAIgdAWIAAgBIgLgJIALAJIAAABIACABQAXAUgEAXQgDAKgIACQgfAHgLgbQACAKgDALQgCAIgFAAQgEAAgEgDgAg6DzQgBgJgDgJQADAJABAJg");
	this.shape_33.setTransform(36.9,39.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(0.1,1,1).p("AjQBhQgGAZghANQgMAFgGgJQgTgaAPghQgHAIgOAHQgmAQANglQALggAdgTQgPABgMAAQgLAAgGgHQgigkBCgIQAugFAfAcQAXgjAWghQAXghAzgRQArgPAsgJQAugLArACQArABAsAKQAqALAeAiQAeAgAaAjQAPATAQAVAhCBhQARAMgUAeQgKARgVgBQgngBgCgoQAAAcgWAQQgdASgJgkQgHgWAAgVQABgJgBgJAA7BHQgMgxgdAMQgOAEgIAJQgiAZgcAZQgHgFgNgC");
	this.shape_34.setTransform(-46.6,-42.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFCC99").s().p("AjJCMQgHgWAAgVIABgJIgBgJIABAJIgBAJQgGAZghANQgMAFgGgJQgTgaAPghQgHAIgOAHQgmAQANglQALggAdgTIgbABQgLAAgGgHQgigkBCgIQAugFAfAcIAthEQAXghAzgRQArgPAsgJQAugLArACQArABAsAKQAqALAeAiQAeAgAaAjIAfAoIgfgJQgmgOgwARQgwANgqAXQgiASgfAXQgMgxgdAMQgOAEgIAJQgiAZgcAZQgHgFgNgCQANACAHAFQARAMgUAeQgKARgVgBQgngBgCgoQAAAcgWAQQgKAGgHAAQgPAAgGgYg");
	this.shape_35.setTransform(-46.6,-42.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(0.1,1,1).p("AgmjqQACgaAcgFQAIgCAFASQAEANABALQANgxAXAsQAHAOgEANQAgg6AJBCQABAFgCAEQgBABgCACQAEgBABgDQALgvAYAvQADAIgGAJQgBACgBABQgFAHgFAEABjAVQAdAEAOgKQAAAAABAAQAXAyABAvQABAUgCASQAAACAAABQgLAWgTAPQgUAPgUAMQgRALgRAIQgrAXgpAIQgwAJgdgVQgEgDgDgDQgPgNgKgRQgWgmgLgwQgKgtAbgoQAWgjAeglQAagiAZgfQABACAAABQABgDgBgCQgCgEgCgEQgNgngKglQgKgpglgXQAcgyAjAhQAKAKAGAMQgBAIACALQABAEABAEAAxjLQAAACgBABQgBADgCADAAKjhQABAFAAAEQAAAFAAAFAB5inQANAMAFALQAIATgOAYQACAVAKAVQAKATAAAZABWi3QgCACgDAB");
	this.shape_36.setTransform(-30.2,19.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFCC99").s().p("AhjD/IgHgGQgPgNgKgRQgWgmgLgwQgKgtAbgoQAWgjAeglIAzhBIABADQABgDgBgCIgEgIQgNgngKglQgKgpglgXQAcgyAjAhQAKAKAGAMQACgaAcgFQAIgCAFASQAEANABALQANgxAXAsQAHAOgEANQAgg6AJBCQABAFgCAEIgDADIgFADIAFgDQAEgBABgDQALgvAYAvQADAIgGAJIgCADQgFAHgFAEQAFgEAFgHQANAMAFALQAIATgOAYQACAVAKAVQAKATAAAZIgMAeIgBAAIgBABQgJAGgQAAIgBAAIAAAAIgPgBIgBAAIABAAIAPABIAAAAIABAAQAQAAAJgGIABgBIABAAQAXAyABAvQABAUgCASIAAADQgLAWgTAPQgUAPgUAMQgRALgRAIQgrAXgpAIQgPADgNAAQgdAAgUgPgAAwjIIgDAGIADgGIABgDIgBADgAALjOIAAgKIgBgJIABAJIAAAKgAgljXIACAIIgCgIQgBgJAAgHIAAgDIAAADQAAAHABAJg");
	this.shape_37.setTransform(-30.2,19.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(0.1,1,1).p("AiLjhQAegSAqgHQAngEAZAbQAYAfAngDQAUgBARALQAkAWgaA3QgHAOgFAOQgDABgDAAAi7h+QgPgDgKACQgBAAgBABQgFgFgEgKQAIgnANAGQAIAEAKAYAi6jBQgFgFAEgIQATgsAdAZAi6jBQAHgCAFAGQgIgBgEgDgAjKiuQAIgRAIgCAimitQgEgLgEgFABYBcQArARAhAjQAWAZAXATQANALAMANQgFACgFACQgmAVgpAIQgtAKgugFQgogFghgLQgLgDgKgDQgvgQgZgiQgZgggFgnQgGgqAPgyQAFgQAHgRQAJgbALgbQgcgHgVAEQAIgJAFgMAiWhLQgBABgBACQgOAMgUAAQgmAAgHgcQgHghAYgFAhlhIQAHABAIAEQAZAIAOgOQAigjAwAZQAVAMAOgQAh5gSQADgCAFgBABfhUQgKAegDAhQgFAaAJAdQAKAggIAaQgFAPgKANAiCjWQgFgGgEgFQgEADgEAC");
	this.shape_38.setTransform(-59.2,-2.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFCC99").s().p("AA2D6QgogFghgLIgVgGQgvgQgZgiQgZgggFgnQgGgqAPgyIAMghIAUg2QgcgHgVAEQAIgJAFgMQgFAMgIAJIgCADQgOAMgUAAQgmAAgHgcQgHghAYgFIACgBQAKgCAPADQgPgDgKACIgCABQgFgFgEgKQAIgnANAGQAIAEAKAYQgKgYgIgEQAIgRAIgCQAEADAIABQgFgGgHACQgFgFAEgIQATgsAdAZQAegSAqgHQAngEAZAbQAYAfAngDQAUgBARALQAkAWgaA3QgHAOgFAOIgGABIAGgBQgKAegDAhQgFAaAJAdQAKAggIAaQArARAhAjQAWAZAXATQANALAMANIgKAEQgmAVgpAIQgeAHgeAAQgQAAgPgCgABJB4QAKgNAFgPQgFAPgKANgAh5gSIAIgDIgIADgAhFhAQAMgBAIgHIABgBIABAAIAAgBIAAAAIABAAQATgUAZAAIAAAAIAAAAQAQAAAVALIAAAAIACABIABAAIAAAAQAHAEAHAAIAAAAIABAAQAJAAAHgIIAAAAIABAAIAAgBIAAABIgBAAIAAAAQgHAIgJAAIgBAAIAAAAQgHAAgHgEIAAAAIgBAAIgCgBIAAAAQgVgLgQAAIAAAAIAAAAQgZAAgTAUIgBAAIAAAAIAAABIgBAAIgBABQgIAHgMABIgBAAIAAAAQgGgBgHgCIgBAAIAAAAIgBAAIgBAAQgIgEgHgBQAHABAIAEIABAAIABAAIAAAAIABAAQAHACAGABIAAAAIABAAgAimitQgEgLgEgFQAEAFAEALgAiCjWIgJgLIgIAFIAIgFIAJALgABfhUIAAAAg");
	this.shape_39.setTransform(-59.2,-2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},2).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},1).wait(1));

	// tires
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(0.1,1,1).p("AiqmpQAQgcAUgXQAdgfArgNQAHgCAHgCQAmgKAkgHQAvgIAyABQAzABAgAZQANAKAMAKQASANARAMQAIAFAIAFQAdAUAbATQAmAaAmAcQAlAaAaAkQAdAnAfAjQAgAjASArQALAbAIAbQADAKACALQACAFABAGQALAwAEAqQABAagEAYQAAADgBACQgGAPgGAPQgKAZgNAVQgYApgpATQgWAKgaAEQAGgogDgoQgDgxgOgrQgOgtgagjQgcgmgXgnQgYgpgjgjQgighgigkQgfgggmgeQgfgYgsgPQgngOgtgNQgsgNgtgPQgsgOgxgCQgDAAgCAAgAFEGXQgIAUgHASQgBACgBACQgGALgKAJQgUAWgaAKQgZAKgbAGQjhA5hwgsQhvgtgtgQQgjgNhQhZQghghgighQgfgggjgjQgfgggUgoQgUgqgCguQgDgxgDgvQgEgsAMgsQAMgtA5hOQA5hOCfgoQAJgCAKgBQABAAABAAQAYgkAkgSQAkgRAvAAAk5liQAegDAhALQAqAOAuANQAqANAsATQAqATAiAeQAhAbApAZQAmAYAhAfQAkAjAZAhQAcAlAZAiQAbAnAXApQAXApAJAtQAJAvAEAtQAEA0gQAsQgJAXgJAWAhDAAQAnA6ArAqQAxAtAiAuQAkAxgKBHQgJBBhEAMQhAALhAgMQhDgOgvgaQgzgqgcgnQglgmgsgoQgngkgggoQgdglgggtQgJgNACgRQAHhEAjgvQAkgwBRgKQBRgJBwBiQAsAlAfAvgAHdDdQgBACAAACQgDATgJAQQgWAogbAmQgcAmgkATQgNAHgOAF");
	this.shape_40.setTransform(-13.8,14.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#333333").s().p("ABlEVQhDgNgsgaQg0gqgbgoQgmgmgsgoQgngjgggpQgdgigfguQgJgNACgRQAHhGAjgvQAkgwBQgJQBRgJBuBhQAsAlAgAxQAmA7AuAqQAxArAhAuQAkAxgJBHQgJBAhEAMQggAGgfAAQgiAAgigHg");
	this.shape_41.setTransform(-32.2,25.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#666666").s().p("AiQISQhvgtgtgQQgjgNhQhZIhDhCIhChDQgfgggUgoQgUgqgCguIgGhgQgEgsAMgsQAMgtA5hOQA5hOCfgoIATgDIACAAIALgBIAAAAIABAAQAZAAAaAJIBYAbQAqANAsATQAqATAiAeQAhAbApAZQAmAYAhAfQAkAjAZAhIA1BHQAbAnAXApQAXApAJAtQAJAvAEAtIAAAVQAAAngMAkIgSAtIgPAmIgCAEQgGALgKAJQgUAWgaAKQgZAKgbAGQh/AghZAAQhIAAgxgTgAlPitQhRAKgkAwQgjAvgHBEQgCARAJANQAgAtAdAlQAgAoAnAkQAsAoAlAmQAcAnAzAqQAvAaBDAOQBAAMBAgLQBEgMAJhBQAKhHgkgxQgigugxgtQgrgqgng6QgfgvgsglQhnhahMAAIgOABgAFEGXIASgtQAMgkAAgnIAAgVQgEgtgJgvQgJgtgXgpQgXgpgbgnIg1hHQgZghgkgjQghgfgmgYQgpgZghgbQgigegqgTQgsgTgqgNIhYgbQgagJgZAAIgBAAIAAAAIgLABQAYgkAkgSQAkgRAvAAIAFAAQAxACAsAOQAtAPAsANQAtANAnAOQAsAPAfAYQAmAeAfAgIBEBFQAjAjAYApQAXAnAcAmQAaAjAOAtQAOArADAxIABAZQAAAcgEAbQAEgbAAgcIgBgZQgDgxgOgrQgOgtgagjQgcgmgXgnQgYgpgjgjIhEhFQgfgggmgeQgfgYgsgPQgngOgtgNQgsgNgtgPQgsgOgxgCIgFAAQAQgcAUgXQAdgfArgNIAOgEQAmgKAkgHQAvgIAyABQAzABAgAZIAZAUIAjAZIAQAKIA4AnIBMA2QAlAaAaAkQAdAnAfAjQAgAjASArQALAbAIAbIAFAVIADALQALAwAEAqQABAagEAYIgBAFIgMAeQgKAZgNAVQgYApgpATQgWAKgaAEIgBAEQgDATgJAQQgWAogbAmQgcAmgkATQgNAHgOAFIAAAAg");
	this.shape_42.setTransform(-13.8,14.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(0.1,1,1).p("ABPn5QAdgSAdgKQAqgOArAKQAHACAIABQAlAKAlANQAtAQArAaQArAaAPAnQAGAQAGAOQAIAVAJAUQAEAJAEAIQAOAgAOAfQAUArASAsQASAqAEAtQAEAyAJAtQAKAwgIAwQgEAegHAdQgDALgDAKQgCAGgCAGQgPAxgUAqQgMAYgQAUQgCACgCABQgNAMgNAKQgWARgWANQgqAZgugDQgYgCgZgJQAaghATgmQAXguAKgvQALgwgDguQgEgwAAgvQABgygMguQgMgvgLgyQgKgtgRgtQgOgmgfgkQgagggggiQghgiggglQgegjgqgZQgCgCgCgBgAhQoBQAcAOAWAZQAeAiAeAjQAeAhAcAnQAaAmAQAtQAOApAXAsQAVAoAMAtQANAxAEApQAFAvADAtQADAxgCAxQgBAxgQAtQgRAvgUArQgYAwgkAgQgVARgSAQQgSAOgQAMQgCACgCABQgLAHgNACQgaALgcgEQgbgDgagIQjjg+hJhgQhKhhgeglQgXgdgXh5QgMgugLgtQgLgtgMgwQgKgtAEguQAEgwAWgrQAYguAWguQAUgpAigjQAigiBagqQBagqCeArQAJADAJAEQABAAABAAQAogUAoACQAmACApAYAlFluQA4gZBLAgQBLAgAuCQQATA4ACA7QACBHASA9QASBBAFA7QAGA+gtA8QgqA2hBgYQg/gWgygsQgzgugaguQgXhAgDgyQgNg1gRg4QgPg0gHg0QgGgwgDg5QgBgQALgPQAqg8A3gZgAEuGVQgBABgCACQgMAPgRAKQgnAZgsAVQgsAUgpAAQgPgBgOgB");
	this.shape_43.setTransform(-13,16.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#333333").s().p("ABAFkQg/gXgvgsQgzgtgbgvQgWhAgEgxQgMg2gRg4QgPgzgHg1QgGgwgEg5QAAgQAKgPQArg7A3gZQA4gaBJAgQBLAgAtCQQATA4ACA8QADBGARA9QATBBAFA7QAGA+guA8QgdAmgoAAQgSAAgUgHg");
	this.shape_44.setTransform(-35.1,14.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#666666").s().p("AgrIeQgbgDgagIQjjg+hJhgQhKhhgeglQgXgdgXh5IgXhbIgXhdQgKgtAEguQAEgwAWgrIAuhcQAUgpAigjQAigiBagqQBagqCeArQAJADAJAEIACAAQAogUAoACQAmACApAYQAdgSAdgKQAqgOArAKIAPADQAlAKAlANQAtAQArAaQArAaAPAnIAMAeIARApIAIARIAcA/IAmBXQASAqAEAtQAEAyAJAtQAKAwgIAwQgEAegHAdIgGAVIgEAMQgPAxgUAqQgMAYgQAUIgEADIgaAWQgWARgWANQgqAZgugDQgYgCgZgJQAaghATgmQAXguAKgvQAJgkAAgkIgBgWQgEgtAAgsIAAgGIAAgEQAAgwgLgsIgXhhQgKgtgRgtQgOgmgfgkQgagggggiQghgiggglQgegjgqgZIgEgDIAEADQAqAZAeAjQAgAlAhAiQAgAiAaAgQAfAkAOAmQARAtAKAtIAXBhQALAsAAAwIAAAEIAAAGQAAAsAEAtIABAWQAAAkgJAkQgKAvgXAuQgTAmgaAhIgDADQgMAPgRAKQgnAZgsAVQgsAUgpAAQgPgBgOgBIAnghQAkggAYgwQAUgrARgvQAQgtABgxIABgfQAAghgCgiIgIhcQgEgpgNgxQgMgtgVgoQgXgsgOgpQgQgtgagmQgcgngeghIg8hFQgWgZgcgOQAcAOAWAZIA8BFQAeAhAcAnQAaAmAQAtQAOApAXAsQAVAoAMAtQANAxAEApIAIBcQACAiAAAhIgBAfQgBAxgQAtQgRAvgUArQgYAwgkAgIgnAhIgiAaIgEADQgLAHgNACQgTAIgUAAIgPgBgAlFluQg3AZgqA8QgLAPABAQQADA5AGAwQAHA0APA0QARA4ANA1QADAyAXBAQAaAuAzAuQAyAsA/AWQBBAYAqg2QAtg8gGg+QgFg7gShBQgSg9gChHQgCg7gTg4QguiQhLggQgpgSgkAAQgdAAgZALg");
	this.shape_45.setTransform(-13,16.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(0.1,1,1).p("ADBGUQAVAJAWADQApAFApgWQAWgLAXgQQANgJANgKQACgCACgBQASgSAPgXQAZgnAWguQADgFACgGQAFgKAEgKQALgbAJgcQAOguAAguQAAgtAEguQAEgrgJgoQgJgrgLgqQgHgegIgfQgCgIgCgJQgEgSgEgVQgDgOgDgPQgHgmgigaQgigbgmgRQgfgOgggKQgGgDgHgCQglgLgoAMQgcAIgdAQQACABACACQAhAaAVAiQAXAkAYAjQAXAhASAgQAWAkAGAkQAIAsACAqQABAwADAtQADAtgJAwQgIAsgFAuQgEAsgSAuQgRArgcArQgXAjgeAfgAABnlQAXAOAQAZQAVAhAXAjQAWAgASAnQARAlAHArQAGAoANArQAMAnADArQAEAvgDAnQgDAtgFAsQgGAugJAvQgKAugVAqQgXAsgaAoQgdAugmAcQgTAQgTANQAMADANABQAkACArgSQAqgSAngWQARgJAOgOQABgBABgBAABnlQAAAAgBgBQgFgEgIgDQiHgwhYAlQhXAkglAfQgkAfgZAnQgbArgdAqQgbAogMAuQgLAsACArQADAuACArQACAsADAsQABB0AQAdQAVAkAxBfQAzBeDBBFQAWAIAXAFQAZAEAbgIQAMgCALgGQACgBACgCQARgLASgNAlWkXQAwg3A1gVQA3gWA+AhQA+AiARCLQAIA2gJA5QgJBDAFA6QAHA/gGA4QgFA8gzA3QguAxg3gZQg1gYglgsQgmgtgQguQgKg+AGgvQgDgzgGg2QgFgyADgyQADguAGg2QACgPAMgOgACQnXQgggZgkgDQgkgEgnAS");
	this.shape_46.setTransform(-10.2,20);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#333333").s().p("AAAFUQg1gYglgsQgngugQgtQgKg+AGgvQgDgzgFg2QgGgyADgyQADguAGg2QACgQAMgNQAwg3A2gWQA0gWA+AiQA+AiARCLQAIA1gIA5QgKBDAGA7QAGA/gGA4QgFA8gzA2QgeAhgjAAQgRAAgQgIg");
	this.shape_47.setTransform(-30.7,18.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#666666").s().p("AiLIIQgXgFgWgIQjBhFgzheIhGiDQgQgdgBh0IgFhYIgFhZQgCgrALgsQAMguAbgoIA4hVQAZgnAkgfQAlgfBXgkQBYglCHAwQAIADAFAEIABABQAXAOAQAZIAsBEQAWAgASAnQARAlAHArQAGAoANArQAMAnADArQACAbAAAYIgBAjIgIBZQgGAugJAvQgKAugVAqQgXAsgaAoQgdAugmAcIgmAdIgjAYIgEADQgLAGgMACQgSAFgQAAQgJAAgJgBgAjxljQg1AVgwA3QgMAOgCAPQgGA2gDAuQgDAyAFAyQAGA2ADAzQgGAvAKA+QAQAuAmAtQAlAsA1AYQA3AZAugxQAzg3AFg8QAGg4gHg/QgFg6AJhDQAJg5gIg2QgRiLg+giQgmgUgiAAQgXAAgWAJgAAAHlQgNgBgMgDIAmgdQAmgcAdguQAagoAXgsQAVgqAKguQAJgvAGguIAIhZIABgjQAAgYgCgbQgDgrgMgnQgNgrgGgoQgHgrgRglQgSgngWggIgshEQgQgZgXgOQAngSAkAEQAkADAgAZIAEADQAhAaAVAiQAXAkAYAjQAXAhASAgQAWAkAGAkQAIAsACAqIAEBdIAAAWQAAAjgGAkQgIAsgFAuQgEAsgSAuQgRArgcArQgXAjgeAfQAegfAXgjQAcgrARgrQASguAEgsQAFguAIgsQAGgkAAgjIAAgWIgEhdQgCgqgIgsQgGgkgWgkQgSgggXghQgYgjgXgkQgVgighgaIgEgDQAdgQAcgIQAogMAlALIANAFQAgAKAfAOQAmARAiAbQAiAaAHAmIAGAdIAIAnIAEARIAPA9IAUBVQAJAogEArQgEAuAAAtQAAAugOAuQgJAcgLAbIgJAUIgFALQgWAugZAnQgPAXgSASIgEADIgaATQgXAQgWALQgpAWgpgFQgWgDgVgJIgCACQgOAOgRAJQgnAWgqASQgnAQghAAIgHAAgAgZHhIAAAAg");
	this.shape_48.setTransform(-10.2,20);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(0.1,1,1).p("AFSEzQAhgBAcgGQAogKAbgcQAEgFAFgFQAXgZATgcQAYgiAQgoQARgogNgkQgFgPgFgNQgGgUgGgQQgCgJgDgIQgJgfgIgdQgMgqgNgpQgNgogZgjQgcgogWgnQgXgogjggQgWgUgXgSQgIgHgJgGQgFgDgFgEQgqgcgpgWQgYgMgZgHQgDAAgCgBQgRgCgQgBQgbgCgZABQgvACgfAZQgRANgNATQAoALAkATQAuAXAkAdQAmAfAbAkQAbAlAdAjQAfAkAVArQAUAoAXAqQAUAmAPAqQAMAgAAAqQAAAlgEAoQgDAqgCAqQgBApgPAnQgBACgBACgADdGHQAMgXABgeQACgoADgpQADgngEgrQgEgpgPgoQgPgmgKgrQgJgmgTgnQgVgrgWgiQgaglgagjQgcgmgggkQgdgjgogZQgqgbgpgWQgwgZgwgFQgagDgXgCQgWgDgUgBQgCAAgDAAQgNAAgLAFQgcAGgSAQQgTAQgOASQiFCcADBrQAEBrABAoQAAAhA6BkQATAoAVApQATAmAVAqQAUAmAgAgQAhAiAsAVQAtAWAuAXQApAWAvAJQAuAJBdgNQBegMBchtQAGgHAEgHQAAgBABAAQAqgEAegVQAdgVAQgmAg4naQgCgBgCAAQgTgFgTAAQgtAAgtAGQgvAGgeAVQgLAHgKAJAlrjMQgiAvgKA4QgKA7AIAuQAXA6AcAmQAXAuAXAzQAVAuAbAqQAZAmAhAsQAJAMASAGQBFAXA5gIQA4gIAlg8QAkg8g2iBQgUgygigtQgrg1gYg2Qgag6ghgtQgigxhIgWQhAgUgjAxg");
	this.shape_49.setTransform(-7.8,17.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#333333").s().p("AAAEwQgRgGgJgMQghgsgZgmQgcgqgUguQgXg0gYgtQgcgkgWg7QgJgvAKg7QALg4AhgwQAjgwBBATQBHAXAhAwQAgAuAaA6QAZA1ArA3QAjAsAUAyQA3CBglA8QgkA8g7AIQgOACgPAAQgtAAgygRg");
	this.shape_50.setTransform(-25.8,25.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#666666").s().p("AhzITQgvgJgpgWIhbgtQgsgVghgiQgggggUgmIgohQIgohRQg6hkAAghIgFiTQgDhrCFicQAOgSATgQQASgQAcgGQALgFANAAIAFAAIAqAEIAxAFQAwAFAwAZQApAWAqAbQAoAZAdAjQAgAkAcAmIA0BIQAWAiAVArQATAnAJAmQAKArAPAmQAPAoAEApQACAaAAAXIgBAhIgFBRQgBAegMAXIgBABQgEAHgGAHQhcBtheAMQg1AHgnAAQgcAAgTgDgAlrjMQgiAvgKA4QgKA7AIAuQAXA6AcAmQAXAuAXAzQAVAuAbAqQAZAmAhAsQAJAMASAGQBFAXA5gIQA4gIAlg8QAkg8g2iBQgUgygigtQgrg1gYg2Qgag6ghgtQgigxhIgWQgSgGgRAAQgnAAgZAjgADqFSIAFhRIABghQAAgXgCgaQgEgpgPgoQgPgmgKgrQgJgmgTgnQgVgrgWgiIg0hIQgcgmgggkQgdgjgogZQgqgbgpgWQgwgZgwgFIgxgFQAKgJALgHQAegVAvgGQAtgGAtAAQATAAATAFIAEABQAoALAkATQAuAXAkAdQAmAfAbAkQAbAlAdAjQAfAkAVArIArBSQAUAmAPAqQAMAfAAAnIAAAEQAAAlgEAoQgDAqgCAqQgBApgPAnIgCAEQgQAmgdAVQgeAVgqAEQAMgXABgegAFSEzIAAAAgAFUEvQAPgnABgpQACgqADgqQAEgoAAglIAAgEQAAgngMgfQgPgqgUgmIgrhSQgVgrgfgkQgdgjgbglQgbgkgmgfQgkgdgugXQgkgTgogLQANgTARgNQAfgZAvgCQAZgBAbACIAhADIAFABQAZAHAYAMQApAWAqAcIAKAHIARANQAXASAWAUQAkAgAWAoQAWAnAcAoQAZAjANAoIAZBTIARA8IAFARIAMAkIAKAcQANAkgRAoQgQAogYAiQgTAcgXAZIgJAKQgbAcgoAKQgcAGghABIACgEgAkemvIAAAAg");
	this.shape_51.setTransform(-7.8,17.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(0.1,1,1).p("ADnnHQAAAEAAADAhtnLQAigfAWgcQAKgMAQgHQAUgHAcACQArADAlANQArAOAjAQQAbANAZAcQAEAFAFAFQAVAbAaAWQAGAGAGAFQAhAbAXAkQARAaAQAYQAHALAIALQATAbAJAkQAJAjALAlQACAGACAGQAOAqAIAvQAFAiABAiQABAJAAAIQAAAhgHAgQgLAsgSAqQgRAqgjAeQggAbgnAPQgXAJgOgHQAQgfAFgiQAGgpAFgrQAGgrgKgsQgJgrgPgqQgOgngJgqQgKgtgQgpQgRgqgXgoQgXgmgagiQgbgjglgXQgngZgngTQglgSgogVQgVgLgXgDgABmG+QARgcAIggQALgtgEgvQgFgvgBgtQgBgvgKgrQgKgtgQgrQgQgpgWgmQgWgmgRgrQgQgrgfgiQgfgigegiQgfgigngWQglgUgmgTQgRgJgSgEQAlgZAhgYQAVgPAdgFQAXgEAWADABmG+QgFAJgGAIQgZAkgmAYQgSAMgRAIAEgFSQgEAKgGAJQgWAkglAYQggAVgtAHQgXAEgRgDAnhkBQAAAAgBgBQgBAAAAAAQAAAAAAAAQAFgTAIgSQATgnAmgcQAlgaAvgFQAbgCAZAFQABABACAAAnhkBQAEABADAAAnhkBQACABACABQABACABAC");
	this.shape_52.setTransform(-7.3,19.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(0.1,1,1).p("AD2GHQgpAKguAKQiEgNhihJQgJgNgKgPQg2hVguhtQgyh2gEiCQgEiNAVh8");
	this.shape_53.setTransform(-32.9,35);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFF00").s().p("AgCgBIgBgBIAAAAIAHACIgFgBIgBAAIABAAIACABIACADIgCgDIgCgBIAFABIgBADg");
	this.shape_54.setTransform(-55.3,-5.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#666666").s().p("Ak+HUIgSgdQg3hVguhsQgyh5gEh/QgEiOAVh8IAHAHIACgFIgJgDQAFgTAIgRQATgnAmgcQAlgaAvgFQAbgDAZAGIADABIBGgxQAVgPAdgFQAXgEAWADQAhggAWgbQAKgNARgGQASgHAeACQArADAlAMQAqAPAkAQQAbANAZAcIAAADIAAAEIAAgEIAAgDIAIAKQAWAbAZAWIANALQAhAbAXAkIAhAyIAPAWQASAbAKAkQAJAjALAkIAEANQAOAqAHAuQAGAiABAjIABARQAAAggIAgQgKAtgSAqQgRApgjAfQggAbgoAPQgWAJgOgHQAQggAFghIALhUQACgPAAgQQAAgcgGgcQgJgrgPgqQgOgngKgqQgJgtgQgpQgRgqgXgoQgXgmgagiQgcgkglgWQgmgZgogTQglgSgngVQgVgLgXgDQAXADAVALQAnAVAlASQAoATAmAZQAlAWAcAkQAaAiAXAmQAXAoARAqQAQApAJAtQAKAqAOAnQAPAqAJArQAGAcAAAcQAAAQgCAPIgLBUQgFAhgQAgIgKASQgXAlgkAYQggAUgtAIQgXAEgRgDQARgcAIghQAIgfAAggIgCgcQgEgvgBguQgBgugKgsQgLgsgPgsQgQgogWgmQgWgmgRgrQgSgrgdgiIg+hEQgegigogWQgkgVgmgSQgRgJgSgEQASAEARAJQAmASAkAVQAoAWAeAiIA+BEQAdAiASArQARArAWAmQAWAmAQAoQAPAsALAsQAKAsABAuQABAuAEAvIACAcQAAAggIAfQgIAhgRAcIgLARQgaAkglAYQgSAMgTAIIhWAVQiEgNhkhJgADwnRIAAAAg");
	this.shape_55.setTransform(-8.2,20.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(0.1,1,1).p("ABPn5QAdgSAdgKQAqgOArAKQAHACAIACQAlAJAlANQAtAQArAaQAsAaAOAnQAGAQAGAOQAIAVAJAUQAEAJAEAIQAOAgAOAfQAUArASAsQASAqAEAtQAEAyAJAtQAJAwgHAwQgEAfgHAcQgDALgDAKQgCAGgCAGQgPAxgVAqQgLAYgQAUQgCACgCACQgNALgNAKQgWARgWANQgqAZgugDQgYgCgZgJQgBABgCACQgNAPgQAKQgnAZgsAVQgsAUgpAAQgPgBgOgBQgRAOgRAMQgCACgCABQgLAHgNACQgaALgcgEQgbgDgagIQjjg+hKhgQhJhggegmQgXgdgXh4QgMgugMguQgKgsgMgxQgKgtAEguQAEgwAWgrQAYguAWguQAUgpAigjQAigiBagqQBagqCeArQAJADAJAEQABAAABAAQAngUApACQAmACApAYQACABACACQAqAZAeAjQAgAlAhAjQAgAhAaAgQAfAlAOAlQARAtAKAtQALAyAMAvQAMAugBAyQAAAvAEAwQADAugLAwQgKAvgXAuQgTAmgaAhAlFltQA4gaBLAgQBLAgAuCQQATA4ABA7QADBHASA9QATBBAEA7QAGA+gtA8QgqA2hBgXQg/gXgygsQgzgugaguQgXhAgDgyQgNg1gRg4QgPg0gHg0QgGgwgDg5QgBgQALgPQAqg7A3gZgABJHxQASgQAUgRQAlggAYgwQAUgrARgvQAQgtABgxQACgxgDgxQgDgtgFgvQgEgpgNgxQgMgtgVgoQgXgsgOgpQgQgtgagmQgcgngeghQgegjgeghQgWgagcgO");
	this.shape_56.setTransform(-14.7,16.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#333333").s().p("ABBFkQhAgXgvgsQgzgtgbgvQgWhAgDgyQgNg1gRg4QgQg0gGg0QgGgwgEg5QAAgQALgPQAqg7A3gZQA4gaBJAgQBLAgAuCQQASA4ACA7QADBHARA9QATBBAFA7QAGA+guA8QgdAmgoAAQgSAAgTgHg");
	this.shape_57.setTransform(-36.9,14.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#666666").s().p("AgrIeQgbgDgagIQjjg+hKhgQhJhggegmQgXgdgXh4IgYhcIgWhdQgKgtAEguQAEgwAWgrIAuhcQAUgpAigjQAigiBagqQBagqCeArQAJADAJAEIACAAQAcAOAWAaIA8BEQAeAhAcAnQAaAmAQAtQAOApAXAsQAVAoAMAtQANAxAEApIAIBcQACAiAAAiIgBAeQgBAxgQAtQgRAvgUArQgYAwglAgIgmAhIgiAaIgEADQgLAHgNACQgTAIgUAAIgPgBgAlFltQg3AZgqA7QgLAPABAQQADA5AGAwQAHA0APA0QARA4ANA1QADAyAXBAQAaAuAzAuQAyAsA/AXQBBAXAqg2QAtg8gGg+QgEg7gThBQgSg9gDhHQgBg7gTg4QguiQhLggQgpgSgkAAQgdAAgZAMgABmHzQgPgBgOgBIAmghQAlggAYgwQAUgrARgvQAQgtABgxIABgeQAAgigCgiIgIhcQgEgpgNgxQgMgtgVgoQgXgsgOgpQgQgtgagmQgcgngeghIg8hEQgWgagcgOQAngUApACQAmACApAYIAEADQAqAZAeAjQAgAlAhAjQAgAhAaAgQAfAlAOAlQARAtAKAtIAXBhQALAsAAAwIAAAEIAAAGQAAAsAEAtIABAWQAAAkgJAkQgKAvgXAuQgTAmgaAhIgDADQgNAPgQAKQgnAZgsAVQgrAUgnAAIgDAAgAFfGgQgYgCgZgJQAaghATgmQAXguAKgvQAJgkAAgkIgBgWQgEgtAAgsIAAgGIAAgEQAAgwgLgsIgXhhQgKgtgRgtQgOglgfglQgaggggghQghgjggglQgegjgqgZIgEgDQAdgSAdgKQAqgOArAKIAPAEQAlAJAlANQAtAQArAaQAsAaAOAnIAMAeIARApIAIARIAcA/IAmBXQASAqAEAtQAEAyAJAtQAJAwgHAwQgEAfgHAcIgGAVIgEAMQgPAxgVAqQgLAYgQAUIgEAEIgaAVQgWARgWANQgmAWgoAAIgKAAgAhQoBIAAAAg");
	this.shape_58.setTransform(-14.7,16.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(0.1,1,1).p("AkVl4QADgBACgBQAwgLAuAEQAwADAwABQAvABAnAEQAvAEAlARQAsAUAmAYQArAcAqAZQArAaAjAjQAgAhAlAgQAjAeAaAqQAaAoAQAvQAOAoAFAqQAAACAAACQABATgEAUQgKAtgQAtQgRAugdAcQgLALgLAJQACgYACgbQAEgwgSgzQgQgtgWgtQgUgrghgjQgigiglghQgigeglgeQghgbgsgZQgogYgrgNQgtgPgogTQgqgVgugIQgvgIgtgCQgvgCgtgCQgigDgdAKQANgqAfgcQAdgaAugMQAIghAOgcQATgnAlgYQAHgEAHgEQAhgUAjgRQArgUAxgMQAvgNAmASQAPAHAPAGQAVAJATAHQAJAEAJADQAhANAgALQAsARAsASQArARAiAdQAnAhAnAbQAoAbAeAnQASAZAPAZQAGAJAFAKQADAFADAGQAXAtAPAsQAJAaADAZQAAADAAACQgBASgCAQQgEAcgGAWQgMAvgjAfQgSAQgYALAGrFQQgDAWgCAUQgBADAAACQgDANgIALQgMAbgXARQgVARgYANQjMB0h4gQQh2gQgvgFQgmgEhlhFQgpgYgqgZQgngZgqgaQgogYgdgjQggglgOgvQgQgxgRgwQgPgrAAgwQAAgxAihbQAhheCOhRQAJgFAJgDQABAAABgBAg+AZQA1AyA2AeQA7AhAtAmQAwApAKBKQAJBDg+AeQg9AdhCAEQhCADg0gOQg9gdglghQgvgcg2gdQgvgagqghQgmgdgqgmQgMgLgDgSQgMhIAVg5QAWg3BLgfQBLgeCHBFQA1AaArAng");
	this.shape_59.setTransform(-17.1,12.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#333333").s().p("AAqD0Qg7gdglghQgvgdg1gdQgvgZgqghQgmgdgrglQgMgKgCgSQgNhIAWg5QAVg6BLgeQBMgeCHBFQAyAaAsApQA1AyA3AeQA8AhAtAkQAwAoAKBKQAJBEg/AeQg9AchBAEIgcABQg0AAgpgLg");
	this.shape_60.setTransform(-30.7,29.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#666666").s().p("AAGJFQh2gQgvgFQgmgEhlhFIhTgxIhRgzQgogYgdgjQggglgOgvIghhhQgPgrAAgwQAAgxAihbQAhheCOhRQAJgFAJgDIACgBQANgqAfgcQAdgaAugMIAFgCQAlgIAjAAIABAAIAAAAIATABIACAAQAwADAwABQAvABAnAEQAvAFAlAQQAsAUAmAYIBVA1QArAaAjAjQAgAhAlAgQAjAeAaAqQAaAoAQAvQAOAoAFAqQgFgqgOgoQgQgvgagoQgagqgjgeQglggggghQgjgjgrgaIhVg1QgmgYgsgUQglgQgvgFQgngEgvgBQgwgBgwgDIgCAAIgTgBIAAAAIgBAAQgjAAglAIIgFACQAIghAOgcQATgnAlgYIAOgIQAhgUAjgRQArgUAxgMQAvgNAmASIAeANIAoAQIASAHIBBAYIBYAjQArARAiAdQAnAhAnAbQAoAbAeAnQASAZAPAZIALATIAGALQAXAtAPAsQAJAaADAZIAAAFIgDAiQgEAcgGAWQgMAvgjAfQgSAQgYALIAAAEQABATgEAUQgKAtgQAtQgRAugdAcQgLALgLAJIAEgzIABgQQAAgpgPgqQgQgtgWgtQgUgrghgjQgigiglghIhHg8QghgbgsgZQgogYgrgNQgtgPgogTQgqgVgugIQgvgIgtgCIhcgEIgCAAIgFgBIgGAAIAAAAIgBAAQgaAAgXAIQAXgIAaAAIABAAIAAAAIAGAAIAFABIACAAIBcAEQAtACAvAIQAuAIAqAVQAoATAtAPQArANAoAYQAsAZAhAbIBHA8QAlAhAiAiQAhAjAUArQAWAtAQAtQAPAqAAApIgBAQIgEAzIgFAqIgBAFQgDANgIALQgMAbgXARQgVARgYANQi0BmhyAAQgQAAgOgCgAlwhPQhLAfgWA3QgVA5AMBIQADASAMALQAqAmAmAdQAqAhAvAaQA2AdAvAcQAlAhA9AdQA0AOBCgDQBCgEA9gdQA+gegJhDQgKhKgwgpQgtgmg7ghQg2geg1gyQgrgng1gaQhegwhBAAQgcAAgXAJg");
	this.shape_61.setTransform(-17.1,12.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43}]},1).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]},1).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_56}]},2).to({state:[{t:this.shape_61},{t:this.shape_60},{t:this.shape_59}]},1).wait(1));

	// head
	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(0.1,1,1).p("AiBiLQAFADAFAGAB0DdQAKgCAIgIQAUgUAagLQAngQgogTQAKgEAFgJQAOgWgEgZQgBAAgOgCQAAgcgDgPQAHABANAJQgBgLgEgKQgWgugXgkQALADALADQANADAIAJQgKglgiggQg2gzg4gSQAXgJATgMQhMgUhKAWQgaAIgFgVQgCAMgJAAQgIgRgLgKQAGAmgLArQgcgWgoAUQgEACgEAB");
	this.shape_62.setTransform(35.2,-18.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#996600").s().p("ABhCnQgSgrgggjQgfgjgbgnQgagigkgaIhNg2Ig3gnIAIgDQAogUAcAWIAKAJIgKgJQALgrgGgmQALAKAIARQAJAAACgMQAFAVAagIQBKgWBMAUQgTAMgXAJQA4ASA2AzQAiAgAKAlQgIgJgNgDIgWgGQAXAkAWAuQAEAKABALQgNgJgHgBQADAPAAAcIAPACQAEAZgOAWQgFAJgKAEQAoATgnAQQgaALgUAUQgIAIgKACQgIgbgLgbgAiBiLIAAAAg");
	this.shape_63.setTransform(35.2,-18.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(0.1,1,1).p("Ag2jFQABAGgBAHAg2jFQgEgkgrgOQgEgCgEgBAiIDoQAJAFAMAAQAcAAAaALQAnAQgPgqQAJAEALgCQAXgGAPgVQgBAAgIgMQAUgTAIgNQAFAGACAPQAHgIAEgKQATgxAJgqQAGAKAGAJQAGALAAAMQATgggCgvQgChIgbg1QAXAKAWAFQgohEhFgmQgYgNALgTQgKAIgFgHQAFgRAAgPQgVAggmAW");
	this.shape_64.setTransform(42.5,11.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#996600").s().p("Ag9D4QgagLgcAAQgMAAgJgFQAOgZALgbQASgrACgwQADguAHgvQAHgrgHgtIgQhcIgMhCIAIADQArAOAEAkIABAIIgBAFIABgFIgBgIQAmgWAVggQAAAPgFARQAFAHAKgIQgLATAYANQBFAmAnBEQgVgFgXgKQAbA1ACBIQACAvgTAgQAAgMgGgLIgMgTQgJAqgTAxQgEAKgHAIQgCgPgFgGQgIANgUATIAJAMQgPAVgXAGQgLACgJgEQALAegSAAQgHAAgKgEg");
	this.shape_65.setTransform(42.5,11.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(0.1,1,1).p("AB0DdQAKgCAIgIQAUgUAagLQAngQgogTQAKgEAFgJQAOgWgEgZQgBAAgOgCQAAgcgDgPQAHABANAJQgBgLgEgKQgWgugXgkQALADALADQANADAIAJQgKglgiggQg2gzg4gSQAXgJATgMQhMgUhKAWQgaAIgFgVQgCAMgJAAQgIgRgLgKQAGAmgLArQgcgWgoAUQgEACgEABAiBiLQAFADAFAG");
	this.shape_66.setTransform(31.3,0.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#996600").s().p("ABhCnQgSgrgggjQgfgjgbgnQgagigkgaIhNg2Ig3gnIAIgDQAogUAcAWQALgrgGgmQALAKAIARQAJAAACgMQAFAVAagIQBKgWBMAUQgTAMgXAJQA4ASA2AzQAiAgAKAlQgIgJgNgDIgWgGQAXAkAWAuQAEAKABALQgNgJgHgBQADAPAAAcIAPACQAEAZgOAWQgFAJgKAEQAoATgnAQQgaALgUAUQgIAIgKACQgIgbgLgbgAh3iCIgKgJIAKAJg");
	this.shape_67.setTransform(31.3,0.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(0.1,1,1).p("Ai9gxQAEgFABgEQAEgOALgOQAGgJAKgIQADgDADgCQAPgMAPgFQANgFANAAQAEAAAEAAQAFABAEABAhbiCQgCADgBADQgKAUAWgDQAJgCADgEQAEgEAAgIQAEACADAEQgDAEgCAFQgBABgBACQgEAJACAMAhCh9QgBAAgBAAQgDgCgDgBQgBgKgFgIQgDgIgFgGQgLgQgGgIQAPAAAQABQAQABAQAEQAYAHAVAKQgBgJgBgIQgCgagNgYQAOAFAJAMQAXAbAQAgQAIAPAHgKQAQgXAFgZQAAAFABAEQAIAdAHAeQABAHgCAGQgDAOAJAAQACABADAAQAfADAfADQgUASgXAQQAIAMAJAKQAJAKAGALQAPAXAOAYQgPgHgRgFQABAEABAFQABATgDARQgDASgIAPQgIAPgQAMQgEAOgLAKQgDABgBACQgOALgTAEQgRADgMgJQgCgDgDAAQgCAYgPASQgOAQgRAJQgGADgHACAg7h3QAHgIALgEQAPgHARADQATADACATQABANgJAMQgCADgCADQgIAIgJAGQgEAEgFADAhFAXQgIAPAAARQAAAGACAEQAEALAQgCQAMgBAJgIQANgLAJgRQAGgLgDgMQAAgEgCgDQgIgIgQABQgTABgKAOQgCAEgDAEgAAEhYQATgCAPAHQAMAFAKAKQABACABABQAKAMAGASQANgBACgJQAGAPgEAUQgEAUgNAPQgLANgOAIQATACANAFQgFAJgHAEQAOAFATAFQAWAGgBAWQgBALgDAJAAXgwQgUAIAFAMQABADAFAAQARgBAIgOQACgEAAgDQAAgIgSAHg");
	this.shape_68.setTransform(40.4,-14.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFF00").s().p("AgEAEQAEgEgBgGIAGAGIgFAHg");
	this.shape_69.setTransform(33.9,-26.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#996600").s().p("ABVCcQABgVgWgHIgggKQAHgEAFgIQgNgGgTgCQANgHALgNQANgPAFgWQAEgUgGgQQgDAKgNAAQgFgPgKgNIgDgCQgKgKgKgGQgPgHgSACQAJgLgCgOQgBgSgVgDQgRgDgQAGQgKAFgHAHIgIgFIgCgBIgGgCQgBgKgEgJIgJgOIgRgXIAfAAQARACAPAEQAZAHAWAKIgCgRQgEgbgMgYQANAFALANQAXAbAOAgQAIAPAHgLQAQgXAFgZQAAAFABAFQAJAdAGAdQABAHgBAHQgEANAJABIAFABIA+AFQgTASgYAQQAIAKAJALQAJAKAHAKIAcAxQgPgHgRgFIACAKQABASgDASQgDARgIAQQgIAPgPAMQADgKAAgLg");
	this.shape_70.setTransform(44.6,-20.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgvBdQgBgEAAgFQgBgSAJgPIAFgIQAKgOATgCQAOgBAIAJIACAHQACAMgGAMQgIAQgLALQgJAIgNABIgDABQgNAAgEgKgAAlAAQgFgLATgIQATgIAAAJIgDAHQgIAMgQAAIgBAAQgEAAgBgBgAhChfIAEgHIAIABIAIACIAGACIACABQABAHgEAEQgEAFgIABIgGAAQgPAAAIgQg");
	this.shape_71.setTransform(37.5,-17.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFCC99").s().p("AgNBwQgJgkgTgcIgPgWIghgwQgXgkghgaIgMgLQADgFABgEQAEgOALgOQAHgJAKgJIAFgEQAPgMAPgFQANgFANAAIgDAGQgKAUAWgEQAJgBAEgEIAFACIAGgIQAHgIAKgEQAOgHARADQAVADABATQABANgJAMIgGAGIgRAOIgJAHIAJgHIARgOIAGgGQATgCAPAGQAMAGAKAKIACADQAKAMAGARQANAAACgKQAHAQgFAUQgEAWgNAPQgLANgOAGQATABANAGQgEAJgIAEIAhAKQAWAGgBAWQAAALgEAJQgEAOgLAKQAAAAgBAAQgBABAAAAQAAAAgBABQAAAAgBABQgNALgUAEQgQADgNgKQgCgCgDAAQgCAYgPASQgOAPgTAKIgNAFQgJgkgJgjgAgEgtQgTACgKAOIgEAIQgJAPAAAPQAAAFACAEQAEAMAQgCQAMgCAJgHQALgMAJgOQAGgMgDgMIgCgGQgGgIgMAAIgEAAgAA2heQgUAIAFAMQACADAEAAQARgBAIgOIACgHQAAgEgFAAQgEAAgJADgAgliEIAAgGQAAgIACgHIACgEIgCAEQgCAHAAAIIAAAGg");
	this.shape_72.setTransform(37.3,-10.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(0.1,1,1).p("AgcCJQAEAIAAAKQABAJgBAIQgBASgCAKQANgHANgJQAMgJALgLQASgTAPgTQADAIADAHQAKAZABAbQAKgLADgQQAHgjgCgkQgCgRAMAGQAZAMARATQgDgEgBgFQgHgdgJgdQgDgGgEgFQgKgKAHgFQACgCACgBQAagSAagQQgagGgdgDQABgOADgNQACgNABgNQAAgdAAgbQgJANgNANQgBgFgCgEQgIgRgLgOQgMgNgOgKQgPgJgTgCAikjFQAHgCAGAAQAWgCAUAHQAWAIANAUQACgCABgDQAGgPAQgGQATgGASADQACABACAAQANADALAKQAHAGAGAKQAMASgQARQgOANgKALQAJAAAIAFQgIAMgOALQAOgBAQAGQATAHAOARQAOAPADARQgIgIgLAHQAEARgDAOQAAACgBACQgDANgIALQgJAOgRAHQgEgBgFgBQgKgDgKgBQgFgBgGgBAgrgSQABADAAAEQgBALgQAFQgRAIgQgHQgDgCgFgCQgPgHgIgPQgDgFAAgEQgCgMAOgGQAMgFALACQARADAQAKQALAHAEAMgAgFAIQgBgDAFgCQAMgGAOAGQAEACACADQAEAHgUADQgTADgBgNgAAUA+QANAFAGANQAIARgRANQgNALgRACQgJACgKgEQgFgBgEgDQgCgBgBgBQgIgHgFgLAgqCTQgDgCgDgCQgSgMAVgIQAIgDAFABQAGACADAHQgBABAAABQgCACgCADQgDADgEACQgDADgEACQgLAGgOADQgQADgSgDQgEgBgDAAQgNgDgLgEQgQgHgLgKQgDgDgFgCAgTB5QgBAFgDAE");
	this.shape_73.setTransform(52.9,21.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFF00").s().p("AgFgBIADgEIAIAEIgEAHQgCgGgFgBg");
	this.shape_74.setTransform(50.2,34);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#996600").s().p("AhdCiIAAgQQAAgKgEgJIAEgFIABgBIAEgJQAKADALgBQARgDANgLQARgNgIgQQgGgNgNgFQARgIAJgNQAIgLADgOIABgDQADgOgEgSQAKgGAGAHQgCgQgMgQQgPgRgSgGQgRgGgPABQAQgLAIgMQgIgFgJAAIAYgZQAQgQgMgTQgGgJgHgGQATACAOAJQAPAJAJAOQAMAOAIARIADAJQAMgNAKgOIAAA5QgBAMgCANQgDAOgBAOQAcADAaAFIgzAiIgEADQgHAFAKALQAEAEADAHQAJAcAHAeQABAEADAFQgRgTgZgMQgMgGABARQACAkgGAiQgDARgKALQgBgbgIgZIgGgQQgPAUgSASQgLAMgOAJIgaAQIADgdg");
	this.shape_75.setTransform(59.8,22.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAABgQgSgNATgIQAIgDAFACQAGACADAHIgBABIgEAFIgHAGIgHAEIgEgDgAApgmQgBgDAFgCQAOgIAOAIIAGAFQAEAHgUADIgHABQgOAAgBgLgAgsgoIgIgEQgPgJgIgPQgDgFAAgEQgCgMAOgGQAMgFALACQARAEAQAJQAKAIADALIABAHQgCAMgNAHQgJAEgIAAQgIAAgIgEg");
	this.shape_76.setTransform(48.1,26.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFCC99").s().p("Ag3CxIgHgBQgNgCgLgEQgQgHgLgKQgDgDgEgDIAFgQQAPgnACgrIADg6IADgaQACghgKgkQgKgjgIglIANgCQAWgBAUAHQAWAIANAUQACgCABgDQAGgPARgGQAQgGASACQAAABABAAQAAAAABAAQAAAAABAAQABAAAAAAQAPAEALAKQAHAGAGAJQAMATgQAQIgYAZQAJAAAIAFQgIALgQALQAQAAAQAGQATAGAOARQAOAQADAOQgHgFgMAEQAEASgDAPIAAAEQgEAOgIALQgJANgRAIIgIgDIgXgEIgLgBIALABIAXAEIAIADQANAFAGAMQAIARgRANQgNALgRACQgLACgKgDIgJgFIgDgCQgIgGgFgLQAFALAIAGIADACIgDAFQgGgCgHADQgUAIASANIAEADQgJAHgOACIgQACIgSgCgAArAYQgFACABADQABANAVgDQAUgDgEgHIgGgFQgHgEgHAAQgHAAgHAEgAhEgaQgOAGACAMQAAAEADAEQAIAOAPAJIAJAEQAPAIASgIQANgHABgMIgBgHQgCgJgLgIQgQgJgRgEIgGAAQgJAAgIADg");
	this.shape_77.setTransform(48.3,19.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(0.1,1,1).p("AiBiLQgcgWgoAUQgEACgEABAiBiLQAFADAFAGAB0DdQAKgCAIgIQAUgUAagLQAngQgogTQAKgEAFgJQAOgWgEgZQgBAAgOgCQAAgcgDgPQAHABANAJQgBgLgEgKQgWgugXgkQALADALADQANADAIAJQgKglgiggQg2gzg4gSQAXgJATgMQhMgUhKAWQgaAIgFgVQgCAMgJAAQgIgRgLgKQAGAmgLAr");
	this.shape_78.setTransform(17.3,-27.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#996600").s().p("ABhCnQgSgrgggjQgfgjgbgnQgagigkgaIhNg2Ig3gnIAIgDQAogUAcAWIAKAJIgKgJQALgrgGgmQALAKAIARQAJAAACgMQAFAVAagIQBKgWBMAUQgTAMgXAJQA4ASA2AzQAiAgAKAlQgIgJgNgDIgWgGQAXAkAWAuQAEAKABALQgNgJgHgBQADAPAAAcIAPACQAEAZgOAWQgFAJgKAEQAoATgnAQQgaALgUAUQgIAIgKACQgIgbgLgbg");
	this.shape_79.setTransform(17.3,-27.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_63,p:{y:-18.1}},{t:this.shape_62,p:{y:-18.1}}]}).to({state:[{t:this.shape_63,p:{y:-4}},{t:this.shape_62,p:{y:-4}}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73}]},2).to({state:[{t:this.shape_79},{t:this.shape_78}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.1,-62.8,163.8,133.7);


(lib.example4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// predicate
	this.instance = new lib.text_predicate("synched",0);
	this.instance.setTransform(219.6,-31.4,1,1,0,0,0,43,14.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(130).to({_off:false},0).to({alpha:1},6).wait(10).to({mode:"single"},0).to({alpha:0.301},3).to({alpha:1},3).to({alpha:0.301},3).to({alpha:1},3).to({alpha:0.301},3).to({alpha:1},3).to({alpha:0.301},3).to({alpha:1},3).wait(91));

	// bracket
	this.instance_1 = new lib.bracketdisplay("synched",0,false);
	this.instance_1.setTransform(222.1,-6.5,1,1,0,0,0,118,11.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(127).to({_off:false},0).wait(134));

	// complement
	this.instance_2 = new lib.text_complement("synched",0);
	this.instance_2.setTransform(287.5,16.4,1,1,0,0,0,47.1,14.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(112).to({_off:false},0).to({alpha:1},9).wait(140));

	// verb
	this.instance_3 = new lib.text_verb("synched",0);
	this.instance_3.setTransform(146.8,16.4,1,1,0,0,0,20.6,14.6);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(24).to({_off:false},0).to({alpha:1},3).wait(234));

	// subject
	this.instance_4 = new lib.text_subject("synched",0);
	this.instance_4.setTransform(35.9,16.4,1,1,0,0,0,35.9,14.6);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({_off:false},0).to({alpha:1},4).wait(255));

	// s_word
	this.instance_5 = new lib.text_sam("synched",0);
	this.instance_5.setTransform(37.1,74.9,1,1,0,0,0,20.4,14.6);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(6).to({_off:false},0).to({alpha:1},5).wait(250));

	// p_word1
	this.instance_6 = new lib.text_came("synched",0);
	this.instance_6.setTransform(147.9,77.1,1,1,0,0,0,23.8,14.6);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(33).to({_off:false},0).wait(228));

	// d_line_s1
	this.instance_7 = new lib.line();
	this.instance_7.setTransform(32,93.5,1,0.185,-45);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(33).to({_off:false},0).to({scaleY:3.14,x:32.5,y:93.7},3).wait(225));

	// p_word_s_adj
	this.instance_8 = new lib.text_a("synched",0);
	this.instance_8.setTransform(71.8,111.3,1,1,0,0,0,15.3,15.3);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(37).to({_off:false},0).to({startPosition:0},3).wait(221));

	// v_line2
	this.instance_9 = new lib.line();
	this.instance_9.setTransform(207.8,68.2,1,0.064);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(121).to({_off:false},0).to({scaleY:0.91},5).wait(135));

	// d_line_s2
	this.instance_10 = new lib.line();
	this.instance_10.setTransform(0,94.4,1,0.185,-45);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(38).to({_off:false},0).to({scaleY:3.14},4).wait(219));

	// p_word_s_adj2
	this.instance_11 = new lib.text_sneaky("synched",0);
	this.instance_11.setTransform(45.4,117.7,1,1,0,0,0,32.2,32.2);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(42).to({_off:false},0).to({startPosition:0},3).wait(216));

	// p_word2
	this.instance_12 = new lib.text_careening("synched",0);
	this.instance_12.setTransform(159.2,130.3,1,1,0,0,0,40.6,40.6);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(52).to({_off:false},0).to({alpha:1},4).wait(205));

	// Layer 23
	this.instance_13 = new lib.text_wildly("synched",0);
	this.instance_13.setTransform(191.3,124.1,1,1,0,0,0,28.6,28.6);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(58).to({_off:false},0).to({alpha:1},5).wait(198));

	// d_line3
	this.instance_14 = new lib.line();
	this.instance_14.setTransform(270.4,154.8,1,0.185,-45);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(100).to({_off:false},0).to({scaleX:1.07,scaleY:2.23,y:154.9},5).wait(156));

	// p_word4
	this.instance_15 = new lib.text_the("synched",0);
	this.instance_15.setTransform(308.6,174.7,1.001,1.001,0,0,0,21.9,21.9);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(106).to({_off:false},0).to({scaleX:1,scaleY:1,y:174.6,alpha:1},6).wait(149));

	// p_word5
	this.instance_16 = new lib.text_down("synched",0);
	this.instance_16.setTransform(231.8,118.7,1,1,0,0,0,26.5,26.5);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(79).to({_off:false},0).to({alpha:1},6).wait(176));

	// d_line2
	this.instance_17 = new lib.line();
	this.instance_17.setTransform(187.3,93.7,1,0.185,-45);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(74).to({_off:false},0).to({scaleY:3.14},5).wait(182));

	// hilline
	this.instance_18 = new lib.line();
	this.instance_18.setTransform(247.7,153.9,0.984,0.022,-90);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(86).to({_off:false},0).to({scaleX:1,scaleY:3.58,x:247.5,y:154},5).wait(170));

	// p_word3
	this.instance_19 = new lib.text_hill("synched",0);
	this.instance_19.setTransform(292.2,139.4,1,1,0,0,0,14.8,14.6);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(91).to({_off:false},0).to({alpha:1},7).wait(163));

	// Layer 26
	this.instance_20 = new lib.line();
	this.instance_20.setTransform(136.7,93.7,1,0.185,-45);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(52).to({_off:false},0).to({scaleY:3.14},3).wait(206));

	// d_line
	this.instance_21 = new lib.line();
	this.instance_21.setTransform(101.4,94.3,1,0.185,-45);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(47).to({_off:false},0).to({scaleY:3.14,y:94.1},3).wait(211));

	// v_line
	this.instance_22 = new lib.line();
	this.instance_22.setTransform(87.4,54.8,1,0.031);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).to({scaleY:2.46},5).wait(256));

	// h_line
	this.instance_23 = new lib.line();
	this.instance_23.setTransform(0,94.4,1,0.022,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).to({scaleY:13.68},5).wait(256));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,54.5,374.4,98.4);


(lib.example3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// predicate
	this.instance = new lib.text_predicate("synched",0);
	this.instance.setTransform(219.6,-31.4,1,1,0,0,0,43,14.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(127).to({_off:false},0).to({alpha:1},6).wait(9).to({mode:"single"},0).to({alpha:0.301},3).to({alpha:1},3).to({alpha:0.301},3).to({alpha:1},3).to({alpha:0.301},3).to({alpha:1},3).to({alpha:0.301},3).to({alpha:1},3).wait(95));

	// bracket
	this.instance_1 = new lib.bracketdisplay("synched",0,false);
	this.instance_1.setTransform(222.1,-6.5,1,1,0,0,0,118,11.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(123).to({_off:false},0).wait(138));

	// complement
	this.instance_2 = new lib.text_complement("synched",0);
	this.instance_2.setTransform(287.5,16.4,1,1,0,0,0,47.1,14.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(75).to({_off:false},0).to({alpha:1},9).wait(177));

	// verb
	this.instance_3 = new lib.text_verb("synched",0);
	this.instance_3.setTransform(146.8,16.4,1,1,0,0,0,20.6,14.6);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(27).to({_off:false},0).to({alpha:1},6).wait(228));

	// subject
	this.instance_4 = new lib.text_subject("synched",0);
	this.instance_4.setTransform(35.9,16.4,1,1,0,0,0,35.9,14.6);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({_off:false},0).to({alpha:1},4).wait(255));

	// s_word
	this.instance_5 = new lib.text_mick("synched",0);
	this.instance_5.setTransform(37.1,74.9,1,1,0,0,0,22.1,14.6);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(6).to({_off:false},0).to({alpha:1},5).wait(250));

	// p_word1
	this.instance_6 = new lib.text_rolled("synched",0);
	this.instance_6.setTransform(147.8,75.7,1,1,0,0,0,26.4,14.6);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(33).to({_off:false},0).to({alpha:1},6).wait(222));

	// p_word2
	this.instance_7 = new lib.text_rapidly("synched",0);
	this.instance_7.setTransform(151.3,121.1,1,1,0,0,0,32.5,32.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(52).to({_off:false},0).to({alpha:1},6).wait(203));

	// p_word3
	this.instance_8 = new lib.text_log("synched",0);
	this.instance_8.setTransform(285.2,74.9,1,1,0,0,0,14.1,14.6);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(82).to({_off:false},0).to({alpha:1},6).wait(173));

	// p_word4
	this.instance_9 = new lib.text_the("synched",0);
	this.instance_9.setTransform(269.3,118.6,1,1,0,0,0,21.9,21.9);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(100).to({_off:false},0).to({alpha:1},6).wait(155));

	// p_word5
	this.instance_10 = new lib.text_rotating("synched",0);
	this.instance_10.setTransform(316.4,124.7,1,1,0,0,0,36.2,36.2);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(100).to({_off:false},0).to({alpha:1},6).wait(155));

	// d_line3
	this.instance_11 = new lib.line();
	this.instance_11.setTransform(263.3,93.9,1,0.185,-45);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(93).to({_off:false},0).to({scaleY:3.14},5).wait(163));

	// d_line2
	this.instance_12 = new lib.line();
	this.instance_12.setTransform(220.9,93.9,1,0.185,-45);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(93).to({_off:false},0).to({scaleY:3.14},5).wait(163));

	// v_line2
	this.instance_13 = new lib.line();
	this.instance_13.setTransform(207.8,68.2,1,0.064);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(63).to({_off:false},0).to({scaleY:0.91},5).wait(193));

	// d_line
	this.instance_14 = new lib.line();
	this.instance_14.setTransform(101.4,95.1,1,0.185,-45);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(47).to({_off:false},0).to({scaleY:3.14},3).wait(211));

	// v_line
	this.instance_15 = new lib.line();
	this.instance_15.setTransform(87.4,54.8,1,0.031);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({scaleY:2.46},5).wait(256));

	// h_line
	this.instance_16 = new lib.line();
	this.instance_16.setTransform(0,94.4,1,0.022,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({scaleY:13.68},5).wait(256));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,54.5,374.4,98.4);


(lib.example2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// predicate
	this.instance = new lib.text_predicate("synched",0);
	this.instance.setTransform(219.6,-31.4,1,1,0,0,0,43,14.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(138).to({_off:false},0).to({alpha:1},6).wait(9).to({mode:"single"},0).to({alpha:0.301},3).to({alpha:1},3).to({alpha:0.301},3).to({alpha:1},3).to({alpha:0.301},3).to({alpha:1},3).to({alpha:0.301},3).to({alpha:1},3).wait(53));

	// bracket
	this.instance_1 = new lib.bracketdisplay("synched",0,false);
	this.instance_1.setTransform(222.1,-6.5,1,1,0,0,0,118,11.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(135).to({_off:false},0).wait(95));

	// complement
	this.instance_2 = new lib.text_complement("synched",0);
	this.instance_2.setTransform(287.5,16.4,1,1,0,0,0,47.1,14.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(120).to({_off:false},0).to({alpha:1},9).wait(101));

	// v_line2
	this.instance_3 = new lib.line();
	this.instance_3.setTransform(207.8,68.2,1,0.064);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(130).to({_off:false},0).to({scaleY:0.91},5).wait(95));

	// verb
	this.instance_4 = new lib.text_verb("synched",0);
	this.instance_4.setTransform(146.8,16.4,1,1,0,0,0,20.6,14.6);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(24).to({_off:false},0).to({alpha:1},3).wait(203));

	// subject
	this.instance_5 = new lib.text_subject("synched",0);
	this.instance_5.setTransform(35.9,16.4,1,1,0,0,0,35.9,14.6);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2).to({_off:false},0).to({alpha:1},4).wait(224));

	// s_word
	this.instance_6 = new lib.text_bub("synched",0);
	this.instance_6.setTransform(37,74.9,1,1,0,0,0,17.8,14.6);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(6).to({_off:false},0).to({alpha:1},5).wait(219));

	// p_word1
	this.instance_7 = new lib.text_flopped("synched",0);
	this.instance_7.setTransform(147.8,77.1,1,1,0,0,0,30.3,14.6);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(33).to({_off:false},0).to({alpha:1},5).wait(192));

	// p_word4
	this.instance_8 = new lib.text_drifting("synched",0);
	this.instance_8.setTransform(324.2,183.2,1,1,0,0,0,35.1,35.1);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(111).to({_off:false},0).to({alpha:1},5).wait(114));

	// d_line3
	this.instance_9 = new lib.line();
	this.instance_9.setTransform(274.8,154.9,1,0.185,-45);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(106).to({_off:false},0).to({scaleX:1.16,scaleY:3.69},5).wait(119));

	// d_line2
	this.instance_10 = new lib.line();
	this.instance_10.setTransform(222.9,155,1,0.185,-45);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(93).to({_off:false},0).to({scaleX:1.1,scaleY:3.47,y:155.4},5).wait(132));

	// p_word5
	this.instance_11 = new lib.text_large("synched",0);
	this.instance_11.setTransform(266,175.9,0.999,0.999,0,0,0,27.1,27.1);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(98).to({_off:false},0).to({regX:27,regY:27,scaleX:1,scaleY:1,x:265.9,y:175.8,alpha:1},4).wait(128));

	// Layer 32
	this.instance_12 = new lib.text_the("synched",0);
	this.instance_12.setTransform(215.7,168.4,1.001,1.001,0,0,0,21.9,21.9);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(84).to({_off:false},0).to({alpha:1},4).wait(142));

	// Layer 31
	this.instance_13 = new lib.line();
	this.instance_13.setTransform(184.1,155.3,1,0.185,-45);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(79).to({_off:false},0).to({scaleX:1.16,scaleY:1.9,y:155.4},4).wait(147));

	// p_word2
	this.instance_14 = new lib.text_down("synched",0);
	this.instance_14.setTransform(151.3,121.1,1,1,0,0,0,26.5,26.5);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(52).to({_off:false},0).to({alpha:1},5).wait(173));

	// d_line
	this.instance_15 = new lib.line();
	this.instance_15.setTransform(101.4,95.1,1,0.185,-45);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(47).to({_off:false},0).to({scaleY:3.14},4).wait(179));

	// p_word3
	this.instance_16 = new lib.text_dunes("synched",0);
	this.instance_16.setTransform(243.7,138.6,1,1,0,0,0,26.2,14.6);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(64).to({_off:false},0).to({alpha:1},7).wait(159));

	// sandunesline
	this.instance_17 = new lib.line();
	this.instance_17.setTransform(162.8,155.7,0.984,0.022,-90);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(58).to({_off:false},0).to({scaleY:6.83,x:161.8},5).wait(167));

	// v_line
	this.instance_18 = new lib.line();
	this.instance_18.setTransform(87.4,54.8,1,0.031);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({scaleY:2.46},5).wait(225));

	// h_line
	this.instance_19 = new lib.line();
	this.instance_19.setTransform(0,94.4,1,0.022,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({scaleY:13.68},5).wait(225));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,54.5,374.4,98.4);


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


(lib.animsamrolls = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sam("synched",0);
	this.instance.setTransform(20.8,19.9,0.462,0.462,0,0,0,45.1,43.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:1080},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,43.8,41.8);


(lib.anim_mick_run = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// front arm
	this.instance = new lib.static_mick_arm("synched",0);
	this.instance.setTransform(86.3,46.4,1,1,-15,0,0,7.9,6.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:8.6,regY:3.7,rotation:135,x:87.3,y:49.3},4).to({regX:7.8,regY:6.1,rotation:0,x:86.2,y:46.4},5).wait(1));

	// body
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(0.1,1,1).p("AGJksQAKgugSgiQAMAqghANQAJgugqgfQAOAggOAjQgFALgFAHQgSAXgdgLQADAFADAGAGnj7QADgHADgHQAIgbgEgaQgLAUgbADIgBAAQgDABgEAAAESkxQgBgBAAgBQgNgWgSgVQgGgHgIgHQAAAAgBgBQgBgBgBAAQAAAAAAAAQAAgBgBAAQgBgBgBAAQgSgOgYgGQgqgKgeAVQgdAVgeALQgSAHgSgIQgYgMgKgWQAJAWANAUQAEAHAGAHQAGAHgCAGQgBAGgJAEQgbAOgggHQgHgBgGgBQAZAPAXASQAEADADAEQAIALgKAMQgPARgagEQAJAFAIAGQATAPAUAIQAGACAGABQABABABAAQAPAEAPACQANACANABQAbAAATgUQAWgYAKgiQALglAkgHQAOgDALABQATABALAMQABABABACQAAAAAAAAQABABAAABQABABAAAAQABABAAABIAAAAQADAGACAGAEbkMQAHABAFABQAFAAADAAQAcgCAMgdAEpjMQgHgEgGgFQgJgHgGgJQAAAAgBgBQAAgBgBgCQgBgBgBgCQgGgMgEgOQgBgGACgIAE1jmQACACADACQAaAVAlgHAElj4QAHADAHADQABAAACAAQAAABABAAQAAAAABAAQAbAJAcgIQAHgDAFgEQAFgFABgGAEXieQADgDACgDQALgRACgXQAXAMAdABQASAAAOgGQAAAAABgBIAAAAQAAAAABAAQABAAABgBQAPgIALgPQAHgKADgLQABgCAAgCQABgCAAgCQgBACgBACQAAACgBACQgFAKgKAHAEUiqQgCAFgDABQgHgQACgFQACgFAMAFQgCAKgCAFgAEJieQADAAADAAQAFAAADAAAEXhoQADAAADAAQAUgBADgWQADgbgggEADdk8QgEgPgMgJQgNgIgVgDQgfgEgVAQQgCABgBABQgBABgBABQAAAAgBAAQAAABgBAAQgDAEgDADQgUAagXgBQgJAAgJgEACDk8QgYAagQAgQAAABAAAAQgSAkghAHQgIABgJgBADdjAQgWgKAFAhQAOgMADgLgADtjSQgVgpgQAfAg3jcQgFAAgFgCQgNgEgJgEQARADAPAHgABDkOQgZAigkgYQgEgDgCgFAAtiwQgYAbgiAOQgiANgkAEQghADgdAUQggAWgcAXQgGAGgHAFQgUATgVAUQgXAUgYAgQgWAcgXAeQgXAfgPAiQgQAjgPAiQgLAagCAbQAAACAAABQAAAEAAAEQAAABAAABQAAAEAAAEAilGCQAHgUAKgTQAPgaAVgTQCeinANgbQAEgIACgIQAAgBABgCQARgcgPgkQgOggAWgmQAcAFAYAXQAZAWApgMQAcgKATgVQgdgEgSgTQgZgagSgjADxgmQADgDACgEQAVgbAMggQgTgBgFgFAmxE2QAbAcAhATQAhATAjAPQAjAPAjgDQAmgEAfgNQAAABAAAAQAAgBABAAAimGCQAAAAABAA");
	this.shape.setTransform(95,40.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAYgEQACgFAMAFQgCAIgCAFQgCAFgDABQgHgPACgEgAgTgLQgDALgOAKQgFgfAWAKg");
	this.shape_1.setTransform(119.2,22.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("AjyFTQgjgPghgTQghgUgbgcIAAgCIAAgHIAAgDQADgcAKgZIAfhGQAPghAXgfIAtg6QAYgeAXgXIApgmIANgLQAcgYAggWQAdgUAhgDQAigDAigOQAkgOAYgaQANACANAAQAbABATgUQAWgYAKgjQALglAkgHQAOgCALAAQATACALAMIACACIAAABIABABIABACIABABQgCAIABAGQAEAPAGALIACAEIABACIABACQAGAJAJAGIANAJQgCAYgLAQIgFAHIgIgBIgGAAIAGAAIAIABQAgAEgDAbQgDAWgUAAIgGAAQgTAAgFgGQAFAGATAAQgMAggVAcIgFAGQgdgDgSgTQgZgbgSgjQASAjAZAbQASATAdADQgTAWgcAKQgpAOgZgZQgYgWgcgFQgWAlAOAjQAPAigRAbIgBAEIgGAPQgNAbieCoQgVASgPAbQgKATgHATIgBABQgfAMgmAEIgNABQgdAAgcgMgAFJjtQgCAFAHAPQADAAACgFQACgFACgKQgGgDgDAAQgEAAgBADgAELjeQAOgLADgMQgFgCgDAAQgNAAAEAZgAEskHIAAgBIAAAAIgBgBIgBgDIAAAAQgLgSgJAAIAAAAIgBAAQgHAAgGAMIgBABIABgBQAGgMAHAAIABAAIAAAAQAJAAALASIAAAAIABADIABABIAAAAIAAABIAAAAg");
	this.shape_2.setTransform(88.7,45.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF99").s().p("AhuByQgNAAgNgCQgPgCgPgFIgCAAIgMgEQgWgIgTgPQgIgGgJgEQAZAEAQgSQAKgMgIgLQgDgDgEgEQgXgSgZgNIANACQAgAFAdgMQAIgEACgGQACgFgGgIIgKgNQgPgVgJgVQAKAWAaALQASAIASgHQAegLAdgVQAegVAqAKQAWAGASAOIACABIABABIAAAAIACABIABACQAIAGAGAHQASAWANAVIABACIAGALIgGgLQAdALASgWQAFgIAFgLQAOgjgOggQAqAggJAtQAggNgLgqQASAigKAuIABAFIgHABIAHgBIABAAQAbgDALgUQAEAbgIAYIgGAOIgCAEIgBAEQgFAKgKAHQAKgHAFgKIABgEIACgEIgBAFIgBADQgEALgGAKQgLAQgPAHIgCABIgBABIAAAAIgBAAQgOAGgSAAQgdAAgXgNIgNgJQgJgHgGgJIgBgBIgBgCIgCgEQgHgLgDgPQgBgGACgIIgBgBIgBgCIgBgBIAAgBIgCgDQgLgJgTgCQgLgBgOADQgiAGgLAkQgKAigWAYQgTAUgaAAIgBAAgACwBNQAIAAAIgCIABAAIABAAIgBAAIgBAAQgIACgIAAIAAAAIgBAAQgXAAgTgOIgCgCIgFgEIAFAEIACACQATAOAXAAIABAAIAAAAgAiVBKIAIgBQAhgHASgkIAAAAQAQgeAYgbQgYAbgQAeIAAAAQgSAkghAHIgIABIgJgBIAJABgACdAzQANAAAOgEQAHgCAFgFQAFgEABgHQgBAHgFAEQgFAFgHACQgOAEgNAAIAAAAIAAAAQgOAAgNgEIgBgBIgBAAIgBAAIgDgBIgOgGIAOAGIADABIABAAIABAAIABABQANAEAOAAIAAAAIAAAAgAiTAlQATAAAOgUQgOAUgTAAIAAAAIAAAAQgNAAgPgKIgIgIIAIAIQAPAKANAAIAAAAIAAAAgABJALQADAGACAHQgCgHgDgGIAAAAgAB4AVQAcgCAMgbQgMAbgcACIgEAAIgEAAIgMgCIAMACIAEAAIAEAAgAh2gMQAXAAAUgaIAGgGIABgBIABgBIACgCIADgCIACgBQAPgMAWAAIAAAAIAAAAIAJABIACAAIACAAQATADANAJQAMAJAEAOQgEgOgMgJQgNgJgTgDIgCAAIgCAAIgJgBIAAAAIAAAAQgWAAgPAMIgCABIgDACIgCACIgBABIgBABIgGAGQgUAagXAAQgJgBgJgEQAJAEAJABg");
	this.shape_3.setTransform(113.3,11.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#333333").ss(0.1,1,1).p("AGnj7QADgHADgHQAIgbgEgaQgLAUgbADIgBAAQgDABgEAAAGJksQAKgugSgiQAMAqghANQAJgugqgfQAOAggOAjQgFALgFAHQgSAXgdgLQADAFADAGAESkxQgBgBAAgBQgNgWgSgVQgGgHgIgHQAAAAgBgBQgBgBgBAAQAAAAAAAAQAAgBgBAAQgBgBgBAAQgSgOgYgGQgqgKgeAVQgdAVgeALQgSAHgSgIQgYgMgKgWQAJAWANAUQAEAHAGAHQAGAHgCAGQgBAGgJAEQgbAOgggHQgHgBgGgBQAZAPAXASQAEADADAEQAIALgKAMQgPARgagEQAJAFAIAGQATAPAUAIQAGACAGABQABABABAAQAPAEAPACQANACANABQAbAAATgUQAWgYAKgiQALglAkgHQAOgDALABQATABALAMQABABABACQAAAAAAAAQABABAAABQABABAAAAQABABAAABIAAAAQADAGACAGAEbkMQAHABAFABQAFAAADAAQAcgCAMgdAEpjMQgHgEgGgFQgJgHgGgJQAAAAgBgBQAAgBgBgCQgBgBgBgCQgGgMgEgOQgBgGACgIAElj4QAHADAHADQABAAACAAQAAABABAAQAAAAABAAQAbAJAcgIQAHgDAFgEQAFgFABgGAE1jmQACACADACQAaAVAlgHAEXieQADgDACgDQALgRACgXQAXAMAdABQASAAAOgGQAAAAABgBIAAAAQAAAAABAAQABAAABgBQAPgIALgPQAHgKADgLQABgCAAgCQABgCAAgCQgBACgBACQAAACgBACQgFAKgKAHAEKi5QACgFAMAFQgCAKgCAFQgCAFgDABQgHgQACgFgAEJieQADAAADAAQAFAAADAAAEXhoQADAAADAAQAUgBADgWQADgbgggEADdk8QgEgPgMgJQgNgIgVgDQgfgEgVAQQgCABgBABQgBABgBABQAAAAgBAAQAAABgBAAQgDAEgDADQgUAagXgBQgJAAgJgEACDk8QgYAagQAgQAAABAAAAQgSAkghAHQgIABgJgBADtjSQgVgpgQAfADMipQAOgMADgLQgWgKAFAhgAg3jcQgFAAgFgCQgNgEgJgEQARADAPAHgABDkOQgZAigkgYQgEgDgCgFAAtiwQgYAbgiAOQgiANgkAEQghADgdAUQggAWgcAXQgGAGgHAFQgUATgVAUQgXAUgYAgQgWAcgXAeQgXAfgPAiQgQAjgPAiQgLAagCAbQAAACAAABQAAAEAAAEQAAABAAABQAlAiAXANQAhATAjAPQAjAPAjgDQAmgEAfgNQAAAAABAAQAHgUAKgTQAPgaAVgTQCeinANgbQAEgIACgIQAAgBABgCQARgcgPgkQgOggAWgmQAcAFAYAXQAZAWApgMQAcgKATgVQgdgEgSgTQgZgagSgjADxgmQADgDACgEQAVgbAMggQgTgBgFgFAimGCQAAABAAAAQAAAAABgBQAAAAAAAA");
	this.shape_4.setTransform(95,40.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgGBkQgmgWgughQgugigNgqQgMgsAkgmQAlAiAXANQAhATAhAPQAjAPAjgDQAmgEAfgNIAAABIABAAQAYAqgYAnQgXAmgnAVQgUAKgUAAQgYAAgVgOg");
	this.shape_5.setTransform(64.2,82.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFCC99").s().p("AjyFTQgjgPghgTQgXgOglgiIAAgCIAAgHIAAgDQADgcAKgZIAfhGQAPghAXgfIAtg6QAYgeAXgXIApgmIANgLQAcgYAggWQAdgUAhgDQAigDAigOQAkgOAYgaQANACANAAQAbABATgUQAWgYAKgjQALglAkgHQAOgCALAAQATACALAMIACACIAAABIABABIABACIABABQgCAIABAGQAEAPAGALIACAEIABACIABACQAGAJAJAGIANAJQgCAYgLAQIgFAHIgIgBIgGAAIAGAAIAIABQAgAEgDAbQgDAWgUAAIgGAAQgTAAgFgGQAFAGATAAQgMAggVAcIgFAGQgdgDgSgTQgZgbgSgjQASAjAZAbQASATAdADQgTAWgcAKQgpAOgZgZQgYgWgcgFQgWAlAOAjQAPAigRAbIgBAEIgGAPQgNAbieCoQgVASgPAbQgKATgHATIgBABQgfAMgmAEIgNABQgdAAgcgMgAFJjtQgCAFAHAPQADAAACgFQACgFACgKQgGgDgDAAQgEAAgBADgAELjeQAOgLADgMQgFgCgDAAQgNAAAEAZgAEskHIAAgBIAAAAIgBgBIgBgDIAAAAQgLgSgJAAIAAAAIgBAAQgHAAgGAMIgBABIABgBQAGgMAHAAIABAAIAAAAQAJAAALASIAAAAIABADIABABIAAAAIAAABIAAAAgAFWidIAAAAg");
	this.shape_6.setTransform(88.7,45.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFF99").s().p("AhuByQgNAAgNgCQgPgCgPgFIgCAAIgMgEQgWgIgTgPQgIgGgJgEQAZAEAQgSQAKgMgIgLQgDgDgEgEQgXgSgZgNIANACQAgAFAdgMQAIgEACgGQACgFgGgIIgKgNQgPgVgJgVQAKAWAaALQASAIASgHQAegLAdgVQAegVAqAKQAWAGASAOIACABIABABIAAAAIACABIABACQAIAGAGAHQASAWANAVIABACIAGALIgGgLQAdALASgWQAFgIAFgLQAOgjgOggQAqAggJAtQAggNgLgqQASAigKAuIABAFIgHABIAHgBIABAAQAbgDALgUQAEAbgIAYIgGAOIgCAEIgBAEQgFAKgKAHQAKgHAFgKIABgEIACgEIgBAFIgBADQgEALgGAKQgLAQgPAHIgCABIgBABIAAAAIgBAAQgOAGgSAAQgdAAgXgNIgNgJQgJgHgGgJIgBgBIgBgCIgCgEQgHgLgDgPQgBgGACgIIgBgBIgBgCIgBgBIAAgBIgCgDQgLgJgTgCQgLgBgOADQgiAGgLAkQgKAigWAYQgTAUgaAAIgBAAgACwBNQAIAAAIgCIABAAIABAAIgBAAIgBAAQgIACgIAAIAAAAIgBAAQgXAAgTgOIgCgCIgFgEIAFAEIACACQATAOAXAAIABAAIAAAAgAiVBKIAIgBQAhgHASgkIAAAAQAQgeAYgbQgYAbgQAeIAAAAQgSAkghAHIgIABIgJgBIAJABgACdAzQANAAAOgEQAHgCAFgFQAFgEABgHQgBAHgFAEQgFAFgHACQgOAEgNAAIAAAAIAAAAQgOAAgNgEIgBgBIgBAAIgBAAIgDgBIgOgGIAOAGIADABIABAAIABAAIABABQANAEAOAAIAAAAIAAAAgAiTAlQATAAAOgUQgOAUgTAAIAAAAIAAAAQgNAAgPgKIgIgIIAIAIQAPAKANAAIAAAAIAAAAgABJALQADAGACAHQgCgHgDgGIAAAAgAB4AVQAcgCAMgbQgMAbgcACIgEAAIgEAAIgMgCIAMACIAEAAIAEAAgAh2gMQAXAAAUgaIAGgGIABgBIABgBIACgCIADgCIACgBQAPgMAWAAIAAAAIAAAAIAJABIACAAIACAAQATADANAJQAMAJAEAOQgEgOgMgJQgNgJgTgDIgCAAIgCAAIgJgBIAAAAIAAAAQgWAAgPAMIgCABIgDACIgCACIgBABIgBABIgGAGQgUAagXAAQgJgBgJgEQAJAEAJABgADwAkIAAAAg");
	this.shape_7.setTransform(113.3,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_1},{t:this.shape_5},{t:this.shape_4}]},1).wait(9));

	// frontleg
	this.instance_1 = new lib.micksleg("synched",0);
	this.instance_1.setTransform(81.1,118.7,1,1,0,0,0,33.2,48.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:33.3,regY:48.1,scaleX:0.88,scaleY:0.88,rotation:75,x:38.1,y:104.4},4).to({regX:33.1,regY:48.2,scaleX:1,scaleY:1,rotation:8.3,x:73.5,y:119.2},5).wait(1));

	// backleg
	this.instance_2 = new lib.micksleg("synched",0);
	this.instance_2.setTransform(46,104.6,0.715,0.772,67.3,0,0,33.1,48.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:33.2,regY:48.1,scaleX:0.87,scaleY:0.94,rotation:-7.7,x:86.2,y:118.3},4).to({regX:33.3,regY:48.3,scaleX:0.72,scaleY:0.77,rotation:52.3,x:50.9,y:112.2},5).wait(1));

	// backarm
	this.instance_3 = new lib.static_mick_arm2("synched",0);
	this.instance_3.setTransform(85.9,35.6,1,1,0,0,0,49.6,18.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1,scaleY:1,rotation:-166.7,y:35.7},4).to({scaleX:1,scaleY:1,rotation:-15,y:35.6},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(14.4,-1,125.1,169);


(lib.anim_mick = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.anim_mick_run();
	this.instance.setTransform(100,83.5,1,1,0,0,0,69.3,83.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AAAgnQgOgHgHgPQAVAIAAAOgAgPghQgRAEAKANQAKANAJgQQAEgLgBgJAhcAxQAFAGASgKQgNABgKgEQgBAAAAAAQgBAEACADgABdAhQgdgTANAwQAMAAAGgB");
	this.shape.setTransform(31.7,148.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AGgjcQAGgEAFgGQAMgMAGgRQAOgigOgcQgCgFgCgEQgVgjgmgLALyjAQAHg0AkAtQAHAIgCANAKajUQAIAMACANQAAAFAAAEAHSjEQgGAMADAHQADAHAMACAGCiUQAMgaAJAAQAHAAAGAOQACAEACAHQgQAVAFgDQACgCAEgEQAGgHgBgFAIShiQANAIANgTAIOikQAAAeAaACARojkQgigfgNAcQAPANAOgGAOUjMQgrACAeATQAIAFAJgGQAcgZgSgRASgjYQAIgOAQgCAyQhOQgfgSgIAYAwyiaQghgJAHATQAUAAAGgKgAyOgEQgNADAHAJAxIC+QAxAMgfAXQgHgIgBgDAyKBkQgbAFgFAbQAOAHAEgKArmjcQAeADAeADQAkAFAkADQApACAYAfQAJALAHAMQALARAIATQAPAngOAlQgGAPgLANQgIAJgEgBArKCoQgtgXAHAxQACAGAKgCQALgDALgFAqeCGQgagCAJAXQACAFAEAHAnuCAQgrgagNAhQATAIALgLAiwAqQgUAIgBAIQgDAJAQAJQASgNgKgVgAkKAqQgeAIAWAUAmEggQAXgRAQgrQANgjgOgkQgFgLgGgKQgNgYgXgRQgbgYgcgTAjykQQAbAWALAgAjWDCQgwAJAXAnQAUgBAFgJAkwDsQgfgYgbAkQAhAMAVgKAtKFcQgjASAbALQANgMgNgFAwSE4QgmgRgaAbQAWAJAWABAumFGQgzAXAzAGQAYAEgFgTAqiDWQANANgNAF");
	this.shape_1.setTransform(122.4,175.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.1,1,1).p("ASAj7QgjgegNAbQAPANAPgGAOrjjQgrACAfAUQAHAFAJgHQAcgZgSgRAMhl2QAFAKADAKQADgDACgDAMUleQALAGAKgKAMQmgQAAAfAbABANWgvQAIgzAkAsQAGAIgBANAL/hDQAHAMACAOQABAEAAAEAI7B9QAIABAHgBQARAAARgIQAhgOALgdQABgFACgFQAHgcgIgaAQ5hbQAIgOAPgCAnojGQAAAFABACQAFAHASgKQgMAAgLgDQAAAAgBgBgAmakSQgRAEAKANQAKAMAJgPQAHgLgBgJQgRgIgHgOQAWAHACAPApMATQgtgUAHAuQABAGALgCQALgDALgFAksjOQgdgUANAwQAMAAAGAAAk5hOQAVAJAOASQAJALAHAMQALARAHARQAQAngOAlQgGAPgLANQgIAIgEAAAoggNQgagCAJAVQACAFAEAHAokBBQANANgNAFAkWDGQgrgagNAhQATAHALgKAHrknQgHAMADAHQADAHANACAGbj3QALgZAKAAQAGgBAGAOQADAFABAGQACAGgHAGQgEAFgBABQgFAEAPgWAgyBwQgeAHAXAUACRCDQgFAigXAZAAfCSQARgNgKgVQgTAIgCAIQgCAJAQAJgAh+CgQAWgSAQgqQAOgjgPgkQgCgHgEgHAm9GOQgggZgaAkQAhANAVgKAljFkQgwAJAWAmQAVAAAFgJAsfGDQgjASAbALQANgMgNgFAt7FtQgyAXAzAHQAYADgFgSAwdDlQAxAMgeAYQgIgJgBgDAxfCLQgbAFgFAbQAOAHAFgKAvnFfQgmgRgaAbQAWAJAWAB");
	this.shape_2.setTransform(100.7,168.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(0.1,1,1).p("AQ0lAQAHg0AkAsQAHAJgCANAOwjuQAIAMACAOQAAAEAAAEAM7kjQACgHABgHQACgRgEgSQgJgjgbgQQgEgCgFgCQgagMgbAEAK3hSQgrACAeAUQAIAFAJgHQAcgZgSgRAHqigQAMgaAJAAQAHAAAGANQACAFACAHQgPAVAFgEQABgBAEgEQAHgHgCgFAI6jQQgGAMADAHQADAHAMACAOmA7QALAGAKgKQgDgKgGgKAO7A3QACgDADgDAOigFQAAAdAaABAw5BqQAxAMgfAYQgHgJgBgDAxEhSQgbAEgFAcQAOAHAFgKArvAIQgsgVAHAuQABAHAKgDQALgCALgFAovjQQgzAWAzAHQAYAEgFgTAmvhCQgeAIAWAUArDgYQgZgDAJAYQACADADAGArDDWQAAAEACADQAEAGASgKQgMABgKgEQgBAAgBAAgArHA2QANANgNAEAm4C6QgrgagOAiQAUAHALgLAlyB+QAJAVgDAXQgCAOgDANQgFAUgIATQgQAmgkAQQgPAHgRABQgMAAgCgDAsahbQAggMAiAHAiNkkQgCgOgWgIQAHAPARAHgAifkeQgRAEAKANQAKANAJgQQAHgLgBgJAgVANQgdgSANAuQAMAAAGAAAj7hpQgEgcgdgjQgXgdgmgFQgIgCgIAAAlVhCQgUAIgCAJQgCAIAQAJQASgNgKgVgAGbgiQgjgfgMAbQAOAOAPgGAFUB7QAIgOAQgCAjUEpQgwAJAWAmQAVAAAFgJArOF4QgjASAbALQANgNgNgEAvMEuQgmgSgaAcQAWAJAWABAkuFTQgggZgaAkQAhANAVgK");
	this.shape_3.setTransform(117,169.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.1,1,1).p("AgPghQgRAEAKANQAKANAJgQQAEgLgBgJQgOgHgHgPQAVAIAAAOAhcAxQAFAGASgKQgNABgKgEQgBAAAAAAQgBAEACADgABdAhQgdgTANAwQAMAAAGgB");
	this.shape_4.setTransform(31.7,148.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(0.1,1,1).p("AGgjcQAGgEAFgGQAMgMAGgRQAOgigOgcQgCgFgCgEQgVgjgmgLALyjAQAHg0AkAtQAHAIgCANAKajUQAIAMACANQAAAFAAAEAHSjEQgGAMADAHQADAHAMACAGCiUQAMgaAJAAQAHAAAGAOQACAEACAHQABAFgGAHQgEAEgCACQgFADAQgVAIShiQANAIANgTAIOikQAAAeAaACAOUjMQgrACAeATQAIAFAJgGQAcgZgSgRARojkQgigfgNAcQAPANAOgGASgjYQAIgOAQgCAyKBkQgbAFgFAbQAOAHAEgKAxIC+QAxAMgfAXQgHgIgBgDAyOgEQgNADAHAJAwyiaQghgJAHATQAUAAAGgKgAyQhOQgfgSgIAYArmjcQAeADAeADQAkAFAkADQApACAYAfQAJALAHAMQALARAIATQAPAngOAlQgGAPgLANQgIAJgEgBAqeCGQgagCAJAXQACAFAEAHArKCoQgtgXAHAxQACAGAKgCQALgDALgFAnuCAQgrgagNAhQATAIALgLAmEggQAXgRAQgrQANgjgOgkQgFgLgGgKQgNgYgXgRQgbgYgcgTAkKAqQgeAIAWAUAiwAqQgUAIgBAIQgDAJAQAJQASgNgKgVgAjykQQAbAWALAgAkwDsQgfgYgbAkQAhAMAVgKAjWDCQgwAJAXAnQAUgBAFgJAumFGQgzAXAzAGQAYAEgFgTAwSE4QgmgRgaAbQAWAJAWABAtKFcQgjASAbALQANgMgNgFAqiDWQANANgNAF");
	this.shape_5.setTransform(122.4,175.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.1,1,1).p("ASFmOQgigfgNAbQAPAOAOgGANSmJQgrACAeATQAIAFAJgHQAcgYgSgRAI9irQADgHACgHQAEgRgDgSQgFgjgagTQgEgDgEgCQgagOgbABAIcgvQAHgzAkAsQAGAIgBANAMJiHQgBAfAbABAMNhFQAKAGAKgKQgDgLgFgKAMhhJQADgDACgDAQPi2QAIgOAQgCAPHjaQgmgRgaAbQAWAJAWABAsMgNQAxAMgeAWQgIgJgBgDAtOhnQgbAFgFAbQAOAHAFgKAmFjOQgdgUANAwQAMAAAGAAAopgMQgtgWAHAuQABAGALgCQALgDALgFAoSCpQAJAVgDAXQgCAOgDANQgFAUgIATQgQAmgkAQQgPAHgRABQgMABgCgEAlvDGQgrgagNAhQATAHALgKAl3B5QANANgNAFAlzAqQgZgDAJAXQACAGADAGAgmhoQgEgcgcgjQgYgdgmgGQgIgBgHAAAiLhMQgvAJAWAmQAUAAAFgJAhwDvQAAAFACACQAEAHASgKQgMAAgKgDQgBgBgBAAgAiLBwQgeAHAXAUAg4CSQARgNgKgVQgTAHgCAJQgCAIAQAKgABhA5QgQAEAKANQAKANAIgQQAHgLgBgJQgQgHgHgPQAWAIABAOAHEhDQAHAMACANQABAFAAAEAGNBFQgGAMADAHQADAHAMACAE9B1QAMgZAJgBQAHAAAGAOQACAFACAGQACAGgHAGQgEAEgBACQgFADAPgVAkzAAQAUAbADAiAoWGOQgggZgaAkQAhANAVgKAxrCXQgzAXAzAHQAYADgFgSAxrgKQgjAQAbALQANgNgNgE");
	this.shape_6.setTransform(109.6,168.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_5},{t:this.shape_4}]},2).to({state:[{t:this.shape_6}]},2).wait(2));

	// Layer 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(0.1,1,1).p("AwBASQAcgSAegIQAigJAigJQADgBADgBQAgAHAegUQAbgSAdAKQAbAKARgUQAEgDADgEQAXgTAjAEQAWACAWgCQAmgDAlgLQAJgDAKgDQAagIAagJQAjgNAkAAQAXAAAWgFQAOgCAPgFQAkgMAnAHQAlAGAkgNQAhgLAkgNQAhgLAmAFQAhAEAfAAQAnAAAmgFQAQgBAOgMQAegZAkgHQAWgFAQANQACABABAAQAlAOAfgRQAagOAZgKQAggOAkgHQAMgCAMgBQAcgCAaAGQAnAJAegYQABgBABAAQAegXAnAGQAmAHAmgDQAdgCAYgRQAggVAlgMQAogNAkAMQAgAJASAcQAUAgAoAJQAoAKgTAqQgKATALAOQAVAegdAXQAAABgBABQgBANgBAJQgXAUgaAbQgTATgugFQgogEglAJQglAKglAKQglAJgaAUQgbAXglAFQgcAEgbgGQgJgBgIAAQgeAAgSAcQgWAkgggVQgHgEgGABQgCAAgCAAQgOABgTgEQgsgLgVAbQgcAkglgVQghgSggAaQgdAXgfARQgIAEgGgCQgigHgiACQgEgDgDgKQgRAIgSAMQggAVglgDQglgDgngBQggAAgdAJQAAAAAAAAQgGACgGADQghANgoAWQgRgHgbAEQglAGgfAfQgigQglAPQgiAOgkAJQgZAHgcgBQgygBgOAcQgHAPgXgCQgLgBgLAAQgPAAgPACQgLACgKACQgZAGgWAHQgdALgiAGAQOiHQAAgFABgFAwBASQALgEAEgDQAagRAPAZQAJAQASAEQAlAJAbAUQAXARgLAjQgFANADALQABAHAEAGQACADACACQABABAAAAQAXAXAVAfQAJAPACANQACAVgQASQgOAQACAUQADAUgIAJQgDAEgFACQgLAFgXgFQgbgHgRgQQgWgTglgPQgrgSARgmQAJgUADgXQACgOAAgQQAAgEgBgDQgDgfgVgXQgCgBgBgCQgWgWgNglQANgRAQgLgAvdBVQAAgzAqAeQAaATARAaQAAABABABQACADABACQAJAOAFAQQAAACAAABQADAKACALQAAACAAACQABAFAAAGQAAACAAACQABAngVAcQgEAGgFAFAufCpQAAgKgCgIQgCgLgGgGQgKgLgUACQgCAVADAMQAAABAAABQAEAMAKACQAMgngTAUAvHDLQAPAtAhgjQAMgNAAgL");
	this.shape_7.setTransform(120.8,167.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#996600").s().p("AtsFjQgbgHgRgQQgWgTglgPQgrgSARgmQAJgUADgXQACgOAAgQIgBgHQgDgfgVgXIgDgDQgWgWgNglQANgRAQgLQAcgSAegIIBEgSIAGgCQAgAHAegUQAbgSAdAKQAbAKARgUIAHgHQAXgTAjAEQAWACAWgCQAmgDAlgLIATgGIA0gRQAjgNAkAAQAXAAAWgFQAOgCAPgFQAkgMAnAHQAlAGAkgNIBFgYQAhgLAmAFQAhAEAfAAQAnAAAmgFQAQgBAOgMQAegZAkgHQAWgFAQANIADABQAlAOAfgRQAagOAZgKQAggOAkgHIAYgDQAcgCAaAGQAnAJAegYIACgBQAegXAnAGQAmAHAmgDQAdgCAYgRQAggVAlgMQAogNAkAMQAgAJASAcQAUAgAoAJQAoAKgTAqQgKATALAOQAVAegdAXIABgKIgBAKIgBACIgCAWQgXAUgaAbQgTATgugFQgogEglAJIhKAUQglAJgaAUQgbAXglAFQgcAEgbgGQgJgBgIAAQgeAAgSAcQgWAkgggVQgHgEgGABIgEAAQgOABgTgEQgsgLgVAbQgcAkglgVQghgSggAaQgdAXgfARQgIAEgGgCQgigHgiACQgEgDgDgKQgRAIgSAMQggAVglgDQglgDgngBQggAAgdAJIAAAAIgMAFQghANgoAWQgRgHgbAEQglAGgfAfQgigQglAPQgiAOgkAJQgZAHgcgBQgygBgOAcQgHAPgXgCIgWgBQgPAAgPACIgVAEQgZAGgWAHQgdALgiAGQAGgHAAgNIgBgJIAAgFQAAgRAMgOQAOgQAAgSIAAgFQgCgNgJgPQgVgfgXgXIgBgBIgEgFQgEgGgBgHIgBgHQAAgIADgJQADgLAAgKQAAgTgPgMQgbgUglgJQgSgEgJgQIgBgBQgIgOgMAAIgBAAIAAAAQgIAAgKAHIgBAAQgEADgLAEQALgEAEgDIABAAQAKgHAIAAIAAAAIABAAQAMAAAIAOIABABQAJAQASAEQAlAJAbAUQAPAMAAATQAAAKgDALQgDAJAAAIIABAHQABAHAEAGIAEAFIABABQAXAXAVAfQAJAPACANIAAAFQAAASgOAQQgMAOAAARIAAAFIABAJQAAANgGAHQgDAEgFACQgGADgIAAQgJAAgLgDgAuEEAQgEAGgFAFQAFgFAEgGQAUgbAAgmIAAgCIAAgEIgBgLIAAAPIABAAIAAACQAAAmgUAbgAuwDkQAKAAALgMIAEgDQAMgNAAgLQAAALgMANIgEADQgLAMgKAAIgBABIAAAAQgNgBgIgWIgBgCIAAAAIAAgBIAAABIAAAAIABACQAIAWANABIAAAAIABgBgAvGCeIAAACQAEAMAKACIAAAAQAIgagGAAIAAAAIgBAAQgCABgFAFIgBABIABgBQAFgFACgBIABAAIAAAAQAGAAgIAaIAAAAQgKgCgEgMIAAgCQgCgGAAgKIABgRIACAAIABAAIABAAIADAAIAAAAIABAAQAOAAAIAJIAAAAQAGAGACALQACAIAAAKQAAgKgCgIQgCgLgGgGIAAAAQgIgJgOAAIgBAAIAAAAIgDAAIgBAAIgBAAIgCAAIgBARQAAAKACAGgAuzBAQAaATARAaIABACIADAFQAJAOAFAQIAAADQADAKACALIAAAEIAAgEQgCgLgDgKIAAgDQgFgQgJgOIgDgFIgBgCQgRgagagTIgEgCQgNgJgIAAIgBAAIAAAAQgQAAAAAgQAAggAQAAIAAAAIABAAQAIAAANAJIAEACgAQOiHIAAAAg");
	this.shape_8.setTransform(120.8,167.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7}]}).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.5,0,243.7,213.9);


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


(lib.anim_scene3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{bubmove:0,mickmove:75,sammove:221,sammove2:291});

	// timeline functions:
	this.frame_74 = function() {
		this.gotoAndPlay("bubmove");
	}
	this.frame_220 = function() {
		this.gotoAndPlay("mickmove");
	}
	this.frame_290 = function() {
		this.gotoAndPlay("sammove");
	}
	this.frame_364 = function() {
		this.gotoAndPlay("sammove2");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(74).call(this.frame_74).wait(146).call(this.frame_220).wait(70).call(this.frame_290).wait(74).call(this.frame_364).wait(1));

	// Layer 1
	this.instance = new lib.anim_budroll2();
	this.instance.setTransform(-29,36.4,0.468,0.468);

	this.instance_1 = new lib.anim_mick();
	this.instance_1.setTransform(-5.4,19.5,0.468,0.468,0,0,0,122.3,106.4);
	this.instance_1._off = true;

	this.instance_2 = new lib.animsamrolls();
	this.instance_2.setTransform(-21,14.1,1,1,0,0,0,20.9,19.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-13.1,y:129.4},74).to({_off:true},1).wait(290));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(75).to({_off:false},0).to({x:278.6,y:138},145).to({_off:true},1).wait(144));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(221).to({_off:false},0).to({x:251.4,y:115.5},69).wait(1).to({x:274.7,y:107.3},0).to({guide:{path:[274.6,107.2,273.3,104.7,272.1,101.9,267.5,91.6,260.6,82.7,252.5,72.3,239.9,70.5,226.6,68.6,221.7,81.3,218.3,90.1,219.1,99.9,213.1,95.6,207,93.4,204,92.3,200.6,91.7,193.9,90.5,189.4,94.6,181.3,101.9,175.9,110.1,172.7,114.8,173.3,123.6,173.5,126.7,171.7,128.2,166.4,118.7,159.7,108.6,157,104.4,152.7,101.9,147.9,99.2,140.5,101.6,130.3,104.9,123.8,113.9,115.6,125.4,102.7,126.7,91.8,127.8,81.7,126,72.8,124.4,64.7,121.2,46,113.8,25.2,114.3,18.9,114.4,13.3,113.7,2.5,112.4,-6.1,107.9,-13.5,104,-20,99.6,-28.2,94.1,-29.8,84,-32.4,68.3,-14.3,72,-15.8,63.9,-15.7,53.4,-15.6,50.5,-15,47.6,-13.6,40.8,-8.8,37.3,-0.1,31.2,4.1,43.8,9.8,60.8,8.1,78.9,9.3,74.6,13.6,66.5,20.3,53.9,32.9,46.3,45.6,38.6,57.4,34.1,63,32,65.2,39,71,57.2,70.6,76.9,70.5,80.3,76.6,79.7,93.8,78,111.4,77.8,125,77.6,138.3,78.1,151.1,78.6,156.4,71.2,157.6,69.7,157.4,67,157.1,58.3,157,49.5,157,40.6,167.6,42.9,175.6,44.7,177.9,54.8,178.9,58.9,178.9,63.3,181.2,56.5,185.8,45.1,187.3,41.5,189,38.1,192.3,31.6,199.1,28.5,205.3,25.7,209.7,23.6,217.6,19.9,220.2,29.8,223.2,41.3,228.2,47.8,247.8,49,264.5,48.2,280.6,47.5,296.7,47.5,304.9,47.5,313.2,47.5,313.6,47.5,314.1,47.5]}},73).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.5,7.4,75.8,61.7);


(lib.content_scene4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_3 = function() {
		playSound("rhodes_f_note");
		playSound("bubfloppeddownthelargedrifting");
	}
	this.frame_7 = function() {
		playSound("rhodes_low_f_note");
	}
	this.frame_25 = function() {
		playSound("rhodes_f_note");
	}
	this.frame_34 = function() {
		playSound("rhodes_low_f_note");
	}
	this.frame_47 = function() {
		playSound("diagnal_line");
	}
	this.frame_53 = function() {
		playSound("inserted_word_appears");
	}
	this.frame_58 = function() {
		playSound("diagnal_line");
	}
	this.frame_65 = function() {
		playSound("inserted_word_appears");
	}
	this.frame_78 = function() {
		playSound("diagnal_line");
	}
	this.frame_84 = function() {
		playSound("inserted_word_appears");
	}
	this.frame_92 = function() {
		playSound("diagnal_line");
	}
	this.frame_98 = function() {
		playSound("inserted_word_appears");
	}
	this.frame_106 = function() {
		playSound("diagnal_line");
	}
	this.frame_111 = function() {
		playSound("inserted_word_appears");
	}
	this.frame_120 = function() {
		playSound("rhodes_f_note");
	}
	this.frame_130 = function() {
		playSound("diagnal_line");
	}
	this.frame_137 = function() {
		playSound("rhodes_f9_chord");
	}
	this.frame_153 = function() {
		playSound("synth_brass_4times");
	}
	this.frame_203 = function() {
		playSound("mickrapidlyrolled");
	}
	this.frame_206 = function() {
		playSound("rhodes_f_note");
	}
	this.frame_210 = function() {
		playSound("rhodes_low_f_note");
	}
	this.frame_231 = function() {
		playSound("rhodes_f_note");
	}
	this.frame_237 = function() {
		playSound("rhodes_low_f_note");
	}
	this.frame_249 = function() {
		playSound("diagnal_line");
	}
	this.frame_256 = function() {
		playSound("inserted_word_appears");
	}
	this.frame_281 = function() {
		playSound("rhodes_f_note");
	}
	this.frame_287 = function() {
		playSound("rhodes_low_f_note");
	}
	this.frame_296 = function() {
		playSound("diagnal_line");
	}
	this.frame_303 = function() {
		playSound("inserted_word_appears");
	}
	this.frame_326 = function() {
		playSound("rhodes_f9_chord");
	}
	this.frame_345 = function() {
		playSound("synth_brass_4times");
	}
	this.frame_399 = function() {
		playSound("asneakysam");
	}
	this.frame_402 = function() {
		playSound("rhodes_f_note");
	}
	this.frame_406 = function() {
		playSound("rhodes_low_f_note");
	}
	this.frame_424 = function() {
		playSound("rhodes_f_note");
	}
	this.frame_430 = function() {
		playSound("rhodes_low_f_note");
	}
	this.frame_432 = function() {
		playSound("diagnal_line");
	}
	this.frame_435 = function() {
		playSound("inserted_word_appears");
	}
	this.frame_436 = function() {
		playSound("diagnal_line");
	}
	this.frame_439 = function() {
		playSound("inserted_word_appears");
	}
	this.frame_445 = function() {
		playSound("diagnal_line");
	}
	this.frame_449 = function() {
		playSound("inserted_word_appears");
	}
	this.frame_452 = function() {
		playSound("diagnal_line");
	}
	this.frame_457 = function() {
		playSound("inserted_word_appears");
	}
	this.frame_474 = function() {
		playSound("diagnal_line");
	}
	this.frame_479 = function() {
		playSound("inserted_word_appears");
	}
	this.frame_486 = function() {
		playSound("diagnal_line");
	}
	this.frame_491 = function() {
		playSound("inserted_word_appears");
	}
	this.frame_500 = function() {
		playSound("diagnal_line");
	}
	this.frame_505 = function() {
		playSound("inserted_word_appears");
	}
	this.frame_513 = function() {
		playSound("rhodes_f_note");
	}
	this.frame_520 = function() {
		playSound("diagnal_line");
	}
	this.frame_528 = function() {
		playSound("rhodes_f9_chord");
	}
	this.frame_547 = function() {
		playSound("synth_brass_4times");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(3).call(this.frame_3).wait(4).call(this.frame_7).wait(18).call(this.frame_25).wait(9).call(this.frame_34).wait(13).call(this.frame_47).wait(6).call(this.frame_53).wait(5).call(this.frame_58).wait(7).call(this.frame_65).wait(13).call(this.frame_78).wait(6).call(this.frame_84).wait(8).call(this.frame_92).wait(6).call(this.frame_98).wait(8).call(this.frame_106).wait(5).call(this.frame_111).wait(9).call(this.frame_120).wait(10).call(this.frame_130).wait(7).call(this.frame_137).wait(16).call(this.frame_153).wait(50).call(this.frame_203).wait(3).call(this.frame_206).wait(4).call(this.frame_210).wait(21).call(this.frame_231).wait(6).call(this.frame_237).wait(12).call(this.frame_249).wait(7).call(this.frame_256).wait(25).call(this.frame_281).wait(6).call(this.frame_287).wait(9).call(this.frame_296).wait(7).call(this.frame_303).wait(23).call(this.frame_326).wait(19).call(this.frame_345).wait(54).call(this.frame_399).wait(3).call(this.frame_402).wait(4).call(this.frame_406).wait(18).call(this.frame_424).wait(6).call(this.frame_430).wait(2).call(this.frame_432).wait(3).call(this.frame_435).wait(1).call(this.frame_436).wait(3).call(this.frame_439).wait(6).call(this.frame_445).wait(4).call(this.frame_449).wait(3).call(this.frame_452).wait(5).call(this.frame_457).wait(17).call(this.frame_474).wait(5).call(this.frame_479).wait(7).call(this.frame_486).wait(5).call(this.frame_491).wait(9).call(this.frame_500).wait(5).call(this.frame_505).wait(8).call(this.frame_513).wait(7).call(this.frame_520).wait(8).call(this.frame_528).wait(19).call(this.frame_547).wait(52));

	// diagram
	this.instance = new lib.example2("synched",0);
	this.instance.setTransform(197.2,103.9,1,1,0,0,0,179.2,55.4);

	this.instance_1 = new lib.example3("synched",0);
	this.instance_1.setTransform(207.9,148.4,1,1,0,0,0,186,55.4);

	this.instance_2 = new lib.example4("synched",0);
	this.instance_2.setTransform(207.9,123.4,1,1,0,0,0,186,55.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},203).to({state:[{t:this.instance_2}]},196).wait(200));

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.502)").s().p("A/uRLMAAAgiVMA/dAAAMAAAAiVg");
	this.shape.setTransform(207.1,156.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(599));

	// sentence
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgHAHQgEgEAAgDQAAgDAEgDQADgDAEAAQAFAAAEADQADADAAADQAAADgDAEQgEADgFAAQgEAAgDgDg");
	this.shape_1.setTransform(252.3,332);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgVApQgMgFABgJQAAgHAJAAIAKACQAHACADABQAOgBABgGQgBgEgKgFIgTgJQgLgHAAgLQAAgQAQgFQALgEARAAQAIAAAEADQAFADAAAHQAAAOgIAAQgHAAgCgGIgGgBQgRAAAAAFQAAADAKAFIAUAKQALAHAAALQAAANgMAHQgKAFgNAAQgKAAgJgCg");
	this.shape_2.setTransform(244.9,328.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgZAhQgNgJAAgTQAAgRAKgOQALgPASAAQAOAAAJAEQALAGAAAMQAAAJgJAGIgSAHIgYAMQAEAEAFACQAFACAGAAQAKAAAHgEQAGgEAFAAQAHAAABAIQAAAJgOAGQgLAEgLAAQgSAAgLgJgAgJgRQgGAEgDAKIASgIQAIgEAHgFQgFgCgJAAQgFAAgFAFg");
	this.shape_3.setTransform(236.5,328.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAPAkIgCgQIgBgRIABgFIAAgGIAAgEIAAgDQAAgGgEgBQgGAAgFAJQgGAIgDAMIgBAHIAAAHIgBAHIAAAHQAAAEgEADQgDADgFAAQgEAAgDgDQgDgDAAgEIgBgHIAAgHIABgVIABgUIAAgGIgBgHQAAgFAEgDQADgDAFAAQAJAAACAMIAAABQALgLAKAAQAPAAAGAMQADAIAAARIAAAFIAAADIACARIACAPQAAAEgDADQgEADgEAAQgKAAgBgJg");
	this.shape_4.setTransform(228,328.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAPAmQgKAEgJAAQgKAAgIgFQgJgFgCgKQgCgUAAgNQgBgKADgNQACgJAIAAQAFAAADADQADADAAAEIgBALIgBALIABARIACANIAEACIADAAQAHAAAKgCIAAgOIAAgLQAAgQACgMQABgJAKAAQAEAAAEADQACADAAAEIgBAcIAAANIAAAQIABAFIAAAFQAAAEgDADQgEADgEAAQgHAAgDgGg");
	this.shape_5.setTransform(219.5,328.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAVA6QgGAEgFABIgKAAQgRABgMgLQgMgMAAgRQAAgVAMgLQAMgOARAAIAKABQAGACACADQACgbABgKQABgKAJABQAFAAACACQAEADAAAFIgCAiIgCAgQAAAcACAKIAAACQAAAEgDADQgEACgEAAQgFABgDgGgAgPADQgGAGABAOQAAAJAFAFQAHAHAIAAQAEgBAEgBIAHgFIACgCIAAgdQgCgFgFgBQgEgBgGAAQgJgBgGAFg");
	this.shape_6.setTransform(210.6,326.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAVA6QgGAEgFABIgKAAQgSABgLgLQgLgMAAgRQAAgVALgLQAMgOARAAIALABQAEACADADQACgbABgKQACgKAIABQAFAAADACQACADAAAFIgBAiIgCAgQAAAcACAKIAAACQAAAEgDADQgDACgEAAQgGABgDgGgAgPADQgFAGAAAOQgBAJAHAFQAGAHAIAAQAEgBADgBIAIgFIACgCIAAgdQgCgFgEgBQgFgBgGAAQgJgBgGAFg");
	this.shape_7.setTransform(194.3,326.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAPAkIgCgQIgBgRIAAgFIAAgGIAAgEIABgDQAAgGgDgBQgHAAgFAJQgGAIgEAMIAAAHIgBAHIAAAHIAAAHQAAAEgDADQgEADgEAAQgFAAgDgDQgDgDAAgEIAAgHIgBgHIABgVIABgUIAAgGIAAgHQAAgFACgDQAEgDAFAAQAKAAAAAMIAAABQAMgLALAAQAOAAAGAMQADAIAAARIAAAFIAAADIADARIABAPQAAAEgDADQgEADgEAAQgJAAgCgJg");
	this.shape_8.setTransform(185.6,328.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AASAjIgMAGQgGABgCAAQgTAAgJgKQgJgKAAgUQAAgRAOgNQANgNASAAQAHAAAKADQAMAFAAAHQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABIgBAIIgBALQAAANACAGIAEAIIADAIQAAAEgDADQgDACgEAAQgEABgIgIgAgKgOQgIAIAAAJQAAAKAEAFQAEAGAHgBQADAAAEgBQAFgBAEgEQgDgRAAgJIABgFIABgHIgDgBIgCgBQgJAAgIAJg");
	this.shape_9.setTransform(176.9,328.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgVApQgMgFABgJQAAgHAJAAIAKACQAHACADABQAOgBABgGQgBgEgKgFIgTgJQgLgHAAgLQAAgQAQgFQALgEARAAQAIAAAEADQAFADAAAHQAAAOgIAAQgHAAgCgGIgGgBQgRAAAAAFQAAADAKAFIAUAKQALAHAAALQAAANgMAHQgKAFgNAAQgKAAgJgCg");
	this.shape_10.setTransform(168.4,328.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgnAyQAAgFADgCQADgDAEAAIAKACIAMABQAJAAAGgIQAFgGABgPQgEADgFACQgFACgEABQgPAAgKgLQgKgJAAgOQAAgWANgNQAOgOAVAAQAHAAAFACQAGACADAEQAKABAAAKIgCAPQgDATgBARQgBAagHALQgKAPgYAAQgfABAAgMgAgLgiQgGAIAAAMQAAAKADAEQAEADAHAAQAEAAAHgFQAGgIABgGIADgXIgFgDIgFgBQgLAAgIAJg");
	this.shape_11.setTransform(345.4,306.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAQAkIgDgQIgBgRIABgFIAAgGIAAgEIAAgDQAAgGgEgBQgGAAgEAJQgHAIgDAMIgBAHIAAAHIgBAHIgBAHQAAAEgDADQgDADgFAAQgEAAgDgDQgDgDAAgEIgBgHIAAgHIABgVIABgUIAAgGIgBgHQAAgFADgDQAEgDAEAAQAKAAACANIAAAAQALgLAKAAQAPAAAGAMQADAIABARIAAAFIAAADIABARIACAPQAAAEgDADQgEADgEAAQgKAAAAgJg");
	this.shape_12.setTransform(337.2,303.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgJA4QgDgDAAgEIAAgPIAAgOIAAgRIABgQQAAgEAEgDQADgDAEAAQADAAADADQADADAAAEIgBAQIgBARIAAAOIABAPQAAAEgDADQgDADgDAAQgFAAgDgDgAgGgnQgEgDAAgFQAAgFAEgDQAEgDADAAQAFAAAEADQADADAAAFQAAAFgDADQgEAEgFAAQgDAAgEgEg");
	this.shape_13.setTransform(330.8,302.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgFA2QgEgDAAgEIAAgIIABgJIgCgnIgOgBQgKgBAAgJQAAgFACgDQADgCAFAAIANABIAAgJIgBgIQABgEADgDQADgDAEABQAKgBAAAUIAAAGIAIAAIAMABQAHACAAAHQAAAFgEADQgCACgGAAIgDAAIgEAAIgHABIABAoIAAADIAAAFQAAASgLAAQgDAAgCgDg");
	this.shape_14.setTransform(324.6,302.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgOBBQgCgCAAgFIAAgCQABgLAAgKIAAglIgFABIgEAAQgFAAgDgCQgEgDABgFQAAgHAIgCIANgCIABgJQADgRAGgJQAIgKASAAQAOAAABAKQgBAKgNAAQgJAAgEAHQgDAFgCAKIAAADIAPgBQAPAAAAAKQAAAKgQgBIgPABIAAATIAAAVQAAAPgCAIQgBAIgHAAQgEAAgEgDg");
	this.shape_15.setTransform(316.6,302.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgIA4QgDgDAAgEIgBgPIAAgOIABgRIABgQQAAgEACgDQADgDAFAAQADAAADADQADADAAAEIgBAQIgBARIAAAOIABAPQAAAEgDADQgDADgDAAQgFAAgCgDgAgGgnQgDgDAAgFQAAgFADgDQAEgDADAAQAFAAADADQAEADAAAFQAAAFgEADQgDAEgFAAQgDAAgEgEg");
	this.shape_16.setTransform(310.6,302.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgeAoQgCgCAAgFIAAgxIAAgHIAAgHQABgFACgDQADgDAEAAQAJAAABAJQANgKARAAQAPAAAAAVIAAAFQgBAMgKAAQgKAAAAgKIAAgIQgQADgIAPIABAlQAAAFgDADQgDACgFAAQgFAAgDgDg");
	this.shape_17.setTransform(304.5,304);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAVA6QgGAEgFABIgKAAQgRABgMgLQgMgMAAgRQAAgVAMgLQAMgOARAAIAKABQAGACACADQACgbABgKQABgKAJABQAFAAACACQAEADAAAFIgCAiIgCAgQAAAcACAKIAAACQAAAEgDADQgEACgEAAQgFABgDgGgAgPADQgGAGABAOQAAAJAFAFQAHAHAIAAQAEgBAEgBIAHgFIACgCIAAgdQgCgFgFgBQgEgBgGAAQgJgBgGAFg");
	this.shape_18.setTransform(295.7,301.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgZAhQgOgJAAgTQAAgRALgOQAMgPARAAQAOAAAJAEQAMAGAAAMQAAAJgKAGIgRAHIgZAMQAEAEAFACQAGACAEAAQALAAAHgEQAHgEADAAQAJAAAAAIQAAAJgNAFQgLAFgNAAQgQAAgMgJgAgJgRQgGAEgDAKIASgIQAIgEAHgFQgGgCgIAAQgFAAgFAFg");
	this.shape_19.setTransform(279.5,304);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgnAyQAAgFADgCQADgDAEAAIAKACIAMABQAJAAAGgIQAFgGABgPQgEADgFACQgFACgEABQgPAAgKgLQgKgJAAgOQAAgWANgNQAOgOAVAAQAHAAAFACQAGACADAEQAKABAAAKIgCAPQgDATgBARQgBAagHALQgKAPgYAAQgfABAAgMgAgLgiQgGAIAAAMQAAAKADAEQAEADAHAAQAEAAAHgFQAGgIABgGIADgXIgFgDIgFgBQgLAAgIAJg");
	this.shape_20.setTransform(270.8,306.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgeAoQgCgCAAgFIAAgxIAAgHIAAgHQABgFACgDQADgDAEAAQAJAAABAJQAMgKASAAQAPAAAAAVIAAAFQgBAMgKAAQgKAAAAgKIAAgIQgQADgIAPIABAlQAAAFgDADQgDACgFAAQgFAAgDgDg");
	this.shape_21.setTransform(263,304);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AASAjIgMAGQgGABgCAAQgTAAgJgKQgJgKAAgUQAAgRAOgNQANgNASAAQAHAAAKADQAMAFAAAHQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABIgBAIIgBALQAAAMACAHIAEAIIADAIQAAAEgDADQgDACgEAAQgEABgIgIgAgKgOQgIAIAAAJQAAAKAEAFQAEAGAHgBQADAAAEgBQAFgBAEgEQgDgRAAgJIABgFIABgHIgDgBIgCgBQgJAAgIAJg");
	this.shape_22.setTransform(254.6,304.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgGA9QgDgDAAgFIAAhqQAAgFADgCQADgDADAAQAEAAADADQADACAAAFIAABmQAAAPgKAAQgDAAgDgDg");
	this.shape_23.setTransform(247.8,301.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgZAhQgNgJAAgTQAAgRAKgOQALgPASAAQAOAAAJAEQALAGAAAMQAAAJgJAGIgSAHIgYAMQAEAEAFACQAFACAGAAQAKAAAHgEQAGgEAFAAQAHAAABAIQAAAJgOAFQgLAFgLAAQgRAAgMgJgAgJgRQgGAEgDAKIASgIQAJgEAGgFQgGgCgIAAQgFAAgFAFg");
	this.shape_24.setTransform(234.1,304);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AASA5IgEgSIgBgSIAAgHIAAgFIAAgHQgBgCgDAAQgJAAgFAGQgDADgGAMQAAAcgDAGQgDAHgHgBQgEAAgEgDQgDgCAAgFIABgEIABgVIAAgyIAAgDIABgMIgBgIIgBgHQAAgEADgDQADgCAFgBQAIAAACAIQACAGAAAJIgBAQIAAAPQAGgGAGgDQAFgCAHAAQANAAAGAIQAFAFABAKIAAATIACAPIADAPIAAAEQAAADgDADQgEAEgEAAQgIgBgCgHg");
	this.shape_25.setTransform(225.3,301.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgFA2QgEgDAAgEIAAgIIAAgJIgBgnIgPgBQgJgBgBgJQAAgFAEgDQADgCAEAAIAOABIgBgJIAAgIQAAgEADgDQADgDAEABQAKgBAAAUIAAAGIAIAAIAMABQAHACgBAHQAAAFgCADQgEACgFAAIgDAAIgEAAIgIABIACAoIAAADIAAAFQAAASgLAAQgCAAgDgDg");
	this.shape_26.setTransform(216.8,302.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAPAkIgCgQIgBgRIABgFIAAgGIAAgEIAAgDQAAgGgEgBQgGAAgFAJQgGAIgDAMIgBAHIAAAHIgBAHIAAAHQAAAEgEADQgDADgFAAQgEAAgDgDQgDgDAAgEIgBgHIAAgHIABgVIABgUIAAgGIgBgHQAAgFAEgDQADgDAFAAQAJAAACANIAAAAQALgLAKAAQAPAAAGAMQADAIAAARIAAAFIAAADIACARIACAPQAAAEgDADQgEADgEAAQgKAAgBgJg");
	this.shape_27.setTransform(201.9,303.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AACAYQgCgHgBgSIgCADIgMAeIgDAGQgEAFgGAAQgEAAgEgGQgEgIgDgKIgHgoIgBgLQAAgFADgCQADgDAFAAQAIgBACAJIACALIABALIADARIANglQADgKAIAAQAIAAADAMIAEAUIAEAUIAMguQACgGAIAAQAEAAAEADQADADAAAEIAAACIgRA2QgCAHgFAIQgEAEgGAAQgKAAgGgTg");
	this.shape_28.setTransform(192.2,304.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgYAgQgMgKAAgTQgBgPAKgNQAMgQATAAQAQAAAJAMQAIALAAARQAAAQgJANQgLAOgRAAQgOAAgKgKgAgKgMQgFAIAAAHQAAAKAGAFQAEAEAFAAQAFAAAFgFQAGgFAAgJQABgYgOAAQgIAAgFAJg");
	this.shape_29.setTransform(182.4,304.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAVA6QgGAEgFABIgKAAQgSABgLgLQgMgMABgRQgBgVAMgLQAMgOARAAIAKABQAGACACADQABgbACgKQACgKAIABQAFAAADACQADADAAAFIgCAiIgCAgQAAAcACAKIAAACQAAAEgDADQgDACgEAAQgGABgDgGgAgPADQgGAGABAOQAAAJAFAFQAHAHAIAAQAEgBADgBIAIgFIACgCIAAgdQgDgFgEgBQgEgBgGAAQgJgBgGAFg");
	this.shape_30.setTransform(173.5,301.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAVA6QgFAEgGABIgKAAQgRABgMgLQgLgMAAgRQAAgVALgLQAMgOARAAIALABQAEACAEADQAAgbACgKQACgKAIABQAFAAADACQACADAAAFIgBAiIgCAgQAAAcACAKIAAACQAAAEgDADQgEACgDAAQgGABgDgGgAgPADQgFAGgBAOQAAAJAHAFQAGAHAIAAQAEgBADgBIAHgFIADgCIAAgdQgCgFgEgBQgFgBgFAAQgKgBgGAFg");
	this.shape_31.setTransform(157.1,301.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgZAhQgNgJAAgTQAAgRAKgOQALgPASAAQAOAAAJAEQALAGAAAMQAAAJgJAGIgSAHIgYAMQAEAEAFACQAFACAGAAQAKAAAHgEQAHgEAEAAQAHAAABAIQgBAJgNAFQgKAFgMAAQgSAAgLgJgAgJgRQgGAEgDAKIASgIQAIgEAHgFQgFgCgJAAQgFAAgFAFg");
	this.shape_32.setTransform(147.9,304);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgfA+QgDgDAAgEIAAgdIAAgdIgBgdIgBgQQAAgGACgFQAEgFAGAAQAEAAADADQADADAAAEIAAABQAFgDAFgCQAEgBAFAAQASAAAIAPQAGAMAAASQABAPgLALQgKAMgRAAIgNgBIAAAgQAAAEgDADQgDADgFAAQgEAAgDgDgAgDgkQgFACgGAFIABAeQAHADAGAAQAHAAAFgEQAEgFAAgJIgBgPQgCgJgIAAQgFAAgDACg");
	this.shape_33.setTransform(139.4,305.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgfA+QgDgDAAgEIAAgdIAAgdIgBgdIgBgQQAAgGACgFQAEgFAGAAQAEAAADADQADADAAAEIAAABQAFgDAFgCQAEgBAFAAQASAAAIAPQAGAMAAASQABAPgLALQgKAMgRAAIgNgBIAAAgQAAAEgDADQgDADgFAAQgEAAgDgDgAgDgkQgFACgGAFIABAeQAHADAGAAQAHAAAFgEQAEgFAAgJIgBgPQgCgJgIAAQgFAAgDACg");
	this.shape_34.setTransform(130.9,305.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgYAgQgMgKAAgTQgBgPAKgNQAMgQATAAQAQAAAJAMQAIALAAARQAAAQgJANQgLAOgRAAQgOAAgKgKgAgKgMQgFAIAAAHQAAAKAGAFQAEAEAFAAQAFAAAFgFQAGgFAAgJQABgYgOAAQgIAAgFAJg");
	this.shape_35.setTransform(122.2,304.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgGA9QgDgDAAgFIAAhqQAAgFADgCQADgDADAAQAEAAADADQADACAAAFIAABmQAAAPgKAAQgDAAgDgDg");
	this.shape_36.setTransform(115.8,301.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgOBBQgDgCAAgFIAAgCQACgLAAgKIAAglIgEABIgFAAQgFAAgDgCQgDgDgBgFQAAgHAJgCIANgCIABgJQACgRAIgJQAGgKAUAAQAOAAgBAKQABAKgNAAQgKAAgFAHQgCAFgBAKIgBADIAPgBQAOAAAAAKQAAAKgPgBIgPABIAAATIABAVQAAAPgDAIQgBAIgHAAQgEAAgEgDg");
	this.shape_37.setTransform(109.5,302.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgWA7QgDADgEAAQgEAAgDgDQgDgDAAgEIAAgGIAAgGIAAhWQAAgGADgEQADgGAGAAQAIAAAAAJIAAAEIgBADIAAAeQAGgEAGgBIAIgCQASAAALAOQALAKAAASQAAASgMANQgNANgQAAQgLAAgKgEgAgIAAQgFAAgHAFIAAAhQALAEAIAAQAIAAAGgGQAHgHAAgKQAAgKgGgHQgFgFgJAAQgCAAgGADg");
	this.shape_38.setTransform(93.8,301.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAPAmQgKAEgJAAQgLAAgHgFQgJgFgCgKQgCgUAAgNQAAgKACgNQACgJAIAAQAFAAAEADQACADAAAEIgBALIgBALIABARIACANIAEACIADAAQAHAAAKgCIAAgOIAAgLQAAgQACgMQABgJAKAAQAEAAAEADQADADAAAEIgCAcIAAANIAAAQIABAFIAAAFQAAAEgEADQgDADgEAAQgHAAgDgGg");
	this.shape_39.setTransform(84.9,304.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgmA7QgDgEAAgFIAAhRIAAgKIAAgKQABgIAMgBQAHgCANAAQANAAAOAKQAPALAAAQQABAJgEAGQgCAFgHAFQAIADAFAHQAIAJgBAIQAAAKgLAJQgIAHgIADQgQAHgcAAQgFAAgEgEgAgUApQAOgBANgEQAOgEAAgEQgBgHgIgEQgGgEgGgBIgUAAgAgUgYIAAAQIALABQAWgCAAgQQAAgFgHgFQgGgGgIAAIgMAAg");
	this.shape_40.setTransform(76,302);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgIAHQgEgDAAgEQAAgDAEgDQAEgEAEAAQAGAAADAEQAEADAAADQAAAEgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_41.setTransform(359.7,320);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgpA1QAAgFADgDQADgCAEAAIALABIAMABQALAAAGgIQAFgHABgQQgEAEgFACQgGACgEAAQgQAAgLgKQgKgLAAgPQAAgWAOgOQAOgPAWAAQAIABAGACQAFACAEADQAKACAAALIgBAPQgEATAAAUQgBAbgIAMQgLAQgaAAQggABAAgNgAgLgkQgHAIAAANQAAALADAEQAEADAIAAQAEAAAHgGQAHgHABgHIADgZIgFgCIgGgBQgMAAgHAJg");
	this.shape_42.setTransform(351.4,318.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgaAjQgMgMgBgUQAAgQAKgOQANgRAUAAQARAAAKANQAJAMAAASQAAARgLANQgLAQgSAAQgPAAgLgKgAgLgNQgFAIAAAIQAAAKAGAGQAEAEAGAAQAGAAAFgFQAGgFAAgLQACgYgQAAQgIAAgGAJg");
	this.shape_43.setTransform(342.4,316.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgGBBQgEgDAAgFIAAhxQAAgFAEgDQADgDADAAQAFAAADADQADADAAAFIAABsQAAAQgLAAQgDAAgDgDg");
	this.shape_44.setTransform(335.7,313.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgpA1QAAgFADgDQADgCAEAAIALABIAMABQALAAAGgIQAFgHABgQQgEAEgFACQgGACgEAAQgQAAgLgKQgKgLAAgPQAAgWAOgOQAOgPAWAAQAIABAGACQAFACAEADQAKACAAALIgBAPQgEATAAAUQgBAbgIAMQgLAQgaAAQggABAAgNgAgLgkQgHAIAAANQAAALADAEQAEADAIAAQAEAAAHgGQAHgHABgHIADgZIgFgCIgGgBQgMAAgHAJg");
	this.shape_45.setTransform(321.5,318.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAQAmIgCgSIgBgRIABgFIAAgIIAAgCIAAgEQAAgHgDAAQgHAAgGAJQgGAJgEAMIgBAIIAAAHIgBAHIAAAHQAAAFgEADQgDAEgFAAQgFAAgDgEQgDgDgBgEIAAgIIgBgHIACgWIABgVIgBgHIAAgIQABgFADgDQADgDAFAAQALAAABANIAAABQAMgMAMAAQAPAAAGANQAEAJAAARIAAAGIAAAEIACAQQACAKAAAHQgBAFgDADQgDADgFAAQgLAAgBgKg");
	this.shape_46.setTransform(312.7,316.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgJA8QgEgDAAgFIAAgPIAAgPIABgTIABgRQAAgEADgDQADgEAFAAQADAAAEAEQACADAAAEIAAARIgBATIAAAPIAAAPQAAAFgCADQgEADgDAAQgFAAgDgDgAgHgpQgDgDAAgGQAAgEADgFQAEgDAEAAQAFAAAEADQAEAFAAAEQAAAGgEADQgEADgFABQgEgBgEgDg");
	this.shape_47.setTransform(306,314.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgGA5QgEgDAAgEIABgJIAAgJIgCgpIgPgBQgLgCAAgJQAAgFADgDQAEgDAFAAIAOABIgBgJIAAgIQAAgFADgDQAEgDAFAAQAKAAAAAUIAAAHIAIAAIANABQAHACAAAIQAAAFgDADQgEADgFAAIgEAAIgEAAIgIAAIACAqIAAAEIAAAFQAAATgMAAQgDAAgDgDg");
	this.shape_48.setTransform(299.4,314.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAUAmQgIAEgGABQgGACgCAAQgUAAgKgLQgKgLAAgUQAAgTAPgOQAPgOATAAQAHAAALAEQAMAGAAAGQAAADgCADIgBAIIAAAMQAAAOACAGIAEAJIADAIQAAAEgDADQgEADgEAAQgEAAgIgHgAgKgQQgJAJAAAKQAAALAEAGQAEAFAIAAQADAAAFgBQAFgCAEgEQgDgSAAgJIABgGIABgHIgDgCIgCgBQgKABgIAIg");
	this.shape_49.setTransform(290.7,316.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgGA5QgEgDAAgEIABgJIAAgJIgCgpIgPgBQgLgCAAgJQAAgFADgDQAEgDAFAAIAOABIgBgJIAAgIQAAgFADgDQAEgDAFAAQAKAAAAAUIAAAHIAIAAIANABQAHACAAAIQAAAFgDADQgEADgFAAIgEAAIgEAAIgIAAIACAqIAAAEIAAAFQAAATgMAAQgDAAgDgDg");
	this.shape_50.setTransform(282,314.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgaAjQgMgMgBgUQAAgQAKgOQANgRAUAAQARAAAKANQAJAMAAASQAAARgLANQgLAQgSAAQgPAAgLgKgAgLgNQgFAIAAAIQAAAKAGAGQAEAEAGAAQAGAAAFgFQAGgFAAgLQACgYgQAAQgIAAgGAJg");
	this.shape_51.setTransform(273.4,316.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgfAqQgDgCAAgFIAAg1IAAgHIAAgHQAAgGADgCQADgEAFAAQAJAAACAKQAMgLATAAQAQAAAAAWIAAAFQAAAOgMAAQgKAAAAgMIgBgIQgQADgIARIAAAnQAAAFgDADQgEADgEAAQgGAAgCgEg");
	this.shape_52.setTransform(265.1,316.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgbAjQgOgKAAgTQAAgTALgPQAMgQATAAQAPAAAJAFQAMAGAAANQABAJgKAHQgFADgOAEIgaANQADAEAHACQAFACAFAAQALAAAIgEQAHgEAEAAQAJAAAAAIQAAAKgOAGQgLAFgOAAQgRAAgNgKgAgKgTQgFAFgEALIATgIQAJgFAHgFQgGgDgJAAQgGAAgFAFg");
	this.shape_53.setTransform(248.7,316.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AATA9IgEgUIgBgTIAAgGIAAgGIAAgIQgBgCgDAAQgKAAgFAHQgEADgGAMQAAAfgDAFQgEAIgHgBQgEAAgEgCQgEgDAAgFIABgFIABgWIABg1IAAgEIAAgMIgBgIIAAgIQAAgEADgEQADgDAFAAQAIAAADAJQACAFAAALIgBARIAAAPQAGgFAHgEQAFgDAIAAQAOAAAGAIQAFAGABALIABAUIABARIADAQIABADQAAAEgEADQgEADgEAAQgJAAgCgHg");
	this.shape_54.setTransform(239.3,313.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgGA5QgEgDAAgEIABgJIAAgJIgCgpIgPgBQgLgCAAgJQAAgFADgDQAEgDAFAAIAOABIgBgJIAAgIQAAgFADgDQAEgDAFAAQAKAAAAAUIAAAHIAIAAIANABQAHACAAAIQAAAFgDADQgEADgFAAIgEAAIgEAAIgIAAIACAqIAAAEIAAAFQAAATgMAAQgDAAgDgDg");
	this.shape_55.setTransform(230.2,314.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAWA+QgFADgGACIgLABQgSAAgNgMQgMgMAAgTQAAgXAMgLQANgOASAAIAMABIAIAEIADgnQABgKAJAAQAFAAADAEQADADAAAEIgCAlIgCAiQAAAdACALIABACQAAAFgEADQgDADgEAAQgHAAgDgGgAgQADQgGAHAAAOQAAAJAHAHQAGAGAJAAQAFAAADgBIAIgGIACgCIAAgfQgCgFgFgBQgEgCgGAAQgLAAgGAFg");
	this.shape_56.setTransform(213.7,313.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgbAjQgOgKAAgTQAAgTALgPQAMgQATAAQAOAAAKAFQANAGAAANQAAAJgKAHQgGADgNAEIgaANQADAEAHACQAFACAFAAQALAAAIgEQAHgEAEAAQAJAAAAAIQAAAKgOAGQgMAFgNAAQgRAAgNgKgAgKgTQgGAFgDALIASgIQAKgFAGgFQgFgDgJAAQgGAAgFAFg");
	this.shape_57.setTransform(204,316.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgHBBQgDgDAAgFIAAhxQAAgFADgDQAEgDADAAQAFAAADADQADADAAAFIAABsQAAAQgLAAQgDAAgEgDg");
	this.shape_58.setTransform(197,313.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgGBBQgEgDAAgFIAAhxQAAgFAEgDQADgDADAAQAFAAADADQADADAAAFIAABsQAAAQgLAAQgEAAgCgDg");
	this.shape_59.setTransform(192.3,313.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgaAjQgMgMgBgUQAAgQAKgOQANgRAUAAQARAAAKANQAJAMAAASQAAARgLANQgLAQgSAAQgPAAgLgKgAgLgNQgFAIAAAIQAAAKAGAGQAEAEAGAAQAGAAAFgFQAGgFAAgLQACgYgQAAQgIAAgGAJg");
	this.shape_60.setTransform(185.5,316.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AggAqQgCgCAAgFIAAg1IAAgHIAAgHQAAgGADgCQADgEAFAAQAJAAACAKQANgLARAAQARAAAAAWIAAAFQgBAOgKAAQgLAAAAgMIgBgIQgQADgIARIAAAnQAAAFgDADQgEADgFAAQgFAAgDgEg");
	this.shape_61.setTransform(177.2,316.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgYBAQgDgDAAgFQAAgIASgmIgdgzIgFgGQgCgEAAgDQABgFADgDQADgDAFAAQAGAAADAEQAMAPANAgIALgYIAMgWQADgGAHAAQAEAAAEAEQADADAAAEIgBAGIgdA5QgLAVgEAPIgEAPQgEAIgHAAQgEAAgFgDg");
	this.shape_62.setTransform(160.9,318.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgHBBQgDgDAAgFIAAhxQAAgFADgDQAEgDADAAQAFAAADADQADADAAAFIAABsQAAAQgLAAQgDAAgEgDg");
	this.shape_63.setTransform(153.8,313.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAWA+QgFADgGACIgLABQgSAAgNgMQgMgMAAgTQAAgXAMgLQANgOASAAIAMABIAIAEIADgnQABgKAJAAQAFAAADAEQADADAAAEIgCAlIgCAiQAAAdACALIABACQAAAFgEADQgDADgEAAQgHAAgDgGgAgQADQgGAHAAAOQAAAJAHAHQAGAGAJAAQAFAAADgBIAIgGIACgCIAAgfQgCgFgFgBQgEgCgGAAQgLAAgGAFg");
	this.shape_64.setTransform(146.4,313.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgJA8QgEgDAAgFIAAgPIAAgPIABgTIAAgRQAAgEAEgDQADgEAFAAQADAAAEAEQACADAAAEIAAARIgBATIABAPIAAAPQAAAFgDADQgEADgDAAQgFAAgDgDgAgHgpQgDgDAAgGQAAgEADgFQAEgDAEAAQAFAAAEADQAEAFAAAEQAAAGgEADQgEADgFABQgEgBgEgDg");
	this.shape_65.setTransform(139.4,314.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AghBCQgDgDAAgFIAAgfIAAgfIgBgfIgCgQQAAgHADgEQAEgGAGAAQAFAAADADQADADAAAEIAAACQAFgEAGgBIAJgCQATAAAJARQAHALAAAUQAAAQgLAMQgLANgSAAQgGAAgHgCIgBAiQAAAFgDADQgDADgFAAQgFAAgDgDgAgDgmQgGACgFAFIABAgQAHACAGAAQAIAAAFgDQAEgGAAgJIgBgQQgDgJgIgBQgFAAgDADg");
	this.shape_66.setTransform(132.4,318.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAUAmQgIAEgGABQgGACgCAAQgUAAgKgLQgKgLAAgUQAAgTAPgOQAPgOATAAQAHAAALAEQAMAGAAAGQAAADgCADIgBAIIAAAMQAAAOACAGIAEAJIADAIQAAAEgDADQgEADgEAAQgEAAgIgHgAgKgQQgJAJAAAKQAAALAEAGQAEAFAIAAQADAAAFgBQAFgCAEgEQgDgSAAgJIABgGIABgHIgDgCIgCgBQgKABgIAIg");
	this.shape_67.setTransform(123,316.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgfAqQgDgCAAgFIAAg1IAAgHIAAgHQAAgGADgCQADgEAFAAQAJAAACAKQAMgLATAAQAQAAAAAWIAAAFQAAAOgMAAQgKAAAAgMIAAgIQgRADgIARIAAAnQAAAFgDADQgEADgEAAQgGAAgCgEg");
	this.shape_68.setTransform(114.4,316.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AATA9IgMgSIgMgRIgKAIIgBAWQgBAFgDADQgDADgFAAQgMAAAAgOIABgTIABgUIABgaIAAgbIAAgIIgBgJQAAgFAEgDQACgDAGAAQAEAAAEADQADADAAAFIAAAJIABAIIgBAYIAAAVQALgHAWgXQADgDAFAAQAEAAAEADQADADAAAFQAAAEgCADQgKAJgOAMIARAWQAMARAAAGQAAAEgDADQgEAEgEAAQgHAAgDgHg");
	this.shape_69.setTransform(98.5,313.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgZAkQgNgLAAgSQAAgOAMgSQANgUAQAAQAIAAAMAEQAOAGAAAIQAAAEgDADQgDADgFAAQgDAAgFgEQgFgDgKAAQgFAAgHAMQgHAMAAAHQAAAJAGAEQAGAFAIABQAFAAAJgFIAKgEQAEAAADADQAEAEAAAEQAAAGgPAGQgMAGgIAAQgQAAgNgKg");
	this.shape_70.setTransform(89,316.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgJA8QgEgDABgFIAAgPIgBgPIABgTIABgRQAAgEADgDQADgEAFAAQADAAADAEQADADAAAEIAAARIgBATIAAAPIAAAPQAAAFgDADQgDADgDAAQgFAAgDgDgAgHgpQgDgDAAgGQAAgEADgFQAFgDADAAQAFAAAEADQAEAFAAAEQAAAGgEADQgEADgFABQgDgBgFgDg");
	this.shape_71.setTransform(82.7,314.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AAtA2IgFgUQgEgPgFgaIgMAhIgFAPIgGAPQgFAHgGAAQgHAAgFgJIgFgPQgGgVgFgWIgKAnIgDASQgEAMgJAAQgGAAgDgEQgDgDAAgFQAAgNAGgTIAJgeIAFgaQADgSAFgFQAEgGAHAAQAHAAAEAHQAEAIADAWQAEAWAHAWQAIgWAHgeIAFgTQAFgMAJAAQAJAAAFAOQABAGACAPQAFAhAIAaIAHAbQAAAFgEAEQgEADgEAAQgJAAgEgNg");
	this.shape_72.setTransform(72.7,314.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgHAHQgEgDAAgEQAAgDAEgDQADgDAEAAQAFAAAEADQADADAAADQAAAEgDADQgEADgFAAQgEAAgDgDg");
	this.shape_73.setTransform(257.9,331.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgGA9QgDgDAAgFIAAhqQAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAABmQAAAPgKAAQgDAAgDgDg");
	this.shape_74.setTransform(252.2,325.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgGA9QgDgDAAgFIAAhqQAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAABmQAAAPgKAAQgDAAgDgDg");
	this.shape_75.setTransform(247.8,325.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgIA4QgEgDAAgEIAAgPIAAgOIAAgRIABgQQAAgEAEgDQADgDAEAAQADAAADADQADADAAAEIgBAQIAAARIAAAOIAAAPQAAAEgDADQgDADgDAAQgEAAgDgDgAgGgnQgEgDAAgFQAAgFAEgDQAEgDADAAQAFAAAEADQADADAAAFQAAAFgDADQgEAEgFAAQgDAAgEgEg");
	this.shape_76.setTransform(243.6,325.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AASA4IgEgSIgBgRIAAgHIAAgFIAAgHQgBgCgDAAQgJAAgFAGQgDADgGAMQAAAcgDAGQgDAHgHAAQgEgBgEgDQgDgDAAgEIABgEIABgVIAAgyIAAgDIABgMIgBgIIgBgGQAAgFADgDQADgDAFAAQAIABACAHQACAGAAAJIgBAQIAAAPQAGgGAGgDQAFgCAHAAQANAAAGAHQAFAGABAKIAAATIACAPIADAPIAAAEQAAADgDAEQgEADgEAAQgIAAgCgJg");
	this.shape_77.setTransform(236.7,325.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgZAhQgNgJAAgSQAAgTAKgNQALgPASAAQAOAAAJAEQALAGAAAMQAAAJgJAGIgSAHIgYAMQAEAEAFACQAFACAGAAQAKAAAHgEQAHgEAEAAQAHAAABAIQgBAJgNAFQgKAFgMAAQgSAAgLgJgAgJgRQgGAEgDAKIASgHQAIgFAHgEQgFgDgJAAQgFAAgFAFg");
	this.shape_78.setTransform(220.4,327.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AASA4IgEgSIgBgRIAAgHIAAgFIAAgHQgBgCgDAAQgJAAgFAGQgDADgGAMQAAAcgDAGQgDAHgHAAQgEgBgEgDQgDgDAAgEIABgEIABgVIAAgyIAAgDIABgMIgBgIIgBgGQAAgFADgDQADgDAFAAQAIABACAHQACAGAAAJIgBAQIAAAPQAGgGAGgDQAFgCAHAAQANAAAGAHQAFAGABAKIAAATIACAPIADAPIAAAEQAAADgDAEQgEADgEAAQgIAAgCgJg");
	this.shape_79.setTransform(211.5,325.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgFA2QgEgDAAgEIAAgIIAAgJIgBgnIgOgBQgKgBAAgJQAAgEADgEQADgDAEABIANAAIAAgIIgBgIQABgEADgCQADgEAEAAQAKAAAAAUIAAAGIAIAAIAMAAQAHADAAAHQgBAFgDACQgCADgGAAIgDAAIgEAAIgHABIABAnIAAAEIAAAFQAAARgLABQgDgBgCgCg");
	this.shape_80.setTransform(203,326.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AAPAkIgCgRIgBgQIAAgEIAAgHIAAgEIABgDQAAgHgDAAQgHAAgFAJQgGAIgEAMIAAAHIgBAHIAAAGIAAAIQAAAEgDADQgEADgEAAQgFAAgDgDQgDgDAAgEIgBgHIAAgHIABgVIABgTIAAgHIAAgIQAAgEADgDQADgDAFAAQAKAAAAAMIAAABQAMgLALAAQAOAAAGAMQAEAIgBARIAAAFIAAADQAAAHADAJIABAQQAAAFgDACQgDADgFAAQgKAAgBgJg");
	this.shape_81.setTransform(188.2,327.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AACAYQgCgHgBgSIgCADIgMAeIgDAGQgEAEgGABQgEAAgEgGQgEgIgDgKIgHgpIgBgKQAAgEADgEQADgCAFAAQAIAAACAIIACALIABAKIADASIANglQADgKAIAAQAIAAADALIAEAVIAEAUIAMgtQACgHAIAAQAEAAAEACQADADAAAFIAAACIgRA2QgCAHgFAHQgEAFgGABQgKgBgGgTg");
	this.shape_82.setTransform(178.5,327.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AAVA7QgFACgGABIgKABQgSABgLgMQgLgLAAgRQAAgWALgLQAMgMARAAIALABQAEABAEACQABgaABgLQABgJAJAAQAFAAADADQACAEAAAEIgBAiIgCAgQAAAcACAKIAAABQAAAFgDADQgDADgEgBQgGAAgDgEgAgPADQgFAGAAAOQgBAJAHAFQAGAHAIAAQAEgBADgBIAHgFIADgDIAAgcQgCgFgEgBQgFgCgFABQgKAAgGAEg");
	this.shape_83.setTransform(159.7,325.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgnAyQAAgFADgDQADgCAEAAIAKACIAMAAQAJABAGgIQAFgGABgPQgEADgFADQgFACgEAAQgPgBgKgJQgKgLAAgNQAAgWANgNQAOgOAVAAQAHABAFACQAGABADAEQAKABAAALIgCAOQgDATgBARQgBAagHAMQgKAPgYgBQgfABAAgMgAgLgiQgGAIAAANQAAAJADAEQAEADAHAAQAEAAAHgFQAGgIABgGIADgXIgFgDIgFgBQgLAAgIAJg");
	this.shape_84.setTransform(345.9,305.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AAQAkIgDgRIgBgQIABgEIAAgHIAAgEIAAgDQAAgHgEAAQgGAAgEAJQgHAIgDAMIgBAHIAAAHIgBAHIgBAHQAAAEgDADQgDADgFAAQgEAAgDgDQgDgDAAgEIgBgHIAAgHIABgVIABgTIAAgHIgBgIQAAgEADgDQAEgDAEAAQAKAAACAMIAAABQALgLAKAAQAPAAAGAMQADAIABARIAAAFIAAADIABAQIACAQQAAAFgDACQgEADgEAAQgKAAAAgJg");
	this.shape_85.setTransform(337.6,303.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AAQAkIgDgRIgBgQIAAgEIAAgHIAAgEIABgDQAAgHgDAAQgHAAgFAJQgGAIgEAMIAAAHIgBAHIAAAHIgBAHQAAAEgCADQgEADgEAAQgFAAgDgDQgDgDAAgEIAAgHIgBgHIABgVIABgTIAAgHIAAgIQAAgEACgDQAEgDAEAAQALAAAAAMIAAABQAMgLALAAQAOAAAGAMQAEAIAAARIAAAFIAAADIACAQIABAQQAAAFgDACQgDADgFAAQgJAAgBgJg");
	this.shape_86.setTransform(324.7,303.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgZAhQgOgJAAgSQAAgTALgNQALgPASAAQAOAAAJAEQAMAGAAAMQAAAJgKAGIgRAHIgZAMQAEAEAFACQAGACAEAAQALAAAHgEQAGgEAEAAQAIAAAAAIQAAAJgMAFQgMAFgMAAQgRAAgLgJgAgJgRQgFAEgDAKIARgHQAJgFAGgEQgGgDgIAAQgFAAgFAFg");
	this.shape_87.setTransform(315.8,303.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgZAhQgOgJABgSQAAgTAKgNQALgPASAAQAOAAAJAEQALAGAAAMQABAJgKAGIgSAHIgYAMQAEAEAFACQAFACAGAAQAKAAAHgEQAHgEADAAQAJAAAAAIQgBAJgNAFQgKAFgMAAQgSAAgLgJgAgJgRQgFAEgEAKIASgHQAJgFAGgEQgGgDgIAAQgFAAgFAFg");
	this.shape_88.setTransform(306.9,303.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgdAoQgDgCAAgFIAAgxIAAgHIAAgHQAAgFADgDQACgDAFAAQAJAAACAJQAMgKARAAQAPAAAAAVIAAAFQgBAMgKAAQgKAAAAgKIAAgIQgPADgIAPIAAAlQAAAFgEADQgDACgEAAQgFAAgCgDg");
	this.shape_89.setTransform(298.8,303.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AASAkIgMAEQgGACgCAAQgTAAgJgKQgJgKAAgUQAAgRAOgNQANgNASAAQAHAAAKADQAMAGAAAHQAAAAAAABQAAAAgBABQAAAAAAABQAAABgBAAIgBAIIgBALQAAAMACAHIAEAIIADAIQAAAEgDADQgDACgEAAQgEAAgIgGgAgKgOQgIAIAAAJQAAAKAEAGQAEAEAHAAQADABAEgCQAFgCAEgCQgDgSAAgJIABgFIABgIIgDAAIgCgBQgJAAgIAJg");
	this.shape_90.setTransform(290.4,303.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgXAiQgMgLAAgQQAAgOALgRQAMgSAPgBQAIABALAEQANAFAAAIQAAADgDADQgDADgEAAQgDAAgFgDQgFgEgJAAQgEAAgHAMQgHALAAAHQAAAHAGAFQAFAFAIAAQAFAAAHgEIAKgEQAEAAADADQADADAAAEQAAAGgNAGQgMAFgHABQgQAAgLgKg");
	this.shape_91.setTransform(281.7,303.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgWA8QgDgDAAgFQAAgGAQglIgbgvIgEgHQgCgDAAgDQAAgEAEgDQADgEAEAAQAFAAADAEQALAPANAeIAKgXQAGgMAFgIQAEgGAFAAQAFAAADADQAEADAAAEIgCAGIgbA1QgKAUgEAOIgEAPQgDAGgHAAQgEAAgEgCg");
	this.shape_92.setTransform(266.3,305.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AAVA7QgGACgFABIgKABQgRABgMgMQgMgLAAgRQAAgWAMgLQAMgMARAAIALABQAEABAEACQABgaABgLQABgJAJABQAFgBACADQADAEAAAEIgBAiIgCAgQAAAcACAKIAAABQAAAFgDADQgEADgEgBQgFAAgDgEgAgPADQgGAGAAAOQABAJAGAFQAGAHAIgBQAEAAAEgBIAGgFIADgDIAAgcQgDgFgDgBQgFgCgFABQgKAAgGAEg");
	this.shape_93.setTransform(252.7,301.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgIA4QgDgDAAgEIgBgPIAAgOIABgRIABgQQAAgEACgDQADgDAFAAQADAAADADQADADAAAEIgBAQIAAARIAAAOIAAAPQAAAEgDADQgDADgDAAQgEAAgDgDgAgGgnQgEgDABgFQgBgFAEgDQAEgDADAAQAFAAADADQAEADAAAFQAAAFgEADQgDAEgFAAQgDAAgEgEg");
	this.shape_94.setTransform(241.7,301.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AACAYQgCgHgBgSIgCADIgMAeIgDAGQgEAEgGABQgEAAgEgGQgEgIgDgKIgHgpIgBgKQAAgEADgEQADgCAFAAQAIAAACAIIACALIABAKIADASIANglQADgKAIAAQAIAAADALIAEAVIAEAUIAMgtQACgHAIAAQAEAAAEACQADADAAAFIAAACIgRA2QgCAHgFAIQgEAEgGABQgKgBgGgTg");
	this.shape_95.setTransform(233.8,303.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgZAhQgOgJAAgSQAAgTALgNQAMgPARAAQAOAAAJAEQAMAGAAAMQAAAJgKAGIgRAHIgZAMQAEAEAFACQAGACAEAAQALAAAHgEQAGgEAEAAQAJAAgBAIQABAJgNAFQgMAFgMAAQgQAAgMgJgAgJgRQgFAEgDAKIARgHQAJgFAGgEQgFgDgJAAQgFAAgFAFg");
	this.shape_96.setTransform(216.7,303.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgFAtQgDgDAAgEIgCgbIgCgYIgBgIQgJAFgJANIgCABIAAAXIAAAGIAAAFQAAAEgEADQgDACgEAAQgHAAgCgFQgCgFAAgIIAAgbIAAgLIgBgMQAAgHADgGQADgHAFAAQAFAAADAEQAEADAAAEIgBAHQAMgOAKAAQAMAAAEAKQAFgFAGgCQAFgCAHAAQAPAAAGAPIADAWIAGAnQAAAFgDADQgEADgEAAQgJAAgCgJIgDgXIgCgUQgCgOgEgBIgIAEIgJAGIACAYQACARAAAJQAAAEgDADQgDADgFAAQgCAAgDgDg");
	this.shape_97.setTransform(206.3,303.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AASAkIgMAEQgGACgCAAQgTAAgJgKQgJgKAAgUQAAgRAOgNQANgNASAAQAHAAAKADQAMAGAAAHQAAAAAAABQAAAAgBABQAAAAAAABQAAABgBAAIgBAIIgBALQAAAMACAHIAEAIIADAIQAAAEgDADQgDACgEAAQgEAAgIgGgAgKgOQgIAIAAAJQAAAKAEAGQAEAEAHAAQADABAEgCQAFgCAEgCQgDgSAAgJIABgFIABgIIgDAAIgCgBQgJAAgIAJg");
	this.shape_98.setTransform(195.5,303.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgXAiQgMgLAAgQQAAgOALgRQAMgSAPgBQAIABALAEQANAFAAAIQAAADgDADQgDADgEAAQgDAAgFgDQgFgEgJAAQgEAAgHAMQgHALAAAHQAAAHAGAFQAFAFAIAAQAFAAAHgEQAIgEACAAQAEAAADADQADADAAAEQAAAGgNAGQgMAFgHABQgQAAgLgKg");
	this.shape_99.setTransform(186.8,303.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgFAtQgDgDAAgEIgCgbIgCgYIgBgIQgJAFgJANIgCABIAAAXIAAAGIAAAFQAAAEgEADQgDACgEAAQgHAAgCgFQgCgFAAgIIAAgbIAAgLIgBgMQAAgHADgGQADgHAFAAQAFAAADAEQAEADAAAEIgBAHQAMgOAKAAQAMAAAEAKQAFgFAGgCQAFgCAHAAQAPAAAGAPIADAWIAGAnQAAAFgDADQgEADgEAAQgJAAgCgJIgDgXIgCgUQgCgOgEgBIgIAEIgJAGIACAYQACARAAAJQAAAEgDADQgDADgFAAQgCAAgDgDg");
	this.shape_100.setTransform(169.8,303.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AASAkIgMAEQgGACgCAAQgTAAgJgKQgJgKAAgUQAAgRAOgNQANgNASAAQAHAAAKADQAMAGAAAHQAAAAAAABQAAAAgBABQAAAAAAABQAAABgBAAIgBAIIgBALQAAAMACAHIAEAIIADAIQAAAEgDADQgDACgEAAQgEAAgIgGgAgKgOQgIAIAAAJQAAAKAEAGQAEAEAHAAQADABAEgCQAFgCAEgCQgDgSAAgJIABgFIABgIIgDAAIgCgBQgJAAgIAJg");
	this.shape_101.setTransform(159,303.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgpAyQgJgHAAgKQAAgFACgDQADgDAGAAQAHAAADAHQAEAKAQAAQAMAAAMgGQANgGAAgHQAAgKgIgDQgGgDgPAAQgOAAgKgEQgPgGAAgMQABgPAQgNQAQgMARAAQAIAAALADQAOAFAAAFQAAAEgDADQgDAEgFAAIgLgCIgLgBQgKAAgHAFQgKAFAAAFQAAADADACQADACAGABIASABQARABAKAJQALAHAAARQAAAUgXAKQgRAIgVAAQgTAAgMgJg");
	this.shape_102.setTransform(149,301.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgWA8QgDgDAAgFQAAgGAQglIgbgvIgEgHQgCgDAAgDQAAgEAEgDQADgEAEAAQAFAAADAEQALAPANAeIAKgXQAGgMAFgIQAEgGAFAAQAFAAADADQAEADAAAEIgCAGIgbA1QgKAUgEAOIgEAPQgDAGgHAAQgEAAgEgCg");
	this.shape_103.setTransform(132,305.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AASA6QgEgIgIgJIgLgQIgKAHIgBAVQAAAEgDADQgDADgEAAQgLAAAAgNIABgTIAAgSIABgYIAAgaIAAgIIgBgHQAAgFADgDQADgDAFAAQAFAAADADQADADAAAFIAAAIIABAIIgBAWIAAATQALgFATgWQAEgDAEAAQAEAAAEADQADADAAAEQAAADgDAEQgJAJgNALIAQAUQAMAQAAAGQAAADgDADQgEAEgEAAQgGAAgDgGg");
	this.shape_104.setTransform(123.6,301.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AASAkIgMAEQgGACgCAAQgTAAgJgKQgJgKAAgUQAAgRAOgNQANgNASAAQAHAAAKADQAMAGAAAHQAAAAAAABQAAAAgBABQAAAAAAABQAAABgBAAIgBAIIgBALQAAAMACAHIAEAIIADAIQAAAEgDADQgDACgEAAQgEAAgIgGgAgKgOQgIAIAAAJQAAAKAEAGQAEAEAHAAQADABAEgCQAFgCAEgCQgDgSAAgJIABgFIABgIIgDAAIgCgBQgJAAgIAJg");
	this.shape_105.setTransform(114.6,303.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgZAhQgOgJAAgSQAAgTALgNQAMgPARAAQAOAAAJAEQAMAGAAAMQAAAJgKAGIgRAHIgZAMQAEAEAFACQAGACAEAAQALAAAHgEQAGgEAEAAQAJAAgBAIQABAJgNAFQgLAFgNAAQgQAAgMgJgAgJgRQgFAEgDAKIARgHQAIgFAHgEQgGgDgIAAQgFAAgFAFg");
	this.shape_106.setTransform(105.5,303.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AAQAkIgDgRIgBgQIAAgEIAAgHIAAgEIABgDQAAgHgDAAQgHAAgFAJQgGAIgEAMIAAAHIgBAHIAAAHIgBAHQAAAEgCADQgEADgEAAQgFAAgDgDQgDgDAAgEIAAgHIgBgHIABgVIABgTIAAgHIAAgIQAAgEACgDQAEgDAEAAQALAAAAAMIAAABQAMgLALAAQAOAAAGAMQAEAIAAARIAAAFIAAADIACAQIABAQQAAAFgDACQgDADgFAAQgJAAgBgJg");
	this.shape_107.setTransform(97,303.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgVApQgMgFABgIQAAgIAJAAIAKACQAHADADgBQAOAAABgGQgBgEgKgFIgTgJQgLgHAAgLQAAgPAQgGQALgDARAAQAIAAAEACQAFADAAAHQAAAOgIAAQgHAAgCgGIgGgBQgRAAAAAFQAAADAKAFIAUAKQALAIAAAKQAAANgMAHQgKAGgNgBQgKAAgJgCg");
	this.shape_108.setTransform(88.7,303.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AAbAsQgFgKgCgMIgTACQgKABgHACIgNAZQgDAGgGAAQgFAAgDgDQgDgDAAgEQAAgEALgXIgBgFQAAgEAIgCIAZgmQARgdAEgBQAJAAADALIAFAZIALAyIAFAKQACAHAAADQABAFgEADQgDACgFAAQgGAAgGgOgAgFAGIAJgBIALgBIgFgYIgPAag");
	this.shape_109.setTransform(72.1,301.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:115.8,y:301.8}},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29,p:{x:182.4,y:304.1}},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23,p:{x:247.8,y:301.8}},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13,p:{x:330.8,y:302.2}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41}]},203).to({state:[{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_36,p:{x:245.8,y:301.1}},{t:this.shape_93},{t:this.shape_23,p:{x:259.6,y:301.1}},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_13,p:{x:331.3,y:301.5}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_29,p:{x:168.6,y:327.7}},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73}]},196).wait(200));

	// animation
	this.instance_3 = new lib.anim_scene3();
	this.instance_3.setTransform(195.2,145.8,1,1,0,0,0,128.7,49.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(599));

	// background
	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(4,1,1).p("Af32pMg/tgAEMAAAAtbMA/tAAAg");
	this.shape_110.setTransform(206.9,145.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#FFFFCC").ss(1,1,1).p("ArPhxQC1iBDSAJQDDAJClBdQCbBXB9B+QCJCMDJALQAjACAjAA");
	this.shape_111.setTransform(75,89);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#FEFE36").ss(1,1,1).p("Af3oBQiAAAiJgSQizgXi5g5Qixg2inhNQithRi/gtQi9gtjCgVQi9gVi6AcQitAainAzQi5A6ieBZQB2BQB+BCQCrBaC9AvQDAAyDCg1AApofQCkhFCwgSQC0gTC0AEQDDADDDAfQDVAhA+DBQA5CyjMAsQjNAthFBoQCECnDNgYQCzgVCuArQCuArC+gdAh/NDQCshZDFgQQC/gPC8AgQCwAdCtArQDBAuC8A+QC5A9DDABQAnAAAfgOArjq/QgtgegqggQifh2izhKQi3hMjIgBQi4gBkzChA9giFQCehzC8BEQClA8CTBeQCiBlCmBkQCoBmDFAEQAmABAggRAkfFtQiECHjRghQjFggjBAnQisAiicBPQjsB4ECA6QCpAlCugbQDZgiBSCBQBpClDwgEQAygBAyAF");
	this.shape_112.setTransform(207,150);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFCC").s().p("A/2S/MAAAghGIAAiXQEzihC3ABQDJABC3BMQC0BKCdB2QAsAgAsAeQCdhZC6g6QCmgzCtgaQC6gcC+AVQDCAVC9AtQC+AtCuBRQCmBNCyA2QC5A5CzAXQCJASCAAAIAAKoIgEAAQhLAMhJAAIAAAAIAAAAQhoAAhjgXIgDgBIgGgCIgEgBIgEAAIgDgBIgDgBIgCAAQhtgahvAAIAAAAIgBAAQgzAAg1AGIAAAAIgKABIgDAAIgDABQgXACgXAAIAAAAIgBAAQioAAhxiPIgBAAIgEgFQBFhoDNgtQCfgiAAh1QAAgggMgnQg/jBjVghQjBgfjEgDIgIAAIg3gBIAAAAIAAAAQiKAAiJAOIgGAAIgQACQiwASikBFQCkhFCwgSIAQgCIAGAAQCJgOCKAAIAAAAIAAAAIA3ABIAIAAQDEADDBAfQDVAhA/DBQAMAnAAAgQAAB1ifAiQjNAthFBoIAEAFIABAAQBxCPCoAAIABAAIAAAAQAXAAAXgCIADgBIADAAIAKgBIAAAAQA1gGAzAAIABAAIAAAAQBvAABtAaIACAAIADABIADABIAEAAIAEABIAGACIADABQBjAXBoAAIAAAAIAAAAQBJAABLgMIAEAAIAATMgAjtNXIgIgBIAAAAQgmgDglAAIgBAAIAAAAIgIAAIgIAAIgEAAIgJAAIAAAAIAAAAQjhAAhmiZIAAAAIgFgIQhAhmiWAAIAAAAIAAAAQgoAAgtAHIgGABIgEABIgCAAQhCAKhCAAIAAAAIgBAAQhiAAhigWIgCAAQiHgeAAgwQAAgrBxg5QCchPCsgiIACgBIAHgBIABAAQBlgTBmAAIAAAAIABAAQBRAABTAMIAIABIAEABIACAAIABAAQAnAGAlAAIAAAAIABAAQCXAABohmIAFgGIgFAGQhoBmiXAAIgBAAIAAAAQglAAgngGIgBAAIgCAAIgEgBIgIgBQhTgMhRAAIgBAAIAAAAQhmAAhlATIgBAAIgHABIgCABQisAiicBPQhxA5AAArQAAAwCHAeIACAAQBiAWBiAAIABAAIAAAAQBCAABCgKIACAAIAEgBIAGgBQAtgHAoAAIAAAAIAAAAQCWAABABmIAFAIIAAAAQBmCZDhAAIAAAAIAAAAIAJAAIAEAAIAIAAIAIAAIAAAAIABAAQAlAAAmADIAAAAIAIABgAPKJ/QDBAuC8A+QC4A9DEABQAnAAAfgOQgfAOgnAAQjEgBi4g9Qi8g+jBguIgLgDQiogpirgcQh/gWiAAAIgBAAIAAAAQg6AAg7AFIAAAAIgGAAQjEAQitBZQCthZDEgQIAGAAIAAAAQA7gFA6AAIAAAAIABAAQCAAAB/AWQCrAcCoApIALADgAoVBlQAiAAAdgPIACgBIgCABQgdAPgiAAIAAAAIAAAAIgCAAIAAAAIgCAAQjFgEiphkQilhkiihnQiTheilg8IgDgBIAAAAQhFgYhAAAIAAAAIgBAAQhqAAhfBCIgGAFIgCABIACgBIAGgFQBfhCBqAAIABAAIAAAAQBAAABFAYIAAAAIADABQClA8CTBeQCiBnClBkQCpBkDFAEIACAAIAAAAIACAAIAAAAIAAAAgA5vv/QDDAJCmBdQCcBXB9CAQCJCMDIALQAjACAkAAQgkAAgjgCQjIgLiJiMQh9iAichXQimhdjDgJIgEAAIgXAAIAAAAIgBAAQjDAAioB4QCoh4DDAAIABAAIAAAAIAXAAIAEAAgAAzpAQBeAABfgYIADgBIAIgCIgIACIgDABQhfAYheAAIgBAAIAAAAQhYAAhagWIgBAAIgHgCQi8gvishaQh9hCh2hQQB2BQB9BCQCsBaC8AvIAHACIABAAQBaAWBYAAIAAAAIABAAg");
	this.shape_113.setTransform(207,168);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#AACBF2").s().p("AbuHaQizgXi5g5Qixg1inhOQithRi/gtQi9gtjCgVQi9gVi6AcQitAbinAzQi5A5ieBZQgsgegrggQieh2i0hKQi3hKjIgBQi4gBkzCgIAApvMA/tAAEIAAPTQiAAAiJgSg");
	this.shape_114.setTransform(206.9,49.3);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFCC").s().p("A/2WtMAAAgtaMA/tAAEMAAAAtWg");
	this.shape_115.setTransform(206.9,145.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110}]}).wait(599));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2,413,340.9);


// stage content:



(lib.comP_scene3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{S3:0,S3repeat:571});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
		this.btn_menu.addEventListener("click", openMenu.bind(this));
		this.btn_goNext.addEventListener("click", openNext.bind(this));
		this.btn_goBack.addEventListener("click", openPrev.bind(this));
		
		
		function openMenu(){
		
		 window.open ("../menu/menu.html","_self");
		}
		
		
		function openNext(){
		
		 window.open ("comP_finish.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("comP_scene2.html","_self");
		}
	}
	this.frame_570 = function() {
		/* _root.gonow = true;
		*/
	}
	this.frame_584 = function() {
		this.gotoAndPLay("S3repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(570).call(this.frame_570).wait(14).call(this.frame_584).wait(1));

	// content
	this.instance = new lib.content_scene4();
	this.instance.setTransform(269.4,192,1.025,1.025,0,0,0,206.4,145.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(585));

	// buttons
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_goNext},{t:this.btn_goBack},{t:this.instance_1},{t:this.btn_menu}]}).wait(585));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(284.2,201.8,537.1,401.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;