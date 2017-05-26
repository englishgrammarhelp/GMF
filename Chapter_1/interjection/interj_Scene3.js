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
		{src:"sounds/s_coolcheer.mp3", id:"s_coolcheer"},
		{src:"sounds/scene3awav.mp3", id:"scene3awav"}
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



(lib.Symbol58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgKCJQgHgIAAgHQAAgGAFgGQAFgEAGAAQAFAAAHAKQAHAHAAAIQAAAHgFAEQgFAFgGgBQgFAAgHgJgAgMBAIAAgVIgBgWIABhKIAAhNQAAgPAOAAQAQAAAAAPIAADCQAAAQgQAAQgOAAAAgQg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.8,-14.7,3.8,29.4);


(lib.Symbol57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhUCHQgFgIAAgIQAAgpAChQQADhSAAgpQAAgIAFgEQAFgGAHAAQAIAAAFAGQAFAEAAAIQAAARgDAlIgBA1QAYgWAdgiIAwg7QAHgHAHAAQAHABAFAFQAGAFAAAHQAAAMgtAyQgfAigfAgQAUAVArArIASAPQALAHAMAFQANAEAAANQAAAFgDAGQgGAHgHAAQgbAAgvgvIg1g1IAABeQAAASgPAAQgKAAgGgJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9,-14.4,18.1,28.9);


(lib.Symbol56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhIBsQgYgbAAglQAAg6Axg/QAqg0ApAAIAPABQAHABAFACQAGgKAKABQAMAAAEAQQACAOAAAVQAAAHgDAFQgFAIgJAAQgLAAgGgOQgFgMgEgCQgEgBgOAAQgaAAgdAnQgqA0AAAtQAAAXAOAPQAPARAVAAQARAAASgJQAKgGAVgOQAKgIAFAAQAIAAAFAGQAFAFAAAHQAAAJgHAFQguApguAAQgkAAgZgbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.7,-13.6,19.6,27.2);


(lib.Symbol55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhNBoQgWgagGgxQgCgWAAhBIABgoQABgQACgGQAEgNAMAAQAQAAAAAdIAABoQAABoBIAAQBGAAAAixIAAgRIAAgOQABgLADgJQAFgKAKAAQARAAABAYIAAAWIAAAWQAADJhqAAQg0AAgbgfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.8,-13.6,21.7,27.2);


(lib.Symbol54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgkCHQgGgGAAgHQAAgHAQgfIAWgnQgfgpgKgVQgIgVgSgbIgeguQgDgEAAgGQAAgHAGgGQAGgEAGgBQAJAAAGAJIANAWQAUAbAFAKQANAWAIASQAFAPARAXIAphgQAHgMAMgZQAFgMAMAAQAGAAAGAEQAGAFAAAIQgBAIgIARQgFAGgHAOIgeBMQgSAogPAfIgdA6QgHALgKAAQgGgBgFgEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.5,-14,21,28);


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


(lib.huhbubblestill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* _root.v4.start();*/
	}
	this.frame_14 = function() {
		/* _root.v5.start();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(16));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgRAyQgCgCgBgCQABgFACgDQADgEADAAQAHAAAAAIQAAAEgBADQgDAEgEAAQgCgBgDgCgAgMAYQgCgCAAgCQgBgFAJgHIAOgLQAJgHAAgGQAAgJgHgGQgIgHgFAAQgFAAgGAFIgIAEQgDAAgDgCQgCgCAAgDQAAgFALgGQAJgEAHAAQAMAAALAKQAKALABAOQAAAJgHAHQgDAEgLAHQgKAIgCAEQgDAEgDAAQgDAAgBgDg");
	this.shape.setTransform(8.1,0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AASAzIgDgQIgBgQIAAgFIAAgGQAAgLgGAAQgIAAgGAGQgDAEgGAMQAAAagCAFQgCAEgEAAQgDAAgCgCQgBgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBIAAgDIABgKIAAgKIAAgwIABgMIgBgGIAAgHQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABAAQABAAAAAAQAGAAABAGIABAMIAAAPIgBAPIAAAGQAGgIAGgEQAFgDAHAAQALAAAFAHQADAFAAALIAAANIACAOIACAOIAAACQAAADgCACQgCABgDAAQgEAAgCgFg");
	this.shape_1.setTransform(0.7,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAPAgQgIAFgKAAQgJAAgGgEQgGgFgCgIQgCgSAAgMQAAgKACgMQABgGAGAAQACAAACACQACACABADIgCAKIgBALIABARIADANIAEACIAEABQAIAAAKgDIAAgOIAAgLIABgaQABgGAFAAQADAAACACQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAIgBAaIAAANIAAAPIAAAEIAAAFQAAABAAAAQAAABAAABQAAAAgBABQAAAAgBABQgBACgDAAQgGAAgBgHg");
	this.shape_2.setTransform(-7.1,2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgpA2QgCgCAAgDIABgWIABgWIAAgJIgBgLIABgRIABgQQAAgDACgCQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAQADAAACABQACACAAADIgBARIAAAQIAAAPIAcgDQARgEAMAAIABgdIABgLQADgHAEAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABQACACAAADIAAACIgBAJIAAAGIAAAGIgBAUIgBATIAAAPIABAQQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAQgDAAgCgCQgCgCAAgDIgBgQIAAgPIAAgKQgMAAgQADIgcAGIgBARIgBASQAAADgCACQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_3.setTransform(-16,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AE7ArQgVAng+AfQheAviFAAQiDAAhegvQhegvAAhCQAAhBBegvQBegvCDAAQCFAABeAvQAlATAXAV");
	this.shape_4.setTransform(-7,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AkeBxQhegvAAhCQAAhBBegvQBegvCFAAQCDAABeAvQAlATAWAVIAEAAIAAABIABAAIATACIAAABIABAAIAfAEIAMACIAKABIAAAAIABABQAHABAHABIAIADIAAAAIABABIADABQAOAEANAHQAFADADAGQADAEAEADIABADIADAFIACABQACACAAACIABACQgMAAgLADIgcAGIgBAAIgBABIgHABIgCAAIgFAAIgJACIgBABIgBABIgDACQgFACgFAAIgBABIgBABIgBABIgGAFIgBABIgFAAIgPAKIgFACQgEACgDAEIgBACIgCAEIACABIABABQgVAng9AfQheAviDAAQiFAAhegvg");
	this.shape_5.setTransform(-0.4,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag7A7IgBgBIgCgBIACgEIABgCQACgEAFgCIAEgCIAQgKIAEAAIACgBIAGgFIABgBIABgBIAAgBQAGAAAEgCIAEgCIABgBIAAgBIAIgCIAFgBIACgBIAHgBIABgBIABAAIAcgGQALgDAMAAIgBgCQAAgBgDgBIgBgBIgDgFIgBgDQgFgDgCgEQgEgGgEgDQgNgHgOgEIgDgBIgBgBIgBAAIgIgDQgGgBgFgBIgBgBIAAAAIgKgBIgMgCIgfgEIgBAAIAAgBIgTgCIgBAAIAAgBIAAAAIABgBIAAgBIAVABIABABIAAAAIAgADIALABIAKACIABABIAAABIAGACQAFABAFAAIAEAAIABABIAAABIANAFQAHADAGAFIANAGIABACQABACACACIACABIACADIABACIAAABIACACIADADIABACIACAEIADAGIgBABIgRACIgBABIgBABIgcAFIgJABIgBABIAAAAIgKACIgJADIgDACQgHAEgJABQgBADgEADIgLAFQgOAGgLAMg");
	this.shape_6.setTransform(30.6,-1.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgFAGQgCgDAAgDQAAgCACgCQADgDACAAQADAAADADQACACAAACQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_7.setTransform(2.2,4.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgpA2QgCgCAAgDIABgWIABgWIAAgJIgBgLIABgRIABgQQAAgDACgCQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAQADAAACABQACACAAADIgBARIAAAQIAAAPIAcgDQARgEAMAAIABgdIABgLQADgHAEAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABQACACAAADIAAACIgBAJIAAAGIAAAGIgBAUIgBATIAAAPIABAQQAAADgCACQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQgDAAgCgCQgCgCAAgDIgBgQIAAgPIAAgKQgMAAgQADIgcAGIgBARIgBASQAAADgCACQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_8.setTransform(-4.9,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgiAqQgOgMABgUQgBgWAOgTQAQgVAWAAQAWAAALAKQAMAKAAAXQgBAWgNATQgOAVgWAAQgTAAgOgLgAgXgWQgLAQAAAQQAAANAKAJQAKAHANAAQAPAAAKgQQALgPgBgRQAAgQgHgHQgHgGgQAAQgPAAgMAQg");
	this.shape_9.setTransform(-15.9,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AEkhIQgXgVglgTQhegviFAAQiDAAheAvQheAvAABBQAABCBeAvQBeAvCDAAQCFAABegvQA+gfAVgn");
	this.shape_10.setTransform(-7,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},14).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.5,-17,78.1,34.1);


(lib.gulpbubblestill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgDA1QgDgDAAgDQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAgBQABAAAAAAQABAAAAgBQABAAABAAQAAAAAAAAQACAAACAEQADADAAACQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgBABAAAAQgBgBgDgDgAgDAYIAAgIIgBgIIABgcIAAgdQAAgHAEAAQAGAAAAAHIAABJQAAAHgGgBQgEABAAgHg");
	this.shape.setTransform(17,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgcA1QgBgCAAgEIAAgUIABgbIABgbIAAgJIABgKQACgHAFABIAGgBIAKAAQAKAAALAJQAMAJAAANQAAASgMAHQgMAJgOAAIgIgBIgBAkQAAAEgCACQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBAAgAgOgoIAAANIgCAbIAIAAQAJAAAIgFQAJgGAAgLQAAgHgIgGQgIgFgHAAIgFAAIgEAAg");
	this.shape_1.setTransform(12,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgcA1QgEgDAAgHIABgXQACgdAAgnQAAgDACgBQACgCADAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABQACABAAADQAAAngBAeIgBAKIgBALQASAAAZgJIADAAQADAAABACQACACAAADQAAAEgEACQgIAEgQADQgOACgJAAQgHABgDgDg");
	this.shape_2.setTransform(4.6,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgdAoQgIgKgDgTIgBghIABgPIABgJQACgFAEAAQAGAAAAAMIAAAnQAAAoAbAAQAcAAAAhEIAAgGIAAgFQAAgFABgDQACgEAEAAQAHAAAAAJIAAAIIAAAJQAABNgpAAQgUAAgKgMg");
	this.shape_3.setTransform(-4.5,0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AghAvQgJgKAAgTQAAgSAJgQQAHgTAOgMQAIgHAIgBQAHABAKAEQAMAFAAAFQAAAEgCACQgCACgDAAIgEgCQgKgGgIgBQgEABgEAFIgJAKQgPAUgBAXQAAANAFAFQAEAGALgBQALABAJgIQAKgIADgPQgTABgLAGIgEABQgDAAgBgCQgCgDAAgCQAAgFADgCQANgGAkgBQADAAACACQACABAAACQAAAEgEADQgEAUgOANQgNANgRAAQgRAAgHgJg");
	this.shape_4.setTransform(-14.3,0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("ACmCmQhGA1hgAAQhpAAhMhBQhLhAAAhaQAAhZBLhAQBMhABpAAQBqAABLBAQBLBAAABZQAABDgpA1");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAXAvIgCgDIAAgBIgBgCQgCgGgEgFIgBgBIgGgIIgQgMIgHgEIgBgBIAAAAQgMgDgJgEIAAgBQAMgCANAGIABAAIAAAAQAPAJAOAOIADAEIACACIACAFQACADAAADQAAABABgBQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAgDACgDIACgCIAAgCIAAgBIACgCIABgBIAAgKIAAgNIgBgBIgBAAIgBgBIAAgDIgBgCIgBgCIAAgBIAAgDIgCgFIgCgHIgEgDQgDgEgBgFIAAAAIgEgBIgBgBIAAgBIgGgDIgGgDIAAAAIAAgCIABgBIAAAAIAAAAIACAAQAFgBAEADIAEACQAGAEACAFIAGAIIADAIQACAFgBAFIACABIAAACIABACIACABQABAHgBAJIAAAOIgDAFIgEAGIAAACQABACgCADIAAACIgBABIgGABIgBgCg");
	this.shape_6.setTransform(21.1,17);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ai0CaQhMhAABhaQgBhZBMhBQBLg/BpgBQBqABBLA/QBLBBABBZQgBBDgpA1IgCAAIAAAAIgBAAIgBABIAAACIABAAIAFAEIAGACIAAABIABABIAEABIABAAQABAFACAEIAEAEIACAHIADAEIAAADIAAACIABABIAAACIAAADIABABIABACIABACIAAAMIAAAKIgBABIgCACIAAACIAAABIgBACQgCADAAADQAAABgBAAQAAABAAAAQAAAAAAABQAAAAAAgBQgBgDgCgDIgCgFIgBgBIgEgFQgNgOgSgJIAAAAIAAgCQgNgGgNACIAAABIgEADIgBgCQhGA1hggBQhpAAhLhAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.7,-22.9,53.4,45.8);


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


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol58("synched",0);
	this.instance.setTransform(47.4,-0.4);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 221, 37, 0, 0)];
	this.instance.cache(-4,-17,8,33);

	this.instance_1 = new lib.Symbol57("synched",0);
	this.instance_1.setTransform(34.2,0.7);
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 221, 37, 0, 0)];
	this.instance_1.cache(-11,-16,22,33);

	this.instance_2 = new lib.Symbol56("synched",0);
	this.instance_2.setTransform(11.1,0);
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 221, 37, 0, 0)];
	this.instance_2.cache(-12,-16,24,31);

	this.instance_3 = new lib.Symbol55("synched",0);
	this.instance_3.setTransform(-13.2,0.3);
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 221, 37, 0, 0)];
	this.instance_3.cache(-13,-16,26,31);

	this.instance_4 = new lib.Symbol54("synched",0);
	this.instance_4.setTransform(-38.7,0.4);
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 221, 37, 0, 0)];
	this.instance_4.cache(-12,-16,25,32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.2,-15.1,98.5,30.2);


(lib.huhbubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// Layer 1
	this.instance = new lib.huhbubblestill();
	this.instance.setTransform(45.7,12.1,0.044,0.058);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({scaleX:1,scaleY:1,x:0,y:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(44,11.2,3.4,1.9);


(lib.gulpbubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		/* _root.gulp.start();*/
	}
	this.frame_44 = function() {
		this.gotoAndPlay(20);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(25).call(this.frame_44).wait(1));

	// Layer 1
	this.instance = new lib.gulpbubblestill();
	this.instance.setTransform(18.2,32,0.036,0.036);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,x:0,y:0},19).to({scaleY:0.04},2).to({scaleY:1.08,skewX:180},2).to({scaleY:0.04},2).to({scaleY:1,skewX:0},2).wait(18));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(17.2,31.2,1.9,1.6);


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


