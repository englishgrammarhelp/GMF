(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	manifest: [
		{src:"sounds/acompletesentencecontains.mp3?1495059858496", id:"acompletesentencecontains"},
		{src:"sounds/wrong_answer.mp3?1495059858496", id:"wrong_answer"},
		{src:"sounds/DiscoGroove.mp3?1495059858496", id:"DiscoGroove"},
		{src:"sounds/right_answer.mp3?1495059858496", id:"right_answer"},
		{src:"sounds/High_Screaming_Gtr.mp3?1495059858496", id:"High_Screaming_Gtr"},
		{src:"sounds/OrganBlip.mp3?1495059858496", id:"OrganBlip"},
		{src:"sounds/powersynth.mp3?1495059858496", id:"powersynth"},
		{src:"sounds/salsa_groove.mp3?1495059858496", id:"salsa_groove"}
	]
};



// symbols:



(lib.letters = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAVAhIgEgUIgRADIgPADIgKAYQgCAEgEAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAQAAgEAJgUIgBgDQAAgFAGgCIATgeQANgXADAAQAFgBACAIIAEAVIAKAqIADAKIACAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgGAAgFgOgAgHAEIAVgEIgFgXg");
	this.shape.setTransform(4.5,8.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgcAwQgDgCAAgDIAAgTIACgYIABgaIABgRQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAIgDALAAQAJAAALAIQAMAIAAANQAAARgNAHQAJAEAFAFQAFAFAAAGQAAAHgIAIQgGAFgHACQgMAGgWAAQgDAAgCgDgAgSAZIAAANQARgBAIgEIAJgFQADgEAAgBQAAgDgIgEIgLgEIgFgBIgDAAIgCAAIgIgBIAAAPgAgPglIgBAMIgBAYIAKABQAHgBAHgFQAGgGAAgJQAAgGgHgFQgGgFgGAAIgJAAg");
	this.shape_1.setTransform(4.2,8.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgZAmQgJgKAAgMQAAgUASgXQAPgSANAAIAGAAIAEABQADgEAEAAQADAAACAGIABAMQAAAEgBACQgCACgDAAQgFAAgCgFIgDgFIgHAAQgIAAgKAOQgPASAAAQQAAAIAFAFQAGAHAHAAQAEgBAIgDIAKgHQAEgDACAAQABAAAAAAQABAAABABQAAAAABAAQAAABAAAAQABAAAAABQABABAAAAQAAABAAAAQAAABAAAAQAAADgCADQgRAPgPgBQgNABgJgLg");
	this.shape_2.setTransform(3.9,8.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSAzQgIgCgDgDIgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgBAAAAIABgUIABgUIgBgUIAAgXQABgCACgDQACgDADAAQACAAAIAEIALAGQARAGANAMQAOAPAAAQQAAALgEAKQgGAKgJAGQgJAHgRAAIgKgBgAgWgQIAAAQIgCAjIACABQAGADAIAAQANAAAGgEQAGgEAEgHQADgIAAgHQABgQgUgNQgFgEgXgKg");
	this.shape_3.setTransform(4.7,8.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgaAwQgHgFAAgVIAAgJIABgKIgBgDIABgCIACgbIgBgHIgBgHQAAgHAHAAQABAAAAAAQABAAAAAAQABAAAAABQABAAABAAIAOgDIALgBQAPAAAJAEQAEACABAEQAAABgBAAQAAABAAABQAAAAAAABQgBAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAIgBgBQgMgDgJAAIgKABIgNADIABAHIgBAYIAagCIAPgCQAAAAABAAQAAAAABABQAAAAABAAQABABAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAEgGAAIgPACIgbACIAAAJIgBAHQAAAOACADQABACAJAAIAKgBIAMAAIADAAIAEgBQAHAAAAAHQAAAFgFABQgHACgRAAQgUAAgFgGg");
	this.shape_4.setTransform(4.1,8.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgdAzQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAIAAgmIABgkIAAgIIgBgIQAAgDACgCQABgBAAAAQABgBAAAAQABAAAAAAQABAAABAAIAEABIAOgCIAJgBQAHAAAJACQANADAAAFQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgCACgDAAIgCgBQgIgDgNAAIgIABIgNACIAAAbQAMgDAGAAIATABQAGABAAAGQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAIgKAAIgIAAQgEAAgOADIgBAsQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABgBAAQAAAAgBAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBg");
	this.shape_5.setTransform(4.1,8.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfArQgIgJAAgRQAAgRAIgPQAHgSANgKQAIgIAHAAQAGABAJADQALAFAAAFQABADgCACQAAABgBAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgFgCQgKgFgGgBQgEABgEAFIgIAIQgOATAAAWQAAAMADAEQAEAFALAAQAKAAAIgHQAJgIADgNQgSABgKAFIgCABQgEAAgCgCQgBgCAAgDQAAgEADgCQAMgGAiAAQAAAAABAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAAAQAAAAABAAQAAABAAAAQAAABAAAAQAAAFgDACQgFATgMAMQgMAMgQAAQgQgBgHgIg");
	this.shape_6.setTransform(4.3,8.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgmAxQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIABgUIABgUIAAgJIAAgLIAAgPIABgOQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAABgBQAAAAAAAAQABAAABAAQAAgBABAAQABAAAAABQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAQABABAAAAQAAABAAAAQAAABAAABIgBAPIAAAPIAAAOIAagDQAQgDALgBIABgaIABgKQACgHAEAAIAEABQABABAAABQAAAAABABQAAAAAAABQAAAAAAABIAAACIgBAJIAAAFIAAAFIgBATIgBARIAAAPIABAPQAAAAAAABQAAAAAAABQgBAAAAABQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAgBgBAAQAAgBAAAAQAAgBAAAAIgBgPIAAgPIAAgJQgLABgPADIgaAEIgBARIgBAQQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBAAQgBABAAAAQgBAAAAgBQgBAAgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape_7.setTransform(4.9,8.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgbAuQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAAAQAAgDACgCQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAIANgBIABgMIAAgLIgBgKIACgjIgIAAIgJAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgCgCAAgDQAAgGAGgBIATAAQALAAATADQAGAAAAAGQAAADgDACQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAIgKgBIgKgBIgCAhIAAALIABALIgBALIAUgBQABAAAAAAQABABABAAQAAAAABAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAADgBACQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAIgLABIgKAAIgLABIgMABQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBgBg");
	this.shape_8.setTransform(3.4,8.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgZArQgMgJAAgLQAAgIAHAAQAGAAAAAIQAAAFAIAFQAHAFAGAAQADAAACggIABgkIAAgGIgDAAIgGgBIgIAAQgDAAgCgBQgBgCAAgDQAAgHAIAAIAHAAIAFABIALgBIAMAAQAPAAAAAHQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQgCADgDAAIgEgBIgEAAIgHAAIAAAHQAAAugGAVQgEAOgJAAQgLAAgLgIg");
	this.shape_9.setTransform(4.2,9.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

	// circle
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AAxg9QAUAaAAAjQAAAkgUAaQgVAbgcgBQgcABgUgbQgUgaAAgkQAAgjAUgaQAUgaAcgBQAcABAVAag");
	this.shape_10.setTransform(4,9);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.9,-3.5,15.9,22.5);


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


(lib.fcb_rightOut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("AhABAIAAgKIB2AAIAAh2IAKAAIAACAg");
	this.shape.setTransform(6.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13,13);


(lib.fcb_rightIn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D4D0D8").s().p("Ag2A2IAAgKIBiAAIAAhiIAKAAIAABsg");
	this.shape.setTransform(6.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,11,11);


(lib.fcb_leftOut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("Ag7A7IAAh2IB2AAIAAAKIhsAAIAABsg");
	this.shape.setTransform(6,6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,12,12);


(lib.fcb_leftIn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D4D0D8").s().p("AgxAxIAAhiIBiAAIAAAKIhYAAIAABYg");
	this.shape.setTransform(6,6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,10,10);


(lib.fcb_hitArea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("AhABAIAAiAICAAAIAACAg");
	this.shape.setTransform(6.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13,13);


(lib.fcb_check_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("AgLAiIAAAAIgVgWIgCgDIABgRQgBgGAGAAIAEACIAQAQIAggjIAFgCQAGAAAAAGIAAARIgCAEIgmAmIgEACg");
	this.shape.setTransform(3.6,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7.1,7);


(lib.fcb_check = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgLAiIAAAAIgVgWIgCgDIABgRQgBgGAGAAIAEACIAQAQIAggjIAFgCQAGAAAAAGIAAARIgCAEIgmAmIgEACg");
	this.shape.setTransform(3.6,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7.1,7);


(lib.fcb_background_pressed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgsAtIAAhZIBZAAIAABZg");
	this.shape.setTransform(4.5,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,9,9);


(lib.fcb_background_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgsAtIAAhZIBZAAIAABZg");
	this.shape.setTransform(4.5,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,9,9);


(lib.fcb_background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsAtIAAhZIBZAAIAABZg");
	this.shape.setTransform(4.5,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,9,9);


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


(lib.blank_gr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("Aj9CqIAAlSIH7AAIAAFSg");
	this.shape.setTransform(32.5,17,1.275,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65,34);


(lib.animsharkfin1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0033FF").ss(0.1,1,1).p("AgaALQAFgGAJgBIAGAAQAGABAIgKQAEgEADABQAFABAHgD");
	this.shape.setTransform(0.6,1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AAPAOQgFgUALgZQgngBgCBA");
	this.shape_1.setTransform(0,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AAUgfQgKAZAFAUQgJAMgGgBIgGAAQgIABgFAGQABhAAmABg");
	this.shape_2.setTransform(0,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(10));

	// Layer 5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0033FF").ss(0.1,1,1).p("AAaABQgUAJgfADQAagVAJgEQgGAPAWgCg");
	this.shape_3.setTransform(0.6,1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0099FF").s().p("AAKgMQgGAPAWgCQgUAJgfADQAagVAJgEg");
	this.shape_4.setTransform(0.6,1.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#0033FF").ss(0.1,1,1).p("AAZAFQgUAJgdADAgYAHQAYgTAJgE");
	this.shape_5.setTransform(1.8,1.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0099FF").s().p("AgYAHQAYgTAJgEQAQANAAAIQgUAJgdADg");
	this.shape_6.setTransform(1.8,1.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#0033FF").ss(0.1,1,1).p("AgKgKQA6gIhAAfQASgRgMgGg");
	this.shape_7.setTransform(3,1.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0099FF").s().p("AgKgKQA6gIhAAfQASgRgMgGg");
	this.shape_8.setTransform(3,1.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#0033FF").ss(0.1,1,1).p("AgKgLQA9gThEAwQAMgSgFgLg");
	this.shape_9.setTransform(5.4,0.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0099FF").s().p("AgKgLQA9gThEAwQAMgSgFgLg");
	this.shape_10.setTransform(5.4,0.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#0033FF").ss(0.1,1,1).p("AgUARQARgQgOgLQBOgWhRAxg");
	this.shape_11.setTransform(6.1,0.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0099FF").s().p("AgRgKQBOgWhRAxQARgQgOgLg");
	this.shape_12.setTransform(6.1,0.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#0033FF").ss(0.1,1,1).p("AgVgJQBXgRhWApQAUgXgVgBg");
	this.shape_13.setTransform(7.9,-0.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0099FF").s().p("AgVgJQBXgRhWApQAUgXgVgBg");
	this.shape_14.setTransform(7.9,-0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#0033FF").ss(0.1,1,1).p("AgMALQAzgfgzANQAMACgMAQg");
	this.shape_15.setTransform(9.7,-0.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0099FF").s().p("AgMgHQAzgNgzAfQAMgQgMgCg");
	this.shape_16.setTransform(9.7,-0.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#0033FF").ss(0.1,1,1).p("AgJAJQAogXgnAJQAIADgJALg");
	this.shape_17.setTransform(11,-1.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0099FF").s().p("AgIgFQAngJgoAXQAJgLgIgDg");
	this.shape_18.setTransform(11,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_18},{t:this.shape_17}]},1).to({state:[]},1).wait(1));

	// Layer 6
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#0033FF").ss(0.1,1,1).p("AAFgEIgMAIIAPABg");
	this.shape_19.setTransform(-1,2.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgHAEIAMgIIADAJg");
	this.shape_20.setTransform(-1,2.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#0033FF").ss(0.1,1,1).p("AAGgJIgTAOQAKAKARgLQgPgEAHgJg");
	this.shape_21.setTransform(0.8,1.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgNAFIATgOQgHAJAPAEQgKAGgFAAQgHAAgFgFg");
	this.shape_22.setTransform(0.8,1.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#0033FF").ss(0.1,1,1).p("AgOAQQA4gsgxASQAHAAgOAag");
	this.shape_23.setTransform(4.2,1.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgHgKQAxgSg4AsQAOgagHAAg");
	this.shape_24.setTransform(4.2,1.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#0033FF").ss(0.1,1,1).p("AgKgMQAIACgPAZQBDgmg8ALg");
	this.shape_25.setTransform(6.1,0.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgKgMQA8gLhDAmQAPgZgIgCg");
	this.shape_26.setTransform(6.1,0.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#0033FF").ss(0.1,1,1).p("AgHgIQAGABgKASQAugbgqAIg");
	this.shape_27.setTransform(11.3,-1.5,0.4,0.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgHgIQAqgIguAbQAKgSgGgBg");
	this.shape_28.setTransform(11.3,-1.5,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_20},{t:this.shape_19}]},2).to({state:[{t:this.shape_22},{t:this.shape_21}]},1).to({state:[{t:this.shape_24,p:{x:4.2,y:1.1}},{t:this.shape_23,p:{x:4.2,y:1.1}}]},1).to({state:[{t:this.shape_24,p:{x:4.6,y:1.2}},{t:this.shape_23,p:{x:4.6,y:1.2}}]},1).to({state:[{t:this.shape_26,p:{x:6.1,y:0.6,scaleX:1,scaleY:1}},{t:this.shape_25,p:{x:6.1,y:0.6,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.shape_26,p:{x:8.1,y:-0.1,scaleX:1,scaleY:1}},{t:this.shape_25,p:{x:8.1,y:-0.1,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.shape_26,p:{x:9.8,y:-1.3,scaleX:0.694,scaleY:0.694}},{t:this.shape_25,p:{x:9.8,y:-1.3,scaleX:0.694,scaleY:0.694}}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.1,-4.5,7.5,8.5);


(lib.sentence1menu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("acompletesentencecontains");
	}
	this.frame_25 = function() {
		playSound("OrganBlip");
	}
	this.frame_34 = function() {
		playSound("OrganBlip");
	}
	this.frame_48 = function() {
		playSound("OrganBlip");
	}
	this.frame_52 = function() {
		playSound("OrganBlip");
	}
	this.frame_69 = function() {
		playSound("OrganBlip");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(23).call(this.frame_25).wait(9).call(this.frame_34).wait(14).call(this.frame_48).wait(4).call(this.frame_52).wait(17).call(this.frame_69).wait(45));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF99").s().p("AguBOQgMgKAAghIACgnIACgqIgBgKIgBgLQAAgPAPAAQAEAAAEACIAXgEIASgCQAaAAAPAGQAKAEAAAJQAAAFgEAFQgEAEgHAAIgEAAQgQgFgQAAIgPABIgSAEIgBApIAmgEIAZgCQAGAAAEAEQAEAEAAAGQAAAKgNACIgYACIgqAEIgBAVQAAAUACADQACABALAAIASAAIATgBIAGAAIAGgBQAGAAAEAEQAFADAAAHQAAAMgMACQgLACgeAAQghAAgKgJg");
	this.shape.setTransform(103.7,-61.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF99").s().p("AgsA+QgQgQAAgWQAAghAegjQAagfAZAAIAIABIAGAAQAFgEAGAAQALAAACAMQACAJAAALQAAAFgDAFQgEAFgIAAQgJAAgEgKQgCgEgCgBIgIgBQgNAAgPAUQgYAbAAAYQAAALAIAIQAHAIALAAQAIAAAKgFIAQgKQAIgGAEAAQAGAAAEAFQAEAEAAAFQAAAGgFAFQgcAYgbAAQgYAAgPgRg");
	this.shape_1.setTransform(89.5,-61.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF99").s().p("AhHBPQgEgFAAgGIABgMIABgMIAAgSIAAgSIAAgSIAAgUIgCgSIgBgSQAAgHAGgEQAFgFAHAAQAHAAAJANQAtBCAtAoIAAgPIgBhCIgBgMIgBgLQAAgOAPAAQARAAAAA0IgBAQIAAA/IgCAQQgCANgNAAQgHAAgJgIQgogkgvg9IgBAeIABAYIAAAZQAAAegPAAQgHAAgFgEg");
	this.shape_2.setTransform(73.4,-61.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF99").s().p("AguBOQgMgKAAghIACgnIACgqIgBgKIgBgLQAAgPAPAAQAEAAAEACIAXgEIASgCQAaAAAPAGQAKAEAAAJQAAAFgEAFQgEAEgHAAIgEAAQgQgFgQAAIgPABIgSAEIgBApIAmgEIAZgCQAGAAAEAEQAEAEAAAGQAAAKgNACIgYACIgqAEIgBAVQAAAUACADQACABALAAIASAAIATgBIAGAAIAGgBQAGAAAEAEQAFADAAAHQAAAMgMACQgLACgeAAQghAAgKgJg");
	this.shape_3.setTransform(57.6,-61.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF99").s().p("AgJBKQgEgEAAgGIAAgEIABgFIgBgOIgBgOIgCgkIgDglIgFAAQgXAAgNgDQgMgDAAgLQAAgFAEgEQAEgFAHAAIARACIAQABIATAAIAQAAIAYABIAXABQAGAAAEAEQAFAEAAAGQAAAGgFAEQgEAEgGAAIgZgBIgZgBIADApIACAoIABAKIABALQAAAIgEAGQgEAIgHAAQgEAAgFgEg");
	this.shape_4.setTransform(42.5,-61.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF99").s().p("AhHBPQgEgFAAgGIABgMIABgMIAAgSIAAgSIAAgSIAAgUIgCgSIgBgSQAAgHAGgEQAFgFAHAAQAHAAAJANQAtBCAtAoIAAgPIgBhCIgBgMIgBgLQAAgOAPAAQARAAAAA0IgBAQIAAA/IgCAQQgCANgNAAQgHAAgJgIQgogkgvg9IgBAeIABAYIAAAZQAAAegPAAQgHAAgFgEg");
	this.shape_5.setTransform(25.6,-61.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFF99").s().p("AguBOQgMgKAAghIACgnIACgqIgBgKIgBgLQAAgPAPAAQAEAAAEACIAXgEIASgCQAaAAAPAGQAKAEAAAJQAAAFgEAFQgEAEgHAAIgEAAQgQgFgQAAIgPABIgSAEIgBApIAmgEIAZgCQAGAAAEAEQAEAEAAAGQAAAKgNACIgYACIgqAEIgBAVQAAAUACADQACABALAAIASAAIATgBIAGAAIAGgBQAGAAAEAEQAFADAAAHQAAAMgMACQgLACgeAAQghAAgKgJg");
	this.shape_6.setTransform(9.8,-61.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFF99").s().p("Ag2BCQgMgKAAgMQAAgGADgFQAEgEAHAAQAJAAAFAJQAGANAUAAQAPAAARgHQARgIAAgKQAAgNgLgEQgHgDgVgBQgSAAgOgFQgSgIAAgPQAAgUAVgRQAVgRAYAAQAJAAAPAEQATAHgBAHQAAAFgDAEQgEAFgGAAIgPgCIgOgCQgOAAgJAGQgNAHAAAHQAAAEAEACQAEADAHABIAYACQAXABANALQAPAKAAAXQAAAagfANQgWALgcAAQgaAAgPgMg");
	this.shape_7.setTransform(-5.3,-61);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFF99").s().p("AguBOQgMgKAAghIACgnIACgqIgBgKIgBgLQAAgPAPAAQAEAAAEACIAXgEIASgCQAaAAAPAGQAKAEAAAJQAAAFgEAFQgEAEgHAAIgEAAQgQgFgQAAIgPABIgSAEIgBApIAmgEIAZgCQAGAAAEAEQAEAEAAAGQAAAKgNACIgYACIgqAEIgBAVQAAAUACADQACABALAAIASAAIATgBIAGAAIAGgBQAGAAAEAEQAFADAAAHQAAAMgMACQgLACgeAAQghAAgKgJg");
	this.shape_8.setTransform(-29.9,-61.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFF99").s().p("AgJBKQgEgEAAgGIAAgEIABgFIgBgOIgBgOIgCgkIgDglIgFAAQgXAAgNgDQgMgDAAgLQAAgFAEgEQAEgFAHAAIARACIAQABIATAAIAQAAIAYABIAXABQAGAAAEAEQAFAEAAAGQAAAGgFAEQgEAEgGAAIgZgBIgZgBIADApIACAoIABAKIABALQAAAIgEAGQgEAIgHAAQgEAAgFgEg");
	this.shape_9.setTransform(-45,-61.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFF99").s().p("AguBOQgMgKAAghIACgnIACgqIgBgKIgBgLQAAgPAPAAQAEAAAEACIAXgEIASgCQAaAAAPAGQAKAEAAAJQAAAFgEAFQgEAEgHAAIgEAAQgQgFgQAAIgPABIgSAEIgBApIAmgEIAZgCQAGAAAEAEQAEAEAAAGQAAAKgNACIgYACIgqAEIgBAVQAAAUACADQACABALAAIASAAIATgBIAGAAIAGgBQAGAAAEAEQAFADAAAHQAAAMgMACQgLACgeAAQghAAgKgJg");
	this.shape_10.setTransform(-59.6,-61.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFF99").s().p("Ag1A9IACggQACgrAAg2QAAgGAEgEQAEgEAGAAQAHAAAEAEQAEAEAAAGQAAA2gDAsIgCAZQAYAAAkgLIAFgBQAGAAAEAFQAEAEAAAFQAAAJgJAEQgMAFgZAEQgWAEgOAAQgZAAAAgWg");
	this.shape_11.setTransform(-72.9,-61.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFF99").s().p("AgtBNQgEgEAAgFIAAgdIACgtIADgvQAAgbAOACIAKgCIAPAAQASAAARANQAUAOAAAVQAAAagVAOQgSAOgYAAIgJgBIAAAvQAAAFgDAEQgEAEgGAAQgGAAgEgEgAgRgnIgCAjIAGABQAPAAAKgHQALgJAAgNQAAgJgLgGQgJgHgKAAIgHAAIgDAAIAAAPg");
	this.shape_12.setTransform(-85.6,-61.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFF99").s().p("AA3BCIgGgYQgEgTgHggIgOApIgHATQgEALgEAHQgFAKgIAAQgKAAgEgMIgHgTQgIgagGgbIgNAwIgDAXQgFAPgLAAQgHAAgEgFQgDgEgBgGQAAgQAHgYIAMgmIAGgfQAFgXAFgGQAFgIAJAAQAJAAAEAKQAEAJAFAbQAEAbAKAdQAJgcAKglIAGgYQAGgOALAAQALgBAFASQADAGADATQAFAqAKAfIAJAjQAAAGgFAEQgFADgFAAQgMABgFgRg");
	this.shape_13.setTransform(-101.3,-61.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFF99").s().p("Ag1A/QgXgTAAgdQAAgiAWgcQAYggAjAAQAlAAARAQQASAQAAAhQAAAhgUAcQgXAigkAAQgeAAgVgSgAgfgeQgPAWgBAXQABAQANALQAMALATAAQAVAAAPgXQAOgUAAgYQAAgVgJgIQgKgJgYAAQgUABgQAVg");
	this.shape_14.setTransform(-120.2,-61.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFF99").s().p("AgsA+QgQgQAAgWQAAghAegjQAagfAZAAIAIABIAGAAQAFgEAGAAQALAAACAMQACAJAAALQAAAFgDAFQgEAFgIAAQgJAAgEgKQgCgEgCgBIgIgBQgNAAgPAUQgYAbAAAYQAAALAIAIQAHAIALAAQAIAAAKgFIAQgKQAIgGAEAAQAGAAAEAFQAEAEAAAFQAAAGgFAFQgcAYgbAAQgYAAgPgRg");
	this.shape_15.setTransform(-135.9,-61.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFF99").s().p("AAzBNQgIAAgHgTQgGgMgEgQIgZACIgXADIgQAiQgFAHgHAAQgGAAgEgEQgFgEAAgGQAAgFAPgeIgBgGQAAgFAKgDQAOgXASgbQAYgnAFAAQAMAAAEAOIAGAhIAPBBIAGAOQADAJAAAEQAAAGgEAEQgEAEgFAAIgCAAgAgGAJIALgCIAPgBIgHggIgTAjg");
	this.shape_16.setTransform(-161.4,-61.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFF99").s().p("AgOAVQgEgEAAgEQAAgDAGgLIAJgQQADgHAGAAQAFABAEADQAEADAAAFQAAACgGALIgIARQgEAGgGABQgGAAgDgEg");
	this.shape_17.setTransform(143.1,9.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFF99").s().p("AgxBNQgFgFAAgFIAAhrIgBgPQAAgHABgFQABgKARgDQAHgCASAAQASAAASANQAUAOAAAXQAAALgEAIQgDAHgJAGQAKAEAIAKQAJALAAAKQAAAOgPAMQgKAIgLAFQgWAIglABQgGgBgEgFgAgbA3QASgCATgFQASgGAAgFQgBgJgLgGQgJgEgHgCIgbAAgAgbg2IABAWIgBAVQAKACAFgBQAdgCAAgUQAAgIgJgHQgIgHgLAAIgQAAg");
	this.shape_18.setTransform(131.7,0.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFF99").s().p("Ag3BMQgEgEAAgGIAAgXIABgXIAAhQQAAgHAEgFQAFgHAJAAIAaACQAOACAIAFQAsAWAAAhQAAANgJAJQgJAKgTAHQAbAPAOAQQAEAEAAAFQAAAGgFAEQgEAEgGAAQgFAAgFgEQgfgdgjgMIABAhQAAAGgEAEQgEAEgGAAQgHAAgEgEgAgfADIAFAAQAZAAAKgFQAFgCAFgFQAEgEAAgCQAAgMgOgKQgMgKgQgCIgMgBg");
	this.shape_19.setTransform(117.2,0.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFF99").s().p("AgVBIQgMgdgQg3IgIgbQgGgUAAgHQAAgGAFgEQADgEAHAAQAKAAADAKIAFASIAJAhQAIAcAIAWIAVg8IAJgYQAHgPAHgIQAEgFAHAAQAFAAAFAEQAEAEAAAGQAAAEgDAEQgFAIgFALIgIAVIgbBFQgFAMgGAMQgFAIgGAAQgLAAgEgKg");
	this.shape_20.setTransform(88.2,1.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFF99").s().p("AAYAvIgQAHQgIACgCAAQgZAAgMgNQgNgOAAgaQAAgXASgRQATgSAXAAQAKAAANAGQAPAGAAAJQAAAEgCACIgBALIgBAOQAAARACAJIAFAKIAEAKQAAAGgEADQgEAEgFAAQgGAAgKgJgAgNgTQgLALAAAMQABAOAEAHQAFAGALAAQAEAAAFgCQAGgCAFgEQgDgXAAgLIABgIIABgJIgDgCIgEAAQgMAAgKALg");
	this.shape_21.setTransform(64.1,3.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFF99").s().p("AAcBNQgHAEgIACIgNAAQgXAAgPgOQgQgPAAgXQAAgbAQgQQAPgRAYAAQAHAAAGACQAGABAFAEIADgwQACgNALAAQAGABAEAEQAEADAAAGQAAAPgDAeIgCArQAAAkACAMIABAEQAAAFgEAEQgEADgGAAQgHAAgEgGgAgUAEQgHAJAAARQAAAMAIAHQAIAJALgBQAGAAAEgCQADgBAGgFIAEgDIAAgmQgEgGgFgCQgGgDgHAAQgNAAgIAHg");
	this.shape_22.setTransform(40.8,0.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFF99").s().p("AAUAvIgCgWIgCgVIAAgHIABgJIAAgEIAAgEQAAgJgEAAQgJAAgGALQgJAMgEAPIgBAJIgBAJIAAAJIgBAJQAAAGgEAEQgEAEgGAAQgHAAgEgEQgEgEAAgGIAAgJIgBgIIACgcIABgaIAAgJIgBgKQAAgGAFgDQAEgEAGAAQANAAABAQIAAABQAPgPAPAAQATAAAIAQQAEALAAAWIAAAHIAAAFQAAAIADAMQACANAAAIQAAAFgEAEQgEAEgGAAQgNAAgCgMg");
	this.shape_23.setTransform(28.4,3.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFF99").s().p("AAZAvIgRAHQgHACgEAAQgYAAgNgNQgMgOAAgaQAAgXATgRQARgSAYAAQAKAAAMAGQAQAGAAAJQAAAEgCACIgBALIgCAOQABARADAJIAEAKIAEAKQAAAGgEADQgEAEgGAAQgFAAgJgJgAgNgTQgLALAAAMQAAAOAGAHQAEAGAKAAQAFAAAGgCQAFgCAFgEQgDgXAAgLIAAgIIACgJIgEgCIgCAAQgNAAgKALg");
	this.shape_24.setTransform(16,3.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFF99").s().p("AgrBGQgVgPAAgTQAAgRAOABQAPgBAAARQAAAGAKAGQALAIAJAAQADAAACgOIAAggQACgVAAgkIgBgGIgBAAIgLAAIgMAAQgGAAgEgEQgFgEAAgHQAAgOASAAIALABIAJAAIASgBIAUgBQAbAAAAAQQAAAGgDADQgFAFgGAAIgGAAIgGAAIgIAAIAAAGQAABIgLAhQgHAZgSAAQgTAAgTgNg");
	this.shape_25.setTransform(-51.5,1.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFF99").s().p("AgxBNQgFgFAAgFIAAhrIgBgPQAAgHABgFQABgKARgDQAHgCASAAQASAAASANQAUAOAAAXQAAALgEAIQgDAHgJAGQAKAEAIAKQAJALAAAKQAAAOgPAMQgKAIgLAFQgWAIglABQgGgBgEgFgAgbA3QASgCATgFQASgGAAgFQgBgJgLgGQgJgEgHgCIgbAAgAgbg2IABAWIgBAVQAKACAFgBQAdgCAAgUQAAgIgJgHQgIgHgLAAIgQAAg");
	this.shape_26.setTransform(-65.9,0.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFF99").s().p("AgoBFQgbgUAAgyIABgOIAAgQIAAgLIABgMQAAgIACgHQAEgJAHAAQAGgBAEAEQAFAEAAAGIAAARIAAARIAAAQIgBAOQAAANADANQAFARAIAGQAEAEARgBQAZABAJgvQAFgWAAgrQAAgGAEgGQAEgGAIAAQAIAAADAEQADAFAAAEQAAApgEAWQgGAhgQAYQgIAJgKAHQgNAJgMgBQgbAAgMgKg");
	this.shape_27.setTransform(-81.7,1.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFF99").s().p("Ag2BCQgNgKAAgMQAAgHAEgDQAEgFAHAAQAKAAADAJQAHANAUAAQAPAAARgIQASgIAAgJQgBgNgKgEQgIgDgVAAQgSgBgNgFQgUgHABgRQAAgTAVgRQAVgRAXAAQALAAAPAFQARAFABAIQgBAFgDAEQgEAFgHAAIgOgCIgPgCQgNAAgKAGQgMAHAAAHQAAAEAEACQAEADAHABIAYABQAXACANALQAOALAAAVQAAAbgdAOQgXAKgcAAQgaAAgPgMg");
	this.shape_28.setTransform(-97.6,1.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFF99").s().p("AAYAvIgQAHQgIACgCAAQgZAAgMgNQgNgOAAgaQAAgXASgRQATgSAXAAQAKAAANAGQAPAGAAAJQAAAEgCACIgCALIAAAOQAAARACAJIAFAKIAEAKQAAAGgEADQgEAEgFAAQgGAAgKgJgAgNgTQgLALAAAMQABAOAEAHQAFAGALAAQAEAAAFgCQAGgCAFgEQgDgXAAgLIABgIIABgJIgDgCIgEAAQgMAAgKALg");
	this.shape_29.setTransform(-121.7,3.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFF99").s().p("AgcA1QgPgGAAgLQAAgKAMAAQAFAAAIADQAKADAEAAQATAAAAgIQAAgGgOgGQgTgJgGgDQgPgKAAgOQAAgVAWgHQANgEAYAAQAKAAAGADQAGADAAAKQAAASgKAAQgKAAgCgIIgIgBQgXAAAAAHQAAAEANAGQAUAKAHAEQAPAKAAANQAAASgQAJQgNAHgSAAQgNAAgMgEg");
	this.shape_30.setTransform(-143.9,3.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFF99").s().p("AAUAvIgCgWIgCgVIAAgHIABgJIAAgEIAAgEQAAgJgEAAQgJAAgGALQgJAMgEAPIgBAJIgBAJIAAAJIgBAJQAAAGgEAEQgEAEgGAAQgHAAgEgEQgEgEAAgGIAAgJIgBgIIACgcIABgaIAAgJIgBgKQAAgGAFgDQAEgEAGAAQANAAABAQIAAABQAPgPAPAAQATAAAIAQQAEALAAAWIAAAHIAAAFQAAAIADAMQACANAAAIQAAAFgEAEQgEAEgGAAQgNAAgCgMg");
	this.shape_31.setTransform(-155.3,3.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFF99").s().p("AgMBKQgEgEAAgGIAAgTIAAgSIABgXIABgVQAAgGAEgEQAEgEAGAAQAEAAAEAEQAEAEAAAGIgBAVIgBAXIAAASIABATQAAAGgEAEQgEAEgFAAQgGAAgEgEgAgIgzQgFgEAAgHQAAgGAFgEQAFgFAEAAQAHAAAEAFQAFAEAAAGQAAAHgFAEQgEAEgHAAQgEAAgFgEg");
	this.shape_32.setTransform(-164.6,1.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFF99").s().p("AAZAvIgRAHQgHACgDAAQgZAAgNgNQgMgOAAgaQAAgXASgRQATgSAXAAQAKAAAMAGQAQAGAAAJQAAAEgCACIgBALIgBAOQAAARACAJIAFAKIAEAKQAAAGgEADQgEAEgGAAQgEAAgKgJgAgNgTQgLALAAAMQAAAOAGAHQAFAGAJAAQAEAAAHgCQAFgCAFgEQgDgXAAgLIABgIIABgJIgEgCIgDAAQgLAAgLALg");
	this.shape_33.setTransform(-174.6,3.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFF99").s().p("AgIBHQgEgEAAgFIAAgLIAAgMIgCgzIgTgBQgNgCAAgMQAAgFAEgEQAEgEAGAAIASABIgBgLIAAgKQAAgGAEgEQAEgDAGAAQANAAAAAZIAAAIIAKAAQAMAAAFABQAIADAAAKQAAAFgEAEQgEAEgGAAIgFAAIgGAAIgJABIACA0IAAAFIAAAGQAAAXgPAAQgEAAgEgDg");
	this.shape_34.setTransform(-186.4,1.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFF99").s().p("AAUAvIgCgWIgCgVIAAgHIABgJIAAgEIAAgEQAAgJgEAAQgJAAgGALQgJAMgEAPIgBAJIgBAJIAAAJIgBAJQAAAGgEAEQgEAEgGAAQgHAAgEgEQgEgEAAgGIAAgJIgBgIIACgcIABgaIAAgJIgBgKQAAgGAFgDQAEgEAGAAQANAAABAQIAAABQAPgPAPAAQATAAAIAQQAEALAAAWIAAAHIAAAFQAAAIADAMQACANAAAIQAAAFgEAEQgEAEgGAAQgNAAgCgMg");
	this.shape_35.setTransform(-197.8,3.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFF99").s().p("AggArQgPgOgBgYQgBgVAOgSQAPgVAaAAQAUAAANARQAKAPAAAVQAAAWgMARQgPATgWAAQgTAAgNgNgAgNgQQgGAKAAALQAAAMAHAHQAFAFAHAAQAHAAAHgGQAHgHABgMQABgfgSgBQgLAAgHAMg");
	this.shape_36.setTransform(-210.1,3.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFF99").s().p("AgfAsQgQgNAAgWQAAgTAOgVQARgZAUAAQALAAANAFQASAIAAAJQAAAFgDAEQgEAEgGAAQgEAAgHgFQgGgFgMAAQgGAAgKAQQgIAPAAAJQAAAKAHAHQAIAFAKAAQAHAAAKgFQAKgFADAAQAFAAAEAEQAEAEAAAFQAAAIgSAIQgPAHgKAAQgVAAgPgNg");
	this.shape_37.setTransform(-222,3.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFF99").s().p("AguBOQgMgKAAghIACgnIACgqIgBgKIgBgLQAAgPAPAAQAEAAAEACIAXgEIASgCQAaAAAPAGQAKAEAAAJQAAAFgEAFQgEAEgHAAIgEAAQgQgFgQAAIgPABIgSAEIgBApIAmgEIAZgCQAGAAAEAEQAEAEAAAGQAAAKgNACIgYACIgqAEIgBAVQAAAUACADQACABALAAIASAAIATgBIAGAAIAGgBQAGAAAEAEQAFADAAAHQAAAMgMACQgLACgeAAQghAAgKgJg");
	this.shape_38.setTransform(-29.9,-61.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFF99").s().p("AgJBKQgEgEAAgGIAAgEIABgFIgBgOIgBgOIgCgkIgDglIgFAAQgXAAgNgDQgMgDAAgLQAAgFAEgEQAEgFAHAAIARACIAQABIATAAIAQAAIAYABIAXABQAGAAAEAEQAFAEAAAGQAAAGgFAEQgEAEgGAAIgZgBIgZgBIADApIACAoIABAKIABALQAAAIgEAGQgEAIgHAAQgEAAgFgEg");
	this.shape_39.setTransform(-45,-61.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFF99").s().p("AguBOQgMgKAAghIACgnIACgqIgBgKIgBgLQAAgPAPAAQAEAAAEACIAXgEIASgCQAaAAAPAGQAKAEAAAJQAAAFgEAFQgEAEgHAAIgEAAQgQgFgQAAIgPABIgSAEIgBApIAmgEIAZgCQAGAAAEAEQAEAEAAAGQAAAKgNACIgYACIgqAEIgBAVQAAAUACADQACABALAAIASAAIATgBIAGAAIAGgBQAGAAAEAEQAFADAAAHQAAAMgMACQgLACgeAAQghAAgKgJg");
	this.shape_40.setTransform(-59.6,-61.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFF99").s().p("AgsA+QgQgQAAgWQAAghAegjQAagfAZAAIAIABIAGAAQAFgEAGAAQALAAACAMQACAJAAALQAAAFgDAFQgEAFgIAAQgJAAgEgKQgCgEgCgBIgIgBQgNAAgPAUQgYAbAAAYQAAALAIAIQAHAIALAAQAIAAAKgFIAQgKQAIgGAEAAQAGAAAEAFQAEAEAAAFQAAAGgFAFQgcAYgbAAQgYAAgPgRg");
	this.shape_41.setTransform(-135.9,-61.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#0000CC").s().p("AgJBKQgEgEAAgGIAAgEIABgFIgBgOIgBgOIgCgkIgDglIgFAAQgXAAgNgDQgMgDAAgLQAAgFAEgEQAEgFAHAAIARACIAQABIATAAIAQAAIAYABIAXABQAGAAAEAEQAFAEAAAGQAAAGgFAEQgEAEgGAAIgZgBIgZgBIADApIACAoIABAKIABALQAAAIgEAGQgEAIgHAAQgEAAgFgEg");
	this.shape_42.setTransform(-8.2,0.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#0000CC").s().p("AgsA+QgQgQAAgWQAAghAegjQAagfAZAAIAIABIAGAAQAFgEAGAAQALAAACAMQACAJAAALQAAAFgDAFQgEAFgIAAQgJAAgEgKQgCgEgCgBIgIgBQgNAAgPAUQgYAbAAAYQAAALAIAIQAHAIALAAQAIAAAKgFIAQgKQAIgGAEAAQAGAAAEAFQAEAEAAAFQAAAGgFAFQgcAYgbAAQgYAAgPgRg");
	this.shape_43.setTransform(-23,1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#0000CC").s().p("AguBOQgMgKAAghIACgnIACgqIgBgKIgBgLQAAgPAPAAQAEAAAEACIAXgEIASgCQAaAAAPAGQAKAEAAAJQAAAFgEAFQgEAEgHAAIgEAAQgQgFgQAAIgPABIgSAEIgBApIAmgEIAZgCQAGAAAEAEQAEAEAAAGQAAAKgNACIgYACIgqAEIgBAVQAAAUACADQACABALAAIASAAIATgBIAGAAIAGgBQAGAAAEAEQAFADAAAHQAAAMgMACQgLACgeAAQghAAgKgJg");
	this.shape_44.setTransform(-36.8,0.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#0000CC").s().p("AgrBGQgVgPAAgTQAAgRAOABQAPgBAAARQAAAGAKAGQALAIAJAAQADAAACgOIAAggQACgVAAgkIgBgGIgBAAIgLAAIgMAAQgGAAgEgEQgFgEAAgHQAAgOASAAIALABIAJAAIASgBIAUgBQAbAAAAAQQAAAGgDADQgFAFgGAAIgGAAIgGAAIgIAAIAAAGQAABIgLAhQgHAZgSAAQgTAAgTgNg");
	this.shape_45.setTransform(-51.5,1.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#0000CC").s().p("AgxBNQgFgFAAgFIAAhrIgBgPQAAgHABgFQABgKARgDQAHgCASAAQASAAASANQAUAOAAAXQAAALgEAIQgDAHgJAGQAKAEAIAKQAJALAAAKQAAAOgPAMQgKAIgLAFQgWAIglABQgGgBgEgFgAgbA3QASgCATgFQASgGAAgFQgBgJgLgGQgJgEgHgCIgbAAgAgbg2IABAWIgBAVQAKACAFgBQAdgCAAgUQAAgIgJgHQgIgHgLAAIgQAAg");
	this.shape_46.setTransform(-65.9,0.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#0000CC").s().p("AgoBFQgbgUAAgyIABgOIAAgQIAAgLIABgMQAAgIACgHQAEgJAHAAQAGgBAEAEQAFAEAAAGIAAARIAAARIAAAQIgBAOQAAANADANQAFARAIAGQAEAEARgBQAZABAJgvQAFgWAAgrQAAgGAEgGQAEgGAIAAQAIAAADAEQADAFAAAEQAAApgEAWQgGAhgQAYQgIAJgKAHQgNAJgMgBQgbAAgMgKg");
	this.shape_47.setTransform(-81.7,1.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#0000CC").s().p("Ag2BCQgNgKAAgMQAAgHAEgDQAEgFAHAAQAKAAADAJQAHANAUAAQAPAAARgIQASgIAAgJQgBgNgKgEQgIgDgVAAQgSgBgNgFQgUgHABgRQAAgTAVgRQAVgRAXAAQALAAAPAFQARAFABAIQgBAFgDAEQgEAFgHAAIgOgCIgPgCQgNAAgKAGQgMAHAAAHQAAAEAEACQAEADAHABIAYABQAXACANALQAOALAAAVQAAAbgdAOQgXAKgcAAQgaAAgPgMg");
	this.shape_48.setTransform(-97.6,1.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFF99").s().p("AgKAJQgFgEAAgFQAAgEAFgEQAFgFAFABQAHgBAEAFQAFAEAAAEQAAAFgFAEQgFAFgGAAQgFAAgFgFg");
	this.shape_49.setTransform(150.1,133.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFF99").s().p("AAUAyQgNAFgMAAQgPAAgJgGQgMgHgCgOQgEgZAAgSQAAgNADgRQACgMAMAAQAGAAAEAEQAEADAAAGIgBAOIgCAPQAAAOACAJQAAALACAHIAFABIAFABQAJAAAOgDIAAgSIAAgPQAAgVACgQQABgMANAAQAGAAAEAEQAEAEAAAFIgCAkIAAATIAAAVIABAGIAAAHQAAAFgEAEQgEAEgGAAQgJAAgEgIg");
	this.shape_50.setTransform(84.6,128.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFF99").s().p("AgIBHQgEgEAAgFIAAgLIAAgMIgCgzIgTgBQgNgCAAgMQAAgFAEgEQAEgEAGAAIASABIgBgLIAAgKQAAgGAEgEQAEgDAGAAQANAAAAAZIAAAIIAKAAQAMAAAFABQAIADAAAKQAAAFgEAEQgEAEgGAAIgFAAIgGAAIgJABIACA0IAAAFIAAAGQAAAXgPAAQgEAAgEgDg");
	this.shape_51.setTransform(73.3,126.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFF99").s().p("AgfAsQgQgNAAgWQAAgTAPgVQAQgZAUAAQAKAAAPAFQARAIAAAJQAAAFgEAEQgDAEgGAAQgFAAgGgFQgGgFgMAAQgGAAgKAQQgIAPAAAJQAAAKAHAHQAIAFAKAAQAHAAAKgFQAKgFACAAQAGAAAEAEQAEAEAAAFQAAAIgSAIQgPAHgKAAQgVAAgPgNg");
	this.shape_52.setTransform(61.7,128.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFF99").s().p("AAUAyQgNAFgMAAQgPAAgJgGQgMgHgCgOQgEgZAAgSQAAgNADgRQACgMAMAAQAGAAAEAEQAEADAAAGIgBAOIgCAPQAAAOACAJQAAALACAHIAFABIAFABQAJAAAOgDIAAgSIAAgPQAAgVACgQQABgMANAAQAGAAAEAEQAEAEAAAFIgCAkIAAATIAAAVIABAGIAAAHQAAAFgEAEQgEAEgGAAQgJAAgEgIg");
	this.shape_53.setTransform(38,128.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFF99").s().p("AgpBSQgEgEAAgGIAAgnIAAgmQAAgWgCgQIgBgVQAAgIAEgGQAEgGAIAAQAFAAAEADQAEAEAAAFIAAACQAHgEAHgCQAFgCAHAAQAXAAALAUQAIAPAAAYQAAAUgNAPQgNAQgXAAQgHAAgKgCIAAAqQAAAGgEAEQgEADgGAAQgGAAgEgDgAgEgwQgHAEgHAFIABApQAJACAIAAQAKAAAGgFQAFgHAAgLIgBgTQgDgMgKAAQgHAAgEACg");
	this.shape_54.setTransform(26.1,131);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFF99").s().p("AgJBQQgEgEAAgGIAAiMQAAgGAFgEQAEgDAEAAQAGAAAEADQAEAEAAAGIAACGQAAAUgOAAQgFAAgEgEg");
	this.shape_55.setTransform(6.3,125.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFF99").s().p("AAZAvIgRAHQgHACgEAAQgYAAgNgNQgMgOAAgaQAAgXASgRQASgSAYAAQAKAAAMAGQAQAGAAAJQAAAEgCACIgBALIgBAOQAAARADAJIAEAKIAEAKQAAAGgEADQgEAEgGAAQgFAAgJgJgAgNgTQgLALAAAMQAAAOAGAHQAFAGAJAAQAEAAAHgCQAFgCAFgEQgDgXAAgLIABgIIABgJIgEgCIgDAAQgLAAgLALg");
	this.shape_56.setTransform(-3.2,128.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFF99").s().p("AgMBKQgEgEAAgGIAAgTIAAgSIABgXIABgVQAAgGAEgEQAEgEAGAAQAEAAAEAEQAEAEAAAGIgBAVIgBAXIAAASIABATQAAAGgEAEQgEAEgFAAQgGAAgEgEgAgIgzQgFgEAAgHQAAgGAFgEQAFgFAEAAQAHAAAEAFQAFAEAAAGQAAAHgFAEQgEAEgHAAQgEAAgFgEg");
	this.shape_57.setTransform(-24.8,126.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFF99").s().p("AgIA7QgEgEAAgGQAAgLgCgXQgDgVAAgLIgBgLQgMAHgMAQIgBACIgBAfIAAAHIAAAIQAAAFgFADQgEADgGAAQgJAAgDgHQgCgFAAgMIAAgkIAAgPIgBgPQAAgJAEgHQAEgKAHAAQAGAAAEAFQAFAEAAAGIgBAJQAPgSAOAAQAQAAAFAMQAHgGAHgDQAIgDAJAAQAUAAAHAUQABAFADAXQADAPAFAnQAAAFgEAEQgFAEgGAAQgMAAgCgMIgDgdIgEgcQgDgTgEAAQgCAAgJAFQgIAFgEADQAAAMADAUQADAWAAALQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_58.setTransform(-37,128.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFF99").s().p("AgnA1QgDgEgBgFIAAhCIAAgKIABgJQAAgGAEgEQADgDAGAAQALAAACALQARgNAWAAQAVAAgBAbIAAAHQAAAQgOAAQgNAAAAgNIAAgLQgWAEgKAUIABAyQAAAFgEAEQgEAEgGAAQgHAAgDgEg");
	this.shape_59.setTransform(-51.2,128.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFF99").s().p("AgiAsQgRgNAAgYQAAgYAOgSQAPgTAYAAQARAAAMAFQAQAIAAAQQAAALgNAJQgGAEgRAGIghAPQAFAFAHADQAHADAHAAQAOAAAKgGQAIgFAFAAQALAAAAAKQAAAMgRAHQgPAGgQAAQgWAAgQgLgAgNgXQgGAGgFANIAYgKQALgGAJgGQgHgEgLAAQgIAAgHAHg");
	this.shape_60.setTransform(-63.5,128.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFF99").s().p("AgIBHQgEgEAAgFIAAgLIAAgMIgCgzIgTgBQgNgCAAgMQAAgFAEgEQAEgEAGAAIASABIgBgLIAAgKQAAgGAEgEQAEgDAGAAQANAAAAAZIAAAIIAKAAQAMAAAFABQAIADAAAKQAAAFgEAEQgEAEgGAAIgFAAIgGAAIgJABIACA0IAAAFIAAAGQAAAXgPAAQgEAAgEgDg");
	this.shape_61.setTransform(-75.1,126.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFF99").s().p("AAXBLQgCgIgCgQIgCgYIAAgIIABgHIgBgJQgBgDgEAAQgLAAgIAIQgEAFgJAPQAAAlgDAHQgEAJgJAAQgGAAgEgEQgEgEAAgFIABgGIABgcIAAhCIAAgEIABgQIgBgJIgBgKQAAgFAEgEQAEgEAGAAQAKAAAEALQACAHAAAMIgBAVIAAAUQAHgHAJgFQAGgDAKAAQASAAAHAKQAGAHABAOIABAZIACAUIAEAUIAAADQAAAHgEADQgEAEgGAAQgLAAgDgKg");
	this.shape_62.setTransform(-97.1,125.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFF99").s().p("AgIBHQgEgEAAgFIAAgLIAAgMIgCgzIgTgBQgNgCAAgMQAAgFAEgEQAEgEAGAAIASABIgBgLIAAgKQAAgGAEgEQAEgDAGAAQANAAAAAZIAAAIIAKAAQAMAAAFABQAIADAAAKQAAAFgEAEQgEAEgGAAIgFAAIgGAAIgJABIACA0IAAAFIAAAGQAAAXgPAAQgEAAgEgDg");
	this.shape_63.setTransform(-109.3,126.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFF99").s().p("AgMBKQgEgEAAgGIAAgTIAAgSIABgXIABgVQAAgGAEgEQAEgEAGAAQAEAAAEAEQAEAEAAAGIgBAVIgBAXIAAASIABATQAAAGgEAEQgEAEgFAAQgGAAgEgEgAgIgzQgFgEAAgHQAAgGAFgEQAFgFAEAAQAHAAAEAFQAFAEAAAGQAAAHgFAEQgEAEgHAAQgEAAgFgEg");
	this.shape_64.setTransform(-117.9,126.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFF99").s().p("AADAgQgDgKgBgYIgDAFIgQAnQgBAEgDADQgEAHgJABQgFAAgFgJQgGgJgDgPIgKg1IgCgOQAAgGAFgDQAEgEAGAAQALAAADAKIACAPIABAOIAEAYQAIgSAKgfQAEgOAKAAQALAAAEAPIAFAbIAFAbIAQg8QADgJAKAAQAGAAAEAEQAFADAAAGIgBADQgKAogLAfQgDAJgHAKQgFAHgIAAQgNgBgIgYg");
	this.shape_65.setTransform(-129.2,128.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFF99").s().p("AgcA1QgPgGAAgLQAAgKAMAAQAFAAAIADQAJADAGAAQASAAAAgIQAAgGgOgGQgUgJgFgDQgOgKAAgOQgBgVAWgHQANgEAYAAQALAAAEADQAHADAAAKQAAASgKAAQgKAAgCgIIgIgBQgXAAAAAHQAAAEAMAGQAVAKAHAEQAPAKAAANQAAASgRAJQgMAHgSAAQgOAAgLgEg");
	this.shape_66.setTransform(-152.8,128.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFF99").s().p("AAcBNQgHAEgIACIgNAAQgXAAgPgOQgQgPAAgXQAAgcAQgPQAPgRAYAAQAHAAAGACQAGABAFAEIADgwQACgNALAAQAGAAAEAFQAEAEAAAFQAAAPgDAeIgCArQAAAkACAMIABAEQAAAGgEADQgEADgGAAQgHAAgEgGgAgUAEQgHAJAAARQAAAMAIAHQAIAJALgBQAGAAAEgBQADgCAGgFIAEgDIAAgmQgEgGgFgCQgGgDgHAAQgNAAgIAHg");
	this.shape_67.setTransform(-165.1,125.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFF99").s().p("AAUAvIgCgWIgCgVIAAgHIABgJIAAgEIAAgEQAAgJgEAAQgJAAgGALQgJAMgEAPIgBAJIgBAJIAAAJIgBAJQAAAGgEAEQgEAEgGAAQgHAAgEgEQgEgEAAgGIAAgJIgBgIIACgcIABgaIAAgJIgBgKQAAgGAFgDQAEgEAGAAQANAAABAQIAAABQAPgPAPAAQATAAAIAQQAEALAAAWIAAAHIAAAFQAAAIADAMQACANAAAIQAAAFgEAEQgEAEgGAAQgNAAgCgMg");
	this.shape_68.setTransform(-177.5,128.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFF99").s().p("AgiAsQgRgNAAgYQAAgYAOgSQAPgTAYAAQARAAAMAFQAQAIAAAQQAAALgNAJQgGAEgRAGIghAPQAFAFAHADQAHADAHAAQAOAAAKgGQAIgFAFAAQALAAAAAKQAAAMgRAHQgPAGgQAAQgWAAgQgLgAgNgXQgGAGgFANIAYgKQALgGAJgGQgHgEgLAAQgIAAgHAHg");
	this.shape_69.setTransform(-190.2,128.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFF99").s().p("AAcBNQgHAEgIACIgNAAQgXAAgPgOQgQgPAAgXQAAgcAQgPQAPgRAYAAQAHAAAGACQAGABAFAEIADgwQACgNALAAQAGAAAEAFQAEAEAAAFQAAAPgDAeIgCArQAAAkACAMIABAEQAAAGgEADQgEADgGAAQgHAAgEgGgAgUAEQgHAJAAARQAAAMAIAHQAIAJALgBQAGAAAEgBQADgCAGgFIAEgDIAAgmQgEgGgFgCQgGgDgHAAQgNAAgIAHg");
	this.shape_70.setTransform(-213.3,125.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFF99").s().p("AAUAvIgCgWIgCgVIAAgHIABgJIAAgEIAAgEQAAgJgEAAQgJAAgGALQgJAMgEAPIgBAJIgBAJIAAAJIgBAJQAAAGgEAEQgEAEgGAAQgHAAgEgEQgEgEAAgGIAAgJIgBgIIACgcIABgaIAAgJIgBgKQAAgGAFgDQAEgEAGAAQANAAABAQIAAABQAPgPAPAAQATAAAIAQQAEALAAAWIAAAHIAAAFQAAAIADAMQACANAAAIQAAAFgEAEQgEAEgGAAQgNAAgCgMg");
	this.shape_71.setTransform(-225.7,128.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFF99").s().p("AAYAvIgQAHQgIACgDAAQgYAAgMgNQgNgOAAgaQAAgXATgRQARgSAYAAQAKAAANAGQAPAGAAAJQAAAEgCACIgCALIgBAOQAAARADAJIAFAKIAEAKQAAAGgEADQgEAEgFAAQgFAAgLgJgAgNgTQgKALAAAMQAAAOAEAHQAGAGAKAAQADAAAGgCQAGgCAFgEQgDgXAAgLIAAgIIACgJIgDgCIgDAAQgMAAgLALg");
	this.shape_72.setTransform(-238.1,128.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFF99").s().p("AgOAVQgEgDAAgFQAAgDAHgLIAJgRQACgFAGgBQAFAAAFAEQADAEAAAEQAAACgHALIgHAQQgEAIgGgBQgGAAgDgDg");
	this.shape_73.setTransform(113.4,72.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFF99").s().p("AgnA1QgDgEgBgGIAAhBIAAgJIABgKQAAgFADgEQAEgEAGAAQAMAAABAMQARgOAWAAQAVAAAAAbIAAAHQgBAQgOAAQgNAAAAgOIAAgKQgVAEgLAUIABAxQAAAGgEAEQgEAEgHAAQgGAAgDgEg");
	this.shape_74.setTransform(103.4,66.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFF99").s().p("AgiAsQgRgNAAgYQAAgYAOgSQAPgTAYAAQARAAAMAFQAQAIAAAQQAAALgNAJQgGAEgRAGIghAPQAFAFAHADQAHADAHAAQAOAAAKgGQAIgFAFAAQALAAAAAKQAAAMgRAHQgPAGgQAAQgWAAgQgLgAgNgXQgGAGgFANIAYgKQALgGAJgGQgHgEgLAAQgIAAgHAHg");
	this.shape_75.setTransform(91.1,66);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFF99").s().p("AgIBHQgEgEAAgFIAAgLIAAgMIgCgzIgTgBQgNgCAAgMQAAgFAEgEQAEgEAGAAIASABIgBgLIAAgKQAAgGAEgEQAEgDAGAAQANAAAAAZIAAAIIAKAAQAMAAAFABQAIADAAAKQAAAFgEAEQgEAEgGAAIgFAAIgGAAIgJABIACA0IAAAFIAAAGQAAAXgPAAQgEAAgEgDg");
	this.shape_76.setTransform(79.5,64.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFF99").s().p("AgIBHQgEgEAAgFIAAgLIAAgMIgCgzIgTgBQgNgCAAgMQAAgFAEgEQAEgEAGAAIASABIgBgLIAAgKQAAgGAEgEQAEgDAGAAQANAAAAAZIAAAIIAKAAQAMAAAFABQAIADAAAKQAAAFgEAEQgEAEgGAAIgFAAIgGAAIgJABIACA0IAAAFIAAAGQAAAXgPAAQgEAAgEgDg");
	this.shape_77.setTransform(68.6,64.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFF99").s().p("AgiAsQgRgNAAgYQAAgYAOgSQAPgTAYAAQARAAAMAFQAQAIAAAQQAAALgNAJQgGAEgRAGIghAPQAFAFAHADQAHADAHAAQAOAAAKgGQAIgFAFAAQALAAAAAKQAAAMgRAHQgPAGgQAAQgWAAgQgLgAgNgXQgGAGgFANIAYgKQALgGAJgGQgHgEgLAAQgIAAgHAHg");
	this.shape_78.setTransform(56.6,66);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFF99").s().p("AgJBQQgEgEAAgGIAAiMQAAgGAFgDQAEgEAEAAQAGAAAEAEQAEADAAAGIAACHQAAATgOAAQgFAAgEgEg");
	this.shape_79.setTransform(46.9,63.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFF99").s().p("AgJBQQgEgEAAgGIAAiMQAAgGAFgDQAEgEAEAAQAGAAAEAEQAEADAAAGIAACHQAAATgOAAQgFAAgEgEg");
	this.shape_80.setTransform(19.9,63.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFF99").s().p("AAYAvIgQAHQgIACgDAAQgYAAgNgNQgMgOAAgaQAAgXATgRQARgSAYAAQAKAAAMAGQAQAGAAAJQAAAEgCACIgCALIgBAOQAAARAEAJIAEAKIAEAKQAAAGgEADQgEAEgGAAQgEAAgLgJgAgNgTQgKALAAAMQAAAOAEAHQAGAGAJAAQAEAAAGgCQAGgCAFgEQgDgXAAgLIAAgIIACgJIgEgCIgCAAQgMAAgLALg");
	this.shape_81.setTransform(10.4,66.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFF99").s().p("AgIBHQgEgEAAgFIAAgLIAAgMIgCgzIgTgBQgNgCAAgMQAAgFAEgEQAEgEAGAAIASABIgBgLIAAgKQAAgGAEgEQAEgDAGAAQANAAAAAZIAAAIIAKAAQAMAAAFABQAIADAAAKQAAAFgEAEQgEAEgGAAIgFAAIgGAAIgJABIACA0IAAAFIAAAGQAAAXgPAAQgEAAgEgDg");
	this.shape_82.setTransform(-1.4,64.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFF99").s().p("AgMBKQgEgEAAgGIAAgTIAAgSIABgXIABgVQAAgGAEgEQAEgEAGAAQAEAAAEAEQAEAEAAAGIgBAVIgBAXIAAASIABATQAAAGgEAEQgEAEgFAAQgGAAgEgEgAgIgzQgFgEAAgHQAAgGAFgEQAFgFAEAAQAHAAAEAFQAFAEAAAGQAAAHgFAEQgEAEgHAAQgEAAgFgEg");
	this.shape_83.setTransform(-10.1,63.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFF99").s().p("AgpBRQgEgDAAgGIAAgmIAAgnQAAgWgCgQIgBgUQAAgJAEgGQAEgHAIABQAFAAAEADQAEAEAAAGIAAAAQAHgDAHgCQAFgCAHAAQAXAAALAUQAIAPAAAYQAAAUgNAPQgNAQgXAAQgHAAgKgCIAAAqQAAAGgEADQgEAFgGAAQgGAAgEgFgAgEgvQgHACgHAHIABAnQAJAEAIAAQAKAAAGgGQAFgGAAgMIgBgTQgDgNgKAAQgHAAgEAEg");
	this.shape_84.setTransform(-19.8,68.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFF99").s().p("AAZAvIgRAHQgIACgCAAQgZAAgMgNQgNgOAAgaQAAgXASgRQATgSAXAAQAKAAANAGQAPAGAAAJQAAAEgCACIgBALIgBAOQAAARACAJIAFAKIAEAKQAAAGgEADQgEAEgFAAQgGAAgJgJgAgNgTQgLALAAAMQABAOAFAHQAEAGALAAQADAAAHgCQAFgCAFgEQgDgXAAgLIABgIIABgJIgDgCIgEAAQgLAAgLALg");
	this.shape_85.setTransform(-32.3,66.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFF99").s().p("AgeAsQgRgNAAgWQAAgTAOgVQARgZAUAAQAKAAAOAFQASAIAAAJQAAAFgEAEQgDAEgGAAQgFAAgFgFQgHgFgMAAQgGAAgJAQQgJAPAAAJQAAAKAIAHQAHAFAKAAQAHAAAKgFQAKgFACAAQAGAAAEAEQAEAEAAAFQAAAIgRAIQgQAHgKAAQgUAAgPgNg");
	this.shape_86.setTransform(-44.8,66);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFF99").s().p("AAXBKQgCgHgCgQIgCgXIAAgIIABgIIgBgJQgBgEgEABQgLgBgIAJQgEAFgJAPQAAAlgDAIQgEAIgJAAQgGAAgEgEQgEgDAAgHIABgFIABgbIAAhDIAAgDIABgQIgBgKIgBgJQAAgHAEgDQAEgEAGAAQAKAAAEALQACAGAAANIgBAVIAAATQAHgGAJgEQAGgEAKAAQASAAAHAKQAGAHABANIABAaIACAUIAEAUIAAAEQAAAFgEAEQgEAEgGAAQgLAAgDgLg");
	this.shape_87.setTransform(-89.7,63.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFF99").s().p("AgIBHQgEgEAAgFIAAgLIAAgMIgCgzIgTgBQgNgCAAgMQAAgFAEgEQAEgEAGAAIASABIgBgLIAAgKQAAgGAEgEQAEgDAGAAQANAAAAAZIAAAIIAKAAQAMAAAFABQAIADAAAKQAAAFgEAEQgEAEgGAAIgFAAIgGAAIgJABIACA0IAAAFIAAAGQAAAXgPAAQgEAAgEgDg");
	this.shape_88.setTransform(-101.9,64.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFF99").s().p("AgMBKQgEgEAAgGIAAgTIAAgSIABgXIABgVQAAgGAEgEQAEgEAGAAQAEAAAEAEQAEAEAAAGIgBAVIgBAXIAAASIABATQAAAGgEAEQgEAEgFAAQgGAAgEgEgAgIgzQgFgEAAgHQAAgGAFgEQAFgFAEAAQAHAAAEAFQAFAEAAAGQAAAHgFAEQgEAEgHAAQgEAAgFgEg");
	this.shape_89.setTransform(-110.6,63.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFF99").s().p("AADAgQgDgJgBgYIgDAEIgQAnQgBAFgDACQgEAHgJAAQgFAAgFgJQgGgIgDgOIgKg1IgCgPQAAgGAFgEQAEgDAGAAQALAAADALIACAOIABAOIAEAYQAIgSAKggQAEgNAKAAQALAAAEAPIAFAbIAFAbIAQg8QADgJAKAAQAGAAAEAEQAFADAAAGIgBADQgKAogLAfQgDAKgHAJQgFAHgIAAQgNAAgIgZg");
	this.shape_90.setTransform(-121.9,66.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFF99").s().p("AgcA1QgPgGAAgLQAAgKAMAAQAFAAAJADQAIADAFAAQATAAABgIQAAgGgPgGQgUgJgFgDQgPgKAAgOQABgVAVgHQANgEAYAAQAKAAAGADQAGADAAAKQAAASgKAAQgKAAgCgIIgJgBQgWAAAAAHQAAAEAMAGQAVAKAHAEQAPAKAAANQAAASgRAJQgNAHgRAAQgNAAgMgEg");
	this.shape_91.setTransform(-145.4,66);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFF99").s().p("AAUAvIgCgWIgCgVIAAgHIABgJIAAgEIAAgEQAAgJgEAAQgJAAgGALQgJAMgEAPIgBAJIgBAJIAAAJIgBAJQAAAGgEAEQgEAEgGAAQgHAAgEgEQgEgEAAgGIAAgJIgBgIIACgcIABgaIAAgJIgBgKQAAgGAFgDQAEgEAGAAQANAAABAQIAAABQAPgPAPAAQATAAAIAQQAEALAAAWIAAAHIAAAFQAAAIADAMQACANAAAIQAAAFgEAEQgEAEgGAAQgNAAgCgMg");
	this.shape_92.setTransform(-156.8,65.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFF99").s().p("AgMBKQgEgEAAgGIAAgTIAAgSIABgXIABgVQAAgGAEgEQAEgEAGAAQAEAAAEAEQAEAEAAAGIgBAVIgBAXIAAASIABATQAAAGgEAEQgEAEgFAAQgGAAgEgEgAgIgzQgFgEAAgHQAAgGAFgEQAFgFAEAAQAHAAAEAFQAFAEAAAGQAAAHgFAEQgEAEgHAAQgEAAgFgEg");
	this.shape_93.setTransform(-166.1,63.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFF99").s().p("AgzBBQAAgGADgDQAEgEAGAAIANACQAIACAHAAQANAAAIgJQAHgJABgVQgFAGgHACQgGADgGAAQgVAAgMgNQgNgOAAgSQAAgcARgRQARgSAdAAQAJAAAHADQAHACAEAEQANACAAAOIgCATQgEAYgBAZQgBAhgKAPQgNAUghAAQgnAAAAgQgAgOgtQgJAKAAAQQAAANAFAGQAEAEAJAAQAHAAAIgHQAIgKABgJIAFgfIgHgDIgHAAQgPAAgJALg");
	this.shape_94.setTransform(-176,68.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFF99").s().p("AgiAsQgRgNAAgYQAAgYAOgSQAPgTAYAAQARAAAMAFQAQAIAAAQQAAALgNAJQgGAEgRAGIghAPQAFAFAHADQAHADAHAAQAOAAAKgGQAIgFAFAAQALAAAAAKQAAAMgRAHQgPAGgQAAQgWAAgQgLgAgNgXQgGAGgFANIAYgKQALgGAJgGQgHgEgLAAQgIAAgHAHg");
	this.shape_95.setTransform(-188.5,66);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFF99").s().p("AgdBNQgEAEgFAAQgGAAgEgEQgEgDAAgGIAAgIIABgHIAAhyQAAgIADgFQAEgHAIgBQALABAAALIgBAFIAAAEIAAAnQAHgEAIgCQAGgCAFAAQAYAAAPASQAOANAAAYQAAAYgQARQgQARgXAAQgOgBgNgFgAgKgBQgHABgJAGIAAAsQAOAGAKAAQALAAAIgJQAJgJAAgNQAAgNgHgJQgHgHgMAAQgEAAgGADg");
	this.shape_96.setTransform(-201.4,63.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FF0000").s().p("AgxBNQgFgFAAgFIAAhrIgBgPQAAgHABgFQABgKARgDQAHgCASAAQASAAASANQAUAOAAAXQAAALgEAIQgDAHgJAGQAKAEAIAKQAJALAAAKQAAAOgPAMQgKAIgLAFQgWAIglABQgGgBgEgFgAgbA3QASgCATgFQASgGAAgFQgBgJgLgGQgJgEgHgCIgbAAgAgbg2IABAWIgBAVQAKACAFgBQAdgCAAgUQAAgIgJgHQgIgHgLAAIgQAAg");
	this.shape_97.setTransform(131.7,0.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FF0000").s().p("Ag3BMQgEgEAAgGIAAgXIABgXIAAhQQAAgHAEgFQAFgHAJAAIAaACQAOACAIAFQAsAWAAAhQAAANgJAJQgJAKgTAHQAbAPAOAQQAEAEAAAFQAAAGgFAEQgEAEgGAAQgFAAgFgEQgfgdgjgMIABAhQAAAGgEAEQgEAEgGAAQgHAAgEgEgAgfADIAFAAQAZAAAKgFQAFgCAFgFQAEgEAAgCQAAgMgOgKQgMgKgQgCIgMgBg");
	this.shape_98.setTransform(117.2,0.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FF0000").s().p("AguBOQgMgKAAghIACgnIACgqIgBgKIgBgLQAAgPAPAAQAEAAAEACIAXgEIASgCQAaAAAPAGQAKAEAAAJQAAAFgEAFQgEAEgHAAIgEAAQgQgFgQAAIgPABIgSAEIgBApIAmgEIAZgCQAGAAAEAEQAEAEAAAGQAAAKgNACIgYACIgqAEIgBAVQAAAUACADQACABALAAIASAAIATgBIAGAAIAGgBQAGAAAEAEQAFADAAAHQAAAMgMACQgLACgeAAQghAAgKgJg");
	this.shape_99.setTransform(103,0.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FF0000").s().p("AgVBIQgMgdgQg3IgIgbQgGgUAAgHQAAgGAFgEQADgEAHAAQAKAAADAKIAFASIAJAhQAIAcAIAWIAVg8IAJgYQAHgPAHgIQAEgFAHAAQAFAAAFAEQAEAEAAAGQAAAEgDAEQgFAIgFALIgIAVIgbBFQgFAMgGAMQgFAIgGAAQgLAAgEgKg");
	this.shape_100.setTransform(88.2,1.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFF99").s().p("AAUAvIgCgWIgCgVIAAgHIABgJIAAgEIAAgEQAAgJgEAAQgJAAgGALQgJAMgEAPIgBAJIgBAJIAAAJIgBAJQAAAGgEAEQgEAEgGAAQgHAAgEgEQgEgEAAgGIAAgJIgBgIIACgcIABgaIAAgJIgBgKQAAgGAFgDQAEgEAGAAQANAAABAQIAAABQAPgPAPAAQATAAAIAQQAEALAAAWIAAAHIAAAFQAAAIADAMQACANAAAIQAAAFgEAEQgEAEgGAAQgNAAgCgMg");
	this.shape_101.setTransform(28.4,3.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFF99").s().p("AAZAvIgRAHQgHACgEAAQgYAAgNgNQgMgOAAgaQAAgXATgRQARgSAYAAQAKAAAMAGQAQAGAAAJQAAAEgCACIgBALIgCAOQABARADAJIAEAKIAEAKQAAAGgEADQgEAEgGAAQgFAAgJgJgAgNgTQgLALAAAMQAAAOAGAHQAEAGAKAAQAFAAAGgCQAFgCAFgEQgDgXAAgLIAAgIIACgJIgEgCIgCAAQgNAAgKALg");
	this.shape_102.setTransform(16,3.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000099").s().p("AgJBKQgEgEAAgGIAAgEIABgFIgBgOIgBgOIgCgkIgDglIgFAAQgXAAgNgDQgMgDAAgLQAAgFAEgEQAEgFAHAAIARACIAQABIATAAIAQAAIAYABIAXABQAGAAAEAEQAFAEAAAGQAAAGgFAEQgEAEgGAAIgZgBIgZgBIADApIACAoIABAKIABALQAAAIgEAGQgEAIgHAAQgEAAgFgEg");
	this.shape_103.setTransform(-8.2,0.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000099").s().p("AgsA+QgQgQAAgWQAAghAegjQAagfAZAAIAIABIAGAAQAFgEAGAAQALAAACAMQACAJAAALQAAAFgDAFQgEAFgIAAQgJAAgEgKQgCgEgCgBIgIgBQgNAAgPAUQgYAbAAAYQAAALAIAIQAHAIALAAQAIAAAKgFIAQgKQAIgGAEAAQAGAAAEAFQAEAEAAAFQAAAGgFAFQgcAYgbAAQgYAAgPgRg");
	this.shape_104.setTransform(-23,1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000099").s().p("AguBOQgMgKAAghIACgnIACgqIgBgKIgBgLQAAgPAPAAQAEAAAEACIAXgEIASgCQAaAAAPAGQAKAEAAAJQAAAFgEAFQgEAEgHAAIgEAAQgQgFgQAAIgPABIgSAEIgBApIAmgEIAZgCQAGAAAEAEQAEAEAAAGQAAAKgNACIgYACIgqAEIgBAVQAAAUACADQACABALAAIASAAIATgBIAGAAIAGgBQAGAAAEAEQAFADAAAHQAAAMgMACQgLACgeAAQghAAgKgJg");
	this.shape_105.setTransform(-36.8,0.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000099").s().p("AgrBGQgVgPAAgTQAAgRAOABQAPgBAAARQAAAGAKAGQALAIAJAAQADAAACgOIAAggQACgVAAgkIgBgGIgBAAIgLAAIgMAAQgGAAgEgEQgFgEAAgHQAAgOASAAIALABIAJAAIASgBIAUgBQAbAAAAAQQAAAGgDADQgFAFgGAAIgGAAIgGAAIgIAAIAAAGQAABIgLAhQgHAZgSAAQgTAAgTgNg");
	this.shape_106.setTransform(-51.5,1.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000099").s().p("AgxBNQgFgFAAgFIAAhrIgBgPQAAgHABgFQABgKARgDQAHgCASAAQASAAASANQAUAOAAAXQAAALgEAIQgDAHgJAGQAKAEAIAKQAJALAAAKQAAAOgPAMQgKAIgLAFQgWAIglABQgGgBgEgFgAgbA3QASgCATgFQASgGAAgFQgBgJgLgGQgJgEgHgCIgbAAgAgbg2IABAWIgBAVQAKACAFgBQAdgCAAgUQAAgIgJgHQgIgHgLAAIgQAAg");
	this.shape_107.setTransform(-65.9,0.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000099").s().p("AgoBFQgbgUAAgyIABgOIAAgQIAAgLIABgMQAAgIACgHQAEgJAHAAQAGgBAEAEQAFAEAAAGIAAARIAAARIAAAQIgBAOQAAANADANQAFARAIAGQAEAEARgBQAZABAJgvQAFgWAAgrQAAgGAEgGQAEgGAIAAQAIAAADAEQADAFAAAEQAAApgEAWQgGAhgQAYQgIAJgKAHQgNAJgMgBQgbAAgMgKg");
	this.shape_108.setTransform(-81.7,1.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000099").s().p("Ag2BCQgNgKAAgMQAAgHAEgDQAEgFAHAAQAKAAADAJQAHANAUAAQAPAAARgIQASgIAAgJQgBgNgKgEQgIgDgVAAQgSgBgNgFQgUgHABgRQAAgTAVgRQAVgRAXAAQALAAAPAFQARAFABAIQgBAFgDAEQgEAFgHAAIgOgCIgPgCQgNAAgKAGQgMAHAAAHQAAAEAEACQAEADAHABIAYABQAXACANALQAOALAAAVQAAAbgdAOQgXAKgcAAQgaAAgPgMg");
	this.shape_109.setTransform(-97.6,1.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFF99").s().p("AAYAvIgQAHQgIACgCAAQgZAAgMgNQgNgOAAgaQAAgXASgRQATgSAXAAQAKAAANAGQAPAGAAAJQAAAEgCACIgCALIAAAOQAAARACAJIAFAKIAEAKQAAAGgEADQgEAEgFAAQgGAAgKgJgAgNgTQgLALAAAMQABAOAEAHQAFAGALAAQAEAAAFgCQAGgCAFgEQgDgXAAgLIABgIIABgJIgDgCIgEAAQgMAAgKALg");
	this.shape_110.setTransform(-121.7,3.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFF99").s().p("AAUAvIgCgWIgCgVIAAgHIABgJIAAgEIAAgEQAAgJgEAAQgJAAgGALQgJAMgEAPIgBAJIgBAJIAAAJIgBAJQAAAGgEAEQgEAEgGAAQgHAAgEgEQgEgEAAgGIAAgJIgBgIIACgcIABgaIAAgJIgBgKQAAgGAFgDQAEgEAGAAQANAAABAQIAAABQAPgPAPAAQATAAAIAQQAEALAAAWIAAAHIAAAFQAAAIADAMQACANAAAIQAAAFgEAEQgEAEgGAAQgNAAgCgMg");
	this.shape_111.setTransform(-155.3,3.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFF99").s().p("AgMBKQgEgEAAgGIAAgTIAAgSIABgXIABgVQAAgGAEgEQAEgEAGAAQAEAAAEAEQAEAEAAAGIgBAVIgBAXIAAASIABATQAAAGgEAEQgEAEgFAAQgGAAgEgEgAgIgzQgFgEAAgHQAAgGAFgEQAFgFAEAAQAHAAAEAFQAFAEAAAGQAAAHgFAEQgEAEgHAAQgEAAgFgEg");
	this.shape_112.setTransform(-164.6,1.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFF99").s().p("AgIBHQgEgEAAgFIAAgLIAAgMIgCgzIgTgBQgNgCAAgMQAAgFAEgEQAEgEAGAAIASABIgBgLIAAgKQAAgGAEgEQAEgDAGAAQANAAAAAZIAAAIIAKAAQAMAAAFABQAIADAAAKQAAAFgEAEQgEAEgGAAIgFAAIgGAAIgJABIACA0IAAAFIAAAGQAAAXgPAAQgEAAgEgDg");
	this.shape_113.setTransform(-186.4,1.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFF99").s().p("AAUAvIgCgWIgCgVIAAgHIABgJIAAgEIAAgEQAAgJgEAAQgJAAgGALQgJAMgEAPIgBAJIgBAJIAAAJIgBAJQAAAGgEAEQgEAEgGAAQgHAAgEgEQgEgEAAgGIAAgJIgBgIIACgcIABgaIAAgJIgBgKQAAgGAFgDQAEgEAGAAQANAAABAQIAAABQAPgPAPAAQATAAAIAQQAEALAAAWIAAAHIAAAFQAAAIADAMQACANAAAIQAAAFgEAEQgEAEgGAAQgNAAgCgMg");
	this.shape_114.setTransform(-197.8,3.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFF99").s().p("AggArQgPgOgBgYQgBgVAOgSQAPgVAaAAQAUAAANARQAKAPAAAVQAAAWgMARQgPATgWAAQgTAAgNgNgAgNgQQgGAKAAALQAAAMAHAHQAFAFAHAAQAHAAAHgGQAHgHABgMQABgfgSgBQgLAAgHAMg");
	this.shape_115.setTransform(-210.1,3.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgnA1QgDgEgBgGIAAhBIAAgJIABgKQAAgFADgEQAEgEAGAAQAMAAABAMQARgOAWAAQAVAAAAAbIAAAHQgBAQgOAAQgNAAAAgOIAAgKQgVAEgLAUIABAxQAAAGgEAEQgEAEgHAAQgGAAgDgEg");
	this.shape_116.setTransform(103.4,66.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgiAsQgRgNAAgYQAAgYAOgSQAPgTAYAAQARAAAMAFQAQAIAAAQQAAALgNAJQgGAEgRAGIghAPQAFAFAHADQAHADAHAAQAOAAAKgGQAIgFAFAAQALAAAAAKQAAAMgRAHQgPAGgQAAQgWAAgQgLgAgNgXQgGAGgFANIAYgKQALgGAJgGQgHgEgLAAQgIAAgHAHg");
	this.shape_117.setTransform(91.1,66);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgIBHQgEgEAAgFIAAgLIAAgMIgCgzIgTgBQgNgCAAgMQAAgFAEgEQAEgEAGAAIASABIgBgLIAAgKQAAgGAEgEQAEgDAGAAQANAAAAAZIAAAIIAKAAQAMAAAFABQAIADAAAKQAAAFgEAEQgEAEgGAAIgFAAIgGAAIgJABIACA0IAAAFIAAAGQAAAXgPAAQgEAAgEgDg");
	this.shape_118.setTransform(79.5,64.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgIBHQgEgEAAgFIAAgLIAAgMIgCgzIgTgBQgNgCAAgMQAAgFAEgEQAEgEAGAAIASABIgBgLIAAgKQAAgGAEgEQAEgDAGAAQANAAAAAZIAAAIIAKAAQAMAAAFABQAIADAAAKQAAAFgEAEQgEAEgGAAIgFAAIgGAAIgJABIACA0IAAAFIAAAGQAAAXgPAAQgEAAgEgDg");
	this.shape_119.setTransform(68.6,64.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgiAsQgRgNAAgYQAAgYAOgSQAPgTAYAAQARAAAMAFQAQAIAAAQQAAALgNAJQgGAEgRAGIghAPQAFAFAHADQAHADAHAAQAOAAAKgGQAIgFAFAAQALAAAAAKQAAAMgRAHQgPAGgQAAQgWAAgQgLgAgNgXQgGAGgFANIAYgKQALgGAJgGQgHgEgLAAQgIAAgHAHg");
	this.shape_120.setTransform(56.6,66);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgJBQQgEgEAAgGIAAiMQAAgGAFgDQAEgEAEAAQAGAAAEAEQAEADAAAGIAACHQAAATgOAAQgFAAgEgEg");
	this.shape_121.setTransform(46.9,63.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#9900CC").s().p("AgJBQQgEgEAAgGIAAiMQAAgGAFgDQAEgEAEAAQAGAAAEAEQAEADAAAGIAACHQAAATgOAAQgFAAgEgEg");
	this.shape_122.setTransform(19.9,63.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#9900CC").s().p("AAYAvIgQAHQgIACgDAAQgYAAgNgNQgMgOAAgaQAAgXATgRQARgSAYAAQAKAAAMAGQAQAGAAAJQAAAEgCACIgCALIgBAOQAAARAEAJIAEAKIAEAKQAAAGgEADQgEAEgGAAQgEAAgLgJgAgNgTQgKALAAAMQAAAOAEAHQAGAGAJAAQAEAAAGgCQAGgCAFgEQgDgXAAgLIAAgIIACgJIgEgCIgCAAQgMAAgLALg");
	this.shape_123.setTransform(10.4,66.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#9900CC").s().p("AgIBHQgEgEAAgFIAAgLIAAgMIgCgzIgTgBQgNgCAAgMQAAgFAEgEQAEgEAGAAIASABIgBgLIAAgKQAAgGAEgEQAEgDAGAAQANAAAAAZIAAAIIAKAAQAMAAAFABQAIADAAAKQAAAFgEAEQgEAEgGAAIgFAAIgGAAIgJABIACA0IAAAFIAAAGQAAAXgPAAQgEAAgEgDg");
	this.shape_124.setTransform(-1.4,64.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#9900CC").s().p("AgMBKQgEgEAAgGIAAgTIAAgSIABgXIABgVQAAgGAEgEQAEgEAGAAQAEAAAEAEQAEAEAAAGIgBAVIgBAXIAAASIABATQAAAGgEAEQgEAEgFAAQgGAAgEgEgAgIgzQgFgEAAgHQAAgGAFgEQAFgFAEAAQAHAAAEAFQAFAEAAAGQAAAHgFAEQgEAEgHAAQgEAAgFgEg");
	this.shape_125.setTransform(-10.1,63.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#9900CC").s().p("AgpBRQgEgDAAgGIAAgmIAAgnQAAgWgCgQIgBgUQAAgJAEgGQAEgHAIABQAFAAAEADQAEAEAAAGIAAAAQAHgDAHgCQAFgCAHAAQAXAAALAUQAIAPAAAYQAAAUgNAPQgNAQgXAAQgHAAgKgCIAAAqQAAAGgEADQgEAFgGAAQgGAAgEgFgAgEgvQgHACgHAHIABAnQAJAEAIAAQAKAAAGgGQAFgGAAgMIgBgTQgDgNgKAAQgHAAgEAEg");
	this.shape_126.setTransform(-19.8,68.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#9900CC").s().p("AAZAvIgRAHQgIACgCAAQgZAAgMgNQgNgOAAgaQAAgXASgRQATgSAXAAQAKAAANAGQAPAGAAAJQAAAEgCACIgBALIgBAOQAAARACAJIAFAKIAEAKQAAAGgEADQgEAEgFAAQgGAAgJgJgAgNgTQgLALAAAMQABAOAFAHQAEAGALAAQADAAAHgCQAFgCAFgEQgDgXAAgLIABgIIABgJIgDgCIgEAAQgLAAgLALg");
	this.shape_127.setTransform(-32.3,66.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#9900CC").s().p("AgeAsQgRgNAAgWQAAgTAOgVQARgZAUAAQAKAAAOAFQASAIAAAJQAAAFgEAEQgDAEgGAAQgFAAgFgFQgHgFgMAAQgGAAgJAQQgJAPAAAJQAAAKAIAHQAHAFAKAAQAHAAAKgFQAKgFACAAQAGAAAEAEQAEAEAAAFQAAAIgRAIQgQAHgKAAQgUAAgPgNg");
	this.shape_128.setTransform(-44.8,66);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#9900CC").s().p("AgnA1QgDgEgBgGIAAhBIAAgJIABgKQAAgFADgEQAEgEAGAAQAMAAABAMQARgOAWAAQAVAAAAAbIAAAHQgBAQgOAAQgNAAAAgOIAAgKQgVAEgLAUIABAxQAAAGgEAEQgEAEgHAAQgGAAgDgEg");
	this.shape_129.setTransform(103.4,66.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#9900CC").s().p("AgiAsQgRgNAAgYQAAgYAOgSQAPgTAYAAQARAAAMAFQAQAIAAAQQAAALgNAJQgGAEgRAGIghAPQAFAFAHADQAHADAHAAQAOAAAKgGQAIgFAFAAQALAAAAAKQAAAMgRAHQgPAGgQAAQgWAAgQgLgAgNgXQgGAGgFANIAYgKQALgGAJgGQgHgEgLAAQgIAAgHAHg");
	this.shape_130.setTransform(91.1,66);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#9900CC").s().p("AgIBHQgEgEAAgFIAAgLIAAgMIgCgzIgTgBQgNgCAAgMQAAgFAEgEQAEgEAGAAIASABIgBgLIAAgKQAAgGAEgEQAEgDAGAAQANAAAAAZIAAAIIAKAAQAMAAAFABQAIADAAAKQAAAFgEAEQgEAEgGAAIgFAAIgGAAIgJABIACA0IAAAFIAAAGQAAAXgPAAQgEAAgEgDg");
	this.shape_131.setTransform(68.6,64.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#9900CC").s().p("AgiAsQgRgNAAgYQAAgYAOgSQAPgTAYAAQARAAAMAFQAQAIAAAQQAAALgNAJQgGAEgRAGIghAPQAFAFAHADQAHADAHAAQAOAAAKgGQAIgFAFAAQALAAAAAKQAAAMgRAHQgPAGgQAAQgWAAgQgLgAgNgXQgGAGgFANIAYgKQALgGAJgGQgHgEgLAAQgIAAgHAHg");
	this.shape_132.setTransform(56.6,66);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#9900CC").s().p("AgJBQQgEgEAAgGIAAiMQAAgGAFgDQAEgEAEAAQAGAAAEAEQAEADAAAGIAACHQAAATgOAAQgFAAgEgEg");
	this.shape_133.setTransform(19.9,63.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#9900CC").s().p("AgIBHQgEgEAAgFIAAgLIAAgMIgCgzIgTgBQgNgCAAgMQAAgFAEgEQAEgEAGAAIASABIgBgLIAAgKQAAgGAEgEQAEgDAGAAQANAAAAAZIAAAIIAKAAQAMAAAFABQAIADAAAKQAAAFgEAEQgEAEgGAAIgFAAIgGAAIgJABIACA0IAAAFIAAAGQAAAXgPAAQgEAAgEgDg");
	this.shape_134.setTransform(-1.4,64.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#009900").s().p("AAUAvIgCgWIgCgVIAAgHIABgJIAAgEIAAgEQAAgJgEAAQgJAAgGALQgJAMgEAPIgBAJIgBAJIAAAJIgBAJQAAAGgEAEQgEAEgGAAQgHAAgEgEQgEgEAAgGIAAgJIgBgIIACgcIABgaIAAgJIgBgKQAAgGAFgDQAEgEAGAAQANAAABAQIAAABQAPgPAPAAQATAAAIAQQAEALAAAWIAAAHIAAAFQAAAIADAMQACANAAAIQAAAFgEAEQgEAEgGAAQgNAAgCgMg");
	this.shape_135.setTransform(139.2,128.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#009900").s().p("AggArQgPgOgBgYQgBgVAOgSQAPgVAaAAQAUAAANARQAKAPAAAVQAAAWgMARQgPATgWAAQgTAAgNgNgAgNgQQgGAKAAALQAAAMAHAHQAFAFAHAAQAHAAAHgGQAHgHABgMQABgfgSgBQgLAAgHAMg");
	this.shape_136.setTransform(126.9,128.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#009900").s().p("AgMBKQgEgEAAgGIAAgTIAAgSIABgXIABgVQAAgGAEgEQAEgEAGAAQAEAAAEAEQAEAEAAAGIgBAVIgBAXIAAASIABATQAAAGgEAEQgEAEgFAAQgGAAgEgEgAgIgzQgFgEAAgHQAAgGAFgEQAFgFAEAAQAHAAAEAFQAFAEAAAGQAAAHgFAEQgEAEgHAAQgEAAgFgEg");
	this.shape_137.setTransform(117.9,126.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#009900").s().p("AgIBHQgEgEAAgFIAAgLIAAgMIgCgzIgTgBQgNgCAAgMQAAgFAEgEQAEgEAGAAIASABIgBgLIAAgKQAAgGAEgEQAEgDAGAAQANAAAAAZIAAAIIAKAAQAMAAAFABQAIADAAAKQAAAFgEAEQgEAEgGAAIgFAAIgGAAIgJABIACA0IAAAFIAAAGQAAAXgPAAQgEAAgEgDg");
	this.shape_138.setTransform(108.7,126.8);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#009900").s().p("AAZAvIgRAHQgHACgEAAQgYAAgNgNQgMgOAAgaQAAgXATgRQARgSAYAAQAKAAAMAGQAQAGAAAJQAAAEgCACIgBALIgCAOQABARADAJIAEAKIAEAKQAAAGgEADQgEAEgGAAQgFAAgJgJgAgNgTQgLALAAAMQAAAOAGAHQAEAGAKAAQAFAAAGgCQAFgCAFgEQgDgXAAgLIAAgIIACgJIgEgCIgCAAQgNAAgKALg");
	this.shape_139.setTransform(97,128.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#009900").s().p("AAUAyQgNAFgMAAQgPAAgJgGQgMgHgCgOQgEgZAAgSQAAgNADgRQACgMAMAAQAGAAAEAEQAEADAAAGIgBAOIgCAPQAAAOACAJQAAALACAHIAFABIAFABQAJAAAOgDIAAgSIAAgPQAAgVACgQQABgMANAAQAGAAAEAEQAEAEAAAFIgCAkIAAATIAAAVIABAGIAAAHQAAAFgEAEQgEAEgGAAQgJAAgEgIg");
	this.shape_140.setTransform(84.6,128.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#009900").s().p("AgIBHQgEgEAAgFIAAgLIAAgMIgCgzIgTgBQgNgCAAgMQAAgFAEgEQAEgEAGAAIASABIgBgLIAAgKQAAgGAEgEQAEgDAGAAQANAAAAAZIAAAIIAKAAQAMAAAFABQAIADAAAKQAAAFgEAEQgEAEgGAAIgFAAIgGAAIgJABIACA0IAAAFIAAAGQAAAXgPAAQgEAAgEgDg");
	this.shape_141.setTransform(73.3,126.8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#009900").s().p("AgfAsQgQgNAAgWQAAgTAPgVQAQgZAUAAQAKAAAPAFQARAIAAAJQAAAFgEAEQgDAEgGAAQgFAAgGgFQgGgFgMAAQgGAAgKAQQgIAPAAAJQAAAKAHAHQAIAFAKAAQAHAAAKgFQAKgFACAAQAGAAAEAEQAEAEAAAFQAAAIgSAIQgPAHgKAAQgVAAgPgNg");
	this.shape_142.setTransform(61.7,128.5);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#009900").s().p("AAUAvIgCgWIgCgVIAAgHIABgJIAAgEIAAgEQAAgJgEAAQgJAAgGALQgJAMgEAPIgBAJIgBAJIAAAJIgBAJQAAAGgEAEQgEAEgGAAQgHAAgEgEQgEgEAAgGIAAgJIgBgIIACgcIABgaIAAgJIgBgKQAAgGAFgDQAEgEAGAAQANAAABAQIAAABQAPgPAPAAQATAAAIAQQAEALAAAWIAAAHIAAAFQAAAIADAMQACANAAAIQAAAFgEAEQgEAEgGAAQgNAAgCgMg");
	this.shape_143.setTransform(50.1,128.4);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#009900").s().p("AAUAyQgNAFgMAAQgPAAgJgGQgMgHgCgOQgEgZAAgSQAAgNADgRQACgMAMAAQAGAAAEAEQAEADAAAGIgBAOIgCAPQAAAOACAJQAAALACAHIAFABIAFABQAJAAAOgDIAAgSIAAgPQAAgVACgQQABgMANAAQAGAAAEAEQAEAEAAAFIgCAkIAAATIAAAVIABAGIAAAHQAAAFgEAEQgEAEgGAAQgJAAgEgIg");
	this.shape_144.setTransform(38,128.6);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#009900").s().p("AgpBSQgEgEAAgGIAAgnIAAgmQAAgWgCgQIgBgVQAAgIAEgGQAEgGAIAAQAFAAAEADQAEAEAAAFIAAACQAHgEAHgCQAFgCAHAAQAXAAALAUQAIAPAAAYQAAAUgNAPQgNAQgXAAQgHAAgKgCIAAAqQAAAGgEAEQgEADgGAAQgGAAgEgDgAgEgwQgHAEgHAFIABApQAJACAIAAQAKAAAGgFQAFgHAAgLIgBgTQgDgMgKAAQgHAAgEACg");
	this.shape_145.setTransform(26.1,131);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#009900").s().p("AgJBQQgEgEAAgGIAAiMQAAgGAFgEQAEgDAEAAQAGAAAEADQAEAEAAAGIAACGQAAAUgOAAQgFAAgEgEg");
	this.shape_146.setTransform(6.3,125.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#009900").s().p("AAZAvIgRAHQgHACgEAAQgYAAgNgNQgMgOAAgaQAAgXASgRQASgSAYAAQAKAAAMAGQAQAGAAAJQAAAEgCACIgBALIgBAOQAAARADAJIAEAKIAEAKQAAAGgEADQgEAEgGAAQgFAAgJgJgAgNgTQgLALAAAMQAAAOAGAHQAFAGAJAAQAEAAAHgCQAFgCAFgEQgDgXAAgLIABgIIABgJIgEgCIgDAAQgLAAgLALg");
	this.shape_147.setTransform(-3.2,128.6);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#009900").s().p("AAUAvIgCgWIgCgVIAAgHIABgJIAAgEIAAgEQAAgJgEAAQgJAAgGALQgJAMgEAPIgBAJIgBAJIAAAJIgBAJQAAAGgEAEQgEAEgGAAQgHAAgEgEQgEgEAAgGIAAgJIgBgIIACgcIABgaIAAgJIgBgKQAAgGAFgDQAEgEAGAAQANAAABAQIAAABQAPgPAPAAQATAAAIAQQAEALAAAWIAAAHIAAAFQAAAIADAMQACANAAAIQAAAFgEAEQgEAEgGAAQgNAAgCgMg");
	this.shape_148.setTransform(-15.5,128.4);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#009900").s().p("AgMBKQgEgEAAgGIAAgTIAAgSIABgXIABgVQAAgGAEgEQAEgEAGAAQAEAAAEAEQAEAEAAAGIgBAVIgBAXIAAASIABATQAAAGgEAEQgEAEgFAAQgGAAgEgEgAgIgzQgFgEAAgHQAAgGAFgEQAFgFAEAAQAHAAAEAFQAFAEAAAGQAAAHgFAEQgEAEgHAAQgEAAgFgEg");
	this.shape_149.setTransform(-24.8,126.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#009900").s().p("AgIA7QgEgEAAgGQAAgLgCgXQgDgVAAgLIgBgLQgMAHgMAQIgBACIgBAfIAAAHIAAAIQAAAFgFADQgEADgGAAQgJAAgDgHQgCgFAAgMIAAgkIAAgPIgBgPQAAgJAEgHQAEgKAHAAQAGAAAEAFQAFAEAAAGIgBAJQAPgSAOAAQAQAAAFAMQAHgGAHgDQAIgDAJAAQAUAAAHAUQABAFADAXQADAPAFAnQAAAFgEAEQgFAEgGAAQgMAAgCgMIgDgdIgEgcQgDgTgEAAQgCAAgJAFQgIAFgEADQAAAMADAUQADAWAAALQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_150.setTransform(-37,128.6);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#009900").s().p("AgnA1QgDgEgBgFIAAhCIAAgKIABgJQAAgGAEgEQADgDAGAAQALAAACALQARgNAWAAQAVAAgBAbIAAAHQAAAQgOAAQgNAAAAgNIAAgLQgWAEgKAUIABAyQAAAFgEAEQgEAEgGAAQgHAAgDgEg");
	this.shape_151.setTransform(-51.2,128.6);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#009900").s().p("AgiAsQgRgNAAgYQAAgYAOgSQAPgTAYAAQARAAAMAFQAQAIAAAQQAAALgNAJQgGAEgRAGIghAPQAFAFAHADQAHADAHAAQAOAAAKgGQAIgFAFAAQALAAAAAKQAAAMgRAHQgPAGgQAAQgWAAgQgLgAgNgXQgGAGgFANIAYgKQALgGAJgGQgHgEgLAAQgIAAgHAHg");
	this.shape_152.setTransform(-63.5,128.5);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#009900").s().p("AgIBHQgEgEAAgFIAAgLIAAgMIgCgzIgTgBQgNgCAAgMQAAgFAEgEQAEgEAGAAIASABIgBgLIAAgKQAAgGAEgEQAEgDAGAAQANAAAAAZIAAAIIAKAAQAMAAAFABQAIADAAAKQAAAFgEAEQgEAEgGAAIgFAAIgGAAIgJABIACA0IAAAFIAAAGQAAAXgPAAQgEAAgEgDg");
	this.shape_153.setTransform(-75.1,126.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_16},{t:this.shape_15,p:{x:-135.9}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{x:-59.6}},{t:this.shape_9,p:{x:-45}},{t:this.shape_8,p:{x:-29.9}},{t:this.shape_7},{t:this.shape_6,p:{x:9.8}},{t:this.shape_5},{t:this.shape_4,p:{x:42.5,y:-61.6}},{t:this.shape_3,p:{x:57.6,y:-61.6}},{t:this.shape_2},{t:this.shape_1,p:{x:89.5,y:-61.5}},{t:this.shape,p:{x:103.7,y:-61.6}}]},1).to({state:[{t:this.shape_16},{t:this.shape_41},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38,p:{x:-29.9}},{t:this.shape_7},{t:this.shape_10,p:{x:9.8}},{t:this.shape_5},{t:this.shape_9,p:{x:42.5}},{t:this.shape_8,p:{x:57.6}},{t:this.shape_2},{t:this.shape_15,p:{x:89.5}},{t:this.shape_6,p:{x:103.7}},{t:this.shape_37},{t:this.shape_36,p:{x:-210.1,y:3.6}},{t:this.shape_35,p:{x:-197.8,y:3.4}},{t:this.shape_34,p:{x:-186.4,y:1.8}},{t:this.shape_33},{t:this.shape_32,p:{x:-164.6,y:1.1}},{t:this.shape_31,p:{x:-155.3,y:3.4}},{t:this.shape_30},{t:this.shape_29,p:{x:-121.7,y:3.6}},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_3,p:{x:-36.8,y:0.9}},{t:this.shape_1,p:{x:-23,y:1}},{t:this.shape_4,p:{x:-8.2,y:0.9}},{t:this.shape_24,p:{x:16,y:3.6}},{t:this.shape_23,p:{x:28.4,y:3.4}},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape,p:{x:103,y:0.9}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},8).to({state:[{t:this.shape_16},{t:this.shape_15,p:{x:-135.9}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_38,p:{x:-59.6}},{t:this.shape_9,p:{x:-45}},{t:this.shape_10,p:{x:-29.9}},{t:this.shape_7},{t:this.shape_8,p:{x:9.8}},{t:this.shape_5},{t:this.shape_4,p:{x:42.5,y:-61.6}},{t:this.shape_6,p:{x:57.6}},{t:this.shape_2},{t:this.shape_1,p:{x:89.5,y:-61.5}},{t:this.shape_3,p:{x:103.7,y:-61.6}},{t:this.shape_37},{t:this.shape_36,p:{x:-210.1,y:3.6}},{t:this.shape_35,p:{x:-197.8,y:3.4}},{t:this.shape_34,p:{x:-186.4,y:1.8}},{t:this.shape_33},{t:this.shape_32,p:{x:-164.6,y:1.1}},{t:this.shape_31,p:{x:-155.3,y:3.4}},{t:this.shape_30},{t:this.shape_29,p:{x:-121.7,y:3.6}},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_24,p:{x:16,y:3.6}},{t:this.shape_23,p:{x:28.4,y:3.4}},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape,p:{x:103,y:0.9}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},16).to({state:[{t:this.shape_16},{t:this.shape_15,p:{x:-135.9}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{x:-59.6}},{t:this.shape_9,p:{x:-45}},{t:this.shape_8,p:{x:-29.9}},{t:this.shape_7},{t:this.shape_6,p:{x:9.8}},{t:this.shape_5},{t:this.shape_4,p:{x:42.5,y:-61.6}},{t:this.shape_3,p:{x:57.6,y:-61.6}},{t:this.shape_2},{t:this.shape_1,p:{x:89.5,y:-61.5}},{t:this.shape,p:{x:103.7,y:-61.6}},{t:this.shape_37},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_33},{t:this.shape_112},{t:this.shape_111},{t:this.shape_30},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_22},{t:this.shape_21},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_17},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93,p:{x:-166.1,y:63.6}},{t:this.shape_92,p:{x:-156.8,y:65.9}},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89,p:{x:-110.6}},{t:this.shape_88},{t:this.shape_87},{t:this.shape_29,p:{x:-66.8,y:66.1}},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83,p:{x:-10.1,y:63.6}},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77,p:{x:68.6,y:64.3}},{t:this.shape_76,p:{x:79.5}},{t:this.shape_75,p:{x:91.1}},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71,p:{x:-225.7,y:128.4}},{t:this.shape_70},{t:this.shape_69,p:{x:-190.2,y:128.5}},{t:this.shape_68,p:{x:-177.5,y:128.4}},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64,p:{x:-117.9,y:126.1}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61,p:{x:-75.1,y:126.8}},{t:this.shape_60,p:{x:-63.5}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57,p:{x:-24.8,y:126.1}},{t:this.shape_35,p:{x:-15.5,y:128.4}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_31,p:{x:50.1,y:128.4}},{t:this.shape_52},{t:this.shape_51,p:{x:73.3,y:126.8}},{t:this.shape_50},{t:this.shape_24,p:{x:97,y:128.6}},{t:this.shape_34,p:{x:108.7,y:126.8}},{t:this.shape_32,p:{x:117.9,y:126.1}},{t:this.shape_36,p:{x:126.9,y:128.6}},{t:this.shape_23,p:{x:139.2,y:128.4}},{t:this.shape_49}]},9).to({state:[{t:this.shape_16},{t:this.shape_15,p:{x:-135.9}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{x:-59.6}},{t:this.shape_9,p:{x:-45}},{t:this.shape_8,p:{x:-29.9}},{t:this.shape_7},{t:this.shape_6,p:{x:9.8}},{t:this.shape_5},{t:this.shape_4,p:{x:42.5,y:-61.6}},{t:this.shape_3,p:{x:57.6,y:-61.6}},{t:this.shape_2},{t:this.shape_1,p:{x:89.5,y:-61.5}},{t:this.shape,p:{x:103.7,y:-61.6}},{t:this.shape_37},{t:this.shape_115},{t:this.shape_114},{t:this.shape_77,p:{x:-186.4,y:1.8}},{t:this.shape_33},{t:this.shape_93,p:{x:-164.6,y:1.1}},{t:this.shape_111},{t:this.shape_30},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_22},{t:this.shape_21},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_17},{t:this.shape_96},{t:this.shape_75,p:{x:-188.5}},{t:this.shape_94},{t:this.shape_89,p:{x:-166.1}},{t:this.shape_92,p:{x:-156.8,y:65.9}},{t:this.shape_91},{t:this.shape_90},{t:this.shape_83,p:{x:-110.6,y:63.6}},{t:this.shape_76,p:{x:-101.9}},{t:this.shape_87},{t:this.shape_29,p:{x:-66.8,y:66.1}},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124,p:{x:-1.4}},{t:this.shape_123},{t:this.shape_122,p:{x:19.9}},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71,p:{x:-225.7,y:128.4}},{t:this.shape_70},{t:this.shape_69,p:{x:-190.2,y:128.5}},{t:this.shape_68,p:{x:-177.5,y:128.4}},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64,p:{x:-117.9,y:126.1}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61,p:{x:-75.1,y:126.8}},{t:this.shape_60,p:{x:-63.5}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57,p:{x:-24.8,y:126.1}},{t:this.shape_35,p:{x:-15.5,y:128.4}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_31,p:{x:50.1,y:128.4}},{t:this.shape_52},{t:this.shape_51,p:{x:73.3,y:126.8}},{t:this.shape_50},{t:this.shape_24,p:{x:97,y:128.6}},{t:this.shape_34,p:{x:108.7,y:126.8}},{t:this.shape_32,p:{x:117.9,y:126.1}},{t:this.shape_36,p:{x:126.9,y:128.6}},{t:this.shape_23,p:{x:139.2,y:128.4}},{t:this.shape_49}]},14).to({state:[{t:this.shape_16},{t:this.shape_15,p:{x:-135.9}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{x:-59.6}},{t:this.shape_9,p:{x:-45}},{t:this.shape_8,p:{x:-29.9}},{t:this.shape_7},{t:this.shape_6,p:{x:9.8}},{t:this.shape_5},{t:this.shape_4,p:{x:42.5,y:-61.6}},{t:this.shape_3,p:{x:57.6,y:-61.6}},{t:this.shape_2},{t:this.shape_1,p:{x:89.5,y:-61.5}},{t:this.shape,p:{x:103.7,y:-61.6}},{t:this.shape_37},{t:this.shape_115},{t:this.shape_114},{t:this.shape_77,p:{x:-186.4,y:1.8}},{t:this.shape_33},{t:this.shape_93,p:{x:-164.6,y:1.1}},{t:this.shape_111},{t:this.shape_30},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_22},{t:this.shape_21},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_17},{t:this.shape_96},{t:this.shape_75,p:{x:-188.5}},{t:this.shape_94},{t:this.shape_89,p:{x:-166.1}},{t:this.shape_92,p:{x:-156.8,y:65.9}},{t:this.shape_91},{t:this.shape_90},{t:this.shape_83,p:{x:-110.6,y:63.6}},{t:this.shape_76,p:{x:-101.9}},{t:this.shape_87},{t:this.shape_29,p:{x:-66.8,y:66.1}},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_134},{t:this.shape_123},{t:this.shape_133},{t:this.shape_122,p:{x:46.9}},{t:this.shape_132},{t:this.shape_131},{t:this.shape_124,p:{x:79.5}},{t:this.shape_130},{t:this.shape_129},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71,p:{x:-225.7,y:128.4}},{t:this.shape_70},{t:this.shape_69,p:{x:-190.2,y:128.5}},{t:this.shape_68,p:{x:-177.5,y:128.4}},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64,p:{x:-117.9,y:126.1}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61,p:{x:-75.1,y:126.8}},{t:this.shape_60,p:{x:-63.5}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57,p:{x:-24.8,y:126.1}},{t:this.shape_35,p:{x:-15.5,y:128.4}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_31,p:{x:50.1,y:128.4}},{t:this.shape_52},{t:this.shape_51,p:{x:73.3,y:126.8}},{t:this.shape_50},{t:this.shape_24,p:{x:97,y:128.6}},{t:this.shape_34,p:{x:108.7,y:126.8}},{t:this.shape_32,p:{x:117.9,y:126.1}},{t:this.shape_36,p:{x:126.9,y:128.6}},{t:this.shape_23,p:{x:139.2,y:128.4}},{t:this.shape_49}]},4).to({state:[{t:this.shape_16},{t:this.shape_15,p:{x:-135.9}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{x:-59.6}},{t:this.shape_9,p:{x:-45}},{t:this.shape_8,p:{x:-29.9}},{t:this.shape_7},{t:this.shape_6,p:{x:9.8}},{t:this.shape_5},{t:this.shape_4,p:{x:42.5,y:-61.6}},{t:this.shape_3,p:{x:57.6,y:-61.6}},{t:this.shape_2},{t:this.shape_1,p:{x:89.5,y:-61.5}},{t:this.shape,p:{x:103.7,y:-61.6}},{t:this.shape_37},{t:this.shape_36,p:{x:-210.1,y:3.6}},{t:this.shape_92,p:{x:-197.8,y:3.4}},{t:this.shape_61,p:{x:-186.4,y:1.8}},{t:this.shape_33},{t:this.shape_83,p:{x:-164.6,y:1.1}},{t:this.shape_71,p:{x:-155.3,y:3.4}},{t:this.shape_30},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_24,p:{x:16,y:3.6}},{t:this.shape_68,p:{x:28.4,y:3.4}},{t:this.shape_22},{t:this.shape_21},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_17},{t:this.shape_96},{t:this.shape_69,p:{x:-188.5,y:66}},{t:this.shape_94},{t:this.shape_64,p:{x:-166.1,y:63.6}},{t:this.shape_35,p:{x:-156.8,y:65.9}},{t:this.shape_91},{t:this.shape_90},{t:this.shape_57,p:{x:-110.6,y:63.6}},{t:this.shape_51,p:{x:-101.9,y:64.3}},{t:this.shape_87},{t:this.shape_29,p:{x:-66.8,y:66.1}},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_134},{t:this.shape_123},{t:this.shape_133},{t:this.shape_122,p:{x:46.9}},{t:this.shape_132},{t:this.shape_131},{t:this.shape_124,p:{x:79.5}},{t:this.shape_130},{t:this.shape_129},{t:this.shape_73},{t:this.shape_72},{t:this.shape_31,p:{x:-225.7,y:128.4}},{t:this.shape_70},{t:this.shape_60,p:{x:-190.2}},{t:this.shape_23,p:{x:-177.5,y:128.4}},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_32,p:{x:-117.9,y:126.1}},{t:this.shape_34,p:{x:-109.3,y:126.8}},{t:this.shape_62},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_49}]},17).wait(45));

	// Layer 3
	this.instance = new lib.animsharkfin1();
	this.instance.setTransform(71.6,-69.1,2.875,2.875,15,0,0,0,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[71.5,-68.9,62.8,-69.8,53.3,-66.7,46.7,-64.6,49.9,-58.3,51,-56.3,48.1,-55.5,39.4,-53.3,30.2,-56.1,23,-58.3,18,-60.1,11.6,-62.4,6.8,-58.7,-0.5,-53.1,-8.3,-48.9,-16.9,-44.2,-26.5,-46.9,-36,-49.6,-44.5,-53.4,-53,-57.2,-62,-58.6,-71.9,-60.2,-79.9,-55.5,-87.3,-51.1,-96.4,-49.5,-105.9,-47.9,-115.2,-49.3,-124.4,-50.8,-132.7,-54.6,-141.5,-58.6,-151.3,-59.4,-161.2,-60.2,-169.9,-56.9,-173.4,-55.5,-174.5,-51.2,-168.8,-43,-181.8,-41.4,-191.4,-40.3,-199.8,-37.8,-206.2,-35.9,-210.3,-32.5]}},9).to({rotation:0,skewX:-15,skewY:165,guide:{path:[-210.4,-32.2,-211.3,-31.4,-212.1,-30.5]}},1).to({scaleX:2.87,scaleY:2.87,skewX:-14.8,skewY:165.2,guide:{path:[-212.1,-30.5,-212.6,-29.9,-213.1,-29.2,-217.6,-23.1,-208.3,-22.5,-202.1,-22.2,-198.7,-18.9,-196.7,-16.9,-200.2,-14.4,-203.8,-11.8,-213,-8.8,-231.5,-2.8,-237.9,4.9,-241.2,8.8,-237.1,11.3,-233,13.8,-221.6,15,-198.9,17.5,-192.6,3.5,-175.9,-10.6,-162.1,-1.4,-148.2,8.1,-145.9,11.7,-143.5,15.3,-136.2,11.8,-128.9,8.2,-124.4,1.8,-120,-4.6,-110.5,-5.6,-100.5,-6.5,-91.5,-4.5,-82.3,-2.4,-74.9,2.9,-67.4,8.2,-58.5,8.1,-53.1,8,-51.6,3.9,-50.1,0,-48.5,-3.8,-46.3,-9,-41.3,-10.3]}},14).to({scaleX:2.88,scaleY:2.88,skewX:-15,skewY:165,guide:{path:[-41.2,-10.3,-38.2,-11.1,-34.1,-10.3,-29.3,-9.5,-11.8,2.3,-3.1,6.3,8.6,0,20.4,-6.4,23.6,-6.5,25.3,-6.5,25.9,-6.4,26.5,-6.3,26,-6.1,37,-6.1,38.7,3.9,39.2,7,42.6,7.2,52.4,7.8,55.7,-0.8,59.1,-9.2,69.9,-9.2,80.3,-9.2,86.5,-2.1,90.3,2.4,97.2,4.1,102,5.2,104.6,0.7,108.7,-6.8,119,-7.6,129,-8.4,135,-1,142.3,7.7,135.3,14.8,132.2,17.9,136.6,18.7,143.8,19.8,148.5,21.2]}},17).to({x:143.2,y:55},2).to({rotation:15,skewX:0,skewY:0,guide:{path:[143.1,55.1,143.1,55.1,143.1,55.1]}},1).to({guide:{path:[143.1,55.1,148.3,58.9,150.5,61.8,152.3,64.1,146.3,63.4,140.4,62.8,126.7,59.2,125.7,59.5,126.9,62.8,128.1,66.1,131.5,72.4,138.2,84.8,117.5,88,96.8,91.2,106.6,79,103.5,71.7,93.7,69,89.3,67.9,86.4,71.6,81.5,77.9,73,81.4,64.5,84.9,54.5,84.1,43,83.2,42.6,72,42.4,65.1,33,65.6,23.3,66.2,17.6,73.8,12.4,80.8,3,84.1,-5.3,87.1,-14.2,88.9,-24.2,90.8,-32.2,85.9,-33.6,85.1,-35.1,82.8,-40.4,74.7,-50.2,71.9,-60,69.1,-68.3,75.1,-75.8,80.6,-84.7,84.3,-93.7,88.1,-103.2,86.5,-110.1,85.3,-112.6,78.2,-116,68.6,-124.8,68.4,-129.3,68.3,-131.2,72,-134.5,78.4,-140.7,80.9,-143.6,82,-147.5,79.1,-151.4,76.3,-156.3,69.4]}},14).to({guide:{path:[-156.3,69.4,-157,68.5,-157.7,67.4,-168.6,51.5,-189.9,70.6,-200.8,80.4,-203.1,89.9,-205.6,100.5,-216.6,94,-224.2,89.4,-233.9,88.9,-237.8,88.7,-241,89.4]}},2).to({rotation:0,skewX:-15,skewY:165,guide:{path:[-241,89.4,-241,89.4,-241,89.4]}},1).to({guide:{path:[-241,89.4,-246.1,90.6,-249.4,94.1,-256.3,101.9,-246.2,103.2,-240.3,104,-236.4,106.5,-230.8,110.2,-238.1,112.9,-240,113.6,-241.5,114.7]}},1).to({scaleX:2.87,scaleY:2.87,skewX:-14.8,skewY:165.2,guide:{path:[-241.6,114.6,-246.6,117.9,-248.5,124.5,-251.5,134.6,-240.6,137.6,-230.3,140.4,-222.4,134.2,-220.6,132.8,-219.9,130.6,-218.3,121.3,-208.3,124.8,-203.1,126.7,-198.3,129.5,-188.2,135.4,-183.9,127.4,-179.8,120,-171.7,115,-164.1,110.3,-154.4,109.2,-144.5,108.1,-140.8,115.1]}},6).to({scaleX:2.88,scaleY:2.88,skewX:-15,skewY:165,guide:{path:[-140.8,115.1,-140.2,116.3,-139.7,117.8,-137.6,124.6,-130,125.7,-119.2,127.2,-114,118.1,-114,118.1,-114,118.1]}},6).to({scaleX:2.87,scaleY:2.87,skewX:-14.8,skewY:165.2,guide:{path:[-114,118.1,-109.4,110,-101.5,107.3,-94.8,104.9,-88.8,109.2,-81.7,114.2,-74.7,119.1,-67.2,124.4,-57.8,121,-48.8,117.7,-41.8,111.9,-34,105.6,-24.2,108.9,-21.8,109.7,-20,112.5,-16.9,117.5,-10.9,121.1,-0.1,123.4,3.7,113.4,7,104.7,16.6,103.5,26.9,102.2,31.7,110.7,36.1,118.4,45.1,119.8,53.3,121.2,61,117.9,69.4,114.3,79.3,115.4,88.9,116.4,97.8,118.8,107.7,121.3,119.7,122.9,128.8,124.1,154.8,125.3]}},26).to({_off:true},1).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(63.1,-79.6,20.3,22.4);


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


(lib.fcb_background_pressed_1 = function(mode,startPosition,loop) {
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
		//																		  n*/
		//component.registerSkinElement(background_mc, "backgroundDisabled");
		//
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin element
	this.background_mc = new lib.fcb_background_pressed();
	this.background_mc.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,2,9,9);


(lib.fcb_background_disabled_1 = function(mode,startPosition,loop) {
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
		//																		  n*/
		//
		//component.registerSkinElement(background_mc, "backgroundDisabled");
		//
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin element
	this.background_mc = new lib.fcb_background_disabled();
	this.background_mc.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,2,9,9);


(lib.fcb_background_1 = function(mode,startPosition,loop) {
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
		//																		  n*/
		//component.registerSkinElement(background_mc, "background");
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin element
	this.background_mc = new lib.fcb_background();
	this.background_mc.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,2,9,9);


(lib.fcb_frame = function(mode,startPosition,loop) {
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
		//																		  n*/
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
	this.darkshadow_mc = new lib.fcb_leftOut();

	this.shadow_mc = new lib.fcb_leftIn();

	this.highlight_mc = new lib.fcb_rightIn();

	this.highlight3D_mc = new lib.fcb_rightOut();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.highlight3D_mc},{t:this.highlight_mc},{t:this.shadow_mc},{t:this.darkshadow_mc}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13,13);


(lib.fcb_check_disabled_1 = function(mode,startPosition,loop) {
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
		//																		  n*/
		//component.registerSkinElement(check_mc, "foregroundDisabled");
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin element
	this.check_mc = new lib.fcb_check_disabled();
	this.check_mc.setTransform(2.9,3.2);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.9,3.2,7.1,7);


(lib.fcb_check_1 = function(mode,startPosition,loop) {
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
		//																		  n*/
		//
		//component.registerSkinElement(check_mc, "check");
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin element
	this.check_mc = new lib.fcb_check();
	this.check_mc.setTransform(2.9,3.2);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.9,3.2,7.1,7);


(lib.blank = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.blank_gr("synched",0);
	this.instance.setTransform(32.6,17,1,1,0,0,0,32.5,17);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,65,34);


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


(lib.fcb_states = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{up:0,"press":1,uncheckedDisabled:2,checkedDisabled:3,checkedPress:4,checkedEnabled:5});

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
		/* stop();*/
	}
	this.frame_3 = function() {
		/* stop();
		*/
	}
	this.frame_4 = function() {
		/* stop();
		*/
	}
	this.frame_5 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1));

	// check_enabled
	this.instance = new lib.fcb_check_1();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(2));

	// check_disabled
	this.instance_1 = new lib.fcb_check_disabled_1();
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({_off:true},1).wait(2));

	// background pressed/disabled
	this.instance_2 = new lib.fcb_background_pressed_1();

	this.instance_3 = new lib.fcb_background_disabled_1();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},2).to({state:[]},1).wait(1));

	// background static
	this.frb_frame_mc = new lib.fcb_background_1();

	this.timeline.addTween(cjs.Tween.get(this.frb_frame_mc).wait(6));

	// check box frame
	this.fcb_frame_mc = new lib.fcb_frame();

	this.timeline.addTween(cjs.Tween.get(this.fcb_frame_mc).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13,13);


// stage content:
(lib.compSen_Scene1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene1:0,scene1_repeat:95});

	// timeline functions:
	this.frame_0 = function() {
		//this.btn_menu.addEventListener("click", openMenu.bind(this));
		this.btn_goNext.addEventListener("click", openNext.bind(this));
		this.btn_goBack.addEventListener("click", openPrev.bind(this));
		
		/*
		function openMenu(){
		
		 window.open ("chapter menu","_self");
		}
		*/
		
		function openNext(){
		
		 window.open ("compSen_Scene2.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("compSen_Scene0.html","_self");
		}
		playSound("DiscoGroove");
		playSound("DiscoGroove",-1);
	}
	this.frame_113 = function() {
		this.gotoAndPlay("scene1_repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(113).call(this.frame_113).wait(1));

	// text
	this.instance = new lib.sentence1menu();
	this.instance.setTransform(329,153.6,1.126,1.126);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(114));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("EAlZAXrMhKxAAAMAAAgvVMBKxAAAg");
	this.shape.setTransform(276.6,194.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CCFF").s().p("EglYAXrMAAAgvVMBKxAAAMAAAAvVg");
	this.shape_1.setTransform(276.6,194.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(114));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_goNext},{t:this.btn_goBack},{t:this.instance_1},{t:this.btn_menu}]}).wait(114));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(284.2,201.8,537.1,401.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;