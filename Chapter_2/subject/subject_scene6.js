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
		{src:"sounds/ball_kick.mp3", id:"ball_kick"},
		{src:"sounds/ball_passes.mp3", id:"ball_passes"},
		{src:"sounds/carmen_blocks.mp3", id:"carmen_blocks"},
		{src:"sounds/cowbell_3times.mp3", id:"cowbell_3times"},
		{src:"sounds/High_Screaming_Gtr.mp3", id:"High_Screaming_Gtr"},
		{src:"sounds/organ_f_chord.mp3", id:"organ_f_chord"},
		{src:"sounds/right_answer.mp3", id:"right_answer"},
		{src:"sounds/she.mp3", id:"she"},
		{src:"sounds/shekicks.mp3", id:"shekicks"},
		{src:"sounds/shekicksapass.mp3", id:"shekicksapass"},
		{src:"sounds/thesubjectsheisapronoun.mp3", id:"thesubjectsheisapronoun"},
		{src:"sounds/wrong_answer.mp3", id:"wrong_answer"}
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



(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		playSound("thesubjectsheisapronoun");
	}
	this.frame_75 = function() {
		playSound("she");
	}
	this.frame_168 = function() {
		playSound("shekicks");
	}
	this.frame_280 = function() {
		playSound("shekicksapass");
	}
	this.frame_324 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(71).call(this.frame_75).wait(93).call(this.frame_168).wait(112).call(this.frame_280).wait(44).call(this.frame_324).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.staticperiod = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgLAKQgFgFAAgFQAAgEAFgEQAFgFAGAAQAHAAAFAEQAFAEAAAFQAAAFgFAFQgFAEgHAAQgGAAgFgEg");
	this.shape.setTransform(6.7,25.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13.8,34.7);


