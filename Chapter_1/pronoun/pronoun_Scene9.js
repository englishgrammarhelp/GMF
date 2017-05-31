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
		{src:"sounds/_12a.mp3", id:"_12a"},
		{src:"sounds/_12b.mp3", id:"_12b"},
		{src:"sounds/_13b.mp3", id:"_13b"},
		{src:"sounds/_13c.mp3", id:"_13c"},
		{src:"sounds/_16a.mp3", id:"_16a"},
		{src:"sounds/_18b.mp3", id:"_18b"},
		{src:"sounds/_19b.mp3", id:"_19b"},
		{src:"sounds/_2a.mp3", id:"_2a"},
		{src:"sounds/_3a.mp3", id:"_3a"},
		{src:"sounds/_4a.mp3", id:"_4a"},
		{src:"sounds/_6a.mp3", id:"_6a"},
		{src:"sounds/_7b.mp3", id:"_7b"},
		{src:"sounds/_9a.mp3", id:"_9a"},
		{src:"sounds/bgmusic.mp3", id:"bgmusic"},
		{src:"sounds/JinglePronoun.mp3", id:"JinglePronoun"},
		{src:"sounds/MenuPronoun.mp3", id:"MenuPronoun"},
		{src:"sounds/s_coolcheer.mp3", id:"s_coolcheer"},
		{src:"sounds/hesheit.mp3", id:"hesheit"},
		{src:"sounds/himherit.mp3", id:"himherit"},
		{src:"sounds/i.mp3", id:"i"},
		{src:"sounds/me.mp3", id:"me"},
		{src:"sounds/nominative.mp3", id:"nominative"},
		{src:"sounds/objectis.mp3", id:"objectis"},
		{src:"sounds/objectivecase.mp3", id:"objectivecase"},
		{src:"sounds/objectsof.mp3", id:"objectsof"},
		{src:"sounds/replaces.mp3", id:"replaces"},
		{src:"sounds/subjectis.mp3", id:"subjectis"},
		{src:"sounds/subjectof.mp3", id:"subjectof"},
		{src:"sounds/substitutes.mp3", id:"substitutes"},
		{src:"sounds/them.mp3", id:"them"},
		{src:"sounds/they.mp3", id:"they"},
		{src:"sounds/us.mp3", id:"us"},
		{src:"sounds/we.mp3", id:"we"},
		{src:"sounds/you.mp3", id:"you"}
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



