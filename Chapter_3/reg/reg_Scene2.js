(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	manifest: [
		{src:"sounds/believe_rock.mp3?1498162144093", id:"believe_rock"},
		{src:"sounds/boo.mp3?1498162144093", id:"boo"},
		{src:"sounds/compete_copy.mp3?1498162144093", id:"compete_copy"},
		{src:"sounds/competed_copy.mp3?1498162144093", id:"competed_copy"},
		{src:"sounds/dive.mp3?1498162144093", id:"dive"},
		{src:"sounds/doveordived.mp3?1498162144093", id:"doveordived"},
		{src:"sounds/flew.mp3?1498162144093", id:"flew"},
		{src:"sounds/fly.mp3?1498162144093", id:"fly"},
		{src:"sounds/havedived.mp3?1498162144093", id:"havedived"},
		{src:"sounds/haveflown.mp3?1498162144093", id:"haveflown"},
		{src:"sounds/irregularverbsformthepasttense.mp3?1498162144093", id:"irregularverbsformthepasttense"},
		{src:"sounds/laymeanstoplaceortoput.mp3?1498162144093", id:"laymeanstoplaceortoput"},
		{src:"sounds/liemeanstoreclineortorest.mp3?1498162144093", id:"liemeanstoreclineortorest"},
		{src:"sounds/perc_techno.mp3?1498162144093", id:"perc_techno"},
		{src:"sounds/regularpastparticipleverbs.mp3?1498162144093", id:"regularpastparticipleverbs"},
		{src:"sounds/regularandirregularverbs.mp3?1498162144093", id:"regularandirregularverbs"},
		{src:"sounds/regularverbsformtheirpasttense.mp3?1498162144093", id:"regularverbsformtheirpasttense"},
		{src:"sounds/sound_over1.mp3?1498162144093", id:"sound_over1"},
		{src:"sounds/square_bit.mp3?1498162144093", id:"square_bit"},
		{src:"sounds/TherearemanymoreIrregularVerbsyoushouldknow.mp3?1498162144093", id:"TherearemanymoreIrregularVerbsyoushouldknow"},
		{src:"sounds/twotroublesomeverbsarelievslay.mp3?1498162144093", id:"twotroublesomeverbsarelievslay"},
		{src:"sounds/whistles_crowd.mp3?1498162144093", id:"whistles_crowd"},
		{src:"sounds/yeah.mp3?1498162144093", id:"yeah"}
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


(lib.blank_gr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("Aj9CqIAAlSIH7AAIAAFSg");
	this.shape.setTransform(32.5,17,1.275,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65,34);


(lib.edflashing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		playSound("square_bit");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AASA8QgMgNAAgUQAAgXAMgMQANgOAUAAQAKAAAFADIAJAGQABglABgNQACgHAGgBQAIABAAAIQAAAMgDAqIgBAYQAAAdADAPIAAACQAAAEgDACQgCACgDAAQgGAAgCgIQgHAFgHACQgGACgIAAQgSABgMgMgAAdABQgIAIAAASQAAALAIAJQAIAIALAAQAIAAAFgDIAJgHIADgDIAAgjQgDgHgGgCQgFgEgIAAQgPAAgHAHgAhPA+QgNgMAAgTQAAgXALgOQAMgRAUAAQAPABAJAFQALAGAAALQAAAIgKAHQgEADgOAHIgiAQQAFAIAHADQAIAEAKgBQAGAAAIgCQAKgCADgFQADgFAEAAQADAAACADQACACAAADQAAAKgPAGQgOAHgMgBQgUABgNgKgAhDAAQgHAIgDARIAbgNQAQgIAGgEQgHgHgOAAQgLAAgHAHg");
	this.shape.setTransform(9.4,7.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(1,1,1).p("AhhAAIDDAA");
	this.shape_1.setTransform(9.7,16.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFF00").ss(1,1,1).p("AhhAAIDDAA");
	this.shape_2.setTransform(9.7,16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},5).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,0,21.8,17.4);


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
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("EAlaAVAMhKzAAAMAAAgp/MBKzAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#DDF5FF","#3399FF"],[0,1],0,-134.5,0.1,134.6).s().p("EglZAVAMAAAgp/MBKzAAAMAAAAp/g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240.9,-135.9,481.9,272);


(lib.played = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.edflashing();
	this.instance.setTransform(45.3,15.1,1,1,0,0,0,9.3,7.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgeA8QgMgNAAgUQAAgXAMgMQANgOASAAQAKAAAFADIAJAGQABglABgNQACgIAGAAQAIAAAAAJQAAAMgDAqIgBAXQAAAeADAPIAAACQAAADgDADQgCACgDAAQgGAAgCgIQgHAFgHACQgGADgGgBQgSABgMgMgAgTABQgIAIAAASQAAALAIAJQAIAIALAAQAGAAAFgDIAJgHIADgDIAAgPIAAgKIAAgLQgDgGgGgCQgFgEgIAAQgNAAgHAHg");
	this.shape.setTransform(50.3,15.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgdAlQgNgKAAgUQAAgVALgQQAMgQATAAQAOAAAJAEQALAHAAAMQAAAJgKAHQgEAEgOAEIggAQQAFAHAHAEQAIADAIAAQAGAAAIgCQAKgDADgEQADgFAEAAQADAAACACQACACAAAEQAAAJgPAIQgOAFgMAAQgSABgNgLgAgRgWQgHAIgDAPIAbgLQAOgIAGgGQgHgGgNgBQgKAAgHAJg");
	this.shape_1.setTransform(40.3,17.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgWBEQgDgCAAgEQAAgJATgqIgfg6IgEgHQgDgEAAgCQAAgEADgDQADgCADAAQAEAAADADQAPAUAPAnIANgfIANgbQADgFAFAAQADAAADADQADACAAAEIgBAEIgfBAQgLAYgEAQIgGARQgCAHgGAAQgDAAgDgDg");
	this.shape_2.setTransform(30.3,19.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AAcAsIgGgGIgPAHIgJACQgUAAgKgMQgJgLAAgWQAAgTAPgPQAPgPASAAQAHAAAKAEQAMAEAAAHQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABIgBALIgBARQAAAMACAFIAFAQIACAEIABACQAAADgDADQgCACgDAAQgCAAgEgEgAgOgUQgJAKAAANQAAAOAFAIQAFAHAKAAQAGAAAGgDIAJgHQgDgWAAgLIABgIIABgJIgFgDIgEgBQgMAAgKAMg");
	this.shape_3.setTransform(21.3,17.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgJA/IABggIABgfIAAgfIABgfQAAgJAGAAQAJAAAAAJIAAAfIgBAfIgBArIgBAUQgBAJgFAAQgJAAAAgJg");
	this.shape_4.setTransform(14.3,15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AggBHQgDgDAAgDIAAgkIAAghIgBgjIgCgSQAAgGACgEQADgFAFAAQAEAAACACQACACAAAEIAAADIAAAFQAHgFAHgDQAGgCAGAAQARAAAJAQQAHAMAAAVQgBARgJAMQgLANgSAAQgHAAgLgCIAAAqQAAADgCADQgDACgEAAQgDAAgCgCgAgHgtQgEACgIAHIABAoQAKAEAIAAQALAAAFgIQAGgGAAgLQAAgQgFgIQgDgIgIAAQgHAAgGAEg");
	this.shape_5.setTransform(7.1,19.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,57.6,29.1);


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


(lib.blank = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.blank_gr("synched",0);
	this.instance.setTransform(32.6,17,1,1,0,0,0,32.5,17);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,65,34);


(lib.delivered = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.edflashing();
	this.instance.setTransform(69.8,15.1,1,1,0,0,0,9.3,7.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("ADUBAIAAg9IAAgHIAAgJQAAgJAIAAQAJAAAAAPQARgQAUAAQAHAAAEAFQADAFAAALIAAAEQAAALgIAAQgIAAAAgIIAAgFIgBgHQgNACgJAFQgIAFgFALIAAAwQAAAJgIAAQgIAAAAgJgAB6A9QgNgLAAgTQAAgXALgOQAMgRAUAAQAPAAAJAFQALAGAAAMQAAAIgKAHQgEADgOAHIgiAQQAFAHAHAEQAIADAKAAQAGAAAIgCQAKgDADgEQADgFAEAAQADAAACACQACACAAAEQAAAJgPAHQgOAGgMAAQgUAAgNgKgACGAAQgHAIgDARIAbgNQAQgIAGgEQgHgHgOAAQgLAAgHAHgAhFA+IABggIABgeIAAggIABgfQAAgJAIAAQAJAAAAAJIAAAfIgBAgIgBAqIgBAUQgBAJgHAAQgJAAAAgJgAiiA9QgNgLAAgTQAAgXALgOQAMgRAUAAQAPAAAJAFQALAGAAAMQAAAIgKAHQgEADgOAHIgiAQQAFAHAHAEQAIADAKAAQAGAAAIgCQAKgDADgEQADgFAEAAQADAAACACQACACAAAEQAAAJgPAHQgOAGgMAAQgUAAgNgKgAiWAAQgHAIgDARIAbgNQAQgIAGgEQgHgHgOAAQgLAAgHAHgAkLA7QgMgMAAgUQAAgXAMgMQANgOAUAAQAKAAAFADIAJAGQABglABgNQACgIAGAAQAIAAAAAJQAAAMgDAqIgBAXQAAAeADAPIAAACQAAADgDADQgCACgDAAQgGAAgCgIQgHAFgHACQgGACgIAAQgSAAgMgMgAkAABQgIAIAAASQAAALAIAJQAIAIALAAQAIAAAFgDIAJgHIADgDIAAgkQgDgGgGgCQgFgEgIAAQgPAAgHAHgAAxA/IgdhKIgBgEQAAgDADgDQADgDADAAQAGAAACAGIAWA7QAHgOAKgbIAHgRQADgGAFAAQAEAAACADQADACAAAEQAAADgOAgIgTAqQAAAIgIAAQgGAAgDgIgAgQBBQgCgCAAgEIgBgQIAAgQIABgUIABgTQAAgEACgCQADgDADAAQAEAAADADQACACAAAEIgBATIgBAUIABAQIAAAQQAAAEgDACQgCADgEAAQgEAAgCgDgAgNgtQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAACADQADADAAAEQAAAEgDADQgCADgEAAQgEAAgDgDg");
	this.shape.setTransform(31,15.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,7.7,77.6,17.1);


(lib.baked = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.edflashing();
	this.instance.setTransform(41.6,15,1,1,0,0,0,9.3,7.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgeA8QgMgNAAgUQAAgXAMgMQANgOASAAQAKAAAFADIAJAGQABglABgNQACgIAGAAQAIAAAAAJQAAAMgDAqIgBAXQAAAeADAPIAAACQAAADgDADQgCACgDAAQgGAAgCgIQgHAFgHACQgGADgGgBQgSABgMgMgAgTABQgIAIAAASQAAALAIAJQAIAIALAAQAGAAAFgDIAJgHIADgDIAAgPIAAgKIAAgLQgDgGgGgCQgFgEgIAAQgNAAgHAHg");
	this.shape.setTransform(46.8,15.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgdAlQgNgKAAgUQAAgVALgQQAMgQATAAQAOAAAJAEQALAHAAAMQAAAJgKAHQgEAEgOAEIggAQQAFAHAHAEQAIADAIAAQAGAAAIgCQAKgDADgEQADgFAEAAQADAAACACQACACAAAEQAAAJgPAIQgOAFgMAAQgSABgNgLgAgRgWQgHAIgDAPIAbgLQAOgIAGgGQgHgGgNgBQgKAAgHAJg");
	this.shape_1.setTransform(36.8,17.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AAXBDQgFgJgJgMIgOgVIgPALIgBAaQAAAEgDADQgCACgEAAQgJAAABgMIABgVIABgWIAAgdIAAgeIAAgKIAAgJQgBgEADgCQACgDAEAAQADAAADADQADACAAAEIAAAKIABAJIgBAdIAAAcIAUgSIAUgUQADgDADAAQAEAAADADQACADAAADQAAADgCADQgLAMgQANIATAaQANATAAAFQAAAEgCACQgDADgEAAQgFAAgCgFg");
	this.shape_2.setTransform(27.5,15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AAcAsIgGgGIgPAHIgJACQgUAAgKgMQgJgLAAgWQAAgTAPgPQAPgPASAAQAHAAAKAEQAMAEAAAHQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABIgBALIgBARQAAAMACAFIAFAQIACAEIABACQAAADgDADQgCACgDAAQgCAAgEgEgAgOgUQgJAKAAANQAAAOAFAIQAFAHAKAAQAGAAAGgDIAJgHQgDgWAAgLIABgIIABgJIgFgDIgEgBQgMAAgKAMg");
	this.shape_3.setTransform(17.5,17.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgZBBQgEAEgDABQgEgBgCgCQgDgCABgDIAAgHIAAgHIAAgcIgBgaIAAgYIAAgYQAAgGACgEQADgFAGAAQAGAAAAAHIAAAEIgBAEIAAATIAAAWQAHgFAHgDQAHgDAEAAQATAAAMAPQALAMAAATQAAAVgNANQgNAPgRAAQgOgBgKgFgAgNgDIgMAHIAAAQIAAANIAAAOIAMAGQAFABAHAAQALAAAIgJQAIgJAAgOQAAgNgGgIQgIgHgMAAQgFAAgIADg");
	this.shape_4.setTransform(7.7,15.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,54.1,29.1);


// stage content:
(lib.reg_Scene2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene2:0,scene2_repeat:183});

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
		
		 window.open ("reg_Scene3.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("reg_Scene1b.html","_self");
		}
	}
	this.frame_3 = function() {
		playSound("regularverbsformtheirpasttense");
	}
	this.frame_102 = function() {
		playSound("regularpastparticipleverbs");
	}
	this.frame_182 = function() {
		/* _root.gonow = true;*/
	}
	this.frame_188 = function() {
		this.gotoAndPlay("scene2_repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(99).call(this.frame_102).wait(80).call(this.frame_182).wait(6).call(this.frame_188).wait(1));

	// Layer 10
	this.instance = new lib.edflashing();
	this.instance.setTransform(279.4,217.5,1,1,0,0,0,9.3,7.2);

	this.instance_1 = new lib.edflashing();
	this.instance_1.setTransform(461.3,217.5,1,1,0,0,0,9.3,7.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgEA+QgDgDAAgDIAAgKIABgKIgCgxIgUgCQgIgBAAgIQABgEACgCQACgDAEAAIASACIAAgMIAAgLQAAgEACgCQADgDADAAQAHAAABANIAAAIIAAAFIAAAGIANgCIAMABQAEACAAAGQAAAEgCADQgCACgEAAIgFAAIgDAAIgNABIACAyIAAAEIAAAFQABATgKAAQgBAAgDgCg");
	this.shape.setTransform(447.6,218.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgdAlQgNgKAAgUQAAgVALgQQAMgRATAAQAOABAJAFQALAFAAANQAAAJgKAHQgEAEgOAEIggAQQAFAIAHADQAIAEAIgBQAGAAAIgCQAKgDADgEQADgFAEAAQADAAACACQACADAAADQAAAKgPAGQgOAHgMgBQgSABgNgLgAgRgWQgHAIgDAPIAbgLQAOgIAGgGQgHgHgNAAQgKAAgHAJg");
	this.shape_1.setTransform(438.7,219.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AggBHQgDgDAAgDIAAgkIAAghIgBgjIgCgSQAAgGACgEQAEgFAEAAQAEAAACACQADACgBAEIAAADIgBAFQAIgFAHgDQAGgCAFAAQATAAAIAQQAGAMABAVQAAARgKAMQgMANgRAAQgHAAgLgCIAAAqQAAADgDADQgCACgEAAQgEAAgBgCgAgHgtQgEACgIAHIABAoQAKAEAIAAQAKAAAGgIQAGgGAAgLQgBgQgDgIQgFgIgIAAQgFAAgHAEg");
	this.shape_2.setTransform(428.9,222);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgEAzQgCgCAAgEIgCggIgCgdQAAgJgDgGQgGADgHAHIgKALIgEAGIgBANIgBAPIAAAIIABAHQAAADgCADQgDACgEAAQgKAAAAgWIABgQIABgOIAAgOIgBgOQAAgUAJAAQADAAADADQADADAAAEIgBAFIAAAFIAAAJQAFgJAIgIQAJgHAHAAQANAAAEAOQAEgHAHgDQAHgDAIAAQAPAAAFAQQACADACAVIAGAxQABADgDADQgDACgDAAQgIAAgBgIIgDgbIgDgZQgBgGgCgGQgDgIgDAAQgEAAgJAGQgIAFgDADIABAQIACAWQACAOAAAJQAAAEgCACQgDADgEAAQgBAAgDgDg");
	this.shape_3.setTransform(417.1,219.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgZAlQgMgNAAgUQgBgSALgPQAMgRAUAAQARAAAJAPQAIANgBASQAAASgKAOQgLAPgRAAQgOAAgLgKgAgOgQQgGAKAAAKQAAANAHAHQAGAGAHAAQAIAAAGgGQAIgIAAgNQABgfgTgBQgLAAgHANg");
	this.shape_4.setTransform(405.2,220);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgYAmQgNgLABgTQgBgQAMgTQAOgVAOAAQAJAAALAEQANAGAAAHQAAADgCADQgDACgDAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBgBAAAAIgEgDQgFgFgMAAQgGABgKAQQgHAOAAAJQAAALAHAIQAIAFAKAAQAEAAAHgDIAKgEIADgCQAEAAADADQABACAAADQAAAHgNAGQgMAFgHAAQgRAAgMgLg");
	this.shape_5.setTransform(396,219.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgXAwQgOgFAAgIQAAgEADgDQADgCADAAQADAAAEAEQADACAHACIAKABQAFgBAGgBQAIgDAAgFQAAgNgRgDIgHgCQgLgDgFgEQgIgCAAgLQAAgRASgJIAPgFIAQgGQAEgBAEgBQAEABACACQADADAAADIABAIIABAIQAAAEgCACQgDADgEAAQgFAAgBgEQgCgCgBgIIgUAHQgMAFAAAIIAFACQASADAKAHQAOAHAAASQAAAOgMAHQgKAHgOAAQgMAAgKgFg");
	this.shape_6.setTransform(381.3,219.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AAcAtIgGgHIgPAHQgHACgCAAQgUAAgKgLQgJgMAAgWQAAgTAPgPQAPgPASgBQAHABAKAEQAMAFAAAGQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABIgBALIgBARQAAAMACAFIAFAQIACAEIABACQAAADgDADQgCACgDAAQgCAAgEgDgAgOgVQgJAMAAAMQAAAOAFAIQAFAHAKAAQAGAAAGgDIAJgHQgDgWAAgLIABgIIABgJIgFgDIgEgBQgMABgKAKg");
	this.shape_7.setTransform(372.6,220);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AAYBCIgEgUIgCgVIAAgHIABgHQAAgPgJAAQgKAAgIAIQgEAGgHAOQAAAigDAGQgDAFgFAAQgEAAgCgCQgDgDAAgDIABgEIABgNIAAgNIAAg/IABgOIgBgJIgBgIQAAgEACgCQADgDAEAAQAHAAABAIIACAQIgBATIAAATIAAAIQAHgKAIgFQAHgEAIAAQAPAAAGAJQAEAHAAAOIAAAQIACATIAEASIAAACQgBAEgCACQgCADgEAAQgGAAgCgHg");
	this.shape_8.setTransform(362.9,217.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgEA+QgDgDAAgDIAAgKIABgKIgCgxIgUgCQgHgBgBgIQABgEACgCQACgDAEAAIASACIAAgMIAAgLQAAgEACgCQADgDADAAQAHAAABANIAAAIIAAAFIAAAGIANgCIAMABQAEACAAAGQAAAEgCADQgCACgEAAIgFAAIgDAAIgNABIACAyIAAAEIAAAFQABATgKAAQgCAAgCgCg");
	this.shape_9.setTransform(265.4,218.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgdAlQgNgKAAgUQAAgVALgQQAMgRATAAQAOABAJAFQALAFAAANQAAAJgKAHQgEAEgOAEIggAQQAFAIAHADQAIAEAIgBQAGAAAIgCQAKgDADgEQADgFAEAAQADAAACACQACADAAADQAAAKgPAGQgOAHgMgBQgSABgNgLgAgRgWQgHAIgDAPIAbgLQAOgIAGgGQgHgHgNAAQgKAAgHAJg");
	this.shape_10.setTransform(256.4,219.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AggBHQgDgDAAgDIAAgkIAAghIgBgjIgCgSQAAgGACgEQAEgFAEAAQAEAAACACQADACgBAEIAAADIgBAFQAIgFAHgDQAGgCAFAAQATAAAIAQQAGAMABAVQAAARgKAMQgMANgRAAQgHAAgLgCIAAAqQAAADgDADQgCACgEAAQgEAAgBgCgAgHgtQgEACgIAHIABAoQAKAEAIAAQAKAAAGgIQAGgGgBgLQAAgQgDgIQgFgIgIAAQgFAAgHAEg");
	this.shape_11.setTransform(246.7,222);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgEAzQgCgCAAgEIgCggIgCgdQAAgJgDgGQgGADgHAHIgKALIgEAGIgBANIgBAPIAAAIIABAHQAAADgCADQgDACgEAAQgKAAAAgWIABgQIABgOIAAgOIgBgOQAAgUAJAAQADAAADADQADADAAAEIgBAFIAAAFIAAAJQAFgJAIgIQAJgHAHAAQANAAAEAOQAEgHAHgDQAHgDAIAAQAPAAAFAQQACADACAVIAGAxQABADgDADQgDACgDAAQgIAAgBgIIgDgbIgDgZQgBgGgCgGQgDgIgDAAQgEAAgJAGQgIAFgDADIABAQIACAWQACAOAAAJQAAAEgCACQgDADgEAAQgBAAgDgDg");
	this.shape_12.setTransform(234.9,219.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AgZAlQgMgNAAgUQgBgSALgPQAMgRAUAAQARAAAJAPQAIANgBASQAAASgKAOQgLAPgRAAQgOAAgLgKgAgOgQQgGAKAAAKQAAANAHAHQAGAGAHAAQAIAAAGgGQAIgIAAgNQABgfgTgBQgLAAgHANg");
	this.shape_13.setTransform(222.9,220);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AgYAmQgNgLABgTQgBgQAMgTQAOgVAOAAQAJAAALAEQANAGAAAHQAAADgCADQgDACgDAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBgBAAAAIgEgDQgFgFgMAAQgGABgKAQQgHAOAAAJQAAALAHAIQAIAFAKAAQAEAAAHgDIAKgEIADgCQAEAAACADQACACAAADQAAAHgNAGQgMAFgHAAQgRAAgMgLg");
	this.shape_14.setTransform(213.8,219.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AgdAlQgNgKAAgUQAAgVALgQQAMgRATAAQAOABAJAFQALAFAAANQAAAJgKAHQgEAEgOAEIggAQQAFAIAHADQAIAEAIgBQAGAAAIgCQAKgDADgEQADgFAEAAQADAAACACQACADAAADQAAAKgPAGQgOAHgMgBQgSABgNgLgAgRgWQgHAIgDAPIAbgLQAOgIAGgGQgHgHgNAAQgKAAgHAJg");
	this.shape_15.setTransform(148.6,219.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AgEA+QgDgDABgDIAAgKIAAgKIgCgxIgUgCQgHgBAAgIQAAgEACgCQADgDADAAIATACIAAgMIgBgLQAAgEADgCQACgDADAAQAHAAABANIAAAIIAAAFIAAAGIANgCIALABQAGACAAAGQAAAEgCADQgDACgEAAIgFAAIgDAAIgMABIABAyIAAAEIAAAFQAAATgJAAQgBAAgDgCg");
	this.shape_16.setTransform(139.2,218.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AgdAlQgNgKAAgUQAAgVALgQQAMgRATAAQAOABAJAFQALAFAAANQAAAJgKAHQgEAEgOAEIggAQQAFAIAHADQAIAEAIgBQAGAAAIgCQAKgDADgEQADgFAEAAQADAAACACQACADAAADQAAAKgPAGQgOAHgMgBQgSABgNgLgAgRgWQgHAIgDAPIAbgLQAOgIAGgGQgHgHgNAAQgKAAgHAJg");
	this.shape_17.setTransform(130.3,219.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("AghBHQgCgDAAgDIAAgkIAAghIgBgjIgBgSQAAgGACgEQACgFAGAAQADAAACACQADACAAAEIgBADIgBAFQAIgFAHgDQAGgCAGAAQARAAAJAQQAGAMAAAVQABARgLAMQgLANgRAAQgHAAgLgCIAAAqQAAADgDADQgCACgDAAQgFAAgCgCgAgHgtQgFACgGAHIABAoQAJAEAIAAQAKAAAHgIQAEgGAAgLQAAgQgDgIQgEgIgIAAQgGAAgHAEg");
	this.shape_18.setTransform(120.5,222);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AgEAzQgCgCAAgEIgCggIgCgdQAAgJgDgGQgGADgHAHIgKALIgEAGIgBANIgBAPIAAAIIABAHQAAADgCADQgDACgEAAQgKAAAAgWIABgQIABgOIAAgOIgBgOQAAgUAJAAQADAAADADQADADAAAEIgBAFIAAAFIAAAJQAFgJAIgIQAJgHAHAAQANAAAEAOQAEgHAHgDQAHgDAIAAQAPAAAFAQQACADACAVIAGAxQABADgDADQgDACgDAAQgIAAgBgIIgDgbIgDgZQgBgGgCgGQgDgIgDAAQgEAAgJAGQgIAFgDADIABAQIACAWQACAOAAAJQAAAEgCACQgDADgEAAQgBAAgDgDg");
	this.shape_19.setTransform(108.7,219.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AgZAlQgMgNAAgUQgBgSALgPQAMgRAUAAQARAAAJAPQAIANgBASQAAASgKAOQgLAPgRAAQgOAAgLgKgAgOgQQgGAKAAAKQAAANAHAHQAGAGAHAAQAIAAAGgGQAIgIAAgNQABgfgTgBQgLAAgHANg");
	this.shape_20.setTransform(96.8,220);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AgXAmQgNgLgBgTQABgQALgTQAOgVAPAAQAIAAALAEQANAGAAAHQAAADgCADQgDACgCAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAIgDgDQgGgFgLAAQgIABgIAQQgJAOABAJQgBALAJAIQAHAFAKAAQAFAAAFgDIALgEIAEgCQADAAACADQACACABADQAAAHgOAGQgMAFgHAAQgRAAgLgLg");
	this.shape_21.setTransform(87.6,219.9);

	this.instance_2 = new lib.edflashing();
	this.instance_2.setTransform(458.3,294.1,1,1,0,0,0,9.3,7.2);

	this.instance_3 = new lib.edflashing();
	this.instance_3.setTransform(444.2,255.6,1,1,0,0,0,9.3,7.2);

	this.instance_4 = new lib.edflashing();
	this.instance_4.setTransform(446,178.6,1,1,0,0,0,9.3,7.2);

	this.instance_5 = new lib.delivered();
	this.instance_5.setTransform(250.7,293.7,1,1,0,0,0,41.1,14.6);

	this.instance_6 = new lib.baked();
	this.instance_6.setTransform(250.7,255.1,1,1,0,0,0,27.1,14.6);

	this.instance_7 = new lib.played();
	this.instance_7.setTransform(250.7,178.2,1,1,0,0,0,28.9,14.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("AgeA7QgMgMAAgUQAAgXAMgMQANgOASAAQAKAAAFADIAJAGQABglABgNQACgIAGAAQAIAAAAAJQAAAMgDAqIgBAXQAAAeADAPIAAACQAAADgDADQgCACgDAAQgGAAgCgIQgHAFgHACQgGACgGAAQgSAAgMgMgAgTABQgIAJAAARQAAALAIAJQAIAIALAAQAGAAAFgDIAJgHIADgDIAAgPIAAgKIAAgLQgDgGgGgCQgFgEgIAAQgNAAgHAHg");
	this.shape_22.setTransform(463.2,294.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("AgdAlQgNgLAAgTQAAgVALgPQAMgSATABQAOAAAJAEQALAHAAAMQAAAJgKAHQgEADgOAFIggAQQAFAHAHAEQAIAEAIAAQAGgBAIgCQAKgDADgEQADgFAEAAQADAAACACQACACAAAEQAAAJgPAIQgOAFgMAAQgSAAgNgKgAgRgWQgHAIgDAPIAbgLQAOgIAGgGQgHgGgNgBQgKAAgHAJg");
	this.shape_23.setTransform(453.3,296.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF0000").s().p("AghAoIAAg8IABgJIAAgIQAAgJAIAAQAIAAAAAOQAQgQAUAAQAHAAADAFQAEAGAAALIAAAGQgBALgIAAQgIAAAAgJIAAgGIAAgHQgOABgGAGQgIAGgFAMIAAAuQAAAJgJAAQgIAAAAgJg");
	this.shape_24.setTransform(444.1,296.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF0000").s().p("AgdAlQgNgLAAgTQAAgVALgPQAMgSATABQAOAAAJAEQALAHAAAMQAAAJgKAHQgEADgOAFIggAQQAFAHAHAEQAIAEAIAAQAGgBAIgCQAKgDADgEQADgFAEAAQADAAACACQACACAAAEQAAAJgPAIQgOAFgMAAQgSAAgNgKgAgRgWQgHAIgDAPIAbgLQAOgIAGgGQgHgGgNgBQgKAAgHAJg");
	this.shape_25.setTransform(434.8,296.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF0000").s().p("AgIAoIgOgjIgQgnIgBgEQAAgDADgDQADgDADAAQAGAAACAGIAWA7QAFgOAKgZIAHgTQADgGAFAAQAEAAADADQACACAAAEQAAADgOAiIgSAoQgBAIgGAAQgGAAgCgIg");
	this.shape_26.setTransform(425.5,296.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF0000").s().p("AgHA/QgDgDAAgEIAAgPIgBgQIABgUIACgTQAAgEACgCQACgDAEAAQACAAACADQACACAAAEIAAATIgBAUIAAAQIAAAPQAAAEgCADQgCACgCAAQgEAAgCgCgAgFgvQgCgDAAgEQAAgEACgEQAEgCACAAQAEAAAEACQACAEABAEQgBAEgCADQgEACgEAAQgCAAgEgCg");
	this.shape_27.setTransform(418.7,294.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF0000").s().p("AgJA/IABggIABgfIABgfIAAgfQAAgJAHAAQAIAAABAJIgBAfIgBAfIgBArIgBAUQgBAJgFAAQgJAAAAgJg");
	this.shape_28.setTransform(413.5,294.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF0000").s().p("AgdAlQgNgLAAgTQAAgVALgPQAMgSATABQAOAAAJAEQALAHAAAMQAAAJgKAHQgEADgOAFIggAQQAFAHAHAEQAIAEAIAAQAGgBAIgCQAKgDADgEQADgFAEAAQADAAACACQACACAAAEQAAAJgPAIQgOAFgMAAQgSAAgNgKgAgRgWQgHAIgDAPIAbgLQAOgIAGgGQgHgGgNgBQgKAAgHAJg");
	this.shape_29.setTransform(406.3,296.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF0000").s().p("AgeA7QgMgMAAgUQAAgXAMgMQANgOASAAQAKAAAFADIAJAGQABglABgNQACgIAGAAQAIAAAAAJQAAAMgDAqIgBAXQAAAeADAPIAAACQAAADgDADQgCACgDAAQgGAAgCgIQgHAFgHACQgGACgGAAQgSAAgMgMgAgTABQgIAJAAARQAAALAIAJQAIAIALAAQAGAAAFgDIAJgHIADgDIAAgPIAAgKIAAgLQgDgGgGgCQgFgEgIAAQgNAAgHAHg");
	this.shape_30.setTransform(395.9,294.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF0000").s().p("AgXAxQgOgGAAgJQAAgDADgDQADgCADAAQADAAAEAEQADACAHACIAKAAQAFAAAGgBQAIgDAAgFQAAgNgRgEIgHgBQgLgDgFgEQgIgDAAgJQAAgTASgHIAPgGIAQgGQAEgBAEgBQAEABACACQADACAAAEIABAIIABAIQAAADgCADQgDACgEABQgFgBgBgDQgCgCgBgIIgUAGQgMAHAAAIIAFABQASAEAKAGQAOAHAAASQAAAOgMAHQgKAHgOAAQgMgBgKgDg");
	this.shape_31.setTransform(380.6,296.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF0000").s().p("AAcAsIgGgGIgPAHIgJACQgUAAgKgMQgJgKAAgXQAAgTAPgPQAPgPASAAQAHAAAKADQAMAFAAAHQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABIgBALIgBARQAAAMACAFIAFAQIACAEIABACQAAADgDADQgCADgDAAQgCgBgEgEgAgOgUQgJAKAAANQAAAOAFAIQAFAHAKAAQAGAAAGgDIAJgHQgDgWAAgLIABgIIABgJIgFgDIgEgBQgMAAgKAMg");
	this.shape_32.setTransform(371.9,296.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF0000").s().p("AAXBCIgDgUIgBgVIAAgHIAAgHQAAgPgIAAQgLAAgIAIQgEAGgIAOQAAAigCAGQgDAFgFAAQgEAAgDgCQgCgDAAgDIAAgEIABgNIABgNIAAg/IAAgOIAAgJIgBgIQAAgEACgCQADgDAEAAQAHAAABAIIABAQIAAATIgBATIAAAIQAIgKAIgFQAHgEAJAAQAOAAAGAJQADAHABAOIAAAQIADATIACASIAAACQAAAEgCACQgCADgEAAQgHAAgCgHg");
	this.shape_33.setTransform(362.2,294.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF0000").s().p("AghAoIAAg8IABgJIAAgIQAAgJAIAAQAIAAAAAOQAQgQAUAAQAHAAADAFQAEAGAAALIAAAGQgBALgIAAQgIAAAAgJIAAgGIAAgHQgOABgGAGQgIAGgFAMIAAAuQAAAJgJAAQgIAAAAgJg");
	this.shape_34.setTransform(142.8,296.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF0000").s().p("AgdAlQgNgLAAgTQAAgVALgPQAMgSATABQAOAAAJAEQALAHAAAMQAAAJgKAHQgEADgOAFIggAQQAFAHAHAEQAIAEAIAAQAGgBAIgCQAKgDADgEQADgFAEAAQADAAACACQACACAAAEQAAAJgPAIQgOAFgMAAQgSAAgNgKgAgRgWQgHAIgDAPIAbgLQAOgIAGgGQgHgGgNgBQgKAAgHAJg");
	this.shape_35.setTransform(133.5,296.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF0000").s().p("AgIAoIgOgjIgPgnIgBgEQAAgDACgDQADgDAEAAQAFAAACAGIAWA7QAFgOAKgZIAIgTQACgGAFAAQAEAAACADQADACAAAEQAAADgOAiIgSAoQgBAIgGAAQgGAAgCgIg");
	this.shape_36.setTransform(124.2,296.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF0000").s().p("AgHA/QgCgDAAgEIgBgPIAAgQIABgUIABgTQgBgEADgCQADgDADAAQACAAACADQADACAAAEIgBATIgBAUIABAQIAAAPQAAAEgDADQgCACgCAAQgEAAgCgCgAgFgvQgCgDAAgEQAAgEACgEQAEgCACAAQAEAAAEACQACAEAAAEQAAAEgCADQgEACgEAAQgCAAgEgCg");
	this.shape_37.setTransform(117.4,294.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF0000").s().p("AgIA/IABggIAAgfIABgfIAAgfQAAgJAHAAQAIAAABAJIgBAfIAAAfIgCArIgBAUQAAAJgGAAQgJAAABgJg");
	this.shape_38.setTransform(112.2,294.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF0000").s().p("AgdAlQgNgLAAgTQAAgVALgPQAMgSATABQAOAAAJAEQALAHAAAMQAAAJgKAHQgEADgOAFIggAQQAFAHAHAEQAIAEAIAAQAGgBAIgCQAKgDADgEQADgFAEAAQADAAACACQACACAAAEQAAAJgPAIQgOAFgMAAQgSAAgNgKgAgRgWQgHAIgDAPIAbgLQAOgIAGgGQgHgGgNgBQgKAAgHAJg");
	this.shape_39.setTransform(105,296.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF0000").s().p("AgeA7QgMgMAAgUQAAgXAMgMQANgOASAAQAKAAAFADIAJAGQABglABgNQACgIAGAAQAIAAAAAJQAAAMgDAqIgBAXQAAAeADAPIAAACQAAADgDADQgCACgDAAQgGAAgCgIQgHAFgHACQgGACgGAAQgSAAgMgMgAgTABQgIAJAAARQAAALAIAJQAIAIALAAQAGAAAFgDIAJgHIADgDIAAgPIAAgKIAAgLQgDgGgGgCQgFgEgIAAQgNAAgHAHg");
	this.shape_40.setTransform(94.6,294.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF0000").s().p("AgeA8QgMgNAAgUQAAgXAMgMQANgOASAAQAKAAAFADIAJAGQABglABgNQACgHAGAAQAIAAAAAIQAAAMgDAqIgBAYQAAAdADAPIAAACQAAAEgDACQgCACgDAAQgGAAgCgIQgHAFgHACQgGACgGABQgSgBgMgLgAgTABQgIAIAAASQAAALAIAJQAIAIALAAQAGAAAFgDIAJgHIADgDIAAgPIAAgKIAAgKQgDgHgGgCQgFgEgIAAQgNAAgHAHg");
	this.shape_41.setTransform(449.3,255.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FF0000").s().p("AgdAmQgNgMAAgTQAAgVALgQQAMgQATgBQAOAAAJAGQALAFAAANQAAAJgKAHQgEADgOAFIggAQQAFAIAHADQAIADAIAAQAGAAAIgBQAKgDADgFQADgFAEAAQADAAACADQACACAAADQAAAKgPAGQgOAHgMAAQgSAAgNgKgAgRgWQgHAIgDAPIAbgLQAOgIAGgFQgHgIgNAAQgKABgHAIg");
	this.shape_42.setTransform(439.3,257.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF0000").s().p("AAXBDQgFgJgJgMIgNgVIgQALIgBAaQAAAEgDADQgCACgEAAQgIAAAAgMIABgVIAAgWIABgdIAAgeIAAgKIgBgJQABgEACgCQACgDAEAAQAEAAACADQACACABAEIAAAKIAAAJIAAAdIAAAcIAUgSIAUgUQADgDADAAQAEAAADADQACADAAADQAAADgCADQgLAMgQANIATAaQAOATAAAFQAAAEgDACQgDADgDAAQgFAAgDgFg");
	this.shape_43.setTransform(430,255.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FF0000").s().p("AAcAtIgGgHIgPAHIgJACQgUAAgKgLQgJgLAAgXQAAgTAPgPQAPgQASAAQAHAAAKAFQAMAEAAAHQAAABAAABQAAAAgBABQAAAAAAABQAAABgBAAIgBALIgBASQAAAKACAHIAFAPIACAEIABACQAAADgDADQgCACgDAAQgCAAgEgDgAgOgVQgJALAAANQAAAPAFAGQAFAIAKAAQAGAAAGgDIAJgHQgDgWAAgLIABgIIABgKIgFgCIgEgBQgMAAgKALg");
	this.shape_44.setTransform(420,258);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FF0000").s().p("AgZBCQgDADgFAAQgDAAgCgBQgCgDgBgEIAAgGIABgHIgBgcIAAgaIAAgYIAAgZQAAgFACgEQADgGAFABQAHgBAAAIIAAAEIgBADIAAATIAAAXQAHgFAHgCQAHgDAEAAQATAAAMAOQALAMAAAUQAAATgNAPQgNANgRAAQgNAAgLgEgAgNgDIgMAHIAAAQIAAANIAAAPIALAEQAGACAHAAQAKAAAJgJQAIgJAAgNQAAgNgHgJQgHgIgMABQgFAAgIADg");
	this.shape_45.setTransform(410.2,255.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FF0000").s().p("AgXAwQgOgFAAgIQAAgEADgCQADgDADAAQADAAAEAEQADACAHABIAKACQAFAAAGgCQAIgDAAgGQAAgLgRgEIgHgDQgLgCgFgDQgIgEAAgKQAAgRASgJIAPgFIAQgGQAEgCAEABQAEgBACADQADACAAAFIABAHIABAHQAAAEgCADQgDACgEAAQgFAAgBgDQgCgCgBgIIgUAHQgMAGAAAHIAFACQASAEAKAGQAOAHAAARQAAAPgMAIQgKAFgOABQgMgBgKgEg");
	this.shape_46.setTransform(394.6,257.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FF0000").s().p("AAcAtIgGgHIgPAHIgJACQgUAAgKgLQgJgLAAgXQAAgTAPgPQAPgQASAAQAHAAAKAFQAMAEAAAHQAAABAAABQAAAAgBABQAAAAAAABQAAABgBAAIgBALIgBASQAAAKACAHIAFAPIACAEIABACQAAADgDADQgCACgDAAQgCAAgEgDgAgOgVQgJALAAANQAAAPAFAGQAFAIAKAAQAGAAAGgDIAJgHQgDgWAAgLIABgIIABgKIgFgCIgEgBQgMAAgKALg");
	this.shape_47.setTransform(385.9,258);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FF0000").s().p("AAYBCIgEgUIgCgVIAAgHIABgHQAAgPgJAAQgKAAgIAIQgEAGgHAOQAAAigEAGQgCAFgFAAQgEAAgCgCQgDgDgBgDIACgEIABgNIAAgNIAAg/IABgOIgBgJIgBgIQAAgEADgCQACgDAEAAQAHAAABAIIACAQIgBATIAAATIAAAIQAHgKAIgFQAHgEAIAAQAPAAAFAJQAFAHAAAOIAAAQIACATIAEASIAAACQAAAEgDACQgDADgDAAQgGAAgCgHg");
	this.shape_48.setTransform(376.2,255.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FF0000").s().p("AgdAmQgNgMAAgTQAAgVALgQQAMgQATgBQAOAAAJAGQALAFAAANQAAAJgKAHQgEADgOAFIggAQQAFAIAHADQAIADAIAAQAGAAAIgBQAKgDADgFQADgFAEAAQADAAACADQACACAAADQAAAKgPAGQgOAHgMAAQgSAAgNgKgAgRgWQgHAIgDAPIAbgLQAOgIAGgFQgHgIgNAAQgKABgHAIg");
	this.shape_49.setTransform(133.1,257.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FF0000").s().p("AAXBDQgFgJgJgMIgOgVIgPALIgBAaQAAAEgDADQgCACgEAAQgJAAABgMIABgVIABgWIAAgdIAAgeIAAgKIAAgJQgBgEADgCQACgDAEAAQADAAADADQADACAAAEIAAAKIABAJIgBAdIAAAcIAUgSIAUgUQADgDADAAQAEAAADADQACADAAADQAAADgCADQgLAMgQANIATAaQANATAAAFQAAAEgCACQgDADgEAAQgFAAgCgFg");
	this.shape_50.setTransform(123.8,255.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FF0000").s().p("AAcAtIgGgHIgPAHIgJACQgUAAgKgLQgJgLAAgXQAAgTAPgPQAPgQASAAQAHAAAKAFQAMAEAAAHQAAABAAABQAAAAgBABQAAAAAAABQAAABgBAAIgBALIgBASQAAAKACAHIAFAPIACAEIABACQAAADgDADQgCACgDAAQgCAAgEgDgAgOgVQgJALAAANQAAAPAFAGQAFAIAKAAQAGAAAGgDIAJgHQgDgWAAgLIABgIIABgKIgFgCIgEgBQgMAAgKALg");
	this.shape_51.setTransform(113.8,258);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FF0000").s().p("AgZBCQgEADgDAAQgEAAgCgBQgDgDABgEIAAgGIAAgHIAAgcIgBgaIAAgYIAAgZQAAgFACgEQADgGAFABQAHgBAAAIIAAAEIgBADIAAATIAAAXQAHgFAHgCQAHgDAEAAQATAAAMAOQALAMAAAUQAAATgNAPQgNANgRAAQgOAAgKgEgAgNgDIgMAHIAAAQIAAANIAAAPIAMAEQAFACAHAAQALAAAIgJQAIgJAAgNQAAgNgGgJQgIgIgMABQgFAAgIADg");
	this.shape_52.setTransform(104,255.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FF0000").s().p("AgeA7QgMgMAAgTQAAgYAMgMQANgOASAAQAKAAAFADIAJAGQABglABgNQACgIAGAAQAIAAAAAJQAAAMgDAqIgBAXQAAAeADAPIAAACQAAADgDADQgCACgDAAQgGAAgCgIQgHAFgHACQgGACgGAAQgSAAgMgMgAgTABQgIAJAAARQAAAMAIAIQAIAIALAAQAGAAAFgDIAJgHIADgDIAAgPIAAgKIAAgLQgDgGgGgCQgFgEgIAAQgNAAgHAHg");
	this.shape_53.setTransform(451,178.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FF0000").s().p("AgdAlQgNgKAAgUQAAgVALgPQAMgSATABQAOAAAJAEQALAHAAAMQAAAJgKAHQgEADgOAFIggAQQAFAIAHADQAIAEAIAAQAGAAAIgDQAKgDADgEQADgFAEAAQADAAACACQACACAAAEQAAAJgPAIQgOAFgMAAQgSAAgNgKgAgRgWQgHAIgDAPIAbgLQAOgIAGgGQgHgGgNAAQgKgBgHAJg");
	this.shape_54.setTransform(441.1,181);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FF0000").s().p("AgWBEQgDgCAAgEQAAgJATgqIgfg6IgEgHQgDgEAAgCQAAgEADgDQADgCADAAQAEAAADADQAPAUAPAnIANgfIANgbQADgFAFAAQADAAADADQADACAAAEIgBAEIgfBAQgLAYgEAQIgGARQgCAHgGAAQgDAAgDgDg");
	this.shape_55.setTransform(431.1,183.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FF0000").s().p("AAcAsIgGgGIgPAHIgJACQgUAAgKgMQgJgLAAgWQAAgTAPgPQAPgPASAAQAHAAAKADQAMAGAAAHQAAAAAAABQAAAAgBABQAAAAAAABQAAABgBAAIgBALIgBARQAAAMACAFIAFAQIACAFIABABQAAADgDADQgCADgDAAQgCAAgEgFgAgOgUQgJALAAAMQAAAOAFAHQAFAIAKAAQAGAAAGgDIAJgHQgDgWAAgLIABgIIABgJIgFgDIgEAAQgMAAgKALg");
	this.shape_56.setTransform(422.1,181.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FF0000").s().p("AgJA/IABggIABgfIAAgfIABgfQAAgJAGAAQAKAAgBAJIAAAfIgBAfIgBArIAAAUQgBAJgGAAQgIAAgBgJg");
	this.shape_57.setTransform(415,178.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FF0000").s().p("AghBHQgCgDAAgDIAAgkIAAghIgBgjIgBgSQAAgGACgEQADgFAFAAQADAAACACQACACABAEIgBADIAAAFQAHgFAHgDQAGgCAGAAQASAAAIAQQAHAMgBAVQAAARgKAMQgKANgSAAQgHAAgLgCIAAAqQAAADgCADQgDACgDAAQgFAAgCgCgAgHgtQgFACgGAHIAAAoQAKAEAIAAQALAAAGgIQAEgGABgLQgBgQgEgIQgEgIgHAAQgHAAgGAEg");
	this.shape_58.setTransform(407.8,183.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FF0000").s().p("AgXAxQgOgGAAgJQAAgDADgDQADgCADAAQADAAAEAEQADACAHACIAKAAQAFABAGgCQAIgDAAgGQAAgLgRgFIgHgCQgLgCgFgEQgIgDAAgJQAAgTASgHIAPgGIAQgGQAEgCAEAAQAEAAACADQADACAAAEIABAIIABAIQAAADgCADQgDACgEAAQgFAAgBgDQgCgCgBgHIgUAFQgMAHAAAIIAFABQASAEAKAGQAOAHAAARQAAAPgMAHQgKAHgOgBQgMAAgKgDg");
	this.shape_59.setTransform(392.9,180.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FF0000").s().p("AAcAsIgGgGIgPAHIgJACQgUAAgKgMQgJgLAAgWQAAgTAPgPQAPgPASAAQAHAAAKADQAMAGAAAHQAAAAAAABQAAAAgBABQAAAAAAABQAAABgBAAIgBALIgBARQAAAMACAFIAFAQIACAFIABABQAAADgDADQgCADgDAAQgCAAgEgFgAgOgUQgJALAAAMQAAAOAFAHQAFAIAKAAQAGAAAGgDIAJgHQgDgWAAgLIABgIIABgJIgFgDIgEAAQgMAAgKALg");
	this.shape_60.setTransform(384.2,181.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FF0000").s().p("AAXBCIgDgUIgBgVIAAgHIAAgHQAAgPgIAAQgLAAgHAIQgFAGgIAOQAAAigCAGQgDAFgFAAQgEAAgDgCQgDgDABgDIAAgEIABgNIABgNIAAg/IAAgOIAAgJIgBgIQAAgEACgCQADgDAEAAQAHAAABAIIABAQIAAATIgBATIAAAIQAIgKAIgFQAGgEAKAAQAOAAAFAJQAEAHABAOIABAQIACATIACASIAAACQABAEgDACQgDADgDAAQgHAAgCgHg");
	this.shape_61.setTransform(374.5,178.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FF0000").s().p("AgWBEQgDgCAAgEQAAgJATgqIgfg6IgEgHQgDgEAAgCQAAgEADgDQADgCADAAQAEAAADADQAPAUAPAnIANgfIANgbQADgFAFAAQADAAADADQADACAAAEIgBAEIgfBAQgLAYgEAQIgGARQgCAHgGAAQgDAAgDgDg");
	this.shape_62.setTransform(129.8,183.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FF0000").s().p("AAcAsIgGgGIgPAHIgJACQgUAAgKgMQgJgLAAgWQAAgTAPgPQAPgPASAAQAHAAAKADQAMAGAAAHQAAAAAAABQAAAAgBABQAAAAAAABQAAABgBAAIgBALIgBARQAAAMACAFIAFAQIACAFIABABQAAADgDADQgCADgDAAQgCAAgEgFgAgOgUQgJALAAAMQAAAOAFAHQAFAIAKAAQAGAAAGgDIAJgHQgDgWAAgLIABgIIABgJIgFgDIgEAAQgMAAgKALg");
	this.shape_63.setTransform(120.8,181.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FF0000").s().p("AgJA/IABggIABgfIAAgfIABgfQAAgJAGAAQAJAAAAAJIAAAfIgBAfIgBArIgBAUQgBAJgFAAQgJAAAAgJg");
	this.shape_64.setTransform(113.7,178.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FF0000").s().p("AggBHQgDgDAAgDIAAgkIAAghIgBgjIgCgSQAAgGACgEQADgFAFAAQAEAAACACQACACABAEIgBADIAAAFQAHgFAHgDQAGgCAFAAQATAAAIAQQAHAMAAAVQgBARgJAMQgLANgSAAQgHAAgLgCIAAAqQAAADgCADQgDACgEAAQgDAAgCgCgAgHgtQgEACgIAHIABAoQAKAEAIAAQALAAAFgIQAGgGAAgLQAAgQgFgIQgDgIgJAAQgGAAgGAEg");
	this.shape_65.setTransform(106.5,183.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(2,1,1).p("AvaqwIWrAAIaiAAAvaqwIAAkMAvaqwIAAZsEghygKwISYAA");
	this.shape_66.setTransform(280.4,221.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(2,1,1).p("AAAuwIAAEMIAAZV");
	this.shape_67.setTransform(327,220.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(189));

	// Layer 9
	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgkAuQgQgNAAgZQAAgZANgTQAPgVAYAAQARAAALAGQANAHAAAQQABALgMAIQgGAEgRAGIgnAUQAFAJAKAEQAJAFAKAAQAHAAAKgDQAMgEAFgFQADgGAEAAQAEAAADADQADADAAADQAAAMgUAJQgQAHgPAAQgWAAgQgMgAgVgbQgJAKgEASIAhgOQASgJAHgHQgIgJgQAAQgNAAgIALg");
	this.shape_68.setTransform(489.2,141.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgLBNIACgnIABgmIAAglIABgnQAAgLAIAAQALAAAAALIgBAnIgBAlIgBA1IgBAZQgBAKgHAAQgLAAAAgLg");
	this.shape_69.setTransform(480,138.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgpBXQgDgDAAgFIABgrIAAgpIgCgrIgBgWQAAgHACgFQAEgHAGAAQAEAAADADQADADAAAEIgBAEIgBAGQAKgGAIgDQAIgEAHAAQAWAAAKAUQAIAPAAAaQAAAVgMAPQgOAQgVAAQgJAAgNgDIgBAzQAAAFgCADQgDADgFAAQgFAAgDgDgAgJg4QgGADgIAJIABAxQAMAEAKAAQANAAAHgJQAGgHAAgOQAAgUgFgJQgFgKgJAAQgIAAgIAEg");
	this.shape_70.setTransform(471.2,144);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgJBNQgDgDAAgEIgBgUIAAgTIABgZIABgXQAAgFAEgDQADgDAEAAQACAAADADQAEADAAAFIgBAXIgCAZIAAATIABAUQAAAEgDADQgDADgDAAQgEAAgDgDgAgFg6QgEgEAAgFQAAgFAEgEQADgDAEAAQAFAAAEADQADAEAAAFQAAAFgDAEQgEAEgFAAQgEAAgDgEg");
	this.shape_71.setTransform(462.3,138.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgeAuQgPgOAAgXQAAgTAPgYQAQgZASAAQAKAAANAFQARAGAAAJQAAAEgDADQgDAEgEAAQgDgBgCgBIgEgEQgHgFgOAAQgJAAgLAUQgKARAAALQAAAPAKAIQAJAIAMAAQAHAAAHgEIAMgHIAFgBQAEAAADADQADADAAAEQAAAIgRAHQgOAHgKAAQgUAAgPgOg");
	this.shape_72.setTransform(453.4,141.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgJBNQgDgDAAgEIgBgUIAAgTIABgZIABgXQABgFADgDQADgDAEAAQACAAADADQAEADAAAFIgBAXIgBAZIAAATIAAAUQAAAEgDADQgDADgDAAQgEAAgDgDgAgGg6QgDgEAAgFQAAgFADgEQAFgDACAAQAFAAAEADQAEAEAAAFQAAAFgEAEQgEAEgFAAQgCAAgFgEg");
	this.shape_73.setTransform(444.9,138.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgGBLQgDgCAAgFIAAgMIABgMIgCg9IgYgCQgKgBAAgJQAAgGADgCQADgDAFgBIAWADIAAgQIgBgMQAAgFADgDQADgDAFAAQAIAAABAPIAAAKIAAAHIAAAGIAPgCQAMAAADACQAHABAAAJQAAAEgDAEQgDADgFAAIgFAAIgGgBIgOABIACA+IAAAFIAAAFQAAAYgLAAQgDAAgDgDg");
	this.shape_74.setTransform(436.4,139.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgoAxIAAhJIAAgLIAAgLQAAgLAKAAQAKAAAAASQAUgUAYAAQAJABAEAGQAEAHAAANIAAAHQAAANgKAAQgKAAAAgKIAAgIIAAgJQgRACgJAIQgJAHgGAOIAAA5QAAAKgLAAQgJAAAAgKg");
	this.shape_75.setTransform(426.3,141.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAiA2IgIgIIgSAJQgIADgDAAQgZAAgLgPQgLgNAAgbQAAgYASgSQASgTAWAAQAKAAALAEQAPAHAAAIQAAADgCACIgCAOIgBAVQAAAOACAIIAHATIACAGIABABQAAAFgDADQgDACgEAAQgCAAgFgFgAgRgaQgMAOAAAQQAAASAGAIQAGAJANAAQAIAAAHgEIALgIQgDgbAAgNIAAgLIACgLIgHgDIgEgBQgPAAgMANg");
	this.shape_76.setTransform(415.1,141.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgsBSQgDgDAAgEIAAgfIACgsQACgeAAgNIAAgPQAAgLACgFQACgJAIABIAKgBIAPgBQASAAARANQATAPAAAVQAAAbgUAOQgSAOgXAAIgNgCIgBA5QAAAEgDADQgDADgEAAQgEAAgDgDgAgQg/IgHAAIAAAUIgCArIAMAAQAQAAAMgIQAOgKAAgRQAAgMgNgJQgMgIgMAAIgIABg");
	this.shape_77.setTransform(403.9,138.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgGBLQgDgCAAgFIAAgMIABgMIgCg9IgYgCQgKgBAAgJQAAgGADgCQADgDAFgBIAWADIAAgQIgBgMQAAgFADgDQADgDAFAAQAIAAABAPIAAAKIAAAHIAAAGIAPgCQAMAAADACQAHABAAAJQAAAEgDAEQgDADgFAAIgFAAIgGgBIgOABIACA+IAAAFIAAAFQAAAYgLAAQgDAAgDgDg");
	this.shape_78.setTransform(386.3,139.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgdA7QgQgGAAgKQAAgFADgDQADgEAFABQADgBAFAGQADACAJACIAMABQAHAAAHgCQAKgDAAgHQAAgOgUgGIgKgCQgOgDgGgFQgJgDAAgNQAAgWAWgJQAGgEAMgDIAUgHQAFgCAFAAQAFAAADADQADADAAAEIABAKIABAJQAAAFgDADQgDADgEAAQgGAAgDgEQgBgDgBgJIgZAHQgPAIgBAJIAHADQAWAEAMAIQASAJAAAVQAAASgPAIQgNAIgRAAQgOAAgNgFg");
	this.shape_79.setTransform(375.5,141);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AAiA2IgIgIIgSAJQgIADgDAAQgZAAgLgPQgLgNAAgbQAAgYASgSQASgTAWAAQAKAAALAEQAPAHAAAIQAAADgCACIgCAOIgBAVQAAAOACAIIAHATIACAGIABABQAAAFgDADQgDACgEAAQgCAAgFgFgAgRgaQgMAOAAAQQAAASAGAIQAGAJANAAQAIAAAHgEIALgIQgDgbAAgNIAAgLIACgLIgHgDIgEgBQgPAAgMANg");
	this.shape_80.setTransform(364.8,141.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgsBSQgDgDAAgEIAAgfIACgsQACgeAAgNIAAgPQAAgLACgFQACgJAIABIAKgBIAPgBQASAAARANQATAPAAAVQAAAbgUAOQgSAOgXAAIgNgCIgBA5QAAAEgDADQgDADgEAAQgEAAgDgDgAgQg/IgHAAIAAAUIgCArIAMAAQAQAAAMgIQAOgKAAgRQAAgMgNgJQgMgIgMAAIgIABg");
	this.shape_81.setTransform(353.6,138.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgGBLQgDgCAAgFIAAgMIABgMIgCg9IgYgCQgKgBAAgJQAAgGADgCQADgDAFgBIAWADIAAgQIgBgMQAAgFADgDQADgDAFAAQAIAAABAPIAAAKIAAAHIAAAGIAPgCQAMAAADACQAHABAAAJQAAAEgDAEQgDADgFAAIgFAAIgGgBIgOABIACA+IAAAFIAAAFQAAAYgLAAQgDAAgDgDg");
	this.shape_82.setTransform(270.5,139.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgdA7QgQgGAAgKQAAgFADgDQADgEAFABQADgBAFAGQADACAJACIAMABQAHAAAHgCQAKgDAAgHQAAgOgUgGIgKgCQgOgDgGgFQgJgDAAgNQAAgWAWgJQAGgEAMgDIAUgHQAFgCAFAAQAFAAADADQADADAAAEIABAKIABAJQAAAFgDADQgDADgEAAQgGAAgDgEQgBgDgBgJIgZAHQgPAIgBAJIAHADQAWAEAMAIQASAJAAAVQAAASgPAIQgNAIgRAAQgOAAgNgFg");
	this.shape_83.setTransform(259.7,141);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AAiA2IgIgIIgSAJQgIADgDAAQgZAAgLgPQgLgNAAgbQAAgYASgSQASgTAWAAQAKAAALAEQAPAHAAAIQAAADgCACIgCAOIgBAVQAAAOACAIIAHATIACAGIABABQAAAFgDADQgDACgEAAQgCAAgFgFgAgRgaQgMAOAAAQQAAASAGAIQAGAJANAAQAIAAAHgEIALgIQgDgbAAgNIAAgLIACgLIgHgDIgEgBQgPAAgMANg");
	this.shape_84.setTransform(249.1,141.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgsBSQgDgDAAgEIAAgfIACgsQACgeAAgNIAAgPQAAgLACgFQACgJAIABIAKgBIAPgBQASAAARANQATAPAAAVQAAAbgUAOQgSAOgXAAIgNgCIgBA5QAAAEgDADQgDADgEAAQgEAAgDgDgAgQg/IgHAAIAAAUIgCArIAMAAQAQAAAMgIQAOgKAAgRQAAgMgNgJQgMgIgMAAIgIABg");
	this.shape_85.setTransform(237.9,138.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgGBLQgDgCAAgFIAAgMIABgMIgCg9IgYgCQgKgBAAgJQAAgGADgCQADgDAFgBIAWADIAAgQIgBgMQAAgFADgDQADgDAFAAQAIAAABAPIAAAKIAAAHIAAAGIAPgCQAMAAADACQAHABAAAJQAAAEgDAEQgDADgFAAIgFAAIgGgBIgOABIACA+IAAAFIAAAFQAAAYgLAAQgDAAgDgDg");
	this.shape_86.setTransform(154.8,139.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AAaA0IgDgXIgCgYIABgIIAAgKQAAgYgJAAQgMABgJAOQgKANgFARIgBALIgBALIABAJIABAKQAAAFgDADQgDACgFAAQgFAAgDgCQgDgDAAgFIAAgKIgBgJIACgeIABgeIAAgKIgBgKQAAgFAEgDQADgDAEAAQAKAAABAOIAAAMQASgXARAAQARAAAHAPQAFAKAAAUIAAAKIAAAIQAAAKADAOQACAOAAAIQAAAFgDADQgDADgFAAQgJAAgBgKg");
	this.shape_87.setTransform(144.2,141.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgkAuQgQgNAAgZQAAgZANgTQAPgVAYAAQARAAALAGQANAHAAAQQABALgMAIQgGAEgRAGIgnAUQAFAJAKAEQAJAFAKAAQAHAAAKgDQAMgEAFgFQADgGAEAAQAEAAADADQADADAAADQAAAMgUAJQgQAHgPAAQgWAAgQgMgAgVgbQgJAKgEASIAhgOQASgJAHgHQgIgJgQAAQgNAAgIALg");
	this.shape_88.setTransform(132.4,141.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgdA7QgQgGAAgKQAAgFADgDQADgEAFABQADgBAFAGQADACAJACIAMABQAHAAAHgCQAKgDAAgHQAAgOgUgGIgKgCQgOgDgGgFQgJgDAAgNQAAgWAWgJQAGgEAMgDIAUgHQAFgCAFAAQAFAAADADQADADAAAEIABAKIABAJQAAAFgDADQgDADgEAAQgGAAgDgEQgBgDgBgJIgZAHQgPAIgBAJIAHADQAWAEAMAIQASAJAAAVQAAASgPAIQgNAIgRAAQgOAAgNgFg");
	this.shape_89.setTransform(120.5,141);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgjAuQgRgNAAgZQAAgZANgTQAPgVAYAAQARAAALAGQANAHAAAQQAAALgMAIQgFAEgRAGIgoAUQAHAJAJAEQAJAFAJAAQAIAAAKgDQAMgEAFgFQADgGAEAAQAEAAADADQADADAAADQAAAMgTAJQgRAHgQAAQgWAAgOgMgAgVgbQgJAKgEASIAhgOQARgJAJgHQgKgJgPAAQgNAAgIALg");
	this.shape_90.setTransform(109.6,141.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgoAxIAAhJIAAgLIAAgLQAAgLAKAAQAKAAAAASQAUgUAYAAQAJABAEAGQAEAHAAANIAAAHQAAANgKAAQgKAAAAgKIAAgIIAAgJQgRACgJAIQgJAHgGAOIAAA5QAAAKgLAAQgJAAAAgKg");
	this.shape_91.setTransform(98.4,141.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgsBSQgDgDAAgEIAAgfIACgsQACgeAAgNIAAgPQAAgLACgFQACgJAIABIAKgBIAPgBQASAAARANQATAPAAAVQAAAbgUAOQgSAOgXAAIgNgCIgBA5QAAAEgDADQgDADgEAAQgEAAgDgDgAgQg/IgHAAIAAAUIgCArIAMAAQAQAAAMgIQAOgKAAgRQAAgMgNgJQgMgIgMAAIgIABg");
	this.shape_92.setTransform(87.3,138.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgHAHQgCgDAAgEQAAgDACgDQAEgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgEgDg");
	this.shape_93.setTransform(467,95.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgdAlQgNgKAAgUQAAgVALgQQAMgRATAAQAOABAJAEQALAGAAANQAAAJgKAHQgEAEgOAEIggAQQAFAIAHADQAIAEAIgBQAGAAAIgCQAKgDADgEQADgFAEAAQADAAACADQACACAAADQAAAKgPAGQgOAHgMgBQgSABgNgLgAgRgWQgHAIgDAPIAbgLQAOgIAGgFQgHgIgNAAQgKAAgHAJg");
	this.shape_94.setTransform(460,91.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgXAwQgOgFAAgIQAAgEADgDQADgCADAAQADAAAEAEQADACAHACIAKABQAFgBAGgBQAIgDAAgFQAAgNgRgDIgHgCQgLgDgFgDQgIgDAAgLQAAgRASgJIAPgFIAQgGQAEgBAEAAQAEAAACACQADADAAAEIABAHIABAIQAAAEgCACQgDADgEAAQgFAAgBgEQgCgCgBgIIgUAHQgMAFAAAIIAFACQASADAKAHQAOAHAAASQAAAOgMAHQgKAHgOAAQgMAAgKgFg");
	this.shape_95.setTransform(450.3,90.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AAVAqIgDgTIgBgTIABgHIAAgIQAAgSgHgBQgKAAgHAMQgIALgFAOIgBAIIAAAJIAAAIIABAIQAAAEgCADQgDABgEAAQgDAAgDgBQgCgDAAgEIgBgIIAAgIIABgYIABgYIAAgIIAAgJQAAgEACgCQADgCADgBQAIAAABAMIAAAKQAPgUAOAAQAOAAAFANQAEAIAAAQIAAAJIAAAGIACATQACAMAAAHQAAAEgCACQgDACgEAAQgHAAgBgIg");
	this.shape_96.setTransform(441.7,91.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgdAlQgNgKAAgUQAAgVALgQQAMgRATAAQAOABAJAEQALAGAAANQAAAJgKAHQgEAEgOAEIggAQQAFAIAHADQAIAEAIgBQAGAAAIgCQAKgDADgEQADgFAEAAQADAAACADQACACAAADQAAAKgPAGQgOAHgMgBQgSABgNgLgAgRgWQgHAIgDAPIAbgLQAOgIAGgFQgHgIgNAAQgKAAgHAJg");
	this.shape_97.setTransform(432,91.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgEA+QgCgDgBgDIAAgKIABgKIgCgxIgTgCQgJgBAAgIQABgEACgCQACgDAEAAIASACIAAgMIAAgLQAAgEACgCQADgDAEAAQAFAAACANIAAAIIAAAFIAAAGIAMgCIANABQAEACAAAGQAAAEgCADQgCACgEAAIgEAAIgFAAIgMABIACAyIAAAEIAAAFQAAATgJAAQgCAAgCgCg");
	this.shape_98.setTransform(422.7,89.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgEA+QgDgDABgDIAAgKIAAgKIgCgxIgUgCQgHgBAAgIQAAgEACgCQADgDADAAIATACIAAgMIgBgLQAAgEADgCQACgDADAAQAHAAABANIAAAIIAAAFIAAAGIANgCIALABQAGACAAAGQAAAEgCADQgDACgEAAIgFAAIgDAAIgMABIABAyIAAAEIAAAFQAAATgJAAQgBAAgDgCg");
	this.shape_99.setTransform(408.8,89.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AAVAqIgDgTIgBgTIABgHIAAgIQAAgSgHgBQgKAAgHAMQgIALgFAOIgBAIIAAAJIAAAIIABAIQAAAEgCADQgDABgEAAQgDAAgDgBQgCgDAAgEIgBgIIAAgIIABgYIABgYIAAgIIAAgJQAAgEACgCQADgCADgBQAIAAABAMIAAAKQAPgUAOAAQAOAAAFANQAEAIAAAQIAAAJIAAAGIACATQACAMAAAHQAAAEgCACQgDACgEAAQgHAAgBgIg");
	this.shape_100.setTransform(400.1,91.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgdAlQgNgKAAgUQAAgVALgQQAMgRATAAQAOABAJAEQALAGAAANQAAAJgKAHQgEAEgOAEIggAQQAFAIAHADQAIAEAIgBQAGAAAIgCQAKgDADgEQADgFAEAAQADAAACADQACACAAADQAAAKgPAGQgOAHgMgBQgSABgNgLgAgRgWQgHAIgDAPIAbgLQAOgIAGgFQgHgIgNAAQgKAAgHAJg");
	this.shape_101.setTransform(390.4,91.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgXAwQgOgFAAgIQAAgEADgDQADgCADAAQADAAAEAEQADACAHACIAKABQAFgBAGgBQAIgDAAgFQAAgNgRgDIgHgCQgLgDgFgDQgIgDAAgLQAAgRASgJIAPgFIAQgGQAEgBAEAAQAEAAACACQADADAAAEIABAHIABAIQAAAEgCACQgDADgEAAQgFAAgBgEQgCgCgBgIIgUAHQgMAFAAAIIAFACQASADAKAHQAOAHAAASQAAAOgMAHQgKAHgOAAQgMAAgKgFg");
	this.shape_102.setTransform(380.7,90.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgdAlQgNgKAAgUQAAgVALgQQAMgRATAAQAOABAJAEQALAGAAANQAAAJgKAHQgEAEgOAEIggAQQAFAIAHADQAIAEAIgBQAGAAAIgCQAKgDADgEQADgFAEAAQADAAACADQACACAAADQAAAKgPAGQgOAHgMgBQgSABgNgLgAgRgWQgHAIgDAPIAbgLQAOgIAGgFQgHgIgNAAQgKAAgHAJg");
	this.shape_103.setTransform(371.9,91.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AghAoIAAg8IABgJIAAgIQAAgJAIAAQAIAAAAAOQAQgQAUAAQAHAAADAFQAEAGAAALIAAAGQgBALgIAAQgIAAAAgJIAAgGIAAgHQgOABgGAGQgIAGgFAMIAAAuQAAAJgJAAQgIAAAAgJg");
	this.shape_104.setTransform(362.7,91.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AghBHQgCgDAAgDIAAgkIAAghIgBgjIgBgSQAAgGABgEQAEgFAEAAQAEAAACACQACACABAEIgBADIAAAFQAHgFAHgDQAGgCAGAAQASAAAIAQQAHAMAAAVQAAARgLAMQgKANgSAAQgHAAgLgCIAAAqQAAADgCADQgDACgEAAQgDAAgDgCgAgHgtQgFACgHAHIABAoQAKAEAIAAQALAAAFgIQAFgGABgLQAAgQgFgIQgEgIgHAAQgHAAgGAEg");
	this.shape_105.setTransform(353.5,93.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgdAlQgNgKAAgUQAAgVALgQQAMgRATAAQAOABAJAEQALAGAAANQAAAJgKAHQgEAEgOAEIggAQQAFAIAHADQAIAEAIgBQAGAAAIgCQAKgDADgEQADgFAEAAQADAAACADQACACAAADQAAAKgPAGQgOAHgMgBQgSABgNgLgAgRgWQgHAIgDAPIAbgLQAOgIAGgFQgHgIgNAAQgKAAgHAJg");
	this.shape_106.setTransform(338.4,91.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AAYBCIgEgUIgCgVIAAgHIABgHQAAgPgJAAQgKAAgIAIQgEAGgHAOQAAAigDAGQgDAFgFAAQgEAAgDgCQgCgDAAgDIABgEIABgNIAAgNIAAg/IAAgOIAAgJIgBgIQAAgEACgCQADgDAEAAQAHAAABAIIACAQIgBATIAAATIAAAIQAHgKAIgFQAHgEAIAAQAPAAAGAJQAEAHAAAOIAAAQIACATIAEASIAAACQgBAEgCACQgCADgEAAQgGAAgCgHg");
	this.shape_107.setTransform(328.3,88.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgEA+QgCgDAAgDIAAgKIAAgKIgCgxIgUgCQgHgBgBgIQAAgEADgCQACgDAEAAIASACIAAgMIAAgLQAAgEADgCQACgDADAAQAHAAABANIAAAIIAAAFIAAAGIANgCIALABQAFACABAGQAAAEgDADQgCACgEAAIgFAAIgDAAIgNABIACAyIAAAEIAAAFQABATgKAAQgBAAgDgCg");
	this.shape_108.setTransform(318.7,89.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgZAlQgMgNAAgUQgBgSALgPQAMgRAUAAQARAAAJAPQAIANgBASQAAASgKAOQgLAPgRAAQgOAAgLgKgAgOgQQgGAKAAAKQAAANAHAHQAGAGAHAAQAIAAAGgGQAIgIAAgNQABgfgTgBQgLAAgHANg");
	this.shape_109.setTransform(304.2,91.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgEA+QgDgDABgDIAAgKIAAgKIgCgxIgUgCQgHgBAAgIQAAgEACgCQACgDAEAAIATACIAAgMIgBgLQAAgEADgCQACgDADAAQAHAAABANIAAAIIAAAFIAAAGIANgCIALABQAGACAAAGQAAAEgCADQgDACgEAAIgFAAIgDAAIgMABIABAyIAAAEIAAAFQAAATgJAAQgBAAgDgCg");
	this.shape_110.setTransform(295.4,89.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AAKAaQgCgCAAgEIAAggIACgKQABgFAGAAQADAAACACQADADAAADIgBADIAAAEIgBAgQAAAJgIgBQgDABgCgDgAgYANIABgQIAAgQQAAgEACgCQACgCAEAAQADAAACACQADACAAAEIgBAQIAAAPIABAFIAAADQAAAEgCACQgDACgDAAQgJAAAAgPg");
	this.shape_111.setTransform(281.6,84.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgeA8QgMgNAAgUQAAgXAMgMQANgOASAAQAKAAAFADIAJAGQABglABgNQACgHAGgBQAIAAAAAJQAAAMgDAqIgBAYQAAAdADAPIAAACQAAAEgDACQgCACgDAAQgGAAgCgIQgHAFgHACQgGADgGgBQgSABgMgMgAgTABQgIAIAAASQAAAMAIAIQAIAIALAAQAGAAAFgDIAJgHIADgDIAAgPIAAgKIAAgKQgDgHgGgCQgFgEgIAAQgNAAgHAHg");
	this.shape_112.setTransform(272.8,88.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgdAlQgNgKAAgUQAAgVALgQQAMgRATAAQAOABAJAEQALAGAAANQAAAJgKAHQgEAEgOAEIggAQQAFAIAHADQAIAEAIgBQAGAAAIgCQAKgDADgEQADgFAEAAQADAAACADQACACAAADQAAAKgPAGQgOAHgMgBQgSABgNgLgAgRgWQgHAIgDAPIAbgLQAOgIAGgFQgHgIgNAAQgKAAgHAJg");
	this.shape_113.setTransform(262.8,91.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AAKAaQgCgCAAgEIAAggIACgKQABgFAGAAQADAAACACQADADAAADIgBADIAAAEIgBAgQAAAJgIgBQgDABgCgDgAgYANIABgQIAAgQQAAgEACgCQACgCAEAAQADAAACACQADACAAAEIgBAQIAAAPIABAFIAAADQAAAEgCACQgDACgDAAQgJAAAAgPg");
	this.shape_114.setTransform(253.6,84.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgeBEQgLgCABgHQAAgIAHAAIALABQAHACAJAAQAPgBAGgQQAFgKAAgXQgFAJgHAFQgGAEgGAAQgQAAgKgLQgKgLAAgPQAAgYANgOQAOgPAXAAQAIAAAFACQAGACADAEQAJAAAAALIgBAQIgDARIgCAbQgBASgDALQgDAOgJAHQgLAIgSAAQgLAAgJgBgAgPgrQgIALAAAQQAAAMAEAFQAGAGAJAAQAHAAAJgIQAHgJABgJIAEgeQgEgDgEgBQgDgBgEAAQgPAAgJALg");
	this.shape_115.setTransform(239.8,93.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AAVAqIgDgTIgBgTIABgHIAAgIQAAgSgHgBQgKAAgHAMQgIALgFAOIgBAIIAAAJIAAAIIABAIQAAAEgCADQgDABgEAAQgDAAgDgBQgCgDAAgEIgBgIIAAgIIABgYIABgYIAAgIIAAgJQAAgEACgCQADgCADgBQAIAAABAMIAAAKQAPgUAOAAQAOAAAFANQAEAIAAAQIAAAJIAAAGIACATQACAMAAAHQAAAEgCACQgDACgEAAQgHAAgBgIg");
	this.shape_116.setTransform(230.7,91.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgHA/QgCgCAAgFIgBgPIAAgQIABgVIAAgSQABgEACgDQACgCAEAAQACAAADACQABADAAAEIAAASIgBAVIABAQIAAAPQgBAFgCACQgCADgCgBQgEABgCgDgAgEgwQgEgCAAgEQAAgFAEgCQADgDACAAQAEAAADADQADACABAFQgBAEgDACQgDAEgEAAQgCAAgDgEg");
	this.shape_117.setTransform(223.4,89);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgeA8QgMgNAAgUQAAgXAMgMQANgOASAAQAKAAAFADIAJAGQABglABgNQACgHAGgBQAIAAAAAJQAAAMgDAqIgBAYQAAAdADAPIAAACQAAAEgDACQgCACgDAAQgGAAgCgIQgHAFgHACQgGADgGgBQgSABgMgMgAgTABQgIAIAAASQAAAMAIAIQAIAIALAAQAGAAAFgDIAJgHIADgDIAAgPIAAgKIAAgKQgDgHgGgCQgFgEgIAAQgNAAgHAHg");
	this.shape_118.setTransform(215.4,88.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgeA8QgMgNAAgUQAAgXAMgMQANgOASAAQAKAAAFADIAJAGQABglABgNQACgHAGgBQAIAAAAAJQAAAMgDAqIgBAYQAAAdADAPIAAACQAAAEgDACQgCACgDAAQgGAAgCgIQgHAFgHACQgGADgGgBQgSABgMgMgAgTABQgIAIAAASQAAAMAIAIQAIAIALAAQAGAAAFgDIAJgHIADgDIAAgPIAAgKIAAgKQgDgHgGgCQgFgEgIAAQgNAAgHAHg");
	this.shape_119.setTransform(204.8,88.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AAcAtIgGgHIgPAHQgHACgCAAQgUAAgKgLQgJgMAAgWQAAgTAPgPQAPgPASgBQAHABAKAEQAMAFAAAGQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABIgBALIgBARQAAAMACAGIAFAPIACAEIABACQAAADgDADQgCACgDAAQgCAAgEgDgAgOgVQgJAMAAAMQAAAOAFAIQAFAHAKAAQAGAAAGgDIAJgHQgDgWAAgLIABgIIABgJIgFgDIgEgBQgMABgKAKg");
	this.shape_120.setTransform(195,91.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgWBEQgDgCAAgEQAAgJATgqIgfg6IgEgHQgDgEAAgCQAAgEADgDQADgCADAAQAEAAADADQAPAUAPAnIANgfIANgbQADgFAFAAQADAAADADQADACAAAEIgBAEIgfBAQgLAYgEAQIgGARQgCAHgGAAQgDAAgDgDg");
	this.shape_121.setTransform(180.1,93.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgaBCQgDADgDAAQgEAAgCgCQgDgCABgDIAAgHIAAgHIAAgcIgBgaIAAgYIAAgZQAAgFACgEQADgGAGABQAGAAAAAHIAAAEIgBADIAAAUIgBAWQAIgFAHgDQAHgCAEAAQATAAAMAOQALAMAAATQAAAVgNANQgNAPgRAAQgNgBgMgEgAgMgDIgOAHIAAAQIAAANIAAAOIANAGQAFABAHAAQALAAAHgJQAJgJAAgOQAAgNgGgIQgIgHgMAAQgFAAgHADg");
	this.shape_122.setTransform(170.5,88.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgdAlQgNgKAAgUQAAgVALgQQAMgRATAAQAOABAJAEQALAGAAANQAAAJgKAHQgEAEgOAEIggAQQAFAIAHADQAIAEAIgBQAGAAAIgCQAKgDADgEQADgFAEAAQADAAACADQACACAAADQAAAKgPAGQgOAHgMgBQgSABgNgLgAgRgWQgHAIgDAPIAbgLQAOgIAGgFQgHgIgNAAQgKAAgHAJg");
	this.shape_123.setTransform(154.8,91.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgIA/IABggIAAgfIABgfIAAgfQAAgJAHAAQAIAAABAJIgBAfIAAAfIgCArIgBAUQAAAJgGAAQgJAAABgJg");
	this.shape_124.setTransform(147.3,88.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AggBHQgDgDAAgDIAAgkIAAghIgBgjIgCgSQAAgGADgEQADgFAEAAQAEAAACACQACACAAAEIAAADIgBAFQAIgFAHgDQAGgCAFAAQATAAAIAQQAGAMABAVQAAARgKAMQgMANgRAAQgHAAgLgCIAAAqQAAADgDADQgCACgDAAQgFAAgBgCgAgHgtQgEACgIAHIACAoQAJAEAIAAQAKAAAHgIQAEgGAAgLQAAgQgDgIQgFgIgIAAQgFAAgHAEg");
	this.shape_125.setTransform(140.1,93.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgHA/QgDgCABgFIgBgPIAAgQIABgVIAAgSQABgEACgDQACgCAEAAQACAAADACQACADAAAEIgBASIgBAVIABAQIAAAPQgBAFgCACQgCADgCgBQgEABgCgDgAgFgwQgDgCAAgEQAAgFADgCQAEgDACAAQAEAAADADQADACAAAFQAAAEgDACQgDAEgEAAQgCAAgEgEg");
	this.shape_126.setTransform(132.9,89);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgYAmQgNgLABgTQgBgQAMgTQAOgVAOAAQAJAAALAEQANAGAAAHQAAADgCADQgDACgDAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBgBAAAAIgEgDQgFgFgMAAQgGABgKAQQgHAOAAAJQAAALAHAIQAIAFAKAAQAEAAAHgDIAKgEIADgCQAEAAACADQACACAAADQAAAHgNAGQgMAFgHAAQgRAAgMgLg");
	this.shape_127.setTransform(125.6,91.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgHA/QgCgCgBgFIAAgPIAAgQIAAgVIABgSQABgEACgDQACgCAEAAQACAAADACQABADABAEIgBASIgBAVIABAQIAAAPQgBAFgCACQgCADgCgBQgEABgCgDgAgEgwQgEgCAAgEQAAgFAEgCQADgDACAAQAEAAADADQADACABAFQgBAEgDACQgDAEgEAAQgCAAgDgEg");
	this.shape_128.setTransform(118.6,89);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgEA+QgCgDAAgDIAAgKIAAgKIgCgxIgUgCQgHgBgBgIQAAgEADgCQADgDADAAIASACIAAgMIAAgLQAAgEADgCQACgDADAAQAHAAABANIAAAIIAAAFIAAAGIANgCIAMABQAEACABAGQgBAEgCADQgCACgEAAIgFAAIgDAAIgNABIACAyIAAAEIAAAFQABATgKAAQgBAAgDgCg");
	this.shape_129.setTransform(111.6,89.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AghAoIAAg8IABgJIAAgIQAAgJAIAAQAIAAAAAOQAQgQAUAAQAHAAADAFQAEAGAAALIAAAGQgBALgIAAQgIAAAAgJIAAgGIAAgHQgOABgGAGQgIAGgFAMIAAAuQAAAJgJAAQgIAAAAgJg");
	this.shape_130.setTransform(103.3,91.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AAcAtIgGgHIgPAHQgHACgCAAQgUAAgKgLQgJgMAAgWQAAgTAPgPQAPgPASgBQAHABAKAEQAMAFAAAGQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABIgBALIgBARQAAAMACAGIAFAPIACAEIABACQAAADgDADQgCACgDAAQgCAAgEgDgAgOgVQgJAMAAAMQAAAOAFAIQAFAHAKAAQAGAAAGgDIAJgHQgDgWAAgLIABgIIABgJIgFgDIgEgBQgMABgKAKg");
	this.shape_131.setTransform(94.1,91.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AghBHQgCgDAAgDIAAgkIAAghIgBgjIgBgSQAAgGABgEQAEgFAFAAQADAAACACQACACABAEIgBADIAAAFQAHgFAHgDQAGgCAGAAQASAAAIAQQAHAMAAAVQAAARgLAMQgKANgSAAQgHAAgLgCIAAAqQAAADgCADQgDACgEAAQgDAAgDgCgAgHgtQgFACgHAHIABAoQAKAEAIAAQALAAAFgIQAFgGABgLQAAgQgFgIQgEgIgHAAQgHAAgGAEg");
	this.shape_132.setTransform(84.8,93.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgEA+QgCgDAAgDIAAgKIAAgKIgCgxIgUgCQgHgBgBgIQAAgEADgCQADgDADAAIASACIAAgMIAAgLQAAgEADgCQACgDADAAQAHAAABANIAAAIIAAAFIAAAGIANgCIALABQAFACABAGQAAAEgDADQgCACgEAAIgFAAIgDAAIgNABIACAyIAAAEIAAAFQABATgKAAQgBAAgDgCg");
	this.shape_133.setTransform(474.8,62.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgXAwQgOgFAAgIQAAgEADgDQADgCADAAQADAAAEAEQADACAHACIAKABQAFAAAGgCQAIgDAAgFQAAgMgRgEIgHgCQgLgDgFgDQgIgDAAgLQAAgRASgJIAPgFIAQgGQAEgCAEABQAEgBACADQADADAAAEIABAHIABAIQAAAEgCACQgDADgEAAQgFAAgBgEQgCgCgBgIIgUAHQgMAGAAAHIAFACQASAEAKAGQAOAHAAASQAAAOgMAIQgKAFgOABQgMAAgKgFg");
	this.shape_134.setTransform(466,63.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AAcAtIgGgHIgPAHQgHACgCAAQgUAAgKgLQgJgMAAgWQAAgTAPgPQAPgQASAAQAHAAAKAFQAMAFAAAGQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABIgBALIgBARQAAALACAHIAFAPIACAEIABACQAAADgDADQgCADgDgBQgCAAgEgDgAgOgVQgJAMAAAMQAAAOAFAIQAFAHAKAAQAGAAAGgDIAJgHQgDgWAAgLIABgIIABgKIgFgCIgEgBQgMABgKAKg");
	this.shape_135.setTransform(457.3,64.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AghBHQgCgDAAgDIAAgkIAAghIgBgjIgBgSQAAgGABgEQAEgFAEAAQAEAAACACQACACABAEIgBADIAAAFQAHgFAHgDQAGgCAGAAQASAAAIAQQAHAMAAAVQAAARgLAMQgKANgSAAQgHAAgLgCIAAAqQAAADgCADQgDACgEAAQgDAAgDgCgAgHgtQgFACgHAHIABAoQAKAEAIAAQALAAAFgIQAFgGABgLQAAgQgFgIQgEgIgHAAQgHAAgGAEg");
	this.shape_136.setTransform(448,66.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgeA8QgMgNAAgUQAAgXAMgMQANgOASAAQAKAAAFADIAJAGQABglABgNQACgHAGAAQAIAAAAAIQAAAMgDAqIgBAYQAAAdADAPIAAACQAAAEgDACQgCACgDAAQgGAAgCgIQgHAFgHACQgGACgGAAQgSABgMgMgAgTABQgIAIAAASQAAALAIAJQAIAIALAAQAGAAAFgDIAJgHIADgDIAAgPIAAgKIAAgKQgDgHgGgCQgFgEgIAAQgNAAgHAHg");
	this.shape_137.setTransform(432.3,61.7);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AAVAqIgDgTIgBgTIABgHIAAgIQAAgSgHgBQgKAAgHAMQgIALgFAOIgBAIIAAAJIAAAIIABAIQAAAEgCADQgDACgEgBQgDABgDgCQgCgDAAgEIgBgIIAAgIIABgYIABgYIAAgIIAAgJQAAgDACgDQADgDADABQAIAAABALIAAAKQAPgUAOAAQAOAAAFANQAEAIAAAQIAAAJIAAAGIACATQACAMAAAHQAAAEgCACQgDACgEAAQgHABgBgJg");
	this.shape_138.setTransform(422.6,64);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AAcAtIgGgHIgPAHQgHACgCAAQgUAAgKgLQgJgMAAgWQAAgTAPgPQAPgQASAAQAHAAAKAFQAMAFAAAGQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABIgBALIgBARQAAALACAHIAFAPIACAEIABACQAAADgDADQgCADgDgBQgCAAgEgDgAgOgVQgJAMAAAMQAAAOAFAIQAFAHAKAAQAGAAAGgDIAJgHQgDgWAAgLIABgIIABgKIgFgCIgEgBQgMABgKAKg");
	this.shape_139.setTransform(413.1,64.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgdAmQgNgMAAgTQAAgVALgQQAMgRATAAQAOABAJAFQALAGAAAMQAAAJgKAHQgEADgOAFIggAQQAFAIAHADQAIAEAIgBQAGAAAIgCQAKgCADgFQADgFAEAAQADAAACADQACACAAADQAAAKgPAGQgOAHgMgBQgSABgNgKgAgRgWQgHAIgDAPIAbgLQAOgIAGgFQgHgIgNAAQgKAAgHAJg");
	this.shape_140.setTransform(398.4,64.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgXAwQgOgFAAgIQAAgEADgDQADgCADAAQADAAAEAEQADACAHACIAKABQAFAAAGgCQAIgDAAgFQAAgMgRgEIgHgCQgLgDgFgDQgIgDAAgLQAAgRASgJIAPgFIAQgGQAEgCAEABQAEgBACADQADADAAAEIABAHIABAIQAAAEgCACQgDADgEAAQgFAAgBgEQgCgCgBgIIgUAHQgMAGAAAHIAFACQASAEAKAGQAOAHAAASQAAAOgMAIQgKAFgOABQgMAAgKgFg");
	this.shape_141.setTransform(388.7,63.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AAVAqIgDgTIgBgTIABgHIAAgIQAAgSgHgBQgKAAgHAMQgIALgFAOIgBAIIAAAJIAAAIIABAIQAAAEgCADQgDACgEgBQgDABgDgCQgCgDAAgEIgBgIIAAgIIABgYIABgYIAAgIIAAgJQAAgDACgDQADgDADABQAIAAABALIAAAKQAPgUAOAAQAOAAAFANQAEAIAAAQIAAAJIAAAGIACATQACAMAAAHQAAAEgCACQgDACgEAAQgHABgBgJg");
	this.shape_142.setTransform(380.1,64);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgdAmQgNgMAAgTQAAgVALgQQAMgRATAAQAOABAJAFQALAGAAAMQAAAJgKAHQgEADgOAFIggAQQAFAIAHADQAIAEAIgBQAGAAAIgCQAKgCADgFQADgFAEAAQADAAACADQACACAAADQAAAKgPAGQgOAHgMgBQgSABgNgKgAgRgWQgHAIgDAPIAbgLQAOgIAGgFQgHgIgNAAQgKAAgHAJg");
	this.shape_143.setTransform(370.4,64.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgEA+QgDgDABgDIAAgKIAAgKIgCgxIgUgCQgHgBAAgIQAAgEACgCQADgDADAAIATACIAAgMIgBgLQAAgEADgCQACgDADAAQAHAAABANIAAAIIAAAFIAAAGIANgCIALABQAGACAAAGQAAAEgCADQgDACgEAAIgFAAIgDAAIgMABIABAyIAAAEIAAAFQAAATgJAAQgBAAgDgCg");
	this.shape_144.setTransform(361.1,62.6);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgEA+QgDgDAAgDIAAgKIABgKIgCgxIgTgCQgJgBAAgIQABgEACgCQACgDAEAAIASACIAAgMIAAgLQAAgEACgCQADgDADAAQAGAAACANIAAAIIAAAFIAAAGIAMgCIANABQAEACAAAGQAAAEgCADQgCACgEAAIgEAAIgFAAIgMABIACAyIAAAEIAAAFQAAATgJAAQgBAAgDgCg");
	this.shape_145.setTransform(347.2,62.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgXAwQgOgFAAgIQAAgEADgDQADgCADAAQADAAAEAEQADACAHACIAKABQAFAAAGgCQAIgDAAgFQAAgMgRgEIgHgCQgLgDgFgDQgIgDAAgLQAAgRASgJIAPgFIAQgGQAEgCAEABQAEgBACADQADADAAAEIABAHIABAIQAAAEgCACQgDADgEAAQgFAAgBgEQgCgCgBgIIgUAHQgMAGAAAHIAFACQASAEAKAGQAOAHAAASQAAAOgMAIQgKAFgOABQgMAAgKgFg");
	this.shape_146.setTransform(338.3,63.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AAcAtIgGgHIgPAHQgHACgCAAQgUAAgKgLQgJgMAAgWQAAgTAPgPQAPgQASAAQAHAAAKAFQAMAFAAAGQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABIgBALIgBARQAAALACAHIAFAPIACAEIABACQAAADgDADQgCADgDgBQgCAAgEgDgAgOgVQgJAMAAAMQAAAOAFAIQAFAHAKAAQAGAAAGgDIAJgHQgDgWAAgLIABgIIABgKIgFgCIgEgBQgMABgKAKg");
	this.shape_147.setTransform(329.6,64.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AghBHQgCgDAAgDIAAgkIAAghIgBgjIgBgSQAAgGACgEQACgFAGAAQADAAACACQADACAAAEIgBADIgBAFQAIgFAHgDQAGgCAGAAQARAAAJAQQAGAMAAAVQABARgLAMQgLANgRAAQgHAAgLgCIAAAqQAAADgDADQgCACgDAAQgFAAgCgCgAgHgtQgFACgGAHIABAoQAJAEAIAAQAKAAAHgIQAEgGAAgLQAAgQgDgIQgEgIgIAAQgGAAgHAEg");
	this.shape_148.setTransform(320.3,66.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AghAoIAAg8IABgJIAAgIQAAgJAIAAQAIAAAAAOQAQgQAUAAQAHAAADAFQAEAGAAALIAAAGQgBALgIAAQgIAAAAgJIAAgGIAAgHQgOABgGAGQgIAGgFAMIAAAuQAAAJgJAAQgIAAAAgJg");
	this.shape_149.setTransform(305.9,64.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgHA/QgCgDgBgEIAAgPIAAgQIAAgVIABgSQABgEACgDQACgCAEAAQACAAADACQABADAAAEIAAASIgBAVIABAQIAAAPQgBAEgCADQgCADgCgBQgEABgCgDgAgEgwQgEgCAAgEQAAgFAEgCQADgDACgBQAEABADADQADACABAFQgBAEgDACQgDAEgEAAQgCAAgDgEg");
	this.shape_150.setTransform(299,61.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgdAmQgNgMAAgTQAAgVALgQQAMgRATAAQAOABAJAFQALAGAAAMQAAAJgKAHQgEADgOAFIggAQQAFAIAHADQAIAEAIgBQAGAAAIgCQAKgCADgFQADgFAEAAQADAAACADQACACAAADQAAAKgPAGQgOAHgMgBQgSABgNgKgAgRgWQgHAIgDAPIAbgLQAOgIAGgFQgHgIgNAAQgKAAgHAJg");
	this.shape_151.setTransform(291.6,64.1);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AAXBCIgDgUIgBgVIAAgHIAAgHQAAgPgIAAQgLAAgHAIQgFAGgIAOQAAAigCAGQgDAFgFAAQgEAAgDgCQgDgDAAgDIABgEIABgNIABgNIAAg/IAAgOIAAgJIgBgIQAAgEADgCQACgDAEAAQAHAAABAIIABAQIAAATIgBATIAAAIQAIgKAIgFQAGgEAKAAQAOAAAFAJQAEAHABAOIABAQIACATIACASIAAACQABAEgDACQgDADgDAAQgHAAgCgHg");
	this.shape_152.setTransform(281.4,61.7);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgEA+QgCgDgBgDIAAgKIABgKIgCgxIgTgCQgJgBABgIQgBgEADgCQADgDADAAIATACIAAgMIgBgLQAAgEACgCQADgDAEAAQAFAAACANIAAAIIAAAFIAAAGIAMgCIANABQAEACAAAGQAAAEgBADQgDACgEAAIgEAAIgFAAIgLABIABAyIAAAEIAAAFQAAATgJAAQgCAAgCgCg");
	this.shape_153.setTransform(271.8,62.6);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgEAzQgCgCAAgEIgCggIgCgdQAAgJgDgGQgGADgHAHIgKALIgEAGIgBANIgBAPIAAAIIABAHQAAADgCADQgDACgEAAQgKAAAAgWIABgQIABgOIAAgOIgBgOQAAgUAJAAQADAAADADQADADAAAEIgBAFIAAAFIAAAJQAFgJAIgIQAJgHAHAAQANAAAEAOQAEgHAHgDQAHgDAIAAQAPAAAFAQQACADACAVIAGAxQABADgDADQgDACgDAAQgIAAgBgIIgDgbIgDgZQgBgGgCgGQgDgIgDAAQgEAAgJAGQgIAFgDADIABAQIACAWQACAOAAAJQAAAEgCACQgDADgEAAQgBAAgDgDg");
	this.shape_154.setTransform(255.3,64.1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AghAoIAAg8IABgJIAAgIQAAgJAIAAQAIAAAAAOQAQgQAUAAQAHAAADAFQAEAGAAALIAAAGQgBALgIAAQgIAAAAgJIAAgGIAAgHQgOABgGAGQgIAGgFAMIAAAuQAAAJgJAAQgIAAAAgJg");
	this.shape_155.setTransform(244.1,64.1);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgZAlQgMgMAAgVQgBgSALgPQAMgRAUgBQARAAAJAQQAIANgBASQAAASgKAOQgLAPgRAAQgOAAgLgKgAgOgQQgGAKAAAKQAAANAHAHQAGAGAHAAQAIAAAGgHQAIgHAAgNQABgfgTgBQgLAAgHANg");
	this.shape_156.setTransform(234.7,64.2);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgNBLQgCgDAAgDIAAgCQABgMABgNIAAgYIAAgXIgPAAQgIAAgBgIQAAgJAQAAIAJgBIAAgNQADgTAHgKQAHgLAUAAQANAAAAAJQAAAIgMAAQgVAAgCAeIgBAFIAUgBQANAAAAAJQAAAGgGACIgHAAIgUABIgBASIAAARIABAQQAAAQgCAKQAAAHgGAAQgEAAgDgCg");
	this.shape_157.setTransform(225.4,62.1);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FF0000").s().p("AgiA8QgQgHAAgOQgBgDADgDQADgCADAAQAFABADAEQAEAHAEACQAHAFAPAAQALAAAMgFQAPgJAAgNQAAgLgNgGQgKgGgOAAQgOAAgKgFQgMgHAAgMQAAgQASgNQARgNAQAAQAIAAALAEQAOADAAAGQAAAIgIAAIgMgCIgOgCQgLABgKAGQgKAHAAAKQAAAHANADQAFABAMABQAUACALAKQALAIAAAPQAAAVgTANQgRALgUgBQgRABgNgHg");
	this.shape_158.setTransform(209.5,62.3);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FF0000").s().p("AgoBDQgDgDAAgEIAAgaIABgiIACgkQAAgIABgQQABgFACgBQAMgDAQgBQANAAAOALQARAMAAASQAAAXgSALQANAFAGAHQAHAHAAAIQAAAKgLAKQgIAHgJAEQgSAHgfAAQgDAAgEgDgAgaAjIAAARQAXAAAMgGQAHgCAFgFQAGgFAAgCQAAgEgLgFQgJgFgHgBIgIgBIgEAAIgDAAIgKgBIgBAUgAgWgzIgBAPIgBAjIAOABQALgBAIgIQAJgIAAgMQAAgIgJgIQgJgHgIAAIgOABg");
	this.shape_159.setTransform(197.9,61.8);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FF0000").s().p("AgsBCQgCgCAAgEIgBgVIAAgVIABgWIACgYIgBgNIgBgNQAAgFADgEQAEgFAFABIAWABQAMACAGAEQAkATAAAbQAAAOgNAIQgJAIgPAFQAbAOAOARQACACAAAEQAAADgCADQgDADgEAAQgDAAgDgDQgdgdgigKIABARIAAASQAAAEgCACQgDADgDAAQgEAAgDgDgAgbgmIABALIgBARIgCAQIAEAAIADAAQAWAAAKgGQAFgBAEgEQAFgFAAgEQAAgMgOgKQgLgKgOgBIgNgCg");
	this.shape_160.setTransform(186.4,61.8);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FF0000").s().p("AgmBDQgHgIgBgcIAAgMIACgPIgCgEQAAgBACgCIACgmIgBgJIgBgKQAAgKAJAAQADAAADACQALgDAJgBIAPgBQAWAAAMAFQAHACAAAGQAAAEgCACQgDADgEAAIgCAAQgPgEgPAAIgNABQgJABgJADIABAJIgCAiIAlgEIAUgCQAEAAADADQACACAAAEQAAAGgIABIgVACIgnAEIAAAMIAAAKQAAAUADADQACADALAAIAPgBIARAAIAEgBIAFAAQAKAAAAAJQAAAHgIACQgIABgaAAQgaAAgJgHg");
	this.shape_161.setTransform(175.2,61.8);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FF0000").s().p("AgPBAQgKgbgNgwIgHgZQgFgSgBgFQAAgEADgDQADgCADAAQAIAAABAHIADAPIAJAeQAJAfAHAYIABgCIAWg9IAHgWQAFgNAGgHQACgDAFAAQADAAADADQADACAAAEQAAACgCADQgGAIgDAJIgHATIgYA+IgJAXQgBAEgFAAQgHAAgDgGg");
	this.shape_162.setTransform(164.1,62.1);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FF0000").s().p("AgsBCQgCgCAAgEIgBgVIAAgVIABgWIACgYIgBgNIgBgNQAAgFADgEQAEgFAFABIAWABQAMACAGAEQAkATAAAbQAAAOgNAIQgJAIgPAFQAbAOAOARQACACAAAEQAAADgCADQgDADgEAAQgDAAgDgDQgdgdgigKIABARIAAASQAAAEgCACQgDADgDAAQgEAAgDgDgAgbgmIABALIgBARIgCAQIAEAAIADAAQAWAAAKgGQAFgBAEgEQAFgFAAgEQAAgMgOgKQgLgKgOgBIgNgCg");
	this.shape_163.setTransform(146.9,61.8);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FF0000").s().p("AAeAtQgCgIgEgUIgXAFIgWAFQgEALgLAWQgCAFgFAAQgEAAgCgCQgDgDAAgEQAAgEANgcQgBgCAAgDQAAgHAIgCIAZgpQATgiAFAAQAHAAADAKIAFAeIAOA7IAFAOIACAJQAAAEgDACQgCADgEAAQgIAAgGgVgAgKAGIAegGIgHghg");
	this.shape_164.setTransform(134.3,62.1);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FF0000").s().p("AglBFQgFgEAAgKIACgdQACgmAAgxQAAgEADgDQACgCAEAAQAEAAACACQADADAAAEQAAAxgDAnIgBANIAAANQAXABAhgLIACgBQAEAAADADQACADAAADQAAAGgGADQgKAEgVAEQgRADgNAAQgJAAgEgCg");
	this.shape_165.setTransform(123.1,62.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FF0000").s().p("AgmA0QgKgNgDgZQgCgLAAgfIABgUIABgLQADgHAFAAQAIAAAAAPIAAAzQAAA0AkAAQAjAAAAhYIAAgIIAAgHQAAgGACgEQACgFAFAAQAJAAAAAMIAAALIAAAKQAABkg1AAQgZAAgOgPg");
	this.shape_166.setTransform(111.4,62);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FF0000").s().p("AgrA8QgMgNAAgYQAAgXAMgVQAKgZARgPQALgJAKgBQAJAAANAGQAQAGAAAHQAAAEgDADQgDADgDAAQgCAAgDgDQgOgHgKgBQgFAAgGAHIgKANQgVAbAAAdQAAARAGAGQAFAIAOgBQAOABAMgLQAMgKAFgTQgYABgPAIIgFABQgDAAgDgDQgCgDgBgDQABgFAEgDQARgKAvAAQADAAADACQACABABAEQgBAGgEADQgGAbgRAPQgRARgXgBQgVABgKgMg");
	this.shape_167.setTransform(98.7,61.9);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FF0000").s().p("AgmBDQgHgIAAgcIAAgMIABgPIgBgEQAAgBABgCIACgmIgBgJIgBgKQAAgKAJAAQADAAADACQAKgDAKgBIAQgBQAVAAAMAFQAHACgBAGQAAAEgBACQgDADgEAAIgCAAQgPgEgOAAIgOABQgIABgKADIABAJIgCAiIAkgEIAVgCQAEAAADADQACACAAAEQABAGgJABIgVACIgmAEIgBAMIAAAKQAAAUADADQACADALAAIAPgBIAQAAIAGgBIAEAAQAKAAAAAJQAAAHgIACQgIABgaAAQgbAAgIgHg");
	this.shape_168.setTransform(87.1,61.8);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FF0000").s().p("AgsBCQgCgCAAgEIgBgVIAAgVIABgWIACgYIgBgNIgBgNQAAgFADgEQAEgFAFABIAWABQAMACAGAEQAkATAAAbQAAAOgNAIQgJAIgPAFQAbAOAOARQACACAAAEQAAADgCADQgDADgEAAQgDAAgDgDQgdgdgigKIABARIAAASQAAAEgCACQgDADgDAAQgEAAgDgDgAgbgmIABALIgBARIgCAQIAEAAIADAAQAWAAAKgGQAFgBAEgEQAFgFAAgEQAAgMgOgKQgLgKgOgBIgNgCg");
	this.shape_169.setTransform(75.8,61.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68}]}).wait(189));

	// main
	this.btn_menu = new lib.skiptomenu();
	this.btn_menu.setTransform(514.1,20.3);
	new cjs.ButtonHelper(this.btn_menu, 0, 1, 2, false, new lib.skiptomenu(), 3);

	this.instance_8 = new lib.Copyright("synched",0);
	this.instance_8.setTransform(275,393.5);

	this.btn_goBack = new lib.goNext();
	this.btn_goBack.setTransform(57.6,352.3,1,1,0,0,180);
	new cjs.ButtonHelper(this.btn_goBack, 0, 1, 2, false, new lib.goNext(), 3);

	this.btn_goNext = new lib.goNext();
	this.btn_goNext.setTransform(494,352.3);
	new cjs.ButtonHelper(this.btn_goNext, 0, 1, 2, false, new lib.goNext(), 3);

	this.instance_9 = new lib.Background();
	this.instance_9.setTransform(275,192.3,1,1.089);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.btn_goNext},{t:this.btn_goBack},{t:this.instance_8},{t:this.btn_menu}]}).wait(189));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(284.2,201.8,537.1,401.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;