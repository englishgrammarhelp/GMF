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
		{src:"sounds/_10a.mp3", id:"_10a"},
		{src:"sounds/_10b.mp3", id:"_10b"},
		{src:"sounds/_10c.mp3", id:"_10c"},
		{src:"sounds/_11a.mp3", id:"_11a"},
		{src:"sounds/_12a.mp3", id:"_12a"},
		{src:"sounds/_13a.mp3", id:"_13a"},
		{src:"sounds/_13b.mp3", id:"_13b"},
		{src:"sounds/_2a.mp3", id:"_2a"},
		{src:"sounds/_3a.mp3", id:"_3a"},
		{src:"sounds/_4a.mp3", id:"_4a"},
		{src:"sounds/_4b.mp3", id:"_4b"},
		{src:"sounds/_5a.mp3", id:"_5a"},
		{src:"sounds/_5c.mp3", id:"_5c"},
		{src:"sounds/_6a.mp3", id:"_6a"},
		{src:"sounds/_6b.mp3", id:"_6b"},
		{src:"sounds/_7a.mp3", id:"_7a"},
		{src:"sounds/anadverbanswers.mp3", id:"anadverbanswers"},
		{src:"sounds/anadverbmodifies.mp3", id:"anadverbmodifies"},
		{src:"sounds/carefully.mp3", id:"carefully"},
		{src:"sounds/easily.mp3", id:"easily"},
		{src:"sounds/happily.mp3", id:"happily"},
		{src:"sounds/how.mp3", id:"how"},
		{src:"sounds/JingleAdverb.mp3", id:"JingleAdverb"},
		{src:"sounds/endinly.mp3", id:"endinly"},
		{src:"sounds/quickly.mp3", id:"quickly"},
		{src:"sounds/rapidly.mp3", id:"rapidly"},
		{src:"sounds/s_coolcheer.mp3", id:"s_coolcheer"},
		{src:"sounds/towhatextent.mp3", id:"towhatextent"},
		{src:"sounds/when.mp3", id:"when"},
		{src:"sounds/where.mp3", id:"where"},
		{src:"sounds/why.mp3", id:"why"}
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



