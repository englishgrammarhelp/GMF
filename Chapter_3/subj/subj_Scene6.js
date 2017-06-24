(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	manifest: [
		{src:"sounds/_16_blues.mp3?1498330807148", id:"_16_blues"},
		{src:"sounds/bgmusic.mp3?1498330807148", id:"bgmusic"},
		{src:"sounds/BeitResolved.mp3?1498330807148", id:"BeitResolved"},
		{src:"sounds/chairmanorderedBeachHut.mp3?1498330807148", id:"chairmanorderedBeachHut"},
		{src:"sounds/departure_louder.mp3?1498330807148", id:"departure_louder"},
		{src:"sounds/Fourformalmotionsandresolutions.mp3?1498330807148", id:"Fourformalmotionsandresolutions"},
		{src:"sounds/Ifyouwereheretennis.mp3?1498330807148", id:"Ifyouwereheretennis"},
		{src:"sounds/Iwishyouwerehere.mp3?1498330807148", id:"Iwishyouwerehere"},
		{src:"sounds/JingleAdjetives.mp3?1498330807148", id:"JingleAdjetives"},
		{src:"sounds/ohbaby.mp3?1498330807148", id:"ohbaby"},
		{src:"sounds/Onestatementscontrarytofact.mp3?1498330807148", id:"Onestatementscontrarytofact"},
		{src:"sounds/piano_lick.mp3?1498330807148", id:"piano_lick"},
		{src:"sounds/real_disco.mp3?1498330807148", id:"real_disco"},
		{src:"sounds/relax.mp3?1498330807148", id:"relax"},
		{src:"sounds/sax_lick.mp3?1498330807148", id:"sax_lick"},
		{src:"sounds/TherearefourformsoftheSubjunctiveMood.mp3?1498330807148", id:"TherearefourformsoftheSubjunctiveMood"},
		{src:"sounds/Threeconveyingthecontents.mp3?1498330807148", id:"Threeconveyingthecontents"},
		{src:"sounds/Twowishes.mp3?1498330807148", id:"Twowishes"}
	]
};



// symbols:



