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
		{src:"sounds/averbtenseshowsthetime.mp3", id:"averbtenseshowsthetime"},
		{src:"sounds/bgmusic.mp3", id:"bgmusic"},
		{src:"sounds/pad_participle.mp3", id:"pad_participle"},
		{src:"sounds/pad_past.mp3", id:"pad_past"},
		{src:"sounds/pad_present.mp3", id:"pad_present"},
		{src:"sounds/participlebaseballbatisbroken.mp3", id:"participlebaseballbatisbroken"},
		{src:"sounds/pastalisonbaseballgameswerereadytoplay.mp3", id:"pastalisonbaseballgameswerereadytoplay"},
		{src:"sounds/pastparticiplevisitingteambeaten.mp3", id:"pastparticiplevisitingteambeaten"},
		{src:"sounds/pastparticiple.mp3", id:"pastparticiple"},
		{src:"sounds/presenttense1.mp3", id:"presenttense1"},
		{src:"sounds/presenttensebaseballgamebeginningnow.mp3", id:"presenttensebaseballgamebeginningnow"},
		{src:"sounds/presenttenseteamsareready.mp3", id:"presenttenseteamsareready"},
		{src:"sounds/space_blip.mp3", id:"space_blip"}
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



(lib.s2_s3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_8 = function() {
		/* _root.v1b.start();*/
	}
	this.frame_13 = function() {
		this.gotoAndPlay(10);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(8).call(this.frame_8).wait(5).call(this.frame_13).wait(13));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgDAkQgCgCAAgDIgBgFIAAgEQAAgDACgCQACgDACAAQAIAAAAARQAAADgCACQgCADgDAAQgCAAgCgDgAgEgTQgDgCAAgDIgBgDIAAgDQABgEACgCQACgCADAAQAHAAAAAOQAAADgCACQgDADgCAAQgCAAgCgDg");
	this.shape.setTransform(-117.5,-36.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgZAiQgMgKAAgSQAAgSAJgOQALgPARAAQAMAAAIAEQAKAGAAALQAAAIgJAGQgDADgNAEIgcAOQAEAHAHADQAGADAHAAQAFAAAIgCQAJgDADgEQACgEADAAQADAAACACQACACAAADQAAAJgOAGQgMAFgLAAQgQAAgKgIgAgPgTQgGAGgDANIAYgJQAMgHAGgFQgHgGgLAAQgJAAgGAIg");
	this.shape_1.setTransform(-124,-35.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgIA4IABgcIABgcIAAgbIABgdQAAgHAGAAQAHAAAAAHIAAAdIgBAbIgBAmIAAASQgBAIgFAAQgHAAgBgIg");
	this.shape_2.setTransform(-130.7,-37.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgdA/QgCgCAAgEIAAgfIAAgdIgBgfIgBgQQAAgGACgDQACgFAEAAQADAAADACQACACAAADIgBADIAAAEIANgHQAFgCAFAAQAQAAAHAOQAGAMAAASQAAAPgJALQgKALgPAAQgGAAgKgCIAAAlQAAAEgCACQgCACgEAAQgDAAgCgCgAgGgoIgLAIIABAkQAJADAHAAQAJAAAFgHQAFgFAAgKQAAgOgEgHQgDgHgHAAQgFAAgGADg");
	this.shape_3.setTransform(-137.1,-33.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgGA4QgDgCAAgEIAAgOIAAgOIABgSIAAgQQABgEACgCQACgCADAAQABAAADACQACACAAAEIgBAQIgBASIAAAOIABAOQAAAEgCACQgCACgCAAQgDAAgCgCgAgDgqQgDgCAAgEQAAgEADgDQACgCACAAQADAAADACQADADAAAEQAAAEgDACQgDADgDAAQgCAAgCgDg");
	this.shape_4.setTransform(-143.6,-37);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgVAiQgLgKAAgRQAAgOALgRQALgTANAAQAIABAJADQAMAEAAAIQAAACgCACQgCADgDAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBIgDgCQgFgEgKAAQgGAAgIAOQgHAOAAAHQAAALAHAFQAHAGAIgBQAFABAFgDIAJgFIADgBQADAAACADQACACAAACQAAAHgMAEQgKAGgHAAQgOAAgLgKg");
	this.shape_5.setTransform(-150.1,-35.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgHA4QgCgCAAgEIAAgOIAAgOIABgSIAAgQQAAgEADgCQACgCADAAQABAAADACQACACAAAEIgBAQIAAASIAAAOIAAAOQAAAEgCACQgCACgCAAQgDAAgDgCgAgDgqQgDgCgBgEQABgEADgDQACgCACAAQADAAADACQADADAAAEQAAAEgDACQgDADgDAAQgCAAgCgDg");
	this.shape_6.setTransform(-156.3,-37);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgDA3QgDgCAAgEIAAgJIABgJIgCgrIgRgBQgIgCABgGQAAgEABgCQADgCADAAIAQABIAAgLIAAgJQAAgDACgDQACgCADAAQAGAAABAMIAAAHIAAAFIAAAEIALgBIALAAQAEACAAAGQABAEgDACQgCACgEAAIgDAAIgEAAIgLABIACAsIAAAEIAAADQAAARgIABQgCAAgBgCg");
	this.shape_7.setTransform(-162.5,-36.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgdAkIAAg1IAAgIIABgIQAAgIAGAAQAIAAAAANQAOgOARAAQAHAAADAFQADAEAAAKIAAAGQgBAJgHAAQgHAAAAgHIAAgGIAAgGQgMABgGAFQgHAGgEAKIAAApQAAAHgIAAQgHAAAAgHg");
	this.shape_8.setTransform(-169.9,-35.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAYAnIgEgFIgOAGQgGACgCAAQgSAAgIgKQgIgKAAgUQAAgRANgNQANgOAQAAQAHAAAIAEQALAEAAAGIgCAEIgBAKIAAAPQgBAKACAGIAFANIACAEIAAACQAAADgCACQgCACgDAAQgCAAgEgEgAgMgSQgJAKAAALQABAMAEAHQAFAGAIAAQAGAAAFgCIAIgGQgCgUgBgJIABgIIABgIIgEgCIgEgBQgKAAgJAKg");
	this.shape_9.setTransform(-178,-35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgdA/QgCgCAAgEIAAgfIAAgdIgBgfIgBgQQAAgGACgDQACgFAEAAQADAAADACQACACAAADIgBADIAAAEIANgHQAFgCAFAAQAQAAAHAOQAGAMAAASQAAAPgJALQgKALgPAAQgGAAgKgCIAAAlQAAAEgCACQgCACgEAAQgDAAgCgCgAgGgoIgLAIIABAkQAJADAHAAQAJAAAFgHQAFgFAAgKQAAgOgEgHQgDgHgHAAQgFAAgGADg");
	this.shape_10.setTransform(-186.3,-33.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgEA3QgCgCAAgEIAAgJIABgJIgCgrIgRgBQgIgCABgGQAAgEABgCQADgCADAAIARABIgBgLIAAgJQAAgDACgDQACgCADAAQAGAAABAMIAAAHIAAAFIAAAEIALgBIALAAQAEACAAAGQABAEgDACQgCACgEAAIgDAAIgEAAIgLABIACAsIAAAEIAAADQAAARgIABQgCAAgCgCg");
	this.shape_11.setTransform(-199.3,-36.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgVArQgMgEAAgIQAAgDADgDQACgCAEAAQACAAAEAEQACACAGABIAJABQAFAAAFgCQAHgCAAgFQAAgLgPgDIgGgCQgLgDgEgDQgGgCAAgJQAAgQAPgHIANgFIAPgFIAHgBQADAAACACQADACAAADIABAHIABAHQAAADgDACQgCADgDAAQgEAAgCgDIgCgJIgSAGQgLAFAAAHIAFABQAQAEAIAFQANAGAAAQQAAANgLAGQgJAFgMAAQgKAAgKgDg");
	this.shape_12.setTransform(-207.2,-35.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAYAnIgEgFIgOAGQgGACgCAAQgSAAgIgKQgIgKAAgUQAAgRANgNQANgOAQAAQAHAAAIAEQALAEAAAGIgCAEIgBAKIAAAPQgBAKACAGIAFANIACAEIAAACQAAADgCACQgCACgDAAQgCAAgEgEgAgMgSQgJAKAAALQABAMAEAHQAFAGAIAAQAGAAAFgCIAIgGQgCgUgBgJIABgIIABgIIgEgCIgEgBQgKAAgJAKg");
	this.shape_13.setTransform(-214.9,-35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AggA8QgCgDAAgDIAAgXIABgfIACgfIAAgLIABgLQACgHAGABIAHgCIALAAQANAAAMAKQAOALAAAPQAAATgPAKQgNAKgQAAIgKgBIgBApQAAADgCADQgCACgDAAQgDAAgCgCgAgQgfIgCAfIAJAAQALAAAJgGQAJgHAAgMQAAgJgJgGQgJgGgIAAIgGAAIgEAAg");
	this.shape_14.setTransform(-223.1,-37.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgFAGQgDgDAAgDQAAgDADgCQADgDACAAQAEAAACADQADACAAADQAAADgDADQgCADgEAAQgCAAgDgDg");
	this.shape_15.setTransform(-234.2,-31.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgUA4QgLgGgEgKIAAgDQAAgDACgCQACgCAEAAQADAAACADIAEAFQADAEAFACQAEACAGAAQAHAAAHgFQAGgGAAgIQABgMgJgHQgIgGgLgBQgIgBAAgEQAAgFAHgDIAQgEQAFgCAEgDQACgEAAgEQABgHgGgFQgGgEgIAAQgFAAgFADIgJAFIgFACQgCAAgCgDQgDgCAAgDQAAgGAMgGQALgFAGAAQAPAAAKAHQALAIAAAPQgBATgPAFIgCACQAKADAFAGQAFAIAAALQAAAPgKALQgLALgPAAQgLAAgJgFg");
	this.shape_16.setTransform(-241.2,-37);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AATAlIgCgRIgCgRIAAgFIABgHQAAgRgGAAQgJAAgGAKQgHAJgEANIgBAHIAAAIIAAAHIABAIQAAADgDACQgCACgDABQgEgBgCgCQgCgCAAgDIAAgIIgBgHIABgVIABgWIAAgGIAAgIQAAgEACgCQADgCADAAQAHAAABAKIAAAJQANgRAMAAQAMAAAFALQADAHABAPIAAAIIgBAFQAAAGACAKIACARQAAAEgCACQgCACgDAAQgIAAAAgIg");
	this.shape_17.setTransform(105.9,-10.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgEA3QgCgCAAgEIAAgJIAAgJIgBgrIgRgBQgIgCAAgGQAAgEACgCQADgCADAAIARABIgBgLIAAgJQAAgDACgDQACgCAEAAQAEAAACAMIAAAHIAAAFIAAAEIALgBIAKAAQAFACABAGQAAAEgDACQgCACgDAAIgEAAIgEAAIgKABIABAsIAAAEIAAADQAAARgIABQgCAAgCgCg");
	this.shape_18.setTransform(89,-12.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgZAiQgMgKAAgSQAAgSAJgOQALgPARAAQAMAAAIAEQAKAGAAALQAAAIgJAGQgDADgNAEIgcAOQAEAHAHADQAGADAHAAQAFAAAIgCQAJgDADgEQACgEADAAQADAAACACQACACAAADQAAAJgOAGQgMAFgLAAQgQAAgKgIgAgPgTQgGAGgDANIAYgJQAMgHAGgFQgHgGgLAAQgJAAgGAIg");
	this.shape_19.setTransform(72.8,-10.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgXA6QgCAEgEAAQgDAAgCgCQgCgDAAgDIAAgGIABgGIgBgYIAAgXIAAgWIAAgWQAAgEACgEQACgFAFAAQAGAAAAAHIgBADIAAADIAAASIAAATQAGgEAHgCQAGgDADAAQARAAAKANQAKAKAAASQAAASgLAMQgMANgPAAQgMAAgKgFgAgLgCIgLAFIAAAOIAAAMIAAANIAKAEQAFACAGAAQAJAAAIgIQAHgIAAgMQAAgMgGgIQgGgGgLAAQgEAAgHAEg");
	this.shape_20.setTransform(63.7,-12.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAZAnIgGgFIgNAGQgFACgDAAQgSAAgIgKQgIgKAAgUQAAgRANgNQANgOAQAAQAHAAAIAEQALAEAAAGIgCAEIgBAKIgBAPQABAKABAGIAFANIACAEIAAACQAAADgCACQgCACgDAAQgBAAgEgEgAgMgSQgJAKAAALQAAAMAFAHQAFAGAIAAQAGAAAFgCIAIgGQgDgUAAgJIABgIIACgIIgFgCIgEgBQgKAAgJAKg");
	this.shape_21.setTransform(42.1,-10.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAEAWIgCgSIgCgQIgFAOIgMAfQgCAEgCABQgCAFgFAAQgGAAgGgXQgDgNgCgSIgCgMIgBgLQAAgEACgCQADgDADABQAGAAABAGIACAMIABALIAFAhQAIgWAKgfQACgJAFAAQAFAAADAKIAFAcIAGAcIAFgVIALgpQAAgEAGAAQAEAAACACQACACAAAEIgBADQgFAZgLAeQgCAIgFAHQgCAEgFABQgJgBgFgVg");
	this.shape_22.setTransform(32.6,-10.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgDAuQgCgDAAgDIgCgcIgCgaQAAgIgCgFQgGACgGAGIgJAKIgEAFIgBAMIAAAOIAAAHIABAFQAAADgCADQgDACgDAAQgJAAAAgUIABgOIABgMIgBgMIgBgNQAAgSAIAAQADABADACQADACAAADIgBAGIAAAEIAAAIQAEgIAIgHQAIgHAFABQAMAAADALQAEgFAGgDQAGgDAIAAQANAAAFAOIADAWIAGArQAAADgCACQgDACgDABQgHgBgBgGIgCgZIgDgWIgDgLQgCgGgEgBQgCABgIAEQgIAFgCADIAAAOIADAUIABAUQAAADgCADQgCACgEAAQgBAAgCgCg");
	this.shape_23.setTransform(16.1,-10.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAYAnIgEgFIgOAGQgGACgBAAQgTAAgIgKQgIgKAAgUQAAgRANgNQANgOAQAAQAHAAAJAEQAKAEAAAGIgBAEIgCAKIAAAPQAAAKABAGIAFANIABAEIABACQAAADgCACQgCACgDAAQgCAAgEgEgAgMgSQgIAKAAALQAAAMAEAHQAEAGAKAAQAFAAAFgCIAIgGQgDgUABgJIAAgIIABgIIgEgCIgEgBQgKAAgJAKg");
	this.shape_24.setTransform(5.7,-10.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgZAiQgMgKAAgSQAAgSAJgOQALgPARAAQAMAAAIAEQAKAGAAALQAAAIgJAGQgDADgNAEIgcAOQAEAHAHADQAGADAHAAQAFAAAIgCQAJgDADgEQACgEADAAQADAAACACQACACAAADQAAAJgOAGQgMAFgLAAQgQAAgKgIgAgPgTQgGAGgDANIAYgJQAMgHAGgFQgHgGgLAAQgJAAgGAIg");
	this.shape_25.setTransform(-2.6,-10.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgDA3QgDgCAAgEIAAgJIABgJIgCgrIgSgBQgGgCAAgGQAAgEACgCQACgCADAAIAQABIAAgLIAAgJQAAgDACgDQACgCADAAQAFAAACAMIAAAHIAAAFIAAAEIALgBIAKAAQAGACgBAGQAAAEgCACQgCACgEAAIgDAAIgEAAIgLABIACAsIAAAEIAAADQAAARgIABQgCAAgBgCg");
	this.shape_26.setTransform(-10.9,-12.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgaA8QgKgCAAgGQAAgHAHAAIAJACQAHABAIAAQANAAAGgPQADgJABgUQgFAIgFADQgGAEgGABQgOAAgJgKQgJgKAAgNQAAgVANgNQAMgOAUAAQAHABAFACQAFACACADQAJAAAAAJIgCAPIgCAPIgCAYQAAAQgDAJQgEANgHAGQgKAIgPgBQgLABgHgCgAgNgmQgHAKAAAOQAAALAEADQAEAHAJgBQAGABAHgIQAHgHABgJIADgaIgGgEIgHgBQgNAAgIAKg");
	this.shape_27.setTransform(-23.9,-8.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AASAlIgBgRIgBgRIAAgFIAAgHQAAgRgHAAQgIAAgGAKQgHAJgEANIgBAHIAAAIIAAAHIABAIQAAADgCACQgDACgDABQgDgBgDgCQgCgCAAgDIgBgIIAAgHIABgVIABgWIAAgGIAAgIQAAgEACgCQACgCADAAQAIAAAAAKIABAJQANgRALAAQANAAAFALQAEAHAAAPIAAAIIgBAFQAAAGADAKIABARQAAAEgCACQgCACgDAAQgIAAgBgIg");
	this.shape_28.setTransform(-32,-10.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgHA4QgCgCAAgEIAAgOIAAgOIABgSIAAgQQAAgEACgCQADgCADAAQACAAACACQACACAAAEIgBAQIAAASIAAAOIAAAOQAAAEgCACQgDACgBAAQgDAAgDgCgAgDgqQgEgCAAgEQAAgEAEgDQACgCACAAQADAAADACQADADAAAEQAAAEgDACQgDADgDAAQgCAAgCgDg");
	this.shape_29.setTransform(-38.5,-12.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgDA3QgDgCAAgEIAAgJIABgJIgCgrIgSgBQgGgCAAgGQAAgEACgCQACgCADAAIAQABIAAgLIAAgJQAAgDACgDQACgCADAAQAFAAACAMIAAAHIAAAFIAAAEIALgBIAKAAQAGACgBAGQAAAEgCACQgCACgEAAIgDAAIgEAAIgLABIACAsIAAAEIAAADQAAARgIABQgCAAgBgCg");
	this.shape_30.setTransform(-44.7,-12.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgVArQgMgEAAgIQAAgDADgDQACgCAEAAQACAAAEAEQACACAGABIAJABQAFAAAFgCQAHgCAAgFQAAgLgPgDIgGgCQgLgDgEgDQgGgCAAgJQAAgQAPgHIANgFIAPgFIAHgBQADAAACACQADACAAADIABAHIABAHQAAADgDACQgCADgDAAQgEAAgCgDIgCgJIgSAGQgLAFAAAHIAFABQAQAEAIAFQANAGAAAQQAAANgLAGQgJAFgMAAQgKAAgKgDg");
	this.shape_31.setTransform(-57.1,-11.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgGA4QgCgCAAgEIAAgOIgBgOIABgSIABgQQAAgEACgCQACgCADAAQABAAADACQACACAAAEIgBAQIgBASIAAAOIABAOQAAAEgDACQgCACgBAAQgDAAgCgCgAgEgqQgCgCAAgEQAAgEACgDQADgCACAAQAEAAADACQACADAAAEQAAAEgCACQgDADgEAAQgCAAgDgDg");
	this.shape_32.setTransform(-62.8,-12.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgHAkIgNggIgNgiIgBgEQAAgDACgCQACgCAEAAQAFAAABAFIAUA0QAEgMAJgWIAHgSQACgFAFAAQADAAACACQADADAAADQAAADgNAeIgQAjQAAAHgGAAQgFAAgCgGg");
	this.shape_33.setTransform(-69,-10.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgZAiQgMgKAAgSQAAgSAJgOQALgPARAAQAMAAAIAEQAKAGAAALQAAAIgJAGQgDADgNAEIgcAOQAEAHAHADQAGADAHAAQAFAAAIgCQAJgDADgEQACgEADAAQADAAACACQACACAAADQAAAJgOAGQgMAFgLAAQgQAAgKgIgAgPgTQgGAGgDANIAYgJQAMgHAGgFQgHgGgLAAQgJAAgGAIg");
	this.shape_34.setTransform(-82.1,-10.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAVA6QgCgGgCgMIgBgTIAAgGIAAgFQAAgNgHgBQgJAAgHAHQgEAFgHANQAAAegCAFQgCAFgFAAQgDAAgCgCQgDgCAAgDIABgEIABgLIAAgLIAAg4IABgNIgBgIIgBgHQAAgDACgCQADgCADgBQAGAAABAHIACAOIgBARIAAARIAAAHQAGgIAIgFQAFgEAIAAQANAAAFAIQADAHABAMIAAAOIACAQIADARIAAACQAAADgCACQgDACgDABQgGAAgBgHg");
	this.shape_35.setTransform(-91.1,-12.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgEA5QgDgCAAgDIABgEIAAgDIAAgMIgBgMIgCgdIgCggIgHAAQgRABgKgDQgGgBAAgHQAAgDACgDQACgCAEAAIAMABIANABIAOAAIAMAAIASABIASABQAEAAACACQACADAAADQAAADgCACQgCADgEAAIgSgBIgRgBIgGAAIACAjIACAhIAAAJIABAIQAAAFgCAEQgCAFgEAAQgCAAgCgCg");
	this.shape_36.setTransform(-100.6,-12.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgFAGQgDgDAAgDQAAgDADgCQADgDACAAQAEAAACADQADACAAADQAAADgDADQgCADgEAAQgCAAgDgDg");
	this.shape_37.setTransform(89.6,-31.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AASAlIgCgRIgBgRIAAgFIABgHQAAgRgHAAQgIAAgGAKQgHAJgEANIgBAHIgBAIIABAHIAAAIQAAADgCACQgCACgDABQgDgBgCgCQgDgCAAgDIAAgIIgBgHIACgVIABgWIgBgGIAAgIQAAgEACgCQADgCADAAQAHAAAAAKIABAJQANgRALAAQANAAAFALQADAHABAPIAAAIIAAAFQAAAGABAKIACARQAAAEgCACQgCACgEAAQgGAAgCgIg");
	this.shape_38.setTransform(83.6,-35.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgZAiQgMgKAAgSQAAgSAJgOQALgPARAAQAMAAAIAEQAKAGAAALQAAAIgJAGQgDADgNAEIgcAOQAEAHAHADQAGADAHAAQAFAAAIgCQAJgDADgEQACgEADAAQADAAACACQACACAAADQAAAJgOAGQgMAFgLAAQgQAAgKgIgAgPgTQgGAGgDANIAYgJQAMgHAGgFQgHgGgLAAQgJAAgGAIg");
	this.shape_39.setTransform(75,-35.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAVA7IgNgSIgMgTIgOAKIAAAYQAAADgDACQgCACgDAAQgIAAAAgKIABgUIABgTIAAgZIAAgbIAAgIIAAgJQAAgDACgCQACgDADAAQAEAAACADQACACAAADIAAAJIABAIIgBAZIAAAaQALgIAIgIIARgSQACgDADAAQADAAADADQACACAAADQAAADgCADIgYAWIARAXQAMAQAAAFQAAADgCADQgDACgDAAQgEAAgCgFg");
	this.shape_40.setTransform(66.6,-37.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgWAhQgLgLAAgSQgBgQAKgNQALgQARAAQAQAAAIAOQAGAMAAAPQAAAQgJAMQgKAOgPAAQgNAAgJgJgAgNgOQgFAIAAAKQAAALAGAGQAFAGAHAAQAHAAAFgGQAHgHAAgLQACgcgSAAQgJAAgHALg");
	this.shape_41.setTransform(57.5,-35);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgXA6QgCAEgEAAQgDAAgCgCQgCgDAAgDIAAgGIABgGIgBgYIAAgXIAAgWIAAgWQAAgEACgEQACgFAFAAQAGAAAAAHIgBADIAAADIAAASIAAATQAGgEAHgCQAGgDADAAQARAAAKANQAKAKAAASQAAASgLAMQgMANgPAAQgMAAgKgFgAgLgCIgLAFIAAAOIAAAMIAAANIAKAEQAFACAGAAQAJAAAIgIQAHgIAAgMQAAgMgGgIQgGgGgLAAQgEAAgHAEg");
	this.shape_42.setTransform(41.1,-37.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgVArQgMgEAAgIQAAgDADgDQACgCAEAAQACAAAEAEQACACAGABIAJABQAFAAAFgCQAHgCAAgFQAAgLgPgDIgGgCQgLgDgEgDQgGgCAAgJQAAgQAPgHIANgFIAPgFIAHgBQADAAACACQADACAAADIABAHIABAHQAAADgDACQgCADgDAAQgEAAgCgDIgCgJIgSAGQgLAFAAAHIAFABQAQAEAIAFQANAGAAAQQAAANgLAGQgJAFgMAAQgKAAgKgDg");
	this.shape_43.setTransform(27.3,-35.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgHA4QgBgCAAgEIAAgOIgBgOIABgSIABgQQAAgEABgCQADgCADAAQABAAADACQACACAAAEIgBAQIgBASIAAAOIABAOQAAAEgDACQgCACgBAAQgDAAgDgCgAgEgqQgDgCAAgEQAAgEADgDQADgCACAAQAEAAADACQACADAAAEQAAAEgCACQgDADgEAAQgCAAgDgDg");
	this.shape_44.setTransform(21.5,-37);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgEA3QgCgCAAgEIAAgJIABgJIgCgrIgRgBQgIgCAAgGQABgEABgCQADgCADAAIARABIgBgLIAAgJQAAgDACgDQADgCACAAQAGAAABAMIAAAHIAAAFIAAAEIALgBIALAAQAEACAAAGQAAAEgCACQgCACgEAAIgDAAIgEAAIgLABIACAsIAAAEIAAADQAAARgIABQgCAAgCgCg");
	this.shape_45.setTransform(10.5,-36.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAYAnIgEgFIgOAGQgGACgCAAQgSAAgIgKQgIgKAAgUQAAgRANgNQANgOAQAAQAHAAAJAEQAKAEAAAGIgBAEIgCAKIAAAPQAAAKABAGIAFANIACAEIAAACQAAADgCACQgCACgDAAQgBAAgFgEgAgMgSQgIAKgBALQABAMAEAHQAEAGAJAAQAGAAAFgCIAIgGQgCgUgBgJIABgIIABgIIgEgCIgEgBQgKAAgJAKg");
	this.shape_46.setTransform(2.7,-35);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgXA6QgCAEgEAAQgDAAgCgCQgCgDAAgDIAAgGIABgGIgBgYIAAgXIAAgWIAAgWQAAgEACgEQACgFAFAAQAGAAAAAHIgBADIAAADIAAASIAAATQAGgEAHgCQAGgDADAAQARAAAKANQAKAKAAASQAAASgLAMQgMANgPAAQgMAAgKgFgAgLgCIgLAFIAAAOIAAAMIAAANIAKAEQAFACAGAAQAJAAAIgIQAHgIAAgMQAAgMgGgIQgGgGgLAAQgEAAgHAEg");
	this.shape_47.setTransform(-6,-37.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgHA4IABgcIABgcIAAgbIAAgdQAAgHAGAAQAIAAAAAHIgBAdIgBAbIgBAmIAAASQgBAIgFAAQgHAAAAgIg");
	this.shape_48.setTransform(-17.9,-37.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgHA4IABgcIABgcIAAgbIAAgdQAAgHAGAAQAIAAAAAHIgBAdIAAAbIgCAmIAAASQgBAIgFAAQgHAAAAgIg");
	this.shape_49.setTransform(-22.3,-37.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgXA6QgCAEgEAAQgDAAgCgCQgCgDAAgDIAAgGIABgGIgBgYIAAgXIAAgWIAAgWQAAgEACgEQACgFAFAAQAGAAAAAHIgBADIAAADIAAASIAAATQAGgEAHgCQAGgDADAAQARAAAKANQAKAKAAASQAAASgLAMQgMANgPAAQgMAAgKgFgAgLgCIgLAFIAAAOIAAAMIAAANIAKAEQAFACAGAAQAJAAAIgIQAHgIAAgMQAAgMgGgIQgGgGgLAAQgEAAgHAEg");
	this.shape_50.setTransform(-37.3,-37.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgZAiQgMgKAAgSQAAgSAJgOQALgPARAAQAMAAAIAEQAKAGAAALQAAAIgJAGQgDADgNAEIgcAOQAEAHAHADQAGADAHAAQAFAAAIgCQAJgDADgEQACgEADAAQADAAACACQACACAAADQAAAJgOAGQgMAFgLAAQgQAAgKgIgAgPgTQgGAGgDANIAYgJQAMgHAGgFQgHgGgLAAQgJAAgGAIg");
	this.shape_51.setTransform(-46.5,-35.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgVArQgMgEAAgIQAAgDADgDQACgCAEAAQACAAAEAEQACACAGABIAJABQAFAAAFgCQAHgCAAgFQAAgLgPgDIgGgCQgLgDgEgDQgGgCAAgJQAAgQAPgHIANgFIAPgFIAHgBQADAAACACQADACAAADIABAHIABAHQAAADgDACQgCADgDAAQgEAAgCgDIgCgJIgSAGQgLAFAAAHIAFABQAQAEAIAFQANAGAAAQQAAANgLAGQgJAFgMAAQgKAAgKgDg");
	this.shape_52.setTransform(-55.1,-35.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAZAnIgGgFIgNAGQgFACgCAAQgTAAgIgKQgIgKAAgUQAAgRANgNQANgOAQAAQAHAAAJAEQAKAEAAAGIgBAEIgCAKIgBAPQAAAKACAGIAFANIABAEIABACQAAADgCACQgCACgDAAQgCAAgDgEgAgMgSQgJAKABALQgBAMAFAHQAEAGAKAAQAFAAAFgCIAIgGQgCgUAAgJIAAgIIACgIIgGgCIgDgBQgKAAgJAKg");
	this.shape_53.setTransform(-62.9,-35);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgXA6QgCAEgEAAQgDAAgCgCQgCgDAAgDIAAgGIABgGIgBgYIAAgXIAAgWIAAgWQAAgEACgEQACgFAFAAQAGAAAAAHIgBADIAAADIAAASIAAATQAGgEAHgCQAGgDADAAQARAAAKANQAKAKAAASQAAASgLAMQgMANgPAAQgMAAgKgFgAgLgCIgLAFIAAAOIAAAMIAAANIAKAEQAFACAGAAQAJAAAIgIQAHgIAAgMQAAgMgGgIQgGgGgLAAQgEAAgHAEg");
	this.shape_54.setTransform(-71.6,-37.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgZAiQgMgKAAgSQAAgSAJgOQALgPARAAQAMAAAIAEQAKAGAAALQAAAIgJAGQgDADgNAEIgcAOQAEAHAHADQAGADAHAAQAFAAAIgCQAJgDADgEQACgEADAAQADAAACACQACACAAADQAAAJgOAGQgMAFgLAAQgQAAgKgIgAgPgTQgGAGgDANIAYgJQAMgHAGgFQgHgGgLAAQgJAAgGAIg");
	this.shape_55.setTransform(-85.5,-35.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAVA6QgCgGgCgMIgBgTIAAgGIAAgFQAAgNgHgBQgJAAgHAHQgEAFgHANQAAAegCAFQgCAFgFAAQgDAAgCgCQgDgCAAgDIABgEIABgLIAAgLIAAg4IABgNIgBgIIgBgHQAAgDACgCQADgCADgBQAGAAABAHIACAOIgBARIAAARIAAAHQAGgIAIgFQAFgEAIAAQANAAAFAIQADAHABAMIAAAOIACAQIADARIAAACQAAADgCACQgDACgDABQgGAAgBgHg");
	this.shape_56.setTransform(-94.6,-37.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgEA5QgDgCAAgDIABgEIAAgDIAAgMIgBgMIgCgdIgCggIgHAAQgRABgKgDQgGgBAAgHQAAgDACgDQACgCAEAAIAMABIANABIAOAAIAMAAIASABIASABQAEAAACACQACADAAADQAAADgCACQgCADgEAAIgSgBIgRgBIgGAAIACAjIACAhIAAAJIABAIQAAAFgCAEQgCAFgEAAQgCAAgCgCg");
	this.shape_57.setTransform(-104.1,-37.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgZAiQgMgKAAgSQAAgSAJgOQALgPARAAQAMAAAIAEQAKAGAAALQAAAIgJAGQgDADgNAEIgcAOQAEAHAHADQAGADAHAAQAFAAAIgCQAJgDADgEQACgEADAAQADAAACACQACACAAADQAAAJgOAGQgMAFgLAAQgQAAgKgIgAgPgTQgGAGgDANIAYgJQAMgHAGgFQgHgGgLAAQgJAAgGAIg");
	this.shape_58.setTransform(-124,-35.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgHA4QgCgCAAgEIAAgOIAAgOIABgSIAAgQQAAgEADgCQACgCADAAQABAAADACQACACAAAEIgBAQIAAASIAAAOIAAAOQAAAEgCACQgCACgCAAQgDAAgDgCgAgDgqQgDgCgBgEQABgEADgDQACgCACAAQADAAADACQADADAAAEQAAAEgDACQgDADgDAAQgCAAgCgDg");
	this.shape_59.setTransform(-156.3,-37);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgdAkIAAg1IAAgIIABgIQAAgIAGAAQAIAAAAANQAOgOARAAQAHAAADAFQADAEAAAKIAAAGQgBAJgHAAQgHAAAAgHIAAgGIAAgGQgMABgGAFQgHAGgEAKIAAApQAAAHgIAAQgHAAAAgHg");
	this.shape_60.setTransform(-169.9,-35.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AAYAnIgEgFIgOAGQgGACgCAAQgSAAgIgKQgIgKAAgUQAAgRANgNQANgOAQAAQAHAAAIAEQALAEAAAGIgCAEIgBAKIAAAPQgBAKACAGIAFANIACAEIAAACQAAADgCACQgCACgDAAQgCAAgEgEgAgMgSQgJAKAAALQABAMAEAHQAFAGAIAAQAGAAAFgCIAIgGQgCgUgBgJIABgIIABgIIgEgCIgEgBQgKAAgJAKg");
	this.shape_61.setTransform(-178,-35);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgVArQgMgEAAgIQAAgDADgDQACgCAEAAQACAAAEAEQACACAGABIAJABQAFAAAFgCQAHgCAAgFQAAgLgPgDIgGgCQgLgDgEgDQgGgCAAgJQAAgQAPgHIANgFIAPgFIAHgBQADAAACACQADACAAADIABAHIABAHQAAADgDACQgCADgDAAQgEAAgCgDIgCgJIgSAGQgLAFAAAHIAFABQAQAEAIAFQANAGAAAQQAAANgLAGQgJAFgMAAQgKAAgKgDg");
	this.shape_62.setTransform(-207.2,-35.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AAYAnIgEgFIgOAGQgGACgCAAQgSAAgIgKQgIgKAAgUQAAgRANgNQANgOAQAAQAHAAAIAEQALAEAAAGIgCAEIgBAKIAAAPQgBAKACAGIAFANIACAEIAAACQAAADgCACQgCACgDAAQgCAAgEgEgAgMgSQgJAKAAALQABAMAEAHQAFAGAIAAQAGAAAFgCIAIgGQgCgUgBgJIABgIIABgIIgEgCIgEgBQgKAAgJAKg");
	this.shape_63.setTransform(-214.9,-35);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgFAGQgDgDAAgDQAAgDADgCQADgDACAAQAEAAACADQADACAAADQAAADgDADQgCADgEAAQgCAAgDgDg");
	this.shape_64.setTransform(-234.2,-31.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FF0000").s().p("AATAlIgCgRIgCgRIAAgFIABgHQAAgRgGAAQgJAAgGAKQgHAJgEANIgBAHIAAAIIAAAHIABAIQAAADgDACQgCACgDABQgEgBgCgCQgCgCAAgDIAAgIIgBgHIABgVIABgWIAAgGIAAgIQAAgEACgCQADgCADAAQAHAAABAKIAAAJQANgRAMAAQAMAAAFALQADAHABAPIAAAIIgBAFQAAAGACAKIACARQAAAEgCACQgCACgDAAQgIAAAAgIg");
	this.shape_65.setTransform(105.9,-10.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FF0000").s().p("AgZAiQgMgKAAgSQAAgSAJgOQALgPARAAQAMAAAIAEQAKAGAAALQAAAIgJAGQgDADgNAEIgcAOQAEAHAHADQAGADAHAAQAFAAAIgCQAJgDADgEQACgEADAAQADAAACACQACACAAADQAAAJgOAGQgMAFgLAAQgQAAgKgIgAgPgTQgGAGgDANIAYgJQAMgHAGgFQgHgGgLAAQgJAAgGAIg");
	this.shape_66.setTransform(97.3,-10.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FF0000").s().p("AgEA3QgCgCAAgEIAAgJIAAgJIgBgrIgRgBQgIgCAAgGQAAgEACgCQADgCADAAIARABIgBgLIAAgJQAAgDACgDQACgCAEAAQAEAAACAMIAAAHIAAAFIAAAEIALgBIAKAAQAFACABAGQAAAEgDACQgCACgDAAIgEAAIgEAAIgKABIABAsIAAAEIAAADQAAARgIABQgCAAgCgCg");
	this.shape_67.setTransform(89,-12.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FF0000").s().p("AAYAnIgEgFIgOAGQgGACgCAAQgSAAgIgKQgIgKAAgUQAAgRANgNQANgOAQAAQAHAAAIAEQALAEAAAGIgCAEIgBAKIAAAPQgBAKACAGIAFANIACAEIAAACQAAADgCACQgCACgDAAQgCAAgEgEgAgMgSQgJAKAAALQABAMAEAHQAFAGAIAAQAGAAAFgCIAIgGQgCgUgBgJIABgIIABgIIgEgCIgEgBQgKAAgJAKg");
	this.shape_68.setTransform(81.2,-10.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FF0000").s().p("AgZAiQgMgKAAgSQAAgSAJgOQALgPARAAQAMAAAIAEQAKAGAAALQAAAIgJAGQgDADgNAEIgcAOQAEAHAHADQAGADAHAAQAFAAAIgCQAJgDADgEQACgEADAAQADAAACACQACACAAADQAAAJgOAGQgMAFgLAAQgQAAgKgIgAgPgTQgGAGgDANIAYgJQAMgHAGgFQgHgGgLAAQgJAAgGAIg");
	this.shape_69.setTransform(72.8,-10.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FF0000").s().p("AgXA6QgCAEgEAAQgDAAgCgCQgCgDAAgDIAAgGIABgGIgBgYIAAgXIAAgWIAAgWQAAgEACgEQACgFAFAAQAGAAAAAHIgBADIAAADIAAASIAAATQAGgEAHgCQAGgDADAAQARAAAKANQAKAKAAASQAAASgLAMQgMANgPAAQgMAAgKgFgAgLgCIgLAFIAAAOIAAAMIAAANIAKAEQAFACAGAAQAJAAAIgIQAHgIAAgMQAAgMgGgIQgGgGgLAAQgEAAgHAEg");
	this.shape_70.setTransform(63.7,-12.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FF0000").s().p("AgVArQgMgEAAgIQAAgDADgDQACgCAEAAQACAAAEAEQACACAGABIAJABQAFAAAFgCQAHgCAAgFQAAgLgPgDIgGgCQgLgDgEgDQgGgCAAgJQAAgQAPgHIANgFIAPgFIAHgBQADAAACACQADACAAADIABAHIABAHQAAADgDACQgCADgDAAQgEAAgCgDIgCgJIgSAGQgLAFAAAHIAFABQAQAEAIAFQANAGAAAQQAAANgLAGQgJAFgMAAQgKAAgKgDg");
	this.shape_71.setTransform(49.9,-11.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FF0000").s().p("AAZAnIgGgFIgNAGQgFACgDAAQgSAAgIgKQgIgKAAgUQAAgRANgNQANgOAQAAQAHAAAIAEQALAEAAAGIgCAEIgBAKIgBAPQABAKABAGIAFANIACAEIAAACQAAADgCACQgCACgDAAQgBAAgEgEgAgMgSQgJAKAAALQAAAMAFAHQAFAGAIAAQAGAAAFgCIAIgGQgDgUAAgJIABgIIACgIIgFgCIgEgBQgKAAgJAKg");
	this.shape_72.setTransform(42.1,-10.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FF0000").s().p("AAEAWIgCgSIgCgQIgFAOIgMAfQgCAEgCABQgCAFgFAAQgGAAgGgXQgDgNgCgSIgCgMIgBgLQAAgEACgCQADgDADABQAGAAABAGIACAMIABALIAFAhQAIgWAKgfQACgJAFAAQAFAAADAKIAFAcIAGAcIAFgVIALgpQAAgEAGAAQAEAAACACQACACAAAEIgBADQgFAZgLAeQgCAIgFAHQgCAEgFABQgJgBgFgVg");
	this.shape_73.setTransform(32.6,-10.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FF0000").s().p("AASAlIgCgRIgBgRIAAgFIABgHQAAgRgHAAQgIAAgGAKQgHAJgEANIgBAHIgBAIIABAHIAAAIQAAADgCACQgCACgDABQgDgBgCgCQgDgCAAgDIAAgIIgBgHIACgVIABgWIgBgGIAAgIQAAgEACgCQADgCADAAQAHAAAAAKIABAJQANgRALAAQANAAAFALQADAHABAPIAAAIIAAAFQAAAGABAKIACARQAAAEgCACQgCACgEAAQgGAAgCgIg");
	this.shape_74.setTransform(83.6,-35.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FF0000").s().p("AgZAiQgMgKAAgSQAAgSAJgOQALgPARAAQAMAAAIAEQAKAGAAALQAAAIgJAGQgDADgNAEIgcAOQAEAHAHADQAGADAHAAQAFAAAIgCQAJgDADgEQACgEADAAQADAAACACQACACAAADQAAAJgOAGQgMAFgLAAQgQAAgKgIgAgPgTQgGAGgDANIAYgJQAMgHAGgFQgHgGgLAAQgJAAgGAIg");
	this.shape_75.setTransform(75,-35.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FF0000").s().p("AAVA7IgNgSIgMgTIgOAKIAAAYQAAADgDACQgCACgDAAQgIAAAAgKIABgUIABgTIAAgZIAAgbIAAgIIAAgJQAAgDACgCQACgDADAAQAEAAACADQACACAAADIAAAJIABAIIgBAZIAAAaQALgIAIgIIARgSQACgDADAAQADAAADADQACACAAADQAAADgCADIgYAWIARAXQAMAQAAAFQAAADgCADQgDACgDAAQgEAAgCgFg");
	this.shape_76.setTransform(66.6,-37.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FF0000").s().p("AgWAhQgLgLAAgSQgBgQAKgNQALgQARAAQAQAAAIAOQAGAMAAAPQAAAQgJAMQgKAOgPAAQgNAAgJgJgAgNgOQgFAIAAAKQAAALAGAGQAFAGAHAAQAHAAAFgGQAHgHAAgLQACgcgSAAQgJAAgHALg");
	this.shape_77.setTransform(57.5,-35);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FF0000").s().p("AgdAkIAAg1IAAgIIABgIQAAgIAGAAQAIAAAAANQAOgOARAAQAHAAADAFQADAEAAAKIAAAGQgBAJgHAAQgHAAAAgHIAAgGIAAgGQgMABgGAFQgHAGgEAKIAAApQAAAHgIAAQgHAAAAgHg");
	this.shape_78.setTransform(49.8,-35.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FF0000").s().p("AgXA6QgCAEgEAAQgDAAgCgCQgCgDAAgDIAAgGIABgGIgBgYIAAgXIAAgWIAAgWQAAgEACgEQACgFAFAAQAGAAAAAHIgBADIAAADIAAASIAAATQAGgEAHgCQAGgDADAAQARAAAKANQAKAKAAASQAAASgLAMQgMANgPAAQgMAAgKgFgAgLgCIgLAFIAAAOIAAAMIAAANIAKAEQAFACAGAAQAJAAAIgIQAHgIAAgMQAAgMgGgIQgGgGgLAAQgEAAgHAEg");
	this.shape_79.setTransform(41.1,-37.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FF0000").s().p("AgVArQgMgEAAgIQAAgDADgDQACgCAEAAQACAAAEAEQACACAGABIAJABQAFAAAFgCQAHgCAAgFQAAgLgPgDIgGgCQgLgDgEgDQgGgCAAgJQAAgQAPgHIANgFIAPgFIAHgBQADAAACACQADACAAADIABAHIABAHQAAADgDACQgCADgDAAQgEAAgCgDIgCgJIgSAGQgLAFAAAHIAFABQAQAEAIAFQANAGAAAQQAAANgLAGQgJAFgMAAQgKAAgKgDg");
	this.shape_80.setTransform(27.3,-35.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FF0000").s().p("AgHA4QgBgCAAgEIAAgOIgBgOIABgSIABgQQAAgEABgCQADgCADAAQABAAADACQACACAAAEIgBAQIgBASIAAAOIABAOQAAAEgDACQgCACgBAAQgDAAgDgCgAgEgqQgDgCAAgEQAAgEADgDQADgCACAAQAEAAADACQACADAAAEQAAAEgCACQgDADgEAAQgCAAgDgDg");
	this.shape_81.setTransform(21.5,-37);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15,p:{x:-234.2,y:-31.4}},{t:this.shape_14},{t:this.shape_13,p:{x:-214.9}},{t:this.shape_12,p:{x:-207.2,y:-35.4}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{x:-178,y:-35}},{t:this.shape_8,p:{x:-169.9}},{t:this.shape_7},{t:this.shape_6,p:{x:-156.3,y:-37}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:-124,y:-35.1}},{t:this.shape}]}).to({state:[{t:this.shape_16},{t:this.shape_64},{t:this.shape_14},{t:this.shape_63},{t:this.shape_62},{t:this.shape_11},{t:this.shape_10},{t:this.shape_61,p:{x:-178}},{t:this.shape_60},{t:this.shape_7},{t:this.shape_59},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_58},{t:this.shape},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_13,p:{x:-28.6}},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47,p:{x:-6}},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43,p:{x:27.3}},{t:this.shape_42,p:{x:41.1}},{t:this.shape_8,p:{x:49.8}},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39,p:{x:75}},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34,p:{x:-82.1,y:-10.8}},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31,p:{x:-57.1,y:-11.1}},{t:this.shape_6,p:{x:-50.5,y:-12.7}},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25,p:{x:-2.6,y:-10.8}},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_12,p:{x:49.9,y:-11.1}},{t:this.shape_20,p:{x:63.7,y:-12.9}},{t:this.shape_19,p:{x:72.8}},{t:this.shape_9,p:{x:81.2,y:-10.7}},{t:this.shape_18},{t:this.shape_1,p:{x:97.3,y:-10.8}},{t:this.shape_17},{t:this.shape_15,p:{x:112,y:-7.1}}]},8).to({state:[{t:this.shape_16},{t:this.shape_64},{t:this.shape_14},{t:this.shape_61,p:{x:-214.9}},{t:this.shape_43,p:{x:-207.2}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_13,p:{x:-178}},{t:this.shape_8,p:{x:-169.9}},{t:this.shape_7},{t:this.shape_59},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_39,p:{x:-124}},{t:this.shape},{t:this.shape_57},{t:this.shape_56},{t:this.shape_34,p:{x:-85.5,y:-35.1}},{t:this.shape_47,p:{x:-71.6}},{t:this.shape_53},{t:this.shape_31,p:{x:-55.1,y:-35.4}},{t:this.shape_25,p:{x:-46.5,y:-35.1}},{t:this.shape_42,p:{x:-37.3}},{t:this.shape_9,p:{x:-28.6,y:-35}},{t:this.shape_49},{t:this.shape_48},{t:this.shape_20,p:{x:-6,y:-37.2}},{t:this.shape_46},{t:this.shape_45},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_19,p:{x:-82.1}},{t:this.shape_33},{t:this.shape_32},{t:this.shape_12,p:{x:-57.1,y:-11.1}},{t:this.shape_6,p:{x:-50.5,y:-12.7}},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_1,p:{x:-2.6,y:-10.8}},{t:this.shape_24},{t:this.shape_23},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_15,p:{x:112,y:-7.1}}]},3).to({state:[{t:this.shape_16},{t:this.shape_64},{t:this.shape_14},{t:this.shape_63},{t:this.shape_62},{t:this.shape_11},{t:this.shape_10},{t:this.shape_61,p:{x:-178}},{t:this.shape_60},{t:this.shape_7},{t:this.shape_59},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_58},{t:this.shape},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_13,p:{x:-28.6}},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47,p:{x:-6}},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43,p:{x:27.3}},{t:this.shape_42,p:{x:41.1}},{t:this.shape_8,p:{x:49.8}},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39,p:{x:75}},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34,p:{x:-82.1,y:-10.8}},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31,p:{x:-57.1,y:-11.1}},{t:this.shape_6,p:{x:-50.5,y:-12.7}},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25,p:{x:-2.6,y:-10.8}},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_12,p:{x:49.9,y:-11.1}},{t:this.shape_20,p:{x:63.7,y:-12.9}},{t:this.shape_19,p:{x:72.8}},{t:this.shape_9,p:{x:81.2,y:-10.7}},{t:this.shape_18},{t:this.shape_1,p:{x:97.3,y:-10.8}},{t:this.shape_17},{t:this.shape_15,p:{x:112,y:-7.1}}]},2).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-248,-50.8,140,26.3);


(lib.s2_s2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_8 = function() {
		/* _root.v1b.start();*/
	}
	this.frame_13 = function() {
		this.gotoAndPlay(10);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(8).call(this.frame_8).wait(5).call(this.frame_13).wait(13));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEAkQgCgCAAgDIAAgFIgBgEQABgDACgCQACgDACAAQAJAAgBARQAAADgCACQgCADgEAAQgBAAgDgDgAgFgTQgCgCAAgDIgBgDIAAgDQAAgEACgCQADgCADAAQAHAAAAAOQAAADgCACQgCADgDAAQgDAAgCgDg");
	this.shape.setTransform(-147.1,-36.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgZAiQgMgKAAgSQAAgSAJgOQALgPARAAQAMAAAIAEQAKAGAAALQAAAIgJAGQgDADgNAEIgcAOQAEAHAHADQAGADAHAAQAFAAAIgCQAJgDADgEQACgEADAAQADAAACACQACACAAADQAAAJgOAGQgMAFgLAAQgQAAgKgIgAgPgTQgGAGgDANIAYgJQAMgHAGgFQgHgGgLAAQgJAAgGAIg");
	this.shape_1.setTransform(-153.7,-35.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgVArQgMgEAAgIQAAgDADgDQACgCAEAAQACAAAEAEQACACAGABIAJABQAFAAAFgCQAHgCAAgFQAAgLgPgDIgGgCQgLgDgEgDQgGgCAAgJQAAgQAPgHIANgFIAPgFIAHgBQADAAACACQADACAAADIABAHIABAHQAAADgDACQgCADgDAAQgEAAgCgDIgCgJIgSAGQgLAFAAAHIAFABQAQAEAIAFQANAGAAAQQAAANgLAGQgJAFgMAAQgKAAgKgDg");
	this.shape_2.setTransform(-162.3,-35.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AATAlIgDgRIgBgRIAAgFIABgHQAAgRgGAAQgJAAgGAKQgHAJgEANIgBAHIgBAIIABAHIABAIQgBADgCACQgCACgDABQgEgBgCgCQgCgCAAgDIAAgIIgBgHIACgVIAAgWIAAgGIAAgIQAAgEACgCQADgCADAAQAHAAABAKIAAAJQANgRAMAAQAMAAAFALQADAHABAPIAAAIIgBAFQAAAGACAKIACARQAAAEgCACQgDACgCAAQgIAAAAgIg");
	this.shape_3.setTransform(-170,-35.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgZAiQgMgKAAgSQAAgSAJgOQALgPARAAQAMAAAIAEQAKAGAAALQAAAIgJAGQgDADgNAEIgcAOQAEAHAHADQAGADAHAAQAFAAAIgCQAJgDADgEQACgEADAAQADAAACACQACACAAADQAAAJgOAGQgMAFgLAAQgQAAgKgIgAgPgTQgGAGgDANIAYgJQAMgHAGgFQgHgGgLAAQgJAAgGAIg");
	this.shape_4.setTransform(-178.6,-35.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgEA3QgCgCAAgEIAAgJIAAgJIgBgrIgRgBQgIgCAAgGQAAgEACgCQADgCADAAIARABIgBgLIAAgJQAAgDACgDQADgCADAAQAEAAACAMIAAAHIAAAFIAAAEIALgBIALAAQAEACAAAGQAAAEgCACQgCACgDAAIgEAAIgEAAIgKABIABAsIAAAEIAAADQAAARgIABQgBAAgDgCg");
	this.shape_5.setTransform(-186.9,-36.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgEA3QgCgCAAgEIAAgJIABgJIgCgrIgRgBQgIgCABgGQAAgEABgCQADgCADAAIARABIgBgLIAAgJQAAgDACgDQACgCADAAQAGAAABAMIAAAHIAAAFIAAAEIALgBIALAAQAEACAAAGQABAEgDACQgCACgEAAIgDAAIgEAAIgLABIACAsIAAAEIAAADQAAARgIABQgCAAgCgCg");
	this.shape_6.setTransform(-199.3,-36.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgVArQgMgEAAgIQAAgDADgDQACgCAEAAQACAAAEAEQACACAGABIAJABQAFAAAFgCQAHgCAAgFQAAgLgPgDIgGgCQgLgDgEgDQgGgCAAgJQAAgQAPgHIANgFIAPgFIAHgBQADAAACACQADACAAADIABAHIABAHQAAADgDACQgCADgDAAQgEAAgCgDIgCgJIgSAGQgLAFAAAHIAFABQAQAEAIAFQANAGAAAQQAAANgLAGQgJAFgMAAQgKAAgKgDg");
	this.shape_7.setTransform(-207.2,-35.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAYAnIgEgFIgOAGQgGACgCAAQgSAAgIgKQgIgKAAgUQAAgRANgNQANgOAQAAQAHAAAIAEQALAEAAAGIgCAEIgBAKIAAAPQgBAKACAGIAFANIACAEIAAACQAAADgCACQgCACgDAAQgCAAgEgEgAgMgSQgJAKAAALQABAMAEAHQAFAGAIAAQAGAAAFgCIAIgGQgCgUgBgJIABgIIABgIIgEgCIgEgBQgKAAgJAKg");
	this.shape_8.setTransform(-214.9,-35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AggA8QgCgDAAgDIAAgXIABgfIACgfIAAgLIABgLQACgHAGABIAHgCIALAAQANAAAMAKQAOALAAAPQAAATgPAKQgNAKgQAAIgKgBIgBApQAAADgCADQgCACgDAAQgDAAgCgCgAgQgfIgCAfIAJAAQALAAAJgGQAJgHAAgMQAAgJgJgGQgJgGgIAAIgGAAIgEAAg");
	this.shape_9.setTransform(-223.1,-37.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgFAGQgDgDAAgDQAAgDADgCQADgDACAAQAEAAACADQADACAAADQAAADgDADQgCADgEAAQgCAAgDgDg");
	this.shape_10.setTransform(-234.2,-31.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAXA6IgFgBIgMAAIgKABIgJABIgJAAIgCAAIgDAAQgFAAgCgFIgBgJQAAgTAKgLQAEgFAUgMQAJgHAEgFQAHgHAAgKQAAgFgHgEQgFgEgGABQgFAAgHADIgLAJQgDADgCAAQgIAAAAgGQAAgEADgDQAJgJAHgDQAJgFAIgBQANAAAKAIQALAHAAAMQAAAIgDAHQgCAHgEAFQgGAFgOAJQgNAJgFAFQgIAJAAANIAQgCIAWgBQAGAAAFADQAHACAAAFQAAADgCACQgCACgDAAIgGgBg");
	this.shape_11.setTransform(-241,-37.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgTA8QgDgCAAgDQAAgIARglIgcg0IgDgFQgDgEAAgDQAAgDADgCQACgDADAAQAEAAACADQANASANAiIAMgbQAGgNAGgKQADgFAEAAQADAAACADQADACAAADIgBAEIgbA4QgKAVgEAPIgFAPQgCAGgFgBQgDAAgCgCg");
	this.shape_12.setTransform(76.9,-8.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAZAnIgGgFIgNAGQgFACgCAAQgTAAgIgKQgIgKAAgUQAAgRANgNQANgOAQAAQAHAAAIAEQALAEAAAGIgCAEIgBAKIgBAPQABAKABAGIAFANIABAEIABACQAAADgCACQgCACgDAAQgBAAgEgEgAgMgSQgJAKABALQgBAMAFAHQAEAGAKAAQAFAAAFgCIAIgGQgCgUAAgJIAAgIIACgIIgGgCIgDgBQgKAAgJAKg");
	this.shape_13.setTransform(68.9,-10.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgIA4IABgcIABgcIAAgbIABgdQAAgHAGAAQAHAAABAHIgBAdIAAAbIgBAmIgBASQgBAIgFAAQgIAAAAgIg");
	this.shape_14.setTransform(62.6,-13);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgdA/QgCgCAAgEIAAgfIAAgdIgBgfIgBgQQAAgGACgDQACgFAEAAQADAAADACQACACAAADIgBADIAAAEIANgHQAFgCAFAAQAQAAAHAOQAGAMAAASQAAAPgJALQgKALgPAAQgGAAgKgCIAAAlQAAAEgCACQgCACgEAAQgDAAgCgCgAgGgoIgLAIIABAkQAJADAHAAQAJAAAFgHQAFgFAAgKQAAgOgEgHQgDgHgHAAQgFAAgGADg");
	this.shape_15.setTransform(56.2,-8.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgWAhQgLgLAAgSQgBgQAKgNQALgQARAAQAQAAAIAOQAGAMAAAPQAAAQgJAMQgKAOgPAAQgNAAgJgJgAgNgOQgFAIAAAKQAAALAGAGQAFAGAHAAQAHAAAFgGQAHgHAAgLQACgcgSAAQgJAAgHALg");
	this.shape_16.setTransform(42.7,-10.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgEA3QgCgCAAgEIAAgJIABgJIgCgrIgRgBQgIgCABgGQgBgEACgCQADgCADAAIARABIgBgLIAAgJQAAgDACgDQADgCACAAQAGAAABAMIAAAHIAAAFIAAAEIALgBIALAAQAEACAAAGQAAAEgCACQgCACgEAAIgDAAIgEAAIgLABIACAsIAAAEIAAADQAAARgIABQgCAAgCgCg");
	this.shape_17.setTransform(34.8,-12.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgTA8QgDgCAAgDQAAgIARglIgcg0IgDgFQgDgEAAgDQAAgDADgCQACgDADAAQAEAAACADQANASANAiIAMgbQAGgNAGgKQADgFAEAAQADAAACADQADACAAADIgBAEIgbA4QgKAVgEAPIgFAPQgCAGgFgBQgDAAgCgCg");
	this.shape_18.setTransform(21.8,-8.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgbA1QgLgLABgRQgBgWALgKQAMgMAPAAQAJAAAGACIAHAGQABghABgLQABgIAHAAQAGABAAAHIgDAwIgBAVQABAaACANIAAACQAAADgCACQgDADgDgBQgEAAgCgHQgGAEgGACQgGACgFAAQgQAAgLgKgAgRABQgHAHAAAQQABAKAGAIQAIAHAJAAQAFAAAEgDIAJgGIACgDIAAgNIAAgJIAAgJQgDgGgEgBQgGgEgHAAQgLAAgGAGg");
	this.shape_19.setTransform(13.2,-12.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAZAnIgGgFIgNAGQgFACgCAAQgTAAgIgKQgIgKAAgUQAAgRANgNQANgOAQAAQAHAAAIAEQALAEAAAGIgCAEIgBAKIgBAPQABAKABAGIAFANIABAEIABACQAAADgCACQgCACgDAAQgBAAgEgEgAgMgSQgJAKAAALQAAAMAFAHQAFAGAIAAQAGAAAFgCIAIgGQgDgUAAgJIABgIIACgIIgGgCIgDgBQgKAAgJAKg");
	this.shape_20.setTransform(4.4,-10.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgdAkIAAg1IAAgIIABgIQAAgIAGAAQAIAAAAANQAOgOARAAQAHAAADAFQADAEAAAKIAAAGQgBAJgHAAQgHAAAAgHIAAgGIAAgGQgMABgGAFQgHAGgEAKIAAApQAAAHgIAAQgHAAAAgHg");
	this.shape_21.setTransform(-12.1,-10.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgdAkIAAg1IAAgIIABgIQAAgIAGAAQAIAAAAANQAOgOARAAQAHAAADAFQADAEAAAKIAAAGQgBAJgHAAQgHAAAAgHIAAgGIAAgGQgMABgGAFQgHAGgEAKIAAApQAAAHgIAAQgHAAAAgHg");
	this.shape_22.setTransform(-33.3,-10.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgZAiQgMgKAAgSQAAgSAJgOQALgPARAAQAMAAAIAEQAKAGAAALQAAAIgJAGQgDADgNAEIgcAOQAEAHAHADQAGADAHAAQAFAAAIgCQAJgDADgEQACgEADAAQADAAACACQACACAAADQAAAJgOAGQgMAFgLAAQgQAAgKgIgAgPgTQgGAGgDANIAYgJQAMgHAGgFQgHgGgLAAQgJAAgGAIg");
	this.shape_23.setTransform(-41.6,-10.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAEAWIgCgSIgCgQIgFAOIgMAfQgCAEgCABQgCAFgFAAQgGAAgGgXQgDgNgCgSIgCgMIgBgLQAAgEACgCQADgDADABQAGAAABAGIACAMIABALIAFAhQAIgWAKgfQACgJAFAAQAFAAADAKIAFAcIAGAcIAFgVIALgpQAAgEAGAAQAEAAACACQACACAAAEIgBADQgFAZgLAeQgCAIgFAHQgCAEgFABQgJgBgFgVg");
	this.shape_24.setTransform(-51.6,-10.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgDAuQgCgDAAgDIgCgcIgCgaQAAgIgCgFQgGACgGAGIgJAKIgEAFIgBAMIAAAOIAAAHIABAFQAAADgCADQgDACgDAAQgJAAAAgUIABgOIABgMIgBgMIgBgNQAAgSAIAAQADABADACQADACAAADIgBAGIAAAEIAAAIQAEgIAIgHQAIgHAFABQAMAAADALQAEgFAGgDQAGgDAIAAQANAAAFAOIADAWIAGArQAAADgCACQgDACgDABQgHgBgBgGIgCgZIgDgWIgDgLQgCgGgEgBQgCABgIAEQgIAFgCADIAAAOIADAUIABAUQAAADgCADQgCACgEAAQgBAAgCgCg");
	this.shape_25.setTransform(-75.8,-10.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgZAiQgMgKAAgSQAAgSAJgOQALgPARAAQAMAAAIAEQAKAGAAALQAAAIgJAGQgDADgNAEIgcAOQAEAHAHADQAGADAHAAQAFAAAIgCQAJgDADgEQACgEADAAQADAAACACQACACAAADQAAAJgOAGQgMAFgLAAQgQAAgKgIgAgPgTQgGAGgDANIAYgJQAMgHAGgFQgHgGgLAAQgJAAgGAIg");
	this.shape_26.setTransform(-94.6,-10.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgEA3QgCgCAAgEIAAgJIABgJIgCgrIgRgBQgIgCAAgGQAAgEACgCQADgCADAAIARABIgBgLIAAgJQAAgDACgDQADgCACAAQAGAAABAMIAAAHIAAAFIAAAEIALgBIALAAQAEACAAAGQAAAEgCACQgCACgEAAIgDAAIgEAAIgLABIACAsIAAAEIAAADQAAARgIABQgCAAgCgCg");
	this.shape_27.setTransform(-102.9,-12.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgZAiQgMgKAAgSQAAgSAJgOQALgPARAAQAMAAAIAEQAKAGAAALQAAAIgJAGQgDADgNAEIgcAOQAEAHAHADQAGADAHAAQAFAAAIgCQAJgDADgEQACgEADAAQADAAACACQACACAAADQAAAJgOAGQgMAFgLAAQgQAAgKgIgAgPgTQgGAGgDANIAYgJQAMgHAGgFQgHgGgLAAQgJAAgGAIg");
	this.shape_28.setTransform(-115.7,-10.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAVA6QgCgGgCgMIgBgTIAAgGIAAgFQAAgNgHgBQgJAAgHAHQgEAFgHANQAAAegCAFQgCAFgFAAQgDAAgCgCQgDgCAAgDIABgEIABgLIAAgLIAAg4IABgNIgBgIIgBgHQAAgDACgCQADgCADgBQAGAAABAHIACAOIgBARIAAARIAAAHQAGgIAIgFQAFgEAIAAQANAAAFAIQADAHABAMIAAAOIACAQIADARIAAACQAAADgCACQgDACgDABQgGAAgBgHg");
	this.shape_29.setTransform(-124.7,-12.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgEA5QgDgCAAgDIABgEIAAgDIAAgMIgBgMIgCgdIgCggIgHAAQgRABgKgDQgGgBAAgHQAAgDACgDQACgCAEAAIAMABIANABIAOAAIAMAAIASABIASABQAEAAACACQACADAAADQAAADgCACQgCADgEAAIgSgBIgRgBIgGAAIACAjIACAhIAAAJIABAIQAAAFgCAEQgCAFgEAAQgCAAgCgCg");
	this.shape_30.setTransform(-134.2,-12.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgFAGQgDgDAAgDQAAgDADgCQADgDACAAQAEAAACADQADACAAADQAAADgDADQgCADgEAAQgCAAgDgDg");
	this.shape_31.setTransform(137.2,-31.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgWAhQgLgLAAgSQgBgQAKgNQALgQARAAQAQAAAIAOQAGAMAAAPQAAAQgJAMQgKAOgPAAQgNAAgJgJgAgNgOQgFAIAAAKQAAALAGAGQAFAGAHAAQAHAAAFgGQAHgHAAgLQACgcgSAAQgJAAgHALg");
	this.shape_32.setTransform(130.9,-35);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgaA8QgKgCAAgGQAAgHAHAAIAJACQAHABAIAAQANAAAGgPQADgJABgUQgFAIgFADQgGAEgGABQgOAAgJgKQgJgKAAgNQAAgVANgNQAMgOAUAAQAHABAFACQAFACACADQAJAAAAAJIgCAPIgCAPIgCAYQAAAQgDAJQgEANgHAGQgKAIgPgBQgLABgHgCgAgNgmQgHAKAAAOQAAALAEADQAEAHAJgBQAGABAHgIQAHgHABgJIADgaIgGgEIgHgBQgNAAgIAKg");
	this.shape_33.setTransform(122.4,-33);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAZAnIgGgFIgNAGQgFACgCAAQgTAAgIgKQgIgKAAgUQAAgRANgNQANgOAQAAQAHAAAIAEQALAEAAAGIgCAEIgBAKIgBAPQABAKABAGIAFANIACAEIAAACQAAADgCACQgCACgDAAQgBAAgEgEgAgMgSQgJAKAAALQAAAMAFAHQAFAGAIAAQAGAAAFgCIAIgGQgDgUAAgJIABgIIACgIIgGgCIgDgBQgKAAgJAKg");
	this.shape_34.setTransform(114.2,-35);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgdAkIAAg1IAAgIIABgIQAAgIAGAAQAIAAAAANQAOgOARAAQAHAAADAFQADAEAAAKIAAAGQgBAJgHAAQgHAAAAgHIAAgGIAAgGQgMABgGAFQgHAGgEAKIAAApQAAAHgIAAQgHAAAAgHg");
	this.shape_35.setTransform(101.7,-35.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AARAlQgKAFgKAAQgLAAgGgEQgIgGgBgJQgDgVAAgOQAAgLACgOQABgGAHAAQADAAACACQACACAAADIgBAMIgBAMIABAUQABAJACAGIAFACIAFABQAIAAAMgEIAAgPIgBgNQAAgRACgNQABgHAHAAQADAAACADQACACAAADIgBAeIAAAPIAAAQIAAAFIABAGQAAADgDACQgCADgDAAQgGAAgCgIg");
	this.shape_36.setTransform(93.5,-35);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgWAhQgLgLAAgSQgBgQAKgNQALgQARAAQAQAAAIAOQAGAMAAAPQAAAQgJAMQgKAOgPAAQgNAAgJgJgAgNgOQgFAIAAAKQAAALAGAGQAFAGAHAAQAHAAAFgGQAHgHAAgLQACgcgSAAQgJAAgHALg");
	this.shape_37.setTransform(85,-35);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAVA6QgCgGgCgMIgBgTIAAgGIAAgFQAAgNgHgBQgJAAgHAHQgEAFgHANQAAAegCAFQgCAFgFAAQgDAAgCgCQgDgCAAgDIABgEIABgLIAAgLIAAg4IABgNIgBgIIgBgHQAAgDACgCQADgCADgBQAGAAABAHIACAOIgBARIAAARIAAAHQAGgIAIgFQAFgEAIAAQANAAAFAIQADAHABAMIAAAOIACAQIADARIAAACQAAADgCACQgDACgDABQgGAAgBgHg");
	this.shape_38.setTransform(76.4,-37.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AATAlIgCgRIgBgRIAAgFIAAgHQAAgRgGAAQgJAAgGAKQgHAJgEANIgBAHIAAAIIAAAHIABAIQAAADgCACQgDACgDABQgEgBgCgCQgCgCAAgDIgBgIIAAgHIABgVIABgWIAAgGIAAgIQAAgEACgCQADgCACAAQAIAAABAKIAAAJQANgRAMAAQAMAAAFALQAEAHAAAPIAAAIIgBAFQAAAGACAKIACARQAAAEgCACQgCACgDAAQgIAAAAgIg");
	this.shape_39.setTransform(62.8,-35.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAZAnIgGgFIgNAGQgFACgCAAQgTAAgIgKQgIgKAAgUQAAgRANgNQANgOAQAAQAHAAAIAEQALAEAAAGIgCAEIgBAKIgBAPQABAKABAGIAFANIABAEIABACQAAADgCACQgCACgDAAQgBAAgEgEgAgMgSQgJAKAAALQAAAMAFAHQAFAGAIAAQAGAAAFgCIAIgGQgDgUAAgJIABgIIACgIIgGgCIgDgBQgKAAgJAKg");
	this.shape_40.setTransform(54.4,-35);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AASAlIgBgRIgBgRIAAgFIAAgHQAAgRgHAAQgIAAgGAKQgHAJgEANIgBAHIAAAIIAAAHIAAAIQAAADgBACQgDACgDABQgEgBgBgCQgDgCAAgDIgBgIIAAgHIABgVIABgWIAAgGIAAgIQAAgEACgCQACgCADAAQAIAAAAAKIABAJQANgRALAAQANAAAFALQAEAHAAAPIAAAIIgBAFQABAGACAKIABARQAAAEgCACQgDACgDAAQgHAAgBgIg");
	this.shape_41.setTransform(41.4,-35.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAZAnIgGgFIgNAGQgFACgCAAQgTAAgIgKQgIgKAAgUQAAgRANgNQANgOAQAAQAHAAAJAEQAKAEAAAGIgBAEIgCAKIgBAPQAAAKACAGIAFANIABAEIABACQAAADgCACQgCACgDAAQgCAAgDgEgAgMgSQgJAKABALQgBAMAFAHQAEAGAKAAQAFAAAFgCIAIgGQgCgUAAgJIAAgIIACgIIgGgCIgDgBQgKAAgJAKg");
	this.shape_42.setTransform(33,-35);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgaA8QgKgCAAgGQAAgHAHAAIAJACQAHABAIAAQANAAAGgPQADgJABgUQgFAIgFADQgGAEgGABQgOAAgJgKQgJgKAAgNQAAgVANgNQAMgOAUAAQAHABAFACQAFACACADQAJAAAAAJIgCAPIgCAPIgCAYQAAAQgDAJQgEANgHAGQgKAIgPgBQgLABgHgCgAgNgmQgHAKAAAOQAAALAEADQAEAHAJgBQAGABAHgIQAHgHABgJIADgaIgGgEIgHgBQgNAAgIAKg");
	this.shape_43.setTransform(24.5,-33);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgZAiQgMgKAAgSQAAgSAJgOQALgPARAAQAMAAAIAEQAKAGAAALQAAAIgJAGQgDADgNAEIgcAOQAEAHAHADQAGADAHAAQAFAAAIgCQAJgDADgEQACgEADAAQADAAACACQACACAAADQAAAJgOAGQgMAFgLAAQgQAAgKgIgAgPgTQgGAGgDANIAYgJQAMgHAGgFQgHgGgLAAQgJAAgGAIg");
	this.shape_44.setTransform(16.1,-35.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgXA6QgCAEgEAAQgDAAgCgCQgCgDAAgDIAAgGIABgGIgBgYIAAgXIAAgWIAAgWQAAgEACgEQACgFAFAAQAGAAAAAHIgBADIAAADIAAASIAAATQAGgEAHgCQAGgDADAAQARAAAKANQAKAKAAASQAAASgLAMQgMANgPAAQgMAAgKgFgAgLgCIgLAFIAAAOIAAAMIAAANIAKAEQAFACAGAAQAJAAAIgIQAHgIAAgMQAAgMgGgIQgGgGgLAAQgEAAgHAEg");
	this.shape_45.setTransform(7,-37.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgZAiQgMgKAAgSQAAgSAJgOQALgPARAAQAMAAAIAEQAKAGAAALQAAAIgJAGQgDADgNAEIgcAOQAEAHAHADQAGADAHAAQAFAAAIgCQAJgDADgEQACgEADAAQADAAACACQACACAAADQAAAJgOAGQgMAFgLAAQgQAAgKgIgAgPgTQgGAGgDANIAYgJQAMgHAGgFQgHgGgLAAQgJAAgGAIg");
	this.shape_46.setTransform(-6.9,-35.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgDAuQgCgDAAgDIgCgcIgCgaQAAgIgCgFQgGACgGAGIgJAKIgEAFIgBAMIAAAOIAAAHIABAFQAAADgCADQgDACgDAAQgJAAAAgUIABgOIABgMIgBgMIgBgNQAAgSAIAAQADABADACQADACAAADIgBAGIAAAEIAAAIQAEgIAIgHQAIgHAFABQAMAAADALQAEgFAGgDQAGgDAIAAQANAAAFAOIADAWIAGArQAAADgCACQgDACgDABQgHgBgBgGIgCgZIgDgWIgDgLQgCgGgEgBQgCABgIAEQgIAFgCADIAAAOIADAUIABAUQAAADgCADQgCACgEAAQgBAAgCgCg");
	this.shape_47.setTransform(-17.6,-35);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAZAnIgGgFIgNAGQgFACgCAAQgTAAgIgKQgIgKAAgUQAAgRANgNQANgOAQAAQAHAAAIAEQALAEAAAGIgCAEIgBAKIgBAPQABAKABAGIAFANIABAEIABACQAAADgCACQgCACgDAAQgBAAgEgEgAgMgSQgJAKAAALQAAAMAFAHQAFAGAIAAQAGAAAFgCIAIgGQgDgUAAgJIABgIIACgIIgGgCIgDgBQgKAAgJAKg");
	this.shape_48.setTransform(-28,-35);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgaA8QgKgCAAgGQAAgHAHAAIAJACQAHABAIAAQANAAAGgPQADgJABgUQgFAIgFADQgGAEgGABQgOAAgJgKQgJgKAAgNQAAgVANgNQAMgOAUAAQAHABAFACQAFACACADQAJAAAAAJIgCAPIgCAPIgCAYQAAAQgDAJQgEANgHAGQgKAIgPgBQgLABgHgCgAgNgmQgHAKAAAOQAAALAEADQAEAHAJgBQAGABAHgIQAHgHABgJIADgaIgGgEIgHgBQgNAAgIAKg");
	this.shape_49.setTransform(-36.5,-33);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgIA4IABgcIABgcIAAgbIABgdQAAgHAGAAQAHAAAAAHIAAAdIgBAbIAAAmIgBASQgBAIgFAAQgIAAAAgIg");
	this.shape_50.setTransform(-47.6,-37.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgIA4IABgcIABgcIAAgbIABgdQAAgHAGAAQAHAAAAAHIAAAdIgBAbIgBAmIAAASQgBAIgFAAQgHAAgBgIg");
	this.shape_51.setTransform(-52,-37.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAYAnIgFgFIgNAGQgGACgBAAQgTAAgIgKQgIgKAAgUQAAgRANgNQANgOAQAAQAHAAAJAEQAKAEAAAGIgBAEIgCAKIgBAPQAAAKACAGIAFANIABAEIABACQAAADgCACQgCACgDAAQgCAAgEgEgAgMgSQgIAKAAALQgBAMAFAHQAEAGAKAAQAFAAAFgCIAIgGQgDgUABgJIAAgIIABgIIgFgCIgDgBQgKAAgJAKg");
	this.shape_52.setTransform(-58.3,-35);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgXA6QgCAEgEAAQgDAAgCgCQgCgDAAgDIAAgGIABgGIgBgYIAAgXIAAgWIAAgWQAAgEACgEQACgFAFAAQAGAAAAAHIgBADIAAADIAAASIAAATQAGgEAHgCQAGgDADAAQARAAAKANQAKAKAAASQAAASgLAMQgMANgPAAQgMAAgKgFgAgLgCIgLAFIAAAOIAAAMIAAANIAKAEQAFACAGAAQAJAAAIgIQAHgIAAgMQAAgMgGgIQgGgGgLAAQgEAAgHAEg");
	this.shape_53.setTransform(-67,-37.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgZAiQgMgKAAgSQAAgSAJgOQALgPARAAQAMAAAIAEQAKAGAAALQAAAIgJAGQgDADgNAEIgcAOQAEAHAHADQAGADAHAAQAFAAAIgCQAJgDADgEQACgEADAAQADAAACACQACACAAADQAAAJgOAGQgMAFgLAAQgQAAgKgIgAgPgTQgGAGgDANIAYgJQAMgHAGgFQgHgGgLAAQgJAAgGAIg");
	this.shape_54.setTransform(-76.1,-35.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAYAnIgEgFIgOAGQgGACgCAAQgSAAgIgKQgIgKAAgUQAAgRANgNQANgOAQAAQAHAAAIAEQALAEAAAGIgCAEIgBAKIAAAPQgBAKACAGIAFANIACAEIAAACQAAADgCACQgCACgDAAQgCAAgEgEgAgMgSQgJAKAAALQABAMAEAHQAFAGAIAAQAGAAAFgCIAIgGQgCgUgBgJIABgIIABgIIgEgCIgEgBQgKAAgJAKg");
	this.shape_55.setTransform(-92.5,-35);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgXA6QgCAEgEAAQgDAAgCgCQgCgDAAgDIAAgGIABgGIgBgYIAAgXIAAgWIAAgWQAAgEACgEQACgFAFAAQAGAAAAAHIgBADIAAADIAAASIAAATQAGgEAHgCQAGgDADAAQARAAAKANQAKAKAAASQAAASgLAMQgMANgPAAQgMAAgKgFgAgLgCIgLAFIAAAOIAAAMIAAANIAKAEQAFACAGAAQAJAAAIgIQAHgIAAgMQAAgMgGgIQgGgGgLAAQgEAAgHAEg");
	this.shape_56.setTransform(-101.2,-37.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgZAiQgMgKAAgSQAAgSAJgOQALgPARAAQAMAAAIAEQAKAGAAALQAAAIgJAGQgDADgNAEIgcAOQAEAHAHADQAGADAHAAQAFAAAIgCQAJgDADgEQACgEADAAQADAAACACQACACAAADQAAAJgOAGQgMAFgLAAQgQAAgKgIgAgPgTQgGAGgDANIAYgJQAMgHAGgFQgHgGgLAAQgJAAgGAIg");
	this.shape_57.setTransform(-115.2,-35.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AAVA6QgCgGgCgMIgBgTIAAgGIAAgFQAAgNgHgBQgJAAgHAHQgEAFgHANQAAAegCAFQgCAFgFAAQgDAAgCgCQgDgCAAgDIABgEIABgLIAAgLIAAg4IABgNIgBgIIgBgHQAAgDACgCQADgCADgBQAGAAABAHIACAOIgBARIAAARIAAAHQAGgIAIgFQAFgEAIAAQANAAAFAIQADAHABAMIAAAOIACAQIADARIAAACQAAADgCACQgDACgDABQgGAAgBgHg");
	this.shape_58.setTransform(-124.2,-37.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgEA5QgDgCAAgDIABgEIAAgDIAAgMIgBgMIgCgdIgCggIgHAAQgRABgKgDQgGgBAAgHQAAgDACgDQACgCAEAAIAMABIANABIAOAAIAMAAIASABIASABQAEAAACACQACADAAADQAAADgCACQgCADgEAAIgSgBIgRgBIgGAAIACAjIACAhIAAAJIABAIQAAAFgCAEQgCAFgEAAQgCAAgCgCg");
	this.shape_59.setTransform(-133.7,-37.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgZAiQgMgKAAgSQAAgSAJgOQALgPARAAQAMAAAIAEQAKAGAAALQAAAIgJAGQgDADgNAEIgcAOQAEAHAHADQAGADAHAAQAFAAAIgCQAJgDADgEQACgEADAAQADAAACACQACACAAADQAAAJgOAGQgMAFgLAAQgQAAgKgIgAgPgTQgGAGgDANIAYgJQAMgHAGgFQgHgGgLAAQgJAAgGAIg");
	this.shape_60.setTransform(-153.7,-35.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgVArQgMgEAAgIQAAgDADgDQACgCAEAAQACAAAEAEQACACAGABIAJABQAFAAAFgCQAHgCAAgFQAAgLgPgDIgGgCQgLgDgEgDQgGgCAAgJQAAgQAPgHIANgFIAPgFIAHgBQADAAACACQADACAAADIABAHIABAHQAAADgDACQgCADgDAAQgEAAgCgDIgCgJIgSAGQgLAFAAAHIAFABQAQAEAIAFQANAGAAAQQAAANgLAGQgJAFgMAAQgKAAgKgDg");
	this.shape_61.setTransform(-162.3,-35.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgZAiQgMgKAAgSQAAgSAJgOQALgPARAAQAMAAAIAEQAKAGAAALQAAAIgJAGQgDADgNAEIgcAOQAEAHAHADQAGADAHAAQAFAAAIgCQAJgDADgEQACgEADAAQADAAACACQACACAAADQAAAJgOAGQgMAFgLAAQgQAAgKgIgAgPgTQgGAGgDANIAYgJQAMgHAGgFQgHgGgLAAQgJAAgGAIg");
	this.shape_62.setTransform(-178.6,-35.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgVArQgMgEAAgIQAAgDADgDQACgCAEAAQACAAAEAEQACACAGABIAJABQAFAAAFgCQAHgCAAgFQAAgLgPgDIgGgCQgLgDgEgDQgGgCAAgJQAAgQAPgHIANgFIAPgFIAHgBQADAAACACQADACAAADIABAHIABAHQAAADgDACQgCADgDAAQgEAAgCgDIgCgJIgSAGQgLAFAAAHIAFABQAQAEAIAFQANAGAAAQQAAANgLAGQgJAFgMAAQgKAAgKgDg");
	this.shape_63.setTransform(-207.2,-35.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAYAnIgEgFIgOAGQgGACgCAAQgSAAgIgKQgIgKAAgUQAAgRANgNQANgOAQAAQAHAAAIAEQALAEAAAGIgCAEIgBAKIAAAPQgBAKACAGIAFANIACAEIAAACQAAADgCACQgCACgDAAQgCAAgEgEgAgMgSQgJAKAAALQABAMAEAHQAFAGAIAAQAGAAAFgCIAIgGQgCgUgBgJIABgIIABgIIgEgCIgEgBQgKAAgJAKg");
	this.shape_64.setTransform(-214.9,-35);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgFAGQgDgDAAgDQAAgDADgCQADgDACAAQAEAAACADQADACAAADQAAADgDADQgCADgEAAQgCAAgDgDg");
	this.shape_65.setTransform(-234.2,-31.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FF0000").s().p("AgZAiQgMgKAAgSQAAgSAJgOQALgPARAAQAMAAAIAEQAKAGAAALQAAAIgJAGQgDADgNAEIgcAOQAEAHAHADQAGADAHAAQAFAAAIgCQAJgDADgEQACgEADAAQADAAACACQACACAAADQAAAJgOAGQgMAFgLAAQgQAAgKgIgAgPgTQgGAGgDANIAYgJQAMgHAGgFQgHgGgLAAQgJAAgGAIg");
	this.shape_66.setTransform(-25.2,-10.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FF0000").s().p("AgdAkIAAg1IAAgIIABgIQAAgIAGAAQAIAAAAANQAOgOARAAQAHAAADAFQADAEAAAKIAAAGQgBAJgHAAQgHAAAAgHIAAgGIAAgGQgMABgGAFQgHAGgEAKIAAApQAAAHgIAAQgHAAAAgHg");
	this.shape_67.setTransform(-33.3,-10.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FF0000").s().p("AgZAiQgMgKAAgSQAAgSAJgOQALgPARAAQAMAAAIAEQAKAGAAALQAAAIgJAGQgDADgNAEIgcAOQAEAHAHADQAGADAHAAQAFAAAIgCQAJgDADgEQACgEADAAQADAAACACQACACAAADQAAAJgOAGQgMAFgLAAQgQAAgKgIgAgPgTQgGAGgDANIAYgJQAMgHAGgFQgHgGgLAAQgJAAgGAIg");
	this.shape_68.setTransform(-41.6,-10.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FF0000").s().p("AAEAWIgCgSIgCgQIgFAOIgMAfQgCAEgCABQgCAFgFAAQgGAAgGgXQgDgNgCgSIgCgMIgBgLQAAgEACgCQADgDADABQAGAAABAGIACAMIABALIAFAhQAIgWAKgfQACgJAFAAQAFAAADAKIAFAcIAGAcIAFgVIALgpQAAgEAGAAQAEAAACACQACACAAAEIgBADQgFAZgLAeQgCAIgFAHQgCAEgFABQgJgBgFgVg");
	this.shape_69.setTransform(-51.6,-10.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FF0000").s().p("AASAlIgBgRIgBgRIAAgFIAAgHQAAgRgHAAQgIAAgGAKQgHAJgEANIgBAHIAAAIIAAAHIAAAIQAAADgBACQgDACgDABQgEgBgBgCQgDgCAAgDIgBgIIAAgHIABgVIABgWIAAgGIAAgIQAAgEACgCQACgCADAAQAIAAAAAKIABAJQANgRALAAQANAAAFALQAEAHAAAPIAAAIIgBAFQABAGACAKIABARQAAAEgCACQgDACgDAAQgHAAgBgIg");
	this.shape_70.setTransform(41.4,-35.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FF0000").s().p("AAZAnIgGgFIgNAGQgFACgCAAQgTAAgIgKQgIgKAAgUQAAgRANgNQANgOAQAAQAHAAAJAEQAKAEAAAGIgBAEIgCAKIgBAPQAAAKACAGIAFANIABAEIABACQAAADgCACQgCACgDAAQgCAAgDgEgAgMgSQgJAKABALQgBAMAFAHQAEAGAKAAQAFAAAFgCIAIgGQgCgUAAgJIAAgIIACgIIgGgCIgDgBQgKAAgJAKg");
	this.shape_71.setTransform(33,-35);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FF0000").s().p("AgaA8QgKgCAAgGQAAgHAHAAIAJACQAHABAIAAQANAAAGgPQADgJABgUQgFAIgFADQgGAEgGABQgOAAgJgKQgJgKAAgNQAAgVANgNQAMgOAUAAQAHABAFACQAFACACADQAJAAAAAJIgCAPIgCAPIgCAYQAAAQgDAJQgEANgHAGQgKAIgPgBQgLABgHgCgAgNgmQgHAKAAAOQAAALAEADQAEAHAJgBQAGABAHgIQAHgHABgJIADgaIgGgEIgHgBQgNAAgIAKg");
	this.shape_72.setTransform(24.5,-33);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FF0000").s().p("AgZAiQgMgKAAgSQAAgSAJgOQALgPARAAQAMAAAIAEQAKAGAAALQAAAIgJAGQgDADgNAEIgcAOQAEAHAHADQAGADAHAAQAFAAAIgCQAJgDADgEQACgEADAAQADAAACACQACACAAADQAAAJgOAGQgMAFgLAAQgQAAgKgIgAgPgTQgGAGgDANIAYgJQAMgHAGgFQgHgGgLAAQgJAAgGAIg");
	this.shape_73.setTransform(16.1,-35.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FF0000").s().p("AgXA6QgCAEgEAAQgDAAgCgCQgCgDAAgDIAAgGIABgGIgBgYIAAgXIAAgWIAAgWQAAgEACgEQACgFAFAAQAGAAAAAHIgBADIAAADIAAASIAAATQAGgEAHgCQAGgDADAAQARAAAKANQAKAKAAASQAAASgLAMQgMANgPAAQgMAAgKgFgAgLgCIgLAFIAAAOIAAAMIAAANIAKAEQAFACAGAAQAJAAAIgIQAHgIAAgMQAAgMgGgIQgGgGgLAAQgEAAgHAEg");
	this.shape_74.setTransform(7,-37.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10,p:{x:-234.2,y:-31.4}},{t:this.shape_9},{t:this.shape_8,p:{x:-214.9,y:-35}},{t:this.shape_7,p:{x:-207.2}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{x:-178.6,y:-35.1}},{t:this.shape_3},{t:this.shape_2,p:{x:-162.3,y:-35.4}},{t:this.shape_1,p:{x:-153.7,y:-35.1}},{t:this.shape}]}).to({state:[{t:this.shape_11},{t:this.shape_65},{t:this.shape_9},{t:this.shape_64},{t:this.shape_63},{t:this.shape_6},{t:this.shape_5},{t:this.shape_62},{t:this.shape_3},{t:this.shape_61},{t:this.shape_60},{t:this.shape},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_7,p:{x:-84.8}},{t:this.shape_54,p:{x:-76.1}},{t:this.shape_53,p:{x:-67}},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46,p:{x:-6.9}},{t:this.shape_45,p:{x:7}},{t:this.shape_44,p:{x:16.1}},{t:this.shape_43,p:{x:24.5}},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28,p:{x:-115.7,y:-10.8}},{t:this.shape_27},{t:this.shape_26,p:{x:-94.6,y:-10.8}},{t:this.shape_8,p:{x:-86.2,y:-10.7}},{t:this.shape_25},{t:this.shape_2,p:{x:-66,y:-11.1}},{t:this.shape_24},{t:this.shape_23,p:{x:-41.6}},{t:this.shape_22,p:{x:-33.3,y:-10.8}},{t:this.shape_4,p:{x:-25.2,y:-10.8}},{t:this.shape_21},{t:this.shape_1,p:{x:-3.9,y:-10.8}},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_10,p:{x:83.3,y:-7.1}}]},8).to({state:[{t:this.shape_11},{t:this.shape_65},{t:this.shape_9},{t:this.shape_64},{t:this.shape_63},{t:this.shape_6},{t:this.shape_5},{t:this.shape_54,p:{x:-178.6}},{t:this.shape_3},{t:this.shape_61},{t:this.shape_46,p:{x:-153.7}},{t:this.shape},{t:this.shape_59},{t:this.shape_58},{t:this.shape_44,p:{x:-115.2}},{t:this.shape_53,p:{x:-101.2}},{t:this.shape_55},{t:this.shape_7,p:{x:-84.8}},{t:this.shape_28,p:{x:-76.1,y:-35.1}},{t:this.shape_45,p:{x:-67}},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_43,p:{x:-36.5}},{t:this.shape_48},{t:this.shape_47},{t:this.shape_26,p:{x:-6.9,y:-35.1}},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_22,p:{x:101.7,y:-35.1}},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_23,p:{x:-115.7}},{t:this.shape_27},{t:this.shape_4,p:{x:-94.6,y:-10.8}},{t:this.shape_8,p:{x:-86.2,y:-10.7}},{t:this.shape_25},{t:this.shape_2,p:{x:-66,y:-11.1}},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_21},{t:this.shape_1,p:{x:-3.9,y:-10.8}},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_10,p:{x:83.3,y:-7.1}}]},3).to({state:[{t:this.shape_11},{t:this.shape_65},{t:this.shape_9},{t:this.shape_64},{t:this.shape_63},{t:this.shape_6},{t:this.shape_5},{t:this.shape_62},{t:this.shape_3},{t:this.shape_61},{t:this.shape_60},{t:this.shape},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_7,p:{x:-84.8}},{t:this.shape_54,p:{x:-76.1}},{t:this.shape_53,p:{x:-67}},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46,p:{x:-6.9}},{t:this.shape_45,p:{x:7}},{t:this.shape_44,p:{x:16.1}},{t:this.shape_43,p:{x:24.5}},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28,p:{x:-115.7,y:-10.8}},{t:this.shape_27},{t:this.shape_26,p:{x:-94.6,y:-10.8}},{t:this.shape_8,p:{x:-86.2,y:-10.7}},{t:this.shape_25},{t:this.shape_2,p:{x:-66,y:-11.1}},{t:this.shape_24},{t:this.shape_23,p:{x:-41.6}},{t:this.shape_22,p:{x:-33.3,y:-10.8}},{t:this.shape_4,p:{x:-25.2,y:-10.8}},{t:this.shape_21},{t:this.shape_1,p:{x:-3.9,y:-10.8}},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_10,p:{x:83.3,y:-7.1}}]},2).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-248,-50.8,110.3,26.3);


(lib.s2_s1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_8 = function() {
		/* _root.v1b.start();*/
	}
	this.frame_13 = function() {
		this.gotoAndPlay(10);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(8).call(this.frame_8).wait(5).call(this.frame_13).wait(13));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEAkQgCgCAAgDIAAgFIgBgEQABgDACgCQACgDACAAQAJAAAAARQgBADgCACQgCADgEAAQgBAAgDgDgAgFgTQgCgCAAgDIAAgDIAAgDQAAgEABgCQADgCADAAQAHAAAAAOQAAADgCACQgCADgDAAQgDAAgCgDg");
	this.shape.setTransform(-124.3,-36.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgZAiQgMgKAAgSQAAgSAJgOQALgPARAAQAMAAAIAEQAKAGAAALQAAAIgJAGQgDADgNAEIgcAOQAEAHAHADQAGADAHAAQAFAAAIgCQAJgDADgEQACgEADAAQADAAACACQACACAAADQAAAJgOAGQgMAFgLAAQgQAAgKgIgAgPgTQgGAGgDANIAYgJQAMgHAGgFQgHgGgLAAQgJAAgGAIg");
	this.shape_1.setTransform(-130.8,-35.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgVArQgMgEAAgIQAAgDADgDQACgCAEAAQACAAAEAEQACACAGABIAJABQAFAAAFgCQAHgCAAgFQAAgLgPgDIgGgCQgLgDgEgDQgGgCAAgJQAAgQAPgHIANgFIAPgFIAHgBQADAAACACQADACAAADIABAHIABAHQAAADgDACQgCADgDAAQgEAAgCgDIgCgJIgSAGQgLAFAAAHIAFABQAQAEAIAFQANAGAAAQQAAANgLAGQgJAFgMAAQgKAAgKgDg");
	this.shape_2.setTransform(-139.5,-35.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AATAlIgDgRIgBgRIAAgFIABgHQAAgRgGAAQgJAAgGAKQgHAJgEANIgBAHIgBAIIABAHIAAAIQAAADgCACQgCACgDABQgDgBgDgCQgCgCAAgDIAAgIIgBgHIACgVIABgWIgBgGIAAgIQAAgEACgCQACgCAEAAQAHAAABAKIAAAJQANgRAMAAQAMAAAFALQADAHABAPIAAAIIAAAFQAAAGABAKIACARQAAAEgCACQgDACgDAAQgGAAgBgIg");
	this.shape_3.setTransform(-147.2,-35.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgZAiQgMgKAAgSQAAgSAJgOQALgPARAAQAMAAAIAEQAKAGAAALQAAAIgJAGQgDADgNAEIgcAOQAEAHAHADQAGADAHAAQAFAAAIgCQAJgDADgEQACgEADAAQADAAACACQACACAAADQAAAJgOAGQgMAFgLAAQgQAAgKgIgAgPgTQgGAGgDANIAYgJQAMgHAGgFQgHgGgLAAQgJAAgGAIg");
	this.shape_4.setTransform(-155.8,-35.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgEA3QgCgCAAgEIAAgJIABgJIgCgrIgRgBQgIgCAAgGQAAgEACgCQADgCADAAIARABIgBgLIAAgJQAAgDACgDQADgCACAAQAGAAABAMIAAAHIAAAFIAAAEIALgBIALAAQAEACAAAGQAAAEgCACQgCACgEAAIgDAAIgEAAIgLABIACAsIAAAEIAAADQAAARgIABQgCAAgCgCg");
	this.shape_5.setTransform(-164.1,-36.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgDA3QgDgCAAgEIAAgJIABgJIgCgrIgRgBQgIgCABgGQAAgEABgCQADgCADAAIAQABIAAgLIAAgJQAAgDACgDQACgCADAAQAGAAABAMIAAAHIAAAFIAAAEIALgBIALAAQAEACAAAGQABAEgDACQgCACgEAAIgDAAIgEAAIgLABIACAsIAAAEIAAADQAAARgIABQgCAAgBgCg");
	this.shape_6.setTransform(-176.4,-36.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AATAlIgCgRIgBgRIAAgFIAAgHQAAgRgGAAQgJAAgGAKQgHAJgEANIgBAHIAAAIIAAAHIABAIQAAADgCACQgDACgDABQgEgBgCgCQgCgCAAgDIgBgIIAAgHIABgVIABgWIAAgGIAAgIQAAgEACgCQADgCACAAQAIAAABAKIAAAJQANgRAMAAQAMAAAFALQAEAHAAAPIAAAIIgBAFQAAAGACAKIACARQAAAEgCACQgCACgDAAQgIAAAAgIg");
	this.shape_7.setTransform(-184.2,-35.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgZAiQgMgKAAgSQAAgSAJgOQALgPARAAQAMAAAIAEQAKAGAAALQAAAIgJAGQgDADgNAEIgcAOQAEAHAHADQAGADAHAAQAFAAAIgCQAJgDADgEQACgEADAAQADAAACACQACACAAADQAAAJgOAGQgMAFgLAAQgQAAgKgIgAgPgTQgGAGgDANIAYgJQAMgHAGgFQgHgGgLAAQgJAAgGAIg");
	this.shape_8.setTransform(-192.8,-35.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgVArQgMgEAAgIQAAgDADgDQACgCAEAAQACAAAEAEQACACAGABIAJABQAFAAAFgCQAHgCAAgFQAAgLgPgDIgGgCQgLgDgEgDQgGgCAAgJQAAgQAPgHIANgFIAPgFIAHgBQADAAACACQADACAAADIABAHIABAHQAAADgDACQgCADgDAAQgEAAgCgDIgCgJIgSAGQgLAFAAAHIAFABQAQAEAIAFQANAGAAAQQAAANgLAGQgJAFgMAAQgKAAgKgDg");
	this.shape_9.setTransform(-201.5,-35.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgZAiQgMgKAAgSQAAgSAJgOQALgPARAAQAMAAAIAEQAKAGAAALQAAAIgJAGQgDADgNAEIgcAOQAEAHAHADQAGADAHAAQAFAAAIgCQAJgDADgEQACgEADAAQADAAACACQACACAAADQAAAJgOAGQgMAFgLAAQgQAAgKgIgAgPgTQgGAGgDANIAYgJQAMgHAGgFQgHgGgLAAQgJAAgGAIg");
	this.shape_10.setTransform(-209.4,-35.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgdAkIAAg1IAAgIIABgIQAAgIAGAAQAIAAAAANQAOgOARAAQAHAAADAFQADAEAAAKIAAAGQgBAJgHAAQgHAAAAgHIAAgGIAAgGQgMABgGAFQgHAGgEAKIAAApQAAAHgIAAQgHAAAAgHg");
	this.shape_11.setTransform(-217.5,-35.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AggA8QgCgDAAgDIAAgXIABgfIACgfIAAgLIABgLQACgHAGABIAHgCIALAAQANAAAMAKQAOALAAAPQAAATgPAKQgNAKgQAAIgKgBIgBApQAAADgCADQgCACgDAAQgDAAgCgCgAgQgfIgCAfIAJAAQALAAAJgGQAJgHAAgMQAAgJgJgGQgJgGgIAAIgGAAIgEAAg");
	this.shape_12.setTransform(-225.7,-37.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgFAGQgDgDAAgDQAAgDADgCQADgDACAAQAEAAACADQADACAAADQAAADgDADQgCADgEAAQgCAAgDgDg");
	this.shape_13.setTransform(-236.7,-31.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AACA8IgOAAIgIAAQgDgCAAgEQAAgIAMAAIADAAIAEAAIgBgLIgBgLIACgcQACgUAAgKQgLAIgDAAQgDAAgCgDQgCgCAAgDQAAgDAGgGIANgJQAEgIAGABQAFAAABAFIgBAGIAAAGIAAAHIAAAIIgCAaIgCAZIABALIABALIAIAAQAEAAACACQABACAAADQAAADgBACQgCACgEAAg");
	this.shape_14.setTransform(-242.2,-37.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgTA8QgDgCAAgDQAAgIARglIgcg0IgDgFQgDgEAAgDQAAgDADgCQACgDADAAQAEAAACADQANASANAiIAMgbQAGgNAGgKQADgFAEAAQADAAACADQADACAAADIgBAEIgbA4QgKAVgEAPIgFAPQgCAGgFgBQgDAAgCgCg");
	this.shape_15.setTransform(34.3,-8.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgaA1QgLgLAAgRQAAgWALgKQALgMAPAAQAJAAAGACIAGAGQACghABgLQABgIAHAAQAGABAAAHIgCAwIgBAVQgBAaADANIAAACQAAADgCACQgCADgEgBQgEAAgCgHQgGAEgGACQgGACgFAAQgQAAgKgKgAgRABQgGAHgBAQQAAAKAIAIQAHAHAJAAQAFAAAEgDIAJgGIACgDIAAgNIAAgJIAAgJQgCgGgGgBQgEgEgIAAQgKAAgHAGg");
	this.shape_16.setTransform(25.7,-12.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAZAnIgGgFIgNAGQgFACgDAAQgSAAgIgKQgIgKAAgUQAAgRANgNQANgOAQAAQAHAAAIAEQALAEAAAGIgCAEIgBAKIgBAPQABAKABAGIAFANIACAEIAAACQAAADgCACQgCACgDAAQgBAAgEgEgAgMgSQgJAKAAALQAAAMAFAHQAFAGAIAAQAGAAAFgCIAIgGQgDgUAAgJIABgIIACgIIgFgCIgEgBQgKAAgJAKg");
	this.shape_17.setTransform(16.9,-10.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgdAkIAAg1IAAgIIABgIQAAgIAGAAQAIAAAAANQAOgOARAAQAHAAADAFQADAEAAAKIAAAGQgBAJgHAAQgHAAAAgHIAAgGIAAgGQgMABgGAFQgHAGgEAKIAAApQAAAHgIAAQgHAAAAgHg");
	this.shape_18.setTransform(-20.8,-10.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAZAnIgGgFIgNAGQgFACgDAAQgSAAgIgKQgIgKAAgUQAAgRANgNQANgOAQAAQAHAAAIAEQALAEAAAGIgCAEIgBAKIgBAPQABAKABAGIAFANIACAEIAAACQAAADgCACQgCACgDAAQgBAAgEgEgAgMgSQgJAKAAALQAAAMAFAHQAFAGAIAAQAGAAAFgCIAIgGQgDgUAAgJIABgIIACgIIgGgCIgDgBQgKAAgJAKg");
	this.shape_19.setTransform(-29,-10.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgDAuQgCgDAAgDIgCgcIgCgaQAAgIgCgFQgGACgGAGIgJAKIgEAFIgBAMIAAAOIAAAHIABAFQAAADgCADQgDACgDAAQgJAAAAgUIABgOIABgMIgBgMIgBgNQAAgSAIAAQADABADACQADACAAADIgBAGIAAAEIAAAIQAEgIAIgHQAIgHAFABQAMAAADALQAEgFAGgDQAGgDAIAAQANAAAFAOIADAWIAGArQAAADgCACQgDACgDABQgHgBgBgGIgCgZIgDgWIgDgLQgCgGgEgBQgCABgIAEQgIAFgCADIAAAOIADAUIABAUQAAADgCADQgCACgEAAQgBAAgCgCg");
	this.shape_20.setTransform(-51.8,-10.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAYAnIgEgFIgOAGQgGACgCAAQgSAAgIgKQgIgKAAgUQAAgRANgNQANgOAQAAQAHAAAJAEQAKAEAAAGIgBAEIgCAKIAAAPQAAAKABAGIAFANIABAEIABACQAAADgCACQgCACgDAAQgCAAgEgEgAgMgSQgIAKAAALQAAAMAEAHQAEAGAKAAQAFAAAFgCIAIgGQgDgUABgJIAAgIIABgIIgEgCIgEgBQgKAAgJAKg");
	this.shape_21.setTransform(-62.2,-10.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgDA3QgDgCAAgEIAAgJIABgJIgCgrIgSgBQgGgCAAgGQAAgEACgCQACgCADAAIAQABIAAgLIAAgJQAAgDACgDQACgCADAAQAFAAACAMIAAAHIAAAFIAAAEIALgBIAKAAQAGACgBAGQAAAEgCACQgCACgEAAIgDAAIgEAAIgLABIACAsIAAAEIAAADQAAARgIABQgCAAgBgCg");
	this.shape_22.setTransform(-78.9,-12.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAVA6QgCgGgCgMIgBgTIAAgGIAAgFQAAgNgHgBQgJAAgHAHQgEAFgHANQAAAegCAFQgCAFgFAAQgDAAgCgCQgDgCAAgDIABgEIABgLIAAgLIAAg4IABgNIgBgIIgBgHQAAgDACgCQADgCADgBQAGAAABAHIACAOIgBARIAAARIAAAHQAGgIAIgFQAFgEAIAAQANAAAFAIQADAHABAMIAAAOIACAQIADARIAAACQAAADgCACQgDACgDABQgGAAgBgHg");
	this.shape_23.setTransform(-100.7,-12.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgEA5QgDgCAAgDIABgEIAAgDIAAgMIgBgMIgCgdIgCggIgHAAQgRABgKgDQgGgBAAgHQAAgDACgDQACgCAEAAIAMABIANABIAOAAIAMAAIASABIASABQAEAAACACQACADAAADQAAADgCACQgCADgEAAIgSgBIgRgBIgGAAIACAjIACAhIAAAJIABAIQAAAFgCAEQgCAFgEAAQgCAAgCgCg");
	this.shape_24.setTransform(-110.2,-12.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgFAGQgDgDAAgDQAAgDADgCQADgDACAAQAEAAACADQADACAAADQAAADgDADQgCADgEAAQgCAAgDgDg");
	this.shape_25.setTransform(188.4,-31.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAFAWIgEgSIgBgQIgGAOIgLAfQgBAEgCABQgDAFgFAAQgGAAgGgXQgCgNgDgSIgCgMIgBgLQAAgEADgCQACgDADABQAGAAABAGIACAMIABALIAEAhQAJgWAKgfQACgJAFAAQAFAAADAKIAFAcIAFAcIAGgVIALgpQABgEAFAAQADAAACACQADACAAAEIgBADQgGAZgJAeQgCAIgGAHQgDAEgEABQgJgBgEgVg");
	this.shape_26.setTransform(180.9,-34.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgWAhQgLgLAAgSQgBgQAKgNQALgQARAAQAQAAAIAOQAGAMAAAPQAAAQgJAMQgKAOgPAAQgNAAgJgJgAgNgOQgFAIAAAKQAAALAGAGQAFAGAHAAQAHAAAFgGQAHgHAAgLQACgcgSAAQgJAAgHALg");
	this.shape_27.setTransform(171.1,-35);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AATAlIgDgRIgBgRIAAgFIABgHQAAgRgGAAQgJAAgGAKQgHAJgEANIgBAHIgBAIIABAHIABAIQgBADgCACQgCACgDABQgEgBgCgCQgCgCAAgDIAAgIIgBgHIACgVIABgWIgBgGIAAgIQAAgEACgCQADgCADAAQAHAAABAKIAAAJQANgRAMAAQAMAAAFALQADAHABAPIAAAIIAAAFQgBAGACAKIACARQAAAEgCACQgDACgCAAQgIAAAAgIg");
	this.shape_28.setTransform(163,-35.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgEA3QgCgCAAgEIAAgJIABgJIgCgrIgRgBQgIgCAAgGQABgEABgCQADgCADAAIARABIgBgLIAAgJQAAgDACgDQADgCACAAQAGAAABAMIAAAHIAAAFIAAAEIALgBIALAAQAEACAAAGQAAAEgCACQgCACgEAAIgDAAIgEAAIgLABIACAsIAAAEIAAADQAAARgIABQgCAAgCgCg");
	this.shape_29.setTransform(150,-36.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAVA6QgCgGgCgMIgBgTIAAgGIAAgFQAAgNgHgBQgJAAgHAHQgEAFgHANQAAAegCAFQgCAFgFAAQgDAAgCgCQgDgCAAgDIABgEIABgLIAAgLIAAg4IABgNIgBgIIgBgHQAAgDACgCQADgCADgBQAGAAABAHIACAOIgBARIAAARIAAAHQAGgIAIgFQAFgEAIAAQANAAAFAIQADAHABAMIAAAOIACAQIADARIAAACQAAADgCACQgDACgDABQgGAAgBgHg");
	this.shape_30.setTransform(141.7,-37.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgaA8QgKgCAAgGQAAgHAHAAIAJACQAHABAIAAQANAAAGgPQADgJABgUQgFAIgFADQgGAEgGABQgOAAgJgKQgJgKAAgNQAAgVANgNQAMgOAUAAQAHABAFACQAFACACADQAJAAAAAJIgCAPIgCAPIgCAYQAAAQgDAJQgEANgHAGQgKAIgPgBQgLABgHgCgAgNgmQgHAKAAAOQAAALAEADQAEAHAJgBQAGABAHgIQAHgHABgJIADgaIgGgEIgHgBQgNAAgIAKg");
	this.shape_31.setTransform(132.6,-33);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgGA4QgDgCAAgEIAAgOIAAgOIABgSIAAgQQABgEACgCQACgCADAAQABAAADACQACACAAAEIgBAQIAAASIAAAOIAAAOQAAAEgCACQgCACgCAAQgDAAgCgCgAgDgqQgDgCAAgEQAAgEADgDQACgCACAAQADAAADACQADADAAAEQAAAEgDACQgDADgDAAQgCAAgCgDg");
	this.shape_32.setTransform(126.4,-37);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgdAkIAAg1IAAgIIABgIQAAgIAGAAQAIAAAAANQAOgOARAAQAHAAADAFQADAEAAAKIAAAGQgBAJgHAAQgHAAAAgHIAAgGIAAgGQgMABgGAFQgHAGgEAKIAAApQAAAHgIAAQgHAAAAgHg");
	this.shape_33.setTransform(120.4,-35.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgaA8QgKgCAAgGQAAgHAHAAIAJACQAHABAIAAQANAAAGgPQADgJABgUQgFAIgFADQgGAEgGABQgOAAgJgKQgJgKAAgNQAAgVANgNQAMgOAUAAQAHABAFACQAFACACADQAJAAAAAJIgCAPIgCAPIgCAYQAAAQgDAJQgEANgHAGQgKAIgPgBQgLABgHgCgAgNgmQgHAKAAAOQAAALAEADQAEAHAJgBQAGABAHgIQAHgHABgJIADgaIgGgEIgHgBQgNAAgIAKg");
	this.shape_34.setTransform(107.1,-33);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgGA4QgCgCAAgEIAAgOIgBgOIABgSIABgQQAAgEABgCQADgCADAAQACAAACACQACACAAAEIgBAQIgBASIAAAOIABAOQAAAEgDACQgCACgBAAQgDAAgCgCgAgEgqQgCgCAAgEQAAgEACgDQADgCACAAQADAAAEACQACADAAAEQAAAEgCACQgEADgDAAQgCAAgDgDg");
	this.shape_35.setTransform(92.5,-37);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AASAlIgBgRIgBgRIAAgFIAAgHQAAgRgHAAQgIAAgGAKQgHAJgEANIgBAHIAAAIIAAAHIAAAIQAAADgBACQgDACgDABQgDgBgCgCQgDgCAAgDIgBgIIAAgHIABgVIACgWIgBgGIAAgIQAAgEACgCQACgCADAAQAIAAAAAKIABAJQANgRALAAQANAAAFALQADAHABAPIAAAIIAAAFQAAAGACAKIABARQAAAEgCACQgDACgDAAQgGAAgCgIg");
	this.shape_36.setTransform(86.1,-35.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AATAlIgCgRIgBgRIAAgFIAAgHQAAgRgGAAQgJAAgGAKQgHAJgEANIgBAHIAAAIIAAAHIABAIQAAADgCACQgDACgDABQgEgBgCgCQgCgCAAgDIgBgIIAAgHIABgVIABgWIAAgGIAAgIQAAgEACgCQADgCADAAQAHAAABAKIAAAJQANgRAMAAQAMAAAFALQAEAHAAAPIAAAIIgBAFQAAAGACAKIACARQAAAEgCACQgCACgDAAQgIAAAAgIg");
	this.shape_37.setTransform(77.7,-35.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgHA4QgBgCgBgEIAAgOIAAgOIABgSIAAgQQAAgEACgCQADgCADAAQACAAACACQACACAAAEIgBAQIAAASIAAAOIAAAOQAAAEgDACQgBACgCAAQgDAAgDgCgAgDgqQgEgCAAgEQAAgEAEgDQACgCACAAQAEAAACACQADADAAAEQAAAEgDACQgCADgEAAQgCAAgCgDg");
	this.shape_38.setTransform(71.2,-37);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgaA8QgKgCAAgGQAAgHAHAAIAJACQAHABAIAAQANAAAGgPQADgJABgUQgFAIgFADQgGAEgGABQgOAAgJgKQgJgKAAgNQAAgVANgNQAMgOAUAAQAHABAFACQAFACACADQAJAAAAAJIgCAPIgCAPIgCAYQAAAQgDAJQgEANgHAGQgKAIgPgBQgLABgHgCgAgNgmQgHAKAAAOQAAALAEADQAEAHAJgBQAGABAHgIQAHgHABgJIADgaIgGgEIgHgBQgNAAgIAKg");
	this.shape_39.setTransform(64.4,-33);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgZAiQgMgKAAgSQAAgSAJgOQALgPARAAQAMAAAIAEQAKAGAAALQAAAIgJAGQgDADgNAEIgcAOQAEAHAHADQAGADAHAAQAFAAAIgCQAJgDADgEQACgEADAAQADAAACACQACACAAADQAAAJgOAGQgMAFgLAAQgQAAgKgIgAgPgTQgGAGgDANIAYgJQAMgHAGgFQgHgGgLAAQgJAAgGAIg");
	this.shape_40.setTransform(56.1,-35.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgXA6QgCAEgEAAQgDAAgCgCQgCgDAAgDIAAgGIABgGIgBgYIAAgXIAAgWIAAgWQAAgEACgEQACgFAFAAQAGAAAAAHIgBADIAAADIAAASIAAATQAGgEAHgCQAGgDADAAQARAAAKANQAKAKAAASQAAASgLAMQgMANgPAAQgMAAgKgFgAgLgCIgLAFIAAAOIAAAMIAAANIAKAEQAFACAGAAQAJAAAIgIQAHgIAAgMQAAgMgGgIQgGgGgLAAQgEAAgHAEg");
	this.shape_41.setTransform(47,-37.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgHA4QgBgCAAgEIAAgOIgBgOIABgSIABgQQAAgEABgCQADgCADAAQABAAADACQACACAAAEIgBAQIgBASIAAAOIABAOQAAAEgDACQgCACgBAAQgDAAgDgCgAgEgqQgCgCgBgEQABgEACgDQADgCACAAQAEAAADACQACADAAAEQAAAEgCACQgDADgEAAQgCAAgDgDg");
	this.shape_42.setTransform(27.4,-37);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgZAiQgMgKAAgSQAAgSAJgOQALgPARAAQAMAAAIAEQAKAGAAALQAAAIgJAGQgDADgNAEIgcAOQAEAHAHADQAGADAHAAQAFAAAIgCQAJgDADgEQACgEADAAQADAAACACQACACAAADQAAAJgOAGQgMAFgLAAQgQAAgKgIgAgPgTQgGAGgDANIAYgJQAMgHAGgFQgHgGgLAAQgJAAgGAIg");
	this.shape_43.setTransform(15.9,-35.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgDAuQgCgDAAgDIgCgcIgCgaQAAgIgCgFQgGACgGAGIgJAKIgEAFIgBAMIAAAOIAAAHIABAFQAAADgCADQgDACgDAAQgJAAAAgUIABgOIABgMIgBgMIgBgNQAAgSAIAAQADABADACQADACAAADIgBAGIAAAEIAAAIQAEgIAIgHQAIgHAFABQAMAAADALQAEgFAGgDQAGgDAIAAQANAAAFAOIADAWIAGArQAAADgCACQgDACgDABQgHgBgBgGIgCgZIgDgWIgDgLQgCgGgEgBQgCABgIAEQgIAFgCADIAAAOIADAUIABAUQAAADgCADQgCACgEAAQgBAAgCgCg");
	this.shape_44.setTransform(5.3,-35);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAZAnIgGgFIgNAGQgFACgDAAQgSAAgIgKQgIgKAAgUQAAgRANgNQANgOAQAAQAHAAAIAEQALAEAAAGIgCAEIgBAKIgBAPQABAKABAGIAFANIACAEIAAACQAAADgCACQgCACgDAAQgBAAgEgEgAgMgSQgJAKAAALQAAAMAFAHQAFAGAIAAQAGAAAFgCIAIgGQgDgUAAgJIABgIIACgIIgGgCIgDgBQgKAAgJAKg");
	this.shape_45.setTransform(-5.1,-35);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgaA8QgKgCAAgGQAAgHAHAAIAJACQAHABAIAAQANAAAGgPQADgJABgUQgFAIgFADQgGAEgGABQgOAAgJgKQgJgKAAgNQAAgVANgNQAMgOAUAAQAHABAFACQAFACACADQAJAAAAAJIgCAPIgCAPIgCAYQAAAQgDAJQgEANgHAGQgKAIgPgBQgLABgHgCgAgNgmQgHAKAAAOQAAALAEADQAEAHAJgBQAGABAHgIQAHgHABgJIADgaIgGgEIgHgBQgNAAgIAKg");
	this.shape_46.setTransform(-13.6,-33);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgIA4IABgcIABgcIAAgbIABgdQAAgHAGAAQAHAAAAAHIAAAdIAAAbIgBAmIgBASQgBAIgFAAQgIAAAAgIg");
	this.shape_47.setTransform(-24.7,-37.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgIA4IABgcIABgcIAAgbIABgdQAAgHAGAAQAHAAAAAHIAAAdIgBAbIAAAmIgBASQgBAIgFAAQgIAAAAgIg");
	this.shape_48.setTransform(-29.1,-37.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAZAnIgGgFIgNAGQgFACgCAAQgTAAgIgKQgIgKAAgUQAAgRANgNQANgOAQAAQAHAAAJAEQAKAEAAAGIgBAEIgCAKIgBAPQAAAKACAGIAFANIABAEIABACQAAADgCACQgCACgDAAQgCAAgDgEgAgMgSQgJAKABALQgBAMAFAHQAEAGAKAAQAFAAAFgCIAIgGQgCgUAAgJIAAgIIACgIIgGgCIgDgBQgKAAgJAKg");
	this.shape_49.setTransform(-35.4,-35);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgXA6QgCAEgEAAQgDAAgCgCQgCgDAAgDIAAgGIABgGIgBgYIAAgXIAAgWIAAgWQAAgEACgEQACgFAFAAQAGAAAAAHIgBADIAAADIAAASIAAATQAGgEAHgCQAGgDADAAQARAAAKANQAKAKAAASQAAASgLAMQgMANgPAAQgMAAgKgFgAgLgCIgLAFIAAAOIAAAMIAAANIAKAEQAFACAGAAQAJAAAIgIQAHgIAAgMQAAgMgGgIQgGgGgLAAQgEAAgHAEg");
	this.shape_50.setTransform(-44.1,-37.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgZAiQgMgKAAgSQAAgSAJgOQALgPARAAQAMAAAIAEQAKAGAAALQAAAIgJAGQgDADgNAEIgcAOQAEAHAHADQAGADAHAAQAFAAAIgCQAJgDADgEQACgEADAAQADAAACACQACACAAADQAAAJgOAGQgMAFgLAAQgQAAgKgIgAgPgTQgGAGgDANIAYgJQAMgHAGgFQgHgGgLAAQgJAAgGAIg");
	this.shape_51.setTransform(-53.3,-35.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgVArQgMgEAAgIQAAgDADgDQACgCAEAAQACAAAEAEQACACAGABIAJABQAFAAAFgCQAHgCAAgFQAAgLgPgDIgGgCQgLgDgEgDQgGgCAAgJQAAgQAPgHIANgFIAPgFIAHgBQADAAACACQADACAAADIABAHIABAHQAAADgDACQgCADgDAAQgEAAgCgDIgCgJIgSAGQgLAFAAAHIAFABQAQAEAIAFQANAGAAAQQAAANgLAGQgJAFgMAAQgKAAgKgDg");
	this.shape_52.setTransform(-61.9,-35.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAYAnIgEgFIgOAGQgFACgDAAQgSAAgIgKQgIgKAAgUQAAgRANgNQANgOAQAAQAHAAAIAEQALAEAAAGIgCAEIgBAKIAAAPQgBAKACAGIAFANIACAEIAAACQAAADgCACQgCACgDAAQgBAAgFgEgAgMgSQgJAKAAALQABAMAEAHQAEAGAJAAQAGAAAFgCIAIgGQgCgUgBgJIABgIIABgIIgEgCIgEgBQgKAAgJAKg");
	this.shape_53.setTransform(-69.7,-35);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgXA6QgCAEgEAAQgDAAgCgCQgCgDAAgDIAAgGIABgGIgBgYIAAgXIAAgWIAAgWQAAgEACgEQACgFAFAAQAGAAAAAHIgBADIAAADIAAASIAAATQAGgEAHgCQAGgDADAAQARAAAKANQAKAKAAASQAAASgLAMQgMANgPAAQgMAAgKgFgAgLgCIgLAFIAAAOIAAAMIAAANIAKAEQAFACAGAAQAJAAAIgIQAHgIAAgMQAAgMgGgIQgGgGgLAAQgEAAgHAEg");
	this.shape_54.setTransform(-78.4,-37.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgZAiQgMgKAAgSQAAgSAJgOQALgPARAAQAMAAAIAEQAKAGAAALQAAAIgJAGQgDADgNAEIgcAOQAEAHAHADQAGADAHAAQAFAAAIgCQAJgDADgEQACgEADAAQADAAACACQACACAAADQAAAJgOAGQgMAFgLAAQgQAAgKgIgAgPgTQgGAGgDANIAYgJQAMgHAGgFQgHgGgLAAQgJAAgGAIg");
	this.shape_55.setTransform(-92.3,-35.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAVA6QgCgGgCgMIgBgTIAAgGIAAgFQAAgNgHgBQgJAAgHAHQgEAFgHANQAAAegCAFQgCAFgFAAQgDAAgCgCQgDgCAAgDIABgEIABgLIAAgLIAAg4IABgNIgBgIIgBgHQAAgDACgCQADgCADgBQAGAAABAHIACAOIgBARIAAARIAAAHQAGgIAIgFQAFgEAIAAQANAAAFAIQADAHABAMIAAAOIACAQIADARIAAACQAAADgCACQgDACgDABQgGAAgBgHg");
	this.shape_56.setTransform(-101.4,-37.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgEA5QgDgCAAgDIABgEIAAgDIAAgMIgBgMIgCgdIgCggIgHAAQgRABgKgDQgGgBAAgHQAAgDACgDQACgCAEAAIAMABIANABIAOAAIAMAAIASABIASABQAEAAACACQACADAAADQAAADgCACQgCADgEAAIgSgBIgRgBIgGAAIACAjIACAhIAAAJIABAIQAAAFgCAEQgCAFgEAAQgCAAgCgCg");
	this.shape_57.setTransform(-110.9,-37.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgZAiQgMgKAAgSQAAgSAJgOQALgPARAAQAMAAAIAEQAKAGAAALQAAAIgJAGQgDADgNAEIgcAOQAEAHAHADQAGADAHAAQAFAAAIgCQAJgDADgEQACgEADAAQADAAACACQACACAAADQAAAJgOAGQgMAFgLAAQgQAAgKgIgAgPgTQgGAGgDANIAYgJQAMgHAGgFQgHgGgLAAQgJAAgGAIg");
	this.shape_58.setTransform(-130.8,-35.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgVArQgMgEAAgIQAAgDADgDQACgCAEAAQACAAAEAEQACACAGABIAJABQAFAAAFgCQAHgCAAgFQAAgLgPgDIgGgCQgLgDgEgDQgGgCAAgJQAAgQAPgHIANgFIAPgFIAHgBQADAAACACQADACAAADIABAHIABAHQAAADgDACQgCADgDAAQgEAAgCgDIgCgJIgSAGQgLAFAAAHIAFABQAQAEAIAFQANAGAAAQQAAANgLAGQgJAFgMAAQgKAAgKgDg");
	this.shape_59.setTransform(-139.5,-35.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AATAlIgDgRIgBgRIAAgFIABgHQAAgRgGAAQgJAAgGAKQgHAJgEANIgBAHIgBAIIABAHIAAAIQAAADgCACQgCACgDABQgDgBgDgCQgCgCAAgDIAAgIIgBgHIACgVIABgWIgBgGIAAgIQAAgEACgCQACgCAEAAQAHAAABAKIAAAJQANgRAMAAQAMAAAFALQADAHABAPIAAAIIAAAFQAAAGABAKIACARQAAAEgCACQgDACgDAAQgGAAgBgIg");
	this.shape_60.setTransform(-147.2,-35.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgZAiQgMgKAAgSQAAgSAJgOQALgPARAAQAMAAAIAEQAKAGAAALQAAAIgJAGQgDADgNAEIgcAOQAEAHAHADQAGADAHAAQAFAAAIgCQAJgDADgEQACgEADAAQADAAACACQACACAAADQAAAJgOAGQgMAFgLAAQgQAAgKgIgAgPgTQgGAGgDANIAYgJQAMgHAGgFQgHgGgLAAQgJAAgGAIg");
	this.shape_61.setTransform(-155.8,-35.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgZAiQgMgKAAgSQAAgSAJgOQALgPARAAQAMAAAIAEQAKAGAAALQAAAIgJAGQgDADgNAEIgcAOQAEAHAHADQAGADAHAAQAFAAAIgCQAJgDADgEQACgEADAAQADAAACACQACACAAADQAAAJgOAGQgMAFgLAAQgQAAgKgIgAgPgTQgGAGgDANIAYgJQAMgHAGgFQgHgGgLAAQgJAAgGAIg");
	this.shape_62.setTransform(-192.8,-35.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgVArQgMgEAAgIQAAgDADgDQACgCAEAAQACAAAEAEQACACAGABIAJABQAFAAAFgCQAHgCAAgFQAAgLgPgDIgGgCQgLgDgEgDQgGgCAAgJQAAgQAPgHIANgFIAPgFIAHgBQADAAACACQADACAAADIABAHIABAHQAAADgDACQgCADgDAAQgEAAgCgDIgCgJIgSAGQgLAFAAAHIAFABQAQAEAIAFQANAGAAAQQAAANgLAGQgJAFgMAAQgKAAgKgDg");
	this.shape_63.setTransform(-201.5,-35.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgZAiQgMgKAAgSQAAgSAJgOQALgPARAAQAMAAAIAEQAKAGAAALQAAAIgJAGQgDADgNAEIgcAOQAEAHAHADQAGADAHAAQAFAAAIgCQAJgDADgEQACgEADAAQADAAACACQACACAAADQAAAJgOAGQgMAFgLAAQgQAAgKgIgAgPgTQgGAGgDANIAYgJQAMgHAGgFQgHgGgLAAQgJAAgGAIg");
	this.shape_64.setTransform(-209.4,-35.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgdAkIAAg1IAAgIIABgIQAAgIAGAAQAIAAAAANQAOgOARAAQAHAAADAFQADAEAAAKIAAAGQgBAJgHAAQgHAAAAgHIAAgGIAAgGQgMABgGAFQgHAGgEAKIAAApQAAAHgIAAQgHAAAAgHg");
	this.shape_65.setTransform(-217.5,-35.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgFAGQgDgDAAgDQAAgDADgCQADgDACAAQAEAAACADQADACAAADQAAADgDADQgCADgEAAQgCAAgDgDg");
	this.shape_66.setTransform(-236.7,-31.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FF0000").s().p("AgZAiQgMgKAAgSQAAgSAJgOQALgPARAAQAMAAAIAEQAKAGAAALQAAAIgJAGQgDADgNAEIgcAOQAEAHAHADQAGADAHAAQAFAAAIgCQAJgDADgEQACgEADAAQADAAACACQACACAAADQAAAJgOAGQgMAFgLAAQgQAAgKgIgAgPgTQgGAGgDANIAYgJQAMgHAGgFQgHgGgLAAQgJAAgGAIg");
	this.shape_67.setTransform(-12.7,-10.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FF0000").s().p("AgdAkIAAg1IAAgIIABgIQAAgIAGAAQAIAAAAANQAOgOARAAQAHAAADAFQADAEAAAKIAAAGQgBAJgHAAQgHAAAAgHIAAgGIAAgGQgMABgGAFQgHAGgEAKIAAApQAAAHgIAAQgHAAAAgHg");
	this.shape_68.setTransform(-20.8,-10.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FF0000").s().p("AAZAnIgGgFIgNAGQgFACgDAAQgSAAgIgKQgIgKAAgUQAAgRANgNQANgOAQAAQAHAAAIAEQALAEAAAGIgCAEIgBAKIgBAPQABAKABAGIAFANIACAEIAAACQAAADgCACQgCACgDAAQgBAAgEgEgAgMgSQgJAKAAALQAAAMAFAHQAFAGAIAAQAGAAAFgCIAIgGQgDgUAAgJIABgIIACgIIgGgCIgDgBQgKAAgJAKg");
	this.shape_69.setTransform(-29,-10.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FF0000").s().p("AgaA8QgKgCAAgGQAAgHAHAAIAJACQAHABAIAAQANAAAGgPQADgJABgUQgFAIgFADQgGAEgGABQgOAAgJgKQgJgKAAgNQAAgVANgNQAMgOAUAAQAHABAFACQAFACACADQAJAAAAAJIgCAPIgCAPIgCAYQAAAQgDAJQgEANgHAGQgKAIgPgBQgLABgHgCgAgNgmQgHAKAAAOQAAALAEADQAEAHAJgBQAGABAHgIQAHgHABgJIADgaIgGgEIgHgBQgNAAgIAKg");
	this.shape_70.setTransform(107.1,-33);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FF0000").s().p("AATAlIgDgRIgBgRIAAgFIABgHQAAgRgGAAQgJAAgGAKQgHAJgEANIgBAHIgBAIIABAHIAAAIQAAADgCACQgCACgDABQgDgBgDgCQgCgCAAgDIAAgIIgBgHIACgVIABgWIgBgGIAAgIQAAgEACgCQACgCAEAAQAHAAABAKIAAAJQANgRAMAAQAMAAAFALQADAHABAPIAAAIIAAAFQAAAGABAKIACARQAAAEgCACQgDACgDAAQgGAAgBgIg");
	this.shape_71.setTransform(99,-35.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FF0000").s().p("AgGA4QgCgCAAgEIAAgOIgBgOIABgSIABgQQAAgEABgCQADgCADAAQACAAACACQACACAAAEIgBAQIgBASIAAAOIABAOQAAAEgDACQgCACgBAAQgDAAgCgCgAgEgqQgCgCAAgEQAAgEACgDQADgCACAAQADAAAEACQACADAAAEQAAAEgCACQgEADgDAAQgCAAgDgDg");
	this.shape_72.setTransform(92.5,-37);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FF0000").s().p("AASAlIgBgRIgBgRIAAgFIAAgHQAAgRgHAAQgIAAgGAKQgHAJgEANIgBAHIAAAIIAAAHIAAAIQAAADgBACQgDACgDABQgDgBgCgCQgDgCAAgDIgBgIIAAgHIABgVIACgWIgBgGIAAgIQAAgEACgCQACgCADAAQAIAAAAAKIABAJQANgRALAAQANAAAFALQADAHABAPIAAAIIAAAFQAAAGACAKIABARQAAAEgCACQgDACgDAAQgGAAgCgIg");
	this.shape_73.setTransform(86.1,-35.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FF0000").s().p("AATAlIgCgRIgBgRIAAgFIAAgHQAAgRgGAAQgJAAgGAKQgHAJgEANIgBAHIAAAIIAAAHIABAIQAAADgCACQgDACgDABQgEgBgCgCQgCgCAAgDIgBgIIAAgHIABgVIABgWIAAgGIAAgIQAAgEACgCQADgCADAAQAHAAABAKIAAAJQANgRAMAAQAMAAAFALQAEAHAAAPIAAAIIgBAFQAAAGACAKIACARQAAAEgCACQgCACgDAAQgIAAAAgIg");
	this.shape_74.setTransform(77.7,-35.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FF0000").s().p("AgHA4QgBgCgBgEIAAgOIAAgOIABgSIAAgQQAAgEACgCQADgCADAAQACAAACACQACACAAAEIgBAQIAAASIAAAOIAAAOQAAAEgDACQgBACgCAAQgDAAgDgCgAgDgqQgEgCAAgEQAAgEAEgDQACgCACAAQAEAAACACQADADAAAEQAAAEgDACQgCADgEAAQgCAAgCgDg");
	this.shape_75.setTransform(71.2,-37);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FF0000").s().p("AgaA8QgKgCAAgGQAAgHAHAAIAJACQAHABAIAAQANAAAGgPQADgJABgUQgFAIgFADQgGAEgGABQgOAAgJgKQgJgKAAgNQAAgVANgNQAMgOAUAAQAHABAFACQAFACACADQAJAAAAAJIgCAPIgCAPIgCAYQAAAQgDAJQgEANgHAGQgKAIgPgBQgLABgHgCgAgNgmQgHAKAAAOQAAALAEADQAEAHAJgBQAGABAHgIQAHgHABgJIADgaIgGgEIgHgBQgNAAgIAKg");
	this.shape_76.setTransform(64.4,-33);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FF0000").s().p("AgZAiQgMgKAAgSQAAgSAJgOQALgPARAAQAMAAAIAEQAKAGAAALQAAAIgJAGQgDADgNAEIgcAOQAEAHAHADQAGADAHAAQAFAAAIgCQAJgDADgEQACgEADAAQADAAACACQACACAAADQAAAJgOAGQgMAFgLAAQgQAAgKgIgAgPgTQgGAGgDANIAYgJQAMgHAGgFQgHgGgLAAQgJAAgGAIg");
	this.shape_77.setTransform(56.1,-35.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FF0000").s().p("AgXA6QgCAEgEAAQgDAAgCgCQgCgDAAgDIAAgGIABgGIgBgYIAAgXIAAgWIAAgWQAAgEACgEQACgFAFAAQAGAAAAAHIgBADIAAADIAAASIAAATQAGgEAHgCQAGgDADAAQARAAAKANQAKAKAAASQAAASgLAMQgMANgPAAQgMAAgKgFgAgLgCIgLAFIAAAOIAAAMIAAANIAKAEQAFACAGAAQAJAAAIgIQAHgIAAgMQAAgMgGgIQgGgGgLAAQgEAAgHAEg");
	this.shape_78.setTransform(47,-37.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FF0000").s().p("AgVArQgMgEAAgIQAAgDADgDQACgCAEAAQACAAAEAEQACACAGABIAJABQAFAAAFgCQAHgCAAgFQAAgLgPgDIgGgCQgLgDgEgDQgGgCAAgJQAAgQAPgHIANgFIAPgFIAHgBQADAAACACQADACAAADIABAHIABAHQAAADgDACQgCADgDAAQgEAAgCgDIgCgJIgSAGQgLAFAAAHIAFABQAQAEAIAFQANAGAAAQQAAANgLAGQgJAFgMAAQgKAAgKgDg");
	this.shape_79.setTransform(33.1,-35.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FF0000").s().p("AgHA4QgBgCAAgEIAAgOIgBgOIABgSIABgQQAAgEABgCQADgCADAAQABAAADACQACACAAAEIgBAQIgBASIAAAOIABAOQAAAEgDACQgCACgBAAQgDAAgDgCgAgEgqQgCgCgBgEQABgEACgDQADgCACAAQAEAAADACQACADAAAEQAAAEgCACQgDADgEAAQgCAAgDgDg");
	this.shape_80.setTransform(27.4,-37);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13,p:{x:-236.7,y:-31.4}},{t:this.shape_12},{t:this.shape_11,p:{x:-217.5,y:-35.1}},{t:this.shape_10,p:{x:-209.4,y:-35.1}},{t:this.shape_9,p:{x:-201.5}},{t:this.shape_8,p:{x:-192.8,y:-35.1}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{x:-155.8,y:-35.1}},{t:this.shape_3,p:{x:-147.2}},{t:this.shape_2,p:{x:-139.5,y:-35.4}},{t:this.shape_1,p:{x:-130.8,y:-35.1}},{t:this.shape}]}).to({state:[{t:this.shape_14},{t:this.shape_66},{t:this.shape_12},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_61,p:{x:-155.8}},{t:this.shape_60},{t:this.shape_59,p:{x:-139.5}},{t:this.shape_58,p:{x:-130.8}},{t:this.shape},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55,p:{x:-92.3}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52,p:{x:-61.9}},{t:this.shape_51,p:{x:-53.3}},{t:this.shape_50,p:{x:-44.1}},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43,p:{x:15.9}},{t:this.shape_42},{t:this.shape_9,p:{x:33.1}},{t:this.shape_41,p:{x:47}},{t:this.shape_40,p:{x:56.1}},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_3,p:{x:99}},{t:this.shape_34,p:{x:107.1}},{t:this.shape_33,p:{x:120.4}},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_10,p:{x:-91.7,y:-10.8}},{t:this.shape_22},{t:this.shape_8,p:{x:-70.6,y:-10.8}},{t:this.shape_21},{t:this.shape_20},{t:this.shape_2,p:{x:-42,y:-11.1}},{t:this.shape_19,p:{x:-29,y:-10.7}},{t:this.shape_18,p:{x:-20.8,y:-10.8}},{t:this.shape_4,p:{x:-12.7,y:-10.8}},{t:this.shape_11,p:{x:0.4,y:-10.8}},{t:this.shape_1,p:{x:8.6,y:-10.8}},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_13,p:{x:40.8,y:-7.1}}]},8).to({state:[{t:this.shape_14},{t:this.shape_66},{t:this.shape_12},{t:this.shape_33,p:{x:-217.5}},{t:this.shape_61,p:{x:-209.4}},{t:this.shape_59,p:{x:-201.5}},{t:this.shape_58,p:{x:-192.8}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_55,p:{x:-155.8}},{t:this.shape_3,p:{x:-147.2}},{t:this.shape_52,p:{x:-139.5}},{t:this.shape_51,p:{x:-130.8}},{t:this.shape},{t:this.shape_57},{t:this.shape_56},{t:this.shape_43,p:{x:-92.3}},{t:this.shape_50,p:{x:-78.4}},{t:this.shape_53},{t:this.shape_9,p:{x:-61.9}},{t:this.shape_40,p:{x:-53.3}},{t:this.shape_41,p:{x:-44.1}},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_34,p:{x:-13.6}},{t:this.shape_19,p:{x:-5.1,y:-35}},{t:this.shape_44},{t:this.shape_10,p:{x:15.9,y:-35.1}},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_18,p:{x:120.4,y:-35.1}},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_8,p:{x:-91.7,y:-10.8}},{t:this.shape_22},{t:this.shape_4,p:{x:-70.6,y:-10.8}},{t:this.shape_21},{t:this.shape_20},{t:this.shape_2,p:{x:-42,y:-11.1}},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_11,p:{x:0.4,y:-10.8}},{t:this.shape_1,p:{x:8.6,y:-10.8}},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_13,p:{x:40.8,y:-7.1}}]},3).to({state:[{t:this.shape_14},{t:this.shape_66},{t:this.shape_12},{t:this.shape_33,p:{x:-217.5}},{t:this.shape_61,p:{x:-209.4}},{t:this.shape_59,p:{x:-201.5}},{t:this.shape_58,p:{x:-192.8}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_55,p:{x:-155.8}},{t:this.shape_3,p:{x:-147.2}},{t:this.shape_52,p:{x:-139.5}},{t:this.shape_51,p:{x:-130.8}},{t:this.shape},{t:this.shape_57},{t:this.shape_56},{t:this.shape_43,p:{x:-92.3}},{t:this.shape_50,p:{x:-78.4}},{t:this.shape_53},{t:this.shape_9,p:{x:-61.9}},{t:this.shape_40,p:{x:-53.3}},{t:this.shape_41,p:{x:-44.1}},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_34,p:{x:-13.6}},{t:this.shape_19,p:{x:-5.1,y:-35}},{t:this.shape_44},{t:this.shape_10,p:{x:15.9,y:-35.1}},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_18,p:{x:120.4,y:-35.1}},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_8,p:{x:-91.7,y:-10.8}},{t:this.shape_22},{t:this.shape_4,p:{x:-70.6,y:-10.8}},{t:this.shape_21},{t:this.shape_20},{t:this.shape_2,p:{x:-42,y:-11.1}},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_11,p:{x:0.4,y:-10.8}},{t:this.shape_1,p:{x:8.6,y:-10.8}},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_13,p:{x:40.8,y:-7.1}}]},2).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-248,-50.8,133.2,26.3);


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
	this.shape.graphics.f().s("#FF3366").ss(3,1,1).p("EAlaAVAMhKzAAAMAAAgp/MBKzAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#DDF5FF","#3399FF"],[0,1],0,-134.5,0.1,134.6).s().p("EglZAVAMAAAgp/MBKzAAAMAAAAp/g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240.9,-135.9,481.9,272);


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


(lib.contentScene2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgmBDQgHgIgBgcIAAgMIABgPIgBgEQAAgBACgCIACgmIgBgJIgBgKQAAgKAJAAQADAAADACQAKgDAKgBIAPgBQAWAAAMAFQAHACAAAGQAAAEgCACQgDADgEAAIgCAAQgQgEgOAAIgNABQgJABgJADIABAJIgCAiIAlgEIAUgCQAEAAADADQACACAAAEQAAAGgIABIgUACIgoAEIAAAMIAAAKQAAAUADADQACADALAAIAPgBIARAAIAEgBIAGAAQAJAAAAAJQAAAHgIACQgIABgaAAQgaAAgJgHg");
	this.shape.setTransform(94.6,-95.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgiA9QgQgIAAgNQgBgEADgCQADgCADAAQAFgBADAFQAEAHAEACQAHAFAPAAQALAAAMgGQAPgHAAgNQAAgMgNgGQgKgGgOAAQgOAAgKgFQgMgGAAgOQAAgQASgMQARgMAQAAQAIAAALACQAOAEAAAGQAAAIgIAAIgMgCIgOgCQgLAAgKAHQgKAGAAAKQAAAIANACQAFACAMABQAUABALAMQALAIAAAPQAAAUgTAMQgRAMgUAAQgRgBgNgFg");
	this.shape_1.setTransform(82.5,-94.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("Ag6BEQgDgDAAgDIABgMIABgLIAAgQIABgQIgBgQIAAgRIgBgRIgBgQQAAgEAEgEQADgDAEAAQAFAAAHAKQAVAhARAWQAUAXAYAYIAAgLIAAgLQAAglgDgXIgCgJIgBgJQAAgLAJAAQAPAAAAA5IgBAcIAAAdIgBAOQgCAJgIAAQgEAAgHgHQgjghgtg+IAAAUIAAASIAAAWIAAAWQAAAXgJAAQgFAAgDgDg");
	this.shape_2.setTransform(69.2,-95.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgmBDQgHgIAAgcIAAgMIABgPIgBgEQAAgBABgCIACgmIgBgJIgBgKQAAgKAJAAQADAAADACQAKgDAKgBIAQgBQAVAAAMAFQAHACAAAGQAAAEgCACQgDADgEAAIgCAAQgPgEgOAAIgOABQgIABgKADIABAJIgCAiIAkgEIAVgCQAEAAACADQADACAAAEQABAGgJABIgVACIgmAEIgBAMIAAAKQAAAUADADQACADALAAIAPgBIARAAIAFgBIAEAAQAKAAAAAJQAAAHgIACQgIABgaAAQgbAAgIgHg");
	this.shape_3.setTransform(56.5,-95.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgFBAQgDgCAAgEIABgEIAAgEIAAgNIgBgNIgCgiIgCgjIgIAAQgTAAgLgDQgIgBAAgHQAAgEADgDQACgDAEABIAPABIAOABIAQAAIAOAAIAUABIAUABQAEAAACACQADADAAAEQAAAEgDACQgCADgEAAIgUgBIgUgBIgGAAQAAAMACAbIACAmIABAJIAAAJQAAAGgCAFQgCAFgFAAQgCAAgDgCg");
	this.shape_4.setTransform(45.2,-95.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgoBDQgDgEAAgDIAAgaIABgiIACgkQAAgIABgQQABgEACgCQAMgEAQABQANAAAOAKQARAMAAASQAAAWgSALQANAGAHAHQAGAHAAAIQAAAKgMAKQgHAIgJADQgSAIgfgBQgDAAgEgDgAgaAiIAAASQAXAAANgGQAGgCAFgFQAGgFAAgCQAAgEgLgGQgJgDgHgCIgIgCIgEAAIgDAAIgKgBIgBAUgAgWgzIgBAPIgBAiIANABQAMgBAIgHQAJgIAAgMQAAgIgJgIQgJgGgIAAIgOAAg");
	this.shape_5.setTransform(27.7,-95.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgsBCQgCgCAAgEIgBgVIAAgVIABgWIACgYIgBgNIgBgNQAAgFADgEQAEgFAFABIAWABQAMACAGAEQAkATAAAbQAAAOgNAIQgJAIgPAFQAbAOAOARQACACAAAEQAAADgCADQgDADgEAAQgDAAgDgDQgdgdgigKIABARIAAASQAAAEgCACQgDADgDAAQgEAAgDgDgAgbgmIABALIgBARIgCAQIAEAAIADAAQAWAAAKgGQAFgBAEgEQAFgFAAgEQAAgMgOgKQgLgKgOgBIgNgCg");
	this.shape_6.setTransform(16.2,-95.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgmBDQgHgIgBgcIAAgMIABgPIgBgEQAAgBACgCIACgmIgBgJIgBgKQAAgKAJAAQADAAADACQAKgDAKgBIAPgBQAWAAAMAFQAHACAAAGQAAAEgCACQgDADgEAAIgCAAQgQgEgOAAIgNABQgJABgJADIABAJIgCAiIAlgEIAUgCQAEAAADADQACACAAAEQAAAGgIABIgUACIgoAEIAAAMIAAAKQAAAUADADQACADALAAIAPgBIARAAIAEgBIAGAAQAJAAAAAJQAAAHgIACQgIABgaAAQgaAAgJgHg");
	this.shape_7.setTransform(5,-95.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgOA/QgLgagNgwIgHgYQgFgTAAgGQAAgDACgDQADgCAEAAQAGAAADAHIACAQIAJAdQAIAfAIAXIABgBIAWg+IAHgVQAFgNAGgHQACgDAEgBQAEAAADADQACADAAADQAAADgBADQgGAIgDAJIgHAUIgXA+IgKAVQgBAGgFAAQgHAAgCgIg");
	this.shape_8.setTransform(-6.1,-95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},405).wait(6));

	// Layer 12
	this.instance = new lib.s2_s1();
	this.instance.setTransform(65.5,17.1);

	this.instance_1 = new lib.s2_s2();
	this.instance_1.setTransform(65.2,81.1);

	this.instance_2 = new lib.s2_s3();
	this.instance_2.setTransform(65.4,143.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance,p:{mode:"independent",startPosition:undefined}}]},76).to({state:[{t:this.instance,p:{mode:"single",startPosition:13}},{t:this.instance_1,p:{mode:"independent",startPosition:undefined}}]},114).to({state:[{t:this.instance,p:{mode:"single",startPosition:13}},{t:this.instance_1,p:{mode:"single",startPosition:12}},{t:this.instance_2}]},99).to({state:[]},116).wait(6));

	// Layer 4
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgGAHQgEgDAAgEQAAgDAEgDQADgDADAAQAEAAADADQAEADAAADQAAAEgEADQgDADgEAAQgDAAgDgDg");
	this.shape_9.setTransform(271.8,-58.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgXAxQgOgGAAgJQAAgDADgCQADgDADAAQADAAAEAEQADACAHABIAKABQAFABAGgCQAIgDAAgGQAAgLgRgFIgHgCQgLgCgFgEQgIgCAAgKQAAgTASgHIAPgGIAQgGQAEgCAEAAQAEAAACADQADACAAAEIABAIIABAHQAAAEgCADQgDADgEgBQgFAAgBgDQgCgCgBgHIgUAFQgMAGAAAJIAFABQASADAKAHQAOAHAAARQAAAPgMAIQgKAFgOAAQgMAAgKgDg");
	this.shape_10.setTransform(264.8,-63.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AghAoIAAg8IABgJIAAgIQAAgJAIAAQAIAAAAAOQAQgQAUAAQAHAAADAFQAEAGAAALIAAAGQgBALgIAAQgIAAAAgJIAAgGIAAgHQgOABgGAGQgIAGgFAMIAAAuQAAAJgJAAQgIAAAAgJg");
	this.shape_11.setTransform(256.6,-62.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AATApQgLAGgMAAQgMAAgHgFQgIgGgCgKQgEgYABgQQAAgMACgPQACgIAHAAQADAAADADQACACABAEIgCANIgBANIABAXQABALACAGIAGADIAFAAQAKAAANgDIAAgSIAAgPQgBgTACgOQABgIAIAAQADAAADACQADADgBADIgBAhIAAARIAAATIABAGIAAAGQgBAEgCACQgCADgEAAQgHAAgCgJg");
	this.shape_12.setTransform(247.4,-62.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgXAmQgOgMAAgSQAAgQANgTQANgVAOAAQAJAAAKAEQAOAGAAAHQAAADgCACQgCADgDABQgBAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAIgDgEQgGgDgMAAQgHAAgJAPQgIAPAAAJQAAAMAIAGQAIAHAJAAQAFAAAGgDIALgGIAEgBQADAAADACQACADAAAEQAAAGgOAGQgLAFgJAAQgPAAgMgLg");
	this.shape_13.setTransform(238.1,-62.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgYAmQgMgMAAgSQAAgQAMgTQANgVAOAAQAJAAAKAEQAOAGAAAHQAAADgCACQgDADgDABQAAAAgBgBQAAAAgBAAQAAAAgBAAQgBgBAAAAIgEgEQgFgDgMAAQgGAAgKAPQgHAPgBAJQABAMAHAGQAIAHAJAAQAGAAAGgDIAKgGIADgBQAEAAADACQACADgBAEQAAAGgNAGQgLAFgJAAQgPAAgNgLg");
	this.shape_14.setTransform(228.9,-62.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgZAlQgMgMAAgVQgBgRALgQQAMgSAUAAQARABAJAQQAIANgBARQAAASgKAOQgLAQgRAAQgOAAgLgLgAgOgRQgGAKAAALQAAANAHAHQAGAGAHAAQAIAAAGgHQAIgHAAgMQABghgTAAQgLAAgHAMg");
	this.shape_15.setTransform(219.4,-62.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAVArIgDgUIgBgTIABgGIAAgIQAAgUgHABQgKAAgHALQgIAKgFAPIgBAJIAAAIIAAAIIABAIQAAAEgCACQgDACgEABQgDgBgDgCQgCgCAAgEIgBgIIAAgIIABgYIABgYIAAgJIAAgIQAAgEACgCQADgDADAAQAIAAABAMIAAAKQAPgTAOAAQAOAAAFAMQAEAIAAARIAAAIIAAAHIACATQACALAAAHQAAAEgCADQgDACgEAAQgHgBgBgHg");
	this.shape_16.setTransform(204.9,-62.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgZAlQgMgMAAgVQgBgRALgQQAMgSAUAAQARABAJAQQAIANgBARQAAASgKAOQgLAQgRAAQgOAAgLgLgAgOgRQgGAKAAALQAAANAHAHQAGAGAHAAQAIAAAGgHQAIgHAAgMQABghgTAAQgLAAgHAMg");
	this.shape_17.setTransform(195.2,-62.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgHA/QgDgCAAgEIAAgQIgBgQIABgUIACgTQAAgEACgCQADgDADAAQACAAACADQACACAAAEIAAATIgBAUIAAAQIAAAQQAAAEgCACQgCADgCAAQgEAAgCgDgAgFgvQgCgDAAgFQAAgDACgEQAEgDACAAQAEAAAEADQACAEAAADQAAAFgCADQgEACgEAAQgCAAgEgCg");
	this.shape_18.setTransform(188.3,-64.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgEA+QgCgDgBgDIAAgKIABgKIgCgxIgTgCQgJgBABgIQgBgEADgCQADgDADAAIATACIAAgMIgBgLQAAgEACgCQADgDAEAAQAFAAACANIAAAIIAAAFIAAAGIAMgCIAMABQAGACgBAGQAAAEgBADQgDACgEAAIgEAAIgFAAIgLABIABAyIAAAEIAAAFQAAATgJAAQgCAAgCgCg");
	this.shape_19.setTransform(181.3,-64.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgYAmQgNgMABgSQgBgQAMgTQAOgVAPAAQAIAAALAEQANAGAAAHQAAADgCACQgCADgEABQAAAAgBgBQAAAAgBAAQAAAAgBAAQgBgBAAAAIgEgEQgFgDgLAAQgIAAgIAPQgIAPAAAJQAAAMAIAGQAHAHAKAAQAEAAAHgDIAKgGIADgBQAEAAACACQACADAAAEQAAAGgNAGQgMAFgHAAQgRAAgMgLg");
	this.shape_20.setTransform(172.5,-62.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAcAsIgGgGIgPAHIgJACQgUAAgKgMQgJgKAAgXQAAgTAPgPQAPgPASAAQAHAAAKADQAMAGAAAHQAAAAAAABQAAAAgBABQAAAAAAABQAAABgBAAIgBALIgBASQAAAKACAGIAFAQIACAFIABABQAAAEgDACQgCACgDABQgCAAgEgFgAgOgUQgJALAAAMQAAAPAFAGQAFAIAKAAQAGAAAGgDIAJgHQgDgWAAgLIABgIIABgKIgFgCIgEAAQgMAAgKALg");
	this.shape_21.setTransform(163.2,-62.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAVArIgDgUIgBgTIABgGIAAgIQAAgUgHABQgKAAgHALQgIAKgFAPIgBAJIAAAIIAAAIIABAIQAAAEgCACQgDACgEABQgDgBgDgCQgCgCAAgEIgBgIIAAgIIABgYIABgYIAAgJIAAgIQAAgEACgCQADgDADAAQAIAAABAMIAAAKQAPgTAOAAQAOAAAFAMQAEAIAAARIAAAIIAAAHIACATQACALAAAHQAAAEgCADQgDACgEAAQgHgBgBgHg");
	this.shape_22.setTransform(148.7,-62.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAcAsIgGgGIgPAHIgJACQgUAAgKgMQgJgKAAgXQAAgTAPgPQAPgPASAAQAHAAAKADQAMAGAAAHQAAAAAAABQAAAAgBABQAAAAAAABQAAABgBAAIgBALIgBASQAAAKACAGIAFAQIACAFIABABQAAAEgDACQgCACgDABQgCAAgEgFgAgOgUQgJALAAAMQAAAPAFAGQAFAIAKAAQAGAAAGgDIAJgHQgDgWAAgLIABgIIABgKIgFgCIgEAAQgMAAgKALg");
	this.shape_23.setTransform(139.2,-62.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAVArIgDgUIgBgTIABgGIAAgIQAAgUgHABQgKAAgHALQgIAKgFAPIgBAJIAAAIIAAAIIABAIQAAAEgCACQgDACgEABQgDgBgDgCQgCgCAAgEIgBgIIAAgIIABgYIABgYIAAgJIAAgIQAAgEACgCQADgDADAAQAIAAABAMIAAAKQAPgTAOAAQAOAAAFAMQAEAIAAARIAAAIIAAAHIACATQACALAAAHQAAAEgCADQgDACgEAAQgHgBgBgHg");
	this.shape_24.setTransform(124.7,-62.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgdAlQgNgKAAgUQAAgVALgPQAMgRATAAQAOAAAJAEQALAHAAAMQAAAJgKAHQgEADgOAFIggAQQAFAHAHAEQAIADAIABQAGAAAIgCQAKgDADgFQADgFAEAAQADAAACACQACADAAADQAAAJgPAIQgOAFgMABQgSAAgNgLgAgRgWQgHAIgDAPIAbgLQAOgIAGgGQgHgGgNAAQgKgBgHAJg");
	this.shape_25.setTransform(115.1,-62.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAXBCIgDgUIgBgVIAAgHIAAgHQAAgPgIAAQgLAAgHAIQgFAGgIAOQAAAigCAGQgDAFgFAAQgEAAgDgCQgDgDAAgDIABgEIABgNIABgNIAAg/IAAgOIAAgJIgBgIQAAgEACgCQADgDAEAAQAHAAABAIIABAQIAAATIgBATIAAAIQAIgKAIgFQAGgEAKAAQAOAAAFAJQAEAHABAOIABAQIACATIACASIAAACQABAEgDACQgDADgDAAQgHAAgCgHg");
	this.shape_26.setTransform(104.9,-65.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAFAZIgEgVIgBgRIgHAPIgNAkQgBADgDACQgCAFgGAAQgHABgFgbQgEgNgDgWIgCgNIgBgNQAAgEACgCQADgDAEAAQAGAAACAIIACAMIABANIAFAmQAKgZALgkQACgJAGAAQAGAAADALIAGAfIAGAhIAGgYIALguQACgFAGAAQAEAAADACQACADAAADIAAAEQgIAdgLAiQgCAIgGAIQgDAFgFAAQgKAAgFgYg");
	this.shape_27.setTransform(93.5,-62.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgdAlQgNgKAAgUQAAgVALgPQAMgRATAAQAOAAAJAEQALAHAAAMQAAAJgKAHQgEADgOAFIggAQQAFAHAHAEQAIADAIABQAGAAAIgCQAKgDADgFQADgFAEAAQADAAACACQACADAAADQAAAJgPAIQgOAFgMABQgSAAgNgLgAgRgWQgHAIgDAPIAbgLQAOgIAGgGQgHgGgNAAQgKgBgHAJg");
	this.shape_28.setTransform(77.2,-62.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgEAzQgCgCAAgEIgCggIgCgdQAAgJgDgGQgGADgHAHIgKALIgEAGIgBANIgBAPIAAAIIABAHQAAADgCADQgDACgEAAQgKAAAAgWIABgQIABgOIAAgOIgBgOQAAgUAJAAQADAAADADQADADAAAEIgBAFIAAAFIAAAJQAFgJAIgIQAJgHAHAAQANAAAEAOQAEgHAHgDQAHgDAIAAQAPAAAFAQQACADACAVIAGAxQABADgDADQgDACgDAAQgIAAgBgIIgDgbIgDgZQgBgGgCgGQgDgIgDAAQgEAAgJAGQgIAFgDADIABAQIACAWQACAOAAAJQAAAEgCACQgDADgEAAQgBAAgDgDg");
	this.shape_29.setTransform(65.2,-62.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgHA/QgCgCgBgEIAAgQIgBgQIABgUIABgTQAAgEADgCQADgDADAAQACAAADADQABACAAAEIAAATIgBAUIAAAQIAAAQQABAEgDACQgCADgCAAQgEAAgCgDgAgEgvQgDgDgBgFQABgDADgEQADgDACAAQAEAAADADQAEAEAAADQAAAFgEADQgDACgEAAQgCAAgDgCg");
	this.shape_30.setTransform(55.8,-64.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgEA+QgDgDABgDIAAgKIAAgKIgCgxIgUgCQgHgBAAgIQAAgEACgCQADgDADAAIATACIAAgMIgBgLQAAgEADgCQACgDADAAQAHAAABANIAAAIIAAAFIAAAGIANgCIALABQAGACAAAGQAAAEgCADQgDACgEAAIgFAAIgDAAIgMABIABAyIAAAEIAAAFQAAATgJAAQgBAAgDgCg");
	this.shape_31.setTransform(48.8,-64.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgdAlQgNgKAAgUQAAgVALgPQAMgRATAAQAOAAAJAEQALAHAAAMQAAAJgKAHQgEADgOAFIggAQQAFAHAHAEQAIADAIABQAGAAAIgCQAKgDADgFQADgFAEAAQADAAACACQACADAAADQAAAJgPAIQgOAFgMABQgSAAgNgLgAgRgWQgHAIgDAPIAbgLQAOgIAGgGQgHgGgNAAQgKgBgHAJg");
	this.shape_32.setTransform(34.4,-62.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAXBCIgDgUIgBgVIAAgHIAAgHQAAgPgIAAQgLAAgIAIQgEAGgIAOQAAAigCAGQgDAFgFAAQgEAAgDgCQgCgDAAgDIAAgEIABgNIABgNIAAg/IAAgOIAAgJIgBgIQAAgEACgCQADgDAEAAQAHAAABAIIABAQIAAATIgBATIAAAIQAIgKAIgFQAHgEAJAAQAOAAAGAJQADAHABAOIAAAQIADATIADASIAAACQgBAEgCACQgCADgEAAQgHAAgCgHg");
	this.shape_33.setTransform(24.3,-65.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgEA+QgDgDABgDIAAgKIAAgKIgCgxIgTgCQgIgBAAgIQAAgEACgCQADgDADAAIATACIAAgMIgBgLQAAgEADgCQACgDAEAAQAFAAACANIAAAIIAAAFIAAAGIAMgCIAMABQAGACAAAGQAAAEgCADQgDACgEAAIgFAAIgEAAIgLABIABAyIAAAEIAAAFQAAATgJAAQgBAAgDgCg");
	this.shape_34.setTransform(14.7,-64.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgXAxQgOgGAAgJQAAgDADgCQADgDADAAQADAAAEAEQADACAHABIAKABQAFABAGgCQAIgDAAgGQAAgLgRgFIgHgCQgLgCgFgEQgIgCAAgKQAAgTASgHIAPgGIAQgGQAEgCAEAAQAEAAACADQADACAAAEIABAIIABAHQAAAEgCADQgDADgEgBQgFAAgBgDQgCgCgBgHIgUAFQgMAGAAAJIAFABQASADAKAHQAOAHAAARQAAAPgMAIQgKAFgOAAQgMAAgKgDg");
	this.shape_35.setTransform(0.4,-63.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAFAZIgEgVIgBgRIgHAPIgNAkQgBADgDACQgCAFgGAAQgHABgGgbQgDgNgDgWIgCgNIgBgNQAAgEACgCQADgDAEAAQAGAAACAIIABAMIACANIAFAmQAKgZAKgkQAEgJAFAAQAGAAADALIAGAfIAGAhIAGgYIALguQACgFAGAAQAEAAACACQADADAAADIgBAEQgGAdgMAiQgCAIgGAIQgDAFgFAAQgJAAgGgYg");
	this.shape_36.setTransform(-9.8,-62.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgZAlQgMgMAAgVQgBgRALgQQAMgSAUAAQARABAJAQQAIANgBARQAAASgKAOQgLAQgRAAQgOAAgLgLgAgOgRQgGAKAAALQAAANAHAHQAGAGAHAAQAIAAAGgHQAIgHAAgMQABghgTAAQgLAAgHAMg");
	this.shape_37.setTransform(-20.8,-62.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAYBCIgEgUIgCgVIAAgHIABgHQAAgPgJAAQgKAAgIAIQgEAGgHAOQAAAigEAGQgCAFgFAAQgEAAgCgCQgDgDAAgDIABgEIABgNIAAgNIAAg/IABgOIgBgJIgBgIQAAgEACgCQADgDAEAAQAHAAABAIIACAQIgBATIAAATIAAAIQAHgKAIgFQAHgEAIAAQAPAAAGAJQAEAHAAAOIAAAQIACATIAEASIAAACQAAAEgDACQgDADgDAAQgGAAgCgHg");
	this.shape_38.setTransform(-30.5,-65.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgXAxQgOgGAAgJQAAgDADgCQADgDADAAQADAAAEAEQADACAHABIAKABQAFABAGgCQAIgDAAgGQAAgLgRgFIgHgCQgLgCgFgEQgIgCAAgKQAAgTASgHIAPgGIAQgGQAEgCAEAAQAEAAACADQADACAAAEIABAIIABAHQAAAEgCADQgDADgEgBQgFAAgBgDQgCgCgBgHIgUAFQgMAGAAAJIAFABQASADAKAHQAOAHAAARQAAAPgMAIQgKAFgOAAQgMAAgKgDg");
	this.shape_39.setTransform(-40.4,-63.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF0000").s().p("AgmBDQgHgIgBgcIAAgMIABgPIgBgEQAAgBACgCIACgmIgBgJIgBgKQAAgKAJAAQADAAADACQAKgDAKgBIAPgBQAWAAAMAFQAHACAAAGQAAAEgCACQgDADgEAAIgCAAQgQgEgOAAIgNABQgJABgJADIABAJIgCAiIAlgEIAUgCQAEAAADADQACACAAAEQAAAGgIABIgUACIgoAEIAAAMIAAAKQAAAUADADQACADALAAIAPgBIARAAIAEgBIAGAAQAJAAAAAJQAAAHgIACQgIABgaAAQgaAAgJgHg");
	this.shape_40.setTransform(-55.3,-65);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF0000").s().p("AgiA8QgQgHAAgNQgBgEADgDQADgBADAAQAFgBADAFQAEAHAEACQAHAFAPAAQALAAAMgGQAPgHAAgNQAAgMgNgGQgKgGgOAAQgOAAgKgEQgMgIAAgNQAAgPASgNQARgMAQAAQAIAAALACQAOAEAAAGQAAAIgIAAIgMgCIgOgCQgLAAgKAHQgKAGAAAKQAAAIANACQAFACAMABQAUABALALQALAJAAAPQAAAUgTAMQgRAMgUAAQgRgBgNgGg");
	this.shape_41.setTransform(-67.3,-64.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FF0000").s().p("Ag6BEQgDgDAAgDIABgMIABgLIAAgQIABgQIgBgQIAAgRIgBgRIgBgQQAAgEAEgEQADgDAEAAQAFAAAHAKQAVAhARAWQAUAXAYAYIAAgLIAAgLQAAglgDgXIgCgJIgBgJQAAgLAJAAQAPAAAAA5IgBAcIAAAdIgBAOQgCAJgIAAQgEAAgHgHQgjghgtg+IAAAUIAAASIAAAWIAAAWQAAAXgJAAQgFAAgDgDg");
	this.shape_42.setTransform(-80.7,-64.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF0000").s().p("AgmBDQgHgIAAgcIAAgMIABgPIgBgEQAAgBABgCIACgmIgBgJIgBgKQAAgKAJAAQADAAADACQAKgDAKgBIAQgBQAVAAAMAFQAHACgBAGQAAAEgBACQgDADgEAAIgCAAQgPgEgOAAIgOABQgIABgKADIABAJIgCAiIAkgEIAVgCQAEAAACADQADACAAAEQABAGgJABIgVACIgmAEIgBAMIAAAKQAAAUADADQACADALAAIAPgBIAQAAIAGgBIAEAAQAKAAAAAJQAAAHgIACQgIABgaAAQgbAAgIgHg");
	this.shape_43.setTransform(-93.3,-65);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FF0000").s().p("AgFBAQgDgCAAgEIABgEIAAgEIAAgNIgBgNIgCgiIgCgjIgIAAQgTAAgLgDQgIgBAAgHQAAgEADgDQACgDAEABIAPABIAOABIAQAAIAOAAIAUABIAUABQAEAAACACQADADAAAEQAAAEgDACQgCADgEAAIgUgBIgUgBIgGAAQAAAMACAbIACAmIABAJIAAAJQAAAGgCAFQgCAFgFAAQgCAAgDgCg");
	this.shape_44.setTransform(-104.6,-65);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FF0000").s().p("AgoBDQgDgEAAgDIAAgaIABgiIACgkQAAgIABgQQABgEACgCQAMgEAQABQANAAAOAKQARAMAAASQAAAWgSALQANAGAGAHQAHAHAAAIQAAALgMAKQgHAGgJAEQgSAIgfAAQgDAAgEgEgAgaAjIAAASQAXgBANgGQAGgCAFgFQAGgFAAgCQAAgEgLgGQgJgEgHgBIgIgCIgEAAIgDAAIgKgBIgBAVgAgWgzIgBAQIgBAhIANABQAMAAAIgIQAJgIAAgMQAAgJgJgGQgJgIgIABIgOAAg");
	this.shape_45.setTransform(-122.1,-65.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FF0000").s().p("AgsBCQgCgCAAgEIgBgVIAAgVIABgWIACgYIgBgNIgBgNQAAgFADgEQAEgFAFABIAWABQAMACAGAEQAkATAAAbQAAAOgNAIQgJAIgPAFQAbAOAOARQACACAAAEQAAADgCADQgDADgEAAQgDAAgDgDQgdgdgigKIABARIAAASQAAAEgCACQgDADgDAAQgEAAgDgDgAgbgmIABALIgBARIgCAQIAEAAIADAAQAWAAAKgGQAFgBAEgEQAFgFAAgEQAAgMgOgKQgLgKgOgBIgNgCg");
	this.shape_46.setTransform(-133.6,-65);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FF0000").s().p("AgmBDQgHgIgBgcIAAgMIABgPIgBgEQAAgBACgCIACgmIgBgJIgBgKQAAgKAJAAQADAAADACQAKgDAKgBIAPgBQAWAAAMAFQAHACAAAGQAAAEgCACQgDADgEAAIgCAAQgQgEgOAAIgNABQgJABgJADIABAJIgCAiIAlgEIAUgCQAEAAADADQACACAAAEQAAAGgIABIgUACIgoAEIAAAMIAAAKQAAAUADADQACADALAAIAPgBIARAAIAEgBIAGAAQAJAAAAAJQAAAHgIACQgIABgaAAQgaAAgJgHg");
	this.shape_47.setTransform(-144.8,-65);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FF0000").s().p("AgOA/QgLgagNgwIgHgYQgFgSAAgHQAAgEACgCQADgCAEAAQAGAAADAHIACAQIAJAdQAIAfAIAXIABgBIAWg+IAHgVQAFgNAGgHQACgDAEgBQAEAAADADQACADAAADQAAADgBADQgGAIgDAJIgHAUIgXA+IgKAVQgBAGgFAAQgHAAgCgIg");
	this.shape_48.setTransform(-156,-64.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAeAtQgCgIgEgUIgXAFIgWAFQgEALgLAWQgCAFgFAAQgEAAgCgCQgDgDAAgEQAAgEANgcQgBgCAAgDQAAgHAIgCIAZgpQATgiAFAAQAHAAADAKIAFAeIAOA7IAFAOIACAJQAAAEgDACQgCADgEAAQgIAAgGgVgAgKAGIAegGIgHghg");
	this.shape_49.setTransform(-174.5,-64.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]}).to({state:[]},405).wait(6));

	// Layer 11
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(255,255,255,0.502)").s().p("EglUAC9IAAl6MBKpAAAIAAF6g");
	this.shape_50.setTransform(45.3,-64.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_50).to({_off:true},405).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-193.7,-110.5,478,65);


// stage content:



(lib.intro__Scene3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene3:0,scene3_repeat:390});

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
		
		 window.open ("intro_Summary.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("intro_Scene2.html","_self");
		}
	}
	this.frame_1 = function() {
		playSound("space_blip");
	}
	this.frame_4 = function() {
		playSound("averbtenseshowsthetime");
	}
	this.frame_75 = function() {
		playSound("pad_present");
	}
	this.frame_79 = function() {
		playSound("presenttense1");
	}
	this.frame_99 = function() {
		playSound("presenttensebaseballgamebeginningnow");
	}
	this.frame_147 = function() {
		playSound("pad_past");
	}
	this.frame_149 = function() {
		playSound("presenttenseteamsareready");
	}
	this.frame_190 = function() {
		playSound("pastalisonbaseballgameswerereadytoplay");
	}
	this.frame_219 = function() {
		playSound("pad_participle");
	}
	this.frame_290 = function() {
		playSound("pastparticiple");
	}
	this.frame_312 = function() {
		playSound("participlebaseballbatisbroken");
	}
	this.frame_346 = function() {
		playSound("pastparticiplevisitingteambeaten");
	}
	this.frame_404 = function() {
		this.gotoAndPlay("scene3_repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(3).call(this.frame_4).wait(71).call(this.frame_75).wait(4).call(this.frame_79).wait(20).call(this.frame_99).wait(48).call(this.frame_147).wait(2).call(this.frame_149).wait(41).call(this.frame_190).wait(29).call(this.frame_219).wait(71).call(this.frame_290).wait(22).call(this.frame_312).wait(34).call(this.frame_346).wait(58).call(this.frame_404).wait(1));

	// content
	this.instance = new lib.contentScene2("synched",0);
	this.instance.setTransform(228.3,160.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(405));

	// main
	this.instance_1 = new lib.Background();
	this.instance_1.setTransform(275,188.5,1.038,1.067);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(405));

	// buttons
	this.btn_menu = new lib.skiptomenu();
	this.btn_menu.setTransform(514.1,20.3);
	new cjs.ButtonHelper(this.btn_menu, 0, 1, 2, false, new lib.skiptomenu(), 3);

	this.instance_2 = new lib.Copyright("synched",0);
	this.instance_2.setTransform(275,393.5);

	this.btn_goBack = new lib.goNext();
	this.btn_goBack.setTransform(57.6,352.3,1,1,0,0,180);
	new cjs.ButtonHelper(this.btn_goBack, 0, 1, 2, false, new lib.goNext(), 3);

	this.btn_goNext = new lib.goNext();
	this.btn_goNext.setTransform(494,352.3);
	new cjs.ButtonHelper(this.btn_goNext, 0, 1, 2, false, new lib.goNext(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_goNext},{t:this.btn_goBack},{t:this.instance_2},{t:this.btn_menu}]}).wait(405));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(284.2,201.8,537.1,401.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;