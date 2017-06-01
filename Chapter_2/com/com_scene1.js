(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	manifest: [
		{src:"sounds/wrong_answer.mp3?1496165289820", id:"wrong_answer"},
		{src:"sounds/Cowbell.mp3?1496165289820", id:"Cowbell"},
		{src:"sounds/High_Screaming_Gtr.mp3?1496165289820", id:"High_Screaming_Gtr"},
		{src:"sounds/objectivecomplementsarefound.mp3?1496165289820", id:"objectivecomplementsarefound"},
		{src:"sounds/right_answer.mp3?1496165289820", id:"right_answer"},
		{src:"sounds/theobjectivecomplementisred.mp3?1496165289820", id:"theobjectivecomplementisred"},
		{src:"sounds/theobjectivecomplementisthecaptain.mp3?1496165289820", id:"theobjectivecomplementisthecaptain"},
		{src:"sounds/theyelectedbubthecaptain.mp3?1496165289820", id:"theyelectedbubthecaptain"},
		{src:"sounds/theyselectedthecolorred.mp3?1496165289820", id:"theyselectedthecolorred"},
		{src:"sounds/woo.mp3?1496165289820", id:"woo"}
	]
};



// symbols:



(lib.Tween21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFCC99").ss(0.3,1,1).p("AggBEQAegrAXg3QAAgBAAAAQAAgVAMgQ");
	this.shape.setTransform(-16.2,12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.3,1,1).p("AicALQAMAAAMAAQARgBANAFQAFACAFABQADABADABQAGACAHACQAFACAEAFQAMgQAHgUQADgMAMgMQAMgNAPgJQALgIALgFQADgBADgCQgJgEgCgSQgBgPADgQQAAgEADgBQANgHAOgBQAIgBAGAAQAFgQgHgOQgHgMgDgOQgCgLAIgDQAOgFAQAEQAQAEACAOQACAPgDAPQAAABAAABQgBAHgFAHQgEAIgEAHABlidQAPgCAQAAQAKABABALQAAAEAAADQANgEAMAHQAFACAAAFQABAKgFAHQAGAHAJALQADAFgBAJQgBAMgNAEQgCABgDAAQgOAEgQgDQgJgBgHgCAA8iGQAJAAAHACQAIADADADQAGAEgLAGQgFADgHACQgHACgMAAACphxQgDADgGADQgMAHgPAGQgKADgEACACHgOQgHAIgPgEACshBQABAEgCAGQgEAMgHAMQgJANgQAEQADAOAAAOQABAQgIAMQgJALgIAMQgIALgJAOQgIANgJANQgIANgMALQgLAKgMAJQgMALgNAHQgMAGgNAFQgOAFgQAEQgPADgRACQgFABgGABQgDAAgDAAQgGABgGABQgOACgRAAQgVAAgegOACPiMQgBANgMAIQgMAJgJAI");
	this.shape_1.setTransform(-0.8,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("AiHDQQgVAAgegOQAegsAZg5QgPgugXgbIANgJIAYAAQARgBANAFIAKADIAGACIANAEQAFACAEAFQAMgQAHgUQADgMAMgMQAMgNAPgJQALgIALgFIAGgDQgJgEgCgSQgBgPADgQQAAgEADgBQANgHAOgBIAOgBQAFgQgHgOQgHgMgDgOQgCgLAIgDQAOgFAQAEQAQAEACAOQACAPgDAPIAAACQgBAHgFAHIgIAPIAIgPQAFgHABgHIAAgCQAPgCAQAAQAKABABALIAAAHQANgEAMAHQAFACAAAFQABAKgFAHQgDADgGADQgMAHgPAGIgOAFIAOgFQAPgGAMgHQAGgDADgDIAPASQADAFgBAJQgBAMgNAEQABAEgCAGQgEAMgHAMQgJANgQAEQADAOAAAOQABAQgIAMIgRAXIgRAZIgRAaQgIANgMALIgXATQgMALgNAHIgZALQgOAFgQAEIggAFIgLACIgGAAIgMACQgMACgOAAIgFAAgAiDBcIAAABIAAgBQAAgVALgPQgLAPAAAVgAB7gJQAHAAAEgEIABgBIAAAAIAAAAIgBABQgEAEgHAAIgBAAIAAAAIgCAAIgBAAIgGgBIAGABIABAAIACAAIAAAAIABAAgACXg+IAOgBIACgBIAFgBIgFABIgCABIgOABIAAAAIgBAAIgMgBIgBAAIgQgDIAQADIABAAIAMABIABAAIAAAAgACCh3IgVARIAVgRQAMgIABgNQgBANgMAIgAA3htQAJAAAGgCIAAAAIAMgFQAHgEAAgDIgCgDQgDgDgIgDQgHgCgJAAQAJAAAHACQAIADADADIACADQAAADgHAEIgMAFIAAAAQgGACgJAAIAAAAIAAAAIgCAAIgCAAIACAAIACAAIAAAAIAAAAg");
	this.shape_2.setTransform(-0.8,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.5,-21.8,39.4,43.7);


(lib.Tween19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.3,1,1).p("AAfDAIAAgBQAMgEAKgIQAMgKAGgJQAHgLAHgJQAIgLAIgLQAHgKAEgOQAEgMACgPQACgPADgOQADgPAAgRQAAgOgBgRQgCgPgEgOQgFgQgFgMQgFgNgGgPQgGgOgJgLQgJgLgJgKQgKgJgKgIQgJgIgLgKQgKgKgPADQgPACgJAJQgKALgKAKQgMALgKAMQgJALgGAPQgHAOgFAPQAAABAAAAQgFAOgGAMQgEALgEAJQgCAFgCAEQgHAMgCAQQAAADAAABQAAACAAADAATg8QAFABAEAAQALACADAIQADAIgFAEQgHAGgKABQABAIABAHQgKABgJAAQgEAAgCAAQgGAAgGAAQgJACgFAIQgDAEAFAHQAEAHAKAAQAJAAAGAAQABAAACAAQAJAAAJAAQABAAAAAAQAKABAHgGQAIgHABgHQACgLgLAAQgFAAgEAAQgFABgFAAAgCg7QAAgHACgHQADgHAGgEQABABABABQAFAFACAHQAAAFABAFQgFAAgFAAQgHAAgEABgAgBgdQgGAAgGAAQgLgBgBgLQgCgLAKgEQAEgCAEAAQACAAACgBQACAAABAAAAXgeQgJACgKgBQgDAAgCAAAAAgOQAAgCAAgCQgBgFAAgGAAKAzQgHAAgEgBQgKgBgIgFQgJgFAEgKQAAgCADgCQAJgBAKAAQADAAAGABQgBgFgBgGAAKBZQgKgBgHgFQgFgDACgGQACgDADgEQABgCAAgCQAFgDAHgBQABAAAAAAQAAgDABgDQAAgBAAgBQADAAADgBQAIgBAJgBQAAAAABgBQAKgCAHgHQADgDgCgBQgHgFgKgBQgDAAgDgBAAhBWQAAAFAAAGQAAAKgIADQgHADgDgGQgEgGgBgKQAAgBAAgBQADAAAEAAQAIAAAHgDQABAAAAAAgAAaAOQABADABADQAAAEABADQgHAAgHgBQgEgBgEAAAAhAwQAAAFABAFQAAACAAADQAFABAGACQAIACAHACQgEAFgGAEQgDADgEABQgFABgFACAAJA7QAJAAAJACQADABAEABAh9AAQACABACABQAAACgEABQAAAJABALQACAPACAQQAAACABABIAAABIAAAAAh3A7QAAABAAAAQACAMADAMQAFAPAHALQAHAJAIAMQABABABABQAGAKAGALQAHALANAHQALAGAJAJQAJAIAMACQACACAEAAQAGABAGgBQAOgCALgFIAAgB");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAABeQgDgHgBgJIAAgDQgLAAgIgFQgFgDACgGIAFgHQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAgBQAGgDAHAAIABAAIABgGIAAgDIAEAAIARgDIgRADIgEAAIgNAAQgKgBgIgFQgJgFAEgKQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABgBIATgCIALABIAHABIANACIAGABQAKABAHAEQABABAAAAQAAABAAAAQAAABAAAAQgBABgBABQgHAHgKACIgBAAIABALIAAAEIALAEIAPAEQgEAFgGAEQgDADgEABIgJACIgCABQgHACgIAAIgFAAIAFAAQAIAAAHgCIACgBIgBALQAAALgIADIgEABQgEAAgBgEgAALAwIAHABIgHgBIgBAAIgLgCIgBAAIAAAAIgBAAIgCAAIACAAIABAAIAAAAIABAAIALACIABAAgAAAAMIgHgBIgCgKIADAAIARAAIABAGIABAHIgNgCgAALABIAAAAIgRAAIgDAAIgRAAQgKAAgEgFQgFgHADgGQAFgIAJgCIANgBIgBgDIgBgLIgMAAQgLgBgBgLQgCgMAKgEIAIgBIAFgBIACAAIANgBIAIAAIAJABQALABADAJQADAIgFAEQgHAFgKACIgBAAIgKABIgBAAIAAAAIgFAAIgHAAIAHAAIAFAAIAAAAIABAAIAKgBIABAAIACAPIAKgBIAJgBQALAAgCAMQgBAJgIAGQgGAEgJAAIgCAAgAgBgbIACAAIAIgBIgIABIgCAAIgBAAIAAAAIgDAAIgDAAIgHgBIAHABIADAAIADAAIAAAAIABAAgAgPhWQAEgHAGgEIADACQADAEABAIIABAKIgIAAIgNABQAAgIADgGgAADhJIAAAAg");
	this.shape_1.setTransform(1.6,1.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663300").s().p("AgGDHIgGgCQgMgCgJgIQgJgJgLgGQgNgHgHgLIgMgVIgCgCIgPgVQgHgLgFgPQgDgMgCgMIAAAAIAAgBIgBgDIgEgfQgBgLAAgJQAEgBAAgCIgEgCIAAgEQACgQAHgMIAEgJIAIgUIALgaIAAgBQAFgPAHgOQAGgPAJgLIAWgXIAUgVQAJgJAPgCQAPgDAKAKIAUASIAUARIASAVQAJALAGAOIALAcQAFAMAFAQQAEAOACAPQABARAAAOQAAARgDAPIgFAdQgCAPgEAMQgEAOgHAKIgQAWIgOAUQgGAJgMAKQgKAIgMAEIAAAAIAAABQgLAFgOACIgGABIgGgBgAAIA7QgHABgFADQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAIgFAHQgCAGAFADQAHAFAKABIAAACQABAKAEAGQADAGAHgDQAIgDAAgKIAAgLIAKgDQAEgBADgDQAGgEAEgFIgPgEIgLgDIAAgFIgBgKIABgBQAKgCAHgHQABgBAAAAQABgBAAgBQAAAAAAAAQAAgBgBAAQgHgFgKgBIgGgBIgBgHIgCgGIABAAQAKABAHgGQAIgHABgHQACgLgLAAIgJAAIgKABIgCgPQAKgBAHgGQAFgEgDgIQgDgIgLgCIgJgBIgBgKQgCgHgFgFIgCgCQgGAEgDAHQgCAHAAAHIgDAAIgEABIgIACQgKAEACALQABALALABIAMAAIABALIAAAEIgMAAQgJACgFAIQgDAEAFAHQAEAHAKAAIAPAAIACALIgJgBIgTABQgBABAAAAQgBABAAAAQgBABAAAAQAAABAAAAQgEAKAJAFQAIAFAKABIALABIAAACIgBAGIAAAAIgBAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.7,-21,27.4,42.1);


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


(lib.bub_captain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.3,1,1).p("AAoDAIAAgBQAMgEAKgIQAMgKAGgJQAHgLAHgJQAIgLAIgLQAHgKAEgOQAEgMACgPQACgPADgOQADgPAAgRQAAgOgBgRQgCgPgEgOQgFgQgFgMQgFgNgGgPQgGgOgJgLQgJgLgJgKQgKgJgKgIQgJgIgLgKQgKgKgRADQgNACgJAJQgKALgKAKQgMALgKAMQgJALgGAPQgHAOgFAPQAAABAAAAAg7gNQANgGANgJQAEgCADgCAg2gsQALgJAMgHAgtBDQgGAEgEAEAgwAaQAAgEAAgEQAAgFAAgEAhAAiQAIgDAIgFAgZAJQgFAFgJAGQgEADgFADQAAAMABAMQABAJABAIQAGgEAHgFQAJgGAJgFAgICkQgKgLgEgOQgEgRgGgMQgHgOgDgPQgCgHgBgHAhngpQgHgKgJgJQgJgKAHgIQALgLASADQAFAAADgBQgGAOgFAMQgEALgEAJgAh0AAQgCAAgBgBQgEgEgDgGQgBgBAAgBQgFgKAGgHQAIgLAPAAQgCAFgCAEQgGAKgCALQgBAEAAADQAAADAAABQABAAACACQABAAAAAAQAAABgBABQgBAAgCABQAAgDAAgCgAhuA7QgCgBgBgBQgLgLgIgIQgEgFADgIQAFgOALgGIABAAQgBAJACALQABAIABAJQABAHABAHQAAACABABIAAABIAAAAQAAAAAAgBgAhOCDQgNgCgOgJQgEgDgEgEQgHgFgHgHQgKgMAMgNQAHgHAFgGQACgBABgCQACAMADAMQAEAPAIALQAHAJAIAMQABABABABQAGAKAGALQAHALANAHQALAGAJAJQAEADAEADQAGADAHABQACACACAAQAGABAIgBQANgCAKgFQABAAABAAIAAgB");
	this.shape.setTransform(-12.6,109.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AABBiIgGgGIgOgNQgKgMAMgMIAMgNIADgDQABALACANQAEAOAIALIAPAVQgOgCgNgJgAgFAjIgTgSQgEgFADgJQAFgMALgGIAAAAQAAAKACAJIACAQIACAOIAAAEIgCgDgAgSggIgCgDQgEgJAGgIQAHgKAOgBIgDAJQgFAKgCAMIgBAHIgDACIgHgJgAgLhSQgJgJAHgIQAKgLARACQAFABACgBIgKAaIgIATIgOgTg");
	this.shape_1.setTransform(-23.3,111.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663300").s().p("AgGDHIgGgCQgHgBgGgDIgIgGQgJgJgLgGQgNgHgHgLIgMgVIgCgCIgPgVQgHgLgFgPQgDgMgCgMIAAAAIAAgBIgBgDIgCgOIgCgRQgBgLAAgJIADgBIABgCIgBAAIgDgCIAAgEIABgHQACgLAGgKIAEgJIAIgUIALgaIAAgBQAFgPAHgOQAGgPAJgLIAWgXIAUgVQAJgJAPgCQAPgDAKAKIAUASIAUARIASAVQAJALAGAOIALAcQAFAMAFAQQAEAOACAPQABARAAAOQAAARgDAPIgFAdQgCAPgEAMQgEAOgHAKIgQAWIgOAUQgGAJgMAKQgKAIgMAEIAAAAIAAABIgCAAQgKAFgNACIgGABIgGgBgAgzBRQADAPAHAOQAGAMAEARQAEAOAKALQgKgLgEgOQgEgRgGgMQgHgOgDgPIgDgOIADAOgAhABLIAKgIIANgJIASgLIgSALIgNAJIgCgRIgBgVIAAgDIAJgGIAOgLIgOALIgJAGIAAADIABAVIACARIgKAIgAhJAiIAQgIIAAgEIAAgEIAAgJIAAAJIAAAEIAAAEIgQAIgAgqgcQgNAJgNAGQANgGANgJIAHgEIgHAEgAg/gsQALgJAMgHQgMAHgLAJgAg2BDIAAAAg");
	this.shape_2.setTransform(-11.7,109.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(0.3,1,1).p("AADhJQAFAAAEABQALABADAJQADAIgFAEQgHAGgKABQABAHABAIQgJABgIAAQgEgBgDAAQgHAAgGABQgJABgFAJQgDAGAFAHQAEAFAKAAQAJAAAIAAQABAAACAAQAHAAAKAAQAAAAAAAAQAKABAHgEQAIgHABgKQACgKgLAAQgEAAgFAAQgFAAgFABAgShIQAAgIADgGQAEgIAGgDQACABABABQADAEABAIQABAFAAAFQgDgBgFAAQgHAAgGACgAgRgqQgGAAgGAAQgLgBgBgLQgCgMAKgDQAEgCAEAAQACgBADAAQABAAABAAAAHgrQgHACgKgBQgDAAgEAAAgPgcQAAgBgBgCQAAgFgBgGAgEAlQgGABgHgBQgKgBgIgFQgJgFAEgKQAAgCADgCQAJgBAKAAQAGAAAFABQgBgGgBgFAgFAuQABgDAAgDQAAgBAAgCQADAAABAAQAJgBAIgCQABAAAAAAQAKgCAHgHQADgDgCgBQgHgFgKgBQgDgBgDAAAgEBLQgKAAgJgFQgFgDACgGQACgEADgDQABgCABgDQAGgDAHAAQABAAAAAAQAHAAAJACQAEABADABAASBIQgBAGAAAGQAAAKgIADQgHADgCgGQgDgHgBgKQAAgBAAgBQAEABABAAQAIAAAHgDQABAAABgBgAALABQAAADABADQAAADABAEQgHgBgGgBQgDAAgEAAAARAiQABAFAAAGQAAACAAADQAGABAFABQAIADAHACQgEAFgGAEQgDADgEABQgFABgEAB");
	this.shape_3.setTransform(-10.1,111.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.3,1,1).p("AAfDAIAAgBQAMgEAKgIQAMgKAGgJQAHgLAHgJQAIgLAIgLQAHgKAEgOQAEgMACgPQACgPADgOQADgPAAgRQAAgOgBgRQgCgPgEgOQgFgQgFgMQgFgNgGgPQgGgOgJgLQgJgLgJgKQgKgJgKgIQgJgIgLgKQgKgKgPADQgPACgJAJQgKALgKAKQgMALgKAMQgJALgGAPQgHAOgFAPQAAABAAAAQgFAOgGAMQgEALgEAJQgCAFgCAEQgHAMgCAQQAAADAAABQACABACABQAAACgEABAh9AAQAAACAAADQAAAJABALQACAPACAQQAAACABABIAAABIAAAAAh3A7QAAABAAAAQACAMADAMQAFAPAHALQAHAJAIAMQABABABABQAGAKAGALQAHALANAHQALAGAJAJQAJAIAMACQACACAEAAQAGABAGgBQAOgCALgFIAAgB");
	this.shape_4.setTransform(-11.7,109.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAABeQgDgHgBgJIAAgDQgLAAgIgFQgFgDACgGIAFgHQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAgBQAGgDAHAAIABAAIABgGIAAgDIAEAAIARgDIgRADIgEAAIgNAAQgKgBgIgFQgJgFAEgKQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABgBIATgCIALABIAHABIANACIAGABQAKABAHAEQABABAAAAQAAABAAAAQAAABAAAAQgBABgBABQgHAHgKACIgBAAIABALIAAAEIALAEIAPAEQgEAFgGAEQgDADgEABIgJACIgCABQgHACgIAAIgFAAIAFAAQAIAAAHgCIACgBIgBALQAAALgIADIgEABQgEAAgBgEgAALAwIAHABIgHgBIgBAAIgLgCIgBAAIAAAAIgBAAIgCAAIACAAIABAAIAAAAIABAAIALACIABAAgAAAAMIgHgBIgCgKIADAAIARAAIABAGIABAHIgNgCgAALABIAAAAIgRAAIgDAAIgRAAQgKAAgEgFQgFgHADgGQAFgIAJgCIANgBIgBgDIgBgLIgMAAQgLgBgBgLQgCgMAKgEIAIgBIAFgBIACAAIANgBIAIAAIAJABQALABADAJQADAIgFAEQgHAFgKACIgBAAIgKABIgBAAIAAAAIgFAAIgHAAIAHAAIAFAAIAAAAIABAAIAKgBIABAAIACAPIAKgBIAJgBQALAAgCAMQgBAJgIAGQgGAEgJAAIgCAAgAgBgbIACAAIAIgBIgIABIgCAAIgBAAIAAAAIgDAAIgDAAIgHgBIAHABIADAAIADAAIAAAAIABAAgAgPhWQAEgHAGgEIADACQADAEABAIIABAKIgIAAIgNABQAAgIADgGgAADhJIAAAAg");
	this.shape_5.setTransform(-10.1,111.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#663300").s().p("AgGDHIgGgCQgMgCgJgIQgJgJgLgGQgNgHgHgLIgMgVIgCgCIgPgVQgHgLgFgPQgDgMgCgMIAAAAIAAgBIgBgDIgEgfQgBgLAAgJQAEgBAAgCIgEgCIAAgEQACgQAHgMIAEgJIAIgUIALgaIAAgBQAFgPAHgOQAGgPAJgLIAWgXIAUgVQAJgJAPgCQAPgDAKAKIAUASIAUARIASAVQAJALAGAOIALAcQAFAMAFAQQAEAOACAPQABARAAAOQAAARgDAPIgFAdQgCAPgEAMQgEAOgHAKIgQAWIgOAUQgGAJgMAKQgKAIgMAEIAAAAIAAABQgLAFgOACIgGABIgGgBgAAIA7QgHABgFADQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAIgFAHQgCAGAFADQAHAFAKABIAAACQABAKAEAGQADAGAHgDQAIgDAAgKIAAgLIAKgDQAEgBADgDQAGgEAEgFIgPgEIgLgDIAAgFIgBgKIABgBQAKgCAHgHQABgBAAAAQABgBAAgBQAAAAAAAAQAAgBgBAAQgHgFgKgBIgGgBIgBgHIgCgGIABAAQAKABAHgGQAIgHABgHQACgLgLAAIgJAAIgKABIgCgPQAKgBAHgGQAFgEgDgIQgDgIgLgCIgJgBIgBgKQgCgHgFgFIgCgCQgGAEgDAHQgCAHAAAHIgDAAIgEABIgIACQgKAEACALQABALALABIAMAAIABALIAAAEIgMAAQgJACgFAIQgDAEAFAHQAEAHAKAAIAPAAIACALIgJgBIgTABQgBABAAAAQgBABAAAAQgBABAAAAQAAABAAAAQgEAKAJAFQAIAFAKABIALABIAAACIgBAGIAAAAIgBAAg");
	this.shape_6.setTransform(-11.7,109.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(0.3,1,1).p("AAoDAIAAgBQAMgEAKgIQAMgKAGgJQAHgLAHgJQAIgLAIgLQAHgKAEgOQAEgMACgPQACgPADgOQADgPAAgRQAAgOgBgRQgCgPgEgOQgFgQgFgMQgFgNgGgPQgGgOgJgLQgJgLgJgKQgKgJgKgIQgJgIgLgKQgKgKgRADQgNACgJAJQgKALgKAKQgMALgKAMQgJALgGAPQgHAOgFAPQAAABAAAAQgDABgFAAQgSgDgLALQgHAIAJAKQAJAJAHAKAg7gNQANgGANgJQAEgCADgCAg2gsQALgJAMgHAgtBDQgGAEgEAEAgwAaQAAgEAAgEQAAgFAAgEAhAAiQAIgDAIgFAgZAJQgFAFgJAGQgEADgFADQAAAMABAMQABAJABAIQAGgEAHgFQAJgGAJgFAgICkQgKgLgEgOQgEgRgGgMQgHgOgDgPQgCgHgBgHAhUhXQgGAOgFAMQgEALgEAJQgPAAgIALQgGAHAFAKQADAHAFAFQABABACAAQAAgBAAgDQACgQAHgMQACgEACgFAh0AAQAAACAAADIgBAAQgLAGgFAOQgDAIAEAFQAJAJANAMQgBgBAAgCQgCgQgCgPQgCgLABgJAh0AAQACABACABQAAACgEABAhuA8QAAAAAAgBIAAABIAAAAQACAMADAMQAEAPAIALQAHAJAIAMQgNgCgOgJQgMgJgKgKQgKgMAMgNQAJgJAGgHgAhOCDQABABABABQAGAKAGALQAHALANAHQALAGAJAJQAJAIAMACQACACACAAQAGABAIgBQAOgCALgFIAAgB");
	this.shape_7.setTransform(-12.5,109.7,1,1,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AABBiQgKgIgKgLQgKgMAMgMIAPgQQABALACANQAEAOAIALIAPAVQgOgCgNgJgAgYARQgEgFADgJQAFgMALgGIAAAAQAAAKACAJIAEAeIAAAEIgVgVgAgUgjQgEgJAGgIQAHgKAOgBIgDAJQgHANgBAQIgDACQgFgFgEgHgAgLhSQgJgJAHgIQAKgLARACQAFABACgBIgKAaIgIATIgOgTg");
	this.shape_8.setTransform(-1.8,111.9,1,1,0,0,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#663300").s().p("AgGDHIgGgCQgMgCgJgIQgJgJgLgGQgNgHgHgLIgMgVIgCgCIgPgVQgHgLgFgPQgDgMgCgMIAAAAIAAgBIgBgDIgEgfQgBgLAAgJQAEgBAAgCIgEgCIAAgEQACgQAHgMIAEgJIAIgUIALgaIAAgBQAFgPAHgOQAGgPAJgLIAWgXIAUgVQAJgJAPgCQAPgDAKAKIAUASIAUARIASAVQAJALAGAOIALAcQAFAMAFAQQAEAOACAPQABARAAAOQAAARgDAPIgFAdQgCAPgEAMQgEAOgHAKIgQAWIgOAUQgGAJgMAKQgKAIgMAEIAAAAIAAABQgLAFgOACIgGABIgGgBgAgzBRQADAPAHAOQAGAMAEARQAEAOAKALQgKgLgEgOQgEgRgGgMQgHgOgDgPIgDgOIADAOgAhABLIAKgIIANgJIASgLIgSALIgNAJIgCgRIgBgVIAAgDIAJgGIAOgLIgOALIgJAGIAAADIABAVIACARIgKAIgAhJAiIAQgIIAAgEIAAgEIAAgJIAAAJIAAAEIAAAEIgQAIgAgqgcQgNAJgNAGQANgGANgJIAHgEIgHAEgAg/gsQALgJAMgHQgMAHgLAJgAg2BDIAAAAg");
	this.shape_9.setTransform(-13.4,109.7,1,1,0,0,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#663300").s().p("AgGDHIgGgCQgMgCgJgIQgJgJgLgGQgNgHgHgLIgMgVIgCgCIgPgVQgHgLgFgPQgDgMgCgMIAAAAIAAgBIgBgDIgEgfQgBgLAAgJQAEgBAAgCIgEgCIAAgEQACgQAHgMIAEgJIAIgUIALgaIAAgBQAFgPAHgOQAGgPAJgLIAWgXIAUgVQAJgJAPgCQAPgDAKAKIAUASIAUARIASAVQAJALAGAOIALAcQAFAMAFAQQAEAOACAPQABARAAAOQAAARgDAPIgFAdQgCAPgEAMQgEAOgHAKIgQAWIgOAUQgGAJgMAKQgKAIgMAEIAAAAIAAABQgLAFgOACIgGABIgGgBg");
	this.shape_10.setTransform(-11.7,109.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(0.3,1,1).p("AAoDAIAAgBQAMgEAKgIQAMgKAGgJQAHgLAHgJQAIgLAIgLQAHgKAEgOQAEgMACgPQACgPADgOQADgPAAgRQAAgOgBgRQgCgPgEgOQgFgQgFgMQgFgNgGgPQgGgOgJgLQgJgLgJgKQgKgJgKgIQgJgIgLgKQgKgKgRADQgNACgJAJQgKALgKAKQgMALgKAMQgJALgGAPQgHAOgFAPQAAABAAAAQgDABgFAAQgSgDgLALQgHAIAJAKQAJAJAHAKAg7gNQANgGANgJQAEgCADgCAg2gsQALgJAMgHAgtBDQgGAEgEAEAgwAaQAAAMABAMQABAJABAIQAGgEAHgFQAJgGAJgFAgZAJQgFAFgJAGQgEADgFADAhAAiQAIgDAIgFQAAgEAAgEQAAgFAAgEAgICkQgKgLgEgOQgEgRgGgMQgHgOgDgPQgCgHgBgHAhUhXQgGAOgFAMQgEALgEAJQgPAAgIALQgGAHAFAKQADAHAFAFQABABACAAQAAgBAAgDQACgQAHgMQACgEACgFAh0AAQAAACAAADIgBAAQgLAGgFAOQgDAIAEAFQAJAJANAMQgBgBAAgCQgCgQgCgPQgCgLABgJAh0AAQACABACABQAAACgEABAhuA8QAAAAAAgBIAAABIAAAAQACAMADAMQAEAPAIALQAHAJAIAMQgNgCgOgJQgMgJgKgKQgKgMAMgNQAJgJAGgHgAhOCDQABABABABQAGAKAGALQAHALANAHQALAGAJAJQAJAIAMACQACACACAAQAGABAIgBQAOgCALgFIAAgB");
	this.shape_11.setTransform(-12.6,109.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#663300").s().p("AgGDHIgGgCQgMgCgJgIQgJgJgLgGQgNgHgHgLIgMgVIgCgCIgPgVQgHgLgFgPQgDgMgCgMIAAAAIAAgBIgBgDIgEgfQgBgLAAgJQAEgBAAgCIgEgCIAAgEQACgQAHgMIAEgJIAIgUIALgaIAAgBQAFgPAHgOQAGgPAJgLIAWgXIAUgVQAJgJAPgCQAPgDAKAKIAUASIAUARIASAVQAJALAGAOIALAcQAFAMAFAQQAEAOACAPQABARAAAOQAAARgDAPIgFAdQgCAPgEAMQgEAOgHAKIgQAWIgOAUQgGAJgMAKQgKAIgMAEIAAAAIAAABQgLAFgOACIgGABIgGgBgAgzBRQADAPAHAOQAGAMAEARQAEAOAKALQgKgLgEgOQgEgRgGgMQgHgOgDgPIgDgOIADAOgAhABLIAKgIIANgJIASgLIgSALIgNAJIgCgRIgBgVIAAgDIAAgEIAAgEIAAgJIAAAJIAAAEIAAAEIgQAIIAQgIIAAADIABAVIACARIgKAIgAgwAUIgJAGIAJgGIAOgLIgOALgAgqgcQgNAJgNAGQANgGANgJIAHgEIgHAEgAg/gsQALgJAMgHQgMAHgLAJg");
	this.shape_12.setTransform(-11.7,109.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(0.3,1,1).p("AAoDAIAAgBQAMgEAKgIQAMgKAGgJQAHgLAHgJQAIgLAIgLQAHgKAEgOQAEgMACgPQACgPADgOQADgPAAgRQAAgOgBgRQgCgPgEgOQgFgQgFgMQgFgNgGgPQgGgOgJgLQgJgLgJgKQgKgJgKgIQgJgIgLgKQgKgKgRADQgNACgJAJQgKALgKAKQgMALgKAMQgJALgGAPQgHAOgFAPQAAABAAAAQgDABgFAAQgSgDgLALQgHAIAJAKQAJAJAHAKAg7gNQANgGANgJQAEgCADgCAg2gsQALgJAMgHAgtBDQgGAEgEAEAgwAaQAAAMABAMQABAJABAIQAGgEAHgFQAJgGAJgFAgZAJQgFAFgJAGQgEADgFADAhAAiQAIgDAIgFQAAgEAAgEQAAgFAAgEAgICkQgKgLgEgOQgEgRgGgMQgHgOgDgPQgCgHgBgHAhUhXQgGAOgFAMQgEALgEAJQgPAAgIALQgGAHAFAKQADAHAFAFQABABACAAQAAgBAAgDQACgQAHgMQACgEACgFAh0AAQAAACAAADIgBAAQgLAGgFAOQgDAIAEAFQAJAJANAMIAAABIAAAAAh0AAQACABACABQAAACgEABQgBAJACALQACAPACAQQAAACABABQAAABAAAAQgGAHgJAJQgMANAKAMQAKAKAMAJQAOAJANACQABABABABQAGAKAGALQAHALANAHQALAGAJAJQAJAIAMACQACACACAAQAGABAIgBQAOgCALgFIAAgBAhOCDQgIgMgHgJQgIgLgEgPQgDgMgCgM");
	this.shape_13.setTransform(-12.5,109.7,1,1,0,0,180);

	this.instance = new lib.Tween19("synched",0);
	this.instance.setTransform(-11.6,109.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_9},{t:this.shape_8,p:{skewY:180,x:-1.8}},{t:this.shape_7}]},1).to({state:[{t:this.shape_10},{t:this.shape_4}]},1).to({state:[{t:this.shape_12,p:{skewY:0,x:-11.7}},{t:this.shape_8,p:{skewY:0,x:-23.3}},{t:this.shape_11}]},1).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_12,p:{skewY:180,x:-13.4}},{t:this.shape_8,p:{skewY:180,x:-1.8}},{t:this.shape_13}]},1).to({state:[{t:this.shape_10},{t:this.shape_4}]},1).to({state:[{t:this.shape_12,p:{skewY:0,x:-11.7}},{t:this.shape_8,p:{skewY:0,x:-23.3}},{t:this.shape_11}]},1).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_12,p:{skewY:180,x:-13.4}},{t:this.shape_8,p:{skewY:180,x:-1.8}},{t:this.shape_13}]},1).to({state:[{t:this.shape_10},{t:this.shape_4}]},1).to({state:[{t:this.shape_12,p:{skewY:0,x:-11.7}},{t:this.shape_8,p:{skewY:0,x:-23.3}},{t:this.shape_11}]},1).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},5).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({rotation:360,x:-13.4,y:30.5},5).to({rotation:-360,x:-11.6,y:109.7},5).wait(1));

	// Layer 5
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(0.3,1,1).p("AirALQAMAAANAAQARgBANAFQAFACAEABQADABADABQAHACAGACQAFACAFAFQAMgQAGgUQAEgMALgMQANgNAPgJQAMgIAJgFQADgBADgCQgJgEgBgSQAAgPABgQQABgEADgBQANgHAOgBQAHgBAHAAQAEgQgHgOQgHgMgCgOQgDgLAJgDQANgFARAEQAPAEACAOQACAPgCAPQgBABAAABQgBAHgEAHQgEAIgEAHQgDgDgJgDQgHgCgIAAABXidQAPgCAPAAQAKABABALQAAAEAAADQAOgEAMAHQAEACAAAFQABAKgFAHQAGAHAJALQAEAFgBAJQgCAMgMAEQgDABgCAAQgPAEgPgDQgJgBgHgCABJh+QAFAEgKAGQgGADgGACQgIACgLAAACahxQgDADgFADQgMAHgPAGQgLADgEACACAiMQgBANgLAIQgMAJgKAIACehBQAAAEgBAGQgEAMgIAMQgJANgPAEQgIAIgPgEAB5gOQACAOABAOQAAAQgIAMQgJALgIAMQgHALgJAOQgIANgJANQgJANgMALQgLAKgLAJQgMALgMAHQgNAGgOAFQgOAFgPAEQgQADgQACQgGABgGABQgDAAgDAAQgFABgGABQgPACgRAA");
	this.shape_14.setTransform(-19.2,150.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFCC99").s().p("AiPDQIADgLQAGgOADgPQADgQgCgPIgCgQQgPhBgegkIAMgJIAZAAQARgBANAFIAKADIAGACIANAEQAEACAFAFQAMgQAGgUQAEgMALgMQANgNAPgJQALgIAKgFIAHgDQgKgFgBgRQgBgPACgQQABgEADgBQANgHAOgBIAOgBQAEgQgHgOQgGgMgDgOQgDgLAJgDQANgFARAEQAPAEACAOQADAPgDAPIgBACQgBAHgEAHIgIAPQgDgDgIgDQgIgCgIAAQAIAAAIACQAIADADADIAIgPQAEgHABgHIABgCQAPgCAQAAQAKABAAALIAAAHQgBANgLAIIgWARIAWgRQALgIABgNQAOgEAMAHQAEACABAFQABAKgGAHIAPASQAEAFgBAJQgCAMgMAEQABAEgCAGQgEAMgIAMQgIANgQAEQADAOAAAOQABAQgJAMIgRAXIgQAZIgRAaQgJANgMALIgWATQgMALgOAHIgZALQgOAFgPAEIggAFIgLACIgGAAIgMACQgMACgOAAIgFAAgABygJQAIAAAFgFIAAAAIAAAAQgFAFgIAAIAAAAIAAAAIgJgBIgBAAIABAAIAJABIAAAAIAAAAgACOg+QAJAAAIgCIAFgBIgFABQgIACgJAAIAAAAIAAAAIgNgBIgQgDIAQADIANABIAAAAIAAAAgACYhrQgMAHgPAGIgOAFIAOgFQAPgGAMgHQAFgDADgDQgDADgFADgAAvhtIAOgBIABgBIAMgFQAHgEAAgDIgCgDIACADQAAADgHAEIgMAFIgBABIgOABIgBAAIAAAAIgBAAIAAAAIgBAAIAAAAIgBAAIABAAIAAAAIABAAIAAAAIABAAIAAAAIABAAg");
	this.shape_15.setTransform(-19.9,150.7);

	this.instance_1 = new lib.Tween21("synched",0);
	this.instance_1.setTransform(-33.3,162,1,1,0,0,0,-13.5,11.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14}]}).to({state:[{t:this.instance_1}]},14).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_1}]},3).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({regX:-13.8,regY:10.4,scaleX:1,scaleY:1,rotation:-23.3,x:-33.4,y:161},3).to({regX:-13.5,regY:11.3,scaleX:1,scaleY:1,rotation:0,x:-33.3,y:162},3).wait(5));

	// Layer 6
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(0.3,1,1).p("AhZhAQgGgJgGgMQgHgOgCgPQgCgQABgQQABgQAHgOQACgKANgKQAMgKAMgIQAMgIAQgEQAOgEAQgCQAOgCAQACQAQABAQAEQAOACAOAHQANAGAOAJQANAIAJAJQALAKAHAMQADAEABAIQACAQgEAPQgBABgBACQgDALgDAOQgCAPgGANQgGAOgGAOQgGANgIAMQgFAHgDAFQgDAGgDAGQAAABgBABQAGABAGADQAFADAFAEQAEADABAFQABADAAAEQgBAAAAABQgBAJgEAIQgFAHgDAGQAHACAEAGQAIAJgCATQgCAVgKAPQgJAMgLAGQgGAEgIADQgMAEgQACQgKABgHgEQgEAKgFAIQgIAKgLAMQgJAMgOAFQgPAFgPABQgRAAgQgBQgPgBgMgGQgOgHgIgJQgJgLgGgLQgHgKgEgQQgDgOADgQQAEgQAGgPQAGgPAIgLQALgNALgGQgDgHgBgIQAAgEgBgEQAAgDAAgEQABgLAAgMQAAgDABgDQAAgGAAgFQABgKACgJQAEgQAIgKQADgDADgCgAg1hgQgLAGgLALQgHAGgHAJABgAOQgBAAgBAAQgHgBgGADQgGADgCAHQgCADgCAEQgBAEgCAEQgBAEgBAEQgDgFgEgDQgIgGgNABQgGAAgCAFQgDAEABAJQgCgIgHgFQgCgBgCgBQgDgCgFAAQgMgDgHAHQgEAEgBAJQgBAGgDAGQgCgIgIgDQgRgHgOAIQgOAIgCANQAAAEABACAgrBhQAIgKAOgGQAOgGAOgBQARgBAPAEQAQAEANAHQACACABAC");
	this.shape_16.setTransform(-77.2,202.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFCC99").s().p("AhODpQgPgBgMgGQgOgHgIgJQgJgLgGgLQgHgKgEgQQgDgOADgQQAEgQAGgPQAGgPAIgLQALgNALgGQgDgHgBgIIgBgIIAAgHIABgXIABgGIAAgLIADgTQAEgQAIgKIAGgFIAOgPQALgLALgGQgLAGgLALIgOAPQgGgJgGgMQgHgOgCgPQgCgQABgQQABgQAHgOQACgKANgKIAYgSQAMgIAQgEQAOgEAQgCQAOgCAQACQAQABAQAEQAOACAOAHQANAGAOAJQANAIAJAJQALAKAHAMQADAEABAIQACAQgEAPIgCADQgDALgDAOQgCAPgGANIgMAcQgGANgIAMIgIAMIgGAMIgBACQAGABAGADIAKAHQAEADABAFIABAHIgBABQgBAJgEAIIgIANQAHACAEAGQAIAJgCATQgCAVgKAPQgJAMgLAGIgOAHQgMAEgQACQgKABgHgEQgEAJgFAJQgIAKgLAMQgJAMgOAFQgPAFgPABIgMAAIgVgBgAAHBKQgOABgOAGQgOAGgIAKQAIgKAOgGQAOgGAOgBIADAAIADAAIAAAAIABAAQALAAAKACIAEABQAQAEANAHQACACABACQgBgCgCgCQgNgHgQgEIgEgBQgKgCgLAAIgBAAIAAAAIgDAAIgDAAgAhPBTIgBgEIAAgCQACgNAOgIIACgBQAGgDAIgBIAAAAIAAAAQAGABAGACIADABQAIADACAIQADgGABgGQABgJAEgEQAFgFAJAAIAAAAIAAAAIAEAAIAAAAIABABIAIACIAEACQAHAFACAIIAAgEQAAgGACgDQACgFAGAAIACAAIACAAIAAAAIABAAQAJAAAHAFQAEADADAFIACgIIADgIIAEgHQACgHAGgDQAFgCAFAAIABAAIAAAAIABAAIABAAIACAAIgCAAIgBAAIgBAAIAAAAIgBAAQgFAAgFACQgGADgCAHIgEAHIgDAIIgCAIQgDgFgEgDQgHgFgJAAIgBAAIAAAAIgCAAIgCAAQgGAAgCAFQgCADAAAGIAAAEQgCgIgHgFIgEgCIgIgCIgBgBIAAAAIgEAAIAAAAIAAAAQgJAAgFAFQgEAEgBAJQgBAGgDAGQgCgIgIgDIgDgBQgGgCgGgBIAAAAIAAAAQgIABgGADIgCABQgOAIgCANIAAACIABAEg");
	this.shape_17.setTransform(-77.2,202.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16}]}).wait(25));

	// Layer 1
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(0.3,1,1).p("AjMgJQgLAGgLAFQgNAJgLAHQgNAHgNgBQAKAIADANQAFASgOADQgQAEgJgKQgLgKgGgRQgFAMgLANQgJAOgRgFQgLgEABgMQACgNAIgLQgFABgIACQgYAHgTgLQgOgHAKgLQAOgPATAAQgQgGgWgIQgJgDAJgHQALgHAPgDQgIgHgFgLQgEgIAHABQAPACAMAHQANAHAFANQABgPAFgNQAFgOAFgNQAGgOAIgNQAJgNALgLQALgLANgKQANgJANgGQANgHAOgFQAOgEAPgCQAQgCAQAAQADAAACAAQADgLALgMQAIgJAOgFQANgEAQgCQAQgCAQAAQAPAAAQAAQARgBAPAFQALAEAOAEQAPAEANAHQAOAHAMAJQANAJALAGQAKAFALACQgKgDgCgMQgCgPgHgLQgDgEAAgEIAAgBQgBgDABgDQgBgNACgKQACgOAIgKQAMgQALgWQAJAFADAMQAFgIAKgJQARgOATgJQAYgLARgNQAFAPgHALQACgCADgBQAPgHAOgFQAbgKAcAMQgMAHgJAFQASgGAUADQAYADAWAJQAQAGAKAOQAHAIgKgBQgegGgdgGQAEAEAEAHQAGAJAKAFQANAHAHAMQABAEgBAEQgCATANAGQAKAEAEALQAGANAAAQQAAARgHAOQgFAMgJALQgDAFgFAEQgGAFgHAEQgMAHgQAEQgPAEgOAEAh3hMQgGAKgIAIQgCADgDACQgJAKgKAIQgMALgRAHQgJAEgJAEAjiCEQgBAAAAgBQgHgMABgRQABgQADgQQADgOAEgOQAFgOAEgNQAEgMAFgMAiKg1QAIANAPACQAOADAQgBQAQAAAPABQAPADAQgDAjiCEQAHALAJAIQAKAIAQAEQAPAEAMAGQAJAFAKAFQAHAEAHABQALADASAFQARAFARAEQASAFARAEQARAFAQAEQASAFASAEQATADATADQATACATADQAGABAGAAAjiCEQgLAHAAARQAAARgBAPQgBAQgBAQQgBAIAAAIQABAHACAHQAEAPAGAOQAGAOAHAKQAJAMAKAHQAMAKANAEQAPAGAOAFQAGACAFABIgBATAj4DtQAEgBADAAABdjvQABgEACgEQAGgLASgBQARAAAHAMQAFAHAEADQACgPAAgRQAAgCAAgDQAOAJAJALQAKALAEgRQAFgQgHgMQgBgCgCgDQAWACAWADQgFgQgRgIQAYADAZADQAWACgGgRQgBgEgCgDQARAFAWAGQALADALABQALACAKAAAB1i3QAEABAGAAQARAAALgHAEmkbQAIgLAPgHQAIgDAGABQAGABAEAHQAEAGgDAIQgEAMgIAFAEGkeQgGgCgFgDQgJAMANAHQAKAFAAgLQAAgCgBgBQAAgEgCgBgAD3jJQAJANAMAFQAPAFAQACQASADANgHQAPgHAFgLACPD0QgGABgHABQABgBAAgBQAGABAGgBQAKAAAKABQAQACAQACQAQACAQAAQAEABADgBQgFAGgEAFQgKALgNAHQgNAJgLALQgLALgLAKQgKAKgNAKQgMAKgOAEQgEACgDABQgCABgCAAQAAABgBAAQgDABgDABQgBABgCABQgCABgCACQAAAAgBAAQABAAAAgBQACgBACgBAF6iBQAeAkAPBBQACAIAAAIQACANgDAQQgDAPgGAOQgBAGgCAFQgDAJgCAIQgDAPgJAMQgIALgIAKQgJAMgLAMQgLAMgNAIQgNAHgNAIQgNAJgKAKQgKAKgMAMQgLALgKAJQgDAEgEADQAAABgCABAF/iKQAEAAAEAAABRFvQgKAGgRgCQgTgCgTgCQgSgCgTgCQgTgDgSgDQgSgCgTgDQgSgDgSABABgFnQgEACgDAB");
	this.shape_18.setTransform(-75.3,165.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAAAIQgNgHAKgKIAJAFQACABgBADIABACQAAAIgFAAIgDgCg");
	this.shape_19.setTransform(-49.6,137.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#996633").s().p("AhoA4QgHgMgRAAQgSABgGAMIgDAHQgCgNADgKQACgNAIgLQAMgQALgUQAIAGAEAMQAFgJAKgJQARgOASgIQAYgLASgNQAFAOgHALIAFgDIAbgLQAbgKAcALIgWAMQASgGAVADQAXADAXAJQAQAHAKANIgDAHIg8gMQAFAEAEAIIgVgCIgWgFIgngKIADAGQAGAQgWgBIgvgFQAQAGAGAPQgXgDgVgBIADAEQAGAMgEAQQgFASgJgLQgKgLgOgJIAAAFQAAARgCAOQgEgDgEgHg");
	this.shape_20.setTransform(-50.3,135);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AA6B3IgmgEIglgFIglgFIglgFQgSgDgSAAIgLgDIgdgKQgNgFgNgJQgJgIgJgMQgHgJgGgOQgHgPgEgMIgCgPIAAgPIADghIABgfQAAgRALgHQAGALAKAIQAKAIAQAEQAPADAMAHIATAKQAGAEAHAAIAeAIIAiAKIAjAJIAhAJIAkAIIAmAGIAmAGIAMABIgBACIANgCQAKgBAKABIAgAEIAgACIAHAAIgJAJQgKALgNAIQgNAJgMAKIgVAWIgXAUQgMAJgPAFIgGACIgFACIgGADIgEACIgEACIAAAAQgJAFgMAAIgGAAg");
	this.shape_21.setTransform(-75.7,190.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFCC99").s().p("ADjEiIgggCIgggEQgKgCgKABIgMAAIAMAAIgNACIABgCIgMgBIgmgGIgmgGIgkgIIghgJIgjgJIgigKIgdgIQgHAAgHgEIgTgKQgMgGgPgEQgQgEgKgIQgJgIgHgLIgBgBQgHgMABgRQABgRADgPIAHgcIAJgbIAJgaQgLAGgLAHIgYAPQgNAHgNAAQAKAIADANQAFARgOADQgQAEgJgJQgLgLgGgRQgFAMgLAOQgJAOgRgGQgLgDABgMQACgOAIgLIgNAEQgYAGgTgKQgOgIAKgLQAOgQATgBIgmgNQgJgEAJgGQALgGAPgCQgIgHgFgLQgEgIAHABQAPACAMAHQAMAHAGALQABgOAFgNIAKgbQAGgNAIgNQAJgNALgLQALgLANgKQANgJANgHIAbgLQAOgFAPgBQAQgDAQAAIAFAAQADgKALgMQAIgJAOgFQANgFAQgBQAQgCAQAAIAfgBQARAAAPAEIAZAIQAPAEANAIQAOAHAMAJIAYAPQAKAFALACQgKgEgCgMQgCgOgHgLQgDgEAAgFIAAAAIAAgGIADgIQAGgMASAAQARgBAHAMQAFAHAEAEQACgPAAgRIAAgFQAOAJAJALQAKALAEgRQAFgRgHgMIgDgEQAWABAWAEQgFgRgRgHIAxAFQAWADgGgRIgDgHIAnALIAWAEIAVACQAGAIAKAGQANAHAHAMQABADgBAFQgCATANAGQAKAEAEAKQAGAOAAAQQAAARgHANQgFAMgJAMQgDAFgFAEIgIAAIgFAJQAeAjAPBAIACAQQACAPgDAQQgDAOgGAPIgDALIgFARQgDAOgJAMIgQAWIgUAYQgLALgNAIIgaAQQgNAIgKALIgWAVIgVAVIgHAHIgCACIgEAAIgDAAgAidACQgMAKgRAHIgSAJIASgJQARgHAMgKQAKgGAJgKQAIAMAPACIABAAQAMABANAAIABAAIAAAAIABAAIACAAIADAAIADAAIABAAIAAAAIAYABIANABIABAAIAAAAIAHAAIABAAIAJgBIgJABIgBAAIgHAAIAAAAIgBAAIgNgBIgYgBIAAAAIgBAAIgDAAIgDAAIgCAAIgBAAIAAAAIgBAAQgNAAgMgBIgBAAQgPgCgIgMQgJAKgKAGgAiFgUIgFAGIAFgGQAIgIAGgJQgGAJgIAIgAFehPIgdAIIAdgIQAQgEAMgHQgMAHgQAEgAE2iJQAKAAAJgDIABgBQAPgIAFgKQgFAKgPAIIgBABQgJADgKAAIAAAAIgBAAIgKAAQgQgCgPgFQgMgFgJgNQAJANAMAFQAPAFAQACIAKAAIABAAIAAAAgAB/iPQARAAALgIQgLAIgRAAIgBAAIgBAAIgGgBIgCAAIACAAIAGABIABAAIABAAgAFWjyQgEALgIAGQAIgGAEgLIABgHQAAgEgCgEQgEgGgGgBIAAAAIgDgBIAAAAIgCAAIgBAAIAAAAIgIADQgPAGgIAMQAIgMAPgGIAIgDIAAAAIABAAIACAAIAAAAIADABIAAAAQAGABAEAGQACAEAAAEIgBAHgAD/jqQAKAGAAgMIgBgCQAAgEgCgBIgLgFQgJAMANAGg");
	this.shape_22.setTransform(-75.3,161.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]}).wait(25));

	// Layer 7
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(0.3,1,1).p("AhFBlQgBAEgCAEQgGANgVgGQgTgFADgSQACgMAAgPQgBgGgBgFQgGgQgGgMQgIgNAAgSQAAgMAAgOQgBgMACgLQAEgOADgRQADgOAPgEQAOgEAQACQAIABAGAEQAKAIAEAHQAHgKAPgIQAOgGAOgFQAKgCALgCAhJhDQgHANAGAPACJANQgIAFgIADQgMAFgOAFQgIADgJACQgGABgHABQgQACgQgBQAFAIAEAIQAFAQgJAOQgEAGgIAGQgDABgDABQgDACgEAAQgHgBgGgIQADgGAAgKQAAgEgDgBAAhAnQgDgEgEgFQgDgCgDgDAgZBbQAAgCAAgBQABgKgGgHAhMBDQAHAHABAIQABAKgCAJAgZBbQgDANgPABQgRACgJgGAAABcQgBAFgGADQgOAIgEgR");
	this.shape_23.setTransform(-102.4,201.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFCC99").s().p("AhjB1QgTgFADgSQABgMAAgQQAAgFgCgFQgGgQgGgMQgHgOAAgRIgBgaQAAgNACgLIAGgeQADgOAPgFQAOgEAQACQAJABAFAEQAKAJAEAHQAHgLAPgHQAOgHAPgEIAVgFIAHgBIADAPQADAOAHAPQAGAOAHAKQAJALAKAIQAMAKANAEIAdAKIALADIgBASIgPAIIgbAKIgQAEIgOACQgPACgQAAQAFAHADAJQAGAQgJANQgFAHgIAFIgFADIgHABQgIAAgFgJQADgGAAgKIAAAAQAAgEgDAAQADAAAAAEIAAAAQAAAKgDAGQgCAGgFADQgOAHgFgRIAAgDIAAgCQAAgIgFgGQAFAGAAAIIAAACIAAADQgDAOgOABQgRACgJgHQABgGAAgHIAAgGQgBgIgIgHQAIAHABAIIAAAGQAAAHgBAGIgDAJQgFAJgLAAQgFAAgGgCgAAaAfIAHAJIgHgJIgGgGIAGAGgAhKgmQgDgHAAgHQAAgHAEgHQgEAHAAAHQAAAHADAHg");
	this.shape_24.setTransform(-102.3,201);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23}]}).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.9,88.7,121,137.9);