(lib.were = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgYAfQgLgJAAgQQAAgSAJgNQAKgOAQABQALAAAIADQAJAGAAAKQAAAIgIAFIgPAGIgaAOQAEAGAFADQAHADAGAAQAFAAAHgCQAIgCADgEQADgEACAAQADAAACACQABABAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAIgNAFQgMAFgKABQgOAAgLgJgAgOgTQgGAIgDALIAWgJQAMgFAFgFQgFgHgLAAQgIAAgGAHg");
	this.shape.setTransform(13,2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgbAhIAAgxIAAgIIAAgHQAAgIAHAAQAHAAAAANQANgOAQAAQAHABACAEQADAEAAAJIAAAGQAAAIgHABQgGAAgBgIIAAgFIAAgGQgLABgGAFQgGAGgEAJIAAAmQAAAIgIgBQgGABAAgIg");
	this.shape_1.setTransform(5.4,2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgYAfQgLgJAAgQQAAgSAJgNQAKgOAQABQALAAAIADQAJAGAAAKQAAAIgIAFIgPAGIgaAOQADAGAHADQAGADAGAAQAFAAAHgCQAIgCADgEQADgEACAAQADAAACACQABABAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAIgNAFQgLAFgLABQgOAAgLgJgAgOgTQgGAIgDALIAWgJQAMgFAFgFQgFgHgLAAQgIAAgGAHg");
	this.shape_2.setTransform(-2.4,2.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AAEAUIgDgRIgBgOIgFAMIgMAeIgCAFQgDAEgEAAQgGAAgFgWIgFgcIgCgMIgBgLQAAgCADgCQACgDACAAQAGABACAFIABALIABALIAFAfQAHgVAJgeQACgHAFgBQAGABABAIIAFAbIAFAbIAFgUIAKgmQABgFAGAAQADAAACADQACACAAACIAAAEIgPA0QgDAGgFAHQgCAEgFAAQgHABgFgVg");
	this.shape_3.setTransform(-11.7,2.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#009900").s().p("AgYAfQgLgJAAgQQAAgSAJgNQAKgOAQABQALAAAIADQAJAGAAAKQAAAIgIAFIgPAGIgaAOQAEAGAFADQAHADAGAAQAFAAAHgCQAIgCADgEQADgEACAAQADAAACACQABABAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAIgNAFQgMAFgKABQgOAAgLgJgAgOgTQgGAIgDALIAWgJQAMgFAFgFQgFgHgLAAQgIAAgGAHg");
	this.shape_4.setTransform(13,2.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#009900").s().p("AgbAhIAAgxIAAgIIAAgHQAAgIAHAAQAHAAAAANQANgOAQAAQAHABACAEQADAEAAAJIAAAGQAAAIgHABQgGAAgBgIIAAgFIAAgGQgLABgGAFQgGAGgEAJIAAAmQAAAIgIgBQgGABAAgIg");
	this.shape_5.setTransform(5.4,2.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#009900").s().p("AgYAfQgLgJAAgQQAAgSAJgNQAKgOAQABQALAAAIADQAJAGAAAKQAAAIgIAFIgPAGIgaAOQADAGAHADQAGADAGAAQAFAAAHgCQAIgCADgEQADgEACAAQADAAACACQABABAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAIgNAFQgLAFgLABQgOAAgLgJgAgOgTQgGAIgDALIAWgJQAMgFAFgFQgFgHgLAAQgIAAgGAHg");
	this.shape_6.setTransform(-2.4,2.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#009900").s().p("AAEAUIgDgRIgBgOIgFAMIgMAeIgCAFQgDAEgEAAQgGAAgFgWIgFgcIgCgMIgBgLQAAgCADgCQACgDACAAQAGABACAFIABALIABALIAFAfQAHgVAJgeQACgHAFgBQAGABABAIIAFAbIAFAbIAFgUIAKgmQABgFAGAAQADAAACADQACACAAACIAAAEIgPA0QgDAGgFAHQgCAEgFAAQgHABgFgVg");
	this.shape_7.setTransform(-11.7,2.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},9).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,-12.4,38,24.9);


(lib.FourForms = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgJAJQgEgDAAgGQAAgEAEgFQAEgEAFAAQAFAAAEAEQAFAFAAAEQAAAGgFADQgEAFgFAAQgFAAgEgFg");
	this.shape.setTransform(130.5,27.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009900").s().p("AgkBeQgNgDgHgFIAAAAQgGAAgDgEQgEgEABgFIABgkIABglIgBgnIAAgpQAAgFAEgFQAGgFAEgBQADABAQAHQASAKADAAQAfAMAXAXQAcAcAAAfQAAAVgJARQgKATgQALQgSANggAAQgJgBgLgCgAgrgfIAAAfIgCBAIADACQAKAHAQAAQAZAAAMgIQALgIAHgNQAHgNAAgOQgBgfgjgYQgKgHgsgUg");
	this.shape_1.setTransform(119.2,18.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009900").s().p("Ag6BIQgZgVAAghQABgnAYghQAbglAlAAQAnAAATASQATASABAnQAAAmgXAhQgZAlgmAAQghAAgXgUgAgogmQgSAaAAAeQgBAWASAPQAQANAXAAQAbAAASgdQAQgZABgeQgBgcgMgMQgMgLgdAAQgaAAgUAdg");
	this.shape_2.setTransform(100.7,18.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#009900").s().p("Ag6BIQgYgVgBghQAAgnAZghQAaglAmAAQAnAAATASQAUASAAAnQAAAmgXAhQgZAlgmAAQghAAgXgUgAgogmQgSAaAAAeQAAAWARAPQAPANAYAAQAbAAASgdQAQgZAAgeQAAgcgMgMQgMgLgdAAQgaAAgUAdg");
	this.shape_3.setTransform(81.5,18.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#009900").s().p("ABIBYQgEgGgDgNIgEgUQgFgTgKg+IgYBFIgHAWQgEANgFAJQgEAJgGAAQgIAAgDgIIgFgMIgDgNQgNgqgIgtIgFAVIgPA8QgBALgEAVQgEAJgJAAQgFAAgEgEQgDgDAAgFQAAgUAIgcIANguIAHglQAGgZAFgIQAFgHAHAAQAIAAADAIQAFALAFAgQAGAnANAqQAQgrANgxIADgRQACgKAEgGQAEgJAIAAQAKAAAGATIAEAcQAHAzAKAmIAGAUQAFAQgBAEQAAAFgDADQgFADgEAAQgGAAgEgGg");
	this.shape_4.setTransform(61.4,18.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#009900").s().p("AgyBaQgLgLAAglIAAgRIABgTIgBgGQAAgCACgDQACgiAAgQIgBgNIgBgMQAAgOAMAAQAFAAADADQAOgEANgBQAMgCAJAAQAdAAARAGQAHAEAAAIQAAAEgDAEQgDAEgFAAIgEgBQgUgFgSAAQgJAAgKACQgLABgNAEIABAMIgCAtIAxgFIAcgCQAFAAADADQAEADAAAGQAAAIgLACIgcACIg0AFIgBAQIAAAOQAAAaAEAEQADADAPAAIAUAAIAWAAIAHgBIAHgBQAMAAAAAMQAAAKgKACQgLACgiAAQglAAgKgJg");
	this.shape_5.setTransform(36.3,18.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#009900").s().p("AgUBVQgOgkgShBIgJggQgHgYAAgIQAAgFAEgDQADgDAFAAQAJAAADAJIAEAVIALAnQAMAqAKAfIABgBIAdhTIAKgdQAHgSAHgIQAEgFAGAAQAEAAAEAEQAEADAAAFQAAAEgDADQgHALgFAMIgIAaIggBTQgFAPgIAOQgCAHgGAAQgJAAgEgJg");
	this.shape_6.setTransform(21.4,18.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#009900").s().p("AgyBWQgEgDAAgFQAAgGAEgDQADgEAFAAIAZgDQACgJAAgMIgBgUIgBgUQAAgZADgoIgPABIgQAAQgFAAgDgEQgDgDAAgFQAAgLALgBIAjgBQAWAAAjAFQAKABAAALQAAAGgEADQgEADgEAAIgSgCIgUgCQgDAiAAAdIABAUIAAAVIAAAUIAlAAQAEgBAEAEQAEADAAAFQAAAFgEAEQgEADgEAAIgUAAIgTABIgWACIgXACQgFAAgDgDg");
	this.shape_7.setTransform(6.4,18.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#009900").s().p("AgHBVQgDgDgBgFIABgFIAAgGIgBgRIAAgRQAAgRgDgcIgDgvIgLAAQgaAAgOgEQgKgCABgKQAAgEADgEQADgEAGAAIASACIATACIAVgBIAUAAIAbABIAbACQAEAAAEADQADAEAAAFQAAAFgDADQgEAEgEAAIgbgCIgbgBIgIAAQAAAQADAlQADAgAAASIABANIAAAMQAAAIgDAGQgCAIgHAAQgDAAgEgEg");
	this.shape_8.setTransform(-7.3,18.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#009900").s().p("AgwBHQgQgSAAgYQAAgmAigqQAbgiAbAAIAKAAIAIACQAEgGAHAAQAIAAACAKQACAKAAAOQAAAFgDADQgDAFgGAAQgHAAgEgJQgDgIgDgBQgDgBgJAAQgRAAgTAaQgcAiAAAeQAAAPAJALQAKALAOAAQALAAAMgGQAHgEAOgKQAGgFAEAAQAFAAADAEQAEAEAAAEQAAAGgFAEQgfAbgeAAQgYAAgRgTg");
	this.shape_9.setTransform(-23.5,18.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#009900").s().p("AhOBbQgDgEAAgFIABgPIAAgPIABgVIAAgWIAAgVIgBgYIgBgWIgBgWQAAgFAEgFQAFgEAGAAQAGAAAJAOQAdArAXAdQAbAhAhAfIAAgPIAAgPQAAgxgFgfIgDgMQgCgIAAgEQAAgOAMAAQAVAAAABMIgBAlIAAAnIgCASQgCAMgKAAQgHAAgJgIQgwgtg7hTIAAAaIgBAZIABAdIAAAdQAAAggNAAQgGAAgEgEg");
	this.shape_10.setTransform(-40.4,18.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#009900").s().p("AgzBFQgOgRgEghQgCgPAAgqIABgbQABgLABgEQADgIAIAAQAKAAABAUIAABEQgBBFAwAAQAvAAAAh1IAAgMIgBgJQAAgHADgGQADgHAHAAQALAAAAAQIABAPIAAAOQAACGhHAAQgiAAgSgVg");
	this.shape_11.setTransform(-58.8,18.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#009900").s().p("AgvBRQgWgRAAgVQAAgOAMAAQAMAAAAAOQAAAJANAKQAOAJALAAQAIAAAEg7QACgaAAgqIgBgNIgGABIgNgBIgNAAQgGAAgDgDQgEgEAAgFQAAgMAQAAIANAAIAKAAIAVAAIAWgBQAbAAAAANQAAAFgEAEQgCAEgGAAIgHgBIgIgBIgOAAIABAOQAABVgMAoQgHAagSAAQgUAAgUgOg");
	this.shape_12.setTransform(-75.7,19.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#009900").s().p("Ag2BaQgEgFAAgFIAAgiIACguQACgiAAgPIACggQAAgGAEgBQAQgFAUAAQATAAASAOQAXAQgBAYQAAAegXAPQASAIAJAJQAIAJAAALQAAAOgQANQgKAJgLAFQgZAKgpAAQgFAAgFgEgAgjAuIAAAYQAfgBARgHQAIgDAIgHQAHgGAAgDQAAgGgPgHQgMgFgJgDIgLgCIgFABIgEAAIgOgBIgBAagAgehFIAAAVIgDAtIASACQAQgCALgJQANgLAAgQQAAgLgNgKQgMgJgMAAIgSAAg");
	this.shape_13.setTransform(-90.8,18.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#009900").s().p("AgzBFQgPgRgDghQgCgPAAgqIABgbQAAgLACgEQADgIAHAAQAMAAAAAUIAABEQAABFAvAAQAvAAAAh1IAAgMIgBgJQABgHACgGQAEgHAGAAQAMAAAAAQIAAAPIAAAOQAACGhHAAQgiAAgSgVg");
	this.shape_14.setTransform(-107.6,18.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#009900").s().p("AguBRQgWgKAAgSQAAgFADgDQAEgDAFAAQAGAAAEAHQAGAIAFAEQAJAGATAAQARAAAPgIQAUgKAAgSQAAgOgRgJQgOgHgTgBQgSAAgNgGQgRgKAAgRQAAgVAYgRQAWgRAXAAQALAAAOAEQATAFAAAIQAAAKgKAAIgRgCQgLgDgHAAQgQABgNAJQgNAJAAAMQAAAKARAEQAHACAQABQAbACAPAPQAOALAAAUQAAAcgaARQgWAOgcAAQgVAAgSgIg");
	this.shape_15.setTransform(-124.8,19.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgnAyQgSgOAAgbQAAgdAPgUQAQgXAaAAQASABAMAGQAPAIAAARQABALgNALQgHAEgSAGIgrAWQAHAJAKAFQAJAFALAAQAIAAALgDQAOgEAEgGQAEgHAEABQAFgBADAEQADADAAAEQAAANgVAJQgSAJgRgBQgYAAgRgNgAgXgeQgKALgEAUIAkgPQATgLAJgHQgKgKgRAAQgOAAgJAMg");
	this.shape_16.setTransform(136.3,-13.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAfBYQgCgJgDgSQgCgRAAgLIABgJIAAgKQAAgUgLAAQgOAAgLAMQgGAGgKAUQAAAtgEAIQgDAHgHAAQgFAAgEgDQgDgEAAgEIABgFIABgRIAAgSIABhUIABgUIgBgKQgCgGAAgGQAAgFAEgDQADgDAFAAQAKAAABAKQACAMAAAJIgBAaIAAAZIAAAKQAKgNALgGQAIgHANABQATAAAHAMQAGAJAAATIABAXIADAYIAEAYIAAAEQAAAEgDAEQgEADgFAAQgIAAgDgJg");
	this.shape_17.setTransform(122.7,-17);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgGBSQgEgDAAgEIABgOIAAgNIgChDIgagCQgLgBAAgKQAAgGAEgDQADgEAFAAIAYADIAAgQIgBgPQAAgFAEgDQADgDAFAAQAIAAACARIABAKIgBAHIAAAIIARgDQAMAAAEACQAHACAAAJQAAAFgDAEQgEACgFAAIgFAAIgGAAIgQACIACBDIAAAFIAAAGQABAagNAAQgDAAgDgDg");
	this.shape_18.setTransform(109.9,-15.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgSBjQgDgDAAgEIAAgDQACgPAAgSIAAggIAAggIgTABQgLAAAAgLQAAgMAUAAIALgBIACgRQADgaAKgNQAKgPAaAAQARAAAAAMQAAALgPAAQgdAAgDAnIAAAIIAZgCQATAAAAAMQAAAIgJACIgJABQgGgBgVACIgBAZIAAAWIABAVQAAAXgCAMQgBAKgJAAQgFAAgDgEg");
	this.shape_19.setTransform(90.9,-16.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgiAxQgPgQgCgbQAAgZAOgUQAQgYAcAAQAXAAAMAWQAKARgBAYQAAAYgNATQgPAVgXAAQgUAAgOgPgAgUgXQgHAOAAAPQAAARAJAJQAIAIAKAAQAKAAAJgJQAKgKABgRQABgrgaAAIgBAAQgOAAgKAQg");
	this.shape_20.setTransform(78.5,-13.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AggBBQgRgGgBgMQABgFADgDQADgEAFAAQAEAAAGAFQACADALACIAMACQAIgBAIgCQALgEAAgHQAAgQgWgFIgKgDQgQgDgHgFQgJgEAAgOQAAgZAXgJQAHgEANgEIAXgIQAFgCAFAAQAFAAAEADQACADABAGIABAKIABAKQABAFgEADQgDAEgFAAQgHAAgCgFQgCgCgBgKIgbAIQgRAIAAALIAGACQAZAEAOAIQATALAAAXQAAATgRAKQgNAIgUAAQgPAAgOgFg");
	this.shape_21.setTransform(59.1,-14.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgFBFQgEgEAAgFQAAgOgCgcQgDgaAAgOQAAgMgEgHQgIAEgJAIIgNAPIgHAIIAAATIgCAUIACAKIAAAJQAAAFgDADQgEADgEAAQgOAAAAgeIABgVIACgTIgCgSIgBgTQAAgbANAAQAEAAAEAEQADAEABAFIgBAHIAAAHIAAAMQAGgMAMgKQAMgLAIAAQASAAAFATQAHgJAJgEQAJgEALAAQATAAAIAVQABAEADAdIAJBBQAAAEgDAEQgEADgFAAQgKAAgBgKIgFglIgDgiQgBgIgEgIQgEgKgEAAQgEAAgMAHQgMAHgDAEIAAAWIAEAdQACATABAMQgBAFgDAEQgDADgFAAQgDAAgDgDg");
	this.shape_22.setTransform(44.4,-13.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgsA1IAAhQIAAgMIABgLQgBgMALAAQALAAAAATQAWgVAaAAQAKAAAEAHQAFAHAAAOIAAAJQgBAOgLAAQgKAAAAgLIAAgJIgBgJQgSACgJAIQgKAIgIAPIAAA+QAAAMgLAAQgKAAAAgMg");
	this.shape_23.setTransform(29.5,-13.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgiAxQgQgQgBgbQAAgZAOgUQAQgYAcAAQAXAAANAWQAJARAAAYQgBAYgNATQgPAVgXAAQgUAAgOgPgAgUgXQgHAOAAAPQAAARAJAJQAIAIAKAAQAKAAAJgJQAKgKABgRQABgrgaAAIgBAAQgOAAgKAQg");
	this.shape_24.setTransform(16.9,-13.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgSBjQgDgDAAgEIAAgDQACgPAAgSIAAggIAAggIgTABQgLAAAAgLQAAgMAUAAIALgBIACgRQADgaAKgNQAKgPAaAAQARAAAAAMQAAALgPAAQgdAAgDAnIAAAIIAZgCQATAAAAAMQAAAIgJACIgJABQgGgBgVACIgBAZIAAAWIABAVQAAAXgCAMQgBAKgJAAQgFAAgDgEg");
	this.shape_25.setTransform(4.5,-16.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AARBMIAAgGIAAgGIAAgbIgygBIgWgBQgLgCABgGQAAgFAGgIIAKgNIA4hSQAHgLAMABQAOAAAAALIAABgIAFAAQAVAAABALQgBAIgIACQgFACgNgBIAAArQAAALgKAAQgNAAAAgQgAgdAOIAuABIAAhKQgdAygRAXg");
	this.shape_26.setTransform(-16,-17);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgnAyQgSgOAAgbQAAgdAPgUQAQgXAaAAQASABANAGQAOAIAAARQAAALgMALQgGAEgUAGIgqAWQAGAJAKAFQAKAFALAAQAIAAALgDQAOgEAEgGQAEgHAFABQAEgBADAEQADADAAAEQAAANgVAJQgSAJgRgBQgZAAgQgNgAgXgeQgJALgFAUIAkgPQATgLAJgHQgKgKgRAAQgNAAgKAMg");
	this.shape_27.setTransform(-36.7,-13.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgsA1IAAhQIAAgMIABgLQAAgMAKAAQALAAAAATQAWgVAaAAQAKAAAEAHQAFAHAAAOIAAAJQgBAOgLAAQgKAAAAgLIAAgJIgBgJQgSACgJAIQgKAIgIAPIAAA+QAAAMgLAAQgKAAAAgMg");
	this.shape_28.setTransform(-48.9,-13.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAlA8QgFgFgDgEIgUAJQgIADgEAAQgbAAgNgPQgMgPAAgdQAAgbAUgUQATgVAZAAQALABAMAFQAQAHAAAJQAAADgCACIgCAPIgBAYQAAAOACAJQABAGAHAPIACAGIABACQAAAEgDADQgEADgEAAQgCAAgGgEgAgSgcQgOAPAAASQAAATAHAJQAHAKAOAAQAJAAAIgEQAEgDAHgGQgDgeAAgPIAAgLIACgMIgHgEIgFgBQgQAAgNAPg");
	this.shape_29.setTransform(-61.2,-13.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgnAyQgSgOAAgbQAAgdAPgUQAQgXAaAAQATABALAGQAPAIABARQgBALgNALQgFAEgTAGIgrAWQAHAJAJAFQAKAFALAAQAIAAALgDQAOgEAEgGQAEgHAEABQAEgBAEAEQADADAAAEQAAANgVAJQgSAJgRgBQgZAAgQgNgAgXgeQgJALgFAUIAkgPQATgLAJgHQgKgKgRAAQgOAAgJAMg");
	this.shape_30.setTransform(-80.8,-13.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgsA1IAAhQIAAgMIAAgLQAAgMAKAAQAMAAABATQAVgVAaAAQAJAAAGAHQAEAHAAAOIAAAJQgBAOgLAAQgKAAAAgLIAAgJIAAgJQgTACgJAIQgKAIgIAPIAAA+QABAMgMAAQgKAAAAgMg");
	this.shape_31.setTransform(-93,-13.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgnAyQgSgOAAgbQAAgdAPgUQAQgXAaAAQASABANAGQAOAIAAARQAAALgMALQgGAEgUAGIgqAWQAGAJAKAFQAKAFALAAQAIAAALgDQAOgEAEgGQAEgHAFABQAEgBADAEQADADAAAEQAAANgVAJQgSAJgRgBQgZAAgQgNgAgXgeQgJALgFAUIAkgPQATgLAJgHQgKgKgRAAQgNAAgKAMg");
	this.shape_32.setTransform(-105.5,-13.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAfBYQgCgJgDgSQgCgRAAgLIABgJIAAgKQAAgUgLAAQgOAAgLAMQgGAGgKAUQAAAtgEAIQgDAHgHAAQgFAAgEgDQgDgEAAgEIABgFIABgRIAAgSIABhUIABgUIgBgKQgCgGAAgGQAAgFAEgDQADgDAFAAQAKAAABAKQACAMAAAJIgBAaIAAAZIAAAKQAKgNALgGQAIgHANABQATAAAHAMQAGAJAAATIABAXIADAYIAEAYIAAAEQAAAEgDAEQgEADgFAAQgIAAgDgJg");
	this.shape_33.setTransform(-119.1,-17);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgHBVQgDgDAAgFIAAgFIABgGIgBgRIgBgRQAAgRgDgcIgDgvIgKAAQgaAAgPgEQgKgCAAgKQAAgEADgEQAEgEAFAAIAUACIATACIAUgBIAUAAIAbABIAaACQAGAAADADQAEAEAAAFQAAAFgEADQgDAEgGAAIgagCIgbgBIgIAAQAAAQADAlQADAggBASIABANIABAMQAAAIgDAGQgDAIgGAAQgDAAgEgEg");
	this.shape_34.setTransform(-133.3,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-148.2,-36.4,296.4,72.9);


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


(lib.blank_gr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("Aj9CqIAAlSIH7AAIAAFSg");
	this.shape.setTransform(32.5,17,1.275,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65,34);


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


(lib.SamHeadTalk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAEAKIgDgBQACgBgBgEIgBgEQgBgHgLAAIgCAAIgCABIABgBQADgCAFAAIABAAIAEAAQACABABACIAHAEQAGACABAGIAAADIgDABg");
	this.shape.setTransform(-3.9,-2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE6AA").s().p("AAABkIAAgJIAAgHIAAgDIAAgIIgXgBIgDAAIgIgCIAAAAIgBAAIgGgBIgJgGQgDgCgBgDIAAgCIAAAAIgCgLIAQABQAYgOAFgKQAFgKgJADQgJADgZAEQgZAEgDgKQACgFgEgEQAIgHACgHIABAAIAAgQQgZgIgJgJIAngUQAVgMABgPQAQgBAZgGQAAAFgEAEQgFAEACAHQAGABAUgRQAWgQAPAIQgMANgdASIASgDIAWgGIAHgBQASAAAGANQgQABgLAHQgNAIAHAMQAAgKARgCQARgBADAJQACAJgEAHQgCAFgFAFQgMAKgEAEIgCACQAEAEAGgDIAFgDQAJgEADAGQABAHgDAJQgCAKgGALQAAAKANARQAFAIABAFQABAFgDADIACgBIAEgBIgFAEIgBABIgCAAIgKAKIgeAAQgQABgPAAIgYgBgAgZg/QgEADgBAIIgBAHIAAABQAAAPAJAAIAUgBQAJAAAEgBQABgBABAAQABAAAAgBQAAAAABgBQAAAAAAgBIgBgFQgBgGgGgGIgDgDIAAAAQgEgEgDgCQgHgDgKAAQgDAAgCABg");
	this.shape_1.setTransform(-3.1,2.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag5B8IATgJIgJgCIgDgBIgMgEQgWgBgEgGIAAgBIgCgEIgCgDIgBgBIgDgGQgFgKADgFQADgEAVgIIgFABQgiADgCgQQgDgQADAAIAHgJIABgDIAAAAIAAAAIACgEIAAgCIAAgDQgcgLgKgKQAEgNAZgGQAbgGAFgJQgPgKgoATQADgVAWgMIAogSQgHgDgXAFQgYAFgHgDQAMgLAdgHIAvgMQgHgGgPADQgUADgFAAQAQgTAmAGQAVADAjAKQAGgCgEgDQgDgGABgDQAaABAdAaQADgBAAgQQAVgDAXA2QAFAAAIgGQAGgFAFAFQgDAHgJAMIgDADQgIAPAGAOQgUALgRARQgQATgNAaIgGAMQABAGAPAXIAIAMIABAAIADgBIgBACIgFACIgFAGIgFABIgBAAQADgDgBgFQgBgFgFgHQgNgRgBgKQAHgMACgJQADgJgBgHQgEgJgIAGIgGAEQgFACgEgDIACgEQAEgFAMgKQAFgEACgFQAEgGgCgIQgDgKgRACQgRACAAAJQgHgLANgJQALgHAQgBQgGgNgSABIgHAAIgWAGIgQAEQAbgTAMgMQgQgIgTAPQgWARgGAAQgCgIAFgEQAFgEgBgFQgZAGgQABQgBAPgWANIgmAUQAJAIAZAGIAAAQIgBAAQgCAHgIAJQAEAEgCAGQADAJAZgEQAZgEAJgDQAJgDgFAKQgFAKgYAOIgQAAIABAKIABAAIAAADQABACADADIAJAGIAGAAIAAAAIABABIAIABIADABIAXABIABAIIABADIAAAGIgCAKQgNgCgNgDgAg+gQIAAAAIABgIQABgHADgDQADgCADAAQAKAAAHAEQAFACAEADIAAABIADACQAFAHACAGIABAFQAAAAgBABQAAAAAAABQgBAAAAAAQgBABgBAAQgEACgLAAIgUABQgJAAAAgQgAgkgUIABAGQAAAFgCABIAEABIAIAAIAEgBIAAgDQgCgHgFgEIgHgDQgCgCgDgBIgEAAIgBAAQgGAAgCACIgBAAIABAAIADAAQALAAADAGg");
	this.shape_2.setTransform(0,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.4,-13,28.9,26);


(lib.SamArmRt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape.setTransform(5.4,-15.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE6AA").s().p("AhECCQgOgHgNgIIAAADIgbgSQgFgDgIAAQgHgTgKgLQgFgFgKgFIgEgUIAIgPQA8gMApAnIAFAFQAOgKAYAEQATAEAJAMIABADQAEAFADAMQAFAKALgGQgIgKACgYQAAgOAEgSQAKg1gIgWIAEgIQAFgLABgIQgOghACgSQABgQAMgEIADABQAEAIADAOQADAPADAUQABgEAMAAQgEAGgNALQAbgVAtAIIAKgJIALgLQALgOAMgEQgBAfgXARIgCABQgIAGgsARIAAAOIABAuIABA3QACBIgbAcIgPAAQhGAAg2gagAgaBhIAaAEQgEgHgPgDIgFgBQgZgDgFgCQAFAHAXAFgABnhlQgQgBARgCQAKgBAOgFIADgDQANgLAIgKQALAFgbAXIgIAGIgHAAIgSgBgABDhoQAKgGAggHIARgEIgHAEIgBABQgXANgSAAIgKgBgACYibQAEgBAGAGIABABIAAABIABAGIAAACIgTAJIgRAJQANgZALgIg");
	this.shape_1.setTransform(-0.3,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgCCbQgugHgWgNIgBAAIgegWIAAgCQANAIANAHQA9AdBOgDQAbgcgBhIIgBg2IgBgvIAAgPQArgQAJgGIACgBQAXgRABgfQgMAEgLAOIgLALIgKAIQgugHgaAVQANgLAEgGQgNAAAAADQgDgUgDgOQgDgOgEgIIgEgBQgMAEgBAQQgBASAOAhQgBAIgFALIgEAIQAIAWgKA1QgEASgBAOQgBAYAIAKQgLAGgFgLQgEgLgDgGIgBgCQgHgMgWgFQgXgDgOAKIgGgGQgogmg9AMIAEgHQBAgOAgAqQAOgEAMgBQAhgCARAVIASh4IADgRQgPggABgVQABgJAEgHQAEgKAQABQAMAAAAAGIAAAAIAAAAQAGAHABATIAAAQIAigKIAQgEQAagLACgYIAOAAIABAAQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAQAIAAADAQIgBAEQARAcgbAaIgJAIQgWAQggAJIAAAIQAAASAEAYIABAEQAGAggBAVQAAAAABABQAAAAAAAAQABAAAAAAQABAAAAAAIAAAIIABAQQgFALgEAQQgMAzgKAMIhMgKgAB9h1IgDADQgPAFgKABQgRACARABQAPABAKAAIAHgHQAcgWgLgFIAMgGIAAgCIgBgGIgBgCIgBAAQgFgHgEACQgMAIgMAZIARgJIAHgDQgIAKgNALgABnh5QghAHgJAGQAWAEAcgQIACgBIAHgEIgRAEgAggBdQgYgFgEgIQAEADAaADIAFABQAPADAFAHIgbgEg");
	this.shape_2.setTransform(0.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.5,-16.6,35,33.2);


(lib.SamArmLt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE6AA").s().p("AAEBHQgNgZgPgPQgNgOgLgGQAPgRAagKIADgBIgBgGQgEgOgRgSQgRgUACgYQgFgEgMAEQgMACgFgFQALgOAcgCQAdgBADAUQgKAiAMAgQAHAWAUATQANAOARAMQARANAEAVQgIANgDAOIgDAGQgDAJgHAEQgCADgFACIgCAAQgSgQgVggg");
	this.shape.setTransform(11.2,6.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhcgwQA3gdAZgRQAlgaAOgeQAEgFAFgBIAAABIABACQABAhAMAjIAVA9QgWATAFAGQADADAYAAQAFANAQAWQAQAWAEAPQhYA7gxAWQgIhWhRh3gAhDAjIgsg4IgJgNIgNgRQBxg3AfgbQgWAjhlAyQAmAjAZAwQAdA3gEAyQgGgyglg3g");
	this.shape_1.setTransform(-4.1,-3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABqCVIgDgEQgMgWgMgOQgQgVgPgEQgTAHgeAWQgfAWgUAHQgJgOACgKQgEgEgHAEQgHAEgFgEQgDglgXgzQgYgzgYgPIgBgBIgHgEIgDgDQADgLgJgJQgIgHgOgGQB+hGBAglIAKgJQACAAAGAQIgBADQAGALADAXQAEAlAKAJIACgDQABACAAADIACAAIAEAEIgBAFQgBANAGANQAkgDANAKQAMAKAAAfQAAALADAMQAEAYAMAQQAQATASAQIAMAKQAQAPAEAWQAAAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAQAIAIgRgKQgDgVgRgNQgRgNgNgNQgUgVgJgWQgNggALggQgDgUgeABQgbABgMAPQAFAFAMgDQANgDAEAEQgBAYARARQAQATAEAOIACAGIgEABQgaAKgPATQAMAGANAOQAOAPAQAYQAUAgATARQgJACgDADIgBABQgQgOgRgfgAgEizQgOAdgnAbQgZARg3AdQBRB3AIBVQAxgVBYg8QgEgPgPgVQgRgVgFgNQgYAAgDgCQgFgIAWgUIgVg8QgMgkgBggIgBgDIAAAAQgDABgEAFgAiyhRIANASIAJAMIAtA5QAkA2AGAyQAEgxgcg4QgagwgmgiQBlgzAZgiQgiAbhxA2g");
	this.shape_2.setTransform(0.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.3,-19.4,39.3,38.8);


(lib.FatRotate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AgohYQADACADAEQADADADAEQABABABABQAHAJAIAKQgCAEgBAFQgBAEgCADIgXgMIgKgFIgGAKIgIANIALAEIgHAMIgIANQgGgBgGgCQAAAAAAAAQgCgBgCAAQgDgCgDgBQgHgDgFgEQgEgDgEgEQgEgEgDgEQgBgEgBgEQgCgKABgIQAAgJAEgHQAAAAAAgBQAEgHAFgEQAFgFAHgDQACgBABAAQARgGAOADIgLARIAIAGIgGAJIAMAGIAGgJgAgthAIAKAGIgFAIIgGAKIAZAMQgEAHgEAEQgFAGgFAEQgNAHgQgDAgRgmQgCAGgCAEAgGghIgcAmQAQgGARgFgAgOgtIgVgNIAJgPAAKgkQABAHAAAEQAAAGgBAFQAAAFAEAEQACABABACQADACACABQADAEADADAAdAjIgdgaQgDgCgEgBQgIADgFAEQgFADgRADQhdgcACgqQACgrAjgPQAjgQAgAdQAdAcAHAJAgihSIgLASABXBBQAEgBAHAEQACABACACQACABAAABQABACADACQACAAABAEQAAAAACACQABACAEADQACADAEACQAAABADACQABABABACQABACADABQABABAAADQAAACgCABQgDACgEADQgDACgFAAQgBAAgDgCQgCgBgDgCQgBgBgDgCQgEgDgEgHQgHgHgHgHQgBgBgCgBQgCgBgDgDQgBgCgBgBQgBAAgCgDAhAhLIAMAGAgzhfIgNAUAhIhRIgHAKIAJAFIgHALIgJgFIgJAOIAJAEIANAFIAIgMIgMgGAhfheIAXANAg9hiQAFABAFACQAGADAFAEAhnghIgHAJAh3goIAQAHAg6g8IAIAFIAFgJIgHgFAg6g8IgHALIAJAEIAKAFAhWgqIAJgNAhRgYIgJAOAhegeIANAGIAIgNIAJAFIgHAMIALAEAhQgGIAJgOIgKgEAhWgqIgIAMAhmgRIAIgNIgJgDIAIgNIgZgMAhPhHIgHALAh0hLIAeAPAhrhWIAcAPAgngHIgVgJAgdgRIgYgLIAHgM");
	this.shape.setTransform(4.9,12.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("ADJhOQgDgEgDgBAC4hsIAAAAQAGABAFAAQAFADgBAEQAAABAAABIAAABQABACACAAQADAFAAAFQgBABAAACQgBACgCACQgCACgCADQgBAGgGAEQgBABgBAAQgGADgIgCQgJgDgHgGQgEgDAAgGQgCAEgBAAQgEAJgGAFQgJAEgDgEQgHgIAEgKQAEgGADgGQgEABgDgEQgFgGgDgEQAAAAABAAQACgDADgCADHhiQgFABgEAEAC9BXQAAABAAACQAAAKgFAJQgBABgFgCAC9BXQABAAAAAAQAKABAAAHQAAABAAACQAKACACAIQABAFAAAFQAMgGgCANQAAAJgIAEQgCAAgCACQgGADgFAFQgDAFgDAFQgIAEgIADQgFAEgIADQgGACgCAJQgGADgGABQgNgBgIgFQgHgDACgJQAAgIABgIQAGgFAAgJQACgMgGgHQgBgHgCgIQgEgGAAgGQgKAAgDAJQgBADgFAAQgKgBgJAAQgFABgEAAQgMAAgKgCQgIABgGgBQgGACgGgBQgGgBgFACQgFgCgEABQgDgCgEADQgJAAgJABQgHAEgFAFQAAgEgBgBQgCAIgIAFQgDADgDADQgEAEgEACQgJAFgHAAQgKABgGgCADVB2QgBAEgCAEQgEAHgFgFADIBiQACAKgFAFQgEAFgHgDAAriJQAFgDAIgBQAHgFAJgCQAHgGAKAAQAJgGAJgBQAJgBAKAAQAJAAAJgBQAKADAJAGQAIADAEAIQAHAGADAHQABACgDACQADAJgCAIQAAABAAAAQgEAAgDgBAgHi3QACABACgBQABgBAAAAQAHAEAAALQgCABgBABQAKAAAJAEQAHAGAHAJQAFAEADAHQAAACABACQABAIgDAIQgDAJgGAGQgCACgDgDAgKh3QgGAHgMgDQgLgDgGgIQgFgEgBgGQAHgBAIgDQAHgDAFgCQAFgCAEgHQADAFAFAIQACAGgCAIQAAAFgDADgAgDimQACAAABgBQABAAABAAAgVitQABgGALABQAHAEgBAIAB2hoQgBABgBABQgJAFgCAGQgHAEgGADQgBAAAAgBQgBgBgBAAQgIgGgLgDABchUQAEAFAFAGQAIAFAFAHQADACAEABQAEAIADAHQAFAIADAIQADAIgBALQgBAHAAADQgBAAgBABQgEACgEADQgGAEgJACQgBABgCACQgFAFgBAKQgGAJgBAJQgCAKgDAIQAAAKADAIQADALAFAFACHADQAIgDAKgBQAJgBAHADQAGAFAFAIQAEAHACAIQADAIgBAJQACAIgCAKQgBAIAAAIQgCgDgDgCQgIgEgLgCQgJACgBAKQgCAHABAJQAAAJgCAJQAAAJAAAKQgBAKgFAEQgFAEgEAHAiAiuQABgHgBgKQADgJACgJQAEgKAHgFQAHgEAJABQAIgEAJABQAJAAAKABQAKAAAIAEQAJAEAGAJQAFAEADAHQADAGABAGQgIACgJAAQgJAAgIADQgKADgFADQgHAFgGAEQgGAGgEAFQAAAAABABQgBABgBABQgFAFgHAEQgIAFgJABQgIABgJAAQgJgBgKAAQgBgBgBAAQgJAAgGgEQgGgDAEgGQAIgGAGgEQAKgBAJgFQAFgDAGgBgAgVirQAAABABABQAAgCgBgCQAAABAAABgAgVitQAAABAAABAgHi3QgIgCgDAGQgCACAAACQgBABAAABIAAAAAglinQAGgGAJgDQAAABABACAg+iPQgEAAgEgBQgKgEAEgJQADgJAHABQAOAAgBAIQAHAEgHAHQgEADgFAAgAhXieQgDgGgIgCQgCgBgDgBQgHgEgLgBQgEgBgDAAAhYibQAAgCABgBAhMidQAHgGAHAGQABADgCAHQABABAAADAgUipQABADAAAFAgUipQACABADABQAGABAGAAAh2h8QAAACABADQABAFAEAFAiUhrQAHgGAJgEQAJgEAFgDAh1iMQgCAJABAHAh2hYIgBgBQgCgFgJgBQgFgDgCADIAAABQgEAJACAGQADAGAAAGQAAAAABABQAAACAAACQgEALACAIQgGAHgHAIQgFAHgEAJQgEAHgEAGQgFAIgBAIAh2hYIAAgBQACgCACAAQAKAGAAAJQAAABAAACQAAABAAAAQABgBABAAIAGAAQADABADAEQAEAIgDAGQgBADgCABAh7hMQgCgHAFgEQABgBABAAAiKAsQgCACgBABQgGAHgHAGQgIAGgIAAQgHAAgFAAQgGADgTgfQgTgfAFgMQAGgOABgJQABgKAGgHQADgJAEgIQAFgHAGgHQAIgFAHgEQAEgEAFgEAgwhKQAJgFAKAAQAIAAAGgFAhohIIAAAAQgHAEAAAGAhhgvQACAAADgDQAGgCAJAFQAEACgDAEQgBABgBACQgFAGgFABQgFABgDAAQgCAAgBAAQAAAJgEAHQgCAJgDAGQgFAKgCAHQgEAFgEAFQgCACgCACQgBABAAABQgFAFgFAFAiFAzQAAAAABABQAIABAHAFQAJACAIAFQAIADAIAEQAIADAIABQAKABAKAAQAJABAJABQAJAAAJABQAJAAAHAAQAKgBAHgEQABgBACgBQAJgCAHgGQAIgEAFgHQAHgHAHgFQAHgFAIgEQAJgEAHgEQAGgEAFgEAgmBuQgGgJgIgEQgIgEgJgFQgIgCgJgBQgKAAgJgCQgJAAgKgBQgJAAgIABQgJADgGABQAAgBAAgBQgBgDACgGQAFgHADgEQAIgJAGgFQgCgCAAgBQgCgCgBgCAg2CBQALABAHAGQAHAGADAHQADAIAEAGQAAAEAGAAQADACAEACQAEAEgDAJQgDAJgGACQgFAGgEAAQgGAIgJAEQgDADgEAFQgGADgHAEQgIAEgJAAQgLgBgEgHQgBgCAAgCQgHABgFgEQgBgBAAAAQgEAEgGgCQgBgCgBgCQAAABgBACQgDgCgBgBQgEgFACgEIAAgBQACgCABgFIAAAAQAJgFAKACQACABACgCQABABACAAQAIgCAEgGQADgIgFgDQgIgEgKgBQgJgBgKgBQgJgBgKAAQgKgBgJgCQgJgDgGgEQgGgDgDgHQgBgHACgKQgBgKAEgIQADgJAFgHQAHgGAHgEQAAgBABAAAhbDcIAAgBQgBgFADgGQABgKAKABAhoDYQgFgDAGgLAh0DWQgBgIAGgDABzBdQABgCAAgBQgBgLABgJAC7BQQAAAAABACQABACAAADAgPi9QADADAFADAC+g/QABgIgEgB");
	this.shape_1.setTransform(21.6,23.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AAPAZIgEgBIgFgEIgEgCQgCgEgEgHIgOgLIgDgCIgFgFIgCgCIgDgDIAIgBQAFgBAFgGQAEgBAHAEIACAEIACACIAEADQABAAAAAAQABABAAAAQAAABAAAAQABABAAABIACADIAFAEQACABAEADIADACIACADQAAABABAAQAAABABAAQAAABABAAQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAABIgHAEQgDACgDAAIgCAAg");
	this.shape_2.setTransform(15.1,21.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#996600").s().p("AA0AyIgIgEIgOAHQgFADgQADQhbgeABgoQACgrAjgPQAkgPAdAcQAgAcAHAJQgHADgIAHQgDAGAGACQAGACAIABIABALIAAALQgBAFAFAEIADADIAEAFIAGAHQgDAKACAFQACAGABAGgAARAtQAQgIARgFIgFgbgAgng3IgDABQgIADgFAFQgFAFgDAGIgBABQgDAHgBAJQgBAJADAJIACAGIAHAJIAHAGIAMAHIAGADIAEABIABABIALADQAQADALgIQAGgEAFgFQAEgFADgGIAFgKIACgGIADgJIgOgSIgCgDIgGgHIgGgGQgGgEgFgDIgJgDIgJgBQgKAAgLAEg");
	this.shape_3.setTransform(-0.4,8.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0000FF").s().p("AgOArQgGgIgIgEIgRgJIgRgEQgKABgJgCIgTgCIgRACIgPAEIAAgCIABgKIAIgJIAOgOIABACQAJABAGAFQAJABAIAFIAQAFQAIAEAIAAIAUACIASABIAQABIASAAQAKAAAHgFIADgBQAJgDAHgEQAIgDAFgHIAOgNQAHgFAIgEIAQgIQAGgDAFgEQgFAFgBAKQgGAJgBAJIgFAQQAAAJADAJQADAKAFAGQgBADgFgBIgTAAIgJAAQgMAAgKgCQgIACgGgBQgGACgGgCQgGAAgFABQgFgBgEABQgFgCgEACIgQACQgHAEgFAEIgBgFg");
	this.shape_4.setTransform(19.2,29.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgmAtIgUgBIgCAAQgIgBgGgEQgGgDADgGQAIgGAHgEQAKgBAIgFQAGgDAGAAIABAAIABAAIAAAAIABAAIABAAIADAAQAKABAIAEIAFACQAGADADAFQgDgFgGgDIgFgCQgIgEgKgBIgDAAIgBAAIgBAAIAAAAIgBAAIgBAAIAAgQIAFgSQADgKAIgFQAHgEAIABQAHgEAJABIASABQAKAAAJAEQAIAEAHAJQAFAEACAHQAEAGABAGQgIACgKAAQgJAAgIABQgJADgGADIgNAJQgGAGgDAFIgBADQgFAFgFAEQgJAFgIABIgLABIgGAAg");
	this.shape_5.setTransform(12,4.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgdAQQgJgEADgJQAHgEAHAEQABADgBAHIABAEIgJgBgAAZgFQgEgBgBgBIgBgEQABgGAKABQAIAEgCAIIgCAAIgJgBg");
	this.shape_6.setTransform(17.4,7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAGAhQgJgDgGgHQgFgFgBgFIAPgFIAKgEQAFgDAEgEIAIAKQACAGgCAIQAAAGgDACQgEAFgHAAIgHgBgAgbACQACgFgBgDQgHgHgHAGQADgJAHACQAOAAgBAHQAHAFgHAFQgDADgGAAIgBgEgAAZgcQgKAAgBAGIgBgBIABgCIACgDQADgGAJABQAAABABAAQAAAAABAAQAAAAABAAQAAAAABgBIAAAAQAJADAAALIgDACIgCABIgFABQABgIgHgFg");
	this.shape_7.setTransform(18,8.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCC99").s().p("AhLDTQgLgBgEgHIgBgEIAAAAIgBgCQAAgEADgGIAAAAQABgJAIAAIAAAAIAAAAIABAAIABAAIgBAAIgBAAIAAAAIAAAAQgIAAgBAJIAAAAQgDAGAAAEIABACIAAAAQgHACgFgFIgBgBQgBAAAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAgEADgGQgDAGAAAEQAAABAAAAQAAABAAABQABAAAAABQAAAAABAAQgEAEgGgCIgCgEIAAgCQAAgGAFgDQgFADAAAGIAAACIgBADIgEgDQgEgFACgEIAAAAIADgHIAAgBQAJgFAKACQAAABABAAQAAAAABgBQAAAAABAAQAAgBABAAIADABQAIgCAEgGQADgIgFgDQgIgEgKgBIgTgCIgTgBQgKgBgJgCQgJgDgGgEQgGgDgDgHQgBgHACgKQgBgKAEgIQADgJAFgHIAOgKIABgBIAAACIAPgEIARgBIATABQAJACAKAAIARADIARAJQAIAEAGAJQgCAIgIAFIgGAGIgIAGQgJAFgHAAQgKABgGgCQAGACAKgBQAHAAAJgFIAIgGQALABAHAGQAHAGADAHIAHAOQAAAEAGAAIAHAEQAEAEgDAJQgDAJgGACQgFAGgEAAQgGAIgJAEIgHAIIgNAHQgHAEgIAAIgCAAgAhoDDIAAAAgAh0DBIAAAAgAB8CgQgHgDACgJQAAgIABgIQAGgFAAgJQACgMgGgHIgDgPQgEgGAAgGQgKAAgDAJQgFgFgDgLQgDgIAAgKIAFgSQABgJAGgJQABgKAFgDIADgDQAJgCAGgEIAIgFIgIAFQgGAEgJACIgDADQgFADgGADIgQAIQgIAEgHAFIgOAMQgFAHgIAEQgHAGgJACIgDACQgHAEgKABIgQAAIgSgBIgSgCIgUgBQgIgBgIgDIgQgHQgIgFgJgCQgHgEgIgCIgBgBIgCgDIgDgEIAKgKIABgBIAEgFIAIgHQACgIAFgJQADgIACgJQAEgIAAgJIADAAIADADIACACIAFAFIADACIAOANQAEAHAEAEIAEACIAFAEIAEABQAFABADgDIAHgEQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAgBIgCgDIgDgCQgEgDgCgDIgFgEIgCgDQgBAAAAgBQAAgBAAAAQgBgBAAAAQAAAAgBgBIgEgDIgCgCIgEgEQgHgEgEABIACgDIABgDQAAAAAAgBQAAAAAAAAQgBgBAAAAQgBgBAAAAIgBAAIAAgBIgBAAIgHgCIgCAAIAAAAIgEABIADgEIABgGQAAgEgCgEQgDgFgDgBIgGAAIgCABIAAgBIAAgBIAAgCQAAgJgKgGIgEADIAAAAIAAAAIAEgDQAKAGAAAJIAAACIAAABIAAABIAAABQgHADAAAGIAAAAIAAAAQAAgGAHgDIAAgBIACgBIAGAAQADABADAFQACAEAAAEIgBAGIgDAEIAAAAIAAAAIgEACIAAAAIAAAAIgBAAIABAAIAAAAIAAAAIAEgCIAAAAIAAAAIAEgBIAAAAIACAAIAHACIABAAIAAABIABAAQAAAAABABQAAAAABABQAAAAAAAAQAAABAAAAIgBADIgCADQgFAGgFACIgIAAIgDAAQAAAJgEAIQgCAJgDAIQgFAJgCAIIgIAHIgEAFIgBABIgKAKIgDAEQgGAHgHAFQgIAHgIgBIgMAAQgGAEgTgfQgTgdAFgPQAGgOABgJQABgKAGgHQADgJAEgIIALgOIAPgJIAJgIIAdAaQAAgGgDgGQgCgGAEgJIAAAAQACgEAFAEQAJAAACAGIABAAIgBAAQgCgGgJAAQgFgEgCAEIAAAAIgGgHIgFgFQAHgHAJgEIAOgGIABAEQABAGAEAFQgEgFgBgGIgBgEQgBgHACgKQAJgBAIgFQAHgEAFgFIACgCIgBgBQAEgFAGgGIANgJQAFgDAKgDQAIgDAJAAQAJAAAIgCIAIAGQgIgBgDAFIgCAEIgCgBIABADIAAACIABACQACACADAAQAGACAGgBIADgBIACAAQAKAAAJAEQAHAGAHAJQAFAEADAIQAFgEAIgBQAHgFAJgCQAHgGAKAAQAJgGAJgBQAJgBAKAAIASgBQAKADAJAGQAIADAEAIQAHAGADAHQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQADAJgCAIIAAABIAAAAIALABQAFADgBAEIAAADQgFABgEADQAEgDAFgBIAAAAQAAABABAAQAAABAAAAQABAAAAAAQAAABABgBQADAFAAAFIgBADIgDAEIgGgFIAGAFIgEAFQgBAHgGADIAAgCQAAgGgDgBQADABAAAGIAAACIgCABQgGADgIgCQgJgDgHgGQgEgDAAgGQgBABAAABQgBABAAAAQAAABAAAAQgBAAAAAAQgEAJgGAFQgJAEgDgEQgHgIAEgKIAHgMQgEABgDgEIgIgKIABAAIAFgFIgFAFIgBAAIgCACQgJAFgCAGIgNAIIAJAKQAIAFAFAHIAHADIAHAPQAFAIADAIQADAIgBALIgBAMIgCABQAIgFAKgBQAJgBAHAFQAGAFAFAIQAEAFACAIQADAIgBAJQACAIgCAKIgBAQIABACIABAFIAAADQAAAKgFAJIgBAAIgBAAIAAAAIgCAAIgBAAIgBgBIABABIABAAIACAAIAAAAIABAAIABAAQAFgJAAgKIABgDQAKACAAAGIAAADQAKACACAIIABAKQAMgGgCANQAAAJgIAEIgEACQgGADgFAFIgGAKIgQAHQgFAEgIADQgGACgCAJQgGAEgGAAQgNgBgIgFgACWBeIAAATQgBAKgFAEQgFAEgEAHQAEgHAFgEQAFgEABgKIAAgTIACgSIgBgEIACgMQABgKAJgCQALACAIAEQADACACADQgCgDgDgCQgIgEgLgCQgJACgBAKIgCAMIABAEIgCASgADNBtQADAAACgEQACgEABgEQgBAEgCAEQgCAEgDAAIAAAAIgBAAIgDgCIAAAAIAAAAIADACIABAAIAAAAgAC/BfQADAAACgCIABgBQADgDAAgHIAAgFIAAAFQAAAHgDADIgBABQgCACgDAAIgBAAIAAAAIgEAAIAAgBIAAABIAEAAIAAAAIABAAgABzBIIABgDIgBgKIABgKIgBAKIABAKIgBADgAiWgxQgFAIgEAIIgIAPQgFAIgBAIQABgIAFgIIAIgPQAEgIAFgIIANgPIgBgFQAAgGADgIIAAgCIAAgBIgBgCIABACIAAABIAAACQgDAIAAAGIABAFIgNAPgAgdhkQgKAAgJAFQAJgFAKAAQAIAAAGgFQgGAFgIAAgAh7hgIgBgDQAAgFAEgEIACgBIgCABQgEAEAAAFIABADgABZhrIACACIABABIgBgBIgCgCQgIgGgLgDQALADAIAGgAAfh6IACgBQAGgGADgJQACgHAAgGIAAgDIgBgDIABADIAAADQAAAGgCAHQgDAJgGAGIgCABIAAAAIgBAAIgCgBIAAgBIAAABIACABIABAAIAAAAgAC4iBIgHgBIAHABgAgYimIgMAFIgPAFQABAFAFAEQAGAIALADQAMADAGgHQADgDAAgFQACgIgCgGIgIgNQgEAHgFACgAhMiyQgEAJAKAEIAIACQAFAAAEgEQAHgHgHgEQABgIgOAAIgCAAQgFAAgDAIgAgTi2IAAgCIgBgGIABAGIAAACgAgli8QAGgGAJgDQgJADgGAGgAhchGIAAAAgADHh2g");
	this.shape_8.setTransform(21.6,25.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.5,-1,54.5,48.4);


(lib.CarmenGavel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D29960").s().p("AgdAoQgDgJAAgKQgBgYAYgcQAdgmANA8QgMATgLANQgMASgOAGQgFgHgIAAg");
	this.shape.setTransform(14.7,-8.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DDB477").s().p("Ah/ByIABAAIgCAAIAAgBIgGgLQgGgOAAgMIABgIIAOgKQAWgQAYgOQAYgPAYgNIAvgXIADgBIAIgDIAAAAIABgBQAFgFAGgLIAFgIQADgDAJgMQAEgEAUgKQAHgHADgJQACgFAGgKIACgBQADAAAAAIQAAAJgIAOIgJAPIgCAEIgDACQgKAIAAABIACACQADAAAFgDIgJAOQgOAWgEAIIgEAIIgBAAIgEAFIgCAEIgMAHIgUAIIAAgDQgbAPgcAUQgiAXgeAZIgMAIIgGADIAAAAIgBAAIAAAAgAA5AMQADgGAGgDQAGADAOAAIAEAAIgEAFQgJAEgJAAQgJAAgCgDgABGgFIALgHQAEACAHAAQAMAAAKgEIABAEQAAACgIAFIgCABIgPABQgSAAgCgEgABRgXIABgDIACgDIAAAAQAGACANAAQAPAAAMgGIgEAGIgCAAQgFAIgZAAQgNAAAAgEgABVgkIABgFQACgCAKgEQAUgIAAgEQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAIAEgJQACACAIADQAJADABAGIgCAEIgHAHQgLALgLAAQAHgCggABgABcgzIgBABIAAAAIABgBg");
	this.shape_1.setTransform(-5.8,7.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#996633").s().p("AhsCUIgCAAIgBgCQAAgDAJgJQADgDADgLIACgDIABgCIAFgGIABgCIAAAAIAMgVIARgdQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABQgEACAAAIQAAAEACACIgCAAQgGAAgEAGQgDAFAAACIABAEQgKABAAALIgCACIACAFQADAEAIAAIgKARQgTAOgFAAIgDAAgAgvAoIADgGIADABQACgLALgUIAEgGIALgRIANADIgBAIQgDgCgDgBQgFAIgGAOIgBgBQgDALgGALIgBgBQgFAAgHAEIgGAFgAgIgaIgXgFQgngJgIgYQgHgWAOgYQAPgXAVgIQApgQA0AYQAdANAQASQAGAHAEAIIgCAOIgHAUIgHAVIgDAEQAIgPADgVQADgXgJgNQgJgMgVgCQghAigEAbQgTAAghgMQgigNgNABQANAJAnAJQAiAJAJAIQgQAFghgLQgogMgJABQAMAMApAFQASADANAHQALAFAGAJIgngIgAAChLQgQgMghgGQALAOAmAEg");
	this.shape_2.setTransform(7.9,-2.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ai6C1IABAAIAAgBIAGgDIALgHQAfgZAigXQAcgUAdgPIAAADIAUgIIALgHIADgEIAEgHIABAAIAEgIQADgIANgWIAJgOQgFADgDAAIgCgCQAAgBAKgIIADgDIACgBIAJgPQAIgOAAgJQAAgIgDAAIgDABQgGAKgBAFQgDAJgHAHQgUAKgCAEQgJAJgDAEIgFAIQgGALgGAFIAAABIgBAAIgHADIgDABIgxAZQgYANgYAPQgYAOgWAQIgOAJIAGgLIAGgDIAwgeIAwgeQAXgNAZgJIAGgEQAJgHAGgMQALgTAFgDQAbgRACgFQAGgZAJAAQALAAACAJIAAgDIAAgBQgDgGgbgJQgagLgGgPQgDgKACgMQACgNAHgNQANgaAVgKIAHgCIAJgDQAkgIA4ATQBJAYgSAoIgBgDQgCALgGASQgGAZgNALQgEAEgGACIgFAFQgDABhDgNQgDALgCADQgBAFgFAGIgGAJQAKAAAIAJQAFAFAAAGQAAAJgMAIIgBABIAAADQAAAHgKAHIgFADQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAIABADQAAAIgNADIgKAFIABACQAAAKgSACIgFACIgBAAIgCABQgGAEgKAUIgEAGQgHAKgGACIgFACQgEAAgGgGIgGgGIgBgBQgCgCAAgDIAIgLIANgRIAAgBQgRAKgIACQgIACgHAFQgWANgUAQIAEgDQghAdglAQIgRAGQAAAAAAAAQgBAAABAAQAAAAAAgBQAAAAABAAgAAAA6IgJAUIAAABIgBABIgFAHIgBABIgCAEQgDALgDADQgKAJAAADIABACIADAAIADAAQAFAAATgOIAIgRQgHAAgDgEIgBgFIABgCQABgLAIgBIgBgEQAAgCADgFQAEgGAGAAIABAAQgBgCAAgEQAAgIADgCQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIgSAdgAAABPQAAADAJAAQAJAAAJgEIAEgFIgEAAQgOAAgGgDQgGADgBAGgAALA8QACAEASAAIAPgBIACgBQAIgFAAgCIgBgEQgKAEgMAAQgHAAgEgCIgLAHgAAZAkIgDADIAAADQAAAEANAAQAZAAAFgIIACAAIAEgHQgMAHgPAAQgNAAgGgCgAAzAeQALAAALgLIAHgHIACgFQgCgGgIgBQgIgCgCgDIgEAIQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAEgUAIQgKAEgCACIgBAFIARAAQAMAAgEABgAAgAPIAAgBIAAAAIAAABgAAcALIAAABIABAAIAGgFQAGgEAGAAIABAAQAGgJADgKIABAAQAGgPAEgIQAEABACACIADgIIgPgDIgKARIgEAIQgLAUgCAJIgDgCIgEAGgACHh1QgXAcAAAZQAAAKAEAJQAHABAGAGQANgFAPgSQALgOAMgVQgIgkgPAAQgJAAgNAPgABtguQgGgJgLgFQgNgHgUgDQgpgFgMgMQAJgBAnAMQAkAKAQgEQgJgIglgJQgmgKgNgIQANgBAiAMQAjANATAAQAEgbAggiQAWACAJAMQAJANgEAXQgCAUgIAQIADgEIAGgVIAHgUIACgOQgEgIgGgHQgQgSgdgNQg0gYgqAQQgWAIgOAXQgNAYAHAWQAGAYAoAJIAWAFIAqAIIAAAAgAAch5QAiAGASAMQgogEgMgOgAgPhtIADgIIAAAFQgBAEgCADIAAgEg");
	this.shape_3.setTransform(0.1,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-17.7,40,36.6);


(lib.CarmenBicep = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DDB477").s().p("AAnBuQgJgQgHgRIgLghIgKgfIgJgcIgOgdIgJgOIgsgSQADgHAFgGQAKgLAQgGIgBgHIAGgJIADgBIADgGIAOADQAPAFARAMIAIAUIAGAVIAGAWIADAVIAFAXIAFATIAGAWIAIAUIALAYQgBARgIANQgGAJgGAIQgIgJgHgLg");
	this.shape.setTransform(-4.8,-2.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAyBzIgRgeQgLgWgFgZQgDgWgGgQQgEgKgEgJIgMgYQgGgKgKgIQgJgIgRgBIgggBIAFgGQAIgIALgDIAtASIAIAOIAMAdIAMAcIAKAfIALAhQAGARAKAQQAGALAIAJIgJAFIgHgIgABMAvIgIgUIgGgWIgFgTIgEgXIgEgVIgFgWIgHgVIgIgUQAGgBAEAEQAFAHACAJIAGAYIAFAYIAGAYIAFAXIAFASIAFAUIAFAUIAEAUIgLgYg");
	this.shape_1.setTransform(-6,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.7,-15.9,17.5,26.6);


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


(lib.SamSpeech = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.SamHeadTalk();
	this.instance.setTransform(4.6,-51.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(110));

	// Layer 3
	this.instance_1 = new lib.SamArmRt();
	this.instance_1.setTransform(16.3,-31.3,1,1,0,0,0,-13.2,11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({rotation:-15},5).wait(24).to({rotation:0},10).wait(27).to({regX:-13.3,regY:11.1,rotation:15,y:-31.4},5).to({regX:-13.2,regY:11.2,rotation:0,y:-31.3},3).wait(22));

	// Layer 4
	this.instance_2 = new lib.SamArmLt();
	this.instance_2.setTransform(-9.8,-11.7,1,1,0,0,0,17.9,15.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({regY:15.7,rotation:-75,y:-12.7},10).wait(26).to({regY:15.8,rotation:0,y:-11.7},6).wait(53));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AAAgBIAAAAIAAADIAAAAIAAgDg");
	this.shape.setTransform(12.8,28.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#99FF33","#E3E260"],[0,1],-43.7,-37.9,-43.7,77).s().p("Ah7CTIgCADIgKAGIAMgJgAhwCQIABgBQALACAJgGIABADQgJACgKAAIgDAAgACHibQABANgBALIgBABIABgZg");
	this.shape_1.setTransform(-0.7,41.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FF00").s().p("ABUCLQgMAAgMgEQgDgvgBgoQgBgwACgkQgJAXACArIABATQAFA8gJAdQgHgFgNgCQgOgBgHgFQAEg0ABgaQACgvgTgTQAIAYgSAsQgMAZgZAsQg4ADgTgNQAXhIAOgiQgMAPgNAkQgMAmgKANQgOAAgKgKQAGgbAchKIAGAAQAEgBAAgFQAAgCgHgBIALgiQAGgVADgRIADgKQACgLABgBIAEgHQASAGAYANQAbAHAbgDIAJgCQAUgDAWgHIAPgFQAcgKAogRQAkAygKBfIgBADIAAACQgDAcgHAgIgBAFIgLAsQgJAHgKAEQgRAHgRAAIgBAAg");
	this.shape_2.setTransform(8.8,4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFE6AA").s().p("ACLIMQgBgCABgPQgHgBgDAHQgFAIgFgBQgJgHAQgMQgNgFgGAKQgFAMgHgBQgLgCABgIQgBgIAIgCIANgDQAAgFgKABQgKABADgIQACgJAIAAQAOAAADgBQAbgLAVgcIAJgMIAIgNQgFg4gdhwQgbhogEhEQANAEAhgDIAigFIABAAIABAZIgDAqQgDAlAFAPIAGAEQAiAZgHBPQgJBjASAbQgDAOgfAbQgbAYADAiQgIAHgYAAIgJAAgADYGeIAFALQAHgHgKgLQgLgLgDANIADgBQAGAAADAGgABAHoQABgQAUABQgFANgCAVQgRgEADgPgAC9HrQAFgMAAgDQAIAGgMAVQgFgDAEgJgAjKHVQAAgWANADQgfgXglgLQASgKAtgHQApgIATgNQANgXAAhjQAAhXAfgXQAShcgBgQQAzAVAggHQACAsgsAbQAgAkgaA7QgPAgggA8QgGAXgEA3QgBAGAHAIQAGAHgFAHQgGAOgjAGQgiAGgGAOQgKgLgIgDQAAAFAFAGQAEAGgCAIQgNADgKAAIgLgBgAh4GPQgFAKAIADQgBgEAJgOQAFgKgKgDQABAFgHANgAjYHEQAHAAAAAHQgBAAgBAAQAAAAAAABQgBAAAAABQAAABAAABIAAAAQgCAAgCgLgAD1HCQgCgHAEgFQAFgEgBgFQAJABgDAKQgEAKgHAAIgBAAgADxGmQAHAFgGAKQgGALgMACQAPgPACgNgAjsGzQAQgEAEAIQABAGgOAFQgJgFACgKgAj5G3QgFABAAgLQABgLAHAEQALAGgHAOgAgTjGQAMgRACgNIgGgJIgOgbQgLgWgGgVQgSgFgJgRQgKgSAJgVQAQACAWAMQgCgJgUgJQgSgJACgRQgSAHAIA9QAzAhgTAwQgQAqgsAQIgJADQgHgDgHgGIgCgCIACAAQAFgCACgDQAIgFADgKIADgJIgBgEIAAgEIgIgGQgHgHAAgCQAAgEAEgDIAHgEIAAgCIAAgNIAAgJIAAgHIAAgEIgBgBQgBgHABgIIACgLQgPgTAGggQAGgiAUgGQAFgkAXgZIADgEQA4gOAKgGIAAgBQAcADAdgDIAdAAIACgCIAIgIIADAAIAAgBIAFgEIACAAIABAAIAPgEQALgDAGAAQAFAAACABQAEACAAAFQAAACgIADIgBABQAFACAAACQAAADgJADIABACQAAADgEABIAAABIAKAHIgDAGQAGgDAHAKQAAADgDABIADAEIgCADQAFAAAAAEIgBADIACADQAAABgGADQASAAAAAIQAAAEgFABQAaAEAAADQAAACgHADIAAAAIgBABQABADAFACQAIADgBAEQgjAegfAKQgJAEgJABQALAFALgCQAQgDARgOIANgKQANgIALABIAIAJIACACQAJAbgVA4QgTA0AVAbQgeAUghAMQgVAIgXAEIgMACIgBAAQgPACgNAAQgtAAgegYgAApjXQgGgYAMgDQgPABgCgVIgCgHQgDgQgIgBQAAAEAEASQAEAOgFAFQgFABgKgIIAAAAQgHgHgDADIAHAHIAGAFQAIAHALgCQAGAVAIADIAAAAgAAzkvQAIABAHADQASAJAQAWIAYAiIAIAJIgFgNQgbg3gegJQgGgCgFAAIgIABg");
	this.shape_3.setTransform(1.3,11.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("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");
	this.shape_4.setTransform(1.1,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(110));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47,-64.7,94,129.6);


(lib.FatGuy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.FatRotate();
	this.instance.setTransform(14.9,19.8,1,1,0,0,0,21.9,23.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:30},9).to({rotation:0},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.6,-3.4,52.6,46.5);


(lib.CarmenJudging = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.CarmenGavel();
	this.instance.setTransform(1.8,-9.3,0.997,0.997,-2,0,0,-19.1,16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({regX:-19.2,scaleX:1,scaleY:1,rotation:38.1,x:1.7},3).to({regX:-19.1,scaleX:1,scaleY:1,rotation:-2,x:1.8},3).wait(1).to({regX:-19.2,scaleX:1,scaleY:1,rotation:38.1,x:1.7},3).to({regX:-19.1,scaleX:1,scaleY:1,rotation:-2,x:1.8},3).wait(1).to({regX:-19.2,scaleX:1,scaleY:1,rotation:38.1,x:1.7},3).to({regX:-19.1,scaleX:1,scaleY:1,rotation:-2,x:1.8},3).wait(1).to({regX:-19.2,scaleX:1,scaleY:1,rotation:38.1,x:1.7},3).to({regX:-19.1,scaleX:1,scaleY:1,rotation:-2,x:1.8},3).wait(3).to({regY:16.4,scaleX:1,scaleY:1,rotation:13,x:13.5,y:-15},4).to({regX:-19.2,regY:16.5,scaleX:1,scaleY:1,rotation:28,x:17.7,y:-24.3},4).wait(9).to({regY:16.4,scaleX:1,scaleY:1,rotation:13,x:13.3,y:-15.7},3).to({regX:-19.1,regY:16.5,scaleX:1,scaleY:1,rotation:-2,x:1.8,y:-9.3},3).wait(96));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CE9E31").s().p("AgCgOQAPACgKAbIgCAAQgMAAAJgdg");
	this.shape.setTransform(-46.4,-0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#07CD1B","#01984B"],[0,1],309.9,-38.2,309.9,14).s().p("AgWgOIABAEQgEASAAAdQgJgjAMgQgAAdgiIAAgCIABAAIAAADg");
	this.shape_1.setTransform(39,23.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#05A514","#006633"],[0,1],32.1,-13.3,32.1,5.4).s().p("AAMC/IgCgZQgHgugOgSQAXgdgXguQAXihAChLQAegVAMgNQAJgKAEgLIAAABQAKAFAGAAIACAAQALAFgGAUQABgDANAAQAPAPAkAbQAdAbAIAdQgSAsgkApQgCAHAFAEQAFAFgBAFQgLAggOA7QgWAxAHA0IACAOQgNAbgUAUIgLALIABAHIgVAdQgcgjgFgqgABPAXIgIAhQgGAUALAJQAHgaAAg0QAAgyAHgUQgiA2AXAggABWhoQASgbgMhfQgMAbAGBfgAkoDOQgGgFgJgNIgBAAIgGgJIgfhSQgQg2gOg0QgOg6gUg4QgVg7A1gkIAOgIQAsgaAKgIQBJAYAIAeQBGAJgWBrQgCAJgkA+QgWAkAaAiQg8CCAXBQQgTgQgWgngAkyigQARA4gVAYQARARgNA1QgNAvATAOQgFgNAIgwQAIgwgOgWQAOgdAAgZQgUgPADgmQAEgxgBgEQgTAYAQA4gAg9DdQgGgVAFgNQgWgOgLgxQgOg4gKgPQAFhGg8g8QgPhPAug/IACgBIACAAQALAAARgKQAKgHADgDQAUgLAGgQQAcAPgJAuQgEAbgLAzQgBARAMAiQALAfgFAUQAMgUgKgeQgNgoAAgIQABgMAMguQAKglgGgcQAWAEAeAlQAKAigYA9QgDATADAxQgCAbgIArQAAALAKAXQAAAigmAzQAtArg3BFQABgLgHgagAjyCbQAGg0Acg0QgWgbAPgkQACgIAdgyQAMAlgHBLQgHBVAFAgQAKgpABhEIAAhnQAdAHALBaQADAWALAgQgBAMgQAPQgTAkgZBPQgggTghhCgACPB5IADgDIgPgqIAHgUIACgJIABABIgBACIABABQAAgOADgJQAAgKACgNIAFgcIABAAIgBgGIAAgEQABgLgCgFQApgyAOgqQgHgGgQgdQgMgXgQgHQAKgDANgTQAMgQAMgDIAGAIIABABQAIAJAMAKQgYArAPBFIAAAHQAAAOAEAHIAKAPIAAABQAGAOACANIAAAAIACANIAAAAIAGAfIABAkQAAAFgBADIACAEQgdBPg6A3QgEglgRgggADEguIALAeIgYALQgLAEAAADQAAAHAUAYQAAAKgIAXIAAAHQACAHAHAAQAEAAABgEQgEgJAAgDQAIgMAAgSQAAgHgHgFQgHgFgDgOQAjgOAAgFQgNgbAAgDQAFgcgJAAQgHAAAAAcgAhQCvQAFgEADAQQgMgHAEgFgAE0CMQgKgNgCgOQgFgsgigdQAEgjgKgfIACgBIAAgEIgDAAIgDgNIgFgRIAAgCIgCgDIgCgGQgYhNAOg5QARgOAmgKQAogLAOgJQAYAYA6AlQAGA9goBZQAJAUgLAmQgcA/ADBEIADgHIgDANIAFABIgNAPQgagLgQgVgAEzi9QgJAbACAOIARAOQgJAJgCAVQgDAXAOAEQgDgaANgfQgOgGgGgWQAfg1gcgLQAEANgHAYg");
	this.shape_2.setTransform(-3.7,28.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E1AB2F").s().p("AgNAKQACgPAJgJQAFgBAAALQABAAACgNQgGgCgGAFQgFAFgEgFQgCgLAMgGQAJABANANQgEAegNATQgNgEAAgSg");
	this.shape_3.setTransform(-43.7,-1.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#6D4201","#D27E02"],[0,1],-41.7,-18,20.9,-63.6).s().p("AgCgCQAFgDAAAFIAAAEQgDgEgCgCg");
	this.shape_4.setTransform(-42.3,-4.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C18F1C").s().p("AFyDxQgIgDgBgFIABgFQgEAAgDgCIgCAKIgGALIAAgCIgBgBIgDgbIACAAIgCgFIAAAAIAAAAIgBgDQAAgbACgPQAJgkADgPQADgbAAhMIAAgCQAOABAVAFQgVBKABB4IABAFIAAAFQACAIADAZQgKgBAAgMgAFvgIQAMgaAAgkQAAghgLgXQAEgEAAgXIABgHIADAAQAegIgBgRQABATgLA/QgKA4AGAjQgCAEgVAAIgBAAgACjitIAGgIQAHgMAAgIQAAgGgFgKQArAAAbgDQALAIAAAUQAAAUgOAEQgkgEgngBgAAqi4QgGgEgDABIgFgCIgJgEQACgMgDgPQAfgBBOADIALAAQABAGAEAFIABAPIgBANIgCAFQgpAAgqACIgQgMgAnCiyQATgKADgdIAAgJIgBgKIgCgGIACgBQABgHAEgEIABAGIABAAIAEACIACABIACABIADAFIACAEQABAFAAAIQAAAJgFAGIAAAAIgDADIgCAAIgBABIgGAEIgCAAIgFAHIAAAAIACAAIAAAAQgEAIAQgBIABAAIAFABQgKACgDADIgYABIgBAAgAEri0IAAAAQABgGgEAAIAAAAQABggACgPQAKACAlgEQAagDAJAMQgCAHgOAPQgLAMAAAOQgfgDgYABgAhqi5QARgcgOgQQAUAGAegCIAIABQAIgBAEgBQAQAAAJADQADALgMALQgLAKAHAJIgqACQggAAgLgFgAjBi2IgEgBQACgFAAgIIAAAAQACgGgBgJQgCgZABAAIADgBIAmACQANAHAPAAQAMARgXAdIgaABIgegBgAj0i7IgogDIACgCIgQAAQgWABgYACQAJgagCgfQAQAHAfgCQAFACANAAIAEAAIAyABIACAFIgBAdIgCADIgCAMIgBABIgDACIgTgBgAkRjFIABAAIADgEIABAAIgFAEgAl1i8IAGgHIACgBIABgLIACgCIgDAUIgEABIgEAAgAGfjAQANgMgNgdQAOACAQgFQABAJAEARQACAOgHAHIgegDgAmojAIABAAIgBAAIAAAAgAmbjGIAAgBIAAABIAAAAgAlwjWIAAAEIgBADIABgHgACQjZIAAAAIAAABg");
	this.shape_5.setTransform(1.4,20.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8972EB").s().p("AFaCFQAbgEAKgGIABAAIgCAKQgNAFgJAAQgKAAgEgFgAgpgkQAMgMAAgIQAHAAADALQgGAMgVAPQgFgHAKgLgAkIgqIAEgCIADAQQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgDAAgBgRgAFhgnIgEAAIgCgBIAHgPQAEgKAIgBQgFAIgEAXIgBAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAgBAAgBgADshEQgCgXgLgCQAEgEANAAQANAAAEAEQgBAvgQAEQgCgCgCgYgAB+gsQABgGAAgMIAAgPIgEgKIAAgBIAAgCIAAAAIABgEIAGgFIABAAIACABIABAAIAAAAIABAAIABACIAHAVQAHAUgSALIgGAAgAEIhaQgFgPgnACQAEgLASgCQAQgCANAFIgBAgQAAAUACAGIgBADIAAACIgKABQAFgcgCgNgAjwg3QAKgMAAgPIAFACQAEADgBAGQgDAJgEAIIgLgBgAgdg+QAAgFAHgHQAFgHgCgJIAKAAQAHANgGALIAAAAQAAAAAAAAQAAABAAAAQgBAAAAABQAAAAgBAAIgFAFQAAABAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAQgEAAgHgFgAFhhJQAJgKABgDQAKAIgYAQQgCgDAGgIgAiKhkQAHADAHAOQAAAKgLALQADgagGgMgAF8hMQgOgagJgFQAEgDAJAHIANANQgCAZgBAAIAAgLgAl7hPQAGg/AFAwQACAcgEAAQgDAAgGgNgAjqhsIAEAAIABABQAFAFgCAJQgDgJgFgGgAl/iJQAQADgCAKIgBAAQgLAAgCgNg");
	this.shape_6.setTransform(3.6,7.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhcBOIACABIgBAAIgBgBgABchOIABAAIgBAAg");
	this.shape_7.setTransform(-32.5,-11.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFF00").s().p("AgzBxIAHAAIAPACIAAABIAJgBIAFAAIADAAIAEABIABAAQAMAAAIABIAGABIgCAAQAEACACABQgFACgLAJQgDADgFABIgGAAIgJAAIgEAIIAAACIgJAGQgLAHALgFQgMALgKALQAFgPgFgwgAhxCFIgCgBIAAgBIgCgBIgOgKIADgDQAFgIAAgCIAGAAIAYABQAJgBAFABQAJADAPABIgMAAQgCAEgEACIADACIgBAFQAFAVAFAeQgXgYgdgTgAheArIABgBIABgBQAEgDABgDIACABIAHADIAFACIANACIgiAAgABbhBQgJgBgHgDQgPgEgMgIQgKgFgEgBIgSgDIg0gBQgHAAgBgBIgWgPIAAgBIAAgBIgBgBQAHggAIgUIABgBIACgDIACgFIAFgEIABAAIABABIACAAIAAAAIABABIAoAIQAkAHAXAWQAwAEATAFIAAAEIACAFIAAANIABACIgBAEQgKAZgeAJg");
	this.shape_8.setTransform(-16.4,-8.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#DDB477").s().p("AkUEJIgBgHIAAgBIAAAAQABgFAEgGIADgEIAAgBIAAAAIABgCIABgBIABgBIAAgPQAAgDgGgFIgCgEIgHgHIgEgDIAAAAIAAAAIgBgFQgCgGAAgKIABgHIAAgBIAAAAQADgQAKgmIABgDIADgeQADgUAJgLIBDhCIAEgFIABABQAFgOAUgTQAFgHARgLQAcgwAuANIADAFIABACQAHAHAOAAQAMAAACgCIABACIACgCIABADQAFAEAJAAQAIAAABgFIADADQAJACAJAHQgCAQACAQQAKAAgBgKQgCgOAEgEIADAAIAAABQAFAFAIAFQAQAIAYAAQAIAAAHgCQAIAPAGANIgTACIgEAcIABAAQgJAFAAASQAAABAAAAQAAAAAAABQgBAAAAAAQgBAAgBABQgJgJgygBIg2gaIgGgBIgNgCIgMAAIgEAAIgGgCIgDAAIgDgBIAAAAIgHgBIgMgBIADgCIAAgDIgDgBIgWAPIgsAaIgWAPIAAAAIgHAEIAAABQgeAVgFAJQgHAlgIANIgFAKIgEAKQgCAGgDAEQgCAKgBANIAAADIABAQIADAEIABADIACACIADAEIAHAHIAFAFIAAAAIABAEIAAAPIAAAGIgCAHIgCAEIgHAMIAAABQgCABgDABIgEABIgFAAQgKAAgHgDgABAgDIAAAAIACABIAAgBIgBAAgAEhDkIgBAAIABAAgACFDjIgEAAIgBAAIgBgBIAMAAIgBABIAAAAIgBAAIgBABIgDgBgAg+DTIgEAAIgTgDIgagFIgCgBIgIgEIgNgCIACgJIAAgIIABgFIAAgIIABgUQADgRAJgiIABgGIgBgBIAEgUQAEADAHAEQAPAJAMAAIASgBIAAABIArABIABAAIAMAGIAnARIABABIgEAFQgHABgFAKQgGANgEAbIAAACIgFAUIgDAJIgDAKIgBABIAAAHIgBACIAAAAIAAgCIgBACIgBACQgSgEgpgDgABeAIIABgCIAAACIgBAAgAhogJIAAgBIAAABIgBACIABgCgAhrgHIABgBIAAABIgBAAgAgFh1IABgCIgFgPIgDgHIADgEIAAgBQADADAFAAQAGAAAAgJQAAgGgDAAQgCAAAAAEQAAAFgDgBIgBgEIABgEQAAgGgFgDIgCgCQgFgFgEgGIAAgLIAKAAIAEAAIAIAIQAGAAAAgFIAJACQAOAAAAgPIgEgKIgEgKIgCgGIAAgDIABgDIAEgDIAEgDIAJgHIABgFIAXgIIgBgIIAKAGIgFABIAKAEQANAGACAOIgMgGIgTAMIAYgGIALAHIgBAIIAAAKIACAJIACAIQAEAIAIAMQAAAEgCADIgEADIgFAAIgFAAIgBAAIgCAAIgDAAIAAACIgBABIAAABIABABQABAfgIAHQgQgMgRADQAEASAagBQgDAOgRAQQgJADgJAAQgfAAgQglgAA+jEIAAAKIAEACQABAAAIgNQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAIgIAHg");
	this.shape_9.setTransform(-11.9,-25.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A55927").s().p("ACgCiIgCAAQgHAAgCgCQgNgFAFgRIgCgLIAAgCQgGgNgGgLIAEABQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAIgHgEIgMgCIAAABIADAAIgUADIAAAAIgDABQgUAAgJgIIgFgEQAIgBAHgCIAAgBIAWggIAJgVQAEgNgDgMIADABIgCgEIgBgBIABAAQATAAAAgOQAAgCgFgJIAAAAIgFgOIAAgBIgCgKIgBgBIgBgJQgCgRgIgNIgJgMIgGgDIAXgJQAEALAHAIIANAMIgKAWIARANIgCANIgCAFIABADIAMAJQADAegGAfIgHAJQgDAFAAAEIAAAGIAAAAIABADIADACIAHACIgGgNQAOgUAEgYQgFgPADgQIAAgDIgCgDIgLgIIAAgCIABgGIACgIIABgDIgCgIIgOgJIAHgZIgRgMIgEgQQgOgJgNAIIgKAHIgNgGIgGAIIgGAAIgQgTQgPAGgQgGIgNgGIgSALIgHAGIgJgBIgEgCQgEAPgIAMQgJAPgPALIADAYIgVAKIAFAFIAEACIAAgBIAHgFIAKgDIACgLQABgMgFgHQARgIAHgQIABgEQADgJAGgFIAIgDQAIgCAGgFIAKgIQAUAIAWgFQAIAJAKAHQACACAEACIgPAFIgBAIIgSABIgCgGIgbgKIgEADIgCAWIgQAGIgLgFQgJALADAPIADAUIgaAPIAGAOIgtAcIADAOIACADQABAAABAAQAAAAAAgBQABAAAAgBQAAAAABgBIgCgNQAagFAPgUIAEgEIgFgMIAOgGIAMgHIgCgSQgCgLgDgIQAOABAPgFIACAAIAGgDIgBgKIABgGIABgGIAbANIACABIgKAHIABAGIABAEIABAFIAEAHIAGAKQACAHgJAAQgKgDgPgBIgDAAIgBAAIgDAAIgKAGIgCAIQABALAOANQAAADgEAEQgEAFAAAFIAGAMIABAJIAAABIgBACIACALIAHAJIAAAAIAAABIAAABQAAAIgHgBIgIgJQgEgCgFAAIgMACQgHAAgGgFIADAAQgKgNgRgBQgdgDgbAdQgKALgIANIgiAjQgFgEgDgEIAIgXIgBgFIgMgKQgBgRALgLQAFgGAHgEIgGgYQAPgXAdgGIgGgGIgCgLQAOgGATgEQAPgFABgPIgIgPIATgQIgGgXIALgDIAQgDIgFgXIA/gHIgDgQIAaAFIAVAFIAOgOQAEACAEAEQAGAGADAKIAmgBIgBAUIAEACIAVgCIACADQAAAPANAJIAIADIgGAUIABAEIAQAMQAFALgIALIgFAHIAFAMIgGARIAFAKIgLAaIAPATIgLAOQATAPAEAYIgHAJQAJAMgCAOQgBAOgLAIIgFAAIgKgDgAgOBFIAAgBIACACIgBACIgBgDg");
	this.shape_10.setTransform(-13.1,-41.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("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");
	this.shape_11.setTransform(0,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(151));

	// Layer 3
	this.instance_1 = new lib.CarmenBicep();
	this.instance_1.setTransform(-2.9,-28.6,1,1,0,0,0,-5.2,-11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(32).to({rotation:-60,x:0,y:-28.4},8).wait(9).to({rotation:0,x:-2.9,y:-28.6},6).wait(96));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.7,-58.9,95.4,117.2);


(lib.blank = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.blank_gr("synched",0);
	this.instance.setTransform(32.6,17,1,1,0,0,0,32.5,17);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,65,34);


(lib.FourFormsRecap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.FourForms();
	this.instance.setTransform(0,-21.3,1.464,1.464);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(46).to({scaleX:1.24,scaleY:1.24,y:-92.4},10).wait(351));

	// Layer 6
	this.instance_1 = new lib.were();
	this.instance_1.setTransform(-143,-9.1);

	this.instance_2 = new lib.were();
	this.instance_2.setTransform(-143,-9.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1,p:{x:-143,y:-9.1}}]},96).to({state:[{t:this.instance_2},{t:this.instance_1,p:{x:-115.7,y:42.1}}]},76).to({state:[{t:this.instance_2},{t:this.instance_1,p:{x:-115.7,y:42.1}}]},80).to({state:[{t:this.instance_2},{t:this.instance_1,p:{x:-115.7,y:42.1}}]},99).wait(56));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgDAzQgDgBAAgEIABgIIAAgIIgCgpIgQgBQgGgBAAgGQAAgDABgDQACgCAEAAIAPABIAAgKIgBgJQAAgDACgCQADgCADAAQAEAAABALIAAAGIAAAFIAAAEIALgBIAKABQAEACAAAFQAAADgCACQgCACgDAAIgEAAIgDAAIgKABIABApIAAADIAAAEQABAQgIAAQgBAAgCgCg");
	this.shape.setTransform(-25.8,-33.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgUAgQgKgKAAgPQAAgNAKgQQALgSAMAAQAHAAAJAEQALAEAAAGQAAADgCACQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIgDgBIgDgCQgFgEgJAAQgGAAgHANQgHANAAAHQAAAJAHAGQAGAFAIAAQAEAAAFgCIAIgFIAEgBQAAAAABAAQABABAAAAQABAAAAAAQABABAAAAQACACAAADQAAAFgLAFQgKAFgGAAQgNAAgLgJg");
	this.shape_1.setTransform(-33.1,-32.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAXAlIgFgFIgMAFQgGACgBAAQgRAAgIgJQgIgKAAgSQAAgQANgNQAMgMAPAAQAGAAAIADQAKAEAAAGQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAIgCAKIAAAOQAAAJABAFIAFANIACAEIAAABQAAADgCACQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQgBAAgEgDgAgLgRQgIAJAAAKQAAAMAEAGQAEAGAJAAQAFAAAFgCIAHgGQgCgSAAgJIAAgHIACgIIgFgCIgDAAQgKAAgIAJg");
	this.shape_2.setTransform(-40.9,-32.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgLA+QgCgCAAgDIAAgBQACgKAAgLIAAgUIAAgTIgMAAQgHAAAAgHQAAgHANAAIAHAAIABgMQACgQAGgIQAGgJAQAAQAKAAAAAHQAAAHgJAAQgSAAgCAZIAAAEIAQAAQALAAAAAHQAAAFgFABIgGABIgRABIgBAOIABAOIAAANQAAAOgBAIQAAAGgGAAQgDAAgCgCg");
	this.shape_3.setTransform(-48.6,-33.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgUAeQgKgKgBgRQAAgOAJgNQAKgPAQAAQAPAAAHAOQAGALAAAOQAAAPgIAMQgKANgOAAQgLAAgJgKgAgLgOQgFAJAAAIQAAALAGAGQAEAFAGAAQAHAAAFgGQAGgGABgKQABgbgRAAQgIAAgGAKg");
	this.shape_4.setTransform(-60.9,-32.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgDAzQgDgBAAgEIABgIIAAgIIgCgpIgQgBQgGgBAAgGQAAgDABgDQACgCAEAAIAPABIAAgKIgBgJQAAgDACgCQADgCADAAQAEAAABALIAAAGIAAAFIAAAEIALgBIAKABQAEACAAAFQAAADgCACQgCACgDAAIgEAAIgDAAIgKABIABApIAAADIAAAEQABAQgIAAQgBAAgCgCg");
	this.shape_5.setTransform(-68.2,-33.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgSA5QgCgCAAgDQAAgIAPgjIgagwIgDgGQgCgDAAgCQAAgDACgDQADgCACAAQAEAAACADQAMARAMAgIALgZIALgXQADgEAEAAQADAAACACQACACAAADIgBAEIgZA1IgMAhIgFAOQgCAGgFAAQgDAAgCgCg");
	this.shape_6.setTransform(-80.4,-30.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgbAhIAAgxIAAgHIAAgIQABgIAGAAQAHAAAAANQANgOAQAAQAHABACAEQADAEAAAJIAAAGQAAAIgHABQgGgBgBgGIAAgGIAAgGQgLABgFAFQgHAGgEAJIAAAmQAAAHgHAAQgHAAAAgHg");
	this.shape_7.setTransform(-87.4,-32.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAXAlIgFgFIgMAFQgGACgBAAQgRAAgIgJQgIgKAAgSQAAgQANgNQAMgMAPAAQAGAAAIADQAKAEAAAGQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAIgCAKIAAAOQAAAJABAFIAFANIACAEIAAABQAAADgCACQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQgBAAgEgDgAgLgRQgIAJAAAKQAAAMAEAGQAEAGAJAAQAFAAAFgCIAHgGQgCgSAAgJIAAgHIACgIIgFgCIgDAAQgKAAgIAJg");
	this.shape_8.setTransform(-95.1,-32.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgbAhIAAgxIABgHIAAgIQgBgIAHAAQAHAAAAANQANgOARAAQAFABAEAEQACAEAAAJIAAAGQgBAIgGABQgHgBAAgGIAAgGIAAgGQgLABgGAFQgGAGgFAJIABAmQAAAHgIAAQgGAAAAgHg");
	this.shape_9.setTransform(-102.3,-32.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgDAzQgDgBAAgEIABgIIAAgIIgCgpIgQgBQgGgBAAgGQAAgDABgDQACgCAEAAIAPABIAAgKIgBgJQAAgDACgCQADgCADAAQAEAAABALIAAAGIAAAFIAAAEIALgBIAKABQAEACAAAFQAAADgCACQgCACgDAAIgEAAIgDAAIgKABIABApIAAADIAAAEQABAQgIAAQgBAAgCgCg");
	this.shape_10.setTransform(-109.7,-33.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AASAjIgDgQIgBgQIABgEIAAgHQAAgQgGgBQgIAAgGAKQgGAJgEAMIgBAHIAAAHIAAAGIABAHQAAADgCACQgCACgEABQgDgBgCgCQgCgCAAgDIAAgHIgBgGIABgUIABgUIAAgHIAAgHQAAgDACgCQACgCADAAQAHAAABAJIAAAJQAMgQALgBQAMAAAEALQAEAHAAAOIAAAHIAAAEIABAQIACAQQAAADgCACQgCACgDAAQgHAAAAgHg");
	this.shape_11.setTransform(-117,-32.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgUAeQgKgKgBgRQAAgOAJgNQAKgPAQAAQAPAAAHAOQAGALAAAOQAAAPgIAMQgKANgOAAQgLAAgJgKgAgLgOQgFAJAAAIQAAALAGAGQAEAFAGAAQAHAAAFgGQAGgGABgKQABgbgRAAQgIAAgGAKg");
	this.shape_12.setTransform(-125.2,-32.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgUAgQgKgKAAgPQAAgNAKgQQALgSAMAAQAHAAAJAEQALAEAAAGQAAADgCACQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIgDgBIgDgCQgFgEgJAAQgGAAgHANQgHANAAAHQAAAJAHAGQAGAFAIAAQAEAAAFgCIAIgFIAEgBQAAAAABAAQABABAAAAQABAAAAAAQABABAAAAQACACAAADQAAAFgLAFQgKAFgGAAQgNAAgLgJg");
	this.shape_13.setTransform(-132.8,-32.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgTAoQgMgEAAgIQAAgCADgDQACgCADAAQADABADADQABABAHACIAIAAQAEAAAFgBQAHgCAAgFQAAgKgOgDIgGgCQgKgCgDgCQgHgDAAgIQAAgQAPgGIAMgEIAOgGIAGAAQAEAAABABQACACAAAEIABAGIABAGQAAAEgCACQgCACgDAAQgEgBgCgCIgBgIIgRAFQgKAFAAAHIAEABQAPADAIAFQAMAGAAAOQAAANgKAFQgJAFgLABQgKAAgIgEg");
	this.shape_14.setTransform(-145,-32.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgDAzQgDgBAAgEIABgIIAAgIIgCgpIgQgBQgGgBAAgGQAAgDABgDQACgCAEAAIAPABIAAgKIgBgJQAAgDACgCQADgCADAAQAEAAABALIAAAGIAAAFIAAAEIALgBIAKABQAEACAAAFQAAADgCACQgCACgDAAIgEAAIgDAAIgKABIABApIAAADIAAAEQABAQgIAAQgBAAgCgCg");
	this.shape_15.setTransform(-152,-33.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AASAjIgDgQIgBgQIABgEIAAgHQAAgQgGgBQgIAAgGAKQgGAJgEAMIgBAHIAAAHIAAAGIABAHQAAADgCACQgCACgEABQgDgBgCgCQgCgCAAgDIAAgHIgBgGIABgUIABgUIAAgHIAAgHQAAgDACgCQACgCADAAQAHAAABAJIAAAJQAMgQALgBQAMAAAEALQAEAHAAAOIAAAHIAAAEIABAQIACAQQAAADgCACQgCACgDAAQgHAAAAgHg");
	this.shape_16.setTransform(-159.3,-32.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgYAfQgLgJAAgQQAAgSAJgNQAKgNAQAAQALAAAIADQAJAGAAAKQAAAIgIAFIgPAGIgaAOQADAGAHADQAGADAGAAQAFAAAHgCQAJgCACgEQADgEACAAQADAAACACQAAAAABABQAAABABAAQAAABAAAAQAAABAAAAQAAAJgNAFQgLAFgLABQgOAAgLgJgAgOgSQgGAGgDAMIAXgJQALgFAFgFQgGgHgKAAQgIAAgGAIg");
	this.shape_17.setTransform(-167.3,-32.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgDArQgCgCAAgEIgCgaIgBgYQAAgIgDgEQgFACgFAGIgJAJIgDAFIgBALIgBANIABAGIAAAFQAAADgCACQgCACgDAAQgIAAAAgSIAAgNIABgMIAAgLIgBgMQAAgRAHAAQADAAADADQACACAAADIAAAFIgBAEIAAAIQAEgIAIgGQAHgHAFAAQALAAADAMQAEgGAGgCQAFgDAHAAQANAAAEANIADAVQACAKADAeQAAADgCACQgCACgDAAQgGAAgBgHIgDgWIgCgVQgBgFgCgFQgCgGgDAAQgDAAgHAEQgHAEgCADIAAANIACASIABATQAAAEgBACQgDACgDAAQgBAAgCgCg");
	this.shape_18.setTransform(-177.3,-32.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgYAfQgLgJAAgQQAAgSAJgNQAKgNAQAAQALAAAIADQAJAGAAAKQAAAIgIAFIgQAGIgaAOQAFAGAFADQAHADAGAAQAFAAAHgCQAIgCADgEQACgEADAAQADAAACACQABAAAAABQAAABAAAAQABABAAAAQAAABAAAAQAAAJgOAFQgLAFgKABQgOAAgLgJgAgOgSQgGAGgDAMIAWgJQAMgFAFgFQgFgHgLAAQgIAAgGAIg");
	this.shape_19.setTransform(-187.1,-32.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgDAzQgDgBAAgEIABgIIAAgIIgCgpIgQgBQgGgBAAgGQAAgDABgDQACgCAEAAIAPABIAAgKIgBgJQAAgDACgCQADgCADAAQAEAAABALIAAAGIAAAFIAAAEIALgBIAKABQAEACAAAFQAAADgCACQgCACgDAAIgEAAIgDAAIgKABIABApIAAADIAAAEQABAQgIAAQgBAAgCgCg");
	this.shape_20.setTransform(-194.9,-33.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAXAlIgFgFIgMAFQgGACgBAAQgRAAgIgJQgIgKAAgSQAAgQANgNQAMgMAPAAQAGAAAIADQAKAEAAAGQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAIgCAKIAAAOQAAAJABAFIAFANIACAEIAAABQAAADgCACQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQgBAAgEgDgAgLgRQgIAJAAAKQAAAMAEAGQAEAGAJAAQAFAAAFgCIAHgGQgCgSAAgJIAAgHIACgIIgFgCIgDAAQgKAAgIAJg");
	this.shape_21.setTransform(-202.3,-32.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgDAzQgDgBAAgEIABgIIAAgIIgCgpIgQgBQgGgBAAgGQAAgDABgDQACgCAEAAIAPABIAAgKIgBgJQAAgDACgCQADgCADAAQAEAAABALIAAAGIAAAFIAAAEIALgBIAKABQAEACAAAFQAAADgCACQgCACgDAAIgEAAIgDAAIgKABIABApIAAADIAAAEQABAQgIAAQgBAAgCgCg");
	this.shape_22.setTransform(-209.7,-33.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgTAoQgLgEAAgIQgBgCADgDQACgCADAAQADABADADQABABAHACIAIAAQAEAAAFgBQAGgCAAgFQAAgKgNgDIgGgCQgKgCgEgCQgFgDgBgIQAAgQAPgGIAMgEIAOgGIAHAAQACAAACABQADACAAAEIABAGIABAGQAAAEgCACQgCACgEAAQgEgBgCgCIgCgIIgQAFQgKAFAAAHIAEABQAPADAIAFQAMAGAAAOQAAANgKAFQgJAFgLABQgKAAgIgEg");
	this.shape_23.setTransform(-217,-32.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgFAGQgDgDAAgDQAAgCADgDQACgDADAAQADAAADADQACADAAACQAAADgCADQgDADgDAAQgDAAgCgDg");
	this.shape_24.setTransform(-231.3,-28.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AACA5IgNAAIgHgBQgEgCAAgEQAAgHALAAIAEAAIADAAIgBgLIAAgJIABgbIACgcQgKAIgCgBQgEAAgCgCQgCgCAAgDQAAgDAHgFIALgJQAEgGAGgBQAFABAAAFIAAAFIgBAFIABAIIAAAGIgCAZIgCAYIABAJIABAKIAHAAQADAAACACQACACAAAEQAAACgCACQgCADgDAAg");
	this.shape_25.setTransform(-236.5,-34.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgTAoQgMgEAAgHQAAgDADgDQACgCADAAQADABADADQABACAHABIAIABQAEgBAFgBQAHgCAAgFQAAgKgOgDIgGgCQgKgCgDgCQgHgDAAgIQAAgPAPgHIAMgFIAOgEIAGgBQAEAAABABQACADAAADIABAGIABAGQAAADgCADQgCACgDAAQgEgBgCgCIgBgIIgRAFQgKAFAAAGIAEACQAPADAIAFQAMAGAAAOQAAANgKAFQgJAFgLABQgKAAgIgEg");
	this.shape_26.setTransform(-176,18.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgYAfQgLgJAAgQQAAgSAJgNQAKgNAQAAQALAAAIAEQAJAEAAALQAAAIgIAFIgQAGIgaAOQAEAGAGADQAHADAGAAQAFAAAHgCQAIgCADgEQACgEADAAQADAAACACQAAAAABABQAAABAAAAQABABAAAAQAAABAAAAQAAAIgOAHQgLAEgKAAQgPABgKgJgAgOgSQgGAGgDAMIAWgIQAMgHAGgEQgHgHgKAAQgIAAgGAIg");
	this.shape_27.setTransform(-183.4,18.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AATA3IgDgRIgBgSIAAgGIAAgFQAAgMgGAAQgJAAgGAGIgKARQAAAcgDAFQgCAFgEgBQgDAAgCgBQgDgCAAgEIABgDIABgKIAAgLIAAg0IABgMIgBgHIgBgHQAAgEADgCQACgBADAAQAGAAABAGIABANIgBAQIAAAQIAAAGQAGgIAHgEQAFgDAIAAQAMAAAEAIQADAFABALIAAAOIACAQIACAPIABACQAAACgCACQgDACgDABQgFAAgCgGg");
	this.shape_28.setTransform(-191.9,16.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgTAoQgMgEAAgHQABgDACgDQACgCADAAQADABADADQABACAHABIAIABQAEgBAFgBQAGgCAAgFQAAgKgNgDIgGgCQgJgCgFgCQgFgDAAgIQAAgPAOgHIAMgFIAOgEIAGgBQAEAAACABQACADAAADIAAAGIABAGQAAADgBADQgCACgEAAQgEgBgBgCIgDgIIgQAFQgKAFAAAGIAEACQAPADAIAFQAMAGAAAOQAAANgKAFQgJAFgLABQgKAAgIgEg");
	this.shape_29.setTransform(-200.2,18.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgGA1QgCgCAAgEIAAgNIAAgOIABgRIAAgOQAAgEACgCQACgCADAAQACAAACACQACACAAAEIgBAOIgBARIABAOIAAANQAAAEgCACQgCABgBAAQgEAAgCgBgAgDgnQgDgCAAgEQAAgDADgDQACgDACABQADgBADADQACADAAADQAAAEgCACQgDACgDABQgCgBgCgCg");
	this.shape_30.setTransform(-205.6,17.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAEAUIgDgRIgBgOIgFAMIgLAeIgDAFQgCAEgFAAQgFAAgGgWIgFgdIgCgLIgBgKQAAgEACgCQACgCAEAAQAFAAABAHIACAKIABALIAEAfQAJgVAIgdQADgJAEAAQAFAAADAJIAEAbIAGAbIAEgUIAKgmQACgEAEgBQADAAADACQACACAAAEIgBADIgPA0QgCAGgEAIQgDADgEAAQgJAAgEgUg");
	this.shape_31.setTransform(-212.9,19.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgFAGQgCgDgBgDQABgCACgDQADgDACAAQADAAADADQADADgBACQABADgDADQgDADgDAAQgCAAgDgDg");
	this.shape_32.setTransform(-228.9,22.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAWA3IgFgBIgLAAIgKABIgIAAIgJABIgCAAIgCgBQgFAAgCgFIgBgIQAAgRAKgLQAEgFASgKQAJgIADgEQAHgHAAgJQAAgFgGgDQgGgEgFAAQgFAAgGAEIgKAIQgDADgCAAQgIAAAAgGQAAgEADgCQAJgIAGgEQAJgFAHAAQAMAAAJAHQALAHAAALQAAAIgCAGQgCAGgFAGQgFAEgNAIQgMAJgEAEQgJAJABAMIAPgCIAUAAQAFAAAFABQAHADAAAFQAAACgCADQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAIgFgBg");
	this.shape_33.setTransform(-235.4,16.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgZAxQgKgKAAgRQAAgTAKgJQALgNAOAAQAJAAAFADIAGAFIADgpQABgGAFgBQAHAAAAAIIgDAtIAAATQAAAYABAMIAAACQAAABAAABQAAABAAAAQAAABgBAAQAAABAAAAQgBAAgBABQAAAAgBABQAAAAgBAAQAAAAgBAAQgFAAgCgHQgFAFgGABQgGACgEAAQgOAAgLgKgAgQABQgGAHAAAOQAAAKAGAHQAIAHAIAAQAEAAAFgCIAIgHIACgCIAAgNIAAgJIAAgIQgCgFgGgCQgEgDgHAAQgKAAgGAGg");
	this.shape_34.setTransform(37.9,68.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AASAkIgDgQIgBgRIABgFIAAgGQAAgRgGABQgIAAgGAJQgGAJgEALIgBAIIAAAHIAAAHIABAGQAAADgCACQgCACgEAAQgDAAgCgCQgCgCAAgDIAAgGIgBgHIABgUIABgUIAAgHIAAgHQAAgDACgCQACgCADAAQAHAAABAJIAAAJQAMgRALAAQAMAAAEALQAEAHAAAOIAAAHIAAAEIABARIACAPQAAADgCACQgCACgDAAQgHAAAAgGg");
	this.shape_35.setTransform(29.8,70);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAXAlIgFgFIgMAFQgGACgBAAQgRAAgIgJQgIgKAAgSQAAgQANgNQAMgMAPAAQAGAAAIADQAKAEAAAGQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAIgCAKIAAAOQAAAJABAFIAFANIACAEIAAABQAAADgCACQgBABAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgBAAgEgDgAgLgRQgIAJAAAKQAAAMAEAGQAEAGAJAAQAFAAAFgCIAHgGQgCgSAAgJIAAgHIACgIIgFgCIgDAAQgKAAgIAJg");
	this.shape_36.setTransform(21.8,70.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgDArQgCgCAAgEIgCgaIgBgYQAAgIgDgEQgFACgFAGIgJAJIgDAFIgBALIgBANIABAGIAAAFQAAADgCACQgCACgDAAQgIAAAAgSIAAgNIABgMIAAgLIgBgMQAAgRAHAAQADAAADADQACACAAADIAAAFIgBAEIAAAIQAEgIAIgGQAHgHAFAAQALAAADAMQAEgGAGgCQAFgDAHAAQANAAAEANIADAVQACAKADAeQAAADgCACQgCACgDAAQgGAAgBgHIgDgWIgCgVQgBgFgCgFQgCgGgDAAQgDAAgHAEQgHAEgCADIAAANIACASIABATQAAAEgBACQgDACgDAAQgBAAgCgCg");
	this.shape_37.setTransform(0.6,70.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAXAlIgFgFIgMAFQgGACgBAAQgRAAgIgJQgIgKAAgSQAAgQANgNQAMgMAPAAQAGAAAIADQAKAEAAAGQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAIgCAKIAAAOQAAAJABAFIAFANIACAEIAAABQAAADgCACQgBABAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgBAAgEgDgAgLgRQgIAJAAAKQAAAMAEAGQAEAGAJAAQAFAAAFgCIAHgGQgCgSAAgJIAAgHIACgIIgFgCIgDAAQgKAAgIAJg");
	this.shape_38.setTransform(-29.3,70.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgTAoQgLgEAAgHQAAgDACgDQACgCADAAQACABAEADQABACAHABIAIABQAEgBAFgBQAGgCABgEQAAgLgOgDIgGgCQgKgCgEgCQgFgDgBgIQAAgPAPgHIAMgFIAOgEIAHgBQACAAACACQACACABADIABAGIABAGQAAAEgCABQgDADgDAAQgEAAgCgDIgCgIIgQAFQgKAFAAAGIAEACQAPADAIAFQAMAGAAAPQAAALgKAHQgJAEgLAAQgJAAgJgDg");
	this.shape_39.setTransform(-61.4,69.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgDA0QgDgDAAgDIABgIIAAgIIgCgpIgQgBQgGgBAAgGQAAgEABgCQACgCAEAAIAPACIAAgKIgBgJQAAgEACgCQADgCADAAQAEAAABALIAAAHIAAADIAAAGIALgCIAKABQAEACAAAFQAAADgCACQgCACgDAAIgEAAIgDAAIgKABIABApIAAAEIAAADQABAQgIAAQgBAAgCgBg");
	this.shape_40.setTransform(-68.4,68.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AASAkIgDgQIgBgRIABgFIAAgGQAAgRgGABQgIAAgGAJQgGAJgEALIgBAIIAAAHIAAAHIABAGQAAADgCACQgCACgEAAQgDAAgCgCQgCgCAAgDIAAgGIgBgHIABgUIABgUIAAgHIAAgHQAAgDACgCQACgCADAAQAHAAABAJIAAAJQAMgRALAAQAMAAAEALQAEAHAAAOIAAAHIAAAEIABARIACAPQAAADgCACQgCACgDAAQgHAAAAgGg");
	this.shape_41.setTransform(-75.7,70);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgYAfQgLgJAAgQQAAgSAJgMQAKgPAQAAQALABAIAEQAJAEAAALQAAAIgIAFIgQAGIgZAOQAEAGAFADQAHADAGAAQAFAAAHgCQAIgCADgEQADgEACAAQADAAACACQABAAAAABQAAABABAAQAAABAAAAQAAABAAAAQAAAIgOAHQgLAEgKAAQgOABgLgJgAgOgSQgGAGgDAMIAWgIQAMgHAFgEQgFgHgLABQgIgBgGAIg");
	this.shape_42.setTransform(-83.7,70.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgDA0QgDgDAAgDIABgIIAAgIIgCgpIgQgBQgGgBAAgGQAAgEABgCQACgCAEAAIAPACIAAgKIgBgJQAAgEACgCQADgCADAAQAEAAABALIAAAHIAAADIAAAGIALgCIAKABQAEACAAAFQAAADgCACQgCACgDAAIgEAAIgDAAIgKABIABApIAAAEIAAADQABAQgIAAQgBAAgCgBg");
	this.shape_43.setTransform(-91.5,68.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AASAkIgDgQIgBgRIABgFIAAgGQAAgRgGABQgIAAgGAJQgGAJgEALIgBAIIAAAHIAAAHIABAGQAAADgCACQgCACgEAAQgDAAgCgCQgCgCAAgDIAAgGIgBgHIABgUIABgUIAAgHIAAgHQAAgDACgCQACgCADAAQAHAAABAJIAAAJQAMgRALAAQAMAAAEALQAEAHAAAOIAAAHIAAAEIABARIACAPQAAADgCACQgCACgDAAQgHAAAAgGg");
	this.shape_44.setTransform(-98.8,70);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgUAeQgKgKgBgRQAAgOAJgNQAKgPAQAAQAPAAAHAOQAGALAAAOQAAAPgIAMQgKANgOAAQgLAAgJgKgAgLgOQgFAJAAAIQAAALAGAGQAEAFAGAAQAHAAAFgGQAGgGABgKQABgbgRAAQgIAAgGAKg");
	this.shape_45.setTransform(-107,70.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgYAfQgLgJAAgQQAAgSAJgMQAKgPAQAAQALABAIAEQAJAEAAALQAAAIgIAFIgQAGIgZAOQAEAGAFADQAHADAGAAQAFAAAHgCQAIgCADgEQADgEACAAQADAAACACQABAAAAABQAAABABAAQAAABAAAAQAAABAAAAQAAAIgOAHQgLAEgKAAQgOABgLgJgAgOgSQgGAGgDAMIAWgIQAMgHAFgEQgFgHgLABQgIgBgGAIg");
	this.shape_46.setTransform(-126.9,70.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AATA3IgDgRIgBgSIAAgGIAAgFQAAgMgGAAQgJAAgGAGIgKARQAAAcgDAFQgCAEgEAAQgDAAgCgBQgDgCAAgEIABgCIABgLIAAgLIAAg0IABgMIgBgIIgBgGQAAgEADgCQACgBADAAQAGAAABAGIABANIgBAQIAAAQIAAAGQAGgHAHgFQAFgDAIAAQAMAAAEAHQADAGABALIAAAOIACAQIACAOIABADQAAACgCACQgDACgDAAQgFABgCgGg");
	this.shape_47.setTransform(-135.4,68.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgDA0QgDgDAAgDIABgIIAAgIIgCgpIgQgBQgGgBAAgGQAAgEABgCQACgCAEAAIAPACIAAgKIgBgJQAAgEACgCQADgCADAAQAEAAABALIAAAHIAAADIAAAGIALgCIAKABQAEACAAAFQAAADgCACQgCACgDAAIgEAAIgDAAIgKABIABApIAAAEIAAADQABAQgIAAQgBAAgCgBg");
	this.shape_48.setTransform(-143.4,68.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgYA4QgJgCAAgFQAAgHAGAAIAJABQAGACAHAAQAMgBAGgNQAEgJAAgTQgFAIgEADQgGAEgFAAQgNAAgJgJQgIgJAAgMQAAgUALgMQAMgNASAAQAHAAAEACQAFACADADQAHABABAIIgCAOIgCAOIgCAWQAAAPgCAJQgEAMgHAGQgJAHgOAAQgKAAgHgCgAgMgjQgHAIAAAOQAAAKAEAEQAEAFAIAAQAFAAAIgGQAGgIABgIIADgZIgGgDQgDgBgDAAQgNAAgHAKg");
	this.shape_49.setTransform(-155.4,72.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AASAkIgDgQIgBgRIABgFIAAgGQAAgRgGABQgIAAgGAJQgGAJgEALIgBAIIAAAHIAAAHIABAGQAAADgCACQgCACgEAAQgDAAgCgCQgCgCAAgDIAAgGIgBgHIABgUIABgUIAAgHIAAgHQAAgDACgCQACgCADAAQAHAAABAJIAAAJQAMgRALAAQAMAAAEALQAEAHAAAOIAAAHIAAAEIABARIACAPQAAADgCACQgCACgDAAQgHAAAAgGg");
	this.shape_50.setTransform(-163.1,70);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgGA1QgCgCAAgEIAAgNIAAgOIABgRIAAgPQAAgDACgCQACgCADAAQACAAACACQACACAAADIgBAPIgBARIABAOIAAANQAAAEgCACQgCABgBAAQgEAAgCgBgAgDgnQgDgDAAgDQAAgDADgDQACgDACABQADgBADADQACADAAADQAAADgCADQgDADgDAAQgCAAgCgDg");
	this.shape_51.setTransform(-169.1,68.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgYAfQgLgJAAgQQAAgSAJgMQAKgPAQAAQALABAIAEQAJAEAAALQAAAIgIAFIgQAGIgaAOQAFAGAFADQAHADAGAAQAFAAAHgCQAIgCADgEQACgEADAAQADAAACACQABAAAAABQAAABAAAAQABABAAAAQAAABAAAAQAAAIgOAHQgLAEgKAAQgOABgLgJgAgOgSQgGAGgDAMIAWgIQAMgHAFgEQgFgHgLABQgIgBgGAIg");
	this.shape_52.setTransform(-183.1,70.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgHAhIgLgdIgNggIgBgDQAAgDADgCQACgDADAAQAEAAACAFIASAxIANggIAGgQQACgFAEAAQADAAADACQACACAAADQAAADgMAcIgPAhQgBAHgFAAQgEAAgDgHg");
	this.shape_53.setTransform(-190.9,70);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AASAkIgDgQIgBgRIABgFIAAgGQAAgRgGABQgIAAgGAJQgGAJgEALIgBAIIAAAHIAAAHIABAGQAAADgCACQgCACgEAAQgDAAgCgCQgCgCAAgDIAAgGIgBgHIABgUIABgUIAAgHIAAgHQAAgDACgCQACgCADAAQAHAAABAJIAAAJQAMgRALAAQAMAAAEALQAEAHAAAOIAAAHIAAAEIABARIACAPQAAADgCACQgCACgDAAQgHAAAAgGg");
	this.shape_54.setTransform(-198.4,70);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgUAeQgKgKgBgRQAAgOAJgNQAKgPAQAAQAPAAAHAOQAGALAAAOQAAAPgIAMQgKANgOAAQgLAAgJgKgAgLgOQgFAJAAAIQAAALAGAGQAEAFAGAAQAHAAAFgGQAGgGABgKQABgbgRAAQgIAAgGAKg");
	this.shape_55.setTransform(-206.6,70.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgUAgQgKgKAAgPQAAgNAKgQQALgSAMAAQAHAAAJAEQALAEAAAGQAAADgCACQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIgDgBIgDgCQgFgEgJAAQgGAAgHANQgHANAAAHQAAAJAHAGQAGAFAIAAQAEAAAFgCIAIgFIAEgBQAAAAABAAQABABAAAAQABAAAAAAQABABAAAAQACACAAADQAAAFgLAFQgKAFgGAAQgNAAgLgJg");
	this.shape_56.setTransform(-214.2,70.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgTA1QgKgGgEgKIAAgCQAAgDACgCQADgCADAAQACAAACADIAEAFQACADAFACQAEACAGAAQAHAAAGgFQAGgFAAgIQAAgLgIgGQgHgGgKgBQgIgBAAgEQAAgEAGgDIAQgEQAFgCADgDQACgDAAgEQAAgHgFgEQgGgEgHAAQgFAAgEACIgJAGIgEABQgDAAgCgCQgCgCAAgDQAAgGAMgFQAJgFAGAAQAOAAAJAHQAKAHAAAOQAAARgNAGIgEABQAKAEAFAFQAFAHAAALQAAAOgLAKQgJAKgOAAQgKAAgJgEg");
	this.shape_57.setTransform(-235.5,68.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgFAGQgCgDgBgDQABgCACgDQADgDACAAQADAAADADQADADgBACQABADgDADQgDADgDAAQgCAAgDgDg");
	this.shape_58.setTransform(-228.9,22.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgUAgQgKgKAAgPQAAgNAKgQQALgSAMAAQAHAAAJAEQALAEAAAGQAAADgCACQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIgDgBIgDgCQgFgEgJAAQgGAAgHANQgHANAAAHQAAAJAHAGQAGAFAIAAQAEAAAFgCIAIgFIAEgBQAAAAABAAQABABAAAAQABAAAAAAQABABAAAAQACACAAADQAAAFgLAFQgKAFgGAAQgNAAgLgJg");
	this.shape_59.setTransform(-33.1,-32.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgLA+QgCgCAAgDIAAgBQACgKAAgLIAAgUIAAgTIgMAAQgHAAAAgHQAAgHANAAIAHAAIABgMQACgQAGgIQAGgJAQAAQAKAAAAAHQAAAHgJAAQgSAAgCAZIAAAEIAQAAQALAAAAAHQAAAFgFABIgGABIgRABIgBAOIABAOIAAANQAAAOgBAIQAAAGgGAAQgDAAgCgCg");
	this.shape_60.setTransform(-48.6,-33.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgUAeQgKgKgBgRQAAgOAJgNQAKgPAQAAQAPAAAHAOQAGALAAAOQAAAPgIAMQgKANgOAAQgLAAgJgKgAgLgOQgFAJAAAIQAAALAGAGQAEAFAGAAQAHAAAFgGQAGgGABgKQABgbgRAAQgIAAgGAKg");
	this.shape_61.setTransform(-60.9,-32.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgSA5QgCgCAAgDQAAgIAPgjIgagwIgDgGQgCgDAAgCQAAgDACgDQADgCACAAQAEAAACADQAMARAMAgIALgZIALgXQADgEAEAAQADAAACACQACACAAADIgBAEIgZA1IgMAhIgFAOQgCAGgFAAQgDAAgCgCg");
	this.shape_62.setTransform(-80.4,-30.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgUAeQgKgKgBgRQAAgOAJgNQAKgPAQAAQAPAAAHAOQAGALAAAOQAAAPgIAMQgKANgOAAQgLAAgJgKgAgLgOQgFAJAAAIQAAALAGAGQAEAFAGAAQAHAAAFgGQAGgGABgKQABgbgRAAQgIAAgGAKg");
	this.shape_63.setTransform(-125.2,-32.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgUAgQgKgKAAgPQAAgNAKgQQALgSAMAAQAHAAAJAEQALAEAAAGQAAADgCACQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIgDgBIgDgCQgFgEgJAAQgGAAgHANQgHANAAAHQAAAJAHAGQAGAFAIAAQAEAAAFgCIAIgFIAEgBQAAAAABAAQABABAAAAQABAAAAAAQABABAAAAQACACAAADQAAAFgLAFQgKAFgGAAQgNAAgLgJg");
	this.shape_64.setTransform(-132.8,-32.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgDArQgCgCAAgEIgCgaIgBgYQAAgIgDgEQgFACgFAGIgJAJIgDAFIgBALIgBANIABAGIAAAFQAAADgCACQgCACgDAAQgIAAAAgSIAAgNIABgMIAAgLIgBgMQAAgRAHAAQADAAADADQACACAAADIAAAFIgBAEIAAAIQAEgIAIgGQAHgHAFAAQALAAADAMQAEgGAGgCQAFgDAHAAQANAAAEANIADAVQACAKADAeQAAADgCACQgCACgDAAQgGAAgBgHIgDgWIgCgVQgBgFgCgFQgCgGgDAAQgDAAgHAEQgHAEgCADIAAANIACASIABATQAAAEgBACQgDACgDAAQgBAAgCgCg");
	this.shape_65.setTransform(-177.3,-32.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgFAGQgDgDABgDQgBgCADgDQACgDADAAQAEAAACADQACADABACQgBADgCADQgCADgEAAQgDAAgCgDg");
	this.shape_66.setTransform(-1.5,124.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgTAoQgMgEAAgHQAAgDADgDQACgBADAAQADAAADADQABABAHACIAIABQAEAAAFgCQAHgCAAgEQAAgLgOgDIgGgCQgKgCgDgCQgHgDAAgIQAAgPAPgHIAMgFIAOgEIAGgBQAEAAABACQACACAAADIABAGIABAGQAAADgCACQgCACgDABQgEAAgCgDIgBgIIgRAFQgKAFAAAGIAEACQAPADAIAFQAMAGAAAPQAAALgKAHQgJAEgLAAQgKABgIgEg");
	this.shape_67.setTransform(-7.3,121);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AASAkIgDgQIgBgRIABgFIAAgGQAAgRgGABQgIAAgGAJQgGAJgEALIgBAIIAAAHIAAAHIABAGQAAADgCACQgCACgEAAQgDAAgCgCQgCgCAAgDIAAgGIgBgHIABgUIABgUIAAgHIAAgHQAAgDACgCQACgCADAAQAHAAABAKIAAAIQAMgRALAAQAMAAAEALQAEAHAAAOIAAAHIAAAEIABARIACAPQAAADgCACQgCACgDAAQgHAAAAgGg");
	this.shape_68.setTransform(-14.5,121.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgGA1QgCgCAAgEIAAgNIAAgOIABgRIAAgPQAAgDACgCQACgCADAAQACAAACACQACACAAADIgBAPIgBARIABAOIAAANQAAAEgCACQgCACgBAAQgEAAgCgCgAgDgnQgDgCAAgEQAAgDADgDQACgCACAAQADAAADACQACADAAADQAAAEgCACQgDADgDAAQgCAAgCgDg");
	this.shape_69.setTransform(-28.5,119.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgDA0QgDgCAAgEIABgIIAAgIIgCgpIgQgBQgGgBAAgGQAAgDABgDQACgCAEAAIAPACIAAgKIgBgJQAAgEACgCQADgCADAAQAEAAABALIAAAHIAAADIAAAGIALgCIAKABQAEABAAAGQAAADgCACQgCACgDAAIgEAAIgDAAIgKABIABApIAAAEIAAADQABAQgIAAQgBAAgCgBg");
	this.shape_70.setTransform(-34.2,120.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AAQAiQgJAFgKAAQgKAAgGgEQgHgFgBgJQgDgTAAgNQAAgLACgMQABgHAGABQADAAACACQACABAAADIgBAMIgBALIABASIACAPIAFACIAFAAQAIAAAKgDIAAgPIAAgMQAAgQACgMQAAgGAHAAQADAAACACQACACAAADIgBAcIAAANIAAAQIAAAGIAAAEQAAAEgCACQgCACgDAAQgGAAgBgIg");
	this.shape_71.setTransform(-41.6,121.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgHA0IABgaIABgaIAAgZIAAgaQAAgIAGAAQAHAAAAAIIgBAaIAAAZIgBAkIAAARQgBAHgFAAQgHAAAAgIg");
	this.shape_72.setTransform(-47.6,119.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgTAoQgMgEAAgHQABgDACgDQACgBADAAQADAAADADQACABAGACIAIABQAEAAAFgCQAHgCgBgEQAAgLgNgDIgGgCQgKgCgDgCQgHgDABgIQAAgPAOgHIAMgFIAOgEIAGgBQAEAAACACQABACAAADIABAGIABAGQAAADgCACQgCACgDABQgEAAgBgDIgCgIIgRAFQgKAFAAAGIAEACQAPADAIAFQAMAGAAAPQAAALgKAHQgJAEgLAAQgJABgJgEg");
	this.shape_73.setTransform(-61.4,121);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgYAfQgLgJAAgRQAAgQAJgNQAKgPAQAAQALAAAIAFQAJAEAAALQAAAIgIAFIgQAHIgaANQAFAGAFADQAHADAGAAQAFAAAHgCQAIgCADgEQACgEADAAQADAAACACQABAAAAABQAAABAAAAQABABAAAAQAAABAAAAQAAAIgOAHQgLAEgKAAQgOAAgLgIgAgOgSQgGAGgDANIAWgJQAMgHAFgFQgFgFgLAAQgIgBgGAIg");
	this.shape_74.setTransform(-68.8,121.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgbAhIAAgyIAAgGIAAgIQAAgHAHAAQAHAAAAAMQANgNAQAAQAHgBACAFQADAEAAAJIAAAFQAAAJgHAAQgGAAgBgGIAAgGIAAgGQgLACgGAFQgGAEgEAKIAAAmQAAAHgIABQgGgBAAgHg");
	this.shape_75.setTransform(-76.4,121.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgZAxQgKgKAAgRQAAgTAKgJQALgNAOAAQAJAAAEADIAHAFIACgpQACgGAFAAQAHgBAAAIIgDAtIAAATQAAAYACAMIAAACQAAABgBABQAAABAAAAQAAABgBAAQAAABAAAAQgBAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgFAAgCgHQgFAFgGABQgFACgFAAQgOABgLgLgAgQABQgGAHAAAOQAAAKAGAHQAIAGAIABQAEAAAFgDIAIgGIACgCIAAgNIAAgJIAAgIQgDgFgFgCQgEgDgHAAQgJAAgHAGg");
	this.shape_76.setTransform(-89.2,119.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AASAkIgDgQIgBgRIABgFIAAgGQAAgRgGABQgIAAgGAJQgGAJgEALIgBAIIAAAHIAAAHIABAGQAAADgCACQgCACgEAAQgDAAgCgCQgCgCAAgDIAAgGIgBgHIABgUIABgUIAAgHIAAgHQAAgDACgCQACgCADAAQAHAAABAKIAAAIQAMgRALAAQAMAAAEALQAEAHAAAOIAAAHIAAAEIABARIACAPQAAADgCACQgCACgDAAQgHAAAAgGg");
	this.shape_77.setTransform(-97.3,121.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgTAoQgMgEAAgHQAAgDADgDQACgBADAAQACAAAEADQACABAGACIAIABQAEAAAFgCQAHgCAAgEQAAgLgOgDIgGgCQgKgCgDgCQgHgDAAgIQAAgPAPgHIAMgFIAOgEIAHgBQADAAABACQACACAAADIABAGIACAGQgBADgCACQgCACgDABQgEAAgCgDIgBgIIgRAFQgKAFAAAGIAEACQAPADAIAFQAMAGAAAPQAAALgKAHQgJAEgLAAQgJABgJgEg");
	this.shape_78.setTransform(-117.4,121);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AASAkIgDgQIgBgRIABgFIAAgGQAAgRgGABQgIAAgGAJQgGAJgEALIgBAIIAAAHIAAAHIABAGQAAADgCACQgCACgEAAQgDAAgCgCQgCgCAAgDIAAgGIgBgHIABgUIABgUIAAgHIAAgHQAAgDACgCQACgCADAAQAHAAABAKIAAAIQAMgRALAAQAMAAAEALQAEAHAAAOIAAAHIAAAEIABARIACAPQAAADgCACQgCACgDAAQgHAAAAgGg");
	this.shape_79.setTransform(-124.7,121.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgGA1QgCgCAAgEIAAgNIAAgOIABgRIAAgPQAAgDACgCQACgCADAAQACAAACACQACACAAADIgBAPIgBARIABAOIAAANQAAAEgCACQgCACgBAAQgEAAgCgCgAgDgnQgDgCAAgEQAAgDADgDQACgCACAAQADAAADACQACADAAADQAAAEgCACQgDADgDAAQgCAAgCgDg");
	this.shape_80.setTransform(-138.6,119.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgDA0QgDgCAAgEIABgIIAAgIIgCgpIgQgBQgGgBAAgGQAAgDABgDQACgCAEAAIAPACIAAgKIgBgJQAAgEACgCQADgCADAAQAEAAABALIAAAHIAAADIAAAGIALgCIAKABQAEABAAAGQAAADgCACQgCACgDAAIgEAAIgDAAIgKABIABApIAAAEIAAADQABAQgIAAQgBAAgCgBg");
	this.shape_81.setTransform(-144.4,120.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgHA0IABgaIABgaIAAgZIAAgaQABgIAFAAQAHAAAAAIIAAAaIAAAZIgCAkIgBARQAAAHgFAAQgHAAAAgIg");
	this.shape_82.setTransform(-174,119.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgbAhIAAgyIAAgGIAAgIQABgHAGAAQAHAAAAAMQANgNAQAAQAGgBADAFQADAEAAAJIAAAFQgBAJgGAAQgGAAAAgGIAAgGIgBgGQgMACgEAFQgHAEgFAKIABAmQAAAHgHABQgHgBAAgHg");
	this.shape_83.setTransform(-198.8,121.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AAKAvIABgEIAAgDIAAgRIgfAAIgOgBQgGgBAAgEQAAgEAEgFIAGgHIAigzQAFgHAIAAQAIAAAAAIIAAA7IADgBQANAAAAAIQAAAFgFABQgDABgIAAIAAAbQAAAHgHAAQgIAAAAgLgAgSAJIAdAAIAAgtIgdAtg");
	this.shape_84.setTransform(-235.5,119.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AAXAlIgFgFIgMAFQgGACgBAAQgRAAgIgJQgIgKAAgSQAAgQANgNQAMgMAPAAQAGAAAIADQAKAEAAAGQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAIgCAKIAAAOQAAAJABAFIAFANIACAEIAAABQAAADgCACQgBABAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgBAAgEgDgAgLgRQgIAJAAAKQAAAMAEAGQAEAGAJAAQAFAAAFgCIAHgGQgCgSAAgJIAAgHIACgIIgFgCIgDAAQgKAAgIAJg");
	this.shape_85.setTransform(21.8,70.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgDArQgCgCAAgEIgCgaIgBgYQAAgIgDgEQgFACgFAGIgJAJIgDAFIgBALIgBANIABAGIAAAFQAAADgCACQgCACgDAAQgIAAAAgSIAAgNIABgMIAAgLIgBgMQAAgRAHAAQADAAADADQACACAAADIAAAFIgBAEIAAAIQAEgIAIgGQAHgHAFAAQALAAADAMQAEgGAGgCQAFgDAHAAQANAAAEANIADAVQACAKADAeQAAADgCACQgCACgDAAQgGAAgBgHIgDgWIgCgVQgBgFgCgFQgCgGgDAAQgDAAgHAEQgHAEgCADIAAANIACASIABATQAAAEgBACQgDACgDAAQgBAAgCgCg");
	this.shape_86.setTransform(0.6,70.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AAXAlIgFgFIgMAFQgGACgBAAQgRAAgIgJQgIgKAAgSQAAgQANgNQAMgMAPAAQAGAAAIADQAKAEAAAGQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAIgCAKIAAAOQAAAJABAFIAFANIACAEIAAABQAAADgCACQgBABAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgBAAgEgDgAgLgRQgIAJAAAKQAAAMAEAGQAEAGAJAAQAFAAAFgCIAHgGQgCgSAAgJIAAgHIACgIIgFgCIgDAAQgKAAgIAJg");
	this.shape_87.setTransform(-29.3,70.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgUAeQgKgKgBgRQAAgOAJgNQAKgPAQAAQAPAAAHAOQAGALAAAOQAAAPgIAMQgKANgOAAQgLAAgJgKgAgLgOQgFAJAAAIQAAALAGAGQAEAFAGAAQAHAAAFgGQAGgGABgKQABgbgRAAQgIAAgGAKg");
	this.shape_88.setTransform(-49.3,70.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgUAeQgKgKgBgRQAAgOAJgNQAKgPAQAAQAPAAAHAOQAGALAAAOQAAAPgIAMQgKANgOAAQgLAAgJgKgAgLgOQgFAJAAAIQAAALAGAGQAEAFAGAAQAHAAAFgGQAGgGABgKQABgbgRAAQgIAAgGAKg");
	this.shape_89.setTransform(-107,70.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgUAeQgKgKgBgRQAAgOAJgNQAKgPAQAAQAPAAAHAOQAGALAAAOQAAAPgIAMQgKANgOAAQgLAAgJgKgAgLgOQgFAJAAAIQAAALAGAGQAEAFAGAAQAHAAAFgGQAGgGABgKQABgbgRAAQgIAAgGAKg");
	this.shape_90.setTransform(-206.6,70.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgFAGQgCgDgBgDQABgCACgDQADgDACAAQADAAADADQADADgBACQABADgDADQgDADgDAAQgCAAgDgDg");
	this.shape_91.setTransform(-228.9,22.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgLA+QgCgCAAgDIAAgBQACgKAAgLIAAgUIAAgTIgMAAQgHAAAAgHQAAgHANAAIAHAAIABgMQACgQAGgIQAGgJAQAAQAKAAAAAHQAAAHgJAAQgSAAgCAZIAAAEIAQAAQALAAAAAHQAAAFgFABIgGABIgRABIgBAOIABAOIAAANQAAAOgBAIQAAAGgGAAQgDAAgCgCg");
	this.shape_92.setTransform(-48.6,-33.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgUAeQgKgKgBgRQAAgOAJgNQAKgPAQAAQAPAAAHAOQAGALAAAOQAAAPgIAMQgKANgOAAQgLAAgJgKgAgLgOQgFAJAAAIQAAALAGAGQAEAFAGAAQAHAAAFgGQAGgGABgKQABgbgRAAQgIAAgGAKg");
	this.shape_93.setTransform(-60.9,-32.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgUAeQgKgKgBgRQAAgOAJgNQAKgPAQAAQAPAAAHAOQAGALAAAOQAAAPgIAMQgKANgOAAQgLAAgJgKgAgLgOQgFAJAAAIQAAALAGAGQAEAFAGAAQAHAAAFgGQAGgGABgKQABgbgRAAQgIAAgGAKg");
	this.shape_94.setTransform(-125.2,-32.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgDArQgCgCAAgEIgCgaIgBgYQAAgIgDgEQgFACgFAGIgJAJIgDAFIgBALIgBANIABAGIAAAFQAAADgCACQgCACgDAAQgIAAAAgSIAAgNIABgMIAAgLIgBgMQAAgRAHAAQADAAADADQACACAAADIAAAFIgBAEIAAAIQAEgIAIgGQAHgHAFAAQALAAADAMQAEgGAGgCQAFgDAHAAQANAAAEANIADAVQACAKADAeQAAADgCACQgCACgDAAQgGAAgBgHIgDgWIgCgVQgBgFgCgFQgCgGgDAAQgDAAgHAEQgHAEgCADIAAANIACASIABATQAAAEgBACQgDACgDAAQgBAAgCgCg");
	this.shape_95.setTransform(-177.3,-32.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18,p:{x:-177.3,y:-32.3}},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13,p:{x:-132.8,y:-32.3}},{t:this.shape_12,p:{x:-125.2,y:-32.2}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6,p:{x:-80.4,y:-30.3}},{t:this.shape_5},{t:this.shape_4,p:{x:-60.9,y:-32.2}},{t:this.shape_3,p:{x:-48.6,y:-33.9}},{t:this.shape_2},{t:this.shape_1,p:{x:-33.1,y:-32.3}},{t:this.shape}]},58).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18,p:{x:-177.3,y:-32.3}},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13,p:{x:-132.8,y:-32.3}},{t:this.shape_12,p:{x:-125.2,y:-32.2}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6,p:{x:-80.4,y:-30.3}},{t:this.shape_5},{t:this.shape_4,p:{x:-60.9,y:-32.2}},{t:this.shape_3,p:{x:-48.6,y:-33.9}},{t:this.shape_2},{t:this.shape_1,p:{x:-33.1,y:-32.3}},{t:this.shape},{t:this.shape_33},{t:this.shape_32,p:{y:22.3}},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]},82).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_65,p:{x:-177.3,y:-32.3}},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_64},{t:this.shape_63,p:{x:-125.2,y:-32.2}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_62},{t:this.shape_5},{t:this.shape_61,p:{x:-60.9,y:-32.2}},{t:this.shape_60,p:{x:-48.6,y:-33.9}},{t:this.shape_2},{t:this.shape_59},{t:this.shape},{t:this.shape_33},{t:this.shape_58,p:{y:22.3}},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_57},{t:this.shape_32,p:{y:73.5}},{t:this.shape_56},{t:this.shape_55,p:{x:-206.6,y:70.2}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_6,p:{x:-175.5,y:72.1}},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_13,p:{x:-114.6,y:70.1}},{t:this.shape_45,p:{x:-107,y:70.2}},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_12,p:{x:-49.3,y:70.2}},{t:this.shape_3,p:{x:-41.5,y:68.5}},{t:this.shape_38,p:{x:-29.3,y:70.2}},{t:this.shape_1,p:{x:-17,y:70.1}},{t:this.shape_4,p:{x:-9.4,y:70.2}},{t:this.shape_37,p:{x:0.6,y:70.1}},{t:this.shape_18,p:{x:12.3,y:70.1}},{t:this.shape_36,p:{x:21.8,y:70.2}},{t:this.shape_35},{t:this.shape_34}]},60).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_95},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_64},{t:this.shape_94},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_62},{t:this.shape_5},{t:this.shape_93},{t:this.shape_92},{t:this.shape_2},{t:this.shape_59},{t:this.shape},{t:this.shape_33},{t:this.shape_91},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_57},{t:this.shape_58,p:{y:73.5}},{t:this.shape_56},{t:this.shape_90},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_6,p:{x:-175.5,y:72.1}},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_13,p:{x:-114.6,y:70.1}},{t:this.shape_89},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_88},{t:this.shape_60,p:{x:-41.5,y:68.5}},{t:this.shape_87},{t:this.shape_1,p:{x:-17,y:70.1}},{t:this.shape_63,p:{x:-9.4,y:70.2}},{t:this.shape_86},{t:this.shape_65,p:{x:12.3,y:70.1}},{t:this.shape_85},{t:this.shape_35},{t:this.shape_34},{t:this.shape_84},{t:this.shape_32,p:{y:124.7}},{t:this.shape_3,p:{x:-214.4,y:119.7}},{t:this.shape_61,p:{x:-206.7,y:121.4}},{t:this.shape_83},{t:this.shape_37,p:{x:-189.5,y:121.3}},{t:this.shape_38,p:{x:-179.9,y:121.4}},{t:this.shape_82},{t:this.shape_18,p:{x:-161.5,y:121.3}},{t:this.shape_55,p:{x:-152,y:121.4}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_45,p:{x:-132.9,y:121.4}},{t:this.shape_79},{t:this.shape_78},{t:this.shape_36,p:{x:-105.3,y:121.4}},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_12,p:{x:-53.8,y:121.4}},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_4,p:{x:-22.7,y:121.4}},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66}]},106).wait(101));

	// Layer 4
	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#009900").s().p("AAIAWQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIABgbIABgIQACgEAEAAQABAAAAAAQABAAAAAAQABAAAAABQABAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIAAAEIAAADIgBAaQAAAHgHAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBgBAAAAgAgTALIAAgNIAAgOQAAgBAAAAQAAgBAAgBQABAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAAAAABgBQABAAAAAAQABAAABAAQABABAAAAQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAQABABAAABQAAAAAAABIAAAOIAAAMIAAAEIAAADQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgCABgEAAQgGAAAAgMg");
	this.shape_96.setTransform(64.3,-12.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#009900").s().p("AgFAGQgCgDgBgDQABgCACgDQADgDACAAQADAAADADQADADgBACQABADgDADQgDADgDAAQgCAAgDgDg");
	this.shape_97.setTransform(59.5,-3.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#009900").s().p("AgTAoQgLgEAAgIQAAgCACgCQACgCADAAQACgBAEAEQABACAHAAIAIABQAEAAAFgBQAGgCABgEQAAgKgOgEIgGgCQgKgCgEgDQgFgCgBgIQAAgQAPgGIAMgFIAOgFIAHgBQACAAACADQACABABAEIABAGIABAGQAAADgCACQgDACgDAAQgEAAgCgCIgCgIIgQAFQgKAFAAAGIAEACQAPADAIAFQAMAGAAAPQAAALgKAHQgJAEgLAAQgJAAgJgDg");
	this.shape_98.setTransform(53.8,-7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#009900").s().p("AgGA0QgCgBAAgEIAAgNIAAgNIABgSIAAgPQAAgDACgCQACgCADAAQACAAACACQACACAAADIgBAPIgBASIABANIAAANQAAAEgCABQgCADgBAAQgEAAgCgDgAgDgnQgDgDAAgDQAAgEADgCQACgDACAAQADAAADADQACACAAAEQAAADgCADQgDACgDAAQgCAAgCgCg");
	this.shape_99.setTransform(48.3,-8.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#009900").s().p("AASAjIgDgPIgBgRIABgFIAAgHQAAgPgGAAQgIgBgGAKQgGAJgEALIgBAIIAAAHIAAAGIABAHQAAAEgCACQgCABgEAAQgDAAgCgBQgCgCAAgEIAAgHIgBgGIABgUIABgUIAAgHIAAgHQAAgDACgCQACgCADAAQAHAAABAKIAAAIQAMgQALAAQAMAAAEAKQAEAHAAANIAAAIIAAAFIABAQIACAPQAAADgCACQgCACgDAAQgHAAAAgHg");
	this.shape_100.setTransform(42.3,-6.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#009900").s().p("AASAjIgDgPIgBgRIABgFIAAgHQAAgPgGAAQgIgBgGAKQgGAJgEALIgBAIIAAAHIAAAGIABAHQAAAEgCACQgCABgEAAQgDAAgCgBQgCgCAAgEIAAgHIgBgGIABgUIABgUIAAgHIAAgHQAAgDACgCQACgCADAAQAHAAABAKIAAAIQAMgQALAAQAMAAAEAKQAEAHAAANIAAAIIAAAFIABAQIACAPQAAADgCACQgCACgDAAQgHAAAAgHg");
	this.shape_101.setTransform(34.5,-6.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#009900").s().p("AgYAfQgLgJAAgRQAAgQAJgNQAKgOAQgBQALAAAIAFQAJAEAAALQAAAHgIAHIgQAGIgaANQAFAGAFADQAHADAGAAQAFAAAHgCQAJgCACgEQACgEADAAQADAAACACQAAABABAAQAAABAAAAQABABAAAAQAAABAAABQAAAHgOAGQgKAGgLgBQgPAAgKgIgAgOgTQgGAIgDAMIAXgKQALgFAGgGQgHgFgKAAQgIAAgGAGg");
	this.shape_102.setTransform(26.5,-6.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#009900").s().p("AgDAzQgDgCAAgCIABgJIAAgIIgCgpIgQgBQgGgBAAgHQAAgDABgCQACgCAEAAIAPACIAAgKIgBgJQAAgEACgCQADgCADAAQAEAAABALIAAAHIAAADIAAAGIALgCIAKABQAEABAAAFQAAAEgCACQgCACgDAAIgEAAIgDAAIgKABIABApIAAADIAAAEQABAQgIAAQgBAAgCgCg");
	this.shape_103.setTransform(18.7,-7.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#009900").s().p("AgSA5QgCgCAAgDQAAgIAPgjIgagwIgDgGQgCgDAAgCQAAgDACgDQADgCACAAQAEAAACADQAMARAMAgIALgZIALgXQADgEAEAAQADAAACACQACACAAADIgBAEIgZA1IgMAhIgFAOQgCAGgFAAQgDAAgCgCg");
	this.shape_104.setTransform(6.5,-4.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#009900").s().p("AAXAlIgFgFIgMAFQgGACgBAAQgRAAgIgJQgIgKAAgSQAAgQANgNQAMgMAPAAQAGAAAIADQAKAEAAAGQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAIgCAKIAAAOQAAAJABAFIAFANIACAEIAAABQAAADgCACQgBABAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgBAAgEgDgAgLgRQgIAJAAAKQAAAMAEAGQAEAGAJAAQAFAAAFgCIAHgGQgCgSAAgJIAAgHIACgIIgFgCIgDAAQgKAAgIAJg");
	this.shape_105.setTransform(-1,-6.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#009900").s().p("AgHA0IABgaIABgaIAAgZIABgbQgBgHAGAAQAHAAAAAHIgBAbIAAAZIgBAkIgBARQAAAHgFAAQgHAAAAgIg");
	this.shape_106.setTransform(-6.9,-8.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#009900").s().p("AgbA7QgCgCAAgEIAAgcIAAgcIgBgdIgBgPQAAgFACgDQACgFAEAAQADAAACACQACACAAADIAAACIgBAFQAHgFAFgCQAFgCAFAAQAPAAAHANQAFALAAARQAAAOgIAKQgJALgPAAQgGAAgJgDIAAAjQAAAEgCACQgCACgDAAQgDAAgCgCgAgGglIgJAIIABAgQAIAEAGAAQAJAAAFgHQAEgFAAgJQAAgNgDgHQgEgHgGAAQgFAAgGAEg");
	this.shape_107.setTransform(-12.9,-4.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#009900").s().p("AgZAyQgKgLAAgQQAAgUAKgKQALgLAOgBQAJABAFACIAHAFIACgpQAAgHAHABQAGAAAAAGIgDAtIAAAUQAAAYABANIAAABQAAABAAABQAAABAAAAQAAABgBAAQAAABAAAAQgBAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgEAAgDgHQgFAEgGADQgFABgFAAQgOABgLgKgAgQAAQgGAIAAAPQAAAJAGAHQAHAGAJAAQAEAAAFgCIAIgGIACgCIAAgNIAAgIIAAgJQgCgFgFgCQgFgDgHAAQgKAAgGAFg");
	this.shape_108.setTransform(-25.9,-8.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#009900").s().p("AgHA0IABgaIABgaIAAgZIAAgbQAAgHAGAAQAHAAAAAHIgBAbIAAAZIgBAkIAAARQgBAHgFAAQgHAAAAgIg");
	this.shape_109.setTransform(-32.3,-8.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#009900").s().p("AAQAiQgJAFgKAAQgKAAgGgEQgHgFgBgJQgDgTAAgNQAAgKACgNQABgHAGAAQADABACACQACACAAACIgBALIgBAMIABASIACAPIAFACIAFABQAIgBAKgDIAAgOIAAgNQAAgQACgMQAAgGAHAAQADAAACACQACACAAADIgBAbIAAAOIAAARIAAAEIAAAFQAAADgCADQgCACgDAAQgGAAgBgIg");
	this.shape_110.setTransform(-38.2,-6.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#009900").s().p("AgUAeQgKgKgBgRQAAgOAJgNQAKgPAQAAQAPAAAHAOQAGALAAAOQAAAPgIAMQgKANgOAAQgLAAgJgKgAgLgOQgFAJAAAIQAAALAGAGQAEAFAGAAQAHAAAFgGQAGgGABgKQABgbgRAAQgIAAgGAKg");
	this.shape_111.setTransform(-46.3,-6.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#009900").s().p("AgUAgQgKgKAAgPQAAgNAKgQQALgSAMAAQAHAAAJAEQALAEAAAGQAAADgCACQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIgDgBIgDgCQgFgEgJAAQgGAAgHANQgHANAAAHQAAAJAHAGQAGAFAIAAQAEAAAFgCIAIgFIAEgBQAAAAABAAQABAAAAABQABAAAAAAQABABAAAAQACACAAADQAAAFgLAFQgKAFgGAAQgNAAgLgJg");
	this.shape_112.setTransform(-53.9,-6.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#009900").s().p("AgYAfQgLgJAAgRQAAgQAJgNQAKgOAQgBQALAAAIAFQAJAEAAALQAAAHgIAHIgQAGIgZANQAEAGAFADQAHADAGAAQAFAAAHgCQAIgCADgEQADgEACAAQADAAACACQABABAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAHgOAGQgLAGgKgBQgOAAgLgIgAgOgTQgGAIgDAMIAWgKQAMgFAFgGQgFgFgLAAQgIAAgGAGg");
	this.shape_113.setTransform(-66.2,-6.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#009900").s().p("AAEAVIgDgRIgBgPIgFAMIgLAfIgDADQgDAFgEAAQgFAAgGgWIgFgcIgCgLIgBgMQAAgDADgBQACgCACAAQAGAAABAFIACALIABALIAFAeQAHgUAJgdQACgIAFAAQAFAAACAJIAFAaIAGAbIAEgUIAKgmQACgFAFABQADAAACACQACABAAADIAAAEIgQA0QgBAHgGAGQgCAFgFAAQgHgBgFgTg");
	this.shape_114.setTransform(-75.5,-6.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#009900").s().p("AgIAPQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAIAEgLIAFgNQABgDADAAQABAAAAAAQABAAABAAQAAABABAAQAAAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAACgKAVQAAAEgDAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAgBgBg");
	this.shape_115.setTransform(-86.8,-2.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#009900").s().p("AgYAfQgLgJAAgRQAAgQAJgNQAKgOAQgBQALAAAIAFQAJAEAAALQAAAHgIAHIgPAGIgaANQADAGAHADQAGADAGAAQAFAAAHgCQAIgCADgEQADgEACAAQADAAACACQABABAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAHgNAGQgLAGgLgBQgOAAgLgIgAgOgTQgGAIgDAMIAWgKQAMgFAFgGQgFgFgLAAQgIAAgGAGg");
	this.shape_116.setTransform(-93.3,-6.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#009900").s().p("AgbAhIAAgyIAAgHIAAgHQABgIAGABQAHAAAAAMQANgNAQAAQAHgBACAFQADAEAAAJIAAAFQAAAKgHgBQgGABgBgIIAAgFIAAgGQgLABgFAGQgHAEgEAKIAAAmQAAAIgHAAQgHAAAAgIg");
	this.shape_117.setTransform(-100.9,-6.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#009900").s().p("AgYAfQgLgJAAgRQAAgQAJgNQAKgOAQgBQALAAAIAFQAJAEAAALQAAAHgIAHIgPAGIgaANQADAGAHADQAGADAGAAQAFAAAHgCQAJgCACgEQADgEACAAQADAAACACQABABAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAHgNAGQgLAGgLgBQgOAAgLgIgAgOgTQgGAIgDAMIAWgKQAMgFAFgGQgFgFgLAAQgIAAgGAGg");
	this.shape_118.setTransform(-108.7,-6.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#009900").s().p("AATA3IgDgRIgBgRIAAgHIAAgFQAAgMgGAAQgJAAgGAHIgKAQQAAAcgDAFQgCAEgEABQgDAAgCgCQgDgDAAgDIABgCIABgMIAAgKIAAg0IABgMIgBgIIgBgGQAAgDADgCQACgCADAAQAGgBABAHIABANIgBAQIAAAQIAAAGQAGgIAHgDQAFgFAIAAQAMABAEAHQADAGABALIAAAOIACAPIACAPIABACQAAAEgCACQgDABgDAAQgFAAgCgFg");
	this.shape_119.setTransform(-117.2,-8.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#009900").s().p("AgYAfQgLgJAAgRQAAgQAJgNQAKgOAQgBQALAAAIAFQAJAEAAALQAAAHgIAHIgPAGIgbANQAFAGAGADQAGADAGAAQAFAAAHgCQAJgCACgEQACgEADAAQADAAACACQAAABABAAQAAABAAAAQABABAAAAQAAABAAABQAAAHgNAGQgMAGgKgBQgPAAgKgIgAgOgTQgGAIgDAMIAXgKQALgFAGgGQgHgFgKAAQgIAAgGAGg");
	this.shape_120.setTransform(-130,-6.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#009900").s().p("AgbAhIAAgyIABgHIAAgHQAAgIAGABQAHAAAAAMQANgNARAAQAFgBAEAFQACAEAAAJIAAAFQgBAKgGgBQgHABABgIIAAgFIgBgGQgMABgEAGQgHAEgFAKIABAmQAAAIgHAAQgHAAAAgIg");
	this.shape_121.setTransform(-137.7,-6.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#009900").s().p("AgYAfQgLgJAAgRQAAgQAJgNQAKgOAQgBQALAAAIAFQAJAEAAALQAAAHgIAHIgQAGIgaANQAFAGAFADQAHADAGAAQAFAAAHgCQAJgCACgEQACgEADAAQADAAACACQAAABABAAQAAABAAAAQABABAAAAQAAABAAABQAAAHgOAGQgKAGgLgBQgPAAgKgIgAgOgTQgGAIgDAMIAXgKQALgFAGgGQgHgFgKAAQgIAAgGAGg");
	this.shape_122.setTransform(-145.4,-6.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#009900").s().p("AAEAVIgDgRIgBgPIgFAMIgMAfIgCADQgCAFgFAAQgFAAgGgWIgFgcIgCgLIgBgMQAAgDACgBQACgCAEAAQAFAAABAFIACALIABALIAEAeQAJgUAIgdQADgIAEAAQAFAAADAJIAEAaIAFAbIAGgUIAJgmQABgFAFABQAEAAACACQACABAAADIgBAEIgPA0QgCAHgEAGQgDAFgEAAQgJgBgEgTg");
	this.shape_123.setTransform(-154.8,-6.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#009900").s().p("AgYAfQgLgJAAgRQAAgQAJgNQAKgOAQgBQALAAAIAFQAJAEAAALQAAAHgIAHIgQAGIgaANQAFAGAFADQAHADAGAAQAFAAAHgCQAJgCACgEQACgEADAAQADAAACACQAAABABAAQAAABAAAAQABABAAAAQAAABAAABQAAAHgOAGQgKAGgLgBQgPAAgKgIgAgOgTQgGAIgDAMIAXgKQALgFAGgGQgHgFgKAAQgIAAgGAGg");
	this.shape_124.setTransform(-168.4,-6.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#009900").s().p("AATA3IgDgRIgBgRIAAgHIAAgFQAAgMgGAAQgJAAgGAHIgKAQQAAAcgDAFQgCAEgEABQgDAAgCgCQgDgDAAgDIABgCIABgMIAAgKIAAg0IABgMIgBgIIgBgGQAAgDADgCQACgCADAAQAGgBABAHIABANIgBAQIAAAQIAAAGQAGgIAHgDQAFgFAIAAQAMABAEAHQADAGABALIAAAOIACAPIACAPIABACQAAAEgCACQgDABgDAAQgFAAgCgFg");
	this.shape_125.setTransform(-176.9,-8.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#009900").s().p("AgLA+QgCgCAAgDIAAgBQACgKAAgLIAAgUIAAgTIgMAAQgHAAAAgHQAAgHANAAIAHAAIABgMQACgQAGgIQAGgJAQAAQAKAAAAAHQAAAHgJAAQgSAAgCAZIAAAEIAQAAQALAAAAAHQAAAFgFABIgGABIgRABIgBAOIABAOIAAANQAAAOgBAIQAAAGgGAAQgDAAgCgCg");
	this.shape_126.setTransform(-189.7,-8.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#009900").s().p("AgfA2QgCgCAAgEQAAgDACgCQADgCADgBIAPgBIABgNIgBgNIAAgMQAAgPACgaIgKABIgJAAQgDAAgCgCQgCgCAAgEQAAgGAGgBIAXgBQAMABAWADQAHAAAAAIQAAADgDACQgCABgDAAIgMAAIgMgCIgBAnIAAAMIAAAOIAAAMIAXAAQADAAACABQACADAAADQAAADgCACQgCACgDABIgNAAIgLAAIgNACIgOABQgDAAgDgCg");
	this.shape_127.setTransform(-197.5,-8.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#009900").s().p("AAIAWQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAgBIABgbIABgIQABgEAFAAQABAAAAAAQABAAAAAAQABAAAAABQABAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIAAAEIAAADIgBAaQAAAHgHAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBgBAAAAgAgUALIAAgNIABgOQAAgBAAAAQAAgBABgBQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAAAAABgBQABAAAAAAQABAAABAAQABABAAAAQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAQABABAAABQAAAAAAABIAAAOIAAAMIAAAEIABADQAAABgBAAQAAABAAABQAAAAgBABQAAAAAAABQgCABgEAAQgGAAgBgMg");
	this.shape_128.setTransform(-205,-12.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#009900").s().p("AAIAWQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBIABgbIABgIQABgEAFAAQABAAAAAAQABAAAAAAQABAAAAABQABAAABABQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABIgBAEIAAADIgBAaQAAAHgGAAQgBAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAgAgUALIAAgNIABgOQAAgBAAAAQAAgBABgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAABAAQAAAAABgBQABAAABAAQAAAAABAAQABABAAAAQABAAAAAAQABABAAAAQABABAAAAQAAABAAAAQABABAAABQAAAAAAABIAAAOIAAAMIAAAEIABADQAAABgBAAQAAABAAABQAAAAgBABQAAAAgBABQgCABgCAAQgIAAAAgMg");
	this.shape_129.setTransform(-55.4,38.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#009900").s().p("AgFAGQgCgDAAgDQAAgCACgDQADgDACAAQAEAAACADQADADAAACQAAADgDADQgCADgEAAQgCAAgDgDg");
	this.shape_130.setTransform(-60.1,47.9);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#009900").s().p("AgYAfQgLgJAAgRQAAgQAJgNQAKgOAQgBQALAAAIAEQAJAGAAAKQAAAHgIAHIgQAGIgaANQAEAGAGADQAHADAGAAQAFAAAHgCQAIgCADgEQACgEADAAQADAAACACQAAABABAAQAAABAAAAQABABAAAAQAAABAAABQAAAHgOAGQgLAGgKAAQgPAAgKgJgAgOgTQgGAIgDAMIAWgKQAMgGAGgFQgHgFgKgBQgIABgGAGg");
	this.shape_131.setTransform(-66,44.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#009900").s().p("AgbAhIAAgxIABgIIAAgHQgBgIAHABQAHAAAAAMQANgOARAAQAFAAAEAFQACAEAAAJIAAAGQgBAJgGgBQgHABAAgIIAAgFIAAgGQgLACgGAFQgGAEgFAKIABAmQAAAIgIAAQgGAAAAgIg");
	this.shape_132.setTransform(-73.6,44.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#009900").s().p("AgYAfQgLgJAAgRQAAgQAJgNQAKgOAQgBQALAAAIAEQAJAGAAAKQAAAHgIAHIgQAGIgaANQAFAGAFADQAHADAGAAQAFAAAHgCQAIgCADgEQACgEADAAQADAAACACQABABAAAAQAAABAAAAQABABAAAAQAAABAAABQAAAHgOAGQgLAGgKAAQgOAAgLgJgAgOgTQgGAIgDAMIAWgKQAMgGAFgFQgFgFgLgBQgIABgGAGg");
	this.shape_133.setTransform(-81.4,44.5);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#009900").s().p("AATA3IgDgRIgBgRIAAgGIAAgGQAAgMgGAAQgJAAgGAHIgKAQQAAAcgDAFQgCAFgEAAQgDAAgCgDQgDgCAAgCIABgDIABgMIAAgKIAAg0IABgMIgBgIIgBgGQAAgDADgCQACgCADgBQAGAAABAHIABANIgBAQIAAAQIAAAHQAGgJAHgDQAFgFAIAAQAMAAAEAIQADAGABALIAAAOIACAPIACAQIABABQAAADgCADQgDABgDAAQgFAAgCgFg");
	this.shape_134.setTransform(-89.9,42.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#009900").s().p("AgYAfQgLgJAAgRQAAgQAJgNQAKgOAQgBQALAAAIAEQAJAGAAAKQAAAHgIAHIgPAGIgaANQADAGAHADQAGADAGAAQAFAAAHgCQAIgCADgEQADgEACAAQADAAACACQABABAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAHgNAGQgLAGgLAAQgOAAgLgJgAgOgTQgGAIgDAMIAWgKQAMgGAFgFQgFgFgLgBQgIABgGAGg");
	this.shape_135.setTransform(-102.7,44.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#009900").s().p("AgbAhIAAgxIAAgIIAAgHQABgIAGABQAHAAAAAMQANgOAQAAQAHAAACAFQADAEAAAJIAAAGQAAAJgHgBQgGABgBgIIAAgFIAAgGQgLACgFAFQgHAEgEAKIAAAmQAAAIgHAAQgHAAAAgIg");
	this.shape_136.setTransform(-110.4,44.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#009900").s().p("AgYAfQgLgJAAgRQAAgQAJgNQAKgOAQgBQALAAAIAEQAJAGAAAKQAAAHgIAHIgPAGIgaANQADAGAHADQAGADAGAAQAFAAAHgCQAJgCACgEQADgEACAAQADAAACACQABABAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAHgNAGQgLAGgLAAQgOAAgLgJgAgOgTQgGAIgDAMIAWgKQAMgGAFgFQgFgFgLgBQgIABgGAGg");
	this.shape_137.setTransform(-118.1,44.5);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#009900").s().p("AAEAUIgDgQIgBgPIgFAMIgMAfIgCADQgDAFgEAAQgGAAgFgWIgFgcIgCgLIgBgMQAAgCACgCQADgCACAAQAGAAACAFIABALIABALIAFAeQAHgUAJgeQADgHAEAAQAGAAABAJIAFAaIAFAbIAGgUIAJgmQACgFAFABQADAAACACQACACAAACIgBAEIgOA0QgDAHgFAGQgCAFgFAAQgHAAgFgVg");
	this.shape_138.setTransform(-127.5,44.7);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#009900").s().p("AgYAfQgLgJAAgRQAAgQAJgNQAKgOAQgBQALAAAIAEQAJAGAAAKQAAAHgIAHIgPAGIgaANQADAGAHADQAGADAGAAQAFAAAHgCQAJgCACgEQADgEACAAQADAAACACQABABAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAHgNAGQgLAGgLAAQgOAAgLgJgAgOgTQgGAIgDAMIAWgKQAMgGAFgFQgFgFgLgBQgIABgGAGg");
	this.shape_139.setTransform(-141.1,44.5);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#009900").s().p("AATA3IgDgRIgBgRIAAgGIAAgGQAAgMgGAAQgJAAgGAHIgKAQQAAAcgDAFQgCAFgEAAQgDAAgCgDQgDgCAAgCIABgDIABgMIAAgKIAAg0IABgMIgBgIIgBgGQAAgDADgCQACgCADgBQAGAAABAHIABANIgBAQIAAAQIAAAHQAGgJAHgDQAFgFAIAAQAMAAAEAIQADAGABALIAAAOIACAPIACAQIABABQAAADgCADQgDABgDAAQgFAAgCgFg");
	this.shape_140.setTransform(-149.6,42.5);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#009900").s().p("AATA3IgDgRIgBgRIAAgGIAAgGQAAgMgGAAQgJAAgGAHIgKAQQAAAcgDAFQgCAFgEAAQgDAAgCgDQgDgCAAgCIABgDIABgMIAAgKIAAg0IABgMIgBgIIgBgGQAAgDADgCQACgCADgBQAGAAABAHIABANIgBAQIAAAQIAAAHQAGgJAHgDQAFgFAIAAQAMAAAEAIQADAGABALIAAAOIACAPIACAQIABABQAAADgCADQgDABgDAAQgFAAgCgFg");
	this.shape_141.setTransform(-162.7,42.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#009900").s().p("AgTAoQgMgEAAgIQAAgCADgCQACgCADAAQACAAAEADQACACAGAAIAIABQAEAAAFgBQAHgCAAgFQAAgJgOgEIgGgCQgKgCgDgDQgHgCAAgIQAAgQAPgGIAMgEIAOgGIAHgBQADAAABACQACADAAADIABAGIACAGQgBADgCACQgCACgDAAQgEABgCgDIgBgIIgRAFQgKAFAAAHIAEABQAPADAIAFQAMAGAAAOQAAAMgKAGQgJAGgLgBQgJAAgJgDg");
	this.shape_142.setTransform(-171,44.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#009900").s().p("AgGA0QgCgCAAgDIAAgNIAAgNIABgRIAAgQQAAgDACgCQACgCADAAQACAAACACQACACAAADIgBAQIgBARIABANIAAANQAAADgCACQgCACgBABQgEgBgCgCgAgDgnQgDgDAAgDQAAgDADgDQACgDACAAQADAAADADQACADAAADQAAADgCADQgDADgDgBQgCABgCgDg");
	this.shape_143.setTransform(-176.4,42.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#009900").s().p("AAEAUIgDgQIgBgPIgFAMIgMAfIgCADQgDAFgEAAQgGAAgFgWIgFgcIgCgLIgBgMQAAgCACgCQADgCACAAQAGAAACAFIABALIABALIAFAeQAHgUAJgeQADgHAEAAQAGAAABAJIAFAaIAFAbIAGgUIAJgmQACgFAFABQADAAACACQACACAAACIgBAEIgOA0QgDAHgFAGQgCAFgFAAQgHAAgFgVg");
	this.shape_144.setTransform(-183.7,44.7);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#009900").s().p("AgfA2QgCgDAAgDQAAgDACgCQADgCADgBIAPgBIABgOIgBgMIAAgMQAAgPACgZIgKAAIgJAAQgDAAgCgCQgCgCAAgEQAAgGAGgBIAXgBQAMAAAWAEQAHAAAAAIQAAADgDACQgCABgDAAIgMAAIgMgCIgBAnIAAAMIAAANIAAANIAXAAQADAAACABQACADAAADQAAADgCACQgCACgDAAIgNABIgLAAIgNACIgOABQgDAAgDgCg");
	this.shape_145.setTransform(-197.5,42.8);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#009900").s().p("AAIAWQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAgBIABgbIABgIQABgEAFAAQABAAAAAAQABAAAAAAQABAAAAABQABAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIAAAEIAAADIgBAaQAAAHgHAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBgBAAAAgAgUALIAAgNIABgOQAAgBAAAAQAAgBABgBQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAAAAABgBQABAAAAAAQABAAABAAQABABAAAAQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAQABABAAABQAAAAAAABIAAAOIAAAMIAAAEIABADQAAABgBAAQAAABAAABQAAAAgBABQAAAAAAABQgCABgEAAQgGAAgBgMg");
	this.shape_146.setTransform(-205,38.9);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#009900").s().p("AAIAWQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIABgbIABgIQABgEAFAAQABAAAAAAQABAAAAAAQABAAAAABQABAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIAAAEIAAADIgBAaQAAAHgHAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBgBAAAAgAgTALIAAgNIAAgOQAAgBAAAAQAAgBAAgBQABAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAAgBABAAQABAAAAAAQABAAABAAQABAAAAABQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAQABABAAABQAAAAAAABIAAAOIAAAMIAAAEIAAADQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgCABgEAAQgGAAAAgMg");
	this.shape_147.setTransform(146.6,90.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#009900").s().p("AgDAzQgDgBAAgDIABgJIAAgIIgCgpIgQgBQgGgBAAgHQAAgDABgCQACgCAEAAIAPABIAAgKIgBgJQAAgDACgCQADgCADAAQAEAAABALIAAAGIAAAFIAAAEIALgBIAKABQAEACAAAEQAAAEgCACQgCACgDAAIgEAAIgDAAIgKABIABApIAAADIAAAEQABAQgIAAQgBAAgCgCg");
	this.shape_148.setTransform(136.4,94.5);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#009900").s().p("AAQAjQgJAEgKAAQgKAAgGgEQgHgFgBgJQgDgTAAgOQAAgJACgNQABgGAGgBQADAAACACQACADAAACIgBALIgBALIABAUIACANIAFADIAFABQAIAAAKgEIAAgOIAAgNQAAgQACgMQAAgGAHAAQADAAACACQACACAAADIgBAbIAAAPIAAAQIAAAEIAAAFQAAADgCACQgCACgDABQgGgBgBgGg");
	this.shape_149.setTransform(129,95.8);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#009900").s().p("AATA3IgDgRIgBgSIAAgFIAAgGQAAgMgGAAQgJAAgGAHIgKAQQAAAcgDAFQgCAFgEAAQgDgBgCgCQgDgCAAgCIABgEIABgLIAAgKIAAg0IABgMIgBgHIgBgHQAAgEADgBQACgDADAAQAGAAABAHIABANIgBAQIAAAQIAAAHQAGgIAHgFQAFgEAIAAQAMAAAEAJQADAFABALIAAAOIACAPIACAQIABABQAAAEgCACQgDACgDAAQgFgBgCgFg");
	this.shape_150.setTransform(120.9,93.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#009900").s().p("AATA3IgDgRIgBgSIAAgFIAAgGQAAgMgGAAQgJAAgGAHIgKAQQAAAcgDAFQgCAFgEAAQgDgBgCgCQgDgCAAgCIABgEIABgLIAAgKIAAg0IABgMIgBgHIgBgHQAAgEADgBQACgDADAAQAGAAABAHIABANIgBAQIAAAQIAAAHQAGgIAHgFQAFgEAIAAQAMAAAEAJQADAFABALIAAAOIACAPIACAQIABABQAAAEgCACQgDACgDAAQgFgBgCgFg");
	this.shape_151.setTransform(107.7,93.7);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#009900").s().p("AgUAgQgKgKAAgPQAAgNAKgQQALgSAMAAQAHAAAJAEQALAEAAAGQAAADgCACQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIgDgBIgDgCQgFgEgJAAQgGAAgHANQgHANAAAHQAAAJAHAGQAGAFAIAAQAEAAAFgCIAIgFIAEgBQAAAAABAAQABAAAAABQABAAAAAAQABABAAAAQACACAAADQAAAFgLAFQgKAFgGAAQgNAAgLgJg");
	this.shape_152.setTransform(99.5,95.7);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#009900").s().p("AAXAlIgFgFIgMAFQgGACgBAAQgRAAgIgJQgIgKAAgSQAAgQANgNQAMgMAPAAQAGAAAIADQAKAEAAAGQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAIgCAKIAAAOQAAAJABAFIAFANIACAEIAAABQAAADgCACQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQgBAAgEgDgAgLgRQgIAJAAAKQAAAMAEAGQAEAGAJAAQAFAAAFgCIAHgGQgCgSAAgJIAAgHIACgIIgFgCIgDAAQgKAAgIAJg");
	this.shape_153.setTransform(91.7,95.8);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#009900").s().p("AgYAfQgLgJAAgRQAAgQAJgOQAKgOAQABQALAAAIADQAJAGAAAKQAAAHgIAHIgQAFIgaAOQAFAGAFADQAHADAGAAQAFAAAHgCQAIgCADgEQACgEADAAQADAAACACQAAABABAAQAAABAAAAQABABAAAAQAAABAAABQAAAHgOAGQgKAGgLAAQgPAAgKgJgAgOgTQgGAIgDALIAXgJQALgGAGgFQgHgFgKgBQgIABgGAGg");
	this.shape_154.setTransform(84,95.7);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#009900").s().p("AgVA2QgDAEgDAAQgCAAgCgCQgCgCgBgDIABgGIAAgFIgBgXIAAgWIAAgUIAAgUQAAgFACgDQADgFAEAAQAFAAAAAHIAAADIAAADIAAAQIgBASQAHgEAFgCQAGgCADAAQAQAAAJAMQAKAJAAARQAAARgLALQgLAMgOAAQgLAAgJgFgAgKgCIgKAFIgBANIAAALIABAMIAJAFIAKABQAJAAAHgIQAGgHABgLQgBgLgFgHQgGgGgKAAQgEAAgGADg");
	this.shape_155.setTransform(75.5,93.7);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#009900").s().p("AAXAlIgFgFIgMAFQgGACgBAAQgRAAgIgJQgIgKAAgSQAAgQANgNQAMgMAPAAQAGAAAIADQAKAEAAAGQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAIgCAKIAAAOQAAAJABAFIAFANIACAEIAAABQAAADgCACQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQgBAAgEgDgAgLgRQgIAJAAAKQAAAMAEAGQAEAGAJAAQAFAAAFgCIAHgGQgCgSAAgJIAAgHIACgIIgFgCIgDAAQgKAAgIAJg");
	this.shape_156.setTransform(62.5,95.8);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#009900").s().p("AgDAzQgDgBAAgDIABgJIAAgIIgCgpIgQgBQgGgBAAgHQAAgDABgCQACgCAEAAIAPABIAAgKIgBgJQAAgDACgCQADgCADAAQAEAAABALIAAAGIAAAFIAAAEIALgBIAKABQAEACAAAEQAAAEgCACQgCACgDAAIgEAAIgDAAIgKABIABApIAAADIAAAEQABAQgIAAQgBAAgCgCg");
	this.shape_157.setTransform(50.6,94.5);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#009900").s().p("AgUAgQgKgKAAgPQAAgNAKgQQALgSAMAAQAHAAAJAEQALAEAAAGQAAADgCACQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIgDgBIgDgCQgFgEgJAAQgGAAgHANQgHANAAAHQAAAJAHAGQAGAFAIAAQAEAAAFgCIAIgFIAEgBQAAAAABAAQABAAAAABQABAAAAAAQABABAAAAQACACAAADQAAAFgLAFQgKAFgGAAQgNAAgLgJg");
	this.shape_158.setTransform(43.3,95.7);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#009900").s().p("AgYAfQgLgJAAgRQAAgQAJgOQAKgOAQABQALAAAIADQAJAGAAAKQAAAHgIAHIgQAFIgaAOQAFAGAFADQAHADAGAAQAFAAAHgCQAJgCACgEQACgEADAAQADAAACACQAAABABAAQAAABAAAAQABABAAAAQAAABAAABQAAAHgOAGQgKAGgLAAQgPAAgKgJgAgOgTQgGAIgDALIAXgJQALgGAGgFQgHgFgKgBQgIABgGAGg");
	this.shape_159.setTransform(35.5,95.7);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#009900").s().p("AgbAhIAAgxIABgIIAAgHQAAgIAGAAQAHAAAAANQANgOARAAQAGAAADAFQACAEAAAJIAAAGQAAAJgHAAQgHAAABgIIAAgFIgBgGQgLABgGAGQgGAEgFAKIABAmQAAAIgIgBQgGABAAgIg");
	this.shape_160.setTransform(27.8,95.8);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#009900").s().p("AgYAfQgLgJAAgRQAAgQAJgOQAKgOAQABQALAAAIADQAJAGAAAKQAAAHgIAHIgQAFIgaAOQAFAGAFADQAHADAGAAQAFAAAHgCQAIgCADgEQACgEADAAQADAAACACQAAABABAAQAAABAAAAQABABAAAAQAAABAAABQAAAHgOAGQgKAGgLAAQgPAAgKgJgAgOgTQgGAIgDALIAXgJQALgGAGgFQgHgFgKgBQgIABgGAGg");
	this.shape_161.setTransform(20.1,95.7);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#009900").s().p("AgYAfQgLgJAAgRQAAgQAJgOQAKgOAQABQALAAAIADQAJAGAAAKQAAAHgIAHIgQAFIgaAOQAEAGAGADQAHADAGAAQAFAAAHgCQAIgCADgEQACgEADAAQADAAACACQAAABABAAQAAABAAAAQABABAAAAQAAABAAABQAAAHgOAGQgLAGgKAAQgPAAgKgJgAgOgTQgGAIgDALIAWgJQAMgGAGgFQgHgFgKgBQgIABgGAGg");
	this.shape_162.setTransform(7.4,95.7);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#009900").s().p("AAEAUIgDgRIgBgOIgFAMIgLAfIgDADQgCAFgFAAQgGAAgFgWIgFgcIgCgMIgBgLQAAgCADgCQABgCADgBQAGABABAFIACALIABALIAEAeQAJgUAIgeQADgHAEgBQAGABACAIIAEAbIAGAbIAEgUIAKgmQACgFAEAAQADABADACQACACAAACIAAAEIgQA0QgBAHgGAGQgCAEgEABQgJAAgEgVg");
	this.shape_163.setTransform(-2,95.9);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#009900").s().p("AgDAzQgDgBAAgDIABgJIAAgIIgCgpIgQgBQgGgBAAgHQAAgDABgCQACgCAEAAIAPABIAAgKIgBgJQAAgDACgCQADgCADAAQAEAAABALIAAAGIAAAFIAAAEIALgBIAKABQAEACAAAEQAAAEgCACQgCACgDAAIgEAAIgDAAIgKABIABApIAAADIAAAEQABAQgIAAQgBAAgCgCg");
	this.shape_164.setTransform(-15.2,94.5);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#009900").s().p("AAXAlIgFgFIgMAFQgGACgBAAQgRAAgIgJQgIgKAAgSQAAgQANgNQAMgMAPAAQAGAAAIADQAKAEAAAGQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAIgCAKIAAAOQAAAJABAFIAFANIACAEIAAABQAAADgCACQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQgBAAgEgDgAgLgRQgIAJAAAKQAAAMAEAGQAEAGAJAAQAFAAAFgCIAHgGQgCgSAAgJIAAgHIACgIIgFgCIgDAAQgKAAgIAJg");
	this.shape_165.setTransform(-22.6,95.8);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#009900").s().p("AATA3IgDgRIgBgSIAAgFIAAgGQAAgMgGAAQgJAAgGAHIgKAQQAAAcgDAFQgCAFgEAAQgDgBgCgCQgDgCAAgCIABgEIABgLIAAgKIAAg0IABgMIgBgHIgBgHQAAgEADgBQACgDADAAQAGAAABAHIABANIgBAQIAAAQIAAAHQAGgIAHgFQAFgEAIAAQAMAAAEAJQADAFABALIAAAOIACAPIACAQIABABQAAAEgCACQgDACgDAAQgFgBgCgFg");
	this.shape_166.setTransform(-30.6,93.7);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#009900").s().p("AgDAzQgDgBAAgDIABgJIAAgIIgCgpIgQgBQgGgBAAgHQAAgDABgCQACgCAEAAIAPABIAAgKIgBgJQAAgDACgCQADgCADAAQAEAAABALIAAAGIAAAFIAAAEIALgBIAKABQAEACAAAEQAAAEgCACQgCACgDAAIgEAAIgDAAIgKABIABApIAAADIAAAEQABAQgIAAQgBAAgCgCg");
	this.shape_167.setTransform(-38.6,94.5);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#009900").s().p("AgYAyQgLgLAAgQQAAgUALgKQAKgMAPABQAIgBAEADIAHAGIACgqQACgHAFAAQAHABAAAGIgDAtIgBAUQABAZACAMIAAACQAAAAgBABQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQgEAAgDgGQgFADgGADQgFACgFAAQgOgBgKgJgAgQAAQgGAIAAAPQAAAJAHAGQAGAIAJgBQAEAAAFgCIAIgGIACgCIAAgNIAAgIIAAgJQgDgFgFgCQgEgDgGAAQgKAAgHAFg");
	this.shape_168.setTransform(-51,93.7);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#009900").s().p("AgYAfQgLgJAAgRQAAgQAJgOQAKgOAQABQALAAAIADQAJAGAAAKQAAAHgIAHIgQAFIgaAOQAFAGAFADQAHADAGAAQAFAAAHgCQAIgCADgEQACgEADAAQADAAACACQABABAAAAQAAABAAAAQABABAAAAQAAABAAABQAAAHgOAGQgLAGgKAAQgOAAgLgJgAgOgTQgGAIgDALIAWgJQAMgGAFgFQgFgFgLgBQgIABgGAGg");
	this.shape_169.setTransform(-59.3,95.7);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#009900").s().p("AgbAhIAAgxIAAgIIAAgHQAAgIAHAAQAHAAAAANQANgOAQAAQAHAAACAFQADAEAAAJIAAAGQAAAJgHAAQgGAAgBgIIAAgFIAAgGQgLABgGAGQgGAEgEAKIAAAmQAAAIgIgBQgGABAAgIg");
	this.shape_170.setTransform(-67,95.8);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#009900").s().p("AgYAfQgLgJAAgRQAAgQAJgOQAKgOAQABQALAAAIADQAJAGAAAKQAAAHgIAHIgQAFIgZAOQAEAGAFADQAHADAGAAQAFAAAHgCQAIgCADgEQADgEACAAQADAAACACQABABAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAHgOAGQgLAGgKAAQgOAAgLgJgAgOgTQgGAIgDALIAWgJQAMgGAFgFQgFgFgLgBQgIABgGAGg");
	this.shape_171.setTransform(-74.7,95.7);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#009900").s().p("AgYAyQgLgLAAgQQAAgUALgKQAKgMAPABQAIgBAEADIAHAGIACgqQACgHAFAAQAHABAAAGIgDAtIgBAUQABAZACAMIAAACQAAAAgBABQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQgEAAgDgGQgFADgGADQgFACgFAAQgOgBgKgJgAgQAAQgGAIAAAPQAAAJAHAGQAGAIAJgBQAEAAAFgCIAIgGIACgCIAAgNIAAgIIAAgJQgDgFgFgCQgEgDgGAAQgKAAgHAFg");
	this.shape_172.setTransform(-83.4,93.7);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#009900").s().p("AgbAhIAAgxIABgIIAAgHQgBgIAHAAQAHAAAAANQANgOARAAQAFAAAEAFQACAEAAAJIAAAGQgBAJgGAAQgHAAAAgIIAAgFIAAgGQgLABgGAGQgGAEgFAKIABAmQAAAIgIgBQgGABAAgIg");
	this.shape_173.setTransform(-91.2,95.8);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#009900").s().p("AASAjIgDgQIgBgQIABgEIAAgIQAAgQgGAAQgIAAgGAKQgGAJgEAMIgBAHIAAAHIAAAGIABAHQAAADgCADQgCACgEAAQgDAAgCgCQgCgDAAgDIAAgHIgBgGIABgUIABgUIAAgHIAAgHQAAgDACgCQACgCADAAQAHAAABAKIAAAIQAMgQALAAQAMAAAEAKQAEAHAAANIAAAIIAAAFIABAPIACAQQAAADgCACQgCACgDAAQgHAAAAgHg");
	this.shape_174.setTransform(-111.2,95.6);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#009900").s().p("AAXAlIgFgFIgMAFQgGACgBAAQgRAAgIgJQgIgKAAgSQAAgQANgNQAMgMAPAAQAGAAAIADQAKAEAAAGQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAIgCAKIAAAOQAAAJABAFIAFANIACAEIAAABQAAADgCACQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQgBAAgEgDgAgLgRQgIAJAAAKQAAAMAEAGQAEAGAJAAQAFAAAFgCIAHgGQgCgSAAgJIAAgHIACgIIgFgCIgDAAQgKAAgIAJg");
	this.shape_175.setTransform(-119.1,95.8);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#009900").s().p("AgDArQgCgCAAgEIgCgaIgBgYQAAgIgDgEQgFACgFAGIgJAJIgDAFIgBALIgBANIABAGIAAAFQAAADgCACQgCACgDAAQgIAAAAgSIAAgNIABgMIAAgLIgBgMQAAgRAHAAQADAAADADQACACAAADIAAAFIgBAEIAAAIQAEgIAIgGQAHgHAFAAQALAAADAMQAEgGAGgCQAFgDAHAAQANAAAEANIADAVQACAKADAeQAAADgCACQgCACgDAAQgGAAgBgHIgDgWIgCgVQgBgFgCgFQgCgGgDAAQgDAAgHAEQgHAEgCADIAAANIACASIABATQAAAEgBACQgDACgDAAQgBAAgCgCg");
	this.shape_176.setTransform(-128.7,95.7);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#009900").s().p("AgbAhIAAgxIABgIIAAgHQgBgIAHAAQAHAAAAANQANgOARAAQAFAAAEAFQACAEAAAJIAAAGQgBAJgGAAQgHAAAAgIIAAgFIAAgGQgLABgGAGQgGAEgFAKIABAmQAAAIgIgBQgGABAAgIg");
	this.shape_177.setTransform(-138,95.8);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#009900").s().p("AgGA0QgCgCAAgDIAAgNIAAgNIABgRIAAgPQAAgEACgCQACgCADAAQACAAACACQACACAAAEIgBAPIgBARIABANIAAANQAAADgCACQgCACgBAAQgEAAgCgCgAgDgnQgDgDAAgDQAAgEADgCQACgCACgBQADABADACQACACAAAEQAAADgCADQgDADgDgBQgCABgCgDg");
	this.shape_178.setTransform(-143.8,93.9);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#009900").s().p("AAXAlIgFgFIgMAFQgGACgBAAQgRAAgIgJQgIgKAAgSQAAgQANgNQAMgMAPAAQAGAAAIADQAKAEAAAGQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAIgCAKIAAAOQAAAJABAFIAFANIACAEIAAABQAAADgCACQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQgBAAgEgDgAgLgRQgIAJAAAKQAAAMAEAGQAEAGAJAAQAFAAAFgCIAHgGQgCgSAAgJIAAgHIACgIIgFgCIgDAAQgKAAgIAJg");
	this.shape_179.setTransform(-149.9,95.8);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#009900").s().p("AATA3IgDgRIgBgSIAAgFIAAgGQAAgMgGAAQgJAAgGAHIgKAQQAAAcgDAFQgCAFgEAAQgDgBgCgCQgDgCAAgCIABgEIABgLIAAgKIAAg0IABgMIgBgHIgBgHQAAgEADgBQACgDADAAQAGAAABAHIABANIgBAQIAAAQIAAAHQAGgIAHgFQAFgEAIAAQAMAAAEAJQADAFABALIAAAOIACAPIACAQIABABQAAAEgCACQgDACgDAAQgFgBgCgFg");
	this.shape_180.setTransform(-157.9,93.7);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#009900").s().p("AgUAgQgKgKAAgPQAAgNAKgQQALgSAMAAQAHAAAJAEQALAEAAAGQAAADgCACQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIgDgBIgDgCQgFgEgJAAQgGAAgHANQgHANAAAHQAAAJAHAGQAGAFAIAAQAEAAAFgCIAIgFIAEgBQAAAAABAAQABAAAAABQABAAAAAAQABABAAAAQACACAAADQAAAFgLAFQgKAFgGAAQgNAAgLgJg");
	this.shape_181.setTransform(-166.2,95.7);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#009900").s().p("AgYAfQgLgJAAgRQAAgQAJgOQAKgOAQABQALAAAIADQAJAGAAAKQAAAHgIAHIgQAFIgaAOQAEAGAGADQAHADAGAAQAFAAAHgCQAIgCADgEQACgEADAAQADAAACACQAAABABAAQAAABAAAAQABABAAAAQAAABAAABQAAAHgOAGQgLAGgKAAQgPAAgKgJgAgOgTQgGAIgDALIAWgJQAMgGAGgFQgHgFgKgBQgIABgGAGg");
	this.shape_182.setTransform(-178.5,95.7);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#009900").s().p("AATA3IgDgRIgBgSIAAgFIAAgGQAAgMgGAAQgJAAgGAHIgKAQQAAAcgDAFQgCAFgEAAQgDgBgCgCQgDgCAAgCIABgEIABgLIAAgKIAAg0IABgMIgBgHIgBgHQAAgEADgBQACgDADAAQAGAAABAHIABANIgBAQIAAAQIAAAHQAGgIAHgFQAFgEAIAAQAMAAAEAJQADAFABALIAAAOIACAPIACAQIABABQAAAEgCACQgDACgDAAQgFgBgCgFg");
	this.shape_183.setTransform(-187,93.7);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#009900").s().p("AgEA1QgCgCAAgDIAAgDIABgEIgBgKIAAgLIgCgcIgCgdIgHAAQgQAAgJgCQgGgCAAgGQAAgDACgCQACgCAEAAIAMABIALABIAOAAIALAAIARAAIARABQADAAACACQACADAAADQAAADgCACQgCACgDAAIgRgBIgRAAIgFAAIACAgIABAfIABAIIABAIQAAAFgCAEQgCAEgEAAQgBAAgDgCg");
	this.shape_184.setTransform(-195.9,93.8);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#009900").s().p("AAIAWQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAgBIABgbIABgIQABgEAFAAQABAAAAAAQABAAAAAAQABAAAAABQABAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIAAAEIAAADIgBAaQAAAHgHAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBgBAAAAgAgUALIAAgNIABgOQAAgBAAAAQAAgBABgBQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAAgBABAAQABAAAAAAQABAAABAAQABAAAAABQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAQABABAAABQAAAAAAABIAAAOIAAAMIAAAEIABADQAAABgBAAQAAABAAABQAAAAgBABQAAAAAAABQgCABgEAAQgGAAgBgMg");
	this.shape_185.setTransform(-205,90.1);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#009900").s().p("AgFAGQgCgDgBgDQABgCACgDQADgDACAAQADAAADADQADADgBACQABADgDADQgDADgDAAQgCAAgDgDg");
	this.shape_186.setTransform(59.5,-3.3);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#009900").s().p("AgUAeQgKgKgBgRQAAgOAJgNQAKgPAQAAQAPAAAHAOQAGALAAAOQAAAPgIAMQgKANgOAAQgLAAgJgKgAgLgOQgFAJAAAIQAAALAGAGQAEAFAGAAQAHAAAFgGQAGgGABgKQABgbgRAAQgIAAgGAKg");
	this.shape_187.setTransform(-46.3,-6.6);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#009900").s().p("AAIAWQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIABgbIABgIQACgEAEAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAIAAAEIAAADIgBAaQAAAHgHAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBgBAAAAgAgTALIAAgNIAAgOQAAgBAAAAQAAgBAAgBQABAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAAgBABAAQABAAAAAAQABAAABAAQABAAAAABQABAAAAAAQABABAAAAQAAABABAAQAAABABAAQAAABAAABQAAAAAAABIAAAOIgBAMIABAEIAAADQAAABAAAAQAAABAAABQAAAAgBABQAAAAgBABQgBABgEAAQgGAAAAgMg");
	this.shape_188.setTransform(175.1,141.6);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#009900").s().p("AgFAGQgCgDgBgDQABgCACgDQACgDADAAQAEAAACADQADADgBACQABADgDADQgCADgEAAQgDAAgCgDg");
	this.shape_189.setTransform(170.3,150.6);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#009900").s().p("AgSA5QgCgCAAgDQAAgIAPgjIgagwIgDgGQgCgDAAgCQAAgDACgDQADgCACAAQAEAAACADQAMARAMAgIALgZIALgXQADgEAEAAQADAAACACQACACAAADIgBAEIgZA1IgMAhIgFAOQgCAGgFAAQgDAAgCgCg");
	this.shape_190.setTransform(164.3,149.1);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#009900").s().p("AgHA1IABgbIABgaIAAgZIAAgaQABgIAFAAQAHAAAAAIIAAAaIAAAZIgCAkIgBARQAAAHgFAAQgHAAAAgHg");
	this.shape_191.setTransform(158.6,145.1);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#009900").s().p("AgYAfQgLgJAAgQQAAgSAJgNQAKgNAQAAQALAAAIAEQAJAEAAALQAAAIgIAFIgPAGIgbAOQAFAGAGADQAGADAGAAQAFAAAHgCQAJgCACgEQACgEADAAQADAAACACQAAAAABABQAAABAAAAQABABAAAAQAAABAAAAQAAAIgNAHQgMAEgKAAQgPABgKgJgAgOgSQgGAGgDAMIAXgIQALgHAGgEQgHgHgKAAQgIAAgGAIg");
	this.shape_192.setTransform(152.6,147.2);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#009900").s().p("AgDA0QgDgCAAgEIABgIIAAgIIgCgpIgQgBQgGgBAAgGQAAgDABgDQACgCAEAAIAPABIAAgKIgBgIQAAgEACgCQADgCADAAQAEAAABALIAAAGIAAAFIAAAEIALgBQAHAAADABQAEABAAAGQAAADgCACQgCACgDAAIgEAAIgDAAIgKABIABApIAAAEIAAADQABAQgIAAQgBAAgCgBg");
	this.shape_193.setTransform(144.8,145.9);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#009900").s().p("AgGA1QgCgCAAgEIAAgNIAAgOIABgRIAAgOQAAgEACgCQACgCADAAQACAAACACQACACAAAEIgBAOIgBARIABAOIAAANQAAAEgCACQgCABgBAAQgEAAgCgBgAgDgnQgDgCAAgEQAAgDADgDQACgDACABQADgBADADQACADAAADQAAAEgCACQgDACgDABQgCgBgCgCg");
	this.shape_194.setTransform(131.6,145.4);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#009900").s().p("AgYAxQgLgKAAgRQAAgTALgJQAKgMAPAAQAIAAAEACIAHAFIACgpQACgGAFgBQAHAAAAAIIgDAtIgBATQABAYACAMIAAADQAAAAgBABQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgEAAgDgGQgFADgGACQgFACgFAAQgOAAgKgKgAgQABQgGAHAAAOQAAAKAHAGQAGAIAJAAQAEAAAFgCIAIgHIACgCIAAgNIAAgJIAAgIQgDgFgFgCQgEgDgGAAQgKAAgHAGg");
	this.shape_195.setTransform(124.9,145.2);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#009900").s().p("AgYAfQgLgJAAgQQAAgSAJgNQAKgNAQAAQALAAAIAEQAJAEAAALQAAAIgIAFIgQAGIgaAOQAFAGAFADQAHADAGAAQAFAAAHgCQAIgCADgEQACgEADAAQADAAACACQABAAAAABQAAABAAAAQABABAAAAQAAABAAAAQAAAIgOAHQgLAEgKAAQgOABgLgJgAgOgSQgGAGgDAMIAWgIQAMgHAFgEQgFgHgLAAQgIAAgGAIg");
	this.shape_196.setTransform(116.6,147.2);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#009900").s().p("AgDArQgCgCAAgEIgCgaIgBgYQAAgIgDgEQgFACgFAGIgJAJIgDAFIgBALIgBANIABAGIAAAFQAAADgCACQgCACgDAAQgIAAAAgSIAAgNIABgMIAAgLIgBgMQAAgRAHAAQADAAADADQACACAAADIAAAFIgBAEIAAAIQAEgIAIgGQAHgHAFAAQALAAADAMQAEgGAGgCQAFgDAHAAQANAAAEANIADAVQACAKADAeQAAADgCACQgCACgDAAQgGAAgBgHIgDgWIgCgVQgBgFgCgFQgCgGgDAAQgDAAgHAEQgHAEgCADIAAANIACASIABATQAAAEgBACQgDACgDAAQgBAAgCgCg");
	this.shape_197.setTransform(95,147.2);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#009900").s().p("AgGA1QgCgCAAgEIAAgNIAAgOIABgRIAAgOQAAgEACgCQACgCADAAQACAAACACQACACAAAEIgBAOIgBARIABAOIAAANQAAAEgCACQgCABgBAAQgEAAgCgBgAgDgnQgDgCAAgEQAAgDADgDQACgDACABQADgBADADQACADAAADQAAAEgCACQgDACgDABQgCgBgCgCg");
	this.shape_198.setTransform(87.1,145.4);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#009900").s().p("AASAkIgDgRIgBgQIABgEIAAgHQAAgQgGgBQgIABgGAJQgGAJgEAMIgBAHIAAAHIAAAHIABAGQAAADgCACQgCACgEAAQgDAAgCgCQgCgCAAgDIAAgGIgBgHIABgUIABgUIAAgHIAAgHQAAgDACgCQACgCADAAQAHAAABAJIAAAJQAMgRALAAQAMAAAEALQAEAHAAAOIAAAHIAAAEIABAQIACAQQAAADgCACQgCACgDAAQgHAAAAgGg");
	this.shape_199.setTransform(76.6,147.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#009900").s().p("AgGA1QgCgCAAgEIAAgNIAAgOIABgRIAAgOQAAgEACgCQACgCADAAQACAAACACQACACAAAEIgBAOIgBARIABAOIAAANQAAAEgCACQgCABgBAAQgEAAgCgBgAgDgnQgDgCAAgEQAAgDADgDQACgDACABQADgBADADQACADAAADQAAAEgCACQgDACgDABQgCgBgCgCg");
	this.shape_200.setTransform(62.6,145.4);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#009900").s().p("AgDA0QgDgCAAgEIABgIIAAgIIgCgpIgQgBQgGgBAAgGQAAgDABgDQACgCAEAAIAPABIAAgKIgBgIQAAgEACgCQADgCADAAQAEAAABALIAAAGIAAAFIAAAEIALgBQAHAAADABQAEABAAAGQAAADgCACQgCACgDAAIgEAAIgDAAIgKABIABApIAAAEIAAADQABAQgIAAQgBAAgCgBg");
	this.shape_201.setTransform(56.9,145.9);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#009900").s().p("AgUAgQgKgKAAgPQAAgNAKgQQALgSAMAAQAHAAAJAEQALAEAAAGQAAADgCACQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIgDgBIgDgCQgFgEgJAAQgGAAgHANQgHANAAAHQAAAJAHAGQAGAFAIAAQAEAAAFgCIAIgFIAEgBQAAAAABAAQABABAAAAQABAAAAAAQABABAAAAQACACAAADQAAAFgLAFQgKAFgGAAQgNAAgLgJg");
	this.shape_202.setTransform(49.5,147.1);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#009900").s().p("AAQAiQgJAFgKAAQgKAAgGgEQgHgFgBgJQgDgTAAgOQAAgKACgMQABgGAGAAQADAAACABQACACAAAEIgBALIgBAKIABATIACAOIAFACIAFABQAIABAKgEIAAgPIAAgMQAAgQACgLQAAgHAHAAQADAAACACQACACAAADIgBAcIAAAOIAAAPIAAAGIAAAEQAAADgCACQgCACgDAAQgGABgBgIg");
	this.shape_203.setTransform(41.8,147.2);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#009900").s().p("AgbAhIAAgxIABgHIAAgIQgBgHAHgBQAHAAAAANQANgOARAAQAFABAEAEQACAEAAAJIAAAGQgBAIgGABQgHgBAAgGIAAgGIAAgGQgLACgGAEQgGAGgFAJIABAmQAAAHgIAAQgGAAAAgHg");
	this.shape_204.setTransform(34.5,147.2);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#009900").s().p("AgDA0QgDgCAAgEIABgIIAAgIIgCgpIgQgBQgGgBAAgGQAAgDABgDQACgCAEAAIAPABIAAgKIgBgIQAAgEACgCQADgCADAAQAEAAABALIAAAGIAAAFIAAAEIALgBQAHAAADABQAEABAAAGQAAADgCACQgCACgDAAIgEAAIgDAAIgKABIABApIAAAEIAAADQABAQgIAAQgBAAgCgBg");
	this.shape_205.setTransform(27.1,145.9);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#009900").s().p("AgTAoQgLgEAAgHQgBgDADgDQACgCADAAQACABAEADQABACAHABIAIABQAEgBAFgBQAGgCAAgFQAAgKgNgDIgGgCQgJgCgFgCQgFgDAAgIQAAgPAOgHIAMgFIAOgEIAGgBQADAAADABQACADAAADIABAGIAAAGQAAADgBADQgCACgEAAQgEgBgBgCIgDgIIgQAFQgKAFAAAGIAEACQAPADAIAFQAMAGAAAOQAAANgKAGQgJAEgLABQgKAAgIgEg");
	this.shape_206.setTransform(19.8,146.9);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#009900").s().p("AASAkIgDgRIgBgQIABgEIAAgHQAAgQgGgBQgIABgGAJQgGAJgEAMIgBAHIAAAHIAAAHIABAGQAAADgCACQgCACgEAAQgDAAgCgCQgCgCAAgDIAAgGIgBgHIABgUIABgUIAAgHIAAgHQAAgDACgCQACgCADAAQAHAAABAJIAAAJQAMgRALAAQAMAAAEALQAEAHAAAOIAAAHIAAAEIABAQIACAQQAAADgCACQgCACgDAAQgHAAAAgGg");
	this.shape_207.setTransform(12.5,147.1);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#009900").s().p("AgUAeQgKgKgBgRQAAgOAJgNQAKgPAQAAQAPAAAHAOQAGALAAAOQAAAPgIAMQgKANgOAAQgLAAgJgKgAgLgOQgFAJAAAIQAAALAGAGQAEAFAGAAQAHAAAFgGQAGgGABgKQABgbgRAAQgIAAgGAKg");
	this.shape_208.setTransform(4.3,147.2);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#009900").s().p("AgUAgQgKgKAAgPQAAgNAKgQQALgSAMAAQAHAAAJAEQALAEAAAGQAAADgCACQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIgDgBIgDgCQgFgEgJAAQgGAAgHANQgHANAAAHQAAAJAHAGQAGAFAIAAQAEAAAFgCIAIgFIAEgBQAAAAABAAQABABAAAAQABAAAAAAQABABAAAAQACACAAADQAAAFgLAFQgKAFgGAAQgNAAgLgJg");
	this.shape_209.setTransform(-3.3,147.1);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#009900").s().p("AASAkIgDgRIgBgQIABgEIAAgHQAAgQgGgBQgIABgGAJQgGAJgEAMIgBAHIAAAHIAAAHIABAGQAAADgCACQgCACgEAAQgDAAgCgCQgCgCAAgDIAAgGIgBgHIABgUIABgUIAAgHIAAgHQAAgDACgCQACgCADAAQAHAAABAJIAAAJQAMgRALAAQAMAAAEALQAEAHAAAOIAAAHIAAAEIABAQIACAQQAAADgCACQgCACgDAAQgHAAAAgGg");
	this.shape_210.setTransform(-15.4,147.1);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#009900").s().p("AgGA1QgCgCAAgEIAAgNIAAgOIABgRIAAgOQAAgEACgCQACgCADAAQACAAACACQACACAAAEIgBAOIgBARIABAOIAAANQAAAEgCACQgCABgBAAQgEAAgCgBgAgDgnQgDgCAAgEQAAgDADgDQACgDACABQADgBADADQACADAAADQAAAEgCACQgDACgDABQgCgBgCgCg");
	this.shape_211.setTransform(-21.5,145.4);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#009900").s().p("AgYA4QgJgCAAgFQAAgHAGAAIAJABQAGACAHAAQAMgBAGgNQAEgJAAgTQgFAIgEADQgGAEgFAAQgNAAgJgJQgIgJAAgMQAAgUALgMQAMgNASAAQAHAAAFACQAEACADADQAHABABAIIgCAOIgCAOIgCAWQAAAPgCAJQgEAMgIAGQgIAHgOAAQgKAAgHgCgAgMgjQgHAIAAAOQAAAKAEAEQAEAFAIAAQAFAAAIgGQAGgIABgIIADgZIgGgDQgDgBgDAAQgNAAgHAKg");
	this.shape_212.setTransform(-27.7,149.1);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#009900").s().p("AgYAfQgLgJAAgQQAAgSAJgNQAKgNAQAAQALAAAIAEQAJAEAAALQAAAIgIAFIgPAGIgbAOQAFAGAGADQAGADAGAAQAFAAAHgCQAJgCACgEQACgEADAAQADAAACACQAAAAABABQAAABAAAAQABABAAAAQAAABAAAAQAAAIgNAHQgMAEgKAAQgPABgKgJgAgOgSQgGAGgDAMIAXgIQALgHAGgEQgHgHgKAAQgIAAgGAIg");
	this.shape_213.setTransform(-35.5,147.2);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#009900").s().p("AgVA2QgDAEgDAAQgDAAgBgCQgCgCAAgDIAAgGIAAgFIAAgXIgBgWIABgUIAAgUQAAgFABgDQADgFAEAAQAGAAgBAHIAAADIgBADIAAAQIAAASQAGgEAGgCQAGgCADAAQAQAAAJAMQAKAJAAARQAAARgLALQgKAMgPAAQgLAAgJgFgAgKgCIgLAFIAAANIAAALIAAAMIAKAFIAKABQAJAAAHgIQAGgHAAgLQAAgLgFgHQgGgGgKAAQgEAAgGADg");
	this.shape_214.setTransform(-44,145.2);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#009900").s().p("AgYAfQgLgJAAgQQAAgSAJgNQAKgNAQAAQALAAAIAEQAJAEAAALQAAAIgIAFIgQAGIgaAOQAFAGAFADQAHADAGAAQAFAAAHgCQAIgCADgEQACgEADAAQADAAACACQABAAAAABQAAABAAAAQABABAAAAQAAABAAAAQAAAIgOAHQgLAEgKAAQgOABgLgJgAgOgSQgGAGgDAMIAWgIQAMgHAFgEQgFgHgLAAQgIAAgGAIg");
	this.shape_215.setTransform(-57.1,147.2);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#009900").s().p("AAEAUIgDgRIgBgOIgFAMIgLAeIgDAFQgDAEgEAAQgGAAgFgWIgFgdIgCgLIgBgKQAAgEADgCQABgCADAAQAGAAABAHIACAKIABALIAFAfQAHgVAJgeQACgIAFAAQAFAAADAJIAEAbIAGAbIAEgUIAKgmQACgEAEgBQADAAADACQACACAAAEIAAADIgQA0QgBAGgGAIQgCADgEAAQgJAAgEgUg");
	this.shape_216.setTransform(-66.4,147.3);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#009900").s().p("AgDA0QgDgCAAgEIABgIIAAgIIgCgpIgQgBQgGgBAAgGQAAgDABgDQACgCAEAAIAPABIAAgKIgBgIQAAgEACgCQADgCADAAQAEAAABALIAAAGIAAAFIAAAEIALgBQAHAAADABQAEABAAAGQAAADgCACQgCACgDAAIgEAAIgDAAIgKABIABApIAAAEIAAADQABAQgIAAQgBAAgCgBg");
	this.shape_217.setTransform(-79.6,145.9);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#009900").s().p("AATA3IgDgRIgBgSIAAgGIAAgFQAAgMgGAAQgJAAgGAGIgKARQAAAcgDAFQgCAFgEgBQgDAAgCgCQgDgBAAgEIABgDIABgKIAAgLIAAg0IABgMIgBgHIgBgHQAAgEADgCQACgCADABQAGAAABAGIABANIgBAQIAAAQIAAAGQAGgIAHgEQAFgDAIAAQAMAAAEAIQADAFABALIAAAOIACAQIACAPIABACQAAACgCACQgDACgDABQgFAAgCgGg");
	this.shape_218.setTransform(-95.1,145.2);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#009900").s().p("AgDA0QgDgCAAgEIABgIIAAgIIgCgpIgQgBQgGgBAAgGQAAgDABgDQACgCAEAAIAPABIAAgKIgBgIQAAgEACgCQADgCADAAQAEAAABALIAAAGIAAAFIAAAEIALgBQAHAAADABQAEABAAAGQAAADgCACQgCACgDAAIgEAAIgDAAIgKABIABApIAAAEIAAADQABAQgIAAQgBAAgCgBg");
	this.shape_219.setTransform(-103,145.9);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#009900").s().p("AgYAxQgLgKAAgRQAAgTALgJQAKgMAPAAQAIAAAEACIAHAFIACgpQACgGAFgBQAHAAAAAIIgDAtIgBATQAAAYADAMIAAADQAAAAgBABQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgEAAgDgGQgFADgFACQgHACgEAAQgPAAgJgKgAgQABQgGAHAAAOQAAAKAHAGQAGAIAJAAQAFAAAEgCIAIgHIACgCIAAgNIAAgJIAAgIQgDgFgFgCQgEgDgGAAQgKAAgHAGg");
	this.shape_220.setTransform(-115.5,145.2);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#009900").s().p("AgYAfQgLgJAAgQQAAgSAJgNQAKgNAQAAQALAAAIAEQAJAEAAALQAAAIgIAFIgQAGIgZAOQAEAGAFADQAHADAGAAQAFAAAHgCQAIgCADgEQADgEACAAQADAAACACQABAAAAABQAAABABAAQAAABAAAAQAAABAAAAQAAAIgOAHQgLAEgKAAQgOABgLgJgAgOgSQgGAGgDAMIAWgIQAMgHAFgEQgFgHgLAAQgIAAgGAIg");
	this.shape_221.setTransform(-123.8,147.2);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#009900").s().p("AgHAhIgLgdIgNggIgBgDQAAgDADgCQACgDADAAQAEAAACAFIASAxIANggIAGgQQACgFAEAAQADAAADACQACACAAADQAAADgMAcIgPAhQgBAHgFAAQgEAAgDgHg");
	this.shape_222.setTransform(-131.6,147.1);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#009900").s().p("AgHA1IABgbIABgaIAAgZIABgaQgBgIAGAAQAHAAAAAIIgBAaIAAAZIgBAkIgBARQAAAHgFAAQgHAAAAgHg");
	this.shape_223.setTransform(-137.4,145.1);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#009900").s().p("AgUAeQgKgKgBgRQAAgOAJgNQAKgPAQAAQAPAAAHAOQAGALAAAOQAAAPgIAMQgKANgOAAQgLAAgJgKgAgLgOQgFAJAAAIQAAALAGAGQAEAFAGAAQAHAAAFgGQAGgGABgKQABgbgRAAQgIAAgGAKg");
	this.shape_224.setTransform(-143.6,147.2);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#009900").s().p("AgTAoQgMgEAAgHQAAgDADgDQACgCADAAQACABAEADQACACAGABIAIABQAEgBAFgBQAHgCAAgFQAAgKgOgDIgGgCQgKgCgDgCQgHgDAAgIQAAgPAPgHIAMgFIAOgEIAHgBQADAAABABQACADAAADIABAGIACAGQgBADgCADQgCACgDAAQgEgBgCgCIgBgIIgRAFQgKAFAAAGIAEACQAPADAIAFQAMAGAAAOQAAANgKAGQgJAEgLABQgJAAgJgEg");
	this.shape_225.setTransform(-151.2,146.9);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#009900").s().p("AgYAfQgLgJAAgQQAAgSAJgNQAKgNAQAAQALAAAIAEQAJAEAAALQAAAIgIAFIgQAGIgaAOQAFAGAFADQAHADAGAAQAFAAAHgCQAIgCADgEQACgEADAAQADAAACACQAAAAABABQAAABAAAAQABABAAAAQAAABAAAAQAAAIgOAHQgKAEgLAAQgPABgKgJgAgOgSQgGAGgDAMIAXgIQALgHAGgEQgHgHgKAAQgIAAgGAIg");
	this.shape_226.setTransform(-158.6,147.2);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#009900").s().p("AgbAhIAAgxIABgHIAAgIQgBgHAHgBQAHAAAAANQANgOARAAQAFABAEAEQACAEAAAJIAAAGQgBAIgGABQgHgBAAgGIAAgGIAAgGQgLACgGAEQgGAGgFAJIABAmQAAAHgIAAQgGAAAAgHg");
	this.shape_227.setTransform(-166.2,147.2);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#009900").s().p("AgDA0QgDgCAAgEIABgIIAAgIIgCgpIgQgBQgGgBAAgGQAAgDABgDQACgCAEAAIAPABIAAgKIgBgIQAAgEACgCQADgCADAAQAEAAABALIAAAGIAAAFIAAAEIALgBQAHAAADABQAEABAAAGQAAADgCACQgCACgDAAIgEAAIgDAAIgKABIABApIAAAEIAAADQABAQgIAAQgBAAgCgBg");
	this.shape_228.setTransform(-178.1,145.9);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#009900").s().p("AgGA1QgCgCAAgEIAAgNIAAgOIABgRIAAgOQAAgEACgCQACgCADAAQACAAACACQACACAAAEIgBAOIgBARIABAOIAAANQAAAEgCACQgCABgBAAQgEAAgCgBgAgDgnQgDgCAAgEQAAgDADgDQACgDACABQADgBADADQACADAAADQAAAEgCACQgDACgDABQgCgBgCgCg");
	this.shape_229.setTransform(-183.6,145.4);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FF0000").s().p("AgYAfQgLgJAAgQQAAgSAJgNQAKgNAQAAQALAAAIAEQAJAEAAALQAAAIgIAFIgQAGIgaAOQAEAGAGADQAHADAGAAQAFAAAHgCQAIgCADgEQACgEADAAQADAAACACQAAAAABABQAAABAAAAQABABAAAAQAAABAAAAQAAAIgOAHQgLAEgKAAQgPABgKgJgAgOgSQgGAGgDAMIAWgIQAMgHAGgEQgHgHgKAAQgIAAgGAIg");
	this.shape_230.setTransform(-194.2,147.2);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FF0000").s().p("AghA4QgDgDAAgDIAAgWIACgcIABgeIABgUQAAgEACgBQAKgDANAAQALAAAMAJQANAKAAAPQAAATgOAJQALAEAFAGQAGAGAAAGQAAAJgKAJQgHAFgHADQgOAHgaAAQgDAAgDgDgAgVAdIAAAPQATgBAKgFQAFgCAFgEQAEgEAAgCQAAgDgJgEQgHgEgGgBIgHgBIgCAAIgDAAIgJgBIAAARgAgSgqIAAAMIgCAdIALABQAJgBAHgGQAIgHAAgKQAAgHgIgGQgHgGgHAAIgLABg");
	this.shape_231.setTransform(-202.9,145.2);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#009900").s().p("AgUAeQgKgKgBgRQAAgOAJgNQAKgPAQAAQAPAAAHAOQAGALAAAOQAAAPgIAMQgKANgOAAQgLAAgJgKgAgLgOQgFAJAAAIQAAALAGAGQAEAFAGAAQAHAAAFgGQAGgGABgKQABgbgRAAQgIAAgGAKg");
	this.shape_232.setTransform(-99.1,95.8);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#009900").s().p("AAXAlIgFgFIgMAFQgGACgBAAQgRAAgIgJQgIgKAAgSQAAgQANgNQAMgMAPAAQAGAAAIADQAKAEAAAGQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAIgCAKIAAAOQAAAJABAFIAFANIACAEIAAABQAAADgCACQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQgBAAgEgDgAgLgRQgIAJAAAKQAAAMAEAGQAEAGAJAAQAFAAAFgCIAHgGQgCgSAAgJIAAgHIACgIIgFgCIgDAAQgKAAgIAJg");
	this.shape_233.setTransform(-119.1,95.8);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#009900").s().p("AgDArQgCgCAAgEIgCgaIgBgYQAAgIgDgEQgFACgFAGIgJAJIgDAFIgBALIgBANIABAGIAAAFQAAADgCACQgCACgDAAQgIAAAAgSIAAgNIABgMIAAgLIgBgMQAAgRAHAAQADAAADADQACACAAADIAAAFIgBAEIAAAIQAEgIAIgGQAHgHAFAAQALAAADAMQAEgGAGgCQAFgDAHAAQANAAAEANIADAVQACAKADAeQAAADgCACQgCACgDAAQgGAAgBgHIgDgWIgCgVQgBgFgCgFQgCgGgDAAQgDAAgHAEQgHAEgCADIAAANIACASIABATQAAAEgBACQgDACgDAAQgBAAgCgCg");
	this.shape_234.setTransform(-128.7,95.7);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#009900").s().p("AAXAlIgFgFIgMAFQgGACgBAAQgRAAgIgJQgIgKAAgSQAAgQANgNQAMgMAPAAQAGAAAIADQAKAEAAAGQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAIgCAKIAAAOQAAAJABAFIAFANIACAEIAAABQAAADgCACQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQgBAAgEgDgAgLgRQgIAJAAAKQAAAMAEAGQAEAGAJAAQAFAAAFgCIAHgGQgCgSAAgJIAAgHIACgIIgFgCIgDAAQgKAAgIAJg");
	this.shape_235.setTransform(-149.9,95.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111,p:{x:-46.3,y:-6.6}},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97,p:{x:59.5,y:-3.3}},{t:this.shape_96}]},96).to({state:[{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111,p:{x:-46.3,y:-6.6}},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97,p:{x:59.5,y:-3.3}},{t:this.shape_96}]},76).to({state:[{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_187,p:{x:-46.3,y:-6.6}},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_186,p:{x:59.5,y:-3.3}},{t:this.shape_96},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179,p:{x:-149.9}},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176,p:{x:-128.7,y:95.7}},{t:this.shape_175,p:{x:-119.1}},{t:this.shape_174},{t:this.shape_111,p:{x:-99.1,y:95.8}},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165,p:{x:-22.6}},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156,p:{x:62.5,y:95.8}},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153,p:{x:91.7,y:95.8}},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_97,p:{x:141.9,y:99.1}},{t:this.shape_147}]},80).to({state:[{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_235},{t:this.shape_178},{t:this.shape_177},{t:this.shape_234},{t:this.shape_233},{t:this.shape_174},{t:this.shape_232},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_179,p:{x:-22.6}},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_175,p:{x:62.5}},{t:this.shape_155},{t:this.shape_154},{t:this.shape_165,p:{x:91.7}},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_186,p:{x:141.9,y:99.1}},{t:this.shape_147},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_156,p:{x:-87,y:147.2}},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_187,p:{x:68.4,y:147.2}},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_176,p:{x:106.6,y:147.2}},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_153,p:{x:137.4,y:147.2}},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111,p:{x:-46.3,y:-6.6}},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97,p:{x:59.5,y:-3.3}},{t:this.shape_96}]},99).wait(56));

	// Layer 2
	this.instance_3 = new lib.FatGuy();
	this.instance_3.setTransform(170,11.6,1.766,1.766,0,0,0,18.7,14.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.instance_4 = new lib.CarmenJudging();
	this.instance_4.setTransform(175.3,18.1,1.153,1.155,0,0,180);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.instance_5 = new lib.SamSpeech();
	this.instance_5.setTransform(187,28.4);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(82).to({_off:false},0).to({alpha:1},14).to({_off:true},104).wait(207));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(200).to({_off:false},0).to({alpha:1},10).to({_off:true},91).wait(106));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(301).to({_off:false},0).to({alpha:1},10).wait(96));

	// Layer 7
	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("rgba(255,255,255,0.8)").s().p("EgmZARnMAAAgjNMBMzAAAMAAAAjNg");
	this.shape_236.setTransform(-3.1,20.9);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("rgba(255,255,255,0.8)").s().p("EgmZARfMAAAgi9MBMzAAAMAAAAi9g");
	this.shape_237.setTransform(-3.1,16.2);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("rgba(255,255,255,0.8)").s().p("EgmZARWMAAAgirMBMzAAAMAAAAirg");
	this.shape_238.setTransform(-3.1,11.5);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("rgba(255,255,255,0.8)").s().p("EgmZAROMAAAgibMBMzAAAMAAAAibg");
	this.shape_239.setTransform(-3.1,6.7);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("rgba(255,255,255,0.8)").s().p("EgmZARFMAAAgiJMBMzAAAMAAAAiJg");
	this.shape_240.setTransform(-3.1,2);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("rgba(255,255,255,0.8)").s().p("EgmZAQ9MAAAgh5MBMzAAAMAAAAh5g");
	this.shape_241.setTransform(-3.1,-2.7);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("rgba(255,255,255,0.8)").s().p("EgmZAQ0MAAAghnMBMzAAAMAAAAhng");
	this.shape_242.setTransform(-3.1,-7.5);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("rgba(255,255,255,0.8)").s().p("EgmZAQsMAAAghXMBMzAAAMAAAAhXg");
	this.shape_243.setTransform(-3.1,-12.2);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("rgba(255,255,255,0.8)").s().p("EgmZAQjMAAAghFMBMzAAAMAAAAhFg");
	this.shape_244.setTransform(-3.1,-16.9);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("rgba(255,255,255,0.8)").s().p("EgmZAQbMAAAgg1MBMzAAAMAAAAg1g");
	this.shape_245.setTransform(-3.1,-21.6);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("rgba(255,255,255,0.8)").s().p("EgmZAQTMAAAgglMBMzAAAMAAAAglg");
	this.shape_246.setTransform(-3.1,-26.4);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("rgba(255,255,255,0.8)").s().p("EgmZARpMAAAgjRMBMzAAAMAAAAjRg");
	this.shape_247.setTransform(-3.1,-17.8);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("rgba(255,255,255,0.8)").s().p("EgmZASUMAAAgknMBMzAAAMAAAAkng");
	this.shape_248.setTransform(-3.1,-13.5);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("rgba(255,255,255,0.8)").s().p("EgmZAS/MAAAgl9MBMzAAAMAAAAl9g");
	this.shape_249.setTransform(-3.1,-9.1);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("rgba(255,255,255,0.8)").s().p("EgmZATqMAAAgnTMBMzAAAMAAAAnTg");
	this.shape_250.setTransform(-3.1,-4.8);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("rgba(255,255,255,0.8)").s().p("EgmZAUVMAAAgopMBMzAAAMAAAAopg");
	this.shape_251.setTransform(-3.1,-0.5);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("rgba(255,255,255,0.8)").s().p("EgmZAVAMAAAgp/MBMzAAAMAAAAp/g");
	this.shape_252.setTransform(-3.1,3.8);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("rgba(255,255,255,0.8)").s().p("EgmZAVrMAAAgrVMBMzAAAMAAAArVg");
	this.shape_253.setTransform(-3.1,8.1);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("rgba(255,255,255,0.8)").s().p("EgmZAWXMAAAgssMBMzAAAMAAAAssg");
	this.shape_254.setTransform(-3.1,12.4);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("rgba(255,255,255,0.8)").s().p("EgmZAXCMAAAguDMBMzAAAMAAAAuDg");
	this.shape_255.setTransform(-3.1,16.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_236}]}).to({state:[{t:this.shape_236}]},46).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241,p:{y:-2.7}}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_246}]},134).to({state:[{t:this.shape_241,p:{y:-22.1}}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_255}]},1).wait(207));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-248.9,-91.8,491.7,225.5);


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
(lib.subj_Scene6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene6:0,scene6_repeat:400});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
		playSound("_16_blues",-1);
		this.btn_menu.addEventListener("click", openMenu.bind(this));
		this.btn_goNext.addEventListener("click", openNext.bind(this));
		this.btn_goBack.addEventListener("click", openPrev.bind(this));
		
		
		function openMenu(){
		
		 window.open ("../menu/menu.html","_self");
		}
		
		function openNext(){
		
		 window.open ("subj_Summary.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("subj_Scene5.html","_self");
		}
	}
	this.frame_2 = function() {
		playSound("sax_lick");
	}
	this.frame_7 = function() {
		playSound("TherearefourformsoftheSubjunctiveMood");
	}
	this.frame_53 = function() {
		playSound("Onestatementscontrarytofact");
		playSound("piano_lick");
	}
	this.frame_93 = function() {
		playSound("Ifyouwereheretennis");
	}
	this.frame_136 = function() {
		playSound("Twowishes");
		playSound("piano_lick");
	}
	this.frame_166 = function() {
		playSound("Iwishyouwerehere");
	}
	this.frame_199 = function() {
		playSound("Threeconveyingthecontents");
		playSound("piano_lick");
	}
	this.frame_248 = function() {
		playSound("chairmanorderedBeachHut");
	}
	this.frame_304 = function() {
		playSound("Fourformalmotionsandresolutions");
		playSound("piano_lick");
	}
	this.frame_345 = function() {
		playSound("BeitResolved");
	}
	this.frame_399 = function() {
		/* _root.gonow = true;*/
	}
	this.frame_405 = function() {
		this.gotoAndPlay("scene6_repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(5).call(this.frame_7).wait(46).call(this.frame_53).wait(40).call(this.frame_93).wait(43).call(this.frame_136).wait(30).call(this.frame_166).wait(33).call(this.frame_199).wait(49).call(this.frame_248).wait(56).call(this.frame_304).wait(41).call(this.frame_345).wait(54).call(this.frame_399).wait(6).call(this.frame_405).wait(1));

	// Layer 12
	this.instance = new lib.FourFormsRecap();
	this.instance.setTransform(276.8,173);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(406));

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

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgWAtQgMgFAAgIQAAgDACgCQADgDADAAQADAAAEAEIAIADIAKABQAFAAAFgCQAIgCAAgFQAAgLgQgEIgHgCQgLgCgEgEQgHgCAAgJQAAgSAQgHIAOgFIAQgFIAHgCQADAAADACQACADAAADIABAHIABAHQAAAEgCACQgCADgEAAQgEAAgCgDQgCgDAAgGIgTAFQgMAGAAAHIAFACQARADAJAGQAOAHAAAQQAAANgMAHQgKAGgMAAQgLAAgKgEg");
	this.shape.setTransform(255.8,27.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgEAwQgCgCABgEIgCgdIgCgcQAAgJgDgEQgGADgGAFIgJALIgFAFIgBANIgBAOIABAHIABAGQAAADgDADQgCACgEAAQgIAAgBgVIACgPIAAgNIAAgMIgCgNQAAgTAJAAQADAAADADQACADAAADIAAAEIgBAGIABAJQAEgKAJgGQAHgIAGAAQANABADAMQAFgGAGgDQAGgDAIAAQAOAAAFAPIADAXIAGAtQABADgDACQgDADgDAAQgHAAgBgHIgDgaIgCgXIgEgLQgCgIgDABQgEAAgIAEIgKAIIAAAPIADAUIACAWQgBAEgCACQgCACgDAAQgCAAgDgCg");
	this.shape_1.setTransform(245.5,28);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgeAlIAAg3IAAgJIAAgIQAAgIAHAAQAIAAAAAOQAPgPASgBQAGAAAEAGQADAEABAKIgBAHQAAAKgIgBQgHABAAgJIgBgFIAAgHQgNACgFAFQgHAGgGAKIAAArQAAAIgIAAQgGAAAAgIg");
	this.shape_2.setTransform(235.1,28);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgXAiQgLgLgBgUQAAgQAJgOQAMgQASAAQARAAAIAOQAHAMAAARQgBARgJAMQgKAQgQAAQgNAAgKgLgAgNgPQgGAJAAAJQAAANAHAGQAFAGAHAAQAHAAAGgHQAHgHAAgLQACgegTAAQgKAAgGAMg");
	this.shape_3.setTransform(226.2,28.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgMBFQgCgCAAgDIAAgBQACgMgBgMIAAgWIAAgWIgMABQgJAAAAgIQAAgJAOAAIAIAAIABgMQACgTAIgIQAHgLARABQAMAAAAAHQAAAIgLAAQgTAAgCAbIgBAGIASgBQANAAAAAIQAAAGgGABIgHABIgSABIgBARIAAAOIABAQQAAAQgCAIQAAAHgGAAQgDgBgDgCg");
	this.shape_4.setTransform(217.5,26.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgZBBQgIgCgFgDIgBAAQgDAAgDgDQgCgCAAgEIABgZIAAgaIAAgbIAAgdQgBgDAEgEQADgDAEAAQABAAAMAFIAOAHQAWAIAQAQQATAUABAVQAAAOgHANQgHANgLAIQgNAIgVAAQgHAAgIgCgAgdgVIAAAVIgCAtIACABQAHAFALAAQARAAAJgGQAHgFAFgJQAFgKAAgJQAAgWgZgQQgHgGgegNg");
	this.shape_5.setTransform(202.6,26.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgoAyQgRgOAAgYQAAgaARgXQASgaAaAAQAbAAAOAMQANANAAAbQAAAagPAXQgSAagaAAQgXAAgQgOgAgcgaQgNASAAAUQAAAQAMAKQALAJARAAQASAAANgUQALgSAAgUQAAgUgIgIQgJgHgUAAQgSAAgOAUg");
	this.shape_6.setTransform(189.6,26.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgoAyQgRgOAAgYQAAgaARgXQASgaAaAAQAbAAAOAMQANANAAAbQAAAagPAXQgSAagaAAQgXAAgQgOgAgcgaQgNASAAAUQAAAQAMAKQALAJARAAQASAAANgUQALgSAAgUQAAgUgIgIQgJgHgUAAQgSAAgOAUg");
	this.shape_7.setTransform(176.2,26.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAyA9QgCgDgCgKIgEgOQgDgNgHgrIgRAwIgEAPIgHAPQgDAHgEgBQgEABgEgGIgDgJIgCgJQgIgdgHgeIgCAOIgLApIgEAXQgDAGgGAAQgEAAgCgCQgCgDAAgEQAAgOAGgTIAJgfIAEgaQAEgSAEgGQAEgFAEABQAGAAACAFQADAIAEAXQAFAaAIAdQALgdAJgiIACgMQACgHACgFQADgGAGAAQAHAAAEAOIADATQAFAjAHAaIAEAPIADANQAAAEgCACQgDADgEAAQgEAAgDgFg");
	this.shape_8.setTransform(162.2,26.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgjA/QgHgIgBgaIAAgLIABgOIgBgEQAAgBACgCIACgjIgBgJIgBgJQAAgKAIAAQADAAADADIATgEIAOgBQAUAAAMAEQAFADAAAFQAAAEgBACQgDADgEAAIgCgBQgOgDgNAAIgNABQgHABgKADIABAIIgCAfIAigDIAUgCQADAAADADQACACAAAEQABAFgIABIgUACIgkADIAAALIAAAKQAAASACADQADADALAAIANgBIAPAAIAFAAIAEgBQAJAAAAAJQAAAGgGACQgJABgXAAQgaAAgHgGg");
	this.shape_9.setTransform(144.7,25.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgOA7QgKgZgMgsIgGgXQgFgRAAgFQAAgEADgCQACgCADAAQAHAAABAGIADAOIAIAcQAIAdAHAWIABgBIAUg6IAHgUQAEgMAGgGQADgEADAAQADAAADADQADACAAAEQAAACgCADQgFAHgDAJIgHASIgVA5IgJAVQgBAFgFAAQgGAAgDgHg");
	this.shape_10.setTransform(134.3,26.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgjA8QgCgDAAgDQAAgEACgCQADgDADAAIASgBIAAgQIAAgNIAAgOQAAgRACgcIgLAAIgKAAQgEAAgDgCQgCgDAAgDQAAgIAIgBIAZAAQAOAAAYADQAIABAAAIQAAAEgDACQgDACgCAAIgNgBIgOgCQgCAYAAAUIABAOIAAAOIAAAOIAZAAQADAAADACQACADAAADQAAAEgCACQgDADgDAAIgOAAIgNAAIgOACIgRABQgDAAgDgCg");
	this.shape_11.setTransform(123.7,26.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgEA8QgDgDAAgDIAAgDIABgFIgBgMIAAgLIgCggIgCghIgIAAQgSAAgKgCQgHgCAAgGQAAgDACgDQADgDAEAAIANABIANACIAPAAIANAAIATAAIASABQAEAAACACQADADAAAEQAAADgDACQgCADgEAAIgSgBIgTgBIgGAAIACAlIACAjIABAJIAAAIQAAAFgBAFQgDAFgEAAQgCAAgCgCg");
	this.shape_12.setTransform(114.1,25.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AghAyQgLgNAAgRQAAgaAXgdQAUgZARAAIAIABIAGABQACgEAEAAQAHAAABAIIABAQIgCAGQgCADgEAAQgFAAgDgGQgCgFgCgBQgCgBgHAAQgMAAgMASQgUAYABAUQAAALAGAHQAHAIAKAAQAGAAAJgEIAOgKQAFgDADgBQADABADACQACADAAADQAAAEgEADQgVATgUAAQgRAAgMgNg");
	this.shape_13.setTransform(102.8,25.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Ag2A/QgCgCAAgEIAAgKIABgLIAAgPIAAgPIAAgOIAAgRIgBgPIgBgPQAAgEADgDQAEgDADAAQAFAAAGAJQAVAfAPAUQASAWAYAWIAAgLIgBgKQABgigDgVIgCgJIgCgJQAAgJAIAAQAPAAAAA1IAAAZIAAAcIgCANQgBAIgHAAQgFAAgGgGQgigggpg5IgBATIAAAQIAAAVIABAUQAAAWgJAAQgEAAgDgDg");
	this.shape_14.setTransform(91,26);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgjAwQgKgMgDgXQgBgKAAgeIAAgSIACgLQACgFAFgBQAIAAAAAOIAAAwQAAAxAhAAQAgAAAAhSIAAgIIAAgHQAAgFACgEQACgFAFAAQAIAAAAAMIAAAKIAAAKQAABdgxAAQgXAAgNgPg");
	this.shape_15.setTransform(78.1,26.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AghA4QgPgLAAgPQAAgKAJAAQAIAAAAAKQAAAHAKAGQAIAHAJAAQAEAAAEgqIABgvIgBgIIgEAAIgJgBIgJAAQgEAAgDgCQgCgCABgEQgBgJALAAIAJAAIAHABIAPgBIAPgBQATAAAAAKQAAADgDADQgCADgDAAIgGgBIgFgBIgKABIABAJQAAA7gIAcQgFATgMAAQgPAAgOgLg");
	this.shape_16.setTransform(66.3,26.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AglA/QgDgEAAgDIAAgYIABggIACghIABgXQABgEACgBQALgEAOAAQANAAANAKQAPAMAAAQQAAAVgQAKQAMAGAGAGQAGAGAAAIQAAAJgKAKQgIAGgIADQgRAIgcAAQgEAAgDgDgAgYAgIAAARQAWgBALgFQAGgCAFgFQAFgEAAgCQAAgEgKgFIgPgGIgHgBIgEAAIgDAAIgJgBIgBATgAgUgwIgBAPIgBAfIAMABQALgBAIgGQAIgIAAgLQAAgIgJgGQgIgHgIAAIgMAAg");
	this.shape_17.setTransform(55.7,25.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgjAwQgKgMgDgXQgBgKAAgeIAAgSIACgLQACgFAFgBQAIAAAAAOIAAAwQAAAxAhAAQAgAAAAhSIAAgIIAAgHQAAgFACgEQACgFAFAAQAIAAAAAMIAAAKIAAAKQAABdgxAAQgXAAgNgPg");
	this.shape_18.setTransform(43.9,26.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AggA5QgPgIAAgMQAAgEACgCQACgCAEABQAEAAADAEQAEAGAEACQAHAFANAAQALAAAKgGQAOgGAAgNQAAgKgLgHQgKgFgNAAQgNAAgJgEQgMgGAAgNQAAgPARgMQAQgLAPAAQAIAAAKADQANADAAAGQAAAHgHAAIgMgBIgNgDQgKABgJAGQgKAGAAAKQAAAGANADIAPACQATACAKAJQAKAIAAAOQAAATgSAMQgQAKgSAAQgPAAgNgFg");
	this.shape_19.setTransform(31.9,26.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(3,1,1).p("Egh8gX/MBJYAAAIAAABIAAOWIAAAGIAAC9IAAAGIAAEhIAAAHIAAHhIAAAMIAASKMhO3AAAIAAy2IAAgNIAAl4IAAgJIAAlaIAAgMIAAs4IAAgNIAAkPIAAgBIEbAAIApAAIAKAAg");
	this.shape_20.setTransform(275,192.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#7E4B01","#B16A01"],[0,1],-33.7,0,24,0).s().p("AjmBsQABgHAHABQACAHgFAGIAAAAQgHAAACgHgABgBiQAAALgMgDQgTgHgKADQgGgNgBgIQgKADAKAOIgagCQgOgCgIAIIgHgOQgCAAgCAKQgHgCAAgIQgpAWgHgdQAAAIgJAAQgIgBAAAKQgKgIgJACIgSACQgJgNAFguQAGgvgJgRQgHAXAAA4QgdApgBAOQgNgLgOgeQALgWAJgJQgLABgLAVIgSAhIgRgYQgNABgJAOQgKAPgMAAQANgdADgSQgLgCgDANQgEARgCACIgOgCQAFAJgPAVQgKgBgIgKQgKgLgGgCQgFABACALQABAMgFAAIgKAAQgBgNAQgNQAHgGAKgHQAigUgBgaQArgcgNhqQBAAPBFAHIAAABIAKAAIApAEIgEgDQBTAABCgBIATgBQBqADBogVQgNBbA/A9IgBAPQgFAAgCgDIgvgmQgGAUAGAYQgJgEgDgMIgNgsQgIAjASAfIgCAFIgQgGIgDAAIgBABIAHAUIgbgXIAAAKIgGgDIgDgKIgKgHIgEgEIgDgHQADAIAFAGQAEAGAGAGIgHARIgIABQgIgBgFgJQgIgMgJAHQgHgMgEgUQgDgQAAgUQgBgygIgQQgLAhANA1IAEAUQAHAngHAUQgNAAgbgZQgBABADAQQAEAPgGAGQgWgNgMgEgABfAgQACAaAQACQgGgKgCgbQgCgXgHgMQACAMgDAggAgVAgQgDAXANAFQADgWAAgNQAAgXgKgIQACAGgFAggAiGBjQgGgHgDAAQALgMgCgMQAGAKAFAbIgBAAQgGAAgEgGgAjFBXQgCgFAFgFQAFADACAMIgCAAQgGAAgCgFg");
	this.shape_21.setTransform(196.5,332);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#05A514","#006633"],[0,1],70.4,-12.1,70.4,6.6).s().p("AAOA6IACAFIAAADIgCgIgAgQhBIAEAAIABAZIgFgZg");
	this.shape_22.setTransform(130.3,229.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#6D4201","#CA9B57"],[0,1],-82.6,38.4,-9.8,12.3).s().p("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");
	this.shape_23.setTransform(156.9,136.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#99FF33","#E3E260"],[0,1],0.3,-57.4,0.3,57.5).s().p("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");
	this.shape_24.setTransform(275,286.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#6D4201","#CA9B57"],[0,1],4,-0.9,17.6,-0.9).s().p("ACSI5IgEgKIABAJIgOgOIADiKIACgnIA6AAQgGgKgXACQgbADgEgDQACgygCgOQAuAQAWgJQAFAmgBBIIgBCDIgCgDQgJgRgRAFIgXAggACuIHIgnAEIAGAIIAkgGIABgDQAAgFgCAAIgCACgAC3H4IgCgJIgFACIgngIQAVAUAZgFgAC+HaQAEgBADgDIAAgFQgJAGgSgDIgVgGQAPATAagHgACTGiQATAQAZgGIAJgEIgogFIgPgFIACAEgAA6IjQgPgcgiANIgKAFQgEgFgBgGQgPhFgMhFIgBgFIABAAQgBgWgNhTQAfAAAKgRQgZAMgQgCIgDg6QARAVAfgYQACBLACApQgVAKgLgOQgDAEACADIAFAHIAggHIADAIIAAABIABACQgCgOABgLQANAgABAMQAGACAAAIIAAADQADAIACALIgBAAQgEAAAAAEIAAACIABABIgFACIguAGIAAACQAWAIAXgHIANgFIAfCMIgJAJIgBgGgAAuHdIgEgGIgIAGQgTATgZgEQAgANAYgcgAAeG3IgxAHIAEAIQAfAJAWgZIgCgFgAANF/IAAABIAAAEIABABIACgJIgDADgAgFF7QAGgCAEABIANgMIgDgCIgCgBIgCgIQAAAHgFAFIgBACQgLANgYgNQABAPAYgFgAAGE1QADgKAAAKQAAAFgBAAQgBAAgBgFgACEEnQgHgaADgSQAVAMArgMQAAAUAEAiQgNAGgNAAQgUAAgSgQgAB9DxQAAgagHgMQAIgBAZACQAXABAJgLQgHgFgPAHQgRAIgMgEQgKgJgShFQAfARAsgOQASBVgBAfQgYALgSAAQgSAAgLgLgAgfDVQgUgDgCAAQgEguAAgZQARAHARgHQgbgBgHgGQACgzACgEQAJAJAcgCQgggIgJgMIAAgiQAKgJAfgFQgbACgKgJQAIhBAIgyIAAgCIABgCQAGghAHgaQAXARANgDQgXgJgJgIQAGgZAAgPQAYASADAnIgBAAIABAAQAAALgBANQgCAagRBBQgKACgJgHIgIgFIgBAAIAAAAIgGgDQgIARAwAAQgOB/AIB0QgHAGgLAAIgHAAgAgghoIAAADQADAEAJADQANADAHgGQgJABgIgFQgIgFgGgBIgBADgABoB2QgEgXgJgiIgOgrQgUhAgIgiIAbgBQAWAAAGgGQgjAIgUgIQgCgIgHgkQAiABAHgPQATAdAiBhQgrAJgOgJQAAAMAYAAQAYAAANgJQAbBQALAzQgRALgUAAQgRAAgSgIgABeA8QAKAHASAAQAUgBAHgIQgsABgLABgAAoiHQgSgWAOgPQgKAEgGgQQgIgXgDgDQAcACADgLQAYALARA4QgTASgRAAIgFgBgAAGjUQgGgMgTghQAHgDAQgDQAOgEABgLQAVAQAAAaQACAYgcAAIgIAAgAAokSIAbAAQAAAPgKATQgFgEgMgegAgVkPQgOgKgWgpQg9hyg6g3QAKAAAJgLQAKgMAJgBQALAWAdAkQgUAMgKgFQAAAKARgBQAQABgDgOQAdAVAQAeQgTAagTgWQgDAOAUgCQAQgCAPgIQATAiAFAEQgCANgMABQAFAJAPgMQAdA4AHAIQgPATgNAAQgIAAgIgGgAArkYQgFgfgPAKQAOgXAGgOIATAOQAMAKARgEQgFANgQAZgAA1lcIAKgWIACgEQAFgJAHgDQgKAMApgPQgBgEgLAAQgKABgDgFQAJgVACgNQAHAAAUAHQABgHgIgEQgKgDgEgDQAAgCALggIAXALQgCBCgmBJIgCAAQgTAAgUgXgABFl0QgBAAAAABQAAAAAAABQAAAAAAABQAAAAABABQAEAEAEgMQgGACgCACgAjBovQAWAJAWAcQgDAQgbALQgPgPABgxgACboGIAHAAQABAGgMAAQAEgEAAgCgAjLo3QAAgCAEAAQABAAAAAAQABAAAAAAQAAABABAAQAAABAAAAg");
	this.shape_25.setTransform(446.1,131.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#05A514","#006633"],[0,1],145.8,-16.9,145.8,12.2).s().p("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");
	this.shape_26.setTransform(257.4,70.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#05A514","#006633"],[0,1],14.2,-8.2,27.7,42.3).s().p("AAAAAIAAAAIAAAAg");
	this.shape_27.setTransform(491.7,187.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#07CD1B","#01984B"],[0,1],246.2,-15.3,246.2,36.9).s().p("AowEMIgEAAIAKgBQgxAAgMgCQgXgBgOgFQgMgBgmgHQgogGgjAAIiTAHQhHAAhFgHQhEgHgPAAQhCAAgKAGQgWAAgNgMQgOgMgMAAQgHAAgKAEQgrABgHADQgEgIgMAAIgIABQgYgXAAgMQAFgYAAgGQAAgEgRgsQgRgrgBgZIABAAIgBgCIgCgNIABAAIgBAAQgFgeAAgOQgDgigLgTIAIgCQgDgGgFgFQgOgQgCgGQAKgfAcgGQADADACALQADALAFACQAIgCgBgTQANABALAIIASAPQACAAAAgKQARAFAIAFQAMgSAVAPQAHgFAAgMQAaAJAigFIAAABIACACQAIAHABAAIAEgBQAAgFABgDIALgGIANgBIAQALQAMgKAQgGIAJAGQAbgUAeARIAEAHQAhgeAYAYQAUgOAZAEIALAPIAAgOIAPgDIAKAIIAIgFQAAAAABgBQAAAAABAAQAAgBABAAQAAAAAAAAIAFgCIADAHQAWgNALAbQgJgYAhgHIASAcIACgKIAJABIAFASQAmgVAsAKIABgJQADgLASAGQAXAIAGAQQAEgBABgJQAAgIAFABQAaAVAcgBQgKgWASgIQAbAAAaAbQANgeAEgBQAGADAMAPQAKANAOAAQgGgZAJgMQAEAAADAIQADAHAHgCQANgdAOAMQAAAGgJAGQgIAEAAAIQAOgHANgBQAPAAAOAIIgBAIQAAAIAKAAQAFAAADgDQAEgDAEgFIATAZQAEAAABgDQgCgQAFgEIAEAOQADAIAEADQAOgCAKgKQAKgKAGgBQAHAWABAEIAFABIAggNQAEATAOAAQAEAAAJgGQAHgHAIAAQABAAABAAQAAABABAAQAAAAAAAAQAAABAAAAIAAAKIgBABIABAAIAAADIAGABIATgGIAKgDQAMgFAFgFIgCgCIAKgFIAKAMQAFAIAIABQgCgXATgBQAOACADAZQAEgBAKgKQAIgIAMACQACADACAcQAmgSAaASQAAgIAEgDQAEgDAJACIAAABQAKAMADAAQACAAABgEIAEgJQADgQAGgFQAFAFANAUQACAAACgOQADgOAMAAQAHAAAEANQAGAMAFAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAABgBIACgMQACgKAJgHQAEgDAEgCIAYAQIARgNQALgIANAFIAIAIIAHgHIANgIIAHAJIAFgDIAOgdIAFABIAGAQQAJgDAIgGQAHgFAHgHIAGAGIABAPIALgCIATgFIADADIgBAIIgCAJIAJgCIAGgIIAEgDIALgEIAPALIAagCIAIAEIAJARIAKgIQAQgNASAMIADgJIABgDIAOgEIATAOIAEgFIAFgEIAOgGIAKAIQAJgHAKgEQADgCAGABIADAGIAHgGQAHgEAIgDQADAKAGAJQABABAAAAQAAAAAAAAQABAAAAAAQABAAABAAIADgJIAQACIABARIABAEIACAEIAJgJIAIAAIAOAGIAEANIAAgBIADgCIAAgCIASgFIAFAFIAIAPIADAFIACgEIACgIIACgCIAKgDIACABIAKALIADgKIAGgOQADAAADACQAAAAAAgBQAAAAABAAQAAAAAAAAQAAABAAAAIAAAHIAEAEIAJgGIAegLIADANIABAAQAFgJAIgHIALgIIAOAPIAEgMQADgGAEgEQAFgEAFgCIAOARIACgGIAXgCIAGAGIAHgJQACgDAEAAIABAAQABADABAEQACAKAJgCQASgNAXAHQAXAHAHAUQAHgFAHgQQALAGAGACQAEAAACgBIANgPQAHgHAMABIAKAJIABABIAKAGIAKAHIAIgHQANgMAGgQIAQAPIAGgIIALgPIARATIADgDIAIgLIAIgKIAKAGQAOAIAJAOQAHgOAIgNQAOgUAUAJIALAHIALgJIAMgHIAMgEIANgBIAUAMIAbgRIAVASIAQgHIADgTQANgCAKAHIAFAFIAEAGIADAGQAGgGAJgEQAKgEALgDIAZASIAGAGIAFAIIAEAHIAjgqIAPAVIAPgYIATAiQAigTAVAaQAIAKAFAMIAWgpIAPAGIAHAGIAGAHIAHALQALgZAXAJQAQAFAIASIAGAJIAFgKQAMgUAVALQAEACADAFIAFALIAKgKIADAEIAdAXIAZgsIAUAYIArgIIALAEQACgFgGgWQgGgVAHgKQANAEAJAdQAIAbARACQAMgMgCghQAMgKAIAYQALgBASgvQARguAXACQAAAVgfAoQAOACAWgRQAXgUATABQgJAYgdAVQgpAfgGAGQANAEAdgKQAbgJAJAFQgBAHgDAGIgDAFQgJAOgRAKIgzAaQAIAHAVgIQAbgKAPAEQAHAVgLAXIgUAmQAQAFAPgTQARgWANgCQACAagdASQALAGAPgKQASgLAL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");
	this.shape_28.setTransform(275,202.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#0230E3","#0099FF"],[0,1],14.7,23.7,14.7,-23.6).s().p("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");
	this.shape_29.setTransform(275,171.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#FFFFFF","#FF9966"],[0,1],8.8,55.8,8.8,-55.7).s().p("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QAAABAAAAQgBAAAAABQAAABAAABQAAAFAPAPQARASAPAAQAQAAAGgPIADgLQAFAHAOAOIAKAQQAHANAEAAIAEAAIAAgDIgCgJQgBgHAJgOQAIgOAAgJQAAgagVAAIgNADIgFgbQAAgHAIgEIACgCIAAABQADAMAoAAIAAAAIAAADIAHABQACAAADgCIAGAAQgBAuAFALIAGABQATAAAYgoIAFAOIACADQgWA2gGAbQAMAIAcANIgzA2QgWgUg8ANQAFALAPAWQAOATAEAQQgEAIgPAMQgPALgEAKQAdgBAxgQQgKA3ABANQAWgCAmgxQAFAEASAFQARAEAFAHQgZASgaAsQAIABARgLIAKgGQAagQAKABQgKAMggAOQgcAMgIARQgCAEgDARQgCAMgKAHQgQAMgYAAIgKgBgA2ijKQADAHgGAAQgHAAAAAEQgJgDATgIgA9lkNQguALgYg3IAAgNQgNgegHgMIAGgDQAKAAAKgIQAIgIACgGIAIAHQALAHAOAAQAQAAALgNIAGgLQAHgHAFAEQAEAEAGgEIAAAAQgLAaALAyQAwATAJALIACA9QgCAhgUAEIgGABQgdAAgkhEgA2Nj9IATgPQAUgQAIABQAMADACAQQADAQAKACIADAFIgNADQgKgPgUgQQgEARABAYQgggNABgMgAmskEQgTgRgTABQAcgIA2gUQALAYgPAiIgFABQgSAAgRgPgAoPkgQAAgFgCgCIgBAAQAAgEACgEQAEgHAFgCIAWgKQARgCAOAHQAGgXAzAAQACgFAAgGQANgCAAgFQgBgDgFgCQABAFgBABIgHAAQAAgJgDgNQAFACAGAAQAMAAAWgLIABACIgDAIIgCAMIADAOQACAGACAEIgNAMQABAFAHAFQAGAEAAAGIgJAAIgBAAIgBAAIAAAAQgWAAgfAKQgqANgQABIAAADIgJABQgjAAAAgGgA2ilHIAoAGQATAFACAQQgqAJgaACQAAgSAHgUgA0/mtIgVgFQAOgGABgTQACAFAAANIADABQAIAAATgNIANgJQACARASAbQADgJAbgGIACAAQgLAWAIAvQgFAJgPAPQgcgrgogugAzSm3QANgGAFgIQAFAGASAHIgeABIgLAAgA2PnTIABABIABAVQAAACADACIgWABQALgLAGgQgA8foCIACABQAIgCALgHIAOAHQAHAAAIgOIAOAIIADgBIgIALIgLAOIgEACQgGABgBAJIgBABQgkAAAAgegA53n3IgIgHIABAAIAAgHQgGgGgHgCQAKgDAJgIQAMgKABgHIAAgBIAXAAIgBACIgCADIgCADQgEAGAAADIAAADQADAMARgGQAWgIAIAFIAJAGIAEAJIgGAAQgZAAgDALQgEALgUAAQgVAAgKgJg");
	this.shape_30.setTransform(275,95);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E4B445").s().p("AhtARQgDAFgFgEIgBgBQghgBgDgCIAAgCQhhACgcgUQAUgMAYABIAHgCIAFAAIAEAAIAHAAIACAAIAAAAID1ACIApAAIAhABQBYgIBTAZIgPAFQhgANhigBIgXAAIiaACIgDgDg");
	this.shape_31.setTransform(198.5,319.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#00FFFF").s().p("AkwIvIAAAAIADACgAollDIABgBIAAABIgBAAIAAAAgAImm9IAAAAIgBABgAgFowIABAAIABACg");
	this.shape_32.setTransform(130.8,146.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#009900").s().p("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");
	this.shape_33.setTransform(191.4,160.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EAC46A").s().p("AgKADIACgCIAEgBIABAAIACgCIABAAIAMAAIgXAFg");
	this.shape_34.setTransform(460.2,281.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#00CC33").s().p("AZwCWIAFADIAAAAgA5viYIABAAIgGAHg");
	this.shape_35.setTransform(255,275.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#00CC00").s().p("AZwCjIgCgCIAAAAIAHAEIgBAAgA5wiNIABABIgFAHgAxciMIAEADIAAABgAzwihIAGgDIgGADg");
	this.shape_36.setTransform(255,274.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AH9ENQgvgPgLgBQgSAEgJAAQgWgKgMgBQgXgBg5AMQg2ALgggFQgogJgSgDQgggGgZAMQhBgdhrAuQgRgUggAEQgoAJgXAAQAqgdCZgkQAUAOAHAUQAFgBAIgKQAHgIAIgBQAcgCBTAPQA2gdApACQATACAiANQAfANAPgBQAMAAAWgLQAVgMANAAQAWgCAcAIQAgAKARABQAug1BuATQAJAHAFAbQgTAMgPAHQgcAMgbgFQgagUgSgDQgIAEgDAPQgEAWgCADQgLAGgOAAQgPAAgSgHgAnhEBQAwgSAUAVQAXgKAEgEQAIgDAVAHQAOAFgFgMQAPABAZgEQgBAGAHAEQAFAFAAAFQguAKgkgKQgSAPgiAAIgBAAQgkAAgNgSgAn8B+QgcgEgKgWQgXAWgoABQgsABgOgbQggAXgRgUQgBggAngHQAogGAHAcQAWgUAnADQAkACAaATQAKgWAvgEQAxgDAJAZQAHACABgKQACgIAHADQAhAgg1AGQg3AHgQgZQgGACAFAHQAFAIgBADQgNARgWAAIgJgBgAneg2QgHgKgDgVQg8AIgZgEQAXgfBIAYQgZgKgWgVQAZgiArAzQAEgEgFgGQgGgGADgIQAWgZAwAMQAbAGAyASQgBgJgKgFIgRgHQAXgWAlAIQAhAHAUAVQADgGgHgRQgHgSAEgOQAPgVAkgTQAHABAEAKQADAMAGAAQAEgLgEgcQgEgWALgNQATgLAWAHQAVAHAFASQgCAJgRAKQADAJAKgFQALgFAGAFQAOASgKAoQATAFgCgdQAdgZASASQAHgBARgOQAOgLAPAGQAGALAHATQgwAjAEAXQBogqCFgdQAAAIgKAMQAlAEAHAhQgHAPgbgBQgaAAgOgKQgGAEAAAMQgCAMgFAGQg4ALgdgPIgRAmIgkAAQgVAAgFgKQgYAVgMAJQg2gUgQgbQgEAQgHAEQg9AHgNgmQgFAEADAIQACAIgEAEQgXANgdgKQgagJgOgSQgKAVggAJQghAJgUgPQg2AogmAAQgTAAgPgJg");
	this.shape_37.setTransform(355,85.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#996633").s().p("AbsERIABAAIAAAAgA0SCeIAfgRQgMgCAFgEIANgLQAEADgEAEQgFAEAFAGQgEAEgLAHQgIAHAKAIQgPgIgJgBgAzcBhQAJAEAFATQgDAJgOAIQAFgdgCgLgAiqgKQAEgKAAAKQAAAFgBAAQgBAAgCgFgAdWg2QgCgIAFgGQAGgHABgDQAWAHAFAAQgDAMgLAWQgWgPgBgCgAlLi7QADgJABgLIABAAIAAAVgA91jSQgGgHACgHQAGADAIAKQgDAEgCAAQgDAAgCgDgAjukPIABAAIgFAEQgGAFgBAEIgEAAQgBgMAQgBgAg9kCQAAgGgDgBQgBgEAJABQAJABgBgFQAKADgHAGQgGAFgHAAIgDAAg");
	this.shape_38.setTransform(270.2,88.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#0099FF").s().p("A/DFjIAFgCIABACgAiXhhIABAAIgBAYIgBAAQABgLAAgNgAkDhUIgBgDIACADIgBABIAAgBgAe2hlIAOAAIgEAGIgKgGgAg/iJIABAAIAAAAgA7iisIAIABIgGACIgCgDgAiOi8IABgBIAAACgA5ajkIADgJQABADgBAIIACAAQgFADgEAFIAEgKgAwGjqIACAAIgBABgA1tlhIAAgCICnAAIipAIIACgGgA+WliIAZAAIgZAAgA2PljIADAAIAAABIgDgBg");
	this.shape_39.setTransform(252.7,75.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#02C127").s().p("A6HEVIAAABIgDACgEggygDAIAAABIgBAAgAeVjJIAAgBIABABIgBAAgEAgTgEDIAAAAIAHABIAAACIgHgDgEAgygEWIACgBIgCACg");
	this.shape_40.setTransform(298.2,209.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#0000FF").s().p("AgDAGIgBgCIAEgJIAFAAQABALgHAAIgCAAg");
	this.shape_41.setTransform(492.9,188.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#996699").s().p("AEmBhQgFgkgPg2QgRg8gEgZQAVgMAhAGQAuAJAIABQARgBAigNIAgAEQAJABAIgCIADACQAMgBAMgIQAMgJAZAAQALAAAeAQQAsADAUAFQARAGAXAAQASAAAIgGQAIgGAfAAIAeAEIgMAGIgkANQgJAEgKAOQgPARgEACQgiAXgIgIQgNgQgjAIIgWAJQhDAYAAALIADAEQAXgVAogLQAFgBAMgGQAmgPAIAMQAJAKAogQQAOgGAGgLQADgGAQgMQADgEALgEIAUgFQAHgGAWgMQAbgOALAAQAKAAAWAHQAVAHAQAAIAQgDIAAC6IlXABIkKgFgAkJBjQgUgEhrgBIhVgBIgWABIADgCIgsABQgfAEgEABQg5gDheACQh2ABg6gEIAAgBQAIgJAOgBIARgOIAQgEIAIgBIADAAIBUgEQAYgEA6gSQA0gQAhgDQAQgCAjACQAPgCAagPQAagNAOgCQAhgGBCAJQARgBA3gMQArgIAbABIA+ADQAOgDAbgRQAQgDAzACQAqACAVgMQgBCAAFAXQh3AFhhABIgkAAIgVABIgRgBgABcBhQgEghACgyQADg1gBgZQAqgJAXACQATBAAWBoQgVACgaAAQgbAAgggCg");
	this.shape_42.setTransform(437.1,140.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("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XgBIgBgCIgIAAQghAAgPgcQgJgQAAgQIABgPIACgBIApARQAIADAFADQAAgSACgPQANAFAwgFIADAgQABAIgBAHQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAABIgFATQAAAIAHAKQAognAIgVQABAcgUASQgIAHgRALIADADIgBADIgEABQgDAAgDgDIgFADQAEARANAHQgKAOgOACIgBAQQgBAfAPANQAagnALgTQAOgaAAgFQgCgHAAgDQABgFARAAQALgBABgFIAAgBQgJgDgCgGQAYgxAKgMIgZgEQgIAJgHAAIgDAAIgBgDIAIgGQgMABgDAKQgJgDgDgFIgCAAQgoAAAAg5IAEgXIAaAVQAQALADAMIA1gNIAGgVIAEABIABAJQgPAhgMARQAaAAAOAEQggAQgJA3QAQABAEgcQAPAAAGgQQAKgWADgDQAKACAFALIAJASIA3giQAEAFgEAdQAwgLAeABQgOAVgsAaQAAALAXAAQAXgBgCAOQAYgZgHgQQAOABAIASQAJATAJADQAUgBAegJQgCAOgQAaQgJAWAbANQgKAIgRgBQgTgDgGADQgNADgTAVQgSAVgPACQgGgOAIgQQAMgTADgJQgOgEgcAFQggAHgOgBQASgSA8gMQgKgOADgOIgOAEQgIACAFAZQgWgGgMgFQgagRgBABQgNACgLAdQgMAggMAIQgNgHADgaQAHgcAAgKQgNgGgZACQAEAFADAJQggAFgXAeQgPARgZAkQAAAPAWAFQATAEARgHQAtApAkgUQAdAKAGAlQAGAmglAHQgDAOgLAXIAKARQAnAAAagVQgQgYAJgUQAKABAAgEQAPADACAUQAJgBAPgLQANgJAOABQgCAWgLACQABADAJADQAIADgBAIQgEASgqgFQgpgGgFAXQAXAHAEAYQApgcAUALQADAKgGAKQACAKAVAEQgEAKgaAEQgBAFAEAPQACALgFAGQgWADgMgiQgoApgSgDIAmg3QgIgUgTgRQgYAKgpgSQgggPgTAaQAFAKAOASQALASgKATQgWACgOgdQgWAQgQgJQgCgLAGgIQAJgMAAgDQgWABgMgIQACgKAJgOQAfACAXAPQAUgaAXgBQACgKgIgGQgKgHAAgHQAhgdALgTQgSgXgugBQg6AEgfAAQgHgOgdgGQgigIgIgGQAEgRgBgLQgFgKgIg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BQgeADgmAAIgvABIgMgCIgHgBQhvgFgvAGQABA2AHB+IADArIAAB8IAaAEIABAAIgBgBIgDgyIAIgBQATABAHAUQALAhAGAEQAHgHABgaQABgbAFgIIAAAAQAJACAEAQQAFARAFACQAKgMAKgbQAFgEABgLIAAAAQAPghAfgBQAEAGAAAfQAEADASgIQATgJAKAHIgDALIAGgDQgHAHABADIAAAAIgCACIgFAEQgFAIgJAIQgYASgKAKQAGAEASgEQATgDAHADQABAGgBAGIAHgBQARAAgEAPIgFALIAAABIABAAQALACgBgOQgBgRARAAQAIAAAMAGIgCgUQABgSASAAQAQAAAJANIAMARQAAgHAEgHQAGgMAPAAIAHACIAQAIQgDgKAHgNIAFgGIABgCIgCABQADgEAAgCIAAgCQAGgCAKAAQAVAAAHAKQACADABAFIAAgIIABgIQAFgRAbAAQAQAAALANIAMASQAAgFABgDQAGgHAQAAQAOAAAFAOQACAAAMgJQAIgEAHgDIAAAHQgHACgGAFQgLAIgDAAQgHAAgDgGQgEgHgJAAQgPAAAAAJQAAAIgEAAQgEAAgNgQQgMgRgPAAQgYAAgBAQQgBAJAEAPQgBAAAAAAQAAAAAAAAQgBAAAAABQgBAAAAAAQgFAAgHgNQgFgKgLgDIgGACQgQAFgCARQgBAHAAAUQAAAAAAABQAAAAgBAAQAAAAgBABQgBAAgCAAQgCAAgJgKQgKgJgHAAQgMAAgDAIQgBAFABAFQABAFAEATIgBAFQAAAAAAABQAAAAgBAAQAAAAgBABQgBAAgCAAQgeg2gKAAIgOABIgBAHQAAAOAGAKQAEAKAAALIAAALQAAAAAAAAQAAABgBAAQAAAAgBAAQgBABgBAAQgVgigFAAIgOABIAAASQAJAGACAMIAAAKQgBACgEAAQgNAAAAgVQgNADgJAGQgIAIgFADQgGgCAAgFQAVgbgBgLIAAgBIAAAAQgGAAgFAGQgEAEgDABIgDAEIgeAaQADACAbAEQAEAGgHAlQAEADAJgIQAKgJAHAAQAJAHABAMQABAOgIAIQACADANgFQAPgFAFAHQACAPgIAMQgLAKgEAHIAiADQAAAbgbALQAEAJASgDQATgEAHAFQgIAagkASIAeAHQATADACAOIggANIAUAHQAMADAAALQgEAOgYAD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PADIAZADQAaADAUgCIABgDIAVAAIACgBIgBABIAhAAIAjABIgBAAIAfgBIASgDIAOADIBtgIQATgCAJACQAIABAXgEIAIgCIBMgCIAPAAIARAAIAIABIALAAIADAAQLQAEAFACIAQAFQFzABAwACQBKgFBYAIIBAAFQATgFACgIIAAAAIgCgEIgCgJIgBAAIAAAAIABgBIgBgJIAFAAIgTgFQgLgDgBgJIAZgHQALgEABgDQgagFgBgFQANgFAngDQAjgEAMgIQgFgIgWgDQgWgDgGgHQAPgIAlgJQgKgJgeACQgeAAgIgGQAKgIAZgNQAVgMAIgPQgtgDgDgHQAdgPACgTQgGgCgUAFQgOACgEgJIAUgSQAKgKABgQQgLgBgSALQgPAKgLgGQAdgTgCgZQgNABgRAXQgPATgQgGIAUglQALgXgHgUQgPgDgbAIQgVAIgIgIIAzgXQARgLAJgNIADgFQADgGABgHQgJgFgbAJQgdAKgNgFQAGgFApgfQAdgVAJgYQgTgBgXATQgWASgOgCQAfgoAAgVQgXgCgRAuQgSAvgLAAQgIgXgMAKQACAggMAMQgRgCgIgaQgJgdgNgEQgHAKAGAVQAGAWgCAFIgLgEIgrAIIgUgYIgZAsIgdgXIgDgEIgKAKIgFgLQgDgFgEgCQgVgLgMAUIgFAKIgGgJQgIgSgQgFQgXgJgLAZIgHgLIgGgHIgHgGIgPgGIgWApQgFgMgIgKQgVgagiATIgTgiIgPAYIgPgVIgjAqIgEgHIgFgIIgGgGIgZgSQgLADgKAEQgJAEgGAGIgDgGIgEgGIgFgFQgKgHgNACIgDATIgQAHIgVgSIgbARIgUgMIgNABIgMAEIgMAHIgLAJIgLgIQgUgIgOAUQgIANgHAOQgJgOgOgIIgKgGIgIAKIgIALIgDADIgRgTIgLAPIgGAIIgQgPQgGAQgNAMIgIAHIgKgHIgKgHIgBgBIgKgIQgMgCgHAIIgNAOQgCACgEgBQgGgBgLgGQgHAQgHAFQgHgUgXgHQgXgHgSANQgJABgCgJQgBgFgBgCIAAAAIgBAAQgEAAgCADIgHAJIgGgGIgXACIgCAGIgOgRQgFACgFAEQgEAEgDAGIgEAMIgOgPIgLAIQgIAHgFAJIgBAAIgDgNIgeALIgJAGIgEgEIAAgHQAAgBAAAAQAAAAAAAAQgBAAAAAAQAAAAAAABQgDgCgDAAIgGANIgDAJIgKgJIgCgBIgKABIgCACIgCAIIgCAEIgDgFIgIgNIgFgFIgSAFIAAACIgDACIAAAAIgEgMIgOgGIgIAAIgJAJIgCgEIgBgEIgBgRIgQgCIgDAJQgBAAgBAAQAAAAgBAAQAAAAAAAAQAAgBgBAAQgGgJgDgKQgIADgHAEIgHAGIgDgGQgGgBgDACQgKAEgJAHIgKgIIgOAGIgFAEIgEAFIgTgOIgOAEIgBADIgDAJQgSgMgQANIgKAIIgJgRIgIgEIgaACIgPgLIgLAEIgEADIgGAIIgJACIACgJIABgIIgDgDIgTAFIgLACIgBgPIgGgGQgHAHgHAFQgIAGgJADIgGgQIgFgBIgOAdIgFADIgHgJIgNAIIgHAHIgIgIQgNgFgLAIIgRANIgYgQQgEACgEADQgJAHgCAKIgCAKQgBABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQgFAAgGgMQgEgLgHAAQgMAAgDAMQgCAOgCAAQgNgSgFgFQgGAFgDAOIgEAJQgBAEgCAAQgDAAgKgMIAAgBQgJgCgEADQgEADAAAHQgagRgmARQgCgZgCgDQgMgCgIAIQgKAHgEACQgDgYgOgCQgTACACAUQgIAAgFgGIgKgMIgKAEIACADQgFAEgMAEIgKADIgTAGIgGgBIAAgEIAAAAIAAgIQAAAAAAgBQAAAAAAAAQgBgBAAAAQgBAAgBAAQgIAAgHAFQgJAGgEAAQgOAAgEgRIggALIgFgBQgBgCgHgWQgGABgKAKQgKAKgOACQgEgDgDgIIgEgOQgFAEACAQQgBADgEAAIgTgZQgEAFgEADQgDADgFAAQgKAAAAgIIABgIQgOgJgPABQgNAAgOAHQAAgHAIgFQAJgFAAgGQgOgMgNAdQgHABgDgHQgDgHgEAAQgJAMAGAYQgOABgKgNQgMgPgGgDQgEABgNAdQgagbgbAAQgSAJAKAWQgcABgagWQgFAAAAAIQgBAJgEAAQgGgPgXgJQgSgGgDAMIgBAJQgsgKgmAVIgFgSIgJgBIgCAKIgSgcQghAHAJAXQgLgagWANIgDgHIgFACQAAAAAAAAQgBAAAAAAQgBABAAAAQgBABAAAAIgIAFIgKgIIgPADIAAAOIgLgPQgZgEgUAOQgYgYghAeIgEgHQgegRgbAUIgJgGQgQAGg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");
	this.shape_43.setTransform(275,192);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.btn_goNext},{t:this.btn_goBack},{t:this.instance_1},{t:this.btn_menu}]}).wait(406));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(284.2,201.8,537.1,401.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;