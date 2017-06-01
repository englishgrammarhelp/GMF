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
		{src:"sounds/wrong_answer.mp3", id:"wrong_answer"},
		{src:"sounds/High_Screaming_Gtr.mp3", id:"High_Screaming_Gtr"},
		{src:"sounds/right_answer.mp3", id:"right_answer"},
		{src:"sounds/rhodes_f9_chord.mp3", id:"rhodes_f9_chord"},
		{src:"sounds/rhodes_f_note.mp3", id:"rhodes_f_note"},
		{src:"sounds/thecompletepredicate.mp3", id:"thecompletepredicate"},
		{src:"sounds/thecompletepredicateconsists.mp3", id:"thecompletepredicateconsists"}
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


(lib.staticgraybox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("A/OKUIAA0nMA+dAAAIAAUng");
	this.shape.setTransform(200,66);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,132);


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


(lib.anim_title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010101").s().p("Ag+BoQgPgNAAgsQAAgTACgiQADglAAgSIgBgPIgCgOQAAgUATgBQAGABAFADQAQgEAPgCQAOgCALAAQAiAAAVAIQAMAFAAAMQAAAIgFAFQgFAGgJAAIgFgBQgXgFgUAAIgUABQgMACgNADIgCA2IA0gFIAhgCQAIAAAGAEQAFAGAAAIQAAAOgRADIghACIg4AGIgBAcQAAAaADAEQACACAPAAIAYgBIAZAAIAIgBIAIgBQAIABAGAEQAGAFAAAJQAAAQgQACQgNADgpAAQgtAAgNgMg");
	this.shape.setTransform(313,22.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#010101").s().p("AgMBjQgGgFgBgIIABgGIABgGIgBgTIgBgTQAAgTgCgdIgFgxIgGAAQgfAAgSgFQgPgEAAgOQAAgHAFgFQAGgHAJABIAVACIAXABIAYAAIAXAAIAgABIAeACQAJAAAGAFQAFAFAAAIQAAAIgFAFQgGAGgJAAIghgCIghgBIAEA3QADAiAAAUIABAOIABAOQAAAKgFAIQgFALgKAAQgGAAgGgFg");
	this.shape_1.setTransform(294.3,22.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#010101").s().p("ABFBmQgLAAgLgZQgHgQgGgVIggADQgUABgMACQgFAPgQAfQgHAJgKAAQgHAAgHgFQgFgFAAgIQgBgHAVgoQgCgEAAgEQABgHAMgDQAUggAXgkQAhg0AIAAQAOAAAGASIAIAsIAUBYIAIASQAEAMAAAGQAAAIgFAFQgGAGgHAAIgBgBgAgKAMIARgCIAUgCIgJgsIgcAwg");
	this.shape_2.setTransform(274,23);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#010101").s().p("Ag8BTQgUgWAAgdQAAgsAogwQAigoAiAAIAKAAIAJABQAGgFAJAAQANAAAEAQQACALAAAPQAAAHgEAGQgFAHgKAAQgMAAgGgNQgDgGgDgBQgCgBgIAAQgRAAgWAbQgfAkAAAgQAAAPAKAKQAKALAOAAQAMAAAOgHIAUgOQALgHAGAAQAHAAAGAGQAGAGgBAHQABAIgIAGQglAgglAAQgeAAgWgWg");
	this.shape_3.setTransform(255.4,22.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#010101").s().p("AhABjQgFgGAAgHQAAgIAFgFQAHgGAIAAQAKAAARgCIgBg+QAAgjADgiIgeABQgIAAgGgFQgFgGAAgHQAAgJAFgFQAFgEAHgBQAMgBAdAAQAXAAApAGQARACAAARQAAAIgHAFQgFAFgGAAIgkgEQgCAZAAAoIAAA9IAlAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgJAAIgXAAIgXAAQgHAAgTADQgSACgKAAQgIAAgGgFg");
	this.shape_4.setTransform(238.8,22.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#010101").s().p("AgpBuQgRgEgIgFQgJgBgFgFQgGgFABgIIABgpIABgpIAAgsIgBguQAAgHAHgHQAIgHAHAAQAFgBATAJQAUAKAFABQAmANAcAcQAhAfAAAmQAAAXgLAWQgMAWgUANQgXAOgnABQgJgBgNgCgAgvBFQAGADAHACQAGACAJAAQAcAAANgJQAMgHAHgNQAHgOAAgOQAAghgogYQgLgJgsgSg");
	this.shape_5.setTransform(221.7,22.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#010101").s().p("Ag+BoQgPgNAAgsQAAgTACgiQADglAAgSIgBgPIgCgOQAAgUATgBQAGABAFADQAQgEAPgCQAOgCALAAQAiAAAVAIQAMAFAAAMQAAAIgFAFQgFAGgJAAIgFgBQgXgFgUAAIgUABQgMACgNADIgCA2IA0gFIAhgCQAIAAAGAEQAFAGAAAIQAAAOgRADIghACIg4AGIgBAcQAAAaADAEQACACAPAAIAYgBIAZAAIAIgBIAIgBQAIABAGAEQAGAFAAAJQAAAQgQACQgNADgpAAQgtAAgNgMg");
	this.shape_6.setTransform(202.7,22.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#010101").s().p("AhJBmQgGgGAAgIIAAgeIAAgfIABhsQAAgJAFgHQAHgKANABIAiADQASACAMAHQA6AdABAsQgBASgMAMQgMANgZAKQAlAUASAVQAFAFAAAHQAAAIgGAFQgGAGgHAAQgIAAgGgGQgqgngvgPIABAsQABAIgGAGQgGAFgIAAQgIAAgFgFgAgpADIAGABQAiAAANgHQAHgDAHgGQAFgGAAgDQAAgPgUgPQgQgNgUgCIgQgBg");
	this.shape_7.setTransform(185,22.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#010101").s().p("Ag9BnQgFgFAAgHIAAgmQAAgVADgoQADgqgBgVQABgkATACIAOgCIATgBQAZAAAYASQAaATAAAcQAAAjgcATQgZASgfAAIgMgBIgBA/QAAAHgFAFQgFAGgHAAQgJAAgFgGgAgYhIIAAATIgDAwIAKABQATAAAOgKQAPgLAAgSQAAgLgOgKQgOgIgNAAIgIAAIgGAAg");
	this.shape_8.setTransform(168.3,22.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#010101").s().p("Ag+BoQgPgNAAgsQAAgTACgiQADglAAgSIgBgPIgCgOQAAgUATgBQAGABAFADQAQgEAPgCQAOgCALAAQAiAAAVAIQAMAFAAAMQAAAIgFAFQgFAGgJAAIgFgBQgXgFgUAAIgUABQgMACgNADIgCA2IA0gFIAhgCQAIAAAGAEQAFAGAAAIQAAAOgRADIghACIg4AGIgBAcQAAAaADAEQACACAPAAIAYgBIAZAAIAIgBIAIgBQAIABAGAEQAGAFAAAJQAAAQgQACQgNADgpAAQgtAAgNgMg");
	this.shape_9.setTransform(140.3,22.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#010101").s().p("AgMBjQgGgFAAgIIABgGIAAgGIgBgTIAAgTQAAgTgEgdIgEgxIgHAAQgeAAgSgFQgPgEAAgOQAAgHAFgFQAGgHAJABIAWACIAVABIAZAAIAYAAIAeABIAgACQAIAAAFAFQAGAFAAAIQAAAIgGAFQgFAGgIAAIghgCIgigBIAEA3QADAiAAAUIABAOIAAAOQAAAKgDAIQgHALgJAAQgGAAgGgFg");
	this.shape_10.setTransform(121.5,22.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#010101").s().p("Ag+BoQgPgNAAgsQAAgTACgiQADglAAgSIgBgPIgCgOQAAgUATgBQAGABAFADQAQgEAPgCQAOgCALAAQAiAAAVAIQAMAFAAAMQAAAIgFAFQgFAGgJAAIgFgBQgXgFgUAAIgUABQgMACgNADIgCA2IA0gFIAhgCQAIAAAGAEQAFAGAAAIQAAAOgRADIghACIg4AGIgBAcQAAAaADAEQACACAPAAIAYgBIAZAAIAIgBIAIgBQAIABAGAEQAGAFAAAJQAAAQgQACQgNADgpAAQgtAAgNgMg");
	this.shape_11.setTransform(103.3,22.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#010101").s().p("AhHBSIACgrQAEg6AAhIQgBgIAGgGQAFgFAJAAQAIAAAFAFQAGAGAAAIQAABJgEA7IgDAhQAhAAAwgPIAHgBQAIAAAGAGQAEAFAAAHQABAMgMAGQgQAHgjAFQgcAFgUAAQghAAAAgdg");
	this.shape_12.setTransform(86.9,22.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#010101").s().p("Ag8BnQgGgFAAgHIAAgmQAAgVADgoQACgqABgVQAAgkATACIAOgCIAUgBQAYAAAYASQAaATAAAcQAAAjgcATQgZASgfAAIgMgBIgBA/QAAAHgFAFQgFAGgIAAQgHAAgFgGgAgYhIIAAATIgDAwIAKABQATAAAOgKQAPgLAAgSQAAgLgOgKQgNgIgPAAIgHAAIgGAAg");
	this.shape_13.setTransform(71.4,22.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#010101").s().p("ABKBZIgIgiQgGgYgJgsIgUA4IgIAZQgFAPgFAJQgIANgKAAQgNAAgIgPIgHgaQgKgjgJglIgRBBIgGAfQgFAUgPAAQgJgBgGgGQgFgGABgHQgBgWAKggIAPgzIAIgqQAGgdAIgJQAGgKAMAAQAMAAAGAMQAGANAFAkQAGAkAMAnQAOgnANgwIAIgfQAHgUAQAAQAPAAAHAWQADAKAEAYQAHA5AMApQAMAqAAAEQABAJgHAFQgGAFgIAAQgOAAgHgVg");
	this.shape_14.setTransform(51.7,23);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#010101").s().p("AhIBUQgegZAAgoQAAgsAdgmQAhgrAvAAQAwAAAYAVQAYAWAAAsQAAAtgbAlQgfAsgwAAQgoAAgdgXgAgqgoQgVAcAAAfQAAAXARAOQASAOAZAAQAcAAAVgdQASgbAAghQAAgcgNgMQgMgKggAAQgcAAgVAdg");
	this.shape_15.setTransform(28,22.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#010101").s().p("Ag8BTQgUgWAAgdQAAgsAogwQAigoAiAAIAKAAIAJABQAGgFAJAAQANAAAEAQQACALAAAPQAAAHgEAGQgFAHgKAAQgMAAgGgNQgDgGgDgBQgCgBgIAAQgRAAgWAbQgfAkAAAgQAAAPAKAKQAKALAOAAQAMAAAOgHIAUgOQALgHAGAAQAHAAAGAGQAGAGAAAHQAAAIgIAGQglAgglAAQgeAAgWgWg");
	this.shape_16.setTransform(8.4,22.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#010101").s().p("Ag+BoQgPgNAAgsQAAgTACgiQADglAAgSIgBgPIgCgOQAAgUATgBQAGABAFADQAQgEAPgCQAOgCALAAQAiAAAVAIQAMAFAAAMQAAAIgFAFQgFAGgJAAIgFgBQgXgFgUAAIgUABQgMACgNADIgCA2IA0gFIAhgCQAIAAAGAEQAFAGAAAIQAAAOgRADIghACIg4AGIgBAcQAAAaADAEQACACAPAAIAYgBIAZAAIAIgBIAIgBQAIABAGAEQAGAFAAAJQAAAQgQACQgNADgpAAQgtAAgNgMg");
	this.shape_17.setTransform(-21,22.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#010101").s().p("AA5BoQgFgFAAgIIgBgeIgBgeIAAgOQgVABgeAGIg0AKIgCAdIgCAdQAAAHgFAFQgFAFgIAAQgIAAgGgFQgFgFAAgIQAAgNADgbIACgoIABgyIAAgzQAAgIAGgFQAFgFAIAAQAIAAAFAFQAGAGAAAHIgBAgIgBAfIgBANIAAAOIA0gKQAdgGAWgBIACgxQAAgLAGgOQAIgRAKAAQAHAAAFAFQAHAFAAAIIgBAEQgDAKAAAIIAAAMIgBALIgCAnIgBAlIABAeIACAeQAAAHgFAGQgGAFgIAAQgIAAgGgFg");
	this.shape_18.setTransform(-40.6,22.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#010101").s().p("AgMBjQgGgFgBgIIABgGIABgGIgBgTIgBgTQAAgTgCgdIgFgxIgGAAQgfAAgSgFQgPgEAAgOQAAgHAFgFQAGgHAJABIAVACIAXABIAYAAIAXAAIAgABIAeACQAJAAAGAFQAFAFAAAIQAAAIgFAFQgGAGgJAAIghgCIghgBIAEA3QADAiAAAUIABAOIABAOQAAAKgFAIQgFALgKAAQgGAAgGgFg");
	this.shape_19.setTransform(-61.2,22.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.2,0,396.7,43);


(lib.example0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// predicate
	this.instance = new lib.text_predicate("synched",0);
	this.instance.setTransform(219.6,-32,1,1,0,0,0,43,14.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(43).to({_off:false},0).to({alpha:1},6).wait(10).to({mode:"single"},0).to({alpha:0.301},3).to({alpha:1},3).to({alpha:0.301},3).to({alpha:1},3).to({alpha:0.301},3).to({alpha:1},3).to({alpha:0.301},3).to({alpha:1},3).wait(42));

	// subject
	this.instance_1 = new lib.text_subject("synched",0);
	this.instance_1.setTransform(35.9,16.4,1,1,0,0,0,35.9,14.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({alpha:1},3).wait(117));

	// bracket
	this.instance_2 = new lib.bracketdisplay("synched",0,false);
	this.instance_2.setTransform(222.1,-1.2,1,1,0,0,0,118,11.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(40).to({_off:false},0).wait(85));

	// complement
	this.instance_3 = new lib.text_complement("single",0);
	this.instance_3.setTransform(235.7,5.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(32).to({_off:false},0).to({alpha:0.75},5).wait(88));

	// verb
	this.instance_4 = new lib.text_verb("single",0);
	this.instance_4.setTransform(122.8,4.7);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(12).to({_off:false},0).to({alpha:1},5).wait(108));

	// v_line2
	this.instance_5 = new lib.line();
	this.instance_5.setTransform(207.8,38.2,1,0.064);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(23).to({_off:false},0).to({scaleY:0.91,y:12.2},5).wait(97));

	// v_line
	this.instance_6 = new lib.line();
	this.instance_6.setTransform(87.4,-1.2,1,0.031);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleY:2.46,y:0.8},5).wait(120));

	// h_line
	this.instance_7 = new lib.line();
	this.instance_7.setTransform(0,41.4,1,0.022,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleY:13.68,y:40.4},5).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1.2,90.4,42.6);


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


(lib.intro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_3 = function() {
		playSound("thecompletepredicate");
	}
	this.frame_27 = function() {
		playSound("thecompletepredicateconsists");
	}
	this.frame_33 = function() {
		playSound("rhodes_f_note");
	}
	this.frame_40 = function() {
		playSound("rhodes_f_note");
	}
	this.frame_60 = function() {
		playSound("rhodes_f_note");
	}
	this.frame_71 = function() {
		playSound("rhodes_f9_chord");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(3).call(this.frame_3).wait(24).call(this.frame_27).wait(6).call(this.frame_33).wait(7).call(this.frame_40).wait(20).call(this.frame_60).wait(11).call(this.frame_71).wait(84));

	// title
	this.instance = new lib.anim_title();
	this.instance.setTransform(205.4,40.9,1,1,0,0,0,122.1,22.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(155));

	// definition
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHAHQgEgEAAgDQAAgCAEgEQADgDAEAAQAFAAAEADQADADAAADQAAADgDAEQgEADgFAAQgEAAgDgDg");
	this.shape.setTransform(386.9,287.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgUAoQgNgEAAgIQAAgIAKAAIALACQAGADAEAAQANAAAAgHQAAgEgLgFIgSgJQgLgHAAgLQAAgQARgFQAJgEATABQAHAAAEABQAFADAAAIQAAAOgHAAQgJAAgBgHIgGAAQgRAAAAAFQAAADAJAFIAVAKQAMAIAAAKQAAANgNAHQgKAGgMAAQgLAAgIgEg");
	this.shape_1.setTransform(379.5,284.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgeAoQgCgCAAgFIAAgxIAAgHIAAgHQABgFACgDQADgDAEAAQAJAAABAJQANgKARAAQAPAAAAAVIAAAFQgBAMgKAAQgKAAAAgKIAAgIQgQADgIAPIABAlQAAAFgDADQgDACgFAAQgFAAgDgDg");
	this.shape_2.setTransform(372,284.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgZAhQgNgKAAgRQAAgSAKgOQALgPASAAQAOAAAJAEQALAGAAAMQAAAJgJAHIgSAHIgYALQAEAEAFACQAFACAGAAQAKAAAHgEQAGgEAFAAQAHAAABAIQAAAJgOAGQgLAEgLAAQgSAAgLgJgAgJgSQgGAGgDAJIASgIQAIgEAHgFQgFgCgJAAQgFAAgFAEg");
	this.shape_3.setTransform(363.4,284.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgJA4QgCgDAAgEIgBgPIAAgOIABgRIABgQQAAgEACgDQADgDAFAAQADAAADADQADADAAAEIgBAQIgBARIAAAOIABAPQAAAEgDADQgDADgDAAQgFAAgDgDgAgGgnQgDgDAAgFQAAgFADgDQAEgDADAAQAFAAADADQAEADAAAFQAAAFgEADQgDAEgFAAQgDAAgEgEg");
	this.shape_4.setTransform(357,282.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgNBBQgEgCAAgFIAAgCQACgLAAgKIAAglIgEABIgFAAQgFAAgDgCQgDgDgBgFQAAgHAIgCIAOgCIABgJQACgRAIgJQAGgKAUAAQANAAAAAKQAAAKgMAAQgKAAgFAHQgDAFAAAKIgBADIAPgBQAOAAAAAKQAAAKgPgBIgPABIAAATIABAVQAAAPgCAIQgCAIgHAAQgEAAgDgDg");
	this.shape_5.setTransform(350.3,282.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgJA4QgDgDAAgEIAAgPIAAgOIAAgRIABgQQAAgEAEgDQADgDAEAAQADAAADADQADADAAAEIgBAQIgBARIAAAOIABAPQAAAEgDADQgDADgDAAQgFAAgDgDgAgGgnQgEgDAAgFQAAgFAEgDQAEgDADAAQAFAAAEADQADADAAAFQAAAFgDADQgEAEgFAAQgDAAgEgEg");
	this.shape_6.setTransform(344.3,282.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAVA6QgGADgFABIgKACQgRAAgMgMQgMgLAAgSQAAgUAMgMQAMgNARABIAKAAQAGACACACQACgaABgLQABgIAJgBQAFAAACAEQAEADAAAEIgCAiIgCAgQAAAcACAJIAAACQAAAFgDADQgEADgEAAQgFgBgDgFgAgPADQgGAHABANQAAAIAFAHQAHAFAIAAQAEAAAEgBIAHgFIACgDIAAgcQgDgFgEgBQgEgBgGgBQgJABgGAEg");
	this.shape_7.setTransform(337.1,282.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgYAgQgMgKAAgTQgBgPAKgNQAMgQATAAQAQAAAJAMQAIALAAARQAAAQgJANQgLAOgRAAQgOAAgKgKgAgKgMQgFAIAAAHQAAAKAGAFQAEAEAFAAQAFAAAFgFQAGgFAAgJQABgYgOAAQgIAAgFAJg");
	this.shape_8.setTransform(328.2,284.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgFAtQgDgDAAgFIgCgaIgCgYIgBgIQgJAFgJAMIgCACIAAAWIAAAHIAAAFQAAAEgEADQgDACgEAAQgHAAgCgFQgCgEAAgJIAAgbIAAgLIgBgMQAAgHADgGQADgGAFAAQAFAAADADQAEADAAAEIgBAHQAMgOAKAAQAMAAAEAJQAFgEAGgCQAFgCAHAAQAPAAAGAPIADAVIAGApQAAAEgDADQgEACgEABQgJAAgCgJIgDgXIgCgUQgCgPgEAAIgIAEIgJAGIACAXQACASAAAIQAAAFgDADQgDACgFAAQgCAAgDgCg");
	this.shape_9.setTransform(318,284.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgVAoQgMgEABgIQAAgIAJAAIALACQAGADADAAQAOAAABgHQgBgEgKgFIgTgJQgLgHAAgLQAAgQARgFQAKgEARABQAIAAAEABQAFADAAAIQAAAOgIAAQgHAAgCgHIgGAAQgRAAAAAFQAAADAKAFIAUAKQALAIAAAKQAAANgMAHQgKAGgNAAQgKAAgJgEg");
	this.shape_10.setTransform(300.7,284.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgFA2QgEgDAAgEIAAgJIABgIIgCgmIgOgCQgKgBAAgJQAAgEACgDQADgEAFAAIANABIAAgHIgBgIQABgFADgCQADgDAEAAQAKAAAAATIAAAGIAIgBIAMABQAHADAAAHQAAAEgEADQgCAEgGAAIgDAAIgEAAIgHAAIABAnIAAAEIAAAEQAAATgLgBQgDABgCgDg");
	this.shape_11.setTransform(293.1,283);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgIA4QgEgDAAgEIAAgPIAAgOIAAgRIABgQQAAgEAEgDQADgDAEAAQADAAADADQADADAAAEIgBAQIAAARIAAAOIAAAPQAAAEgDADQgDADgDAAQgEAAgDgDgAgGgnQgEgDAAgFQAAgFAEgDQAEgDADAAQAFAAAEADQADADAAAFQAAAFgDADQgEAEgFAAQgDAAgEgEg");
	this.shape_12.setTransform(287.3,282.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgGA9QgDgDAAgFIAAhqQAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAABmQAAAPgKAAQgDAAgDgDg");
	this.shape_13.setTransform(275.6,282.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgGA9QgDgDAAgFIAAhqQAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAABmQAAAPgKAAQgDAAgDgDg");
	this.shape_14.setTransform(271.2,282.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AASAkIgMAEQgGADgCAAQgTAAgJgLQgJgKAAgUQAAgRAOgNQANgOASAAQAHAAAKAFQAMAEAAAIQAAAAAAABQAAAAgBABQAAAAAAABQAAABgBAAIgBAIIgBALQAAANACAGIAEAIIADAIQAAAEgDACQgDAEgEAAQgEgBgIgGgAgKgPQgIAJAAAIQAAALAEAFQAEAFAHABQADAAAEgCQAFgBAEgDQgDgSAAgIIABgGIABgIIgDgBIgCAAQgJAAgIAIg");
	this.shape_15.setTransform(264.7,284.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAVA6QgGADgFABIgKACQgRAAgMgMQgMgLAAgSQAAgUAMgMQAMgNARABIAKAAQAGACACACQACgaABgLQABgIAJgBQAFAAACAEQAEADAAAEIgCAiIgCAgQAAAcACAJIAAACQAAAFgDADQgEADgEAAQgFgBgDgFgAgPADQgGAHABANQAAAIAFAHQAHAFAIAAQAEAAAEgBIAHgFIACgDIAAgcQgCgFgFgBQgEgBgGgBQgJABgGAEg");
	this.shape_16.setTransform(248.4,282.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAPAjIgCgQIgBgPIABgFIAAgIIAAgCIAAgEQAAgHgEABQgGgBgFAJQgGAJgDALIgBAHIAAAHIgBAGIAAAHQAAAFgEADQgDADgFAAQgEAAgDgDQgDgDAAgFIgBgGIAAgHIABgVIABgTIAAgIIgBgHQAAgEAEgDQADgDAFAAQAJAAACANIAAABQALgMAKAAQAPAAAGAMQADAJAAAQIAAAFIAAAEIACAPIACAQQAAAEgDADQgEADgEAAQgKAAgBgKg");
	this.shape_17.setTransform(239.7,284.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AASAkIgMAEQgGADgCAAQgTAAgJgLQgJgKAAgUQAAgRAOgNQANgOASAAQAHAAAKAFQAMAEAAAIQAAAAAAABQAAAAgBABQAAAAAAABQAAABgBAAIgBAIIgBALQAAANACAGIAEAIIADAIQAAAEgDACQgDAEgEAAQgEgBgIgGgAgKgPQgIAJAAAIQAAALAEAFQAEAFAHABQADAAAEgCQAFgBAEgDQgDgSAAgIIABgGIABgIIgDgBIgCAAQgJAAgIAIg");
	this.shape_18.setTransform(231,284.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#009900").s().p("AgGA4QgEgDAAgEIAAgEIABgDIgBgLIAAgLIgCgaIgCgdIgEAAQgSABgKgDQgIgCAAgIQAAgEACgDQAEgEAFAAIAMACIANABIAOgBIAMAAIASABIASABQAFAAADACQADAEAAAEQAAAEgDAEQgDADgFAAIgTgBIgTgBIACAgIACAeIAAAIIABAIQAAAFgDAFQgDAGgFAAQgDAAgDgDg");
	this.shape_19.setTransform(214.1,282.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#009900").s().p("Ag2A7QgDgDAAgEIABgJIAAgKIABgOIAAgOIAAgMIAAgPIgBgOIgBgOQAAgFAEgEQAEgDAFAAQAGAAAHAKQAhAzAjAdIAAgLIgBgyIgBgJIgBgJQAAgKAMAAQAMAAAAAnIAAANIAAAvIgCAMQgBAKgKAAQgFAAgHgGQgegbgkgvIgBAXIABASIAAATQAAAXgLAAQgGAAgEgEg");
	this.shape_20.setTransform(201.9,282.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#009900").s().p("AgjA8QgJgIAAgaIACgdIACggIgBgIIgBgIQAAgMALABQADgBADACIARgCIAOgCQATAAAMAEQAIADgBAHQAAAEgDAEQgDAEgFAAIgCgBQgOgDgLgBIgLABIgOADIgBAfIAcgDIATgCQAFABADADQAEACAAAGQAAAGgKACIgTABIgfADIgBAQQAAAQACACQABABAJAAIANAAIAOgBIAFAAIAEgBQAFABADACQAEADAAAFQgBAJgIACQgJABgWAAQgZAAgIgGg");
	this.shape_21.setTransform(190.7,282.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#009900").s().p("AAqAzIgEgTQgFgOgEgZIgLAfIgFAPIgGAOQgEAHgGAAQgHAAgEgJIgEgOQgGgUgFgUIgKAkIgDARQgDALgIAAQgGAAgDgDQgDgDAAgFQAAgMAFgTIAJgcIAFgYQADgQAEgGQAFgFAGAAQAHAAADAHQADAHAEAVQAEAUAGAVQAHgVAIgbIAEgSQAFgMAIAAQAIAAAFANIADAUQAFAfAHAYIAHAaQAAAFgEADQgDADgEAAQgJAAgEgMg");
	this.shape_22.setTransform(178.5,282.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#009900").s().p("AgjA8QgIgIgBgaIACgdIABggIgBgIIAAgIQAAgMALABQADgBADACIARgCIAOgCQAUAAALAEQAHADABAHQAAAEgDAEQgEAEgEAAIgEgBQgNgDgLgBIgLABIgOADIgBAfIAcgDIATgCQAFABADADQAEACAAAGQAAAGgKACIgTABIgfADIgBAQQAAAQACACQABABAJAAIAMAAIAPgBIAEAAIAFgBQAFABADACQAEADgBAFQABAJgKACQgHABgXAAQgaAAgHgGg");
	this.shape_23.setTransform(166.5,282.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#009900").s().p("AgoAuIABgZQACgfAAgqQAAgEAEgEQADgCAEAAQAFAAADACQADAEAAAEQAAAqgCAhIgCATQATAAAbgJIADAAQAFAAAEADQACADAAAFQAAAGgHADQgJAEgTAEQgQACgLAAQgTAAAAgRg");
	this.shape_24.setTransform(157.1,282.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#009900").s().p("AgiA7QgDgDAAgEIAAgWIACgiIABgkQAAgUAMAAIAHgBIAMAAQANAAANAKQAPALAAAQQAAAUgPAKQgPAKgRAAIgHAAIgBAkQABAEgDADQgDADgFAAQgEAAgDgDgAgNgeIgCAbIAGABQAKAAAIgGQAIgGAAgKQABgHgJgFQgHgFgIAAIgEAAIgDAAIAAALg");
	this.shape_25.setTransform(148.3,282.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#009900").s().p("AAqAzIgFgTQgDgOgEgZIgNAfIgEAPIgGAOQgEAHgFAAQgIAAgEgJIgEgOQgGgUgFgUIgKAkIgDARQgDALgJAAQgFAAgDgDQgDgDAAgFQAAgMAFgTIAJgcIAFgYQADgQAFgGQAEgFAGAAQAHAAADAHQAEAHADAVQAEAUAGAVQAHgVAIgbIAEgSQAFgMAIAAQAIAAAFANIAEAUQAEAfAHAYIAHAaQAAAFgEADQgDADgFAAQgIAAgEgMg");
	this.shape_26.setTransform(137,282.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#009900").s().p("AgoAwQgSgOAAgXQAAgZARgVQATgZAaAAQAbAAAOAMQAOANAAAZQAAAZgQAVQgRAZgbAAQgXAAgQgNgAgYgWQgLAQAAARQAAANAKAIQAJAIAPAAQAPAAAMgRQAKgPAAgSQAAgQgHgHQgHgGgSAAQgPAAgNARg");
	this.shape_27.setTransform(123.4,282.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#009900").s().p("AghAvQgMgMAAgRQAAgYAXgbQAUgYARAAIAHAAIAFABQADgDAFAAQAIAAACAJIABAQQAAADgCADQgDAFgFAAQgIAAgDgIQgCgDgCgBIgGAAQgJAAgLAPQgSAUAAASQAAAJAGAFQAFAHAIgBQAGAAAIgDIALgIQAHgEADAAQAEAAAEAEQADADAAADQAAAGgEADQgWASgUAAQgSAAgLgNg");
	this.shape_28.setTransform(112.2,282.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAVA6QgGADgFABIgKACQgRAAgMgMQgMgLAAgSQAAgUAMgMQAMgNARABIAKAAQAGACACACQACgaABgLQABgIAJgBQAFAAACAEQAEADAAAEIgCAiIgCAgQAAAcACAJIAAACQAAAFgDADQgEADgEAAQgFgBgDgFgAgPADQgGAHABANQAAAIAFAHQAHAFAIAAQAEAAAEgBIAHgFIACgDIAAgcQgCgFgFgBQgEgBgGgBQgJABgGAEg");
	this.shape_29.setTransform(95.4,282.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAPAjIgCgQIgBgPIABgFIAAgIIAAgCIAAgEQAAgHgEABQgGgBgEAJQgHAJgDALIgBAHIAAAHIgBAGIAAAHQAAAFgEADQgDADgFAAQgEAAgDgDQgDgDAAgFIgBgGIAAgHIABgVIABgTIAAgIIgBgHQAAgEAEgDQADgDAFAAQAJAAACANIAAABQALgMAKAAQAPAAAGAMQADAJAAAQIAAAFIAAAEIACAPIACAQQAAAEgDADQgEADgEAAQgKAAgBgKg");
	this.shape_30.setTransform(86.7,284.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AASAkIgMAEQgGADgCAAQgTAAgJgLQgJgKAAgUQAAgRAOgNQANgOASAAQAHAAAKAFQAMAEAAAIQAAAAAAABQAAAAgBABQAAAAAAABQAAABgBAAIgBAIIgBALQAAANACAGIAEAIIADAIQAAAEgDACQgDAEgEAAQgEgBgIgGgAgKgPQgIAJAAAIQAAALAEAFQAEAFAHABQADAAAEgCQAFgBAEgDQgDgSAAgIIABgGIABgIIgDgBIgCAAQgJAAgIAIg");
	this.shape_31.setTransform(78,284.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF0000").s().p("AgmA7QgDgEAAgFIAAhRIAAgKIAAgKQABgIAMgBQAHgCAOAAQAMAAAOAKQAQALAAAQQAAAJgEAGQgDAFgGAFQAIADAGAHQAGAJAAAIQABAKgMAJQgHAHgJADQgQAHgcAAQgFAAgEgEgAgUApQANgBAPgEQANgEAAgEQgBgHgIgEQgHgEgFgBIgUAAgAgUgYIAAAQIALABQAWgCAAgQQAAgFgHgFQgGgGgHAAIgNAAg");
	this.shape_32.setTransform(61.8,282.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF0000").s().p("AgpA6QgDgDgBgFIABgRIAAgSIAAg9QAAgFADgEQAEgFAHAAIAUACQAKABAHAEQAgARABAZQgBAKgGAGQgIAIgNAFQAUAMALAMQACADAAADQAAAFgDADQgDADgFAAQgDAAgFgDQgXgWgbgJIACAZQgBAFgDADQgCADgGAAQgEAAgDgDgAgWACIADAAQATAAAHgDQAEgCAEgDQACgEAAgBQABgJgLgIQgJgIgLgBIgJgBg");
	this.shape_33.setTransform(51.5,282.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF0000").s().p("AgjA8QgJgIABgaIABgdIACggIgBgIIgBgIQAAgMALABQADgBADACIASgCIANgCQATAAAMAEQAIADAAAHQgBAEgDAEQgCAEgGAAIgDgBQgMgDgMgBIgLABIgOADIgBAfIAdgDIATgCQAEABAEADQADACAAAGQAAAGgKACIgTABIgfADIgBAQQAAAQACACQABABAJAAIANAAIAOgBIAEAAIAFgBQAFABADACQADADABAFQgBAJgIACQgJABgWAAQgZAAgIgGg");
	this.shape_34.setTransform(41.5,282.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF0000").s().p("AgQA3QgJgXgMgpIgGgVQgFgOAAgGQAAgFAEgDQADgDAEAAQAIAAADAIIADAOIAHAZIAMAlIARgtIAGgSQAFgMAFgGQAEgEAFAAQAEAAAEAEQADADAAAEQAAADgCADQgEAGgEAJIgGAPIgVA1IgIASQgEAHgEAAQgIAAgEgIg");
	this.shape_35.setTransform(30.9,282.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgZAhQgOgKAAgSQAAgRALgOQALgPASAAQAOAAAJAEQAMAGgBAMQABAJgKAHIgSAHIgYALQAEAEAFACQAFACAGAAQAKAAAHgEQAHgEADAAQAJAAAAAIQgBAJgNAGQgKAEgMAAQgSAAgLgJgAgJgSQgFAGgEAJIASgHQAJgFAGgEQgGgDgIAAQgFAAgFAEg");
	this.shape_36.setTransform(375.3,260);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AASA4IgEgSIgBgSIAAgFIAAgGIAAgHQgBgCgDAAQgJAAgFAGQgDADgGAMQAAAcgDAGQgDAGgHABQgEAAgEgDQgDgDAAgFIABgEIABgVIAAgzIAAgCIABgMIgBgHIgBgHQAAgFADgDQADgDAFABQAIgBACAJQACAEAAAKIgBAQIAAAPQAGgFAGgDQAFgDAHAAQANAAAGAHQAFAGABAJIAAAUIACAPIADAQIAAACQAAAEgDAEQgEACgEAAQgIABgCgJg");
	this.shape_37.setTransform(366.4,257.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgFA2QgEgDAAgEIAAgJIABgIIgCgmIgOgCQgKgBAAgJQAAgEADgDQACgEAFAAIANABIAAgHIgBgIQABgFADgCQADgDAEAAQAKAAAAATIAAAGIAIgBIAMABQAHADAAAHQAAAEgEADQgCAEgGAAIgDAAIgEAAIgHAAIABAnIAAAEIAAAEQAAATgLgBQgDABgCgDg");
	this.shape_38.setTransform(357.9,258.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgNBBQgDgCAAgFIAAgCQACgLAAgKIAAglIgGABIgEAAQgFAAgDgCQgEgDAAgFQABgHAHgCIAOgCIABgJQADgRAGgJQAIgKASAAQAPAAAAAKQAAAKgOAAQgJAAgEAHQgEAFgBAKIAAADIAPgBQAOAAAAAKQAAAKgPgBIgPABIAAATIAAAVQAAAPgBAIQgCAIgGAAQgFAAgDgDg");
	this.shape_39.setTransform(343,258.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgYAgQgMgKAAgTQgBgPAKgNQAMgQATAAQAQAAAJAMQAIALAAARQAAAQgJANQgLAOgRAAQgOAAgKgKgAgKgMQgFAIAAAHQAAAKAGAFQAEAEAFAAQAFAAAFgFQAGgFAAgJQABgYgOAAQgIAAgFAJg");
	this.shape_40.setTransform(334.7,260);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgVAoQgMgEABgIQAAgIAJAAIAKACQAHADADAAQAOAAABgHQAAgEgLgFIgTgJQgLgHAAgLQAAgQAQgFQALgDARAAQAIAAAEABQAFADAAAIQAAAOgIAAQgHAAgCgHIgGAAQgRAAAAAFQAAADAKAFIAUAKQALAIAAAKQAAANgMAHQgKAGgNAAQgKAAgJgEg");
	this.shape_41.setTransform(319.7,259.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgGA2QgDgDAAgEIAAgJIABgIIgCgmIgOgCQgLgBABgJQAAgEACgDQADgEAFAAIANABIAAgHIgBgIQAAgFAEgCQADgDAFAAQAJAAAAATIAAAGIAIgBIAMABQAGADABAHQAAAEgEADQgDAEgEAAIgEAAIgEAAIgHAAIABAnIAAAEIAAAEQAAATgLgBQgDABgDgDg");
	this.shape_42.setTransform(312.1,258.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgUAoQgNgEAAgIQAAgIAKAAIALACQAGADAEAAQANAAAAgHQAAgEgLgFIgSgJQgLgHAAgLQAAgQARgFQAJgDATAAQAHAAAEABQAFADAAAIQAAAOgHAAQgJAAgBgHIgGAAQgRAAAAAFQAAADAJAFIAVAKQAMAIAAAKQAAANgNAHQgKAGgMAAQgLAAgIgEg");
	this.shape_43.setTransform(304.3,259.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgJA4QgCgDAAgEIgBgPIAAgOIABgRIABgQQAAgEACgDQADgDAFAAQADAAADADQADADAAAEIgBAQIgBARIAAAOIABAPQAAAEgDADQgDADgDAAQgFAAgDgDgAgGgnQgDgDAAgFQAAgFADgDQAEgDADAAQAFAAADADQAEADAAAFQAAAFgEADQgDAEgFAAQgDAAgEgEg");
	this.shape_44.setTransform(298.5,258.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgVAoQgLgEAAgIQgBgIAKAAIALACQAGADAEAAQANAAABgHQgBgEgKgFIgTgJQgLgHAAgLQAAgQARgFQAKgDARAAQAIAAAEABQAFADAAAIQAAAOgIAAQgHAAgCgHIgGAAQgRAAAAAFQAAADAKAFIAUAKQALAIAAAKQAAANgMAHQgKAGgNAAQgKAAgJgEg");
	this.shape_45.setTransform(292,259.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAPAjIgCgQIgBgPIAAgFIAAgIIAAgCIABgEQAAgHgDABQgHgBgFAJQgGAJgEALIAAAHIgBAHIAAAGIAAAHQgBAFgCADQgEADgEAAQgFAAgDgDQgDgDAAgFIAAgGIgBgHIABgVIABgTIAAgIIAAgHQAAgEACgDQAEgDAFAAQAKAAAAANIAAABQAMgMALAAQAOAAAGAMQADAJAAAQIAAAFIAAAEIADAPIABAQQAAAEgDADQgEADgEAAQgJAAgCgKg");
	this.shape_46.setTransform(284.1,259.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgYAgQgMgKAAgTQgBgPAKgNQAMgQATAAQAQAAAJAMQAIALAAARQAAAQgJANQgLAOgRAAQgOAAgKgKgAgKgMQgFAIAAAHQAAAKAGAFQAEAEAFAAQAFAAAFgFQAGgFAAgJQABgYgOAAQgIAAgFAJg");
	this.shape_47.setTransform(275.5,260);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgXAhQgMgKAAgRQAAgNALgQQAMgUAPAAQAIAAALAFQANAFAAAHQAAAEgDADQgDADgEAAQgDAAgFgDQgFgEgJAAQgEAAgHAMQgHALAAAGQAAAIAGAGQAFAEAIAAQAFAAAHgEIAKgEQAEAAADADQADADAAAEQAAAGgNAGQgMAGgHgBQgQABgLgLg");
	this.shape_48.setTransform(267.2,260);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgjA8QgJgIAAgaIACgdIACggIgBgIIgBgIQAAgMALABQADgBADACIARgCIAOgCQATAAAMAEQAIADgBAHQAAAEgDAEQgCAEgGAAIgCgBQgNgDgMgBIgLABIgOADIgBAfIAcgDIAUgCQAEABADADQAEACAAAGQAAAGgKACIgTABIgfADIgBAQQAAAQACACQABABAJAAIANAAIAOgBIAFAAIAEAAQAFAAADACQAEADAAAFQgBAJgIACQgJABgWAAQgaAAgHgGg");
	this.shape_49.setTransform(251.5,258);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgGA4QgEgDAAgEIAAgEIABgDIgBgLIAAgLIgCgaIgCgdIgEAAQgSABgKgDQgIgCAAgIQAAgEACgDQAEgEAFAAIAMACIANABIAOgBIAMAAIASABIASABQAFAAADACQADAEAAAEQAAAEgDAEQgDADgFAAIgTgBIgTgBIACAgIACAeIAAAHIABAJQAAAFgDAFQgDAGgFAAQgDAAgDgDg");
	this.shape_50.setTransform(240.8,258);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAbAsQgFgJgCgNIgTADQgKAAgHACIgNAZQgDAGgGAAQgFAAgDgDQgDgDgBgFQAAgDAMgYIgBgEQAAgEAHgCIAagmQARgeAEAAQAJAAADALIAFAZIAMAxIAEALQACAHAAADQABAEgEADQgEADgEAAQgGAAgGgOgAgFAHIAJgBIALgCIgFgYIgPAbg");
	this.shape_51.setTransform(229.2,258.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgiAvQgLgMAAgRQAAgYAXgbQAUgYARAAIAHAAIAEABQAEgDAFAAQAIAAACAJIABAQQAAADgCADQgDAFgGAAQgHAAgDgIQgBgDgCgBIgHAAQgKAAgKAPQgSAUAAASQAAAJAFAFQAGAHAIgBQAGAAAIgDIAMgIQAGgEADAAQAFAAADAEQADACAAAEQAAAGgEADQgVASgVAAQgSAAgMgNg");
	this.shape_52.setTransform(218.6,258);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgjA4QgEgDAAgEQAAgFAEgDQADgDAFAAIAPgBIgBgkQABgTABgTIgQAAQgGAAgCgDQgEgDAAgEQAAgFAEgDQACgCAEgBIAXAAQANAAAXADQAKABAAAKQAAAFgDACQgEADgEAAIgUgCIgBAkIAAAjIAVAAQAEAAAEADQADADAAAEQAAAFgDADQgDADgFAAIgNAAIgOAAIgOACIgPABQgGAAgCgDg");
	this.shape_53.setTransform(209.1,258.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgXA+QgJgCgFgCQgFgBgDgDQgDgDAAgEIABgYIAAgXIAAgYIAAgaQAAgFAEgEQAEgEAFAAQACAAALAFIAOAGQAVAIAQAPQATATAAAUQAAAOgGAMQgHANgLAHQgNAIgWAAIgNgCgAgaAoIAHACIAJABQAPAAAHgEQAHgFAEgIQAEgHAAgIQAAgSgWgOQgGgFgZgKg");
	this.shape_54.setTransform(199.3,258.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgjA8QgIgIAAgaIABgdIABggIgBgIIAAgIQAAgMALABQADgBADACIASgCIANgCQAUAAALAEQAHADABAHQAAAEgDAEQgEAEgEAAIgEgBQgNgDgLgBIgLABIgOADIgBAfIAdgDIATgCQAEABAEADQADACAAAGQAAAGgKACIgTABIgfADIgBAQQAAAQACACQABABAJAAIAMAAIAPgBIAEAAIAFAAQAFAAADACQADADAAAFQABAJgKACQgHABgXAAQgZAAgIgGg");
	this.shape_55.setTransform(188.5,258);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgpA6QgEgDAAgFIABgRIAAgSIAAg9QAAgFADgEQAEgFAHAAIATACQALABAGAEQAiARAAAZQAAAKgIAGQgGAIgOAFQAUAMALAMQADADAAADQAAAFgEADQgDADgFAAQgEAAgDgDQgYgWgagJIABAZQAAAFgDADQgEADgEAAQgFAAgDgDgAgWACIACAAQAUAAAHgDQAEgCADgDQADgEABgBQAAgJgMgIQgIgIgLgBIgJgBg");
	this.shape_56.setTransform(178.3,258);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgiA7QgDgDAAgEIAAgWIACgiIABgkQABgUAKAAIAIgBIALAAQAOAAANAKQAPALAAAQQAAAUgPAKQgPAKgRAAIgHAAIgBAkQAAAEgCADQgDADgEAAQgFAAgDgDgAgNgeIgCAbIAGABQAKAAAIgGQAIgGABgKQAAgHgJgFQgHgFgIAAIgDAAIgEAAIAAALg");
	this.shape_57.setTransform(168.8,257.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgjA8QgJgIAAgaIACgdIACggIgCgIIAAgIQAAgMALABQADgBADACIARgCIAOgCQAUAAALAEQAHADAAAHQAAAEgCAEQgEAEgFAAIgCgBQgNgDgMgBIgLABIgOADIgBAfIAcgDIATgCQAFABADADQAEACAAAGQAAAGgKACIgTABIgfADIgBAQQAAAQACACQABABAJAAIANAAIAOgBIAFAAIAEAAQAFAAADACQADADAAAFQAAAJgJACQgHABgXAAQgaAAgHgGg");
	this.shape_58.setTransform(152.8,258);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgGA4QgEgDAAgEIAAgEIABgDIgBgLIAAgLIgCgaIgCgdIgEAAQgSABgKgDQgIgCAAgIQAAgEACgDQAEgEAFAAIAMACIANABIAOgBIAMAAIASABIASABQAFAAADACQADAEAAAEQAAAEgDAEQgDADgFAAIgTgBIgTgBIACAgIACAeIAAAHIABAJQAAAFgDAFQgDAGgFAAQgDAAgDgDg");
	this.shape_59.setTransform(142,258);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgjA8QgJgIAAgaIACgdIACggIgCgIIAAgIQAAgMALABQADgBADACIARgCIAOgCQAUAAALAEQAHADAAAHQAAAEgCAEQgEAEgEAAIgDgBQgNgDgMgBIgLABIgOADIgBAfIAcgDIATgCQAFABADADQAEACAAAGQAAAGgKACIgTABIgfADIgBAQQAAAQACACQABABAJAAIANAAIAOgBIAFAAIAEAAQAFAAADACQADADAAAFQAAAJgJACQgHABgXAAQgaAAgHgGg");
	this.shape_60.setTransform(131.6,258);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgoAuIABgZQACgfABgqQAAgEADgEQADgCAEAAQAFAAADACQADAEAAAEQAAAqgCAhIgBATQASAAAbgJIADAAQAGAAACADQADADAAAFQAAAGgGADQgKAEgTAEQgQACgLABQgTgBAAgRg");
	this.shape_61.setTransform(122.2,258.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgiA7QgDgDAAgEIAAgWIACgiIACgkQAAgUALAAIAHgBIAMAAQANAAANAKQAPALAAAQQAAAUgPAKQgPAKgRAAIgHAAIgBAkQAAAEgCADQgDADgFAAQgEAAgDgDgAgNgeIgBAbIAFABQAKAAAIgGQAJgGgBgKQAAgHgHgFQgIgFgHAAIgFAAIgDAAIAAALg");
	this.shape_62.setTransform(113.4,257.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AAqAzIgEgTQgFgOgDgZIgNAfIgEAPIgGAOQgEAHgGAAQgHAAgEgJIgEgOQgHgUgEgUIgKAkIgDARQgDALgJAAQgFAAgDgDQgDgDAAgFQAAgMAGgTIAIgcIAFgYQAEgQADgGQAEgFAHAAQAHAAADAHQADAHAEAVQADAUAHAVQAHgVAIgbIAEgSQAFgMAIAAQAJAAAEANIAEAUQAEAfAHAYIAHAaQAAAFgEADQgDADgEAAQgJAAgEgMg");
	this.shape_63.setTransform(102.1,258.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgoAwQgSgOAAgXQAAgZARgVQATgZAaAAQAbAAAOAMQAOANAAAZQAAAZgQAVQgRAZgbAAQgXAAgQgNgAgYgWQgLAQAAARQAAANAKAIQAJAIAPAAQAPAAAMgRQAKgPAAgSQAAgQgHgHQgHgGgSAAQgPAAgNARg");
	this.shape_64.setTransform(88.5,258.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgiAvQgLgMAAgRQAAgYAXgbQATgYATAAIAGAAIAFABQADgDAFAAQAIAAACAJIABAQQAAADgCADQgDAFgFAAQgIAAgDgIQgCgDgCgBIgFAAQgKAAgLAPQgSAUAAASQAAAJAGAFQAFAHAIgBQAGAAAIgDIALgIQAHgEADAAQAFAAADAEQADACAAAEQAAAGgEADQgWASgUAAQgSAAgMgNg");
	this.shape_65.setTransform(77.3,258);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgZAhQgOgKABgSQgBgRALgOQAMgPARAAQAOAAAJAEQAMAGgBAMQABAJgKAHIgSAHIgYALQAEAEAFACQAFACAGAAQAKAAAHgEQAHgEAEAAQAIAAAAAIQgBAJgNAGQgKAEgMAAQgSAAgLgJgAgJgSQgFAGgEAJIASgHQAJgFAGgEQgGgDgIAAQgFAAgFAEg");
	this.shape_66.setTransform(60.7,260);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AASA4IgEgSIgBgSIAAgFIAAgGIAAgHQgBgCgDAAQgJAAgFAGQgDADgGAMQAAAcgDAGQgDAGgHABQgEAAgEgDQgDgDAAgFIABgEIABgVIAAgzIAAgCIABgMIgBgHIgBgHQAAgFADgDQADgDAFABQAIgBACAJQACAEAAAKIgBAQIAAAPQAGgFAGgDQAFgDAHAAQANAAAGAHQAFAGABAJIAAAUIACAPIADAQIAAACQAAAEgDAEQgEACgEAAQgIABgCgJg");
	this.shape_67.setTransform(51.9,257.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgGA4QgEgDAAgEIAAgEIABgDIgBgLIAAgLIgCgaIgCgdIgEAAQgSABgKgDQgIgCAAgIQAAgEACgDQAEgEAFAAIAMACIANABIAOgBIAMAAIASABIASABQAFAAADACQADAEAAAEQAAAEgDAEQgDADgFAAIgTgBIgTgBIACAgIACAeIAAAHIABAJQAAAFgDAFQgDAGgFAAQgDAAgDgDg");
	this.shape_68.setTransform(41.6,258);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(155));

	// Grey
	this.instance_1 = new lib.staticgraybox("synched",0);
	this.instance_1.setTransform(212.2,305,1.06,0.523,0,0,0,200.9,133.6);
	this.instance_1.alpha = 0.699;

	this.instance_2 = new lib.staticgraybox("synched",0);
	this.instance_2.setTransform(212.8,9.9,1.06,0.416,0,0,0,200.9,-0.1);
	this.instance_2.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(155));

	// PredText
	this.instance_3 = new lib.example0("synched",0);
	this.instance_3.setTransform(26.4,127.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(27).to({_off:false},0).wait(128));

	// sam
	this.instance_4 = new lib.animsamrolls();
	this.instance_4.setTransform(-10.4,90.3,0.52,0.52,0,0,0,20.9,19.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1,scaleY:1,guide:{path:[-10.4,90.3,-9.6,90.1,-8.8,89.9,-2.3,88.3,1.2,86.6,2.1,86.3,2.9,85.9,12.8,80.3,15.3,79.1,36,69.2,64.5,69.2,79,69.2,90.2,73.3,97.9,75.9,107,82.1,117.8,89.4,121,90.9,129.2,94.9,138.5,94.9,153.5,94.9,162.3,91.3,167.6,89,177.3,83.1,188,77.6,207.3,74.5,226.7,71.4,248.3,74.2,269.7,77,279.8,78.9,290,80.9,299.5,85,309,89.1,321,94.9,333.1,100.7,355,105.6,384.3,112,425.3,112,453,112,459.8,108,462.1,106.5,502.2,102.6,475.6,102.6,495.8,100.4,515.9,98,487.8,96.6,459.7,95.1,453,93.9,449.4,93.1,442.8,92.4]}},67).wait(1).to({skewY:180,x:437.6,y:215.2},0).to({x:-40.1,y:214.3},31).wait(56));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.3,10,445.1,294.2);


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
(lib.comP_scene0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene0:0,scene0_repeat:118});

	// timeline functions:
	this.frame_0 = function() {
		playSound("AccousticGroove");
		playSound("AccousticGroove",-1);
		this.btn_menu.addEventListener("click", openMenu.bind(this));
		this.btn_goNext.addEventListener("click", openNext.bind(this));
		
		function openMenu(){
		
		 window.open ("../menu/menu.html","_self");
		}
		
		function openNext(){
		
		 window.open ("comP_Scene1.html","_self");
		}
		
		/*function openPrev(){
		
		 window.open ("puzzle_aux.html","_self");
		}*/
	}
	this.frame_117 = function() {
		/* _root.gonow = true;*/
	}
	this.frame_129 = function() {
		this.gotoAndPlay("scene0_repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(117).call(this.frame_117).wait(12).call(this.frame_129).wait(1));

	// frame
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AAAAPQAAgFAAgFQAAgJAAgK");
	this.shape.setTransform(-140,137.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(130));

	// main (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgjeAYoMAAAgxPMBG9AAAMAAAAxPg");
	mask.setTransform(272.4,192.1);

	// bgmusic_stop
	this.instance = new lib.intro();
	this.instance.setTransform(274,142.6,1.066,1.066,0,0,0,212,109.9);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(130));

	// bgmusic_start
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFCC").ss(1,1,1).p("Asih6QDJiJDrAJQDZAJC4BlQCuBdCMCGQCZCWDgAMQAnACAnAA");
	this.shape_1.setTransform(125.1,131.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FEFE36").ss(1,1,1).p("AAupGQC2hKDFgTQDJgUDJAEQDaAEDZAgQDuAkBFDOQBAC/jkAwQjkAvhNBwQCSCzDlgaQDJgWDBAuQDDAuDUggEAjkgImQiPAAiZgTQjHgZjPg8QjGg6i7hTQjBhWjUgxQjTgwjZgXQjTgWjQAeQjBAci6A3QjPA9iwBgAiPN/QDBhgDcgRQDVgQDSAiQDFAfDBAuQDXAyDSBCQDOBBDaABQArAAAkgOEgjjgOoQFWisDNABQDfAADNBSQDJBPCwB+QAwAjAyAgQCDBVCNBHQC/BgDSAzQDYA1DYg4Egg8gCPQCwh7DSBJQC4BBClBkQC0BtC5BrQC8BsDcAFQAqABAkgSAlBGHQiTCQjpgjQjdgijXApQjAAliuBVQkICAEhA+QC9AoDCgdQDygkBbCKQB1CxEMgFQA4gBA4AF");
	this.shape_2.setTransform(272.4,196.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFCC").s().p("EgjjAUVMAAAgjcIAAiiQFWisDNABQDfABDNBRQDJBPCwB/QAwAiAyAgQCwhfDPg+QC6g2DBgcQDQgeDTAWQDZAWDTAxQDUAwDBBWQC7BTDGA6QDPA9DHAYQCZAUCPAAIAALYQhXANhUAAIAAAAIAAAAQh0AAhugZIgBgBIgJgBIgDgBIgCgBQiAgeiCAAIgBAAIAAAAQg6AAg7AGIgEABIgFAAIgEABQgcADgcAAIAAAAIAAAAQi4AAh9iTIgIgJIgCgDQBNhvDkgwQCyglAAh9QAAgjgOgqQhFjNjugkQjZghjagEIhDgBIAAAAIAAAAQibAAiaAPIgIAAIgSACQjFATi2BLQC2hLDFgTIASgCIAIAAQCagPCbAAIAAAAIAAAAIBDABQDaAEDZAhQDuAkBFDNQAOAqAAAjQAAB9iyAlQjkAwhNBvIACADIAIAJQB9CTC4AAIAAAAIAAAAQAcAAAcgDIAEgBIAFAAIAEgBQA7gGA6AAIAAAAIABAAQCCAACAAeIACABIADABIAJABIABABQBuAZB0AAIAAAAIAAAAQBUAABXgNIAAUjgAkJOUQgvgFgvAAIgBAAIAAAAIgPAAIgCAAIgPAAIAAAAIAAAAQj+AAhyipIgCgCIgBgDQhJhrikAAIgBAAIAAAAQgsAAgyAIQhSAMhQAAIAAAAIgBAAQhlAAhkgUIAAAAIgDAAIgQgDQiXghAAgzQAAguB+g9QCuhVDAgkIADgBIAKgCIAAAAQBwgUBxAAIABAAIAAAAQBeAABeAOIAJABQAuAHAqAAIAAAAIABAAQCsAAB2hzIABgBIgBABQh2BzisAAIgBAAIAAAAQgqAAgugHIgJgBQhegOheAAIAAAAIgBAAQhxAAhwAUIAAAAIgKACIgDABQjAAkiuBVQh+A9AAAuQAAAzCXAhIAQADIADAAIAAAAQBkAUBlAAIABAAIAAAAQBQAABSgMQAygIAsAAIAAAAIABAAQCkAABJBrIABADIACACQByCpD+AAIAAAAIAAAAIAPAAIACAAIAPAAIAAAAIABAAQAvAAAvAFgAK1JfQDFAgDBAtQDXAyDSBDQDOBADaABQArAAAkgOQgkAOgrAAQjagBjOhAQjShDjXgyQjBgtjFggIgGgBIgEAAQiJgWiKAAIgBAAIAAAAQhEAAhFAFQjcARjBBgQDBhgDcgRQBFgFBEAAIAAAAIABAAQCKAACJAWIAEAAIAGABgApTBsQAnAAAhgQIABgBIgBABQghAQgnAAIgBAAIAAAAIgDAAIgBAAQjcgEi8hrQi5hri0huQilhli4hAIgDgBIgBgBIgBAAQhLgahHAAIAAAAIgBAAQh6AAhtBLIgDACIADgCQBthLB6AAIABAAIAAAAQBHAABLAaIABAAIABABIADABQC4BAClBlQC0BuC5BrQC8BrDcAEIABAAIADAAIAAAAIABAAgA8vxHQDaAJC6BkQCtBdCMCJQCZCWDgAMQAnACAnAAQgnAAgngCQjggMiZiWQiMiJithdQi6hkjagJIgGgBIgYAAIAAAAIAAAAQjSAAi3B4IAAAAIgJAGIgEADIAEgDIAJgGIAAAAQC3h4DSAAIAAAAIAAAAIAYAAIAGABgAA5ppQBtAABsgbIACgBIAEgBIgEABIgCABQhsAbhtAAIAAAAIgBAAQhnAAhpgaQjSgyi/hgQiNhHiDhWQCDBWCNBHQC/BgDSAyQBpAaBnAAIABAAIAAAAgEAjkgAOg");
	this.shape_3.setTransform(272.4,215.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#AACBF2").s().p("Ae8H8QjHgZjPg9QjGg5i7hUQjAhVjVgxQjTgxjYgWQjUgWjQAeQjBAci6A3QjPA9iwBfQgygfgwgjQiwh+jIhPQjOhQjfAAQjNgBlWCqIgBqbMBHIAAEIAAQZQiOAAiagTg");
	this.shape_4.setTransform(272.4,88.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(3,1,1).p("Af32jMg/tgADMAAAAtNMA/tAAAg");
	this.shape_5.setTransform(269.9,191.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(130));

	// buttons
	this.btn_menu = new lib.skiptomenu();
	this.btn_menu.setTransform(514.1,20.3);
	new cjs.ButtonHelper(this.btn_menu, 0, 1, 2, false, new lib.skiptomenu(), 3);

	this.instance_1 = new lib.Copyright("synched",0);
	this.instance_1.setTransform(275,393.5);

	this.btn_goNext = new lib.goNext();
	this.btn_goNext.setTransform(494,352.3);
	new cjs.ButtonHelper(this.btn_goNext, 0, 1, 2, false, new lib.goNext(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_goNext},{t:this.instance_1},{t:this.btn_menu}]}).wait(130));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(134,201.8,687.3,401.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;