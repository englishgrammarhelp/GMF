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
		{src:"sounds/anobjectivecomplementisthesecond.mp3", id:"anobjectivecomplementisthesecond"},
		{src:"sounds/wrong_answer.mp3", id:"wrong_answer"},
		{src:"sounds/High_Screaming_Gtr.mp3", id:"High_Screaming_Gtr"},
		{src:"sounds/right_answer.mp3", id:"right_answer"},
		{src:"sounds/SalsaGroove.mp3", id:"SalsaGroove"}
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



(lib.Tween43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGAGQgEgCgBgEQABgCAEgDQADgDADgBQAFAAAEAEQACADAAACQAAAEgDACQgDADgFAAQgDAAgDgDg");
	this.shape.setTransform(182.5,27.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009900").s().p("AgmAvQgJgHAAgJQAAgEADgDQACgEAFAAQAHAAADAHQAEAKAPgBQAKAAAMgFQAMgGAAgHQAAgJgHgCQgGgDgOAAQgNAAgKgEQgNgFAAgLQAAgOAPgNQAPgLAQAAQAIgBAKAEQANAEAAAFQAAAEgCADQgDAEgFgBIgKgBIgLgBQgJAAgHAEQgIAFAAAFQAAACACACIAIADIARABQAQABAKAIQAKAHAAAPQAAAUgVAJQgRAHgTAAQgTAAgKgIg");
	this.shape_1.setTransform(174.1,22.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009900").s().p("AgFA1QgEgDAAgEIABgDIAAgEIgBgKIAAgKIgCgZIgCgaIgDAAQgRAAgJgDQgJgCAAgHQAAgEADgDQADgEAFABIAMABIAMABIANAAIALAAIARAAIARABQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAIgSgBIgSgBIACAeIACAcIAAAHIABAIQAAAFgDAFQgDAFgFAAQgCAAgDgCg");
	this.shape_2.setTransform(163.7,22.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#009900").s().p("AgyA4QgDgDAAgEIABgJIAAgJIAAgNIABgNIgBgMIAAgOIgBgNIgBgNQAAgEAEgEQAEgDAFAAQAFAAAHAJQAfAvAgAcIAAgLIAAguIgBgIIgBgIQAAgKALAAQAMAAAAAkIgBAMIAAAsIgBAMQgCAJgJAAQgFAAgGgGQgdgZghgsIgBAWIABARIAAARQAAAWgLAAQgFAAgDgDg");
	this.shape_3.setTransform(152.4,22.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#009900").s().p("AghA3QgIgHAAgXIACgcIABgeIgBgHIAAgHQAAgMAKAAQADAAADACIAQgDIAMgBQATAAALAEQAHADAAAHQAAAEgDACQgDAEgFAAIgDgBQgLgDgMAAIgJABIgOADIgBAdIAbgDIASgCQAEAAADADQADADAAAFQAAAGgJABIgRACIgeACIAAAQQAAAOABACQABABAJAAIALAAIAOAAIAEgBIAFAAQAEAAADACQADADAAAFQAAAHgIADQgIABgVAAQgYAAgHgHg");
	this.shape_4.setTransform(141.8,22.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#009900").s().p("AAnAvIgEgRQgEgOgEgWIgKAdIgFANQgCAIgDAFQgFAHgFAAQgGAAgEgIIgEgOIgKglIgJAiIgDAQQgDALgJAAQgEAAgDgEQgCgDgBgEQAAgMAGgRIAHgaIAFgXQADgPAEgFQAEgGAGAAQAGAAAEAHQACAHAEATQADATAHAUQAFgTAIgaIAEgRQAEgLAIAAQAIAAAEANIAEASQADAdAHAWIAHAZQAAAEgEADQgDADgEAAQgIAAgEgMg");
	this.shape_5.setTransform(130.4,22.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#009900").s().p("AghA3QgIgHAAgXIACgcIABgeIgBgHIAAgHQAAgMAKAAQADAAADACIAQgDIAMgBQATAAALAEQAHADAAAHQAAAEgDACQgDAEgFAAIgDgBQgLgDgMAAIgJABIgOADIgBAdIAbgDIASgCQAEAAADADQADADAAAFQAAAGgJABIgRACIgeACIAAAQQAAAOABACQABABAJAAIALAAIAOAAIAEgBIAFAAQAEAAADACQADADAAAFQAAAHgIADQgIABgVAAQgYAAgHgHg");
	this.shape_6.setTransform(119.2,22.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#009900").s().p("AgmArIACgWQACgfAAgmQAAgFADgCQADgDAEAAQAEAAAEADQADACAAAFQgBAngBAfIgCASQARgBAagIIADAAQAEgBADAEQACADAAAEQABAGgHADQgIADgTAEQgOADgLAAQgSgBAAgQg");
	this.shape_7.setTransform(110.4,22.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#009900").s().p("AggA3QgDgDAAgDIAAgVIACgfIACgjQAAgSAKAAIAHAAIALgBQAMAAANAJQANALAAAPQAAASgOAJQgOAKgQAAIgGAAIAAAiQAAADgDADQgDADgEAAQgEAAgDgDgAgMgcIgBAaIAEAAQAJAAAIgFQAJgGgBgJQAAgHgIgFQgGgEgHAAIgEAAIgDAAIAAAKg");
	this.shape_8.setTransform(102.1,22.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#009900").s().p("AAnAvIgEgRQgEgOgEgWIgLAdIgEANQgDAIgCAFQgFAHgEAAQgHAAgEgIIgEgOIgKglIgJAiIgDAQQgDALgJAAQgFAAgCgEQgDgDAAgEQABgMAFgRIAIgaIAEgXQADgPAEgFQAEgGAFAAQAIAAACAHQADAHAEATQADATAGAUQAHgTAHgaIAEgRQAEgLAIAAQAIAAAEANIADASQAFAdAGAWIAGAZQAAAEgCADQgEADgEAAQgIAAgEgMg");
	this.shape_9.setTransform(91.6,22.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#009900").s().p("AgmAtQgQgOAAgVQAAgXAQgUQARgXAZAAQAZAAANAMQANALAAAYQAAAXgOAUQgRAXgZAAQgVAAgQgMgAgWgVQgLAPAAAQQAAAMAJAIQAJAHAOAAQAOAAALgPQAKgPAAgQQAAgQgHgGQgGgFgRAAQgOAAgMAPg");
	this.shape_10.setTransform(78.8,22.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#009900").s().p("AgfAsQgLgMAAgPQAAgXAVgZQATgWARAAIAGAAIAEABQADgDAFAAQAHAAACAIIABAPQAAADgCADQgDAEgFAAQgGAAgEgHQgBgDgCgBIgFAAQgKAAgKAOQgRATAAARQAAAIAGAFQAFAGAIAAQAFAAAHgEIALgHQAGgEADAAQAEAAAEAEQACADAAADQAAAFgDADQgVARgSAAQgRAAgLgMg");
	this.shape_11.setTransform(68.2,22.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#009900").s().p("AghA3QgIgHAAgXIACgcIABgeIgBgHIAAgHQAAgMAKAAQADAAADACIAQgDIAMgBQATAAALAEQAHADAAAHQAAAEgDACQgDAEgFAAIgDgBQgLgDgMAAIgJABIgOADIgBAdIAbgDIASgCQAEAAADADQADADAAAFQAAAGgJABIgRACIgeACIAAAQQAAAOABACQABABAJAAIALAAIAOAAIAEgBIAFAAQAEAAADACQADADAAAFQAAAHgIADQgIABgVAAQgYAAgHgHg");
	this.shape_12.setTransform(52.6,22.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#009900").s().p("AgFA1QgEgDAAgEIABgDIAAgEIgBgKIAAgKIgCgZIgCgaIgDAAQgRAAgJgDQgJgCAAgHQAAgEADgDQADgEAFABIAMABIAMABIANAAIALAAIARAAIARABQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAIgSgBIgSgBIACAeIACAcIAAAHIABAIQAAAFgDAFQgDAFgFAAQgCAAgDgCg");
	this.shape_13.setTransform(42.5,22.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#009900").s().p("AAlA3QgGAAgGgOQgEgIgDgMIgRACIgQACIgMAYQgDAFgGAAQgEAAgDgCQgDgDAAgEQAAgEALgWIgBgEQAAgDAHgCIAXgkQAQgcAFAAQAIAAACAKIAFAYIALAuIAEAKQACAGAAADQAAAEgDADQgDADgDAAIgBAAgAgEAHIAIgCIAKAAIgFgXIgNAZg");
	this.shape_14.setTransform(31.7,22.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#009900").s().p("AgfAsQgLgMAAgPQAAgXAVgZQATgWARAAIAGAAIAEABQADgDAFAAQAHAAACAIIABAPQAAADgCADQgDAEgFAAQgGAAgEgHQgBgDgCgBIgFAAQgKAAgKAOQgRATAAARQAAAIAGAFQAFAGAIAAQAFAAAHgEIALgHQAGgEADAAQAEAAAEAEQACADAAADQAAAFgDADQgVARgSAAQgRAAgLgMg");
	this.shape_15.setTransform(21.7,22.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#009900").s().p("AghA1QgDgDAAgEQAAgFADgDQADgCAFAAIAOgBIAAghQAAgTABgRIgQAAQgEAAgDgDQgDgDAAgEQAAgEADgDQACgDAEAAIAWgBQAMABAWADQAIABAAAJQAAAFgDACQgDACgDABIgUgCIgBAhIAAAhIAUAAQAFAAADADQACACAAAFQAAAEgDADQgDADgEAAIgNAAIgMAAIgNACIgPABQgEgBgDgCg");
	this.shape_16.setTransform(12.8,22.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#009900").s().p("AgWA6QgIgBgFgEQgEAAgDgCQgDgDAAgEIABgWIAAgWIAAgXIAAgYQAAgEADgEQAEgEAFAAQACAAAKAEIANAGQAUAHAPAPQASARAAATQAAANgGALQgGAMgLAHQgMAIgUAAQgGAAgHgCgAgYAlIAHACIAIABQAOAAAGgEQAHgEADgHQAFgIAAgHQgBgRgUgNQgGgEgXgKg");
	this.shape_17.setTransform(3.6,22.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#009900").s().p("AghA3QgIgHAAgXIACgcIABgeIgBgHIAAgHQAAgMAKAAQADAAADACIAQgDIAMgBQATAAALAEQAHADAAAHQAAAEgDACQgDAEgFAAIgDgBQgLgDgMAAIgJABIgOADIgBAdIAbgDIASgCQAEAAADADQADADAAAFQAAAGgJABIgRACIgeACIAAAQQAAAOABACQABABAJAAIALAAIAOAAIAEgBIAFAAQAEAAADACQADADAAAFQAAAHgIADQgIABgVAAQgYAAgHgHg");
	this.shape_18.setTransform(-6.5,22.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#009900").s().p("AgnA2QgDgCAAgFIABgQIAAgRIAAg5QAAgEADgEQAEgFAGAAIASACQAKABAGAEQAfAPAAAYQAAAJgGAGQgHAHgNAFQATALAKALQADADAAAEQAAAEgDADQgEADgEAAQgEAAgDgDQgWgVgZgIIABAXQAAAFgDACQgDADgEAAQgFAAgDgDgAgVACIADAAQASAAAHgDIAGgFQADgDAAgBQAAgJgKgHQgIgHgLgCIgIAAg");
	this.shape_19.setTransform(-16.1,22.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#009900").s().p("AggA3QgCgDgBgDIAAgVIACgfIACgjQgBgSALAAIAHAAIALgBQAMAAANAJQAOALgBAPQABASgPAJQgNAKgRAAIgGAAIgBAiQAAADgCADQgDADgEAAQgEAAgDgDgAgMgcIgBAaIAEAAQAJAAAIgFQAIgGAAgJQABgHgJgFQgGgEgHAAIgEAAIgDAAIAAAKg");
	this.shape_20.setTransform(-25,22.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgWAeQgLgKgBgRQAAgOAJgNQALgPASAAQAPAAAJAMQAHALAAAPQAAAPgJAMQgKAOgQAAQgNAAgJgKgAgJgLQgEAHAAAHQAAAJAFAFQAEADAEAAQAFAAAFgEQAFgFABgJQABgVgOAAQgHAAgFAIg");
	this.shape_21.setTransform(-39.6,24.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AACAXQgCgHAAgRIgCADIgMAcQgBADgCACQgDAFgGAAQgDAAgFgGQgEgHgCgKIgHglIgBgKQAAgEADgDQADgCAFAAQAHgBACAIIACAKIABALIADAQIANgjQADgJAGAAQAIAAACAKIAEATIAEATIALgrQACgFAHAAQAFAAADACQADADAAAEIAAACQgIAcgIAWQgCAHgFAGQgEAGgGAAQgJgBgFgRg");
	this.shape_22.setTransform(-48.5,24.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgFAyQgEgCAAgEIABgIIAAgHIgBgkIgOgCQgJgBAAgJQAAgDACgDQADgDAFAAIAMAAIAAgHIgBgHQAAgFADgCQADgDAFAAQAIAAAAATIAAAFIAIAAIALABQAGACAAAHQAAAEgDADQgDADgEAAIgEAAIgDAAIgHAAIABAlIAAADIAAAFQAAAQgKAAQgCAAgDgDg");
	this.shape_23.setTransform(-57.2,23.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgNA9QgDgCAAgEIAAgCQACgLAAgJIAAgiIgFAAIgEAAQgEAAgDgCQgDgDAAgEQAAgHAHgCIANgBIABgJQACgQAHgIQAGgKASAAQANAAAAAKQAAAJgMAAQgJAAgEAGQgDAFgBAKIAAACIAOgBQANAAAAAKQAAAJgOAAIgOAAIAAASIAAAUQAAANgCAIQgCAIgGAAQgEAAgDgDg");
	this.shape_24.setTransform(-71.1,22.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgWAeQgLgKgBgRQAAgOAJgNQALgPASAAQAPAAAJAMQAHALAAAPQAAAPgJAMQgKAOgQAAQgNAAgJgKgAgJgLQgEAHAAAHQAAAJAFAFQAEADAEAAQAFAAAFgEQAFgFABgJQABgVgOAAQgHAAgFAIg");
	this.shape_25.setTransform(-78.9,24.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAUA2QgFAEgGABIgJABQgQgBgLgKQgLgLAAgQQAAgUALgKQAMgMAPAAQAGgBAEACQAEABADACQABgYACgKQABgJAJABQADAAADACQADADAAAEIgBAgIgDAeQAAAaADAJIAAACQgBAEgDADQgDACgDABQgFAAgDgGgAgNADQgGAGAAANQAAAHAGAGQAGAFAHABQAEgBADgBIAHgFIACgCIAAgbQgDgEgDgBQgEgCgGAAQgIAAgFAFg");
	this.shape_26.setTransform(-93.7,22.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAOAhIgCgPIgBgPIABgFIAAgGIAAgDIAAgDQAAgGgDAAQgGAAgEAIQgGAIgEAKIAAAHIgBAHIAAAGIgBAGQAAAEgCAEQgDACgFAAQgEAAgDgCQgDgEAAgEIAAgGIgBgGIABgUIABgSIAAgGIAAgHQAAgFADgDQADgCAEAAQAKAAAAALIAAABQALgLAKABQAOAAAFALQAEAIAAAQIAAAEIgBAEQAAAFACAJIACAOQAAAFgDADQgDACgFAAQgJAAgBgJg");
	this.shape_27.setTransform(-101.9,24.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgWAeQgLgKgBgRQAAgOAJgNQALgPASAAQAPAAAJAMQAHALAAAPQAAAPgJAMQgKAOgQAAQgNAAgJgKgAgJgLQgEAHAAAHQAAAJAFAFQAEADAEAAQAFAAAFgEQAFgFABgJQABgVgOAAQgHAAgFAIg");
	this.shape_28.setTransform(-110,24.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgWAgQgLgKAAgQQAAgMAKgQQAMgSANAAQAIAAAKAEQANAGAAAGQAAAEgDADQgCADgFAAQgDAAgEgEQgFgDgJAAQgDAAgHALQgGAKAAAGQAAAIAFAEQAGAEAGAAQAFAAAHgDIAJgEQAEAAADADQADADAAADQAAAGgMAGQgMAFgHAAQgOAAgLgJg");
	this.shape_29.setTransform(-117.8,24.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgYAfQgMgJAAgRQAAgRAJgMQAMgOAQgBQANAAAIAFQALAFAAALQAAAJgJAGQgEACgNAEIgWALQADAEAFACQAGACAEgBQAKAAAGgDQAGgEAFAAQAHAAAAAHQAAAJgNAFQgKAEgLABQgPgBgMgIgAgJgQQgFAEgDAJIARgHQAIgEAGgEQgFgDgIAAQgFAAgFAFg");
	this.shape_30.setTransform(-125.8,24.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgTAmQgLgEAAgIQAAgIAIAAIAKACIAKACQANAAAAgGQAAgDgLgFQgNgGgEgCQgKgHAAgKQAAgPAPgFQAKgDAQAAQAIAAADACQAFADAAAGQAAAOgHAAQgHAAgCgGIgGgBQgQAAAAAFQAAADAJAFQAPAGAFADQAKAHAAAJQAAANgLAGQgKAGgMAAQgJAAgIgDg");
	this.shape_31.setTransform(-133.6,24.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgYAfQgMgJAAgRQAAgRAJgMQAMgOAQgBQAMAAAJAFQALAFAAALQAAAJgJAGQgEACgNAEIgWALQADAEAGACQAFACAEgBQAJAAAIgDQAGgEAEAAQAHAAAAAHQAAAJgNAFQgJAEgMABQgQgBgLgIgAgJgQQgEAEgDAJIAQgHQAIgEAFgEQgEgDgIAAQgFAAgFAFg");
	this.shape_32.setTransform(-148,24.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AARA1QgCgGgCgLIgBgQIAAgGIAAgGIAAgGQAAgCgDAAQgJAAgEAFQgEAEgFALQAAAagDAGQgDAGgGAAQgEAAgDgDQgEgCAAgFIABgEIABgUIAAguIAAgDIABgMIgBgGIgBgHQAAgEADgCQADgDAFAAQAHAAACAHQACAFAAAJIgBAPIAAAOQAFgGAGgCQAFgCAHgBQAMAAAGAIQAEAFABAJIAAASIACAOIACAPIABACQAAAEgDADQgEADgEgBQgHAAgCgHg");
	this.shape_33.setTransform(-156.3,22.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgFAyQgEgCAAgEIABgIIAAgHIgBgkIgOgCQgJgBAAgJQAAgDACgDQADgDAFAAIAMAAIAAgHIgBgHQAAgFADgCQADgDAFAAQAIAAAAATIAAAFIAIAAIALABQAGACAAAHQAAAEgDADQgDADgEAAIgEAAIgDAAIgHAAIABAlIAAADIAAAFQAAAQgKAAQgCAAgDgDg");
	this.shape_34.setTransform(-164.2,23.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgTAmQgLgEAAgIQAAgIAIAAIAKACIAKACQANAAAAgGQAAgDgLgFQgNgGgEgCQgKgHAAgKQAAgPAPgFQAKgDAQAAQAIAAADACQAFADAAAGQAAAOgHAAQgHAAgCgGIgGgBQgQAAAAAFQAAADAJAFQAPAGAFADQAKAHAAAJQAAANgLAGQgKAGgMAAQgJAAgIgDg");
	this.shape_35.setTransform(-178,24.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgIA1QgDgDAAgEIAAgOIAAgNIABgQIAAgPQAAgEADgDQADgDAEAAQADAAADADQADADAAAEIgBAPIgBAQIAAANIABAOQAAAEgDADQgDACgCAAQgFAAgDgCgAgFgkQgEgDAAgFQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_36.setTransform(-183.5,22.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#00E600").s().p("AgNBqQgGgFgBgJIABgGIABgHIgBgUIgBgVQAAgTgDggIgFg1IgHAAQggAAgUgFQgQgEAAgPQAAgHAFgGQAHgHAJAAIAYADIAXABIAbAAIAYAAIAiABIAiACQAIAAAGAGQAGAFAAAJQAAAIgGAGQgGAGgIAAIgkgCQgYgCgMABIAEA7QADAkAAAWIABAPIABAOQAAALgFAJQgGALgKAAQgGAAgHgFg");
	this.shape_37.setTransform(215.2,-10.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#00E600").s().p("AhmBwQgGgGABgIIABgSIABgRIAAgaIABgaIgBgaIAAgcIgCgaIgCgaQAAgJAIgHQAHgHAKAAQALAAANATQBABfBBA6IABgXQAAhGgCgZIgCgQIgCgQQAAgUAWAAQAYAAAABJIgBAYIAABaQgBAIgCAPQgDATgTAAQgKAAgMgLQg5gzhEhaIgCAtIABAjIABAjQAAArgWAAQgLAAgGgHg");
	this.shape_38.setTransform(192.4,-10.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#00E600").s().p("AhDBvQgQgOAAgvQAAgUADglQADgnAAgUIgCgPIgBgPQAAgXAUAAQAHAAAFAEQARgEAQgCQAPgCALAAQAlAAAWAIQAOAFAAAOQAAAHgFAGQgGAHgJAAIgGgBQgYgGgXAAIgVABIgbAGIgBA6IA3gGIAjgDQAJAAAGAGQAGAFAAAJQAAAQgSACIgjADIg9AGIgBAeQAAAdADAEQACABARAAIAZAAIAcAAIAIgBIAJgBQAIAAAGAFQAHAFAAAKQAAAQgRADQgPADgsAAQgwAAgOgNg");
	this.shape_39.setTransform(171.2,-10.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#00E600").s().p("ABPBfIgIgjQgIgbgIgvIgVA8IgJAaQgFAQgHALQgHANgMAAQgOAAgHgQIgIgbQgMgmgJgnIgTBGIgFAhQgGAUgQAAQgKAAgGgGQgFgGAAgIQAAgYAKgiIAQg3IAJgtQAHgfAIgKQAHgLAMAAQANAAAHAOQAFAMAHAoQAGAmANAqQAPgpAOg0IAJgiQAHgVARAAQAQAAAHAYQAEAKAEAbQAIA8ANAtQANAtAAAEQAAAJgHAGQgGAFgJAAQgPAAgIgXg");
	this.shape_40.setTransform(148.4,-9.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#00E600").s().p("AhDBvQgQgOAAgvQAAgUADglQADgnAAgUIgCgPIgBgPQAAgXAUAAQAHAAAFAEQARgEAQgCQAPgCALAAQAlAAAWAIQAOAFAAAOQAAAHgFAGQgGAHgJAAIgGgBQgYgGgXAAIgVABIgbAGIgBA6IA3gGIAjgDQAJAAAGAGQAGAFAAAJQAAAQgSACIgjADIg9AGIgBAeQAAAdADAEQACABARAAIAZAAIAcAAIAIgBIAJgBQAIAAAGAFQAHAFAAAKQAAAQgRADQgPADgsAAQgwAAgOgNg");
	this.shape_41.setTransform(126,-10.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#00E600").s().p("AhNBYIADgvQAEg9AAhOQAAgIAGgGQAFgGAJAAQAJAAAGAGQAGAGAAAIQAABOgEBAIgDAkQAjgBA0gQIAHgBQAJAAAGAGQAFAGAAAIQAAAMgNAGQgRAIglAGQgfAFgVAAQgkAAAAgfg");
	this.shape_42.setTransform(108.4,-9.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#00E600").s().p("AhBBvQgGgGAAgIIAAgoQAAgXADgrQADgtAAgWQABgmAUABQAFgBAKgBIAUAAQAbAAAZASQAcAVAAAeQAAAlgdAVQgbATgiAAIgMgBIgBBDQAAAIgGAGQgFAFgIAAQgJAAgFgFgAgag4IgDAyIAKABQAVAAAPgKQAQgMAAgTQAAgNgPgJQgPgKgPAAIgIABIgGAAIAAAVg");
	this.shape_43.setTransform(91.8,-10.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#00E600").s().p("ABPBfIgIgjQgIgbgIgvIgVA8IgJAaQgFAQgGALQgIANgMAAQgOAAgHgQIgIgbQgMgmgJgnIgSBGIgGAhQgGAUgQAAQgKAAgGgGQgFgGAAgIQAAgYAKgiIAQg3IAJgtQAGgfAJgKQAHgLAMAAQANAAAGAOQAGAMAHAoQAGAmANAqQAPgpAOg0IAJgiQAHgVARAAQAQAAAHAYQAEAKAEAbQAIA8ANAtQANAtAAAEQAAAJgHAGQgHAFgIAAQgPAAgIgXg");
	this.shape_44.setTransform(70.7,-9.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#00E600").s().p("AhNBaQgggbAAgqQAAgwAfgpQAjguAzAAQAzAAAaAXQAZAYAAAvQAAAwgdAoQghAvgzAAQgrAAgfgZgAgugqQgWAdAAAiQAAAYATAPQASAPAcAAQAeAAAWggQATgdAAgiQAAgfgNgMQgOgLghAAQgfAAgXAgg");
	this.shape_45.setTransform(45.2,-9.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#00E600").s().p("AhABZQgWgXAAggQAAgvArgzQAkgrAlAAIALAAIAJABQAHgGAJAAQAPAAADARQADANAAAQQAAAHgEAGQgGAIgLAAQgNAAgGgOQgDgGgDgCQgCgBgJAAQgTAAgWAdQgiAnAAAiQAAAQALAMQAKALAPAAQANAAAPgIQAFgCARgMQAMgIAFAAQAJAAAGAHQAGAGAAAIQAAAIgIAHQgoAigoAAQghAAgWgYg");
	this.shape_46.setTransform(24.1,-10.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#00E600").s().p("AhDBvQgQgOAAgvQAAgUADglQADgnAAgUIgCgPIgBgPQAAgXAUAAQAHAAAFAEQARgEAQgCQAPgCALAAQAlAAAWAIQAOAFAAAOQAAAHgFAGQgGAHgJAAIgGgBQgYgGgXAAIgVABIgbAGIgBA6IA3gGIAjgDQAJAAAGAGQAGAFAAAJQAAAQgSACIgjADIg9AGIgBAeQAAAdADAEQACABARAAIAZAAIAcAAIAIgBIAJgBQAIAAAGAFQAHAFAAAKQAAAQgRADQgPADgsAAQgwAAgOgNg");
	this.shape_47.setTransform(-7.3,-10.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#00E600").s().p("AgfBnQgSgqgWhPIgMgnQgIgcAAgKQAAgJAHgGQAFgFAJAAQAOAAAGAOIAFAaIAPAvQALAoAKAgIAghWIAOgjQAIgVAKgLQAHgIAJAAQAIAAAGAGQAHAGAAAIQAAAGgEAGQgIALgGARIgMAcIgnBkQgHARgKASQgFAMgLAAQgPAAgGgPg");
	this.shape_48.setTransform(-27,-9.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#00E600").s().p("AhEBqQgGgGAAgIQAAgIAGgGQAGgGAKAAIAcgCIgBhDQAAglADglIgfABQgJAAgGgFQgGgGAAgJQAAgIAGgGQAFgFAHAAQANgCAfAAQAaAAAsAHQARACAAASQAAAJgHAGQgFAEgHAAIgngEQgCAbAAArIAABBIAoAAQAIAAAGAGQAGAGAAAIQAAAIgGAGQgGAGgJAAIgZAAIgZAAQgIAAgUADQgUADgJAAQgJAAgGgGg");
	this.shape_49.setTransform(-45.7,-10);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#00E600").s().p("AgNBqQgHgFABgJIAAgGIABgHIgBgUIgBgVQAAgTgDggIgEg1IgIAAQggAAgUgFQgQgEAAgPQAAgHAFgGQAHgHAKAAIAWADIAYABIAbAAIAZAAIAhABIAhACQAJAAAGAGQAGAFAAAJQAAAIgGAGQgGAGgJAAIgkgCQgWgCgNABIAEA7QADAkAAAWIABAPIABAOQAAALgEAJQgHALgKAAQgHAAgGgFg");
	this.shape_50.setTransform(-64,-10.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#00E600").s().p("AhABZQgWgXAAggQAAgvArgzQAkgrAlAAIALAAIAJABQAHgGAJAAQAPAAADARQADANAAAQQAAAHgEAGQgGAIgLAAQgNAAgGgOQgDgGgDgCQgCgBgJAAQgTAAgWAdQgiAnAAAiQAAAQALAMQAKALAPAAQANAAAPgIQAFgCARgMQAMgIAFAAQAJAAAGAHQAGAGAAAIQAAAIgIAHQgoAigoAAQghAAgWgYg");
	this.shape_51.setTransform(-83.7,-10.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#00E600").s().p("AhDBvQgQgOAAgvQAAgUADglQADgnAAgUIgCgPIgBgPQAAgXAUAAQAHAAAFAEQARgEAQgCQAPgCALAAQAlAAAWAIQAOAFAAAOQAAAHgFAGQgGAHgJAAIgGgBQgYgGgXAAIgVABIgbAGIgBA6IA3gGIAjgDQAJAAAGAGQAGAFAAAJQAAAQgSACIgjADIg9AGIgBAeQAAAdADAEQACABARAAIAZAAIAcAAIAIgBIAJgBQAIAAAGAFQAHAFAAAKQAAAQgRADQgPADgsAAQgwAAgOgNg");
	this.shape_52.setTransform(-102.1,-10.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#00E600").s().p("Ag+BlQgegVAAgdQAAgWAUAAQAVAAAAAWQAAAJAPAKQAPAJANAAQAFAAACgTIACguQACgfAAgyIgBgJIgCAAIgQAAIgSgBQgIAAgGgFQgHgGAAgJQAAgUAbAAIAOABIAOAAIAbgBIAbgBQAnAAAAAWQAAAHgFAGQgGAHgJAAIgIgBIgJAAIgMAAIAAAKQAABngPAwQgLAjgaAAQgcAAgagSg");
	this.shape_53.setTransform(-121.7,-9.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#00E600").s().p("AhHBuQgHgGAAgJIAAiZIgBgUQAAgLABgIQACgOAXgDQAMgDAZAAQAaAAAZASQAeAUAAAfQAAASgGALQgFAKgMAJQAOAGALAOQANAQAAAPQAAAUgWARQgOALgPAHQggAMg1AAQgIAAgHgIgAgmBOQAZgBAbgJQAagHAAgIQgBgMgQgIQgMgIgLgBIgmgBgAgmhNIAAAfIAAAeQANACAHgBQAqgDAAgeQAAgJgNgLQgLgKgQAAIgWABg");
	this.shape_54.setTransform(-140.7,-10.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#00E600").s().p("AhNBaQgggbAAgqQAAgwAfgpQAjguAzAAQAzAAAaAXQAZAYAAAvQAAAwgdAoQghAvgzAAQgrAAgfgZgAgugqQgWAdAAAiQAAAYATAPQASAPAcAAQAeAAAWggQATgdAAgiQAAgfgNgMQgOgLghAAQgfAAgXAgg");
	this.shape_55.setTransform(-162.7,-9.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAeBDIgFgeQgCgRAAgOIABgLIAAgNIABgFIAAgHQAAgMgGAAQgNAAgKAQQgMAQgGAXIgCANIgBAOIAAAMIgBANQAAAIgGAGQgGAGgJAAQgJAAgFgGQgGgFAAgJIgBgNIgBgMIACgoIACgmIAAgNIgBgOQAAgIAGgFQAGgGAJAAQATAAABAXIAAACQAWgWAWAAQAbAAALAYQAHAPAAAfIAAAKIAAAIQAAALADASQADASAAAMQAAAIgGAFQgGAGgIAAQgSAAgCgSg");
	this.shape_56.setTransform(-195.4,-6.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AAzBSQgIgQgGgXIgjADQgVACgNACQgGAQgRAhQgHAKgLAAQgIAAgGgFQgHgGAAgJQAAgHAVgsQgCgEABgEQAAgHAOgEQAVgiAZgmQAjg4AIAAQAQAAAGAUIAJAuIAWBfIAHATQAGANAAAGQAAAJgHAGQgGAFgIAAQgMAAgLgcgAgKANIASgDIAVgBIgKgvIgdAzg");
	this.shape_57.setTransform(-214.5,-9.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-264.8,-34.3,529.7,68.7);


(lib.Symbol94 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* a = new Sound(_root);
		_parent.volu = "volume";
		stop();
		*/
	}
	this.frame_1 = function() {
		/* my_vol = (50 + getProperty(_parent.vol.slidin, _x)) * 2;
		_parent.volu = my_vol;
		a.setVolume(my_vol);
		*/
	}
	this.frame_2 = function() {
		/* gotoAndStop(2);
		play();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol88 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("Ag1ACIA3hTIA0BRIgzBRQgbgsgdgjg");
	this.shape.setTransform(0.3,4.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.1,-4,10.9,16.4);


(lib.Symbol87 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AEJAEIAAgIIAKAAIAAAIgAD0AEIAAgIIAKAAIAAAIgADgAEIAAgIIAKAAIAAAIgADNAEIAAgIIAKAAIAAAIgAC5AEIAAgIIAKAAIAAAIgACkAEIAAgIIALAAIAAAIgACQAEIAAgIIAKAAIAAAIgAB9AEIAAgIIAJAAIAAAIgABpAEIAAgIIAKAAIAAAIgABVAEIAAgIIAKAAIAAAIgABAAEIAAgIIAKAAIAAAIgAAsAEIAAgIIAKAAIAAAIgAAZAEIAAgIIAKAAIAAAIgAAFAEIAAgIIAKAAIAAAIgAgOAEIAAgIIALAAIAAAIgAgiAEIAAgIIAKAAIAAAIgAg2AEIAAgIIAKAAIAAAIgAhJAEIAAgIIAKAAIAAAIgAhdAEIAAgIIAKAAIAAAIgAhyAEIAAgIIAKAAIAAAIgAiGAEIAAgIIAKAAIAAAIgAiZAEIAAgIIAJAAIAAAIgAitAEIAAgIIAKAAIAAAIgAjCAEIAAgIIALAAIAAAIgAjWAEIAAgIIAKAAIAAAIgAjqAEIAAgIIAKAAIAAAIgAj9AEIAAgIIAKAAIAAAIgAkRAEIAAgIIAKAAIAAAIg");
	this.shape.setTransform(509.5,543.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(482,543,55,1);


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


(lib.Painting = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0033FF").s().p("AAAF/IABgPQABgHADgHQACgHAEgGIAJgNQgOAEgKgFQhPgeBigdQA4gRAHg2QAjktj5i+QhBAXhBgQQhAgRgog1IAIgJQAWADAWAHQAiAMAggGQASgEAQANIAGAIQAgADAggIQAfgIAegJIAxAZQAMgVAYgBQAFgBAHADQAEAAADADIAFAHQAlgLAlgJQA1gOA3gMIBVAuIACAFIgDAFQASANAFAXQACAKAAAKQAAAGgBAFIgFAMQAlgDAWAZQAJAMgIAPQgPAagdgGQgIgBgIgDIgDgHQg5g+g+CPQg9COCpFCQgWAFgTgOIgMgKIgGgGIgHgHQgNASgVAJIgTAGIgLABIgMgCIgQgaIgIAAIgWAZQgcAegqAGIgjgEgAAejqQAWgegGgmIgJAEQgWAIgPgPQgdAVglgIgAD6jwIAEAEQAUgQgEgaIgBgJIgOgBgABblCIAKA2QAhgIAZgXQARgQAQgRIgFgIg");
	this.shape.setTransform(31.2,-18.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0033FF").s().p("AAMDOQAAgRAIgZQAIgYAAgMQAAgFgFgJQgEAKgCAYIgEACQgLgWgCgJIgFAaIgHABQgCgDAAgGQAAgGAKgtIAAgCQgNAkgKASIgFAAQgCgDAAgGQAAgUAfg6IAAgDQgMANgGATIgEACQgHgGADgOIgBgCQgLADgMAMQgJgCAAgHQAAgGA+hQIAAgCIgcgCQgCgDAAgFQAAgLASgRIgIgIQgMAJgHATQgKAcgCAEIgFAAQgCgDAAgJQAAgUA0hGIACgDQgsASgDAXQgLgDAAgVQAAgQAcgvQAig6AlAAQAJAAAEAEIg7A3QgmAkgBAXIABABQAQgKAsgZQAFgEAAAKIgbAkQAIgDAWgPIAJAEQggAzgQASIgCACIAbgCIAcBYIACgGQACgFAGAAQAXAAgGA1QgHAxgBAYQAEADgKAAQgGAAgBgEIgBgFQgCAEAAAYQAAAUgIAJQACgKgUgCgAgUAaQgJAQgGAIQALgJAFgQg");
	this.shape_1.setTransform(-10.5,5.4,0.85,1.951,-90,0,0,2.9,-0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0033FF").s().p("AghBCIgEgMIAhg2IggANIgIgCIADgeIgEADIgGACIgXAGQAFgkAggVIAGAEIAAALIAZgLIAHAFIgDAQQgGARgOAMQAtgZA0AHIgCALQg/AagjA7g");
	this.shape_2.setTransform(-47.7,-48.5,0.775,0.815,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0033FF").s().p("AhDATQgNgPgGgRIgFgNIAGgJQAUAIAKAVIAGAKIABgWQAhAOAfAWIgTgjIAEgJIAeAKIgngdIACgLIAGgDIBcA3IgBAEQgTAJgWgBIgGgCIgMgEIAbAoIgCAHQgtgEgmgaQAEANADANQABAHAAAIQgdgOgUgbg");
	this.shape_3.setTransform(-49.6,-4.6,0.775,0.815,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0033FF").s().p("ABZBsQhihwiUgJIgFgTIgKAAIgKgHIgCgPIAFgGQATgNAXgIQgEgFgCgFQgFgLAAgLQAAgOANgDQBCAvAxA/QBPBlB5AYIAFAFIgBATQgWACgWAAIgCAAQgeAAgTgXg");
	this.shape_4.setTransform(10,-35.1,0.775,0.815,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0033FF").s().p("AEqCoQg7hahYg1IgFAJQAeAvgEA5QgBANgIAHQggAZgRgtQgMghgXgZQgyg3hDAoQh9BIiDg2QgDgHAGgHQAqg4BRADQhPgPhCgvIgBgMQgCgQAKgFQBFglBUAxQgTgNgMgUQgbgpAfgYQARgOAKASQA3BdBigrQAegQAhgJQBWgVAvBGQAcAqAhAlQBLBRgVBiIgGABQgFAAgCgEg");
	this.shape_5.setTransform(-18.1,-16.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0033FF").s().p("ABlBYQgbgMgHgeQgEgVgCgVQgcALgcAJQgjAMgmAAIgZgDQglgIgUgeQgQgXAAgdQAAgeAbgGQAegDAPAZQAKARAFASQATABATgFQAjgHAggKQAZgHAagFQANgDAOAFQATAHAGATQADAHABAIQABAQAFANQADAKAHAKIAKAPQAFAGACAHQABAHAAAHQgBAMgJAHQgOAKgQAAQgNAAgNgGg");
	this.shape_6.setTransform(-27.7,-39.1,0.775,0.815,0,0,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0033FF").s().p("AAdB+QgYgCgRgMQgRgKgIgSQgKgUAJgTIANgdQAOgbAagOIgNgMQgLgJgOgEQgQgGgSACQgGgBgGgCQgWgIABgYQABgTAQgHQAZgKAaAAQAPABAMAEQAzAMAYAvQAGAMADAOQADAKgCAKQgIAiggAUQANARAIAUIADAMQADAPgLAJIgMAKQgIAEgKAAIgHAAg");
	this.shape_7.setTransform(-38.8,-41.6,0.775,0.815,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0033FF").s().p("AgfAUQgGgJAAgKQAAgKAJgMQAMgQASAAQAkAAAAAmQAAAlgmAAQgWAAgJgSg");
	this.shape_8.setTransform(-45.2,-55.1,0.775,0.815,0,0,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(2,1,1).p("AJympIAANTIzjAAIAAtTg");
	this.shape_9.setTransform(5.9,-15.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ApxGqIAAtTITjAAIAANTg");
	this.shape_10.setTransform(5.9,-15.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(2,1,1).p("Ah0lkIFILJIhfAAIlIrJg");
	this.shape_11.setTransform(30.1,28.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#996633").s().p("AB1FlIlIrJIBgAAIFHLJg");
	this.shape_12.setTransform(30.1,28.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(2,1,1).p("AjkFjIForFIBhAAIloLFg");
	this.shape_13.setTransform(-20,28.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#996633").s().p("AjkFjIFnrFIBhAAIlnLFg");
	this.shape_14.setTransform(-20,28.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.8,-59.2,127.3,124.7);


(lib.skiptomenu_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AATApQgLAGgMAAQgMAAgHgFQgJgGgBgKQgEgYABgQQgBgMADgPQABgIAHAAQAEAAADADQACACAAAEIgBANIgBANIABAXQABALACAGIAGADIAFAAQAKAAANgDIAAgSIgBgPQAAgTACgOQABgIAIAAQADAAADACQADADgBADIgBAhIAAARIAAATIAAAGIAAAGQABAEgDACQgDADgDAAQgHAAgCgJg");
	this.shape_18.setTransform(16.7,0.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AAVAqIgDgTIgBgTIABgGIAAgJQAAgSgHgBQgKAAgHAMQgIALgFAOIgBAIIAAAJIAAAIIABAIQAAAEgCADQgDACgEAAQgDAAgDgCQgCgDAAgEIgBgIIAAgIIABgYIABgYIAAgIIAAgJQAAgDACgDQADgDADABQAIAAABALIAAAKQAPgUAOAAQAOAAAFANQAEAIAAAQIAAAJIAAAGIACATQACAMAAAHQAAAEgCADQgDABgEAAQgHABgBgJg");
	this.shape_19.setTransform(7.5,0.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AgdAmQgNgMAAgTQAAgVALgQQAMgQATgBQAOAAAJAGQALAFAAANQAAAJgKAHQgEADgOAFIggAQQAFAIAHADQAIADAIAAQAGAAAIgBQAKgDADgFQADgFAEAAQADAAACADQACACAAADQAAAKgPAGQgOAHgMAAQgSAAgNgKgAgRgWQgHAIgDAPIAbgLQAOgIAGgFQgHgIgNAAQgKABgHAIg");
	this.shape_20.setTransform(-2.2,0.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AgEAzQgCgCAAgEIgCggIgCgdQAAgJgDgGQgGADgHAHIgKALIgEAGIgBANIgBAPIAAAIIABAHQAAADgCADQgDACgEAAQgKAAAAgWIABgQIABgOIAAgOIgBgOQAAgUAJAAQADAAADADQADADAAAEIgBAFIAAAFIAAAJQAFgJAIgIQAJgHAHAAQANAAAEAOQAEgHAHgDQAHgDAIAAQAPAAAFAQQACADACAVIAGAxQABADgDADQgDACgDAAQgIAAgBgIIgDgbIgDgZQgBgGgCgGQgDgIgDAAQgEAAgJAGQgIAFgDADIABAQIACAWQACAOAAAJQAAAEgCACQgDADgEAAQgBAAgDgDg");
	this.shape_21.setTransform(-14.1,0.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(2,1,1).p("AkZh7IIzAAIAAD3IozAAg");

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AkZB8IAAj3IIzAAIAAD3g");

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAVAuQgMAGgOAAQgMAAgJgGQgJgGgBgMQgEgZAAgSQAAgNADgRQABgJAIAAQAEAAADADQADADAAAEIgCAOIgBAPIABAZQABAMACAHIAGADIAGAAQALAAAPgEIAAgTIAAgRQAAgVABgPQABgJAJAAQAEAAADACQADADgBAEIgBAlIAAATIAAAVIAAAGIAAAHQAAAEgCACQgDADgEAAQgIAAgCgJg");
	this.shape_24.setTransform(18.3,0.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAXAvIgDgWIgBgVIAAgHIABgJQAAgVgIAAQgLAAgIANQgJALgFAQIgBAKIAAAJIAAAJIABAJQAAAEgDADQgCACgFAAQgEAAgCgCQgDgDAAgEIgBgJIAAgJIABgaIACgbIgBgJIAAgJQAAgFADgCQACgDAEAAQAJAAABANIAAALQARgWAPAAQAPAAAGAOQAFAJAAASIAAAKIAAAHQAAAIACAMQACANAAAIQAAAEgDADQgDADgEAAQgIAAgBgJg");
	this.shape_25.setTransform(8.2,0.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AggApQgPgMAAgWQAAgXAMgRQAOgSAVAAQAPAAAKAFQANAHAAAOQAAAJgMAIQgEAEgQAFIgjASQAFAIAJAEQAIAEAJAAQAHAAAIgDQALgDAEgFQADgFAEAAQADAAADACQADADAAADQAAALgRAIQgPAGgOAAQgVAAgNgLgAgTgZQgHAJgEARIAdgMQAQgJAIgGQgJgIgOAAQgLAAgIAJg");
	this.shape_26.setTransform(-2.4,0.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgEA5QgDgDAAgFQAAgLgCgXQgDgVAAgMQAAgKgCgGQgHADgHAHIgMANIgEAGIgCAPIgBARIABAIIABAIQAAAEgDACQgDADgEAAQgLAAAAgZIACgRIABgPIgBgQIgBgPQAAgWAKAAQADAAAEADQADAEAAADIgBAGIAAAGIAAAKQAFgKAKgJQAJgIAHAAQAPAAAEAPQAGgHAHgDQAHgEAKAAQAQAAAGARIAEAcIAHA1QAAAEgDADQgDACgEAAQgIAAgBgIQgCgLgCgTIgDgcIgDgNQgEgJgEAAQgDAAgKAGQgJAGgDADIAAASIADAYQACAQAAAJQAAAFgCADQgDACgEAAQgCAAgDgCg");
	this.shape_27.setTransform(-15.6,0.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(2,1,1).p("AE3CJIptAAIAAkRIJtAAg");
	this.shape_28.setTransform(0,0.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#00FFFF").s().p("Ak2CJIAAkRIJsAAIAAERg");
	this.shape_29.setTransform(0,0.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AATApQgLAGgMAAQgMAAgHgFQgJgGgBgKQgEgYABgQQgBgMADgPQABgIAHAAQAEAAADADQACACAAAEIgBANIgBANIABAXQABALACAGIAGADIAFAAQAKAAANgDIAAgSIgBgPQAAgTACgOQABgIAIAAQADAAADACQADADgBADIgBAhIAAARIAAATIAAAGIAAAGQABAEgDACQgDADgDAAQgHAAgCgJg");
	this.shape_30.setTransform(16.7,1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAVArIgDgUIgBgTIABgHIAAgHQAAgUgHAAQgKAAgHAMQgIALgFAOIgBAJIAAAIIAAAIIABAIQAAAEgCACQgDACgEAAQgDAAgDgCQgCgCAAgEIgBgIIAAgIIABgYIABgYIAAgJIAAgIQAAgEACgCQADgCADgBQAIAAABAMIAAAKQAPgTAOgBQAOAAAFANQAEAIAAARIAAAIIAAAGIACAUQACALAAAHQAAAEgCACQgDACgEABQgHgBgBgHg");
	this.shape_31.setTransform(7.5,0.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgdAlQgNgLAAgTQAAgVALgPQAMgSATABQAOAAAJAEQALAHAAAMQAAAJgKAHQgEADgOAFIggAQQAFAHAHAEQAIAEAIAAQAGgBAIgCQAKgDADgEQADgFAEAAQADAAACACQACACAAAEQAAAJgPAIQgOAFgMAAQgSAAgNgKgAgRgWQgHAIgDAPIAbgLQAOgIAGgGQgHgGgNgBQgKAAgHAJg");
	this.shape_32.setTransform(-2.2,0.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgEAzQgCgCAAgEIgCggIgCgdQAAgJgDgGQgGADgHAHIgKALIgEAGIgBANIgBAPIAAAIIABAHQAAADgCADQgDACgEAAQgKAAAAgWIABgQIABgOIAAgOIgBgOQAAgUAJAAQADAAADADQADADAAAEIgBAFIAAAFIAAAJQAFgJAIgIQAJgHAHAAQANAAAEAOQAEgHAHgDQAHgDAIAAQAPAAAFAQQACADACAVIAGAxQABADgDADQgDACgDAAQgIAAgBgIIgDgbIgDgZQgBgGgCgGQgDgIgDAAQgEAAgJAGQgIAFgDADIABAQIACAWQACAOAAAJQAAAEgCACQgDADgEAAQgBAAgDgDg");
	this.shape_33.setTransform(-14.1,1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(2,1,1).p("AEah7IAAD3IozAAIAAj3g");

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0066CC").s().p("AkZB8IAAj3IIzAAIAAD3g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]},1).wait(2));

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


(lib.GalsArm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AAjhzQABAAABgBQACgBACgCQARgJAQgLQATgNAPATQAMAQALAOQAEAFgDABIAAAAQgBAAAAAAQgDABgIgDQgSgEgTAFQgEABgBAEQgBADAAAEAgIhkQgPgDgQgFQgDgBgDgBQgSgGgSgEQgUgFgIgVQAQgHAQACQAUABASAIQASAIAUAEQABABAAAAQAQAEATAKAkhBAQgBAPABAPQACATgEASQgBAKABACQABABABgBQANgIAOgGQASgHARgHQARgIARgJQAQgIAQgIQANgHAMgGQAEgCADgCQABAAABgBQAPgIAOgIQARgKARgIQAOgHALgJQAEgDACgDQAIgHAIgDQAAgCAAgGQACgTgBgUQgCgTgBgUQAHgCAHgEIAAAAQADgBACgCQADgBAEgDQAOgGAOgIABIACQgBAAgBAAQgHADgIACQgJADgJAAQgHABgHgBQgBABgBABQgLAMgKAJQgBACgDABQgPALgRAIQgBABgCABQgQAIgQAIQgRAJgRAKQgBABgCAAQgJAHgKAGQgFADgEADQgPAKgQAJQgPAIgPAJQgRAKgRAKQgPAIgOAKQgQAKgPALQgQAKgRAGQgUAHgRgKQgLgGAEgNQAAgBABgBQgEgGgBgJQgBgFgBgGQAAgEgBgFQgBgJgBgKQgBgSgBgTQgBgRgBgRQgBgSACgTQABgRAEgRQAEgQADgTQADgSAEgSQABAAAAAAQAAgEABgEQAEgNAEgOQACgGACgGQABgDABgEQADgIADgJQAGgSAkg0QAkgzAJBrQgDASgDARQgEARgEAPACDhhQABAAAAAAQAEACAEABQAPAFANAEQASAFASAHQARAFASADQAUACATADQAJACACAIIAAABQAAAEgBAFQgCAGgEACQgHADgJgBQgLgDgMAAQgSgBgRgFQgSgEgSgGQgCAAgCgBQgOgFgOgGQgBgBgCgBQgPgHgOAEAA9hVQAIABAIACQALADAKAFQAHAEADAEQAHAJgGANQABAEAAADQACASgKAMQgBABgBABQgDADAAADQgBANgLAKQgYAUAEgZQABgIAFgHQAAgBAAAAQABgBAAAAQABgCgBgCABpgmQgQgKgTgJAA5giQASAFARAKQAIAFACAHAE/hBQAJgFAHgGQADgCACgDQABgBABgCQAFgIACgJQADgJgCgJQgBgJACgJQACgIAFgHQAFgGAFgHQAGgGAFgGQABgBACAAQgFAEgCAGQgCAHAAAIQAAAIAEAHQAEAIAAAKQABALgDALQgCAGgCAGQgBADgBACQgBADgBACQgEAKgLACQgJACgIACQgDABgDAAQgFABgFABQgBABgBAAQgLADgKAAQgFABgFADQAFgHAIgCQAIgDAIgEgAkKhWQAAACgBACQgFATgFASQgFATgDATQgDALABANQAAATgBATQAAAFgBAD");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0033FF").s().p("AgeA0QAJgFAHgHIAEgEIADgDQAEgIADgJQAAgJAAgIQAAgIAAgJQABgIAGgHIAKgNIALgMQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAQgGAEgBAGQgCAHAAAIQAAAHAEAIQAEAIAAAJQABAJgDAMIgEAMIgCAFIgCAEQgFALgLACIgPADIgFABIgKADIgDAAg");
	this.shape_1.setTransform(35.2,-11.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("AjsDcQgMgGAFgNIAAgCQgDgGgCgJIgBgLIgBgJIgCgTIgDglIgCgiQgBgSACgTQACgRAEgRIAHgjIAHgkIAAAAIACgIIAHgbIAFgMIACgHIAFgRQAGgSAkg0QAlgzAJBrIgHAjIgHAgIAAAAIgCAEIgKAlQgFATgDATQgCALAAANQABATgCATIAAAIIAAABQgBAPABAPQABATgDASQgCAKACACIACAAQANgIAOgGIAigOIAjgRIAggQIAZgNIAGgEIACgBIAcgQIAigSQAOgHALgJIAGgGIAPgKIABgIQACgTgCgUIgCgnIANgGIABAAIAFgDIAJgEIAbgOIACgBIAFgDIAggUQAUgNAOATIAYAeQADAFgCABIgBAAIAAAAQgDABgIgDQgTgEgTAFQgDABgBAEIgBAHIgBAEIgPgDIAPADQALADAKAFQAHAEAEAEQAHAJgGANIgFAGIAGABQABASgJAMQgCgHgJgFQgQgKgSgFQASAFAQAKQAJAFACAHIgCACQgEADAAADQgBANgLAKQgXAUADgZQABgIAFgHIABgBIAAgBIgBAAIgPAFQgJADgKAAIgOAAIgCACQgLAMgLAJIgEADQgPALgRAIIgDACIghAQIgiATIgCABIgSANIgJAGIgeATIgfARIghAUIgeASIgfAVQgPAKgSAGQgIADgHAAQgLAAgKgGgADEACIABgCIAAgCIAAACIgBACgADlgmQgQgKgSgJQASAJAQAKg");
	this.shape_2.setTransform(-12.4,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("ACwA8QgLgDgLAAQgSgBgSgFIgjgKIgEgBIgdgLIgCgCQgPgHgOAEQgEgEgHgEQgIgFgLgDIABgEIABgFQABgEADgBQARgFATAEQAHACAEAAIAAAAIAIADIAdAHIAkAMQARAFASADIAmAFQAKACABAIIAAABQABAEgCAFQgBAGgEACQgFACgGAAIgGAAgAhhgIQgPgDgQgFIgGgCQgSgGgTgEQgUgFgHgVQAPgHARACQAUABASAIQASAIATAEIACABQARAEATAKIgbAOIgJAEIgFADg");
	this.shape_3.setTransform(9,-9.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.1,1,1).p("AA9hVQAIABAIACQALADAKAFQAHAEADAEQAOgEAPAHQACABABABQAOAGAOAFQACABACAAQASAGASAEQARAFASABQAMAAALADQAJABAHgDQAEgCACgGQABgFAAgEIAAgBQgCgIgJgCQgTgDgUgCQgSgDgRgFQgSgHgSgFQgNgEgPgFQgEgBgEgCQAAAAgBAAABNhWQAAgEABgDQABgEAEgBQATgFASAEQAIADADgBQAAAAABAAIAAAAQADgBgEgFQgLgOgMgQQgPgTgTANQgQALgRAJQgCACgCABQgBABgBAAQgOAIgOAGQgEADgDABQgCACgDABIAAAAQgHAEgHACQABAUACATQABAUgCATQAAAGAAACQgIADgIAHQgCADgEADQgLAJgOAHQgRAIgRAKQgOAIgPAIQgBABgBAAQgDACgEACQgMAGgNAHQgQAIgQAIQgRAJgRAIQgRAHgSAHQgOAGgNAIQgBABgBgBQgBgCABgKQAEgSgCgTQgBgPABgPAA5giQASAFARAKQAIAFACAHQAKgMgCgSQAAgDgBgEQAGgNgHgJABpgmQgQgKgTgJABIACQAAAAgBABQAAAAAAABQgFAHgBAIQgEAZAYgUQALgKABgNQAAgDADgDQABgBABgBAFBgrQgLgDgKgBQgEAAgFgCQAFAGAHACQAIACAIAEQAJAGAHAGQADACACADQABABABACQAFAIACAHQADAJgCAKQgBAJACAJQACAIAFAHQAFAGAFAHQAGAHAFAFQABACACAAQgFgFgCgGQgCgHAAgIQAAgIAEgHQAEgIAAgKQABgLgDgKQgCgGgCgGQgBgDgBgCQgBgDgBgCQgEgKgLgDQgJgBgIgCQgDgBgDAAQgFgCgFgBQgBAAgBAAgAkKhWQAEgPAEgRQADgRADgSQgJhrgkAzQgkA0gGASQgDAJgDAIQgBAEgBADQgCAGgCAGQgEAOgEANQgBAEAAAEQAAAAgBAAQgEASgDASQgDATgEAQQgEARgBARQgCATABASQABARABARQABATABASQABAKABAJQABAFAAAEQABAGABAFQABAJAEAGQgBABAAABQgEANALAGQARAKAUgHQARgGAQgKQAPgLAQgKQAOgKAPgIQARgKARgKQAPgJAPgIQAQgJAPgKQAEgDAFgDQAKgGAJgHQACAAABgBQARgKARgJQAQgIAQgIQACgBABgBQARgIAPgLQADgBABgCQAKgJALgMQABgBABgBQAHABAHgBQAJAAAJgDQAIgCAHgDQABAAABAAQABgCgBgCAkhA/QABgDAAgFQABgTAAgTQgBgNADgLQADgTAFgTQAFgSAFgTQABgCAAgCAAjhzQgTgKgQgEQAAAAgBgBQgUgEgSgIQgSgIgUgBQgQgCgQAHQAIAVAUAFQASAEASAGQADABADABQAQAFAPAD");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0033FF").s().p("AAcA8IgLgMIgLgNQgEgHgCgJQgBgJABgIQAAgIAAgJQgCgKgFgIIgDgDIgEgEQgHgHgJgFIABgIIACAAIALADIAFABIAPADQAMADAEAKIACAEIACAFIAEANQACALAAAKQAAAJgFAIQgDAIAAAIQAAAIACAHQABAGAGAEQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAg");
	this.shape_5.setTransform(35.2,1.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFCC99").s().p("AjsDcQgMgGAFgNIAAgCQgDgGgCgJIgBgLIgBgJIgCgTIgDglIgCgiQgBgSACgTQACgRAEgRIAHgjIAHgkIAAAAIACgIIAHgbIAFgMIACgHIAFgRQAGgSAkg0QAlgzAJBrIgHAjIgHAgIAAAAIgCAEIgKAlQgFATgDATQgCALAAANQABATgCATIAAAIIAAABQgBAPABAPQABATgDASQgCAKACACIACAAQANgIAOgGIAigOIAjgRIAggQIAZgNIAGgEIACgBIAcgQIAigSQAOgHALgJIAGgGIAPgKIABgIQACgTgCgUIgCgnIANgGIABAAIAFgDIAJgEIAbgOIACgBIAFgDIAggUQAUgNAOATIAYAeQADAFgCABIgBAAIAAAAQgDABgIgDQgTgEgTAFQgDABgBAEIgBAHIgBAEQALADAKAFQAHAEAEAEQAHAJgGANIgFAGIAGABQABASgJAMQgCgHgJgFQgQgKgSgFQASAFAQAKQAJAFACAHIgCACQgEADAAADQgBANgLAKQgXAUADgZQABgIAFgHIABgBIAAgBIgBAAIgPAFQgJADgKAAIgOAAIgCACQgLAMgLAJIgEADQgPALgRAIIgDACIghAQIgiATIgCABIgSANIgJAGIgeATIgfARIghAUIgeASIgfAVQgPAKgSAGQgIADgHAAQgLAAgKgGgADEACIABgCIAAgCIAAACIgBACgADlgmQgQgKgSgJQASAJAQAKgADJhSIgPgDIAPADg");
	this.shape_6.setTransform(-12.4,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(0.1,1,1).p("AA9hVQAIABAIACQALADAKAFQAHAEADAEQAOgEAPAHQACABABABQAOAGAOAFQACABACAAQASAGASAEQARAFASABQAMAAALADQAJABAHgDQAEgCACgGQABgFAAgEIAAgBQgCgIgJgCQgTgDgUgCQgSgDgRgFQgSgHgSgFQgNgEgPgFQgEgBgEgCQAAAAgBAAABNhWQAAgEABgDQABgEAEgBQATgFASAEQAIADADgBQAAAAABAAIAAAAQADgBgEgFQgLgOgMgQQgPgTgTANQgQALgRAJQgCACgCABQgBABgBAAQgOAIgOAGQgEADgDABQgCACgDABIAAAAQgHAEgHACQABAUACATQABAUgCATQAAAGAAACQgIADgIAHQgCADgEADQgLAJgOAHQgRAIgRAKQgOAIgPAIQgBABgBAAQgDACgEACQgMAGgNAHQgQAIgQAIQgRAJgRAIQgRAHgSAHQgOAGgNAIQgBABgBgBQgBgCABgKQAEgSgCgTQgBgPABgPAA5giQASAFARAKQAIAFACAHQAKgMgCgSQAAgDgBgEQAGgNgHgJABpgmQgQgKgTgJABIACQAAAAgBABQAAAAAAABQgFAHgBAIQgEAZAYgUQALgKABgNQAAgDADgDQABgBABgBAE/hBQAJgFAHgGQADgCACgDQABgBABgCQAFgIACgJQADgJgCgJQgBgJACgJQACgIAFgHQAFgGAFgHQAGgGAFgGQABgBACAAQgFAEgCAGQgCAHAAAIQAAAIAEAHQAEAIAAAKQABALgDALQgCAGgCAGQgBADgBACQgBADgBACQgEAKgLACQgJACgIACQgDABgDAAQgFABgFABQgBABgBAAQgLADgKAAQgFABgFADQAFgHAIgCQAIgDAIgEgAkKhWQAEgPAEgRQADgRADgSQgJhrgkAzQgkA0gGASQgDAJgDAIQgBAEgBADQgCAGgCAGQgEAOgEANQgBAEAAAEQAAAAgBAAQgEASgDASQgDATgEAQQgEARgBARQgCATABASQABARABARQABATABASQABAKABAJQABAFAAAEQABAGABAFQABAJAEAGQgBABAAABQgEANALAGQARAKAUgHQARgGAQgKQAPgLAQgKQAOgKAPgIQARgKARgKQAPgJAPgIQAQgJAPgKQAEgDAFgDQAKgGAJgHQACAAABgBQARgKARgJQAQgIAQgIQACgBABgBQARgIAPgLQADgBABgCQAKgJALgMQABgBABgBQAHABAHgBQAJAAAJgDQAIgCAHgDQABAAABAAQABgCgBgCAkhA/QABgDAAgFQABgTAAgTQgBgNADgLQADgTAFgTQAFgSAFgTQABgCAAgCAAjhzQgTgKgQgEQAAAAgBgBQgUgEgSgIQgSgIgUgBQgQgCgQAHQAIAVAUAFQASAEASAGQADABADABQAQAFAPAD");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0033FF").s().p("AgeA0QAJgFAHgGIAEgFIADgDQAFgIACgJQAAgJAAgIQgBgIABgJQACgIAEgHIALgNIALgMQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAQgGAEgBAGQgCAHAAAHQAAAJADAHQAFAIAAAJQAAAKgCAKIgEANIgCAFIgCAFQgEAKgMACIgPAEIgFABIgLACIgCAAg");
	this.shape_8.setTransform(35.2,-11.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_3},{t:this.shape_5},{t:this.shape_4}]},9).to({state:[{t:this.shape_6},{t:this.shape_3},{t:this.shape_8},{t:this.shape_7}]},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.3,-23.7,78.6,47.4);


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


(lib.Symbol90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_6 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(6).call(this.frame_6).wait(1));

	// Level 1
	this.instance = new lib.Symbol88("synched",0);
	this.instance.setTransform(0,4,1,0.111);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance.cache(-7,-6,15,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleY:0.14,y:3.9},0).wait(1).to({scaleY:0.21,y:3.6},0).wait(1).to({scaleY:0.33,y:3},0).wait(1).to({scaleY:0.51,y:2.2},0).wait(1).to({scaleY:0.73,y:1.2},0).wait(1).to({scaleY:1,y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.1,3.6,10.9,1.8);


(lib.Symbol89 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_7 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7).wait(1));

	// Level 1
	this.instance = new lib.Symbol88("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleY:0.76,y:1.1},0).wait(1).to({scaleY:0.56,y:2},0).wait(1).to({scaleY:0.4,y:2.7},0).wait(1).to({scaleY:0.27,y:3.3},0).wait(1).to({scaleY:0.18,y:3.7},0).wait(1).to({scaleY:0.13,y:3.9},0).wait(1).to({scaleY:0.11,y:4},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.1,-4,10.9,16.4);


(lib.Paintinglady = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.GalsArm();
	this.instance.setTransform(23.6,-11.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:12.8,x:19.2,y:-6.6},5).to({scaleX:1,scaleY:1,rotation:20.5,x:15.4,y:-3.8},3).to({regX:-28.8,regY:-14.4,scaleX:1,scaleY:1,rotation:23.1,x:-5.1,y:-26.3},1).to({scaleX:1,scaleY:1,rotation:13.1,y:-26.2},3).to({rotation:5.3,x:-5.2},2).to({scaleX:1,scaleY:1,rotation:2,x:-4.4,y:-26.1},3).to({regX:-29.6,rotation:1,x:-5.9},1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:23.6,y:-11.8},1).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.3,1,1).p("AgCgBQACACAEAB");
	this.shape.setTransform(-16.3,60.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AHMoUQAAAJgDAJQAfglgNguQgNgsgpgTQgIgEgIgEQgHgEgHgDQAQgEARACQAMACAMAFQAQAHAIAOQgEgQgPgMQgFgEgHgEQgKgFgJgFQAbgQAbAQQgRgYgjgJQgbgGgaAGQAwgcA0AHQgmgUgsASQgNAFgKAGQALgqAtgVQhCAIgkA3QANg0AugeQhFAMgRBJQgDANACANIAAAAQgNgKgQgDQgegHgcAKQgbAJgUAUQgSARgMAVQgDAEgBAEQgHANACANIAAAAQgMAIgNAHQgEACgEABQAGAJgFAOQgJAZANAYQAGALALABQAGAMAFAMQAFANALAIQABAAABABQAAAAABABQAAgBAAgBQgFgSADgUQAFgbAWgKQgGgIADgLQAMgqAzgBQAWAAAAAUQAKAAAHgDIAAAAQASgHADgaQADgiAegDQAYAaABAdQAAAcgOAVQAkgOAKgkQAGAlgPAqQAXgPADgfQAHAXgBAZQAYgVgGgnQAWAXADAfQAOgQgCgXQALATgCAVIAAABQgJAHgGAFQgIAHgEAIQgEgHgMgCQgbgGgLAVQgBAEgCAAQgDAAgEgFQgGgHgKgIQgYgRgXgRQgXgSgVgaAFIqzQgPgPAEgTAEkrHQAGAFAFAHQgJAFgCgRgADeqdQgKAUACAVADwqFQgDAIgDAIADNqsQgVAWAIAcAC2quQgXAXAKAbACjokQAZAZAbgRADkpFQgJgGgJAAQgFAOAEAMAC2o+QAOgMAOgBAD1pOQAAAAAAABQAAAIAAAHQAAABAAABQAbAMAWATQAWAUAZAPQAJAGAJAFQgEAHgKAFQgWALAGAWQAEAPAPACQAGAAAFAAQABAAACAAQAOgBANgHIAAAAQAGgEAGgEQAQgPALgRQACgEACgDIAAAAQAAAAAAgBQABgBAAAAQAEgJgEgGAD1o8QgBAIgEAGAFvqVQAbAOAaAPQAMAHAIAMAFnm3QgFgEgGgHQgHgJAHgJQAFgHAIgDQAJgDAJgFQAAgBABAAQAHgFAIgEQAIgFAKADQAGABAFAFAFbqVQAZAQALAcAFSqyQgBgUAOgMAGQnWQgFgDgHACQgKADgBAJQAAADADAAQAKAAAHgIQABgDACgCgAGFm5QAKAGAIAGQAGAFAGAHQAHAJgHAIQgEAFgGABQgJACgKgBQgBAAgCgBQgJgCgIgEQgFgCgEgDQgJACgGAFQgHAGgHAGQgHAHgIAFQgJAFgJADQgKACgKAAQgDAAgCAAAFpmVQgEgDgCgDAEBm0QgCAIAAAIQAAADAAADQAAAEAAAFQAAAIABAIQAAADABAEAD/meQAIgFAHgGQAGgGAJgCQAIgCAGAGQACADAAADQAAAKgGAHQgFAHgIADQgIAEgIADQgHACgCAFQABABABACQACAEADAEQAEAFAGACQgIAAgGgBQgJgCgIgBQgJgBgIgBQgJgCgJgBQgKgBgJgFQgJgFgIAHQgIAGgFAHQgEAFACAFQgGARACAUQACASgCASQgCASAAATQgBATAFASQABACAAABQAEASADASQACASgIARQgIASgOAPQgMANgOANQgNAMgLAJIAAgBIhDh8QgMgXAAAAQgCgBgBgBAAPkDQAAADgBADIAAABQABAEAOAIQBjAqATgEQAEgBAFgBAEPCkQAMgDAMAAQATAAATABQATAAASABQATAAARAJQANAIAEAUQADAUgLARQgJAPgIAOQgKANgMAMQgMAMgLAMQgNAOgNANQgOAPgLAPQgLAOgJAQQgJARgPAOQgNANgJAPQgJAQgKAQQgLAPgJARQgKARgNAOQgMANgJAQQgJARgLAQQgNATALAPQAEAGAHACQASAEATgBQAUgBASgGQASgHARgHQARgHAFgVQAGgaAPATQAJANgBAJQAGgCAIAIQACADABADQAAABAAAAQAEABAEADQAEAEABAKQACABADACQAHAHgDAIQgGATgVgGQAAAAgBAAQgOAJgPAIQgSAJgUABQgTABgUgFQgTgEgTgGQgTgGgSAIQgRAHgPAOQgOAOgUAAQgFAAgEAAQgPgBgNgEQgWgHADgTAA5CdQAUAEATgEQASgCASgDQARgCARgDQATgEASgBQAUgCATgDQAZgEABAWQABAFACAEABwC7QATgCARgCQAUgCATgCQASgBASgDQATgEASgFQAGgBAFgBADrD8QAIgBAIgBQASgDASgDQAFgBAGgCQAOgDANgDQAOgDAMgGAEqDxQgIAQgOALQgOAMgNAOQgNAPgMAQQgLAQgIARQgHAQgGAQQgHARgGARQgHASgIARQgJASgFASQgEASgLAOQgLAPgIARQgHAQgLANQgLAOgMAOQgEAFgEAFQgBABAAABQgIAIgHAJQgLAMgKAMIAAAAQgCgBgBAAQgHgCgHABQgRAEgSAIQABAIABAIQACATABARQAEgDAFgBQABAAAAABQABACAAADQABAIAFAFQASAUAdgLQAGgCADACQAEABABAGQABAFgGAAQgfACgaANQgMAFgFARQgDAIgIADQgTAJgVgBQgbgCgcAAQgSAAgRgFQgegJgfABQgWAAgXAAQgcgBgcAAQgLAAgMAAQgLAAgIgHQgFgEgCgFQgEgHgLgEQgJAFgSgIQgXgLgRgSQgCgCgDgCQgEgDgHgBQgCgBgCAAQABAAACABQAFACAHADQgYgHAEABQACAAADAAQgIgDADAAQACAAACAAQACAAADAAQAOgCAOgIQAPgJARgGIAAAAQgCgUABgTQABgUADgTQACgSABgRQABgSABgRQACgUACgTQACgUAAgTQAAgUgBgTQgCgSgEgSQgFgSgDgTQgCgSgFgSQgEgQgDgRAB/EMQAFgBAGgBQATgDATgBQATgCATgEQAKgCALgCQgKAQgMANQgLAMgNALQgOANgNAOQgMANgLANQgMAOgMANQgOAOgMAOQgMAOgKAPQgKAPgKAOQgJAPgKAPQgKAQgLARQgIAPgKAQQgFAHgKAHAEsKTQAIgSALABQAAAAABAAAEgKGQAGgOAHgCQABgBABAAAE1KhQAMgTALAFIABABAE7KzQAAAAgBAAQgDgBgCgCABqqWQgFgbgTgVQgTgVgagKQgagKgaAEQgcAEgUAZQgMAKgLALQgJAKgHAKQgGAHgCAJQgCAGAAAGQAFgIAFgDQgDAGgCAGQgFATAAAXQgBALADAKQABAHADAHQABgIABgHQACgKAGgFQgFAeAPAdQAHAMAJAKQADgFAAgGQAAgKAHgHQgBAdAVAVQAJgKAEgGQALAZASATQALAJANAHQADgTACgVQABgKAEgJQAGAIAFAJQAEAHAFAFQADgYAAgbQgBgsAagZIAAAAQABABABABAAaqrQgYgIgVAKQgcANgSAXQgKANgHAQABqqWQgNACgKATQgMAYAXAMACAqOQgMgJgKABABDqZQgOgXgUgPQgYgTgbADQgRABgQAEAANqTQgVABgRASQgUAVgIAdAAlqIQgVAPgLAZQgJAcABAeAAyp3QgNAVgCAZQgCATADASACCpgQgWAUAEAcACHnZQAAAAABABQADAVgJATQgIARgQAHQgQAIgPAJQgQAIgMAOQgLANgEARQgFATgEATQgEASgDATQAAACgBADQgDAEgDAEQgIgZgPAPIgBAAQAAAAAAAAQAAAAAAAAIgBABIAAgBQAAAAAAAAQgOABgIgFQgIgFgEgJQgMgiAYgbQgHASANAOQAFAGAEAGQAIANgBAVIAAABAg6kCQgRAJgMANQgOAOgTAGQgMAEgKgHQADAaAcAJQARAGARgJQASgJAFgUQAGgXATgNQADgCADABQgIgHgJgCQgJgBgJAFgAgBjhQgMAAgFgGQgIgJACgJQABgBABgCQAAAAAAgBIAAAAQABgCADgDQABgBABgBAjlA1IgBAAQAMgFALgGQARgKAPgLQAOgLAOgKQAPgMAOgNQAOgMALgPQAKgPAMgMQAMgMAKgPQAMgPAJgRQAKgRAHgSQAGgRAIgNIAAgBQgHgLADgKAAJj7QgIALgCANQAAABAAABABVg1IAAAAIAAAAABVg1QhpB7gGAEQgNALgNAMQgOAOgOANQgNANgMALQgCABgBACQgFAFgEAKIAAAAQgDAHgEAHQgCADgCAEQgEAGgEAFQgMAPgRAJQgHAEgIAEAh8C+QAVAAASgBQATgBATABQARABASgBQAPgBAQgDQASgDARgCQAEgBAEgBAh1CmQASgDAQgBQATgBASgCQAUgCATgEQARgEATgDQATgEAGAPQABADABADQACAJAEAGABiERQABgCABgCQAHgRADgTQACgUAAgTQAAgEAAgDQgDgRgSAEQgOACgPACAleEKQgIgKgDgMQgGgSADgTQACgTAKgRQAJgRANgOQAMgPAOgOQAMgNANgNQANgNAQgIQABgDAHgDQAFgCAIgDQgLAQAFAUQAGAUALAQQALAPATAEQASAEATAAQATAAAbAAAh8C+QAAAKgDAKQgGATgJARAh8C0QAAAFAAAFAgMFLQgBABgBACQgOAKgWgCQgRgCgRgBQgRgBgSAAQgSAAgSgBQgSgBgSABQgSABgTABQgRACgSgBQgTgBgTgEQgTgEgUgCQgRgBgRgGQgTgHgRgIQgFgCgBgDQgBgDADgEQALgPASgHQARgGASgBAgSEvQgHAAgGABQgSADgSACQgRACgSgBQgRgBgSABQgRACgRADQgQACgRgBQgRgBgSAAQgRAAgRgFQgSgFgQgJQgSgJgPgMQgGgEgEgFABiERQABAAACAAQANgDANgCAgZH6QAIgFAEgIQAJgQALgPQANgOANgOQAOgOAJgSQAIgRAHgRQAJgSAGgTQAGgSALgPQAKgQAOgOAgSEvQAMgCALgDQAQgEAQgDQATgEASgCQAIgBADABQAIgDAFgJAgMFLQAAABAAACQgBAMAAAMQAAASgBASQgCASgBATQgBATgEAUQgEARABATQAAABAAACQABATgBAUQAAAPgBAPQAAACAAADQAAAIAAAJQAAAKABAKQAAATABATQABAKABALAgMFLQACgDABgEQAAgDAAgDQgBgJgIgGAkUF4QAFAOACAOQAEASgBASAl3FmQAJANADAQQADAQADAQQAEASADATQADATACAUQABASgBATQgBATgHARQgIASgEAUQgDARAMAQQAEAGgBAIAk4GaQACAPABAQQACAQAAAQQAAAOAAAPQgBAPAAAQQgBAUAEASQABADADADQAOAPgNATQgMAQACAUQACAOAQAFQAGAWgDASQgCAJADAIAlKFkQAAAJAAAJAhqL9QgBAJgKALQABgLgFgJQgGgLgIgHQgEATgSAMQgHAEgFAEQgBgFgBgFQgEgRAHgPQACgFAAgEQgDACgDACIAAAAQgNALgJAPQgHAMgDAMQgMgFgFgPQgIAEgJAKQgDgTABgTQABgJAEgFQgFADgFAEIgBABQgKAIgJALQgHAJgIAIQgCgLgDgLQgCgHgBAAQAAAUgVANQgGgJgBgMQgBgKAAgCQgHADgHAMQgKgFgDgMQgDgMACgMQgKAGgFALQgEALgHADQgBgKgEgKQgFgLgGgLQgCgFgDgFQABAFABAFQAAABAAABQABATgPANAmYLkQABgPgBgOAAJLEQAEgSANgQQABgCACgCQABgBAAAAAgSJcQARAIAQAHQATAHATABQAGABAHAAAA+KvQgBANALAAAjaJ/QAAASABASQABATABAUAi6K1QAAALADAKAgRLbQgJAGgGALQgEAGgFACQgBgEgDgFQgBALgHALQgDAGgDAFQgBgFgBgFQgCgMgBgMQAAgIAAgFQABgDAAgCQgDACgCADQgQATgEAaQgBAKABAJQgKgLgGgNQgCgEAAgEQAAgDAAgCACMpYQgIANACAO");
	this.shape_1.setTransform(-14,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0033FF").s().p("AhmFJQgSgCgRAAQgSAAgRgEQgSgGgQgIQgRgJgQgMQgFgFgEgFQgIgJgEgMQgFgTACgTQACgTAKgQQAKgRAMgPIAagdIAZgZQANgOARgIQAAgDAHgCIANgFQgKAQAFAUQAFATAMAQQALAQASAEQATAEATgBIAtABIgCACQgFAGgFAJIAAABIgHANIABAIIAAACIAHAAIAGAAIAAAAIAAAAIAMAAIAMAAQATgCATACQARABASgBQAQgBARgDIAjgGIAIgBIAdgFQARgEADARIABAHQAAAUgDATQgCATgHASIgCAEQgFAIgIADQgDgBgIABIglAGIggAHIgaAFIgMACIgkAEQgSACgPgBQgSgBgRACQgRABgRADQgMACgMAAIgJAAgAgaDeQgFATgJARQAJgRAFgTQADgKABgKQgBAKgDAKgAgbDHIgIAMQgMAOgQAJIgPAIIAPgIQAQgJAMgOIAIgMIAEgHIgEAHgAgJDKIgGAAIgHAAIAAgCIgBgIIAHgNIAAgBIAhgEIAlgDQATgCATgDIAngIQASgDAHAPIACAGQACAIAEAHIgIABIgjAGQgRADgQABQgSABgRgBQgTgCgTACIgMAAIgMAAIAAAAIAAAAgACkC/IAAAAgAC6gpIAAAAIABAAIgBAAIhDh9IgMgWIgCgDIAAAAQgJgMACgKQgLABgGgGQgIgKADgIIABgEIAAAAIAAAAIAEgGIADgCIAAAAIABAAIAAgBIAAAAQASgPAHAZIAHgIIgBAHIAAAAQABAEAOAIQBiAqAUgDIAIgCQAFARACASQACATgHARQgIASgOAOIgaAaIgYAVIgBAAgABijWIAAABIAAgBQAEgNAIgMQgIAMgEANgAgKisQgcgJgCgaQAKAHAMgEQASgFAMgOQANgOAQgJQAKgFAJACQAIABAJAHQgDAAgDABQgUANgFAXQgFAVgTAJQgKAFgKAAQgFAAgHgDgAA+j8QgJgGgDgJQgNghAZgcQgIATANAOQAGAFAEAHQAHAMAAAWIAAAAIgGAAQgKAAgGgDg");
	this.shape_2.setTransform(-24.1,-1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00CC00").s().p("ACIA4QgbgCgcAAQgSAAgSgFQgdgIgdAAIgtAAIg4AAIgXAAQgMgBgIgGQgEgEgDgGQgDgHgMgDQgJAFgSgJQgXgKgRgQIgEgEQgFgDgGgCIgFAAIAAgDIAEgBQAPgBAOgIQAPgJAQgGQABANAAAPIAEAEQAOgNAAgUIADgBIALAWQAEAJABAKQAHgCAEgLQAEgMALgGQgCANACAMQADAMALAEQAHgLAHgEIAAAMQABALAHAJQAUgNABgTQABAAACAHIAFAUIAOgOQAJgLALgJIAGAGQgCATAEARQAJgKAIgEQAFAQAKAFQADgNAHgKQAIgPANgKIAEAEQgGAQAEAOIACAKIALgIQATgLADgSQAIAHAGALQAFAIAAAKQAJgKABgIIADAGQAGANAKALQgCgJACgKQADgXAQgTIAGgGIgBAFIAAANQAAANADAKIACAJIAGgKQAGgJACgMIAEAJQAFgBADgHQAGgKAKgGIAJgDIACAEQAAAIAGAGQATASAdgJQAGgCAEABQADACABAFQABAEgFAAQggABgbANQgNAGgFAQQgCAIgIAEQgRAHgRAAIgGAAg");
	this.shape_3.setTransform(-34.6,76.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#996600").s().p("ABwDxIgDgIIABgDIAAgCIAAACIgBADQgBAKgJAKQAAgKgFgKQgGgLgIgHQgDATgTAMIgLAIIgCgKQgEgQAGgQIADgJIgHAEIAAABQgNAKgIAPQgHAMgDANQgMgGgDgPQgIAEgJAKQgEgTACgTQABgJAEgFIgLAIIAAAAQgLAJgJAKIgOARIgFgWQgCgHgBAAQgBAVgUANQgHgJgBgNIAAgMQgHAEgHALQgLgEgDgMQgCgNACgMQgLAGgEALQgEAMgHACQgBgKgEgKIgLgWIgFgKIACALIAAABQABAUgPAMIgEgDQAAgPgBgOIAAAAQgBgTABgUIADgnIADgjIADgjIADglQACgUABgTQAAgTgCgUQgCgSgEgRQgEgTgDgTQgDgSgEgSQgFgQgCgRIAHgCQgBgDADgDQAKgPATgIQARgGASgBQAEAFAFAFQAQALARAJQAQAJASAGQARAEASAAQARAAAQABQAQABARgCQARgDARgBQARgCASABQARABASgCIAkgEIAMgCQAIAGABAJIAAAGQAAAEgCADIgDADIgCABIAAAAQgKAHgPAAIAAAAIAAAAIgHAAIgBAAIgigDIgjgBIgkAAQgSgCgSACIgjACIgCAAIgTAAIAAAAIgBAAIgGAAIgHAAQgTgBgTgEQgUgEgTgBQgSgCgQgFQgTgIgSgIQgEgCgBgDQABADAEACQASAIATAIQAQAFASACQATABAUAEQATAEATABIAHAAIAGAAIABAAIAAAAIATAAIACAAIAjgCQASgCASACIAkAAIAjABIAiADIABAAIAHAAIAAAAIAAAAQAPAAAKgHIAAAAIACgBIADgDIAAADIgBAYIgCAkIgCAlQgBATgEAUQgEASAAASIAAADQABAUAAARIgBAeIAAAFIAAARIAAAUIACAmIABAVIACAQIAEAkQgKAHgGAKQgDAGgFACIgEgJQgCALgGAMIgGAKIgCgJQgDgNAAgMIAAgNIABgFIgGAGQgQASgDAaQgCAKACAJQgKgLgGgNgAhGC/QgDgFAAgFIABgHIABgNQAAgNgEgOQgQgFgBgOIgBgFQAAgRAKgOQAGgJAAgIQAAgJgHgIIgDgFQgEgQAAgQIAAgHIABgdIAAgdQAAgQgBgQIgDgfIADAfQABAQAAAQIAAAdIgBAdIAAAHQAAAQAEAQIADAFQAHAIAAAJQAAAIgGAJQgKAOAAARIABAFQABAOAQAFQAEAOAAANIgBANIgBAHQAAAFADAFgAAhC2QgDgKAAgLQAAALADAKgAAACPIAAAnIAAgnIAAgkIAAAkgAiIB5IAAgDQAAgGgDgFQgJgNAAgNIABgHQADgUAIgSQAIgRABgTIAAgLIgBgYIgFgnIgHglIgGggQgDgQgIgNQAIANADAQIAGAgIAHAlIAFAnIABAYIAAALQgBATgIARQgIASgDAUIgBAHQAAANAJANQADAFAAAGIAAADgAgwhaIAAgEQAAgQgDgQQgDgOgEgOQAEAOADAOQADAQAAAQIAAAEgAhwicIAAgSIAAASg");
	this.shape_4.setTransform(-35.7,53.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgVATIgBgRIAAgHQAJgEAGgGQAHgGAGgCQAJgDAFAHQACACAAAEQABAJgGAGQgGAGgHAEQgGAEgJACQgGADgCAEIgCgGg");
	this.shape_5.setTransform(13.9,-40.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgKAEQABgHAJgCQAGgCAFADIAAAAIgDAEQgHAHgIAAQgBAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAgBg");
	this.shape_6.setTransform(24.9,-46.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgcAaQgGgDgFgHQgHgJAGgHQAGgIAIgDQAJgDAIgFIACgBIAMgIQAJgFAJACQAHABAEAFIAKACIgBABIAAACIAAAAIgEAGQgLAQgRAOQgFAFgGADIAAAAQgLAIgOABIgDAAgAAAgDQgJACgCAHQAAABABAAQAAABAAAAQABABAAAAQABAAAAAAQAJAAAGgIIAEgDIAAAAQgDgCgEAAIgEABg");
	this.shape_7.setTransform(25,-46.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AAIBPQgNgCgFgPQgGgWAUgLQALgFADgHIgSgLQgXgNgWgUQgVgTgcgMIAAgCIABgPIAAgBQAKAAAHgCIAAgBQAUAaAYASIAsAiQALAGAFAHQAFAFACAAQABAAABAAQAAAAAAgBQABAAAAgBQAAgBAAgBQAMgTAbAGQAMABAEAGQADAGgDAJIgKgCQgEgFgHgBQgJgDgJAFIgOAJIgCABQgIAFgJADQgIADgGAHQgGAJAHAJQAFAHAGAEIAAAHIgLgBg");
	this.shape_8.setTransform(20.1,-51.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCC99").s().p("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");
	this.shape_9.setTransform(-2.8,3.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF9900").s().p("AizCnQgUgTgLgYIgNAQQgVgWABgdQgHAHAAAKQAAAGgDAFQgJgKgHgMQgPgdAFgeQgGAGgCAJIgCAPIgEgNQgCgLAAgLQABgXAFgQIAEgNQgFADgFAJQAAgHACgGQACgIAGgHIAQgVQALgLAMgKQAUgZAcgEQAcgDAaAKQAaAJATAVQAUAWAEAaQAKgBAMAKQAMgVASgSQAUgUAZgJQAcgJAeAGQARAEAMAJIAAAAQgCgNADgNQARhJBFgLQguAdgNA0QAkg3BCgHQgtAUgLAqIAXgLQAsgRAmAUQg0gIgwAcQAagGAbAGQAjAJARAYQgbgPgbAPIATALIAMAIQAPAMAEAQQgIgPgQgHQgMgFgMgBQgQgDgRAEIAOAIIAQAHQApATANAqQANAugfAmQADgKABgJIAAAAQABgWgLgTQACAXgOARQgDgggWgWQAGAmgYAVQABgZgHgXQgDAfgXAPQAPgqgGglQgKAlgkAOQAOgWAAgcQgBgdgYgYQgeADgDAgQgDAbgRAGIgBABQgHADgKgBQAAgUgWAAQgxABgMAqQgDALAGAIQgWAKgFAbQgDAUAFASIgBABIgBgBQgMgIgFgNIgLgYQgLAAgGgMQgNgYAJgYQAFgPgGgIIAJgEIgJAEIgCgCIAAAAQgaAZABArQAAAbgDAYQgFgFgEgHQgFgJgGgHQgEAJgBAJQgCAWgDASQgNgGgLgKgAiRBZIgBgUIAAgRQACgYANgWQgNAWgCAYIAAARIABAUgAi6BXIAAgFQAAgbAKgaQALgZAVgMQgVAMgLAZQgKAaAAAbIAAAFgAhFBNIgBgIQAAgXATgRQgTARAAAXIABAIgAgvBAIAAgEQAAgMAGgLQgGALAAAMIAAAEgAjQgBQgUAUgIAcQAIgcAUgUQARgSAXAAQgXAAgRASgAhWAgQgQgIAAgNQAAgGAEgGQAKgUANgCQgNACgKAUQgEAGAAAGQAAANAQAIgAg+ASQgLAIgNAGQANgGALgIIAAgBIAAgHQAAgJAFgIIAEgHIgEAHQgFAIAAAJIAAAHgADtAFQAMAHAIANQgIgNgMgHIg1gbIA1AbgAjKgqQgcAOgSAWQgKAMgHAPQAHgPAKgMQASgWAcgOIADgBQALgEALAAIABAAIAAAAQALAAAKADQgKgDgLAAIAAAAIgBAAQgLAAgLAEIgDABgADIAUQgLgZgZgRQAZARALAZgAAfAJIAAgGQAAgQAIgQQgIAQAAAQIAAAGgAAzAIIAGgOIgGAOgAAJADQgCgGAAgHQAAgTAPgPQgPAPAAATQAAAHACAGgAgMABQgDgGAAgIQAAgSAPgQQgPAQAAASQAAAIADAGgAiUhAQAUAQAOAWQgOgWgUgQIgBgBQgVgPgXAAIAAAAIAAAAIgHAAIgBAAQgRACgQAEQAQgEARgCIABAAIAHAAIAAAAIAAAAQAXAAAVAPIABABgACbgzIAAgCQAAgTANgKQgNAKAAATIAAACgACRg0QgMgMAAgOIABgIIgBAIQAAAOAMAMgAB5g8QgFgHgHgFQACARAKgFg");
	this.shape_10.setTransform(4.3,-63.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(0.5,1,1).p("AgLgCIAJgBQAKAAAEAH");
	this.shape_11.setTransform(24.6,-46.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(0.1,1,1).p("AHMoUQAAAJgDAJQAfglgNguQgNgsgpgTQgIgEgIgEQgHgEgHgDQAQgEARACQAMACAMAFQAQAHAIAOQgEgQgPgMQgFgEgHgEQgKgFgJgFQAbgQAbAQQgRgYgjgJQgbgGgaAGQAwgcA0AHQgmgUgsASQgNAFgKAGQALgqAtgVQhCAIgkA3QANg0AugeQhFAMgRBJQgDANACANIAAAAQAGAFAFAHQgJAFgCgRQgNgKgQgDQgegHgcAKQgbAJgUAUQgSARgMAVQgDAEgBAEQgHANACANIAAAAQgMAIgNAHQgEACgEABQAGAJgFAOQgJAZANAYQAGALALABQAGAMAFAMQAFANALAIQABAAABABQAAAAABABQAAgBAAgBQgFgSADgUQAFgbAWgKQgGgIADgLQAMgqAzgBQAWAAAAAUQAKAAAHgDIAAAAQASgHADgaQADgiAegDQAYAaABAdQAAAcgOAVQAkgOAKgkQAGAlgPAqQAXgPADgfQAHAXgBAZQAYgVgGgnQAWAXADAfQAOgQgCgXQALATgCAVIAAABQgJAHgGAFQgIAHgEAIQgEgHgMgCQgbgGgLAVQgBAEgCAAQgDAAgEgFQgGgHgKgIQgYgRgXgRQgXgSgVgaAFIqzQgPgPAEgTADeqdQgKAUACAVADwqFQgDAIgDAIAC2quQgXAXAKAbADNqsQgVAWAIAcADkpFQgJgGgJAAQgFAOAEAMAC2o+QAOgMAOgBACjokQAZAZAbgRAD1pOQAAAAAAABQAAAIAAAHQAAABAAABQAbAMAWATQAWAUAZAPQAJAGAJAFQgEAHgKAFQgWALAGAWQAEAPAPACQAGAAAFAAQABAAACAAQAOgBANgHIAAAAQAGgEAGgEQAQgPALgRQACgEACgDIAAAAQAAAAAAgBQABgBAAAAQAEgJgEgGAD1o8QgBAIgEAGAFvqVQAbAOAaAPQAMAHAIAMAFnm3QgFgEgGgHQgHgJAHgJQAFgHAIgDQAJgDAJgFQAAgBABAAQAHgFAIgEQAIgFAKADQAGABAFAFAFbqVQAZAQALAcAFSqyQgBgUAOgMAGQnWIAAABAGFm5QAKAGAIAGQAGAFAGAHQAHAJgHAIQgEAFgGABQgJACgKgBQgBAAgCgBQgJgCgIgEQgFgCgEgDQgJACgGAFQgHAGgHAGQgHAHgIAFQgJAFgJADQgKACgKAAQgDAAgCAAQgGgCgEgFQgDgEgCgEQgBgCgBgBAFpmVQgEgDgCgDAD/meQAAgDAAgDQAAgIACgIAD/meQAAAEAAAFQAAAIABAIQAAADABAEQACgFAHgCQAIgDAIgEQAIgDAFgHQAGgHAAgKQAAgDgCgDQgGgGgIACQgJACgGAGQgHAGgIAFgAESlsQgIAAgGgBQgJgCgIgBQgJgBgIgBQgJgCgJgBQgKgBgJgFQgJgFgIAHQgIAGgFAHQgEAFACAFQgGARACAUQACASgCASQgCASAAATQgBATAFASQABACAAABQAEASADASQACASgIARQgIASgOAPQgMANgOANQgNAMgLAJIAAgBIhDh8QgMgXAAAAQgCgBgBgBIAAgBQgHgLADgKQAAgBAAgBQACgNAIgLQgIgZgPAPIgBAAQAAAAAAAAQAAAAAAAAIgBABQgBABgBABQgDADgBACIAAAAQAAABAAAAQgBACgBABQgCAJAIAJQAFAGAMAAACcjMQgFABgEABQgTAEhjgqQgOgIgBgEIAAgBQABgDAAgDQABgDAAgCQADgTAEgSQAEgTAFgTQAEgRALgNQAMgOAQgIQAPgJAQgIQAQgHAIgRQAJgTgDgVQgBgBAAAAAEPCkQAMgDAMAAQATAAATABQATAAASABQATAAARAJQANAIAEAUQADAUgLARQgJAPgIAOQgKANgMAMQgMAMgLAMQgNAOgNANQgOAPgLAPQgLAOgJAQQgJARgPAOQgNANgJAPQgJAQgKAQQgLAPgJARQgKARgNAOQgMANgJAQQgJARgLAQQgNATALAPQAEAGAHACQASAEATgBQAUgBASgGQASgHARgHQARgHAFgVQAGgaAPATQAJANgBAJQAGgCAIAIQACADABADQAAABAAAAQAEABAEADQAEAEABAKQACABADACQAHAHgDAIQgGATgVgGQAAAAgBAAQgOAJgPAIQgSAJgUABQgTABgUgFQgTgEgTgGQgTgGgSAIQgRAHgPAOQgOAOgUAAQgFAAgEAAQgPgBgNgEQgWgHADgTAEPCkQgFABgGABQgSAFgTAEQgSADgSABQgTACgUACQgRACgTACQAAADAAAEQAAATgCAUQgDATgHARQgBACgBACQABAAACAAQANgDANgCQAFgBAGgBQATgDATgBQATgCATgEQAKgCALgCQAIgBAIgBQASgDASgDQAFgBAGgCQAOgDANgDQAOgDAMgGAA5CdQAUAEATgEQASgCASgDQARgCARgDQATgEASgBQAUgCATgDQAZgEABAWQABAFACAEAEqDxQgIAQgOALQgOAMgNAOQgNAPgMAQQgLAQgIARQgHAQgGAQQgHARgGARQgHASgIARQgJASgFASQgEASgLAOQgLAPgIARQgHAQgLANQgLAOgMAOQgEAFgEAFQgBABAAABQgIAIgHAJQgLAMgKAMQAAAAgBABQgCACgBACQgNAQgEASAgaJCQAKgHAFgHQAKgQAIgPQALgRAKgQQAKgPAJgPQAKgOAKgPQAKgPAMgOQAMgOAOgOQAMgNAMgOQALgNAMgNQANgOAOgNQANgLALgMQAMgNAKgQAEsKTQAIgSALABQAAAAABAAAEvJ1QgBAAgBABQgHACgGAOAFNKUIgBgBQgLgFgMATAE1KwQACACADABQABAAAAAAABqqWQgFgbgTgVQgTgVgagKQgagKgaAEQgcAEgUAZQgMAKgLALQgJAKgHAKQgGAHgCAJQgCAGAAAGQAFgIAFgDQgDAGgCAGQgFATAAAXQgBALADAKQABAHADAHQABgIABgHQACgKAGgFQgFAeAPAdQAHAMAJAKQADgFAAgGQAAgKAHgHQgBAdAVAVQAJgKAEgGQALAZASATQALAJANAHQADgTACgVQABgKAEgJQAGAIAFAJQAEAHAFAFQADgYAAgbQgBgsAagZIAAAAQABABABABAAaqrQgYgIgVAKQgcANgSAXQgKANgHAQABqqWQgNACgKATQgMAYAXAMACAqOQgMgJgKABAANqTQgVABgRASQgUAVgIAdABDqZQgOgXgUgPQgYgTgbADQgRABgQAEAAlqIQgVAPgLAZQgJAcABAeAAyp3QgNAVgCAZQgCATADASACCpgQgWAUAEAcAgQkFIAAgBQABgVgIgNQgEgGgFgGQgNgOAHgSQgYAbAMAiQAEAJAIAFQAIAFAOgBgAg6kCQgRAJgMANQgOAOgTAGQgMAEgKgHQADAaAcAJQARAGARgJQASgJAFgUQAGgXATgNQADgCADABQgIgHgJgCQgJgBgJAFgAgQkEIAAgBQAAAAAAAAAAPkDQgDAEgDAEAjlA1IgBAAQAMgFALgGQARgKAPgLQAOgLAOgKQAPgMAOgNQAOgMALgPQAKgPAMgMQAMgMAKgPQAMgPAJgRQAKgRAHgSQAGgRAIgNABVg1IAAAAIAAAAABVg1QhpB7gGAEQgNALgNAMQgOAOgOANQgNANgMALQgCABgBACQgFAFgEAKIAAAAQgDAHgEAHQgCADgCAEQgEAGgEAFQgMAPgRAJQgHAEgIAEAh8C+QAVAAASgBQATgBATABQARABASgBQAPgBAQgDQASgDARgCQAEgBAEgBQgEgGgCgJQgBgDgBgDQgGgPgTAEQgTADgRAEQgTAEgUACQgSACgTABQgQABgSADABwC7QgDgRgSAEQgOACgPACAleEKQgIgKgDgMQgGgSADgTQACgTAKgRQAJgRANgOQAMgPAOgOQAMgNANgNQANgNAQgIQABgDAHgDQAFgCAIgDQgLAQAFAUQAGAUALAQQALAPATAEQASAEATAAQATAAAbAAAiOD2QAJgRAGgTQADgKAAgKAh8C0QAAAFAAAFAgMFLQgBABgBACQgOAKgWgCQgRgCgRgBQgRgBgSAAQgSAAgSgBQgSgBgSABQgSABgTABQgRACgSgBQgTgBgTgEQgTgEgUgCQgRgBgRgGQgTgHgRgIQgFgCgBgDQgBgDADgEQALgPASgHQARgGASgBAgSEvQgHAAgGABQgSADgSACQgRACgSgBQgRgBgSABQgRACgRADQgQACgRgBQgRgBgSAAQgRAAgRgFQgSgFgQgJQgSgJgPgMQgGgEgEgFAB/EMQgOAOgKAQQgLAPgGASQgGATgJASQgHARgIARQgJASgOAOQgNAOgNAOQgLAPgJAQQgEAIgIAFQgBgTAEgRQAEgUABgTQABgTACgSQABgSAAgSQAAgMABgMQAAgCAAgBQACgDABgEQAAgDAAgDQgBgJgIgGABiERQgFAJgIADQgDgBgIABQgSACgTAEQgQADgQAEQgLADgMACAmnEwQADARAEAQQAFASACASQADATAFASQAEASACASQABATAAAUQAAATgCAUQgCATgCAUQgBARgBASQgBARgCASQgDATgBAUQgBATACAUIAAAAQgRAGgPAJQgOAIgOACQgDAAgCAAQgCAAgCAAQgDAAAIADQACAAACABQAHABAEADQADACACACQARASAXALQASAIAJgFQALAEAEAHQACAFAFAEQAIAHALAAQAMAAALAAQAcAAAcABQAXAAAWAAQAfgBAeAJQARAFASAAQAcAAAbACQAVABATgJQAIgDADgIQAFgRAMgFQAagNAfgCQAGAAgBgFQgBgGgEgBQgDgCgGACQgdALgSgUQgFgFgBgIQAAgDgBgCQAAgBgBAAQgFABgEADQgJAGgGALQgEAGgFACQgBgEgDgFQgBALgHALQgDAGgDAFQgBgFgBgFQgCgMgBgMQAAgIAAgFQABgDAAgCQgDACgCADQgQATgEAaQgBAKABAJQgKgLgGgNQgCgEAAgEQAAgDAAgCAkUF4QAFAOACAOQAEASgBASAl3FmQAJANADAQQADAQADAQQAEASADATQADATACAUQABASgBATQgBATgHARQgIASgEAUQgDARAMAQQAEAGgBAIAk4GaQACAPABAQQACAQAAAQQAAAOAAAPQgBAPAAAQQgBAUAEASQABADADADQAOAPgNATQgMAQACAUQACAOAQAFQAGAWgDASQgCAJADAIAlKFkQAAAJAAAJAmYLkQABgPgBgOAhqL9QgBAJgKALQABgLgFgJQgGgLgIgHQgEATgSAMQgHAEgFAEQgBgFgBgFQgEgRAHgPQACgFAAgEQgDACgDACIAAAAQgNALgJAPQgHAMgDAMQgMgFgFgPQgIAEgJAKQgDgTABgTQABgJAEgFQgFADgFAEIgBABQgKAIgJALQgHAJgIAIQgCgLgDgLQgCgHgBAAQAAAUgVANQgGgJgBgMQgBgKAAgCQgHADgHAMQgKgFgDgMQgDgMACgMQgKAGgFALQgEALgHADQgBgKgEgKQgFgLgGgLQgCgFgDgFQABAFABAFQAAABAAABQABATgPANAnYLjQABAAACABQAFACAHADQgYgHAEABQACAAADAAgAgZH6QAAABAAACQABATgBAUQAAAPgBAPQAAACAAADQAAAIAAAJQAAAKABAKQAAATABATQABAKABALAAeKdIAAAAQgCgBgBAAQgHgCgHABQgRAEgSAIQABAIABAIQACATABARAgSJcQARAIAQAHQATAHATABQAGABAHAAAA+KvQgBANALAAAjaJ/QAAASABASQABATABAUAi6K1QAAALADAKACMpYQgIANACAO");
	this.shape_12.setTransform(-14,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#996600").s().p("ABwDxIgDgIIABgDIAAgCIAAACIgBADQgBAKgJAKQAAgKgFgKQgGgLgIgHQgDATgTAMIgLAIIgCgKQgEgQAGgQIADgJIgHAEIAAABQgNAKgIAPQgHAMgDANQgMgGgDgPQgIAEgJAKQgEgTACgTQABgJAEgFIgLAIIAAAAQgLAJgJAKIgOARIgFgWQgCgHgBAAQgBAVgUANQgHgJgBgNIAAgMQgHAEgHALQgLgEgDgMQgCgNACgMQgLAGgEALQgEAMgHACQgBgKgEgKIgLgWIgFgKIACALIAAABQABAUgPAMIgEgDQAAgPgBgOIAAAAQgBgTABgUIADgnIADgjIADgjIADglQACgUABgTQAAgTgCgUQgCgSgEgRQgEgTgDgTQgDgSgEgSQgFgQgCgRIAHgCQgBgDADgDQAKgPATgIQARgGASgBQAEAFAFAFQAQALARAJQAQAJASAGQARAEASAAQARAAAQABQAQABARgCQARgDARgBQARgCASABQARABASgCIAkgEIAMgCQAIAGABAJIAAAGQAAAEgCADIAAADIgBAYIgCAkIgCAlQgBATgEAUQgEASAAASIAAADQABAUAAARIgBAeIAAAFIAAARIAAAUIACAmIABAVIACAQIAEAkQgKAHgGAKQgDAGgFACIgEgJQgCALgGAMIgGAKIgCgJQgDgNAAgMIAAgNIABgFIgGAGQgQASgDAaQgCAKACAJQgKgLgGgNgAhGC/QgDgFAAgFIABgHIABgNQAAgNgEgOQgQgFgBgOIgBgFQAAgRAKgOQAGgJAAgIQAAgJgHgIIgDgFQgEgQAAgQIAAgHIABgdIAAgdQAAgQgBgQIgDgfIADAfQABAQAAAQIAAAdIgBAdIAAAHQAAAQAEAQIADAFQAHAIAAAJQAAAIgGAJQgKAOAAARIABAFQABAOAQAFQAEAOAAANIgBANIgBAHQAAAFADAFgAAhC2QgDgKAAgLQAAALADAKgAAACPIAAAnIAAgnIAAgkIAAAkgAiIB5IAAgDQAAgGgDgFQgJgNAAgNIABgHQADgUAIgSQAIgRABgTIAAgLIgBgYIgFgnIgHglIgGggQgDgQgIgNQAIANADAQIAGAgIAHAlIAFAnIABAYIAAALQgBATgIARQgIASgDAUIgBAHQAAANAJANQADAFAAAGIAAADgAgwhaIAAgEQAAgQgDgQQgDgOgEgOQAEAOADAOQADAQAAAQIAAAEgAhwicIAAgSIAAASgACui8QAPAAAKgHIAAAAIACgBIADgDIgDADIgCABIAAAAQgKAHgPAAIAAAAIAAAAIgHAAIgBAAIgigDIgjgBIgkAAQgSgCgSACIgjACIgCAAIgTAAIAAAAIgBAAIgGAAIgHAAQgTgBgTgEQgUgEgTgBQgSgCgQgFQgTgIgSgIQgEgCgBgDQABADAEACQASAIATAIQAQAFASACQATABAUAEQATAEATABIAHAAIAGAAIABAAIAAAAIATAAIACAAIAjgCQASgCASACIAkAAIAjABIAiADIABAAIAHAAIAAAAIAAAAg");
	this.shape_13.setTransform(-35.7,53.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0033FF").s().p("AhmFJQgSgCgRAAQgSAAgRgEQgSgGgQgIQgRgJgQgMQgFgFgEgFQgIgJgEgMQgFgTACgTQACgTAKgQQAKgRAMgPIAagdIAZgZQANgOARgIQAAgDAHgCIANgFQgKAQAFAUQAFATAMAQQALAQASAEQATAEATgBIAtABIgCACQgFAGgFAJIAAABIgHANIABAIIAAACIAHAAIAGAAIAAAAIAAAAIAMAAIAMAAQATgCATACQARABASgBQAQgBARgDIAjgGIAIgBIAdgFQARgEADARIABAHQAAAUgDATQgCATgHASIgCAEQgFAIgIADQgDgBgIABIglAGIggAHIgaAFIgMACIgkAEQgSACgPgBQgSgBgRACQgRABgRADQgMACgMAAIgJAAgAgaDeQgFATgJARQAJgRAFgTQADgKABgKQgBAKgDAKgAgbDHIgIAMQgMAOgQAJIgPAIIAPgIQAQgJAMgOIAIgMIAEgHIgEAHgAgJDKIgGAAIgHAAIAAgCIgBgIIAHgNIAAgBIAhgEIAlgDQATgCATgDIAngIQASgDAHAPIACAGQACAIAEAHIgIABIgjAGQgRADgQABQgSABgRgBQgTgCgTACIgMAAIgMAAIAAAAIAAAAgACkC/IAAAAgAC6gpIAAAAIhDh9IgMgWIgCgDIAAAAQgJgMACgKIAAgBQAEgNAIgMIAHgIIgBAHIAAAAQABAEAOAIQBiAqAUgDIAIgCQAFARACASQACATgHARQgIASgOAOIgaAaIgYAVIgBAAIABAAIgBAAgAgKisQgcgJgCgaQAKAHAMgEQASgFAMgOQANgOAQgJQAKgFAJACQAIABAJAHQgDAAgDABQgUANgFAXQgFAVgTAJQgKAFgKAAQgFAAgHgDgABRjaQgIgKADgIIABgEIAAAAIAAAAIAEgGIADgCIAAAAIABAAIAAgBIAAAAQASgPAHAZQgIAMgEANIAAABIgCAAQgKAAgFgFgAA+j8QgJgGgDgJQgNghAZgcQgIATANAOQAGAFAEAHQAHAMAAAWIAAAAIgGAAQgKAAgGgDg");
	this.shape_14.setTransform(-24.1,-1.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgcAaQgGgDgFgHQgHgJAGgHQAGgIAIgDQAJgDAIgFIACgBIAMgIQAJgFAJACQAHABAEAFIAKACIgBABIAAACIAAAAIgEAGQgLAQgRAOQgFAFgGADIAAAAQgLAIgOABIgDAAgAALgCIAAAAIAAAAIAAAAIAAAAg");
	this.shape_15.setTransform(25,-46.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFCC99").s().p("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");
	this.shape_16.setTransform(-2.8,3.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF9900").s().p("AizCnQgUgTgLgYIgNAQQgVgWABgdQgHAHAAAKQAAAGgDAFQgJgKgHgMQgPgdAFgeQgGAGgCAJIgCAPIgEgNQgCgLAAgLQABgXAFgQIAEgNQgFADgFAJQAAgHACgGQACgIAGgHIAQgVQALgLAMgKQAUgZAcgEQAcgDAaAKQAaAJATAVQAUAWAEAaQAKgBAMAKQAMgVASgSQAUgUAZgJQAcgJAeAGQARAEAMAJQACARAKgFQgFgHgHgFIAAAAQgCgNADgNQARhJBFgLQguAdgNA0QAkg3BCgHQgtAUgLAqIAXgLQAsgRAmAUQg0gIgwAcQAagGAbAGQAjAJARAYQgbgPgbAPIATALIAMAIQAPAMAEAQQgIgPgQgHQgMgFgMgBQgQgDgRAEIAOAIIAQAHQApATANAqQANAugfAmQADgKABgJIAAAAQABgWgLgTQACAXgOARQgDgggWgWQAGAmgYAVQABgZgHgXQgDAfgXAPQAPgqgGglQgKAlgkAOQAOgWAAgcQgBgdgYgYQgeADgDAgQgDAbgRAGIgBABQgHADgKgBQAAgUgWAAQgxABgMAqQgDALAGAIQgWAKgFAbQgDAUAFASIgBABIgBgBQgMgIgFgNIgLgYQgLAAgGgMQgNgYAJgYQAFgPgGgIIAJgEIgJAEIgCgCIAAAAQgaAZABArQAAAbgDAYQgFgFgEgHQgFgJgGgHQgEAJgBAJQgCAWgDASQgNgGgLgKgAiRBZIgBgUIAAgRQACgYANgWQgNAWgCAYIAAARIABAUgAi6BXIAAgFQAAgbAKgaQALgZAVgMQgVAMgLAZQgKAaAAAbIAAAFgAhFBNIgBgIQAAgXATgRQgTARAAAXIABAIgAgvBAIAAgEQAAgMAGgLQgGALAAAMIAAAEgAjQgBQgUAUgIAcQAIgcAUgUQARgSAXAAQgXAAgRASgAhWAgQgQgIAAgNQAAgGAEgGQAKgUANgCQgNACgKAUQgEAGAAAGQAAANAQAIgAg+ASQgLAIgNAGQANgGALgIIAAgBIAAgHQAAgJAFgIIAEgHIgEAHQgFAIAAAJIAAAHgADtAFQAMAHAIANQgIgNgMgHIg1gbIA1AbgAjKgqQgcAOgSAWQgKAMgHAPQAHgPAKgMQASgWAcgOIADgBQALgEALAAIABAAIAAAAQALAAAKADQgKgDgLAAIAAAAIgBAAQgLAAgLAEIgDABgADIAUQgLgZgZgRQAZARALAZgAAfAJIAAgGQAAgQAIgQQgIAQAAAQIAAAGgAAzAIIAGgOIgGAOgAAJADQgCgGAAgHQAAgTAPgPQgPAPAAATQAAAHACAGgAgMABQgDgGAAgIQAAgSAPgQQgPAQAAASQAAAIADAGgAiUhAQAUAQAOAWQgOgWgUgQIgBgBQgVgPgXAAIAAAAIAAAAIgHAAIgBAAQgRACgQAEQAQgEARgCIABAAIAHAAIAAAAIAAAAQAXAAAVAPIABABgACbgzIAAgCQAAgTANgKQgNAKAAATIAAACgACRg0QgMgMAAgOIABgIIgBAIQAAAOAMAMg");
	this.shape_17.setTransform(4.3,-63.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_8},{t:this.shape_15},{t:this.shape_5},{t:this.shape_14},{t:this.shape_13},{t:this.shape_3},{t:this.shape_12},{t:this.shape},{t:this.shape_11}]},9).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.8,-83.3,124.8,166.6);


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


(lib.VolumeButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// B
	this.instance = new lib.Symbol89();

	this.instance_1 = new lib.Symbol90();

	this.instance_2 = new lib.Symbol88("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.1,-4,10.9,16.4);


(lib.title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		playSound("anobjectivecomplementisthesecond");
	}
	this.frame_69 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(65).call(this.frame_69).wait(1));

	// Shimmy
	this.instance = new lib.Paintinglady();
	this.instance.setTransform(258.4,150.1,1.014,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(70));

	// Layer 9
	this.instance_1 = new lib.Painting();
	this.instance_1.setTransform(155.1,162.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(70));

	// ObjComp
	this.instance_2 = new lib.Tween43("synched",0);
	this.instance_2.setTransform(207.9,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.9,-10.9,529.7,243.4);


(lib.Symbol92 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Level 1
	this.instance = new lib.VolumeButton();
	this.instance.setTransform(0,-4);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.VolumeButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.1,-8,10.9,16.4);


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


(lib.Symbol93 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Level 1
	this.slidin = new lib.Symbol92();

	this.timeline.addTween(cjs.Tween.get(this.slidin).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.1,-8,10.9,16.4);


(lib.VolumeControl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Level 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3366").s().p("AgTAZQgJgHAAgOQAAgNAIgKQAIgLAMAAQAJAAAGADQAIAEAAAIQAAAGgHAFIgMAEIgVALQADAFAFACQAFADAFAAIAJgCQAHgCACgDQABgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAIAEACQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAAHgLAEQgJAEgIAAQgLAAgJgGgAgLgOQgEAFgDAJIASgGQAJgFAEgEQgFgFgIAAQgGAAgFAGg");
	this.shape.setTransform(-5.2,-29.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF3366").s().p("AgCAiQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIgBgVIgBgTQAAgHgCgDQgEACgEAEIgHAIIgDAEIgBAIIgBAKIABAFIAAAFIgBAEQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgGAAAAgPIAAgKIABgJIAAgJIgBgJQAAgOAGAAQAAAAABAAQABAAAAABQABAAAAAAQABABAAAAQABABAAAAQAAABABAAQAAABAAABQAAAAAAABIAAADIAAAEIAAAGQADgHAGgFQAGgFAEAAQAIAAACAJQAEgEAEgCQAEgCAGAAQAKAAAEAKIACARIAEAfQAAABAAAAQAAABAAABQAAAAgBAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgEAAgBgFIgCgSIgCgQIgCgIQgCgFgDAAQgCAAgGADIgHAGIAAAKIACAOIABAQQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAAAAAQgBABgBAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAgBgBAAg");
	this.shape_1.setTransform(-13.2,-29.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3366").s().p("AANAbQgIAFgHAAQgIgBgFgDQgGgEgBgHQgCgPAAgLIACgSQABgFAEAAQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIAAAIIgBAJIAAAPIACALIAEACIAEAAQAGAAAIgCIAAgMIAAgJIABgWQABgGAFABQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABIgBAXIAAAKIAAAMIAAAFIAAADQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQgEAAgBgGg");
	this.shape_2.setTransform(-21,-29.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF3366").s().p("AgFAqIABgVIAAgVIABgUIAAgVQAAgGAEAAQAFAAAAAGIAAAVIAAAUIgBAdIgBANQAAAGgEAAQgFAAAAgGg");
	this.shape_3.setTransform(-25.8,-31.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF3366").s().p("AgQAYQgIgIAAgNQgBgMAHgKQAIgMANAAQAMAAAGALQAFAJAAALQgBAMgGAJQgIALgLAAQgJAAgHgIgAgJgKQgEAGAAAHQAAAIAFAFQAEAEAEAAQAFAAAEgFQAFgFABgIQAAgVgNAAQgGAAgFAJg");
	this.shape_4.setTransform(-30.6,-29.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF3366").s().p("AgJAqQgHgRgJggIgFgQQgDgMAAgEQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAQAEAAABAFIADAKIAFAUQAGAUAFAQIABgBIANgpIAGgOQADgJADgEQACgDADAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAIgBAEIgGALIgFANIgPApIgGAOQgBAEgDAAQgFAAgBgFg");
	this.shape_5.setTransform(-37.2,-30.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Level 4
	this.numeros = new lib.Symbol94();
	this.numeros.setTransform(4.1,-22.1);

	this.timeline.addTween(cjs.Tween.get(this.numeros).wait(1));

	// Level 2
	this.vol = new lib.Symbol93();
	this.vol.setTransform(4.1,-22.1);
	this.vol.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 51, 102, 0)];
	this.vol.cache(-7,-10,15,20);

	this.timeline.addTween(cjs.Tween.get(this.vol).wait(1));

	// Level 1
	this.instance = new lib.Symbol87("synched",0);
	this.instance.setTransform(-527.9,-565.1);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 51, 102, 0)];
	this.instance.cache(480,541,59,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.9,-41.8,55.8,28.1);


// stage content:
(lib.com_scene0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene0:0,scene0_repeat:68});

	// timeline functions:
	this.frame_0 = function() {
		/* 
		*/
		playSound("SalsaGroove");
		playSound("SalsaGroove",-1);
		this.btn_menu.addEventListener("click", openMenu.bind(this));
		this.btn_goNext.addEventListener("click", openNext.bind(this));
		
		function openMenu(){
		
		 window.open ("../menu/menu.html","_self");
		}
		
		function openNext(){
		
		 window.open ("com_scene01.html","_self");
		}
		
		/*function openPrev(){
		
		 window.open ("puzzle_aux.html","_self");
		}*/
	}
	this.frame_67 = function() {
		/* _root.gonow = true;*/
	}
	this.frame_79 = function() {
		/* gotoAndPlay("scene0_repeat");
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(67).call(this.frame_67).wait(12).call(this.frame_79).wait(1));

	// Actions
	this.instance = new lib.skiptomenu();
	this.instance.setTransform(514.1,20.3);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.skiptomenu(), 3);

	this.s = new lib.VolumeControl();
	this.s.setTransform(473.1,48.5);
	this.s.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 51, 102, 0)];
	this.s.cache(-48,-44,60,32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.s},{t:this.instance}]},79).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EglOAWdMAAAgs5MBKdAAAMAAAAs5g");
	mask.setTransform(275.9,180.6);

	// Scene
	this.instance_1 = new lib.title();
	this.instance_1.setTransform(279.8,184.1,1,1,0,0,0,208.6,116.4);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(80));

	// Layer 7
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("EAkZAVeMhIxAAAMAAAgq7MBIxAAAg");
	this.shape.setTransform(277,181.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D2F4FF").s().p("EgkYAVeMAAAgq7MBIxAAAMAAAAq7g");
	this.shape_1.setTransform(277,181.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(80));

	// buttons
	this.btn_menu = new lib.skiptomenu_1();
	this.btn_menu.setTransform(514.1,20.3);
	new cjs.ButtonHelper(this.btn_menu, 0, 1, 2, false, new lib.skiptomenu_1(), 3);

	this.instance_2 = new lib.Copyright("synched",0);
	this.instance_2.setTransform(275,393.5);

	this.btn_goNext = new lib.goNext();
	this.btn_goNext.setTransform(494,352.3);
	new cjs.ButtonHelper(this.btn_goNext, 0, 1, 2, false, new lib.goNext(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_goNext},{t:this.instance_2},{t:this.btn_menu}]}).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(312.5,201.8,508.8,401.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;