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



(lib.Whenisthegame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOArQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgEABgDQADgDADAAQAGAAAAAHQAAADgCADQgCADgDAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBgAgLAVQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgEAIgGIAMgJQAIgGAAgGQAAgHgHgFQgGgGgFAAQgEAAgFAEIgHAEQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAgEAJgFQAIgEAFAAQAKAAAJAJQAKAKAAALQAAAJgFAFQgEADgJAHQgIAGgCAEQgCADgDAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape.setTransform(44.7,-14.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgOAuIgCgFQAAgFANgcIgWgnIgCgEIgCgFIACgEQABgBAAAAQABAAAAAAQABgBAAAAQAAAAABAAQABAAAAAAQABAAABABQAAAAABAAQAAAAAAABQALAOAJAZIAIgTIAJgSQADgEADAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAABQABAAAAABQABAAAAABQAAAAAAABQABAAAAABIgBACIgVAqIgJAbIgEALQgBAFgEAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAg");
	this.shape_1.setTransform(38.6,-12);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AASAdIgEgEIgKAEIgFACQgOAAgGgHQgGgIAAgPQAAgMAKgKQAKgKALAAQAFAAAHADQAIACAAAGIgBACIgBAIIgBAKIABAMIAEALIABADIABAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgEgDgAgJgOQgGAIAAAHQAAALADAEQAEAFAGAAQAEAAAEgCIAGgEIgCgWIAAgGIABgFIgDgCIgDgBQgHAAgHAHg");
	this.shape_2.setTransform(32.5,-13.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgFAqIABgVIAAgVIABgUIAAgVQAAgGAEAAQAFAAAAAGIAAAVIAAAUIgBAdIgBANQAAAGgEAAQgFAAAAgGg");
	this.shape_3.setTransform(27.8,-15.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgWAvQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgYIAAgVIAAgXIgBgMQAAgEABgDQACgEADAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABIACAEIAAACIgBADQAFgDAEgCQAEgCADAAQANAAAFALQAFAIgBAOQABALgHAIQgIAJgLAAQgEAAgIgCIAAAcQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAgBgBgAgEgeIgIAHIABAaQAGACAFAAQAHAAAEgFQADgDAAgIQAAgKgCgGQgDgFgGAAQgDAAgEACg");
	this.shape_4.setTransform(23,-12.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgOAuIgCgFQAAgFANgcIgWgnIgCgEIgCgFIACgEQABgBAAAAQABAAAAAAQABgBAAAAQAAAAABAAQABAAAAAAQABAAABABQAAAAABAAQAAAAAAABQALAOAJAZIAIgTIAJgSQADgEADAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAABQABAAAAABQABAAAAABQAAAAAAABQABAAAAABIgBACIgVAqIgJAbIgEALQgBAFgEAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAg");
	this.shape_5.setTransform(12.9,-12);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgTAZQgJgHAAgOQAAgNAIgKQAIgLAMAAQAJAAAGADQAIAEAAAIQAAAGgHAFIgMAEIgVALQADAFAFACQAFADAFAAIAJgCQAHgCACgDQACgDACAAIAEACQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAAHgLAEQgJAEgIAAQgLAAgJgGgAgLgOQgEAFgDAJIASgGQAJgFAEgEQgFgFgIAAQgGAAgFAGg");
	this.shape_6.setTransform(6.8,-13.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAPAsIgCgOIgBgOIAAgEIAAgFQAAgJgFAAQgHAAgFAFIgIANQAAAWgCAEQgBAEgEAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAgBgBQAAAAAAAAQgBgBAAgBQAAAAAAgBIABgCIAAgJIABgIIAAgpIAAgKIAAgGIgBgFQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBAAAAQABAAABAAQAAAAABAAQAFAAABAFIAAAKIAAANIAAANIAAAFQAFgGAFgDQAEgEAGAAQAJAAAEAHQADAEAAAJIABALIABAMIACAMIAAACQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgEAAgCgEg");
	this.shape_7.setTransform(0,-15.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgDApQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIAAgHIAAgHIgBggIgNgBQgFAAAAgGQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAIALABIAAgJIAAgHQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAQAEAAAAAJIAAAEIAAAEIAAAEIAIgBIAIAAQAEABAAAEQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAIgCAAIgEAAIgIABIACAhIAAACIAAAEQAAANgGgBQAAAAAAAAQAAAAAAAAQgBAAAAgBQgBAAgBAAg");
	this.shape_8.setTransform(-6.4,-14.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAOAcIgCgNIgBgMIAAgEIABgFQAAgNgFgBQgHABgEAHQgFAIgDAIIgBAGIAAAGIAAAFIABAGQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIAAgGIAAgFIAAgQIABgPIAAgGIAAgGQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAFAAABAHIAAAHQAKgNAIAAQAJAAAEAIQADAGAAALIAAAFIAAAEIABAMIABANQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAQAAAAgBAAQgFABAAgGg");
	this.shape_9.setTransform(43.9,-32.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AASAeIgEgFIgKAFIgFABQgOAAgGgHQgGgIAAgPQAAgMAKgKQAKgKALAAQAFAAAHADQAIACAAAGIgBACIgBAIIgBAKIABAMIAEALIABACIABABQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgEgCgAgJgNQgGAHAAAHQAAAKADAFQAEAFAGAAQAEAAAEgCIAGgEIgCgWIAAgFIABgHIgDgBIgDgBQgHAAgHAIg");
	this.shape_10.setTransform(37.6,-32.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgPAZQgJgHAAgMQAAgLAIgMQAJgPAJAAQAGABAGADQAKADgBAFIgBAEQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAIgEgBIgCgCQgDgCgIAAQgEAAgGALQgGAJABAGQgBAHAGAEQAFAEAGABIAHgCIAHgEIADgBQAAAAAAAAQABAAAAAAQABABAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAEgJAEQgIADgFABQgLAAgHgIg");
	this.shape_11.setTransform(31.5,-32.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF6600").s().p("AALAbIgBgNIgBgLIAAgEIAAgFIAAgCIAAgDQAAgFgCAAQgFAAgDAGQgEAHgDAIIgBAGIAAAEIAAAGIgBAFQAAADgCACQgCACgEAAQgDAAgDgCQgCgCAAgDIAAgFIgBgGIABgPIABgOIAAgGIgBgFQAAgDADgDQACgBAEAAQAHgBABAKIAAABQAIgKAIABQALAAAEAJQADAGAAAMIAAAEIAAADIABALIACAMQAAADgDACQgCACgEAAQgHAAgBgGg");
	this.shape_12.setTransform(20.1,-32.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF6600").s().p("AgTAZQgJgIAAgNQAAgNAHgKQAJgLANAAQAKAAAHADQAIAEAAAJQAAAHgHAFIgNAEIgSAJQADADAEACQAEABADAAQAIAAAGgDQAEgDADAAQAGAAAAAGQAAAHgJAEQgJADgJAAQgMAAgJgGgAgHgNQgEAEgCAHIANgFIALgHQgEgCgGAAQgEAAgEADg");
	this.shape_13.setTransform(13.4,-32.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF6600").s().p("AANArIgCgOIgBgNIAAgFIAAgEIAAgFQAAgBgBgBQAAAAAAAAQgBAAAAAAQgBAAAAAAQgHAAgDAEIgHAMQAAAVgCAEQgDAFgFAAQgDAAgDgCQgCgCAAgDIABgEIAAgPIAAgmIAAgCIABgJIgBgFIAAgFQAAgEACgCQADgCADAAQAGAAACAGIABALIgBAMIAAALQAEgEAFgCQADgCAGAAQAKAAAEAFQADAFABAGIABAPIABALIACAMIAAACQAAADgCACQgDACgDAAQgGAAgCgFg");
	this.shape_14.setTransform(6.8,-33.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF6600").s().p("AALAtQgDgCAAgDIgEgMIgFgjIgIATIgJAWIABADQAAADgDADQgDACgDAAQgFAAgDgDQgDgCAAgEIgCgGIgGgcIgNgmIAAgCQAAgEACgCQADgCADAAQAFAAACAEIAEAHQAFARAIAeIAJgZIAGgSQAGgNAFgBQAFABADAGQABADABAIIACALIAHAjIARgnIADgLIAEgLQADgEAFAAQADAAADACQACACAAAEIgCAHIgCAFIgEAKIgKAXIgLAaIgEAJQgDAFgGAAQgDAAgDgCg");
	this.shape_15.setTransform(-3,-33.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(2.5,1,1).p("AACDwIEQAAQBkAABGhHQBGhGAAhjQAAhihGhHQhGhGhkAAIojAAQhkAAhGBGQhGBHAABiQAABjBGBGQBGBHBkAAICrAA");
	this.shape_16.setTransform(22.1,-23.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAqBEIgBABQgbgFgWgRQgMgIgJgLQgNgPgIgSIgEgLIgFgQIgDgTQgBgEABgEQACgFAGgEQAMACABAMIAAAHIAAAFQAAAFACAFIAQAgIABADIAIALQAOARAUAKIARAIQABgLgEgLQgHgVgEgTQgDgTABgUQAAgHAGgDQAGABADADIABAAQAGAFgCALQgCAXAHATIADAIQAJAaAEAcIABAGIAAABIgVgBg");
	this.shape_17.setTransform(18.6,6.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgNEfQgVgKgPgRIgIgLIgBgFIgQggQgCgFAAgFIAAgFIABgHQgCgMgMgCQgGAEgCAFIgFgBIirAAQhkAAhGhGQhGhGAAhiQAAhjBGhHQBGhGBkAAIIjAAQBkAABGBGQBGBHAABjQAABihGBGQhGBGhkAAIkQAAIAAACIAAAAQgCgDgGgBQgGADAAAHQgBAUADATQAEAVAGAVQADALgBALIgPgIg");
	this.shape_18.setTransform(22.1,-18.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.6,-49.1,105.5,62.3);


(lib.Thegameisat300PM = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("AgFAFQgDgDAAgCQAAgBADgDQADgCACAAQAEAAACACQADADAAABQAAADgDACQgCACgEAAQgCAAgDgCg");
	this.shape.setTransform(43.5,-10.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6600").s().p("AALAaIgBgMIgBgLIAAgEIAAgFIAAgCIAAgDQAAgFgCAAQgFAAgDAGQgEAHgDAIIgBAGIAAAEIAAAGIgBAFQAAADgCADQgCABgEAAQgDAAgDgBQgCgDAAgDIAAgFIgBgGIABgPIABgOIAAgGIgBgFQAAgDADgCQACgCAEAAQAHAAABAJIAAABQAIgJAIAAQALAAAEAJQADAGAAANIAAADIAAADIABALIACAMQAAAEgDACQgCABgEAAQgHABgBgIg");
	this.shape_1.setTransform(37.9,-13.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6600").s().p("AgSAYQgIgIgBgNQAAgLAHgLQAJgMAOAAQAMAAAHAKQAGAIAAANQAAALgHAKQgIALgNAAQgKAAgIgIgAgHgIQgDAFAAAGQAAAHADADQAEADADAAQAEAAAEgDQAEgEAAgHQABgRgLAAQgFAAgEAHg");
	this.shape_2.setTransform(31.5,-13.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6600").s().p("AgSAYQgIgIgBgNQAAgLAHgLQAJgMAOAAQAMAAAHAKQAGAIAAANQAAALgHAKQgIALgNAAQgKAAgIgIgAgHgIQgDAFAAAGQAAAHADADQAEADADAAQAEAAAEgDQAEgEAAgHQABgRgLAAQgFAAgEAHg");
	this.shape_3.setTransform(25.2,-13.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF6600").s().p("AgPAeQgJgDAAgHQAAgFAHAAIAIACIAHABQAKAAABgFQgBgDgHgDIgOgHQgJgFAAgIQAAgMANgEQAIgCAMgBQAGABADABQAEACAAAFQAAALgGAAQgFAAgCgFIgEAAQgMAAgBADQABADAGAEQALAFAFACQAIAFAAAIQAAAKgJAFQgIAEgJABQgIAAgGgDg");
	this.shape_4.setTransform(19.2,-13.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF6600").s().p("AgTAZQgJgIAAgNQAAgNAHgKQAJgLANAAQAKAAAHADQAIAEAAAJQAAAHgHAFIgNAEIgSAJQADADAEACQAEABADAAQAIAAAGgDQAEgDADAAQAGAAAAAGQAAAHgJAEQgJADgJAAQgMAAgJgGgAgHgNQgEAEgCAHIANgFIALgHQgEgCgGAAQgEAAgEADg");
	this.shape_5.setTransform(7.7,-13.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF6600").s().p("AgWAeQgBgCAAgEIAAgkIAAgFIAAgFQAAgEACgCQACgCADAAQAGAAACAHQAJgJAMABQALgBAAARIAAADQAAAJgIAAQgHAAAAgIIAAgGQgMADgFALIAAAbQAAAEgDADQgCABgDAAQgEABgCgDg");
	this.shape_6.setTransform(1.7,-13.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF6600").s().p("AgTAZQgJgIAAgNQAAgNAHgKQAJgLANAAQAKAAAHADQAIAEAAAJQAAAHgHAFIgNAEIgSAJQADADAEACQAEABADAAQAIAAAGgDQAEgDADAAQAGAAAAAGQAAAHgJAEQgJADgJAAQgMAAgJgGgAgHgNQgEAEgCAHIANgFIALgHQgEgCgGAAQgEAAgEADg");
	this.shape_7.setTransform(-4.8,-13.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF6600").s().p("AANArIgCgOIgBgNIAAgFIAAgEIAAgFQAAgBgBgBQAAAAAAAAQgBAAAAAAQgBAAAAAAQgHAAgDAEIgHAMQAAAVgCAEQgDAFgFAAQgDAAgDgCQgCgCAAgDIABgEIAAgPIAAgmIAAgCIABgJIgBgFIAAgFQAAgEACgCQADgCADAAQAGAAACAGIABALIgBAMIAAALQAEgEAFgCQADgCAGAAQAKAAAEAFQADAFABAGIABAPIABALIACAMIAAACQAAADgCACQgDACgDAAQgGAAgCgFg");
	this.shape_8.setTransform(-11.4,-15.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgTAZQgJgHAAgOQAAgNAIgKQAIgLAMAAQAJAAAGADQAIAEAAAIQAAAGgHAFIgMAEIgVALQADAFAFACQAFADAFAAIAJgCQAHgCACgDQACgDACAAIAEACQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAAHgLAEQgJAEgIAAQgLAAgJgGgAgLgOQgEAFgDAJIASgGQAJgFAEgEQgFgFgIAAQgGAAgFAGg");
	this.shape_9.setTransform(48.7,-32.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgRAsQgBACgDAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIAAgFIAAgEIAAgTIgBgRIAAgPIAAgRQAAgDACgDQACgEADAAQAFAAAAAFIgBACIAAADIAAANIAAAPIAJgGIAHgBQANAAAHAJQAIAIAAANQAAANgJAJQgIAKgLAAQgJAAgIgDgAgIgBIgIADIAAAKIAAAKIAAAJIAIAEQADABAFAAQAGAAAGgGQAFgGAAgJQAAgJgEgGQgFgEgIAAQgDAAgFADg");
	this.shape_10.setTransform(41.9,-33.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgFAqIABgVIAAgVIABgUIAAgVQAAgGAEAAQAFAAAAAGIAAAVIAAAUIgBAcIgBAOQAAAGgEAAQgFAAAAgGg");
	this.shape_11.setTransform(33,-33.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgFAqIABgVIAAgVIABgUIAAgVQAAgGAEAAQAFAAAAAGIAAAVIAAAUIgBAcIgBAOQAAAGgEAAQgFAAAAgGg");
	this.shape_12.setTransform(29.7,-33.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgEAqQgBgBAAAAQAAgBAAAAQgBAAAAgBQAAgBAAAAIAAgLIAAgKIAAgOIABgMQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABgBABAAQAAAAAAAAQAAAAAAAAQABAAAAABQABAAAAAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAIAAAMIgBAOIAAAKIABALQAAAAAAABQAAABgBAAQAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAAAABQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAgAgCgfQgCgCAAgDQAAgDACgCQACgCABAAQAAAAABAAQABAAAAABQABAAAAAAQABABAAAAQACACAAADQAAADgCACQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgBAAgCgCg");
	this.shape_13.setTransform(26.5,-33.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AANAgQgGAAgEgPIgCgOIgBgLIgEAJIgJAYIgCAEQgCADgEAAQgEAAgEgRQgDgJgCgOIgBgJIgBgJQAAAAAAgBQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAQAFAAABAFIABAIIABAJIADAYIAOgoQACgGADAAQAEAAACAHIADAVIAFAVIAEgQIAHgdQABgEAFAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABABQAAAAABABQAAAAAAAAQABABAAABQAAAAAAABIgBACIgMApIgFALQgCADgDAAIgBAAg");
	this.shape_14.setTransform(20.6,-32.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgPAtIgBgDQAAgHANgbIgWgnIgCgEIgBgFIABgEQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQAKAOAJAZIAIgUIAJgSQACgDAEAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQABAAAAABQAAAAAAABQABAAAAABIgCADIgUApIgJAbIgEAMQgBAEgEAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAgBgBg");
	this.shape_15.setTransform(9.7,-30.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgTAZQgJgHAAgOQAAgNAIgKQAIgLAMAAQAJAAAGADQAIAEAAAIQAAAGgHAFIgMAEIgVALQADAFAFACQAFADAFAAIAJgCQAHgCACgDQACgDACAAIAEACQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAAHgLAEQgJAEgIAAQgLAAgJgGgAgLgOQgEAFgDAJIASgGQAJgFAEgEQgFgFgIAAQgGAAgFAGg");
	this.shape_16.setTransform(3.5,-32.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAPAsIgCgOIgBgOIAAgEIAAgFQAAgJgFAAQgHAAgFAFIgIANQAAAWgCAEQgBAEgEAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIABgCIAAgJIABgIIAAgpIAAgKIAAgGIgBgFQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAAAgBQABAAABAAQAAAAABAAQAFAAABAFIAAAKIAAANIAAANIAAAFQAFgGAFgDQAEgEAGAAQAJAAAEAHQADAEAAAJIABALIABAMIACAMIAAACQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgEAAgCgEg");
	this.shape_17.setTransform(-3.3,-33.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgDArQAAgBgBAAQAAgBAAAAQAAgBgBgBQAAAAAAgBIABgCIAAgDIAAgJIgBgIIgBgWIgCgXIgFAAQgNAAgHgCQgFgBAAgFQAAAAAAgBQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABAAQABAAAAAAIAJABIAKABIALAAIAIgBIAOABIANABQABAAAAAAQABAAABAAQAAAAAAABQABAAAAAAQABABAAAAQAAABAAAAQABABAAABQAAAAAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAAAAAQgBABgBAAQAAAAgBAAIgNgBIgOgBIgEAAIACAbIABAYIAAAGIABAGIgBAHQgCAEgDAAIgDgBg");
	this.shape_18.setTransform(-10.4,-33.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(2.5,1,1).p("AhmDwIirAAQhkAAhGhHQhGhGAAhjQAAhiBGhHQBGhGBkAAIIjAAQBkAABGBGQBGBHAABiQAABjhGBGQhGBHhkAAIkQAA");
	this.shape_19.setTransform(22.1,-23.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AhSBAQAeglAcgkQAEgWgBgXIAAgBIgBgGIAGgGQAMAAAJgBIAAABIgBAMIgEAVQAAAJgFAIQgOAXgLAbQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQgHACAAAHQAAABAAAAQAAAAAAABQABAAAAAAQAAABABAAQAaAFAVgPIAJgIQAQgNAJgRQAIgPAEgRIACgDIAIgYQADgDAAgDIAOAAIABAKIgBAOIgBAHIgFAIIgFAHIAAAIIAAAHQgqBJhHAAQgTAAgVgFg");
	this.shape_20.setTransform(14.1,5.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ah3EjQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgIAIgCQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAgBQAKgaAPgZQAEgIACgKIAFgVIABgMIAAgBQgMACgLgBIgGAGIAAAHIirAAQhkAAhGhHQhGhGAAhhQAAhkBGhGQBGhGBkAAIIjAAQBkAABGBGQBGBGAABkQAABhhGBGQhGBHhkAAIkQAAIgBgLIgLAAQgBAEgDADIgIAXIgBADQgEASgJAQQgJASgPANIgKAHQgRALgTAAIgNgBg");
	this.shape_21.setTransform(22.1,-18.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.6,-49.1,105.5,61.9);


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
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AWxxtIpAACIh/gCIjIAAIh0ABIhbgBIovAAIi4AAIpEAAQgDAAgDAAInyAAAXHRnIAByMIAAhAIABv+A3CRuIA0AAICbgCIAeAAICLAAIHKAAIAiAAIDXAAIA8AAIB+AAIAlAAICOAAAgZRsIAEAAAV+RsIhfAAIhqAAIhZAAIgyAAIg8AAIgxAAIkqAAAWURsIgWAAAWZRrIgbAB");
	this.shape.setTransform(-0.5,-1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1,1).p("Awtx1IAAARIAAHYIAAFYIAAOuIAAAsIAAFwIAAAzIAAAtAF/R0IABAAAGER0IAFAAIEvABIA/AAICaAAIBKAAIBTAA");
	this.shape_1.setTransform(-41.6,-2.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#010101").s().p("AgwgPIBhASIgCABQgZAMgUAAQggAAgSgfg");
	this.shape_2.setTransform(40,86.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEDE94").s().p("AhYFWIAPgTIABANQAGAQAKAKQAiAgAEAnIgUAJQgwgngCg9gADwGcIADABIgBAEIgCgFgAjwlRIgCgCQAXg0ArguIAJgEQAQgEgBAPIhNBgg");
	this.shape_3.setTransform(13.9,65.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00CC00").s().p("AALCkQgCgMABgOIC7AgIADASIgNAHQgoAVgvAEIgLABQhHAAgHg5gAjtCoIAKhJQAIg7gPg2IgCgLQgGgZgBgXQgChLAxg4QADgBACABQBWAtBhgHIAMAAQBrADBZg1QAIASAGATQAGAVALASIADAFQAPAggJAlIgBABQgbAPgegFQh/gNhnAnQgtAQgoAXIAFAMIAAAYQAAATANAMQAwAsA6AhQADAUgFAVQgDALgKgEQgXADgWAAQhWAAhSghg");
	this.shape_4.setTransform(37.9,84.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#141414").s().p("AgrAAIASgFQA9gWAIAZIhWATg");
	this.shape_5.setTransform(31.5,-23.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F3D28D").s().p("ACYLVIh0gKIAGgPIgHgZIABgEQBnAOBhgTIAIAgIgSAbgAg/LVIhigIIAFggIATgNIgagLIgCgKIC8AgIAAAEQAEAegcAIgAj7IOIgDgFQhQjABGjQQglhAgEhKIAsgEIACgHQgBgbgOgWIATgKIBFCUQgSBLAeBBQgjAxgHA7QgCAbAGAbIACALQABAXAGAYQADA6gTAzIgGgTQgQA0AFA2QglgiAWg5gAhdD3QgfgKgfgGQgDgrgHgsQgEgfABggIADgoQghgOgNgfIgBgEQgMgxgLgyIBugKIDgDVQARAPAXADQASADARgBQAEAAAEgCQAagGAZgHIgFBuQhKAthXAGIgQACIggABQg5AAg3gSgACrBeQiAgfhNhrQgUgcgegRQhAgnARg5IAggIIAQgHIAcANQBfAxBSA/QAcAWAEgiQgXgcASgiIAJgPIAKgQQANgYAdgMQAEgBgBgKQhNAbgRBcQgBABgFAAQhNgrhIgtQgDgCgGAAQgbgOgdgNQhZglhZAgIgPgSIAeg8QAdgZAigLQA0gNAugRIAJgWQAYgJAagBQBegCAehSQgDAAgCACIg9AwQg2Awg9gkQhRgzAChjIAGAAIA2gUQg2gTgUgzIAXgaIARAaIBDgwIgDAXIA8geIAPAXIATACIAQgbIAjAtIAMgXIAbAFIgLAeIAagDQAaAagMAlIgXAlIArCPQB7AuBsBCIAJCAIg8A8QAECJh0BNQgMAJgOAAQgHAAgHgCgAiOnfQAYAaA1gEQAMgTAcgEQAagEAHgYQACgLgUARQg2AqhRgbQABAFACADgAhkoRIATANIAYgRIgJgHIgRAIIgCg1gAg5p6IgSAHIABARIBXgVQgFgNgSAAQgSAAgdAKgAk9g4IADgnIAJgCIApg8IgDgTIgRgBIgMgMIg/ARQABgOgPAEIgJADQBjhBBjA5QABBShWgPIgkA1IAVAeg");
	this.shape_6.setTransform(34.6,39.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6666CC").s().p("AAfCrQgWhpBChNIgEAAQgPAGgLgEQghgHgJgfQgDACgBAEQgDAOgIAIIgoAnIgGAGIgbAaQhFA/hLA4QAAg3gNg0QgJgpgRglIgGgMIBpAcIgHgTIhdgoIABheIAOgFIAAgLIA4ghIAsANQAbAbAkALIAbAJQCRAACVgQIAEAeIAEAGQBACcgwCmgAC6hCQgEAYgSAQIADASQAsglANhPQgeABgIA5gAjJg2QAOAPARANIAUAMIheiEQALA1AgAngAi+h4QAVA0AtAdIAAgCIhQh+QAFAaAJAVgACPhfQgQAQgXACIAFAPQA9gLAcg3IAEgXQgaAYghAgg");
	this.shape_7.setTransform(87.5,61.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCC99").s().p("AiZLKIDVAAQgLANgSAAIgoABQhLAAhFgOgAB4LKIgggGIgBgSICigNIgDAlgAA8LKgAiZLKIgSgsQAQAJASAHQBjAoBpgaIgHAOgAEcF3QgNgFgLgIIgNhmIAwg7QAPAigPAiQgQAlADAjIAtAJQgEAMgLAIQgIAGgKAAIgKgBgABhEsQhjgChbgnQgSgIgIgOQgcgugEg9IAAgKQAuAGAWgTQACgCAAgFQANAJANgFQA2gSAgg4QAcgrglgoQAMgFAMADQAmgGAjgLQATgFgBgVQgQgVgagFQhTgJhNAaIhWB1IgCAKQhMgPAWhHIBAAYQgagxgzgMIg4B1IhzAaIASASQBkgsBfArIARgcIAUABIBWh/QBegpBOAyQgOAQgXgEIgQgGIhSAZIAsAvIgogNIAcAmQgMAHgRgIQgbgKACANQANAHAFAKQAbA0g+AKIALgzIgtA3QhOAMhHAlQhuA6hnggQgfgKgKgfQgxihCYhlIAKhGQCOh0C3giQANgCAEgLQAhhag9heIgCACQgPAUgWAJQgJAFgIgEQgEgGgCgHQgTg5AvgZIAJAkIAVhWQANAmAlACQgTgtARgxQBegeBfAdQAiAggGAwQA4AvgNBHQgGAfgTAWQhBBPhqgnQAoAxBMgZQAsAmA0AVQAgANAiAAIAaACQBbALAjBRQheAUgoBaQgbA9BNgHIAFAjIgSgXQgPBJgqA/IgCATIhiC/Qg3AKg3AAIgKAAgACNA+QgpBEhJAgIgUAIIAFAPQBrgqArhhIgBgCgAmRgwIAJASQARgtArgZIATgQIgMgLgAASn9QAEAFAGAEQBVAyBKhEIAKgKIgJgbQg9AWhEgOIg0gLQgHAdASAUgACYplIAKASIg4AQQAeANApgSIAAgiQgEgDgBgEQgNgngVgrQhXgKgkAxIADAvIAaAKIAfgFgAE+C9IgGgBIgPgSIAehGQAfgnASg6QABgDAHgCQA2gkgzgeIAegvQALADAGAIQAPATAGAVQAXBKAdBGQhOAwhLA0QgOAKgQAAIgGgBg");
	this.shape_8.setTransform(-45.8,40.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFF00").s().p("AiGBDIgUgeIAQgKQAygoAYg6QAhgRgRAnQAAABAAAAQAAABAAAAQABAAAAAAQABAAAAAAQAfgLATgXQAzACgtAXIAEAAIAVgBQA7gFgjAQIAGABIBaAOIgGAHQhdgGhYAeIgQAXIgagQIAJA6IgJACIgUgTIgQAig");
	this.shape_9.setTransform(-45.5,-32.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("Ah/BpIAPgbQA2hYBTg3IAPgKIALgHQAggSAjgNIAKAHIgfBJQgLAagGAYIgBAEQgJAoACAqQgdgBgcAAQg1ABg3AHIgbAEg");
	this.shape_10.setTransform(77.7,74.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CCCCCC").s().p("AgDHcIAQgOIgEgMIgagMIgRAuIi7gQIAkgmQgugHguAKQhdAXhcgoQgagMgZgQQAYgJAXgGQB0geB0ApIgKgoQAugQAZAiIAHgTIAPAHIgVA7ID7gBIgFg2QAogbAkAZIgaAiIAXAEIAHgGIAigKIgEgUQCsAPCeBBQidA/imAAQhgAAhigVgACTG3IACAFQAHAvAxgPIAJgCQgMgmgiAAQgKAAgLADgAGmGsIABgCIhjgMQAoA6A6gsgAlaGVIABgBIhjgUQAdA1BFgggAC8nIIgMglQBMgMBPAhIAEAQQgjALglAAQglAAgmgLg");
	this.shape_11.setTransform(79.5,46);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("Aj0CoIAAiWQAWgjgCgsQgDhrBLgyQAjAWAnAOQCWA1COgzQgFAzAFAzQALBdATBdQADARgHAPQglBJhjgNIgKgWIgGiyQgPBZALBtQhDAVg/AAQhlAAhhgzg");
	this.shape_12.setTransform(-43.5,87.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CC9900").s().p("AjZDUQgVg6ADhCQA8gGA8gNQBmgUBMAIIh/AdQANAtAMAwQAEAOgPAFQhMAVhUACQgFgEgCgFgADCCfQgkgmAegwIgtgjICMAMIAKASIAABaIhaAKIgJgJgAjzgTQACgLAHgCQD0grD7gaIg2gPIAYgUIgmAGIgFgPQgpglgsAWIAEAeIAbALIAngBIADADQjPAjjgAWIgKhuQEJgMEHgmIAUDuIoLArQgPgmAMgqgAi5gKIAEAOQAvAKAxgXIABgBIgZgIgAkfhkQAAgVgFgSIAHgBQARARgJAqQgEAQgCAAQgDAAgBgjg");
	this.shape_13.setTransform(-101.3,-55.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#996600").s().p("AB5KiQgcgFgDgdIAWgyQBlgTgfBgIgKAHgADrk+IAAgFIAFAFgAjvmgIAGgBIAAAEgAjGqfIAFgCIgDAGg");
	this.shape_14.setTransform(94,44.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("AChNsIlUgKIgLhdIGiAeIgBA6IgSAPgAhwL+IgGgBIgJAAQhFgKhEgNIgtgFQhCgFg9gWIgJgDQgdgLgegJIgFgFIgFgLQgDgHgBgHQgCgHAAgJIAAgTQAMAIANAFIApARQBEAaBKAMICkAWIAjAFQAXADAXABQAkACAigCQBiAIBhAEIAaAAQBHgBBGgNIA2gIQArgCAkgUQAPgHAIAJQgBAGABAGQAAAPgNAFQhXAmhlALQhUAEhUAAQiFAAiDgKgAE6kZIgigLQAAgFACgFQACgEACgDQAGgIAIAAQADgFAEgEIAFgDQAEgCAGAAIAIgEIAAgCIAFgCIAAgBQAPAagPAjIgCACQgEACgEAAQgGABgFgHgACoscQAugbgZgoIAagHIANAjIgYAoIAAAQQgDAhgRAagAFdrhIBig1IANAGQgfAXgkAWQgOAHgLAAQgKAAgJgFgAB2sSQAtgegZgxIAHgFIATgGIABAkIALAPIgZAsIAHAQIgYAhgAAXr7IgCgDQgCgwgngVQArgNAXArIgIAsgAEMsSIAjgtQAVgTAYgLQAHgCAIACIgFAQIhYBAg");
	this.shape_15.setTransform(79.1,24.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#009900").s().p("AS8RtIgxgaIgBgDIgCgPQgEgPACgPQACgLAJgHQA2gKA1gOQBagaghhYQgCgGgEgFIgIgLIgDgBQhSgPhHgmIAVinIBNgfIAYAlIArgpIAEAGIAGAJIAFAHIAEAGIAJAKQAJAHAKACQAHACAEgBIAPgsIAPgDIAWAlIAEAEIAQAXQAQDWgDDXIiaAOgAirRkQgbgrAkgeIADgCIABgCIgdjuQAtAKAfggQAKgLgDgRIgBgEIgdgMIA1gpIAyAyIAgglIANAHQAJAIACAIQAZBJAEBTQADBQgEBQQgCAwAoAHIAJAPIgCADQg2AEg1ACIgFAAIgEAAIgBAAIiOAAgAxDRtIhfgGIABgXIgMgFIAFgZIAMgFIBqAvIgDglIgWgTQCEgxCRAMQAJgKgTgLQhyhCiNADIEshaQhwgfhyAFQhZAEhaAaIBzhZQAcAcAjACQALABALgCQAdgkAoAHIAIAOIAsgrIBGAvIAqg5IAUA+IAkgsIAuAkQgxCYArCVIAUAFIADARIAKAHIgDAYgAzsRtIg6hCIgiAuIgcADIgRgvIg7ArIgRgWIAAg0IAJj0IAlADIA8h2QAXBUgDBgQCHhdCbg5Ii0CgQAHADAGgBQC6gnC/ARQiMAxiWAfIAJATQB1AOB0AbIAmAKQgTAMgXgEQiIgThhBMQgpgQgqAMIAAABQAKAogZAggA0sMXQgEhRgThHQhFAxgYBRQgcgvgFg0IAAgsQACgSAEgTIA7AgIgCiEIA3BYIAfgHQAFANAWAGIBYhPIgmB3QAsgmAigxQAGAMgBAOQgDA1AoASIBQgoIhKBgIAEAYQhzAUhVBQQgGgOgBgOgA2nrZIgPgOIgFmCIGaAAIAJAFIBJgIIAGAAQBEAJBFABQCuADCrAKIAIARIgDAFQgEAGgIADQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgkgMglgCQgtgDgBAeQAAABAAAAQAAABAAAAQAAAAAAABQABAAAAAAIAaAQQAdATAJAgQhAgPhBgMQhEgNgmAPIAQAYQAeAugGAoIgRgPQgagTgfgHQgYgHgWgNQgNgIgLAHQgoAYAYA6IhagoQgRAGgIANQgGAKgCAKQgGAdgWASIgCgCQgIgJgEgOQgEgMgFgLQgLgYgZgGIAABSQgLAHgNAGQgKAFgMADQgeABgXgVIgBBMQgJABgIgFQgfgOgeADQgkAFAEArIhYhJIAOBBIgrAggASTtQIg1hbIhXC+QgOgHgCgSQgJheAThbQACgLgGgJIjLDLIgMgGQAZhdA6hOQAWgeAKgkQhqAFheAtQgeANgggJIgIgEQBXhIBsggQAUgFAFgVQhdALhdgBQgSAAgQgKQBYgfBdALIATAAQAJAIAOAEQAPAFAWgBQCqgGCqAAQBdgFBeADQATAAAOAMQAJAxgTAoIgeA9IhSgQIAfBxIh5hDQgOAGADAQQASBJgFBLQg3gmgjg9g");
	this.shape_16.setTransform(-1.2,-1.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFCC33").s().p("AguM1QgDgOABgOQACgjAjgMIgJgUIAFgDIAGgDQACgCAAgEIgBgIQgUADgPAPQgYAagdgTQA+gdAogrIggACQAPgOAEgTQADgQgEgJIhOAhIAXhTIA4gJQhCAFAHhEIAIAFQAmAVAqgGIABgPQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBAAAAABQhAAPgLg5IBcgSQgFgCgEACQhgAKAMhVIBdANIhSgiQgEgIgBgIQgBgPANgHQAGgBAFADQAqAYAvgWIhogXIgEggQA3AaAygdIABgBIhqgQIAIguIBLAKIgBgCIgCgDIgDgEQgGgGgJgCQgHgBgHADQgXACgVgMIgCgwIAEgDIADgCQAGgBAFAAIAWABQAKABALAIQAHAFAGgHIhWghIADglQANgDANAFQAiAPAXgNIgugHIgLgFQgQgJgIgSQgEgJACgFIADgBIADgBIAKAEQARADARABQAhAGALgWIgBgBQgJgHgJADQgXAFgXgIQgmgNgEgpIAaAIQATAEATgCQAaAAANgUQgIgKgSAGQgRAHgTgCQgPgBgKgLQgWgYAGgjIB2AKQATA/gFBDQgGBSAIBRQALBmADBnIAKAAIAPALIhVCLQAAAPgCAPQgMBCAsAsIgoCvQgKALgLAEIgIABQgQAAgNgLgAAIibQhegCAKhkIAWgKQAYgFAIAUQAPAnANAiIAOgeIABA0QgDACgFAAIgFAAgAgjq/IAJgJIhDgBQgCgDABgFIACgFIAEgFQAIgIAMgGIglgIIgBgYIATgGIgEgdIAzBBIAhhUIASCDg");
	this.shape_17.setTransform(-101.3,-6.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00CC33").s().p("AsOFUQhdgIhdgCIiugEIHKAAQgEAHgJABQgaAFgaABIgLABIgWgBgA0dFLIgDgFIAfAAIgHAFIgVAAgAVviKQAPAJABAPgA1vjvIADgRIAphUIAJAYIgcAuQgOAWAFANIgfAIg");
	this.shape_18.setTransform(4,79.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C6FFFF").s().p("A2yGYIgGgGIgPgOIAAlKIAPAAIAAFYIAAlYQA1gjAvgjIAQAMQACAGAEAHQANAXAUgKQgCgsAigXIATALIBOAAIgOg3IADgCQBWgIACBOIgBACQhngJhMAnIAFAXIgHACIgEgMQgRAmAKAqQARBKAEBMQADAoAOAoIi7BTgAUyDGQgCgVgKgQQgfg3g+gEIgpgfQg7gMg3AJIjmhyICgiuQAMByARByQBEhTAdhoQA2BrBkBIQAHhWAChUICDBQIggh8IA2AOIAlAAIAAHKgArOg8IjnAUIgniWQBGAVA3ArQgGg2gLg6IAAgCIALAKQBgAXBHBDIguiRQBMgNBRAoQAtAWAvAGQgRhGg6guICGgDIgSgpQAmgPAogHQBEgNBJAJIAqAEQB9ALB9AAQE0ABE1AGIglAWQBJArBkgeQiKAvg3BzQBRgWBTglQAxgXA2gBIAUAAIhuDcQiXguiOhDQhRgnhMgwQhRgOhMATQg7AOg5AbQg2AZg0AdIjbBkIAAAKIi0BEIAAAKIjdBaIgbAJgAjFmcIi3AAgA24A6g");
	this.shape_19.setTransform(-2,-73.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AraF+IADgsIAwgNIgDAcIgZATIARASgAqhF/IAdhAQANgLAQAKIAFADIgGAoIgagDIgGAQIALAMgALGEAIACgBIAEgEIABAAIABgBIABAAIAKAAIABAAIABABIAAAMIgFgBIgGACIgHACIgDABgAh9kKIgVAGIAAAKQgUAoAEgxQADgcgSABQgJABgJADIgbg4IAxgZQBagrBeAaIBwBCIAAA7IgpAKIATAPIAPAkIishCIgFBUQgsglgUg1g");
	this.shape_20.setTransform(29.8,-60.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CC9966").s().p("At2L7IgiAtIgQgJIgdAEIgMgKIgBgUQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBAAAAQATg2AJg/IBGAeQA4gFA1gNQBUgWBNgoQgHBxg4BXIgWgXIg3AXIgQg2IgSAMQgZATgLAhgAheLWIgCAFQgOAZgbgEIgBhPIAFgCQBkgjBTg/IgaC5IgYgZIgxAwgAVwJ/IgmA5IgigmIgiAcIglgZIhUAiIgPhIIAegKQAOACAJgKQAIgKgDgLIgcgzIAUgUQAVgHAJgSQAQgkgGgnIA8gKQBcgbBEg/QAACqAICpQACAjgUAagAx7JHQAGglgSgMIgTgLQABgQgSALQgUAMgTANQgiAXgeAbQAWg/AYg7QAEgIAEgHQAUgcgYgZQgFAAgCACQgmA4gjA7IgeA1IAAAKQgSgCgKgTQgMgYgKgZQgKgFgGgIQgOgVgEAZQgGAiAGAhQAIAqgOAUQgKgFgIgIQgGgGgBgIIgBgDQgEh9AAh9IAAgoIAAokIAKAAQAFAAAEgCQBCghBLgZQAQgOAKADQALACAFASQAGAXACAcQAAAKAFAFQAFAFACgFQALgRASgDIA5gLIAUgDQAbgCAPALQgHAbAMAIIAAAEQAIA7ACBIIAAAeIAAAKIACBYQACBJAABKIgBArQAABDgDBCQgDBPgHBNIAAALQgCAmgJAeQgIAegQAWQgSgcAJg0gARgIpIAAiCIAGgGQADgCABgDQAGgeAEgdIAUgeIA2gOIAxAhIARgTIAMgIQACg9ARg7QAFgUAWgCQAbgFAWgPQhxgdgah2QgFAFgDAKQgFANANAFQgCAsgxAKQgVADgQgNIgMgoIgKgFIAEhNQgDgFgFAEQgDAAgCABQgBABAAAAQgBABAAAAQAAABAAABQAAAAAAABIgXAPIgFAEQg/AjhJAFIgFAEIgLAvIjFBrIgOgjIgVhaIAYgsIgxAxIAPAeIgGACIihg5QgrgQgHgrIAEgCQBFg/BUgmIAFgCQAQgGAPAFIAEARIA3gwIACAEIgiAoIAVAPIAyghIApA5QBVAnBbgXIAJADQBRgjAmhSQCMgjBmBsQAJAJAPgEQAZgIAPASQAjAJAKAeQAIAYgHAhIgBAFIAAg+IAAA+QgOBNgBBQIAAB4QhIBDhYAhIhTAMQAQBAgrAiIAAAKQgxAYApAhQAnAghHABgANHIMQgTgCgUABIhGgoIgegUIBQgoQA1gWAkgnIBHhPQAYgfAagdQALgMALgIQA/gqA/A7IADABQAgADACggIAFABQADAvgpAWIgMBRIgOAPQAcCWiRASQglAFglAAQgrAAgrgHgAKeGxIAEgEQANgQgBgVQgBgTADgRIACgNQAQgEANgNQAXgbABgjQABgbARgSQAogsAxgfQAUgNAWgKQBBghBJAPQAAAFgBAEQgXBZhMBIQgKAPgMANQg6BDhQAtIhRAmgAuWFhQADgHAAgGQgJj6ACj5IAkgMIASAGIAKhGIANAGQADACACADQAIAOgGAPIAMAEIALhtIB7gKQAHgLgEgKQgbhbAUheIAcgTIDchkIC0hGIEYhrIgoA5IgoAoQAGADAFgCQBWgcBPg7QAHAOgDAMQgIAfASAPIAmguQAjA6A3AgIAAgUIAShIQBNBGBmgBIgWgvIAIgOICIA1IgPgkIBggDIB2A9QgFASABAVQAAAHAIABIAlguQBuAgBlBCQhgAAhUAyIgRgbIgYASIgagIIgOAkIgSgLQABgRgOARIgaAfIgMgNIgjA7IgegIQgBAJgDAIQgQAogWAlQgPAZgSAYIAJALQgMA0AbAeIAUgIIAEANIgTANQgSA1BEAIQhDA6hOAxIgKhGQAehMglhHIAhgCIhGhkIgfAAIgJgeIgXACQgZAqg1gFQhugPg7BCIAcAHIhiA/IggAMIABACQAuACAjgaIgmBqIBJgzIAZAjQgIASgGASQgHAZAMAWQAlBDAgBEQh+AkhAByQgegsg3gUQgXgJgWgHQg0gQg4gIQg5gIAMgxQA3gogMhFQgShlgohhIA/gQIhJgYIgoAAIBYgdIiKgLIA6gnQhDgChHAfIAAAKIgTABIAJgpIhGAoIAAAKQgEAFgDAGQgLAdgaAEIgagdIgYANIALAZIglAbIAlAGQgBAEgDACQg5A5AlA7IAMghQAIALgBAOQgBAYAFAZQANBLBLglQADAeAKAaQALAfgCAgQgBAZgYAFQi9AbiICCIgBAFQgEA4gvAigASXEnIAFgTQAJgGAKgDQAZgGAEgaIg7hGQgbAKgZgKQgogQADguQBNgOA/AsIAGAKQAdA6gKBAIgHAEQgNAHgKAKQgMAMgPAAQgGAAgHgDgATwCVQgegGgEgeIAZgZIBaA/IgTAQIgaAGIgVAQgAQZCjQgFgMAAgRQAAgRAFgMQAFgMAIAAQAHAAAFAMQAGAMAAARQAAARgGAMQgFAMgHAAQgIAAgFgMgAN6hNQhcgHgchlIANgIIADgwIAQgeIARgOIgCgkQAugyBCgJQAIAAAHgBQBQgUAwBBIAIABQgEBMAiBAIgyBaIg8AeIgtABQghAAgggDgANmilQAFAFACAGQAOArAxAEQBKAGAkgiQAFgFgBgEQgEgZgMAXQgDAGgGABQgOAEgNAFQg6AXgigmQgTgVgfgJIAKAKgAOsjEIA9AZIAMgQQALgKgNgLQgCgCgDAAIgJAPIgjgDIgUgPgAN+kRQgHAIAAALQAAALAHAIQAIAIALAAQALAAAIgIQAIgIAAgLQAAgLgIgIQgIgIgLAAQgLAAgIAIgAPqkfQgIAJAAAMQAAANAIAIQAHAJALAAQAKAAAIgJQAHgIAAgNQAAgMgHgJIgCgCIgBgBQAAAAgBgBQAAAAAAgBQgBAAAAAAQgBAAAAgBQgGgDgGAAQgLAAgHAJgANMkdIAVARIAVgjIAXgIIgcgKgAPnlRIgBADIADAMIALAAIAZAWIAUgEQAAgigqAAIgQABgAWqhpQgSgFgSAAQhHAJgTg6IhdgpIgBgZQBKg8gHhmIAbgUIgGgjIAqAHIBkAoIgGEtg");
	this.shape_21.setTransform(0,-6.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AxMEhIAAgUIBsAQIgBAAQgbAPgcAAQgZAAgbgLgAQ1BSIgFABQgKAAACgKQAIALALgHIACgCQAPgjgPgZIAAAAIAAgFQAAgBABgBQAAAAAAgBQAAAAABgBQAAAAABgBQACgBADAAIAIABIgEBPIgDACQgEAHgEAAQgEAAgFgLgAQEA6IAEgFQgBAEAAAFIgDABQgBAAAAAAQgBgBAAAAQAAgBABgBQAAgBABgBgADLgVIAPg4IACA1IARgIIAIAGIgXARgAODiWIACgRIAUAPIAiADIAJgPQAEAAACACQAMALgLAKIgMAQgABnjqIBIgmIgRgRICqgFIAogFIAzA2IgZAKIgHATIgdgDIgKAGIgLgZIgnAJIgNgHIgrAMIgEgPIhNArIAFgeIhnBGgANVi9QgIgIAAgLQAAgLAIgIQAIgIALAAQALAAAIAIQAHAIAAALQAAALgHAIQgIAIgLAAQgLAAgIgIgANfjdIgBABIgBAAIgBABIAAACIgCADIAAALIACgBQAHgHAKAAIAEAAIAAgHIgDgCIgHgCIgIAAIAAABgAPAjHQgHgIAAgNQAAgMAHgJQAIgJAKAAQAHAAAFADQABAAABABQAAAAAAAAQABABAAAAQAAAAABABIABABIABACQAIAJAAAMQAAANgIAIQgHAJgLAAQgKAAgIgJgAPNjtIgEAEIgCACIAAAKIADgBIAHgCIAGgBIAFABIAAgNIgBAAIgBAAIgKgBIgCAAIgBABIAAAAIAAAAgAMjjvIAlgkIAcAKIgXAIIgWAjgAPLkUIgMAAIgDgMIACgDQA6gGgBAnIgTAEg");
	this.shape_22.setTransform(4.1,-11.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#222222").s().p("Ah7A/IBygaIA2h1QA0AMAZAxIhAgYQgWBHBMAPIACAAQAFAAADADQACACAAAFIgUgBIgRAcQhdgrhjAsg");
	this.shape_23.setTransform(-72.5,38.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#101010").s().p("AhKBvIgKAAIAtg4IgLA0QA+gKgbg0QgFgLgNgGQgCgOAbALQARAIAMgHIgcgnIAoANIgsguIBSgZIAQAGQAXADAOgPQhOgyheAoIhWCAQAAgFgCgDQgDgCgFAAIAAgKIBWh2QBNgaBTAKQAaAFAQAVQABAUgTAGQgjAKgmAGQgMgCgMAFQAlAngcArQgiA4g0ATQgFACgEAAQgIAAgJgGg");
	this.shape_24.setTransform(-46.5,39.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#111111").s().p("AhIASQgGgEgEgFQgSgSAIgdIAzALQBCAOA9gWIAKAbIgKAIQgrAngsAAQgjAAgkgVgABAAAIAHgDIiFgFQA5A1BFgtg");
	this.shape_25.setTransform(-35.6,-11.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#030303").s().p("AhvAvQgDgCAAgFIDbhYIAJAAIjZBiQgGgBgCgCg");
	this.shape_26.setTransform(-56.5,-65.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0A0A0A").s().p("Ak8KeQAAgFgCgDQgDgDgFABQgsgtAMhCQACgPAAgPIBViLQAvgjAEg3IABgGQCHiBC8gbQAYgFABgaQABgfgLggQgJgcgDgcQhLAjgOhIQgEgZABgZQAAgOgIgKIgKAgQglg6A4g5QACgCACgEIgkgHIAjgbIgKgZIAXgMIAaAcQAbgDALgdQACgGAEgGIAKAAQgZA7gyApIgPAKIAUAfIAYAPIAQgiIAUATIgVBVIgJgkQgvAZATA5QACAHAEAGQAIAEAJgEQAWgKAPgUIACgCQA9BcghBbQgEAKgNACQi1AiiOB1IgKBGQiYBkAxCkQAKAeAfAKQBnAhBug6QBFgmBOgMIAKAAQAAAFgCADQgWASgugGIAAAKQhKAphUAVQg2AOg4AEgACspqIAAgKIC0hGQAFgBADADQACADAAAFIi0BGIgKAAg");
	this.shape_27.setTransform(-63.3,-8.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#2E2E2E").s().p("AgtAKIgEgOIBKgIIAZAIIgBABQgjAQggAAQgOAAgNgDg");
	this.shape_28.setTransform(-114.9,-55.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0B0B0B").s().p("AL7I3QgJgWgFgZIBQB9IAAACQgtgdgVgzgAs5pgIgDgeQAsgWAoAlIAGAPIgUAAIAAAKIgnABg");
	this.shape_29.setTransform(-8,-7.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#151515").s().p("AgwgPIBhAMIgBACQgZARgWAAQgaAAgXgfg");
	this.shape_30.setTransform(116.9,89.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#191919").s().p("AgegMIgCgFQAygOAPAvIgJACQgMADgJAAQgcAAgFghg");
	this.shape_31.setTransform(97.6,91.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#121212").s().p("ALLA6QASgQADgYQAIg2AegBQgMBNgsAlgAsFAwIATgIQBKggAohDIAUgRIACACQgrBehrArg");
	this.shape_32.setTransform(32.5,52.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0D0D0D").s().p("AJYHiQAWgDAQgPQAhghAagXIgDAWQgcA4g9ALgAMCHiQBHgBgnggQgpghAxgYIAKAAIgUAUIAcAzQADALgIAKQgJAKgOgCIgKABIgJABQgMAAABgMgAn/G8QgCgCgFAAIAAgKQApg/AQhLIASAXIgFgjQAyAdg1AkQgHAFgBADQgSA6gfAnQAAgFgDgDgAsAmkIgFgBQAigQg7AFIgUABIgFAAQAtgXgygCIAAgKQBHgfBDACIg6AnICKALIhYAdIAoAAQAAAFgCABQgIAEgKAAIhagOg");
	this.shape_33.setTransform(38,5.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#0C0C0C").s().p("AMkHQIgEgdQiVAQiSAAIgcgJQgkgLgagbQAEAAADgCQADgDgBgFIBHAoQATgBAUADQBSAMBOgLQCQgRgbiXIAOgPQAFAAACADQADACAAAFQgEAegGAeQgBADgDACIgHAFIAACCIgKAAgAqPjDIA4gQIgKgSIhMgDIggAFIgagKIgCgvQAjgxBYAKQAUArANAnQABAEAEADIAAAiQgYAKgTAAQgPAAgNgFgArekcIgDAsIAoAIIgRgSIAZgTIADgcgAqEjsIgLgMIAGgQIAaADIAGgoIgFgDQgQgKgNALIgdBAIAkADgAsomHQARgoghARIgKAAIAAgKIBHgnIgJAoIASgBQgVAYgfAKIgBABQAAAAAAgBQgBAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_34.setTransform(30.5,2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#070707").s().p("Au8EiIBMhOIAMAKIgTARQgrAYgRAtgAKjEgQgDgDAAgFQBQgtA7hCQALgOAKgOQAFgBADADQACADAAAFIhHBPQgkAng1AVQgFAAgCgCgANKjwQgxgEgOgrQgCgFgFgFIgKgKQAfAIATAVQAjAnA5gXQANgFAOgEQAGgCADgGQAMgWAFAYQAAAFgFAEQgeAeg5AAIgXgCg");
	this.shape_35.setTransform(9.7,6.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F2F2F2").s().p("AAAgBIAAACIAAABg");
	this.shape_36.setTransform(106.1,-54.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#090909").s().p("AG3EaIAAgKQAsgigQg/IBSgNIAAAKIg7AKQAFAogPAjQgJATgWAGIgKAAgAkYCaQhSg/hhgxIAAgKIAKAAQAGAAADACQBKAtBNArQAFAAABgBQARhbBNgcQABAKgEACQgdALgNAYIgKAQIgJAPQgSAiAXAcQgCAVgLAAQgIAAgLgJgAoij4QgCgDgBgFQBRAcA2gqQAWgSgCALQgHAYgcAEQgcAEgMATIgPABQgqAAgUgXg");
	this.shape_37.setTransform(75,16.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F7F7F7").s().p("AhCgNICFAFIgHADQggATgcAAQgjAAgfgbg");
	this.shape_38.setTransform(-35.2,-11);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#0F0F0F").s().p("AF4LcQgRgNgNgQQghgmgKg2IBdCFgAmMp9IApgoQAFAXAIgVQACgCAFAAIBvg/QAJgCAJgBQASgBgDAcQgEAxAUgoQAFAAACADQACACABAFIgmAvQgSgQAHgeQAEgNgHgOQhQA7hXAdIgEAAQgDAAgFgCg");
	this.shape_39.setTransform(32.7,-14.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#131313").s().p("AiXA0QgDgDgEABIAAgKIDZhiQAKATAXgRQACgCAGAAIA7AAIgxBDQgFAAgCADQgIAUgFgXIAqg2IkZBpQAAgFgCgDg");
	this.shape_40.setTransform(-12,-83.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FBFBFB").s().p("AhuLAIAAAKQAAAFgCAEgApGKEIACgKIAAAKIgCAAgABEqiIg8AAIAAgKQAygRAtgVIAbA3IhwA/gAHCp/IAAg8ICFA8IgtgFIAAAmg");
	this.shape_41.setTransform(-2.9,-21.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#767676").s().p("AhjAFIAAgDIDGAAIAAADgAhjACIAAgFIDGAFgAhjACg");
	this.shape_42.setTransform(65,-115);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#080808").s().p("Ai9AwQA2gdA2gYQA5gbA5gOQBMgTBRAPQAAAFgDACQgCADgGAAQhggahYAqIgxAYQgtAVgxARIAAAKQgGAAgCACQgLAIgHAAQgJAAgGgKg");
	this.shape_43.setTransform(13,-94.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#4E4E4E").s().p("AgFADIhbgBQgHgCgFgDIDZAAIAAAFIAAADgAgFADIBygBg");
	this.shape_44.setTransform(44,-115);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FDFDFD").s().p("A28FRIAAgVIANAOQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAAAABIgBAFIgKAAgAWYkjIARgGIAGgjIALgEIADAtg");
	this.shape_45.setTransform(-1,-64.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#171717").s().p("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");
	this.shape_46.setTransform(-1,-1.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#888888").s().p("AivAEQgPgEgJgHIGPAIQiqAAipAGIgHABQgRAAgMgEg");
	this.shape_47.setTransform(104,-112.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FCFCFC").s().p("AgCgKIAJAGIgOAPg");
	this.shape_48.setTransform(79.9,-78.6);

	this.instance = new lib.Whenisthegame();
	this.instance.setTransform(61.4,-48.5,0.763,0.763);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(3,1,1).p("AWxxkIpAABIh/gBIjIAAIh0AAIhbAAIovAAIi4AAIpEAAQgDAAgDAAInyAAAXHRvIAByLIAAhAIABv+A3CR2IA0AAICbgBIAeAAICLAAIHKAAIAiAAIDXAAIA8AAIB+AAIAlAAICYgBIEtABIA/AAICbAAIBKAAIF8AAIAxAAIA8AAIAyAAIBZAAIBqAAIBfgBAWUR1IgWgBAWZR0IgbAAA3Ix1IAAARIAAHYIAAFYIAAOuIAAAsIAAFwIAAAzIAAAt");
	this.shape_49.setTransform(-0.5,-2.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#009900").s().p("AS8RtIgxgaIgBgDIgCgPQgEgPACgPQACgLAJgHQA2gKA1gOQBagaghhYQgCgGgEgFIgIgLIgDgBQhSgPhHgmIAVinIBNgfIAYAlIArgpIAEAGIAGAJIAFAHIAEAGIAJAKQAJAHAKACQAHACAEgBIAPgsIAPgDIAWAlIAEAEIAQAXQAQDWgDDXIiaAOgAirRkQgbgrAkgeIADgCIABgCIgdjuQAtAKAfggQAKgLgDgRIgBgEIgdgMIA1gpIAyAyIAgglIANAHQAJAIACAIQAZBJAEBTQADBQgEBQQgCAwAoAHIAJAPIgCADQg2AEg1ACIiYAAgAxDRtIhfgGIABgXIgMgFIAFgZIAMgFIBqAvIgDglIgWgTQCEgxCRAMQAJgKgTgLQhyhCiNADIEshaQhwgfhyAFQhZAEhaAaIBzhZQAcAcAjACQALABALgCQAdgkAoAHIAIAOIAsgrIBGAvIAqg5IAUA+IAkgsIAuAkQgxCYArCVIAUAFIADARIAKAHIgDAYgAzsRtIg6hCIgiAuIgcADIgRgvIg7ArIgRgWIAAg0IAJj0IAlADIA8h2QAXBUgDBgQCHhdCbg5Ii0CgQAHADAGgBQC6gnC/ARQiMAxiWAfIAJATQB1AOB0AbIAmAKQgTAMgXgEQiIgThhBMQgpgQgqAMIAAABQAKAogZAggA0sMXQgEhRgThHQhFAxgYBRQgcgvgFg0IAAgsQACgSAEgTIA7AgIgCiEIA3BYIAfgHQAFANAWAGIBYhPIgmB3QAsgmAigxQAGAMgBAOQgDA1AoASIBQgoIhKBgIAEAYQhzAUhVBQQgGgOgBgOgA2nrZIgPgOIgFmCIGaAAIAJAFIBJgIIAGAAQBEAJBFABQCuADCrAKIAIARIgDAFQgEAGgIADQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgkgMglgCQgtgDgBAeQAAABAAAAQAAABAAAAQAAAAAAABQABAAAAAAIAaAQQAdATAJAgQhAgPhBgMQhEgNgmAPIAQAYQAeAugGAoIgRgPQgagTgfgHQgYgHgWgNQgNgIgLAHQgoAYAYA6IhagoQgRAGgIANQgGAKgCAKQgGAdgWASIgCgCQgIgJgEgOQgEgMgFgLQgLgYgZgGIAABSQgLAHgNAGQgKAFgMADQgeABgXgVIgBBMQgJABgIgFQgfgOgeADQgkAFAEArIhYhJIAOBBIgrAggASTtQIg1hbIhXC+QgOgHgCgSQgJheAThbQACgLgGgJIjLDLIgMgGQAZhdA6hOQAWgeAKgkQhqAFheAtQgeANgggJIgIgEQBXhIBsggQAUgFAFgVQhdALhdgBQgSAAgQgKQBYgfBdALIATAAQAJAIAOAEQAPAFAWgBQCqgGCqAAQBdgFBeADQATAAAOAMQAJAxgTAoIgeA9IhSgQIAfBxIh5hDQgOAGADAQQASBJgFBLQg3gmgjg9g");
	this.shape_50.setTransform(-1.2,-1.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#C6FFFF").s().p("A2yGYIgGgGIAAlYIAAFYIgPgOIAAlKIAPAAQA1gjAvgjIAQAMQACAGAEAHQANAXAUgKQgCgsAigXIATALIBOAAIgOg3IADgCQBWgIACBOIgBACQhngJhMAnIAFAXIgHACIgEgMQgRAmAKAqQARBKAEBMQADAoAOAoIi7BTgAUyDGQgCgVgKgQQgfg3g+gEIgpgfQg7gMg3AJIjmhyICgiuQAMByARByQBEhTAdhoQA2BrBkBIQAHhWAChUICDBQIggh8IA2AOIAlAAIAAHKgArOg8IjnAUIgniWQBGAVA3ArQgGg2gLg6IAAgCIALAKQBgAXBHBDIguiRQBMgNBRAoQAtAWAvAGQgRhGg6guICGgDIgSgpQAmgPAogHQBEgNBJAJIAqAEQB9ALB9AAQE0ABE1AGIglAWQBJArBkgeQiKAvg3BzQBRgWBTglQAxgXA2gBIAUAAIhuDcQiXguiOhDQhRgnhMgwQhRgOhMATQg7AOg5AbQg2AZg0AdIjbBkIAAAKIi0BEIAAAKIjdBaIgbAJgAjFmcIi3AAg");
	this.shape_51.setTransform(-2,-73.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#171717").s().p("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");
	this.shape_52.setTransform(-1,-1.3);

	this.instance_1 = new lib.Thegameisat300PM();
	this.instance_1.setTransform(-34.9,-47.6,0.797,0.797);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(3,1,1).p("AWxxkIpAABIh/gBIjIAAIh0AAIhbAAIovAAIi4AAIpEAAQgDAAgDAAInyAAIAAgRAXHRvIAByLIAAhAIABv+A3CR2IA0AAICbgBIAeAAICLAAIHKAAIAiAAIDXAAIA8AAIB+AAIAlAAICYgBIEtABIA/AAICbAAIBKAAIF8AAIAxAAIA8AAIAyAAIBZAAIBqAAIBfgBAWZR0IgbAAAWUR1IgWgBA3IxkIAAHYIAAFYIAAOuIAAAsIAAFwIAAAzIAAAt");
	this.shape_53.setTransform(-0.5,-2.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#00CC00").s().p("AAKCKIC7AgIADASQguAbg2AFIgLABQhVAAAGhTgAjtCoIAKhJQAIg7gPg2IgCgLQgGgZgBgXQgChLAxg4QADgBACABQBWAtBhgHQBxAGBfg4QAIASAGATQAGAVALASQATAigKAoQgcAQgegFQi1gTiGBUIAFAMIAAAYQAAATANAMQAwAsA6AhQADAUgFAVQgDALgKgEQgXADgWAAQhWAAhSghg");
	this.shape_54.setTransform(37.9,84.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#666666").s().p("Ah/BpQBSibCjg/IAKAHIgfBJQgcBBADBHQhfgFhhAQg");
	this.shape_55.setTransform(77.7,74.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#6666CC").s().p("AAfCrQgWhpBChNIgEAAQgPAGgLgEQghgHgJgfQgDACgBAEQgDAOgIAIQhkBoh1BWQgBhogshdIBpAcIgHgTIhdgoIABheIAOgFIAAgLIA4ghIAsANQAbAbAkALIAbAJQCRAACVgQIAEAeIAEAGQBACcgwCmgAC6hCQgEAYgSAQIADASQAsglANhPQgeABgIA5gAiqgaIAUAMIheiEQAPBLA7AtgAh8gnIAAgCIhQh+QAQBXBAApgACPhfQgQAQgXACIAFAPQA9gLAcg3IAEgXQgaAYghAgg");
	this.shape_56.setTransform(87.5,61.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#00CC33").s().p("ADXAGQhdgGhdgCIisgEIHIAAQgEAGgIAAQgaAFgbABIgLABIgWgBgAk2gBIgCgFIAfAAIgIAFIgVAAg");
	this.shape_57.setTransform(-96,112.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFCC99").s().p("AiZLKIDVAAQgLANgSAAIgoABQhLAAhFgOgAB4LKIgggGIgBgSICigNIgDAlgAA8LKgAiZLKIgSgsQAQAJASAHQBjAoBpgaIgHAOgAEcF3QgNgFgLgIIgNhmIAwg7QAPAigPAiQgQAlADAjIAtAJQgEAMgLAIQgIAGgKAAIgKgBgABhEsQhjgChbgnQgSgIgIgOQgcgugEg9IAAgKQAuAGAWgTQACgCAAgFQANAJANgFQA2gSAgg4QAcgrglgoQAMgFAMADQAmgGAjgLQATgFgBgVQgQgVgagFQhTgJhNAaIhWB1IgCAKQhMgPAWhHIBAAYQgagxgzgMIg4B1IhzAaIASASQBkgsBfArIARgcIAUABIBWh/QBegpBOAyQgOAQgXgEIgQgGIhSAZIAsAvIgogNIAcAmQgMAHgRgIQgbgKACANQANAHAFAKQAbA0g+AKIALgzIgtA3QhOAMhHAlQhuA6hnggQgfgKgKgfQgxihCYhlIAKhGQCOh0C3giQANgCAEgLQAhhag9heIgCACQgPAUgWAJQgJAFgIgEQgEgGgCgHQgTg5AvgZIAJAkIAVhWQANAmAlACQgTgtARgxQBegeBfAdQAiAggGAwQA4AvgNBHQgGAfgTAWQhBBPhqgnQAoAxBMgZQAsAmA0AVQAgANAiAAQBwACAoBcQheAUgoBaQgbA9BNgHIAFAjIgSgXQgPBJgqA/IgCATIhiC/Qg3AKg3AAIgKAAgACNA+QgpBEhJAgIgUAIIAFAPQBrgqArhhIgBgCgAmRgwIAJASQARgtArgZIATgQIgMgLgAASn9QAEAFAGAEQBVAyBKhEIAKgKIgJgbQg9AWhEgOIg0gLQgHAdASAUgACYplIAKASIg4AQQAeANApgSIAAgiQgEgDgBgEQgNgngVgrQhXgKgkAxIADAvIAaAKIAfgFgAE4C8IgPgSIAehGQAfgnASg6QABgDAHgCQA2gkgzgeIAegvQALADAGAIQAPATAGAVQAXBKAdBGQhOAwhLA0QgOAKgQAAIgMgCg");
	this.shape_58.setTransform(-45.8,40.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#0B0B0B").s().p("ALtIIIBQB9IAAACQhAgpgQhWgAs5pgIgDgeQAsgWAoAlIAGAPIgUAAIAAAKIgnABg");
	this.shape_59.setTransform(-8,-7.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFCC33").s().p("AguM1QgDgOABgOQACgjAjgMIgJgUIAFgDIAGgDQACgCAAgEIgBgIQgUADgPAPQgYAagdgTQA+gdAogrIggACQAPgOAEgTQADgQgEgJIhOAhIAXhTIA4gJQhCAFAHhEIAIAFQAmAVAqgGQAAAPgCAPQgMBCAsAsIgoCvQgKALgLAEIgIABQgQAAgNgLgAAXHmQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBAAAAABQhAAPgLg5IBcgSQgFgCgEACQhgAKAMhVIBdANIhSgiQgEgIgBgIQgBgPANgHQAGgBAFADQAqAYAvgWIhogXIgEggQA3AaAygdIABgBIhqgQIAIguIBLAKIgBgCIgCgDIgDgEQgGgGgJgCQgHgBgHADQgXACgVgMIgCgwIAEgDIADgCQAGgBAFAAIAWABQAKABALAIQAHAFAGgHIhWghIADglQANgDANAFQAiAPAXgNIgugHIgLgFQgQgJgIgSQgEgJACgFIADgBIADgBIAKAEQARADARABQAhAGALgWIgBgBQgJgHgJADQgXAFgXgIQgmgNgEgpIAaAIQATAEATgCQAaAAANgUQgIgKgSAGQgRAHgTgCQgPgBgKgLQgWgYAGgjIB2AKQATA/gFBDQgGBSAIBRQALBmADBnIAKAAIAPALIhVCLgAAIibQhegCAKhkIAWgKQAYgFAIAUQAPAnANAiIAOgeIABA0QgDACgFAAIgFAAgAgjq/IAJgJIhDgBQgCgDABgFIACgFIAEgFQAIgIAMgGIglgIIgBgYIATgGIgEgdIAzBBIAhhUIASCDg");
	this.shape_60.setTransform(-101.3,-6.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#CCCCCC").s().p("AgDHcIAQgOIgEgMIgagMIgRAuIi7gQIAkgmQgugHguAKQh2Aeh2hLQCLg1CMAxIgKgoQAugQAZAiIAHgTIAPAHIgVA7ID7gBIgFg2QAogbAkAZIgaAiIAXAEIAHgGIAigKIgEgUQCsAPCeBBQidA/imAAQhgAAhigVgACTG3IACAFQAHAvAxgPIAJgCQgMgmgiAAQgKAAgLADgAGmGsIABgCIhjgMQAoA6A6gsgAlaGVIABgBIhjgUQAdA1BFgggAC8nIIgMglQBMgMBPAhIAEAQQgjALglAAQglAAgmgLg");
	this.shape_61.setTransform(79.5,46);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#999999").s().p("AChNsIlUgKIgLhdIGiAeIgBA6IgSAPgAh/L9QhFgKhEgNIgtgFQhGgFhCgZQgdgLgegJIgFgFIgFgLQgDgHgBgHQgCgHAAgJIAAgTQAMAIANAFQBXAoBgAPICkAWQBLAMBMgDQBiAIBhAEIAaAAQBHgBBGgNIA2gIQArgCAkgUQAPgHAIAJQgBAGABAGQAAAPgNAFQhXAmhlALQhUAEhUAAQiNAAiKgLgAE6kZIgigLQAAgFACgFQACgEACgDQAGgIAIAAQADgFAEgEIAFgDQAEgCAGAAIAIgEIAAgCIAFgCIAAgBQAPAagPAjIgCACQgEACgEAAQgGABgFgHgACoscQAugbgZgoIAagHIANAjIgYAoIAAAQQgDAhgRAagAFdrhIBig1IANAGQgfAXgkAWQgOAHgLAAQgKAAgJgFgAB2sSQAtgegZgxIAHgFIATgGIABAkIALAPIgZAsIAHAQIgYAhgAAXr7IgCgDQgCgwgngVQArgNAXArIgIAsgAEMsSIAjgtQAVgTAYgLQAHgCAIACIgFAQIhYBAg");
	this.shape_62.setTransform(79.1,24.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#F3D28D").s().p("ACYLVIh0gKIAGgPIgHgZIABgEQBnAOBhgTIAIAgIgSAbgAg/LVIhigIIAFggIATgNIgagLIgCgKIC8AgIAAAEQAEAegcAIgAj7IOIgDgFQhQjABGjQQglhAgEhKIAsgEIACgHQgBgbgOgWIATgKIBFCUQgSBLAeBBQgjAxgHA7QgCAbAGAbIACALQABAXAGAYQADA6gTAzIgGgTQgQA0AFA2QglgiAWg5gAhdD3QgfgKgfgGQgDgrgHgsQgEgfABggIADgoQghgOgNgfIgBgEQgMgxgLgyIBugKIDgDVQARAPAXADQASADARgBQAEAAAEgCQAagGAZgHIgFBuQhKAthXAGQgYADgYAAQg5AAg3gSgACrBeQiAgfhNhrQgUgcgegRQhAgnARg5IAggIIAQgHIAcANQBfAxBSA/QAcAWAEgiQgXgcASgiIAJgPIAKgQQANgYAdgMQAEgBgBgKQhNAbgRBcQgBABgFAAQhNgrhIgtQgDgCgGAAQgbgOgdgNQhZglhZAgIgPgSIAeg8QAdgZAigLQA0gNAugRIAJgWQAYgJAagBQBegCAehSQgDAAgCACIg9AwQg2Awg9gkQhRgzAChjIAGAAIA2gUQg2gTgUgzIAXgaIARAaIBDgwIgDAXIA8geIAPAXIATACIAQgbIAjAtIAMgXIAbAFIgLAeIAagDQAaAagMAlIgXAlIArCPQB7AuBsBCIAJCAIg8A8QAECJh0BNQgMAJgOAAQgHAAgHgCgAiOnfQAYAaA1gEQAMgTAcgEQAagEAHgYQACgLgUARQg2AqhRgbQABAFACADgAhkoRIATANIAYgRIgJgHIgRAIIgCg1gAg5p6IgSAHIABARIBXgVQgFgNgSAAQgSAAgdAKgAk9g4IADgnIAJgCIApg8IgDgTIgRgBIgMgMIg/ARQABgOgPAEIgJADQBjhBBjA5QABBShWgPIgkA1IAVAeg");
	this.shape_63.setTransform(34.6,39.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#0F0F0F").s().p("AF4LcQg7gtgOhMIBdCFgAmMp9IApgoQAFAXAIgVQACgCAFAAIBvg/QAJgCAJgBQASgBgDAcQgEAxAUgoQAFAAACADQACACABAFIgmAvQgSgQAHgeQAEgNgHgOQhQA7hXAdIgEAAQgDAAgFgCg");
	this.shape_64.setTransform(32.7,-14.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#CC9966").s().p("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");
	this.shape_65.setTransform(0,-6.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#009900").s().p("AS8RtIgxgaIgBgDIgCgPQgEgPACgPQACgLAJgHQA2gKA1gOQBagaghhYQgCgGgEgFIgIgLIgDgBQhSgPhHgmIAVinIBNgfIAYAlIArgpIAEAGIAGAJIAFAHIAEAGIAJAKQAJAHAKACQAHACAEgBIAPgsIAPgDIAWAlIAEAEQAPAIABAPQAQDWgDDXIiaAOgAirRkQgbgrAkgeIADgCIABgCIgdjuQAtAKAfggQAKgLgDgRIgBgEIgdgMIA1gpIAyAyIAgglIANAHQAJAIACAIQAZBJAEBTQADBQgEBQQgCAwAoAHIAJAPIgCADQg2AEg1ACIiYAAgAxDRtIhfgGIABgXIgMgFIAFgZIAMgFIBqAvIgDglIgWgTQCEgxCRAMQAJgKgTgLQhyhCiNADIEshaQjGg4jPA8IBzhZQAkAlAxgIQAdgkAoAHIAIAOIAsgrIBGAvIAqg5IAUA+IAkgsIAuAkQgxCYArCVIAUAFIADARIAKAHIgDAYgAzsRtIg6hCIgiAuIgcADIgRgvIg7ArIgRgWIAAg0IAJj0IAlADIA8h2QAXBUgDBgQCHhdCbg5Ii0CgQAHADAGgBQC6gnC/ARQiMAxiWAfIAJATQCJAQCGAjQgTAMgXgEQiIgThhBMQgpgQgqAMIAAABQAKAogZAggA0sMXQgEhRgThHQhFAxgYBRQgcgvgFg0IAAgsQACgSAEgTIA7AgIgCiEIA3BYIAPgMIADgQIAqhUIAIAYIgcAtQgaAsAsALIBYhPIgmB3QAsgmAigxQAGAMgBAOQgDA1AoASIBQgoIhKBgIAEAYQhzAUhVBQQgGgOgBgOgA2nrZIgPgOIgFmCIGaAAIAJAFIBJgIIAGAAQBEAJBFABQCuADCrAKIAIARIgDAFQgEAGgIADQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgkgMglgCQgtgDgBAeQAAABAAAAQAAABAAAAQAAAAAAABQABAAAAAAIAaAQQAdATAJAgQhAgPhBgMQhEgNgmAPIAQAYQAeAugGAoIgRgPQgagTgfgHQgYgHgWgNQgNgIgLAHQgoAYAYA6IhagoQgRAGgIANQgGAKgCAKQgGAdgWASIgCgCQgIgJgEgOQgEgMgFgLQgLgYgZgGIAABSQgLAHgNAGQgKAFgMADQgeABgXgVIgBBMQgJABgIgFQgfgOgeADQgkAFAEArIhYhJIAOBBIgrAggASTtQIg1hbIhXC+QgOgHgCgSQgJheAThbQACgLgGgJIjLDLIgMgGQAZhdA6hOQAWgeAKgkQhqAFheAtQgeANgggJIgIgEQBXhIBsggQAUgFAFgVQhdALhdgBQgSAAgQgKQBYgfBdALIATAAQAJAIAOAEQAPAFAWgBQCqgGCqAAQBdgFBeADQATAAAOAMQAJAxgTAoIgeA9IhSgQIAfBxIh5hDQgOAGADAQQASBJgFBLQg3gmgjg9g");
	this.shape_66.setTransform(-1.2,-1.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#171717").s().p("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");
	this.shape_67.setTransform(-1,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_47},{t:this.shape_43},{t:this.shape_44},{t:this.shape_42},{t:this.shape_48},{t:this.shape_21},{t:this.shape_41},{t:this.shape_20},{t:this.shape_39},{t:this.shape_6},{t:this.shape_22},{t:this.shape_5},{t:this.shape_37},{t:this.shape_14},{t:this.shape_45},{t:this.shape_15},{t:this.shape_36},{t:this.shape_35},{t:this.shape_11},{t:this.shape_34},{t:this.shape_7},{t:this.shape_33},{t:this.shape_32},{t:this.shape_10},{t:this.shape_31},{t:this.shape_18},{t:this.shape_30},{t:this.shape_29},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_17},{t:this.shape_28},{t:this.shape_13},{t:this.shape_40},{t:this.shape_27},{t:this.shape_26},{t:this.shape_9},{t:this.shape_8},{t:this.shape_25},{t:this.shape_38},{t:this.shape_24},{t:this.shape_23},{t:this.shape_12},{t:this.shape_49},{t:this.instance}]},3).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_47},{t:this.shape_51},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_48},{t:this.shape_65},{t:this.shape_41},{t:this.shape_20},{t:this.shape_64},{t:this.shape_22},{t:this.shape_63},{t:this.shape_5},{t:this.shape_37},{t:this.shape_14},{t:this.shape_45},{t:this.shape_62},{t:this.shape_36},{t:this.shape_35},{t:this.shape_61},{t:this.shape_60},{t:this.shape_28},{t:this.shape_13},{t:this.shape_59},{t:this.shape_40},{t:this.shape_27},{t:this.shape_26},{t:this.shape_34},{t:this.shape_33},{t:this.shape_9},{t:this.shape_58},{t:this.shape_25},{t:this.shape_38},{t:this.shape_3},{t:this.shape_32},{t:this.shape_24},{t:this.shape_23},{t:this.shape_12},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_31},{t:this.shape_30},{t:this.shape_54},{t:this.shape_2},{t:this.shape_53},{t:this.instance_1}]},21).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151,-117.9,300.2,231.8);


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
(lib.adverb_Scene6 = function(mode,startPosition,loop) {
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
		
		 window.open ("adverb_Scene7.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("adverb_Scene5.html","_self");
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
	this.shape.graphics.f("#FF6600").s().p("AgnBpQgGgGAAgIQgBgJAGgIQAGgKALAAQAKAAAFAHQAEAGAAAIQAAAIgEAHQgGAKgLAAQgHAAgHgFgAgfAuQgFgFAAgIQAAgLARgNIAegVQATgOgBgKQABgNgNgLQgNgLgMAAQgIAAgMAIQgOAIgFAAQgIAAgGgGQgFgGAAgHQAAgNAYgMQAUgKAOAAQAbAAAZAWQAXAWAAAdQAAAcgcATIgWAQQgOAKgGAIQgGAHgIAAQgHAAgHgGg");
	this.shape.setTransform(312.7,357.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6600").s().p("AAcA+IgFgcQgCgPAAgNIABgKIAAgNIABgEIAAgGQAAgMgFAAQgMAAgKAPQgLAPgGAWIgBALIgBANIAAAMIgBAMQgBAIgFAFQgGAFgHAAQgJAAgFgFQgGgFABgIIgCgMIAAgMIACglIACgjIgBgMIAAgNQAAgIAFgEQAGgGAIAAQASAAABAWIAAABQAUgUAUAAQAaAAAKAVQAHAPgBAdIAAAJIAAAIQAAAKAEARQACARAAAKQAAAIgGAFQgFAFgIAAQgRAAgBgRg");
	this.shape_1.setTransform(297.6,360.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6600").s().p("AguA6QgWgRAAgfQgBghATgYQAUgaAgAAQAYAAAPAIQAWAKgBAVQAAAPgQAMQgIAFgYAIIgsAVQAHAHAKADQAJAEAKAAQASAAANgIQALgGAHAAQAOAAAAANQAAAQgWAKQgUAIgVAAQgfAAgVgQgAgSggQgIAJgGARIAegNQARgJALgHQgJgFgPAAQgLAAgJAIg");
	this.shape_2.setTransform(282.1,360.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6600").s().p("AAfBkQgDgMgDgUQgCgTAAgMIAAgLIAAgKIAAgMQgBgFgGAAQgPAAgKAMQgHAHgLATQAAAygEAKQgGALgLAAQgIAAgGgFQgGgFAAgIIACgHQABgDAAgiIABhZIAAgFIABgVIgCgNIgBgMQAAgIAGgFQAFgFAIAAQAOAAAEAOQADAIAAARIgBAcIgBAbQAKgKAMgFQAJgFANAAQAXAAALANQAHAKACASIACAiIACAbIAFAbIABAFQAAAHgGAFQgGAFgIAAQgOAAgEgNg");
	this.shape_3.setTransform(266.7,357.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF6600").s().p("AAbBqQgHgFgBgIQgGgQgCgKIgPhVQgIAZgLAWQgPAhgFASIABAHQAAAIgHAGQgHAEgIAAQgKAAgGgFQgHgFAAgKIgFgQIgOhAQgJgegWg8IgBgHQAAgIAGgFQAGgEAIAAQAKAAAGAIQAEAFAEANQAOAmAQBIQALgbAMgiQAJgdAGgNQANgeANAAQANAAAGAPQADAHADASIAEAcQACAXAPA8QAOghAZg+IAHgZQAEgQAGgJQAGgJALAAQAJAAAFAFQAGAFAAAIQAAADgFAMIgGAOIgHAXQgIAUgRAlQgRAngIATQgFAOgFAJQgHALgNAAQgIAAgGgEg");
	this.shape_4.setTransform(243.8,357.9);

	this.instance_2 = new lib.Main();
	this.instance_2.setTransform(277.5,196.8,1.289,1.289);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.btn_menu}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(284.2,201.8,537.1,397.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;