(lib.words = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHAIQgEgDAAgFQAAgEAEgDQADgEAEAAQAFAAADAEQADADABAEQgBAFgDADQgDADgFABQgEgBgDgDg");
	this.shape.setTransform(68.6,7.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgaA2QgPgGAAgJQAAgEADgDQADgDAEAAQADAAAFAFQACACAJABIALABQAFAAAHgCQAJgCAAgHQAAgNgTgFIgIgCQgNgDgFgDQgIgEAAgLQAAgUATgJIARgGQANgEAGgDQAEgBAEAAQAFAAACACQADADAAAFIABAIIABAIQAAAFgCACQgEADgDAAQgGAAgCgEQgCgCAAgIIgXAHQgOAGAAAJIAGACQAUAEALAHQAQAIAAATQAAAQgNAIQgMAHgPAAQgOAAgLgEg");
	this.shape_1.setTransform(60.9,2.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgiBCQgNgOAAgVQAAgaAOgOQANgQAVAAQALAAAGAEIAJAGIADg3QACgJAHAAQAJAAAAAKQAAAOgEAuIgBAaQAAAhADARIAAACQAAAEgCADQgDACgEAAQgGAAgDgJQgHAFgHADQgIACgGABQgUgBgOgNgAgWABQgIAJAAAVQAAAMAJAJQAJAJAMAAQAGAAAGgDQADgBAIgHIADgDIgBgRIAAgMIABgLQgEgHgGgCQgGgFgJAAQgOAAgJAIg");
	this.shape_2.setTransform(50.4,0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAYAvIgDgVIgCgWIABgHIAAgJQAAgVgIAAQgKAAgJANQgJALgEAQIgCAKIAAAJIAAAJIABAJQAAAEgDADQgCADgFAAQgEAAgCgDQgDgDAAgEIgBgJIgBgJIACgaIACgbIgBgKIAAgJQAAgEADgDQACgCAFAAQAIAAACAMIAAAMQAQgWAPAAQAQAAAGAOQAFAJgBASIAAAKIAAAHQAAAIADANQACANAAAIQgBAEgCADQgDACgEAAQgIAAgBgJg");
	this.shape_3.setTransform(39.6,3.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AggAqQgPgMAAgWQAAgYAMgRQANgTAWAAQAPAAAKAGQANAGAAAOQAAAKgLAIIgVAJIgjASQAFAIAIAEQAJAEAIAAQAHAAAJgCQAMgEADgFQADgFAEAAQAEAAACACQADADAAADQAAALgRAIQgPAHgPAAQgUAAgNgLgAgTgZQgIAJgEARIAegMQAQgJAHgGQgIgIgOAAQgLAAgIAJg");
	this.shape_4.setTransform(28.9,3.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgIBHQgDgDAAgFIAAgRIgBgSIACgWIABgWQAAgEACgDQADgDAEABQACgBADADQACADABAEIgBAWIgBAWIAAASIABARQAAAFgEADQgCACgCAAQgEAAgDgCgAgFg0QgEgEABgFQgBgEAEgEQADgDADAAQAFAAAEADQACAEAAAEQAAAFgCAEQgEADgFAAQgDAAgDgDg");
	this.shape_5.setTransform(20.6,0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AglAsIAAhCIABgKIAAgJQAAgKAIAAQAKAAAAAQQASgSAWAAQAIAAADAGQAFAGAAAMIAAAHQgBAMgJAAQgIAAAAgKIgBgHIAAgIQgQACgHAHQgIAGgHANIABAzQAAAKgKAAQgJAAAAgKg");
	this.shape_6.setTransform(13.1,3.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgPBTQgDgDAAgEIABgCQACgMAAgPIgBgbIAAgaIgPABQgKAAAAgKQAAgJARgBIAKAAIABgPQADgWAIgKQAIgMAWAAQAOAAAAAJQAAAJgNAAQgYAAgDAhIAAAGIAWgBQAPAAAAAKQAAAHgHABIgIABIgXABIAAAUIAAATIAAASQAAASgBALQAAAHgIAAQgEAAgDgCg");
	this.shape_7.setTransform(2.8,1.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgZBMQgDgDAAgEQAAgJAVgwIgjhBIgEgHQgDgEAAgEQAAgDADgDQAEgEADAAQAFABACADQARAXARArIAOgiIAPgeQAEgFAFgBQAEAAADAEQADACAAAEIgCAFIghBHQgNAbgEASIgHATQgCAHgHAAQgEgBgDgCg");
	this.shape_8.setTransform(-13.6,5.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgEA5QgDgDAAgEIgCgjQgDgVAAgMQAAgKgDgGQgHADgHAHIgLANIgFAGIgBAQIgBAQIABAJIABAHQAAAEgDADQgDADgEAAQgLAAAAgZIABgSIABgPIgBgQIgBgPQAAgXAKAAQAEAAADAEQADADAAAEIgBAGIAAAGIAAAKQAFgLAKgIQAKgIAHAAQAPAAAEAPQAFgHAIgEQAHgDAKAAQAQAAAGARIAEAcIAHA1QAAAEgDADQgCADgFAAQgIAAgBgJIgEgeIgDgcIgDgNQgEgJgDAAQgEAAgKAGQgJAGgDADIAAASIADAZQACAPAAAKQAAAEgDADQgCADgEAAQgDAAgCgDg");
	this.shape_9.setTransform(-26.2,3.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AggAqQgPgMAAgWQAAgYAMgRQANgTAWAAQAPAAAKAGQANAGAAAOQAAAKgLAIIgVAJIgjASQAFAIAIAEQAJAEAIAAQAHAAAJgCQAMgEADgFQADgFAEAAQAEAAACACQADADAAADQAAALgRAIQgPAHgPAAQgUAAgNgLgAgTgZQgIAJgEARIAegMQAQgJAHgGQgIgIgOAAQgLAAgIAJg");
	this.shape_10.setTransform(-45.4,3.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgkAsIAAhCIAAgKIAAgJQAAgKAJAAQAJAAABAQQARgSAWAAQAIAAAEAGQADAGAAAMIAAAHQAAAMgJAAQgIAAgBgKIAAgHIAAgIQgQACgHAHQgJAGgFANIAAAzQAAAKgKAAQgJAAABgKg");
	this.shape_11.setTransform(-55.5,3.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAfAxIgHgHIgRAIQgHADgDAAQgWAAgLgNQgJgMgBgZQAAgWARgRQAQgRAUAAQAJAAAKAFQAOAFAAAIQAAADgCACIgBAMIgBAUQAAAMACAHIAFARIADAFIABACQAAAEgEACQgCADgDAAQgCAAgFgFgAgPgXQgMAMAAAOQABAQAFAIQAGAIAMAAQAHAAAHgDIAJgHQgDgZAAgMIAAgJIACgLIgGgDIgEAAQgNAAgLAMg");
	this.shape_12.setTransform(-65.7,3.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73,-15.9,146.1,31.9);


(lib.VertLine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("AAKEiIgTAAIAApDIATAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgIEhIAApBIARAAIAAJBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-30,4,60);


(lib.Theydogarmstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ACoBzIgFgBIgMgBIgQgDQA6ADAqgKIAAABIgCABIAAABIgBAAQgLgBgJAJIgDABIgpAAgACABsIgHgBIgHgBIgBAAIgDgBIgBAAIgIgCIgEgBIABAAIACgCIgNgBQg5gIgigcQgogdgCAUIAAACQgrgPgogTIgEAAQgqAWglgSQgIgGgDgHQgGgLgGAAQgWADADggIAIgGIABgEIAAgDQgIgDAEgMQASgbAYgXIAEgBQBngTBkAbIAEABQBEARBBAWIABADIgFgBQhbgahcgKIgFgBQhKgMhGADIgDABIgmApQAOAJgLASQAAAAgBAAQAAABAAAAQAAAAgBAAQgBAAAAAAIgBADIAAABIgIAJIAMgGQALgDAGAFIgBAIIgBAEQgFAdAhgGIgCAEQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAOAYAogTQAPgHAPgDQAdAYAaABIAAgCQAJgeANAaIABAEQAfAVAhAOIAAgCQAGgbAdAgIABAEIAEAAQASADAQAFIAEABQAPAIAKAPIgCgBgAAKA1QgugmAlgzQAQgXAagJQAZgFATAQIACACQBUAIgdBOQgGAQgPAGIhxAAgADAgbIgCgBQgSgQgZgIQAdAIATgCQAFAFAIACIAPAEQAKADALAAIAGAAIADAAIACAAQgFAIgWAAQgPAAgVgDg");
	this.shape.setTransform(-0.7,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC6633").s().p("ADIBtIADgBIgBABIgCAAgAB9BoIgEgBQgKgOgQgIIgDgBQgQgGgTgCIgDgBIgBgEQgdgfgHAbIAAABQgggOgfgUIgBgEQgOgagIAeIAAACQgagBgdgYQgQADgOAGQgpAUgNgZQABAAAAAAQABAAAAAAQAAAAAAAAQABAAAAgBIACgDQghAFAFgdIABgDIABgJQgHgEgKADIgMAGIAHgKIABAAIAAgEQABAAABAAQAAAAABAAQAAAAAAAAQAAAAAAgBQAMgSgPgJIAngoIADgBQBFgEBLANIAEABQBdAJBaAaIAFABIAKADQAYAJASAPIADABQA3AIAIgNIgCAAIgDAAIAKgBIAGAPQAFAVgGAOQgCAHgBAHQgJAQgFAWIgFAQIgFARIgDADIAAgCQggAIgpAAIgcgBgAAhhJQgaAJgOAWQgnA0AvAmIBwAAQAQgHAFgPQAdhOhTgJIgCgCQgOgMgSAAIgNACgADeBlIACgBIgBABIgBAAgABkBkIAAgBIAEABIABABIgFgBg");
	this.shape_1.setTransform(0.3,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.2,-11.8,52.5,23.1);


(lib.theywordstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9900FF").s().p("AgZBMQgDgDAAgEQAAgJAVgwIgjhBIgEgHQgDgEAAgEQAAgDADgDQAEgEADAAQAFABACADQARAXARArIAOgiIAPgeQAEgFAFgBQAEAAADAEQADACAAAEIgCAFIghBHQgNAbgEASIgHATQgCAHgHAAQgEgBgDgCg");
	this.shape.setTransform(17.8,5.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9900FF").s().p("AggAqQgPgMAAgWQAAgYAMgRQANgTAWAAQAPAAAKAGQANAGAAAOQAAAKgLAIIgVAJIgjASQAFAIAIAEQAJAEAIAAQAHAAAJgCQAMgEADgFQADgFAEAAQAEAAACACQADADAAADQAAALgRAIQgPAHgPAAQgUAAgNgLgAgTgZQgIAJgEARIAegMQAQgJAHgGQgIgIgOAAQgLAAgIAJg");
	this.shape_1.setTransform(7.6,3.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9900FF").s().p("AAaBJIgEgWIgCgYIAAgHIABgIQAAgQgKAAQgLAAgJAJQgFAGgIAQQAAAlgEAHQgCAGgGAAQgEAAgDgDQgDgDAAgDIABgFQABgCAAgMIAAgOIAAhGIABgRIgBgJIgBgJQAAgEADgDQADgDAEAAQAIAAABAJIACARIgBAVIAAAWIAAAIQAIgKAJgGQAHgFAKAAQARAAAGALQAEAHABAQIAAASIACAUIAEAVIAAACQAAAEgDADQgDADgEAAQgHAAgCgIg");
	this.shape_2.setTransform(-3.7,0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9900FF").s().p("AgGBHQgDgDAAgEIABgEIAAgFIAAgOIgBgPIgCglIgDgnIgJAAQgVAAgNgDQgHgCAAgIQAAgEACgDQADgDAFAAIAPACIAQABIASAAIAQgBIAWABIAWACQAEAAADADQADACAAAFQAAAEgDADQgDACgEABIgWgBIgWgBIgHAAIACArQADAbAAAPIAAAKIABALQAAAHgCAFQgDAGgFAAQgDAAgDgDg");
	this.shape_3.setTransform(-15.5,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.3,-15.9,50.7,31.9);


(lib.theysentstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgkCDQgFgGAAgHQAAgGAQgeIAVgnQgfgngJgVQgHgTgSgbIgdgtQgDgFAAgEQAAgIAGgEQAFgGAHAAQAIAAAGAIIANAWQATAbAFAJQANAVAHATQAGAOARAWIAnhdIASglQAFgLALgBQAHAAAFAGQAGAEAAAIQAAAHgJARQgFAHgGANIgeBIQgRAngPAfIgUAmIgIASQgGAKgKAAQgGAAgGgEg");
	this.shape.setTransform(35.9,-5.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhKCDQgQgPAAg3IAAgYIACgcQgCgEAAgEQAAgEADgFQADgxAAgYIgBgSIgCgTQAAgUARAAQAHAAAFAFQAVgGASgCQASgDAOAAQAqAAAZAKQALAEAAAMQAAAHgEAFQgFAGgIAAIgFgBQgdgIgbAAQgNAAgPADQgRACgTAGIACARQAAAYgDAqIBIgIIApgDQAHAAAGAFQAFAFAAAIQAAANgQACIgpAEIhNAHIgBAXIAAAUQAAAmAFAHQAEAEAXAAIAeAAIAggBIAKgBIAKgBQASAAAAASQAAAOgOADQgQADg0AAQg1AAgPgOg");
	this.shape_1.setTransform(14.9,-5.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhqCHQgFgFAAgHQAAgSADgkQADgkAAgSIAAgbIgBgcIACgpIABgpQAAgHAFgFQAFgEAHAAQAHAAAEAEQAFAFAAAHIgCApIgCApIACAqIBIgMQArgJAeAAQACgYAAgyQAAgNAEgNQAGgSAKAAQAGAAAFAFQAGAEAAAHIgCAHQgCAIAAANIAAAQIAAAPQAAARgDAiQgDAgAAARIACAnIACAnQAAAHgFAFQgEAEgHAAQgHAAgFgEQgFgFAAgHIgCgnIgCgnIABgaQgdABgpAIIhIAOQAAAQgDAcQgDAcAAAQQAAAHgFAFQgEAEgHAAQgHAAgFgEg");
	this.shape_2.setTransform(-9.8,-5.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgLB9QgGgFAAgHIABgIIACgIIgCgZIgBgZQAAgZgEgqQgEgwgBgVIgPABQgmAAgVgGQgNgEAAgNQgBgHAFgFQAFgGAIAAIAcADQAQACALAAIAfAAIAdAAIAoABIAmACQAHAAAGAFQAEAFAAAIQAAAHgEAFQgGAFgHAAIgmgCQgagCgNABIgNAAQABAXAEA1QADAwAAAbIACASIABASQAAAMgEAIQgEAMgKAAQgFAAgGgFg");
	this.shape_3.setTransform(-33.9,-5.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.5,-33.3,99,52.8);


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


(lib.pronountheysmyword = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgtCFQgFgFAAgHQAAgRAlhSIg9hzIgIgNQgEgIAAgFQAAgHAFgFQAFgGAHAAQAIAAAEAGQAdApAgBKIAZg7QANgeANgWQAGgKAIAAQAHAAAGAFQAFAFAAAHQAAAEgCAEIg7B+QgWAvgKAfIgLAhQgEANgLAAQgHAAgGgFg");
	this.shape.setTransform(13.2,10.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgIBkQgFgFAAgHQAAgVgEgoQgFgnAAgVQAAgSgFgKQgMAGgMAMIgUAXIgJAKIgCAdIgCAdIACAPIACANQAAAHgFAFQgGAEgHAAQgTAAAAgrIACgfIACgdIgCgbIgCgbQAAgnASAAQAHAAAFAGQAGAGAAAHIgBAKIgBAKIAAASQAJgSARgPQASgPAMAAQAbAAAIAbQAJgNANgGQANgGARAAQAcAAALAfQACAGAFAqQAFAbAHBFQABAGgFAFQgGAFgHAAQgOAAgCgPIgHg1IgFgzQgCgMgEgLQgGgPgHAAQgGAAgRAKQgRAKgFAGQAAAQABAQIAFAsQADAbAAASQAAAHgEAFQgFAFgHAAQgGAAgEgFg");
	this.shape_1.setTransform(-8.8,5.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.8,-26.3,49.6,52.8);


(lib.pronountheysfriendsword = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgvBeQgagJAAgRQAAgHAGgFQAFgFAGAAQAGAAAJAIQAEAEAOACQALACAIAAQAMAAAMgDQAPgFAAgLQAAgXgggIIgQgEQgWgFgLgHQgNgHAAgUQAAgjAhgPQALgFAUgGQAXgHAKgEQAGgDAJAAQAHAAAFAEQAFAFgBAIQABAFACAJIACAPQAAAIgFAEQgFAFgHAAQgJAAgEgGQgCgFgCgOIgoAMQgaALAAAQIALADQAkAHAUAMQAcAQgBAiQAAAcgYAOQgTAMgdAAQgWAAgVgIg");
	this.shape.setTransform(50.8,5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag8B0QgYgYAAgmQAAgtAZgaQAYgbAkAAQAUAAALAGIAQALQAChIAEgYQACgQANAAQAQAAAAARQAAAYgHBRQgCAXAAAZQAAA5AFAdIAAAEQAAAHgEAEQgFAFgGAAQgLAAgFgQQgMAJgNAFQgOAFgMAAQgjAAgYgYgAgnACQgOARAAAiQAAAXAPAPQAQAQAVAAQAMAAAKgFIATgOIAFgFIAAgeIAAgUIAAgUQgGgNgLgGQgLgHgPAAQgbAAgOAPg");
	this.shape_1.setTransform(32.4,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AApBTIgEgmQgDgUAAgRIABgOIAAgRQAAgkgNAAQgUAAgPAWQgPAVgKAeIgBAQIgBARIABAPIABAQQAAAHgEAFQgGAFgHAAQgHAAgFgFQgFgFAAgHIgBgQIgBgPQAAgSADgdIACgxIAAgQIgBgQQAAgHAFgFQAEgFAIAAQAQAAABAWIAAAUQAdgmAdAAQAbAAAKAYQAIAQABAgIAAARIAAAOQAAAOADAXQAEAWAAAOQAAAHgFAFQgFAFgHAAQgPAAgCgQg");
	this.shape_2.setTransform(13.5,5.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag6BJQgagVAAgnQAAgqAWgeQAYghAmAAQAbAAASAKQAWAMAAAYQAAARgTAOQgJAGgbALIhAAfQAKAOAOAIQAOAHARAAQAMAAAQgFQAUgFAGgJQAFgKAHAAQAGAAAFAFQAEAEAAAGQAAATgeAOQgaAMgZAAQgkAAgZgUgAgigtQgOAQgHAfIA0gXQAdgPANgLQgOgOgZAAQgUAAgOAQg");
	this.shape_3.setTransform(-5.3,5.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgQB7QgEgEAAgIIAAgfIgCgeQABgRACgYIABglQAAgJAFgEQAFgFAHAAQAFAAAFAFQAFAEAAAJIgCAlQgCAYAAARIABAeIAAAfQAAAIgEAEQgFAFgGAAQgHAAgFgFgAgKhdQgGgGAAgIQAAgJAGgFQAGgGAGAAQAIAAAHAGQAFAFABAJQgBAIgFAGQgHAGgIgBQgGABgGgGg");
	this.shape_4.setTransform(-19.8,1.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhBBOIAAh2IAAgRIAAgRQABgRAPAAQARAAAAAcQAggfAnAAQANAAAHAKQAHAKAAAVIAAAMQgBAWgQAAQgPAAAAgRIgBgMIAAgOQgbADgPAMQgPALgJAWIAABcQgBARgQAAQgPAAAAgRg");
	this.shape_5.setTransform(-32.9,5.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgbCRQgFgEAAgHIAAgDQAEgWAAgbIgBgvIAAgvIgbACQgQAAAAgRQAAgRAdgBIARAAIACgaQAFgmAOgSQAQgWAmAAQAZAAgBARQABAQgXAAQgqAAgEA5IgBALIAmgCQAbAAAAARQAAAMgOADIgNABQgIAAggACIgBAlIABAgIAAAgQAAAggCASQgCAOgNAAQgHAAgFgFg");
	this.shape_6.setTransform(-51,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.8,-26.3,123.6,52.8);


(lib.pronountheysareword = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag5BJQgagVAAgnQgBgqAWgeQAXghAnAAQAbAAASAKQAWAMAAAYQAAARgTAOQgJAGgbALIhAAfQAJAOAPAIQAOAHARAAQAMAAAQgFQAUgFAGgJQAGgKAGAAQAGAAAFAFQAFAEAAAGQAAATgfAOQgaAMgZAAQglAAgXgUgAgigtQgOAQgHAfIA1gXQAdgPANgLQgPgOgZAAQgUAAgOAQg");
	this.shape.setTransform(17.8,5.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhBBOIAAh2IABgRIAAgRQAAgRAOAAQASAAgBAcQAhgfAmAAQAOAAAHAKQAHAKAAAVIgBAMQAAAWgRAAQgOAAAAgRIAAgMIgBgOQgbADgOAMQgPALgLAWIAABcQAAARgQAAQgPAAAAgRg");
	this.shape_1.setTransform(0,5.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AA2BXQgIgHgDgGIgdAOQgNAEgGAAQgoAAgSgWQgSgWAAgrQAAgoAdgdQAcgeAmAAQAPABASAHQAXAKAAAOQAAAEgDAEQgCAGgBAPIgBAkQAAAVADAMQACAIAJAWIAEAJIABAEQAAAGgFAFQgFAFgGAAQgDAAgJgIgAgcgqQgTAWAAAbQAAAbAKAOQAKAOAUAAQAOABAMgHQAGgDALgJQgGgsAAgXIABgPIADgTIgLgFIgHgBQgYAAgUAVg");
	this.shape_2.setTransform(-17.9,5.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29,-26.3,58,52.8);


(lib.pronounheader = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAdA7IgDgbQgCgOAAgMIABgKIAAgMQAAgagKAAQgOAAgKAQQgLAPgGAVIgBAMIgCALIACALIAAAMQAAAFgDAEQgDADgGAAQgFAAgEgDQgDgEAAgFIAAgMIgBgLIABghIACgiIAAgMIgBgLQABgFADgEQADgEAFAAQAMAAABAQIAAAPQAUgcAUABQATgBAJASQAFALAAAWIAAANIAAAJQAAALACAPQAEAQAAALQgBAFgDAEQgEACgFAAQgLAAgBgLg");
	this.shape.setTransform(134.8,3.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAbA6QgQAHgRAAQgQAAgLgGQgLgJgDgPQgEgfAAgYQAAgQADgWQACgLAKAAQAFAAAEAEQADADAAAGIgCASIgBASIABAhQABAPADAIIAIAEIAIABQAOAAASgGIAAgYIAAgWQAAgbACgSQABgMALAAQAFAAAEAEQADADAAAFIgCAuIAAAZIAAAaIABAIIAAAJQAAAFgEADQgDADgFABQgKgBgCgLg");
	this.shape_1.setTransform(121.5,4.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgjAzQgRgRgBgcQAAgaAOgVQARgYAdAAQAYAAANAWQAKASAAAZQgBAagOATQgPAVgYAAQgVAAgOgPgAgVgXQgIANAAAQQAAASAKAKQAIAIALAAQALAAAJgJQAKgLABgRQACgtgcgBQgQAAgKASg");
	this.shape_2.setTransform(108.2,4.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhRBfQgDgEgBgFIABgPIABgQIAAgXIABgWIAAgXIgBgYIgBgXIgCgXQAAgGAGgEQAEgFAHAAQAFAAALAOQAdAuAYAeQAcAiAjAgIAAgPIgBgPQAAg0gEggIgDgNQgDgIAAgEQAAgPANAAQAVAAAABQIAAAmIgBApIgCATQgCAMgKAAQgHAAgJgJQgygvg/hWIAAAbIgBAaIABAfIAAAeQAAAhgMAAQgHAAgEgEg");
	this.shape_3.setTransform(92.1,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAnA+IgJgJIgUAKQgJADgEAAQgdAAgNgQQgMgPAAggQAAgbAUgVQAVgVAaAAQAKAAAOAFQAQAHAAAKQAAADgCADIgCAPIgBAZQAAAPACAJIAIAWIADAGIAAACQAAAFgDADQgDADgFAAQgCAAgGgFgAgTgdQgOAPAAASQAAAUAHAKQAHAKAOAAQAKAAAIgEIANgJQgEgfAAgQIAAgLIACgNIgHgDIgGgCQgRAAgNAQg");
	this.shape_4.setTransform(68.1,4.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AghBDQgTgHAAgLQAAgFAEgEQAEgEAFAAQAEAAAGAGQADADAKACIAOABQAIAAAIgCQALgEAAgIQAAgQgXgGIgLgDQgQgEgHgEQgKgFAAgOQAAgZAYgLQAIgDAOgFIAXgHQAFgDAGAAQAFAAADAEQAEADAAAGIABAKIACAKQAAAGgEADQgDAEgFgBQgHABgDgFQgCgDgBgKQgJACgTAGQgSAIAAALIAHADQAaAFAOAIQAUALAAAYQAAAVgRAKQgPAIgTAAQgQAAgPgGg");
	this.shape_5.setTransform(47.8,3.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgoA1QgTgQAAgcQAAgdAPgWQARgXAbAAQATAAANAHQAQAIAAARQAAANgOAKQgGAFgUAGIgtAXQAHAKALAFQAKAFALAAQAJAAALgDQAOgEAFgHQAEgGAEAAQAFAAADADQADADAAAFQAAANgVAKQgTAIgSAAQgZAAgRgNgAgYggQgKAMgFAVIAmgQQAUgLAJgIQgKgJgSAAQgOAAgKALg");
	this.shape_6.setTransform(35.4,4.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgiA1QgRgQAAgaQAAgWAQgbQASgdAVAAQAMAAAPAGQATAHAAAKQAAAFgDADQgDAEgFAAQgDAAgDgCIgFgEQgHgGgRAAQgKAAgMAWQgLAVAAAMQAAARALAJQAKAIAOAAQAHAAAJgDIAOgIIAFgCQAEAAAEAEQADADAAAFQAAAJgTAIQgQAHgLAAQgXAAgRgPg");
	this.shape_7.setTransform(22,4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAnA+IgJgJIgUAKQgJADgEAAQgdAAgNgQQgMgPAAggQAAgbAUgVQAVgVAaAAQAKAAAOAFQAQAHAAAKQAAADgCADIgCAPIgBAZQAAAPACAJIAIAWIADAGIAAACQAAAFgDADQgDADgFAAQgCAAgGgFgAgTgdQgOAPAAASQAAAUAHAKQAHAKAOAAQAKAAAIgEIANgJQgEgfAAgQIAAgLIACgNIgHgDIgGgCQgRAAgNAQg");
	this.shape_8.setTransform(9.1,4.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgMBYIABgsIABgsIABgrIAAgsQABgMAJAAQAMAAABAMIgBAsIAAArIgDA8IgBAcQAAAMgKAAQgLAAAAgMg");
	this.shape_9.setTransform(-0.7,0.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AguBjQgDgEAAgFIAAgxIAAgvQAAgbgCgVIgCgZQAAgJADgGQAEgHAHAAQAFAAADAEQADACAAAGIAAADIgBAIQALgIAJgDQAJgEAIAAQAZAAAMAWQAJASAAAdQAAAYgOARQgPATgZAAQgLAAgOgFIgBA7QAAAFgDAEQgDADgFAAQgGAAgDgDgAgKg/QgHADgKAJQACAcAAAcQANAGAMgBQAPABAIgLQAHgJAAgPQAAgXgFgLQgGgLgLAAQgJAAgJAGg");
	this.shape_10.setTransform(-10.7,7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgoA1QgTgQAAgcQAAgdAPgWQARgXAbAAQATAAANAHQAQAIAAARQAAANgOAKQgGAFgUAGIgtAXQAHAKALAFQAKAFALAAQAJAAALgDQAOgEAFgHQAEgGAEAAQAFAAADADQADADAAAFQAAANgVAKQgTAIgSAAQgZAAgRgNgAgYggQgKAMgFAVIAmgQQAUgLAJgIQgKgJgSAAQgOAAgKALg");
	this.shape_11.setTransform(-24.1,4.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AguA4IAAhUIABgMIAAgMQgBgNALAAQAMAAAAAVQAXgXAbAAQALAAAEAIQAFAHAAAPIAAAJQgBAPgMAAQgKAAAAgMIAAgJIAAgKQgUACgKAJQgKAIgIAQIABBBQAAAMgNAAQgKAAAAgMg");
	this.shape_12.setTransform(-36.8,4.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#9C30CE").s().p("AAdA7IgDgbQgCgOAAgMIABgKIAAgMQAAgagKAAQgOAAgKAQQgLAPgGAVIgBAMIgCALIACALIAAAMQAAAFgDAEQgDADgGAAQgFAAgEgDQgDgEAAgFIAAgMIgBgLIABghIACgiIAAgMIgBgLQABgFADgEQADgEAFAAQAMAAABAQIAAAPQAUgcAUABQATgBAJASQAFALAAAWIAAANIAAAJQAAALACAPQAEAQAAALQgBAFgDAEQgEACgFAAQgLAAgBgLg");
	this.shape_13.setTransform(-56.9,3.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#9C30CE").s().p("AAbA6QgQAHgRAAQgQAAgLgGQgLgJgDgPQgEgfAAgYQAAgQADgWQACgLAKAAQAFAAAEAEQADADAAAGIgCASIgBASIABAhQABAPADAIIAIAEIAIABQAOAAASgGIAAgYIAAgWQAAgbACgSQABgMALAAQAFAAAEAEQADADAAAFIgCAuIAAAZIAAAaIABAIIAAAJQAAAFgEADQgDADgFABQgKgBgCgLg");
	this.shape_14.setTransform(-70.2,4.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#9C30CE").s().p("AgjAzQgRgRgBgcQAAgaAOgVQARgYAdAAQAYAAANAWQAKASAAAZQgBAagOATQgPAVgYAAQgVAAgOgPgAgVgXQgIANAAAQQAAASAKAKQAIAIALAAQALAAAJgJQAKgLABgRQACgtgcgBQgQAAgKASg");
	this.shape_15.setTransform(-83.5,4.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#9C30CE").s().p("AAdA7IgDgbQgCgOAAgMIAAgKIABgMQAAgagKAAQgNAAgLAQQgLAPgGAVIgCAMIgBALIABALIABAMQAAAFgDAEQgEADgFAAQgFAAgEgDQgDgEAAgFIAAgMIgBgLIACghIABgiIAAgMIgBgLQABgFADgEQADgEAFAAQAMAAABAQIAAAPQAUgcAUABQATgBAIASQAGALAAAWIAAANIAAAJQAAALACAPQAEAQAAALQAAAFgEAEQgDACgGAAQgLAAgBgLg");
	this.shape_16.setTransform(-96.1,3.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#9C30CE").s().p("AgjAzQgRgRgBgcQAAgaAOgVQARgYAdAAQAYAAANAWQAKASAAAZQgBAagOATQgPAVgYAAQgVAAgOgPgAgVgXQgIANAAAQQAAASAKAKQAIAIALAAQALAAAJgJQAKgLABgRQACgtgcgBQgQAAgKASg");
	this.shape_17.setTransform(-109.8,4.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#9C30CE").s().p("AguA4IAAhUIAAgMIAAgMQAAgNALAAQANAAAAAVQAWgXAbAAQALAAAEAIQAFAHAAAPIAAAJQgBAPgMAAQgKAAAAgMIAAgJIAAgKQgUACgKAJQgKAIgIAQIABBBQAAAMgNAAQgKAAAAgMg");
	this.shape_18.setTransform(-121.7,4.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#9C30CE").s().p("AgyBdQgEgDAAgFIAAgkQAAgRADggIACgyIAAgRQAAgMACgFQADgLAJABIALgBIASgBQAUAAATAQQAWAQAAAYQAAAfgXAPQgVAQgaAAIgPgBIgBBAQAAAFgDADQgEAEgEAAQgFAAgDgEgAgahHIAAAWIgDAxIAOAAQASAAAOgJQAQgMAAgTQAAgOgPgJQgOgJgNAAIgKAAIgHABg");
	this.shape_19.setTransform(-134.5,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-143.2,-19.4,286.4,38.8);


(lib.period = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgQARQgHgHAAgKQAAgIAHgHQAHgIAJAAQAJAAAIAIQAHAHAAAIQAAAKgHAHQgIAHgJAAQgJAAgHgHg");
	this.shape.setTransform(0.2,15.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-29.8,14.1,59.8);


(lib.HorizontalLine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("AXWAKMgurAAAIAAgTMAurAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("A3VAJIAAgRMAurAAAIAAARg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.5,-2,301,4);


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


(lib.Theydogarm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_15 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(15).call(this.frame_15).wait(1));

	// Layer 1
	this.instance = new lib.Theydogarmstill();
	this.instance.setTransform(41.3,34.3,0.999,0.999,-92.2,0,0,18.7,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({regX:18.6,rotation:23.5,x:9.9,y:9.5},12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(25.2,26.5,25.1,53.3);


(lib.theyword = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.theywordstill();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({alpha:0},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.3,-15.9,50.7,31.9);


(lib.theybubblestill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.theyword();
	this.instance.setTransform(-68.6,-12.2);

	this.instance_1 = new lib.words();
	this.instance_1.setTransform(27.9,-12.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ArCDuQgrgJgpgMQlIhZAAiAQAAh+FIhbQFIhZHOAAQHQAAFHBZQFIBbAAB+QAACAlIBZQlHBanQAAQkbAAjpgh");
	this.shape.setTransform(4.5,-10.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABCB8QgigHgXgeQgkgjgWgwQgQgggMglQgDgGgCgGIgDgKQgJgPgBgQQgBgDADgBIACgCIABAAQAIABAFAEQAFAFADAKIAFARQAPAvAVApQAUAsAiAiQALAKANAHIANAGIgCgNQgDgxAGguQACgRABgRQAAgTAFgTQACgGADgGIACgDIAEgDQAKACADAHQABAFgDAIQgJAYgBAYIgDBJQgDAhAJAfQgBAFAAAGIAAADQgKgBgKAAg");
	this.shape_1.setTransform(-56.8,26.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AoxF8QgNgGgLgKQgkgigVgtQgUgrgPguIgGgSQgCgKgGgFQgFgEgHgBIgCABIgCABQgqgKgpgLQlIhaAAh+QAAiAFIhaQFIhaHOAAQHQAAFHBaQFIBaAACAQAAB+lIBaQlHBanQAAQkbAAjpgiQgCgHgLgCIgDADIgCADQgEAGgBAGQgFATgBATQAAARgDARQgGAxAEAwIACANIgNgGg");
	this.shape_2.setTransform(4.5,-2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108.4,-42,225.9,80.7);


(lib.theybubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_23 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(1));

	// Layer 1
	this.instance = new lib.theybubblestill();
	this.instance.setTransform(0,0,0.033,0.033);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({scaleX:1,scaleY:1,x:-16.5},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.6,-1.4,7.5,2.7);


(lib.THEY = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.theybubble();
	this.instance.setTransform(124.7,-24.2);

	this.instance_1 = new lib.Theydogarm();
	this.instance_1.setTransform(143.8,63.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("EgjNAAAIT0ABQAQAAATgBQAYAAATAAQAIAAAGAAAuLAAQC+gCiwACMAxLAAA");
	this.shape.setTransform(13.5,171.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1,1).p("EgjNAZnIAAtuIAAgDMAAAglwMBGbAAAIAAADMAAAAmeIAAAKIAAMjIAAATIAAAU");
	this.shape_1.setTransform(13.5,8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC6633").s().p("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");
	this.shape_2.setTransform(165.3,75.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgJGXQgGgMgIgKQgFgKgJgGQgUgSgZgLQgYgLgYgGQghgLghgCIgZgBIgBACIgNAGQgIABgHAFIgIgGIABgBQABgIACgIIAEgKIAIgSQAGgNAKgLIAdgfQAFgGAIgEQALAIAMAFIACABIAXAKIAlAQQAYAMAZACQAQADAOgCIADATIAIAKQAKAMAPAEIATAAQASgCALgPIAJgGQAHgEAIgCQAMgFAJAKQAFAFACAHQADANAAAPIgBAVQgDATgOAKQgFAEgFABIgSAGIgMAEQgPAEgOAGQgSAHgOANIgEAEIgFgPgACThgQgfgBgegFIgrgIIgagHQgPgEgPgDIgHACQgEgRACgSIAHgIQAPgTAHgaIAEgVQAIgmgHgjQgEgYgFgWQgEgZgCgbIADAAIABAAIACgBIABgBIABgBIAAgCIgCgDIgDgCIAAgBIAAgDIAWgFIAGAFIASAhIALAYQAFALADANQAGAUAKASQALAQAPALQAQANAUADQAGgOADgOQAEgVgHgWQgFgQgDgRIgBgIIAAgBQAAgJACgKQADgMAHgJQAJAFAJAGQAIAFADAKIABADIAEAMQAFAWAIARIAYAzQANAeAJAfQAKAhAEAjIgHAPQgHATgKAQIgEAAQgaAAgZACIghgBg");
	this.shape_3.setTransform(-49.9,-35.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#009933").s().p("Ah5EzIAAgDQgngIgngMQgMgFgFgJQgUgmgGgyQgTi6gIjJQAbg4ApgqQAAAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQBPAtBuAOQBTAJBBggQAXgMAagGQADBVAJBRQAAAAAAABQAAAAAAAAQAAAAABAAQAAAAABAAQAcCtApCiIAAAFQgLAUgaAFIAAADIgEAAQg4AKhGgPQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAgBQgahkgNhwQAAggADgjQADgvgPgEQAABKACBIIACAAQATBzAABZIAAAFIgFABQhPAohoAAIgJAAg");
	this.shape_4.setTransform(-134.4,19.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhGAxIAAgCIABgPIgBgGIgCgGIAAgDQAAgNAGgJIADgEIABgBIABgCQADgGAGgBIAWACIACAAIABAAIACADIAEAKIABAEIgBgBIAAABIACAJIABANQgCgDgEgBIgQgBQgGADgCAGIgCALQgBAJAGAHQAEAEAGABIgMAEIgHABIgNABQgDgHAAgIgAAnAUQgFgBgFABQgEgDgBgFIgBgFIABgKIABgDIADgdIAAgLIABgGQADgHAHgEQAHgBAFACIAGAFQAJAKAEANQACADABAEIAAAaIgCgEQgCgDgEgBIgPgBIgEADQgNAIAIAQIAEAFIgGgCg");
	this.shape_5.setTransform(-130.7,-122.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#996600").s().p("AhXCSIAAgEIACAAQAAhbgMhPQANgKAHAOIADABQALAvgBA+IAAAFQAMgMAJAQIAIAAIAAASQAJAggYABIgFgfQgBAZgIAUIAAACQgQgCgHgOgAhuCDIgDgEQgIgkgGgkQACAngJAiQgTg2gJhDIAAgEQAYgDAHAYIgDgdQAHgHALgEQAAAAAAAAQAAAAAAgBQABAAAAAAQAAgBAAAAQAVALADAgQAFA3gLA0IgHACQgEAAgCgDgAg2AZIAAgCQgIgQgMgeIgBgFQgBgEgDgFQAFgCAEgEIABgDQAQAAAIgJIAEgBIAAAFQAGAwgPAYIAAAFIgEgBgAglgzIABgFIAAgEQAbgSAHAtIgDgXQgDgWALgGQAPADADAsIABAFIAAgJQgOg7ApgJIABAAQgCAgAKAPIAAgHQgEgrAbgNQgEAmAHAaIAAAAIAAABIACAAIAAgBIAAAAQgBgvARgeIACAAQAFAiAHAiQAAAAAAAAQAAABABAAQAAAAABAAQAAAAABAAQgFguANgcIABgCIACgCIACgBIAAAFIAAAAQADAugQAcIAAAAIgFAJIgNAJIgHACIgFABQgiAJgeAOQgcAOgaARIgDABQgIgWADgkgACAhFQAJgiAFgoIAAAAIAAgFQAAgJAGgDIACgBIALAAIAAABIABAAIAAAIIAAAJQgCARAAATQAAAtgRAAQgGAAgJgHg");
	this.shape_6.setTransform(-139.2,-129.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCC99").s().p("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");
	this.shape_7.setTransform(-85.7,13.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C6FFFF").s().p("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");
	this.shape_8.setTransform(13.5,-33.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00CC33").s().p("EgjNAG9IAAtsIADAAQACAFADABQAUAEAUgDQALgCALgDQAvgQAzAAIDGAEIDTAFIAwAAQABAAAAAAQAAAAABAAQAAgBABAAQAAAAABgBIABgDIAEAAQAFCBAKCAQAVEEiOBaQAHBEBegQIAFgBQA+ACA0ALIADACIACAAIAMAIIAbAMIAYAKIApANIAKADIADACQAPAKAVABQA/ADAmgXQALgDALgEQAGAFAVgSIAEgBQAaAFASgZQABAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAQAugJAgAIIAFABQANgDAJgGQAIgGAGgKIABgDQAUAAALgIQALgIACgRIgCAAQgbgZg+ACQhbAChKgVIgFAAQgkgIgZgUIAAgDQgIhMAEhUQAHinAOifQBmAHBngEQAYgBAagDQAogGAlAKQBsAcBwgTIABgDQgDAcgCAcIgDAbIgDAbIgGA2IgIBEIgFAoIgEApIgEApQgDAegFAeQgFAZgOAWQgIANgLAKQgLALgMAJIAAAEIgbAWIgmAcIgbASQgWAQgXANIgZANIgYANIAAAAIgUAKIgQAGIAGAFQgBAGADAFIAAADQAAAEADADIABACIAAABQAPAZAcAIIAHALIARAJQAPAJANAKIAEABQAbAGAcgQIABgEIAEgGIAUgYIAUgXIAVgXIAWgWIAYgWQAVgEAUgGQATgHASgIIAQgxIAVAIQASAFASAEQATAFATAEQAeACAggCQAagBAbAJIAJADIAIAFIAYASQAYATAeAMIAoAOQAVAIAWAEQATAFATADQAPAAAPgEQAHAAAGgEIANgIIALgKIAJgLQAJgNAGgNQAHgPAGgPIgFgMQgFgHgGgFQgFgEgGgCIgFgBIgGgDIgFgDIgWgCQgEgDgFABIgKAAIgSgGIgCgBQgFAAgEgCIgBgBIgKAAIgGgCIgNgBIAAABIAAAAQhEgWhHgSIAAgCQg2gPgsgYIAAgCQgWgIAJgkQAni0Aii4IABgFIACgIQEEAJEAAUQCtAOC1gQIBBgDQDQgHDPgOQAQgBATgFQAxgOAxgDQCogMChgUQACAYgEASQgIACgFAIQgHAPAAAVQAAAjgfgQIgEAAQgYgHgSgMIgEAAIg9AAIAAADQgQAFgLAIIgLgBQgMAGgJAOQgIAOgBAMIgKAJQAHABAEADQACAIAGAHIgBAEQgLAeAUALQgHArAdAJQAMADAIAhIAEABQAbAMAdAeIAAgDQAfALAmAKQALAFgPgBQivgDhVBVQAEAfAWgaIACgBQADAoAkgJIAIgBQAbgEAKAQQBVgPA2ABIAAAJQAbANAmAOIAEABQBPgIBXABIAAgDQAvgIAkgVIABgCQBmAABnAQQBxARBZghIAAgDQAkgDgpgkIgEgBQhSgfh1ABIAAgEQAjgLAPgfIABgFQAogqAogtIADAAQAFgjAWgSIABgDQgJgkAAgYIAAgFQgUgqgygNIgEAAIgFgBQgmgEgggLIABgLIADgCQAKgMABgQQABAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAIAAgFQADgFABgHIAAgFQADACAFgBIABgBQABgGgCgGIA7gCQBMgDBLAHQAYADAYAIQAqAPApAHQAgAFAfAAIAXAAIAAMhIAAAUMgxLAAAQCwgFi+AEIgrABIgjABgA22CPQgfgKgigJIAAgCIgJg5QAsj3AKkGQAeAgAqgTQgCEEgND5IgDABQgUAcgJAkIgFAAgArDBvIAAglQAAgTACgSQACgTAFgSIAJgjIAKgkIAKglIALgjIAMgkIAMgiIANgiIACgCQAAAlgFAmIgGAoIgHAmIgGAgIgBAGIgJAkIgJAjIgJAjIgLAjIgMAhIgBAFQAAAJgHADQgFgKAAgMg");
	this.shape_9.setTransform(13.5,127.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF6400").s().p("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");
	this.shape_10.setTransform(-49.1,-112.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("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BAbIAAAFQACAmAKAkIABAEIAEACIgCgHQgFgkgBgmIAAgPIgBgRIARA+IAEAPIACAKQADARgFATIgCAEIgDABIgDgBQgEgCgDgEQgPgXgGgbIgBgJQgIg2AGg2IAAgCIABgCQAMgLACgQIAEgLIgGACQgKAEgJAHQgaAXgKAjQgJAkAQAiIAHALIAIAKQABAAABAAQAAAAABAAQAAAAABABQAAAAABAAIAAAAIAAABIAAABIgIgBQgPgGgMgIIgTgNIgPgMIAFAEIADADIAFACIACABIACACIAEgBIgCgHIgDgJIgBgFIgFgPQgCgTgBgSQAAgQADgOQAEgSAJgPQAMgGALgHQAHgEAGgGIADgHIgFAAQgMAHgLAJIgMANIgGAJQgHAJgFAMIgCADQgGAOgCAPQgCAQACARQACAQAEAPQgFgHgDgHQgHgPABgRQABgUAAgWIABgBIANgaQAMgWAOgRIAKgMIgMAGIgVAKQgRAIgPANQABAKAAAKIgBAUIAAABIgFgUIgCgCIgCgBIgBABIgHALQgDAFgFAEIgEACIgDgSIAGgFIAEgEIACgFIgCgFIgDgJIgCgOQgDgQAJgOQAOgVARgRQAOgMAQgMQAMgBAMACQAJAAAIAEQAIACAIAFIAMAIIAKAIIAFADQAGADABgFIACgGQAAgJgCgKQgDgOgCgQQgCgWAGgSIADATQAEAYABAXIABAPIAEgBIAAgPQAUgXAagRQAOgIAPgGIAfgNIABgCQAegBAgAAQAaABAbAIIAhALIAHgSQAMgaAWgRQARgPAWgGIALgDIAUgEIAQAIQAJAFADAJIAAACQACAIgEAIIACgHIgIgKIgCgCQgFgFgGgEQgGgDgHgCQgGgBgFADIgDABQgNADgLAIQgNAIgKALQgIALgIALIgCADQgJAPgDASIATgSIAAgBIACgBIAHgFIAAgBQAMgHAMgHQAPgIARgCQAKABAJADQAIABAGAEQAHADAFAGIgCADIgCACIgDABIgDAAIgDgCIgEgDIgHgKIgBAAQgSgBgUAEQgPADgNAKIgCADIgBAAIgCACQgGAGgDAHIAAAAQgDAHAAAJIAGgFIAAgEIAKgEIACAAIAMgEIAIgDQASgFAUgDIAIAGIAHAFIAAAAQATAPgCAWIgEgBIgCgEQgHgKgJgJIgBgBQgNgNgTACQgJABgKA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ABAFIgDgBQgHgPgNALQAMBRAABbIgCAAIAAADQAHAPAQACIAAgCQAIgUABgZIAFAeQAYAAgJggQAGANAJAMIABACIABACIgBADQgIAHgIAGQgjAWgWgeIgBgDQgpgcgQA0IgCAHIAAAqIAAAFQAHAlAYATIABADIApgLgAs6yKQgPANgIAUQgCAHgBAIQgCAPACAOQACATAAASIADAEIADACIABADIACABIACAAQAGgFgBgJIgBgSQgDgSAHgQIAOgXQAJgQAOgOQALgLAIgLIgFAAQgaAAgUARgAomyNQgMADgLAFQgPAHgHANQgBASAGARQAGATASALQAMAIAOABIAQABQgEgGgBgIQgBgDABgCIADgFQAGgEAJgCIAKABQAEABAEAEIAAAGIAAAHIgBAEIADgBQAHgDAEgIQALgVgDgWQgDghgbgRQgaABgWAIgArDyVIgTAoQgHARgKAQQADAIAIgDIAJgFQAPgIAIgRIAEgIQAMgXgRgSgAmcyyQgTACgOAPQgIAJgGAMIgGANQAJAVAPAUQAEAFAGAEQANAGANgJIgEgIQgBgHACgGQACgEAEgCQAHgDAGAAIAIACIADACIACACIABADIAAADIgBAHQAEAAAEgJQAFgLACgLQACgLgCgKQgDgMgFgKIgIgNIgVgBIgOABgAoVzaIgHAIIgVAWQgQARgVAJIgeANIgSAIQgKAigbAWIAAAFIAiADQAVgEATgNIAKggQAFgSANgLIAcgEQAUgCATAEQATAGAPALIAJgMQAJgOAAgQIACgTQABgIgHgGIgIgEQgHgCgGgBIgTAFQgMAFgIALIADgHQADgIgDgFIgCAAQgFAAgDADgAr/ywIgEADIgBAFIABADIABADIAEABIAKAIQAHAHAEAIQADAHgBAJQgBALgGAKIgHAQIAKgKIACgDIAAAAQAHgIADgJQADgJgCgKQgCgKgGgKIgLgOQASAEATAAIAGAAQAQAAAQgEIggADIgBAAIAKgFIAKgCIASgGIAAgFIASgJQAQgJAQgLQAOgMAMgOQANgPAKgRIALgTIgJAUQgIARgMAQQgLAQgOANQgOANgQAKQgLAGgLAFQAWAIAWgJQAPgGAOgIQAZgNATgWQAIgKAGgLIAIgQQACgGAEgGIAEgEIACACIAEADIABAGQABAJAAAJQAIgBACgGQACgFAA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");
	this.shape_11.setTransform(14.3,6.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-213.4,-159.4,454,335);


(lib.textthey = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_99 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(1));

	// diag
	this.instance = new lib.VertLine("synched",0);
	this.instance.setTransform(64.5,182.9,1,0.7,-45);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(28).to({_off:false},0).to({alpha:1},6).wait(66));

	// vert1
	this.instance_1 = new lib.VertLine("synched",0);
	this.instance_1.setTransform(-48.6,161.4,0.8,0.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(28).to({_off:false},0).to({alpha:1},6).wait(66));

	// horz
	this.instance_2 = new lib.HorizontalLine("synched",0);
	this.instance_2.setTransform(0.1,167.4,0.8,1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(28).to({_off:false},0).to({alpha:1},6).wait(66));

	// period
	this.instance_3 = new lib.period();
	this.instance_3.setTransform(171.5,170.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).to({_off:true},8).wait(73));

	// friends
	this.instance_4 = new lib.pronountheysfriendsword();
	this.instance_4.setTransform(106.6,173.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},0).to({_off:true},8).wait(27).to({_off:false,scaleX:0.8,scaleY:0.8,x:70.6,y:153.4,alpha:0},0).to({alpha:1},7).to({_off:true},12).wait(6).to({_off:false,alpha:0},0).to({alpha:1},5).wait(16));

	// my
	this.instance_5 = new lib.pronountheysmyword();
	this.instance_5.setTransform(13.2,173.4);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(19).to({_off:false},0).to({_off:true},8).wait(19).to({_off:false,scaleX:0.7,scaleY:0.7,rotation:45,x:82.2,y:181.4,alpha:0},0).to({alpha:1},8).to({_off:true},19).wait(6).to({_off:false,alpha:0},0).to({alpha:1},5).wait(16));

	// are
	this.instance_6 = new lib.pronountheysareword();
	this.instance_6.setTransform(-46,173.4);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(19).to({_off:false},0).to({_off:true},8).wait(14).to({_off:false,scaleX:0.8,scaleY:0.8,x:-18,y:153.4,alpha:0},0).to({alpha:1},5).to({_off:true},27).wait(6).to({_off:false,alpha:0},0).to({alpha:1},5).wait(16));

	// they
	this.instance_7 = new lib.theysentstill();
	this.instance_7.setTransform(0,181.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:1.46,scaleY:1.46,y:176.9},9).to({scaleX:1,scaleY:1,y:181.1},5).to({x:-131.1,y:181.4},5).to({_off:true},8).wait(8).to({_off:false,scaleX:0.8,scaleY:0.8,x:-90.1,y:158.4,alpha:0},0).to({alpha:1},6).to({_off:true},32).wait(6).to({_off:false,alpha:0},0).to({alpha:1},5).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.5,147.8,99,52.8);


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


// stage content:



(lib.pronoun_Scene9 = function(mode,startPosition,loop) {
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
		
		 window.open ("pronoun_Scene10.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("pronoun_Scene8.html","_self");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// text
	this.instance_2 = new lib.textthey();
	this.instance_2.setTransform(275,176.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer 1
	this.btn_menu = new lib.skiptomenu();
	this.btn_menu.setTransform(514.1,20.3);
	new cjs.ButtonHelper(this.btn_menu, 0, 1, 2, false, new lib.skiptomenu(), 3);

	this.instance_3 = new lib.Copyright("synched",0);
	this.instance_3.setTransform(275,389.5);

	this.instance_4 = new lib.pronounheader();
	this.instance_4.setTransform(275,18);

	this.instance_5 = new lib.THEY();
	this.instance_5.setTransform(263.7,170,0.804,0.804);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.btn_menu}]}).wait(1));

	// btn
	this.btn_goBack = new lib.goNext();
	this.btn_goBack.setTransform(57.6,352.3,1,1,0,0,180);
	new cjs.ButtonHelper(this.btn_goBack, 0, 1, 2, false, new lib.goNext(), 3);

	this.btn_goNext = new lib.goNext();
	this.btn_goNext.setTransform(494,352.3);
	new cjs.ButtonHelper(this.btn_goNext, 0, 1, 2, false, new lib.goNext(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_goNext},{t:this.btn_goBack}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(284.2,198.6,537.1,400.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;