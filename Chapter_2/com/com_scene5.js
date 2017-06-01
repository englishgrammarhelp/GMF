(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	manifest: [
		{src:"sounds/bump.mp3?1496171868638", id:"bump"},
		{src:"sounds/wrong_answer.mp3?1496171868638", id:"wrong_answer"},
		{src:"sounds/Cowbell.mp3?1496171868638", id:"Cowbell"},
		{src:"sounds/High_Screaming_Gtr.mp3?1496171868638", id:"High_Screaming_Gtr"},
		{src:"sounds/massacreistheobjectivecomplement.mp3?1496171868638", id:"massacreistheobjectivecomplement"},
		{src:"sounds/ouch.mp3?1496171868638", id:"ouch"},
		{src:"sounds/right_answer.mp3?1496171868638", id:"right_answer"},
		{src:"sounds/theycalledthegameamassacre.mp3?1496171868638", id:"theycalledthegameamassacre"}
	]
};



// symbols:



(lib.Tween40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.3,1,1).p("AAKh3QgKgFgMgDQgOgDgOABQgLACgOAAQgCAAgBAAQgMABgNAAQgMAAgNAIQgLAHgMADQgMADgHAKQgDABgCADQgEAFgDAHQgFAOgBAMIAAAAAhBh/QAIgKAPgHQANgGAOgEQAPgDAEARQADANADAIQABAAAAAAQARgFAMgDQAHgBAFAHQAKAMgBAMQADABACACQACgBABAAQAHgCAIABQAKAAAEAJQAFAMgHAOQAMgCAMgCQANgEAEAKQAEAPgLAPQgEAEAAACQgJgLgIgKQgIgJgFgIQgDgEgDgEQgHgNgNgJQgCgCgCgBQgDABgCABQgBgBABgEQgIgFgKgEQgOgGgPgGQgBAAgCgBIAAAAIgBAAAiyg1IAAAAQgCANACAMQADAPAEAKQAGAKAFALQAGAMAFAMQAFALAKALQAJAKALAIQANAKAKAKQAMAKAOAIQAOAIAPAHQAOAGAPAEQAOAEANABQAOACAQADQAPABAOgCQAOgCANgDQAMgEANgEQALgEAOgFQAOgDAGgRQAGgOgEgMQgEgPgEgNQgEgQgFgOQgFgOgKgNQgIgKgLgNQgBAAAAgBAiBhTQAPgDAOAEQAQAEAOABQAPACAPAEQAHACAGADQAAgHgBgGAAIgwQAEACAEACQAEACADACAAIgwQgIgGgKgFQgIgEgJgDQABAHABAIQAAALABAKAAJhDQgBAKAAAJAAMgUQgCgHgBgKQgBgGAAgFAAyglQgCAOABAPQABAFAAADABKgSQACAPAAAL");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663300").s().p("AAyCOIgegEQgNgCgOgEQgPgEgOgFQgPgHgOgIQgOgJgMgKIgXgTQgLgJgJgKQgKgKgFgLIgLgZIgLgVQgEgJgDgPQgCgNACgMIAAgBIAAAAQABgMAFgNQADgIAEgFIAFgEQAHgJAMgDQAMgEALgGQANgIAMAAIAZgBIADAAIAZgCQAOgCAOAEQAMADAKAEIABABIAAAAIADABIAdAMQAKAEAIAEQgBAEABACIAFgCIAEACQANAKAHAMIAGAIIANARIARAWIABABQALAMAIANQAKAKAFAOIAJAeIAIAcQAEAMgGAOQgGARgOAEIgZAIIgZAIIgbAFQgJACgJAAIgLgBgABMgCQAAgOgCgOQACAOAAAOgAAxgUIABAIIgBgIIAAgNIABgRIgBARIAAANgAAJgyIADASIgDgSIgBgLIAIAEIAHAFIgHgFIgIgEIAAgBIABgRIgBARIAAABIgSgLIgRgHIACAPIABAWIgBgWIgCgPIARAHIASALIABALgAgbhPIgBgNIABANIgNgEQgPgFgPgBQgOgBgQgFQgIgCgHAAIgBAAIAAAAIgNABIANgBIAAAAIABAAQAHAAAIACQAQAFAOABQAPABAPAFIANAEIAAAAgAgbhPIAAAAg");
	this.shape_1.setTransform(0,1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABJAsIgNgRIAZgEQAMgEAEAKQAEAPgLAPQgDAEgBACIgRgVgAA8AbIgFgIQgIgNgNgHIAAgEQAGgCAIABQAKAAAEAHQAFAMgHAOIAAAAgAAHgQIgbgMIgDgBIAbgIQAHgBAFAHQAKALgBANQgIgFgKgEgAgvglQgPgDgNABIgaACQAIgKAPgHQANgHAPgDQAPgDAFARIAGAVQgLgFgMgDg");
	this.shape_2.setTransform(3.6,-9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,-16.5,38.1,33.2);


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


(lib.scene5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("ouch");
	}
	this.frame_5 = function() {
		playSound("theycalledthegameamassacre");
	}
	this.frame_9 = function() {
		playSound("bump");
	}
	this.frame_15 = function() {
		playSound("bump");
	}
	this.frame_20 = function() {
		playSound("bump");
	}
	this.frame_41 = function() {
		playSound("massacreistheobjectivecomplement");
	}
	this.frame_42 = function() {
		playSound("Cowbell");
	}
	this.frame_84 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(4).call(this.frame_9).wait(6).call(this.frame_15).wait(5).call(this.frame_20).wait(21).call(this.frame_41).wait(1).call(this.frame_42).wait(42).call(this.frame_84).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHAnQgKgEgIgIQgNgNgCgOQgCgNAMgMQANgNAQgCQAQgCANANQAJAJADAJQAEALgIAGQgGAGgLgCQgFgBgMgFIgXgHQAAADACAFQACAFAEAEQAHAHAGACQAHACACACQAGAGgFAFQgEADgFAAQgDAAgFgCgAgJgRIAPAGIAQAFQgBgFgGgGQgFgFgGAAQgFAAgIAFg");
	this.shape.setTransform(222.9,334.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAABAQgDAAgDgDQgFgFAEgHQACgFAFgJIALgNIAEgEIAEgDIAEgFQADgEgCgCQgGgEgKAAQgFAAgKADQgSASgGADQgGABgEgEQgDgDgBgEQAAgEADgDIADgCIAOgLIAhgjIACgBIAJgJIAEgFIAEgFQADgDAEABQAEAAADADQAFAFgDAHQgCAEgHAHIgLAKIgKAJQAHABAHACQAGACAFAFQAJAIgBAIQgCAHgGAIIgNAOIgJALIgIALIgCADQgCACgEAAIAAAAg");
	this.shape_1.setTransform(216.7,327.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgkAmQgDgDAAgEQgBgEADgDIAGgFIAGgGIAZgZIgIgLQgGgHAGgGQADgDAEAAQABAAAEADIAIAJIAFgFIAFgGQADgDAEABQAEAAADADQAIAHgNANIgFAFIAGAEIAIAIQACAFgFAFQgDADgEAAQgEAAgDgDIgCgDIgDgDIgFgEIgZAcIgCADIgDADQgHAHgGAAQgDAAgDgDg");
	this.shape_2.setTransform(212.2,322.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgBAsQgEgBgDgCQgCgDAAgKIgMgFQgFgCgDgCQgMgNAAgLQABgNANgNQANgNAPABQATAAAMANQAFAFAEAJQAFALgFAFQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIgGAEIgIAHQgKAKgCAFIgDAIIgDAHQgDADgBAAIgBAAgAgOgRQgHAHgBAGQgBAEAFAFQADAEAEACIAIACIAPgSIAFgEIAFgEIgBgCIgBgCQgHgHgLAAQgJAAgHAHg");
	this.shape_3.setTransform(306.9,328.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00E600").s().p("AgYAfQgMgJAAgRQAAgQAJgOQALgNARAAQAMAAAJADQALAGAAAMQAAAIgJAGQgEADgMADIgXALQAEAEAEABQAGACAEABQAKgBAGgEQAHgDADAAQAIAAAAAIQAAAHgMAGQgLAFgLAAQgPAAgMgJgAgJgRQgEAFgEAKIARgIQAIgEAGgEQgFgDgIAAQgFAAgFAEg");
	this.shape_4.setTransform(347.1,303.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00E600").s().p("AgbAmQgDgDAAgFIAAgtIAAgHIABgHQgBgEADgCQADgEAEAAQAIAAACAJQALgKAPAAQAPAAAAAUIAAAFQgBALgJAAQgJAAAAgKIgBgHQgPACgGAPIAAAiQAAAFgDADQgDACgEAAQgFAAgCgCg");
	this.shape_5.setTransform(339.5,303.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00E600").s().p("AgWAgQgLgKAAgQQAAgMAKgQQAMgSANAAQAIAAAKAEQANAGAAAGQAAAEgDADQgCADgFAAQgDAAgEgEQgFgDgJAAQgDAAgHALQgGAKAAAGQAAAIAFAEQAGAEAGAAQAFAAAHgDIAJgEQAEAAADADQADADAAADQAAAGgMAGQgMAFgHAAQgOAAgLgJg");
	this.shape_6.setTransform(331.8,303.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00E600").s().p("AARAhIgMAFIgGACQgSAAgJgKQgJgJAAgTQAAgQANgMQANgNARAAQAHAAAJAEQALAFAAAGQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABIgBAHIAAAKQAAAMACAGIADAIIADAHQAAAEgDACQgDADgEAAQgDAAgIgHgAgJgNQgHAHAAAJQAAAJADAFQAEAFAHAAQACAAAEgBQAEgCAEgDIgCgYIAAgFIABgHIgCgBIgCAAQgIAAgIAIg");
	this.shape_7.setTransform(323.9,303.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00E600").s().p("AgTAmQgLgEAAgIQAAgIAIAAIAKACIAKACQANAAAAgGQAAgDgLgFQgNgGgEgCQgKgHAAgKQAAgPAPgFQAKgDAQAAQAIAAADACQAFADAAAGQAAAOgHAAQgHAAgCgGIgGgBQgQAAAAAFQAAADAJAFQAPAGAFADQAKAHAAAJQAAANgLAGQgKAGgMAAQgJAAgIgDg");
	this.shape_8.setTransform(316,303.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00E600").s().p("AgTAmQgLgEAAgIQAAgIAIAAIAKACIAKACQANAAAAgGQAAgDgLgFQgNgGgEgCQgKgHAAgKQAAgPAPgFQAKgDAQAAQAIAAADACQAFADAAAGQAAAOgHAAQgHAAgCgGIgGgBQgQAAAAAFQAAADAJAFQAPAGAFADQAKAHAAAJQAAANgLAGQgKAGgMAAQgJAAgIgDg");
	this.shape_9.setTransform(308.7,303.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00E600").s().p("AARAhIgMAFIgGACQgSAAgJgKQgJgJAAgTQAAgQANgMQANgNARAAQAHAAAJAEQALAFAAAGQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABIgBAHIAAAKQAAAMACAGIADAIIADAHQAAAEgDACQgDADgEAAQgDAAgIgHgAgJgNQgHAHAAAJQAAAJADAFQAEAFAHAAQACAAAEgBQAEgCAEgDIgCgYIAAgFIABgHIgCgBIgCAAQgIAAgIAIg");
	this.shape_10.setTransform(301,303.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00E600").s().p("AgFAqQgDgDAAgEIgCgYIgBgXIgBgIQgJAFgIAMIgBABIgBAWIAAAFIAAAFQAAAEgDACQgDADgFAAQgGAAgCgGQgCgDAAgIIAAgaIAAgKIAAgLQAAgHACgFQADgHAFAAQAEAAAEAEQADADAAAEIgBAGQALgNAKAAQALAAAEAJQAEgEAGgCQAFgCAGAAQAPAAAFAOIADAUIAFAlQAAAFgDACQgDADgEAAQgIAAgCgIIgDgWIgCgTQgCgNgDAAIgIADIgJAGIACAWIACAYQAAAEgCADQgDADgFAAQgCAAgDgDg");
	this.shape_11.setTransform(291.1,303.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#006600").s().p("AgYAfQgMgJAAgRQAAgQAJgOQAMgNAQAAQANAAAIADQALAGAAAMQAAAIgJAGQgEADgNADIgWALQADAEAFABQAGACAEABQAKgBAGgEQAGgDAFAAQAHAAAAAIQAAAHgMAGQgLAFgLAAQgPAAgMgJgAgJgRQgFAFgDAKIARgIQAIgEAGgEQgFgDgIAAQgFAAgFAEg");
	this.shape_12.setTransform(228.8,303.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#006600").s().p("AgFAqQgDgDAAgEIgCgYIgBgXIgBgIQgJAFgIAMIgBABIgBAWIAAAFIAAAFQAAAEgDACQgDADgFAAQgGAAgCgGQgCgDAAgIIAAgaIAAgKIAAgLQAAgHACgFQADgHAFAAQAEAAAEAEQADADAAAEIgBAGQALgNAKAAQALAAAEAJQAEgEAGgCQAFgCAGAAQAPAAAFAOIADAUIAFAlQAAAFgDACQgDADgEAAQgIAAgCgIIgDgWIgCgTQgCgNgDAAIgIADIgJAGIACAWIACAYQAAAEgCADQgDADgFAAQgCAAgDgDg");
	this.shape_13.setTransform(219,303.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#006600").s().p("AARAhIgMAFIgGACQgSAAgJgKQgJgJAAgTQAAgQANgMQANgNARAAQAHAAAJAEQALAFAAAGQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABIgBAHIAAAKQAAAMACAGIADAIIADAHQAAAEgDACQgDADgEAAQgDAAgIgHgAgJgNQgHAHAAAJQAAAJADAFQAEAFAHAAQACAAAEgBQAEgCAEgDIgCgYIAAgFIABgHIgCgBIgCAAQgIAAgIAIg");
	this.shape_14.setTransform(208.9,303.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#006600").s().p("AgkAuQAAgEACgCQADgDAEAAIAJACIALABQAJAAAFgHQAFgGABgPQgEAEgEACQgFACgDAAQgPAAgJgJQgJgKAAgNQAAgUAMgMQAMgNAUAAQAHAAAFACQAFACADADQAJABAAAKIgBAOQgDARgBARQgBAYgHAKQgKAPgWAAQgcAAAAgMgAgKggQgGAHAAAMQAAAJADAEQADADAHAAQAEAAAGgFQAGgHABgGIADgWIgFgCIgFgBQgKAAgHAIg");
	this.shape_15.setTransform(200.7,305.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AAUA2QgFADgFABIgKACQgQAAgLgLQgLgLAAgRQAAgTALgKQALgNARAAQAFAAAEACQAFABADACQABgZABgJQABgJAJAAQADABAEACQACADAAAEIgBAgIgCAeQAAAaACAJIAAACQAAAEgEACQgDADgDABQgFgBgDgFgAgNACQgGAHAAAMQAAAJAGAFQAGAGAHgBQAEAAADgBIAGgEIADgCIAAgbQgDgFgDgBQgEgBgFAAQgJAAgFADg");
	this.shape_16.setTransform(159.8,301.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AgYAfQgMgJAAgRQAAgQAKgOQAKgNARAAQAMAAAJADQALAGAAAMQAAAIgJAGQgEADgMADIgXALQAEAEAEABQAFACAFABQAKgBAGgEQAHgDADAAQAIAAAAAIQAAAHgMAGQgKAFgMAAQgPAAgMgJgAgIgRQgFAFgEAKIARgIQAIgEAGgEQgFgDgIAAQgFAAgEAEg");
	this.shape_17.setTransform(151.2,303.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("AgGA5QgCgDgBgEIAAhjQAAgFADgCQAEgDACAAQAEAAADADQACACAAAFIAABfQABAOgKAAQgDAAgDgDg");
	this.shape_18.setTransform(145,301.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AgGA5QgDgDAAgEIAAhjQABgFADgCQACgDADAAQAEAAACADQAEACAAAFIAABfQgBAOgJAAQgDAAgDgDg");
	this.shape_19.setTransform(140.9,301.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AARAhIgMAFIgGACQgSAAgJgKQgJgJAAgTQAAgQANgMQANgNARAAQAHAAAJAEQALAFAAAGQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABIgBAHIAAAKQAAAMACAGIADAIIADAHQAAAEgDACQgDADgEAAQgDAAgIgHgAgJgNQgHAHAAAJQAAAJADAFQAEAFAHAAQACAAAEgBQAEgCAEgDIgCgYIAAgFIABgHIgCgBIgCAAQgIAAgIAIg");
	this.shape_20.setTransform(134.8,303.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AgWAgQgLgKAAgQQAAgMAKgQQAMgSANAAQAIAAAKAEQANAGAAAGQAAAEgDADQgCADgFAAQgDAAgEgEQgFgDgJAAQgDAAgHALQgGAKAAAGQAAAIAFAEQAGAEAGAAQAFAAAHgDIAJgEQAEAAADADQADADAAADQAAAGgMAGQgMAFgHAAQgOAAgLgJg");
	this.shape_21.setTransform(126.6,303.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0000FF").s().p("AgVA4QgDgDAAgEQAAgHAQghIgZgtIgEgGQgCgDAAgDQAAgEADgDQADgDAFAAQAEAAADAEQALAOALAbIAJgUIALgUQADgFAFAAQAFAAADADQADADAAAEIgBAEIgaAzIgNAfIgEAOQgCAHgHAAQgEAAgEgDg");
	this.shape_22.setTransform(105.7,305.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0000FF").s().p("AgYAfQgMgJAAgRQAAgQAJgOQAMgNAQAAQAMAAAJADQALAGAAAMQAAAIgJAGQgEADgNADIgWALQADAEAGABQAFACAEABQAJgBAIgEQAGgDAEAAQAHAAAAAIQAAAHgNAGQgJAFgMAAQgQAAgLgJgAgJgRQgEAFgDAKIAQgIQAIgEAFgEQgEgDgIAAQgFAAgFAEg");
	this.shape_23.setTransform(97.3,303.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0000FF").s().p("AARA1QgCgFgCgLIgBgSIAAgFIAAgFIAAgHQAAgCgDAAQgJAAgEAGQgEADgFALQAAAbgDAFQgDAGgGAAQgEAAgDgDQgEgDAAgEIABgDIABgUIAAgwIAAgCIABgLIgBgHIgBgHQAAgEADgDQADgDAFAAQAHAAACAJQACAEAAAJIgBAPIAAAOQAFgFAGgDQAFgCAHAAQAMAAAGAGQAEAGABAIIAAATIACAOIACAOIABADQAAAEgDADQgEADgEAAQgHAAgCgIg");
	this.shape_24.setTransform(89,301.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0000FF").s().p("AgFA1QgEgDAAgEIABgDIAAgEIgBgKIAAgKIgCgZIgCgaIgDAAQgRAAgJgDQgJgCAAgHQAAgEADgDQADgEAFABIAMABIAMABIANAAIALAAIARAAIARABQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAIgSgBIgSgBIACAeIACAcIAAAHIABAIQAAAFgDAFQgDAFgFAAQgCAAgDgCg");
	this.shape_25.setTransform(79.3,301.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(3,1,1).p("AxKAlIAADOA3gAlIGWAAIAAj4AoejsIAAELADtAfIETkRAXhAlMgorAAA");
	this.shape_26.setTransform(226.6,309.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00E600").s().p("AgYAfQgMgJAAgRQAAgQAJgOQAMgNAQAAQANAAAIADQALAGAAAMQAAAIgJAGQgEADgNADIgWALQADAEAFABQAGACAEABQAKgBAGgEQAGgDAFAAQAHAAAAAIQAAAHgNAGQgKAFgLAAQgPAAgMgJgAgJgRQgFAFgDAKIARgIQAIgEAGgEQgFgDgIAAQgFAAgFAEg");
	this.shape_27.setTransform(351.7,303.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#00E600").s().p("AgcAmQgCgDAAgFIAAgtIAAgHIABgHQgBgEADgCQADgEAEAAQAIAAABAJQAMgKAPAAQAPAAAAAUIAAAFQgBALgJAAQgJAAAAgKIgBgHQgOACgIAPIAAAiQAAAFgCADQgDACgEAAQgFAAgDgCg");
	this.shape_28.setTransform(344.1,303.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#006600").s().p("AgYAfQgMgJAAgRQAAgQAJgOQAMgNAQAAQAMAAAJADQALAGAAAMQAAAIgJAGQgEADgNADIgWALQADAEAGABQAFACAEABQAJgBAIgEQAGgDAEAAQAHAAAAAIQAAAHgNAGQgJAFgMAAQgQAAgLgJgAgJgRQgEAFgDAKIAQgIQAIgEAFgEQgEgDgIAAQgFAAgFAEg");
	this.shape_29.setTransform(239.9,303.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#006600").s().p("AgYAfQgMgJAAgRQAAgQAKgOQAKgNARAAQAMAAAJADQALAGAAAMQAAAIgJAGQgEADgMADIgXALQAEAEAEABQAFACAFABQAKgBAGgEQAHgDADAAQAIAAAAAIQAAAHgMAGQgKAFgMAAQgPAAgMgJgAgIgRQgFAFgDAKIAQgIQAIgEAGgEQgFgDgIAAQgFAAgEAEg");
	this.shape_30.setTransform(197.1,303.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#006600").s().p("AARA1QgCgFgCgLIgBgSIAAgFIAAgFIAAgHQAAgCgDAAQgJAAgEAGQgEADgFALQAAAbgDAFQgDAGgGAAQgEAAgDgDQgEgDAAgEIABgDIABgUIAAgwIAAgCIABgLIgBgHIgBgHQAAgEADgDQADgDAFAAQAHAAACAJQACAEAAAJIgBAPIAAAOQAFgFAGgDQAFgCAHAAQAMAAAGAGQAEAGABAIIAAATIACAOIACAOIABADQAAAEgDADQgEADgEAAQgHAAgCgIg");
	this.shape_31.setTransform(188.8,301.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#006600").s().p("AgFAzQgEgDAAgEIABgIIAAgIIgBgkIgOgBQgJgBAAgJQAAgEACgDQADgCAFAAIAMABIAAgIIgBgIQAAgEADgCQADgDAFAAQAIAAAAASIAAAHIAIgBIALABQAGACAAAHQAAAEgDADQgDACgEAAIgEAAIgDAAIgHABIABAkIAAAEIAAAEQAAARgKAAQgCAAgDgCg");
	this.shape_32.setTransform(180.9,302.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15,p:{x:200.7}},{t:this.shape_14,p:{x:208.9}},{t:this.shape_13,p:{x:219}},{t:this.shape_12},{t:this.shape_11,p:{x:291.1}},{t:this.shape_10,p:{x:301}},{t:this.shape_9,p:{x:308.7}},{t:this.shape_8,p:{x:316}},{t:this.shape_7,p:{x:323.9}},{t:this.shape_6,p:{x:331.8}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_15,p:{x:211.8}},{t:this.shape_14,p:{x:220}},{t:this.shape_13,p:{x:230.1}},{t:this.shape_29},{t:this.shape_11,p:{x:295.7}},{t:this.shape_10,p:{x:305.6}},{t:this.shape_9,p:{x:313.3}},{t:this.shape_8,p:{x:320.6}},{t:this.shape_7,p:{x:328.5}},{t:this.shape_6,p:{x:336.4}},{t:this.shape_28},{t:this.shape_27},{t:this.shape_3}]},84).wait(1));

	// Layer 2
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(3,1,1).p("AoriYIERExAE+iYIDuDr");
	this.shape_33.setTransform(246.7,328.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_33).wait(85));

	// Layer 5
	this.instance = new lib.Tween40("synched",0);
	this.instance.setTransform(350.2,96.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:1080,guide:{path:[350.1,96.7,354.1,88.4,356.9,78.5,360.3,66.6,370.2,73.7,378.7,79.6,382.2,89.6,385.9,99.6,386.1,111.1,393.2,120.6,394.7,131.2,396.3,142.2,397.2,153.6,398.1,164.9,399.7,176.1,401.4,187.5,401,198.6,404,210.3,403.8,224.6,407.7,217.1,408.6,204.6,407.3,190.6,414.8,180.5,420.6,172.8,426.9,175.8,432.6,180.1,436.5,185.9,438.3,188.5,440.3,191.5,445.4,199.1,447.5,208,448.8,213.5,448.7,219.3,448.6,223.4,449,224.5,453.3,217.3,457,209.1,462.7,196.2,478.7,198.3,493.2,200.3,504.6,206,510.6,209,515,214.1]}},20).wait(65));

	// Layer 1
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(4,1,1).p("EAkZAN5IAAoLIAA7LMhIxAAAIAAczIAAGaIAAHuMBIxAAAg");
	this.shape_34.setTransform(232.9,137.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(0.3,1,1).p("EAkZAJJQgCgCgDgCQgkgag7geQgbA/ABAZQguhjhKBiAeiRRQDEgnCuAmQADAAACABAF4xvQgFgEgLAAQgJgBgJAAQgJAAgJgBQgJAAgIABQgJACgJABQgKAAgJABQgIAAgIAAQgIAAgIAAQgKAAgJAAQgKAAgJgBAvxkeQACAOgHAOAuSkgQABAQgKAHA39JOQhBgggdBXQgzhJhcBGQhXhyAICJQgwhAgGBoQhshBBvgoQhFgYg7AJQgWAqARAqQgTglgoA8QgyhKgoA2QAEgeAAglQhjAUgzA8AwREwQABADAAACQABAJABAJQAAADAAACQAAAIgBAJAulEzQALAPgBAMQgCAOgRALAw6PMQAKgNAIgMQAIgNADgNIAAAAAuwObQACARAAAMAySRSQAWgOAfgFQASgCAWABEgkYARHQBcAoCUAEQC5AFC5gEQCWgDCXgRQAigEAjgF");
	this.shape_35.setTransform(233.4,116);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(0.3,1,1).p("AJ6pDQAKgNAQgHQAPgGANgIQAOgIAOgKQAOgJAPgHQAQgGAOgJQAOgHAOgHQAOgHAPgGQAPgGAPgIQAOgHAOgHQAOgIANgJQAOgIANgIQAPgJAOgJQANgIAOgHQAPgHAQgFQAPgEAIgKQARANAdACQAMABAKgEQAHgCAFgFQAJgHALAHQAVAMATAOQAKAHANAFQALAEAMAFQAQAGARgDQALgDgDgKQgDgNgOgIQgLgHgNgFQgTgIgTgCQgTgCgJgOQAGAAAGADQAXAIAZACQAGABAGACQAZAIAbgFQAGgBgBgEQgGgNgKgLQgHgJgMgDQgSgEgRgGQgTgHgRgEQAOgBAPgCQAQgBAQABQAQAAARgJQAIgLgSgJQgPgHgQgBQgRgBgQAAQgRAAgPAEQgLACgGgGQgMgNAYgGQAQgEAPgEQARgEAMgFQALgFABgKQACgTgPADQgRAEgPAFQgQAGgPAFQgPAFgQAEQgOADgIAJQgCACgCACQABgCABgDQAEgJACgLQAIgmgWgeQgCgDgDgCQgTgKgWAIQAIALADAOQACAMgGAGQgMAKABAOQACAQAEAPQAGASgNAIQgHAEgFAHQgMANgFAKQgIAKgQAGQgOAFgOAHQgNAHgNAJQgNAIgOAGQgOAGgOAFQgPAFgQAEQgPAEgPAGQgPAHgOAGQgQAGgOAHQgOAHgOAGQgPAFgOAIQgOAHgOAJQgNAIgPAGQgPAHgPAGQgOAFgNAIQgOAJgMAKQgNAKgQAEQgQAFgPAHQgPAGgPAHQgPAHgOAIQAAABgBAAQgCACgDABQgJAGgMAFQgPAGgPAFQgPAFgOAJQgOAJgNAHQgCABgBAAQAAgIAAgIQAAgRAAgRQAAgQAAgQQAAgQgBgRQgBgPgCgPQgCgQgBgQQAAgRgBgRQgBgQAAgRQABgQAAgRQAAgQACgPQADgQABgRQACgPACgPQABgQAAgRQAAgRABgQQAAgQgCgQQgDgPgLgLQgCgBgCAAIABAAQAGgRgIgQQAPgCAJgOQAEgHgEgGQgKgNgDgRQgDgQABgRQABgQACgRQACgPABgPQACgPAEgPQACgIABgIQABgIAAgIAPvvGQgMAIgHARQgEAIgBAIAPLv4QgPAEgLAKQgNAKgGAQQgEAKABALAFXmXQABAAACAAQAPgFAOgGQAQgHAPgHQANgGAPgGQAPgFAOgHQAPgHAPgEQAQgFAQgEQAQgFARgEQAPgEARgCQAQgCAQgDQAQgDAPAFQAGADAGADQABABABAAQAHADAIACQAHADAIADQAPAGAPAFQAQAGAOAIQAOAIAPAGQAOAFANAIQAOAIAPAHQAPAGAPAGQAPAGAPAIQAOAHAPAIQAOAIAOAJQANAJAPAGQAOAGAQAGQAPAGAOAGQAPAGANAKQANAIAOAIQgQAGgQAFQgMAEgKAGQgLAGACAQQAUAIAagJQATgGASADQAPADgMAMQgIAIgHAJQgJAMgOAJQgPAKgFAPQgCAHAEAFQAGAIAOgJQANgIALgMQAPgQANgSQAIgMALgLQAMAJAFAPQAJAZAKAbQAFAOADAPQABAKAKADQAGACAEgFQAGgIADgKQACgLgCgLQgBgLgFgKQgKgWgPgUQgHgKgDgMQAOAJALAMQAMALAJANQAJANAKAMQAJANANAKQAKAIAEgIQAHgOgGgQQgFgPgKgMQgKgMgMgLQgNgKgMgKQgTgPAZAFQAQADAQAEQAQAEAPAJQAMAIAMAJQAOALAQABQAWABgLgSQgIgOgOgIQgNgIgPgFQgPgFgPgIQgOgIgMgJQgNgLgNgKQgNgKgOgIQgPgIgQgDQgRgCgMAFQgOgKgMgIQgOgJgMgLQgNgKgOgIQgOgIgOgKQgNgJgPgHQgPgHgNgJQgOgJgMgKQgNgLgNgJQgNgJgQgGQgQgFgMgJQgOgJgPgFQgQgFgPgFQgQgFgPgGQgOgGgRgFQgPgEgQgDQgPgEgQgCQgJgBgKgCQgBAAgCAAQgCgBgCAAQgMgEgLgBQgEAAgEgBAXjjAQARgLAQgJQAZgMAagPQAhgUgcgCQgZgCgYACQgfADgOAKQAEgZAEgZQgGAFgJAGQgXATgHAhQAAgLgDgLQgHgXgZgKQgIgDAAAHQACAiAQAfQgRgHgPgEQAFAPAUACQgLAFgLAGQgUAMgTAVQAbABAYgNQgIAKgFAOQgJAfgKAWQAJgGAHgIQAVgUAUgTQgCAOgBAOQgEAmAUAbQADgHABgJQAEgjgEgdQAGAKAEAQQAGAdAMAUQgBgRgDgPQgEgYAEgZQACgLADgJQADgHAEgGQACgEAEgDgAXWisQANAGAOALQASAMAMASQAMARAOAOQAQAQATARQAQAPANAVQANAUAOASQAPAUALASQANAUAPASQANAQAMATQALARAHAPQACADABADQAAgEAAgEQAAgQABgPQgJgRgLgTQgMgVgOgRQgQgUgKgQQgLgRgMgSQgEgFgDgFQgBAAAAAAQgJgNgLgNQgPgRgRgRQgPgRgPgQQgNgQgUgSQgOgOgSgLQgIgFgEgDAaTiuQgmAAgaAaQgQAQAPACQAlADAjAGQgcAJgHAaQAcgCAbACQgTAZgSAVQgCADgCADQAEgBAEgCQAYgPAaAHQgRAEgIASQAagHAcgJQAEgBAFgBQAPgEAQABQADAAADAAQAbADATAYQgGgSgKgOQgDgFgEgEQAEAEAFACQABAAAAABQAVAGAKASQALAUASAQQASARAHATQAMgLgGgWQgEgRgLgSQgYgngRgrQAFACAFABQAgADAWAZQABgPgJgMQgagggngUQAbgDAeAAQAGAAAGAAQgGgDgFgBQgzgQgrACQADgHAEgDQAbgUAZgRQg3gDglAkQgEADgEABQgFAAgGgFQgagWgkgKQgCASASAIQADABAEACAaTiuQAEAAAEAAAa/jDQgOgEgQgCQgjgCghAOQAbANAbACAUOEqQgDgSgLgOQgDgFgIgBQgZgCgLAbQgDAGgDAEQgbgZgdAHQgNAQgFAMQgKgLgQACQgHABgHABQgHgpgSgbQgCgEgEgEQgDgEgDgCQgUAGgYgRQgIgFgIgCQgLATAFAXQADAPAIAJQgbgMgYgBQgOAUgFARQgQgRgMABQgDABgFADQgKgVgNgRQgLgOgLAMQgLANgVgJQgJgFgGAFQgIAHABANQACAcghgNQgKAUgGgGQgNgLgQADQgOACgFALQADAGACAGQAFAQALALQAKALALALQAMALALAMQALAMALALQALAMAFAPQAEAPAKANQACADAAAEQABACAAABQADAOABANQACARgDARQgCAMABAMQATADAPABQARACAJAPQAHAMgBAOQAAATgQAEQgRAFgOgKQgNgKgIgMQgEgGgGgFQADAGACAHQAEAJACAJQAEAQgLANQgOAPgMgQQgGgIgEgKQADAQgLAHQgGAFgFgEQgHgFgGgJQAAAQgQgFQgDgBgCgCQAAgBgBAAQAEAQgRABQgOAAgKgHQgDgDgCgCQgGgMAAgSQAAgRAIgNQAJgNAGgPQAHgPALgOQALgMADgQQADgNgFgGQAFAEAGABAakGDQg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BAHgBAHQgBARABARQABASANAHQABABABABQAAAAAAAAQATgGAJgMAiyxVQgEAGAAAJQABARAJAOQAFAJAIAFAiyxVQgLACgMABAjpwhQgNAHgPAFQgNAEgNAEQgLADgJAEAinuXQAUAjgKAsQgLAsgkABQgmACgdgOQgggSgegSQgRgLgXgBAowvVQABAMACALQAEAQAIAOQABABABACQAAAAgBAAQgDABgCAAAogvfQgHAIgJACQAAgEAAgEQgLgBgQAJQgOAIgOAFQgPAFgRAFQgQADgPAHQgPAFgPAEQgQAEgPAFQgPAFgPAGQgPAFgQABQgPAAgPADQgRACgQAEQgHACgGAAQgDABgCABQgBAAgCAAQgBAAAAAAQgFgCgEABQAAgKABgNQAAgQAAgRQAAgRAAgRQAAgQgCgQQgBgQgEgQQgDgPgBgQQgBgPAEgPQADgQgBgRQgJgHgQgGQgOgHgQgEQgQgGgOgDQgNgCgIAOQgHANgCARQgBAPgBAQQgCARAAARQABARgCARQgBAQgBAPQgBARAAARQAAARADAPQACANgBAOQAFABAEADQAMAIAQAEQAPAEANAGQAMAGANAHQAAgBAAAAQAJgKATgIQADgBADAAQAAADAAACAtstTQAJgCAKgBQAGgCAHgBQAJgCAKgCQATgEASgEQAOgEAOgCQAVgEAUAAQAXAAAXgCQAGgBAGgCQATgFATgHQAUgHAUgCQAZgCAWgJQgEgEgDgFIAAAAQALgFAJgFApguyQgQADgPAGQgPAHgPAHQgPAHgOACAm+tXQAqABAkAVQAjAUAkAWQAjAVAGAiQALAxgrAMQgnAKgpAFQgnAEgngBQgkAAgjAAQgjAAgiAAQA/AKBCAPQApAJAaAUQAaAVgMAmQgEALgRAEQhLAThSAHQgnADglAGQA6gBA3AGQA8AIA3AVQAfAMAIAeQARA/g1AyQguArg8AXABGsBQACABABABAh/qYQgHAIABARQABAQAFAPQAFARAKAIQAMAIANAEQAJACAJACQAHABAHgBQAIgCAIgFQAMgLAHgLQAGgJgDgCAAwpfQgKAKgLANQgJALgFAQQgGAPgEAQQgDAIgDALQABACABACQABAGABAEQAHALABARQABAQAAAQQgBAJgFAGQgHAOgMAHQgNAIgNAGQgPAIgHALQgFAIgHAHQgE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APQgBAMgDgDAFNhFQgCACgBABQgEADgEADQgMALgLAMQgLANgNAIQgOAJgOAHQgNAHgOAHQgFADgFAEQgIAFgFADQgBABgBABQgBgBAAAAQgLgDgMAEQgHAHgIAFACoicQAAANABAOQABAMAEAJADyiTQgHANgBARQgCARABARQAAAQAAAQAEJiTQgHAPgBARQAAARAAAQQAAARgEAPQgEAUgGgOADOiZQgCAPgCAPQgBARgIAOAD7CQQgBABgBABQgEACgDADQgMAJgMAIQgHAFgGAAAEsBvQgDACgEACQgNAJgNAJQgIAFgIAGIAAAAQABADAAADQACAQABAQQAAARgCAPQgBAGABACAEhFJQgFgDgDgDQgNgLgIAEADEGdQAAAagIAYQgHAYgDAXQgBAEAAADADkG0QAQADAPAHQAOAHAOAJQAEADAFAFQAOALAHAPQAHAOAEAQQAFAQACAPQACAQACARQACAPAFAPQAGAOACAQQABARAEAPQADARAFAQQAEAQACAQQACAQADAQQAEAQAFAPQAEAPAFAPQABAEABAFQAFAKAAANQAAADAAADQgBAQgGAPQgGAPADARQACAJAAAJQABAIgBAIQgCAQAHAOQAHANAQAEQAPAFARgCQARAAAOgJQAOgIAGgPQAGgPAIgOQACgEACgFQABgBAAgBACoGgQgEAYgDAZQgDAZgEAZAB5HKQgFAXgEAYQgBAIgDAEABaHbQgBAWgDAWACVJuQgLAVgCAYQgCAYgIAXQgHAQgDARABrO0QABgHACgGQAEgXAGgWQAFgYAIgXQAHgWAGgWQAGgYAHgWQAIgXACgZQABgaAQgNQAVgRgBgZQgBgbgMgRQgEAEgFADQAFgUgBgVADQIeQgBAGAAAGALTFqQgDAQAAAQQgBARADAPQABADABACALuHiQgEgCgEgEQgGgFgGgCQgPgFgOgHQgPgHgNgKQgOgJgHgOQgHgRAJgPQAEgGADgEQAKgNgGgPQgEgJgFgJALpKBQgCgEgCgFAL/J6QAAAAgBgBQgDgGgCgHAMfJwQgBgCAAgBQgBgDgBgEABRJ9QABAegSAJAD6lCQACARgEAQAvPv7QAAAZAAAZQAAARAAAPAwAt2QgCACgCgBQgOgEgRACQgQABgPAEQgQADgRABQgRABgPAGQgPAHAAAPQgBASALALQALALA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");
	this.shape_36.setTransform(235.4,130.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#D2F4FF").s().p("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gFALQgFgIgGgJQgJgNgGgOIgMgdQgFgQgJgMIgRgaIgSgbIgTgbQgKgOgLgLIgWgWIgWgWIgWgWIgVgVIgYgXIgWgWIgYgXIgKgLQgLgPgMgDQgQgEgOAEQgPAFgNAKIgOAKQAJgIgCgPIgCggQgBgRABgPIAFghQADgQgEgQQgLgKgLADQAHgHgHgNIALgGQAMgIABgSIACggIABgfQAAgQgDgPQgCgQABgPIADAAQAPgFAOgGIAfgOIAdgMIAcgMQAPgHAPgEIAggJIAhgJQAQgEAQgCIAggFQAQgDAPAFIAMAGIADABIAOAFIAQAGIAdALQAQAGAOAIQAOAIAPAGQAPAFAMAIQAPAIAPAHIAdAMIAeAOIAdAPIAcARQANAHAPAGIAeAMIAdAMQAPAGAOAKQAMAIAOAIIggALQgMAEgKAGQgLAGACAQQAUAIAagJQATgGATADQAOADgMAMIgOARQgKAMgOAJQgPAKgEAPQgDAHAEAFQAGAIAOgJQANgIALgMQAQgQAMgSQAIgMALgLQAMAJAFAPIATA0QAFAOADAPQACAKAJADQAGACAEgFQAHgIACgKQACgLgCgLQgBgLgEgKQgLgWgPgUQgHgKgCgMQANAJALAMQAMALAJANQAJANAKAMQAKANAMAKQALAIADgIQAHgOgGgQQgFgPgKgMQgKgMgMgLIgZgUQgTgPAZAFIAgAHQAQAEAPAJQANAIAMAJQANALAQABQAWABgLgSQgIgOgOgIQgNgIgPgFQgPgFgPgIQgOgIgMgJIgZgVQgOgKgOgIQgPgIgQgDQgRgCgMAFIgagQQgOgJgMgLQgNgKgOgIQgOgIgOgKQgNgJgOgHQgPgHgOgJQgNgJgNgKIgagUQgNgJgPgGQgRgFgMgJQgOgJgPgFIgfgKIgfgLQgOgGgRgFIgfgHQgPgEgQgCIgTgDIgCAAIgFgBQgMgEgLgBIgHgBQAJgNAQgHQAPgGANgIIAcgSQAOgJAPgHQAQgGAOgJIAcgOIAdgNQAQgGAOgIIAcgOIAbgRIAbgQIAdgSQANgIAOgHQAPgHAQgFQAPgEAJgKQAQANAeACQALABAKgEQAHgCAFgFQAJgHALAHQAVAMATAOQALAHAMAFIAXAJQAQAGARgDQALgDgCgKQgEgNgOgIIgYgMQgSgIgUgCQgTgCgJgOIAMADQAXAIAaACQAFABAGACQAaAIAbgFQAFgBgBgEQgGgNgKgLQgHgJgMgDIgjgKQgTgHgRgEIAdgDQAQgBAQABQAQAAARgJQAIgLgSgJQgPgHgQgBIghgBQgRAAgPAEQgLACgGgGQgLgNAXgGIAfgIQARgEAMgFQALgFABgKQACgTgPADQgRAEgPAFIgfALQgPAFgQAEQgOADgIAJIgDAEIACgFQADgJADgLQAHgmgWgeIgFgFQgSgKgXAIQAIALADAOQADAMgHAGQgMAKACAOQABAQAEAPQAGASgNAIQgHAEgFAHQgLANgGAKQgIAKgQAGQgOAFgOAHQgNAHgNAJQgNAIgOAGIgcALIgfAJQgPAEgPAGIgdANQgPAGgPAHQgOAHgOAGQgPAFgNAIIgdAQQgMAIgPAGIgfANQgOAFgNAIQgOAJgMAKQgNAKgQAEQgQAFgPAHIgeANIgdAPIgBABIgFADQgJAGgMAFIgeALQgPAFgOAJIgbAQIgDABIAAgQIAAgiIAAggIgBghIgDgeIgDggIgBgiIgBghIABghQAAgQACgPIAFghIADgeIACghIAAghQAAgQgCgQQgDgPgLgLIgEgBIABAAQAGgRgIgQQAPgCAJgOQAEgHgEgGQgJgNgDgRQgDgQAAgRQABgQACgRIAEgeQABgPAEgPIADgQQgFgEgLAAIgSgBIgSgBQgJAAgIABIgSADIgTABIgQAAIgQAAIgTAAIgTgBIAAgNQgQAEgOAIIgaAPIgLAGQgNAIgNAJQgNAJgQAGQgQAGgNAJIgbATIgbARIgbAQQgPAIgPAHQgNAGgOADIgdAIQgOAEgPAHQgHADgEAGQgLACgMABIABgHIABgFIgGAEQgMAIgRAEIgeAJIggAJIgfAJIgeAJIgeALIgbAJIgeAJIgeAJIgeAJQgQADgOAIQgJAGAAALQgIAIgJACIAAgIQgLgBgQAJQgNAIgPAFIggAKQgPADgQAHQgPAFgPAEIgfAJIgeALQgPAFgQABQgPAAgPADIghAGIgNACIgFACIgCAAIgCAAQgFgCgEABIABgXIAAghIAAgiQAAgQgBgQQgCgQgEgQQgDgPgBgQQAAgPADgPQADgQgBgRQgJgGgPgHQgPgHgQgEQgQgGgOgDQgMgCgIAOQgIANgBARIgDAfQgCARAAARQABARgBARIgDAfIgBAiQAAARADAPQADANgCAOQgFgBgHACQgPAFAJAMQAEAGAGAFIACACQAAABgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgOgEgRACQgQABgPAEQgQADgRABQgQABgPAGQgPAHgBAPQgBASALALQAMALAQgIQAPgHAPgEIAfgIQAQgDARABQANABAGgFQgGAFgBAIQgBAPAJADQACADgBAFQAAAQABARIAEAgIACAfQAAARACAPQADAQABAQIAAAhIgCAhQgBARgFAPIgLAgIgMAeQgFAPAAARQAAAIAEAGQADAFAEADQACAOgHAOQgKgCgHgEQgGARgCASQgDAYADAWQAEAiAIAfQAEAVAAAUIABApQABAWgCAUQgCAmgLAkQgJAbAEAeQADAWABAYIhOABIhOABIgDAAIgEAAIgGAAIgBAAIAAAAQgeAAgegBIgIgBIgFAAIgHAAIgMAAIAAAAIgBAAQgcAAgcAEIgBAAQgnAGgmAAIgBAAIAAAAIgCAAIgDAAIgDAAIgIAAIAAAAIAAAAQgbAAgaADIgEAAIgBAAIgFABQgeAEgfABIgBAAIAAAAIgJgBIgBAAIgEAAIgEAAIAAAAIgBAAQgWAAgSAFQASgFAWAAIABAAIAAAAIAEAAIAEAAIABAAIAJABIAAAAIABAAQAfgBAegEIAFgBIABAAIAEAAQAagDAbAAIAAAAIAAAAIAIAAIADAAIADAAIACAAIAAAAIABAAQAmAAAngGIABAAQAcgEAcAAIABAAIAAAAIAMAAIAHAAIAFAAIAIABQAeABAeAAIAAAAIABAAIAGAAIAEAAIADAAIBOgBIBOgBIAAABQAAAUgBAPIgCAMIgNAAIhQgBIgOAAIgNAAIgBAAIAAAAIgWAAIgVAAIgHABIg5ABIAAAAIAAAAIgIAAIgJAAIgCAAIgCAAIAAAAIAAAAQgqAAggAQQgKAFgKADQAKgDAKgFQAggQAqAAIAAAAIAAAAIACAAIACAAIAJAAIAIAAIAAAAIAAAAIA5gBIAHgBIAVAAIAWAAIAAAAIABAAIANAAIAOAAIBQABIANAAIgCATQgDASAAASQgBALAFAHIABAFIACASIgQgBQgqADgjAAIhMAAIhEAAIgHAAIgIgBIAAAAIAAAAQghAAghAEIgkACIAkgCQAhgEAhAAIAAAAIAAAAIAIABIAHAAIBEAAIBMAAQAjAAAqgDQgEAbAIAaQAHAXAEAWQAFAggJAgQgGAagFAaQgDAZgGAYQgTgPgNgWQgPgZgIAjQgEAXABAYQgOgPgPgCIgyAvQgOAMgDgdQgDgSgHgQQgaABgLASQADgXgYgVQgHgHgEAKIgQAqQgFAPgGALIgMgYQgYASgTAYQgLAOgMgGQAHgcgNgPQgZgNgNAPQgQASgCgaQgDgfgegMQgRgGgJAMQgHAIgEAIQhBgggdBXQgzhJhcBGQhXhyAICJQgwhAgGBoQhshBBvgogA1/KRIAJAAIAJAAIBJAAIhJAAIgJAAIgJAAIAAAAIgBAAIg5AAIgJAAIAJAAIA5AAIABAAIAAAAgA/zGGIBTgCQAngBAmgEIA8gGIA5gNQAjgHAkgDQAlgDAkgBQAmgCAmAAIA9AAIg9AAQgmAAgmACQgkABglADQgkADgjAHIg5ANIg8AGQgmAEgnABIhTACIgBAAIgBAAIABAAIABAAgAP1pUQgEAIgBAIQABgIAEgIQAHgRAMgIQgMAIgHARgAO0piIAAgFQAAgJADgHQAGgQANgKQAMgKAOgEQgOAEgMAKQgNAKgGAQQgDAHAAAJIAAAFgAF9ulIABgQIgBAQgAcHMFQgBgFgKADIgSgWQgHgIgKgDIAAAAQAIgLAJgKQARgSAHgWQAHgXAFgXIAJgvIADgPQACASAGAUQAHAXACAaIAEAkQAEAZADAYIACApQgXAGgOAMQgHgMgFgPgAImK3QgFACgCgGIgKgSQgIAGgHAIQgDgcgaAHQgFABgBAEQgTgTgKAQQgDAHgDAHQgPgLgTgEQgIgWgIgOQgFgIgLAIIguAfQgKAIgMAEIgIgGQgNgLgIAEIACgSQACgYAIgYIAPguQAHgWADgXQADgZABgXIAQgLQANgIALgLIAYgWIAYgTIAWgUQAGANAIAOQAIANAMAMIAWAXIAXAWQANAMAIAMIASAZQAIAOAMALIAXAXIAWAXQAMAMAHANIAUAeIARAbIAGAKQgXgGgVAIQgIAEgDAJIgQgcQgPAVgPAYQgLgWgTALgAgGHQIAEgEIASgWQAJgMAMgLIAWgWIAYgWQAMgLAJgNIATgZQAIgLAHgOQgEASgBAQQAAARgDAPIgDAgQgCANgFAJIgFADQgOAJgPAHIgcANQgQAGgQADQgSADgLAHgAuTGyIAAAAgAwIGBIAAAAg");
	this.shape_37.setTransform(232.9,95.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("Ag6A0QgJgDABgPQABgIAGgFIAEgCQAFgCAIgBQAGAAAFgDIAZgNIgZgFQgNgDgNgJIgBAAIgGgEIgCgCQgGgFgEgGQgJgMAPgFQAGgCAGABQAFABAEADQAMAIAQAEQAPAEALAGIAZANIACAAIgCgBQAJgKATgIIAGgBIAJgCQADAEABAEQAEATgUAEIgMABIgRgKIARAKIAIADIAOAIIADADIAGAGQgGANgNgCIgHgCIgVgJIgHgDIgbgMIgFgCIAFACIAbAMIAHADIgaARQgMAJgPAEQgPAFgPABIgDAAIgFgBgABAgcIAAgCIAAgDIAAADIAAACg");
	this.shape_38.setTransform(139.4,43.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#990000").s().p("AAHAYQgIgNgMgLIgKgIQAGAAAGgFIAWgRIAHgFIADAEIADAfQABAQgCAQIgEAEQgHgEgFgIg");
	this.shape_39.setTransform(258.5,148.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF0000").s().p("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bgTQAMgJAQgGQAQgHANgJQANgJAOgIIALgFIAZgQQAPgIAPgDIAAANIATABIATAAIAQAAIARgBIASgBIATgCQAIgCAIABIATABIASAAQAKABAGAEIgDAQQgEAPgCAPIgDAeQgDAQAAAQQgBASADAQQADAQAKAOQAEAGgEAHQgJAOgPACIgCAAQgRADgQgBQgQgCgQACQgQACgPgBQgRgBgQABIgiADIgLAAQgGAAgFgDQgHgDAFgIQAJgNABgQQAAgRAFgPIAJgeQAFgQACgQIAAgBQgLAGgNAJQgMAJgPAEIgcAKQgPAGgNAIQgPAIgJANQgJAMgOAJIgbASIgdARQgNAIgPAFIggAJQgQAEgPAGQgKAEgHAAQgHAAgEgDgAEewvQAOgEANgJQgNAJgOAEgAE4xIQgNADgLADQALgDANgDQASgEAIgLQgIALgSAEgAE+xfIggALIgfAKQgFACgDAEQADgEAFgCIAfgKIAggLQAQgGAIgNQgIANgQAGgAJ+xZQACgPAFgLQgFALgCAPgALWy0IgFAeIgFAfQgBANgCAIQACgIABgNIAFgfIAFgeIAFgcIgFAcgAKcxyIgCAQIACgQQABgRAGgQQgGAQgBARgAKzybQgDAQAAAQQAAAJgCAFQACgFAAgJQAAgQADgQQADgOAGgLQgGALgDAOgAJJzYIgEAfIAEgfQABgNAAgOIAAgFIAAgIIAAAIIAAAFQAAAOgBANg");
	this.shape_40.setTransform(194.8,130.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("Ag0A0IAAghQAAgRAHgKQAHgNAFgNQAFgMAOgGQAIgDAHgBQARgBAPAGQAKAFAKgBQgHALgLAMQgKAMgMAKQgMALgHAMQgJANgKALQgKALgOABQgDAAAAgFg");
	this.shape_41.setTransform(246.3,75.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFF00").s().p("AiUBVQgBgJAFgHQALgPgOgCQgfgCgcgEQACgFAIgDQAfgKAegDQgRgOgQgTQAaABAVAHIgLglQATADANAOQgBgDAAgGQABgMADgJQADgIAKgDIAggMIA2gTQASgGASgCQgDAJgJAFQgTAMgOAOQAMAAAMgEQAQgFARgDIAwgJQASgDAUACIgZAHQgSAEgQAIIAGACIAfAIQAQAFAOAHQAPAHANAKQAOAJAKALIALAIQgGgDgIgBIgggEIgLgBIgUgEQgPgDgRgBQgQAAgPgCIgMgBQAQAIAOAFIAAACQgKABgLgCQgMgCgLABQgRABgQACQgNACAPAHQglAAgsACQgNABgBAKQAQAMAWADQgUABgKAJQAQANAHAQIAGAKIgJgCQgIgCgFAEQgKABgIADIgWAJIAAgdIgmAfIAAgQg");
	this.shape_42.setTransform(233.9,53.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#996633").s().p("AixAyIABADIAAAAgACxgzIgBgBIACABIgBAAg");
	this.shape_43.setTransform(198.7,32.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#CC9900").s().p("EgkYAD+IAAnsIAFAAQBcAoCUAEQC5AFC5gEQCWgDCXgRIBFgJIACAAIAugDIAwgBIAvAAIAjgBIAIAAQAbgCASgRQASgDAVACIACAKQAFAYABAaIAAAGIACgFIAGgOQALAjATgLIANgIQAEgEAKADQAKAEAIAGQAJAGAHgKQAJgBAGABQgCgVACgZIABgHIABgGQApgHAogBIBTAAQApgBApgFQAngEAmAMQAnANAkAUQApAXAmgQIBJghQAPgGAPABQAsABAoANQAlALAogBQAogCAmgIQApgKAiAEIgGAUIgOAuIgOAtQgHAWgFAXQgFAWgHAWQgHAWgKAUQgJAXgQATIgaAeQgEAIAAAHIABAIQAYgTAggJQArgMAUglQADADABAEQACAegEAkQAYgNAZgCQAggDAPgaQgCASAGAPIAMgMIACgDIAPgDIAEgMQAHgFAIgCQgIACgHAFQAEgPABgTQABgYADgXQADgYAGgWQAFgYAIgWIAPgtQAHgWAEgZIAFgjQAiACAhADIBHAIQApADApgBQAkgBAggDIAAAQQgBAQAHAOQAGANAQAEQAQAFAQgCQARgBAOgIQAOgIAHgPQAFgPAIgOIAFgJIAAgCQALgMAYAGIBLAVQAlAKArgGIBSgMQAmgGAngDQApgDAqAAIBLAAIBSAAIBOABQAmABAmgEQAqgFArAAQApAAApAEQAgADAgAAQAoAAAogEQAdgDAeABQAnACAngCQArgBAqAGQAiAFAiAGQAgAGAhgCQDEgnCuAmIAAHjgAuvioQAFAAAEgDQgGgGgLgCQALACAGAGQgEADgFAAIgBAAIAAAAIgBAAIAAAAIgCAAIACAAIAAAAIABAAIAAAAIABAAgAwrisQABgEABgFQgBAFgBAEg");
	this.shape_44.setTransform(232.9,249.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#339900").s().p("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ZAQATgGIAGAGIAGAIQATAcAGAoIAOgCQAQgCAKAMQAFgMAOgRQAdgGAbAYIAFgKQALgbAZADQAIABADAEQALAPADASIALgKQANgKAOANQATASANAXQALgQAZAMQANAHADAOQAEgEAHAAQAIAAAAAKIAJgFQAHgGAMgFIAAARQAAAHAEAFQAKAKAVgIQAOgEAMAIQAMAIABAOQAAAGAFABQAMACALgQQAEgFAGACQANAEACAWQAQgUATgKQAggPAUAWQAEAFADAAQAGgBAKgGQAFgDADgFIAAAAQAHAHANAGIAAABQAKACAHAIIASAWQAKgDABAFQAFAQAHAMQAOgNAXgFQACgCAGADQALAEAKAHQANgFAOgEQACAbAXgIQAOgFAKgKIAYgaQAUgVAXARQAHAFADgEQAOgWARAHQAOAGAEAOQAHAYACAYQBKhiAuBjQgBgZAbg/QA7AeAkAaIAAIJQiugmjEAnQghADgggHQgigGgigFQgqgGgrACQgnABgngBQgegCgdADQgoAFgoAAQggAAgggEQgpgEgpABQgrAAgqAEQgmAEgmgBIhOAAIhSAAIhLAAQgqAAgpADQgnACgmAGIhSAMQgRADgPAAQgZAAgXgHgAc4iXIAAgIIAAAIgAbSjAIAHgMIgHAMgAUckdQAFgHAGgGIABAKIgBgKQgGAGgFAHgAEOFqIhHgHQghgEgigCIADgNIAKgtQAGgYAHgXQAHgVAGgXIANguQAIgXACgZQABgaAQgNQAVgRgBgYQgBgagLgRIgKAHQAFgUgBgVIAUgEIgBAMIABgMIACgSQABgWAHgXQAHgXADgUQAQADAPAHQAPAHANAJIAJAIQAOALAHAPQAHAOAFAQQAEAQACAPIAEAhQACANAGAPQAFAOACAQQABARAEAQIAIAgQAEAQACAQIAFAgIAJAfIAJAeIADAJQAEAKAAANIAAAGQgBAQgGAPQgFAQACARIACASQggADgkABIgPAAQgiAAghgDg");
	this.shape_45.setTransform(232.9,190.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#993333").s().p("A2BPCQgaAAgYgHIgJgDQAIgNAEgNIAAAAIBBAFQAWABAWgEIACAdQgJAAgJABQgVAFgWAAIgDgBgAkULrQgZAAgXgIQgSgHgPgQQABgSAKgNIAdAMQATAIAbgCQAagBAYgDIAcgFQABAVgFATQgMAHgSACQgWAEgWAAIgFAAgAWoJKQgGgCgDABIgCgqQgCgXgEgZIgFglQgCgZgHgXQgGgUgBgTIgDAPIgKAvQgFAYgGAXQgHAWgSASQgJAKgIALQgMgGgHgHIABgDIAAAAQAJgTALgVQALgUAFgXIALgtIAJgvQADgTAAgVIAAgJIAAgKIABgUIgBAUIAAAKIgDADQgHgPgLgRQgMgTgOgRQgOgRgNgUIgbgnIgagnQgNgVgRgPIgjghQgOgOgMgRQgLgSgSgKQgPgLgMgGQADgHAEgGIAGgIIAMAJQASALAOAOQAUAQANAQIAeAhIAfAiQAMANAJAMIAAABIAHAKIAYAkQAKARAQAUQANARAMAVQAMATAJARIABgTQADgYAAgZQgBgZgEgYIgMgvIAJgCQAPgEAQABQAGATADAWIADAxIAAAzQgBAZgCAYIgFAjIgBAGIgBALIAAAAIgFAbIAFgbQAKAVAGAVIANAvQAIAXADAYIAGAvIAEAWQADAZABAYQgKgHgLgFgA1pFZQgegKgbgDIgBgSIAEAAQAJAIASAAQAcACAVgGIAbgGQALAPgCAMQgQAEgRACIgDAAIgRABIgFgBgAVpEtIAAAAgAishCQgQAAgPgDIgSgDIADgXQAFAEAIACQAQADARgBIAggCIAfgCQAQAAAPgEQAJgCAIgDQAHANgIAHQgEABgFACIgHADIgeAFIgeADIgYABIgKgBgA2Kj9QAIgPgCgNQAHAEALAAQARABAPgCIAegDQAIgBAHgCQABAQgKAIIgRAEQgZAEgZABIgCAAQgNAAgKgCgAugsMQgIgOgEgQQgCgLgBgMQAJgCAHgIIACAKQADAQAFAPQADAIAHAGIABABIgUAJgAo7t0IgBgBQgNgIgBgSQgBgQABgRIACgOQALgBAMgDQgEAHAAAJQABARAJAOQAFAJAIAFQgJALgTAHIgBgBgAjmt5QgEgVAJgNIALAAIAigDQARgBAQABQAQABAQgCQAPgCAQACQAQABASgDIABAAQAIAPgHARIAAABIgIgCQgUgCgaACIg/AGQgZADgYAAIgQAAg");
	this.shape_46.setTransform(273.8,115.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#336600").s().p("ADxCIQgSgRgLgVQgKgSgUgGIgCgBQgFgBgEgFIAHAJQALAPAFARQgTgXgagDIgHgBQgQgBgPAEIgJADIg2APQAIgRARgFQgZgHgZAQIgEgDQASgVATgZQgbgDgbADQAGgbAcgJQgjgEgjgDQgPgCARgQQAZgaAkABIAJAAIgJAAQgbgDgYgNQAegOAjADQAQABAOAEQgRgHABgTQAkAKAaAWQAGAGAFgBQAEAAAEgEQAlgkA3ADQgZARgbAVQgEACgDAIQArgCAzAPIAAAEQgfABgbADQAnATAaAfQAJALgBAQQgVgZghgEIgJgCQAQAqAZAoQAKASAFATQAFAVgMALQgHgTgSgRgABQhBIgHgDIAHADgAjPgEIADgcIgoAlQgIAIgJAGQAKgUAKgeQAEgOAIgKQgYANgagBQASgWAVgMQALgGALgFQgVgCgEgPIAfALQgQgfgCgiQAAgGAIADQAZAJAHAXQADALAAAMQAHgiAYgTIAPgLIgIAzQANgKAfgDQAYgDAZACQAcADghAUQgaAOgYANQgRAIgRALIgGAIQgEAFgDAHQgDAKgCAKQgEAZAFAWIAEAgQgMgUgHgdQgDgOgHgJQAEAbgEAiQgBAJgCAHQgVgbAEgkg");
	this.shape_47.setTransform(400.8,117.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFCC99").s().p("AhWQEQgPgEgHgOQgHgNACgQIAAgQIgCgSQgDgRAGgQQAGgPAAgPIABgHQAAgNgFgKIgCgIIgJgfIgJgfIgGggQgBgQgFgQIgIggQgDgQgCgRQgBgQgGgOQgGgPgCgPIgEggQgBgQgFgQQgFgPgHgPQgHgPgNgLIgKgIQgNgJgPgHQgOgHgRgCQALgZADgVQAEgYAHgWQAFgNACgPQAJgEAMAKIAIAHQAIAFAKAEIAcALQAOAGAKAMQAKAMAHAOQAHANACAPIAGAgIAGAdQADAQAEAPQAFAOACAQQACAPAFAOIAJAeIAIAfIAGAfIADAgIADAhIADAgQACAPAEAQIAIAfQAEAQAOAFQAQAGAMgJQAMgHAEgPQAFgQgDgRIgBgDIgDgEQgGgMAEgRQAEgSAKAIQACgOAMABQAAgFACgEQAGgPAUANIACgHQAEgQATAIQADgJAEgHQAKgRARAGQAPAFAHAPQAHAPgCARQgCAQgKAIQAJAHAHALQAIANAAARQAAAQgGAQQgGAOgKAMQgJALgOAHQgNAGgOAFQgPAFgQAEQgQADgMAMQgLAKgEAQQgCAJgEAJIgBACIgFAIQgIAOgDAQQgGAPgOAIQgOAIgRABIgIAAQgNAAgMgDgAhcN9IACAIIgCgIIAAgFQAAgNALgLQgLALAAANIAAAFgAAbL3IAAgDIAAgCIAAgBIAAgEIAAgDIAAADIAAAEIAAABIAAACIAAADIAAAAIAAAAIgBgBIAAAAIAAAAIABABIAAAAIAAAAgACPL0IgFgEIAFAEgABJLyQgFgDAAgPIAAgDIABgLIgBALIAAADQAAAPAFADgAApLfQABAJADAIQgDgIgBgJIAAgCIAAACIAAAAgABiLtQgIgKABgNIAAgIIADgLIgDALIAAAIQgBANAIAKgADGKQIgFgFQgGgMgBgSQABgRAIgNQAIgNAHgOQAGgQALgNQALgNAEgPQADgOgGgGQAGAEAGACQgGgCgGgEIgHgFQgGgFgGgCQgQgGgOgHQgOgHgOgJQgOgJgGgPQgIgQAJgPIAIgLQAKgMgHgQIgIgRIgHgKIgRgbIgTgeQgHgOgNgMIgWgXIgXgXQgMgLgIgNIgRgZQgHgMgMgMIgYgWIgWgYQgMgMgHgNQgJgOgFgNIgXAUIgXATIgYAWQgMALgNAJIgQAKIgHAFIgbARIgPAMIgBAAIgCABIgHAGIgYARQgGAEgGABIgNgNQgKgMgHgNIgNgdQgGgQgBgQQgBgQABgQQAJgEAGgHQANgEAKADIACAAIABgBIANgIIALgHIAbgPIAcgPQAMgIALgNQALgNANgKIAHgHIADgCIAOgLQAOgJAPgFQAOgEAPADQANAEAKAOIALAMIAXAXIAXAVIAYAVIATAVIAVAWIAWAWIAXAWQALAMAKAOIASAaIASAcIASAaQAIALAGAQIALAeQAGAOAKANQAGAIAEAJIAFAMQAEAPALAMIAVAWIAXAXIAWAXQAMALAEAQQAFAOAJANQACADABAFIAAADQAEANABAOQACARgDAQQgCAMAAANIAjAEQARABAIAQQAHALAAAPQgBASgPAFQgRAFgOgLQgNgKgJgMIgJgLIAFANIAFASQAFARgLAMQgOAPgNgQQgGgIgEgKIgBgCIgCgHIACAHIABACQADAQgLAIQgFAEgGgEQgHgEgFgJIgBgCQgEgGgBgGQABAGAEAGIABACQgBAPgQgFIgEgDIgBgBQAEAQgSABIgBAAQgNAAgJgHgADrKGQgDgEgBgFQABAFADAEgADUGwIABAFIgBgFQgDgOAAgPIAAgEQABgQADgQQgDAQgBAQIAAAEQAAAPADAOgAEBKAIAAAAgApOGLIACgEIgBAEgArZChQgRAAgPgDQgQgDgPgGQgPgFgQgEQgRgEgMgJIgGgFQAEABACgEIADgHQAGgMAJgMIASgZIARgYIASgbIARgXIASgbIARgbQAIgNALgMQAMgMAIgNIATgaQAJgNAFgPQAFgPAJgOQAJgNAFgQIALgeQAGgPADgQQACgRAJgNQAIgNAFgNQAHgGAFgIQAHgMAOgHIAbgPQAMgHAJgNQAEgHABgJQABgQgBgQQgBgRgHgLIgEgJIgCgFIAHgTIAKgeQAFgQAKgLIAVgYIgVAYQgKALgFAQIgKAeIgHATQgFgKgIgGQgNgKgJgLIgSgXQAJgBAHgGQAMgKAHgLQAEgGAAgDIgBgCIABACQAAADgEAGQgHALgMAKQgHAGgJABQgGACgHgBIgSgFQgOgEgLgIQgLgIgEgRQgFgOgBgRQgCgQAHgJIACgBIAWgJQAIgDAKgBQAFgEAIABIAJADIgGgKQgHgQgQgNQAKgJAUgBQgWgDgQgMQABgKANgBQAsgCAnAAQgRgIAPgCQAQgDARgBQAMgBALACQALABAKAAIAEAAIAPALQALAIAIAMQAIANAEAMQACAHAHgGIAMgIIAOgGQAPgGAOAAQAJgBAJAFQAPAIAAARQAAARgNAHQgOAHgPAEQgQADgJAGIAMAXQAHAOAJAOQAIAMAEAQQAEAPgBARQgBAQgFAPQgEAOgIAMQgHAMgKAJQgKAKADALIALgDIAfgIQAQgFARAAQASgBAHgHQAMgBAJgEIAegLIAcgLIALgFQAIgKAAgSIAAgPIAAgBIADgCIAbgQQAOgIAPgFIAfgMQALgEAKgGIAEgDIACgBIAdgPIAbgOQAPgHARgEQAQgEAMgLQAMgKAPgIQANgIAOgGIAegMQAPgGAMgIIAdgRQAOgHAOgGQAPgFANgIQAPgHAPgGIAdgMQAPgGAQgEIAfgJIAbgLQAOgGANgJQANgJANgGQAOgHAOgGQARgGAHgKQAGgKALgMQAGgIAHgDQAMgIgFgSQgEgPgCgQQgBgPALgKQAHgGgCgLQgDgPgIgLQAWgHASAKIAFAEQAXAfgIAlQgCALgEAJIgCAGIADgFQAIgJAOgDQARgDAOgFIAfgLQAQgGAQgDQAQgDgCASQgBALgMAFQgMAFgQAEIggAIQgXAFAMANQAGAHAKgDQAQgEAQAAIAhACQAQABAPAHQATAJgJALQgRAIgQAAQgQAAgQABIgdACQASAFATAHIAjAKQALADAIAIQAJAMAGANQACAEgGABQgbAEgagIQgFgCgGAAQgZgCgYgJIgMgDQAJAPAUACQATACASAHIAZAMQAOAIADAOQACAJgLADQgQADgQgGIgYgJQgMgFgKgGQgUgOgVgNQgKgGgJAHQgGAEgHADQgKADgLgBQgdgCgRgMQgJAKgPAEQgQAEgOAIQgOAHgNAIIgdARIgbARIgcAQIgcAPQgOAHgPAHIgeANIgcAOQgOAIgPAHQgQAGgNAKIgdASQgNAIgOAGQgRAGgJAOIAIABQALABAMADIAEABIADABIASADQARACAPADIAfAIQARAEAOAGIAeAMIAfAJQAQAGANAJQANAIAQAGQAPAFAOAJIAaAUQAMALAOAJQANAJAPAHQAPAHAMAJQAOAJAPAJQAOAHAMALQAMAKAOAJIAaASQANgFARADQAPACAPAIQAPAJANAKIAZAUQAMAKAPAIQAPAHAOAFQAPAFAOAIQANAIAIAOQALATgWgCQgPgBgOgKQgMgKgNgHQgOgKgRgDIgfgIQgagFAUAQIAYAUQANAKAJAMQAKANAGAPQAFAPgGAPQgEAIgKgIQgNgLgKgMQgKgMgJgOQgJgNgLgLQgMgMgNgJQACAMAHAKQAPAUALAXQAEAJACAMQACAKgDALQgCALgHAIQgDAEgHgCQgJgCgCgKQgCgQgGgOIgSg0QgFgPgNgIQgKAKgJAMQgMATgPAQQgLALgNAJQgOAJgGgJQgEgFACgGQAFgQAOgKQAOgJAKgMIAPgQQALgNgOgCQgTgEgSAHQgaAIgVgIQgCgQALgGQALgFALgEIAggMQgNgHgNgJQgOgJgOgGIgegMIgegMQgPgHgNgIIgbgSIgdgPIgfgOIgdgMQgPgGgPgJQgMgHgPgGQgPgFgOgIQgOgJgPgFIgegLIgQgGIgOgFIgCgBIgNgGQgPgGgQADIgfAFQgRACgQAEIggAJIgeAKQgQAEgPAHIgcAMIgdAMIgeANQgOAGgQAFIgCABQgOAEgNAHQgOAGgPAGIgeAKIgeAFQgQADgQAFQgRAEgNAGIgGAEIgEAEQgHAIABANQADAQAAARQAAARADAPQACAIAFAFIgCAYIgOgDQgFgCgDAHIgHAPQgGANgEAPIgHAfIgFAgQgCAQAAAQQABARAFAQQgHAOgIAMIgTAXQgKAMgMALIgYAWIgWAWQgMAMgJALIgTAXIgFAEIgFADQgFADgFAFIgGABIgGABIgNACIgRAEIggAGIghAFIgQACIgQACQgOACgOAAIgFAAgApkAXQAFAQAGAPQgGgPgFgQQgEgOgCgLQACALAEAOgApThNQADAQAFAPIAJAgIAIAbQAEARAGAPQgGgPgEgRIgIgbIgJggQgFgPgDgQQAAgGgCgDQACADAAAGgAo5hqIAKAgIAJAeQAFAQAHANQgHgNgFgQIgJgeIgKggIgEgOIAEAOgAoWhkQAEAPAGAPIALAfQADAKACAJQgCgJgDgKIgLgfQgGgPgEgPIgJgeIAJAegAlkm1IgCgFIACAFgAmOpSQgJABgIADQgOAGgFAMQgFANgHANQgHAMAAARIAAAhQAAAFACAAQAPgCAJgKQALgLAJgNQAIgNANgMQAMgKAKgMQALgMAGgLQgJABgKgFQgMgFgOAAIgGAAgABio9QgPABgQADQgQACgPAEIgfAIIgfAIIgeAKIgeALIgfAMQgPAGgQAEIgUAGIAUgGQAQgEAPgGIAfgMIAegLIAegKIAfgIIAfgIQAPgEAQgCQAQgDAPgBIAJAAIAFgBIABAAIAAAAIAIABIADAAIgDAAIgIgBIAAAAIgBAAIgFABIgJAAgAnBqaIgSAOIASgOQANgLAJgLQgJALgNALgAnCq3QgQADgOAGQgPAHgJANQAJgNAPgHQAOgGAQgDIABAAIABAAIAAAAIAHgBIABAAIABAAQAHAAAFADIABABIAAAAIgBAEIACgCIAAgBIgBgBIAAAAIgBgBQgFgDgHAAIgBAAIgBAAIgHABIAAAAIgBAAIgBAAgAmpqzQAEgGAAgHQAAgGgDgGQADAGAAAGQAAAHgEAGg");
	this.shape_48.setTransform(286.5,129.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(1,1,1).p("AGfBtIs9AAIAAjZIM9AAg");
	this.shape_49.setTransform(322.4,299.4,1.131,1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFF00").s().p("AmeBtIAAjZIM9AAIAADZg");
	this.shape_50.setTransform(322.4,299.4,1.131,1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(4,1,1).p("EgkYAHWIAA8zMBIxAAAIAAbLIAAILIAAHlMhIxAAAIAAnug");
	this.shape_51.setTransform(232.9,137.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(0.3,1,1).p("AKPpDQAJgNAQgHQAPgGANgIQAOgIAOgKQAOgJAQgHQAPgGAOgJQAOgHAOgHQAOgHAPgGQAQgGAOgIQAOgHAOgHQAOgIANgJQAOgIAOgIQAOgJAOgJQANgIAOgHQAPgHAQgFQAPgEAJgKQAQANAeACQALABAKgEQAHgCAGgFQAIgHALAHQAVAMATAOQALAHAMAFQAMAEAMAFQAPAGARgDQALgDgCgKQgEgNgOgIQgLgHgNgFQgSgIgUgCQgTgCgJgOQAGAAAGADQAXAIAaACQAFABAGACQAaAIAbgFQAFgBgBgEQgGgNgJgLQgIgJgLgDQgSgEgRgGQgUgHgRgEQAOgBAPgCQAQgBAQABQAQAAARgJQAIgLgSgJQgPgHgQgBQgQgBgRAAQgRAAgPAEQgLACgFgGQgMgNAXgGQAQgEAPgEQARgEAMgFQALgFABgKQACgTgPADQgRAEgPAFQgPAGgQAFQgPAFgQAEQgOADgIAJQgCACgBACQAAgCACgDQADgJADgLQAHgmgWgeQgCgDgDgCQgSgKgXAIQAIALAEAOQACAMgHAGQgMAKACAOQABAQAFAPQAFASgNAIQgHAEgFAHQgLANgGAKQgIAKgQAGQgOAFgOAHQgNAHgNAJQgNAIgOAGQgOAGgOAFQgPAFgQAEQgPAEgPAGQgOAHgPAGQgPAGgPAHQgOAHgOAGQgPAFgNAIQgPAHgOAJQgMAIgPAGQgQAHgPAGQgOAFgNAIQgOAJgMAKQgNAKgQAEQgQAFgPAHQgPAGgOAHQgQAHgOAIQAAABgBAAQgCACgCABQgKAGgLAFQgQAGgPAFQgPAFgOAJQgOAJgNAHQgBABgCAAQAAgIAAgIQAAgRABgRQAAgQAAgQQAAgQgCgRQgBgPgCgPQgCgQgBgQQAAgRgBgRQAAgQgBgRQABgQAAgRQAAgQACgPQADgQACgRQACgPABgPQABgQABgRQAAgRAAgQQAAgQgCgQQgDgPgLgLQgCgBgBAAAQEvGQgNAIgHARQgEAIgBAIAPgv4QgPAEgMAKQgNAKgGAQQgEAKABALAFrmXQABAAACAAQAPgFAOgGQAQgHAPgHQAOgGAPgGQAOgFAOgHQAPgHAQgEQAPgFAQgEQARgFAQgEQAQgEAQgCQAQgCAQgDQAQgDAPAFQAHADAGADQABABABAAQAGADAIACQAHADAJADQAOAGAQAFQAPAGAOAIQAOAIAPAGQAPAFAMAIQAPAIAPAHQAOAGAPAGQAPAGAPAIQAOAHAPAIQAOAIAOAJQANAJAPAGQAOAGAQAGQAPAGAOAGQAPAGAOAKQAMAIAOAIQgQAGgQAFQgMAEgKAGQgLAGACAQQAUAIAagJQATgGATADQAOADgMAMQgIAIgGAJQgKAMgOAJQgPAKgEAPQgDAHAEAFQAGAIAOgJQANgIALgMQAQgQAMgSQAIgMALgLQAMAJAFAPQAJAZAKAbQAFAOADAPQACAKAJADQAGACAEgFQAHgIACgKQACgLgBgLQgCgLgEgKQgLgWgPgUQgHgKgCgMQANAJALAMQAMALAJANQAJANAKAMQAKANAMAKQALAIAEgIQAGgOgGgQQgFgPgKgMQgKgMgMgLQgNgKgMgKQgTgPAZAFQAQADAQAEQAQAEAPAJQANAIAMAJQANALAQABQAWABgLgSQgIgOgOgIQgNgIgPgFQgPgFgOgIQgPgIgMgJQgNgLgMgKQgOgKgOgIQgPgIgQgDQgRgCgMAFQgNgKgNgIQgOgJgMgLQgNgKgOgIQgOgIgOgKQgNgJgOgHQgPgHgOgJQgNgJgNgKQgNgLgNgJQgNgJgPgGQgRgFgMgJQgOgJgPgFQgQgFgPgFQgQgFgPgGQgOgGgQgFQgQgEgQgDQgPgEgQgCQgJgBgKgCQgBAAgBAAQgCgBgCAAQgNgEgLgBQgEAAgDgBQgNAAgNABQgQABgPACQgQACgQAEQgPAFgPAEQgQADgRAFQgQAEgPAGQgPAFgPAGQgPAGgPAFQgQAGgQAEQgKADgJADQAHgKABgRQAAgIAAgIQAAAAAAgBAX3jAQARgLARgJQAYgMAagPQAhgUgcgCQgZgCgYACQgfADgNAKQADgZAFgZQgHAFgIAGQgYATgHAhQAAgLgDgLQgHgXgZgKQgIgDAAAHQACAiAQAfQgRgHgOgEQAEAPAVACQgLAFgLAGQgVAMgSAVQAaABAYgNQgIAKgEAOQgKAfgKAWQAJgGAIgIQAVgUATgTQgCAOgBAOQgEAmAVAbQACgHABgJQAEgjgEgdQAHAKADAQQAGAdANAUQgCgRgCgPQgFgYAEgZQACgLADgJQANAGAOALQASAMAMASQAMARAOAOQAQAQATARQAQAPANAVQANAUAOASQAPAUAMASQAMAUAPASQANAQANATQAKARAIAPQABADACADQgBgEAAgEQAAgQABgPQgJgRgLgTQgMgVgOgRQgQgUgKgQQgLgRgMgSQgEgFgDgFQAAAAAAAAQgKgNgLgNQgPgRgQgRQgQgRgOgQQgOgQgTgSQgPgOgRgLQgJgFgEgDQgDADgDAEQgEAGgDAHAaniuQgmAAgZAaQgRAQAPACQAlADAjAGQgcAJgGAaQAbgCAbACQgTAZgSAVQgCADgCADQAEgBAEgCQAZgPAZAHQgRAEgIASQAagHAcgJQAHAYAFAVQAFAYAAAZQAAAZgCAYQgCAKAAAJAaniuQAEAAAFAAAbTjDQgOgEgQgCQgjgCggAOQAaANAbACAUiEqQgDgSgLgOQgDgFgIgBQgZgCgLAbQgCAGgDAEQgbgZgdAHQgOAQgFAMQgKgLgQACQgHABgHABQgGgpgTgbQgCgEgEgEQgDgEgDgCQgTAGgZgRQgIgFgHgCQgMATAFAXQADAPAIAJQgbgMgYgBQgOAUgEARQgRgRgMABQgDABgEADQgLgVgNgRQgLgOgLAMQgKANgVgJQgKgFgGAFQgIAHABANQACAcgggNQgLAUgGgGQgNgLgQADQgNACgFALQACAGACAGQAFAQALALQAKALALALQAMALALAMQALAMALALQALAMAFAPQAEAPAKANQACADAAAEQABACAAABQADAOACANQABARgCARQgDAMABAMQATADAQABQAQACAJAPQAHAMAAAOQgBATgQAEQgRAFgNgKQgOgKgIgMQgEgGgGgFQADAGADAHQADAJACAJQAEAQgLANQgOAPgMgQQgGgIgEgKQADAQgLAHQgFAFgGgEQgHgFgGgJAa4GDQgKAHgGABQgDAAgEgFQgUgXgfAQQgUAKgQAUQgCgWgNgEQgGgCgEAFQgLAQgMgCQgFgBAAgGQgBgPgMgHQgMgJgOAFQgVAHgJgJQgFgFAAgHQgBgIABgJQgMAFgHAFQgFADgEADQAAgKgIAAQgHAAgEAEQgDgPgNgGQgZgMgLAQQgNgXgTgTQgOgNgNALQgGAEgFAFQABAGABAFAUYE4QAEgHAGgHAbTjDQgRgIABgSQAkAKAaAWQAGAFAFAAQAEgBAEgDQAlgkA3ADQgZARgbAUQgEADgDAHQArgCAzAQQAFABAGADQgGAAgFAAQgfAAgbADQAnAUAaAgQAJAMgBAPQgWgZgggDQgFgBgEgCQAQArAZAnQAKASAFARQAFAWgMALQgHgTgSgRQgSgQgLgUQgKgSgUgGQgBgBgBAAQgFgCgEgEQAEAEADAFQAKAOAGASQgTgYgagDQgEAAgDAAQAHATACAWQACAXABAZQAAAZAAAZQgBAagCAXQgCASgCASQgBACAAADQgBAEgBAHIAAAAQAAgCABgCQAAgEABgDAbTjDQADABAEACAbwgnQAFgBAEgBQAPgEAQABEAkZAG6QgCgCgDgCQgkgag7geQgbA/ABAZQguhjhKBiQgCgYgHgYQgEgOgOgGQgRgIgOAXQgDAEgHgFQgXgRgTAVQgMANgNANQgKAJgOAGQgXAIgBgcQgPAEgNAGQAAgYgEgZQgBgKgCgMQgEgXgDgYQgDgYgHgXQgHgXgGgXQgGgWgLgVQgCAOgDAOQgBAHgCAIQgEAVgFAaQgFAXgHAXQgHAWgRASQgJAKgIALQgEAGgDAGAbAF8QABgBABgCIAAAAQAIgTAMgVQAKgUAGgXQAFgVAFgYQAFgWAEgZQADgTABgVAczG1QgXAGgOAMQgHgMgFgPQgBgFgKADQgJgMgJgKQgHgIgKgDIAAAAQgNgGgGgHIgBAAQAAAAAAgBQgHgJgBARQAFgDADgEAcVDgQACASAGAUQAHAXACAaQABASAEASQADAZADAYQABAVABAUQAAAFAAAEAdQHCQgKgHgLgFQgGgCgCABAIhO5QALgMAYAGQAlAKAmALQAlALArgHQApgFApgHQAngGAmgDQApgDAqAAQAlAAAmAAQApAAApAAQAnAAAnABQAmABAmgEQAqgFArAAQApAAApAEQAgADAgAAQAoAAAogEQAdgDAfABQAmACAngCQArgBAqAGQAiAFAiAGQAgAGAhgCQDEgnCuAmQADAAACABAF4z+QgBAIgCAIQgEAPgBAPQgCAPgCAPQgCARAAAQQgBARADAQQADARAJANQAEAGgEAHQgJAOgPACQgBABAAAAQgRACgRgBQgQgBgPABQgQACgQgBQgQgBgRABQgQABgRACQgHABgFgBQgGAAgEgCQgHgEAFgIQAIgNABgQQABgQAEgQQAFgPAFgPQAFgPABgQQAAgBABgBQgMAGgNAKQgMAIgOAFQgPAEgNAGQgPAGgOAIQgOAIgKANQgIAMgOAJQgOAIgOAJQgNAJgNAJQgOAHgPAFQgPAFgQAEQgQAEgPAGQgSAHgLgFQgDgBgCgCADI0AQAJABAKAAQAJAAAKAAQAIAAAIAAQAIAAAIAAQAJgBAKAAQAJgBAJgCQAIgBAJAAQAJABAJAAQAJAAAJABQALAAAFAEQABgIAAgIAE6yzQgHALgCANQgDARAAAQQAAAIgDAFAFYzQQgCAOgCAOQgEAPgCAQQgCAPgCAPQgCAOgCAHADDy5QABgPACgQQACgPAAgRQAAgEAAgEAiexVQAEgGAHgDQAPgHAOgEQAOgDAPgFQAOgDANgGQAPgHAPgIQAPgJANgHQAMgIAOgJQAOgJANgKQANgJAQgGQAQgGANgJQANgJAOgIQAFgDAFgDQANgIANgHQAOgIAQgEQAAAHAAAGAEDxzQgFAMgCAPAEhyTQgHAQgBARQgBAMgBAEAD0vjQgFAPgFARQgFAPgDAPAEYvkQgGAOgBAQQgCARgCAQQgCARgCAQADFveQgGAPAAAQQAAALgDAJACrwNQgkgBAKAmQAHAcgBAjQgBAiADAgQAEAjgIAdQgPgIgPgEQgQgEgPgFQgDgBgDgBQAQgIARgEQAOgDAMgEQgUgCgSADQgZAFgXAEQgSAEgPAEQgNAEgLABQANgPAUgLQAJgGADgIQgTABgSAHQgZAJgcAKQgRAFgPAGQgKADgDAIQgEAKAAAMQAAAFABAEQgNgPgUgCQAEAQAHAVQgUgIgagBQAQAVARAPQgfADgfAKQgHACgDAFQAdAEAeADQAOABgKAQQgFAGABAJQAAAIAAAIQAUgPASgPQAAAKAAASQAKgEALgFQAJgDAKgBQAEgEAJACQAEABAFACQgDgFgDgGQgHgPgQgNQAKgJATgCQgVgDgQgMQABgKANgBQAsgCAlAAQgPgHANgDQAQgDARAAQALgBALABQALACALAAQACAAACAAQgCgBgCgBQAJgCAIACQgHABgGABQAGAEAIAGQALAIAIAMQAJAOADALQACAHAIgGQAFgEAHgEQAGgDAIgDQAOgFAPgBQAIAAAKAFQAOAIAAARQAAARgMAGQgPAHgOAEQgQAEgJAFQAGALAGAMQAHAOAJAOQAHAMAFARQAEAPgBARQgBAPgFAPQgFAPgHAMQgIAMgKAJQgKAKADAKQAGgBAGgBQAOgEARgFQAPgEARAAQASgBAIgHQALgBAKgEQANgGARgFQANgFAPgHQAFgCAGgDAE7vqQgGAOgDAOQgDALgCALQgCAMgDAMQgDAPAAAPQAAAQACAQQABADgBAEACrwNQAgABAigEQAegEAhgCQAZgCAUADQAEAAAFABIAAAAQAGgRgIgQAFOvnQABAOADANQAEAMACANQACAQADARQADAPAAAQQAAARgFAPQgFAPgFAFACwwvQgJANAEAVACVsnQAPAHANAJQANAKALAKQAGAGAFAEQgGgDgJgCQgPgDgQgBQgGgBgFgBQgKgBgKgCQgQgDgQgBQgQgBgQgCQgFAAgGAAQAPAHAPAGADUr5QAHAEAEAGABoq5QgBAAAAAAQgJgGgPADQgQADgOAGQgQAHgIAMABoq5QAAABgBAAQgBABAAACQgJALgNAKQgKAIgJAHABprSQAFAOgGALAChrPQgIgdACgYAC2pPQgHALgLANQgKALgLALQgNAMgJANQgIANgLAKQgJALgPABQgDAAABgFQAAgQAAgQQgBgRAHgNQAHgMAFgNQAFgNAPgFQAHgEAKAAQARgCAOAGQALAFAJgBgACqnAQABADACACAFrmXQgNAFgNAGQgOAHgPAGQgQAFgPAFQgNACgRADQgPACgQAFQgRAEgOAGQgDACgDADQgCABgBACQgHAJABANQACAQABAQQAAARADAQQACAIAFAFQAFAEAIACQAQADARgBQARgBAQgBQAPgBAQgBQAPAAAPgDQAJgCAIgEQAHANgHAHAFUj4QAGgDAGgDQALgIABgSQABgQABgQQABgRAAgQQAAgQgDgPQgCgQABgPAFElbQgHALgHANQgIAPgEAPAFXlaQgCARgEAPQgDAOgDAOAgvxXQgIALgRAEQgOADgKAEAhIw8QgMAKgOADAgqxxQgIAMgQAGQgQAGgQAFQgRAFgOAFQgFACgDAEAi1xSQABgEAAgDQABgDABgCQgDABgDADQgNAIgRAEQgPAEgPAFQgPAEgRAFQgQAEgPAFQgPAEgPAFQgPAGgPAFQgOAFgNAEQgPAFgPAEQgPAFgPAEQgPAFgPAEQgQADgOAIQgJAGAAALQgIAIgJACQAAgEAAgEQgLgBgQAJQgNAIgPAFQgPAFgRAFQgPADgQAHQgPAFgPAEQgQAEgPAFQgPAFgPAGQgPAFgQABQgPAAgPADQgRACgQAEQgGACgHAAQgCABgDABQgBAAgBAAQgBAAgBAAQgFABgEABQAAgCAAgBQAAgKABgNQABgQAAgRQAAgRgBgRQAAgQgCgQQgBgQgEgQQgDgPgBgQQAAgPADgPQADgQgBgRQgJgHgPgGQgPgHgQgEQgQgGgOgDQgMgCgJAOQgHANgBARQgCAPgBAQQgCARAAARQABARgBARQgBAQgCAPQgBARAAARQAAARADAPQADANgBAOQAEABAEADQAMAIARAEQAOAEANAGQAMAGANAHQABAAABAAQAJAFAJAFQAEACAEADQAHADAGAFQACACACABQADADADADQABgDAAgBQAAgBAAAAQAAgEgHADAi1xSQAMgBALgCQgEAGABAJQAAARAJAOQAFAJAJAFQgJAMgUAGQAAAAAAAAQgBgBgBAAQgDAAgFAAAinwHQgBgBgBgBQgNgHAAgSQgCgRACgRQAAgHABgHAn3unQAMAJAQgDQAPgEANgJQAMgJAPgHQAPgGAQgEQAPgDANgGQAQgHAPgFQAQgFAQgDQAQgDARgEQAPgDAPgFQAPgFARgCQAPgCAQgFQAHgCgCgDAjUwhQgOAHgPAFQgNAEgNAEQgLADgJAEAiTuXQAUAjgKAsQgLAsgkABQgmACgcgOQghgSgegSQgRgLgXgBAoLvfQgBAFACAFQADAQAFAPQADAIAHAGQAAABABAAQgJAFgLAFIAAAAQgBgCgBgBQgIgOgEgQQgCgLgBgMApMuyQgQADgOAGQgQAHgPAHQgPAHgOACAtYtTQAJgCAKgBQAGgCAHgBQAJgCAKgCQATgEASgEQAOgEAOgCQAVgEAUAAQAXAAAXgCQAGgBAGgCQATgFATgHQAUgHAVgCQAYgCAWgJQgDgEgEgFQAAAAgBAAQgDABgCAAAmqtXQAqABAkAVQAjAUAkAWQAjAVAHAiQAKAxgrAMQgmAKgqAFQgnAEgngBQgkAAgjAAQgjAAgiAAQA/AKBCAPQApAJAaAUQAaAVgMAmQgDALgRAEQhMAThSAHQgnADglAGQA6gBA3AGQA8AIA3AVQAfAMAIAeQARA/g1AyQguArg8AXAhrqYQgHAIABARQACAQAEAPQAFARALAIQALAIAOAEQAIACAJACQAHABAHgBQAIgCAIgFQAMgLAHgLQAEgJgDgCAAPn7QAFgLADgIQAFgQAFgPQAFgQAJgLQALgNAKgKAhpqaQgBABgBABQgBAAgDAAQADgBADgBgAAPn7QABACABACQACAGADAEQAGALABARQACAQgBAQQgBAJgFAGQgJAOgMAHQgLAIgNAGQgPAIgHALQgFAIgHAHQgEANgIANQgJANgCARQgEAQgFAPQgHAOgFAQQgFAPgIANQgKAOgEAPQgGAQgIAMQgKAOgJANQgJANgLAMQgMALgHAOQgIANgJANQgJAOgJANQgIANgJALQgJANgJANQgIAMgJANQgKAMgJANQgIALgGAMQgCAEgBAEQgCAEgEgCQADADADACQAMAKAQADQARAEAPAGQAPAFAPADQAQADAQAAQARABARgCQAIgBAIgBQgNAMgPAIQgOAIgNAKQgEAEgCAFAgjo3QAJAMAJAKQAIAMAMAKQAHAGAFAKAgMiIQAEAPAFAQQADAPAFAOQAFARAGAPQADAJACAKAgdAnQgHgOgEgRQgDgNgEgPQgFgPgFgQQgFgQgCgPQAAgGgCgDAgHgUQgIgOgEgQQgFgPgEgPQgGgQgEgPQgDgIgCgGAi+lEQgdAXgOAoQgOAngPAlQgQAmgUAdAh8lSQgOAngUAmQgUAmgQAmQgQAkgaAhQgIAKgEAIAiVCYQAIgBAIgCQAQgCAQgCQAQgDAQgEQAIgCAJgBQgJALgMAIQgPAJgGAPQgGAOAAANQgBASgDAPQgCAOgBAJACFguQgHAOgIALQgJANgJAKQgKANgMALQgNALgLALQgMALgKALQgMALgJAMQgKALgIALQgCACgCACQgDACgCACAhGAxQgHgPgEgRQgEgNgCgLABzBIQgDABgCACQgOAJgPAHQgOAHgOAGQgQAGgQADQgSADgLAHQgHAEgIADQgCAAgBABQAEgGAGgCQgDAEgEADAg0CHQAHgCAHAAQADgBADAAQACgBAEAAAhdCbQgNAHgMAKQgNAKgLALQgLANgGAQQgFAPABALAlIkEQgTAbgKApQgKAngNAcAk/hAQglACgkAFQgmAGgoADQglACgmAEQgVACgXAEQgoAFgqgBQgHAAgHAAAlHB0QgEAHgIAHQgLAJgHAPQgGAPgEAQQgEAPABAPQgBARgCAQQgDAQAEAQQAFAPAJAPQAIAOAIAOQAIAOANAJQAMAJANAKQANAKAMAMQALAMARAFQAPAEARAAQARAAARgBQARAAAQgFQAPgGAOgDQAPgEANgGQAMgGANgFQABABACABIAAAAQALAFAPACQAQABARAEQAMAEAPAGQAPAGATgCAmoBTQghAWgFAqQgGAqAGAqQAFAiAIAkAArHLQgIgSgeACQgYACgLASQgIAOgIALQgDADgGAAQgXgDgLARQgFgjgjARQgGADgBAEQgEANACAPQgPgfgVAPQgFAEgDAEQgCgRgVAGQgMADgIAHQARgUgjgOQgTgHgUAOQgKAHgIAGQAEgdgUgWQgOALgJALQgDglglgSQgGgDgGgEQgHAbgKAWQgDAEAAAGQgDAVAGAUQgUgPgXAHQgKACABAQQABAKACAJQgMgfgaARQgDACgBAGQgEATAGANQgMgDgDAZQgCANABANQgGgegmABQgLAAgHAFQgNAJgCAQQAAgTgKgOQgRgVgOAaQACgUgGgaQgGgYgGgUQgDgHgGAJQAFgUAEgYQAEgagRgPQgFgFgEAEQgIAGgIAIQgDAEgCADQAAgKgGgPQgMgfgiAJQgSAGgKARQgDAGgEAFQgBgVgGgVQgLgkgLAZQgGALACAQQgGgOgKgIQgGgGgIAJQgWAYANAgQABAEABADQgFgTgQgBQgJAAgIAIQgOAOgQACQgMACgLgCQAIgaADgbQADgbAEgbQAEgdABgeQAAgSACgQQABgMABgNQAAgMgJgNQADgBAEgBQAxAIAngBQAqgCApgBQApgCAngNAn/B9QgNAegGAmQgGAnAQAbAoBJjQABAFABAEAg+GDQACAAACgBQAPgFAOgGQANgGAQgFQANgGANgJQANgJAPgGQAIgDAIgDQAGgCAGgDQAOgGANgIQAOgIAPgFQAQgGANgLQAMgJAOgIQAOgIAOgGQAPgFAOgHQAOgGAJgIQgBgCABgGQACgPAAgRQgBgQgCgQQAAgDgBgDIAAAAQAIgGAIgFQANgJAOgJQADgCADgCQAAAXgDAZQgDAXgHAWQgIAXgHAXQgIAYgCAYQAAAJgCAJQgCAPgFAOQgHAWgEAXQgEAWgKAYQAQADAPAHQAPAHANAJQAEADAGAFQANALAHAPQAHAOAFAQQAEAQACAPQACAQACARQACAPAGAPQAFAOACAQQABARAEAPQADARAFAQQAEAQACAQQACAQAEAQQADAQAFAPQAFAPAEAPQACAEABAFQAEAKAAANQAAADAAADQgBAQgFAPQgGAPADARQABAJAAAJQABAIgBAIQgBAQAGAOQAHANAQAEQAQAFAQgCQARAAAOgJQAOgIAHgPQAFgPAIgOQACgEADgFQAAgBAAgBQAEgIADgKQAEgPALgLQAMgMAQgDQAPgDAQgGQAOgFANgGQAOgGAJgLQAKgMAGgPQAGgPAAgQQAAgRgJgNQgHgLgIgHABGFIQAAAQAAARQAAAQgBAQQgBAPgHAHQgBABgDAIQgIAPgGAUADRIiQgOADgPACQgYADgZABQgcACgTgIQgPgFgOgHQgGgCgFgDQgHgEgBgMQgBgaAGgXQABgEABgEABPJ5QgDAQgDAPAAuKEQgDAHABAIADMJLQgMAGgRADQgZAEgZgBQgZAAgWgIQgTgHgPgQQgEgEgDgEQgBgBgIAAAg7O8QAEgNAFgMQAJgWAJgXQAHgWADgYQAEgYAIgXQAHgXADgYQAEgYADgZQACgXACgXQABgZAIgXQAJgXAIgUAAsI4QABgSAKgNALmEmQgFgIgGgJQgJgNgGgOQgHgOgFgPQgFgQgJgMQgJgMgIgOQgJgNgJgOQgJgOgKgNQgKgOgLgLQgLgMgLgKQgKgKgMgMQgLgLgKgLQgLgMgLgJQgMgKgLgLQgLgLgMgLQgMgLgLgMQgHgFgEgGQgLgPgMgDQgQgEgOAEQgPAFgNAKQgHAFgHAFQAJgIgCgPQgBgQgBgQQgBgRACgPQABgRADgQQADgQgEgQQgLgKgLADQgFABgFADQgDABgEABQgPADgOACQgPABgPACQgRABgRAAQgRgBgPgCQgJgCgJgCQACgLABgMAFABvQAIgFAJgGQANgIAMgLQALgMAMgKQAMgKAMgJQAMgKALgKQAFANAIAOQAIANAMAMQALALALAMQAKALANALQANAMAJAMQAJANAIAMQAIAOAMALQAMALALAMQALALALAMQAMAMAHANQALARAJANQAJANAIAOQADAFAEAFQgYgGgUAIQgJAEgDAJQgHgNgJgPQgPAVgPAYQgLgWgTALQgFACgCgGQgFgJgFgJQgIAGgHAIQgDgcgaAHQgFABgBAEQgTgTgJAQQgEAHgDAHQgPgLgTgEQgIgWgIgOQgFgIgLAIQgbASgTANQgKAIgMAEQgFgDgDgDQgNgLgIAEAFZipQgFANgEAOQgDARgDAQQgCAPgCAPAE3icQgDAQgBARQgCARgCAPQgCAQgCAPQgBAMgDgDAFhhFQgCACgBABQgEADgEADQgMALgLAMQgLANgNAIQgOAJgOAHQgNAHgOAHQgFADgFAEQgHAFgGADQgBABgBABQgBgBAAAAQgLgDgMAEQgGAHgJAFQgBAPABARQAAAQAGAPQAGAPAHAOQAHAOALALQAGAHAGAGQAGAAAHgFQAMgIAMgJQADgDAEgCQABgBABgBAC0jcQgHgBgGgCQgGgBgDAHQgEAIgCAHQgHANgDAOQgEAQgDAQQgEAPgBAQQgCAQAAARQAAARAFAQAC8icQAAANACAOQAAAMAEAJAEGiTQgHANgBARQgCARABARQAAAQAAAQAEdiTQgHAPgBARQAAARAAAQQAAARgEAPQgEAUgGgOADiiZQgCAPgBAPQgCARgHAOABzBIQAKgHALgGQANgHAQgFQAGgCAFgCABzBIQAFgJACgNQABgPADgRQACgPABgPQAAgQAEgSAE1FJQAIAGAJAEQAOAFAOAGQAOAFALANQAKALAGAOQAHAOADAOQACARADAQQADANADAPQADARAFAOQAEAPACAPQACAPAGAPQAFAOAEAPQADAQAEAPQAEAQACAPQADAQABAQQABAQACARQABAQACAQQABAPAFAQQAEAQADAPQAEARAPAFQAQAFAOgIQALgHAFgPQAEgRgCgQQgBgCAAgCQgBgCgCgCQgHgMAFgQQAEgSAKAIQgBADABAEQAAAHgBgCAERDeQgCgCgCgBQgGgFgFgHQgKgOgMgKQgGgFgFgFAD4G0QgDAUgHAXQgHAXgBAWQgBAJgBAJQgKACgJACADYGdQABAagIAYQgIAYgDAXQgBAEAAADAC8GgQgEAYgDAZQgDAZgEAZACNHKQgEAXgFAYQgBAIgDAEABvHbQgCAWgDAWACqJuQgMAVgCAYQgBAYgJAXQgGAQgEARAB/O0QABgHACgGQAEgXAGgWQAGgYAHgXQAHgWAGgWQAGgYAHgWQAIgXACgZQABgaAQgNQAVgRgBgZQgBgbgLgRQgFAEgFADQAFgUAAgVADkIeQgBAGAAAGALnFqQgDAQAAAQQgBARADAPQABADABACAKlFJQAFAJADAJQAGAPgJANQgEAEgEAGQgJAPAHARQAHAOAOAJQANAKAPAHQAOAHAQAFQAGACAGAFQADAEAEACQAFAEAGABAMCHiQAFAGgDANQgDAQgLAMQgLAOgHAPQgGAPgJANQgIANAAARQAAASAHAMQABACAEADQAJAHAOAAQASgBgEgQQgDgEgBgFAL+KBQAAAAAAABQACACADABQAQAFAAgQQAAAAgBgBQgDgGgCgHAMzJwQgBgCAAgBQgBgDgBgEABlJ9QABAegSAJAEOlCQACARgEAQAu7v7QAAAZAAAZQAAARAAAPAvntKQgGAFgNgBQgRgBgQADQgPAEgQAEQgPAEgPAHQgQAIgMgLQgLgLABgSQABgPAPgHQAPgGAQgBQARgBARgDQAOgEAQgBQARgCAOAEQACABADgCQACACADACQAAAAABAAQANAIANAEQANADAMAEQADABACABQAOAGAPAGQAEACADABQgNAJgMAIQgPAJgPAEQgOAFgQABQgEAAgEgBQACADgBAFQAAAQABARQACAQACAQQABAQABAPQAAARADAPQACAQAAAQQAAARAAAQQABARgCAQQgBARgFAPQgFAQgGAQQgGAPgGAPQgFAPAAARQAAAIAEAGQADAFAEADQACAOgHAOQgKgCgHgEQgGARgCASQgDAYADAYQAEAiAIAfQAEAVAAAUQABAVABAUQAAAWgBAUQgDAmgLAkQgJAbAEAeQADAUABAYQgoAAgmABQgnABgnAAQgpABgpgDQgpgCgoAGQgqAGgqAAQgmgBgkAFQgjAFglgBQgcAAgUAFAv5tqQgJADgKACAvluVQgGgBgHACQgPAFAJAMQAEAGAGAFQABABACABAvjtMQAFgCAIgBQAGAAAFgDQAOgHALgGAvltyQACAQABAQQAAADgBADQgCABgCABQgGAFgBAIQgBAPAJADAuKwHQgBAYgCAUQgDAagEAYQgCALAAANAtquFQAEgBAFACQADAEABAEQAEATgUAEQgFABgGAAAuMtuQAAgBABAAQAIgKATgIQADgBADAAQAAADAAACAtwuBQADgDADgBAuJtOQALAFAKAEQAEACADAAQANACAHgNAtttDQACAQAAAQQABARgGAPQgFAOAAAPQAAARgBAQQgCARABARQABAQABARQACARgDAQQgBAFAAAGQAAARAAARQAAARgDAPQgDARABAQQAAARACARQAEASgMAIQgHAFgJADQgHACgHAAQgPABgPACQgQACgRAAQgLAAgHgFAuWqIQgBAZgHAXQgHAXgBAXQgCAZABAZQAAALAAADAuxpcQgHAVgIAXQgHAYgBAYQgBASAEAQAucl9QgKAUgIAWQgKAXgGAXQgHAXgBAYQgCATAAAUAv2mRQAKACAOAAQAagBAYgEQAJgBAIgDQALgCAKgFQAJAIABAOQACARgCAVQgCAVgEAWQgFAegJAdQgGAXgEAVQgEAVgHAUQgJAZAAAbQABAbAEAZQAGAlADAkQABAPACAQQgSAAgTAAQAAAUABATQAAAEABAFQAUAAAUABIAAAAQAIABAHAAQArAEAjAMAuGmfQAEgBAEgCAubmYQAKgHgBgQA3JADQgfAAgfAAQgmAAgmACQgkABglADQgkADgjAHQgfAHgaAGQggADgbADQgnAEgnABQgrACgqAAEgkYAIeQAzg8BjgUQAAAlgEAeQAog2AyBKQAog8ATAlQgRgqAWgqQA7gJBFAYQhvAoBsBBQAGhoAwBAQgIiJBXByQBchGAzBJQAdhXBBAgQAEgIAHgIQAJgMARAGQAeAMADAfQACAaAQgSQANgPAZANQANAPgHAcQAMAGALgOQATgYAYgSQAGAOAGAKQAGgLAGgPQAHgVAIgVQAEgKAIAHQAXAVgDAXQALgSAagBQAHAQADASQADAdAOgMQAYgWAbgZQAOACAOAPQgBgYAEgXQAIgjAPAZQANAWATAPQAGgYADgZQAFgaAHgaQAIgggFggQgEgWgHgXQgIgaAEgbQgqADgjAAQgmAAgmAAQgiAAgiAAQgpgBgoAEQgRABgTABAvOlZQgLAUgFAZQgEAVAAAaQAAAIADAFAvjAoQAQAAAQAAIABAAQgBgFAAgGQgCgagDgWAwNAoQgBAAABABQAAAUgBAPQgBAGgBAGQgGAAgHAAQgoAAgogBQgkgBgjABQgoACgoAAQgtgBgiARQgKAFgKADAv+BYQABgDAAgDAwQBYQAJAAAJAAQANAAAMAAQgDgYAFgYAwQBYQgBAKgBAJQgDASgBASQAAALAFAHQACADADACQAKAIARABQAcABAVgFQAOgEANgDQALAPgBAMQABAAACgBAwRChQABADAAACQABAJABAJQAbADAeALQALAAALgBQABAAACAAQAQgCARgEQgCAOgRALAv+CBQgDgUADgVAudAoQACAYADAXQAAABAAABQAEAiABAlQgJACgJACAvmB+QAEgRgDgTQAAgBAAgBAvABYQgMgBgNAAQgGAAgGABIAAAAAu7CHQABgBgCgIQgDgSgBgUAwNAoQAVAAAVAAAudAoQAbAAAagBQAogBAogCQArgDAggSA0pE4QgkAAglAAQgrAAgqAAAvJD8QgLAXgDAYAu/DFQgZACgYgDQgQgDgOgEQgIgDgIgDQAIAAAIABQAAADAAACQAAAIgBAJAutDsQgIAVgFAXQgFAWgHAQAv1DwQgKAWACAbQABASAAASAuqG4QgBADgBADQgJAbgCAcQgCAdAFAbQAFAeACAgQACArAEArQADAgABAdQAAALgHACQgDAAgDABQgWAEgWgBQghgCgggDIAAAAQgDANgIANQgIgBgIgBQgCAOAAANQAAAOABANQADAYgBAYQgBAUADATQgWgBgSACAwnG+QgBAFgBAEQgIAjAAAlQAAAjABAkQAAAWAAAWQAAAQAAARQAAAMAAALQAAAJgCAHQgBAJgBAJQAAANABAMQABATAUACQAAAAABAAAweNDQgDAVAIARAwoMkQgIAMgKANAwoMkQAEACAFABQAYAHAZABQAXAAAYgEQAIgCAJAAQAPAAAPAEQgHAGgDAKQgGAZgIATQgJAWgFAYQgDAQgCARIAAAAQgEABAEAFQAAgDAAgDQAqgHApgBQAnAAArAAQApAAApgGQAngEAmAMQAnANAkAUQApAYAmgRQAkgQAmgRQAOgGAQABQArACAoAMQAlALAogBQAogBAngJQAogJAjADQgEAKgDAKQgGAXgIAXQgHAXgHAWQgHAWgFAXQgFAWgHAWQgHAWgJAWQgKAXgQATQgOAQgMAOQgEAIAAAHQAAAEABAEQAYgTAggJQArgMAVglQACADABAEQACAegEAkQAYgNAZgCQAggDAPgaQgCASAGAPQAFgFAHgHQABgCABgBQAGgBAJgCQACgGACgGQgKAGgJAJAvINJQgJAYgCAYQgBAMgCgDAvcNMQgLAWgEAVAv4NPQgEATgDAQAuuMpQAAgMgCgRAu7O+QgBADAAAEQgCAZACAVQgGgBgJABQgHAKgJgGQgIgGgKgEQgKgDgFAEQgGAEgFAEQgUALgLgjQgEAHgCAHQgBACgBADAu8PzQALACAFAGQgEAEgHgBAw1OvQAAAFABAFQAFAYABAaQAAADAAADQgBAFgBAEA2JPRQAigEAjgFQABAAABAAQAXgBAXgCQAYgBAYAAQAYAAAYAAQAQAAASgBQAEAAAEAAQAbgBASgSQgfAEgWAPA2JPRQAJgKAOABQAXABAXgBEgkYAO4QBcAoCUAEQC5AFC5gEQCWgDCXgRAJwK9QgBAGgBAGQgDASAJAMAJwK9QADgJAFgHQAJgQASAFQAPAFAHAPQAHAPgCARQgCAQgKAJQgDgCgDgCAJYLMQgBAGAAAFQgBATAGADAI8LXQAAgEACgFQAGgOAUAMQAAgDABgEQAEgQATAIAI8LXQAAABAAABQAAAKADAIAIuLlQACgOAMAAAG/NbQgMAMACARQAAAEACADACFJ5QgFAYgGAYQgFARgFAKAGfO/QggADgkABQgpABgpgDQgkgDgjgFQghgDgigCQgJAAgJgBQgVAAgNADAB/O0QgDASgCARQgEAagHAVQgHAXgIAWQgIAWgFAYQgGAWgDAYQgDAZgBAYQgBATgEAPQAHgFAIgC");
	this.shape_52.setTransform(233.4,130.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("Ag6A0QgJgDABgPQABgIAGgFIAEgCQAFgCAIgBQAGAAAFgDIAZgNIAFACIAbAMIAHADIgaARQgMAJgPAEQgPAFgPABIgDAAIgFgBgAA9AcIgHgCIgVgJIgHgDIgbgMIgFgCIgZgFQgNgDgNgJIgBAAIgGgEIgCgCQgGgFgEgGQgJgMAPgFQAGgCAGABQAFABAEADQAMAIAQAEQAPAEALAGIAZANIACAAIARAKIgRgKIgCgBQAJgKATgIIAGgBIAAADIAAACIAAgCIAAgDIAJgCQADAEABAEQAEATgUAEIgMABIAIADIAOAIIADADIAGAGQgFAMgKAAIgEgBgAAhARIAAAAg");
	this.shape_53.setTransform(139.4,43.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FF0000").s().p("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IAcgRIAbgTQAMgJAQgGQAQgHANgJQANgJAOgIIALgFIAZgQQAPgIAPgDIAAANIATABIATAAIAQAAIARgBIASgBIATgCQAIgCAIABIATABIASAAQAKABAGAEIgDAQQgEAPgCAPIgDAeQgDAQAAAQQgBASADAQQADAQAKAOQAEAGgEAHQgJAOgPACIgCAAQgRADgQgBQgQgCgQACQgQACgPgBQgRgBgQABIgiADIgLAAQgGAAgFgDQgHgDAFgIQAJgNABgQQAAgRAFgPIAJgeQAFgQACgQIAAgBQgLAGgNAJQgMAJgPAEIgcAKQgPAGgNAIQgPAIgJANQgJAMgOAJIgbASIgdARQgNAIgPAFIggAJQgQAEgPAGQgKAEgHAAQgHAAgEgDgAEewvQAOgEANgJQgNAJgOAEgAE4xIQgNADgLADQALgDANgDQASgEAIgLQgIALgSAEgAE+xfIggALIgfAKQgFACgDAEQADgEAFgCIAfgKIAggLQAQgGAIgNQgIANgQAGgAJ+xZQACgPAFgLQgFALgCAPgALWy0IgFAeIgFAfQgBANgCAIQACgIABgNIAFgfIAFgeIAFgcIgFAcgAKcxyIgCAQIACgQQABgRAGgQQgGAQgBARgAKzybQgDAQAAAQQAAAJgCAFQACgFAAgJQAAgQADgQQADgOAGgLQgGALgDAOgAJJzYIgEAfIAEgfQABgNAAgOIAAgFIAAgIIAAAIIAAAFQAAAOgBANg");
	this.shape_54.setTransform(194.8,130.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#339900").s().p("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ZAQATgGIAGAGIAGAIQATAcAGAoIAOgCQAQgCAKAMQAFgMAOgRQAdgGAbAYIAFgKQALgbAZADQAIABADAEQALAPADASIALgKQANgKAOANQATASANAXQALgQAZAMQANAHADAOQAEgEAHAAQAIAAAAAKIAJgFQAHgGAMgFIAAARQAAAHAEAFQAKAKAVgIQAOgEAMAIQAMAIABAOQAAAGAFABQAMACALgQQAEgFAGACQANAEACAWQAQgUATgKQAggPAUAWQAEAFADAAQAGgBAKgGQAFgDADgFIAAAAQAHAHANAGIAAABQAKACAHAIIASAWQAKgDABAFQAFAQAHAMQAOgNAXgFIAAAIIAAgIQACgCAGADQALAEAKAHQANgFAOgEQACAbAXgIQAOgFAKgKIAYgaQAUgVAXARQAHAFADgEQAOgWARAHQAOAGAEAOQAHAYACAYQBKhiAuBjQgBgZAbg/QA7AeAkAaIAAIJQiugmjEAnQghADgggHQgigGgigFQgqgGgrACQgnABgngBQgegCgdADQgoAFgoAAQggAAgggEQgpgEgpABQgrAAgqAEQgmAEgmgBIhOAAIhSAAIhLAAQgqAAgpADQgnACgmAGIhSAMQgRADgPAAQgZAAgXgHgAbSjAIAHgMIgHAMgAUckdQAFgHAGgGQgGAGgFAHgAUokgIgBgKIABAKgAEOFqIhHgHQghgEgigCIADgNIAKgtQAGgYAHgXQAHgVAGgXIANguQAIgXACgZQABgaAQgNQAVgRgBgYQgBgagLgRIgKAHQAFgUgBgVIAUgEIACgSQABgWAHgXQAHgXADgUQAQADAPAHQAPAHANAJIAJAIQAOALAHAPQAHAOAFAQQAEAQACAPIAEAhQACANAGAPQAFAOACAQQABARAEAQIAIAgQAEAQACAQIAFAgIAJAfIAJAeIADAJQAEAKAAANIAAAGQgBAQgGAPQgFAQACARIACASQggADgkABIgPAAQgiAAghgDgADogrIABgMIgBAMg");
	this.shape_55.setTransform(232.9,190.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#993333").s().p("A2BPCQgaAAgYgHIgJgDQAIgNAEgNIAAAAIBBAFQAWABAWgEIACAdQgJAAgJABQgVAFgWAAIgDgBgAkULrQgZAAgXgIQgSgHgPgQQABgSAKgNIAdAMQATAIAbgCQAagBAYgDIAcgFQABAVgFATQgMAHgSACQgWAEgWAAIgFAAgAWoJKQgGgCgDABIgCgqQgCgXgEgZIgFglQgCgZgHgXQgGgUgBgTIAFgbIgFAbIgDAPIgKAvQgFAYgGAXQgHAWgSASQgJAKgIALQgMgGgHgHIABgDIAAAAQAJgTALgVQALgUAFgXIALgtIAJgvQADgTAAgVIAAgJIAAgKIABgUIgBAUIAAAKIgDADQgHgPgLgRQgMgTgOgRQgOgRgNgUIgbgnIgagnQgNgVgRgPIgjghQgOgOgMgRQgLgSgSgKQgPgLgMgGQADgHAEgGIAGgIIAMAJQASALAOAOQAUAQANAQIAeAhIAfAiQAMANAJAMIAAABIAHAKIAYAkQAKARAQAUQANARAMAVQAMATAJARIABgTQADgYAAgZQgBgZgEgYIgMgvIAJgCQAPgEAQABQAGATADAWIADAxIAAAzQgBAZgCAYIgFAjIgBAGIgBALIAAAAQAKAVAGAVIANAvQAIAXADAYIAGAvIAEAWQADAZABAYQgKgHgLgFgA1pFZQgegKgbgDIgBgSIAEAAQAJAIASAAQAcACAVgGIAbgGQALAPgCAMQgQAEgRACIgDAAIgRABIgFgBgAVpEtIAAAAgAishCQgQAAgPgDIgSgDIADgXQAFAEAIACQAQADARgBIAggCIAfgCQAQAAAPgEQAJgCAIgDQAHANgIAHQgEABgFACIgHADIgeAFIgeADIgYABIgKgBgA2Kj9QAIgPgCgNQAHAEALAAQARABAPgCIAegDQAIgBAHgCQABAQgKAIIgRAEQgZAEgZABIgCAAQgNAAgKgCgAugsMQgIgOgEgQQgCgLgBgMQAJgCAHgIIACAKQADAQAFAPQADAIAHAGIABABIgUAJgAo7t0IgBgBQgNgIgBgSQgBgQABgRIACgOQALgBAMgDQgEAHAAAJQABARAJAOQAFAJAIAFQgJALgTAHIgBgBgAjmt5QgEgVAJgNIALAAIAigDQARgBAQABQAQABAQgCQAPgCAQACQAQABASgDIABAAQAIAPgHARIAAABIgIgCQgUgCgaACIg/AGQgZADgYAAIgQAAg");
	this.shape_56.setTransform(273.8,115.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#D2F4FF").s().p("ApUOcQgQgVgOAaQACgUgGgaIgNgsQgCgHgGAJQAFgUAEgYQAEgagQgPQgGgFgEAEIgQAOQgDAEgCADQAAgKgGgPQgMgfgiAJQgSAGgKARQgDAGgEAFQgBgVgGgVQgLgkgMAZQgFALACAQQgGgOgKgIQgGgGgHAJQgXAYANAgIACAHQgFgTgRgBQgIAAgIAIQgOAOgRACQgLACgLgCQAIgaADgbIAHg2QAEgdAAgeQABgSACgQIACgZQAAgMgJgNIAHgCIACABIABAAIAKABQAgAFAbAAIACAAIAAAAIALAAIADAAIBTgDQApgCAngNQgnANgpACIhTADIgDAAIgLAAIAAAAIgCAAQgbAAgggFIgKgBIgBAAIgCgBIgHACIgEABQACgMgLgPIASgEQgBglgEgiIAPABQArAEAjAMQgjgMgrgEIgPgBIAAgCIgGgvIA1gBQApgBAogCQArgDAggSQggASgrADQgoACgpABIg1ABIgCgfQgDgmgGglQgEgZgBgbQAAgbAIgZQAIgUADgVIALgsQAJgdAFgeQAEgWACgTQACgVgCgRQgBgOgJgIIAIgDIgIADIgVAHQAKgHgBgQQAJgDAHgFQAMgIgEgSQgCgRAAgRQgBgQADgRQADgPAAgRIAAgiIAAgLQAEgQgBgRIgDghQgBgRABgRQACgQAAgRQAAgPAFgOQAGgPAAgRIgDggQANACAHgNIABgEIAAgBIATgDIANgDIATgEIAlgIIAdgGQAUgEAUAAQAXAAAXgCIAMgDQATgFATgHQAUgHAUgCQAZgCAWgJIgHgJIAAAAIAUgKQAMAJAQgDQAPgEAMgJQANgJAOgHQAQgGAQgEQAPgDANgGIAfgMQAQgFAQgDIAggHQAQgDAPgFQAPgFAQgCQAQgCAQgFQAHgCgCgDIAAAAQAUgGAJgMIAFADQALAFASgHQAPgGAQgEIAfgJQAPgFANgHIAbgSIAcgRQAOgJAIgMQAKgNAOgIQAOgIAOgGIAdgKQAOgFAMgIQANgKAMgGIgBACQgBAQgFAPIgKAeQgEAQgBAQQgBAQgJANQgEAIAHAEQAEACAGAAQgJANAEAVQgkgBAKAmQAHAcgBAjQgBAiADAgQAEAjgIAdQgPgIgQgEIgegJIgGgCQAQgIARgEIAagHQgUgCgSADIgwAJQgSAEgPAEQgNAEgNABQAPgPAUgLQAJgGADgIQgTABgSAHIg1ATIghALQgJADgDAIQgEAKAAAMQAAAFABAEQgNgPgUgCIALAlQgUgIgagBQAQAVARAPQgfADgfAKQgHACgDAFQAdAEAeADQAOABgKAQQgFAGABAJIAAAQIAmgeIgBAcIgFACIAEAAQgHAIABARQACAQAEAPQAFARALAIQALAIAOAEIARAEQAHABAHgBIARAWQAJAMAMAKQAHAGAFAKIACAEIAFAKQAGALABARQACAQgBAQQgBAJgFAGQgJAOgMAHIgYAOQgPAIgHALQgFAIgHAHQgEALgJANQgIANgDARQgDAQgGAPIgLAeQgFAPgIANQgKAOgEAPQgGAQgJAMIgSAbQgJANgLAMQgMALgHAOIgRAaIgSAbIgRAaIgSAaIgSAZIgSAZQgIALgGAMIgEAIQgBAEgEgCQgEAHgIAHQgLAJgHAPQgGAPgEAQQgEAPABAPQgBARgCAQQgDAQAEAQQAFAPAIAPIARAcQAIAOANAJIAZATQANAKAMAMQALAMARAFQAPAEARAAIAigBQARAAAQgFQAPgGAOgDQAPgEANgGIAYgLIAEACIAAAAQALAFAPACQAQABAPAEQAOAEAPAGQAPAGATgCIgEAJQgIAPgGAUQgIgSgeACQgYACgLASQgIAOgIALQgDADgGAAQgXgDgLARQgFgjgjARQgGADgBAEQgEANACAPQgPgfgVAPQgFAEgDAEQgCgRgWAGQgLADgIAHQARgUgjgOQgTgHgUAOIgSANQAEgdgUgWQgOALgJALQgDglglgSQgGgDgGgEQgHAbgKAWQgDAEgBAGQgCAVAGAUQgUgPgXAHQgKACABAQQABAKACAJQgMgfgaARQgDACgBAGQgEATAGANQgMgDgEAZQgBANABANQgGgegmABQgLAAgHAFQgNAJgCAQQAAgTgLgOgAnJJAQAFAiAIAkQgIgkgFgiQgDgVAAgVQAAgVADgVQAFgqAhgWQghAWgFAqQgDAVAAAVQAAAVADAVgAoDJcQgLgUAAgZQAAgKABgLQAGgmANgeQgNAegGAmQgBALAAAKQAAAZALAUgAqPE3QAkAAAhgEIACAAIAsgGIBLgGQAogDAmgGQAkgFAlgCQglACgkAFQgmAGgoADIhLAGIgsAGIgCAAQghAEgkAAIAAAAIAAAAIgGAAIgFAAIgOAAIAOAAIAFAAIAGAAIAAAAIAAAAgAiZBSQgUAmgQAmQgQAkgaAhQgIAKgEAIQAEgIAIgKQAaghAQgkQAQgmAUgmQAUgmAOgnQgOAngUAmgAjkBSQgOAngPAlQgQAmgUAdQAUgdAQgmQAPglAOgnQAOgoAdgXQgdAXgOAogAlgCXQgKAngNAcQANgcAKgnQAKgpATgbQgTAbgKApgAl2AmQguArg8AXQA8gXAugrQAogmAAgrQAAgOgEgQQgIgegfgMQg3gVg8gIQgsgFgsAAIgBAAIAAAAIgYAAQAlgGAngDQBSgHBLgTQASgEADgLQAEgMAAgKQAAgXgSgOQgagUgpgJQhCgPg/gKIBFAAIBHAAIAEAAIAFAAIAAAAIABAAQAaAAAagCIAFAAIAAAAIAAAAIALgBQAqgFAmgKQAigKAAghQABgJgCgJQgHgigjgVIhHgqQgkgVgqgBQAqABAkAVIBHAqQAjAVAHAiQACAJgBAJQAAAhgiAKQgmAKgqAFIgLABIAAAAIAAAAIgFAAQgaACgaAAIgBAAIAAAAIgFAAIgEAAIhHAAIhFAAQA/AKBCAPQApAJAaAUQASAOAAAXQAAAKgEAMQgDALgSAEQhLAThSAHQgnADglAGIAYAAIAAAAIABAAQAsAAAsAFQA8AIA3AVQAfAMAIAeQAEAQAAAOQAAArgoAmgAi7nBIADAAIACgBIADAAQAkgBALgsQADgPAAgOQAAgbgNgXQANAXAAAbQAAAOgDAPQgLAsgkABIgDAAIgCABIgDAAIAAAAIgBAAQgdgBgXgKIgBAAIgFgCIg+gkQgRgLgXgBQAXABARALIA+AkIAFACIABAAQAXAKAdABIABAAIAAAAgA9nMiQhFgYg7AJQgWAqARAqQgTglgoA8QgyhKgoA2QAEgeAAglQhjAUgzA8IgFAAIAA8zMBIxAAAIAAbLQgkgag7geQgbA/ABAZQguhjhKBiQgCgYgHgYQgEgOgOgGQgRgIgOAXQgDAEgHgFQgXgRgUAVIgYAaQgKAJgOAGQgXAIgCgcQgOAEgNAGQAAgYgEgZIgDgWIgHgvQgDgYgHgXIgOguQgFgWgLgVIABgEIABgHIAAgFIAFgkQACgXABgaIAAgyIgDgyQgCgWgHgTIAHAAQAaADATAYQgGgSgKgOIgHgJQAEAEAFACIABABQAVAGAKASQALAUASASQASARAHATQAMgLgGgWQgEgTgKgSQgZgngRgrIAKADQAgADAWAZQABgPgJgMQgagggngUQAbgDAfAAIALAAIgLgEQgzgQgrACQADgHAEgDQAbgUAZgRQg3gDglAkQgEADgEABQgFAAgGgFQgagWgkgKQgBASARAIQgOgEgQgCQgjgCghAOQAbANAbACQgmAAgaAaQgQAQAPACQAlADAjAGQgcAJgHAaQAcgCAbACQgTAZgSAVIgEAGQAEgBAEgCQAZgPAZAHQgRAEgIASIA2gQIAMAvQAFAYAAAZQAAAZgDAYIgBATQgJgRgLgTQgMgVgOgRQgQgUgKgQIgXglIgHgKIAAAAQgKgNgLgNIgfgiIgfghQgNgQgTgSQgPgOgSgLIgMgIQARgLARgJQAYgMAagPQAhgUgcgCQgZgCgYACQgfADgOAKIAIgyIgOALQgYATgHAhQAAgLgDgLQgHgXgZgKQgIgDAAAHQACAiAQAfIgfgLQAEAPAVACQgLAFgMAGQgUAMgSAVQAaABAYgNQgIAKgFAOQgJAfgKAWQAJgGAIgIIAognIgDAcQgEAmAVAbQACgHABgJQAEgjgEgdQAHAKADAQQAGAdAMAUIgDggQgFgYAEgZQACgLADgJQANAGAOALQASAMAMASQAMARAOAOIAjAhQAQAPANAVIAbAoIAbAmQAMAUAPASQANAQANATQAKARAIAPIADAGQgBAVgDATIgJAvIgKAtQgGAXgKAUQgMAVgIATIAAAAIgCADIAAgBQgHgJgBARQgKAHgGABQgDAAgEgFQgUgXggAQQgTAKgQAUQgCgWgNgEQgGgCgEAFQgLAQgMgCQgFgBAAgGQgBgPgMgHQgMgJgOAFQgVAHgKgJQgEgFAAgHIAAgRQgMAFgHAFIgJAGQAAgKgIAAQgHAAgEAEQgDgPgNgGQgZgMgLAQQgNgXgTgTQgOgNgNALIgLAJQgDgSgLgOQgDgFgIgBQgZgCgLAbIgFAKQgbgZgdAHQgOAQgFAMQgKgLgQACIgOACQgGgpgTgbIgGgIIgGgGQgTAGgZgRQgIgFgIgCQgLATAFAXQADAPAIAJQgbgMgYgBQgOAUgFARQgQgRgMABQgDABgFADQgKgVgNgRQgLgOgLAMQgKANgVgJQgKgFgGAFQgIAHABANQACAcgggNQgLAUgGgGQgNgLgQADQgNACgFALQgFgIgGgJQgJgNgGgOIgMgdQgFgQgJgMIgRgaIgSgbIgTgbQgKgOgLgLIgWgWIgWgWIgWgWIgVgVIgYgXIgWgWIgYgXIgKgLQgLgPgMgDQgQgEgOAEQgPAFgNAKIgOAKQAJgIgCgPIgCggQgBgRABgPIAFghQADgQgEgQQgLgKgLADQAHgHgHgNIALgGQAMgIABgSIACggIABgfQAAgQgDgPQgCgQABgPIADAAQAPgFAOgGIAfgOIAdgMIAcgMQAPgHAPgEIAggJIAhgJQAQgEAQgCIAggFQAQgDAPAFIAMAGIADABIAOAFIAQAGIAdALQAQAGAOAIQAOAIAPAGQAPAFAMAIQAPAIAPAHIAdAMIAeAOIAdAPIAcARQANAHAPAGIAeAMIAdAMQAPAGAOAKQAMAIAOAIIggALQgMAEgKAGQgLAGACAQQAUAIAagJQATgGATADQAOADgMAMIgOARQgKAMgOAJQgPAKgEAPQgDAHAEAFQAGAIAOgJQANgIALgMQAQgQAMgSQAIgMALgLQAMAJAFAPIATA0QAFAOADAPQACAKAJADQAGACAEgFQAHgIACgKQACgLgCgLQgBgLgEgKQgLgWgPgUQgHgKgCgMQANAJALAMQAMALAJANQAJANAKAMQAKANAMAKQALAIADgIQAHgOgGgQQgFgPgKgMQgKgMgMgLIgZgUQgTgPAZAFIAgAHQAQAEAPAJQANAIAMAJQANALAQABQAWABgLgSQgIgOgOgIQgNgIgPgFQgPgFgPgIQgOgIgMgJIgZgVQgOgKgOgIQgPgIgQgDQgRgCgMAFIgagQQgOgJgMgLQgNgKgOgIQgOgIgOgKQgNgJgOgHQgPgHgOgJQgNgJgNgKIgagUQgNgJgPgGQgRgFgMgJQgOgJgPgFIgfgKIgfgLQgOgGgRgFIgfgHQgPgEgQgCIgTgDIgCAAIgFgBQgMgEgLgBIgHgBQAJgNAQgHQAPgGANgIIAcgSQAOgJAPgHQAQgGAOgJIAcgOIAdgNQAQgGAOgIIAcgOIAbgRIAbgQIAdgSQANgIAOgHQAPgHAQgFQAPgEAJgKQAQANAeACQALABAKgEQAHgCAFgFQAJgHALAHQAVAMATAOQALAHAMAFIAXAJQAQAGARgDQALgDgCgKQgEgNgOgIIgYgMQgSgIgUgCQgTgCgJgOIAMADQAXAIAaACQAFABAGACQAaAIAbgFQAFgBgBgEQgGgNgKgLQgHgJgMgDIgjgKQgTgHgRgEIAdgDQAQgBAQABQAQAAARgJQAIgLgSgJQgPgHgQgBIghgBQgRAAgPAEQgLACgGgGQgLgNAXgGIAfgIQARgEAMgFQALgFABgKQACgTgPADQgRAEgPAFIgfALQgPAFgQAEQgOADgIAJIgDAEIACgFQADgJADgLQAHgmgWgeIgFgFQgSgKgXAIQAIALADAOQADAMgHAGQgMAKACAOQABAQAEAPQAGASgNAIQgHAEgFAHQgLANgGAKQgIAKgQAGQgOAFgOAHQgNAHgNAJQgNAIgOAGIgcALIgfAJQgPAEgPAGIgdANQgPAGgPAHQgOAHgOAGQgPAFgNAIIgdAQQgMAIgPAGIgfANQgOAFgNAIQgOAJgMAKQgNAKgQAEQgQAFgPAHIgeANIgdAPIgBABIgFADQgJAGgMAFIgeALQgPAFgOAJIgbAQIgDABIAAgQIAAgiIAAggIgBghIgDgeIgDggIgBgiIgBghIABghQAAgQACgPIAFghIADgeIACghIAAghQAAgQgCgQQgDgPgLgLIgEgBIABAAQAGgRgIgQQAPgCAJgOQAEgHgEgGQgJgNgDgRQgDgQAAgRQABgQACgRIAEgeQABgPAEgPIADgQIABgQIgBAQQgFgEgLAAIgSgBIgSgBQgJAAgIABIgSADIgTABIgQAAIgQAAIgTAAIgTgBIAAgNQgQAEgOAIIgaAPIgLAGQgNAIgNAJQgNAJgQAGQgQAGgNAJIgbATIgbARIgbAQQgPAIgPAHQgNAGgOADIgdAIQgOAEgPAHQgHADgEAGQgLACgMABIABgHIABgFIgGAEQgMAIgRAEIgeAJIggAJIgfAJIgeAJIgeALIgbAJIgeAJIgeAJIgeAJQgQADgOAIQgJAGAAALQgIAIgJACIAAgIQgLgBgQAJQgNAIgPAFIggAKQgPADgQAHQgPAFgPAEIgfAJIgeALQgPAFgQABQgPAAgPADIghAGIgNACIgFACIgCAAIgCAAQgFgCgEABIABgXIAAghIAAgiQAAgQgBgQQgCgQgEgQQgDgPgBgQQAAgPADgPQADgQgBgRQgJgGgPgHQgPgHgQgEQgQgGgOgDQgMgCgIAOQgIANgBARIgDAfQgCARAAARQABARgBARIgDAfIgBAiQAAARADAPQADANgCAOQgFgBgHACQgPAFAJAMQAEAGAGAFIACACQAAABgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgOgEgRACQgQABgPAEQgQADgRABQgQABgPAGQgPAHgBAPQgBASALALQAMALAQgIQAPgHAPgEIAfgIQAQgDARABQANABAGgFQgGAFgBAIQgBAPAJADQACADgBAFQAAAQABARIAEAgIACAfQAAARACAPQADAQABAQIAAAhIgCAhQgBARgFAPIgLAgIgMAeQgFAPAAARQAAAIAEAGQADAFAEADQACAOgHAOQgKgCgHgEQgGARgCASQgDAYADAWQAEAiAIAfQAEAVAAAUIABApQABAWgCAUQgCAmgLAkQgJAbAEAeQADAWABAYIhOABIhOABIgDAAIgEAAIgGAAIgBAAIAAAAQgeAAgegBIgIgBIgFAAIgHAAIgMAAIAAAAIgBAAQgcAAgcAEIgBAAQgnAGgmAAIgBAAIAAAAIgCAAIgDAAIgDAAIgIAAIAAAAIAAAAQgbAAgaADIgEAAIgBAAIgFABQgeAEgfABIgBAAIAAAAIgJgBIgBAAIgEAAIgEAAIAAAAIgBAAQgWAAgSAFQASgFAWAAIABAAIAAAAIAEAAIAEAAIABAAIAJABIAAAAIABAAQAfgBAegEIAFgBIABAAIAEAAQAagDAbAAIAAAAIAAAAIAIAAIADAAIADAAIACAAIAAAAIABAAQAmAAAngGIABAAQAcgEAcAAIABAAIAAAAIAMAAIAHAAIAFAAIAIABQAeABAeAAIAAAAIABAAIAGAAIAEAAIADAAIBOgBIBOgBIAAABQAAAUgBAPIgCAMIgNAAIhQgBIgOAAIgNAAIgBAAIAAAAIgWAAIgVAAIgHABIg5ABIAAAAIAAAAIgIAAIgJAAIgCAAIgCAAIAAAAIAAAAQgqAAggAQQgKAFgKADQAKgDAKgFQAggQAqAAIAAAAIAAAAIACAAIACAAIAJAAIAIAAIAAAAIAAAAIA5gBIAHgBIAVAAIAWAAIAAAAIABAAIANAAIAOAAIBQABIANAAIgCATQgDASAAASQgBALAFAHIABAFIACASIgQgBQgqADgjAAIhMAAIhEAAIgHAAIgIgBIAAAAIAAAAQghAAghAEIgkACIAkgCQAhgEAhAAIAAAAIAAAAIAIABIAHAAIBEAAIBMAAQAjAAAqgDQgEAbAIAaQAHAXAEAWQAFAggJAgQgGAagFAaQgDAZgGAYQgTgPgNgWQgPgZgIAjQgEAXABAYQgOgPgPgCIgyAvQgOAMgDgdQgDgSgHgQQgaABgLASQADgXgYgVQgHgHgEAKIgQAqQgFAPgGALIgMgYQgYASgTAYQgLAOgMgGQAHgcgNgPQgZgNgNAPQgQASgCgaQgDgfgegMQgRgGgJAMQgHAIgEAIQhBgggdBXQgzhJhcBGQhXhyAICJQgwhAgGBoQhshBBvgogA1/KRIAJAAIAJAAIBJAAIhJAAIgJAAIgJAAIAAAAIgBAAIg5AAIgJAAIAJAAIA5AAIABAAIAAAAgA/zGGIBTgCQAngBAmgEIA8gGIA5gNQAjgHAkgDQAlgDAkgBQAmgCAmAAIA9AAIg9AAQgmAAgmACQgkABglADQgkADgjAHIg5ANIg8AGQgmAEgnABIhTACIgBAAIgBAAIABAAIABAAgAP1pUQgEAIgBAIQABgIAEgIQAHgRAMgIQgMAIgHARgAO0piIAAgFQAAgJADgHQAGgQANgKQAMgKAOgEQgOAEgMAKQgNAKgGAQQgDAHAAAJIAAAFgAcHMFQgBgFgKADIgSgWQgHgIgKgDIAAAAQAIgLAJgKQARgSAHgWQAHgXAFgXIAJgvIADgPQACASAGAUQAHAXACAaIAEAkQAEAZADAYIACApQgXAGgOAMQgHgMgFgPgAImK3QgFACgCgGIgKgSQgIAGgHAIQgDgcgaAHQgFABgBAEQgTgTgKAQQgDAHgDAHQgPgLgTgEQgIgWgIgOQgFgIgLAIIguAfQgKAIgMAEIgIgGQgNgLgIAEIACgSQACgYAIgYIAPguQAHgWADgXQADgZABgXIAQgLQANgIALgLIAYgWIAYgTIAWgUQAGANAIAOQAIANAMAMIAWAXIAXAWQANAMAIAMIASAZQAIAOAMALIAXAXIAWAXQAMAMAHANIAUAeIARAbIAGAKQgXgGgVAIQgIAEgDAJIgQgcQgPAVgPAYQgLgWgTALgAgGHQIAEgEIASgWQAJgMAMgLIAWgWIAYgWQAMgLAJgNIATgZQAIgLAHgOQgEASgBAQQAAARgDAPIgDAgQgCANgFAJIgFADQgOAJgPAHIgcANQgQAGgQADQgSADgLAHgAuTGyIAAAAgAwIGBIAAAAg");
	this.shape_57.setTransform(232.9,95.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFCC99").s().p("AhWQEQgPgEgHgOQgHgNACgQIAAgQIgCgSQgDgRAGgQQAGgPAAgPIABgHQAAgNgFgKIgCgIIgJgfIgJgfIgGggQgBgQgFgQIgIggQgDgQgCgRQgBgQgGgOQgGgPgCgPIgEggQgBgQgFgQQgFgPgHgPQgHgPgNgLIgKgIQgNgJgPgHQgOgHgRgCQALgZADgVQAEgYAHgWQAFgNACgPQAJgEAMAKIAIAHQAIAFAKAEIAcALQAOAGAKAMQAKAMAHAOQAHANACAPIAGAgIAGAdQADAQAEAPQAFAOACAQQACAPAFAOIAJAeIAIAfIAGAfIADAgIADAhIADAgQACAPAEAQIAIAfQAEAQAOAFQAQAGAMgJQAMgHAEgPQAFgQgDgRIgBgDIgDgEQgGgMAEgRQAEgSAKAIQACgOAMABQAAgFACgEQAGgPAUANIACgHQAEgQATAIIgDALIAAAIQgBANAIAKQgIgKABgNIAAgIIADgLQADgJAEgHQAKgRARAGQAPAFAHAPQAHAPgCARQgCAQgKAIIgFgEIAFAEQAJAHAHALQAIANAAARQAAAQgGAQQgGAOgKAMQgJALgOAHQgNAGgOAFQgPAFgQAEQgQADgMAMQgLAKgEAQQgCAJgEAJIgBACIgFAIQgIAOgDAQQgGAPgOAIQgOAIgRABIgIAAQgNAAgMgDgAhcN9IACAIIgCgIIAAgFQAAgNALgLQgLALAAANIAAAFgAAbL3IAAgDIAAgCIAAgBIAAgEIAAgDIAAADIAAAEIAAABIAAACIAAADIAAAAIAAAAIgBgBIAAAAIAAAAIABABIAAAAIAAAAgABJLyQgFgDAAgPIAAgDIABgLIgBALIAAADQAAAPAFADgAApLfQABAJADAIQgDgIgBgJIAAgCIAAACIAAAAgADGKQIgFgFQgGgMgBgSQABgRAIgNQAIgNAHgOQAGgQALgNQALgNAEgPQADgOgGgGQAGAEAGACQgGgCgGgEIgHgFQgGgFgGgCQgQgGgOgHQgOgHgOgJQgOgJgGgPQgIgQAJgPIAIgLQAKgMgHgQIgIgRIgHgKIgRgbIgTgeQgHgOgNgMIgWgXIgXgXQgMgLgIgNIgRgZQgHgMgMgMIgYgWIgWgYQgMgMgHgNQgJgOgFgNIgXAUIgXATIgYAWQgMALgNAJIgQAKIgHAFIgbARIgPAMIgBAAIgCABIgHAGIgYARQgGAEgGABIgNgNQgKgMgHgNIgNgdQgGgQgBgQQgBgQABgQQAJgEAGgHQANgEAKADIACAAIABgBIANgIIALgHIAbgPIAcgPQAMgIALgNQALgNANgKIAHgHIADgCIAOgLQAOgJAPgFQAOgEAPADQANAEAKAOIALAMIAXAXIAXAVIAYAVIATAVIAVAWIAWAWIAXAWQALAMAKAOIASAaIASAcIASAaQAIALAGAQIALAeQAGAOAKANQAGAIAEAJIAFAMQAEAPALAMIAVAWIAXAXIAWAXQAMALAEAQQAFAOAJANQACADABAFIAAADQAEANABAOQACARgDAQQgCAMAAANIAjAEQARABAIAQQAHALAAAPQgBASgPAFQgRAFgOgLQgNgKgJgMIgJgLIAFANIAFASQAFARgLAMQgOAPgNgQQgGgIgEgKIgBgCIgCgHIACAHIABACQADAQgLAIQgFAEgGgEQgHgEgFgJIgBgCQgEgGgBgGQABAGAEAGIABACQgBAPgQgFIgEgDIgBgBQgDgEgBgFQABAFADAEQAEAQgSABIgBAAQgNAAgJgHgADUGwIABAFIgBgFQgDgOAAgPIAAgEQABgQADgQQgDAQgBAQIAAAEQAAAPADAOgApOGLIACgEIgBAEgArZChQgRAAgPgDQgQgDgPgGQgPgFgQgEQgRgEgMgJIgGgFQAEABACgEIADgHQAGgMAJgMIASgZIARgYIASgbIARgXIASgbIARgbQAIgNALgMQAMgMAIgNIATgaQAJgNAFgPQAFgPAJgOQAJgNAFgQIALgeQAGgPADgQQACgRAJgNQAIgNAFgNQAHgGAFgIQAHgMAOgHIAbgPQAMgHAJgNQAEgHABgJQABgQgBgQQgBgRgHgLIgEgJIgCgFIAHgTIAKgeQAFgQAKgLIAVgYIgVAYQgKALgFAQIgKAeIgHATQgFgKgIgGQgNgKgJgLIgSgXQAJgBAHgGQAMgKAHgLQAEgGAAgDIgBgCIABACQAAADgEAGQgHALgMAKQgHAGgJABQgGACgHgBIgSgFQgOgEgLgIQgLgIgEgRQgFgOgBgRQgCgQAHgJIACgBIAWgJQAIgDAKgBQAFgEAIABIAJADIgGgKQgHgQgQgNQAKgJAUgBQgWgDgQgMQABgKANgBQAsgCAnAAQgRgIAPgCQAQgDARgBQAMgBALACQALABAKAAIAEAAIAPALQALAIAIAMQAIANAEAMQACAHAHgGIAMgIIAOgGQAPgGAOAAQAJgBAJAFQAPAIAAARQAAARgNAHQgOAHgPAEQgQADgJAGIAMAXQAHAOAJAOQAIAMAEAQQAEAPgBARQgBAQgFAPQgEAOgIAMQgHAMgKAJQgKAKADALIALgDIAfgIQAQgFARAAQASgBAHgHQAMgBAJgEIAegLIAcgLIALgFQAIgKAAgSIAAgPIAAgBIADgCIAbgQQAOgIAPgFIAfgMQALgEAKgGIAEgDIACgBIAdgPIAbgOQAPgHARgEQAQgEAMgLQAMgKAPgIQANgIAOgGIAegMQAPgGAMgIIAdgRQAOgHAOgGQAPgFANgIQAPgHAPgGIAdgMQAPgGAQgEIAfgJIAbgLQAOgGANgJQANgJANgGQAOgHAOgGQARgGAHgKQAGgKALgMQAGgIAHgDQAMgIgFgSQgEgPgCgQQgBgPALgKQAHgGgCgLQgDgPgIgLQAWgHASAKIAFAEQAXAfgIAlQgCALgEAJIgCAGIADgFQAIgJAOgDQARgDAOgFIAfgLQAQgGAQgDQAQgDgCASQgBALgMAFQgMAFgQAEIggAIQgXAFAMANQAGAHAKgDQAQgEAQAAIAhACQAQABAPAHQATAJgJALQgRAIgQAAQgQAAgQABIgdACQASAFATAHIAjAKQALADAIAIQAJAMAGANQACAEgGABQgbAEgagIQgFgCgGAAQgZgCgYgJIgMgDQAJAPAUACQATACASAHIAZAMQAOAIADAOQACAJgLADQgQADgQgGIgYgJQgMgFgKgGQgUgOgVgNQgKgGgJAHQgGAEgHADQgKADgLgBQgdgCgRgMQgJAKgPAEQgQAEgOAIQgOAHgNAIIgdARIgbARIgcAQIgcAPQgOAHgPAHIgeANIgcAOQgOAIgPAHQgQAGgNAKIgdASQgNAIgOAGQgRAGgJAOIAIABQALABAMADIAEABIADABIASADQARACAPADIAfAIQARAEAOAGIAeAMIAfAJQAQAGANAJQANAIAQAGQAPAFAOAJIAaAUQAMALAOAJQANAJAPAHQAPAHAMAJQAOAJAPAJQAOAHAMALQAMAKAOAJIAaASQANgFARADQAPACAPAIQAPAJANAKIAZAUQAMAKAPAIQAPAHAOAFQAPAFAOAIQANAIAIAOQALATgWgCQgPgBgOgKQgMgKgNgHQgOgKgRgDIgfgIQgagFAUAQIAYAUQANAKAJAMQAKANAGAPQAFAPgGAPQgEAIgKgIQgNgLgKgMQgKgMgJgOQgJgNgLgLQgMgMgNgJQACAMAHAKQAPAUALAXQAEAJACAMQACAKgDALQgCALgHAIQgDAEgHgCQgJgCgCgKQgCgQgGgOIgSg0QgFgPgNgIQgKAKgJAMQgMATgPAQQgLALgNAJQgOAJgGgJQgEgFACgGQAFgQAOgKQAOgJAKgMIAPgQQALgNgOgCQgTgEgSAHQgaAIgVgIQgCgQALgGQALgFALgEIAggMQgNgHgNgJQgOgJgOgGIgegMIgegMQgPgHgNgIIgbgSIgdgPIgfgOIgdgMQgPgGgPgJQgMgHgPgGQgPgFgOgIQgOgJgPgFIgegLIgQgGIgOgFIgCgBIgNgGQgPgGgQADIgfAFQgRACgQAEIggAJIgeAKQgQAEgPAHIgcAMIgdAMIgeANQgOAGgQAFIgCABQgOAEgNAHQgOAGgPAGIgeAKIgeAFQgQADgQAFQgRAEgNAGIgGAEIgEAEQgHAIABANQADAQAAARQAAARADAPQACAIAFAFIgCAYIgOgDQgFgCgDAHIgHAPQgGANgEAPIgHAfIgFAgQgCAQAAAQQABARAFAQQgHAOgIAMIgTAXQgKAMgMALIgYAWIgWAWQgMAMgJALIgTAXIgFAEIgFADQgFADgFAFIgGABIgGABIgNACIgRAEIggAGIghAFIgQACIgQACQgOACgOAAIgFAAgApkAXQAFAQAGAPQgGgPgFgQQgEgOgCgLQACALAEAOgApThNQADAQAFAPIAJAgIAIAbQAEARAGAPQgGgPgEgRIgIgbIgJggQgFgPgDgQQAAgGgCgDQACADAAAGgAo5hqIAKAgIAJAeQAFAQAHANQgHgNgFgQIgJgeIgKggIgEgOIAEAOgAoWhkQAEAPAGAPIALAfQADAKACAJQgCgJgDgKIgLgfQgGgPgEgPIgJgeIAJAegAlkm1IgCgFIACAFgAmOpSQgJABgIADQgOAGgFAMQgFANgHANQgHAMAAARIAAAhQAAAFACAAQAPgCAJgKQALgLAJgNQAIgNANgMQAMgKAKgMQALgMAGgLQgJABgKgFQgMgFgOAAIgGAAgABio9QgPABgQADQgQACgPAEIgfAIIgfAIIgeAKIgeALIgfAMQgPAGgQAEIgUAGIAUgGQAQgEAPgGIAfgMIAegLIAegKIAfgIIAfgIQAPgEAQgCQAQgDAPgBIAJAAIAFgBIABAAIAAAAIAIABIADAAIgDAAIgIgBIAAAAIgBAAIgFABIgJAAgAnBqaIgSAOIASgOQANgLAJgLQgJALgNALgAnCq3QgQADgOAGQgPAHgJANQAJgNAPgHQAOgGAQgDIABAAIABAAIAAAAIAHgBIABAAIABAAQAHAAAFADIABABIgBAEIACgCIAAgBQAEgGAAgHQAAgGgDgGQADAGAAAGQAAAHgEAGIgBgBIgBgBQgFgDgHAAIgBAAIgBAAIgHABIAAAAIgBAAIgBAAIAAAAg");
	this.shape_58.setTransform(286.5,129.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34}]}).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_47},{t:this.shape_56},{t:this.shape_55},{t:this.shape_44},{t:this.shape_54},{t:this.shape_42},{t:this.shape_41},{t:this.shape_43},{t:this.shape_39},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]},42).wait(43));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,470,348.2);


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
(lib.com_scene5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene5:0,scene5repeat:83});

	// timeline functions:
	this.frame_0 = function() {
		this.btn_menu.addEventListener("click", openMenu.bind(this));
		this.btn_goNext.addEventListener("click", openNext.bind(this));
		this.btn_goBack.addEventListener("click", openPrev.bind(this));
		
		
		function openMenu(){
		
		 window.open ("../menu/menu.html","_self");
		}
		
		
		function openNext(){
		
		 window.open ("com_finish.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("com_scene4.html","_self");
		}
	}
	this.frame_95 = function() {
		this.gotoAndPlay("scene5repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(95).call(this.frame_95).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EglLAa5MAAAg1xMBKXAAAMAAAA1xg");
	mask.setTransform(277.4,209);

	// Layer 3
	this.instance = new lib.scene5();
	this.instance.setTransform(277.5,181,1,1,0,0,0,233.5,137.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(96));

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

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGAFQgDgCAAgDQAAgCADgDQADgCADAAQAEAAADACQADADAAACQAAADgDACQgEADgDAAQgDAAgDgDg");
	this.shape.setTransform(386,37.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#34883F").s().p("AghAoQgIgFAAgIQAAgEADgCQACgDAEgBQAGABADAFQADAJANAAQAJAAAKgGQALgFAAgFQAAgIgHgDQgEgCgNAAQgLAAgIgDQgMgFAAgJQAAgNANgKQANgKAOAAQAGAAAJACQAMAEAAAFQAAADgCADQgDADgEgBIgJgBIgJgBQgIAAgFAEQgIAEAAAEQAAABAAABQAAAAAAABQABAAAAABQABAAAAABQADABAEABIAOAAQAOABAJAHQAJAGAAANQAAARgTAIQgOAHgRAAQgQAAgJgIg");
	this.shape_1.setTransform(378.7,33.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#34883F").s().p("AgFAuQgCgDAAgEIAAgCIAAgDIAAgJIgBgJIgBgVIgCgXIgDAAQgOAAgJgCQgHgCAAgGQAAgEADgCQACgDAFAAIAKABIAKABIAMAAIAJAAIAPAAIAOABQAEAAACACQADADAAAEQAAADgDADQgCACgEAAIgPgBIgQAAIACAaIABAXIABAHIAAAGQAAAFgCAEQgDAFgEAAQgCAAgDgCg");
	this.shape_2.setTransform(369.7,32.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#34883F").s().p("AgrAwQgDgCAAgEIABgHIAAgIIAAgLIAAgMIAAgKIAAgMIgBgLIAAgLQAAgEADgDQADgDAEAAQAFAAAGAIQAaApAdAYIAAgKIgBgoIgBgHIAAgHQAAgIAJAAQAKAAAAAfIAAALIAAAmIgBAKQgCAIgIAAQgEAAgGgFQgYgWgdgmIAAASIAAAPIAAAQQAAASgJAAQgFAAgCgDg");
	this.shape_3.setTransform(359.9,33);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#34883F").s().p("AgcAwQgHgGAAgVIABgXIABgaIAAgGIgBgHQAAgKAJAAQADAAACACIAOgDIALgBQAPAAALAEQAFACAAAGQAAADgCADQgDADgEAAIgCgBQgLgCgJAAIgIAAIgMADIgBAZIAXgDIAQgBQAEAAACADQACACABAEQgBAGgHABIgQABIgZACIgBANQABANABABQABABAHAAIAKAAIAMAAIADAAIAFgBQADAAACACQAEADAAAEQAAAHgIABQgGACgSAAQgVAAgGgGg");
	this.shape_4.setTransform(350.8,32.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#34883F").s().p("AAiApIgDgPIgHggIgJAZIgFAMIgEAMQgEAFgEAAQgGABgDgIIgEgMIgJggIgHAeIgDANQgCAJgIAAQgDAAgEgDQgCgCAAgEQABgJAEgPIAHgXIAEgTQADgOADgEQADgFAGAAQAFAAADAGQACAGADAQQADARAFARQAGgRAGgWIAEgPQADgJAHAAQAHAAADAKIAEARQADAYAGAUIAFAVQAAAEgCACQgDADgEAAQgHAAgDgKg");
	this.shape_5.setTransform(340.9,33.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#34883F").s().p("AgcAwQgHgGAAgVIABgXIACgaIgBgGIgBgHQAAgKAJAAQADAAACACIAOgDIAKgBQAQAAALAEQAFACAAAGQAAADgCADQgCADgEAAIgEgBQgKgCgKAAIgHAAIgMADIAAAZIAWgDIAPgBQAEAAADADQACACABAEQAAAGgJABIgPABIgZACIgBANQAAANACABQABABAHAAIAKAAIAMAAIADAAIAFgBQADAAADACQADADAAAEQgBAHgHABQgGACgSAAQgVAAgGgGg");
	this.shape_6.setTransform(331.2,32.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#34883F").s().p("AggAmIABgUQACgaAAgiQAAgDACgDQADgCADgBQAEABADACQACADAAADQAAAigBAbIgCAPQAPAAAWgHIADAAQAEAAACACQACADAAADQAAAGgFACQgIADgPADQgNADgJAAQgPAAAAgOg");
	this.shape_7.setTransform(323.5,33.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#34883F").s().p("AgcAwQgCgDAAgDIAAgSIABgbIACgdQAAgRAJABIAGgBIAJAAQALAAAKAIQANAJAAANQAAAQgNAHQgMAJgOAAIgFAAIAAAdQAAADgDADQgCACgEAAQgDAAgDgCgAgLggIAAAJIgBAVIAEABQAIAAAHgFQAHgFAAgIQAAgGgHgEQgGgEgFAAIgEAAIgDABg");
	this.shape_8.setTransform(316.3,32.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#34883F").s().p("AAiApIgEgPIgHggIgJAZIgDAMIgGAMQgDAFgEAAQgGABgDgIIgEgMIgJggIgIAeIgCANQgDAJgGAAQgFAAgDgDQgBgCAAgEQgBgJAFgPIAHgXIADgTQADgOAEgEQAEgFAEAAQAGAAADAGQACAGAEAQQACARAGARQAFgRAGgWIADgPQAEgJAHAAQAHAAAEAKIACARQAEAYAGAUIAGAVQAAAEgEACQgDADgDAAQgHAAgDgKg");
	this.shape_9.setTransform(307.2,33.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#34883F").s().p("AghAmQgNgLAAgSQAAgUANgSQAPgTAVgBQAWABALAJQALALAAAUQAAATgMASQgPAUgUAAQgUAAgNgLgAgTgSQgKANABAOQAAAKAIAHQAHAGANAAQAMAAAIgNQAJgNAAgOQAAgOgFgEQgHgGgOAAQgMAAgKAOg");
	this.shape_10.setTransform(296.1,33.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#34883F").s().p("AgbAmQgKgKAAgNQABgUASgWQAQgSAPAAIAEAAIAFAAQACgCAFAAQAGgBABAIIACAMQgBAEgCACQgCADgEABQgGAAgDgHQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAgBAAIgEAAQgJAAgIAMQgPAQAAAPQABAGAEAFQAEAFAHABQAEAAAHgEIAJgGQAFgDADgBQAEAAADAEQACACAAADQAAAEgDADQgSAPgQAAQgOAAgKgLg");
	this.shape_11.setTransform(287,33);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#34883F").s().p("AgcAwQgHgGAAgVIABgXIABgaIAAgGIgBgHQAAgKAJAAQADAAACACIAOgDIALgBQAPAAALAEQAFACAAAGQAAADgCADQgDADgEAAIgCgBQgKgCgKAAIgIAAIgMADIgBAZIAXgDIAQgBQAEAAACADQACACABAEQgBAGgHABIgQABIgZACIgBANQABANABABQABABAHAAIAKAAIAMAAIADAAIAFgBQADAAACACQAEADAAAEQAAAHgIABQgGACgSAAQgVAAgGgGg");
	this.shape_12.setTransform(273.4,32.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#34883F").s().p("AgFAuQgCgDAAgEIAAgCIAAgDIAAgJIgBgJIgBgVIgCgXIgDAAQgOAAgJgCQgHgCAAgGQAAgEADgCQACgDAFAAIAKABIAKABIAMAAIAJAAIAPAAIAOABQAEAAACACQADADAAAEQAAADgDADQgCACgEAAIgPgBIgQAAIACAaIABAXIABAHIAAAGQAAAFgCAEQgDAFgEAAQgCAAgDgCg");
	this.shape_13.setTransform(264.6,32.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#34883F").s().p("AAWAkQgEgIgCgJIgQAAIgNACIgKAWQgDAEgFAAQgDAAgDgCQgDgDAAgEQAAgDAJgSIAAgEQAAgDAGgCIAUgfQAOgYADAAQAHAAADAJIAEAVIAJAnIADAIQADAGAAADQAAADgDADQgDADgDgBQgFAAgFgLgAgEAFIAHgBIAJgBIgEgSIgMAUg");
	this.shape_14.setTransform(255.3,33.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#34883F").s().p("AgbAmQgJgKAAgNQgBgUAUgWQAPgSAOAAIAFAAIAEAAQAEgCADAAQAHgBABAIIABAMQAAAEgCACQgCADgFABQgFAAgDgHQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAgBAAIgFAAQgHAAgJAMQgOAQAAAPQgBAGAFAFQAFAFAGABQAEAAAHgEIAJgGQAFgDADgBQAEAAADAEQACACAAADQAAAEgEADQgRAPgQAAQgOAAgKgLg");
	this.shape_15.setTransform(246.6,33);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#34883F").s().p("AgcAuQgDgDAAgEQAAgDADgDQACgCAEAAIANgBIgBgdQAAgPACgQIgOABQgEAAgCgDQgDgCAAgEQAAgEACgCQADgCADgBIATAAQAKAAATADQAHABAAAHQAAAEgCADQgDACgDAAIgRgCIAAAdIgBAcIASAAQADAAADADQACACAAAEQAAADgCADQgDACgEAAIgKABIgLAAIgLABIgNABQgEAAgCgCg");
	this.shape_16.setTransform(238.9,33.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#34883F").s().p("AgSAzQgIgCgEgDQgEAAgCgCQgDgDAAgDIABgTIABgTIgBgTIAAgWQgBgDAEgEQAEgDADAAQADAAAIAEIALAFQARAGANANQAQAPAAAQQAAALgGAKQgFAKgKAGQgKAHgRAAIgKgBgAgVAgIAGACIAHABQAMAAAFgEQAHgDACgHQAEgGAAgHQAAgNgSgMQgEgEgVgIg");
	this.shape_17.setTransform(231,33.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#34883F").s().p("AgcAwQgHgGAAgVIABgXIACgaIgBgGIgBgHQAAgKAJAAQADAAACACIAOgDIALgBQAPAAALAEQAFACAAAGQAAADgCADQgDADgEAAIgDgBQgJgCgKAAIgIAAIgMADIgBAZIAXgDIAQgBQADAAADADQACACABAEQAAAGgIABIgQABIgZACIgBANQABANABABQABABAHAAIAKAAIAMAAIADAAIAFgBQADAAACACQAEADAAAEQAAAHgIABQgGACgSAAQgVAAgGgGg");
	this.shape_18.setTransform(222.2,32.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#34883F").s().p("AghAvQgDgDAAgDIAAgOIAAgPIAAgxQAAgEADgDQADgFAGABIAQABQAIABAFADQAbAOAAAUQAAAIgGAFQgFAGgMAEQARAKAJAKQACACAAADQAAAEgDACQgDADgDAAQgEAAgDgDQgTgSgVgHIABAVQAAADgDADQgCACgEAAQgEAAgCgCgAgSABIACAAQAQAAAFgBIAGgFIADgEQAAgHgJgHQgHgGgJgBIgHAAg");
	this.shape_19.setTransform(213.9,32.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#34883F").s().p("AgcAwQgCgDAAgDIAAgSIABgbIACgdQAAgRAJABIAGgBIAJAAQALAAAKAIQANAJAAANQAAAQgNAHQgMAJgOAAIgFAAIAAAdQAAADgDADQgCACgEAAQgDAAgDgCgAgLggIAAAJIgBAVIAEABQAIAAAHgFQAHgFAAgIQAAgGgHgEQgGgEgFAAIgEAAIgDABg");
	this.shape_20.setTransform(206.2,32.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgTAaQgKgIAAgPQAAgMAIgLQAJgNAQAAQAMAAAIAKQAGAJAAAOQAAAMgHALQgJALgOAAQgLAAgIgIgAgIgJQgDAGAAAGQAAAIAEAEQADADAEAAQAEAAAEgEQAFgEAAgIQABgSgLAAQgGAAgFAHg");
	this.shape_21.setTransform(193.5,34.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AACATQgCgFAAgOIgCABIgKAZQgBADgCABQgCAFgGAAQgDAAgDgGQgDgFgCgIIgHghIAAgJQAAgEACgCQADgCADAAQAHAAACAHIABAJIABAJIADAOIALgeQACgJAGAAQAGAAADAJIADARIADAQIAKgkQACgGAGAAQAEAAACACQADACAAAEIAAACIgNArQgCAGgFAGQgDAEgFAAQgIAAgEgQg");
	this.shape_22.setTransform(185.8,34.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgEAsQgDgDAAgDIAAgHIAAgHIgBgfIgMgBQgIgBAAgHQAAgDADgDQACgCAEAAIALAAIgBgGIAAgHQAAgDADgDQACgCAEAAQAHAAAAAQIAAAFIAHAAIAKAAQAFACAAAGQAAAEgDACQgCADgEAAIgDAAIgDgBIgGABIABAfIAAAEIAAADQAAAPgJAAQgCAAgCgCg");
	this.shape_23.setTransform(178.2,33.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgLA1QgCgCAAgEIAAgBIABgRIAAgeIgEAAIgEABQgDAAgDgCQgDgDAAgEQAAgFAHgCQACgBAJAAIABgIQABgOAGgHQAGgIAPAAQAMAAAAAIQAAAIgLAAQgIAAgDAGQgDAEgBAIIAAACIAMgBQAMAAAAAIQAAAJgNgBIgMABIAAAPIAAARQAAAMgBAHQgCAGgFAAQgDAAgDgCg");
	this.shape_24.setTransform(166.1,33.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgTAaQgKgIAAgPQAAgMAIgLQAJgNAQAAQAMAAAIAKQAGAJAAAOQAAAMgHALQgJALgOAAQgLAAgIgIgAgIgJQgDAGAAAGQAAAIAEAEQADADAEAAQAEAAAEgEQAFgEAAgIQABgSgLAAQgGAAgFAHg");
	this.shape_25.setTransform(159.3,34.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AARAvQgEADgFAAIgIABQgOABgJgKQgKgJAAgOQAAgSAKgIQAKgLANAAIAJABIAGAEIACgeQABgIAHABQAEAAACACQADACAAAEIgCAcIgBAZQAAAXABAHIABACQAAAEgDACQgDADgDgBQgFABgCgFgAgMACQgEAGAAALQAAAGAFAFQAFAFAGAAIAGgBIAGgEIACgCIAAgYQgCgEgEAAQgDgBgFAAQgHAAgFADg");
	this.shape_26.setTransform(146.4,32.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAMAdIgCgNIgBgOIABgDIAAgGIAAgCIAAgDQAAgFgCAAQgFAAgEAHQgFAHgDAIIAAAGIgBAGIAAAFIgBAGQAAAEgDACQgCACgDABQgEgBgDgCQgCgCAAgEIgBgGIAAgFIABgRIABgPIAAgGIgBgGQAAgDADgDQADgCADAAQAJAAAAAKIAAABQAKgKAIAAQAMAAAEAKQADAHAAANIAAAEIAAADIABANIACAMQAAAEgDACQgCACgEABQgIgBgBgHg");
	this.shape_27.setTransform(139.4,34.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgTAaQgKgIAAgPQAAgMAIgLQAJgNAQAAQAMAAAIAKQAGAJAAAOQAAAMgHALQgJALgOAAQgLAAgIgIgAgIgJQgDAGAAAGQAAAIAEAEQADADAEAAQAEAAAEgEQAFgEAAgIQABgSgLAAQgGAAgFAHg");
	this.shape_28.setTransform(132.4,34.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgSAbQgKgIAAgOQAAgKAIgOQALgPALAAQAHAAAJADQAKAFAAAFQAAAEgCACQgCADgEAAQgDAAgDgDQgEgDgIAAQgDAAgGAJQgFAJAAAFQAAAHAFAEQAEADAGAAQAEAAAGgDQAGgDACAAQAEAAACACQACADAAADQAAAFgKAFQgKAEgGAAQgMAAgJgIg");
	this.shape_29.setTransform(125.6,34.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgUAbQgLgIAAgPQAAgOAJgLQAJgMAOAAQALAAAHADQAKAFAAAKQAAAHgIAFIgPAGIgTAJQADADAFACQAEACAEAAQAIAAAGgEQAFgDADAAQAHAAAAAHQAAAHgKAEQgKAEgJAAQgNAAgKgHgAgIgOQgEAEgCAIIAOgGIAMgHQgFgDgGAAQgEAAgFAEg");
	this.shape_30.setTransform(118.7,34.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgQAgQgKgDAAgHQAAgGAIAAIAIABIAIACQALAAABgFQAAgDgJgEQgMgGgDgBQgKgGAAgJQAAgMAOgFQAIgCAOAAQAGAAADABQAFACAAAGQAAAMgHAAQgFAAgCgFIgFgBQgNAAAAAEQAAADAHAEIARAIQAJAGAAAIQAAALgKAGQgIAEgLAAQgIAAgGgDg");
	this.shape_31.setTransform(111.9,34.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgVAbQgKgIAAgPQAAgOAJgLQAJgMAOAAQALAAAHADQAKAFAAAKQAAAHgIAFIgPAGIgTAJQADADAFACQAEACAEAAQAIAAAGgEQAFgDADAAQAHAAAAAHQAAAHgKAEQgJAEgKAAQgNAAgLgHgAgIgOQgEAEgCAIIAOgGIAMgHQgEgDgHAAQgEAAgFAEg");
	this.shape_32.setTransform(99.4,34.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAOAuIgCgPIgCgOIABgFIAAgFIAAgFQAAgBgBgBQAAAAAAAAQgBAAAAAAQgBAAgBAAQgHAAgDAFQgDADgFAJQAAAXgDAFQgCAFgGAAQgDAAgDgDQgDgCAAgDIABgEIABgRIAAgoIAAgDIABgKIgBgFIgBgGQAAgEADgCQADgCADAAQAGAAADAGIABAMIgBANIAAAMQAFgEAFgDQADgCAGAAQALAAAFAGQAEAFAAAHIABAQIABAMIACANIABACQAAAEgDACQgDACgDAAQgHAAgCgGg");
	this.shape_33.setTransform(92.2,32.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgEAsQgDgDAAgDIAAgHIAAgHIgBgfIgMgBQgIgBAAgHQAAgDADgDQACgCAEAAIALAAIgBgGIAAgHQAAgDADgDQACgCAEAAQAHAAAAAQIAAAFIAHAAIAKAAQAFACAAAGQAAAEgDACQgCADgEAAIgDAAIgDgBIgGABIABAfIAAAEIAAADQAAAPgJAAQgCAAgCgCg");
	this.shape_34.setTransform(85.3,33.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgIANQgDgCAAgDQAAgCAFgGIAFgKQABgEAEAAQADAAACACQADACAAADIgFAIIgFAJQgCAFgCAAQgEAAgCgCg");
	this.shape_35.setTransform(421.1,18.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#690FA2").s().p("AgcAwQgHgGAAgVIABgXIABgaIAAgGIgBgHQAAgKAJAAQADAAACACIAOgDIAKgBQARAAAJAEQAGACAAAGQAAADgCADQgDADgDAAIgDgBQgKgCgLAAIgIAAIgLADIAAAZIAWgDIAPgBQAEAAADADQACACAAAEQAAAGgIABIgOABIgaACIAAANQAAANABABQABABAHAAIAKAAIAMAAIAEAAIADgBQAEAAADACQACADAAAEQAAAHgHABQgGACgSAAQgVAAgGgGg");
	this.shape_36.setTransform(414.7,12.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#690FA2").s().p("AgNAtQgHgTgKghIgFgRQgEgMAAgEQAAgEAEgDQACgCADAAQAHAAACAGIADALIAFAVIAKAeIANgkIAGgPQADgJAEgFQAEgEADAAQAEAAADADQADACgBAEIgBAFQgDAFgEAHIgEANIgRAqIgIAPQgCAFgDAAQgHAAgDgGg");
	this.shape_37.setTransform(406.2,12.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#690FA2").s().p("AgcAuQgDgDAAgEQAAgDADgDQACgCAEAAIANgBIgBgdQAAgPACgQIgOABQgEAAgCgDQgDgCAAgEQAAgEACgCQADgCADgBIATAAQAKAAATADQAHABAAAHQAAAEgCADQgDACgDAAIgRgCIAAAdIgBAcIASAAQADAAADADQACACAAAEQAAADgCADQgDACgEAAIgKABIgLAAIgLABIgNABQgEAAgCgCg");
	this.shape_38.setTransform(398.1,12.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#690FA2").s().p("AgFAuQgCgDAAgEIAAgCIAAgDIAAgJIgBgJIgBgVIgCgXIgDAAQgOAAgJgCQgHgCAAgGQAAgEADgCQACgDAFAAIAKABIAKABIAMAAIAJAAIAPAAIAOABQAEAAACACQADADAAAEQAAADgDADQgCACgEAAIgPgBIgQAAIACAaIABAXIABAHIAAAGQAAAFgCAEQgDAFgEAAQgCAAgDgCg");
	this.shape_39.setTransform(390.1,12.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#690FA2").s().p("AgbAmQgJgKAAgNQgBgUAUgWQAPgTAOAAIAFAAIAEABQAEgDADABQAHAAABAHIABAMQAAAEgCACQgCADgFABQgFAAgDgHQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAgBAAIgFAAQgHAAgJAMQgOAQAAAPQgBAGAFAFQAFAGAGAAQAEgBAHgDIAJgGQAFgEADAAQAEAAADAEQACACAAADQAAAEgEADQgRAPgQAAQgOAAgKgLg");
	this.shape_40.setTransform(381.6,12.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#690FA2").s().p("AgcAwQgHgGAAgVIABgXIACgaIgBgGIgBgHQAAgKAJAAQADAAACACIAOgDIAKgBQAQAAAKAEQAGACAAAGQAAADgCADQgCADgEAAIgEgBQgJgCgLAAIgIAAIgLADIAAAZIAWgDIAPgBQAFAAACADQADACgBAEQABAGgJABIgOABIgaACIAAANQAAANABABQABABAHAAIAKAAIAMAAIAEAAIADgBQAEAAADACQACADAAAEQAAAHgHABQgGACgSAAQgVAAgGgGg");
	this.shape_41.setTransform(373.7,12.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#690FA2").s().p("AgaArQgNgJAAgMQAAgKAJAAQAJAAAAAKQAAAEAGAEQAGAEAGAAQACAAABgIIAAgUIABgiIAAgEIgBAAIgGAAIgIgBQgEAAgCgCQgDgCAAgEQAAgJALAAIAHAAIAFAAIALAAIAMAAQARAAAAAJQAAADgCADQgDADgEAAIgDAAIgEgBIgFAAIAAAFQAAArgHAVQgFAPgKAAQgMAAgLgIg");
	this.shape_42.setTransform(365.2,13.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#690FA2").s().p("AgSAzQgIgCgEgDQgEAAgCgCQgDgDAAgDIAAgTIACgTIgBgTIgBgWQAAgDAEgEQAEgDADAAQADAAAIAEIALAFQARAGANANQAQAPAAAQQAAALgFAKQgGAKgKAGQgKAHgRAAIgKgBgAgVAgIAGACIAHABQAMAAAFgEQAGgDADgHQAEgGAAgHQAAgNgTgMQgEgEgUgIg");
	this.shape_43.setTransform(356.3,12.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#690FA2").s().p("AAWAkQgEgIgCgKIgQABIgNACIgKAWQgDAEgFAAQgDAAgDgCQgDgDAAgEQAAgDAJgSIAAgEQAAgDAGgCIAUgfQAOgYADABQAHgBADAJIAEAVIAJAnIADAIQADAGAAADQAAADgDADQgDADgDgBQgFAAgFgLgAgEAGIAHgCIAJgBIgEgSIgMAVg");
	this.shape_44.setTransform(346.6,13);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgYAgQgCgCAAgDIAAgoIAAgGIAAgGQAAgDACgDQADgCADAAQAIAAABAHQAJgIAOAAQAMAAAAARIAAAEQAAAKgIAAQgIAAAAgJIgBgGQgMACgGANIAAAeQAAADgCADQgDACgEAAQgDAAgDgDg");
	this.shape_45.setTransform(333.2,14.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgTAaQgKgIAAgPQAAgMAIgLQAJgNAQAAQAMAAAIAKQAGAJAAAOQAAAMgHALQgJALgOAAQgLAAgIgIgAgIgJQgDAGAAAGQAAAIAEAEQADADAEAAQAEAAAEgEQAFgEAAgIQABgSgLAAQgGAAgFAHg");
	this.shape_46.setTransform(326.4,14.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#0000FF").s().p("AgrAwQgDgCAAgEIABgHIAAgIIAAgLIAAgMIAAgKIAAgMIgBgLIAAgLQAAgEADgDQADgDAEAAQAFAAAGAIQAaApAdAYIAAgKIgBgoIgBgHIAAgHQAAgIAJAAQAKAAAAAfIAAALIAAAmIgBAKQgCAIgIAAQgEAAgGgFQgYgWgdgmIAAASIAAAPIAAAQQAAASgJAAQgFAAgCgDg");
	this.shape_47.setTransform(312.2,12.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#0000FF").s().p("AgYArQgRgNAAgeIABgJIAAgJIAAgIIAAgHQAAgEACgFQACgGAFAAQADAAADADQADABAAAEIAAALIAAALIgBAJIAAAJQAAAIACAIQADAKAFADQADACAKABQAPAAAFgdQAEgMAAgbQAAgEACgDQACgFAGAAQAEAAACAEQACABAAADQAAAagCAOQgEATgKAPQgFAGgHAEQgIAFgGAAQgQAAgIgGg");
	this.shape_48.setTransform(302,13.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#0000FF").s().p("AggAmQgOgLgBgSQAAgUAOgRQAPgVAVAAQAWABALAJQAMALAAAUQAAATgNASQgOAUgWAAQgSAAgNgLgAgTgSQgKANAAAOQABAKAHAHQAIAGAMAAQAMAAAKgOQAJgMAAgOQAAgOgHgEQgGgGgOAAQgMAAgKAOg");
	this.shape_49.setTransform(292.1,13);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#0000FF").s().p("AgrAwQgDgCAAgEIABgHIAAgIIAAgLIAAgMIAAgKIAAgMIgBgLIAAgLQAAgEADgDQADgDAEAAQAFAAAGAIQAaApAdAYIAAgKIgBgoIgBgHIAAgHQAAgIAJAAQAKAAAAAfIAAALIAAAmIgBAKQgCAIgIAAQgEAAgGgFQgYgWgdgmIAAASIAAAPIAAAQQAAASgJAAQgFAAgCgDg");
	this.shape_50.setTransform(281.7,12.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAPAdIgLAEIgFACQgPAAgIgIQgIgJAAgQQAAgNAMgMQALgKAOgBQAGABAIADQAJAEAAAGQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAIgBAHIgBAJQAAAKACAFIADAGIADAHQAAADgDADQgDACgDAAQgDgBgGgFgAgIgLQgGAHAAAGQAAAJADAEQADAFAGgBQACABAEgCQADgBADgDIgCgVIABgEIAAgGIgCgBIgCAAQgGAAgHAHg");
	this.shape_51.setTransform(267.2,14.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgQAgQgKgDAAgHQAAgGAIAAIAIABIAJACQAKAAABgFQAAgDgKgEQgLgGgEgBQgJgGAAgJQAAgMAOgFQAIgCAOAAQAGAAADABQAFACAAAGQAAAMgHAAQgFAAgCgFIgFgBQgNAAAAAEQAAADAHAEIARAIQAJAGAAAIQAAALgKAGQgJAEgJAAQgJAAgGgDg");
	this.shape_52.setTransform(254.6,14.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgHAtQgCgCAAgDIAAgMIAAgMIAAgOIAAgMQABgEACgCQADgCADgBQACABADACQACACAAAEIAAAMIgBAOIAAAMIABAMQgBADgCACQgDADgBAAQgEAAgDgDgAgFgfQgDgDAAgEQAAgEADgDQAEgCABAAQAFAAACACQADADAAAEQAAAEgDADQgCACgFAAQgBAAgEgCg");
	this.shape_53.setTransform(249.9,12.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#00CC00").s().p("AgFAuQgCgDAAgEIAAgCIAAgDIAAgJIgBgJIgBgVIgCgXIgDAAQgOAAgJgCQgHgCAAgGQAAgEADgCQACgDAFAAIAKABIAKABIAMAAIAJAAIAPAAIAOABQAEAAACACQADADAAAEQAAADgDADQgCACgEAAIgPgBIgQAAIACAaIABAXIABAHIAAAGQAAAFgCAEQgDAFgEAAQgCAAgDgCg");
	this.shape_54.setTransform(237.7,12.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#00CC00").s().p("AgrAwQgDgCAAgEIABgHIAAgIIAAgLIAAgMIAAgKIAAgMIgBgLIAAgLQAAgEADgDQADgDAEAAQAFAAAGAIQAaApAdAYIAAgKIgBgoIgBgHIAAgHQAAgIAJAAQAKAAAAAfIAAALIAAAmIgBAKQgCAIgIAAQgEAAgGgFQgYgWgdgmIAAASIAAAPIAAAQQAAASgJAAQgFAAgCgDg");
	this.shape_55.setTransform(227.9,12.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#00CC00").s().p("AgcAwQgHgGAAgVIABgXIACgaIgBgGIgBgHQAAgKAJAAQADAAACACIAOgDIAKgBQAQAAAKAEQAGACAAAGQAAADgCADQgCADgEAAIgEgBQgJgCgLAAIgIAAIgLADIAAAZIAWgDIAPgBQAEAAADADQADACgBAEQABAGgJABIgOABIgaACIgBANQAAANACABQABABAHAAIAKAAIAMAAIAEAAIADgBQAEAAADACQACADAAAEQAAAHgHABQgGACgSAAQgVAAgGgGg");
	this.shape_56.setTransform(218.8,12.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#00CC00").s().p("AAiApIgEgPIgHggIgJAZIgDAMIgGAMQgDAFgEAAQgGAAgDgGIgDgNIgJggIgIAeIgDANQgDAJgGAAQgFAAgCgDQgCgCAAgEQgBgJAFgPIAHgXIADgTQADgOAEgEQAEgFAFAAQAFAAADAGQADAGACAQQADARAFARQAGgQAGgXIADgPQAEgJAHAAQAHAAAEAKIADAQQADAZAGAUIAGAVQgBAEgDACQgDADgDAAQgHAAgDgKg");
	this.shape_57.setTransform(208.9,13);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#00CC00").s().p("AgcAwQgHgGAAgVIABgXIABgaIAAgGIgBgHQAAgKAJAAQADAAACACIAOgDIAKgBQARAAAJAEQAGACAAAGQAAADgCADQgDADgDAAIgDgBQgKgCgLAAIgIAAIgLADIAAAZIAWgDIAPgBQAEAAADADQACACAAAEQAAAGgIABIgOABIgaACIAAANQAAANABABQABABAHAAIAKAAIAMAAIAEAAIADgBQAEAAADACQACADAAAEQAAAHgHABQgGACgSAAQgVAAgGgGg");
	this.shape_58.setTransform(199.2,12.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#00CC00").s().p("AggAmIABgUQACgaAAgiQAAgDACgDQADgCADgBQAEABADACQACADAAADQAAAigBAaIgCAQQAPAAAWgHIADAAQAEAAACACQACADAAADQAAAGgFACQgIADgPADQgNADgJAAQgPAAAAgOg");
	this.shape_59.setTransform(191.5,13);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#00CC00").s().p("AgcAwQgCgDAAgDIAAgSIABgbIACgdQAAgRAJABIAGgBIAJAAQALAAAKAIQANAJAAANQAAAQgNAHQgMAJgOAAIgFgBIAAAeQAAADgDADQgCACgEAAQgDAAgDgCgAgLggIAAAJIgBAVIAEABQAIAAAHgFQAHgFAAgIQAAgGgHgEQgGgEgFAAIgEAAIgDABg");
	this.shape_60.setTransform(184.3,12.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#00CC00").s().p("AAiApIgDgPIgHggIgJAZIgFAMIgEAMQgEAFgEAAQgGAAgDgGIgEgNIgJggIgIAeIgCANQgDAJgHAAQgDAAgEgDQgCgCAAgEQABgJAEgPIAHgXIAEgTQADgOADgEQADgFAFAAQAGAAADAGQADAGACAQQADARAGARQAFgQAGgXIAEgPQADgJAHAAQAHAAADAKIADAQQAEAZAGAUIAFAVQAAAEgCACQgDADgEAAQgHAAgDgKg");
	this.shape_61.setTransform(175.2,13);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#00CC00").s().p("AggAmQgOgLAAgSQAAgUANgRQAPgVAVAAQAWABALAJQAMALAAAUQAAATgNASQgOAUgWAAQgSAAgNgLgAgTgSQgKANAAAOQAAAKAJAHQAHAGAMAAQAMAAAKgOQAIgMABgOQgBgOgGgEQgFgGgPAAQgMAAgKAOg");
	this.shape_62.setTransform(164.1,13);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#00CC00").s().p("AgbAmQgKgKAAgNQAAgUAUgWQAPgTAOAAIAGAAIADABQAEgDAEABQAGAAACAHIABAMQAAAEgCACQgDADgEABQgGAAgDgHQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAAAIgGAAQgHAAgJAMQgPAQAAAPQAAAGAFAFQAFAGAGAAQAFgBAGgDIAKgGQAFgEACAAQAEAAACAEQADACAAADQAAAEgEADQgQAPgRAAQgOAAgKgLg");
	this.shape_63.setTransform(155,12.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#00CC00").s().p("AgcAwQgHgGAAgVIABgXIACgaIgBgGIgBgHQAAgKAJAAQADAAACACIAOgDIAKgBQAQAAAKAEQAGACAAAGQAAADgCADQgCADgEAAIgEgBQgJgCgLAAIgIAAIgLADIAAAZIAWgDIAPgBQAEAAADADQADACgBAEQABAGgJABIgOABIgaACIgBANQAAANACABQABABAHAAIAKAAIAMAAIAEAAIAEgBQADAAADACQACADAAAEQAAAHgHABQgGACgSAAQgVAAgGgGg");
	this.shape_64.setTransform(141.4,12.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#00CC00").s().p("AgNAtQgHgTgKghIgFgRQgDgMgBgEQAAgEADgDQADgCADAAQAGAAADAGIACALIAGAVIAKAeIANgkIAFgPQAFgJADgFQADgEAEAAQAEAAADADQACACABAEIgCAFQgEAFgDAHIgEANIgRAqIgHAPQgDAFgDAAQgHAAgDgGg");
	this.shape_65.setTransform(132.8,12.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#00CC00").s().p("AgcAuQgDgDAAgEQAAgDADgDQACgCAEAAIANgBIgBgdQAAgPACgQIgOABQgEAAgCgDQgDgCAAgEQAAgEACgCQADgCADgBIATAAQAKAAATADQAHABAAAHQAAAEgCADQgDACgDAAIgRgCIAAAdIgBAcIASAAQADAAADADQACACAAAEQAAADgCADQgDACgEAAIgKABIgLAAIgLABIgNABQgEAAgCgCg");
	this.shape_66.setTransform(124.7,12.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#00CC00").s().p("AgFAuQgCgDAAgEIAAgCIAAgDIAAgJIgBgJIgBgVIgCgXIgDAAQgOAAgJgCQgHgCAAgGQAAgEADgCQACgDAFAAIAKABIAKABIAMAAIAJAAIAPAAIAOABQAEAAACACQADADAAAEQAAADgDADQgCACgEAAIgPgBIgQAAIACAaIABAXIABAHIAAAGQAAAFgCAEQgDAFgEAAQgCAAgDgCg");
	this.shape_67.setTransform(116.8,12.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#00CC00").s().p("AgbAmQgKgKABgNQgBgUAUgWQAPgTAOAAIAGAAIADABQADgDAFABQAGAAACAHIAAAMQAAAEgBACQgDADgEABQgGAAgDgHQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAAAIgGAAQgIAAgIAMQgOAQAAAPQgBAGAFAFQAEAGAHAAQAFgBAGgDIAKgGQAEgEADAAQAEAAACAEQADACAAADQAAAEgEADQgRAPgQAAQgOAAgKgLg");
	this.shape_68.setTransform(108.3,12.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#00CC00").s().p("AgcAwQgHgGAAgVIABgXIACgaIgBgGIgBgHQAAgKAJAAQADAAACACIAOgDIAKgBQAQAAALAEQAFACAAAGQAAADgCADQgCADgEAAIgEgBQgKgCgKAAIgHAAIgMADIAAAZIAWgDIAPgBQAEAAADADQACACAAAEQABAGgJABIgPABIgZACIgBANQAAANACABQABABAHAAIAKAAIAMAAIADAAIAFgBQADAAADACQADADAAAEQgBAHgHABQgGACgSAAQgVAAgGgGg");
	this.shape_69.setTransform(100.3,12.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#00CC00").s().p("AgaArQgNgJAAgMQAAgKAJAAQAJAAAAAKQAAAEAGAEQAGAEAGAAQACAAABgIIAAgUIABgiIAAgEIgBAAIgGAAIgIgBQgEAAgCgCQgDgCAAgEQAAgJALAAIAHAAIAFAAIALAAIAMAAQARAAAAAJQAAADgCADQgDADgEAAIgDAAIgEgBIgFAAIAAAFQAAArgHAVQgFAPgKAAQgMAAgLgIg");
	this.shape_70.setTransform(91.8,13.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#00CC00").s().p("AgeAwQgDgEAAgDIAAhBIAAgJIAAgIQABgGAKgCIAQgBQAKAAALAIQANAJAAANQAAAIgDAFQgCAEgFADQAGACAFAGQAFAHAAAHQAAAIgJAIQgGAFgHACQgMAGgXAAQgEAAgDgDgAgQAhQALAAALgEQALgDAAgEQAAgFgHgDQgGgDgEgBIgQAAgAgQgTIAAANIAJABQASgCAAgNQAAgEgGgEQgFgFgGAAIgKAAg");
	this.shape_71.setTransform(83.5,12.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#00CC00").s().p("AghAmQgOgLABgSQAAgUANgRQAPgVAVAAQAWABALAJQAMALAAAUQAAATgNASQgOAUgWAAQgSAAgOgLgAgTgSQgJANAAAOQgBAKAJAHQAHAGAMAAQAMAAAKgOQAIgMABgOQgBgOgFgEQgHgGgOAAQgMAAgKAOg");
	this.shape_72.setTransform(74,13);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AAMAdIgCgNIgBgOIABgDIAAgGIAAgCIAAgDQAAgFgCAAQgFAAgEAHQgFAHgDAJIAAAFIgBAGIAAAFIgBAGQAAAEgDACQgCACgDAAQgEAAgDgCQgCgCAAgEIgBgGIAAgFIABgRIABgQIAAgFIgBgGQAAgDADgDQADgDADABQAJgBAAALIAAAAQAJgJAJAAQAMAAAEAKQADAHAAANIAAAEIAAADIABANIACAMQAAAEgDACQgDACgDAAQgIAAgBgHg");
	this.shape_73.setTransform(59.9,14.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AAWAkQgEgIgCgKIgQABIgNACIgKAWQgDAEgFAAQgDAAgDgCQgDgDAAgEQAAgDAJgSIAAgEQAAgDAGgCIAUgfQAOgYADABQAHgBADAJIAEAVIAJAnIADAIQADAGAAADQAAADgDADQgDADgDgBQgFAAgFgLgAgEAGIAHgCIAJgBIgEgSIgMAVg");
	this.shape_74.setTransform(51.6,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.btn_goNext},{t:this.btn_goBack},{t:this.instance_1},{t:this.btn_menu}]}).wait(96));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(284.2,201.2,537.1,401.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;