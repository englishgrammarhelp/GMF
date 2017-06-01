(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	manifest: [
		{src:"sounds/ball_kick.mp3?1495749669274", id:"ball_kick"},
		{src:"sounds/ball_passes.mp3?1495749669274", id:"ball_passes"},
		{src:"sounds/carmen_blocks.mp3?1495749669274", id:"carmen_blocks"},
		{src:"sounds/cowbell_3times.mp3?1495749669274", id:"cowbell_3times"},
		{src:"sounds/High_Screaming_Gtr.mp3?1495749669274", id:"High_Screaming_Gtr"},
		{src:"sounds/organ_f_chord.mp3?1495749669274", id:"organ_f_chord"},
		{src:"sounds/right_answer.mp3?1495749669274", id:"right_answer"},
		{src:"sounds/stace.mp3?1495749669274", id:"stace"},
		{src:"sounds/stacecontrols.mp3?1495749669274", id:"stacecontrols"},
		{src:"sounds/stacecontrolstheball.mp3?1495749669274", id:"stacecontrolstheball"},
		{src:"sounds/thesubjectstaceisanoun.mp3?1495749669274", id:"thesubjectstaceisanoun"},
		{src:"sounds/wrong_answer.mp3?1495749669274", id:"wrong_answer"}
	]
};



// symbols:



