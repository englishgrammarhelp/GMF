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
		{src:"sounds/atotalsumoftime.mp3", id:"atotalsumoftime"},
		{src:"sounds/boo.mp3", id:"boo"},
		{src:"sounds/departure.mp3", id:"departure"},
		{src:"sounds/f_blip.mp3", id:"f_blip"},
		{src:"sounds/ohbaby.mp3", id:"ohbaby"},
		{src:"sounds/perc_techno.mp3", id:"perc_techno"},
		{src:"sounds/real_disco.mp3", id:"real_disco"},
		{src:"sounds/relax.mp3", id:"relax"},
		{src:"sounds/s_coolcheer.mp3", id:"s_coolcheer"},
		{src:"sounds/_1a.mp3", id:"_1a"},
		{src:"sounds/_2a.mp3", id:"_2a"},
		{src:"sounds/_2b.mp3", id:"_2b"},
		{src:"sounds/_2c.mp3", id:"_2c"},
		{src:"sounds/_2d.mp3", id:"_2d"},
		{src:"sounds/_2f.mp3", id:"_2f"},
		{src:"sounds/_3b.mp3", id:"_3b"},
		{src:"sounds/_4d.mp3", id:"_4d"},
		{src:"sounds/_5a.mp3", id:"_5a"},
		{src:"sounds/space_udu.mp3", id:"space_udu"},
		{src:"sounds/whistles_crowd.mp3", id:"whistles_crowd"}
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



(lib.static_whitebox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.482)").s().p("A/nKgIAA1EMA/PAAFIAAVEg");
	this.shape.setTransform(202.4,67.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,404.9,135.5);