(lib.yuckbubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* _root.v1.start();*/
	}
	this.frame_12 = function() {
		/* _root.v2.start();*/
	}
	this.frame_29 = function() {
		/* _root.v3.start();*/
	}
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12).call(this.frame_12).wait(17).call(this.frame_29).wait(20).call(this.frame_49).wait(1));

	// GROSS
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKCFQgGgIgBgHQAAgGAGgEQAEgFAHAAQAEAAAHAJQAGAIAAAHQAAAGgEAFQgFAFgGgBQgFAAgHgJgAgLA+IAAgVIAAgUIAAhIIAAhLQAAgPANAAQAQAAgBAPIAAC8QABAPgQAAQgNAAAAgPg");
	this.shape.setTransform(413.2,275.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhEB2QgfgPgBgaQAAgGAFgFQAFgFAHAAQAJAAAGAKQAJANAHAFQAOAJAcAAQAYAAAXgMQAdgOAAgaQAAgWgYgNQgVgKgcgBQgbAAgTgKQgZgOAAgaQAAgeAjgZQAhgXAhgBQARAAAVAGQAbAHAAALQAAAQgPAAQgHAAgRgEQgRgDgKAAQgYAAgTANQgTANAAATQAAAOAZAFQAKADAZACQAnADAWAVQAUASAAAdQAAAogmAZQggAUgpAAQggAAgagLg");
	this.shape_1.setTransform(397.5,276.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhEB2QgfgPgBgaQAAgGAFgFQAFgFAHAAQAJAAAGAKQAJANAHAFQAOAJAcAAQAYAAAXgMQAdgOAAgaQAAgWgYgNQgVgKgcgBQgbAAgTgKQgZgOAAgaQAAgeAjgZQAhgXAhgBQARAAAVAGQAbAHAAALQAAAQgPAAQgHAAgRgEQgRgDgKAAQgYAAgTANQgTANAAATQAAAOAZAFQAKADAZACQAnADAWAVQAUASAAAdQAAAogmAZQggAUgpAAQggAAgagLg");
	this.shape_2.setTransform(373.3,276.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhVBpQgkgeAAgxQAAg5AjgwQAng2A5AAQA4AAAbAZQAdAaAAA5QAAA5ggAwQglA2g5AAQgwAAghgdgAg7g4QgbAmAAAsQAAAhAYAVQAYATAiAAQAoAAAbgqQAYglAAgtQAAgpgSgQQgSgQgpAAQgoAAgdAqg");
	this.shape_3.setTransform(347.1,276.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhWCBQgFgFAAgIIgBgoIgBgoQgBgQAEgdQADgfAAgQIgBgaIgCgZQAAgKAGgIQAGgJAMABIAoADQAYADAOAJQBFAlAAA1QAAAagXASQgTAQgdAIQA1AdAbAfQAEAGABAGQgBAHgFAFQgFAGgHAAQgHAAgFgGQg5g4hDgTIACAhIAAAiQAAAIgFAFQgEAFgIAAQgHAAgFgFgAg2hMIABAVQAAAOgCAUIgDAgIAHAAIAIAAQArAAAUgLQAKgEAIgIQAJgKAAgGQAAgYgbgVQgXgSgbgDIgZgCg");
	this.shape_4.setTransform(322.4,275.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhXB0QgUgXgBgvQABgtAUgtQAVgvAhgcQAWgUAWAAQAQAAAZALQAfAMAAAPQAAAHgEAFQgGAGgHAAQgDAAgIgFQgZgQgTAAQgLAAgOAOQgGAGgOASQgnA0AAA8QAAAgAKAMQAKAPAdAAQAdAAAWgUQAZgUAJgmQgwACgfAQQgEACgEAAQgIAAgEgGQgFgFAAgHQAAgKAJgFQAjgVBaAAQAHAAAGAFQAEADAAAHQAAAMgJAEQgKA1gjAfQghAggtAAQgpAAgWgYg");
	this.shape_5.setTransform(299.4,275.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},29).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},20).wait(1));

	// ugh
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgKCFQgHgIAAgHQABgGAFgEQAEgFAGAAQAFAAAHAJQAHAIgBAHQABAGgFAFQgFAFgGgBQgFAAgHgJgAgLA+IAAgVIAAgUIAAhIIAAhLQAAgPAOAAQAOAAAAAPIAAC8QAAAPgOAAQgOAAAAgPg");
	this.shape_6.setTransform(403.5,278.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgKCFQgGgIgBgHQAAgGAGgEQAEgFAHAAQAEAAAHAJQAGAIAAAHQAAAGgEAFQgFAFgGgBQgFAAgHgJgAgLA+IAAgVIAAgUIAAhIIAAhLQAAgPANAAQAQAAgBAPIAAC8QABAPgQAAQgNAAAAgPg");
	this.shape_7.setTransform(395.2,278.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgKCFQgGgIAAgHQAAgGAEgEQAFgFAHAAQAEAAAHAJQAGAIABAHQgBAGgEAFQgFAFgGgBQgFAAgHgJgAgLA+IAAgVIgBgUIABhIIAAhLQAAgPANAAQAPAAABAPIAAC8QgBAPgPAAQgNAAAAgPg");
	this.shape_8.setTransform(386.9,278.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhqCHQgFgFAAgHQAAgSADgkQADgkAAgSIAAgbIgBgcIACgpIABgpQAAgHAFgFQAFgEAHAAQAHAAAEAEQAFAFAAAHIgCApIgCApIACAqIBIgMQArgJAeAAQACgYAAgyQAAgNAEgNQAGgSAKAAQAGAAAFAFQAGAEAAAHIgCAHQgCAIAAANIAAAQIAAAPQAAARgDAiQgDAgAAARIACAnIACAnQAAAHgFAFQgEAEgHAAQgHAAgFgEQgFgFAAgHIgCgnIgCgnIABgaQgdABgpAIIhIAOQAAAQgDAcQgDAcAAAQQAAAHgFAFQgEAEgHAAQgHAAgFgEg");
	this.shape_9.setTransform(370,278.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhXB0QgUgXAAgvQAAgtAUgtQAWgvAggcQAWgUAWAAQAQAAAaALQAeAMAAAPQAAAHgEAFQgGAGgHAAQgDAAgIgFQgZgQgTAAQgLAAgOAOQgGAGgNASQgoA0AAA8QAAAgAKAMQALAPAcAAQAdAAAWgUQAZgUAJgmQgvACggAQQgEACgEAAQgHAAgGgGQgEgFAAgHQAAgKAJgFQAjgVBaAAQAIAAAEAFQAGADgBAHQAAAMgJAEQgKA1giAfQgjAggsAAQgpAAgWgYg");
	this.shape_10.setTransform(344.6,278.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhLBkQgVgYgGgwQgCgWAAg/IABgmQABgQACgGQAEgNALAAQAQAAAAAdIAABlQAABlBGAAQBFAAAAisIAAgRIAAgOQAAgKADgIQAFgLAKAAQAQAAAAAYIABAVIAAAVQAADEhnAAQgzAAgagfg");
	this.shape_11.setTransform(319.8,278.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},12).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},16).to({state:[]},1).wait(21));

	// Layer 1
	this.instance = new lib.Symbol58("synched",0);
	this.instance.setTransform(399.4,276.2,3,3);
	this.instance.alpha = 0;
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance.cache(-4,-17,8,33);

	this.instance_1 = new lib.Symbol57("synched",0);
	this.instance_1.setTransform(386.2,279.3,3,3);
	this.instance_1.alpha = 0;
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_1.cache(-11,-16,22,33);

	this.instance_2 = new lib.Symbol56("synched",0);
	this.instance_2.setTransform(363.1,277.3,3,3);
	this.instance_2.alpha = 0;
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_2.cache(-12,-16,24,31);

	this.instance_3 = new lib.Symbol55("synched",0);
	this.instance_3.setTransform(338.8,278.2,3,3);
	this.instance_3.alpha = 0;
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_3.cache(-13,-16,26,31);

	this.instance_4 = new lib.Symbol54("synched",0);
	this.instance_4.setTransform(313.3,277.4,2.375,2.375);

	this.instance_5 = new lib.Tween2("synched",0);
	this.instance_5.setTransform(352,274.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4,p:{scaleX:2.375,scaleY:2.375,y:277.4}},{t:this.instance_3,p:{scaleX:3,scaleY:3,y:278.2,alpha:0}},{t:this.instance_2,p:{scaleX:3,scaleY:3,y:277.3,alpha:0}},{t:this.instance_1,p:{scaleX:3,scaleY:3,y:279.3,alpha:0}},{t:this.instance,p:{scaleX:3,scaleY:3,y:276.2,alpha:0}}]}).to({state:[{t:this.instance_4,p:{scaleX:1.75,scaleY:1.75,y:276.2}},{t:this.instance_3,p:{scaleX:2.5,scaleY:2.5,y:277.3,alpha:1}},{t:this.instance_2,p:{scaleX:3,scaleY:3,y:277.3,alpha:0}},{t:this.instance_1,p:{scaleX:3,scaleY:3,y:279.3,alpha:0}},{t:this.instance,p:{scaleX:3,scaleY:3,y:276.2,alpha:0}}]},1).to({state:[{t:this.instance_4,p:{scaleX:1.125,scaleY:1.125,y:275.1}},{t:this.instance_3,p:{scaleX:1.875,scaleY:1.875,y:276.3,alpha:1}},{t:this.instance_2,p:{scaleX:2.625,scaleY:2.625,y:276.7,alpha:1}},{t:this.instance_1,p:{scaleX:3,scaleY:3,y:279.3,alpha:0}},{t:this.instance,p:{scaleX:3,scaleY:3,y:276.2,alpha:0}}]},1).to({state:[{t:this.instance_4,p:{scaleX:1,scaleY:1,y:274.9}},{t:this.instance_3,p:{scaleX:1.25,scaleY:1.25,y:275.2,alpha:1}},{t:this.instance_2,p:{scaleX:2,scaleY:2,y:275.8,alpha:1}},{t:this.instance_1,p:{scaleX:2.75,scaleY:2.75,y:278.8,alpha:1}},{t:this.instance,p:{scaleX:3,scaleY:3,y:276.2,alpha:0}}]},1).to({state:[{t:this.instance_4,p:{scaleX:1,scaleY:1,y:274.9}},{t:this.instance_3,p:{scaleX:1,scaleY:1,y:274.8,alpha:1}},{t:this.instance_2,p:{scaleX:1.375,scaleY:1.375,y:275,alpha:1}},{t:this.instance_1,p:{scaleX:2.125,scaleY:2.125,y:277.5,alpha:1}},{t:this.instance,p:{scaleX:2.875,scaleY:2.875,y:276.1,alpha:1}}]},1).to({state:[{t:this.instance_4,p:{scaleX:1,scaleY:1,y:274.9}},{t:this.instance_3,p:{scaleX:1,scaleY:1,y:274.8,alpha:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,y:274.4,alpha:1}},{t:this.instance_1,p:{scaleX:1.5,scaleY:1.5,y:276.2,alpha:1}},{t:this.instance,p:{scaleX:2.25,scaleY:2.25,y:275.4,alpha:1}}]},1).to({state:[{t:this.instance_4,p:{scaleX:1,scaleY:1,y:274.9}},{t:this.instance_3,p:{scaleX:1,scaleY:1,y:274.8,alpha:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,y:274.4,alpha:1}},{t:this.instance_1,p:{scaleX:1,scaleY:1,y:275.1,alpha:1}},{t:this.instance,p:{scaleX:1.625,scaleY:1.625,y:274.7,alpha:1}}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_4,p:{scaleX:1,scaleY:1,y:274.9}},{t:this.instance_3,p:{scaleX:1,scaleY:1,y:274.8,alpha:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,y:274.4,alpha:1}},{t:this.instance_1,p:{scaleX:1,scaleY:1,y:275.1,alpha:1}},{t:this.instance,p:{scaleX:1,scaleY:1,y:274.1,alpha:1}}]},4).to({state:[]},1).wait(38));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(288.4,232.1,125,90.6);