(lib.Wherewillweplay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOArQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgEABgDQADgDADAAQAGAAAAAHQAAADgCADQgCADgDAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBgAgLAVQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgEAIgGIAMgJQAIgGAAgGQAAgHgHgFQgGgGgFAAQgEAAgFAEIgHAEQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAgEAJgFQAIgEAFAAQAKAAAJAJQAKAKAAALQAAAJgFAFQgEADgJAHQgIAGgCAEQgCADgDAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape.setTransform(28.4,-14.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgOAuIgCgFQAAgFAMgcIgUgnIgDgEIgCgFIACgEQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAQABAAABABQAAAAABAAQAAAAAAABQAKAOAKAZIAJgTIAJgSQACgEACAAQABAAABAAQAAAAABABQAAAAABAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIAAACIgUAqIgKAbIgEALQgCAFgDAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAg");
	this.shape_1.setTransform(22.2,-12);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AASAdIgEgEIgKAEIgFACQgOAAgGgHQgGgIAAgPQAAgMAKgKQAKgKALAAQAFAAAHADQAIACAAAGIgBACIgBAIIgBAKIABAMIAEALIABADIABAAQAAABAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgEgDgAgJgOQgGAIAAAHQAAALADAEQAEAFAGAAQAEAAAEgCIAGgEIgCgWIAAgGIABgFIgDgCIgDgBQgHAAgHAHg");
	this.shape_2.setTransform(16.2,-13.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgFAqIABgVIAAgVIABgUIAAgVQAAgGAEAAQAFAAAAAGIAAAVIAAAUIgBAdIgBANQAAAGgEAAQgFAAAAgGg");
	this.shape_3.setTransform(11.4,-15.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgWAvQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgYIAAgVIgBgXIgBgMQABgEABgDQACgEADAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABIABAEIAAACIAAADQAFgDAEgCQAEgCADAAQAMAAAGALQAEAIABAOQgBALgGAIQgHAJgMAAQgFAAgHgCIAAAcQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAgBgBgAgEgeIgIAHIABAaQAGACAFAAQAHAAADgFQAEgDAAgIQAAgKgDgGQgCgFgGAAQgDAAgEACg");
	this.shape_4.setTransform(6.7,-12.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgTAZQgJgHAAgOQAAgNAIgKQAIgLAMAAQAJAAAGADQAIAEAAAIQAAAGgHAFIgMAEIgVALQADAFAFACQAFADAFAAIAJgCQAHgCACgDQACgDACAAIAEACQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAAHgLAEQgJAEgIAAQgLAAgJgGgAgLgOQgEAFgDAJIASgGQAJgFAEgEQgFgFgIAAQgGAAgFAGg");
	this.shape_5.setTransform(-3.4,-13.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AANAgQgGAAgEgPIgCgOIgBgLIgEAJIgJAYIgCAEQgCADgEAAQgEAAgEgRQgDgJgCgOIgBgJIgBgJQAAAAAAgBQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAQAFAAABAFIABAIIABAJIADAYIAOgoQACgGADAAQAEAAACAHIADAVIAFAVIAEgQIAHgdQABgEAFAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABABQAAAAABABQAAAAAAAAQAAABABABQAAAAAAABIgBACIgMApIgFALQgCADgDAAIgBAAg");
	this.shape_6.setTransform(-10.8,-13.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgFAqIABgVIAAgVIABgUIAAgVQAAgGAEAAQAFAAAAAGIAAAVIAAAUIgBAcIgBAOQAAAGgEAAQgFAAAAgGg");
	this.shape_7.setTransform(43.7,-33.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgFAqIABgVIAAgVIABgUIAAgVQAAgGAEAAQAFAAAAAGIAAAVIAAAUIgBAcIgBAOQAAAGgEAAQgFAAAAgGg");
	this.shape_8.setTransform(40.4,-33.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgEAqQgBgBAAAAQAAgBAAAAQgBAAAAgBQAAgBAAAAIAAgLIAAgKIAAgOIABgMQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQAAAAAAAAQAAAAABABQABAAAAAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAIAAAMIgBAOIAAAKIABALQAAAAAAABQAAABgBAAQAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAAAABQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAgAgCgfQgCgCAAgDQAAgDACgCQACgCABAAQAAAAABAAQABAAAAABQABAAAAAAQABABAAAAQACACAAADQAAADgCACQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgBAAgCgCg");
	this.shape_9.setTransform(37.2,-33.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AANAgQgGAAgEgPIgCgOIgBgLIgEAJIgJAYIgCAEQgCADgEAAQgEAAgEgRQgDgJgCgOIgBgJIgBgJQAAAAAAgBQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAQAFAAABAFIABAIIABAJIADAYIAOgoQACgGADAAQAEAAACAHIADAVIAFAVIAEgQIAHgdQABgEAFAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABABQAAAAABABQAAAAAAAAQAAABABABQAAAAAAABIgBACIgMApIgFALQgCADgDAAIgBAAg");
	this.shape_10.setTransform(31.3,-32.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF6600").s().p("AgTAZQgJgIAAgNQAAgNAHgKQAJgLANAAQAKAAAHADQAIAEAAAJQAAAHgHAFIgNAEIgSAJQADADAEACQAEABADAAQAIAAAGgDQAEgDADAAQAGAAAAAGQAAAHgJAEQgJADgJAAQgMAAgJgGgAgHgNQgEAEgCAHIANgFIALgHQgEgCgGAAQgEAAgEADg");
	this.shape_11.setTransform(20.1,-32.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF6600").s().p("AgWAeQgCgCABgEIAAgkIAAgFIAAgGQAAgDABgCQACgCAEAAQAHAAABAHQAJgJAMAAQAMABgBAQIAAADQAAAJgHAAQgIAAAAgIIAAgFQgLACgGALIAAAbQAAAEgDACQgCACgDAAQgEAAgCgCg");
	this.shape_12.setTransform(14.1,-32.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF6600").s().p("AgTAZQgJgIAAgNQAAgNAHgKQAJgLANAAQAKAAAHADQAIAEAAAJQAAAHgHAFIgNAEIgSAJQADADAEACQAEABADAAQAIAAAGgDQAEgDADAAQAGAAAAAGQAAAHgJAEQgJADgJAAQgMAAgJgGgAgHgNQgEAEgCAHIANgFIALgHQgEgCgGAAQgEAAgEADg");
	this.shape_13.setTransform(7.7,-32.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF6600").s().p("AANArIgCgOIgBgNIAAgFIAAgEIAAgFQAAgBgBgBQAAAAAAAAQgBAAAAAAQgBAAAAAAQgHAAgDAEIgHAMQAAAVgCAEQgDAFgFAAQgDAAgDgCQgCgCAAgDIABgEIAAgPIAAgmIAAgCIABgJIgBgFIAAgFQAAgEACgCQADgCADAAQAGAAACAGIABALIgBAMIAAALQAEgEAFgCQADgCAGAAQAKAAAEAFQADAFABAGIABAPIABALIACAMIAAACQAAADgCACQgDACgDAAQgGAAgCgFg");
	this.shape_14.setTransform(1,-33.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF6600").s().p("AALAtQgDgCAAgDIgEgMIgFgjIgIATIgJAWIABADQAAADgDADQgDACgDAAQgFAAgDgDQgDgCAAgEIgCgGIgGgcIgNgmIAAgCQAAgEACgCQADgCADAAQAFAAACAEIAEAHQAFARAIAeIAJgZIAGgSQAGgNAFgBQAFABADAGQABADABAIIACALIAHAjIARgnIADgLIAEgLQADgEAFAAQADAAADACQACACAAAEIgCAHIgCAFIgEAKIgKAXIgLAaIgEAJQgDAFgGAAQgDAAgDgCg");
	this.shape_15.setTransform(-8.7,-33.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(2.5,1,1).p("ABfDwIBXAAQBkAABFhHQBHhFAAhkQAAhihHhHQhGhGhjAAIlrAAQhjAAhHBGQhGBHAABiQAABjBGBGQBHBHBjAAICsAA");
	this.shape_16.setTransform(12.9,-23.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAqBEIgBABQgbgFgWgRQgMgIgJgLQgNgPgIgSIgEgLIgFgQIgDgTQgBgEABgEQACgFAGgEQAMACABAMIAAAHIAAAFQAAAFACAFIAQAgIABADIAIALQAOARAUAKIARAIQABgLgEgLQgHgVgEgTQgDgTABgUQAAgHAGgDQAGABADADIABAAQAGAFgCALQgCAXAHATIADAIQAJAaAEAcIABAGIAAABIgVgBg");
	this.shape_17.setTransform(18.6,6.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("ABOEfQgWgKgOgRIgIgLIgCgFIgPggQgCgFgBgFIABgFIAAgHQgBgMgNgCQgDAEgCAFIgFgBIisAAQhjAAhHhGQhGhGAAhiQAAhjBGhHQBHhGBjAAIFrAAQBjAABGBGQBHBHAABjQAABihHBGQhFBGhkAAIhYAAIAAACIAAAAQgEgDgFgBQgGADgBAHQAAAUADATQADAVAIAVQADALAAALIgRgIg");
	this.shape_18.setTransform(12.9,-18.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.6,-49.1,87,62.3);


(lib.SpeechBubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEAFQgCgDAAgCQAAgCACgCQACgCACAAQACAAADACQACACAAACQAAACgCADQgDACgCAAQgCAAgCgCg");
	this.shape.setTransform(105,-61.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6600").s().p("AgTAZQgJgIAAgNQAAgNAHgKQAJgLANAAQAKAAAHADQAIAEAAAJQAAAHgHAFIgNAEIgSAJQADADAEACQAEABADAAQAIAAAGgDQAEgDADAAQAGAAAAAGQAAAHgJAEQgJADgJAAQgMAAgJgGgAgHgNQgEAEgCAHIANgFIALgHQgEgCgGAAQgEAAgEADg");
	this.shape_1.setTransform(100,-63.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6600").s().p("AgWAeQgBgCAAgDIAAgkIAAgGIAAgGQAAgDACgCQACgCADAAQAGAAACAGQAJgHAMgBQALAAAAAQIAAAFQAAAIgIAAQgHAAAAgHIAAgHQgMADgFALIAAAcQAAADgDADQgCACgDAAQgEgBgCgCg");
	this.shape_2.setTransform(94,-63.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6600").s().p("AgTAZQgJgIAAgNQAAgNAHgKQAJgLANAAQAKAAAHADQAIAEAAAJQAAAHgHAFIgNAEIgSAJQADADAEACQAEABADAAQAIAAAGgDQAEgDADAAQAGAAAAAGQAAAHgJAEQgJADgJAAQgMAAgJgGgAgHgNQgEAEgCAHIANgFIALgHQgEgCgGAAQgEAAgEADg");
	this.shape_3.setTransform(87.6,-63.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF6600").s().p("AANArIgCgOIgBgNIAAgFIAAgEIAAgFQAAgBgBgBQAAAAAAAAQgBAAAAAAQgBAAAAAAQgHAAgDAEIgHAMQAAAVgCAEQgDAFgFAAQgDAAgDgCQgCgCAAgDIABgEIAAgPIAAgmIAAgCIABgJIgBgFIAAgFQAAgEACgCQADgCADAAQAGAAACAGIABALIgBAMIAAALQAEgEAFgCQADgCAGAAQAKAAAEAFQADAFABAGIABAPIABALIACAMIAAACQAAADgCACQgDACgDAAQgGAAgCgFg");
	this.shape_4.setTransform(80.9,-65.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF6600").s().p("AgEApQgDgDAAgDIAAgHIABgFIgBgdIgLgBQgIgBAAgHQAAgDADgCQACgDADAAIAKABIAAgGIAAgGQAAgDADgCQABgCAEgBQAGAAAAAPIAAAFIAHgBQAGAAADABQAEACAAAFQAAAEgCACQgCADgEgBIgDAAIgCAAIgGAAIABAeIAAADIAAADQAAAOgIAAQgCAAgCgCg");
	this.shape_5.setTransform(74.6,-64.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgPAtIgBgEQAAgFANgdIgWgmIgCgFIgBgEIABgEQAAAAABgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAABABQAAAAABAAQAAABABAAQAKAOAJAaIAIgVIAJgSQADgDADAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABIgBACIgUArIgJAbIgEAKQgBAFgEAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAgBgBg");
	this.shape_6.setTransform(64.9,-62.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AASAdIgEgEIgKAEIgFACQgOAAgGgIQgGgHAAgPQAAgMAKgKQAKgKALAAQAFAAAHACQAIAEAAAEIgBADIgBAHIgBAMIABALIAEAKIABAEIABABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgEgDgAgJgOQgGAIAAAIQAAAKADAEQAEAFAGAAQAEAAAEgCIAGgFIgCgVIAAgGIABgGIgDgCIgDAAQgHAAgHAHg");
	this.shape_7.setTransform(58.9,-63.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgFAqIABgVIAAgVIABgTIAAgWQAAgGAEAAQAFAAAAAGIAAAWIAAATIgBAcIgBAOQAAAGgEAAQgFAAAAgGg");
	this.shape_8.setTransform(54.1,-65.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgVAvQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAIAAgYIAAgVIAAgXIgCgMQAAgEACgDQACgEADAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABIACAEIAAACIgBADQAFgDAFgCQADgCAEAAQAMAAAFALQAFAIgBAOQAAALgGAIQgIAJgLAAQgFAAgGgCIAAAcQAAAAgBABQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBgAgEgeIgIAHIABAaQAGACAFAAQAHAAAEgFQADgDAAgIQAAgKgCgGQgDgFgFAAQgEAAgEACg");
	this.shape_9.setTransform(49.4,-62.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF6600").s().p("AgQAtQgCgDAAgDQAAgFAMgbIgUgkIgDgEIgCgFQAAgDADgCQACgDADAAQAEAAACADQAJALAJAWIAHgRIAJgOQACgFAFAAQADAAACADQADACAAACIgBAFIgUAnIgLAZIgDALQgCAGgFAAQgDAAgDgCg");
	this.shape_10.setTransform(124.8,-80.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF6600").s().p("AgFAuQgCgDAAgDIAAhPQABgEACgCQACgCACAAQADAAADACQACACgBAEIAABMQABALgIAAQgCAAgDgCg");
	this.shape_11.setTransform(119.8,-84.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF6600").s().p("AgEApQgDgDAAgDIAAgHIABgFIgBgdIgLgBQgIgBAAgHQAAgDACgCQADgCADAAIAKABIAAgHIAAgGQAAgDACgCQADgDADAAQAGAAAAAPIAAAFIAHAAQAHAAACABQAEABAAAFQABAEgDACQgCACgEAAIgDAAIgCAAIgGAAIABAeIAAACIAAAEQAAANgIAAQgCAAgCgBg");
	this.shape_12.setTransform(115.4,-83.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF6600").s().p("AALAaIgBgLIgBgMIAAgEIAAgFIAAgCIAAgDQAAgFgCAAQgFAAgDAGQgEAHgDAIIgBAFIAAAFIAAAGIgBAFQAAADgCADQgCABgEAAQgDAAgDgBQgCgDAAgDIAAgFIgBgGIABgPIABgOIAAgFIgBgGQAAgDADgCQACgCAEgBQAHABABAIIAAACQAIgJAIAAQALgBAEAKQADAGAAANIAAADIAAADIABAMIACALQAAAEgDACQgCABgEAAQgHABgBgIg");
	this.shape_13.setTransform(109.5,-82.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF6600").s().p("AgTAZQgJgIAAgNQAAgNAHgKQAJgLANAAQAKAAAHADQAIAEAAAJQAAAHgHAFIgNAEIgSAJQADADAEACQAEABADAAQAIAAAGgDQAEgDADAAQAGAAAAAGQAAAHgJAEQgJADgJAAQgMAAgJgGgAgHgNQgEAEgCAHIANgFIALgHQgEgCgGAAQgEAAgEADg");
	this.shape_14.setTransform(102.9,-82.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF6600").s().p("AALAdQgHACgGAAQgJAAgFgDQgHgEgBgIQgCgOAAgKQAAgIACgJQABgHAHAAQADAAACACQADACAAAEIgBAIIgBAIIABAMIABAKIADABIADABQAEAAAIgCIAAgKIAAgIIABgVQABgHAHAAQADAAADACQACACAAAEIgBAUIAAAKIAAAMIAAAEIABADQAAAEgDACQgCACgEAAQgEAAgDgEg");
	this.shape_15.setTransform(96.5,-82.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF6600").s().p("AAGAlIAAgCIABgRIgEAAQgMAAgIgHQgKgHAAgLQAAgSALgKQAKgLAQAAQAEAAACACIAEgBQADAAACACQADADAAADQAAAQgCAUIgDATIgBAVQAAADgDADQgCACgDAAQgIAAAAgKgAAHggQgIACgFAHQgEAHAAAJQAAAGADABQAEAEAFAAQAFgBACgDQACgFAAgOIABgNIgCAAIgCAAIgBAAg");
	this.shape_16.setTransform(90.1,-81.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF6600").s().p("AgTAZQgJgIAAgNQAAgNAHgKQAJgLANAAQAKAAAHADQAIAEAAAJQAAAHgHAFIgNAEIgSAJQADADAEACQAEABADAAQAIAAAGgDQAEgDADAAQAGAAAAAGQAAAHgJAEQgJADgJAAQgMAAgJgGgAgHgNQgEAEgCAHIANgFIALgHQgEgCgGAAQgEAAgEADg");
	this.shape_17.setTransform(83.8,-82.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF6600").s().p("AgWAeQgBgCgBgEIAAgjIAAgGIAAgFQAAgEACgCQACgCAEAAQAHAAABAHQAJgIAMAAQAMAAAAAPIAAAFQgBAIgHAAQgIAAAAgIIAAgGQgLADgGALIAAAbQAAAEgCADQgDABgDAAQgEAAgCgCg");
	this.shape_18.setTransform(77.8,-82.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF6600").s().p("AgKAxQgCgCAAgDIAAgCIABgQIAAgbIgEABIgDAAQgEAAgCgDQgCgBAAgEQAAgFAGgCQACgBAIAAIABgHQABgNAGgGQAEgIAPAAQAKAAAAAHQAAAIgKAAQgHAAgDAFQgCAEgBAIIAAACIALgBQALAAAAAHQAAAIgMgBIgLABIAAAOIAAAPQAAALgBAHQgCAGgEAAQgDAAgDgCg");
	this.shape_19.setTransform(71.6,-83.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgTAZQgJgHAAgOQAAgNAIgKQAIgLAMAAQAJAAAGADQAIAEAAAIQAAAGgHAFIgMAEIgVALQADAFAFACQAFADAFAAIAJgCQAHgCACgDQABgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAIAEACQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAAHgLAEQgJAEgIAAQgLAAgJgGgAgLgOQgEAFgDAJIASgGQAJgFAEgEQgFgFgIAAQgGAAgFAGg");
	this.shape_20.setTransform(61.9,-82.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AANAtQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQgEgIAAgFIgEgZIgDgXQgFATgGAMQgHAQgCAIIABADQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgCACgEAAQgHAAAAgIIgCgHIgGgdQgEgMgKgbIAAgDQAAgFAHAAQADAAACAEIAFAMIAHAaIAFAYQAGgOAHgUIAFgRQAGgNADAAQAEAAABAEQACAFADATIADAVIAGAXIAUgxIACgLQACgHADgEQABgDAEAAQAGAAAAAGIgCAGIgDAGIgDALIgRAoIgJAUQgBAEgFAAQgDAAgBgCg");
	this.shape_21.setTransform(52.6,-83.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(3,1,1).p("AIMCYQA1hCAAhWQAAhlhJhJQhIhIhnAAIqRAAQhnAAhJBIQhIBJAABlQAABmBIBIQBJBJBnAAIKRAAQA1AAAtgTAGrDjQABAAABgB");
	this.shape_22.setTransform(86.9,-74.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AI0EMQgFACgJgDQgPgFgOgHIgygRQgDgCgDgBQgYgKgUgRIgQgLIgCgBIgCgCIgDABIAAAAIAAAAQgtATg1AAIqRAAQhmAAhJhIQhIhJAAhkQAAhmBIhJQBJhIBmAAIKRAAQBnAABIBIQBJBJAABmQAABVg0BBIAAAMIAAABIABAHQAAAIgBAIIgBAEIACADIAAAAQAEAFADAGQARAaAZAUIAFADQATAGAGAVIAAAFQAQAKANAPIgpgLg");
	this.shape_23.setTransform(89.7,-71.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("Ah2ANQgEgDAAgHIADgFIAEgEIAAgBIAAAAIABAAIAFABIACABIAQAJQATASAZAJQADABACACIAxARQAOAHAPAFQAIADAGgCIAoAMQgMgQgQgKIgBgFQgGgVgTgGIgFgDQgZgSgPgaQgCgGgEgFIgBAAIgBgHQACgHgBgJIAAgHIAAgBQABgKAHgEIAKACQAIARgDAUIAAAHQA/A1A1A7IgYAGIADAGIgZABQhpAAhahJg");
	this.shape_24.setTransform(141.2,-50.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(27.7,-100.6,125.9,58.6);


(lib.Eye = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape.setTransform(-6.8,-2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgaAVIACgEQgOgYApAJIAOgFIAAgBIAGACQAGACABADQABABAAAAQABABAAAAQAAABAAABQAAAAgBABIgBACIgCAFQgCAFgFACIgkAHQgHgDgEgFgAgegFIgBgCIADAFIgCgDgAgegcIgBAAIABAAIAEADIgEgDg");
	this.shape_1.setTransform(3.1,4.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("AgkAFIAogoQArAYgMApQgPAGgMAAQgaAAgSgfg");
	this.shape_2.setTransform(1.9,-4.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAOBNIAmgIQAFgCACgFIABgEIACgDQAAgBABAAQAAgBAAgBQAAAAgBgBQAAAAgBAAQgBgGgHgCIgFgCIAAABIgOAHQgpgLAMAaIgCAEIgLglQgDgFAEgFQAAgBABAAQAAAAAAgBQAAAAABAAQAAgBAAAAIAFgBIAAAAQABACABAAQABABAAAAQAAAAgBgBQgBgBgBgBIghgXQgDgDgDgBQgPgFgJgJIgCgCIgBAAIgCgCIgDgHIgCgBQgHgLgCgQIAhAHIAAgBIANAGQAGAFAHgBIAAAEIACgEQABAAAAgBQABAAAAgBQAAAAABgBQAAgBAAAAIAFgKIAIgEIAJgLIALgJIABAAQBmA2g3BqIgKAFQgLAGgJAAQgLAAgIgJgAAAAoQAAACAAABQABABAAAAQAAgBgBgBQAAgBAAgDIAAACgAgSgjQAZArAugSQAMgrgrgZg");
	this.shape_3.setTransform(0,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_4.setTransform(4.9,4.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC99").s().p("AgJA6QgDgBgDgDQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgCgCAAgDIABgEQgHgKACgNIABgLIAAAAIgCgBIgBgIIAAgMIADgQIACgIIACgFIAAgDIANgNQAaAQAFAXQAIAFAAAKIABAJQACAPAAAPQAEAKgJAHIgDAEQgDAFgGAAIgBAAIAAAAIgHAAQgMAAgJgCgAglgTIABgHIABAAIgBADIAAAFIgBgBg");
	this.shape_5.setTransform(2.9,-1.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AANBVQgIAAgFgCIgWgIIgEgCQgFgCgFgBIgVgIIgEgEQgFAAABgFQgFAAABgFQABgGAGABQAWACAVgGIABAAIgCgGQACgDgBgGIAAgCQgBgUABgRIABgLQABgGgCgEIAAgFIAAgDIAAAAIAAgBIABgJQAAgHACgHQAEgIAIgEIAEgFIABAAIADABQBlA1g2BqIgKAFQgLAGgJAAIgIgBgAAkArIAAgBIAAAAIABAAQAGAAADgFIADgEQAJgHgFgKQABgPgCgNIgBgLQgBgKgIgFQgFgYgbgPIgLANIgBADIgBAFIgCAIIgDAQIAAAMIABAKIABABIAAAAIgBAJQgBANAGAKIgBAEQABADACACQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQACADAEABQAOACAPAAIABABg");
	this.shape_6.setTransform(1.3,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},16).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.3,-8.5,16.6,17.4);


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


(lib.general_buttoncolor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* play();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#D5FFD7","#61EF01","#1DA400","#004A00"],[0,0.345,0.635,0.937],0.4,7,0,0.4,7,18.8).s().p("AAAB2QgvAAgjgjQgjgjAAgwQAAgvAjgjQAjgjAvAAQAwAAAjAjQAjAjAAAvQAAAwgjAjQgjAjgwAAIAAAAg");
	this.shape.setTransform(11.9,11.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23.7,23.6);


(lib.fpb_rightOutFrame_up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Aj5D6IAAnzIHzAAIAAHzg");
	this.shape.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.fpb_rightInFrame_up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjEDFIAAmJIGJAAIAAGJg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39.5,39.5);


(lib.fpb_leftOutFrame_up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AjEDFIAAmJIGJAAIAAGJg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39.5,39.5);


(lib.fpb_leftInFrame_up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjEDFIAAmJIGJAAIAAGJg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39.5,39.5);


(lib.fpb_face_up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E8E8E8").s().p("AjEDFIAAmJIGJAAIAAGJg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39.5,39.5);


(lib.fpb_rightOutFrame_press = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AmjD6IAAnzINGAAIAAHzg");
	this.shape.setTransform(25,25,0.595,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.fpb_rightInFrame_press = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AjEDFIAAmJIGJAAIAAGJg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39.5,39.5);


(lib.fpb_leftOutFrame_press = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AjEDFIAAmJIGJAAIAAGJg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39.5,39.5);


(lib.fpb_leftInFrame_press = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AjEDFIAAmJIGJAAIAAGJg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39.5,39.5);


(lib.fpb_face_press = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E8E8E8").s().p("AjEDFIAAmJIGJAAIAAGJg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39.5,39.5);


(lib.fpb_rightOutFrame_over = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AmjD6IAAnzINGAAIAAHzg");
	this.shape.setTransform(25,25,0.595,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.fpb_rightInFrame_over = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjEDFIAAmJIGJAAIAAGJg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39.5,39.5);


(lib.fpb_leftOutFrame_over = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AjEDFIAAmJIGJAAIAAGJg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39.5,39.5);


(lib.fpb_leftInFrame_over = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjEDFIAAmJIGJAAIAAGJg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39.5,39.5);


(lib.fpb_face_over = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E8E8E8").s().p("AjEDFIAAmJIGJAAIAAGJg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39.5,39.5);


(lib.fpb_rightOutFrame_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Aj5D6IAAnzIHzAAIAAHzg");
	this.shape.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.fpb_rightInFrame_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjEDFIAAmJIGJAAIAAGJg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39.5,39.5);


(lib.fpb_leftOutFrame_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AjEDFIAAmJIGJAAIAAGJg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39.5,39.5);


(lib.fpb_leftInFrame_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjEDFIAAmJIGJAAIAAGJg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39.5,39.5);


(lib.fpb_face_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E8E8E8").s().p("AjEDFIAAmJIGJAAIAAGJg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39.5,39.5);


(lib.boundingBox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnzHzIAAvmIPmAAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-50,100,100);


(lib.Definition = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgFAGQgDgDABgDQgBgCADgDQACgDADAAQAEAAACADQACADABACQgBADgCADQgCADgEAAQgDAAgCgDg");
	this.shape.setTransform(193.3,3.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6600").s().p("AgUA3QgDADgEAAQgEAAgDgDQgDgCAAgEIABgGIAAgFIAAhRQAAgFACgEQADgGAFAAQAIAAAAAJIAAADIAAADIAAAcIAKgEIAIgCQARAAALANQAKAJAAARQAAARgMAMQgMAMgPAAQgKAAgJgEgAgHAAIgLAFIAAAfQAKAEAHAAQAHAAAGgGQAGgHAAgJQAAgKgFgGQgFgEgIAAQgCAAgFACg");
	this.shape_1.setTransform(187,-1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6600").s().p("AgcAmQgCgDAAgEIAAguIAAgHIAAgHQABgEACgDQACgDAFAAQAIABABAIQALgJAQAAQAPgBAAAUIAAAFQgBALgJAAQgKAAABgJIgBgIQgOADgIAOIAAAjQAAAEgCADQgDACgFABQgEgBgDgCg");
	this.shape_2.setTransform(179.1,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6600").s().p("AgYAfQgMgJAAgRQAAgQAKgOQAKgOARAAQAMABAJAEQALAFAAAMQAAAHgJAGQgEAEgMADIgXALQAEAEAEABQAFACAFAAQAKAAAGgDQAHgEADAAQAIAAAAAHQAAAJgMAFQgKAFgMgBQgPABgMgJgAgIgQQgFAFgEAIIARgHQAIgEAGgEQgFgDgIAAQgFAAgEAFg");
	this.shape_3.setTransform(171,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF6600").s().p("AgJAgIgZg5IgBgEQAAgEAEgDQADgDAEAAQAGAAADAGQAEAJALAfIAKgYIAGgPQADgGAGAAQAEAAAEADQADACAAAEQAAADgMAaIgPAfQgBAEgCACQgDADgDAAQgGAAgDgIg");
	this.shape_4.setTransform(163.4,0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF6600").s().p("AAUA3QgFACgGABIgJABQgQAAgLgKQgLgLAAgRQAAgTALgKQAMgNAPAAQAGABAEABQAEABADADQABgaACgJQABgIAJgBQADABADACQADADAAAEIgBAgIgDAeQAAAaADAJIAAACQgBAEgDACQgDADgDAAQgFAAgDgEgAgNACQgGAHAAAMQAAAJAGAFQAGAGAHgBQAEABADgCIAHgEIACgDIAAgbQgDgEgDgBQgEgCgGAAQgIABgFADg");
	this.shape_5.setTransform(155.1,-1.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF6600").s().p("AARAhIgMAFIgGACQgSAAgJgKQgJgJAAgTQAAgQANgMQANgNARAAQAHAAAJAEQALAFAAAGQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABIgBAHIAAAKQAAAMACAGIADAIIADAHQAAAEgDACQgDADgEAAQgDAAgIgHgAgJgNQgHAHAAAJQAAAJADAFQAEAFAHAAQACAAAEgBQAEgCAEgDIgCgYIAAgFIABgHIgCgBIgCAAQgIAAgIAIg");
	this.shape_6.setTransform(146.7,0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgbAhIAAgyIAAgGIAAgIQAAgHAHgBQAHAAAAANQANgNAQAAQAHAAACAEQADAEAAAJIAAAFQAAAJgHAAQgGAAgBgGIAAgGIAAgGQgLACgGAEQgGAGgEAJIAAAmQAAAHgIABQgGgBAAgHg");
	this.shape_7.setTransform(134.6,0.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgYAfQgLgJAAgQQAAgSAJgNQAKgOAQAAQALABAIAEQAJAEAAALQAAAIgIAFIgQAGIgZAOQAEAGAGADQAGADAGAAQAFAAAHgCQAIgCADgEQADgEACAAQADAAACACQABAAAAABQAAABABAAQAAABAAAAQAAABAAAAQAAAIgOAHQgLAEgKAAQgOABgLgJgAgOgSQgGAGgDAMIAWgIQAMgHAFgEQgFgHgLABQgIgBgGAIg");
	this.shape_8.setTransform(126.9,0.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AATA3IgDgRIgBgSIAAgGIAAgFQAAgMgGAAQgJAAgGAGIgKARQAAAcgDAFQgCAEgEAAQgDAAgCgBQgDgCAAgEIABgDIABgKIAAgLIAAg0IABgMIgBgIIgBgGQAAgEADgCQACgBADAAQAGAAABAGIABANIgBAQIAAAQIAAAGQAGgHAHgFQAFgDAIAAQAMAAAEAHQADAGABALIAAAOIACAQIACAOIABADQAAADgCABQgDACgDAAQgFABgCgGg");
	this.shape_9.setTransform(118.4,-1.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgDA0QgDgDAAgDIABgIIAAgIIgCgpIgQgBQgGgBAAgGQAAgEABgCQACgCAEAAIAPABIAAgJIgBgJQAAgEACgCQADgCADAAQAEAAABALIAAAGIAAAEIAAAFIALgBIAKABQAEACAAAFQAAADgCACQgCACgDAAIgEAAIgDAAIgKABIABApIAAAEIAAADQABAQgIAAQgBAAgCgBg");
	this.shape_10.setTransform(110.4,-0.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgUAeQgKgKgBgRQAAgOAJgNQAKgPAQAAQAPAAAHAOQAGALAAAOQAAAPgIAMQgKANgOAAQgLAAgJgKgAgLgOQgFAJAAAIQAAALAGAGQAEAFAGAAQAHAAAFgGQAGgGABgKQABgbgRAAQgIAAgGAKg");
	this.shape_11.setTransform(102.8,0.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AASAkIgDgQIgBgRIABgFIAAgGQAAgRgGABQgIAAgGAJQgGAJgEALIgBAIIAAAHIAAAHIABAGQAAADgCACQgCACgEAAQgDAAgCgCQgCgCAAgDIAAgGIgBgHIABgUIABgUIAAgHIAAgHQAAgDACgCQACgCADAAQAHAAABAJIAAAJQAMgRALAAQAMAAAEALQAEAHAAAOIAAAHIAAAEIABARIACAPQAAADgCACQgCACgDAAQgHAAAAgGg");
	this.shape_12.setTransform(95.2,0.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAXAlIgFgFIgMAFQgGACgBAAQgRAAgIgJQgIgKAAgSQAAgQANgNQAMgMAPAAQAGAAAIADQAKAEAAAGQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAIgCAKIAAAOQAAAJABAFIAFANIACAEIAAABQAAADgCACQgBABAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgBAAgEgDgAgLgRQgIAJAAAKQAAAMAEAGQAEAGAJAAQAFAAAFgCIAHgGQgCgSAAgJIAAgHIACgIIgFgCIgDAAQgKAAgIAJg");
	this.shape_13.setTransform(87.3,0.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgbAhIAAgyIAAgGIAAgIQAAgHAHgBQAHAAAAANQANgNAQAAQAHAAACAEQADAEAAAJIAAAFQAAAJgHAAQgGAAgBgGIAAgGIAAgGQgLACgFAEQgHAGgEAJIAAAmQAAAHgIABQgGgBAAgHg");
	this.shape_14.setTransform(75.6,0.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgUAeQgKgKgBgRQAAgOAJgNQAKgPAQAAQAPAAAHAOQAGALAAAOQAAAPgIAMQgKANgOAAQgLAAgJgKgAgLgOQgFAJAAAIQAAALAGAGQAEAFAGAAQAHAAAFgGQAGgGABgKQABgbgRAAQgIAAgGAKg");
	this.shape_15.setTransform(67.6,0.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgIAPQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAIAEgLIAFgNQABgDADAAQABAAAAAAQABAAABAAQAAABABAAQAAAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAACgKAVQAAAEgDAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAgBgBg");
	this.shape_16.setTransform(57.7,4.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgYAfQgLgJAAgQQAAgSAJgNQAKgOAQAAQALABAIAEQAJAEAAALQAAAIgIAFIgPAGIgaAOQAEAGAGADQAGADAGAAQAFAAAHgCQAIgCADgEQADgEACAAQADAAACACQABAAAAABQAAABABAAQAAABAAAAQAAABAAAAQAAAIgOAHQgLAEgKAAQgOABgLgJgAgOgSQgGAGgDAMIAWgIQAMgHAFgEQgFgHgLABQgIgBgGAIg");
	this.shape_17.setTransform(51.3,0.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgHAhIgLgdIgNggIgBgDQAAgDADgCQACgDADAAQAEAAACAFIASAxIANggIAGgQQACgFAEAAQADAAADACQACACAAADQAAADgMAcIgPAhQgBAHgFAAQgEAAgDgHg");
	this.shape_18.setTransform(43.4,0.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgGA1QgCgCAAgEIAAgNIAAgOIABgRIAAgPQAAgDACgCQACgCADAAQACAAACACQACACAAADIgBAPIgBARIABAOIAAANQAAAEgCACQgCABgBAAQgEAAgCgBgAgDgnQgDgDAAgDQAAgDADgDQACgDACABQADgBADADQACADAAADQAAADgCADQgDADgDAAQgCAAgCgDg");
	this.shape_19.setTransform(37.7,-1.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgDA0QgDgDAAgDIABgIIAAgIIgCgpIgQgBQgGgBAAgGQAAgEABgCQACgCAEAAIAPABIAAgJIgBgJQAAgEACgCQADgCADAAQAEAAABALIAAAGIAAAEIAAAFIALgBIAKABQAEACAAAFQAAADgCACQgCACgDAAIgEAAIgDAAIgKABIABApIAAAEIAAADQABAQgIAAQgBAAgCgBg");
	this.shape_20.setTransform(32,-0.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgUAgQgKgKAAgPQAAgNAKgQQALgSAMAAQAHAAAJAEQALAEAAAGQAAADgCACQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIgDgBIgDgCQgFgEgJAAQgGAAgHANQgHANAAAHQAAAJAHAGQAGAFAIAAQAEAAAFgCIAIgFIAEgBQAAAAABAAQABABAAAAQABAAAAAAQABABAAAAQACACAAADQAAAFgLAFQgKAFgGAAQgNAAgLgJg");
	this.shape_21.setTransform(24.6,0.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgYAfQgLgJAAgQQAAgSAJgNQAKgOAQAAQALABAIAEQAJAEAAALQAAAIgIAFIgQAGIgaAOQAEAGAGADQAHADAGAAQAFAAAHgCQAIgCADgEQACgEADAAQADAAACACQAAAAABABQAAABAAAAQABABAAAAQAAABAAAAQAAAIgOAHQgLAEgKAAQgOABgLgJgAgOgSQgGAGgDAMIAWgIQAMgHAGgEQgHgHgKABQgIgBgGAIg");
	this.shape_22.setTransform(16.8,0.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgWA0IgBgEQAAgCACgCQADgCACgBQAFAAAEAKIAFAHQACAEACAAQADAAADgFIACgIIgDgsIgCgmQAAgEACgDQACgCADAAIAFABQABABAAAAQABABAAAAQAAABABAAQAAABAAABIACAnIACAuQAAAKgGAIQgGAJgKAAQgOAAgKgYgAAEg8QgCgDAAgEQAAgDACgCQADgDADAAQAEAAADADQACACAAADQAAAEgCADQgDACgEAAQgDAAgDgCg");
	this.shape_23.setTransform(8.8,0.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgYAxQgLgKAAgRQAAgTALgJQAKgNAPAAQAIAAAEADIAHAFIACgpQACgGAFgBQAHAAAAAIIgDAtIgBATQABAYACAMIAAACQAAABgBABQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAgBAAQgEAAgDgHQgFAFgGABQgFACgFAAQgOAAgKgKgAgQABQgGAHAAAOQAAAKAHAHQAGAHAJAAQAEAAAFgCIAIgHIACgCIAAgNIAAgJIAAgIQgDgFgFgCQgEgDgGAAQgKAAgHAGg");
	this.shape_24.setTransform(2.1,-1.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAXAlIgFgFIgMAFQgGACgBAAQgRAAgIgJQgIgKAAgSQAAgQANgNQAMgMAPAAQAGAAAIADQAKAEAAAGQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAIgCAKIAAAOQAAAJABAFIAFANIACAEIAAABQAAADgCACQgBABAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgBAAgEgDgAgLgRQgIAJAAAKQAAAMAEAGQAEAGAJAAQAFAAAFgCIAHgGQgCgSAAgJIAAgHIACgIIgFgCIgDAAQgKAAgIAJg");
	this.shape_25.setTransform(-6.2,0.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgHAPQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBgBAAAAIAFgLIAFgNQABgDADAAQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQABABAAAAQAAACgLAVQAAAEgDAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_26.setTransform(-16.1,4.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgVA2QgDAEgDAAQgDAAgBgCQgCgCAAgDIAAgGIAAgFIAAgXIgBgWIABgUIAAgUQAAgFABgDQADgFAEAAQAGAAgBAHIAAADIgBADIAAAQIAAASQAGgEAGgCQAGgCADAAQAQAAAJAMQAKAJAAARQAAARgLALQgKAMgPAAQgLAAgJgFgAgKgCIgLAFIAAANIAAALIAAAMIAKAFIAKABQAJAAAHgIQAGgHAAgLQAAgLgFgHQgGgGgKAAQgEAAgGADg");
	this.shape_27.setTransform(-22.9,-1.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgbAhIAAgyIABgGIAAgIQgBgHAHgBQAHAAAAANQANgNARAAQAFAAAEAEQACAEAAAJIAAAFQgBAJgGAAQgHAAAAgGIAAgGIAAgGQgLACgGAEQgGAGgFAJIABAmQAAAHgIABQgGgBAAgHg");
	this.shape_28.setTransform(-30.9,0.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgYAfQgLgJAAgQQAAgSAJgNQAKgOAQAAQALABAIAEQAJAEAAALQAAAIgIAFIgQAGIgaAOQAFAGAFADQAHADAGAAQAFAAAHgCQAIgCADgEQACgEADAAQADAAACACQABAAAAABQAAABAAAAQABABAAAAQAAABAAAAQAAAIgOAHQgLAEgKAAQgOABgLgJgAgOgSQgGAGgDAMIAWgIQAMgHAFgEQgFgHgLABQgIgBgGAIg");
	this.shape_29.setTransform(-38.6,0.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgHAhIgLgdIgNggIgBgDQAAgDADgCQACgDADAAQAEAAACAFIASAxIANggIAGgQQACgFAEAAQADAAADACQACACAAADQAAADgMAcIgPAhQgBAHgFAAQgEAAgDgHg");
	this.shape_30.setTransform(-46.5,0.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAXAlIgFgFIgMAFQgGACgBAAQgRAAgIgJQgIgKAAgSQAAgQANgNQAMgMAPAAQAGAAAIADQAKAEAAAGQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAIgCAKIAAAOQAAAJABAFIAFANIACAEIAAABQAAADgCACQgBABAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgBAAgEgDgAgLgRQgIAJAAAKQAAAMAEAGQAEAGAJAAQAFAAAFgCIAHgGQgCgSAAgJIAAgHIACgIIgFgCIgDAAQgKAAgIAJg");
	this.shape_31.setTransform(-58.6,0.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgTAoQgMgEAAgHQAAgDADgDQACgCADAAQADABADADQABACAHABIAIABQAEgBAFgBQAHgCAAgEQAAgLgOgDIgGgCQgKgCgDgCQgHgDAAgIQAAgPAPgHIAMgFIAOgEIAGgBQAEAAABACQACACAAADIABAGIABAGQAAAEgCABQgCADgDAAQgEAAgCgDIgBgIIgRAFQgKAFAAAGIAEACQAPADAIAFQAMAGAAAPQAAALgKAHQgJAEgLAAQgKAAgIgDg");
	this.shape_32.setTransform(-70.7,0.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgYAfQgLgJAAgQQAAgSAJgNQAKgOAQAAQALABAIAEQAJAEAAALQAAAIgIAFIgQAGIgaAOQAEAGAGADQAHADAGAAQAFAAAHgCQAIgCADgEQACgEADAAQADAAACACQAAAAABABQAAABAAAAQABABAAAAQAAABAAAAQAAAIgOAHQgLAEgKAAQgPABgKgJgAgOgSQgGAGgDAMIAWgIQAMgHAGgEQgHgHgKABQgIgBgGAIg");
	this.shape_33.setTransform(-78.1,0.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgGA1QgCgCAAgEIAAgNIAAgOIABgRIAAgPQAAgDACgCQACgCADAAQACAAACACQACACAAADIgBAPIgBARIABAOIAAANQAAAEgCACQgCABgBAAQgEAAgCgBgAgDgnQgDgDAAgDQAAgDADgDQACgDACABQADgBADADQACADAAADQAAADgCADQgDADgDAAQgCAAgCgDg");
	this.shape_34.setTransform(-84.4,-1.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgLA+QgCgCAAgDIAAgBQACgKAAgLIAAgUIAAgTIgMAAQgHAAAAgHQAAgHANAAIAHAAIABgMQACgQAGgIQAGgJAQAAQAKAAAAAHQAAAHgJAAQgSAAgCAZIAAAEIAQAAQALAAAAAHQAAAFgFABIgGABIgRABIgBAOIABAOIAAANQAAAOgBAIQAAAGgGAAQgDAAgCgCg");
	this.shape_35.setTransform(-90.5,-1.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgGA1QgCgCAAgEIAAgNIAAgOIABgRIAAgPQAAgDACgCQACgCADAAQACAAACACQACACAAADIgBAPIgBARIABAOIAAANQAAAEgCACQgCABgBAAQgEAAgCgBgAgDgnQgDgDAAgDQAAgDADgDQACgDACABQADgBADADQACADAAADQAAADgCADQgDADgDAAQgCAAgCgDg");
	this.shape_36.setTransform(-96.2,-1.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgZAxQgKgKAAgRQAAgTAKgJQALgNAOAAQAJAAAFADIAHAFIACgpQAAgGAHgBQAGAAAAAIIgDAtIAAATQAAAYABAMIAAACQAAABAAABQAAABAAAAQAAABgBAAQAAABAAAAQgBAAgBABQAAAAgBABQAAAAgBAAQAAAAgBAAQgEAAgDgHQgFAFgGABQgFACgFAAQgOAAgLgKgAgQABQgGAHAAAOQAAAKAGAHQAHAHAJAAQAEAAAFgCIAIgHIACgCIAAgNIAAgJIAAgIQgCgFgFgCQgFgDgHAAQgKAAgGAGg");
	this.shape_37.setTransform(-102.8,-1.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgUAeQgKgKgBgRQAAgOAJgNQAKgPAQAAQAPAAAHAOQAGALAAAOQAAAPgIAMQgKANgOAAQgLAAgJgKgAgLgOQgFAJAAAIQAAALAGAGQAEAFAGAAQAHAAAFgGQAGgGABgKQABgbgRAAQgIAAgGAKg");
	this.shape_38.setTransform(-111.3,0.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgDArQgCgCAAgEIgCgaIgBgYQAAgIgDgEQgFACgFAGIgJAJIgDAFIgBALIgBANIABAGIAAAFQAAADgCACQgCACgDAAQgIAAAAgSIAAgNIABgMIAAgLIgBgMQAAgRAHAAQADAAADADQACACAAADIAAAFIgBAEIAAAIQAEgIAIgGQAHgHAFAAQALAAADAMQAEgGAGgCQAFgDAHAAQANAAAEANIADAVQACAKADAeQAAADgCACQgCACgDAAQgGAAgBgHIgDgWIgCgVQgBgFgCgFQgCgGgDAAQgDAAgHAEQgHAEgCADIAAANIACASIABATQAAAEgBACQgDACgDAAQgBAAgCgCg");
	this.shape_39.setTransform(-120.8,0.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF6600").s().p("AgUA3QgDADgEAAQgEAAgDgDQgDgCAAgEIABgGIAAgFIAAhRQAAgFACgEQADgGAFAAQAIAAAAAJIAAADIAAADIAAAcIAKgEIAIgCQARAAALANQAKAJAAARQAAARgMAMQgMAMgPAAQgKAAgJgEgAgHAAIgLAFIAAAfQAKAEAHAAQAHAAAGgGQAGgHAAgJQAAgKgFgGQgFgEgIAAQgCAAgFACg");
	this.shape_40.setTransform(-135.7,-1.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF6600").s().p("AgcAmQgCgDAAgEIAAguIAAgHIAAgHQABgEACgDQACgDAFAAQAIABABAIQALgJAQAAQAPgBAAAUIAAAFQgBALgJAAQgKAAABgJIgBgIQgOADgIAOIAAAjQAAAEgCADQgDACgFABQgEgBgDgCg");
	this.shape_41.setTransform(-143.6,0.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FF6600").s().p("AgYAfQgMgJAAgRQAAgQAKgOQAKgOARAAQAMABAJAEQALAFAAAMQAAAHgJAGQgEAEgMADIgXALQAEAEAEABQAFACAFAAQAKAAAGgDQAHgEADAAQAIAAAAAHQAAAJgMAFQgKAFgMgBQgPABgMgJgAgIgQQgFAFgEAIIARgHQAIgEAGgEQgFgDgIAAQgFAAgEAFg");
	this.shape_42.setTransform(-151.6,0.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF6600").s().p("AgJAgIgZg5IgBgEQAAgEAEgDQADgDAEAAQAGAAADAGQAEAJALAfIAKgYIAGgPQADgGAGAAQAEAAAEADQADACAAAEQAAADgMAaIgPAfQgBAEgCACQgDADgDAAQgGAAgDgIg");
	this.shape_43.setTransform(-159.3,0.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FF6600").s().p("AAUA3QgFACgGABIgJABQgQAAgLgKQgLgLAAgRQAAgTALgKQAMgNAPAAQAGABAEABQAEABADADQABgaACgJQABgIAJgBQADABADACQADADAAAEIgBAgIgDAeQAAAaADAJIAAACQgBAEgDACQgDADgDAAQgFAAgDgEgAgNACQgGAHAAAMQAAAJAGAFQAGAGAHgBQAEABADgCIAHgEIACgDIAAgbQgDgEgDgBQgEgCgGAAQgIABgFADg");
	this.shape_44.setTransform(-167.5,-1.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FF6600").s().p("AARAhIgMAFIgGACQgSAAgJgKQgJgJAAgTQAAgQANgMQANgNARAAQAHAAAJAEQALAFAAAGQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABIgBAHIAAAKQAAAMACAGIADAIIADAHQAAAEgDACQgDADgEAAQgDAAgIgHgAgJgNQgHAHAAAJQAAAJADAFQAEAFAHAAQACAAAEgBQAEgCAEgDIgCgYIAAgFIABgHIgCgBIgCAAQgIAAgIAIg");
	this.shape_45.setTransform(-176,0.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AASAkIgDgQIgBgRIABgFIAAgGQAAgRgGABQgIAAgGAJQgGAJgEALIgBAIIAAAHIAAAHIABAGQAAADgCACQgCACgEAAQgDAAgCgCQgCgCAAgDIAAgGIgBgHIABgUIABgUIAAgHIAAgHQAAgDACgCQACgCADAAQAHAAABAJIAAAJQAMgRALAAQAMAAAEALQAEAHAAAOIAAAHIAAAEIABARIACAPQAAADgCACQgCACgDAAQgHAAAAgGg");
	this.shape_46.setTransform(-188.4,0.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAZAmIgFgXIgTADIgSAEIgMAcQgDAEgEAAQgDAAgCgCQgCgCAAgDQAAgDALgYIgBgEQAAgGAHgCIAVgiQAPgcAFAAQAFAAACAJIAFAYIALAxIAEAMIACAIQAAADgCACQgCACgDAAQgHAAgFgRgAgIAFIAZgFIgGgbg");
	this.shape_47.setTransform(-198.1,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-205.6,-14.5,402.8,24.9);


(lib.LGlobalClass = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Symbol_36:0});

	// timeline functions:
	this.frame_0 = function() {
		///*--------------VERSION CONTROL INFORMATION----------------------
		//
		//	Learning Interaction Global Toolbox Class
		//	Developed by Dan Carr
		//	Quality Assurance by Andrew Chemey
		//	Last Modified for Flash MX: November 25, 2001
		//	Copyright 2002 Macromedia Inc. All rights reserved.
		//	
		//	
		//  ------------------END VERSION CONTROL--------------------------
		//  
		//  Section 1: Start Contruction of the Global Class
		//  
		//  1-1: _global.LToolBox		// Initializes the Global Class
		//  
		//  Section 2: Graphic Initialization Handling
		//  
		//  2-1: setTextField			// Sets a text field on the stage
		//  2-2: setCompLabel			// Sets the label of a component on the stage
		//  2-3: setCompCallBack		// Sets the callBack of a component on the stage
		//  2-4: setCompState			// Sets the active state of a component on the stage
		//  2-5: getCompLabel			// Returns the label of a component on the stage
		//  2-6: initControlButton	// Initializes the control button component
		//  
		//  Section 3: Feedback Event Handling
		//  
		//  3-1: setFeedback			// Initializes feedback responses
		//   
		//  Section 4: Navigation Event Handling
		//  
		//  4-1: setNavigation		// Handles navigation events at the end of a session
		//  
		//  Section 5: Tracking Toolbox
		//  
		//  5-1: sessionStart			// DateStamp, timeStamp, and start sessionTimer
		//  5-2: sessionStop			// Stop sessionTimer and return Latency
		//  5-3: submitScore			// Format score and submit to the publish template
		//  
		//  Section 6: Common Toolbox
		//  
		//  6-1: getDateStamp			// Format current date
		//  6-2: getTimeStamp			// Format current time
		//  6-3: sessionTimer			// "Start" and "Stop" the sessionTimer for Latency
		//  6-4: getLatency			// Format seconds to hours for Latency
		//  6-5: formatNum			// Format single digit number to a double digit number
		//  6-6: getObjProp			// Returns a report from an Object
		//  6-7: reportToOutput		// Trace this session's instance Properties to Output
		//  
		//*/
		//
		//#initclip 0
		//
		//// SECTION 1: START GLOBAL FUNCTIONS
		//
		//// 1-1: Constructor function for the global class
		//
		//_global.LToolBox = function()
		//{
		//	this.interaction_id = undefined;
		//	this.interaction_type = undefined;
		//	
		//	this.correct_response = undefined;
		//	this.student_response = undefined;
		//	this.result = undefined;
		//		
		//	this.feedback = undefined;
		//	this.numOfTries = 1;
		//	this.feedback_list = undefined;
		//	
		//	this.tracking = undefined;
		//	this.weighting = undefined;
		//	this.objective_id = undefined;
		//	this.latency = undefined;
		//	
		//	this.navigation = undefined;
		//}
		//
		//// Inherit Object properties
		//_global.LToolBox.prototype = new Object();
		//
		//
		//// SECTION 2: GRAPHIC INITIALIZATION HANDLING
		//
		//
		//// 2-1: Locate a named text field and set its value
		//
		//LToolBox.prototype.setTextField = function (fieldName, val) {
		//	
		//	eval(fieldName).text = val;
		//}
		//
		//
		//// 2-2: Locate a named component and set its label
		//
		//LToolBox.prototype.setCompLabel = function (UIComponent, val) {
		//	
		//	eval(UIComponent).setLabel(val);
		//}
		//
		//
		//// 2-2: Locate a named component and set its changeHandler
		//
		//LToolBox.prototype.setCompCallBack = function (UIComponent, val) {
		//	
		//	if(eval(UIComponent).setClickHandler){
		//		eval(UIComponent).setClickHandler(val);
		//		
		//	} else if (eval(UIComponent).setChangeHandler){
		//		eval(UIComponent).setChangeHandler(val);
		//	}
		//}
		//
		//
		//// 2-3: Locate a named component and set its enabled state
		//
		//LToolBox.prototype.setCompState = function (UIComponent, val) {
		//	
		//	eval(UIComponent).setEnabled(val);
		//}
		//
		//
		//// 2-4: Locate a named component and return its label
		//
		//LToolBox.prototype.getCompLabel = function (UIComponent) {
		//
		//	return eval(UIComponent).getLabel();
		//}
		//
		//
		//// 2-5: Locate a named control button component and set its initial state
		//
		//LToolBox.prototype.initControlButton = function (callBack) {
		//
		//	var initial_state;
		//	
		//	if (this.feedback == true){
		//		initial_state = "Check Answer";
		//		if (this.navigation == "Auto GoTo Next Frame"){
		//			trace("WARNING: Feedback must be false and Tracking turned true \rto use Auto GoTo Next Frame. Navigation reset to Next Button.");
		//			this.navigation = "Next Button";
		//		}
		//	} else if (this.tracking == true){
		//		initial_state = "Submit";
		//	} else if (this.navigation != "Off"){
		//		initial_state = "Next Question";
		//		if (this.navigation == "Auto GoTo Next Frame"){
		//			trace("WARNING: Feedback must be false and Tracking turned true \rto use Auto GoTo Next Frame. Navigation reset to Next Button.");
		//			this.navigation = "Next Button";
		//		}
		//	} else {
		//		initial_state = "";
		//	}
		//	
		//	this.label_state = initial_state;
		//	this.setCompLabel(this.Assets.ControlButton, initial_state);
		//	this.setCompState(this.Assets.ControlButton, false);
		//	this.setCompCallBack(this.Assets.ControlButton, callBack);
		//}
		//
		//
		//// SECTION 3: FEEDBACK EVENT HANDLING
		//
		//// 3-1: Set event handler to populate the feedback field
		//
		//LToolBox.prototype.setFeedback = function (val)
		//{ 
		//	if (this.feedback == true){
		//		
		//		if (val.toLowerCase() == "init"){ // Use "init" for initial feedback.
		//			this.setTextField(this.Assets.FeedbackField, this.feedback_list[0]);
		//			
		//		} else if (val.toLowerCase() == "button"){ // Use "button" for transition feedback
		//			var buttonState = this.getCompLabel(this.Assets.ControlButton);
		//			this.setTextField(this.Assets.FeedbackField, "Click the "+buttonState+" button.");
		//			
		//		} else if (val.toLowerCase() == "c"){ // "c" for correct evaluation result
		//			this.setTextField(this.Assets.FeedbackField, this.feedback_list[1]);
		//			
		//		} else if (val.toLowerCase() == "w"){ // "w" for incorrect evaluation result
		//			if(this.numOfTries > 1){
		//				this.setTextField(this.Assets.FeedbackField, this.feedback_list[3]);
		//			} else {
		//				this.setTextField(this.Assets.FeedbackField, this.feedback_list[2]);
		//			}
		//		}
		//	} else {
		//		this.setTextField(this.Assets.FeedbackField, "");
		//	}
		//}
		//
		//
		//
		//// SECTION 4: FEEDBACK EVENT HANDLING
		//
		//
		//// 4-1: Build Event Handler for navigation calls
		//
		//LToolBox.prototype.setNavigation = function ()
		//{ 
		//	if (this.navigation == "Off"){
		//		
		//		this.setCompState(this.Assets.ControlButton,false);
		//		
		//	} else if (this.navigation == "Next Button") {
		//		
		//		if (!this.buttonFlag || this.buttonFlag == false){
		//			this.setCompLabel(this.Assets.ControlButton,"Next Question");
		//			this.buttonFlag = true;
		//			
		//		} else {  
		//			
		//			if(this.navAction == "Stop"){
		//				if(this.navLabel == ""){
		//					eval(this.assets_path.nextFrame());
		//				} else {
		//					eval(this.assets_path.gotoAndStop(this.navLabel));
		//				}
		//				
		//			} else if(this.navAction == "Play"){
		//				if(this.navLabel == ""){
		//					eval(this.assets_path.gotoAndPlay(this._currentframe+1));
		//				} else {
		//					eval(this.assets_path.gotoAndPlay(this.navLabel));
		//				}
		//			}
		//		}
		//		
		//	} else if (this.navigation == "Auto GoTo Next Frame") {
		//		eval(this.assets_path.nextFrame());
		//	}
		//}
		//
		//
		//
		//// SECTION 5: TRACKING TOOLBOX
		//
		//
		//// 5-1: Get date and time stamp and start session timer
		//
		//LToolBox.prototype.sessionStart = function () {
		//	
		//	this.dateStamp = this.getDateStamp();
		//	this.timeStamp = this.getTimeStamp();
		//	this.sessionTimer("start");
		//}
		//
		//
		//// 5-2: Stop session timer and return latency
		//
		//LToolBox.prototype.sessionStop = function () {
		//	
		//	this.latency = this.getLatency(this.sessionTimer("stop"));
		//}
		//
		//
		//// 5-3: Format data and submit tracking
		//
		//LToolBox.prototype.submitScore = function () {
		//	
		//	if (this.weighting <= 0 || this.weighting == undefined) {
		//		this.weighting = 1;
		//	}
		//	
		//	var weight;
		//	
		//	if (this.result == "C") {
		//		weight = this.weighting;
		//	} else if (this.result == "W") {
		//		weight = -1 * this.weighting;
		//	}
		//	
		//	if (this.tracking == true){
		//	
		//		var intData = this.dateStamp+";"+this.timeStamp+";"+this.interaction_ID+";"+
		//		this.objective_ID+";"+this.interaction_type+";"+this.correct_response+";"+
		//		this.student_response+";"+this.result+";"+this.weighting+";"+this.latency;
		//		
		//		//trace("intData: "+intData);
		//		
		//		fscommand ("MM_cmiSendInteractionInfo", intData);
		//	}
		//	_root.QuizTrack.countScore (weight);
		//}
		//
		//
		//// SECTION 6: COMMON TOOLBOX
		//
		//
		//// 6-1: Return formatted date properties
		//
		//LToolBox.prototype.getDateStamp = function () 
		//{
		//	var dateObj = new Date();
		//
		//	var year = dateObj.getFullYear();
		//	var month = this.formatNum(dateObj.getMonth()+1);
		//	var day = this.formatNum(dateObj.getDate());
		//	
		//	var dateString = year+"/"+month+"/"+day;
		//	return dateString;
		//}
		//
		//
		//// 6-2: Return formatted time properties
		//
		//LToolBox.prototype.getTimeStamp = function () 
		//{
		//	var timeObj = new Date();
		//
		//	var hours = this.formatNum(timeObj.getHours());
		//	var minutes = this.formatNum(timeObj.getMinutes());
		//	var seconds = this.formatNum(timeObj.getSeconds());
		//
		//	var timeString = hours+":"+minutes+":"+seconds;
		//	return timeString;
		//}
		//
		//// 6-3: Start or stop the session timer to calculate latency
		//
		//LToolBox.prototype.sessionTimer = function (action) 
		//{
		//	if (action.toLowerCase() == "start"){
		//		this.startTime = int(getTimer()/1000);
		//		
		//	} else if (action.toLowerCase() == "stop"){
		//		this.stopTime = int(getTimer()/1000);
		//		var elapsedSec = this.stopTime - this.startTime;
		//		return elapsedSec; 
		//	}
		//}
		//
		//
		//// 6-4: Return formatted date properties
		//
		//LToolBox.prototype.getLatency = function (timeInSec) 
		//{
		//	var l_seconds, l_minutes, l_hours, timeInHours;
		//	
		//	if (timeInSec <= 9) {
		//		l_seconds = "0"+timeInSec;
		//		l_minutes = "00";
		//		l_hours = "00";
		//	} else {
		//		l_seconds = timeInSec;
		//		l_minutes = "00";
		//		l_hours = "00";
		//	}
		//	if (l_seconds > 59) {
		//		l_minutes = int(l_seconds / 60);
		//		l_minutes = this.formatNum(l_minutes);
		//		l_seconds = l_seconds - (l_minutes * 60);
		//		l_seconds = this.formatNum(l_seconds);
		//		l_hours = "00";
		//	}
		//	if (l_minutes > 59) {
		//		l_hours = int(l_minutes/ 60);
		//		l_hours = this.formatNum(l_hours);
		//		l_minutes = l_minutes - (l_hours * 60);
		//		l_minutes = this.formatNum(l_minutes);
		//	}
		//	timeInHours = l_hours+":"+l_minutes+":"+l_seconds;
		//	return timeInHours;
		//}
		//
		//
		//// 6-5: Return formatted number - convert from single digit to double digit
		//
		//LToolBox.prototype.formatNum = function (num) {
		//	
		//	if (num <= 9) {
		//		num = "0"+num;
		//	}
		//	return num;
		//}
		//
		//
		//// 6-6: Trace the properties of an object and return its values in an Array
		//
		//LToolBox.prototype.getObjProp = function (objName, Trace) {
		//	
		//	var objNameArray = new Array();
		//	var i=0;
		//	
		//	for (x in objName){
		//		objNameArray[i] = objName[x];
		//		if(arguments[1] == true){
		//			trace(x+" : "+objName[x]);
		//		}
		//		i++;
		//	}
		//	return objNameArray.reverse();
		//}
		//
		//
		//// 6-7: Trace Session Object properties to confirm tracking
		//
		//LToolBox.prototype.reportToOutput = function (defined) {
		//	
		//	var x,y;
		//	
		//	for(prop in this){
		//		
		//		x = this[prop];
		//		y = typeof(this[prop]);
		//		
		//		if(defined == true){
		//			if(x != undefined && y != "function" && y != "object" ){
		//				trace("this."+prop+" : "+this[prop]);
		//			}
		//			
		//		} else if (defined == false || eval(defined) == undefined){
		//			trace("this."+prop+" : "+this[prop]);
		//			
		//		} else if (defined.toLowerCase() == "object") {
		//			if(y == "object" ){
		//				trace("this."+prop);
		//			}
		//			
		//		} else if (defined.toLowerCase() == "function") {
		//			if(y == "function" ){
		//				trace("this."+prop);
		//			}
		//		}
		//	}
		//	trace("-------------------");
		//	trace("");
		//}
		//
		//#endinitclip
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// Layer 1
	this.instance = new lib.Eye();
	this.instance.setTransform(91.1,-24.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3.5,1,1).p("EAhDgXyIAAg7IAAghMhB5AAAIgDAAQABAngBAnIgBFpIgBCPIgBG4MgAGAiWIAAAJEAhDARkIAADRIAAAyIAADAIAAAo");
	this.shape.setTransform(-3.9,-0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3.5,1,1).p("EAhDgYgIAAEEIAAAIIAAC+IAAAcIAAChIAAAFIAADTIAAAUIAAGJIAAAZIAABjIAAAbIAAAQIAAB9IAADTIAADPIAAAjIAAFYIAAA4IAABhIAAAHIAAB4EAhDAYhIoJAAIuXAAIk4AAIkdgBIn4ABIiAAAInLAAIgKAAIhQAAIrJgBIkqAB");
	this.shape_1.setTransform(-3.9,3.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000FF").s().p("AA/EqQAqg1A+ASIAHAIIAABiIgNANgAisgtIgVh5IAfg8QBbgbBXAbICeiWIAADTIAAjTIABgFIATAAIgUDYIkaCRIgJAFIgZANgACul4g");
	this.shape_2.setTransform(190.1,-50.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AgDhdIABAAIAHAIIgICzg");
	this.shape_3.setTransform(208.1,-116.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E1E1E1").s().p("ABRAiIAJAAIAAAJgAhZgqIAFADIgDAEQgCgCAAgFg");
	this.shape_4.setTransform(199.5,-129.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E0E0E0").s().p("AgBgFIADAAQgCAFAAAGIgBgLg");
	this.shape_5.setTransform(136,-134.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#494949").s().p("AEXA7IADgDIgDADgAkBAUIACABIgDACIABgDgAkVgEIACgEIADABIgDAEIgGAMIAEgNgAEDg5IAAgBQAAAAAAAAQAAAAABAAQAAAAAAAAQAAABAAAAg");
	this.shape_6.setTransform(166.1,-131.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#303030").s().p("AAAAAIABAAIgBAAg");
	this.shape_7.setTransform(156.4,-104.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhaA+IgYgTIAMgwIAWACIAZAyIgGALIgGAGgABBADQgLgGgQAAQATgfgcgJQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIAOgUIAqATIAgA9IgnAFQAAgLgLgIgAAUgKQABAFAGADIAJAAIgPAVg");
	this.shape_8.setTransform(159,-125.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF6600").s().p("ACHEgIgCgFIgCgGIgGgHIAVjVQA2AugJBSIgCAhIgGAxIgaArQgTgCgDgUgADyEkIgdghIAFgeIAogDIAGgeIANAAIgDg6IAJgTIAGAdIAHAKIAAAOIAgAyQgFAsgrAVIgOAIgAlGCGICMi/IAUAAIAHATIBMhwIAJgBIAIgOIAJAEQARAHACASIAHBCIgEACQhkAagxB6QgmBFgGBGQgdgxAWg0IAIgHIgDg0Ig6DTgAjAAMIASgMIAFgPgAisEAIgJgGIgKADIgfgYQAUhUA5hDIAagEIAegbIgHgnIAPgbIAXgCQgGASgBARIABAJQgCB3g7BpQgDAFgFAEgABfD0IgBgCQgHh8A0g+IgLA5IgPCGgAhMC/IABgEQAZgpAEg/IABgDIAGgJIgChAIAGgIIAHgnIACAKIANAFIANAUIABA5QgIAEgBAJQgIBDAOA7IACABIAIhVIAKABIAKhIQBDAKgGBYQgCAigUAYIgOgHIAAgWIgJAAIhdBLgAgpCgIABACIABgIIgCAGgAmqDqIgGAAIAMhKQgEg3AwgcIAHgDIgIgrQBVgtAwhYQiHBVg0CSIgagNQAGgrAUgnQASgiAggSIATgiQg8AYgUA6IgjATIgVgyICShxIAEgNQASg0AvgiIAAgEIAEABIAmAPQgBAGgGADQhSAsgdBaQBHhwB+g0IgngPIAbgoIAIAOIBFgWIhKBnQgRABgQAJQgWAMgFAYIgEAVQAFgIAHgHQA2g7BKgkQg9BkhbBFQgTAOgRAPIA2gQIg2BBIgyBmIgBAAQgQAAgMALQgLAKAAAPIgDAWIgBAEQgMAjgMAOIgZgBgAEqBIIgZgFIhLhWQA7AJAkAtQA0BGgSBYgADQBsIgBgiIhbhlIgUgEIALAlIgLAEIgOgJIAGgRIgxhdIAMAMQgkgrgMg4QAAgMADgLQAAAAAAgBQABAAAAAAQAAAAABAAQABAAAAAAQA+BRApBnQBxAHAQBsQACAOgCAQgAHRBkIhFh/IAjBeIgZgfIgIg4IiXjBQAigWAcAWIAIAZIACAKQAlAoA2ATIABACQAMAUALgLQAFAJAEAKIgMAPIBECugAFiBKIgQgqQAIAIAMAAQAEgEgCgFIgBgEQAIAKAIADIgCAogAF5A/IAIgUIAAAKIAAARgAEcgnIgvgLIACgJQglhghOhEIgXADIhDgGIA6gWIBsA1QBGBgA3BrIADAIIgPADgAA7ASIgIgFIgGgHIgHgJQgRgGgBgQQgDgogTghQgFgIAGgFQABgHgHgMQgaghAKgjIACgDIgMgQIAQgBIAUBkIAWAdQATAYgFAhQAMAGAHAJQAFAGAEAGQAHAJAAAKQgEADgDABIgEABIgEgBgAEHiNQghhVhYgZQAfAHAaARQAhAVAYAjIANAVQA8AvAoBTIAIAUQhRg4ghhVgACjiLIAAgKIA2BUgAA8iuIA3gXIAKAoIgPgUIAKAmIASAEQA6ARgPAwQhbgPgehZgAhDkNIAAAJIgYAdQAbhNgDAngAC6j1IgGgDQgRgIgNgMIingYIAKgLQCMgaBeBVIAAABIgFAAQgSAAgSgCg");
	this.shape_9.setTransform(-75,79.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("Ag7BbIjKgJIA8hFIBnhMQAjgTAogFQD3gZAmDKIglABg");
	this.shape_10.setTransform(9.9,151.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFF99").s().p("ADmHHQgygmgPg9IgFgKIAGhmQARlMhtk6IgFgDIgJgFQhFgdhCAHQhNAIhHA6IgWgNQA1gzA+gVQBeggBuAlIAJABIA4A8IBNINIgNl6IAWAoIgFgxIAaBoIgOgHQgfE1AtE0IgQgMgABWCnQgHBRgZBOIgDABQgGgGgEgHQhOiEAjimQACgygFguQgCgwgKguQgGghgNgfQAdAjAUAnQAmBAASBGIADhrQA2D7AZECgACGCUQAMkQhzj4QiEhAhsBmIgIABIgKgHIANgVQBPhBBjABQAdAAAdAFIAFAHQCnD5g7E4gAA2jGQhUhEhugtIgPgLIA3gCIAJgIQAoAGAjAQQhOgqhhALQAlgbAsgGQCigPAHDFIgFgGg");
	this.shape_11.setTransform(120.1,-7.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFCC99").s().p("Ax7QHIiVhkIgKgIIhShSQg6AxhMABQgogBghgCIiKBKIgFgHQAugPAlgcQAmgdAagmIg4AKIBUgnIjvA8IDyheQgkgJgmACQhKADhEAdQBSgmBZgPQCXgYCUAsIAKADICIBAIA0B+QhQjlAHjyIBBgKIArgzIATAcIBbgwIAmBFIAZAMIAJAOIAJAEQAGARAOAKQAXASAZgKIAegyIAYAgIAtADIBCg8IABgCIAHAMIATgFIABgmIAGgJIAAgPIAMgIIAdgwIAbAJIAvBIIAUgSIAYABICfC7IANABQATAMAQAPQAZAXARAfIACAFQAOAcAGAfQAGAjgNAbIgxAFIhvilIhPhhIC/EqIgDAPIhmBOIhOBIIhjAEIgTgNIgpANQgegZAJgqIAIgmQgIgFgJACQgSAGgIASIgFALIgFAOIgggpIgcA6QghgVANg3QAFgSAHgSIhFBFIgHg1IgJgDIgFAAIgGACQgNADAGAQIgSAFQg9gvgIhXQCtjPELg7IgSgfIAJAVQkHAjjCC0Ig8iJICKGeIAAAigANBNWQgSgqgugJIgOgBQgXAjgmgGQgUgEgNgQIghAmIg1gvIgFAiQhpAWg2heQAJg0AWgsQgVAZgTAbIgTgJQAAhZA/g6QDLi6DeikIAEAGIgahaIgYhaIgCAAIgOgtQALg8glgyIgGgHIgVhDIg1i3QAshAB5AIIAAgEIAIAAQAhAUgNg+IgDgKQhZhJh0gNIgCAAIBOheIhRBDIhHhQIgIgJIhAhKQAUAFAPgOQBShIANhvIAIgwIAggeIAXANIgfAmIAagMIAKAHIAaARIAkgGIAQALQBzBeAUCKQAHAugFAzQhRD7DTCYIARACQBVAQgBBYIgJAGQhUAthVgKIgOAFIhaicQArBeAoBcQA5CFAMCTIADAgQg6AthBAkIiOBOQhMAphGAsQBdgkBggxQB5hCCHggICtB4IAQB0Qi+B3jcArIHxgcIBBhfIAEgRQArgkAyAaIAMAHQArCTCHBCIACASIgWAlIgNgYIhBAKIAFgjIggAZIgRgLQgvAGgqg3QgCAbABAUIgfABIgLgNQhTAdhdgCIgJAAQhLgZhJAPQgvAMguANQgqglgzAcIgQAJIgGgGIgOgMIg4AfgAbCMZQiLhSgaiiIBChFQBRAVgRBbIArBVQA1AaAJA3IADAQIgKAqgARsKmIgXgFQCHgrCVASQhPAqhYAAQguAAgwgMgAQyEiQgDiggwiUICOgrIB8DEQBAAPALA3IgOAKQhqBNiEAAIgmgCg");
	this.shape_12.setTransform(24.4,57.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFF00").s().p("AhZBTQC6AeCDhpQAZgSAXgZIBRAxIAvAvIAFAHIARCQQhZCOiyAFQAEjhj8gzgABZjSQgWgggUgjIAigaIALAeQA2CGB0BOIgIAXQhdhHhIhlgAmlj5IgCgCIgChNIAhgeIAoAVIAHAHQAkAygLA8IgMAQIgGAAQgxAAgigtgAiIklIANgFIB4AVIh4Aag");
	this.shape_13.setTransform(137.5,79);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CC9900").s().p("AqZGUIgOg7QgGgiAAgjQCUgVCRARIABgCQiOgoiYAfIAcjBIAficQCSAWCQgXIgLDhIhogLIhSgLIgngGQgygLggAbIEyAVIgOEHIgdACQg8AIg8AAQhOAAhMgOgAm4E6QAAAEAFADIA7ATIATgaIgjgnIgggBQgXAPAHAZgAqBARIAAADIEAgBQg7gMhEAAQg9AAhEAKgAvoGHIgCiVICEAAIAAgCQgBAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAQgygPgzADIgdAEIgCjeIClgFIgMCGIAAgBIgJgEQhBgLhCAJIgBACICMAMIgPCgIgCAVIgBAXIgEAqgAmsEwIAKgNIATABIANAWgAGrBUQgxgFgsgYIgdjxQArAAArgFQAzgBAugRQAIgDAOAEIAQADQAqALAmgRIAKAEIAIAEIAIABQAKACAIgIQAJghAtAWIABgBQAUAKgCgSIhIgKIgigPIgSAcIhrgDIgOAGQhSAZhYgEIgDABIABhDIGFguQjBAGjEAeIAAhBQExgXE1gCIABgBQjTgSjcAYQhdALhcgCIADhAIKhAAIANBdIj8AHQB3APCGgMIAOEQIjDAOQAAARAXgEQBXgLBVgHIgCA+IjMAiIAAh4IADgCQACgBAAgEIAEAAIgEgDIAAgBIgBAAIgHgEIABgCQiOhGimA1IgEABIAAAFIAMA/QhXgLhUAQIgDADICxACIAdBcQghAHghAAQgUAAgUgDgAGCiNIhHALQgBAdA0gMQCvgrC0AKQCVAHCEgVQiKgHiJgCIgeAAQieAAiZAcgALeA3IAAgnIANAAIAAAngAJmA1IgEgUIAVgIIACAegAKRAWQAPACAPAAQgLAQgRAJIgCgbgAEAluIAAgaQAZAXACAgIAQEdQACAlgBAjgAvuhfICxAGIgJBXQhIgGhIAIQgMgDgLADgAIygTIADAAIAEATgAKIgXQAbgCAYgFIADAXgALRgjIAegLIgOAlgAIzg8IgCADIgQgEIgPgMQCOgSBVAjIiyADQgEgOgMAHgAoGhjIhrgEIAThrIDBAHIAwAKIAiAIIgFBWIhCAGIgOABQgyAAg0gHgAvuhpIgChyIDCgHIgEASIgKBpgAJpjkIAGgHIAMAOg");
	this.shape_14.setTransform(-80.8,-69.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C6FFFF").s().p("AVqH9QgjgugygfIgagRQhygchaAsQgrAUgmAmIrtjlQASjWg1jOIkaAAIAAhoIAJgHIAaitQA5AaAxApQAdAaAXAbIgOijIELBaQgPg5gngrQgZgbgggPQBzADBoAwIgnh4IGIgKIAeABINVgDIGDADIAKAAIAAFIIgJAAIgBgJIAAkEIAAg7IAAA7IAAEEIgdgsIgYABIgKhfIixhFIgLgSIg6ASIgGguIhHAZIhrgEIg2AxIgTgGQheAkgfBfIgCAEIgEAQQgJA4gEA5QgBAcAEAdIBHC5IBKB/QAWgFAIAYIANArIgXhnIAVgfIAFBBIAfASIgNhSIAzAeIgeg7QAjgXAnARIAMAjIgvgeQAACLgbCEQgLAlgHAnQgIAhgLAhImjl7IghAJIgUAGQh4Afh4AeQgHACAKAIIAAABQBxBSB1hbIhNB5QBRgQBPg1IFAGFIgKgIIgLgBQgwAAgJAuIgBAAQgShJgog1gAVolqQAAgHADgHIgEAAIABAOgAd6JXIgTgdIhxgKIAahqIAJgFICTCSIgyAfgEgg+gCYIAEgVIgBm/IA6gOIECAXQhVgFgoA6QBHgeA0AWIAOAEIAvA7QjRASgZCyQAFgCACgDQBEhaBnAmQiZBLALCgQAug9BKgbQgWAlgUAnQgiBEAaAwIARADQBfhlCfg5IAEgBIgRBSIAsgSQAMAOgGAUQgHAWgJATQgLAagGAZQgtAfg8AAQg6AGg8gKIAAFqIgJAAIkaBegAx8BPIgwgKIi8goIBRktQClBkAxCwIACgDQAcglgMguIANgJIAAiKIgrg8IEJAvICDAnIgFgRQgLgegPgaQglg/g/glIizgzICzgqIBYgGIhYhCIh2gdIB2gvIACAAIBiAAICpAAIh4BmIAKADQBHATA4gqIAJgEICBgWQhKBHghBgQgNAngIAoIAcgTIAIgGIDDiCIgNC9IB1igIgaEhQjcg2hPBZIAGAAIAAAaIAAB2IgNAAQgzg2hKgRIgRgEIidAxQiIA3iPAXQgIACgJAAIgQgCg");
	this.shape_15.setTransform(-2.6,-97.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#009900").s().p("AfrPhIgbAAIgtAgQg8glg/AhQgDABgEgCIgohQQCahhCEiWIAGgBQAJA9AHA+IAADQIgvANgEAgtAMvQALBmAGBqIgRAAgAXKO1IAQgKIghg7IAAoWIgahoIgDgMIAAAAIAygGQAjAWAagbIAEgFQA6BABYADIA/hgIBlAHIAMAPIAAAvIBoggIA5BEQklDtisFHIAAAgIAEBbIg8ACIgRAigAG8LsIgiALQjFgxjYA5IgEAAIgIgKQgVABgVgBQgbgBgBgbIgCgiQgCgcgFgdIgFgZIgFgdQgCgSADgRQgWh9APitQBhAdA7hPIACgBIAfAOIAwg5ICKgsQAQALADAWQADAUgKARIAwBNQAohLBPAdIAMAIIBUhSQAbAYAkgMQAcgJAMgdIBNAQIAogZIApAWIBWAZIALAFIABgCIACgCIAKALIAHADIg0CpIhaAkIAHAQQAaA1A5ANIAIAIIAnBfIAjANIABAAQB5AjBABcIgOAKQhrgShABQIgBACQggAHgggJQgjgLgigPIgbAQIgdgiIixgIIhbA8gA3IHbIAIgNQBlAgBpgTQAZgEAQgQQBChDBLgSIAPgGQBHgbBFAjIBTgJIBmArIAdhFIAIgCIA1AXIATg3QArAOArgQQAegKAVgXIAsANIAIANQBJAJAvg2IANgPIAwHmIiaAeQgPgCgOAIIixgWIgCAAIk/AiQgKAAgJgEQh3guhzANIgOgGQAAAEgCADIgBABQgmAGgkAMIgMAGIgXALIiNAJgEggvAL3IgPj6QCvgfCVhZIBkAxIgGDsIAFBVIgKADQh6goiHAMQgIARgWAGQgdAIgeAAQgaAAgagGgA9MmvQAPhrAyhgQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBgBAAQhRAJgwBEQAeiiCQgsQhIgzhXAmQgWALgTASIgDAAQBGiHChgKIADgDIgohVIgOACIg8gPIBHgLIAGgKQD6gSD5ABQCmAVC/gIIhdAzICeAwIA1AdIg1AGIjSAvIDSBRQBDApAbBHQADAGgBAHIhggbIksg7IA8BbIASCFIgOAJIgDAAQgBAGAAAHQhfiFiEhWIhbCjIgniBIiRCDIALhHQirAahpCSgAmLvQQhQgLhLAqIgIAEIhmAJIAhgnIBNgxIO7gCIAnBeIjtgyIB8CHIkWhCQA6A4gVBQIihhmIg9BmIgriSIhzCdIAHiDQh6AihrByIgJAGQAUiGBqhng");
	this.shape_16.setTransform(-1.7,-56.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00CC33").s().p("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");
	this.shape_17.setTransform(-1.2,86.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFCC33").s().p("Ap0SPIgbgiIhfgjIgFgcQBCAWBBgXIAFgUIiLgHIgGgqIARAFQAoAOASgbIhLgRIgHhCIBugMIhvgQIABguQCQAYgBhYIgdAaIh+AJIACg/QBXAoBCgxIiegNIgGhLQBQAwBMgZIAAgfIgSACQg9AdhOg2IgBgZQBrAgAghKIiMAYIAIg4QAWAKAXAAQA2ABAXgwIgWgIQguAohBgTIgBhPQBdAtA2hFIgOgFIgSAGQg4AQg7gOIAAguQBPAEA8gpQgvgVgpAmIgzgGIAHiCQBPAbA4glQg1gOhVgCIAFgbQByAOAKhaQgxA8hOgGIA3hmIBBgUIAJgYIgMgRIgQASIhAAPIgghBIAEgqQAzAaAxgdIANgKIgLgUIhOAOIgXgEIACgVIAIgiQAjAiA0gYQAEgDAEgEIhVgQIgDg4QA+A0BIgvIgLgPIhzgGIAFg/QBVAkA8gyIiAgGIgMgQIAGg5QBaAfA7g8IgUgKQg7AfhCgQIAajEQBPAsBCgtQhAgQhNgOIAKgRIAAgdQBIAZBIgcIiQgeIApgxICEADIgBgDQgFgCgFgEIABgBQg1gKhLgXQAYhJBCgrIAsByIAWAAQgpDkgXDnIgcDCQgJACAHAKIACACQAAAjAGAiIgEBRIgFCZIgBAaQgHEGAHEJIBFI2gAsXEZIBtAAIAAgdIhtAAgArSovQBEAxBCgwQAAAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAgBQgwAAgwgPQgLgEgIAAQgUAAAAAXgAL5JzIgIgBIhTgKIAKgeQA8ATAdgnIhWAFIAFgjIBCgoIhBAPIgsghIgEgUIBZgGIhbgEIgLhYIBIAAIAAgTIhLAAIgRh8QAtAhA6gZQATgIABgTQgqAUgxgGQgQgBgQACIgEg4QAsAcAygUIABgCIhfgGIgCgpQAeANAdgKIACgBIg+gTIAAgYQBEAfAzgqIgBgCQgagCgdAFQgfAGgggFIgBg3QAvAvApgnIAAgCIggAGIg3gSIACgvQAqAsBMgcIh2gRIACglIAbAWIgPgmIBVgFIhegXIgHiEQAtAjAqgaIhVgWIAahaQgKAnAQAiIACADIArgCIAYAdIAXgJQAXHHAtG4gAKGGWQgHADAAADQAAAEAHADQAIACAKAAQALAAAHgCQAHgDAAgEQAAgDgHgDQgHgDgLAAQgKAAgIADgALXEVIhsgBQA2AvA2gugAKqipQAAAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAIhQgUQAVAnA4gSgAKRunIBjAVIhHgcIgghFIAoAJQAXAaAhAFIAIAAIAGAAIAFgDIAEgTIgfAKIgpgeIgEgiIAKgFQATAcAmgCIARgGIgPCAIhwAFgAKsxAIgNgOIAZh8IAoCbIA/h9IgSCZQg4gBgpgsg");
	this.shape_18.setTransform(-89.4,-22.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CC9966").s().p("AxXTdIADABIABALgAeERdIASgsQhBi3iZh1IgWgSIg7hAQhDhbgJh7IAAggQBZiHBlh8QBeh0BthhICDBfIAAB+IAAh+IAKAKIgKB0IgHA9QiUCUi0BvIAnBdIAhAXIAEALQA6ALAkAuQASAWAYARIB7E3IAABhQgrgJgSgRQgCgCgFAAQgyAngYAAQgZAAAAgngAsYOdIAIgNIAAAHQAAAMgDAAQgCAAgDgGgAn5K/IAAgBIABABIgBAAgEgg/gEvIBxghQAEgBABgCQADgDAAgEICjhFIAJAAIAAEUICKAIQABAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQAFAUABAVIABASQAFApgYAbIgfgYIgEAAQgEABgDACIgJAEQgUALgTgMQgLgHgDgLIgBgBIgkgEIgYACQghADgbAUIgLAsIgXgsQgBAAAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAQgDALgCAKQgBADgCACQgZAggqAAIhNgJIAAArgEAgrABEgA3JAoIAFiZIC/AQIABgIICKAAIArpSIDKg8IhZBKICQgrIATgFQAdA3BfhPIAMgIIAMgFIAKABQAKAFAEAVQggBgA9hCIAJgLIBUAHIAZDPIAzA5ICtAMIAADsIgQAEIgaAKQgfANgNAeIAAAEIh0gVIhLAxIgRAGIgxgRIgcAsIg2ALIgIABIiDAbIhSAIQifhniVCYQgpArg/AEIgTAAQg9AAg7gUgAdLk5QgagXgPggIEJh5IAAGJQhrhsh1htgEAgrgHpIABgBQApDAgqDKgAYYjTQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIgZgKIlemNIiOBJIBNhzQhaAohggPQgbgDgagGIAAgBQAYAAAYgFQBigUBbguIAUgGQBLA1A9BBQCTCdCyB5QACgvAIgtQAHgmALgmQAlh+BShsIgTglIBJAVQgDglAPghQAWgyAognIAkAzIAcgRQAxA+BphMIAEgEQAWApgGA5IAABDIgTAAIgBAAIAAihIAAChIiUB4Ighg0IgDAsIgEACIgLAFQhGAmgxg2QhzBpBTB/IACABIAeArQgMBuhJBSIgNAPQg6gjg5glgAhniuIAAi5IAPgBQBQgCAPhPIADgRQBKAGBHgVQAwgOAcgkIKgCxIADABIA/AWIgoAuIgNAlIgHgEIgKgKIgCABIAAACIgLgFQiEhniaBQIgDABQhWgNgrBIIgBACIgZgCIhsAcQg1glgDhKIgBgBQiVAdiABKIgzAjgAhwnCIAAgCIAcgCIgBAXIgJADQgQgFgCgRgAY5srIhAhCIAEgjQAMgLAwgKQgSgSgcAQIg5gbIBKhAIgfhTIgmgFQgxA2AkBEIAegUIABgSIAYABIgbAgIgdARIgngwQgGhMAzg6IAIgJIA/gtIgGASIB2g6IA4AmQgLAIgMAAIg0gNIgcApIBPgVQASACASAGIABABIgfAgIBTACQgZBAA6ATIABAAIAAgCIAnCKQguCZh4AAQgvAAg6gXgAYGt2IAXAOIAbAfQBBAtBBgpQAlhTgxhIQhCBhhmAJgAZRwjIAnAMIAagXIAmgFIAEABQgBhchZAAQgmAxAVA6gAYMwVQABAFgCADQgCADgCAAg");
	this.shape_19.setTransform(-1.6,-15.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#414141").s().p("AgCAJIAAgTIAFAVQgDAAgCgCg");
	this.shape_20.setTransform(-152,116.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#404040").s().p("AgEADIAAgIIAIAEIAAAHIgIgDg");
	this.shape_21.setTransform(-105.8,134.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#585858").s().p("AAAACQACgMgCAOg");
	this.shape_22.setTransform(-79.1,94.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#4B4B4B").s().p("AAiBLIAAACIgBACIABgEgAgchOIAFASIgBABIgJAUg");
	this.shape_23.setTransform(-44,97);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C6C6C6").s().p("AgMACIAAgDIAaADg");
	this.shape_24.setTransform(-84.9,-161);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#424242").s().p("AApAfQgEgVgKgFQAnADgNAbIAaAPIgJALQgZAbgJAAQgOAAATg5gAiBApIgTAFIAAgbQARgFAUgCQARgEAPAIIgYAjIBsgqIgKAIQg4AvghAAQgXAAgMgXgAh/gfIgVANIAAgSICbgzIARAEQBKARAzA4QiFhqiPBVg");
	this.shape_25.setTransform(-71.4,-93.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AhAAvIAAgOIBfAbQAAgIgCgFQgchFhBgpIAAgWQA/AmAjA9IAAA4IAaAAIAFAQg");
	this.shape_26.setTransform(-79.8,-126.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#4C4C4C").s().p("AgqBEIAzgFIgzgeIAAgXIBVBCIhVAGgAgqhAIAAgRIAcAAIgaARIgCAAg");
	this.shape_27.setTransform(-81.9,-152.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#535353").s().p("AgMDeIgEADIAAgcIAKi1IAAgJIAAlFIAGBCQAJB7AGB7QAICrgVCaQAGg4gUgpg");
	this.shape_28.setTransform(209.3,-127.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#1E1E1E").s().p("AhxAYQgEgNAFAIIACAFIgCAAIgBAAgAhSASIgOgaICwgDIgGAKIgeAJQgKgWgLASQgCAEABAFQgXAGgbACIgFgQQgFAAgDACQgHACgCAHQgEAIgJAAQgIAAgLgGgAh8gGQgCgFgEgFIAQAEQgCANgDAAQgCAAgDgHgAB3gUIALgDIABAAIAAABIAAADQAAAFgCABIgDABQgDgEgEgEg");
	this.shape_29.setTransform(-13.1,-74.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#848484").s().p("ACdANIAAgDIAEADgACVAFIAGAEIgLADgAiggLIAEgBIgEAGIAAgFg");
	this.shape_30.setTransform(-15.7,-77.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("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");
	this.shape_31.setTransform(-4,-0.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#4A4A4A").s().p("A2bYNIAAgSIAAgCIAKgBIAAADIgKAAIAKAAIAAASIgKAAgA2bWdIAAgPIAKAIIAAAPIgKgIgAWb0eIABgCIAAACIgBAAgATf4IIADgEIAFAFIgIgBg");
	this.shape_32.setTransform(37.3,7.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#626262").s().p("AmpgCIHQgCIGDAGItTADIAAgHg");
	this.shape_33.setTransform(126.2,-159.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#4D4D4D").s().p("AMyAHIAAgOIAeAAIAAAHIAAAIgAtPAIIAagPIBIAAIAAAPIhiAAg");
	this.shape_34.setTransform(-1.3,-159.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#B9B9B9").s().p("AjngDIHPAFInPACIAAgHg");
	this.shape_35.setTransform(106.9,-160.4);

	this.instance_1 = new lib.Wherewillweplay();
	this.instance_1.setTransform(35.2,-33.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(3.5,1,1).p("EAhDgYtIAAE/IAAAJIAAC9IAAAdIAAChIAAAFIAADTIAAAUIAAGJIAAAZIAABiIAAAbIAAAQIAAB8IAADUIAADQIAAAiIAAFYIAAA4IAABhIAAAHIAAFKIAAAyIAADAIAAAoIoJAAIuXAAIk4AAIkdAAIn4AAIiAAAInLAAIgKAAIhQAAIrJAAIkqAAIAAgJMAAGgiWIABm4IABiPIABlpQABgngBgnIADAAMBB5AAAg");
	this.shape_36.setTransform(-3.9,-0.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#00CC33").s().p("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");
	this.shape_37.setTransform(-1.2,86.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#C6FFFF").s().p("AVqH9QgjgugygfIgagRQhygchaAsQgrAUgmAmIrtjlQASjWg1jOIkaAAIAAhoIAJgHIAaitQA5AaAxApQAdAaAXAbIgOijIELBaQgPg5gngrQgZgbgggPQBzADBoAwIgnh4IGIgKIAeABINVgDIGDADIAKAAIAAFIIgJAAIgBgJIAAk/IAAE/IgdgsIgYABIgKhfIixhFIgLgSIg6ASIgGguIhHAZIhrgEIg2AxIgTgGQheAkgfBfIgCAEIgEAQQgJA4gEA5QgBAcAEAdIBHC5IBKB/QAWgFAIAYIANArIgXhnIAVgfIAFBBIAfASIgNhSIAzAeIgeg7QAjgXAnARIAMAjIgvgeQAACLgbCEQgLAlgHAnQgIAhgLAhImjl7IghAJIgUAGQh4Afh4AeQgHACAKAIIAAABQBxBSB1hbIhNB5QBRgQBPg1IFAGFIgKgIIgLgBQgwAAgJAuIgBAAQgShJgog1gAVolqQAAgHADgHIgEAAIABAOgAd6JXIgTgdIhxgKIAahqIAJgFICTCSIgyAfgEgg+gCYIAEgVIgBm/IA6gOIECAXQhVgFgoA6QBHgeA0AWIAOAEIAvA7QjRASgZCyQAFgCACgDQBEhaBnAmQiZBLALCgQAug9BKgbQgWAlgUAnQgiBEAaAwIARADQBfhlCfg5IAEgBIgRBSIAsgSQAMAOgGAUQgHAWgJATQgLAagGAZQgtAfg8AAQg6AGg8gKIAAFqIgJAAIkaBegAx8BPIgwgKIi8goIBRktQClBkAxCwIACgDQAcglgMguIANgJIAAiKIgrg8IEJAvICDAnIgFgRQgLgegPgaQglg/g/glIizgzICzgqIBYgGIhYhCIh2gdIB2gvIACAAIBiAAICpAAIh4BmIAKADQBHATA4gqIAJgEICBgWQhKBHghBgQgNAngIAoIAcgTIAIgGIDDiCIgNC9IB1igIgaEhQjcg2hPBZIAGAAIAAAaIAAB2IgNAAQgzg2hKgRIgRgEIidAxQiIA3iPAXQgIACgJAAIgQgCg");
	this.shape_38.setTransform(-2.6,-97.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("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");
	this.shape_39.setTransform(-4,-0.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#CC9966").s().p("AxXTdIADABIABALgAeERdIASgsQhBi3iZh1IgWgSIg7hAQhDhbgJh7IAAggQBZiHBlh8QBeh0BthhICDBfIAAB+IAAh+IAKAKIgKB0IgHA9QiUCUi0BvIAnBdIAhAXIAEALQA6ALAkAuQASAWAYARIB7E3IAABhQgrgJgSgRQgCgCgFAAQgyAngYAAQgZAAAAgngAsYOdIAIgNIAAAHQAAAMgDAAQgCAAgDgGgAn5K/IAAgBIABABIgBAAgEgg/gEvIBxghQAEgBABgCQADgDAAgEICjhFIAJAAIAAEUICKAIQABAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQAFAUABAVIABASQAFApgYAbIgfgYIgEAAQgEABgDACIgJAEQgUALgTgMQgLgHgDgLIgBgBIgkgEIgYACQghADgbAUIgLAsIgXgsQgBAAAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAQgDALgCAKQgBADgCACQgZAggqAAIhNgJIAAArgEAgrABEgA3JAoIAFiZIC/AQIABgIICKAAIArpSIDKg8IhZBKICQgrIATgFQAdA3BfhPIAMgIIAMgFIAKABQAKAFAEAVQggBgA9hCIAJgLIBUAHIAZDPIAzA5ICtAMIAADsIgQAEIgaAKQgfANgNAeIAAAEIh0gVIhLAxIgRAGIgxgRIgcAsIg2ALIgIABIiDAbIhSAIQifhniVCYQgpArg/AEIgTAAQg9AAg7gUgAdLk5QgagXgPggIEJh5IAAGJQhrhsh1htgEAgrgHpIABgBQApDAgqDKgAYYjTQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIgZgKIlemNIiOBJIBNhzQhaAohggPQgbgDgagGIAAgBQAYAAAYgFQBigUBbguIAUgGQBLA1A9BBQCTCdCyB5QACgvAIgtQAHgmALgmQAlh+BShsIgTglIBJAVQgDglAPghQAWgyAognIAkAzIAcgRQAxA+BphMIAAChIAAihIAEgEQAWApgGA5IAABDIgTAAIgBAAIiUB4Ighg0IgDAsIgEACIgLAFQhGAmgxg2QhzBpBTB/IACABIAeArQgMBuhJBSIgNAPQg6gjg5glgAhniuIAAi5IAPgBQBQgCAPhPIADgRQBKAGBHgVQAwgOAcgkIKgCxIADABIA/AWIgoAuIgNAlIgHgEIgKgKIgCABIAAACIgLgFQiEhniaBQIgDABQhWgNgrBIIgBACIgZgCIhsAcQg1glgDhKIgBgBQiVAdiABKIgzAjgAhwnCIAAgCIAcgCIgBAXIgJADQgQgFgCgRgAY5srIhAhCIAEgjQAMgLAwgKQgSgSgcAQIg5gbIBKhAIgfhTIgmgFQgxA2AkBEIAegUIABgSIAYABIgbAgIgdARIgngwQgGhMAzg6IAIgJIA/gtIgGASIB2g6IA4AmQgLAIgMAAIg0gNIgcApIBPgVQASACASAGIABABIgfAgIBTACQgZBAA6ATIABAAIAAgCIAnCKQguCZh4AAQgvAAg6gXgAYGt2IAXAOIAbAfQBBAtBBgpQAlhTgxhIQhCBhhmAJgAZRwjIAnAMIAagXIAmgFIAEABQgBhchZAAQgmAxAVA6gAYMwVQABAFgCADQgCADgCAAg");
	this.shape_40.setTransform(-1.6,-15.7);

	this.instance_2 = new lib.SpeechBubble();
	this.instance_2.setTransform(-12.6,-46);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(3.5,1,1).p("EAhDAODIAABhIAAAHIAAFKIAAAyIAADAIAAAoIoJAAIuXAAIk4AAIkdAAIn4AAIiAAAInLAAIgKAAIhQAAIrJAAIkqAAIAAgJMAAGgiWIABm4IABiPIABlpQABgngBgnIADAAMBB5AAAIAAAhIAAE/IAAAJIAAC9IAAAdIAAChIAAAFIAADTIAAAUIAAGJIAAAZIAABiIAAAbIAAAQIAAB8IAADUIAADQIAAAiIAAFYg");
	this.shape_41.setTransform(-3.9,-0.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFF00").s().p("AhZBTQDeAkCPiaIBRAxIAvAvIAFAHIARCQQhZCOiyAFQAEjhj8gzgAAvkVIAigaQA0CbCBBXIgIAXQh7hehUiRgAmlj5IgCgCIgChNIAhgeIAoAVIAHAHQAkAygLA8IgMAQIgGAAQgxAAgigtgAiIklIANgFIB4AVIh4Aag");
	this.shape_42.setTransform(137.5,79);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#00CC33").s().p("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");
	this.shape_43.setTransform(-1.2,86.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#535353").s().p("AgMDeIgEADIAAgcIAKi1IAAgJIAAlFQAOCcAHCcQAICrgVCaQAGg4gUgpg");
	this.shape_44.setTransform(209.3,-127.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#E1E1E1").s().p("AgDgDIAGAAIABAHg");
	this.shape_45.setTransform(208.2,-125.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFCC99").s().p("Ax7QHIiVhkIgKgIIhShSQg6AxhMABQgogBghgCIiKBKIgFgHQAugPAlgcQAmgdAagmIg4AKIBUgnIjvA8IDyheQgkgJgmACQhKADhEAdQBSgmBZgPQCXgYCUAsIAKADICIBAIA0B+QhQjlAHjyIBBgKIArgzIATAcIBbgwIAmBFIAZAMIAJAOIAJAEQAGARAOAKQAXASAZgKIAegyIAYAgIAtADIBCg8IABgCIAHAMIATgFIABgmIAGgJIAAgPIAMgIIAdgwIAbAJIAvBIIAUgSIAYABICfC7IANABQATAMAQAPQAZAXARAfIACAFQAOAcAGAfQAGAjgNAbIgxAFIhvilIhPhhIC/EqIgDAPIhmBOIhOBIIhjAEIgTgNIgpANQgegZAJgqIAIgmQgIgFgJACQgSAGgIASIgFALIgFAOIgggpIgcA6QghgVANg3QAFgSAHgSIhFBFIgHg1IgJgDIgFAAIgGACQgNADAGAQIgSAFQg9gvgIhXQCtjPELg7IgSgfIAJAVQkHAjjCC0Ig8iJICKGeIAAAigANBNWQgSgqgugJIgOgBQgXAjgmgGQgUgEgNgQIghAmIg1gvIgFAiQhpAWg2heQAJg0AWgsQgVAZgTAbIgTgJQAAhZA/g6QDLi6DeikIAEAGIgahaIgYhaIgCAAIgOgtQALg8glgyIgGgHIgVhDIg1i3QAshAB5AIIAAgEIAIAAQAhAUgNg+IgDgKQhZhJh0gNIgCAAIBOheIhRBDIhHhQIgIgJIhAhKQAUAFAPgOQBShIANhvIAIgwIAggeIAXANIgfAmIAagMIAKAHIAaARIAkgGIAQALQBzBeAUCKQAHAugFAzQhRD7DTCYIARACQBVAQgBBYIgJAGQhUAthVgKIgOAFIhaicQArBeAoBcQA5CFAMCTIADAgQg6AthBAkIiOBOQhMAphGAsQBdgkBggxQB5hCCHggICtB4IAQB0Qi+B3jcArIHxgcIBBhfIAEgRQArgkAyAaIAMAHQArCTCHBCIACASIgWAlIgNgYIhBAKIAFgjIggAZIgRgLQgvAGgqg3QgCAbABAUIgfABIgLgNQhTAdhdgCIgJAAQhLgZhJAPQgvAMguANQgqglgzAcIgQAJIgGgGIgOgMIg4AfgAbCMZQiLhSgaiiIBChFQBRAVgRBbIArBVQA1AaAJA3IADAQIgKAqgARsKmIgXgFQCHgrCVASQhPAqhYAAQguAAgwgMgAQyEiQgDiggwiUICOgrIB8DEQBAAPALA3QhwBXiMAAIgmgCg");
	this.shape_46.setTransform(24.4,57.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFF99").s().p("ADmHHQgygmgPg9IgFgKIAGhmQARlMhtk6IgOgIQiYhAiDBsIgWgNQCIiAC3A9IAJABIA4A8IBNINIgNl6IAWAoIgFgxIAaBoIgOgHQgfE1AtE0IgQgMgABWCnQgHBRgZBOIgDABQgGgGgEgHQhOiEAjimQACgygFguQgCgwgKguQgGghgNgfQAdAjAUAnQAmBAASBGIADhrQA2D7AZECgACGCUQAMkQhzj4QiEhAhsBmIgIABIgKgHIANgVQBnhUCFAZQCtD8g8E8gAA2jGQhUhEhugtIgPgLIA3gCIAJgIQAoAGAjAQQhOgqhhALQAlgbAsgGQCigPAHDFIgFgGg");
	this.shape_47.setTransform(120.1,-7.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#009900").s().p("AfrPhIgbAAIgtAgQg8glg/AhQgDABgEgCIgohQQCahhCEiWIAGgBQAJA9AHA+IAADQIgvANgEAgtAMvQALBmAGBqIgRAAgAXKO1IAQgKIghg7IAAoWIgahoIgDgMIAAAAIAygGQAmAYAbgiQA6BABYADIA/hgIBlAHIAMAPIAAAvIBoggIA5BEQklDtisFHIAAAgIAEBbIg8ACIgRAigAG8LsIgiALQjFgxjYA5IgEAAIgIgKQgVABgVgBQgbgBgBgbIgCgiQgCgcgFgdIgFgZIgFgdQgCgSADgRQgWh9APitQBhAdA7hPIACgBIAfAOIAwg5ICKgsQAQALADAWQADAUgKARIAwBNQAohLBPAdIAMAIIBUhSQAbAYAkgMQAcgJAMgdIBNAQIAogZIApAWIBWAZIALAFIABgCIACgCIAKALIAHADIg0CpIhaAkIAHAQQAaA1A5ANIAIAIIAnBfIAjANIABAAQB5AjBABcIgOAKQhrgShABQIgBACQggAHgggJQgjgLgigPIgbAQIgdgiIixgIIhbA8gA3IHbIAIgNQBlAgBpgTQAZgEAQgQQBChDBLgSIAPgGQBHgbBFAjIBTgJIBmArIAdhFIAIgCIA1AXIATg3QArAOArgQQAegKAVgXIAsANIAIANQBJAJAvg2IANgPIAwHmIiaAeQgPgCgOAIIixgWIgCAAIk/AiQgKAAgJgEQh3guhzANIgOgGQAAAEgCADIgBABQgmAGgkAMIgMAGIgXALIiNAJgEggvAL3IgPj6QCvgfCVhZIBkAxIgGDsIAFBVIgKADQh6goiHAMQgIARgWAGQgdAIgeAAQgaAAgagGgA9MmvQAPhrAyhgQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBgBAAQhRAJgwBEQAeiiCQgsQhIgzhXAmQgWALgTASIgDAAQBGiHChgKIADgDIgohVIgOACIg8gPIBHgLIAGgKQD6gSD5ABQCmAVC/gIIhdAzICeAwIA1AdIg1AGIjSAvIDSBRQBDApAbBHQADAGgBAHIhggbIksg7IA8BbIASCFIgOAJIgDAAQgBAGAAAHQhfiFiEhWIhbCjIgniBIiRCDIALhHQirAahpCSgAmLvQQhQgLhLAqIgIAEIhmAJIAhgnIBNgxIO7gCIAnBeIjtgyIB8CHIkWhCQA6A4gVBQIihhmIg9BmIgriSIhzCdIAHiDQh6AihrByIgJAGQAUiGBqhng");
	this.shape_48.setTransform(-1.7,-56.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#C6FFFF").s().p("AUVGwIgagRQipgph0BzIrtjlQASjWg1jOIkaAAIAAhoIAJgHIAaitQA5AaAxApQAdAaAXAbIgOijIELBaQgPg5gngrQgZgbgggPQBzADBoAwIgnh4IGIgKIAeABINVgDIGDADIAKAAIAAFIIgJAAIgBgJIAAk/IAAE/IgdgsIgYABIgKhfIixhFIgLgSIg6ASIgGguIhHAZIhrgEIg2AxIgTgGQhgAlgfBiIgEAQQgJA4gEA5QgBAcAEAdIBHC5IBKB/QAWgFAIAYIANArIgXhnIAVgfIAFBBIAfASIgNhSIAzAeIgeg7QAjgXAnARIAMAjIgvgeQAACLgbCEQgLAlgHAnQgIAhgLAhImjl7IghAJIgUAGQh4Afh4AeQgHACAKAIIAAABQBxBSB1hbIhNB5QBRgQBPg1IFAGFIgKgIIgLgBQgwAAgJAuIgBAAQgiiHhthEgAVolqQAAgHADgHIgEAAIABAOgAd6JXIgTgdIhxgKIAahqIAJgFICTCSIgyAfgEgg+gCYIAEgVIgBm/IA6gOIECAXQhVgFgoA6QBHgeA0AWIAOAEIAvA7QjRASgZCyQAFgCACgDQBEhaBnAmQiZBLALCgQAug9BKgbQgWAlgUAnQgiBEAaAwIARADQBfhlCfg5IAEgBIgRBSIAsgSQAMAOgGAUQgHAWgJATQgLAagGAZQgtAfg8AAQg6AGg8gKIAAFqIgJAAIkaBegAx8BPIgwgKIi8goIBRktQClBkAxCwIACgDQAcglgMguIANgJIAAiKIgrg8IEJAvICDAnIgFgRQgLgegPgaQglg/g/glIizgzICzgqIBYgGIhYhCIh2gdIB2gvIACAAIBiAAICpAAIh4BmIAKADQBHATA4gqIAJgEICBgWQhKBHghBgQgNAngIAoIAcgTIAIgGIDDiCIgNC9IB1igIgaEhQjcg2hPBZIAGAAIAAAaIAAB2IgNAAQgzg2hKgRIgRgEIidAxQiIA3iPAXQgIACgJAAIgQgCg");
	this.shape_49.setTransform(-2.6,-97.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("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");
	this.shape_50.setTransform(-4,-0.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#CC9966").s().p("AxXTdIADABIABALgAeERdIASgsQhBi3iZh1IgWgSIg7hAQhDhbgJh7IAAggQBZiHBlh8QBeh0BthhICDBfIAKAKIgKB0IAAh+IAAB+IgHA9QiUCUi0BvIAnBdIAhAXIAEALQA6ALAkAuQASAWAYARIB7E3IAABhQgrgJgSgRQgCgCgFAAQgyAngYAAQgZAAAAgngAsYOdIAIgNIAAAHQAAAMgDAAQgCAAgDgGgAn5K/IAAgBIABABIgBAAgEgg/gEvIBxghQAEgBABgCQADgDAAgEICjhFIAJAAIAAEUICKAIQABAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQAFAUABAVIABASQAFApgYAbIgfgYIgEAAQgEABgDACIgJAEQgUALgTgMQgLgHgDgLIgBgBIgkgEIgYACQghADgbAUIgLAsIgXgsQgBAAAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAQgDALgCAKQgBADgCACQgZAggqAAIhNgJIAAArgA3JAoIAFiZIC/AQIABgIICKAAIArpSIDKg8IhZBKICQgrIATgFQAdA3BfhPIAMgIIAMgFIAKABQAKAFAEAVQggBgA9hCIAJgLIBUAHIAZDPIAzA5ICtAMIAADsIgQAEIgaAKQgfANgNAeIAAAEIh0gVIhLAxIgRAGIgxgRIgcAsIg2ALIgIABIiDAbIhSAIQifhniVCYQgpArg/AEIgTAAQg9AAg7gUgAdLk5QgagXgPggIEJh5IAAGJIAAmJIABgBQApDAgqDKQhrhsh1htgAYYjTQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIgZgKIlemNIiOBJIBNhzQhaAohggPQgbgDgagGIAAgBQAYAAAYgFQBigUBbguIAUgGQBLA1A9BBQCTCdCyB5QACgvAIgtQAHgmALgmQAlh+BShsIgTglIBJAVQgDglAPghQAWgyAognIAkAzIAcgRQAxA+BphMIAAChIAAihIAEgEQAWApgGA5IAABDIgTAAIgBAAIiUB4Ighg0IgDAsIgEACIgLAFQhGAmgxg2QhzBpBTB/IACABIAeArQgMBuhJBSIgNAPQg6gjg5glgAhniuIAAi5IAPgBQBQgCAPhPIADgRQBKAGBHgVQAwgOAcgkIKgCxIADABIA/AWIgoAuIgNAlIgHgEIgKgKIgCABIAAACIgLgFQiEhniaBQIgDABQhWgNgrBIIgBACIgZgCIhsAcQg1glgDhKIgBgBQiVAdiABKIgzAjgAhwnCIAAgCIAcgCIgBAXIgJADQgQgFgCgRgAY5srIhAhCIAEgjQAMgLAwgKQgSgSgcAQIg5gbIBKhAIgfhTIgmgFQgxA2AkBEIAegUIABgSIAYABIgbAgIgdARIgngwQgGhMAzg6IAIgJIA/gtIgGASIB2g6IA4AmQgLAIgMAAIg0gNIgcApIBPgVQASACASAGIABABIgfAgIBTACQgZBAA6ATIABAAIAAgCIAnCKQguCZh4AAQgvAAg6gXgAYGt2IAXAOIAbAfQBBAtBBgpQAlhTgxhIQhCBhhmAJgAZRwjIAnAMIAagXIAmgFIAEABQgBhchZAAQgmAxAVA6gAYMwVQABAFgCADQgCADgCAAg");
	this.shape_51.setTransform(-1.6,-15.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#494949").s().p("Aj2AmIABABIgCACIABgDgAkKALIACACIgGAOIAEgQgAEOgoIAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAABg");
	this.shape_52.setTransform(165.1,-133.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_35},{t:this.shape_40},{t:this.shape_39},{t:this.shape_8},{t:this.shape_38},{t:this.shape_6},{t:this.shape_5},{t:this.shape_7},{t:this.shape_16},{t:this.shape_14},{t:this.shape_29},{t:this.shape_30},{t:this.shape_11},{t:this.shape_12},{t:this.shape_28},{t:this.shape_4},{t:this.shape_32},{t:this.shape_3},{t:this.shape_2},{t:this.shape_37},{t:this.shape_13},{t:this.shape_10},{t:this.shape_18},{t:this.shape_26},{t:this.shape_25},{t:this.shape_27},{t:this.shape_24},{t:this.shape_9},{t:this.shape_22},{t:this.shape_23},{t:this.shape_21},{t:this.shape_20},{t:this.shape_36},{t:this.instance},{t:this.instance_1}]},4).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_5},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_7},{t:this.shape_8},{t:this.shape_49},{t:this.shape_32},{t:this.shape_3},{t:this.shape_48},{t:this.shape_14},{t:this.shape_29},{t:this.shape_30},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_2},{t:this.shape_43},{t:this.shape_42},{t:this.shape_10},{t:this.shape_18},{t:this.shape_26},{t:this.shape_25},{t:this.shape_27},{t:this.shape_24},{t:this.shape_9},{t:this.shape_22},{t:this.shape_23},{t:this.shape_21},{t:this.shape_20},{t:this.shape_41},{t:this.instance},{t:this.instance_2}]},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-217.1,-164.1,428.3,326.7);


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


(lib.FBoundingBoxSymbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{enabled:0,disabled:1});

	// timeline functions:
	this.frame_0 = function() {
		/* var component = _parent;
		
		component.registerSkinElement(boundingBox, "background");
		
		stop();*/
	}
	this.frame_1 = function() {
		/* 
		
		component.registerSkinElement(boundingBox2,"backgroundDisabled");
		
		stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Skin Elements
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AH0H0IvmAAIAAvnIPmAAg");
	this.shape.setTransform(50,50);

	this.boundingBox = new lib.boundingBox();
	this.boundingBox.setTransform(50,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.boundingBox},{t:this.shape}]}).to({state:[{t:this.boundingBox},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,102,102);


(lib.fpb_up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* var component = _parent._parent;
		
		component.registerSkinElement(frame5, "face");
		component.registerSkinElement(frame3, "shadow");
		component.registerSkinElement(frame1, "darkshadow");
		component.registerSkinElement(frame4, "highlight");
		component.registerSkinElement(frame2, "highlight3D");
		
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin elements
	this.frame5 = new lib.fpb_face_up();
	this.frame5.setTransform(10,10,2.025,2.025);

	this.frame4 = new lib.fpb_leftInFrame_up();
	this.frame4.setTransform(5,5,2.152,2.152);

	this.frame3 = new lib.fpb_rightInFrame_up();
	this.frame3.setTransform(5,5,2.278,2.278);

	this.frame2 = new lib.fpb_leftOutFrame_up();
	this.frame2.setTransform(0,0,2.405,2.405);

	this.frame1 = new lib.fpb_rightOutFrame_up();
	this.frame1.setTransform(0,0,2.001,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame1},{t:this.frame2},{t:this.frame3},{t:this.frame4},{t:this.frame5}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100.1,100);


(lib.fpb_over = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* var component = _parent._parent;
		
		component.registerSkinElement(frame5, "face");
		component.registerSkinElement(frame3, "shadow");
		component.registerSkinElement(frame1, "darkshadow");
		component.registerSkinElement(frame4, "highlight");
		component.registerSkinElement(frame2, "highlight3D");
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin elements
	this.frame5 = new lib.fpb_face_over();
	this.frame5.setTransform(10,10,2.025,2.025);

	this.frame4 = new lib.fpb_leftInFrame_over();
	this.frame4.setTransform(5,5,2.152,2.152);

	this.frame3 = new lib.fpb_rightInFrame_over();
	this.frame3.setTransform(5,5,2.278,2.278);

	this.frame2 = new lib.fpb_leftOutFrame_over();
	this.frame2.setTransform(0,0,2.405,2.405);

	this.frame1 = new lib.fpb_rightOutFrame_over();
	this.frame1.setTransform(0,0,2.001,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame1},{t:this.frame2},{t:this.frame3},{t:this.frame4},{t:this.frame5}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100.1,100);


(lib.fpb_down = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* var component = _parent._parent;
		
		component.registerSkinElement(frame5, "face");
		component.registerSkinElement(frame4, "shadow");
		component.registerSkinElement(frame2, "darkshadow");
		component.registerSkinElement(frame3, "highlight");
		component.registerSkinElement(frame1, "highlight3D");
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin elements
	this.frame5 = new lib.fpb_face_press();
	this.frame5.setTransform(10,10,2.025,2.025);

	this.frame4 = new lib.fpb_leftInFrame_press();
	this.frame4.setTransform(5,5,2.152,2.152);

	this.frame3 = new lib.fpb_rightInFrame_press();
	this.frame3.setTransform(5,5,2.278,2.278);

	this.frame2 = new lib.fpb_leftOutFrame_press();
	this.frame2.setTransform(0,0,2.405,2.405);

	this.frame1 = new lib.fpb_rightOutFrame_press();
	this.frame1.setTransform(0,0,2.001,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame1},{t:this.frame2},{t:this.frame3},{t:this.frame4},{t:this.frame5}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100.1,100);


(lib.fpb_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* var component = _parent._parent;
		
		component.registerSkinElement(frame5, "face");
		component.registerSkinElement(frame3, "shadow");
		component.registerSkinElement(frame1, "darkshadow");
		component.registerSkinElement(frame4, "highlight");
		component.registerSkinElement(frame2, "highlight3D");
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin elements
	this.frame5 = new lib.fpb_face_disabled();
	this.frame5.setTransform(10,10,2.025,2.025);

	this.frame4 = new lib.fpb_leftInFrame_disabled();
	this.frame4.setTransform(5,5,2.152,2.152);

	this.frame3 = new lib.fpb_rightInFrame_disabled();
	this.frame3.setTransform(5,5,2.278,2.278);

	this.frame2 = new lib.fpb_leftOutFrame_disabled();
	this.frame2.setTransform(0,0,2.405,2.405);

	this.frame1 = new lib.fpb_rightOutFrame_disabled();
	this.frame1.setTransform(0,0,2.001,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame1},{t:this.frame2},{t:this.frame3},{t:this.frame4},{t:this.frame5}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100.1,100);


(lib.fpb_states = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{up:0,over:1,down:2,"disabled":3});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_1 = function() {
		/* stop();
		*/
	}
	this.frame_2 = function() {
		/* stop();*/
	}
	this.frame_3 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Layer 6
	this.over_mc = new lib.fpb_over();

	this.disabled_mc = new lib.fpb_disabled();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.over_mc}]},1).to({state:[]},1).to({state:[{t:this.disabled_mc}]},1).wait(1));

	// states
	this.up_mc = new lib.fpb_up();

	this.down_mc = new lib.fpb_down();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.up_mc}]}).to({state:[]},1).to({state:[{t:this.down_mc}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100.1,100);


// stage content:
(lib.adverb_Scene7 = function(mode,startPosition,loop) {
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
		
		 window.open ("adverb_Scene8.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("adverb_Scene6.html","_self");
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Buttons
	this.btn_goNext = new lib.goNext();
	this.btn_goNext.setTransform(494,352.3);
	new cjs.ButtonHelper(this.btn_goNext, 0, 1, 2, false, new lib.goNext(), 3);

	this.btn_goBack = new lib.goNext();
	this.btn_goBack.setTransform(57.6,352.3,1,1,0,0,180);
	new cjs.ButtonHelper(this.btn_goBack, 0, 1, 2, false, new lib.goNext(), 3);

	this.instance = new lib.Copyright("synched",0);
	this.instance.setTransform(275,389.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.btn_goBack},{t:this.btn_goNext}]}).wait(1));

	// Main
	this.btn_menu = new lib.skiptomenu();
	this.btn_menu.setTransform(514.1,20.3);
	new cjs.ButtonHelper(this.btn_menu, 0, 1, 2, false, new lib.skiptomenu(), 3);

	this.instance_1 = new lib.Definition("synched",0);
	this.instance_1.setTransform(275,22);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("AgmBpQgIgGABgIQgBgJAGgIQAHgKAKAAQAKAAAFAHQAEAGAAAIQAAAIgEAHQgGAKgLAAQgHAAgGgFgAgfAuQgFgFAAgIQAAgLARgNIAegVQATgOgBgKQAAgNgMgLQgNgLgMAAQgIAAgMAIQgNAIgGAAQgIAAgGgGQgFgGAAgHQAAgNAYgMQAUgKAOAAQAbAAAZAWQAXAWAAAdQAAAcgcATIgWAQQgOAKgFAIQgHAHgIAAQgHAAgHgGg");
	this.shape.setTransform(320,356.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6600").s().p("AguA6QgXgRABgfQgBghATgYQAUgaAgAAQAYAAAPAIQAWAKgBAVQABAPgSAMQgHAFgYAIIgrAVQAGAHAKADQAJAEAKAAQASAAANgIQALgGAHAAQAOAAAAANQAAAQgWAKQgUAIgVAAQgfAAgVgQgAgSggQgIAJgGARIAegNQARgJALgHQgJgFgPAAQgKAAgKAIg");
	this.shape_1.setTransform(304.1,359.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6600").s().p("Ag1BGQgEgEAAgIIAAhXIAAgNIAAgNQABgHAEgFQAFgGAIAAQAPAAADAQQAWgSAeAAQAbAAAAAlIAAAJQgBAUgSAAQgRABAAgTIgBgNQgdAFgNAaIAABDQAAAIgFAFQgFAFgJAAQgIAAgFgGg");
	this.shape_2.setTransform(290,359.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6600").s().p("AgtA6QgYgRAAgfQABghARgYQAVgaAgAAQAYAAAQAIQAUAKABAVQgBAPgRAMQgHAFgXAIIgsAVQAGAHAJADQAKAEAKAAQASAAANgIQALgGAHAAQAPAAAAANQAAAQgYAKQgSAIgWAAQgfAAgUgQgAgRggQgKAJgFARIAfgNQAQgJALgHQgJgFgPAAQgKAAgJAIg");
	this.shape_3.setTransform(275,359.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF6600").s().p("AAfBkQgDgMgDgUQgCgTAAgMIAAgLIAAgKIAAgMQgBgFgGAAQgPAAgKAMQgHAHgLATQAAAygEAKQgGALgLAAQgIAAgGgFQgGgFAAgIIACgHQABgDAAgiIABhZIAAgFIABgVIgCgNIgBgMQAAgIAGgFQAFgFAIAAQAOAAAEAOQADAIAAARIgBAcIgBAbQAKgKAMgFQAJgFANAAQAXAAALANQAHAKACASIACAiIACAbIAFAbIABAFQAAAHgGAFQgGAFgIAAQgOAAgEgNg");
	this.shape_4.setTransform(259.5,355.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF6600").s().p("AAbBqQgHgFgBgIQgGgQgCgKIgPhVQgIAZgLAWQgPAhgFASIABAHQAAAIgHAGQgHAEgIAAQgKAAgGgFQgHgFAAgKIgFgQIgOhAQgJgegWg8IgBgHQAAgIAGgFQAGgEAIAAQAKAAAGAIQAEAFAEANQAOAmAQBIQALgbAMgiQAJgdAGgNQANgeANAAQANAAAGAPQADAHADASIAEAcQACAXAPA8QAOghAZg+IAHgZQAEgQAGgJQAGgJALAAQAJAAAFAFQAGAFAAAIQAAADgFAMIgGAOIgHAXQgIAUgRAlQgRAngIATQgFAOgFAJQgHALgNAAQgIAAgGgEg");
	this.shape_5.setTransform(236.7,356.4);

	this.instance_2 = new lib.Main();
	this.instance_2.setTransform(278,192.7,0.883,0.883);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.btn_menu}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(284.2,201.8,537.1,397.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;