(lib.static_rule1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNAMQgGgGAAgGQAAgFAGgFQAGgGAHAAQAJAAAGAFQAFAFAAAGQAAAHgGAFQgGAFgIAAQgHAAgGgFg");
	this.shape.setTransform(80.6,67.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AglBgQgEAFgHAAQgHAAgEgFQgGgFABgGIAAgKIAAgJIAAiOQAAgJAFgHQAEgJAJAAQAPAAAAAPIgBAFIAAAFIAAAxQAJgGAJgCQAIgDAGAAQAeAAATAWQARASAAAdQAAAegVAUQgUAVgbAAQgSAAgRgGgAgNgBQgJABgKAIIAAA2QARAHANAAQAOAAAKgKQAKgLAAgRQAAgQgIgLQgJgJgPAAQgFAAgIAEg");
	this.shape_1.setTransform(67.4,58.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgxBCQgEgFAAgHIAAhRIABgMIAAgMQgBgHAFgEQAEgFAIAAQAOAAACAOQAVgRAcAAQAZAAAAAiIAAAJQgCATgQAAQgQAAAAgQIAAgNQgbAEgNAZIABA+QAAAHgFAFQgFAFgIAAQgHAAgFgFg");
	this.shape_2.setTransform(53.6,61.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgqA2QgVgQgBgdQAAgeARgWQATgZAeAAQAWAAAPAHQATAKAAATQAAAOgQALQgHAFgWAIIgoATQAGAGAJADQAJAEAIAAQASAAALgHQALgGAGAAQAOAAAAAMQgBAPgVAJQgRAIgVAAQgcAAgTgPgAgQgdQgJAIgFAPIAdgMQAPgIAKgGQgJgFgNAAQgKAAgIAIg");
	this.shape_3.setTransform(39.7,61.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgRA4IgrhkIgBgHQAAgIAGgEQAFgFAHAAQALAAAFAKQAHAPAUA3IASgqIAKgbQAGgLAKAAQAHAAAGAGQAFAEAAAHQAAAFgUAuIgbA3QgBAGgEAEQgFAEgFAAQgMAAgFgNg");
	this.shape_4.setTransform(26.5,61.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgxBCQgEgFAAgHIAAhRIAAgMIAAgMQAAgHAFgEQAEgFAIAAQAOAAACAOQAVgRAcAAQAZAAAAAiIAAAJQgCATgQAAQgQAAAAgQIAAgNQgbAEgNAZIABA+QAAAHgFAFQgFAFgIAAQgHAAgFgFg");
	this.shape_5.setTransform(2.7,61.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AAeA6QgLAGgJACQgJADgEAAQgfAAgPgQQgQgRAAggQAAgdAXgVQAXgWAdAAQAMAAAQAGQATAJAAAKQAAAFgDADIgCANIAAASQAAAWADAKIAGANIAFANQAAAGgFAFQgGAEgGAAQgGAAgNgLgAgRgYQgMANAAAQQAAARAGAJQAGAIAMAAQAGAAAHgDQAHgCAGgFQgEgdAAgOIABgKIACgMIgFgBIgDgBQgQAAgNAOg");
	this.shape_6.setTransform(-11,61.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgLBjQgFgEAAgIIAAiuQAAgHAGgFQAEgEAGAAQAHAAAFAFQAFAEAAAHIAACnQAAAYgRAAQgGAAgFgFg");
	this.shape_7.setTransform(-21.9,58);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AAZA+QgQAGgQAAQgSAAgMgHQgOgJgDgRQgFgfAAgXQAAgQAEgWQADgOAOAAQAIAAAFAFQAFAEAAAHIgCASIgBASIABAdQABANACAJIAHACIAFABQAMAAARgEIAAgWIAAgUQAAgaACgTQACgPAQAAQAHAAAFAFQAGAFgBAHIgCAsIAAAYIAAAaIABAIIAAAIQAAAHgFAEQgFAFgIAAQgKAAgFgKg");
	this.shape_8.setTransform(-32.2,61.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AhABRQAAgHAEgEQAEgFAIAAIAQACQALADAIAAQARAAAJgMQAJgLACgZQgHAHgJADQgIADgHAAQgZAAgQgQQgQgRAAgXQAAgjAVgVQAWgWAjAAQAMAAAJADQAJADAEAGQARABAAASQAAAIgDAPQgFAegBAfQgBApgNATQgQAYgpAAQgxAAAAgTgAgSg4QgLANAAAUQAAAPAFAIQAHAFAKAAQAJAAAKgKQAKgLACgLQACgMADgaIgIgEIgIgBQgUAAgLAOg");
	this.shape_9.setTransform(-45.9,65);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AAZA6IgDgaQgCgOAAgNIABgJIAAgLIAAgFIAAgGQABgKgGAAQgKAAgJAOQgLAOgFATIgCAMIAAALIgBALIAAALQAAAHgGAFQgFAFgHAAQgIAAgFgFQgFgEAAgIIAAgLIgBgLIABgiIACghIAAgLIgBgMQAAgHAGgFQAEgEAIAAQAQAAACAUIAAABQASgTATAAQAYAAAJAUQAGAOABAbIAAAJIgBAGQAAAKADAPQACAQAAAKQAAAHgEAFQgGAEgHAAQgPAAgDgPg");
	this.shape_10.setTransform(-59.3,61.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AgPBbQgFgEAAgIIAAgXIgBgXIACgcIABgaQAAgIAFgFQAFgEAHAAQAGAAAFAEQAFAFAAAIIgBAaIgCAcIABAXIAAAXQAAAIgFAEQgFAGgFAAQgIAAgFgGgAgKg/QgGgGAAgIQAAgIAGgFQAGgGAGAAQAIAAAGAGQAGAFAAAIQAAAIgGAGQgGAFgIAAQgGAAgGgFg");
	this.shape_11.setTransform(-69.6,58.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgjBCQgTgHAAgOQAAgNAPAAQAGABALADQALADAGABQAYAAAAgLQAAgGgSgIQgYgMgHgDQgSgNAAgRQAAgaAbgJQAQgFAeAAQANAAAGAEQAIAEAAAMQAAAWgMAAQgMAAgDgKIgKgBQgdAAAAAJQAAAEAQAJQAaALAIAGQATAMAAARQAAAWgVALQgQAJgWAAQgRAAgOgFg");
	this.shape_12.setTransform(-80.1,61.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAeA6QgLAGgJACQgJADgEAAQgfAAgPgQQgQgRAAggQAAgdAXgVQAXgWAdAAQAMAAAQAGQATAJAAAKQAAAFgDADIgCANIAAASQAAAWADAKIAGANIAFANQAAAGgFAFQgGAEgGAAQgGAAgNgLgAgRgYQgMANAAAQQAAARAGAJQAGAIAMAAQAGAAAHgDQAHgCAGgFQgEgdAAgOIABgKIACgMIgFgBIgDgBQgQAAgNAOg");
	this.shape_13.setTransform(173,23.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgjBCQgTgHAAgOQAAgNAPAAQAGABALADQALADAGABQAYAAAAgLQAAgGgSgIQgYgMgHgDQgSgNAAgRQAAgaAbgJQAQgFAeAAQANAAAGAEQAIAEAAAMQAAAWgMAAQgMAAgDgKIgKgBQgdAAAAAJQAAAEAQAJQAaALAIAGQATAMAAARQAAAWgVALQgQAJgWAAQgRAAgOgFg");
	this.shape_14.setTransform(147.9,23.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgqA2QgWgQABgdQAAgeARgWQASgZAeAAQAWAAAPAHQATAKAAATQAAAOgQALQgHAFgVAIIgpATQAGAGAJADQAIAEAKAAQAQAAAMgHQALgGAGAAQANAAAAAMQAAAPgVAJQgSAIgTAAQgdAAgTgPgAgQgdQgJAIgEAPIAcgMQAPgIAKgGQgIgFgOAAQgKAAgIAIg");
	this.shape_15.setTransform(134.3,23.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgxBCQgEgFAAgHIAAhRIABgMIAAgMQgBgHAFgEQAEgFAIAAQAOAAACAOQAVgRAcAAQAZAAAAAiIAAAJQgCATgQAAQgQAAAAgQIAAgNQgbAEgNAZIABA+QAAAHgFAFQgFAFgIAAQgHAAgFgFg");
	this.shape_16.setTransform(121.2,23.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgPBbQgFgEAAgHIAAgYIgBgXIACgcIABgaQAAgIAFgFQAFgEAHAAQAGAAAFAEQAFAFAAAIIgBAaIgCAcIABAXIAAAYQAAAHgFAEQgFAGgFAAQgIAAgFgGgAgKg/QgGgGAAgIQAAgIAGgFQAGgGAGAAQAIAAAGAGQAGAFAAAIQAAAIgGAGQgGAFgIAAQgGAAgGgFg");
	this.shape_17.setTransform(111.4,20.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAZA+QgQAGgQAAQgSAAgMgHQgOgJgDgRQgFgfAAgXQAAgQAEgWQADgOAOAAQAIAAAFAFQAFAEAAAHIgCASIgBASIABAdQABANACAJIAHACIAFABQAMAAARgEIAAgWIAAgUQAAgaACgTQACgPAQAAQAHAAAFAFQAGAFgBAHIgCAsIAAAYIAAAaIABAIIAAAIQAAAHgFAEQgFAFgIAAQgKAAgFgKg");
	this.shape_18.setTransform(100.6,23.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAMBRIABgGIADglIgJABQgcAAgTgOQgUgQAAgbQAAglAXgXQAXgXAlAAQAHAAAEADQAEgDAFAAQAHAAAFAGQAGAFAAAHQAAAkgFAqIgGAsQgDAaAAAUQAAAIgFAFQgFAEgHAAQgSAAAAgVgAgPgyQgJAOAAATQAAAMAHAGQAJAIAOAAQAIgBAFgIQAFgLABggIABgbIgEAAIgHgBQgTAEgLARg");
	this.shape_19.setTransform(86.8,26.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgqA2QgVgQgBgdQAAgeARgWQATgZAeAAQAWAAAPAHQATAKAAATQAAAOgQALQgHAFgWAIIgoATQAGAGAIADQAKAEAIAAQASAAALgHQALgGAGAAQAOAAAAAMQgBAPgVAJQgRAIgVAAQgcAAgTgPgAgQgdQgJAIgFAPIAdgMQAPgIAKgGQgJgFgNAAQgKAAgIAIg");
	this.shape_20.setTransform(73,23.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgxBCQgEgFAAgHIAAhRIABgMIAAgMQAAgHAEgEQAEgFAIAAQAOAAADAOQAUgRAbAAQAaAAAAAiIAAAJQgCATgQAAQgQAAAAgQIgBgNQgaAEgMAZIAAA+QAAAHgFAFQgFAFgHAAQgJAAgEgFg");
	this.shape_21.setTransform(59.9,23.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgqA2QgWgQABgdQgBgeASgWQASgZAeAAQAWAAAOAHQAUAKAAATQAAAOgPALQgIAFgVAIIgpATQAGAGAIADQAKAEAJAAQAQAAANgHQAKgGAGAAQANAAAAAMQABAPgWAJQgSAIgTAAQgdAAgTgPgAgQgdQgJAIgEAPIAcgMQAPgIAKgGQgIgFgOAAQgKAAgIAIg");
	this.shape_22.setTransform(34.7,23.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgKBJQgFgFAAgHQAAgOgDgcQgDgbAAgOQAAgIgBgFQgPAIgPAUIgCADIgBAmIAAAKIAAAJQAAAHgGAEQgFADgHAAQgLAAgEgJQgDgHAAgNIAAguIAAgSIgBgTQAAgLAEgJQAFgMAJAAQAIAAAFAGQAGAFAAAHIgBALQATgWARAAQATAAAIAPQAHgHAKgEQAJgDALAAQAZAAAJAZQACAFADAdQAEATAFAwQABAHgGAEQgFAFgHAAQgPAAgDgOIgEglIgEgjQgEgXgFAAQgDAAgKAGIgQAKQAAAOAEAZQADAcAAAOQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_23.setTransform(17.7,23.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAZA+QgQAGgQAAQgSAAgMgHQgOgJgDgRQgFgfAAgXQAAgQAEgWQADgOAOAAQAIAAAFAFQAFAEAAAHIgCASIgBASIABAdQABANACAJIAHACIAFABQAMAAARgEIAAgWIAAgUQAAgaACgTQACgPAQAAQAHAAAFAFQAGAFgBAHIgCAsIAAAYIAAAaIABAIIAAAIQAAAHgFAEQgFAFgIAAQgKAAgFgKg");
	this.shape_24.setTransform(0.5,23.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgLBjQgFgEAAgIIAAiuQAAgHAGgFQAEgEAGAAQAHAAAFAFQAFAEAAAHIAACnQAAAYgRAAQgGAAgFgFg");
	this.shape_25.setTransform(-9.8,19.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgoA1QgTgSgBgdQgBgbARgVQATgaAgAAQAaAAAPAUQANASAAAbQAAAcgQAVQgRAXgcAAQgXAAgRgQgAgRgVQgIANAAAOQAAAPAJAIQAHAHAJAAQAJAAAIgIQAJgIABgQQACgmgXAAIgBgBQgNAAgJAOg");
	this.shape_26.setTransform(-20.2,23.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgSA4IgphkIgCgHQAAgIAFgEQAGgFAHAAQALAAAEAKQAIAPAUA3IARgqIAMgbQAEgLALAAQAHAAAGAGQAFAEAAAHQAAAFgVAuIgaA3QgBAGgEAEQgEAEgGAAQgMAAgGgNg");
	this.shape_27.setTransform(-33,23.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgxBCQgEgFAAgHIAAhRIABgMIAAgMQAAgHAEgEQAEgFAIAAQAOAAADAOQAUgRAbAAQAaAAAAAiIAAAJQgBATgRAAQgQAAAAgQIgBgNQgaAEgMAZIAAA+QAAAHgFAFQgFAFgHAAQgJAAgEgFg");
	this.shape_28.setTransform(-56.8,23.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgoA1QgTgSgBgdQgBgbARgVQATgaAgAAQAaAAAPAUQANASAAAbQAAAcgQAVQgRAXgcAAQgXAAgRgQgAgRgVQgIANAAAOQAAAPAJAIQAHAHAJAAQAJAAAIgIQAJgIABgQQACgmgXAAIgBgBQgNAAgJAOg");
	this.shape_29.setTransform(-70.3,23.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgSAaQgFgEAAgGQAAgDAIgOIALgVQAEgHAHAAQAHAAAFAEQAFAEAAAGQAAACgJAPIgKAUQgEAIgIAAQgGAAgFgEg");
	this.shape_30.setTransform(-94.3,30.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgKBYQgGgFAAgGIABgOIAAgOIgChAIgYgCQgQgBAAgPQAAgHAFgFQAFgFAIAAIAVABIgBgNIAAgNQAAgHAFgEQAFgFAIAAQAQAAAAAgIAAAKIANgBQAPAAAFACQAKADAAAMQAAAHgFAFQgFAFgHAAIgHAAIgGAAIgMABIACBBIAAAGIAAAHQAAAdgSAAQgFAAgFgEg");
	this.shape_31.setTransform(-105.5,21.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAdBcQgDgKgDgTQgCgRAAgMIABgJIAAgKIAAgLQgCgFgFAAQgOAAgKALQgFAGgLATQAAAtgEAKQgFAKgLAAQgHAAgFgEQgGgFAAgHIABgHQABgDABgfQgBgaABg5IABgEIAAgUIgBgMIgBgMQAAgHAFgEQAFgFAIAAQAMAAAFANQACAIAAAQIgBAZIgBAZQAKgJAKgEQAJgFAMAAQAWAAAJAMQAHAJACARIABAgIADAYIAEAZIABAFQAAAHgGAFQgFAEgHAAQgNAAgEgNg");
	this.shape_32.setTransform(-118.9,19.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AhABRQAAgHAEgEQAEgFAIAAIARACQAKADAIAAQARAAAJgMQAJgLABgZQgGAHgJADQgHADgIAAQgZAAgQgQQgQgRAAgXQAAgjAVgVQAWgWAjAAQAMAAAIADQAKADAFAGQAQABAAASQAAAIgDAPQgFAegBAfQgBApgNATQgRAYgoAAQgxAAAAgTgAgTg4QgKANAAAUQAAAPAGAIQAFAFAMAAQAIAAALgKQAKgLABgLQADgMADgaIgJgEIgIgBQgTAAgNAOg");
	this.shape_33.setTransform(-133.7,26.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgPBbQgFgEAAgHIAAgYIgBgXIACgcIABgaQAAgIAFgFQAFgEAHAAQAGAAAFAEQAFAFAAAIIgBAaIgCAcIABAXIAAAYQAAAHgFAEQgFAGgFAAQgIAAgFgGgAgKg/QgGgGAAgIQAAgIAGgFQAGgGAGAAQAIAAAGAGQAGAFAAAIQAAAIgGAGQgGAFgIAAQgGAAgGgFg");
	this.shape_34.setTransform(-143.8,20.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgqA2QgWgQABgdQgBgeASgWQASgZAeAAQAWAAAOAHQAUAKAAATQAAAOgPALQgIAFgVAIIgpATQAGAGAIADQAKAEAJAAQAQAAANgHQAKgGAGAAQANAAAAAMQABAPgWAJQgSAIgTAAQgdAAgTgPgAgQgdQgJAIgEAPIAcgMQAPgIAKgGQgIgFgOAAQgKAAgIAIg");
	this.shape_35.setTransform(-155.2,23.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAEAoQgDgMgDgeIgDAGQgHAPgNAiQgCAFgDADQgGAJgKAAQgGAAgHgLQgHgLgEgRQgEgQgIgzIgCgSQAAgHAFgEQAFgFAIAAQANAAAEAOIACARIACASIAFAeIAWg+QAFgQANAAQAOAAAEASIAHAiIAGAhIAUhLQADgLANAAQAHAAAGAFQAFAFAAAHIAAADQgOAygNAnQgEALgJAMQgGAJgKAAQgQgBgJgeg");
	this.shape_36.setTransform(-171.1,23.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgSAaQgFgEAAgGQAAgDAIgOIALgVQAEgHAHAAQAHAAAFAEQAFAEAAAGQAAACgJAPIgKAUQgEAIgIAAQgGAAgFgEg");
	this.shape_37.setTransform(130.5,-7.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgKBYQgGgFABgGIAAgOIAAgOIgChAIgYgCQgQgBAAgPQAAgHAFgFQAFgFAIAAIAVABIgBgNIAAgNQAAgHAFgEQAGgFAGAAQASAAgBAgIAAAKIANgBQAPAAAFACQAKADAAAMQAAAHgFAFQgFAFgIAAIgGAAIgGAAIgMABIACBBIABAGIAAAHQgBAdgSAAQgFAAgFgEg");
	this.shape_38.setTransform(119.2,-17.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAZA6IgDgaQgCgOAAgNIABgJIAAgLIABgFIAAgGQgBgKgFAAQgLAAgIAOQgLAOgFATIgBAMIgBALIgBALIAAALQgBAHgFAFQgEAFgIAAQgIAAgFgFQgFgEAAgIIAAgLIgCgLIADgiIABghIAAgLIAAgMQAAgHAEgFQAGgEAHAAQAQAAACAUIAAABQATgTASAAQAYAAAJAUQAHAOgBAbIAAAJIAAAGQAAAKADAPQACAQAAAKQABAHgGAFQgFAEgHAAQgQAAgCgPg");
	this.shape_39.setTransform(106.4,-15.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgqA2QgWgQAAgdQABgeARgWQASgZAeAAQAWAAAPAHQATAKAAATQAAAOgQALQgHAFgVAIIgpATQAGAGAJADQAIAEAKAAQAQAAAMgHQALgGAGAAQANAAAAAMQAAAPgVAJQgSAIgTAAQgdAAgTgPgAgQgdQgJAIgEAPIAcgMQAPgIAKgGQgIgFgOAAQgKAAgIAIg");
	this.shape_40.setTransform(92,-14.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgKBJQgFgFAAgHQAAgOgDgcQgDgbAAgOQAAgIgBgFQgPAIgPAUIgCADIgBAmIAAAKIAAAJQAAAHgGAEQgFADgHAAQgLAAgEgJQgDgHAAgNIAAguIAAgSIgBgTQAAgLAEgJQAFgMAJAAQAIAAAFAGQAGAFAAAHIgBALQATgWARAAQATAAAIAPQAHgHAKgEQAJgDALAAQAZAAAJAZQACAFADAdQAEATAFAwQABAHgGAEQgFAFgHAAQgPAAgDgOIgEglIgEgjQgEgXgFAAQgDAAgKAGIgQAKQAAAOAEAZQADAcAAAOQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_41.setTransform(75.1,-14.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgqA2QgWgQABgdQAAgeARgWQASgZAeAAQAWAAAOAHQAUAKAAATQAAAOgPALQgIAFgVAIIgpATQAGAGAJADQAIAEAKAAQAQAAANgHQAKgGAGAAQANAAAAAMQAAAPgVAJQgSAIgTAAQgdAAgTgPgAgQgdQgJAIgEAPIAcgMQAPgIAKgGQgIgFgOAAQgKAAgIAIg");
	this.shape_42.setTransform(57.3,-14.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgxBCQgEgFAAgHIAAhRIABgMIAAgMQgBgHAFgEQAEgFAIAAQAOAAACAOQAVgRAcAAQAZAAAAAiIAAAJQgCATgQAAQgQAAAAgQIAAgNQgbAEgNAZIABA+QAAAHgFAFQgFAFgIAAQgHAAgFgFg");
	this.shape_43.setTransform(44.2,-14.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAZA+QgQAGgQAAQgSAAgMgHQgOgJgDgRQgFgfAAgXQAAgQAEgWQADgOAOAAQAIAAAFAFQAFAEAAAHIgCASIgBASIABAdQABANACAJIAHACIAFABQAMAAARgEIAAgWIAAgUQAAgaACgTQACgPAQAAQAHAAAFAFQAGAFgBAHIgCAsIAAAYIAAAaIABAIIAAAIQAAAHgFAEQgFAFgIAAQgKAAgFgKg");
	this.shape_44.setTransform(30.8,-14.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgjBCQgTgHAAgOQAAgNAPAAQAGABALADQALADAGABQAYAAAAgLQAAgGgSgIQgYgMgHgDQgSgNAAgRQAAgaAbgJQAQgFAeAAQANAAAGAEQAIAEAAAMQAAAWgMAAQgMAAgDgKIgKgBQgdAAAAAJQAAAEAQAJQAaALAIAGQATAMAAARQAAAWgVALQgQAJgWAAQgRAAgOgFg");
	this.shape_45.setTransform(17.7,-15);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAeA6QgLAGgJACQgJADgEAAQgfAAgPgQQgQgRAAggQAAgdAXgVQAXgWAdAAQAMAAAQAGQATAJAAAKQAAAFgDADIgCANIAAASQAAAWADAKIAGANIAFANQAAAGgFAFQgGAEgGAAQgGAAgNgLgAgRgYQgMANAAAQQAAARAGAJQAGAIAMAAQAGAAAHgDQAHgCAGgFQgEgdAAgOIABgKIACgMIgFgBIgDgBQgQAAgNAOg");
	this.shape_46.setTransform(4.4,-14.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgqA2QgVgQgBgdQABgeAQgWQATgZAeAAQAWAAAPAHQATAKAAATQAAAOgQALQgHAFgWAIIgoATQAGAGAJADQAJAEAIAAQARAAAMgHQALgGAGAAQAOAAAAAMQgBAPgVAJQgSAIgUAAQgcAAgTgPgAgQgdQgJAIgFAPIAdgMQAPgIAKgGQgJgFgNAAQgKAAgIAIg");
	this.shape_47.setTransform(-10.4,-14.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgKBJQgFgFAAgHQAAgOgDgcQgDgbAAgOQAAgIgBgFQgPAIgPAUIgCADIgBAmIAAAKIAAAJQAAAHgGAEQgFADgHAAQgLAAgEgJQgDgHAAgNIAAguIAAgSIgBgTQAAgLAEgJQAFgMAJAAQAIAAAFAGQAGAFAAAHIgBALQATgWARAAQATAAAIAPQAHgHAKgEQAJgDALAAQAZAAAJAZQACAFADAdQAEATAFAwQABAHgGAEQgFAFgHAAQgPAAgDgOIgEglIgEgjQgEgXgFAAQgDAAgKAGIgQAKQAAAOAEAZQADAcAAAOQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_48.setTransform(-27.3,-14.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgSAaQgFgEAAgGQAAgDAIgOIALgVQAEgHAHAAQAHAAAFAEQAFAEAAAGQAAACgJAPIgKAUQgEAIgIAAQgGAAgFgEg");
	this.shape_49.setTransform(-55,-7.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgkBiQgGgFAAgHQAAgMAbg6QgOgageg1IgHgKQgDgGAAgFQAAgHAFgFQAGgFAHAAQAIAAAFAGQASAYAWAwIARgkQAJgTAIgOQAGgJAJAAQAHAAAGAFQAGAEAAAHQAAAEgDAEIgrBZQgRAhgHAWIgIAXQgEAMgMAAQgHAAgFgEg");
	this.shape_50.setTransform(-67.4,-11.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgqA2QgVgQAAgdQgBgeASgWQASgZAeAAQAWAAAOAHQAUAKAAATQAAAOgPALQgIAFgWAIIgoATQAGAGAIADQAKAEAJAAQARAAAMgHQAKgGAGAAQANAAAAAMQABAPgWAJQgSAIgTAAQgdAAgTgPgAgQgdQgIAIgGAPIAdgMQAPgIAKgGQgJgFgNAAQgKAAgIAIg");
	this.shape_51.setTransform(-82,-14.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAZA6IgDgaQgCgOAAgNIAAgJIABgLIABgFIAAgGQgBgKgFAAQgLAAgIAOQgKAOgGATIgBAMIgBALIgBALIgBALQAAAHgEAFQgFAFgJAAQgHAAgFgFQgFgEAAgIIgBgLIgBgLIADgiIABghIAAgLIAAgMQAAgHAEgFQAGgEAHAAQAQAAACAUIAAABQASgTATAAQAYAAAJAUQAHAOgBAbIAAAJIAAAGQAAAKADAPQACAQABAKQAAAHgGAFQgEAEgIAAQgQAAgCgPg");
	this.shape_52.setTransform(-95.7,-15.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgoA1QgTgSgBgdQgBgbARgVQATgaAgAAQAaAAAPAUQANASAAAbQAAAcgQAVQgRAXgcAAQgXAAgRgQgAgRgVQgIANAAAOQAAAPAJAIQAHAHAJAAQAJAAAIgIQAJgIABgQQACgmgXAAIgCgBQgMAAgJAOg");
	this.shape_53.setTransform(-109.7,-14.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgKBJQgFgFAAgHQAAgOgDgcQgDgbAAgOQAAgIgBgFQgPAIgPAUIgCADIgBAmIAAAKIAAAJQAAAHgGAEQgFADgHAAQgLAAgEgJQgDgHAAgNIAAguIAAgSIgBgTQAAgLAEgJQAFgMAJAAQAIAAAFAGQAGAFAAAHIgBALQATgWARAAQATAAAIAPQAHgHAKgEQAJgDALAAQAZAAAJAZQACAFADAdQAEATAFAwQABAHgGAEQgFAFgHAAQgPAAgDgOIgEglIgEgjQgEgXgFAAQgDAAgKAGIgQAKQAAAOAEAZQADAcAAAOQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_54.setTransform(-126.2,-14.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgSAaQgFgEAAgGQAAgDAIgOIALgVQAEgHAHAAQAHAAAFAEQAFAEAAAGQAAACgJAPIgKAUQgEAIgIAAQgGAAgFgEg");
	this.shape_55.setTransform(169.6,-45.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgqA2QgVgQAAgdQgBgeASgWQASgZAeAAQAWAAAOAHQAUAKAAATQAAAOgPALQgIAFgWAIIgoATQAGAGAIADQAKAEAJAAQARAAAMgHQAKgGAGAAQANAAAAAMQABAPgWAJQgSAIgTAAQgdAAgTgPgAgQgdQgIAIgGAPIAdgMQAPgIAKgGQgJgFgNAAQgKAAgIAIg");
	this.shape_56.setTransform(157,-53.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgKBJQgFgFAAgHQAAgOgDgcQgDgbAAgOQAAgIgBgFQgPAIgPAUIgCADIgBAmIAAAKIAAAJQAAAHgGAEQgFADgHAAQgLAAgEgJQgDgHAAgNIAAguIAAgSIgBgTQAAgLAEgJQAFgMAJAAQAIAAAFAGQAGAFAAAHIgBALQATgWARAAQATAAAIAPQAHgHAKgEQAJgDALAAQAZAAAJAZQACAFADAdQAEATAFAwQABAHgGAEQgFAFgHAAQgPAAgDgOIgEglIgEgjQgEgXgFAAQgDAAgKAGIgQAKQAAAOAEAZQADAcAAAOQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_57.setTransform(140,-53.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgPBbQgFgEAAgIIAAgXIgBgXIACgcIABgaQAAgIAFgFQAFgEAHAAQAGAAAFAEQAFAFAAAIIgBAaIgCAcIABAXIAAAXQAAAIgFAEQgFAGgFAAQgIAAgFgGgAgKg/QgGgGAAgIQAAgIAGgFQAGgGAGAAQAIAAAGAGQAGAFAAAIQAAAIgGAGQgGAFgIAAQgGAAgGgFg");
	this.shape_58.setTransform(126.3,-56.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgKBYQgGgFABgGIAAgOIAAgOIgChAIgYgCQgQgBAAgPQAAgHAFgFQAFgFAHAAIAWABIgBgNIAAgNQAAgHAFgEQAGgFAGAAQASAAgBAgIAAAKIANgBQAOAAAGACQAKADAAAMQAAAHgFAFQgFAFgIAAIgFAAIgHAAIgMABIACBBIABAGIAAAHQAAAdgTAAQgFAAgFgEg");
	this.shape_59.setTransform(116.3,-55.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgXBqQgFgEAAgHIAAgDQADgSAAgQIAAg+IgJABIgGABQgIAAgGgFQgEgEAAgIQAAgMAMgDQAGgCAQAAIACgPQADgcAMgOQANgRAeAAQAXAAAAAQQABARgWAAQgPAAgIALQgFAIgCARIAAADIAZgBQAYAAAAAQQAAARgagBQgIAAgQABIgBAhIABAiQAAAXgDANQgDAOgLAAQgHAAgGgFg");
	this.shape_60.setTransform(92.1,-56);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgoA1QgTgSgBgdQgBgbARgVQATgaAgAAQAaAAAPAUQANASAAAbQAAAcgQAVQgRAXgcAAQgXAAgRgQgAgRgVQgIANAAAOQAAAPAJAIQAHAHAJAAQAJAAAIgIQAJgIABgQQACgmgXAAIgBgBQgNAAgJAOg");
	this.shape_61.setTransform(78.7,-53);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgKBJQgFgFAAgHQAAgOgDgcQgDgbAAgOQAAgIgBgFQgPAIgPAUIgCADIgBAmIAAAKIAAAJQAAAHgGAEQgFADgHAAQgLAAgEgJQgDgHAAgNIAAguIAAgSIgBgTQAAgLAEgJQAFgMAJAAQAIAAAFAGQAGAFAAAHIgBALQATgWARAAQATAAAIAPQAHgHAKgEQAJgDALAAQAZAAAJAZQACAFADAdQAEATAFAwQABAHgGAEQgFAFgHAAQgPAAgDgOIgEglIgEgjQgEgXgFAAQgDAAgKAGIgQAKQAAAOAEAZQADAcAAAOQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_62.setTransform(50.9,-53.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AAZA+QgQAGgQAAQgSAAgMgHQgOgJgDgRQgFgfAAgXQAAgQAEgWQADgOAOAAQAIAAAFAFQAFAEAAAHIgCASIgBASIABAdQABANACAJIAHACIAFABQAMAAARgEIAAgWIAAgUQAAgaACgTQACgPAQAAQAHAAAFAFQAGAFgBAHIgCAsIAAAYIAAAaIABAIIAAAIQAAAHgFAEQgFAFgIAAQgKAAgFgKg");
	this.shape_63.setTransform(33.7,-53.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgjBCQgTgHAAgOQAAgNAPAAQAGABALADQALADAGABQAYAAAAgLQAAgGgSgIQgYgMgHgDQgSgNAAgRQAAgaAbgJQAQgFAeAAQANAAAGAEQAIAEAAAMQAAAWgMAAQgMAAgDgKIgKgBQgdAAAAAJQAAAEAQAJQAaALAIAGQATAMAAARQAAAWgVALQgQAJgWAAQgRAAgOgFg");
	this.shape_64.setTransform(20.6,-53.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgLBjQgFgEAAgIIAAiuQAAgHAFgFQAFgEAGAAQAIAAAEAFQAFAEAAAHIAACnQAAAYgRAAQgGAAgFgFg");
	this.shape_65.setTransform(-0.5,-56.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AAeA6QgLAGgJACQgJADgEAAQgfAAgPgQQgQgRAAggQAAgdAXgVQAXgWAdAAQAMAAAQAGQATAJAAAKQAAAFgDADIgCANIAAASQAAAWADAKIAGANIAFANQAAAGgFAFQgGAEgGAAQgGAAgNgLgAgRgYQgMANAAAQQAAARAGAJQAGAIAMAAQAGAAAHgDQAHgCAGgFQgEgdAAgOIABgKIACgMIgFgBIgDgBQgQAAgNAOg");
	this.shape_66.setTransform(-11.1,-53.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgKBYQgFgFAAgGIAAgOIAAgOIgChAIgYgCQgQgBAAgPQAAgHAFgFQAFgFAHAAIAWABIAAgNIgBgNQAAgHAFgEQAGgFAGAAQASAAAAAgIgBAKIANgBQAPAAAFACQAKADAAAMQAAAHgFAFQgFAFgIAAIgFAAIgHAAIgMABIACBBIABAGIAAAHQAAAdgTAAQgFAAgFgEg");
	this.shape_67.setTransform(-24.5,-55.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgoA1QgTgSgBgdQgBgbARgVQATgaAgAAQAaAAAPAUQANASAAAbQAAAcgQAVQgRAXgcAAQgXAAgRgQgAgRgVQgIANAAAOQAAAPAJAIQAHAHAJAAQAJAAAIgIQAJgIABgQQACgmgXAAIgBgBQgNAAgJAOg");
	this.shape_68.setTransform(-37.6,-53);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgKBYQgFgFgBgGIABgOIAAgOIgChAIgYgCQgQgBAAgPQAAgHAFgFQAFgFAHAAIAWABIAAgNIgBgNQAAgHAFgEQAFgFAIAAQAQAAABAgIgBAKIANgBQAOAAAGACQAKADAAAMQAAAHgFAFQgFAFgHAAIgGAAIgHAAIgMABIACBBIAAAGIAAAHQAAAdgSAAQgFAAgFgEg");
	this.shape_69.setTransform(-50.4,-55.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AAsBHQgGgPgFgTIggADQgRABgLACIgUAqQgGAJgKAAQgHAAgGgFQgFgEAAgIQAAgGATgmIgCgHQAAgGAMgEQASgdAXghQAdgwAIAAQAOAAAEAQIAJApIASBSIAHARQAEALAAAFQAAAHgFAFQgGAFgHAAQgKAAgKgYgAgIALQAFgBALgBIARgBIgIgpIgZAsg");
	this.shape_70.setTransform(-77.4,-56);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgRAiQAAgIAGgEQAFgFAGAAQATAAAAAdQAAAIgFAFQgFAEgIAAQgSAAAAgdgAgMgaQgFgEAAgHIgBgFIAAgEQAAgHAFgEQAFgGAIAAQARAAAAAaQAAAHgFAEQgFAFgHABQgHgBgFgFg");
	this.shape_71.setTransform(-103.5,-54.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("Ag6BhQgOgNAAgpQAAgRADggQACgiAAgRIgBgNIgBgNQAAgTARAAQAGAAAFADIAcgGQANgCAKAAQAgAAATAIQAMAEAAAMQAAAHgFAFQgFAFgIAAIgFAAQgVgGgTAAIgTACIgXAEIgBAyIAwgEIAegDQAIAAAFAFQAFAFAAAIQAAANgQACIgeACIg0AFIgBAaQAAAZADAEQABABAPAAIAVAAIAYAAIAIgBIAHgBQAHAAAGAEQAGAFAAAIQAAAPgPACQgNADgmAAQgpAAgNgLg");
	this.shape_72.setTransform(-117,-56.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AhDBMIAEgoQACg1AAhEQAAgHAGgFQAEgGAIABQAIgBAFAGQAFAFAAAHQAABEgDA3IgDAfQAfgBAsgOIAGgBQAIABAFAFQAFAGAAAGQAAAKgMAGQgPAGgfAFQgaAGgTAAQgggBAAgbg");
	this.shape_73.setTransform(-132.3,-56);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgyBWQghgZAAg/IAAgSIABgSIAAgOIAAgOQAAgLAEgIQAFgNAJAAQAHAAAFAFQAGAFAAAHIAAAWIAAAVIgBASIgBASQAAASAFAQQAFAUALAIQAFAEAUAAQAgAAALg5QAGgcAAg2QAAgHAFgHQAFgIALgBQAIAAAFAHQADAFAAAFQAAAzgFAbQgHAqgVAcQgJANgNAIQgQAKgPAAQggAAgQgMg");
	this.shape_74.setTransform(-149.5,-55.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AhEBeQgFgFAAgHIAAgdIAAgcIABhlQAAgIAFgHQAGgIAMABIAfACQASACAKAHQA3AbAAAoQAAARgMALQgLAMgXAJQAiATARAUQAEAFAAAGQAAAHgFAFQgFAFgIAAQgHAAgFgFQgngkgsgOIABApQAAAHgFAFQgFAFgHAAQgIAAgFgFgAgmADIAGAAQAfAAANgGQAGgDAGgFQAFgGAAgDQAAgOgSgNQgPgNgTgBIgPgBg");
	this.shape_75.setTransform(-167,-56.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-187.7,-77.5,375.4,155);


(lib.static_human_scale = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AAAgxIAABj");
	this.shape.setTransform(18.9,24.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("ABTmfIiXAAIAAgeIE8AAIAAgmIgZAAIgSARIizgCIAAAKIg2AAIAAgPIhEAAIgQgRIgEAAADmlEIAAgaIjMAAIgPAAIguAAIgLAAIgoAAIAAAaIAAAAIBrBvIAAHYIAAAQIBZAVIACn5IAWgTgACMmYIBRAAIAAgRIAUAAIAAAkIhlAAIABAUIg6AAIAAgUADUlEIASAAACMmYIAAATABTmfIAAgRIA5AAIAAAYADUlEIhkBfIAAAUABjkhIhBAAIAAgXIBBAAgAAanUIAAgWIg2AAIAAARAALmFIAAAnAAaleIAAgnAALmFIAPAAIA5AAIAAgaAgumFIALAAIAuAAAgumFIAAAnAgjleIAAgnAh0mFIBGAAAAVEDIgjgIIjtBOIEZBCIABAAIDUhbIhtgWIAAAIIgYAGAhWlEIEqAAACGjkIAAH+Aj6GTIAAAnIEyAyIDFhuIgEgSIjHBlQgkgWAYgcIAAAAIDAhVIAAABQgUAjAngCADzEwIAFATIgSAHAAcGkIAKgFAAcGkIACgYIABgBAjMFoQAJAhg3AKAj7FJIAAASIAvANIDoA8AAyHRIksg+");
	this.shape_1.setTransform(30.6,68.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF99").s().p("AgfALIAAgVIA/AAIAAAVg");
	this.shape_2.setTransform(37.3,38.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("Aj6FzIAAgmIEsA+IDHhmIADASIjFBvgAAdFFIABAAIDUhbIAGATIgSAHIjABVIgLAFgAjNEiIgugNIAAgSIEZBCIgBAAIgCAZgAAeFFIkZhCIDthOIAjAIIAAAQIBYAVIAZgGIAAgJIBsAXIjUBbgAAeFFgABtDigAAVDNIAAgQIAAnZIhrhuIEqAAIhlBeIAAAVIgCH5gAAilnIBBAAIAAgYIhBAAgADUmKIkqAAIgBAAIAAgaIApAAIALAAIAtAAIAQAAIDMAAIAAAagAhWmKg");
	this.shape_3.setTransform(30.6,75.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AAzHeQgVgNAAgPQAAgKAKgLIgBAAIDAhVIAAAAQgUAkAngDIjHBlIAAAAgAj5GgQA4gJgKgiIDoA8IAKgEIABAAQgKALAAAKQAAAPAVANgABxjEIAWgTIgWATIAAgUIBlhfIARAAIhgBgIAAH+IAAAJIgYAFgAAMlRIAAgnIAPAAIAAAngAgtlRIAAgnIALAAIAAAngABUlkIAAgUIAAgaIAAgRIA5AAIAAAYIAAATIABAUgAgbm9IAAgPIAAgRIA3AAIAAAWIAAAKg");
	this.shape_4.setTransform(30.5,67.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("ABKAyIAAgTIBRAAIAAgRIAUAAIAAAkgAgmAyIgPAAIgwAAIgLAAIhFAAIAAhjIADAAIAQARIBEAAIAAAPIA5AAIAAgKICwADIASgSIAZAAIAAAmIk8AAIAAAcICXAAIAAAag");
	this.shape_5.setTransform(37.2,24.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.3,18.2,52.6,100.4);


(lib.static_emptyCup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AhDkDQgIEICPD/");
	this.shape.setTransform(55.4,29.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AkTizQgHgbgHgbQgLgnASgZQAUgaAlgLQAmgLAlgMQAmgOAlAFQAhAEAkALQAmANAQAeQAGAKAHAFQAvgSAwgTQACgBADgBQD4DVh1E0QgBADgBADQgCABgCAAQgBABgBAAQgCABgCAAQgBABgCAAQgCABgCABQgBAAgBAAQgIADgJACQh9AliCAIQgfACgfAAQgQABgRgBQgCAbgSAdQgSAegaAdQgZgYgWggQgJgPgJgPQgRgegJgoQgJgmgKglQgKgmgKgmQgKglgLgkQgLgmgFgmQgFgkAOgZQAMgUAfgKgAA9klQAGAFAIAAQgPAshAgBQgDgLgGgIQgCgDgDgDQgYgUgmgBQgeAAgjgEQgmgEgjAUQgRAKgFATQgIAgAWAkQAQAgg7gIQgDgKgDgLABJiNIgJghAB1idIgHgZACUijIgIgdAAoiHIgHgbAABh/IgFgaAC/i0IgIgeAi0E2QgMgWgLgYQgQgjgJgoQgIgjgKgiQgKgmgKgmQgLgmgIgjQgHglAHgfQAEgSANAKQAGAEADAJQAIAnAMAkQAMAjAJAkQALAmAKAmQAKAlAMAlQAMApgJAfQgFATgDAPgAgNkIQhAASg+AZQgsASgrAVAing1IgQg6AhMhfIgIgfAgthuIgIggAiGhtQADAPADAPQAEAXAEAVAipFJQgFgJgGgKAigFwQAFglACgfQABgSADgS");
	this.shape_1.setTransform(33,36.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AifBnIgGgVIgPg2QgLglASgYQAUgaAmgLQAlgLAlgNQAngOAjAFQAgAEAlAMQAoAMAQAeQAFAKAHAGQAHAFAIgBQgPAqhDgBQgDgLgFgFIgGgGQgXgUgmgCQgcAAgkgEQglgEgkAVQgQAJgFARQgJAgAXAkQAMAagjAAIgUgCg");
	this.shape_2.setTransform(22,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,68.1,75.8);


(lib.static_dollarSign = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("ACDkBQA3BRA/AqQBQhFBTgkQgtiMhihKQhthTirATQgWACgVAEIg5jgIh8AAIBED7QhDAVg7AiQiFBIgECkQgECmCFA1QB9A0CQgQIBJExQh1gfghh1QiugGiWgOQh9gLAxBWQA5BkCSA1QBKAbAkAHQBLBeCkATQAZACAZABIAnCfICBAAIgrioQBDgNA+geQCUhJAYiZQAcipiEhWQiDhUigASQgdADgagBIhCkDQA/gKBBAggAiAjUQAMgLALgIIArCvQgpgZgdgqQglg1ApgkgAEHBnQAyAigHBVQgNCIh8ASIhSlEQBpADBHAwg");
	this.shape.setTransform(52.4,73.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009900").s().p("ACELgIgnifQgZgBgZgCQikgUhLheQgkgGhKgbQiSg1g5hlQgxhVB9ALQCWAOCuAFQAhB2B1AfIhJkxQiQAQh9g0QiFg1AEimQAEikCFhIQA7giBDgVIhEj7IB8AAIA5DgIArgGQCrgTBtBSQBiBLAtCMQhTAkhQBFQg/gqg3hRQhBggg/AKIBCEDQAaABAdgEQCggRCDBUQCEBVgcCqQgYCZiUBIQg+AfhDANIArCogACpF4QB8gSANiJQAHhVgyghQhHgwhpgDgAg+g4IgrivIgXATQgpAkAlA1QAdAqApAZg");
	this.shape_1.setTransform(52.4,73.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,106.9,149.2);


(lib.static_cup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("ADXi3QgXA3AjgHAj5gfQA0AgBGgBQBCAABDAAQBFAABFAUQBPgDATg6Qgyggg7AIADnBdQgTBAAnAbAj5gfQgBABAAgBABmhDQhBgGg3gBQhHgBhAANQgvAJgxAW");
	this.shape.setTransform(32.3,26.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("ADfAmQgBhBgIhCQgFgvgKgvQApgMAdAQQARAKAFASQAKAogNAjQgNAhgIAdQgLAjgaARQgDACgEACQgIADgMAAADoB2QAGgFAMgDQAhgIAWgjQAVggAMgeQAOghgDgpQgCgngBgnQgBgngUgaQgTgYgpABQgcAAgcAAQgLAAgLAAAldkLQAegSAlgMQAQgFARgFQAigIAoABQAnABAnAAQAnAAAnAAQAlAAAnAAQAogBAmAFQAkAEAUAUQARARABAhAkgkOQAZgHAagEQAmgGAoABQAkABAkAAQAnAAAnAAQAmgBAmADQAmACAcAPQAQAIgNALQgGAEgJAAQgngBgnACQgmABgkAAQgnAAgnAAQgnAAgnACQgqACgcgRQgQgKgPgGgAA7ikIA8AAABph1QgPgBgQgCABMhBIAgAAABXASIAbAAABTgfIAhAAABVA5IAbAAABUCpIAeAAABWCJIAaAAABSBbIAiAAADfCDQACgIAHgFQAFA2AGA1QkOC6kQjGQgIiVAeiTQAJguANguQgZgJgXgYQgZgagVghAj7jlQgRgIgRgFQgdgKgjgPAk1kJQALgDAKgCABZDXIAfAA");
	this.shape_1.setTransform(35,31.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(72,249,147,0.341)").s().p("AkOB3QgIiTAeiVIAAAAIADABIAAABQAzAfBCAAIABAAIACAAICEgBIACAAIACAAIAAAAQBEABBCATQBPgCATg9QAJBDAABCQgIAEgMAAQgSA+AmAaQACgIAHgFIALBrQiDBaiEAAQiKAAiNhmgACVB5IgfAAgACPBLIgeAAgACNArIgaAAgACRgBIgiAAgACNgjIgbAAgACPhKIgbAAgACRh9IghAAgACRh9QhCgThEgBIAAAAIgCAAIgCAAIiEABIgCAAIgBAAQhCAAgzgfIAAgBIgDgBQAxgXAwgJQBAgMBGABQA4ABBBAFIAeADQA8gIAxAfQgTA9hPACIAAAAgACJifIggAAg");
	this.shape_2.setTransform(32.1,41);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag7BeQALAAAJgEIAHgDQAZgSAJgkQAJgdAMgfQAOgkgLgnQgFgTgRgJQgagRgpANQgjAGAXg2IAWAAIA2gBQApAAASAYQAUAaABAnQABAnADAnQADAngOAiQgMAegVAhQgXAjgfAIQgLADgHAFQgGAFgCAIQgngaAThAg");
	this.shape_3.setTransform(61.5,26.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.1,1,1).p("AgMi3QgXA3AjgHAACBdQgQBAAkAb");
	this.shape_4.setTransform(55.1,26.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(0.1,1,1).p("ADoB2QAGgFAMgDQAhgIAWgjQAVggAMgeQAOghgDgpQgCgngBgnQgBgngUgaQgTgYgpABQgcAAgcAAQgLAAgLAAADfAmQgBhwgXhxQApgMAdAQQARAKAFASQAKAogNAjQgNAhgIAdQgLAjgaARQgDACgEACQgIADgMAAADRjrQgBghgRgRQgUgUgkgEQgmgFgoABQgnAAglAAQgnAAgnAAQgnAAgngBQgogBgiAIQgRAFgQAFQglAMgeASQAjAPAdAKQARAFARAIAkgkOQAZgHAagEQAmgGAoABQAkABAkAAQAnAAAnAAQAmgBAmADQAmACAcAPQAQAIgNALQgGAEgJAAQgngBgnACQgmABgkAAQgnAAgnAAQgnAAgnACQgqACgcgRQgQgKgPgGQgKACgLADAA7ikIA8AAABKh1IAfAAABMhBIAgAAABXASIAbAAABTgfIAhAAABUCpIAeAAABWCJIAaAAABSBbIAiAAABVA5IAbAAADfCDQACgIAHgFQAFA2AGA1QkOC6kQjGQgLjDA3jBQgZgJgXgYQgZgagVghABZDXIAfAA");
	this.shape_5.setTransform(35,31.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0)").s().p("Ai4AIQgQgIgOgGQAZgHAZgEQAmgGApABIBIABIBMAAQAogBAmADQAlACAcAPQAQAGgNALQgFAEgJAAQgogBgmACQgmABgmAAIhMAAQgnAAgnACIgJAAQgkAAgagPg");
	this.shape_6.setTransform(27.7,5.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag7BeQALAAAJgEIAHgDQAZgSAJgkQAJgdAMgfQAOgkgLgnQgFgTgRgJQgagRgpANQgjAGAXg2IAWAAIA2gBQApAAASAYQAUAaABAnQABAnADAnQADAngOAiQgMAegVAhQgXAjgfAIQgLADgHAFQgGAFgCAIQgngaAThAg");
	this.shape_7.setTransform(61.5,26.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// Layer 2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(0.1,1,1).p("AkPARQAzgmBDgFQBCgECEAFQCHAEBbAy");
	this.shape_8.setTransform(32.2,51.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,72.1,65.2);


(lib.static_beaker = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AkTkqIgDAGIAABSIADADAkTErQAag8BKgPIABAAAkTBFIgBAHIAABUIABADAkTDOQA4gfA2gCQBRABBFAAQBDAABFgBQBIgCA/AFQAOAAAJARAiUDkQAvAFA1AAQBDAABFABQBEAABCAOQApAIAQAc");
	this.shape.setTransform(44.1,51.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AEZlrQjlAljBglQhYgFAXg7QEDhTDuBTQAtAgg3AggAFFDfIAAoGIApg2QAKgygvguQkmhNkuBVQgVA+AVAoIAmAoIAAAcIAAAHQgBgBgCAAQg3gbhEAoQhLD/BHCQQBJAyA4gLQAAAAABAAIAAADIAAAsIAABcQE/B/DriNgAifkPIAaAAQAJArAHArIAeAKAjoi0QABABACAAIAAACIAAEUIAAAHQgBAAAAAAQggAKguglQgWiAAWhzQAkgWAoAGgAiFiFIAXAAQgDgagEgaIgkgMAhog7IgbAAAhJiFIglAAQAEAlACAlIAbAAAiJANIAjAMIAlAMAhpBbIgWAAAhpBbQACghABghQAAgpgCgrAiBD/QAGgaAEgaQAFgbADgbIAgAAAiAD/QANACANABAhvCVQAEgdACgdAhVBbIgUAAAiZFBIAqAUAjlDtQhnBjAzA3QFbC3Evi3QBEhvhwg5");
	this.shape_1.setTransform(39.5,48.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AkZEeQgzg2BnhkIAABcIADABQCWA7CBAAIABAAIAAAAQCRAAB7hIIADgCIAAhcQBwA5hEBvQiYBcijAAQihAAiuhcgAA1EcQiBAAiWg7IgDgBQAag8BKgOIABAAIAaAEIgagEIgBAAQhKAOgaA8IAAhcQA4gfA2gCIgKAzIAKgzICUAAICKgBQBIgBA/AEQAOABAJAQIAABcQgQgcgpgJQhCgOhEAAIiIAAQg1AAgvgFQAvAFA1AAICIAAQBEAABCAOQApAJAQAcIgDACQh7BIiRAAIAAAAIgBAAgAhvDsIgqgUgAjlDggAFFDSIAAAAgAFFB2IAAAAgAh3BjIAAAAgAlnAuQhHiOBLkBQBEgoA3AbIAABSQgogHgkAWQgWBzAWCCQAuAkAggLIAABUQgKACgLAAQgwAAg8gpg");
	this.shape_2.setTransform(39.5,58.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(1,1,1,0)").s().p("AkSE8IAAgDIgBAAIAAhUIABAAIAAgHIAAkUIAAgCIgCgBIAAhSIACACIAAgHIAAgcIgmgoQgVgoAVg+QExhVEjBNQAwAugLAyIgpA2IAAIGQgIgQgOgBQhAgFhHACIiIABIiWgBIAIg2IgIA2Qg2ACg5AggAibEQIAfAAIgfAAIAFg6QADghAAgiQAAAigDAhIgWAAIAWAAIgFA6IAAAAgAiCDWIgUAAgAiTCTIAlANIglgNIAAgSQAAgigBghQABAhAAAiIAAASIAAAAgAiTCTIgjgLgAiUA+IAaAAIgaAAQgDglgEgjIAlAAIglAAQAEAjADAlIgcAAIAcAAIAAAAgAibgKIgHg0IgkgMIAkAMIAHA0IgXAAIAXAAIAAAAgAiEg0IgegKgAiyiUQAKArAGArQgGgrgKgrIgaAAgAj7kwQgXA7BYAFQDCAlDkglQA3gggtggQh3gqh8AAQh7AAiDAqgAiUA+gAibgKg");
	this.shape_3.setTransform(43.9,36);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,81,98.6);


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


(lib.Bk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("EAmPgXWMhMdAAAMAAAAutMBMdAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#2D509F","#56BBFE"],[0,1],0,-150,0,150).s().p("EgmOAXXMAAAgutMBMdAAAMAAAAutg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-246.2,-151,492.6,302.2);


(lib.anim_money_strobe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AgLoFQgWACgVAEIg5jgIh8AAIBED7QhDAVg7AiQiFBIgECkQgECmCFA1QB9A0CQgQIBJExQh1gfghh1QiugGiWgOQh9gLAxBWQA5BkCSA1QBKAbAkAHQBLBeCkATQAZACAZABIAnCfICBAAIgrioQBDgNA+geQCUhJAYiZQAcipiEhWQiDhUigASQgdADgagBIhCkDQA/gKBBAgQA3BRA/AqQBQhFBTgkQgtiMhihKQhthTirATgAiAjUQAMgLALgIIArCvQgpgZgdgqQglg1ApgkgAEHBnQAyAigHBVQgNCIh8ASIhSlEQBpADBHAwg");
	this.shape.setTransform(52.4,73.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009900").s().p("ACELgIgnifQgZgBgZgCQikgUhLheQgkgGhKgbQiSg1g5hlQgxhVB9ALQCWAOCuAFQAhB2B1AfIhJkxQiQAQh9g0QiFg1AEimQAEikCFhIQA7giBDgVIhEj7IB8AAIA5DgIArgGQCrgTBtBSQBiBLAtCMQhTAkhQBFQg/gqg3hRQhBggg/AKIBCEDQAaABAdgEQCggRCDBUQCEBVgcCqQgYCZiUBIQg+AfhDANIArCogACpF4QB8gSANiJQAHhVgyghQhHgwhpgDgAg+g4IgrivIgXATQgpAkAlA1QAdAqApAZg");
	this.shape_1.setTransform(52.4,73.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,153,0,0.753)").s().p("ACELgIgnifQgZgBgZgCQikgUhLheQgkgGhKgbQiSg1g5hlQgxhVB9ALQCWAOCuAFQAhB2B1AfIhJkxQiQAQh9g0QiFg1AEimQAEikCFhIQA7giBDgVIhEj7IB8AAIA5DgIArgGQCrgTBtBSQBiBLAtCMQhTAkhQBFQg/gqg3hRQhBggg/AKIBCEDQAaABAdgEQCggRCDBUQCEBVgcCqQgYCZiUBIQg+AfhDANIArCogACpF4QB8gSANiJQAHhVgyghQhHgwhpgDgAg+g4IgrivIgXATQgpAkAlA1QAdAqApAZg");
	this.shape_2.setTransform(52.4,73.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(0.1,1,1).p("AhvrfIh8AAIBED7QhDAVg7AiQiFBIgECkQgECmCFA1QB9A0CQgQIBJExQh1gfghh1QiugGiWgOQh9gLAxBWQA5BkCSA1QBKAbAkAHQBLBeCkATQAZACAZABIAnCfICBAAIgrioQBDgNA+geQCUhJAYiZQAcipiEhWQiDhUigASQgdADgagBIhCkDQA/gKBBAgQA3BRA/AqQBQhFBTgkQgtiMhihKQhthTirATQgWACgVAEgAiAjUQAMgLALgIIArCvQgpgZgdgqQglg1ApgkgAEHBnQAyAigHBVQgNCIh8ASIhSlEQBpADBHAwg");
	this.shape_3.setTransform(52.4,73.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,153,0,0.502)").s().p("ACELgIgnifQgZgBgZgCQikgUhLheQgkgGhKgbQiSg1g5hlQgxhVB9ALQCWAOCuAFQAhB2B1AfIhJkxQiQAQh9g0QiFg1AEimQAEikCFhIQA7giBDgVIhEj7IB8AAIA5DgIArgGQCrgTBtBSQBiBLAtCMQhTAkhQBFQg/gqg3hRQhBggg/AKIBCEDQAaABAdgEQCggRCDBUQCEBVgcCqQgYCZiUBIQg+AfhDANIArCogACpF4QB8gSANiJQAHhVgyghQhHgwhpgDgAg+g4IgrivIgXATQgpAkAlA1QAdAqApAZg");
	this.shape_4.setTransform(52.4,73.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,153,0,0.251)").s().p("ACELgIgnifQgZgBgZgCQikgUhLheQgkgGhKgbQiSg1g5hlQgxhVB9ALQCWAOCuAFQAhB2B1AfIhJkxQiQAQh9g0QiFg1AEimQAEikCFhIQA7giBDgVIhEj7IB8AAIA5DgIArgGQCrgTBtBSQBiBLAtCMQhTAkhQBFQg/gqg3hRQhBggg/AKIBCEDQAaABAdgEQCggRCDBUQCEBVgcCqQgYCZiUBIQg+AfhDANIArCogACpF4QB8gSANiJQAHhVgyghQhHgwhpgDgAg+g4IgrivIgXATQgpAkAlA1QAdAqApAZg");
	this.shape_5.setTransform(52.4,73.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,153,0,0)").s().p("ACELgIgnifQgZgBgZgCQikgUhLheQgkgGhKgbQiSg1g5hlQgxhVB9ALQCWAOCuAFQAhB2B1AfIhJkxQiQAQh9g0QiFg1AEimQAEikCFhIQA7giBDgVIhEj7IB8AAIA5DgIArgGQCrgTBtBSQBiBLAtCMQhTAkhQBFQg/gqg3hRQhBggg/AKIBCEDQAaABAdgEQCggRCDBUQCEBVgcCqQgYCZiUBIQg+AfhDANIArCogACpF4QB8gSANiJQAHhVgyghQhHgwhpgDgAg+g4IgrivIgXATQgpAkAlA1QAdAqApAZg");
	this.shape_6.setTransform(52.4,73.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(0.1,1,1).p("ACDkBQA3BRA/AqQBQhFBTgkQgtiMhihKQhthTirATQgWACgVAEIg5jgIh8AAIBED7QhDAVg7AiQiFBIgECkQgECmCFA1QB9A0CQgQIBJExQh1gfghh1QiugGiWgOQh9gLAxBWQA5BkCSA1QBKAbAkAHQBLBeCkATQAZACAZABIAnCfICBAAIgrioQBDgNA+geQCUhJAYiZQAcipiEhWQiDhUigASQgdADgagBIhCkDQA/gKBBAggAiAjUQAMgLALgIIArCvQgpgZgdgqQglg1ApgkgAEHBnQAyAigHBVQgNCIh8ASIhSlEQBpADBHAwg");
	this.shape_7.setTransform(52.4,73.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(0.1,1,1).p("Ag2n/Ig5jgIh8AAIBED7QhDAVg7AiQiFBIgECkQgECmCFA1QB9A0CQgQIBJExQh1gfghh1QiugGiWgOQh9gLAxBWQA5BkCSA1QBKAbAkAHQBLBeCkATQAZACAZABIAnCfICBAAIgrioQBDgNA+geQCUhJAYiZQAcipiEhWQiDhUigASQgdADgagBIhCkDQA/gKBBAgQA3BRA/AqQBQhFBTgkQgtiMhihKQhthTirATQgWACgVAEgAiAjUQAMgLALgIIArCvQgpgZgdgqQglg1ApgkgAEHBnQAyAigHBVQgNCIh8ASIhSlEQBpADBHAwg");
	this.shape_8.setTransform(52.4,73.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},2).to({state:[{t:this.shape_4},{t:this.shape_3}]},2).to({state:[{t:this.shape_5},{t:this.shape_3}]},2).to({state:[{t:this.shape_6},{t:this.shape}]},2).to({state:[{t:this.shape_5},{t:this.shape_7}]},2).to({state:[{t:this.shape_4},{t:this.shape_3}]},2).to({state:[{t:this.shape_2},{t:this.shape_8}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,106.9,149.2);


(lib.anim_grnClock_hands = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AgJgBIAEABQAEAAABAAQAFABAEAAQAAAAABAAIAAAAIgOABIgGgCAAKABIABAAIAAABQgBAAAAgBg");
	this.shape.setTransform(0.1,3.6,1,1,90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgJAAIAAgBIAFABIAFAAIAIABIABAAIgOABg");
	this.shape_1.setTransform(0.1,3.5,1,1,90);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.1,1,1).p("AACgJIgBAEQgBAEAAABQAAAFAAAEQAAAAgBABIAAABIAAAAQAAgBAAAAIAAAAIAAgOIACgG");
	this.shape_2.setTransform(-0.3,3.4,1,1,30);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgBgEIACgFIABAAIgBAFIgBAFIAAAIIAAABg");
	this.shape_3.setTransform(-0.2,3.3,1,1,30);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.1,1,1).p("AAHgGIgDADQgDADgBAAQgCAEgDADQAAAAgBABIAAAAIAGgMIAGgD");
	this.shape_4.setTransform(0.2,1.6,1,1,120);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AAAgEIAGgDIABABIgEADIgDAEIgFAGIgBABg");
	this.shape_5.setTransform(0.2,1.6,1,1,120);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.1,1,1).p("AgGAHIADgDQADgDAAgBQADgDADgDQAAAAABgBIgBAAIgGAMIgFAD");
	this.shape_6.setTransform(1.4,1.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgGAHIAEgDIADgEIAFgGIABgBIgHAMIgFADg");
	this.shape_7.setTransform(1.3,1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).wait(1));

	// Layer 1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(0.1,1,1).p("AAJAFIgBAAIgRgJIATAGg");
	this.shape_8.setTransform(1.4,2.5,1,1,150);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgJgEIATAGIgCADIAAAAg");
	this.shape_9.setTransform(1.4,2.5,1,1,150);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(0.1,1,1).p("AgKAAIAVAAIgVABg");
	this.shape_10.setTransform(1.2,1.8,1,1,-45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgJAAIATAAIgTABg");
	this.shape_11.setTransform(1.2,1.8,1,1,-45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(0.1,1,1).p("AgHAGIAPgNIgMAPg");
	this.shape_12.setTransform(-0.4,2.2,1,1,-105);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgHAGIAPgNIgMAPg");
	this.shape_13.setTransform(-0.4,2.2,1,1,-105);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(0.1,1,1).p("AABALIgBgVIABAAg");
	this.shape_14.setTransform(0.6,3.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAAgJIABAAIAAATg");
	this.shape_15.setTransform(0.6,3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,1.4,4.7,4.3);


(lib.anim_gran_chimes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AAAhlIAAh3AAAhlQADABADALQADAMAAASQAAARgDAMQgDANgDAAQgDAAgDgNQgCgMAAgRQAAgSACgMQADgMADAAgAgcA5IABAAQAGAAAEAOQAEAOAAASQAAATgEAOQgEAOgGAAQgGAAgFgOQgEgOAAgTQAAgSAEgOQAFgNAFgBIAAkVAAdCNQAFACAEAJQAFAMAAARQAAAQgFAMQgFAMgHAAQgHAAgFgMQgFgMAAgQQAAgRAFgMQAFgLAHAAQACAAABAAIAAlp");
	this.shape.setTransform(4.3,22.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AAOCVQgFgLAAgRQAAgQAFgMQAFgMAHAAIADABQAFACAEAJQAFAMAAAQQAAARgFALQgFAMgHAAQgHAAgFgMgAgmBNQgEgOAAgTQAAgTAEgNQAFgMAFAAIABAAQAGAAAEAMQAEANAAATQAAATgEAOQgEANgGAAQgGAAgFgNgAgGhZQgCgMAAgRQAAgSACgMQADgMADAAIAAAAQADABADALQADAMAAASQAAARgDAMQgDANgDAAQgDAAgDgNg");
	this.shape_1.setTransform(4.3,28);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.1,1,1).p("AgcguIABAAQAGAAAEAOQAEANAAATQAAARgEAOQgEANgGAAIgBAAQgFgBgFgMQgEgOAAgRQAAgTAEgNQAFgNAFgBIAAiOAAAAQQADABADAMQADAMAAASQAAARgDAMQgDANgDAAQgDAAgDgNQgCgMAAgRQAAgSACgMQADgNADAAIAAAAIAAjMAAdBuQAFACAEAJQAFAMAAAQQAAAQgFAMQgFAMgHAAQgHAAgFgMQgFgMAAgQQAAgQAFgMQAFgMAHAAQACAAABABIAAkq");
	this.shape_2.setTransform(4.3,19);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("AAOBqQgFgMAAgQQAAgRAFgMQAFgLAHAAIADABQAFACAEAIQAFAMAAARQAAAQgFAMQgFAMgHAAQgHAAgFgMgAgGARQgCgMAAgQQAAgRACgMQADgNADAAIAAAAQADABADAMQADAMAAARQAAAQgDAMQgDANgDAAQgDAAgDgNgAgcgZQgFgBgFgNQgEgNAAgTQAAgTAEgNQAFgNAFgBIABAAQAGAAAEAOQAEANAAATQAAATgEANQgEAOgGAAg");
	this.shape_3.setTransform(4.3,26.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.1,1,1).p("AgcifIAAgpAgcifIABAAQAFAAAEANQAFAOAAATQAAATgFANQgEAOgGAAIAAAAQgGgBgEgNQgEgNAAgTQAAgTAEgOQAEgNAGAAgAAegwQAFADADAIQAFAMAAARQAAAOgFAMQgDAJgFACQgCABgCAAQgHAAgFgMQgFgMAAgOQAAgRAFgMQAFgLAHAAQACAAACAAIAAiYAAAB1QAEABACALQADANAAARQAAASgDAMQgCAMgEAAQgCAAgDgMQgDgMAAgSQAAgRADgNQADgMACAAIAAAAIAAk9");
	this.shape_4.setTransform(4.3,20.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF00").s().p("AgFCoQgDgMAAgRQAAgSADgMQADgMACAAIAAAAQAEABACALQADAMAAASQAAARgDAMQgCANgEAAQgCAAgDgNgAAOgBQgFgLAAgRQAAgQAFgMQAFgMAHAAIAEABQAFACADAJQAFAMAAAQQAAARgFALQgDAHgFACIgEABQgHAAgFgKgAgchYQgGAAgEgNQgEgOAAgTQAAgTAEgNQAEgNAGgBIABAAQAFABAEANQAFANAAATQAAATgFAOQgEANgGAAg");
	this.shape_5.setTransform(4.3,22.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.1,1,1).p("AgehMIAAhoAgehMIABAAQAGAAAEANQAEAOAAATQAAATgEALQgEAOgGAAIgBAAQgFgBgFgNQgEgLAAgTQAAgTAEgOQAFgNAFAAgAAcAsQABAAACABQAFACAEAIQAFAMAAARQAAAQgFAMQgFAMgHAAQgIAAgFgMQgFgMAAgQQAAgRAFgMQAFgLAIAAIAAjgAgBBhIABAAQACABACALQADANAAARQAAASgDAMQgCAMgDAAQgEAAgDgMQgCgMAAgSQAAgRACgNQADgMAEAAIABkV");
	this.shape_6.setTransform(4.5,18.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFF00").s().p("AgIB1QgCgMAAgSQAAgRACgNQADgMAFAAIAAAAQACABACALQADANAAARQAAASgDAMQgCAMgCAAQgFAAgDgMgAAQA8QgGgMAAgQQAAgRAGgMQAFgJAGAAIAEAAQAFADADAGQAGAMAAARQAAAQgGAMQgEAMgIAAQgGAAgFgMgAgdgkQgGgBgFgNQgEgNAAgTQAAgTAEgOQAFgNAGAAIAAAAQAGAAAEANQAFAOgBATQABATgFANQgEAOgGAAg");
	this.shape_7.setTransform(4.5,23.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(0.1,1,1).p("AAAgbIAAAAQADABADALQADAMAAAQQAAARgDANQgDAMgDAAQgDAAgDgMQgCgNAAgRQAAgQACgMQADgMADAAIAAiqAgcAtIABAAQAGAAAEANQAEAOAAASQAAAUgEANQgEAOgGAAQgGAAgFgOQgEgNAAgUQAAgSAEgOQAFgNAFAAIAAjyAAdB2QAFACAEAJQAFAMAAARQAAAQgFALQgFANgHAAQgHAAgFgNQgFgLAAgQQAAgRAFgMQAFgLAHAAQACAAABAAIAAk7");
	this.shape_8.setTransform(4.3,19.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFF00").s().p("AAOBlQgFgMAAgQQAAgRAFgMQAFgLAHAAIADAAQAFADAEAIQAFAMAAARQAAAQgFAMQgFAMgHAAQgHAAgFgMgAgmAmQgEgNAAgTQAAgRAEgOQAFgNAFAAIABAAQAGAAAEANQAEAOAAARQAAATgEANQgEAOgGAAQgGAAgFgOgAgGgoQgCgMAAgSQAAgRACgNQADgMADAAIAAAAQADABADALQADANAAARQAAASgDAMQgDAMgDAAQgDAAgDgMg");
	this.shape_9.setTransform(4.3,28.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,10.7,46.2);


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


(lib.anim_pouring = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_23 = function() {
		/* _root.v2f.start();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(67));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Egl6AWrMAAAgtVMBL1AAAMAAAAtVg");
	mask.setTransform(55.6,148.7);

	// Layer 2
	this.instance = new lib.static_cup("synched",0);
	this.instance.setTransform(350.2,59.9,1,1,0,0,0,35,31.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("ADOiuQgHgMgNgDQgKgCgNADQgWAEggAAQgcAAgdABQgcABgcAAQgeAAgdADQgdACgegFQgCABgDAAQgaAEgbABQgdACgbAIQgaAIgXAKQAZAAAbAIQAAAAABABQAYAEAcgBQAegBAcAEQAcADAdAAQAegBAeAAQAAAAABAAQAaABAbAFQAbAFAeABQAfACAZgNQAUgLAQgPQAGgFACgMAj2C9QADABACABQD1hsEaAG");
	this.shape.setTransform(119.2,67.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AC8kLQgLACgLACQgLA6AhgNAEaBJQAGgGAKgFQAfgPAPgnQAOgiAFgfQAHglgLgoQgLglgJgmQgJgmgZgVQgXgUgoAJQgbAGgbAGQgJgggTgNQgYgQgkADQgmADgnAJQgkAJgmAIQgnAIgmAIQgmAIgmAGQgoAHgfAPQgQAIgPAJQghAUgaAXQAlAIAfADQASACASAEAkyjIQAXgLAZgJQAjgOAogHQAkgHAjgHQAmgIAmgJQAlgIAmgGQAlgFAeAJQASAFgLANQgEAFgJACQgnAHglAJQgjAKglAHQgnAIgmAIQgmAIglAKQgpALgfgLQgSgGgQgEgAA3inIA7gMAECgCQgKgqgNgrIAAAAQgGgVgHgWQgQgsgSgsQAlgVAgAKQASAGAJARQASAlgGAlQgFAjgDAeQgDAmgVAXQgDACgDACQgIAEgLACQgFBCArASQAAgIAFgHAlFi+QAJgFAKgFAlti4QAbAcAeAUQAcATAaAEQgDAwABAEIAAAKIgBAgQABABAAAAQAECmAjB/QAAABAAAAAkBgTQABAAAAAAQAAAAAAABAkAgzQAAAQAAAQAB5AFIAagFABchKIAggGABqgqIAggHACVCZIAdgGACQB6IAZgGACDBOIAhgHAB/AsIAagGACjDFIAegGAjUEWQEtCGDijsIAAgBQgQgzgRgz");
	this.shape_1.setTransform(116.3,58.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(72,249,147,0.341)").s().p("AjxCnIACgCIACAAIAEgCIAGgCIADgCQDihfECAAIAAAAIAAAAIAaAAIAAABQiQCWiuAAQhjAAhugwgACGBWIAegGgAj2ClIAAgBQgjiAgEilIAAgBIAAggIAAgKQAZAAAbAIQgbgIgZAAQAXgKAagIQAbgIAdgCQAbgBAagEIAFgBQAeAFAdgCQAdgDAeAAIA4gBIA5gBQAgAAAWgEQANgDAKACQANADAHAMIAAAAQANAqAKArQgIAFgLADQgFBCArASQAAgIAFgHIAhBkIgaAAIAAAAIAAAAQkCAAjiBfIgDACIgGACIgEACIgCAAIgCACIgFgCgAB4AqIAdgGgABzALIAZgGgABmgfIAhgHgABihBIAagGgABchoIAagFgABwiPQAcAAAWgLQAUgLAQgPQAGgGACgMQgCAMgGAGQgQAPgUALQgWALgcAAIAAAAIAAAAIgFAAIgBAAQgegBgbgFQgbgFgagBIgBAAIAAAAIABAAQAaABAbAFQAbAFAeABIABAAIAFAAIAAAAIAAAAgABNiZIAggHgAhIiaIADAAIAEAAIAGgBIAhAAIABAAIAAAAIAJAAIALAAIgLAAIgJAAIAAAAIgBAAIghAAIgGABIgEAAIgDAAIAAAAIgBAAQgZAAgYgDIgCgBIgDAAIgBAAQgUgDgUAAIAAAAIAAAAIgMABIgKAAIAAAAIgBAAQgTAAgRgDIgBAAIgEgBIgBAAIAAABIABgBIAEABIABAAQARADATAAIABAAIAAAAIAKAAIAMgBIAAAAIAAAAQAUAAAUADIABAAIADAAIACABQAYADAZAAIABAAIAAAAgAA/i5IAggGgAEeBAIAAAAg");
	this.shape_2.setTransform(119.2,69.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(74,155,253,0.353)").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_3.setTransform(90.5,56.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgYBlQALgCAIgFIAFgFQAUgWADgmQADgdAFgiQAGgmgSgkQgJgRgQgGQgggKglAUQghAOALg6IAWgFIA2gMQAmgJAXAUQAZAVAJAmIAUBMQALAlgHAlQgFAggOAkQgPAngfAOQgKAFgGAHQgFAGAAAIQgpgRAFhDg");
	this.shape_4.setTransform(142.8,49);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0)").s().p("AgZgNIAAAdIAAABgAAZgQIABABIAAAAg");
	this.shape_5.setTransform(93.2,55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.1,1,1).p("AkyiXQARgaAgACQAdABAdABIAAAAQAegBAdgDQAegCAYgIQAbgIAeABQAcAAAaAAQAdAAAiACQAYgFAZADQAeAEAagJQAHAAABABQAAAAAAAAIAAABIgCAIQgFANgHAIQgPAPgigFQgegEgZAHQgWAHghgBQgcgCgdABQgMAAgMAAQgQgBgQAAQgegCgcADQgcADgXAFQgbAHgegCQgcgCgbgMgAi/DHQACABABAAQDPiiEggt");
	this.shape_6.setTransform(118.1,70.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(0.1,1,1).p("ACjj1QAhgcAgAEQAUACAMAPQAZAgACAlQACAkAEAdQAFAmgQAaQgDAEgCADQgHAGgKAFQAJBAAtAIQgBgIAEgHQAEgIAJgHQAbgSAGgqQAGgmgBggQgBglgTgkQgSgjgRgjQgQgjgdgQQgbgPglARQgaAMgZALQgKAFgKAEQABA8AdgVgAlyhgQAUgcAdgaQANgMAOgLQAbgVAlgPQAkgPAkgPQAkgQAjgQQAkgQAjgQQAjgRAkgLQAigKAbAKQAWAIAPAeAEHhLQgLgXgLgWQgNgXgNgWQgYgpgcgnAk8h7QAVgQAWgPQAggVAlgPQAigNAggPQAkgQAkgQQAkgQAigOQAjgNAfADQASABgHAPQgDAGgJAEQgkAOghASQgiAQgjAQQgjAPgkAQQgjAQgjARQgmATghgEQgSgCgRAAQgIAGgIAHAkJhlQgTAAgRACQgfADgmAAABpiPQgOAFgPAFQgGACgFACAiAFDQgBAAAAgBQhEiEghiVQgIgjgFgiQgCgLgBgLQgbACgggNQgggNghgWAh9FDQFDBFCskVQAAgBABAAQgbgvgbguAEVgvQgHgOgGgNACeAYIAZgLACRgKIAYgLACWhFIgeAOADLB/IAbgMACpA4IAggNADABhIAXgLADiCnIAcgNAAtinIA3gYABkhUIAdgN");
	this.shape_7.setTransform(111.8,58.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(72,249,147,0.341)").s().p("Ai8DBQDOiiEhgsQiKDcjrAAQg6AAhAgOgACjAlIAcgNgAi/DBIgBgBQhEiEghiTQgIgjgFgkQAaAMAcACIAEAAIADAAIAHAAIAAAAIABAAQAUAAATgEIABAAIABAAIABgBQAXgFAdgDIADAAQARgCARAAIABAAIAAAAIAQABIADAAIAhABIAXAAQAegBAcACIALAAIAAAAIAAAAQAZAAASgGQAQgEARAAIARABIAFAAIABAAIABABIANABIABAAIAAAAQAUgBALgJIABgBIAAAAIABgBQAIgIAEgMIADgJIAAAAIAMAbQgGAGgKAFQAJBCAtAIQgBgIAEgHIA1BdIAAABQkhAsjOCiIgDAAgACMgBIAbgMgACAgfIAYgLgABqhIIAfgNgABfhoIAZgLgABRiMIAZgLgAEzgNIAAAAgAjuiQIgHAAIgDAAIgEAAQgcgCgagMQAQgaAhACIA6ACIAAAAQAdgBAegDQAdgCAYgIQAcgIAdABIA2AAQAeAAAhACQAYgFAZADQAfAEAZgJQAHAAABABIABABIAAAAIgDAJQgEAMgIAIIgBABIAAAAIgBABQgLAJgUABIAAAAIgBAAIgNgBIgBgBIgBAAIgFAAIgRgBQgRAAgQAEQgSAGgZAAIAAAAIAAAAIgLAAQgcgCgeABIgXAAIghgBIgDAAIgQgBIAAAAIgBAAQgRAAgRACIgDAAQgdADgXAFIgBABIgBAAIgBAAQgTAEgUAAIgBAAIAAAAgAA5i5IAegOgADJjMIAAAAg");
	this.shape_8.setTransform(118.1,71.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0)").s().p("AikBUQgTgCgQAAQAUgQAXgPQAfgVAmgPIBCgaIBFggQAlgRAkgNQAigNAgADQASABgHAPQgEAGgIAEQglAOgiASQgiAQgjAOIhFAfQgkAQgiARQgfAQgcAAIgMgBg");
	this.shape_9.setTransform(100.1,37.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAJBrQAKgFAGgGIAFgHQARgagFgmQgEgcgCgjQgCgmgZgfQgKgPgUgCQgggEghAcQgdAUgBg7IAUgJIAzgXQAlgRAZAPQAcAPARAkIAjBGQATAkABAjQABAggGAmQgGApgbAVQgJAHgEAIQgEAHABAIQgtgIgJhCg");
	this.shape_10.setTransform(136.9,43.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(0.1,1,1).p("ADai9QgfACgdgBQgcgCgeAFQgaAEgdAFQgPACgQADQgbAFgcgCQgdgCgZANIAAAAQgbgDgYACQgdADgdAEQgHABgHABQgVACgXAAQgaAAgdADQAeACAdAEQAOABANACQAPACAPACQAbAEAgAFIAAAAQAcgGAcgDQAcgEAcABQAdAAAaAFQAWADAXAHQAPAEARgDQAQgDAUgFQAUgEANgJQAVgNAZgMQARgIAOgKAh7C+QCxi6EIh2");
	this.shape_11.setTransform(116.5,74);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(0.1,1,1).p("ABVkwQAXgRAWgRQAhgYAdAIQAfAKAYAeQAYAfAZAeQAaAgAJAkQAIAfACAnQADApgWAaQgIAJgCAIQAkAmAkAoQAAACgBABQhuEylLABQgBAAgBAAQgCgCgBgDQgBAAgBgCQgCgCgBgCQgCgCgCgCQgBgBgBgBQgBgCgCgCQhThrg5h+QgCgDgBgDIgghNIAAAAQgBgCgBgCQgZAHghgGQgjgGgkgMQANggAXgfQAKgOALgOQAWgbAhgXQAggVAggXQAfgXAggXQAfgXAggXQAfgZAigSQAdgRAcAEQAXAEAVAagABpkEQAjAhAhAiQAtAxAoA1QACgDACgEQAKgdgNgkQgKgcgJgiQgKglgggaQgPgMgTADQghADgaAiQgYAagNg5QAIgHAJgGAlQgoQAQgTASgTQAbgbAigXQAdgUAdgWQAggWAfgYQAggYAggUQAggUAdgFQASgCgEAQQgCAHgHAFQgfAWgeAYQgeAYgfAWQgfAXgfAXQggAXgeAYQghAbghADQgTABgPADgABOhZIAagTAAGifIAwgjAE4gfQgCAIADAHQgQABgOgHQgYgOgPgoQAJgHAFgIACJgbIAWgQACwAhIAbgUACeAEIAWgOAD+CBIAZgSADfBfIAYgSADOBEIAVgQABohCIAagTAl/gBQAkgIAegKQARgFASgEAlegXQAHgIAHgJ");
	this.shape_12.setTransform(109.9,57.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(72,249,147,0.341)").s().p("Ah+DCIgDgEIgCgCIgDgEIgEgFIgCgCIgCgDQhUhrg5h8IgDgGIgghNIA7AGIAcADIAdAEIA7AJIAAAAQAcgGAdgDQAbgEAdABQAcAAAbAFQAVADAXAHIACAAIAAAAQAIACAJABIAAAAIAAAAIANgCIAlgIQATgEANgJQAVgNAZgMQASgIANgKQgNAKgSAIQgZAMgVANQgNAJgTAEIglAIIgNACIAAAAIAAAAQgJgBgIgCIAAAAIgCAAQgXgHgVgDQgbgFgcAAQgdgBgbAEQgdADgcAGIAAAAIg7gJIgdgEIgcgDIg7gGQAdgDAbAAQAWABAWgDIAOgCIA5gHQAYgCAcADIAAAAQAYgNAdACQAdACAagFIAfgFIA4gJQAdgFAcACQAdABAggCQANAIAQgBQgDgHACgIIBJBPIgCAEQkIB3ixC5IgCAAgACdhBIAZgSgACMhcIAVgQgABuh/IAbgUgABcicIAWgQgAE9huQhuEwlLAAQCxi5EIh3gAC8gfIAZgTg");
	this.shape_13.setTransform(116.5,73.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("ABOCjQgZgOgOgoQAJgHAFgIIAEgHQAKgdgNgkQgKgagJgiQgKglgegZQgPgMgTACQghADgaAiQgYAagNg5IARgNIAtghQAhgZAdAJQAdAJAYAfQAYAfAZAeQAaAfAJAiQAIAfACAnQADApgWAaQgIAJgCAIQgCAIADAIIgDAAQgOAAgNgHg");
	this.shape_14.setTransform(130.4,38.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(0.1,1,1).p("AkPhMQAaAEAcACQAFAAAEAAQAYADAYAEQAJABAFABIAAAAQAdAUAfgCQAdgCAdAAQAcABAdgDQAegCAcgGQAbgGAbgKQAbgKAeACQAVABASgDQAIgBAIgCQAYgHAdgIQAMgEABgKQACgYAQABQgJgLgOAAQgDAAgDAAQgEAAgEAAIAwgwAlbhPQASgTAbgHQAbgHAeAAQAdABAcABIABAAQAAAAABAAQAdACAbgCQASgCARgDQALgBALgBQAcgEAeABQAbABAeAAQAeAAAdgDQAYgCAWgNQASgMAZgDIABAAQAiAFAdAAQAYAAAWAAADthRIA/hCADthRQiYB6htCb");
	this.shape_15.setTransform(111.7,74.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(0.1,1,1).p("AAPkvQATgUASgVQAbgfAeACQAhACAdAaQAeAZAfAYQAgAZARAiQAOAdAKAlQALAogQAeQgGAKAAAIQArAgAsAfQAAABAAAAQgEAdgHAcQg/ERkqA/QgBgBgBgBQhxhchah4QgWgegUgfQgCgEgDgDQgDgFgDgFQgXAMgiABQgEAAgDAAQghABgigGQAGgiAQgjQAHgQAIgOQAQgeAcgeQAbgcAagdQAagdAagdQAagdAZgdQAageAdgZQAbgYAdgBQAXgCAYAVQgHAJgIAIQAaA1ASgeQASgnAfgKQATgHARAJQAkATASAhQAQAgAQAZQATAhgEAfQAAADgCAEQAAgBgBAAQgBgBgBgBQAAAAgBgBIhXhFQgHgEgGgFQgEgDgEgCIg5glQgBgBgBAAQgEgDgDgCQgDgCgDgBADkiCQgDAJgHAIQAjA5AtgMQgFgGABgJAlWArQAMgXAOgUQAUghAcgdQAZgaAYgaQAagdAageQAageAbgaQAbgbAegLQARgGgBARQgBAHgGAHQgbAcgYAeQgYAdgaAcQgaAdgaAdQgaAdgYAfQgbAegfAKQgSAFgPAHgAgeiQIAmgsAA1haIAVgYABThJIAWgYACuAJIAXgYACXgOIASgUADTAkIANgOIAEgFAEPBWIAVgXADpA7IAUgWAB7gqIASgUACJjLQgLgHgKgHAkeArQgSAHgPAJQgbAQgiAPAlgA+QAFgKAFgJ");
	this.shape_16.setTransform(108.4,56.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(72,249,147,0.341)").s().p("AgTCuQBtibCYh6IAQgDIA2gQQAMgDAAgKQACgXAPgBIAAAAIAAAAIABAAIAAAAQg/EPkoBAIgCgCgAjgglQgWgegUgfIgFgHIgGgKQgXANgiABIgHAAQARgUAbgHQAcgHAdABIA6ACIAAACIABgCQAdACAbgDIAjgEIAXgDQAcgDAdABIA6AAQAdAAAegCQAYgCAVgNQASgMAagEIAAAAQAiAFAeAAIAuAAIhABDQiYB6htCbQhzhdhah2gAhXhBIAHgBIAMAAIAhgBIABAAIAAAAIAFAAIAGAAIAFAAIAFAAIAAAAIABAAQAUAAAXgCIAEAAQAegDAbgGQAbgGAbgJQAWgIAZAAIABAAIAAAAIAIAAIACAAIABAAIAKAAIAAAAIAAAAQAPAAAMgCQgMACgPAAIAAAAIAAAAIgKAAIgBAAIgCAAIgIAAIAAAAIgBAAQgZAAgWAIQgbAJgbAGQgbAGgeADIgEAAQgXACgUAAIgBAAIAAAAIgFAAIgFAAIgGAAIgFAAIAAAAIgBAAIghABIgMAAIgHABIAAAAIgBAAQgbAAgYgRIgCgBIAAAAIgOgDQgXgEgZgCIgJgBQgcgCgagDQAaADAcACIAJABQAZACAXAEIAOADIAAAAIACABQAYARAbAAIABAAIAAAAgADzhvIAVgXgADNiKIAUgWgAC3ihIANgOgAEyiqIAHAAIAGAAQAOAAAJALIAAAAIgBAAIAAAAIAAAAQgPABgCAXQAAAKgMADIg2AQIgQADg");
	this.shape_17.setTransform(111.2,76.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(74,155,253,0.353)").s().p("AAAAAIAAAAIAAABIAAgBg");
	this.shape_18.setTransform(92.9,63.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(74,155,253,0.341)").s().p("AAAAAIAAAAIAAAAIAAABg");
	this.shape_19.setTransform(92.9,63.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0)").s().p("AgBAAIgIgGIATANIgLgHg");
	this.shape_20.setTransform(121.1,35.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AA+BqQAIgIADgJIACgHQAEgfgUghQgQgXgQggQgRghgigTQgSgIgSAGQgfAKgSAnQgTAegZg1IAPgRIAlgpQAbgfAeACQAgACAcAaQAeAZAfAYQAgAZAQAiQAOAbALAlQALAogQAeQgGAKAAAIQgBAJAEAGQgHACgHAAQgkAAgegvg");
	this.shape_21.setTransform(123.9,34.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(0.1,1,1).p("AGLjnQhcBahABlQgJANgHANQhEBxgkCFAjzgcQgaANgdgBAmBAtQgaAzAwgLQAGAbAIAIQAZgcgBg4");
	this.shape_22.setTransform(103.5,70.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(0.1,1,1).p("AALj+QAJgqAdgRQARgKASAFQAnALAYAdQAXAcAVAWQAaAbACAfQAAAEAAAEQgCAJgFAKQAuAwAqgUQgGgGgBgIQgCgJAEgLQAJgggTglQgSgjgTgZQgXgeglgRQgjgSgjgSQgigTggAEQgeAEgUAkQgMAZgOAYQgegQgWAGQgcAIgWAdQgXAegTAjQgTAigUAiQgTAigUAiQgTAhgVAfQgVAjgJAhQgFAPgDAQIABAAQANgEAOgDQAEgKAEgLQANgkAWgiQATgdASgfQATgiATgiQAUgjAVgfQAUggAbgRQAQgJACAQQABAHgEAIQgVAhgSAjQgRAhgTAhQgUAigTAiQgUAggRAjQgMAXgQAPQAcgCAdADQArAEArACQAaABAaAAQAMAAAMAAQA3AAA5AAQBDAABEACQAJAAALAAQA7ACBSAAQgyAQg6AFQgYACgZABQgqACgwABQhLAChKABQgQAAgRABQghAAgiAAQgNAAgMABQg6AAgsgWQgPALgOAMQgXAUgeAXQAAAAABAAQAmgCAjgIQAhgJAUgRQADAEADADIA9A5QAAABABABIABAAAiJDSIABAAQBcBSBoA8QABABACABQACABACABQACAAACACQACABACABQACABACABQADACAEACQACABACABQABABABAAQACABABABQABAAACABQACABACABQACABACABQABABACABQABgBACgBQDOhdA3izQAahWgIhoQgBAAgCgBQgwgVgvgVABYhMIAQgdAA3hXIAQgcADbiiQg6ghg+gaQgrgSgtgPAgmh6IAeg0AgYkfQgGAJgFAKQAjAvALghAExApIAQgbADDgNIARgeADsAEIANgUAEHAWIAPgYACGg2IANgXACnghIANgXAkwB+QANgKAQgJQALgGAKgJQgVABgVAEQgEAOgEAPQgEAKgCAKAlEBoQgBAAgBAAQgxAQgRBFAlMC0QgBgjAJgmQAAgCAAgB");
	this.shape_23.setTransform(104.1,55.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(72,249,147,0.341)").s().p("AB5CNIgFgCIgEgCIgCgBIgDgCIgCgBIgFgCIgGgEIgFgCIgEgCIgEgCIgDgCIgEgCQhng8hdhQIAAAAIABgBIgBgBIgCAAIg8g5IgHgHQgUASghAIQgiAIgnACIAAAAQAegWAXgVQANgMAQgLIABABQAqAVA3AAIABAAIACAAIAZgBIBEAAIAggBICWgDQAvAAAqgDQhEBxgjCFIgEACIgCgCgAB/CNIAAAAgADmhpIAxgDQA6gFAygQQgyAQg6AFIgxADIAQgaIgQAaQgqADgvAAIiWADIggABIhEAAIgZABIgCAAIgBAAQg3AAgqgVIgBgBIgFACIAAABQgVAJgWAAIgBAAIAAAAIgFAAIgBAAQANgKARgJQALgGAJgJQAdgCAdADQAqAEArACIA0ABIAZAAIBvAAQBEAABDACIAUAAQA8ACBRAAIAAAAQg3CxjNBdQAjiFBEhxgAljgEQgwAJAagxQARhEAxgRIABADIABgDIAAAAIAcgHQAUgEAVgBQgJAJgLAGQgRAJgNAKIAJgdIgJAdIgGAUIAGgUIABAAIAFAAIAAAAIABAAQAWAAAVgJIAAgBIAFgCQgQALgNAMQgXAVgeAWIAAAAQABA2gZAcQgIgIgGgZgAk9g1IAAgHQAAgfAHgjQgHAjAAAfIAAAHgAk9g1IAAAAgADmhpIAAAAgAkihrIAAAAgAkihrIAAAAg");
	this.shape_24.setTransform(102.7,79.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(74,155,253,0.341)").s().p("AAAAAIAAAAIAAAAgAAAAAIAAAAIAAAAIAAAAgAAAAAg");
	this.shape_25.setTransform(90.3,76.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("ABQBjQAGgKABgJIAAgIQgCgegagcQgVgUgWgbQgWgegogKQgSgFgRAKQgcAQgKAqQgMAfgkgtIALgTIAcgxQAUgjAegEQAggFAjATIBDAkQAlASAXAdQAUAaARAgQATAlgJAhQgDALABAIQABAIAGAGQgNAGgMAAQgfAAgggig");
	this.shape_26.setTransform(117.3,31.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(0.1,1,1).p("ADkiTQg0gBgzADQhNAFg9gdIAAAAQgWgKgjgIQhlgEgeAIQgdAIgXAIQgOAJgKAMQgaAgAHA1QgCA/gSA2QgJAcADAfQADAggLAXQAIA+ABBHQABAwgfAVQAUBJhQgCQAfgVgEg8QAJhKgegrQgYgjAXgZQAsgugJhJQgBgcALgWQAPgbACgoQADg4AOggQARgnAkgOQAMgFAPgCADkiTQAFgMAFgMQAZADAaABQAvABAzACQg1AUhLgDQgQAAgPAAQglBZgQBdAj3jHQARAAARAAQAkAAA1AAIAEAAQAFAAAEAAQAWAAAVAAQAjAAAhAAQANAAAMAAQBGAABAAPQAnAJAoAEQA/iOB1iBAlKCqQgEAKgHAI");
	this.shape_27.setTransform(96.8,87.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(0.1,1,1).p("ADwiWQACAIAGAFQgnAZgzgrQAEgLABgJQAAgEgBgEQgFgegdgZQgXgTgZgZQgbgbgogHQgRgDgQAMQgbAUgFAqQgIAjgpgsQAFgKAEgKQAMgZALgaQAQgmAdgHQAegIAkAPQAkAPAlAOQAnAOAZAbQAXAXAVAgQAXAjgGAiQgCALACAIQAzARAzAQQABAFABAFQAaCcg5B4Qg7B5iQBTQgEgBgFgCIAAAAQgCgBgCAAQgBgBgCgBQgCAAgCgBIjqiBQgEgCgDgDQgEgCgEgDAldDfQgCgSAAgSQAAgSACgTQAAgFABgEQABgNACgNQAGgiASgkQARgjAQgiQAPgjAQgkQAQgkAQgkQAPglAUggQATgfAagLQAWgIAfAMAlHCmQADgQADgQIAAAAQACgJADgKQAJglASgkQAQghAOgfQAQgjAQgkQAPglASgiQARghAZgUQAPgLAEAQQACAHgEAJQgRAjgOAkQgOAjgQAjQgQAkgPAhQgQAkgOAkQgMAegSASQgGAGgHAFQgPAKgMALQgCALgCAKAhYhsIAZg3ACjivQgCAAgCgBQg7gag+gTQgrgNgvgLAAHhTIANgdAAphMIAOgeABag6IALgZAiQDtQgIgFgHgFIhDg1QgTAUggALQgiAMgmAGADGgJIAKgYADiAEIANgaAEOASIANgaAB8gpIALgYACagYIAOgfAkTCWQgOAMgLAMQgVAYgcAZ");
	this.shape_28.setTransform(104.2,54);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(72,249,147,0.341)").s().p("AmLFBQAfgVgEg8QAJhJgegrQgYgkAXgYQArgvgIhHQgBgcALgVQAPgdACgpQADg4AOggQAQgnAlgNQAMgFAPgCIgGAgIAGggIAAAAIAiAAIBZAAIAEABIAAgBIAJAAIArAAIBEAAIAZAAQBGAABAAOQAmAJApAFIgKAXIAKgXQAZACAaABIBhADQgvAShAAAIAAAAIAAAAIgNAAIgEAAIgegBQglBagQBfIgEgCIgDgBIgFgCIjpiAIgIgFIgHgFIhEg1QgSATggAMQgiAMgmAGQAcgaAUgXQAMgNAOgLQgOALgMANQgUAXgcAaQgCgSAAgSQAJgMAPgJQAXgJAdgHIAAgBQAVgFA3AAIABAAIAAAAIASAAIABAAIAjABQAiAJAVAJIAAAAIACABIABABQA0AXA+AAIAAAAIAAAAIAWgBIAdgBIA0gBIABAAIAAAAIALAAIADAAIAIAAIgIAAIgDAAIgLAAIAAAAIgBAAIg0ABIgdABIgWABIAAAAIAAAAQg+AAg0gXIgBgBIgCgBIAAAAQgVgJgigJIgjgBIgBAAIgSAAIAAAAIgBAAQg3AAgVAFIAAABQgdAHgXAJQAMgLAPgLIANgKIgNAKQgPALgMALQgPAJgJAMQAAgSACgTIABgJIgBAJQgCATAAASQgaAfAGA2QgBBBgSA1QgJAdADAfQACAdgKAXQgFAKgHAIQAHgIAFgKQAIA/ABBGQABAwgfAVQATBHhKAAIgFAAgAjxkLIAEgVIgEAVgAC/hUIAAAAQAQhfAlhaIAeABIAEAAIANAAIAAAAIAAAAQBAAAAvgSQg6B6iQBTIgJgDgAkDjnIAAAAgAGSkeIAAAAgAjtkgIAAAAg");
	this.shape_29.setTransform(95.2,99.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(255,255,255,0)").s().p("AgGgEIAGAEIAHAFIgNgJg");
	this.shape_30.setTransform(88.9,77.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("ABVBeQAEgKAAgJIAAgIQgFgegdgZQgXgSgZgZQgZgbgpgGQgTgDgPAMQgbATgFApQgIAigpgpIAJgUIAWgzQARgmAdgHQAggIAkAPQAiAPAlAOQAmAOAaAaQAXAYAVAeQAXAjgHAhQgCAMACAIQADAIAGAFQgOAJgQAAQgcAAgggcg");
	this.shape_31.setTransform(111.5,28.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(0.1,1,1).p("Ak+iCQAOgGAQgFQAWgGAbgDQAUgCAWAAQAwAAAlAIQAWAFARAIQALAFAMAFQArARAyALQBAAOBUgBQgEAOgCAOQBUABAugjQhDAAg5AGQAri5BnioAC5g0IgBAAQgyAEg5gGQg6gFgxgeQgNgIgQgFQgZgKgggDQgSgCgUAAQgvAAg3gBAClBMQAGhCAOg+AlQGyQAAgEAAgE");
	this.shape_32.setTransform(99.1,80.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(0.1,1,1).p("AC7oFQABAJgEALQA3AlAlgcQgHgFgDgIQgDgIABgLQADgigbggQgYgegZgVQgcgYgogKQgmgJgmgLQglgMgdAMQgcAKgMAnQgJAagIAbQgEALgDAKQAtAnAEgjQABgrAYgWQANgOATABQApACAdAYQAcAWAZASQAfAVAJAeQABADAAAFQhAgUhBgNQgugJgugFAEKn1QAzALAzALQACAAABABQA6DDhTCXQgyBahkBIQgCABgCACIkLhqQgEgDgEgCQgCgCgDgBIhLgvQgRAVgeAPQggAPglAKQglA7AJAqQAJAogHE6QgDAiABAjQAAABAAABQABAWACAYQAFBGgIBDQgCARAAAgAhMpNQghgJgUALQgaANgPAgQgQAjgMAmQgLAlgMAmQgMAlgNAlQgMAlgNAkQgNAlgDAiQAAABAAABQgBARAAASQAAAnAIAhQAZgcASgZQALgPANgNAkIh9QABgVADgUQABgFAAgGQABgFABgFQAGghAMghQAMgiALgiQAMglAMglQAMgnAOgjQANgjAXgWQANgNAGAQQADAHgDAIQgOAlgKAmQgKAkgMAkQgMAlgMAlQgMAlgKAmQgCAIgDAIQgHASgKANQgGAJgIAGQgOANgLAMQgBAKAAALAACnGQgFAPgFAOQgDAGgDAHAg3moIASg5ADClvIALggACjl8IAIgaABNmWIAKgfAB+mKIAJgaAAqmaIAKgeAhLhJQgGgEgHgEADvlkIAIgZAENlZIAJgcAE6lPIAKgeAkfiwIAAAAQg+ATADBNQAEBNgOA4QgOA6AFBBQAGBCgHC8QgHC7gVBRAkYhDIAAAAQABAAAAAA");
	this.shape_33.setTransform(96,85.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(72,249,147,0.341)").s().p("AlxG+QAUhQAHi8QAHi6gGhCQgFhBAOg6QAPg6gEhNQgEhMA/gUIAAAAIAAACIgBAcIAAAHQAAAnAIAhQgIghAAgnIAAgHIABgcIAAgCQANgGAQgFQAWgGAbgDQAUgCAWAAQAxgBAkAJQAWAFASAIIAUAKQArARA0ALQBBAOBTgBQA6gGBCAAIAAAAIgBABQgtAhhSAAIAAAAIAAAAIgBAAIAAAAIgBAAIAGgcIgGAcIAAAAIgCAAIgmACIAAAAIgBAAQgbAAgegDIgFAAIgEgBQg7gFgzgeQgNgIgNgGQgagJgfgEIgJAAIgbgBIAAAAIgCAAIgBAAIgJAAIgJAAIAAAAIgBAAIgigBIAAAAIgoAAIgJgBQAKgNAHgSQgHASgKANQgGAJgIAGQgOANgLAMQABgUADgVIACgLIABgKIgBAKIgCALQgDAVgBAUQALgMAOgNQAIgGAGgJIAJABIAoAAIAAAAIAiABIABAAIAAAAIAJAAIAJAAIABAAIACAAIAAAAIAbABIAJAAQAfAEAaAJQANAGANAIQAzAeA7AFIAEABIAFAAQAeADAbAAIABAAIAAAAIAmgCIACAAIAAAAIABAAIAAAAIABAAIAAAAIAAAAQBSAAAtghIABgBIAAAAQgxBahlBKQAHhCANhAQgNBAgHBCIgEADIkKhsIgJgFIgEgDIhMgvQgQAVgfAPQggAPglAKIAAAAQAZgcASgZQAKgOANgOQgNAOgKAOQgSAZgZAcIAAAAIAAAAQglA7AKAsQAIAogHE4QgCAiAAAjIAAACIADAuQAGBGgJBDQgCARAAAgQgFADgVAEQgUAFgOAAQgPAAgJgFgAjxlkIABgVIgBAVgADcjcIAAAAgAj/k/gAjwl5IAAAAgAjJmhIAAAAg");
	this.shape_34.setTransform(93.6,110.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(74,155,253,0.341)").s().p("AgEBPQAABFgGBEIgBAIQAGjMABA7gAAMjeIAAgBIAAABIAAAAg");
	this.shape_35.setTransform(66.7,101);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(255,255,255,0)").s().p("AgFgCIAFACIAGADIgLgFg");
	this.shape_36.setTransform(87.8,77.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("ABYBZQAEgLgBgJIgBgIQgJgegfgVQgZgQgagWQgdgXgpgDQgTgBgOAOQgZAWgBApQgEAjgtgnIAHgTIARg1QAMgnAcgKQAfgLAmALQAlALAkAJQAoAKAcAYQAZAVAYAcQAbAggDAiQgBALADAIQADAIAHAFQgQAMgTAAQgaAAgfgVg");
	this.shape_37.setTransform(105.6,26.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(0.1,1,1).p("AjZB/QBAgBAzAKQBCAOBEABQBFABBFgDQARgBAQABQABgPABgQIAAAAQhHAIhFgIQg5gFg8gFQhBgEg8gLQgYgEgUAAQgZAAgTAHQgQAFgMAJADLCVQgCA5AEA6ADNB2QAQjGBri3ADNB2QBMgJAPA1QgtgMgwgBAlHCJQAUgJAOgVQAAAAAAgBIAAAAAklBqQAAACAAACQABAQACARQABAEABAGQAEAXAJAnIAAAAIgSgHAjvB7QAKAEALAA");
	this.shape_38.setTransform(94.8,59.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(0.1,1,1).p("AE0lVIAGgfADyn0QA1AFA2AFIAAAAQBjDuiDC9QgkA1g3AwIAAAAQiTgWiKg6QgrgTgqgWQgOAXgdASQgfASgkAOAhsonQAGgbAFgcQAIgoAbgNQAegPAkAHQAnAHAmAGQApAFAfAVQAbASAbAbQAeAdABAiQAAAMAEAIQAEAHAHAEQghAgg7gfQACgMgBgJQgBgEgBgDQgMgdgigSQgagOgegTQgggVgnADQgTABgNAOQgWAZAEArQgBAjgwgiQACgKACgLgAhFmGIAMg7ABAmCIAHggAAdmCIAHggAgOmpQgEAPgFAOQgCAJgDAIAg/oTQAwAAAtAEQBCAGBCAMACYlyIAGgaABzl8IAFgaADnliIAFgaAEGlaIAGgdAC5loIAHghAj1hGQgBgaABgaQAAgDABgEQACgjAJgkQAIgjAHgjQAIgmAIgmQAIgoAKgkQAJgkAVgZQALgOAIAPQADAHgCAIQgJAngGAmQgGAlgIAlQgIAngIAmQgIAmgGAmQgCAPgFANQgHAUgLAOQgCACgCACQgNAOgKANQABALAAAKAkQhzQAAAAAAgBQAAgBAAgBQAAAAAAAAQgCgiAJgmQAKgmAIgmQAIgmAIgmQAIgmAHgmQAIgoAMgkQAMgiAYgQQATgMAhAFAkNhSQAAAAAAABQAEAnALAgQAWgeAPgbQAJgQALgPIABAAAmHKeQALgDAIhmQAUkSgGhBQgFhBAOg6QAOg7gBg6QgBg9AfgNAkQgRQglA5AKAsQAIAogHE5QgCAjAAAjQAAABAAAAQABAXAEArQAFAqgBALQgBALgFAU");
	this.shape_39.setTransform(92.7,81.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(72,249,147,0.341)").s().p("AliGSQALgDAIhmQAUkSgGg/QgFhBAOg6QAOg7AAg9QgBg8AegNQAUgIAOgWIAAACIAAABQAMgJAQgFQATgHAZABQAVAAAYAEQA7AKA/AFQA+AEA6AGQBEAHBHgHIAAAAIgCAeIgGAAIgGAAIgBAAIAAAAIgKAAIgKAAQhEADhGgBQhGgBhAgOIgDAAIAAAAIAAAAIgCgBQgrgIg1AAIgBAAIAAAAIgLAAIgCAAIACAAIALAAIAAAAIABAAQA1AAArAIIACABIAAAAIAAAAIADAAQBAAOBGABQBGABBEgDIAKAAIAKAAIAAAAIABAAIAGAAIAGAAIACgeQBMgKAPA1QgtgMgwgBIgBAnQAAAmADAmIAAABQiTgWiKg9QgrgSgqgWQgOAWgdASQgeATgkAOQAVgfAQgbQAIgPAMgPIAAAAIAAAAIgCAAIgBAAIAAAAIAAAAQgHAAgGgBIgBgBIgFgBIAAAAIAAAAIAFABIABABQAGABAHAAIAAAAIAAAAIABAAIACAAQgMAPgIAPQgQAbgVAfQgKgngEgXIgCgKIgDghIADAhIAAABQAEAmAMAhIAAAAIgTgHQglA7AKAsQAIAogHE3QgCAjABAjIAAABQAAAXAEArQAFAqgBALQgBALgEAUQhGAFgXAKIgCgDgAjOk9IgBgVIABAVgAjPlSQAJgNANgOIAEgEQAMgPAGgTQgGATgMAPIgEAEQgNAOgJANIgBgaIABgaIAAgHIAAAHIgBAaIABAagAEEkxIABgnQAwABAtAMQgkA1g3AxQgDgmAAgmgAjYkWIAAAAgAFilLIAAAAgAjoleIAAAAg");
	this.shape_40.setTransform(89,108.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("ABbBSQACgLgBgJIgCgIQgMgcgigSQgagNgcgTQgggUgpACQgTABgNAPQgWAYAEApQgBAkgwgiIAEgWIALg0QAIgpAbgNQAegOAmAHIBLAMQApAGAfAVQAbARAbAcQAeAbABAiQAAALAEAIQAEAIAHADQgRAQgXAAQgXAAgdgPg");
	this.shape_41.setTransform(99.7,24.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(255,255,255,0)").s().p("AgFgQIAAgBIACAKQADAWAJAnQgKghgEglgAgIgyIAAgCIAAgBIAAAEIAAgBg");
	this.shape_42.setTransform(66.3,75.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(0.1,1,1).p("AgPASQAUgQALgT");
	this.shape_43.setTransform(62.2,75.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(0.1,1,1).p("AAllaIAAABQACAIACAIQAIAmAPAgAg/FaQAAgEABgEQAUkSgGhAQgFhBAOg6QAPg6ADg4QAEg4AUgRABAkDQhABJAJAtQAIAngHE4QgCAiAAAjQABABgBABQABAWAEAoQAAAAAAAAAg/FbIAAgB");
	this.shape_44.setTransform(60.2,108.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(72,249,147,0.341)").s().p("Ag/FbIAAgBIABgIQAUkSgGhAQgFhAAOg6QAPg7ADg4QAEg4AUgQQAVgQAMgVIABABIAAAAIAEARQAIAmAPAfIAAAAQhABKAJAsQAIAogHE3QgCAjABAjIAAABQAAAWAEApIAAAAIhMADg");
	this.shape_45.setTransform(60.2,108.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(0.1,1,1).p("ADhC1QgHjeBDjhIAAgDADiDNQAjACAagRQgfgGgfgDQABAMAAAMQgZgCgeAAQgeAAgdgBQgcgBgcgCQgbgCgbgJQgYgIgVAAQgUgEgSgCQgLgBgLgBQgegCgcAAQgegBgigDAkdC7QALgLAOgHQARgKAWgFQAXgFAbABQAqACAsACQAZACAaACIAAAAQA+AEBDAKQAYAEAiABQAkAAAkAEADjEOQACgCACgCQgDgfgCgeAkeC6QAAgBABgB");
	this.shape_46.setTransform(92.6,55);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(0.1,1,1).p("ABPn3QAAgEgCgDQgPgbgjgPQgbgLgfgQQgigRgoAHQgTADgLAQQgUAaAJAqQAJgBAJAAIBEgEQAEAAAEAAQAEAAAEAAIBhACQABAAABAAQAMABAMABgAjBoEQADgcACgcQAEgpAZgQQAcgRAnADQAnADAnABQAnABAhASQAdAPAeAYQAhAaAEAhQACAMAEAHQAFAHAHADQgdAjg+gYQABgMgDgJAhWmRQgDAPgDAPQgEAUgDATAAulxIADgbAgDlzIADggAiKloIAGg8AgmlvIAEggAB2llIAEgiABVlrIACgbACklkIADgaADElfIADgeADylfIADgfACgn3QAzAAAygBQAEAAADAAQCEDziIDXQgYAmghAkAhngTQAPAFAOAEQgJgDgIgDQgGgBgGgCIhOgcQgLAYgbAVQgcAUgjARQATghAMgaQAHgQAKgQADLAgQgBABgBABQgCAAgDAAQgCAAgDAAQgCAAgCAAIkFgsAkXgYQgDgVgCgWQAAgEAAgEQgDgnAGgoQAEgjAEgkQAEgnADgnQAEgoAGglQAGglASgbQAKgPAJAOQAEAGgBAJQgFAngCAnQgDAmgEAmQgDAmgEAnQgEAngCAnQgBAWgGARQgCAGgDAGQgEAJgGAJQgMAOgIAOQACALABALAiSn2QADAkg0gdQABgKABgLQghgCgTAOQgVATgJAjQgIAlgEAoQgDAmgEAnQgEAngEAnQgEAngFAmQgFAoAFAjQABAHABAHQABACAAABAlMKFQAAgBAAgBQAAgCAAgBQAAACAAADg");
	this.shape_47.setTransform(94.9,78.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(72,249,147,0.341)").s().p("AkagGIgDgRQAKgLAOgIQARgJAXgFQAWgFAbABIBWAEIAzAEIAAAAQA+AEBEAKQAXAEAiABQAkAAAkAEQAgADAeAGIgEADQgWAMgbAAIAAAAIAAAAIgHAAIAHAAIAAAAIAAAAQAbAAAWgMIAEgDQgYAkggAlIgEg6IgCgYIACAYQgagCgeAAIg7gBIg4gDQgbgCgagJQgZgIgVAAIgmgGIgWgCIg6gCQgegBgigDIAFgMIgFAMQgEAJgHAIQgLAPgIAMQgDgTgCgXQACAXADATQAIgMALgPQAHgIAEgJQAiADAeABIA6ACIAWACIAmAGQAVAAAZAIQAaAJAbACIA4ADIA7ABQAeAAAaACIAEA6IgEAFIgCACIgFAAIgFAAIgEgBIkFgtIgRgGIgMgDIhOgaQgLAWgbAVQgcAVgjASQATghAMgcQAHgOAKgRQgKARgHAOQgMAcgTAhQgPgfgIgkgAj9AVIgDgVIADAVgADmA1IAAAAgADigFIAAAAgAjigsIAAAAg");
	this.shape_48.setTransform(92.7,76.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(74,155,253,0.341)").s().p("AgCAHIgBgDIADgDQANgTgPAZgAgEAGIABgCIABADg");
	this.shape_49.setTransform(64.3,72.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(255,255,255,0)").s().p("AgNgDIAMADIAPAEIgbgHg");
	this.shape_50.setTransform(86,77.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("ABdBLQABgLgDgJIgCgHQgPgcgjgOQgcgKgegPQgigRgoAGQgTADgLAQQgUAZAJAqQADAjg0gcIACgWIAFg2QAEgpAZgQQAcgRAnADQAnADAnACQAnABAhARQAdAPAeAYQAgAYAFAiQACALAEAIQAFAHAHACQgRAVgdAAQgUAAgZgKg");
	this.shape_51.setTransform(93.7,22.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(0.1,1,1).p("AgNAPQAQgNALgQ");
	this.shape_52.setTransform(61.4,76.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(0.1,1,1).p("Ag+E3QAPjcgFg6QgFg/AOg7QAOg6AEg4QAEg4AVgQAA1k4IgZAGQAGAFABASQABATAOAPQAGANAHAMQhCBJAIAsQAIAogHE3QgCAiAAAj");
	this.shape_53.setTransform(60,106.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(72,249,147,0.341)").s().p("Ag+E3QAPjcgFg6QgFg/AOg6QAOg7AEg4QAEg4AVgQQARgNALgSIADgGIAWAAIgZAGQAGAFABATQABASAOAQIANAYQhCBJAIAsQAIAogHE3QgCAiAAAjQgtgMgVAKg");
	this.shape_54.setTransform(60,106.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(0.1,1,1).p("ADdjyQADAAACAAQChDriEDyQgBABAAAAQgIALgNAAQgOABgPAAQgBgKgCgJQgHgBgHAAQgeAAgcACQgdADgcACQgcACgdAAQgcAAgeAAQgcAAgdgCQgbgBgfAAQgLAAgIAGQgHAGgNADQgNADgSAAQgMAGgOADQAAgBABgCQARgcgCgqQgCgnAAgnQAAgnAAgnQAAgkgBgmQgCgnABgnQAAgJgEgGQgLgNgIAQQgPAcgCAmQgDAmABAmQAAAnAAAnQAAAkgBAkQgBAoAGAmQACAMADAMAjqjQQAAgcAAgcQgBgpAYgTQAagUAngBQAngBAngCQApgDAhAOQAeAMAgAVQAjAWAIAhQADAMAFAGQAzgFAzgGAi6jGQgMgpAQgdQAKgRASgFQAogKAjANQAhANAdAIQAjALARAaQACADACAEQADAIAAAMQBAASAagmQgIgCgFgHAi6jGQAHgCAIgBQASgDASgDQAEgBAEAAQARgDASgCQA7gIA5gBQACAAACAAQABAAABAAQABAAACAAQABAAACAAQABAAACAAAh0hoQgBAPgCAQQgBAPgBAPAhAhLIAAggAA6hUIAAgbAgehSIAAghAAThWIAAgbABchRIAAgiACKhVIAAgaACqhTIAAgeADYhYIAAgfAi/EFQAIgHAGgFQAEgBADgCQAdgCAcADQAcACAdAAQAcgBAcAAQAcAAAdAAQAeAAAeAAQAdAAAcAAQAPAAAPAAQAEAYAGAZQAAABAAACQgDAAgDAAQgGAAgFABQgDAAgCAAQgDAAgCAAQgDAAgCAAQgCAAgCAAQgDAAgCAAQgDAAgCAAQgDAAgCAAQh8ACh5gZQgugJgugNQgJAZgYAXQgaAZghAVQAPgjAKgdQADgLAFgLQAOAAANgBQACAAADgBQADAAAEgBQABAAACAAgAD/DrQAAAAgBAAQgdgFgYgBQgkjqA4jtAD+DsQgQAdgTAcQgBABgBACIgDAEAjqjQQAAALAAALQA3AXgHgjAksEMQgEgJgCgJQgIgiABgoQABgnAAgnQAAgnAAgnQAAglAAgnQgBgoAFgmQAEgkAUgUQARgRAhgBAijg6IAAg8AjCEFQABAAACAAIAAAAAkNEhQACAKADALAj+EFQgDAFgDAFQANgGAOgBIAAAAAkEEPQgFAJgEAJQgEgNgCgOQALAAAKgBAjkD8QgDAGgCAG");
	this.shape_55.setTransform(93.1,48.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(72,249,147,0.341)").s().p("AkAAkQgNgPgBgTQgBgRgGgEIAZgGIAGAZIAJgRQAOgGANgBIAAAAIgIAWQgJAcgPAiQAPgiAJgcIAIgWIAEAAIACAAIABAAIAAAAIATgBIABAAIAFAAIAHgBIAEgBIAAAAIAOgLIAHgDIACAAIAXgBIAAAAIABAAIAcABIACAAIAHABIAoABIABAAIAAAAIAFAAIAFAAIA2AAIA7AAIA7AAIA6AAIAeAAIAJAuIABADIgGABIgMAAIgFAAIgFABIgEAAIgFAAIgEAAIgFAAIgGAAQh7ACh5gXQgugKgugNQgJAZgZAWQgaAYggAVIgOgYgAjwAUIgGgUIAGAUgADkgnIgDgUIADAUIgeAAIg6AAIg7AAIg7AAIg2AAIgFAAIgFAAIAAAAIgBAAIgogBIgHgBIgCAAIgcgBIgBAAIAAAAIgXABIgCAAIgHADIgOALIgEABIgHABIgFAAIgBAAIgTABIAAAAIgBAAIgCAAIgEAAIAGgMIgGAMIAAAAQgNABgOAGIAGgKQAPgCAMgHQASAAANgDQAMgCAIgGQAIgGALAAIA5ABIA6ABIA5ABQAdAAAdgDIA5gFQAbgCAfABIAOAAQAYACAdAEIAAACQgIAKgNABIgdABIAdgBQANgBAIgKQgQAcgTAaIgDAEIgDAAIgJgugAj8gZQALAAAKgCIgGAKIgJARIgGgZgAjSgYIAAAAgAjSgYgADkgnIAAAAg");
	this.shape_56.setTransform(90.7,77.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("Ai2BMIAAgWIgBg2QAAgpAYgSQAagUAngBQAngBAngDQAngDAiAOQAeAMAhAVQAjAXAIAfQADALAFAHQAFAGAIACQgaAnhAgTQAAgLgEgJIgDgHQgSgZgkgJQgdgJgfgMQgkgOgnALQgTAFgJARQgRAaANApQAEAVgTAAQgMAAgVgJg");
	this.shape_57.setTransform(87.9,22);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(0.1,1,1).p("AgggWQALgIAJgKQAEAKAGALQALAbAYAh");
	this.shape_58.setTransform(63.4,80.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(0.1,1,1).p("Ag+ECQALiwgEgzQgGg/AOg6QAPg6ADg4QAEg5AWgQAA/jTQhFA7AHArQAIAogHE4QgBARACAS");
	this.shape_59.setTransform(60.4,106.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(72,249,147,0.341)").s().p("Ag+ELQALiwgEgzQgGg/AOg6QAPg6ADg4QAEg5AWgQQAKgIAIgKIAKAVQAOAdAYAiQhFA7AHArQAIAogHE4QgBARACASQgRgNgwgHg");
	this.shape_60.setTransform(60.4,105.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(0.1,1,1).p("ABbkIQA0gMA0gMQAAgBABAAQDaD1igEjQAAACgBABQhpAUhsAAQgoAAgrgDQgvgEgvgHQgGAagVAbQgXAbgeAZQALgkAGgeQADgSAGgSAkAjEQgEgcgEgcQgFgoAVgWQAXgXAngGQAmgGAngHQAogIAkAJQAfAIAhARQAmASAMAfQAEALAGAGQAGAGAIABQgVAphCgKQgBgLgFgIAjPjAQAtgQAugLQAAAAABAAIB7gaQABAAABAAQABAAABAAQgCgEgCgDQgTgXglgGQgegFgigIQglgJgmAQQgSAHgHASQgNAeASAoQALAhg5gPQgCgLgBgLAgmhhIgEghAAKhsIgDgaAAxhvIgDgaABThwIgEgiADNiHIgEgeACgh8IgDgeACAh6IgDgaAjkEtQgHgTgHgUIAAAAQAAgCgBgBQgBgDgBgEQgLglgEgoQgDgkgFgjQgFgngFgnQgGglgCgmQgDgmALgdQAHgRAMALQAFAFABAJQAEAnAHAmQAGAkAFAlQAFAnAFAnQAFAmAHAnQAGAjgJAcQgBAEgCAFQgIARgFAPQAEAKAEAKAj/EJQgEAGgGAGQgCgFgCgFQgNgggEgoQgDgngFgnQgFgngFgmQgFgngGglQgGgnAAgmQAAgkASgXQAOgSAhgGAh+hsQABAPAAAQQABALABAMAing5IgHg7AhHhWIgEgg");
	this.shape_61.setTransform(88.6,48.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(0.1,1,1).p("AApEYQgUgLgKgFQgKgGgLgEQgLgDggACQgEAAgFABQgCAAgCAAAjxEQQAQgBAOgBQAVgDASgGQAVgHAcABQAdABAagCIAAAAQADAAADAAAD/EBQh6kHA/kQAjxEQIgNAD");
	this.shape_62.setTransform(88.5,47.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(255,255,255,0)").s().p("AAFDCIgBgDIgCgGQgKglgDgoIgIhIIgLhLQgGgogCgmQgDglAMgeQAGgRAMAMQAFAFABAJQAEAnAFAmIALBLIAKBLQAFAnAHAmQAGAkgJAbIgdADg");
	this.shape_63.setTransform(63.7,55.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AitBaIgDgWIgHg4QgGgmAWgWQAXgXAmgFIBNgOQAmgIAkAJQAgAIAjARQAlASAMAgQAFAKAGAFQAGAFAHABQgUAqhCgKQgCgMgEgIIgFgHQgUgVgmgGQgegFgggIQglgJgmAQQgRAHgIAQQgMAfARAnQAIAXgYAAQgMAAgSgFg");
	this.shape_64.setTransform(80.5,22.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(72,249,147,0.341)").s().p("AiOgBIgKgWIAJgMIADgGIAKAAIABADIgOADIAOgDIAAAAIAOAmIgOgmIAegDQAVgCARgGQAWgHAbABQAcABAZgCIABAAIACAAIADgBIAKAAQAggCAKADQAOAEAKAFIAeAQQgrABgrgEQgugDgugHQgFAagWAYQgWAcgeAZQALgkAFgdQAEgRAFgSQgFASgEARQgFAdgLAkQgZgigNgagAhrATIgIgTIAIATgAhnggQgHASgFAOQAFgOAHgSIAEgJIgEAJgAAqg4IAFgBIgFABgAiBgmg");
	this.shape_65.setTransform(77.3,79);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(0.1,1,1).p("Ajii2QgWgkAIggQAFgTARgKQAjgUAmAEQAjAEAeAAQAmABAYAUQADADACADQAGAIADALQBAABAPgsQgIAAgGgFQAygTAygUQAAABABAAQD2DUhzEzQgCAEgBADQgCABgCAAQgBABgBAAQgCABgCAAQgBABgCAAQgCABgCABQgBAAgBAAQgJADgIACQh9AliCAIQgfACgfAAQgQABgRgBQgCAbgSAdQgTAegZAdAA9klQgHgFgGgKQgQgegmgNQglgLgggEQglgFgmAOQglAMgmALQglALgUAaQgTAZAMAnQAHAbAHAbQADALADAKQA7AIgQggAABh/IgFgaAAoiHIgHgbACUijIgIgdAB1idIgHgZABJiNIgJghAC/i0IgIgeAkTizQggAKgLAUQgOAZAFAkQAFAmALAmQAKAkALAlQAKAmAKAmQAKAlAJAmQAJAoARAeQAJAPAJAPQACACABACQACADACACIAVAcQAEAEAEAEQACADADADAi0E2QgMgWgLgYQgQgjgJgoQgIgjgKgiQgKgmgKgmQgLgmgIgjQgHglAHgfQAEgSANAKQAGAEADAJQAIAnAMAkQALAjAKAkQAKAmALAmQAKAlAMAlQAMApgJAfQgFATgDAPgAgthuIgIggAhMhfIgIgfAiGhtQADAPADAPQACANACALAing1IgQg6AgNkIQhAASg+AZQgsASgrAVAiVEIQgDASgBASQgCAfgFAlAirFlQgBAAAAAAAizFdQAEAEADAEQADADADADIAGAFAipFJQgFgJgGgK");
	this.shape_66.setTransform(83.9,49.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(0.1,1,1).p("AEmggQiGjwADkaIgBgDAklIuQAHiGgEgrQgFhCAJgiQAJgiAVgcQAQgUgDgBQAFgFACgIQACgJANgNQgJBAADAaQAEAYgGEO");
	this.shape_67.setTransform(83.8,71.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AifBnIgGgVIgPg2QgLglASgYQAUgaAmgLQAlgLAlgNQAngOAjAFQAgAEAlAMQAoAMAQAeQAFAKAHAGQAHAFAIgBQgPAqhDgBQgDgLgFgFIgGgGQgXgUgmgCQgcAAgkgEQglgEgkAVQgQAJgFARQgJAgAXAkQAMAagjAAIgUgCg");
	this.shape_68.setTransform(73,22.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(72,249,147,0.341)").s().p("Ag4AmQgGg/AJgjQAJgiAWgcQAPgUgDAAQAFgFACgIQADgKAKgMQgJA/AEAaQADAYgGENQgPgNgvAYQAHiHgDgrgAA1jWIAIAHIAAABIgIgIg");
	this.shape_69.setTransform(60.5,105.6);

	this.instance_1 = new lib.static_emptyCup("synched",0);
	this.instance_1.setTransform(84,49.1,1,1,0,0,0,33,36.9);
	this.instance_1._off = true;

	this.instance.mask = this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = this.shape_13.mask = this.shape_14.mask = this.shape_15.mask = this.shape_16.mask = this.shape_17.mask = this.shape_18.mask = this.shape_19.mask = this.shape_20.mask = this.shape_21.mask = this.shape_22.mask = this.shape_23.mask = this.shape_24.mask = this.shape_25.mask = this.shape_26.mask = this.shape_27.mask = this.shape_28.mask = this.shape_29.mask = this.shape_30.mask = this.shape_31.mask = this.shape_32.mask = this.shape_33.mask = this.shape_34.mask = this.shape_35.mask = this.shape_36.mask = this.shape_37.mask = this.shape_38.mask = this.shape_39.mask = this.shape_40.mask = this.shape_41.mask = this.shape_42.mask = this.shape_43.mask = this.shape_44.mask = this.shape_45.mask = this.shape_46.mask = this.shape_47.mask = this.shape_48.mask = this.shape_49.mask = this.shape_50.mask = this.shape_51.mask = this.shape_52.mask = this.shape_53.mask = this.shape_54.mask = this.shape_55.mask = this.shape_56.mask = this.shape_57.mask = this.shape_58.mask = this.shape_59.mask = this.shape_60.mask = this.shape_61.mask = this.shape_62.mask = this.shape_63.mask = this.shape_64.mask = this.shape_65.mask = this.shape_66.mask = this.shape_67.mask = this.shape_68.mask = this.shape_69.mask = this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},18).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{x:90.5,y:56.7}},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_3,p:{x:90.4,y:76.7}},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43}]},1).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance_1}]},15).wait(38));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:121.4},18).to({_off:true},1).wait(71));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(31).to({_off:false},0).to({rotation:105,x:83.9},6).to({x:-261.3,y:47.6},15).wait(38));

	// Layer 1
	this.instance_2 = new lib.static_beaker("synched",0);
	this.instance_2.setTransform(39.6,131.8,1,1,0,0,0,39.5,48.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(0.1,1,1).p("AkVABQAJAYAmgFQAdgEAZADIAAAAQAhgDAdAAQAdAAAdAAQAdAAAbAAQAdAAAdAAQAeAAAeAAQAdAAAdABQAbAAAagPQAVgLAcgCQgDgGgEgD");
	this.shape_70.setTransform(44.3,155.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(0.1,1,1).p("AjOmrQEDhTDuBTQAtAgg3AgQjlAljBglQhYgFAXg7gAFFDfIAAoGIApg2QAKgygvguQkmhNkuBVQgVA+AVAoIAmAoIAAAcIAAAHQgBgBgCAAIAABRQgogGgkAWQgWBzAWCAQAuAlAggKIABgHIAAAHQgBAAAAAAIAABUIABADAhXivIgegKQgHgrgJgrIgaAAAhuiFIAlAAAhuiFQgDgagEgaAiFiFIAXAAQAEAlACAlIAbAAAiZjFIAkAMAjlkLIgDAGQg3gbhEAoQhLD/BHCQQBJAyA4gLQAAAAABAAIAAADIAAAsQA4ggA2gCQAFgbADgbQAEgdACgdIgWAAAjoi0QABABACAAIAAACgAiJANIAjAMQAAgpgCgrIgbAAAhmAZQgBAhgCAhIAUAAAhPCVIggAAAhBAlIglgMAjlixIAAEUAjlFJQAag8BKgOQAGgaAEgaAiZFBIAqAUAiAD/QANACANABQAvAFA1AAQBDAABFABQBEAABCAOQApAIAQAdIAAhcAjlDtQhnBjAzA3QFbC3Evi3QBEhvhwg5AjlFJIAAhcAE+DWQgGgIgKAAQg9gFhGACQgCAAgCAAQgdAAgdABQgoAAgoAAQhDAAhRgBAFFE7QjrCNk/h/");
	this.shape_71.setTransform(39.5,131.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(72,249,147,0.341)").s().p("AkUAgQAZg5BLgPIAAAAQAhgCAdAAIA6AAIA4AAIA6AAIA8AAIA5AAQAcAAAZgOQAWgNAcgDIAABaQgRgagpgJQhCgOhDAAIiIAAQg1AAgvgFIgbgEIAbAEQAvAFA1AAICIAAQBDAABCAOQApAJARAaQh8BLiUAAQiCAAiYg9gAieAsIgrgUgAkUg6IAAABIAAABQAIATAaAAIAAAAIAAAAIAMgBIACAAIADgBIADAAIAagBIAAAAIABAAIARAAIACAAQhLAPgZA5gAjyglQgaAAgIgTIAAgBIAAgBQA4gfA2gCIgKAzIgCAAIgRAAIgBAAIAAAAIgaABIgDAAIgDABIgCAAIgMABIAAAAIAAAAgAiwgoIAKgzICWAAIBOAAIA6gBIAEAAQBFgBA+AEQAJABAHAHIAHAJQgcADgWANQgZAOgcAAIg5AAIg8AAIg6AAIg4AAIg6AAQgdAAghACgAiwgoIAAAAgAEWhIIAAAAgAimhbIAAAAg");
	this.shape_72.setTransform(44.3,161.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AkZEeQgzg2BnhkIAABcQE/B/DriNIAAhcQBwA5hEBvQiYBcijAAQihAAiuhcgAlnAuQhHiOBLkBQBEgoA3AbIAABSQgogHgkAWQgWBzAWCCQAuAkAggLIAABUQgKACgLAAQgwAAg8gpg");
	this.shape_73.setTransform(39.5,142.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(0.1,1,1).p("AkVAUQAVgDAagGQAdgGAagFQAHAAAHgBQAWgEAWgBQAcgCAdgCQAdgCAegEQAagEAcgDQAbgCAYgCQAhgCAdAAQAdABAegCQAfgBAWANQgIAKgOAAQgdAAgcADQgdADgdACQgdADgdAGQgbAHgdADQgbACgaABQgcAAgbAAQgdAAgdAJQAAAAAAAAQAAAAgBAAQgMgEgNgCQgQgCgRABQgbACgdACQgMABgLAA");
	this.shape_74.setTransform(44.3,149.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(0.1,1,1).p("AjOmrQEDhTDuBTQAtAgg3AgQjlAljBglQhYgFAXg7gAFFDfIAAhHIAAm/IApg2QAKgygvguQkmhNkuBVQgVA+AVAoIAmAoIAAAcIAAAHQgBgBgCAAIAABRQgogGgkAWQgWBzAWCAQAuAlAggKIABgHIAAAHQgBAAAAAAIAABUQAAAAABAAIAAADIgBgDAh1i5QgHgrgJgrIgaAAAiZjFIAkAMQAEAaADAaIAlAAAhXivIgegKAhuiFIgXAAAjlkLIgDAGQg3gbhEAoQhLD/BHCQQBJAyA4gLAjoi0QABABACAAIAAACgAiDg7IAbAAIAbAAAiJANIAjAMQAAgpgCgrQgCglgEglAhvCVQAEgdACgdIgWAAAhmAZQgBAhgCAhIAUAAAhBAlIglgMAhvCVIAgAAAjlixIAAEUAh3DLQABgCAAgDQADgOABgOQACgLABgKAh3DLQAOAAANABQAAAAAAAAQBCAAA3AAQAoAAAoAAQAdgBAdAAQACAAACAAQBGgCA9AFQAOABAJAQIAABcQgQgdgpgIQhCgOhEAAQhFgBhDAAQg1AAgvgFQgNgBgNgCIgBAAQAGgaAEgagAiZFBIAqAUAjlDtQhnBjAzA3QFbC3Evi3QBEhvhwg5AjlFJIAAhcQA4ggA2gCAjlDBIAAAIIAAAkAiBD/QhKAOgaA8QE/B/DriN");
	this.shape_75.setTransform(39.5,131.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(72,249,147,0.341)").s().p("AkUA/QAZg8BLgMQhLAMgZA8IAAhaIAAgjIAAgJQAUgDAagGIA3gLIAOgDQAWgEAWgBIA6gEQAcgCAegEIA3gHIAygEQAggCAdAAQAeABAegCQAfgBAWANQgIAKgOAAIgHAAIgKAAQgUABgUACIg6AHQgdADgdAGQgbAHgcADQgcACgaABIg3AAQgdAAgdAJQAdgJAdAAIA3AAQAagBAcgCQAcgDAbgHQAdgGAdgDIA6gHQAUgCAUgBIAKAAIAHAAQAOAAAIgKIAABGQgJgQgOgBIgJAAQgqgDgvAAIAAAAIAAAAIgcAAIgFAAIgEAAIg6ABIhOAAIh7AAIAAAAIAAAAIgBAAQgMgEgNgCIAEgcIgEAcIgDAAIgSgBIAAAAIgBAAIgKAAIAAAAIg5AEIgIABIgHAAIAAAAIAAAAIgDAAIgEAAIAEAAIADAAIAAAAIAAAAIAHAAIAIgBIA5gEIAAAAIAKAAIABAAIAAAAIASABIADAAIgBAGIAbAAIAAAAIB7AAIBOAAIA6gBIAEAAIAFAAIAcAAIAAAAIAAAAQAvAAAqADIAJAAQAOABAJAQIAABaQgRgcgpgJQhCgMhDAAIiIAAQg1AAgvgFIgbgEIAAAAIAKgzQg2ACg4AfQA4gfA2gCIgKAzIAAAAIAbAEQAvAFA1AAICIAAQBDAABCAMQApAJARAcQh8BLiUAAQiCAAiYg9gAieBLIgrgUgAiLg8IAAAAgAEWhvg");
	this.shape_76.setTransform(44.3,158.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(74,155,253,0.341)").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_77.setTransform(30.2,152.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(0.1,1,1).p("AkVAIQAYgIAagEQAcgFAcgBQAJAAAJgBQAVAAAUgBQAagCAeAAQAdgBAbAAQAeABAegDQAegCAbgCQAcgDAbACQAfgBAdABQAdAAARAOQgcAGgcACQgeAAgdABQgcABgeAAQgcAAgbgCQgeAAgZADQgcADgcADQgcACgbAGQgUAFgUABQgJAAgJAAQgegBgdABQgcACgQgRg");
	this.shape_78.setTransform(44.2,143.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(0.1,1,1).p("AjOmrQEDhTDuBTQAtAgg3AgQjlAljBglQhYgFAXg7gAFFDfIAAh1IAAmRIApg2QAKgygvguQkmhNkuBVQgVA+AVAoIAmAoIAAAcIAAAHQgBgBgCAAIAABRQgogGgkAWQgWBzAWCAQAuAlAggKIABgHIAAAHQgBAAAAAAIAAASIAABCIAAAAQAAAAABAAIAAADIAAAsQA4ggA2gCQgEAagGAaIABAAQANACANABQAvAFA1AAQBDAABFABQBEAABCAOQApAIAQAdIAAhcQBwA5hEBvQkvC3lbi3Qgzg3BnhjIAABcQAag8BKgOAhXivIgegKQgHgrgJgrIgaAAAhuiFIAlAAAhuiFQgDgagEgaAiFiFIAXAAQAEAlACAlIgbAAAiZjFIAkAMAjlkLIgDAGQg3gbhEAoQhLD/BHCQQBJAyA4gLAjoi0QABABACAAIAAACgAhmAZQAAgpgCgrIAbAAAiJANIAjAMQgBAhgCAhIAUAAAhvCVQABgGAAgFQACgSACgRQAAgGABgGIgWAAAhBAlIglgMAhvCVIAgAAAjlixIAAEUAhcDLQgNgDgNgCQAAADgBACQAOAAANABQAAAAAAAAQBCAAA3AAQAoAAAoAAQAdgBAdAAQACAAACAAQBGgCA9AFQAOABAJAQAhvCVQgBAKgCALQgBAOgDAOAiZFBIAqAUAjlDBIgBgDAjlFJQE/B/DriN");
	this.shape_79.setTransform(39.5,131.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(72,249,147,0.341)").s().p("AkUBYQAag8BLgOQhLAOgaA8IAAhaIAAgsIAAgDIgBAAIAAhCIABABIAAABIABAAQAOANAXAAIAAAAIAAAAIACAAIABAAIACAAIADAAIAHAAIAIAAIARgBIAAAAIABAAIALAAIAMABIACAAIACAAIABAAIABAAIAFAAIAFAAIACAAIgCAKIgCAVIgEAcIAEgcIACgVIAgAAIggAAIACgKQAUgCAUgEQAcgGAbgCIA4gGIAFgBIABAAQAQgCAQAAIABAAIAAAAIAMAAIAEAAQAcACAcAAIA5gBIA7gDQAbgCAdgGIAAB1QgIgQgOgBIgJAAQgrgDguAAIgBAAIAAAAIgcAAIgEAAIgEAAIg7ABIhOAAIh6AAIB6AAIBOAAIA7gBIAEAAIAEAAIAcAAIAAAAIABAAQAuAAArADIAJAAQAOABAIAQIAABaQgQgcgpgJQhCgOhDAAIiIAAQg2AAgugFIgbgEIAAAAIAKgxIgKAxIAAAAIAbAEQAuAFA2AAICIAAQBDAABCAOQApAJAQAcQh8BLiTAAQiDAAiYg9gAieBkIgqgUgAkUgCQA5gfA2gCQg2ACg5AfgAilgjIAaAAIABAAIgBAAQgNgEgMgCIgBAGgAivAOgAjuhkQgXAAgOgNIgBAAIAAgBIgBgBQAYgJAagFQAcgFAcgBIASgBIAqgBIA4gCIA3gBQAeABAegDIA5gEQAcgDAbACIA8AAQAdAAARAOQgdAGgbACIg7ADIg5ABQgcAAgcgCIgEAAIgMAAIAAAAIgBAAQgQAAgQACIgBAAIgFABIg4AGQgbACgcAGQgUAEgUACIADgkIgDAkIgCAAIgFAAIgFAAIgBAAIgBAAIgCAAIgCAAIgMgBIgLAAIgBAAIAAAAIgRABIgIAAIgHAAIgDAAIgCAAIgBAAIgCAAIAAAAIAAAAgAichkIAAAAgAEWiFIAAAAg");
	this.shape_80.setTransform(44.2,155.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AkZEeQgzg2BnhkIAABcQE/B/DriNIAAhcQBwA5hEBvQiYBcijAAQihAAiuhcgAlnAuQhHiOBLkBQBEgoA3AbIAABSQgogHgkAWQgWBzAWCCQAuAkAggLIAAASIAABCIAAAAQgKACgLAAQgwAAg8gpg");
	this.shape_81.setTransform(39.5,142.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("rgba(74,155,253,0.341)").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_82.setTransform(30.2,152.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(0.1,1,1).p("AjOmrQEDhTDuBTQAtAgg3AgQjlAljBglQhYgFAXg7gAFFAxIAAlYIApg2QAKgygvguQkmhNkuBVQgVA+AVAoIAmAoIAAAcIAAAHQgBgBgCAAIAABRQgogGgkAWQgWBzAWCAQAuAlAggKIABgHIAAAHQgBAAAAAAAFFAxQhFAThSAXQAAAAAAAAQhPgPhPgBQg/gBg6AMQgLACgLADIAWAAIAUAAAFFAxQgrgUhJAEQhBAEhMAAQhLAAhegMIAkAMAh1i5QgHgrgJgrIgaAAAiZjFIAkAMQAEAaADAaIAlAAAhXivIgegKAhuiFIgXAAAjlkLIgDAGQg3gbhEAoQhLD/BHCQQBJAyA4gLIAAAAIAAhUAjoi0QABABACAAIAAACgAjlBjIAAguAhmAZIAAAAQgBAegCAfQAAACAAADAhmAZIAAAAIgjgMAiDg7IAbAAIAbAAAhmAZQAAAAABAAIgBAAQAAgpgCgrQgCglgEglAhvCVQABgGAAgFQACgSACgRQAAgGABgGAhPCVIggAAAh/BbQhHgJgfgdAjlixIAADmQA8gYBDgEAh3DLQABgCAAgDQADgOABgOQACgLABgKAh3DLQAOAAANABQAAAAAAAAQBCAAA3AAQAoAAAoAAQAdgBAdAAQACAAACAAQBGgCA9AFQAOABAJAQQBwA5hEBvQkvC3lbi3Qgzg3BnhjIAAgsIAAgDQgBAAAAAAIABADAh2DGQANACANADAiBD/IABAAQANACANABQAvAFA1AAQBDAABFABQBEAABCAOQApAIAQAdIAAhcIAAiuAh3DLQgEAagGAaAiZFBIAqAUAjlDtIAABcQAag8BKgOAjlDtQA4ggA2gCAjlFJQE/B/DriN");
	this.shape_83.setTransform(39.5,131.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AkZEeQgzg2BnhkIAABcQE/B/DriNIAAhcQBwA5hEBvQiYBcijAAQihAAiuhcgAlnAuQhHiOBLkBQBEgoA3AbIAABSQgogHgkAWQgWBzAWCCQAuAkAggLIAABUIAAAAQgKACgLAAQgwAAg8gpg");
	this.shape_84.setTransform(39.5,142.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("rgba(72,249,147,0.341)").s().p("AkUB5QAag8BLgOIAAAAIAbAEQAuAFA2AAICIAAQBDAABCAOQApAJAQAcQh8BLiTAAQiDAAiYg9gAieCFIgqgUgAkUB5IAAhcIAAgqIAAgDIgBAAIAAhTIABgBIAAgGIAAguQA8gZBDgEIAAABIABAAQBeAMBMAAQBLAABBgFQBJgDArAUIiXAqICXgqIAACrQgIgPgOAAIgJAAQgrgDguAAIgBAAIAAAAIgcAAIgEAAIgEAAIg7ABIhOAAIh6AAIB6AAIBOAAIA7gBIAEAAIAEAAIAcAAIAAAAIABAAQAuAAArADIAJAAQAOAAAIAPIAABcQgQgcgpgJQhCgOhDAAIiIAAQg2AAgugFIgbgEIAAAAIAKgxQg2ACg5AdQA5gdA2gCIgKAxQhLAOgaA8IAAAAgAikgIIgBAGIAaAAIABAAIgBAAQgNgEgMgCIAEgcIACgVIgCAVIgEAcIAAAAgAieg5IAgAAIggAAIACgKIADgkIABgMIAUAAIgUAAIAAgFIgWAFQhHgJgfgcQAfAcBHAJIAWAAIgBAMIgDAkIgCAKIAAAAgAgciDQBNACBOAPIAAAAIAAAAIAAAAQhOgPhNgCIgHAAIgGAAIAAAAIAAAAQg6AAg1ALQACgeABgeQgBAegCAeQA1gLA6AAIAAAAIAAAAIAGAAIAHAAgAhwipIgkgLgAivAvgAiYhzgAiYh4IAAAAg");
	this.shape_85.setTransform(44.2,152.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(0.1,1,1).p("AjOmrQEDhTDuBTQAtAgg3AgQjlAljBglQhYgFAXg7gAFFgJIAAkeIApg2QAKgygvguQkmhNkuBVQgVA+AVAoIAmAoIAAAcIAAAHQgBgBgCAAIAABRQgogGgkAWQgWBzAWCAQAuAlAggKIABgHIAAAHQgBAAAAAAAFFgJQgyAehCAKQgQADgQABIgBAAQgzACg5AAQgTAAgUAAQAAAAgBAAQgBAAAAAAQhBgQhAgGQAAAFAAAFIABAAIAkAMAAdAlQgBgBgBABAhmgOQBYABBKAAQBOAABJACQBAgFAyAHAhXivIgegKQgHgrgJgrIgaAAAhuiFIAlAAAhuiFQgDgagEgaAiFiFIAXAAQAEAlACAlIgbAAAiZjFIAkAMAjlkLIgDAGQg3gbhEAoQhLD/BHCQQBJAyA4gLIAAAAIAAhUAjoi0QABABACAAIAAACgAjlBjIAAhSQA9ggBBABIABAAAhmAZIAAAAIgjgMQARABASABQAAgPAAgOQgBgXgBgWIAbAAAhmAZQAAAAABAAAhpBbQAAgDAAgCQACgfABgeIAAAAAhvCVQABgGAAgFQACgSACgRQAAgGABgGIgWAAAhPCVIggAAAhpBbIAUAAAiJANQgtAEgvAAAjlixIAADCAh2DGQADgOABgOQACgLABgKAh2DGQANACANADAh3DLQABgCAAgDAh3DLQAOAAANABQAAAAAAAAQBCAAA3AAQAoAAAoAAQAdgBAdAAQACAAACAAQBGgCA9AFQAOABAJAQIAABcQgQgdgpgIQhCgOhEAAQhFgBhDAAQg1AAgvgFQgNgBgNgCIgBAAQAGgaAEgaQg2ACg4AgQhnBjAzA3QFbC3Evi3QBEhvhwg5IAAjoAiZFBIAqAUAjlDBIAAAsIAABcQE/B/DriNAjlDBIAAgDQgBAAAAAAgAiBD/QhKAOgaA8");
	this.shape_86.setTransform(39.5,131.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("rgba(72,249,147,0.341)").s().p("AkUCOQAag8BLgOQhLAOgaA8IAAhcIAAgsIAAgDIgBAAIAAhSIABAAIAAgHIAAhSQA9giBBABIABAAICjABQBNAABJACQBAgFAyAHQgyAghCAKIggAEIAggCIAAgCQBCgKAyggIAADoQgIgQgOgBIgJgBQgrgCguAAIgBAAIAAAAIgcAAIgEAAIgEAAIg7ABIhOAAIh6AAIB6AAIBOAAIA7gBIAEAAIAEAAIAcAAIAAAAIABAAQAuAAArACIAJABQAOABAIAQIAABcQgQgdgpgIQhCgOhDAAIiIgBQg2AAgugFIgbgDIAAAAIAKg0IgKA0IAAAAIAbADQAuAFA2AAICIABQBDAABCAOQApAIAQAdQh8BKiTAAQiDAAiYg8gAieCaIgqgUgAkUAyQA5ggA2gCIAaABIABAAIgBgBQgNgDgMgCIAEgaIACgVIAgAAIggAAIACgLIADgjIABgMIAAgFQACgfABgeIABAAIgBAAIAAgFIAAgFQBAAGBDAQQhDgQhAgGIAAgPIAAgQIAAAQIAAAPIgjgCIAjAMIAAAAIAAAAQgBAegCAfIgWAFIAWAAIgBAMIgDAjIgCALIgCAVIgEAaIgBAFQg2ACg5AggAB/heIAAABIAAgBIAAAAIAAAAgAiEheIgUAAgAAWiUQA5AAAzgCIAAAAIAAAAQgzACg5AAIgmAAIgCAAIABAAIABAAIAmAAgAhwiUIgkgMgAkUioQAvAAAtgEQgtAEgvAAgAEWAkIAAAAgAiYhegAgSiUIACAAIgBAAIgBAAgAgQiUIAAAAgAgSiUIAAAAgAi4isIAjACIAAAFIAAAFgAiViqIAAAAgAEWjEIAAAAg");
	this.shape_87.setTransform(44.2,150.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(0.1,1,1).p("AjOmrQEDhTDuBTQAtAgg3AgQjlAljBglQhYgFAXg7gAFFg3IAAjwIApg2QAKgygvguQkmhNkuBVQgVA+AVAoIAmAoIAAAcIAAAHQgBgBgCAAIAABRQgogGgkAWQgWBzAWCAQAuAlAggKQAAAAABAAIAAgHIAAiQQAPgZAlgHQAjgHAkABIAAAAQgBgZgDgZIgXAAAhqhTQAnAAAlAAQAiAAAkAAQAnAAAnAAQAnAAAnAAQAnAAAnAEQAhADASAVQgiANgpABQgmABgmAEQglAFgnABQgmABgoAAQgjAAglAAQgZAAgaAAQgNAAgOAAQgoAAgigIQgMgDgNgFAh1i5QgHgrgJgrIgaAAAiZjFIAkAMAhuiFQgDgagEgaIAeAKAhJiFIglAAAjlkLIgDAGQg3gbhEAoQhLD/BHCQQBJAyA4gLIAAAAIAAhUIABgHAjoi0QABABACAAIAAACgAhog7IgbAAAhngdQAAgPgBgPIAbAAAhmAZIABAAIAkAMAhmAZIAAAAIgjgMAhmAZIAAAAQgBAegCAfQAAACAAADIAUAAAhngdQABAIAAAHQAAAOAAAPQAAAFAAAFAhmAZQAAAAABAAAhvCVQABgGAAgFQACgSACgRQAAgGABgGIgWAAAhPCVIggAAAhqhTQABAMABAMAjlixIAACEAh2DGQANACANADAh2DGQADgOABgOQACgLABgKAh3DLQABgCAAgDAh3DLQAOAAANABQAAAAAAAAQBCAAA3AAQAoAAAoAAQAdgBAdAAQACAAACAAQBGgCA9AFQAOABAJAQIAAkWAiBD/IABAAQANACANABQAvAFA1AAQBDAABFABQBEAABCAOQApAIAQAdIAAhcAh3DLQgEAagGAaAiZFBIAqAUAjlDBIAAAsQhnBjAzA3QFbC3Evi3QBEhvhwg5AjlDBIAAgDQgBAAAAAAgAjlDtIAABcQAag8BKgOAjlDtQA4ggA2gCAjlFJQE/B/DriN");
	this.shape_88.setTransform(39.5,131.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("rgba(72,249,147,0.341)").s().p("AkUCwQAag8BLgOQhLAOgaA8IAAhcIAAgsIAAgDIgBAAIAAhRIABgBIAAgGIAAiSIAZAHQAiAJAoAAIAbAAIABAOIAAAQIAAAQIAAAEIAAAFIgjgMIAjAMIAAAAIAAABQgBAegCAeQACgeABgeIABAAIAkALIgkgLIgBgBIAAgFIAAgEIAAgQIAAgQIgBgOIgBgfIABAfIgbAAQgoAAgigJIgZgHQAPgaAlgGQAjgHAkAAIABAAIBLABIBIAAIBMAAIBPAAQAnAAAmADQAhADASAWQgiAMgoACQgnABgmAEQglAEgmABIhNACIhJAAIg0AAIA0AAIBJAAIBNgCQAmgBAlgEQAmgEAngBQAogCAigMIAAEVQgIgQgOgBIgJAAQgrgDguAAIgBAAIAAAAIgcAAIgEAAIgEAAIg7ABIhOAAIh6AAIB6AAIBOAAIA7gBIAEAAIAEAAIAcAAIAAAAIABAAQAuAAArADIAJAAQAOABAIAQIAABcQgQgcgpgJQhCgOhDAAIiIAAQg2AAgugFIgbgEIAAAAIAKgzQg2ACg5AfQA5gfA2gCIgKAzIAAAAIAbAEQAuAFA2AAICIAAQBDAABCAOQApAJAQAcQh8BLiTAAQiDAAiYg9gAieC8IgqgUgAikAtIgBAGIAaAAIABAAIgBAAQgNgEgMgCIAEgcIACgTIgCATIgEAcIAAAAgAh+gCIggAAIACgKIADgkIABgMIAUAAIgUAAIAAgFIgWAFIAWAAIgBAMIgDAkIgCAKgAB/g7IAAAAIAAAAIAAAAIAAAAgACCh0IAggCIAAgBIggADgAh8jUIgbAAgAiXjUIgBgYIABAYIgbAAgAivBmgAiegCgAiYg8gAiWi1IAAAAg");
	this.shape_89.setTransform(44.2,147.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_2}]},18).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_73},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78}]},1).to({state:[{t:this.shape_85},{t:this.shape_84},{t:this.shape_82},{t:this.shape_83}]},1).to({state:[{t:this.shape_87},{t:this.shape_84},{t:this.shape_82},{t:this.shape_86}]},1).to({state:[{t:this.shape_89},{t:this.shape_84},{t:this.shape_82},{t:this.shape_88}]},1).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,82.5,81,98.6);


(lib.anim_money_circles = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.static_dollarSign("synched",0);
	this.instance.setTransform(235.2,72.2,0.199,0.199,0,0,0,52.5,73.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[235.1,72.1,233.9,56.1,205.5,44.7,175.9,32.9,134,32.9,92.3,32.9,62.6,44.7,45,51.8,37.9,60.6]}},4).to({guide:{path:[38,60.6,33,66.7,33,73.6,33,90.5,62.7,102.5,92.3,114.4,134,114.4,175.9,114.4,205.6,102.5,218.7,97.2,226,90.9]}},5).wait(1));

	// Layer 3
	this.instance_1 = new lib.static_dollarSign("synched",0);
	this.instance_1.setTransform(152.6,33.4,0.199,0.199,0,0,0,52.5,73.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({guide:{path:[152.5,33.6,143.6,32.9,134,32.9,92.1,32.9,62.6,44.9,33,56.6,33,73.5,33,90.4,62.6,102.4,78,108.7,97,111.7]}},4).to({guide:{path:[97.3,111.7,114.4,114.4,134,114.4,175.9,114.4,205.6,102.5,235.2,90.5,235.2,73.6,235.2,56.9,205.6,44.9,191.6,39.3,174.9,36.3]}},5).wait(1));

	// Layer 1
	this.instance_2 = new lib.static_dollarSign("synched",0);
	this.instance_2.setTransform(69,104.9,0.199,0.199,0,0,0,52.5,73.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({guide:{path:[69.1,104.8,65.8,103.7,62.6,102.4,33,90.5,33,73.6,33,56.7,62.6,44.9,92.1,33,134,33,150.3,33,164.7,34.8]}},4).to({guide:{path:[164.7,34.8,150.3,33,134,33,92.1,33,62.6,44.9,33,56.7,33,73.6,33,89.9,60.8,101.7]}},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(57.5,17.8,189.2,102.8);


(lib.anim_grnClock = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.anim_gran_chimes();
	this.instance.setTransform(31.7,52.3,1,1,0,0,0,4.3,22.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5));

	// Layer 3
	this.instance_1 = new lib.anim_grnClock_hands();
	this.instance_1.setTransform(32.1,14.7,1,1,0,0,0,0.5,2.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("ACXlnIAhgPIh5hhIgXAVgAA8lcIAAAAQgBAAAAAAQgDAAgDABQgCAAgBABQgDABgCABQgCACgCABQAAABgBAAQgBACgBACQgCADgBAEQgBABAAABQgBADAAACQAAACAAAAQABADAAACQABADABADQACADACACQAAAAABABQABABABABIgWAXABHlaQgBAAgBgBQgDgBgEAAQgBAAgBAAIABgjQgCAAgBAAQgMAAgKAEIAOAhAA9l/QAMABAKAFQAJAEAHAHQACADACACQAIAJADALQADAIAAAJQAAADAAABQgBALgEAJQgFAKgIAIQgIAIgJAEQgKAFgLAAQgCAAgBAAQgLAAgJgDQgJgDgIgHQgDgCgCgCQgHgGgDgHQgGgLAAgOQAAgBAAgDQAAgKABgJIAiAOAAQluQAJgJALgEAgjl9IBLhFAgellIgFgYIh/AAIAXAYgAAhlAIghAAAAGknIAegOABUk3QACgDAAgEQAAAAABgBQAAgBAAgCQAAgCgBgDQAAgBAAgBQgCgDgBgDQgBgCgCgCQgBgBgBgBQAAAAgBgBQgDgCgDgCAArktQADACAEACQAAAAABAAQAEACAFAAIABAAQAAAAABAAQAFAAAEgCQACgBACgCQABgBACgCQAAAAAAAAQADgCABgDQABgBABgCAB1lAIgeABABwksIgcgLAA9knIAAAeABHkpIALAbABOkvIAVAVABylVIgcAMAABlXQAFgMAKgLIAYAaABTl5IgMAfABnlpIgXAWAB1j2IAAAhIh1AAIABghgAAmkMIANgdAA/nXIiAAFIhhBVAB2ipIAAHmIh1AAIAAnmgAiLFHIAAAGIBtApIAArbAkAGAQArgOAUgrIA2AAIAAqsAhzHYQgGgOgGgOQg/gQhCgsIAIAOQAzAoBSAigAhBGFQgSAkgsATQC/AbDBgbQg3gXgDgmQgfgOgRgOIAAAUIi1gBAjBFHQBPAxAxANAEBG8IgVAcIlfAAADHF/QiMAWh8gQACXFjIAArK");
	this.shape.setTransform(25.8,47.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3C1E00").s().p("Ag5DzIAAnlIBzAAIAAHlg");
	this.shape_1.setTransform(31.8,54.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("Ag6AQIADgfIByAAIAAAfg");
	this.shape_2.setTransform(31.6,24.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AADAcIABAAQAFAAAEgCIALAbQgKAFgLABgAgkAtIAXgXIgCgCIgBgBIgEgFIgCgGIAAgEIAAgCIAAgEIAAgCIghgOQAFgMAKgKIAYAZIgDAEIgDAHIADgHIADgEIABgBIAEgDIAFgCIgOghQAKgDAKAAIADAAIgBAiIACAAIAHACIACAAIAMgfQAJAEAHAIIAFAEIgYAXIADADIADAGIAAACIABAEIAAACIgBABIgCAIIgCACIgDAFIgBABIgEADIgDACQgEACgFAAIgBAAIgBAAQgDAAgEgCIgBAAIgHgEIAHAEIABAAIgNAeQgJgEgJgHgAATgRIACABIABADIgBgDIgCgBIgGgEIAGAEgAgDgWIgDABIADgBIAEgBIABAAIAAAAIAAAAIgBAAIgEABgAAUAVIABgBIADgFIACgCIAcAKQgFAKgIAIgAg6AEIAkAAIAAAEIACAGIgeAOQgHgLgBgNgAAdACIgBgEIAAgCIAcgMQADAIgBAIIAAAEIgdAAIAAgCg");
	this.shape_3.setTransform(31.6,14.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AAAA7QgJAAgJgDIANgeQAEACADAAIABAAIAAAfIgDAAgAANAaIADgCIAEgDIAVAUQgIAIgJAEgAgoApQgHgGgDgHIAegOIAEAFIABABIACACIgXAXIgEgEgAAaANIACgIIABgBIAdAAQAAAKgEAJgAg6AEIAAgEQAAgJADgJIAhAOIAAACIAAAEIAAACgAAZgKIgDgDIAYgXQAHAJADALIgcAMIgDgGgAgogoQAJgKALgEIAOAhIgFACIgEADIgBABgAALgVIgHgCIgCAAIABgiQAMAAAKAFIgMAfIgCAAg");
	this.shape_4.setTransform(31.6,14.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC6600").s().p("Ah/HDQAsgTATgkQB7AQCMgWQADAmA3AXQhgAOhhAAQheAAhhgOgAkAGHQArgOAVgsQBOAyAyANQgTAkgsATQg/gRhCgrgAhAGMIAAAAgAgdF9IAArbIgGgYIBLhFIhLBFIh/AAIBihVIB/gFIgXAVIBvBbIAALJIAAAUgAABFDIB1AAIAAnlIh1AAgAAAjOIB1AAIAAghIh0AAgAAkl0QgLAEgJAJQgKALgFAMQgBAJAAAKIAAAEQAAAOAGALQADAHAHAGIAEAEQAJAHAJADQAJADALAAIADAAQALAAAKgFQAJgEAIgIQAIgIAFgKQAEgJAAgLIAAgEQABgJgDgIQgDgLgHgJIgFgFQgHgHgJgEQgKgFgMgBIgDAAQgMAAgKAEgAiKFTIAAgGIAAqrIBtAAIAALbg");
	this.shape_5.setTransform(25.8,46.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#723901").s().p("AhzHYIgMgcQC/AbDBgbIgWAcgAj4GOIgIgOQBCAsA/AQIAMAcQhSgigzgogAhAGFQgygNhOgxIA2AAIAAAFIBtAqIC0AAIAAgTQARAOAfAOQhRANhMAAQg2AAg0gHgAiKlkIgYgZIB/AAIAGAZgAAonCIAXgVIB5BhIghAPg");
	this.shape_6.setTransform(25.8,47.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,53.5,96.4);


(lib.anim_Cash = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* _root.v1a.start();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(25));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Egl1AOrIAA9UMBLfAAAIAMAAIAAdUg");
	mask.setTransform(44.8,67.7);

	// Layer 1
	this.instance = new lib.anim_money_strobe();
	this.instance.setTransform(42.9,76.8,1,1,0,0,0,52.5,73.6);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

	// Layer 2
	this.instance_1 = new lib.anim_money_circles();
	this.instance_1.setTransform(33.5,73.3,0.665,0.665,0,0,0,135.1,70.1);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:4.89,scaleY:4.89,y:73.2},11).to({regX:135,regY:70,scaleX:0.51,scaleY:0.51,x:33.4,y:73.3},13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.5,3.2,124.5,147.3);


(lib.anim_weight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Egl1AOrIAA9VMBLrAAAIAAdVg");
	mask.setTransform(41.8,38.1);

	// Layer 1
	this.instance = new lib.static_human_scale("synched",0);
	this.instance.setTransform(-273.9,79.2,0.593,0.593,-30,0,0,34.5,115.7);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:33.4,y:74},5).to({regX:34.4,regY:115.8,rotation:30,y:74.1},6).to({regX:30.6,regY:115.6,scaleY:0.59,rotation:0,x:31.1,y:74},5).to({regY:68.4,y:46},1).to({scaleX:1.65,scaleY:1.65},32).to({regX:30.7,regY:68.5,rotation:-15,x:31.3,y:46.1},5).to({rotation:30,x:31.2},14).to({regX:30.6,regY:68.4,rotation:0,x:31.1,y:46},6).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.fcb_states = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{up:0,press:1,uncheckedDisabled:2,checkedDisabled:3,checkedPress:4,checkedEnabled:5});

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


(lib.anim_grnClock_stage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		/* _root.v2c.start();*/
	}
	this.frame_45 = function() {
		/* _root.v2c.start();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(26).call(this.frame_45).wait(45));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Egl/AOiIAA9DMBL/AAAIAAdDg");
	mask.setTransform(32.8,46.6);

	// Layer 1
	this.instance = new lib.anim_grnClock();
	this.instance.setTransform(-240.5,55.2,5.409,5.409,0,0,0,32.3,15.1);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:31.8,rotation:360,x:48.8,y:57.6},19).to({regX:25.8,regY:47.2,scaleX:2.4,scaleY:2.4,rotation:0,x:16.2,y:7.4},26).to({regY:47.3,scaleX:1.5,scaleY:1.5,rotation:360,x:17,y:43.6},23).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-210.4,-26.7,74.1,166.4);


(lib.Content_scene2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// artwork
	this.instance = new lib.anim_grnClock_stage();
	this.instance.setTransform(183.4,29,1,1,0,0,0,25.8,47.2);

	this.instance_1 = new lib.anim_Cash();
	this.instance_1.setTransform(198.9,35.5,1,1,0,0,0,52.5,73.6);

	this.instance_2 = new lib.anim_weight();
	this.instance_2.setTransform(150.1,-9.3);

	this.instance_3 = new lib.anim_pouring();
	this.instance_3.setTransform(204.4,23.2,1,1,0,0,0,70,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance,p:{skewY:0,x:183.4}}]},90).to({state:[{t:this.instance_1}]},55).to({state:[{t:this.instance_1}]},54).to({state:[{t:this.instance_2}]},60).to({state:[{t:this.instance_3}]},59).to({state:[{t:this.instance,p:{skewY:180,x:197.1}}]},60).to({state:[{t:this.instance,p:{skewY:180,x:183.3}}]},66).wait(1));

	// examples
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKAJQgEgEgBgFQABgDAEgFQAFgEAFAAQAGAAAFAEQAFAEAAAEQAAAFgFAEQgFAEgGAAQgFAAgFgEg");
	this.shape.setTransform(290.6,206.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAaBJQgHAEgHACIgMABQgWAAgOgPQgPgOAAgWQAAgaAPgOQAOgQAWAAQAIAAAGABQAFACAFADQABgiABgMQACgLALAAQAGAAADADQAEAEAAAFIgCArQgDAaAAAPQAAAjADALIAAADQAAAGgEADQgEAEgFAAQgHAAgEgHgAgTAEQgHAIAAARQAAAKAIAIQAIAHAKABQAGAAADgCIAJgGIADgDIAAgkQgDgHgFgBQgFgDgHAAQgMAAgIAHg");
	this.shape_1.setTransform(280.4,199.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AglAyQgEgDAAgGIAAg+IABgJIAAgJQAAgFAEgEQACgDAHAAQALAAABALQAQgNAVAAQATAAABAaIAAAGQgBAPgOAAQgMAAABgMIgBgKQgUADgKATIAAAvQABAGgEAEQgEADgGAAQgGAAgDgEg");
	this.shape_2.setTransform(270,202.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAXAsQgJAFgHACQgGACgEAAQgXAAgLgMQgMgNgBgZQAAgWASgQQARgRAXAAQAIAAANAFQAPAGAAAJQAAADgCADIgCAJIgBAOQAAARADAIIAEAKIAFAJQgBAFgEAEQgDADgGAAQgFAAgJgJgAgNgSQgJAKgBAMQABANAEAGQAFAHAJAAQAFAAAFgCQAFgCAFgEQgDgWAAgLIAAgHIACgJIgEgBIgCgBQgLAAgLALg");
	this.shape_3.setTransform(259.6,202.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgfApQgOgOgBgXQAAgTAMgRQAPgUAZAAQATAAAMAQQAKAOAAAUQAAAVgMAQQgOASgVAAQgSAAgNgMgAgNgPQgFAJAAAKQAAAMAGAGQAFAFAHAAQAHAAAGgFQAHgHABgMQABgdgSAAQgKAAgHALg");
	this.shape_4.setTransform(248.6,202.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgcBKQgDADgGAAQgFAAgEgDQgDgDAAgGIAAgHIAAgHIAAhtQAAgHADgGQAEgGAHAAQALgBAAAMIAAAEIgBAEIAAAmQAHgEAHgDQAHgCAEAAQAXAAAOARQANAOAAAWQAAAXgPAPQgQARgVgBQgOAAgMgEgAgKgBQgHABgIAGIAAAqQAOAFAJAAQALABAIgJQAIgIAAgNQAAgMgHgJQgHgGgLAAQgDAAgHACg");
	this.shape_5.setTransform(237.6,199.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgRBSQgEgEAAgFIAAgCQACgOAAgNIAAgvIgGABIgGABQgGAAgEgEQgEgDAAgGQAAgJAKgDIARgCIABgLQADgVAJgLQAJgNAYAAQASAAAAAMQAAANgRAAQgMAAgFAIQgEAHgCANIAAACIATgBQASAAAAANQAAANgTgBIgTABIAAAYIAAAbQAAARgCALQgCAKgJAAQgFAAgEgDg");
	this.shape_6.setTransform(226.5,200.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AglAyQgEgDAAgGIAAg+IABgJIAAgJQAAgFAEgEQACgDAHAAQALAAABALQAQgNAVAAQATAAABAaIAAAGQgBAPgOAAQgMAAABgMIgBgKQgUADgKATIAAAvQABAGgEAEQgEADgGAAQgGAAgDgEg");
	this.shape_7.setTransform(216.9,202.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AATAwQgMAEgMAAQgOAAgJgGQgLgGgCgNQgEgYAAgRQAAgNADgQQACgLAMAAQAFAAAEADQAEAEAAAFIgBAOIgCANIABAWQABALACAGIAFACIAEABQAJAAANgEIAAgRIAAgOQAAgUACgPQABgLAMAAQAGAAAEADQAEAEAAAFIgCAjIAAASIAAATIAAAGIABAGQAAAGgEAEQgEADgGAAQgIAAgEgHg");
	this.shape_8.setTransform(206.6,202.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgbAzQgOgGAAgLQAAgJAMAAQAEAAAIACQAJADAFAAQASAAAAgIQAAgFgOgGIgYgLQgOgKAAgNQAAgUAVgGQANgFAXAAQAJABAEACQAHADAAAKQAAARgJAAQgKAAgCgIIgIgBQgWAAABAGQAAAFAMAGQATAJAHAEQAOAJAAANQAAAQgQAKQgMAGgQAAQgNAAgMgDg");
	this.shape_9.setTransform(196.5,202.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AADAeQgDgJgCgWIgCAEIgPAlQgBAEgDADQgEAGgJABQgEAAgFgJQgFgIgEgNQgDgNgGgmIgCgOQAAgFAFgEQADgDAHAAQAKAAACAKIACAOIACANIAEAXIARgvQAEgNAJAAQALAAADAOIAFAaIAFAaIAPg6QACgIAKAAQAGAAAEADQAEAEABAFIgBADIgVBEQgCAJgIAJQgEAGgIAAQgMAAgHgYg");
	this.shape_10.setTransform(176.4,202.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AggAqQgQgNAAgWQgBgXANgRQAPgTAXAAQAQAAAMAGQAOAHAAAPQAAALgMAIIgVAJIgfAPQAEAFAHACQAHADAGAAQAOAAAIgFQAIgFAGAAQAKAAAAAKQAAALgRAHQgOAGgPAAQgVAAgPgLgAgMgWQgGAGgEAMIAVgJQAMgGAHgFQgGgEgKAAQgHAAgHAGg");
	this.shape_11.setTransform(163.7,202.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAUAsIgDgUIgCgUIAAgHIABgIIAAgEIABgEQgBgJgEAAQgIAAgGALQgIALgEAOIgBAJIgBAJIAAAJIgBAIQAAAGgEADQgEAEgGAAQgFAAgFgEQgDgDAAgGIgBgIIgBgJIACgaIACgZIgBgJIAAgJQAAgFADgEQAEgDAGAAQANAAABAPIAAABQAOgOAOAAQASAAAIAPQAEAKAAAVIAAAHIAAAEQABAIACAMQACAMAAAHQAAAGgFAEQgEADgFAAQgMAAgBgMg");
	this.shape_12.setTransform(153.2,202.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgbBLQgFgEAAgFQAAgJAVgtQgLgTgXgqIgFgHQgDgFABgDQAAgGAEgEQAEgDAFAAQAHAAAEAEQANATARAlIANgcIANgZQAFgIAGABQAGAAAEADQAFAEAAAFIgCAGIgiBEQgMAZgGARIgFASQgEAJgIAAQgGAAgEgDg");
	this.shape_13.setTransform(133.6,204.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgHA4QgEgEAAgFQAAgLgCgWQgDgUAAgLIgBgKQgLAHgMAPIgBACIgBAdIAAAIIAAAGQAAAGgEADQgEADgGAAQgIAAgDgIQgCgFAAgKIAAgjIgBgOIAAgOQAAgJADgHQAEgJAHAAQAFAAAFAFQAEAEAAAFIgBAIQAPgRANAAQAPAAAFAMQAGgGAHgCQAHgDAJAAQATAAAHATQABAEADAXQADANAEAlQAAAGgEAEQgEADgGAAQgLAAgCgLIgDgcIgEgbQgCgRgEAAQgDAAgIAEIgLAIQAAALACATQADAVAAALQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_14.setTransform(120.5,202.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AglAyQgDgDAAgGIAAg+IAAgJIAAgJQAAgFADgEQAEgDAFAAQALAAADALQAPgNAVAAQAUAAAAAaIAAAGQgCAPgNAAQgLAAgBgMIAAgKQgUADgJATIAAAvQAAAGgEAEQgEADgGAAQgGAAgDgEg");
	this.shape_15.setTransform(99.3,202.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgfApQgOgOgBgXQAAgTAMgRQAPgUAZAAQATAAAMAQQAKAOAAAUQAAAVgMAQQgOASgVAAQgSAAgNgMgAgNgPQgFAJAAAKQAAAMAGAGQAFAFAHAAQAHAAAGgFQAHgHABgMQABgdgSAAQgKAAgHALg");
	this.shape_16.setTransform(89,202.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgRBSQgEgEAAgFIAAgCQACgOAAgNIAAgvIgGABIgGABQgGAAgEgEQgEgDAAgGQAAgJAKgDIARgCIABgLQADgVAJgLQAJgNAYAAQASAAAAAMQAAANgRAAQgMAAgFAIQgEAHgCANIAAACIATgBQASAAAAANQAAANgTgBIgTABIAAAYIAAAbQAAARgCALQgCAKgJAAQgFAAgEgDg");
	this.shape_17.setTransform(78.7,200.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgIBEQgEgEAAgFIABgLIAAgLIgCgwIgTgBQgMgCABgMQAAgFADgEQAEgDAFAAIARABIAAgKIgBgKQAAgFAFgEQAEgEAFAAQAMAAAAAZIAAAIIAKgBQAMgBADACQAJADAAAJQAAAGgEADQgEAEgGAAIgFAAIgFAAIgJABIACAxIAAAFIAAAGQAAAWgOAAQgEAAgEgDg");
	this.shape_18.setTransform(354.6,170.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgLBHQgDgEgBgGIAAgSIAAgSIAAgVIABgUQAAgGAFgDQADgEAGAAQAEAAAEAEQADADAAAGIgBAUIgBAVIABASIAAASQAAAGgDAEQgFADgDAAQgGAAgEgDgAgHgwQgFgFAAgGQAAgGAFgEQAEgEAEAAQAGAAAFAEQAEAEABAGQgBAGgEAFQgFAEgGAAQgEAAgEgEg");
	this.shape_19.setTransform(347.3,170.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAXAsQgJAFgHACQgHACgDAAQgXAAgMgMQgMgNABgZQAAgWARgQQARgRAWAAQAJAAANAFQAOAGAAAJQAAADgCADIgBAJIAAAOQgBARADAIIAFAKIADAJQAAAFgDAEQgFADgFAAQgFAAgJgJgAgMgSQgLAKABAMQgBANAFAGQAFAHAKAAQADAAAGgCQAFgCAFgEQgDgWAAgLIAAgHIACgJIgDgBIgEgBQgLAAgJALg");
	this.shape_20.setTransform(338.8,172.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AADAeQgDgJgCgWIgCAEIgPAlQgBAEgDADQgFAGgHABQgFAAgFgJQgFgIgDgNQgEgNgGgmIgCgOQAAgFAFgEQADgDAHAAQAKAAACAKIADAOIABANIAEAXIAQgvQAEgNAKAAQAKAAADAOIAGAaIAFAaIAPg6QACgIAKAAQAGAAAEADQAEAEABAFIgBADIgUBEQgEAJgGAJQgFAGgIAAQgMAAgHgYg");
	this.shape_21.setTransform(326.4,172.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgfApQgOgOgBgXQAAgTAMgRQAPgUAZAAQATAAAMAQQAKAOAAAUQAAAVgMAQQgOASgVAAQgSAAgNgMgAgNgPQgFAJAAAKQAAAMAGAGQAFAFAHAAQAHAAAGgFQAHgHABgMQABgdgSAAQgKAAgHALg");
	this.shape_22.setTransform(305.5,172.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgHBEQgFgEAAgFIAAgLIABgLIgCgwIgSgBQgMgCAAgMQAAgFADgEQAEgDAGAAIARABIgBgKIAAgKQAAgFADgEQAFgEAFAAQANAAAAAZIAAAIIAJgBQALgBAFACQAHADABAJQgBAGgEADQgDAEgGAAIgFAAIgFAAIgJABIABAxIABAFIAAAGQAAAWgOAAQgDAAgEgDg");
	this.shape_23.setTransform(295.7,170.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AggAqQgRgNAAgWQABgXANgRQAOgTAWAAQARAAAMAGQAPAHAAAPQgBALgMAIIgWAJIgfAPQAGAFAGACQAHADAGAAQANAAAKgFQAHgFAFAAQAKAAAAAKQAAALgQAHQgOAGgPAAQgVAAgPgLgAgMgWQgHAGgEAMIAXgJQALgGAIgFQgHgEgLAAQgHAAgGAGg");
	this.shape_24.setTransform(276.6,172.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgHA4QgEgEAAgFQAAgLgCgWQgDgUAAgLIgBgKQgLAHgMAPIgBACIgBAdIAAAIIAAAGQAAAGgEADQgEADgGAAQgIAAgDgIQgCgFAAgKIAAgjIgBgOIAAgOQAAgJADgHQAEgJAHAAQAFAAAFAFQAEAEAAAFIgBAIQAPgRANAAQAPAAAFAMQAGgGAHgCQAHgDAJAAQATAAAHATQABAEADAXQADANAEAlQAAAGgEAEQgEADgGAAQgLAAgCgLIgDgcIgEgbQgCgRgEAAQgDAAgIAEIgLAIQAAALACATQADAVAAALQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_25.setTransform(263.5,172.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgLBHQgEgEAAgGIAAgSIgBgSIABgVIABgUQABgGAEgDQADgEAGAAQAEAAAEAEQADADAAAGIgBAUIgBAVIABASIAAASQAAAGgDAEQgEADgEAAQgGAAgEgDgAgIgwQgEgFAAgGQAAgGAEgEQAFgEAEAAQAHAAAEAEQAEAEAAAGQAAAGgEAFQgEAEgHAAQgEAAgFgEg");
	this.shape_26.setTransform(253,170.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgHBEQgFgEAAgFIAAgLIABgLIgCgwIgSgBQgMgCAAgMQAAgFADgEQAEgDAFAAIASABIgBgKIAAgKQAAgFADgEQAFgEAFAAQANAAAAAZIAAAIIAJgBQALgBAFACQAHADABAJQgBAGgEADQgDAEgGAAIgFAAIgFAAIgJABIABAxIABAFIAAAGQAAAWgOAAQgDAAgEgDg");
	this.shape_27.setTransform(245.3,170.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgxA+QAAgGADgDQAEgDAFAAIANABQAIACAHAAQAMAAAHgJQAHgIABgTQgFAFgGACQgHADgFAAQgTAAgNgNQgMgNAAgRQAAgbAQgQQARgRAbAAQAJAAAHACQAGADAEAEQANABAAANQAAAIgCALQgEAWgBAYQgBAggKAOQgMATgfAAQgmAAAAgPgAgOgrQgIAKAAAPQAAAMAEAGQAFAEAJAAQAGAAAIgHQAHgJABgIIAFgeIgHgDIgGgBQgPAAgJALg");
	this.shape_28.setTransform(226.6,175);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAUAsIgDgUIgCgUIAAgHIABgIIAAgEIAAgEQAAgJgDAAQgJAAgGALQgIALgEAOIgCAJIAAAJIgBAJIAAAIQAAAGgEADQgEAEgFAAQgHAAgDgEQgEgDAAgGIgBgIIgBgJIACgaIABgZIAAgJIgBgJQAAgFAFgEQADgDAHAAQAMAAABAPIAAABQAOgOAOAAQATAAAHAPQAEAKAAAVIAAAHIAAAEQAAAIACAMQACAMABAHQgBAGgEAEQgDADgGAAQgMAAgBgMg");
	this.shape_29.setTransform(216.3,172.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgfApQgOgOgBgXQAAgTAMgRQAPgUAZAAQATAAAMAQQAKAOAAAUQAAAVgMAQQgOASgVAAQgSAAgNgMgAgNgPQgFAJAAAKQAAAMAGAGQAFAFAHAAQAHAAAGgFQAHgHABgMQABgdgSAAQgKAAgHALg");
	this.shape_30.setTransform(205.6,172.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgIBMQgEgDAAgGIAAiFQAAgGAEgEQAEgDAEAAQAFAAAEAEQAEADAAAGIAAB/QAAATgNAAQgEAAgEgEg");
	this.shape_31.setTransform(197.7,169.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAXAsQgJAFgHACQgGACgDAAQgYAAgLgMQgNgNAAgZQAAgWASgQQARgRAXAAQAJAAAMAFQAPAGAAAJQAAADgCADIgCAJIgBAOQAAARADAIIAEAKIAFAJQAAAFgFAEQgEADgFAAQgFAAgJgJgAgNgSQgJAKgBAMQAAANAFAGQAFAHAJAAQAFAAAFgCQAFgCAFgEQgDgWAAgLIABgHIABgJIgEgBIgCgBQgMAAgKALg");
	this.shape_32.setTransform(180.9,172.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF0000").s().p("AgbAzQgOgGAAgLQAAgJALAAQAFAAAJACQAIADAFAAQARAAAAgIQAAgFgNgGIgYgLQgOgKAAgNQABgUAUgHQANgDAXAAQAJgBAEADQAHADAAAKQAAARgKAAQgJAAgCgIIgIgBQgVAAgBAGQABAFAMAGQATAJAHAEQAOAJAAANQAAARgPAIQgNAIgRgBQgNAAgLgDg");
	this.shape_33.setTransform(161.6,172.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF0000").s().p("AgLBHQgEgEABgGIgBgSIAAgSIABgVIABgUQAAgGADgDQAEgEAGAAQAEAAADAEQAFADAAAGIgBAUIgBAVIAAASIAAASQAAAGgEAEQgDADgFAAQgFAAgEgDgAgIgwQgEgFAAgGQAAgGAEgEQAFgEAEAAQAHAAAEAEQAFAEgBAGQABAGgFAFQgEAEgHAAQgEAAgFgEg");
	this.shape_34.setTransform(154.3,170.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgaAzQgPgGAAgLQAAgJALAAQAFAAAJACQAIADAFAAQARAAABgIQAAgFgOgGIgYgLQgNgKAAgNQAAgUAUgHQAMgDAXAAQAKgBAFADQAGADAAAKQAAARgKAAQgJAAgCgIIgIgBQgVAAAAAGQAAAFALAGQAUAJAHAEQAOAJAAANQAAARgPAIQgNAIgRgBQgNAAgKgDg");
	this.shape_35.setTransform(137.6,172.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAWBHQgCgIgCgOIgCgXIABgHIAAgIIAAgIQgBgDgFAAQgKAAgHAIQgFAFgIAOQAAAjgDAHQgEAIgIAAQgFAAgFgEQgEgDAAgGIABgFIABgaIAAg/IABgEIAAgPIgBgJIgBgJQAAgGAEgDQAEgEAGAAQAKAAADALQACAGAAAMIgBATIAAATQAHgHAIgDQAGgEAJAAQARAAAHAKQAGAHABAMIABAZIACATIADATIABADQAAAGgEADQgEAEgGAAQgKAAgDgKg");
	this.shape_36.setTransform(127.3,169.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgIBEQgEgEAAgFIABgLIAAgLIgCgwIgTgBQgLgCgBgMQABgFADgEQAEgDAGAAIAQABIAAgKIgBgKQAAgFAFgEQAEgEAFAAQAMAAAAAZIAAAIIAKgBQAMgBADACQAJADgBAJQAAAGgDADQgEAEgGAAIgFAAIgFAAIgJABIACAxIAAAFIAAAGQAAAWgOAAQgEAAgEgDg");
	this.shape_37.setTransform(116.7,170.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AATAsIgCgUIgCgUIAAgHIABgIIAAgEIAAgEQAAgJgDAAQgJAAgGALQgIALgFAOIgBAJIAAAJIgBAJIAAAIQAAAGgEADQgEAEgFAAQgHAAgDgEQgEgDAAgGIgBgIIAAgJIABgaIABgZIAAgJIgBgJQAAgFAFgEQADgDAHAAQAMAAABAPIAAABQAPgOANAAQASAAAHAPQAGAKAAAVIAAAHIAAAEQgBAIACAMQACAMAAAHQAAAGgDAEQgEADgGAAQgMAAgCgMg");
	this.shape_38.setTransform(106.9,172.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgfApQgOgOgBgXQAAgTAMgRQAPgUAZAAQATAAAMAQQAKAOAAAUQAAAVgMAQQgOASgVAAQgSAAgNgMgAgNgPQgFAJAAAKQAAAMAGAGQAFAFAHAAQAHAAAGgFQAHgHABgMQABgdgSAAQgKAAgHALg");
	this.shape_39.setTransform(96.2,172.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgHA4QgEgEAAgFQAAgLgCgWQgDgUAAgLIgBgKQgLAHgMAPIgBACIgBAdIAAAIIAAAGQAAAGgEADQgEADgGAAQgIAAgDgIQgCgFAAgKIAAgjIgBgOIAAgOQAAgJADgHQAEgJAHAAQAFAAAFAFQAEAEAAAFIgBAIQAPgRANAAQAPAAAFAMQAGgGAHgCQAHgDAJAAQATAAAHATQABAEADAXQADANAEAlQAAAGgEAEQgEADgGAAQgLAAgCgLIgDgcIgEgbQgCgRgEAAQgDAAgIAEIgLAIQAAALACATQADAVAAALQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_40.setTransform(83.5,172.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AggAqQgRgNAAgWQAAgXAOgRQAOgTAWAAQARAAAMAGQAPAHAAAPQgBALgLAIIgXAJIgfAPQAGAFAGACQAHADAGAAQANAAAKgFQAHgFAFAAQAKAAAAAKQAAALgQAHQgOAGgPAAQgVAAgPgLgAgMgWQgGAGgFAMIAXgJQALgGAIgFQgHgEgLAAQgHAAgGAGg");
	this.shape_41.setTransform(61.1,172.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AggAqQgQgNAAgWQgBgXANgRQAPgTAXAAQAQAAAMAGQAOAHAAAPQAAALgMAIIgVAJIgfAPQAEAFAHACQAHADAGAAQAOAAAIgFQAJgFAFAAQAKAAgBAKQAAALgQAHQgNAGgQAAQgVAAgPgLgAgMgWQgGAGgEAMIAVgJQAMgGAIgFQgHgEgKAAQgHAAgHAGg");
	this.shape_42.setTransform(49.9,172.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgmAyQgDgDAAgGIAAg+IABgJIAAgJQAAgFAEgEQACgDAHAAQAKAAADALQAPgNAVAAQATAAAAAaIAAAGQgBAPgMAAQgMAAAAgMIgBgKQgUADgJATIAAAvQgBAGgDAEQgEADgGAAQgGAAgEgEg");
	this.shape_43.setTransform(39.9,172.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAWBHQgCgIgCgOIgCgXIABgHIAAgIIAAgIQgBgDgFAAQgKAAgHAIQgFAFgIAOQAAAjgDAHQgEAIgIAAQgFAAgFgEQgEgDAAgGIABgFIABgaIAAg/IABgEIAAgPIgBgJIgBgJQAAgGAEgDQAEgEAGAAQAKAAADALQACAGAAAMIgBATIAAATQAHgHAIgDQAGgEAJAAQARAAAHAKQAGAHABAMIABAZIACATIADATIABADQAAAGgEADQgEAEgGAAQgKAAgDgKg");
	this.shape_44.setTransform(29.3,169.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgIBHQgFgEAAgGIABgEIAAgEIAAgOIgBgOQAAgNgCgUIgDgjIgFAAQgWAAgMgEQgLgCAAgKQAAgFADgEQAEgFAHAAIAQACIAPABIASAAIAQAAIAWABIAWABQAGAAAEAEQAEADAAAGQAAAFgEAEQgEAEgGAAIgXgBIgYgBIACAoQADAXAAAPIAAAJIABAKQAAAIgDAGQgEAHgHAAQgEAAgEgDg");
	this.shape_45.setTransform(16.5,169.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgMAaQAAgGAEgDQAEgEAEAAQAPAAAAAXQAAAFgEAEQgEAEgGAAQgNAAAAgXgAgJgTQgEgEAAgFIAAgDIgBgEQAAgFAEgEQAFgEAFAAQANAAAAAUQAAAFgEAEQgEAEgFAAQgFAAgEgEg");
	this.shape_46.setTransform(94.6,141.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgbAyQgOgFAAgLQAAgKAMABQAEAAAIADQAJACAFAAQASAAAAgIQAAgFgOgGIgYgLQgNgJAAgOQgBgUAVgHQAMgDAXAAQAKAAAFACQAGAEAAAIQAAASgJAAQgKAAgCgIIgIgBQgWAAABAGQgBAEAMAHQAUAJAHAEQAOAJAAANQAAAQgQAJQgMAIgQAAQgNAAgMgFg");
	this.shape_47.setTransform(85.2,142.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AggAqQgQgNAAgWQgBgXANgRQAPgTAXAAQAQAAAMAGQAOAHAAAPQAAALgMAIIgVAJIggAPQAFAFAHACQAGADAHAAQAOAAAIgFQAJgFAFAAQAKAAAAAKQgBALgQAHQgNAGgQAAQgVAAgPgLgAgMgWQgGAGgEAMIAVgJQAMgGAIgFQgHgEgKAAQgHAAgHAGg");
	this.shape_48.setTransform(74.7,142.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgIBMQgEgDAAgGIAAiFQAAgGAEgEQAEgDAEAAQAFAAAEAEQAEADAAAGIAAB/QAAATgNAAQgEAAgEgEg");
	this.shape_49.setTransform(66.4,139.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgoBOQgDgDAAgGIAAglIAAglQAAgUgBgQIgCgTQAAgIAEgGQAEgGAHAAQAFAAAEADQAEAEAAAFIAAABQAGgEAHgBQAFgCAHAAQAWAAAKATQAIAPAAAWQAAAUgMAOQgNAPgWAAQgHAAgJgCIAAAoQAAAGgEADQgEADgFAAQgGAAgFgDgAgEgtQgHADgGAGIABAmQAJACAHAAQAKAAAFgEQAFgHAAgLQAAgNgCgFQgCgMgJAAQgHAAgEADg");
	this.shape_50.setTransform(58.5,144.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgHA4QgEgEAAgFQAAgLgCgWQgDgUAAgLIgBgKQgLAHgMAPIgBACIgBAdIAAAIIAAAGQAAAGgEADQgEADgGAAQgIAAgDgIQgCgFAAgKIAAgjIgBgOIAAgOQAAgJADgHQAEgJAHAAQAFAAAFAFQAEAEAAAFIgBAIQAPgRANAAQAPAAAFAMQAGgGAHgCQAHgDAJAAQATAAAHATQABAEADAXQADANAEAlQAAAGgEAEQgEADgGAAQgLAAgCgLIgDgcIgEgbQgCgRgEAAQgDAAgIAEIgLAIQAAALACATQADAVAAALQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_51.setTransform(45.4,142.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAXAsQgJAFgHACQgHACgDAAQgXAAgMgMQgMgNABgZQAAgWARgQQARgRAWAAQAJAAANAFQAOAGAAAJQAAADgCADIgBAJIAAAOQAAARACAIIAFAKIADAJQAAAFgDAEQgFADgFAAQgFAAgJgJgAgMgSQgLAKABAMQAAANAEAGQAFAHAJAAQAEAAAGgCQAFgCAFgEQgDgWAAgLIAAgHIACgJIgDgBIgDgBQgLAAgKALg");
	this.shape_52.setTransform(32,142.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAbAzIgbgjIgZAXIgIAIQgEAEgFAAQgGAAgEgEQgEgDAAgFQAAgGAIgHIANgLIATgRIgLgPQgHgJgGgFQgFgEAAgFQAAgFAEgEQAEgEAFAAQAHAAAMAOIAOAUIAQgOQALgJAEgHQAFgGAGAAQAFAAAEAEQAFAEAAAFQAAAGgLAKIgOANIgPANIAeAjQADAEAAAEQAAAFgEAEQgEAEgFAAQgGAAgEgFg");
	this.shape_53.setTransform(20.5,142.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgsBKQgLgJAAggIACglIACgnIgBgLIgBgKQAAgOAOAAQAEAAADACIAWgFIARgBQAZAAAPAGQAJAEAAAIQAAAGgEADQgEAFgFAAIgFgBQgPgEgQAAIgOABIgRAEIgBAmIAkgDIAYgDQAGABADAEQAEADABAGQAAAJgNACIgXACIgoAEIAAAUQgBATADADQABABALAAIARAAIASAAIAFgBIAGAAQAGAAAEADQAEADAAAGQABAMgMACQgKABgcABQghAAgJgJg");
	this.shape_54.setTransform(8.7,140);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AggAqQgQgNAAgWQAAgXAMgRQAPgTAWAAQASAAALAGQAOAHAAAPQABALgMAIIgXAJIgeAPQAEAFAHACQAHADAGAAQAOAAAIgFQAIgFAGAAQAJAAABAKQAAALgRAHQgOAGgPAAQgVAAgPgLgAgMgWQgGAGgEAMIAWgJQALgGAHgFQgGgEgLAAQgGAAgHAGg");
	this.shape_55.setTransform(220.7,202.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AggAqQgRgNAAgWQABgXANgRQAOgTAWAAQARAAAMAGQAPAHAAAPQgBALgMAIIgWAJIgfAPQAGAFAGACQAHADAGAAQANAAAKgFQAHgFAFAAQAKAAAAAKQAAALgQAHQgNAGgQAAQgVAAgPgLgAgMgWQgHAGgEAMIAXgJQALgGAIgFQgHgEgLAAQgHAAgGAGg");
	this.shape_56.setTransform(209.5,202.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgbBLQgEgEgBgFQABgJAUgtQgLgTgXgqIgFgHQgCgFgBgDQABgGAEgEQAEgDAGAAQAGAAAEAEQAOATAQAlIANgcIANgZQAEgIAIABQAFAAAFADQADAEAAAFIgBAGIgiBEQgMAZgGARIgFASQgDAJgKAAQgFAAgEgDg");
	this.shape_57.setTransform(179.7,204.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgmAyQgCgDAAgGIAAg+IAAgJIAAgJQAAgFADgEQADgDAGAAQAMAAACALQAPgNAVAAQAUAAgBAaIAAAGQAAAPgNAAQgMAAgBgMIAAgKQgUADgJATIAAAvQAAAGgEAEQgEADgGAAQgGAAgEgEg");
	this.shape_58.setTransform(169.6,202.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgIBDQgEgDAAgFIABgLIAAgKIgCgxIgSgBQgMgCgBgMQABgFADgEQAEgDAGgBIARACIgBgLIgBgJQABgGAEgDQADgEAGAAQANAAAAAYIAAAIIAJgBQAMABADABQAJACgBAKQAAAFgDAEQgEAEgGAAIgFAAIgFAAIgJAAIACAyIAAAEIAAAHQAAAWgOAAQgDAAgFgEg");
	this.shape_59.setTransform(160,200.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AggAqQgQgNgBgWQAAgXAOgRQAOgTAWAAQARAAAMAGQAOAHABAPQAAALgMAIIgXAJIgeAPQAFAFAGACQAGADAHAAQANAAAJgFQAJgFAEAAQALAAAAAKQgBALgQAHQgOAGgPAAQgVAAgPgLgAgMgWQgGAGgFAMIAXgJQALgGAHgFQgGgEgLAAQgGAAgHAGg");
	this.shape_60.setTransform(139.1,202.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AggAqQgRgNAAgWQABgXANgRQAOgTAXAAQAQAAAMAGQAPAHAAAPQAAALgNAIIgVAJIggAPQAGAFAGACQAGADAHAAQAOAAAJgFQAHgFAFAAQALAAgBAKQAAALgQAHQgNAGgQAAQgVAAgPgLgAgMgWQgHAGgEAMIAWgJQAMgGAIgFQgHgEgKAAQgIAAgGAGg");
	this.shape_61.setTransform(332.7,172.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgIBEQgEgEAAgFIABgLIAAgLIgCgwIgTgBQgLgCgBgMQABgFADgEQAEgDAGAAIAQABIAAgKIgBgKQAAgFAFgEQADgEAGAAQAMAAAAAZIAAAIIAKgBQAMgBADACQAJADgBAJQAAAGgDADQgEAEgGAAIgFAAIgFAAIgJABIACAxIAAAFIAAAGQAAAWgOAAQgEAAgEgDg");
	this.shape_62.setTransform(311.1,170.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgHBEQgFgEAAgFIAAgLIABgLIgCgwIgSgBQgMgCAAgMQAAgFADgEQAEgDAFAAIASABIgBgKIAAgKQAAgFADgEQAEgEAGAAQANAAAAAZIAAAIIAJgBQALgBAFACQAHADABAJQgBAGgEADQgDAEgGAAIgFAAIgFAAIgJABIABAxIABAFIAAAGQAAAWgOAAQgDAAgEgDg");
	this.shape_63.setTransform(263.8,170.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgbAzQgOgGAAgLQAAgJAMAAQAEAAAIACQAJADAFAAQASAAAAgIQAAgFgOgGIgYgLQgOgKAAgNQAAgUAVgHQANgDAWAAQAKgBAEADQAHADAAAKQAAARgJAAQgKAAgCgIIgIgBQgWAAABAGQgBAFAMAGQAUAJAHAEQAOAJAAANQAAARgQAIQgMAIgQgBQgNAAgMgDg");
	this.shape_64.setTransform(254,172.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgdArQgQgNAAgVQAAgSAPgUQAPgYATAAQAKAAAOAFQAQAHAAAIQAAAFgEAEQgDAEgGAAQgEAAgFgFQgHgEgLAAQgGAAgJAPQgIAOAAAJQAAAJAHAHQAIAFAJAAQAHAAAJgFQAJgFADAAQAFAAAEAEQAEAEAAAFQgBAHgQAIQgPAGgJAAQgTABgPgMg");
	this.shape_65.setTransform(233.5,172.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AggAqQgQgNAAgWQgBgXANgRQAPgTAXAAQAQAAAMAGQAOAHAAAPQAAALgMAIIgVAJIggAPQAFAFAHACQAGADAHAAQAOAAAIgFQAJgFAFAAQAKAAgBAKQAAALgQAHQgNAGgQAAQgVAAgPgLgAgMgWQgGAGgEAMIAVgJQAMgGAIgFQgHgEgKAAQgHAAgHAGg");
	this.shape_66.setTransform(214.2,172.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgHBEQgFgEAAgFIAAgLIABgLIgCgwIgTgBQgMgCABgMQAAgFADgEQAEgDAFAAIARABIAAgKIgBgKQAAgFAFgEQAEgEAFAAQAMAAAAAZIAAAIIAKgBQAMgBADACQAJADAAAJQAAAGgFADQgDAEgGAAIgFAAIgFAAIgJABIABAxIABAFIAAAGQAAAWgOAAQgEAAgDgDg");
	this.shape_67.setTransform(192.5,170.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FF0000").s().p("AgbAzQgOgGAAgLQAAgJAMAAQAEAAAIACQAJADAFAAQASAAgBgIQAAgFgNgGIgYgLQgOgKAAgNQAAgUAVgHQANgDAXAAQAJgBAEADQAHADAAAKQAAARgJAAQgKAAgCgIIgIgBQgWAAAAAGQABAFAMAGQATAJAHAEQAOAJAAANQAAARgQAIQgMAIgRgBQgNAAgLgDg");
	this.shape_68.setTransform(174.1,172.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FF0000").s().p("AgLBHQgDgEAAgGIgBgSIgBgSIACgVIABgUQAAgGADgDQAEgEAGAAQAEAAADAEQAFADAAAGIgBAUIgCAVIABASIAAASQAAAGgEAEQgEADgEAAQgFAAgEgDgAgIgwQgEgFAAgGQAAgGAEgEQAFgEAEAAQAGAAAFAEQAFAEgBAGQABAGgFAFQgFAEgGAAQgEAAgFgEg");
	this.shape_69.setTransform(166.8,170.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgaAzQgPgGAAgLQAAgJALAAQAFAAAJACQAIADAFAAQARAAAAgIQAAgFgNgGIgYgLQgNgKAAgNQAAgUAUgHQAMgDAXAAQAKgBAFADQAGADAAAKQAAARgKAAQgJAAgCgIIgIgBQgWAAAAAGQAAAFANAGQATAJAHAEQAOAJAAANQAAARgPAIQgNAIgRgBQgNAAgKgDg");
	this.shape_70.setTransform(150.1,172.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AglAyQgEgDAAgGIAAg+IABgJIAAgJQAAgFAEgEQACgDAHAAQAKAAACALQAQgNAVAAQATAAABAaIAAAGQgCAPgMAAQgMAAAAgMIgBgKQgUADgKATIAAAvQAAAGgDAEQgEADgGAAQgGAAgDgEg");
	this.shape_71.setTransform(140.8,172.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AAXAsQgJAFgHACQgGACgEAAQgXAAgMgMQgLgNgBgZQAAgWASgQQARgRAXAAQAIAAANAFQAPAGAAAJQAAADgDADIgBAJIgBAOQABARACAIIAEAKIAEAJQAAAFgEAEQgDADgGAAQgEAAgKgJgAgNgSQgKAKAAAMQABANAEAGQAFAHAJAAQAFAAAFgCQAFgCAFgEQgDgWAAgLIAAgHIACgJIgEgBIgCgBQgLAAgLALg");
	this.shape_72.setTransform(130.3,172.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AAbBJQgHAEgIABIgMABQgWAAgPgNQgOgOAAgXQAAgaAOgOQAPgRAXAAQAHAAAFACQAGABAEAEQABgiADgMQABgLALAAQAGgBAEAEQADAEAAAFIgCArQgDAaABAPQgBAiADAMIAAADQAAAFgEAEQgDADgGAAQgHABgDgHgAgTAEQgHAIAAARQAAALAHAHQAJAIAKAAQAFAAAFgDIAJgFIACgEIAAgkQgCgFgGgCQgFgDgHAAQgNAAgHAHg");
	this.shape_73.setTransform(97.3,169.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgcBLQgDgDAAgGQAAgJAUgtQgLgTgXgpIgFgIQgDgFAAgDQAAgGAFgEQAEgDAGAAQAGAAADAEQAPATAQAlIANgcIANgaQAEgGAIAAQAFgBAFAEQADAEAAAFIgBAHIgiBDQgMAagGAQIgFASQgDAKgKgBQgFABgFgEg");
	this.shape_74.setTransform(77.3,175);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AglAyQgDgDAAgGIAAg+IAAgJIAAgJQAAgFAEgEQADgDAFAAQAMAAABALQAQgNAVAAQAUAAAAAaIAAAGQgCAPgNAAQgMAAAAgMIAAgKQgUADgKATIAAAvQAAAGgDAEQgEADgGAAQgGAAgDgEg");
	this.shape_75.setTransform(57.8,172.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgxBOQgDgEAAgGIAAhuIAAgLIAAgMQAAgFAEgEQAEgFAGAAQADABADABIAVgDIAPAAQALAAARAEQAVAFAAAJQAAAFgEAEQgEAEgFAAIgFgBQgNgEgSAAIgMABIgRACIAAAhQAPgFAKAAQAQAAANADQANABAAALQAAAGgEACQgEAEgGAAIgPgBIgNgBQgHAAgSAFIAAA9QAAAGgEAEQgFADgFAAQgGAAgEgDg");
	this.shape_76.setTransform(36.5,170.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgIBMQgEgDAAgGIAAiFQAAgGAEgEQAEgDAEAAQAFAAAEAEQAEADAAAGIAAB/QAAATgNAAQgEAAgEgEg");
	this.shape_77.setTransform(66.4,139.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgKAJQgFgEABgFQgBgDAFgFQAFgEAFAAQAHAAAEAEQAFAEgBAEQABAFgFAEQgFAEgGAAQgFAAgFgEg");
	this.shape_78.setTransform(322.6,206.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgdArQgQgNAAgWQAAgRAPgUQAPgZATAAQAKABAOAFQAQAHAAAIQAAAGgEADQgDAEgGAAQgEAAgFgFQgHgEgLAAQgGAAgJAPQgIAOAAAIQAAALAHAGQAIAFAJAAQAHAAAJgFQAJgFADAAQAFAAAEAEQAEAEAAAFQgBAHgQAIQgPAHgJgBQgTAAgPgLg");
	this.shape_79.setTransform(301.5,202.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AggAqQgQgNAAgWQAAgXAMgRQAPgTAWAAQASAAALAGQAOAHAAAPQABALgMAIIgXAJIgeAPQAEAFAHACQAHADAGAAQAOAAAIgFQAIgFAGAAQAJAAABAKQAAALgRAHQgOAGgPAAQgVAAgPgLgAgMgWQgGAGgEAMIAVgJQAMgGAHgFQgGgEgLAAQgGAAgHAGg");
	this.shape_80.setTransform(279.7,202.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AggAqQgRgNAAgWQAAgXANgRQAPgTAXAAQARAAALAGQAPAHAAAPQAAALgNAIIgVAJIggAPQAFAFAHACQAGADAHAAQAOAAAJgFQAIgFAFAAQAKAAgBAKQAAALgQAHQgNAGgQAAQgVAAgPgLgAgMgWQgHAGgDAMIAVgJQAMgGAIgFQgHgEgKAAQgIAAgGAGg");
	this.shape_81.setTransform(248,202.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgIBDQgEgDAAgFIABgLIAAgKIgCgxIgTgBQgMgCAAgMQABgFADgEQAEgDAFgBIARACIAAgLIgBgJQAAgGAFgDQAEgEAFAAQAMAAAAAYIAAAIIAKgBQAMABADABQAJACgBAKQAAAFgDAEQgEAEgGAAIgFAAIgFAAIgJAAIACAyIAAAEIAAAHQAAAWgOAAQgEAAgEgEg");
	this.shape_82.setTransform(226.4,200.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AATAsIgCgUIgBgUIAAgHIAAgIIAAgEIABgEQAAgJgFAAQgIAAgGALQgIALgFAOIgBAJIAAAJIgBAJIAAAIQAAAGgEADQgEAEgGAAQgFAAgFgEQgDgDAAgGIgBgIIAAgJIABgaIABgZIAAgJIgBgJQABgFADgEQAFgDAGAAQAMAAABAPIAAABQAPgOANAAQATAAAGAPQAGAKAAAVIAAAHIAAAEQAAAIABAMQACAMAAAHQAAAGgDAEQgFADgFAAQgMAAgCgMg");
	this.shape_83.setTransform(207.9,202.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgHBDQgFgDAAgFIAAgLIABgKIgCgxIgTgBQgLgCAAgMQgBgFAEgEQAEgDAFgBIASACIgBgLIAAgJQAAgGADgDQAEgEAGAAQAMAAAAAYIAAAIIAKgBQALABAFABQAHACABAKQAAAFgFAEQgDAEgGAAIgFAAIgFAAIgJAAIABAyIABAEIAAAHQAAAWgOAAQgDAAgEgEg");
	this.shape_84.setTransform(178.8,200.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AAWBHQgCgIgCgOIgCgXIABgHIAAgIIAAgIQgBgDgFAAQgKAAgHAIQgFAFgIAOQAAAjgDAHQgEAIgIAAQgFAAgFgEQgEgDAAgGIABgFIABgaIAAg/IABgEIAAgPIgBgJIgBgJQAAgGAEgDQAEgEAGAAQAKAAADALQACAGAAAMIgBATIAAATQAHgHAIgDQAGgEAJAAQARAAAHAKQAGAHABAMIABAZIACATIADATIABADQAAAGgEADQgEAEgGAAQgKAAgDgKg");
	this.shape_85.setTransform(158.1,199.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AggAqQgQgNgBgWQAAgXAOgRQAOgTAWAAQARAAAMAGQAOAHAAAPQABALgMAIIgXAJIgeAPQAFAFAGACQAGADAHAAQANAAAJgFQAJgFAEAAQALAAAAAKQgBALgQAHQgOAGgPAAQgVAAgPgLgAgMgWQgGAGgFAMIAXgJQALgGAHgFQgGgEgLAAQgGAAgHAGg");
	this.shape_86.setTransform(137.7,202.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AAWBHQgCgIgCgOIgCgXIABgHIAAgIIAAgIQgBgDgFAAQgKAAgHAIQgFAFgIAOQAAAjgDAHQgEAIgIAAQgFAAgFgEQgEgDAAgGIABgFIABgaIAAg/IABgEIAAgPIgBgJIgBgJQAAgGAEgDQAEgEAGAAQAKAAADALQACAGAAAMIgBATIAAATQAHgHAIgDQAGgEAJAAQARAAAHAKQAGAHABAMIABAZIACATIADATIABADQAAAGgEADQgEAEgGAAQgKAAgDgKg");
	this.shape_87.setTransform(126.7,199.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgIBDQgEgDAAgFIABgLIAAgKIgCgxIgSgBQgNgCAAgMQAAgFAEgEQAEgDAGgBIARACIgBgLIAAgJQAAgGADgDQAEgEAGAAQANAAAAAYIAAAIIAJgBQALABAFABQAHACAAAKQAAAFgDAEQgEAEgGAAIgFAAIgFAAIgJAAIABAyIABAEIAAAHQAAAWgOAAQgDAAgFgEg");
	this.shape_88.setTransform(116.1,200.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AAUAsIgDgUIgCgUIAAgHIABgIIAAgEIAAgEQAAgJgDAAQgJAAgGALQgIALgEAOIgBAJIgBAJIgBAJIAAAIQAAAGgEADQgEAEgFAAQgHAAgDgEQgEgDAAgGIgBgIIgBgJIACgaIACgZIgBgJIgBgJQABgFAEgEQAEgDAGAAQAMAAABAPIAAABQAOgOAOAAQATAAAHAPQAEAKAAAVIAAAHIAAAEQAAAIACAMQADAMAAAHQAAAGgFAEQgEADgFAAQgMAAgBgMg");
	this.shape_89.setTransform(97.6,202.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgLBHQgDgEAAgGIgBgSIAAgSIABgVIAAgUQAAgGAEgDQAEgEAGAAQAEAAAEAEQAEADAAAGIgBAUIgBAVIAAASIAAASQAAAGgEAEQgDADgFAAQgFAAgEgDgAgHgwQgFgFAAgGQAAgGAFgEQAEgEAEAAQAGAAAFAEQAFAEAAAGQAAAGgFAFQgFAEgGAAQgEAAgEgEg");
	this.shape_90.setTransform(89.7,200);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FF0000").s().p("AgIBDQgEgDAAgFIABgLIAAgKIgCgxIgTgBQgMgCAAgMQABgFADgEQAEgDAFgBIARACIAAgLIgBgJQAAgGAFgDQAEgEAFAAQAMAAAAAYIAAAIIAKgBQAMABADABQAJACgBAKQAAAFgDAEQgEAEgGAAIgFAAIgFAAIgJAAIACAyIAAAEIAAAHQAAAWgOAAQgEAAgEgEg");
	this.shape_91.setTransform(73.4,200.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FF0000").s().p("AgRBSQgEgEAAgFIAAgCQACgOAAgNIAAgvIgGABIgGABQgGAAgEgEQgEgDAAgGQAAgJAKgDIARgCIABgLQADgVAJgLQAJgNAYAAQASAAAAAMQAAANgRAAQgMAAgFAIQgEAHgCANIAAACIATgBQASAAAAANQAAANgTgBIgTABIAAAYIAAAbQAAARgCALQgCAKgJAAQgFAAgEgDg");
	this.shape_92.setTransform(63.4,200.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FF0000").s().p("AggAqQgQgNAAgWQgBgXANgRQAPgTAXAAQARAAALAGQAPAHAAAPQAAALgNAIIgVAJIggAPQAFAFAHACQAGADAHAAQAOAAAJgFQAIgFAFAAQAKAAgBAKQAAALgQAHQgNAGgQAAQgVAAgPgLgAgMgWQgHAGgDAMIAVgJQAMgGAIgFQgHgEgKAAQgIAAgGAGg");
	this.shape_93.setTransform(52.7,202.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FF0000").s().p("AgIBMQgEgDAAgGIAAiFQAAgGAEgEQAEgDAEAAQAFAAAEAEQAEADAAAGIAAB/QAAATgNAAQgEAAgEgEg");
	this.shape_94.setTransform(44.4,199.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FF0000").s().p("AgaAzQgPgGAAgLQAAgJAMAAQAEAAAIACQAJADAFAAQARAAABgIQAAgFgOgGIgYgLQgNgKAAgNQgBgUAVgHQAMgDAXAAQAKgBAFADQAGADAAAKQAAARgKAAQgJAAgCgIIgIgBQgVAAAAAGQAAAFALAGQAUAJAHAEQAOAJAAANQAAARgQAIQgMAIgQgBQgNAAgLgDg");
	this.shape_95.setTransform(355.1,172.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FF0000").s().p("AAXAsQgJAFgHACQgHACgDAAQgXAAgMgMQgMgNAAgZQAAgWASgQQARgRAXAAQAJAAAMAFQAPAGAAAJQgBADgCADIgBAJIgBAOQABARACAIIAFAKIADAJQAAAFgDAEQgEADgGAAQgFAAgJgJgAgNgSQgKAKAAAMQABANAEAGQAFAHAJAAQAEAAAGgCQAFgCAFgEQgDgWAAgLIAAgHIACgJIgEgBIgCgBQgLAAgLALg");
	this.shape_96.setTransform(344.9,172.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FF0000").s().p("AADAeQgDgJgBgWIgDAEIgPAlQgBAEgDADQgFAGgHABQgFAAgFgJQgFgIgDgNQgEgNgGgmIgBgOQAAgFADgEQAFgDAFAAQALAAADAKIACAOIABANIAEAXIAQgvQAFgNAJAAQALAAACAOIAGAaIAFAaIAPg6QACgIALAAQAFAAAEADQAFAEgBAFIAAADIgUBEQgEAJgGAJQgFAGgIAAQgMAAgHgYg");
	this.shape_97.setTransform(332.5,172.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AguAyQgLgVAAgfQAAgcAOgVQARgZAbAAQAdAAAPAWQANATAAAbQAAAqgPAVQgPAXgcAAQggAAgOgcgAgWgjQgIANAAATQAAAVAEANQAIAVASAAQAOAAAJgPQAHgOABgbQgBgXgGgMQgIgMgPAAQgNAAgKAQg");
	this.shape_98.setTransform(310.7,169.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AguAyQgLgVAAgfQAAgcAOgVQARgZAcAAQAbAAAQAWQANATAAAbQAAAqgPAVQgOAXgdAAQggAAgOgcgAgWgjQgIANAAATQAAAVAFANQAGAVATAAQAPAAAHgPQAJgOgBgbQABgXgIgMQgHgMgOAAQgOAAgKAQg");
	this.shape_99.setTransform(298.5,169.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgcBGQgPgIgFgNIAAgFQAAgFAEgEQAEgDAGAAQAGAAAEAFIAGAJQAHAFALAAQAIAAAHgGQAHgFAAgIQAAgYgfgEQgOgBAAgJQAAgIALgDIATgFQAGgCAEgEQADgDABgEQAAgPgWAAQgHAAgJAGQgKAGgDAAQgFAAgEgEQgEgEAAgFQAAgJAQgIQAPgHAJAAQAVAAANAJQAPALAAATQAAALgFAIQgDAHgJAFQAUAJAAAZQAAAUgPANQgPAOgTAAQgPAAgNgGg");
	this.shape_100.setTransform(286.3,170);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgIBiQgCgDAAgDIAAgWIgHAAQgUAAgLgFQgKgFAAgHQAAgOAQAAQADAAAKADIANADIAGgBIAAgrQgRgBgNgEQgPgIAAgOQAAgQAOgOQAMgMATgGIAAgQQAAgLAKAAQAJAAAAALIAAANQALABAMAEQAQAFAAAHQAAAGgDADQgEAEgGAAIgNgBIgNgDIAAAeIACABQAVABANALQAOAJAAAVQAAATgPAMQgNAKgWAEIAAAZQAAAKgKAAQgFAAgCgEgAAJAnQAVgHAAgLQAAgRgVgCgAgagfQAAAHAQACIAAgYQgQAGAAAJg");
	this.shape_101.setTransform(273.3,170.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgIBEQgEgEAAgFIABgLIAAgLIgCgwIgSgBQgMgCgBgMQABgFADgEQAEgDAGAAIARABIgBgKIgBgKQABgFAEgEQADgEAGAAQANAAAAAZIAAAIIAJgBQAMgBADACQAJADgBAJQAAAGgDADQgEAEgGAAIgFAAIgFAAIgJABIACAxIAAAFIAAAGQAAAWgOAAQgDAAgFgDg");
	this.shape_102.setTransform(253.1,170.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AAXAsQgJAFgHACQgGACgEAAQgXAAgLgMQgMgNgBgZQAAgWASgQQARgRAXAAQAIAAANAFQAPAGAAAJQAAADgCADIgCAJIgBAOQAAARADAIIAEAKIAFAJQgBAFgEAEQgDADgGAAQgFAAgJgJgAgNgSQgJAKgBAMQABANAEAGQAFAHAJAAQAFAAAFgCQAFgCAFgEQgDgWAAgLIAAgHIACgJIgEgBIgCgBQgLAAgLALg");
	this.shape_103.setTransform(242.9,172.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AAWBHQgCgIgCgOIgCgXIABgHIAAgIIAAgIQgBgDgFAAQgKAAgHAIQgFAFgIAOQAAAjgDAHQgEAIgIAAQgFAAgFgEQgEgDAAgGIABgFIABgaIAAg/IABgEIAAgPIgBgJIgBgJQAAgGAEgDQAEgEAGAAQAKAAADALQACAGAAAMIgBATIAAATQAHgHAIgDQAGgEAJAAQARAAAHAKQAGAHABAMIABAZIACATIADATIABADQAAAGgEADQgEAEgGAAQgKAAgDgKg");
	this.shape_104.setTransform(231.7,169.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AAaBJQgGAEgHABIgNABQgWAAgOgNQgPgOAAgXQAAgaAPgOQAOgRAWAAQAHAAAHACQAFABAFAEQABgiABgMQACgLALAAQAGgBAEAEQADAEAAAFIgCArQgDAaAAAPQAAAiADAMIAAADQAAAFgEAEQgDADgGAAQgHABgEgHgAgTAEQgHAIAAARQAAALAIAHQAHAIALAAQAGAAADgDIAJgFIAEgEIAAgkQgDgFgGgCQgFgDgHAAQgMAAgIAHg");
	this.shape_105.setTransform(201.7,169.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AggAqQgQgNAAgWQgBgXANgRQAPgTAXAAQAQAAAMAGQAOAHAAAPQAAALgLAIIgWAJIgfAPQAEAFAHACQAHADAGAAQAOAAAIgFQAIgFAGAAQAKAAAAAKQAAALgRAHQgOAGgPAAQgVAAgPgLgAgMgWQgGAGgEAMIAVgJQAMgGAHgFQgGgEgKAAQgHAAgHAGg");
	this.shape_106.setTransform(190.2,172.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AglAyQgDgDgBgGIAAg+IABgJIAAgJQAAgFAEgEQACgDAHAAQALAAABALQAQgNAVAAQAUAAAAAaIAAAGQgBAPgOAAQgMAAABgMIgBgKQgUADgKATIAAAvQABAGgEAEQgEADgGAAQgGAAgDgEg");
	this.shape_107.setTransform(164.8,172.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgoBOQgDgEAAgFIAAglIAAglQAAgUgBgQIgCgTQAAgIAEgGQAEgGAHAAQAFgBAEAEQAEAEAAAFIAAACQAHgEAGgCQAFgCAHAAQAWAAAKATQAIAPAAAWQAAAUgMAOQgOAPgVAAQgHAAgJgCIAAAoQAAAFgEAEQgEAEgGgBQgFABgFgEgAgEgtQgGADgHAGIABAmQAJADAHAAQAKgBAFgEQAFgHAAgLQAAgNgBgFQgDgMgJAAQgHAAgEADg");
	this.shape_108.setTransform(154.6,174.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgmAyQgCgDAAgGIAAg+IAAgJIAAgJQAAgFADgEQAEgDAFAAQAMAAACALQAPgNAVAAQATAAAAAaIAAAGQAAAPgNAAQgNAAAAgMIAAgKQgUADgJATIAAAvQgBAGgDAEQgEADgGAAQgGAAgEgEg");
	this.shape_109.setTransform(144.5,172.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AATAwQgMAEgMAAQgOAAgJgGQgLgGgCgNQgEgYAAgRQAAgNADgQQACgLAMAAQAFAAAEADQAEAEAAAFIgBAOIgCANIABAWQABALACAGIAFACIAEABQAJAAANgEIAAgRIAAgOQAAgUACgPQABgLAMAAQAGAAAEADQAEAEAAAFIgCAjIAAASIAAATIAAAGIABAGQAAAGgEAEQgEADgGAAQgIAAgEgHg");
	this.shape_110.setTransform(134.2,172.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AggAqQgQgNAAgWQAAgXAMgRQAPgTAWAAQASAAALAGQAOAHAAAPQABALgMAIIgXAJIgeAPQAFAFAGACQAGADAHAAQANAAAJgFQAJgFAFAAQAJAAABAKQAAALgRAHQgOAGgPAAQgVAAgPgLgAgMgWQgGAGgFAMIAXgJQALgGAHgFQgGgEgLAAQgGAAgHAGg");
	this.shape_111.setTransform(105,172.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AADAeQgDgJgCgWIgCAEIgPAlQgBAEgDADQgEAGgJABQgEAAgFgJQgFgIgEgNQgDgNgGgmIgCgOQAAgFAFgEQADgDAHAAQAKAAACAKIACAOIACANIAEAXIARgvQAEgNAJAAQALAAACAOIAGAaIAFAaIAPg6QACgIAKAAQAGAAAEADQAEAEABAFIgBADIgVBEQgCAJgIAJQgEAGgIAAQgMAAgHgYg");
	this.shape_112.setTransform(72,172.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgbBLQgFgDAAgGQAAgJAVgtQgLgTgXgpIgFgIQgDgFABgDQAAgGAEgEQAEgDAFAAQAHAAAEAEQANATARAlIANgcIANgaQAFgGAGAAQAGgBAEAEQAFAEAAAFIgCAHIgiBDQgMAagGAQIgFASQgEAKgIgBQgGABgEgEg");
	this.shape_113.setTransform(50.8,175);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AAWBHQgCgIgCgOIgCgXIABgHIAAgIIAAgIQgBgDgFAAQgKAAgHAIQgFAFgIAOQAAAjgDAHQgEAIgIAAQgFAAgFgEQgEgDAAgGIABgFIABgaIAAg/IABgEIAAgPIgBgJIgBgJQAAgGAEgDQAEgEAGAAQAKAAADALQACAGAAAMIgBATIAAATQAHgHAIgDQAGgEAJAAQARAAAHAKQAGAHABAMIABAZIACATIADATIABADQAAAGgEADQgEAEgGAAQgKAAgDgKg");
	this.shape_114.setTransform(28.5,169.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgKAJQgFgEABgFQgBgDAFgFQAFgEAFAAQAHAAAEAEQAEAEAAAEQAAAFgEAEQgFAEgGAAQgFAAgFgEg");
	this.shape_115.setTransform(240.2,206.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgIBMQgEgDAAgGIAAiFQAAgGAEgEQAEgDAEAAQAFAAAFAEQADADAAAGIAAB/QAAATgNAAQgFAAgDgEg");
	this.shape_116.setTransform(221.8,199.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AAXAsQgJAFgHACQgHACgCAAQgYAAgMgMQgMgNABgZQAAgWARgQQARgRAWAAQAJAAANAFQAOAGAAAJQAAADgCADIgBAJIAAAOQgBARADAIIAFAKIADAJQAAAFgDAEQgEADgGAAQgFAAgJgJgAgMgSQgLAKABAMQgBANAFAGQAFAHAKAAQADAAAGgCQAFgCAFgEQgDgWAAgLIAAgHIACgJIgDgBIgEgBQgLAAgJALg");
	this.shape_117.setTransform(213.7,202.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AADAeQgDgJgCgWIgCAEIgPAlQgBAEgDADQgEAGgJABQgEAAgFgJQgGgIgDgNQgDgNgGgmIgCgOQABgFADgEQAFgDAGAAQAKAAACAKIACAOIACANIAEAXIARgvQAEgNAJAAQALAAADAOIAFAaIAFAaIAPg6QACgIAKAAQAGAAAEADQAFAEAAAFIgBADIgVBEQgCAJgIAJQgEAGgIAAQgMAAgHgYg");
	this.shape_118.setTransform(189.8,202.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AAXAsQgJAFgHACQgHACgCAAQgYAAgMgMQgMgNABgZQAAgWARgQQARgRAWAAQAJAAANAFQAOAGAAAJQAAADgCADIgBAJIAAAOQgBARADAIIAFAKIADAJQAAAFgDAEQgEADgGAAQgFAAgJgJgAgMgSQgLAKABAMQgBANAFAGQAFAHAKAAQADAAAGgCQAFgCAFgEQgDgWAAgLIAAgHIACgJIgDgBIgEgBQgLAAgJALg");
	this.shape_119.setTransform(168.7,202.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgIBEQgEgEAAgFIABgLIAAgLIgCgwIgSgBQgNgCAAgMQAAgFAEgEQAEgDAGAAIARABIgBgKIAAgKQAAgFAEgEQADgEAGAAQANAAAAAZIAAAIIAJgBQALgBAEACQAIADAAAJQAAAGgDADQgEAEgGAAIgFAAIgFAAIgJABIACAxIAAAFIAAAGQAAAWgOAAQgEAAgEgDg");
	this.shape_120.setTransform(343.2,170.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgLBHQgEgEABgGIgBgSIAAgSIABgVIAAgUQAAgGAEgDQAEgEAGAAQAEAAAEAEQADADAAAGIAAAUIgBAVIAAASIAAASQAAAGgEAEQgDADgFAAQgFAAgEgDgAgHgwQgFgFAAgGQAAgGAFgEQAEgEAEAAQAGAAAFAEQAFAEAAAGQAAAGgFAFQgFAEgGAAQgEAAgEgEg");
	this.shape_121.setTransform(313.8,170.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AggAqQgRgNAAgWQAAgXAOgRQAOgTAWAAQARAAAMAGQAPAHAAAPQgBALgLAIIgXAJIgfAPQAGAFAGACQAHADAGAAQANAAAKgFQAHgFAFAAQAKAAAAAKQAAALgQAHQgOAGgPAAQgVAAgPgLgAgMgWQgGAGgFAMIAXgJQALgGAHgFQgGgEgLAAQgHAAgGAGg");
	this.shape_122.setTransform(305,172.4);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AADAeQgDgJgBgWIgDAEIgPAlQgBAEgDADQgEAGgJABQgEAAgFgJQgGgIgDgNQgDgNgGgmIgCgOQAAgFAEgEQAFgDAGAAQAKAAACAKIACAOIACANIAEAXIARgvQAEgNAJAAQALAAADAOIAFAaIAFAaIAPg6QACgIAKAAQAGAAAEADQAFAEAAAFIgBADIgVBEQgCAJgIAJQgEAGgIAAQgMAAgHgYg");
	this.shape_123.setTransform(292.8,172.6);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AAXAsQgJAFgHACQgHACgCAAQgYAAgLgMQgMgNAAgZQAAgWARgQQARgRAWAAQAKAAAMAFQAOAGAAAJQAAADgCADIgBAJIAAAOQgBARADAIIAFAKIAEAJQAAAFgEAEQgFADgFAAQgEAAgKgJgAgMgSQgKAKAAAMQgBANAFAGQAFAHAKAAQADAAAGgCQAFgCAFgEQgDgWAAgLIABgHIABgJIgDgBIgEgBQgKAAgKALg");
	this.shape_124.setTransform(266.3,172.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgbAzQgOgGAAgLQAAgJALAAQAFAAAIACQAJADAFAAQASAAgBgIQAAgFgNgGIgYgLQgOgKAAgNQAAgUAVgHQANgDAXAAQAJgBAEADQAHADAAAKQAAARgJAAQgKAAgCgIIgIgBQgWAAAAAGQABAFAMAGQATAJAHAEQAOAJAAANQAAARgQAIQgMAIgQgBQgOAAgLgDg");
	this.shape_125.setTransform(245.2,172.4);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AATAsIgCgUIgBgUIAAgHIAAgIIAAgEIABgEQAAgJgFAAQgIAAgGALQgIALgFAOIgBAJIAAAJIgBAJIAAAIQAAAGgEADQgEAEgGAAQgFAAgFgEQgDgDAAgGIgBgIIAAgJIABgaIABgZIAAgJIgBgJQAAgFAEgEQAFgDAGAAQAMAAABAPIAAABQAPgOANAAQATAAAGAPQAGAKAAAVIAAAHIAAAEQAAAIACAMQABAMAAAHQAAAGgDAEQgFADgFAAQgMAAgCgMg");
	this.shape_126.setTransform(225,172.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AATAwQgMAEgMAAQgOAAgJgGQgLgGgCgNQgEgYAAgRQAAgNADgQQACgLAMAAQAFAAAEADQAEAEAAAFIgBAOIgCANIABAWQABALACAGIAFACIAEABQAJAAANgEIAAgRIAAgOQAAgUACgPQABgLAMAAQAGAAAEADQAEAEAAAFIgCAjIAAASIAAATIAAAGIABAGQAAAGgEAEQgEADgGAAQgIAAgEgHg");
	this.shape_127.setTransform(214.4,172.5);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AAUAsIgDgUIgBgUIAAgHIAAgIIAAgEIABgEQAAgJgFAAQgIAAgGALQgIALgFAOIAAAJIgBAJIAAAJIgBAIQAAAGgEADQgEAEgGAAQgGAAgEgEQgDgDAAgGIgBgIIAAgJIABgaIACgZIgBgJIAAgJQAAgFADgEQAFgDAFAAQANAAABAPIAAABQAPgOANAAQASAAAHAPQAFAKABAVIAAAHIAAAEQAAAIACAMQABAMAAAHQAAAGgDAEQgFADgFAAQgMAAgBgMg");
	this.shape_128.setTransform(195.6,172.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AATAsIgCgUIgCgUIAAgHIABgIIAAgEIAAgEQAAgJgDAAQgJAAgGALQgIALgFAOIgBAJIAAAJIgBAJIAAAIQAAAGgEADQgEAEgFAAQgHAAgDgEQgEgDAAgGIgBgIIgBgJIACgaIABgZIAAgJIgBgJQAAgFAFgEQADgDAHAAQAMAAABAPIAAABQAPgOANAAQASAAAHAPQAGAKgBAVIAAAHIAAAEQAAAIACAMQACAMAAAHQAAAGgEAEQgDADgGAAQgMAAgCgMg");
	this.shape_129.setTransform(145.6,172.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FF0000").s().p("AgbAzQgOgGAAgLQAAgJAMAAQAEAAAIACQAJADAFAAQASAAAAgIQAAgFgOgGIgYgLQgNgKAAgNQgBgUAVgHQAMgDAXAAQAKgBAFADQAGADAAAKQAAARgJAAQgKAAgCgIIgIgBQgWAAABAGQgBAFAMAGQAUAJAHAEQAOAJAAANQAAARgQAIQgMAIgQgBQgNAAgMgDg");
	this.shape_130.setTransform(126.6,172.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FF0000").s().p("AgLBHQgDgEgBgGIAAgSIgBgSIABgVIABgUQAAgGAFgDQADgEAGAAQAEAAAEAEQADADAAAGIgBAUIgBAVIABASIAAASQAAAGgDAEQgFADgDAAQgGAAgEgDgAgIgwQgEgFAAgGQAAgGAEgEQAFgEAEAAQAHAAAEAEQAEAEABAGQgBAGgEAFQgEAEgHAAQgEAAgFgEg");
	this.shape_131.setTransform(119.3,170.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgbAzQgOgGAAgLQAAgJALAAQAFAAAIACQAJADAFAAQASAAgBgIQAAgFgNgGIgYgLQgOgKAAgNQAAgUAVgHQANgDAXAAQAJgBAEADQAHADAAAKQAAARgJAAQgKAAgCgIIgIgBQgWAAAAAGQABAFAMAGQATAJAHAEQAOAJAAANQAAARgQAIQgMAIgQgBQgOAAgLgDg");
	this.shape_132.setTransform(102.6,172.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AAUAsIgDgUIgCgUIAAgHIABgIIAAgEIAAgEQAAgJgEAAQgIAAgGALQgIALgEAOIgBAJIgBAJIAAAJIgBAIQAAAGgEADQgEAEgGAAQgFAAgEgEQgEgDAAgGIgBgIIgBgJIACgaIACgZIgBgJIAAgJQAAgFAEgEQAEgDAFAAQANAAABAPIAAABQAOgOAOAAQASAAAIAPQAEAKAAAVIAAAHIAAAEQAAAIADAMQACAMAAAHQAAAGgFAEQgEADgFAAQgMAAgBgMg");
	this.shape_133.setTransform(92.8,172.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgIBEQgEgEAAgFIABgLIAAgLIgCgwIgSgBQgNgCAAgMQAAgFAEgEQAEgDAGAAIARABIgBgKIAAgKQAAgFADgEQAEgEAGAAQANAAAAAZIAAAIIAJgBQAMgBADACQAIADAAAJQAAAGgDADQgEAEgGAAIgFAAIgFAAIgJABIACAxIAAAFIAAAGQAAAWgOAAQgEAAgEgDg");
	this.shape_134.setTransform(72.3,170.8);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AADAeQgDgJgCgWIgCAEIgPAlQgBAEgDADQgEAGgJABQgEAAgFgJQgGgIgDgNQgDgNgGgmIgCgOQAAgFAEgEQAFgDAGAAQAKAAACAKIACAOIACANIAEAXIARgvQAEgNAJAAQALAAADAOIAFAaIAFAaIAPg6QACgIAKAAQAGAAAEADQAFAEAAAFIgBADIgVBEQgCAJgIAJQgEAGgIAAQgMAAgHgYg");
	this.shape_135.setTransform(41.7,172.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgKAJQgFgEABgFQgBgDAFgFQAFgEAFAAQAGAAAFAEQAFAEgBAEQABAFgFAEQgFAEgGAAQgFAAgFgEg");
	this.shape_136.setTransform(279.5,206.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgIBDQgEgDAAgFIABgLIAAgKIgCgxIgTgBQgLgCgBgMQABgFADgEQAEgDAGgBIAQACIAAgLIgBgJQAAgGAFgDQADgEAGAAQAMAAAAAYIAAAIIAKgBQAMABADABQAJACgBAKQAAAFgDAEQgEAEgGAAIgFAAIgFAAIgJAAIACAyIAAAEIAAAHQAAAWgOAAQgEAAgEgEg");
	this.shape_137.setTransform(270.6,200.7);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AATAsIgCgUIgBgUIAAgHIAAgIIAAgEIAAgEQAAgJgDAAQgJAAgGALQgIALgFAOIgBAJIAAAJIgBAJIAAAIQAAAGgEADQgEAEgFAAQgHAAgDgEQgEgDAAgGIgBgIIgBgJIACgaIABgZIAAgJIgBgJQAAgFAFgEQADgDAHAAQAMAAABAPIAAABQAPgOANAAQASAAAHAPQAGAKgBAVIAAAHIAAAEQAAAIACAMQACAMAAAHQAAAGgEAEQgDADgGAAQgMAAgCgMg");
	this.shape_138.setTransform(260.8,202.2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgLBHQgEgEAAgGIAAgSIgBgSIABgVIACgUQAAgGADgDQAEgEAGAAQAEAAADAEQAEADABAGIgCAUIgBAVIABASIAAASQAAAGgDAEQgFADgDAAQgGAAgEgDgAgIgwQgEgFAAgGQAAgGAEgEQAFgEAEAAQAGAAAFAEQAEAEAAAGQAAAGgEAFQgFAEgGAAQgEAAgFgEg");
	this.shape_139.setTransform(226.1,200);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AglAyQgDgDAAgGIAAg+IAAgJIAAgJQAAgFADgEQAEgDAGAAQALAAABALQAQgNAVAAQAUAAAAAaIAAAGQgCAPgNAAQgMAAABgMIgBgKQgUADgKATIAAAvQAAAGgDAEQgEADgGAAQgGAAgDgEg");
	this.shape_140.setTransform(218.5,202.3);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AggAqQgRgNAAgWQABgXANgRQAOgTAWAAQARAAAMAGQAPAHAAAPQgBALgMAIIgVAJIggAPQAGAFAGACQAHADAGAAQANAAAKgFQAHgFAFAAQAKAAAAAKQAAALgQAHQgOAGgPAAQgVAAgPgLgAgMgWQgHAGgEAMIAXgJQALgGAIgFQgHgEgLAAQgHAAgGAGg");
	this.shape_141.setTransform(207.7,202.3);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgnBOQgEgEAAgGIAAgkIAAgkQAAgWgCgOIgBgUQAAgIAEgGQAEgGAHgBQAGAAAEAFQADADAAAGIAAABQAGgFAHgBQAFgCAGAAQAXAAAKATQAIAPAAAWQAAATgNAOQgNAQgVAAQgHAAgJgCIAAAnQAAAGgEAEQgEADgGAAQgFAAgEgDgAgEgtQgHADgGAFIABAnQAJACAHABQAJAAAGgGQAFgGAAgLQAAgNgBgFQgDgMgKAAQgGAAgEADg");
	this.shape_142.setTransform(197.1,204.6);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgaAzQgPgGAAgLQAAgJALAAQAFAAAJACQAIADAFAAQARAAAAgIQAAgFgNgGIgYgLQgOgKAAgNQABgUAUgGQAMgFAYAAQAJABAEACQAHADAAAKQAAARgKAAQgJAAgCgIIgIgBQgVAAgBAGQAAAFANAGQATAJAHAEQAOAJAAANQAAAQgPAKQgNAGgRAAQgNAAgKgDg");
	this.shape_143.setTransform(155,202.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgLBHQgEgEABgGIgBgSIAAgSIABgVIABgUQAAgGADgDQAEgEAGAAQAEAAADAEQAFADAAAGIgBAUIgBAVIAAASIAAASQAAAGgEAEQgDADgFAAQgFAAgEgDgAgHgwQgFgFAAgGQAAgGAFgEQAEgEAEAAQAHAAAEAEQAFAEgBAGQABAGgFAFQgEAEgHAAQgEAAgEgEg");
	this.shape_144.setTransform(147.7,200);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgmAyQgDgDAAgGIAAg+IABgJIAAgJQAAgFADgEQAEgDAFAAQAMAAACALQAPgNAVAAQATAAAAAaIAAAGQAAAPgNAAQgNAAAAgMIAAgKQgUADgJATIAAAvQgBAGgDAEQgEADgGAAQgGAAgEgEg");
	this.shape_145.setTransform(110.4,202.3);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FF0000").s().p("AAbBJQgHAEgIABIgMABQgWAAgPgNQgOgOAAgXQAAgaAOgOQAQgRAWAAQAGAAAGACQAGABAEAEQABgiADgMQABgLALAAQAGgBADAEQAEAEAAAFIgCArQgCAagBAPQABAiACAMIAAADQAAAFgEAEQgDADgGAAQgHABgDgHgAgTAEQgHAIAAARQAAALAHAHQAIAIALAAQAFAAAFgDIAJgFIACgEIAAgkQgDgFgFgCQgFgDgHAAQgNAAgHAHg");
	this.shape_146.setTransform(351.6,169.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FF0000").s().p("AggAqQgRgNAAgWQAAgXAOgRQAOgTAWAAQARAAAMAGQAPAHAAAPQgBALgLAIIgXAJIgfAPQAGAFAGACQAHADAGAAQANAAAKgFQAHgFAFAAQAKAAAAAKQAAALgQAHQgOAGgPAAQgVAAgPgLgAgMgWQgGAGgFAMIAXgJQALgGAHgFQgGgEgLAAQgHAAgGAGg");
	this.shape_147.setTransform(340.1,172.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FF0000").s().p("AglAyQgDgDAAgGIAAg+IAAgJIAAgJQAAgFADgEQAEgDAFAAQAMAAABALQAQgNAVAAQAUAAAAAaIAAAGQgCAPgNAAQgMAAAAgMIAAgKQgUADgKATIAAAvQAAAGgDAEQgEADgGAAQgGAAgDgEg");
	this.shape_148.setTransform(330.1,172.4);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FF0000").s().p("AgLBHQgDgEAAgGIgBgSIgBgSIACgVIABgUQAAgGADgDQAEgEAGAAQAEAAADAEQAEADABAGIgBAUIgCAVIABASIAAASQAAAGgEAEQgEADgEAAQgFAAgEgDgAgIgwQgEgFAAgGQAAgGAEgEQAFgEAEAAQAGAAAFAEQAFAEgBAGQABAGgFAFQgFAEgGAAQgEAAgFgEg");
	this.shape_149.setTransform(322.5,170.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FF0000").s().p("AATAwQgMAEgMAAQgOAAgJgGQgLgGgCgNQgEgYAAgRQAAgNADgQQACgLAMAAQAFAAAEADQAEAEAAAFIgBAOIgCANIABAWQABALACAGIAFACIAEABQAJAAANgEIAAgRIAAgOQAAgUACgPQABgLAMAAQAGAAAEADQAEAEAAAFIgCAjIAAASIAAATIAAAGIABAGQAAAGgEAEQgEADgGAAQgIAAgEgHg");
	this.shape_150.setTransform(314.2,172.5);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FF0000").s().p("AAKA+IAAgFIACgcIgHABQgVAAgOgLQgPgNAAgTQAAgdAQgSQATgSAcAAQAEAAAEADQADgCAEAAQAFAAAFAEQADAEAAAFQAAAcgDAgIgFAiQgCATAAAQQAAAGgEAEQgEAEgFAAQgNAAAAgRgAgMgmQgGAKAAAPQAAAJAFAEQAIAHAJgBQAHAAADgGQAFgJAAgYIABgVIgDAAIgGAAQgOADgJANg");
	this.shape_151.setTransform(303.6,174.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FF0000").s().p("AggAqQgQgNAAgWQgBgXANgRQAPgTAXAAQAQAAAMAGQAOAHAAAPQAAALgMAIIgVAJIggAPQAFAFAHACQAGADAHAAQAOAAAIgFQAJgFAFAAQAKAAgBAKQAAALgQAHQgNAGgQAAQgVAAgPgLgAgMgWQgGAGgEAMIAVgJQAMgGAIgFQgHgEgKAAQgHAAgHAGg");
	this.shape_152.setTransform(292.9,172.4);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FF0000").s().p("AgmAyQgDgDAAgGIAAg+IABgJIAAgJQAAgFAEgEQACgDAHAAQAKAAACALQAQgNAVAAQATAAAAAaIAAAGQgBAPgMAAQgMAAAAgMIgBgKQgUADgKATIAAAvQAAAGgDAEQgEADgGAAQgGAAgEgEg");
	this.shape_153.setTransform(282.9,172.4);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FF0000").s().p("AgbAzQgOgGAAgLQAAgJALAAQAFAAAJACQAIADAFAAQARAAAAgIQAAgFgNgGIgYgLQgOgKAAgNQABgUAUgHQAMgDAYAAQAJgBAEADQAHADAAAKQAAARgKAAQgJAAgCgIIgIgBQgVAAgBAGQABAFAMAGQATAJAHAEQAOAJAAANQAAARgPAIQgNAIgRgBQgNAAgLgDg");
	this.shape_154.setTransform(264.2,172.4);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgmAyQgCgDAAgGIAAg+IAAgJIAAgJQAAgFADgEQAEgDAFAAQALAAADALQAPgNAVAAQAUAAAAAaIAAAGQgCAPgNAAQgLAAgBgMIAAgKQgUADgJATIAAAvQAAAGgEAEQgEADgGAAQgGAAgEgEg");
	this.shape_155.setTransform(240.6,172.4);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AggAqQgRgNAAgWQAAgXAOgRQAOgTAWAAQARAAAMAGQAPAHAAAPQgBALgLAIIgXAJIgfAPQAGAFAGACQAHADAGAAQANAAAKgFQAHgFAFAAQAKAAAAAKQAAALgQAHQgOAGgPAAQgVAAgPgLgAgMgWQgGAGgFAMIAXgJQALgGAIgFQgHgEgLAAQgHAAgGAGg");
	this.shape_156.setTransform(229.9,172.4);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgHBEQgFgEAAgFIAAgLIABgLIgCgwIgTgBQgLgCAAgMQgBgFAEgEQAEgDAFAAIARABIAAgKIAAgKQAAgFADgEQAEgEAGAAQANAAgBAZIAAAIIAKgBQALgBAFACQAHADABAJQAAAGgFADQgDAEgGAAIgFAAIgFAAIgJABIABAxIABAFIAAAGQAAAWgOAAQgDAAgEgDg");
	this.shape_157.setTransform(219.8,170.8);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AAXAsQgJAFgHACQgHACgCAAQgYAAgMgMQgLgNAAgZQAAgWARgQQARgRAWAAQAKAAAMAFQAOAGAAAJQAAADgCADIgBAJIAAAOQgBARADAIIAFAKIADAJQAAAFgDAEQgFADgFAAQgEAAgKgJgAgMgSQgKAKAAAMQgBANAFAGQAFAHAKAAQADAAAGgCQAFgCAFgEQgDgWAAgLIABgHIABgJIgDgBIgEgBQgKAAgKALg");
	this.shape_158.setTransform(209.6,172.4);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AADAeQgDgJgCgWIgCAEIgPAlQgBAEgDADQgEAGgJABQgEAAgFgJQgGgIgDgNQgDgNgGgmIgCgOQAAgFAFgEQADgDAHAAQAKAAACAKIACAOIACANIAEAXIARgvQADgNAKAAQAKAAADAOIAGAaIAFAaIAPg6QACgIAKAAQAGAAAEADQAEAEABAFIgBADIgUBEQgEAJgHAJQgEAGgIAAQgMAAgHgYg");
	this.shape_159.setTransform(197.2,172.6);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AggAqQgQgNAAgWQAAgXAMgRQAPgTAWAAQASAAALAGQAOAHAAAPQABALgMAIIgXAJIgeAPQAFAFAGACQAGADAHAAQANAAAJgFQAIgFAGAAQAJAAABAKQAAALgRAHQgOAGgPAAQgVAAgPgLgAgMgWQgGAGgFAMIAXgJQALgGAHgFQgGgEgLAAQgGAAgHAGg");
	this.shape_160.setTransform(173.4,172.4);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgaAzQgPgGAAgLQAAgJAMAAQAEAAAIACQAJADAFAAQARAAABgIQAAgFgOgGIgYgLQgNgKAAgNQgBgUAVgHQAMgDAXAAQAKgBAFADQAGADAAAKQAAARgKAAQgJAAgCgIIgIgBQgVAAAAAGQAAAFALAGQAUAJAHAEQAOAJAAANQAAARgQAIQgMAIgQgBQgNAAgLgDg");
	this.shape_161.setTransform(162.9,172.4);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AgbAzQgOgGAAgLQAAgJALAAQAFAAAJACQAIADAFAAQARAAAAgIQAAgFgNgGIgYgLQgOgKAAgNQABgUAUgHQAMgDAYAAQAJgBAEADQAHADAAAKQAAARgKAAQgJAAgCgIIgIgBQgVAAgBAGQABAFAMAGQATAJAHAEQAOAJAAANQAAARgPAIQgNAIgRgBQgNAAgLgDg");
	this.shape_162.setTransform(115.3,172.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AggAqQgRgNAAgWQAAgXAOgRQAOgTAWAAQARAAAMAGQAPAHAAAPQgBALgLAIIgXAJIgfAPQAGAFAGACQAHADAGAAQANAAAKgFQAHgFAFAAQAKAAAAAKQAAALgQAHQgOAGgPAAQgVAAgPgLgAgMgWQgGAGgFAMIAXgJQALgGAIgFQgHgEgLAAQgHAAgGAGg");
	this.shape_163.setTransform(104.8,172.4);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AADAeQgDgJgBgWIgDAEIgPAlQgBAEgDADQgFAGgHABQgFAAgFgJQgFgIgDgNQgEgNgGgmIgBgOQAAgFADgEQAEgDAGAAQALAAADAKIACAOIABANIAEAXIAQgvQAFgNAJAAQAKAAAEAOIAFAaIAFAaIAPg6QACgIALAAQAFAAAEADQAFAEgBAFIAAADIgUBEQgEAJgGAJQgFAGgIAAQgMAAgHgYg");
	this.shape_164.setTransform(32,172.6);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AAbAzIgbgjIgZAXIgIAIQgEAEgFAAQgGAAgEgEQgEgDAAgFQAAgGAIgHIANgLIATgRIgLgPQgHgJgGgFQgFgEAAgFQAAgFAEgEQAEgEAFAAQAHAAAMAOIAOAUIAQgOQALgJAEgHQAFgGAGAAQAFAAAEAEQAFAEAAAFQAAAGgLAKIgOANIgPANIAeAjQADAEAAAEQAAAFgEAEQgEAEgFAAQgGAAgEgFg");
	this.shape_165.setTransform(20.5,142.2);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgbAzQgOgGAAgLQAAgJALAAQAFAAAJACQAIADAFAAQARAAAAgIQAAgFgNgGIgYgLQgOgKAAgNQABgUAUgGQAMgFAYAAQAJABAEACQAHADAAAKQAAARgKAAQgJAAgCgIIgIgBQgVAAgBAGQABAFAMAGQATAJAHAEQAOAJAAANQAAAQgPAKQgNAGgRAAQgNAAgLgDg");
	this.shape_166.setTransform(207.1,202.3);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgHBDQgFgDAAgFIAAgLIABgKIgCgxIgTgBQgMgCABgMQAAgFADgEQAEgDAFgBIARACIAAgLIgBgJQAAgGAFgDQAEgEAFAAQAMAAAAAYIAAAIIAKgBQAMABADABQAJACAAAKQAAAFgFAEQgDAEgGAAIgFAAIgFAAIgJAAIABAyIABAEIAAAHQAAAWgOAAQgEAAgDgEg");
	this.shape_167.setTransform(178.6,200.7);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgIBDQgEgDAAgFIABgLIAAgKIgCgxIgSgBQgNgCAAgMQAAgFAEgEQAEgDAGgBIARACIgBgLIAAgJQAAgGAEgDQADgEAGAAQANAAAAAYIAAAIIAJgBQALABAEABQAIACAAAKQAAAFgDAEQgEAEgGAAIgFAAIgFAAIgJAAIACAyIAAAEIAAAHQAAAWgOAAQgEAAgEgEg");
	this.shape_168.setTransform(160.5,200.7);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AgLBHQgDgEAAgGIgBgSIgBgSIACgVIABgUQAAgGADgDQAEgEAGAAQAEAAADAEQAFADAAAGIgBAUIgCAVIABASIAAASQAAAGgEAEQgEADgEAAQgFAAgEgDgAgIgwQgEgFAAgGQAAgGAEgEQAFgEAEAAQAGAAAFAEQAFAEgBAGQABAGgFAFQgFAEgGAAQgEAAgFgEg");
	this.shape_169.setTransform(328.8,170.1);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AggAqQgQgNAAgWQAAgXAMgRQAPgTAWAAQASAAALAGQAOAHAAAPQABALgMAIIgXAJIgeAPQAEAFAHACQAHADAGAAQAOAAAIgFQAIgFAGAAQAJAAABAKQAAALgRAHQgOAGgPAAQgVAAgPgLgAgMgWQgGAGgEAMIAVgJQAMgGAHgFQgGgEgLAAQgGAAgHAGg");
	this.shape_170.setTransform(297.7,172.4);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AADAeQgDgJgCgWIgCAEIgPAlQgBAEgDADQgFAGgHABQgFAAgFgJQgFgIgDgNQgEgNgGgmIgCgOQAAgFAFgEQADgDAHAAQAKAAACAKIADAOIABANIAEAXIAQgvQAEgNAKAAQAKAAADAOIAGAaIAFAaIAPg6QACgIAKAAQAGAAAEADQAEAEAAAFIAAADIgUBEQgEAJgGAJQgFAGgIAAQgMAAgHgYg");
	this.shape_171.setTransform(285.5,172.6);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AggAqQgQgNAAgWQgBgXANgRQAPgTAXAAQAQAAAMAGQAOAHAAAPQAAALgMAIIgVAJIggAPQAFAFAHACQAGADAHAAQAOAAAIgFQAJgFAFAAQAKAAAAAKQgBALgQAHQgNAGgQAAQgVAAgPgLgAgMgWQgHAGgDAMIAVgJQAMgGAIgFQgHgEgKAAQgHAAgHAGg");
	this.shape_172.setTransform(264.1,172.4);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AgLBHQgDgEgBgGIAAgSIAAgSIAAgVIABgUQAAgGAFgDQADgEAGAAQAEAAAEAEQADADAAAGIgBAUIAAAVIAAASIAAASQAAAGgDAEQgFADgEAAQgFAAgEgDgAgHgwQgFgFAAgGQAAgGAFgEQAEgEAEAAQAGAAAFAEQAFAEAAAGQAAAGgFAFQgFAEgGAAQgEAAgEgEg");
	this.shape_173.setTransform(240.6,170.1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AggAqQgQgNAAgWQgBgXANgRQAPgTAXAAQAQAAAMAGQAOAHAAAPQAAALgMAIIgVAJIgfAPQAEAFAHACQAGADAHAAQAOAAAIgFQAJgFAFAAQAKAAgBAKQABALgRAHQgNAGgQAAQgVAAgPgLgAgMgWQgGAGgEAMIAVgJQAMgGAIgFQgHgEgKAAQgHAAgHAGg");
	this.shape_174.setTransform(213.7,172.4);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FF0000").s().p("AgLBHQgDgEAAgGIgBgSIgBgSIACgVIABgUQAAgGADgDQAEgEAGAAQAEAAADAEQAFADAAAGIgBAUIgCAVIABASIAAASQAAAGgEAEQgEADgDAAQgGAAgEgDgAgIgwQgEgFAAgGQAAgGAEgEQAFgEAEAAQAGAAAFAEQAFAEgBAGQABAGgFAFQgFAEgGAAQgEAAgFgEg");
	this.shape_175.setTransform(166.4,170.1);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AAXBIQgGgJgJgMIgOgUIgNAJIAAAaQAAAGgFADQgDAEgGAAQgOAAAAgQIABgXIABgXIABgfIAAggIAAgKIgBgKQABgFADgEQAEgEAGAAQAGAAAEAEQADAEAAAFIABAKIAAALIAAAbIgBAZQAOgIAZgbQAEgEAGAAQAFAAAEAEQAFAEgBAFQAAAEgDAFQgMAKgQAPIAVAaQAOATAAAHQAAAFgEAEQgFAEgFAAQgIAAgDgIg");
	this.shape_176.setTransform(149.6,169.6);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgdArQgQgNAAgVQABgSAOgUQAPgYATAAQAKAAANAFQARAHAAAIQAAAFgDAEQgEAEgFAAQgFAAgFgFQgHgEgLAAQgGAAgIAPQgJAOAAAJQAAAJAIAHQAHAFAJAAQAHAAAJgFQAJgFADAAQAFAAAEAEQADAEAAAFQAAAHgQAIQgPAGgJAAQgTABgPgMg");
	this.shape_177.setTransform(112.4,172.4);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AgJAUQgEgDABgGIADgXQACgKAIgBQAGABADADQADADABAGIgEAWQAAAEgDADQgEAEgEABQgFgBgDgDg");
	this.shape_178.setTransform(105.1,164.2);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AggAqQgQgNAAgWQAAgXAMgRQAPgTAWAAQASAAALAGQAOAHAAAPQABALgMAIIgXAJIgeAPQAEAFAHACQAHADAGAAQAOAAAIgFQAIgFAGAAQAJAAABAKQAAALgRAHQgOAGgPAAQgVAAgPgLgAgMgWQgGAGgEAMIAVgJQAMgGAHgFQgGgEgLAAQgGAAgHAGg");
	this.shape_179.setTransform(78.1,172.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_54},{t:this.shape_53,p:{x:20.5,y:142.2}},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49,p:{x:66.4,y:139.7}},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45,p:{x:16.5}},{t:this.shape_44,p:{x:29.3,y:169.7}},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41,p:{x:61.1,y:172.4}},{t:this.shape_40,p:{x:83.5,y:172.4}},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37,p:{x:116.7}},{t:this.shape_36,p:{x:127.3,y:169.7}},{t:this.shape_35,p:{x:137.6}},{t:this.shape_34,p:{x:154.3}},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31,p:{x:197.7,y:169.6}},{t:this.shape_30,p:{x:205.6}},{t:this.shape_29,p:{x:216.3,y:172.3}},{t:this.shape_28,p:{x:226.6}},{t:this.shape_27},{t:this.shape_26,p:{x:253}},{t:this.shape_25,p:{x:263.5,y:172.4}},{t:this.shape_24,p:{x:276.6}},{t:this.shape_23},{t:this.shape_22,p:{x:305.5}},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17,p:{x:78.7,y:200.1}},{t:this.shape_16,p:{x:89,y:202.4}},{t:this.shape_15},{t:this.shape_14,p:{x:120.5,y:202.3}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8,p:{x:206.6,y:202.4}},{t:this.shape_7},{t:this.shape_6,p:{x:226.5}},{t:this.shape_5,p:{x:237.6}},{t:this.shape_4,p:{x:248.6,y:202.4}},{t:this.shape_3,p:{x:259.6}},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{x:290.6}}]},90).to({state:[{t:this.shape_54},{t:this.shape_53,p:{x:20.5,y:142.2}},{t:this.shape_52},{t:this.shape_14,p:{x:45.4,y:142.5}},{t:this.shape_50},{t:this.shape_77},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_76},{t:this.shape_30,p:{x:47.5}},{t:this.shape_75},{t:this.shape_37,p:{x:67.2}},{t:this.shape_74},{t:this.shape_73},{t:this.shape_22,p:{x:108.3}},{t:this.shape_49,p:{x:116.3,y:169.6}},{t:this.shape_31,p:{x:121.8,y:169.6}},{t:this.shape_72,p:{x:130.3}},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68,p:{x:174.1}},{t:this.shape_67,p:{x:192.5}},{t:this.shape_44,p:{x:203.1,y:169.7}},{t:this.shape_66,p:{x:214.2}},{t:this.shape_65,p:{x:233.5}},{t:this.shape_16,p:{x:243.9,y:172.5}},{t:this.shape_64,p:{x:254}},{t:this.shape_63},{t:this.shape_4,p:{x:282.2,y:172.5}},{t:this.shape_17,p:{x:292.5,y:170.2}},{t:this.shape_62},{t:this.shape_36,p:{x:321.7,y:169.7}},{t:this.shape_61,p:{x:332.7,y:172.4}},{t:this.shape_60,p:{x:139.1,y:202.3}},{t:this.shape_29,p:{x:150.2,y:202.2}},{t:this.shape_59},{t:this.shape_58,p:{x:169.6,y:202.3}},{t:this.shape_57},{t:this.shape_6,p:{x:198.9}},{t:this.shape_56},{t:this.shape_55},{t:this.shape,p:{x:230.8}}]},55).to({state:[{t:this.shape_54},{t:this.shape_53,p:{x:20.5,y:142.2}},{t:this.shape_52},{t:this.shape_14,p:{x:45.4,y:142.5}},{t:this.shape_50},{t:this.shape_31,p:{x:66.4,y:139.7}},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45,p:{x:15.7}},{t:this.shape_114},{t:this.shape_66,p:{x:39.6}},{t:this.shape_113},{t:this.shape_112,p:{x:72}},{t:this.shape_60,p:{x:84.2,y:172.4}},{t:this.shape_58,p:{x:94.9,y:172.4}},{t:this.shape_111},{t:this.shape_35,p:{x:124.1}},{t:this.shape_110,p:{x:134.2}},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107,p:{x:164.8}},{t:this.shape_26,p:{x:172.5}},{t:this.shape_64,p:{x:179.8}},{t:this.shape_106},{t:this.shape_105},{t:this.shape_37,p:{x:221.1}},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102,p:{x:253.1}},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_8,p:{x:168.8,y:202.4}},{t:this.shape_84,p:{x:178.8}},{t:this.shape_4,p:{x:197.2,y:202.4}},{t:this.shape_83},{t:this.shape_82},{t:this.shape_44,p:{x:237,y:199.6}},{t:this.shape_81},{t:this.shape_5,p:{x:268.4}},{t:this.shape_80,p:{x:279.7}},{t:this.shape_3,p:{x:291.1}},{t:this.shape_79},{t:this.shape_36,p:{x:312.7,y:199.6}},{t:this.shape_78}]},54).to({state:[{t:this.shape_54},{t:this.shape_53,p:{x:20.5,y:142.2}},{t:this.shape_52},{t:this.shape_14,p:{x:45.4,y:142.5}},{t:this.shape_50},{t:this.shape_49,p:{x:66.4,y:139.7}},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45,p:{x:27.9}},{t:this.shape_135},{t:this.shape_30,p:{x:53.6}},{t:this.shape_134},{t:this.shape_22,p:{x:82.1}},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_16,p:{x:155.7,y:172.5}},{t:this.shape_102,p:{x:165.8}},{t:this.shape_72,p:{x:184.8}},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_110,p:{x:235.2}},{t:this.shape_125},{t:this.shape_8,p:{x:255.3,y:172.5}},{t:this.shape_124},{t:this.shape_31,p:{x:274.4,y:169.6}},{t:this.shape_123},{t:this.shape_122,p:{x:305,y:172.4}},{t:this.shape_121},{t:this.shape_28,p:{x:321.6}},{t:this.shape_44,p:{x:332.9,y:169.7}},{t:this.shape_120},{t:this.shape_6,p:{x:129.2}},{t:this.shape_4,p:{x:139.5,y:202.4}},{t:this.shape_58,p:{x:149.8,y:202.3}},{t:this.shape_119},{t:this.shape_118},{t:this.shape_36,p:{x:202.5,y:199.6}},{t:this.shape_117},{t:this.shape_116,p:{x:221.8,y:199.5}},{t:this.shape_61,p:{x:230.1,y:202.3}},{t:this.shape_115}]},60).to({state:[{t:this.shape_54},{t:this.shape_165},{t:this.shape_52},{t:this.shape_25,p:{x:45.4,y:142.5}},{t:this.shape_50},{t:this.shape_31,p:{x:66.4,y:139.7}},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45,p:{x:18.2}},{t:this.shape_164},{t:this.shape_30,p:{x:43.8}},{t:this.shape_22,p:{x:62.9}},{t:this.shape_8,p:{x:73.4,y:172.5}},{t:this.shape_29,p:{x:84,y:172.3}},{t:this.shape_65,p:{x:94}},{t:this.shape_163},{t:this.shape_162},{t:this.shape_16,p:{x:134,y:172.5}},{t:this.shape_17,p:{x:144.3,y:170.2}},{t:this.shape_161},{t:this.shape_160},{t:this.shape_72,p:{x:184.8}},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_34,p:{x:256.9}},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_6,p:{x:89.8}},{t:this.shape_4,p:{x:100.1,y:202.4}},{t:this.shape_145},{t:this.shape_84,p:{x:128.4}},{t:this.shape_36,p:{x:139,y:199.6}},{t:this.shape_144},{t:this.shape_143},{t:this.shape_122,p:{x:174.1,y:202.3}},{t:this.shape_53,p:{x:185.7,y:202}},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140,p:{x:218.5}},{t:this.shape_139},{t:this.shape_14,p:{x:236.6,y:202.3}},{t:this.shape_41,p:{x:249.7,y:202.3}},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136}]},59).to({state:[{t:this.shape_54},{t:this.shape_53,p:{x:20.5,y:142.2}},{t:this.shape_52},{t:this.shape_40,p:{x:45.4,y:142.5}},{t:this.shape_50},{t:this.shape_77},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45,p:{x:33.4}},{t:this.shape_44,p:{x:46.2,y:169.7}},{t:this.shape_107,p:{x:56.8}},{t:this.shape_24,p:{x:66.9}},{t:this.shape_179},{t:this.shape_22,p:{x:97.6}},{t:this.shape_178},{t:this.shape_177},{t:this.shape_116,p:{x:120.3,y:169.6}},{t:this.shape_16,p:{x:128.3,y:172.5}},{t:this.shape_65,p:{x:138.6}},{t:this.shape_176},{t:this.shape_175},{t:this.shape_68,p:{x:173.7}},{t:this.shape_67,p:{x:192.1}},{t:this.shape_36,p:{x:202.7,y:169.7}},{t:this.shape_174},{t:this.shape_102,p:{x:232.9}},{t:this.shape_173},{t:this.shape_25,p:{x:251.1,y:172.4}},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_112,p:{x:319}},{t:this.shape_169},{t:this.shape_49,p:{x:334,y:169.6}},{t:this.shape_31,p:{x:339.5,y:169.6}},{t:this.shape_14,p:{x:125.8,y:202.3}},{t:this.shape_80,p:{x:138.8}},{t:this.shape_61,p:{x:150,y:202.3}},{t:this.shape_168},{t:this.shape_167},{t:this.shape_4,p:{x:188.3,y:202.4}},{t:this.shape_166},{t:this.shape_8,p:{x:217.2,y:202.4}},{t:this.shape_140,p:{x:227.5}},{t:this.shape_6,p:{x:237}},{t:this.shape,p:{x:246.5}}]},60).wait(67));

	// rule
	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AgOAMQgGgFAAgHQAAgFAGgGQAHgFAHAAQAJgBAGAGQAGAFAAAGQAAAHgGAFQgGAGgJAAQgHAAgHgGg");
	this.shape_180.setTransform(284.8,150.1);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FF0000").s().p("AgmBkQgFAEgHAAQgHAAgFgEQgFgFAAgHIABgKIAAgKIAAiTQgBgKAFgHQAFgJAKAAQAOAAAAAPIgBAFIAAAGIAAAyQAKgFAJgDQAJgCAGAAQAfAAATAXQASASAAAeQAAAfgVAVQgVAWgdAAQgTAAgQgGgAgOgCQgIADgMAIIAAA4QASAHANAAQAPAAALgLQAKgMABgRQAAgRgJgLQgKgJgPAAQgFAAgJADg");
	this.shape_181.setTransform(271,140.5);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FF0000").s().p("AgzBEQgEgFAAgHIAAhVIAAgLIABgNQgBgHAFgFQAFgFAHAAQAPAAADAPQAVgSAcAAQAbABAAAiIAAAJQgCAVgRgBQgQAAAAgQIgBgOQgbAFgNAZIAABBQAAAIgFAEQgGAGgHAAQgIgBgFgFg");
	this.shape_182.setTransform(256.8,144.1);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FF0000").s().p("AgrA5QgXgRAAgeQAAggARgXQAUgaAgAAQAXAAAOAIQAVAKgBAVQAAAOgQALQgHAFgXAIIgqAUQAGAGAJAEQAKADAJABQARAAANgIQALgGAHAAQANAAAAANQAAAPgWAKQgTAHgUAAQgdAAgUgOgAgQgeQgKAIgFARIAegOQAQgHALgHQgKgGgNAAQgLABgIAIg");
	this.shape_183.setTransform(242.3,144);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FF0000").s().p("AgSA6IgshoIgCgIQABgHAFgFQAGgFAHAAQAMAAAEAKQAIAQAVA5IASgrIAMgdQAFgKALAAQAHAAAGAFQAGAFAAAHQAAAFgWAvIgcA5QAAAHgEAEQgGAFgFAAQgNAAgFgOg");
	this.shape_184.setTransform(228.6,143.9);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FF0000").s().p("AgzBEQgEgFAAgHIAAhVIAAgLIABgNQgBgHAFgFQAEgFAJAAQAOAAADAPQAVgSAcAAQAbABAAAiIAAAJQgCAVgRgBQgQAAAAgQIgBgOQgcAFgMAZIAABBQAAAIgFAEQgFAGgIAAQgJgBgEgFg");
	this.shape_185.setTransform(203.9,144.1);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FF0000").s().p("AAfA8QgMAGgJADQgJADgFAAQggAAgPgRQgQgSAAghQAAgeAXgWQAYgXAeAAQANAAAQAHQAUAJAAAKQAAAGgDADIgCANIgBATQAAAXAEALIAGANIAFANQAAAGgFAFQgGAFgHAAQgGAAgNgMgAgRgZQgOANAAARQAAARAGAJQAHAKAMgBQAHAAAHgCQAHgDAHgFQgEgeAAgPIAAgKIACgMIgEgCIgEgBQgQABgNAOg");
	this.shape_186.setTransform(189.7,144.1);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FF0000").s().p("AgLBnQgGgFAAgIIAAi0QAAgIAGgEQAFgFAGAAQAIAAAFAFQAFAEAAAIIAACtQAAAZgSAAQgGAAgFgFg");
	this.shape_187.setTransform(178.3,140.3);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FF0000").s().p("AAaBAQgRAHgQAAQgTAAgMgIQgPgJgDgSQgFggAAgYQAAgRAEgWQADgOAPAAQAIgBAFAFQAFAFAAAHIgBASIgCATIABAeQABAOADAJIAGACIAGABQANAAARgEIAAgXIAAgUQAAgcACgTQACgPAQAAQAIgBAGAFQAFAFAAAIIgDAuIAAAZIAAAaIABAJIAAAIQAAAHgFAFQgFAFgIgBQgLAAgFgKg");
	this.shape_188.setTransform(167.6,144.1);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FF0000").s().p("AhDBUQAAgHAFgFQAFgEAHAAIARACQALACAJAAQARAAAKgMQAJgMACgZQgIAHgIADQgIADgIAAQgbAAgQgRQgRgRAAgYQAAgkAXgWQAWgXAlAAQAMAAAJADQAJADAGAGQAQACAAASQAAAJgDAPQgFAfgBAhQgBAqgNATQgSAagqAAQgzAAAAgUgAgTg7QgLAOAAAVQAAAQAFAIQAGAFANAAQAJAAAKgKQALgMABgLIAGgoQgEgDgFgBIgJgBQgUAAgMAOg");
	this.shape_189.setTransform(153.4,147.5);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FF0000").s().p("AAbA8IgEgbQgCgPAAgMIAAgKIABgMIAAgFIAAgGQAAgLgFAAQgLAAgJAPQgLAOgGAVIgBAMIgBAMIgBALIgBALQAAAIgFAFQgFAFgIAAQgIAAgFgFQgFgFAAgIIgBgLIgBgLIACgkIACgiIAAgMIgBgMQAAgHAFgFQAGgFAHAAQASAAABAUIAAACQATgTAUAAQAZAAAJAUQAGAOAAAcIAAAKIAAAGQAAAKADARQADAQAAAKQAAAHgFAFQgGAFgHAAQgRAAgBgQg");
	this.shape_190.setTransform(139.4,143.8);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FF0000").s().p("AgPBfQgGgFAAgHIAAgYIAAgZIABgdIABgbQAAgIAFgFQAFgFAIAAQAGAAAFAFQAGAFAAAIIgCAbIgBAdIAAAZIABAYQAAAHgFAFQgFAFgGAAQgIAAgFgFgAgLhCQgGgGAAgIQAAgIAGgGQAGgFAHAAQAIAAAGAFQAGAGAAAIQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_191.setTransform(128.7,140.9);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FF0000").s().p("AgkBEQgUgHAAgOQAAgOAQAAQAGAAALAEQAMAEAGAAQAZAAAAgLQAAgHgTgIQgZgMgIgDQgSgNAAgTQAAgaAcgKQAQgFAgAAQANAAAHAEQAIAEAAANQAAAXgMAAQgOAAgCgLIgLgBQgeAAAAAJQAAAFARAJQAaAMAKAGQATAMAAASQAAAXgVALQgRAKgXAAQgSAAgOgGg");
	this.shape_192.setTransform(117.9,143.9);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AAfA8QgMAGgJADQgJADgFAAQggAAgPgRQgQgSAAghQAAgeAXgWQAYgXAeAAQANAAAQAHQAUAJAAAKQAAAGgDADIgCANIgBATQAAAXAEALIAGANIAFANQAAAGgFAFQgGAFgHAAQgGAAgNgMgAgRgZQgOANAAARQAAARAGAJQAHAKAMgBQAHAAAHgCQAHgDAHgFQgEgeAAgPIAAgKIACgMIgEgCIgEgBQgQABgNAOg");
	this.shape_193.setTransform(92.4,144.1);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AgkBEQgUgHAAgOQAAgOAQAAQAGAAALAEQAMAEAGAAQAZAAAAgLQAAgHgTgIQgZgMgIgDQgSgNAAgTQAAgaAcgKQAQgFAgAAQANAAAHAEQAIAEAAANQAAAXgMAAQgOAAgCgLIgLgBQgeAAAAAJQAAAFARAJQAaAMAKAGQATAMAAASQAAAXgVALQgRAKgXAAQgSAAgOgGg");
	this.shape_194.setTransform(354.7,104.3);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AgrA5QgXgRAAgeQAAggARgXQAUgaAfAAQAXAAAPAIQAVAKAAAVQAAAOgRALQgIAFgVAIIgrAUQAHAGAIAEQAJADAKABQASAAAMgIQALgGAHAAQANAAAAANQAAAPgWAKQgSAHgVAAQgeAAgTgOgAgQgeQgJAIgGARIAegOQAQgHALgHQgKgGgOAAQgKABgIAIg");
	this.shape_195.setTransform(340.6,104.4);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AgzBEQgEgFAAgHIAAhVIAAgLIAAgNQABgHAEgFQAEgFAJAAQAOAAADAPQAVgSAdAAQAaABAAAiIAAAJQgBAVgRgBQgRAAAAgQIAAgOQgdAFgMAZIAABBQAAAIgFAEQgGAGgHAAQgJgBgEgFg");
	this.shape_196.setTransform(327,104.5);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AgPBfQgGgFAAgHIAAgYIAAgZIABgdIABgbQAAgIAFgFQAFgFAIAAQAGAAAFAFQAGAFAAAIIgCAbIgBAdIAAAZIABAYQAAAHgFAFQgFAFgGAAQgIAAgFgFgAgLhCQgGgGAAgIQAAgIAGgGQAGgFAHAAQAIAAAGAFQAGAGAAAIQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_197.setTransform(316.8,101.3);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AAaBAQgRAHgQAAQgTAAgMgIQgPgJgDgSQgFggAAgYQAAgRAEgWQADgOAPAAQAIgBAFAFQAFAFAAAHIgBASIgCATIABAeQABAOADAJIAGACIAGABQANAAARgEIAAgXIAAgUQAAgcACgTQACgPAQAAQAIgBAGAFQAFAFAAAIIgDAuIAAAZIAAAaIABAJIAAAIQAAAHgFAFQgFAFgIgBQgLAAgFgKg");
	this.shape_198.setTransform(305.6,104.5);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AANBUIAAgHIAEgmIgKACQgcAAgUgQQgVgQAAgcQAAgmAXgYQAYgZAnABQAHAAAFADQAEgDAFAAQAIAAAEAGQAGAFAAAHQAAAmgFArIgGAuQgDAbAAAVQAAAIgFAFQgFAFgIAAQgSAAAAgWgAAPhKQgUAEgKARQgKAPAAAUQAAANAIAFQAJAJAOAAQAJgBAFgIQAFgMABghIACgcIgFAAIgGgBIgCAAg");
	this.shape_199.setTransform(291.2,107.6);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AgsA5QgWgRAAgeQAAggASgXQATgaAfAAQAYAAAPAIQATAKABAVQAAAOgRALQgIAFgVAIIgrAUQAHAGAJAEQAIADAKABQASAAAMgIQALgGAGAAQAOAAAAANQAAAPgWAKQgTAHgUAAQgdAAgVgOgAgRgeQgJAIgEARIAdgOQAQgHAKgHQgJgGgOAAQgKABgJAIg");
	this.shape_200.setTransform(276.9,104.4);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AgzBEQgEgFAAgHIAAhVIAAgLIAAgNQAAgHAFgFQAFgFAHAAQAPAAADAPQAVgSAdAAQAaABAAAiIAAAJQgCAVgQgBQgRAAAAgQIAAgOQgcAFgNAZIAABBQAAAIgFAEQgGAGgHAAQgIgBgFgFg");
	this.shape_201.setTransform(263.3,104.5);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AgsA5QgWgRAAgeQAAggASgXQATgaAgAAQAWAAAPAIQAUAKAAAVQAAAOgQALQgIAFgWAIIgqAUQAGAGAKAEQAJADAJABQARAAANgIQALgGAGAAQAOAAAAANQAAAPgWAKQgSAHgVAAQgeAAgUgOgAgRgeQgIAIgFARIAdgOQAQgHAKgHQgIgGgOAAQgLABgJAIg");
	this.shape_202.setTransform(237.1,104.4);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AgKBMQgFgFAAgHQAAgPgEgeQgDgbAAgPQAAgIgBgGQgQAJgPAVIgCADIgBAoIAAAKIAAAJQAAAGgGAFQgFAEgIgBQgLAAgEgJQgDgGAAgPIAAgvIgBgUIAAgTQAAgMAEgJQAFgMAKAAQAHAAAGAGQAGAFAAAHIgCAMQAUgXASAAQAUAAAIAPQAIgHAKgDQAJgEAMAAQAaAAAJAZQACAGADAeQAEATAGAyQAAAIgFAFQgGAFgHAAQgQAAgCgPIgFgnIgFgkQgDgXgGgBQgDAAgKAHQgLAFgFAFQAAAPADAaQAEAdAAAPQAAAHgFAFQgFAFgIAAQgGAAgFgFg");
	this.shape_203.setTransform(219.5,104.5);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AAaBAQgRAHgQAAQgTAAgMgIQgPgJgDgSQgFggAAgYQAAgRAEgWQADgOAPAAQAIgBAFAFQAFAFAAAHIgBASIgCATIABAeQABAOADAJIAGACIAGABQANAAARgEIAAgXIAAgUQAAgcACgTQACgPAQAAQAIgBAGAFQAFAFAAAIIgDAuIAAAZIAAAaIABAJIAAAIQAAAHgFAFQgFAFgIgBQgLAAgFgKg");
	this.shape_204.setTransform(201.6,104.5);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AgLBnQgGgFAAgIIAAi0QAAgIAGgEQAFgFAGAAQAIAAAFAFQAFAEAAAIIAACtQAAAZgSAAQgGAAgFgFg");
	this.shape_205.setTransform(190.9,100.7);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AgqA3QgTgTgBgeQgBgbARgXQAUgbAiAAQAaAAAQAVQAOATAAAcQAAAdgRAVQgSAZgdAAQgYAAgSgRgAgSgVQgIAMAAAPQAAAQAJAIQAIAHAJAAQAJAAAJgIQAKgJAAgQQACgogYAAQgOAAgKAPg");
	this.shape_206.setTransform(180,104.5);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AgSA6IgshoIgBgIQgBgHAGgFQAGgFAIAAQAKAAAFAKQAIAQAVA5IASgrIALgdQAGgKALAAQAHAAAGAFQAFAFABAHQgBAFgUAvIgcA5QgBAHgFAEQgEAFgGAAQgMAAgGgOg");
	this.shape_207.setTransform(166.8,104.3);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AgzBEQgEgFAAgHIAAhVIAAgLIAAgNQABgHAEgFQAEgFAIAAQAPAAADAPQAVgSAdAAQAaABAAAiIAAAJQgBAVgRgBQgRAAAAgQIAAgOQgdAFgMAZIAABBQAAAIgFAEQgGAGgHAAQgJgBgEgFg");
	this.shape_208.setTransform(142.1,104.5);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AgqA3QgTgTgBgeQgBgbARgXQAUgbAiAAQAaAAAQAVQAOATAAAcQAAAdgRAVQgSAZgdAAQgYAAgSgRgAgSgVQgIAMAAAPQAAAQAJAIQAIAHAJAAQAJAAAJgIQAKgJAAgQQACgogYAAQgOAAgKAPg");
	this.shape_209.setTransform(128,104.5);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AgSAbQgGgFAAgFQAAgEAJgPIALgVQAEgIAIAAQAHABAFAEQAEAEABAGQAAADgJAPIgKAUQgFAJgIAAQgHABgEgFg");
	this.shape_210.setTransform(103.1,112.3);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AgLBbQgFgFAAgHIAAgOIABgOIgDhCIgYgDQgRgBAAgQQAAgHAFgFQAFgFAIAAIAWABIgBgOIAAgNQAAgHAGgFQAFgFAHAAQASAAAAAhIgBALIAOgBQAPAAAFACQALADAAANQAAAHgFAFQgFAFgIAAIgGAAIgHAAIgNABIADBDIAAAHIAAAHQAAAfgTAAQgFAAgGgFg");
	this.shape_211.setTransform(91.4,102.2);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AAeBgQgDgLgDgTQgCgSAAgMIAAgKIABgKIgBgMQgBgFgFAAQgPAAgKALQgGAHgLATQAAAwgEAJQgFALgMAAQgHAAgGgFQgFgEAAgIIABgHIACgkQgBgaABg8IAAgEIABgVIgBgMIgCgMQAAgHAGgGQAFgEAIAAQANAAAEAOQADAHAAARIgBAbIgBAaQAKgKALgFQAJgEANAAQAWAAAKAMQAHAJACASIABAhIADAaQACAOACAMIABAEQAAAHgFAGQgGAEgIAAQgNAAgEgNg");
	this.shape_212.setTransform(77.5,100.8);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("AhDBUQAAgHAFgFQAFgEAHAAIARACQALACAJAAQARAAAKgMQAJgMACgZQgIAHgIADQgIADgIAAQgbAAgQgRQgQgRgBgYQAAgkAXgWQAWgXAlAAQAMAAAJADQAJADAGAGQARACAAASQgBAJgDAPQgFAfgBAhQgCAqgMATQgSAagqAAQgzAAAAgUgAgTg7QgLAOAAAVQAAAQAFAIQAHAFALAAQAJAAALgKQALgMABgLIAGgoQgFgDgEgBIgIgBQgVAAgMAOg");
	this.shape_213.setTransform(62.1,107.9);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AgPBfQgGgFAAgHIAAgYIAAgZIABgdIABgbQAAgIAFgFQAFgFAIAAQAGAAAFAFQAGAFAAAIIgCAbIgBAdIAAAZIABAYQAAAHgFAFQgFAFgGAAQgIAAgFgFgAgLhCQgGgGAAgIQAAgIAGgGQAGgFAHAAQAIAAAGAFQAGAGAAAIQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_214.setTransform(51.6,101.3);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("AgrA5QgXgRAAgeQAAggARgXQAUgaAfAAQAYAAAOAIQAVAKgBAVQAAAOgQALQgHAFgXAIIgqAUQAGAGAJAEQAKADAJABQARAAANgIQALgGAHAAQANAAAAANQAAAPgWAKQgTAHgUAAQgdAAgUgOgAgQgeQgKAIgFARIAegOQAQgHALgHQgKgGgOAAQgKABgIAIg");
	this.shape_215.setTransform(39.8,104.4);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("AAeBJQgQAAgKggQgDgMgDgfIgEAGIgTAzQgCAFgFAEQgFAIgLABQgGAAgHgLQgIgMgEgSQgEgQgJg1QgCgMAAgHQAAgHAHgFQAFgEAHAAQAOAAAEAOIADASIACASIAFAgQAKgZANgoQAFgRANAAQAOAAAFATQAEAOADAVIAHAjIAVhOQACgLAOAAQAHAAAGAFQAFAFABAHIgBAEQgOAzgOAoQgDAMgKANQgGAIgJAAIgCAAg");
	this.shape_216.setTransform(23.3,104.6);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("AgSAbQgFgFgBgFQAAgEAJgPIAMgVQADgIAIAAQAHABAFAEQAEAEABAGQAAADgJAPIgKAUQgFAJgIAAQgHABgEgFg");
	this.shape_217.setTransform(323.2,72.7);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("AgLBbQgFgFAAgHIAAgOIABgOIgDhCIgYgDQgRgBAAgQQAAgHAFgFQAFgFAIAAIAWABIgBgOIAAgNQAAgHAGgFQAFgFAHAAQASAAAAAhIgBALIAOgBQAPAAAFACQALADAAANQAAAHgFAFQgFAFgIAAIgGAAIgHAAIgMABIACBDIAAAHIAAAHQAAAfgTAAQgFAAgGgFg");
	this.shape_218.setTransform(311.6,62.6);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AAbA8IgEgbQgCgPAAgMIAAgKIABgMIAAgFIAAgGQAAgLgFAAQgLAAgJAPQgLAOgGAVIgBAMIgBAMIgBALIgBALQAAAIgFAFQgFAFgIAAQgIAAgFgFQgFgFAAgIIgBgLIgBgLIACgkIACgiIAAgMIgBgMQAAgHAFgFQAGgFAHAAQASAAABAUIAAACQATgTAUAAQAZAAAJAUQAGAOAAAcIAAAKIAAAGQAAAKADARQADAQAAAKQAAAHgFAFQgGAFgHAAQgRAAgBgQg");
	this.shape_219.setTransform(298.2,64.6);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("AgsA5QgWgRAAgeQAAggASgXQATgaAgAAQAWAAAQAIQATAKABAVQgBAOgQALQgHAFgWAIIgrAUQAHAGAJAEQAJADAJABQASAAAMgIQALgGAGAAQAOAAAAANQAAAPgWAKQgTAHgUAAQgdAAgVgOgAgRgeQgIAIgFARIAdgOQAQgHAKgHQgJgGgNAAQgLABgJAIg");
	this.shape_220.setTransform(283.3,64.8);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("AgKBMQgFgFAAgHQAAgQgEgdQgDgbAAgPQAAgIgBgGQgQAJgPAVIgCADIgBAoIAAAKIAAAJQAAAGgGAFQgFAEgIgBQgLAAgEgJQgDgGAAgPIAAgvIgBgUIAAgTQAAgMAEgJQAFgMAKAAQAHAAAGAGQAGAFAAAHIgCAMQAUgXASAAQAUAAAIAPQAIgHAKgDQAJgEAMAAQAaAAAJAZQACAGADAeQAEATAGAyQAAAIgFAFQgGAFgHAAQgQAAgCgPIgFgnIgFgkQgDgXgGgBQgDAAgKAHQgLAFgFAFQAAAPADAaQAEAdAAAPQAAAHgFAFQgFAFgIAAQgGAAgFgFg");
	this.shape_221.setTransform(265.7,64.9);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("AgsA5QgWgRAAgeQAAggASgXQATgaAfAAQAYAAAPAIQATAKABAVQAAAOgRALQgIAFgVAIIgrAUQAHAGAJAEQAIADAKABQASAAAMgIQALgGAGAAQAOAAAAANQAAAPgWAKQgTAHgUAAQgdAAgVgOgAgRgeQgJAIgEARIAdgOQAQgHAKgHQgJgGgOAAQgKABgJAIg");
	this.shape_222.setTransform(247.2,64.8);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000000").s().p("AgzBEQgEgFAAgHIAAhVIAAgLIAAgNQAAgHAFgFQAFgFAHAAQAPAAADAPQAVgSAdAAQAaABAAAiIAAAJQgCAVgQgBQgRAAAAgQIAAgOQgcAFgNAZIAABBQAAAIgFAEQgGAGgHAAQgIgBgFgFg");
	this.shape_223.setTransform(233.6,64.9);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("AAaBAQgRAHgQAAQgTAAgMgIQgPgJgDgSQgFggAAgYQAAgRAEgWQADgOAPAAQAIgBAFAFQAFAFAAAHIgBASIgCATIABAeQABAOADAJIAGACIAGABQANAAARgEIAAgXIAAgUQAAgcACgTQACgPAQAAQAIgBAGAFQAFAFAAAIIgDAuIAAAZIAAAaIABAJIAAAIQAAAHgFAFQgFAFgIgBQgLAAgFgKg");
	this.shape_224.setTransform(219.7,64.9);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AgkBEQgUgHAAgOQAAgOAQAAQAGAAALAEQAMAEAGAAQAZAAAAgLQAAgHgTgIQgZgMgIgDQgSgNAAgTQAAgaAcgKQAQgFAgAAQANAAAHAEQAIAEAAANQAAAXgMAAQgOAAgCgLIgLgBQgeAAAAAJQAAAFARAJQAaAMAKAGQATAMAAASQAAAXgVALQgRAKgXAAQgSAAgOgGg");
	this.shape_225.setTransform(206.1,64.7);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("AAfA8QgMAGgJADQgJADgFAAQggAAgPgRQgQgSAAghQAAgeAXgXQAYgWAeAAQANAAAQAHQAUAJAAAKQAAAGgDADIgCANIgBATQAAAXAEALIAGANIAFANQAAAGgFAFQgGAFgHAAQgGAAgNgMgAgRgZQgOANAAARQAAARAGAJQAHAKAMgBQAHAAAHgCQAHgDAHgFQgEgeAAgPIAAgKIACgMIgEgCIgEAAQgQAAgNAOg");
	this.shape_226.setTransform(192.3,64.9);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("AgrA5QgXgRAAgeQAAggARgXQAUgaAgAAQAXAAAOAIQAVAKgBAVQAAAOgQALQgIAFgWAIIgqAUQAGAGAJAEQAKADAJABQARAAANgIQALgGAHAAQANAAAAANQAAAPgWAKQgTAHgUAAQgeAAgTgOgAgQgeQgKAIgFARIAegOQAQgHAKgHQgIgGgOAAQgLABgIAIg");
	this.shape_227.setTransform(176.9,64.8);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000000").s().p("AgKBMQgFgFAAgHQAAgQgEgdQgDgbAAgPQAAgIgBgGQgQAJgPAVIgCADIgBAoIAAAKIAAAJQAAAGgGAFQgFAEgIgBQgLAAgEgJQgDgGAAgPIAAgvIgBgUIAAgTQAAgMAEgJQAFgMAKAAQAHAAAGAGQAGAFAAAHIgCAMQAUgXASAAQAUAAAIAPQAIgHAKgDQAJgEAMAAQAaAAAJAZQACAGADAeQAEATAGAyQAAAIgFAFQgGAFgHAAQgQAAgCgPIgFgnIgFgkQgDgXgGgBQgDAAgKAHQgLAFgFAFQAAAPADAaQAEAdAAAPQAAAHgFAFQgFAFgIAAQgGAAgFgFg");
	this.shape_228.setTransform(159.3,64.9);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000000").s().p("AgSAbQgGgFAAgFQAAgEAJgPIALgVQAEgIAIAAQAHABAFAEQAEAEABAGQAAADgJAPIgKAUQgFAJgIAAQgHABgEgFg");
	this.shape_229.setTransform(130.5,72.7);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("AgmBlQgFgFAAgHQAAgMAcg9QgPgagfg4IgHgKQgDgGAAgFQAAgHAFgGQAGgFAHAAQAJAAAFAGQATAZAWAyIASglQAJgUAJgPQAGgJAJAAQAIAAAGAFQAFAFAAAHQAAAEgCAEIgtBcQgRAjgIAWIgIAZQgEAMgNAAQgHAAgGgFg");
	this.shape_230.setTransform(117.6,68.3);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AgrA5QgXgRAAgeQAAggARgXQAUgaAfAAQAXAAAPAIQAVAKAAAVQAAAOgRALQgIAFgVAIIgrAUQAHAGAIAEQAJADAKABQASAAAMgIQALgGAHAAQANAAAAANQAAAPgWAKQgSAHgVAAQgeAAgTgOgAgQgeQgJAIgGARIAegOQAQgHALgHQgKgGgOAAQgKABgIAIg");
	this.shape_231.setTransform(102.5,64.8);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("AAbA8IgEgbQgCgPAAgMIAAgKIABgMIAAgFIAAgGQAAgLgFAAQgLAAgJAPQgLAOgGAVIgBAMIgBAMIgBALIgBALQAAAIgFAFQgFAFgIAAQgIAAgFgFQgFgFAAgIIgBgLIgBgLIACgkIACgiIAAgMIgBgMQAAgHAFgFQAGgFAHAAQASAAABAUIAAACQATgTAUAAQAZAAAJAUQAGAOAAAcIAAAKIAAAGQAAAKADARQADAQAAAKQAAAHgFAFQgGAFgHAAQgRAAgBgQg");
	this.shape_232.setTransform(88.2,64.6);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("AgqA3QgTgTgBgeQgBgbARgXQAUgbAiAAQAaAAAQAVQAOATAAAcQAAAdgRAVQgSAZgdAAQgYAAgSgRgAgSgVQgIAMAAAPQAAAQAJAIQAIAHAJAAQAJAAAJgIQAKgJAAgQQACgogYAAQgOAAgKAPg");
	this.shape_233.setTransform(73.7,64.9);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("AgKBMQgFgFAAgHQAAgQgEgdQgDgbAAgPQAAgIgBgGQgQAJgPAVIgCADIgBAoIAAAKIAAAJQAAAGgGAFQgFAEgIgBQgLAAgEgJQgDgGAAgPIAAgvIgBgUIAAgTQAAgMAEgJQAFgMAKAAQAHAAAGAGQAGAFAAAHIgCAMQAUgXASAAQAUAAAIAPQAIgHAKgDQAJgEAMAAQAaAAAJAZQACAGADAeQAEATAGAyQAAAIgFAFQgGAFgHAAQgQAAgCgPIgFgnIgFgkQgDgXgGgBQgDAAgKAHQgLAFgFAFQAAAPADAaQAEAdAAAPQAAAHgFAFQgFAFgIAAQgGAAgFgFg");
	this.shape_234.setTransform(56.6,64.9);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AgSAbQgGgFABgFQAAgEAIgPIALgVQAEgIAIAAQAHABAFAEQAFAEAAAGQAAADgJAPIgLAUQgEAJgIAAQgHABgEgFg");
	this.shape_235.setTransform(363.9,33.1);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AgsA5QgWgRAAgeQAAggASgXQATgaAgAAQAWAAAQAIQATAKABAVQgBAOgQALQgHAFgWAIIgrAUQAHAGAJAEQAJADAJABQASAAAMgIQALgGAGAAQAOAAAAANQAAAPgWAKQgTAHgUAAQgdAAgVgOgAgRgeQgIAIgFARIAdgOQAQgHAKgHQgJgGgNAAQgLABgJAIg");
	this.shape_236.setTransform(350.8,25.2);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("AgKBMQgFgFAAgHQAAgPgEgeQgDgbAAgPQAAgIgBgGQgQAJgPAVIgCADIgBAoIAAAKIAAAJQAAAGgGAFQgFAEgIgBQgLAAgEgJQgDgGAAgPIAAgvIgBgUIAAgTQAAgMAEgJQAFgMAKAAQAHAAAGAGQAGAFAAAHIgCAMQAUgXASAAQAUAAAIAPQAIgHAKgDQAJgEAMAAQAaAAAJAZQACAGADAeQAEATAGAyQAAAIgFAFQgGAFgHAAQgQAAgCgPIgFgnIgFgkQgDgXgGgBQgDAAgKAHQgLAFgFAFQAAAPADAaQAEAdAAAPQAAAHgFAFQgFAFgIAAQgGAAgFgFg");
	this.shape_237.setTransform(333.2,25.3);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("AgPBfQgGgFAAgHIAAgYIAAgZIABgdIABgbQAAgIAFgFQAFgFAIAAQAGAAAFAFQAGAFAAAIIgCAbIgBAdIAAAZIABAYQAAAHgFAFQgFAFgGAAQgIAAgFgFgAgLhCQgGgGAAgIQAAgIAGgGQAGgFAHAAQAIAAAGAFQAGAGAAAIQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_238.setTransform(319,22.1);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AgKBbQgGgFgBgHIABgOIAAgOIgChCIgZgDQgQgBAAgQQAAgHAFgFQAFgFAIAAIAWABIgBgOIAAgNQAAgHAGgFQAFgFAHAAQASAAAAAhIgBALIAOgBQAPAAAGACQAKADAAANQAAAHgFAFQgFAFgIAAIgHAAIgGAAIgNABIADBDIAAAHIAAAHQAAAfgTAAQgGAAgEgFg");
	this.shape_239.setTransform(308.6,23);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AgYBvQgFgFAAgHIAAgDQADgUAAgQIAAhAIgJABIgHABQgJAAgFgFQgFgFAAgHQAAgNANgEQAGgBARAAIACgQQADgdANgPQANgSAgAAQAYAAAAASQAAARgWAAQgRAAgHALQgFAJgCARIgBAEIAagBQAZAAAAAQQAAASgbgBQgIAAgRABIAAAiIAAAjQAAAZgDAOQgCAOgNgBQgHAAgGgEg");
	this.shape_240.setTransform(283.5,22.3);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("AgqA3QgTgTgBgeQgBgbARgXQAUgbAiAAQAaAAAQAVQAOATAAAcQAAAdgRAVQgSAZgdAAQgYAAgSgRgAgSgVQgIAMAAAPQAAAQAJAIQAIAHAJAAQAJAAAJgIQAKgJAAgQQACgogYAAQgOAAgKAPg");
	this.shape_241.setTransform(269.5,25.3);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AgKBMQgFgFAAgHQAAgPgEgeQgDgbAAgPQAAgIgBgGQgQAJgPAVIgCADIgBAoIAAAKIAAAJQAAAGgGAFQgFAEgIgBQgLAAgEgJQgDgGAAgPIAAgvIgBgUIAAgTQAAgMAEgJQAFgMAKAAQAHAAAGAGQAGAFAAAHIgCAMQAUgXASAAQAUAAAIAPQAIgHAKgDQAJgEAMAAQAaAAAJAZQACAGADAeQAEATAGAyQAAAIgFAFQgGAFgHAAQgQAAgCgPIgFgnIgFgkQgDgXgGgBQgDAAgKAHQgLAFgFAFQAAAPADAaQAEAdAAAPQAAAHgFAFQgFAFgIAAQgGAAgFgFg");
	this.shape_242.setTransform(240.6,25.3);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000000").s().p("AAaBAQgRAHgQAAQgTAAgMgIQgPgJgDgSQgFggAAgYQAAgRAEgWQADgOAPAAQAIgBAFAFQAFAFAAAHIgBASIgCATIABAeQABAOADAJIAGACIAGABQANAAARgEIAAgXIAAgUQAAgcACgTQACgPAQAAQAIgBAGAFQAFAFAAAIIgDAuIAAAZIAAAaIABAJIAAAIQAAAHgFAFQgFAFgIgBQgLAAgFgKg");
	this.shape_243.setTransform(222.7,25.3);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("AgkBEQgUgHAAgOQAAgOAQAAQAGAAALAEQAMAEAGAAQAZAAAAgLQAAgHgTgIQgZgMgIgDQgSgNAAgTQAAgaAcgKQAQgFAgAAQANAAAHAEQAIAEAAANQAAAXgMAAQgOAAgCgLIgLgBQgeAAAAAJQAAAFARAJQAaAMAKAGQATAMAAASQAAAXgVALQgRAKgXAAQgSAAgOgGg");
	this.shape_244.setTransform(209.1,25.1);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#000000").s().p("AgLBnQgGgFAAgIIAAi0QAAgIAGgEQAFgFAGAAQAIAAAFAFQAFAEAAAIIAACtQAAAZgSAAQgGAAgFgFg");
	this.shape_245.setTransform(187.1,21.5);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#000000").s().p("AAfA8QgMAGgJADQgJADgFAAQggAAgPgRQgQgSAAghQAAgeAXgXQAYgWAeAAQANAAAQAHQAUAJAAAKQAAAGgDADIgCANIgBATQAAAXAEALIAGANIAFANQAAAGgFAFQgGAFgHAAQgGAAgNgMgAgRgZQgOANAAARQAAARAGAJQAHAKAMgBQAHAAAHgCQAHgDAHgFQgEgeAAgPIAAgKIACgMIgEgCIgEgBQgQABgNAOg");
	this.shape_246.setTransform(176.2,25.3);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000000").s().p("AgLBbQgFgFAAgHIAAgOIABgOIgDhCIgYgDQgRgBAAgQQAAgHAFgFQAFgFAHAAIAXABIgBgOIAAgNQAAgHAFgFQAGgFAHAAQASAAAAAhIAAALIANgBQAPAAAFACQALADAAANQAAAHgFAFQgFAFgIAAIgGAAIgHAAIgMABIACBDIAAAHIAAAHQAAAfgTAAQgFAAgGgFg");
	this.shape_247.setTransform(162.3,23);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#000000").s().p("AgqA3QgTgTgBgeQgBgbARgXQAUgbAiAAQAaAAAQAVQAOATAAAcQAAAdgRAVQgSAZgdAAQgYAAgSgRgAgSgVQgIAMAAAPQAAAQAJAIQAIAHAJAAQAJAAAJgIQAKgJAAgQQACgogYAAQgOAAgKAPg");
	this.shape_248.setTransform(148.6,25.3);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#000000").s().p("AgKBbQgHgFABgHIAAgOIAAgOIgChCIgZgDQgQgBAAgQQAAgHAFgFQAFgFAHAAIAXABIAAgOIgBgNQAAgHAFgFQAGgFAIAAQARAAAAAhIAAALIANgBQAPAAAFACQALADAAANQAAAHgFAFQgFAFgIAAIgGAAIgHAAIgMABIACBDIAAAHIAAAHQAAAfgTAAQgFAAgFgFg");
	this.shape_249.setTransform(135.4,23);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#000000").s().p("AAuBKQgHgPgFgUIggACQgTACgLACQgGAOgPAeQgGAJgKAAQgIAAgFgFQgGgFAAgHQAAgHATgnIgCgIQABgGAMgDQATgfAXgjQAfgyAHAAQAPAAAFASIAIAqIAUBVIAHASQAEAKAAAHQAAAHgFAFQgGAFgHAAQgLAAgKgZgAgJAMIAQgCIATgBIgJgrIgaAug");
	this.shape_250.setTransform(107.3,22.2);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000000").s().p("AgSAjQABgIAFgEQAGgFAGAAQAUAAAAAfQAAAHgGAFQgFAFgIAAQgSAAgBgfgAgNgbQgFgEAAgHIgBgFIAAgFQAAgHAGgFQAFgFAIAAQARAAABAbQgBAHgFAEQgFAFgHABQgIgBgFgFg");
	this.shape_251.setTransform(80.2,23.5);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#000000").s().p("Ag8BkQgOgNAAgqQAAgSACghQADgkAAgRIgCgOIgBgNQAAgUASAAQAGAAAFADQAPgEAOgCQAOgCAKAAQAiAAAUAIQALAEABANQAAAGgGAGQgEAGgJAAIgGgBQgUgGgVAAIgTACIgYAEIgCA1IAygFIAggDQAIAAAFAFQAGAFAAAIQAAAOgRACIggADIg2AFIgBAbQAAAaADADQACACAPAAIAWAAIAagBIAHgBIAHAAQAJAAAFAEQAGAFAAAJQAAAOgPADQgOADgnAAQgrAAgNgMg");
	this.shape_252.setTransform(66.1,21.8);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#000000").s().p("AhFBPIADgqQADg3AAhGQAAgHAGgGQAFgGAHABQAIgBAGAGQAFAGAAAHQAABGgDA5IgDAhQAfgBAvgPIAGAAQAIgBAFAHQAFAFAAAHQAAALgLAFQgQAHggAFQgcAFgUABQggAAAAgdg");
	this.shape_253.setTransform(50.3,22.2);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#000000").s().p("Ag0BaQgigbAAhBIAAgSIABgTIAAgPIAAgQQAAgKAEgJQAFgMAKAAQAHAAAFAEQAGAFAAAIIAAAWIAAAXIgBASIAAATQAAASAEARQAGAVALAIQAFAEAVAAQAhABAMg8QAGgdAAg4QAAgHAFgHQAGgJALAAQAIAAAFAGQADAFAAAGQAAA0gEAdQgIArgWAeQgJANgOAJQgQAKgQAAQgiAAgQgMg");
	this.shape_254.setTransform(32.3,22.4);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#000000").s().p("AhHBiQgFgFAAgIIABgdIAAgeIAAhoQAAgJAFgHQAHgJALABIAhADQATACALAHQA4AcAAAqQAAARgMALQgLAOgYAJQAjATARAVQAFAFAAAGQAAAIgGAFQgFAFgHAAQgIAAgGgFQgogmgtgOIABAqQAAAIgFAFQgGAFgHAAQgIAAgGgFgAgnADIAFABQAhAAANgGQAHgEAFgGQAGgFAAgDQAAgPgSgOQgRgNgTgCIgPgBg");
	this.shape_255.setTransform(14.2,21.8);

	this.instance_4 = new lib.static_rule1("synched",0);
	this.instance_4.setTransform(187.7,77.5);
	this.instance_4._off = true;

	this.text = new cjs.Text("RULE: A total sum of time, money, measurement, weight, or volume requires a singular verb. ", "bold 14px 'Comic Sans MS'");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 371;
	this.text.setTransform(131.9,-110.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180}]}).to({state:[{t:this.instance_4}]},75).to({state:[{t:this.text}]},5).wait(365));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(75).to({_off:false},0).to({_off:true,x:131.9,y:-110.8,text:"RULE: A total sum of time, money, measurement, weight, or volume requires a singular verb. ",font:NaN,color:NaN,textAlign:NaN,lineHeight:21.6,lineWidth:371},5).wait(365));

	// block
	this.instance_5 = new lib.static_whitebox("synched",0);
	this.instance_5.setTransform(190.3,82.3,1.18,1.388,0,0,0,202.5,67.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(75).to({regY:-4.2,scaleX:1,x:186.8,y:-17.6},0).to({regY:0.8,scaleY:0.13,y:-105.6,alpha:0},5).wait(5).to({regY:150,y:-86.4},0).to({regY:136.4,scaleY:0.74,x:186.5,y:224,alpha:1},5).wait(355));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.7,-11.8,477.9,188.1);


// stage content:



(lib.verbNum_singular = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{singular:0,scene2_restart:448});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
		playSound("atotalsumoftime");
		this.btn_menu.addEventListener("click", openMenu.bind(this));
		this.btn_goNext.addEventListener("click", openNext.bind(this));
		this.btn_goBack.addEventListener("click", openPrev.bind(this));
		
		
		function openMenu(){
		
		 window.open ("../menu/menu.html","_self");
		}
		
		
		function openNext(){
		
		 window.open ("verbNum_singularPlural.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("verbNum_Intro.html","_self");
		}
	}
	this.frame_58 = function() {
		playSound("departure");
	}
	this.frame_73 = function() {
		playSound("f_blip");
	}
	this.frame_183 = function() {
		playSound("f_blip");
	}
	this.frame_273 = function() {
		playSound("f_blip");
	}
	this.frame_363 = function() {
		playSound("f_blip");
	}
	this.frame_445 = function() {
		playSound("f_blip");
	}
	this.frame_447 = function() {
		/* _root.gonow = true;*/
	}
	this.frame_456 = function() {
		this.gotoAndPlay("scene2_restart");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(58).call(this.frame_58).wait(15).call(this.frame_73).wait(110).call(this.frame_183).wait(90).call(this.frame_273).wait(90).call(this.frame_363).wait(82).call(this.frame_445).wait(2).call(this.frame_447).wait(9).call(this.frame_456).wait(1));

	// content
	this.instance = new lib.Content_scene2();
	this.instance.setTransform(271.7,184.5,1,1,0,0,0,187.7,77.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(457));

	// main
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

	this.instance_2 = new lib.Bk("synched",0);
	this.instance_2.setTransform(275,191);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.btn_goNext},{t:this.btn_goBack},{t:this.instance_1},{t:this.btn_menu}]}).wait(457));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(284.2,201.8,537.1,401.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;