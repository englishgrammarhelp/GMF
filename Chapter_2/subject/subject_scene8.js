(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	manifest: [
		{src:"sounds/ball_bounce.mp3?1495750871220", id:"ball_bounce"},
		{src:"sounds/ball_kick.mp3?1495750871220", id:"ball_kick"},
		{src:"sounds/carmen.mp3?1495750871220", id:"carmen"},
		{src:"sounds/carmen_blocks.mp3?1495750871220", id:"carmen_blocks"},
		{src:"sounds/carmenblocks.mp3?1495750871220", id:"carmenblocks"},
		{src:"sounds/carmenblockstheshot.mp3?1495750871220", id:"carmenblockstheshot"},
		{src:"sounds/cowbell_3times.mp3?1495750871220", id:"cowbell_3times"},
		{src:"sounds/High_Screaming_Gtr.mp3?1495750871220", id:"High_Screaming_Gtr"},
		{src:"sounds/organ_f_chord.mp3?1495750871220", id:"organ_f_chord"},
		{src:"sounds/right_answer.mp3?1495750871220", id:"right_answer"},
		{src:"sounds/thesubjectisalways.mp3?1495750871220", id:"thesubjectisalways"},
		{src:"sounds/wrong_answer.mp3?1495750871220", id:"wrong_answer"}
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


(lib.static_line = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#660099").ss(1,1,1).p("AM8AAI53AA");
	this.shape.setTransform(82.8,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,167.6,2);


(lib.static_carmen_RForearm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AFABSQgLgCgLgDQgggTgjgOQgjgOgkgKQgngKgkgKQgigJgkgLQgjgMgegQQgggRgEggQgDgXgEgXQgDgPgDgPQgDgQgGgJQgnATAFAoQACAUgCAPQgVgLgRgFQgigLgigOQgggNgVARQgNAKAQAEQAkAKAkAMQAdAKASAGQgkAFgogEQgkgCgcANQANAYAcgCQAngDAoAAQATAAAIAAQgOABgNACIAAAAQgdAFgZAIQgmAMAAAbQAlAPAjgSQACgBACgBQAKgGAIgFQAJgFALgEQgSAPgOAOQgHAIgHAIQgLAOAOADQAnAHAdgYQAfgZAlAQQAfAPAjAQQAgAPAhARQAgARAfASQAfASAjAQQAiAQAfAOQAbAMARAHQAQAIATAC");
	this.shape.setTransform(32,20);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC66").s().p("AEdC9IgsgTIhBgeQgjgQgfgSQgfgSgggRQghgRgggPIhCgfQglgQgfAZQgdAYgngHQgOgDALgOIAOgQQAOgOASgPQgLAEgJAFIgSALIgEACQgjASglgPQAAgbAmgMQAZgIAdgFIAAAAIAbgDIgbAAQgoAAgnADQgcACgNgYQAcgNAkACQAoAEAkgFIgvgQQgkgMgkgKIgDgOQAVgRAgANQAiAOAiALQARAFAVALQACgPgCgUQgFgoAngTQAGAJADAQIAGAeIAHAuQAEAgAgARQAeAQAjAMIBGAUIBLAUQAkAKAjAOQAjAOAgATIAWAFIAAB1QgTgCgQgIg");
	this.shape_1.setTransform(32,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,66.1,42);


(lib.static_carmen_RBicep = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AjOBIQAQADATgCQAmgDAngDQAmgDAmgGQAigGAlACQARABAQABQAUACATABQAkADAhgBQAAAAABAAQASgqgIg2QgHgwhDANQgmAHgnAHQglAHgkAFQglAEgmgBQgnAAgmAAQgSAAgRgC");
	this.shape.setTransform(20.8,7.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC66").s().p("AjOBIIAAhzQARACASAAIBNAAQAmABAlgEQAkgFAlgHIBNgOQBDgNAHAwQAIA2gSAqIgBAAQghABgkgDIgngDIghgCQglgCgiAGQgmAGgmADIhNAGIgPABIgUgCg");
	this.shape_1.setTransform(20.8,7.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,43.6,16.9);


(lib.static_carmen_LForearm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AkwDFQAQgMAOgOQAIgHAHgJQAAgBABAAQANgQAQgRQAHgIAIgIQAagaAagaQAagZAZgZQAagXAZgWQAWgUADgUQAEgWADgUQACgSAKgMQAXgfgPgkQgUgtAxAEQAFAAADAJQADAKACAKQABAIABAJQAEAdAagDQASggASgfQATggAXgXQAkgkAQAlQAFALgIAIQgbAZgWAbQgjAqAsAEQAMABALgKQAagZAcgWQAcgWAEAqQABAMgMAHQgcAQgjATQgTAJALAGQAOAHAOgEQAlgLAigLQAogNgVAoQgEAHgLABQglAEglAEQgnAEARATQAvgKAdAVQAIAFgKAHQgeAVgngIQgQgEgQADQgoAGgUAZQgVAageAMQgEAEgGADQgCACgDADQgGAFgGAFQgjAlgiA5QgdAxgsAxQgtA0gvAjQgIAGgJAFQgOAIgQAFQgHADgIABQgPADgPAB");
	this.shape.setTransform(30.6,32.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC66").s().p("AkwDFQAQgMAOgOIAPgQIABgBIAdghIAPgQIA0g0IAzgyQAagXAZgWQAWgUADgUIAHgqQACgSAKgMQAXgfgPgkQgUgtAxAEQAFAAADAJIAFAUIACARQAEAdAagDIAkg/QATggAXgXQAkgkAQAlQAFALgIAIQgbAZgWAbQgjAqAsAEQAMABALgKQAagZAcgWQAcgWAEAqQABAMgMAHQgcAQgjATQgTAJALAGQAOAHAOgEQAlgLAigLQAogNgVAoQgEAHgLABIhKAIQgnAEARATQAvgKAdAVIgCAMQgeAVgngIQgQgEgQADQgoAGgUAZQgVAageAMIgKAHIgFAFIgMAKQgjAlgiA5QgdAxgsAxQgtA0gvAjIgRALQgOAIgQAFIgPAEQgPADgPABg");
	this.shape_1.setTransform(30.6,32.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,63.1,67.5);


(lib.static_Carmen_leg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AA+gHQgBAAAAAAQgjAeARA5Qg1AWgYguQgNgagBgPAgvAPQgbgyAagz");
	this.shape.setTransform(9.1,74.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AJijvQgnA7gkAmQgqAqgvAuQgtAtgrAqQgvAxgrAhQgsAjg9ANQg+APhDAFQhCAGhEAKQhDALg5AJQg/AKhEAMQhAAMgdAwQgUAhgdAWAphEVQAVgRAPgaQAdgzAmg1QATgaAiALQAsAOA3AFQBDAFA6geQA5gfAygiQA3gmA8gSQA+gUBEgDQBLgDAZg/QAVg2Ang3QAbgnAWglQAig4AmglQANAYAQAUQAXAeAhAVQAeAUAkAPQAaAKAdAAApgF9IAAAA");
	this.shape_1.setTransform(65.1,38.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC66").s().p("ApMGBQgOgZAAgPIAAAAQgag1AZgyQAVgRAPgbQAdgzAmg0QATgaAiALQAsAOA3AEQBDAGA6gfQA5geAygjQA3gjA8gUQA+gVBEgDQBLgDAZg/QAVg1Ang4QAbgmAWgmQAig3AmgmQANAYAQAVQAXAdAhAVQAeAVAkAOQAaALAdgBIAAAAQgnA8gkAlIhZBYIhYBZQgvAvgrAiQgsAig9AOQg+AOhDAGQhCAGhEAKIh8AUIiDAWQhAAMgdAvQgUAigdAVIAAABQgjAfARA5QgSAHgOAAQgfAAgQgfg");
	this.shape_2.setTransform(64.5,41.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.9,-1,125.3,85.3);


(lib.static_carmen_LBicep = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("ADjBsQgNAAgOgBQhCgFg+gOQg/gPg4gNQgFgBgFgBQhCgOhLAJQgBAAgBAAQgTgvgGg6QgDgbAHgYQA8gKBVASIAAAAQAnAWA9AMQBCAMA6AQQAoAKAmAEQAAgBABAA");
	this.shape.setTransform(22.7,10.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC66").s().p("ADIBrQhCgFg+gOIh3gcIgKgCQhCgOhLAJIgCAAQgTgvgGg6QgDgbAHgYQA8gKBVASIAAAAQAnAWA9AMQBCAMA6AQQAoAKAmAEIABgBIAACAIgJAAIgSgBg");
	this.shape_1.setTransform(22.7,10.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,47.5,23.7);


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


(lib.header2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHAGQgDgDAAgDQAAgCADgDQAEgDADAAQAEAAADADQAEADAAACQAAADgEADQgDADgEAAQgDAAgEgDg");
	this.shape.setTransform(19.6,35.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("AgEAnQgDgCAAgEIgCgXIgBgVIgBgHQgIAEgIALIgBABIgBAUIAAAFIAAAFQAAAEgDACQgDACgEAAQgFAAgDgFIgBgLIAAgXIAAgKIgBgKQAAgHADgEQACgHAFAAQAEAAADADQADADAAAEIgBAGQALgMAJAAQAKAAADAIQAFgEAFgCQAFgCAGAAQANAAAFAOIADASIAFAjQAAAEgDADQgDACgEAAQgIAAgBgIIgDgUIgCgSQgCgMgDAAIgHADIgIAGIACAUIACAXQAAAEgDACQgDADgEAAQgCAAgCgDg");
	this.shape_1.setTransform(11.3,31.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066FF").s().p("AgaAjQgCgCAAgEIAAgrIAAgGIAAgHQABgDACgDQACgDAEAAQAIAAACAIQAJgJAPAAQAOAAAAASIAAAFQgBAKgJAAQgIAAgBgIIAAgHQgNACgGANIAAAhQAAAEgDACQgDADgEAAQgFAAgCgDg");
	this.shape_2.setTransform(2.5,31.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0066FF").s().p("AgVAcQgKgJAAgQQgBgNAJgMQAKgOARAAQAOAAAIALQAHAKAAAPQAAANgJAMQgJAMgPAAQgMAAgJgJgAgIgKQgEAHAAAGQAAAIAEAFQAEADAEAAQAFAAAEgEQAFgFABgIQAAgUgMAAQgGAAgFAIg");
	this.shape_3.setTransform(-4.8,32);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0066FF").s().p("AgMA5QgDgCAAgEIABgCIABgSIAAggIgEAAIgEABQgEAAgDgDQgDgCAAgEQAAgHAHgCIAMgBIABgIQACgPAGgHQAGgKAQAAQANAAAAAJQAAAJgMAAQgIAAgEAGQgDAEgBAKIAAACIANgBQANAAAAAIQAAAJgOAAIgNABIAAAQIABATQAAAMgCAHQgCAIgFAAQgEAAgDgDg");
	this.shape_4.setTransform(-12,30.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0066FF").s().p("AguA0QgDgDAAgEIABgIIAAgIIAAgMIAAgMIAAgLIAAgNIgBgNIgBgMQAAgEAEgDQADgDAFAAQAFAAAGAIQAdAtAeAaIABgLIgBgrIgBgIIgBgHQAAgJAKAAQALAAAAAiIAAALIAAApIgBALQgCAJgIAAQgGAAgGgGQgZgYgggoIAAATIAAARIABAQQAAAUgKAAQgGAAgCgDg");
	this.shape_5.setTransform(-27.2,30.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0066FF").s().p("AgaAuQgSgOAAggIAAgKIABgKIAAgIIAAgHQAAgGACgFQADgGAEAAQAEAAADACQADADAAAEIAAAMIAAALIAAAKIgBAKQAAAIACAJQADALAGAEQADACAKAAQARAAAGgfQAEgOAAgdQAAgEACgDQACgFAHAAQAEAAACAEQACACAAADQAAAbgDAPQgDAWgLAPQgGAHgHAEQgIAGgIAAQgRAAgIgHg");
	this.shape_6.setTransform(-38.1,30.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0066FF").s().p("AgjAqQgPgNAAgTQAAgWAOgTQARgVAXAAQAXAAAMALQAMALAAAWQAAAVgNATQgQAVgXAAQgUAAgOgLgAgVgTQgKAOAAAPQAAALAJAHQAJAHAMAAQAOAAAKgPQAJgNAAgPQAAgPgHgFQgGgGgPAAQgOAAgLAPg");
	this.shape_7.setTransform(-48.8,30.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0066FF").s().p("AguA0QgDgDAAgEIABgIIAAgIIAAgMIAAgMIAAgLIAAgNIgBgNIgBgMQAAgEAEgDQADgDAFAAQAFAAAGAIQAdAtAeAaIABgLIgBgrIgBgIIgBgHQAAgJAKAAQALAAAAAiIAAALIAAApIgBALQgCAJgIAAQgGAAgGgGQgZgYgggoIAAATIAAARIABAQQAAAUgKAAQgGAAgCgDg");
	this.shape_8.setTransform(-60.1,30.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgZAjQgDgCAAgEIAAgrIABgGIAAgHQgBgDADgDQACgDAFAAQAHAAACAIQAKgJAOAAQAOAAAAASIAAAFQgBAKgJAAQgIAAgBgIIAAgHQgNACgGANIAAAhQAAAEgEACQgCADgEAAQgEAAgCgDg");
	this.shape_9.setTransform(144,10.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgVAdQgKgKAAgQQgBgNAJgMQAKgOARAAQAOAAAIALQAHAKAAAOQAAAPgJAKQgJANgPAAQgMAAgJgIgAgIgKQgEAGAAAHQAAAIAEAEQAEAEAEAAQAFAAAEgEQAFgFABgIQAAgUgMAAQgGAAgFAIg");
	this.shape_10.setTransform(136.7,10.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgJAOQgCgDAAgCIADgJIAHgLQABgEAEAAQAEAAACACQADADAAADIgFAIIgGALQgCAEgDAAQgDAAgDgCg");
	this.shape_11.setTransform(123.9,14.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0066FF").s().p("AgvA0QgCgDAAgEIAAgIIAAgIIABgMIAAgMIAAgLIAAgNIgBgNIgBgMQAAgEADgDQAEgDAEAAQAGAAAGAIQAdAtAeAaIAAgLIgBgrIgBgIIAAgHQAAgJAKAAQALAAAAAiIAAALIgBApIgBALQgBAJgJAAQgFAAgFgGQgbgYgfgoIAAATIAAARIAAAQQAAAUgKAAQgEAAgEgDg");
	this.shape_12.setTransform(115.4,8.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0066FF").s().p("AgbAuQgRgOAAggIAAgKIAAgKIAAgIIABgHQAAgGACgFQACgGAFAAQAEAAADACQADADAAAEIAAAMIAAALIgBAKIAAAKQAAAIACAJQADALAGAEQADACALAAQAQAAAGgfQADgOAAgdQAAgEACgDQADgFAGAAQAFAAACAEQACACAAADQAAAbgCAPQgEAWgMAPQgFAHgGAEQgJAGgHAAQgSAAgJgHg");
	this.shape_13.setTransform(104.5,8.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0066FF").s().p("AgjAqQgPgNAAgTQAAgWAOgTQARgVAXAAQAXAAAMALQAMALAAAWQAAAVgNATQgQAVgXAAQgUAAgOgLgAgVgTQgKAOAAAPQAAALAJAHQAJAHAMAAQAOAAAKgPQAJgNAAgPQAAgPgHgFQgGgGgPAAQgOAAgLAPg");
	this.shape_14.setTransform(93.8,8.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0066FF").s().p("AgvA0QgCgDAAgEIAAgIIAAgIIABgMIAAgMIAAgLIAAgNIgBgNIgBgMQAAgEADgDQAEgDAEAAQAGAAAGAIQAdAtAeAaIAAgLIgBgrIgBgIIAAgHQAAgJAKAAQALAAAAAiIAAALIgBApIgBALQgBAJgJAAQgFAAgFgGQgbgYgfgoIAAATIAAARIAAAQQAAAUgKAAQgEAAgEgDg");
	this.shape_15.setTransform(82.5,8.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0066FF").s().p("AgjAqQgPgNAAgTQAAgWAOgTQARgVAXAAQAXAAAMALQAMALAAAWQAAAVgNATQgQAVgXAAQgUAAgOgLgAgVgTQgKAOAAAPQAAALAJAHQAJAHAMAAQAOAAAKgPQAJgNAAgPQAAgPgHgFQgGgGgPAAQgOAAgLAPg");
	this.shape_16.setTransform(71.2,8.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0066FF").s().p("AgkAyQgCgCAAgEIAAgPIAAgQIAAg1QAAgEACgEQAEgFAGABIARABQAJABAGAEQAcAOAAAWQABAJgHAFQgGAHgMAEQASALAJAKQACADABADQAAAEgDADQgDADgEAAQgEAAgDgDQgUgUgXgHIABAWQAAAEgEACQgCADgEAAQgEAAgDgDgAgUABIADAAQARAAAGgCIAHgEQADgDAAgCQAAgIgKgHQgIgGgKgBIgIgBg");
	this.shape_17.setTransform(61.3,8.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0066FF").s().p("AgeA0QgCgDAAgDIAAgTIABgeIACgfQAAgSAKAAIAGAAIAKgBQALAAAMAJQANAJAAAOQAAASgOAJQgMAIgPABIgGgBIAAAgQAAADgDADQgCACgEAAQgEAAgDgCgAgLgZIgCAXIAFABQAJAAAHgFQAHgFAAgKQAAgGgHgEQgHgFgGABIgDAAIgDAAIAAAKg");
	this.shape_18.setTransform(53,8.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgJAOQgDgDABgCIADgJIAGgLQACgEAEAAQAEAAACACQACADABADIgGAIIgEALQgDAEgDAAQgDAAgDgCg");
	this.shape_19.setTransform(39.9,14.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0066FF").s().p("AguA0QgDgDAAgEIAAgIIAAgIIABgMIAAgMIAAgLIAAgNIgBgNIgBgMQAAgEAEgDQADgDAEAAQAGAAAGAIQAdAtAeAaIABgLIgCgrIgBgIIAAgHQAAgJAKAAQALAAAAAiIAAALIAAApIgCALQgBAJgJAAQgEAAgHgGQgagYgfgoIAAATIAAARIABAQQAAAUgLAAQgEAAgDgDg");
	this.shape_20.setTransform(31.4,8.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0066FF").s().p("AgbAuQgRgOAAggIAAgKIAAgKIAAgIIABgHQAAgGACgFQADgGAEAAQAEAAADACQADADAAAEIAAAMIAAALIgBAKIAAAKQAAAIADAJQADALAFAEQADACAKAAQAQAAAHgfQAEgOgBgdQAAgEACgDQAEgFAFAAQAFAAACAEQACACAAADQAAAbgDAPQgDAWgMAPQgEAHgIAEQgJAGgHAAQgRAAgJgHg");
	this.shape_21.setTransform(20.6,8.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0066FF").s().p("AgjAqQgPgNAAgTQAAgWAOgTQARgVAXAAQAXAAAMALQAMALAAAWQAAAVgNATQgQAVgXAAQgUAAgOgLgAgVgTQgKAOAAAPQAAALAJAHQAJAHAMAAQAOAAAKgPQAJgNAAgPQAAgPgHgFQgGgGgPAAQgOAAgLAPg");
	this.shape_22.setTransform(9.8,8.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0066FF").s().p("AguA0QgDgDAAgEIAAgIIAAgIIABgMIAAgMIAAgLIAAgNIgBgNIgBgMQAAgEAEgDQADgDAEAAQAGAAAGAIQAdAtAeAaIABgLIgCgrIgBgIIAAgHQAAgJAKAAQALAAAAAiIAAALIAAApIgCALQgBAJgJAAQgEAAgHgGQgagYgfgoIAAATIAAARIABAQQAAAUgLAAQgEAAgDgDg");
	this.shape_23.setTransform(-1.4,8.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAQAfIgLAFIgGABQgQAAgJgJQgIgJAAgRQAAgPAMgLQAMgMAPAAQAHAAAIAEQAKAEAAAGQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABIgBAHIAAAJQAAALACAGIACAHIADAHQAAADgDADQgDACgDAAQgDAAgHgGgAgJgMQgGAHAAAHQAAAKADAEQADAFAHAAIAGgCIAHgEIgCgWIABgFIAAgGIgCgBIgCgBQgHAAgIAIg");
	this.shape_24.setTransform(-17,10.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgSAjQgKgEAAgHQAAgHAIAAIAJACQAGACADAAQAMAAAAgGQAAgDgKgEIgQgIQgJgGAAgJQAAgPAOgEQAJgDAPAAQAHAAADACQAFACAAAGQAAANgHAAQgGAAgCgGIgFAAQgPAAAAAFQAAACAIAEQAOAHAEACQAKAHAAAIQAAAMgLAGQgIAFgLAAQgJAAgIgDg");
	this.shape_25.setTransform(-30.5,10.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgTA0QgDgCAAgEQAAgGAPggIgYgpIgDgGQgCgDAAgCQAAgEADgDQADgDADAAQAFAAACAEQAKANALAaIAJgUIAJgSQADgFAFAAQAEAAADADQADACAAAEIgBAEIgXAvIgNAeIgDAMQgDAHgGAAQgEAAgDgDg");
	this.shape_26.setTransform(-37.8,12.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAQAfIgLAFIgGABQgQAAgJgJQgIgJAAgRQAAgPAMgLQAMgMAPAAQAHAAAIAEQALAEgBAGQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABIgBAHIgBAJQAAALACAGIAEAHIACAHQAAADgCADQgEACgDAAQgDAAgHgGgAgIgMQgHAHAAAHQAAAKADAEQAEAFAGAAIAGgCIAHgEIgCgWIAAgFIABgGIgCgBIgCgBQgHAAgHAIg");
	this.shape_27.setTransform(-45.4,10.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AACAVIgDgVIgBACIgKAaIgEAFQgDAEgFAAQgEABgDgGQgDgGgDgKIgHgjIgBgJQAAgEAEgCQACgDAEAAQAHAAACAHIABAKIACAJIADAQIALghQADgJAGAAQAHAAACAKIAEASIADASIALgoQACgGAHAAQAEAAADADQACACAAAEIAAACIgOAvQgCAGgFAGQgDAFgGAAQgIAAgFgRg");
	this.shape_28.setTransform(-54.1,10.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgFA1QgDgDAAgEIAAhcQAAgEADgDQADgCACAAQAEAAACACQADADAAAEIAABZQAAANgJAAQgDAAgCgDg");
	this.shape_29.setTransform(-61,8.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAQAfIgLAFIgGABQgQAAgJgJQgIgJAAgRQAAgPAMgLQAMgMAPAAQAGAAAJAEQAKAEAAAGQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABIgBAHIgBAJQAAALACAGIAEAHIACAHQAAADgCADQgDACgEAAQgDAAgHgGgAgIgMQgHAHAAAHQAAAKADAEQAEAFAGAAIAGgCIAHgEIgCgWIAAgFIABgGIgCgBIgCgBQgIAAgGAIg");
	this.shape_30.setTransform(-66.7,10.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgSAjQgKgEAAgHQAAgHAIAAIAJACQAGACADAAQAMAAAAgGQAAgDgKgEIgQgIQgJgGAAgJQAAgPAOgEQAJgDAPAAQAHAAADACQAFACAAAGQAAANgHAAQgGAAgCgGIgFAAQgPAAAAAFQAAACAIAEQAOAHAEACQAKAHAAAIQAAAMgLAGQgIAFgLAAQgJAAgIgDg");
	this.shape_31.setTransform(-80.2,10.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgHAxQgDgCAAgEIAAgNIgBgMIABgQIABgNQAAgEADgCQACgDAEAAQADAAACADQADACAAAEIgBANIAAAQIAAAMIAAANQAAAEgDACQgCADgCAAQgFAAgCgDgAgFghQgDgDAAgFQAAgEADgDQADgDADAAQAEAAADADQADADAAAEQAAAFgDADQgDADgEAAQgDAAgDgDg");
	this.shape_32.setTransform(-85.2,8.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0066FF").s().p("AgFAxQgDgCAAgEIAAgDIABgDIgBgKIAAgJIgCgXIgCgZIgDAAQgQAAgIgCQgIgCAAgHQAAgEACgCQADgEAFABIALABIALABIAMgBIALAAIAPABIAQABQAEAAADACQACADAAAEQAAAEgCADQgDACgEAAIgRAAIgQgBIABAcIACAZIAAAHIABAHQAAAFgCAFQgDAFgFAAQgCAAgDgDg");
	this.shape_33.setTransform(-98.3,8.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#0066FF").s().p("AgdApQgKgLAAgOQAAgVAUgYQARgUAPAAIAGAAIAEABQADgDAEAAQAHAAACAIIABANQAAADgCADQgCAEgFAAQgGAAgDgHQgBgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAAAIgGgBQgIAAgJAOQgQARAAAQQAAAHAFAGQAFAFAHAAQAFAAAHgEIAKgGQAFgEADAAQAEAAADADQADADAAADQAAAFgEADQgTAPgRAAQgQAAgKgLg");
	this.shape_34.setTransform(-107.4,8.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0066FF").s().p("AgeA0QgIgHAAgWIACgaIABgbIgBgHIgBgHQAAgLAKAAQADAAADACIAPgDIALgBQARAAALAEQAGACAAAHQAAADgCADQgDADgEAAIgDAAQgLgDgLAAIgJABIgMACIgBAbIAZgDIAQgBQAEAAADADQADACAAAFQAAAGgJABIgQABIgbADIgBAOQAAANACACIAJABIAKAAIANAAIAEgBIAEAAQAEAAADACQADACAAAFQAAAIgIABQgHACgTAAQgXAAgGgGg");
	this.shape_35.setTransform(-116,8.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#0066FF").s().p("AgcAvQgOgKAAgNQAAgLAKAAQAJAAAAALQAAAEAHAEQAHAFAGAAQADAAAAgJIAAgVIABglIAAgFIgBAAIgHAAIgIAAQgEAAgCgCQgDgDAAgEQAAgKAMAAIAHABIAFAAIAMgBIANAAQASAAAAAKQAAADgCADQgDADgEAAIgEAAIgFAAIgEAAIgBAFQAAAvgHAWQgEAQgMAAQgNAAgMgIg");
	this.shape_36.setTransform(-125.1,9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#0066FF").s().p("AggA0QgDgEAAgEIAAhGIgBgJIABgJQAAgHALgCQAGgBAMAAQALAAAMAJQANAJAAAOQAAAJgDAFQgBAFgHADQAHACAGAHQAFAHAAAIQAAAIgKAJQgGAFgHADQgPAGgYAAQgEAAgDgDgAgRAkQAMAAAMgEQAMgEgBgEQAAgFgHgEQgGgDgFgBIgRgBgAgRgjIAAAPIAAANIAJABQAUgCgBgOQAAgEgFgFQgGgEgGAAIgLAAg");
	this.shape_37.setTransform(-134.1,8.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#0066FF").s().p("AgbAuQgRgOAAggIAAgKIAAgKIAAgIIABgHQAAgGACgFQACgGAFAAQAEAAADACQADADAAAEIAAAMIAAALIgBAKIAAAKQAAAIACAJQADALAGAEQADACALAAQAQAAAGgfQADgOAAgdQAAgEACgDQADgFAGAAQAFAAACAEQACACAAADQAAAbgCAPQgEAWgMAPQgFAHgGAEQgJAGgHAAQgSAAgJgHg");
	this.shape_38.setTransform(-143.9,8.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#0066FF").s().p("AgkAsQgIgGAAgJQAAgEADgDQACgDAFAAQAGAAADAHQAEAIANAAQAKAAALgFQAMgFAAgHQAAgIgHgDQgGgCgNAAQgMgBgJgDQgNgEABgLQAAgNAOgLQAOgMAPAAQAGAAAKAEQAMADAAAFQAAAEgCADQgDADgEAAIgKgCIgJgBQgJAAgGAEQgIAEAAAFQAAADACACIAIACIAPABQAPABAJAIQAKAGAAAOQAAASgUAJQgQAHgRAAQgSAAgKgIg");
	this.shape_39.setTransform(-153.8,8.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgWAdQgMgJABgPQgBgPAKgMQAKgOAPAAQAMAAAIAEQAKAFAAALQAAAHgIAGIgQAGIgUAKQACAEAGACQAEABAEAAQAJAAAHgDQAFgEAEAAQAGAAAAAHQAAAIgLAFQgKAEgKAAQgPAAgKgIgAgIgPQgEAEgDAJIAPgHQAIgEAFgEQgEgCgIAAQgEAAgFAEg");
	this.shape_40.setTransform(-168.8,10.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAQAyQgCgGgBgKIgCgQIAAgFIABgFIgBgGQAAgCgDAAQgIAAgEAFIgIANQAAAZgDAFQgCAGgGAAQgEAAgDgDQgDgCAAgEIABgEIABgSIAAgsIAAgCIAAgLIAAgGIgBgGQAAgEADgDQACgCAEAAQAHAAADAHIABANIgBANIAAAOQAFgFAGgDQADgCAHAAQAMAAAFAGQAEAFAAAJIABAQIACAOIACANIAAADQAAADgDADQgDACgEAAQgGAAgCgGg");
	this.shape_41.setTransform(-176.5,8.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgFAxQgDgCAAgEIAAgDIABgDIgBgKIAAgJIgCgXIgCgZIgDAAQgQAAgIgCQgIgCAAgHQAAgEACgCQADgEAFABIALABIALABIAMgBIALAAIAPABIAQABQAEAAADACQACADAAAEQAAAEgCADQgDACgEAAIgRAAIgQgBIABAcIACAZIAAAHIABAHQAAAFgCAFQgDAFgFAAQgCAAgDgDg");
	this.shape_42.setTransform(-185.5,8.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-209.1,-3.7,375.2,45.1);


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


(lib.Wordsblocks = function(mode,startPosition,loop) {
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
	this.shape.setTransform(95.4,17.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AAUBBQgFgIgIgLIgMgSIgMAIIgBAYQAAAFgDADQgDADgGAAQgMAAAAgOIABgVIABgVIAAgbIABgdIgBgJIAAgJQAAgFADgDQAEgEAFAAQAFAAAEAEQADADAAAFIAAAJIABAJIgBAZIAAAXQAMgIAWgYQAEgEAFAAQAFAAAEAEQAEADAAAFQAAAEgEAEQgKAJgOANIASAYQANARAAAGQAAAFgEAEQgDADgFAAQgIAAgDgHg");
	this.shape_1.setTransform(86.6,15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgaAmQgOgMAAgSQAAgQANgSQANgWASAAQAIAAANAFQAPAGAAAIQgBAEgDADQgCAEgGAAQgEAAgFgEQgFgEgKAAQgGAAgHANQgIANAAAIQAAAIAHAGQAGAFAJAAQAFAAAJgFQAIgEACAAQAGAAADADQADAEAAAEQAAAHgPAHQgNAGgIAAQgSAAgNgLg");
	this.shape_2.setTransform(76.6,17.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgcAkQgMgLgBgVQgBgRAMgPQANgTAWABQARAAALANQAJANAAATQAAASgLAPQgMAPgTAAQgQAAgMgLgAgLgOQgGAJAAAJQAAAKAGAGQAFAEAGABQAGAAAGgGQAGgFABgLQABgagQgBQgJABgGAJg");
	this.shape_3.setTransform(67.4,17.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgHBEQgDgDAAgFIAAh3QAAgGADgDQAEgDADAAQAFAAADADQAEADgBAGIAAByQABARgMAAQgEAAgDgEg");
	this.shape_4.setTransform(60.2,15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgZBCQgDADgFABQgFgBgDgDQgDgCAAgGIAAgGIAAgGIAAhiQAAgHADgEQAEgGAGAAQAJAAAAAKIAAADIAAAEIAAAiQAGgEAGgCQAGgBAEAAQAUgBANAPQAMANAAATQAAAVgOAOQgOAPgTAAQgMAAgLgFgAgJAAIgNAFIAAAmQAMAFAIAAQAKAAAHgIQAHgHAAgMQAAgLgGgHQgGgGgKAAQgDAAgGADg");
	this.shape_5.setTransform(52.5,15.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

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


(lib.Wordsshot = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#009900").s().p("AgHA9QgDgDAAgFIAAgKIABgJIgCgsIgQgBQgMgBAAgKQAAgFAEgEQADgDAFAAIAPABIgBgJIAAgJQAAgFAEgDQAEgEAFAAQALAAgBAWIAAAIIAJgBQALAAADABQAHADAAAIQAAAFgEADQgDADgFAAIgEAAIgFAAIgIABIABAsIAAAFIAAAFQAAAUgMAAQgDAAgEgDg");
	this.shape.setTransform(87.8,10.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009900").s().p("AgcAkQgMgMgBgUQgBgRAMgPQANgSAWAAQARgBALAOQAJANAAATQAAASgLAPQgMAQgTAAQgQAAgMgMgAgLgNQgGAIAAAJQAAALAGAFQAFAEAGAAQAGABAGgGQAGgFABgLQABgbgQAAQgJAAgGALg");
	this.shape_1.setTransform(78.7,12.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009900").s().p("AAUBAQgCgHgCgNIgBgVIAAgGIAAgHIAAgHQgBgDgEAAQgJAAgGAHQgEAEgHANQAAAggEAGQgDAHgHAAQgFAAgEgDQgEgDAAgFIABgFQABgCAAgVIAAg5IAAgDIABgOIgBgIIgBgIQAAgFAEgDQADgEAGAAQAIAAADAKQACAFAAALIgBASIAAARQAGgGAIgEQAFgDAIAAQAPAAAHAJQAFAGABALIABAWIACARIADARIAAADQAAAFgEAEQgDADgFAAQgJAAgDgJg");
	this.shape_2.setTransform(69.1,9.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#009900").s().p("AgXAtQgOgFAAgJQAAgJALAAQAEAAAHADQAIACAEAAQAQAAAAgHQAAgEgMgGQgQgIgFgCQgNgIAAgNQAAgRATgGQALgEAUAAQAJAAAEACQAGADAAAJQAAAPgIAAQgJAAgCgHIgHAAQgTAAAAAFQAAAEAKAGQASAIAGADQANAIAAAMQAAAPgOAIQgMAGgOAAQgMAAgJgEg");
	this.shape_3.setTransform(59.2,12.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-5.2,147,29.1);


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


(lib.Wordscarmen = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#0066FF").s().p("AARAoIgCgSIgBgTIAAgFIAAgIIAAgDIABgEQAAgHgEAAQgHAAgGAJQgHAKgEANIgBAIIAAAHIgBAIIAAAIQAAAFgEADQgDADgGAAQgFAAgDgDQgEgDAAgFIAAgIIgBgHIABgYIACgWIgBgIIAAgIQAAgFAEgDQADgDAFgBQAMABABAOIAAABQANgOAMAAQAQAAAHAPQAEAJAAASIAAAGIAAAEQAAAHACAKQACAMAAAGQAAAFgEADQgDADgGAAQgKABgCgLg");
	this.shape.setTransform(100.5,17.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("AgcAlQgPgLgBgTQABgVALgQQAOgQATAAQAPAAALAEQANAHAAAOQAAAKgLAHQgFADgPAFIgbANQAEAFAGACQAGACAGAAQALAAAJgFQAHgEAEAAQAKAAgBAJQAAAKgOAHQgNAEgNAAQgTABgNgLgAgKgTQgHAFgDAKIAUgIIARgKQgGgDgKAAQgGAAgFAGg");
	this.shape_1.setTransform(90.6,17.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066FF").s().p("AgGAyQgEgDAAgFIgCgdIgCgcIgBgJQgKAGgKAOIgCABIAAAaIAAAHIgBAGQAAAFgEADQgDACgFAAQgIAAgCgGQgCgFAAgJIAAgfIgBgNIAAgNQAAgIADgGQADgIAHAAQAFAAADAEQAEAEAAAEIgBAIQAOgPAMAAQANAAAEAKQAGgFAGgCQAHgDAHAAQASAAAGASQABADADAUIAGAuQAAAFgEADQgDADgFAAQgLAAgBgKIgEgZIgCgYQgDgQgDAAQgDAAgHAEIgKAHQAAAKACARQADATAAAKQAAAFgEADQgDAEgGAAQgDAAgDgEg");
	this.shape_2.setTransform(78.8,17.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0066FF").s().p("AgiAtQgCgDAAgFIAAg4IAAgIIAAgIQAAgFADgDQADgDAFAAQAKAAACAKQAOgMASAAQASAAAAAXIAAAGQAAAOgMAAQgLAAAAgMIAAgIQgSADgJARIAAAqQAAAFgEADQgCAEgGAAQgGAAgDgEg");
	this.shape_3.setTransform(67.5,17.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0066FF").s().p("AAVAoIgPAGQgGACgCAAQgVAAgLgLQgKgMAAgWQAAgUAPgOQAQgQAUAAQAIAAALAFQANAGAAAHQAAADgCADIgBAJIgBAMQAAAOADAIIAEAJIADAIQAAAFgDADQgEADgEAAQgEAAgJgIgAgLgRQgJAKAAALQAAALAEAGQAEAGAJAAQADAAAFgCQAFgCAEgDQgCgUAAgKIAAgGIABgIIgDgCIgCAAQgKAAgJAJg");
	this.shape_4.setTransform(58.1,17.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0066FF").s().p("AgmA1QgNgOAAgSQAAgcAagfQAWgaAVAAIAHAAIAFABQAEgDAFAAQAJAAADAKIABARQAAAFgDADQgDAFgGAAQgIAAgEgJQgCgEgBAAQgCgBgFAAQgLAAgNASQgUAWAAAVQAAAJAGAHQAHAHAJAAQAGAAAJgFIAOgIQAGgFAEAAQAFAAAEAEQADAEAAAEQAAAGgEADQgYAVgXgBQgUAAgOgOg");
	this.shape_5.setTransform(47.5,15.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

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


(lib.anim_carmen_blocksballdrops = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{start:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		playSound("ball_kick");
	}
	this.frame_9 = function() {
		this.gotoAndPlay("start");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(1));

	// LForearm
	this.instance = new lib.static_carmen_LForearm("synched",0);
	this.instance.setTransform(421.3,82,0.996,0.996,0,164.9,-15.1,4.5,57.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({startPosition:0},0).to({skewX:269.9,skewY:89.9,x:406.6,y:106.1},4).wait(1));

	// RForearm
	this.instance_1 = new lib.static_carmen_RForearm("synched",0);
	this.instance_1.setTransform(293,58.3,1,1,0,-165,15,59,34);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({startPosition:0},0).to({skewX:-270,skewY:-90,x:308.5,y:95.5},4).wait(1));

	// Layer 7
	this.instance_2 = new lib.static_ball("synched",0);
	this.instance_2.setTransform(365.9,111.1,1,1,0,0,0,23.1,23.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-1800,guide:{path:[365.8,111.2,379.5,188.6,361.4,234.5]}},5).to({_off:true},1).wait(4));

	// body
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AhbgqQgFAGgFAGQgDAEgDADQgcAcgnAOQhMAbhLgRQgwgLgZgQQAvgQAighQAwguAZg4QAximAUgjQAZgqA0giQAsgdAag4QAcg7AegqQAdgnA/gVQA5gTBMAOQA7gMA5AdQA4AcAEBMQADBGgXA2QgbA/AlA2QAYAjAcCTQgDAagEAWQgCANgCALQgQBYgXAlQgZAngdAoQgHAKgIAJQAAABAAAAQglAxg+ANQgUAEgSAEQAKgTALgSQAQgbAGgmQApgHAVgnQAZgxAAg6QAAgCAAgCQAAAAAAgBQAPjGh1gDQAGgKAGgMQAOgCAMgEQAlgNAWgdQAQgWAQghQAAgBABgBQAAgBAAgBQgDgogHgjQgIgoAPgfQAGgMAJgKQgDgOgEgOQgFgOgGgNQgXgRgPghQAAAAgBgBQgBgBgBAAQgngXgwATQgqARgjAVQgcAzgaAxQgcA1gTBBQgCAIgDAJQALAbAbAVQACACADACQAZAUATATQAZAZApABQAZAAAVgEAFLp2QgCgBgBgBAE8m9QgOgKAFgTQgPACgTgEQAAACAAADQAAAxApgWQABAAABgBQAMgHAEgQQACgHABgGQAAAAAAAAQAOgEAEgKAFPnhQgNAGgPABAERncQACgmAagTQAmANgEAnACjniIAAgBQgDgYAMgXQAHgNARgBQAmgCgIA1QgCAIgEAIQgQAEgOAAQgPgBgMgIQAAAAgBgBQgYgHgEgMADcndQgGAMgJANQgGAHgFAEQgPAKgKgcQgFgMgBgLAC+nZQgJAVANALACtmMQgBgHACgFQAOApAjALQAgALApgCQAIgBAIAAQgUAOgSANQggAYgegXQgMgJgIgOQgPgYgEgdgAA6lrQgCAHgBAGQgKAggJAkQgDAKgDALQgQA+gfA3QgZArgtAaQgEASAAAPABPkJQgJAjAAAyQABBFAnArQATAXAZgaQAngoAVg2QAKgZAVgmABPkJQAEgRASgdAAkkaQAUADAXAOAhXhLQgNAHgNAFQgtASgxABAjpEuQAcgIAUghQAUghAPgkQAPgkAMgiQANgiAKgkQAKgjAEgkQAKAWAYAbQAYAbAeAQQAgARA8AOQA8APBAALQAXAEATgDAhWgTQgEgKgBgNAF2lhQAAgCABgCAFbgWQgBgDABgCAEUl9QAZAHgCgdACeF5QAeAQAWAcQAWAaAUAhQATAfAUAfQALAQAQAOQgUgNggAOQggAPgjANQgjANgkAPQgfANgiAHQgEABgFABQglAHgkAHQgkAHgmABQgkABgZgBQgaAAgRAJQgRAIg1gXQg1gXg4hKQgKgSgQgfQgRghgZgYQgOgNgOgJQAmADAigQQAhgPAcgbQAcgaAagVQAbgXAZgPQAhAAAfAWQAdAVAkAPQAkAOAlAJQAfAIAjABQAEAAAEAAQAoAAAlgJQAXgFAPgBgADZDpQgGANgGANQgOAdgVAcQgUAcAIAhAAgFpQgQAQATABQAGABAKgC");
	this.shape.setTransform(342.5,89.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AjNHTQg1gXg4hKIgagxQgRghgZgZQgNgMgPgKQAmADAigPQAigQAbgaQAcgaAagWQAbgWAZgPQAiAAAfAWQAdAVAkAOQAkAOAjAKQAfAIAkABIAJAAQAogBAlgIQAWgGAPAAQAeAPAXAcQAVAbAUAgQATAgAVAeQALARAQANQgVgMggAOQggAOgjANIhGAcQggAOgiAHIgIABIhLAPQglAHgjABIg+AAQgZAAgSAIQgEADgHAAQgUAAgngRgAEYhFQhAgLg8gOQg8gOgggRQgggQgYgbQgWgbgJgYQgEgLgBgMQgBgPAEgTQArgZAagrQAgg3ARg/IAFgVQAUAEAXANQgJAjABAyQABBGAmArQAUAWAZgaQAmgnAWg2QAKgZAUgmQB2ACgQDGIAAADIAAACIAAgCIAAgDIAAACIAAADQAAA9gZAwQgVAogpAGIgRACQgMAAgNgDg");
	this.shape_1.setTransform(336.2,109.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhFgLQANABAQgEQgFALgJALQgGAIgFADQgNgKAJgUgAAugLQAPgBANgGIgDANQgEANgMAIQgOgLAFgQg");
	this.shape_2.setTransform(368.6,43.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaBLQgMgJgIgOQgPgYgEgcQgBgGACgFQAOAnAjALQAeALApgCIAQgBIgmAbQgQAMgQAAQgNAAgPgLgAAhhKIAAgFQATAEAPgCQgFATAOAKIgCABQgNAHgIAAQgUAAAAgigAhFg+QgFgMgBgLQAMAIAQABQgKAVANALQgEACgDAAQgKAAgIgUg");
	this.shape_3.setTransform(366.5,49.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#993300").s().p("ADJGmQAQgcAGgmQApgGAVgoQAZgwAAg9IAAgDIAAgCQAPjEh1gCIAMgWQAOgDAMgEQAlgMAWgdQAQgXAQghIABgBIgBgCQgCgpgHgjQgIgoAPgfQAGgLAJgLQgDgOgEgOQgFgOgGgNQgXgRgPggIgBgBIgCgCQgngWgwATQgqARgjAVIg2BkQgcA1gTBAIgFASIgDANIgSBDIgFAVQgQA9ghA3QgZAqgtAaQgNAHgNAGQgtASgxAAQAxAAAtgSQANgGANgHQgEASABAPIgLAMIgFAIQgdAegnAOQhMAbhLgRQgwgLgZgRQAvgRAigiQAwguAZg3QAxilAUgiQAZgrA0giQAsgdAag3QAcg7AggrQAbgnA/gVQA5gSBMANQA7gLA5AdQA4AcAEBMQADBGgXA2QgbA+AlA3QAYAjAcCRIgGAvIgFAZQgQBZgXAlQgZAngdApIgPATIAAABQglAxg+AMIgmAJQAKgUALgRgAh8CUIAAAAgAAAg5IAShDIADgNQALAaAbAVIAFAEQgSAegEAQQgXgOgTgDgAEjmXIACACIABABIgDgDg");
	this.shape_4.setTransform(346.2,67.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC66").s().p("AgoIHQgkgBgfgIQglgKgkgOQgkgOgdgVQgfgWgiAAQAdgIAUghQAUghAPgkQAPgkAMgiQAMgjALgjQAKgkAEglQAKAYAYAbQAXAaAhARQAgARA5AOQA8AOBBALQAXAEASgDQgFAmgQAcQgLASgKATIgNAaQgOAdgUAcQgUAcAHAhQgOAAgXAGQglAIgmABIgJAAgAgYH4IAAAAIAAAAQgKABgGAAQgJgBgBgFQAAgEAIgHQgIAHAAAEQABAFAJABQAGAAAKgBgAAiA5QglgrgBhEQAAgyAHgjQAEgQASgeQAYAUAUATQAZAaApAAIADAAIADAAIABAAIAAAAQAVAAASgDQgSADgVAAIAAAAIgBAAIgDAAIgDAAQgpAAgZgaQgUgTgYgUIgGgEQgZgVgKgaIAFgSQARhAAcg1IA2hkQAigVArgRQAwgTAmAWIADADQAQAgAXASQAGAMAFAOQAEAOADAOQgJALgGALQgPAfAHAoQAHAkADAoIAAADQgQAhgQAXQgWAdglAMQgMAFgOACIgMAWQgVAlgKAaQgWA0gmAnQgNAOgMAAQgKAAgJgKgABhkNQAEAcAPAYQAHAOANAKQAeAWAggXIAmgbIgRAAQgoACghgKQgigMgOgpQgCAFABAIgADQj9QARAAgCgXQACAXgRAAIAAAAIAAAAIgJgBIAJABIAAAAIAAAAgADFleIAAAGQAAAxAogWIADgBQAMgIAEgPIADgNIAAgBQANgEAFgJQgFAJgNAEIAAABIAAgIQAAgggigNQgbATgBAmgABclNQALAcAPgKQAFgDAFgIQAKgNAFgLQgQAEgNgBQgQAAgLgJQABAMAEALgACWluIgHAQIAHgQIAAgCQAHgygjAAIAAAAIAAAAIgBAAIAAAAIgBAAQgRABgHAOQgKATAAAUIABAIIgBAAQgYgHgFgNQAFANAYAHIABAAIAAAAIgBgIQAAgUAKgTQAHgOARgBIABAAIAAAAIABAAIAAAAIAAAAQAjAAgHAyIAAACgADFleQABgmAbgTQAiANAAAgIAAAIQgNAGgPABIgIAAQgMAAgOgDg");
	this.shape_5.setTransform(350.1,77);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(10));

	// RBicep
	this.instance_3 = new lib.static_carmen_RBicep("synched",0);
	this.instance_3.setTransform(331.2,68.4,0.997,0.997,17.2,0,0,35.8,7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({startPosition:0},0).to({regX:35.9,regY:7.4,rotation:-42.8,x:331.3,y:68.3},4).wait(1));

	// LBicep
	this.instance_4 = new lib.static_carmen_LBicep("synched",0);
	this.instance_4.setTransform(379.8,78,1,1,0,0,0,6.2,10.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5).to({startPosition:0},0).to({regX:6.3,rotation:30,x:380.2,y:82.1},4).wait(1));

	// moving leg
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.1,1,1).p("AJ2jzQgmA8glAlQgpAqgvAuQguAtgqAqQgwAxgqAiQgtAig9AOQg+AOhCAGQhCAGhEAKQhDAKg6AKQg/AKhDAMQhBAMgdAvQghA3g3AXQguATglgXQhAgoBIg3QAXgSAQgcQAcgzAng0QASgaAjALQAsAOA3AEQBDAGA5gfQA6geAxgjQA3glA6gSQBAgVBEgDQBLgDAZg/QAVg1Ang4QAbgmAXgmQAhg3AmgmQAOAZAQAUQAXAdAgAVQAfAVAjAOQAbALAcgB");
	this.shape_6.setTransform(260.5,182.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCC66").s().p("ApXFzQhAgoBIg3QAXgSAQgcQAcgzAng0QASgaAjALQAsAOA3AEQBDAGA5gfQA6geAxgjQA3glA6gSQBAgVBEgDQBLgDAZg/QAVg1Ang4QAbgmAXgmQAhg3AmgmQAOAZAQAUQAXAdAgAVQAfAVAjAOQAbALAcgBIAAAAQgmA8glAlIhYBYIhYBXQgwAxgqAiQgtAig9AOQg+AOhCAGQhCAGhEAKIh9AUIiCAWQhBAMgdAvQghA3g3AXQgVAJgSAAQgYAAgUgNg");
	this.shape_7.setTransform(260.5,182.3);

	this.instance_5 = new lib.static_Carmen_leg("synched",0);
	this.instance_5.setTransform(314.6,148.4,1,1,0,0,0,117.1,4.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).to({state:[{t:this.instance_5}]},5).to({state:[{t:this.instance_5}]},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(5).to({_off:false},0).to({regX:114.6,regY:10.6,rotation:-82.8,x:324.5,y:136.9},4).wait(1));

	// Layer 12
	this.instance_6 = new lib.static_ball("synched",0);
	this.instance_6.setTransform(362,234.6,1,1,0,0,0,23.1,23.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(5).to({_off:false},0).wait(5));

	// planted leg
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(0.1,1,1).p("ABxguQhPAJiSBUIAAAA");
	this.shape_8.setTransform(360.2,149.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(0.1,1,1).p("AgimKQAVAaAQAZQAUAbAVAgQATAdAcAZQAbAYAjAUQAgATAeAZQAVAUAOASQhDANg1AdQgtAZgvApQgwAtgcAtQgcAtg/AVQg4AUg0AeQgwAcg1AfQhAAmgTAxQAGBQBMgHQBDgFA4AXQAvAUA8AOQA0AMA2gDQBFgGgtgsQgegfg9ABQghAAgigHQhGgPAlhJQAQgeAlgJQA8gPA2gYQA7gbA5gZQA5gZA3gYQA3gYAygmQAwglAVguQAJgVAOgTQgBgJgCgIQgIgigIglQgIgkgRgiQgSgigRgiQgPgggPghQgPghgQgeQgQgegZgXQgIgGgOgNQgOgOgMgBAkfEsQguANASAu");
	this.shape_9.setTransform(352.3,194.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFCC66").s().p("AhtHhQg8gOgvgUQg3gXhEAFQhLAHgHhQQATgxBAgmIBlg7QA1geA3gUQA/gVAcgtQAcgtAwgtQAvgpAtgZQA1gdBDgNQgOgSgWgUQgdgZgggTQgjgUgagYQgdgZgTgdQgVgggTgbIglgzIAAgBIABAAQCRhWBQgJQAMABAOAOQAOANAIAGQAZAXAQAeQAPAeAPAhQAPAhARAgIAhBEQASAiAHAkIARBHIADARQgNATgKAVQgUAugxAlQgyAmg2AYIhxAxIh0A0Qg2AYg8APQglAJgQAeQglBJBGAPQAiAHAiAAQA8gBAeAfQAuAshGAGIgTABQgsAAgrgKgAk7FnQgFgNAAgKQAAgbAhgJQghAJAAAbQAAAKAFANg");
	this.shape_10.setTransform(352.3,194.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(196.5,20.2,291.2,224.1);


(lib.anim_carmen_blocksball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"start":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		playSound("ball_bounce");
	}
	this.frame_8 = function() {
		playSound("ball_kick");
	}
	this.frame_9 = function() {
		this.gotoAndPlay("start");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(5).call(this.frame_8).wait(1).call(this.frame_9).wait(1));

	// Layer 7
	this.instance = new lib.static_ball("synched",0);
	this.instance.setTransform(676.4,153.2,1,1,0,0,0,23.1,23.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[676.2,153.1,657.7,157.7,642.7,168.3,627.2,179.1,611.9,190.3,596.3,201.6,580.7,213,564,225.2,551,238.6,538.5,251.5,530.1,269.3,528,273.8,526.3,278.9]}},4).to({rotation:-1080,guide:{path:[526.3,278.9,525.8,259.5,518.4,240.3,511.1,221.2,501.7,204.3,492,187.1,482,172.1,472.5,157.7,459.4,146.5,445.4,134.8,428.7,127.1,412.5,119.7,394.3,118.3,380.6,117.2,364.2,113.2]}},5).wait(1));

	// body
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AF0nUQgGAGgFAGQgCAEgDADQgcAegoAOQhMAbhLgRQgvgLgagQQAwgSAighQAwguAZg4QAwimAUgjQAZgqA0giQAsgdAag4QAcg7AggqQAegnA/gVQA4gTBNAOQA6gMA6AdQA3AcAEBMQAEBGgYA2QgbA/AmA2QAXAjAdCTQgDAZgEAXQgCANgCALQgQBagXAlQgZAngeAoQgHAKgHAJQAAABgBAAQglAxg+ANQgUAEgRAEQAKgTALgSQAQgbAFgmQApgHAVgnQAagxgBg8QAAgCAAgCQAAgBAAAAQAQjHh2gCQAGgKAHgMQAOgCAMgEQAlgNAVgdQARgWAQghQAAgBAAgBQAAgBAAgBQgDgogHgjQgHgoAPgfQAFgMAJgKQgCgOgFgOQgEgPgGgMQgXgSgQggQAAAAAAgBQgBgBgCAAQgmgXgwATQgrARgjAVQgbAzgbAxQgbA1gTBBQgDAIgCAJQAKAbAbAVQADACACACQAZAUATATQAaAZApABQAZAAAVgEAMbwgQgBgBgCgBAMMtnQgOgKAGgTQgQABgSgDQAAACAAADQAAAxAogWQABAAABgBQANgIAEgPQACgHAAgGQABAAAAAAQANgEAEgKAMfuLQgMAGgPABALiuGQABgmAbgTQAmANgFAnAJ0uMIAAgBQgDgYAMgXQAHgNARgBQAmgCgJA1QgCAIgEAIQgQAEgNAAQgQgBgLgIQgBgBAAAAQgYgHgFgMAKsuHQgFAMgKANQgFAHgFAEQgPAKgLgcQgEgMgBgLAKPuDQgJAVANALAKQsBQgPgYgDgdQgBgHACgFQANApAjALQAhALAogCQAJgBAIAAQgUAOgSANQggAYgegXQgNgJgIgOgAILsVQgCAHgCAGQgJAggKAkQgCAKgDALQgRA+ggA3QgaArgtAaQgEASABAPAIgqzQgJAjAAAyQABBFAmArQAUAXAZgaQAmgoAWg2QAKgZAUgmAIgqzQAEgRARgdAH0rEQAUADAYAOAF3n1QgMAGgOAGQgtASgwABADlh6QAdgIAUghQAUghAPgkQAPgkAMgiQAMgiALgkQAKgjAEgmQAJAYAYAbQAYAbAgAQQAhARA7AOQA8APBAALQAXAEATgDAF5m9QgEgKgBgNANHsLQAAgCAAgCAMrnAQAAgDAAgCALksnQAaAHgCgdAJugvQAeAQAXAcQAVAYAUAhQATAfAVAfQALAQAQAOQAEADAFAEQAGAEAGAEQAZAXAQAfQAPAeAPAhQAPAhAQAfQARAiARAjQARAiAIAjQAJAlAIAjQACAIABAIQgOATgJAWQgVAwgwAlQgyAmg3AYQg3AYg5AYQg5AZg9AbQg2AZg8AOQglAKgQAdQglBKBGAPQAiAHAhgBQA9gBAgAfQAtAthHAGQg2ACg0gLQg8gOgvgUQg4gYhDAGQhMAHgGhRQATgwBAgmQA0ggAxgcQA0geA4gTQA/gWAcgtQAcgsAxgtQAvgsAtgYQA2gdBDgOQgOgSgWgTQgdgZgggTQgjgUgbgYQgcgZgTgeQgVgggUgbQgSgZgVgaQgEABgEABQgmAHglAHQglAHglABQgkABgiAFQgDAAgDABQgJABgKAAQgcABgbgKQgjgPgfgUQgggVgXgeQgQgUgNgZAMPCSQgVgNggAOQggAPgjANQgiANgkAPQggANgiAHAKqi/QgGANgHANQgOAdgUAcQgVAcAIAhQgPABgWAFQglAJgoAAQgFAAgEAAQgkgBgfgIQglgJgkgOQgkgPgdgVQgfgWgiAAAHxg/QgQAQASABQAGAAAKgBAEsD9QgJAIgQgFQgmA7glAmQgpAqgvAuQguAtgqAsQguAxgqAhQgtAjg9ANQg+APhCAFQhEAGhEAKQhDALg6AJQg/AKhDAMQhBAMgdAwQghA3g3AXQguATglgYQhAgoBIg3QAXgRAQgcQAcgzAng1QASgaAjALQAsAOA3AFQBDAFA5geQA6gfAxgiQA3gmA8gUQBAgUBEgDQBLgDAZg/QAVg2Ang3QAbgnAXglQAfg4AngmQgGgJgFgLQgQghgZgYQgNgNgNgJQAkADAigQQAigNAbgbQAcgaAagVQAbgXAZgPAESOYQguAMASAu");
	this.shape.setTransform(296,132.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("Ai0HZQgjgPgfgUQgggVgXgeQgQgUgOgZIgKgUQgQghgZgYQgNgNgPgJQAmADAigQQAigPAbgbQAcgaAagVQAbgXAZgPQAiAAAfAWQAdAVAkAPQAkAOAjAJQAfAIAkABIAJAAQAoAAAlgJQAWgFAPgBQAeAQAXAcQAVAaAUAhQATAfAVAfQALAQAQAOQgVgNggAOQggAPgjANIhGAcQggANgiAHIgIACIhLAOQglAHgjABQglABgiAFIgFABIgTABIgEAAQgaAAgZgJgAEYhDQhAgLg8gPQg8gOgggRQgggQgYgbQgWgbgJgYQgEgLgBgMQgBgPAEgSQArgaAagrQAgg3ARg+IAFgVQAUADAXAOQgJAjABAyQABBFAmArQAUAXAZgaQAmgoAWg2QAKgZAUgmQB2ACgQDHIAAACIAAADIAAgDIAAgCIAAABIAAAEQAAA8gZAxQgVAngpAHIgRABQgMAAgNgCg");
	this.shape_1.setTransform(336.2,109.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhFgLQANABAQgEQgFALgJALQgGAIgFADQgNgKAJgUgAAugLQAPgBANgGIgDANQgEANgMAIQgOgLAFgQg");
	this.shape_2.setTransform(368.6,43.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaBLQgMgJgIgOQgPgYgEgcQgBgGACgFQAOAnAjALQAeALApgCIAQgBIgmAbQgQAMgQAAQgNAAgPgLgAAhhKIAAgFQATAEAPgCQgFATAOAKIgCABQgNAHgIAAQgUAAAAgigAhFg+QgFgMgBgLQAMAIAQABQgKAVANALQgEACgDAAQgKAAgIgUg");
	this.shape_3.setTransform(366.5,49.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#993300").s().p("ADJGmQAQgcAGgmQApgGAVgoQAZgwAAg9IAAgDIAAgCQAPjEh1gCIAMgWQAOgDAMgEQAlgMAWgdQAQgXAQghIABgBIgBgCQgCgpgHgjQgIgoAPgfQAGgLAJgLQgDgOgEgOQgFgOgGgNQgXgRgPggIgBgBIgCgCQgngWgwATQgqARgjAVIg2BkQgcA1gTBAIgFASIgDANIgSBDIgFAVQgQA9ghA3QgZAqgtAaQgNAHgNAGQgtASgxAAQAxAAAtgSQANgGANgHQgEASABAPIgLAMIgFAIQgdAegnAOQhMAbhLgRQgwgLgZgRQAvgRAigiQAwguAZg3QAxilAUgiQAZgrA0giQAsgdAag3QAcg7AggrQAbgnA/gVQA5gSBMANQA7gLA5AdQA4AcAEBMQADBGgXA2QgbA+AlA3QAYAjAcCRIgGAvIgFAZQgQBZgXAlQgZAngdApIgPATIAAABQglAxg+AMIgmAJQAKgUALgRgAh8CUIAAAAgAAAg5IAShDIADgNQALAaAbAVIAFAEQgSAegEAQQgXgOgTgDgAEjmXIACACIABABIgDgDg");
	this.shape_4.setTransform(346.2,67.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC66").s().p("AHEQ5Qg8gOgvgUQg4gXhDAFQhMAHgGhQQATgxBAgmIBlg7QA0geA4gUQA/gVAcgtQAcgtAxgtQAvgrAtgZQA2gdBDgNQgOgSgWgUQgdgZgggTQgjgUgbgYQgcgZgTgdQgVgggUgbIgngzQAigHAggOIBGgcQAjgNAggOQAggOAVAMIAJAIIAMAIQAZAXAQAeQAPAeAPAhQAPAhAQAgIAiBEQARAiAIAkIARBHIADARQgOATgJAVQgVAwgwAlQgyAmg3AYIhwAxIh2A0Qg2AYg8APQglAJgQAeQglBJBGAPQAiAHAhAAQA9gBAgAfQAtAshHAGIgTABQgsAAgrgKgAD2O/QgFgNAAgKQAAgbAhgJQghAJAAAbQAAAKAFANgAu6NUQhAgoBIg3QAXgSAQgcQAcgzAng0QASgaAjALQAsAOA3AEQBDAGA5gfQA6geAxgjQA3glA8gUQBAgVBEgDQBLgDAZg/QAVg1Ang4QAbgmAXgmQAfg3AngmQANAZAQAUQAXAdAgAVQAfAVAjAOQAbALAcgBIAAAAQgmA8glAlIhYBYIhYBZQguAxgqAiQgtAig9AOQg+AOhCAGQhEAGhEAKIh9AUIiCAWQhBAMgdAvQghA3g3AXQgUAJgTAAQgXAAgVgNgAHzgzQgkgBgfgIQglgKgkgOQgkgOgdgVQgfgWgiAAQAdgIAUghQAUghAPgkQAPgkAMgiQAMgjALgjQAKgkAEglQAJAYAYAbQAYAaAgARQAhARA7AOQA8AOBAALQAXAEATgDQgFAmgQAcQgLASgKATIgNAaQgOAdgUAcQgVAcAIAhQgPAAgWAGQglAIgoABIgJAAgAIDhCIAAAAIAAAAQgKABgGAAQgKgBAAgFQAAgEAIgHQgIAHAAAEQAAAFAKABQAGAAAKgBgAI+oBQgmgrgBhGQAAgyAJgjQAEgQARgeQAZAUATATQAaAaApAAIADAAIADAAIAAAAIABAAQAVAAASgDQgSADgVAAIgBAAIAAAAIgDAAIgDAAQgpAAgagaQgTgTgZgUIgFgEQgbgVgKgaIAFgSQAThAAbg1IA2hkQAjgVArgRQAwgTAmAWIADADQAQAgAXASQAGAMAEAOQAFAOACAOQgJALgFALQgPAfAHAoQAHAkADAoIAAADQgQAhgRAXQgVAdglAMQgMAFgOACIgNAWQgUAlgKAaQgWA2gmAnQgOAOgLAAQgLAAgJgKgAJ+tJQADAcAPAYQAIAOANAKQAeAWAggXIAmgbIgRAAQgoACghgKQgjgMgNgpQgCAFABAIgALts5QAQAAgBgXQABAXgQAAIAAAAIAAAAIgJgBIAJABIAAAAIAAAAgALiuaIAAAGQAAAxAogWIACgBQANgIAEgPIACgNIABgBQANgEAEgJQgEAJgNAEIgBABIABgIQAAgggigNQgbATgBAmgAJ5uJQALAcAPgKQAFgDAFgIQAKgNAFgLQgQAEgNgBQgQAAgLgJQABAMAEALgAKyuqIgGAQIAGgQIABgCQAHgxgjgBIAAAAIAAAAIgBAAIAAAAIgBAAQgRABgHAOQgKATAAAUIABAIIgBAAQgYgHgFgNQAFANAYAHIABAAIAAAAIgBgIQAAgUAKgTQAHgOARgBIABAAIAAAAIABAAIAAAAIAAAAQAjABgHAxIgBACgALiuaQABgmAbgTQAiANAAAgIgBAIQgMAGgPABIgIAAQgMAAgOgDg");
	this.shape_5.setTransform(296,134.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(10));

	// LForearm
	this.instance_1 = new lib.static_carmen_LForearm("synched",0);
	this.instance_1.setTransform(414.7,59.9,0.997,0.997,-55.2,0,0,4.6,57.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,rotation:21,x:421.4,y:82.1},9).wait(1));

	// RForearm
	this.instance_2 = new lib.static_carmen_RForearm("synched",0);
	this.instance_2.setTransform(310.9,39.6,1,1,105,0,0,59,34);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:15,x:293,y:58.2},9).wait(1));

	// LBicep
	this.instance_3 = new lib.static_carmen_LBicep("synched",0);
	this.instance_3.setTransform(379.9,77.9,1,1,-30,0,0,6.3,10.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:6.2,rotation:0,x:379.8,y:78},9).wait(1));

	// RBicep
	this.instance_4 = new lib.static_carmen_RBicep("synched",0);
	this.instance_4.setTransform(331.2,68.4,0.999,0.999,54.1,0,0,35.8,7.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:7.5,scaleX:1,scaleY:1,rotation:17.2},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(196.5,-12.7,503.9,257.1);


(lib.anim_carmen_blocks = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"start":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		playSound("carmen_blocks");
	}
	this.frame_2 = function() {
		playSound("carmen_blocks");
	}
	this.frame_14 = function() {
		this.gotoAndPlay("start");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(12).call(this.frame_14).wait(1));

	// body
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AF0nUQgGAGgFAGQgCAEgDADQgcAegoAOQhMAbhLgRQgvgLgagQQAwgSAighQAwguAZg4QAwimAUgjQAZgqA0giQAsgdAag4QAcg7AggqQAegnA/gVQA4gTBNAOQA6gMA6AdQA3AcAEBMQAEBGgYA2QgbA/AmA2QAXAjAdCTQgDAZgEAXQgCANgCALQgQBagXAlQgZAngeAoQgHAKgHAJQAAABgBAAQglAxg+ANQgUAEgRAEQAKgTALgSQAQgbAFgmQApgHAVgnQAagxgBg8QAAgCAAgCQAAgBAAAAQAQjHh2gCQAGgKAHgMQAOgCAMgEQAlgNAVgdQARgWAQghQAAgBAAgBQAAgBAAgBQAAACAAACANHsPQgDgogHgjQgHgoAPgfQAFgMAJgKQgCgOgFgOQgEgPgGgMQgXgSgQggQAAAAAAgBQgBgBgCAAQgmgXgwATQgrARgjAVQgbAzgbAxQgbA1gTBBQgDAIgCAJQgCAHgCAGQgJAggKAkAMbwgQgBgBgCgBAMEuEQgQABgSgDQAAACAAADQAAAxAogWQABAAABgBQANgIAEgPQACgHAAgGQgMAGgPABQgGATAOAKAMfuLQABAAAAAAQANgEAEgKAMfuLQAFgngmgNQgbATgBAmAJ0uMIAAgBQgDgYAMgXQAHgNARgBQAmgCgJA1QgCAIgEAIQgQAEgNAAAJ0uMQgBgBAAAAQgYgHgFgMAKsuHQgFAMgKANQgFAHgFAEQgPAKgLgcQgEgMgBgLAKTtjQgNgLAJgVQgQgBgLgIAJ+s2QgBgHACgFQANApAjALQAhALAogCQAJgBAIAAQgUAOgSANQggAYgegXQgNgJgIgOQgPgYgDgdgAILsVQAKAbAbAVQADACACACQAZAUATATQAaAZApABQAZAAAVgEAIgqzQgJAjAAAyQABBFAmArQAUAXAZgaQAmgoAWg2QAKgZAUgmAIgqzQgYgOgUgDQgCAKgDALQgRA+ggA3QgaArgtAaQgMAGgOAGQgtASgwABAI1rhQgRAdgEARAF0nUQgBgPAEgSADlh6QAdgIAUghQAUghAPgkQAPgkAMgiQAMgiALgkQAKgjAEgmQAJAYAYAbQAYAbAgAQQAhARA7AOQA8APBAALQAXAEATgDAF5m9QgEgKgBgNAMrnAQAAgDAAgCALksnQAaAHgCgdAJugvQAeAQAXAcQAVAYAUAhQATAfAVAfQALAQAQAOQgVgNggAOQggAPgjANQgiANgkAPQggANgiAHQgEABgEABQgmAHglAHQglAHglABQgkABgiAFQgDAAgDABQgJABgKAAQgcABgbgKQgjgPgfgUQgggVgXgeQgQgUgNgZAMPCSQAEADAFAEQAGAEAGAEQAZAXAQAfQAPAeAPAhQAPAhAQAfQARAiARAjQARAiAIAjQAJAlAIAjQACAIABAIQgOATgJAWQgVAwgwAlQgyAmg3AYQg3AYg5AYQg5AZg9AbQg2AZg8AOQglAKgQAdQglBKBGAPQAiAHAhgBQA9gBAgAfQAtAthHAGQg2ACg0gLQg8gOgvgUQg4gYhDAGQhMAHgGhRQATgwBAgmQA0ggAxgcQA0geA4gTQA/gWAcgtQAcgsAxgtQAvgsAtgYQA2gdBDgOQgOgSgWgTQgdgZgggTQgjgUgbgYQgcgZgTgeQgVgggUgbQgSgZgVgaAKqi/QgGANgHANQgOAdgUAcQgVAcAIAhADlh6QAiAAAfAWQAdAVAkAPQAkAOAlAJQAfAIAkABQAEAAAFAAQAoAAAlgJQAWgFAPgBAHxg/QgQAQASABQAGAAAKgBAEsD9QgJAIgQgFQgmA7glAmQgpAqgvAuQguAtgqAsQguAxgqAhQgtAjg9ANQg+APhCAFQhEAGhEAKQhDALg6AJQg/AKhDAMQhBAMgdAwQghA3g3AXQguATglgYQhAgoBIg3QAXgRAQgcQAcgzAng1QASgaAjALQAsAOA3AFQBDAFA5geQA6gfAxgiQA3gmA8gUQBAgUBEgDQBLgDAZg/QAVg2Ang3QAbgnAXglQAfg4AngmQgGgJgFgLQgQghgZgYQgNgNgNgJQAkADAigQQAigNAbgbQAcgaAagVQAbgXAZgPAESOYQguAMASAu");
	this.shape.setTransform(296,132.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("Ai0HZQgjgPgfgUQgggVgXgeQgQgUgOgZIgKgUQgQghgZgYQgNgNgPgJQAmADAigQQAigPAbgbQAcgaAagVQAbgXAZgPQAiAAAfAWQAdAVAkAPQAkAOAjAJQAfAIAkABIAJAAQAoAAAlgJQAWgFAPgBQAeAQAXAcQAVAaAUAhQATAfAVAfQALAQAQAOQgVgNggAOQggAPgjANIhGAcQggANgiAHIgIACIhLAOQglAHgjABQglABgiAFIgFABIgTABIgEAAQgaAAgZgJgAEYhDQhAgLg8gPQg8gOgggRQgggQgYgbQgWgbgJgYQgEgLgBgMQgBgPAEgSQArgaAagrQAgg3ARg+IAFgVQAUADAXAOQgJAjABAyQABBFAmArQAUAXAZgaQAmgoAWg2QAKgZAUgmQB2ACgQDHIAAACIAAADIAAgDIAAgCIAAABIAAAEQAAA8gZAxQgVAngpAHIgRABQgMAAgNgCgAGZjiIAAAAg");
	this.shape_1.setTransform(336.2,109.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhFgLQANABAQgEQgFALgJALQgGAIgFADQgNgKAJgUgAAugLQAPgBANgGIgDANQgEANgMAIQgOgLAFgQg");
	this.shape_2.setTransform(368.6,43.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaBLQgMgJgIgOQgPgYgEgcQgBgGACgFQAOAnAjALQAeALApgCIAQgBIgmAbQgQAMgQAAQgNAAgPgLgAAhhKIAAgFQATAEAPgCQgFATAOAKIgCABQgNAHgIAAQgUAAAAgigAhFg+QgFgMgBgLQAMAIAQABQgKAVANALQgEACgDAAQgKAAgIgUg");
	this.shape_3.setTransform(366.5,49.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#993300").s().p("ADJGmQAQgcAGgmQApgGAVgoQAZgwAAg9IAAgDIAAgCQAPjEh1gCIAMgWQAOgDAMgEQAlgMAWgdQAQgXAQghIABgBIgBgCQgCgpgHgjQgIgoAPgfQAGgLAJgLQgDgOgEgOQgFgOgGgNQgXgRgPggIgBgBIgCgCQgngWgwATQgqARgjAVIg2BkQgcA1gTBAIgFASQALAaAbAVIAFAEQgSAegEAQQgXgOgTgDIAShDIADgNIgDANIgSBDIgFAVQgQA9ghA3QgZAqgtAaQgNAHgNAGQgtASgxAAQAxAAAtgSQANgGANgHQgEASABAPIgLAMIgFAIQgdAegnAOQhMAbhLgRQgwgLgZgRQAvgRAigiQAwguAZg3QAxilAUgiQAZgrA0giQAsgdAag3QAcg7AggrQAbgnA/gVQA5gSBMANQA7gLA5AdQA4AcAEBMQADBGgXA2QgbA+AlA3QAYAjAcCRIgGAvIgFAZQgQBZgXAlQgZAngdApIgPATIAAABQglAxg+AMIgmAJQAKgUALgRgAh8CUIAAAAgAEjmXIACACIABABIgDgDg");
	this.shape_4.setTransform(346.2,67.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC66").s().p("AHEQ5Qg8gOgvgUQg4gXhDAFQhMAHgGhQQATgxBAgmIBlg7QA0geA4gUQA/gVAcgtQAcgtAxgtQAvgrAtgZQA2gdBDgNQgOgSgWgUQgdgZgggTQgjgUgbgYQgcgZgTgdQgVgggUgbIgngzQAigHAggOIBGgcQAjgNAggOQAggOAVAMIAJAIIAMAIQAZAXAQAeQAPAeAPAhQAPAhAQAgIAiBEQARAiAIAkIARBHIADARQgOATgJAVQgVAwgwAlQgyAmg3AYIhwAxIh2A0Qg2AYg8APQglAJgQAeQglBJBGAPQAiAHAhAAQA9gBAgAfQAtAshHAGIgTABQgsAAgrgKgAD2O/QgFgNAAgKQAAgbAhgJQghAJAAAbQAAAKAFANgAu6NUQhAgoBIg3QAXgSAQgcQAcgzAng0QASgaAjALQAsAOA3AEQBDAGA5gfQA6geAxgjQA3glA8gUQBAgVBEgDQBLgDAZg/QAVg1Ang4QAbgmAXgmQAfg3AngmQANAZAQAUQAXAdAgAVQAfAVAjAOQAbALAcgBIAAAAQgmA8glAlIhYBYIhYBZQguAxgqAiQgtAig9AOQg+AOhCAGQhEAGhEAKIh9AUIiCAWQhBAMgdAvQghA3g3AXQgUAJgTAAQgXAAgVgNgAHzgzQgkgBgfgIQglgKgkgOQgkgOgdgVQgfgWgiAAQAdgIAUghQAUghAPgkQAPgkAMgiQAMgjALgjQAKgkAEglQAJAYAYAbQAYAaAgARQAhARA7AOQA8AOBAALQAXAEATgDQgFAmgQAcQgLASgKATIgNAaQgOAdgUAcQgVAcAIAhQgPAAgWAGQglAIgoABIgJAAgAIDhCIAAAAIAAAAQgKABgGAAQgKgBAAgFQAAgEAIgHQgIAHAAAEQAAAFAKABQAGAAAKgBgAI+oBQgmgrgBhGQAAgyAJgjQAEgQARgeQAZAUATATQAaAaApAAIADAAIADAAIAAAAIABAAQAVAAASgDQgSADgVAAIgBAAIAAAAIgDAAIgDAAQgpAAgagaQgTgTgZgUIgFgEQgbgVgKgaIAFgSQAThAAbg1IA2hkQAjgVArgRQAwgTAmAWIADADQAQAgAXASQAGAMAEAOQAFAOACAOQgJALgFALQgPAfAHAoQAHAkADAoIAAADQgQAhgRAXQgVAdglAMQgMAFgOACIgNAWQgUAlgKAaQgWA2gmAnQgOAOgLAAQgLAAgJgKgAJ+tJQADAcAPAYQAIAOANAKQAeAWAggXIAmgbIgRAAQgoACghgKQgjgMgNgpQgCAFABAIgALts5QAQAAgBgXQABAXgQAAIAAAAIAAAAIgJgBIAJABIAAAAIAAAAgALiuUQAAAxAogWIACgBQANgIAEgPIACgNQgMAGgPABQgQABgSgEQABgmAbgTQAiANAAAgIgBAIIABgBQANgEAEgJQgEAJgNAEIgBABIABgIQAAgggigNQgbATgBAmIAAAGgAJ5uJQALAcAPgKQAFgDAFgIQAKgNAFgLQgQAEgNgBQgQAAgLgJQABAMAEALgAKyuqIgGAQIAGgQIABgCQAHgxgjgBIAAAAIAAAAIgBAAIAAAAIgBAAQgRABgHAOQgKATAAAUIABAIIgBAAQgYgHgFgNQAFANAYAHIABAAIAAAAIgBgIQAAgUAKgTQAHgOARgBIABAAIAAAAIABAAIAAAAIAAAAQAjABgHAxIgBACg");
	this.shape_5.setTransform(296,134.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_5},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_5},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},13).wait(1));

	// LForearm
	this.instance = new lib.static_carmen_LForearm("synched",0);
	this.instance.setTransform(414.7,59.9,0.997,0.997,-55.2,0,0,4.6,57.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:21,x:421.4,y:82.1},9).wait(6));

	// RForearm
	this.instance_1 = new lib.static_carmen_RForearm("synched",0);
	this.instance_1.setTransform(310.9,39.6,1,1,105,0,0,59,34);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:15,x:293,y:58.2},9).wait(6));

	// LBicep
	this.instance_2 = new lib.static_carmen_LBicep("synched",0);
	this.instance_2.setTransform(379.9,77.9,1,1,-30,0,0,6.3,10.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:6.2,rotation:0,x:379.8,y:78},9).wait(6));

	// RBicep
	this.instance_3 = new lib.static_carmen_RBicep("synched",0);
	this.instance_3.setTransform(331.2,68.4,0.999,0.999,54.1,0,0,35.8,7.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:7.5,scaleX:1,scaleY:1,rotation:17.2},9).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(196.5,-12.7,226,257.1);


(lib.Diagramblocks = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"blocks subject":63,"blocks verb":149,"blocks complement":214,"blocks review":325});

	// timeline functions:
	this.frame_4 = function() {
		playSound("thesubjectisalways");
	}
	this.frame_74 = function() {
		playSound("cowbell_3times");
	}
	this.frame_75 = function() {
		playSound("carmen");
	}
	this.frame_150 = function() {
		playSound("cowbell_3times");
	}
	this.frame_151 = function() {
		playSound("carmenblocks");
	}
	this.frame_214 = function() {
		playSound("cowbell_3times");
	}
	this.frame_216 = function() {
		playSound("carmenblockstheshot");
	}
	this.frame_283 = function() {
		playSound("carmen_blocks");
	}
	this.frame_297 = function() {
		playSound("ball_kick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(70).call(this.frame_74).wait(1).call(this.frame_75).wait(75).call(this.frame_150).wait(1).call(this.frame_151).wait(63).call(this.frame_214).wait(2).call(this.frame_216).wait(67).call(this.frame_283).wait(14).call(this.frame_297).wait(89));

	// textClips
	this.instance = new lib.Wordsverb();
	this.instance.setTransform(-261.9,430.1,1,1,0,0,0,50.7,14.6);

	this.instance_1 = new lib.Wordscomplement();
	this.instance_1.setTransform(-86,430.1,1,1,0,0,0,50.7,14.6);

	this.instance_2 = new lib.Wordssubject();
	this.instance_2.setTransform(-434.9,431.8,1,1,0,0,0,50.7,19.7);

	this.instance_3 = new lib.staticperiod("synched",0);
	this.instance_3.setTransform(-134.9,706,1,1,0,0,0,6.9,17.3);

	this.instance_4 = new lib.Wordsshot();
	this.instance_4.setTransform(-161.3,717.2,1,1,0,0,0,73.5,17.7);

	this.instance_5 = new lib.Wordsthe();
	this.instance_5.setTransform(-208,717.2,1,1,0,0,0,73.5,22.9);

	this.instance_6 = new lib.Wordsblocks();
	this.instance_6.setTransform(-264.3,717.2,1,1,0,0,0,73.5,22.9);

	this.instance_7 = new lib.Wordscarmen();
	this.instance_7.setTransform(-336.1,717.2,1,1,0,0,0,73.5,22.9);

	this.instance_8 = new lib.Wordswho();
	this.instance_8.setTransform(-430.2,516.5,1,1,0,0,0,51.8,10.4);

	this.instance_9 = new lib.Wordscarmen();
	this.instance_9.setTransform(-336.1,717.2,1,1,0,0,0,73.5,22.9);

	this.instance_10 = new lib.Wordsdoes();
	this.instance_10.setTransform(-261.2,509.1,1,1,0,0,0,73.5,16);

	this.instance_11 = new lib.Wordsblocks();
	this.instance_11.setTransform(-264.3,717.2,1,1,0,0,0,73.5,22.9);

	this.instance_12 = new lib.WordsTowhat();
	this.instance_12.setTransform(-83.6,511.4,1,1,0,0,0,51.8,16);

	this.instance_13 = new lib.Wordsshot();
	this.instance_13.setTransform(-161.3,717.2,1,1,0,0,0,73.5,17.7);

	this.instance_14 = new lib.Wordsthe();
	this.instance_14.setTransform(-208,717.2,1,1,0,0,0,73.5,22.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},51).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_8},{t:this.instance_7,p:{x:-336.1,y:717.2}},{t:this.instance_6,p:{regY:22.9,x:-264.3,y:717.2}},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-208,y:717.2}},{t:this.instance_4,p:{regY:17.7,x:-161.3,y:717.2}},{t:this.instance_3}]},12).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_9},{t:this.instance_6,p:{regY:22.9,x:-264.3,y:717.2}},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-208,y:717.2}},{t:this.instance_4,p:{regY:17.7,x:-161.3,y:717.2}},{t:this.instance_7,p:{x:-429.2,y:526.4}},{t:this.instance_3}]},12).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{x:-336.1,y:717.2}},{t:this.instance_6,p:{regY:22.9,x:-264.3,y:717.2}},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-208,y:717.2}},{t:this.instance_4,p:{regY:17.7,x:-161.3,y:717.2}},{t:this.instance_3}]},11).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{x:-336.1,y:717.2}},{t:this.instance_6,p:{regY:22.9,x:-264.3,y:717.2}},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-208,y:717.2}},{t:this.instance_4,p:{regY:17.7,x:-161.3,y:717.2}},{t:this.instance_3},{t:this.instance_8}]},18).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_9},{t:this.instance_6,p:{regY:22.9,x:-264.3,y:717.2}},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-208,y:717.2}},{t:this.instance_4,p:{regY:17.7,x:-161.3,y:717.2}},{t:this.instance_7,p:{x:-429.2,y:526.4}},{t:this.instance_3}]},10).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{x:-336.1,y:717.2}},{t:this.instance_6,p:{regY:22.9,x:-264.3,y:717.2}},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-208,y:717.2}},{t:this.instance_4,p:{regY:17.7,x:-161.3,y:717.2}},{t:this.instance_3}]},10).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{x:-336.1,y:717.2}},{t:this.instance_6,p:{regY:22.9,x:-264.3,y:717.2}},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-208,y:717.2}},{t:this.instance_4,p:{regY:17.7,x:-161.3,y:717.2}},{t:this.instance_3},{t:this.instance_10}]},13).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{x:-336.1,y:717.2}},{t:this.instance_11},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-208,y:717.2}},{t:this.instance_4,p:{regY:17.7,x:-161.3,y:717.2}},{t:this.instance_3},{t:this.instance_6,p:{regY:14.6,x:-265.2,y:513}}]},14).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{x:-336.1,y:717.2}},{t:this.instance_6,p:{regY:22.9,x:-264.3,y:717.2}},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-208,y:717.2}},{t:this.instance_4,p:{regY:17.7,x:-161.3,y:717.2}},{t:this.instance_3}]},11).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{x:-336.1,y:717.2}},{t:this.instance_11},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-208,y:717.2}},{t:this.instance_4,p:{regY:17.7,x:-161.3,y:717.2}},{t:this.instance_3},{t:this.instance_6,p:{regY:14.6,x:-265.2,y:513}}]},11).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{x:-336.1,y:717.2}},{t:this.instance_6,p:{regY:22.9,x:-264.3,y:717.2}},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-208,y:717.2}},{t:this.instance_4,p:{regY:17.7,x:-161.3,y:717.2}},{t:this.instance_3}]},12).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{x:-336.1,y:717.2}},{t:this.instance_6,p:{regY:22.9,x:-264.3,y:717.2}},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-208,y:717.2}},{t:this.instance_4,p:{regY:17.7,x:-161.3,y:717.2}},{t:this.instance_3},{t:this.instance_12}]},20).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{x:-336.1,y:717.2}},{t:this.instance_6,p:{regY:22.9,x:-264.3,y:717.2}},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-208,y:717.2}},{t:this.instance_13},{t:this.instance_3},{t:this.instance_4,p:{regY:9.3,x:-85,y:513.3}}]},10).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{x:-336.1,y:717.2}},{t:this.instance_6,p:{regY:22.9,x:-264.3,y:717.2}},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-208,y:717.2}},{t:this.instance_4,p:{regY:17.7,x:-161.3,y:717.2}},{t:this.instance_3}]},11).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{x:-336.1,y:717.2}},{t:this.instance_6,p:{regY:22.9,x:-264.3,y:717.2}},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-208,y:717.2}},{t:this.instance_4,p:{regY:17.7,x:-161.3,y:717.2}},{t:this.instance_3},{t:this.instance_12}]},10).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{x:-336.1,y:717.2}},{t:this.instance_6,p:{regY:22.9,x:-264.3,y:717.2}},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-208,y:717.2}},{t:this.instance_13},{t:this.instance_3},{t:this.instance_4,p:{regY:9.3,x:-85,y:513.3}}]},10).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{x:-336.1,y:717.2}},{t:this.instance_6,p:{regY:22.9,x:-264.3,y:717.2}},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-208,y:717.2}},{t:this.instance_4,p:{regY:17.7,x:-161.3,y:717.2}},{t:this.instance_3}]},9).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{x:-336.1,y:717.2}},{t:this.instance_6,p:{regY:22.9,x:-264.3,y:717.2}},{t:this.instance_5,p:{regY:22.9,rotation:0,x:-208,y:717.2}},{t:this.instance_4,p:{regY:17.7,x:-161.3,y:717.2}},{t:this.instance_3}]},21).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{x:-336.1,y:717.2}},{t:this.instance_6,p:{regY:22.9,x:-264.3,y:717.2}},{t:this.instance_14},{t:this.instance_4,p:{regY:17.7,x:-161.3,y:717.2}},{t:this.instance_3},{t:this.instance_5,p:{regY:14.6,rotation:45,x:-90.8,y:622}}]},22).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{x:-336.1,y:717.2}},{t:this.instance_6,p:{regY:22.9,x:-264.3,y:717.2}},{t:this.instance_14},{t:this.instance_13},{t:this.instance_3},{t:this.instance_5,p:{regY:14.6,rotation:45,x:-90.8,y:622}},{t:this.instance_4,p:{regY:9.3,x:-85,y:513.3}}]},9).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_9},{t:this.instance_6,p:{regY:22.9,x:-264.3,y:717.2}},{t:this.instance_14},{t:this.instance_4,p:{regY:17.7,x:-161.3,y:717.2}},{t:this.instance_3},{t:this.instance_5,p:{regY:14.6,rotation:45,x:-90.8,y:622}},{t:this.instance_7,p:{x:-429.2,y:526.4}}]},9).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{x:-336.1,y:717.2}},{t:this.instance_11},{t:this.instance_14},{t:this.instance_4,p:{regY:17.7,x:-161.3,y:717.2}},{t:this.instance_3},{t:this.instance_5,p:{regY:14.6,rotation:45,x:-90.8,y:622}},{t:this.instance_6,p:{regY:14.6,x:-265.2,y:513}}]},8).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{x:-336.1,y:717.2}},{t:this.instance_6,p:{regY:22.9,x:-264.3,y:717.2}},{t:this.instance_14},{t:this.instance_4,p:{regY:17.7,x:-161.3,y:717.2}},{t:this.instance_3},{t:this.instance_5,p:{regY:14.6,rotation:45,x:-90.8,y:622}}]},8).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{x:-336.1,y:717.2}},{t:this.instance_6,p:{regY:22.9,x:-264.3,y:717.2}},{t:this.instance_14},{t:this.instance_13},{t:this.instance_3},{t:this.instance_5,p:{regY:14.6,rotation:45,x:-90.8,y:622}},{t:this.instance_4,p:{regY:9.3,x:-85,y:513.3}}]},8).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7,p:{x:-336.1,y:717.2}},{t:this.instance_6,p:{regY:22.9,x:-264.3,y:717.2}},{t:this.instance_14},{t:this.instance_4,p:{regY:17.7,x:-161.3,y:717.2}},{t:this.instance_3},{t:this.instance_5,p:{regY:14.6,rotation:45,x:-90.8,y:622}}]},9).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_9},{t:this.instance_6,p:{regY:22.9,x:-264.3,y:717.2}},{t:this.instance_14},{t:this.instance_4,p:{regY:17.7,x:-161.3,y:717.2}},{t:this.instance_3},{t:this.instance_5,p:{regY:14.6,rotation:45,x:-90.8,y:622}},{t:this.instance_7,p:{x:-429.2,y:526.4}}]},6).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_9},{t:this.instance_11},{t:this.instance_14},{t:this.instance_4,p:{regY:17.7,x:-161.3,y:717.2}},{t:this.instance_3},{t:this.instance_5,p:{regY:14.6,rotation:45,x:-90.8,y:622}},{t:this.instance_6,p:{regY:14.6,x:-265.2,y:513}},{t:this.instance_7,p:{x:-429.2,y:526.4}}]},6).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_9},{t:this.instance_11},{t:this.instance_14},{t:this.instance_13},{t:this.instance_3},{t:this.instance_5,p:{regY:14.6,rotation:45,x:-90.8,y:622}},{t:this.instance_4,p:{regY:9.3,x:-85,y:513.3}},{t:this.instance_6,p:{regY:14.6,x:-265.2,y:513}},{t:this.instance_7,p:{x:-429.2,y:526.4}}]},5).wait(20));

	// Layer 25 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AusI7IAAx1IdZAAIAAR1g");
	mask.setTransform(-263.4,523.4);

	// verb section
	this.instance_15 = new lib.anim_carmen_blocksball();
	this.instance_15.setTransform(-225.3,523.5,0.362,0.362,0,0,0,448.4,112.1);
	this.instance_15._off = true;

	this.instance_15.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(162).to({_off:false},0).to({_off:true},11).wait(12).to({_off:false},0).wait(20).to({_off:true},119).wait(8).to({_off:false},0).to({_off:true},29).wait(25));

	// only thing visible (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AO5NEIAA0RIV+AAIAAURgEgk2ANEIAA6HISWAAIAAaHg");
	mask_1.setTransform(-252.9,493.7);

	// images
	this.instance_16 = new lib.anim_carmen_blocks();
	this.instance_16.setTransform(-429.9,523,0.379,0.379,0,0,0,325.4,112.2);
	this.instance_16._off = true;

	this.instance_17 = new lib.anim_carmen_blocksballdrops();
	this.instance_17.setTransform(-62.9,520.4,0.359,0.359,0,0,0,448.4,112.2);

	this.instance_16.mask = this.instance_17.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_16}]},86).to({state:[]},18).to({state:[{t:this.instance_16}]},20).to({state:[{t:this.instance_16}]},14).to({state:[{t:this.instance_16}]},24).to({state:[{t:this.instance_16},{t:this.instance_17}]},64).to({state:[{t:this.instance_16}]},10).to({state:[{t:this.instance_16}]},10).to({state:[{t:this.instance_16},{t:this.instance_17}]},9).to({state:[{t:this.instance_16},{t:this.instance_17}]},21).to({state:[{t:this.instance_16}]},31).to({state:[{t:this.instance_17}]},9).to({state:[{t:this.instance_16},{t:this.instance_17}]},8).to({state:[{t:this.instance_16}]},16).to({state:[{t:this.instance_16},{t:this.instance_17}]},9).to({state:[{t:this.instance_17}]},6).to({state:[]},11).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(86).to({_off:false},0).to({_off:true},18).wait(20).to({_off:false},0).wait(183).to({_off:true},9).wait(8).to({_off:false},0).wait(25).to({_off:true},6).wait(31));

	// pen
	this.pen = new lib.anim_pencil();
	this.pen.setTransform(31.9,-28.2);

	this.timeline.addTween(cjs.Tween.get(this.pen).to({regX:-7.2,regY:352,x:-490.4,y:577.4},4).to({x:-27.9,y:583.8},10).to({x:-378.4,y:472.3},5).to({y:652.6},6).to({x:-173.5,y:474.1},5).to({x:-172,y:583.8},7).to({x:27.8,y:370},7).to({_off:true},1).wait(231).to({_off:false,regX:164.1,regY:174.6,x:251,y:169.9},0).to({x:1,y:407.1},7).to({x:89.4,y:492.5},7).to({x:271.7,y:426.8},7).to({_off:true},1).wait(88));

	// diag bar
	this.instance_18 = new lib.static_bar();
	this.instance_18.setTransform(-155.4,580.6,1,1,-30,0,0,-0.1,-1.2);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(283).to({_off:false},0).to({scaleX:1.43,scaleY:45.92,rotation:-43.1,x:-155.8,y:581.2},7).wait(96));

	// right bar
	this.instance_19 = new lib.static_bar();
	this.instance_19.setTransform(-166.2,471.3,0.882,0.391,0,0,0,0.1,-1.2);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(30).to({_off:false},0).to({scaleX:1.18,scaleY:45.6,x:-164.7,y:465.4},7).wait(349));

	// left bar
	this.instance_20 = new lib.static_bar();
	this.instance_20.setTransform(-371.1,469.4,0.882,0.391,0,0,0,0.1,-1.2);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(19).to({_off:false},0).to({scaleX:1.18,scaleY:75.63,y:465.7},6).wait(361));

	// line1
	this.instance_21 = new lib.static_line("synched",0);
	this.instance_21.setTransform(-483.2,574.5,0.02,2.236,0,63.4,0,162.5,0.1);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(4).to({_off:false},0).to({regX:164,regY:1.6,scaleX:2.8,skewX:-116.6,x:-22,y:579.3},10).wait(372));

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
(lib.subject_scene8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene8:0,scene8repeat:330});

	// timeline functions:
	this.frame_0 = function() {
		this.btn_menu.addEventListener("click", openMenu.bind(this));
		this.btn_goNext.addEventListener("click", openNext.bind(this));
		this.btn_goBack.addEventListener("click", openPrev.bind(this));
		
		
		function openMenu(){
		
		 window.open ("../menu/menu.html","_self");
		}
		
		
		function openNext(){
		
		 window.open ("subject_Summary.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("subject_scene7.html","_self");
		}
	}
	this.frame_346 = function() {
		/* gotoAndPlay("scene8repeat");*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(346).call(this.frame_346).wait(1));

	// Layer 2
	this.instance = new lib.Diagramblocks();
	this.instance.setTransform(457.9,-14.7,1,1,0,0,0,-66.2,329.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(347));

	// Layer 1
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

	this.instance_3 = new lib.header2();
	this.instance_3.setTransform(220.7,25,1,1,0,0,0,-5.3,20.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.btn_goNext},{t:this.btn_goBack},{t:this.instance_1},{t:this.btn_menu}]}).wait(347));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(284.2,-172.2,875.1,775.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;