(lib.static_stace_quad = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("Ahdg/IAAAAQADgCADgCQAhgUAlgUQASgMAVgKQAHgEAIgEQALgFALgFQArgVAmgUQAqgWAkgcQAkgbDJh7QCnC8jCEsQACAPgRADQgoAJguAPQgEABgEABQgIACgJADQgfAIghAGQgTADgSAEQgMAEgKACQgtAdgYAvQgHALgNAEQgQAEgPgrQgCgHgDgIQAAAAAAgBQgBgBAAAAQgQgugVgsQgVgxgfgtQgegogbgygAA1DTQgNAEgnARQidBEhaAvQhaAwg8gHQg8gGhIhRQgJgPAQgaQAPgbArgnQAqgoApgcQAigYAhgaQAnggAogcQAigXAmgTQAjgSAigT");
	this.shape.setTransform(53.2,38.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC97").s().p("AicDiQg8gHhIhQQgKgPAQgbQAQgaAqgoQArgmAogbQAigZAhgaQAngfAngdQAigYAmgUIBEgkQAcAyAdAqQAgAsAWAxQAVAqARAuIg1AWQieBDhYAwQhQApg4AAIgOAAg");
	this.shape_1.setTransform(29.3,55.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AieEhIgFgPIAAgBIgBgCQgQgtgVgsQgXgxgfgtQgegqgbgwIAAAAIAGgEIBGgpIApgWIAPgHIAWgLQArgUAmgVQAqgVAjgcQAjgbDJh7QCoC8jDErIgPATQgoAJguAOIgIADIgRAEQgfAJghAGIgjAHQgMAEgKABQgtAegYAuQgGAMgOAEIgDAAQgOAAgOgng");
	this.shape_2.setTransform(75.1,32.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,108.6,79.9);


(lib.static_stace_foreleg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AlHmWQAKAMAQgBQAcgBAdAAQAdAAAXAKQAIAAAKACQANADAQAJQApAWAnAZQAoAZAfAWQABAAABABQAnAZAqATQAAAAAAAAQACABADABQAZALCKBIQAsASB+BGQAdAHAcAHQAnAMAlASQANA+gaAtQgZAsgkAbQgBABgBAAQgXAKgRAXQgDAEgDAEQgYAogVAoQgXAqgZAXQgKAogvANQgeAJgHgKQgGgJAKgXAHMgSQAmANAOAbAC2FhQgsgLApgzQAZgBAWgKQAFgIAOgSQA0hAAJhOQAJhOAAgQIhgggQhEgWg8gTQgJgDgJgDQgBAAAAgBQjNhChogjQhZgdgNgHQgqgVgrgWQgngUgkgVQgqgZgQgrQgLgcAHgbADUF9QgoAAAKgcQAEgKAKgPAC2FhQADABACABADUF9QgBgLAHgRAD2GSQgfgBgDgU");
	this.shape.setTransform(56.5,40.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC97").s().p("AD7GRQgCgEAAgFQAAgJAGgOQgGAOAAAJQAAAFACAEIgFABQgfgBgDgUIAAgEQAAgKAGgOQgGAOAAAKIAAAEQgoAAAKgbQgsgMApgzQAZgBAWgKIATgZQA0hBAJhOQAJhOAAgQIhgggIiAgpIgSgGIgBgBQjNhChogjQhZgdgNgHIhVgrQgngUgkgVQgqgZgQgrQgLgcAHgbIDqAAQAKAMAQgBQAcgBAdAAQAdAAAXAKQAIAAAKACQANADAQAJQApAWAnAZIBHAvIACABQAnAZAqATIAAAAIAFACQAZALCKBIQAsASB+BGQAdAHAcAHQAnAMAlASQANA+gaAtQgZAsgkAbIgCABQgXAKgRAXIgGAIQgYAogVAoQgXAqgZAXQgKAogvANQgNAFgJAAQgLAAgEgGgAC2FiIAFABIgFgBQAEgLAKgPQgKAPgEALIAAAAgAIAAWQgOgbgmgNQAmANAOAbgADUF9IAAAAg");
	this.shape_1.setTransform(56.5,40.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,115.1,83.4);


(lib.static_stace_arm2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AkzpOQAhgIAlAKQAAAAABABQA8AbAyAWQC8BVAgALQAuAQAoAbQAmAYAnAaQAlAXAeAdQALALALALQAPAkAHAvQAGAtgBAwQgBAygIAvQgIArgOAtQgPAwgOAtQgNAngOArQgFAOgNAeQgFAKgGANQgGAMgHAPQgJAmASAlQAWAsgXArQgGALgMADQgiALgSAXQgYAeg6gEQgVgBgWAEQgdAFAAgUQgBgagLgMQgIgKgLgDQgPgFACgWQADgwAagYQAfgcAwgMQAegCAUhZQAUhZAKgqQALguAKguQAKgvABgvQABgvgEguQgDgxgMgpQgIgOgMgLQgggbgsgWQgpgUgtgPQgmgNithTAlynoQgGgbAJgTQAWgnAngQAD0FjQgBACAAABQABgDAAgCQAAABAAABgABMIdQAogSAtgBQAQAAALgO");
	this.shape.setTransform(37.4,59.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC97").s().p("AAcJDQgBgagLgMQgIgKgLgDQgPgFACgWQADgwAagYQAfgcAwgMQAegCAUhZIAeiDIAVhcQAKgvABgvQABgvgEguQgDgxgMgpQgIgOgMgLQgggbgsgWQgpgUgtgPQgmgNithTIgcgNQh1g4gSgLIgCgBIACAAQgGgbAJgTQAWgnAngQIgBgBQAhgIAlAKIABABIBuAxQC8BVAgALQAuAQAoAbIBNAyQAlAXAeAdIAWAWQAPAkAHAvQAGAtgBAwQgBAygIAvQgIArgOAtIgdBdIgbBSQgFAOgNAeIgLAXIgNAbIgBADIABgFIAAACIAAgCIgBAFIABgDQgJAmASAlQAWAsgXArQgGALgMADQgiALgSAXQgYAeg6gEQgVgBgWAEIgKABQgTAAAAgQgAChIKQgtABgoASQAogSAtgBQAQAAALgOQgLAOgQAAgAD0FhQALgggHAVIgEALIAAAAg");
	this.shape_1.setTransform(37.4,59.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,76.8,121);


(lib.static_stace_arm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("Arbh6QAAAAgBABQgnAkgXgeQAegTAbgeQAfgiAtgSQAogRAygBQAvAAAwAAQAxABAkAYQARAMASAMQATANATANQANAKANAIQALAHAKAHQAPAJANAHQApAYArAQQAiAMAfASQAKAFAKAHQApAYAmAVQACABACABQAmAWAmAQQAqASAtAGQAWAAAWgBQAQgCAPgCQAygIArgUQApgUAngaQAmgYAjgZQAkgaAxgGQAwgGAiAaQBcAtArBNQkeBsgCABQgoAVgsALQgtAMguAGQgwAIgvACQgLABgKAAQgoACgkABQgRgIgdgZQgigbghgXQgJgGgJgGQgWgQgZgPQgkgWgqgVQgsgVgmgaQgkgXglgWQgCgBgCgBQgCgCgDgCQgGgDgGgEQgggUgagUQgDgDgDgCQgcgWgkgXQgNACgNAEQggAKgfAFQgMABgNACQghAjgvAAQgkgBAbgXQAigeApgTQAFgWAMgQQgagCgbgCQgmAaggAZQgrAigigWgAmkiBQAHgBAHAAAn6jLQgPAJgKANApIi5QgzgDgkAUQgeASgeAc");
	this.shape.setTransform(79.5,23.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC97").s().p("ABeDKQgigbghgXIgSgMIgvgfQgkgWgqgVQgrgVgngaQgkgXglgWIgDgCIgGgEIgLgHQghgUgagUIgGgFQgcgWgkgXIAOgBIgOABQgNACgMAEQghAKgfAFIgYADQgiAjgvAAQgkgBAbgXQAjgeAogTQAFgWAMgQQAKgNAPgJQgPAJgKANIg1gEIgCAAIAAAAIgMAAIAAAAIAAAAQgmAAgcAOIgEACIgBAAIgBABQgfASgeAcQAegcAfgSIABgBIABAAIAEgCQAcgOAmAAIAAAAIAAAAIAMAAIAAAAIACAAQglAaghAZQgqAigjgWIgBABQgnAkgXgeQAegTAbgeQAfgiAtgSQAogRAygBIBfAAQAxABAkAYIAjAYIAmAaIAbASIAUAOIAcAQQApAYAsAQQAhAMAfASIAUAMIBPAtIAEACQAmAWAmAQQAqASAtAGQAWAAAWgBIAggEQAwgIAsgUQApgUAngaIBJgxQAjgaAygGQAwgGAiAaQBcAtArBNIkgBtQgoAVgsALQgtAMguAGQgwAIgvACIgVABIhMADQgRgIgdgZg");
	this.shape_1.setTransform(79.5,23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,161,49.2);


(lib.static_line = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#660099").ss(1,1,1).p("AM8AAI53AA");
	this.shape.setTransform(82.8,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,167.6,2);


(lib.static_bar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#660099").s().p("AgNAUIAAgnIAcAAIAAAng");
	this.shape.setTransform(0,0.1,1,0.637);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.2,3,2.6);


(lib.static_ball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("ADmgEQAAgBAAAAQgChOgwg7QgIgKgJgKQgPgOgQgMQgBAAgCgBIgagCIgTA4IgFAOIBXAKIACgDIgBADIgBAAIgvBAIAGgCIAhAMIAbAtgAC5AIIACADIgsAiIg5gMIgBAAIgkgoIAYggIAugIACiCkQAAgBABAAQBDhEAAhfQAAgBAAgDAgXiqIAEADIA0gcIAHgfQgUgDgUAAQgNAAgPACIgVAnIAaASIgHAkIg3AnIgBAFIAAABIgGA4IgBAKIA2AgIACgCIAyg4IAAgBIAFgrIgRgNIgfgcABUiHIhTAdACBi9QgogdgxgIAiUiuQAAAAAAAAQgHAGgHAGQgRASgNATIARAiIAogGIADgLIANgoIgdgaQA1guBDgHAhcghIgTAoIADAGIARAkIgoA3AjeA6IBHgvIArACAjAh9QglA3AABGQAAAeAHAcQAIAeAPAbIBCgIIACgDIBKASIACgFIAYgsIAAgBIAEABIgKhCAhWhaIgugSAg3B1IAEAGIgGgBAjHBzQAPAZAWAXQAfAfAlAQIBHgjIADABIA2AOIAgg0IgGgIIAKACIBcAgABVAhIABABIg4A7IAeAlAAeBdIgBgCIg4gSABCCKIAEgGAgzB7IAeAzIABACAheDSQAsAUAyAAQBeAABEhCAC0iOIgMAc");
	this.shape.setTransform(23.1,23.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgCDEIgBgCIgegzIgEgGIAYgsIAAgBIAEACIA4ARIACACIAdAlIAGAIIggA0gAjMBOIBHgvIArACIARAkIgoA3IgCADIhCAIQgPgbgIgegABoA1IgBAAIgkgqIAYgeIAugIIAGgCIAhANIAbAsIACADIgsAigAhLgDIABgJIAGg5IAAgBIABgFIA3gnIAfAcIAQAOIgEArIAAAAIgyA4IgCACgAithpQAMgTARgRIAOgNIAAAAIAeAaIgOAoIgDAMIgoAFgABhhlIAFgNIATg5IAbACIACACQAQALAOAPIASATIgMAdIgCACgAgFiWIgZgSIAVgnQAMgCAOAAQAVAAAUADIgHAfIg0Acg");
	this.shape_1.setTransform(21.3,21);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhdDRIBGgjIADABIA2AOIAgg0IAEgGIBbAgQhDBCheAAQgyAAgrgUgAiiCiQgWgXgPgZIBCgIIACgDIAog3IgRgkIgDgGIATgnIgTAnIADAGIgrgCIhHAvQgHgcAAgdQAAhHAmg3IAQAiIAogFIADgMIAuASIAAABIgGA5IgBAJIA2AgIACgCIAyg4IAAAAIAEgrIgQgOIBTgcIhTAcIgfgcIAHgkIAEADIA0gcIAHgfQAxAIApAdIgbgCIgTA5IgFANIBXAKIABAAIABgCIAMgdQAwA7ACBOIAAABIgtAMIAtgMIAAAFQAABehEBEIgBABIhbggIgKgCIgdglIA3g7IAAgBIA5AMIAsgiIgCgDIgbgsIghgNIgGACIAvhAIgvBAIguAIIgYAgIAkAoIABABIg3A7IgCgCIg4gRIgKhDIAKBDIgEgCIAAABIgYAsIgCAFIAGABIAeAzIgCABIhGAjQgmgQgfgfgAg5B5IhKgSgABWAhgAhWhbIgugSIAOgoIgegaQA1gtBEgIIgVAnIAZASIgHAkIg3AnIgBAFg");
	this.shape_2.setTransform(23.1,23.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,48.1,48.1);


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


(lib.Background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6600CC").ss(3,1,1).p("EglvgWPMBLfAAAMAAAAsfMhLfAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FEFE78","#FEB367"],[0,1],-0.2,199.3,549.7,199.3).s().p("EgluAWPMAAAgsdMBLdAAAMAAAAsdg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-243.1,-143.9,486.2,287.8);


(lib.Wordswho = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,flash:1});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_5 = function() {
		/* gotoAndPlay("flash");*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("AgIBHQgFgEAAgGIABgEIAAgEIAAgOIgBgOQAAgNgCgUIgDgjIgFAAQgWAAgMgEQgLgCAAgKQAAgFADgEQAEgFAHAAIAQACIAPABIASAAIAQAAIAWABIAWABQAGAAAEAEQAEADAAAGQAAAFgEAEQgEAEgGAAIgXgBIgYgBIACAoQADAXAAAPIAAAJIABAKQAAAIgDAGQgEAHgHAAQgEAAgEgDg");
	this.shape.setTransform(91.5,16.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("AgqA7QgPgQAAgUQAAgfAdgjQAYgcAXAAIAIAAIAGABQAFgEAGAAQAKAAACALQACAIAAALQAAAFgDAEQgEAGgHAAQgJAAgEgKQgCgEgCgBIgIgBQgMABgOASQgXAaAAAXQAAAKAIAIQAHAIAKAAQAHgBAKgFIAPgJQAIgFAEgBQAGAAAEAFQADAEAAAFQAAAGgFAEQgaAXgaAAQgWAAgPgQg");
	this.shape_1.setTransform(78.4,16.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066FF").s().p("AgsBKQgLgJAAggIACglIACgnIgBgLIgBgKQAAgOANAAQAFAAADACIAWgFIASgBQAYAAAPAGQAJAEAAAIQAAAGgDADQgEAFgGAAIgFgBQgPgEgPAAIgPABIgRAEIgBAmIAkgDIAYgDQAGABAEAEQADADAAAGQAAAJgMACIgXACIgoAEIAAAUQgBATADADQABABALAAIAQAAIASAAIAGgBIAGAAQAFAAAFADQAEADAAAGQAAAMgLACQgKABgcABQghAAgJgJg");
	this.shape_2.setTransform(66.2,16.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0066FF").s().p("AgpBDQgUgOAAgTQAAgPAOAAQAOAAgBAPQAAAGAKAGQAKAHAJAAQADAAACgNIAAgeQACgVgBghIAAgGIgBAAIgKAAIgMgBQgGAAgEgDQgEgEAAgGQAAgNASAAIAJAAIAJAAIARgBIATAAQAaAAAAAOQAAAFgDAEQgFAFgGAAIgFAAIgHgBIgHAAIAAAHQAABEgKAgQgHAXgRAAQgTAAgRgMg");
	this.shape_3.setTransform(53.1,17.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0066FF").s().p("AgvBKQgFgFAAgFIAAhmIAAgNIAAgNQACgKAQgBQAHgCARAAQARAAAQALQAUAPAAAUQAAAMgEAHQgDAHgIAFQAJAEAIAJQAIALAAAKQAAANgOALQgKAJgKADQgVAIgiAAQgGABgFgFgAgZA0QARgBARgFQASgGgBgFQAAgIgLgFQgIgFgHgBIgZgBgAgZgeIAAAUIANABQAcgCAAgUQAAgHgJgGQgHgHgKAAIgPAAg");
	this.shape_4.setTransform(40.4,16.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0066FF").s().p("AgmBCQgagUAAgvIABgOIAAgOIABgLIAAgLQAAgIADgHQADgJAHAAQAGAAAEADQAEAFAAAFIAAAQIAAARIgBAOIAAAOQAAAMADANQAFAPAHAHQAFADAPAAQAYABAJgtQAEgVAAgpQAAgGAEgFQAEgGAIgBQAHABADAEQADAEAAAEQAAAngEAVQgFAggRAVQgHALgKAFQgMAJgLAAQgZgBgMgJg");
	this.shape_5.setTransform(26.2,17.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0066FF").s().p("Ag0A/QgLgJAAgMQAAgGADgEQAEgEAGAAQAJAAAFAJQAFAMATAAQAQAAAPgIQAQgHABgJQAAgMgKgEQgIgDgTgBQgSAAgNgFQgSgHAAgPQABgTATgQQAVgQAWAAQAKAAANAEQASAGAAAHQAAAFgDAEQgFAEgGAAIgNgCIgOgCQgNABgJAGQgMAGAAAHQAAADAEADQAEACAGABIAYACQAVABANALQAOAJgBAVQABAZgdANQgWAKgaAAQgZAAgPgLg");
	this.shape_6.setTransform(12.1,17.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.1,0,97.4,31.9);


(lib.WordsTowhat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,"flash":1});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_5 = function() {
		/* gotoAndPlay("flash");*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AgIBHQgFgEAAgGIABgEIAAgEIAAgOIgBgOQAAgNgCgUIgDgjIgFAAQgWAAgMgEQgLgCAAgKQAAgFADgEQAEgFAHAAIAQACIAPABIASAAIAQAAIAWABIAWABQAGAAAEAEQAEADAAAGQAAAFgEAEQgEAEgGAAIgXgBIgYgBIACAoQADAXAAAPIAAAJIABAKQAAAIgDAGQgEAHgHAAQgEAAgEgDg");
	this.shape.setTransform(115.1,16.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009900").s().p("AhDBLQgEgEAAgFIABgNIABgLIAAgRIAAgSIAAgRIAAgSIgBgSIgCgRQAAgGAFgEQAFgFAGAAQAIAAAIANQArA/ArAmIAAgPIgBg/IgBgLIgBgLQAAgNAPAAQAPAAAAAxIAAAQIAAA8IgDAPQgBANgMAAQgIAAgIgIQglgigug7IAAAdIAAAXIABAYQAAAcgPAAQgHAAgEgEg");
	this.shape_1.setTransform(100,16.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009900").s().p("AgsBKQgLgJAAggIACglIACgnIgBgLIgBgKQAAgOANAAQAFAAADACIAWgFIASgBQAYAAAPAGQAJAEAAAIQAAAGgDADQgFAFgFAAIgFgBQgPgEgPAAIgPABIgRAEIgBAmIAkgDIAYgDQAGABAEAEQADADAAAGQAAAJgMACIgXACIgoAEIAAAUQAAATACADQABABALAAIAQAAIASAAIAHgBIAFAAQAGAAAEADQAEADAAAGQAAAMgLACQgKABgdABQgfAAgKgJg");
	this.shape_2.setTransform(85.9,16.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#009900").s().p("AA1A/IgGgXQgFgSgGgfIgOAoIgFASIgIARQgGAJgHAAQgJAAgEgLIgGgSQgIgZgGgZIgMAtIgEAWQgEAOgLAAQgGAAgEgFQgEgEABgFQgBgPAIgYIAKgjIAGgeQAEgVAFgHQAFgHAJAAQAIAAAEAJQAEAJAFAaQAEAaAJAbQAIgbAKgjIAGgXQAFgNALAAQAKAAAGAQQACAGADASQAFAoAJAdIAIAiQABAFgFAEQgEADgGAAQgLABgEgQg");
	this.shape_3.setTransform(70.7,17);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#009900").s().p("AgsBKQgLgJAAggIACglIACgnIgBgLIgBgKQAAgOANAAQAFAAADACIAWgFIASgBQAYAAAPAGQAJAEAAAIQAAAGgDADQgFAFgFAAIgFgBQgPgEgPAAIgPABIgRAEIgBAmIAkgDIAYgDQAGABAEAEQADADAAAGQAAAJgMACIgXACIgoAEIAAAUQAAATACADQABABALAAIAQAAIASAAIAGgBIAGAAQAGAAAEADQAEADAAAGQAAAMgLACQgKABgdABQgfAAgKgJg");
	this.shape_4.setTransform(55.7,16.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#009900").s().p("AgzA6IACgfQADgoAAg0QAAgGAEgDQADgEAGAAQAGAAAEAEQAEADAAAGQAAA0gDAqIgCAYQAYgBAigKIAEgBQAGAAAEAEQAEAEAAAFQAAAJgJAEQgMAFgYAEQgUADgOAAQgYAAAAgVg");
	this.shape_5.setTransform(44,17);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#009900").s().p("AgrBKQgDgEgBgFIAAgbIACgrIADgtQAAgZANABIAJgCIAPAAQARAAARAMQATAOAAAUQgBAZgTAMQgSAOgWAAIgJgBIAAAtQAAAFgDAEQgEADgFAAQgHAAgDgDgAgRglIgCAiIAHABQANgBAKgHQALgIAAgMQAAgIgKgHQgKgGgJAAIgGAAIgEAAIAAAOg");
	this.shape_6.setTransform(32.9,16.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#009900").s().p("AA0A/IgFgXQgFgSgFgfIgPAoIgGASIgHARQgFAJgHAAQgKAAgFgLIgFgSQgIgZgGgZIgMAtIgEAWQgEAOgKAAQgHAAgEgFQgDgEgBgFQAAgPAHgYIALgjIAGgeQAFgVAFgHQAFgHAHAAQAJAAAFAJQAEAJAEAaQAEAaAIAbQAKgbAJgjIAGgXQAFgNALAAQALAAAFAQQACAGACASQAGAoAJAdIAJAiQAAAFgFAEQgFADgFAAQgKABgGgQg");
	this.shape_7.setTransform(18.9,17);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#009900").s().p("AgzA8QgVgSAAgcQAAgfAUgcQAYgeAhAAQAiAAARAPQARAQAAAfQAAAggTAaQgWAgghAAQgdAAgVgRgAgegcQgPAUAAAWQAAAQANAKQAMAKATAAQATAAAOgVQAOgTAAgXQAAgUgKgIQgIgIgXAAQgUAAgPAVg");
	this.shape_8.setTransform(1.9,17);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#009900").s().p("AgqA7QgPgQAAgUQAAgfAdgjQAYgcAXAAIAIAAIAGABQAFgEAGAAQAKAAACALQACAIAAALQAAAFgDAEQgEAGgHAAQgJAAgEgKQgCgEgCgBIgIgBQgMABgOASQgXAaAAAXQAAAKAIAIQAHAIAKAAQAHgBAKgFIAPgJQAIgFAEgBQAGAAAEAFQADAEAAAFQAAAGgFAEQgaAXgaAAQgWAAgPgQg");
	this.shape_9.setTransform(-12.1,16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.5,0,144.6,31.9);


(lib.Wordsdoes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,"flash":1});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_5 = function() {
		/* gotoAndPlay("flash");*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgvBKQgFgFAAgFIAAhmIAAgNIAAgNQACgKAQgBQAHgCARAAQARAAAQALQAUAPAAAUQAAAMgEAHQgDAHgIAFQAJAEAIAJQAIALAAAKQAAANgOALQgKAJgKADQgVAIgiAAQgGABgFgFgAgZA0QARgBARgFQASgGgBgFQAAgIgLgFQgIgFgHgBIgZgBgAgZgeIAAAUIANABQAcgCAAgUQAAgHgJgGQgHgHgKAAIgPAAg");
	this.shape.setTransform(93.3,16.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("Ag0BIQgEgEAAgFIAAgWIABgWIAAhNQAAgGAEgFQAEgHAJABIAYACQAOABAIAFQApAVAAAfQAAANgJAIQgIAKgRAGQAZAPAOAPQADAEAAAFQAAAFgEAEQgFAEgFAAQgFAAgEgEQgfgcghgLIACAgQgBAFgEAEQgEAEgGAAQgFAAgEgEgAgdACIAEAAQAYAAAKgEQAEgCAFgEQAEgFAAgCQAAgLgOgKQgLgJgOgCIgMgBg");
	this.shape_1.setTransform(80.5,16.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgsBKQgLgJAAggIACglIACgnIgBgLIgBgKQAAgOANAAQAFAAADACIAWgFIASgBQAYAAAPAGQAJAEAAAIQAAAGgDADQgFAFgFAAIgFgBQgPgEgPAAIgPABIgRAEIgBAmIAkgDIAYgDQAGABAEAEQADADAAAGQAAAJgMACIgXACIgoAEIAAAUQAAATACADQABABALAAIAQAAIASAAIAHgBIAFAAQAGAAAEADQAEADAAAGQAAAMgLACQgKABgdABQgfAAgKgJg");
	this.shape_2.setTransform(67.9,16.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgUBFQgMgdgOgzIgJgaQgFgTAAgHQAAgGAFgEQADgDAGAAQAKAAADAKIAEARIAJAfIAPAwIAVg6IAIgXQAGgOAGgIQAFgEAGAAQAGAAAEADQAEAEAAAGQAAAEgCAEQgFAHgFALIgHATIgaBCQgFAMgGALQgFAJgGgBQgKABgEgKg");
	this.shape_3.setTransform(54.7,17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,147,31.9);


(lib.Wordsverb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,"flash":1});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_4 = function() {
		/* gotoAndPlay("flash");*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgbBKQgFgDAAgGQAAgHADgFQAFgIAJABQAGAAAEAEQACAFAAAGQAAAFgCAGQgFAGgHAAQgFAAgFgEgAgWAhQgDgEAAgGQAAgHAMgKIAVgOQAMgKAAgHQABgKgKgHQgJgJgHAAQgGAAgJAHQgJAFgEAAQgGABgEgFQgEgEAAgFQAAgKARgIQAOgHALAAQATAAAQAQQASAPAAAVQAAATgUAOIgRALIgNAMQgEAGgGAAQgFAAgFgEg");
	this.shape.setTransform(73.6,16.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgbAyQgOgFAAgLQAAgKALABQAFAAAIADQAJACAFAAQASAAgBgIQAAgFgNgGIgYgLQgOgJAAgOQAAgUAVgHQANgDAXAAQAJAAAEACQAHAEAAAIQAAASgJAAQgKAAgCgIIgIgBQgWAAAAAGQABAEAMAHQATAJAHAEQAOAJAAANQAAAQgQAJQgMAIgRAAQgNAAgLgFg");
	this.shape_1.setTransform(63,19.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AggAqQgRgNAAgWQABgXANgRQAOgTAWAAQARAAAMAGQAPAHAAAPQgBALgMAIIgWAJIgfAPQAGAFAGACQAHADAGAAQANAAAKgFQAHgFAFAAQAKAAAAAKQAAALgQAHQgOAGgPAAQgVAAgPgLgAgMgWQgHAGgEAMIAXgJQALgGAIgFQgHgEgLAAQgHAAgGAGg");
	this.shape_2.setTransform(52.5,19.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgfApQgOgOgBgXQAAgTAMgRQAPgUAZAAQATAAAMAQQAKAOAAAUQAAAVgMAQQgOASgVAAQgSAAgNgMgAgNgPQgFAJAAAKQAAAMAGAGQAFAFAHAAQAHAAAGgFQAHgHABgMQABgdgSAAQgKAAgHALg");
	this.shape_3.setTransform(41.7,19.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgeBOQgLgCgGgEQgGAAgEgEQgEgEAAgGIABgdIABgdIAAgfIgBggQAAgGAFgFQAGgFAFAAQAEAAANAGQAPAHADABQAaAJAUAUQAZAXAAAaQAAARgJAPQgIAPgPAKQgQAKgbAAQgHAAgKgCgAghAxQAEADAFABQAFABAGAAQATAAAJgGQAJgFAFgKQAFgJAAgLQAAgWgcgSQgIgGgfgMg");
	this.shape_4.setTransform(29.7,16.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(20.1,0,61.3,31.9);


(lib.Wordskicks = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,"flash":1});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_5 = function() {
		/* gotoAndPlay("flash");*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgXAtQgOgFAAgJQAAgJALAAQAEAAAHADQAIACAEAAQAQAAAAgHQAAgEgMgGQgQgIgFgCQgNgIAAgNQAAgRATgGQALgEAUAAQAJAAAEACQAGADAAAJQAAAPgIAAQgJAAgCgHIgHAAQgTAAAAAFQAAAEAKAGQASAIAGADQANAIAAAMQAAAPgOAIQgMAGgOAAQgMAAgJgEg");
	this.shape.setTransform(90.2,17.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AAUBBQgFgIgIgLIgMgSIgMAIIAAAYQgBAFgDADQgEADgFAAQgMAAAAgOIABgVIABgVIAAgbIAAgdIAAgJIAAgJQAAgFADgDQADgEAGAAQAFAAAEAEQADADAAAFIAAAJIABAJIgBAZIAAAXQAMgIAWgYQAEgEAFAAQAFAAAEAEQADADAAAFQAAAEgDAEQgKAJgPANIATAYQANARAAAGQAAAFgEAEQgDADgGAAQgGAAgEgHg");
	this.shape_1.setTransform(81.5,15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgaAmQgOgMAAgSQAAgQANgSQAOgWAQAAQAKAAAMAFQAOAGAAAIQAAAEgCADQgEAEgFAAQgDAAgGgEQgFgEgLAAQgFAAgHANQgIANAAAIQAAAIAHAGQAGAFAIAAQAHAAAIgFQAIgEACAAQAFAAAEADQADAEAAAEQAAAHgPAHQgNAGgJAAQgRAAgNgLg");
	this.shape_2.setTransform(71.5,17.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgJA/QgEgDAAgFIgBgQIAAgQIABgUIABgSQAAgFAEgDQADgDAFAAQAEAAADADQADADAAAFIgBASIAAAUIAAAQIAAAQQAAAFgDADQgEADgDABQgFgBgDgDgAgHgsQgEgDAAgGQAAgFAEgEQAFgEADABQAFgBAFAEQAEAEAAAFQAAAGgEADQgFAEgFABQgDgBgFgEg");
	this.shape_3.setTransform(64.7,15.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AAUBBQgFgIgIgLIgMgSIgMAIIgBAYQABAFgEADQgDADgGAAQgMAAAAgOIABgVIABgVIAAgbIABgdIgBgJIAAgJQAAgFADgDQADgEAGAAQAFAAADAEQAEADAAAFIAAAJIABAJIgBAZIAAAXQAMgIAWgYQAEgEAFAAQAFAAAEAEQADADABAFQgBAEgDAEQgKAJgOANIASAYQANARAAAGQAAAFgEAEQgEADgEAAQgIAAgDgHg");
	this.shape_4.setTransform(57.5,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,147,29.1);


(lib.Wordspass = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,"flash":1});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_5 = function() {
		/* gotoAndPlay("flash");*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AgXAtQgOgFAAgJQAAgJALAAQAEAAAHADQAIACAEAAQAQAAAAgHQAAgEgMgGQgQgIgFgCQgNgIAAgNQAAgRATgGQALgEAUAAQAJAAAEACQAGADAAAJQAAAPgIAAQgJAAgCgHIgHAAQgTAAAAAFQAAAEAKAGQASAIAGADQANAIAAAMQAAAPgOAIQgMAGgOAAQgMAAgJgEg");
	this.shape.setTransform(87.6,12.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009900").s().p("AgXAtQgOgFAAgJQAAgJALAAQAEAAAHADQAIACAEAAQAQAAAAgHQAAgEgMgGQgQgIgFgCQgNgIAAgNQAAgRATgGQALgEAUAAQAJAAAEACQAGADAAAJQAAAPgIAAQgJAAgCgHIgHAAQgTAAAAAFQAAAEAKAGQASAIAGADQANAIAAAMQAAAPgOAIQgMAGgOAAQgMAAgJgEg");
	this.shape_1.setTransform(78.8,12.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009900").s().p("AAVAoIgPAGQgGACgCAAQgVAAgLgLQgKgMAAgXQAAgTAPgOQAQgQAUAAQAIAAALAFQANAGAAAHQAAADgCADIgBAJIgBALQAAAPADAIIAEAJIADAIQAAAFgDADQgEADgEAAQgEAAgJgIgAgLgQQgJAJAAAKQAAAMAEAGQAEAGAJAAQADAAAFgCQAFgBAEgEQgCgUAAgKIAAgGIABgIIgDgBIgCgBQgKAAgJAKg");
	this.shape_2.setTransform(69.6,12.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#009900").s().p("AgkBGQgDgDAAgFIAAghIAAghIgBghIgBgRQAAgHADgFQAEgGAGAAQAGAAACADQAEADAAAFIAAABIAMgFQAEgCAFAAQAVAAAJARQAHANAAAVQAAARgLANQgMANgTAAIgOgBIAAAkQgBAFgDADQgDADgGAAQgFAAgEgDgAgEgpQgFADgGAFIABAiQAIADAGAAQAIAAAFgEQAFgGAAgKIgBgRQgDgKgJAAQgFAAgEACg");
	this.shape_3.setTransform(59.9,14.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-5.2,147,29.1);


(lib.Wordscomplement = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,"flash":1});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_6 = function() {
		/* gotoAndPlay("flash");*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AgcBKQgEgDAAgGQAAgHADgFQAGgIAIABQAGAAAEAEQACAFAAAGQAAAFgCAGQgFAGgHAAQgFAAgGgEgAgWAhQgDgEAAgGQAAgHAMgKIAVgOQAMgKAAgHQABgKgKgHQgIgJgIAAQgGAAgJAHQgJAFgEAAQgGABgEgFQgEgEAAgFQAAgKARgIQAOgHALAAQASAAARAQQASAPAAAVQAAATgUAOIgRALIgNAMQgEAGgGAAQgGAAgEgEg");
	this.shape.setTransform(77.1,16.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009900").s().p("AgIBEQgEgEAAgFIABgLIAAgLIgCgwIgSgCQgMgBgBgMQABgFADgEQAEgDAGAAIARABIgBgKIgBgKQABgFAEgFQADgDAGAAQANAAAAAZIAAAIIAJgBQAMAAADABQAJACgBAKQAAAFgDAEQgEAEgGAAIgFAAIgFgBIgJACIACAxIAAAFIAAAFQAAAXgOAAQgDAAgFgDg");
	this.shape_1.setTransform(66.8,17.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009900").s().p("AAXAsQgJAFgHACQgGACgEAAQgXAAgLgMQgMgNgBgZQAAgWASgQQARgRAXAAQAIAAANAFQAPAGAAAJQAAADgCADIgCAJIgBAOQAAARADAIIAEAKIAFAJQgBAFgEAEQgDADgGAAQgFAAgJgJgAgNgSQgJAKgBAMQABANAEAGQAFAHAJAAQAFAAAFgCQAFgCAFgEQgDgWAAgLIAAgHIACgJIgEgBIgCgBQgLAAgLALg");
	this.shape_2.setTransform(56.6,19.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#009900").s().p("AAWBHQgCgIgCgOIgCgXIABgHIAAgIIAAgIQgBgDgFAAQgKAAgHAIQgFAFgIAOQAAAjgDAHQgEAIgIAAQgFAAgFgEQgEgDAAgGIABgFIABgaIAAg/IABgEIAAgPIgBgJIgBgJQAAgGAEgDQAEgEAGAAQAKAAADALQACAGAAAMIgBATIAAATQAHgHAIgDQAGgEAJAAQARAAAHAKQAGAHABAMIABAZIACATIADATIABADQAAAGgEADQgEAEgGAAQgKAAgDgKg");
	this.shape_3.setTransform(45.4,16.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#009900").s().p("AATBMQgFgEgBgGQgEgLgBgHIgKg9QgHASgHAPQgKAYgEANIAAAFQAAAGgEAEQgFADgGAAQgHAAgFgEQgFgEAAgHIgDgLIgLguQgGgVgPgqIgBgFQAAgGAEgEQAFgDAFAAQAHAAAFAGQACAEADAJQAKAbAMAzQAIgTAIgYQAGgVAFgJQAJgVAJAAQAJAAAEAKQACAFADANIACAUQACARAKAqQALgYASgsIAEgSQADgKAFgHQAEgHAIAAQAGAAAEAEQAEAEAAAFIgEALIgDAKIgGARIgSAnIgSAqIgHARQgFAIgJAAQgFAAgFgDg");
	this.shape_4.setTransform(29.1,17.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},3).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16.6,0,68.3,31.9);


(lib.Wordsa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,"flash":1});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_5 = function() {
		/* gotoAndPlay("flash");*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AAVAoIgPAGQgGACgCAAQgVAAgLgLQgKgMAAgWQAAgUAPgOQAQgQAUAAQAIAAALAFQANAGAAAHQAAADgCADIgBAJIgBAMQAAAOADAIIAEAJIADAIQAAAFgDADQgEADgEAAQgEAAgJgIgAgLgRQgJAKAAALQAAALAEAGQAEAGAJAAQADAAAFgCQAFgCAEgDQgCgUAAgKIAAgGIABgIIgDgCIgCAAQgKAAgJAJg");
	this.shape.setTransform(73.6,17.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:true},2).wait(1).to({_off:false},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,147,29.1);


(lib.Wordssubject = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,"flash":1});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_6 = function() {
		/* gotoAndPlay("flash");*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("AgbBKQgFgEAAgFQAAgHAEgFQAFgIAHAAQAHAAADAGQAEADAAAHQAAAFgEAGQgEAGgHAAQgGAAgEgEgAgVAhQgFgEAAgFQAAgJANgJIAVgOQAMgKAAgIQAAgJgJgIQgIgHgJgBQgFAAgJAHQgJAFgEABQgGAAgEgFQgEgEAAgGQAAgJASgJQAOgGAJAAQATAAASAQQARAPAAAUQAAAUgUAOIgRALIgMANQgFAFgFAAQgHAAgDgEg");
	this.shape.setTransform(91.5,46.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("AgHBEQgFgEAAgFIAAgLIABgLIgCgwIgTgBQgLgCAAgMQgBgFAEgEQAEgDAFAAIASABIgBgKIAAgKQAAgFADgEQAEgEAGAAQAMAAAAAYIAAAJIAKgBQALgBAFACQAHADABAJQAAAGgFADQgDAEgGAAIgFAAIgFAAIgJABIABAxIABAEIAAAHQAAAWgOAAQgDAAgEgDg");
	this.shape_1.setTransform(81.2,47.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066FF").s().p("AAXAsQgJAFgHACQgHACgCAAQgYAAgMgMQgLgNAAgZQAAgWARgQQARgRAWAAQAKAAAMAFQAOAGAAAJQAAADgBADIgCAJIAAAOQgBARADAIIAFAKIADAJQAAAFgDAEQgFADgFAAQgEAAgKgJgAgMgSQgKAKAAAMQgBANAFAGQAFAHAKAAQADAAAGgCQAFgCAFgEQgDgWAAgLIABgHIABgJIgDgBIgEgBQgKAAgKALg");
	this.shape_2.setTransform(71,49.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0066FF").s().p("AAWBHQgCgIgCgOIgCgXIABgHIAAgIIAAgIQgBgDgFAAQgKAAgHAIQgFAFgIAOQAAAjgDAHQgEAIgIAAQgFAAgFgEQgEgDAAgGIABgFIABgaIAAg/IABgEIAAgPIgBgJIgBgJQAAgGAEgDQAEgEAGAAQAKAAADALQACAGAAAMIgBATIAAATQAHgHAIgDQAGgEAJAAQARAAAHAKQAGAHABAMIABAZIACATIADATIABADQAAAGgEADQgEAEgGAAQgKAAgDgKg");
	this.shape_3.setTransform(59.7,46.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0066FF").s().p("AATBMQgFgEAAgGQgFgLgBgHIgKg9QgHASgHAPQgLAYgDANIABAFQAAAGgGAEQgEADgGAAQgHAAgFgEQgFgEAAgHIgDgLIgKguQgHgVgPgqIgBgFQAAgGAFgEQAEgDAFAAQAHAAAFAGQACAEAEAJQAJAbAMAzQAIgTAIgYQAHgVADgJQAKgVAJAAQAJAAAFAKQACAFABANIADAUQACARALAqQAKgYARgsIAGgSQACgKAEgHQAFgHAIAAQAGAAAEAEQAEAEAAAFIgDALIgFAKIgFARIgRAnIgSAqIgIARQgFAIgJAAQgFAAgFgDg");
	this.shape_4.setTransform(43.4,47);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0066FF").s().p("AglAyQgEgDAAgGIAAg+IABgJIAAgJQAAgFAEgEQACgDAHAAQAKAAACALQAQgNAVAAQATAAABAaIAAAGQgCAPgMAAQgMAAAAgMIgBgKQgUADgKATIAAAvQAAAGgDAEQgEADgGAAQgGAAgDgEg");
	this.shape_5.setTransform(19.7,49.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0066FF").s().p("AgfApQgOgOgBgXQAAgTAMgRQAPgUAZAAQATAAAMAQQAKAOAAAUQAAAVgMAQQgOASgVAAQgSAAgNgMgAgNgPQgFAJAAAKQAAAMAGAGQAFAFAHAAQAHAAAGgFQAHgHABgMQABgdgSAAQgKAAgHALg");
	this.shape_6.setTransform(9.4,49.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0066FF").s().p("AgfApQgOgOgBgXQAAgTAMgRQAPgUAZAAQATAAAMAQQAKAOAAAUQAAAVgMAQQgOASgVAAQgSAAgNgMgAgNgPQgFAJAAAKQAAAMAGAGQAFAFAHAAQAHAAAGgFQAHgHABgMQABgdgSAAQgKAAgHALg");
	this.shape_7.setTransform(66.8,19.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0066FF").s().p("AAWBHQgCgIgCgOIgCgXIABgHIAAgIIAAgIQgBgDgFAAQgKAAgHAIQgFAFgIAOQAAAjgDAHQgEAIgIAAQgFAAgFgEQgEgDAAgGIABgFIABgaIAAg/IABgEIAAgPIgBgJIgBgJQAAgGAEgDQAEgEAGAAQAKAAADALQACAGAAAMIgBATIAAATQAHgHAIgDQAGgEAJAAQARAAAHAKQAGAHABAMIABAZIACATIADATIABADQAAAGgEADQgEAEgGAAQgKAAgDgKg");
	this.shape_8.setTransform(56.1,16.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0066FF").s().p("AATBMQgFgEgBgGQgEgLgBgHIgKg9QgHASgHAPQgLAYgDANIAAAFQAAAGgEAEQgGADgFAAQgHAAgFgEQgFgEAAgHIgDgLIgLguQgGgVgPgqIgBgFQAAgGAEgEQAEgDAGAAQAIAAAEAGQACAEADAJQAKAbAMAzQAIgTAIgYQAGgVAEgJQAKgVAJAAQAJAAAEAKQADAFACANIACAUQACARAKAqQALgYARgsIAFgSQADgKAFgHQAEgHAIAAQAGAAAEAEQAEAEAAAFIgEALIgDAKIgGARIgSAnIgSAqIgHARQgEAIgKAAQgFAAgFgDg");
	this.shape_9.setTransform(39.8,17.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},3).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.2,0,97,61.8);


(lib.Wordsshe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,"flash":1});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_5 = function() {
		/* gotoAndPlay("flash");*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("AgcAlQgPgLgBgTQABgVAMgQQANgQATAAQAQAAAKAEQANAHAAAOQAAAKgKAHQgGADgPAFIgbANQAEAFAGACQAGACAGAAQALAAAJgFQAHgEAEAAQAKAAgBAJQAAAKgOAHQgNAEgNAAQgTABgNgLgAgKgTQgGAFgEAKIAUgIIARgKQgGgDgKAAQgGAAgFAGg");
	this.shape.setTransform(84.8,17.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("AAUBAQgCgHgCgNIgBgVIAAgGIAAgHIAAgHQgBgDgEAAQgJAAgGAHQgEAEgHANQAAAggEAGQgDAHgHAAQgFAAgEgDQgEgDAAgFIABgFQABgCAAgVIAAg5IAAgDIABgOIgBgIIgBgIQAAgFAEgDQADgEAGAAQAIAAADAKQACAFAAALIgBASIAAARQAGgGAIgEQAFgDAIAAQAPAAAHAJQAFAGABALIABAWIACARIADARIAAADQAAAFgEAEQgDADgFAAQgJAAgDgJg");
	this.shape_1.setTransform(74.9,15.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066FF").s().p("AguA5QgLgJAAgKQAAgGADgEQAEgDAGAAQAHAAAFAIQAEALASAAQANAAAOgHQAPgHAAgIQAAgLgJgDQgGgDgSAAQgQgBgMgEQgPgGgBgOQABgRASgOQASgPAUAAQAIAAANAEQAQAFAAAHQAAAEgEAEQgDAEgGAAIgMgCIgMgCQgMAAgIAGQgLAFAAAGQAAAEADACQAEACAHABIATABQAUACALAJQANAJAAASQAAAXgaAMQgUAJgXAAQgWAAgNgKg");
	this.shape_2.setTransform(63.3,15.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,147,29.1);


(lib.anim_pencil = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{notinuse:0,inuse:1});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();
		*/
	}
	this.frame_1 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(2));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AP34HQgKgUguAKQAHAcAJAaQAVgXATgVgASq7QQhKApg8BqQgUAYgZAeAPxsfQBFhHBJhLAPxsfQBKgXBSgTQCdhwB1ioQhLAVgmgSQgPgHgPgIQjxh8hQjyAWfxhQgLgfA7g6QANgNCNiSQgGgohligQhlifjvgQAO/4RQiZCViDCOQgEA9AgBAQiyC8ieClQA+FWFHhgQB3h6CGiLAJClhQBUhXBehiAJClhQlgA4AwmFQweRRhIAyQj+Cui9DaQgRBDAAA9IAAAAQAAABAAAAQgCDZDICQQBLA3BgghQCfkLDDjzQANgQATgWQgni2Anh2QAriGCRgyQBHgYBOgUQgMBeA+AWQBIhKBUhVAFvsQQgvAyguAwAkqIiQhDg6gig7AkqIiQA7g9BFhIAmAJ8QAogpAugxAmAJ8Qh7gggyhPAotM5QA7hEByh5A0gPdQgBABAAAAQAAAAABgBA0hPeQgsAfgeAgQhCBHAFBKQAGBRBfBUQANANAPAMQBfBLBfAgQAAAAABAAQBhAXBYiRA2oSuQh8EQgnC3QgMA6gRAiQABAAAAAAQGVicBpheAjcEpQBigZBsgSQCliqGrm1AZp1ZQl6hOhFkp");
	this.shape.setTransform(164.1,174.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFCC").s().p("A5LZ1QAni3B8kQQAGBRBfBUQhZEVjLBpIgBAAQARgiAMg6gASq7QQDvAQBlCfQBlCgAGAoQl6hOhFkpg");
	this.shape_1.setTransform(164.1,174.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEFE49").s().p("AAki9IAcAYQBfBLBfAhQhoBcmTCbQDKhpBXkSg");
	this.shape_2.setTransform(25.6,330);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AsORzIAAgBQhggghehLIgdgYQhehVgGhRQgGhKBChHQAeggAsgfIABAAQgCDZDICQQBMA3BgghQhNB9hTAAQgNAAgNgCgAjTCoQAzBPB6AhQhyB4g7BEQgmi2Amh2gAgmEYQh6ghgzhPQAsiGCRgvQBFgZBOgUQBhgZBtgSIicCeQg0gTAAhCQgBgOADgQQgDAQABAOQAABCA0ATIiBCEQhAg6gig7QAiA7BAA6IhUBbIAAAAgAjTCoIAAAAgAJswTIBehhQA+FVFHhfIizC4QgsAHgmAAQkHAAAplUg");
	this.shape_3.setTransform(129.4,210.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEFD85").s().p("AARE1IgbgPQjxh9hQjvIAngtIAug1QA7hqBLgqQBFEqF3BMIiZCfQg7A6ALAfQgpALgeAAQgZAAgSgIg");
	this.shape_4.setTransform(294.9,31.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AyZWbQjIiQACjZIAAAAIAAgBQAAg9ARhDQC9jaD+iuQBIgxQexRQgwGEFgg4QmrG2ilCpQhsAThiAZQhOAUhHAYQiRAxgrCHQgnB1AnC3IggAlQjDDzifELQgkANghAAQg3AAgvgjgAEwq7IFQliQgghAAEg8QCDiPCZiVQAHAcAJAbQBQDxDxB9IAeAOQAmASBLgVQh1CpidBwQhSAThKAXICOiTIiOCTIj9EFQhHAVg7AAQjSAAgxkLg");
	this.shape_5.setTransform(170.4,166.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.1,1,1).p("AUu5oQhLAqg7BpQgUAZgZAdQgTAVgVAYQgJgbgHgcQAugKAKAUAR1q2QBFhHBJhMAR1q2QBJgXBTgTQCdhwB1ipART1yQBQDxDxB9QAOAHAPAHQAnASBLgVQgLgeA7g6QANgNCMiTARD2pQiaCViCCPQgEA8AgBAQiyC8ieCmQA+FVFHhfQB3h6CGiLAN4mxQheBhhUBXQlgA4AwmEQAtgwAwgyAgmIGQhFBHg7A+QgvAwgnAqQhyB4g7BFQgni3Amh1QAsiHCRgxQBHgYBOgUQgNBeA/AWgAimKLQhDg7gig7AmpOiQgTAVgNAQQjEDzieELQhgAhhMg3QjHiQACjZQAAAAAAAAQgBAAgBAAAj8LlQh7ghgzhOA0kUWQgGhJBDhHQAdggAsggQABAAABgBQAAg9ARhDQC9jaD9iuQBJgxQexRAycRFIAAABAsrXFQhZCRhhgWQAAAAAAAAQhEA9nbgeQgiADgfgEQgogFgjgQQg0gYgogxQCpgmBXgNQBWgNByiqQAEA6AwA6QgRBehwA1Qh/A7iggPAzwWKQAUAZAcAZQAOAMAPAMQBfBLBfAhALGj5QmrG2inCpQhUBWhGBKAhYGSQBggZBsgTAUu5oQDuARBmCfQBlCfAFAoQl5hNhFkqg");
	this.shape_6.setTransform(150.9,184.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEFE49").s().p("AjIBlQgiADgfgEQgogFgjgQQCgAPCAg7QBtgzARheQAUAZAcAZIAdAYQBfBJBfAhQguApjkAAQhvAAicgKg");
	this.shape_7.setTransform(16.9,337.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFCC").s().p("A6QZXQg0gYgngwQCognBXgNQBWgMByiqQAEA5AwA7QgRBehvA0QhmAvh5AAQggAAghgDgAUu5ZQDuAQBmCfQBlCfAGApQl6hOhFkpg");
	this.shape_8.setTransform(150.9,182.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AsORzIAAgBQhggghehLIgdgYQgcgZgUgZQgwg7gEg5QgGhKBChHQAeggAsgfIABAAQgCDZDICQQBMA3BgghQhNB9hTAAQgNAAgNgCgAjTCoQAsiGCRgvQBFgZBOgUQgDAQABAOQAABCA0ATQg0gTAAhCQgBgOADgQQBhgZBtgSIicCeIiBCEQhAg6gig7QAiA7BAA6IhUBbQh6ghgzhPQAzBPB6AhQhyB4g7BEQgmi2Amh2gAAuC9IAAAAgAJswTIBehhQA+FVFHhfIizC4QgsAHgmAAQkHAAAplUg");
	this.shape_9.setTransform(129.4,230.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5,p:{y:166.1}},{t:this.shape_4,p:{y:31.7}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5,p:{y:186.2}},{t:this.shape_4,p:{y:51.7}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,330.2,351.2);


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


(lib.anim_stace_kicksball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{start:1});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_7 = function() {
		playSound("ball_kick");
	}
	this.frame_15 = function() {
		/* gotoAndPlay("start");*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(8).call(this.frame_15).wait(1));

	// ball
	this.instance = new lib.static_ball("synched",0);
	this.instance.setTransform(-6.8,315.4,1,1,0,0,0,23.1,23.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).wait(2).to({x:-6.9,y:314.6},0).to({scaleX:9.33,scaleY:9.33,rotation:1800,guide:{path:[-7,314.5,-10.8,277.6,-28,243.1,-47,205.1,-63.7,159.1,-80.4,113.1,-92.1,69,-103.8,24.7,-144.3,-52,-184.7,-128.6,-248.3,-148.6,-311.9,-168.5,-359.9,-172.6,-408.1,-176.6,-471.4,-159.1,-534.7,-141.6,-574.8,-115.4,-614.8,-89.1,-647,-65.5,-679.1,-41.9,-699.7,-12.3,-705.4,-4.1,-710.2,8.6]}},8).wait(1));

	// hair
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AlpCxQgLAAgLgBQgxgCgogaQghgWgsgKQgvgKgvAAQgxgBglAXQgXAOgTASQAdg1BDgdQA+gcA/AdQAzAXBAAUQA2AQAxgaQAWgMAigSQAMgGALgPQAdgoAFgzQAFg7gDg9QgDg4AZgsQAZgrAogdQAmgcAzgHQASgCAUABQAfgNAygIQAwgIAtALQAvAKAiAdQAgAaAUAsQAUAqAHAwQAHAvAHAwQAGAwAIApQAJAuAPAsQAHAUAKAQQAPAVAWAOQAiAXA0AAQAmABAdgLQALgDAKgFQAngUAZgoQAXgkAHguQACgMgCgLQAGgjAgAoQAcAkABAxQAAAKgBAJQgDAngPAgQgFAJgFAKQgOARgPAOQgPAOgRAKQgmAYghAWQgnAagvADQgyADgvgJQgxgJgkgaQgpgeAAgmQgLgggLghQgNgmgOgvQgNgrgGgtQgGgxgIgsQgKgwgRgmQgQgkgZgtQgWgqgqgWQgrgWguAQQgwAUgoAaQgnAagVAlQgVAngBAxQgBAyADAwQAEAygTAlQgRAjgbAiQgeAlgtAJQgeAHgcANgALnDPQgJATgJASQgHAOgGAOQgTApgmAYQglAYgxAKQguAKgwACQgxACgugNQgtgOgmgbQgjgagUgpQgWgsgDgyQgEgtgHgvQgHgvABguQAAgwgCgvQAAgGAAgGQgBgNAAgNQgegqgagkQgaglgsgUQgngRghgNQgoAegfAdQggAegPAnQgLAdgGAhAiJAVQAXgMAXgTQAKgJAIgLQgRgIgLgPQgTgZgBgsQgHAAgIgBQgCALgBAMQgFAwACAxQABAMAEAMQgIAEgIADQAFAEAGAFQAQAOASANQAEADAEADQALAJACALQAFAeANAWAkVDCQgIgCgHgCQgigJgjgEAhsBAQgHAjgUAlQgXAsgpALQgnALgngIAiOAlQgNAtgVAfQgZAmglAYQgUANgTAG");
	this.shape.setTransform(139.3,38.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEFF97").s().p("AF8F0QgtgOgmgbQgjgagUgpQgWgsgDgyQgEgtgHgvQgHgvABguQAAgwgCgvIAAgMIgBgaIg4hOQgaglgsgUQgngRghgNQgoAegfAdQggAegPAnQgLAdgGAhIAPABIgBAJQAAARAFAPQAFAPALANIAKAKQAIAHAKAGQgRgIgLgPQALAPARAIQgIALgKAJQgXATgXAMQgEgMgBgMIAAgcQAAgjADgiIADgXIgDAXQgDAiAAAjIAAAcQABAMAEAMIgQAHIALAJIAiAbQgHAjgUAlQgXAsgpALQgnALgngIQATgGAUgNQAlgYAZgmQAVgfANgtQgNAtgVAfQgZAmglAYQgUANgTAGIgPgEQgigJgjgEQAcgNAegHQAtgJAeglQAbgiARgjQAQgfAAgoIgBgQQgCglAAgnIAAgWQABgxAVgnQAVglAngaQAogaAwgUIABgBIAAAAIAAAAIAAAAIABAAQASgGARAAIAAAAIABAAQAaAAAYAMIABABQAqAWAWAqQAZAtAQAkQARAmAKAwQAIAsAGAxQAGAtANArIAbBVIAWBBIAAABQAAAmApAdQAkAaAxAJIACABIAEAAQAgAFAhAAIAAAAIAAAAIAUAAIAGAAQAvgDAngaIBHguQARgKAPgOQAPgOAOgRQgOARgPAOQgPAOgRAKIhHAuQgnAagvADIgGAAIgUAAIAAAAIAAAAQghAAgggFIgEAAIgCgBQgxgJgkgaQgpgdAAgmIAAgBIgWhBIgbhVQgNgrgGgtQgGgxgIgsQgKgwgRgmQgQgkgZgtQgWgqgqgWIgBgBQgYgMgaAAIgBAAIAAAAQgRAAgSAGIgBAAIAAAAIAAAAIAAAAIgBABQgwAUgoAaQgnAagVAlQgVAngBAxIAAAWQAAAnACAlIABAQQAAAogQAfQgRAjgbAiQgeAlgtAJQgeAHgcANIgWgBQgxgCgogaQghgWgsgKQgvgKgvAAQgxgBglAXQgXAOgTASQAdg1BDgdQA+gcA/AdQAzAXBAAUQA2AQAxgaIA4geQAMgGALgPQAdgoAFgzQAFg7gDg9QgDg4AZgsQAZgrAogdQAmgcAzgHQASgCAUABQAfgNAygIQAwgIAtALQAvAKAiAdQAgAaAUAsQAUAqAHAwIAOBfQAGAwAIApQAJAuAPAsQAHAUAKAQQAPAVAWAOQAiAXA0AAQAmABAdgLQALgDAKgFQAngUAZgoQAXgkAHguQACgMgCgLQAGgjAgAoQAcAkABAxIgBATQgDAngPAgIgKATIgSAlIgNAcQgTApgmAYQglAYgxAKQguAKgwACIgNAAQgqAAgogLgAhJgeIAAAAg");
	this.shape_1.setTransform(139.3,38.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(15));

	// forward arm
	this.instance_1 = new lib.static_stace_arm2("synched",0);
	this.instance_1.setTransform(182.6,59.1,1,1,0,0,0,9.8,7.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:3.6},1).to({regY:7.8,rotation:30,y:59.2},7).to({regX:9.7,regY:7.7,scaleX:1,scaleY:1,rotation:9.3,x:182.5,y:59.1},7).wait(1));

	// body
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.1,1,1).p("AAhgaQArgMgOApAhBgHQArgHgRAs");
	this.shape_2.setTransform(134.1,30.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(0.1,1,1).p("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");
	this.shape_3.setTransform(166.9,182.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC97").s().p("AhRbMQgKAZgkgYQgOgKgFgJIgBgCQgCgDAAgEQAAgNAcgKQgcAKAAANQAAAEACADQgLgBgIgEQgQgJgHgIQgGgGAAgGQAAgKAUgIIACAAIgCAAQgUAIAAAKQAAAGAGAGIgHAFQghABgMgUQgHgKgCgJQgCgFAAgFQAAgWAngDQgnADAAAWQAAAFACAFQgRALgSgOQgQgNgEgKIgBgHQAAgQAegIQgeAIAAAQIABAHIgMAEQglgQgKguQgEgUAOgLQAkgcAxANQApAMAgAkQAkAAAggDQAwgFAtgTQAlgQAngcQAhgYAdghQgGgdgMgTQgLgTgKgZQgRgtgYgmIgthSQgXgogQguQgRgvgagnIg0hOQgZgngggiQghgjgWghQgLgSgRgWQgcgkgMguQgMgtgOgtQgOgugGgvQgFgvAGgqQAWgIAaAAQAuABAuACQAwACAtAHQAwAGApASIAbALQAKAngIAuQgJAugPAsQgMAkgHAjQAKArAkAaQAPALANANQAhAdAdAoQAaAkAWApQAXArAIAwQAIAsALAtQAMAvAMAtQgBAuANAtIAbBYQAPAtAUAsIAnBTQAUApgMAvQgMAyg2ACQgzABgrgQQgtgRgmAjQggAfgmAWQgSAKgPAAQgYAAgRgagADpYbQgDAJgNADQANgDADgJQAGgOAAgOQAAgegYgeQAYAeAAAeQAAAOgGAOgAjpLmQgSgNAAgRQAAgGADgGQgDAGAAAGQAAARASANgAhMLLIADgRIgDARgAj6aBIAAAAgAgDj5QgvgBgtgKQgsgJgogTQgngSgegZIgRgNQgXgTgXgUQAcgNArgyQAqgzAKggQAKggAFgiIAMhQQAJgwgJgpIAfAQQA4gRAwgGQAugGAQAGQAPAGBBgkQBAgkAwgQQAwgRAmgUQAbgPAcgJIAHAaIAAAAIAAAAIAAAAIAAAAIg4B4IhNB6QhEBrgdBLQgeBKAdBmQgWAVglAJQgmAJgsAAIgHAAgAFqvQQgtgHgvgBIhigCQgxgBgugDIhfgIIg7gHIAAAAIgHgBQAIgVAagQQgaAQgIAVIgbgEQgqgGgpAEQAUgTAXgPQAlgbASgaIAug/QAMg4hVgDQAmAAAdgUQAKgIAEgPQgEAPgKAIQgdAUgmAAIgDAAQgPAAgQgDQg3gMgngfQgRgNgLgTQAwgNA0gZQg0AZgwANQgNgXgFgdQgCgMgLgIIgIgGIgigbIgLgKIAQgGQAXgMAXgVQALgJAHgLQASgaACgjQAFgYgIgTQgGgPgPgMIAAgBQgEgDgFAAIAAAAIgBAAIgGABIAAABIAAAAIgBAAQgYAKgDAfQADgfAYgKIABAAIAAAAIAAgBIAGgBIABAAIAAAAQAFAAAEADIAAABQAPAMAGAPQgfAMgiAAIgPgBQAGghALgeQAPgmAggeQAfgeAogdQAogKAxACQAvABAjAcQAiAbAdAfQAcAdAPAtQAPAuAPApQAPAnAFAvQAGA1gTAkQgRAggcATQAaAdApAHQApAHAtAKQAwAKArAOIAUAHQARAiAhA2IABAAQAGAKAEAgQAEAvgDA5IgWgEgAAr0CIAPgIIgPAIgAjj4IIAAAFQABAPAFAHQAHAKAQgGIAAAAIAFgCQAsgXgRgxIAAgBQgLgggbAAIAAAAIgBAAQgHAAgIACIgBABIgBAAIgBAAIABAAIABAAIABgBQAIgCAHAAIABAAIAAAAQAbAAALAgIAAABQgUALgpgHQgBATABAUgAjf5RQgDARgBARQABgRADgRIACgOIgCAOgAim4zIAPgEIgPAEg");
	this.shape_4.setTransform(160.3,182.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF00").s().p("AhlLYIgbgLQgpgSgwgGQgtgHgwgCQgugCgugBQgaAAgWAIQgXAIgTAQIAEgdQACgXAAgZIgChiQgBgzgIgqQgJgwgDgvQgDgmgKg6IgFghIDBkhIARANQAeAZAnASQAoARAsAJQAtAKAvABQAxABAogKQAlgJAWgTQAGAvAAAwQAAAygZAmIg0BNQgZApgeAcIgBABIgBABQgfAcgbAfQAbgfAfgcIABgBIABgBIAAACQgLApACAwQACAzgFAtIgMBgQgHAwADAyIABAoIgYgKgAgyE9IAAAAgAjmnoQgSgKgSgMQgmgagNgpQgJgfAGgiIABgHQAIgkAZgdQALgLAMgLQApgEAqAGIAbAEIAGABIABAAIA7AHIBfAIQAuADAxABIBiACQAvABAtAHIAWAEIAmAGQALAEAOACQAYADAegFQAKgBAKAFQAiARAqgIQgUAZg7ANQgWAEgagBIgDAAQgjgBAAgSIAAgEQgSAGgOADQgQAEgPAEQgcAKgbAOQgmAUgwARQgwARhBAjQg+AkgQgGQgPgGgwAGQgwAGg4ARIgfgQgAgRqAQAiAAAjgHIAEAAIABgBIAFgBIBegUQAugJAxgCIABAAIABAAIADAAIAAAAIAAAAQAUAAARAHQgRgHgUAAIAAAAIAAAAIgDAAIgBAAIgBAAQgxACguAJIheAUIgFABIgBABIgEAAQgjAHgiAAIgBAAIAAAAIgGAAIAAAAIgGAAIAGAAIAAAAIAGAAIAAAAIABAAgAGZn2QgegSgagMIgKgFQgNgJgMgdQgGgQgFgVIAAAAIgBAAIgGgaQAPgEAQgEQAOgDASgGIAAAEQAAASAjABIADAAQgGA2AkAWQAHAEADAJQALAkgTAbQgFgKgTgMg");
	this.shape_5.setTransform(167.2,155.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhBgHQArgHgRAsQgSgQgIgVgAAnAAQgFgGgBgPIAAgFQArgMgOApIAAAAQgGACgEAAQgIAAgFgFg");
	this.shape_6.setTransform(134.1,30.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag1ArQAQgrgqAFQgFgMAAgSIABgJQAiABAfgMQAHATgEAYQgCAhgSAaQgKgGgIgIgAAwARIAAgBQAOgogsAMQgBgUACgUQApAIAUgLQARAxgsAUIgFADg");
	this.shape_7.setTransform(135.5,29.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(0.1,1,1).p("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");
	this.shape_8.setTransform(166.9,182.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_4},{t:this.shape_5},{t:this.shape_6},{t:this.shape_7},{t:this.shape_8}]},1).wait(15));

	// foreleg
	this.instance_2 = new lib.static_stace_foreleg("synched",0);
	this.instance_2.setTransform(52.5,214.9,1,1,0,0,0,13.1,8.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:8.2,scaleX:1,scaleY:1,rotation:7.8,x:52,y:215.6},1).to({regY:8.1,scaleX:1,scaleY:1,rotation:39.9,x:50.1,y:218.3},4).to({scaleX:1,scaleY:1,rotation:90,x:51.8,y:214.3},3).to({regY:8.2,scaleX:1,scaleY:1,rotation:57.4,x:48.9,y:216.9},4).to({regY:8.1,scaleX:1,scaleY:1,rotation:8.5,x:52.5,y:214.9},3).wait(1));

	// leg
	this.instance_3 = new lib.static_stace_quad("synched",0);
	this.instance_3.setTransform(131.2,164.6,1,1,0,0,0,91.5,26);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:26.1,rotation:-0.8},1).to({regX:91.4,regY:26,rotation:-6.8,x:131.1},7).to({regX:91.5,rotation:0,x:131.2},7).wait(1));

	// arm
	this.instance_4 = new lib.static_stace_arm("synched",0);
	this.instance_4.setTransform(152.8,76.2,1,1,0,0,0,148.3,26.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-6.8},1).to({regY:26.7,scaleX:1,scaleY:1,rotation:-55.8},7).to({regY:26.6,scaleX:1,scaleY:1,rotation:-3.8,y:76.3},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.5,-1,245.1,361.4);


(lib.anim_stace_kicks = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"start":1});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_1 = function() {
		playSound("carmen_blocks");
	}
	this.frame_15 = function() {
		/* gotoAndPlay("start");*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(14).call(this.frame_15).wait(1));

	// hair
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AlpCxQgLAAgLgBQgxgCgogaQghgWgsgKQgvgKgvAAQgxgBglAXQgXAOgTASQAdg1BDgdQA+gcA/AdQAzAXBAAUQA2AQAxgaQAWgMAigSQAMgGALgPQAdgoAFgzQAFg7gDg9QgDg4AZgsQAZgrAogdQAmgcAzgHQASgCAUABQAfgNAygIQAwgIAtALQAvAKAiAdQAgAaAUAsQAUAqAHAwQAHAvAHAwQAGAwAIApQAJAuAPAsQAHAUAKAQQAPAVAWAOQAiAXA0AAQAmABAdgLQALgDAKgFQAngUAZgoQAXgkAHguQACgMgCgLQAGgjAgAoQAcAkABAxQAAAKgBAJQgDAngPAgQgFAJgFAKQgOARgPAOQgPAOgRAKQgmAYghAWQgnAagvADQgyADgvgJQgxgJgkgaQgpgeAAgmQgLgggLghQgNgmgOgvQgNgrgGgtQgGgxgIgsQgKgwgRgmQgQgkgZgtQgWgqgqgWQgrgWguAQQgwAUgoAaQgnAagVAlQgVAngBAxQgBAyADAwQAEAygTAlQgRAjgbAiQgeAlgtAJQgeAHgcANgALnDPQgJATgJASQgHAOgGAOQgTApgmAYQglAYgxAKQguAKgwACQgxACgugNQgtgOgmgbQgjgagUgpQgWgsgDgyQgEgtgHgvQgHgvABguQAAgwgCgvQAAgGAAgGQgBgNAAgNQgegqgagkQgaglgsgUQgngRghgNQgoAegfAdQggAegPAnQgLAdgGAhAiJAVQAXgMAXgTQAKgJAIgLQgRgIgLgPQgTgZgBgsQgHAAgIgBQgCALgBAMQgFAwACAxQABAMAEAMQgIAEgIADQAFAEAGAFQAQAOASANQAEADAEADQALAJACALQAFAeANAWAkVDCQgIgCgHgCQgigJgjgEAhsBAQgHAjgUAlQgXAsgpALQgnALgngIAiOAlQgNAtgVAfQgZAmglAYQgUANgTAG");
	this.shape.setTransform(139.3,38.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEFF97").s().p("AF8F0QgtgOgmgbQgjgagUgpQgWgsgDgyQgEgtgHgvQgHgvABguQAAgwgCgvIAAgMIgBgaIg4hOQgaglgsgUQgngRghgNQgoAegfAdQggAegPAnQgLAdgGAhIAPABIgBAJQAAARAFAPQAFAPALANIAKAKQAIAHAKAGQgRgIgLgPQALAPARAIQgIALgKAJQgXATgXAMQgEgMgBgMIAAgcQAAgjADgiIADgXIgDAXQgDAiAAAjIAAAcQABAMAEAMIgQAHIALAJIAiAbQgHAjgUAlQgXAsgpALQgnALgngIQATgGAUgNQAlgYAZgmQAVgfANgtQgNAtgVAfQgZAmglAYQgUANgTAGIgPgEQgigJgjgEQAcgNAegHQAtgJAeglQAbgiARgjQAQgfAAgoIgBgQQgCglAAgnIAAgWQABgxAVgnQAVglAngaQAogaAwgUIABgBIAAAAIAAAAIAAAAIABAAQASgGARAAIAAAAIABAAQAaAAAYAMIABABQAqAWAWAqQAZAtAQAkQARAmAKAwQAIAsAGAxQAGAtANArIAbBVIAWBBIAAABQAAAmApAdQAkAaAxAJIACABIAEAAQAgAFAhAAIAAAAIAAAAIAUAAIAGAAQAvgDAngaIBHguQARgKAPgOQAPgOAOgRQgOARgPAOQgPAOgRAKIhHAuQgnAagvADIgGAAIgUAAIAAAAIAAAAQghAAgggFIgEAAIgCgBQgxgJgkgaQgpgdAAgmIAAgBIgWhBIgbhVQgNgrgGgtQgGgxgIgsQgKgwgRgmQgQgkgZgtQgWgqgqgWIgBgBQgYgMgaAAIgBAAIAAAAQgRAAgSAGIgBAAIAAAAIAAAAIAAAAIgBABQgwAUgoAaQgnAagVAlQgVAngBAxIAAAWQAAAnACAlIABAQQAAAogQAfQgRAjgbAiQgeAlgtAJQgeAHgcANIgWgBQgxgCgogaQghgWgsgKQgvgKgvAAQgxgBglAXQgXAOgTASQAdg1BDgdQA+gcA/AdQAzAXBAAUQA2AQAxgaIA4geQAMgGALgPQAdgoAFgzQAFg7gDg9QgDg4AZgsQAZgrAogdQAmgcAzgHQASgCAUABQAfgNAygIQAwgIAtALQAvAKAiAdQAgAaAUAsQAUAqAHAwIAOBfQAGAwAIApQAJAuAPAsQAHAUAKAQQAPAVAWAOQAiAXA0AAQAmABAdgLQALgDAKgFQAngUAZgoQAXgkAHguQACgMgCgLQAGgjAgAoQAcAkABAxIgBATQgDAngPAgIgKATIgSAlIgNAcQgTApgmAYQglAYgxAKQguAKgwACIgNAAQgqAAgogLgAhJgeIAAAAg");
	this.shape_1.setTransform(139.3,38.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.1,1,1).p("AlpCxQgLAAgLgBQgxgCgogaQghgWgsgKQgvgKgvAAQgxgBglAXQgXAOgTASQAdg1BDgdQA+gcA/AdQAzAXBAAUQA2AQAxgaQAWgMAigSQAMgGALgPQAdgoAFgzQAFg7gDg9QgDg4AZgsQAZgrAogdQAmgcAzgHQASgCAUABQAfgNAygIQAwgIAtALQAvAKAiAdQAgAaAUAsQAUAqAHAwQAHAvAHAwQAGAwAIApQAJAuAPAsQAHAUAKAQQAPAVAWAOQAiAXA0AAQAmABAdgLQALgDAKgFQAngUAZgoQAXgkAHguQACgMgCgLQAGgjAgAoQAcAkABAxQAAAKgBAJQgDAngPAgQgFAJgFAKQgOARgPAOQgPAOgRAKQgmAYghAWQgnAagvADQgyADgvgJQgxgJgkgaQgpgeAAgmQgLgggLghQgNgmgOgvQgNgrgGgtQgGgxgIgsQgKgwgRgmQgQgkgZgtQgWgqgqgWQgrgWguAQQgwAUgoAaQgnAagVAlQgVAngBAxQgBAyADAwQAEAygTAlQgRAjgbAiQgeAlgtAJQgeAHgcANgALnDPQgJATgJASQgHAOgGAOQgTApgmAYQglAYgxAKQguAKgwACQgxACgugNQgtgOgmgbQgjgagUgpQgWgsgDgyQgEgtgHgvQgHgvABguQAAgwgCgvQAAgGAAgGQgBgNAAgNQgegqgagkQgaglgsgUQgngRghgNQgoAegfAdQggAegPAnQgLAdgGAhQgCALgBAMQgFAwACAxQABAMAEAMAiIh7QAIABAHAAQABAsATAZQALAPARAIQgIALgKAJQgXATgXAMQgIAEgIADQAFAEAGAFQAQAOASANQAEADAEADQALAJACALQAFAeANAWAkVDCQgIgCgHgCQgigJgjgEAhsBAQgHAjgUAlQgXAsgpALQgnALgngIAiOAlQgNAtgVAfQgZAmglAYQgUANgTAG");
	this.shape_2.setTransform(139.3,38.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEFF97").s().p("AF8F0QgtgOgmgbQgjgagUgpQgWgsgDgyQgEgtgHgvQgHgvABguQAAgwgCgvIAAgMIgBgaIg4hOQgaglgsgUQgngRghgNQgoAegfAdQggAegPAnQgLAdgGAhIgDAXQgDAiAAAjIAAAcQABAMAEAMQgEgMgBgMIAAgcQAAgjADgiIADgXIAPABIgBAJQAAARAFAPQAFAPALANIAKAKQAIAHAKAGQgRgIgLgPQALAPARAIQgIALgKAJQgXATgXAMIgQAHIALAJIAiAbQgHAjgUAlQgXAsgpALQgnALgngIQATgGAUgNQAlgYAZgmQAVgfANgtQgNAtgVAfQgZAmglAYQgUANgTAGIgPgEQgigJgjgEQAcgNAegHQAtgJAeglQAbgiARgjQAQgfAAgoIgBgQQgCglAAgnIAAgWQABgxAVgnQAVglAngaQAogaAwgUIABgBIAAAAIAAAAIAAAAIABAAQASgGARAAIAAAAIABAAQAaAAAYAMIABABQAqAWAWAqQAZAtAQAkQARAmAKAwQAIAsAGAxQAGAtANArIAbBVIAWBBIAAABQAAAmApAdQAkAaAxAJIACABIAEAAQAgAFAhAAIAAAAIAAAAIAUAAIAGAAQAvgDAngaIBHguQARgKAPgOQAPgOAOgRQgOARgPAOQgPAOgRAKIhHAuQgnAagvADIgGAAIgUAAIAAAAIAAAAQghAAgggFIgEAAIgCgBQgxgJgkgaQgpgdAAgmIAAgBIgWhBIgbhVQgNgrgGgtQgGgxgIgsQgKgwgRgmQgQgkgZgtQgWgqgqgWIgBgBQgYgMgaAAIgBAAIAAAAQgRAAgSAGIgBAAIAAAAIAAAAIAAAAIgBABQgwAUgoAaQgnAagVAlQgVAngBAxIAAAWQAAAnACAlIABAQQAAAogQAfQgRAjgbAiQgeAlgtAJQgeAHgcANIgWgBQgxgCgogaQghgWgsgKQgvgKgvAAQgxgBglAXQgXAOgTASQAdg1BDgdQA+gcA/AdQAzAXBAAUQA2AQAxgaIA4geQAMgGALgPQAdgoAFgzQAFg7gDg9QgDg4AZgsQAZgrAogdQAmgcAzgHQASgCAUABQAfgNAygIQAwgIAtALQAvAKAiAdQAgAaAUAsQAUAqAHAwIAOBfQAGAwAIApQAJAuAPAsQAHAUAKAQQAPAVAWAOQAiAXA0AAQAmABAdgLQALgDAKgFQAngUAZgoQAXgkAHguQACgMgCgLQAGgjAgAoQAcAkABAxIgBATQgDAngPAgIgKATIgSAlIgNAcQgTApgmAYQglAYgxAKQguAKgwACIgNAAQgqAAgogLg");
	this.shape_3.setTransform(139.3,38.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},14).wait(1));

	// forward arm
	this.instance = new lib.static_stace_arm2("synched",0);
	this.instance.setTransform(182.6,59.1,1,1,0,0,0,9.8,7.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:3.6},1).to({regY:7.8,rotation:30,y:59.2},7).to({regX:9.7,regY:7.7,scaleX:1,scaleY:1,rotation:9.3,x:182.5,y:59.1},7).wait(1));

	// body
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.1,1,1).p("AAhgaQArgMgOApAhBgHQArgHgRAs");
	this.shape_4.setTransform(134.1,30.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(0.1,1,1).p("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");
	this.shape_5.setTransform(166.9,182.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFCC97").s().p("AhRbMQgKAZgkgYQgOgKgFgJIgBgCQgCgDAAgEQAAgNAcgKQgcAKAAANQAAAEACADQgLgBgIgEQgQgJgHgIQgGgGAAgGQAAgKAUgIIACAAIgCAAQgUAIAAAKQAAAGAGAGIgHAFQghABgMgUQgHgKgCgJQgCgFAAgFQAAgWAngDQgnADAAAWQAAAFACAFQgRALgSgOQgQgNgEgKIgBgHQAAgQAegIQgeAIAAAQIABAHIgMAEQglgQgKguQgEgUAOgLQAkgcAxANQApAMAgAkQAkAAAggDQAwgFAtgTQAlgQAngcQAhgYAdghQgGgdgMgTQgLgTgKgZQgRgtgYgmIgthSQgXgogQguQgRgvgagnIg0hOQgZgngggiQghgjgWghQgLgSgRgWQgcgkgMguQgMgtgOgtQgOgugGgvQgFgvAGgqQAWgIAaAAQAuABAuACQAwACAtAHQAwAGApASIAbALQAKAngIAuQgJAugPAsQgMAkgHAjIgDARIADgRQAKArAkAaQAPALANANQAhAdAdAoQAaAkAWApQAXArAIAwQAIAsALAtQAMAvAMAtQgBAuANAtIAbBYQAPAtAUAsIAnBTQAUApgMAvQgMAyg2ACQgzABgrgQQgtgRgmAjQggAfgmAWQgSAKgPAAQgYAAgRgagADpYbQgDAJgNADQANgDADgJQAGgOAAgOQAAgegYgeQAYAeAAAeQAAAOgGAOgAjpLmQgSgNAAgRQAAgGADgGQgDAGAAAGQAAARASANgAj6aBIAAAAgAkxZnIAAAAgAgDj5QgvgBgtgKQgsgJgogTQgngSgegZIgRgNQgXgTgXgUQAcgNArgyQAqgzAKggQAKggAFgiIAMhQQAJgwgJgpIAfAQQA4gRAwgGQAugGAQAGQAPAGBBgkQBAgkAwgQQAwgRAmgUQAbgPAcgJIAHAaIAAAAIAAAAIAAAAIAAAAIg4B4IhNB6QhEBrgdBLQgeBKAdBmQgWAVglAJQgmAJgsAAIgHAAgAFqvQQgtgHgvgBIhigCQgxgBgugDIhfgIIg7gHIAAAAIgHgBQAIgVAagQQgaAQgIAVIgbgEQgqgGgpAEQAUgTAXgPQAlgbASgaIAug/QAMg4hVgDQAmAAAdgUQAKgIAEgPQgEAPgKAIQgdAUgmAAIgDAAQgPAAgQgDQg3gMgngfQgRgNgLgTQAwgNA0gZQg0AZgwANQgNgXgFgdQgCgMgLgIIgIgGIgigbIgLgKIAQgGQAXgMAXgVQALgJAHgLQASgaACgjQAFgYgIgTQgGgPgPgMIAAgBQgEgDgFAAIAAAAIgBAAIgGABIAAABIAAAAIgBAAQgYAKgDAfQADgfAYgKIABAAIAAAAIAAgBIAGgBIABAAIAAAAQAFAAAEADIAAABQAPAMAGAPQgfAMgiAAIgPgBQAGghALgeQAPgmAggeQAfgeAogdQAogKAxACQAvABAjAcQAiAbAdAfQAcAdAPAtQAPAuAPApQAPAnAFAvQAGA1gTAkQgRAggcATQAaAdApAHQApAHAtAKQAwAKArAOIAUAHQARAiAhA2IABAAQAGAKAEAgQAEAvgDA5IgWgEgAAr0CIAPgIIgPAIgAjj4IIAAAFQABAPAFAHQAHAKAQgGIAAAAIAFgCQAsgXgRgxIAAgBQgLgggbAAIAAAAIgBAAQgHAAgIACIgBABIgBAAIgBAAIABAAIABAAIABgBQAIgCAHAAIABAAIAAAAQAbAAALAgIAAABQgUALgpgHQgBATABAUgAjf5RQgDARgBARQABgRADgRIACgOIgCAOgAim4zIAPgEIgPAEg");
	this.shape_6.setTransform(160.3,182.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFF00").s().p("AhlLYIgbgLQgpgSgwgGQgtgHgwgCQgugCgugBQgaAAgWAIQgXAIgTAQIAEgdQACgXAAgZIgChiQgBgzgIgqQgJgwgDgvQgDgmgKg6IgFghIDBkhIARANQAeAZAnASQAoARAsAJQAtAKAvABQAxABAogKQAlgJAWgTQAGAvAAAwQAAAygZAmIg0BNQgZApgeAcIgBABIgBABQgfAcgbAfQAbgfAfgcIABgBIABgBIAAACQgLApACAwQACAzgFAtIgMBgQgHAwADAyIABAoIgYgKgAgyE9IAAAAgAjmnoQgSgKgSgMQgmgagNgpQgJgfAGgiIABgHQAIgkAZgdQALgLAMgLQApgEAqAGIAbAEIAGABIABAAIA7AHIBfAIQAuADAxABIBiACQAvABAtAHIAWAEIAmAGQALAEAOACQAYADAegFQAKgBAKAFQAiARAqgIQgUAZg7ANQgWAEgagBIgDAAQgjgBAAgSIAAgEQgSAGgOADQgQAEgPAEQgcAKgbAOQgmAUgwARQgwARhBAjQg+AkgQgGQgPgGgwAGQgwAGg4ARIgfgQgAgRqAQAiAAAjgHIAEAAIABgBIAFgBIBegUQAugJAxgCIABAAIABAAIADAAIAAAAIAAAAQAUAAARAHQgRgHgUAAIAAAAIAAAAIgDAAIgBAAIgBAAQgxACguAJIheAUIgFABIgBABIgEAAQgjAHgiAAIgBAAIAAAAIgGAAIAAAAIgGAAIAGAAIAAAAIAGAAIAAAAIABAAgAGZn2QgegSgagMIgKgFQgNgJgMgdQgGgQgFgVIAAAAIgBAAIgGgaQAPgEAQgEQAOgDASgGIAAAEQAAASAjABIADAAQgGA2AkAWQAHAEADAJQALAkgTAbQgFgKgTgMg");
	this.shape_7.setTransform(167.2,155.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhBgHQArgHgRAsQgSgQgIgVgAAnAAQgFgGgBgPIAAgFQArgMgOApIAAAAQgGACgEAAQgIAAgFgFg");
	this.shape_8.setTransform(134.1,30.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag1ArQAQgrgqAFQgFgMAAgSIABgJQAiABAfgMQAHATgEAYQgCAhgSAaQgKgGgIgIgAAwARIAAgBQAOgogsAMQgBgUACgUQApAIAUgLQARAxgsAUIgFADg");
	this.shape_9.setTransform(135.5,29.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(0.1,1,1).p("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");
	this.shape_10.setTransform(166.9,182.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).to({state:[{t:this.shape_6},{t:this.shape_7},{t:this.shape_8},{t:this.shape_9},{t:this.shape_10}]},1).wait(15));

	// foreleg
	this.instance_1 = new lib.static_stace_foreleg("synched",0);
	this.instance_1.setTransform(52.5,214.9,1,1,0,0,0,13.1,8.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:8.2,scaleX:1,scaleY:1,rotation:7.8,x:52,y:215.6},1).to({regY:8.1,scaleX:1,scaleY:1,rotation:39.9,x:50.1,y:218.3},4).to({scaleX:1,scaleY:1,rotation:90,x:51.8,y:214.3},3).to({regY:8.2,scaleX:1,scaleY:1,rotation:57.4,x:48.9,y:216.9},4).to({regY:8.1,scaleX:1,scaleY:1,rotation:8.5,x:52.5,y:214.9},3).wait(1));

	// leg
	this.instance_2 = new lib.static_stace_quad("synched",0);
	this.instance_2.setTransform(131.2,164.6,1,1,0,0,0,91.5,26);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:26.1,rotation:-0.8},1).to({regX:91.4,regY:26,rotation:-6.8,x:131.1},7).to({regX:91.5,rotation:0,x:131.2},7).wait(1));

	// arm
	this.instance_3 = new lib.static_stace_arm("synched",0);
	this.instance_3.setTransform(152.8,76.2,1,1,0,0,0,148.3,26.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-6.8},1).to({regY:26.7,scaleX:1,scaleY:1,rotation:-55.8},7).to({regY:26.6,scaleX:1,scaleY:1,rotation:-3.8,y:76.3},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.5,-1,245.1,361.4);


(lib.anim_ball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{ballStable:0,ballStart:1});

	// timeline functions:
	this.frame_0 = function() {
		playSound("ball_passes");
		/* stop();*/
	}
	this.frame_2 = function() {
		playSound("ball_passes");
	}
	this.frame_11 = function() {
		/* gotoAndPlay("ballStart");*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(9).call(this.frame_11).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AsXKsIAA1WIYuAAIAAVWg");
	var mask_graphics_1 = new cjs.Graphics().p("AsXKsIAA1WIYuAAIAAVWg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-12.6,y:36.6}).wait(1).to({graphics:mask_graphics_1,x:-12.6,y:36.6}).wait(11));

	// Layer 1
	this.instance = new lib.static_ball("synched",0);
	this.instance.setTransform(-55.7,-5.7,1,1,0,0,0,23.1,23.1);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-52.7},0).to({rotation:360,x:53.5,y:78.3},9,cjs.Ease.get(1)).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.8,-29.8,48.1,48.1);


(lib.Diagramkicks = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"kicks subject":63,"kicks verb":138,"kicks complement":212,"kicks recap":366});

	// timeline functions:
	this.frame_74 = function() {
		playSound("cowbell_3times");
	}
	this.frame_150 = function() {
		playSound("cowbell_3times");
	}
	this.frame_242 = function() {
		playSound("cowbell_3times");
	}
	this.frame_308 = function() {
		playSound("carmen_blocks");
	}
	this.frame_322 = function() {
		playSound("ball_kick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(74).call(this.frame_74).wait(76).call(this.frame_150).wait(92).call(this.frame_242).wait(66).call(this.frame_308).wait(14).call(this.frame_322).wait(168));

	// pen
	this.pen = new lib.anim_pencil();
	this.pen.setTransform(31.9,-28.2);

	this.timeline.addTween(cjs.Tween.get(this.pen).to({regX:-7.2,regY:352,x:-490.4,y:577.4},4).to({x:-27.9,y:583.8},10).to({x:-378.4,y:472.3},5).to({y:652.6},6).to({x:-173.5,y:474.1},5).to({x:-172,y:583.8},7).to({x:27.8,y:370},7).to({_off:true},1).wait(256).to({_off:false,regX:164.1,regY:174.6,x:251,y:169.9},0).to({x:1,y:407.1},7).to({x:89.4,y:492.5},7).to({x:271.7,y:426.8},7).to({_off:true},1).wait(167));

	// textClips
	this.instance = new lib.Wordsverb();
	this.instance.setTransform(-261.9,430.1,1,1,0,0,0,50.7,14.6);

	this.instance_1 = new lib.Wordscomplement();
	this.instance_1.setTransform(-86,430.1,1,1,0,0,0,50.7,14.6);

	this.instance_2 = new lib.Wordssubject();
	this.instance_2.setTransform(-434.9,431.8,1,1,0,0,0,50.7,19.7);

	this.instance_3 = new lib.staticperiod("synched",0);
	this.instance_3.setTransform(-156.2,706.5,1,1,0,0,0,6.9,17.3);

	this.instance_4 = new lib.Wordspass();
	this.instance_4.setTransform(-180.9,717.6,1,1,0,0,0,73.5,17.7);

	this.instance_5 = new lib.Wordsa();
	this.instance_5.setTransform(-216.4,717.6,1,1,0,0,0,73.5,22.9);

	this.instance_6 = new lib.Wordskicks();
	this.instance_6.setTransform(-257.5,717.6,1,1,0,0,0,73.5,22.9);

	this.instance_7 = new lib.Wordsshe();
	this.instance_7.setTransform(-307.3,717.6,1,1,0,0,0,73.5,22.9);

	this.instance_8 = new lib.Wordswho();
	this.instance_8.setTransform(-429.5,521.6,1,1,0,0,0,51.8,10.4);

	this.instance_9 = new lib.Wordsshe();
	this.instance_9.setTransform(-500.2,502.6);

	this.instance_10 = new lib.Wordsdoes();
	this.instance_10.setTransform(-266.4,504.6,1,1,0,0,0,73.5,10.4);

	this.instance_11 = new lib.Wordskicks();
	this.instance_11.setTransform(-257.5,717.6,1,1,0,0,0,73.5,22.9);

	this.instance_12 = new lib.WordsTowhat();
	this.instance_12.setTransform(-82.8,514.2,1,1,0,0,0,51.8,18.7);

	this.instance_13 = new lib.Wordspass();
	this.instance_13.setTransform(-180.9,717.6,1,1,0,0,0,73.5,17.7);

	this.instance_14 = new lib.Wordsa();
	this.instance_14.setTransform(-216.4,717.6,1,1,0,0,0,73.5,22.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},51).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_8},{t:this.instance_7,p:{regX:73.5,regY:22.9,x:-307.3,y:717.6}},{t:this.instance_6,p:{x:-257.5,y:717.6}},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-216.4,y:717.6}},{t:this.instance_4,p:{x:-180.9,y:717.6}},{t:this.instance_3}]},12).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_9,p:{regX:0,regY:0,x:-500.2,y:502.6}},{t:this.instance_7,p:{regX:73.5,regY:22.9,x:-307.3,y:717.6}},{t:this.instance_6,p:{x:-257.5,y:717.6}},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-216.4,y:717.6}},{t:this.instance_4,p:{x:-180.9,y:717.6}},{t:this.instance_3}]},12).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{regX:73.5,regY:22.9,x:-307.3,y:717.6}},{t:this.instance_6,p:{x:-257.5,y:717.6}},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-216.4,y:717.6}},{t:this.instance_4,p:{x:-180.9,y:717.6}},{t:this.instance_3}]},11).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{regX:73.5,regY:22.9,x:-307.3,y:717.6}},{t:this.instance_6,p:{x:-257.5,y:717.6}},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-216.4,y:717.6}},{t:this.instance_4,p:{x:-180.9,y:717.6}},{t:this.instance_3},{t:this.instance_8}]},18).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_9,p:{regX:0,regY:0,x:-500.2,y:502.6}},{t:this.instance_7,p:{regX:73.5,regY:22.9,x:-307.3,y:717.6}},{t:this.instance_6,p:{x:-257.5,y:717.6}},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-216.4,y:717.6}},{t:this.instance_4,p:{x:-180.9,y:717.6}},{t:this.instance_3}]},10).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_9,p:{regX:73.5,regY:22.9,x:-307.3,y:717.6}},{t:this.instance_6,p:{x:-257.5,y:717.6}},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-216.4,y:717.6}},{t:this.instance_4,p:{x:-180.9,y:717.6}},{t:this.instance_3},{t:this.instance_7,p:{regX:0,regY:0,x:-500.2,y:502.6}}]},6).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{regX:73.5,regY:22.9,x:-307.3,y:717.6}},{t:this.instance_6,p:{x:-257.5,y:717.6}},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-216.4,y:717.6}},{t:this.instance_4,p:{x:-180.9,y:717.6}},{t:this.instance_3}]},8).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{regX:73.5,regY:22.9,x:-307.3,y:717.6}},{t:this.instance_6,p:{x:-257.5,y:717.6}},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-216.4,y:717.6}},{t:this.instance_4,p:{x:-180.9,y:717.6}},{t:this.instance_3},{t:this.instance_10}]},10).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{regX:73.5,regY:22.9,x:-307.3,y:717.6}},{t:this.instance_11},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-216.4,y:717.6}},{t:this.instance_4,p:{x:-180.9,y:717.6}},{t:this.instance_3},{t:this.instance_6,p:{x:-267.9,y:525.5}}]},13).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{regX:73.5,regY:22.9,x:-307.3,y:717.6}},{t:this.instance_6,p:{x:-257.5,y:717.6}},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-216.4,y:717.6}},{t:this.instance_4,p:{x:-180.9,y:717.6}},{t:this.instance_3}]},12).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{regX:73.5,regY:22.9,x:-307.3,y:717.6}},{t:this.instance_11},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-216.4,y:717.6}},{t:this.instance_4,p:{x:-180.9,y:717.6}},{t:this.instance_3},{t:this.instance_6,p:{x:-267.9,y:525.5}}]},16).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{regX:73.5,regY:22.9,x:-307.3,y:717.6}},{t:this.instance_6,p:{x:-257.5,y:717.6}},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-216.4,y:717.6}},{t:this.instance_4,p:{x:-180.9,y:717.6}},{t:this.instance_3}]},13).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{regX:73.5,regY:22.9,x:-307.3,y:717.6}},{t:this.instance_6,p:{x:-257.5,y:717.6}},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-216.4,y:717.6}},{t:this.instance_4,p:{x:-180.9,y:717.6}},{t:this.instance_3}]},20).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{regX:73.5,regY:22.9,x:-307.3,y:717.6}},{t:this.instance_6,p:{x:-257.5,y:717.6}},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-216.4,y:717.6}},{t:this.instance_4,p:{x:-180.9,y:717.6}},{t:this.instance_3},{t:this.instance_12}]},14).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{regX:73.5,regY:22.9,x:-307.3,y:717.6}},{t:this.instance_6,p:{x:-257.5,y:717.6}},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-216.4,y:717.6}},{t:this.instance_13},{t:this.instance_3},{t:this.instance_4,p:{x:-84.5,y:525.5}}]},17).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{regX:73.5,regY:22.9,x:-307.3,y:717.6}},{t:this.instance_6,p:{x:-257.5,y:717.6}},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-216.4,y:717.6}},{t:this.instance_4,p:{x:-180.9,y:717.6}},{t:this.instance_3}]},14).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{regX:73.5,regY:22.9,x:-307.3,y:717.6}},{t:this.instance_6,p:{x:-257.5,y:717.6}},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-216.4,y:717.6}},{t:this.instance_13},{t:this.instance_3},{t:this.instance_4,p:{x:-84.5,y:525.5}}]},14).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{regX:73.5,regY:22.9,x:-307.3,y:717.6}},{t:this.instance_6,p:{x:-257.5,y:717.6}},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-216.4,y:717.6}},{t:this.instance_4,p:{x:-180.9,y:717.6}},{t:this.instance_3}]},13).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{regX:73.5,regY:22.9,x:-307.3,y:717.6}},{t:this.instance_6,p:{x:-257.5,y:717.6}},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-216.4,y:717.6}},{t:this.instance_4,p:{x:-180.9,y:717.6}},{t:this.instance_3}]},16).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{regX:73.5,regY:22.9,x:-307.3,y:717.6}},{t:this.instance_6,p:{x:-257.5,y:717.6}},{t:this.instance_14},{t:this.instance_4,p:{x:-180.9,y:717.6}},{t:this.instance_3},{t:this.instance_5,p:{regY:22.8,rotation:45,x:-94.8,y:627}}]},23).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{regX:73.5,regY:22.9,x:-307.3,y:717.6}},{t:this.instance_6,p:{x:-257.5,y:717.6}},{t:this.instance_14},{t:this.instance_13},{t:this.instance_3},{t:this.instance_5,p:{regY:22.8,rotation:45,x:-94.8,y:627}},{t:this.instance_4,p:{x:-84.5,y:525.5}}]},11).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{regX:73.5,regY:22.9,x:-307.3,y:717.6}},{t:this.instance_6,p:{x:-257.5,y:717.6}},{t:this.instance_14},{t:this.instance_13},{t:this.instance_3},{t:this.instance_5,p:{regY:22.8,rotation:45,x:-94.8,y:627}},{t:this.instance_4,p:{x:-84.5,y:525.5}}]},12).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{regX:73.5,regY:22.9,x:-307.3,y:717.6}},{t:this.instance_6,p:{x:-257.5,y:717.6}},{t:this.instance_14},{t:this.instance_13},{t:this.instance_3},{t:this.instance_5,p:{regY:22.8,rotation:45,x:-94.8,y:627}},{t:this.instance_4,p:{x:-84.5,y:525.5}}]},10).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{regX:73.5,regY:22.9,x:-307.3,y:717.6}},{t:this.instance_6,p:{x:-257.5,y:717.6}},{t:this.instance_14},{t:this.instance_4,p:{x:-180.9,y:717.6}},{t:this.instance_3},{t:this.instance_5,p:{regY:22.8,rotation:45,x:-94.8,y:627}}]},10).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_9,p:{regX:73.5,regY:22.9,x:-307.3,y:717.6}},{t:this.instance_6,p:{x:-257.5,y:717.6}},{t:this.instance_14},{t:this.instance_4,p:{x:-180.9,y:717.6}},{t:this.instance_3},{t:this.instance_5,p:{regY:22.8,rotation:45,x:-94.8,y:627}},{t:this.instance_7,p:{regX:0,regY:0,x:-500.2,y:502.6}}]},14).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{regX:73.5,regY:22.9,x:-307.3,y:717.6}},{t:this.instance_11},{t:this.instance_14},{t:this.instance_4,p:{x:-180.9,y:717.6}},{t:this.instance_3},{t:this.instance_5,p:{regY:22.8,rotation:45,x:-94.8,y:627}},{t:this.instance_6,p:{x:-267.9,y:525.5}}]},11).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{regX:73.5,regY:22.9,x:-307.3,y:717.6}},{t:this.instance_6,p:{x:-257.5,y:717.6}},{t:this.instance_14},{t:this.instance_4,p:{x:-180.9,y:717.6}},{t:this.instance_3},{t:this.instance_5,p:{regY:22.8,rotation:45,x:-94.8,y:627}}]},16).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{regX:73.5,regY:22.9,x:-307.3,y:717.6}},{t:this.instance_6,p:{x:-257.5,y:717.6}},{t:this.instance_14},{t:this.instance_13},{t:this.instance_3},{t:this.instance_5,p:{regY:22.8,rotation:45,x:-94.8,y:627}},{t:this.instance_4,p:{x:-84.5,y:525.5}}]},14).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{regX:73.5,regY:22.9,x:-307.3,y:717.6}},{t:this.instance_6,p:{x:-257.5,y:717.6}},{t:this.instance_14},{t:this.instance_4,p:{x:-180.9,y:717.6}},{t:this.instance_3},{t:this.instance_5,p:{regY:22.8,rotation:45,x:-94.8,y:627}}]},12).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_9,p:{regX:73.5,regY:22.9,x:-307.3,y:717.6}},{t:this.instance_6,p:{x:-257.5,y:717.6}},{t:this.instance_14},{t:this.instance_4,p:{x:-180.9,y:717.6}},{t:this.instance_3},{t:this.instance_5,p:{regY:22.8,rotation:45,x:-94.8,y:627}},{t:this.instance_7,p:{regX:0,regY:0,x:-500.2,y:502.6}}]},8).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_9,p:{regX:73.5,regY:22.9,x:-307.3,y:717.6}},{t:this.instance_11},{t:this.instance_14},{t:this.instance_4,p:{x:-180.9,y:717.6}},{t:this.instance_3},{t:this.instance_5,p:{regY:22.8,rotation:45,x:-94.8,y:627}},{t:this.instance_6,p:{x:-267.9,y:525.5}},{t:this.instance_7,p:{regX:0,regY:0,x:-500.2,y:502.6}}]},10).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_9,p:{regX:73.5,regY:22.9,x:-307.3,y:717.6}},{t:this.instance_11},{t:this.instance_14},{t:this.instance_4,p:{x:-180.9,y:717.6}},{t:this.instance_3},{t:this.instance_5,p:{regY:22.8,rotation:45,x:-94.8,y:627}},{t:this.instance_6,p:{x:-267.9,y:525.5}},{t:this.instance_7,p:{regX:0,regY:0,x:-500.2,y:502.6}}]},8).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_9,p:{regX:73.5,regY:22.9,x:-307.3,y:717.6}},{t:this.instance_11},{t:this.instance_14},{t:this.instance_13},{t:this.instance_3},{t:this.instance_5,p:{regY:22.8,rotation:45,x:-94.8,y:627}},{t:this.instance_6,p:{x:-267.9,y:525.5}},{t:this.instance_7,p:{regX:0,regY:0,x:-500.2,y:502.6}},{t:this.instance_4,p:{x:-84.5,y:525.5}}]},8).wait(23));

	// only thing visible (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AUqSqIAApjILPAFIAAJjgAL8HZIAA6HIZsANIAAaHgEglnAHjIAA6HMAxiAAAIAAaHg");
	mask.setTransform(-248,528.9);

	// images
	this.instance_15 = new lib.anim_stace_kicks();
	this.instance_15.setTransform(-459.1,519.8,0.257,0.257,0,0,180,126,160.1);
	this.instance_15._off = true;

	this.instance_16 = new lib.anim_stace_kicksball();
	this.instance_16.setTransform(-304.4,521.6,0.274,0.274,0,0,180,126.1,179.7);

	this.instance_17 = new lib.anim_ball();
	this.instance_17.setTransform(-83.3,521.2,1,1,0,0,0,-12.6,36.6);

	this.instance_18 = new lib.Wordspass();
	this.instance_18.setTransform(-84.5,525.5,1,1,0,0,0,73.5,17.7);

	this.instance_15.mask = this.instance_16.mask = this.instance_17.mask = this.instance_18.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_15}]},86).to({state:[]},18).to({state:[{t:this.instance_15}]},24).to({state:[{t:this.instance_15}]},10).to({state:[{t:this.instance_15}]},13).to({state:[{t:this.instance_15},{t:this.instance_16}]},12).to({state:[{t:this.instance_15}]},16).to({state:[{t:this.instance_15},{t:this.instance_16}]},13).to({state:[{t:this.instance_15},{t:this.instance_16}]},20).to({state:[{t:this.instance_15},{t:this.instance_16}]},31).to({state:[{t:this.instance_15},{t:this.instance_16},{t:this.instance_17}]},14).to({state:[{t:this.instance_15},{t:this.instance_16}]},14).to({state:[{t:this.instance_15},{t:this.instance_16},{t:this.instance_17}]},13).to({state:[{t:this.instance_15},{t:this.instance_16},{t:this.instance_18}]},16).to({state:[{t:this.instance_15},{t:this.instance_16}]},34).to({state:[{t:this.instance_15},{t:this.instance_16}]},12).to({state:[{t:this.instance_15},{t:this.instance_16}]},10).to({state:[{t:this.instance_15},{t:this.instance_16},{t:this.instance_17}]},10).to({state:[{t:this.instance_16},{t:this.instance_17}]},14).to({state:[{t:this.instance_15},{t:this.instance_17}]},11).to({state:[{t:this.instance_15},{t:this.instance_16},{t:this.instance_17}]},16).to({state:[{t:this.instance_15},{t:this.instance_16}]},14).to({state:[{t:this.instance_15},{t:this.instance_16},{t:this.instance_17}]},12).to({state:[{t:this.instance_16},{t:this.instance_17}]},8).to({state:[{t:this.instance_17}]},10).to({state:[]},16).wait(23));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(86).to({_off:false},0).to({_off:true},18).wait(24).to({_off:false},0).wait(238).to({_off:true},14).wait(11).to({_off:false},0).wait(42).to({_off:true},8).wait(49));

	// diag bar
	this.instance_19 = new lib.static_bar();
	this.instance_19.setTransform(-155.4,580.6,1,1,-30,0,0,-0.1,-1.2);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(308).to({_off:false},0).to({scaleX:1.43,scaleY:45.92,rotation:-43.1,x:-155.8,y:581.2},7).wait(175));

	// right bar
	this.instance_20 = new lib.static_bar();
	this.instance_20.setTransform(-166.2,471.3,0.882,0.391,0,0,0,0.1,-1.2);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(30).to({_off:false},0).to({scaleX:1.18,scaleY:45.6,x:-164.7,y:465.4},7).wait(453));

	// left bar
	this.instance_21 = new lib.static_bar();
	this.instance_21.setTransform(-371.1,469.4,0.882,0.391,0,0,0,0.1,-1.2);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(19).to({_off:false},0).to({scaleX:1.18,scaleY:75.63,y:465.7},6).wait(465));

	// line1
	this.instance_22 = new lib.static_line("synched",0);
	this.instance_22.setTransform(-483.2,574.5,0.02,2.236,0,63.4,0,162.5,0.1);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(4).to({_off:false},0).to({regX:164,regY:1.6,scaleX:2.8,skewX:-116.6,x:-22,y:579.3},10).wait(476));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(31.8,-28.2,328.3,349.3);


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
(lib.subject_scene6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene6:0,scene6repeat:472});

	// timeline functions:
	this.frame_0 = function() {
		this.btn_menu.addEventListener("click", openMenu.bind(this));
		this.btn_goNext.addEventListener("click", openNext.bind(this));
		this.btn_goBack.addEventListener("click", openPrev.bind(this));
		
		
		function openMenu(){
		
		 window.open ("../menu/menu.html","_self");
		}
		
		
		function openNext(){
		
		 window.open ("subject_scene7.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("subject_scene5.html","_self");
		}
	}
	this.frame_471 = function() {
		/* _root.gonow = true;*/
	}
	this.frame_488 = function() {
		/* gotoAndPlay("scene6repeat");*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(471).call(this.frame_471).wait(17).call(this.frame_488).wait(1));

	// Layer 3
	this.instance = new lib.Symbol7();
	this.instance.setTransform(-65.6,101.5,1,1,0,0,0,13.2,12.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(489));

	// Layer 2
	this.instance_1 = new lib.Diagramkicks();
	this.instance_1.setTransform(458,-14.7,1,1,0,0,0,-66.2,329.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(489));

	// NewTitle
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("Ag9BIQgDgDAAgEIABgMIAAgMIABgRIAAgRIAAgQIgBgTIgBgRIgBgSQABgEADgEQADgDAFAAQAFAAAIALQAWAiASAXQAVAZAbAZIAAgMIgBgLQAAgngDgYIgDgKIgBgKQgBgLAKAAQAQAAABA9IgBAcIAAAfIgBAPQgCAJgJAAQgEAAgIgGQgmgkgvhBIAAAVIAAATIAAAXIAAAXQABAZgKAAQgFAAgDgDg");
	this.shape.setTransform(312.7,28);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("AgoA3QgMgOgCgaQgCgMAAghIABgVIABgLQADgIAGABQAIAAAAAPIAAA2QAAA3AmAAQAlAAAAhdIAAgJIAAgIQAAgFACgFQACgFAFAAQAKAAAAANIAAALIAAAMQAABpg4AAQgbAAgOgQg");
	this.shape_1.setTransform(298.1,28.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066FF").s().p("AguA5QgTgRAAgaQAAgeATgbQAVgdAeAAQAfAAAOAOQAQAOAAAgQAAAegSAZQgUAdgdAAQgbAAgSgPgAgfgeQgPAVAAAXQAAASANALQANAKATAAQAUABAPgXQANgUAAgXQAAgXgKgJQgJgJgXAAQgVABgPAWg");
	this.shape_2.setTransform(283.5,28.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0066FF").s().p("Ag9BIQgDgDAAgEIABgMIAAgMIABgRIAAgRIAAgQIgBgTIgBgRIAAgSQAAgEADgEQAEgDAEAAQAGAAAHALQAWAiASAXQAVAZAbAZIAAgMIgBgLQAAgngDgYIgCgKIgCgKQAAgLAKAAQAQAAAAA9IgBAcIAAAfIgCAPQgBAJgJAAQgFAAgGgGQgmgkgwhBIAAAVIAAATIAAAXIAAAXQAAAZgJAAQgFAAgDgDg");
	this.shape_3.setTransform(268.4,28);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0066FF").s().p("AguA5QgTgRAAgaQAAgeATgbQAVgdAeAAQAfAAAOAOQAQAOAAAgQAAAegSAZQgUAdgdAAQgbAAgSgPgAgfgeQgPAVAAAXQAAASANALQANAKATAAQAUABAPgXQANgUAAgXQAAgXgKgJQgJgJgXAAQgVABgPAWg");
	this.shape_4.setTransform(253.2,28.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0066FF").s().p("AguBGQgDgDAAgEIAAgWIgBgWIACgXIABgaIgBgOIAAgOQAAgFADgEQAEgFAFABIAXACQANABAGAFQAmAUAAAcQAAAPgNAIQgKAJgQAFQAdAPAPARQACADAAAEQAAAEgDACQgDADgEAAQgDAAgDgDQgfgegjgLIABATIAAASQAAAEgDADQgDACgDAAQgEAAgDgCgAgdgoIABALIgBASIgCARIAEAAIAEAAQAXAAALgGQAFgBAFgFQAEgFAAgEQAAgMgOgMQgMgKgOgBIgPgBg");
	this.shape_5.setTransform(239.8,27.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0066FF").s().p("AgmBHQgCgDAAgDIAAgcIABglIACglIAAgNIABgOQACgIAHABIAJgBIANAAQAPAAAPALQAQANAAASQAAAXgRAMQgQAMgTAAIgMgBIAAAxQAAADgDADQgCACgEAAQgEAAgCgCgAgUg2IAAARIgCAlIALAAQANAAALgHQAMgIAAgPQAAgKgMgIQgKgHgKAAIgHAAIgGABg");
	this.shape_6.setTransform(228.8,27.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAdAvIgGgHIgQAHQgGADgDAAQgWAAgKgMQgJgLAAgYQAAgVAPgQQAQgQATAAQAIAAAKAEQANAGAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAIgBAMIgBATQAAALACAHIAGAQIACAFIAAABQAAAFgCABQgDADgDAAQgCAAgFgEgAgOgWQgLAMAAANQAAAQAGAHQAFAIALAAQAHAAAGgEQADgBAGgGQgDgXAAgMIABgIIABgKIgFgCIgEgBQgNgBgKAMg");
	this.shape_7.setTransform(213.2,30.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgZAzQgOgFAAgJQAAgEADgDQADgDAEAAQACAAAFAFQACACAIABIALACQAFAAAGgCQAJgDAAgGQAAgMgSgFIgHgCQgNgDgFgDQgHgEAAgKQAAgTASgJIAQgGIARgGQAEgBAEAAQAEAAADACQADADAAAEIABAIIABAIQAAAEgDADQgCACgEAAQgFAAgCgDQgCgDgBgHIgVAGQgNAGAAAJIAFABQAUAEAKAHQAPAIAAASQAAAPgNAIQgLAGgOAAQgNAAgLgEg");
	this.shape_8.setTransform(197.7,29.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgHBDQgDgDAAgEIgBgRIAAgQIABgWIABgUQAAgEADgDQACgCAEAAQACAAACACQADADAAAEIgBAUIgBAWIAAAQIABARQAAAEgCADQgDACgCAAQgEAAgCgCgAgEgyQgEgDAAgEQAAgFAEgDQADgDACAAQAFAAADADQADADAAAFQAAAEgDADQgDADgFAAQgCAAgDgDg");
	this.shape_9.setTransform(190.9,27.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0066FF").s().p("AAKAcQgCgCAAgEIABgjIABgKQACgGAGAAQADAAADADQACACAAAEIAAAEIgBAEIAAAiQgBAIgIAAQgDAAgDgCgAgZAOIAAgQIABgTQAAgDACgDQACgCAEAAQADAAADACQACADAAADIAAASIAAAQIAAAEIAAAFQAAADgCADQgDACgDAAQgJAAAAgQg");
	this.shape_10.setTransform(177.9,23.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0066FF").s().p("AgeAoQgPgMAAgVQAAgWAMgQQANgSAUAAQAOAAAKAFQAMAGAAAOQAAAJgKAIIgUAIIgiARQAGAHAHAEQAIAEAIAAQAHAAAJgCQAKgDAEgFQADgFADAAQAEAAACACQADADAAADQAAAKgRAIQgOAGgOAAQgSAAgNgKgAgSgYQgHAJgEAQIAcgMQAPgIAHgGQgIgHgNAAQgKAAgIAIg");
	this.shape_11.setTransform(169.2,30.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0066FF").s().p("AAZBFIgEgVIgCgWIAAgIIABgHQAAgPgJAAQgLAAgIAIQgFAGgIAPQAAAkgDAGQgDAGgFAAQgEAAgDgDQgDgCAAgEIABgEIABgOIAAgNIABhDIAAgPIgBgJIAAgJQAAgEACgCQADgDAEAAQAHAAACAIIABARIAAAUQgBAKAAAKIAAAIQAIgKAIgFQAHgFAKAAQAPAAAGAKQAEAHABAPIAAARIACAUIADATIABADQAAADgDADQgDADgEAAQgGAAgCgIg");
	this.shape_12.setTransform(158.5,27.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0066FF").s().p("AgkBAQgRgIAAgOQAAgEACgDQADgCAEAAQAEAAAEAFQAEAHAEADQAIAFAPAAQANAAAMgGQAQgIAAgPQAAgLgOgHQgLgGgPAAQgOAAgLgFQgNgHABgOQAAgRASgNQASgNARAAQAJAAALADQAPAEAAAGQAAAIgIAAIgMgCIgPgCQgNAAgKAHQgKAHAAALQAAAHAOAEIASACQAUABANAMQAKAJABAPQAAAWgVAOQgRALgWAAQgRAAgOgGg");
	this.shape_13.setTransform(146.4,28.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0066FF").s().p("AAKAcQgCgCAAgEIABgjIABgKQACgGAGAAQADAAADADQACACAAAEIAAAEIgBAEIAAAiQgBAIgIAAQgDAAgDgCgAgZAOIAAgQIABgTQAAgDACgDQACgCAEAAQADAAADACQACADAAADIAAASIAAAQIAAAEIAAAFQAAADgCADQgDACgDAAQgJAAAAgQg");
	this.shape_14.setTransform(135.3,23.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgEBBQgDgDgBgDIABgLIAAgKIgCg1IgUgBQgJgBAAgIQABgEACgDQADgDADAAIAUACIgBgNIAAgLQAAgEADgDQACgCAEAAQAHAAABANIAAAJIAAAFIAAAGIAOgCQAJAAADABQAFACABAHQgBAEgCADQgCACgEAAIgFAAIgEAAIgOABIADA1IAAAEIAAAFQAAAUgKAAQgCAAgCgCg");
	this.shape_15.setTransform(121.5,28.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgZAoQgOgMAAgUQAAgRANgUQAOgWAPAAQAJAAAMAEQAOAGAAAIQAAADgCADQgDADgDAAQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAAAgBgBIgEgDQgFgEgNAAQgHAAgJAQQgJAQAAAJQAAANAJAHQAHAGALAAQAFAAAGgDIALgGIAEgBQAEAAACADQADACAAAEQAAAHgPAGQgMAGgIAAQgRAAgNgMg");
	this.shape_16.setTransform(112.2,30.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgeAoQgPgMAAgVQAAgWAMgQQANgSAUAAQAOAAAKAFQAMAGAAAOQAAAJgKAIIgUAIIgiARQAGAHAHAEQAIAEAIAAQAHAAAJgCQAKgDAEgFQADgFADAAQAEAAACACQADADAAADQAAAKgRAIQgOAGgOAAQgSAAgNgKgAgSgYQgHAJgEAQIAcgMQAPgIAHgGQgIgHgNAAQgKAAgIAIg");
	this.shape_17.setTransform(102.2,30.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgdBCIgBgFQAAgDADgDQADgDAEAAQAFAAAGAMIAFAKQAEAEADAAQAEAAADgGIACgJIgDg4IgDgxQAAgFADgDQACgEAEAAQAEAAADADQADACAAACIADA0IADA5QAAANgIAKQgIAMgMAAQgSAAgOgfgAAFhNQgDgDAAgFQAAgEADgDQAEgEAEAAQAFAAADAEQADADAAAEQAAAFgDADQgDADgFAAQgEAAgEgDg");
	this.shape_18.setTransform(92.1,30.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgbBFQgDAFgFAAQgDAAgCgDQgCgCgBgEIAAgHIAAgIIAAgdIgBgcIABgZIAAgaQAAgGACgEQADgFAFgBQAIAAgBAJIAAADIAAAEIAAAVIgBAXQAIgGAIgCQAHgDAEAAQAUAAANAPQAMANgBAUQABAWgOAPQgOAPgSAAQgOAAgMgGgAgOgDIgMAHIgBAQIAAAOIABAQIAMAFQAFACAIAAQALAAAJgJQAIgKAAgPQABgNgIgKQgHgHgNgBQgGAAgIAFg");
	this.shape_19.setTransform(83.8,27.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAUAsQgLAGgNAAQgNAAgIgFQgIgGgCgMQgEgYAAgSQAAgMADgRQABgIAIAAQAEAAADADQACACAAAEIgBAOIgBAOIABAZQABALACAHIAGACIAGABQAKAAAOgEIAAgTIAAgQQAAgUABgPQABgIAIAAQAEAAADADQADACAAAEIgCAjIAAASIAAAUIAAAGIABAHQAAAEgDACQgDADgEAAQgHAAgCgJg");
	this.shape_20.setTransform(73,30.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgZAzQgOgFAAgJQAAgEADgDQADgDAEAAQACAAAFAFQACACAIABIALACQAFAAAGgCQAJgDAAgGQAAgMgSgFIgHgCQgNgDgFgDQgHgEAAgKQAAgTASgJIAQgGIARgGQAEgBAEAAQAEAAADACQADADAAAEIABAIIABAIQAAAEgDADQgCACgEAAQgFAAgCgDQgCgDgBgHIgVAGQgNAGAAAJIAFABQAUAEAKAHQAPAIAAASQAAAPgNAIQgLAGgOAAQgNAAgLgEg");
	this.shape_21.setTransform(63.2,29.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgeAoQgPgMAAgVQAAgWAMgQQANgSAUAAQAOAAAKAFQAMAGAAAOQAAAJgKAIIgUAIIgiARQAGAHAHAEQAIAEAIAAQAHAAAJgCQAKgDAEgFQADgFADAAQAEAAACACQADADAAADQAAAKgRAIQgOAGgOAAQgSAAgNgKgAgSgYQgHAJgEAQIAcgMQAPgIAHgGQgIgHgNAAQgKAAgIAIg");
	this.shape_22.setTransform(48.1,30.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAZBFIgEgVIgCgWIAAgIIABgHQAAgPgJAAQgLAAgIAIQgFAGgIAPQAAAkgDAGQgDAGgFAAQgEAAgDgDQgDgCAAgEIABgEIABgOIAAgNIABhDIAAgPIgBgJIAAgJQAAgEACgCQADgDAEAAQAHAAACAIIABARIAAAUQgBAKAAAKIAAAIQAIgKAIgFQAHgFAKAAQAPAAAGAKQAEAHABAPIAAARIACAUIADATIABADQAAADgDADQgDADgEAAQgGAAgCgIg");
	this.shape_23.setTransform(37.3,27.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgFBEQgDgDAAgEIAAgEIABgEIgBgOIAAgOQAAgNgDgWIgCglIgJAAQgUAAgLgDQgIgCAAgHQAAgEACgDQADgDAFAAIAOACIAPABIARAAIAPAAIAVABIAWABQAEAAACACQADADAAAEQAAAEgDADQgCADgEAAIgWgCIgVAAIgGAAQAAAMACAdIACAoIABAKIABAKQAAAGgCAEQgDAGgFAAQgCAAgDgCg");
	this.shape_24.setTransform(26.1,27.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(489));

	// Layer 1
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

	this.instance_3 = new lib.Background("synched",0);
	this.instance_3.setTransform(275,195.5,1.069,1.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.btn_goNext},{t:this.btn_goBack},{t:this.instance_2},{t:this.btn_menu}]}).wait(489));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(284.2,-172.2,875.1,775.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;