(lib.staticperiod = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgLAKQgFgFAAgFQAAgEAFgEQAFgFAGAAQAHAAAFAEQAFAEAAAFQAAAFgFAFQgFAEgHAAQgGAAgFgEg");
	this.shape.setTransform(6.7,25.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13.8,34.7);


(lib.static_stace_leg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AgEoNIABAAQADABACABQAmAJAoALQAWAGAXAIQAHACAIADQAMAEALAEQAtAQAqANQAtAOAtAGQAsAGDlA3QgOD8lfBLQgJAMgOgJQgjgWgrgWQgDgCgEgCQgIgEgHgFQgcgQgcgTQgQgLgQgLQgKgFgIgGQgzgLgyAQQgNAEgMgHQgOgJAUgoQADgIAEgIQgVgIgVgHQgrgOgqgMQgwgOgmgOQAIAMAFARQANAtAKAtQAKAtAJAoQAAABAAABQAKAtAQAqQAAAAAAAAQABACABACQAKAZAvCVQASAsAnCLQARAZAOAaQAUAjANAnQgkA3gzANQgwANgtgGQgBAAgBgBQgXgJgcAEQgGABgFABQgtALgrANQgtAOgjgBQgjAVgrgYQgbgPACgMQACgLAXgJApAHhQgXgnBBgHQASARAWAIQAKgCAWgCQBSgJA+gxQA9gxAMgLIgshbQgghAgdg4QgEgJgFgJQAAAAAAAAQhkjAgxhiQgphTgFgPQgPgsgPguQgNgqgKgoQgMgvATgqQATgsAugJQAvgKAyABQAwAAAxAJQApAHAqAFQAyAFAwAJQAqAHAoAMQAlAMAlALAhejgQAVgtARguQASgzAKg1QAJgzAPg3AkzklQgFgIgGgGAh0GeQASAkgLAfApAHhQABADACACAokHaQgSACgKAFAo1IxQgVgXAMgQQgdgcAbgNAonH6QgRAHgGAJ");
	this.shape.setTransform(61.3,60.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC97").s().p("AjjJPQgbgPACgMIgEgDQgVgXAMgQQgdgcAbgNQAKgFASgCQgSACgKAFQgXgnBBgHQASARAXAIIAggEQBSgJA9gxQA8gxALgLIgrhbIg8h4IgJgSIAAAAQhkjAgxhiQgphTgFgPIgehaQgNgqgKgoQgMgvATgqQATgsAugJQAvgKAyABQAwAAAxAJQAnAHAqAFQAyAFAwAJQAqAHAoAMIBLAXQgQA3gJAzQgKA1gSAzQgRAugVAtQgUgIgWgHQgrgOgqgMQgwgOgmgOQAIAMAFARQANAtAKAtIATBVIAAACQAKAtAQAqIAAAAIACAEQAKAZAvCVQASAsAoCLQAQAZAOAaQAUAjANAnQgkA3gzANQgwANgtgGIgCgBQgXgJgcAEIgLACQgrALgrANQgtAOgjgBQgQAJgTAAQgUAAgXgMgAj8I0QACgLAXgJQgXAJgCALgAkJIKQAHgJAQgHQgQAHgHAJgAkIHmIgDgFIADAFgADGHhQAEgMAAgMQAAgVgLgWQALAWAAAVQAAAMgEAMgAAAklQgDgIgGgGQAGAGADAIg");
	this.shape_1.setTransform(30.4,60.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AhkDIIgHgEIgQgJQgcgQgbgTIgggWQgLgFgIgGQg1gLgyAQQgMAEgMgHQgPgJAUgoIAIgQQAUgtARgsQATgzAJg1QAJgzAQg3IAAAAIAIACIBNAUIAtAOIAQAFIAXAIQAtAQAnANQAtAOAtAGQAtAGDlA3QgPD6ldBLIgXADQgjgWgqgWg");
	this.shape_2.setTransform(86.3,32.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,124.7,122.8);


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
		this.stop();
	}
	this.frame_5 = function() {
		this.gotoAndPlay("flash");
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
		this.stop();
	}
	this.frame_5 = function() {
		this.gotoAndPlay("flash");
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
		this.stop();
	}
	this.frame_5 = function() {
		this.gotoAndPlay("flash");
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
		this.stop();
	}
	this.frame_4 = function() {
		this.gotoAndPlay("flash");
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


(lib.Wordscontrols = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,"flash":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.gotoAndPlay("flash");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgXAtQgOgFAAgJQAAgJALAAQAEAAAHADQAIACAEAAQAQAAAAgHQAAgEgMgGQgQgIgFgCQgNgIAAgNQAAgRATgGQALgEAUAAQAJAAAEACQAGADAAAJQAAAPgIAAQgJAAgCgHIgHAAQgTAAAAAFQAAAEAKAGQASAIAGADQANAIAAAMQAAAPgOAIQgMAGgOAAQgMAAgJgEg");
	this.shape.setTransform(103.2,17.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgHBEQgEgDAAgFIAAh3QABgGADgDQADgDAEAAQAFAAADADQADADABAGIAAByQgBARgLAAQgEAAgDgEg");
	this.shape_1.setTransform(96.4,15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgcAkQgMgLgBgVQgBgRAMgPQANgTAWABQARAAALANQAJANAAATQAAASgLAPQgMAPgTAAQgQAAgMgLgAgLgOQgGAJAAAJQAAAKAGAGQAFAEAGABQAGAAAGgGQAGgFABgLQABgagQgBQgJABgGAJg");
	this.shape_2.setTransform(89.2,17.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgiAtQgCgDAAgFIAAg4IAAgIIAAgIQAAgFADgDQADgDAFAAQAKAAACAKQANgMAUAAQARAAAAAXIAAAGQAAAOgMAAQgLAAAAgMIAAgIQgTADgIARIAAAqQAAAFgEADQgDAEgFAAQgGAAgDgEg");
	this.shape_3.setTransform(80.4,17.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgHA9QgDgDAAgFIAAgKIABgJIgCgsIgQgBQgMgBAAgKQAAgFADgEQAEgDAFAAIAPABIAAgJIAAgJQAAgFADgDQAEgEAFAAQAKAAAAAWIAAAIIAJgBQALAAADABQAHADAAAIQAAAFgEADQgDADgFAAIgEAAIgFAAIgIABIACAsIAAAFIAAAFQAAAUgNAAQgDAAgEgDg");
	this.shape_4.setTransform(71.7,16);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AARAoIgCgSIgBgTIAAgFIAAgIIAAgDIABgEQAAgHgEAAQgHAAgGAJQgHAKgEANIgBAIIAAAHIgBAIIAAAIQAAAFgEADQgDADgGAAQgFAAgDgDQgEgDAAgFIAAgIIgBgHIABgYIACgWIgBgIIAAgIQAAgFAEgDQADgDAFgBQAMABABAOIAAABQANgOAMAAQAQAAAHAPQAEAJAAASIAAAGIAAAEQAAAHACAKQACAMAAAGQAAAFgEADQgDADgGAAQgKABgCgLg");
	this.shape_5.setTransform(62.8,17.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgcAkQgMgLgBgVQgBgRAMgPQANgTAWABQARAAALANQAJANAAATQAAASgLAPQgMAPgTAAQgQAAgMgLgAgLgOQgGAJAAAJQAAAKAGAGQAFAEAGABQAGAAAGgGQAGgFABgLQABgagQgBQgJABgGAJg");
	this.shape_6.setTransform(53.2,17.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgaAmQgOgMAAgSQAAgQAMgSQAOgWARAAQAKAAALAFQAQAGgBAIQAAAEgCADQgDAEgFAAQgEAAgGgEQgFgEgLAAQgEAAgJANQgHANAAAIQAAAIAGAGQAHAFAIAAQAHAAAIgFQAJgEABAAQAFAAAEADQADAEAAAEQAAAHgPAHQgNAGgJAAQgRAAgNgLg");
	this.shape_7.setTransform(43.8,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,147,29.1);


(lib.Wordsthe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,"flash":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.gotoAndPlay("flash");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AgcAlQgPgLgBgTQAAgVAMgQQAOgQATAAQAPAAALAEQANAHAAAOQAAAKgLAHQgFADgPAFIgbANQAEAFAGACQAGACAGAAQALAAAJgFQAHgEAFAAQAJAAgBAJQAAAKgOAHQgMAEgOAAQgTABgNgLgAgKgTQgHAFgDAKIAUgIIARgKQgGgDgKAAQgGAAgFAGg");
	this.shape.setTransform(82.8,17.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009900").s().p("AAUBAQgCgHgCgNIgBgVIAAgGIAAgHIAAgHQgBgDgEAAQgJAAgGAHQgEAEgHANQAAAggEAGQgDAHgHAAQgFAAgEgDQgEgDAAgFIABgFQABgCAAgVIAAg5IAAgDIABgOIgBgIIgBgIQAAgFAEgDQADgEAGAAQAIAAADAKQACAFAAALIgBASIAAARQAGgGAIgEQAFgDAIAAQAPAAAHAJQAFAGABALIABAWIACARIADARIAAADQAAAFgEAEQgDADgFAAQgJAAgDgJg");
	this.shape_1.setTransform(72.9,15.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009900").s().p("AgGA9QgEgDAAgFIAAgKIABgJIgDgsIgPgBQgMgBAAgKQAAgFAEgEQADgDAFAAIAPABIgBgJIAAgJQABgFADgDQADgEAGAAQALAAgBAWIAAAIIAKgBQAKAAADABQAHADAAAIQAAAFgDADQgDADgGAAIgFAAIgDAAIgJABIABAsIAAAFIAAAFQAAAUgMAAQgDAAgDgDg");
	this.shape_2.setTransform(63.3,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,147,29.1);


(lib.Wordscomplement = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,"flash":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.gotoAndPlay("flash");
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


(lib.Wordsball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,"flash":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.gotoAndPlay("flash");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AgIBFQgDgEAAgFIAAh4QABgFADgDQADgDAEAAQAFAAADADQAEADAAAFIAABzQAAARgMAAQgEAAgEgDg");
	this.shape.setTransform(86.3,9.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009900").s().p("AgIBFQgDgEAAgFIAAh4QABgFADgDQADgDAEAAQAFAAADADQAEADAAAFIAABzQAAARgMAAQgEAAgEgDg");
	this.shape_1.setTransform(81.3,9.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009900").s().p("AAVAoIgPAGQgGACgCAAQgVAAgLgLQgKgMAAgXQAAgTAPgOQAQgQAUAAQAIAAALAFQANAGAAAHQAAADgCADIgBAJIgBALQAAAPADAIIAEAJIADAIQAAAFgDADQgEADgEAAQgEAAgJgIgAgLgQQgJAJAAAKQAAAMAEAGQAEAGAJAAQADAAAFgCQAFgBAEgEQgCgUAAgKIAAgGIABgIIgDgBIgCgBQgKAAgJAKg");
	this.shape_2.setTransform(74,12.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#009900").s().p("AgZBCQgDAEgFAAQgFAAgDgEQgDgDAAgEIAAgHIAAgHIAAhhQAAgGADgFQAEgGAGgBQAJAAAAALIAAAEIAAADIAAAiQAGgEAGgCQAGgBAEgBQAUABANAPQAMAMAAATQAAAVgOAOQgOAPgTAAQgMAAgLgFgAgJAAIgNAGIAAAlQAMAFAIAAQAKAAAHgHQAHgIAAgMQAAgLgGgHQgGgGgKAAQgDAAgGADg");
	this.shape_3.setTransform(63.6,9.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-5.2,147,29.1);


(lib.Wordssubject = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,"flash":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.gotoAndPlay("flash");
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


(lib.Wordsstace = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,"flash":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.gotoAndPlay("flash");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("AgdAlQgPgLAAgTQAAgVANgQQANgQAUAAQAPAAAKAEQANAHAAAOQAAAKgKAHQgFADgQAFIgbANQAEAFAGACQAGACAGAAQALAAAIgFQAIgEAEAAQAJAAAAAJQAAAKgOAHQgNAEgNAAQgTABgOgLgAgLgTQgFAFgEAKIAUgIIARgKQgGgDgJAAQgHAAgGAGg");
	this.shape.setTransform(93.5,17.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("AgaAmQgOgMAAgSQAAgQAMgSQAPgWARAAQAIAAAMAFQAPAGABAIQAAAEgDADQgEAEgEAAQgFAAgFgEQgFgEgKAAQgGAAgIANQgHANAAAIQAAAIAGAGQAHAFAIAAQAHAAAIgFQAJgEACAAQAEAAAEADQADAEAAAEQAAAHgPAHQgNAGgJAAQgRAAgNgLg");
	this.shape_1.setTransform(83.8,17.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066FF").s().p("AAVAoIgPAGQgGACgCAAQgVAAgLgLQgKgMAAgWQAAgUAPgOQAQgQAUAAQAIAAALAFQANAGAAAHQAAADgCADIgBAJIgBAMQAAAOADAIIAEAJIADAIQAAAFgDADQgEADgEAAQgEAAgJgIgAgLgRQgJAKAAALQAAALAEAGQAEAGAJAAQADAAAFgCQAFgCAEgDQgCgUAAgKIAAgGIABgIIgDgCIgCAAQgKAAgJAJg");
	this.shape_2.setTransform(74.4,17.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0066FF").s().p("AgGA9QgEgDAAgFIAAgKIABgJIgDgsIgPgBQgMgBAAgKQAAgFAEgEQADgDAFAAIAPABIgBgJIAAgJQABgFADgDQADgEAGAAQALAAAAAWIAAAIIAIgBQALAAADABQAHADAAAIQAAAFgDADQgDADgGAAIgFAAIgEAAIgIABIABAsIAAAFIAAAFQAAAUgMAAQgDAAgDgDg");
	this.shape_3.setTransform(65.1,16);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0066FF").s().p("AguA5QgLgJAAgKQAAgGAEgEQADgDAGAAQAIAAAEAIQAFALARAAQANAAAPgHQAOgHAAgIQAAgLgJgDQgHgDgRAAQgPgBgNgEQgPgGAAgOQAAgRASgOQASgPATAAQAJAAANAEQAPAFAAAHQAAAEgCAEQgEAEgFAAIgNgCIgNgCQgLAAgIAGQgLAFAAAGQABAEADACQADACAHABIATABQAUACAMAJQAMAJAAASQAAAXgaAMQgUAJgXAAQgWAAgNgKg");
	this.shape_4.setTransform(54.6,15.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,147,29.1);


(lib.anim_pencil = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{notinuse:0,inuse:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(2));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("ASq7QQhKApg8BqQgUAYgZAeQgKgUguAKQAHAcAJAaQAVgXATgVAPxsfQBKgXBSgTQCdhwB1ioQgLgfA7g6QANgNCNiSQgGgohligQhlifjvgQAPxsfQBFhHBJhLAWfxhQhLAVgmgSQgPgHgPgIQjxh8hQjyAO/4RQiZCViDCOQgEA9AgBAQiyC8ieClQgvAyguAwQweRRhIAyQj+Cui9DaQgRBDAAA9QgBABAAAAQgsAfgeAgQhCBHAFBKQAGBRBfBUQANANAPAMQBfBLBfAgQAAAAABAAQBhAXBYiRQCfkLDDjzQANgQATgWQA7hEByh5Qh7gggyhPQAriGCRgyQBHgYBOgUQgMBeA+AWQBIhKBUhVQCliqGrm1QBUhXBehiQB3h6CGiLAJClhQlgA4AwmFAFvsQQA+FWFHhgAmAJ8QAogpAugxQA7g9BFhIAkqIiQhDg6gig7AotM5Qgni2Anh2A0hPeQAAAAABgBQAAABAAAAQgCDZDICQQBLA3BgghA0gPdIAAAAA2oSuQh8EQgnC3QgMA6gRAiQABAAAAAAQGVicBpheAjcEpQBigZBsgSAZp1ZQl6hOhFkp");
	this.shape.setTransform(164.1,174.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFCC").s().p("A5LZ1QAni3B8kQQAGBRBfBUQhZEVjLBpIgBAAQARgiAMg6gASq7QQDvAQBlCfQBlCgAGAoQl6hOhFkpg");
	this.shape_1.setTransform(164.1,174.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEFE49").s().p("AAki9IAcAYQBfBLBfAhQhoBcmTCbQDKhpBXkSg");
	this.shape_2.setTransform(25.6,330);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AsORzIAAgBQhggghehLIgdgYQhehVgGhRQgGhKBChHQAeggAsgfIABAAQgCDZDICQQBMA3BgghQhNB9hTAAQgNAAgNgCgAjTCoQAsiGCRgvQBFgZBOgUQgDAQABAOQAABCA0ATIiBCEQhAg6gig7QAiA7BAA6IhUBbQh6ghgzhPQAzBPB6AhQhyB4g7BEQgmi2Amh2gAB7gcQgBgOADgQQBhgZBtgSIicCeQg0gTAAhCgAJswTIBehhQA+FVFHhfIizC4QgsAHgmAAQkHAAAplUg");
	this.shape_3.setTransform(129.4,210.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEFD85").s().p("AARE1IgbgPQjxh9hQjvIAngtIAug1QA7hqBLgqQBFEqF3BMIiZCfQg7A6ALAfQgpALgeAAQgZAAgSgIg");
	this.shape_4.setTransform(294.9,31.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AyZWbQjIiQACjZIAAAAIAAgBQAAg9ARhDQC9jaD+iuQBIgxQexRQgwGEFgg4QmrG2ilCpQhsAThiAZQhOAUhHAYQiRAxgrCHQgnB1AnC3IggAlQjDDzifELQgkANghAAQg3AAgvgjgAEwq7IFQliQgghAAEg8QCDiPCZiVQAHAcAJAbQBQDxDxB9IAeAOQAmASBLgVQh1CpidBwQhSAThKAXICOiTIiOCTIj9EFQhHAVg7AAQjSAAgxkLg");
	this.shape_5.setTransform(170.4,166.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.1,1,1).p("AUv5oQDtARBmCfQBlCfAFAoQl4hNhFkqQhLAqg8BpQgUAZgZAdQgTAVgVAYQgJgbgHgcQAugKAKAUART1yQBQDxDxB9QAOAHAPAHQAnASBLgVQgLgfA7g5QANgOCMiSARD2pQiaCViCCPQgEA8AgBAQiyC8ieCmAGWpFQAtgwAwgyQA+FVFIhfQhfBhhUBXQlgA4AwmEgAR2q2QBEhHBJhMAR2q2QBIgXBTgTQCdhwB1ipAN5mxQB2h6CHiLAhYGSQgNBeA/AWQhGBHg6A+QhDg7gig7AmqJ2QAsiHCRgxQBHgYBOgUQBfgZBtgTAmpOiQgTAVgNAQQjEDzieELQhgAhhMg3QjHiQACjZQAAAAAAAAQgBAAgBAAQABAAABgBQAAg9ARhDQC9jaD9iuQBJgxQexRAimKLQgvAwgnAqQhyB4g7BFQgni3Amh1Aj8LlQh7ghgzhOAycRFIAAABAsrXFQhZCRhhgWIAAAAQhFA9nageQgjADgegEQgpgFgigQQg0gYgogxQCpgnBXgMQBWgNByiqQAEA5AwA7QgRBehwA1Qh/A7iggPAzwWKQAUAZAcAZQAOAMAPAMQBfBLBfAhA0kUWQgGhJBDhHQAdggAsggALGj5QmrG2inCpQhUBWhGBK");
	this.shape_6.setTransform(150.9,184.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEFE49").s().p("AjIBlQgjADgegEQgogFgjgQQCgAPCAg7QBtgzARheQAVAZAbAZIAdAYQBfBJBfAhQguApjkAAQhvAAicgKg");
	this.shape_7.setTransform(16.9,337.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AsORzIgBAAQhfghhfhLIgcgYQgcgZgUgZQgxg7gEg5QgFhJBChHQAeggAsggIABAAQgCDZDICQQBLA3BgghQhMB9hUAAQgMAAgNgCgAjTCpQAriHCRgvQBFgYBOgUQgCAPAAAOQAABCA0ATIiACFQhBg7gig7QAiA7BBA7IhUBaQh7ghgyhOQAyBOB7AhQhyB4g7BFQgni3Anh1gAB6gcQAAgOACgPQBigZBtgTIidCeQg0gTAAhCgAJswSIBdhiQA+FVFIhfIizC4QgsAHgmAAQkIAAAqlTg");
	this.shape_8.setTransform(129.5,230.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FEFD85").s().p("AARE0IgbgOQjxh9hQjvIAngtIAug2QA7hpBLgqQBFEqF3BLIiZCgQg7A5ALAfQgpAMgeAAQgZAAgSgJg");
	this.shape_9.setTransform(294.9,51.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("AyZWbQjIiQACjZIAAAAIAAgBQABg9AQhDQC9jaD+iuQBIgxQexRQgwGEFgg4QmrG2ikCpQhtAThiAZQhOAUhHAYQiRAxgrCHQgnB1AnC3QgTAVgNAQQjDDzifELQgkANghAAQg3AAgvgjgAEwq7IFQliQgghAAEg8QCDiPCZiVQAHAcAJAbQBQDxDxB9IAeAOQAmASBLgVQh1CpidBwQhSAThJAXICNiTIiNCTIj9EFQhIAVg7AAQjSAAgxkLg");
	this.shape_10.setTransform(170.4,186.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFCC").s().p("A6QZXQgzgYgogwQCognBXgNQBWgMByiqQAEA5AwA7QgRBehvA0QhmAvh5AAQggAAghgDgAUu5ZQDvAQBlCfQBlCfAGApQl6hOhFkpg");
	this.shape_11.setTransform(150.9,182.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).wait(2));

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


(lib.anim_stace_controlball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{start:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		playSound("ball_kick");
	}
	this.frame_20 = function() {
		this.gotoAndPlay("start");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11).call(this.frame_20).wait(1));

	// ball
	this.instance = new lib.static_ball("synched",0);
	this.instance.setTransform(58.6,-16,1,1,0,0,0,23.1,23.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:-1090.8,y:-14.9},1,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:-1080,y:99.9},9).to({rotation:-2160,y:0.9},10,cjs.Ease.get(1)).wait(1));

	// hair
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AlpCxQgLAAgLgBQgxgCgogaQghgWgsgKQgvgKgvAAQgxgBglAXQgXAOgTASQAdg1BDgdQA+gcA/AdQAzAXBAAUQA2AQAxgaQAWgMAigSQAMgGALgPQAdgoAFgzQAFg7gDg9QgDg4AZgsQAZgrAogdQAmgcAzgHQASgCAUABQAfgNAygIQAwgIAtALQAvAKAiAdQAgAaAUAsQAUAqAHAwQAHAvAHAwQAGAwAIApQAJAuAPAsQAHAUAKAQQAPAVAWAOQAiAXA0AAQAmABAdgLQALgDAKgFQAngUAZgoQAXgkAHguQACgMgCgLQAGgjAgAoQAcAkABAxQAAAKgBAJQgDAngPAgQgFAJgFAKQgOARgPAOQgPAOgRAKQgmAYghAWQgnAagvADQgyADgvgJQgxgJgkgaQgpgeAAgmQgLgggLghQgNgmgOgvQgNgrgGgtQgGgxgIgsQgKgwgRgmQgQgkgZgtQgWgqgqgWQgrgWguAQQgwAUgoAaQgnAagVAlQgVAngBAxQgBAyADAwQAEAygTAlQgRAjgbAiQgeAlgtAJQgeAHgcANgALnDPQgJATgJASQgHAOgGAOQgTApgmAYQglAYgxAKQguAKgwACQgxACgugNQgtgOgmgbQgjgagUgpQgWgsgDgyQgEgtgHgvQgHgvABguQAAgwgCgvQAAgGAAgGQgBgNAAgNQgegqgagkQgaglgsgUQgngRghgNQgoAegfAdQggAegPAnQgLAdgGAhQAIABAHAAQABAsATAZQALAPARAIQgIALgKAJQgXATgXAMQgIAEgIADQAFAEAGAFQAQAOASANQAEADAEADQALAJACALQAFAeANAWAiIh7QgCALgBAMQgFAwACAxQABAMAEAMAhsBAQgHAjgUAlQgXAsgpALQgnALgngIQgIgCgHgCQgigJgjgEAiOAlQgNAtgVAfQgZAmglAYQgUANgTAG");
	this.shape.setTransform(139.3,38.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEFF97").s().p("AF8F0QgtgOgmgbQgjgagUgpQgWgsgDgyQgEgtgHgvQgHgvABguQAAgwgCgvIAAgMIgBgaIg4hOQgaglgsgUQgngRghgNQgoAegfAdQggAegPAnQgLAdgGAhIAPABIgBAJQAAARAFAPQAFAPALANIAKAKQAIAHAKAGQgRgIgLgPQALAPARAIQgIALgKAJQgXATgXAMQgEgMgBgMIAAgcQAAgjADgiIADgXIgDAXQgDAiAAAjIAAAcQABAMAEAMIgQAHIALAJQgNAtgVAfQgZAmglAYQgUANgTAGIgPgEQgigJgjgEQAcgNAegHQAtgJAeglQAbgiARgjQAQgfAAgoIgBgQQgCglAAgnIAAgWQABgxAVgnQAVglAngaQAogaAwgUIABgBIAAAAIAAAAIAAAAIABAAQASgGARAAIAAAAIABAAQAaAAAYAMIABABQAqAWAWAqQAZAtAQAkQARAmAKAwQAIAsAGAxQAGAtANArIAbBVIAWBBIAAABQAAAmApAdQAkAaAxAJIACABIAEAAQAgAFAhAAIAAAAIAAAAIAUAAIAGAAQAvgDAngaIBHguQARgKAPgOQAPgOAOgRQgOARgPAOQgPAOgRAKIhHAuQgnAagvADIgGAAIgUAAIAAAAIAAAAQghAAgggFIgEAAIgCgBQgxgJgkgaQgpgdAAgmIAAgBIgWhBIgbhVQgNgrgGgtQgGgxgIgsQgKgwgRgmQgQgkgZgtQgWgqgqgWIgBgBQgYgMgaAAIgBAAIAAAAQgRAAgSAGIgBAAIAAAAIAAAAIAAAAIgBABQgwAUgoAaQgnAagVAlQgVAngBAxIAAAWQAAAnACAlIABAQQAAAogQAfQgRAjgbAiQgeAlgtAJQgeAHgcANIgWgBQgxgCgogaQghgWgsgKQgvgKgvAAQgxgBglAXQgXAOgTASQAdg1BDgdQA+gcA/AdQAzAXBAAUQA2AQAxgaIA4geQAMgGALgPQAdgoAFgzQAFg7gDg9QgDg4AZgsQAZgrAogdQAmgcAzgHQASgCAUABQAfgNAygIQAwgIAtALQAvAKAiAdQAgAaAUAsQAUAqAHAwIAOBfQAGAwAIApQAJAuAPAsQAHAUAKAQQAPAVAWAOQAiAXA0AAQAmABAdgLQALgDAKgFQAngUAZgoQAXgkAHguQACgMgCgLQAGgjAgAoQAcAkABAxIgBATQgDAngPAgIgKATIgSAlIgNAcQgTApgmAYQglAYgxAKQguAKgwACIgNAAQgqAAgogLgAkVDCQATgGAUgNQAlgYAZgmQAVgfANgtIAiAbQgHAjgUAlQgXAsgpALQgWAGgXAAQgRAAgQgDg");
	this.shape_1.setTransform(139.3,38.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(20));

	// forward arm
	this.instance_1 = new lib.static_stace_arm2("synched",0);
	this.instance_1.setTransform(182.6,59.1,1,1,0,0,0,9.8,7.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:9.7,rotation:3},1).to({regX:9.8,regY:7.8,rotation:30,y:59.2},9).to({regX:9.7,regY:7.7,scaleX:1,scaleY:1,rotation:9.3,x:182.5,y:59.1},10).wait(1));

	// body
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.1,1,1).p("AA+ADQAOgpgrAMAhBgHQArgHgRAs");
	this.shape_2.setTransform(134.1,30.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(0.1,1,1).p("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");
	this.shape_3.setTransform(166.9,182.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC97").s().p("AhRbMQgKAZgkgYQgOgKgFgJIgBgCQgCgDAAgEQAAgNAcgKQgcAKAAANQAAAEACADQgLgBgIgEQgQgJgHgIQgGgGAAgGQAAgKAUgIIACAAIgCAAQgUAIAAAKQAAAGAGAGIgHAFQghABgMgUQgHgKgCgJQgCgFAAgFQAAgWAngDQgnADAAAWQAAAFACAFQgRALgSgOQgQgNgEgKIgBgHQAAgQAegIQgeAIAAAQIABAHIgMAEQglgQgKguQgEgUAOgLQAkgcAxANQApAMAgAkQAkAAAggDQAwgFAtgTQAlgQAngcQAhgYAdghQgGgdgMgTQgLgTgKgZQgRgtgYgmIgthSQgXgogQguQgRgvgagnIg0hOQgZgngggiQghgjgWghQgLgSgRgWQgcgkgMguQgMgtgOgtQgOgugGgvQgFgvAGgqQAWgIAaAAQAuABAuACQAwACAtAHQAwAGApASIAbALQAKAngIAuQgJAugPAsQgMAkgHAjQAKArAkAaQAPALANANQAhAdAdAoQAaAkAWApQAXArAIAwQAIAsALAtQAMAvAMAtQgBAuANAtIAbBYQAPAtAUAsIAnBTQAUApgMAvQgMAyg2ACQgzABgrgQQgtgRgmAjQggAfgmAWQgSAKgPAAQgYAAgRgagADpYbQgDAJgNADQANgDADgJQAGgOAAgOQAAgegYgeQAYAeAAAeQAAAOgGAOgAjpLmQgSgNAAgRQAAgGADgGQgDAGAAAGQAAARASANgAhMLLIADgRIgDARgAj6aBIAAAAgAkxZnIAAAAgAgDj5QgvgBgtgKQgsgJgogTQgngSgegZIgRgNQgXgTgXgUQAcgNArgyQAqgzAKggQAKggAFgiIAMhQQAJgwgJgpIAfAQQA4gRAwgGQAugGAQAGQAPAGBBgkQBAgkAwgQQAwgRAmgUQAbgPAcgJIAHAaIAAAAIAAAAIAAAAIAAAAIg4B4IhNB6QhEBrgdBLQgeBKAdBmQgWAVglAJQgmAJgsAAIgHAAgAFqvQQgtgHgvgBIhigCQgxgBgugDIhfgIIg7gHIAAAAIgHgBQAIgVAagQQgaAQgIAVIgbgEQgqgGgpAEQAUgTAXgPQAlgbASgaIAug/QAMg4hVgDQAmAAAdgUQAKgIAEgPQgEAPgKAIQgdAUgmAAIgDAAQgPAAgQgDQg3gMgngfQgRgNgLgTQAwgNA0gZQg0AZgwANQgNgXgFgdQgCgMgLgIIgIgGIgigbIgLgKIAQgGQAXgMAXgVQALgJAHgLQASgaACgjQAFgYgIgTQgGgPgPgMIAAgBQgEgDgFAAIAAAAIgBAAIgBAAIAAAAIgFABIAAABIAAAAIgBAAQgYAKgDAfIgPgBQAGghALgeQAPgmAggeQAfgeAogdQAogKAxACQAvABAjAcQAiAbAdAfQAcAdAPAtQAPAuAPApQAPAnAFAvQAGA1gTAkQgRAggcATQAaAdApAHQApAHAtAKQAwAKArAOIAUAHQARAiAhA2IABAAQAGAKAEAgQAEAvgDA5IgWgEgAAr0CIAPgIIgPAIgAjj4IIAAAFQABAPAFAHQAHAKAQgGIAAAAIAFgCQAsgXgRgxIAPgEIgPAEIAAgBQgLgggbAAIAAAAIgBAAQgHAAgIACIgBABIgBAAIgBAAIACgOIgCAOIABAAIABAAIABgBQAIgCAHAAIABAAIAAAAQAbAAALAgIAAABQgUALgpgHQABgRADgRQgDARgBARQgBATABAUgAlL4dQADgfAYgKIABAAIAAAAIAAgBIAFgBIAAAAIABAAIABAAIAAAAQAFAAAEADIAAABQAPAMAGAPQgeAMggAAIgDAAgAkK4pIAAAAgAjf5RIAAAAg");
	this.shape_4.setTransform(160.3,182.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF00").s().p("AhlLYIgbgLQgpgSgwgGQgtgHgwgCQgugCgugBQgaAAgWAIQgXAIgTAQIAEgdQACgXAAgZIgChiQgBgzgIgqQgJgwgDgvQgDgmgKg6IgFghIDBkhIARANQAeAZAnASQAoARAsAJQAtAKAvABQAxABAogKQAlgJAWgTQAGAvAAAwQAAAygZAmIg0BNQgZApgeAcIgBABIgBABQgfAcgbAfQAbgfAfgcIABgBIABgBIAAACQgLApACAwQACAzgFAtIgMBgQgHAwADAyIABAoIgYgKgAjmnoQgSgKgSgMQgmgagNgpQgJgfAGgiIABgHQAIgkAZgdQALgLAMgLQApgEAqAGIAbAEIAGABIABAAIA7AHIBfAIQAuADAxABIBiACQAvABAtAHIAWAEIAmAGQALAEAOACQAYADAegFQAKgBAKAFQAiARAqgIQgUAZg7ANQgWAEgagBIgDAAQgjgBAAgSIAAgEQgSAGgOADQgQAEgPAEQgcAKgbAOQgmAUgwARQgwARhBAjQg+AkgQgGQgPgGgwAGQgwAGg4ARIgfgQgAgRqAQAiAAAjgHIAEAAIABgBIAFgBIBegUQAugJAxgCIABAAIABAAIADAAIAAAAIAAAAQAUAAARAHQgRgHgUAAIAAAAIAAAAIgDAAIgBAAIgBAAQgxACguAJIheAUIgFABIgBABIgEAAQgjAHgiAAIgBAAIAAAAIgGAAIAAAAIgGAAIAGAAIAAAAIAGAAIAAAAIABAAgAGZn2QgegSgagMIgKgFQgNgJgMgdQgGgQgFgVIAAAAIgBAAIgGgaQAPgEAQgEQAOgDASgGIAAAEQAAASAjABIADAAQgGA2AkAWQAHAEADAJQALAkgTAbQgFgKgTgMgAGRp4IAAAAg");
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

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCC97").s().p("AhRbMQgKAZgkgYQgOgKgFgJIgBgCQgCgDAAgEQAAgNAcgKQgcAKAAANQAAAEACADQgLgBgIgEQgQgJgHgIQgGgGAAgGQAAgKAUgIIACAAIgCAAQgUAIAAAKQAAAGAGAGIgHAFQghABgMgUQgHgKgCgJQgCgFAAgFQAAgWAngDQgnADAAAWQAAAFACAFQgRALgSgOQgQgNgEgKIgBgHQAAgQAegIQgeAIAAAQIABAHIgMAEQglgQgKguQgEgUAOgLQAkgcAxANQApAMAgAkQAkAAAggDQAwgFAtgTQAlgQAngcQAhgYAdghQgGgdgMgTQgLgTgKgZQgRgtgYgmIgthSQgXgogQguQgRgvgagnIg0hOQgZgngggiQghgjgWghQgLgSgRgWQgcgkgMguQgMgtgOgtQgOgugGgvQgFgvAGgqQAWgIAaAAQAuABAuACQAwACAtAHQAwAGApASIAbALQAKAngIAuQgJAugPAsQgMAkgHAjQAKArAkAaQAPALANANQAhAdAdAoQAaAkAWApQAXArAIAwQAIAsALAtQAMAvAMAtQgBAuANAtIAbBYQAPAtAUAsIAnBTQAUApgMAvQgMAyg2ACQgzABgrgQQgtgRgmAjQggAfgmAWQgSAKgPAAQgYAAgRgagADpYbQgDAJgNADQANgDADgJQAGgOAAgOQAAgegYgeQAYAeAAAeQAAAOgGAOgAjpLmQgSgNAAgRQAAgGADgGQgDAGAAAGQAAARASANgAhMLLIADgRIgDARgAj6aBIAAAAgAkxZnIAAAAgAgDj5QgvgBgtgKQgsgJgogTQgngSgegZIgRgNQgXgTgXgUQAcgNArgyQAqgzAKggQAKggAFgiIAMhQQAJgwgJgpIAfAQQA4gRAwgGQAugGAQAGQAPAGBBgkQBAgkAwgQQAwgRAmgUQAbgPAcgJIAHAaIAAAAIAAAAIAAAAIAAAAIg4B4IhNB6QhEBrgdBLQgeBKAdBmQgWAVglAJQgmAJgsAAIgHAAgAFqvQQgtgHgvgBIhigCQgxgBgugDIhfgIIg7gHIAAAAIgHgBQAIgVAagQQgaAQgIAVIgbgEQgqgGgpAEQAUgTAXgPQAlgbASgaIAug/QAMg4hVgDQAmAAAdgUQAKgIAEgPQgEAPgKAIQgdAUgmAAIgDAAQgPAAgQgDQg3gMgngfQgRgNgLgTQAwgNA0gZQg0AZgwANQgNgXgFgdQgCgMgLgIIgIgGIgigbIgLgKIAQgGQAXgMAXgVQALgJAHgLQASgaACgjQAFgYgIgTQgGgPgPgMIAAgBQgEgDgFAAIAAAAIgBAAIgBAAIAAAAIgFABIAAABIAAAAIgBAAQgYAKgDAfIgPgBQAGghALgeQAPgmAggeQAfgeAogdQAogKAxACQAvABAjAcQAiAbAdAfQAcAdAPAtQAPAuAPApQAPAnAFAvQAGA1gTAkQgRAggcATQAaAdApAHQApAHAtAKQAwAKArAOIAUAHQARAiAhA2IABAAQAGAKAEAgQAEAvgDA5IgWgEgAAr0CIAPgIIgPAIgAjj4vQgBATABAUIAAAFQABAPAFAHQAHAKAQgGIAAAAIAFgCQAsgXgRgxIAPgEIgPAEIAAgBQgLgggbAAIAAAAIgBAAQgHAAgIACIgBABIgBAAIgBAAIACgOIgCAOIABAAIABAAIABgBQAIgCAHAAIABAAIAAAAQAbAAALAgIAAABQgUALgpgHQABgRADgRQgDARgBARIAAAAgAlL4dQADgfAYgKIABAAIAAAAIAAgBIAFgBIAAAAIABAAIABAAIAAAAQAFAAAEADIAAABQAPAMAGAPQgeAMggAAIgDAAgAkK4pIAAAAgAjf5RIAAAAg");
	this.shape_9.setTransform(160.3,182.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_9},{t:this.shape_5},{t:this.shape_6},{t:this.shape_7},{t:this.shape_8}]},1).wait(20));

	// leg
	this.instance_2 = new lib.static_stace_leg("synched",0);
	this.instance_2.setTransform(126.3,164.5,1,1,-45,0,0,95.8,33.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,scaleY:1,rotation:-40.4,x:126.4,y:163.8},1).to({scaleX:1,scaleY:1,rotation:0,x:127.5,y:157.6},9).to({regY:33.5,rotation:-30,x:127.3,y:161.2},10).wait(1));

	// arm
	this.instance_3 = new lib.static_stace_arm("synched",0);
	this.instance_3.setTransform(152.8,76.2,1,1,0,0,0,148.3,26.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-5.5},1).to({regY:26.7,scaleX:1,scaleY:1,rotation:-55.8},9).to({regY:26.6,scaleX:1,scaleY:1,rotation:-3.8,y:76.3},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.5,-40.1,245.1,400.5);


(lib.anim_stace_control = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"start":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		playSound("carmen_blocks");
	}
	this.frame_20 = function() {
		this.gotoAndPlay("start");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(16).call(this.frame_20).wait(1));

	// hair
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AlpCxQgLAAgLgBQgxgCgogaQghgWgsgKQgvgKgvAAQgxgBglAXQgXAOgTASQAdg1BDgdQA+gcA/AdQAzAXBAAUQA2AQAxgaQAWgMAigSQAMgGALgPQAdgoAFgzQAFg7gDg9QgDg4AZgsQAZgrAogdQAmgcAzgHQASgCAUABQAfgNAygIQAwgIAtALQAvAKAiAdQAgAaAUAsQAUAqAHAwQAHAvAHAwQAGAwAIApQAJAuAPAsQAHAUAKAQQAPAVAWAOQAiAXA0AAQAmABAdgLQALgDAKgFQAngUAZgoQAXgkAHguQACgMgCgLQAGgjAgAoQAcAkABAxQAAAKgBAJQgDAngPAgQgFAJgFAKQgOARgPAOQgPAOgRAKQgmAYghAWQgnAagvADQgyADgvgJQgxgJgkgaQgpgeAAgmQgLgggLghQgNgmgOgvQgNgrgGgtQgGgxgIgsQgKgwgRgmQgQgkgZgtQgWgqgqgWQgrgWguAQQgwAUgoAaQgnAagVAlQgVAngBAxQgBAyADAwQAEAygTAlQgRAjgbAiQgeAlgtAJQgeAHgcANgALnDPQgJATgJASQgHAOgGAOQgTApgmAYQglAYgxAKQguAKgwACQgxACgugNQgtgOgmgbQgjgagUgpQgWgsgDgyQgEgtgHgvQgHgvABguQAAgwgCgvQAAgGAAgGQgBgNAAgNQgegqgagkQgaglgsgUQgngRghgNQgoAegfAdQggAegPAnQgLAdgGAhQgCALgBAMQgFAwACAxQABAMAEAMQAXgMAXgTQAKgJAIgLQgRgIgLgPQgTgZgBgsQgHAAgIgBAiOAlQAQAOASANQAEADAEADQALAJACALQAFAeANAWAiJAVQgIAEgIADQAFAEAGAFQgNAtgVAfQgZAmglAYQgUANgTAGQgIgCgHgCQgigJgjgEAhsBAQgHAjgUAlQgXAsgpALQgnALgngI");
	this.shape.setTransform(139.3,38.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEFF97").s().p("AF8F0QgtgOgmgbQgjgagUgpQgWgsgDgyQgEgtgHgvQgHgvABguQAAgwgCgvIAAgMIgBgaIg4hOQgaglgsgUQgngRghgNQgoAegfAdQggAegPAnQgLAdgGAhIgDAXQgDAiAAAjIAAAcQABAMAEAMQgEgMgBgMIAAgcQAAgjADgiIADgXIAPABIgBAJQAAARAFAPQAFAPALANIAKAKQAIAHAKAGQgRgIgLgPQALAPARAIQgIALgKAJQgXATgXAMIgQAHIALAJIAiAbQgHAjgUAlQgXAsgpALQgnALgngIQATgGAUgNQAlgYAZgmQAVgfANgtQgNAtgVAfQgZAmglAYQgUANgTAGIgPgEQgigJgjgEQAcgNAegHQAtgJAeglQAbgiARgjQAQgfAAgoIgBgQQgCglAAgnIAAgWQABgxAVgnQAVglAngaQAogaAwgUIABgBIAAAAIAAAAIAAAAIABAAQASgGARAAIAAAAIABAAQAaAAAYAMIABABQAqAWAWAqQAZAtAQAkQARAmAKAwQAIAsAGAxQAGAtANArIAbBVIAWBBIAAABQAAAmApAdQAkAaAxAJIACABIAEAAQAgAFAhAAIAAAAIAAAAIAUAAIAGAAQAvgDAngaIBHguQARgKAPgOQAPgOAOgRQgOARgPAOQgPAOgRAKIhHAuQgnAagvADIgGAAIgUAAIAAAAIAAAAQghAAgggFIgEAAIgCgBQgxgJgkgaQgpgdAAgmIAAgBIgWhBIgbhVQgNgrgGgtQgGgxgIgsQgKgwgRgmQgQgkgZgtQgWgqgqgWIgBgBQgYgMgaAAIgBAAIAAAAQgRAAgSAGIgBAAIAAAAIAAAAIAAAAIgBABQgwAUgoAaQgnAagVAlQgVAngBAxIAAAWQAAAnACAlIABAQQAAAogQAfQgRAjgbAiQgeAlgtAJQgeAHgcANIgWgBQgxgCgogaQghgWgsgKQgvgKgvAAQgxgBglAXQgXAOgTASQAdg1BDgdQA+gcA/AdQAzAXBAAUQA2AQAxgaIA4geQAMgGALgPQAdgoAFgzQAFg7gDg9QgDg4AZgsQAZgrAogdQAmgcAzgHQASgCAUABQAfgNAygIQAwgIAtALQAvAKAiAdQAgAaAUAsQAUAqAHAwIAOBfQAGAwAIApQAJAuAPAsQAHAUAKAQQAPAVAWAOQAiAXA0AAQAmABAdgLQALgDAKgFQAngUAZgoQAXgkAHguQACgMgCgLQAGgjAgAoQAcAkABAxIgBATQgDAngPAgIgKATIgSAlIgNAcQgTApgmAYQglAYgxAKQguAKgwACIgNAAQgqAAgogLgAhJgeIAAAAg");
	this.shape_1.setTransform(139.3,38.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},19).wait(1));

	// forward arm
	this.instance = new lib.static_stace_arm2("synched",0);
	this.instance.setTransform(182.6,59.1,1,1,0,0,0,9.8,7.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:9.7,rotation:3},1).to({regX:9.8,regY:7.8,rotation:30,y:59.2},9).to({regX:9.7,regY:7.7,scaleX:1,scaleY:1,rotation:9.3,x:182.5,y:59.1},10).wait(1));

	// body
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.1,1,1).p("AAhgaQArgMgOApAhBgHQArgHgRAs");
	this.shape_2.setTransform(134.1,30.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(0.1,1,1).p("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");
	this.shape_3.setTransform(166.9,182.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC97").s().p("AhRbMQgKAZgkgYQgOgKgFgJIgBgCQgCgDAAgEQAAgNAcgKQgcAKAAANQAAAEACADQgLgBgIgEQgQgJgHgIQgGgGAAgGQAAgKAUgIIACAAIgCAAQgUAIAAAKQAAAGAGAGIgHAFQghABgMgUQgHgKgCgJQgCgFAAgFQAAgWAngDQgnADAAAWQAAAFACAFQgRALgSgOQgQgNgEgKIgBgHQAAgQAegIQgeAIAAAQIABAHIgMAEQglgQgKguQgEgUAOgLQAkgcAxANQApAMAgAkQAkAAAggDQAwgFAtgTQAlgQAngcQAhgYAdghQgGgdgMgTQgLgTgKgZQgRgtgYgmIgthSQgXgogQguQgRgvgagnIg0hOQgZgngggiQghgjgWghQgLgSgRgWQgcgkgMguQgMgtgOgtQgOgugGgvQgFgvAGgqQAWgIAaAAQAuABAuACQAwACAtAHQAwAGApASIAbALQAKAngIAuQgJAugPAsQgMAkgHAjIgDARIADgRQAKArAkAaQAPALANANQAhAdAdAoQAaAkAWApQAXArAIAwQAIAsALAtQAMAvAMAtQgBAuANAtIAbBYQAPAtAUAsIAnBTQAUApgMAvQgMAyg2ACQgzABgrgQQgtgRgmAjQggAfgmAWQgSAKgPAAQgYAAgRgagADpYbQgDAJgNADQANgDADgJQAGgOAAgOQAAgegYgeQAYAeAAAeQAAAOgGAOgAjpLmQgSgNAAgRQAAgGADgGQgDAGAAAGQAAARASANgAj6aBIAAAAgAgDj5QgvgBgtgKQgsgJgogTQgngSgegZIgRgNQgXgTgXgUQAcgNArgyQAqgzAKggQAKggAFgiIAMhQQAJgwgJgpIAfAQQA4gRAwgGQAugGAQAGQAPAGBBgkQBAgkAwgQQAwgRAmgUQAbgPAcgJIAHAaIAAAAIAAAAIAAAAIAAAAIg4B4IhNB6QhEBrgdBLQgeBKAdBmQgWAVglAJQgmAJgsAAIgHAAgAFqvQQgtgHgvgBIhigCQgxgBgugDIhfgIIg7gHIAAAAIgHgBQAIgVAagQQgaAQgIAVIgbgEQgqgGgpAEQAUgTAXgPQAlgbASgaIAug/QAMg4hVgDQAmAAAdgUQAKgIAEgPQgEAPgKAIQgdAUgmAAIgDAAQgPAAgQgDQg3gMgngfQgRgNgLgTQAwgNA0gZQg0AZgwANQgNgXgFgdQgCgMgLgIIgIgGIgigbIgLgKIAQgGQAXgMAXgVQALgJAHgLQASgaACgjQAFgYgIgTQgGgPgPgMIAAgBQgEgDgFAAIAAAAIgBAAIgGABIAAABIAAAAIgBAAQgYAKgDAfIgPgBQAGghALgeQAPgmAggeQAfgeAogdQAogKAxACQAvABAjAcQAiAbAdAfQAcAdAPAtQAPAuAPApQAPAnAFAvQAGA1gTAkQgRAggcATQAaAdApAHQApAHAtAKQAwAKArAOIAUAHQARAiAhA2IABAAQAGAKAEAgQAEAvgDA5IgWgEgAAr0CIAPgIIgPAIgAjj4vQgBATABAUIAAAFQABAPAFAHQAHAKAQgGIAAAAIAFgCQAsgXgRgxIAPgEIgPAEIAAgBQgLgggbAAIAAAAIgBAAQgHAAgIACIgBABIgBAAIgBAAIABAAIABAAIABgBQAIgCAHAAIABAAIAAAAQAbAAALAgIAAABQgUALgpgHQABgRADgRQgDARgBARIAAAAgAjf5RIACgOIgCAOgAlL4dQADgfAYgKIABAAIAAAAIAAgBIAGgBIABAAIAAAAQAFAAAEADIAAABQAPAMAGAPQgeAMggAAIgDAAgAim4zIAAAAg");
	this.shape_4.setTransform(160.3,182.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF00").s().p("AhlLYIgbgLQgpgSgwgGQgtgHgwgCQgugCgugBQgaAAgWAIQgXAIgTAQIAEgdQACgXAAgZIgChiQgBgzgIgqQgJgwgDgvQgDgmgKg6IgFghIDBkhIARANQAeAZAnASQAoARAsAJQAtAKAvABQAxABAogKQAlgJAWgTQAGAvAAAwQAAAygZAmIg0BNQgZApgeAcIgBABIgBABQgfAcgbAfQAbgfAfgcIABgBIABgBIAAACQgLApACAwQACAzgFAtIgMBgQgHAwADAyIABAoIgYgKgAgyE9IAAAAgAjmnoQgSgKgSgMQgmgagNgpQgJgfAGgiIABgHQAIgkAZgdQALgLAMgLQApgEAqAGIAbAEIAGABIABAAIA7AHIBfAIQAuADAxABIBiACQAvABAtAHIAWAEIAmAGQALAEAOACQAYADAegFQAKgBAKAFQAiARAqgIQgUAZg7ANQgWAEgagBIgDAAQgjgBAAgSIAAgEQgSAGgOADQgQAEgPAEQgcAKgbAOQgmAUgwARQgwARhBAjQg+AkgQgGQgPgGgwAGQgwAGg4ARIgfgQgAgRqAQAiAAAjgHIAEAAIABgBIAFgBIBegUQAugJAxgCIABAAIABAAIADAAIAAAAIAAAAQAUAAARAHQgRgHgUAAIAAAAIAAAAIgDAAIgBAAIgBAAQgxACguAJIheAUIgFABIgBABIgEAAQgjAHgiAAIgBAAIAAAAIgGAAIAAAAIgGAAIAGAAIAAAAIAGAAIAAAAIABAAgAGZn2QgegSgagMIgKgFQgNgJgMgdQgGgQgFgVIAAAAIgBAAIgGgaQAPgEAQgEQAOgDASgGIAAAEQAAASAjABIADAAQgGA2AkAWQAHAEADAJQALAkgTAbQgFgKgTgMgAGRp4IAAAAg");
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

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCC97").s().p("AhRbMQgKAZgkgYQgOgKgFgJIgBgCQgCgDAAgEQAAgNAcgKQgcAKAAANQAAAEACADQgLgBgIgEQgQgJgHgIQgGgGAAgGQAAgKAUgIIACAAIgCAAQgUAIAAAKQAAAGAGAGIgHAFQghABgMgUQgHgKgCgJQgCgFAAgFQAAgWAngDQgnADAAAWQAAAFACAFQgRALgSgOQgQgNgEgKIgBgHQAAgQAegIQgeAIAAAQIABAHIgMAEQglgQgKguQgEgUAOgLQAkgcAxANQApAMAgAkQAkAAAggDQAwgFAtgTQAlgQAngcQAhgYAdghQgGgdgMgTQgLgTgKgZQgRgtgYgmIgthSQgXgogQguQgRgvgagnIg0hOQgZgngggiQghgjgWghQgLgSgRgWQgcgkgMguQgMgtgOgtQgOgugGgvQgFgvAGgqQAWgIAaAAQAuABAuACQAwACAtAHQAwAGApASIAbALQAKAngIAuQgJAugPAsQgMAkgHAjIgDARIADgRQAKArAkAaQAPALANANQAhAdAdAoQAaAkAWApQAXArAIAwQAIAsALAtQAMAvAMAtQgBAuANAtIAbBYQAPAtAUAsIAnBTQAUApgMAvQgMAyg2ACQgzABgrgQQgtgRgmAjQggAfgmAWQgSAKgPAAQgYAAgRgagADpYbQgDAJgNADQANgDADgJQAGgOAAgOQAAgegYgeQAYAeAAAeQAAAOgGAOgAjpLmQgSgNAAgRQAAgGADgGQgDAGAAAGQAAARASANgAj6aBIAAAAgAgDj5QgvgBgtgKQgsgJgogTQgngSgegZIgRgNQgXgTgXgUQAcgNArgyQAqgzAKggQAKggAFgiIAMhQQAJgwgJgpIAfAQQA4gRAwgGQAugGAQAGQAPAGBBgkQBAgkAwgQQAwgRAmgUQAbgPAcgJIAHAaIAAAAIAAAAIAAAAIAAAAIg4B4IhNB6QhEBrgdBLQgeBKAdBmQgWAVglAJQgmAJgsAAIgHAAgAFqvQQgtgHgvgBIhigCQgxgBgugDIhfgIIg7gHIAAAAIgHgBQAIgVAagQQgaAQgIAVIgbgEQgqgGgpAEQAUgTAXgPQAlgbASgaIAug/QAMg4hVgDQAmAAAdgUQAKgIAEgPQgEAPgKAIQgdAUgmAAIgDAAQgPAAgQgDQg3gMgngfQgRgNgLgTQAwgNA0gZQg0AZgwANQgNgXgFgdQgCgMgLgIIgIgGIgigbIgLgKIAQgGQAXgMAXgVQALgJAHgLQASgaACgjQAFgYgIgTQgGgPgPgMIAAgBQgEgDgFAAIAAAAIgBAAIgBAAIAAAAIgFABIAAABIAAAAIgBAAQgYAKgDAfIgPgBQAGghALgeQAPgmAggeQAfgeAogdQAogKAxACQAvABAjAcQAiAbAdAfQAcAdAPAtQAPAuAPApQAPAnAFAvQAGA1gTAkQgRAggcATQAaAdApAHQApAHAtAKQAwAKArAOIAUAHQARAiAhA2IABAAQAGAKAEAgQAEAvgDA5IgWgEgAAr0CIAPgIIgPAIgAjj4vQgBATABAUIAAAFQABAPAFAHQAHAKAQgGIAAAAIAFgCQAsgXgRgxIAPgEIgPAEIAAgBQgLgggbAAIAAAAIgBAAQgHAAgIACIgBABIgBAAIgBAAIACgOIgCAOIABAAIABAAIABgBQAIgCAHAAIABAAIAAAAQAbAAALAgIAAABQgUALgpgHQABgRADgRQgDARgBARIAAAAgAlL4dQADgfAYgKIABAAIAAAAIAAgBIAFgBIAAAAIABAAIABAAIAAAAQAFAAAEADIAAABQAPAMAGAPQgeAMggAAIgDAAgAkK4pIAAAAgAjf5RIAAAAg");
	this.shape_9.setTransform(160.3,182.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_9},{t:this.shape_5},{t:this.shape_6},{t:this.shape_7},{t:this.shape_8}]},1).wait(20));

	// leg
	this.instance_1 = new lib.static_stace_leg("synched",0);
	this.instance_1.setTransform(126.3,164.5,1,1,-45,0,0,95.8,33.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,rotation:-40.4,x:126.4,y:163.8},1).to({scaleX:1,scaleY:1,rotation:0,x:127.5,y:157.6},9).to({regY:33.5,rotation:-30,x:127.3,y:161.2},10).wait(1));

	// arm
	this.instance_2 = new lib.static_stace_arm("synched",0);
	this.instance_2.setTransform(152.8,76.2,1,1,0,0,0,148.3,26.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-5.5},1).to({regY:26.7,scaleX:1,scaleY:1,rotation:-55.8},9).to({regY:26.6,scaleX:1,scaleY:1,rotation:-3.8,y:76.3},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.5,-1,245.1,361.4);


(lib.anim_ball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{ballStable:0,ballStart:1});

	// timeline functions:
	this.frame_0 = function() {
		playSound("ball_passes");
		this.stop();
	}
	this.frame_2 = function() {
		playSound("ball_passes");
	}
	this.frame_11 = function() {
		this.gotoAndPlay("ballStart");
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


(lib.Diagramcontrols = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"subject control":58,"verb control":135,"complement control":184,"review control":270});

	// timeline functions:
	this.frame_3 = function() {
		playSound("thesubjectstaceisanoun");
	}
	this.frame_58 = function() {
		playSound("stace");
	}
	this.frame_72 = function() {
		playSound("cowbell_3times");
	}
	this.frame_108 = function() {
		playSound("stacecontrols");
	}
	this.frame_122 = function() {
		playSound("cowbell_3times");
	}
	this.frame_158 = function() {
		playSound("stacecontrolstheball");
	}
	this.frame_188 = function() {
		playSound("cowbell_3times");
	}
	this.frame_228 = function() {
		playSound("carmen_blocks");
	}
	this.frame_249 = function() {
		playSound("ball_kick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(3).call(this.frame_3).wait(55).call(this.frame_58).wait(14).call(this.frame_72).wait(36).call(this.frame_108).wait(14).call(this.frame_122).wait(36).call(this.frame_158).wait(30).call(this.frame_188).wait(40).call(this.frame_228).wait(21).call(this.frame_249).wait(81));

	// pen
	this.pen = new lib.anim_pencil();
	this.pen.setTransform(31.9,-28.2);

	this.timeline.addTween(cjs.Tween.get(this.pen).to({regX:-7.2,regY:352,x:-490.4,y:577.4},4).to({x:-27.9,y:583.8},10).to({x:-378.4,y:472.3},5).to({y:652.6},6).to({x:-173.5,y:474.1},5).to({x:-172,y:583.8},7).to({x:27.8,y:370},7).to({_off:true},1).wait(183).to({_off:false,regX:164.1,regY:174.6,x:251,y:169.9},0).to({x:1,y:407.1},7).to({x:89.4,y:492.5},7).to({x:271.7,y:426.8},7).to({_off:true},1).wait(80));

	// textClips
	this.instance = new lib.Wordswho();
	this.instance.setTransform(-431.6,524.5,1,1,0,0,0,51.8,10.4);

	this.instance_1 = new lib.Wordsverb();
	this.instance_1.setTransform(-261.9,430.1,1,1,0,0,0,50.7,14.6);

	this.instance_2 = new lib.Wordscomplement();
	this.instance_2.setTransform(-86,430.1,1,1,0,0,0,50.7,14.6);

	this.instance_3 = new lib.Wordssubject();
	this.instance_3.setTransform(-434.9,431.8,1,1,0,0,0,50.7,19.7);

	this.instance_4 = new lib.Wordsverb();
	this.instance_4.setTransform(-261.9,430.1,1,1,0,0,0,50.7,14.6);

	this.instance_5 = new lib.Wordscomplement();
	this.instance_5.setTransform(-86,430.1,1,1,0,0,0,50.7,14.6);

	this.instance_6 = new lib.Wordssubject();
	this.instance_6.setTransform(-434.9,431.8,1,1,0,0,0,50.7,19.7);

	this.instance_7 = new lib.staticperiod("synched",0);
	this.instance_7.setTransform(-146.2,705.2,1,1,0,0,0,6.9,17.3);

	this.instance_8 = new lib.Wordsball();
	this.instance_8.setTransform(-166.7,716.3,1,1,0,0,0,73.5,17.7);

	this.instance_9 = new lib.Wordsthe();
	this.instance_9.setTransform(-206.8,716.3,1,1,0,0,0,73.5,22.9);

	this.instance_10 = new lib.Wordscontrols();
	this.instance_10.setTransform(-268.7,715.4,1,1,0,0,0,73.5,22.9);

	this.instance_11 = new lib.Wordsstace();
	this.instance_11.setTransform(-341.4,716.3,1,1,0,0,0,73.5,22.9);

	this.instance_12 = new lib.Wordsdoes();
	this.instance_12.setTransform(-266.4,504.6,1,1,0,0,0,73.5,10.4);

	this.instance_13 = new lib.WordsTowhat();
	this.instance_13.setTransform(-82.8,514.2,1,1,0,0,0,51.8,18.7);

	this.instance_14 = new lib.Wordsthe();
	this.instance_14.setTransform(-206.8,716.3,1,1,0,0,0,73.5,22.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},25).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},26).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9,p:{regY:22.9,rotation:0,x:-206.8,y:716.3}},{t:this.instance_8},{t:this.instance_7}]},7).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9,p:{regY:22.9,rotation:0,x:-206.8,y:716.3}},{t:this.instance_8},{t:this.instance_7}]},14).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9,p:{regY:22.9,rotation:0,x:-206.8,y:716.3}},{t:this.instance_8},{t:this.instance_7},{t:this.instance_12}]},23).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9,p:{regY:22.9,rotation:0,x:-206.8,y:716.3}},{t:this.instance_8},{t:this.instance_7}]},13).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9,p:{regY:22.9,rotation:0,x:-206.8,y:716.3}},{t:this.instance_8},{t:this.instance_7}]},14).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9,p:{regY:22.9,rotation:0,x:-206.8,y:716.3}},{t:this.instance_8},{t:this.instance_7}]},14).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9,p:{regY:22.9,rotation:0,x:-206.8,y:716.3}},{t:this.instance_8},{t:this.instance_7},{t:this.instance_13}]},7).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9,p:{regY:22.9,rotation:0,x:-206.8,y:716.3}},{t:this.instance_8},{t:this.instance_7}]},25).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9,p:{regY:22.9,rotation:0,x:-206.8,y:716.3}},{t:this.instance_8},{t:this.instance_7}]},20).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9,p:{regY:22.9,rotation:0,x:-206.8,y:716.3}},{t:this.instance_8},{t:this.instance_7}]},24).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9,p:{regY:22.9,rotation:0,x:-206.8,y:716.3}},{t:this.instance_8},{t:this.instance_7}]},3).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance_11},{t:this.instance_10},{t:this.instance_14},{t:this.instance_8},{t:this.instance_7},{t:this.instance_9,p:{regY:14.6,rotation:45,x:-83,y:620.2}}]},35).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance_11},{t:this.instance_10},{t:this.instance_14},{t:this.instance_8},{t:this.instance_7},{t:this.instance_9,p:{regY:14.6,rotation:45,x:-83,y:620.2}}]},9).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance_11},{t:this.instance_10},{t:this.instance_14},{t:this.instance_8},{t:this.instance_7},{t:this.instance_9,p:{regY:14.6,rotation:45,x:-83,y:620.2}}]},6).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance_11},{t:this.instance_10},{t:this.instance_14},{t:this.instance_8},{t:this.instance_7},{t:this.instance_9,p:{regY:14.6,rotation:45,x:-83,y:620.2}}]},5).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance_11},{t:this.instance_10},{t:this.instance_14},{t:this.instance_8},{t:this.instance_7},{t:this.instance_9,p:{regY:14.6,rotation:45,x:-83,y:620.2}}]},5).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance_11},{t:this.instance_10},{t:this.instance_14},{t:this.instance_8},{t:this.instance_7},{t:this.instance_9,p:{regY:14.6,rotation:45,x:-83,y:620.2}}]},8).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance_11},{t:this.instance_10},{t:this.instance_14},{t:this.instance_8},{t:this.instance_7},{t:this.instance_9,p:{regY:14.6,rotation:45,x:-83,y:620.2}}]},8).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance_11},{t:this.instance_10},{t:this.instance_14},{t:this.instance_8},{t:this.instance_7},{t:this.instance_9,p:{regY:14.6,rotation:45,x:-83,y:620.2}}]},7).wait(32));

	// only thing visible (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AL8M+IAA6HIZsAMIAAaHgEglnANIIAA6HMAxiAAAIAAaHg");
	mask.setTransform(-248,493.2);

	// images
	this.instance_15 = new lib.anim_stace_control();
	this.instance_15.setTransform(-428.2,515.8,0.262,0.262,0,0,180,126,160);

	this.instance_16 = new lib.Wordsstace();
	this.instance_16.setTransform(-425.5,514,1,1,0,0,0,73.5,14.6);

	this.instance_17 = new lib.anim_stace_controlball();
	this.instance_17.setTransform(-266.9,514.9,0.304,0.304,0,0,180,126.2,160.2);

	this.instance_18 = new lib.Wordscontrols();
	this.instance_18.setTransform(-262.7,515.5,1,1,0,0,0,73.5,14.6);

	this.instance_19 = new lib.anim_ball();
	this.instance_19.setTransform(-86.8,510,1,1,0,0,0,-12.6,36.6);

	this.instance_20 = new lib.Wordsball();
	this.instance_20.setTransform(-86.6,516.9,1,1,0,0,0,73.5,9.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009933").s().p("AgIBEQgCgDAAgFIAAh3QgBgGAEgDQAEgDADAAQAFAAADADQADADAAAGIAAByQAAARgLAAQgEAAgEgEg");
	this.shape.setTransform(-74.1,517.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009933").s().p("AgIBEQgCgDAAgFIAAh3QgBgGAEgDQAEgDADAAQAFAAADADQADADAAAGIAAByQAAARgLAAQgEAAgEgEg");
	this.shape_1.setTransform(-79.1,517.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009933").s().p("AAVAoIgPAGQgGACgCAAQgVAAgLgLQgKgMAAgWQAAgUAPgOQAQgQAUAAQAIAAALAFQANAGAAAHQAAADgCADIgBAJIgBALQAAAPADAIIAEAJIADAIQAAAFgDADQgEADgEAAQgEAAgJgIgAgLgRQgJAKAAALQAAALAEAGQAEAGAJAAQADAAAFgCQAFgCAEgDQgCgUAAgKIAAgGIABgIIgDgCIgCAAQgKAAgJAJg");
	this.shape_2.setTransform(-86.4,519.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#009933").s().p("AgZBCQgDADgFABQgFgBgDgDQgDgCAAgGIAAgGIAAgGIAAhiQAAgHADgEQAEgGAGAAQAJAAAAAKIAAADIAAAEIAAAiQAGgEAGgCQAGgBAEAAQAUgBANAPQAMAMAAAUQAAAVgOAOQgOAPgTAAQgMgBgLgEgAgJAAIgNAFIAAAmQAMAFAIAAQAKAAAHgIQAHgHAAgMQAAgLgGgHQgGgGgKAAQgDAAgGADg");
	this.shape_3.setTransform(-96.8,517.3);

	this.instance_15.mask = this.instance_16.mask = this.instance_17.mask = this.instance_18.mask = this.instance_19.mask = this.instance_20.mask = this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_15}]},58).to({state:[{t:this.instance_16}]},14).to({state:[{t:this.instance_15}]},16).to({state:[{t:this.instance_17},{t:this.instance_15}]},20).to({state:[{t:this.instance_18},{t:this.instance_15}]},14).to({state:[{t:this.instance_17},{t:this.instance_15}]},14).to({state:[{t:this.instance_17},{t:this.instance_19},{t:this.instance_15}]},32).to({state:[{t:this.instance_17},{t:this.instance_20},{t:this.instance_15}]},20).to({state:[{t:this.instance_17},{t:this.instance_19},{t:this.instance_15}]},14).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_17},{t:this.instance_15}]},10).to({state:[{t:this.instance_17},{t:this.instance_19},{t:this.instance_15}]},53).to({state:[{t:this.instance_17},{t:this.instance_15},{t:this.instance_19}]},5).to({state:[{t:this.instance_17},{t:this.instance_15},{t:this.instance_19}]},5).to({state:[{t:this.instance_17},{t:this.instance_19},{t:this.instance_16}]},8).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.instance_16}]},8).to({state:[{t:this.instance_20},{t:this.instance_18},{t:this.instance_16}]},7).wait(32));

	// diag bar
	this.instance_21 = new lib.static_bar();
	this.instance_21.setTransform(-155.4,580.6,1,1,-30,0,0,-0.1,-1.2);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(235).to({_off:false},0).to({scaleX:1.43,scaleY:45.92,rotation:-43.1,x:-155.8,y:581.2},7).wait(88));

	// right bar
	this.instance_22 = new lib.static_bar();
	this.instance_22.setTransform(-166.2,471.3,0.882,0.391,0,0,0,0.1,-1.2);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(30).to({_off:false},0).to({scaleX:1.18,scaleY:45.6,x:-164.7,y:465.4},7).wait(293));

	// left bar
	this.instance_23 = new lib.static_bar();
	this.instance_23.setTransform(-371.1,469.4,0.882,0.391,0,0,0,0.1,-1.2);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(19).to({_off:false},0).to({scaleX:1.18,scaleY:75.63,y:465.7},6).wait(305));

	// line1
	this.instance_24 = new lib.static_line("synched",0);
	this.instance_24.setTransform(-483.2,574.5,0.02,2.236,0,63.4,0,162.5,0.1);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(4).to({_off:false},0).to({regX:164,regY:1.6,scaleX:2.8,skewX:-116.6,x:-22,y:579.3},10).wait(316));

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
(lib.subject_scene5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene5:0,scene5repeat:305});

	// timeline functions:
	this.frame_0 = function() {
		this.btn_menu.addEventListener("click", openMenu.bind(this));
		this.btn_goNext.addEventListener("click", openNext.bind(this));
		this.btn_goBack.addEventListener("click", openPrev.bind(this));
		
		
		function openMenu(){
		
		 window.open ("../menu/menu.html","_self");
		}
		
		
		function openNext(){
		
		 window.open ("subject_scene6.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("subject_scene4.html","_self");
		}
	}
	this.frame_321 = function() {
		this.gotoAndPlay("scene5repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(321).call(this.frame_321).wait(1));

	// Layer 4
	this.instance = new lib.Diagramcontrols();
	this.instance.setTransform(457.9,-14.7,1,1,0,0,0,-66.2,329.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(322));

	// New Title
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("Ag9BIQgDgDAAgEIABgMIAAgMIABgRIAAgRIAAgQIgBgTIgBgRIgBgSQABgEADgEQADgDAGAAQAEAAAIALQAXAiARAXQAVAZAbAZIAAgMIgBgLQAAgngDgYIgDgKIgBgKQgBgLAKAAQAQAAABA9IgBAcIAAAfIgBAPQgCAJgIAAQgFAAgIgGQgmgkguhBIAAAVIgBATIABAXIAAAXQAAAZgKAAQgFAAgDgDg");
	this.shape.setTransform(294.4,28);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("AgoA3QgMgOgCgaQgCgMAAghIABgVIABgLQADgIAGABQAIAAAAAPIAAA2QAAA3AmAAQAlAAAAhdIAAgJIAAgIQAAgFACgFQACgFAFAAQAKAAAAANIAAALIAAAMQAABpg4AAQgbAAgOgQg");
	this.shape_1.setTransform(279.8,28.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066FF").s().p("AguA5QgTgRAAgaQAAgeATgbQAVgdAeAAQAfAAAOAOQAQAOAAAgQAAAegSAZQgUAdgdAAQgbAAgSgPgAgfgeQgPAVAAAXQAAASANALQANAKATAAQAUABAPgXQANgUAAgXQAAgXgKgJQgJgJgXAAQgVABgPAWg");
	this.shape_2.setTransform(265.2,28.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0066FF").s().p("Ag9BIQgDgDAAgEIABgMIAAgMIABgRIAAgRIAAgQIgBgTIgBgRIgBgSQABgEADgEQADgDAFAAQAGAAAHALQAWAiASAXQAVAZAbAZIAAgMIgBgLQAAgngDgYIgCgKIgCgKQgBgLALAAQAQAAAAA9IgBAcIAAAfIgCAPQgBAJgJAAQgEAAgHgGQgngkgvhBIAAAVIAAATIAAAXIAAAXQAAAZgJAAQgFAAgDgDg");
	this.shape_3.setTransform(250.1,28);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAdAvIgGgHIgQAHQgGADgDAAQgWAAgKgMQgJgLAAgYQAAgVAPgQQAQgQATAAQAIAAAKAEQANAGAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAIgBAMIgBATQAAALACAHIAGAQIACAFIAAABQAAAFgCABQgDADgDAAQgCAAgFgEgAgOgWQgLAMAAANQAAAQAGAHQAFAIALAAQAHAAAGgEQADgBAGgGQgDgXAAgMIABgIIABgKIgFgCIgEgBQgNgBgKAMg");
	this.shape_4.setTransform(231.8,30.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgZAzQgOgFAAgJQAAgEADgDQADgDAEAAQACAAAFAFQACACAIABIALACQAFAAAGgCQAJgDAAgGQAAgMgSgFIgHgCQgNgDgFgDQgHgEAAgKQAAgTASgJIAQgGIARgGQAEgBAEAAQAEAAADACQADADAAAEIABAIIABAIQAAAEgDADQgCACgEAAQgFAAgCgDQgCgDgBgHIgVAGQgNAGAAAJIAFABQAUAEAKAHQAPAIAAASQAAAPgNAIQgLAGgOAAQgNAAgLgEg");
	this.shape_5.setTransform(216.4,29.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgHBDQgDgDAAgEIgBgRIAAgQIABgWIABgUQAAgEADgDQACgCAEAAQACAAACACQADADAAAEIgBAUIgBAWIAAAQIABARQAAAEgDADQgCACgCAAQgEAAgCgCgAgFgyQgDgDAAgEQAAgFADgDQADgDADAAQAFAAADADQADADAAAFQAAAEgDADQgDADgFAAQgDAAgDgDg");
	this.shape_6.setTransform(209.5,27.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0066FF").s().p("AAKAcQgCgCAAgEIABgjIABgKQACgGAGAAQADAAADADQACACAAAEIAAAEIgBAEIAAAiQgBAIgIAAQgDAAgDgCgAgZAOIAAgQIABgTQAAgDACgDQACgCAEAAQADAAADACQACADAAADIAAASIAAAQIAAAEIAAAFQAAADgCADQgDACgDAAQgJAAAAgQg");
	this.shape_7.setTransform(196.6,23.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0066FF").s().p("AgeAoQgPgMAAgVQAAgWAMgQQANgSAUAAQAOAAAKAFQAMAGAAAOQAAAJgKAIIgUAIIgiARQAGAHAHAEQAIAEAIAAQAHAAAJgCQAKgDAEgFQADgFADAAQAEAAACACQADADAAADQAAAKgRAIQgOAGgOAAQgSAAgNgKgAgSgYQgHAJgEAQIAcgMQAPgIAHgGQgIgHgNAAQgKAAgIAIg");
	this.shape_8.setTransform(187.9,30.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0066FF").s().p("AgZAoQgOgMAAgUQAAgRANgUQAOgWAPAAQAJAAAMAEQAOAGAAAIQAAADgCADQgDADgDAAQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAAAgBgBIgEgDQgFgEgNAAQgHAAgJAQQgJAQAAAJQAAANAJAHQAHAGALAAQAFAAAGgDIALgGIAEgBQAEAAACADQADACAAAEQAAAHgPAGQgMAGgIAAQgRAAgNgMg");
	this.shape_9.setTransform(177.7,30.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0066FF").s().p("AAdAvIgGgHIgQAHQgGADgDAAQgWAAgKgMQgJgLAAgYQAAgVAPgQQAQgQATAAQAIAAAKAEQANAGAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAIgBAMIgBATQAAALACAHIAGAQIACAFIAAABQAAAFgCABQgDADgDAAQgCAAgFgEgAgOgWQgLAMAAANQAAAQAGAHQAFAIALAAQAHAAAGgEQADgBAGgGQgDgXAAgMIABgIIABgKIgFgCIgEgBQgNgBgKAMg");
	this.shape_10.setTransform(167.9,30.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0066FF").s().p("AgFBBQgCgDAAgDIAAgLIAAgKIgBg1IgVgBQgJgBAAgIQAAgEADgDQACgDAEAAIAUACIgBgNIAAgLQAAgEADgDQACgCAEAAQAHAAABANIABAJIgBAFIAAAGIANgCQAKAAADABQAFACAAAHQAAAEgCADQgDACgDAAIgFAAIgFAAIgMABIACA1IAAAEIAAAFQAAAUgKAAQgCAAgDgCg");
	this.shape_11.setTransform(158.6,28.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0066FF").s().p("AgkBAQgRgIgBgOQAAgEADgDQADgCAEAAQAEAAAEAFQAFAHADADQAIAFAPAAQAMAAANgGQAPgIABgPQAAgLgOgHQgLgGgPAAQgOAAgLgFQgNgHABgOQAAgRASgNQASgNARAAQAJAAALADQAPAEABAGQAAAIgJAAIgMgCIgPgCQgNAAgKAHQgKAHAAALQAAAHAOAEIASACQAVABALAMQAMAJAAAPQgBAWgUAOQgRALgWAAQgRAAgOgGg");
	this.shape_12.setTransform(147.7,28.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0066FF").s().p("AAKAcQgCgCAAgEIABgjIABgKQACgGAGAAQADAAADADQACACAAAEIAAAEIgBAEIAAAiQgBAIgIAAQgDAAgDgCgAgZAOIAAgQIABgTQAAgDACgDQACgCAEAAQADAAADACQACADAAADIAAASIAAAQIAAAEIAAAFQAAADgCADQgDACgDAAQgJAAAAgQg");
	this.shape_13.setTransform(136.6,23.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgEBBQgEgDAAgDIABgLIAAgKIgCg1IgUgBQgIgBgBgIQABgEACgDQADgDADAAIAUACIgBgNIAAgLQAAgEADgDQADgCADAAQAHAAABANIAAAJIAAAFIAAAGIAOgCQAJAAADABQAGACAAAHQAAAEgDADQgCACgEAAIgFAAIgEAAIgOABIACA1IAAAEIAAAFQABAUgKAAQgCAAgCgCg");
	this.shape_14.setTransform(122.7,28.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgZAoQgOgMAAgUQAAgRANgUQAOgWAPAAQAJAAAMAEQAOAGAAAIQAAADgCADQgDADgDAAQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAAAgBgBIgEgDQgFgEgNAAQgHAAgJAQQgJAQAAAJQAAANAJAHQAHAGALAAQAFAAAGgDIALgGIAEgBQAEAAACADQADACAAAEQAAAHgPAGQgMAGgIAAQgRAAgNgMg");
	this.shape_15.setTransform(113.4,30.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgeAoQgPgMAAgVQAAgWAMgQQANgSAUAAQAOAAAKAFQAMAGAAAOQAAAJgKAIIgUAIIgiARQAGAHAHAEQAIAEAIAAQAHAAAJgCQAKgDAEgFQADgFADAAQAEAAACACQADADAAADQAAAKgRAIQgOAGgOAAQgSAAgNgKgAgSgYQgHAJgEAQIAcgMQAPgIAHgGQgIgHgNAAQgKAAgIAIg");
	this.shape_16.setTransform(103.5,30.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgdBCIgBgFQAAgDADgDQADgDAEAAQAFAAAGAMIAFAKQAEAEADAAQAEAAADgGIACgJIgDg4IgDgxQAAgFADgDQACgEAEAAQAEAAADADQADACAAACIADA0IADA5QAAANgIAKQgIAMgMAAQgSAAgOgfgAAFhNQgDgDAAgFQAAgEADgDQAEgEAEAAQAFAAADAEQADADAAAEQAAAFgDADQgDADgFAAQgEAAgEgDg");
	this.shape_17.setTransform(93.4,30.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgbBFQgDAFgFAAQgDAAgCgDQgCgCgBgEIAAgHIAAgIIAAgdIgBgcIABgZIAAgaQAAgGACgEQAEgFAEgBQAIAAgBAJIAAADIAAAEIAAAVIgBAXQAIgGAIgCQAHgDAEAAQAUAAANAPQAMANgBAUQAAAWgOAPQgNAPgSAAQgOAAgMgGgAgOgDIgMAHIgBAQIAAAOIABAQIAMAFQAFACAIAAQALAAAJgJQAIgKAAgPQABgNgIgKQgHgHgNgBQgFAAgJAFg");
	this.shape_18.setTransform(85.1,27.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAUAsQgLAGgNAAQgNAAgIgFQgIgGgCgMQgEgYAAgSQAAgMADgRQABgIAIAAQAEAAADADQACACAAAEIgBAOIgBAOIABAZQABALACAHIAGACIAGABQAKAAAOgEIAAgTIAAgQQAAgUABgPQABgIAIAAQAEAAADADQADACAAAEIgCAjIAAASIAAAUIAAAGIABAHQAAAEgDACQgDADgEAAQgHAAgCgJg");
	this.shape_19.setTransform(74.3,30.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgZAzQgOgFAAgJQAAgEADgDQADgDAEAAQACAAAFAFQACACAIABIALACQAFAAAGgCQAJgDAAgGQAAgMgSgFIgHgCQgNgDgFgDQgHgEAAgKQAAgTASgJIAQgGIARgGQAEgBAEAAQAEAAADACQADADAAAEIABAIIABAIQAAAEgDADQgCACgEAAQgFAAgCgDQgCgDgBgHIgVAGQgNAGAAAJIAFABQAUAEAKAHQAPAIAAASQAAAPgNAIQgLAGgOAAQgNAAgLgEg");
	this.shape_20.setTransform(64.4,29.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgeAoQgPgMAAgVQAAgWAMgQQANgSAUAAQAOAAAKAFQAMAGAAAOQAAAJgKAIIgUAIIgiARQAGAHAHAEQAIAEAIAAQAHAAAJgCQAKgDAEgFQADgFADAAQAEAAACACQADADAAADQAAAKgRAIQgOAGgOAAQgSAAgNgKgAgSgYQgHAJgEAQIAcgMQAPgIAHgGQgIgHgNAAQgKAAgIAIg");
	this.shape_21.setTransform(49.3,30.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAZBFIgEgVIgCgWIAAgIIABgHQAAgPgJAAQgLAAgIAIQgFAGgIAPQAAAkgDAGQgDAGgFAAQgEAAgDgDQgDgCAAgEIABgEIABgOIAAgNIABhDIAAgPIgBgJIAAgJQAAgEACgCQADgDAEAAQAHAAACAIIABARIAAAUQgBAKAAAKIAAAIQAIgKAIgFQAHgFAKAAQAPAAAGAKQAEAHABAPIAAARIACAUIADATIABADQAAADgDADQgDADgEAAQgGAAgCgIg");
	this.shape_22.setTransform(38.6,27.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgFBEQgDgDAAgEIAAgEIABgEIgBgOIAAgOQAAgNgDgWIgCglIgJAAQgUAAgLgDQgIgCAAgHQAAgEACgDQADgDAFAAIAOACIAPABIARAAIAPAAIAVABIAWABQAEAAACACQADADAAAEQAAAEgDADQgCADgEAAIgWgCIgVAAIgGAAQAAAMACAdIACAoIABAKIABAKQAAAGgCAEQgDAGgFAAQgCAAgDgCg");
	this.shape_23.setTransform(27.3,27.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(322));

	// Nav
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

	this.instance_2 = new lib.Background("synched",0);
	this.instance_2.setTransform(275,195.5,1.069,1.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.btn_goNext},{t:this.btn_goBack},{t:this.instance_1},{t:this.btn_menu}]}).wait(322));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(284.2,-172.2,875.1,775.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;