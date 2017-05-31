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
		{src:"sounds/_2a.mp3", id:"_2a"},
		{src:"sounds/_3b.mp3", id:"_3b"},
		{src:"sounds/_4b.mp3", id:"_4b"},
		{src:"sounds/_4c.mp3", id:"_4c"},
		{src:"sounds/_5b.mp3", id:"_5b"},
		{src:"sounds/_6b.mp3", id:"_6b"},
		{src:"sounds/_7a.mp3", id:"_7a"},
		{src:"sounds/_7b.mp3", id:"_7b"},
		{src:"sounds/JinglePreposition.mp3", id:"JinglePreposition"},
		{src:"sounds/MenuPreposition.mp3", id:"MenuPreposition"},
		{src:"sounds/s_coolcheer.mp3", id:"s_coolcheer"},
		{src:"sounds/above.mp3", id:"above"},
		{src:"sounds/across.mp3", id:"across"},
		{src:"sounds/alongside.mp3", id:"alongside"},
		{src:"sounds/around.mp3", id:"around"},
		{src:"sounds/behind.mp3", id:"behind"},
		{src:"sounds/below.mp3", id:"below"},
		{src:"sounds/beneath.mp3", id:"beneath"},
		{src:"sounds/between.mp3", id:"between"},
		{src:"sounds/down.mp3", id:"down"},
		{src:"sounds/from.mp3", id:"from"},
		{src:"sounds/_in.mp3", id:"_in"},
		{src:"sounds/infront.mp3", id:"infront"},
		{src:"sounds/inside.mp3", id:"inside"},
		{src:"sounds/into.mp3", id:"into"},
		{src:"sounds/near.mp3", id:"near"},
		{src:"sounds/off.mp3", id:"off"},
		{src:"sounds/on.mp3", id:"on"},
		{src:"sounds/out.mp3", id:"out"},
		{src:"sounds/outof.mp3", id:"outof"},
		{src:"sounds/outside.mp3", id:"outside"},
		{src:"sounds/over.mp3", id:"over"},
		{src:"sounds/preposition.mp3", id:"preposition"},
		{src:"sounds/slurp.mp3", id:"slurp"},
		{src:"sounds/to.mp3", id:"to"},
		{src:"sounds/toward.mp3", id:"toward"},
		{src:"sounds/under.mp3", id:"under"},
		{src:"sounds/up.mp3", id:"up"},
		{src:"sounds/upon.mp3", id:"upon"},
		{src:"sounds/within.mp3", id:"within"}
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



(lib.Symbol228 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AIysBQBhg1A1AtQCNB4hMDQQg/Cwg2C2Qg0CshBCnQhECvhjCLQhvCdikBJQinBLjNgdQi5gaAOhUQANhUhjhwQhjhxh3hpQh3hoCBjzQCAj1DFi3QDFi3BrhHQBrhHB5BAIAPgPQB9h8CaASQBoAMArA+IAAAAQh9AogyAcQjLDUg7CwQg5CphXCoQhPCXgsDCQA+CSheAvQhdAugyghQgygih9icQh+icBjhpQBihpCQiNQCDiDBKitQBGimB7iC");
	this.shape.setTransform(80.5,84.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF3300").s().p("Ak9LAQgygih9icQh9icBihpQBihpCQiPQCEiBBJitQBGimB7iCIAPgPQB9h8CaASQBoAMAsA+IgBAAQh9AogxAcQjLDUg8CwQg5CphWCoQhQCXgsDCQA+CShdAvQg2AbgoAAQgdAAgVgOg");
	this.shape_1.setTransform(80.4,71.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("AkPMuQi5gaAOhUQANhUhjhwQhjhxh3hpQh3hoCBjzQCAj1DFi3QDFi3BrhHQBrhHB5BAQh7CChGCmQhKCtiDCDQiQCPhiBnQhjBpB+CcQB9CcAyAiQAyAhBdguQBegvg+iSQAsjCBPiXQBXioA5ipQA7iwDLjUQAygcB9goIAAAAQBhg1A1AtQCNB4hMDQQg/Cwg2C2Qg0CshBCnQhECvhjCLQhvCdikBJQh4A2iMAAQg2AAg6gIg");
	this.shape_2.setTransform(80.5,87.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-1,162.9,171.4);


(lib.Symbol227 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AAgAUQgHgCgFgEIgzgh");
	this.shape.setTransform(111.6,13.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AiFBhQAJgiANgsQANgmAbgcQAcgbAvgHQAZgEAQgXQAegsAlAqQArAygsAWQgqAVgigeQgNgLgYAIQgsAPgQAjQgSArgHAtQgFAfAMAN");
	this.shape_1.setTransform(121.7,1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AiFBhQAJgiAOgsQAMgmAbgcQAcgbAvgHQAZgEAQgXQAfgsAkAqQArAygsAWQgpAVgjgeQgNgLgYAIQgsAPgQAjQgRArgIAtQgFAfAMANg");
	this.shape_2.setTransform(121.7,1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF0000").ss(1,1,1).p("AAPAAIgdAB");
	this.shape_3.setTransform(96.6,8.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("Ag6BsQgTgqgFgvQgGg3AwgPIAOgFAgcg+QANg0AyAHQAOACAKAHQAuAegnAmQgTATgWgMQgTgKgOADQgpAIABAwQACAtATAj");
	this.shape_4.setTransform(101,-2.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AhSATQgGg3AwgPIAOgFIgCgGQANg0AyAHQAOACAKAHQAuAegnAmQgTATgWgMQgTgKgOADQgpAIABAwQACAtATAjIgfACQgTgqgFgvg");
	this.shape_5.setTransform(101,-2.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("ABAlPQgFACgEAKQgFAJgPBAQgPBAgUAVQgTAUgLAoIAAAAQg0ASALA+IAAACQALA9AygTIAGgDQAwgagGg5IgGACIAAgDIANhCQAKg3A/hUIABAAQA5gjgng9QgGgKgegIQgYALgNApIgDAJQgKAcAJASQAKAQAigGIAOgDIAAAAAgehpQACBoBChCAhHgZQgXgFgcBJQghBaAEBfQAEBUAUBMQgPifAzhWQA0hWAdgm");
	this.shape_6.setTransform(68.4,81.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AiXDkQgEhfAhhaQAchJAXAFIAAACIAAACIAAACQAKAqAdAAIABAAIAAAAQAJAAALgEIABAAQgdAmg0BWQgzBWAPCfQgUhMgEhUgAggAXQgdAAgKgqIAAgCIAAgCIAAgCQgLg+A0gSIAAAAQABA/AaAAIAAAAIAAAAQAOAAAZgYIABgBIABAAQAGA5gwAaIgGADIgBAAQgLAEgJAAIAAAAIgBAAgAgDgqQgaAAgBg/QALgoATgUQAUgVAPhAQAPhAAFgJQAEgKAFgCQANgpAYgLQAeAIAGAKQAnA9g5AjIgBAAIgOADIgCAAIgPABIgBAAIAAAAQgSAAgHgJIgBgCQgEgIgBgLQAAgMAGgPIADgJIgDAJQgGAPAAAMQABALAEAIIABACQAHAJASAAIAAAAIABAAIAPgBIACAAIAOgDIAAAAQg/BUgKA3IgNBCIAAADIAGgCIgBAAIgBABQgZAYgOAAIAAAAIAAAAg");
	this.shape_7.setTransform(68.4,81.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("ABJkHQgCg2gZgPQgqgcgNAwQgdAzAuAoABJkHIgFAjQgGApgggSIgRgMQgEASAMAuQAKAqgTBKIgEAmQgDAiAdgGQAQgXANgcIANgpQAShFgFgxQgGgygKgggAgHA9IAAgBIA2ADIAJgCAgHA9IgBACQgMBYgNAzQgQBAgoBNQBYhRAdhCQAfhCgDhDIAAgCQAZgYAAgRQAAgRgNgXAAMglQgjALgLAaQgJAZAjAkIABAA");
	this.shape_8.setTransform(91,75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AghDKQANgzAMhYIABgCIAAgBIA2ADIg2gDIgBABQgjgkAJgZQALgaAjgLIgEAmIAAAEQgBAZATAAIABAAIAAAAIAHAAIAAgBQAQgXANgcQgNAcgQAXIAAABIgHAAIAAAAIgBAAQgTAAABgZIAAgEIAEgmQAThKgKgqQgMguAEgSIgFgEQgugoAdgzQANgwAqAcQAZAPACA2IgFAjIAAABIAAACQgFAZgPABIgBAAIAAAAQgHAAgKgGIAAAAIgRgMIARAMIAAAAQAKAGAHAAIAAAAIABAAQAPgBAFgZIAAgCIAAgBIAFgjQAKAgAGAyQAFAxgSBFIgNApIAFACQANAXAAARQAAARgZAYIgJACIAJAAQADBDgfBCQgdBChYBRQAohNAQhAg");
	this.shape_9.setTransform(91,75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AgRjVIABgGIAKgjQAGgagDgRQAQAOAMAWQAMAWAYBGQAOAsgUBjIgGAaQgiAkgGgtQAOhAgBgNQgHg5gghGQgTgHgMgIQgWgNgHgxQgGgxArgDQAiAVADAYAgIA5IgCgDQgZgdAsgiAA3gaQAIAGALAQQAKAOgNAdIgCAHQgCAGgcAQQgaAPgVgaABHAnQAFATgHBPQgHBPhPB/QgCghAThOQAUhOgchh");
	this.shape_10.setTransform(106,67);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AAADoQAUhOgchhIAAAAIABABIAAAAQAMAPAPAAIABAAIAAAAQAHAAAIgDIABAAIABgBIAAAAIABAAIAAgBQAcgQACgGIACgHIgCAHQgCAGgcAQIAAABIgBAAIAAAAIgBABIgBAAQgIADgHAAIAAAAIgBAAQgPAAgMgPIAAAAIgBgBIAAAAIgCgDQgZgdAsgiIAAABIAAABQAEAWALAAIAAAAIACAAQAJgBAOgOIAGgaIgGAaQgOAOgJABIgCAAIAAAAQgLAAgEgWIAAgBIAAgBQAOhAgBgNQgHg5gghGIABgGIAKgjQAEgSAAgNIgBgMQAQAOAMAWQAMAWAYBGQAOAsgUBjQAIAGALAQQAKAOgNAdQAFATgHBPQgHBPhPB/QgCghAThOgAgwjkQgWgNgHgxQgGgxArgDQAiAVADAYIABAMQAAANgEASIgKAjIgBAGQgTgHgMgIgAgDkpIAAAAg");
	this.shape_11.setTransform(106,67);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FF0000").ss(1,1,1).p("AAfAGIBBAeAhfgZIAhgK");
	this.shape_12.setTransform(104.9,11.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(1,1,1).p("AJCgzQAbAJARghQAagygYghIgQgFIgLgCQgOgBgLAFAJCgzIgXgOQglgeAcgrQALgRAPgGQgVg3g6gbQhHghhOACIgUABQghADgrAdQgbAngPA/Ig0AIIgCgFQgthih0guQhSgshdgLQhagMhaAMQhhANhPA6QhNA5gOBdQgOBjAnBcQAfBKA7A1QBIBABaAkQBTAiBXAEQBdAEBYgdQAqgPAkgaQAogcAegqIABgCIAIgNQAaADA/gEIADgBIAwgVQAdgPAUgUIAagiIALgZADUiJIACgDIgIABIAGACQCtARADCUIAAAEQgCAWgGAUIAfgBIAfgGQAfgJAegRQA7gkAQg4ACaC/IAbg5IAOhHIgBgoQgIhQgghK");
	this.shape_13.setTransform(63.6,34.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AibFWQhXgEhTgiQhagkhIhAQg7g1gfhKQgnhcAOhjQAOhdBNg5QBPg6BhgNQBagMBaAMQBdALBQAsQB2AuAtBiIACAFIA0gIQAPg/AbgnQArgdAhgDIAUgBQBOgCBHAhQA6AbAVA3QgPAGgLARQgcArAlAeIAXAOQgQA4g7AkQgeARgfAJIgfAGIgfABQAGgUACgWIAAgEQgDiUitgRIACgDIgIABIAGACQCtARADCUIAAAEQgCAWgGAUIgLAZIgaAiQgUAUgdAPIgwAVIgDABQg/AEgagDIAbg5IAOhHIgBgoQgIhQgghKQAgBKAIBQIABAoIgOBHIgbA5IgIANIgBACQgeAqgoAcQgkAagsAPQhKAZhQAAIgZAAgAIai+IhBgegAFaj8IAggKg");
	this.shape_14.setTransform(60.7,34.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CCCCCC").s().p("AgFA4IgXgOQglgeAcgpQALgRAPgHQALgFAMABIALACIAQAFQAYAigaAvQgNAbgUAAQgEAAgFgCg");
	this.shape_15.setTransform(122.1,23.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,1,1).p("ABAlPQgFACgEAKQgFAJgPBAQgPBAgUAVQgTAUgLAoIAAAAQg0ASALA+IAAACQALA9AygTIAGgDQAwgagGg5IgGACIAAgDIAOhJQANg1A7hPIABAAQA5gjgng9QgGgKgegIQgYALgNApIgDAJQgKAcAJASQAKAQAigGIAOgDIAAAAAhHgZQgXgFgcBJQghBaAEBfQAEBUAUBMQgPifAzhWQA0hWAdgmAgehpQACBoBChC");
	this.shape_16.setTransform(37.9,77.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AiXDkQgEhfAhhaQAchJAXAFIAAACIAAACQAJAsAeAAIABAAIAAAAQAJAAAMgEQgdAmg0BWQgzBWAPCfQgUhMgEhUgAggAXQgeAAgJgsIAAgCIAAgCQgLg+A0gSIAAAAQABA/AaAAIAAAAIABAAQANAAAXgWIACgCIACgBQAGA5gwAaIgGADQgMAEgJAAIAAAAIgBAAgAgKATIAAAAgAgDgqQgaAAgBg/QALgoATgUQAUgVAPhAQAPhAAFgJQAEgKAFgCQANgpAYgLQAeAIAGAKQAnA9g5AjIgBAAIgOADIgBAAIgBAAIgPABIgBAAIAAAAQgTAAgHgLQgEgIgBgLQAAgMAGgPIADgJIgDAJQgGAPAAAMQABALAEAIQAHALATAAIAAAAIABAAIAPgBIABAAIABAAIAOgDIAAAAQg7BPgNA1IgOBJIAAADIAGgCIgCABIgCACQgXAWgNAAIgBAAIAAAAg");
	this.shape_17.setTransform(37.9,77.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1,1,1).p("ABJkHQgCg2gZgPQgqgcgNAwQgdAzAuAoAAMglIgEAmQgDAiAdgGQAQgXANgcIANgpQAShFgFgxQgGgygKggIgFAjQgGApgggSIgRgMQgEASAMAuQAKAqgTBKQgjALgLAaQgJAZAjAkIABAAIgBACQgMBYgNAzQgQBAgoBNQBYhRAdhCQAfhCgDhDIAAgCQAZgYAAgRQAAgRgNgXAA4A9IgJACIg2gDIAAAB");
	this.shape_18.setTransform(61.2,75);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AghDKQANgzAMhYIABgCIAAgBIA2ADIAJAAQADBDgfBCQgdBChYBRQAohNAQhAgAgHA8IgBABQgjgkAJgZQALgaAjgLQAThKgKgqQgMguAEgSIgFgEQgugoAdgzQANgwAqAcQAZAPACA2QAKAgAGAyQAFAxgSBFIgNApQgNAcgQAXIAAABIgHAAIAAAAIgBAAQgTAAABgZIAAgEIAEgmIgEAmIAAAEQgBAZATAAIABAAIAAAAIAHAAIAAgBQAQgXANgcIAFACQANAXAAARQAAARgZAYIgJACgAAvjHQAQAAAFgaIAAgCIAAgBIAFgjIgFAjIAAABIAAACQgFAagQAAIAAAAIAAAAQgHAAgJgGIgBAAIgRgMIARAMIABAAQAJAGAHAAIAAAAIAAAAg");
	this.shape_19.setTransform(61.2,75);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(1,1,1).p("AgRjVIABgGIAKgjQAGgagDgRQAQAOAMAWQAMAWAYBGQAOAsgUBjQAIAGALAQQAKAOgNAdIgCAHQgCAGgcAQQgaAPgVgaIgCgDQgZgdAsgiQAOhAgBgNQgHg5gghGIgfgPQgWgNgHgxQgGgxArgDQAiAVADAYAA3gaIgGAaQgiAkgGgtABHAnQAFATgHBPQgHBPhPB/QgCghAThOQAUhOgchh");
	this.shape_20.setTransform(86.3,67);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AAADoQAUhOgchhIgCgDQgZgdAsgiIAAABIAAABQAEAWALAAIAAAAIACAAQAJgBAOgOIAGgaIgGAaQgOAOgJABIgCAAIAAAAQgLAAgEgWIAAgBIAAgBQAOhAgBgNQgHg5gghGIABgGIAKgjQAEgSAAgNIgBgMQAQAOAMAWQAMAWAYBGQAOAsgUBjQAIAGALAQQAKAOgNAdIgCAHQgCAGgcAQIAAABIgBAAIAAAAIAAAAIAAAAQgJAEgIAAIAAAAIgBAAQgPAAgMgPIgBgBIABABQAMAPAPAAIABAAIAAAAQAIAAAJgEIAAAAIAAAAIAAAAIABAAIAAgBQAcgQACgGIACgHQAFATgHBPQgHBPhPB/QgCghAThOgAgwjkQgWgNgHgxQgGgxArgDQAiAVADAYIABAMQAAANgEASIgKAjIgBAGgAgDkpIAAAAg");
	this.shape_21.setTransform(86.3,67);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-14.1,137.1,135.3);


(lib.Symbol226 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AlVBdQidgEgFgVIABgFIAAAAQEdgkEJhBQEMhDC8APIAAABQliB6inAhQiUAciKAAIgmgBg");
	this.shape.setTransform(198.5,130);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(148,120.6,100.9,18.9);


(lib.Symbol225 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#996633").ss(1,1,1).p("AYvn3IAAhpAqvJiIt5sfIgHgG");
	this.shape.setTransform(159.5,139);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AolsPQAFAVCdAEQCcAFCoggQCoghFhh8QghAuDUCpIETDSQB7BbCPAhQB7AdB3AxIApASQgxA/lUAyIhXAVIlYAeQiwASifByQifBwAtg4QAtg3mgAtQk0A6haBMQhbBMhPg0QhQg0iBgwQiBgxlmBFIAAAAAAppSQBzCNDACLIBBgDALilXQAqABASAPIgBgBQgTgNgogCQknhpg5lFAMelHQBCBSFghRA2lBwQHyj+BuiuQBuitCxknIABgEIAAAFQBNFbklFbA2lBwIgPAIIAEAEIANgBgAowOjIgBAAIgGAM");
	this.shape_1.setTransform(146.9,106.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF99").s().p("AgcgGQAnACASALg");
	this.shape_2.setTransform(223.6,73.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#996633").s().p("AgFgBIALgBIgGAFg");
	this.shape_3.setTransform(1.8,119.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFCC").s().p("ArzIyQhQg0iAgwQiBgwlmBFIgCgLQHxkBBviuQBuirCwknIABABQAGAWCcAEQCcAECpggQCnggFhh9QghAuDUCqIEUDRQB6BbCPAiQB7AcB3AwIApARQgwBAlVAxIhWAVIlZAeQivATigByQifBxAtg3QAtg4mfAtQk0A7hbBMQg2AtgxAAQgjAAgggWgAsFEMQDokRAAkTQAAhIgQhIQAQBIAABIQAAETjoERgAOjBIQBgAACcgiIADgBIACAAIADgBIAIgCIAJgCIgJACIgIACIgDABIgCAAIgDABQicAihgAAIgBAAIAAAAQhpAAgigpIAAgBIAAABQAiApBpAAIAAAAIABAAgAFVArIBAgDIhAADQjBiIhyiOQByCODBCIIAAAAgAMVAeIACAAQgTgOgqgCgALaAOQknhng5lFQA5FFEnBng");
	this.shape_4.setTransform(147.6,70.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#996600").s().p("A4riwIAGgGIAAAAQFmhFCBAwQCBAwBPA0QBQA0BahLQBbhME1g7QGegtgsA4QguA3CghxQCghyCvgTIFYgeIBXgVQFUgxAwhAIgogRQCNABCVAaIAABpQ6FCOpaPLg");
	this.shape_5.setTransform(159.9,137.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,11.5,319.2,190.8);


(lib.Symbol224 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EArhgKwIAAkdIAAijEArhgKwIh2giQhhgbhkgZQvajyz1AAQ5/AAyaGgQhSAdhMAeIAAAAIAAaOIXFAAIAGAAIgGgOQhGi5AAjKQAAqbL3nWQL1nYQxAAQFQAAEyAvQH8BNGnDNg");
	this.shape.setTransform(274.6,284.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6600").s().p("AgBAGIAAgLIADALg");
	this.shape_1.setTransform(144,397.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#996600").s().p("EgrgAQ1IAA6OIAAAAQBMgeBSgdQSamgZ/AAQT1AAPaDyQBkAZBhAbIB2AiIAACQQmnjNn8hNQkygvlQAAQwxAAr1HYQr3HWAAKbQAADKBGC5IAAAOg");
	this.shape_2.setTransform(274.6,290.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FF33").s().p("EgrgALPIAAxHQBIBXBFBaQA8BRALAqQgPhAgLg+QgMhDgJhDQgWi1AHihQArBMBeA8QBoBCBLBKQA6A7AqBAQAtBHAXBPQAPAwASAiIACADIAFgkIADgxQgBg8gPg6QgniMhZh2Igqg0IhAhBIAPgGIA5AcIAgAQQClBXB8BsQBkBXBJBlQAbAkAXAnQA3BdATAwIgii0IgKg7IAAgDQgQhmALhiQAFgpAKgoQAVhbAthVIABANQAJBVAOBVQAHAqANApQAaBNAyBIQAfAuApArQAAg2AGg3QAPiOAth1QAOgjAQghQAbBpBDBoQAZAmAlAiQBaBRClAwIgCgkQgIhOgdhLQgkhWhChTIgyg5Ig7g4QAcAUAfAVIBmA+QBuBBBVBGQC1CUBFCsQAfjjggjIIAUgBQARA6AVA3IAbBBQA1B9BKBsIAbAmQgBgYAFgXQAykcBkkJIAdAEQAuC3BbCmIASAgQAtBRA5BMQCRkUhAkNICzB3QBWA+A6A/QB4CEgCCHQA1hoAAhjQABhog4hjIgFgIQgTgggZggIgwg3IA2AhIAoAcQAgAYAcAbIBJBKQB6CBBeCFQBDBfA0BhQBLjxB2jmQAbg2Aeg1QAFA7gTA5QhcETDlC8QBQkECfjcIACgDIA0hFIgGBSQgIBdAQBYIACAOQAiCnB8COQAbjYgpjTIgShMQAMAmAfAjQA/BJBLBDIAqAlQDmDKAaCpQCYjtgQj7QgEg/gPhAIAuCLIAUBIQA/DwgLDqQBNiCBMhwIAng6IAAB3QghCkAhCgIAAAAIAAEdIh2giQhhgbhkgZQvajyz1AAQ5/AAyaGhQhSAdhMAdg");
	this.shape_3.setTransform(274.6,158.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#009900").s().p("EAn4AFcIAACjIAACjIAAAAQghihAhilgEAkEAA3IASgjQBsjIB2jBIAAGBIgECFQgCArAGAoIAAABIgnA6QhMBxhNCDQALjsg/jwgAdNBYQAOg6AUg1QBWjoDIi3QBYhQAohlQAHDYgVDwIgPCUIguiLQAPBAAEA/QAQD4iYDwQgairjmjKgA+2EDQgXgngbglQhJhkhkhVQArhAA2hCQBThmBEhwQAdgvALgzIgVCLIAAABIgBABQgQCDgCCEQgLBfAQBnIAAADIAFBCIAFgHIAiC2QgTgyg3hdgAXwAgIAIgQQCvlXFVjhIAOAIQilDYg2EdIgCALQgHAogDArQhLhBg/hJQgfgjgMgmIASBLQApDSgbDYQh8iOgiingEgkuAFSIAHghIgFAkgAQ+iaQATg5gFg7QgeA1gbA1Qh2DlhLDxQg0hhhDhfQheiEh6iAQBwi1C+ieQBQhCBAhDQg6BKgsBNQh/DigED8QDYhZBQizQA+iLAaiMQBCC9ASD5QAGBIAABHQAmg4Aeg8IAAgBQBGiRATilQAOh7AJh6QAqByAUB5QASBsAABxQifDZhQEFQjli8BckRgApaD4QhKhrg1h9QAAgeAFgfQAhj4D7jtIB7hzQg5FVB3FcQhbikgui3IgdgFQhkEJgyEaQgFAYABAYgAwng0QB0jxCljnQA+hWBTg/Qg5BTgiBWQhXDcA7DtQgVg3gRg6IgUABQAgDGgfDiQhFiri1iSgAjtBLIAKgUIAAAAQCjk+BAl0IAbgGQA6DbAoDmIixh3QA+EOiPESQg5hNgvhRgA7UB0QgyhIgahMQAkh9AHiIQAEhKgFhOIgFhtQAZAtAYAuQBJCQA3CeQgtB1gPCMQgGA2AAA3QgpgrgfgugAENhCQAlhlAehuQAZAgATAgQgDCkARCvQAThDAbg9QAABhg1BoQACiIh4iBgA2QAxQBAiAAAibIAyA5QBCBSAkBXIAlCXIACAkQilgwhahSgEgn3gAPQAKhNAPhOIAqA0QAHByAaBuQgqhAg6g5gA1Qj5QgChagXhhQgRhMAFhPIA1CPQAuCBAoCEgEgnWgDVIAzjfQgOBWgEBUIgBBFgAFWksIAiiQIATABQgJBUgEBXg");
	this.shape_4.setTransform(297.9,119.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AQGfCQgIgMhCg4QhAg4iyhfQhehghRhdQhoh6ihhVQiKhKhYB3QhcB+iCBwQiPB5jAgDQi6gDi1g0QifgthLiCQhaidAci3QAejACzg1QCwg0DBAgQCxAdB+B6QBZBWBaBOQAgAcAmgUQB3hVgzi9QgyjFg3hJQhiiCh5h3QhyhxhbiOQgfgwiSmUIGJgXQA1GZAiAoQB7CNBsCUQBwCWCgBJQCkBKDHgfQCxgcCXhrQCVhqCCiCQCIiHDTgCQDIgBC+AUQC6AUCgBkQCgBkAwCnQA0C4iTCGQiLB+isBbQidBTi3AnQi7Aoi/gYQi0gYibhgQikhlidhVQi6hliEBzQgnAiAGA7QATCzB9B9QB2B1CwBFQC1BGCjA1QCkA0C7g4QC0g1CshFQCthEC/gdQDCgdCvA+QArAPAQA2QAzC6hICEQglBCg6AvIDFh6IAJ/TIgEBUIgBAMIAAAHIAAADIAAAEIAAADEArrAARIAAAHIgBAEIAAAIIgBAKIgCAqIAAAeIAEhhEArnABYIAAivMAAAggjMhXWAAAMAAAAkEIAAbIMA6rABuIBKACEAoiAf0QhIA5hqAcQi3AvjBADQjGADjBgeQi1gdi0gmQhmgVichG");
	this.shape_5.setTransform(273.1,210.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF6600").s().p("AgjAgIAAhAQBAA2AIALg");
	this.shape_6.setTransform(372.4,405.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFCC").s().p("ANpSmQi1gdi0gmQhmgVichGQgIgMhCg4QhAg4iwhfQhehghRhdQhoh6ihhVQiKhKhYB3QheB+iCBwQiPB5jAgDQi6gDi1g0QifgthLiCQhaidAci3QAejACzg1QCwgyDBAgQCxAbB+B6QBZBWBaBOQAgAcAmgUQB5hVgzi9Qg0jDg3hJQhiiCh5h3QhyhxhbiOQgfgwiSmWIGJgXQA1GbAiAoQB7CNBuCUQBwCWCgBJQCkBKDHgfQCvgcCXhrQCVhqCCiCQCIiHDTgCQDIgBC+AUQC6AUCgBkQCgBkAwCnQA0C4iTCEQiLB+isBbQidBTi3AnQi7Aoi/gYQi0gYibhgQikhlidhVQi4hjiEBxQgnAiAGA7QATCzB9B9QB2B1CuBFQC1BGCjA1QCkA0C7g4QC0g1CshFQCthEC/gdQDCgdCvA+QArAPAQA2QAzC6hICEQglBCg6AvQhIA5hqAcQi3AvjBADIgjABQi0AAiwgcg");
	this.shape_7.setTransform(350.7,305.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#993300").s().p("EAqBAQOQBIiFgzi6QgQg2grgPQivg9jCAdQi/AcitBFQisBEi0A2Qi7A3ikg0Qijg1i1hGQiwhFh2h1Qh9h9gTizQgGg7AngiQCEhzC6BmQCdBVCkBlQCbBgC0AXQC/AZC7gpQC3gnCdhTQCshaCLh/QCTiDg0i5QgwinighjQighli6gUQi+gUjIACQjTACiICHQiCCBiVBrQiXBqixAcQjHAfikhKQighJhwiWQhsiUh7iNQgigog1maQY8gPXKC/IAACwIAAAfIAEhiIAAgEIAAgKIABgOIAEhTIgJfSIjFB7QA6gvAlhCgEgrvAPcIAA7FMAhHgF8QCSGVAfAxQBbCOByBwQB5B3BiCCQA3BJAyDDQAzC9h3BVQgmAVgggcQhahOhZhXQh+h6ixgdQjBgfiwA0QizA0geDBQgcC3BaCcQBLCCCfAtQC1A0C6ADQDAAECPh6QCChvBch+QBYh4CKBKQChBWBoB5QBRBdBeBgQCyBgBAA3IAABCg");
	this.shape_8.setTransform(273.1,298.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#33FFFF").s().p("EgrrgSCMBXXAAAMAAAAgiQ3Ki/49APImIAXMghIAF8g");
	this.shape_9.setTransform(272.6,108.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-8,562.2,436.4);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("ACCGNImYAAQgoAAgQgJQgZgOAAgbQAAgRAIgHQAJgIAegPQAhgPAJgeQAJgXgBh0QABg2gEhkIgDiSQgBgvgGgRQgIgRgXgIQgngNgKgJQgTgPAAgSQAAgrBGgWQA9gUBlAAQByAAA2AMQBIAQABAvQAAAUgKAJQgJAKgmAPQgWALgGAXQgGAZABBQIAAELQAABbAOAaQAVAgA9AAQBDAAAngeQAmgdAQg+QAIgnAgAAQAeAAAUAcQAUAdAAAsQAABJg2BSQgSAbgMAJQgNALgSAAg");
	this.shape.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.5,-41.4,75.1,82.9);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AjJF1Qhwgzg/hnQg+hjAAh4QAAiKBQhrQBGhfB2gtQBQgeBgAAQCXAABwBXQBNA6AuBfQAvBeAABcQAACKhbBtQhOBdh9AnQhMAahMAAQhlAAhdgrgAh+jLQgWAhgBAuQAABBAbBWQAbBXAqBDQASAdAaAQQAZASAcAAQAtAAAbgiQAbghAAg3QAAhGgXhQQgXhSgkg7QgXgjgdgVQgcgUgcgBQgyAAgdArg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.9,-41.7,87.9,83.4);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AilF0Qhyg0hBhpQhBhmAAhxQAAiABRhrQBHhdBxgyQBWglBZAAQBWAABPAlQAmASAPAAQALAAAXgFQAHgCAKAAQAeAAAXAcQA5BEAABlQAABHgyAhQgZASghAAQgfAAgSgNQgTgNgSghQgYgvgRgUQgPgUgXgQQg5gog+AAQg7AAgjAsQgjArAABKQAABjAyBTQBEBwCAAAQAxAAAtgQQAvgPAagaQAWgVAOAAQAVAAAOAUQAQASAAAbQAAAigVAqQgUArgeAXQgLALgnAHQgWAEgmASQhXAqhdAAQhgAAhhgsg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41,-41.7,82.1,83.4);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("ACCGNImYAAQgoAAgQgJQgZgOAAgbQAAgRAIgHQAJgIAegPQAhgPAJgeQAJgXgBh0QABg2gEhkIgDiSQgBgvgGgRQgIgRgXgIQgngNgKgJQgTgPAAgSQAAgrBGgWQA9gUBlAAQByAAA2AMQBIAQABAvQAAAUgKAJQgJAKgmAPQgWALgGAXQgGAZABBQIAAELQAABbAOAaQAVAgA9AAQBDAAAngeQAmgdAQg+QAIgnAgAAQAeAAAUAcQAUAdAAAsQAABJg2BSQgSAbgMAJQgNALgSAAg");
	this.shape.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.5,-41.4,75.1,82.9);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AjJF1Qhwgzg/hnQg+hjAAh4QAAiKBQhrQBGhfB2gtQBQgeBgAAQCXAABwBXQBNA6AuBfQAvBeAABcQAACKhbBtQhOBdh9AnQhMAahMAAQhlAAhdgrgAh+jLQgWAhgBAuQAABBAbBWQAbBXAqBDQASAdAaAQQAZASAcAAQAtAAAbgiQAbghAAg3QAAhGgXhQQgXhSgkg7QgXgjgdgVQgcgUgcgBQgyAAgdArg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.9,-41.7,87.9,83.4);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AilF0Qhyg0hBhpQhBhmAAhxQAAiABRhrQBHhdBxgyQBWglBZAAQBWAABPAlQAmASAPAAQALAAAXgFQAHgCAKAAQAeAAAXAcQA5BEAABlQAABHgyAhQgZASghAAQgfAAgSgNQgTgNgSghQgYgvgRgUQgPgUgXgQQg5gog+AAQg7AAgjAsQgjArAABKQAABjAyBTQBEBwCAAAQAxAAAtgQQAvgPAagaQAWgVAOAAQAVAAAOAUQAQASAAAbQAAAigVAqQgUArgeAXQgLALgnAHQgWAEgmASQhXAqhdAAQhgAAhhgsg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41,-41.7,82.1,83.4);


(lib.dudeforquizzesridestill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.8,1,1).p("AgbALIACgFIAIgNIAngDIAGAA");
	this.shape.setTransform(-69.6,-81.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1.3,1,1).p("ASLCuQACABACAAQAGAQgCAYQgBAHgBAIALdHCQgCAAgDAAQAAADAAADIgHAAQg7gjgIhWIAIgBIABAAQCDgIgZhaQAAgEgBgDQgahEh+AyIgDgHQAAgRAAgQQBDgTgdhfQgBgBgEAAQAAgEAAgEQgGgngbgQQgEAAgEAAQibAHhbBJQAAAEAAAEQAAAEAAAEQgEAAgEAAQApB/CWAbIgjABQg3ADgjAWQgEAAgEACQgFACgEAEQAiA5AbBBQABABAEAAQA6gUA5gTQAEgCAEAAQAEAAABACQBGB7h0AXQAAAEAAAEQgEAAgEAAQgFAsAKAbAMkHFQgDgGgFgFIgBgJIgDgPQgHADgIAEQAAAEAAAEQAAAEgCACQgBACgCABAMRGxQAJAJAJAKANHHhIgDABANAHjIAEgBQgDAAgDgBAhZChQgEBQhGgVQAAAEgBAAQhOAUhFAZQAAAAgBAAAIyJEIgMAFIgFABIgeALQAAAEAAAEQgEAAgEACQh4A1iRAfAuNvbQAbgKAQgHIALgEIAAAAIAEgCAsJPAQhCgaghg6QAAgEAAgFQBFgYARgoQACgBACAAQAAgEgBgEQAEgPgDgSIgEgZQgXAEgUAAQgSAAgQgEQgqgJgYggQAbgNAUgVQACgDAAgEQAEAAABgBQAZgvgegiQAAgEgCgBQiWhUh+B5AySJ3QABALACAMQAAAAAEAAQA+BXBxAWQAoAIg7ACQhUACAjAzQAqA4A1AaQAEABAEACQANAGAPAEQAOAEAHAYQgBAAgBAAQgBAAAAABQgBABAAABQgBABAAAAQAAABABABQAAABAAABQABABAAABQADABADAAQAAADAAADQAAADAAABIgBAAQgPAEgQAAQAAAEAAAEQgFAAgCACQgWAOgWANAq/PTQgBABgBAA");
	this.shape_1.setTransform(18.5,18.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#363636").s().p("AiRAlIACgBIgBACIAAABIgBgCgAgHAPIgFAFIgKAAIAPgFgACSgmIgTAMIgGABIAZgNg");
	this.shape_2.setTransform(-37.4,113.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AgCABIgBgBIAHAAIAAABIgGAAg");
	this.shape_3.setTransform(-107.4,45.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3F3F3F").s().p("ABABIIAHACIgBACIAAAAIgFABIgBgFgAA/A8IAAAAIgBAAQgHgXgPgEQgOgEgOgGIgHgEQgzgXgqg4QADAAADgCQACgCAAgEQBWBkgGhkIAAgIIAIAAQANAgAiAMQABAAAAABQAAAAABABQAAAAAAABQAAABAAABIgJAAQAHAOAagFIAJgBIAAAIIgJAAIgIAAIgIAAIgIAAIABACQAPAvAAAXIgKgBg");
	this.shape_4.setTransform(-78.2,107.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E0E0E0").s().p("AgUgWQgCgCAAgEIAtA4IAAABIgrgzg");
	this.shape_5.setTransform(-76.7,92.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2D2D2D").s().p("AA4BlIAIAAQAEAAADgCQAvgjBBgTQgRAohFAYIgIABIgNABQgPAAgFgKgAggAOQA5gBgmgIQhxgUg+hXIAAgIIAIAAQBoB7CWhxQACgCAFAAIAIAAQAAAEgCACQgUAVgbAOQAZAgApAJQgbAEghATIgug4QAAAEABACIAtAzQgPAJgQAOIAAAQIAAAJIgIAAQAAgFgCgCQgbgbgzAZIAAAJIAAAIQAAAEgCACQgCACgEAAQgjgzBUgDgAC6AkQgRgpgdgLQAUAAAXgEIAEAWQADASgEAQg");
	this.shape_6.setTransform(-79,94.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4C4C4C").s().p("AgLAoQAAgDACgEQAOghgQgnIAIAAQAdAhgaAtQAAABgDAAIgIAAg");
	this.shape_7.setTransform(-69.6,80.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F5F5F5").s().p("AiCAaIAAAAIAAAIIAAgIgACBggIACgBIAAAEg");
	this.shape_8.setTransform(-84,79.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#393939").s().p("AiKA8IgEgXIAFgGQAHgKgDgLQB+h3CUBUQACABAAAEIgIAAIAAgEIgCACQhmBKidgQIAAAAIAAAIIAAAIIgIAAIAAAIIgEAAgAAdgzQgdALgkAEIAAAIQgEAAgDACQgiAOggAPQALAmA9gRQAAAAABgBQAAAAAAgBQAAAAAAgBQAAgBAAgBQDBgbhxgrIgIgBQgEAAgDABg");
	this.shape_9.setTransform(-84.4,78.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A8A8A8").s().p("AgkANIAAgGIAAgCIAAgGQAkgEAdgLQAEgBAEAAIAAABIAAAHIAAAIIgVAAQAOATgdAAQgMAAgZgFg");
	this.shape_10.setTransform(-84.4,74.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#313131").s().p("AilHjQA7gEAzglIABAAQgdAjhIAJIgKgDgAkKF+IAIAAIADAAQCjgOg0grQgkAGgVgRIACgCIAAgCIAAgCIgBgBIgBgBIgJgCQgTgZgEg1IAIAAIAJAAQAhA7BCAaQAFAKAJAGQgSA+hRAAQgcAAgkgHgAEJnkIACAEIgEACQACgDAAgDg");
	this.shape_11.setTransform(-47.4,83.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#191919").s().p("AAAAAIABAAIAAAAIgBAAg");
	this.shape_12.setTransform(-23.1,28.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#DFDFDF").s().p("AjHGlIAAAFIgDAAQAAgEADgBgAi5FpIAFgBIgGAFIABgEgAjBEPIAIAAIgHACIgBgCgAC/mZQADABAEAAIAEAAIgCADIgDADgAB1moQAFAAAEgBIgBAFIgIgEg");
	this.shape_13.setTransform(-53,79.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EBEBEB").s().p("AkZDVQAEgBAEAAIAAABgAjHC8IAAgBIAHABgAESioIAIADQgDACgFAAIAAgFgACwjMQAEAAACgCIgCAEIgEgCgAC4jUIAAAAIAAACIAAgCg");
	this.shape_14.setTransform(-60.6,54.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0000FF").s().p("AhyDWQAAgBAAgBQAAgBAAAAQgBgBAAAAQAAgBAAAAIgigLIAAgBQgFgHgIgBQgGgBgFACIg4gRIgIAAQgnACgSgSQgFhvA/ArQADACAEAAQB2AqB9AkQAAAAAAAAQAAAAABABQAAAAAAABQAAABAAABIgKAJIgFABQg3ANg5ASIgCAAgAC7AZIhBgQQgFAAgDgCQg2gcg1giQAAgEgCgDIAAgBIAMgDQAEgDAGgCIABgBIABgCQAUgGAQgMQAqgIAnAAIAAgEQgMg2BDg3IAFACQgQBCgTBCQAfglAVhPIAGAKQAJAMAGANIAAACIAAACIAIAKQARAXAbACQgIAfgDAjIADAVIAAAAIAAADIAAAQIgCABIgBACIAAADQgCAJABAKQgpAAgwAHIAAAIIgIAAg");
	this.shape_15.setTransform(-34.7,25.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F8F8F8").s().p("ABPB6IAAgIIAAAIgAhbAIIAGAAIgDABgABVh0QACgBAAgEIAFAAIgBABIgBAGg");
	this.shape_16.setTransform(-23.1,15.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#535353").s().p("AgcgZQgDgCAAgEIA+A/Ig7g5g");
	this.shape_17.setTransform(-33.2,-0.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2C2C2C").s().p("AggAJIACgBIAvgPQAdgKgXAJIgGABIAGgBIgDACIAAAAIgLAEIgpAPIACgFIgCAFg");
	this.shape_18.setTransform(-69.1,-81.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#171717").s().p("AgDLBIgJAAQABgEABgDQAQglgSgmQAUAGgBgWIAEAAIAAAIIABAIQAGA0gPAeIgGAAgABEoaIABAAIABADIAAABQgBAAAAgBQAAAAAAgBQAAAAAAgBQgBgBAAAAgAhFqNIAAgIIAAgIQAZgYAOgIQASgJADAOIABACIABAIIAEAAQAKAAALAEQAAAAABAAQAAAAAAABQAAABAAAAQABABAAABQgFAAgDACQghAWgwAJIAAgIg");
	this.shape_19.setTransform(-74.5,-22.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#181818").s().p("Ag7BUQgFgDgEgEIACgDQAzhYBOhFQACgBAEAAIAAAIIAAAIQgEAAgBACQgWAhgnAOIAAAIQgEBBgzAXIAAAIQgEAAgDgBg");
	this.shape_20.setTransform(-88.5,-80);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#121212").s().p("AgeJ/IgEgBQgCgWgKgKIAAgEIgIAAQgPgCgCgLQAcAIgHgXQAAAAAAAAQAAgBgBAAQAAAAgBAAQgBAAgBAAIgBgIQgIg5ggghIAAgJIAAgYIAIAAQAgAuANBEQAAAAAAAAQABAAAAAAQABABABAAQAAAAABAAIAIAAQgGAiANAQQACADAAAEIAAAIQAFARgMAAIgCAAgAA0oFQgCgCAAgEIAAgIQAAgqgQhBQAEAAACACQACACAAAEQAAAEACACQACADAEAAQgCAeARANQACACAAAEQAEAEAFACQADACAEAAQAAAEACADQAfAwg6gOIAAAIQgEAAgCgCg");
	this.shape_21.setTransform(-102.2,-14.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#ECECEC").s().p("AlNE6QgBgBAAgEQCSgpAcgaIAGASQgiBYg9AAQglAAgvgigAFIlbIAHAAIAAACQgEAAgDgCg");
	this.shape_22.setTransform(-41.3,-88.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E3E3E3").s().p("AjSCFIAEACIgCAEQAAgEgCgCgAgHgwIgBgHIAFgBIAAAIgADLg0IgEgBIABgDQANAGgDAAIgHgCgAB7iGIgBgEIAEAAIAAAEIgDABg");
	this.shape_23.setTransform(-74.5,-86.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFF66").s().p("AjFCPQgQgMACgfQAthkBdhGIAQgLQABgBAAgEQAkgOAogOQAogNAtgMQAAAAABgBQAAAAAAAAQAAgBAAgBQAAgBAAgBQA5gFgcAWIAAADIABABIgBAAQgTADgKAJIAAAHIAAABQgEAAgBACQgDAEAqAUQAbANAuATIgBADQgogKgwgBQg0gCg+AKIgCAAIgFAAIAAgCQgDgOgQAJQgPAIgZAXIAAAIQgEAAgCACQhQBDgzBag");
	this.shape_24.setTransform(-75.8,-87.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#242424").s().p("AlKEQQBlhChpBeIAAABQgCAAAGgdgAnDD1QgCgCAAgEQAbg/A9hmQACgDAAgEQAMAAAOgEQAygMA9gzQACAAAAgFIAMAFQAbAFAzgJIAIgBIAAAHQAAABAAABQAAAAAAABQAAABAAAAQgBAAAAAAQgtANgoANQgqANgkAOQAAAEgBABIgQAMQhdBHgtBlQgEAAgCgDgAFchvIAAghQBJgtgUhvIAEAAIAAARIAAAIQAMAyAWAOQADACAEAAQAEAAACACQACACAAAEQgEAAgCACIhUA/IAAARIAAAIQgEAAgDACQgFACgEAEIAAgIg");
	this.shape_25.setTransform(-52.4,-101.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#6F6F6F").s().p("AgIgnIAAgIIARBfIgRhXg");
	this.shape_26.setTransform(8,8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#323232").s().p("AiGAsQgDgHgEgEQCOgeB5g0QAEgBAEAAIAMAAQhHArhmAeIggAKQgiAKgmAIQAEgDgDgEg");
	this.shape_27.setTransform(57.1,84.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#1E1E1E").s().p("AhMBqQgEAAgDgCQgbgWgggRQDjA3ABjJIAAgIQANABgBgRIAEAAIAAAQIAAAIQgBAOARgBIAAAEQgKA7AcATQADACAEAAIAAAIIAAAIQgEAAgDACQgZATgygFIAAAJIgIABQg1AUg8ALIgEAAQABARgMAAIgBAAg");
	this.shape_28.setTransform(13.1,20.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F3F3F3").s().p("ArpA3QANABgEgRIgBgIQAPgfgGgxIgBgIQA4gHAGAvIAEABIAAAEQBMgDAzAQIiSAvQgOAFgPACIgiAEIAAgEgAo9AlIgPAHIgCAAIgEABIAVgIgALoAAIACAAIgCAGIAAgGg");
	this.shape_29.setTransform(-0.3,45.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F7F7F7").s().p("AgJHzIAfgOQBEgZBHgTQA+gRA+gTQAugOAvgKIBngXIAsgFIgLAGQgVAKgLAOIgaARQhDAqg0AyQghg7hEAKQhMAKgwA1QgFAFgFgBQhDgHg/AIIATgMgAtPi3IAFAAIAAABQgBAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAgAqSmTIAEAAIgEAAIAAAAgANMn+IAEAAIgDACg");
	this.shape_30.setTransform(-21.7,59.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#DDDDDD").s().p("AgBgCIAEABIAAACQgDAAgCACg");
	this.shape_31.setTransform(86.1,71);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#D1D1D1").s().p("AABAAIgDgBIACAAIADgBIAAACIgCADg");
	this.shape_32.setTransform(94.3,66.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0066CC").s().p("AARATIgHgHIAEgBIgEABIgCgCIAGABIAEAAIABACQADAGAGgBQAFAKACAKQgHgKgLgJgAgRgRIgRgTIAJgBIABAJQAFAFADAHIgBgBg");
	this.shape_33.setTransform(100.7,66);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#282828").s().p("AgHAHIAAgHIANgGIACANIgIAAIgHAAg");
	this.shape_34.setTransform(97.2,61.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#999999").s().p("ArrF+IgHgCIgFgCIgBgCIAAgBIgBgCIABgCIABgBIABgBIACAAIABgBIAAAAIAKABQAAgXgPgwIAHgDIAJAAQADA1ATAZIAJABIABABIABACIAAACIAAABIgCACQgIACgIAAQgJAAgJgCgAuEDuIAAgIIAAgJQAzgZAdAbQACACAAAFIAAAIQADAzgUAAQgVAAgsgzgAr6ESQgjgMgNggIAAgJIAAgQQAQgOAPgJIAAgBQAhgVAagEQAQADATABQAcALASArIAAAAQABADAAAEIgEACQhBATgvAjQgDACgEAAQAAgBAAgBQAAgBAAAAQAAgBgBAAQAAgBAAAAgAMTh9QgBAAAAAAQAAAAAAgBQAAAAAAgBQAAgBAAgBQgSgkgGguIgBgIQBcBigsAAQgJAAgNgEgAI9ktQA+gPBEgGIABAFIAAAIIABgIQBEAPAJgwIAEAAQDGgfiNBcQgkAYgVAVQAAABAAABQgBABAAAAQAAABAAAAQAAABAAAAQgbALgVgIQgBAAgBAAQgBAAgBAAQAAAAAAAAQgBAAAAgBQgLgogRggQgEAEAAAEQgBAdgFAJQggA2gaAAQgkAAgbhcgALAl/QBXAGhFASIgBAAQgHAAgKgYg");
	this.shape_35.setTransform(3.7,76.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#3C3C3C").s().p("AHNFwIgJAAQAVgVAlgYQCMhcjGAfIAAgEQgVABgDgOIACgBQB+gxAaBDQACAEAAAEQAYBZiDAJIgBAAIgHAAIgIAAgApKlvIACAHIgCABIAAgIg");
	this.shape_36.setTransform(37.1,15.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FCFCFC").s().p("AAyB8IAHAAIAAADQgEAAgDgDgAgPADIAHAAIgHABgAg4h+IADAHIgDABIAAgIg");
	this.shape_37.setTransform(85.7,52);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#2E2E2E").s().p("APRJaQACgCAEABIAAAIQgOALgPAKIgQAJQAUgRATgUgAKwIoIAIAAIAAAHQAAAVAEAUQAAAAAAAAQABAAAAAAQABAAAAAAQABAAABABIAGAQIgMAEIgEACQgLgcAFgrgAI3E4QgCgCAAgFQAjgWA3gDIAjgBQiVgbgqh/IAJAAQAIAAAHAEQABABAAADIgIAAIAEAKQA/B+CjhEQADgCAEAAQAFAAACACQABACAAAEIAAAhIAAAIQAEAOAVgCIAAAFIgEAAQgIAwhFgPIgBgBIAAgEIAAAAQhEAGg/AOQgEAAgCgBgALSEAQBFgThXgGQALAaAHgBgAtkodQg6gJgoANQAAgEgBAAQgHgEgIAAQAWgPAjADQAlADgBgIQANAEAMgDQgCAMgBAMQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAAAgAtTpaIAAgCIAAgDIgwgVIAAgBIACgCIgFgHQAdAMAfAPQAAAFgDACIgEAHIgCgFg");
	this.shape_38.setTransform(3.7,15.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF9933").s().p("Ar6IQIgHgFIASAFIgLAAgAryHuQgcgIgOgYQgHgNgKgHIgCgNQAdgfAQAmQAAAAAAABQABAAAAAAQABAAABAAQAAAAABAAQCKAdAZhUIAKAGIAKAGQgJALANATIADACIAWAMIABAPQghAjgwARIhHADIgxgOgAvjA0IAAgIIAAgIQCfARBmhLIABACQASAmgQAjQgCADAAAEQgEAAgDACQhJA4g9AAQhDAAg2hCgAMqAmIgDgBQgQgDgQgBIgRgIIgTgLQgHgHgFgHIAAAAQgDgEgBgEIgBgDIgHgRIAAgIIABgIIADAAIACgFIAEgCIAFgBIABgBIAFABIAHACIADADIACADQALAAAHADIABAAIB9giIAYgXIACgCQAFgIAFgIIAAgDIALABIACABIAGAHIAGAFQAGAMAKAIQAOALANANQABAMgCANIgBAIQgEAAgCACQgSATgUAQQgUAJgWAEQgXAEgVAIQgQAGgRAAQgKAAgLgCgAIUnlIAFgEQACACAEAAQCLAzBthaIAGgBIACAHQAbBCg9AQIAAAJQgEAAgEABQg5AZgtAAQhTAAgohSg");
	this.shape_39.setTransform(2.6,78.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F4F4F4").s().p("AA0DtIABAAIgBAIIAAgIgAiGjUIAIAAQAAAEACADIgFADIgFgKgACGj1IAAABIgGACQACgCAEgBg");
	this.shape_40.setTransform(68.9,49.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFCC66").s().p("ArVH4QAqgcg8gQIAAgJQAQAAAQgDIAAgBIAFgFIAAAAIABgCQARAEARgEQAWASAjgGQA0ArijAOgAu0BLQAhgRAhgPIAHAAIAAAHQABAMAEALQAAABAAAAQAAAAABABQAAAAABAAQABAAABAAQA0ADAMglQACgDAAgEIAAgJIAAgHIAHAAQBxArjDAeQAAABAAABQAAAAAAABQAAABAAAAQAAAAgBAAQgTAGgOAAQgfAAgIgagAL7AJIAxgNIAIgBIAAgFQgkAFgNgJQBRgCBcgdIAEACIABADQgcAhg0AIIgBgCIgGgBIAAAEQgkARgbAAQgVAAgPgKgAJOmwIAAgIQAlgRAjgUIADAEQAqAdBGhAIAGABQgBBbhgAAQgnAAg5gQg");
	this.shape_41.setTransform(-0.5,71.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F1F1F1").s().p("AuzDdIACAHIgCABIAAgIgAqxCKIACgEIABAAIABADIgBABIgCABIgBgBgAM7i/IADgCQADgCAEAAQAAAEgCACQgCACgEAAgAOujeQACgCAAgEIAEAAIAAAAIAAAHg");
	this.shape_42.setTransform(-17,42.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#5B5B5B").s().p("Ag4APQAEAAACgCQACgCAAgEIAAgHQAugPAzgIIAIgBQAAAFgCABQgwArgiAAQgPAAgOgKg");
	this.shape_43.setTransform(71.7,22.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#303030").s().p("AiCAwQAOABgBgSIAEAAQC9A2ABh/IAAgHIAAAAIgEAAIAAgIQANAAALgDQAAgBAAAAQAAAAAAgBQABAAAAgBQAAgBAAgBQAaATAGAnIABAHQAAADgCACQgCACgFAAQgEAAgCACQhGA5hPAAQgvAAgygSg");
	this.shape_44.setTransform(70.1,24.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#1F1F1F").s().p("AtDE7IAUgGQgKADgJAGIgBgDgAlVgoQhThIhzgpQgEAAgBgCQg3hqh4goIAAgIQAEAAACgCQACgCAAgEQB1AzBFBiQACADAAAEQBxAfBOBBIACACIAAAAIAAAEQAAADACACIAIgBIABABQABADAAAEQAAAFgBAAQgHAEgIAAQgEAAgDgCgALHiXQgCgCgEAAIAAgIIARgMQAaANAfgVIAIgEQAGgBAJgDIAAgBIAZgEIABAAQAEAAACACQACACAAAEQgEAAgEACQg4AVg7ASQAAgEgCgCg");
	this.shape_45.setTransform(-2.1,24.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#1A1A1A").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_46.setTransform(133.8,34.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#1B1B1B").s().p("AqlENIgBgIQgMgsgTgmQApAVATArQABACAFAAQAAAEgCACQgDACgEAAIgEAAQABARgOAAIgIgBgAiYCbQgEAAgDgCQhFgdgvgzQAIAAAHgEQACAAAAgFQA0AiA3AeQADACAEAAQAAAEgCACQgCACgEAAQAEAIAAAJgAuShhQAAgFgCgBQhag2gnhoQAEAAACgCQACgCAAgEQAUAyAjAiQACACAAAEQAnAcAxAgQACABAAAEIgHAAIgFAAQABARgMAAIgBAAgAQKhyIAMAAIgDACIgJgCg");
	this.shape_47.setTransform(-8,13.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#33CC66").s().p("Ax9JlQgzgNgkgpQgug0gShGQgEgRgCgRQgEg8APg6QAFgSADgSQAJg7AcgzQARgeAWgZQADAAADgBQAlgWAogJQAJgCAIgEQBggnBjgYICUgnQAPgEAPgFIDZhLQAPgFAPgEQBcgUBaggQAHgCAGgEIABAEIACAKIAogDQAOgBAMAFIABABIgEABIAhgCQADAAACADQAGALAAAJIAMgBIgCgHIABAAQBFgZBOgUQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBQBEAUAEhPIgCgBIgDgCIgCgCIgBgCIgBgCIgBgCIAAgCIACgGQgFgFgEgIQAAgBAAAAQAAgBAAgBQAAAAAAAAQAAgBgBAAQgMgDAFgRQA+gMA1gUIAIgBIAAgIQAyAFAZgUQADgCAEAAQCvg2Cqg7QADgBAEAAIAAgIQAfgGAbgKIAIgBQA7gSA4gVQAEgCAEAAQA4gRBDgHIAAAAIiSAkQhRAVhOAgIgOAFQgmANglAPQhSAfhUAbIgHACQgzAHgvAWQhPAkhVASQgNAIgKAPQgDAEADAEIABABIADgFIAEgFICngwQAagIAYgMQAjgRAmgIQBIgPBGgbIA0gVQAlgOAmgKIAbgHIAugNIAigLIAOgFQAfgLAggHIAGgDQAqgWAsgBQAkgBAdgXQAQgNARgCIAAgBIADgBQAtgMAdAcQAtAWAdAqIACACIAeA0QAbAwAWAyIAJATIACADQAXAjAMAqIAEAWIAEAEIABAHIAAACIACAEIABACQADA9gaA5QgRAkgjASIg9AdQhEAfhIATQgYAHAHAUIgDABIgGgBIgCgDQgKgQgOgJQgDgFgFgFIgBgJIgDgPIgPAHIAAAJQAAAEgCACIgDADQgPgCgSAFIAAAAIgFABIgBACIgFgBIAAAGIgHAAQg7gggIhWIAIgBIABAAQCDgJgZhZQAAgEgBgEQgahDh+AxIgDgHIAAghQBDgTgdheQAAAAgBgBQAAAAAAAAQgBAAgBAAQgBAAgBAAIAAgIQgGgngbgTIgIAAQibAJhbBJIAAAIIAAAIIgIAAQApB/CWAbIgjACQg3ACgjAXQgEAAgEABQgFADgEAEQAiA4AbBBQABABAAAAQAAAAABAAQAAABABAAQABAAABAAIBzgoQAEgBAEAAQAEAAABACQBGB4h0AXIAAAJIgIAAQgFAsAKAbIgeALIAegLQgEADgBAIIgZAAIAAAIQgEAAgEABQh4A2iRAeQgMgLgUATQgTgCgTAIQgaAMgbAGQhTARhSAVIgkAJIhRAXIgzAPIirAxIgHAEIgSAKQgYAOgaALQgZALgaAHQhdAZhaAhQgGADgDAFIgCABQgKgNgOgIQgUgNgVgFIgEACQgFAEgBAGIADAHQhCgaghg7IAAgIQBFgYARgoIAEgCQAAgEgBgDQAEgQgDgSIgEgYQgXAEgUAAQgSgBgQgDQgpgJgZggQAbgOAUgVQACgCAAgEQAEAAABgCQAZgugegiQAAgEgCgBQiWhUh+B5QAEAKgIALIgEAGIADAWIAEABQA+BXBxAWQAoAIg7ABQhUADAjAzQAqA4A1AZIAIAEQAOAGAOAEQAOAEAHAYIgCAAIgBABIgBABIgBACIABACIAAABIABACIAGACIAAAFIAAAEIgBABQgPADgQAAIAAAJQgFAAgCACIgsAbQgGgHgLAAIgCAAQgoAZgyAEQgOACgOAHQgzAbg2AAQgdAAgegIgAv4gSQAUgGARgKQAGgDACgGQAQgLARgIQARgBAOgIIACgBIABgBQAKgFAJgEIAPgEQATgEASgCIADAAIAEAAQAKAAAJgDQAogDAmgNIBSgcIAEgBIACAAQAmgGAmgEIglAOQhPAghUAXIiiArQgVAGgUADQghAGgfAQQgcANgeAJQAmgPAkgSgAUYjwQADgDgBgEQgBgNgGgMIAEABQAGAPgCAYIgCAPIgBgXg");
	this.shape_48.setTransform(4.9,63.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F6F6F6").s().p("AwbKSQANABANgCIAYgGIAHgBQgSALgQAPQgOgHgJgLgA1BFXQA9hggShuIArgeQgSAxgPA0IgDAGQgHAjAAAjQAAARADARIALBFQgjgHgnAIQAEgYANgVgAGZDrIADgGQAMgFAKgIIACgBQAlgJAigKQgiAOggAaQgQgCgQABgAIbC7QBpghBGgrIgMAAIAAgIIAZAAIgBACQgBATANALIgBAGQg/AAgvAuQgugJgqAJgALmjsIABAAIAAAFgAVLlRIgJgBIgGgBIgCgBQgFgdgPgaQgQgdgMgeQgSgugZgsQANgGAKgIQAoBLA0BDQgGApAHAoIgIgCgAMop5IABAAIAAAAIgBAAgAOjqUIAAACIgIABIgIABIAQgEgAO8qZIgFAAIAUgGIAKgEIABAAIgOAKIgGAAIgGAAg");
	this.shape_49.setTransform(-0.2,68.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#606060").s().p("AoLCOIAEAAIAAABIgEgBgAIMh+IAAgBIAAABgAILiNIgBAAIAAgBIABABg");
	this.shape_50.setTransform(14.4,16.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#131313").s().p("AgVANQgIgCgHgDQATgHAKgOQABgCADAAIAHAAIAIAAQgCAUATACIAIABQAAABgBAAQAAABAAABQAAAAAAAAQAAABAAAAQgUAEgPAAQgLAAgLgDg");
	this.shape_51.setTransform(48.4,-1.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#333333").s().p("ABeF8QgEgUAAgVQAWACAGgQQAAgBABAAQAAAAAAgBQABAAABAAQABAAABAAQAMAJAlgFIAAAFIgIABIgyAOQAlAXA+gdQAEgCAEAAQA0gJAcghIABgDIABgDIAFgCIADABIgBACQgEAJgGAHIgCACIgYAXIh9AiIAAAAQgHgDgLAAIgDgCIgCgEIgIgCIgFgBIAAABIgGABIgEACIgBAFIgDAAIgBAAIAAAIIAAAJQgBgBgBAAQgBAAAAAAQgBAAAAAAQAAAAAAAAgAk1jkIgBgEQBmAJgPAAIhWgFgAjLl8IAIAAQAHAEAHACIgBADIgVgJg");
	this.shape_52.setTransform(64.3,37.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F0F0F0").s().p("AACAAIAAAAIgEAAQACAAACAAg");
	this.shape_53.setTransform(53.4,-9.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#232323").s().p("ACWDvQgCgCgEAAIAAgIQA9gRgbhCIgBgGIAAgBQAEAAACgCQACgCAAgEQABAAABAAQABAAABAAQAAAAABAAQAAABAAAAQAdBehDATQAAgEgCgCgAidiSIgIAAQAAgEACgDQAmg8hJgXQAQAAAQgEQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBIBAAUQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAEgCACQgCACgEAAQgEAAgCACQgWAcgNAkIgIAAg");
	this.shape_54.setTransform(64.6,11.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#292929").s().p("AjQC2IAAgIQDXg0CJhWIADgCIgEAAIAAgIQAuAJgFgoIAAgBIABgGQAWAMgIAhIAAABIgDAIIAFAAQADAAADADQACACAAAEIgIABQgbAJgfAGIAAAIQgEAAgDACQioA7iwA2IAAgIgAhviHIgGgJIAAgIQApg1BIAYQABAAAAAAQAAAAAAABQAAABAAAAQAAABAAABQAAABAAABQAAABAAAAQAAABAAAAQAAABgBAAQgPADgRAAIgHABQgzACgPAmQAAgEgCgDg");
	this.shape_55.setTransform(48.4,4.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#717171").s().p("AgDgcIAAgJIAHBLIgHhCg");
	this.shape_56.setTransform(4.2,6.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#2B2B2B").s().p("AEBKLIgBgKQgBgKACgLIAAgDIABgCIACgBIAAgQIAAgDIAAAAIABgCIAAgBIACgBIADAAIADABIABACIABATQAAAOgDAPIgCAHIgBACIgEACIgEgCgAgfIyIAAgEIAAAAIABgCIABgBIAdgMIACgBIAegPIAEABQBaguAohhQABgDAAgEIASAHQADABAEAAIABABIACABIACACIAAADIABACQADADAAAEIAAAIQADALAHAKIABACIAAABIAAACQALANAFAQQAQAYAaALIAHACIAAADIgBAEIgIgBQgagCgSgXIgIgKIAAgCIAAgCQgGgNgJgMIgGgKQgHgQgBgRQgFgBgGACIAAAJQAAAEgCABQhDA3AMA2IAAAEQgoAAgpAIQgRAMgUAGIgBACIAAABQgEACgFADIgMADIgIABQgCgCAAgDgABNBCIAAgIQCMgUByAAIAAAEIgIABQhvAciHAEIAAgJgAktpsQAbgWg5AGIAAgJQAegFARgBIAJAAQAbAAgXARIgTAMQgEACgEAAg");
	this.shape_57.setTransform(-31.9,-37.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#252525").s().p("AmqLhQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAAAAAQgEgLAAgNQBKAPgVgfIAVAAQAAAEgCAEQgLAhgtAAIgIAAgAgQGhIACAAIgCABIAAgBgAqkEWQgEgxAAgxQAJgeARgWQAqg2BggBIAIAAQgUgpgTgnQgCgEAAgEQAOABgBgRIAEAAIAAABQATBRA4AtQACACAFAAQAAAEgDACQgCACgEAAQgEAAgBgCQgHgKgMAUIgIgBQhqgfgtBNQgNAWgJAgIAAAYIAAAIIgIAAIAAAZIAAAIIgEAAgAHTmKQgCgCAAgEQCbgmApiXIABgIQAOg7gChQIAEAAIABAIQAFB1gOBgQAAAEgCACQhPBNhzAoQgFAAgCgCg");
	this.shape_58.setTransform(-44.5,4.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#A1A1A1").s().p("AgDBKIAAibQAMBJgJBZIgDABIAAgIg");
	this.shape_59.setTransform(-0.8,-90.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("ArPQ3QgHgBgGgDIgTgDIgSgFQgSgHgRgLQgTgZgSgaIgBgEQgoAGgqAJIgLADQhLAdhRADQgKgKgOgCQgTgCgPgJQgZgPgbgHQgPgKgSgHQgVgRgQgWIgNgSQgTgZgGggIgGglIgMhEQgCgRAAgRQgBgkAHgiIADgHQAPgzASgyIABgDQAJgXANgVQAOgUAPgUIABgBIAFgGIAAgBIABgFIABgCIAEgCIAAgBIACAAIALgIQACgBAAgEIAEAAQAAgRgEgQQAMAAALgEQABAAAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBIAIgBQAqgKgygeIAJAAIAQAHQAEABAEAAQAjAGAFgXIABgIIAAgIIAAgIQAEAAACgCQACgCAAgEIARAHQAEABAEAAQAAgEABgBQAygXgzglQANABgEgSIgBgIQALAbAcAKQASAFAZgBIAIAAIABgIQALhuhUANQgMACgOAFIgIAAIAAgBIAAgIQARgEAPAAQBigEA6B7QAGAMAIAJQAwgPAxgJIAMgCIAigEQAPgBAOgFICSgvIAMgEIACgDIAFgEQAFgDAGACQAIABAFAHIAAABQADAKgMAEIhHAZIgVAHIhTAcQgmANgnADIgDAAIgQACIgHABQgTACgTAEIgOAEIgUAGIgCAAIgGACIgaAMQgQAIgRALQgCAGgFADQgSAKgTAGQgkATgmAQQAegJAbgPQAfgQAigGQAUgDAUgGICjgrQBTgXBQggIAkgPIAIgCIAvgQIACAAQA5gSA5gNIAFgCIAKgIQAAgBAAgBQAAgBAAAAQAAgBgBAAQAAAAAAAAQh/gkh2gqQgEAAgDgCQg/grAFBvQASASAngCIAIAAIAAAEQgtAEgtAAIgEAAQgGgvg4AGIAAgIQAFAAACgCQACgCAAgEQApgBASgFQAQgFgdgaQhbhThnhDQAAgBAAgBQAAAAAAgBQAAgBAAAAQAAAAgBAAQgZgGgHgWQAEAAACgDQADgCAAgEQB8BfCEAVIAGAHQAcAoAuAYQA2AfBVACIAIAAIAJAEQA2AcASgLIADgCIACgDIgEAAIAAgIQAEAAADgCQAXgMgegDIAAgIQAMAAALgEQABAAAAAAQAAAAABgBQAAgBAAAAQAAgBAAgBQAAgEgCgBQgfgSglgJIAAgBIgDgBIgGgEQgWgMgWgQQAgAAASAPQADACAEAAQB8AyhJgtQgCgBAAgEQAxANAoAXQABABAAAEQAEAAADgCQAggagjgUIAAgBQAAgJgEgIQAEAAACgCQADgCAAgEIBBAQIAIAAIAAAAIAAgIQAwgHApAAIABAKQAEADAEgDIABgCIACgIQAUABASACIABAEIgJAAQgQAAgIAIQAMARALARQABADAAAEQgEAAgCgCQgkgphAATQAPBLA5AiQACABAAAFQBngChFhSQgCgCAAgFQAtAJAKApIABAIQAzAigihcIgBgIQANABgBgRIAFAAQgGARANADQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABQADAIAFAFIgBAGIAAACIABACIAAACIACACIACACIADACIABABQgEBPhEgUQAAABAAAAQAAABAAABQAAAAAAAAQAAABgBAAQhNAUhFAZIAAgIIAAgCIAAgHQAfgBABgfIABgJQAAgEgCgDIgwhCQgEAAgCgCQgbgfggAhIAAAQIAAAIQAAAEgCACQgCACgEAAQAAgEgCgCQgHgGgIgEIgIAAIg5AAQgIA1AhALIAHACIANgGQAOgHAGANQgCAHgGAGIgHAGQgFAEgIACQhaAghbAUQgQAEgPAFIjYBLQgPAFgQAEIiUAnQhjAahfAnQgIAEgJACQgpAJglAWQgCABgDAAQgWAZgRAeQgcAzgKA7QgDASgEASQgQA6AFA8QABARAEARQASBGAuA0QAlApAzANQBUAXBQgqQANgHAPgCQAxgFApgYIACAAQAKAAAGAGIAEAIIACAFIACAJIAEADQAKAHAHANQAOAZAcAIIAxANIBHgCQAwgSAhgjIgBgPIgWgMIgDgBQgNgTAJgMIgKgFIgKgGQgJgHgFgJIgEgHQACgGAFgEIADgCQAVAFAVANQAOAIAKAMIABACIAAgBIABgBQADgGAFgCQBbghBcgZQAagHAagLQAZgLAYgOIASgKIAHgEICsgxIAzgPIBQgXIAkgJQBTgVBSgRQAcgGAagMQASgIATACQAVgTAMALQAEAEADAHQADAEgEADIgBACQgKAHgMAGIgNAGQgLAEgNADIgpAIIgMADIg5AOIhnAYQgvAKguAOQg8ATg+AQQhHAThEAaIghAOIgZAMIgIAFQgQAIgRAEQgtAMgsANIgPAFQgxAQgwASQgFACgFAAIgEAAIAGANIADAKQAHAPgIAVIAAACQgEAMgKAHQgIAMgHABIgCAAQgyAlg8ADIgLAAQgVAAgVgDgAvLEVQgEAAgDACIgtAfIguAhQAAAEgCACQgOAOgRAMQAAAFgBAAQgZAKgPASIAAAIIACAAIAmgKIAFgCQAHgCAFgEQAhgYAogLIAMgFQAugYArgbIARgGQgXgagjAAQgIAAgKACgANNJnIgDgBQgJABgKgCIgFgCIgTgBIgGAAQgmgEgjgUIgFgDIgFgDQgNgLACgTIAAgCQABgIAFgDIAEgCQAEAAAEABQALADgCALIANAIIATAMIARAIQAQAAAQADIADABQAcAGAagKQAVgIAXgEQAWgDAUgKIAPgJQAQgJANgMIALgKQAEgJgFgHQgFgHgDgIIAAgBQgMgNgPgLQgKgIgGgLIgGgFIgGgHIgCgCIgLAAIgCgBQgQgBgOgDQgFgBgBgGIAAgDQAAgFACgDIABgCIAGgDIAAAAQARgFAQABQARACANAJIABABQAOAJALAQIACADIABACIAHAHQALAIAIALQAWAdgHAnQAAAEgEAEQg7A5hSAJQgSANgWAAIgCAAgAPoGzIgBgCIAAgCQgHgTAXgHQBIgVBEgfIA+gdQAjgSAQgkQAbg5gDg9IgCgCIgBgEIgBgCIgBgHIgDgEIgFgWQgLgqgYgjIgBgDIgJgTQgXgwgbgwIgeg0IgBgCQgdgqgtgWQgegcgtAMIgCABIAAAAQgSADgQANQgcAXgkABQgtABgpAWIgGADQggAHggALIgNAEIgjALIgtAOIgcAHQgmAKglAOIg0AVQhFAbhJAPQglAIgjAPQgYAMgaAIIinAwIgFAFIgDAFIgBgBQgCgEADgEQAKgPANgIQBVgSBPgkQAugUAzgHIAIgCQBTgbBSgfQAmgPAmgNIANgFQBOggBRgVICTgkIAHgCIAJgCQACgGAGgEIAAgBIADgCIAOgJIADgCIALgIIAFgEQBJgYBDArQAmAZAbAlQAXAfATAhQAYArASAuQANAdAPAcQAQAbAFAcIAAACIABAEIAIANIADAEQAGAMABANQAAAEgCADIABAXIgCAaQgCAdgQAZQAAATgMARIgRAZQgDAEgEADQglAog6ANIgEACQhOAohWARIgBAAIgBAAQgFAAgDgFgAipDQQgCgDgCAAIghACIADgBIABAAIANgEQAIgDAGAAQAMABAGAKIABABIAEAJIABAHIgLABQAAgKgHgKgAhJgVIgBgCIgEgBIgCAAIgCABIAAABIgBABIgDgUQADgjAIgfIAIABIABgEIAAgDIgHgCQANguAaghQACgCAEAAQgNAhgaCLQgCAQgDAGIgBgTgAiljGIACgFIAAgBIgFAAIAAgJQAHgCAFABQABARAHAQQgVBPgfAlQAThDAQhCgAC/h6QAAgFgCgCQgXgiAJhCQAEAAACgCQACgCAAgEQAAgEABgEQBOijiRgyIgIAAQhqAIhAAxQAAAEgCADQgtBVgjBgQAAgEgCgDIgBgCIAAgDIgCgCIgDgBIAAgBIAAgIQAjhUAlhRQACgDAAgEQBNg6B9gIIAJAAQCZBLhbCyQAAAAAAAAQgBABAAAAQgBAAgBAAQgBAAgBAAQABAsAOAfQABADAAAEIgEAAQABARgLAAIgCAAgAr2iDQhYgSgZhQIgBgIQBbAgAkBKgAJSidQgJgHgBgQQAAgEgCgCIgngjQAxgVgXg1QgBgEAAgEQgBAAgBAAQgBAAAAAAQgBABAAAAQAAAAgBABIgcA4QgFARANADIAAAEIgIAAQg5gCgsgOIABgDQAYAGAigHQABAAAAgBQAAAAAAAAQAAgBAAgBQAAAAAAgBQBIgZg1g7QgCgCAAgFIAAAAQAEAAACgCQACgCAAgEQAjAOAcAWQACABAAAEQABAgAgAFIAAAEQANAZAKAZIAAABIgHgBIAAAAIgDABIgCABIgDADIgDAEIAAABIAAACIAAACIgBACIgBADIAAABIgEABIgKAFIgBABIgBACIABAFIABAEQALADAMgDIACgCQAJgJACgLIAAAAQAFAqgugJIAAAIQgEAAgDgCgAJZkFQgUAEgFAUQgDAbANAMQACACAFAAQAsgLgagwQgCgDAAgEIgIABgAACk/IABgIQAWgiAGA7QAGA3APACQgOANgLAAQgaAAABhXgAi3jvQg5glgahEQAEgEADgFQABgDAAgEIAAgIIAAgIQAOABgFgSIAAgIQAOgLgGgeIACgBQANAygOA6IgBAIQAgApAfAqQACADAAAEQgEAAgDgCgAsFkoQhOgogFhyQAtBGAzA/QACACAAAEQAAAEgCACQgCACgEAAIAAAIQgEAAgDgBgAtYpuQABgNADgMIAMgDIABgEIADgFIAAgIQABgIgCgGIgBgCIAFgGQACgDAAgEQA8ATA3gCIhEAKIgVAEQgWBIgOAAQgJAAgGgdgAoZqrQgrgJhYAIQBDgNA6guQADgCAEAAIAAgIIAAgRIAUgwQAAAAAAgBQABAAAAAAQABAAABAAQAAAAABAAIAAgIIAAgIQAagfgQgsQgCgDAAgEIgEAAQADhAgXhcQAEAAACgCQACgCAAgEQAmA0gBBXIgEAAIAAABIABAHQAVBMgnAvQAAAEgBAEIgHAJQBjglCkAUIAIAAQA/gvBtgCIAIAAQgShRARhTIABgIQANgBgEASIgBAIIABAIQAXCmgGAbIgCgBIgBAAQh3gxhUBGIgIgBQiigxh9BjQAeA2gZAAIgGAAgAuDrOIgBgCIgBAAIgBgEIgDgBQgDgIgJgBIgBgCIgBgCIgEgBIgBAAIABACIgBACQgBADgDACIgCABIgCACIgBAAIgCgCIAAgBQgGgBgFgFQgRgIgOgOIgBgBQgSgTgFgbIgGgeIACgBIACgDIABgBIgBgEIAAgIIAAg5IAIAAQAAAEACACQACACAEAAIAABJQAFAKACALIAAAHQAFAFABAHIABAHIAmAgIADgBQACgIgCgJQgBgEABgDIABgCIACgBIACgBIAHAAQAJAOgDAOIABAAQAEADABAFIABAFQAKAFAGAIIAFAIIgBACIAAAAIgMgEgAtQszQAmgngjBBgArlt8IgBgBIgCgBIAAgBIAAgDIABgBIAAgBIAAgCIAAgBIAHgFIAEgEQAJgDAKgCIACgBIAJABIAAAAIABABIAFAAIABABIABADIAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBABAAAAQgQACgOAHIgEABIgBABQgBADgDAAIgBABIgBABIgEAAgAtIuZQgHgFABgJQACgLAJgFIAAgCQAEgGAIgBIACAAIAGgBQAcgEABAbQAAALgKAGIgEACQgEABgDgBQgHAEgIAAQgJAAgJgGgAtCuyQgFAJACAJQABAEADACQAEACAFgBIADgBIgBAAQgCgDgBgDQAEgDAAgFIACAAIALAAIACADQAAAAAAABQABABAAAAQAAAAABABQAAAAABAAQAGABABgGIAAgCQACgJgIgFQgHgGgJABIgCABIgBAAQgFABgDADIgEAFIgBAAgApGu6QgHgDgIgBIgBgCIAAgDIAAgDIACgBIADgBIAAAAQAUgDAOAMIABACIAAABIAAACIgBACIgIAAQgHAAgIgCgAq3vUIgCgFQgDgEABgGIAAgBIAAgDIAAgBIABgGIAJgIQACgDAEgCIAIgDIADABIADgBIAJACIACAAIAAABQAOAGgDASQgCAJgHAFIgKAHQgGADgGAAQgKAAgHgJgAqkv3IgEABIgBABQgEABgDADQgDADgBAFIgBACQgBAGADAFQADAHAGADQAFACADgCIgEgCQgFgCACgGIADgFIACgDQACgDADAAQAFgBADAEIABABIAAAAQAEAAABgDQADgGgEgEQgHgHgKAAIgBAAgArjwgIApgDIgxASg");
	this.shape_60.setTransform(2.6,23.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#626262").s().p("AAABuQAIiCgXhhIAIAAQAPAoAHAyIABAIIgEAAQACBOgOA7IAAgIg");
	this.shape_61.setTransform(21.7,-66.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#1C1C1C").s().p("AKGN4IAAgIIAAgIQB1gXhHh7QgBgCgEAAIAAgIIAAgIQAVAHAbgLQABAAAAAAQAAAAAAgBQAAgBAAAAQAAgBAAgBIAJAAIAIAAIAAAAQAIBXA6AiQADACAFAAIACAAIAAAEQABAFAFACQAOADAQABIgGABIgDABIgEAAQhcAdhRADQgBAAgBAAQAAAAgBAAQgBABAAAAQAAAAAAAAQgGAQgTAAIgEgBgALILcQAHAvARAkQAAABAAABQAAAAABABQAAAAAAABQAAAAAAAAQBVAXhuh2IAAAIgAtfLOIAQgBIADAAQgKACgKAAIABgBgAtLKbIAAgIIAIAAIAIAAIABAIQAEARgNgBIAAAEIgMACQADgKABgMgAHiHWQgEAAgCgCQgCgCAAgEQAAgEgBgBQgHgDgIAAIAAgIIAAgIQBbhJCbgJIAIAAQAAABAAABQAAABAAAAQgBABAAAAQAAAAAAAAQgLAEgNAAIAAAIIgIABQg0AIguAQIAAAIQgEAAgDACIgDACQgjATglASIAAAIIgEAAQABAQgMAAIgCAAgAlsiuQAAAAAAAAQAAgBgBAAQAAAAgBAAQgBAAgBAAQAEgtAgBMQABACAEAAIAAAIIAAAIIAYBSIABAIIAAAIQAGAdgOAKQAAgIgEgFIgJgVIhuBLQBehKgZiYgAhysmQAAgxgYgZQAEAAACgCQACgCAAgEQA2AbgTAYQgCACAAAEIgFAAQACAbgOAGIAAgIg");
	this.shape_62.setTransform(8.7,-17.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#272727").s().p("AlGBHQAAgBAAgBQAAAAgBgBQAAAAAAgBQAAAAgBAAQgLgEgMAAIAAgIIADAAQA9gJA0ABQAwABAoAKIAEABQAQAEgTgIQgugTgbgNQgpgUACgDQABAAAEAAQAWACATAHQBiAhAQBPIABAIQAAAEgCACQgCACgEAAQgMgYgKAVIgLAXQgFhni3ARgAFPhTQhUgFgeg8QAEgEAFgCQADgCAEAAQAoAuBDASIAIACQAAAEgCACQgCACgEAAIgJgBg");
	this.shape_63.setTransform(-39.7,-97.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#373737").s().p("AmZSvIgCgJIAEAAIACAMIgEgDgAFTyvQACgCAEAAQAHAOAYgKQABAAAAAAQAAAAAAgBQABgBAAAAQAAgBAAgBIAiALQgkAPhIAHQASgPARgQg");
	this.shape_64.setTransform(-38.2,2.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#1D1D1D").s().p("AjXSLQgBAAgBAAQAAAAgBAAQgBgBAAAAQAAAAAAgBQgQglgdAfIgEAAIgCgFIgEgHIAsgbQADgCAEAAQA9ARgrAbQgCABAAAEIgIAAgAqRJmQAAgEgCgBQgVgJAGgjQAchGAkg/QACgCAAgFQAOADgCAWIAEAAQAIAeAaAKQADABAEAAQAAAEgCACQgCADgEAAIAAAIIAAAHQgEAAgBgCQglgxggAsIAHAQQACAEAAAEIgJAAIgIAAIgIAAQgDAbANAMQACACAEAAQAAABAAABQAAABAAAAQAAABAAAAQgBAAAAAAQgLAFgMAAQAEAQAAAQgAKHxCQgJgZgDgfQAXACAGgRQAAAAAAAAQAAgBABAAQABAAAAAAQABAAABAAQAEAAACACQACACAAAEQAAAEgCACQgGAGgIAFIAAAHIAAAJIABAIQAFAWgOACQgBAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_65.setTransform(-52.5,5.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#F2F2F2").s().p("AiJNnIgBgBIAGAAIAAACIgFgBgACJtnIACAAIgDAHIABgHg");
	this.shape_66.setTransform(0.7,-42.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#0F0F0F").s().p("AAAAoQAAgEABgDQAVg1g1AUQAAgDgCgCQgCgCgEAAIAAgCIAAgGQAhABAGgaIAAgIQANgBgBASIAEAAQAIAYAMAVQAAABAAAAQABAAAAAAQABABAAAAQABAAABAAIAAAIIgIAAIgIAAQAAAIADAHQABABAEAAQAAABAAABQAAABAAAAQAAABgBAAQAAABAAAAQgKAEgHAAQgLAAgDgJg");
	this.shape_67.setTransform(-3.7,-122.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#353535").s().p("AENPMQgahBgjg5QAFgEAEgCQAEgCAEAAQAAAEACACQACACAEAAQAxCjBIh8QAGgJAAgeQAAgEAEgEQARAgAMApQAAAAAAAAQAAAAABABQAAAAABAAQABAAABAAIAAAIIAAAIQgEAAgDACIh0AnQgBAAgBAAQgBAAAAAAQgBAAAAgBQAAAAgBAAgAmMvFIAQgEIARgDQgNAKgUADIAAgGg");
	this.shape_68.setTransform(37.7,-38.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#262626").s().p("ADzRxIAMgDQgNAFgMAHIgsAFIA5gOgAFNRZIgDAFIgKABIANgGgALlQZIAGAAIgDACIgDgCgAKRQBIABgGIAFADIAFADIgLAAgAKiPdQACgLgLgDQgFgBgDAAIANgEIABADQABAEADAEIAAAAQAFAJAHAHIgNgIgA0HN/IAHgFIgBAFIAAABIgFAGIgBgHgAutL6IABABIAEACIAAAAQgOAIgRABIAagMgAyvLEQACgWgOgDIAAgIQAPgiApgLQAAAAABAAQAAAAAAgBQAAgBAAAAQAAgBAAgBQABAAABAAQABAAAAAAQABAAAAAAQABABAAAAQAHAXgcgIQACALAOACIAAADQgggDgJAUIAAAZIAAAIgAqOKyIBHgZQAMgEgDgKIAiALQAAAAAAABQAAAAABAAQAAABAAABQAAABAAABIAAAAIgvAQIgIACQgmAFglAGIAPgGgAjMKTIgEgJIAFABIAAAIIgBAAgAroJ+IAAgEQAtAAAtgEIAAgEIA4ARIgFAEIgCADIgMAEQgzgThMADgAj/KEQgNgFgNABIgpADIgBgKIgCgEIAHgGQA1AXgbhOIgBgIQAEAAACgCIADgBQAQA1ApAcQgGAAgIADIgNAEIgBgBgAmfJHQgbgNgggKIgIAAQg6gLgogeQAeALAkAFIAIABIAEACQApAVA0ANIABAFIAAAIQgEAAgDgCgAT6I1IgEgBIgCgEIgIgNIgBgEIACAAIAGABIAJAAIAIACIAEATIgFAAIgJAAgAmgIvQgngSgrgNIAAAAIgIgBQgpgIgZgYQAsANAuALIAIAAQAXAXAqAGIABAEIAAAIQgEAAgEgBgAvuFsQAMgUAHAKQABACAEAAQAHAWAZAGQABAAAAAAQAAAAAAABQAAABAAAAQAAABAAABIgEAAIAAABQAEAOgHAAQgLAAgngngACsFPQgSABABgNQBehPAliHIABgIIAGAJQACAEAAAEIgBAIQgVCChlBTgAK/D9IABAAIgBABQgIADgHABQAHgEAIgBgANjDkQgHgEgIAAIAAgDIATgFIAGAAIAIACIAAABQgGAEgCAGIgJACQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAAAgAwXDYQAAgEgCgBQgygggmgcIBYAMQAJgVAPA8QADAOgVAAIgEAAgApUCnQCwguhvAtQgbALgRAAQgPAAgGgKgAy4BDQgJgZgCgfQA3iLCGg+QADgCAEAAQAJAAAGAEQACABAAAEQgEAAgDABQhsBAhKBjIAABHIAAAJQAAAEgCACQgCACgEAAQgEAAgBgCgAhopAQAEgSgNABIAAgIIAAgRQAehBgVhSIgBgIQAOgHgCgaIAFAAIAAAQIAAAIIAACcIAAAIIAAAIQAGAjgXAHIABgIgAB7pJQAAgEgCgDQgvhsgZiDQAOgCgFgWIgBgIQApCDAgCLIABAIIgIAAgAgfs3QAtgPggBuIgBACQgFAAgHhhgAhlwcQABgRgNABQgBAAgBAAQgBgBAAAAQgBAAAAAAQAAAAAAAAQgUhYg6BAIAAgIIAAgRIAAgIQAxgFAkgPIAGgDQADgBAEAAIAAABIAAAHIAABSIAAAIg");
	this.shape_69.setTransform(7.8,-20.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#0E0E0E").s().p("AAAAlQAAgwgNghIANABQAGAIAGAKQACADAAAEIAAAvIAAAIQgEAAgDACQgFACgCAEIAAgIg");
	this.shape_70.setTransform(3.9,-130.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#212121").s().p("ALfK6QgCgCgEAAIAAAAQA2gKA1gOIAIAAIAIgBQAIAAAGAEQABAAAAAAQAAAAAAABQABAAAAABQAAAAAAABIgHACIgBAAQhDAHg4ARQAAgEgCgCgAthBOQgCgBAAgEQC8ggAshfQACgCAEAAQAbBYhoBpQgCACgDAAQhZgThBgqgAs6BJQAAAEABACQB8BXA3iOIgFgRQgdAZiSApgAA5oMQg5gQhIgIIAAgIQAngBgGgwIgBgIQAFgEAEgDQAEgBAEAAIgFARQABAsAQgUQBThxhfAOQAAgEgCgDQgHgJgIgIIAeAEQARACATAEIAZAGIAGAIIAAAAIAAAIIAAABIAAAIQAEAEACAFQACADAAAEIgBAIQgKAigNAgQgFAdAVADIAIABIAAAIIAAAIIgIgBg");
	this.shape_71.setTransform(7.8,-64.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFCC99").s().p("AtfPnQAPgSAYgKQACgBAAgEQAQgMAOgPQADgCAAgEIAtggIAuggQADgBAEAAQAugIAdAgIgRAGQgrAbguAYIgLAFQgpALggAYQgGAEgGACIgFABIgmAKgAuPPUQgNgLADgcIAJAAIAIAAQAxAegpAKIgIABQgEAAgDgCgAtnO2QgFAAgDgCIgRgHQAAgEgBgDIgHgRQAfgrAlAxQABACAFAAIgBAIQgEASgXAAIgNgBgApgOTIgBgBIAGgCIgCAEIgDgBgAslOLIgRgHQgEAAgEgBQgagKgHgeIAAgIIAAgYQAIgVAhAEIAIAAQAKALACAWIAEAAQA0AmgyAXQgCAAAAAFQgEAAgDgCgAoPN/IgDAAIAIgBIgBABIgCAAIgCAAgAppNkQg6h7hiADQgQABgRAEIAAAHIgEAAQgNhEggguIAAgIIAAgYQAIggANgWQAuhNBpAfIAIABQA/A/gJgmIAEAAQBnBFBbBTQAdAagRAFQgRAFgqAAQgEAAgBgBQgUgsgogUQATAmAMAsIABAIQAUAmgSAkQgCAEAAAEIAAAIQAAAMgDAKQgyAIgwAPQgIgJgFgLgArvNXQgcgJgKgcQAAgEgCgCQgNgQAGgjQAOgEAMgCQBVgOgMBuIAAAIIgJABIgJAAQgTAAgPgFgAB5MgQgHgKgMAAQgogcgQg1IgCgFIAAgJIAAgQQAgggAcAeQACACAEAAIAvBDQACADAAAEIAAAIQgBAfggACIAAAGgAAMMGQAFgFADgHQgHgNgNAGIgMAGIgHgBQghgLAIg2IA4AAIAIAAQAIAFAGAGQACACAAAEIABAIQAWA8gbAAQgIAAgMgGgADGL0Qg5gjgPhLQBBgSAkApQACACAEAAQAAgEgCgDQgKgSgNgQQAJgIAQAAIAIAAQAgARAbAWQADACAEAAIABAHQAiBdg0gjIgBgIQgMgogsgJQAAAEACACQBGBShpACQAAgEgCgBgAiWLUIACgFQgFABgFAAIgJAAQhUgBg3ggQgtgYgdgnIgFgIQiFgUh8hhQgEAAgDgCQg4gtgShTIAHgBQAaABgDgPQgPg9gKAWIhYgNQAAgEgCgCQgkgigTgyIAAgIIAAhKQBJhjBsg9QADgCAEAAQAogNA6AJQAAAAAAAAQABAAAAABQAAABAAAAQAAABAAABQAOBKAlh1IAUgDIBFgKQg3ABg9gTQgegQgdgLQgGgIgLgFIgBgFQAAgGgFgDIAAAAQACgOgJgNIgHgBIgCABIgCACIgBACQgBADABADQADAJgDAJIgDABIglghIgBgHQgCgGgEgGIgBgGQgCgLgEgKIgBhJIAAgJQA6APgfgxQgCgDAAgEIAAgIQAzgXAGhDIAAgIQAngPAWggQABgCAEAAQAwgJAjgWQADgCAEAAQC3gRAGBnIALgYQAJgVAMAYQAXBdgCA/IAEAAQAAAEABAEQARArgaAfIAAAIIAAAIQgBAAgBAAQgBAAAAABQgBAAAAAAQAAAAgBABIgUAwIAAAQIAAAIQgEAAgCACQg7AuhDAOQBYgIArAIQAjAHgig9QB+hjCfAxIAIABQBUhGB4AxIAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAABAAABIACgEQAGgagYinIAAgIQAWgGgFgjIgBgIIAEgBQAKhbgOhIIAAgIIAAgRQAAgEACgCQATgYg2gbIgIgBQhDgSgngvIAAgIIAAgQIBThAQADgCAEAAQA3gVgVA3QgCADAAAEQgEAAgCACQgQAQgSAPQBHgGAkgQIgigLQgEAAgBgBQgDgHAAgIIAIAAIAIAAQBKAIA6APIAIABQAmgGADgrIAGgBQAVBNhEAfIAAAIQgBAAgBAAQgBAAAAAAQgBAAAAABQAAAAgBAAQgGARgWgCQACAfAKAZQAAAAAAABQABAAAAAAQABAAABABQAAAAABAAQAZCDAwBrQABAEAAAEQAZBhgICEIAAAIIgCAIQgoCXibAlQAAADACACQACACAEAAQAAAEgCABQgGADgHAAIgBgEQhyABiMAUQgEAAgBgCQgehKgEAsQABAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQAXCYhdBMIBshNIAKAVQADAHAAAIIABAIQAEASgNgBIAAAIIAAAIQAAAEgCAEQgCAFgEAEQAaBEA5AkQADACAEAAQAAAEgCAEQgnBghZAuIgEgBIgeAPIgGABIADABIgeAMIgBABIgBABIgCgBQhOhChxgfQAAgEgCgDQhFhih1gyQAAgFgCgCQg0g/gshGQAEBzBOAnQAEACAEAAQB4AoA3BqQABABAEAAQBzApBTBIQADACAEAAQAvA0BCAdQAEABAEAAIADACQAjAUggAZIgIgDQgmgXgwgNQAAAEACACQBHAsh6gyQgFAAgCgCQgSgOghAAQAWAQAXAMIAFADIgBACIAEABQAmAJAeARQACABAAAEQAAABAAABQAAABAAAAQAAABAAAAQgBABAAAAQgLAEgNAAIAAgEQgqgHgXgWIAAgBIgIAAQgugKgsgOQAZAYAoAIIAIADIABgCQArAOAnARQADACAEAAQAeACgWANIgIgDQg1gNgpgWIACgEQgCACgEAAIgIAAQgjgFgfgLQAoAeA7AKIAIABQAfAKAbANIAGAHQgFADgHAAQgUAAgogVgApQFnQAaBQBYATIAMAAQgkhLhbggIABAIgAhrE8QB7B5h9h/QAAAEACACgAkJE/QANATA0gVQA3gWgPAAQgPAAhaAYgAkvleQgsBii8AgQAAAEABABQBCAqBYASQAEAAACgCQBohpgchZQgEAAgBABgAo4jlIACAbQAWgpgGAAQgEAAgOAOgAmxlHQgKACgKAEIgDADIgIAFIAAABIABADIgBAAIAAABIAAADIAAABIABACIABABIAEAAIACgCIAAgBQADAAACgCIAAgBIAEgCQAPgHAPgBQABgBAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBIAAgBIgBgCIgBgBIgFAAIAAgBIgBgBIgIAAIgCAAgAoYlzIgGABIgCABQgIABgDAGIgBABQgIAFgCAMQgCAIAHAFQAQALASgIQADABADgBIAEgCQALgGgBgLQAAgYgXAAIgGAAgAk6l6IAAABIgCAAIgCABIgBAEIAAADIABACQAIABAHACQAMAFALgDIABgBIABgCIAAgCIgBgBQgMgKgQAAIgHAAgApZmIQgGAeADgCQA9g4gJAAQgHAAgqAcgAmjmVQgCAGADAEIADAFQALAQASgKIAJgGQAIgGABgIQAEgSgOgHIgBAAIgCgBIgIgCIgEABIgCAAIgJADQgDABgDADIgIAIIgCAGIAAACIgBgBQAAABAAAAQABABAAABQAAAAAAABQAAAAABAAgAminUIgqACIgHAPIgDABIAAAEIArgRIALgEIAAAAIAEgCIAKgFIgQAGgAEqqfQAJBvAFgQQAehhghAAQgFAAgGACgADxJuIAAgEQgTgDgUAAQADgOAAgOQADgGADgQQAZiMANghQgEAAgBACQgaAhgOAuQgagKgQgYQgFgQgLgNIAAgCIAAgCIgBgBQgHgLgDgLIAAgHQAihhAuhUQABgDAAgFQBCgxBrgIIAIAAQCRAyhOCkQgCADAAAEQAAAEgCACQgCADgEAAQgJBCAYAhQACADAAAEIAAAIQgBCgiNAAQgnAAgxgMgAFEGIQAlC1gmi9IABAIgAEjGAQASCNgTiVIABAIgAEaEFIAAAIQgCB7AzgxQgOgCgGg3QgEglgLAAQgGAAgIAMgAIJI7QgcgVAKg7QBmhTAViDIAAgIQAPgmAzgCIAIgBQBJAXgmA9QgCACAAAFQgEAAgBABQgKAQgSAHIgIAAIAVAIQAtAPA5ACIAIAAIgBgFQgMgCAFgSIAcg4QAAAAAAgBQABAAAAAAQABAAABAAQAAAAABAAQAAAEACADQAWA1gwAWIAnAjQACACAAAEQAAAQAJAGQADACAEAAIACACQiKBWjYA0QgEAAgDgCgAJKHvQCwALixgPIABAEgAN1GeIgBgDIAAgFIABgCIAAgBIALgFIADgBIABgCIABgDIABgCIAAgBIAAgCIAAgCIADgDIADgEIABgBIADAAIAAgBIAIACIAAAAIABAAIAAABIABAGIAAAGIAAABQgCALgJAJIgDADIgKABQgGAAgHgCgANiGGQgNgLADgcQAFgTATgEIAIgBQAAAEACADQAaAvgsALQgEAAgCgCgAL+FXQgSgCABgWQANglAWgbIAGgCQAAAEACACQA1A7hHAZIgIAAgAGFtEQgVgDAEgdQANggALgiIADgHQA7ATg7BQQgCADAAAEIgIgBgAD9tVQgMgXgIgYIAAgJIAAhSQAUgDANgKIABgBQACADADABIAFAAQAQAhgDAzIAAAIIABAIQAGAwgoACQgBAAAAAAQgBgBgBAAQAAAAgBAAQAAgBAAAAgAEtuDIAGgSIAAgIIAAgxQBhgPhWBxQgEAGgEAAQgHAAgCgdgACptuQgXgOgLgxQA6hAATBXQAAAAABABQAAAAAAAAQABAAABAAQAAAAABAAIAAAIQgHAaghgBIAAAGg");
	this.shape_72.setTransform(-25.4,-35.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FAFAFA").s().p("ACfMJIAIADQgDACgEAAQAAgEgBgBgAgiMFIAIABIgBACgAgKL9IAIAAIAAAAIgIAAgAANL1IABgBIADABgApHHPIAIAAIgIABIAAgBgAGWBuIAAgEIABAEIgBAAgAJCsMIAAgBQABAAABAAQABAAAAAAQABAAAAABQAAAAABAAIABAGIgGABIAAgHg");
	this.shape_73.setTransform(-39.4,-44.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#202020").s().p("AGwPjIAAgIQACgNgBgMIABAAQACAJAFAHQAFAHgDAIIgLAKIAAgIgAFFN5IAAgCIAAgGIAFAAQgDAEAAAEIgCAAgAFxNpIADgDQACgCAAgEIAIAAIASATQgOgIgRgCgAm1tdQgCgCgEAAIAAgIQBEgfgVhNIgCgGQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAgBAAIAAgIQAIAAAHgDQABgBAAgEQABAAABAAQABAAAAAAQABAAAAAAQABAAAAABQAcBthSAlQAAgEgCgCg");
	this.shape_74.setTransform(58.8,-24.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#222222").s().p("AhqFwIADABIgBAEQAAgBgBgBQAAgBAAAAQAAgBAAAAQAAgBgBAAgAAxjwIAAgIQAAgEACgDQA8hQg8gTIgCAAQAAgFgBgDQgDgFgEgEIASAAQAIAAAHACQAjAJgCAvIAAAIQAAAEgCABQgHADgIAAIAAAIIAAABIAAAHQgCArgnAGIAAgIg");
	this.shape_75.setTransform(9.4,-94);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136.5,-135.9,273.3,271.8);


(lib.star = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFCC00").ss(0.1,1,1).p("AgdBTIAFg4IgvgZIAygNIAGhHIAaA9IA9gRIgsAzIAZA3Igxgag");
	this.shape.setTransform(7.2,8.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF33").s().p("AgYAbIgvgZIAygNIAGhHIAaA9IA9gRIgtAzIAaA3IgxgaIggApg");
	this.shape_1.setTransform(7.2,8.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,16.5,18.8);


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


(lib.screen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgsggfjMBZBAAAMAAAA/HMhZBAAAg");
	this.shape.setTransform(285,202);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,572,406);


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


(lib.ButtonBackground = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(0.1,1,1).p("AEtC5IpZAAIAAlxIJZAAg");
	this.shape.setTransform(31.2,19);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AkrC5IAAlxIJYAAIAAFxg");
	this.shape_1.setTransform(31.2,19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,-0.6,62.2,39.2);


(lib.dudeforquizzesride = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.dudeforquizzesridestill();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136.5,-135.9,273.2,271.8);


(lib.dudeforquizzes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dude
	this.instance = new lib.dudeforquizzesride();
	this.instance.setTransform(5.7,-3.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130.8,-139.2,273.2,271.8);


(lib.COOLEXPLODES = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_12 = function() {
		/* 
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(12).call(this.frame_12).wait(1));

	// Layer 1
	this.instance = new lib.Symbol16("synched",0);
	this.instance.setTransform(326.6,181.8,0.914,1.121,0,10.1,-4.7);
	this.instance.alpha = 0.949;

	this.instance_1 = new lib.Symbol15("synched",0);
	this.instance_1.setTransform(244.7,184,1.175,1.153,0,-6.3,-5.9);
	this.instance_1.alpha = 0.949;

	this.instance_2 = new lib.Symbol15("synched",0);
	this.instance_2.setTransform(148.8,184.5,1.143,1.152,0,15.1,14.5);
	this.instance_2.alpha = 0.949;

	this.instance_3 = new lib.Symbol14("synched",0);
	this.instance_3.setTransform(58.7,186.2,1.23,1.081,0,-12.5,-16.8);
	this.instance_3.alpha = 0.949;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3,p:{scaleX:1.23,scaleY:1.081,skewX:-12.5,skewY:-16.8,x:58.7,y:186.2,alpha:0.949}},{t:this.instance_2,p:{scaleX:1.143,scaleY:1.152,skewX:15.1,skewY:14.5,x:148.8,y:184.5,alpha:0.949,regX:0,regY:0}},{t:this.instance_1,p:{scaleX:1.175,scaleY:1.153,skewX:-6.3,skewY:-5.9,x:244.7,y:184,alpha:0.949,regX:0,regY:0}},{t:this.instance,p:{scaleX:0.914,scaleY:1.121,skewX:10.1,skewY:-4.7,x:326.6,y:181.8,alpha:0.949}}]}).to({state:[{t:this.instance_3,p:{scaleX:1.631,scaleY:0.676,skewX:-59.8,skewY:-43.4,x:41.4,y:177,alpha:0.852}},{t:this.instance_2,p:{scaleX:1.482,scaleY:1.545,skewX:46.1,skewY:44.4,x:126,y:173.2,alpha:0.852,regX:0,regY:0}},{t:this.instance_1,p:{scaleX:1.502,scaleY:1.549,skewX:-16.8,skewY:-15.1,x:274.4,y:169.3,alpha:0.852,regX:0,regY:0}},{t:this.instance,p:{scaleX:0.205,scaleY:1.614,skewX:46.5,skewY:-48.9,x:348.5,y:166.9,alpha:0.852}}]},1).to({state:[{t:this.instance_3,p:{scaleX:1.62,scaleY:1.201,skewX:163.9,skewY:-54.7,x:13.6,y:149.8,alpha:0.75}},{t:this.instance_2,p:{scaleX:1.875,scaleY:2.05,skewX:76.2,skewY:76,x:96.4,y:155.3,alpha:0.75,regX:0,regY:0}},{t:this.instance_1,p:{scaleX:1.669,scaleY:2.084,skewX:-24.8,skewY:-17.9,x:308.5,y:146.7,alpha:0.75,regX:0,regY:0}},{t:this.instance,p:{scaleX:1.211,scaleY:2.006,skewX:67.2,skewY:-178.4,x:373.9,y:151.2,alpha:0.75}}]},1).to({state:[{t:this.instance_3,p:{scaleX:1.632,scaleY:3.373,skewX:98.2,skewY:-18.3,x:-38.3,y:153.6,alpha:0.602}},{t:this.instance_2,p:{scaleX:2.838,scaleY:3.03,skewX:114.2,skewY:125.3,x:40.8,y:148,alpha:0.602,regX:0,regY:0}},{t:this.instance_1,p:{scaleX:1.487,scaleY:3.1,skewX:-32,skewY:7.4,x:361.9,y:152.9,alpha:0.602,regX:0,regY:0}},{t:this.instance,p:{scaleX:3.063,scaleY:1.326,skewX:146.8,skewY:157.8,x:415.5,y:129.3,alpha:0.602}}]},1).to({state:[{t:this.instance_3,p:{scaleX:2.015,scaleY:3.443,skewX:73.6,skewY:-8,x:-49.6,y:158.1,alpha:0.551}},{t:this.instance_2,p:{scaleX:3.366,scaleY:3.389,skewX:124.1,skewY:141.1,x:13.3,y:141,alpha:0.551,regX:0,regY:0}},{t:this.instance_1,p:{scaleX:1.514,scaleY:3.297,skewX:-34.5,skewY:29.2,x:371.4,y:161.5,alpha:0.551,regX:0,regY:0}},{t:this.instance,p:{scaleX:3.12,scaleY:1.916,skewX:153.5,skewY:150.7,x:416.1,y:127.8,alpha:0.551}}]},1).to({state:[{t:this.instance_3,p:{scaleX:3.433,scaleY:3.544,skewX:4.8,skewY:-1.3,x:-87.6,y:153.5,alpha:0.449}},{t:this.instance_2,p:{scaleX:5.023,scaleY:4.163,skewX:137.8,skewY:170,x:-56.5,y:114.8,alpha:0.449,regX:0,regY:0}},{t:this.instance_1,p:{scaleX:2.41,scaleY:3.009,skewX:-45.2,skewY:67.8,x:382.6,y:184.6,alpha:0.449,regX:0,regY:0}},{t:this.instance,p:{scaleX:2.481,scaleY:3.14,skewX:127.7,skewY:126.3,x:426.8,y:160.3,alpha:0.449}}]},1).to({state:[{t:this.instance_3,p:{scaleX:4.731,scaleY:4.03,skewX:-55,skewY:-16.3,x:-127.3,y:182.1,alpha:0.352}},{t:this.instance_2,p:{scaleX:8.534,scaleY:5.802,skewX:137,skewY:-166.3,x:-184.2,y:53.7,alpha:0.352,regX:0,regY:0}},{t:this.instance_1,p:{scaleX:3.956,scaleY:2.168,skewX:-71.9,skewY:80.8,x:395.3,y:201.7,alpha:0.352,regX:0,regY:0}},{t:this.instance,p:{scaleX:3.243,scaleY:5.598,skewX:95.3,skewY:45.2,x:527.7,y:186.7,alpha:0.352}}]},1).to({state:[{t:this.instance_3,p:{scaleX:4.683,scaleY:3.289,skewX:-81.1,skewY:-28.1,x:-117.7,y:198.7,alpha:0.301}},{t:this.instance_2,p:{scaleX:12.988,scaleY:9.113,skewX:129,skewY:-157.5,x:-349.5,y:-29.2,alpha:0.301,regX:0,regY:0}},{t:this.instance_1,p:{scaleX:4.612,scaleY:1.901,skewX:-90.1,skewY:83.1,x:405.3,y:197.9,alpha:0.301,regX:0,regY:0}},{t:this.instance,p:{scaleX:4.886,scaleY:6.658,skewX:77.3,skewY:16.3,x:587.5,y:164.8,alpha:0.301}}]},1).to({state:[{t:this.instance_3,p:{scaleX:4.396,scaleY:2.05,skewX:-126.6,skewY:-38,x:-110.9,y:194,alpha:0.25}},{t:this.instance_2,p:{scaleX:35.465,scaleY:31.538,skewX:119.7,skewY:-152.8,x:-1221.9,y:-470.4,alpha:0.25,regX:0,regY:0}},{t:this.instance_1,p:{scaleX:5.084,scaleY:1.748,skewX:-106.8,skewY:85.2,x:418.6,y:182.3,alpha:0.25,regX:0,regY:0}},{t:this.instance,p:{scaleX:5.363,scaleY:5.893,skewX:51.3,skewY:3.6,x:584.7,y:150.4,alpha:0.25}}]},1).to({state:[{t:this.instance_3,p:{scaleX:4.338,scaleY:2.838,skewX:148.2,skewY:-40.2,x:-149.5,y:168.7,alpha:0.199}},{t:this.instance_2,p:{scaleX:0,scaleY:0,skewX:0,skewY:0,x:53687091,y:53687091,alpha:0.199,regX:0,regY:0}},{t:this.instance_1,p:{scaleX:5.394,scaleY:1.546,skewX:-122.9,skewY:89.2,x:439.7,y:156.1,alpha:0.199,regX:0,regY:0}},{t:this.instance,p:{scaleX:6.193,scaleY:5.232,skewX:1.5,skewY:3.3,x:603.1,y:186.2,alpha:0.199}}]},1).to({state:[{t:this.instance_3,p:{scaleX:5.41,scaleY:7.156,skewX:111.7,skewY:-31.4,x:-285.5,y:145.8,alpha:0.148}},{t:this.instance_2,p:{scaleX:0,scaleY:0,skewX:0,skewY:0,x:53687091,y:53687091,alpha:0.148,regX:0,regY:0}},{t:this.instance_1,p:{scaleX:5.699,scaleY:1.154,skewX:-170.6,skewY:101.7,x:495.5,y:124,alpha:0.148,regX:0,regY:0}},{t:this.instance,p:{scaleX:10.472,scaleY:9.294,skewX:-50.3,skewY:3.4,x:772.9,y:237.4,alpha:0.148}}]},1).to({state:[{t:this.instance_3,p:{scaleX:7.235,scaleY:17.345,skewX:83.6,skewY:-36.3,x:-662.5,y:256.4,alpha:0.051}},{t:this.instance_2,p:{scaleX:0,scaleY:0,skewX:0,skewY:0,x:-2147483.6,y:-2147483.6,alpha:0.051,regX:-115200,regY:115200}},{t:this.instance_1,p:{scaleX:0,scaleY:0,skewX:0,skewY:0,x:-53687091.1,y:-53687091.1,alpha:0.051,regX:0,regY:0}},{t:this.instance,p:{scaleX:8.205,scaleY:9.221,skewX:-80,skewY:-28.8,x:723.3,y:138.2,alpha:0.051}}]},1).to({state:[{t:this.instance_3,p:{scaleX:3.807,scaleY:13.772,skewX:75.3,skewY:-155.2,x:-517.2,y:283.9,alpha:0}},{t:this.instance_2,p:{scaleX:0,scaleY:0,skewX:0,skewY:0,x:-2147483.6,y:-2147483.6,alpha:0,regX:-115200,regY:115200}},{t:this.instance_1,p:{scaleX:0,scaleY:0,skewX:0,skewY:0,x:-2147483.6,y:-2147483.6,alpha:0,regX:115200,regY:115200}},{t:this.instance,p:{scaleX:5.094,scaleY:6.113,skewX:-82.9,skewY:-61.1,x:582.1,y:147.1,alpha:0}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9.5,135.8,347.6,96.4);


(lib.COOL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_18 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(18).call(this.frame_18).wait(1));

	// Layer 1
	this.instance = new lib.Symbol19("synched",0);
	this.instance.setTransform(248.8,-5.2,1,1,-63);
	this.instance.alpha = 0.051;

	this.instance_1 = new lib.Symbol18("synched",0);
	this.instance_1.setTransform(294.2,114.3,1,1,-63);
	this.instance_1.alpha = 0.051;

	this.instance_2 = new lib.Symbol18("synched",0);
	this.instance_2.setTransform(167.2,154.3,1,1,-63);
	this.instance_2.alpha = 0.051;

	this.instance_3 = new lib.Symbol17("synched",0);
	this.instance_3.setTransform(41.8,191.2,1,1,-63);
	this.instance_3.alpha = 0.051;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3,p:{rotation:-63,x:41.8,y:191.2,alpha:0.051,scaleX:1,scaleY:1}},{t:this.instance_2,p:{rotation:-63,x:167.2,y:154.3,alpha:0.051,scaleX:1,scaleY:1}},{t:this.instance_1,p:{rotation:-63,x:294.2,y:114.3,alpha:0.051,scaleX:1,scaleY:1}},{t:this.instance,p:{rotation:-63,x:248.8,y:-5.2,alpha:0.051,scaleX:1,scaleY:1}}]}).to({state:[{t:this.instance_3,p:{rotation:72,x:248.1,y:-5.2,alpha:0.051,scaleX:1,scaleY:1}},{t:this.instance_2,p:{rotation:72,x:185.5,y:109.5,alpha:0.051,scaleX:1,scaleY:1}},{t:this.instance_1,p:{rotation:72,x:124,y:227.7,alpha:0.051,scaleX:1,scaleY:1}},{t:this.instance,p:{rotation:72,x:240.7,y:280,alpha:0.051,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_3,p:{rotation:144,x:359.6,y:143.8,alpha:0.102,scaleX:1,scaleY:1}},{t:this.instance_2,p:{rotation:144,x:234.1,y:123.7,alpha:0.051,scaleX:1,scaleY:1}},{t:this.instance_1,p:{rotation:144,x:105.6,y:105.8,alpha:0.102,scaleX:1,scaleY:1}},{t:this.instance,p:{rotation:144,x:89,y:228.9,alpha:0.051,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_3,p:{rotation:171,x:321.4,y:201.4,alpha:0.148,scaleX:1,scaleY:1}},{t:this.instance_2,p:{rotation:171,x:219.4,y:131.5,alpha:0.148,scaleX:1,scaleY:1}},{t:this.instance_1,p:{rotation:171,x:113.9,y:62.2,alpha:0.148,scaleX:1,scaleY:1}},{t:this.instance,p:{rotation:171,x:42.4,y:159.3,alpha:0.148,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_3,p:{rotation:-144,x:258.2,y:295.8,alpha:0.148,scaleX:1,scaleY:1}},{t:this.instance_2,p:{rotation:-144,x:235.6,y:174.3,alpha:0.148,scaleX:1,scaleY:1}},{t:this.instance_1,p:{rotation:-144,x:210,y:50.6,alpha:0.148,scaleX:1,scaleY:1}},{t:this.instance,p:{rotation:-144,x:90.7,y:68.7,alpha:0.148,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_3,p:{rotation:72,x:224.4,y:2.5,alpha:0.301,scaleX:1,scaleY:1}},{t:this.instance_2,p:{rotation:72,x:185.5,y:109.5,alpha:0.301,scaleX:1,scaleY:1}},{t:this.instance_1,p:{rotation:72,x:147.8,y:220,alpha:0.301,scaleX:1,scaleY:1}},{t:this.instance,p:{rotation:72,x:240.7,y:280,alpha:0.301,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_3,p:{rotation:144,x:344.9,y:123.5,alpha:0.352,scaleX:1,scaleY:1}},{t:this.instance_2,p:{rotation:144,x:234.1,y:123.7,alpha:0.301,scaleX:1,scaleY:1}},{t:this.instance_1,p:{rotation:144,x:120.3,y:126,alpha:0.352,scaleX:1,scaleY:1}},{t:this.instance,p:{rotation:144,x:89,y:228.9,alpha:0.301,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_3,p:{rotation:-159,x:296.6,y:248.8,alpha:0.398,scaleX:1,scaleY:1}},{t:this.instance_2,p:{rotation:-159,x:234.3,y:160.7,alpha:0.398,scaleX:1,scaleY:1}},{t:this.instance_1,p:{rotation:-159,x:168.6,y:71.2,alpha:0.398,scaleX:1,scaleY:1}},{t:this.instance,p:{rotation:-159,x:67.1,y:96.2,alpha:0.398,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_3,p:{rotation:31.9,x:68.5,y:20.5,alpha:0.449,scaleX:0.997,scaleY:0.997}},{t:this.instance_2,p:{rotation:31.9,x:115.6,y:114.3,alpha:0.449,scaleX:0.997,scaleY:0.997}},{t:this.instance_1,p:{rotation:31.9,x:165.6,y:210.2,alpha:0.449,scaleX:0.997,scaleY:0.997}},{t:this.instance,p:{rotation:31.9,x:267.2,y:209,alpha:0.449,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.instance_3,p:{rotation:-48,x:106.3,y:237.1,alpha:0.551,scaleX:1,scaleY:1}},{t:this.instance_2,p:{rotation:-48,x:199.8,y:200.5,alpha:0.551,scaleX:1,scaleY:1}},{t:this.instance_1,p:{rotation:-48,x:295.7,y:161.2,alpha:0.551,scaleX:1,scaleY:1}},{t:this.instance,p:{rotation:-48,x:319.9,y:67.5,alpha:0.551,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_3,p:{rotation:73.2,x:181.1,y:12.9,alpha:0.648,scaleX:0.999,scaleY:0.999}},{t:this.instance_2,p:{rotation:73.2,x:173.6,y:108.7,alpha:0.648,scaleX:0.999,scaleY:0.999}},{t:this.instance_1,p:{rotation:73.2,x:167.1,y:208.2,alpha:0.648,scaleX:0.999,scaleY:0.999}},{t:this.instance,p:{rotation:73.2,x:225,y:280.2,alpha:0.648,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance_3,p:{rotation:-179.2,x:311.6,y:176.2,alpha:0.648,scaleX:0.999,scaleY:0.999}},{t:this.instance_2,p:{rotation:-179.2,x:222.5,y:139.9,alpha:0.648,scaleX:0.999,scaleY:0.999}},{t:this.instance_1,p:{rotation:-179.2,x:129.7,y:103.7,alpha:0.648,scaleX:0.999,scaleY:0.999}},{t:this.instance,p:{rotation:-179.2,x:43.4,y:137.1,alpha:0.648,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance_3,p:{rotation:-144,x:287.6,y:255.3,alpha:0.648,scaleX:1,scaleY:1}},{t:this.instance_2,p:{rotation:-144,x:235.6,y:174.3,alpha:0.648,scaleX:1,scaleY:1}},{t:this.instance_1,p:{rotation:-144,x:180.6,y:91.1,alpha:0.648,scaleX:1,scaleY:1}},{t:this.instance,p:{rotation:-144,x:90.7,y:68.7,alpha:0.648,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_3,p:{rotation:0,x:67.3,y:126.3,alpha:0.75,scaleX:1,scaleY:1}},{t:this.instance_2,p:{rotation:0,x:157,y:151.3,alpha:0.75,scaleX:1,scaleY:1}},{t:this.instance_1,p:{rotation:0,x:250.4,y:176.3,alpha:0.75,scaleX:1,scaleY:1}},{t:this.instance,p:{rotation:0,x:336.2,y:151.5,alpha:0.75,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_3,p:{rotation:72,x:176.8,y:18,alpha:0.801,scaleX:1,scaleY:1}},{t:this.instance_2,p:{rotation:72,x:185.5,y:109.5,alpha:0.801,scaleX:1,scaleY:1}},{t:this.instance_1,p:{rotation:72,x:195.4,y:204.5,alpha:0.801,scaleX:1,scaleY:1}},{t:this.instance,p:{rotation:72,x:240.7,y:280,alpha:0.801,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_3,p:{rotation:-48.4,x:108.8,y:245.4,alpha:0.852,scaleX:0.998,scaleY:0.998}},{t:this.instance_2,p:{rotation:-48.4,x:179.3,y:188.4,alpha:0.852,scaleX:0.998,scaleY:0.998}},{t:this.instance_1,p:{rotation:-48.4,x:252.4,y:128.6,alpha:0.852,scaleX:0.998,scaleY:0.998}},{t:this.instance,p:{rotation:-48.4,x:298.1,y:54.6,alpha:0.852,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.instance_3,p:{rotation:93.6,x:219.6,y:23.2,alpha:0.852,scaleX:0.998,scaleY:0.998}},{t:this.instance_2,p:{rotation:93.6,x:199.1,y:111.7,alpha:0.852,scaleX:0.998,scaleY:0.998}},{t:this.instance_1,p:{rotation:93.6,x:178.3,y:203.8,alpha:0.852,scaleX:0.998,scaleY:0.998}},{t:this.instance,p:{rotation:93.6,x:187.7,y:290.2,alpha:0.852,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.instance_3,p:{rotation:-30,x:85.1,y:217.7,alpha:1,scaleX:1,scaleY:1}},{t:this.instance_2,p:{rotation:-30,x:162.8,y:172.8,alpha:1,scaleX:1,scaleY:1}},{t:this.instance_1,p:{rotation:-30,x:243.7,y:126.1,alpha:1,scaleX:1,scaleY:1}},{t:this.instance,p:{rotation:-30,x:318.1,y:83.4,alpha:1,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_3,p:{rotation:0,x:67.3,y:151.3,alpha:1,scaleX:1,scaleY:1}},{t:this.instance_2,p:{rotation:0,x:157,y:151.3,alpha:1,scaleX:1,scaleY:1}},{t:this.instance_1,p:{rotation:0,x:250.4,y:151.3,alpha:1,scaleX:1,scaleY:1}},{t:this.instance,p:{rotation:0,x:336.2,y:151.5,alpha:1,scaleX:1,scaleY:1}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.3,-30.7,335,262.6);


(lib.star_Flicker = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// star
	this.instance = new lib.star("synched",0);
	this.instance.setTransform(164.8,-3.4,0.395,0.148,0,0,0,7.2,8.4);

	this.instance_1 = new lib.star("synched",0);
	this.instance_1.setTransform(62.1,-5.5,0.846,0.649,0,0,0,7.3,8.4);

	this.instance_2 = new lib.star("synched",0);
	this.instance_2.setTransform(340.6,-11.2,0.77,0.289,0,0,0,7.3,8.4);

	this.instance_3 = new lib.star("synched",0);
	this.instance_3.setTransform(269.3,-15,0.865,0.451,0,0,0,7.2,8.4);

	this.instance_4 = new lib.star("synched",0);
	this.instance_4.setTransform(304,-1.5,0.746,0.364,0,0,0,7.2,8.4);

	this.instance_5 = new lib.star("synched",0);
	this.instance_5.setTransform(237.7,-2.5,0.956,0.749,0,0,0,7.2,8.4);

	this.instance_6 = new lib.star("synched",0);
	this.instance_6.setTransform(100.1,1.6,0.743,0.279,0,0,0,7.2,8.4);

	this.instance_7 = new lib.star("synched",0);
	this.instance_7.setTransform(193.8,-18.7,1.042,0.662,0,0,0,7.2,8.4);

	this.instance_8 = new lib.star("synched",0);
	this.instance_8.setTransform(137.6,-17,0.654,0.343,0,0,0,7.2,8.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8,p:{scaleX:0.654,scaleY:0.343,rotation:0,x:137.6,y:-17,regY:8.4,regX:7.2}},{t:this.instance_7,p:{scaleX:1.042,scaleY:0.662,rotation:0,x:193.8,y:-18.7,regX:7.2}},{t:this.instance_6,p:{regX:7.2,regY:8.4,scaleX:0.743,scaleY:0.279,x:100.1,y:1.6}},{t:this.instance_5,p:{regX:7.2,scaleX:0.956,scaleY:0.749,x:237.7,y:-2.5,regY:8.4,rotation:0}},{t:this.instance_4,p:{scaleX:0.746,scaleY:0.364,x:304,y:-1.5,regX:7.2,regY:8.4}},{t:this.instance_3,p:{scaleX:0.865,scaleY:0.451,x:269.3,y:-15,regY:8.4,regX:7.2,rotation:0}},{t:this.instance_2,p:{regX:7.3,scaleX:0.77,scaleY:0.289,x:340.6,y:-11.2,regY:8.4}},{t:this.instance_1,p:{regX:7.3,regY:8.4,scaleX:0.846,scaleY:0.649,x:62.1,y:-5.5,rotation:0}},{t:this.instance,p:{regY:8.4,scaleX:0.395,scaleY:0.148,x:164.8,y:-3.4,regX:7.2}}]}).to({state:[{t:this.instance_8,p:{scaleX:0.883,scaleY:0.49,rotation:30,x:301.5,y:-6.6,regY:8.4,regX:7.2}},{t:this.instance_7,p:{scaleX:0.872,scaleY:0.582,rotation:-30,x:266.9,y:1.8,regX:7.2}},{t:this.instance_6,p:{regX:7.3,regY:8.3,scaleX:0.587,scaleY:0.236,x:208.5,y:-15.1}},{t:this.instance_5,p:{regX:7.3,scaleX:0.837,scaleY:0.529,x:80.8,y:-4.5,regY:8.4,rotation:0}},{t:this.instance_4,p:{scaleX:0.764,scaleY:0.307,x:135.4,y:5,regX:7.2,regY:8.4}},{t:this.instance_3,p:{scaleX:0.949,scaleY:0.381,x:330.2,y:4.3,regY:8.4,regX:7.2,rotation:0}},{t:this.instance_2,p:{regX:7.2,scaleX:0.608,scaleY:0.245,x:260.3,y:-15.2,regY:8.4}},{t:this.instance_1,p:{regX:7.2,regY:8.3,scaleX:0.71,scaleY:0.514,x:171.3,y:4.8,rotation:0}},{t:this.instance,p:{regY:8.3,scaleX:0.312,scaleY:0.125,x:143.2,y:-12.7,regX:7.2}}]},1).to({state:[{t:this.instance_8,p:{scaleX:0.657,scaleY:0.409,rotation:30,x:221.9,y:7.4,regY:8.3,regX:7.2}},{t:this.instance_7,p:{scaleX:0.497,scaleY:0.422,rotation:45,x:87.8,y:4.9,regX:7.3}},{t:this.instance_6,p:{regX:7.2,regY:8.3,scaleX:0.271,scaleY:0.174,x:179.7,y:-9}},{t:this.instance_5,p:{regX:7.2,scaleX:0.744,scaleY:0.496,x:186.3,y:3.1,regY:8.4,rotation:0}},{t:this.instance_4,p:{scaleX:0.424,scaleY:0.226,x:207.3,y:-6.1,regX:7.3,regY:8.4}},{t:this.instance_3,p:{scaleX:0.577,scaleY:0.281,x:119.4,y:-5.1,regY:8.6,regX:7.2,rotation:0}},{t:this.instance_2,p:{regX:7.2,scaleX:0.403,scaleY:0.18,x:268.9,y:3.7,regY:8.3}},{t:this.instance_1,p:{regX:7.2,regY:8.4,scaleX:0.7,scaleY:0.522,x:289.8,y:-6,rotation:30}},{t:this.instance,p:{regY:8.1,scaleX:0.263,scaleY:0.092,x:237.9,y:-10.1,regX:7}}]},1).to({state:[{t:this.instance_8,p:{scaleX:0.564,scaleY:0.374,rotation:30,x:107.2,y:-5,regY:8.6,regX:7}},{t:this.instance_7,p:{scaleX:1.429,scaleY:0.734,rotation:-15,x:160.4,y:-5.9,regX:7.2}},{t:this.instance_6,p:{regX:7.3,regY:8.3,scaleX:0.369,scaleY:0.18,x:249.8,y:12.3}},{t:this.instance_5,p:{regX:7.2,scaleX:0.986,scaleY:0.513,x:182.7,y:12.7,regY:8.5,rotation:15}},{t:this.instance_4,p:{scaleX:0.552,scaleY:0.234,x:212,y:2.4,regX:7.2,regY:8.6}},{t:this.instance_3,p:{scaleX:0.643,scaleY:0.291,x:86.4,y:8,regY:8.5,regX:7.1,rotation:-30}},{t:this.instance_2,p:{regX:7.2,scaleX:0.333,scaleY:0.186,x:130.4,y:11.9,regY:8.1}},{t:this.instance_1,p:{regX:7.2,regY:8.4,scaleX:0.918,scaleY:0.54,x:291.4,y:11.9,rotation:0}},{t:this.instance,p:{regY:7.9,scaleX:0.287,scaleY:0.096,x:215.5,y:-10.5,regX:7}}]},1).to({state:[{t:this.instance_8,p:{scaleX:0.564,scaleY:0.374,rotation:30,x:117.6,y:-11.4,regY:8.6,regX:7}},{t:this.instance_7,p:{scaleX:1.429,scaleY:0.734,rotation:-15,x:170.8,y:-12.3,regX:7.2}},{t:this.instance_6,p:{regX:7.3,regY:8.3,scaleX:0.369,scaleY:0.18,x:260.2,y:5.9}},{t:this.instance_5,p:{regX:7.2,scaleX:0.986,scaleY:0.513,x:193.1,y:6.3,regY:8.5,rotation:15}},{t:this.instance_4,p:{scaleX:0.552,scaleY:0.234,x:222.4,y:-4,regX:7.2,regY:8.6}},{t:this.instance_3,p:{scaleX:0.643,scaleY:0.291,x:96.8,y:1.6,regY:8.5,regX:7.1,rotation:-30}},{t:this.instance_2,p:{regX:7.2,scaleX:0.333,scaleY:0.186,x:140.8,y:5.5,regY:8.1}},{t:this.instance_1,p:{regX:7.2,regY:8.4,scaleX:0.918,scaleY:0.54,x:301.8,y:5.5,rotation:0}},{t:this.instance,p:{regY:7.9,scaleX:0.287,scaleY:0.096,x:225.9,y:-16.9,regX:7}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(54.9,-25.3,292.2,30.2);


(lib.star_Explode = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// jump
	this.instance = new lib.star("synched",0);
	this.instance.setTransform(-49.2,-7,0.779,0.779,0,0,0,7.3,8.3);
	this.instance.alpha = 0.898;

	this.instance_1 = new lib.star("synched",0);
	this.instance_1.setTransform(88.4,-21.9,0.779,0.779,0,0,0,7.2,8.4);
	this.instance_1.alpha = 0.898;

	this.instance_2 = new lib.star("synched",0);
	this.instance_2.setTransform(-27.4,-16.3,0.779,0.779,0,0,0,7.3,8.3);
	this.instance_2.alpha = 0.898;

	this.instance_3 = new lib.star("synched",0);
	this.instance_3.setTransform(61,-14.5,0.779,0.779,0,0,0,7.2,8.3);
	this.instance_3.alpha = 0.898;

	this.instance_4 = new lib.star("synched",0);
	this.instance_4.setTransform(26.1,-11.9,0.779,0.779,0,0,0,7.2,8.4);
	this.instance_4.alpha = 0.898;

	this.instance_5 = new lib.star("synched",0);
	this.instance_5.setTransform(-5.1,-10.7,0.779,0.779,0,0,0,7.2,8.3);
	this.instance_5.alpha = 0.898;

	this.instance_6 = new lib.star("synched",0);
	this.instance_6.setTransform(12.1,-16.6,0.779,0.779,0,0,0,7.2,8.4);
	this.instance_6.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6,p:{y:-16.6,alpha:0.898,scaleX:0.779,scaleY:0.779,x:12.1,rotation:0}},{t:this.instance_5,p:{x:-5.1,y:-10.7,alpha:0.898,regY:8.3,scaleX:0.779,scaleY:0.779,rotation:0}},{t:this.instance_4,p:{x:26.1,y:-11.9,alpha:0.898,scaleX:0.779,scaleY:0.779,rotation:0}},{t:this.instance_3,p:{x:61,y:-14.5,alpha:0.898,regY:8.3,scaleX:0.779,scaleY:0.779,rotation:0}},{t:this.instance_2,p:{x:-27.4,y:-16.3,alpha:0.898,regX:7.3,regY:8.3,scaleX:0.779,scaleY:0.779,rotation:0}},{t:this.instance_1,p:{x:88.4,y:-21.9,alpha:0.898,scaleX:0.779,scaleY:0.779,rotation:0}},{t:this.instance,p:{regX:7.3,regY:8.3,x:-49.2,y:-7,alpha:0.898,scaleX:0.779,scaleY:0.779,rotation:0}}]}).to({state:[{t:this.instance_6,p:{y:-30.6,alpha:0.852,scaleX:0.779,scaleY:0.779,x:12.1,rotation:0}},{t:this.instance_5,p:{x:-9.1,y:-30.5,alpha:0.852,regY:8.3,scaleX:0.779,scaleY:0.779,rotation:0}},{t:this.instance_4,p:{x:35.7,y:-27.1,alpha:0.852,scaleX:0.779,scaleY:0.779,rotation:0}},{t:this.instance_3,p:{x:67.2,y:-30.5,alpha:0.852,regY:8.3,scaleX:0.779,scaleY:0.779,rotation:0}},{t:this.instance_2,p:{x:-38.2,y:-32.4,alpha:0.852,regX:7.3,regY:8.3,scaleX:0.779,scaleY:0.779,rotation:0}},{t:this.instance_1,p:{x:98.8,y:-32.3,alpha:0.852,scaleX:0.779,scaleY:0.779,rotation:0}},{t:this.instance,p:{regX:7.2,regY:8.4,x:-66.5,y:-17.3,alpha:0.852,scaleX:0.779,scaleY:0.779,rotation:0}}]},1).to({state:[{t:this.instance_6,p:{y:-42.4,alpha:0.801,scaleX:1,scaleY:1,x:10.5,rotation:0}},{t:this.instance_5,p:{x:-19.6,y:-32.8,alpha:0.801,regY:8.4,scaleX:1,scaleY:1,rotation:0}},{t:this.instance_4,p:{x:30.8,y:-36,alpha:0.801,scaleX:1,scaleY:1,rotation:0}},{t:this.instance_3,p:{x:76,y:-42.4,alpha:0.801,regY:8.4,scaleX:1,scaleY:1,rotation:0}},{t:this.instance_2,p:{x:-55.6,y:-31.2,alpha:0.801,regX:7.2,regY:8.4,scaleX:1,scaleY:1,rotation:0}},{t:this.instance_1,p:{x:114.8,y:-46,alpha:0.801,scaleX:1,scaleY:1,rotation:0}},{t:this.instance,p:{regX:7.2,regY:8.4,x:-86.8,y:-19.2,alpha:0.801,scaleX:1,scaleY:1,rotation:0}}]},1).to({state:[{t:this.instance_6,p:{y:-88.8,alpha:0.801,scaleX:1,scaleY:1,x:14.4,rotation:0}},{t:this.instance_5,p:{x:-34.4,y:-88.8,alpha:0.801,regY:8.4,scaleX:1,scaleY:1,rotation:0}},{t:this.instance_4,p:{x:59.5,y:-95.2,alpha:0.801,scaleX:1,scaleY:1,rotation:0}},{t:this.instance_3,p:{x:98.4,y:-95.2,alpha:0.801,regY:8.4,scaleX:1,scaleY:1,rotation:0}},{t:this.instance_2,p:{x:-68.8,y:-68.4,alpha:0.801,regX:7.2,regY:8.4,scaleX:1,scaleY:1,rotation:0}},{t:this.instance_1,p:{x:138.4,y:-75.2,alpha:0.801,scaleX:1,scaleY:1,rotation:0}},{t:this.instance,p:{regX:7.2,regY:8.4,x:-99.2,y:-45.2,alpha:0.801,scaleX:1,scaleY:1,rotation:0}}]},1).to({state:[{t:this.instance_6,p:{y:-145.6,alpha:0.648,scaleX:1.814,scaleY:1.762,x:85.5,rotation:15}},{t:this.instance_5,p:{x:-52.4,y:-132,alpha:0.648,regY:8.4,scaleX:2.324,scaleY:2.143,rotation:15}},{t:this.instance_4,p:{x:31.6,y:-113.6,alpha:0.648,scaleX:2.545,scaleY:2.048,rotation:-15}},{t:this.instance_3,p:{x:147.2,y:-130.7,alpha:0.648,regY:8.4,scaleX:2.545,scaleY:2.238,rotation:15}},{t:this.instance_2,p:{x:-94.4,y:-104.4,alpha:0.648,regX:7.2,regY:8.4,scaleX:2.655,scaleY:1.952,rotation:15}},{t:this.instance_1,p:{x:170.8,y:-68.2,alpha:0.648,scaleX:2.833,scaleY:2.667,rotation:30}},{t:this.instance,p:{regX:7.2,regY:8.4,x:-122.8,y:-54,alpha:0.648,scaleX:2.103,scaleY:2.048,rotation:-15}}]},1).to({state:[{t:this.instance_6,p:{y:-178.8,alpha:0.398,scaleX:1.814,scaleY:1.762,x:100.7,rotation:15}},{t:this.instance_5,p:{x:-49.2,y:-163.1,alpha:0.398,regY:8.4,scaleX:2.324,scaleY:2.143,rotation:15}},{t:this.instance_4,p:{x:25.2,y:-158.4,alpha:0.398,scaleX:2.545,scaleY:2.048,rotation:-15}},{t:this.instance_3,p:{x:166.4,y:-173.6,alpha:0.398,regY:8.4,scaleX:2.545,scaleY:2.238,rotation:15}},{t:this.instance_2,p:{x:-113.6,y:-140.3,alpha:0.398,regX:7.2,regY:8.4,scaleX:2.655,scaleY:1.952,rotation:15}},{t:this.instance_1,p:{x:201.2,y:-83.7,alpha:0.398,scaleX:2.833,scaleY:2.667,rotation:30}},{t:this.instance,p:{regX:7.2,regY:8.4,x:-147.9,y:-74.6,alpha:0.398,scaleX:2.103,scaleY:2.048,rotation:-15}}]},1).to({state:[{t:this.instance_6,p:{y:-201.7,alpha:0.25,scaleX:1.814,scaleY:1.762,x:120.8,rotation:60}},{t:this.instance_5,p:{x:-54.8,y:-197.6,alpha:0.25,regY:8.4,scaleX:2.324,scaleY:2.143,rotation:15}},{t:this.instance_4,p:{x:36.8,y:-211.8,alpha:0.25,scaleX:2.545,scaleY:2.048,rotation:-15}},{t:this.instance_3,p:{x:203.4,y:-194.2,alpha:0.25,regY:8.4,scaleX:1.69,scaleY:1.845,rotation:60}},{t:this.instance_2,p:{x:-132.1,y:-169.6,alpha:0.25,regX:7.2,regY:8.4,scaleX:2.655,scaleY:1.952,rotation:15}},{t:this.instance_1,p:{x:238.9,y:-97.9,alpha:0.25,scaleX:2.833,scaleY:2.667,rotation:60}},{t:this.instance,p:{regX:7.2,regY:8.4,x:-174,y:-95.9,alpha:0.25,scaleX:2.103,scaleY:2.048,rotation:-15}}]},1).to({state:[{t:this.instance_6,p:{y:-260.5,alpha:0.148,scaleX:1.814,scaleY:1.762,x:106.9,rotation:60}},{t:this.instance_5,p:{x:-74,y:-255.7,alpha:0.148,regY:8.4,scaleX:2.324,scaleY:2.143,rotation:15}},{t:this.instance_4,p:{x:55.2,y:-253.1,alpha:0.148,scaleX:2.545,scaleY:2.048,rotation:-15}},{t:this.instance_3,p:{x:231.4,y:-259.2,alpha:0.148,regY:8.4,scaleX:1.69,scaleY:1.845,rotation:60}},{t:this.instance_2,p:{x:-164.1,y:-203.2,alpha:0.148,regX:7.2,regY:8.4,scaleX:2.655,scaleY:1.952,rotation:15}},{t:this.instance_1,p:{x:268.5,y:-160.3,alpha:0.148,scaleX:2.833,scaleY:2.667,rotation:60}},{t:this.instance,p:{regX:7.2,regY:8.4,x:-206,y:-117.5,alpha:0.148,scaleX:2.103,scaleY:2.048,rotation:-15}}]},1).to({state:[{t:this.instance_6,p:{y:-284.5,alpha:0.051,scaleX:1.814,scaleY:1.762,x:106.9,rotation:60}},{t:this.instance_5,p:{x:-74,y:-279.7,alpha:0.051,regY:8.4,scaleX:2.324,scaleY:2.143,rotation:15}},{t:this.instance_4,p:{x:55.2,y:-277.1,alpha:0.051,scaleX:2.545,scaleY:2.048,rotation:-15}},{t:this.instance_3,p:{x:231.4,y:-283.2,alpha:0.051,regY:8.4,scaleX:1.69,scaleY:1.845,rotation:60}},{t:this.instance_2,p:{x:-194.5,y:-244.9,alpha:0.051,regX:7.2,regY:8.4,scaleX:2.655,scaleY:1.952,rotation:15}},{t:this.instance_1,p:{x:297.3,y:-185.2,alpha:0.051,scaleX:2.833,scaleY:2.667,rotation:60}},{t:this.instance,p:{regX:7.2,regY:8.4,x:-236.4,y:-141.5,alpha:0.051,scaleX:2.103,scaleY:2.048,rotation:-15}}]},1).to({state:[]},1).wait(6));

	// zoom
	this.instance_7 = new lib.star("synched",0);
	this.instance_7.setTransform(-71.6,20.8,1,1,0,0,0,7.2,8.4);

	this.instance_8 = new lib.star("synched",0);
	this.instance_8.setTransform(105.2,1.6,1,1,0,0,0,7.2,8.4);

	this.instance_9 = new lib.star("synched",0);
	this.instance_9.setTransform(-43.6,8.8,1,1,0,0,0,7.2,8.4);

	this.instance_10 = new lib.star("synched",0);
	this.instance_10.setTransform(70,11.2,1,1,0,0,0,7.2,8.4);

	this.instance_11 = new lib.star("synched",0);
	this.instance_11.setTransform(25.2,14.4,1,1,0,0,0,7.2,8.4);

	this.instance_12 = new lib.star("synched",0);
	this.instance_12.setTransform(-14.8,16,1,1,0,0,0,7.2,8.4);

	this.instance_13 = new lib.star("synched",0);
	this.instance_13.setTransform(7.2,8.4,1,1,0,0,0,7.2,8.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13,p:{scaleX:1,scaleY:1,x:7.2,y:8.4,alpha:1,regY:8.4}},{t:this.instance_12,p:{scaleX:1,scaleY:1,x:-14.8,y:16,alpha:1,rotation:0}},{t:this.instance_11,p:{scaleX:1,scaleY:1,x:25.2,y:14.4,alpha:1,regX:7.2}},{t:this.instance_10,p:{scaleX:1,scaleY:1,x:70,y:11.2,alpha:1,regY:8.4,regX:7.2}},{t:this.instance_9,p:{scaleX:1,scaleY:1,x:-43.6,y:8.8,alpha:1,regY:8.4}},{t:this.instance_8,p:{scaleX:1,scaleY:1,x:105.2,y:1.6,alpha:1,rotation:0}},{t:this.instance_7,p:{scaleX:1,scaleY:1,x:-71.6,y:20.8,alpha:1,rotation:0}}]}).to({state:[{t:this.instance_13,p:{scaleX:1.29,scaleY:1.29,x:10,y:-18,alpha:0.852,regY:8.4}},{t:this.instance_12,p:{scaleX:1.29,scaleY:1.29,x:-18.7,y:36.6,alpha:0.852,rotation:0}},{t:this.instance_11,p:{scaleX:1.29,scaleY:1.29,x:34,y:32.4,alpha:0.852,regX:7.2}},{t:this.instance_10,p:{scaleX:1.29,scaleY:1.29,x:76.5,y:-11.4,alpha:0.852,regY:8.4,regX:7.2}},{t:this.instance_9,p:{scaleX:1.29,scaleY:1.29,x:-49.9,y:-11.4,alpha:0.852,regY:8.4}},{t:this.instance_8,p:{scaleX:1.29,scaleY:1.29,x:123.1,y:10.7,alpha:0.852,rotation:0}},{t:this.instance_7,p:{scaleX:1.29,scaleY:1.29,x:-90.3,y:13.6,alpha:0.852,rotation:0}}]},1).to({state:[{t:this.instance_13,p:{scaleX:1.81,scaleY:1.81,x:20,y:-37.4,alpha:0.852,regY:8.3}},{t:this.instance_12,p:{scaleX:1.81,scaleY:1.81,x:-39.3,y:40.7,alpha:0.852,rotation:0}},{t:this.instance_11,p:{scaleX:1.81,scaleY:1.81,x:51.5,y:33.2,alpha:0.852,regX:7.3}},{t:this.instance_10,p:{scaleX:1.81,scaleY:1.81,x:91.9,y:-23.4,alpha:0.852,regY:8.3,regX:7.2}},{t:this.instance_9,p:{scaleX:1.81,scaleY:1.81,x:-56.9,y:-37.4,alpha:0.852,regY:8.3}},{t:this.instance_8,p:{scaleX:1.81,scaleY:1.81,x:136.1,y:17.2,alpha:0.852,rotation:0}},{t:this.instance_7,p:{scaleX:1.81,scaleY:1.81,x:-110.6,y:-3.1,alpha:0.852,rotation:0}}]},1).to({state:[{t:this.instance_13,p:{scaleX:3.565,scaleY:3.565,x:20,y:-52.6,alpha:0.75,regY:8.3}},{t:this.instance_12,p:{scaleX:3.565,scaleY:3.565,x:-51.1,y:48,alpha:0.75,rotation:0}},{t:this.instance_11,p:{scaleX:3.565,scaleY:3.565,x:44,y:48,alpha:0.75,regX:7.3}},{t:this.instance_10,p:{scaleX:3.565,scaleY:3.565,x:102.7,y:-42.6,alpha:0.75,regY:8.3,regX:7.2}},{t:this.instance_9,p:{scaleX:3.565,scaleY:3.565,x:-62.4,y:-59.8,alpha:0.75,regY:8.3}},{t:this.instance_8,p:{scaleX:3.565,scaleY:3.565,x:148.4,y:17.6,alpha:0.75,rotation:0}},{t:this.instance_7,p:{scaleX:3.565,scaleY:3.565,x:-118.2,y:-21.9,alpha:0.75,rotation:0}}]},1).to({state:[{t:this.instance_13,p:{scaleX:4.523,scaleY:4.523,x:19.7,y:-56.7,alpha:0.602,regY:8.4}},{t:this.instance_12,p:{scaleX:4.523,scaleY:4.523,x:-65.6,y:67,alpha:0.602,rotation:0}},{t:this.instance_11,p:{scaleX:4.523,scaleY:4.523,x:64.9,y:67,alpha:0.602,regX:7.3}},{t:this.instance_10,p:{scaleX:4.523,scaleY:4.523,x:105.9,y:-81.3,alpha:0.602,regY:8.3,regX:7.2}},{t:this.instance_9,p:{scaleX:4.523,scaleY:4.523,x:-72.6,y:-95,alpha:0.602,regY:8.4}},{t:this.instance_8,p:{scaleX:4.523,scaleY:4.523,x:181.2,y:12.3,alpha:0.602,rotation:0}},{t:this.instance_7,p:{scaleX:4.523,scaleY:4.523,x:-153,y:-23,alpha:0.602,rotation:0}}]},1).to({state:[{t:this.instance_13,p:{scaleX:5.346,scaleY:5.346,x:15.1,y:-54.5,alpha:0.449,regY:8.4}},{t:this.instance_12,p:{scaleX:5.346,scaleY:5.346,x:-72.2,y:68.8,alpha:0.449,rotation:0}},{t:this.instance_11,p:{scaleX:5.346,scaleY:5.346,x:78.4,y:72.8,alpha:0.449,regX:7.3}},{t:this.instance_10,p:{scaleX:5.346,scaleY:5.346,x:112.9,y:-94.1,alpha:0.449,regY:8.3,regX:7.2}},{t:this.instance_9,p:{scaleX:5.346,scaleY:5.346,x:-80.4,y:-105,alpha:0.449,regY:8.4}},{t:this.instance_8,p:{scaleX:5.346,scaleY:5.346,x:200.1,y:12.3,alpha:0.449,rotation:0}},{t:this.instance_7,p:{scaleX:5.346,scaleY:5.346,x:-171.9,y:-21,alpha:0.449,rotation:0}}]},1).to({state:[{t:this.instance_13,p:{scaleX:5.346,scaleY:5.346,x:10.6,y:-49.5,alpha:0.449,regY:8.4}},{t:this.instance_12,p:{scaleX:5.346,scaleY:5.346,x:-79.4,y:73.8,alpha:0.449,rotation:0}},{t:this.instance_11,p:{scaleX:5.346,scaleY:5.346,x:88.4,y:77.8,alpha:0.449,regX:7.3}},{t:this.instance_10,p:{scaleX:5.346,scaleY:5.346,x:110.3,y:-112.4,alpha:0.449,regY:8.3,regX:7.2}},{t:this.instance_9,p:{scaleX:5.346,scaleY:5.346,x:-79.4,y:-116,alpha:0.449,regY:8.4}},{t:this.instance_8,p:{scaleX:5.346,scaleY:5.346,x:214.1,y:2.8,alpha:0.449,rotation:0}},{t:this.instance_7,p:{scaleX:5.346,scaleY:5.346,x:-185.9,y:-22,alpha:0.449,rotation:0}}]},1).to({state:[{t:this.instance_13,p:{scaleX:5.346,scaleY:5.346,x:8.9,y:-47.5,alpha:0.449,regY:8.4}},{t:this.instance_12,p:{scaleX:5.346,scaleY:5.346,x:-87.4,y:80.8,alpha:0.449,rotation:0}},{t:this.instance_11,p:{scaleX:5.346,scaleY:5.346,x:96.6,y:80.8,alpha:0.449,regX:7.3}},{t:this.instance_10,p:{scaleX:5.346,scaleY:5.346,x:109.3,y:-127.1,alpha:0.449,regY:8.3,regX:7.2}},{t:this.instance_9,p:{scaleX:5.346,scaleY:5.346,x:-82.4,y:-122,alpha:0.449,regY:8.4}},{t:this.instance_8,p:{scaleX:5.346,scaleY:5.346,x:222.1,y:2.8,alpha:0.449,rotation:0}},{t:this.instance_7,p:{scaleX:5.346,scaleY:5.346,x:-194.9,y:-15,alpha:0.449,rotation:0}}]},1).to({state:[{t:this.instance_13,p:{scaleX:5.346,scaleY:5.346,x:8.1,y:-43.5,alpha:0.449,regY:8.4}},{t:this.instance_12,p:{scaleX:5.346,scaleY:5.346,x:-93.7,y:85.8,alpha:0.449,rotation:0}},{t:this.instance_11,p:{scaleX:5.346,scaleY:5.346,x:108.8,y:91.8,alpha:0.449,regX:7.3}},{t:this.instance_10,p:{scaleX:5.346,scaleY:5.346,x:114.3,y:-133.9,alpha:0.449,regY:8.3,regX:7.2}},{t:this.instance_9,p:{scaleX:5.346,scaleY:5.346,x:-85.4,y:-138,alpha:0.449,regY:8.4}},{t:this.instance_8,p:{scaleX:5.346,scaleY:5.346,x:232.1,y:-4,alpha:0.449,rotation:0}},{t:this.instance_7,p:{scaleX:5.346,scaleY:5.346,x:-199.9,y:-8,alpha:0.449,rotation:0}}]},1).to({state:[{t:this.instance_13,p:{scaleX:5.346,scaleY:5.346,x:8.9,y:-36.5,alpha:0.449,regY:8.4}},{t:this.instance_12,p:{scaleX:5.346,scaleY:5.346,x:-103.4,y:85.8,alpha:0.449,rotation:0}},{t:this.instance_11,p:{scaleX:5.346,scaleY:5.346,x:112.8,y:95.8,alpha:0.449,regX:7.3}},{t:this.instance_10,p:{scaleX:5.346,scaleY:5.346,x:112.3,y:-148.6,alpha:0.449,regY:8.3,regX:7.2}},{t:this.instance_9,p:{scaleX:5.346,scaleY:5.346,x:-86.4,y:-148,alpha:0.449,regY:8.4}},{t:this.instance_8,p:{scaleX:5.346,scaleY:5.346,x:237.1,y:-4,alpha:0.449,rotation:0}},{t:this.instance_7,p:{scaleX:5.346,scaleY:5.346,x:-206.9,y:-4,alpha:0.449,rotation:0}}]},1).to({state:[{t:this.instance_13,p:{scaleX:5.346,scaleY:5.346,x:11.1,y:-40.5,alpha:0.449,regY:8.4}},{t:this.instance_12,p:{scaleX:5.346,scaleY:5.346,x:-116.4,y:98.8,alpha:0.449,rotation:0}},{t:this.instance_11,p:{scaleX:5.346,scaleY:5.346,x:123.1,y:98.8,alpha:0.449,regX:7.3}},{t:this.instance_10,p:{scaleX:5.346,scaleY:5.346,x:118.3,y:-167.9,alpha:0.449,regY:8.3,regX:7.2}},{t:this.instance_9,p:{scaleX:5.346,scaleY:5.346,x:-92.4,y:-173,alpha:0.449,regY:8.4}},{t:this.instance_8,p:{scaleX:5.346,scaleY:5.346,x:256.1,y:-14.7,alpha:0.449,rotation:0}},{t:this.instance_7,p:{scaleX:5.346,scaleY:5.346,x:-217.9,y:-1,alpha:0.449,rotation:0}}]},1).to({state:[{t:this.instance_13,p:{scaleX:8.944,scaleY:8.85,x:9.7,y:-37.3,alpha:0.301,regY:8.4}},{t:this.instance_12,p:{scaleX:10.74,scaleY:9.237,x:-120,y:122.9,alpha:0.301,rotation:-15}},{t:this.instance_11,p:{scaleX:9.904,scaleY:9.716,x:139.6,y:118.6,alpha:0.301,regX:7.3}},{t:this.instance_10,p:{scaleX:9.617,scaleY:8.946,x:136.5,y:-194.7,alpha:0.301,regY:8.4,regX:7.2}},{t:this.instance_9,p:{scaleX:9.365,scaleY:10.235,x:-102.2,y:-189.3,alpha:0.301,regY:8.3}},{t:this.instance_8,p:{scaleX:9.729,scaleY:9.729,x:285.5,y:-22.5,alpha:0.301,rotation:15}},{t:this.instance_7,p:{scaleX:8.596,scaleY:8.194,x:-243.9,y:11.4,alpha:0.301,rotation:23.8}}]},1).to({state:[{t:this.instance_13,p:{scaleX:14.424,scaleY:12.853,x:11.3,y:-46.3,alpha:0.148,regY:8.4}},{t:this.instance_12,p:{scaleX:12.891,scaleY:11.873,x:-151.6,y:148.2,alpha:0.148,rotation:0}},{t:this.instance_11,p:{scaleX:15.094,scaleY:14.542,x:168.8,y:160.2,alpha:0.148,regX:7.3}},{t:this.instance_10,p:{scaleX:13.556,scaleY:11.526,x:153.5,y:-227.6,alpha:0.148,regY:8.3,regX:7.3}},{t:this.instance_9,p:{scaleX:15.461,scaleY:14.542,x:-111.9,y:-235.7,alpha:0.148,regY:8.4}},{t:this.instance_8,p:{scaleX:15.853,scaleY:12.265,x:312.9,y:-26.6,alpha:0.148,rotation:0}},{t:this.instance_7,p:{scaleX:14.776,scaleY:14.419,x:-272,y:17.6,alpha:0.148,rotation:0}}]},1).to({state:[{t:this.instance_13,p:{scaleX:14.424,scaleY:12.853,x:9.4,y:-48.5,alpha:0.148,regY:8.4}},{t:this.instance_12,p:{scaleX:12.891,scaleY:11.873,x:-168.6,y:169.2,alpha:0.148,rotation:0}},{t:this.instance_11,p:{scaleX:15.094,scaleY:14.542,x:189.8,y:164.1,alpha:0.148,regX:7.3}},{t:this.instance_10,p:{scaleX:13.556,scaleY:11.526,x:167.5,y:-262.3,alpha:0.148,regY:8.3,regX:7.3}},{t:this.instance_9,p:{scaleX:15.461,scaleY:14.542,x:-116.9,y:-273.7,alpha:0.148,regY:8.4}},{t:this.instance_8,p:{scaleX:15.853,scaleY:12.265,x:340.6,y:-23.6,alpha:0.148,rotation:0}},{t:this.instance_7,p:{scaleX:14.776,scaleY:14.419,x:-313,y:-11.4,alpha:0.148,rotation:0}}]},1).to({state:[{t:this.instance_13,p:{scaleX:17.964,scaleY:16.006,x:4.1,y:-50,alpha:0.148,regY:8.4}},{t:this.instance_12,p:{scaleX:16.054,scaleY:14.787,x:-184.4,y:208.6,alpha:0.148,rotation:0}},{t:this.instance_11,p:{scaleX:18.797,scaleY:18.11,x:222.7,y:220.2,alpha:0.148,regX:7.3}},{t:this.instance_10,p:{scaleX:16.882,scaleY:14.354,x:172.9,y:-316.5,alpha:0.148,regY:8.3,regX:7.3}},{t:this.instance_9,p:{scaleX:19.255,scaleY:18.11,x:-124.9,y:-336.6,alpha:0.148,regY:8.4}},{t:this.instance_8,p:{scaleX:19.743,scaleY:15.275,x:406.9,y:-20.9,alpha:0.148,rotation:0}},{t:this.instance_7,p:{scaleX:18.402,scaleY:17.958,x:-373.8,y:20.6,alpha:0.148,rotation:0}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.8,-29.4,193.3,59.7);


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


(lib.animation_hotdog = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_134 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(134).call(this.frame_134).wait(1));

	// content
	this.instance = new lib.Symbol228("synched",0);
	this.instance.setTransform(-449.9,1);

	this.instance_1 = new lib.Symbol227("synched",0);
	this.instance_1.setTransform(-437.6,150.9,0.407,0.407,-15);

	this.instance_2 = new lib.Symbol227("synched",0);
	this.instance_2.setTransform(-370.5,150.4,0.407,0.407,-15);

	this.instance_3 = new lib.Symbol227("synched",0);
	this.instance_3.setTransform(-399.7,68.4,0.407,0.407,-15);

	this.instance_4 = new lib.Symbol227("synched",0);
	this.instance_4.setTransform(-344.6,83.9,0.407,0.407,-15);

	this.instance_5 = new lib.Symbol226("synched",0);
	this.instance_5.setTransform(-275.4,-200);

	this.instance_6 = new lib.Symbol225("synched",0);
	this.instance_6.setTransform(-218.9,-91.2);

	this.instance_7 = new lib.Symbol224("synched",0);
	this.instance_7.setTransform(-275,-200);

	this.instance_8 = new lib.Symbol225("synched",0);
	this.instance_8.setTransform(-218.9,-91.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5,p:{x:-275.4}},{t:this.instance_4,p:{scaleX:0.407,scaleY:0.407,x:-344.6,y:83.9,rotation:-15,skewX:0,skewY:0}},{t:this.instance_3,p:{scaleX:0.407,scaleY:0.407,x:-399.7,y:68.4,rotation:-15,skewX:0,skewY:0}},{t:this.instance_2,p:{scaleX:0.407,scaleY:0.407,x:-370.5,y:150.4,rotation:-15,skewX:0,skewY:0}},{t:this.instance_1,p:{scaleX:0.407,scaleY:0.407,x:-437.6,y:150.9,rotation:-15,skewX:0,skewY:0}},{t:this.instance,p:{scaleX:1,scaleY:1,x:-449.9,y:1,rotation:0,skewX:0,skewY:0}}]}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5,p:{x:-275.4}},{t:this.instance_4,p:{scaleX:0.407,scaleY:0.407,x:-344.6,y:83.9,rotation:-15,skewX:0,skewY:0}},{t:this.instance_3,p:{scaleX:0.407,scaleY:0.407,x:-399.7,y:68.4,rotation:-15,skewX:0,skewY:0}},{t:this.instance_2,p:{scaleX:0.407,scaleY:0.407,x:-370.5,y:150.4,rotation:-15,skewX:0,skewY:0}},{t:this.instance_1,p:{scaleX:0.407,scaleY:0.407,x:-437.6,y:150.9,rotation:-15,skewX:0,skewY:0}},{t:this.instance,p:{scaleX:1,scaleY:1,x:-449.9,y:1,rotation:0,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5,p:{x:-275.4}},{t:this.instance_4,p:{scaleX:0.407,scaleY:0.407,x:-344.6,y:83.9,rotation:-15,skewX:0,skewY:0}},{t:this.instance_3,p:{scaleX:0.407,scaleY:0.407,x:-399.7,y:68.4,rotation:-15,skewX:0,skewY:0}},{t:this.instance_2,p:{scaleX:0.407,scaleY:0.407,x:-370.5,y:150.4,rotation:-15,skewX:0,skewY:0}},{t:this.instance_1,p:{scaleX:0.407,scaleY:0.407,x:-437.6,y:150.9,rotation:-15,skewX:0,skewY:0}},{t:this.instance,p:{scaleX:1,scaleY:1,x:-449.9,y:1,rotation:0,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5,p:{x:-275.4}},{t:this.instance_4,p:{scaleX:0.407,scaleY:0.407,x:-344.6,y:83.9,rotation:-15,skewX:0,skewY:0}},{t:this.instance_3,p:{scaleX:0.407,scaleY:0.407,x:-399.7,y:68.4,rotation:-15,skewX:0,skewY:0}},{t:this.instance_2,p:{scaleX:0.407,scaleY:0.407,x:-370.5,y:150.4,rotation:-15,skewX:0,skewY:0}},{t:this.instance_1,p:{scaleX:0.407,scaleY:0.407,x:-437.6,y:150.9,rotation:-15,skewX:0,skewY:0}},{t:this.instance,p:{scaleX:1,scaleY:1,x:-449.9,y:1,rotation:0,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5,p:{x:-275.4}},{t:this.instance_4,p:{scaleX:0.51,scaleY:0.51,x:-361.3,y:54.9,rotation:-15,skewX:0,skewY:0}},{t:this.instance_3,p:{scaleX:0.51,scaleY:0.51,x:-430.4,y:35.5,rotation:-15,skewX:0,skewY:0}},{t:this.instance_2,p:{scaleX:0.51,scaleY:0.51,x:-393.8,y:138.3,rotation:-15,skewX:0,skewY:0}},{t:this.instance_1,p:{scaleX:0.51,scaleY:0.51,x:-477.9,y:139,rotation:-15,skewX:0,skewY:0}},{t:this.instance,p:{scaleX:1.254,scaleY:1.254,x:-493.2,y:-49,rotation:0,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5,p:{x:-275.4}},{t:this.instance_4,p:{scaleX:0.498,scaleY:0.499,x:-348.7,y:54.1,rotation:0,skewX:-14.8,skewY:-15}},{t:this.instance_3,p:{scaleX:0.498,scaleY:0.499,x:-416.1,y:35.3,rotation:0,skewX:-14.8,skewY:-15}},{t:this.instance_2,p:{scaleX:0.498,scaleY:0.499,x:-380.4,y:135.4,rotation:0,skewX:-14.8,skewY:-15}},{t:this.instance_1,p:{scaleX:0.498,scaleY:0.499,x:-462.4,y:136,rotation:0,skewX:-14.8,skewY:-15}},{t:this.instance,p:{scaleX:1.226,scaleY:1.227,x:-477.5,y:-48.1,rotation:0,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5,p:{x:-275.4}},{t:this.instance_4,p:{scaleX:0.487,scaleY:0.488,x:-336,y:53.2,rotation:0,skewX:-14.8,skewY:-15}},{t:this.instance_3,p:{scaleX:0.487,scaleY:0.488,x:-401.9,y:35.1,rotation:0,skewX:-14.8,skewY:-15}},{t:this.instance_2,p:{scaleX:0.487,scaleY:0.488,x:-367.1,y:132.5,rotation:0,skewX:-14.8,skewY:-15}},{t:this.instance_1,p:{scaleX:0.487,scaleY:0.488,x:-447,y:133.1,rotation:0,skewX:-14.8,skewY:-15}},{t:this.instance,p:{scaleX:1.198,scaleY:1.201,x:-461.9,y:-47.2,rotation:0,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5,p:{x:-275.4}},{t:this.instance_4,p:{scaleX:0.475,scaleY:0.477,x:-323.5,y:52.3,rotation:0,skewX:-14.8,skewY:-15.1}},{t:this.instance_3,p:{scaleX:0.475,scaleY:0.477,x:-387.7,y:34.9,rotation:0,skewX:-14.8,skewY:-15.1}},{t:this.instance_2,p:{scaleX:0.475,scaleY:0.477,x:-353.9,y:129.6,rotation:0,skewX:-14.8,skewY:-15.1}},{t:this.instance_1,p:{scaleX:0.475,scaleY:0.477,x:-431.7,y:130.2,rotation:0,skewX:-14.8,skewY:-15.1}},{t:this.instance,p:{scaleX:1.17,scaleY:1.175,x:-446.3,y:-46.4,rotation:0,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5,p:{x:-275.4}},{t:this.instance_4,p:{scaleX:0.464,scaleY:0.466,x:-310.9,y:51.4,rotation:0,skewX:-14.6,skewY:-15.1}},{t:this.instance_3,p:{scaleX:0.464,scaleY:0.466,x:-373.4,y:34.6,rotation:0,skewX:-14.6,skewY:-15.1}},{t:this.instance_2,p:{scaleX:0.464,scaleY:0.466,x:-340.5,y:126.6,rotation:0,skewX:-14.6,skewY:-15.1}},{t:this.instance_1,p:{scaleX:0.464,scaleY:0.466,x:-416.2,y:127.2,rotation:0,skewX:-14.6,skewY:-15.1}},{t:this.instance,p:{scaleX:1.141,scaleY:1.149,x:-430.6,y:-45.4,rotation:0,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5,p:{x:-275.4}},{t:this.instance_4,p:{scaleX:0.453,scaleY:0.456,x:-298.4,y:50.6,rotation:0,skewX:-14.6,skewY:-15.3}},{t:this.instance_3,p:{scaleX:0.453,scaleY:0.456,x:-359.2,y:34.6,rotation:0,skewX:-14.6,skewY:-15.3}},{t:this.instance_2,p:{scaleX:0.453,scaleY:0.456,x:-327.2,y:123.8,rotation:0,skewX:-14.6,skewY:-15.3}},{t:this.instance_1,p:{scaleX:0.453,scaleY:0.456,x:-400.8,y:124.4,rotation:0,skewX:-14.6,skewY:-15.3}},{t:this.instance,p:{scaleX:1.113,scaleY:1.122,x:-415,y:-44.5,rotation:0,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5,p:{x:-275.4}},{t:this.instance_4,p:{scaleX:0.441,scaleY:0.445,x:-285.8,y:49.7,rotation:0,skewX:-14.5,skewY:-15.3}},{t:this.instance_3,p:{scaleX:0.441,scaleY:0.445,x:-345,y:34.4,rotation:0,skewX:-14.5,skewY:-15.3}},{t:this.instance_2,p:{scaleX:0.441,scaleY:0.445,x:-314,y:120.9,rotation:0,skewX:-14.5,skewY:-15.3}},{t:this.instance_1,p:{scaleX:0.441,scaleY:0.445,x:-385.5,y:121.5,rotation:0,skewX:-14.5,skewY:-15.3}},{t:this.instance,p:{scaleX:1.085,scaleY:1.096,x:-399.3,y:-43.7,rotation:0,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5,p:{x:-275.4}},{t:this.instance_4,p:{scaleX:0.43,scaleY:0.434,x:-273.1,y:48.9,rotation:0,skewX:-14.5,skewY:-15.3}},{t:this.instance_3,p:{scaleX:0.43,scaleY:0.434,x:-330.8,y:34.2,rotation:0,skewX:-14.5,skewY:-15.3}},{t:this.instance_2,p:{scaleX:0.43,scaleY:0.434,x:-300.7,y:118.1,rotation:0,skewX:-14.5,skewY:-15.3}},{t:this.instance_1,p:{scaleX:0.43,scaleY:0.434,x:-370.1,y:118.5,rotation:0,skewX:-14.5,skewY:-15.3}},{t:this.instance,p:{scaleX:1.057,scaleY:1.07,x:-383.7,y:-42.8,rotation:0,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5,p:{x:-275.4}},{t:this.instance_4,p:{scaleX:0.418,scaleY:0.424,x:-260.6,y:48,rotation:0,skewX:-14.3,skewY:-15.3}},{t:this.instance_3,p:{scaleX:0.418,scaleY:0.424,x:-316.5,y:34,rotation:0,skewX:-14.3,skewY:-15.3}},{t:this.instance_2,p:{scaleX:0.418,scaleY:0.424,x:-287.4,y:115.1,rotation:0,skewX:-14.3,skewY:-15.3}},{t:this.instance_1,p:{scaleX:0.418,scaleY:0.424,x:-354.6,y:115.5,rotation:0,skewX:-14.3,skewY:-15.3}},{t:this.instance,p:{scaleX:1.029,scaleY:1.044,x:-368.1,y:-42,rotation:0,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5,p:{x:-275.4}},{t:this.instance_4,p:{scaleX:0.407,scaleY:0.413,x:-248,y:47.2,rotation:0,skewX:-14.3,skewY:-15.5}},{t:this.instance_3,p:{scaleX:0.407,scaleY:0.413,x:-302.3,y:33.8,rotation:0,skewX:-14.3,skewY:-15.5}},{t:this.instance_2,p:{scaleX:0.407,scaleY:0.413,x:-274.1,y:112.3,rotation:0,skewX:-14.3,skewY:-15.5}},{t:this.instance_1,p:{scaleX:0.407,scaleY:0.413,x:-339.3,y:112.8,rotation:0,skewX:-14.3,skewY:-15.5}},{t:this.instance,p:{scaleX:1.001,scaleY:1.018,x:-352.4,y:-41.1,rotation:0,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5,p:{x:-275.4}},{t:this.instance_4,p:{scaleX:0.396,scaleY:0.402,x:-235.5,y:46.3,rotation:0,skewX:-14.3,skewY:-15.5}},{t:this.instance_3,p:{scaleX:0.396,scaleY:0.402,x:-288.1,y:33.6,rotation:0,skewX:-14.3,skewY:-15.5}},{t:this.instance_2,p:{scaleX:0.396,scaleY:0.402,x:-260.8,y:109.3,rotation:0,skewX:-14.3,skewY:-15.5}},{t:this.instance_1,p:{scaleX:0.396,scaleY:0.402,x:-323.9,y:109.8,rotation:0,skewX:-14.3,skewY:-15.5}},{t:this.instance,p:{scaleX:0.973,scaleY:0.991,x:-336.7,y:-40.2,rotation:0,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5,p:{x:-275.4}},{t:this.instance_4,p:{scaleX:0.384,scaleY:0.391,x:-222.9,y:45.5,rotation:0,skewX:-14.3,skewY:-15.5}},{t:this.instance_3,p:{scaleX:0.384,scaleY:0.391,x:-274,y:33.5,rotation:0,skewX:-14.3,skewY:-15.5}},{t:this.instance_2,p:{scaleX:0.384,scaleY:0.391,x:-247.6,y:106.4,rotation:0,skewX:-14.3,skewY:-15.5}},{t:this.instance_1,p:{scaleX:0.384,scaleY:0.391,x:-308.6,y:106.9,rotation:0,skewX:-14.3,skewY:-15.5}},{t:this.instance,p:{scaleX:0.945,scaleY:0.965,x:-321.1,y:-39.3,rotation:0,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5,p:{x:-275.4}},{t:this.instance_4,p:{scaleX:0.373,scaleY:0.381,x:-210.3,y:44.6,rotation:0,skewX:-14.1,skewY:-15.6}},{t:this.instance_3,p:{scaleX:0.373,scaleY:0.381,x:-259.7,y:33.3,rotation:0,skewX:-14.1,skewY:-15.6}},{t:this.instance_2,p:{scaleX:0.373,scaleY:0.381,x:-234.3,y:103.5,rotation:0,skewX:-14.1,skewY:-15.6}},{t:this.instance_1,p:{scaleX:0.373,scaleY:0.381,x:-293.1,y:103.9,rotation:0,skewX:-14.1,skewY:-15.6}},{t:this.instance,p:{scaleX:0.917,scaleY:0.939,x:-305.5,y:-38.4,rotation:0,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5,p:{x:-275.4}},{t:this.instance_4,p:{scaleX:0.362,scaleY:0.37,x:-197.8,y:43.7,rotation:0,skewX:-14,skewY:-15.8}},{t:this.instance_3,p:{scaleX:0.362,scaleY:0.37,x:-245.4,y:33.1,rotation:0,skewX:-14,skewY:-15.8}},{t:this.instance_2,p:{scaleX:0.362,scaleY:0.37,x:-221,y:100.5,rotation:0,skewX:-14,skewY:-15.8}},{t:this.instance_1,p:{scaleX:0.362,scaleY:0.37,x:-277.7,y:101.1,rotation:0,skewX:-14,skewY:-15.8}},{t:this.instance,p:{scaleX:0.889,scaleY:0.913,x:-289.8,y:-37.6,rotation:0,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5,p:{x:-275.4}},{t:this.instance_4,p:{scaleX:0.351,scaleY:0.359,x:-185.3,y:42.9,rotation:0,skewX:-14,skewY:-15.8}},{t:this.instance_3,p:{scaleX:0.351,scaleY:0.359,x:-231.4,y:32.9,rotation:0,skewX:-14,skewY:-15.8}},{t:this.instance_2,p:{scaleX:0.351,scaleY:0.359,x:-207.8,y:97.7,rotation:0,skewX:-14,skewY:-15.8}},{t:this.instance_1,p:{scaleX:0.351,scaleY:0.359,x:-262.4,y:98.1,rotation:0,skewX:-14,skewY:-15.8}},{t:this.instance,p:{scaleX:0.861,scaleY:0.886,x:-274.2,y:-36.7,rotation:0,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5,p:{x:-275.4}},{t:this.instance_4,p:{scaleX:0.336,scaleY:0.346,x:-179.7,y:35.2,rotation:0,skewX:-13.8,skewY:-15.8}},{t:this.instance_3,p:{scaleX:0.336,scaleY:0.346,x:-223.8,y:26,rotation:0,skewX:-13.8,skewY:-15.8}},{t:this.instance_2,p:{scaleX:0.336,scaleY:0.346,x:-201.4,y:87.6,rotation:0,skewX:-13.8,skewY:-15.8}},{t:this.instance_1,p:{scaleX:0.336,scaleY:0.346,x:-253.4,y:87.9,rotation:0,skewX:-13.8,skewY:-15.8}},{t:this.instance,p:{scaleX:0.827,scaleY:0.854,x:-265,y:-42.2,rotation:0,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5,p:{x:-275.4}},{t:this.instance_4,p:{scaleX:0.323,scaleY:0.333,x:-174.3,y:27.6,rotation:0,skewX:-13.8,skewY:-15.8}},{t:this.instance_3,p:{scaleX:0.323,scaleY:0.333,x:-216.4,y:19.2,rotation:0,skewX:-13.8,skewY:-15.8}},{t:this.instance_2,p:{scaleX:0.323,scaleY:0.333,x:-195.1,y:77.4,rotation:0,skewX:-13.8,skewY:-15.8}},{t:this.instance_1,p:{scaleX:0.323,scaleY:0.333,x:-244.5,y:77.7,rotation:0,skewX:-13.8,skewY:-15.8}},{t:this.instance,p:{scaleX:0.792,scaleY:0.822,x:-255.7,y:-47.7,rotation:0,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5,p:{x:-275.4}},{t:this.instance_4,p:{scaleX:0.309,scaleY:0.32,x:-168.9,y:19.9,rotation:0,skewX:-13.8,skewY:-16}},{t:this.instance_3,p:{scaleX:0.309,scaleY:0.32,x:-208.9,y:12.5,rotation:0,skewX:-13.8,skewY:-16}},{t:this.instance_2,p:{scaleX:0.309,scaleY:0.32,x:-188.7,y:67.3,rotation:0,skewX:-13.8,skewY:-16}},{t:this.instance_1,p:{scaleX:0.309,scaleY:0.32,x:-235.6,y:67.6,rotation:0,skewX:-13.8,skewY:-16}},{t:this.instance,p:{scaleX:0.758,scaleY:0.79,x:-246.5,y:-53.2,rotation:0,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5,p:{x:-275.4}},{t:this.instance_4,p:{scaleX:0.295,scaleY:0.307,x:-163.3,y:12.3,rotation:0,skewX:-13.8,skewY:-16.1}},{t:this.instance_3,p:{scaleX:0.295,scaleY:0.307,x:-201.4,y:5.6,rotation:0,skewX:-13.8,skewY:-16.1}},{t:this.instance_2,p:{scaleX:0.295,scaleY:0.307,x:-182.4,y:57.2,rotation:0,skewX:-13.8,skewY:-16.1}},{t:this.instance_1,p:{scaleX:0.295,scaleY:0.307,x:-226.7,y:57.4,rotation:0,skewX:-13.8,skewY:-16.1}},{t:this.instance,p:{scaleX:0.724,scaleY:0.758,x:-237.2,y:-58.7,rotation:0,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5,p:{x:-275.4}},{t:this.instance_4,p:{scaleX:0.281,scaleY:0.294,x:-157.9,y:4.7,rotation:0,skewX:-13.6,skewY:-16.3}},{t:this.instance_3,p:{scaleX:0.281,scaleY:0.294,x:-193.9,y:-1.2,rotation:0,skewX:-13.6,skewY:-16.3}},{t:this.instance_2,p:{scaleX:0.281,scaleY:0.294,x:-176.1,y:47.1,rotation:0,skewX:-13.6,skewY:-16.3}},{t:this.instance_1,p:{scaleX:0.281,scaleY:0.294,x:-217.8,y:47.3,rotation:0,skewX:-13.6,skewY:-16.3}},{t:this.instance,p:{scaleX:0.69,scaleY:0.726,x:-228,y:-64.2,rotation:0,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5,p:{x:-275.4}},{t:this.instance_4,p:{scaleX:0.267,scaleY:0.281,x:-152.4,y:-3,rotation:0,skewX:-13.6,skewY:-16.3}},{t:this.instance_3,p:{scaleX:0.267,scaleY:0.281,x:-186.5,y:-8,rotation:0,skewX:-13.6,skewY:-16.3}},{t:this.instance_2,p:{scaleX:0.267,scaleY:0.281,x:-169.7,y:37,rotation:0,skewX:-13.6,skewY:-16.3}},{t:this.instance_1,p:{scaleX:0.267,scaleY:0.281,x:-208.9,y:37.1,rotation:0,skewX:-13.6,skewY:-16.3}},{t:this.instance,p:{scaleX:0.655,scaleY:0.694,x:-218.8,y:-69.7,rotation:0,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5,p:{x:-275.4}},{t:this.instance_4,p:{scaleX:0.253,scaleY:0.268,x:-147,y:-10.6,rotation:0,skewX:-13.5,skewY:-16.3}},{t:this.instance_3,p:{scaleX:0.253,scaleY:0.268,x:-179.1,y:-14.9,rotation:0,skewX:-13.5,skewY:-16.3}},{t:this.instance_2,p:{scaleX:0.253,scaleY:0.268,x:-163.4,y:26.8,rotation:0,skewX:-13.5,skewY:-16.3}},{t:this.instance_1,p:{scaleX:0.253,scaleY:0.268,x:-200,y:27,rotation:0,skewX:-13.5,skewY:-16.3}},{t:this.instance,p:{scaleX:0.621,scaleY:0.662,x:-209.5,y:-75.2,rotation:0,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5,p:{x:-275.4}},{t:this.instance_4,p:{scaleX:0.239,scaleY:0.255,x:-141.6,y:-18.2,rotation:0,skewX:-13.5,skewY:-16.5}},{t:this.instance_3,p:{scaleX:0.239,scaleY:0.255,x:-171.6,y:-21.6,rotation:0,skewX:-13.5,skewY:-16.5}},{t:this.instance_2,p:{scaleX:0.239,scaleY:0.255,x:-157.1,y:16.7,rotation:0,skewX:-13.5,skewY:-16.5}},{t:this.instance_1,p:{scaleX:0.239,scaleY:0.255,x:-191.1,y:16.9,rotation:0,skewX:-13.5,skewY:-16.5}},{t:this.instance,p:{scaleX:0.587,scaleY:0.63,x:-200.3,y:-80.7,rotation:0,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5,p:{x:-275.4}},{t:this.instance_4,p:{scaleX:0.226,scaleY:0.242,x:-136.1,y:-25.9,rotation:0,skewX:-13.3,skewY:-16.6}},{t:this.instance_3,p:{scaleX:0.226,scaleY:0.242,x:-164.2,y:-28.6,rotation:0,skewX:-13.3,skewY:-16.6}},{t:this.instance_2,p:{scaleX:0.226,scaleY:0.242,x:-150.7,y:6.5,rotation:0,skewX:-13.3,skewY:-16.6}},{t:this.instance_1,p:{scaleX:0.226,scaleY:0.242,x:-182.2,y:6.7,rotation:0,skewX:-13.3,skewY:-16.6}},{t:this.instance,p:{scaleX:0.552,scaleY:0.598,x:-191,y:-86.2,rotation:0,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5,p:{x:-275.4}},{t:this.instance_4,p:{scaleX:0.212,scaleY:0.229,x:-130.7,y:-33.6,rotation:0,skewX:-13.3,skewY:-16.6}},{t:this.instance_3,p:{scaleX:0.212,scaleY:0.229,x:-156.7,y:-35.4,rotation:0,skewX:-13.3,skewY:-16.6}},{t:this.instance_2,p:{scaleX:0.212,scaleY:0.229,x:-144.5,y:-3.6,rotation:0,skewX:-13.3,skewY:-16.6}},{t:this.instance_1,p:{scaleX:0.212,scaleY:0.229,x:-173.3,y:-3.6,rotation:0,skewX:-13.3,skewY:-16.6}},{t:this.instance,p:{scaleX:0.518,scaleY:0.566,x:-181.8,y:-91.7,rotation:0,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5,p:{x:-275.4}},{t:this.instance_4,p:{scaleX:0.198,scaleY:0.215,x:-125.3,y:-41.2,rotation:0,skewX:-13.3,skewY:-16.8}},{t:this.instance_3,p:{scaleX:0.198,scaleY:0.215,x:-149.2,y:-42.2,rotation:0,skewX:-13.3,skewY:-16.8}},{t:this.instance_2,p:{scaleX:0.198,scaleY:0.215,x:-138.2,y:-13.7,rotation:0,skewX:-13.3,skewY:-16.8}},{t:this.instance_1,p:{scaleX:0.198,scaleY:0.215,x:-164.5,y:-13.6,rotation:0,skewX:-13.3,skewY:-16.8}},{t:this.instance,p:{scaleX:0.484,scaleY:0.534,x:-172.6,y:-97.3,rotation:0,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5,p:{x:-275.4}},{t:this.instance_4,p:{scaleX:0.184,scaleY:0.202,x:-119.8,y:-48.9,rotation:0,skewX:-13.3,skewY:-16.8}},{t:this.instance_3,p:{scaleX:0.184,scaleY:0.202,x:-141.8,y:-49,rotation:0,skewX:-13.3,skewY:-16.8}},{t:this.instance_2,p:{scaleX:0.184,scaleY:0.202,x:-131.9,y:-23.8,rotation:0,skewX:-13.3,skewY:-16.8}},{t:this.instance_1,p:{scaleX:0.184,scaleY:0.202,x:-155.6,y:-23.9,rotation:0,skewX:-13.3,skewY:-16.8}},{t:this.instance,p:{scaleX:0.449,scaleY:0.502,x:-163.3,y:-102.8,rotation:0,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5,p:{x:-275.4}},{t:this.instance_4,p:{scaleX:0.17,scaleY:0.189,x:-114.4,y:-56.5,rotation:0,skewX:-13.1,skewY:-17}},{t:this.instance_3,p:{scaleX:0.17,scaleY:0.189,x:-134.4,y:-55.9,rotation:0,skewX:-13.1,skewY:-17}},{t:this.instance_2,p:{scaleX:0.17,scaleY:0.189,x:-125.5,y:-34,rotation:0,skewX:-13.1,skewY:-17}},{t:this.instance_1,p:{scaleX:0.17,scaleY:0.189,x:-146.7,y:-34.1,rotation:0,skewX:-13.1,skewY:-17}},{t:this.instance,p:{scaleX:0.415,scaleY:0.47,x:-154.1,y:-108.3,rotation:0,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5,p:{x:-275.4}},{t:this.instance_4,p:{scaleX:0.157,scaleY:0.176,x:-108.9,y:-64.2,rotation:0,skewX:-13.1,skewY:-17.1}},{t:this.instance_3,p:{scaleX:0.157,scaleY:0.176,x:-126.9,y:-62.7,rotation:0,skewX:-13.1,skewY:-17.1}},{t:this.instance_2,p:{scaleX:0.157,scaleY:0.176,x:-119.2,y:-44.2,rotation:0,skewX:-13.1,skewY:-17.1}},{t:this.instance_1,p:{scaleX:0.157,scaleY:0.176,x:-137.8,y:-44.2,rotation:0,skewX:-13.1,skewY:-17.1}},{t:this.instance,p:{scaleX:0.381,scaleY:0.437,x:-144.8,y:-113.8,rotation:0,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5,p:{x:-275.4}},{t:this.instance_4,p:{scaleX:0.156,scaleY:0.176,x:-102.7,y:-67.6,rotation:0,skewX:-13,skewY:-17}},{t:this.instance_3,p:{scaleX:0.156,scaleY:0.176,x:-119.9,y:-66.1,rotation:0,skewX:-13,skewY:-17}},{t:this.instance_2,p:{scaleX:0.156,scaleY:0.176,x:-109.8,y:-48.9,rotation:0,skewX:-13,skewY:-17}},{t:this.instance_1,p:{scaleX:0.156,scaleY:0.176,x:-129,y:-48.3,rotation:0,skewX:-13,skewY:-17}},{t:this.instance,p:{scaleX:0.381,scaleY:0.437,x:-140.9,y:-115.3,rotation:-5,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5,p:{x:-275.4}},{t:this.instance_4,p:{scaleX:0.156,scaleY:0.176,x:-96.5,y:-71,rotation:0,skewX:-13,skewY:-17}},{t:this.instance_3,p:{scaleX:0.156,scaleY:0.176,x:-113,y:-69.6,rotation:0,skewX:-13,skewY:-17}},{t:this.instance_2,p:{scaleX:0.156,scaleY:0.176,x:-100.5,y:-53.6,rotation:0,skewX:-13,skewY:-17}},{t:this.instance_1,p:{scaleX:0.156,scaleY:0.176,x:-120.3,y:-52.4,rotation:0,skewX:-13,skewY:-17}},{t:this.instance,p:{scaleX:0.381,scaleY:0.437,x:-136.6,y:-116.6,rotation:-10,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5,p:{x:-275.4}},{t:this.instance_4,p:{scaleX:0.156,scaleY:0.176,x:-90.2,y:-74.4,rotation:0,skewX:-13,skewY:-17}},{t:this.instance_3,p:{scaleX:0.156,scaleY:0.176,x:-106,y:-73,rotation:0,skewX:-13,skewY:-17}},{t:this.instance_2,p:{scaleX:0.156,scaleY:0.176,x:-91.2,y:-58.3,rotation:0,skewX:-13,skewY:-17}},{t:this.instance_1,p:{scaleX:0.156,scaleY:0.176,x:-111.5,y:-56.4,rotation:0,skewX:-13,skewY:-17}},{t:this.instance,p:{scaleX:0.381,scaleY:0.437,x:-132.1,y:-117.6,rotation:-15,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5,p:{x:-275.4}},{t:this.instance_4,p:{scaleX:0.156,scaleY:0.176,x:-84,y:-77.8,rotation:0,skewX:-13,skewY:-17}},{t:this.instance_3,p:{scaleX:0.156,scaleY:0.176,x:-99,y:-76.4,rotation:0,skewX:-13,skewY:-17}},{t:this.instance_2,p:{scaleX:0.156,scaleY:0.176,x:-81.8,y:-63,rotation:0,skewX:-13,skewY:-17}},{t:this.instance_1,p:{scaleX:0.156,scaleY:0.176,x:-102.7,y:-60.5,rotation:0,skewX:-13,skewY:-17}},{t:this.instance,p:{scaleX:0.381,scaleY:0.437,x:-127.3,y:-118.3,rotation:-20,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5,p:{x:-275.4}},{t:this.instance_4,p:{scaleX:0.156,scaleY:0.176,x:-77.8,y:-81.2,rotation:0,skewX:-13,skewY:-17}},{t:this.instance_3,p:{scaleX:0.156,scaleY:0.176,x:-92.1,y:-79.8,rotation:0,skewX:-13,skewY:-17}},{t:this.instance_2,p:{scaleX:0.156,scaleY:0.176,x:-72.5,y:-67.7,rotation:0,skewX:-13,skewY:-17}},{t:this.instance_1,p:{scaleX:0.156,scaleY:0.176,x:-94,y:-64.6,rotation:0,skewX:-13,skewY:-17}},{t:this.instance,p:{scaleX:0.38,scaleY:0.437,x:-122.1,y:-119,rotation:-25,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_7},{t:this.instance_8},{t:this.instance_5,p:{x:-275.4}},{t:this.instance_4,p:{scaleX:0.157,scaleY:0.176,x:-71.7,y:-84.6,rotation:0,skewX:-13.1,skewY:-17.1}},{t:this.instance_3,p:{scaleX:0.157,scaleY:0.176,x:-85.2,y:-83.2,rotation:0,skewX:-13.1,skewY:-17.1}},{t:this.instance_6},{t:this.instance_2,p:{scaleX:0.157,scaleY:0.176,x:-63.2,y:-72.4,rotation:0,skewX:-13.1,skewY:-17.1}},{t:this.instance_1,p:{scaleX:0.157,scaleY:0.176,x:-85.2,y:-68.6,rotation:0,skewX:-13.1,skewY:-17.1}},{t:this.instance,p:{scaleX:0.381,scaleY:0.437,x:-116.7,y:-119.4,rotation:-30,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_7},{t:this.instance_8},{t:this.instance_5,p:{x:-275.4}},{t:this.instance_4,p:{scaleX:0.15,scaleY:0.169,x:-67.7,y:-74.4,rotation:0,skewX:-7.5,skewY:-11.5}},{t:this.instance_3,p:{scaleX:0.149,scaleY:0.168,x:-79,y:-71.4,rotation:0,skewX:-7.5,skewY:-11.5}},{t:this.instance_6},{t:this.instance_2,p:{scaleX:0.157,scaleY:0.176,x:-63.2,y:-72.4,rotation:0,skewX:-13.1,skewY:-17.1}},{t:this.instance_1,p:{scaleX:0.157,scaleY:0.176,x:-85.2,y:-68.6,rotation:0,skewX:-13.1,skewY:-17.1}},{t:this.instance,p:{scaleX:0.381,scaleY:0.437,x:-116.7,y:-119.4,rotation:-30,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_7},{t:this.instance_8},{t:this.instance_5,p:{x:-275.4}},{t:this.instance_4,p:{scaleX:0.143,scaleY:0.161,x:-63.8,y:-64.1,rotation:0,skewX:-2.1,skewY:-6}},{t:this.instance_3,p:{scaleX:0.141,scaleY:0.159,x:-72.8,y:-59.6,rotation:0,skewX:-2.1,skewY:-6.1}},{t:this.instance_6},{t:this.instance_2,p:{scaleX:0.157,scaleY:0.176,x:-63.2,y:-72.4,rotation:0,skewX:-13.1,skewY:-17.1}},{t:this.instance_1,p:{scaleX:0.157,scaleY:0.176,x:-85.2,y:-68.6,rotation:0,skewX:-13.1,skewY:-17.1}},{t:this.instance,p:{scaleX:0.381,scaleY:0.437,x:-116.7,y:-119.4,rotation:-30,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_7},{t:this.instance_8},{t:this.instance_5,p:{x:-275.4}},{t:this.instance_4,p:{scaleX:0.137,scaleY:0.154,x:-59.9,y:-53.7,rotation:0,skewX:3.1,skewY:-0.6}},{t:this.instance_3,p:{scaleX:0.133,scaleY:0.15,x:-66.6,y:-47.4,rotation:0,skewX:3.1,skewY:-0.6}},{t:this.instance_6},{t:this.instance_2,p:{scaleX:0.157,scaleY:0.176,x:-63.2,y:-72.4,rotation:0,skewX:-13.1,skewY:-17.1}},{t:this.instance_1,p:{scaleX:0.157,scaleY:0.176,x:-85.2,y:-68.6,rotation:0,skewX:-13.1,skewY:-17.1}},{t:this.instance,p:{scaleX:0.381,scaleY:0.437,x:-116.7,y:-119.4,rotation:-30,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_7},{t:this.instance_8},{t:this.instance_5,p:{x:-275.4}},{t:this.instance_4,p:{scaleX:0.13,scaleY:0.147,x:-56,y:-43,rotation:0,skewX:8.5,skewY:4.6}},{t:this.instance_3,p:{scaleX:0.126,scaleY:0.142,x:-60.4,y:-35.2,rotation:0,skewX:8.6,skewY:4.6}},{t:this.instance_6},{t:this.instance_2,p:{scaleX:0.157,scaleY:0.176,x:-63.2,y:-72.4,rotation:0,skewX:-13.1,skewY:-17.1}},{t:this.instance_1,p:{scaleX:0.157,scaleY:0.176,x:-85.2,y:-68.6,rotation:0,skewX:-13.1,skewY:-17.1}},{t:this.instance,p:{scaleX:0.381,scaleY:0.437,x:-116.7,y:-119.4,rotation:-30,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_7},{t:this.instance_8},{t:this.instance_5,p:{x:-275.4}},{t:this.instance_4,p:{scaleX:0.124,scaleY:0.139,x:-52,y:-32.2,rotation:0,skewX:14,skewY:10}},{t:this.instance_3,p:{scaleX:0.118,scaleY:0.133,x:-54.3,y:-22.7,rotation:0,skewX:14,skewY:10.1}},{t:this.instance_6},{t:this.instance_2,p:{scaleX:0.157,scaleY:0.176,x:-63.2,y:-72.4,rotation:0,skewX:-13.1,skewY:-17.1}},{t:this.instance_1,p:{scaleX:0.157,scaleY:0.176,x:-85.2,y:-68.6,rotation:0,skewX:-13.1,skewY:-17.1}},{t:this.instance,p:{scaleX:0.381,scaleY:0.437,x:-116.7,y:-119.4,rotation:-30,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_7},{t:this.instance_8},{t:this.instance_5,p:{x:-275.4}},{t:this.instance_4,p:{scaleX:0.117,scaleY:0.132,x:-48.3,y:-21.4,rotation:0,skewX:19.5,skewY:15.5}},{t:this.instance_3,p:{scaleX:0.11,scaleY:0.124,x:-48.2,y:-10.2,rotation:0,skewX:19.5,skewY:15.5}},{t:this.instance_6},{t:this.instance,p:{scaleX:0.375,scaleY:0.445,x:-114.8,y:-124.1,rotation:0,skewX:-27.8,skewY:-30.3}},{t:this.instance_2,p:{scaleX:0.157,scaleY:0.176,x:-63.2,y:-72.4,rotation:0,skewX:-13.1,skewY:-17.1}},{t:this.instance_1,p:{scaleX:0.157,scaleY:0.176,x:-85.2,y:-68.6,rotation:0,skewX:-13.1,skewY:-17.1}}]},1).to({state:[{t:this.instance_7},{t:this.instance_8},{t:this.instance_5,p:{x:-275.4}},{t:this.instance_4,p:{scaleX:0.111,scaleY:0.124,x:-44.5,y:-10.3,rotation:0,skewX:25,skewY:21}},{t:this.instance_3,p:{scaleX:0.103,scaleY:0.116,x:-42.2,y:2.5,rotation:0,skewX:25.1,skewY:21}},{t:this.instance_6},{t:this.instance,p:{scaleX:0.37,scaleY:0.453,x:-112.9,y:-128.7,rotation:0,skewX:-25.8,skewY:-30.6}},{t:this.instance_2,p:{scaleX:0.156,scaleY:0.176,x:-65.7,y:-94.4,rotation:0,skewX:-13,skewY:-17}},{t:this.instance_1,p:{scaleX:0.156,scaleY:0.176,x:-88.6,y:-87.6,rotation:0,skewX:-13,skewY:-17}}]},1).to({state:[{t:this.instance_7},{t:this.instance_8},{t:this.instance_5,p:{x:-275.4}},{t:this.instance_4,p:{scaleX:0.104,scaleY:0.117,x:-40.7,y:0.8,rotation:0,skewX:30.4,skewY:26.5}},{t:this.instance_3,p:{scaleX:0.095,scaleY:0.107,x:-36.3,y:15.2,rotation:0,skewX:30.5,skewY:26.5}},{t:this.instance_6},{t:this.instance,p:{scaleX:0.365,scaleY:0.462,x:-111,y:-133.3,rotation:0,skewX:-23.8,skewY:-30.8}},{t:this.instance_2,p:{scaleX:0.156,scaleY:0.176,x:-68.2,y:-116.4,rotation:0,skewX:-13,skewY:-17}},{t:this.instance_1,p:{scaleX:0.156,scaleY:0.176,x:-92,y:-106.6,rotation:0,skewX:-13,skewY:-17}}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.097,scaleY:0.109,x:-37.2,y:12.1,rotation:0,skewX:35.9,skewY:31.9}},{t:this.instance_3,p:{scaleX:0.087,scaleY:0.098,x:-30.6,y:28.2,rotation:0,skewX:35.9,skewY:31.9}},{t:this.instance_5,p:{x:-275}},{t:this.instance_8},{t:this.instance,p:{scaleX:0.36,scaleY:0.47,x:-109.1,y:-137.8,rotation:0,skewX:-21.8,skewY:-31.1}},{t:this.instance_2,p:{scaleX:0.156,scaleY:0.176,x:-70.7,y:-138.4,rotation:0,skewX:-13,skewY:-17}},{t:this.instance_1,p:{scaleX:0.156,scaleY:0.176,x:-95.4,y:-125.6,rotation:0,skewX:-13,skewY:-17}},{t:this.instance_6}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.091,scaleY:0.102,x:-33.6,y:23.4,rotation:0,skewX:41.4,skewY:37.4}},{t:this.instance_3,p:{scaleX:0.08,scaleY:0.09,x:-24.9,y:41.2,rotation:0,skewX:41.4,skewY:37.4}},{t:this.instance_5,p:{x:-275}},{t:this.instance_8},{t:this.instance,p:{scaleX:0.355,scaleY:0.479,x:-107.1,y:-142.4,rotation:0,skewX:-19.9,skewY:-31.5}},{t:this.instance_2,p:{scaleX:0.157,scaleY:0.176,x:-73.2,y:-160.4,rotation:0,skewX:-13.1,skewY:-17.1}},{t:this.instance_1,p:{scaleX:0.157,scaleY:0.176,x:-98.8,y:-144.5,rotation:0,skewX:-13.1,skewY:-17.1}},{t:this.instance_6}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.084,scaleY:0.094,x:-30.1,y:34.9,rotation:0,skewX:46.9,skewY:42.9}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:-19.4,y:54.2,rotation:0,skewX:46.9,skewY:42.9}},{t:this.instance_5,p:{x:-275}},{t:this.instance_8},{t:this.instance,p:{scaleX:0.348,scaleY:0.483,x:-106.5,y:-142.8,rotation:0,skewX:-20.3,skewY:-32.1}},{t:this.instance_2,p:{scaleX:0.156,scaleY:0.176,x:-73.2,y:-177.9,rotation:0,skewX:-13,skewY:-17}},{t:this.instance_1,p:{scaleX:0.156,scaleY:0.176,x:-95,y:-152.8,rotation:0,skewX:-13,skewY:-17}},{t:this.instance_6}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.084,scaleY:0.094,x:-30.1,y:34.9,rotation:0,skewX:46.9,skewY:42.9}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:-19.4,y:54.2,rotation:0,skewX:46.9,skewY:42.9}},{t:this.instance_5,p:{x:-275}},{t:this.instance_8},{t:this.instance,p:{scaleX:0.342,scaleY:0.488,x:-106,y:-143.2,rotation:0,skewX:-20.8,skewY:-32.6}},{t:this.instance_2,p:{scaleX:0.157,scaleY:0.176,x:-73.2,y:-195.4,rotation:0,skewX:-13.1,skewY:-17.1}},{t:this.instance_1,p:{scaleX:0.157,scaleY:0.176,x:-91.2,y:-161.1,rotation:0,skewX:-13.1,skewY:-17.1}},{t:this.instance_6}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.084,scaleY:0.094,x:-30.1,y:34.9,rotation:0,skewX:46.9,skewY:42.9}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:-19.4,y:54.2,rotation:0,skewX:46.9,skewY:42.9}},{t:this.instance_5,p:{x:-275}},{t:this.instance_8},{t:this.instance,p:{scaleX:0.336,scaleY:0.492,x:-105.7,y:-143.6,rotation:0,skewX:-21.5,skewY:-33.1}},{t:this.instance_2,p:{scaleX:0.156,scaleY:0.176,x:-75.5,y:-179.3,rotation:0,skewX:-13,skewY:-17}},{t:this.instance_1,p:{scaleX:0.156,scaleY:0.176,x:-99.8,y:-175.2,rotation:0,skewX:-13,skewY:-17}},{t:this.instance_6}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.084,scaleY:0.094,x:-30.1,y:34.9,rotation:0,skewX:46.9,skewY:42.9}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:-19.4,y:54.2,rotation:0,skewX:46.9,skewY:42.9}},{t:this.instance_5,p:{x:-275}},{t:this.instance_8},{t:this.instance,p:{scaleX:0.329,scaleY:0.497,x:-105.2,y:-144,rotation:0,skewX:-22,skewY:-33.6}},{t:this.instance_2,p:{scaleX:0.157,scaleY:0.176,x:-77.9,y:-163.2,rotation:0,skewX:-13.1,skewY:-17.1}},{t:this.instance_1,p:{scaleX:0.157,scaleY:0.176,x:-108.5,y:-189.2,rotation:0,skewX:-13.1,skewY:-17.1}},{t:this.instance_6}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.084,scaleY:0.094,x:-30.1,y:34.9,rotation:0,skewX:46.9,skewY:42.9}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:-19.4,y:54.2,rotation:0,skewX:46.9,skewY:42.9}},{t:this.instance_5,p:{x:-275}},{t:this.instance_8},{t:this.instance,p:{scaleX:0.323,scaleY:0.502,x:-104.7,y:-144.6,rotation:0,skewX:-22.6,skewY:-34.1}},{t:this.instance_2,p:{scaleX:0.156,scaleY:0.176,x:-74.2,y:-178.9,rotation:0,skewX:-13,skewY:-17}},{t:this.instance_1,p:{scaleX:0.156,scaleY:0.176,x:-101.1,y:-174.8,rotation:0,skewX:-13,skewY:-17}},{t:this.instance_6}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.084,scaleY:0.094,x:-30.1,y:34.9,rotation:0,skewX:46.9,skewY:42.9}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:-19.4,y:54.2,rotation:0,skewX:46.9,skewY:42.9}},{t:this.instance_5,p:{x:-275}},{t:this.instance_8},{t:this.instance,p:{scaleX:0.317,scaleY:0.506,x:-104.2,y:-145,rotation:0,skewX:-23.1,skewY:-34.6}},{t:this.instance_2,p:{scaleX:0.157,scaleY:0.176,x:-70.6,y:-194.7,rotation:0,skewX:-13.1,skewY:-17.1}},{t:this.instance_1,p:{scaleX:0.157,scaleY:0.176,x:-93.8,y:-160.4,rotation:0,skewX:-13.1,skewY:-17.1}},{t:this.instance_6}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.084,scaleY:0.094,x:-30.1,y:34.9,rotation:0,skewX:46.9,skewY:42.9}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:-19.4,y:54.2,rotation:0,skewX:46.9,skewY:42.9}},{t:this.instance_5,p:{x:-275}},{t:this.instance_8},{t:this.instance,p:{scaleX:0.31,scaleY:0.511,x:-103.7,y:-145.3,rotation:0,skewX:-23.6,skewY:-35.3}},{t:this.instance_2,p:{scaleX:0.156,scaleY:0.176,x:-71,y:-181.7,rotation:0,skewX:-13,skewY:-17}},{t:this.instance_1,p:{scaleX:0.156,scaleY:0.176,x:-95.4,y:-157.7,rotation:0,skewX:-13,skewY:-17}},{t:this.instance_6}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.084,scaleY:0.094,x:-22,y:47,rotation:0,skewX:46.9,skewY:42.9}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:-11.6,y:59.7,rotation:0,skewX:46.9,skewY:42.9}},{t:this.instance_5,p:{x:-275}},{t:this.instance_8},{t:this.instance,p:{scaleX:0.304,scaleY:0.516,x:-103.5,y:-145.7,rotation:0,skewX:-24.3,skewY:-35.8}},{t:this.instance_2,p:{scaleX:0.157,scaleY:0.176,x:-71.5,y:-168.6,rotation:0,skewX:-13.1,skewY:-17.1}},{t:this.instance_1,p:{scaleX:0.157,scaleY:0.176,x:-97,y:-154.9,rotation:0,skewX:-13.1,skewY:-17.1}},{t:this.instance_6}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.084,scaleY:0.094,x:-13.8,y:59.1,rotation:0,skewX:46.9,skewY:42.9}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:-3.7,y:65.1,rotation:0,skewX:46.9,skewY:42.9}},{t:this.instance_5,p:{x:-275}},{t:this.instance_8},{t:this.instance,p:{scaleX:0.298,scaleY:0.521,x:-103.1,y:-146.2,rotation:0,skewX:-24.8,skewY:-36.4}},{t:this.instance_2,p:{scaleX:0.156,scaleY:0.176,x:-64.6,y:-134.1,rotation:0,skewX:-13,skewY:-17}},{t:this.instance_1,p:{scaleX:0.156,scaleY:0.176,x:-84,y:-126.6,rotation:0,skewX:-13,skewY:-17}},{t:this.instance_6}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.084,scaleY:0.094,x:-5.7,y:71.2,rotation:0,skewX:46.9,skewY:42.9}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:4.1,y:70.5,rotation:0,skewX:46.9,skewY:42.9}},{t:this.instance_5,p:{x:-275}},{t:this.instance_8},{t:this.instance,p:{scaleX:0.284,scaleY:0.532,x:-88.1,y:-79.2,rotation:0,skewX:-26.1,skewY:-37.6}},{t:this.instance_2,p:{scaleX:0.157,scaleY:0.176,x:-57.7,y:-99.7,rotation:0,skewX:-13.1,skewY:-17.1}},{t:this.instance_1,p:{scaleX:0.157,scaleY:0.176,x:-71.1,y:-98.2,rotation:0,skewX:-13.1,skewY:-17.1}},{t:this.instance_6}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.084,scaleY:0.094,x:2.4,y:83.2,rotation:0,skewX:46.9,skewY:42.9}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:12,y:75.9,rotation:0,skewX:46.9,skewY:42.9}},{t:this.instance_5,p:{x:-275}},{t:this.instance_8},{t:this.instance,p:{scaleX:0.27,scaleY:0.542,x:-84.4,y:-66.7,rotation:0,skewX:-27.3,skewY:-38.9}},{t:this.instance_2,p:{scaleX:0.156,scaleY:0.176,x:-56.5,y:-86.9,rotation:0,skewX:-13,skewY:-17}},{t:this.instance_1,p:{scaleX:0.156,scaleY:0.176,x:-69.8,y:-83.5,rotation:0,skewX:-13,skewY:-17}},{t:this.instance_6}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.085,scaleY:0.094,x:9.7,y:85.7,rotation:0,skewX:37.8,skewY:33.8}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:17.2,y:88.1,rotation:0,skewX:46.9,skewY:42.9}},{t:this.instance_5,p:{x:-275}},{t:this.instance_8},{t:this.instance,p:{scaleX:0.256,scaleY:0.553,x:-80.8,y:-54.1,rotation:0,skewX:-28.6,skewY:-40.1}},{t:this.instance_2,p:{scaleX:0.156,scaleY:0.176,x:-55.5,y:-74.1,rotation:0,skewX:-13,skewY:-17}},{t:this.instance_1,p:{scaleX:0.156,scaleY:0.176,x:-68.5,y:-68.8,rotation:0,skewX:-13,skewY:-17}},{t:this.instance_6}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.086,scaleY:0.095,x:17,y:88.4,rotation:0,skewX:28.8,skewY:24.8}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:22.5,y:100.2,rotation:0,skewX:46.9,skewY:42.9}},{t:this.instance_5,p:{x:-275}},{t:this.instance_8},{t:this.instance,p:{scaleX:0.241,scaleY:0.564,x:-77.2,y:-41.5,rotation:0,skewX:-29.8,skewY:-41.4}},{t:this.instance_2,p:{scaleX:0.156,scaleY:0.176,x:-54.4,y:-61.4,rotation:0,skewX:-13,skewY:-17}},{t:this.instance_1,p:{scaleX:0.156,scaleY:0.176,x:-67.2,y:-54.1,rotation:0,skewX:-13,skewY:-17}},{t:this.instance_6}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.086,scaleY:0.095,x:24.2,y:91.2,rotation:0,skewX:19.8,skewY:15.8}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:27.8,y:112.4,rotation:0,skewX:46.9,skewY:42.9}},{t:this.instance_5,p:{x:-275}},{t:this.instance_8},{t:this.instance,p:{scaleX:0.227,scaleY:0.575,x:-73.9,y:-28.9,rotation:0,skewX:-31.1,skewY:-42.6}},{t:this.instance_2,p:{scaleX:0.156,scaleY:0.176,x:-53.3,y:-48.6,rotation:0,skewX:-13,skewY:-17}},{t:this.instance_1,p:{scaleX:0.156,scaleY:0.176,x:-66,y:-39.4,rotation:0,skewX:-13,skewY:-17}},{t:this.instance_6}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.087,scaleY:0.095,x:31.6,y:94.3,rotation:0,skewX:10.8,skewY:6.8}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:33,y:124.5,rotation:0,skewX:46.9,skewY:42.9}},{t:this.instance_5,p:{x:-275}},{t:this.instance_8},{t:this.instance,p:{scaleX:0.213,scaleY:0.586,x:-70.4,y:-16.4,rotation:0,skewX:-32.3,skewY:-43.9}},{t:this.instance_2,p:{scaleX:0.156,scaleY:0.176,x:-52.2,y:-35.8,rotation:0,skewX:-13,skewY:-17}},{t:this.instance_1,p:{scaleX:0.156,scaleY:0.176,x:-64.7,y:-24.7,rotation:0,skewX:-13,skewY:-17}},{t:this.instance_6}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:39.1,y:97.5,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:37.6,y:136.7,rotation:0,skewX:46.9,skewY:42.9}},{t:this.instance_5,p:{x:-275}},{t:this.instance_8},{t:this.instance,p:{scaleX:0.199,scaleY:0.597,x:-67,y:-3.9,rotation:0,skewX:-33.6,skewY:-45.1}},{t:this.instance_2,p:{scaleX:0.157,scaleY:0.176,x:-51.2,y:-23.1,rotation:0,skewX:-13.1,skewY:-17.1}},{t:this.instance_1,p:{scaleX:0.157,scaleY:0.176,x:-63.4,y:-10,rotation:0,skewX:-13.1,skewY:-17.1}},{t:this.instance_6}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:48.9,y:95.8,rotation:0,skewX:1.8,skewY:-2}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:36.8,y:134.1,rotation:0,skewX:46.9,skewY:42.9}},{t:this.instance_5,p:{x:-275}},{t:this.instance_8},{t:this.instance,p:{scaleX:0.185,scaleY:0.609,x:-63.8,y:8.6,rotation:0,skewX:-34.9,skewY:-46.5}},{t:this.instance_2,p:{scaleX:0.157,scaleY:0.176,x:-51.2,y:-23.1,rotation:0,skewX:-13.1,skewY:-17.1}},{t:this.instance_1,p:{scaleX:0.157,scaleY:0.176,x:-63.4,y:-10,rotation:0,skewX:-13.1,skewY:-17.1}},{t:this.instance_6}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:58.9,y:94.1,rotation:0,skewX:1.8,skewY:-2}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:36,y:131.5,rotation:0,skewX:46.9,skewY:42.9}},{t:this.instance_5,p:{x:-275}},{t:this.instance_8},{t:this.instance,p:{scaleX:0.185,scaleY:0.594,x:-60.4,y:15.7,rotation:0,skewX:-36.6,skewY:-48.1}},{t:this.instance_2,p:{scaleX:0.157,scaleY:0.176,x:-51.2,y:-23.1,rotation:0,skewX:-13.1,skewY:-17.1}},{t:this.instance_1,p:{scaleX:0.157,scaleY:0.176,x:-63.4,y:-10,rotation:0,skewX:-13.1,skewY:-17.1}},{t:this.instance_6}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:68.8,y:92.3,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:35.1,y:128.9,rotation:0,skewX:46.9,skewY:42.9}},{t:this.instance_5,p:{x:-275}},{t:this.instance_8},{t:this.instance,p:{scaleX:0.185,scaleY:0.58,x:-57,y:22.6,rotation:0,skewX:-38.1,skewY:-49.9}},{t:this.instance_2,p:{scaleX:0.157,scaleY:0.176,x:-51.2,y:-23.1,rotation:0,skewX:-13.1,skewY:-17.1}},{t:this.instance_1,p:{scaleX:0.157,scaleY:0.176,x:-63.4,y:-10,rotation:0,skewX:-13.1,skewY:-17.1}},{t:this.instance_6}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:76.4,y:97.2,rotation:0,skewX:1.8,skewY:-2}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:36.3,y:132.9,rotation:0,skewX:46.9,skewY:42.9}},{t:this.instance_5,p:{x:-275}},{t:this.instance_8},{t:this.instance,p:{scaleX:0.185,scaleY:0.566,x:-53.6,y:29.5,rotation:0,skewX:-39.9,skewY:-51.4}},{t:this.instance_2,p:{scaleX:0.157,scaleY:0.176,x:-51.2,y:-23.1,rotation:0,skewX:-13.1,skewY:-17.1}},{t:this.instance_1,p:{scaleX:0.157,scaleY:0.176,x:-63.4,y:-10,rotation:0,skewX:-13.1,skewY:-17.1}},{t:this.instance_6}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:84,y:102.1,rotation:0,skewX:1.8,skewY:-2}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:37.6,y:136.7,rotation:0,skewX:46.9,skewY:42.9}},{t:this.instance_5,p:{x:-275}},{t:this.instance_8},{t:this.instance,p:{scaleX:0.185,scaleY:0.552,x:-50.1,y:36.4,rotation:0,skewX:-41.6,skewY:-53.2}},{t:this.instance_2,p:{scaleX:0.089,scaleY:0.108,x:-29.5,y:19.3,rotation:0,skewX:31.9,skewY:27.9}},{t:this.instance_1,p:{scaleX:0.089,scaleY:0.094,x:-35.4,y:23.4,rotation:0,skewX:46.8,skewY:42.9}},{t:this.instance_6}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:91.7,y:106.9,rotation:0,skewX:1.8,skewY:-2}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:52.8,y:149.7,rotation:0,skewX:46.9,skewY:42.9}},{t:this.instance_5,p:{x:-275}},{t:this.instance_8},{t:this.instance,p:{scaleX:0.185,scaleY:0.537,x:-46.3,y:43.3,rotation:0,skewX:-43.1,skewY:-54.9}},{t:this.instance_2,p:{scaleX:0.089,scaleY:0.11,x:-25.7,y:24.7,rotation:0,skewX:31.8,skewY:27.8}},{t:this.instance_1,p:{scaleX:0.093,scaleY:0.097,x:-32.1,y:30,rotation:0,skewX:46.9,skewY:42.9}},{t:this.instance_6}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:109.5,y:111.7,rotation:0,skewX:-1.9,skewY:-177.9}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:67.9,y:162.7,rotation:0,skewX:46.9,skewY:42.9}},{t:this.instance_5,p:{x:-275}},{t:this.instance_8},{t:this.instance,p:{scaleX:0.185,scaleY:0.523,x:-42.6,y:50.2,rotation:0,skewX:-44.9,skewY:-56.4}},{t:this.instance_2,p:{scaleX:0.089,scaleY:0.112,x:-22,y:30.2,rotation:0,skewX:31.8,skewY:27.8}},{t:this.instance_1,p:{scaleX:0.097,scaleY:0.099,x:-28.9,y:36.7,rotation:0,skewX:46.9,skewY:42.9}},{t:this.instance_6}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:106,y:110,rotation:0,skewX:-1.8,skewY:-178}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:83,y:175.8,rotation:0,skewX:46.9,skewY:42.9}},{t:this.instance_5,p:{x:-275}},{t:this.instance_8},{t:this.instance,p:{scaleX:0.185,scaleY:0.509,x:-38.9,y:57.1,rotation:0,skewX:-46.6,skewY:-58.2}},{t:this.instance_2,p:{scaleX:0.089,scaleY:0.113,x:-18.1,y:35.7,rotation:0,skewX:31.8,skewY:27.8}},{t:this.instance_1,p:{scaleX:0.101,scaleY:0.102,x:-25.7,y:43.3,rotation:0,skewX:46.9,skewY:42.9}},{t:this.instance_6}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:102.3,y:108.3,rotation:0,skewX:-1.8,skewY:-178}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:98.1,y:188.8,rotation:0,skewX:46.9,skewY:42.9}},{t:this.instance_5,p:{x:-275}},{t:this.instance_8},{t:this.instance,p:{scaleX:0.185,scaleY:0.495,x:-34.8,y:63.8,rotation:0,skewX:-48.2,skewY:-59.9}},{t:this.instance_2,p:{scaleX:0.09,scaleY:0.115,x:-14.3,y:41.1,rotation:0,skewX:31.9,skewY:27.9}},{t:this.instance_1,p:{scaleX:0.106,scaleY:0.105,x:-22.4,y:49.9,rotation:0,skewX:46.8,skewY:42.9}},{t:this.instance_6}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:98.7,y:106.5,rotation:0,skewX:-1.8,skewY:-178}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:120.2,y:187.5,rotation:0,skewX:39.4,skewY:35.3}},{t:this.instance_5,p:{x:-275}},{t:this.instance_8},{t:this.instance,p:{scaleX:0.185,scaleY:0.482,x:-31,y:70.7,rotation:0,skewX:-49.9,skewY:-61.5}},{t:this.instance_2,p:{scaleX:0.092,scaleY:0.112,x:-13.3,y:42.9,rotation:0,skewX:31.8,skewY:28.4}},{t:this.instance_1,p:{scaleX:0.107,scaleY:0.106,x:-21.4,y:51.3,rotation:0,skewX:46.9,skewY:42.9}},{t:this.instance_6}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.084,scaleY:0.081,x:80.4,y:96.6,rotation:0,skewX:-16,skewY:-157.7}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:142.2,y:186.2,rotation:0,skewX:31.8,skewY:27.8}},{t:this.instance_5,p:{x:-275}},{t:this.instance_8},{t:this.instance,p:{scaleX:0.185,scaleY:0.481,x:-30.1,y:72.8,rotation:0,skewX:-52.1,skewY:-63.7}},{t:this.instance_2,p:{scaleX:0.094,scaleY:0.109,x:-12.2,y:44.6,rotation:0,skewX:31.8,skewY:29.1}},{t:this.instance_1,p:{scaleX:0.108,scaleY:0.107,x:-20.4,y:52.7,rotation:0,skewX:46.9,skewY:42.9}},{t:this.instance_6}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:72.8,y:94.7,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:164.2,y:185.1,rotation:0,skewX:24.3,skewY:20.3}},{t:this.instance_5,p:{x:-275}},{t:this.instance_8},{t:this.instance,p:{scaleX:0.185,scaleY:0.481,x:-29.1,y:74.8,rotation:0,skewX:-54.2,skewY:-65.9}},{t:this.instance_2,p:{scaleX:0.096,scaleY:0.106,x:-11.3,y:46.4,rotation:0,skewX:31.8,skewY:29.6}},{t:this.instance_1,p:{scaleX:0.109,scaleY:0.108,x:-19.4,y:54.1,rotation:0,skewX:46.9,skewY:42.9}},{t:this.instance_6}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:86.1,y:100.2,rotation:0,skewX:1.8,skewY:-2}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:186.3,y:184.1,rotation:0,skewX:16.8,skewY:12.8}},{t:this.instance_5,p:{x:-275}},{t:this.instance_8},{t:this.instance,p:{scaleX:0.185,scaleY:0.481,x:-28.2,y:76.8,rotation:0,skewX:-56.4,skewY:-68}},{t:this.instance_2,p:{scaleX:0.098,scaleY:0.103,x:-10.2,y:48.2,rotation:0,skewX:31.8,skewY:30.3}},{t:this.instance_1,p:{scaleX:0.111,scaleY:0.109,x:-18.3,y:55.5,rotation:0,skewX:46.9,skewY:42.9}},{t:this.instance_6}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:99.3,y:105.5,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:208.5,y:183.2,rotation:0,skewX:9.3,skewY:5.3}},{t:this.instance_5,p:{x:-275}},{t:this.instance_8},{t:this.instance,p:{scaleX:0.185,scaleY:0.481,x:-27,y:78.9,rotation:0,skewX:-58.4,skewY:-70.2}},{t:this.instance_2,p:{scaleX:0.101,scaleY:0.1,x:-9.2,y:50,rotation:0,skewX:31.8,skewY:30.8}},{t:this.instance_1,p:{scaleX:0.112,scaleY:0.11,x:-17.3,y:56.9,rotation:0,skewX:46.9,skewY:42.9}},{t:this.instance_6}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:99.3,y:99.3,rotation:0,skewX:1.8,skewY:-2}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:230.7,y:182.3,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_5,p:{x:-275}},{t:this.instance_8},{t:this.instance,p:{scaleX:0.185,scaleY:0.481,x:-26,y:81,rotation:0,skewX:-60.7,skewY:-72.2}},{t:this.instance_2,p:{scaleX:0.103,scaleY:0.097,x:-8.1,y:51.7,rotation:0,skewX:31.8,skewY:31.4}},{t:this.instance_1,p:{scaleX:0.113,scaleY:0.111,x:-16.3,y:58.2,rotation:0,skewX:46.9,skewY:42.9}},{t:this.instance_6}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:99.3,y:93.1,rotation:0,skewX:1.8,skewY:-2}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:229.9,y:177.3,rotation:0,skewX:1.8,skewY:-2}},{t:this.instance_5,p:{x:-275}},{t:this.instance_6},{t:this.instance,p:{scaleX:0.185,scaleY:0.481,x:-24.9,y:83,rotation:0,skewX:-62.7,skewY:-74.4}},{t:this.instance_2,p:{scaleX:0.105,scaleY:0.094,x:-7.3,y:53.4,rotation:0,skewX:31.9,skewY:32.1}},{t:this.instance_1,p:{scaleX:0.115,scaleY:0.113,x:-15.4,y:59.6,rotation:0,skewX:46.8,skewY:42.9}}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:99.3,y:87,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:229.1,y:172.3,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_5,p:{x:-275}},{t:this.instance_6},{t:this.instance,p:{scaleX:0.185,scaleY:0.482,x:-23.7,y:85.1,rotation:0,skewX:-64.9,skewY:-76.5}},{t:this.instance_2,p:{scaleX:0.105,scaleY:0.098,x:-5,y:55.6,rotation:0,skewX:31.8,skewY:31.6}},{t:this.instance_1,p:{scaleX:0.113,scaleY:0.114,x:-13.5,y:61.5,rotation:0,skewX:46.9,skewY:42.4}}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:99.3,y:93.1,rotation:0,skewX:1.8,skewY:-2}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:229.9,y:177.3,rotation:0,skewX:1.8,skewY:-2}},{t:this.instance_5,p:{x:-275}},{t:this.instance_6},{t:this.instance,p:{scaleX:0.189,scaleY:0.487,x:-20.9,y:88.8,rotation:0,skewX:-68.7,skewY:-80.2}},{t:this.instance_2,p:{scaleX:0.104,scaleY:0.103,x:-2.7,y:57.8,rotation:0,skewX:31.8,skewY:31.1}},{t:this.instance_1,p:{scaleX:0.11,scaleY:0.117,x:-11.8,y:63.5,rotation:0,skewX:46.9,skewY:41.8}}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:99.3,y:99.3,rotation:0,skewX:1.8,skewY:-2}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:230.7,y:182.3,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_5,p:{x:-275}},{t:this.instance_6},{t:this.instance,p:{scaleX:0.192,scaleY:0.492,x:-18,y:92.7,rotation:0,skewX:-72.5,skewY:-84}},{t:this.instance_2,p:{scaleX:0.104,scaleY:0.108,x:-0.5,y:60,rotation:0,skewX:31.8,skewY:30.6}},{t:this.instance_1,p:{scaleX:0.108,scaleY:0.119,x:-10,y:65.4,rotation:0,skewX:46.9,skewY:41.1}}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:99.3,y:105.5,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:233.1,y:177.3,rotation:0,skewX:1.8,skewY:-2}},{t:this.instance_5,p:{x:-275}},{t:this.instance_6},{t:this.instance,p:{scaleX:0.196,scaleY:0.498,x:-14.9,y:96.5,rotation:0,skewX:-76.2,skewY:-87.7}},{t:this.instance_2,p:{scaleX:0.104,scaleY:0.113,x:1.8,y:62.2,rotation:0,skewX:31.8,skewY:30}},{t:this.instance_1,p:{scaleX:0.106,scaleY:0.121,x:-8.2,y:67.3,rotation:0,skewX:46.9,skewY:40.6}}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:107.6,y:104.3,rotation:0,skewX:1.8,skewY:-2}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:235.5,y:172.3,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_5,p:{x:-275}},{t:this.instance_6},{t:this.instance,p:{scaleX:0.199,scaleY:0.503,x:-11.5,y:100.3,rotation:0,skewX:-80,skewY:-91.3}},{t:this.instance_2,p:{scaleX:0.103,scaleY:0.117,x:4.1,y:64.4,rotation:0,skewX:31.8,skewY:29.4}},{t:this.instance_1,p:{scaleX:0.104,scaleY:0.123,x:-6.5,y:69.2,rotation:0,skewX:46.9,skewY:40.1}}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:116,y:103.1,rotation:0,skewX:1.8,skewY:-2}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:233.5,y:177.3,rotation:0,skewX:1.8,skewY:-2}},{t:this.instance_5,p:{x:-275}},{t:this.instance_6},{t:this.instance,p:{scaleX:0.203,scaleY:0.509,x:-8,y:104.2,rotation:0,skewX:-83.7,skewY:-95.1}},{t:this.instance_2,p:{scaleX:0.103,scaleY:0.122,x:6.4,y:66.6,rotation:0,skewX:31.8,skewY:28.8}},{t:this.instance_1,p:{scaleX:0.101,scaleY:0.125,x:-4.7,y:71.2,rotation:0,skewX:46.9,skewY:39.6}}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:124.3,y:101.9,rotation:0,skewX:1.8,skewY:-2}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:231.5,y:182.3,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_5,p:{x:-275}},{t:this.instance_6},{t:this.instance,p:{scaleX:0.206,scaleY:0.514,x:-4.2,y:108.1,rotation:0,skewX:-87.5,skewY:-98.8}},{t:this.instance_2,p:{scaleX:0.102,scaleY:0.127,x:8.7,y:68.7,rotation:0,skewX:31.8,skewY:28.3}},{t:this.instance_1,p:{scaleX:0.099,scaleY:0.127,x:-2.9,y:73.1,rotation:0,skewX:46.9,skewY:39.1}}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:132.6,y:100.7,rotation:0,skewX:1.8,skewY:-2}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:241,y:182.3,rotation:0,skewX:-1.9,skewY:-177.9}},{t:this.instance_5,p:{x:-275}},{t:this.instance_6},{t:this.instance,p:{scaleX:0.21,scaleY:0.52,x:-0.3,y:111.8,rotation:0,skewX:-91,skewY:-102.6}},{t:this.instance_2,p:{scaleX:0.102,scaleY:0.132,x:11.1,y:71,rotation:0,skewX:31.9,skewY:27.9}},{t:this.instance_1,p:{scaleX:0.097,scaleY:0.129,x:-1.1,y:75,rotation:0,skewX:46.8,skewY:38.5}}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:140.9,y:99.4,rotation:0,skewX:1.8,skewY:-2}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:220.2,y:183.6,rotation:0,skewX:-1.8,skewY:-178}},{t:this.instance_5,p:{x:-275}},{t:this.instance_6},{t:this.instance,p:{scaleX:0.213,scaleY:0.525,x:3.9,y:115.7,rotation:0,skewX:-94.9,skewY:-106.5}},{t:this.instance_2,p:{scaleX:0.079,scaleY:0.103,x:15.2,y:74.9,rotation:0,skewX:28.1,skewY:24.1}},{t:this.instance_1,p:{scaleX:0.095,scaleY:0.099,x:3.4,y:78.5,rotation:0,skewX:39.3,skewY:35.3}}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:149.3,y:98.2,rotation:0,skewX:1.8,skewY:-2}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:199.4,y:185,rotation:0,skewX:-1.8,skewY:-178}},{t:this.instance_5,p:{x:-275}},{t:this.instance_6},{t:this.instance,p:{scaleX:0.229,scaleY:0.531,x:11.8,y:118.1,rotation:0,skewX:-96.6,skewY:-108.3}},{t:this.instance_2,p:{scaleX:0.08,scaleY:0.099,x:18.7,y:76.9,rotation:0,skewX:24.3,skewY:20.3}},{t:this.instance_1,p:{scaleX:0.095,scaleY:0.097,x:8.8,y:81.2,rotation:0,skewX:31.8,skewY:27.8}}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:157.6,y:97,rotation:0,skewX:1.8,skewY:-2}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:178.6,y:186.4,rotation:0,skewX:-1.8,skewY:-178}},{t:this.instance_5,p:{x:-275}},{t:this.instance_6},{t:this.instance,p:{scaleX:0.245,scaleY:0.537,x:19.6,y:120.8,rotation:0,skewX:-98.5,skewY:-110.1}},{t:this.instance_2,p:{scaleX:0.081,scaleY:0.095,x:22.3,y:78.9,rotation:0,skewX:20.5,skewY:16.5}},{t:this.instance_1,p:{scaleX:0.095,scaleY:0.096,x:14.4,y:84.1,rotation:0,skewX:24.3,skewY:20.3}}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:165.9,y:95.8,rotation:0,skewX:1.8,skewY:-2}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:157.8,y:187.7,rotation:0,skewX:-1.8,skewY:-178}},{t:this.instance_5,p:{x:-275}},{t:this.instance_6},{t:this.instance,p:{scaleX:0.26,scaleY:0.543,x:27.8,y:123.3,rotation:0,skewX:-100.3,skewY:-112.1}},{t:this.instance_2,p:{scaleX:0.083,scaleY:0.092,x:26,y:81,rotation:0,skewX:16.8,skewY:12.8}},{t:this.instance_1,p:{scaleX:0.095,scaleY:0.095,x:19.9,y:87.1,rotation:0,skewX:16.8,skewY:12.8}}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:174.2,y:94.6,rotation:0,skewX:1.8,skewY:-2}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:137,y:189.1,rotation:0,skewX:-1.8,skewY:-178}},{t:this.instance_5,p:{x:-275}},{t:this.instance_6},{t:this.instance,p:{scaleX:0.276,scaleY:0.548,x:36,y:125.9,rotation:0,skewX:-102.3,skewY:-113.8}},{t:this.instance_2,p:{scaleX:0.084,scaleY:0.088,x:29.8,y:83.1,rotation:0,skewX:13,skewY:9}},{t:this.instance_1,p:{scaleX:0.095,scaleY:0.094,x:25.6,y:90.3,rotation:0,skewX:9.3,skewY:5.3}}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:182.6,y:93.4,rotation:0,skewX:1.8,skewY:-2}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:116.2,y:190.5,rotation:0,skewX:-1.9,skewY:-177.9}},{t:this.instance_5,p:{x:-275}},{t:this.instance_6},{t:this.instance,p:{scaleX:0.292,scaleY:0.554,x:44.5,y:128.3,rotation:0,skewX:-104.1,skewY:-115.8}},{t:this.instance_2,p:{scaleX:0.085,scaleY:0.085,x:33.4,y:85.2,rotation:0,skewX:9.3,skewY:5.3}},{t:this.instance_1,p:{scaleX:0.095,scaleY:0.093,x:31.3,y:93.5,rotation:0,skewX:1.8,skewY:-2}}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:190.9,y:92.2,rotation:0,skewX:1.8,skewY:-2}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:92.7,y:174.5,rotation:0,skewX:-1.8,skewY:-178}},{t:this.instance_5,p:{x:-275}},{t:this.instance_6},{t:this.instance,p:{scaleX:0.308,scaleY:0.56,x:52.8,y:130.9,rotation:0,skewX:-106,skewY:-117.6}},{t:this.instance_2,p:{scaleX:0.086,scaleY:0.081,x:37.2,y:87.4,rotation:0,skewX:5.5,skewY:1.5}},{t:this.instance_1,p:{scaleX:0.095,scaleY:0.092,x:37.2,y:96.8,rotation:0,skewX:-5.5,skewY:-9.5}}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:199.2,y:91,rotation:0,skewX:1.8,skewY:-2}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:69,y:158.5,rotation:0,skewX:-1.8,skewY:-178}},{t:this.instance_5,p:{x:-275}},{t:this.instance_6},{t:this.instance,p:{scaleX:0.323,scaleY:0.566,x:61.5,y:133.2,rotation:0,skewX:-107.8,skewY:-119.6}},{t:this.instance_2,p:{scaleX:0.087,scaleY:0.078,x:41.1,y:89.7,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_1,p:{scaleX:0.095,scaleY:0.09,x:43.1,y:100.1,rotation:0,skewX:-13.2,skewY:-17.1}}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:207.5,y:89.8,rotation:0,skewX:1.8,skewY:-2}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:45.2,y:142.5,rotation:0,skewX:-1.9,skewY:-177.9}},{t:this.instance_5,p:{x:-275}},{t:this.instance_6},{t:this.instance,p:{scaleX:0.339,scaleY:0.572,x:70.2,y:135.8,rotation:0,skewX:-109.9,skewY:-121.5}},{t:this.instance_2,p:{scaleX:0.094,scaleY:0.085,x:41.3,y:89.8,rotation:0,skewX:1.8,skewY:-2}},{t:this.instance_1,p:{scaleX:0.102,scaleY:0.094,x:28.9,y:105.6,rotation:0,skewX:-13,skewY:-17}}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:215.9,y:88.6,rotation:0,skewX:1.8,skewY:-2}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:41.6,y:140.5,rotation:0,skewX:-1.8,skewY:-178}},{t:this.instance_5,p:{x:-275}},{t:this.instance_6},{t:this.instance,p:{scaleX:0.342,scaleY:0.577,x:70,y:136.1,rotation:0,skewX:-109.8,skewY:-120.8}},{t:this.instance_2,p:{scaleX:0.1,scaleY:0.091,x:41.5,y:90,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_1,p:{scaleX:0.109,scaleY:0.097,x:14.4,y:111,rotation:0,skewX:-13.2,skewY:-17.1}}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:224.2,y:87.4,rotation:0,skewX:1.8,skewY:-2}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:37.9,y:138.6,rotation:0,skewX:-1.8,skewY:-178}},{t:this.instance_5,p:{x:-275}},{t:this.instance_6},{t:this.instance,p:{scaleX:0.345,scaleY:0.582,x:69.8,y:136.7,rotation:0,skewX:-110,skewY:-120.3}},{t:this.instance_2,p:{scaleX:0.095,scaleY:0.09,x:28.2,y:89.5,rotation:0,skewX:1.8,skewY:-2}},{t:this.instance_1,p:{scaleX:0.1,scaleY:0.089,x:29,y:105.8,rotation:0,skewX:-13.1,skewY:-17}}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:232.5,y:86.2,rotation:0,skewX:1.8,skewY:-2}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:34.2,y:136.6,rotation:0,skewX:-1.8,skewY:-178}},{t:this.instance_5,p:{x:-275}},{t:this.instance_6},{t:this.instance,p:{scaleX:0.348,scaleY:0.587,x:69.6,y:137.1,rotation:0,skewX:-110.1,skewY:-119.8}},{t:this.instance_2,p:{scaleX:0.091,scaleY:0.088,x:14.9,y:89,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_1,p:{scaleX:0.091,scaleY:0.081,x:43.5,y:100.5,rotation:0,skewX:-13.2,skewY:-17.1}}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:240.8,y:85,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:30.5,y:134.7,rotation:0,skewX:-1.8,skewY:-178}},{t:this.instance_5,p:{x:-275}},{t:this.instance_6},{t:this.instance,p:{scaleX:0.351,scaleY:0.592,x:69.4,y:137.7,rotation:0,skewX:-110.3,skewY:-119.1}},{t:this.instance_2,p:{scaleX:0.084,scaleY:0.085,x:28.6,y:89.4,rotation:0,skewX:1.8,skewY:-2}},{t:this.instance_1,p:{scaleX:0.092,scaleY:0.084,x:35.7,y:102,rotation:0,skewX:-13,skewY:-17}}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:241.2,y:81,rotation:0,skewX:1.8,skewY:-2}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:26.7,y:132.8,rotation:0,skewX:-1.9,skewY:-177.9}},{t:this.instance_5,p:{x:-275}},{t:this.instance_6},{t:this.instance,p:{scaleX:0.354,scaleY:0.597,x:69.2,y:138.1,rotation:0,skewX:-110.3,skewY:-118.6}},{t:this.instance_2,p:{scaleX:0.077,scaleY:0.082,x:42.2,y:89.8,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_1,p:{scaleX:0.092,scaleY:0.087,x:27.9,y:103.7,rotation:0,skewX:-13.2,skewY:-17.1}}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:241.5,y:77,rotation:0,skewX:1.8,skewY:-2}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:26.7,y:132.8,rotation:0,skewX:-1.9,skewY:-177.9}},{t:this.instance_5,p:{x:-275}},{t:this.instance_6},{t:this.instance,p:{scaleX:0.357,scaleY:0.602,x:69,y:138.5,rotation:0,skewX:-110.3,skewY:-118.1}},{t:this.instance_2,p:{scaleX:0.084,scaleY:0.082,x:41.3,y:89,rotation:0,skewX:1.8,skewY:-2}},{t:this.instance_1,p:{scaleX:0.086,scaleY:0.087,x:35.2,y:101.7,rotation:0,skewX:-13,skewY:-17}}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:241.9,y:73,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:17.2,y:132.8,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_5,p:{x:-275}},{t:this.instance_6},{t:this.instance,p:{scaleX:0.36,scaleY:0.607,x:68.7,y:139.1,rotation:0,skewX:-110.5,skewY:-117.3}},{t:this.instance_2,p:{scaleX:0.091,scaleY:0.082,x:40.3,y:88.1,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_1,p:{scaleX:0.081,scaleY:0.087,x:42.3,y:99.7,rotation:0,skewX:-13.1,skewY:-17.1}}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:239.6,y:79.8,rotation:0,skewX:1.8,skewY:-2}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:17.2,y:132.8,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_5,p:{x:-275}},{t:this.instance_6},{t:this.instance,p:{scaleX:0.363,scaleY:0.612,x:68.4,y:139.5,rotation:0,skewX:-110.6,skewY:-116.8}},{t:this.instance_2,p:{scaleX:0.094,scaleY:0.085,x:48.2,y:86.5,rotation:0,skewX:1.8,skewY:-2}},{t:this.instance_1,p:{scaleX:0.085,scaleY:0.089,x:50.2,y:100.5,rotation:0,skewX:-13,skewY:-17}}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:237.3,y:86.5,rotation:0,skewX:1.8,skewY:-2}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:26.7,y:132.8,rotation:0,skewX:-1.9,skewY:-177.9}},{t:this.instance_5,p:{x:-275}},{t:this.instance_6},{t:this.instance,p:{scaleX:0.366,scaleY:0.618,x:68.2,y:140.2,rotation:0,skewX:-110.8,skewY:-116.3}},{t:this.instance_2,p:{scaleX:0.096,scaleY:0.087,x:56.1,y:85,rotation:0,skewX:1.8,skewY:-2}},{t:this.instance_1,p:{scaleX:0.089,scaleY:0.092,x:58.1,y:101.3,rotation:0,skewX:-13,skewY:-17}}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:235,y:93.2,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:26.7,y:132.8,rotation:0,skewX:-1.9,skewY:-177.9}},{t:this.instance_5,p:{x:-275}},{t:this.instance_6},{t:this.instance,p:{scaleX:0.375,scaleY:0.632,x:75.9,y:141.4,rotation:0,skewX:-111.1,skewY:-114.6}},{t:this.instance_2,p:{scaleX:0.098,scaleY:0.09,x:64.1,y:83.4,rotation:0,skewX:1.8,skewY:-2}},{t:this.instance_1,p:{scaleX:0.093,scaleY:0.095,x:66,y:102.1,rotation:0,skewX:-13,skewY:-17}}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:235,y:93.2,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:17.2,y:132.8,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_5,p:{x:-275}},{t:this.instance_6},{t:this.instance,p:{scaleX:0.384,scaleY:0.648,x:83.6,y:142.8,rotation:0,skewX:-111.5,skewY:-112.8}},{t:this.instance_2,p:{scaleX:0.101,scaleY:0.093,x:72,y:81.9,rotation:0,skewX:1.8,skewY:-2}},{t:this.instance_1,p:{scaleX:0.098,scaleY:0.097,x:74,y:102.9,rotation:0,skewX:-13,skewY:-17}}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:245.2,y:93.2,rotation:0,skewX:-1.9,skewY:-177.9}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:17.2,y:132.8,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_5,p:{x:-275}},{t:this.instance_6},{t:this.instance,p:{scaleX:0.394,scaleY:0.663,x:91.2,y:144.1,rotation:0,skewX:-111.8,skewY:-111.3}},{t:this.instance_2,p:{scaleX:0.103,scaleY:0.095,x:79.9,y:80.3,rotation:0,skewX:1.8,skewY:-2}},{t:this.instance_1,p:{scaleX:0.102,scaleY:0.1,x:81.9,y:103.6,rotation:0,skewX:-13,skewY:-17}}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:245.2,y:93.2,rotation:0,skewX:-1.9,skewY:-177.9}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:26.7,y:132.8,rotation:0,skewX:-1.9,skewY:-177.9}},{t:this.instance_5,p:{x:-275}},{t:this.instance_6},{t:this.instance,p:{scaleX:0.403,scaleY:0.679,x:98.7,y:145.5,rotation:0,skewX:-112.1,skewY:-109.6}},{t:this.instance_2,p:{scaleX:0.105,scaleY:0.098,x:87.8,y:78.7,rotation:0,skewX:1.8,skewY:-2}},{t:this.instance_1,p:{scaleX:0.107,scaleY:0.103,x:89.8,y:104.4,rotation:0,skewX:-13,skewY:-17}}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:235,y:93.2,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:11.1,y:135.9,rotation:0,skewX:-1.8,skewY:-178}},{t:this.instance_5,p:{x:-275}},{t:this.instance_6},{t:this.instance,p:{scaleX:0.412,scaleY:0.694,x:106.3,y:147,rotation:0,skewX:-112.6,skewY:-107.8}},{t:this.instance_2,p:{scaleX:0.107,scaleY:0.1,x:95.7,y:77.1,rotation:0,skewX:1.8,skewY:-2}},{t:this.instance_1,p:{scaleX:0.111,scaleY:0.105,x:97.7,y:105.1,rotation:0,skewX:-13,skewY:-17.1}}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:235,y:93.2,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:-4.7,y:139.1,rotation:0,skewX:-1.8,skewY:-178}},{t:this.instance_5,p:{x:-275}},{t:this.instance_6},{t:this.instance,p:{scaleX:0.422,scaleY:0.709,x:113.8,y:148.1,rotation:0,skewX:-112.8,skewY:-106.3}},{t:this.instance_2,p:{scaleX:0.11,scaleY:0.103,x:103.7,y:75.7,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_1,p:{scaleX:0.115,scaleY:0.108,x:105.7,y:106,rotation:0,skewX:-13.2,skewY:-17.1}}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:235,y:93.2,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:-20.4,y:142.2,rotation:0,skewX:-1.8,skewY:-178}},{t:this.instance_5,p:{x:-275}},{t:this.instance_6},{t:this.instance,p:{scaleX:0.431,scaleY:0.726,x:121.2,y:149.8,rotation:0,skewX:-113.3,skewY:-104.6}},{t:this.instance_2,p:{scaleX:0.115,scaleY:0.116,x:110.2,y:74.9,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_1,p:{scaleX:0.107,scaleY:0.113,x:136.1,y:112.7,rotation:0,skewX:-13.2,skewY:-17.1}}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:237.3,y:87.7,rotation:0,skewX:1.8,skewY:-2}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:-36.1,y:145.3,rotation:0,skewX:-1.8,skewY:-178}},{t:this.instance_5,p:{x:-275}},{t:this.instance_6},{t:this.instance,p:{scaleX:0.447,scaleY:0.694,x:108.3,y:125.7,rotation:0,skewX:-88.7,skewY:-81.7}},{t:this.instance_2,p:{scaleX:0.089,scaleY:0.105,x:128,y:53.8,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_1,p:{scaleX:0.119,scaleY:0.107,x:145.5,y:117.6,rotation:0,skewX:-13.2,skewY:-17.1}}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:239.6,y:82.2,rotation:0,skewX:1.8,skewY:-2}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:-51.8,y:148.5,rotation:0,skewX:-1.8,skewY:-178}},{t:this.instance_5,p:{x:-275}},{t:this.instance_6},{t:this.instance,p:{scaleX:0.462,scaleY:0.662,x:105.9,y:98,rotation:0,skewX:-63.9,skewY:-58.6}},{t:this.instance_2,p:{scaleX:0.09,scaleY:0.097,x:149.4,y:41.3,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_1,p:{scaleX:0.099,scaleY:0.085,x:148.5,y:121.9,rotation:0,skewX:-13.1,skewY:-17.1}}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:241.9,y:76.7,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:-67.6,y:151.6,rotation:0,skewX:-1.8,skewY:-178}},{t:this.instance_5,p:{x:-275}},{t:this.instance_6},{t:this.instance,p:{scaleX:0.478,scaleY:0.63,x:114,y:71.2,rotation:0,skewX:-39.1,skewY:-35.4}},{t:this.instance_2,p:{scaleX:0.094,scaleY:0.086,x:163.6,y:43.6,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_1,p:{scaleX:0.099,scaleY:0.096,x:162.8,y:130.3,rotation:0,skewX:-13.1,skewY:-17.1}}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:253.4,y:76.2,rotation:0,skewX:-1.8,skewY:-178}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:-83.3,y:154.8,rotation:0,skewX:-1.9,skewY:-177.9}},{t:this.instance_5,p:{x:-275}},{t:this.instance_6},{t:this.instance,p:{scaleX:0.494,scaleY:0.599,x:130.9,y:49.1,rotation:0,skewX:-14.5,skewY:-12.3}},{t:this.instance_2,p:{scaleX:0.073,scaleY:0.084,x:197.8,y:41.6,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_1,p:{scaleX:0.074,scaleY:0.083,x:146.3,y:121.5,rotation:0,skewX:-13.2,skewY:-17.1}}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:251.4,y:80.5,rotation:0,skewX:-1.8,skewY:-178}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:-92.8,y:154.8,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_5,p:{x:-275}},{t:this.instance_6},{t:this.instance,p:{scaleX:0.51,scaleY:0.568,x:154,y:34.1,rotation:0,skewX:10.1,skewY:10.6}},{t:this.instance_2,p:{scaleX:0.073,scaleY:0.084,x:197.8,y:41.6,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_1,p:{scaleX:0.074,scaleY:0.083,x:146.3,y:121.5,rotation:0,skewX:-13.2,skewY:-17.1}}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:249.2,y:84.9,rotation:0,skewX:-1.8,skewY:-178}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:-92.8,y:145.9,rotation:0,skewX:1.8,skewY:-2}},{t:this.instance_5,p:{x:-275}},{t:this.instance_6},{t:this.instance,p:{scaleX:0.51,scaleY:0.568,x:154,y:34.1,rotation:0,skewX:10.1,skewY:10.6}},{t:this.instance_2,p:{scaleX:0.073,scaleY:0.084,x:197.8,y:41.6,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_1,p:{scaleX:0.074,scaleY:0.083,x:146.3,y:121.5,rotation:0,skewX:-13.2,skewY:-17.1}}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:247.1,y:89.3,rotation:0,skewX:-1.8,skewY:-178}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:-92.8,y:137,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_5,p:{x:-275}},{t:this.instance_6},{t:this.instance,p:{scaleX:0.51,scaleY:0.568,x:154,y:34.1,rotation:0,skewX:10.1,skewY:10.6}},{t:this.instance_2,p:{scaleX:0.073,scaleY:0.084,x:197.8,y:41.6,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_1,p:{scaleX:0.074,scaleY:0.083,x:146.3,y:121.5,rotation:0,skewX:-13.2,skewY:-17.1}}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:245,y:93.7,rotation:0,skewX:-1.9,skewY:-177.9}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:-92.8,y:146.1,rotation:0,skewX:1.8,skewY:-2}},{t:this.instance_5,p:{x:-275}},{t:this.instance_6},{t:this.instance,p:{scaleX:0.51,scaleY:0.568,x:154,y:34.1,rotation:0,skewX:10.1,skewY:10.6}},{t:this.instance_2,p:{scaleX:0.073,scaleY:0.084,x:197.8,y:41.6,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_1,p:{scaleX:0.074,scaleY:0.083,x:146.3,y:121.5,rotation:0,skewX:-13.2,skewY:-17.1}}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:234.8,y:93.7,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:-92.8,y:155.3,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_5,p:{x:-275}},{t:this.instance_6},{t:this.instance,p:{scaleX:0.51,scaleY:0.568,x:154,y:34.1,rotation:0,skewX:10.1,skewY:10.6}},{t:this.instance_2,p:{scaleX:0.073,scaleY:0.084,x:197.8,y:41.6,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_1,p:{scaleX:0.074,scaleY:0.083,x:146.3,y:121.5,rotation:0,skewX:-13.2,skewY:-17.1}}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:234.8,y:93.7,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:-93,y:148,rotation:0,skewX:1.8,skewY:-2}},{t:this.instance_5,p:{x:-275}},{t:this.instance_6},{t:this.instance,p:{scaleX:0.51,scaleY:0.568,x:154,y:34.1,rotation:0,skewX:10.1,skewY:10.6}},{t:this.instance_2,p:{scaleX:0.073,scaleY:0.084,x:197.8,y:41.6,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_1,p:{scaleX:0.074,scaleY:0.083,x:146.3,y:121.5,rotation:0,skewX:-13.2,skewY:-17.1}}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:234.8,y:93.7,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:-93.3,y:140.8,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_5,p:{x:-275}},{t:this.instance_6},{t:this.instance,p:{scaleX:0.51,scaleY:0.568,x:154,y:34.1,rotation:0,skewX:10.1,skewY:10.6}},{t:this.instance_2,p:{scaleX:0.073,scaleY:0.084,x:197.8,y:41.6,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_1,p:{scaleX:0.074,scaleY:0.083,x:146.3,y:121.5,rotation:0,skewX:-13.2,skewY:-17.1}}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:234.8,y:93.7,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:-90.2,y:149.1,rotation:0,skewX:1.8,skewY:-2}},{t:this.instance_5,p:{x:-275}},{t:this.instance_6},{t:this.instance,p:{scaleX:0.51,scaleY:0.568,x:154,y:34.1,rotation:0,skewX:10.1,skewY:10.6}},{t:this.instance_2,p:{scaleX:0.073,scaleY:0.084,x:197.8,y:41.6,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_1,p:{scaleX:0.074,scaleY:0.083,x:146.3,y:121.5,rotation:0,skewX:-13.2,skewY:-17.1}}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:234.8,y:93.7,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:-87,y:157.5,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_5,p:{x:-275}},{t:this.instance_6},{t:this.instance,p:{scaleX:0.51,scaleY:0.568,x:154,y:34.1,rotation:0,skewX:10.1,skewY:10.6}},{t:this.instance_2,p:{scaleX:0.073,scaleY:0.084,x:197.8,y:41.6,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_1,p:{scaleX:0.074,scaleY:0.083,x:146.3,y:121.5,rotation:0,skewX:-13.2,skewY:-17.1}}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:234.8,y:93.7,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:-87,y:157.5,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_5,p:{x:-275}},{t:this.instance_6},{t:this.instance,p:{scaleX:0.51,scaleY:0.568,x:154,y:34.1,rotation:0,skewX:10.1,skewY:10.6}},{t:this.instance_2,p:{scaleX:0.073,scaleY:0.084,x:197.8,y:41.6,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_1,p:{scaleX:0.074,scaleY:0.083,x:146.3,y:121.5,rotation:0,skewX:-13.2,skewY:-17.1}}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:234.8,y:93.7,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:-87,y:157.5,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_5,p:{x:-275}},{t:this.instance_6},{t:this.instance,p:{scaleX:0.51,scaleY:0.568,x:154,y:34.1,rotation:0,skewX:10.1,skewY:10.6}},{t:this.instance_2,p:{scaleX:0.073,scaleY:0.084,x:197.8,y:41.6,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_1,p:{scaleX:0.074,scaleY:0.083,x:146.3,y:121.5,rotation:0,skewX:-13.2,skewY:-17.1}}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:234.8,y:93.7,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:-87,y:157.5,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_5,p:{x:-275}},{t:this.instance_6},{t:this.instance,p:{scaleX:0.51,scaleY:0.568,x:154,y:34.1,rotation:0,skewX:10.1,skewY:10.6}},{t:this.instance_2,p:{scaleX:0.073,scaleY:0.084,x:197.8,y:41.6,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_1,p:{scaleX:0.074,scaleY:0.083,x:146.3,y:121.5,rotation:0,skewX:-13.2,skewY:-17.1}}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:234.8,y:93.7,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:-87,y:157.5,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_5,p:{x:-275}},{t:this.instance_6},{t:this.instance,p:{scaleX:0.51,scaleY:0.568,x:154,y:34.1,rotation:0,skewX:10.1,skewY:10.6}},{t:this.instance_2,p:{scaleX:0.073,scaleY:0.084,x:197.8,y:41.6,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_1,p:{scaleX:0.074,scaleY:0.083,x:146.3,y:121.5,rotation:0,skewX:-13.2,skewY:-17.1}}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:234.8,y:93.7,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:-87,y:157.5,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_5,p:{x:-275}},{t:this.instance_6},{t:this.instance,p:{scaleX:0.51,scaleY:0.568,x:154,y:34.1,rotation:0,skewX:10.1,skewY:10.6}},{t:this.instance_2,p:{scaleX:0.073,scaleY:0.084,x:197.8,y:41.6,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_1,p:{scaleX:0.074,scaleY:0.083,x:146.3,y:121.5,rotation:0,skewX:-13.2,skewY:-17.1}}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:234.8,y:93.7,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:-87,y:157.5,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_5,p:{x:-275}},{t:this.instance_6},{t:this.instance,p:{scaleX:0.51,scaleY:0.568,x:154,y:34.1,rotation:0,skewX:10.1,skewY:10.6}},{t:this.instance_2,p:{scaleX:0.073,scaleY:0.084,x:197.8,y:41.6,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_1,p:{scaleX:0.074,scaleY:0.083,x:146.3,y:121.5,rotation:0,skewX:-13.2,skewY:-17.1}}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:234.8,y:93.7,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:-87,y:157.5,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_5,p:{x:-275}},{t:this.instance_6},{t:this.instance,p:{scaleX:0.51,scaleY:0.568,x:154,y:34.1,rotation:0,skewX:10.1,skewY:10.6}},{t:this.instance_2,p:{scaleX:0.073,scaleY:0.084,x:197.8,y:41.6,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_1,p:{scaleX:0.074,scaleY:0.083,x:146.3,y:121.5,rotation:0,skewX:-13.2,skewY:-17.1}}]},1).to({state:[{t:this.instance_7},{t:this.instance_4,p:{scaleX:0.088,scaleY:0.095,x:234.8,y:93.7,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_3,p:{scaleX:0.072,scaleY:0.081,x:-87,y:157.5,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_5,p:{x:-275}},{t:this.instance_6},{t:this.instance,p:{scaleX:0.51,scaleY:0.568,x:154,y:34.1,rotation:0,skewX:10.1,skewY:10.6}},{t:this.instance_2,p:{scaleX:0.073,scaleY:0.084,x:197.8,y:41.6,rotation:0,skewX:1.9,skewY:-2.1}},{t:this.instance_1,p:{scaleX:0.074,scaleY:0.083,x:146.3,y:121.5,rotation:0,skewX:-13.2,skewY:-17.1}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-450.8,-208,730,436.4);


(lib.EndOfQuiz = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* cheer = new Sound();
		cheer.attachSound("s_coolcheer");*/
	}
	this.frame_9 = function() {
		/* cheer.start();*/
	}
	this.frame_69 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(60).call(this.frame_69).wait(1));

	// Flickering
	this.instance = new lib.star_Explode();
	this.instance.setTransform(5.4,83.2,1,1,0,0,0,7.2,8.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).wait(31));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgrtAfXMAAAg+tMBXbAAAMAAAA+tg");
	mask.setTransform(-1.8,-2.6);

	// SKATE
	this.instance_1 = new lib.dudeforquizzes();
	this.instance_1.setTransform(361,-145.7,0.216,0.216);
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({scaleX:0.35,scaleY:0.35,rotation:45,x:1.2,y:-152.4},16).to({scaleX:0.66,scaleY:0.66,rotation:60,x:-8.8,y:-35.8},15).wait(15).to({rotation:-15},2).to({scaleX:1.05,scaleY:1.05,x:-453.6,y:270.7},8).wait(5));

	// TEXT
	this.instance_2 = new lib.COOLEXPLODES();
	this.instance_2.setTransform(-194.2,-133.4);

	this.instance_3 = new lib.COOL();
	this.instance_3.setTransform(-207.5,-104.7);

	this.instance_2.mask = this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},34).to({state:[]},12).to({state:[{t:this.instance_3}]},11).wait(13));

	// Flickering
	this.instance_4 = new lib.star_Flicker();
	this.instance_4.setTransform(-0.9,58.1,1,1,0,0,0,182,0);

	this.instance_5 = new lib.star_Explode();
	this.instance_5.setTransform(-7.4,32.4,1,1,0,0,0,16.8,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[]},39).to({state:[{t:this.instance_5}]},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127.1,33.7,290.3,28.3);


(lib.AllDone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.EndOfQuiz();
	this.instance.setTransform(-18,-47.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-300.2,-251.7,560.8,402.5);


// stage content:
(lib.prep_Scene6 = function(mode,startPosition,loop) {
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
		
		 window.open ("prep_Scene7.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("prep_Scene5.html","_self");
		}
	}
	this.frame_1 = function() {
		/* function allDone()
		{
			gotoAndPlay(targetframe);
		}
		
		function check(word) 
		{
			for( x=0; x < limit; x++)
			{
				if(word == prep[x])
				{
					return true;
				}
			}
		}
		
		function releaseItem(item, text)
		{
			if (check(text))
			{
				item._x= -100;
				item._y= -100;
				response = "Good job! Keep going!";
				numcount--;
				currcount = numcount;
				if(numcount == endcount)
				{
					allDone();
				}
			}
			else 
			{
				response = "Try again.";
			}
		}
		
		function setupItem(instance, text)
		{
			response = "";
			nextturn = 2000;
			turntogo = getTimer() + nextturn;
			blinkTime(nowcount);
			timeStarter();
			instance.setAutoResize(true);
			instance.changeBackground("ButtonBackground");
			instance.setText(text);
			instance._visible = false;
			instance.txtbutton.onRelease = function()
			{
				releaseItem(instance, text);
			};
		}
		
		function timeStarter()
		{
			if( getTimer() >= turntogo) 
			{
				turntogo = getTimer() + nextturn; 
				if( nowcount == g1)
				{
					blinkTime(nowcount);
					nowcount++;
				} else if( nowcount == g2)
				{
					blinkTime(nowcount);
					nowcount++;
				} else if ( nowcount == g3)
				{
					blinkTime(nowcount);
					nowcount++;
				} else if ( nowcount == g4)
				{
					blinkTime(nowcount);
					nowcount = g1;
				}
			}
		}
		
		function setVisible(startitem, enditem, state)
		{
			for(x = startitem; x <= enditem; x++)
			{
				setProperty("item" + x, _visible, state);
			}
		}
		
		function blinkTime(whoseturn)
		{
		
			if(whoseturn == g1)
			{
				setVisible(31, 40, false);
				setVisible(1, 10, true);
			}
			else if(whoseturn == g2) 
			{
				setVisible(1, 10, false);
				setVisible(11, 20, true);
			}
			else if(whoseturn == g3) 
			{
				setVisible(11, 20, false);
				setVisible(21, 30, true);
			}
			else if(whoseturn == g4) 
			{
				setVisible(21, 30, false);
				setVisible(31, 40, true);
			}
		}
		
		
		// Setup the items (could dynamically load word list here)
		
		//number variables
		var turntogo;
		var targetframe = 136;
		var alllim = 40;
		var currcount = 26;
		var numcount = 26;
		var limit = 27;
		var endcount = 0;
		var nextturn;
		var g1 = 1;
		var g2 = 2;
		var g3 = 3;
		var g4 = 4;
		var nowcount = 1;
		
		
		var prep= new Array();
		prep[0] = "In";
		prep[1] = "Into";
		prep[2] = "To";
		prep[3] = "Under";
		prep[4] = "Upon";
		prep[5] = "Across";
		prep[6] = "Above";
		prep[7] = "On";
		prep[8] = "Behind";
		prep[9] = "Against";
		prep[10] = "Around";
		prep[11] = "Up";
		prep[12] = "Outside";
		prep[13] = "Above";
		prep[14]= "Out";
		prep[15]= "Out Of";
		prep[16]= "In Front Of";
		prep[17]= "Along Side Of";
		prep[18]= "Aboard";
		prep[19]= "From";
		prep[20]= "Over";
		prep[21]= "Beneath";
		prep[22]= "Through";
		prep[23]= "Below";
		prep[24]= "Underneath";
		prep[25]= "Down";
		prep[26]= "Inside";
		
		
		setupItem(item1,"Beneath");
		setupItem(item2,"Into");
		setupItem(item3, "Amazing");
		setupItem(item4,"Under");
		setupItem(item5, "Them");
		setupItem(item6,"Across");
		setupItem(item7,"Above");
		setupItem(item8, "Their");
		setupItem(item9,"Behind");
		setupItem(item10, "Sonic");
		setupItem(item11,"Around");
		setupItem(item12,"Up");
		setupItem(item13,"Outside");
		setupItem(item14,"Above");
		setupItem(item15, "Bike");
		setupItem(item16,"Out Of");
		setupItem(item17,"In Front Of");
		setupItem(item18, "Along Side Of");
		setupItem(item19,"Aboard");
		setupItem(item20,"From");
		setupItem(item21,"Over");
		setupItem(item22,"To");
		setupItem(item23,"Through");
		setupItem(item24,"Below");
		setupItem(item25,"Upon");
		setupItem(item26,"Down");
		setupItem(item27,"Grab");
		setupItem(item28,"Out");
		setupItem(item29, "Jump");
		setupItem(item30,"Against");
		setupItem(item31, "Koala");
		setupItem(item32, "Jungle");
		setupItem(item33, "Inside");
		setupItem(item34, "Bag");
		setupItem(item35,"Underneath");
		setupItem(item36,"On");
		setupItem(item37, "Silly");
		setupItem(item38,"In");
		setupItem(item39, "Poster");
		setupItem(item40, "Hawk");
		stop();
		*/
	}
	this.frame_134 = function() {
		this.stop();
	}
	this.frame_135 = function() {
		/* music = new Sound();
		music.attachSound("7-a");
		music.start(0,2);*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(133).call(this.frame_134).wait(1).call(this.frame_135).wait(1));

	// description
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeBEQgLgCABgHQAAgIAHAAIALABQAHACAJAAQAPgBAGgQQAFgKAAgXQgFAJgHAFQgGAEgGAAQgQAAgKgLQgKgLAAgPQAAgYANgOQAOgPAXAAQAIAAAFACQAGACADAEQAJAAAAALIgBAQIgDARIgCAbQgBASgDALQgDAOgJAHQgLAIgSAAQgLAAgJgBgAgPgrQgIALAAAQQAAAMAEAFQAGAGAJAAQAHAAAJgIQAHgJABgJIAEgeQgEgDgEgBQgDgBgEAAQgPAAgJALg");
	this.shape.setTransform(390.1,357);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAVAqIgDgTIgBgTIABgHIAAgIQAAgSgHgBQgKAAgHAMQgIALgFAOIgBAIIAAAJIAAAIIABAIQAAAEgCADQgDACgEAAQgDAAgDgCQgCgDAAgEIgBgIIAAgIIABgYIABgYIAAgIIAAgJQAAgDACgDQADgDADABQAIAAABALIAAAKQAPgUAOAAQAOAAAFANQAEAIAAAQIAAAJIAAAGIACATQACAMAAAHQAAAEgCADQgDABgEAAQgHABgBgJg");
	this.shape_1.setTransform(381,354.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgZAlQgMgNAAgUQgBgSALgPQAMgSAUAAQARAAAJAQQAIANgBASQAAASgKAOQgLAPgRAAQgOAAgLgKgAgOgQQgGAJAAALQAAANAHAHQAGAGAHAAQAIAAAGgHQAIgHAAgNQABgfgTgBQgLAAgHANg");
	this.shape_2.setTransform(371.2,354.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgEAzQgCgCAAgEIgCggIgCgdQAAgJgDgGQgGADgHAHIgKALIgEAGIgBANIgBAPIAAAIIABAHQAAADgCADQgDACgEAAQgKAAAAgWIABgQIABgOIAAgOIgBgOQAAgUAJAAQADAAADADQADADAAAEIgBAFIAAAFIAAAJQAFgJAIgIQAJgHAHAAQANAAAEAOQAEgHAHgDQAHgDAIAAQAPAAAFAQQACADACAVIAGAxQABADgDADQgDACgDAAQgIAAgBgIIgDgbIgDgZQgBgGgCgGQgDgIgDAAQgEAAgJAGQgIAFgDADIABAQIACAWQACAOAAAJQAAAEgCACQgDADgEAAQgBAAgDgDg");
	this.shape_3.setTransform(359.8,354.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAcAtIgGgHIgPAHIgJACQgUAAgKgLQgJgLAAgXQAAgTAPgPQAPgQASAAQAHAAAKAFQAMAEAAAHQAAABAAABQAAAAgBABQAAAAAAABQAAABgBAAIgBALIgBASQAAAKACAHIAFAPIACAEIABACQAAADgDADQgCACgDAAQgCAAgEgDgAgOgVQgJALAAANQAAAPAFAGQAFAIAKAAQAGAAAGgDIAJgHQgDgWAAgLIABgIIABgKIgFgCIgEgBQgMAAgKALg");
	this.shape_4.setTransform(348.1,354.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeA7QgMgMAAgTQAAgYAMgMQANgOASAAQAKAAAFADIAJAGQABglABgNQACgHAGAAQAIAAAAAIQAAAMgDAqIgBAYQAAAdADAPIAAACQAAADgDADQgCACgDAAQgGAAgCgIQgHAFgHACQgGACgGABQgSgBgMgMgAgTABQgIAJAAARQAAALAIAJQAIAIALAAQAGAAAFgDIAJgHIADgDIAAgPIAAgKIAAgKQgDgHgGgCQgFgEgIAAQgNAAgHAHg");
	this.shape_5.setTransform(394.7,325.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAVAqIgDgTIgBgTIABgGIAAgJQAAgSgHAAQgKAAgHALQgIAKgFAPIgBAIIAAAJIAAAIIABAIQAAAEgCADQgDACgEAAQgDAAgDgCQgCgDAAgEIgBgIIAAgIIABgYIABgYIAAgIIAAgJQAAgDACgDQADgCADAAQAIAAABALIAAAKQAPgUAOABQAOAAAFAMQAEAIAAAQIAAAJIAAAHIACATQACALAAAHQAAAEgCADQgDABgEAAQgHABgBgJg");
	this.shape_6.setTransform(385,327.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AATApQgLAGgMAAQgMAAgHgFQgJgGgBgKQgDgYAAgQQgBgMADgPQACgIAGAAQAEAAADADQADACgBAEIgBANIgBANIABAXQABALACAGIAGADIAFAAQAKAAANgDIAAgSIgBgPQAAgTACgOQACgIAHAAQADAAADACQACADAAADIgBAhIAAARIAAATIAAAGIAAAGQABAEgDACQgDADgDAAQgHAAgCgJg");
	this.shape_7.setTransform(375.4,327.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgZAlQgMgNAAgUQgBgSALgPQAMgSAUAAQARABAJAPQAIAOgBARQAAASgKAOQgLAQgRAAQgOAAgLgLgAgOgQQgGAJAAALQAAANAHAHQAGAGAHAAQAIAAAGgHQAIgHAAgNQABgggTAAQgLAAgHANg");
	this.shape_8.setTransform(365.9,327.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AghAoIAAg8IABgJIAAgIQAAgJAIAAQAIAAAAAOQAQgQAUAAQAHAAADAFQAEAGAAALIAAAGQgBALgIAAQgIAAAAgJIAAgGIAAgHQgOABgGAGQgIAGgFAMIAAAuQAAAJgJAAQgIAAAAgJg");
	this.shape_9.setTransform(357.2,327.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAcAtIgGgHIgPAHIgJACQgUAAgKgLQgJgLAAgXQAAgTAPgPQAPgQASAAQAHAAAKAFQAMAEAAAIQAAAAAAABQAAAAgBABQAAAAAAABQAAABgBAAIgBALIgBASQAAAKACAHIAFAPIACAFIABABQAAAEgDACQgCACgDAAQgCAAgEgDgAgOgVQgJALAAANQAAAPAFAGQAFAIAKAAQAGAAAGgDIAJgHQgDgWAAgLIABgIIABgKIgFgCIgEAAQgMgBgKALg");
	this.shape_10.setTransform(348.1,327.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AghAoIAAg8IABgJIAAgIQAAgJAIAAQAIAAAAAOQAQgQAUAAQAHAAADAFQAEAGAAALIAAAGQgBALgIAAQgIAAAAgJIAAgGIAAgHQgOABgGAGQgIAGgFAMIAAAuQAAAJgJAAQgIAAAAgJg");
	this.shape_11.setTransform(387.1,300.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgdAmQgNgMAAgTQAAgVALgPQAMgRATgBQAOAAAJAGQALAFAAANQAAAJgKAHQgEADgOAFIggAQQAFAHAHAEQAIADAIABQAGAAAIgCQAKgEADgEQADgFAEAAQADAAACADQACABAAAEQAAAJgPAHQgOAGgMABQgSgBgNgJgAgRgWQgHAIgDAPIAbgLQAOgIAGgFQgHgIgNABQgKAAgHAIg");
	this.shape_12.setTransform(377.8,300.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgeA7QgMgMAAgTQAAgYAMgMQANgOASAAQAKAAAFADIAJAGQABglABgNQACgIAGABQAIgBAAAJQAAAMgDAqIgBAXQAAAeADAPIAAACQAAAEgDACQgCACgDAAQgGAAgCgIQgHAFgHACQgGADgGAAQgSAAgMgNgAgTABQgIAJAAARQAAAMAIAIQAIAIALAAQAGAAAFgDIAJgHIADgDIAAgPIAAgKIAAgLQgDgGgGgCQgFgEgIAAQgNAAgHAHg");
	this.shape_13.setTransform(367.4,298.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAVAqIgDgTIgBgTIABgGIAAgIQAAgUgHABQgKAAgHALQgIAKgFAPIgBAIIAAAJIAAAIIABAIQAAAEgCACQgDADgEAAQgDAAgDgDQgCgCAAgEIgBgIIAAgIIABgYIABgYIAAgJIAAgIQAAgEACgCQADgCADAAQAIgBABAMIAAAKQAPgTAOAAQAOAAAFAMQAEAIAAARIAAAIIAAAHIACATQACALAAAHQAAAEgCADQgDACgEAAQgHAAgBgJg");
	this.shape_14.setTransform(357.7,300.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAUApQgMAGgMAAQgLAAgIgFQgJgGgBgKQgDgYgBgQQABgMACgPQACgIAGAAQAEAAADADQACACAAAEIgBANIgBANIABAXQABALACAGIAFADIAGAAQAKAAANgDIAAgSIgBgPQABgTACgOQABgIAHAAQAEAAACACQADADAAADIgCAhIAAARIAAATIAAAGIAAAGQAAAEgCACQgDADgDAAQgHAAgBgJg");
	this.shape_15.setTransform(348.2,300.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgdAlQgNgKAAgUQAAgVALgPQAMgRATAAQAOAAAJAEQALAHAAAMQAAAJgKAHQgEADgOAFIggAQQAFAHAHAEQAIADAIABQAGAAAIgCQAKgDADgFQADgFAEAAQADAAACACQACADAAADQAAAJgPAIQgOAFgMABQgSAAgNgLgAgRgWQgHAIgDAPIAbgLQAOgIAGgGQgHgGgNAAQgKgBgHAJg");
	this.shape_16.setTransform(396.2,273.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AghAoIAAg8IABgJIAAgIQAAgJAIAAQAIAAAAAOQAQgQAUAAQAHAAADAFQAEAGAAALIAAAGQgBALgIAAQgIAAAAgJIAAgGIAAgHQgOABgGAGQgIAGgFAMIAAAuQAAAJgJAAQgIAAAAgJg");
	this.shape_17.setTransform(387.1,273.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgZAlQgMgMAAgVQgBgRALgQQAMgSAUAAQARABAJAQQAIANgBARQAAASgKAOQgLAQgRAAQgOAAgLgLgAgOgRQgGAKAAALQAAANAHAHQAGAGAHAAQAIAAAGgGQAIgIAAgMQABghgTAAQgLAAgHAMg");
	this.shape_18.setTransform(377.7,273.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgNBLQgDgDABgDIAAgCQACgMgBgNIAAgYIAAgXIgNAAQgJAAAAgIQAAgJAPAAIAIgBIABgNQADgTAHgKQAIgLATAAQANAAgBAJQABAIgLAAQgWAAgDAeIAAAFIATgBQAOAAABAJQAAAGgIACIgHAAIgUABIAAASIAAARIAAAQQAAAQgBAKQAAAHgGAAQgEAAgDgCg");
	this.shape_19.setTransform(368.4,271.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgdAlQgNgKAAgUQAAgVALgPQAMgRATAAQAOAAAJAEQALAHAAAMQAAAJgKAHQgEADgOAFIggAQQAFAHAHAEQAIADAIABQAGAAAIgCQAKgDADgFQADgFAEAAQADAAACACQACADAAADQAAAJgPAIQgOAFgMABQgSAAgNgLgAgRgWQgHAIgDAPIAbgLQAOgIAGgGQgHgGgNAAQgKgBgHAJg");
	this.shape_20.setTransform(359.2,273.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgZBBQgDAFgEAAQgEAAgCgCQgCgDgBgEIAAgHIABgGIgBgcIAAgaIAAgYIAAgYQAAgGACgEQADgFAFgBQAHAAAAAIIAAAEIgBAEIAAASIAAAXQAHgFAHgCQAHgEAEAAQATAAAMAPQALAMAAAUQAAATgNAOQgNAOgRABQgNAAgLgGgAgNgCIgMAGIAAAPIAAAOIAAAOIALAFQAGACAHAAQAKAAAJgJQAIgJAAgNQAAgOgGgIQgIgIgMAAQgFAAgIAFg");
	this.shape_21.setTransform(349,271);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgEA+QgCgDAAgDIAAgKIAAgKIgCgxIgTgCQgJgBABgIQgBgEADgCQADgDADAAIATACIAAgMIgBgLQAAgEADgCQACgDAEAAQAFAAACANIAAAIIAAAFIAAAGIAMgCIAMABQAGACAAAGQgBAEgBADQgDACgEAAIgEAAIgFAAIgLABIABAyIAAAEIAAAFQAAATgJAAQgCAAgCgCg");
	this.shape_22.setTransform(402.7,244.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAUApQgLAGgNAAQgLAAgIgFQgIgGgCgKQgEgYAAgQQAAgMADgPQABgIAIAAQAEAAACADQADACAAAEIgCANIgBANIABAXQABALACAGIAFADIAGAAQAKAAANgDIAAgSIAAgPQAAgTACgOQABgIAHAAQAEAAACACQACADABADIgCAhIAAARIAAATIABAGIAAAGQAAAEgDACQgDADgDAAQgHAAgBgJg");
	this.shape_23.setTransform(393.8,246.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgZAlQgMgMAAgVQgBgSALgPQAMgRAUAAQARgBAJARQAIANgBARQAAASgKAOQgLAPgRABQgOAAgLgLgAgOgRQgGAKAAALQAAANAHAHQAGAGAHAAQAIAAAGgGQAIgIAAgMQABghgTAAQgLAAgHAMg");
	this.shape_24.setTransform(384.3,246.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAYBCIgEgUIgCgVIAAgHIABgHQAAgPgJAAQgKAAgIAIQgEAGgHAOQAAAigDAGQgDAFgFAAQgEAAgDgCQgCgDAAgDIABgEIABgNIAAgNIAAg/IAAgOIAAgJIgBgIQAAgEACgCQADgDAEAAQAHAAABAIIACAQIgBATIAAATIAAAIQAHgKAIgFQAHgEAIAAQAPAAAGAJQAEAHAAAOIAAAQIACATIAEASIAAACQgBAEgCACQgCADgEAAQgGAAgCgHg");
	this.shape_25.setTransform(374.6,243.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgEA+QgCgDAAgDIAAgKIAAgKIgCgxIgUgCQgHgBgBgIQAAgEADgCQADgDADAAIASACIAAgMIAAgLQAAgEADgCQACgDADAAQAHAAABANIAAAIIAAAFIAAAGIANgCIALABQAFACABAGQAAAEgDADQgCACgEAAIgFAAIgDAAIgNABIACAyIAAAEIAAAFQABATgKAAQgBAAgDgCg");
	this.shape_26.setTransform(365,244.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgHA/QgCgCAAgEIgBgQIgBgQIACgUIABgTQAAgEACgCQADgDADAAQACAAACADQACACABAEIgBATIgBAUIAAAQIAAAQQAAAEgCACQgCADgCAAQgEAAgCgDgAgFgvQgCgDAAgEQAAgFACgDQAEgCACAAQAEAAAEACQACADAAAFQAAAEgCADQgEACgEAAQgCAAgEgCg");
	this.shape_27.setTransform(358.5,244.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAFAZIgEgVIgBgRIgHAPIgNAkQgBADgDACQgCAFgGAAQgHABgFgbQgEgNgDgWIgCgNIgBgNQAAgEACgCQADgDAEAAQAGAAACAIIACAMIABANIAFAmQAKgZALgkQACgJAGAAQAGAAADALIAGAfIAGAhIAGgYIALguQACgFAGAAQAEAAADACQACADAAADIgBAEQgGAdgMAiQgCAIgGAIQgDAFgFAAQgJAAgGgYg");
	this.shape_28.setTransform(349.7,246.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgeBEQgLgCABgHQAAgIAHAAIALABQAHACAJAAQAPgBAGgQQAFgKAAgXQgFAJgGAFQgHAEgGAAQgRAAgJgLQgKgLAAgPQAAgYANgOQAOgPAXAAQAIAAAFACQAGACADAEQAJAAAAALIgBAQIgDARIgCAbQgBASgDALQgDAOgJAHQgLAIgSAAQgMAAgIgBgAgPgrQgIALAAAQQAAAMAEAFQAGAGAJAAQAHAAAJgIQAHgJABgJIAEgeQgEgDgEgBQgDgBgEAAQgPAAgJALg");
	this.shape_29.setTransform(391.1,221.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAVArIgDgUIgBgTIABgHIAAgHQAAgUgHAAQgKAAgHAMQgIALgFAOIgBAJIAAAIIAAAIIABAIQAAAEgCACQgDACgEAAQgDAAgDgCQgCgCAAgEIgBgIIAAgIIABgYIABgYIAAgJIAAgIQAAgEACgCQADgCADgBQAIAAABAMIAAAKQAPgTAOgBQAOAAAFANQAEAIAAARIAAAIIAAAGIACAUQACALAAAHQAAAEgCACQgDACgEABQgHgBgBgHg");
	this.shape_30.setTransform(382,219.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgHA/QgCgDgBgEIAAgPIAAgQIAAgUIABgTQABgEACgCQACgDAEAAQACAAADADQABACAAAEIAAATIgBAUIAAAQIAAAPQAAAEgCADQgCACgCAAQgEAAgCgCgAgEgvQgEgDAAgEQAAgEAEgEQADgCACAAQAEAAADACQAEAEAAAEQAAAEgEADQgDACgEAAQgCAAgDgCg");
	this.shape_31.setTransform(374.7,217);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AghAoIAAg8IABgJIAAgIQAAgJAIAAQAIAAAAAOQAQgQAUAAQAHAAADAFQAEAGAAALIAAAGQgBALgIAAQgIAAAAgJIAAgGIAAgHQgOABgGAGQgIAGgFAMIAAAuQAAAJgJAAQgIAAAAgJg");
	this.shape_32.setTransform(367.9,219.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAUApQgLAGgNAAQgLAAgIgFQgIgGgCgKQgEgYAAgQQAAgMADgPQABgIAIAAQAEAAACADQADACAAAEIgCANIgBANIABAXQABALACAGIAFADIAGAAQAKAAANgDIAAgSIAAgPQAAgTACgOQABgIAHAAQAEAAACACQACADABADIgCAhIAAARIAAATIABAGIAAAGQAAAEgDACQgDADgDAAQgHAAgBgJg");
	this.shape_33.setTransform(358.7,219.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgeA8QgMgNAAgUQAAgXAMgMQANgOASAAQAKAAAFADIAJAGQABglABgNQACgIAGAAQAIAAAAAJQAAAMgDAqIgBAXQAAAeADAPIAAACQAAADgDADQgCACgDAAQgGAAgCgIQgHAFgHACQgGACgGAAQgSAAgMgLgAgTABQgIAJAAARQAAALAIAJQAIAIALAAQAGAAAFgDIAJgHIADgDIAAgPIAAgKIAAgLQgDgGgGgCQgFgEgIAAQgNAAgHAHg");
	this.shape_34.setTransform(348.7,216.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgEA+QgCgDgBgDIAAgKIABgKIgCgxIgTgCQgJgBABgIQAAgEACgCQACgDAEAAIASACIAAgMIAAgLQAAgEACgCQADgDAEAAQAFAAACANIAAAIIAAAFIAAAGIAMgCQAJAAAEABQAEACAAAGQAAAEgCADQgCACgEAAIgEAAIgFAAIgLABIABAyIAAAEIAAAFQAAATgJAAQgCAAgCgCg");
	this.shape_35.setTransform(398.8,190.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgXAwQgOgEAAgJQAAgEADgDQADgCADAAQADAAAEAEQADACAHACIAKABQAFgBAGgBQAIgDAAgFQAAgNgRgEIgHgBQgLgDgFgEQgIgCAAgLQAAgSASgHIAPgGIAQgGQAEgBAEgBQAEABACACQADADAAADIABAIIABAIQAAAEgCACQgDACgEABQgFgBgBgDQgCgCgBgIIgUAHQgMAFAAAJIAFABQASADAKAHQAOAHAAASQAAAOgMAHQgKAHgOAAQgMAAgKgFg");
	this.shape_36.setTransform(390,191.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAVArIgDgUIgBgTIABgHIAAgIQAAgTgHAAQgKAAgHAMQgIALgFAOIgBAJIAAAIIAAAIIABAIQAAAEgCACQgDACgEAAQgDAAgDgCQgCgCAAgEIgBgIIAAgIIABgYIABgYIAAgIIAAgJQAAgEACgCQADgCADgBQAIAAABAMIAAAKQAPgTAOgBQAOAAAFANQAEAIAAAQIAAAJIAAAGIACATQACAMAAAHQAAAEgCACQgDACgEAAQgHAAgBgHg");
	this.shape_37.setTransform(381.4,192);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgHA/QgDgDAAgEIAAgPIgBgQIABgUIACgTQAAgEACgCQADgDADAAQACAAACADQACACAAAEIAAATIgBAUIAAAQIAAAPQAAAEgCADQgCACgCAAQgEAAgCgCgAgFgvQgCgDAAgEQAAgFACgDQAEgCACAAQAEAAAEACQACADAAAFQAAAEgCADQgEADgEAAQgCAAgEgDg");
	this.shape_38.setTransform(374.1,189.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAcAsIgGgGIgPAHIgJACQgUAAgKgMQgJgLAAgWQAAgTAPgPQAPgPASAAQAHAAAKADQAMAFAAAHQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABIgBALIgBARQAAAMACAFIAFAQIACAEIABACQAAADgDADQgCACgDAAQgCAAgEgEgAgOgUQgJAKAAANQAAAOAFAIQAFAHAKAAQAGAAAGgDIAJgHQgDgWAAgLIABgIIABgJIgFgDIgEgBQgMAAgKAMg");
	this.shape_39.setTransform(366.8,192.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgdBEQgMgCAAgHQAAgIAIAAIALABQAHACAJAAQAPgBAHgQQAEgKAAgXQgFAJgHAFQgGAEgHAAQgPAAgKgLQgKgLAAgPQAAgYAOgOQANgPAWAAQAJAAAGACQAFACADAEQAKAAAAALIgDAQIgCARIgCAbQgBASgCALQgFAOgIAHQgLAIgRAAQgNAAgHgBgAgPgrQgIALAAAQQAAAMAFAFQAEAGAKAAQAHAAAIgIQAIgJABgJIAEgeQgEgDgDgBQgEgBgEAAQgPAAgJALg");
	this.shape_40.setTransform(357.3,194.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAcAsIgGgGIgPAHIgJACQgUAAgKgMQgJgLAAgWQAAgTAPgPQAPgPASAAQAHAAAKADQAMAFAAAHQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABIgBALIgBARQAAAMACAFIAFAQIACAEIABACQAAADgDADQgCACgDAAQgCAAgEgEgAgOgUQgJAKAAANQAAAOAFAIQAFAHAKAAQAGAAAGgDIAJgHQgDgWAAgLIABgIIABgJIgFgDIgEgBQgMAAgKAMg");
	this.shape_41.setTransform(348.1,192.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgEA+QgCgDgBgDIAAgKIABgKIgCgxIgTgCQgJgBAAgIQABgEACgCQACgDAEAAIASACIAAgMIAAgLQAAgEACgCQADgDAEAAQAFAAACANIAAAIIAAAFIAAAGIAMgCIANABQAEACAAAGQAAAEgCADQgCACgEAAIgEAAIgFAAIgMABIACAyIAAAEIAAAFQAAATgJAAQgCAAgCgCg");
	this.shape_42.setTransform(366.4,163.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AATApQgLAGgMAAQgMAAgHgFQgIgGgCgKQgDgYAAgQQAAgMACgPQABgIAIAAQAEAAACADQACACABAEIgCANIgBANIABAXQABALACAGIAGADIAFAAQAKAAANgDIAAgSIAAgPQAAgTABgOQABgIAIAAQAEAAACACQACADABADIgCAhIAAARIAAATIABAGIAAAGQgBAEgCACQgCADgEAAQgHAAgCgJg");
	this.shape_43.setTransform(357.6,165);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgZAlQgMgNAAgUQgBgSALgPQAMgRAUAAQARAAAJAPQAIANgBASQAAASgKAOQgLAPgRAAQgOAAgLgKgAgOgQQgGAKAAAKQAAANAHAHQAGAGAHAAQAIAAAGgGQAIgIAAgNQABgfgTgBQgLAAgHANg");
	this.shape_44.setTransform(348,165.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAVAqIgDgTIgBgTIABgHIAAgIQAAgSgHgBQgKAAgHAMQgIALgFAOIgBAIIAAAJIAAAIIABAIQAAAEgCADQgDABgEAAQgDAAgDgBQgCgDAAgEIgBgIIAAgIIABgYIABgYIAAgIIAAgJQAAgDACgDQADgDADABQAIAAABALIAAAKQAPgUAOAAQAOAAAFANQAEAIAAAQIAAAJIAAAGIACATQACAMAAAHQAAAEgCACQgDACgEAAQgHABgBgJg");
	this.shape_45.setTransform(409.3,137.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgdAmQgNgMAAgTQAAgVALgQQAMgRATAAQAOABAJAFQALAGAAAMQAAAJgKAHQgEADgOAFIggAQQAFAIAHADQAIAEAIgBQAGAAAIgCQAKgCADgFQADgFAEAAQADAAACADQACACAAADQAAAKgPAGQgOAHgMgBQgSABgNgKgAgRgWQgHAIgDAPIAbgLQAOgIAGgFQgHgIgNAAQgKAAgHAJg");
	this.shape_46.setTransform(399.6,137.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgdAmQgNgMAAgTQAAgVALgQQAMgRATAAQAOABAJAFQALAGAAAMQAAAJgKAHQgEADgOAFIggAQQAFAIAHADQAIAEAIgBQAGAAAIgCQAKgCADgFQADgFAEAAQADAAACADQACACAAADQAAAKgPAGQgOAHgMgBQgSABgNgKgAgRgWQgHAIgDAPIAbgLQAOgIAGgFQgHgIgNAAQgKAAgHAJg");
	this.shape_47.setTransform(389.8,137.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAFAZIgEgVIgBgRIgHAPIgNAkQgBADgDACQgCAFgGAAQgGABgHgbQgDgNgDgWIgCgNIgCgNQAAgEADgCQADgDADAAQAHAAACAIIABAMIACANIAFAmQAKgZAKgkQAEgJAFAAQAHAAACALIAGAfIAGAhIAGgYIAMguQABgFAGAAQAEAAACACQADADAAADIgBAEQgGAdgMAiQgCAIgGAIQgDAFgFAAQgJAAgGgYg");
	this.shape_48.setTransform(378.7,138);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgEA+QgCgDAAgDIAAgKIAAgKIgCgxIgUgCQgHgBgBgIQAAgEADgCQACgDAEAAIASACIAAgMIAAgLQAAgEADgCQACgDADAAQAHAAABANIAAAIIAAAFIAAAGIANgCIALABQAFACABAGQAAAEgDADQgCACgEAAIgFAAIgDAAIgNABIACAyIAAAEIAAAFQABATgKAAQgBAAgDgCg");
	this.shape_49.setTransform(368.2,136.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgdAmQgNgMAAgTQAAgVALgQQAMgRATAAQAOABAJAFQALAGAAAMQAAAJgKAHQgEADgOAFIggAQQAFAIAHADQAIAEAIgBQAGAAAIgCQAKgCADgFQADgFAEAAQADAAACADQACACAAADQAAAKgPAGQgOAHgMgBQgSABgNgKgAgRgWQgHAIgDAPIAbgLQAOgIAGgFQgHgIgNAAQgKAAgHAJg");
	this.shape_50.setTransform(359.2,137.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgZBCQgDADgEAAQgEAAgCgCQgCgCgBgEIAAgGIABgHIgBgcIAAgaIAAgYIAAgZQAAgFACgEQADgGAFABQAHgBAAAIIAAAEIgBADIAAATIAAAXQAHgFAHgDQAHgCAEAAQATAAAMAOQALAMAAATQAAAVgNAOQgNANgRAAQgNAAgLgEgAgNgDIgMAHIAAAQIAAANIAAAPIALAEQAGACAHAAQAKAAAJgJQAIgJAAgOQAAgMgGgJQgIgHgMAAQgFAAgIADg");
	this.shape_51.setTransform(349,135.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AghAoIAAg8IABgJIAAgIQAAgJAIAAQAIAAAAAOQAQgQAUAAQAHAAADAFQAEAGAAALIAAAGQgBALgIAAQgIAAAAgJIAAgGIAAgHQgOABgGAGQgIAGgFAMIAAAuQAAAJgJAAQgIAAAAgJg");
	this.shape_52.setTransform(376,110.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgdAmQgNgMAAgTQAAgVALgQQAMgQATgBQAOAAAJAGQALAFAAANQAAAJgKAHQgEADgOAFIggAQQAFAIAHADQAIADAIAAQAGAAAIgBQAKgDADgFQADgFAEAAQADAAACADQACACAAADQAAAKgPAGQgOAHgMAAQgSAAgNgKgAgRgWQgHAIgDAPIAbgLQAOgIAGgFQgHgIgNAAQgKABgHAIg");
	this.shape_53.setTransform(366.7,110.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgJAoIgNgjIgQgnIgBgEQABgDACgDQADgDADAAQAGAAACAGIAWA7QAFgOAKgZIAHgTQADgGAFAAQAEAAADADQACACABAEQAAADgPAiIgTAoQAAAIgGAAQgFAAgEgIg");
	this.shape_54.setTransform(357.4,110.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgZAlQgMgNAAgUQgBgSALgPQAMgSAUAAQARAAAJAQQAIANgBASQAAASgKAOQgLAQgRAAQgOgBgLgKgAgOgQQgGAJAAALQAAANAHAHQAGAGAHAAQAIAAAGgHQAIgHAAgNQABgfgTgBQgLAAgHANg");
	this.shape_55.setTransform(348,110.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AghAoIAAg8IABgJIAAgIQAAgJAIAAQAIAAAAAOQAQgQAUAAQAHAAADAFQAEAGAAALIAAAGQgBALgIAAQgIAAAAgJIAAgGIAAgHQgOABgGAGQgIAGgFAMIAAAuQAAAJgJAAQgIAAAAgJg");
	this.shape_56.setTransform(384.7,83.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgdAmQgNgMAAgTQAAgVALgQQAMgQATgBQAOAAAJAGQALAFAAANQAAAJgKAHQgEAEgOAEIggAQQAFAHAHAEQAIADAIAAQAGABAIgCQAKgDADgFQADgFAEAAQADAAACADQACACAAADQAAAJgPAHQgOAHgMAAQgSgBgNgJgAgRgWQgHAIgDAPIAbgLQAOgIAGgFQgHgIgNABQgKAAgHAIg");
	this.shape_57.setTransform(375.4,83.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgEA+QgDgDABgDIAAgKIAAgKIgCgxIgUgCQgHgBAAgIQAAgEACgCQADgDADAAIATACIAAgMIgBgLQAAgEADgCQACgDADAAQAHAAABANIAAAIIAAAFIAAAGIANgCIALABQAGACAAAGQAAAEgCADQgDACgEAAIgFAAIgDAAIgMABIABAyIAAAEIAAAFQAAATgJAAQgBAAgDgCg");
	this.shape_58.setTransform(366,82.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgNBLQgDgDAAgDIABgCQACgMAAgNIAAgYIAAgXIgPAAQgJAAAAgIQAAgJAQAAIAJgBIABgNQACgTAIgKQAHgLATAAQAMAAAAAJQAAAIgLAAQgVAAgCAeIgBAFIAUgBQAOAAgBAJQABAGgIACIgGAAIgVABIgBASIABARIAAAQQAAAQgBAKQAAAHgHAAQgEAAgCgCg");
	this.shape_59.setTransform(357.1,81.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAcAtIgGgHIgPAHIgJACQgUAAgKgLQgJgLAAgXQAAgTAPgPQAPgQASAAQAHAAAKAFQAMAEAAAIQAAAAAAABQAAAAgBABQAAAAAAABQAAABgBAAIgBALIgBASQAAALACAGIAFAPIACAFIABABQAAAEgDACQgCACgDABQgCAAgEgEgAgOgVQgJALAAANQAAAPAFAGQAFAIAKAAQAGAAAGgDIAJgHQgDgWAAgLIABgIIABgKIgFgCIgEAAQgMgBgKALg");
	this.shape_60.setTransform(348.1,83.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AAXBCIgDgUIgBgVIAAgHIAAgHQAAgPgIAAQgLAAgHAIQgFAGgIAOQAAAigCAGQgDAFgFAAQgEAAgDgCQgDgDAAgDIABgEIABgNIABgNIAAg/IAAgOIAAgJIgBgIQAAgEACgCQADgDAEAAQAHAAABAIIABAQIAAATIgBATIAAAIQAIgKAIgFQAGgEAKAAQAOAAAFAJQAEAHABAOIABAQIACATIACASIAAACQABAEgDACQgDADgDAAQgHAAgCgHg");
	this.shape_61.setTransform(404.6,54.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgdBEQgLgCAAgHQgBgIAIAAIALABQAHACAJAAQAPgBAHgQQADgKABgXQgFAJgHAFQgGAEgGAAQgRAAgJgLQgKgLAAgPQAAgYANgOQAPgPAVAAQAJAAAGACQAFACADAEQAKAAAAALIgCAQIgDARIgCAbQAAASgDALQgFAOgIAHQgLAIgSAAQgMAAgHgBgAgPgrQgIALAAAQQAAAMAEAFQAFAGAKAAQAHAAAJgIQAHgJABgJIAEgeQgEgDgEgBQgDgBgEAAQgPAAgJALg");
	this.shape_62.setTransform(394.4,58.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AATApQgLAGgMAAQgMAAgHgFQgIgGgCgKQgEgYABgQQAAgMACgPQACgIAHAAQADAAADADQACACABAEIgCANIgBANIABAXQABALACAGIAGADIAFAAQAKAAANgDIAAgSIgBgPQAAgTACgOQABgIAIAAQADAAADACQACADAAADIgBAhIAAARIAAATIAAAGIAAAGQAAAEgCACQgCADgEAAQgHAAgCgJg");
	this.shape_63.setTransform(385.1,56.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgZAlQgMgMAAgVQgBgRALgQQAMgSAUAAQARABAJAQQAIANgBARQAAASgKAOQgLAQgRAAQgOAAgLgLgAgOgRQgGALAAAKQAAANAHAHQAGAGAHAAQAIAAAGgHQAIgHAAgMQABghgTAAQgLAAgHAMg");
	this.shape_64.setTransform(375.6,56.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AghAoIAAg8IABgJIAAgIQAAgJAIAAQAIAAAAAOQAQgQAUAAQAHAAADAFQAEAGAAALIAAAGQgBALgIAAQgIAAAAgJIAAgGIAAgHQgOABgGAGQgIAGgFAMIAAAuQAAAJgJAAQgIAAAAgJg");
	this.shape_65.setTransform(366.9,56.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AAXBCIgDgUIgBgVIAAgHIAAgHQAAgPgIAAQgLAAgIAIQgEAGgIAOQAAAigCAGQgDAFgFAAQgEAAgDgCQgCgDAAgDIAAgEIABgNIABgNIAAg/IAAgOIAAgJIgBgIQAAgEACgCQADgDAEAAQAHAAABAIIABAQIAAATIgBATIAAAIQAIgKAIgFQAHgEAJAAQAOAAAGAJQADAHABAOIAAAQIADATIADASIAAACQgBAEgCACQgCADgEAAQgHAAgCgHg");
	this.shape_66.setTransform(357.3,54.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgEA+QgDgDABgDIAAgKIAAgKIgCgxIgTgCQgIgBAAgIQAAgEACgCQADgDADAAIATACIAAgMIgBgLQAAgEADgCQACgDAEAAQAFAAACANIAAAIIAAAFIAAAGIAMgCIAMABQAGACAAAGQAAAEgCADQgDACgEAAIgFAAIgEAAIgLABIABAyIAAAEIAAAFQAAATgJAAQgBAAgDgCg");
	this.shape_67.setTransform(347.7,55.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgdAlQgNgKAAgUQAAgVALgPQAMgSATABQAOAAAJAEQALAHAAAMQAAAJgKAHQgEADgOAFIggAQQAFAIAHADQAIAEAIAAQAGAAAIgDQAKgDADgEQADgFAEAAQADAAACACQACACAAAEQAAAJgPAIQgOAFgMAAQgSAAgNgKgAgRgWQgHAIgDAPIAbgLQAOgIAGgGQgHgGgNAAQgKgBgHAJg");
	this.shape_68.setTransform(225.8,375.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AAXBDQgFgJgJgMIgNgVIgQALIgBAaQAAAEgCADQgDACgEAAQgIAAgBgMIABgVIABgWIABgdIAAgeIAAgKIgBgJQABgEACgCQACgDAEAAQADAAADADQADACgBAEIABAKIAAAJIAAAdIgBAcIAWgSIATgUQADgDADAAQADAAADADQADADAAADQAAADgDADQgKAMgQANIATAaQAOATAAAFQgBAEgCACQgDADgDAAQgFAAgDgFg");
	this.shape_69.setTransform(216.4,372.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgHA/QgCgCgBgEIAAgQIgBgQIABgUIABgTQABgEACgCQACgDAEAAQACAAADADQABACAAAEIAAATIgBAUIABAQIAAAQQgBAEgCACQgCADgCAAQgEAAgCgDgAgEgvQgEgDAAgFQAAgEAEgDQADgCACAAQAEAAADACQAEADAAAEQAAAFgEADQgDACgEAAQgCAAgDgCg");
	this.shape_70.setTransform(208.7,373.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgJA/IABggIABgfIAAgfIABgfQAAgJAGAAQAKAAgBAJIAAAfIgBAfIgBArIAAAUQgBAJgGAAQgIAAgBgJg");
	this.shape_71.setTransform(203.5,372.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgZAlQgMgMAAgVQgBgRALgQQAMgRAUAAQARgBAJARQAIANgBARQAAASgKAOQgLAPgRAAQgOABgLgLgAgOgRQgGALAAAKQAAANAHAHQAGAGAHAAQAIAAAGgGQAIgIAAgMQABghgTAAQgLAAgHAMg");
	this.shape_72.setTransform(228.5,348.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgEA+QgCgDAAgDIAAgKIAAgKIgCgxIgUgCQgHgBgBgIQAAgEADgCQADgDADAAIASACIAAgMIAAgLQAAgEADgCQACgDADAAQAHAAABANIAAAIIAAAFIAAAGIANgCIALABQAFACABAGQAAAEgDADQgCACgEAAIgFAAIgDAAIgNABIACAyIAAAEIAAAFQABATgKAAQgBAAgDgCg");
	this.shape_73.setTransform(219.7,346.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AAVArIgDgUIgBgTIABgHIAAgHQAAgUgHAAQgKAAgHAMQgIALgFAOIgBAJIAAAIIAAAIIABAIQAAAEgCACQgDACgEAAQgDAAgDgCQgCgCAAgEIgBgIIAAgIIABgYIABgYIAAgJIAAgIQAAgEACgCQADgCADgBQAIAAABAMIAAAKQAPgTAOgBQAOAAAFANQAEAIAAARIAAAIIAAAGIACAUQACALAAAHQAAAEgCACQgDACgEABQgHgBgBgHg");
	this.shape_74.setTransform(211,348.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgHA/QgCgDgBgEIAAgPIAAgQIAAgUIABgTQABgEACgCQACgDAEAAQACAAADADQABACAAAEIAAATIgBAUIABAQIAAAPQgBAEgCADQgCACgCAAQgEAAgCgCgAgEgvQgEgDAAgEQAAgEAEgEQADgCACAAQAEAAADACQAEAEAAAEQAAAEgEADQgDACgEAAQgCAAgDgCg");
	this.shape_75.setTransform(203.7,346.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgXAwQgOgEAAgJQAAgEADgDQADgCADAAQADAAAEAEQADACAHACIAKABQAFgBAGgBQAIgDAAgFQAAgNgRgEIgHgBQgLgDgFgEQgIgCAAgLQAAgSASgHIAPgGIAQgGQAEgBAEgBQAEABACACQADADAAADIABAIIABAIQAAAEgCACQgDACgEABQgFgBgBgDQgCgCgBgIIgUAGQgMAGAAAJIAFABQASADAKAHQAOAHAAASQAAAOgMAHQgKAHgOAAQgMAAgKgFg");
	this.shape_76.setTransform(214.3,320.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AAcAsIgGgGIgPAHIgJACQgUAAgKgMQgJgLAAgWQAAgTAPgPQAPgPASAAQAHAAAKADQAMAFAAAHQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABIgBALIgBARQAAAMACAFIAFAQIACAEIABACQAAADgDADQgCACgDAAQgCAAgEgEgAgOgUQgJAKAAANQAAAOAFAIQAFAHAKAAQAGAAAGgDIAJgHQgDgWAAgLIABgIIABgJIgFgDIgEgBQgMAAgKAMg");
	this.shape_77.setTransform(205.6,321.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgEA+QgCgDAAgDIAAgKIAAgKIgCgxIgUgCQgHgBgBgIQAAgEADgCQADgDADAAIASACIAAgMIAAgLQAAgEADgCQACgDADAAQAHAAABANIAAAIIAAAFIAAAGIANgCIAMABQAEACABAGQgBAEgCADQgCACgEAAIgFAAIgDAAIgNABIACAyIAAAEIAAAFQABATgKAAQgBAAgDgCg");
	this.shape_78.setTransform(243.9,292.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AATApQgKAGgNAAQgMAAgHgFQgJgGgBgKQgDgYAAgQQgBgMADgPQACgIAGAAQAEAAADADQADACgBAEIgBANIgBANIABAXQABALACAGIAGADIAFAAQAKAAANgDIAAgSIgBgPQAAgTACgOQACgIAHAAQADAAADACQACADAAADIgBAhIAAARIAAATIAAAGIAAAGQABAEgDACQgDADgDAAQgHAAgCgJg");
	this.shape_79.setTransform(235,294.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgZAlQgMgNAAgUQgBgSALgPQAMgRAUAAQARAAAJAPQAIANgBASQAAASgKAOQgLAPgRAAQgOAAgLgKgAgOgQQgGAKAAAKQAAANAHAHQAGAGAHAAQAIAAAGgGQAIgIAAgNQABgfgTgBQgLAAgHANg");
	this.shape_80.setTransform(225.5,294.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgaBCQgCADgFAAQgDAAgCgCQgCgCAAgDIAAgHIAAgHIAAgcIgBgaIAAgYIAAgZQAAgFADgEQACgGAGABQAGAAAAAHIgBAEIAAADIAAAUIgBAWQAIgFAHgDQAHgCAEAAQATAAAMAOQALAMAAATQAAAVgNANQgNAPgRAAQgOgBgLgEgAgMgDIgOAHIAAAQIAAANIAAAOIANAGQAFABAHAAQALAAAHgJQAJgJAAgOQAAgNgHgIQgHgHgMAAQgFAAgHADg");
	this.shape_81.setTransform(215.8,291.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AAcAtIgGgHIgPAHQgHACgCAAQgUAAgKgLQgJgMAAgWQAAgTAPgPQAPgPASgBQAHABAKAEQAMAFAAAGQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABIgBALIgBARQAAAMACAGIAFAPIACAEIABACQAAADgDADQgCACgDAAQgCAAgEgDgAgOgVQgJAMAAAMQAAAOAFAIQAFAHAKAAQAGAAAGgDIAJgHQgDgWAAgLIABgIIABgJIgFgDIgEgBQgMABgKAKg");
	this.shape_82.setTransform(205.6,294.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgWBEQgDgCAAgEQAAgJATgqIgfg6IgEgHQgDgEAAgCQAAgEADgDQADgCADAAQAEAAADADQAPAUAPAnIANgfIANgbQADgFAFAAQADAAADADQADACAAAEIgBAEIgfBAQgLAYgEAQIgGARQgCAHgGAAQgDAAgDgDg");
	this.shape_83.setTransform(216.1,269.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgaBCQgCADgFAAQgDAAgCgCQgDgCAAgEIAAgGIABgHIgBgcIAAgaIAAgYIAAgZQAAgFADgEQACgGAFABQAHgBAAAIIgBAEIAAADIAAATIgBAXQAIgFAHgDQAHgCAEAAQATAAAMAOQALAMAAATQAAAVgNAOQgNANgRAAQgNAAgMgEgAgNgDIgNAHIAAAQIAAANIAAAPIAMAEQAGACAHAAQAKAAAIgJQAJgJAAgOQAAgMgHgJQgHgHgMAAQgFAAgIADg");
	this.shape_84.setTransform(206.6,264.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgEAzQgCgCAAgEIgCggIgCgdQAAgJgDgGQgGADgHAHIgKALIgEAGIgBANIgBAPIAAAIIABAHQAAADgCADQgDACgEAAQgKAAAAgWIABgQIABgOIAAgOIgBgOQAAgUAJAAQADAAADADQADADAAAEIgBAFIAAAFIAAAJQAFgJAIgIQAJgHAHAAQANAAAEAOQAEgHAHgDQAHgDAIAAQAPAAAFAQQACADACAVIAGAxQABADgDADQgDACgDAAQgIAAgBgIIgDgbIgDgZQgBgGgCgGQgDgIgDAAQgEAAgJAGQgIAFgDADIABAQIACAWQACAOAAAJQAAAEgCACQgDADgEAAQgBAAgDgDg");
	this.shape_85.setTransform(235.3,240);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgZAlQgMgNAAgUQgBgSALgPQAMgSAUAAQARAAAJAQQAIANgBASQAAASgKAOQgLAQgRAAQgOAAgLgLgAgOgQQgGAJAAALQAAANAHAHQAGAGAHAAQAIAAAGgHQAIgHAAgNQABgfgTgBQgLAAgHANg");
	this.shape_86.setTransform(223.4,240);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AghAoIAAg8IABgJIAAgIQAAgJAIAAQAIAAAAAOQAQgQAUAAQAHAAADAFQAEAGAAALIAAAGQgBALgIAAQgIAAAAgJIAAgGIAAgHQgOABgGAGQgIAGgFAMIAAAuQAAAJgJAAQgIAAAAgJg");
	this.shape_87.setTransform(214.7,240);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgNBLQgDgDAAgDIABgCQACgMAAgNIAAgYIAAgXIgOAAQgKAAAAgIQAAgJAQAAIAJgBIABgNQACgTAIgKQAHgLATAAQAMAAAAAJQAAAIgLAAQgVAAgCAeIgBAFIAUgBQAOAAgBAJQABAGgIACIgGAAIgVABIgBASIABARIAAAQQAAAQgBAKQAAAHgHAAQgEAAgCgCg");
	this.shape_88.setTransform(205.4,238);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgEA+QgDgDAAgDIAAgKIABgKIgCgxIgTgCQgJgBAAgIQABgEACgCQACgDAEAAIASACIAAgMIAAgLQAAgEACgCQADgDADAAQAGAAACANIAAAIIAAAFIAAAGIAMgCIANABQAEACAAAGQAAAEgCADQgCACgEAAIgEAAIgFAAIgMABIACAyIAAAEIAAAFQAAATgJAAQgBAAgDgCg");
	this.shape_89.setTransform(214.4,211.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AAcAtIgGgHIgPAHIgJACQgUAAgKgLQgJgLAAgXQAAgTAPgPQAPgQASAAQAHAAAKAFQAMAEAAAIQAAAAAAABQAAAAgBABQAAAAAAABQAAABgBAAIgBALIgBASQAAAKACAHIAFAPIACAFIABABQAAAEgDACQgCACgDABQgCgBgEgDgAgOgVQgJALAAANQAAAPAFAGQAFAIAKAAQAGAAAGgDIAJgHQgDgWAAgLIABgIIABgKIgFgCIgEAAQgMgBgKALg");
	this.shape_90.setTransform(205.6,212.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AAVAqIgDgTIgBgTIABgGIAAgIQAAgUgHABQgKAAgHALQgIAKgFAPIgBAIIAAAJIAAAIIABAIQAAAEgCACQgDADgEAAQgDAAgDgDQgCgCAAgEIgBgIIAAgIIABgYIABgYIAAgJIAAgIQAAgDACgDQADgCADAAQAIgBABAMIAAAKQAPgTAOAAQAOAAAFAMQAEAIAAARIAAAIIAAAHIACATQACALAAAHQAAAEgCADQgDACgEAAQgHAAgBgJg");
	this.shape_91.setTransform(215.3,185.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgZAlQgMgMAAgVQgBgRALgQQAMgSAUAAQARABAJAQQAIANgBARQAAASgKAOQgLAQgRAAQgOAAgLgLgAgOgRQgGALAAAKQAAANAHAHQAGAGAHAAQAIAAAGgHQAIgHAAgMQABghgTAAQgLAAgHAMg");
	this.shape_92.setTransform(205.6,185.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AAXBCIgDgUIgBgVIAAgHIAAgHQAAgPgIAAQgLAAgIAIQgEAGgIAOQAAAigCAGQgDAFgFAAQgEAAgDgCQgCgDAAgDIAAgEIABgNIABgNIAAg/IAAgOIAAgJIgBgIQAAgEACgCQADgDAEAAQAHAAABAIIABAQIAAATIgBATIAAAIQAIgKAIgFQAHgEAJAAQAOAAAGAJQADAHABAOIAAAQIADATIACASIAAACQAAAEgCACQgCADgEAAQgHAAgCgHg");
	this.shape_93.setTransform(232.2,156.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgEA+QgDgDABgDIAAgKIAAgKIgCgxIgTgCQgIgBAAgIQAAgEACgCQADgDADAAIATACIAAgMIgBgLQAAgEADgCQACgDAEAAQAFAAACANIAAAIIAAAFIAAAGIANgCIALABQAGACAAAGQAAAEgCADQgDACgEAAIgFAAIgDAAIgMABIABAyIAAAEIAAAFQAAATgJAAQgBAAgDgCg");
	this.shape_94.setTransform(222.6,157.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgHA/QgDgCABgEIgBgQIAAgQIABgUIABgTQgBgEADgCQADgDADAAQACAAADADQACACAAAEIgBATIgBAUIABAQIAAAQQAAAEgDACQgCADgCAAQgEAAgCgDgAgFgvQgDgDAAgFQAAgDADgEQAEgDACAAQAEAAADADQADAEAAADQAAAFgDADQgDACgEAAQgCAAgEgCg");
	this.shape_95.setTransform(216,156.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AAFAZIgEgVIgBgRIgHAPIgNAkQgBADgDACQgCAFgGAAQgGABgHgbQgDgNgDgWIgCgNIgCgNQAAgEADgCQADgDAEAAQAGAAACAIIABAMIACANIAFAmQAKgZAKgkQAEgJAFAAQAHAAACALIAGAfIAGAhIAGgYIAMguQABgFAGAAQAEAAACACQADADAAADIgBAEQgGAdgMAiQgCAIgGAIQgDAFgFAAQgJAAgGgYg");
	this.shape_96.setTransform(207.2,158.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AghAoIAAg8IABgJIAAgIQAAgJAIAAQAIAAAAAOQAQgQAUAAQAHAAADAFQAEAGAAALIAAAGQgBALgIAAQgIAAAAgJIAAgGIAAgHQgOABgGAGQgIAGgFAMIAAAuQAAAJgJAAQgIAAAAgJg");
	this.shape_97.setTransform(224.1,131.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgZAlQgMgMAAgVQgBgSALgPQAMgRAUAAQARgBAJARQAIANgBARQAAASgKAOQgLAPgRABQgOAAgLgLgAgOgRQgGAKAAALQAAANAHAHQAGAGAHAAQAIAAAGgGQAIgIAAgMQABghgTAAQgLAAgHAMg");
	this.shape_98.setTransform(214.7,131.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgNBLQgDgDAAgDIABgCQACgMAAgNIAAgYIAAgXIgOAAQgKAAAAgIQAAgJAQAAIAJgBIABgNQACgTAIgKQAHgLATAAQAMAAAAAJQAAAIgLAAQgVAAgCAeIgBAFIAUgBQAOAAgBAJQABAGgIACIgGAAIgVABIgBASIABARIAAAQQAAAQgBAKQAAAHgHAAQgEAAgCgCg");
	this.shape_99.setTransform(205.4,129.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgZAlQgMgMAAgVQgBgRALgQQAMgRAUAAQARgBAJARQAIANgBARQAAASgKAOQgLAPgRAAQgOABgLgLgAgOgRQgGALAAAKQAAANAHAHQAGAGAHAAQAIAAAGgGQAIgIAAgMQABghgTAAQgLAAgHAMg");
	this.shape_100.setTransform(214.1,104.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgEA+QgCgDgBgDIAAgKIABgKIgCgxIgTgCQgJgBABgIQgBgEADgCQADgDADAAIATACIAAgMIgBgLQAAgEACgCQADgDAEAAQAFAAACANIAAAIIAAAFIAAAGIAMgCIANABQAEACAAAGQAAAEgBADQgDACgEAAIgEAAIgFAAIgLABIABAyIAAAEIAAAFQAAATgJAAQgCAAgCgCg");
	this.shape_101.setTransform(205.2,102.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AAVArIgDgUIgBgTIABgHIAAgIQAAgTgHAAQgKAAgHAMQgIALgFAOIgBAJIAAAIIAAAIIABAIQAAAEgCADQgDABgEAAQgDAAgDgBQgCgDAAgEIgBgIIAAgIIABgYIABgYIAAgJIAAgIQAAgEACgCQADgCADgBQAIAAABAMIAAAKQAPgTAOgBQAOAAAFANQAEAIAAAQIAAAJIAAAGIACATQACAMAAAHQAAAEgCACQgDACgEAAQgHAAgBgHg");
	this.shape_102.setTransform(211,77.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgHA/QgCgDgBgEIAAgPIAAgQIAAgUIABgTQABgEACgCQACgDAEAAQACAAADADQABACAAAEIAAATIgBAUIABAQIAAAPQgBAEgCADQgCACgCAAQgEAAgCgCgAgEgvQgEgDAAgEQAAgFAEgDQADgCACAAQAEAAADACQAEADAAAFQAAAEgEADQgDADgEAAQgCAAgDgDg");
	this.shape_103.setTransform(203.7,75.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgNBLQgDgDABgDIAAgCQABgMABgNIAAgYIAAgXIgPAAQgIAAgBgIQABgJAPAAIAIgBIABgNQADgTAHgKQAIgLATAAQANAAAAAJQgBAIgKAAQgWAAgDAeIAAAFIATgBQAPAAAAAJQgBAGgGACIgIAAIgTABIgBASIAAARIABAQQAAAQgCAKQAAAHgGAAQgFAAgCgCg");
	this.shape_104.setTransform(214.8,48.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgZAlQgMgNAAgUQgBgSALgPQAMgRAUAAQARAAAJAPQAIANgBASQAAASgKAOQgLAPgRAAQgOAAgLgKgAgOgQQgGAKAAAKQAAANAHAHQAGAGAHAAQAIAAAGgGQAIgIAAgNQABgfgTgBQgLAAgHANg");
	this.shape_105.setTransform(205.6,50.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgFAyQgDgDAAgFIAAgFIgBgGQAAgFADgDQAEgDACAAQAMAAAAAWQAAAFgDADQgDAEgFAAQgDAAgDgEgAgHgaQgDgDAAgFIgBgEIAAgEQAAgFAEgDQACgDAFAAQAKAAAAATQAAAFgDADQgDADgEAAQgDAAgEgDg");
	this.shape_106.setTransform(336,17.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgpBXQgDgDAAgFIABgrIAAgpIgCgrIgBgWQAAgHACgFQAEgHAGAAQAEAAADADQADADAAAEIgBAEIgBAGQAKgGAIgDQAIgEAHAAQAWAAAKAUQAIAPAAAaQAAAVgMAPQgOAQgVAAQgJAAgNgDIgBAzQAAAFgCADQgDADgFAAQgFAAgDgDgAgJg4QgGADgIAJIABAxQAMAEAKAAQANAAAHgJQAGgHAAgOQAAgUgFgJQgFgKgJAAQgIAAgIAEg");
	this.shape_107.setTransform(327.1,21.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgJBNQgDgDAAgEIgBgUIAAgTIABgZIABgXQAAgFAEgDQADgDAEAAQACAAADADQADADABAFIgCAXIgBAZIAAATIABAUQAAAEgDADQgDADgDAAQgEAAgDgDgAgFg6QgEgEAAgFQAAgFAEgEQADgDAEAAQAEAAAFADQADAEAAAFQAAAFgDAEQgFAEgEAAQgEAAgDgEg");
	this.shape_108.setTransform(318.2,16.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AAdBRQgDgJgCgQQgCgQAAgKIAAgIIABgJQAAgSgKAAQgNAAgKAKQgFAHgKASQAAAogDAIQgDAHgHAAQgEAAgDgDQgEgDAAgFIABgEQABgDAAgNIABgQIAAhNIABgSIgBgKIgBgKQAAgFADgDQADgDAFAAQAIAAACAKQACAKAAAIIgBAYIgBAXIAAAKQAJgMAKgGQAIgGAMAAQARAAAHAMQAFAIAAARIABAVIACAWQACANACAJIABAEQAAAEgEADQgDADgEAAQgIAAgCgIg");
	this.shape_109.setTransform(308.7,16.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgdA7QgQgGAAgKQAAgFADgDQADgEAFABQADgBAFAGQADACAJACIAMABQAHAAAHgCQAKgDAAgHQAAgOgUgGIgKgCQgOgDgGgFQgJgDAAgNQAAgWAWgJQAGgEAMgDIAUgHQAFgCAFAAQAFAAADADQADADAAAEIABAKIABAJQAAAFgDADQgDADgEAAQgGAAgDgEQgBgDgBgJIgZAHQgPAIgBAJIAHADQAWAEAMAIQASAJAAAVQAAASgPAIQgNAIgRAAQgOAAgNgFg");
	this.shape_110.setTransform(296.6,18.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AAaA0IgDgXIgCgYIABgIIAAgKQAAgYgJAAQgMABgJAOQgKANgFARIgBALIgBALIABAJIABAKQAAAFgDADQgDACgFAAQgFAAgDgCQgDgDAAgFIAAgKIgBgJIACgeIABgeIAAgKIgBgKQAAgFAEgDQADgDAEAAQAKAAABAOIAAAMQASgXARAAQARAAAHAPQAFAKAAAUIAAAKIAAAIQAAAKADAOQACAOAAAIQAAAFgDADQgDADgFAAQgJAAgBgKg");
	this.shape_111.setTransform(286.1,18.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgfAtQgPgPAAgZQgBgWANgTQAPgWAZABQAWgBAKAVQAJAPAAAWQAAAXgNAQQgNAUgVAAQgSAAgNgOgAgSgUQgHAMAAANQAAAPAIAKQAIAGAJAAQAJAAAIgIQAKgIAAgQQABgogYAAQgNABgJAPg");
	this.shape_112.setTransform(274.2,19.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgJBNQgDgDAAgEIAAgUIgBgTIACgZIABgXQAAgFACgDQADgDAFAAQADAAADADQACADAAAFIgBAXIgBAZIAAATIABAUQAAAEgDADQgDADgCAAQgFAAgDgDgAgGg6QgDgEAAgFQAAgFADgEQAFgDACAAQAGAAADADQAEAEAAAFQAAAFgEAEQgDAEgGAAQgCAAgFgEg");
	this.shape_113.setTransform(265.7,16.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgGBLQgDgCAAgFIAAgMIABgMIgCg9IgYgCQgKgBAAgJQAAgGADgCQADgDAFgBIAWADIAAgQIgBgMQAAgFADgDQADgDAFAAQAIAAABAPIAAAKIAAAHIAAAGIAPgCQAMAAADACQAHABAAAJQAAAEgDAEQgDADgFAAIgFAAIgGgBIgOACIACA9IAAAFIAAAFQAAAYgLAAQgDAAgDgDg");
	this.shape_114.setTransform(257.2,17.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AAiA2IgIgIIgSAJQgIADgDAAQgZAAgLgPQgLgNAAgbQAAgYASgSQASgTAWAAQAKAAALAEQAPAHAAAIQAAADgCACIgCAOIgBAVQAAAOACAIIAHATIACAGIABABQAAAFgDADQgDACgEAAQgCAAgFgFgAgRgaQgMAOAAAQQAAASAGAIQAGAJANAAQAIAAAHgEIALgIQgDgbAAgNIAAgLIACgLIgHgDIgEgBQgPAAgMANg");
	this.shape_115.setTransform(246.5,19.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgLBNIABgnIABgmIABglIAAgnQAAgLAJAAQALAAAAALIAAAnIgCAlIgBA1IgBAZQgBAKgIAAQgKAAAAgLg");
	this.shape_116.setTransform(237.8,15.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgjAuQgRgNAAgZQAAgZANgTQAPgVAYAAQAQAAAMAGQAOAHAAAQQAAALgNAIQgFAEgRAGIgoAUQAHAJAJAEQAIAFAKAAQAIAAAKgDQAMgEAFgFQADgGAEAAQAEAAADADQADADAAADQAAAMgTAJQgRAHgQAAQgWAAgOgMgAgVgbQgJAKgEASIAhgOQASgJAIgHQgKgJgPAAQgMAAgJALg");
	this.shape_117.setTransform(229,19);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgoAxIAAhJIAAgLIAAgLQAAgLAKAAQAKAAAAASQAUgUAYABQAJAAAEAGQAEAHAAANIAAAHQAAANgKAAQgKAAAAgKIAAgIIAAgJQgRACgJAIQgJAHgGAOIAAA5QAAAKgLAAQgJAAAAgKg");
	this.shape_118.setTransform(217.8,19.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AAZA8QgMAAgHgdIgEgZIgCgWIgIASIgRAtQgBAEgDACQgDAGgHAAQgIABgIghQgEgQgEgbIgCgQIgCgQQAAgFAEgDQADgDAEAAQAIAAACAJIADAQIABAQIAHAuIAYhKQAEgMAHAAQAIAAADANIAHAnQAEAZAEAPIAIgdIANg5QACgGAIAAQAEAAAEADQADADAAAEIgBAFQgJAjgNAqQgDAKgHAKQgDAGgGAAIgBAAg");
	this.shape_119.setTransform(198.1,19.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgfAtQgPgPAAgZQgBgWANgTQAPgWAZABQAVgBALAVQAJAPAAAWQAAAXgMAQQgOAUgVAAQgSAAgNgOgAgSgUQgHAMAAANQAAAPAIAKQAHAGAKAAQAJAAAIgIQAJgIABgQQABgogYAAQgNABgJAPg");
	this.shape_120.setTransform(184.7,19.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AAdBRQgDgJgCgQQgCgQAAgKIAAgIIABgJQAAgSgKAAQgNAAgKAKQgFAHgKASQAAAogDAIQgDAHgHAAQgEAAgDgDQgEgDAAgFIABgEQABgDAAgNIABgQIAAhNIABgSIgBgKIgBgKQAAgFADgDQADgDAFAAQAIAAACAKQACAKAAAIIgBAYIgBAXIAAAKQAJgMAKgGQAIgGAMAAQARAAAHAMQAFAIAAARIABAVIACAWQACANACAJIABAEQAAAEgEADQgDADgEAAQgIAAgCgIg");
	this.shape_121.setTransform(172.9,16.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgdA7QgQgGAAgKQAAgFADgDQADgEAFABQADgBAFAGQADACAJACIAMABQAHAAAHgCQAKgDAAgHQAAgOgUgGIgKgCQgOgDgGgFQgJgDAAgNQAAgWAWgJQAGgEAMgDIAUgHQAFgCAFAAQAFAAADADQADADAAAEIABAKIABAJQAAAFgDADQgDADgEAAQgGAAgDgEQgBgDgBgJIgZAHQgPAIgBAJIAHADQAWAEAMAIQASAJAAAVQAAASgPAIQgNAIgRAAQgOAAgNgFg");
	this.shape_122.setTransform(160.7,18.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#9900FF").s().p("AggA5QgPgHgBgMQAAgEADgCQACgCAEAAQAEAAADAEQAEAHADACQAIAFANAAQALAAALgGQAOgHAAgNQAAgKgMgGQgKgGgNAAQgNAAgJgEQgMgGAAgNQAAgPARgMQAQgMAPAAQAIAAAKADQAOAEAAAFQAAAIgIAAIgLgCIgNgCQgLAAgJAHQgKAGAAAJQAAAHANADIAPACQATABALALQAKAHAAAOQAAAUgSAMQgQAKgTAAQgPAAgNgGg");
	this.shape_123.setTransform(144.7,18.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#9900FF").s().p("Ag2BAQgDgDAAgDIABgLIAAgKIABgQIAAgPIAAgOIgBgRIgBgQIgBgPQAAgEAEgDQADgDAEAAQAFAAAGAJQAVAgAPAUQATAWAXAWIAAgKIAAgKQAAgjgDgWIgCgJIgCgIQAAgKAJAAQAPAAAAA2IgBAZIAAAcIgBAOQgBAIgIAAQgFgBgGgFQgigggpg7IgBATIAAARIAAAVIAAAVQAAAWgIAAQgFAAgCgDg");
	this.shape_124.setTransform(132.1,18.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#9900FF").s().p("AgpAzQgRgPAAgXQAAgbARgYQATgaAaAAQAcAAANAMQAOANAAAcQAAAbgPAXQgTAagaAAQgYAAgQgOgAgcgbQgNATAAAVQAAAPAMALQAMAJAQAAQASAAANgVQAMgRAAgVQAAgUgJgIQgIgHgVgBQgSABgOATg");
	this.shape_125.setTransform(118.5,18.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#9900FF").s().p("AgjA8QgCgCAAgEQAAgDACgCQADgDADAAIARgCIACgPIgBgOIgBgOQABgRACgdIgLAAIgLAAQgDAAgDgBQgDgDAAgEQABgIAHgBIAZAAQAPAAAZAEQAIAAgBAJQAAADgDACQgCACgDABIgNgCIgOgBIgCAsIAAAOIABAPIgBAOIAagBQAEABADACQABACAAAEQAAAEgBACQgDACgEAAIgNABIgPAAIgOABIgQACQgDAAgDgDg");
	this.shape_126.setTransform(107,18.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#9900FF").s().p("AgFA9QgCgDAAgDIAAgEIAAgEIAAgMIgBgMIgBggIgCghIgIAAQgTAAgJgDQgIgBABgHQgBgDADgDQADgDADAAIANACIAOABIAPAAIANAAIATAAIATABQADAAADADQACACAAAEQAAAEgCACQgDACgDAAIgTgBIgTAAIgFAAIACAlIABAjIABAJIAAAJQAAAFgBAEQgDAGgEAAQgCAAgDgCg");
	this.shape_127.setTransform(97.3,18.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#9900FF").s().p("AgjA8QgDgCABgEQgBgDADgCQADgDADAAIASgCIABgPIgBgOIAAgOQAAgRABgdIgKAAIgLAAQgDAAgDgBQgCgDAAgEQAAgIAIgBIAYAAQAPAAAZAEQAIAAAAAJQAAADgEACQgCACgDABIgOgCIgNgBIgBAsIAAAOIAAAPIAAAOIAagBQADABACACQACACAAAEQAAAEgCACQgCACgDAAIgPABIgOAAIgNABIgRACQgDAAgDgDg");
	this.shape_128.setTransform(86.2,18.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#9900FF").s().p("AggA5QgPgHgBgMQAAgEADgCQACgCAEAAQAEAAADAEQAEAHADACQAIAFANAAQALAAALgGQAOgHAAgNQAAgKgMgGQgKgGgNAAQgNAAgJgEQgMgGAAgNQAAgPARgMQAQgMAPAAQAIAAAKADQAOAEAAAFQAAAIgIAAIgLgCIgNgCQgLAAgJAHQgKAGAAAJQAAAHANADIAPACQATABALALQAKAHAAAOQAAAUgSAMQgQAKgTAAQgPAAgNgGg");
	this.shape_129.setTransform(75.7,18.5);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#9900FF").s().p("AgpAzQgRgPAAgXQAAgbARgYQATgaAbAAQAbAAANAMQAOANAAAcQAAAbgPAXQgSAagbAAQgXAAgRgOgAgcgbQgNATAAAVQAAAPAMALQAMAJAQAAQASAAANgVQAMgRAAgVQAAgUgJgIQgIgHgUgBQgTABgOATg");
	this.shape_130.setTransform(63,18.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#9900FF").s().p("AgiBAQgCgDAAgDIAAgZIABghIACghIAAgMIABgMQACgHAGABIAIgBIAMgBQANAAAOALQAOALAAAQQAAAVgPAKQgOALgSAAIgKgBIgBAsQAAADgCADQgCACgDAAQgEAAgCgCgAgRgwIAAAPIgCAhIAJAAQAMAAAJgGQALgIAAgNQAAgJgKgHQgJgGgJAAIgGAAIgFABg");
	this.shape_131.setTransform(51.9,17.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#9900FF").s().p("AgjA/QgIgHAAgbIABgLIAAgOIgBgEIACgDIACgjIgBgJIgBgJQgBgKAJAAQAEAAACACIATgEIAOgBQAVAAAMAFQAFACAAAGQAAADgCACQgDAEgDAAIgDgBQgOgEgNAAIgMABIgSAEIABAJIgBAfIAigDIAUgCQADAAACADQADACAAAEQAAAFgHABIgUACIglADIAAALIgBAKQAAATAEADQABADALgBIAOAAIAQgBIAEAAIAFAAQAJgBAAAKQAAAGgHACQgIABgYAAQgaAAgHgHg");
	this.shape_132.setTransform(42.3,18.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#9900FF").s().p("AgpA+QgCgCAAgEIgBgTIgBgUIACgVIACgWIgBgNIgBgMQAAgFADgEQADgEAGAAIAUACQALABAGAEQAhASAAAaQAAANgLAHQgJAIgOAEQAaAOANAPQACADAAADQAAAEgDACQgCADgEAAQgDAAgDgDQgbgbgggKIABARIAAAQQAAAEgCACQgCADgEAAQgEAAgCgDgAgZgkIAAAKIgBARIgBAOIADAAIAEAAQAUAAAKgFQAEgBAEgEQAFgFAAgDQAAgMgNgKQgKgJgOgBIgMgBg");
	this.shape_133.setTransform(31.5,18.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#9900FF").s().p("AgiBAQgCgDAAgDIAAgZIABghIACghIAAgMIABgMQACgHAGABIAIgBIAMgBQANAAAOALQAOALAAAQQAAAVgPAKQgOALgSAAIgKgBIgBAsQAAADgCADQgCACgDAAQgEAAgCgCgAgSgwIAAAPIgBAhIAJAAQAMAAAJgGQALgIAAgNQAAgJgKgHQgJgGgJAAIgGAAIgGABg");
	this.shape_134.setTransform(21.7,17.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},135).wait(1));

	// Layer 2
	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgdAlQgNgKAAgUQAAgVALgPQAMgSATABQAOAAAJAEQALAHAAAMQAAAJgKAHQgEADgOAFIggAQQAFAHAHAEQAIADAIABQAGAAAIgCQAKgDADgFQADgFAEAAQADAAACACQACADAAADQAAAJgPAIQgOAFgMABQgSAAgNgLgAgRgWQgHAIgDAPIAbgLQAOgIAGgGQgHgGgNAAQgKgBgHAJg");
	this.shape_135.setTransform(227.8,376.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AAXBDQgFgJgJgMIgNgVIgQALIgBAaQAAAEgCADQgDACgEAAQgJAAAAgMIABgVIABgWIABgdIAAgeIAAgKIgBgJQAAgEADgCQACgDAEAAQADAAADADQACACAAAEIABAKIAAAJIAAAdIgBAcIAWgSIATgUQADgDADAAQADAAADADQADADAAADQAAADgDADQgKAMgQANIATAaQANATAAAFQABAEgDACQgDADgEAAQgEAAgDgFg");
	this.shape_136.setTransform(218.4,373.9);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgHA/QgDgCAAgEIAAgQIgBgQIABgUIABgTQAAgEADgCQADgDADAAQACAAACADQACACAAAEIAAATIgBAUIAAAQIAAAQQABAEgDACQgCADgCAAQgEAAgCgDgAgEgvQgDgDAAgFQAAgDADgEQADgCACgBQAEABAEACQADAEAAADQAAAFgDADQgEACgEAAQgCAAgDgCg");
	this.shape_137.setTransform(210.7,374.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgJA/IABggIABgfIAAgfIABgfQAAgJAGAAQAJAAAAAJIAAAfIgBAfIgBArIgBAUQgBAJgFAAQgJAAAAgJg");
	this.shape_138.setTransform(205.5,373.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgZAlQgMgMAAgVQgBgSALgPQAMgRAUAAQARgBAJARQAIANgBARQAAASgKAOQgLAPgRABQgOAAgLgLgAgOgRQgGAKAAALQAAANAHAHQAGAGAHAAQAIAAAGgGQAIgIAAgMQABghgTAAQgLAAgHAMg");
	this.shape_139.setTransform(230.5,349.4);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgEA+QgDgDABgDIAAgKIAAgKIgCgxIgTgCQgIgBAAgIQAAgEACgCQADgDADAAIATACIAAgMIgBgLQAAgEADgCQACgDAEAAQAFAAACANIAAAIIAAAFIAAAGIAMgCIAMABQAGACAAAGQAAAEgCADQgDACgEAAIgFAAIgEAAIgLABIABAyIAAAEIAAAFQAAATgJAAQgBAAgDgCg");
	this.shape_140.setTransform(221.7,347.8);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AAVArIgDgUIgBgTIABgGIAAgIQAAgUgHABQgKgBgHAMQgIAKgFAPIgBAJIAAAIIAAAIIABAIQAAAEgCACQgDACgEAAQgDAAgDgCQgCgCAAgEIgBgIIAAgIIABgYIABgYIAAgJIAAgIQAAgDACgDQADgDADAAQAIAAABAMIAAAKQAPgTAOAAQAOAAAFAMQAEAIAAARIAAAIIAAAHIACATQACALAAAHQAAAEgCACQgDADgEAAQgHgBgBgHg");
	this.shape_141.setTransform(213,349.2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgHA/QgDgCAAgEIAAgQIgBgQIABgUIABgTQAAgEADgCQADgDADAAQACAAACADQACACAAAEIAAATIgBAUIAAAQIAAAQQABAEgDACQgCADgCAAQgEAAgCgDgAgEgvQgDgDAAgFQAAgEADgDQADgCACAAQAEAAAEACQADADAAAEQAAAFgDADQgEACgEAAQgCAAgDgCg");
	this.shape_142.setTransform(205.7,347.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgXAxQgOgGAAgIQAAgEADgDQADgCADAAQADAAAEAEQADACAHACIAKABQAFgBAGgBQAIgDAAgFQAAgNgRgEIgHgBQgLgDgFgEQgIgDAAgJQAAgTASgHIAPgGIAQgGQAEgBAEgBQAEABACACQADACAAAEIABAIIABAIQAAADgCADQgDACgEABQgFgBgBgDQgCgCgBgIIgUAGQgMAHAAAIIAFABQASAEAKAGQAOAHAAASQAAAOgMAHQgKAHgOgBQgMAAgKgDg");
	this.shape_143.setTransform(216.3,321.9);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AAcAsIgGgGIgPAHIgJACQgUAAgKgMQgJgKAAgXQAAgTAPgPQAPgPASAAQAHAAAKADQAMAFAAAHQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABIgBALIgBARQAAAMACAFIAFAQIACAEIABACQAAAEgDACQgCADgDAAQgCgBgEgEgAgOgUQgJAKAAANQAAAOAFAIQAFAHAKAAQAGAAAGgDIAJgHQgDgWAAgLIABgIIABgJIgFgDIgEgBQgMAAgKAMg");
	this.shape_144.setTransform(207.6,322.3);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgEA+QgDgDABgDIAAgKIAAgKIgCgxIgUgCQgHgBAAgIQAAgEACgCQADgDADAAIATACIAAgMIgBgLQAAgEADgCQACgDADAAQAHAAABANIAAAIIAAAFIAAAGIANgCQAJAAACABQAGACAAAGQAAAEgCADQgDACgEAAIgFAAIgDAAIgMABIABAyIAAAEIAAAFQAAATgJAAQgBAAgDgCg");
	this.shape_145.setTransform(245.9,293.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AAUApQgMAGgMAAQgLAAgIgFQgJgGgBgKQgDgYgBgQQABgMACgPQACgIAGAAQAEAAADADQACACAAAEIgBANIgBANIABAXQABALACAGIAFADIAGAAQAKAAANgDIAAgSIgBgPQABgTACgOQABgIAHAAQADAAADACQADADAAADIgCAhIAAARIAAATIAAAGIAAAGQAAAEgCACQgDADgDAAQgHAAgBgJg");
	this.shape_146.setTransform(237,295.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgZAlQgMgMAAgVQgBgRALgQQAMgRAUAAQARAAAJAPQAIAOgBARQAAASgKAOQgLAPgRAAQgOAAgLgKgAgOgRQgGALAAAKQAAANAHAHQAGAGAHAAQAIAAAGgGQAIgIAAgNQABgfgTgBQgLAAgHAMg");
	this.shape_147.setTransform(227.5,295.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgaBBQgDAEgDABQgEgBgCgCQgDgCABgDIAAgHIAAgHIAAgcIgBgaIAAgYIAAgYQAAgGACgEQADgFAGAAQAGAAAAAHIAAAEIgBAEIAAATIgBAWQAIgFAHgDQAHgDAEAAQATABAMAOQALAMAAATQAAAVgNANQgNAPgRAAQgNgBgMgFgAgMgDIgOAHIAAAQIAAANIAAAOIANAGQAFABAHAAQALAAAHgJQAJgJAAgOQAAgNgGgIQgIgHgMAAQgFAAgHADg");
	this.shape_148.setTransform(217.8,292.8);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AAcAsIgGgGIgPAHIgJACQgUAAgKgMQgJgLAAgWQAAgTAPgPQAPgPASAAQAHAAAKADQAMAFAAAHQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABIgBALIgBARQAAAMACAFIAFAQIACAEIABACQAAADgDADQgCACgDAAQgCAAgEgEgAgOgUQgJAKAAANQAAAOAFAIQAFAHAKAAQAGAAAGgDIAJgHQgDgWAAgLIABgIIABgJIgFgDIgEgBQgMAAgKAMg");
	this.shape_149.setTransform(207.6,295.2);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgWBEQgDgCAAgEQAAgJATgqIgfg6IgEgHQgDgEAAgCQAAgEADgDQADgCADAAQAEAAADADQAPAUAPAnIANgfIANgbQADgFAFAAQADAAADADQADACAAAEIgBAEIgfBAQgLAYgEAQIgGARQgCAHgGAAQgDAAgDgDg");
	this.shape_150.setTransform(218.1,270.4);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgaBCQgCADgFAAQgDAAgCgCQgCgCAAgDIAAgHIAAgHIAAgcIgBgaIAAgYIAAgZQAAgFADgEQACgGAGABQAGAAAAAHIgBAEIAAADIAAAUIgBAWQAIgFAHgDQAHgCAEAAQATAAAMAOQALAMAAATQAAAVgNAOQgNAOgRAAQgOgBgLgEgAgMgDIgOAHIAAAQIAAANIAAAOIANAGQAFABAHAAQALAAAHgJQAJgJAAgOQAAgNgHgIQgHgHgMAAQgFAAgHADg");
	this.shape_151.setTransform(208.6,265.7);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgEAzQgCgCAAgEIgCggIgCgdQAAgJgDgGQgGADgHAHIgKALIgEAGIgBANIgBAPIAAAIIABAHQAAADgCADQgDACgEAAQgKAAAAgWIABgQIABgOIAAgOIgBgOQAAgUAJAAQADAAADADQADADAAAEIgBAFIAAAFIAAAJQAFgJAIgIQAJgHAHAAQANAAAEAOQAEgHAHgDQAHgDAIAAQAPAAAFAQQACADACAVIAGAxQABADgDADQgDACgDAAQgIAAgBgIIgDgbIgDgZQgBgGgCgGQgDgIgDAAQgEAAgJAGQgIAFgDADIABAQIACAWQACAOAAAJQAAAEgCACQgDADgEAAQgBAAgDgDg");
	this.shape_152.setTransform(237.3,241);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgZAlQgMgMAAgVQgBgSALgPQAMgRAUgBQARAAAJAQQAIANgBASQAAASgKAOQgLAPgRAAQgOAAgLgKgAgOgQQgGAKAAAKQAAANAHAHQAGAGAHAAQAIAAAGgHQAIgHAAgNQABgfgTgBQgLAAgHANg");
	this.shape_153.setTransform(225.4,241);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AghAoIAAg8IABgJIAAgIQAAgJAIAAQAIAAAAAOQAQgQAUAAQAHAAADAFQAEAGAAALIAAAGQgBALgIAAQgIAAAAgJIAAgGIAAgHQgOABgGAGQgIAGgFAMIAAAuQAAAJgJAAQgIAAAAgJg");
	this.shape_154.setTransform(216.7,241);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgNBLQgCgDAAgDIAAgCQABgMABgNIAAgYIAAgXIgPAAQgIAAgBgIQAAgJAQAAIAJgBIAAgNQADgTAHgKQAHgLAUAAQANAAAAAJQAAAIgMAAQgVAAgCAeIgBAFIAUgBQANAAAAAJQAAAGgGACIgHAAIgUABIgBASIAAARIABAQQAAAQgCAKQAAAHgGAAQgEAAgDgCg");
	this.shape_155.setTransform(207.4,239);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgEA+QgCgDAAgDIAAgKIAAgKIgCgxIgUgCQgHgBgBgIQAAgEADgCQADgDADAAIASACIAAgMIAAgLQAAgEADgCQACgDADAAQAHAAABANIAAAIIAAAFIAAAGIANgCIALABQAFACABAGQgBAEgCADQgCACgEAAIgFAAIgDAAIgNABIACAyIAAAEIAAAFQABATgKAAQgBAAgDgCg");
	this.shape_156.setTransform(216.4,212.3);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AAcAtIgGgHIgPAHIgJACQgUAAgKgLQgJgLAAgXQAAgTAPgPQAPgQASAAQAHAAAKAFQAMAEAAAHQAAABAAABQAAAAgBABQAAAAAAABQAAABgBAAIgBALIgBASQAAAKACAHIAFAPIACAFIABABQAAADgDADQgCADgDgBQgCAAgEgDgAgOgVQgJALAAANQAAAPAFAGQAFAIAKAAQAGAAAGgDIAJgHQgDgWAAgLIABgIIABgKIgFgCIgEgBQgMAAgKALg");
	this.shape_157.setTransform(207.6,213.9);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AAVAqIgDgTIgBgTIABgGIAAgJQAAgSgHAAQgKAAgHALQgIAKgFAPIgBAIIAAAJIAAAIIABAIQAAAEgCADQgDACgEAAQgDAAgDgCQgCgDAAgEIgBgIIAAgIIABgYIABgYIAAgIIAAgJQAAgDACgDQADgCADAAQAIAAABALIAAAKQAPgUAOABQAOAAAFAMQAEAIAAAQIAAAJIAAAHIACATQACALAAAHQAAAEgCADQgDABgEAAQgHABgBgJg");
	this.shape_158.setTransform(217.3,186.6);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgZAlQgMgNAAgUQgBgSALgPQAMgSAUAAQARABAJAPQAIAOgBARQAAASgKAOQgLAQgRAAQgOAAgLgLgAgOgQQgGAJAAALQAAANAHAHQAGAGAHAAQAIAAAGgHQAIgHAAgNQABgggTAAQgLAAgHANg");
	this.shape_159.setTransform(207.6,186.8);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AAXBCIgDgUIgBgVIAAgHIAAgHQAAgPgIAAQgLAAgHAIQgFAGgIAOQAAAigDAGQgCAFgFAAQgEAAgDgCQgDgDAAgDIABgEIABgNIABgNIAAg/IAAgOIAAgJIgBgIQAAgEADgCQACgDAEAAQAHAAABAIIABAQIAAATIgBATIAAAIQAIgKAIgFQAGgEAKAAQAOAAAFAJQAEAHABAOIABAQIACATIACASIAAACQABAEgDACQgDADgDAAQgHAAgCgHg");
	this.shape_160.setTransform(234.2,157.2);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgEA+QgCgDgBgDIAAgKIABgKIgCgxIgTgCQgJgBABgIQgBgEADgCQADgDADAAIATACIAAgMIgBgLQAAgEACgCQADgDAEAAQAFAAACANIAAAIIAAAFIAAAGIAMgCIANABQAEACAAAGQAAAEgBADQgDACgEAAIgEAAIgFAAIgLABIABAyIAAAEIAAAFQAAATgJAAQgCAAgCgCg");
	this.shape_161.setTransform(224.6,158.1);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AgHA/QgCgCgBgEIAAgQIAAgQIAAgVIABgSQABgEACgCQACgDAEAAQACAAADADQABACAAAEIAAASIgBAVIABAQIAAAQQgBAEgCACQgCACgCABQgEgBgCgCgAgEgvQgEgDAAgFQAAgDAEgEQADgDACAAQAEAAADADQADAEABADQgBAFgDADQgDACgEAAQgCAAgDgCg");
	this.shape_162.setTransform(218,157.5);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AAFAZIgDgVIgCgRIgGAPIgOAkQgBADgCACQgDAFgGAAQgGABgHgbQgDgNgDgWIgCgNIgCgNQAAgEAEgCQACgDADAAQAHAAACAIIABAMIACANIAFAmQAKgZAKgkQAEgJAFAAQAHAAACALIAFAfIAHAhIAHgYIALguQABgFAGAAQAEAAACACQAEADAAADIgBAEQgIAdgKAiQgDAIgFAIQgEAFgFAAQgJAAgGgYg");
	this.shape_163.setTransform(209.2,159.8);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AghAoIAAg8IABgJIAAgIQAAgJAIAAQAIAAAAAOQAQgQAUAAQAHAAADAFQAEAGAAALIAAAGQgBALgIAAQgIAAAAgJIAAgGIAAgHQgOABgGAGQgIAGgFAMIAAAuQAAAJgJAAQgIAAAAgJg");
	this.shape_164.setTransform(226.1,132.6);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AgZAlQgMgMAAgVQgBgRALgQQAMgSAUABQARAAAJAQQAIANgBARQAAASgKAOQgLAQgRAAQgOAAgLgLgAgOgRQgGAKAAALQAAANAHAHQAGAGAHAAQAIAAAGgGQAIgIAAgMQABghgTAAQgLAAgHAMg");
	this.shape_165.setTransform(216.7,132.6);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgNBLQgCgDAAgDIAAgCQABgMABgNIAAgYIAAgXIgPAAQgIAAgBgIQAAgJAQAAIAJgBIAAgNQADgTAHgKQAHgLAUAAQANAAAAAJQAAAIgMAAQgVAAgCAeIgBAFIAUgBQANAAAAAJQAAAGgGACIgHAAIgUABIgBASIAAARIABAQQAAAQgCAKQAAAHgGAAQgEAAgDgCg");
	this.shape_166.setTransform(207.4,130.6);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgZAlQgMgMAAgVQgBgSALgPQAMgRAUAAQARgBAJARQAIANgBARQAAASgKAOQgLAPgRABQgOAAgLgLgAgOgRQgGAKAAALQAAANAHAHQAGAGAHAAQAIAAAGgGQAIgIAAgMQABghgTAAQgLAAgHAMg");
	this.shape_167.setTransform(216.1,105.5);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgEA+QgDgDAAgDIAAgKIABgKIgCgxIgTgCQgJgBAAgIQABgEACgCQACgDAEAAIASACIAAgMIAAgLQAAgEACgCQADgDAEAAQAFAAACANIAAAIIAAAFIAAAGIAMgCIANABQAEACAAAGQAAAEgCADQgCACgEAAIgEAAIgFAAIgMABIACAyIAAAEIAAAFQAAATgJAAQgBAAgDgCg");
	this.shape_168.setTransform(207.2,103.9);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AAVArIgDgUIgBgTIABgHIAAgHQAAgUgHAAQgKAAgHAMQgIALgFAOIgBAJIAAAIIAAAIIABAIQAAAEgCACQgDACgEAAQgDAAgDgCQgCgCAAgEIgBgIIAAgIIABgYIABgYIAAgJIAAgIQAAgEACgCQADgCADgBQAIAAABAMIAAAKQAPgTAOgBQAOAAAFANQAEAIAAARIAAAIIAAAGIACAUQACALAAAHQAAAEgCACQgDACgEABQgHgBgBgHg");
	this.shape_169.setTransform(213,78.2);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AgHA/QgDgDAAgEIAAgPIgBgQIABgUIABgTQAAgEADgCQADgDADAAQACAAACADQACACAAAEIAAATIgBAUIAAAQIAAAPQABAEgDADQgCACgCAAQgEAAgCgCgAgEgvQgDgDAAgEQAAgEADgEQADgCACAAQAEAAAEACQADAEAAAEQAAAEgDADQgEACgEAAQgCAAgDgCg");
	this.shape_170.setTransform(205.7,76.2);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AgNBLQgCgDgBgDIABgCQACgMgBgNIAAgYIAAgXIgNAAQgJAAAAgIQAAgJAPAAIAIgBIABgNQADgTAIgKQAGgLAUAAQAMAAAAAJQABAIgLAAQgWAAgDAeIAAAFIATgBQAOAAABAJQAAAGgIACIgHAAIgUABIgBASIABARIAAAQQAAAQgBAKQAAAHgHAAQgDAAgDgCg");
	this.shape_171.setTransform(216.8,49.3);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgZAlQgMgMAAgVQgBgRALgQQAMgRAUAAQARAAAJAPQAIAOgBARQAAASgKAOQgLAPgRAAQgOAAgLgKgAgOgQQgGAKAAAKQAAANAHAHQAGAGAHAAQAIAAAGgGQAIgIAAgNQABgfgTgBQgLAAgHANg");
	this.shape_172.setTransform(207.6,51.3);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AgeBEQgLgCAAgHQABgIAHAAIALABQAHACAJAAQAPgBAGgQQAFgKAAgXQgFAJgGAFQgHAEgHAAQgQAAgJgLQgKgLAAgPQAAgYAOgOQAOgPAWAAQAIAAAFACQAGACADAEQAJAAAAALIgCAQIgCARIgCAbQgBASgDALQgDAOgJAHQgLAIgSAAQgLAAgJgBgAgPgrQgIALAAAQQAAAMAEAFQAGAGAJAAQAHAAAIgIQAIgJABgJIAEgeQgDgDgEgBQgEgBgEAAQgPAAgJALg");
	this.shape_173.setTransform(392.1,358);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AAVAqIgDgTIgBgTIABgHIAAgIQAAgSgHgBQgKAAgHAMQgIALgFAOIgBAIIAAAJIAAAIIABAIQAAAEgCADQgDABgEAAQgDAAgDgBQgCgDAAgEIgBgIIAAgIIABgYIABgYIAAgIIAAgJQAAgDACgDQADgDADABQAIAAABALIAAAKQAPgUAOAAQAOAAAFANQAEAIAAAQIAAAJIAAAGIACATQACAMAAAHQAAAEgCACQgDACgEAAQgHABgBgJg");
	this.shape_174.setTransform(383,355.6);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AgZAlQgMgNAAgUQgBgSALgPQAMgRAUgBQARAAAJAQQAIANgBASQAAASgKAOQgLAPgRAAQgOAAgLgKgAgOgQQgGAKAAAKQAAANAHAHQAGAGAHAAQAIAAAGgHQAIgHAAgNQABgfgTgBQgLAAgHANg");
	this.shape_175.setTransform(373.2,355.8);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AgEAzQgCgCAAgEIgCggIgCgdQAAgJgDgGQgGADgHAHIgKALIgEAGIgBANIgBAPIAAAIIABAHQAAADgCADQgDACgEAAQgKAAAAgWIABgQIABgOIAAgOIgBgOQAAgUAJAAQADAAADADQADADAAAEIgBAFIAAAFIAAAJQAFgJAIgIQAJgHAHAAQANAAAEAOQAEgHAHgDQAHgDAIAAQAPAAAFAQQACADACAVIAGAxQABADgDADQgDACgDAAQgIAAgBgIIgDgbIgDgZQgBgGgCgGQgDgIgDAAQgEAAgJAGQgIAFgDADIABAQIACAWQACAOAAAJQAAAEgCACQgDADgEAAQgBAAgDgDg");
	this.shape_176.setTransform(361.8,355.7);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AAcAtIgGgHIgPAHQgHACgCAAQgUAAgKgLQgJgMAAgWQAAgTAPgPQAPgQASAAQAHAAAKAFQAMAFAAAGQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABIgBALIgBARQAAALACAHIAFAPIACAEIABACQAAADgDADQgCADgDgBQgCAAgEgDgAgOgVQgJAMAAAMQAAAOAFAIQAFAHAKAAQAGAAAGgDIAJgHQgDgWAAgLIABgIIABgKIgFgCIgEgBQgMABgKAKg");
	this.shape_177.setTransform(350.1,355.8);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AgeA8QgMgNAAgUQAAgXAMgMQANgOASAAQAKAAAFADIAJAGQABglABgNQACgHAGAAQAIAAAAAIQAAAMgDAqIgBAYQAAAdADAPIAAACQAAAEgDACQgCACgDAAQgGAAgCgIQgHAFgHACQgGACgGABQgSgBgMgLgAgTABQgIAIAAASQAAALAIAJQAIAIALAAQAGAAAFgDIAJgHIADgDIAAgPIAAgKIAAgKQgDgHgGgCQgFgEgIAAQgNAAgHAHg");
	this.shape_178.setTransform(396.7,326.2);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AAVAqIgDgTIgBgTIABgHIAAgIQAAgSgHAAQgKAAgHALQgIALgFAOIgBAIIAAAJIAAAIIABAIQAAAEgCADQgDACgEAAQgDAAgDgCQgCgDAAgEIgBgIIAAgIIABgYIABgYIAAgIIAAgJQAAgDACgDQADgDADABQAIAAABALIAAAKQAPgUAOAAQAOABAFAMQAEAIAAAQIAAAJIAAAGIACATQACAMAAAHQAAAEgCADQgDABgEAAQgHABgBgJg");
	this.shape_179.setTransform(387,328.5);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AAUApQgMAGgMAAQgLAAgIgFQgJgGgBgKQgDgYgBgQQABgMACgPQACgIAGAAQAEAAADADQACACAAAEIgBANIgBANIABAXQABALACAGIAFADIAGAAQAKAAANgDIAAgSIgBgPQABgTACgOQABgIAHAAQAEAAACACQADADAAADIgCAhIAAARIAAATIAAAGIAAAGQAAAEgCACQgDADgDAAQgHAAgBgJg");
	this.shape_180.setTransform(377.4,328.6);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AgZAlQgMgNAAgUQgBgSALgPQAMgSAUAAQARAAAJAQQAIANgBASQAAASgKAOQgLAPgRAAQgOAAgLgKgAgOgQQgGAJAAALQAAANAHAHQAGAGAHAAQAIAAAGgHQAIgHAAgNQABgfgTgBQgLAAgHANg");
	this.shape_181.setTransform(367.9,328.7);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AghAoIAAg8IABgJIAAgIQAAgJAIAAQAIAAAAAOQAQgQAUAAQAHAAADAFQAEAGAAALIAAAGQgBALgIAAQgIAAAAgJIAAgGIAAgHQgOABgGAGQgIAGgFAMIAAAuQAAAJgJAAQgIAAAAgJg");
	this.shape_182.setTransform(359.2,328.6);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AAcAtIgGgHIgPAHIgJACQgUAAgKgLQgJgLAAgXQAAgTAPgPQAPgQASAAQAHAAAKAFQAMAEAAAIQAAAAAAABQAAAAgBABQAAAAAAABQAAABgBAAIgBALIgBASQAAAKACAHIAFAPIACAEIABACQAAADgDADQgCADgDgBQgCAAgEgDgAgOgVQgJALAAANQAAAPAFAGQAFAIAKAAQAGAAAGgDIAJgHQgDgWAAgLIABgIIABgKIgFgCIgEAAQgMgBgKALg");
	this.shape_183.setTransform(350.1,328.7);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AghAoIAAg8IABgJIAAgIQAAgJAIAAQAIAAAAAOQAQgQAUAAQAHAAADAFQAEAGAAALIAAAGQgBALgIAAQgIAAAAgJIAAgGIAAgHQgOABgGAGQgIAGgFAMIAAAuQAAAJgJAAQgIAAAAgJg");
	this.shape_184.setTransform(389.1,301.5);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AgdAmQgNgMAAgTQAAgVALgPQAMgRATgBQAOAAAJAGQALAFAAANQAAAJgKAHQgEAEgOAEIggAQQAFAHAHAEQAIADAIAAQAGABAIgCQAKgDADgFQADgFAEAAQADAAACADQACACAAADQAAAJgPAHQgOAHgMAAQgSgBgNgJgAgRgWQgHAIgDAPIAbgLQAOgIAGgFQgHgIgNABQgKAAgHAIg");
	this.shape_185.setTransform(379.8,301.5);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AgeA7QgMgMAAgTQAAgYAMgMQANgOASAAQAKAAAFADIAJAGQABglABgNQACgHAGAAQAIAAAAAIQAAAMgDAqIgBAYQAAAdADAPIAAACQAAADgDADQgCACgDAAQgGAAgCgIQgHAFgHACQgGACgGABQgSgBgMgMgAgTABQgIAJAAARQAAALAIAJQAIAIALAAQAGAAAFgDIAJgHIADgDIAAgPIAAgKIAAgKQgDgHgGgCQgFgEgIAAQgNAAgHAHg");
	this.shape_186.setTransform(369.4,299.1);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AAVAqIgDgTIgBgTIABgGIAAgJQAAgSgHAAQgKAAgHALQgIAKgFAPIgBAIIAAAJIAAAIIABAIQAAAEgCADQgDACgEAAQgDAAgDgCQgCgDAAgEIgBgIIAAgIIABgYIABgYIAAgIIAAgJQAAgDACgDQADgCADAAQAIAAABALIAAAKQAPgUAOABQAOAAAFAMQAEAIAAAQIAAAJIAAAHIACASQACAMAAAHQAAAEgCADQgDABgEAAQgHABgBgJg");
	this.shape_187.setTransform(359.7,301.4);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AAUApQgLAGgNAAQgLAAgIgFQgIgGgCgKQgEgYAAgQQAAgMADgPQABgIAIAAQAEAAACADQADACAAAEIgCANIgBANIABAXQABALACAGIAFADIAGAAQAKAAANgDIAAgSIAAgPQAAgTACgOQABgIAHAAQAEAAACACQACADABADIgCAhIAAARIAAATIABAGIAAAGQAAAEgDACQgDADgDAAQgHAAgBgJg");
	this.shape_188.setTransform(350.2,301.5);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AgdAmQgNgMAAgTQAAgVALgPQAMgRATgBQAOAAAJAGQALAFAAANQAAAJgKAHQgEAEgOAEIggAQQAFAHAHAEQAIADAIABQAGAAAIgCQAKgEADgEQADgFAEAAQADAAACADQACABAAAEQAAAJgPAHQgOAGgMABQgSgBgNgJgAgRgWQgHAIgDAPIAbgLQAOgIAGgFQgHgIgNABQgKAAgHAIg");
	this.shape_189.setTransform(398.2,274.4);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AghAoIAAg8IABgJIAAgIQAAgJAIAAQAIAAAAAOQAQgQAUAAQAHAAADAFQAEAGAAALIAAAGQgBALgIAAQgIAAAAgJIAAgGIAAgHQgOABgGAGQgIAGgFAMIAAAuQAAAJgJAAQgIAAAAgJg");
	this.shape_190.setTransform(389.1,274.4);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AgZAlQgMgMAAgVQgBgRALgQQAMgSAUAAQARABAJAQQAIANgBARQAAASgKAOQgLAQgRAAQgOAAgLgLgAgOgRQgGALAAAKQAAANAHAHQAGAGAHAAQAIAAAGgHQAIgHAAgMQABghgTAAQgLAAgHAMg");
	this.shape_191.setTransform(379.7,274.5);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AgNBLQgCgDgBgDIABgCQABgMAAgNIAAgYIAAgXIgNAAQgKAAABgIQAAgJAPAAIAIgBIACgNQACgTAIgKQAGgLAUAAQAMAAAAAJQABAIgMAAQgVAAgDAeIAAAFIATgBQAOAAAAAJQABAGgIACIgHAAIgUABIgBASIABARIAAAQQAAAQgBAKQAAAHgHAAQgDAAgDgCg");
	this.shape_192.setTransform(370.4,272.4);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AgdAmQgNgMAAgTQAAgVALgPQAMgRATgBQAOAAAJAGQALAFAAANQAAAJgKAHQgEAEgOAEIggAQQAFAHAHAEQAIADAIABQAGAAAIgCQAKgEADgEQADgFAEAAQADAAACADQACABAAAEQAAAJgPAHQgOAGgMABQgSgBgNgJgAgRgWQgHAIgDAPIAbgLQAOgIAGgFQgHgIgNABQgKAAgHAIg");
	this.shape_193.setTransform(361.2,274.4);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AgaBCQgCADgFABQgDgBgCgBQgDgDAAgEIAAgHIABgGIgBgcIAAgaIAAgYIAAgZQAAgFADgEQACgGAFAAQAHAAAAAIIgBAEIAAADIAAATIgBAXQAIgFAHgCQAHgDAEgBQATAAAMAPQALAMAAAUQAAATgNAPQgNAOgRgBQgNAAgMgEgAgNgCIgNAGIAAAPIAAAOIAAAPIAMAEQAGACAHAAQAKAAAIgJQAJgJAAgNQAAgNgHgJQgHgIgMAAQgFAAgIAFg");
	this.shape_194.setTransform(351,272);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AgEA+QgCgDgBgDIAAgKIABgKIgCgxIgTgCQgJgBAAgIQABgEACgCQACgDAEAAIASACIAAgMIAAgLQAAgEACgCQADgDAEAAQAFAAACANIAAAIIAAAFIAAAGIAMgCIANABQAEACAAAGQAAAEgCADQgCACgEAAIgEAAIgFAAIgMABIACAyIAAAEIAAAFQAAATgJAAQgCAAgCgCg");
	this.shape_195.setTransform(404.7,245.8);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AATApQgLAGgMAAQgMAAgHgFQgIgGgCgKQgDgYAAgQQAAgMACgPQABgIAIAAQAEAAACADQACACABAEIgCANIgBANIABAXQABALACAGIAGADIAFAAQAKAAANgDIAAgSIAAgPQAAgTABgOQABgIAIAAQAEAAACACQACADABADIgCAhIAAARIAAATIABAGIAAAGQgBAEgCACQgCADgEAAQgHAAgCgJg");
	this.shape_196.setTransform(395.8,247.3);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AgZAlQgMgMAAgVQgBgRALgQQAMgSAUABQARAAAJAQQAIANgBARQAAASgKAOQgLAQgRAAQgOAAgLgLgAgOgRQgGAKAAALQAAANAHAHQAGAGAHAAQAIAAAGgHQAIgHAAgMQABghgTAAQgLAAgHAMg");
	this.shape_197.setTransform(386.3,247.4);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AAXBCIgDgUIgBgVIAAgHIAAgHQAAgPgIAAQgLAAgIAIQgEAGgIAOQAAAigCAGQgDAFgFAAQgEAAgDgCQgCgDAAgDIABgEIAAgNIABgNIAAg/IAAgOIAAgJIgBgIQAAgEACgCQADgDAEAAQAHAAABAIIABAQIAAATIgBATIAAAIQAIgKAIgFQAHgEAJAAQAOAAAGAJQADAHABAOIAAAQIADATIACASIAAACQAAAEgCACQgCADgEAAQgHAAgCgHg");
	this.shape_198.setTransform(376.6,244.9);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AgEA+QgDgDABgDIAAgKIAAgKIgCgxIgTgCQgIgBAAgIQAAgEACgCQADgDADAAIATACIAAgMIgBgLQAAgEADgCQACgDAEAAQAFAAACANIAAAIIAAAFIAAAGIANgCIALABQAGACAAAGQAAAEgCADQgDACgEAAIgFAAIgDAAIgMABIABAyIAAAEIAAAFQAAATgJAAQgBAAgDgCg");
	this.shape_199.setTransform(367,245.8);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AgHA/QgDgCABgEIgBgQIAAgQIABgUIABgTQgBgEADgCQADgDADAAQACAAADADQACACAAAEIgBATIgBAUIABAQIAAAQQAAAEgDACQgCADgCAAQgEAAgCgDgAgFgvQgDgDAAgFQAAgDADgEQAEgCACAAQAEAAAEACQACAEAAADQAAAFgCADQgEACgEAAQgCAAgEgCg");
	this.shape_200.setTransform(360.5,245.1);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AAFAZIgEgVIgBgRIgHAPIgNAkQgBADgDACQgCAFgGAAQgGABgHgbQgDgNgDgWIgCgNIgCgNQAAgEADgCQADgDADAAQAHAAACAIIABAMIACANIAFAmQAKgZAKgkQAEgJAFAAQAHAAACALIAGAfIAGAhIAGgYIAMguQABgFAGAAQAEAAACACQADADAAADIgBAEQgGAdgMAiQgCAIgGAIQgDAFgFAAQgJAAgGgYg");
	this.shape_201.setTransform(351.7,247.4);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AgeBEQgKgCgBgHQABgIAHAAIALABQAHACAJAAQAPgBAHgQQAEgKAAgXQgFAJgGAFQgHAEgHAAQgQAAgJgLQgKgLAAgPQAAgYAOgOQAOgPAWAAQAIAAAFACQAGACADAEQAKAAgBALIgCAQIgCARIgCAbQAAASgEALQgDAOgJAHQgLAIgRAAQgMAAgJgBgAgPgrQgIALAAAQQAAAMAFAFQAEAGAKAAQAHAAAIgIQAIgJABgJIAEgeQgDgDgEgBQgEgBgEAAQgPAAgJALg");
	this.shape_202.setTransform(393.1,222.5);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AAVArIgDgUIgBgTIABgGIAAgIQAAgUgHABQgKgBgHAMQgIAKgFAPIgBAJIAAAIIAAAIIABAIQAAAEgCACQgDACgEAAQgDAAgDgCQgCgCAAgEIgBgIIAAgIIABgYIABgYIAAgJIAAgIQAAgDACgDQADgDADAAQAIAAABAMIAAAKQAPgTAOAAQAOAAAFAMQAEAIAAARIAAAIIAAAHIACATQACALAAAHQAAAEgCACQgDADgEAAQgHgBgBgHg");
	this.shape_203.setTransform(384,220.1);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AgHA/QgDgCAAgEIAAgQIgBgQIABgUIABgTQAAgEADgCQACgDAEAAQACAAACADQACACAAAEIAAATIgBAUIAAAQIAAAQQABAEgDACQgCADgCAAQgEAAgCgDgAgEgvQgDgDAAgFQAAgEADgDQADgCACAAQAEAAAEACQADADAAAEQAAAFgDADQgEACgEAAQgCAAgDgCg");
	this.shape_204.setTransform(376.7,218);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AghAoIAAg8IABgJIAAgIQAAgJAIAAQAIAAAAAOQAQgQAUAAQAHAAADAFQAEAGAAALIAAAGQgBALgIAAQgIAAAAgJIAAgGIAAgHQgOABgGAGQgIAGgFAMIAAAuQAAAJgJAAQgIAAAAgJg");
	this.shape_205.setTransform(369.9,220.2);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AATApQgLAGgMAAQgMAAgHgFQgIgGgCgKQgDgYAAgQQAAgMACgPQABgIAIAAQAEAAACADQACACABAEIgCANIgBANIABAXQABALACAGIAGADIAFAAQAKAAANgDIAAgSIAAgPQAAgTABgOQABgIAIAAQAEAAACACQACADABADIgCAhIAAARIAAATIABAGIAAAGQgBAEgCACQgCADgEAAQgHAAgCgJg");
	this.shape_206.setTransform(360.7,220.2);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AgeA7QgMgMAAgTQAAgYAMgMQANgOASAAQAKAAAFADIAJAGQABglABgNQACgIAGAAQAIAAAAAJQAAAMgDAqIgBAXQAAAeADAPIAAACQAAADgDADQgCACgDAAQgGAAgCgIQgHAFgHACQgGACgGAAQgSAAgMgMgAgTABQgIAJAAARQAAAMAIAIQAIAIALAAQAGAAAFgDIAJgHIADgDIAAgPIAAgKIAAgLQgDgGgGgCQgFgEgIAAQgNAAgHAHg");
	this.shape_207.setTransform(350.7,217.8);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AgEA+QgDgDAAgDIAAgKIABgKIgCgxIgUgCQgHgBgBgIQABgEACgCQACgDAEAAIASACIAAgMIAAgLQAAgEACgCQADgDADAAQAHAAABANIAAAIIAAAFIAAAGIANgCIAMABQAEACAAAGQAAAEgCADQgCACgEAAIgFAAIgDAAIgNABIACAyIAAAEIAAAFQABATgKAAQgCAAgCgCg");
	this.shape_208.setTransform(400.8,191.6);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AgXAxQgOgGAAgJQAAgDADgDQADgCADAAQADAAAEAEQADACAHACIAKAAQAFAAAGgBQAIgDAAgFQAAgNgRgEIgHgBQgLgDgFgEQgIgDAAgJQAAgTASgHIAPgGIAQgGQAEgBAEgBQAEABACACQADACAAAEIABAIIABAIQAAADgCADQgDACgEABQgFgBgBgDQgCgCgBgIIgUAGQgMAHAAAIIAFABQASAEAKAGQAOAHAAASQAAAOgMAHQgKAHgOAAQgMgBgKgDg");
	this.shape_209.setTransform(392,192.7);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AAVArIgDgUIgBgTIABgHIAAgHQAAgUgHAAQgKAAgHAMQgIALgFAOIgBAJIAAAIIAAAIIABAIQAAAEgCACQgDACgEAAQgDAAgDgCQgCgCAAgEIgBgIIAAgIIABgYIABgYIAAgJIAAgIQAAgEACgCQADgCADgBQAIAAABAMIAAAKQAPgTAOgBQAOAAAFANQAEAIAAARIAAAIIAAAGIACAUQACALAAAHQAAAEgCACQgDACgEABQgHgBgBgHg");
	this.shape_210.setTransform(383.4,193);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AgHA/QgCgDAAgEIgBgPIAAgQIABgUIABgTQgBgEADgCQADgDADAAQACAAACADQADACAAAEIgBATIgBAUIABAQIAAAPQAAAEgDADQgCACgCAAQgEAAgCgCgAgFgvQgCgDAAgEQAAgEACgEQAEgCACAAQAEAAAEACQACAEAAAEQAAAEgCADQgEADgEAAQgCAAgEgDg");
	this.shape_211.setTransform(376.1,190.9);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AAcAsIgGgGIgPAHIgJACQgUAAgKgMQgJgKAAgXQAAgTAPgPQAPgPASAAQAHAAAKADQAMAFAAAHQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABIgBALIgBARQAAAMACAFIAFAQIACAEIABACQAAADgDADQgCADgDAAQgCgBgEgEgAgOgUQgJAKAAANQAAAOAFAIQAFAHAKAAQAGAAAGgDIAJgHQgDgWAAgLIABgIIABgJIgFgDIgEgBQgMAAgKAMg");
	this.shape_212.setTransform(368.8,193.2);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("AgdBEQgLgCAAgHQgBgIAIAAIALABQAHACAJAAQAPgBAGgQQAEgKABgXQgFAJgHAFQgGAEgGAAQgRAAgJgLQgKgLAAgPQAAgYANgOQAPgPAVAAQAJAAAGACQAFACADAEQAKAAAAALIgCAQIgDARIgCAbQAAASgDALQgFAOgIAHQgLAIgSAAQgMAAgHgBgAgPgrQgIALAAAQQAAAMAEAFQAFAGAKAAQAHAAAJgIQAHgJABgJIAEgeQgEgDgEgBQgDgBgEAAQgPAAgJALg");
	this.shape_213.setTransform(359.3,195.4);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AAcAsIgGgGIgPAHIgJACQgUAAgKgMQgJgKAAgXQAAgTAPgPQAPgPASAAQAHAAAKADQAMAFAAAHQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABIgBALIgBARQAAAMACAFIAFAQIACAEIABACQAAADgDADQgCADgDAAQgCgBgEgEgAgOgUQgJAKAAANQAAAOAFAIQAFAHAKAAQAGAAAGgDIAJgHQgDgWAAgLIABgIIABgJIgFgDIgEgBQgMAAgKAMg");
	this.shape_214.setTransform(350.1,193.2);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("AgEA+QgDgDAAgDIAAgKIABgKIgCgxIgUgCQgHgBgBgIQABgEACgCQACgDAEAAIASACIAAgMIAAgLQAAgEACgCQADgDADAAQAHAAABANIAAAIIAAAFIAAAGIANgCQAIAAAEABQAEACAAAGQAAAEgCADQgCACgEAAIgFAAIgDAAIgNABIACAyIAAAEIAAAFQABATgKAAQgCAAgCgCg");
	this.shape_215.setTransform(368.4,164.5);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("AATApQgLAGgMAAQgMAAgHgFQgJgGgBgKQgEgYABgQQgBgMADgPQABgIAIAAQADAAADADQACACAAAEIgBANIgBANIABAXQABALACAGIAGADIAFAAQAKAAANgDIAAgSIgBgPQAAgTACgOQABgIAIAAQADAAADACQADADgBADIgBAhIAAARIAAATIAAAGIAAAGQAAAEgCACQgDADgDAAQgHAAgCgJg");
	this.shape_216.setTransform(359.6,166);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("AgZAlQgMgMAAgVQgBgRALgQQAMgRAUAAQARAAAJAPQAIAOgBARQAAASgKAOQgLAPgRAAQgOAAgLgKgAgOgRQgGALAAAKQAAANAHAHQAGAGAHAAQAIAAAGgGQAIgIAAgNQABgfgTgBQgLAAgHAMg");
	this.shape_217.setTransform(350,166.1);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("AAVAqIgDgTIgBgTIABgHIAAgIQAAgSgHgBQgKAAgHAMQgIALgFAOIgBAIIAAAJIAAAIIABAIQAAAEgCADQgDABgEAAQgDAAgDgBQgCgDAAgEIgBgIIAAgIIABgYIABgYIAAgIIAAgJQAAgEACgCQADgCADgBQAIAAABAMIAAAKQAPgUAOAAQAOAAAFANQAEAIAAAQIAAAJIAAAGIACATQACAMAAAHQAAAEgCACQgDACgEAAQgHAAgBgIg");
	this.shape_218.setTransform(411.3,138.8);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AgdAlQgNgKAAgUQAAgVALgQQAMgRATAAQAOABAJAFQALAFAAANQAAAJgKAHQgEAEgOAEIggAQQAFAIAHADQAIAEAIgBQAGAAAIgCQAKgDADgEQADgFAEAAQADAAACACQACADAAADQAAAKgPAGQgOAHgMgBQgSABgNgLgAgRgWQgHAIgDAPIAbgLQAOgIAGgGQgHgHgNAAQgKAAgHAJg");
	this.shape_219.setTransform(401.6,138.9);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("AgdAlQgNgKAAgUQAAgVALgQQAMgRATAAQAOABAJAFQALAFAAANQAAAJgKAHQgEAEgOAEIggAQQAFAIAHADQAIAEAIgBQAGAAAIgCQAKgDADgEQADgFAEAAQADAAACACQACADAAADQAAAKgPAGQgOAHgMgBQgSABgNgLgAgRgWQgHAIgDAPIAbgLQAOgIAGgGQgHgHgNAAQgKAAgHAJg");
	this.shape_220.setTransform(391.8,138.9);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("AAFAZIgDgVIgCgRIgGAPIgOAkQgBADgCACQgDAFgGAAQgGABgHgbQgDgNgDgWIgCgNIgCgNQAAgEAEgCQACgDADAAQAHAAACAIIABAMIACANIAFAmQAKgZAKgkQAEgJAFAAQAHAAACALIAFAfIAHAhIAHgYIALguQABgFAGAAQAEAAACACQAEADAAADIgBAEQgIAdgKAiQgDAIgFAIQgEAFgFAAQgJAAgGgYg");
	this.shape_221.setTransform(380.7,139);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("AgEA+QgDgDABgDIAAgKIAAgKIgCgxIgTgCQgIgBAAgIQAAgEACgCQADgDADAAIATACIAAgMIgBgLQAAgEADgCQACgDAEAAQAFAAACANIAAAIIAAAFIAAAGIAMgCIAMABQAGACAAAGQAAAEgCADQgDACgEAAIgFAAIgEAAIgLABIABAyIAAAEIAAAFQAAATgJAAQgBAAgDgCg");
	this.shape_222.setTransform(370.2,137.4);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000000").s().p("AgdAlQgNgKAAgUQAAgVALgQQAMgRATAAQAOABAJAFQALAFAAANQAAAJgKAHQgEAEgOAEIggAQQAFAIAHADQAIAEAIgBQAGAAAIgCQAKgDADgEQADgFAEAAQADAAACACQACADAAADQAAAKgPAGQgOAHgMgBQgSABgNgLgAgRgWQgHAIgDAPIAbgLQAOgIAGgGQgHgHgNAAQgKAAgHAJg");
	this.shape_223.setTransform(361.2,138.9);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("AgaBBQgCAEgFAAQgDAAgCgCQgDgCAAgDIAAgHIABgHIgBgcIAAgaIAAgYIAAgZQAAgFADgEQACgGAFABQAHAAAAAHIgBAEIAAADIAAAUIgBAWQAIgFAHgDQAHgCAEAAQATAAAMAOQALAMAAATQAAAVgNANQgNAPgRAAQgNgBgMgFgAgNgDIgNAHIAAAQIAAANIAAAPIAMAFQAGABAHAAQAKAAAIgJQAJgJAAgOQAAgNgHgIQgHgHgMAAQgFAAgIADg");
	this.shape_224.setTransform(351,136.5);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AghAoIAAg8IABgJIAAgIQAAgJAIAAQAIAAAAAOQAQgQAUAAQAHAAADAFQAEAGAAALIAAAGQgBALgIAAQgIAAAAgJIAAgGIAAgHQgOABgGAGQgIAGgFAMIAAAuQAAAJgJAAQgIAAAAgJg");
	this.shape_225.setTransform(378,111.8);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("AgdAmQgNgMAAgTQAAgVALgQQAMgRATAAQAOABAJAFQALAGAAAMQAAAJgKAHQgEADgOAFIggAQQAFAIAHADQAIAEAIgBQAGAAAIgBQAKgDADgFQADgFAEAAQADAAACADQACACAAADQAAAKgPAGQgOAHgMgBQgSABgNgKgAgRgWQgHAIgDAPIAbgLQAOgIAGgFQgHgIgNAAQgKAAgHAJg");
	this.shape_226.setTransform(368.7,111.8);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("AgIAoIgOgjIgQgnIgBgEQAAgDADgDQADgDADAAQAGAAACAGIAWA7QAFgOAKgZIAHgTQADgGAFAAQAEAAADADQACACAAAEQAAADgOAiIgSAoQgBAIgGAAQgGAAgCgIg");
	this.shape_227.setTransform(359.4,111.7);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000000").s().p("AgZAlQgMgMAAgVQgBgSALgPQAMgRAUgBQARAAAJAQQAIANgBASQAAASgKAOQgLAPgRAAQgOAAgLgKgAgOgQQgGAKAAAKQAAANAHAHQAGAGAHAAQAIAAAGgHQAIgHAAgNQABgfgTgBQgLAAgHANg");
	this.shape_228.setTransform(350,111.9);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000000").s().p("AghAoIAAg8IABgJIAAgIQAAgJAIAAQAIAAAAAOQAQgQAUAAQAHAAADAFQAEAGAAALIAAAGQgBALgIAAQgIAAAAgJIAAgGIAAgHQgOABgGAGQgIAGgFAMIAAAuQAAAJgJAAQgIAAAAgJg");
	this.shape_229.setTransform(386.7,84.7);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("AgdAmQgNgMAAgTQAAgVALgQQAMgQATgBQAOAAAJAGQALAFAAANQAAAJgKAHQgEADgOAFIggAQQAFAIAHADQAIADAIAAQAGAAAIgBQAKgDADgFQADgFAEAAQADAAACADQACACAAADQAAAKgPAGQgOAHgMAAQgSAAgNgKgAgRgWQgHAIgDAPIAbgLQAOgIAGgFQgHgIgNAAQgKABgHAIg");
	this.shape_230.setTransform(377.4,84.7);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AgEA+QgCgDgBgDIAAgKIABgKIgCgxIgTgCQgJgBABgIQgBgEADgCQADgDADAAIATACIAAgMIgBgLQAAgEACgCQADgDAEAAQAFAAACANIAAAIIAAAFIAAAGIAMgCIAMABQAGACgBAGQAAAEgBADQgDACgEAAIgEAAIgFAAIgLABIABAyIAAAEIAAAFQAAATgJAAQgCAAgCgCg");
	this.shape_231.setTransform(368,83.2);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("AgNBLQgCgDAAgDIAAgCQABgMABgNIAAgYIAAgXIgPAAQgIAAgBgIQAAgJAQAAIAJgBIAAgNQADgTAHgKQAHgLAUAAQANAAAAAJQAAAIgMAAQgVAAgCAeIgBAFIAUgBQANAAAAAJQAAAGgGACIgHAAIgUABIgBASIAAARIABAQQAAAQgCAKQAAAHgGAAQgEAAgDgCg");
	this.shape_232.setTransform(359.1,82.7);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("AAcAtIgGgHIgPAHIgJACQgUAAgKgLQgJgLAAgXQAAgTAPgPQAPgQASAAQAHAAAKAFQAMAEAAAHQAAABAAABQAAAAgBABQAAAAAAABQAAABgBAAIgBALIgBASQAAAKACAHIAFAPIACAFIABABQAAADgDADQgCADgDgBQgCAAgEgDgAgOgVQgJALAAANQAAAPAFAGQAFAIAKAAQAGAAAGgDIAJgHQgDgWAAgLIABgIIABgKIgFgCIgEgBQgMAAgKALg");
	this.shape_233.setTransform(350.1,84.8);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("AAXBCIgDgUIgBgVIAAgHIAAgHQAAgPgJAAQgKAAgHAIQgFAGgIAOQAAAigDAGQgCAFgFAAQgEAAgCgCQgEgDAAgDIABgEIABgNIABgNIAAg/IABgOIgBgJIgBgIQAAgEADgCQACgDAEAAQAHAAABAIIABAQIAAATIgBATIAAAIQAIgKAIgFQAGgEAJAAQAPAAAFAJQAFAHAAAOIABAQIABATIADASIAAACQAAAEgCACQgDADgDAAQgGAAgDgHg");
	this.shape_234.setTransform(406.6,55.2);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AgeBEQgLgCABgHQAAgIAHAAIALABQAHACAJAAQAPgBAGgQQAFgKAAgXQgFAJgHAFQgGAEgGAAQgQAAgKgLQgKgLAAgPQAAgYANgOQAOgPAXAAQAIAAAFACQAGACADAEQAJAAAAALIgBAQIgDARIgCAbQgBASgCALQgEAOgJAHQgLAIgSAAQgLAAgJgBgAgPgrQgIALAAAQQAAAMAEAFQAGAGAJAAQAHAAAJgIQAHgJABgJIAEgeQgEgDgEgBQgDgBgEAAQgPAAgJALg");
	this.shape_235.setTransform(396.4,59.9);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AATApQgKAGgNAAQgMAAgHgFQgJgGgBgKQgEgYABgQQgBgMADgPQACgIAGAAQAEAAADADQADACgBAEIgBANIgBANIABAXQABALACAGIAGADIAFAAQAKAAANgDIAAgSIgBgPQAAgTACgOQACgIAHAAQADAAADACQACADAAADIgBAhIAAARIAAATIAAAGIAAAGQABAEgDACQgDADgDAAQgHAAgCgJg");
	this.shape_236.setTransform(387.1,57.6);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("AgZAlQgMgNAAgUQgBgSALgPQAMgSAUAAQARABAJAQQAIANgBARQAAASgKAOQgLAQgRAAQgOAAgLgLgAgOgQQgGAJAAALQAAANAHAHQAGAGAHAAQAIAAAGgHQAIgHAAgNQABgggTAAQgLAAgHANg");
	this.shape_237.setTransform(377.6,57.7);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("AghAoIAAg8IABgJIAAgIQAAgJAIAAQAIAAAAAOQAQgQAUAAQAHAAADAFQAEAGAAALIAAAGQgBALgIAAQgIAAAAgJIAAgGIAAgHQgOABgGAGQgIAGgFAMIAAAuQAAAJgJAAQgIAAAAgJg");
	this.shape_238.setTransform(368.9,57.6);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AAXBCIgDgUIgBgVIAAgHIAAgHQAAgPgIAAQgLAAgHAIQgFAGgIAOQAAAigCAGQgDAFgFAAQgEAAgDgCQgDgDAAgDIABgEIABgNIABgNIAAg/IAAgOIAAgJIgBgIQAAgEADgCQACgDAEAAQAHAAABAIIABAQIAAATIgBATIAAAIQAIgKAIgFQAGgEAKAAQAOAAAFAJQAEAHABAOIABAQIACATIACASIAAACQABAEgDACQgDADgDAAQgHAAgCgHg");
	this.shape_239.setTransform(359.3,55.2);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AgEA+QgCgDgBgDIAAgKIABgKIgCgxIgTgCQgJgBABgIQgBgEADgCQADgDADAAIATACIAAgMIgBgLQAAgEACgCQADgDAEAAQAFAAACANIAAAIIAAAFIAAAGIAMgCIANABQAEACAAAGQAAAEgBADQgDACgEAAIgEAAIgFAAIgLABIABAyIAAAEIAAAFQAAATgJAAQgCAAgCgCg");
	this.shape_240.setTransform(349.7,56.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135}]}).wait(136));

	// Layer 3
	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("#0000CC").ss(2,1,1).p("AEt7vIN3AAMAAAA3fIt3AAgAyj7vIN3AAMAAAA3fIt3AAg");
	this.shape_241.setTransform(297.1,210.4);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("rgba(0,153,204,0.729)").s().p("AEtbwMAAAg3fIN3AAMAAAA3fgAyjbwMAAAg3fIN3AAMAAAA3fg");
	this.shape_242.setTransform(297.1,210.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_242},{t:this.shape_241}]}).wait(136));

	// navigation
	this.instance = new lib.Copyright("synched",0);
	this.instance.setTransform(275,393.5);

	this.btn_goBack = new lib.goNext();
	this.btn_goBack.setTransform(57.6,352.3,1,1,0,0,180);
	new cjs.ButtonHelper(this.btn_goBack, 0, 1, 2, false, new lib.goNext(), 3);

	this.btn_goNext = new lib.goNext();
	this.btn_goNext.setTransform(494,352.3);
	new cjs.ButtonHelper(this.btn_goNext, 0, 1, 2, false, new lib.goNext(), 3);

	this.btn_menu = new lib.skiptomenu();
	this.btn_menu.setTransform(514.1,20.3);
	new cjs.ButtonHelper(this.btn_menu, 0, 1, 2, false, new lib.skiptomenu(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_menu},{t:this.btn_goNext},{t:this.btn_goBack},{t:this.instance}]}).wait(136));

	// Layer 9
	this.instance_1 = new lib.screen("synched",0);
	this.instance_1.setTransform(281.9,201,1,1,0,0,0,284.9,202);
	this.instance_1.alpha = 0.238;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(136));

	// animation
	this.instance_2 = new lib.animation_hotdog();
	this.instance_2.setTransform(196,216,1,1,0,0,0,-85.9,10.2);

	this.instance_3 = new lib.AllDone();
	this.instance_3.setTransform(275,200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},135).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(106.6,198,736.4,435.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;