(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 15,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"sounds/High_Screaming_Gtr.mp3", id:"High_Screaming_Gtr"},
		{src:"sounds/SEClick.mp3", id:"SEClick"},
		{src:"sounds/SEStop.mp3", id:"SEStop"}
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



(lib.twiggslegsstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#121212").s().p("AApCJIgBgBQAVAFALgNIADgFIAAAGIAAACQgHAIgNAAQgGAAgIgCgABaB8IABABIgEAEIADgFgABeCAIADAAIgDAAgABmBzIgEgDIgIAGIgNgCIgHgFIgUAHIgCgJQhWgChKgtQAchoAyhgIgBABQgDAGAGgBQgzBfgSBmQBXAoBggFIACAFIAdAKIgKAJQAFgFgGgEg");
	this.shape.setTransform(9.2,21.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF99").s().p("ABRAgIABAAIgBABIAAgBgAhRgbIAAgFIAOAbg");
	this.shape_1.setTransform(4.1,-8.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3A3A3A").s().p("AAAAAIABAAIAAAAg");
	this.shape_2.setTransform(5.6,-3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAFGPIgBgCIgCgFIAEgLIADAPIAIACIAOgKIANACIAIgHIADACQgIAPgRgFIgNAIgACVFaIAAgCIAMAAIAEgEIADADIAAAAIgNAHgAAlBMIABgBIBCh/IABgBIADgMIACAKIhGCIIgBAAQgEAAACgFgAAsg6IAGABIgLAfIgDAAIADAAIgfBGIgEAAgAigmNIAGgFIDbAJIgHAAIjTgCIgIAYIABgOIgCAPIAAACIgFADQgDgQAKgQg");
	this.shape_3.setTransform(1.8,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC99").s().p("AALFtIADgNIAJgEIAGACIATgLIAAgHIAPgGIAIAIIgGALIgKABIgBAGIgIAHIgNgCIgOAKgAhyFIQgvAHgTgeIADgKIAhgVQBJiwA2i1Ihdi4IgDgFIgihFIAAgBQA8gbA9AUIAJAFQAuB8ARCDIgoBnIhfD+IAsAOQgSgHgRgHIBaj/IAfhFIAAAAIALggQgQh+gsh5IBMggIAlD4IgCABIACAAIABAiIAAABIhCB/QgwBhgcBqQBIAtBYACIACAJIAUgIIAHAFIANACIAIgGIAEADQAGAEgFAFIgGAEIgDAAIgDgCIgBgCIgDAFIgMAAIAAgGIgDAFQgLANgUgFIgFgFQgHgegfARIgKAFQghgDgfgIIBBAUIAhgMIAHAMIgNAOIgmgGIg1AZQg0ghg/AMg");
	this.shape_4.setTransform(1.6,2.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AhqAfIgJgsIAAgBIABgCIAIgYIDTADIALAfIgIAMIhHAjQhDgphMAfg");
	this.shape_5.setTransform(-2.9,-35.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0B0B0B").s().p("AAuF8IgEALQg8grhJAOQgpAGgSghIAGgFIACAFQATAdAvgGQA/gMA0AhIA1gZIAnAGIAMgOIgHgMIghAMIhCgUQAgAHAhAEIAKgGQAfgQAHAeIgBACQgVAaghAMIgDgDIABgHIALAAIAFgLIgIgIIgPAGIABAHIgTALIgGgCIgJAEIgDANgAhjEOQA9iiA0ifIgSgpIgNgbIg3h2IBbC3Qg0C1hJCwIghAWQAcgXAMgggAgzEqIBfj+IAEgBIhaD+QARAIASAHgACQg2IgBgjIAAAAIglj4IhOAfQAuB5AQB/IgGgBQgRiEgwh7IgJgFQg7gVg7AcIgNgKIgGgsIAFgDIAJAuQBMgiBDArIBHgjIAIgOIAqEzIgCgKIgEAMIAAAAIgBAAgAhRj2Igdg7IACgGIAhBFgABimKIAHAAIAEAfgAh3mCIgCAOIgBABg");
	this.shape_6.setTransform(-2.2,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.3,-40.6,37.9,80.8);


(lib.twiggsheadstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#252525").s().p("AAAAAIAAAAIAAABg");
	this.shape.setTransform(-5.8,3.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCFCFC").s().p("AgPAUIgLgUQALgQAQgFQALgCAGACIgLAEQgHALAGAIIAJAEIAMgFQgKAWgWAAIgKgDg");
	this.shape_1.setTransform(5.4,2.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F9F9F9").s().p("AgLASQgPABABgXQAKgOATgCQgDADAAAEQgBAPARgBQAHAAACgDQABANgPAKIgDAAQgFgEgPABg");
	this.shape_2.setTransform(11.6,1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C6FFFF").s().p("AAAAAIAAAAIABAAIgBABIAAgBg");
	this.shape_3.setTransform(11.8,-1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0B0B0B").s().p("AAEBbIAFgMIABAMgAg3BbQgPgbgZgTIAFABIAFAFQAUARAKAXgAASA5QAeAIAUgaQARgTACgYQABgLgEgLQgBgGgDgGQAYATgLAdIgFAKQgcApgyAPgAgQAuQgkgNgBglQAOAgAkANQAhgGAagWQgZAegmAHIgJgEgAAdgKIAUgHIACgVQgYACgTANQgFAEgFACQgOAFgOgDIgQgUIgJgCIABAAIgUgCIAFgBIAJgHIAlgZIArABIAhgSIADAAIAFgBIAPABQAGAGACAIQACASgLAQIgQAOQAAAHgFAEQgHAFgHAAIgIACIgDgBgAgGhDQgTAFgLAQIALAWIALAEQAVAAAKgWIACgCQAHgSgSgFIgHgBIgHABgAA+gmIACAAQAPgKAAgPIAAgBQAIgSgUgFIgGACQgDABgCADQgUACgKAOQgCAZAQgBIAGAAQAMAAAEADg");
	this.shape_4.setTransform(6.3,7.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC99").s().p("AgNBsQgQgmgigWQgRgMgVgHQgGgCgEgEIgIgLIAEgJIAkgBIgRgKIAJgIIABADIAAgEIAugFIAUACIgBABIAIACIAOARQAOADAPgDQAGgCAFgEQATgMAYgCIgCAUIgUAGQAGABAFgCQAIgBAGgEQAGgCAAgHIAPgOIAFADQADAFACAGQADAJgBAMQgCAZgQAUQgVAZgegHIgIATIAAAAIAAACIgFAMgAAQBAIAIADQApgHAZgdQgaAWgjAFQgigNgOgiQABAnAiAOgAgogeIgBgHIgHgIIADgHQAYABAVgGQAkgOAOgkIAOAHQAQAKAIAQIgBABIAAACIghASIgtgBIgkAZg");
	this.shape_5.setTransform(3,5.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0A0A0A").s().p("AgDAAIADgCIAEgBIgGAHg");
	this.shape_6.setTransform(9,-9.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF6400").s().p("Ah6BiIgFgDIAAgCQgBgRAJgQQAIgQAPgDIgFALQgJAVAKAVIgMAJgAhTBjIgCgDIgJAAQgFgJACgJQABgOAIgMIAMAeIAJAIIAAAEIgOAGgAhGBQQgCgGgBgGQAAgGABgGIAIgCIAAgFIAHALIAOALIgUANgAiNAnQAHgIAHgGQAFgEAGgCIAbAOQgRAAgNAPQgKAMgIAOgAg3A4QgGgKgMgDIABgbIAGgHIAIAMIAAgDQABgPAKgHIAHAZIABgfQAlgbArgGQAMACADAKQAQAEAJANQAFAIgEAGQgOAagbAJQgPAEgPABQgMAEgPABIAJAFIgDAIIgqACIgDgEgABSgSIgGgPQASACANAJQANAJAEANIgEAIgACAhQIAFABIACAEQgjANgfASQAVgfAmgFgABZhaQAXgQAaAFIAEALIgGAHIgPgIIgTAFIgmAlQAGgaATgPg");
	this.shape_7.setTransform(-0.9,-5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAFCjQgIgXgUgRIgFgFQgMgRgTgEQgZgHgQgUIAJgUIAOgGIAAgEIgJgIIgMgeQgIAMgBAOQgCAJAFAJIAJAAIACADQAAABAAAAQAAABgBAAQAAAAAAgBQAAAAgBAAQgKAAgFgGQgKgVAJgVIAFgJQgPADgIAOQgJAQABARIgGgJQgJgPgCgRQgDgTARgQIAWgCIAbAVQAJgsAogSQAegOAcgNQARgHAMANQACgeATgUQAPgPAXAAQAJAAAIADQAFACADAEIAEAHQACAGgDAAIgEgLQgagFgXAQQgTAPgGAaIAmglIAaAGQgmAFgVAfQAfgSAjgNIgCgEIAhAPIAAABQglgKgfAWIgEACIgJAGQAeAOAPAbIgFAOIAIAUIgFABIgCgCQgHgQgQgLIgOgHQgOAlgmANQgWAFgWgBIgJgEQAPgBAMgEQAPgBAPgEQAbgJAOgaQAEgIgFgIQgJgNgQgEQgDgKgMgCQgrAGglAbIgBAhIgHgbQgKAJgBAPIAAADIgIgMIgGAHIgBAbQAMADAGAIIADAEIAqgCIAIAIIABAGIALABIgHAHIgFABIgtAFIgCABIgIAHIARAMIglACIgEAJIAIAKQAFAEAGADQAUAHARALQAiAXAOAmgAhKAEIgIACQgBAGAAAGQABAGACAGIAHAEIAUgNIgOgLIgHgKgAiJgXQgHAGgHAIIAEAhQAIgOAKgKQANgPARAAIgbgOQgGACgFAEgABIhEIAmAcIAEgKQgEgNgNgJQgNgJgSgCgAh+A0IgGgEIAKAFIgCAAIgCgBgAA7AdQgJgLAKgLIAKgEQASAFgHASIgCACIgLAFgABzgCQABgEACgDQACgDADgBIAGgCQAUAFgIAQIAAABQgDAFgGAAIgCAAQgQAAABgOg");
	this.shape_8.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-16.3,31.5,32.7);


(lib.twiggsbodystill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiFCVIADABQAAAAABAAQAAABABAAQAAAAgBABQAAAAAAAAgABnBvIAJgEIAPAAIgSheIgBAEIgBAEIAAgCIgBADIAAAAIgBABIABgBIgBABIgMAlIgFAEIgGgDIAYg6IAFgDIAAAGQAFAAABAHQACARAGASQAJAdAAAfIgDAEgAhbA0QAAAAgBgBQAAAAAAgBQAAAAAAAAQABgBAAAAIACgBIAJgEQAAAEgDADQgDACgEAAIgBgBgAhgiVIgBgCIAIAAIAAAAQgCAEgCAAIgDgCg");
	this.shape.setTransform(1.9,-1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("Ag1BYIgCAAIgIADIgDABIgPhHIAZgRIAEgWIACgVIABgKQAAgYgBgYQAQAgAPAiQADAFAGAEQAIAGAJgFQAFgCAEgFQAEgFADgIQACgFgBgGIgDgZIAwApIgKAXIAWBPIgnAgg");
	this.shape_1.setTransform(-0.6,-6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("AgzCdIB9g7IADAMIgLAcQgdATgkAEQgIACgKAAQgRAAgRgGgAilhzQAJgKALgIQANgKAPgDQAXgIAXAJQAHAMAEAOQADAIABAIIAAAKIgCAVQgGASgRAOIgOgcQAGBaAjBTQAWgBARgKIAPgMIAyAMQgeAWghAQIgjANQgTAFgUAEQg8iBgSiMgACDBgIgCgEQhPgEhKgPIgpgKIgGgUQAEAAADgDQADgDAAgEIACAAIAhAGIgKAAICQAYIAFgFIgBgIIAMglIABgBIAAgBIABgBIABgEIABgEIASBfgAhBBKIAkADIgMAIIgKADQgLgDgDgLgAApAtIAvggIgchTIAOgLQAUgOAYAIIghAWIACAAIAtgOIgeAZQADAAADgBQAKgDAIgFIAEgCIAMgBIgTAPQAOgHARABIAMAAQgEAMgLAEIgTAJIgHAaIgYA4gAhIAlIADAAIgDACgAgdhvQgFgMgBgMQAAgHgFgFQgPgMgPgCIAAgBIA1AAIACALIAMACQAWAegLAlQgbgBgKgcgAAciAQgIgIgDgMQADgDAFAAQAHgCAIAAIAHACIAMANQAPAUAFAZQgbgPgYgUg");
	this.shape_2.setTransform(0,-0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0B0B0B").s().p("AgRCnQgfgBgdgIQgUgGgNgPQABAAAAgBQAAAAAAAAQAAgBAAAAQgBAAgBgBIgCgBQgRg/gUg/QgXhFAGhKIAOgRIAbgFIAkgFQALACACgGIABADQAEAEACgGQAQACAOAMQAFAFABAHQABAMAEAMQAKAcAbABQAMglgWgeIgNgCIgBgLIAFAAIAFAFQAUgCAWAAQALAAALACIAiA7QANAAAPAFQAbALAWAWQAAAOgIAKQgMAMgQgFIgCAbIAAgJIgGAGIAIgbIATgJQAKgEAEgMIgMAAQgQgBgPAHIAUgPIgNABIgDACQgJAFgJADQgDABgEAAIAfgZIguAOIgCAAIAigWQgZgIgUAOIgNALIAcBTIgwAgIA8AFIAGAEIAFgEIABAIIgFAFIiQgYIAKAAIghgFIBfAKIAoggIgXhPIAKgXIgwgpIADAZQABAGgCAFQgCAHgFAGQgDAFgFABQgKAGgIgHQgFgDgDgGQgQghgQggQABAYAAAYQgBgIgDgIQgFgOgGgMQgYgJgWAIQgQADgMAKQgLAIgJAKQARCMA8CBQAUgEAUgFIAjgNQAggQAegWIgygMIgPAMQgRAKgVABQgjhTgGhaIANAcQASgOAGgSIgFAYIgYAQIAPBGIAAABQgBAAAAABQAAAAAAAAQAAABAAAAQAAAAABABIABABIAGAUIAoAKQBLAPBPAEIABAEIgJAEIgkgBIgNArQgnAfgwAAIgDgBgAgyCYQAaAJAZgFQAkgEAdgTIAMgcIgEgMgAgyBTIAJgDIANgIIgkgDQADALALADgAAZicQgEAAgEADQAEAMAIAIQAYAUAaAPQgFgZgPgUIgMgNIgHgCIgCAAQgHAAgGACgAB9AGIAAACIAAAAIAAgCgAB9AGIABgDIAAACIAAABg");
	this.shape_3.setTransform(0,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-16.9,34,33.6);


(lib.stacelegstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0D0D0D").s().p("AgEAAIADgBIABgBIARgIIgEAIIgdANg");
	this.shape.setTransform(-14.9,37.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0C0C0C").s().p("AAABeQAIgdgBgcQgBghgKgdIgDgKQgDg1ABg0IADAVQACA9AIA1QAPBPgTA+IgBACIgHADQAEgYAEgXg");
	this.shape_1.setTransform(-8.2,17.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_2.setTransform(-0.5,-10.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#111111").s().p("AgBgFIACAFIABAGg");
	this.shape_3.setTransform(-9.9,-12.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#232323").s().p("AAAAAIAAAAIABAAIgBAAg");
	this.shape_4.setTransform(13.1,39.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#151515").s().p("Ag/gWIADAAIB5AqIADADQhFgRg6gcg");
	this.shape_5.setTransform(9.8,32.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0F0F0F").s().p("Ag4D5IgDgCIAjggIAIgDIACgEIAQgLIgPgeIANhvQAGg6ABg7IAGhQIABAMQACADACAAIgICJQgKBMAHBMQACAUAHAUIAsAKIgEAEIgZgEQgWADgUAFQgZAIgSAWQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAAAgBAAgAASh+IAAAAgAAOipIgEhRIABAAIAAADQABAAAAABQABAAAAAAQAAABABAAQAAAAABAAIABAmIACgqIACATQADA1gFAzg");
	this.shape_6.setTransform(-1.6,14.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#101010").s().p("AgEDCIgIgCIgJgLIAWjDQADAAACgCIgRDJIAKAJIgCAAIgBAAgAADhZQgDg2AVgyIABAAIgSBsIgBgEg");
	this.shape_7.setTransform(3.9,10.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3A3A3A").s().p("AAAAAIAAAAIAAABIAAgBg");
	this.shape_8.setTransform(6.1,-8.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCC99").s().p("AigFZIgEgPIAfgPQARgEAKgQIADgDQAOgQAIgUIABgCQAVg9gPhSQgKg1gCg6QgCggAOgcQAFgJABgLQADgUAAgVQgRgrgNguQgGgUgNgRIgBgEIgEgFIgCgEQgGgNgIgNQgSgdgCgkIADgBQBBAWBEgKIAIAGQAOBEgEBGIgBAhIgBACIADBQIAAAdIgFBOQgCA6gHA9IgOBuIARAfIgSAKIgCAEIgHADIgkAgQgWAQgcAFIgHABQgRAAgMgMgABoFGIgJgHIgFAAQgHgKgMgDIgagEIgsgLQgEgUgDgUQgJhMANhMIAFiIQAGg0gEg0IgBgUIgCgHIABhJIgFhMIgBgMIAAgDIgCgHIBcgRQAEAzgFAyQgEAbgFAaIgPA7IgBADQgVAxADA3IABAEQAFAcgLAWQgCAGACAFIADAIIgYDEIAJAMIAIACQA6AeBHARIACAKQgPAWgZAJQgNgBgIgIgAheiyIgBgGIABACIABABIAEANg");
	this.shape_9.setTransform(-0.1,5.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0E0E0E").s().p("AAJAbIACgGIACAPgAgMggIAAgDIACAAIAUAyIgFABIgRgwg");
	this.shape_10.setTransform(8.5,-32.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0B0B0B").s().p("AgpCpIgOgqIgGgOIgBgBIgKgmIgjg/IASAXIACAEIAFAKQANAQAGAUQANAuARArgAAdCIIgBgEIAAgBIACghQAFhGgQhBIABgHIAIAYIAHBJIgBBJIgCALIAAAAQgBAAAAAAQAAAAgBAAQAAAAgBgBQAAAAAAAAgABhiNIAFgGIAFAZIgCAAIAAADgABbilIgLAAIgYgGIAlgBIAHAZg");
	this.shape_11.setTransform(-3.4,-24);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AiaGhIgRgZIACgJIAPgGIgLAMIAEAPQAPAOAVgDQAbgFAWgQIAEACQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAAAQgRATgaABIgogBgAB2GNQglgTgpgOIAEgEIAaAFQAMADAHAKIAEAAIAJAHQAJAIANABQAYgJAPgWIgBgKIgEgDQAKABADAJIABAEQgNAdgdAHIAAAAQgGgBgGgCgAiVF1IABAAIgDACIACgCgAiDFtIASgOQAQgMAIgUIAHgEQgIAUgPAQIgCADQgKAQgRAEgAAoBgIgEgIQgCgFACgGQALgYgFgcIAThrIAAgCIAOg7QAGgaADgbQAFgygDgzIhdARIACAHIAAACIABABIAAAMIgHgYIgCAHIgHgGQhEAKhBgWIgEgCIAAACQADAlASAdQAHANAGANIgRgYIgLghQgXhJAOhOIALgIIAxAEIBDAMIA3gHIAZAGIgcAEQg4AOg6gQQgbgGgcAAIgDAFIgEAIQgHApAGAqIADAIQBDAeBGgWIgCgeIAKgDIACAjIBigPIAFgBIABAGIgBAGIADApQABAcgFAcIgOBJIgXBtIgCADQABA2gLA1QgBABAAAAQgBABAAAAQgBAAAAAAQgBABgBAAIAAAAgAhaAjQgBggANgdQAIgTgEgWIAIAFQAAAVgEAUQgBALgFAJQgOAaADAfgAAAAQIgCgLIACgbIABApQgBAAAAgDgAAAhiIAAgLIACAHIgCAqgAhahtIgFgNIAGAOIgBgBgAhhh9IgDgHIgGgdIAKAlIgBgBgAh5jFIAFAFIAAAEg");
	this.shape_12.setTransform(0,-0.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFF00").s().p("AAdBDIAAgCIABACIgBAAgAh4AkIgCgIQgHgoAIgpIADgIIAEgFQAcAAAbAGQA5AQA5gPIAcgEIAKAAIAJASIACAAIgFAGIAIAWIATAvIhkAQIgCgkIgLAEIADAeQgcAJgdAAQgoAAgngRgAh5AqIAEACIgEABIAAgDg");
	this.shape_13.setTransform(-3.6,-34.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.3,-42.1,34.6,83.8);


(lib.staceheadstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AgNAHIALgaIAPARIABAAQgJAJgFANg");
	this.shape.setTransform(-7.5,-8.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0C0C0C").s().p("AgagSQAMASAVAIQAKAEAJACQAAAAABABQAAAAAAAAQAAAAgBABQAAAAAAAAIgSADQgagLgIgag");
	this.shape_1.setTransform(7.6,1.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#090909").s().p("AAAgBIAAABIAAACg");
	this.shape_2.setTransform(11.5,-0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#202020").s().p("AADAFIAHgBIAAACIgHAAgAgGACIgDgHIAJALgAAAAAIAKAAIgEABIgEACIgCgDg");
	this.shape_3.setTransform(11.2,-5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#242424").s().p("AgDAAIAAAAQADAAAFAAg");
	this.shape_4.setTransform(12.8,-4.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4C4C4C").s().p("AgDgCIABgBIAGAHg");
	this.shape_5.setTransform(7.6,-3.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#111111").s().p("AgEgGIAJgCIgCAPIgDACg");
	this.shape_6.setTransform(8.9,-4.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5D5D5D").s().p("AAAAAIABAAIgBABg");
	this.shape_7.setTransform(0,-11.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#393939").s().p("AAAAAIAAAAIAAABIAAgBg");
	this.shape_8.setTransform(9.2,-7.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FDFDFD").s().p("AgWAQIgDgZIALgKQAIgJADALIABAEIAAgDIAEAHIADAJIADAHIgKAIIACgPIgLAAIAGARIgJAHIgIgIgAAQAFIgBgBIAMABg");
	this.shape_9.setTransform(9.6,-5.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1C1C1C").s().p("AgCgCQACgDAFAAIABACIgLAJQAAgGADgCg");
	this.shape_10.setTransform(6.9,-9.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFCC99").s().p("Ag6BxQADgRABgRQAAgNgDgNIgFgxIAFABIAFgDIgGgCQgGgJgEgJQgEgJAHgCIAFAHIADALIADgKQAGghAPgdQALgWAWgHIANAGIAAAAIgTARIABAKIAFgIIAOgLIAIgDIACAFIAEARQgFgJgKACIgIACIgDAQIgaAOQAJAEAKgFIAFgDIAHAYQAAABAAAAQABAAAAABQAAAAABAAQAAAAABAAIAIAIIAJgHIADgCIAMgJIAHAEIAFABIAHgBIAKAAIgDAMIgMAPIgEAJIAAAEIgMAiQgJgCgKgEQgVgJgMgTQAIAcAaALIARgDIgZAjQggAHgbgZIASASQAOAMAPAHIgCALIAAAKg");
	this.shape_11.setTransform(6.2,-0.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#121212").s().p("AgmAxIAAgBIgBgJIAAgEIANgxIAFgJQANgVAVgCIAEAGQgWAHgLAWQgPAbgGAhIAAAAIgBAAgAAegdQAHgBgBgBIAEACIgBAAIgIACgAAfgiIAAgBIABABIgBAAgAAXgrQgCgCAAgDIAHAHQgDAAgCgCg");
	this.shape_12.setTransform(4.5,-7.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C6FFFF").s().p("AgBAAIAAAAIADAAIgCABg");
	this.shape_13.setTransform(5,-13.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#101010").s().p("AABBmQgOgHgOgMIgSgSQAbAaAggIIgQAJIACAFIAOgGIgHAWQgFgEgCAFgAhAA2IAAgDQABgBAAAAQABAAAAAAQAAgBAAAAQAAgBAAAAIgCgDIgHgoIAJAKIAFAwIgEAMgAA0AHIAEgIIgDAJIgBgBgAg8gMQABABAAAAQABAAAAAAQABAAAAAAQABAAABAAIAAAAIABABIgEAJgABJgPQgCgEgEAEIAEgMQgGgCgEABIgHAAIgCgCIAEgCIAFgBIAMAEIAEAMIgEAFIAAgDgAg8gYIADAAIAAADIgDgDgAAHgXIgHgZIgGAEQgJAFgJgEIAZgOIAEgRIAHgCQALgBAFAIIAIAUIgGgHIgBgBQgDgLgIAJIgLAKIADAbIAAABQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAgAhJgdIABAEIgDACIACgGgAhGg/IAAAJIgGALgAAkg/IABAAIgBABIAAgBgAg+heIACABIgKAdgAAfhKIABgFIAEAOgAAVhaIABAAIACAEIgDgEgAg0hrIADABIgLAKgAgwhxIAAACIgCABg");
	this.shape_14.setTransform(6.2,-1.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#151515").s().p("AhPBBIAFgMIADgFQAHgNAIgLIABAAIACgDQAXgYAcgRIAlgDIgTANIAAgBIAAgCQhDARgWBCgAAygQIABABIgaAEQALgHAOACgAAogVIAAgIIAHgKIgDASIgCAAIgCAAgABOhFIACAFIgJAFQgPAEgQAPQAIgWAegHg");
	this.shape_15.setTransform(-0.4,-11.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAuCVQAAAAgBAAQAAAAgBgBQgBAAAAAAQgBAAAAAAQAGgGAAgOIABggIADgMQADANAAAOQAAARgDARQAAAFgEAAIgCgBgABvCRIABgKQABgFAGAEIABALgAi4B5IAUgcQALgOAEgQQACgHAAgIQABgjgIggQgFgTgBgSQgBgqAogTQASgJATAFQAlAKAQAhIADAAQARAFAEAQIgDADIAAAAIgRgRIgLAcIANAMIgDAGIgTgMQgJARgGASQgTAxgRA0IgFAMQgEAHgHAFIgJAGIgOABQgYAAgXgJgAhXgoQACARAAASQgBBGguA3IgBABIABAAIATgGQALgRAFgVIAJgiQAMgtAZgqIgngOIADASgAhohSIgGAEQAGAxgJAuIgIArQgIAfgSAaIAGADQATgTAJgZQAOgmAGgmQADgRgDgSQgCgKgDgKIACgJQAUgHARAQQADADAFACIALgCIgFgBIghgYQgIgGgJAAQgEAAgFABgAiuB0IAIAAIgBgGgAh1hkQgRAfABAjIABBAQAAAOgDAOQgHAggUAZIAIAAIABgFIANgYQANgXADgaQAHg3AAg7IARgOIAIAAQAGACAGADQAVAOAUARIABgHIgjgeQgNgKgQAAQgHAAgIACgAiKAZIgCgjQgBgUAAgTQACgmAdgTQAHgEAJACQAKACAIAGQAVAPATASIABgGIgYgdQgKgNgRgBQgcgCgWAOQgPAJgBASQgBAVAEAWIAJAsIACAPIAAAAgABsBxIARgIIAagjQAAAAABgBQAAAAAAAAQAAAAAAgBQAAAAgBAAIAMgiIACgFIACgLIAMgOQADgEACAEIABADQgMASgHAYIgIAWQgKAZgXAQIgPAGIgCgFgAArBIQgygQgXguQgHgLADgNIAHAFQgCAKAHAJIANATQAAgYAEgVQADgQAGgPIAKgOQgcAvANA0IACAEQADgwATgsQAIgRARgHQgPAMgIAVQgGAQgDASQgFAagCAcIANAIIAMhMIAGgMIAIgLQAVgdAdgVIAEgCIgGgBQgOgBgMAHIgJAGIgDgBQgBAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAIACgBIATgNQAAgKAFgHQAQgQAPgDIgYAUIgHAKIAAAHQAAABABAAQAAAAABAAQAAAAAAAAQABAAAAAAIAZgLIgIAFIgHAGIAKAFQAVgNAaAIIADgPIgGgGIgmAKIAhgOIgWgSIgCgFQAZAOAPAUIgHAVIgDgEIgkAEQgFABACAFQAAADADACQACACACAAQAKAAAGAHQAGAHAAAJIgBAFIAEAJIABACIAAABIANAcIAAABIADADIABACIAAACIgFgBIgKgNIgCgJIgJgUIgDgRIgCgEIgEgDQABACgHABQgFAAgEAEQgEAEAAAGIgGAHIgCgJIAWgSIABABIgBgBIgNgGIgFgGQgXADgMAUIgGAJIgeAvIgBAGIADgCIAMABIADADIABAIQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBIgFgGQgHABADAJQAEAKAHAJIAFAEIgEADIgGgBIgIgKIgGgVIgEA2IARAIIACACQAAABAAAAQAAABAAAAQAAAAgBAAQgBABgBAAIgBAAIgBAAg");
	this.shape_16.setTransform(-5,-3.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFF99").s().p("Ah8CEQAug3ABhIQAAgQgCgRIgDgSIAnAOQgZAogMAwIgJAhQgFAVgLARIgTAGgAiLCBQASgaAIgeIAIgsQAJgugGgxIAGgDQAPgGALAKIAhAYIAFABIgLACQgFgBgDgDQgRgRgUAHIgCAKQADAJACAKQADATgDAQQgGAmgOAmQgJAZgTATgAimCAIAHgGIABAGgAiaCAQAUgaAHgfQADgPAAgOIgBhAQgBgjARgfQAZgIATARIAjAdIgBAHQgUgQgVgPQgGgDgGgBIgIgBIgRAOQAAA7gHA3QgDAagNAYIgNAXIgBAGgAAzBUIACAAIAAADgAAlBHIAEg1IAGAUIAHApgAARA7QACgcAFgcQADgPAGgRQAIgVAPgMQgRAIgIAQQgTArgDAxIgEgEQgLg0AcgvIgKAOQgIAPgDAQQgCAVAAAYIgNgTQgHgIACgMQAUhABFgTIgBACIgBACQgBAAAAABQgBAAAAAAQAAABAAAAQgBABABAAIgIALIgCACIgIAeIAKgdIAAgDIALgKIAJgGIAagEIACABQgdAVgVAdIgIALIgBgJIgFAVIgMBMgAiEAWIgJgsQgEgWABgVQABgSAPgJQAWgNAcABQARABAKANIAYAeIgBAFQgTgRgVgPQgIgHgKgBQgJgCgHADQgdATgCAmQAAATABATIACAkIgCgPgAAuAGIgCgEIAegsIgNAxIgDABgABrhZIAHgGIAIgFIgZALIAEgSIAYgUIAJgFIAWASIghAOIAmgKIAGAGIgDAPQgagIgVANg");
	this.shape_17.setTransform(-5.8,-4.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-18.6,37.5,30.1);


(lib.stacebodystill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2E2E2E").s().p("AAGACIgMgCIAAgBIACAAIALADg");
	this.shape.setTransform(-23.3,19.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2C2C2C").s().p("AgJgCQAiABgaAEIgCAAQgGAAAAgFg");
	this.shape_1.setTransform(7.8,19.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9C9C9C").s().p("AAAAAIAFAAQgFABgEAAg");
	this.shape_2.setTransform(13.4,7.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("AhuAhIgEgLIgJgVIgBgBIAHgOQAvgOAxgDIA3gJIBTAIIAIAgIgRAhIgHABIiCgFIgBAAIABAAIhJAMg");
	this.shape_3.setTransform(5.8,2.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0B0B0B").s().p("AhxCbQgagCgbgGIA+AGQAJABABgHIA7gFIgBgMIgggJQAVACAVgBIAJgIIAAAGIAJAAQgHAIgJAIIAIAGIgGADIAMAFQgvAFgvAAIgJAAgACYBnIAAgDQANgpAKgqQADgEAGABQAJACACgGQAAAAAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAIAHgCIgDAQIgGgCIACAEIgkBEIADAIIAAAHIACAfIgJAMQAFgXgHgYgAi+COIABAAIAAAAgAjWCEIAKAEIAAAAIAAABIgKgFgAiYBjQgGgEgHAAQgHAAgGACQAagsApgiIBSg+QgFAFAGAAIAEgCIgHAPIgBADIABgBIAKAUIgCAEIgRgaQgzAjgsAuQgOAQgKARQAVANAWAIQgSgFgSgGgAjdBWIgDAHQAVgzAmgsQAegiAigcIASgJQgcAagdAZQg7AygVBMgABVAIIA2AEIACAEQgdgDgbgFgAA+ADIgBAAIABAAgADSg7IhTgIIATgGIAtACIgZggIArAoQgBgXgPgZQgLgRgNgOIgxgIIABgEIAsADIARARQAYAcARAiQgFACABAFIAGAVIgEAEIgDANgAB9hKIgIgKIAXALIgPgBgABziWIABgBIAAABIgBAAg");
	this.shape_4.setTransform(-3.5,5.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAACbQgXAAgYgGIgLgFIAGgDQA9AWBEgKIApgEIAJgMQAwgQApgbQAMgIAKgLQAFgGADgIIAEgMIg3hOIgXAsIAaAyIgEAMIhBAfIgFgCIAAgHIADgDQAhgEAXgTIAAgDQgCgegYgRIgBgEIAGADIACgRIASggIACgOIAEgDIgFgVQgBgFAFgDQAMAXAOAVIAcAqQANASAHAYQgJAagXAPQgnAXgpAUQgXALgXACQgeAFgeAAQgWAAgVgCgAiNCZIg9gHIgYgFIAAAAIgMgGIgCAAIgKgDIgFgCIgFglIADgHIABARIAEAVQAeAOAkAEQAcAAAcAEQgCAHgHAAIgCAAgAg1B4IgBgHIAHgQQAKgWABgXIgYg0IADgDIADAJIAJAIIBGgMIAAAAICFAFQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQgCAGgIgCQgGgCgDAFIgCAAIgFAAIgFACIgWgEIgDgDIg2gFQguACgrAKIAFAUQAEAUABAVQAAAVgJARIgFACgAhBgsQAWgIAXgGQA1gRA3AAIAPABIAGAAIgSAHIg6AJQgvADguAOIgEADQgGAAAFgGgAAHiXIAAgFIAIAAIgGARIiBBBIgSAJgABQiXIgBAAIgFgFIAKABIAAAFg");
	this.shape_5.setTransform(0.2,5.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFCC99").s().p("AgwCOIgIgGQAJgIAGgIIAFgCQAJgRAAgVQgBgUgEgUIgFgVQArgJAugDQAbAGAeADIAVAEQAFAAAGgCIACgBQgLAqgNApIABADQAHAYgFAXIgpAEQgVACgUAAQgsAAgsgOgABOCPQAcgGgkgBQgBAJAJgCgAi2COQgkgDgegPIgFgUQAVhMA8gyQAdgZAbgaICBhBIAGgRIA7AAIAFAEIgBABIACAAIAEAAIAwAIQAOAOALARQAPAZABAXIgsgoIAZAgIgtgCIgGAAIgWgLIAHAKQg3AAg1ARQgXAGgWAIIhSA+QgqAigaAsQAHgCAHAAQAGAAAGAEQASAGASAEIAwAMIAgAJIACAMIg7AEQgcgEgcAAgACABqIAFADIBBggIAEgMIgagxIAXgtIA3BPIgEAMQgDAIgFAGQgKAKgMAIQgpAcgwAQIgDgggAjsCIIAAgBIABABIAAAAIgBAAgAhAgZIABACIgBABIAAgDg");
	this.shape_6.setTransform(-0.2,5.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,-10.2,52.4,31.6);


(lib.slimlegstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("AgcEHIhDgTIhHgLIgCgBIAAgBIgFgKQAzgdAGg7QALhxgJhvQgGhHgBhHIA1gCQAQC9ggC5IgKA1QBXAtBhgKIAIAIIgJANIgNgJIgKgBIALAOIgZgKIAOAMIgPAHIgQgPIgIABIAOAQgAB5DwIgRgGQgHgDgCgFIiDgUIgFgIQAVgcgBgkQgBglABgkQAChcgCheIABgCQAOg7gOg8IgBgDIABgDIAGgCIAFgIIAvAJQgJDQgNDNQgBAIgEAIQBGAxBcgKIABAJIgbgDIAIAJQgNAKgTAAIgCAAg");
	this.shape.setTransform(0.7,11.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgVF7IBFAAIgPgQIAJgBIAQAPIAPgHIgOgMIAZAKIgLgOIAKABIAMAJIAKgNIgIgIQhhAKhXgtIAKg1QAgi7gQi6Ig1ACQABBGAFBFQAKBxgLBxQgGA7gzAdIAEAKQgFgGgEgJQAcgOANgbQAGgNABgOQARi9gUi9IgjgRQghh4AJh9IAJgJIDcgCIAmDqIgeAMIgVG4QAcAKAcAGQAyALAyAGIgDAKIgTAIQgEAJgLAEQgggBgdANQgfANgeAAQgZAAgYgJgAgOgJQACBdgCBdQgBAlABAkQAAAlgUAbIAEAJICEATQACAFAHAEIARAFQAUAAAOgKIgIgJIAbAEIgCgJQhbAJhGgxQAEgIABgIQANjOAJjOIgvgKIgFAIIgGADIgBADIABACQANA8gNA7IgBAAIAAACgAg0h5QAGCcgTCdIgNBlQgBAJAEAIIABABIAfAKIASgfQAIidAAiZIAAgDQACgbgBgbQgBgbgEgagAiyl4QgEBWAQBWQAFAcAOAXQAcAtA3gNQAagEAYgOIgHiqQAJApAAArQgBAoANAjQAUADAXAAQALAAALgDQAFgDAEgFIAEgFIgmjcgAh6FoQgYABgNgMIBHALIgiAAg");
	this.shape_1.setTransform(0,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009933").s().p("AhgBhQgOgXgFgcQgQhUAEhWIDagHIAmDaIgEAFQgEAFgFADQgLADgLAAQgXAAgWgDQgNgjABgoQAAgpgJgpIAHCoQgYAOgYAEQgMADgLAAQgmAAgWgjg");
	this.shape_2.setTransform(-5.1,-25.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.8,-39,37.6,77.8);


(lib.slimheadstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfAXQgGgWAPgLIAMABIAAAAIAFASIgNAAQgIANAMAEIgPAEIgCgHgAAQAIIgCgEIAFghIALABIAEAXIgKACIAAAMg");
	this.shape.setTransform(1.9,-2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("AgbBzIgBgdQAXAQAaADIAEAKgAgDBgQgkgPgWggIgUAEIgKgRQgLgVAKgTIAFgJIAIgCIAaAKIAAAAIAFgBQAJgDAIgFIgIgOIgEgJIgCgfIBGgpIAHgFIASAKIASBDIANAMQAGAIADAJQAGAQABAUQABAMgDANQgDASgOAMQgGAFgHAEQgUAJgUAAQgPAAgNgFgAgMAeQAKARAQAIQAjAHARghIAGgOQgNAbgcAHQgJABgKAAQgOgJgKgOIgIgKIAIANgAAQAAIgCgMQALgMAQgBIAMACIAFAGIAAgKIgcAAIgVAQIAHALgAgTgsQgBAKABAKQABAGAEgBIAOgDQAHAAACgHQAFgQgKgOIgBAAIgKgDQgLAGgBAMgAAggoIAIAAQAGADADgDIAEgBQAEgQgGgRQgCgFgFgEIgHgDQgPAWAHAZIAAgGg");
	this.shape_1.setTransform(0.3,2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAdCLIgFgKQgagDgWgQIAAAdQgEgUgMgPIgIgLIgQgQIgMACIgMgGIgDgKIgEgeIgLhZIAfgNIAXgNIgFAEIACAHIgFgFQgJACgBAKIgFgFIgJAHIACAPIgOgJIAMA5IAEgiIAHAkIAJgdIADAiIALAJIgZgKIgJACIgEAJQgLAVAMAVIAKARIAUgEQAWAgAjAPQAhAMAjgQQAIgEAGgFQAOgMADgSQACgNAAgMQgBgUgGgSQgDgJgHgGIgNgMIgRhDIgTgJQAIgNABgQIgBgMIgHAkIgFggIAZgMIgOAsIAKAEIAEgEIABgYIASBnQALAJAJAJQAEAEACAHQALAhgKAhQgHAVgSAMQgVAOgXACIACAKgAASBPQgSgIgJgRIgHgNIAHAKQAJAOAPAJQAKAAAKgBQAbgHANgbIgFAOQgOAbgbAAIgLgBgAANALIAUgOIAcAAIAAAIIgEgFIgMgBQgQABgLAKIABANgAgtgDIACAMIAJgGIgCgHIAIAMQgIAFgJADIgFABgAgPAAQgCgKABgKQACgMALgGIAKADIgKgBQgPAMAGAWIACAFIgBAAQgDAAgBgDgAADAAQgKgDAHgNIAMAAIgFgTQALAOgFAQQgCAFgHAAIgBAAgAgygPIgFg4IAKAYQAKgRgEgXIgNAFIAzgbIgDAEQgDAGAAAGQgBAIAAAIIAAABIgBgLQAAgJgIgDQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBABIgBAVIgGgNIgLABIACAhQAdgRAdgKIAGgCIhGApIABAfgAArgQIAAgOIAKgBIgEgYIgLAAIgFAiIAAAGQgHgZAOgWIAIADQAFAEACAFQAGARgEAQIgEABIgEACIgGgCgAAUh5IALgFIgKAlgAAEhxIAQgIQgJAJgCANIgBAJg");
	this.shape_2.setTransform(0,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#996600").s().p("AgeBOIgLgJIgDgkIgJAeIgHglIgEAkIgMg7IAOAIIgCgMIAJgHIAFAEQABgJAIgCIAGAFIgDgHIAFgFIAOgEQAEAXgKAPIgKgWIAFA2IAKABIAEAKIACAIIgKAHIgBgPIgFAXgAgRgcIALgCIAGAOIAAgVQAAgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAQAHAEABAJIABALIAAgBQgBgIABgIQABgHADgFIADgFIAGgDIAFAWIAAgIQACgNAJgJIAAAAIAAAAIABAgIAKglIAAgBIABABIAFAfIAHgjIABALQgBARgIAMIgHAFIgFABQgfALgbAPgAA+ghIANgsIACATIgCAZIgDADg");
	this.shape_3.setTransform(-2,-5.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.8,-13.8,21.5,27.9);


(lib.slimbodystill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("AhEC/QgcgHgVgVQAMgUABgWQAAgQADgRIAXBRIAUAOIAUAAQAogYAjgiIAYgXQAGAEAAAKQACAegIAeQgaAQgdAFIgVACQgbAAgagIgAg/CwQgKgJgEgLQgEgHgCgIIggiTQgLg0gHg0IgGg1IALgSIBPgCIgBgPIA0AAIAIAMQAEAFAIABIAJgBIAYgLIARgCQAWAWANAbQAqBbAWBhQAHAfAFAhIgBAGQgUALgWgGQgZgEgXgIIghgLIAdgiIAoAFIgKguQgQhDgkg+IAhBkIhKAyIhMgSQgGg4gKg4IgHgZQAHBBAKA+QAIAzARAxQA7hDBKgwIAMAcIg5BCQgOARgPAPQgdAggmAWgAhyA+QgMAMgKANQgNARgLATQgIgJAGgLQASgdAXgWQgJAHgHAHQgVAUgTAVIADgMQAEgMAIgIQAVgZAbgSQgKAEgIAGIgwAiIgCgBIAFgXIA/gfIANA9IgkA4gAgiBkIgEgbIAbAJIgVATgAgkBEQgNgRAAgXIBDAPQABAAAAAAQABABAAAAQAAAAAAAAQAAAAAAABQgDAIgGAHIgNARg");
	this.shape.setTransform(-0.1,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ah9CoQAOgkAAglIgEAJIgMAbQgEAJgLACQABgkAOgiIglA4IgGgJIgGgJQgFgKgCgJQgFgVAFgWQAbgXAkgLIgZizIAOgVIBKgEIAGgKIAAAOIhOACIgMATIAGA0QAHA1AMA0IAgCSQACAIADAIQAEALALAIIAXADQAlgWAdggQAQgPANgRIA5hDIgLgbQhLAvg7BDQgQgxgIgyQgLg/gGhAIAGAZQAKA4AGA4IBNASIBJgzIghhkQAkA+AQBDIAKAuIgogEIgdAiIAiALQAXAHAYAFQAWAFAVgLIAAgGQgFgggHggQgVhhgrhaQgNgcgVgWIgRADIgYAKIgJACQgJgBgDgGIgIgLIAGAAIAJAMIA6gMIAnA4IAIAPQAxByAQB7IgEAGQgFAJgMABQgtgEgrgQIgHAbQgGAVAGAVIgEAJQgWADgUAKIgRAGIgLAAQhBAAg4ghgAhqB2QgBAXgLATQAUAWAcAHQAmAKAkgEQAegFAZgRQAJgdgCgfQgBgKgGgEIgYAXQgjAjgoAXIgUAAIgUgNIgWhRQgDARgBAPgAiKCHIAkg4IgOg8Ig+AfIgFAWIAAAEIACgCIAvgjQAJgFAJgEQgbARgVAZQgHAJgEALIgDAMQATgVAUgTQAIgIAJgGQgYAWgRAdQgGALAHAJQALgTANgRQAKgOAMgMgAgjBhIAAACIACAAIAUgUIgbgJgAglBCIAhAJIANgSQAGgHAEgIQAAAAAAAAQAAgBAAAAQgBAAAAAAQgBAAAAAAIhEgPQAAAWAOASgABbAyIAYAIQAFgHgCgJIgDgIg");
	this.shape_1.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.6,-20.1,37.4,40.3);


(lib.Shuffle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_3 = function() {
		playSound("SEClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(3).call(this.frame_3).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AggAqQgPgMAAgWQAAgYAMgRQANgTAWAAQAPAAAKAGQANAGAAAOQAAAKgLAIIgVAJIgjASQAFAIAIAEQAJAEAIAAQAHAAAJgCQAMgEADgFQADgFAEAAQAEAAACACQADADAAADQAAALgRAIQgPAHgPAAQgUAAgNgLgAgTgZQgIAJgEARIAegMQAQgJAHgGQgIgIgOAAQgLAAgIAJg");
	this.shape.setTransform(29,3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgKBGIABgjIABgjIABgiIAAgkQAAgJAIAAQAKAAAAAJIgBAkIAAAiIgCAwIgBAWQgBAKgGAAQgKAAAAgKg");
	this.shape_1.setTransform(20.6,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgPBTQgDgDAAgEIABgCQACgMAAgPIgBgbIAAgaIgPABQgKAAAAgKQAAgJARgBIAKAAIABgPQADgWAIgKQAIgMAWAAQAOAAAAAJQAAAJgNAAQgYAAgDAhIAAAGIAWgBQAPAAAAAKQAAAHgHABIgIABIgXABIAAAUIAAATIAAASQAAASgBALQAAAHgIAAQgEAAgDgCg");
	this.shape_2.setTransform(12.6,0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgPBTQgDgDAAgEIABgCQACgMAAgPIgBgbIAAgaIgPABQgKAAAAgKQAAgJARgBIAKAAIABgPQADgWAIgKQAIgMAWAAQAOAAAAAJQAAAJgNAAQgYAAgDAhIAAAGIAWgBQAPAAAAAKQAAAHgHABIgIABIgXABIAAAUIAAATIAAASQAAASgBALQAAAHgIAAQgEAAgDgCg");
	this.shape_3.setTransform(2.4,0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAWAuQgNAGgOABQgMAAgJgHQgJgFgCgNQgEgaAAgRQAAgOADgRQACgJAIABQAEAAADACQACADAAAEIgBAOIgBAQIABAZQABAMACAHIAGACIAGACQAMgBAOgEIAAgTIAAgRQAAgWACgPQABgJAIAAQAEAAADACQADADAAAFIgCAlIAAASIAAAWIABAGIAAAHQAAAEgDADQgDACgEAAQgHAAgCgJg");
	this.shape_4.setTransform(-7.7,3.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAaBJIgEgWIgCgYIAAgHIABgIQAAgQgKAAQgLAAgJAJQgFAGgIAQQAAAlgEAHQgCAGgGAAQgEAAgDgDQgDgDAAgDIABgFQABgCAAgMIAAgOIAAhGIABgRIgBgJIgBgJQAAgEADgDQADgDAEAAQAIAAABAJIACARIgBAVIAAAWIAAAIQAIgKAJgGQAHgFAKAAQARAAAGALQAEAHABAQIAAASIACAUIAEAVIAAACQAAAEgDADQgDADgEAAQgHAAgCgIg");
	this.shape_5.setTransform(-18.5,0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgaA2QgPgGAAgJQAAgEADgDQADgDAEAAQADAAAFAFQACACAJABIALABQAFAAAHgCQAJgCAAgHQAAgNgTgFIgIgCQgNgDgFgDQgIgEAAgLQAAgUATgJIARgGQANgEAGgDQAEgBAEAAQAEAAADACQADADAAAFIABAIIABAIQAAAFgCACQgEADgDAAQgGAAgCgEQgCgCAAgIIgXAHQgOAGAAAJIAGACQAUAEALAHQAQAIAAATQAAAQgOAIQgLAHgPAAQgOAAgLgEg");
	this.shape_6.setTransform(-29.6,2.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(3,1,1).p("AGlhwItJAAQgvAAgiAhQghAhAAAuQAAAvAhAhQAiAhAvAAINJAAQAvAAAhghQAighAAgvQAAgugighQghghgvAAg");
	this.shape_7.setTransform(0,1.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AmkBxQgvAAgighQghgiAAguQAAguAhghQAighAvAAINJAAQAvAAAhAhQAiAhAAAuQAAAugiAiQghAhgvAAg");
	this.shape_8.setTransform(0,1.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgjAuQgRgNAAgZQAAgZANgTQAPgVAYAAQAQAAAMAGQAOAHAAAQQAAALgNAIQgFAEgRAGIgoAUQAHAJAJAEQAIAFAKAAQAIAAAKgDQAMgEAFgFQADgGAEAAQAEAAADADQADADAAADQAAAMgTAJQgRAHgQAAQgWAAgOgMgAgVgbQgJAKgEASIAhgOQASgJAIgHQgKgJgPAAQgMAAgJALg");
	this.shape_9.setTransform(31.9,3.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgLBNIACgnIABgmIAAglIAAgnQAAgLAJAAQALAAAAALIgBAnIgBAlIgBA1IgBAZQgBAKgHAAQgLAAAAgLg");
	this.shape_10.setTransform(22.6,0.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgQBcQgDgEgBgEIABgCQACgOAAgRIAAgdIAAgdIgRABQgLAAAAgKQAAgLATgBIAKAAIACgQQADgYAJgLQAJgOAYAAQAPAAAAAKQAAALgOAAQgaAAgDAkIAAAGIAXAAQASAAgBAKQAAAIgIABIgJABIgYABIgBAXIABAUIAAAUQgBAUgBALQAAAJgJAAQgEAAgDgCg");
	this.shape_11.setTransform(13.8,1.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgQBcQgDgEgBgEIABgCQACgOAAgRIAAgdIAAgdIgRABQgLAAAAgKQAAgLATgBIAKAAIACgQQACgYAKgLQAJgOAYAAQAPAAAAAKQAAALgOAAQgaAAgDAkIAAAGIAXAAQASAAgBAKQABAIgJABIgJABIgYABIgBAXIABAUIAAAUQAAAUgCALQAAAJgJAAQgEAAgDgCg");
	this.shape_12.setTransform(2.7,1.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAYAzQgOAHgPAAQgOAAgJgHQgKgGgDgOQgEgcAAgUQAAgPADgSQACgKAIAAQAGAAACADQAEADAAAEIgCARIgCAQIABAcQACANACAIIAHADIAHABQAMAAAQgFIAAgVIAAgTQAAgYACgRQABgKAJABQAFAAADACQADADAAAFIgCApIAAAVIAAAXIAAAIIABAGQAAAFgDADQgDADgFAAQgIAAgCgKg");
	this.shape_13.setTransform(-8.4,3.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAdBRQgDgJgCgQQgCgQAAgKIAAgIIABgJQAAgSgKAAQgNAAgKAKQgFAHgKASQAAAogDAIQgDAHgHAAQgEAAgDgDQgEgDAAgFIABgEQABgDAAgNIABgQIAAhNIABgSIgBgKIgBgKQAAgFADgDQADgDAFAAQAIAAACAKQACAKAAAIIgBAYIgBAXIAAAKQAJgMAKgGQAIgGAMAAQARAAAHAMQAFAIAAARIABAVIACAWQACANACAJIABAEQAAAEgEADQgDADgEAAQgIAAgCgIg");
	this.shape_14.setTransform(-20.4,0.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgdA7QgQgGAAgKQAAgFADgDQADgEAFABQADgBAFAGQADACAJACIAMABQAHAAAHgCQAKgDAAgHQAAgOgUgGIgKgCQgOgDgGgFQgJgDAAgNQAAgWAWgJQAGgEAMgDIAUgHQAFgCAFAAQAFAAADADQADADAAAEIABAKIABAJQAAAFgDADQgDADgEAAQgGAAgDgEQgBgDgBgJIgZAHQgPAIgBAJIAHADQAWAEAMAIQASAJAAAVQAAASgPAIQgNAIgRAAQgOAAgNgFg");
	this.shape_15.setTransform(-32.6,3.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(3,1,1).p("AHPh7IueAAQgzAAglAkQgkAlAAAyQAAAzAkAkQAlAlAzAAIOeAAQA0AAAkglQAlgkAAgzQAAgyglglQgkgkg0AAg");
	this.shape_16.setTransform(0,1.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#66FFFF").s().p("AHPB8IueAAQgzAAglgkQgkglAAgzQAAgyAkglQAlgkAzAAIOeAAQA0AAAkAkQAlAlAAAyQAAAzglAlQgkAkgzAAIgBAAg");
	this.shape_17.setTransform(0,1.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AggAqQgPgMAAgWQAAgYAMgRQANgTAWAAQAPAAAKAGQANAGAAAOQAAAKgLAIIgVAJIgjASQAFAIAIAEQAJAEAIAAQAHAAAJgCQAMgEADgFQADgFAEAAQAEAAACACQADADAAADQAAALgRAIQgPAHgPAAQgUAAgNgLgAgTgZQgIAJgEARIAegMQAQgJAHgGQgIgIgOAAQgLAAgIAJg");
	this.shape_18.setTransform(29,3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgKBGIABgjIABgjIABgiIAAgkQAAgJAIAAQAKAAAAAJIgBAkIAAAiIgCAwIgBAWQgBAKgGAAQgKAAAAgKg");
	this.shape_19.setTransform(20.6,0.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgPBTQgDgDAAgEIABgCQACgMAAgPIgBgbIAAgaIgPABQgKAAAAgKQAAgJARgBIAKAAIABgPQADgWAIgKQAIgMAWAAQAOAAAAAJQAAAJgNAAQgYAAgDAhIAAAGIAWgBQAPAAAAAKQAAAHgHABIgIABIgXABIAAAUIAAATIAAASQAAASgBALQAAAHgIAAQgEAAgDgCg");
	this.shape_20.setTransform(12.6,0.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgPBTQgDgDAAgEIABgCQACgMAAgPIgBgbIAAgaIgPABQgKAAAAgKQAAgJARgBIAKAAIABgPQADgWAIgKQAIgMAWAAQAOAAAAAJQAAAJgNAAQgYAAgDAhIAAAGIAWgBQAPAAAAAKQAAAHgHABIgIABIgXABIAAAUIAAATIAAASQAAASgBALQAAAHgIAAQgEAAgDgCg");
	this.shape_21.setTransform(2.4,0.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAWAuQgNAGgOABQgMAAgJgHQgJgFgCgNQgEgaAAgRQAAgOADgRQACgJAIABQAEAAADACQACADAAAEIgBAOIgBAQIABAZQABAMACAHIAGACIAGACQAMgBAOgEIAAgTIAAgRQAAgWACgPQABgJAIAAQAEAAADACQADADAAAFIgCAlIAAASIAAAWIABAGIAAAHQAAAEgDADQgDACgEAAQgHAAgCgJg");
	this.shape_22.setTransform(-7.7,3.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAaBJIgEgWIgCgYIAAgHIABgIQAAgQgKAAQgLAAgJAJQgFAGgIAQQAAAlgEAHQgCAGgGAAQgEAAgDgDQgDgDAAgDIABgFQABgCAAgMIAAgOIAAhGIABgRIgBgJIgBgJQAAgEADgDQADgDAEAAQAIAAABAJIACARIgBAVIAAAWIAAAIQAIgKAJgGQAHgFAKAAQARAAAGALQAEAHABAQIAAASIACAUIAEAVIAAACQAAAEgDADQgDADgEAAQgHAAgCgIg");
	this.shape_23.setTransform(-18.5,0.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgaA2QgPgGAAgJQAAgEADgDQADgDAEAAQADAAAFAFQACACAJABIALABQAFAAAHgCQAJgCAAgHQAAgNgTgFIgIgCQgNgDgFgDQgIgEAAgLQAAgUATgJIARgGQANgEAGgDQAEgBAEAAQAEAAADACQADADAAAFIABAIIABAIQAAAFgCACQgEADgDAAQgGAAgCgEQgCgCAAgIIgXAHQgOAGAAAJIAGACQAUAEALAHQAQAIAAATQAAAQgOAIQgLAHgPAAQgOAAgLgEg");
	this.shape_24.setTransform(-29.6,2.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0000FF").s().p("AmkBxQgvAAgighQghgiAAguQAAguAhghQAighAvAAINJAAQAvAAAhAhQAiAhAAAuQAAAugiAiQghAhgvAAg");
	this.shape_25.setTransform(0,1.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AmkBxQgvAAgighQghgiAAguQAAguAhghQAighAvAAINJAAQAvAAAhAhQAiAhAAAuQAAAugiAiQghAhgvAAg");
	this.shape_26.setTransform(0,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_25},{t:this.shape_7},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_26},{t:this.shape_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55,-16.2,110.1,31.9);


(lib.samslegstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009933").s().p("AiYCHIgGgJIAWkHIAHgDIgGgBIAAgBIEUABQAXCFgHCJIhqADIgLiHIgGCSg");
	this.shape.setTransform(-7.7,4.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("AjVFuQgNgMAIgTIADgLIgNAWIgMAEIAAgWIgQARIAEgcIgSAOIADgSIgNALIAAgPIgGgBQB6iPgcjAQgRhsgHhuIgIhuIBwAFQglEWgQEUQgEBPgUBOIgDAHgACvEbIgYgNQh0ApgSh0QgGglgCgnQgJjigsjhIgGggQA1gJAwAQQAJEeA1EYQA1AlA+ASIAnAMIACACQgBAEgDAEIgngMIAdAUQgOADgNAAQgbAAgagOgADqEDIATgEIAZAKIAIAJgAhmlgIACAAIgBACIgBgCg");
	this.shape_1.setTransform(2,55.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AkjHYIgLgPIAngsIAAgFQBAiMgUifQgEghgBgjQgFh9gKh+IgggQQgJiTAmiNIElAFQA5CPgcCZIgJAAIgEAEIAuI3Qg1kagJkcQgwgQg1AJIAGAgQAsDfAJDkQACAnAGAlQASB0B0gpIAYANQAnAVApgKIgdgUIAnAMQADgEABgEIgBgCIgogMQg+gSg1glQBKATBCAbIgTAEIA1APIgJgJIAZALQhAA/hagjQgTgJgXACQhDgGgogxQATjIg4jAIgEgDQAAhigWhfIgNgLIgJAEQg1EygJE6QgCAqgTAmIgVAOQAUhOAEhPQAQkWAlkUIhvgFIAHBuQAHBsARBsQAdDCh6CPIAFABIAAAPIAOgLIgEASIASgOIgEAcIAQgRIAAAWIAMgEIAOgWIgEALQgIATAOAMQgygCgdgpgAhmjLIABACIABgCIgCAAgAjon1IAGABIgHADIgWEJIAGAJIC8AIIAGiUIALCJIBogEQAHiKgXiFIkUgBg");
	this.shape_2.setTransform(2,40.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.3,-11.2,60.7,103.3);


(lib.samsheadstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("AhECCIABgJIAGg2QACgQAIgNIgQADQgYAAgQgRIAAgMIADgEIApABQgKgJgNAAIgLAAQAWgjAdghQAJgJAMgDIABgVIAwgTIADgJQAQANAPAPQAeAgAUAmIgNAPIgKAQIADAQIgDAEQgRAFgRgCIgdgFQgIgBgEgGIgFACIgCAIQAFAIAMACQAjAFAjgJIgBAJQgCAJgFAHQgHAKgMAJQgKAHgFALQgIAPALAPIAWALgAAPhUQgNABgGAMIACALIADgJQASgLAVAIIAHgDQgMgJgPAAIgFAAg");
	this.shape.setTransform(1.1,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABVCVIgXgLQgKgQAHgPQAGgKAJgIQAMgIAHgLQAFgHACgIIABgKQgjAJgjgFQgLgCgGgIIACgIIAFgBQAEAGAJAAIAcAFQASACARgFIACgEIgCgQIAKgSIAMgMQgUgngeggQgPgPgQgNIgDAKIgwASIgBAVQgMADgJAKQgdAggWAjIAMABQAMAAAKAIIgogBIgEAFIAAALQAQASAYgBIAQgCQgIAMgCARIgFA1IgCAKIgOAAIAJgFIABhJIgigQIgKgVIADgIIAIgEQAIgWgNgWQgDgFgEgEIgTACIATgxIgUgPIAfgFIgCgFIAegIIAEglIAQAYIAkgXIAnAAIgEAJIABAEIA3AMIgTAOQACAQALALQAPAPANATIAZAjIgVAeQALAogcAfIgJAHIgPALIADAbIAlAPgAAFg1QAIgMAOAAQARgCAPAKIgHADQgWgIgSALIgEAJg");
	this.shape_1.setTransform(0,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.8,-14.8,25.6,30);


(lib.samsbodystill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99CCFF").s().p("AgLAZIABAAIgCABIABgBgAAMgZIABAAIgFAHg");
	this.shape.setTransform(12.1,9.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("AhyCmQg8gRgUg5QgKgbgCgcQgBgUADgTIAEgUQAAgFgBgFIgCANQgegTAAgiQABgpAYgjIBGgkQAJgFAIgGIAEgEICLAAIBBAQIAWAVQALALAFAOIASAyQAHARAJARQAWAoAQAnIABACQAZAkALArQgHAPgKALQgPASgXALIAAAAQAGgYgDgZQgCgVgPgQIgEAEIhFhfQgEgFgBgHQgCgRABgQQgIABgCAHQgFAUAKATQAEAIACAHQAEAMAAAOQABAdgJAdQgJAdgNAeQgyACgsgTQgagMgbgLQgLgEgFgLQgLgcgGgdIgJgwIA1ANQgMgLgPgEIgLgDIgQgdIgMAVQARAkADApIAFBCIAEgUIAKAMQA6AWA6ARQAVAFAVADQAOgBAOgDQAHgCAFgEIAGgGIABgBIAAAAIAVgtIAFgHIAAABIgDAQQgCAJAAAIQAAAHAFAFIAGAHIABgGIgCgGIACgRIAUgLIgEAmIgGAHIgKgEIALAKQAYgbgJgiQAWAPgJAdIgHARIACAFQgJAUgRAOQgIAGgIACQgcAEgcAAQhdgGhdgcgAA+gYQgPAIgRAAQgFAAACAFQAAAAABAAQAAABAAAAQABAAAAAAQABAAAAAAQAVABATgKQAKgGgIgFIgKAGgACrCuIABAAIgBABIAAgBgABOCLIABgJIAAAAIAYgJIgOASgABlARIAAgFIAFAGg");
	this.shape_1.setTransform(0.5,-2.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABqDNQhIgDhFgRQg0gMgzgRQgkgLgTghQgKgRgFgWQgLgwAFguQgSgUgFgaQgHgjAQgeQAGgLAKgHQAZgVAdgPQAWgLAWgJIgEAFQgIAGgJAEIhGAlQgYAigBApQAAAiAeATIACgNQABAFAAAFIgEAVQgDASABAVQACAcAKAbQAUA4A8ARQBdAcBdAHQAcgBAcgDQAIgDAIgGQARgOAJgUIgCgEIAHgSQAJgcgWgQQAJAjgYAaIgLgKIAKAEIAGgHIAEglIgUALIgCARIACAGIgBAGIgGgHQgFgFAAgHQAAgJACgIIADgQIAFADIABALIAVgJIgyhKIgFgFIAAAFQAHAZgLAbIgNAjQgEALAAALIADgGIAXgJIAKgjIAMAIIgEAHIgVAtIgBABIgGAGQgFAFgHACQgOADgOABQgVgEgVgFQg6gQg6gXIgKgLIgEAUIgFhDQgDgogRglIAMgVIAQAdIALAEQAPAEAMALIg1gNIAJAwQAGAdALAbQAFAMALAEQAbAKAaAMQAsAUAygDQANgdAJgeQAJgdgBgdQAAgNgEgLQgCgJgEgIQgKgSAFgUQACgIAIgBQgBARACAQQABAHAEAGIBFBeIAEgDQAPAQACAUQADAZgGAYIAAABIABgBQAWgKAPgTQAKgLAHgPQgLgrgZgjIgBgCQgQgogWgoQgJgQgHgRIgSgzQgFgNgLgLIgWgWIhBgQIBBAHQAoAcANAuQAFAQAHAPIAWAqQALAUAKAWQAKAVALAVQAPAcAFAdQAEAQgJANQgWAhglARIgBAAIAAABQgUAfgjAHIgNgCgABSB8IgBAIIALABIAOgTIgXAKIAAgBIgBABgAAhgQQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBQgCgEAFAAQARgBAPgHIAKgHQAIAGgKAFQgSAKgUAAIgCAAg");
	this.shape_2.setTransform(0.2,-1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.8,-22.1,48.2,41.5);


(lib.prolegsstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AAAAAIAAAAIABAAIAAAAIgBABQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAg");
	this.shape.setTransform(-41.1,43.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC9966").s().p("AApFUIgDgJIAFAAIAGAGIANgHIgPgJIgQAMQg4gkhCgSIg2gMQhNAAgehDQAggygEg8QgCgggSgbIgMgUQgKgSgHgVQgSg5AMg+QAEgYANgUQAmg3gEg/ICTADQAKAcgSAZQAFA8gCA7QgBAngHAnQgVBtAQBtQAfAhAqARIgjgaQgHglAGgkQAEgZgBgaIgTk7QAQgbgJggQAvgEAighIBNAQQgZBkgGBpQgDA0gFAzQgLBwBDBWICKAsIAKgDIgFAKIAQARIgJAfIgPgFIgLANIgFgBIgEgEQgKgSANgQIgcgGQhHAqhNgcIA1AiQAagZAjALIAAALQgFApgkgIIABAKQgFAEgFABQgPAGgKgHIADgIIgEgHIgLgEIAHAgIgLAJgABmEqIARANIAIgDQgDgMgLAAQgFAAgGACgADmD2IAIACIABgMgACyElQgBAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQgCgRgFgPIAAgDQAqgYgJAvIgCAIQgLAGgHAAIgFAAgAEKD1IABgLIgGgHIADgJIAMAJQALAJgCANIgNADg");
	this.shape_1.setTransform(-9,66.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAaHzQgmgXgrgNQhHgXhFgbQgvgSgOgwQAggiAEgxQAFg7gTg3IAMAUQARAcADAgQAEA8ghAyQAfBDBNAAIA1AMQBCASA4AkIAQgMIAPAJIgNAGIgGgFIgFAAIAEAJIAcAJIALgJIgIggIAMADIADAIIgCAHQAKAHAOgFQAGgCAFgDIgCgKQAkAIAGgpIgBgLQgigLgaAYIg1ghQBNAbBHgpIAcAGQgNAPAJATIAEAEIAGABIALgOIAPAFIAIgeIgQgRIAFgKIgKADIiKgtQhChVAKhyQAFgzADg0QAHhnAZhkIhNgQQgjAggvAFQAKAggRAbIATE7QACAZgEAaQgGAkAHAlIAjAaQgqgRggghQgPhtAVhwQAHgmABgnQACg5gFg8QASgZgLgcIiSgDQADA/glA3QgNAUgFAYQgLA8ASA5IgCgDQgWgsADgyQAFhEAog8QAVgegOgkIgZgGQgZgHgXgNIgVgOQAJg4gIg5QgPheAkhUIHCADQgCBhgIBjQgEAuAJAsIgmAXQAFAZgGAZQgsCuASC0QAEAtASAnQAaARAeALQA9AYA/ADIAEAFIAHACIAEADIADAFIAGAJQADAEABAGIAAAGIgEARQgHABgFADQgMAEgKAGIgVAOIgGAFQgGAFgJgCIgFgBIAAABIgLAFIgKAGIgDABIgFABQgEACgEAAIgJgCIg4ArQgbAVgdAAQgYAAgZgOgAC/GMIABADQAEAPACAQQAAABABAAQAAABAAAAQAAAAAAAAQAAAAAAAAQAIAEAQgJIABgIQAHgfgRAAQgIAAgPAIgAEaFuIAHAIIgBAKIAFAIIANgDQACgOgKgIIgNgKgAg2E5QgIg9AQg8QAMgvgYgsIgDgEQglBuAsBqgAB8G2QAUgIAFASIgIACgAD7GBIAKgJIgCAMg");
	this.shape_2.setTransform(-11.2,52.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43,1.2,63.7,102.7);


(lib.proheadstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC9966").s().p("Ah+BtIAJgJIAFgCIAHAIIAQgqIAfgRIgIgMIAEgEIAEgGQAGgQADgSIADAIQABABAAAEIgEAVIADAFIAFgDIAVhYIAGANIAEAKQAGANgEAOIAFADIADgBIAFgMIgPgfIACgbIAiAqIAEgdIgPgSIgCAIIAKAMIgIAHIgFgbIAWgVIAsgDIAOAxIAlAAIgDALIgCADQgGAJgMACQgFACgFABIgBAjIgnAeIAogRIgHATIgYAtIhUgDIASAKQAXANAeACIAGAGgAA0hXQgHAPAJAQIAEAAIAAgBIADgDQAFgQgIgPIgEAAIgCAEg");
	this.shape.setTransform(5.7,6.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABrCpQgegCgagNIgRgKIBWADIAXgtIAIgTIgpARIAogeIAAglQAGgBAFgCQALgCAGgJIACgEIADgKIglgBIgNguIgsADIgWAUIAFAZIAHgGIgJgLIACgIIAPASIgEAcIglgoIgCAZIARAfIgFAMIgEABIgGgDQAEgOgFgOIgEgKIgHgMIgUBaIgGADIgCgFIADgWQABgDgBgDIgDgIQgDAUgFAQIgDAFIgFAFIAJAMIggAQIgQArIgHgIIAJgQIgEgIIgRgBIgOAIQgEgPgNgJIgOARIgNgZIgBAYIgSgnIgFAAIgEAEIgBAQIgFgCIgEgFQgBgSAMgOIgGgIIgJgCIgEAGIgGAKQgDAEgEADQAAgWAOgRIAAgTIgKADIgMgtIAWgbIAAgMIAlgbQgMgBgKAIIgFAFIgDABIgLgIQAWgMAYgBIAAgPQAYgFATgSIgNADIgHgDIgDgFQAfgNAhgLQAIgDAJgBIAAgHIAVAIIAGgFIgKgJIABgEQALADAFALQADAGABAHIAEAEIACAAIgDgLIAKgZQAWAHAagEIAGAHIAbACQgVAOgbAHQgHADgIgBIgFAFIANAGQAXgMAZgDQAKAAAKADIgCAOQAQABAPAKQALAHAFANQADAIgEAGQgGgSgUAGIAWAWIAQgEQAEAMgBALIgDAHIgKgPIgOACIAEADQgMAYAHAZIAFACQAQgGANAIQAKAEACAMQgEANgMAFIgUAKQAJAjgOAhQgLAegZASIABAOIgGABgAhfCuQARgFARgDIgIAIgABuAIQgJgOAHgQIACgDIAFAAQAIAPgGAOIgCADIAAABIgFAAg");
	this.shape_1.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.4,-17.3,38.8,35);


(lib.probodystill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC9966").s().p("ABVDDIgDgCQgHgKAGgKQAEgGABgIIAAgIIAPACIgJAYIA1ALQgJAPgSAAQgSAAgPgIgAhEC5IA3gTIAfAdQgNACgLAAQggAAgegMgAitDBQgcgXgQgfIAAgGIgOgUIABgBQgOgdgFghQgDgVABgWQACgdASgZIgGgvQAWgwAtgcIAKgEQAjgOAkgOICmAAIAEAHQAbABAZAKQAKAFAHAIQALAOAIARIANAXQAoAQARAnQARAmgFAnQgEAggZAXQgVAVgZAQQgRALgSAIIgZAKIABgYIgQgTIgCggIA0gtQgMgRAGgXQAFgPgCgQQgCgQgGgPQAEAagDAYQgCAQgLAQQgDAEgBAIIABAHQgMANgJAQQgEAHgCAKIgDAPIgEAPQhOgchQAJQgMgIgPADIgNAAQAfgygYg1QATgOAIgXIABgGQgZAVgMAdQAMAUgFATQgFAdgHAcQggAAgZAPIgBAIQAQgMAVgCQAzgBAzAKQANACALgKQA/gBA1AnQAGAKgDANIgCAIQgXgUgfgDIADAOQABAEgCAEIgBAEQABgKgJgFQgHgEgIADIARAUIgBAIIgegTIARARQADALgDALQgCAGgFADIgCACIgJgBIgGgKIABgBIABAAIABgEQgOgagbAIQgOAEgOAHQgyAYg3AAIgNAAgABNCVIAAAVQgMAPgRAFIgNACg");
	this.shape.setTransform(-0.1,-15.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABcDKQgQgFgRAAQgRgEgRAEQgdAHgggEQgWgCgVgIIgCgFQgDABgDAAIggAJQgaAJgagLQgLgEgJgGQgMgHgJgNQgVgegKgfIgMglQgLgjAIgjIALg1IAEgWQACgUAHgRQAFgOAKgLQAkglAugTQAXgJAZABQgkANgjAOIgKAEQgtAcgWAwIAGAvQgSAZgCAdQgBAWADAVQAFAhAOAeIgBgBIAAABIAOAUIAAAGQAQAfAcAXQA/ADA3gbQAOgHAOgEQAbgIAOAaIgBAEIgBAAIgBABIAGAKIAJABIACgCQAFgDACgGQADgLgDgLIgRgRIAeATIABgIIgRgUQAIgDAHAEQAJAFgBAKIABgEQACgEgBgEIgDgOQAfADAXAUIACgIQADgNgGgKQg1gng/ABQgLAKgNgCQgzgKgzABQgVACgQAMIABgIQAZgPAgAAQAHgcAFgdQAFgTgMgUQAMgdAZgVIgBAGQgIAXgTAOQAYA1gfAyIANAAQAPgDAMAIQBQgJBOAcIAEgPIADgPQACgKAEgHQAJgQAMgNIgBgHQABgGADgGQALgQACgQQADgYgEgaQAGAPACAQQACAQgFAPQgGAXAMARIg0AtIACAgIAQATIgBAYIAZgKQASgIARgLQAZgQAVgVQAZgXAEggQAFgngRgmQgRgngogQIgNgXQgIgRgLgOQgHgIgKgFQgZgKgbgBIgEgGQAfACAeALQALAGAIAJQAUAZAMAcQAZAKARAVQAMAOAJARQALAVAAAWQAAAxgiAkQgvAzhCAYIAAAEIgGADIgHAWIALgBIALABQAOABANALQgKAYgaACIgYgFgABWCaQgBAIgEAGQgGAKAHAKIADACQAPAIASAAQASAAAJgPIg1gLIAJgYIgPgCIAAAIgAhEC0QAqAQAsgGIgfgdIg3ATgAAjC7IANgCQARgFAMgPIAAgVg");
	this.shape_1.setTransform(-0.1,-14.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.3,-35.5,52.6,41.6);


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


(lib.Copyright = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAwANIgFgTIgIATQgHAPgFAAQgDAAgCgFIgDgQIgDgNQgKAhgGAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIABgDQAGgIADgLIAFgWQACgEAEAAQAHAAAEAPIAEATIAEgLIAGgQQAEgIAEAAQAEAAABAEIAFASIAEANQACAHAEAGIABADQAAABAAAAQAAABgBABQAAAAAAAAQgBABAAAAQgBABAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgFAAgFgQgAgkAXIgBgOIgBgLIgBgMIgJgBIgKAAQgGAAAAgGQAAgGAGAAIAJAAIAIABIAZAAIAHgBIAGAAQAEAAAAAGQAAAFgEABIgYABIAAANIABALIABAHIABAGQAAABAAAAQAAABAAABQAAAAgBAAQAAABgBAAQAAABgBAAQAAAAAAAAQgBABgBAAQAAAAgBAAQgFAAgBgGg");
	this.shape.setTransform(102,-3.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgVArQgMgEAAgIQAAgDADgDQACgCAEAAQACAAAEAEQACACAGABIAJABQAFAAAFgCQAHgCAAgFQAAgLgPgDIgGgCQgLgDgEgDQgGgCAAgJQAAgQAPgHIANgFIAPgFIAHgBQADAAACACQADACAAADIABAHIABAHQAAADgDACQgCADgDAAQgEAAgCgDIgCgJIgSAGQgLAFAAAHIAFABQAQAEAIAFQANAGAAAQQAAANgLAGQgJAFgMAAQgKAAgKgDg");
	this.shape_1.setTransform(90.8,2.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgVAiQgLgLAAgQQAAgOALgRQALgTANAAQAIABAJADQAMAEAAAIQAAACgCACQgCADgDAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBIgDgCQgFgEgKAAQgGAAgIAOQgHAOAAAHQAAALAHAFQAHAFAIAAQAFABAFgDIAJgFIADgBQADAAACACQACADAAADQAAAFgMAFQgKAGgHAAQgOgBgLgJg");
	this.shape_2.setTransform(83,2.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgHA4QgCgCAAgEIAAgOIAAgOIABgSIAAgQQAAgEADgCQACgCADAAQABAAADACQACACAAAEIgBAQIAAASIAAAOIAAAOQAAAEgCACQgCACgCAAQgDAAgDgCgAgDgqQgDgCgBgEQABgEADgDQACgCACAAQADAAADACQADADAAAEQAAAEgDACQgDADgDAAQgCAAgCgDg");
	this.shape_3.setTransform(76.8,0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AATAlIgCgRIgCgRIAAgFIABgHQAAgRgGAAQgJAAgGAKQgHAKgEAMIgBAHIAAAIIAAAIIABAHQAAADgDACQgCADgDAAQgEAAgCgDQgCgCAAgDIAAgHIgBgIIABgVIABgWIAAgHIAAgHQAAgDACgDQADgCADAAQAHAAABALIAAAJQANgSAMAAQAMAAAFALQADAIABAOIAAAHIgBAGQAAAGACAKIACARQAAAEgCACQgCACgDAAQgIAAAAgIg");
	this.shape_4.setTransform(70.4,2.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAZAnIgFgFIgOAGQgFACgDAAQgSAAgIgKQgIgKAAgUQAAgRANgNQANgOAQAAQAHAAAIAEQALAEAAAGIgCAEIgBAKIgBAPQABAKABAGIAFANIACAEIAAACQAAADgCACQgCACgDAAQgBAAgEgEgAgMgSQgJAKAAALQAAAMAFAHQAFAGAIAAQAGAAAFgCIAIgGQgDgUAAgJIABgIIACgIIgGgCIgDgBQgKAAgJAKg");
	this.shape_5.setTransform(61.9,2.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAVA6QgCgGgCgMIgBgSIAAgHIAAgFQAAgNgHgBQgJAAgHAHQgEAFgHANQAAAegCAGQgCAEgFAAQgDAAgCgCQgDgCAAgDIABgEIABgLIAAgLIAAg4IABgNIgBgIIgBgHQAAgEACgBQADgDADAAQAGAAABAHIACAOIgBARIAAARIAAAHQAGgIAIgFQAFgEAIAAQANAAAFAIQADAHABALIAAAPIACARIADAQIAAACQAAADgCACQgDACgDABQgGAAgBgHg");
	this.shape_6.setTransform(53.3,0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgVAiQgLgLAAgQQAAgOALgRQALgTANAAQAIABAJADQAMAEAAAIQAAACgCACQgCADgDAAQAAAAgBAAQAAAAgBAAQgBgBAAAAQAAAAgBgBIgDgCQgFgEgKAAQgGAAgIAOQgHAOAAAHQAAALAHAFQAHAFAIAAQAFABAFgDIAJgFIADgBQADAAACACQACADAAADQAAAFgMAFQgKAGgHAAQgOgBgLgJg");
	this.shape_7.setTransform(44.5,2.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgZAiQgMgLAAgRQAAgSAJgOQALgPARAAQAMAAAIAEQAKAGAAALQAAAIgJAGQgDADgNAEIgcAOQAEAGAHAEQAGADAHAAQAFAAAIgCQAJgDADgEQACgEADAAQADAAACACQACACAAADQAAAJgOAGQgMAFgLAAQgQAAgKgIgAgPgTQgGAGgDAOIAYgKQAMgHAGgFQgHgGgLAAQgJAAgGAIg");
	this.shape_8.setTransform(36.1,2.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAwA6QgDgDgCgJIgCgOIgKg1IgQAtIgFAPQgCAJgEAGQgDAGgDAAQgFAAgDgFIgDgJIgDgIQgHgcgGgdIgDAOIgKAnQAAAHgEAOQgDAGgFAAQgEAAgCgCQgCgDAAgDQABgNAFgTIAIgeIAFgYQADgSAEgFQADgEAFAAQAFAAADAFQADAHADAWQAEAZAJAcQAJgcAJggIACgMQABgHADgEQADgGAFAAQAHAAADANIADATQAFAhAHAZIAEAOIACANQAAADgCACQgDADgDAAQgEAAgCgFg");
	this.shape_9.setTransform(24.6,0.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgdAkIAAg1IAAgIIABgIQAAgIAGAAQAIAAAAANQAOgOARAAQAHAAADAFQADAEAAAKIAAAGQgBAJgHAAQgHAAAAgHIAAgGIAAgGQgMABgGAFQgHAGgEAKIAAApQAAAHgIAAQgHAAAAgHg");
	this.shape_10.setTransform(9,2.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAYAnIgEgFIgOAGQgGACgCAAQgSAAgIgKQgIgKAAgUQAAgRANgNQANgOAQAAQAHAAAJAEQAKAEAAAGIgBAEIgCAKIAAAPQAAAKABAGIAFANIACAEIAAACQAAADgCACQgCACgDAAQgBAAgFgEgAgMgSQgIAKgBALQABAMAEAHQAEAGAJAAQAGAAAFgCIAIgGQgCgUAAgJIAAgIIABgIIgEgCIgEgBQgKAAgJAKg");
	this.shape_11.setTransform(0.9,2.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgDAuQgCgDAAgDIgCgcIgCgaQAAgIgCgFQgGACgGAGIgJAKIgEAGIgBALIAAAOIAAAHIABAFQAAAEgCACQgDACgDAAQgJAAAAgUIABgOIABgMIgBgNIgBgMQAAgSAIAAQADABADACQADADAAACIgBAGIAAAEIAAAIQAEgIAIgHQAIgHAFABQAMAAADAMQAEgGAGgDQAGgDAIAAQANAAAFAOIADAWIAGArQAAADgCACQgDACgDAAQgHAAgBgGIgCgZIgDgWIgDgLQgCgGgEgBQgCABgIAFQgIAEgCADIAAAOIADAUIABAUQAAADgCADQgCACgEAAQgBAAgCgCg");
	this.shape_12.setTransform(-9.4,2.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgDAuQgCgDAAgDIgCgcIgCgaQAAgIgCgFQgGACgGAGIgJAKIgEAGIgBALIAAAOIAAAHIABAFQAAAEgCACQgDACgDAAQgJAAAAgUIABgOIABgMIgBgNIgBgMQAAgSAIAAQADABADACQADADAAACIgBAGIAAAEIAAAIQAEgIAIgHQAIgHAFABQAMAAADAMQAEgGAGgDQAGgDAIAAQANAAAFAOIADAWIAGArQAAADgCACQgDACgDAAQgHAAgBgGIgCgZIgDgWIgDgLQgCgGgEgBQgCABgIAFQgIAEgCADIAAAOIADAUIABAUQAAADgCADQgCACgEAAQgBAAgCgCg");
	this.shape_13.setTransform(-21.8,2.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAYAnIgEgFIgOAGQgGACgCAAQgSAAgIgKQgIgKAAgUQAAgRANgNQANgOAQAAQAHAAAIAEQALAEAAAGIgCAEIgBAKIAAAPQgBAKACAGIAFANIACAEIAAACQAAADgCACQgCACgDAAQgCAAgEgEgAgMgSQgJAKAAALQABAMAEAHQAFAGAIAAQAGAAAFgCIAIgGQgCgUgBgJIABgIIABgIIgEgCIgEgBQgKAAgJAKg");
	this.shape_14.setTransform(-32.2,2.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgdAkIAAg1IAAgIIABgIQAAgIAGAAQAIAAAAANQAOgOARAAQAHAAADAFQADAEAAAKIAAAGQgBAJgHAAQgHAAAAgHIAAgGIAAgGQgMABgGAFQgHAGgEAKIAAApQAAAHgIAAQgHAAAAgHg");
	this.shape_15.setTransform(-40,2.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgmA0QgKgKAAgVQAAgVAKgTQAJgVAPgOQAKgJAJAAQAHABAMAEQAOAGAAAGQAAADgDADQgCACgDABIgFgCQgMgIgIABQgFgBgGAHIgJALQgSAXAAAbQAAAOAFAGQAFAHANAAQAMgBALgIQAKgKAEgRQgVABgOAHIgDABQgDAAgDgDQgCgCAAgDQAAgEAEgDQAPgIAqAAQADgBACADQADAAAAAEQAAAEgFACQgFAYgPAPQgQAOgTAAQgTAAgJgLg");
	this.shape_16.setTransform(-49.4,0.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgYA7QgDgCAAgEQAAgCAFgMIASgqQAJgZANgOIABgCIglgBIgSAAQgHAAAAgIQAAgDACgBQACgDADAAIAeABIAcABIAOAAQAIAAAAAEQAAAEgFAGIgHAIQgKAMgIARIgOAdIgFASQgEAMgEAGQgCADgEAAQgDAAgCgCg");
	this.shape_17.setTransform(-64.5,0.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AABA8IgNAAIgHAAQgFgCAAgEQABgIALAAIAFAAIACAAIAAgLIgBgLIACgcQACgUgBgLQgKAJgDAAQgDAAgCgDQgCgCgBgDQAAgEAIgFIALgKQAFgGAHAAQAEAAAAAFIAAAGIgBAGIABAHIAAAIIgCAaIgBAZIAAALIABALIAIAAQAEAAABACQADACAAADQAAADgDACQgBACgEAAg");
	this.shape_18.setTransform(-73,0.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgiAoQgIgRAAgYQAAgXAKgRQAOgUATAAQAVAAALASQAKAPAAAWQAAAhgLARQgLASgVAAQgXAAgLgWgAgUgfQgHAMAAAQQAAAYAHANQAHANANAAQAQAAAGgTQAGgNAAgSQgBgWgGgKQgHgLgNAAQgMAAgJAPg");
	this.shape_19.setTransform(-81.6,0.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAXA6IgFgBIgMAAIgKABIgJABIgJAAIgCAAIgDAAQgGAAgBgFIgBgJQAAgTAKgLQAEgFAUgMQAKgHADgEQAHgIAAgKQAAgFgHgEQgFgDgGAAQgFAAgHADIgLAJQgDADgCAAQgIAAAAgGQAAgEADgCQAJgKAHgDQAJgFAIAAQANgBAKAIQALAHAAAMQAAAIgDAHQgBAGgGAGQgFAFgOAJQgNAJgFAFQgIAJAAANIAQgCIAWgBQAGAAAFADQAHACAAAFQAAADgCACQgCACgDAAIgGgBg");
	this.shape_20.setTransform(-91.3,0.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("Ag2ABQAAgTATgRQATgRAXAAQAXAAANAOQAMAOAAAWQABASgRARQgQATgXABIAAAAQg2AAAAg0gAgagbQgPAMAAAQQAAAVAMAJQAKAIATAAQARAAANgQQAMgOAAgMQAAgPgIgKQgIgKgQAAQgVAAgPALgAgUAQQgJgHAAgJQAAgMANgIQALgJALAAQAEAAADACQAEADAAAEQAAAGgGAAIgCAAIgCgBQgIAAgGAFQgIAEAAAGQAAADAFADQAEADAGAAQADAAAGgFIAIgEQADAAACABQACADAAACQAAAGgJAFQgJAFgGABQgLAAgJgHg");
	this.shape_21.setTransform(-102.7,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111.1,-13.1,222.2,26.3);


(lib.circlebuttonnext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_3 = function() {
		playSound("SEClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(3).call(this.frame_3).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("ABsAAQgBAsgfAgQggAfgsABQgrgBgggfQggggAAgsQAAgrAgggQAgggArAAQAsAAAgAgQAfAgABArg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Agsg7IBZA7IhZA8g");
	this.shape_1.setTransform(1.5,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3,1,1).p("AB2AAQAAAwgjAjQgjAjgwAAQgwAAgjgjQgigjAAgwQAAgwAigjQAjgiAwAAQAwAAAjAiQAjAjAAAwg");
	this.shape_2.setTransform(0,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#66FFFF").s().p("AhTBTQgigjAAgwQAAgwAigjQAjgiAwAAQAwAAAjAiQAjAjAAAwQAAAwgjAjQgjAjgwAAQgwAAgjgjgAghBCIBjhCIhjhBg");
	this.shape_3.setTransform(0,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgxhBIBjBBIhjBCg");
	this.shape_4.setTransform(1.6,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(3,1,1).p("ABMhLQAfAgABArQgBAsgfAgQggAfgsABQgrgBgggfQggggAAgsQAAgrAgggQAgggArAAQAsAAAgAgg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Agsg7IBZA7IhZA8g");
	this.shape_6.setTransform(1.5,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0000FF").s().p("AhLBLQgfgfgBgsQABgrAfggQAggfArgBQAsABAfAfQAgAgABArQgBAsggAfQgfAggsABQgrgBgggggAgdA8IBZg8IhZg7g");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhLBLQgfgfgBgsQABgrAfggQAggfArgBQAsABAfAfQAgAgABArQgBAsggAfQgfAggsABQgrgBggggg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_8},{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.3,-12.3,24.6,24.6);


(lib.twiggsstandingstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.twiggslegsstill();
	this.instance.setTransform(-1.5,39.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.9,-0.7,37.8,80.8);


(lib.twiggshead = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.twiggsheadstill();
	this.instance.setTransform(-6,2.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-14.1,31.5,32.7);


(lib.twiggsbody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.twiggsbodystill();
	this.instance.setTransform(0,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-16.4,34,33.6);


(lib.stacelegs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.stacelegstill();
	this.instance.setTransform(7.4,30.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.9,-12,34.6,83.8);


(lib.stacehead = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.staceheadstill();
	this.instance.setTransform(0,7.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-11.4,37.5,30.1);


(lib.stacebody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.stacebodystill();
	this.instance.setTransform(-0.1,-2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.1,-12.6,52.4,31.6);


(lib.slimlegs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.slimlegstill();
	this.instance.setTransform(6.1,30.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.7,-8.4,37.6,77.8);


(lib.slimhead = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.slimheadstill();
	this.instance.setTransform(0,5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.8,-8.1,21.5,27.9);


(lib.slimbody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.slimbodystill();
	this.instance.setTransform(2.8,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.9,-19.2,37.4,40.3);


(lib.samslegs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.samslegstill();
	this.instance.setTransform(2.8,1,0.82,0.82);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.5,-8.2,49.8,84.7);


(lib.samshead = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.samsheadstill();
	this.instance.setTransform(-1.2,7.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,-6.9,25.6,30);


(lib.samsbody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.samsbodystill();
	this.instance.setTransform(-0.2,-8.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.1,-30.5,48.2,41.5);


(lib.prolegs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.prolegsstill();
	this.instance.setTransform(16.1,-2.2,0.686,0.686);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.5,-1.4,43.7,70.5);


(lib.prohead = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.proheadstill();
	this.instance.setTransform(0,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.4,-16.5,38.8,35);


(lib.probody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.probodystill();
	this.instance.setTransform(1.2,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.1,-20.5,52.6,41.6);


(lib.Legs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.slimlegs();
	this.instance.setTransform(254.6,-35.3);

	this.instance_1 = new lib.samslegs();
	this.instance_1.setTransform(-254.2,-35);

	this.instance_2 = new lib.prolegs();
	this.instance_2.setTransform(187.6,-40.9);

	this.instance_3 = new lib.prolegs();
	this.instance_3.setTransform(-130.7,-40.9);

	this.instance_4 = new lib.slimlegs();
	this.instance_4.setTransform(-63.7,-35.3);

	this.instance_5 = new lib.stacelegs();
	this.instance_5.setTransform(-0.1,-32.7);

	this.instance_6 = new lib.twiggsstandingstill();
	this.instance_6.setTransform(-191.1,-43.2);

	this.instance_7 = new lib.twiggsstandingstill();
	this.instance_7.setTransform(127.2,-43.2);

	this.instance_8 = new lib.samslegs();
	this.instance_8.setTransform(63.6,-35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("APJm/IJYAAIAAN8IpYAAgAFOm/IJYAAIAAN8IpYAAgEAi+gG/IJYAAIAAN8IpYAAgAZDnBIJYAAIAAN8IpYAAgAkqm/IJWAAIAAN8IpWAAgEgsVgG6IJYAAIAAN8IpYAAgA4fm6IJYAAIAAN8IpYAAgAulm6IJYAAIAAN8IpYAAgEgiagG6IJYAAIAAN8IpYAAg");
	this.shape.setTransform(0.5,-2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9BFB").s().p("AkqG+IAAt7IJVAAIAAN7g");
	this.shape_1.setTransform(0.5,-2.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9EC49E").s().p("A9dHCIAAt8IJYAAIAAN8gAUGG7IAAt7IJYAAIAAN7g");
	this.shape_2.setTransform(32.2,-2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9E9BFB").s().p("A9dHBIAAt8IJYAAIAAN8gAUGG8IAAt8IJYAAIAAN8g");
	this.shape_3.setTransform(95.6,-1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9D9E").s().p("A9dHBIAAt8IJYAAIAAN8gAUGG8IAAt8IJYAAIAAN8g");
	this.shape_4.setTransform(-94.7,-1.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFE9E").s().p("A9dHBIAAt8IJYAAIAAN8gAUGG8IAAt8IJYAAIAAN8g");
	this.shape_5.setTransform(-31.3,-1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-284.3,-48,569.6,92);


(lib.Heads2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// actions
	this.instance = new lib.samshead();
	this.instance.setTransform(-253.3,-3);

	this.instance_1 = new lib.slimhead();
	this.instance_1.setTransform(254.3,0,1.012,0.991);

	this.instance_2 = new lib.prohead();
	this.instance_2.setTransform(191.4,2.6,1.012,0.986);

	this.instance_3 = new lib.prohead();
	this.instance_3.setTransform(-126.5,2.6);

	this.instance_4 = new lib.slimhead();
	this.instance_4.setTransform(-63.1,0.2);

	this.instance_5 = new lib.stacehead();
	this.instance_5.setTransform(1.5,1.7,1.012,0.991);

	this.instance_6 = new lib.twiggshead();
	this.instance_6.setTransform(-189.7,0.7);

	this.instance_7 = new lib.twiggshead();
	this.instance_7.setTransform(128.8,0.7,1.012,0.991);

	this.instance_8 = new lib.samshead();
	this.instance_8.setTransform(65.1,-3,1.012,0.991);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("APJjUIJYAAIAAGnIpYAAgAFOjUIJYAAIAAGnIpYAAgEAi+gDUIJYAAIAAGnIpYAAgAZDjUIJYAAIAAGnIpYAAgAkqjUIJWAAIAAGnIpWAAgEgsVgDSIJYAAIAAGnIpYAAgA4fjSIJYAAIAAGnIpYAAgAuljSIJYAAIAAGnIpYAAgEgiagDSIJYAAIAAGnIpYAAg");
	this.shape.setTransform(0.5,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9BFB").s().p("AkqDUIAAmmIJVAAIAAGmg");
	this.shape_1.setTransform(0.5,-0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9EC49E").s().p("A9dDUIAAmmIJYAAIAAGmgAUGDTIAAmmIJYAAIAAGmg");
	this.shape_2.setTransform(32.2,-0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9E9BFB").s().p("A9dDUIAAmmIJYAAIAAGmgAUGDTIAAmmIJYAAIAAGmg");
	this.shape_3.setTransform(95.6,-0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9D9E").s().p("A9dDUIAAmmIJYAAIAAGmgAUGDTIAAmmIJYAAIAAGmg");
	this.shape_4.setTransform(-94.7,-0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFE9E").s().p("A9dDUIAAmmIJYAAIAAGmgAUGDTIAAmmIJYAAIAAGmg");
	this.shape_5.setTransform(-31.3,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-284.3,-22.8,569.6,44.6);


(lib.headMove = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{R1:1,R2:9,R3:17,R4:24,R5:31,L1:39,L2:46,L3:53,L4:60,L5:67});

	// timeline functions:
	this.frame_0 = function() {
		var rCount = 0;
		var lCount = 0;
		var rando = 0;
		
		//Button calls
		this.btn_head_right.addEventListener("click", headsRight.bind(this));
		this.btn_head_left.addEventListener("click", headsLeft.bind(this));
		
		
		
		//Right
		function headsRight()
		{
			rCount += 1;
			if(rCount == 1){this.gotoAndPlay('R1'); lCount = 4;}
			else if(rCount ==2){this.gotoAndPlay('R2'); lCount = 3;}
			else if(rCount ==3){this.gotoAndPlay('R3'); lCount = 2;}
			else if(rCount ==4){this.gotoAndPlay('R4'); lCount = 1;}
			else if(rCount ==5){this.gotoAndPlay('R5'); lCount = 0;}
			else if(rCount > 5){
				
				this.gotoAndPlay('R1');
				rCount = 1;
				lCount = 4;
			}
			console.log('right click', rCount);
			console.log('Left click', lCount);
		}
		
		//Left
		function headsLeft()
		{
			
			lCount += 1;
			if(lCount == 1){this.gotoAndPlay('L1'); rCount = 4;}
			else if(lCount ==2){this.gotoAndPlay('L2'); rCount = 3;}
			else if(lCount ==3){this.gotoAndPlay('L3'); rCount = 2;}
			else if(lCount ==4){this.gotoAndPlay('L4'); rCount = 1;}
			else if(lCount ==5){this.gotoAndPlay('L5'); rCount = 0;}
			else if(lCount > 5){
				
				this.gotoAndPlay('L1');
				lCount = 1;
				rCount = 4;
			}
			console.log('right click', rCount);
			console.log('Left click', lCount);
		}
		
		this.shuffle = function()
		{
			
			rando = Math.floor(Math.random()*3);
		
			if(rando==0){this.gotoAndPlay('R3'); lCount = 2; rCount=3;}
			else if (rando==1){this.gotoAndPlay('R4'); rCount = 4; lCount=1;}
			else if (rando==2){this.gotoAndPlay('R2'); rCount = 2; lCount=3;}
		
		}
		function testText()
		{
			console.log('test');
		}
		
		this.stop();
	}
	this.frame_8 = function() {
		playSound('SE-Stop');
		this.stop();
	}
	this.frame_16 = function() {
		playSound('SE-Stop');
		this.stop();
	}
	this.frame_23 = function() {
		playSound('SE-Stop');
		this.stop();
	}
	this.frame_30 = function() {
		playSound('SE-Stop');
		this.stop();
	}
	this.frame_38 = function() {
		playSound('SE-Stop');
		this.stop();
	}
	this.frame_45 = function() {
		playSound('SE-Stop');
		this.stop();
	}
	this.frame_52 = function() {
		playSound('SE-Stop');
		this.stop();
	}
	this.frame_59 = function() {
		playSound('SE-Stop');
		this.stop();
	}
	this.frame_66 = function() {
		playSound('SE-Stop');
		this.stop();
	}
	this.frame_73 = function() {
		playSound('SE-Stop');
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(8).call(this.frame_16).wait(7).call(this.frame_23).wait(7).call(this.frame_30).wait(8).call(this.frame_38).wait(7).call(this.frame_45).wait(7).call(this.frame_52).wait(7).call(this.frame_59).wait(7).call(this.frame_66).wait(7).call(this.frame_73).wait(37));

	// buttons
	this.btn_head_left = new lib.circlebuttonnext();
	this.btn_head_left.setTransform(-240.9,0.6,1.1,1.1,180);
	new cjs.ButtonHelper(this.btn_head_left, 0, 1, 2, false, new lib.circlebuttonnext(), 3);

	this.btn_head_right = new lib.circlebuttonnext();
	this.btn_head_right.setTransform(-11.4,0.7,1.1,1.1);
	new cjs.ButtonHelper(this.btn_head_right, 0, 1, 2, false, new lib.circlebuttonnext(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_head_right},{t:this.btn_head_left}]}).wait(110));

	// Mask
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AQ3IDIAAv6IeKAAIAAP6gEgvAAIDIAAwFMAhmAAAIAAQFg");
	this.shape.setTransform(-137.6,-23.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(110));

	// Head
	this.head_row = new lib.Heads2();
	this.head_row.setTransform(0,2);

	this.timeline.addTween(cjs.Tween.get(this.head_row).wait(1).to({x:63,y:3.2},7).to({x:-253.8},1).to({x:-190.3},7).wait(1).to({x:-127},6).wait(1).to({x:-63.3},6).wait(1).to({x:0},7).wait(1).to({x:-63.5},6).wait(1).to({x:-126.6},6).wait(1).to({x:-190.3},6).wait(1).to({x:-253.9},6).wait(1).to({x:-316.9},6).to({_off:true},1).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-438.6,-74.6,723.4,103.1);


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


(lib.Bodies = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.samsbody();
	this.instance.setTransform(-254.2,10.3);

	this.instance_1 = new lib.slimbody();
	this.instance_1.setTransform(254.2,-1.7);

	this.instance_2 = new lib.probody();
	this.instance_2.setTransform(190.8,-1.1);

	this.instance_3 = new lib.probody();
	this.instance_3.setTransform(-127.5,-1.1);

	this.instance_4 = new lib.slimbody();
	this.instance_4.setTransform(-63.7,-1.7);

	this.instance_5 = new lib.stacebody();
	this.instance_5.setTransform(0,-4.5);

	this.instance_6 = new lib.twiggsbody();
	this.instance_6.setTransform(-191.1,-0.2);

	this.instance_7 = new lib.twiggsbody();
	this.instance_7.setTransform(127.1,-0.2);

	this.instance_8 = new lib.samsbody();
	this.instance_8.setTransform(63.7,10.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("APJjTIJYAAIAAGmIpYAAgAFOjTIJYAAIAAGmIpYAAgEAi+gDTIJYAAIAAGmIpYAAgAZDjUIJYAAIAAGmIpYAAgAkqjTIJWAAIAAGmIpWAAgEgsVgDRIJYAAIAAGmIpYAAgA4fjRIJYAAIAAGmIpYAAgAuljRIJYAAIAAGmIpYAAgEgiagDRIJYAAIAAGmIpYAAg");
	this.shape.setTransform(0.5,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9EC49E").s().p("A9dDVIAAmmIJYAAIAAGmgAUGDSIAAmmIJYAAIAAGmg");
	this.shape_1.setTransform(32.2,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFE9E").s().p("A9dDUIAAmmIJYAAIAAGmgAUGDTIAAmmIJYAAIAAGmg");
	this.shape_2.setTransform(-31.3,-0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9D9E").s().p("A9dDUIAAmmIJYAAIAAGmgAUGDTIAAmmIJYAAIAAGmg");
	this.shape_3.setTransform(-94.7,-0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9BFB").s().p("AkqDUIAAmmIJVAAIAAGmg");
	this.shape_4.setTransform(0.5,-0.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9E9BFB").s().p("A9dDUIAAmmIJYAAIAAGmgAUGDTIAAmmIJYAAIAAGmg");
	this.shape_5.setTransform(95.6,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-284.3,-22.9,569.6,44.7);


(lib.LegsMoving = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"R1":1,"R2":9,"R3":17,"R4":25,"R5":33,"L1":41,"L2":49,"L3":57,"L4":65,"L5":73});

	// timeline functions:
	this.frame_0 = function() {
		var rCount = 0;
		var lCount = 0;
		var rando = 0;
		
		//Button calls
		this.btn_leg_right.addEventListener("click", legsRight.bind(this));
		this.btn_leg_left.addEventListener("click", legsLeft.bind(this));
		
		
		
		//Right
		function legsRight()
		{
			rCount += 1;
			if(rCount == 1){this.gotoAndPlay('R1'); lCount = 4;}
			else if(rCount ==2){this.gotoAndPlay('R2'); lCount = 3;}
			else if(rCount ==3){this.gotoAndPlay('R3'); lCount = 2;}
			else if(rCount ==4){this.gotoAndPlay('R4'); lCount = 1;}
			else if(rCount ==5){this.gotoAndPlay('R5'); lCount = 0;}
			else if(rCount > 5){
				
				this.gotoAndPlay('R1');
				rCount = 1;
				lCount = 4;
			}
			console.log('right click', rCount);
			console.log('Left click', lCount);
		}
		
		//Left
		function legsLeft()
		{
			
			lCount += 1;
			if(lCount == 1){this.gotoAndPlay('L1'); rCount = 4;}
			else if(lCount ==2){this.gotoAndPlay('L2'); rCount = 3;}
			else if(lCount ==3){this.gotoAndPlay('L3'); rCount = 2;}
			else if(lCount ==4){this.gotoAndPlay('L4'); rCount = 1;}
			else if(lCount ==5){this.gotoAndPlay('L5'); rCount = 0;}
			else if(lCount > 5){
				
				this.gotoAndPlay('L1');
				lCount = 1;
				rCount = 4;
			}
			console.log('right click', rCount);
			console.log('Left click', lCount);
		}
		
		this.shuffle = function()
		{
			
			rando = Math.floor(Math.random()*3);
		
			if(rando==0){this.gotoAndPlay('R2'); lCount = 3; rCount=2;}
			else if (rando==1){this.gotoAndPlay('R1'); rCount = 1; lCount=4;}
			else if (rando==2){this.gotoAndPlay('R5'); rCount = 5; lCount=0;}
		
		}
		this.stop();
	}
	this.frame_8 = function() {
		playSound('SE-Stop');
		this.stop();
	}
	this.frame_16 = function() {
		playSound('SE-Stop');
		this.stop();
	}
	this.frame_24 = function() {
		playSound('SE-Stop');
		this.stop();
	}
	this.frame_32 = function() {
		playSound('SE-Stop');
		this.stop();
	}
	this.frame_40 = function() {
		playSound('SE-Stop');
		this.stop();
	}
	this.frame_48 = function() {
		playSound('SE-Stop');
		this.stop();
	}
	this.frame_56 = function() {
		playSound('SE-Stop');
		this.stop();
	}
	this.frame_64 = function() {
		playSound('SE-Stop');
		this.stop();
	}
	this.frame_72 = function() {
		playSound('SE-Stop');
		this.stop();
	}
	this.frame_80 = function() {
		playSound('SE-Stop');
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(8).call(this.frame_16).wait(8).call(this.frame_24).wait(8).call(this.frame_32).wait(8).call(this.frame_40).wait(8).call(this.frame_48).wait(8).call(this.frame_56).wait(8).call(this.frame_64).wait(8).call(this.frame_72).wait(8).call(this.frame_80).wait(30));

	// buttons
	this.btn_leg_left = new lib.circlebuttonnext();
	this.btn_leg_left.setTransform(-241.3,-26.1,1.1,1.1,180);
	new cjs.ButtonHelper(this.btn_leg_left, 0, 1, 2, false, new lib.circlebuttonnext(), 3);

	this.btn_leg_right = new lib.circlebuttonnext();
	this.btn_leg_right.setTransform(-11.8,-26,1.1,1.1);
	new cjs.ButtonHelper(this.btn_leg_right, 0, 1, 2, false, new lib.circlebuttonnext(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_leg_right},{t:this.btn_leg_left}]}).wait(110));

	// mask
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Egu/AKoIAA1NMAhwAAAIAAVNgAQ/JhIAA0IIeBAAIAAUIg");
	this.shape.setTransform(-138.2,18.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(110));

	// Right
	this.instance = new lib.Legs("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},1).to({x:64},7).to({x:-253.6},1).to({x:-190.5},7).to({startPosition:0},1).to({x:-126.8},7).to({startPosition:0},1).to({x:-63.2},7).to({startPosition:0},1).to({x:0},7).to({startPosition:0},1).to({x:-63},7).to({startPosition:0},1).to({x:-127},7).to({startPosition:0},1).to({x:-190.5},7).to({startPosition:0},1).to({x:-254.1},7).to({startPosition:0},1).to({x:-316.7},7).to({_off:true},1).wait(29));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-439,-49.3,724.3,136.1);


(lib.BodiesMoving = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"R1":0,"R1":1,"R2":8,"R3":16,"R4":24,"R5":31,"L1":38,"L2":46,"L3":54,"L4":62,"L5":70});

	// timeline functions:
	this.frame_0 = function() {
		var rCount = 0;
		var lCount = 0;
		var rando = 0;
		
		//Button calls
		this.btn_body_right.addEventListener("click", bodiesRight.bind(this));
		this.btn_body_left.addEventListener("click", bodiesLeft.bind(this));
		
		
		
		//Right
		function bodiesRight()
		{
			rCount += 1;
			if(rCount == 1){this.gotoAndPlay('R1'); lCount = 4;}
			else if(rCount ==2){this.gotoAndPlay('R2'); lCount = 3;}
			else if(rCount ==3){this.gotoAndPlay('R3'); lCount = 2;}
			else if(rCount ==4){this.gotoAndPlay('R4'); lCount = 1;}
			else if(rCount ==5){this.gotoAndPlay('R5'); lCount = 0;}
			else if(rCount > 5){
				
				this.gotoAndPlay('R1');
				rCount = 1;
				lCount = 4;
			}
			console.log('right click', rCount);
			console.log('Left click', lCount);
		}
		
		//Left
		function bodiesLeft()
		{
			
			lCount += 1;
			if(lCount == 1){this.gotoAndPlay('L1'); rCount = 4;}
			else if(lCount ==2){this.gotoAndPlay('L2'); rCount = 3;}
			else if(lCount ==3){this.gotoAndPlay('L3'); rCount = 2;}
			else if(lCount ==4){this.gotoAndPlay('L4'); rCount = 1;}
			else if(lCount ==5){this.gotoAndPlay('L5'); rCount = 0;}
			else if(lCount > 5){
				
				this.gotoAndPlay('L1');
				lCount = 1;
				rCount = 4;
			}
			console.log('right click', rCount);
			console.log('Left click', lCount);
		}
		
		this.shuffle = function()
		{
			
			rando = Math.floor(Math.random()*3);
		
			if(rando==0){this.gotoAndPlay('L3'); lCount = 3; rCount=2;}
			else if (rando==1){this.gotoAndPlay('L4'); rCount = 1; lCount=4;}
			else if (rando==2){this.gotoAndPlay('L2'); rCount = 3; lCount=2;}
		
		}
		this.stop();
	}
	this.frame_7 = function() {
		playSound('SE-Stop');
		this.stop();
	}
	this.frame_15 = function() {
		playSound('SE-Stop');
		this.stop();
	}
	this.frame_23 = function() {
		playSound('SE-Stop');
		this.stop();
	}
	this.frame_30 = function() {
		playSound('SE-Stop');
		this.stop();
	}
	this.frame_37 = function() {
		playSound('SE-Stop');
		this.stop();
	}
	this.frame_45 = function() {
		playSound('SE-Stop');
		this.stop();
	}
	this.frame_53 = function() {
		playSound('SE-Stop');
		this.stop();
	}
	this.frame_61 = function() {
		playSound('SE-Stop');
		this.stop();
	}
	this.frame_69 = function() {
		playSound('SE-Stop');
		this.stop();
	}
	this.frame_77 = function() {
		playSound('SE-Stop');
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(8).call(this.frame_15).wait(8).call(this.frame_23).wait(7).call(this.frame_30).wait(7).call(this.frame_37).wait(8).call(this.frame_45).wait(8).call(this.frame_53).wait(8).call(this.frame_61).wait(8).call(this.frame_69).wait(8).call(this.frame_77).wait(33));

	// buttons
	this.btn_body_left = new lib.circlebuttonnext();
	this.btn_body_left.setTransform(-241.3,0,1.1,1.1,180);
	new cjs.ButtonHelper(this.btn_body_left, 0, 1, 2, false, new lib.circlebuttonnext(), 3);

	this.btn_body_right = new lib.circlebuttonnext();
	this.btn_body_right.setTransform(-11.8,0.1,1.1,1.1);
	new cjs.ButtonHelper(this.btn_body_right, 0, 1, 2, false, new lib.circlebuttonnext(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_body_right},{t:this.btn_body_left}]}).wait(110));

	// mask
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AQ+DwIAAnfIeKAAIAAHfgEgvHADkIAAnTMAhwAAAIAAHTg");
	this.shape.setTransform(-138,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(110));

	// animations
	this.instance = new lib.Bodies("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:9.2},1).to({x:64.4},6).to({x:-253.2},1).to({x:-189.7},7).to({startPosition:0},1).to({x:-126.6},7).to({startPosition:0},1).to({x:-63.6},6).to({startPosition:0},1).to({x:0},6).to({startPosition:0},1).to({x:-63.3},7).to({startPosition:0},1).to({x:-127.1},7).to({startPosition:0},1).to({x:-190.5},7).to({startPosition:0},1).to({x:-254},7).to({startPosition:0},1).to({x:-317},7).to({_off:true},1).wait(32));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-439.6,-23.5,724.9,48);


(lib.puzzle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var that = this;
		
		that.btn_shuffle.addEventListener("click", buttonClicked);
		 
		function buttonClicked(){
		  that.heads.shuffle();
		  that.body.shuffle();
		  that.leg.shuffle();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Background
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("APFuvIAAdfI+JAAIAA9fg");
	this.shape.setTransform(-111.4,19.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Shuffle
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009921").s().p("AAfBaIAAhXIgBgTQgBgLgDgFQgDgGgGgCQgGgDgLAAQgFAAgIACQgIADgJAFIAAB7Ig5AAIAAiuIA5AAIAAAUQAPgMANgGQAMgHARAAQAdAAAQARQAQARAAAhIAABwg");
	this.shape_1.setTransform(36.7,-113.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009921").s().p("AhHBJQgQgRAAggIAAhxIA5AAIAABXIABAVQABAIADAGQADAGAGACQAGADAKAAQAGAAAIgDQAJgCAIgFIAAh7IA5AAIAACuIg5AAIAAgUQgPAMgNAHQgLAGgSAAQgdAAgQgRg");
	this.shape_2.setTransform(13.7,-112.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#009921").s().p("AhGBEQgZgZAAgrQAAgqAZgZQAagZAsAAQAtAAAaAZQAZAZAAAqQAAArgZAZQgaAZgtAAQgsAAgagZgAgNgyQgHACgFAGQgGAHgDAKQgCALAAAOQgBAOADALQADAKAFAHQAFAGAHADQAHADAHAAQAHAAAIgDQAGgDAFgGQAGgGADgKQACgJAAgRQAAgOgCgKQgEgKgFgHQgEgGgHgDQgHgCgIAAQgHAAgGACg");
	this.shape_3.setTransform(-8.5,-112.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#009921").s().p("AAfBaIAAhXIgBgTQgBgLgDgFQgDgGgGgCQgGgDgLAAQgFAAgIACQgIADgJAFIAAB7Ig5AAIAAiuIA5AAIAAAUQAPgMANgGQAMgHARAAQAdAAAQARQAQARAAAhIAABwg");
	this.shape_4.setTransform(-30.9,-113.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#009921").s().p("AhFBEQgagZAAgrQAAgqAagZQAZgZAsAAQAtAAAaAZQAZAZgBAqQABArgZAZQgaAZgtAAQgtAAgYgZgAgNgyQgGACgGAGQgFAHgDAKQgDALAAAOQAAAOACALQADAKAFAHQAFAGAHADQAHADAHAAQAIAAAGgDQAIgDAEgGQAFgGAEgKQACgJAAgRQAAgOgCgKQgEgKgEgHQgGgGgHgDQgHgCgHAAQgHAAgGACg");
	this.shape_5.setTransform(-53.3,-112.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#009921").s().p("Ag+BYIAAiuIA4AAIAAAaQARgQAOgFQANgGAMAAIAGAAIAHABIAAA1IgFAAIgMgBIgNgBQgMAAgJABIgSAGIAAB0g");
	this.shape_6.setTransform(-71.2,-112.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#009921").s().p("AhfB0IAAjnIBhAAQAXAAAPAEQAPAEAMAHQAOAKAIAOQAGAOAAAVQAAAPgEAPQgGANgLAKQgOAOgQAHQgSAHgZAAIgjAAIAABMgAgigCIARAAQAPAAAIgCQAKgCAHgFQAFgFADgHQADgHAAgKQgBgKgFgHQgFgHgHgDQgKgEgGAAIgYAAIgKAAg");
	this.shape_7.setTransform(-91.1,-115.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#009921").s().p("AgcBXIAAg9IA5AAIAAA9gAgcgZIAAg9IA5AAIAAA9g");
	this.shape_8.setTransform(-121.1,-112.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#009921").s().p("Ag5ByQgUgFgMgFIAAgzIAGAAQAPAIARAGQAPAFARAAQAKAAAKgCQALgCAHgGQAFgFACgFQAEgFAAgKQAAgJgFgFQgDgGgGgEQgJgFgJgCIgVgBQgPAAgMACIgXAFIgHAAIAAiBICkAAIAAAsIhrAAIAAAmIALAAIAMgBQATAAAPAEQAPAEALAGQAOAJAIANQAIANAAAWQAAASgGAPQgIAQgMALQgPAMgSAFQgTAGgWAAQgcAAgTgEg");
	this.shape_9.setTransform(-138.6,-115.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#009921").s().p("AAfBaIAAhXIgBgTQgBgLgDgFQgDgGgGgCQgGgDgLAAQgFAAgIACQgIADgJAFIAAB7Ig5AAIAAiuIA5AAIAAAUQAPgMANgGQAMgHARAAQAdAAAQARQAQARAAAhIAABwg");
	this.shape_10.setTransform(-172.5,-113.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#009921").s().p("AhGBEQgZgZAAgrQAAgqAZgZQAagZAsAAQAtAAAaAZQAZAZAAAqQAAArgZAZQgaAZgtAAQgtAAgZgZgAgNgyQgHACgFAGQgGAHgDAKQgCALAAAOQAAAOACALQADAKAFAHQAFAGAHADQAHADAHAAQAHAAAIgDQAGgDAFgGQAGgGADgKQACgJAAgRQAAgOgCgKQgDgKgFgHQgFgGgHgDQgIgCgHAAQgHAAgGACg");
	this.shape_11.setTransform(-194.9,-112.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#009921").s().p("AgbB5IAAitIA3AAIAACtgAgchOIAAgqIA5AAIAAAqg");
	this.shape_12.setTransform(-211.4,-116.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#009921").s().p("AgZBlQgQgNAAghIAAhQIgYAAIAAgmIAYAAIAAgyIA2AAIAAAyIA1AAIAAAmIg1AAIAAA8IAAAQQAAAIADAFQACAGAFADQAGADALAAIALgCIAKgEIAFAAIAAAnQgKACgKABQgKACgPAAQgeAAgQgNg");
	this.shape_13.setTransform(-224.2,-115.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#009921").s().p("AgSBXQgTgGgOgLQgOgMgIgRQgHgRAAgYQAAgWAIgSQAIgRAPgNQAOgKASgGQARgFAUAAQASAAAPAEQAPAEANAGIAAAwIgIAAIgHgGIgMgIIgOgGQgHgCgKAAQgXABgKAOQgMAOAAAWQAAAaAMANQALANAWAAQALAAAJgCIAOgGIAJgHIAHgHIAIAAIAAAxQgNAGgOAEQgPADgRAAQgWAAgSgFg");
	this.shape_14.setTransform(-240.8,-112.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#009921").s().p("Ag/BFQgcgYAAgsQAAgpAagaQAbgZAsAAQArAAAWAWQAVAVAAApIAAARIh/AAQACAVAOALQAPALAaAAQARAAARgGQARgHAKgHIAGAAIAAAtQgTAIgRADQgRADgUAAQgzAAgcgXgAgXgwQgLAJgBASIBHAAQAAgRgJgJQgIgJgRAAQgPAAgKAIg");
	this.shape_15.setTransform(-260.9,-113);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#009921").s().p("Ag6BzQgVgFgTgHIAAg4IAHAAQASAPAXAHQAYAJAUgBIANAAQAJgCAFgCQAIgCAEgFQAEgEAAgJQAAgHgGgFQgHgGgMgDIgagGQgOgDgOgEQgdgKgNgNQgNgRAAgZQAAggAdgUQAdgVAtAAQAWAAAXAEQAXAFAQAHIAAA2IgHAAQgOgMgUgHQgVgIgVAAIgNABQgHABgHADQgGACgFAFQgEAEAAAHQAAAJAHAFQAHAFAUAEIAWAFIAaAHQAbAIANAOQAMAPAAAYQAAAigdAWQgdAVgwAAQgdAAgWgFg");
	this.shape_16.setTransform(-282.7,-115.8);

	this.btn_shuffle = new lib.Shuffle();
	this.btn_shuffle.setTransform(-110.8,136.8,0.953,1.094,0,0,0,-0.1,0.3);
	new cjs.ButtonHelper(this.btn_shuffle, 0, 1, 2, false, new lib.Shuffle(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_shuffle},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Head
	this.heads = new lib.headMove();
	this.heads.setTransform(15.1,-51.4);

	this.timeline.addTween(cjs.Tween.get(this.heads).wait(1));

	// Body
	this.body = new lib.BodiesMoving();
	this.body.setTransform(15,-3.7,1,1,0,0,0,-0.1,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.body).wait(1));

	// Leg
	this.leg = new lib.LegsMoving();
	this.leg.setTransform(15,66.5,1,1,0,0,0,-0.1,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.leg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-424.6,-138.3,724.4,294.1);


// stage content:
(lib.puzzle_pronoun = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.btn_goNext.addEventListener("click", openNext.bind(this));
		
		
		function openNext(){
		
		 window.open ("pronoun_intro.html","_self");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// puzzle
	this.btn_goNext = new lib.goNext();
	this.btn_goNext.setTransform(253.8,319.7);
	new cjs.ButtonHelper(this.btn_goNext, 0, 1, 2, false, new lib.goNext(), 3);

	this.instance = new lib.Copyright("synched",0);
	this.instance.setTransform(275,389.5);

	this.puzzle = new lib.puzzle();
	this.puzzle.setTransform(385.9,154.3,0.991,0.991,0,0,0,-0.3,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.puzzle},{t:this.instance},{t:this.btn_goNext}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(240.6,217.8,717.7,384.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;