(lib.Scene3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gulpbubble();
	this.instance.setTransform(139.6,-88);

	this.instance_1 = new lib.huhbubble();
	this.instance_1.setTransform(26.5,-100.1);

	this.instance_2 = new lib.yuckbubble();
	this.instance_2.setTransform(-283.1,-165.7,0.555,0.555);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("Aav1WIAMAAA661WIAKAAQABAAABAAIA0AAQABAAABAAIDjAAIC0AAMAt1AAAIAbAAA661YIAAACIAAIXIAAI9IAAALIAABVIAAO7IAAAhIAADGIAAAZIAAEtIAAAJIAAAKISGAAIAEAAIe8AAIEPAAIAgAAIAAgLAavKLQAAgFAAgEIAA/YAa1VMIAArB");
	this.shape.setTransform(4.9,0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AtzH2QgdgDgcgBIAAkhIBhAAIAAhkQASABAUgCIAFAAIBlAJIASACIAcAFQAXAEAWAJIAKAEIAIgEIAYgIIAOgEQAWgGAXgJIARgGQAtgOAuATQgUAMgRASQgaAdgkARIgLAKIgGAHIAAAAIABACIAAAAQALASAHATQAEANACANIABAbQABALgCAMIgDARQgDAQgGAPQgLAXgTASQgeAbgkASQgQAIgQAFIipAAIAAAgIguAEIgWACIgIABIgIgBgANCmZQAGgLgIgNQgCgEgEgCQgGgEgIABIgHACIgEACIABgBIABgJIAMAAIAAglIADgDIAEgDQADgDAFgBIAAAAQAHAAAEAFQAIANAEAOIAFAdIACAHQACAFgBAEIgBABIgBADIgUAFIgCAAIgCAAIgBAAgAOVm/IACgBIABgCIABAAQADgCACgEIABgHQAAgHgDgEQgHgPgQABQgMADgDAKIAAAAIgBgIIABgKIAAgBIAAgBIACgHIAoAAIAJAMQAHAJgDAMIgBADQABAFgDAEIAAAAIgBAAIgEABIAAAAIgDACIgCACIgMAGIABgBg");
	this.shape_1.setTransform(3.6,-43.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_2.setTransform(92.3,-92.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFFFFF","#000000"],[0,1],-33.6,3.2,-33.6,3.2).s().p("AgCABIAFgBIAAABg");
	this.shape_3.setTransform(-33.6,3.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006600").s().p("AABCWQAHg/gIg/QgKg+AFhBIACgqIADAIIAHgMIAAErIgGAAg");
	this.shape_4.setTransform(-168.3,120.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00CC33").s().p("AgDA6QAChPgDhQIAJgBIAADFIgEAGIgBACIgDgtg");
	this.shape_5.setTransform(-168,93.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAAMgIAGAAIAAAJIgGAAIAAgJgAgEH3IAChBIADAsIAAgCIAFgGIAAAZIgIAMIgCgIgAgED1IAKgCIAAAhIgJAAIgBgfgAAAskIAAAAIAGgEIAAALIgCgDIgBABIgDADIAAgIg");
	this.shape_6.setTransform(-168.1,55.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00CC00").s().p("AWfMqIAAgDQAJgHARABIAUAAIA8ABIBzAAQAOAAAOABIAMACIAKABIAAAEgA6tslIADgDIABgBIACADIAABVIgGhUg");
	this.shape_7.setTransform(3,56.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C6FFFF").s().p("AazHhQgEgLgCgNIAAgJIAAgDIgCAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQgBAAAAAAIABgbQABgOADgOIACgBIADgCQAOADgEAaIAAACQgEAYACAbIABAMIABAaIgEAAQgBgMgEgNgA6xgOQgajjAkjjIAGglIAAI7IgGAEIgBAAIgJhUg");
	this.shape_8.setTransform(2.4,-32.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FDFDFD").s().p("AhQEdIABgBIAAACIgBgBgAFXEHIABgBIAAADIgBgCgACMDtIABABIgBAAIAAgBgAA/DaIACABIgCAAIAAgBgAjcDHIABAAIgCABIABgBgAGhBeIAEAAIAAABIgEABIAAgCgAmkkdIAAACIAAAAIAAgCg");
	this.shape_9.setTransform(132.7,8.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FCFCFC").s().p("AhDAsIABABIgCABIABgCgAhhAAIADAAIAAAEgAhYgbIABAAIAAACIgBgCgABigtIAAAAIAAABg");
	this.shape_10.setTransform(145.3,-53);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FEFEFE").s().p("A2zRyIABAAIgBAAgAxDMNIABAAIAAACIgBgCgAzOxlQAngGAwABIBqACIBRAAIB/ABIA8ABQAeABAcgHQBPAIBSgCQAmgBA1AAIBgAAIBZgCICcgDICfABIBuACIAOAAQAnAAAtgGQA1AJA1gIIAAgBQApAFAtgBIBSAAQBZgBBiAAIBsAAIC2gDIBgAAIBqADIAAACQApgHA0ABQBlACBqgBIBeAAQA5ABAkgCIAMgBIADAMgAzOxlIi0AAQAhgFAsADQApADAugIQAHAEAJACIAAABgA5kxlIgDAAIgzAAQAEgHAFADIAAgBQA/ADBFABIBLAAQAlgBAbACgA6mxlIAAgCIAJACg");
	this.shape_11.setTransform(2.9,-23.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#050505").s().p("Ax7EwIADAAIAAABIgDgBgAR0kwIAAAjQAABLACBuQACBSAABWIABBqIADBdQAAAFgEADIgFACg");
	this.shape_12.setTransform(63.2,106.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 2
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#333333").ss(0.1,1,1).p("ALHtkQgIgSgGgSQABgLgBgMQASAFgEgVQAAgHgEgDQASAGgCgcQABAAgCgHQAEgDgBgDQASAJAFgWQgBgIADgEQANAMAPgTQgBgCAFgCQAIAGAMgRQALANAOgbQAYAJANgWQAIAHAGgCQAFgCAFAAQAKAQAUgEQALACAFgIQgCAOgDARQgFASgDASQgFAHgCAIQgIgBgCgCQgFgDgDgCQgMgGgIgJQgIgEgJgCQgTAEgPAJQgEAGgGgDQgGAHgDABQgGALgLAGQgDACgIgBQgEAIgGAMQgBgCgHADQACAOgQAIQgFAQAKArQADAhgRgdQgFgPgVgBQgSAEgNAOQgFASAAATQABATAIARQAKATATgEQASACAOgIQACgEAEgBQAOAGANANQACAEABADQAHANAJAMQAFAQAHARQACATADATQgCAUgNAQQAAABAAgBQgMAFgWABQgUgFgUAEQgLAAgJAHQgJAEgHAFQgIAGgFAHQABAGgIAAQgJASgOANQgHALgFAKQgDAGgCAFQgLAMgIANQgCADgBADQgNAMgOAOQgFASgNANQgEAKgFAHQgDAEgDAFQgGAIgEAKQgLAQgHATQgIANgEAOQgBAEgBAFQgMAQgBATQgIASgCATQgLAQAGAUQgGATACATQAAAFgBAFQACADAAABQAAACgDgBQAAgCABgDAKQuFQgSgBgTAEQgTAAgSAGQgWADgHARQgIAVATAMQAQAHAUAAQASAHAUgEQAFgBAGgBAJHsxQgSAFgIARQgGAMAOAIQARAFATACQAUACASgGQAUgGAJgMAJDrrQgIARAZAHQASAAASgDQAMACAHgIABZqlQgBAEAAAEQgBAUAMARQACAUAOAFQgIgJADgRQAFgYAGgRQgEADgEgEQgRgMAKgLQACgCADgBAAuqUQAAgEABgEQgFgVAZgQQgDAUANAHQAHACAFgBACkqfQgBABgBACQgDAGgCAFIAAABQgBACAAACQgMARAAATQAAAGAAAEIAAABQAAAGgBAAAB5qiQAJgQAPgIQgFARAOAJQADABAFAAQABAAABAAABqq6QgNAHgEAOAiUlJQAAgCAAgDQABgUACgTQACgUgCgTQAHgTgCgUQAEgSAHgSQACgLAEgLQACgGAEgFQAAgCAAgBQAGgQAPgKQAMgPALgPQAFgIAGgHQAGgGAHgGQAOgNARgLQARgKAMgNQATgHAQAAQgCAPAHAOQAKASAPAJQgdgCgZAMQgDABgCACQgNAIgHAKQgXAUgWAWQAFAFAHADQAFADAGABQACABADAAQARADAMACQAFABABAHQgDgHgOAFQgHACgIgBQgJAAgHgEQgKALgGAMQgCADgBADQgCAVAIAQQAHADALgDQALgDALgFQgIABgDgBQgQgSATgPQACgBACgBQAGgDAFADQAGACAGAGQABgEAAgEQAAgDAAgDQACgIgBgEAgZoHQAAgBABgBQAAgBABgBQAIgMAPgFQAIgDAMgEABzpfQAOAFAOADQAAAAABABQABAAABABQACACACABQAHAIAFALQABACABACQAGASAGATQgBAGAAAFQgBAIAAAIQgBAFAAAGQgCAFgBAEQAAAAAAAAQgBADABABABzpfQgOgBgNAEQgCABgCAAQgEAAgEgBACToEQgHAJgNgFQgFgEgFgCQgHgEgHgBQgFgBgEABQgBAAgBAAQgFACgFACQgEACgDACQAJAXAWAAQALAAAKgEQAGgCAGgEQAHgEACgIQAGAIAEAJQADAFABACIAAADABKnFQgOgDAAgTQgCgGABgGQABgJAGgLQAEgEAFgEABwohQAQAJAMANQADAEAEADQABgCABgDQAAAEgBADQgBgBAAgBACvp1QgJgHgCgSQACgKAFgHQAFgHAIgFQgQAEgDAFQgBABAAACACspwQABgDACgCQACABACAEQAOADAJANQAIAGAFAIQADAHABAJQAGAPADASQABALADALQABAHACAGQADANACAKQABAEABAEAD+icQgBgCAAgDQgEgTgDgSQgDgUABgTQABgTABgSQACgTACgTQAAgDAAgDQADgRAJgPQABgQAHgRQABgSAEgSQAEgRAKgRQAAgMABgMQABgFABgEQAAgBAAAAQAAgBAAgBQAAgEABgFQgBgMgBgNQAAgGAAgFQgHgSgDgUQgIgMgKgKQgDgCgDgCQgHgPgLgMQgRgJgTgDQgSgDgKALACSpVQAJABAHACQAKADAGAGQAPAMAEATQAEAPABAQQAAADABAEQAAAOABAPQABAEAAAEQgGASgEAUQgKAQgNAPQgEANgGALQgCAFgCAEQgFASgIARQgEAMAAAMQgBAHACAHACzpwQgEAAgDAAACWpeQAEgIAIgGQAEgCAGgCACun7QAAALgCAJQgBACgBACQgEAGgEAGQgGAJgFAIQgGAOgFARQgHAOgDATQgHAPgEATQgGASgFARQgBABgBACQgIAOAAAQQgDAHgBAGQgDALADALQAFgMAFgMADrnBQAAARgFAPQgGAVgKAQQgDATgNAQQgDAOgIANQgCADgCADQgHAQgKAQQgCAEgCAEQgHANgGANQgMAPgGASQgLAQgHARQgBAEgDACACHitQAJgPALgOQADgJAEgIQAEgKAEgJQAGgRANgPQAIgRALgOQAGgFAAgFAB/nwQgCAFgGAAQAAACgBACQAAAHgDAIABKnFQgBAAAAgBQgEgWAQgIQAVgFAJARQgEAIgGAIQgKADgMABQgCAAAAAAQgEAAgDgBgAANnfQgCALgHAKQgEADgGADAAfnIQgLARgRAKQgQAJgRAHQAHALALAFQAKAFAMAEAgIlkQAQgCASAGQATADAIAOQAAAJgBAIQgCAMgHAJQgKANgNgNQgLgKgIgLQgBgDgBgDQgEgQgDgQQgVAAgPANABekTQgIAJgMAGQgVARgiAJQgqgFgWgTQADAOACAVQACASAAASQABATADASQgGARgFAQQAAABAAABQgBAAAAABQAAgCABgBAAuhMQgBgKgBgKQAHgTAAgVQAKgRACgTQAIgSAGgTQAGgRAGgRQACgFADgFAgxhHQACADACACQAJAJAKAIQAJAXAIgNQAMgKAQgJQAIgEAHgEQAHgFAFgFQABAFAAAFQAAAEABAFQAAAFAAAEQAAAFAAAGQgBAOgCANQgCAQAEARQgGAUADASQACASAFARQAAABAAABQAFASAJAQQAIARAKAPQAOAOAMARQAPAGASAHQAJAEAKACQgGgIgEgOQgJgFgBgGQgDgCgBgBQAGADAFAIQACAAACAAQAGABAGABQAMACANgDQgMAPAAASIAAABQgCATgCATQAHASAGARQAAABAAABQgPAAgMgFQgQgGgRgHQgSgCgPgMQgUgEgOgLQgSgEgPgLQgUgDgRgFQgDgDgDgDQgLgIgPgBQgOgJgOgHQgCgBgBAAQgBgBgBAAIAAAAQgPgHgRgFQgIgCgHgDQgJgCgJgCQgSgGgQgEQgRgDgSgGQgPgDgJgGQAAADAAADQAAABABABQACAOAGAHAC1COQgFgHAAgIQgCgDgCgDQgDgGgBgFQgDgKgEgKQgIgPgHgSQgJgWgKgaQgCgdAFgfQACgHABgIQADgPADgQQAKgTAKgWQABgEACgEQACgFACgFQAAgEACgFQADgNAMgHQAGgHAOABQAUACAMAKQAKAKAJANQAAABABABQACAEADAFQgEgEgCgHAG+hUQgMgLgGgUQgEgLgDgLQgCgHgBgHQgNgPgEgUQgJgHgIgLQgFAUgBAXQADAMADAMQADAUAAAUQgFAOAEAOQgLgVgRgVQgEgOgHgMQgHgMgJgJQgEgFgBgEQgBAEgBAEQgCALgBALQgEATgDATQAAARgCAQQgBAGgBAGQgKANADAOQgHALgEALQgBgGgCgGQADgUgHgSQAAgGAAgFQgBgOgEgNQgDgRgJgPQgCgHgDgFQgBgEgCgEAMcoSQgEAHgEAHQgGAJgFAJQgEAFgDAGQgGALgEALQgJARgGARQgMAQgBASQgGAKgBAKQgKARgBAUQgJARABASQgBAIgDAIAKun/QgDALgEANQgDAGgCAHQgOAKgGAPQgHASgMAPQgEATgGATQgCATgCAUQgJARgBAUQgFATgFATQABAUgCASAG+hUQAAgCABgCQADgPADgQQAHgKAHgIQAEgFAFgFQAJgKAKgJQAQgYASgKQgFAegLAhQgBAEgBAEQgHARgEASIAAABQAAABgBAAQgDANgCANQgCAGgBAHQABgHADgGQAEgNAHgLQAAgBABgBQACgEAEgEQANgOATgHQABgBACgBQAIgIAJgGQATgOAXgHQAPgLAQgGQAHgCAHgCQgFAGgHADQgDANgGAHQgHAGgGAHQgPAOgQANQgXASgQATQgEADgDAEQgDADgCAEQAGgCAGgCQADgCAEgBQAFgCAFgDQAQgHATgDQARgDAPgJQAWABASgIQAGAAAFAEQgFAPAAAPQAAAEABAFQADgFADgEQALgSAKgUQAQgPAJgSQAAAAAAAAQAIgMAEgJQAAAAAEAEQgBAIAAAJQgBAJAAAKQAAASgCARQgBACAAACQgBAHAAAGQgBAKABAKQgHAVACARQAEgNAOgHQAQgMASgIQAEgCAGgBQACgBAEgBQgCAEgCADQgGAHgGAGQgMAMgOALQgfAVgaAUQgFADgFADQADgBAKgBQAlgPArgGQAJgCAKgBQATgCAYAEQgRAJgPAMQgQAMgOAMQgSAQgPAPQAPgFASgEQAQgEASgDQAWgEAQgOQACAKgBAKQgHAOgBAQAG+hUQgCAGgBABAKng5QgFAHgFAHQgKAZgEAXAT/oIQgCgBgCAAQgUgEgUgFQANgGAXACQAVABASgEQAKgFgNgNQgDgRgGgSQASAJARANQAXARAAgeQAAgHABgGQACgMAGgLQAHAMAJALQAJAKAKAJQAEAEAGAHQAGgJAGgJQAEgHAEgFQAEgGAFgFQABAFACAGQADALAGAOQABAEALgDQAcgNAggDQAGAAAIAEQgVAEgRAPQAjACAkADQAdAKASARQAHAHADAMQgUADgVgDQgCAAgBgBQgCAAgBABQgMABAFASQAAACAAACQADAKAAALQAAAHgDADQgLgPgUgQQgDgDgDgCQgQgNgPgKQAAAOAAAOQAAAGAAAHQgEgHgEgGQgKgRgHgRQgVAMgYAMQgEAFgGAFQgFAEgHAEQABgEABgEQADgMABgLQgXAIggAEQgOAFgNAGQgRAHgPAJQAFgIAIgIQAHgJAKgIQAIgJAJgPQgRANgXAAQgRgCgQgDQADgEADgEATcmtQgIgHAAgPQABgVAOgNQABgBABgBQAJgGAIAGQADADADAFQgCgEgBgEQgFgOAGgOQADgCACgDAWCo0QgDAFgDAEAWCo0QACACACACAPKtCQAIALAGASQAGASADAUQgEAKgDAKQgEAJgDAHQgKAQgHAQQgGASgLAPQgJAPgIAQQgLANgGAQQgEAIgBAEQgBAKAMgCQAHAAAHgEQAHgCAHgCQALgCAOAAQAGAAAGACQALAEAHAIQAQAIALAUQADANgGATQABARgDgCQgCAIgCAMQgBAFgBAHQgIAQAAATQgHARgEASQABATgBASQgHARgCASQgIASgBAUQgDAQgBATQAAABAAAAQgBAIgBAIQgBALgBALQABAEAAACQgBADgBADQgEANgBAPQgCAUACASQAAADAAADQACAQAAAQQAEATAEARQAAABABACQAEARAGARQAGARAEAQQAFguAEgVQABgGABgDQAKgPAKgPQAAgRAHgPQAAgBABAAQAAgCACgCQAJgRALgQQAKgPAKgQQAKgRAPgJQALgSAPgJAOlt4QANgCAQACQANgBgCAYQADAMgEAOQgBADgBACQgGANgUABQgJAFgLADAOPu2QgQgLgMASQgOAIgFATQgBAPAFAMQABACAAABQACADACADQAAAFAHAAQAEABAFAAQABAAABAAQAKgCAIgIQACgCACgCQACgBABgBQABAAAAAAIAAgBQAEgCAEgBQABgCACgBQABgCABgBQgBACABACQAAABAAABQABADACADIAAAAQACADADACAOSvLQgDAKAAALQARAFADASQAFAQgGALANlt2QABgVAKgLQAPgFAKAKQAIAIAAARAN/tZQAOgMALgPQAGgCAGgCQAAAAABAAAM7tMQAIgDAIgDQAKACACgHQAIgNABgTQgKgSgJgPQgMgUgUALQgLAOgGAQQgKAQgDATQAAAAAAABQABgIAKgFQAPgLAOANQAPAPgLAPQgIADgHAEQgGAFgGgDQgMgFgEgOQgBgEAAgFAOUrgQAGAAAGgBQABAEADAHAOUrgQAEAQgHATQAAAUgRAJQgJAOgLAAQgMgLgBgSQgGgJAEgGQAKgPAQgJQAMgHARgDgAPPkEQAEgJAJgIQANgOAJgOQAOgMAOgMQARgIATgFQAOgOATgFQAOgLATgEQAPgLATgCQARgJAUgCQAQgIAOgEQABAAABAAANfjQQADgTgDgSQAEgRAFgTQgDgVAIgRQgDgVAKgSQAAgUAIgTQACgSAEgSQAHgTABgUANfjQQgBADAAADQAEASAIAPQADARAHAPQAAABABACQACATAHARQACAHADAHQABADABADQAAABAAABQAAAAgBABQABAAABABQgBgBAAgBANXhjQgCgBgCgFQgFgPgCgRQgBgVAIgRQAEgOAFgNQABgDACgDALnhTQAKAHAVgEQAHACAHAAQALABALgGQASABAMgPQAJgBAGgBAOGhKQAAACABACQgBgDgBgDAODhUQABAEABAEAOHhGQABACABACQADAIAEAIQAOANAKARQAIAQAJAOQAIARgFARQABAUgGATQACAUgHAQQgBAEgHADQgRAKAEATQALAJAPgFQAAAAAAAAQACgBADgBQAFABABgEQADgWANgXQADgFADgFANwBSQAGgLgBgMQAKgXAEgaQgEgdgGgdQgHgJgGgJQgDgEgCgEQgIgOgIgLAPPkEQgCAFgBAEQgEADAFAFAQDhpQABAUABATIAAAAQAAAUAEAUQgEASAEARQAAACABABQADAPAMAOQAKALASAIQAMAMARAIQAGADAGABQgFgOADgQQgEgTAHgRQACgSAGgRQAGgSAJgRQADgHADgHQAFgKAGgJQAMgNAKgQQAJgMALgLQACgDACgCQAPgLAOgNQASgHAPgKQATgDATAAQAPgHATgEQASgIATACQABgCABgDQAJgRAQgIQARgKATgEQAUABASAGQATAHAQALQAUADATAHQANANAQAMQAKAPAPAJQAAABACAAQAOAJARAKQAHADAJADQAJACAKADQAPAIAPAHIAAi8IAAwmMg1gAAAIAARkIAAQZQAsABANAAQAWgBAXAAQAKACANAAQATAEAXgCQAKABA0AAIAAAAQAAACAAADQgBAAAAAAIgBAAQABABABAAQADABADAAAXOmiQAXgJgJgVQgYgEABAXQgBAHAKAEgAV7ndQACADACADQADAEABADQgDgKgFgDQgIgFgMALQgGARATAEQAUgBgFgNAVymeQADAWARgKAVrlUQgTAMgNgPQgMgMADgMQASgHASAJQATAMgOANgAUtk1QgKgDgKgHQgPgKgJgOQgRgKgDgRQgOgPgDgUQgBgEAAgDQgBgJACgHQAAAAAAgBQABgGADgFAUSiSQgOACgGAHQgEAEgBAHQgDAIAMgIQAHABAGgFQACAHgEAKQAPgDAJAEQgBgPgIgKQgEgGgGgDgATXh2QgNAEgDASQgIASAYgGQACgBABgBQAEgBACgDQAGgHADgMQAFgVgXAMgATWgdQAMAEgEAMQAGAVgOAJQgCACgCACQgLAKgQgFQgMgEAEgOQACgHAGgCQgGgLgDgPQAYgLAQAJgAU8hUQgHgHgCAHQgQACgLALQgCADgCACQgLALgIAJQgLgMAMgIQgDgEAAAEQAAAAAAABQgVACADAXQAFAGAKACQAQAKAGAPQgFAHgGADQgDACgEAAQADAFAIABQAIAEAIgBQAQgKgFgUQgCgHgEgIQgLgNATgKQALgFAIgHQABgCACgBQAGgNgIgCQgFAAgEAAAVgjLQgIARALAJQACACAEABQAAAAABgBQADgDAEgCQANgIARgKQAQgLATgDAV6iPQAFgEAHgDQARgDASgHQARgGAQgMAV6iPQADADgFACQgBAAAAAAQABgDACgCgAVpiuQgHAJAAAMQAAAQAVgBQgBAAAAABQgDAFAAAHQABAIAKABQAQABAOgBQAFgEAGgCQACgCADgCQALgIAPgDAWch0QADgBACAAQADgDADgCAWch0QgJAGgEAMQgBAQAOADQAUAEARgHQAGgGAFgGQAHgHAGgHQgFAGAAAIQgBAIADALQABAEACAFQAEAMAGANQAHASAOAOQANAMATAFQANAKAQAJQATABASAGQARAGARADQAIAEAJACQgBAEABADQAFASgDATQgDAUgLAFQgQAMgQAIQgUAAgQAEQgRAFgVgGQgSAEgTgCQgSACgTgCQgUADgTgIQgTABgUgBQgRAAgLgGQAFgEAFgFQASgHAKgQQAOgLAMgNQAHgRAFgTQAGgTAEgRQAGgOAFgQQALgQgEgTQABgDAAgCQADgQgCgMIAAAAIgBAAQgEgFAAgEAWLgOQAKgBgCgJQAIgTgPgBQgEAWgUgQQgFABgKAHQgQALABARQAEAJABAJQAAAXgQAAQAJAKAPgFQAOgEABgSQgFgMgCgOQAFgFADgFQANABALgBgAYvn4QADAIABAJQABAMgDANQADAPABAPQAAADABADAYsmsQAEgDAFgBQAKgBAIAJQAMAUgOAQQgDACgCACQAAAAAAAAQABABABAAQALAHAQAEQAOANATAHQAPAPAPAJQAEANAHAKAY6l8QABgDABgDQABABADABQgDACgDACQgFATgKAMQgOACgPACAZFijQgEgSgKgTQACgLACgLAY6l8QgKAFgKgCAaNAxQABgEACgFAaNAxQAKADAQgBIAACIIAAAYQAAABABABQAAACABACAanE6QABABAAABQAEgLABgPQAAgPgEgOQAFgOgEgLQAAgDAAgDQAAgEAAgDQgBgBAAgBQAAgCAAgCQAAACABABQgBAAAAABAaBB2QAKAQAEASQALARAKASQAAALADANIAABmIAAABIAAG2IAAJoMgqmAAAQALgaACgFQAEgUAGgQQAKgSACgTQADgTADgTQAFgSAFgSQAFgSACgTQACgUAGgKQAEgMABgNQACgTADgTQACgUACgTQADgRACgSQADgSAFgSQAAgTAGgSQgEgUADgVQgDgPAAgRQAAgBAAgCQAAgDABgDAYWFdQgBgHAAgKQgCgIACgFQgCgKANACQAZAUAZASQADADACAEQACAEAAAEQAFgBAEAHQAAgHABgHQABgLAEgLQACgRAMgMQAHgOALgHQAHAGAKALQALAFAAAHQACAAABABAanLwQgMAAgNgBQgQgDgTAAQgTAAgTAAQgTgBgSAFQgTAFgRAIQgSAHgTADQgSACgTgDQgSgCgUgIQgRADgPgEQgSgBgPgDQgRgGgRgBQgSgJgUgBQgRgHgTgEQgTgEgTgFQgTgGgTgCQgTgDgTABQgDAAgCAAQgFgBgDgBQgQgCgQAEQgRADgSABQgTABgSABQgSACgRAIQgUAAgTABQgRAAgRACQgTgDgSgCQgTgCgTABQgRABgTAAQgSAJgSAAQgTAAgSgEQgSgFgRgDQgSgEgTgCQgTgCgTgBQgUgBgSgGQgUACgSADQgSADgQAEQgQgDgIAGQAAgHgBgGQgFgSgKgMQgBgBgBgBQgKgJgPAFQgVgCgLgOQgMgFgNgIQgKgQgTgDQgTgGgOgDQgDADgDADQgMAOgPAIQgSAJgSAFQgOgBgOAFAanLwQAJAAAKAAAVjCEQgDgCgCgCAUBA0QgBgCAAgCQgBgCgBgBQACADABAEQADAMgPAGQgPALgRgHQgHgDADgGQAGgPARgKQANgDAHAGQABABABABAUlBSQAOgMADAUQAEAWAHgWQABgJADgQQgJgTgSASQgOAJgKASQgPANgPgOQgRgKgPALQgOASgLgVQAAgDACgFQgVAKAJATQAIAOAOgMQAFgDAIABQANgCAAAOQAZALAQgQQAQgQALgSgASlBCIAAABQgEAHgFgGQgWgBAEgWQADgEAGAFQAIACAFAHQADAEACAHQADgIgIgDAReBUQABAEABADQAHAQAPALQANAHAVAEQARAHAQAIQATACARAGQAUgBATAEQATgBASgGQAUAAARgFQAMgEAJgHAP9EEQAHgIAKgEQAPgJAWgDQgOAUgLAZQgGADgBAHQAEgDAFgCQAWgLAbgDQAGgFAGgFQgCAGgCAGQgGAYgKAWQgHAQgIAPQAPgLAVgFQAWgDAVAOQARAEANAGQAFADAFADQADAGAFAEQACACACACQgBgCAAgCQgCgIADgIQADgMAMgLQAAgFAHgDQAHAMARABQAWAHAIgZQAPgpAmgSQAGgDABgFQgBAEAAAEQAAARACAWQgBADgBACQgCAFACACAVAExQgEADgDACAVAExQAJgHAMgIQAQgLAUgDQAPgMAXgHQACgDAHgCQgDADgDAEQgIALgGAPQgDAPgBATQgFAJgIALQAGgGAKgHQAFgDAFgDQAVgIARgNQAKgHALgCQADAAAGACQAPAWAOAVQANAGALAIQAAABABAAQAAAEABACQgBgDgBgEAReBUQADABADAAAQKAMQgEAQgGAOQgBAEgBADQAFAEACACQABADABADQAFATAEAVQgGAHgCAAQgDAAgEAHQAAATAAATQAAATgEAUQACATgLAFQAAADABAEQACANAFAPQgFAHAGACQgEAFgDAGQgKAJgHANQgDAGgDAGAPkABQANAOAJAPQADAGADAGQADAHACAGAPhC2QAAAAABAAQAEgBADgDQALgLgBgVQAHgQAHgPAPrBpQABAUABASQgBAAABAAQgHATgKAIQgLAEgJgCQAKAOAPgEIAAAAQADATAQAPAPlElQgEgFgFgOQgDgHgJgEQgBgGgMAEQgVAWgPAZQgEgHgCgFQgEgRABgSQgTgIABgWQAAgEABgEQACgNAIgLQgaALgYANQgDACgCABQgKAGgKAFQAEgHADgHQANgdAHgkQAOgaACgcQAAgEAAgEQABgHAAgHAMODfQABgHAFgJQABgCACgDQAIgVAPgSQAXgcAWgaQAHgJAHgJQADgFAEgEAO3CfQAAACABAAQAHAJAJACAEkgFQADAJAEALQAJAMgEAUQAEATAFASQAFASADASQADASACATQACATAAAUQAAAOgBANQgBAGAAAGQABAEABADQACANAAANQAAACAAACQACARAAAEACagLQAJAOAGASQAGATABATQACASgCAVQAEAIABAGQAAADAAADQgBAMABAMAC9C+QgHgHgGgGQgGgFgEgHQAGgCAMAAQACAAACAAQAFgJgHgGQgDgDgCgDQAAAFAAAGQABAEACAGAC9C+QACAPAEASQAAABAAAAQACATADASQACASAAATIAAAAQAAAIAAACAC9C+QgDgPgCgMAAzBiQgUABgNgGQgOgHgIgKQgPAHgNAIQgUAMgPgNQgKgIgJgNQACgDADgCQAFgLAFgOQAEgJADgLQgCgOACgKQADgOACgPQACgJACgKQACgGACgHQABgCABgDAgzEdQAMAEANAHQATAEAOAIQASAFARAKQAQAFAOALQAUAFASAGQAHADAHADQAKAFAKAFQAKACAKAEQAIADAHAFQAPAEAQAFQACABADAAQABABABAAAggGGQgBAAgBgBQgPgGgLgLQgCgBgBgBQgGgHgGgHQgEgDgDgEQAMgMAMgOQAIgSgBgUQgEgBgEgBQgTgEgRADQgPADgNACQgEAAgEABQgIABgIAAQAAAAAAAAQgMAAgKgBQgNgCgKgEQgBAAAAAAQgGgDgFgDQAFAAAGAAQAGAAAGAAQARgIAHgGAggGGQALAJANAPQANAJAKAOQANANAMAKQAHAVALAQQALAPADASQAAAAAAABQAOARAAASQABANgBAOQgBAFAAAGQACAPABAHQANAFAWgBQATACASgCQATADARABQAUgHARgKQASgJAMgOQABAAABgBQANgLAHgSQAFgMgBgPQAOAEARAIQARAIARAIQAVAPgQANQgBAAAAAAQgIAHgLADQgLAEgKAJAggGGQAPAIAQAFQARAGARAKQATgBASACQATADATAAQAUAAARgFQASgFASgEQAQgGALgIQAGgCADgCAFIDyQAFANgCANQAHASAGATQgDATgDASQgBAIgCAGQgDAJgFAHQgBACAAABQgKAOgKAGQgDACgDABQgBAAAAAAQgFACgHgBQgSAJgTgHQgJAAgIgDQgCAAgCgBQgFgCgFgDQgBAAgBgBAC6ErQAFAAAFgBADpGOQAGAOAFAQQAMAOAHAQQAMAQABAUQAJAPADASQAAACABABQAAAEAAADADdKdQAPAGAUgBQARAAAQgHQAVABAQgLQAKgFACgJADnLIQAQALAUADQAPgGASgCQARgDAQgDQARgLARgMQAOgCAOgIQAFgDAFgDABYJyQgPACgXgHQgQgCgSgEQgRgEgTgCQgTgFgSgBQgMgGgLgEQgHgDgGgCQgSgFgTgDQgTgDgTgCQgTgCgSABQgSgIgSgCQgSgDgRgEQgTgEgRAAQAPAHAOAKQAPALAOAMQABAAABABQAKAOALAOQAPAMAMAQQAOAOANAPQAAAAAAAAQALAOAJAQQAMAOAMAPQAJARANAPQAGARAMAOQAJAPAKAPQAMAOAIATQAMANAGAPQAIAIADgDABmQaQgDgOgLgKQgLgKgKgPQgQgLgJgQQgOgMgHgUQgPgLgMgMQgMgKgHgMQgCgDgCgEAEiLvQAGALAaAAQATgBASgIQAUABAQgIQAEgCADgDAHgLSQAAACAAABQAAALgBAMQAFASAGAUQgBAPALANQALANAOAMQARAKAJAOQAFALAFAVQgBATgBAUQgFATAEAFQgFAGgHAFQgUANgSAKQgIAHgHACQgMAEgIgFQgYgPgUALQgUARgEAWQgLgGgKgIQgXgRgUgOQgEARgEAUQgQAWgDAWQgEgBgBgGQgWgVAGgiQgVANgPAQQgPAPgFARQgTgJgQgTQgOgRgEgXQgIAagKAWQgLAQAGAXQgRgIgPgMQgQgNgLgGQABAEAAAEQAAAMAEAEQgMgLgJgIAF4NxQAOAIATgDQARgCAPgJQAQgKANgPQAIgIAAgLAIuO+QAFgEADgEABrQyIAAAAQAKANALANQAKAMAJAQQAKANAJAQQAJARAEARQAJARgHASQgHATgUAIQgEAJgEAMQgKAPgVgCQgSgBgIgQQACgFACgHAjENSQALALAPAMQANAPANANQAMAMAQALQAPALAPALQAPALAPALQAQALAPAMQALANAFAPQAJAPAAAUQAGAQAHAQQAHAPAGAPQAKAMAGAMQACADACAEQAFAMACAQQAJAQAFARQAHAMAGAOQABACACADQgBAQAHAOQAAAAAAABQgDAGgDAEQgDACgDACQgEACgGAAQgUAGgNgMQgIgIgJAFQgMAGgNABQgTAAgGgQQgEgMAEgMQAGgRgDgSQgEgTgFgPQgKgQgGgRQgFgRgGgRQgMgRgIgQQgIgOgRgPQgFgMgIgHQgCgCgCgCQgBAAgBgBQgBgBgBAAQgHgEgHgFQgQgLgRgHQgRgHgRgIQgNgNgRgIQgQgLgPgKQgQgLgOgMQgPgKgPgNQgQgKgOgOQgOgKgMgMQgOgKgLgLQgLgKgIgKQgDgDgCgDQgKgQgLgLQgLgQgNgLQgLgPgHgHQAEABgJgJQgIgSgNgNQgBgCgCgCQgJgNgGgOQgOgPgLgQQgJgNgIgPQAAgBgBgCQgIgSgCgUQgBgLAEgLQADgIAFgHQAFgSAIgSQAMgPAMgNQAOgMAOgKQABACABACQAIAPAEARQAEAVAHAKQALAIAQADQAAAAAAABQgBAMACAKQABALAEAJQADASAHASQABADACAEQAHANAKAMQAJARAMAOQAKARAMANQAAAAAAAAQAOANAJAQQAOALAOANQANAMARAIQANANANAOQAPALALANQAOAMAPAKQAQAKANAMQACACADABgALggIQgBACgBADAanh1IAACoA11qMQgDAEgDADQgMAMgPgDQgDgEgBAGQgXAJgFgRQAAAFgEABQgdAHgMgPQgCAGgGADQgegDgEgZQAAAIgPgIQgXgMADgXQgBAFgGgBQgpgQAIgiQgYACgHgWQABgfAJABQgUgCgIgTQgIgUAOgFQgJgCgFgIQAAgBgBgBQgRgYAPgRQgPgJAFgVQADgSAKgJQADgCAEgBQgEABgDgJQAAgBAAgBQgDgOADgOQABgDABgDQAGgCAEACQAAABAAACQAAAFAFgCQgCgEgDgCQACgZAVgTIAAgBQAAABAAAAQABADACACQgBgDAAgCQgBAAgBAAA6wjzQAJAFAHAQQAIAFAHAEQAJAGAGADQAEgKAEgSQAEgVAWAPQABAGAFgDQAOAEADgWQADgRAKAHQAQAAATAHQABAAABABQAAgDAAgCQgJgRgJgSQgBgMgCgLQgBgHgDgHQgHgSAAgUQgCgSgEgUQAFgRABgSQAHgSAHgQQAAgVASgHQASgJASgIQABAAACgBQAFgBAFgBQATgEATACQAKACAKACQAJADAIADQASAHAVAFQAAABAAAAQAGAUgBATQAMASAGANQAIASAFARQAIARAIARQAHARALAPQAAAHAAAIQAAACAAABQABAGACAGQACALAEAMQAFASAHAUQAEASAAAUQgSgEgRgJQgVABgRgEQgUgEgWAFQgSgEgSAFQgUgCgRAGQgSAFgRALQgGABgFACQgBABgBAAQgDABgDABA3HyGQgDAIAAAKA4QxoQgCgLAKgLQAMgPASAAQAVgCAOAJQAGgQAPgKQAEgEADAFQAFACADACQgDAGgBAIQAEAHADgLQABgGgEgEQAHgQATACQAaADADASQgBgNAPgLQADgDAEAAQAXgEAMANQAAgGAFgGQAFgNAKACQAagEAGAPQACgPAMgMQAUgEAVABQAZACAGAOQABACAAACQABgDABgDQALgWAbAKQAeALgCAbQAFgNATAIQAcALAAAXQAIgKATAGQANAFAAANQADgIAGAEQAHAHAAAIQAPgBAAATQAAAZgOAPQAcACgFAdQgBARgIgFQAFAEADAJQADAUgNADQgDAPgMAQQgVAFgNgHQAAAHgJAFQAFAQAEATQAFASAAATQAFASAAAUQADAQAAAQQABADgBADQAAADgBAGA5uwSQgEgLAHgMQARgYAiAMQgJgGACgNQAEgYATgHQASgHAGAGQAAAFADAFA5uwSIAAAAIAAAAgAwQsyQALAMAKAPQAJAPAIARQAHARADARQADATABATQAAAUgJARQgFARgJAQQgFAMgKALQgCADgDACQgOALgLAOQgUAGgOANQgTAEgSAEQgFADgGACQgMAFgNADQgOgBgOACQgEABgFABQgNAJAAAJAwmvAQgDABgEACQgLAPgNgIQAAAGgDAGQgYgFgRgMQAEAGgEgEQgYANgMgJQgIAFgFACQgHABgFgCQgIgCgFgIQAGABAHACQAAAEAAADQABAXgdADQgTADgHgNQABAIgJAFQgQADgRgIQgGgCgFgEQgLgHgGgJAxPuRQAPAHAGASQAEAOgBAOAxPuRQAIgGAGgFAyBtnQAJgNAMgNQAQgGANgKAyssiQgDAFgEAFQgLANgTABQgSAIgQgLQgNgJgEgVQgDgSgCgTQACgEACgDQADgFAEgEQANgFAPgBQATACARADQAQAKAEASQAJAFgCAJQAAACgBACQABALgIAFQAAAAgBABgAykszQgSgPgQARQgBALAIAJQAMADAHgIQAFgIADgJgAw+tGQgDAEgDAEQgVgCABgTQAKgTAXAKQAAAFgCAFQgBAHgEAFQgFAJgKAGQgPAIgVgIQgDAFgDACQACgXgHgYQgCgHgDgBQgDAFgCAEAxnsRQATgGASgBQAPgJATgCQgCAHAAAKQgCAUgLAPQgNAPgLABAwgqWQgBgPgFgNQgOAHgQAJQgNAGgRALQgQAKgRAHQgQAIgRAKQgPAPgPAFQAAAEAAAEQAAAMAFAFQAFgGANgHQAHgDAKgBQADAAADAAQAIABAGACQAMAAAJgDQABAAABgBQAMgFANgKQAHgGAGgHQAMgDAHgIQAHgIAIgKQAEgEADgGgAy9pBQAFAGAKAEQANAEAOgEQAKAHAJgDQAWgGAWgJQAOgGALgKQACgBABgBQAIgIAJgLQAHgMABgPQAAgKgBgKAxyoUQAAAFAAAEQAAANADANQAJASAGASQAFASAEARQAGARAFARQAGATgBASQAHALAEAKQAEAAADgBQAUAHATACQAVABAPgEQgDgLgFgQQgIgRgKgRQgKgQgIgPQgMgPgIgPQgNgOgJgRQgKgRgEgRQAAgBAAgBQALgDAOgCQADAAAEAAQATgDAUAAQAEACAFABQAMAFALAKQARADAQAJQAIARANANQAHAPAIARQADAVgDAPQAAAAAAAAAxyoUQAFABAGABQAMADAMACQAAABAAABQABADAAACA0YudQgPAEgFgMQADANgIAIQgNALgIgLQADAFgJADQgMALgOgFQgCgDgEgBQgDgCgDgBA1muCQAIAGgBAMQgBACgFABQAJACAAAQQABASgUAJQgDAAgMACQAAAAgBAAIAAAAQAEgKgOgOQgFgFgIADA1+s+QADAAACAAQAFABAEACQAQAGAEATQAKAYgUgFQAGABAMAHQACAIgCALQAKAZgSgFQAKANgMAQQgKALgLgDQgEgEgGgCA1/s+QgFACAAAGA1zq7QAGAGAAAMQABAHgDAJQAEADgHADQACgDABgDA10qSQgCgDgCgDA1zqQQgBgBAAgBQABAAABAAQAAgBAAAAQAAACgBABQgBACgBACQgDABgEADQABgGAHgEA1YoCQAEgEAEgFQAEgFAEgGQABgVACgTQADgUgIgSQgIgOgKgPQgPgFgIgKA10n5QgEgKAMgIQADgCAEgCQACACACACQAEAFAFAEQAHAGAJAFQAMAMAJAQQAKAPAFARQAFASAKAPQAIAMAJAMQACACABACQALAOATAKQAJAOAKAOQAFAGAFAGQAIAIAGAKIgPAMQgnAjgOAQQgEAGgCADQAAACgCADQgDAHgEAHQgDAGgDAGQgJAOgFARQgGASgDATQgDATACAUQACAMABAMQABAHAAAIQABAUAHAPQAHAPARAIQABAAAAAAQAQAJAPAMQASABATAFQATAFATAEQATADARAEQATADAUADQASADATADQAPADAPABQADABADAAQAUADAUABQATABASAAQABAAABAAQATgBATABQARACASAAQAUAAAUAAQASABATAAQAUAAASgEQABAAAAAAQAIgBAEAFQAUgDATgEQAFgBAGgBQANgCANgDQATgCASgHQATgDAPgKQASgEAPgIQAPgOAQgJQALgQAMgOQALgPAGgOQACgFADgGQAFgMAFgMQAIgSAHgRQABgMAAgPQgFAGgEAFA4NjTQAFAIAHAJA4Xj/QABARAEAUQACADADAEQAEALACAIQgIAEgGAFQgPALgHASQgDAQAFASQAOgQANgJQADgBADgCQAMgHAMgHQAPgLASgEQAPgLARgFQASgGAVgBQARgDAUABA36hZQgGAGgGAHQgDAFgEAFQgCADgCADQgOAPAIAOQACADAFAAQAUABAVgGQAJAKAIAOA4IiUQgLAMgEAVQgIARAKARQgBAOAOgLQAHgGAHgFQAIgFAIgFQARgKAQgHQATgHASgGQASgCASgFQASgGASgEQAFgBABAEA3nghQAQgEAQgGQATgGAPgKQAGgEAGgDQAEgCAFgDQAFgCAGgDQALgEALgCQAPgGAOgDQgHACgIAEQgHABgHACQgPAGgQAJQgBAAAAABQgKAFgJAGQgPALgPANQgIAPgHANQgEADgDAEQAAAGgFABQgDAPAJAAQAFAAAFAAQAPgCAOgJQAigPAhgXQAPgDAPgHQAKgDAIgCQAJgDAEAGAzHkgQgxAqgHAHQgCADgDACQgEAEgEAEQgCAIgCAGQgCAFgDADAvqlJQAFgRAGgQQAHgSABgSQADgVgDgPQgCgFgEgIQAIANANAHQAIAEAHADQAKAMAMAIQgDAFAEgDQABAFAGAGQAIAPADATQAFACgDADQADANAIABQAUACAWAEQARgDAUADQASgHATACQASABASADQATACASAIQAEAAAFABQAOABAOADQATABATAHQAUAFASACQAMgGARgEQAMgGANgDQAJgDAJgCQAegMAegDQAUAAAWAFQALADAFACQgEAFgHAFQgFAEgIAEQgMAOgKAJQgLAPgRAIQgKALgKAKQgDADgCAEAxLlHQAGgGAJgBQACAEABADQgCAAgCAAQgHAAgHAAgAy4ksQAagNAggFQACAAAAAAQAOgDANgCQALgDALgBAgtkCQgVgWgRgcQgBgFgBgFQgGgdgLgVQgRgbANgnQAEgeAMgXQADgGADgFQAPgOAMgLQAEgEAFgEQAAAGABACQAAABABAAQAEAIAJAEAnUiYQgBgIAAgIQgGgNgGgRQgEgFABgGQgNgPgEgTAgum8QgIgCgEgKAiXlEQABgCACgDQAAAJgDgEQgBADgBADQgDAKAAANQABATAHASQAHASAIARQAIASAAATQABATgCASQAAABAAAAQgMAKgKAPQgTALgMgVQgLgOgEgQQgHgMgKADQgSgJgTACQgTAHgPAJQgOAIgKALQATgdANgiQAJgLAAgPQgbAYgYAbQgTASgOAOQgFgRgPgPQgDAcgNATQgWgZgYgQQgJgGgDgGQgLASgOASAiJlCQABACABACQAFAPAHAQQACA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gJASQgIAQgHATQgCAUgEATQgOAPgFARQgFARgCARQgDARAAASQAAATADATQAAACAAACQADAQAFARQAAASAHARQAHAQAJARQACALgBAUQAFAIAEAJQADALACALQAIAOADATQADATADASQAEATAAAUQAAABAAAAA34J3QACABACgFA3UMwQAAAAAAABQAAAQgCAPQADAJAEAHQADAHAFAFQADAFAFAEQANAKAQAHQARAIASADQAPAIARAFQAQAGAUAGQATgCASACQASAEAVABQASAAATAAQATgCASgEQASgEASABQAMgDAMAAQAHgBAHAAQAOgKALgQQAHgPACgRQgEgBgEgCA60P5QAVgGANgQQAKgQALgMQAFgPALgHQADAZgGAcQgEAXgFAXQgDARgJAMQAQgLARgSQAYgPAZgSQgJAegNAfQgQAYgNAZQgBACgCAFQACgBACAAQAegIAhAAQAngIAmgNQANgEAMgBQAAgCABgDQgCgUgBgTQABgTgEgTQgFgSgCgTQAAgSAAgTQACgTgCgUQgCgSgBgQAxUIkQACgDABgDQADgGADgGQAFgKAGgJAx8HgQANALAIAQQAHALAFAMQACAEACAFQACAEABAFQAAAAAAAAQADAKADAFQACAGACAFQAIAQAMATQADARgCAVQAHAPAAARQAAACAAACQAAATgFATQAFATgGASQAAAUgBATQgDASABAUQgBAKAAAHQgBAEgBAFQAAAEABAEQAAACAAABIAAAAQALACAPgFQAFgDAGADQARgHASgEQARgJAUgDQAUgBARgFQAEgBACgBQABAAAAgBQALgGACgRQACgRABgSQgEAAgEAAAxOIzQgDgHgDgIAxpOjQADATAAATQgCATAAAUQgBASAAASQgFATgCAUQgCATAFAVQgEATgDAUQACAUgIASQABATgIASQgFASgEAUQgGASgEASQgKASgHAQQgDAFAAACA3ARFQABAAAAAAQAKgBAJAAQgNAOgPAPQAAAAAAABQAIAOAAATQAAAQADASQglAEgnABQgPAAgMACQgEAAgEABQADgEAFgBQAmgaAggXQAMgLAKgKA25S2QgKAGgJAGQgVAOgRAVQgOAKgJAKQgFAFgEAGA29SlQAEAAAEAAQAQAEAPgGQgSAJgRAKA4JT5QAOAHAUAHQARAHAQAJQAJACAJACQALABAMABQAIAHAKAEQgPAGgRAMQgMAKgKANA20UbQAAgNADgNQABgTgBgUQgCgSgGgSA65MmIAADTIAAFfID4AAIHCAA");
	this.shape_13.setTransform(4.4,0.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AB0HRQgLgLgIgLIgEgFIgGggQASgDARAGQAUADAHAPQABAIgCAIQgCAMgGAJQgGAHgGAAQgFAAgHgGgAWrGiQgLgLACgNQATgGASAIQATAMgPANQgIAGgHAAQgJAAgIgJgAYlFNQgBgXAZAEQAJAUgYAJQgKgEABgGgAXHEiQAMgLAIAFIAFAHIAEAGQAFANgVACQgSgEAFgSgABNE2QgPgSASgPIAFgDQAGgCAGACQAGACAHAGQgCAMgHAJIgNAHIgDAAIgIAAgACxE2IgHgBIAAgCQgFgVAQgIQAWgGAIARQgDAIgHAIQgJAEgNABIgBAAIgBAAgACsD3IAHgFIAJgDIACgBIAKABQAHABAHADIAJAGQAOAFAGgIIACABQgDAIgHAFIgMAGQgJADgLABQgWAAgJgXgABdD+QgHACgIAAQgKgBgHgDQgIgEgFgIIAAgBIgCgIQAGAEAGAEIALAEIAGABIAfAEQAFABAAAHQgCgHgQAFgAwyDCQgOAEgNgEQgKgDgGgGQAFgHAOgHQAHgDAKAAIAGAAQAIAAAGACQALABAJgDIADgBQAMgFANgKIANgOQAMgCAHgIIAPgSIAHgLIABAVQgBAPgIALQgIAMgIAHIgDADQgLAJgPAGQgVAJgWAHIgFAAQgHAAgHgFgA1VB4QgBAEgDACQgdAHgMgQQgCAHgGADQgegEgEgZQAAAIgPgIQgXgMADgWQgCAEgFAAQgqgRAJghQgYACgHgUQABgfAJAAQgUgBgIgUQgIgTANgFQgIgCgFgJIgBgBQgRgYAPgRQgPgKAFgUQADgTAKgIIAGgEQgDACgDgKIAAgCQgDgOADgNIACgHQAGgCADACIAAADQAAAFAGgBQgCgFgEgCQADgZAVgTIAAABIADAFIgCgFIgBAAIAAgBIAAAAIAAAAQgFgMAIgLQARgZAhAMQgIgGACgNQAEgXATgHQARgHAGAGQABAEADAFQgDgFgBgEQgBgMAKgLQAMgOARAAQAVgCAPAIQgDAJAAAKQAAgKADgJQAFgPAQgLQADgDAEAFIAHAEQAHgQAUACQAaACACASQAAgNAOgKQAEgDAEgBQAXgEAMAOQAAgGAEgHQAFgMALACQAagEAGAPQACgQAMgLQAUgFAVACQAZACAFANIACAFIACgGQALgXAaAKQAfALgCAcQAFgOATAIQAcALAAAXQAIgJATAGQANAEAAAOQADgJAGAEQAHAIgBAHQAQgBAAATQAAAagOAOQAcACgFAeQgBAQgJgEQAGADADAKQADAUgNADQgEAOgLARQgVAFgNgHQAAAHgJAEIgHADQgLAQgNgJQAAAHgDAFQgYgEgRgMQAEAFgEgDQgYANgMgKQgIAGgFACQgHAAgFgBIgBgHQgGgDgGAAQAEAHAJADQAAAWgcADQgTADgHgMQABAIgJAEQgQAEgRgIIgLgGQgLgIgGgJQAGAJALAIQgPADgFgLQADAMgJAJQgMALgIgMQACAGgIADQgNALgNgGIgGgEIgHgCIAHACIAGAEQAIAHgBALQgBADgFABQAJACAAAQQABARgUAKIgPABIgBABIAAAAIABgFQgBgJgKgKQgEgDgEgBIgBAAIAAAAIgEABIAEgBIAAAAIABAAQAEABAEADQAKAKABAJIgBAFQgFABAAAHQAAgHAFgBIAAAAIABgBIAFABIAJACQAPAHAFATQAKAXgUgFQAGACAMAHQABAHgCAKQAKAYgSgEQAKANgMAPQgJAMgLgEQgEgEgGgCQAGACAEAEQAGAHAAAMQABAHgDAIIgDAHIgBAAIgCABIgDgHIADAHQgHADgBAHIACACQgMANgPgDQgDgEgBAFQgIADgGAAQgLAAgDgKgA1GmSQAEAIADgMQABgFgFgEQgCAFgBAIgAxeghQgJgJACgLQAQgRASAOQgDAJgFAIQgFAHgIgBIgGAAgA0ehCgAv3hXQAKgUAXAKIgCAKQgCAHgDAGIgGAHQgVgCABgSgAOBhHQgMgGgEgOIgCgJQACgHAKgGQAOgKAOANQAQAOgLAQIgPAGQgEADgEAAIgEAAgAPRhvQgHgBAAgFIgEgGQAAgUALgMQAPgFAJAKQAJAJAAAQIgFAEQgIAJgKABIgCAAIgBAAIgHAAg");
	this.shape_14.setTransform(-5.3,-75.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#006600").s().p("AiVDTIAAldIAFAAQAUgGANgRQAKgPALgMQAGgPAKgHQADAZgGAcIgJAuQgDARgIALQAPgKASgSQAYgPAYgTQgJAfgNAfQgQAXgNAZIgCAHIADAAQAfgIAggBQAlgHAmgNQANgEAMgBIACgBIASAAIgbAdIgBAAIgVAWIhEAvQgFABgEAEIAJgBQAJgCAPAAQAngBAlgEIAJAAQAPAEAPgGQgSAJgRAKIgTAMQgVAOgRAUQgNALgKAKIgIAKIAIgKQAPAHATAHQARAGAQAKIASADIAYACQAHAIAKAEQgPAGgQAMQgNAKgKANIAAAHg");
	this.shape_15.setTransform(-152.7,116.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#FFFFFF","#000000"],[0,1],-6.3,55.8,-6.3,55.8).s().p("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");
	this.shape_16.setTransform(-6.3,55.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#996633").s().p("ABuAxIgGgFIgegXIAAAcIAAANIgJgNQgJgRgIgRIgsAYIgIAKIgMAIIACgIQADgMAAgLQgXAIgfAEIgcALQgQAHgQAJIANgQIARgRQAIgJAKgPQgRANgYAAIgggFIAFgIIgFAIIgEgBIgpgJQANgGAYACQAUABASgDQALgEgNgNQgEgRgGgSQASAJASANQAWARABgeIABgNQACgMAFgLQAIAMAJALQAJAKAKAJIAKALIALgSIAIgMIAIgLIADALIAIAZQACAEAKgDQAdgNAfgDQAGAAAJAEQgVAEgRAPIBHAFQAdAKARAPQAHAHAEAMQgUADgWgDIgDgBIgDABQgLABAEASIABAEQACAKAAALQAAAHgCADQgMgPgUgQgAgagRIAHgJIADAEIgDgEIgHAJg");
	this.shape_17.setTransform(147.5,-53.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#009933").s().p("AA3BlQABgQAHgPQABgKgCgJQgQAOgWAEIggAHIghAJQAPgPASgQIAcgYQAPgNARgIQgYgFgTADIgRACQgrAHglAPQgKAAgCACIAJgHIA5goQAPgMALgLIAKgOIAEgGIgGACIgIADQgSAIgQALQgOAIgEANQgCgSAHgVIAAgUIABgMIABgEQAKAGAVgDQAHACAHAAQAJAAALgGQASABAMgOIAPgCQAIAKAIAOIAFAIIANASQAGAeAEAdQgEAagKAWQABANgGALIgHAJIgOASg");
	this.shape_18.setTransform(84.2,1.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#990000").s().p("AgOAdQgNgEAEgOQACgHAHgEQgGgJgEgPQAYgLAOAJQAMAEgEAMQAHAWgOAIIgEAEQgHAHgIAAQgFAAgFgCg");
	this.shape_19.setTransform(126.7,0.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00FF00").s().p("AhzBeQgWgBAFgWQADgEAGAFQAIACAFAHQADAFACAHIgBAAQgBAEgDAAQgCAAgDgDgAA7BBQAQABgBgXQgBgJgDgLQgBgSAPgIQAKgIAGgBQATAPAFgVQAPACgIARQABAIgJABQgMABgMAAQgDAFgGAFQADAQAEAMQAAARgOAEQgFACgFAAQgIAAgGgHgAgDAmQgJgBgCgFQADAAADgCQAHgEACgJQgEgPgQgIQgKgBgFgGQgDgYAVgCIAAgBQABgEACAEQgLAJAKALIASgUIAEgEQALgMAQgBIAIgBQAIACgFANIgDADQgIAHgMAGQgSAKALANIAGANQAEAWgPAKIgDAAQgHAAgEgDgAhHhFQACgTANgDQAYgMgGAUQgCANgGAGIgGAFIgDABIgKACQgMAAAGgNg");
	this.shape_20.setTransform(134,-2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CC0000").s().p("Ag1CwQgSgGgTgBQgPgJgSgHQgUgDgOgHQgPgLgGgRIgDgGIABAAIADAAIAAAAIACAAIgCAAIAAAAIgDAAIgBAAQgFgOADgRQgEgSAHgSQACgTAHgSQAGgPAIgRIAHgPIAKgSQANgNAJgRIAUgXIAFgEQAPgLAOgOQARgHAQgJQASgDARgBQAQgHASgDQASgIATACQgHAQALAKIAGADQgIAIAAAMQAAARAVgCIAAABQgDAGAAAHQAAAIALAAQAQABAOgBQgJAHgFALQgBARAPACQATAFASgHIALgMIAAAAIAAAAQACAMgCAPIgBAFQAEAUgLAPIgMAfIgJAkQgFASgIASQgMAMgOALQgKAQgSAHIgJAJIgGgEIAGAEQgJAIgMADQgSAFgTABQgSAGgRAAQgTgEgUABgAgyCRQAaALAPgPQAPgQAKgSQAOgNAEAVQAEAVAHgWIADgZQgJgSgSARQgNAKgIASQgQAMgPgNQgQgLgQAMQgOASgLgVIACgIQgVAJAKATQAHAPAOgNQAGgCAIAAIACAAQAKAAAAAMgAgqBBQgRAKgHAOQgDAHAHACQARAHAQgLQAPgGgDgMIgCgEIgBgCIgDgCQgEgEgHAAIgIABgAiIBFQgFAWAWABQAGAGADgHIABAAQADgIgJgEQgEgGgIgDQgEgCgCAAQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAAAAAgABPBEQAOgEAAgRQgEgMgDgQQAGgFADgFQAMAAAMgBQAJgBgBgHQAIgSgPgCQgFAVgTgPQgGABgKAIQgPAIABASQADALABAJQABAXgQgBQAIAKAQgFgAhlgDQAEAOAGALQgHAEgCAHQgEANANAEQAPAGAMgKIAEgFQAOgIgHgXQAEgKgMgEQgHgEgJAAQgLAAgNAFgAgUgqIAAABQgVACADAYQAFAGAKABQAQAIAGAPQgEAJgHAEQgDACgDAAQACAFAJABQAHAEAHgBQAPgKgEgWIgGgNQgLgNASgKQAMgGAHgHIAEgDQAFgNgIgCQgHgHgBAIQgQACgLALIgEAEIgSAUQgKgLALgJIgCgCIgBACgAg8hdQgNADgCATQgJARAZgGIADgBIAGgFQAFgGADgNQAEgMgIAAQgFAAgJAEgAAQhYQAAgPgIgKQgEgFgFgEQgNACgGAHQgEAFgCAGQgDAJANgJQAHACAGgFQACAGgFALIALgCQAGAAAFACgAi1BtIAAAAg");
	this.shape_21.setTransform(134.4,-1.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#996600").s().p("AhNBiQgFgQgVgBQgIgRgGgTQABgLgBgLQASAEgEgVQAAgGgEgBQASADgCgZQABAAgCgIQAEgCgBgEQASAKAFgWQgBgIADgEQANAMAPgUQgBgBAFgDQAIAHAMgRQALAMAMgaQAYAJANgWQAIAHAGgCQAFgDAFAAQAKAQAUgEQALADAFgJIgFAfQgFASgDATQgEAHgDAIQgHgBgDgDIgIgFQgMgFgIgKIgRgGQgTAEgPAKQgEAFgFgDQgFAIgDAAQgGAMgLAGQgDACgIgBIgKASQgBgDgHADQACAOgQAIQgFAQAKArQACASgEAAQgEAAgIgNg");
	this.shape_22.setTransform(86,-94.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFF99").s().p("ABfHGIgigNQgMgRgNgOQgLgPgIgRQgIgQgFgSIgBgCQgDgRgCgSQgCgSAEgUQgDgRADgSQAAgNABgOIAAgLIgBgJIAAgJIAAgKIgCgUQAFgTABgVQAJgRADgTQAIgSAGgTIAMgiIAEgIIAKgYIgKAYQgCgLACgLIAEgNQABgQAIgOIABgDIAMgjQAEgTAGgPQADgTAIgOQAEgRAGgOIAMgRIAIgMIABgEQADgJgBgLIACgQIABgLIgNglIgBgEQgFgLgIgIIgEgDQAKABAHACQAKADAGAGQAOAMAFATQAEAPABAQIAAAHIACAdIABAIQgHASgDAUQgLAQgNAPQgEANgFALIgFAJQgEASgIARQgEAMgBAMIAAABIABANIgBgNIAAgBQABgMAEgMQAIgRAEgSIAFgJQAFgLAEgNQANgPALgQQADgUAHgSIgBgIIgCgdIAAgHQgBgQgEgPQgFgTgOgMQgGgGgKgDQgHgCgKgBIgBgBIgBgBIgdgIQgNgBgNAEIgEACIgIgBQgQgKgJgSQgEgLAAgMIAAgGIAAAGQAAAMAEALQAJASAQAKQgdgDgYAMIgFADQgNAIgIAKIguAqIgIAIIgbAZIgGALQgMAXgEAeQgOAnARAbQALAVAGAdIACAKQASAcAVAWIAEAhIADAkQABATADASIgLAhIgBADQgFAQgHARIgGAPIgLAUQgGAKgDACQADgCAGgKIALgUIAGgPQAHgRAFgQQgBANADAOIgGAQIgBAFIgEANIgEATIgFAdQgCAMABAOQgDALgEAJIgJAZIgFAFIgEgHIAEAHQgDAEAAAFQgCAMABALQgKAKgHAOIgCANIgCAZQgGgEgDgGIgDgHQgGgPAAgTQgHAKgDAKQgGgLABgRQABgYAFgYIACgLQgEAFgDAFQgOAYgBAeIgCAoQgHgBgFgIQgLgQgDgSQgKgPACgUQgGgTAEgSQgCgQAEgNIADgHIAHgMIAVgiIAOgUIAGgLQAJgPAGgSQAAgUACgSIAAgBQABgSAAgTQAAgTgJgSIgPghQgGgSgBgTQAAgNADgKIACgGQADAEgBgJIAAgFIAEgnQABgUgBgTQAHgTgCgUQADgSAHgSQADgLAEgLIAFgLIABgDQAFgQAQgKIAWgeIAMgPIAMgMQAPgNARgLQAQgKAPgNQATgHAPAAIAAgIQgEgVAYgQQgDAUAMAHQAIACAFgBIgBAIIAAADQAAASAKAQQACAUAOAFQgFgGAAgMIAAgIQAFgYAHgRQAJgQAPgIQgFARAOAJQADABAFAAIABAAIgBADIgFAMIAAAAIgCAEQgMARAAATIABAKIAAABIgBAGIABgGIAAgBIgBgKQAAgTAMgRIACgEIAAAAIAFgMIABgDIACgDQADgFAPgEQgHAFgFAHQgFAHgCAKQACASAJAHIgEAFIAEgFQAKgLASADQATADAQAJQAMAMAGAPIAGAEQALAKAIAMQADAUAGASIABALIABAZIAAAJIAAACIAAABIgCAJQgCAMAAAMQgKARgEARQgEASgBASQgHARgBAQQgIAPgDARIgBAGIgDAmIgDAjQgBATAEAUIAGAlIACAGQgJgOgLgKQgMgKgUgCQgNgBgHAHQgLAHgEAOIgBAIIgEAKIgEAIQgJAWgKATIgGAfIgDAPQgFAfABAfIATAwQAHASAJAPIAHAUIAEALIADAGQABAIAEAHIABALIADAKQgNAAgFACQAEAHAFAFIANANQgNADgLgCIgMgCIgFAAQgEgIgGgDIADADQACAGAJAFQADAOAGAIQgJgCgJgEgAiTBHQgBAUgEARQAEgRABgUIAAgGQAAgRgEgQIgLgiQgGgUgCgTIgNgfIgBgEIABAEIANAfQACATAGAUIALAiQAEAQAAARIAAAGgAChg3QgMAOgHARQgNAPgHAPIgHATIgIARQgLAOgJAPQAJgPALgOIAIgRIAHgTQAHgPANgPQAHgRAMgOQAFgFABgFQgBAFgFAFgAC2irQgFAVgLAQQgDATgNAQQgCAOgJANIgEAGQgHAQgJAQIgEAIIgOAaQgMANgGASQgLAQgGARQgBAEgDACQADgCABgEQAGgRALgQQAGgSAMgNIAOgaIAEgIQAJgQAHgQIAEgGQAJgNACgOQANgQADgTQALgQAFgVQAFgPABgRQgBARgFAPgACEl5QAOACAJANQAIAGAEAIQAEAHAAAJQAHAPACASIAFAWIADANIAFAXIABAIIgBgIIgFgXIgDgNIgFgWQgCgSgHgPQAAgJgEgHQgEgIgIgGQgJgNgOgCQgCgFgCgBQACABACAFIgIgBIAIABIAAAAgABzl2QgIAGgFAIQAFgIAIgGIAJgEIgJAEgAhdCCIAAAAgABilfIAAAAgABDlpIAAAAgAAzmCQgKgQAAgSIAAgDIABgIQAEgOANgHQgKALARAMQADAEAFgDQgHARgFAYIAAAIQAAAMAFAGQgOgFgCgUgACEl5IAAAAg");
	this.shape_23.setTransform(9.1,-23.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFF00").s().p("AnVGDQgSACgTgCQgWAAgNgEIgDgWIABgLQABgOgBgNQAAgSgOgRIAAgBQgDgTgLgPQgLgPgHgVIgZgXQgKgPgPgIQgNgPgLgJQAQAHAPAGQATAGARAKQATgBASACQATACATABQAUAAARgFIAkgKQAQgFALgIIAJgEIACABIAKAFIAEABQAGAOAFAPQAMAOAHARQAMAPABAVQAJAPADASIABADIAAAHQABAPgFAMQgGASgOALIgCABQgMANgSAKQgRAKgUAGQgRAAgTgDgAJqh5QAAgNgNACQgIgBgFACQgOANgIgOQgJgUAVgJIgCAIQALAVAOgSQAPgLARAKQAPANAPgMQAKgSAOgJQASgSAJASIgEAaQgHAVgEgVQgDgUgOAMQgLASgQAQQgJAJgNAAQgJAAgKgFgApjiVQgOgGgKgLIgcAQQgUAMgPgNQgKgJgJgMIAFgFIAKgaQAEgJADgKQgCgOACgMIAFgdIAEgTIAEgOIACgEIAEAEIATASQAJAXAIgOIAegSIAPgJIAMgJIABAJIABAJIAAAJIAAALQgBAOgCAOQgCASAEARQgGATADATQACASAFARIAAACIgFAAQgRAAgLgGgAJeioQgHgCADgHQAGgOARgKQANgDAHAGIACACIADAHQADALgPAHQgJAGgKAAQgHAAgGgDgAKWlkQAEgLgCgGQgGAFgHgBQgMAIADgIQABgHAEgFQAGgHAOgCQAGAEAEAFQAIAKABAPQgJgEgPAEg");
	this.shape_24.setTransform(67.5,25);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000099").s().p("AiXCyIgIgLIgKgFQgNgHgRgEQgVgNgWADQgVAFgPALIAPgfQAKgXAGgXIAEgNIgMAKQgaADgXALIgCgEQALgaAOgUQgWADgPAJQgJAFgIAIQgGgDAFgHQgFgOgCgNIgBgIQALgFgCgRQAEgTAAgUIAAgmQAEgGADgBQACABAGgIQgEgVgFgSIgBgGIgGgNQAGgPAEgPQADAPAMANQAKAMASAIQAMALARAJQAGADAGABIACAGQAHARAPALQANAHAVADQARAHAQAJQATABARAGQAUgBATAEQATAAASgGQAUgBAPgFQAMgEAJgHQALAGARABIAnAAQATAHAUgCQATACASgCQATACASgEQAVAFARgEQAQgEAUgBQAQgIAQgLQAKAQAEARQALARAKASQAAAKADAMIAABnIgDAAQAAgIgLgEIgRgSQgLAIgHANQgMAMgCASQgEAKgBAMIgBAOQgEgHgFAAIgCgHQgCgEgDgDIgygmQgNgDACAKQgCAGACAIQAAAJABAIQgKgJgOgFIgdgrQgGgDgDABQgLACgKAHQgRAMgVAIIgJAGIgEgHQABgSADgPQAGgQAIgLIAGgHQgHACgCAEQgXAHgPAMQgUADgQALIgTAOIACgFQgCgVABgSIAAgIQgBAFgGADQgmASgPApQgIAagWgHQgRgBgHgNQgHAEAAAFQgMALgDAMQgCAIABAIIABADIgEgDg");
	this.shape_25.setTransform(140.2,20.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFCC99").s().p("AoDRwQgIgIgKAGQgLAGgPAAQgUABgFgRQgEgLAEgMQAFgSgDgSQgDgTgGgOQgJgQgGgRIgMgjQgMgRgIgPQgIgPgQgPQgFgMgIgHIgEgDIgCgBIgCgBIgPgKQgQgKgRgIIghgOQgNgNgRgIIgfgWQgRgKgNgNQgQgKgOgMQgQgLgOgNQgPgKgMgNQgNgKgMgLIgTgTIgFgGQgKgRgLgKQgKgRgOgLIgRgWQAEABgJgJQgIgRgNgNIgDgEQgJgOgHgOQgNgOgLgQQgKgNgHgQIgBgCQgJgSgBgUQgBgMAEgLQADgHAFgIQAFgRAIgSIAXgcQAOgMAOgKIACADQAIAQAEARQAFAUAHALQAKAIARADIAAAAIgBAKIABAMQABALAFAJQADATAGARIAEAHQAHANAKANQAIARANAOQAJAQAMANIABABQANAMAKARQAOALAOANQAMAMARAIIAaAaQAPALAMAOQAOAMAPAKQAQAJAMANIAGADIgGgDQgMgNgQgJQgPgKgOgMQgMgOgPgLIgagaQgRgIgMgMQgOgNgOgLQgKgRgNgMIgBgBQgMgNgJgQQgNgOgIgRQgKgNgHgNIgEgHQgGgRgDgTQgFgJgBgLIgBgMIABgKIAFAAQAQgHATgDQATgDAUABIAmgFIAlgGQAVAAATgCQAUADAVAAQARAAASgDQATgCARgGIABAAIAMgBIAUgDQANgJAFgQQALgQgMgQIgDgDQgDgGgCgHIgBgKQAFAAAEgDQAGgGABgGIAAgBQAAgFgEgGIAFgDQAHABAGgCQAGgCAFgFIABgBIAGAIIANANIACADQALAKAPAHIADABQALAJANAOQAOAJALAPIAYAXQAIAUALAQQAKAPADASIABACQANAQABASQAAAOgBANIgBAMIADAWQgPABgXgHQgQgBgRgEQgTgFgUgBQgSgFgTgCIgWgKIgOgEQgSgFgSgDIgngGQgTgCgSACQgSgIgSgDIgjgGQgSgEgRgBQAOAHAPALIAdAWIABABQAKAPAMANQAPANALAQQAOANANAPIABABQAKANAKARIAXAdQAJARAOAPQAGAQALAPQAJAPALAOQALAOAJATQALANAGAQQAIAHADgCQAIAMAMAKIAcAXQAIAUANAMQAJAQARAKQAJAQALAKQAMAJACAPIABAIQAAALAEAEIgUgSIAUASIABAAIAUAbQALAMAJAQQAJANAJAPQAJARAFASQAIARgGASQgHASgUAJIgIAVQgLAOgVgBQgSgCgHgQIAEgMIgEAMIgBgBQgGgNAAgPIAAgBIgCgGQgGgOgHgMQgFgRgJgQQgDgPgFgNIgDgGQgGgMgKgNIgOgeIgPggQAAgUgIgPQgGgPgLgNIgegXIgfgVIgegWQgQgMgMgMIgZgcQgQgMgKgKIATAKIgTgKQAKAKAQAMIAZAcQAMAMAQAMIAeAWIAfAVIAeAXQALANAGAPQAIAPAAAUIAPAgIAOAeQAKANAGAMIADAGQAFANADAPQAJAQAFARQAHAMAGAOIACAGIAAABQAAAPAGANIABABQgDAHgEADIgFAEQgEACgHAAQgHADgGAAQgLAAgIgJgAtfGZQgNgKgIgJQAIAJANAKgAnMRmIAAAAgArrLDIAAAAgAm5EXQgUAAgTgCQgSgDgTACQgQgKgTgHQgQgFgPgHIgDgBQgPgHgLgKIgCgDIgNgNIgGgIQAMgLAMgPQAHgSgBgTIgIgCQgSgEgSADIgbAEIgIABIgRABQABANgFAGQgDAEgEACQgSAIgRAGIgRAGIgUAGQgRAIgWAGQgBgQAQgVQALgJARgGQASgJAPgLIACABQAKAEAMABIAKABIAJAAIABAAIACAAIAAAAIAAAAIgCAAIgBAAIgJAAIgKgBQgMgBgKgEIgCgBIAAgFIgLAAIAAAAIgRgBQgSgBgTgHIgPgBIgSgEQgRgGgTgLQgHgKAFgEQADgDAOACIgTgEIgMgDQgJgEgGgIIgBgBIgFgHQAOgBAVAEIAJADQAMACANgEQANgEAMgGIAHgEQAUgDAQgHIAEgCIgCgFQgFgIgDgNIAAgDIgBgFQAKAGAPACQARAGARADIAiAKIATAFIAOAFQARAFAQAHIAAAAIACAAIACACQAOAHAPAIQAOACALAIIAGAFQATAFAVADQAOAMATADQAOAMATAEQAPALATACIAgAOIACABIAAAAIACAAIAAAAQAKAEAMAAIAAAAIACAAIAKgBIAFAAIAAAAIABAKIgBgKIAAAAQABgTgCgSIgFglIgBgBIgGghIgFgbIAFAbIgNgOQgFgFgEgHQAFgBAMAAIAEgBQAFgIgHgGIgFgFIAAgYIABgGQgCgGgDgIIAAgTIAAgTQgCgUgGgSQgFgTgJgQQAJAQAFATQAGASACAUIAAATIAAATQADAIACAGIgBAGIgIAEIgEgLIgHgUQgJgQgHgRIgTgwQgBggAFgeIADgQIAGgeQAKgTAJgWIAEgIIADgKIACgJQAEgNALgHQAHgIANACQAUABAMALQALAKAJANQABAGAEAFIAEAHIAEAMQAJAPADASQAEANABANIAAALQAHASgCAVIADALIAGAWQAJAMgEAUIAJAlQAFASADASQAEATACARQACATAAATIgCAcIgBAMIACAHQADANAAANIAAAEIACAVIgCgVIAAgEIAAAAQAIARAGAUIgGAlIgDAOQgDAIgFAIIgCACQgJAOgLAHIgGACIgBABQgFACgGgCQgSAKgTgHQgJAAgIgDIgEgBIgKgFIgCgBIgCgBIgGgCIgegJIgQgHQgJgEgKgDIgUgJIgOgHIgmgLQgOgLgRgEQgRgKgSgFQgQgIgSgEQgNgHgNgEQANAEANAHQASAEAQAIQASAFARAKQARAEAOALIAmALIAOAHIAUAJQAKADAJAEIAQAHIAeAJIgBAGQgMAJgQAFIgjAKQgQAEgSAAIgDAAgArdCFIgMAAIAMAAQASgJAGgFQgGAFgSAJgAsoBgIACAAIABAAQASgBARgDQAUgEAQgIIAEAAIABgBIgBgCIABACIgBABIgEAAQgQAIgUAEQgRADgSABIgBAAIgCAAIAAAAIgCAAQgSAAgQgFIgBAAIgBAAIgBgBIgQgCIgBgBIABABIAQACIABABIABAAIABAAQAQAFASAAIACAAIAAAAgAsHAmQAJgDAJgBQgJABgJADgArzD4IAKgUIAHgPQAPgMAHgMIABgBIAJgQIADgIQARAAgBAMQAHgCAGAEQAHAFACAPIgCAOIABABIADAEQAEAGAAAFIAAABQgBAGgGAGQgEADgFAAIAAgJIgKAGQgLAGgMABIgeACIAGgFQAOgMALgPIADgFIAOgbQACgGABgEQgBAEgCAGIgOAbIgDAFQgLAPgOAMIgGAFQgFACgDAAQgFAAgEgEgAqgDlIgDAGIADgGQADgIACgIIAAAAIAAgBIAAABIAAAAQgCAIgDAIgAp5DNIAAAAgAltCcQgMAAgKgEIAAAAIgCAAIAAAAIgCgBIgggOQgTgCgPgLQgTgEgOgMQgTgDgOgMQgVgDgTgFIgGgFQgLgIgOgCQgPgIgOgHIgCgJQgHgNgLgOQgMgNgGgJIADgNQAHgOAKgKQgBgLACgNQAAgFADgDQAIAMAKAJQAQANATgMIAcgQQAKAKAOAHQANAHAVgBQAFASAIAPQAIAPALAPQANAOAMARIAiAOQAJADAJACQgGgIgDgNIAAgDIANACQALACANgDQgLAPAAASIAAAAIgEAmIAMAjIABADIgCAAIAAAAgAG5AnIACgBIgCABQgPADgJgNIAAAAIABAAIAEAAIAAAAIABAAQAGAAAGgCIACgBQAKgHAGgTIAAAAIAAAAIgCgkIACAkIAAAAIAAAAQgGATgKAHIgCABQgGACgGAAIgBAAIAAAAIgEAAIgBAAIAAAAQgKgCgGgJIgCgCIABAAIAFgCIABAAIAAAAIAAAAIABAAQAAAAABAAQABAAAAgBQAAAAABgBQAAAAAAgBQADgVANgWIAHgLIgHALQgNAWgDAVQAAABAAAAQgBABAAAAQAAABgBAAQgBAAAAAAIgBAAIAAAAIAAAAIgBAAIgFACIgBAAQgPAFgLgKQgDgQARgLQAGgCACgFQAHgPgDgVQAGgTgBgUQAGgQgJgRIgRggQgJgRgPgOIgHgQIgBgDIgCgHIgBgCIgCgFIgFgOQgHgRgBgUIgCgDQgHgOgDgRQgHgPgFgSIABgHQACgJAAgJIgBgSIAIglIgBgKQAAgPAGgNIAAgIQAAgQAIgPIAAgCQAAgSAHgSIAGglQAIgSAAgUQAAAUgIASIgGAlQgHASAAASIAAACQgIAPAAAQIAAAIQgGANAAAPIABAKIgIAlIABASQAAAJgCAJIgCAGQgFANgEAOQgIASABAUQACARAFAPQACAGACAAIgPADQgMAOgTgBQgLAGgLAAQgHAAgHgDQgVAEgKgGQADgSAAgRIAAgUIABgQIgEgFQgDAJgIAMIAAABQgJASgRAOQgKAUgLASIgGAJIAAgJQAAgOAFgPQgGgEgGAAQgSAHgVAAQgPAIgSAEQgTACgPAIIgKAEIgGADIgMAEIAGgHIAGgHQAPgSAXgSQAQgNAOgPIANgNQAGgGAEgOQAGgDAGgGIgOAFQgRAGgOAKQgYAIgTANQgJAHgGAHIgCADQgTAHgOANIgGAJIgBABIgGgBIAAgCIAAAAIALgkIADgIQAKggAFgfQgRALgRAYIgTATIgBgCQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgBAAAAIAAgLQgBgTAFgTQgFgTALgRQABgTAIgRQACgTALgRIADgJQAEgOAHgMQAHgTALgQQAFgKAFgJIAFgIQAEgHAEgKQANgOAGgSIAbgaIADgGQAHgNAMgLIAFgLQAFgLAHgKQANgNAKgSQAIAAgBgGQAFgIAHgFQAHgGAKgDQAJgIALABQATgEAUAEQAXgBALgEIAAAAQANgQADgUIgFgnIgNggQgJgNgGgMIgDgHQgOgNgOgGQgEAAgCAFQgOAHgSgBQgTADgJgTQgJgQAAgUQAAgSAFgSQAMgOASgFQAVABAGAQQARAcgEghQgKgrAGgQQAPgIgBgOQAGgDACADIAKgUQAHABAEgCQAKgGAHgMQACAAAGgIQAGADAFgFQAPgKATgEIARAGQAIAKAMAFIAHAFQADADAHABQgDAKAAALQgPgLgMARQgOAJgFATQgCAPAGAMIABADIAEAFQAAAFAHABQABAHAHgGIACgBQAKgBAIgJIAFgDIADgCIAAgBIABAAIADAGQgLAQgPAMQAPgMALgQIALgDIACAAIAFAFIgFgFQANgCAPACQANgBgCAXQAEANgEAOIgCAEQgHAOgUABQgIAEgLADQALgDAIgEQAUgBAHgOQAHALAHASQAGASADAUIgIAVIgGAQQgLAPgHARQgGARgLAQQgJAOgIAQQgLANgFARQgFAHAAAFQgCAJANgBQAHgBAHgEIANgDQAMgCANgBQAHABAGACQAKADAIAIQAPAIALAUQADANgGAUQACARgEgDIgEAUIgBAMQgIAQgBATQgGARgFASQABATgBASQgHASgBARQgJATAAAUQgEAQAAATQAEgJAIgJQANgNAKgOIAbgZQASgIASgFQAOgNATgGQAPgKASgFQAPgLATgCQASgIATgCQARgJAOgDIACAHQADATAOAPQAEASAQAKQAKAOAPAKQAKAHAKADQgKgDgKgHQgPgKgKgOQgQgKgEgSQgOgPgDgTIgBgIQAAgIABgHIABgBQgJgIABgPQABgUANgOIADgCQAJgGAHAGQADADADAFIgDgIQgEgOAGgNIAFgGIAgAGQAYAAARgNQgKAOgIAJIgRARIgNAQQAPgIARgIIAcgLQAfgDAXgIQAAALgDALIgCAIIAMgIIAKgJIAsgYQAIARAJAQIAJANIgBgNIABgcIAeAXIAGAFQAUARAMAOQACgDAAgHQAAgKgCgLIgBgDQgEgSALgCIAEAHQADAIABAIQABANgEANQADAPACAPQgFABgFADQAFgDAFgBQAJgBAJAJQAMATgPAQIgEAEIgBABIgEgDIgBAHIAHgDQALAGAQAFQAPAMATAHQAOAPAPAJQAFANAHALIAAC8IgfgPIgSgGIgRgFIgfgTIgCgBQgEgSgKgUIAEgWIgEAWQAKAUAEASQgPgJgKgPQgQgMgNgOQgTgGgTgDQgRgMgSgGQgSgHgVAAQgTAEgRAJQgPAJgJARIgDAFIADgFQAJgRAPgJQARgJATgEQAVAAASAHQASAGARAMQATADATAGQANAOAQAMQAKAPAPAJIACABIAfATIARAFIASAGIAfAPIAACqQgQAAgLgCIAEgJIgEAJQgIgCgIgEQgRgEgSgGQgSgFgSgBQgRgKgNgJQgTgFgNgOQgNgOgIgSIgJgaIgDgJQgDgJAAgHIAAgCQABgIAEgGIgMAOQgEgFgBgEQABAEAEAFIgLAMQgSAHgTgFQgPgCABgRQAEgLAKgHQgPABgPgBQgLAAAAgIQAAgHADgGIAAgBQgVACAAgRQAAgMAHgIIgFgDQgLgKAHgQQgTgCgSAIQgSADgQAHQgTABgSADQgQAJgRAHQgOAOgPALIgFAEIgUAXQgJARgNANIgKASIgHAPQgIARgGARQgHASgCATQgHASAEASQgDARAFAOQgGgBgFgDQgSgJgMgLQgRgIgLgMQgMgNgDgPIAAgDQgEgTAEgTQgFgUAAgTIAAgBIgCgnQABgRAHgPIAAgBIACgEQAJgQALgQIAVggQAJgRAQgJQALgRAOgJQgOAJgLARQgQAJgJARIgVAgQgLAQgJAQIgCAEIAAABQgHAPgBARIgTAeIgCAJQgFAVgEAxIgKgjIgLgjIAAgDIgJgkIAAgJQAAgLgBgMIgBgFIgBgTIABgTQACgPAEgNIACgGIgBgGIABgWIADgQIAAgBIgDAIQgFAEAFAFIgBAWIABAGIgCAGQgEANgCAPIgBATIABATIABAFQABAMAAALIAAAJIAJAkIAAADIALAjIAKAjQAMAOAJAOIAHANIgDAGIAIAHIACAGQAFASADAVQgFAIgDgBQgDABgDAGIgOAdIAAACQAAAUgLAKQgDADgDABQADgBADgDQALgKAAgUIAAgCIAOgdIgBAkQABAUgFATQACATgLAFQgPgOgEgTgAN1kEIAFAAIAFgFIAGgFQALgHAOgEQgOAEgLAHIgGAFQgGACgEADIAAAAgANTkeIgEAEIABAAQAGgBgDgDQAEgFAHgDQASgDARgGQASgHAQgMQgQAMgSAHQgRAGgSADQgHADgEAFIAAAAgANnlWIgdASIgHAGIgCABIACgBIAHgGIAdgSQARgKATgDQgTADgRAKgAAwlyQACgOAAgQIAAgIIAJglQABgUAKgSIAEgnQAGgSADgTQANgQAHgSQAFgPAPgKIAEgNIAIgXIgIAXIgEANQgPAKgFAPQgHASgNAQQgDATgGASIgEAnQgKASgBAUIgJAlIAAAIQAAAQgCAOgACXmxQACgHABgJIAAgBQAAgRAJgRQABgTAJgRQACgLAGgKQABgSALgQQAGgQAJgRQAEgMAHgLIAHgLIAKgSIAJgOIgJAOIgKASIgHALQgHALgEAMQgJARgGAQQgLAQgBASQgGAKgCALQgJARgBATQgJARAAARIAAABQgBAJgCAHgAMan/QgCANALALQAOAQASgNQAPgNgTgMQgLgEgKAAQgIAAgIACgAQDntIgdAEIAdgEQAKgMAGgSQgHADgHAAIAAAAIAAAAIgHgBIAHABIAAAAIAAAAQAHAAAHgDQgGASgKAMgANVoeQAEAAAEgDIABAAIgBAAQgEADgEAAIAAAAIAAAAQgJAAgCgPQACAPAJAAIAAAAIAAAAgAOdo8QgBAGAKAEQAYgJgJgUIgHgBQgSAAABAUgAQOo5IAAgGIAAAGgAK1o8QABgGADgFQgDAFgBAGgAM/pnQgFASASAEQAVgBgFgNQgEgKgFgDQgDgCgDAAQgGAAgIAHgAFstvQgQACgNAHQgPAKgLAPQgDAFAGAJQABASALALQAMABAIgOQARgKABgTQAHgTgFgQIANgBIADAKIgDgKIgNABIAAAAgAEFwwQgKANgHARQgKAQgDASIAAACIACAJQAEANAMAGQAGACAGgFIAPgGIAQgHQAKADACgHQAIgNAAgUIgTghQgIgMgLAAQgGAAgHAEgAlpAvIAAAAgAPwAAQgSACgTgCQgTACgSgCQgUACgUgFIgnAAQgQgBgLgGIAJgJQASgHAKgQQAOgLAMgMQAIgSAFgSIAJgkIAMghQALgPgEgUIABgFQACgPgCgMIAHAAIAAACQAAAHADAJIADAJIAJAaQAIASANAOQANAOATAFQANAJARAKQASABASAFQASAGARAEQAIAEAIACQAAAEABADQAFARgDATQgEAUgLAGQgQALgQAIQgTABgQADQgIABgJAAQgKAAgLgBgAHagbIAAAAgApCjAIgSgSIgFgEIAGgRQgEgNACgNIAAgCIABgBIALgiQgDgSgBgTIgDgjIgEgjQAVASAsAFQAigIAWgSQAMgFAHgKQgHAKgMAFQgWASgiAIQgsgFgVgSQgVgWgSgdIgCgKQgGgcgLgWQgRgaAOgoQAEgdAMgYIAGgLIAagYIAJgIIACAIIAAABQAFAIAIAEQgKAKgGAMIgDAGQgCAVAJARQgJgDgDgKQADAKAJADQAHADAKgDQAMgDAKgFIAGAAQADgBAEgGQAHgJACgMIAAgIIAAgFQADgIgCgFQAAgHgFgBIgfgEIgEgEIABgBQAIgMAPgGIAVgGIgVAGQgPAGgIAMIgBABIgCADIgLgEQgGgDgGgFIAugrQAIgKANgIIAFgCQAagMAdACIAIABIAEgBQANgEANABIAdAIIAAAAIACACIAEADQAIAHAFALIABAEIANAmIgCALIgBAQIAAAKIgDAJIgBABIABADIgIANIgMARQgGAOgEAQQgIAPgDATQgGAPgEASIgMAkIgBACQgIAOgBARIgEAMQgDAMADAKIgEALIgMAiQgGASgIATQgDATgJARQgBAUgHATIADAVIgNAJIgPAJIgeASQgDAFgDAAQgFAAgGgOgAovnzIAGAgIAEAFQAIALALALQANANALgOQAGgJACgMQACgHgBgJQgHgPgUgDQgRgGgSADIgBAAIgBAAIAAAAIgBAAQgTAAgPAMQAPgMATAAIABAAIAAAAIABAAIABAAgApFosQAHALAKAFQALAFAOADQgOgDgLgFQgKgFgHgLQAQgHASgKQASgJAKgRQgKARgSAJQgSAKgQAHIAAAAgAnTpTQANgBAJgEQAHgIADgIQADgHABgIIAAgDQAGAAACgFIAMgGQAHgEADgIIABgHIgDAFIgHgHQgLgOgQgIQAQAIALAOIAHAHQgGAIgOgFIgJgFQgHgEgHgBIgKgBIgCABIgJAEIgHAEQgGADgDAFQgHAKgBAJQgBAHACAGQABASANAEIAHABIACAAgAmDp3IAAgCIgFgHQgDgJgGgIQAGAIADAJIAFAHgAOljtIAAAAgASAkEIAAAAgAQdkyIAAAAgAGlmCIAAAAg");
	this.shape_26.setTransform(59.5,15);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CC9966").s().p("AjTSNIAAgIQAKgNANgJQAPgMAQgGQgKgEgIgIIgXgCQAAgNAEgMQAAgTgBgUQgCgTgGgSQARgKASgIQgPAFgQgEIgIABQgDgTAAgQQAAgTgIgOIAAgBIAcgcIgTAAIgBAAQAAgCABgDIgDgnQABgTgEgSQgFgTgBgTQgBgSABgSQABgUgCgUIgDgiIAHANQAEAFAFAEQANAJARAIQAQAHASADQAPAIARAGIAkAMQATgDARACQATAFAUAAIAlABIAkgGQASgEATABQALgDAMgBIAPgBQAOgJALgQQAGgQACgRIAAAAQALACAPgEQAFgDAGADQASgIARgDQARgJAUgEQAUgBASgEIAFgDIABAAIAAACQAAASADAPQgDAUAEAUQgGATgBATIgIAkQgBARgDARIgEAnIgFAmIgFAZQgGAKgCAUQgBATgGASQgFASgEATIgHAmQgCATgJARQgHARgDAUQgDAEgLAbgABrQJQgGATgDATQgGASgEATQgKARgHARIgDAGIADgGQAHgRAKgRQAEgTAGgSQADgTAGgTQAHgQABgSIgBgCQAHgQAAgQIgBgHIAHgnQgEgOAAgNIABgMQACgUAFgTIABglQAAgUACgTQAAgTgDgTQADATAAATQgCATAAAUIgBAlQgFATgCAUIgBAMQAAANAEAOIgHAnIABAHQAAAQgHAQIABACQgBASgHAQgAAeBeQgTAAgRgDIgQgBIgTgCQgTgCgRgEQgTgBgRgGIgkgLQgSgFgUgDQgLgJgNgIIgEgDIAHgDQACAAAEgJIACgEIAMgeQAEgSAHgSIgEgdIAFgBQAMAQAJARQAOANAOAKQAKATAMAJQAKAHALAFIAKAEQAKACAJAAIAAAAIABAAQAIAAAIgCIAAAAQAJAAAHgCIAHgCIAMgGQARgDAOgLQAPgIAQgLQAPgKARgJQALgNATgIQANgOARgIQAMgPASgJIAegUIAJgHIAAgBQAAAAABAAQAAgBAAAAQABAAABAAQAAgBACAAQgCAAAAABQgBAAgBAAQAAAAAAABQgBAAAAAAIAAABIgJAHIgeAUQgSAJgMAPQgRAIgNAOQgTAIgLANQgRAJgPAKQgQALgPAIQgOALgRADIgMAGIgHACQgHACgJAAIAAAAQgIACgIAAIgBAAIAAAAQgJAAgKgCIgKgEQgLgFgKgHQgMgJgKgTQgOgKgOgNQgJgRgMgQIgHgJIgPgVQgJgQgFgTIgJgjQAPgCAOgIQAigRAhgXQAPgDAPgHQAJgEAJgBIAGgBIAAAAIAAAAQAEAAACACIABABIAAAAIAAAAIgBgBQgCgCgEAAIAAAAIAAAAIgGABQgJABgJAEQgPAHgPADQghAXgiARQgOAIgPACIgKABQgKgBAEgOQAFgCABgFIAHgJIAOgdQAPgMAPgLIATgMIABAAQAQgKAPgGQgLADgLAEIgMAFIgIAEIgMAHQgPAKgTAHIggAJQgUAGgVAAQgEgBgCgDQgJgOAOgPIAEgGIAHgKIAMgMIAQgLQAQgJARgHIAkgOQATgCASgFIAkgJIACgBIAAAAIAAAAQABAAAAABQABAAABAAQAAABAAAAQABAAAAABQAAgBgBAAQAAAAAAgBQgBAAgBAAQAAgBgBAAIAAAAIAAAAIgCABIgkAJQgSAFgTACIgkAOQgRAHgQAJIgQALIgOALQgOALACgPQgMgRAKgRQADgUALgNIAYgOQAPgKARgEQAQgLARgGQASgGAVgBIAGgBIATgBIABAAIAAAAIAKABIgKgBIAAAAIgBAAIgTABIgGABQgVABgSAGQgRAGgQALQgRAEgPAKIgYAOIgGAEQgNAJgPAQQgEgTADgQQAIgRAOgMQAGgFAIgDIAGgDIgMgRIgGgHQgDgTgBgSIAAgFIgSgiQgBgMgCgMIgDgNQgIgSAAgVQgCgSgEgUQAEgRACgRIANgjQAAgUAUgIQARgJASgHIADgBIAKgDQATgDATACIAUAEIARAFQATAHAUAGIABABQAFATgBATQALASAHAOQAIARAFARIAPAjQAIAQALAPIAAAPIAAAEIADAMIAFAWQAGATAIATQADASAAAUQgSgDgRgJIgCAAIgCAAIAAAAIgBAAQgPAAgOgDIgFgBIgCAAIAAAAIgOgBIAAAAIAAAAQgMAAgNADIgCgBIAAAAIgBAAIgNgBIAAAAIAAAAIgOABIgEABIgCABIgKgBIgBAAIAAAAQgMAAgLAEIgCAAIgBABQgSAEgRAMIgLADIgCAAIACAAIALgDQARgMASgEIABgBIACAAQALgEAMAAIAAAAIABAAIAKABIACgBIAEgBIAOgBIAAAAIAAAAIANABIABAAIAAAAIACABQANgDAMAAIAAAAIAAAAIAOABIAAAAIACAAIAFABQAOADAPAAIABAAIAAAAIACAAIACAAQARAJASADIAEAIQgJANgFARQgGATgDATQgDASACAUIADAYIABAPQACAUAGAQQAHAPARAJIABABQAQAIAOAMQARABATAFIAmAJIAlAHIAlAHIAmAGIAfAEIAFABIAoAEIAlAAIgEAKIgFAJIgHAXIgIAkQABAUAAAUQACAQAGAQQAAAUACATIABAEIgNAEQgOAFgRACQgTAKgSAGQgSgCgSAHQgVgCgTACQgRACgSAFQgRgDgTAFQgTgEgSgGgACVBKIACgBIABAAIgBAAIgCABIAAAAIgBAAQgCgBAAgFIAAAAQACgQATgBIAAAAIAAAAIACAAIAAAAIADABIgDgBIAAAAIgCAAIAAAAIAAAAQgTABgCAQIAAAAQAAAFACABIABAAIAAAAgAiBkeIAPgCQAHgEAHgCQgOACgPAGIAAAAgAAmoKIgKgLIgTgdQgQgKgMgOIgDgEIgRgXQgKgPgFgSQgFgSgJgPQgKgPgNgNIgPgLIAIgIIAJgMIADgnQACgVgJgRQgGgPgMgOQgOgFgIgLIACgCQAGgDgEgEQADgIgBgHQAAgMgGgHQALAEAJgMQANgPgLgNQATAEgLgYQACgMgBgHQgMgHgGgCQAUAFgKgXQgEgTgQgHIABgEQAUgKgBgRQAAgQgJgCQAGgBAAgDQABgLgIgHQAOAGAMgLQAJgDgDgGQAIAMAMgLQAKgJgDgMQAEALAPgDIALAGQARAIAOgEQAKgEgBgIQAGAMAUgDQAcgDgBgWQAFABAHAAQAGgCAHgGQAMAKAYgNQAFADgFgFQARAMAYAEQADgFAAgHQANAJALgQIAHgDQAFAQAEAUQAFASAAASQAFATAAAUQADAPAAARIABACIgBADIgBAJIABgJIABgDIgBgCQALAMAKAPQAKAOAGASQAIAQACASQAEASABAUQAAAUgJAQQgFASgJAPQgFANgKALIgFAFQgNALgMAOQgUAGgNANIglAHIgNAGQgLAEgMADIgDAAIgCAAIAAAAIgBAAIgTABIgDABIgBAAIgJABQgNAJAAAKQAAgKANgJIAJgBIABAAIADgBIATgBIABAAIAAAAIACAAIADAAQAMgDALgEIABAJQAAAMADAOQAJARAGASIAJAjQAGARAGASQAFASgBATQAHAKAEAKQgJACgGAGQgLABgLACIgbAFIgCABQggAFgZAMIgPgSgABtr+QAVgHAWgJQAOgGALgJIADgDQAJgHAIgMQAHgLABgPIgBgVQgBgOgEgOIgfAQIgeARQgQAKgRAIIghASQgPAOgPAFIAAAJQAAALAFAGQAFAGALADQANAEAOgEQAJAHAKgCgADKvdQgBAUgMAPQgNAPgLAAQALAAANgPQAMgPABgUQABgKABgHQgSACgPAIQgTACgTAGQATgGATgCQAPgIASgCQgBAHgBAKgAgPwrIgIAIIgEAHIAFAmQAFAUAMAJQAOAMASgIQATgBALgOIAIgKIAAgBQAJgFgCgLIABgEQACgJgJgFQgEgSgQgJIgkgFQgNAAgMAGgABwwqQAHAXgCAXQADgCADgFQAVAJAPgJQAKgGAFgIQAEgGACgHIABgKQABgNgEgOQgGgTgPgGIAOgMIgOAMQgNAKgQAFQgMANgJAOIgGAIIAGgIQAEABABAHgAD5ovQgHgSgLgRIgRgfQgMgOgIgPQgNgPgJgQQgJgSgFgRIAAgBQALgEAOgBIAHgBQATgDAUABIAJADQAMAFALAJQARAEAQAJQAIARANANIAPAgQAEAUgEAPIAAABQgEACADgFQgMgIgKgLIgPgIQgNgHgIgNIAFAOQAEAPgEAUQAAATgHARQgGAQgFASIgJgbg");
	this.shape_27.setTransform(-121.8,21);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0000FF").s().p("AgZLiQgUgBgTgEQgRgDgUADIgjgMQgRgFgPgJQgSgDgRgHQgQgIgNgJQgFgEgEgFIgHgMIgHgQIACgfIAGABIgGgBIAAgCIAAgEIAAgBQAAgUgEgTIgGgmQgDgSgIgOQgCgMgDgKQgEgJgFgJQABgTgCgLIAAAAIAAAAIABAAQABgBACgEQgCAEgBABIgBAAIAAAAIAAAAQgJgRgHgRQgHgQAAgTQgGgQgCgQIgBgFQgDgSABgTQAAgSACgSQADgQAFgSQAFgQAOgPIAGgnQAHgTAIgQQAJgSAEgNIAWgqIAEACQANAIALAKQATACASAGIAlALQARAFASABQASAEASACIAUACIAQACQATACARABQASAFATAEQASgFASAEQASgGARgBQATgDAVADQARgIATACQASgGATgJQARgCAOgGIANgEIABAJIAGAOQADAIABAIQAMATAIASIACAOIADAYQgCATAGATQAAAUAFAUQgCARAFARQAAATADATQgFAUACASQADATgCATIgBAaIAAANIAAAQIACASIABAVIABAnIAAAkIAAAEIgHgBIAHABIgCAjQgCARgLAGIAAgHIAAAHIgHADQgRAFgVABQgTADgRAJQgSADgRAIQgGgDgFADQgPAFgLgCIAAgDIgBgHIAAgBIACgKIABgQIAAgKQAAgPACgNQABgUAAgTQADgJAAgKQAAgJgCgJQAFgTAAgTIAAgEQAAgRgHgPIABgMQAAgOgDgNIgTgiIgEgLIgGgPIADgGIAGgMIAKgTIgKATIgGAMIgGgDIgEgJIgMgYQgIgPgNgMQANAMAIAPIAMAYIAEAJIADAJIAAAAQADAKADAFIAEALIATAiQADANAAAOIgBAMQAHAPAAARIAAAEQAAATgFATQACAJAAAJQAAAKgDAJQAAATgBAUQgCANAAAPIAAAKIgBAQIgCAKIAAABIABAHIAAADIgIgDIAIADQgCARgHAPQgLAQgOAJIgOABQgMABgMADQgSgBgSAEIglAGIgkAAgACcKbIAAAAgAkhGqIAAAAgAhCm/QgHgUgGgTIgFgWIgDgMIAAgEIAAgOQgMgQgHgQIgPgjQgFgRgIgRQgHgOgLgRQABgUgGgTIAAgBQgEgKAMgIIAHgEIAEAEIAJAJIAPALQANAMAJAQQAKAPAFARQAFASAKAPIARAYIADADQALAOATALIARAcIAKALIAOASIgPANQgvAqgHAHIgFAFIgJAHIgDAOQgCAGgDADQAAgVgEgRgADHoUQgTgCgUgGIgHABQgEgKgHgLQABgTgGgSQgFgSgGgRIgJgjQgGgSgJgRQgDgOAAgMIgBgJIAMACIAYAEIAAADIABAFIAAABQAEARAKASQAJARANAOQAHAPANAPIARAeQALARAHASIAJAbQgLADgOAAIgLgBg");
	this.shape_28.setTransform(-119.5,21.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#C6FFFF").s().p("AOiM6QgEgRABgSQgTgIABgWIABgIQACgNAIgLQgZALgYANIgGADIgUALIAHgOQANgdAHgkQAOgaACgcIAAgIIABgOQAGgLgBgMQAKgXAEgaQgEgfgGgdIgNgSIgFgIQgIgOgIgLQgCgBgCgFQgFgPgCgRQgBgVAIgRQAEgOAGgNIABAAQAEASAIAPQADARAHAPIABADQACATAHARIAFAOIACAIIgBABIACABIACAEIABAEIAHAQQAOANAKARIARAgQAIARgFARQABAUgGATQACAUgHAQQgBAEgHADQgRAKAEATQALAJAPgEIABABQAHAJAKACQAJAOAPgEIAAAAQADATAQAPIABAHQACANAFAPQgFAHAGACIgHALQgJAJgIANQgDgFgGgOQgDgHgJgEQgBgGgMAEQgVAWgPAZIgGgMgAatLNQgKgSgLgRQgEgSgKgQQALgFADgUQADgTgFgSQgBgDABgEQALADAPgBIAACIgAQDIwQgJgPgNgOQAFgwAEgVIACgJIAUgeIACAnIAAAAQAAAUAEAUQgEASAEATIABADQgEAQgFAPIgHgNgAEqH/QADgUgHgSIAAgLQgBgOgEgNQgDgRgJgPIgFgMIgDgIIgFgJIgBgBIgBgGIgHglQgDgUABgTIACglIAEgmIABgGQACgRAJgPQABgQAHgRQABgSAEgSQAEgRAKgRQAAgMABgMIACgJIAAgBIAAgCIABgJIgBgZIgBgJQgHgSgDgUQgHgMgLgKIgGgEQgHgPgLgMQgRgJgTgDQgSgDgJALQgKgHgCgSQACgKAFgHQAFgHAIgFQgQAEgCAFIgCADIgCAAQgFAAgDgBQgOgJAFgRQgOAIgKAQQgEADgEgEQgRgMAKgLIAFgDIgFADQgNAHgEAOQgFABgHgCQgNgHADgUQgZAQAFAVIgBAIQgQAAgTAHQgOANgPAKQgRALgOANIgNAMIgLAPIgXAeQgPAKgGAOIAAADIgGALQgEALgCALQgHASgEASQACAUgHATQACATgCAUIgDAnIAAAFIgDAFIgCAGQgDAKAAANQABATAHASIAPAjQAIASAAATQABATgCASIAAABQgMAKgKAPQgTALgMgVQgLgOgEgQQgHgMgKADQgSgJgTACQgTAHgPAJQgOAIgKALQATgdANgiQAJgLAAgPQgbAYgYAbIghAgQgFgRgPgPQgDAcgNATQgWgZgYgQQgJgGgDgGQgLASgOASIgBgQQgGgNgGgRQgEgFABgGQgNgPgEgTIAUgVQARgIALgPIAWgXIAOgIQAGgFAEgFIgQgFQgWgFgUAAQgeADgdAMIgTAFQgNADgMAGQgQAEgNAGQgSgCgUgFQgSgHgUgBIgcgEIgJgBQgSgIgTgCIgkgEQgTgCgRAHQgVgDgRADIgqgGQgHgBgEgNQAEgDgFgCQgEgTgIgPQgFgGgCgFIABAAQADgPgEgVIgPggQgNgNgIgRQgQgJgRgDQgLgKgMgFIgJgDQgTAAgUADIgHAAQgOACgKADIgBgFIgBgCIgYgDIABgHIAlgIQANgNAUgGQAMgOAOgLIAEgFQAKgLAFgMQAJgQAFgRQAJgRAAgUQgBgTgDgTQgDgRgHgRQgHgRgKgPQgKgPgKgMQAAgQgEgQQAAgUgEgSQgBgTgFgSQgEgTgFgQQAJgFABgHQANAHAUgFQAMgQADgPQANgDgDgUQgDgJgFgDQAIAEABgRQAFgdgcgCQAPgPAAgZQAAgTgQABQAAgIgHgHQgGgEgCAIQgBgNgMgFQgUgGgHAKQgBgXgbgLQgTgIgFANQABgbgegLQgagKgLAWIgEACQgGgOgZgCQgVgBgUAEQgLAMgDAPQgGgPgaAEQgKgCgFANQgEAGgBAGQgLgNgXAEQgFAAgDADQgPALABANQgCgSgbgDQgTgCgHARIgIgFQgDgFgEAEQgPAKgGAQQgOgJgVACQgRAAgNAPQgKALACAMQgGgHgRAHQgUAHgEAYQgCANAJAGQghgMgSAYQgHAMAEALIAAAAIAAABQgVATgCAZQgEgCgFACIgCAHQgEANADAOIABACQACAJAEgBIgGADQgLAJgCASQgFAVAPAJQgQARASAYIABACQAFAIAIACQgOAFAIAUQAIATAUACQgJgBgBAfQAHAWAZgCQgJAiAqAQQAFABACgFQgEAXAXAMQAPAIAAgIQAFAZAdADQAGgDADgGQALAPAegHQADgBAAgFQAFARAYgJQAAgGADAEQAPADAMgMIAGgHIACgEQAIAKAPAFQALAPAHAOQAIASgCAUIgDAoIgJAJIgIAJIgJgJIgDgEIgIAEQgMAIAEAKQgUgFgTgHIgQgGIgVgEQgSgBgUADIgKACIgDABQgSAIgRAJQgTAHAAAVIgNAiQgCASgFARQAEAUACASQAAAUAIASIADAOQADAMAAALIASAjIABAFIgCgBQgTgHgRAAQgJgHgDARQgEAWgNgEQgGADgBgGQgVgPgFAVIgHAcIgPgJIgQgJQgHgQgJgFIgIAAIAAxiMA1fAAAIAAQkQgHgKgEgNQgPgJgPgPQgTgHgOgNQgQgEgLgHIgCgBIAFgEQAOgQgMgUQgIgJgKACQgBgQgDgPQADgNgBgMQgBgJgDgIIgDgGIADgBIADABQAVADAUgDQgDgMgHgGQgSgQgdgKIhHgFQARgPAVgEQgIgEgGAAQggADgcANQgLADgBgEIgJgZIgDgLIgJALIgIAMIgMASIgKgLQgKgJgIgKQgKgLgHgMQgGALgCAMIgBANQAAAegXgRQgRgNgSgJQAGASADARQANANgKAFQgSAEgVgBQgXgCgNAGIApAHIgCAGQgGAOAFAOIADAIQgDgFgDgDQgIgGgJAGIgCACQgOANgBAVQAAAPAIAHIAAABQgBAHAAAJIgCAAQgOAEgQAIQgUACgRAJQgTACgPALQgTAEgOALQgTAFgOAOQgTAFgRAIIgcAYQgJAOgNAOQgIAIgFAJQABgTADgQQABgUAIgSQACgSAHgRQABgSgBgTQAEgSAHgRQAAgTAIgQIACgMIAEgUQADACgBgRQAGgRgDgNQgLgUgQgIQgHgIgLgEQgFgCgHAAQgNAAgMACIgOAEQgHAEgHAAQgMACABgKQABgEAEgIQAGgQALgNQAIgQAJgPQALgPAGgSQAHgQAKgQIAHgQIAHgUQgDgUgGgSQgGgSgIgLIACgFQAEgOgDgMQACgYgNABQgQgCgMACIgBAAIgCgGIgBgCIAAgEQAGgLgFgQQgDgSgRgFQAAgLADgKQADgIAEgHQADgSAFgSIAFgfQgFAIgLgCQgUAEgKgQQgFAAgFACQgGACgIgHQgNAWgYgJQgOAbgLgNQgMARgIgGQgFACABACQgPATgNgMQgDAEABAIQgFAWgSgJQABADgEADQACAHgBAAQACAcgSgGQAEADAAAHQAEAVgSgFQABAMgBALQAGASAIASQgSAEgNAOQgFASAAATQABATAIARQAKATATgEQASACAOgIQACgEAEgBQAOAGANANIADAHQAHANAJAMIAMAhIAFAmQgCAUgNARIAAAAQgMAEgWABQgUgFgUAEQgLAAgJAHQgJAEgHAFQgIAGgFAHQABAGgIAAQgJASgOANQgHALgFAIIgFALQgLAMgIANIgDAGIgbAaQgFASgNANQgEAKgEAHIgHAJQgGAIgEAKQgLAQgHATQgHANgFAOIgCAJQgMAQgBATQgIASgCATQgLAQAGAUQgGATACATIgBAKIgBAFQAAAAABAAQABAAAAAAQABAAAAAAQAAAAAAgBIACACIgJAKIgOASIgGAfIgBAEQgMgLgGgUIgGgWIgEgOQgNgPgEgUQgJgHgIgLQgFAUgBAXIAGAYQADAUAAAUQgFAOAEAOQgLgVgRgVQgEgOgHgMQgHgMgJgJQgEgFgBgEIgCAIIgDAWIgHAmQAAARgCAQIgCAMQgKANADAOQgHALgDALIgEgMgAJdjBQASAAASgDIABAAIABAAIABAAIACAAIAAAAIAAAAQAIAAAGgGIAAAAIAAAAQgGAGgIAAIAAAAIAAAAIgCAAIgBAAIgBAAIgBAAQgSADgSAAQgTgFAAgLQAAgEACgEQgCAEAAAEQAAALATAFIAAAAgAJujuQANAAAMgDIABgBQAUgGAJgMQgJAMgUAGIgBABQgMADgNAAIAAAAIgBAAIgFAAIgDAAIgDAAQgTgCgRgFQgKgFAAgIQAAgDACgEQAIgRASgFQgSAFgIARQgCAEAAADQAAAIAKAFQARAFATACIADAAIADAAIAFAAIABAAIAAAAgAJ6kpIAMgCIABAAIALgCIgLACIgBAAIgMACIgBAAIAAAAQgMgBgMgEIgBAAIgBAAIAAAAIgBAAQgRAAgOgGIgCgBQgNgIAAgNQAAgGACgGQAHgRAWgDQASgGATAAIACgBQANgCANAAIABAAIAAAAIAEAAIABAAIADAAIgDAAIgBAAIgEAAIAAAAIgBAAQgNAAgNACIgCABQgTAAgSAGQgWADgHARQgCAGAAAGQAAANANAIIACABQAOAGARAAIABAAIAAAAIABAAIABAAQAMAEAMABIAAAAIABAAg");
	this.shape_29.setTransform(3.5,-52.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#00CC33").s().p("Av2FKQALgaADgFQADgUAHgRQAKgRABgTIAHgmQAEgTAFgSQAGgSABgSQACgVAHgJIAFgZIAEgmIAEgmQAEgRABgRIAIgkQABgTAFgTQgEgTAEgVQgEgPAAgSIAAgCQAMgGABgRIADgjQANACAKAFIAnACQATAMAUABQATAAATgBQASgCASgDIAmgIQATgDARgIQASgCATgDQAQAEAPABIAJAAIAmAAQAUgBATAEQASAFASAKQATACAPACIgDAKQgHAPgKAOQAAARACAKQADALAOADIAkAJIgkARQgPAIgLANIgFAGQABATAMANQANAMAUAEQgEgRgJgOQAPAEAPALIAAARQAIAKALAGQAMAQASAKQgDgGAAgKQASgWAWgOIAAAAIAFAGQgGAfAMAcQAAgFAFABQAVgOANgZQAaAYATAXQAIgPAAgZQAJARAOANQARANAMgOQARgKASADIACABIADABIADADQAJAHAEAKQARAQAIAOQAIAQAMARIALAiQAGARAKAQQAFAPAEASQADASgGASQgEAMAEAMQAGAQASgBQAOAAAMgGQAJgGAIAIQANANAUgGQAGAAAEgDIAGgEQAEgDACgGQAIAQASABQAVABAKgOIAIgVQAUgJAHgSQAHgSgJgRQgEgRgJgSQgJgPgKgNQgJgQgKgMIgVgbIAAAAQgEgEAAgLIgBgIQALAGAQANQAPAMARAIQgGgXALgQQAKgVAIgaQAEAYAOAPQAQATATAJQAFgRAPgPQAPgOAVgNQgGAfAWAWQABAGAEABQADgWAQgUIAIglIArAeQAKAIALAHQAEgXAUgQQAUgMAYAQQAIAFAMgEQAHgCAIgHQASgLAUgNIAMgKQgEgGAFgSIACgoQgFgUgFgLQgJgOgRgLQgOgLgLgNQgLgNABgQIgLglQABgMAAgLIAAgDQAIgGAQADQAQgEASgDQASgEAUgBQASAFAUABIAmADIAlAGIAjAIQASAEATAAQASAAASgJIAkgBQATgBATACIAlAGQARgDARABQATgBAUAAQARgIASgCIAlgDQASAAARgDQAQgEAQACIAIACIAFAAQATgBATACQATADATAGQATAFATADQATAFARAGQAUACASAIQARABARAHQAPADASABQAPAEARgDQAUAIASACQATADASgCQATgDASgHQARgIATgFQASgFATABIAmAAQATAAAQADIAZABIAAJmgAn5AEQgcAFgTAHQATgHAcgFQAOgDAAgEQAAgEgEgEQAJAIAFAKQAIgFABgNIAAgGQAAgfgMgXQAkANAWAiQADAEADACIACAAIAAAAIAAAAQAFAAAAgQIAAgCQAAgLgDgKQADAKAAALIAAACQAAAQgFAAIAAAAIAAAAIgCAAQgDgCgDgEQgWgigkgNQAMAXAAAfIAAAGQgBANgIAFQgFgKgJgIQAEAEAAAEQAAAEgOADgAI3hOIAIgJIgIAJgA29EJQgQgKgRgGQgTgHgPgHQAKgKANgKQARgVAVgOIATgMQAGARACATQACAUgBATQgEANAAAMIgSgDgA4aCaIBGgxIAVgWQAJAPgBASQAAAQADATQglAEgnABQgPAAgLACgA5dBSQANgZAQgXQANgfAJgdQgYATgYANQgSASgPALQAIgMADgRIAJgsQAGgcgDgZQgKAHgGAPQgLAMgKAPQgNARgUAGIgFAAIAAjTIA4AAIAtAAQALACAMAAQAUADAWgBQAKABA0AAIAAAAIAAAEIgBAAIAAABIABABIgCAeIAHARIADAiQACATgBAUQgBATABARQABATAFATQAEATgBAQIADAoQgBACAAADQgMABgNAEQgmANgnAHQggABgfAIg");
	this.shape_30.setTransform(3.5,104.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#00CC00").s().p("A3MIdIAAgBIABAAIAAABIgBAAgA4JIWQgWACgUgDQgMAAgLgCIgtAAIg4AAIAAwaIAIAAQAJAGAHAPIAQAKIAPAJIAHgcQAFgWAVAQQABAFAGgDQANAFAEgWQADgRAJAGQARABATAHIACAAQABASADATIAFAHIAGAUQgHADgHAFQgOAMgHARQgDAQAEATQAOgQANgJIAGgDQgLAMgDAUQgJARALARQgCAPAOgLIADACIgIAJIgEAGQgOAPAJAOQACADAFABQAUAAAUgGQAKALAHAOQgHgOgKgLIAhgJQASgHAPgKIAEAFQgQALgOAMIgPAdIgHAJQgBAFgFACQgDAOAJABIAKgBIAJAjQAFATAJAQIAQAVIABAKIAEAdQgHASgEASIgMAgIgCAEQgEAJgBAAIgIAEIgGgEIAGAEIgVAoQgFANgJARQgIARgHATIgGAmQgNAQgGAQQgFARgCARQgDASAAASQAAATADASIAAAEQADARAGAQQgBASAIARQAGAQAJARQADALgBAUQAFAJADAJQAEAKABALQAIAOADATIAHAmQADATAAATIAAACQg0AAgKgCgAsiINQgUgBgTgLIgngCQgKgFgNgCIAAgEIgBgkIgBgnIgBgVIgBgSIgBgQIAAgNIACgaQABgUgCgSQgCgSAFgVQgEgSAAgTQgEgRABgSQgFgUABgTQgHgTADgUIgEgXIgBgPQgIgRgNgTQgBgIgCgIIgGgOIgCgHIALgEIgLAEIgBgEQgCgTABgUQgHgQgCgSQABgUgBgUIAHgkIAHgXIAGgJIADgKIACAAQATAAATABQARABASAAIAoABIAlABQAUAAASgEIABAAQAIgCAEAFQAUgCATgEIALgCIAagGQAUgBARgIQATgCAPgLQASgEAPgIQAPgOAQgJQALgSAMgOQALgOAGgOIAFgMIAKgYIAPgjQABgMAAgOQAOgTALgRQADAFAJAGQAYAQAWAZQANgTADgbQAPAPAFARIAhghQAYgaAbgYQAAAOgJAMQgNAhgTAdQAKgKAOgJQAPgJATgHQATgBASAIQAKgDAHAMQAEAQALAPQAMAUATgKQAKgQAMgJQgBASAAATQgGASgKAQIgGAKIgNAVIgWAhIgHANIgDAHQgEAMADARQgEASAFATQgBATAKAPQADASAKAQQAGAIAHACIABgpQACgdAOg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");
	this.shape_31.setTransform(3.5,28.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-170.1,-138.2,348.9,276.9);


// stage content:



(lib.interj_Scene3 = function(mode,startPosition,loop) {
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
		
		 window.open ("interj_Scene4.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("interj_Scene2.html","_self");
		}
		playSound("scene3awav");
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(30));

	// main
	this.instance = new lib.Copyright("synched",0);
	this.instance.setTransform(275,389.5);

	this.btn_goBack = new lib.goNext();
	this.btn_goBack.setTransform(57.6,352.3,1,1,0,0,180);
	new cjs.ButtonHelper(this.btn_goBack, 0, 1, 2, false, new lib.goNext(), 3);

	this.btn_goNext = new lib.goNext();
	this.btn_goNext.setTransform(494,352.3);
	new cjs.ButtonHelper(this.btn_goNext, 0, 1, 2, false, new lib.goNext(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZBMQgDgCAAgEQAAgKAVgvIgjhCIgEgHQgDgEAAgDQAAgEADgDQAEgDADAAQAFAAACADQARAXARArIAOgiQAIgRAIgNQADgGAFAAQAEAAADADQADADAAAEIgBAFIgiBHQgNAbgEASIgHATQgCAHgHAAQgEAAgDgDg");
	this.shape.setTransform(433.6,28.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AglAsIAAhCIABgKIAAgKQAAgKAIAAQAKAAAAARQASgSAWAAQAIAAAEAGQAEAGAAAMIgBAGQAAANgJAAQgJAAAAgKIAAgHIAAgIQgQACgHAHQgJAGgGANIABAzQAAAKgKAAQgJAAAAgKg");
	this.shape_1.setTransform(424.1,26);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgbAqQgOgMAAgVQAAgSANgVQAPgXAQgBQAKABAMAEQAPAGAAAIQAAAEgDACQgCADgEAAQgDAAgCgBIgEgDQgGgFgNAAQgIAAgJARQgJARAAAKQAAANAIAIQAJAGALAAQAFAAAHgDIALgGIAFgCQADAAADAEQADADAAADQAAAHgQAHQgNAGgIgBQgSAAgOgMg");
	this.shape_2.setTransform(413.9,26);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgFBEQgDgDAAgDIAAgMIAAgKIgBg3IgWgDQgIAAAAgJQgBgEADgDQADgDAEAAIAUABIAAgMIgBgMQAAgFADgCQADgDAEAAQAHAAABAOIABAJIgBAGIAAAFIAPgBQAJAAADABQAHACAAAHQgBAFgCACQgCADgFAAIgFAAIgEgBIgOACIACA4IAAAFIAAAEQABAWgLAAQgCAAgDgDg");
	this.shape_3.setTransform(404,24.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAWAuQgNAHgNAAQgNAAgJgGQgJgGgCgMQgEgaAAgTQAAgNADgRQACgJAIAAQAEAAADADQADADAAAEIgCAOIgBAPIABAaQABAMACAHIAGADIAHABQALAAAOgEIAAgUIAAgRQAAgVACgQQABgJAIAAQAEAAADADQADADAAAEIgCAlIAAATIAAAVIABAGIAAAHQAAAEgDADQgDADgEAAQgHAAgCgKg");
	this.shape_4.setTransform(394.1,26);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgcApQgNgOgBgWQAAgVAMgQQANgUAXAAQATAAAKASQAIAOAAAUQAAAUgLAQQgNARgTAAQgQAAgMgMgAgQgTQgGALAAANQAAAOAHAIQAHAGAIAAQAJAAAHgHQAIgIABgOQABgkgWAAQgMAAgIANg");
	this.shape_5.setTransform(383.4,26.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AglAsIAAhCIABgKIAAgKQAAgKAIAAQAKAAAAARQASgSAWAAQAIAAAEAGQAEAGAAAMIgBAGQAAANgJAAQgJAAAAgKIAAgHIAAgIQgQACgHAHQgJAGgGANIABAzQAAAKgKAAQgJAAAAgKg");
	this.shape_6.setTransform(367.8,26);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgcApQgNgOgBgWQAAgVAMgQQANgUAXAAQATAAAKASQAIAOAAAUQAAAUgLAQQgNARgTAAQgQAAgMgMgAgQgTQgGALAAANQAAAOAHAIQAHAGAIAAQAJAAAHgHQAIgIABgOQABgkgWAAQgMAAgIANg");
	this.shape_7.setTransform(357.2,26.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AghBCQgOgOAAgVQAAgaAOgOQAOgQAUAAQALAAAGAEIAJAGQACgpACgOQABgJAHAAQAJAAAAAKQAAANgEAvIgBAbQAAAgADARIABACQAAAEgDADQgDACgEAAQgGAAgCgJQgIAFgHADQgIADgGAAQgUAAgNgOgAgWABQgIAKAAATQAAANAJAJQAJAJAMAAQAGAAAGgDIALgIIADgDIgBgRIAAgLIABgMQgEgHgGgDQgGgEgJAAQgOAAgJAIg");
	this.shape_8.setTransform(340.2,23.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAXAvIgCgVIgCgVIABgIIAAgJQAAgVgIgBQgLAAgIAOQgJAMgFAPIgBAKIAAAJIAAAJIABAJQAAAFgDACQgDADgEAAQgEAAgDgDQgCgCAAgFIgBgJIgBgJIACgaIABgbIAAgKIAAgJQAAgEACgDQADgCAEAAQAJgBABANIAAAMQARgWAPAAQAQAAAGAOQAEAJABASIAAAKIgBAHQAAAIADANQACAMAAAJQAAAEgDADQgDADgEAAQgJAAgBgKg");
	this.shape_9.setTransform(329.4,25.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAWAuQgNAHgNAAQgNAAgJgGQgJgGgCgMQgEgaAAgTQAAgNADgRQACgJAIAAQAEAAADADQADADAAAEIgCAOIgBAPIABAaQABAMACAHIAGADIAHABQALAAAOgEIAAgUIAAgRQAAgVACgQQABgJAIAAQAEAAADADQADADAAAEIgCAlIAAATIAAAVIABAGIAAAHQAAAEgDADQgDADgEAAQgHAAgCgKg");
	this.shape_10.setTransform(318.7,26);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgcApQgNgOgBgWQAAgVAMgQQANgUAXAAQATAAAKASQAIAOAAAUQAAAUgLAQQgNARgTAAQgQAAgMgMgAgQgTQgGALAAANQAAAOAHAIQAHAGAIAAQAJAAAHgHQAIgIABgOQABgkgWAAQgMAAgIANg");
	this.shape_11.setTransform(308,26.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgaA2QgPgGAAgJQAAgEADgDQADgDAEAAQADAAAFAEQADADAHABIAMABQAGAAAGgCQAJgCAAgHQAAgNgTgFIgIgCQgMgDgGgEQgIgDAAgLQAAgUATgJIARgGIASgHQAEgBAFAAQAEAAADACQADADAAAEIABAJIABAIQAAAEgDADQgCADgEAAQgGAAgCgEQgCgCgBgIIgWAHQgOAGAAAJIAGACQAVAEALAHQAPAIAAATQAAAQgNAIQgMAHgPAAQgNAAgMgEg");
	this.shape_12.setTransform(297.8,25.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAIAiIgRAAIgJAAIgIABQgJAAAAgJQAAgIAIgBIASAAIARAAIAUAAQAIAAAAAJQAAAJgIAAIgUgBgAgPgRIgGABIgHAAQgEAAgCgDQgDgCAAgEQAAgHAJgCIANAAIAsAAQAJAAAAAJQAAAJgJAAg");
	this.shape_13.setTransform(281.7,24.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF9900").s().p("AhABMQgDgDAAgEIAAgNIABgMIAAgSIABgSIgBgSIAAgTIgBgTIgBgSQAAgFAEgDQAEgEAEAAQAGAAAHALQAZAlASAYQAWAbAcAaIAAgNIAAgMQAAgpgEgZIgCgLIgCgKQAAgLAKAAQARAAAAA/IAAAfIAAAgIgCAQQgCAKgJAAQgFAAgHgHQgogmgyhFIAAAWIAAAUIAAAZIAAAYQAAAagKAAQgFAAgDgDg");
	this.shape_14.setTransform(263.2,23.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF9900").s().p("AgxA8QgTgRAAgcQAAghATgbQAXgfAfAAQAhAAAPAPQAQAPAAAgQAAAggSAcQgVAeggAAQgbAAgUgQgAghggQgPAWgBAZQABASAOANQANALATgBQAXAAAPgXQAOgWgBgZQAAgXgKgJQgKgJgYAAQgVAAgRAXg");
	this.shape_15.setTransform(247.2,23.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF9900").s().p("AgqBHQgCgDAAgEQAAgEACgDQADgDAEAAIAVgCIABgSIgBgQIAAgRQAAgUADgiIgNAAIgNAAQgEAAgDgCQgDgDABgFQgBgJAKgBIAdAAQASAAAdAEQAJABgBAJQAAAFgDADQgCACgFAAIgPgBIgQgCQgCAcAAAYIABARIAAARIgBAQIAfAAQAEAAADADQACADAAAEQAAAEgCADQgDADgEAAIgRAAIgQABIgSACIgTABQgEAAgDgDg");
	this.shape_16.setTransform(233.7,23.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF9900").s().p("AgGBHQgDgCAAgFIABgEIAAgFIAAgOIgBgOIgCgmQgDgbAAgMIgJAAQgVAAgMgDQgIgCAAgIQAAgEACgDQADgDAFAAIAPACIAQABIASAAIAQgBIAWACIAXABQAEAAADADQACACAAAFQAAAEgCADQgDADgEAAIgXgCIgWAAIgHAAIADArIACAqIAAALIABAKQAAAHgCAFQgDAGgFAAQgCAAgEgDg");
	this.shape_17.setTransform(222.2,23.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF9900").s().p("AgnA8QgOgQAAgUQAAgfAcgjQAXgdAWAAIAIAAIAHACQADgFAGAAQAHAAABAJQACAIAAALQAAAEgCADQgDAEgFAAQgGAAgDgHQgDgHgCgBQgCgBgIAAQgPAAgPAWQgXAdAAAYQAAANAIAJQAIAJAMAAQAIAAAKgFIARgMQAGgEADAAQAEAAADADQADAEAAADQAAAFgEADQgaAXgYAAQgUAAgOgPg");
	this.shape_18.setTransform(208.8,23.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF9900").s().p("AgqBLQgJgJAAgfIAAgOIABgQIgBgFQAAgBACgDIACgpIgBgLIgBgLQAAgLAKAAQAEAAADACIAWgEIASgCQAYAAANAGQAHADAAAGQAAAEgDADQgCAEgEAAIgEgBQgQgFgPAAIgQACIgUAEIABALIgCAlIApgEIAXgCQAFAAACADQADACAAAFQAAAHgJABIgXACIgsAEIAAANIAAAMQAAAVADAEQACADANAAIAQAAIATgBIAFAAIAHgBQAJAAABAKQgBAIgHACQgKACgdAAQgeAAgJgIg");
	this.shape_19.setTransform(196.6,23.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF9900").s().p("AgnBDQgTgOAAgRQABgMAJAAQAKAAAAAMQAAAIAMAIQALAHAKAAQAGAAADgxQABgVAAgjIAAgLIgFAAIgLAAIgLAAQgFAAgCgDQgDgDAAgFQAAgKAOAAIAKABIAIAAIASgBIASAAQAWAAAAALQAAAEgDADQgCADgFAAIgFgBIgHAAIgLAAIAAAMQAABGgJAiQgHAVgOAAQgRAAgRgMg");
	this.shape_20.setTransform(183.4,24);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF9900").s().p("AgwBKQgDgDAAgEIgBgXIgBgXIACgZIACgbIgBgPIgBgPQAAgFADgEQAEgGAHABIAXACQAOABAHAFQAnAVAAAfQAAAPgNAJQgLAJgQAFQAeAQAPASQADAEAAADQAAAEgDADQgDADgEAAQgEAAgDgDQgggggmgLIABATIAAAUQAAAEgDADQgCADgFAAQgEAAgCgDgAgegqIABALIgBAUIgDARIAFABIAEAAQAYAAALgHQAGgBAFgFQAFgFAAgEQAAgOgQgMQgMgKgPgCIgPgBg");
	this.shape_21.setTransform(170.6,23.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF9900").s().p("AgpBLQgKgJAAgfIABgOIABgQIgCgFQAAgBACgDIACgpIgBgLIgBgLQAAgLAKAAQAEAAADACIAWgEIASgCQAXAAAPAGQAGADAAAGQAAAEgDADQgCAEgFAAIgDgBQgQgFgPAAIgQACIgVAEIABALIgBAlIApgEIAXgCQAEAAADADQADACAAAFQAAAHgJABIgXACIgsAEIAAANIAAAMQAAAVADAEQACADANAAIAQAAIATgBIAGAAIAFgBQALAAAAAKQgBAIgHACQgKACgdAAQgeAAgIgIg");
	this.shape_22.setTransform(158.1,23.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF9900").s().p("AgGBHQgDgCAAgFIABgEIAAgFIAAgOIgBgOIgCgmQgDgbAAgMIgJAAQgVAAgMgDQgIgCAAgIQAAgEACgDQADgDAFAAIAPACIAQABIASAAIAQgBIAWACIAXABQAEAAADADQACACAAAFQAAAEgCADQgDADgEAAIgXgCIgWAAIgHAAIADArIACAqIAAALIABAKQAAAHgCAFQgDAGgFAAQgCAAgEgDg");
	this.shape_23.setTransform(145.6,23.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF9900").s().p("AhABMQgDgDAAgEIAAgNIABgMIAAgSIABgSIgBgSIAAgTIgBgTIgBgSQAAgFAEgDQAEgEAEAAQAGAAAHALQAZAlASAYQAWAbAcAaIAAgNIAAgMQAAgpgEgZIgCgLIgCgKQAAgLAKAAQARAAAAA/IAAAfIAAAgIgCAQQgCAKgJAAQgFAAgHgHQgogmgyhFIAAAWIAAAUIAAAZIAAAYQAAAagKAAQgFAAgDgDg");
	this.shape_24.setTransform(130.1,23.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF9900").s().p("AgqBHQgCgDAAgEQAAgEACgDQADgDAEAAIAVgCIABgSIgBgQIAAgRQAAgUADgiIgNAAIgNAAQgEAAgDgCQgCgDAAgFQAAgJAJgBIAdAAQASAAAdAEQAJABgBAJQAAAFgDADQgCACgFAAIgPgBIgQgCQgCAcAAAYIABARIAAARIgBAQIAfAAQAEAAADADQACADAAAEQAAAEgCADQgDADgEAAIgRAAIgQABIgSACIgTABQgEAAgDgDg");
	this.shape_25.setTransform(116.6,23.7);

	this.btn_menu = new lib.skiptomenu();
	this.btn_menu.setTransform(514.1,20.3);
	new cjs.ButtonHelper(this.btn_menu, 0, 1, 2, false, new lib.skiptomenu(), 3);

	this.instance_1 = new lib.Scene3();
	this.instance_1.setTransform(271.1,192.3,1.132,1.132);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.btn_menu},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.btn_goNext},{t:this.btn_goBack},{t:this.instance}]}).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(284.2,201.8,537.1,397.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;