(lib.scene1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("objectivecomplementsarefound");
	}
	this.frame_198 = function() {
		playSound("theyelectedbubthecaptain");
		playSound("Cowbell");
	}
	this.frame_235 = function() {
		playSound("theobjectivecomplementisthecaptain");
		playSound("woo");
	}
	this.frame_245 = function() {
		playSound("woo");
	}
	this.frame_254 = function() {
		playSound("woo");
	}
	this.frame_262 = function() {
		playSound("woo");
	}
	this.frame_287 = function() {
		playSound("theyselectedthecolorred");
		playSound("Cowbell");
	}
	this.frame_317 = function() {
		playSound("theobjectivecomplementisred");
		playSound("woo");
	}
	this.frame_327 = function() {
		playSound("woo");
	}
	this.frame_336 = function() {
		playSound("woo");
	}
	this.frame_344 = function() {
		playSound("woo");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(196).call(this.frame_198).wait(37).call(this.frame_235).wait(10).call(this.frame_245).wait(9).call(this.frame_254).wait(8).call(this.frame_262).wait(25).call(this.frame_287).wait(30).call(this.frame_317).wait(10).call(this.frame_327).wait(9).call(this.frame_336).wait(8).call(this.frame_344).wait(37));

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AgHA8QgEgDAAgFIABgEIAAgDIAAgMIgBgLQAAgMgCgRIgCgeIgEAAQgTAAgLgCQgJgDAAgIQAAgEADgEQAEgEAFAAIANACIAOABIAPAAIANgBIATABIATABQAFAAADADQAEAEAAAEQAAAFgEADQgDAEgFAAIgUgBIgVgBIADAiIABAgIABAIIABAIQAAAHgDAFQgDAGgGAAQgDAAgEgDg");
	this.shape.setTransform(28.9,89.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s().p("AgkAyQgMgNAAgSQAAgaAYgdQAVgYATAAIAIAAIAEABQAEgEAFAAQAJAAACAKIABAQQAAAEgCAEQgDAEgHAAQgHAAgEgIIgCgEIgIgBQgKAAgMARQgTAVAAATQABAJAFAHQAGAGAJAAQAGAAAIgEIAOgIQAGgFADAAQAFAAAEAEQADAEAAAEQAAAFgEADQgXAUgWAAQgSAAgOgOg");
	this.shape_1.setTransform(17.8,89.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000FF").s().p("AglA/QgJgIAAgbIABgfIACgiIgBgIIgBgJQAAgMAMgBQADAAADACIATgDIAOgBQAVAAANAEQAHADAAAIQAAAFgDADQgDAEgFAAIgEgBQgNgDgNgBIgLABIgPAEIgBAgIAegDIAUgBQAFAAAEACQADAEAAAFQAAAIgKABIgUACIgiADIAAARQAAAQACADQABABAJAAIAOAAIAPgBIAFAAIAFgBQAFAAADADQAEADAAAFQAAAKgKABQgIACgYAAQgbAAgIgHg");
	this.shape_2.setTransform(7.4,89.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0000FF").s().p("AgjA5QgRgMAAgQQAAgNAMAAQAMAAAAANQAAAFAIAFQAIAGAIAAQADAAABgLIAAgaIABgtIAAgFIgBAAIgJAAIgJgBQgFAAgEgDQgDgDAAgFQAAgMAOAAIAJAAIAHABIAPgBIAPgBQAXAAAAANQAAAFgDADQgEAEgFAAIgFAAIgFgBIgGAAIAAAGQAAA5gJAcQgGATgOAAQgQAAgPgKg");
	this.shape_3.setTransform(-3.7,89.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0000FF").s().p("AgoA/QgEgFAAgEIAAhWIAAgMIAAgKQACgIANgCQAGgCAPAAQAOAAAOAKQARAMAAASQAAAJgEAHQgDAFgGAFQAIADAGAIQAHAJAAAJQAAALgMAKQgIAGgJAEQgRAHgeAAQgFAAgEgEgAgVAsQAOgBAPgEQAPgFgBgEQAAgHgJgFQgHgEgGAAIgVgBgAgVgrIAAASIAAARIALABQAYgCAAgRQAAgGgIgFQgGgGgIAAIgNAAg");
	this.shape_4.setTransform(-14.5,89.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0000FF").s().p("AggA4QgWgRAAgnIABgMIAAgMIAAgKIAAgJQAAgHADgGQADgHAGAAQAEAAAEADQAEADAAAFIAAAOIgBAOIAAAMIAAALQAAALADALQADANAHAFQADACANABQAUAAAIgmQAEgRAAgjQAAgFADgEQADgGAHAAQAGAAADAEQACADAAAEQAAAhgDASQgFAagNATQgHAIgIAGQgLAGgJAAQgVAAgKgIg");
	this.shape_5.setTransform(-26.6,89.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0000FF").s().p("AgsA1QgKgHAAgKQAAgFADgEQAEgEAFABQAIgBADAIQAFALAQAAQANAAANgHQAOgGAAgIQAAgLgJgCQgGgDgQAAQgPgBgLgEQgPgFAAgNQAAgRARgNQARgOATAAQAIAAAMAEQAPAEAAAHQAAAEgDADQgEAEgFAAIgMgBIgLgDQgLABgIAFQgKAFAAAGQAAADADADQADACAGAAIAUABQASACALAIQAMAJAAARQAAAWgZAKQgSAJgWAAQgVAAgNgKg");
	this.shape_6.setTransform(-38.6,89.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgoA/QgEgFAAgEIAAhWIAAgMIAAgKQACgIANgCQAGgCAPAAQAOAAAOAKQARAMAAASQAAAJgEAHQgDAFgGAFQAIADAGAIQAHAJAAAJQAAALgMAKQgIAGgJAEQgRAHgeAAQgFAAgEgEgAgVAsQAOgBAPgEQAPgFgBgEQAAgHgJgFQgHgEgGAAIgVgBgAgVgrIAAASIAAARIALABQAYgCAAgRQAAgGgIgFQgGgGgIAAIgNAAg");
	this.shape_7.setTransform(74.9,89.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgsA9QgDgDgBgFIABgSIAAgTIAAhBQAAgFAEgFQAEgFAHAAIAUACQAMABAGAEQAkASAAAbQAAALgIAGQgHAIgPAGQAWAMAMANQACADAAAEQAAAFgDADQgDAEgFAAQgFAAgEgEQgZgXgcgJIABAaQAAAFgEADQgDAEgFAAQgFAAgDgEgAgYACIADAAQAVAAAHgDQAFgCADgEQAEgEAAgBQAAgKgMgIQgJgIgMgCIgKAAg");
	this.shape_8.setTransform(64,89.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AglA/QgJgIAAgbIABgfIACgiIgBgIIgBgJQAAgMAMgBQADAAADACIATgDIAOgBQAVAAANAEQAHADAAAIQAAAFgDADQgDAEgFAAIgEgBQgNgDgNgBIgLABIgPAEIgBAgIAegDIAUgBQAFAAAEACQADAEAAAFQAAAIgKABIgUACIgiADIAAARQAAAQACADQABABAJAAIAOAAIAPgBIAFAAIAFgBQAFAAADADQAEADAAAFQAAAKgKABQgIACgYAAQgbAAgIgHg");
	this.shape_9.setTransform(53.3,89.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgRA6QgKgXgMgsIgHgXQgFgPAAgGQAAgFAEgDQADgDAFgBQAIAAADAJIADAOIAIAbIANAoIARgwIAIgUQAEgMAGgGQAEgFAFAAQAFAAADAEQAEADAAAFQAAADgCADQgFAHgEAJIgGARIgWA3IgJAUQgEAGgFAAQgIABgEgJg");
	this.shape_10.setTransform(42.1,89.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#009900").s().p("AgHA8QgEgDAAgFIABgEIAAgDIAAgMIgBgLQAAgMgCgRIgCgeIgEAAQgTAAgLgCQgJgDAAgIQAAgEADgEQAEgEAFAAIANACIAOABIAPAAIANgBIATABIATABQAFAAADADQAEAEAAAEQAAAFgEADQgDAEgFAAIgUgBIgVgBIADAiIABAgIABAIIABAIQAAAHgDAFQgDAGgGAAQgDAAgEgDg");
	this.shape_11.setTransform(185.9,89.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#009900").s().p("AgjAyQgNgNAAgSQAAgaAYgdQAVgYATAAIAIAAIAEABQAEgEAFAAQAJAAACAKIABAQQAAAEgCAEQgDAEgHAAQgHAAgEgIIgCgEIgIgBQgKAAgMARQgSAVgBATQAAAJAHAHQAFAGAJAAQAGAAAIgEIAOgIQAGgFADAAQAFAAAEAEQADAEAAAEQAAAFgEADQgXAUgWAAQgSAAgNgOg");
	this.shape_12.setTransform(174.7,89.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#009900").s().p("AglA/QgJgIAAgbIABgfIACgiIgBgIIgBgJQAAgMAMgBQADAAADACIATgDIAOgBQAVAAANAEQAHADAAAIQAAAFgDADQgDAEgFAAIgEgBQgNgDgNgBIgLABIgPAEIgBAgIAegDIAUgBQAFAAAEACQADAEAAAFQAAAIgKABIgUACIgiADIAAARQAAAQACADQABABAJAAIAOAAIAPgBIAFAAIAFgBQAFAAADADQAEADAAAFQAAAKgKABQgIACgYAAQgbAAgIgHg");
	this.shape_13.setTransform(164.3,89.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#009900").s().p("AgjA5QgRgMAAgQQAAgNAMAAQAMAAAAANQAAAFAIAFQAIAGAIAAQADAAABgLIAAgaIABgtIAAgFIgBAAIgJAAIgJgBQgFAAgEgDQgDgDAAgFQAAgMAOAAIAJAAIAHABIAPgBIAPgBQAXAAAAANQAAAFgDADQgEAEgFAAIgFAAIgFgBIgGAAIAAAGQAAA5gJAcQgGATgOAAQgQAAgPgKg");
	this.shape_14.setTransform(153.2,89.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#009900").s().p("AgoA/QgEgFAAgEIAAhWIAAgMIAAgKQACgIANgCQAGgCAPAAQAOAAAOAKQARAMAAASQAAAJgEAHQgDAFgGAFQAIADAGAIQAHAJAAAJQAAALgMAKQgIAGgJAEQgRAHgeAAQgFAAgEgEgAgVAsQAOgBAPgEQAPgFgBgEQAAgHgJgFQgHgEgGAAIgVgBgAgVgrIAAASIAAARIALABQAYgCAAgRQAAgGgIgFQgGgGgIAAIgNAAg");
	this.shape_15.setTransform(142.4,89.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#009900").s().p("AgrAzQgSgPAAgYQAAgaARgYQAUgaAcAAQAdAAAPAOQAOANAAAaQAAAbgQAWQgTAbgcAAQgZAAgRgOgAgZgYQgNARAAATQAAAOALAJQAKAHAQABQAQAAAMgSQAMgRAAgTQAAgRgIgHQgIgGgTgBQgQABgNARg");
	this.shape_16.setTransform(130,89.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#009900").s().p("AgHA8QgEgDAAgFIABgEIAAgDIAAgMIgBgLQAAgMgCgRIgCgeIgEAAQgTAAgLgCQgJgDAAgIQAAgEADgEQAEgEAFAAIANACIAOABIAPAAIANgBIATABIATABQAFAAADADQAEAEAAAEQAAAFgEADQgDAEgFAAIgUgBIgVgBIADAiIABAgIABAIIABAIQAAAHgDAFQgDAGgGAAQgDAAgEgDg");
	this.shape_17.setTransform(110.1,89.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#009900").s().p("AgjAyQgNgNAAgSQAAgaAYgdQAVgYAUAAIAHAAIAEABQAEgEAFAAQAJAAACAKIABAQQAAAEgCAEQgEAEgGAAQgHAAgDgIIgDgEIgHgBQgLAAgMARQgSAVgBATQAAAJAHAHQAFAGAJAAQAGAAAIgEIAOgIQAGgFADAAQAFAAAEAEQADAEAAAEQAAAFgFADQgWAUgWAAQgTAAgMgOg");
	this.shape_18.setTransform(98.9,89.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#009900").s().p("AglA/QgJgIAAgbIABgfIACgiIgBgIIgBgJQAAgMAMgBQADAAADACIATgDIAOgBQAVAAANAEQAHADAAAIQAAAFgDADQgDAEgFAAIgEgBQgNgDgNgBIgLABIgPAEIgBAgIAegDIAUgBQAFAAAEACQADAEAAAFQAAAIgKABIgUACIgiADIAAARQAAAQACADQABABAJAAIAOAAIAPgBIAFAAIAFgBQAFAAADADQAEADAAAFQAAAKgKABQgIACgYAAQgbAAgIgHg");
	this.shape_19.setTransform(88.5,89.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#009900").s().p("AgsA9QgDgDAAgFIAAgSIAAgTIAAhBQAAgFADgFQAFgFAHAAIAVACQALABAGAEQAkASAAAbQAAALgIAGQgHAIgPAGQAWAMALANQAEADAAAEQgBAFgDADQgDAEgGAAQgEAAgEgEQgZgXgcgJIABAaQAAAFgEADQgDAEgFAAQgEAAgEgEgAgZACIAEAAQAUAAAIgDQAFgCADgEQADgEAAgBQABgKgMgIQgKgIgLgCIgLAAg");
	this.shape_20.setTransform(77.7,89.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#009900").s().p("AgmA8QgDgEAAgEQAAgFADgDQAEgEAFAAIAQgBIAAgmQAAgUABgVIgSABQgFAAgDgDQgDgEAAgEQAAgFADgDQADgDAEAAIAZgBQAOAAAYADQAKACAAAKQAAAFgDADQgEADgEAAIgVgDQgCAQAAAXIAAAmIAXgBQAFAAADADQADAEAAAEQAAAFgDADQgDADgFAAIgPABIgOAAIgPACIgRABQgFAAgDgDg");
	this.shape_21.setTransform(67.3,89.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#009900").s().p("AgZBCQgJgCgGgDQgFgBgDgDQgDgDAAgFIAAgYIABgZIAAgaIgBgbQAAgFAFgEQAEgFAFAAQADAAALAFIAPAHQAXAIARAQQAUAUAAAWQAAAOgHANQgHAOgMAHQgOAJgXAAIgOgCgAgcApQAEADAEABIAJABQAQAAAIgFQAHgFAFgIQAEgIAAgJQAAgTgYgPQgGgEgbgMg");
	this.shape_22.setTransform(57,89.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00E600").s().p("AgHA8QgEgDAAgFIABgEIAAgDIAAgMIgBgLQAAgMgCgRIgCgeIgEAAQgTAAgLgCQgJgDAAgIQAAgEADgEQAEgEAFAAIANACIAOABIAPAAIANgBIATABIATABQAFAAADADQAEAEAAAEQAAAFgEADQgDAEgFAAIgUgBIgVgBIADAiIABAgIABAIIABAIQAAAHgDAFQgDAGgGAAQgDAAgEgDg");
	this.shape_23.setTransform(275.5,89.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00E600").s().p("Ag5A/QgDgDAAgFIAAgKIAAgKIABgOIAAgPIAAgOIAAgQIgBgOIgBgQQAAgFAEgEQAEgDAGAAQAGAAAIALQAjA1AlAgIAAgNIgBg1IgBgJIAAgJQgBgLAMAAQAOAAAAApIAAAOIgBAyIgBANQgCALgLAAQgFAAgHgGQghgdglgyIgBAYIABAUIAAATQAAAZgNAAQgFAAgEgEg");
	this.shape_24.setTransform(262.6,89.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00E600").s().p("AglA/QgJgIAAgbIABgfIACgiIgBgIIgBgJQAAgMAMgBQADAAADACIATgDIAOgBQAVAAANAEQAHADAAAIQAAAFgDADQgDAEgFAAIgEgBQgNgDgNgBIgLABIgPAEIgBAgIAegDIAUgBQAFAAAEACQADAEAAAFQAAAIgKABIgUACIgiADIAAARQAAAQACADQABABAJAAIAOAAIAPgBIAFAAIAFgBQAFAAADADQAEADAAAFQAAAKgKABQgIACgYAAQgbAAgIgHg");
	this.shape_25.setTransform(250.6,89.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00E600").s().p("AAsA2IgEgUQgEgPgFgaIgMAhIgFAPIgGAPQgFAHgGAAQgHAAgFgJIgEgPQgHgVgFgWIgLAnIgDASQgDAMgJAAQgGAAgDgEQgDgDAAgFQAAgNAGgTIAJgeIAFgaQAEgSAEgFQAFgGAGAAQAIAAADAHQAEAIADAWQAEAWAHAWQAHgWAJgeIAEgTQAFgMAJAAQAJAAAEAOQACAGADAPQAFAhAGAaIAIAbQAAAFgEAEQgEADgEAAQgJAAgFgNg");
	this.shape_26.setTransform(237.7,89.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00E600").s().p("AglA/QgJgIAAgbIABgfIACgiIgBgIIgBgJQAAgMAMgBQADAAADACIATgDIAOgBQAVAAANAEQAHADAAAIQAAAFgDADQgDAEgFAAIgEgBQgNgDgNgBIgLABIgPAEIgBAgIAegDIAUgBQAFAAAEACQADAEAAAFQAAAIgKABIgUACIgiADIAAARQAAAQACADQABABAJAAIAOAAIAPgBIAFAAIAFgBQAFAAADADQAEADAAAFQAAAKgKABQgIACgYAAQgbAAgIgHg");
	this.shape_27.setTransform(225,89.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#00E600").s().p("AgrAyIACgbQACgiAAgsQAAgFADgDQAEgDAFAAQAFAAADADQADADAAAFQAAAsgCAkIgCAUQAUAAAdgKIAEAAQAFAAADAEQADADAAAEQAAAHgHAEQgKAEgVADQgQADgMAAQgVAAAAgRg");
	this.shape_28.setTransform(215,89.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#00E600").s().p("AgkA/QgDgEAAgEIAAgXIABgkIACgmQAAgWAMABIAIgBIAMgBQAOAAAPALQAPAMAAARQAAAVgQAKQgPALgTAAIgHAAIAAAmQAAAEgEAEQgDADgEAAQgFAAgDgDgAgOgrIAAAMIgCAcIAGABQALAAAJgGQAJgHAAgKQAAgHgJgGQgIgFgIAAIgEAAIgEAAg");
	this.shape_29.setTransform(205.6,89);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#00E600").s().p("AAsA2IgEgUQgEgPgFgaIgMAhIgFAPIgHAPQgEAHgGAAQgHAAgFgJIgEgPQgHgVgFgWIgLAnIgDASQgDAMgJAAQgGAAgDgEQgDgDAAgFQAAgNAFgTIAKgeIAFgaQADgSAFgFQAEgGAHAAQAIAAADAHQAEAIADAWQAEAWAHAWQAHgWAJgeIAEgTQAFgMAJAAQAJAAAEAOQADAGACAPQAFAhAGAaIAIAbQAAAFgEAEQgDADgFAAQgJAAgFgNg");
	this.shape_30.setTransform(193.7,89.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#00E600").s().p("AgrAzQgSgPAAgYQAAgaARgYQAUgaAcAAQAdAAAPAOQAOANAAAaQAAAbgQAWQgTAbgcAAQgZAAgRgOgAgZgYQgNARAAATQAAAOALAJQAKAHAQABQAQAAAMgSQAMgRAAgTQAAgRgIgHQgIgGgTgBQgQABgNARg");
	this.shape_31.setTransform(179.3,89.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#00E600").s().p("AgkAyQgMgNAAgSQAAgaAZgdQAUgYATAAIAHAAIAGABQADgEAGAAQAIAAACAKIABAQQAAAEgCAEQgEAEgFAAQgIAAgEgIIgDgEIgHgBQgJAAgMARQgUAVABATQAAAJAFAHQAHAGAIAAQAGAAAJgEIAMgIQAHgFADAAQAFAAADAEQAEAEAAAEQAAAFgFADQgXAUgVAAQgTAAgNgOg");
	this.shape_32.setTransform(167.4,89.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#00E600").s().p("AglA/QgJgIAAgbIABgfIACgiIgBgIIgBgJQAAgMAMgBQADAAADACIATgDIAOgBQAVAAANAEQAHADAAAIQAAAFgDADQgDAEgFAAIgEgBQgNgDgNgBIgLABIgPAEIgBAgIAegDIAUgBQAFAAAEACQADAEAAAFQAAAIgKABIgUACIgiADIAAARQAAAQACADQABABAJAAIAOAAIAPgBIAFAAIAFgBQAFAAADADQAEADAAAFQAAAKgKABQgIACgYAAQgbAAgIgHg");
	this.shape_33.setTransform(149.6,89.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#00E600").s().p("AgRA6QgKgXgMgsIgHgXQgFgPAAgGQAAgFAEgDQADgDAFgBQAIAAADAJIADAOIAIAbIANAoIARgwIAIgUQAEgMAGgGQAEgFAFAAQAFAAADAEQAEADAAAFQAAADgCADQgFAHgEAJIgGARIgWA3IgJAUQgEAGgFAAQgIABgEgJg");
	this.shape_34.setTransform(138.5,89.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#00E600").s().p("AgmA8QgDgEAAgEQAAgFADgDQAEgEAFAAIAQgBIAAgmQAAgUABgVIgSABQgFAAgDgDQgDgEAAgEQAAgFADgDQADgDAEAAIAZgBQAOAAAYADQAKACAAAKQAAAFgDADQgEADgEAAIgVgDQgCAQAAAXIAAAmIAXgBQAFAAADADQADAEAAAEQAAAFgDADQgDADgFAAIgPABIgOAAIgPACIgRABQgFAAgDgDg");
	this.shape_35.setTransform(127.9,89.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#00E600").s().p("AgHA8QgEgDAAgFIABgEIAAgDIAAgMIgBgLQAAgMgCgRIgCgeIgEAAQgTAAgLgCQgJgDAAgIQAAgEADgEQAEgEAFAAIANACIAOABIAPAAIANgBIATABIATABQAFAAADADQAEAEAAAEQAAAFgEADQgDAEgFAAIgUgBIgVgBIADAiIABAgIABAIIABAIQAAAHgDAFQgDAGgGAAQgDAAgEgDg");
	this.shape_36.setTransform(117.6,89.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#00E600").s().p("AgkAyQgMgNAAgSQAAgaAYgdQAVgYATAAIAIAAIAEABQAEgEAFAAQAJAAACAKIABAQQAAAEgCAEQgDAEgHAAQgHAAgEgIIgCgEIgIgBQgKAAgMARQgTAVAAATQABAJAGAHQAFAGAJAAQAGAAAIgEIAOgIQAGgFADAAQAFAAAEAEQADAEAAAEQAAAFgEADQgXAUgWAAQgSAAgOgOg");
	this.shape_37.setTransform(106.4,89.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#00E600").s().p("AglA/QgJgIAAgbIABgfIACgiIgBgIIgBgJQAAgMAMgBQADAAADACIATgDIAOgBQAVAAANAEQAHADAAAIQAAAFgDADQgDAEgFAAIgEgBQgNgDgNgBIgLABIgPAEIgBAgIAegDIAUgBQAFAAAEACQADAEAAAFQAAAIgKABIgUACIgiADIAAARQAAAQACADQABABAJAAIAOAAIAPgBIAFAAIAFgBQAFAAADADQAEADAAAFQAAAKgKABQgIACgYAAQgbAAgIgHg");
	this.shape_38.setTransform(96,89.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#00E600").s().p("AgjA5QgRgMAAgQQAAgNAMAAQAMAAAAANQAAAFAIAFQAIAGAIAAQADAAABgLIAAgaIABgtIAAgFIgBAAIgJAAIgJgBQgFAAgEgDQgDgDAAgFQAAgMAOAAIAJAAIAHABIAPgBIAPgBQAXAAAAANQAAAFgDADQgEAEgFAAIgFAAIgFgBIgGAAIAAAGQAAA5gJAcQgGATgOAAQgQAAgPgKg");
	this.shape_39.setTransform(84.9,89.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#00E600").s().p("AgoA/QgEgFAAgEIAAhWIAAgMIAAgKQACgIANgCQAGgCAPAAQAOAAAOAKQARAMAAASQAAAJgEAHQgDAFgGAFQAIADAGAIQAHAJAAAJQAAALgMAKQgIAGgJAEQgRAHgeAAQgFAAgEgEgAgVAsQAOgBAPgEQAPgFgBgEQAAgHgJgFQgHgEgGAAIgVgBgAgVgrIAAASIAAARIALABQAYgCAAgRQAAgGgIgFQgGgGgIAAIgNAAg");
	this.shape_40.setTransform(74.1,89.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#00E600").s().p("AgrAzQgSgPAAgYQAAgaARgYQAUgaAcAAQAdAAAPAOQAOANAAAaQAAAbgQAWQgTAbgcAAQgZAAgRgOgAgZgYQgNARAAATQAAAOALAJQAKAHAQABQAQAAAMgSQAMgRAAgTQAAgRgIgHQgIgGgTgBQgQABgNARg");
	this.shape_41.setTransform(61.7,89.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#0000FF").s().p("AgjAyQgNgNAAgSQAAgaAZgdQAUgYAUAAIAGAAIAGABQADgEAGAAQAIAAACAKIABAQQAAAEgCAEQgEAEgFAAQgIAAgDgIIgEgEIgGgBQgKAAgMARQgUAVABATQAAAJAFAHQAHAGAIAAQAGAAAJgEIAMgIQAHgFADAAQAFAAADAEQAEAEAAAEQAAAFgFADQgWAUgWAAQgTAAgMgOg");
	this.shape_42.setTransform(21.8,89.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF0000").s().p("AgsA9QgDgDgBgFIABgSIAAgTIAAhBQAAgFAEgFQAEgFAHAAIAUACQAMABAGAEQAkASAAAbQAAALgHAGQgIAIgPAGQAWAMAMANQACADAAAEQAAAFgDADQgEAEgEAAQgFAAgEgEQgZgXgcgJIABAaQAAAFgEADQgDAEgEAAQgGAAgDgEgAgYACIADAAQAUAAAJgDQAEgCADgEQADgEABgBQAAgKgMgIQgJgIgMgCIgKAAg");
	this.shape_43.setTransform(74,89.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#009900").s().p("AgjAyQgNgNAAgSQAAgaAYgdQAVgYAUAAIAGAAIAFABQAEgEAGAAQAIAAACAKIABAQQAAAEgCAEQgEAEgFAAQgIAAgDgIIgEgEIgGgBQgLAAgLARQgTAVAAATQgBAJAHAHQAFAGAJAAQAGAAAJgEIAMgIQAHgFADAAQAFAAADAEQAEAEAAAEQAAAFgFADQgXAUgVAAQgTAAgMgOg");
	this.shape_44.setTransform(207.7,89.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#009900").s().p("AgkAyQgMgNAAgSQAAgaAZgdQAUgYATAAIAHAAIAGABQADgEAGAAQAIAAACAKIABAQQAAAEgCAEQgEAEgFAAQgIAAgDgIIgEgEIgHgBQgJAAgMARQgUAVABATQAAAJAFAHQAHAGAIAAQAGAAAJgEIAMgIQAHgFADAAQAFAAADAEQAEAEAAAEQAAAFgFADQgXAUgVAAQgTAAgNgOg");
	this.shape_45.setTransform(131.9,89.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#009900").s().p("AgsA9QgDgDAAgFIAAgSIAAgTIAAhBQAAgFADgFQAEgFAIAAIAVACQALABAHAEQAjASAAAbQAAALgHAGQgIAIgPAGQAWAMALANQADADAAAEQAAAFgDADQgEAEgFAAQgEAAgEgEQgZgXgcgJIABAaQAAAFgDADQgEAEgEAAQgFAAgEgEgAgZACIAEAAQAVAAAIgDQADgCAEgEQADgEAAgBQAAgKgLgIQgKgIgMgCIgKAAg");
	this.shape_46.setTransform(110.7,89.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6,p:{x:-38.6}},{t:this.shape_5,p:{x:-26.6}},{t:this.shape_4,p:{x:-14.5}},{t:this.shape_3,p:{x:-3.7}},{t:this.shape_2,p:{x:7.4}},{t:this.shape_1},{t:this.shape,p:{x:28.9}}]},235).to({state:[{t:this.shape_10,p:{x:42.1}},{t:this.shape_9,p:{x:53.3}},{t:this.shape_8},{t:this.shape_7,p:{x:74.9}}]},10).to({state:[{t:this.shape_22,p:{x:57}},{t:this.shape_21,p:{x:67.3}},{t:this.shape_20},{t:this.shape_19,p:{x:88.5}},{t:this.shape_18},{t:this.shape_17,p:{x:110.1}},{t:this.shape_16,p:{x:130}},{t:this.shape_15,p:{x:142.4}},{t:this.shape_14,p:{x:153.2}},{t:this.shape_13,p:{x:164.3}},{t:this.shape_12},{t:this.shape_11,p:{x:185.9}}]},9).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},8).to({state:[]},25).to({state:[{t:this.shape_6,p:{x:-34.6}},{t:this.shape_5,p:{x:-22.6}},{t:this.shape_4,p:{x:-10.5}},{t:this.shape_3,p:{x:0.3}},{t:this.shape_2,p:{x:11.4}},{t:this.shape_42},{t:this.shape,p:{x:32.9}}]},30).to({state:[{t:this.shape_10,p:{x:52.1}},{t:this.shape_9,p:{x:63.3}},{t:this.shape_43},{t:this.shape_7,p:{x:84.9}}]},10).to({state:[{t:this.shape_22,p:{x:90}},{t:this.shape_21,p:{x:100.3}},{t:this.shape_46},{t:this.shape_19,p:{x:121.5}},{t:this.shape_45},{t:this.shape_17,p:{x:143.1}},{t:this.shape_16,p:{x:163}},{t:this.shape_15,p:{x:175.4}},{t:this.shape_14,p:{x:186.2}},{t:this.shape_13,p:{x:197.3}},{t:this.shape_44},{t:this.shape_11,p:{x:218.9}}]},9).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},8).wait(37));

	// Diagrams
	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgIAsQgLgFgKgJQgOgOgCgQQgCgPANgNQAPgPASgDQASgCAPAOQAKAKADALQAFANgJAHQgHAHgMgDIgUgGIgbgJQAAAEADAFQACAGAFAFQAIAIAHACQAIACACADQAHAGgGAGQgEAEgFAAQgDAAgHgDgAgLgUIARAHIAUAGQgCgGgHgGQgFgGgIAAQgFAAgKAFg");
	this.shape_47.setTransform(220.1,172.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAABJQgDgBgDgDQgGgGADgHQAEgHAFgJIANgPIAEgEIAFgEIAFgGQADgEgDgCQgGgFgLAAQgGAAgLADQgWAWgGACQgHACgFgFQgDgDgBgFQAAgFADgDIAEgCIAQgNIAmgoIACgCIAJgIIAFgGIAFgGQADgDAFAAQAFAAADADQAGAGgEAIQgDAFgHAHIgMAMIgMALQAIAAAHADQAHADAGAFQAKAJgBAJQgBAIgIAJIgOAPIgKANQgGAHgEAHIgCACQgDADgEAAIAAAAg");
	this.shape_48.setTransform(213,163.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgqArQgDgDAAgEQAAgFADgDIAGgHIAHgFIAdgeIgKgMQgGgIAGgHQAEgDAEAAQADAAADADIAKALIAFgHIAGgGQADgDAFAAQAEAAAEAEQAJAJgPAOIgFAFIAGAFQAHAHACACQADAGgGAFQgDAEgFgBQgEABgEgEIgCgDIgDgDIgGgFIgcAgIgDADIgEADQgIAJgGAAQgEAAgEgEg");
	this.shape_49.setTransform(208,157.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AARAmIgDgSIgBgRIABgFIAAgIIAAgCIAAgEQAAgHgEAAQgGAAgFAJQgHAJgEAMIgBAIIgBAHIAAAHIgBAHQAAAFgCADQgEAEgFAAQgFAAgDgEQgEgDABgEIgBgIIAAgHIABgWIABgVIAAgHIAAgIQgBgFAEgDQADgDAFAAQALAAAAANIAAABQANgMALAAQAQAAAGANQAEAJAAARIAAAGIAAAEIABAQQACAKAAAHQAAAFgDADQgDADgFAAQgLAAAAgKg");
	this.shape_50.setTransform(252,124);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgJA8QgDgDgBgFIAAgPIAAgQIABgSIAAgRQABgEADgEQADgCAFAAQADAAADACQAEAEAAAEIgBARIgBASIABAQIAAAPQgBAFgDADQgDADgDAAQgFAAgDgDgAgGgpQgEgEAAgEQAAgFAEgFQAEgDADAAQAFAAAEADQAEAFAAAFQAAAEgEAEQgEAEgFgBQgDABgEgEg");
	this.shape_51.setTransform(245.3,122.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAUAlQgIAEgGACQgGACgCAAQgUAAgKgKQgKgLAAgWQAAgRAPgPQAPgOATAAQAHAAALAEQAMAFAAAIQAAADgCACIgBAIIAAAMQAAANACAIIAEAIIADAIQAAAFgDACQgEADgEAAQgEAAgIgIgAgKgPQgJAJAAAJQAAALAEAFQAEAHAIAAQADAAAFgCQAFgCAEgDQgDgTAAgJIABgGIABgIIgDgBIgCAAQgKgBgIAKg");
	this.shape_52.setTransform(238,124.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgGA5QgEgDAAgEIABgJIAAgJIgCgpIgPgBQgLgCAAgJQAAgFADgDQAEgDAFAAIAOABIgBgJIAAgIQAAgFADgDQAEgDAFAAQAKAAAAAUIAAAHIAIAAIANABQAHACAAAIQAAAFgDADQgEADgFAAIgEAAIgEAAIgIAAIACAqIAAAEIAAAFQAAATgMAAQgDAAgDgDg");
	this.shape_53.setTransform(229.3,122.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AghBCQgDgDAAgFIAAgfIAAgeIgBgfIgCgRQAAgHADgFQAEgFAGAAQAFAAADADQADADAAAFIAAAAQAFgDAGgBQAEgCAFAAQATAAAJAQQAHANAAATQAAAQgLAMQgLANgSAAQgGAAgHgCIgBAiQAAAFgDADQgDADgFAAQgFAAgDgDgAgDgnQgGADgFAFIABAhQAHABAGAAQAIABAFgFQAEgFAAgJIgBgQQgDgKgIABQgFAAgDABg");
	this.shape_54.setTransform(220.8,126.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAUAlQgIAEgGACQgGACgCAAQgUAAgKgKQgKgLAAgWQAAgRAPgPQAPgOATAAQAHAAALAEQAMAFAAAIQAAADgCACIgBAIIAAAMQAAANACAIIAEAIIADAIQAAAFgDACQgEADgEAAQgEAAgIgIgAgKgPQgJAJAAAJQAAALAEAFQAEAHAIAAQADAAAFgCQAFgCAEgDQgDgTAAgJIABgGIABgIIgDgBIgCAAQgKgBgIAKg");
	this.shape_55.setTransform(211.5,124.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgZAkQgNgLAAgSQAAgPAMgRQANgUAQAAQAIAAAMAFQAOAFAAAHQAAAEgDAEQgDADgFAAQgDAAgFgDQgFgEgKgBQgFAAgHANQgHAMAAAHQAAAIAGAGQAGAEAIAAQAFABAJgFIAKgEQAEAAADADQAEADAAAEQAAAHgPAHQgMAFgIAAQgQAAgNgKg");
	this.shape_56.setTransform(202.2,124.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgXA/QgEACgEAAQgEAAgEgCQgDgDAAgFIAAgGIABgGIAAhcQAAgGACgFQAEgGAGAAQAJAAAAAKIgBAEIAAADIAAAgQAGgEAGgCIAJgBQATAAAMAOQAMALAAATQAAATgNAOQgOANgRAAQgMAAgKgDgAgIAAIgNAFIAAAjQAMAFAIAAQAIAAAHgHQAHgHAAgLQAAgKgGgIQgGgFgJAAQgDAAgFADg");
	this.shape_57.setTransform(126.8,121.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AAQApQgLAEgJAAQgMAAgIgFQgJgGgCgLQgDgVAAgOQAAgLADgNQABgKAKAAQAFAAADADQADADAAAFIgBALIgBAMIABASIACAPIAEABIAEABQAHAAALgDIAAgPIAAgLQAAgRACgNQABgKAKAAQAFAAADADQAEADAAAFIgCAdIAAAPIAAARIAAAFIABAFQAAAFgEADQgDADgFAAQgHAAgDgGg");
	this.shape_58.setTransform(117.2,124.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgoA/QgEgFAAgEIAAhWIAAgMIAAgKQACgIANgCQAGgCAPAAQAOAAAOAKQARAMAAASQAAAJgEAHQgDAFgGAFQAIADAGAIQAHAJAAAJQAAALgMAKQgIAGgJAEQgRAHgeAAQgFAAgEgEgAgVAsQAOgBAPgEQAPgFgBgEQAAgHgJgFQgHgEgGAAIgVgBgAgVgrIAAASIAAARIALABQAYgCAAgRQAAgGgIgFQgGgGgIAAIgNAAg");
	this.shape_59.setTransform(107.8,121.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAWA+QgFADgGACIgLABQgSAAgNgMQgMgMAAgTQAAgXAMgLQANgOASAAIAMABIAIAEIADgnQABgKAJAAQAFAAADAEQADADAAAEIgCAlIgCAiQAAAdACALIABACQAAAFgEADQgDADgEAAQgHAAgDgGgAgQADQgGAHAAAOQAAAJAHAHQAGAGAJAAQAFAAADgBIAIgGIACgCIAAgfQgCgFgFgBQgEgCgGAAQgLAAgGAFg");
	this.shape_60.setTransform(82.3,121.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgbAjQgOgKAAgTQAAgTALgPQAMgQATAAQAOAAAKAFQANAGAAANQAAAJgKAHQgGADgNAEIgaANQADAEAHACQAFACAFAAQALAAAIgEQAHgEAEAAQAJAAAAAIQAAAKgOAGQgMAFgNAAQgRAAgNgKgAgKgTQgGAFgDALIASgIQAKgFAGgFQgFgDgJAAQgFAAgGAFg");
	this.shape_61.setTransform(72.6,124.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgGA5QgEgDAAgEIABgJIAAgJIgCgpIgPgBQgLgCAAgJQAAgFADgDQAEgDAFAAIAOABIgBgJIAAgIQAAgFADgDQAEgDAFAAQAKAAAAAUIAAAHIAIAAIANABQAHACAAAIQAAAFgDADQgEADgFAAIgEAAIgEAAIgIAAIACAqIAAAEIAAAFQAAATgMAAQgDAAgDgDg");
	this.shape_62.setTransform(64,122.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgZAkQgNgLAAgSQAAgPAMgRQANgUAQAAQAIAAAMAFQAOAFAAAHQAAAEgDAEQgDADgFAAQgDAAgFgDQgFgEgKgBQgFAAgHANQgHAMAAAHQAAAIAGAGQAGAEAIAAQAFABAJgFIAKgEQAEAAADADQAEADAAAEQAAAHgPAHQgMAFgIAAQgQAAgNgKg");
	this.shape_63.setTransform(55.4,124.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgbAjQgOgKAAgTQAAgTALgPQAMgQATAAQAPAAAJAFQAMAGAAANQABAJgLAHQgEADgPAEIgZANQAEAEAGACQAFACAFAAQALAAAIgEQAHgEAEAAQAJAAAAAIQAAAKgOAGQgMAFgNAAQgRAAgNgKgAgKgTQgGAFgDALIATgIQAJgFAHgFQgGgDgJAAQgFAAgGAFg");
	this.shape_64.setTransform(46.4,124.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgGBBQgEgDAAgFIAAhxQAAgFAEgDQADgDADAAQAFAAADADQADADAAAFIAABsQAAAQgLAAQgEAAgCgDg");
	this.shape_65.setTransform(39.3,121.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgbAjQgOgKAAgTQAAgTALgPQAMgQATAAQAPAAAJAFQAMAGAAANQABAJgKAHQgFADgOAEIgaANQADAEAHACQAFACAFAAQALAAAIgEQAHgEAEAAQAJAAAAAIQAAAKgOAGQgLAFgOAAQgRAAgNgKgAgKgTQgFAFgEALIATgIQAJgFAHgFQgGgDgJAAQgGAAgFAFg");
	this.shape_66.setTransform(32.2,124.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgYBAQgDgDAAgFQAAgIASgmIgdgzIgFgGQgBgEAAgDQAAgFADgDQAEgDAEAAQAGAAADAEQAMAPANAgIALgYIAMgWQADgGAHAAQAEAAAEAEQADADAAAEIgBAGIgcA5QgLAVgFAPIgFAPQgDAIgHAAQgEAAgFgDg");
	this.shape_67.setTransform(8.1,126.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgbAjQgOgKAAgTQAAgTALgPQAMgQATAAQAOAAAKAFQANAGAAANQgBAJgJAHQgGADgOAEIgaANQAFAEAFACQAGACAGAAQALAAAHgEQAHgEAEAAQAJAAAAAIQAAAKgOAGQgMAFgMAAQgTAAgMgKgAgKgTQgGAFgDALIASgIQAKgFAGgFQgFgDgJAAQgFAAgGAFg");
	this.shape_68.setTransform(-1.4,124.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AATA8IgEgSIgBgUIAAgGIAAgHIAAgGQgBgDgDAAQgKAAgFAGQgEAEgGANQAAAdgDAHQgEAGgHABQgEAAgEgEQgEgCAAgGIABgDIABgXIABg2IAAgDIAAgMIgBgIIAAgHQAAgFADgEQADgCAFAAQAIAAADAJQACAFAAAJIgBARIAAAQQAGgFAHgEQAFgCAIAAQAOAAAGAIQAFAFABALIABAVIABAQIADAQIABADQAAAEgEAEQgEACgEAAQgJABgCgJg");
	this.shape_69.setTransform(-10.8,121.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgHA8QgEgDAAgFIABgEIAAgDIAAgMIgBgLQAAgMgCgRIgCgeIgEAAQgTAAgLgCQgJgDAAgIQAAgEADgEQAEgEAFAAIANACIAOABIAPAAIANgBIATABIATABQAFAAADADQAEAEAAAEQAAAFgEADQgDAEgFAAIgUgBIgVgBIADAiIABAgIABAIIABAIQAAAHgDAFQgDAGgGAAQgDAAgEgDg");
	this.shape_70.setTransform(-21.6,121.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#0000FF").s().p("AgYBAQgDgDAAgFQAAgIASgmIgdgzIgFgGQgBgEAAgDQAAgFADgDQAEgDAEAAQAGAAADAEQAMAPANAgIALgYIAMgWQADgGAHAAQAEAAAEAEQADADAAAEIgBAGIgcA5QgLAVgFAPIgFAPQgDAIgHAAQgEAAgFgDg");
	this.shape_71.setTransform(8.1,126.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#0000FF").s().p("AgbAjQgOgKAAgTQAAgTALgPQAMgQATAAQAOAAAKAFQANAGAAANQgBAJgJAHQgGADgOAEIgaANQAFAEAFACQAGACAGAAQALAAAHgEQAHgEAEAAQAJAAAAAIQAAAKgOAGQgMAFgMAAQgTAAgMgKgAgKgTQgGAFgDALIASgIQAKgFAGgFQgFgDgJAAQgFAAgGAFg");
	this.shape_72.setTransform(-1.4,124.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#0000FF").s().p("AATA8IgEgSIgBgUIAAgGIAAgHIAAgGQgBgDgDAAQgKAAgFAGQgEAEgGANQAAAdgDAHQgEAGgHABQgEAAgEgEQgEgCAAgGIABgDIABgXIABg2IAAgDIAAgMIgBgIIAAgHQAAgFADgEQADgCAFAAQAIAAADAJQACAFAAAJIgBARIAAAQQAGgFAHgEQAFgCAIAAQAOAAAGAIQAFAFABALIABAVIABAQIADAQIABADQAAAEgEAEQgEACgEAAQgJABgCgJg");
	this.shape_73.setTransform(-10.8,121.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#0000FF").s().p("AgHA8QgEgDAAgFIABgEIAAgDIAAgMIgBgLQAAgMgCgRIgCgeIgEAAQgTAAgLgCQgJgDAAgIQAAgEADgEQAEgEAFAAIANACIAOABIAPAAIANgBIATABIATABQAFAAADADQAEAEAAAEQAAAFgEADQgDAEgFAAIgUgBIgVgBIADAiIABAgIABAIIABAIQAAAHgDAFQgDAGgGAAQgDAAgEgDg");
	this.shape_74.setTransform(-21.6,121.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FF0000").s().p("AAWA+QgFADgGACIgLABQgSAAgNgMQgMgMAAgTQAAgXAMgLQANgOASAAIAMABIAIAEIADgnQABgKAJAAQAFAAADAEQADADAAAEIgCAlIgCAiQAAAdACALIABACQAAAFgEADQgDADgEAAQgHAAgDgGgAgQADQgGAHAAAOQAAAJAHAHQAGAGAJAAQAFAAADgBIAIgGIACgCIAAgfQgCgFgFgBQgEgCgGAAQgLAAgGAFg");
	this.shape_75.setTransform(82.3,121.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FF0000").s().p("AgbAjQgOgKAAgTQAAgTALgPQAMgQATAAQAOAAAKAFQANAGAAANQAAAJgKAHQgGADgNAEIgaANQADAEAHACQAFACAFAAQALAAAIgEQAHgEAEAAQAJAAAAAIQAAAKgOAGQgMAFgNAAQgRAAgNgKgAgKgTQgGAFgDALIASgIQAKgFAGgFQgFgDgJAAQgFAAgGAFg");
	this.shape_76.setTransform(72.6,124.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FF0000").s().p("AgGA5QgEgDAAgEIABgJIAAgJIgCgpIgPgBQgLgCAAgJQAAgFADgDQAEgDAFAAIAOABIgBgJIAAgIQAAgFADgDQAEgDAFAAQAKAAAAAUIAAAHIAIAAIANABQAHACAAAIQAAAFgDADQgEADgFAAIgEAAIgEAAIgIAAIACAqIAAAEIAAAFQAAATgMAAQgDAAgDgDg");
	this.shape_77.setTransform(64,122.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FF0000").s().p("AgZAkQgNgLAAgSQAAgPAMgRQANgUAQAAQAIAAAMAFQAOAFAAAHQAAAEgDAEQgDADgFAAQgDAAgFgDQgFgEgKgBQgFAAgHANQgHAMAAAHQAAAIAGAGQAGAEAIAAQAFABAJgFIAKgEQAEAAADADQAEADAAAEQAAAHgPAHQgMAFgIAAQgQAAgNgKg");
	this.shape_78.setTransform(55.4,124.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FF0000").s().p("AgbAjQgOgKAAgTQAAgTALgPQAMgQATAAQAPAAAJAFQAMAGAAANQABAJgLAHQgEADgPAEIgZANQAEAEAGACQAFACAFAAQALAAAIgEQAHgEAEAAQAJAAAAAIQAAAKgOAGQgMAFgNAAQgRAAgNgKgAgKgTQgGAFgDALIATgIQAJgFAHgFQgGgDgJAAQgFAAgGAFg");
	this.shape_79.setTransform(46.4,124.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FF0000").s().p("AgGBBQgEgDAAgFIAAhxQAAgFAEgDQADgDADAAQAFAAADADQADADAAAFIAABsQAAAQgLAAQgEAAgCgDg");
	this.shape_80.setTransform(39.3,121.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FF0000").s().p("AgbAjQgOgKAAgTQAAgTALgPQAMgQATAAQAPAAAJAFQAMAGAAANQABAJgKAHQgFADgOAEIgaANQADAEAHACQAFACAFAAQALAAAIgEQAHgEAEAAQAJAAAAAIQAAAKgOAGQgLAFgOAAQgRAAgNgKgAgKgTQgFAFgEALIATgIQAJgFAHgFQgGgDgJAAQgGAAgFAFg");
	this.shape_81.setTransform(32.2,124.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#009900").s().p("AgXA/QgEACgEAAQgEAAgEgCQgDgDAAgFIAAgGIABgGIAAhcQAAgGACgFQAEgGAGAAQAJAAAAAKIgBAEIAAADIAAAgQAGgEAGgCIAJgBQATAAAMAOQAMALAAATQAAATgNAOQgOANgRAAQgMAAgKgDgAgIAAIgNAFIAAAjQAMAFAIAAQAIAAAHgHQAHgHAAgLQAAgKgGgIQgGgFgJAAQgDAAgFADg");
	this.shape_82.setTransform(126.8,121.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#009900").s().p("AAQApQgLAEgJAAQgMAAgIgFQgJgGgCgLQgDgVAAgOQAAgLADgNQABgKAKAAQAFAAADADQADADAAAFIgBALIgBAMIABASIACAPIAEABIAEABQAHAAALgDIAAgPIAAgLQAAgRACgNQABgKAKAAQAFAAADADQAEADAAAFIgCAdIAAAPIAAARIAAAFIABAFQAAAFgEADQgDADgFAAQgHAAgDgGg");
	this.shape_83.setTransform(117.2,124.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#009900").s().p("AgoA/QgEgFAAgEIAAhWIAAgMIAAgKQACgIANgCQAGgCAPAAQAOAAAOAKQARAMAAASQAAAJgEAHQgDAFgGAFQAIADAGAIQAHAJAAAJQAAALgMAKQgIAGgJAEQgRAHgeAAQgFAAgEgEgAgVAsQAOgBAPgEQAPgFgBgEQAAgHgJgFQgHgEgGAAIgVgBgAgVgrIAAASIAAARIALABQAYgCAAgRQAAgGgIgFQgGgGgIAAIgNAAg");
	this.shape_84.setTransform(107.8,121.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#00E600").s().p("AARAmIgDgSIgBgRIABgFIAAgIIAAgCIAAgEQAAgHgEAAQgGAAgFAJQgHAJgEAMIgBAIIgBAHIAAAHIgBAHQAAAFgCADQgEAEgFAAQgFAAgDgEQgEgDABgEIgBgIIAAgHIABgWIABgVIAAgHIAAgIQgBgFAEgDQADgDAFAAQALAAAAANIAAABQANgMALAAQAQAAAGANQAEAJAAARIAAAGIAAAEIABAQQACAKAAAHQAAAFgDADQgDADgFAAQgLAAAAgKg");
	this.shape_85.setTransform(252,124);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#00E600").s().p("AgJA8QgDgDgBgFIAAgPIAAgQIABgSIAAgRQABgEADgEQADgCAFAAQADAAADACQAEAEAAAEIgBARIgBASIABAQIAAAPQgBAFgDADQgDADgDAAQgFAAgDgDgAgGgpQgEgEAAgEQAAgFAEgFQAEgDADAAQAFAAAEADQAEAFAAAFQAAAEgEAEQgEAEgFgBQgDABgEgEg");
	this.shape_86.setTransform(245.3,122.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#00E600").s().p("AAUAlQgIAEgGACQgGACgCAAQgUAAgKgKQgKgLAAgWQAAgRAPgPQAPgOATAAQAHAAALAEQAMAFAAAIQAAADgCACIgBAIIAAAMQAAANACAIIAEAIIADAIQAAAFgDACQgEADgEAAQgEAAgIgIgAgKgPQgJAJAAAJQAAALAEAFQAEAHAIAAQADAAAFgCQAFgCAEgDQgDgTAAgJIABgGIABgIIgDgBIgCAAQgKgBgIAKg");
	this.shape_87.setTransform(238,124.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#00E600").s().p("AgGA5QgEgDAAgEIABgJIAAgJIgCgpIgPgBQgLgCAAgJQAAgFADgDQAEgDAFAAIAOABIgBgJIAAgIQAAgFADgDQAEgDAFAAQAKAAAAAUIAAAHIAIAAIANABQAHACAAAIQAAAFgDADQgEADgFAAIgEAAIgEAAIgIAAIACAqIAAAEIAAAFQAAATgMAAQgDAAgDgDg");
	this.shape_88.setTransform(229.3,122.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#00E600").s().p("AghBCQgDgDAAgFIAAgfIAAgeIgBgfIgCgRQAAgHADgFQAEgFAGAAQAFAAADADQADADAAAFIAAAAQAFgDAGgBQAEgCAFAAQATAAAJAQQAHANAAATQAAAQgLAMQgLANgSAAQgGAAgHgCIgBAiQAAAFgDADQgDADgFAAQgFAAgDgDgAgDgnQgGADgFAFIABAhQAHABAGAAQAIABAFgFQAEgFAAgJIgBgQQgDgKgIABQgFAAgDABg");
	this.shape_89.setTransform(220.8,126.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#00E600").s().p("AAUAlQgIAEgGACQgGACgCAAQgUAAgKgKQgKgLAAgWQAAgRAPgPQAPgOATAAQAHAAALAEQAMAFAAAIQAAADgCACIgBAIIAAAMQAAANACAIIAEAIIADAIQAAAFgDACQgEADgEAAQgEAAgIgIgAgKgPQgJAJAAAJQAAALAEAFQAEAHAIAAQADAAAFgCQAFgCAEgDQgDgTAAgJIABgGIABgIIgDgBIgCAAQgKgBgIAKg");
	this.shape_90.setTransform(211.5,124.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#00E600").s().p("AgZAkQgNgLAAgSQAAgPAMgRQANgUAQAAQAIAAAMAFQAOAFAAAHQAAAEgDAEQgDADgFAAQgDAAgFgDQgFgEgKgBQgFAAgHANQgHAMAAAHQAAAIAGAGQAGAEAIAAQAFABAJgFIAKgEQAEAAADADQAEADAAAEQAAAHgPAHQgMAFgIAAQgQAAgNgKg");
	this.shape_91.setTransform(202.2,124.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AggArQgCgDAAgFIAAg0IAAgIIAAgIQAAgFADgDQADgCAFAAQAJAAACAJQANgLASAAQAQAAAAAWIAAAGQgBANgLgBQgKABAAgLIgBgJQgQADgIAQIAAAoQAAAFgDADQgEADgEAAQgFAAgEgDg");
	this.shape_92.setTransform(204.6,124.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgfArQgDgDAAgFIAAg0IAAgIIAAgIQAAgFADgDQADgCAFAAQAJAAACAJQAMgLATAAQAQAAAAAWIAAAGQAAANgMgBQgKABAAgLIAAgJQgRADgIAQIAAAoQAAAFgDADQgEADgEAAQgGAAgCgDg");
	this.shape_93.setTransform(167,124.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgaAiQgMgLgBgTQAAgRAKgOQANgRAUAAQARAAAKANQAJAMAAASQAAARgLAOQgLAPgSAAQgPAAgLgLgAgLgNQgFAIAAAJQAAAKAGAFQAEAEAGAAQAGAAAFgFQAGgFAAgKQACgZgQAAQgIAAgGAJg");
	this.shape_94.setTransform(158.2,124.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgHBBQgDgDAAgFIAAhxQAAgFADgDQAEgDADAAQAEAAAEADQADADAAAFIAABsQAAAQgLAAQgDAAgEgDg");
	this.shape_95.setTransform(151.4,121.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgaAiQgMgLgBgTQAAgRAKgOQANgRAUAAQARAAAKANQAJAMAAASQAAARgLAOQgLAPgSAAQgPAAgLgLgAgLgNQgFAIAAAJQAAAKAGAFQAEAEAGAAQAGAAAFgFQAGgFAAgKQACgZgQAAQgIAAgGAJg");
	this.shape_96.setTransform(144.6,124.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AAWA+QgFADgGACIgLABQgSAAgNgMQgMgMAAgTQAAgXAMgLQANgOASAAIAMABIAIAEIADgnQABgKAJAAQAFAAADAEQADADAAAEIgCAlIgCAiQAAAdACALIABACQAAAFgEADQgDADgEAAQgHAAgDgGgAgQADQgGAHAAAOQAAAJAHAHQAGAGAJAAQAFAAADgBIAIgGIACgCIAAgfQgCgFgFgBQgEgCgGAAQgLAAgGAFg");
	this.shape_97.setTransform(96.9,121.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgbAjQgOgKAAgTQAAgTALgPQAMgQATAAQAPAAAJAFQAMAGAAANQABAJgLAHQgEADgOAEIgaANQADAEAHACQAFACAFAAQALAAAIgEQAHgEAEAAQAJAAAAAIQAAAKgOAGQgMAFgNAAQgRAAgNgKgAgKgTQgGAFgDALIATgIQAJgFAHgFQgGgDgJAAQgFAAgGAFg");
	this.shape_98.setTransform(87.2,124.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgbAjQgOgKAAgTQAAgTALgPQAMgQATAAQAOAAAKAFQAMAGAAANQAAAJgKAHQgFADgOAEIgaANQAEAEAGACQAGACAGAAQAKAAAIgEQAHgEAEAAQAJAAAAAIQAAAKgOAGQgLAFgNAAQgTAAgMgKgAgKgTQgFAFgEALIASgIQAKgFAGgFQgFgDgJAAQgGAAgFAFg");
	this.shape_99.setTransform(61,124.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgHBBQgDgDAAgFIAAhxQAAgFADgDQAEgDADAAQAFAAADADQADADAAAFIAABsQAAAQgLAAQgDAAgEgDg");
	this.shape_100.setTransform(53.9,121.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgbAjQgOgKAAgTQAAgTALgPQAMgQATAAQAPAAAJAFQAMAGAAANQABAJgLAHQgEADgOAEIgaANQAEAEAFACQAGACAFAAQALAAAIgEQAHgEAEAAQAJAAAAAIQAAAKgOAGQgMAFgNAAQgRAAgNgKgAgKgTQgGAFgDALIATgIQAJgFAHgFQgGgDgJAAQgFAAgGAFg");
	this.shape_101.setTransform(46.8,124.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgWArQgNgFAAgJQAAgIAKAAQAEAAAHACQAHADAFAAQAOAAABgHQAAgEgNgGIgTgJQgMgIAAgLQAAgRARgGQALgDATAAQAJAAADACQAGADAAAIQAAAOgIAAQgIAAgCgGIgHgBQgSAAAAAFQAAAEAKAFQARAIAGADQAMAIgBALQABAOgNAHQgMAGgNAAQgLAAgJgDg");
	this.shape_102.setTransform(37.9,124);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FF0000").s().p("AgbAjQgOgKAAgTQAAgTALgPQAMgQATAAQAPAAAJAFQAMAGAAANQABAJgLAHQgEADgOAEIgaANQADAEAHACQAFACAFAAQALAAAIgEQAHgEAEAAQAJAAAAAIQAAAKgOAGQgMAFgNAAQgRAAgNgKgAgKgTQgGAFgDALIATgIQAJgFAHgFQgGgDgJAAQgFAAgGAFg");
	this.shape_103.setTransform(87.2,124.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FF0000").s().p("AgbAjQgOgKAAgTQAAgTALgPQAMgQATAAQAOAAAKAFQAMAGAAANQAAAJgKAHQgFADgOAEIgaANQAEAEAGACQAGACAGAAQAKAAAIgEQAHgEAEAAQAJAAAAAIQAAAKgOAGQgLAFgNAAQgTAAgMgKgAgKgTQgFAFgEALIASgIQAKgFAGgFQgFgDgJAAQgGAAgFAFg");
	this.shape_104.setTransform(61,124.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FF0000").s().p("AgHBBQgDgDAAgFIAAhxQAAgFADgDQAEgDADAAQAFAAADADQADADAAAFIAABsQAAAQgLAAQgDAAgEgDg");
	this.shape_105.setTransform(53.9,121.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FF0000").s().p("AgbAjQgOgKAAgTQAAgTALgPQAMgQATAAQAPAAAJAFQAMAGAAANQABAJgLAHQgEADgOAEIgaANQAEAEAFACQAGACAFAAQALAAAIgEQAHgEAEAAQAJAAAAAIQAAAKgOAGQgMAFgNAAQgRAAgNgKgAgKgTQgGAFgDALIATgIQAJgFAHgFQgGgDgJAAQgFAAgGAFg");
	this.shape_106.setTransform(46.8,124.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FF0000").s().p("AgWArQgNgFAAgJQAAgIAKAAQAEAAAHACQAHADAFAAQAOAAABgHQAAgEgNgGIgTgJQgMgIAAgLQAAgRARgGQALgDATAAQAJAAADACQAGADAAAIQAAAOgIAAQgIAAgCgGIgHgBQgSAAAAAFQAAAEAKAFQARAIAGADQAMAIgBALQABAOgNAHQgMAGgNAAQgLAAgJgDg");
	this.shape_107.setTransform(37.9,124);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#099D0F").s().p("AgfArQgDgDAAgFIAAg0IAAgIIAAgIQAAgFADgDQADgCAFAAQAJAAACAJQAMgLATAAQAQAAAAAWIAAAGQAAANgMgBQgKABAAgLIAAgJQgRADgIAQIAAAoQAAAFgDADQgEADgEAAQgGAAgCgDg");
	this.shape_108.setTransform(167,124.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#099D0F").s().p("AgaAiQgMgLgBgTQAAgRAKgOQANgRAUAAQARAAAKANQAJAMAAASQAAARgLAOQgLAPgSAAQgPAAgLgLgAgLgNQgFAIAAAJQAAAKAGAFQAEAEAGAAQAGAAAFgFQAGgFAAgKQACgZgQAAQgIAAgGAJg");
	this.shape_109.setTransform(158.2,124.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#099D0F").s().p("AgHBBQgDgDAAgFIAAhxQAAgFADgDQAEgDADAAQAEAAAEADQADADAAAFIAABsQAAAQgLAAQgDAAgEgDg");
	this.shape_110.setTransform(151.4,121.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#099D0F").s().p("AgaAiQgMgLgBgTQAAgRAKgOQANgRAUAAQARAAAKANQAJAMAAASQAAARgLAOQgLAPgSAAQgPAAgLgLgAgLgNQgFAIAAAJQAAAKAGAFQAEAEAGAAQAGAAAFgFQAGgFAAgKQACgZgQAAQgIAAgGAJg");
	this.shape_111.setTransform(144.6,124.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#099D0F").s().p("AgZAkQgNgLAAgSQAAgPAMgRQANgUAQAAQAIAAAMAFQAOAFAAAHQAAAEgDAEQgDADgFAAQgDAAgFgDQgFgEgKgBQgFAAgHANQgHAMAAAHQAAAIAGAGQAGAEAIAAQAFABAJgFIAKgEQAEAAADADQAEADAAAEQAAAHgPAHQgMAFgIAAQgQAAgNgKg");
	this.shape_112.setTransform(135.7,124.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#00E600").s().p("AAWA+QgFADgGACIgLABQgSAAgNgMQgMgMAAgTQAAgXAMgLQANgOASAAIAMABIAIAEIADgnQABgKAJAAQAFAAADAEQADADAAAEIgCAlIgCAiQAAAdACALIABACQAAAFgEADQgDADgEAAQgHAAgDgGgAgQADQgGAHAAAOQAAAJAHAHQAGAGAJAAQAFAAADgBIAIgGIACgCIAAgfQgCgFgFgBQgEgCgGAAQgLAAgGAFg");
	this.shape_113.setTransform(222.8,121.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#00E600").s().p("AgbAjQgOgKAAgTQAAgTALgPQAMgQATAAQAPAAAJAFQAMAGAAANQABAJgKAHQgFADgOAEIgaANQADAEAHACQAFACAFAAQALAAAIgEQAHgEAEAAQAJAAAAAIQAAAKgOAGQgLAFgOAAQgRAAgNgKgAgKgTQgFAFgEALIATgIQAJgFAHgFQgGgDgJAAQgGAAgFAFg");
	this.shape_114.setTransform(213.1,124.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#00E600").s().p("AggArQgCgDAAgFIAAg0IAAgIIAAgIQAAgFADgDQADgCAFAAQAJAAACAJQANgLASAAQAQAAAAAWIAAAGQgBANgLgBQgKABAAgLIgBgJQgQADgIAQIAAAoQAAAFgDADQgEADgEAAQgFAAgEgDg");
	this.shape_115.setTransform(204.6,124.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_70,p:{x:-21.6}},{t:this.shape_69,p:{x:-10.8}},{t:this.shape_68,p:{x:-1.4}},{t:this.shape_67,p:{x:8.1}},{t:this.shape_66,p:{x:32.2}},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63,p:{x:55.4}},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60,p:{x:82.3}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56,p:{x:202.2}},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53,p:{x:229.3}},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47}]},198).to({state:[{t:this.shape_74,p:{x:-21.6}},{t:this.shape_73,p:{x:-10.8}},{t:this.shape_72,p:{x:-1.4}},{t:this.shape_71,p:{x:8.1}},{t:this.shape_66,p:{x:32.2}},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63,p:{x:55.4}},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60,p:{x:82.3}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56,p:{x:202.2}},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53,p:{x:229.3}},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47}]},37).to({state:[{t:this.shape_74,p:{x:-21.6}},{t:this.shape_73,p:{x:-10.8}},{t:this.shape_72,p:{x:-1.4}},{t:this.shape_71,p:{x:8.1}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78,p:{x:55.4}},{t:this.shape_77,p:{x:64}},{t:this.shape_76},{t:this.shape_75,p:{x:82.3}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56,p:{x:202.2}},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53,p:{x:229.3}},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47}]},10).to({state:[{t:this.shape_74,p:{x:-21.6}},{t:this.shape_73,p:{x:-10.8}},{t:this.shape_72,p:{x:-1.4}},{t:this.shape_71,p:{x:8.1}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78,p:{x:55.4}},{t:this.shape_77,p:{x:64}},{t:this.shape_76},{t:this.shape_75,p:{x:82.3}},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_56,p:{x:202.2}},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53,p:{x:229.3}},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47}]},9).to({state:[{t:this.shape_74,p:{x:-21.6}},{t:this.shape_73,p:{x:-10.8}},{t:this.shape_72,p:{x:-1.4}},{t:this.shape_71,p:{x:8.1}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78,p:{x:55.4}},{t:this.shape_77,p:{x:64}},{t:this.shape_76},{t:this.shape_75,p:{x:82.3}},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47}]},8).to({state:[{t:this.shape_70,p:{x:-15.3}},{t:this.shape_69,p:{x:-4.5}},{t:this.shape_68,p:{x:4.9}},{t:this.shape_67,p:{x:14.4}},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_63,p:{x:70}},{t:this.shape_53,p:{x:78.6}},{t:this.shape_98},{t:this.shape_97},{t:this.shape_56,p:{x:135.7}},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_66,p:{x:213.1}},{t:this.shape_60,p:{x:222.8}}]},25).to({state:[{t:this.shape_74,p:{x:-15.3}},{t:this.shape_73,p:{x:-4.5}},{t:this.shape_72,p:{x:4.9}},{t:this.shape_71,p:{x:14.4}},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_63,p:{x:70}},{t:this.shape_53,p:{x:78.6}},{t:this.shape_98},{t:this.shape_97},{t:this.shape_56,p:{x:135.7}},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_66,p:{x:213.1}},{t:this.shape_60,p:{x:222.8}}]},30).to({state:[{t:this.shape_74,p:{x:-15.3}},{t:this.shape_73,p:{x:-4.5}},{t:this.shape_72,p:{x:4.9}},{t:this.shape_71,p:{x:14.4}},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_78,p:{x:70}},{t:this.shape_77,p:{x:78.6}},{t:this.shape_103},{t:this.shape_75,p:{x:96.9}},{t:this.shape_56,p:{x:135.7}},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_66,p:{x:213.1}},{t:this.shape_60,p:{x:222.8}}]},10).to({state:[{t:this.shape_74,p:{x:-15.3}},{t:this.shape_73,p:{x:-4.5}},{t:this.shape_72,p:{x:4.9}},{t:this.shape_71,p:{x:14.4}},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_78,p:{x:70}},{t:this.shape_77,p:{x:78.6}},{t:this.shape_103},{t:this.shape_75,p:{x:96.9}},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_92},{t:this.shape_66,p:{x:213.1}},{t:this.shape_60,p:{x:222.8}}]},9).to({state:[{t:this.shape_74,p:{x:-15.3}},{t:this.shape_73,p:{x:-4.5}},{t:this.shape_72,p:{x:4.9}},{t:this.shape_71,p:{x:14.4}},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_78,p:{x:70}},{t:this.shape_77,p:{x:78.6}},{t:this.shape_103},{t:this.shape_75,p:{x:96.9}},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113}]},8).wait(37));

	// BacgroundkDiagrams
	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(3,1,1).p("AjMjMIGZGZ");
	this.shape_116.setTransform(191.9,160.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(1,1,1).p("AABACIgCgC");
	this.shape_117.setTransform(171.1,140.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(0.3,1,1).p("AgBAAIACAC");
	this.shape_118.setTransform(169.3,140.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(3,1,1).p("AwNAKIXBAAIASAAIQLAAAwNAKIAAl6AwNFxIAAlnAkgAIIAAlmACYAAIFClBA3QAKIHDAA");
	this.shape_119.setTransform(125.9,139.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgIAsQgLgFgKgJQgOgOgCgQQgCgPANgNQAPgPASgDQASgCAPAOQAKAKADALQAFANgJAHQgHAHgMgDIgUgGIgbgJQAAAEADAFQACAGAFAFQAIAIAHACQAIACACADQAHAGgGAGQgEAEgFAAQgDAAgHgDgAgLgUIARAHIAUAGQgCgGgHgGQgFgGgIAAQgFAAgKAFg");
	this.shape_120.setTransform(247.1,172.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AAABJQgDgBgDgDQgGgGADgHQAEgHAFgJIANgPIAEgEIAFgEIAFgGQADgEgDgCQgGgFgLAAQgGAAgLADQgWAWgGACQgHACgFgFQgDgDgBgFQAAgFADgDIAEgCIAQgNIAmgoIACgCIAJgIIAFgGIAFgGQADgDAFAAQAFAAADADQAGAGgEAIQgDAFgHAHIgMAMIgMALQAIAAAHADQAHADAGAFQAKAJgBAJQgBAIgIAJIgOAPIgKANQgGAHgEAHIgCACQgDADgEAAIAAAAg");
	this.shape_121.setTransform(240,163.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgqArQgDgDAAgEQAAgFADgDIAGgHIAHgFIAdgeIgKgMQgGgIAGgHQAEgDAEAAQADAAADADIAKALIAFgHIAGgGQADgDAFAAQAEAAAEAEQAJAJgPAOIgFAFIAGAFQAHAHACACQADAGgGAFQgDAEgFgBQgEABgEgEIgCgDIgDgDIgGgFIgcAgIgDADIgEADQgIAJgGAAQgEAAgEgEg");
	this.shape_122.setTransform(235,157.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(3,1,1).p("AKNgOIGbGZAF/gOIFBlBAwngOIAAl8AipgOQAAi0AAi0");
	this.shape_123.setTransform(133,141.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(3,1,1).p("AHGAAID8AAIASAAIL9AAA3QAAIHwAAIN+AAIIWAA");
	this.shape_124.setTransform(125.9,140.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_119},{t:this.shape_118,p:{x:169.3}},{t:this.shape_117,p:{x:171.1}},{t:this.shape_116}]},198).to({state:[{t:this.shape_117,p:{x:198.1}},{t:this.shape_124},{t:this.shape_118,p:{x:196.3}},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120}]},89).wait(94));

	// Layer 2
	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgGAHQgFgEAAgDQAAgCAFgDQADgDADgBQAFAAADADQAEAEAAACQgBADgDAEQgEACgEAAQgDAAgDgCg");
	this.shape_125.setTransform(282.6,45.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FF0000").s().p("AgkAuQAAgEACgCQADgDAEAAIAJACIALABQAJAAAFgHQAFgGABgPQgEAEgEACQgFACgDAAQgPAAgJgJQgJgKAAgNQAAgUAMgMQAMgNAUAAQAHAAAFACQAFACADADQAJABAAAKIgBAOQgDARgBARQgBAYgHAKQgKAPgWAAQgcAAAAgMgAgKggQgGAHAAAMQAAAJADAEQADADAHAAQAEAAAGgFQAGgHABgGIADgWIgFgCIgFgBQgKAAgHAIg");
	this.shape_126.setTransform(275.4,44.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FF0000").s().p("AAOAiIgCgQIgBgPIABgEIAAgHIAAgCIAAgEQAAgGgDAAQgGAAgEAIQgGAIgEALIAAAGIgBAGIAAAHIgBAHQAAADgCAEQgDACgFAAQgEAAgDgCQgDgEAAgDIAAgHIgBgHIABgTIABgSIAAgHIAAgGQAAgFADgCQADgDAEAAQAKAAAAAMIAAABQALgLAKAAQAOAAAFALQAEAIAAAQIAAAEIgBAEQAAAFACAJIACAPQAAAEgDADQgDACgFAAQgJAAgBgIg");
	this.shape_127.setTransform(267.6,42.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FF0000").s().p("AgIA1QgDgDAAgEIAAgOIAAgNIABgQIAAgPQAAgEADgDQADgDAEAAQADAAADADQADADAAAEIgBAPIgBAQIAAANIABAOQAAAEgDADQgDACgCAAQgFAAgDgCgAgFgkQgEgDAAgFQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_128.setTransform(261.7,40.4);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FF0000").s().p("AgkAuQAAgEACgCQADgDAEAAIAJACIALABQAJAAAFgHQAFgGABgPQgEAEgEACQgFACgDAAQgPAAgJgJQgJgKAAgNQAAgUAMgMQAMgNAUAAQAHAAAFACQAFACADADQAJABAAAKIgBAOQgDARgBARQgBAYgHAKQgKAPgWAAQgcAAAAgMgAgKggQgGAHAAAMQAAAJADAEQADADAHAAQAEAAAGgFQAGgHABgGIADgWIgFgCIgFgBQgKAAgHAIg");
	this.shape_129.setTransform(255.4,44.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FF0000").s().p("AAOAiIgCgQIgBgPIABgEIAAgHIAAgCIAAgEQAAgGgDAAQgGAAgEAIQgGAIgEALIAAAGIgBAGIAAAHIgBAHQAAADgCAEQgDACgFAAQgEAAgDgCQgDgEAAgDIAAgHIgBgHIABgTIABgSIAAgHIAAgGQAAgFADgCQADgDAEAAQAKAAAAAMIAAABQALgLAKAAQAOAAAFALQAEAIAAAQIAAAEIgBAEQAAAFACAJIACAPQAAAEgDADQgDACgFAAQgJAAgBgIg");
	this.shape_130.setTransform(247.7,42.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FF0000").s().p("AARAhIgMAFIgGACQgSAAgJgKQgJgJAAgTQAAgQANgMQANgNARAAQAHAAAJAEQALAFAAAGQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABIgBAHIAAAKQAAAMACAGIADAIIADAHQAAAEgDACQgDADgEAAQgDAAgIgHgAgJgNQgHAHAAAJQAAAJADAFQAEAFAHAAQACAAAEgBQAEgCAEgDIgCgYIAAgFIABgHIgCgBIgCAAQgIAAgIAIg");
	this.shape_131.setTransform(239.5,42.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FF0000").s().p("AARA1QgCgGgCgLIgBgRIAAgFIAAgGIAAgGQAAgCgDAAQgJAAgEAGQgEADgFALQAAAbgDAFQgDAGgGAAQgEAAgDgDQgEgDAAgEIABgEIABgTIAAgwIAAgCIABgLIgBgHIgBgHQAAgEADgCQADgEAFAAQAHABACAHQACAFAAAJIgBAPIAAAOQAFgFAGgDQAFgDAHABQAMgBAGAIQAEAFABAIIAAATIACAOIACAPIABACQAAAEgDADQgEACgEABQgHgBgCgHg");
	this.shape_132.setTransform(231.1,40.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FF0000").s().p("AgWAgQgLgKAAgQQAAgMAKgQQAMgSANAAQAIAAAKAEQANAGAAAGQAAAEgDADQgCADgFAAQgDAAgEgEQgFgDgJAAQgDAAgHALQgGAKAAAGQAAAIAFAEQAGAEAGAAQAFAAAHgDIAJgEQAEAAADADQADADAAADQAAAGgMAGQgMAFgHAAQgOAAgLgJg");
	this.shape_133.setTransform(222.7,42.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgcAlQgCgCAAgFIAAgtIAAgHIABgHQgBgEADgCQADgDAEgBQAIAAACAJQALgKAPAAQAPABAAATIAAAEQgBAMgJAAQgJAAAAgKIgBgHQgPADgGAOIAAAiQAAAFgDACQgDADgEAAQgFAAgDgDg");
	this.shape_134.setTransform(209,42.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgWAeQgLgKgBgRQAAgOAJgNQALgPASAAQAPAAAJAMQAHALAAAPQAAAPgJAMQgKAOgQAAQgNAAgJgKgAgJgLQgEAHAAAHQAAAJAFAFQAEADAEAAQAFAAAFgEQAFgFABgJQABgVgOAAQgHAAgFAIg");
	this.shape_135.setTransform(201.2,42.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgKAPQgCgCAAgEIAEgJIAHgMQABgEAEAAQAEAAADACQACADAAADIgEAJIgGAMQgDAEgDAAQgEAAgDgCg");
	this.shape_136.setTransform(187.3,46.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FF0000").s().p("AgkAuQAAgEACgCQADgDAEAAIAJACIALABQAJAAAFgHQAFgGABgPQgEAEgEACQgFACgDAAQgPAAgJgJQgJgKAAgNQAAgUAMgMQAMgNAUAAQAHAAAFACQAFACADADQAJABAAAKIgBAOQgDARgBARQgBAYgHAKQgKAPgWAAQgcAAAAgMgAgKggQgGAHAAAMQAAAJADAEQADADAHAAQAEAAAGgFQAGgHABgGIADgWIgFgCIgFgBQgKAAgHAIg");
	this.shape_137.setTransform(180.4,44.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FF0000").s().p("AAOAiIgCgQIgBgPIABgEIAAgHIAAgCIAAgEQAAgGgDAAQgGAAgEAIQgGAIgEALIAAAGIgBAGIAAAHIgBAHQAAADgCAEQgDACgFAAQgEAAgDgCQgDgEAAgDIAAgHIgBgHIABgTIABgSIAAgHIAAgGQAAgFADgCQADgDAEAAQAKAAAAAMIAAABQALgLAKAAQAOAAAFALQAEAIAAAQIAAAEIgBAEQAAAFACAJIACAPQAAAEgDADQgDACgFAAQgJAAgBgIg");
	this.shape_138.setTransform(172.6,42.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FF0000").s().p("AgIA1QgDgDAAgEIAAgOIAAgNIABgQIAAgPQAAgEADgDQADgDAEAAQADAAADADQADADAAAEIgBAPIgBAQIAAANIABAOQAAAEgDADQgDACgCAAQgFAAgDgCgAgFgkQgEgDAAgFQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_139.setTransform(166.7,40.4);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FF0000").s().p("AgFAyQgEgCAAgEIABgIIAAgHIgBglIgOgBQgJgBAAgJQAAgDACgEQADgCAFAAIAMAAIAAgHIgBgHQAAgEADgDQADgDAFAAQAIAAAAATIAAAFIAIAAIALABQAGACAAAHQAAAEgDADQgDACgEAAIgEAAIgDAAIgHABIABAlIAAADIAAAFQAAAQgKAAQgCAAgDgDg");
	this.shape_140.setTransform(160.9,40.9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FF0000").s().p("AgWAgQgLgKAAgQQAAgMAKgQQAMgSANAAQAIAAAKAEQANAGAAAGQAAAEgDADQgCADgFAAQgDAAgEgEQgFgDgJAAQgDAAgHALQgGAKAAAGQAAAIAFAEQAGAEAGAAQAFAAAHgDIAJgEQAEAAADADQADADAAADQAAAGgMAGQgMAFgHAAQgOAAgLgJg");
	this.shape_141.setTransform(153.4,42.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FF0000").s().p("AAOAkQgJADgIAAQgKAAgIgEQgIgFgCgKQgCgSAAgNQAAgJACgMQABgIAJAAQAEAAADACQADADAAAEIgBAKIgBAKIABAQIACANIADABIAEABQAGAAAJgDIAAgMIAAgLQAAgPACgLQABgIAJAAQAEAAADACQADADAAAEIgBAaIAAANIAAAPIAAAEIABAFQAAAEgEACQgDADgEAAQgGAAgDgFg");
	this.shape_142.setTransform(145.7,42.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FF0000").s().p("AgbAlQgDgCAAgFIAAgtIAAgHIAAgHQAAgEADgCQADgDAEgBQAIAAABAJQALgKARAAQAOABAAATIAAAEQgBAMgKAAQgJAAAAgKIAAgHQgPADgHAOIAAAiQAAAFgDACQgCADgFAAQgEAAgCgDg");
	this.shape_143.setTransform(138.4,42.2);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FF0000").s().p("AgFAyQgEgCAAgEIABgIIAAgHIgBglIgOgBQgJgBAAgJQAAgDACgEQADgCAFAAIAMAAIAAgHIgBgHQAAgEADgDQADgDAFAAQAIAAAAATIAAAFIAIAAIALABQAGACAAAHQAAAEgDADQgDACgEAAIgEAAIgDAAIgHABIABAlIAAADIAAAFQAAAQgKAAQgCAAgDgDg");
	this.shape_144.setTransform(131.2,40.9);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FF0000").s().p("AgTAmQgLgEAAgIQAAgIAIAAIAKACIAKACQANAAAAgGQAAgDgLgFQgNgGgEgCQgKgHAAgKQAAgPAPgFQAKgDAQAAQAIAAADACQAFADAAAGQAAAOgHAAQgHAAgCgGIgGgBQgQAAAAAFQAAADAJAFQAPAGAFADQAKAHAAAJQAAANgLAGQgKAGgMAAQgJAAgIgDg");
	this.shape_145.setTransform(123.9,42.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FF0000").s().p("AAOAiIgCgQIgBgPIABgEIAAgHIAAgCIAAgEQAAgGgDAAQgGAAgEAIQgGAIgEALIAAAGIgBAGIAAAHIgBAHQAAADgCAEQgDACgFAAQgEAAgDgCQgDgEAAgDIAAgHIgBgHIABgTIABgSIAAgHIAAgGQAAgFADgCQADgDAEAAQAKAAAAAMIAAABQALgLAKAAQAOAAAFALQAEAIAAAQIAAAEIgBAEQAAAFACAJIACAPQAAAEgDADQgDACgFAAQgJAAgBgIg");
	this.shape_146.setTransform(116.5,42.1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FF0000").s().p("AgWAeQgLgKgBgRQAAgOAJgNQALgPASAAQAPAAAJAMQAHALAAAPQAAAPgJAMQgKAOgQAAQgNAAgJgKgAgJgLQgEAHAAAHQAAAJAFAFQAEADAEAAQAFAAAFgEQAFgFABgJQABgVgOAAQgHAAgFAIg");
	this.shape_147.setTransform(108.4,42.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FF0000").s().p("AgWAgQgLgKAAgQQAAgMAKgQQAMgSANAAQAIAAAKAEQANAGAAAGQAAAEgDADQgCADgFAAQgDAAgEgEQgFgDgJAAQgDAAgHALQgGAKAAAGQAAAIAFAEQAGAEAGAAQAFAAAHgDIAJgEQAEAAADADQADADAAADQAAAGgMAGQgMAFgHAAQgOAAgLgJg");
	this.shape_148.setTransform(100.6,42.1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgKAPQgCgCAAgEIAEgJIAHgMQABgEAEAAQAEAAADACQACADAAADIgEAJIgGAMQgDAEgDAAQgEAAgDgCg");
	this.shape_149.setTransform(86.8,46.5);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FF0000").s().p("AgkAuQAAgEACgCQADgDAEAAIAJACIALABQAJAAAFgHQAFgGABgPQgEAEgEACQgFACgDAAQgPAAgJgJQgJgKAAgNQAAgUAMgMQAMgNAUAAQAHAAAFACQAFACADADQAJABAAAKIgBAOQgDARgBARQgBAYgHAKQgKAPgWAAQgcAAAAgMgAgKggQgGAHAAAMQAAAJADAEQADADAHAAQAEAAAGgFQAGgHABgGIADgWIgFgCIgFgBQgKAAgHAIg");
	this.shape_150.setTransform(79.9,44.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FF0000").s().p("AAOAiIgCgQIgBgPIABgEIAAgHIAAgCIAAgEQAAgGgDAAQgGAAgEAIQgGAIgEALIAAAGIgBAGIAAAHIgBAHQAAADgCAEQgDACgFAAQgEAAgDgCQgDgEAAgDIAAgHIgBgHIABgTIABgSIAAgHIAAgGQAAgFADgCQADgDAEAAQAKAAAAAMIAAABQALgLAKAAQAOAAAFALQAEAIAAAQIAAAEIgBAEQAAAFACAJIACAPQAAAEgDADQgDACgFAAQgJAAgBgIg");
	this.shape_151.setTransform(72.1,42.1);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FF0000").s().p("AgIA1QgDgDAAgEIAAgOIAAgNIABgQIAAgPQAAgEADgDQADgDAEAAQADAAADADQADADAAAEIgBAPIgBAQIAAANIABAOQAAAEgDADQgDACgCAAQgFAAgDgCgAgFgkQgEgDAAgFQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_152.setTransform(66.2,40.4);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FF0000").s().p("AAUA2QgFADgGACIgJABQgQAAgLgLQgLgLAAgQQAAgUALgKQAMgMAPAAQAGAAAEABQAFABADACQABgYABgKQABgJAIAAQAFAAACADQADADAAAEIgCAgIgCAeQABAaABAJIAAACQAAAEgCACQgDAEgEAAQgGAAgCgGgAgOACQgFAHAAANQAAAHAGAGQAFAGAIAAQAEAAADgCIAHgFIACgBIAAgbQgDgFgDgBQgEgBgGAAQgIAAgGADg");
	this.shape_153.setTransform(59.4,40.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FF0000").s().p("AgGA5QgDgDABgEIAAhjQAAgFACgCQAEgDACAAQAEAAADADQADACAAAFIAABfQAAAOgKAAQgDAAgDgDg");
	this.shape_154.setTransform(53,40.1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FF0000").s().p("AgIA1QgDgDAAgEIAAgOIAAgNIABgQIAAgPQAAgEADgDQADgDAEAAQADAAADADQADADAAAEIgBAPIgBAQIAAANIABAOQAAAEgDADQgDACgCAAQgFAAgDgCgAgFgkQgEgDAAgFQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_155.setTransform(49.1,40.4);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FF0000").s().p("AAOAkQgJADgIAAQgLAAgGgEQgJgFgBgKQgDgSAAgNQAAgJACgMQABgIAJAAQAEAAADACQADADAAAEIgBAKIgBAKIABAQIACANIADABIAEABQAGAAAKgDIAAgMIAAgLQAAgPABgLQABgIAJAAQAEAAADACQADADAAAEIgBAaIAAANIAAAPIAAAEIABAFQAAAEgDACQgDADgFAAQgGAAgDgFg");
	this.shape_156.setTransform(42.9,42.2);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FF0000").s().p("AgUA3QgDADgEAAQgEAAgDgDQgDgCAAgEIABgGIAAgFIAAhRQAAgFACgEQADgGAFAAQAIAAAAAJIAAADIAAADIAAAcIAKgEIAIgCQARAAALANQAKAJAAARQAAARgMAMQgMAMgPAAQgKAAgJgEgAgHAAIgLAFIAAAfQAKAEAHAAQAHAAAGgGQAGgHAAgJQAAgKgFgGQgFgEgIAAQgCAAgFACg");
	this.shape_157.setTransform(34.6,40.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgNA9QgDgCAAgEIAAgCQACgLAAgJIAAgiIgFAAIgEAAQgEAAgDgCQgDgDAAgEQAAgHAHgCIANgBIABgJQACgQAHgIQAGgKASAAQANAAAAAKQAAAJgMAAQgJAAgEAGQgDAFgBAKIAAACIAOgBQANAAAAAKQAAAJgOAAIgOAAIAAASIAAAUQAAANgCAIQgCAIgGAAQgEAAgDgDg");
	this.shape_158.setTransform(19.8,40.5);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgWAeQgLgKgBgRQAAgOAJgNQALgPASAAQAPAAAJAMQAHALAAAPQAAAPgJAMQgKAOgQAAQgNAAgJgKgAgJgLQgEAHAAAHQAAAJAFAFQAEADAEAAQAFAAAFgEQAFgFABgJQABgVgOAAQgHAAgFAIg");
	this.shape_159.setTransform(12,42.2);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgYAfQgMgJAAgRQAAgRAJgNQAMgOAQABQAMAAAJADQALAGAAALQAAAIgJAHQgEADgNADIgWALQADAEAGACQAFACAEAAQAJAAAIgFQAGgDAEAAQAHAAAAAIQAAAHgNAGQgJAEgMABQgQAAgLgJgAgJgRQgEAGgDAJIAQgIQAIgEAFgEQgEgDgIAAQgFAAgFAEg");
	this.shape_160.setTransform(-2.6,42.2);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgTAmQgLgEAAgIQAAgIAIAAIAKACIAKACQANAAAAgGQAAgDgLgFQgNgGgEgCQgKgHAAgKQAAgPAPgFQAKgDAQAAQAIAAADACQAFADAAAGQAAAOgHAAQgHAAgCgGIgGgBQgQAAAAAFQAAADAJAFQAPAGAFADQAKAHAAAJQAAANgLAGQgKAGgMAAQgJAAgIgDg");
	this.shape_161.setTransform(-10.5,42.1);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AAOAiIgCgQIgBgPIABgEIAAgHIAAgCIAAgEQAAgGgDAAQgGAAgEAIQgGAIgEALIAAAGIgBAGIAAAHIgBAHQAAADgCAEQgDACgFAAQgEAAgDgCQgDgEAAgDIAAgHIgBgHIABgTIABgSIAAgHIAAgGQAAgFADgCQADgDAEAAQAKAAAAAMIAAABQALgLAKAAQAOAAAFALQAEAIAAAQIAAAEIgBAEQAAAFACAJIACAPQAAAEgDADQgDACgFAAQgJAAgBgIg");
	this.shape_162.setTransform(-17.9,42.1);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AgYAfQgMgJAAgRQAAgRAKgNQAKgOARABQAMAAAJADQALAGAAALQAAAIgJAHQgEADgMADIgXALQAEAEAEACQAFACAFAAQAJAAAHgFQAHgDADAAQAIAAAAAIQAAAHgMAGQgKAEgMABQgQAAgLgJgAgIgRQgGAGgCAJIAQgIQAIgEAFgEQgEgDgIAAQgFAAgEAEg");
	this.shape_163.setTransform(-26.2,42.2);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgTAmQgLgEAAgIQAAgIAIAAIAKACIAKACQANAAAAgGQAAgDgLgFQgNgGgEgCQgKgHAAgKQAAgPAPgFQAKgDAQAAQAIAAADACQAFADAAAGQAAAOgHAAQgHAAgCgGIgGgBQgQAAAAAFQAAADAJAFQAPAGAFADQAKAHAAAJQAAANgLAGQgKAGgMAAQgJAAgIgDg");
	this.shape_164.setTransform(-34,42.1);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AgYAfQgMgJAAgRQAAgRAJgNQAMgOAQABQANAAAIADQALAGAAALQAAAIgJAHQgEADgNADIgWALQADAEAFACQAGACAEAAQAKAAAGgFQAGgDAFAAQAHAAAAAIQAAAHgNAGQgKAEgLABQgPAAgMgJgAgJgRQgFAGgDAJIARgIQAIgEAGgEQgFgDgIAAQgFAAgFAEg");
	this.shape_165.setTransform(-48.4,42.2);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AARA1QgCgGgCgLIgBgRIAAgFIAAgGIAAgGQAAgCgDAAQgJAAgEAGQgEADgFALQAAAbgDAFQgDAGgGAAQgEAAgDgDQgEgDAAgEIABgEIABgTIAAgwIAAgCIABgLIgBgHIgBgHQAAgEADgCQADgEAFAAQAHABACAHQACAFAAAJIgBAPIAAAOQAFgFAGgDQAFgDAHABQAMgBAGAIQAEAFABAIIAAATIACAOIACAPIABACQAAAEgDADQgEACgEABQgHgBgCgHg");
	this.shape_166.setTransform(-56.7,40.2);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgFAyQgEgCAAgEIABgIIAAgHIgBglIgOgBQgJgBAAgJQAAgDACgEQADgCAFAAIAMAAIAAgHIgBgHQAAgEADgDQADgDAFAAQAIAAAAATIAAAFIAIAAIALABQAGACAAAHQAAAEgDADQgDACgEAAIgEAAIgDAAIgHABIABAlIAAADIAAAFQAAAQgKAAQgCAAgDgDg");
	this.shape_167.setTransform(-64.6,40.9);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AAOAiIgCgQIgBgPIABgEIAAgHIAAgCIAAgEQAAgGgDAAQgGAAgEAIQgGAIgEALIAAAGIgBAGIAAAHIgBAHQAAADgCAEQgDACgFAAQgEAAgDgCQgDgEAAgDIAAgHIgBgHIABgTIABgSIAAgHIAAgGQAAgFADgCQADgDAEAAQAKAAAAAMIAAABQALgLAKAAQAOAAAFALQAEAIAAAQIAAAEIgBAEQAAAFACAJIACAPQAAAEgDADQgDACgFAAQgJAAgBgIg");
	this.shape_168.setTransform(-78.5,42.1);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AgIA1QgDgDAAgEIAAgOIAAgNIABgQIAAgPQAAgEADgDQADgDAEAAQADAAADADQADADAAAEIgBAPIgBAQIAAANIABAOQAAAEgDADQgDACgCAAQgFAAgDgCgAgFgkQgEgDAAgFQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_169.setTransform(-84.5,40.4);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FF0000").s().p("AgkAuQAAgEACgCQADgDAEAAIAJACIALABQAJAAAFgHQAFgGABgPQgEAEgEACQgFACgDAAQgPAAgJgJQgJgKAAgNQAAgUAMgMQAMgNAUAAQAHAAAFACQAFACADADQAJABAAAKIgBAOQgDARgBARQgBAYgHAKQgKAPgWAAQgcAAAAgMgAgKggQgGAHAAAMQAAAJADAEQADADAHAAQAEAAAGgFQAGgHABgGIADgWIgFgCIgFgBQgKAAgHAIg");
	this.shape_170.setTransform(-97.2,44.1);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FF0000").s().p("AAOAiIgCgQIgBgPIABgEIAAgHIAAgCIAAgEQAAgGgDAAQgGAAgEAIQgGAIgEALIAAAGIgBAGIAAAHIgBAHQAAADgCAEQgDACgFAAQgEAAgDgCQgDgEAAgDIAAgHIgBgHIABgTIABgSIAAgHIAAgGQAAgFADgCQADgDAEAAQAKAAAAAMIAAABQALgLAKAAQAOAAAFALQAEAIAAAQIAAAEIgBAEQAAAFACAJIACAPQAAAEgDADQgDACgFAAQgJAAgBgIg");
	this.shape_171.setTransform(-105,42.1);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FF0000").s().p("AgIA1QgDgDAAgEIAAgOIAAgNIABgQIAAgPQAAgEADgDQADgDAEAAQADAAADADQADADAAAEIgBAPIgBAQIAAANIABAOQAAAEgDADQgDACgCAAQgFAAgDgCgAgFgkQgEgDAAgFQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_172.setTransform(-110.9,40.4);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FF0000").s().p("AARA2IgLgQIgKgPIgKAHIAAATQAAAFgDADQgDACgFAAQgKAAAAgMIABgRIABgSIAAgWIAAgYIAAgHIAAgIQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAAIIABAHIgBAVIAAASQAKgFASgVQAEgDAEAAQAEAAADADQADADAAAEQAAADgDAEQgIAHgMALIAPATQALAPAAAFQAAAEgDADQgEADgEAAQgFAAgDgGg");
	this.shape_173.setTransform(-117,40.1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FF0000").s().p("AARAhIgMAFIgGACQgSAAgJgKQgJgJAAgTQAAgQANgMQANgNARAAQAHAAAJAEQALAFAAAGQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABIgBAHIAAAKQAAAMACAGIADAIIADAHQAAAEgDACQgDADgEAAQgDAAgIgHgAgJgNQgHAHAAAJQAAAJADAFQAEAFAHAAQACAAAEgBQAEgCAEgDIgCgYIAAgFIABgHIgCgBIgCAAQgIAAgIAIg");
	this.shape_174.setTransform(-125.4,42.2);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FF0000").s().p("AgFAqQgDgDAAgEIgCgYIgBgXIgBgIQgJAFgIAMIgBABIgBAWIAAAFIAAAFQAAAEgDACQgDADgFAAQgGAAgCgGQgCgDAAgIIAAgaIAAgKIAAgLQAAgHACgFQADgHAFAAQAEAAAEAEQADADAAAEIgBAGQALgNAKAAQALAAAEAJQAEgEAGgCQAFgCAGAAQAPAAAFAOIADAUIAFAlQAAAFgDACQgDADgEAAQgIAAgCgIIgDgWIgCgTQgCgNgDAAIgIADIgJAGIACAWIACAYQAAAEgCADQgDADgFAAQgCAAgDgDg");
	this.shape_175.setTransform(-135.3,42.2);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AgcAlQgCgCAAgFIAAgtIAAgHIAAgHQABgEACgCQACgDAFgBQAIAAABAJQALgKAQAAQAPABAAATIAAAEQgBAMgJAAQgKAAABgKIgBgHQgOADgIAOIAAAiQAAAFgCACQgDADgFAAQgEAAgDgDg");
	this.shape_176.setTransform(-151.2,42.2);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgWAeQgLgKgBgRQAAgOAJgNQALgPASAAQAPAAAJAMQAHALAAAPQAAAPgJAMQgKAOgQAAQgNAAgJgKgAgJgLQgEAHAAAHQAAAJAFAFQAEADAEAAQAFAAAFgEQAFgFABgJQABgVgOAAQgHAAgFAIg");
	this.shape_177.setTransform(-159.1,42.2);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AgKAPQgCgCAAgEIAEgJIAHgMQABgEAEAAQAEAAADACQACADAAADIgEAJIgGAMQgDAEgDAAQgEAAgDgCg");
	this.shape_178.setTransform(228.9,23.6);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FF0000").s().p("AgkAuQAAgEACgCQADgDAEAAIAJACIALABQAJAAAFgHQAFgGABgPQgEAEgEACQgFACgDAAQgPAAgJgJQgJgKAAgNQAAgUAMgMQAMgNAUAAQAHAAAFACQAFACADADQAJABAAAKIgBAOQgDARgBARQgBAYgHAKQgKAPgWAAQgcAAAAgMgAgKggQgGAHAAAMQAAAJADAEQADADAHAAQAEAAAGgFQAGgHABgGIADgWIgFgCIgFgBQgKAAgHAIg");
	this.shape_179.setTransform(221.9,21.2);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FF0000").s().p("AAOAiIgCgQIgBgPIABgFIAAgGIAAgDIAAgDQAAgGgDAAQgGAAgEAIQgGAIgEALIAAAGIgBAGIAAAHIgBAGQAAAFgCACQgDADgFAAQgEAAgDgDQgDgCAAgFIAAgGIgBgHIABgTIABgSIAAgGIAAgIQAAgDADgEQADgCAEAAQAKAAAAALIAAABQALgKAKgBQAOAAAFAMQAEAIAAAPIAAAFIgBADQAAAGACAJIACAOQAAAFgDACQgDADgFAAQgJAAgBgIg");
	this.shape_180.setTransform(214.2,19.2);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FF0000").s().p("AgIA1QgDgDAAgEIAAgOIAAgNIABgQIAAgPQAAgEADgDQADgDAEAAQADAAADADQADADAAAEIgBAPIgBAQIAAANIABAOQAAAEgDADQgDACgCAAQgFAAgDgCgAgFgkQgEgDAAgFQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_181.setTransform(208.2,17.5);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FF0000").s().p("AgJAgIgZg5IgBgEQAAgEAEgDQADgDAEAAQAGAAADAGQAEAJALAfIAKgYIAGgPQADgGAGAAQAEAAAEADQADACAAAEQAAADgMAaIgPAfQgBAEgCACQgDADgDAAQgGAAgDgIg");
	this.shape_182.setTransform(202.4,19.2);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FF0000").s().p("AgYAfQgMgJAAgRQAAgQAJgOQAMgOAQAAQANABAIAEQALAFAAAMQAAAHgJAGQgEAEgNADIgWALQADAEAGABQAFACAEAAQAJAAAIgDQAFgEAFAAQAHAAAAAHQAAAJgNAFQgKAFgLgBQgPABgMgJgAgJgQQgEAFgEAIIARgHQAIgEAGgEQgFgDgIAAQgFAAgFAFg");
	this.shape_183.setTransform(194.4,19.3);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FF0000").s().p("AgIA1QgDgDAAgEIAAgOIAAgNIABgQIAAgPQAAgEADgDQADgDAEAAQADAAADADQADADAAAEIgBAPIgBAQIAAANIABAOQAAAEgDADQgDACgCAAQgFAAgDgCgAgFgkQgEgDAAgFQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_184.setTransform(188.3,17.5);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FF0000").s().p("AgGA5QgDgDABgEIAAhjQAAgFACgCQAEgDACAAQAEAAADADQACACAAAFIAABfQABAOgKAAQgDAAgDgDg");
	this.shape_185.setTransform(184,17.2);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FF0000").s().p("AgYAfQgMgJAAgRQAAgQAKgOQAKgOARAAQAMABAJAEQALAFAAAMQAAAHgJAGQgEAEgMADIgXALQAEAEAEABQAFACAFAAQAJAAAHgDQAHgEADAAQAIAAAAAHQAAAJgMAFQgKAFgMgBQgQABgLgJgAgIgQQgGAFgCAIIAQgHQAIgEAFgEQgEgDgIAAQgFAAgEAFg");
	this.shape_186.setTransform(177.7,19.3);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FF0000").s().p("AgUA3QgDADgEAAQgEAAgDgDQgDgCAAgEIABgGIAAgFIAAhRQAAgFACgEQADgGAFAAQAIAAAAAJIAAADIAAADIAAAcIAKgEIAIgCQARAAALANQAKAJAAARQAAARgMAMQgMAMgPAAQgKAAgJgEgAgHAAIgLAFIAAAfQAKAEAHAAQAHAAAGgGQAGgHAAgJQAAgKgFgGQgFgEgIAAQgCAAgFACg");
	this.shape_187.setTransform(169.2,17.3);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AgKAPQgCgCAAgEIAEgJIAHgMQABgEAEAAQAEAAADACQACADAAADIgEAJIgGAMQgDAEgDAAQgEAAgDgCg");
	this.shape_188.setTransform(154.7,23.6);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FF0000").s().p("AgkAuQAAgEACgCQADgDAEAAIAJACIALABQAJAAAFgHQAFgGABgPQgEAEgEACQgFACgDAAQgPAAgJgJQgJgKAAgNQAAgUAMgMQAMgNAUAAQAHAAAFACQAFACADADQAJABAAAKIgBAOQgDARgBARQgBAYgHAKQgKAPgWAAQgcAAAAgMgAgKggQgGAHAAAMQAAAJADAEQADADAHAAQAEAAAGgFQAGgHABgGIADgWIgFgCIgFgBQgKAAgHAIg");
	this.shape_189.setTransform(147.7,21.2);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FF0000").s().p("AAOAiIgCgQIgBgPIABgFIAAgGIAAgDIAAgDQAAgGgDAAQgGAAgEAIQgGAIgEALIAAAGIgBAGIAAAHIgBAGQAAAFgCACQgDADgFAAQgEAAgDgDQgDgCAAgFIAAgGIgBgHIABgTIABgSIAAgGIAAgIQAAgDADgEQADgCAEAAQAKAAAAALIAAABQALgKAKgBQAOAAAFAMQAEAIAAAPIAAAFIgBADQAAAGACAJIACAOQAAAFgDACQgDADgFAAQgJAAgBgIg");
	this.shape_190.setTransform(140,19.2);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FF0000").s().p("AgIA1QgDgDAAgEIAAgOIAAgNIABgQIAAgPQAAgEADgDQADgDAEAAQADAAADADQADADAAAEIgBAPIgBAQIAAANIABAOQAAAEgDADQgDACgCAAQgFAAgDgCgAgFgkQgEgDAAgFQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_191.setTransform(134,17.5);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FF0000").s().p("AgFAzQgEgDAAgEIABgIIAAgIIgBgjIgOgCQgJgBAAgIQAAgFACgCQADgDAFAAIAMABIAAgIIgBgIQAAgDADgDQADgDAFAAQAIAAAAASIAAAHIAIgBIALABQAGACAAAHQAAAEgDADQgDACgEABIgEAAIgDAAIgHAAIABAkIAAAEIAAAEQAAARgKAAQgCAAgDgCg");
	this.shape_192.setTransform(128.3,18);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FF0000").s().p("AgWAgQgLgKAAgQQAAgMAKgQQAMgSANAAQAIAAAKAEQANAGAAAGQAAAEgDADQgCADgFAAQgDAAgEgEQgFgDgJAAQgDAAgHALQgGAKAAAGQAAAIAFAEQAGAEAGAAQAFAAAHgDIAJgEQAEAAADADQADADAAADQAAAGgMAGQgMAFgHAAQgOAAgLgJg");
	this.shape_193.setTransform(120.7,19.2);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FF0000").s().p("AgYAfQgMgJAAgRQAAgQAJgOQAMgOAQAAQANABAIAEQALAFAAAMQAAAHgJAGQgEAEgNADIgWALQADAEAFABQAGACAEAAQAKAAAGgDQAGgEAFAAQAHAAAAAHQAAAJgNAFQgKAFgLgBQgPABgMgJgAgJgQQgFAFgDAIIARgHQAIgEAGgEQgFgDgIAAQgFAAgFAFg");
	this.shape_194.setTransform(112.7,19.3);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FF0000").s().p("AgGA5QgCgDgBgEIAAhjQAAgFAEgCQADgDACAAQAEAAACADQADACAAAFIAABfQAAAOgJAAQgDAAgDgDg");
	this.shape_195.setTransform(106.5,17.2);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FF0000").s().p("AgYAfQgMgJAAgRQAAgQAJgOQAMgOAQAAQANABAIAEQALAFAAAMQAAAHgJAGQgEAEgNADIgWALQADAEAFABQAGACAEAAQAJAAAIgDQAFgEAFAAQAHAAAAAHQAAAJgNAFQgKAFgLgBQgPABgMgJgAgJgQQgEAFgEAIIARgHQAIgEAGgEQgFgDgIAAQgFAAgFAFg");
	this.shape_196.setTransform(100.2,19.3);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FF0000").s().p("AgTAmQgLgEAAgIQAAgIAIAAIAKACIAKACQANAAAAgGQAAgDgLgFQgNgGgEgCQgKgHAAgKQAAgPAPgFQAKgDAQAAQAIAAADACQAFADAAAGQAAAOgHAAQgHAAgCgGIgGgBQgQAAAAAFQAAADAJAFQAPAGAFADQAKAHAAAJQAAANgLAGQgKAGgMAAQgJAAgIgDg");
	this.shape_197.setTransform(92.4,19.2);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AgKAPQgCgCAAgEIAEgJIAHgMQABgEAEAAQAEAAADACQACADAAADIgEAJIgGAMQgDAEgDAAQgEAAgDgCg");
	this.shape_198.setTransform(78.8,23.6);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FF0000").s().p("AgkAuQAAgEACgCQADgDAEAAIAJACIALABQAJAAAFgHQAFgGABgPQgEAEgEACQgFACgDAAQgPAAgJgJQgJgKAAgNQAAgUAMgMQAMgNAUAAQAHAAAFACQAFACADADQAJABAAAKIgBAOQgDARgBARQgBAYgHAKQgKAPgWAAQgcAAAAgMgAgKggQgGAHAAAMQAAAJADAEQADADAHAAQAEAAAGgFQAGgHABgGIADgWIgFgCIgFgBQgKAAgHAIg");
	this.shape_199.setTransform(71.8,21.2);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FF0000").s().p("AAOAiIgCgQIgBgPIABgFIAAgGIAAgDIAAgDQAAgGgDAAQgGAAgEAIQgGAIgEALIAAAGIgBAGIAAAHIgBAGQAAAFgCACQgDADgFAAQgEAAgDgDQgDgCAAgFIAAgGIgBgHIABgTIABgSIAAgGIAAgIQAAgDADgEQADgCAEAAQAKAAAAALIAAABQALgKAKgBQAOAAAFAMQAEAIAAAPIAAAFIgBADQAAAGACAJIACAOQAAAFgDACQgDADgFAAQgJAAgBgIg");
	this.shape_200.setTransform(64.1,19.2);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FF0000").s().p("AgIA1QgDgDAAgEIAAgOIAAgNIABgQIAAgPQAAgEADgDQADgDAEAAQADAAADADQADADAAAEIgBAPIgBAQIAAANIABAOQAAAEgDADQgDACgCAAQgFAAgDgCgAgFgkQgEgDAAgFQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_201.setTransform(58.1,17.5);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FF0000").s().p("AgFAzQgEgDAAgEIABgIIAAgIIgBgjIgOgCQgJgBAAgIQAAgFACgCQADgDAFAAIAMABIAAgIIgBgIQAAgDADgDQADgDAFAAQAIAAAAASIAAAHIAIgBIALABQAGACAAAHQAAAEgDADQgDACgEABIgEAAIgDAAIgHAAIABAkIAAAEIAAAEQAAARgKAAQgCAAgDgCg");
	this.shape_202.setTransform(52.4,18);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FF0000").s().p("AgWAgQgLgKAAgQQAAgMAKgQQAMgSANAAQAIAAAKAEQANAGAAAGQAAAEgDADQgCADgFAAQgDAAgEgEQgFgDgJAAQgDAAgHALQgGAKAAAGQAAAIAFAEQAGAEAGAAQAFAAAHgDIAJgEQAEAAADADQADADAAADQAAAGgMAGQgMAFgHAAQgOAAgLgJg");
	this.shape_203.setTransform(44.8,19.2);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FF0000").s().p("AgYAfQgMgJAAgRQAAgQAKgOQALgOAQAAQAMABAJAEQALAFAAAMQAAAHgJAGQgEAEgMADIgXALQAEAEAFABQAEACAFAAQAJAAAHgDQAHgEADAAQAIAAAAAHQAAAJgMAFQgKAFgMgBQgQABgLgJgAgIgQQgGAFgCAIIAQgHQAIgEAFgEQgEgDgIAAQgFAAgEAFg");
	this.shape_204.setTransform(36.8,19.3);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FF0000").s().p("AgGA5QgDgDABgEIAAhjQAAgFACgCQADgDADAAQAEAAADADQACACAAAFIAABfQABAOgKAAQgDAAgDgDg");
	this.shape_205.setTransform(30.6,17.2);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FF0000").s().p("AgYAfQgMgJAAgRQAAgQAKgOQAKgOARAAQAMABAJAEQALAFAAAMQAAAHgJAGQgEAEgMADIgXALQAEAEAEABQAFACAFAAQAKAAAGgDQAHgEADAAQAIAAAAAHQAAAJgMAFQgKAFgMgBQgPABgMgJgAgIgQQgFAFgEAIIARgHQAIgEAGgEQgFgDgIAAQgFAAgEAFg");
	this.shape_206.setTransform(24.3,19.3);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AgKAPQgCgCAAgEIAEgJIAHgMQABgEAEAAQAEAAADACQACADAAADIgEAJIgGAMQgDAEgDAAQgEAAgDgCg");
	this.shape_207.setTransform(10.2,23.6);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FF0000").s().p("AgkAuQAAgEACgCQADgDAEAAIAJACIALABQAJAAAFgHQAFgGABgPQgEAEgEACQgFACgDAAQgPAAgJgJQgJgKAAgNQAAgUAMgMQAMgNAUAAQAHAAAFACQAFACADADQAJABAAAKIgBAOQgDARgBARQgBAYgHAKQgKAPgWAAQgcAAAAgMgAgKggQgGAHAAAMQAAAJADAEQADADAHAAQAEAAAGgFQAGgHABgGIADgWIgFgCIgFgBQgKAAgHAIg");
	this.shape_208.setTransform(3.2,21.2);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FF0000").s().p("AAOAiIgCgQIgBgPIABgFIAAgGIAAgDIAAgDQAAgGgDAAQgGAAgEAIQgGAIgEALIAAAGIgBAGIAAAHIgBAGQAAAFgCACQgDADgFAAQgEAAgDgDQgDgCAAgFIAAgGIgBgHIABgTIABgSIAAgGIAAgIQAAgDADgEQADgCAEAAQAKAAAAALIAAABQALgKAKgBQAOAAAFAMQAEAIAAAPIAAAFIgBADQAAAGACAJIACAOQAAAFgDACQgDADgFAAQgJAAgBgIg");
	this.shape_209.setTransform(-4.5,19.2);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FF0000").s().p("AgIA1QgDgDAAgEIAAgOIAAgNIABgQIAAgPQAAgEADgDQADgDAEAAQADAAADADQADADAAAEIgBAPIgBAQIAAANIABAOQAAAEgDADQgDACgCAAQgFAAgDgCgAgFgkQgEgDAAgFQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_210.setTransform(-10.5,17.5);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FF0000").s().p("AgTAmQgLgEAAgIQAAgIAIAAIAKACIAKACQANAAAAgGQAAgDgLgFQgNgGgEgCQgKgHAAgKQAAgPAPgFQAKgDAQAAQAIAAADACQAFADAAAGQAAAOgHAAQgHAAgCgGIgGgBQgQAAAAAFQAAADAJAFQAPAGAFADQAKAHAAAJQAAANgLAGQgKAGgMAAQgJAAgIgDg");
	this.shape_211.setTransform(-16.5,19.2);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FF0000").s().p("AgWAeQgLgKgBgRQAAgOAJgNQALgPASAAQAPAAAJAMQAHALAAAPQAAAPgJAMQgKAOgQAAQgNAAgJgKgAgJgLQgEAHAAAHQAAAJAFAFQAEADAEAAQAFAAAFgEQAFgFABgJQABgVgOAAQgHAAgFAIg");
	this.shape_212.setTransform(-24.1,19.3);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FF0000").s().p("AgWAeQgLgKgBgRQAAgOAJgNQALgPASAAQAPAAAJAMQAHALAAAPQAAAPgJAMQgKAOgQAAQgNAAgJgKgAgJgLQgEAHAAAHQAAAJAFAFQAEADAEAAQAFAAAFgEQAFgFABgJQABgVgOAAQgHAAgFAIg");
	this.shape_213.setTransform(-32,19.3);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FF0000").s().p("AARA1QgCgFgCgLIgBgRIAAgGIAAgFIAAgHQAAgCgDAAQgJAAgEAFQgEAFgFAKQAAAbgDAFQgDAGgGAAQgEAAgDgDQgEgDAAgEIABgDIABgVIAAgvIAAgCIABgMIgBgGIgBgHQAAgEADgDQADgCAFAAQAHgBACAJQACAEAAAJIgBAPIAAAOQAFgFAGgDQAFgDAHAAQAMABAGAGQAEAGABAJIAAASIACAOIACAOIABADQAAAEgDADQgEACgEAAQgHABgCgIg");
	this.shape_214.setTransform(-40,17.3);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FF0000").s().p("AgWAgQgLgKAAgQQAAgMAKgQQAMgSANAAQAIAAAKAEQANAGAAAGQAAAEgDADQgCADgFAAQgDAAgEgEQgFgDgJAAQgDAAgHALQgGAKAAAGQAAAIAFAEQAGAEAGAAQAFAAAHgDIAJgEQAEAAADADQADADAAADQAAAGgMAGQgMAFgHAAQgOAAgLgJg");
	this.shape_215.setTransform(-48.5,19.2);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("AgKAPQgCgCAAgEIAEgJIAHgMQABgEAEAAQAEAAADACQACADAAADIgEAJIgGAMQgDAEgDAAQgEAAgDgCg");
	this.shape_216.setTransform(-62.2,23.6);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FF0000").s().p("AgkAuQAAgEACgCQADgDAEAAIAJACIALABQAJAAAFgHQAFgGABgPQgEAEgEACQgFACgDAAQgPAAgJgJQgJgKAAgNQAAgUAMgMQAMgNAUAAQAHAAAFACQAFACADADQAJABAAAKIgBAOQgDARgBARQgBAYgHAKQgKAPgWAAQgcAAAAgMgAgKggQgGAHAAAMQAAAJADAEQADADAHAAQAEAAAGgFQAGgHABgGIADgWIgFgCIgFgBQgKAAgHAIg");
	this.shape_217.setTransform(-69.2,21.2);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FF0000").s().p("AAOAiIgCgQIgBgPIABgFIAAgGIAAgDIAAgDQAAgGgDAAQgGAAgEAIQgGAIgEALIAAAGIgBAGIAAAHIgBAGQAAAFgCACQgDADgFAAQgEAAgDgDQgDgCAAgFIAAgGIgBgHIABgTIABgSIAAgGIAAgIQAAgDADgEQADgCAEAAQAKAAAAALIAAABQALgKAKgBQAOAAAFAMQAEAIAAAPIAAAFIgBADQAAAGACAJIACAOQAAAFgDACQgDADgFAAQgJAAgBgIg");
	this.shape_218.setTransform(-76.9,19.2);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FF0000").s().p("AgIA1QgDgDAAgEIAAgOIAAgNIABgQIAAgPQAAgEADgDQADgDAEAAQADAAADADQADADAAAEIgBAPIgBAQIAAANIABAOQAAAEgDADQgDACgCAAQgFAAgDgCgAgFgkQgEgDAAgFQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_219.setTransform(-82.9,17.5);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FF0000").s().p("AgGA5QgDgDAAgEIAAhjQABgFADgCQACgDADAAQAEAAACADQAEACAAAFIAABfQgBAOgJAAQgDAAgDgDg");
	this.shape_220.setTransform(-87.2,17.2);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FF0000").s().p("AgGA5QgDgDABgEIAAhjQAAgFACgCQADgDADAAQAEAAADADQACACAAAFIAABfQABAOgKAAQgDAAgDgDg");
	this.shape_221.setTransform(-91.3,17.2);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FF0000").s().p("AARAhIgMAFIgGACQgSAAgJgKQgJgJAAgTQAAgQANgMQANgNARAAQAHAAAJAEQALAFAAAGQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABIgBAHIAAAKQAAAMACAGIADAIIADAHQAAAEgDACQgDADgEAAQgDAAgIgHgAgJgNQgHAHAAAJQAAAJADAFQAEAFAHAAQACAAAEgBQAEgCAEgDIgCgYIAAgFIABgHIgCgBIgCAAQgIAAgIAIg");
	this.shape_222.setTransform(-97.5,19.3);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FF0000").s().p("AgWAgQgLgKAAgQQAAgMAKgQQAMgSANAAQAIAAAKAEQANAGAAAGQAAAEgDADQgCADgFAAQgDAAgEgEQgFgDgJAAQgDAAgHALQgGAKAAAGQAAAIAFAEQAGAEAGAAQAFAAAHgDIAJgEQAEAAADADQADADAAADQAAAGgMAGQgMAFgHAAQgOAAgLgJg");
	this.shape_223.setTransform(-105.7,19.2);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("AgKAPQgCgCAAgEIAEgJIAHgMQABgEAEAAQAEAAADACQACADAAADIgEAJIgGAMQgDAEgDAAQgEAAgDgCg");
	this.shape_224.setTransform(288.4,0.7);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FF0000").s().p("AgkAuQAAgEACgCQADgDAEAAIAJACIALABQAJAAAFgHQAFgGABgPQgEAEgEACQgFACgDAAQgPAAgJgJQgJgKAAgNQAAgUAMgMQAMgNAUAAQAHAAAFACQAFACADADQAJABAAAKIgBAOQgDARgBARQgBAYgHAKQgKAPgWAAQgcAAAAgMgAgKggQgGAHAAAMQAAAJADAEQADADAHAAQAEAAAGgFQAGgHABgGIADgWIgFgCIgFgBQgKAAgHAIg");
	this.shape_225.setTransform(281.4,-1.7);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FF0000").s().p("AAOAhIgCgPIgBgPIABgFIAAgGIAAgDIAAgDQAAgGgDAAQgGAAgEAIQgGAIgEAKIAAAHIgBAHIAAAGIgBAGQAAAFgCADQgDACgFAAQgEAAgDgCQgDgDAAgFIAAgGIgBgGIABgUIABgSIAAgHIAAgGQAAgFADgCQADgDAEAAQAKAAAAAMIAAAAQALgLAKABQAOAAAFALQAEAIAAAQIAAAEIgBAEQAAAFACAJIACAOQAAAFgDADQgDACgFAAQgJAAgBgJg");
	this.shape_226.setTransform(273.7,-3.7);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FF0000").s().p("AgIA1QgDgDAAgEIAAgOIAAgNIABgQIAAgPQAAgEADgDQADgDAEAAQADAAADADQADADAAAEIgBAPIgBAQIAAANIABAOQAAAEgDADQgDACgCAAQgFAAgDgCgAgFgkQgEgDAAgFQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_227.setTransform(267.7,-5.4);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FF0000").s().p("AgFAqQgDgDAAgEIgCgYIgBgXIgBgIQgJAFgIAMIgBABIgBAWIAAAFIAAAFQAAAEgDACQgDADgFAAQgGAAgCgGQgCgDAAgIIAAgaIAAgKIAAgLQAAgHACgFQADgHAFAAQAEAAAEAEQADADAAAEIgBAGQALgNAKAAQALAAAEAJQAEgEAGgCQAFgCAGAAQAPAAAFAOIADAUIAFAlQAAAFgDACQgDADgEAAQgIAAgCgIIgDgWIgCgTQgCgNgDAAIgIADIgJAGIACAWIACAYQAAAEgCADQgDADgFAAQgCAAgDgDg");
	this.shape_228.setTransform(259.8,-3.6);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FF0000").s().p("AARAhIgMAFIgGACQgSAAgJgKQgJgJAAgTQAAgQANgMQANgNARAAQAHAAAJAEQALAFAAAGQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABIgBAHIAAAKQAAAMACAGIADAIIADAHQAAAEgDACQgDADgEAAQgDAAgIgHgAgJgNQgHAHAAAJQAAAJADAFQAEAFAHAAQACAAAEgBQAEgCAEgDIgCgYIAAgFIABgHIgCgBIgCAAQgIAAgIAIg");
	this.shape_229.setTransform(249.7,-3.6);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FF0000").s().p("AAOAhIgCgPIgBgPIABgFIAAgGIAAgDIAAgDQAAgGgDAAQgGAAgEAIQgGAIgEAKIAAAHIgBAHIAAAGIgBAGQAAAFgCADQgDACgFAAQgEAAgDgCQgDgDAAgFIAAgGIgBgGIABgUIABgSIAAgHIAAgGQAAgFADgCQADgDAEAAQAKAAAAAMIAAAAQALgLAKABQAOAAAFALQAEAIAAAQIAAAEIgBAEQAAAFACAJIACAOQAAAFgDADQgDACgFAAQgJAAgBgJg");
	this.shape_230.setTransform(241.6,-3.7);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AgNA9QgDgCAAgEIAAgCQACgLAAgJIAAgiIgFAAIgEAAQgEAAgDgCQgDgDAAgEQAAgHAHgCIANgBIABgJQACgQAHgIQAGgKASAAQANAAAAAKQAAAJgMAAQgJAAgEAGQgDAFgBAKIAAACIAOgBQANAAAAAKQAAAJgOAAIgOAAIAAASIAAAUQAAANgCAIQgCAIgGAAQgEAAgDgDg");
	this.shape_231.setTransform(227.2,-5.3);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("AgWAeQgLgKgBgRQAAgOAJgNQALgPASAAQAPAAAJAMQAHALAAAPQAAAPgJAMQgKAOgQAAQgNAAgJgKgAgJgLQgEAHAAAHQAAAJAFAFQAEADAEAAQAFAAAFgEQAFgFABgJQABgVgOAAQgHAAgFAIg");
	this.shape_232.setTransform(219.4,-3.6);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("AgTAmQgLgEAAgIQAAgIAIAAIAKACIAKACQANAAAAgGQAAgDgLgFQgNgGgEgCQgKgHAAgKQAAgPAPgFQAKgDAQAAQAIAAADACQAFADAAAGQAAAOgHAAQgHAAgCgGIgGgBQgQAAAAAFQAAADAJAFQAPAGAFADQAKAHAAAJQAAANgLAGQgKAGgMAAQgJAAgIgDg");
	this.shape_233.setTransform(205.4,-3.7);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("AgUA3QgDADgEAAQgEAAgDgDQgDgCAAgEIABgGIAAgFIAAhRQAAgFACgEQADgGAFAAQAIAAAAAJIAAADIAAADIAAAcIAKgEIAIgCQARAAALANQAKAJAAARQAAARgMAMQgMAMgPAAQgKAAgJgEgAgHAAIgLAFIAAAfQAKAEAHAAQAHAAAGgGQAGgHAAgJQAAgKgFgGQgFgEgIAAQgCAAgFACg");
	this.shape_234.setTransform(197.4,-5.6);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AgcAlQgCgCAAgFIAAgtIAAgHIAAgHQABgEACgCQACgDAFAAQAIgBABAJQALgKAQAAQAPABAAATIAAAEQgBAMgJAAQgKAAABgKIgBgHQgOACgIAPIAAAiQAAAFgCACQgDADgFABQgEgBgDgDg");
	this.shape_235.setTransform(189.5,-3.6);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AgYAfQgMgJAAgRQAAgRAJgMQALgOARgBQAMAAAJAEQALAGAAALQAAAIgJAHQgEADgMADIgXALQAEAEAEACQAGACAEAAQAKAAAGgFQAHgDADAAQAIAAAAAIQAAAHgMAGQgLAEgLABQgPAAgMgJgAgJgRQgEAFgEAJIARgHQAIgEAGgEQgFgDgIAAQgFAAgFAEg");
	this.shape_236.setTransform(181.5,-3.6);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("AgJAgIgZg5IgBgEQAAgEAEgDQADgDAEAAQAGAAADAGQAEAJALAfIAKgYIAGgPQADgGAGAAQAEAAAEADQADACAAAEQAAADgMAaIgPAfQgBAEgCACQgDADgDAAQgGAAgDgIg");
	this.shape_237.setTransform(173.8,-3.7);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("AgbAlQgDgCAAgFIAAgtIAAgHIAAgHQAAgEADgCQACgDAFAAQAIgBACAJQALgKAQAAQAOABAAATIAAAEQgBAMgKAAQgIAAgBgKIAAgHQgPACgGAPIAAAiQgBAFgDACQgCADgFABQgEgBgCgDg");
	this.shape_238.setTransform(160.1,-3.6);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AgYAfQgMgJAAgRQAAgRAJgMQAMgOAQgBQANAAAIAEQALAGAAALQAAAIgJAHQgEADgNADIgWALQADAEAGACQAFACAEAAQAJAAAIgFQAFgDAFAAQAHAAAAAIQAAAHgNAGQgKAEgLABQgPAAgMgJgAgJgRQgEAFgEAJIARgHQAIgEAFgEQgEgDgIAAQgFAAgFAEg");
	this.shape_239.setTransform(152.1,-3.6);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AgFAyQgEgCAAgEIABgIIAAgHIgBgkIgOgCQgJgBAAgJQAAgDACgDQADgDAFAAIAMAAIAAgHIgBgHQAAgEADgDQADgDAFAAQAIAAAAATIAAAFIAIAAIALABQAGACAAAHQAAAEgDADQgDACgEAAIgEAAIgDAAIgHABIABAlIAAADIAAAFQAAAQgKAAQgCAAgDgDg");
	this.shape_240.setTransform(144.5,-4.9);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("AgNA9QgDgCAAgEIAAgCQACgLAAgJIAAgiIgFAAIgEAAQgEAAgDgCQgDgDAAgEQAAgHAHgCIANgBIABgJQACgQAHgIQAGgKASAAQANAAAAAKQAAAJgMAAQgJAAgEAGQgDAFgBAKIAAACIAOgBQANAAAAAKQAAAJgOAAIgOAAIAAASIAAAUQAAANgCAIQgCAIgGAAQgEAAgDgDg");
	this.shape_241.setTransform(137,-5.3);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AARAhIgMAFIgGACQgSAAgJgKQgJgJAAgTQAAgQANgMQANgNARAAQAHAAAJAEQALAFAAAGQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABIgBAHIAAAKQAAAMACAGIADAIIADAHQAAAEgDACQgDADgEAAQgDAAgIgHgAgJgNQgHAHAAAJQAAAJADAFQAEAFAHAAQACAAAEgBQAEgCAEgDIgCgYIAAgFIABgHIgCgBIgCAAQgIAAgIAIg");
	this.shape_242.setTransform(129.2,-3.6);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FF0000").s().p("AAUA2QgFAEgGABIgJABQgQAAgLgLQgLgLAAgQQAAgUALgKQAMgMAPAAQAGgBAEACQAEABADACQACgZABgJQABgJAIABQAFAAACACQADADAAAEIgCAgIgCAeQAAAaACAJIAAACQAAAEgDADQgCADgEAAQgGAAgCgGgAgOADQgFAGAAANQAAAHAGAGQAFAFAIABQAEgBADgBIAHgFIACgBIAAgbQgDgFgDgBQgEgBgGAAQgIgBgGAFg");
	this.shape_243.setTransform(114,-5.6);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FF0000").s().p("AAOAhIgCgPIgBgPIABgFIAAgGIAAgDIAAgDQAAgGgDAAQgGAAgEAIQgGAIgEAKIAAAHIgBAHIAAAGIgBAGQAAAFgCADQgDACgFAAQgEAAgDgCQgDgDAAgFIAAgGIgBgGIABgUIABgSIAAgHIAAgGQAAgFADgCQADgDAEAAQAKAAAAAMIAAAAQALgLAKABQAOAAAFALQAEAIAAAQIAAAEIgBAEQAAAFACAJIACAOQAAAFgDADQgDACgFAAQgJAAgBgJg");
	this.shape_244.setTransform(105.8,-3.7);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FF0000").s().p("AAOAkQgJADgIAAQgLAAgGgEQgJgFgBgKQgDgSAAgNQAAgJACgMQACgIAIAAQAEAAADACQADADAAAEIgBAKIgBAKIABAQIACANIADABIAEABQAGAAAKgDIAAgMIAAgLQAAgPABgLQABgIAJAAQAEAAADACQADADAAAEIgBAaIAAANIAAAPIAAAEIABAFQAAAEgDACQgEADgEAAQgGAAgDgFg");
	this.shape_245.setTransform(97.9,-3.6);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FF0000").s().p("AgWAeQgLgKgBgRQAAgOAJgNQALgPASAAQAPAAAJAMQAHALAAAPQAAAPgJAMQgKAOgQAAQgNAAgJgKgAgJgLQgEAHAAAHQAAAJAFAFQAEADAEAAQAFAAAFgEQAFgFABgJQABgVgOAAQgHAAgFAIg");
	this.shape_246.setTransform(89.9,-3.6);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FF0000").s().p("AgNA9QgDgCAAgEIAAgCQACgLAAgJIAAgiIgFAAIgEAAQgEAAgDgCQgDgDAAgEQAAgHAHgCIANgBIABgJQACgQAHgIQAGgKASAAQANAAAAAKQAAAJgMAAQgJAAgEAGQgDAFgBAKIAAACIAOgBQANAAAAAKQAAAJgOAAIgOAAIAAASIAAAUQAAANgCAIQgCAIgGAAQgEAAgDgDg");
	this.shape_247.setTransform(82.2,-5.3);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FF0000").s().p("AgYAfQgMgJAAgRQAAgRAJgMQAMgOAQgBQANAAAIAEQALAGAAALQAAAIgJAHQgEADgNADIgWALQADAEAFACQAGACAEAAQAKAAAGgFQAGgDAFAAQAHAAAAAIQAAAHgNAGQgKAEgLABQgPAAgMgJgAgJgRQgFAFgDAJIARgHQAIgEAGgEQgFgDgIAAQgFAAgFAEg");
	this.shape_248.setTransform(67.7,-3.6);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FF0000").s().p("AgcAlQgCgCAAgFIAAgtIAAgHIABgHQgBgEADgCQADgDAEAAQAIgBACAJQALgKAPAAQAPABAAATIAAAEQgBAMgJAAQgJAAAAgKIgBgHQgOACgHAPIAAAiQgBAFgCACQgDADgEABQgFgBgDgDg");
	this.shape_249.setTransform(60.2,-3.6);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FF0000").s().p("AARAhIgMAFIgGACQgSAAgJgKQgJgJAAgTQAAgQANgMQANgNARAAQAHAAAJAEQALAFAAAGQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABIgBAHIAAAKQAAAMACAGIADAIIADAHQAAAEgDACQgDADgEAAQgDAAgIgHgAgJgNQgHAHAAAJQAAAJADAFQAEAFAHAAQACAAAEgBQAEgCAEgDIgCgYIAAgFIABgHIgCgBIgCAAQgIAAgIAIg");
	this.shape_250.setTransform(52.3,-3.6);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#00E600").s().p("AgmAvQgJgHAAgJQAAgEADgEQACgDAFAAQAHAAADAIQAEAJAPAAQAKgBAMgFQAMgGAAgGQAAgKgHgCQgGgDgOAAQgNAAgKgEQgNgFAAgLQAAgOAPgMQAPgMAQAAQAIAAAKADQANAEAAAFQAAAEgCADQgDADgFAAIgKgBIgLgBQgJgBgHAFQgIAEAAAGQAAADACACIAIACIARABQAQABAKAIQAKAHAAAPQAAATgVAKQgRAHgTAAQgTAAgKgIg");
	this.shape_251.setTransform(36.4,-5.1);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#00E600").s().p("AgFA1QgEgDAAgEIABgDIAAgEIgBgKIAAgKIgCgZIgCgaIgDAAQgRAAgJgDQgJgCAAgHQAAgEADgDQADgEAFABIAMABIAMABIANAAIALAAIARAAIARABQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAIgSgBIgSgBIACAeIACAcIAAAHIABAIQAAAFgDAFQgDAFgFAAQgCAAgDgCg");
	this.shape_252.setTransform(26,-5.5);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#00E600").s().p("AgyA4QgDgDAAgEIABgJIAAgJIAAgNIABgNIgBgMIAAgOIgBgNIgBgNQAAgEAEgEQAEgDAFAAQAFAAAHAJQAfAvAgAcIAAgLIAAguIgBgIIgBgIQAAgKALAAQAMAAAAAkIgBAMIAAAsIgBAMQgCAJgJAAQgFAAgGgGQgdgZghgsIgBAWIABARIAAARQAAAWgLAAQgFAAgDgDg");
	this.shape_253.setTransform(14.6,-5.4);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#00E600").s().p("AghA3QgIgHAAgXIACgcIABgeIgBgHIAAgIQAAgKAKgBQADABADABIAQgDIAMgBQATAAALAEQAHADAAAGQAAAEgDADQgDAEgFAAIgDgBQgLgDgMAAIgJABIgOADIgBAdIAbgEIASgBQAEAAADADQADADAAAEQAAAHgJABIgRACIgeACIAAAQQAAAOABACQABABAJAAIALAAIAOAAIAEgBIAFgBQAEAAADADQADACAAAGQAAAIgIACQgIABgVAAQgYAAgHgHg");
	this.shape_254.setTransform(4.1,-5.5);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#00E600").s().p("AAnAvIgEgRQgDgOgFgWIgLAdIgEANQgDAIgDAFQgEAHgEAAQgHAAgEgIIgEgOIgLglIgJAiIgCAQQgDALgIAAQgGAAgCgEQgDgDAAgEQABgMAEgRIAJgaIAEgXQADgPAEgFQAEgGAFAAQAIAAACAHQAEAHACATQAEATAGAUQAHgTAHgaIAEgRQAEgLAIAAQAIAAAEANIADASQAFAdAGAWIAGAZQAAAEgCADQgEADgEAAQgIAAgEgMg");
	this.shape_255.setTransform(-7.3,-5.3);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#00E600").s().p("AghA3QgIgHAAgXIACgcIABgeIgBgHIAAgIQAAgKAKgBQADABADABIAQgDIAMgBQATAAALAEQAHADAAAGQAAAEgDADQgDAEgFAAIgDgBQgLgDgMAAIgJABIgOADIgBAdIAbgEIASgBQAEAAADADQADADAAAEQAAAHgJABIgRACIgeACIAAAQQAAAOABACQABABAJAAIALAAIAOAAIAEgBIAFgBQAEAAADADQADACAAAGQAAAIgIACQgIABgVAAQgYAAgHgHg");
	this.shape_256.setTransform(-18.5,-5.5);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#00E600").s().p("AglArIABgXQACgeAAgmQAAgFADgCQACgDAFgBQAEABADADQADACAAAFQAAAmgCAgIgBASQARgBAZgIIADAAQAFAAADADQACADAAAEQAAAGgFADQgKADgRADQgPAEgKAAQgTgBABgQg");
	this.shape_257.setTransform(-27.3,-5.3);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#00E600").s().p("AggA3QgDgDABgDIAAgVIABgfIABgiQAAgUALACIAHgBIAKgBQANAAAMAJQAOAKABAQQgBASgPAKQgMAJgRAAIgGAAIgBAiQAAADgCADQgDADgEAAQgEAAgDgDgAgNgcIgBAaIAFABQAKgBAHgFQAJgGAAgJQgBgGgHgGQgIgEgGAAIgEAAIgEAAIAAAKg");
	this.shape_258.setTransform(-35.6,-5.6);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#00E600").s().p("AAnAvIgEgRQgDgOgEgWIgLAdIgFANQgDAIgDAFQgDAHgGAAQgGAAgEgIIgEgOIgLglIgJAiIgCAQQgDALgIAAQgFAAgDgEQgDgDABgEQAAgMAEgRIAIgaIAFgXQADgPAEgFQAEgGAGAAQAGAAAEAHQACAHADATQAEATAGAUQAGgTAIgaIAEgRQAEgLAIAAQAIAAAEANIAEASQAEAdAGAWIAHAZQgBAEgDADQgDADgEAAQgIAAgEgMg");
	this.shape_259.setTransform(-46.2,-5.3);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#00E600").s().p("AgmAtQgQgOAAgVQAAgXAQgUQARgXAZAAQAZAAANAMQANALAAAYQAAAXgOAUQgRAXgZAAQgVAAgQgMgAgWgVQgLAPAAAQQAAAMAJAIQAJAHAOAAQAOAAALgPQAKgPAAgQQAAgQgHgGQgGgFgRAAQgOAAgMAPg");
	this.shape_260.setTransform(-59,-5.3);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#00E600").s().p("AgfAsQgLgMAAgPQAAgXAVgZQATgWARAAIAGAAIAEABQADgDAFAAQAHAAACAIIABAPQAAADgCADQgDAEgFAAQgGAAgEgHQgBgDgCgBIgFAAQgKAAgKAOQgRATAAARQAAAIAGAFQAFAGAIAAQAFAAAHgEIALgHQAGgEADAAQAEAAAEAEQACADAAADQAAAFgDADQgVARgSAAQgRAAgLgMg");
	this.shape_261.setTransform(-69.5,-5.5);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#00E600").s().p("AghA3QgIgHAAgXIACgcIABgeIgBgHIAAgIQAAgKAKgBQADABADABIAQgDIAMgBQATAAALAEQAHADAAAGQAAAEgDADQgDAEgFAAIgDgBQgLgDgMAAIgJABIgOADIgBAdIAbgEIASgBQAEAAADADQADADAAAEQAAAHgJABIgRACIgeACIAAAQQAAAOABACQABABAJAAIALAAIAOAAIAEgBIAFgBQAEAAADADQADACAAAGQAAAIgIACQgIABgVAAQgYAAgHgHg");
	this.shape_262.setTransform(-85.2,-5.5);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#00E600").s().p("AgPAzQgJgVgKgmIgHgUQgDgOAAgFQAAgEACgDQAEgDAEAAQAGAAADAIIADAMIAHAYIALAjIAPgqIAHgSQAFgKAEgGQAEgEAEAAQAEAAAEADQACADAAAEQAAADgBADQgFAGgDAIIgFAOIgUAxQgDAJgFAJQgDAGgEAAQgIAAgDgIg");
	this.shape_263.setTransform(-95,-5.3);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#00E600").s().p("AghA1QgDgDAAgEQAAgFADgCQADgDAFAAIAOgCIAAggQAAgTABgRIgQAAQgEAAgDgDQgDgDAAgEQAAgFADgCQACgCAEgBIAWgBQAMAAAWAEQAIABAAAJQAAAFgDACQgDACgDABIgUgCIgBAhIAAAhIAUAAQAFAAADADQACADAAAEQAAAEgDADQgDACgEAAIgNABIgMAAIgNACIgPABQgEgBgDgCg");
	this.shape_264.setTransform(-104.4,-5.3);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#00E600").s().p("AgFA1QgEgDAAgEIABgDIAAgEIgBgKIAAgKIgCgZIgCgaIgDAAQgRAAgJgDQgJgCAAgHQAAgEADgDQADgEAFABIAMABIAMABIANAAIALAAIARAAIARABQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAIgSgBIgSgBIACAeIACAcIAAAHIABAIQAAAFgDAFQgDAFgFAAQgCAAgDgCg");
	this.shape_265.setTransform(-113.6,-5.5);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#00E600").s().p("AgfAsQgLgMAAgPQAAgXAVgZQATgWARAAIAGAAIAEABQADgDAFAAQAHAAACAIIABAPQAAADgCADQgDAEgFAAQgGAAgEgHQgBgDgCgBIgFAAQgKAAgKAOQgRATAAARQAAAIAGAFQAFAGAIAAQAFAAAHgEIALgHQAGgEADAAQAEAAAEAEQACADAAADQAAAFgDADQgVARgSAAQgRAAgLgMg");
	this.shape_266.setTransform(-123.4,-5.5);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#00E600").s().p("AghA3QgIgHAAgXIACgcIABgeIgBgHIAAgIQAAgKAKgBQADABADABIAQgDIAMgBQATAAALAEQAHADAAAGQAAAEgDADQgDAEgFAAIgDgBQgLgDgMAAIgJABIgOADIgBAdIAbgEIASgBQAEAAADADQADADAAAEQAAAHgJABIgRACIgeACIAAAQQAAAOABACQABABAJAAIALAAIAOAAIAEgBIAFgBQAEAAADADQADACAAAGQAAAIgIACQgIABgVAAQgYAAgHgHg");
	this.shape_267.setTransform(-132.6,-5.5);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#00E600").s().p("AgfAyQgOgKAAgPQgBgLALAAQAKAAAAALQAAAFAIAEQAHAGAGAAQADgBABgJIAAgXIABgoIAAgFIgBAAIgHAAIgJAAQgFAAgDgCQgCgEAAgEQAAgKAMAAIAIABIAGAAIANgBIAOAAQATAAAAALQAAADgCAEQgEACgEAAIgEAAIgEAAIgHAAIAAAFQAAAygHAYQgFASgNAAQgNAAgOgJg");
	this.shape_268.setTransform(-142.4,-5.1);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#00E600").s().p("AgiA3QgEgEAAgEIAAhLIAAgKQgBgGABgEQABgHAMgBQAFgCANAAQAMAAANAJQAPALAAAPQAAAJgDAFQgDAFgGAEQAHADAGAHQAGAIAAAHQAAAKgLAJQgHAFgIADQgPAHgaAAQgEAAgDgEgAgSAnQANgBAMgEQANgEAAgEQAAgGgIgEQgHgEgFAAIgSgBgAgSgWIAAAPIAKABQAUgCAAgPQAAgFgGgFQgGgFgHAAIgLAAg");
	this.shape_269.setTransform(-152,-5.6);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#00E600").s().p("AgmAtQgQgOAAgVQAAgXAQgUQARgXAZAAQAZAAANAMQANALAAAYQAAAXgOAUQgRAXgZAAQgVAAgQgMgAgWgVQgLAPAAAQQAAAMAJAIQAJAHAOAAQAOAAALgPQAKgPAAgQQAAgQgHgGQgGgFgRAAQgOAAgMAPg");
	this.shape_270.setTransform(-163,-5.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125}]}).wait(381));

	// Layer 1
	this.instance = new lib.bub_captain();
	this.instance.setTransform(43.5,83.8,1,1,0,0,0,77.5,67.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(381));

	// Layer 8
	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("rgba(243,243,243,0.8)").s().p("EgjLAIkIAAxHMBGXAAAIAARHg");
	this.shape_271.setTransform(62.2,129.1);
	this.shape_271._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_271).wait(198).to({_off:false},0).wait(183));

	// Layer 7
	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("#000000").ss(4,1,1).p("EAkZAFzIAA7QMhIxAAAIAAa3IAACgIAANkMBIxAAAIAAskg");
	this.shape_272.setTransform(60.4,114.1);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f().s("#000000").ss(0.3,1,1).p("AWvhxQADAIAFAQARtj6QgJAIgPgDARPkeQAOgRAOAGAWAhxQgMALgBAJQgBAIAHAGAWJB1QgJgIAJgLAXBBhQgIAPgBALAcJBqQAchbAXBMQA4gvAFA6QAVgWASgnQAEAVANALQAqhdAJBpQAngXACA4QAwg2ANAxQAtg1hZADQAhgjAhgJQAFAkAGAkQAYgsBYAYQAWAGgIAeQAZgQAXAEAcAEfQAwgSB1AGQBpAFBjAOQBUAMBUgMALeirQACAHACAJAKbiVQgKgHgGgSALXBvQAAgHAEgIAKVBSQAMAQAEAHEgkYABGQAEAAAEAAQBBADAigVQAeAKAHAOQAhBCAjg7QAShtAtBnQAaAQAoADQAhAaAkgfQgUgFgKggQA0g7AxBDQBHgXgVBBQBDgdACAsQAngVAdgYQg5gnBoASQAwAMAcAvQANgjAvANA0bDZIAAAAQhagThogNQhogMhjAmQhiAlhjgRQhqgShsgFQhygFhbAaQgEABgEAC");
	this.shape_273.setTransform(59.6,141.7);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#000000").ss(0.3,1,1).p("ATNkYQAEAJAJAEQANAGANgFQANgFAKgHQAFgEADgEQAFgGACgIQACgMgMgCQgDAAgDAAQgLAAgLACQgMAEgNAFQgLAFgGAHQABAGACAFgATbg2QgCgEAAgGQAAgOABgOQACgNAEgOQADgNgBgOQgBgNgBgOQgBgOgBgOQgBgNgDgOQgEgNgDgOQgDgOgDgLAUTkeQAAANgBAOQgBAMgBAOQgCANgBAOQgBAMgCANQgCAOAAAOQABANABAOQAAANAAAOQABANAAAOQAAAFAAAFQAAABAAABQAAACAAABQADAAACAAQAIAPgPAKQgBABgBAAQANgCANACQANABAOACQANACAPAAQADAAACAAQACABACAAQgMAHgHALQgHAKAIANQAEAHAGADQgGAAgHgCQgOgEgNgCQgNgBgMABATwgnQAIgGAKgIQAFgEAEAAAUHgfQgGAEgEABQAEADAEAEQAKALAIAIQAFAGgBAHQgBAEgCABQACAJADAJQADAMACANQACAOAAAOQAAAOgCANQAAAEgCADQgDAFgJgBQgBAAgBAAQgNgBgOABQgJAAgJgBQgEAAgDAAQgMgBADgIQADgNAAgNQABgNgBgOQAAgOAAgOQgBgOACgNIAAAAQACgCACgDQAHgJAJgKQACABACgEQgDgBgCgCQgEgFgFgDQgIAKgKAJQgJAHgEAHQgBAAgCAAQgOgBgOgBQgOgBgNgBQgOAAgNAAQgOgCgNABQgOABgOgBQgNAAgMAAQgNAAgNAAQgNAAgNAAQgLAAgLAAQgBgBgBgEQgBgBAAgBQgFgMgEgLQgFgPAMgJIAAAAQAMACANADQANADANABQAOAAAOABQANAAAOAAQAOAAAOAAQAOAAAOACQANACANACQAOABANACQAOACANAAQAJAAAFAAQADAAACAAQADAAADgBQgCgBgCgCQgPgJATgHQABgBADACQAIAGAJAIAUPAKQABACACACQAEAHACgDATxgSQAHAHAIAHQAJAFAGAJAVdgaQAEgMAOANQAKAKABAPQABAMgKALQgFAFgIABQgGABgFgEATVD8QAAgEAAgDQgBgOAAgNQAAgOAAgNQAAgOAAgOQAAgLgCgGQADABADAAQAJAAALAAQANAAAOAAQAMAAAJADQAAARADAOQACANABAOQABAOADANQACAKADAKQASgcASAfQALATgFAUQASgLADATQABAFAAAFQAGgbAZALQAFACAEAHQACAFACAFQAVggADAuQABAIAAAIQAXgeAuACQAIAAABALQABAJAAAJQASgmASAeQAWgdAhARQAOAIAGALAT+C3QACANADANQACAFABAGAUrD/QAAACABACQAEANgBAOQgBAOgCAOQgCANgEAMQgRAFgNgCQgNgCgNAAQgBAAgBAAQgPAAgEgOQgEgNABgOQABgOgBgNQAAgLgBgJAQrgaQANAAAMACQAIABAIABAT9gaQgFgGgGgFQgBgBgBgBATbgjQAEADAEADATEAEIAAAAQgCADAAADQgBAEAFABQALABAIgHAT4AfQgBANAAANQAAAJAAAJATZAJQANgBANACQANADAPgDAI1hTQANAEAOADQANADAMACQANADAOAAQANABANACQANACANAAQANAAAOAAQAOAAAOAAQAOAAAOAAQAOAAAOABQANAAAOACQANADAPAAQANAAANgBQANAAAOgCQAOgBAMABQAJABAIADQgGAGgEAGQAAAAAAABQgDAFAAAHQAAAJADAHQACAFADADQABACABABQABAEgBADQgCADgDABQgEABgIgDQgLgEgLABQgOAAgNAAQgNABgMAAQgNABgNgCQgOgBgNgBQgNgBgMgBQgOgCgMgCQgNgCgNgBQgOgCgNgCQgNgBgNgDQgNgBgOgBQgPAAgNACQgOACgNABQgOABgNACQABAGABAFQADASAIAUQAEAJAAALQABAMgCgCQgEABgFAAQgGAAgFgCQgUgHgUADQgQABgQACQgEAAgFAAQALgMAFgSQAEgTADgSQABgKAAgJQgCgBgEAAQgPAAgNABQgOACgOgBQgDADgEACQgHACgBgFQgEgMgBgNQgBgOAFgNQAFgNAAgOQgBgDAAgCQABACACABQAEAGAEAGQAHAMABAOQABANgCANQgBAJgFAGAPcgfQAOADAOACQANABAMgBQAEAAAEAAAPzgUQAMABANAAQAFAAAEAAANEEWQAEgNAOgCQARATAMAQQADgfASgJQAIgDAJACQAGABAHABQAEghARgVQAcAHAJAYQAogRAUghQAWAigIAhQANgXAXAJQAFACADAHQAEAQgBAOQAEgTARAEQAKADABAKQADguAlASQAOAGASgFQANACAHABARZEWQAAAEgBAEATtCrQAAAOAFANQAEANgBANQgBAKACgBATiIBQABgDABgEQABgJABgKQABgOABgNQABgPAFgNQAEgNgCgNQgCgNgFgMQgEgNgEgKQAGAAAHABQAGAAAHACQANADAOABQAEAAADAAQAEAAAEgBQgBANgEANQgFASABAUQABATAAAVQAAAGAAAGQgBAMABALQABAGACAGQABAAABAAQAWAFAZgBQAVAAATgFQARgEASgBQAegBAZAJQAZAKAbAAQAZABAZABQAWAAAWAAATiIBQgBAAgBAAQgNgBgNAAQgcABgbAAQgcAAgcgCQgbgBgbgCQgZgCgZAAQgbABgagEQgZgDgYgFQgbgGgcABQgdABgaAGQgcAFgYABQgdAAgYgGQgagIgcAAQgbAAgbADQAEAPgEAOQgGAAgKgGQgEABgEAAQgJAAgDAEQgNAPgPADQADgPAFgOQACgIACgIQgDAAgBgBQgJACgKABQggAFgjgBQgjgBgigDQgigBgiABQgiABgjABQggAAgggEQghgDgiAAQghAAgiAAQgjAAghAAQgkAAgjAAQgkgBgjAAQghgBgiABQgVAAgVgBQgMAAgLAAQgogCghAHQhKAOhKgHQhOgIhMgJQhMgKhIgEQhBgEgqgOQgHgDgGgDIAAAAQgBAAAAAAQgDAAgDAAQgGABgHABQgKABgMgCQgigDgiAEQghAFgjgEQgigDghAGQgjAGgiAEQggAEghgGQgggGgjACQgiABghADATiIBQgBADgBADQgEAIAAAFQAAADADABQAOAHAFgQQABgDACgDQAFAHAFACQAFACAGgBQAEgCADgCQAAAFAAABQAJACAFgFQAGgEgDgHQgBgCgBgCAKUIlQAWgEAagBQAdgCAYAOQAWANAbgDQAbgCAbgCQAbgBAbACQAaABAZgCQAbgCAcgCQAbgDAbAAQAZAAAVAHAIrJOQAbgDAcgCQAZgDAaABQAbABAZAGQAZAHAaADQAbADAbgDQAbgEAcgCQAagBAbADQAbAFAdgBQAbAAAbADQAbADAcgBQAYgBAHADAS3J4QAWgHAYgGQAbgHAYAGQAJABAIgBAS0JDQAYgCAZgDQAagEAZgFQAhgFASAUARCKNQAcAAAcAAQAbAAAaAAAUAGEQABAOAAAOAUHGRQACAFABAEAVxJbQARAEATABAVcIrQAWgDAXAKAHmkUQgKgEABgHQAAgBAAgCQABgCABgCQAEABAEgEQAJgGAMgEQANgDANgEQANgEANADQAEAAgBAGAHmkUQAFAHAIgDQANgDAMgHQALgGAMgGQALgGAFgJQgBAMgBANQgCANABAOQAAAOgDANQgDANACAOQABAJgBAKQgCAOAFAMQAFANgEANQgEAPAIAMQAGgEAHgFQACADAAAFQACARgMAFQgCAAgCABAIChiQABgIgBgOQAAgOgCgNQgCgOgBgNQgCgNACgNQABgOgCgOQgDgOgHgLQgHgLgFgMAmdDtQALgNAXADQAiAEgJAZQAPgkAxAIQAJAcgIARQAXglAmAXQAIAFgEAPQgIAhgTAZQAWgXAaAIQAGABACAIQACAKgBAIQgCALgGAJAtECZQAIAQAIAKQAdAiAogjQAVAAABAVQA1hGArBJQALASAgAFQA8AJATgVQABgBAAgCQAYgQAaAIQAHABgBAKQgBAKgCAIQADgJAEgFQANgQAXASQABAKAAAIQgBAQgIAJQACgQAHgJAjCFdQAKgOAZAFQAGABADAHQAJAUAFAUQgFgiAVgMQAIgEAJAEQAhAMAFAkQAMgsAjAEQALABAFAIQACAHACAJQAZhFBCAlQAaAOAFAoQAGgoAiABQALAAAIAFQAZAPAGgiQAEgSALgPQAGAHAGAGQANgiAcAIQAMADAIAJQAfgjAggIQAGAQAAAMQAYgtA0ARQAJACABALQABAJgDAFQAigFATgWQADgFAIgBQAAgdgFgWQgFgXgEgaQgCgUADgYQACgUgIgFQAGAAAGgBQAJgBAKgCQAYgEAcAAQADAAADABQAIAVgGAWQgHAZABAdQACAcAEAXQADAWgCAXQgBAFgBAFQgBALABAOQADAXgRABQgIABgMgEQgagIgYgDQgGgIALgQQAKgPgCgXAj7FRQgFAHgGAGAkbHoQgOgBgOgBQgBgBgBAAQABABABAAAIUiVQADANABAOQABAHABAIAH5hXQgDgOAMADAG1hlQgDgCgCgDQAOAGAMAEQAMAEAMAEQAMAFALgEIAAAAAH/hRQgFgBgBgDQAAgBAAgBAH/hRQABAHABAEQgEACgEACQgJAGABAAQAAATAOgKQAFgGAHgHQAGgFAGgDQAFgDAFgBQAGgCAFgCQAFgBAEgCAH/hRQACABACAAQAGABAEABQAEgDAFgDQAEgDAEgCQgNgEgLgDQgCgBgCgBAI1hLQAAgCAAgCQAAgBAAgDAIehZQALgIALgIAIBhGQAFgEAHgEAH/gUQABgLAAgKQAAgFgBgFAIkACQADAOAEALAIQgYQADAUgBATQAAAOgFAGAJIg3QALgBALADQAOACANACQAGAAAEABAJKglQANAAALACQANACALACAI3g2QABAHABAIQABAOACAOAIXhIQALAGALAHQAGAEAEABQgBgKgBgLQgFgCgEgDAIQCDQACAZAEAWAIrB/QACAZgBAZAITEIQABAVAJARAIxEcQABAEACAEAIkEVQABANAEAAAJQEWQAUgVAUATQAGAHAAAJQAAgGACgFQAGgNAWAEQAXADAVALQACABADACQgBANgEAGQgBgLABgLQAAgYACgWQAZgHABAQQAHgRAOgSQAsgGAEApQARghAIArQACAKAAAJQgBAHgBAGAISHtIAAgBQACgQgBgUQgCgbgEgaQgEgbgIgXQgEgDAMgDQABAAAAAAQAbgGAUAKQACABABABQAEADABAFQACAfgDAbQgDAZALANQAHAGgDAHQgDAGgDAQAIZF5QgBALAFAJAIhGEQABAEAFAAAJZILQAdgHAPAOA1vjxQgZAAgkgBQgjgBgfAOQgVAKgJALQAKgkAcgUQAUgPAYgKQAWgJAWAGQgBgQgRgIQgVgLgVgHQgkgNgdALQAVglAzAEQAcACAXAPQAVAMAdAIQgOgjgbgaQgNgOgOgFQgLgEgJgEQAKAAAKABQAnAFAkAPQAPAHAIAMQAEAGgBALQABgIACgHQAFgRAJgPQALgUASgPQAFgFAGgDQgCAFgBAFQgEARgFAQQgFAUgKASQgFAKAKALQAJgOAXgFQBSgSAxA/Qg5gOg5AHQAiACAOAiQAGAOAIARQALAagNgMQgrgmgyAfQAOAHALARQAXAmgUAhQgYgqgpgPQAMAQANARQAUAYgHAjQgCAKgJgBQgZgCgKgVQgOgdgNgXQgDgFgCgEQgCACgBADQgBAAAAABQgJATgGAfQgEAXgBAYQgCAjAFAiQABALAAAMQAAALACAKQADASAIALA1wDGQgBgDAAgCQgHgfgFgjQgDgbgFgZQgFgegCgfQgCghgBgkQAAgkABgfQACgkAIgdQAIgdANgZQALARANAVAv0nIQAGACAHADQAUAKATALQAbAPAVAPQgEgWgLgYQgLgXgPgOQApAMAeAbQAFAEAEAFQAAgEABgEQAFgpgagfQgUgLgMgEQA0gGAyAQQgGgngxgOQgNgDgNgHQA6gMA9ALQgZgtg8AFQgyAEglAkQgFAEgFAAQAAgCAAgCIAAAAQgBgeAAglQAAgBAAAAQgBAAgCABQgmAUgBAqQAAAGAAAGQgCgFgCgFQgNgZgagLQgIgEgKgDQAJAiASAhQAGALACAMQgbglhDAFQgvADgaAbQA8AGA0AkQglAJggAcQgXAVgOAdQgCAFgCAGQAFgEAHgCQAIgDAJABA0alfQgEAFgCAHAylmYQAbgLAXgSQAagSAegIQAVgFATACQAFABAFABQAAgMABgIQAAgIAAgFAwJnQQAHACAIADQADABADACQAAAPgCARQgEAfgEAfQgEAjgFAhQgFAigNAcQgOAcgJAdQgLAhgUATQgUAVgMAbQgMAcgRAcQgQAYgTAXQgVAbgYAXQgVAUgQAYQgSAagRAXQgSAagLAUQAHAUAGARQAGASAJANQAZAGAMAPQgBgZAQAAQATAAAHAOQAJgbARgWQAVgbAXAcQADglAMgcQAXAOAJAPQAGgzArAXQAOASAEAPQAOgjAdAhQAPg8AxAeQAHgNAKgdQAUALAGASQAcgcApAJA1UClQATgTAQgZQASgcANgXQAOgcATgRQAUgTAOgZQANgXATgVQAVgYAQgUQAOgRAUgeQATgeAKggQAIgcALgdQAMgdADgjQACgNAEgNQAJghAFggQACgTAAgTA5fFvQgbgVAagOQAHgEAJgDQAZgIAJAaQAHgaAfAEQALABAIAJQADAFACAFQgCgTANgLQAFgFAFgCQAAgFABgDQABgCABgCQAZgQAXgRQAZgUARgaQAIgLAGgEA1pANQADAiAEAdQAEAhAFAeQADAOACAMQAFATAGAPQAEAJAEAJA16EbQgHAHgDAKQgBgJgDgJQgKgagTARQgaAXgIAeQgDgegRAIA16EbQAFgFAGgEQABAAAAAAQAJgMAGgKQgBgBAAgCQgKgYgGgbA1VEJQgGgEgEgJA1VEJQgLgBgOAKQgFAFgHAEA0lEdQgOgKgPAJQgFgOgJgEQgCgBgDAAA3wFVQABADAAADAu1G8QgEABgDAA");
	this.shape_274.setTransform(75.1,117.5);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#D2F4FF").s().p("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");
	this.shape_275.setTransform(60.4,66.9);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#336600").s().p("AiDEKQgagCgKgVIgbgzIgFgKQgMgVgMgRIg8gBQgjgBggAPQgUAJgKALQAKgjAcgVQAUgPAZgKQAVgIAWAFQgBgQgQgIQgVgLgWgHQgkgMgcALQAUgmAzAEQAcACAYAPQAUANAdAHQgOgigagZQgOgOgOgEIABgHQAnAEAjAPQAQAHAHAKQAFAHgCAKIAEgPQAFgOAIgQQALgUASgPIAIACIgIAhQgGAUgKAQQgFAKAKALQAJgOAXgFQBSgQAvA9Qg2gOg6AHQAiADAPAhIANAfQAMAbgOgMQgrgngxAfQAOAIAKARQAXAlgTAhQgZgqgpgPIAaAhQAUAZgIAiQgBAJgIAAIgBAAgAiQAuQACgHAEgFQgEAFgCAHgADOgrQgTgLgUgJIgNgGIgGgDIgPgFIABgUIAAgNIAAANIgBAUIgKgCQgTgCgVAFQgeAIgZATQgYARgYALIgIgEQANgeAVgVQAhgcAlgJQg1gkg5gGQAagbAsgDQBDgFAcAlQgDgMgFgKQgTghgJgjIATAHQAaAMAMAZIAFAKIAAgMQAAgrAngUIACgBIAAABIABBDIAAAAIABAEQAFAAAEgEQAlgkAygEQA8gFAZAtQg9gLg6AMQANAHAOAEQAwANAGAnQgygQg0AGQAMAEAUALQAaAggFAoIgKgBQgegbgogMQAOAOALAXQALAYAEAWQgVgOgbgQg");
	this.shape_276.setTransform(-41.8,78.8);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#FF0000").s().p("AAAgCIAAACIAAADQAAgDAAgCg");
	this.shape_277.setTransform(26.9,179.3);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#CC9900").s().p("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");
	this.shape_278.setTransform(60.4,205.7);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#339900").s().p("EAhpADBQhjgNhpgGQh1gGgwASIgsAAIgygBQgcAAgYgKQgZgKgeACQgSABgRAEQgTAFgVAAQgZABgWgFIgCAAQgCgGgBgGIgBgXIAAgNIAAgnQgBgUAFgSQADgNABgNIgHABQABgLAHgNQAFgMACgNIADgcQABgOgEgNIgBgEQASgcASAeQALAUgFAUQASgLADATIABAKQAGgbAZALQAFACADAHIAFAKQAUggAEAuIABANQAXgbAuACQAHAAABAKIACARQASgkARAdQAXgcAhARQAOAHAGAJQAchYAXBLQA4guAFA3QAVgUASgmQAEAUANALQAqheAJBrQAngYACA3QAwg0ANAuQAtgzhZAEQAhgkAhgIIALBHQAYgsBYAZQAWAGgIAcQAZgPAXAFIAIAAIAADEIgIAAQgqAGgqAAQgqAAgqgGgAUiCrQgcAAgcgCIg2gDQgZgCgZAAQgbAAgagDQgZgDgYgFQgbgGgdABQgcABgaAGQgcAFgYABQgdAAgYgGQgagIgcAAQgbAAgcADQAEgQADgGQADgHgHgHQgLgMADgZQADgcgCgeQgBgFgEgDQAAgIAEgGQARgCgDgWQgCgOACgMIABgJQAVgVAUATQAGAHAAAJQAAgGACgFQAGgNAWAEQAXADAVAKQAAgYACgWQAZgGABAQQAHgRANgSQAtgHAEAqQARghAIArQACAKAAAJQAEgNAOgCQARATAMAQQADggASgIQAIgDAJACIAMACQAEghASgWQAcAIAJAYQAogSAUggQAWAigIAhQANgYAXAKQAFACACAHQAFAQgBAOQAEgTARAEQAKADABAKQADgvAlATQAOAGASgFIAUADIABAUQABANgBAOQgBAOAEANQAEAOAPAAIACAAQgJAJAJAIIgOgBIAJAXQAFAMACANQACANgEANQgFANgBAOIgCAbIgCAUIgCAHIgCAAQgNgCgOABIg1ABIgBAAgANbggQAEgGABgNIgFgEIAAAXgAPVgxIACgNIgCANgATrg3IABgHIgBAHgAl8CeQhOgIhMgJQhMgKhIgEQhBgEgqgPIgNgFIgBAAIABgBIgIABIgMACQgKAAgNgBQghgDgiAEQghAFgjgEQgigEghAGQgjAHgjAEQgfAEghgGQgggGgjACQgiABghADIAAAAQhagThogNQhogNhjAmQhiAmhjgRQhqgThsgEQhygFhbAaIAAidQBBACAigVQAeALAHANQAhBAAjg5QAShvAtBpQAaAQAoADQAhAYAkgdQgUgFgKgfQA0g+AxBGQBHgXgVA/QBDgcACArQAngTAdgYQg5gnBoASQAwALAcAtQANghAvANQgNAIAAAGQAAAJAOALQgOgLAAgJQAAgGANgIQAHgDAJgDQAZgIAJAYQAHgYAfAEQALABAHAJQAEAEACAFIABAFIgBgFQgDgSAOgLIAKgHQARgIADAeQAIgeAagXQATgRAKAaQADAJABAJQADgKAHgHQAHgEAFgFQAOgKALABIAFABQAJAEAFAOQAPgJAOAJQAZAHAMAPQgBgZAQAAQATAAAHAOQAJgbARgWQAVgbAXAcQADglAMgcQAWAOAKAPQAGgzArAXQAOASAEAOQAOgiAdAhQAPg8AxAeQAHgNAKgdQAUALAGASQAcgcApAIIAAACQAIAQAIAKQAdAhAogiQAVAAABAVQA1hGArBJQALASAgAFQA8AIATgUIABgDQAYgQAaAIQAHABgBAJIgDATQADgJAEgFQANgQAXASQABAKAAAIQgIAJgBAQQAIgKABgPQALgNAWADQAjAEgJAZQAPgkAxAIQAJAcgIARQAXglAlAXQAJAFgEAPQgJAhgSAZIgLALIALgLQAWgXAaAHQAGACACAIQACAJgBAHQgCALgGAJQAGgJACgLQAKgNAZAGQAGAAADAGQAHAUAFAUQgFgiAVgMQAHgCAKACQAhAMAFAkQAMgsAjAEQALABAFAIQAEAHACAIQAZhCBCAiQAaAPAFAoQAGgoAiABQALAAAHAFQAaAPAGgiQADgRAMgOIAMANQANgjAcAJQAMADAIAJQAfgjAggIQAGAQAAAMQAYgtA0AQQAJADABAKQABAKgDAFQAigFASgXQAEgEAIgCQACAYgKAPQgLAQAGAIIAQAWIgBAAQgMADAEADQAIAXAEAbQADAaADAbQABAUgCAQIAAABIgFgCIgSAEQggAFgjgBIhFgEQgigCgiABIhFADQgggBgggDQghgDgiAAIhDAAIhGAAIhHAAIhFgBIhDAAQgVAAgVgBIgcgDIgCAAIACABIAFACQgogCghAHQgyAKgyAAQgYAAgYgDg");
	this.shape_279.setTransform(60.4,151.7);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#FFFFFF").s().p("AGLA+IgCgEQgGgJgJgHIgQgOIgEgDIgKgIIAKAIIAEADQAAABgBABQAAAAgBABQAAAAgBAAQAAAAgBAAIgQAVIgEAFQgIAHgKgBQgGgBABgEIACgGIAAAAQAEgJAJgHQALgJAHgKIgHgGIgEgDQgPgIASgGQABAAAAAAQAAAAABAAQAAAAABAAQABABAAAAIARAMIADACIALALIgLgLIgDgCIASgMQAFgEAFAAIAEAAQAIANgPAKIgCABQgFAEgEABIAHAHIATAVQAFAGgCAHQgBAEgBABIgCABQgCAAgDgFgAFqAcIAAAAgAmUgMQgBAAAKgGIAHgEIAMgIIAKgGIAHgFIAWgQIANgJQADADAAAFQABARgMAFIgEABIgIADIgLAEIgKAEQgHADgFAFIgNANQgEADgDAAQgHAAAAgMgAlXgLIgWgNIAKgEIALgEIAJAFIACAVIgKgFgAmBggIgFgBQgEgBgBgDIAAgCQgEgOANADIAEACIAXAHIgHAFIgKAGIgJgCg");
	this.shape_280.setTransform(165.3,112.7);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#996633").s().p("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AKgLAJQgJAHgEAJIgDAAgAB+iFIACAAIADAAIAKAAIgKAAIgDAAIgCAAIAAAAIgBAAIgSAAIgBgBIABABIASAAIABAAIAAAAgAC8iKIAPACIgPgCIgDAAIgKgBIgBAAIgKgBIgBAAIAAAAIAAAAIABAAIAKABIABAAIAKABIADAAgACAiLIAJgBIAHAAIgHAAIgJABIAAAAIgBAAIgLgBIgFAAQgOgCgNgDQANADAOACIAFAAIALABIABAAIAAAAgAnFiFQAEgFABgKQACgNAAgNQgCgOgHgMIgIgMIgDgDIgFgFIAaAKIAYAIQANAFAKgEIABACQABADAEABIACALIgCgLIAEABIAKACIgMAIIgIAEQgJAGABAAQAAATAOgKIABAKIAAAEIAAARIgHgBQgOAAgOABIgOABIgNAAgAFWinQAAAAgBgBQgBAAAAAAQgBAAAAAAQAAAAgBAAQgBgEgBgGQAAgOACgOQABgNAEgOQADgNgBgOIgCgbIgCgcQgBgNgDgOIgHgbIgGgZQAFAJAJAEQANAGAMgFQANgFALgHQAEgEAEgEIgCAbIgCAaIgCAbIgEAZQgCAOABAOIABAbIABAbIAAAbIAAAKIAAACIABADQgFAAgFAEIgSAOIgRgOgAmAjSIgEgCIAAgWQgBgOgCgNIgDgbQgBgNABgNQACgOgDgOQgDgOgHgLQgHgLgFgMQAFAHAJgDQAMgDAMgHIAXgMQAMgGAEgJIgCAZIgBAbQABAOgEANQgDANACAOQABAJgBAKQgBAOAEAMQAFANgEANQgDAPAHAMIgWAQIgXgHgAlujsIACAPIgCgPIgFgbIAFAbg");
	this.shape_281.setTransform(165.5,128.9);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#993333").s().p("AVHGgQgNgCgOgCIgNgCQgJgIAJgLQAOAAAMACQAOACAQgFQgHAPgBALIgCAAIgGAAgAJqGSQgUgKgbAGIgQgYQAYADAaAIQANAEAIgBQgFAIABAIIgEgCgA2qFjIACgIIABgEQAZgQAXgRQAagUAQgaQAIgLAGgEIgBgFQgHgfgFgjQgDgbgEgZQgGgegCgfIgDhFQAAgkABgfQADgkAHgdQAIgdANgZQAMARAMAVIgDAFIgBABQgJATgGAfQgEAWgBAZQgCAjAFAgIACAXQAAANACAKQACAiAEAdIAKA/IAFAaQAEATAGAPIAIASIgIgSQgGgPgEgTQATgTAQgZQARgcANgXQAOgcATgRQAUgTAPgbQAMgXAUgTIAlgsQANgRAUgeQAUgeAKggQAIgcALgdQALgdAEgjQABgNAEgNQAJghAFggQADgTgBgTIAKACIAPAFIAGADQAAAPgCARIgIA+IgJBEQgFAigNAcQgOAcgJAdQgLAhgTATQgUAVgMAbQgMAagSAcQgPAagUAXQgVAbgYAXQgUAUgRAYIgiAxQgSAagMAUIAOAlQAFASAJANQgOgKgPAJQgFgOgJgEIgFgBQgGgEgEgJIgBgDQgKgYgGgbQAGAbAKAYIABADQgGAKgJAMIAAAAQgHAEgFAFQgGAHgEAKQAAgJgEgJQgJgagTARQgbAXgIAeQgCgegSAIgA0uEvIAAAAgAU4DGIgbAAIgUAAQABgJAMgMIATABIAaAAIACAAQAEAIAEAPQgIgDgNAAgAIiB1IAfgDQAUgDAUAHQAGACAGAAIADAPQgcAAgXAEIgUADQgJgHgGgSgAWKBNQgFgDgFgHQgHgNAHgMQAHgLALgHIgEgBQAEgMAOANQAKAKABAPQABAOgJALQgFAFgJABIgCAAQgFAAgEgDgAPsAtIgBgDQgEgDgCgFQgDgHAAgJQAAgHADgFIAAgBQAPgQAOAHIgBAAQgMAHAFAPIAJAXQgGAFgJAAIgIgBgAHkAgQgEgMgBgNQgBgMAEgNQAFgNAAgOIACgCIAIAMQAHAMABAOQABALgCANQgBAJgEAGQgDADgFACIgEAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQAAgBAAgBgAUMjYQgJgEgFgJIgDgLQAHgHALgFQANgFALgEQALgCALAAIAGAAQANACgDAMQgCAIgEAGQgEAEgEAEQgLAHgNAFQgGACgFAAQgHAAgHgDgAIXjhQgJgEAAgHIABgDIABgEQAEABAFgEQAIgGAMgEIAagHQANgEANADQAFAAgCAGQgEAJgMAGIgXAMQgMAHgNADIgEABQgGAAgDgFg");
	this.shape_282.setTransform(70.1,112.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272}]}).wait(381));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-174.6,-25.4,471.9,279);


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
(lib.com_scene1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene1:0,scene1repeat:356});

	// timeline functions:
	this.frame_0 = function() {
		this.btn_menu.addEventListener("click", openMenu.bind(this));
		this.btn_goNext.addEventListener("click", openNext.bind(this));
		this.btn_goBack.addEventListener("click", openPrev.bind(this));
		
		
		function openMenu(){
		
		 window.open ("../menu/menu.html","_self");
		}
		
		
		function openNext(){
		
		 window.open ("com_scene2.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("com_scene01.html","_self");
		}
	}
	this.frame_368 = function() {
		this.gotoAndPlay("scene1repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(368).call(this.frame_368).wait(1));

	// Layer 2
	this.instance = new lib.scene1();
	this.instance.setTransform(294.4,135.5,1,1,0,0,0,77.5,67.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(369));

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
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("EAkZAVeMhIxAAAMAAAgq7MBIxAAAg");
	this.shape.setTransform(277,181.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#33CCFF").s().p("EgkYAVeMAAAgq7MBIxAAAMAAAAq7g");
	this.shape_1.setTransform(277,181.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.btn_goNext},{t:this.btn_goBack},{t:this.instance_1},{t:this.btn_menu}]}).wait(369));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(284.2,201.8,537.1,401.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;