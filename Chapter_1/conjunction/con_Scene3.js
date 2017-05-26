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
		{src:"sounds/_10d.mp3", id:"_10d"},
		{src:"sounds/_11a.mp3", id:"_11a"},
		{src:"sounds/_11b.mp3", id:"_11b"},
		{src:"sounds/_2a.mp3", id:"_2a"},
		{src:"sounds/_2b.mp3", id:"_2b"},
		{src:"sounds/_2c.mp3", id:"_2c"},
		{src:"sounds/_3a.mp3", id:"_3a"},
		{src:"sounds/_4a.mp3", id:"_4a"},
		{src:"sounds/_4b.mp3", id:"_4b"},
		{src:"sounds/_5a.mp3", id:"_5a"},
		{src:"sounds/_6a.mp3", id:"_6a"},
		{src:"sounds/_8a.mp3", id:"_8a"},
		{src:"sounds/_9a.mp3", id:"_9a"},
		{src:"sounds/JingleConjunction.mp3", id:"JingleConjunction"},
		{src:"sounds/MenuConjunction.mp3", id:"MenuConjunction"},
		{src:"sounds/SECorrectAnswer.mp3", id:"SECorrectAnswer"},
		{src:"sounds/and.mp3", id:"and"},
		{src:"sounds/andor.mp3", id:"andor"},
		{src:"sounds/but.mp3", id:"but"},
		{src:"sounds/butyetso.mp3", id:"butyetso"},
		{src:"sounds/coordinate.mp3", id:"coordinate"},
		{src:"sounds/_for.mp3", id:"_for"},
		{src:"sounds/nor.mp3", id:"nor"},
		{src:"sounds/norfor.mp3", id:"norfor"},
		{src:"sounds/or.mp3", id:"or"},
		{src:"sounds/so.mp3", id:"so"},
		{src:"sounds/words.mp3", id:"words"},
		{src:"sounds/yet.mp3", id:"yet"}
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



(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFFF").s().p("AhYCFQgGgFAAgIIgBgqIgBgpQAAgQADgeQAEggAAgQIgCgbIgBgaQAAgKAFgIQAHgJAMABIAqADQAYADAPAJQBHAmAAA2QAAAbgZASQgTARgdAJQA2AdAcAgQAEAGAAAGQAAAIgFAFQgGAGgHAAQgGAAgGgGQg6g5hGgUIACAiIABAjQAAAIgFAFQgFAFgIAAQgIAAgEgFgAg3hOIABAWQAAAOgCAVIgEAhIAIAAIAIAAQAsAAAVgMQAKgDAIgJQAJgKAAgHQAAgYgbgVQgYgUgcgDIgagCg");
	this.shape.setTransform(14.4,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FFFF").s().p("AhYBtQgkggAAgyQAAg7AkgyQAog3A6AAQA6AAAcAaQAdAbAAA6QAAA8ghAxQgmA3g6AAQgxAAgjgdgAg9g6QgbAnAAAuQAAAiAZAVQAYAUAjAAQApAAAcgrQAZgmAAgvQAAgqgTgQQgSgRgrAAQgpAAgeArg");
	this.shape_1.setTransform(-11.6,1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.2,-27.1,55.5,54.2);


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
	this.shape_10.graphics.f().s("#000000").ss(2,1,1).p("AE3iIIAAERIptAAIAAkRg");
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
	this.shape_16.graphics.f().s("#000000").ss(2,1,1).p("AEaB8IozAAIAAj3IIzAAg");

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0066CC").s().p("AkZB8IAAj3IIzAAIAAD3g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.2,-16.9,58.6,30.5);


(lib.orpointstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AEhBpIAAAAIAAgEQhDAGgsgOQhUgbhOghQgmgSgmgQIgFABQgOAEgLAIQgRANgLARQgSAJgVAHIgCAAIAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAAAIgNgJQgugigGgyIAAgDQgXAJgSAAQgbgCgOgaIAMgIQANgJAQgGQATgHAWgDIAGAAIAAgGIAfAAQAEAFAFACQAEACAFAAQAIgBAJgEIAFgEIAAAAIAAgBIABgBIARAAIAMgCIgCAEQAgABAxAHIABADIBpAUIC+AiIgBATIABADIgBAAQhcgbhigWIgfgHIhGgPIgEgBIgVgEIgGAAIg1ABIgEAAIgvgBIAAAAIgFAAQg2gCglAQIgKAGQgLAFgJAIQANAKARADQASADAWgDIAUgFQALgCgJAJQgGAFgJACQARAbAUgPIgBABQgHAFgCAJQgHAgAjgRIgEAGQgDAJgKABQAGALAGAGQAGAGAGABQAFAAAFgDQAIgFAIgNIgGgDQgKgNAwgDIAGAAQALgRAbgDIAGAAQAgAVAkARQBwA0CeADIARgBIACAOIgDACQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIAAACIgHAAQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAIgBAAg");
	this.shape.setTransform(-29.3,-7.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("AEcBWQidgDhxg0QgjgSghgVIgFABQgcACgLARIgFABQgxADALANIAFADQgIAMgIAFQgFADgFAAQgGAAgGgGQgGgGgFgLQAJgCAEgIIADgHQgjARAIgfQABgJAHgGIABgBQgUAPgRgaQAKgCAFgGQAJgJgKADIgUAEQgXAEgRgDQgSgEgMgJQAIgIALgGIALgFQAkgQA2ACIAFAAIABAAIAvABIADAAIA2gBIAFAAIAVAEIAFAAIBFAPIAfAHQBiAWBcAcIABAAQACAfAfAIQAMAPACATIACAUIgPABIgCAAg");
	this.shape_1.setTransform(-28.8,-7.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.1,-17.7,61.7,21);


(lib.ormehandstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("AijCgQgIgCgCgHQgEgVASgMIABgEQAEgZACgaIADgEIAHgGQAGABAFACIABgBIAAABQA4gLBAgYIAKgEIATgKQApgXAVgtIgBAAQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBABIAAAAIgBABIABgMQgBgJgCgJQgBgGgDgDQABgOgDgMQgCgJACgBQADAAAEAGIABACQAIAvAeAAQAIAAAKgEIAEgBIABAAQABgYgJgTQgKgTgVgNIAAgBIAAAAQAfABAQAaIAAAAQAJAPAEAXIABAGQgOAQACAGQADAFAUgFIABAFQABADADADQgEAlgcAOIgBACIgEACQgqAcgtAbIgBABIgCABQhSAzheApIgCgBIgDADIgCACQgJAHgKAAIgBAAIgHAAg");
	this.shape.setTransform(15.1,-9.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#99CCFF").s().p("AgBABIABgBIABgBIABAAIAAAAIgCABIgBACIAAgBg");
	this.shape_1.setTransform(28.5,-8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AimCpIgCgEIAAAEIAAgEIAAgBIAAAAIADgCQAKAAAJgHIACgBIAFgCQBegqBSgyIACgBIABgBQAtgbAqgeIAEgBIAAAAIABgBQAcgOAEgmQgDgDgBgDIgBgFQgUAGgDgGQgCgFAOgRIgBgFQgEgXgJgPIAAgBQgQgagfgBIAAAAIAAAAIgCgLIACAAQAgADAZAgIAAAAIAGAIQAAAAAAAAQABAAAAAAQAAAAABAAQABAAAAAAQAhBHgjAsIAAAAIgCABIgBAAIAAABIgBACIgCAJIgCgDIgIAGIgHAKIgCAAIAAAAIgBAAIgCABIgCADIAAABIgCACIgGAFIgDADIgOAIIgGAGIi9BiIgCgCIgBAAIAAABIAAABIAAAAIgBABIAAAAIgIACIgUAJIgGAEIgDAAQgEAAgDACIgEACQgHAEgHACgAiYA3IAFgEIAAADQCFgeBEhEIAEgBQAFgFgBgFQAAgHgEgFIAAgDIgBgIIgFgOIgEgGIgLggQAygLAPA6QABACAGAAQAOgBgEgPQgbgdgGgeQAVAOAKASQAJATgBAZIgFAAQgKAEgHAAQgeABgIgwIgBgCQgFgFgCgBQgEgBADALQADAMgBAOQADADABAGQACAJABAJIgBAOIABgCIABAAIAAgBQABAAAAgBQAAAAABAAQAAAAABAAQAAgBABAAQgVAtgpAXIgTAKIgKAEQhAAYg3ALIgBAAQgFgCgGgBg");
	this.shape_2.setTransform(16.1,-9.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.4,-26.8,35.5,33.9);


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


(lib.orpoint = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_28 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(28).call(this.frame_28).wait(1));

	// Layer 1
	this.instance = new lib.orpointstill();
	this.instance.setTransform(30.9,8.4,1,1,75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({scaleX:1,scaleY:1,rotation:-1.9,x:29.6,y:7.5},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(12.2,-54.3,36.3,65);


(lib.ormehand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_38 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(38).call(this.frame_38).wait(1));

	// Layer 1
	this.instance = new lib.ormehandstill();
	this.instance.setTransform(-15.9,11.9,0.999,0.999,63.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(31).to({scaleX:1,scaleY:1,rotation:-8.8,y:10.8},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.3,-2.4,46.3,46.9);


(lib.ORSYM = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// Layer 1
	this.instance = new lib.Symbol37("synched",0);
	this.instance.setTransform(275,200);
	this.instance.alpha = 0;

	this.instance_1 = new lib.Symbol37("synched",0);
	this.instance_1.setTransform(275,200,1.2,1);
	this.instance_1.alpha = 0;

	this.instance_2 = new lib.Symbol37("synched",0);
	this.instance_2.setTransform(275,200,1.4,1);
	this.instance_2.alpha = 0;

	this.instance_3 = new lib.Symbol37("synched",0);
	this.instance_3.setTransform(275,200,1.6,1);
	this.instance_3.alpha = 0;

	this.instance_4 = new lib.Symbol37("synched",0);
	this.instance_4.setTransform(275,200,1.8,1);
	this.instance_4.alpha = 0;

	this.instance_5 = new lib.Symbol37("synched",0);
	this.instance_5.setTransform(275,200,2,1);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5,p:{scaleX:2,alpha:0}},{t:this.instance_4,p:{scaleX:1.8,alpha:0}},{t:this.instance_3,p:{scaleX:1.6,alpha:0}},{t:this.instance_2,p:{scaleX:1.4,alpha:0}},{t:this.instance_1,p:{scaleX:1.2,alpha:0}},{t:this.instance,p:{alpha:0}}]}).to({state:[{t:this.instance_5,p:{scaleX:1.947,alpha:0.02}},{t:this.instance_4,p:{scaleX:1.758,alpha:0.02}},{t:this.instance_3,p:{scaleX:1.568,alpha:0.02}},{t:this.instance_2,p:{scaleX:1.379,alpha:0.02}},{t:this.instance_1,p:{scaleX:1.189,alpha:0.02}},{t:this.instance,p:{alpha:0.02}}]},1).to({state:[{t:this.instance_5,p:{scaleX:1.895,alpha:0.039}},{t:this.instance_4,p:{scaleX:1.716,alpha:0.039}},{t:this.instance_3,p:{scaleX:1.537,alpha:0.039}},{t:this.instance_2,p:{scaleX:1.358,alpha:0.039}},{t:this.instance_1,p:{scaleX:1.179,alpha:0.039}},{t:this.instance,p:{alpha:0.039}}]},1).to({state:[{t:this.instance_5,p:{scaleX:1.842,alpha:0.051}},{t:this.instance_4,p:{scaleX:1.674,alpha:0.051}},{t:this.instance_3,p:{scaleX:1.505,alpha:0.051}},{t:this.instance_2,p:{scaleX:1.337,alpha:0.051}},{t:this.instance_1,p:{scaleX:1.168,alpha:0.051}},{t:this.instance,p:{alpha:0.051}}]},1).to({state:[{t:this.instance_5,p:{scaleX:1.789,alpha:0.07}},{t:this.instance_4,p:{scaleX:1.632,alpha:0.07}},{t:this.instance_3,p:{scaleX:1.474,alpha:0.07}},{t:this.instance_2,p:{scaleX:1.316,alpha:0.07}},{t:this.instance_1,p:{scaleX:1.158,alpha:0.07}},{t:this.instance,p:{alpha:0.07}}]},1).to({state:[{t:this.instance_5,p:{scaleX:1.737,alpha:0.078}},{t:this.instance_4,p:{scaleX:1.589,alpha:0.078}},{t:this.instance_3,p:{scaleX:1.442,alpha:0.078}},{t:this.instance_2,p:{scaleX:1.295,alpha:0.078}},{t:this.instance_1,p:{scaleX:1.147,alpha:0.078}},{t:this.instance,p:{alpha:0.078}}]},1).to({state:[{t:this.instance_5,p:{scaleX:1.684,alpha:0.102}},{t:this.instance_4,p:{scaleX:1.547,alpha:0.102}},{t:this.instance_3,p:{scaleX:1.411,alpha:0.102}},{t:this.instance_2,p:{scaleX:1.274,alpha:0.102}},{t:this.instance_1,p:{scaleX:1.137,alpha:0.102}},{t:this.instance,p:{alpha:0.102}}]},1).to({state:[{t:this.instance_5,p:{scaleX:1.632,alpha:0.121}},{t:this.instance_4,p:{scaleX:1.505,alpha:0.121}},{t:this.instance_3,p:{scaleX:1.379,alpha:0.121}},{t:this.instance_2,p:{scaleX:1.253,alpha:0.121}},{t:this.instance_1,p:{scaleX:1.126,alpha:0.121}},{t:this.instance,p:{alpha:0.121}}]},1).to({state:[{t:this.instance_5,p:{scaleX:1.579,alpha:0.129}},{t:this.instance_4,p:{scaleX:1.463,alpha:0.129}},{t:this.instance_3,p:{scaleX:1.347,alpha:0.129}},{t:this.instance_2,p:{scaleX:1.232,alpha:0.129}},{t:this.instance_1,p:{scaleX:1.116,alpha:0.129}},{t:this.instance,p:{alpha:0.129}}]},1).to({state:[{t:this.instance_5,p:{scaleX:1.526,alpha:0.148}},{t:this.instance_4,p:{scaleX:1.421,alpha:0.148}},{t:this.instance_3,p:{scaleX:1.316,alpha:0.148}},{t:this.instance_2,p:{scaleX:1.211,alpha:0.148}},{t:this.instance_1,p:{scaleX:1.105,alpha:0.148}},{t:this.instance,p:{alpha:0.148}}]},1).to({state:[{t:this.instance_5,p:{scaleX:1.474,alpha:0.172}},{t:this.instance_4,p:{scaleX:1.379,alpha:0.172}},{t:this.instance_3,p:{scaleX:1.284,alpha:0.172}},{t:this.instance_2,p:{scaleX:1.189,alpha:0.172}},{t:this.instance_1,p:{scaleX:1.095,alpha:0.172}},{t:this.instance,p:{alpha:0.172}}]},1).to({state:[{t:this.instance_5,p:{scaleX:1.421,alpha:0.18}},{t:this.instance_4,p:{scaleX:1.337,alpha:0.18}},{t:this.instance_3,p:{scaleX:1.253,alpha:0.18}},{t:this.instance_2,p:{scaleX:1.168,alpha:0.18}},{t:this.instance_1,p:{scaleX:1.084,alpha:0.18}},{t:this.instance,p:{alpha:0.18}}]},1).to({state:[{t:this.instance_5,p:{scaleX:1.368,alpha:0.199}},{t:this.instance_4,p:{scaleX:1.295,alpha:0.199}},{t:this.instance_3,p:{scaleX:1.221,alpha:0.199}},{t:this.instance_2,p:{scaleX:1.147,alpha:0.199}},{t:this.instance_1,p:{scaleX:1.074,alpha:0.199}},{t:this.instance,p:{alpha:0.199}}]},1).to({state:[{t:this.instance_5,p:{scaleX:1.316,alpha:0.219}},{t:this.instance_4,p:{scaleX:1.253,alpha:0.219}},{t:this.instance_3,p:{scaleX:1.189,alpha:0.219}},{t:this.instance_2,p:{scaleX:1.126,alpha:0.219}},{t:this.instance_1,p:{scaleX:1.063,alpha:0.219}},{t:this.instance,p:{alpha:0.219}}]},1).to({state:[{t:this.instance_5,p:{scaleX:1.263,alpha:0.23}},{t:this.instance_4,p:{scaleX:1.211,alpha:0.23}},{t:this.instance_3,p:{scaleX:1.158,alpha:0.23}},{t:this.instance_2,p:{scaleX:1.105,alpha:0.23}},{t:this.instance_1,p:{scaleX:1.053,alpha:0.23}},{t:this.instance,p:{alpha:0.23}}]},1).to({state:[{t:this.instance_5,p:{scaleX:1.211,alpha:0.25}},{t:this.instance_4,p:{scaleX:1.168,alpha:0.25}},{t:this.instance_3,p:{scaleX:1.126,alpha:0.25}},{t:this.instance_2,p:{scaleX:1.084,alpha:0.25}},{t:this.instance_1,p:{scaleX:1.042,alpha:0.25}},{t:this.instance,p:{alpha:0.25}}]},1).to({state:[{t:this.instance_5,p:{scaleX:1.158,alpha:0.27}},{t:this.instance_4,p:{scaleX:1.126,alpha:0.27}},{t:this.instance_3,p:{scaleX:1.095,alpha:0.27}},{t:this.instance_2,p:{scaleX:1.063,alpha:0.27}},{t:this.instance_1,p:{scaleX:1.032,alpha:0.27}},{t:this.instance,p:{alpha:0.27}}]},1).to({state:[{t:this.instance_5,p:{scaleX:1.105,alpha:0.289}},{t:this.instance_4,p:{scaleX:1.084,alpha:0.289}},{t:this.instance_3,p:{scaleX:1.063,alpha:0.289}},{t:this.instance_2,p:{scaleX:1.042,alpha:0.289}},{t:this.instance_1,p:{scaleX:1.021,alpha:0.289}},{t:this.instance,p:{alpha:0.289}}]},1).to({state:[{t:this.instance_5,p:{scaleX:1.053,alpha:0.301}},{t:this.instance_4,p:{scaleX:1.042,alpha:0.301}},{t:this.instance_3,p:{scaleX:1.032,alpha:0.301}},{t:this.instance_2,p:{scaleX:1.021,alpha:0.301}},{t:this.instance_1,p:{scaleX:1.011,alpha:0.301}},{t:this.instance,p:{alpha:0.301}}]},1).to({state:[{t:this.instance,p:{alpha:1}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(218.6,172.9,111,54.2);


(lib.OR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_26 = function() {
		/* _root.dougpoint.start();*/
	}
	this.frame_38 = function() {
		/* _root.sampoint.start();stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(26).call(this.frame_26).wait(12).call(this.frame_38).wait(1));

	// Layer 1
	this.instance = new lib.ormehand();
	this.instance.setTransform(5.3,31.5);

	this.instance_1 = new lib.orpoint();
	this.instance_1.setTransform(109.3,18.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AlFYhI80AAIAAzbIAAgCIAA9UIAAgQEAh6AYhMgm6AAA");
	this.shape.setTransform(40.6,41.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1,1).p("Egh5gYgMBDzAAAIAAAQIAAdQIAATh");
	this.shape_1.setTransform(40.6,41.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgNCrIABgFIAEgOQgEAAgFgEIgDgCQgLAJgPAAIgHgDIgIgDQgYgLAEgRQAThWAPhYIAAABQgeBOgSBcIAAADIgGAAQgtgBglgJIABgGIAMgeQgEABgGgCQgNAQgSAEQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgKgHgCgOQAdgnATgvIABgEIAAgBQAlhKAihKIABgGQAiALAjAFQBcAOBggTIACgBQAhgGAUAEQAJACAGAEIADAEIAAAFQAAAOAEAMIgBAHQgLCvhIBxIAAADIidgDg");
	this.shape_2.setTransform(159.7,57.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0000FF").s().p("ABRPvIgIgZQhSkKgmk8IgKhhIgBgGIgBgKIAAgLIgFgnIgLhyIAAAAIgEgjIgBgQIgIhiIAAgBIgJh7QADgIgCgKIgEgdIgEgsIgBgRIgBgiQAAgMgCgLIAAgoQABgmAEgkIADglIABgOQADgRABgTIAAgDIAAgHIgBgKIgBgdQAAgFACgDIABgBIAAgOIgBgtIAAgiIAAgxIABghIAAgaIAAgTIAAgpIABgVIABgmIABgeQABgGgCgGIAAgBIACgSIAAgBQAGgpAJgoIgEBRIAAABIgBAZIgCABIAAABQAAASgCASIgBAGQgEAOABAQIAAA7IAAADIAAAtIAAALIAAA8IABAsIABAPIABAZIgBAGIgBAPIAAAAQACACgBADIAAAPIABAeIAAAEIAHAAIgBAfIABBBIgDAFIADAAIAAAEIAAAOIgBADIAAACIAAARIgBABIgBAAIAAAEIAAAoIgDBEIgCAlIAAAZIAAAwIADAAIAIB/IAIBjIAEAzIANByIAEAmQAIA/AKA9IAAAAIACAPQApD3AzDxQAJArALAiQALAiAMAaQgXgNgFgSg");
	this.shape_3.setTransform(102.3,52);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF00").s().p("AgJSwQgOgOgHgYQhIkYgykzIAAgGQgLhQgJhSQgKhRgHhUQgKhvgHhxIABgBIABgQQgCgjAAgmIAAgiIAAgdQACgjAAgkIAAgOIACgZIABgtIABgfIAAgZIgBgSIgDgMIgCgBIgBgFIgBghIgCguIgBgtIAAgqIAAgdIAAgeIAAgOIAAguIABgdIABgRIADgeQABgHgDgGIAAgBIADgaQARiOAgiDIABgDIABgGQANgzAcgsQAAAAABAAQABgBAAAAQABAAAAAAQAAAAABgBQAugvBagBIABADQAaAJAXAKQAaAiAQAoQAoBmAJCEIAAAKIAAABIAAAMIAAABQgDAIAAAJQABAKgBAJIgBAEIgCAXIgBAGQgBAFACACIgDAUIgDAHIAAACIgBACQgCAEABACQgJABgIgCQgGgFAAABQgDAigzgIQgBAAgBAAQAAAAgBAAQAAAAAAABQgBAAAAAAQgCAEgCABIgaALIgrAQQAAAAAAAAQAAAAgBAAQAAAAgBABQAAAAgBAAQgSAMAwgCIAIAAQgUAXgjAPQAHAXAhgZQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAOADQAJAKgoAZQAPALAXgUIAHgGQAIgIADAMQAEgPAKgIQABgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAhAAgaAoIgFAJQgMARAKAEIgBAAIAAABQgBAIgFAGIgGACIAAAAIgEgFIAAgDQgFAWgMALIgHAGQgRAKAOAOQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAIAJAIQAaAYAhAQQAVAKAXAIQAYAHAbAFIAGAAQAMAAgDAQIgEAMQgUAQAEAhQACAYABAXQAAApgHAiIAAAMIAAAFIABA7IABAYIAHBKIABAbQAAAVgCAUIABABIACABIAAAAQAEB8gBB/IAAAcIgBBiIgEDVIgGDiQgGC7g7B9IgCAKQgaAfgmAUIgFAAIgJAAQgiAAgVgLgADPgjIABgBIABgBIAAAJIgCgHgADNibIACAGIgCABIAAgHgAjUj1IADgGIAAAGIgBAAIgCAAgACvtSIACgDIgBAFIgBAMIAAgOg");
	this.shape_4.setTransform(115.4,34.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("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gEADQgCAAABgGgEghSgAiQgDgEADgFIABgCIAEABIACACIAAAFIgBADIgGAAgAqWgpQgEgEAEgFIABgCIAEACIACABIgBAFIgBADIgFAAgA9ggxIAAgDIAFAEIABACQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgCAAAAgGgAbChCIAAgDIAFAEIAAACIgEADQgCAAABgGgAGqhCIABgDIAFAEIAAACIgEADQgCAAAAgGgAWhhEQgEgEAEgFIABgCIADABIACACIAAAFIgBADIgFAAgAZ3hMIAAgDIAGAEIAAACQgBAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgCAAAAgFgARphTIABgDIAFAEIAAACIgEADQgCAAAAgGgAtGhaIAAgDIAFAEIAAACIgEADQgCAAABgGgAmKhhIABgCIAFAEIAAABQAAABgBAAQgBABAAAAQgBAAAAABQAAAAgBAAQgCAAAAgGgAAFhmQgEgEAEgFIABgCIAEABIACACIgBAFIgBADIgFAAgAC5hyIABgCIAFAEIAAABQgBABgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgCAAAAgGgADYh1IAAgDIAFAEIAAACIgEADQgCAAABgGgADKh1IABgDIAFAEIAAACIgEADQgCAAAAgGgABGh5IAAgCIAFAEIAAACIgEACQgCAAABgGgAeFiHQAAgGAHgCIACgBIAEACIACACQgCAFgGACIgHgCgA/yiNIAAgDIAFAFIAAABIgDADQgCAAAAgGgAcgiXIAAgDIAFAEIABACQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgCAAAAgGgA8IiXIABgDIAFAEIAAACIgEADQgCAAAAgGgA+aibIABgCIAFAEIAAACIgEACQgCAAAAgGgEAgUgCsIABgCIAFAEIAAACIgEACQgCAAAAgGgAAgi9IABgCIAFAEIAAACIgEACQgCAAAAgGgAhfjHIABgCIAFAEIAAACIgEACQgCAAAAgGgAq/jHIABgCIAFAEIAAACIgEACQgCAAAAgGgA3rjOIABgCIAFAEIAAACQAAAAgBABQgBAAAAAAQAAABgBAAQAAAAgBAAQgCAAAAgGgAr1jRIABgDIAFAFIAAABIgEADQgCAAAAgGgAD0jYIAAgCIAFAEIAAACIgEACQgCAAABgGgAuUjbIAAgDIAFAEIAAACIgEADQgCAAABgGgAmKjiIABgDIAFAFIAAABQAAABgBAAQgBABAAAAQgBAAAAABQAAAAgBAAQgCAAAAgGgA/DjiIABgDIAFAFIAAABQAAABgBAAQgBABAAAAQgBAAAAAAQAAABgBAAQgCAAAAgGgAZ3jsIAAgDQAHAAAEAGIABADQAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAIgFABQgJgCAEgGgA8gjsIABgDIAFAEIAAACIgEADQgCAAAAgGgAdFkBIACgCIAEABIACACQgDAGgBAHIAAADIgHACQgFgKAIgJgA6Aj2IABgDQAEACAEADIAAABQgDADgCAAQgEAAAAgGgEggwgDxQgEgFADgEIABgCIAEABIACACIAAAFIgBADIgFAAgAQij6IAAgCIAFAEIAAACIgEACQgCAAABgGgAG/j6IAAgCIAFAEIAAACIgEACQgCAAABgGgAWykHIABgDIAFAEIAAACIgEADQgCAAAAgGgAICkHIABgDIAFAEIAAACIgEADQgCAAAAgGgAmKkpIABgDIAFAEIAAACQAAABgBAAQgBABAAAAQAAAAgBAAQAAABgBAAQgCAAAAgGgEAgUgEwIABgDIAFAFIAAABIgEADQgCAAAAgGgA+ykrQgDgEADgFIABgCIAEABIACACIgBAFIgBADIgFAAgAXJkzIAAgDIAGAEIAAACQgBAAgBABQAAAAgBABQAAAAAAAAQgBAAAAAAQgCAAAAgFgEghEgE3IABgCIAFAEIAAACIgEACQgCAAAAgGgAg9k6IABgDIAFAEIAAACIgEADQgCAAAAgGgAqdlBIABgDIAFAFIAAABQAAABgBAAQgBABAAAAQgBAAAAAAQAAABgBAAQgCAAAAgGgAD2k8QgEgGADgGIACgCIAEAAQADAFgBAGIgBACIgCABIgEAAgAXolEIABgDIAFAEIAAACQgBAAAAABQgBAAAAABQgBAAAAAAQgBAAAAAAQgCAAAAgFgA6blLIAAgDQAFACADADIAAABQgDADgCAAQgDAAAAgGgA+QlGQgDgEADgFIABgCIAEABIACACIgBAFIgBADIgFAAgAA/lSIAAgDIAFAFIAAABIgDADQgCAAAAgGgAtAlgIABgCIAFAEIAAACIgEACQgCAAAAgGgAZfmIIABgDIAFAEIAAACIgEADQgCAAAAgGgA7wmPIAAgDIAMAFIAAABQgFAEgCAAQgEAAgBgHgAcCmSIABgDIAFAEIAAACIgEACQgCAAAAgFgAU7mSIABgDIAFAEIAAACIgEACQgCAAAAgFgA/2mSIABgDIAFAEIAAACQAAAAgBABQgBAAAAAAQgBABAAAAQAAAAgBAAQgCAAAAgFgAifmZIAAgDIAFAEIAAACIgEADQgCAAABgGgAFcmjIABgDIAFAEIAAACIgEACQgCAAAAgFgAr1msQgEgEAEgFIABgCIAEABIACACIgBAFIgBADIgFAAgA/hnFIAAgDIAFAEIAAACQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAAAAAQgCAAAAgFgAfmnPIgCgBQAAgGAEgFIACgBIAEABIACACQgBAEgCAEIgCACIgDAAIgCAAgAATnWIAAgDIAFAEIAAACQAAAAgBABQgBAAAAABQgBAAAAAAQAAAAgBAAQgCAAABgFgA+FnWIAAgDIAFAEIAAACQAAAAgBABQgBAAAAABQgBAAAAAAQAAAAgBAAQgCAAABgFgA8jnaIABgCIAFAEIAAACIgEACQgCAAAAgGgEghVgHdIABgDIAFAEIAAACQAAABgBAAQgBABAAAAQAAAAgBAAQAAABgBAAQgCAAAAgGgAhpncQgEgEAEgEIABgDIADACIADACIgBAFIgBACIgFAAgAELnkIAAgDIAFAFIAAABIgEADQgCAAABgGgA7fnuIAAgDIAGAEIAAACQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgCAAAAgGgEAhPgIRIAAgCIAFABQADARgBATIgBACIgGADQgEgUAEgUgA6Rn8IABgCIAFAEIAAACIgEACQgCAAAAgGgArMn/IAAgDIAFAEIAAACIgEADQgCAAABgGgAagoJIAAgDIAFAEIAAACIgEADQgCAAABgGgA/OoQIABgDIAFAEIAAACQAAABgBAAQgBABAAAAQAAAAgBAAQAAABgBAAQgCAAAAgGgEAgwgIeIABgCIAFAEIAAACQAAAAgBABQgBAAAAAAQAAABgBAAQAAAAgBAAQgCAAAAgGgEghBgIeIAAgCIAGAEIAAACQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgCAAAAgGgAtGohIAAgDIAFAEIAAACIgEADQgCAAABgGgAXDocQgEgEADgFIACgCIADABIACACIAAAFIgBADIgFAAgABTooIABgCIAFAEIAAABQgBABgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgCAAAAgGgAsCooIAAgCIAFAEIAAABQAAABgBAAQgBABAAAAQgBAAAAABQAAAAgBAAQgCAAABgGgAeKo8IABgDIAFAEIAAACIgEADQgCAAAAgGgAC8pDIABgDIAFAEIAAACIgEADQgCAAAAgGgAYOpGIAAgDIAFAEIAAACIgEACQgCAAABgFgAG3pFQgCgMACgNIABgDIAFABQADAMgDANIAAACIgBABIgFgBgAiwpXIAAgDIAFAEIAAACIgEACQgCAAABgFgArJpqQgDgFADgEIABgCIAEABIACACIgBAFIgBADIgFAAgABGqsIAAgDIAFAEIAAACIgEADQgCAAABgGg");
	this.shape_5.setTransform(40.3,129.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF9900").s().p("AgBANIgDAAQgkgEgzAGIAAgCQAvgNgDgNIgBgFQgngWBOgBQANgBAQgCIAYgEQACAAADACQgfAbBFgEIAFgBQgJAKghAOQgUAIgKAVIgEALQgEAJgEAAQgHAAgCgkg");
	this.shape_6.setTransform(-135.5,149.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#99CCFF").s().p("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");
	this.shape_7.setTransform(40.7,-19.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#996633").s().p("AhtBfIgEgYIgCgKIglgFIAVgpIABgDQAkgPgGgfQAAgBAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAcgSAQgdIAAADQAFAMALgCQAJgDAPgRQANgQANgPQAXgYgJAbQgWAjARAAIAAgCQAogSAkgSIAAADQgCADgEABQgJADACAAQAdAIAtgPQAAAAAAABQAAABAAAAQAAAAgBAAQAAABAAAAQg0AQAaAOQA2AFhHARQg0ANAIATIgBAEQgmANgeAOQA5Afg4AgQAAAAAAAAQgBAAAAABQAAAAAAABQAAAAAAABQgPAFgCAQIgCAWQAAAEgGAFQgHACgGgFQgNgMgKgPQgIAAgJAHQgHAGgEAJQgEALAAALQgKgSgCgUg");
	this.shape_8.setTransform(-88.4,-20.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000099").s().p("AiKDKIgUgCIgVgCIgUgEQgVgFgUgGQgLgDgLgEIAAgBIgBgCIgDgCIgEgDIgNgSIgBgGIgBgLIgBgYIAAgaIAAgMIAAgNIAAgNQAAgGgCgGQgCgLgEgJIgJgRIAKgIIATgSIAQgUIAOgWIAMgYIAGgOIAEgOIAFgOIADgPIAGgfIAEgRIAhAMIAiAKIAkAJIAlAHIAnAGIAlAEIAVACIAVABIAVABIAVAAIAFAAIAcgBIAgAAICPgCIgIAQIgPAhIgOAiIgNAkIgLAjIgFATIgFATIgEAUIgFAUIgIApIgGAVIgbAHIgOADIgPABIgOAAIgOAAIgegDIgRgDIAAgNIAAgbIABgbIACgcIACgbIADgZIABgNIACgNIACgOIACgNIAFggIACgSIgIAiIgGAeIgFAeIgFAcIgFAeIgBAPIgCAPIgCAPIgBAPIgCAeIgCATIgUAKQgUAHgUAGQgSAHgVADQgUAGgUADIgpACIgUAAg");
	this.shape_9.setTransform(-78.3,87.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFF99").s().p("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");
	this.shape_10.setTransform(40.7,78.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#009933").s().p("AiOCKQgIAAgIgEQgFgFgFgMQAAgpAEgoIABgBIABgCIAAgCQAAgMADgLIAAgCQABgGgBgHIgBAAIAKhdQADgoAhgDIALAAQApAJA+AFQBCAGA2gPQAPCKAiB2IAAAFQg0AIg/gCIgFAAIgDAAQABhLgKg8IgCAAQgDBIAABKIgGAAIgYAEIiQgGg");
	this.shape_11.setTransform(-1.2,63.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFCC99").s().p("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IgWgTAcIgBAFQheARhFgeIgBgCIgJABIgEADIgMgBIgDgFIAAAAIAAABIAAAEIAAABIgFgBQhigpgBiLQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQANgTACggQgDgVgCAVIgBAFIAAABIgCgBQgngUADhDQAKgoAVgbQAAAAABgBQAAAAAAgBQAAAAAAgBQABgBAAAAQA9gdA0gnQAAAAABAAQAAgBAAAAQAAgBAAAAQABgBAAAAQgChBARgoIABgFQgnAWgHgPQgDgHAFgRIAAgFQAOALAFgBQABgBAAAAQABAAAAgBQAAAAABAAQAAgBAAAAQADgGgDgOQgCgHgFADIgOAIQgLAFgBgHIAAgFIAAgBIAAgFIA3hUQADgEAIgCQALgDALgGQgIgSAJgIIAFgBQAlgGATgPIAEgMQAVANARARQgFAAgGACIAAAAIgFABQgLAKgEAOQgBAFADADQAMANAHgQIADgCQADgCABgEIAAgBIAKgDQAFgCAAgEQAUAWAOAdQAGAMAJAOQgRANgKAUIgBAFIABAEIACABQAHATgVADQgiAFgggHIgDgCQgOgGgEgPQgBgDABgDIgCgBIgDABIgDADIgBADQAOAGgHATQgEAIgIgEIgBgBIgBACQgGAMAOACQALABADgJIABgEQAFADAGACIAHABQAeADAdgCQAKgBAKgGIAAAAQAAAegVAUQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAABQg4ADAeA4QAAAAABAAQAAABAAAAQABAAAAAAQABAAABAAQApAZA5AIIAGAAQA2AlALBOIABAGIAEAGIAAABQAmBAAdBKIABACQALAjAKAkQAAAAAAAAQABAAAAABQAAAAABAAQAAAAABAAQAABOAFBLIAAAIIABASQAEA2AGAyIABAFQgOAmggATQgBAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAIgFADQAAgWAZgegAlljUIABABIAAAAIACABIACgBIAAAAIABgDIgDgDIgBgBIgBAAIgGgIIgBgBIgCAAIABAAIAAgBIgBgCIgBgBIgEgCIgBgCIgBAAIgBgBIgDgBIAAAAIgBgCQgHgFgEgGIgBgCIAAgBIgIgKIABgCIgBgXIABgBQACg/gWglIgCgDIACABIAAAAIADAAQAXAPAmABQgMgPgagFQgLgCgDgIQgRg5gNA2IABAFQAYAwAHBCQgBAQACAPIABAAQAFAGADAIIACAAQACAEADACIAAACIABABIABAAIAAABQACAHAHAFIAEABQACAFAEgBQADADAEACgAk9tcIgFAAIgJAGQgRAJgBATQAAABAAABQAAAAABABQAAAAAAABQABAAAAABQAJAGAGgEQAGABADgLIACgEIABgBIADgCIAEgEQANgLgRgKIAAABgATpj0QgMgGgIgOQgEgJgOANIgFgBQglgSAPg1IgFgBQgVgIgOgPQgNgNgIgRIABAAQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABgBQBOg4BHg/IAAgDQBAARgwgeIADgDIgTAOIgCABQhHA3hXA8IgHAFIABABQgHAEgGAFQgGAAgDAFIgLAGIgCgDQABgLgCgMQgCgWgWAAIgCABIAAglIABAAIgBgGIABg3QAcglAggiQAHgHAGgEQAVgNASAPQAPgSADgpQABgMAIgLQgcAFgKAyIAAAGQgQAHgOAIQgoAZgcAlIgBAFQgHglABggQAAgqAOgiIADgOIABgRQAGgjAlgNIAFgBQAJgbgVAUQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAQgkAlg/gPIgFgBIALgRQATggANgmIABgGQgngFAFAyQABANgGAOQgbARgVgOQgIgFgGgIIgEgBQgHgdgkgEIgBAAIgFAAIAAgGIAAgLIAFgCQAcgJALgFIgDgDIgLgNIAGgBIABgBIACgCIAAgBIAAgBIACgBIAAgBIABgCIAAgBIAAgBQAEgGgCgGIAAAAQgCgTAFgKQAEgJAJAAIAAABIABACIANACIADACIgCgCQADABABADIAEABIADgBIABgCIAAgBQgDgQgTAEIAAAAIgDABQgBgFAFgFQAbgkANAaIAIgEQAEgDADgFIAPgDQANAEAAAPQAAARgDAQIgBALQAEgCACgIQAEgPAJgMIAGgGQAEABADAEQADAEABAGIACAIQAXgXAeAMQAGACACAHQACALABALIAAAFQgUAfgjALIAFACQAngHAWgfIAFgIIACACIAUAdIAGAKQAHANAEAOICmA9QAIAMAKAMIAIAIIADAEQAQAIALAKIAEAFQA5BnATB1QANBQAABSIAAATIAAAEIAAABIgBAJIAAAAIgBABIAAABIAAACIgBAPIAAAKIgBABIAAAAIgBABIAAACIABACQgcAIgeAFQgpAIgrAAQgyAAg2gKgAOtt8QgJAOAQAHQAIAEAFgGQAPgTgXgHIgBAAQgHAAgEAHg");
	this.shape_12.setTransform(30.2,65.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ax3TaQg3gIg2AFIgBgBQgagHgWgOQgcAEgaADQg9AEgsgmIgDgCQgKgRACgTIASgVIAQgUQAMgQAFgTQAMgpgFgqQgHg0gOgwIgKglQgGgegNgUIABgUIADg1QABgZgCgbQgNgBgFgOIgCgEIgDgHIgJgWIAEgGIAAgVIACgpQACgTgEgSQgFgTgRgEQAAAEgIABIgNAEQgGABgGgBIgDgFIAGgJQAIgNALgJIgDgNQgUACgTgBIgbgEQgUgDgUgJIAEgOQAEgOAJgKQANgNATgEIgCgaIgBggQhOgEhSANQg8AJg7AAIgDgDIgBgBQh4gbh7AXIgEAFIgaAbQgKAAgJgEQgDgBgCgEIAEgDIAPgFIAFgEIAagbQA+gBA4gMQBZAHBXAKQAOABAPgCQBngUBoAKIABgWIgCgCIgUgPIgTgSIgRgTIgPgVQgIgKgGgMIgMgYIgKgaQgFgOgCgPQgEgVABgZQABgVACgUQABgIADgIQATgvAZgtQALgUAOgWQATgbAUgaQAegmAkghQAqgnAxgeIAdgRQAVgNAYgLQgBgOgEgOIgRhFQgDADgBADQgCAKgJAFQgKgKgBgRIgFgmQgDgPgLgHIgKABIgFAJIgEAHQgEAGgHAAIgCgDIgDgNIACgBQAHgQAFgRQAHgRAPgKIAAgGIAAgFQAlgcgVgmIAFACQAMAEALAGQAMguAVgCIAAAJQARAIAhgcQAOgLAKgQQARgYACAbQgVAkAQgDIAFAAQAnggAkADIgFAGQgGAFgJABIAAgCQglASgoARIAAADQgTAAAZgkQAIgbgXAYQgPAPgNAQQgOASgKADQgKACgGgMIAAgDQgPAdgdARQABAAABABQAAAAABAAQAAAAAAAAQAAAAAAABQAHAeglASIAAADIgWApIAlAFIADAJIADAZQACATAKASQAAgKAFgLQADgJAHgHQAJgGAJAAQAKAPANALQAGAFAGgBQAGgFABgEIACgXQABgPAPgFQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAAAAAQA7ghg8geQAhgRAmgNIAAgDQgIgUA0gMQBHgRg2gGQgagNA0gQQAAAAABgBQAAAAAAAAQAAgBAAAAQAAgBAAgBQgtAQgdgIQgBAAAJgDQADgBADgEQAoAAA4gFIgDAFQhLAUBAAHIAFABQACAhAQANQAQAOAggIIAAgCQA5AAgSAxIAAAFQgiAUAmAkQAAABAAAAQABAAAAABQAAAAAAABQAAABAAABIgfArIAAABQgKANACARIABACQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAIAAABIAAABQAIAAAMAAIgCAEQgBAEgDACQgCgRgPARQgEAEgBgFIgCgNIAAABQAAgJABgIIgBABQADgkAggbQAAgBAAgBQAAgBAAAAQAAgBgBAAQAAAAAAgBQgugoAqgQIABgFQAXgqg0AJQgLgEgFAFIgEAGQgNgNgPgGQgSgHgVADIAAAQIAAAIQgbgLAlgeQgBgYgtAQQgyATAZAKIADAAQg0AaghASQAgANAGATIAAABQgbAPghANQgHARAEASQACAJAHAFIAuACQgNAFgNABIgUACQgGAAgGgCQgHABgDAFIgIAIQgRgIgIgTIgMADQgHAtALArIAIAdQglAZgmAWQgqAXglAdQhOA+guBWQgZAwgTAxQgGAOgIANIgJALQgBA3ADA2QABAJAEAIQAUAoAaAhQAeAnAlAhIgDAQIAFAAIADAEIAFAJIgQgBIgBASQgBAWADAWQgNAOgUADQgLAMAAANQAIAOATgBQAogaAaglQgLAUgHAWQgCAHADAFQARgHAMgPIAIgHIACgBIgRAdQAJADAIgFQAUgQALgUIgGAMQgTApgcAjIgLAPQAegLAXgWIAPgQQAGgJAEgJQAMgXAQgXIAEgCQADgVAHgWQADgIAAgJQAAgUgDgVQgHgwgOgwQgYhPgshEIgBgBIAKgGQAkgUAjgYQAdgSAZgWQAWgUATgTIgGAKQgYAdgdAaQgYATgcARQgXAPgZANIAFALQAWAlAPAoQAOAiAIAmQAIAhAFAfQAeASAjAMQAlANAmAIQBRAOBSADQAmABAogCQAkgBAjgEQAvgEAtgMQADAAADgCIAPgUQATgcAMgfIABgBIALgYIAAAAQAKgmgDgmIgCgqQgBgYgGgVQgKgigTgdIgfguQACgNgKgIIgEgEIgTgcIgNgTQguhFg3hCQgegkghghIgNgOQAagSAWgZIAQgRIACgBIgCAEQgSAdgYAWQASAVARAWQAVAbAWAeQAQAWAOAWIAKAPIAKAPIAKAPIAdAuIACABIACACIABAEIALAMIADAGIADAFIACAEIAEADIACADIADAEIAFAMIACAGIAEAIIAAABIAVAfQAKAPAHAPQAIARAEASIAJAmIAAABIABAeIAAASIAAAZIgCAjIAAAFQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAhgDAigCIABgEQAEgOAIgKIACgEIA7ACIAEAEIAFAIIAJAFIACAEQABAIAJAGIADAAQAigPAFAXIgCACQgVAJgWgCIgFgEQgQgPgLgQIAAgCQgYgBgXABIgCAFIgFASIgCADQgpADgogCIgDgDIgCAMIAAACIgBADIgFAJIgFANIgKAXQgKAVgOATQgYAkgVAoQgOAagMAdQgVA0gKA3QgJAugEAyIgDAZIgBACQgHATgGAVQgHAUgFAUQgLArgJArIAZizQgiACgkAFQgUABgSADIhOARIgaBqIABAMIgFAIIAAAVQgCBBAABAQAAAeAEAhIAFAZIAGAeQADAOAGANQAWAHAWAHQAUAGAWAFQAcAGAXgKIADgDIBSAAIANgHIAEAAQAMgBAMADQAEALAFAKQAEAGAGADQAHACAGgCQALgEAJgFIgFgFQgIgFABgHQAKgJANAAIAfgGQATgFAQgNIgGAAQgfgCghgFQgngFgogKIgigJQgJgDgJgEQgEgBgCgEQgHgKgDgLQgFgVgEgVQgFgiABghQAAgiAFghQAAApACApQADAkALAiQAGAVAKATQAIARATAAIARADQAcAIAcgBQAXACAYAEQAdAGAcAJIgKAaQgHARgSAKQgMAHgNAEIgPAGQgdAHgcAFIgkAJQgMACgLAEQgOAEgOAGQguAUgvASQgUAIgUAEIgIAAIgIAAgAxxTTIAMAEIAJgDIAMgTIgFgCIgBgDIAQAGQAGACAGACIADgFIACgFIAAgFQgDgEgFgDQgHgGgIgEIgLgEIAaAGIABAAIAUAGIAIABIAEAAIAAAAIgfgPIgIgEIAFAAIAEAAQALACAJADIAWAEIAKgDIAOgHIgtgYIACAAQAGAAAHABIASAGIAQAFQAIAEAIgHQAGgEAAgIIgBgOIgBgIIgLgDQgMgCgMAEQgHADgGAFQgGAGgFAHIgBACIgVgHIg/gVQgXgJgXgFQAAgBgBAAQAAAAgBgBQAAAAgBAAQgBAAAAAAIgFgDIgBgDIgHgaIgGggIgEgfIgEg4IgCgtIABgtIABghIABggIAEgKIACgFIAFgQIAHgaIALgnIAIgaIhcAfIgkAHIgZgCQgUgEgSgHQgPgGgQgDQgMgCgNAAQgQADgKAQIgHALIAAAhQAAAUADASQACAMAEAOIAIAZQAGAUAFATIAGAbIAGAaIAFAcIAHAnQADAQgGARIgHAYIgHAZIgGAbQgDAOgBAPQgBAIABAIIgUgBIgCADIgCALIgBAMQAOAIAPAHQAQAGARAFQAfAFAggFIAdgEIAmAOQARAFASAEQAaAFAbgGIAWgGIAQANgA12E6IgGAfIgEAPIgEAOIgFAOIgFANIgMAZIgOAWIgQAUIgTASIgKAIIAJATQAEAJACALQABAFAAAHIAAANIAAANIAAAMIAAAZIABAZIACALIABAGIANASIAEACIACADIABACIABABQAKAEALACQAUAHAVAFIAUADIAVADIAUACIAVAAIApgDQAUgDAUgFQAUgDAUgHQAVgGAUgHIAUgKIABgTIADgfIABgOIABgPIACgQIACgOIAEgfIAFgdIAFgeIAHgfIAHghIgBASIgFAgIgDANIgCANIgBANIgCAOIgCAbIgDAbIgBAcIgBAaIgBAcIAAANIASADIAdADIAPAAIAOgBIAOgBIAOgCIAcgHIAFgVIAJgpIAEgUIAEgUIAFgUIAFgTIAMglIANgjIAOgiIAOghIAIgQIiOABIghABIgcAAIgEAAIgVAAIgWgBIgUgBIgVgBIgogFIgngFIgkgIIgkgJIgigJIgigMIgDARgAK+SgQgFgLgEgLIgKggQhhkzgllwIAAgFIgBgGIgGg7IgQiWIgCgQIgTjQIACgeIABAHIABAAQAAgPgCgOIgBgFQgEgNABgQIAAgDQgFgigBgkIgCgeIABgCIABgBIAChDIABgUIABgHIABgQIABgPQADgOgBgPIAAgDQAFgWgCgWIAAgCQAAgWABgVIABgeIAAgCIABgCIAAgaIAAghIAAgaIABg5IAAgDIgBhMIACAiIAAgRIABg7IAAgQIABgxIAAgBIABgCIAAgFIABgNIAAAAQAKicAuh3IADgHQAUgyAagrQAAgBABAAQAAAAAAAAQABAAAAAAQABAAABAAIAAgGQAigdAvgRIABgEIBNAAIAFAAQCSBYgJD3QgBAagFAVIAAACQACADgBAFIgBADIgBAGIAAAEIgCARQgBAEAAAEQABAEgDADIgBAJIAAAGQAAAKgDAKIAAAAIALgCIAAgBQABgCADgBIACgCIABAAIAPgHIAAgBIADgBQASgJARgMQAAgDAEgBIACABIABABQABAJAEAIIABADIADADIAAABQAIgBAKACQALABAGAFIgFACQgKAEgGAHIADADIAMAFIAHACQAlAHAPAiIgNAAQgNAAgHAJQACAGAEAGQAGAKAKAIQAFAEgBAFIgEABIgNgEIgHAGQgCAOADANIAFAQIAIAVQAGANAHALIAPAZIAVAFQBBAPA5AjIAFAAIAVARIACACQAOAUAUAMQAFADAJAKIACACQAWAdAPAhQALAXAIAYQAlBygDB4IgBAsIABAAIAAABQACAQgCAQIgBACIAAABIgBABIgBAaIAFgCIAFgBIgBAEQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAIABAGIAAAAIABACIABABIADADIABACIAAACIABABIADABQADAKgBAMIAAAFIAAABIABAAIgBAIIAAAAIABAIIgBAAIgCAAQAABQgOBDIgBAHIADgEIABgDIAEgEIACgBIAKgEIADgEIADgCIABgCIAAgBIA4AGIAQACIAEAEIAbAbIAEAEQBWAGBXACIAVAAQBgABBigDIADAAIAEAEIAEAEIAEAFIACAEQA/ADA/AFQAJABAIADIAEAEQAIAKAMAEIACADIAEAJQACAIAFAEIABABQAbANANAQIgCACQgNABgNAAIgDgEIgCgEIgCgEIgLgFIgLgFIgDgGIAAgDIgBgFIgBgEIgCgCIgLgEIgEgEIgEgGIgBgDQgIgEgJgBQg/gEg+gBIgFgFIgDgEIgCgFIgCgEQhhAChhgBIgYAAQhWgChXgFIgEgEIgDgDIgYgXIgHgHQgLgDgLgBQgUABgTADIgDACIgCABIgLAEIgCADIgGAFIgHAFIgGgBIgCAJQgSBFgqAuIgBABIgPAPIgGAFIAAAGIgBAFIgBAEQgnBUgjBYQBDBZAnB6QAcBbA/A8IAFAAQAnAQALAsQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgfAtgyAbIAAAGIgFBIIgBADQg6Aygig7QAAAAABAAQAAAAABAAQAAgBABAAQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAIAgAVQAQAKAJgGQAMgGAIgIQABgogEggIADAAQAogqAuglQABAAAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQgKgogngMQAAAAAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQgngdgagpQgJgOgHgPQgJgVgFgTQgiiLhUhUQAthZAphcIABgFQABgGADgEIAFgFIACgBQhOgDhCgLIgqgJIgBAGIgQApQgVA+gLBJIAABHIAAAFQB8CKBmCeIAYAnQABABAAABQAAAAAAABQABAAAAABQAAAAAAABQgKByhaAgQgHACgIAAQguAbAtgEQADgBAFgDQAEgCAFgBQAVgKgVAmIAFgBQAMgDAFgNQAZAAgFAYQAAABAAABQAAAAABABQAAAAABAAQABAAABgBQAJgEAHgJQAJgPALAOIgFAAQgDAZgTAAQhUAAgag6IAFgBQAcgQAmgGQABAAABAAQAAAAABAAQAAAAABAAQAAgBABAAQAygrARhMQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQh0i/iMimIABgGQAGggABgcQAAgVgCgSQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABQgeAjgiAfQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAQAMAWAHAYQAYBNgLBnQgJBQAQBCQAAAAABABQAAAAABAAQAAAAABAAQAAABAAAAQAqBHAPBGQAAADgBACQgOAdgiAKIgGAAQgqgEgtgCQAAABAAABQAAAAgBABQAAAAAAAAQAAAAAAABQgVAIgRALIgFAAIgyAAIgEABQglAkgxAAQggAAglgQgAIglAIAAAEIgBAtIgCAYIAAAPQAAAkgDAjIABAdIAAAiQgBAmACAlIgBAQIAAABQAHBvAJBvQAIBUAJBRQAJBSALBQIABAGQAxEzBJEYQAGAYAOAOQAaAMAogCIAGAAQAlgUAbgeQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBIAAgFQA7h9AGi7IAHjiIAEjVIABhjIAAgcQAAh+gDh6IgBAAIgBgBIgBgBQACgVgBgWIgBgcIgGhJIgBgYIgBg7IAAgGIgBgLQAIgjgBgpQAAgWgDgZQgDggAUgQIADgNQAEgPgNAAIgFAAQgbgFgYgIQgYgHgUgKQghgRgagXIgJgIQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgNgOARgKIAHgGQAMgMAEgVIABADIADAFIAAAAIAGgCQAFgHABgHIABgBIAAAAQgKgFAMgRIAGgIQAZgoghAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgLAJgEAPQgCgMgIAHIgHAHQgYAUgOgLQAogagJgJIgPgDQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgjAZgIgXQAmgPAUgYIgIAAQgzADATgMQAAAAABgBQAAAAABAAQAAAAABAAQABAAAAAAIAsgRIAagKQACgBACgEQAAAAAAgBQAAAAABAAQAAAAABAAQAAgBABAAQAzAJAEgjQAAAAAFAFQAIACAJgBQgBgCACgEIACgDIAAgBIACgIIADgTQgCgCABgGIABgFIADgXIAAgFQABgJAAgJQAAgJACgIIABgBIAAgMIAAgBIgBgKQgIiEgphmQgPgpgbghQgXgKgagJIAAgDQhdAAguAwQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAQgbAsgNAzIgCAGIgBADQggCCgQCOIgDAbIAAAAQADAHgBAHIgDAdIgCARIgBAeIAAAtIAAAOIAAAfIAAAdIAAAqIACAsIABAuIACAhIAAAGIADABIADAMIAAASIgBAAIABA0gAIMsqIAAACIgDARIAAACQACAFAAAGIgCAeIgBAmIAAAWIgBAoIAAATIAAAaIAAAhIgBAxIABAiIAAAtIAAAOIAAABQgCAEAAAEIABAdIAAALIABAHIAAACQgBATgDARIgBAPIgDAlQgFAkAAAlIAAAoQACALgBAMIABAiIABARIAFAsIADAdQACAKgDAIIAJB6IAAAAIAIBkIACAQIADAjIAAAAIAMBzIAEAnIAAAFIABAGIABAKIAAAFIALBiQAlE7BUELIAIAZQAGARAWANQgMgZgKgjQgLgigJgrQgzjwgsj3IgCgQIAAAAQgJg9gIg+IgFgnIgMhyIgFgzIgIhkIgIh9IgCgBIgBgwIABgZIABglIAEhDIAAgpIAAgDIAAgBIABgBIABgRIAAgCIAAgDIAAgNIAAgFIAAgFIAAhBIAAgeIgHAAIAAgFIgBgeIABgOQAAgEgCgCIAAAAIACgPIAAgFIgBgZIgBgPIAAgtIAAg7IAAgMIAAgtIAAgDIgBg7QAAgPADgPIABgFQACgTAAgRIABgCIABgBIABgZIAAgBIAEhRQgIAogGApgAPCF2IgMDUIgFBeQgNDKAGC2QgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQgkAbgUArIgBAFIgFAGQApALAjgYQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAgBQBUAKAwgZIAFgBQgPhTgng8IgBgFQgbg6ANhZQANhYgRhAIgBgGQgMgqgYgfQALgDAHgGQABgBAAAAQAAAAABgBQABAAAAAAQABAAAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAigeAbgmQAcgpATgzQAIgWAGgZIACgIIgFgBIgjgRIgUgKIgFAAQg8ACgcgdIgFgDIgEBLgASSFfQAFADAEABIgEANIgBAFICfADIAAgDQBIhxALiwIABgIQgEgMAAgOIAAgEIgDgFQgGgDgIgCQgVgFghAHIgBAAQhhAUhegPQgjgFgigKIgBAFQgiBLglBKIAAAAIgBAEQgTAxgdAnQACAOAKAHQAAAAABABQAAAAABAAQAAAAABAAQABABAAAAQASgEANgRQAGADAFgCIgNAfIgBAFQAlAJAtACIAGAAIAAgDQAShdAehQIAAgBQgPBagTBXQgEAQAYAMIAIADIAHACQAPABALgJIADACgAQCk+QgHAEgHAHQgfAigdAlIAAA3IAAAGIAAAlQgFACgCAGQgDAMAIAJIAAAkQAAAHAGADIgBAAIAAAAIgBACIABAHIABAEIACAIQACAPgDAPIAAABQAECGgBB8IAAAGQAYgiATgmIABgFIABgFQAihGAchOIAIgWIgBgEQgLgZAHgTQgBAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgKgRgMgKQgKgIgMgEIABgMIgDgEIgUALIgGAEIgLAHQAAgFgDgFIAMgGQADgFAGAAQAFgFAHgEIAAAAIAHgFQBXg9BHg2IABgBIATgPIgCADQAwAehBgQIAAACQhHBAhOA3QAAABgBAAQAAAAAAABQgBAAgBAAQAAAAgBAAIAAAAQAIARANANQAOAPAUAIIAFACQgOA0AkAQIAFABQAOgNAFAJQAHAOANAGQBkASBYgPQAdgFAcgJIAAgBIAAgCIAAgBIABgBIAAgBIABgKIAAgMIAAgDIABgBIAAAAIAAgBIABgJIABgBIAAgDIAAgTQgBhTgNhQQgTh1g4hnIgFgFQgLgJgPgJIgDgEIgIgIQgLgMgHgLIing9QgEgPgGgMIgHgLIgUgdIgBgCIgFAIQgXAfgmAHIgGgCQAjgKAUggIAAgEQAAgMgDgLQgCgGgFgDQgegMgYAXIgBgIQgBgGgDgEQgDgDgFgCIgFAGQgJANgEAPQgCAHgEACIABgKQACgRABgRQAAgPgOgEIgPADQgCAFgFADIgIAFQgNgbgbAkQgFAFACAFIACAAIAAgBQAUgEADAQIgBABIgBACIgDABIgDgBQgCgDgDAAIACABIgDgCIgMgCIgBgCIgBAAQgJgBgEAKQgEAJABATIAAABQACAGgDAFIgBABIAAABIAAACIgBABIgBACIAAABIAAABIgDABIgBABIgGABIAMAOIACACQgLAFgbAKIgFACIAAAKIAAAGIAFAAIAAAAQAlAEAHAdIAEABQAGAIAHAFQAVAOAcgRQAFgOgBgNQgEgyAmAGIgBAFQgMAmgTAgIgMASIAGAAQA+AQAkgmQABAAABAAQAAAAABAAQAAgBABAAQAAAAABgBQAUgUgIAbIgFABQglANgHAkIgBAQIgDAOQgNAiAAAqQgBAgAHAlIABgEQAbgmApgYQAOgJAPgHIABgGQAJgyAdgFQgJALgBAMQgDApgPASQgKgIgKAAQgJAAgJAGgAQhpoIgBgDIgBgSIgHg5IAFAGIgYgmIATAAQAJABAFgIQgDgFgFgDIgbgLIgBgCQgiAHgggMIAFgGIAQgCIAMgCQAKAAAEgHIgTgJIABAAIgDgHQAAgDgCgDIgBgBQgPAHgNALIgEADQgJACgJAFQgEAEgGgCQgHAGgFAJQAAAJgKgFQgHgEgDAFQgIAOgxgDIAGAGQgSALggAEIgWACIARADIAFACQAfALgfALIgKACIgBAEIALABQARABAQAAQAegBAegHQARgEAFAPIAAgLIAmACIAEAHQAFAJAIAHIAFAEIAGADQARAEAKgOQATAAAPAIQASAKAEAUIACAJIABADIAAAAgAOatsIgBAOIACgMIAAgFIgBADgA7iSbQABgigXgJIgFgBQgsAOgrgRQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAgBQArgLAFgSQACgDgGgGQgpgMAegJIAGgBQAzAGAugHQAXgDAWgHIgCAFQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBABAAAAQgSAYA+gDIAQAAQgbAdgxAHIgBADQgIAggPAPQgJAIgMADgA7nRpIADABQAGA2ANgbIAEgLQAJgVAVgJQAhgQAJgJIgFABQhFADAfgaQgDgCgCAAIgYAEQgQACgQABQhNABAnAVIABAGQADAOgwANIAAADQAhgEAaAAIAdABgAoWR0IgFgBQg1gXgjgqQAYgNALgdQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAAgFQASgQAMgWQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAWiagjiPQgDgNAAgOQARgcAJgmIABgFQgNhFgDhOIgBgGQACgTAJgMIAAgBIgOgBQgLgBgKgFIgDgDQgHgDAAgEIAAgFQgEgKACgNQAEgVAAgXQAAgNADgNIABgBIABAAIABgXIABgCIAAgBIAAAAIABgIIAAgDIABgCIAFguQAFgzAIgzIgBgDQgVgVgWgTIgBgFQgghFALheQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAAAQgUgZgMgfIAAgGIAAgmQANgnAYgcQABAAAAgBQAAAAAAgBQABAAAAgBQAAgBAAAAIAAgGQA7gZAzgiIAFgBQAJg/glgkQgGgHgJgGQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAEgaAAgMQAChNghAQQgSAHAQgeQALgSAEgQQABgEgZgQQAQgGAWAAIgCAAIgBgEIABgCIAQgCIACgEIABgBIASgDQABgRgBgRQAAgFABgFIABgBIACAAIACABIAEAEIABABQAEANAIAKIABABIAEAAIAKgMIABAAQAKgEAKgDIAGgEIABgBIABgDIAAgCQAEgCACADIABABQAcgOATAMIgDAAQgaAZBMABQARAAgGAIQgnAIAdAfIACADQAFACACAFQASASAPAWIAcAqIgaAiIgBAFQAIA5gYAaIgBAEIgMADQgiAMAQAnIAAABIADAAQAmAWA3AFIAFAAQBAAmANBZIAAAFQAxA0ALBbIAAACQgchKgmhAIgBAAIgEgHIAAgFQgMhPg2glIgFAAQg6gIgpgZQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgeg4A3gDQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAVgUAAgeIgBAAQgJAHgKAAQgeACgdgDIgHgBQgHgCgEgDIgBAEQgEAJgKgBQgOgBAGgNIABgCIAAABQAJAFADgJQAIgTgPgFIABgEIADgDIAEgBIACACQgBACABAEQADAPAOAFIAEACQAgAIAhgFQAWgEgHgTIgCgBIgBgDIABgGQAJgTARgOQgJgOgFgLQgPgdgTgXQAAAEgFACIgKADIgBABQgBAFgDACIgCABQgIARgLgOQgDgDABgFQADgOAMgKIAFAAIAAgBQAGgCAFABQgSgRgVgOIgDAMQgTAPgmAHIgEABQgJAHAIATQgLAFgMAEQgIACgCADIg3BVIAAAEIAAABIAAAGQABAGAKgFIAOgIQAGgDABAHQAEAOgDAGQAAAAgBABQAAAAAAABQgBAAAAAAQAAABgBAAQgGABgNgLIgBAGQgEAQADAIQAHAPAngXIgBAFQgSAoACBBQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAQg0Ang+AdQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAAAQgWAcgKAoQgDBCAoAUIACABIAAgBIAAgEQACgWADAWQgBAfgOATQAAAAAAABQgBAAAAABQAAAAAAABQAAABAAABQAACIBjApIAFABIAAgBIAAgDIACAEIANABIADgEIAJAAIABABQBFAeBfgRIABgEQATgdAHAWQALAAAAgBQALhDAbg4IAAgCIgBAAIgIAEIAHgGIAOgJIADgDIAGgFIACgCQgPAigTAZIABAGQAIA3gZAsIAJBVIABABIAMBTIAAABIAAABIAAACQAJA1AKAvIgDAAQgaACAHBAQADAhAAAhQAcCcAJC3QADA0AJA1QgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQgKgbgOgVQADgigEgWQgOhQgHheQgJiGgCiYIgBgDQgTgQgzAIIgGAAIgbAAQAFAUAIASQAAAAABAAQAAABAAAAQABAAAAAAQABAAAAAAQgEBGAMAzIgCAAQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAhCOATCaQAIBDgQAwQgDBXBxgYQAQgCARAAQArAjA8gLIABgDQg3gVAsAAIAFAAQgVgMgygMQgpgJgZgcQAuAVAxAIQA7ALAmAaQAAAAgBAAQgBAAAAAAQgBAAAAABQAAAAAAAAQgTAigxADQgqgKghgPQgQgIgMADQhjAUgig9QAVh5gahxQgXhkgQhuIAGgEIAFgBQgFgWAAgWQAChPgogeIAAABIgBACIgHABQgOANgDAaQgFAygLAtQgFAWgHAVIAAAUIAAABIAAAAIABABIAAABIAAABIABADQABACAAADIABACIABACIAAAAQAMAdgIArQgcCTALCrIgDAAQgBAVgMAHIAAAFIAAAmQgBAAgBABQAAAAgBAAQAAAAgBAAQAAABAAAAQgMANgBAYQAAAAgBAAQgBAAAAAAQAAAAgBABQAAAAAAAAQgFAQgUAAIgKgBgAoLRvIAFAAQAWgeAAg0IAAgGQAPgMAEgZIADgBQgHhTAEhNQAEhNAPhHQAGgbAAgbIgDAAIgCglQgFhkAlhiIgDABQgOAEgTgEIgBAAQgRAAgRgDIgPgBQgdAFgLAZIABAGQAKBVAGBVIgDAAQgKAfgPAXQAAAZAHAWQATBAADBFQACBFgOBLIgEABQgOAYgUATIgBAEQgJAVgSAMIAjAKQAKABAEAWQAAAAAAAAQABAAAAAAQABgBAAAAQABAAABgBQAIgIAKgGQgWAtAngBgAoWB0QghADgDAnIgKBeIABAAQABAHgBAHIAAACQgEALABAMIAAACIgBACIgBACQgEAoAAApQAEAMAGAFQAIAEAIAAICSAGIAYgEIAGgBQAAhJADhKIACAAQAKA9gBBMIACAAIAGAAQA+ABA1gHIgBgFQghh5gPiJQg2APhCgGQhAgFgpgKIgLABgAiXFvIAAgEQgJhEAqgqQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAABgBAAQgbAWgiAPQgSADgBgFIgBgBIABgEQAVgqAngcIAIgFIABgFQABgNgCgJIgCgIQgohKgHhnQgBAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgHgLgJgIQgIgIgJgGIgHgEIACgBIAGgJIABAAIABgBIAHgGIABAEQgBATANAMQAFAEAGAEIAHADQABABAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQANBmAhBRIACAEIABADIAAAAQAEAKAAAIQAAAIgEAHQglAggeAlQAAABgBAAQAAABAAAAQAAABAAAAQAAABABAAQABAAAGgCIAAgFQApgMAagZQABAAAAgBQAAAAABAAQAAAAABAAQABgBAAAAQARAcAAAsIAAAFQgcAeAAAXIAGgEQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAAAgBQAigSAOgmIAAgGQgGg0gEg2IgBgRIAAgIQgFhLAAhPQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQgLgigNgiQAOAFAEAQIADABQAVBrAFB8IAFgFIAJgCQAjgGAhgDIADAAIAAgBIBqACIADAEQAHALAIALQCRACCYgCQAGAAAGAEQAeAUApgFIAAAFQgpATgkgZQgGgEgFABQiXAFiWAAIgCgEQgCgMgLgKQgygJg0ADQgeACghAHQgMABgHALQABAtAAAvIAAAFQgUAegZAYIgFABQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAAAQgIAGgHAAQgLAAgGgPgAkODTIABgDIANADIAsgKIgCAAIACgDIABgCIAPABIADgBIAaAEIAeAEIgBACQAAABgBAAQAAABAAAAQgBAAAAAAQAAABgBAAIgOgBQgrAMgtgCIAAAAQgJAHgHAAQgIAAgDgOgAnNBCIgBAAIAAAAQgEgCgDgDQgEAAgDgEIgDgCQgHgFgCgHIAAgBIgCAAIAAgBIgBgCQgDgCgCgEIgCAAQgDgIgEgFIgCgBQgBgPAAgOQgGhCgYgwIgCgFQAOg2ARA5QACAIAMACQAZAFANAPQgmgBgXgOIgDgBIgBAAIgBAAIABACQAXAmgCA+IgBABIAAAVIAAACIAIAKIAAABIAAACQAFAHAGAEIABACIABAAIACABIACABIAAABIABABIAFADIAAAAIABACIAAABIAAAAIABAAIABABIAGAIIACAAIABABIADAEIgBACIAAAAIgCABIAAAAIgCgBgAnEoeQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAQABgUAQgJIAKgFIAEgBIABAAQARAJgNALIgEAFIgDABIgBACIgCADQgDALgHAAIgEABQgEAAgGgEgAxWpOQABgHAFgHIAEAAIAAgBQALAJAAAQQAAASgLAIQgPgOAFgWgANLpPQgQgIAJgOQAEgIAHABQAYAHgQATQgDAEgEAAIgFgBg");
	this.shape_13.setTransform(40.8,37.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(3,1,1).p("EAh6AYhMgm6AAAEgh5gYgIAAAQIAAdUIAAACIAATbIc0AA");
	this.shape_14.setTransform(40.6,41.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFF99").s().p("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");
	this.shape_15.setTransform(40.7,78.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("Ax3TaQg3gIg2AFIgBgBQgagHgWgOQgcAEgaADQg9AEgsgmIgDgCQgKgRACgTIASgVIAQgUQAMgQAFgTQAMgpgFgqQgHg0gOgwIgKglQgGgegNgUIABgUIADg1QABgZgCgbQgNgBgFgOIgCgEIgDgHIgJgWIAEgGIAAgVIACgpQACgTgEgSQgFgTgRgEQAAAEgIABIgNAEQgGABgGgBIgDgFIAGgJQAIgNALgJIgDgNQgUACgTgBIgbgEQgUgDgUgJIAEgOQAEgOAJgKQANgNATgEIgCgaIgBggQhOgEhSANQg8AJg7AAIgDgDIgBgBQh4gbh7AXIgEAFIgaAbQgKAAgJgEQgDgBgCgEIAEgDIAPgFIAFgEIAagbQA+gBA4gMQBZAHBXAKQAOABAPgCQBngUBoAKIABgWIgCgCIgUgPIgTgSIgRgTIgPgVQgIgKgGgMIgMgYIgKgaQgFgOgCgPQgEgVABgZQABgVACgUQABgIADgIQATgvAZgtQALgUAOgWQATgbAUgaQAegmAkghQAqgnAxgeIAdgRQAVgNAYgLQgBgOgEgOIgRhFQgDADgBADQgCAKgJAFQgKgKgBgRIgFgmQgDgPgLgHIgKABIgFAJIgEAHQgEAGgHAAIgCgDIgDgNIACgBQAHgQAFgRQAHgRAPgKIAAADIgWApIAlAFIADAJIADAZQACATAKASQAAgKAFgLQADgJAHgHQAJgGAJAAQAKAPANALQAGAFAGgBQAGgFABgEIACgXQABgPAPgFQgHARAEASQACAJAHAFIAuACQgNAFgNABIgUACQgGAAgGgCQgHABgDAFIgIAIQgRgIgIgTIgMADQgHAtALArIAIAdQglAZgmAWQgqAXglAdQhOA+guBWQgZAwgTAxQgGAOgIANIgJALQgBA3ADA2QABAJAEAIQAUAoAaAhQAeAnAlAhIgDAQIAFAAIADAEIAFAJIgQgBIgBASQgBAWADAWQgNAOgUADQgLAMAAANQAIAOATgBQAogaAaglQgLAUgHAWQgCAHADAFQARgHAMgPIAIgHIACgBIgRAdQAJADAIgFQAUgQALgUIgGAMQgTApgcAjIgLAPQAegLAXgWIAPgQQAGgJAEgJQAMgXAQgXIAEgCQADgVAHgWQADgIAAgJQAAgUgDgVQgHgwgOgwQgYhPgshEIgBgBIAKgGQAkgUAjgYQAdgSAZgWQAWgUATgTIgGAKQgYAdgdAaQgYATgcARQgXAPgZANIAFALQAWAlAPAoQAOAiAIAmQAIAhAFAfQAeASAjAMQAlANAmAIQBRAOBSADQAmABAogCQAkgBAjgEQAvgEAtgMQADAAADgCIAPgUQATgcAMgfIABgBIALgYIAAAAQAKgmgDgmIgCgqQgBgYgGgVQgKgigTgdIgfguQACgNgKgIIgEgEIgTgcIgNgTQguhFg3hCQgegkghghIgNgOQAagSAWgZIAQgRIACgBIgCAEQgSAdgYAWQASAVARAWQAVAbAWAeQAQAWAOAWIAKAPIAKAPIAKAPIAdAuIACABIACACIABAEIALAMIADAGIADAFIACAEIAEADIACADIADAEIAFAMIACAGIAEAIIAAABIAVAfQAKAPAHAPQAIARAEASIAJAmIAAABIABAeIAAASIAAAZIgCAjIAAAFQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAhgDAigCIABgEQAEgOAIgKIACgEIA7ACIAEAEIAFAIIAJAFIACAEQABAIAJAGIADAAQAigPAFAXIgCACQgVAJgWgCIgFgEQgQgPgLgQIAAgCQgYgBgXABIgCAFIgFASIgCADQgpADgogCIgDgDIgCAMIAAACIgBADIgFAJIgFANIgKAXQgKAVgOATQgYAkgVAoQgOAagMAdQgVA0gKA3QgJAugEAyIgDAZIgBACQgHATgGAVQgHAUgFAUQgLArgJArIAZizQgiACgkAFQgUABgSADIhOARIgaBqIABAMIgFAIIAAAVQgCBBAABAQAAAeAEAhIAFAZIAGAeQADAOAGANQAWAHAWAHQAUAGAWAFQAcAGAXgKIADgDIBSAAIANgHIAEAAQAMgBAMADQAEALAFAKQAEAGAGADQAHACAGgCQALgEAJgFIgFgFQgIgFABgHQAKgJANAAIAfgGQATgFAQgNIgGAAQgfgCghgFQgngFgogKIgigJQgJgDgJgEQgEgBgCgEQgHgKgDgLQgFgVgEgVQgFgiABghQAAgiAFghQAAApACApQADAkALAiQAGAVAKATQAIARATAAIARADQAcAIAcgBQAXACAYAEQAdAGAcAJIgKAaQgHARgSAKQgMAHgNAEIgPAGQgdAHgcAFIgkAJQgMACgLAEQgOAEgOAGQguAUgvASQgUAIgUAEIgIAAIgIAAgAxxTTIAMAEIAJgDIAMgTIgFgCIgBgDIAQAGQAGACAGACIADgFIACgFIAAgFQgDgEgFgDQgHgGgIgEIgLgEIAaAGIABAAIAUAGIAIABIAEAAIAAAAIgfgPIgIgEIAFAAIAEAAQALACAJADIAWAEIAKgDIAOgHIgtgYIACAAQAGAAAHABIASAGIAQAFQAIAEAIgHQAGgEAAgIIgBgOIgBgIIgLgDQgMgCgMAEQgHADgGAFQgGAGgFAHIgBACIgVgHIg/gVQgXgJgXgFQAAgBgBAAQAAAAgBgBQAAAAgBAAQgBAAAAAAIgFgDIgBgDIgHgaIgGggIgEgfIgEg4IgCgtIABgtIABghIABggIAEgKIACgFIAFgQIAHgaIALgnIAIgaIhcAfIgkAHIgZgCQgUgEgSgHQgPgGgQgDQgMgCgNAAQgQADgKAQIgHALIAAAhQAAAUADASQACAMAEAOIAIAZQAGAUAFATIAGAbIAGAaIAFAcIAHAnQADAQgGARIgHAYIgHAZIgGAbQgDAOgBAPQgBAIABAIIgUgBIgCADIgCALIgBAMQAOAIAPAHQAQAGARAFQAfAFAggFIAdgEIAmAOQARAFASAEQAaAFAbgGIAWgGIAQANgA12E6IgGAfIgEAPIgEAOIgFAOIgFANIgMAZIgOAWIgQAUIgTASIgKAIIAJATQAEAJACALQABAFAAAHIAAANIAAANIAAAMIAAAZIABAZIACALIABAGIANASIAEACIACADIABACIABABQAKAEALACQAUAHAVAFIAUADIAVADIAUACIAVAAIApgDQAUgDAUgFQAUgDAUgHQAVgGAUgHIAUgKIABgTIADgfIABgOIABgPIACgQIACgOIAEgfIAFgdIAFgeIAHgfIAHghIgBASIgFAgIgDANIgCANIgBANIgCAOIgCAbIgDAbIgBAcIgBAaIgBAcIAAANIASADIAdADIAPAAIAOgBIAOgBIAOgCIAcgHIAFgVIAJgpIAEgUIAEgUIAFgUIAFgTIAMglIANgjIAOgiIAOghIAIgQIiOABIghABIgcAAIgEAAIgVAAIgWgBIgUgBIgVgBIgogFIgngFIgkgIIgkgJIgigJIgigMIgDARgAK+SgQgFgLgEgLIgKggQhhkzgllwIAAgFIgBgGIgGg7IgQiWIgCgQIgTjQIACgeIABAHIABAAQAAgPgCgOIgBgFQgEgNABgQIAAgDQgFgigBgkIgCgeIABgCIABgBIAChDIABgUIABgHIABgQIABgPQADgOgBgPIAAgDQAFgWgCgWIAAgCQAAgWABgVIABgeIAAgCIABgCIAAgaIAAghIAAgaIABg5IAAgDIgBhMIACAiIAAgRIABg7IAAgQIABgxIAAgBIABgCIAAgFIABgNIAAAAQAKicAuh3IADgHQAUgyAagrQAAgBABAAQAAAAAAAAQABAAAAAAQABAAABAAIAAgGQAigdAvgRIABgEIBNAAIAFAAQCSBYgJD3QgBAagFAVIAAACQACADgBAFIgBADIgBAGIAAAEIgCARQgBAEAAAEQABAEgDADIgBAJIAAAGQAAAKgDAKIAAAAIALgCIAAgBQABgCADgBIACgCIABAAIAPgHIAAgBIADgBQASgJARgMQAAgDAEgBIACABIABABQABAJAEAIIABADIADADIAAABQAIgBAKACQALABAGAFIgFACQgKAEgGAHIADADIAMAFIAHACQAlAHAPAiIgNAAQgNAAgHAJQACAGAEAGQAGAKAKAIQAFAEgBAFIgEABIgNgEIgHAGQgCAOADANIAFAQIAIAVQAGANAHALIAPAZIAVAFQBBAPA5AjIAFAAIAVARIACACQAOAUAUAMQAFADAJAKIACACQAWAdAPAhQALAXAIAYQAlBygDB4IgBAsIABAAIAAABQACAQgCAQIgBACIAAABIgBABIgBAaIAFgCIAFgBIgBAEQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAIABAGIAAAAIABACIABABIADADIABACIAAACIABABIADABQADAKgBAMIAAAFIAAABIABAAIgBAIIAAAAIABAIIgBAAIgCAAQAABQgOBDIgBAHIADgEIABgDIAEgEIACgBIAKgEIADgEIADgCIABgCIAAgBIA4AGIAQACIAEAEIAbAbIAEAEQBWAGBXACIAVAAQBgABBigDIADAAIAEAEIAEAEIAEAFIACAEQA/ADA/AFQAJABAIADIAEAEQAIAKAMAEIACADIAEAJQACAIAFAEIABABQAbANANAQIgCACQgNABgNAAIgDgEIgCgEIgCgEIgLgFIgLgFIgDgGIAAgDIgBgFIgBgEIgCgCIgLgEIgEgEIgEgGIgBgDQgIgEgJgBQg/gEg+gBIgFgFIgDgEIgCgFIgCgEQhhAChhgBIgYAAQhWgChXgFIgEgEIgDgDIgYgXIgHgHQgLgDgLgBQgUABgTADIgDACIgCABIgLAEIgCADIgGAFIgHAFIgGgBIgCAJQgSBFgqAuIgBABIgPAPIgGAFIAAAGIgBAFIgBAEQgnBUgjBYQBDBZAnB6QAcBbA/A8IAFAAQAnAQALAsQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgfAtgyAbIAAAGIgFBIIgBADQg6Aygig7QAAAAABAAQAAAAABAAQAAgBABAAQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAIAgAVQAQAKAJgGQAMgGAIgIQABgogEggIADAAQAogqAuglQABAAAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQgKgogngMQAAAAAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQgngdgagpQgJgOgHgPQgJgVgFgTQgiiLhUhUQAthZAphcIABgFQABgGADgEIAFgFIACgBQhOgDhCgLIgqgJIgBAGIgQApQgVA+gLBJIAABHIAAAFQB8CKBmCeIAYAnQABABAAABQAAAAAAABQABAAAAABQAAAAAAABQgKByhaAgQgHACgIAAQguAbAtgEQADgBAFgDQAEgCAFgBQAVgKgVAmIAFgBQAMgDAFgNQAZAAgFAYQAAABAAABQAAAAABABQAAAAABAAQABAAABgBQAJgEAHgJQAJgPALAOIgFAAQgDAZgTAAQhUAAgag6IAFgBQAcgQAmgGQABAAABAAQAAAAABAAQAAAAABAAQAAgBABAAQAygrARhMQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQh0i/iMimIABgGQAGggABgcQAAgVgCgSQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABQgeAjgiAfQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAQAMAWAHAYQAYBNgLBnQgJBQAQBCQAAAAABABQAAAAABAAQAAAAABAAQAAABAAAAQAqBHAPBGQAAADgBACQgOAdgiAKIgGAAQgqgEgtgCQAAABAAABQAAAAgBABQAAAAAAAAQAAAAAAABQgVAIgRALIgFAAIgyAAIgEABQglAkgxAAQggAAglgQgAIglAIAAAEIgBAtIgCAYIAAAPQAAAkgDAjIABAdIAAAiQgBAmACAlIgBAQIAAABQAHBvAJBvQAIBUAJBRQAJBSALBQIABAGQAxEzBJEYQAGAYAOAOQAaAMAogCIAGAAQAlgUAbgeQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBIAAgFQA7h9AGi7IAHjiIAEjVIABhjIAAgcQAAh+gDh6IgBAAIgBgBIgBgBQACgVgBgWIgBgcIgGhJIgBgYIgBg7IAAgGIgBgLQAIgjgBgpQAAgWgDgZQgDggAUgQIADgNQAEgPgNAAIgFAAQgbgFgYgIQgYgHgUgKQghgRgagXIgJgIQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgNgOARgKIAHgGQAMgMAEgVIABADIADAFIAAAAIAGgCQAFgHABgHIABgBIAAAAQgKgFAMgRIAGgIQAZgoghAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgLAJgEAPQgCgMgIAHIgHAHQgYAUgOgLQAogagJgJIgPgDQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgjAZgIgXQAmgPAUgYIgIAAQgzADATgMQAAAAABgBQAAAAABAAQAAAAABAAQABAAAAAAIAsgRIAagKQACgBACgEQAAAAAAgBQAAAAABAAQAAAAABAAQAAgBABAAQAzAJAEgjQAAAAAFAFQAIACAJgBQgBgCACgEIACgDIAAgBIACgIIADgTQgCgCABgGIABgFIADgXIAAgFQABgJAAgJQAAgJACgIIABgBIAAgMIAAgBIgBgKQgIiEgphmQgPgpgbghQgXgKgagJIAAgDQhdAAguAwQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAQgbAsgNAzIgCAGIgBADQggCCgQCOIgDAbIAAAAQADAHgBAHIgDAdIgCARIgBAeIAAAtIAAAOIAAAfIAAAdIAAAqIACAsIABAuIACAhIAAAGIADABIADAMIAAASIgBAAIABA0gAIMsqIAAACIgDARIAAACQACAFAAAGIgCAeIgBAmIAAAWIgBAoIAAATIAAAaIAAAhIgBAxIABAiIAAAtIAAAOIAAABQgCAEAAAEIABAdIAAALIABAHIAAACQgBATgDARIgBAPIgDAlQgFAkAAAlIAAAoQACALgBAMIABAiIABARIAFAsIADAdQACAKgDAIIAJB6IAAAAIAIBkIACAQIADAjIAAAAIAMBzIAEAnIAAAFIABAGIABAKIAAAFIALBiQAlE7BUELIAIAZQAGARAWANQgMgZgKgjQgLgigJgrQgzjwgsj3IgCgQIAAAAQgJg9gIg+IgFgnIgMhyIgFgzIgIhkIgIh9IgCgBIgBgwIABgZIABglIAEhDIAAgpIAAgDIAAgBIABgBIABgRIAAgCIAAgDIAAgNIAAgFIAAgFIAAhBIAAgeIgHAAIAAgFIgBgeIABgOQAAgEgCgCIAAAAIACgPIAAgFIgBgZIgBgPIAAgtIAAg7IAAgMIAAgtIAAgDIgBg7QAAgPADgPIABgFQACgTAAgRIABgCIABgBIABgZIAAgBIAEhRQgIAogGApgAPCF2IgMDUIgFBeQgNDKAGC2QgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQgkAbgUArIgBAFIgFAGQApALAjgYQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAgBQBUAKAwgZIAFgBQgPhTgng8IgBgFQgbg6ANhZQANhYgRhAIgBgGQgMgqgYgfQALgDAHgGQABgBAAAAQAAAAABgBQABAAAAAAQABAAAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAigeAbgmQAcgpATgzQAIgWAGgZIACgIIgFgBIgjgRIgUgKIgFAAQg8ACgcgdIgFgDIgEBLgASSFfQAFADAEABIgEANIgBAFICfADIAAgDQBIhxALiwIABgIQgEgMAAgOIAAgEIgDgFQgGgDgIgCQgVgFghAHIgBAAQhhAUhegPQgjgFgigKIgBAFQgiBLglBKIAAAAIgBAEQgTAxgdAnQACAOAKAHQAAAAABABQAAAAABAAQAAAAABAAQABABAAAAQASgEANgRQAGADAFgCIgNAfIgBAFQAlAJAtACIAGAAIAAgDQAShdAehQIAAgBQgPBagTBXQgEAQAYAMIAIADIAHACQAPABALgJIADACgAQCk+QgHAEgHAHQgfAigdAlIAAA3IAAAGIAAAlQgFACgCAGQgDAMAIAJIAAAkQAAAHAGADIgBAAIAAAAIgBACIABAHIABAEIACAIQACAPgDAPIAAABQAECGgBB8IAAAGQAYgiATgmIABgFIABgFQAihGAchOIAIgWIgBgEQgLgZAHgTQgBAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgKgRgMgKQgKgIgMgEIABgMIgDgEIgUALIgGAEIgLAHQAAgFgDgFIAMgGQADgFAGAAQAFgFAHgEIAAAAIAHgFQBXg9BHg2IABgBIATgPIgCADQAwAehBgQIAAACQhHBAhOA3QAAABgBAAQAAAAAAABQgBAAgBAAQAAAAgBAAIAAAAQAIARANANQAOAPAUAIIAFACQgOA0AkAQIAFABQAOgNAFAJQAHAOANAGQBkASBYgPQAdgFAcgJIAAgBIAAgCIAAgBIABgBIAAgBIABgKIAAgMIAAgDIABgBIAAAAIAAgBIABgJIABgBIAAgDIAAgTQgBhTgNhQQgTh1g4hnIgFgFQgLgJgPgJIgDgEIgIgIQgLgMgHgLIing9QgEgPgGgMIgHgLIgUgdIgBgCIgFAIQgXAfgmAHIgGgCQAjgKAUggIAAgEQAAgMgDgLQgCgGgFgDQgegMgYAXIgBgIQgBgGgDgEQgDgDgFgCIgFAGQgJANgEAPQgCAHgEACIABgKQACgRABgRQAAgPgOgEIgPADQgCAFgFADIgIAFQgNgbgbAkQgFAFACAFIACAAIAAgBQAUgEADAQIgBABIgBACIgDABIgDgBQgCgDgDAAIACABIgDgCIgMgCIgBgCIgBAAQgJgBgEAKQgEAJABATIAAABQACAGgDAFIgBABIAAABIAAACIgBABIgBACIAAABIAAABIgDABIgBABIgGABIAMAOIACACQgLAFgbAKIgFACIAAAKIAAAGIAFAAIAAAAQAlAEAHAdIAEABQAGAIAHAFQAVAOAcgRQAFgOgBgNQgEgyAmAGIgBAFQgMAmgTAgIgMASIAGAAQA+AQAkgmQABAAABAAQAAAAABAAQAAgBABAAQAAAAABgBQAUgUgIAbIgFABQglANgHAkIgBAQIgDAOQgNAiAAAqQgBAgAHAlIABgEQAbgmApgYQAOgJAPgHIABgGQAJgyAdgFQgJALgBAMQgDApgPASQgKgIgKAAQgJAAgJAGgAQhpoIgBgDIgBgSIgHg5IAFAGIgYgmIATAAQAJABAFgIQgDgFgFgDIgbgLIgBgCQgiAHgggMIAFgGIAQgCIAMgCQAKAAAEgHIgTgJIABAAIgDgHQAAgDgCgDIgBgBQgPAHgNALIgEADQgJACgJAFQgEAEgGgCQgHAGgFAJQAAAJgKgFQgHgEgDAFQgIAOgxgDIAGAGQgSALggAEIgWACIARADIAFACQAfALgfALIgKACIgBAEIALABQARABAQAAQAegBAegHQARgEAFAPIAAgLIAmACIAEAHQAFAJAIAHIAFAEIAGADQARAEAKgOQATAAAPAIQASAKAEAUIACAJIABADIAAAAgAOatsIgBAOIACgMIAAgFIgBADgA7iSbQABgigXgJIgFgBQgsAOgrgRQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAgBQArgLAFgSQACgDgGgGQgpgMAegJIAGgBQAzAGAugHQAXgDAWgHIgCAFQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBABAAAAQgSAYA+gDIAQAAQgbAdgxAHIgBADQgIAggPAPQgJAIgMADgA7nRpIADABQAGA2ANgbIAEgLQAJgVAVgJQAhgQAJgJIgFABQhFADAfgaQgDgCgCAAIgYAEQgQACgQABQhNABAnAVIABAGQADAOgwANIAAADQAhgEAaAAIAdABgAoWR0IgFgBQg1gXgjgqQAYgNALgdQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAAgFQASgQAMgWQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAWiagjiPQgDgNAAgOQARgcAJgmIABgFQgNhFgDhOIgBgGQACgTAJgMIAAgBIgOgBQgLgBgKgFIgDgDQgHgDAAgEIAAgFQgEgKACgNQAEgVAAgXQAAgNADgNIABgBIABAAIABgXIABgCIAAgBIAAAAIABgIIAAgDIABgCIAFguQAFgzAIgzIgBgDQgVgVgWgTIgBgFQgghFALheQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAAAQgUgZgMgfIAAgGIAAgmQANgnAYgcQABAAAAgBQAAAAAAgBQABAAAAgBQAAgBAAAAIAAgGQA7gZAzgiIAFgBQAJg/glgkQgGgHgJgGQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAEgaAAgMQAChNghAQQgSAHAQgeQALgSAEgQQABgEgZgQQAQgGAWAAIgCAAIgBgEIABgCIAQgCIACgEIABgBIASgDQABgRgBgRQAAgFABgFIABgBIACAAIACABIAEAEIABABQAEANAIAKIABABIAEAAIAKgMIABAAQAKgEAKgDIAGgEIABgBIABgDIAAgCQAEgCACADIABABQAcgOATAMIgDAAQgaAZBMABQARAAgGAIQgnAIAdAfIACADQAFACACAFQASASAPAWIAcAqIgaAiIgBAFQAIA5gYAaIgBAEIgMADQgiAMAQAnIAAABIADAAQAmAWA3AFIAFAAQBAAmANBZIAAAFQAxA0ALBbIAAACQgchKgmhAIgBAAIgEgHIAAgFQgMhPg2glIgFAAQg6gIgpgZQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgeg4A3gDQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAVgUAAgeIgBAAQgJAHgKAAQgeACgdgDIgHgBQgHgCgEgDIgBAEQgEAJgKgBQgOgBAGgNIABgCIAAABQAJAFADgJQAIgTgPgFIABgEIADgDIAEgBIACACQgBACABAEQADAPAOAFIAEACQAgAIAhgFQAWgEgHgTIgCgBIgBgDIABgGQAJgTARgOQgJgOgFgLQgPgdgTgXQAAAEgFACIgKADIgBABQgBAFgDACIgCABQgIARgLgOQgDgDABgFQADgOAMgKIAFAAIAAgBQAGgCAFABQgSgRgVgOIgDAMQgTAPgmAHIgEABQgJAHAIATQgLAFgMAEQgIACgCADIg3BVIAAAEIAAABIAAAGQABAGAKgFIAOgIQAGgDABAHQAEAOgDAGQAAAAgBABQAAAAAAABQgBAAAAAAQAAABgBAAQgGABgNgLIgBAGQgEAQADAIQAHAPAngXIgBAFQgSAoACBBQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAQg0Ang+AdQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAAAQgWAcgKAoQgDBCAoAUIACABIAAgBIAAgEQACgWADAWQgBAfgOATQAAAAAAABQgBAAAAABQAAAAAAABQAAABAAABQAACIBjApIAFABIAAgBIAAgDIACAEIANABIADgEIAJAAIABABQBFAeBfgRIABgEQATgdAHAWQALAAAAgBQALhDAbg4IAAgCIgBAAIgIAEIAHgGIAOgJIADgDIAGgFIACgCQgPAigTAZIABAGQAIA3gZAsIAJBVIABABIAMBTIAAABIAAABIAAACQAJA1AKAvIgDAAQgaACAHBAQADAhAAAhQAcCcAJC3QADA0AJA1QAuAVAxAIQA7ALAmAaQAAAAgBAAQgBAAAAAAQgBAAAAABQAAAAAAAAQgTAigxADQgqgKghgPQgQgIgMADQhjAUgig9QAVh5gahxQgXhkgQhuIAGgEIAFgBQgFgWAAgWQAChPgogeIAAABIgBACIgHABQgOANgDAaQgFAygLAtQgFAWgHAVIAAAUIAAABIAAAAIABABIAAABIAAABIABADQABACAAADIABACIABACIAAAAQAMAdgIArQgcCTALCrIgDAAQgBAVgMAHIAAAFIAAAmQgBAAgBABQAAAAgBAAQAAAAgBAAQAAABAAAAQgMANgBAYQAAAAgBAAQgBAAAAAAQAAAAgBABQAAAAAAAAQgFAQgUAAIgKgBgAoLRvIAFAAQAWgeAAg0IAAgGQAPgMAEgZIADgBQgHhTAEhNQAEhNAPhHQAGgbAAgbIgDAAIgCglQgFhkAlhiIgDABQgOAEgTgEIgBAAQgRAAgRgDIgPgBQgdAFgLAZIABAGQAKBVAGBVIgDAAQgKAfgPAXQAAAZAHAWQATBAADBFQACBFgOBLIgEABQgOAYgUATIgBAEQgJAVgSAMIAjAKQAKABAEAWQAAAAAAAAQABAAAAAAQABgBAAAAQABAAABgBQAIgIAKgGQgWAtAngBgAhFQlIABgDQg3gVAsAAIAFAAQgVgMgygMQgpgJgZgcQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQgKgbgOgVQADgigEgWQgOhQgHheQgJiGgCiYIgBgDQgTgQgzAIIgGAAIgbAAQAFAUAIASQAAAAABAAQAAABAAAAQABAAAAAAQABAAAAAAQgEBGAMAzIgCAAQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAhCOATCaQAIBDgQAwQgDBXBxgYQAQgCARAAQArAjA8gLgAoWB0QghADgDAnIgKBeIABAAQABAHgBAHIAAACQgEALABAMIAAACIgBACIgBACQgEAoAAApQAEAMAGAFQAIAEAIAAICSAGIAYgEIAGgBQAAhJADhKIACAAQAKA9gBBMIACAAIAGAAQA+ABA1gHIgBgFQghh5gPiJQg2APhCgGQhAgFgpgKIgLABgAiXFvIAAgEQgJhEAqgqQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAABgBAAQgbAWgiAPQgSADgBgFIgBgBIABgEQAVgqAngcIAIgFIABgFQABgNgCgJIgCgIQgohKgHhnQgBAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgHgLgJgIQgIgIgJgGIgHgEIACgBIAGgJIABAAIABgBIAHgGIABAEQgBATANAMQAFAEAGAEIAHADQABABAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQANBmAhBRIACAEIABADIAAAAQAEAKAAAIQAAAIgEAHQglAggeAlQAAABgBAAQAAABAAAAQAAABAAAAQAAABABAAQABAAAGgCIAAgFQApgMAagZQABAAAAgBQAAAAABAAQAAAAABAAQABgBAAAAQARAcAAAsIAAAFQgcAeAAAXIAGgEQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAAAgBQAigSAOgmIAAgGQgGg0gEg2IgBgRIAAgIQgFhLAAhPQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQgLgigNgiQAOAFAEAQIADABQAVBrAFB8IAFgFIAJgCQAjgGAhgDIADAAIAAgBIBqACIADAEQAHALAIALQCRACCYgCQAGAAAGAEQAeAUApgFIAAAFQgpATgkgZQgGgEgFABQiXAFiWAAIgCgEQgCgMgLgKQgygJg0ADQgeACghAHQgMABgHALQABAtAAAvIAAAFQgUAegZAYIgFABQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAAAQgIAGgHAAQgLAAgGgPgAkODTIABgDIANADIAsgKIgCAAIACgDIABgCIAPABIADgBIAaAEIAeAEIgBACQAAABgBAAQAAABAAAAQgBAAAAAAQAAABgBAAIgOgBQgrAMgtgCIAAAAQgJAHgHAAQgIAAgDgOgAnNBCIgBAAIAAAAQgEgCgDgDQgEAAgDgEIgDgCQgHgFgCgHIAAgBIgCAAIAAgBIgBgCQgDgCgCgEIgCAAQgDgIgEgFIgCgBQgBgPAAgOQgGhCgYgwIgCgFQAOg2ARA5QACAIAMACQAZAFANAPQgmgBgXgOIgDgBIgBAAIgBAAIABACQAXAmgCA+IgBABIAAAVIAAACIAIAKIAAABIAAACQAFAHAGAEIABACIABAAIACABIACABIAAABIABABIAFADIAAAAIABACIAAABIAAAAIABAAIABABIAGAIIACAAIABABIADAEIgBACIAAAAIgCABIAAAAIgCgBgAwUmaIgCgNIAAABQAAgJABgIIgBABQADgkAggbQAAgBAAgBQAAgBAAAAQAAgBgBAAQAAAAAAgBQgugoAqgQIABgFQAXgqg0AJQgLgEgFAFIgEAGQgNgNgPgGQgSgHgVADIAAAQIAAAIQgbgLAlgeQgBgYgtAQQgyATAZAKIADAAQg0AaghASQAgANAGATIAAABQgbAPghANQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAAAAAQA7ghg8geQAhgRAmgNIAAgDQgIgUA0gMQBHgRg2gGQgagNA0gQQAAAAABgBQAAAAAAAAQAAgBAAAAQAAgBAAgBQgtAQgdgIQgBAAAJgDQADgBADgEIAAgCQglASgoARIAAADQgTAAAZgkQAIgbgXAYQgPAPgNAQQgOASgKADQgKACgGgMIAAgDQgPAdgdARQABAAABABQAAAAABAAQAAAAAAAAQAAAAAAABQAHAeglASIAAgGIAAgFQAlgcgVgmIAFACQAMAEALAGQAMguAVgCIAAAJQARAIAhgcQAOgLAKgQQARgYACAbQgVAkAQgDIAFAAQAnggAkADIgFAGQgGAFgJABQAoAAA4gFIgDAFQhLAUBAAHIAFABQACAhAQANQAQAOAggIIAAgCQA5AAgSAxIAAAFQgiAUAmAkQAAABAAAAQABAAAAABQAAAAAAABQAAABAAABIgfArIAAABQgKANACARIABACQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAIAAABIAAABQAIAAAMAAIgCAEQgBAEgDACQgCgRgPARIgDACQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAgAnEoeQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAQABgUAQgJIAKgFIAEgBIABAAQARAJgNALIgEAFIgDABIgBACIgCADQgDALgHAAIgEABQgEAAgGgEgAxWpOQABgHAFgHIAEAAIAAgBQALAJAAAQQAAASgLAIQgPgOAFgWgANLpPQgQgIAJgOQAEgIAHABQAYAHgQATQgDAEgEAAIgFgBg");
	this.shape_16.setTransform(40.8,37.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.shape_16},{t:this.shape_12},{t:this.shape_11},{t:this.shape_15},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape_14},{t:this.instance_1},{t:this.instance}]},38).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-177.9,-116.7,437,317);


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


(lib.textbuborsam = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ORSYM();
	this.instance.setTransform(-6.2,0.1,1,1,0,0,0,274.2,200);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABfB1QgEgIgEgRIgFgbQgHgZgOhTIgfBcIgJAeQgGARgGAMQgHALgIAAQgKAAgFgKQgDgGgEgKIgEgSQgQg3gMg9IgGAcIgTBRQgCAOgHAdQgEAMgLAAQgHAAgFgGQgEgEAAgHQAAgaALgmIARg9IAJgxQAHgjAHgLQAHgJAJAAQAKAAAFAMQAHAOAGArQAJAzARA6QAVg6ARhBIAFgXQADgOAEgIQAGgMALAAQANAAAIAaQACAJAEAcQAIBFAOAyIAIAaQAGAWAAAFQAAAHgFAEQgFAFgGAAQgJAAgGgJg");
	this.shape.setTransform(99.1,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AA2BRQgEgOgHgkIgpAIIgoAJQgHAUgUAoQgEAIgJAAQgGAAgFgEQgFgFAAgGQAAgIAXgxQgCgFAAgFQAAgMAPgEQASggAbgrQAjg7AJAAQANAAAEARIAKA1IAYBqIAIAZQAFAMAAAFQAAAGgFAFQgFAEgGAAQgOAAgLgkgAgTALIA4gLIgOg7g");
	this.shape_1.setTransform(72.9,0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag+BsQgdgOAAgXQAAgHAEgEQAFgEAGAAQAIAAAGAJQAIALAGAFQANAIAaABQAWAAAVgLQAagOAAgYQAAgTgWgMQgTgKgaAAQgYAAgSgJQgWgMAAgYQAAgcAggXQAegVAeAAQAPAAATAEQAZAHAAAKQAAAPgOAAQgGAAgPgEQgQgEgJABQgWAAgRAMQgSAMAAARQAAANAYAFQAIADAXABQAkADAUATQASARAAAaQAAAlgiAWQgeAUglAAQgdAAgYgLg");
	this.shape_2.setTransform(50.4,1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhIB4QgGgHAAgGIAAguQAAgWADgnQADguAAgUIACgqQABgIAEgDQAVgGAbAAQAaAAAZATQAdAWAAAfQABAoggAWQAXAKAMALQAMANAAAOQAAATgUARQgPANgPAGQghAOg3AAQgHAAgGgGgAgvA+IAAAgQAogBAYgKQALgFALgIQAJgJAAgEQAAgHgUgKQgPgGgNgEIgQgCIgGAAIgHAAIgSgBIAAAjgAgohcIgBAbIgDA9IAYABQAWgCAOgMQAQgOAAgWQAAgPgQgMQgQgNgRAAIgXABg");
	this.shape_3.setTransform(-58.2,0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhEBcQgTgWgFgtQgDgTAAg6IABgjQABgOACgGQAEgLAKAAQAOAAAAAaIAABcQABBdBAAAQA+AAAAieIAAgPIAAgNQAAgJAEgIQAEgJAIAAQAQAAAAAVIAAAUIAAATQAACzhdAAQgvAAgYgcg");
	this.shape_4.setTransform(-80.7,0.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhIB4QgGgHAAgGIAAguQAAgWADgnQADguAAgUIACgqQABgIAEgDQAVgGAbAAQAaAAAZATQAdAWAAAfQABAoggAWQAXAKAMALQAMANAAAOQAAATgUARQgPANgQAGQggAOg4AAQgGAAgGgGgAgvA+IAAAgQAogBAYgKQAMgFAKgIQAJgJAAgEQAAgHgUgKQgPgGgNgEIgQgCIgGAAIgGAAIgSgBIgBAjgAgohcIgBAbIgDA9IAYABQAWgCAOgMQAQgOABgWQAAgPgRgMQgQgNgRAAIgXABg");
	this.shape_5.setTransform(-101.9,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115,-27,230,54.2);


// stage content:



(lib.con_Scene3 = function(mode,startPosition,loop) {
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
		
		 window.open ("con_Scene4.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("con_Scene2.html","_self");
		}
		/* dougpoint = new Sound();
		dougpoint.attachSound("4-b");
		sampoint = new Sound();
		sampoint.attachSound("4-a");
		v1 = new Sound();
		v1.attachSound("coordinate");
		v2 = new Sound();
		v2.attachSound("and");
		v3 = new Sound();
		v3.attachSound("or");
		v4 = new Sound();
		v4.attachSound("nor");
		v5 = new Sound();
		v5.attachSound("for");
		v6 = new Sound();
		v6.attachSound("but");
		v7 = new Sound();
		v7.attachSound("yet");
		v8 = new Sound();
		v8.attachSound("so");
		
		v1.onSoundComplete = play1;
		v2.onSoundComplete = play2;
		v3.onSoundComplete = play3;
		v4.onSoundComplete = play4;
		v5.onSoundComplete = play5;
		v6.onSoundComplete = play6;
		v7.onSoundComplete = play7;
		v8.onSoundComplete = play8;
		
		function play1(){
			v2.start();
		}
		function play2(){
			v3.start();
		}
		function play3(){
			v4.start();
		}
		function play4(){
			v5.start();
		}
		function play5(){
			v6.start();
		}
		function play6(){
			v7.start();
		}
		function play7(){
			v8.start();
		}
		function play8(){
			v1.start();
		}
		
		v1.start();*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// text
	this.instance_2 = new lib.textbuborsam();
	this.instance_2.setTransform(275,363.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// main
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AgcAkQgMgLAAgQQAAgTAMgQQANgTASAAQATAAAKAJQAJAJAAAUQAAASgLAQQgMATgSAAQgRAAgLgKgAgTgSQgJANAAAOQAAALAIAHQAIAHAMAAQAMAAAJgPQAJgMAAgOQAAgOgHgGQgGgGgOAAQgMAAgKAPg");
	this.shape_17.setTransform(469,14.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("AgWAoQgLgFAAgJQAAAAAAgBQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABgBAAAAQABAAABAAQAAAAABAAQACAAADADIAFAGQAFADAJAAQAHAAAIgEQAKgFAAgJQAAgHgIgEQgHgEgJAAQgJAAgGgCQgJgFAAgJQAAgKAMgJQALgIAKAAQAGAAAHACQAKACAAAEQAAAFgGAAIgIgBIgJgBQgHAAgGAEQgHAFAAAGQAAAFAJACIAKACQAOABAHAHQAHAFAAAKQAAAOgNAIQgLAHgNAAQgKAAgJgEg");
	this.shape_18.setTransform(460.1,14.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AgDArQAAgBgBAAQAAgBAAAAQAAgBgBgBQAAAAAAgBIABgCIAAgDIAAgJIgBgIIgBgWIgCgXIgFAAQgNAAgHgCQgFgBAAgFQAAAAAAgBQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAQABAAAAAAIAJABIAKABIALAAIAIgBIAOABIANABQABAAAAAAQABAAABAAQAAAAAAABQABAAAAAAQABABAAAAQAAABAAAAQABABAAABQAAAAAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAAAAAQgBABgBAAQAAAAgBAAIgNgBIgOgBIgEAAIACAbIABAYIAAAGIABAGIgBAHQgCAEgDAAIgDgBg");
	this.shape_19.setTransform(448.7,14.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AgYAtQgGgGAAgTIABgIIAAgKIgBgCIACgCIABgZIgBgGIAAgHQgBgGAGgBQABAAAAABQABAAAAAAQABAAAAAAQABABABAAIAMgDIALgBQAOABAIADQAEACAAADQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBABAAAAIgCAAQgLgDgIgBIgJACIgMACIAAAGIgBAWIAYgCIAOgBQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABAAQAAABAAAAQABABAAABQAAAAAAABQAAADgGABIgNABIgZACIgBAIIAAAHQAAAOACACQABACAIAAIAJgBIALAAIAEAAIADgBQAGAAAAAGQAAAFgFABQgGACgQgBQgSAAgFgEg");
	this.shape_20.setTransform(440.6,14.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AgLAsQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgCAFgLIAIgMQgLgOgDgGIgJgPIgKgQIgBgDQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAgBIAEgBQADAAACACIAFAIIAIANQAFAGACAHQACAEAEAHIAOgfIAGgMQACgEADAAQABAAAAAAQABAAABAAQAAABABAAQAAAAABAAQAAABABAAQAAABAAAAQABABAAABQAAAAAAABQAAADgEAFIgDAHIgKAYIgLAXIgHANIgCAGQgCAEgDAAIgEgCg");
	this.shape_21.setTransform(432.7,14.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("AgDArQAAgBgBAAQAAgBAAAAQAAgBgBgBQAAAAAAgBIABgCIAAgDIAAgJIgBgIIgBgWIgCgXIgFAAQgNAAgHgCQgFgBAAgFQAAAAAAgBQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAQABAAAAAAIAJABIAKABIALAAIAIgBIAOABIANABQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAABAAAAQABABAAABQAAAAAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgNgBIgOgBIgEAAIACAbIABAYIAAAGIABAGIgBAHQgCAEgDAAIgDgBg");
	this.shape_22.setTransform(421.9,14.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("AgZAiQgHgIgCgRIgBgcIABgNIABgHQABgFAEAAQAFAAAAAKIAAAiQAAAiAXAAQAYAAAAg5IAAgGIAAgFIABgGQABgEAEAAQAGAAAAAIIAAAHIAAAIQAABCgjAAQgRAAgJgLg");
	this.shape_23.setTransform(412.9,14.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF0000").s().p("AgaAsQgCgCgBgCIAAgRIABgXIACgYIAAgPQABgBAAgBQAAgBAAAAQABgBAAAAQAAAAABgBQAHgCALAAQAIAAAKAHQALAIgBAMQAAAPgLAGQAIAFAFAEQAEAFABAFQgBAHgHAGQgGAFgFADQgMAFgUAAQgDAAgCgDgAgRAXIAAAMQAQAAAHgEQAEgCAEgEQADgCAAgCQABgDgIgDQgFgDgFgBIgFgBIgCAAIgDAAIgHgBIAAAOgAgOgiIAAAKIgBAXIAJABQAGgBAGgFQAGgFAAgIQAAgFgHgFQgFgFgFAAIgJAAg");
	this.shape_24.setTransform(405,14.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF0000").s().p("AgcAsQgBAAAAgBQgBgBAAAAQAAgBAAAAQgBgBAAAAIAAgOIAAgOIABgOIABgQIgBgJIAAgJQAAgDACgCQACgEAEABIAOABQAIABAEADQAYAMgBATQABAIgJAFQgGAGgKADQATAJAIALIACAEQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgEgBQgUgUgVgGIAAALIABAMQAAAAgBABQAAAAAAABQAAAAAAABQgBABAAAAQAAAAgBABQgBAAAAAAQgBAAAAAAQgBABgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBAAAAgAgRgZIAAAHIgBAMIgBAKIADAAIACAAQAOAAAHgEQADAAACgDQAEgDAAgCQgBgJgIgHQgHgGgJgBIgJgBg");
	this.shape_25.setTransform(393.7,14.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF0000").s().p("AgcAkQgMgLAAgQQAAgTAMgQQANgTASAAQATAAAKAJQAJAJAAAUQAAASgLAQQgMATgSAAQgRAAgLgKgAgTgSQgJANAAAOQAAALAIAHQAIAHAMAAQAMAAAJgPQAJgMAAgOQAAgOgHgGQgGgGgOAAQgMAAgKAPg");
	this.shape_26.setTransform(385,14.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF0000").s().p("AgbAvQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIABgjIAAggIAAgIIAAgIQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAAAgBQABAAABAAQAAAAABAAIADABIANgCIAJgBQAGAAAJADQAMACAAAEIgCAFQAAAAgBAAQAAABAAAAQgBAAgBAAQAAABgBAAIgCgBQgHgCgMAAIgHAAIgMACIAAAZQALgDAFAAIARABQAGAAAAAGQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAgBAAQAAAAgBAAIgJAAIgIAAQgDAAgNACIgBApQAAAAAAABQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape_27.setTransform(376.8,14.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF0000").s().p("AgcAsQgBAAAAgBQgBgBAAAAQAAgBAAAAQAAgBAAAAIAAgOIgBgOIABgOIABgQIAAgJIgBgJQAAgDACgCQACgEAEABIAOABQAIABAEADQAXAMAAATQAAAIgIAFQgGAGgKADQASAJAKALIABAEQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgEgBQgTgUgWgGIAAALIABAMQAAAAgBABQAAAAAAABQAAAAAAABQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBABgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBAAAAgAgSgZIABAHIgBAMIgBAKIACAAIADAAQAOAAAGgEQAEAAADgDQACgDAAgCQABgJgKgHQgGgGgKgBIgIgBg");
	this.shape_28.setTransform(365.6,14.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF0000").s().p("AgcAkQgMgLAAgQQAAgTAMgQQANgTASAAQATAAAKAJQAJAJAAAUQAAASgLAQQgMATgSAAQgRAAgLgKgAgTgSQgJANAAAOQAAALAIAHQAIAHAMAAQAMAAAJgPQAJgMAAgOQAAgOgHgGQgGgGgOAAQgMAAgKAPg");
	this.shape_29.setTransform(356.9,14.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF0000").s().p("AgmAtQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAAAIABgHIAAgIIAAgLIABgLIAAgJIgBgMIAAgLIgBgLQAAgDACgCQADgCADAAQADAAAEAHQAPAWAKAOQANAPARAQIAAgIIAAgHQAAgYgCgPIgCgGIgBgGQAAgHAGAAQAKAAAAAmIAAARIAAAUIgBAJQgBAGgFAAQgDAAgFgEQgYgXgdgoIAAANIAAALIAAAPIAAAPQAAAPgGAAQgDAAgCgCg");
	this.shape_30.setTransform(347.4,14.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF0000").s().p("AgdAsQAAAAAAgBQgBgBAAAAQAAgBAAAAQAAgBAAAAIAAgOIgBgOIABgOIABgQIgBgJIAAgJQAAgDACgCQACgEAEABIAOABQAIABAEADQAXAMABATQgBAIgHAFQgHAGgKADQASAJAJALIACAEQAAABAAAAQAAABAAAAQgBABAAAAQgBABAAABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgEgBQgUgUgWgGIABALIAAAMQAAAAAAABQAAAAAAABQAAAAAAABQgBABAAAAQAAAAgBABQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAgAgSgZIABAHIgBAMIgBAKIADAAIACAAQAOAAAGgEQAEAAADgDQACgDAAgCQAAgJgJgHQgGgGgKgBIgIgBg");
	this.shape_31.setTransform(335.3,14.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF0000").s().p("AgcAkQgMgLAAgQQAAgTAMgQQANgTASAAQATAAAKAJQAJAJAAAUQAAASgLAQQgMATgSAAQgRAAgLgKgAgTgSQgJANAAAOQAAALAIAHQAIAHAMAAQAMAAAJgPQAJgMAAgOQAAgOgHgGQgGgGgOAAQgMAAgKAPg");
	this.shape_32.setTransform(326.6,14.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF0000").s().p("AgRAvQgHgCgDgDIgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBIABgSIAAgSIAAgTIAAgUQAAgDACgDQACgCACAAIAKAEIALAFQAOAFAMAMQANAOAAAOQABAKgFAKQgFAJgIAFQgJAHgPAAIgKgBgAgUgPIAAAPIgBAgIABAAQAFAEAIAAQALAAAHgEQAFgEAEgGQADgHAAgHQAAgOgTgNQgEgDgVgKg");
	this.shape_33.setTransform(314.1,14.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF0000").s().p("AgmAtQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIABgHIAAgIIAAgLIABgLIAAgJIgBgMIAAgLIgBgLQAAgDACgCQADgCADAAQADAAAEAHQAPAWAKAOQANAPARAQIAAgIIAAgHQAAgYgCgPIgCgGIgBgGQAAgHAGAAQAKAAAAAmIAAARIAAAUIgBAJQgBAGgFAAQgDAAgFgEQgYgXgdgoIAAANIAAALIAAAPIAAAPQAAAPgGAAQgDAAgCgCg");
	this.shape_34.setTransform(304.8,14.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF0000").s().p("AAUAeIgEgTIgPADIgOADIgKAXQgCADgDAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAgBQgBAAAAAAQAAgBAAgBQAAAAAAgBQAAgDAJgSIgBgEQAAgEAGgCIAQgbQAMgWAEAAQAEAAACAHIAEATIAIAnIAEAJIABAHQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAABQgBAAAAAAQgBABgBAAQAAAAgBAAQgFAAgEgOgAgGAEIAUgEIgFgVg");
	this.shape_35.setTransform(295.5,14.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgTAZQgJgHAAgOQAAgNAIgKQAIgLAMAAQAJAAAGADQAIAEAAAIQAAAGgHAFIgMAEIgVALQADAFAFACQAFADAFAAIAJgCQAHgCACgDQACgDACAAIAEACQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAAHgLAEQgJAEgIAAQgLAAgJgGgAgLgOQgEAFgDAJIASgGQAJgFAEgEQgFgFgIAAQgGAAgFAGg");
	this.shape_36.setTransform(280.8,15.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgWAaIAAgmIABgHIAAgFQAAgGAFAAQAGAAAAAKQAKgLANAAQAEAAADADQACAEAAAHIAAAEQAAAIgFAAQgGgBAAgFIAAgFIAAgEQgKABgDAEQgFADgEAJIAAAdQABAHgGgBQgFABgBgHg");
	this.shape_37.setTransform(274.8,15.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AASAdIgEgEIgKAEIgFACQgOAAgGgHQgGgIAAgPQAAgMAKgKQAKgKALAAQAFAAAHADQAIADAAAEIgBADIgBAIIgBALIABALIAEAKIABAEIABABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgEgDgAgJgOQgGAIAAAHQAAALADAEQAEAFAGAAQAEAAAEgCIAGgEIgCgWIAAgGIABgFIgDgDIgDAAQgHAAgHAHg");
	this.shape_38.setTransform(268.6,15.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgWAoQgLgFAAgJQAAAAAAgBQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABgBAAAAQABAAABAAQAAAAABAAQACAAADADIAFAGQAFADAJAAQAHAAAIgEQAKgFAAgJQAAgHgIgEQgHgEgJAAQgJAAgGgCQgJgFAAgJQAAgKAMgJQALgIAKAAQAGAAAHACQAKACAAAEQAAAFgGAAIgIgBIgJgBQgHAAgGAEQgHAFAAAGQAAAFAJACIAKACQAOABAHAHQAHAFAAAKQAAAOgNAIQgLAHgNAAQgKAAgJgEg");
	this.shape_39.setTransform(257.9,14.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgmAtQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIABgHIAAgIIAAgLIABgLIAAgJIgBgMIAAgLIgBgLQAAgDACgCQADgCADAAQADAAAEAHQAPAWAKAOQANAPARAQIAAgIIAAgHQAAgYgCgPIgCgGIgBgGQAAgHAGAAQAKAAAAAmIAAARIAAAUIgBAJQgBAGgFAAQgDAAgFgEQgYgXgdgoIAAANIAAALIAAAPIAAAPQAAAPgGAAQgDAAgCgCg");
	this.shape_40.setTransform(248.9,14.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgcAkQgMgLAAgQQAAgTAMgQQANgTASAAQATAAAKAJQAJAJAAAUQAAASgLAQQgMATgSAAQgRAAgLgKgAgTgSQgJANAAAOQAAALAIAHQAIAHAMAAQAMAAAJgPQAJgMAAgOQAAgOgHgGQgGgGgOAAQgMAAgKAPg");
	this.shape_41.setTransform(239.3,14.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgYArQgBgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAIAMgBIABgLIAAgKIgBgJIACggIgIAAIgHAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAgBAAgBQAAAAAAgBQAAgFAFgBIASAAQAKAAARACQAFABAAAGQAAAAAAABQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgJgBIgKgBIgBAfIAAAKIABAKIgBAKIATAAQAAAAABAAQABAAAAAAQAAABABAAQAAAAABABQAAAAAAABQABAAAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQAAABgBAAQgBAAAAAAIgKAAIgKAAIgKABIgLABQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_42.setTransform(231.2,14.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgDArQAAgBgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBIABgCIAAgDIAAgJIgBgIIgBgWIgCgXIgFAAQgNAAgHgCQgFgBAAgFQAAAAAAgBQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAIAJABIAKABIALAAIAIgBIAOABIANABQABAAAAAAQABAAABAAQAAAAAAABQABAAAAAAQABABAAAAQAAABAAAAQABABAAABQAAAAAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAAAAAQgBABgBAAQAAAAgBAAIgNgBIgOgBIgEAAIACAbIABAYIAAAGIABAGIgBAHQgCAEgDAAIgDgBg");
	this.shape_43.setTransform(224.4,14.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgXAjQgIgJAAgMQAAgSARgVQAOgRAMAAIAEAAIAFABQACgDADAAQAEAAABAFIABAMIgBAEQgCADgDAAQgDAAgCgFQgCgEgCAAQgBgBgEAAQgJAAgIANQgOARgBAOQAAAIAGAFQAEAGAIAAQADAAAGgDIALgHIAFgDQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABABAAAAQAAAAAAABQABAAAAABQAAABAAAAQAAADgDACQgPAOgNAAQgNAAgIgKg");
	this.shape_44.setTransform(216.3,14.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgmAtQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIABgHIAAgIIAAgLIABgLIAAgJIgBgMIAAgLIgBgLQAAgDACgCQADgCADAAQADAAAEAHQAPAWAKAOQANAPARAQIAAgIIAAgHQAAgYgCgPIgCgGIgBgGQAAgHAGAAQAKAAAAAmIAAARIAAAUIgBAJQgBAGgFAAQgDAAgFgEQgYgXgdgoIAAANIAAALIAAAPIAAAPQAAAPgGAAQgDAAgCgCg");
	this.shape_45.setTransform(207.8,14.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgZAiQgHgIgCgRIgBgcIABgNIABgHQABgFAEAAQAFAAAAAKIAAAiQAAAiAXAAQAYAAAAg5IAAgGIAAgFIABgGQABgEAEAAQAGAAAAAIIAAAHIAAAIQAABCgjAAQgRAAgJgLg");
	this.shape_46.setTransform(198.6,14.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgXAoQgLgIAAgLQAAgHAGAAQAGAAAAAHQAAAFAHAFQAHAEAGABQACgBACgdIABghIAAgHIgDAAIgGAAIgHAAQAAAAgBAAQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAgBQAAgFAIAAIAGAAIAFAAIAKgBIALAAQAOAAAAAGQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgEAAIgEAAIgGAAIAAAHQAAAqgGAUQgEAMgHAAQgLABgKgIg");
	this.shape_47.setTransform(190.2,14.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgmAtQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIABgHIAAgIIAAgLIABgLIAAgJIgBgMIAAgLIgBgLQAAgDACgCQADgCADAAQADAAAEAHQAPAWAKAOQANAPARAQIAAgIIAAgHQAAgYgCgPIgCgGIgBgGQAAgHAGAAQAKAAAAAmIAAARIAAAUIgBAJQgBAGgFAAQgDAAgFgEQgYgXgdgoIAAANIAAALIAAAPIAAAPQAAAPgGAAQgDAAgCgCg");
	this.shape_48.setTransform(181.4,14.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgcAkQgMgLAAgQQAAgTAMgQQANgTASAAQATAAAKAJQAJAJAAAUQAAASgLAQQgMATgSAAQgRAAgLgKgAgTgSQgJANAAAOQAAALAIAHQAIAHAMAAQAMAAAJgPQAJgMAAgOQAAgOgHgGQgGgGgOAAQgMAAgKAPg");
	this.shape_49.setTransform(171.8,14.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgXAjQgIgJAAgMQAAgSARgVQAOgRALAAIAGAAIADABQADgDADAAQAEAAABAFIABAMIgCAEQgBADgDAAQgDAAgDgFQgBgEgBAAQgCgBgFAAQgIAAgIANQgPARAAAOQABAIAFAFQAFAGAGAAQAFAAAGgDIAKgHIAFgDQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAABABAAQAAAAAAABQABAAAAABQAAABAAAAQAAADgCACQgQAOgOAAQgMAAgIgKg");
	this.shape_50.setTransform(163.5,14.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgYAtQgGgGAAgTIABgIIAAgKIgBgCIACgCIABgZIgBgGIAAgHQgBgGAGgBQABAAAAABQABAAAAAAQABAAAAAAQABABABAAIAMgDIALgBQAOABAIADQAEACAAADQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBABAAAAIgCAAQgLgDgIgBIgJACIgNACIABAGIgBAWIAYgCIAOgBQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABAAQAAABAAAAQABABAAABQAAAAAAABQAAADgGABIgNABIgZACIgBAIIAAAHQAAAOACACQABACAIAAIAJgBIALAAIAEAAIADgBQAGAAAAAGQAAAFgFABQgGACgQgBQgSAAgFgEg");
	this.shape_51.setTransform(152.6,14.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgDArQAAgBgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBIABgCIAAgDIAAgJIgBgIIgBgWIgCgXIgFAAQgNAAgHgCQgFgBAAgFQAAAAAAgBQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAQABAAAAAAIAJABIAKABIALAAIAIgBIAOABIANABQABAAAAAAQABAAABAAQAAAAAAABQABAAAAAAQABABAAAAQAAABAAAAQABABAAABQAAAAAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAAAAAQgBABgBAAQAAAAgBAAIgNgBIgOgBIgEAAIACAbIABAYIAAAGIABAGIgBAHQgCAEgDAAIgDgBg");
	this.shape_52.setTransform(145.1,14.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAUAeIgEgTIgPADIgOADIgKAXQgCADgDAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAgBQgBAAAAAAQAAgBAAgBQAAAAAAgBQAAgDAJgSIgBgEQAAgEAGgCIAQgbQAMgWAEAAQAEAAACAHIAEATIAIAnIAEAJIABAHQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAABQgBAAAAAAQgBABgBAAQAAAAgBAAQgFAAgEgOgAgGAEIAUgEIgFgVg");
	this.shape_53.setTransform(136,14.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgmAtQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIABgHIAAgIIAAgLIABgLIAAgJIgBgMIAAgLIgBgLQAAgDACgCQADgCADAAQADAAAEAHQAPAWAKAOQANAPARAQIAAgIIAAgHQAAgYgCgPIgCgGIgBgGQAAgHAGAAQAKAAAAAmIAAARIAAAUIgBAJQgBAGgFAAQgDAAgFgEQgYgXgdgoIAAANIAAALIAAAPIAAAPQAAAPgGAAQgDAAgCgCg");
	this.shape_54.setTransform(127,14.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgYArQgBgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAABgBQAAAAAAAAQABgBABAAQAAAAABAAIAMgBIABgLIAAgKIgBgJIACggIgIAAIgHAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAgBAAgBQAAAAAAgBQAAgFAFgBIASAAQAKAAARACQAFABAAAGQAAAAAAABQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgJgBIgKgBIgBAfIAAAKIABAKIgBAKIATAAQAAAAABAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQABAAAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQgBAAAAAAIgKAAIgKAAIgKABIgLABQgBAAAAAAQgBAAgBAAQAAAAAAgBQgBAAAAAAg");
	this.shape_55.setTransform(118.9,14.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgRAvQgHgCgDgDIgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAgBIACgSIAAgSIAAgTIAAgUQAAgDACgDQACgCACAAIAKAEIALAFQAOAFAMAMQANAOAAAOQABAKgFAKQgFAJgIAFQgJAHgPAAIgKgBgAgUgPIAAAPIgBAgIABAAQAFAEAIAAQALAAAHgEQAFgEAEgGQADgHAAgHQAAgOgSgNQgFgDgVgKg");
	this.shape_56.setTransform(111.5,14.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgdAsQAAAAAAgBQgBgBAAAAQAAgBAAAAQgBgBAAAAIAAgOIAAgOIABgOIABgQIgBgJIAAgJQAAgDACgCQACgEAEABIAOABQAIABAEADQAYAMAAATQAAAIgJAFQgGAGgKADQATAJAIALIACAEQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgEgBQgUgUgWgGIABALIABAMQAAAAgBABQAAAAAAABQAAAAAAABQgBABAAAAQAAAAgBABQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAgAgRgZIAAAHIgBAMIgBAKIADAAIACAAQAOAAAHgEQADAAACgDQADgDABgCQgBgJgIgHQgHgGgJgBIgJgBg");
	this.shape_57.setTransform(103.3,14.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgcAkQgMgLAAgQQAAgTAMgQQANgTASAAQATAAAKAJQAJAJAAAUQAAASgLAQQgMATgSAAQgRAAgLgKgAgTgSQgJANAAAOQAAALAIAHQAIAHAMAAQAMAAAJgPQAJgMAAgOQAAgOgHgGQgGgGgOAAQgMAAgKAPg");
	this.shape_58.setTransform(94.6,14.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgcAkQgMgLAAgQQAAgTAMgQQANgTASAAQATAAAKAJQAJAJAAAUQAAASgLAQQgMATgSAAQgRAAgLgKgAgTgSQgJANAAAOQAAALAIAHQAIAHAMAAQAMAAAJgPQAJgMAAgOQAAgOgHgGQgGgGgOAAQgMAAgKAPg");
	this.shape_59.setTransform(85,14.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgXAjQgIgJAAgMQAAgSAQgVQAOgRANAAIAEAAIAFABQABgDAEAAQAEAAABAFIABAMIgBAEQgCADgDAAQgEAAgBgFQgCgEgCAAQgBgBgEAAQgJAAgJANQgOARABAOQAAAIAEAFQAFAGAIAAQAEAAAFgDIALgHIAFgDQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABABAAAAQAAAAABABQAAAAAAABQAAABAAAAQAAADgDACQgPAOgNAAQgNAAgIgKg");
	this.shape_60.setTransform(76.7,14.1);

	this.btn_menu = new lib.skiptomenu();
	this.btn_menu.setTransform(514.1,20.3);
	new cjs.ButtonHelper(this.btn_menu, 0, 1, 2, false, new lib.skiptomenu(), 3);

	this.instance_3 = new lib.OR();
	this.instance_3.setTransform(234.3,139.9,0.955,0.955);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgTgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABgBQASADATADIgBACQAAABAAAAQgBABAAAAQgBAAAAABQAAAAgBAAQgRgBgSgGg");
	this.shape_61.setTransform(370.2,208.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_61},{t:this.instance_3},{t:this.btn_menu},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]}).wait(1));

	// btn
	this.instance_4 = new lib.Copyright("synched",0);
	this.instance_4.setTransform(275,389.5);

	this.btn_goBack = new lib.goNext();
	this.btn_goBack.setTransform(57.6,352.3,1,1,0,0,180);
	new cjs.ButtonHelper(this.btn_goBack, 0, 1, 2, false, new lib.goNext(), 3);

	this.btn_goNext = new lib.goNext();
	this.btn_goNext.setTransform(494,352.3);
	new cjs.ButtonHelper(this.btn_goNext, 0, 1, 2, false, new lib.goNext(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_goNext},{t:this.btn_goBack},{t:this.instance_4}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(284.2,201.8,537.1,397.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;