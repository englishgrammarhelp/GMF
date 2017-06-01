(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	manifest: [
		{src:"sounds/ball_bounce.mp3?1495750118510", id:"ball_bounce"},
		{src:"sounds/ball_kick.mp3?1495750118510", id:"ball_kick"},
		{src:"sounds/carmen_falls.mp3?1495750118510", id:"carmen_falls"},
		{src:"sounds/cowbell_3times.mp3?1495750118510", id:"cowbell_3times"},
		{src:"sounds/High_Screaming_Gtr.mp3?1495750118510", id:"High_Screaming_Gtr"},
		{src:"sounds/it.mp3?1495750118510", id:"it"},
		{src:"sounds/ithits.mp3?1495750118510", id:"ithits"},
		{src:"sounds/ithitscarmen.mp3?1495750118510", id:"ithitscarmen"},
		{src:"sounds/organ_f_chord.mp3?1495750118510", id:"organ_f_chord"},
		{src:"sounds/right_answer.mp3?1495750118510", id:"right_answer"},
		{src:"sounds/thesubjectitisapronoun.mp3?1495750118510", id:"thesubjectitisapronoun"},
		{src:"sounds/wrong_answer.mp3?1495750118510", id:"wrong_answer"}
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


(lib.static_carmen_fall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("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");
	this.shape.setTransform(98.6,111);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("Ai0HZQgjgPgfgUQgggVgXgeQgQgUgOgZIgKgUQgQghgZgYQgNgNgPgJQAmADAigQQAigPAbgbQAcgaAagVQAbgXAZgPQAiAAAfAWQAdAVAkAPQAkAOAjAJQAfAIAkABIAJAAQAoAAAlgJQAWgFAPgBQAeAQAXAcQAVAaAUAhQATAfAVAfQALAQAQAOQgVgNggAOQggAPgjANIhGAcQggANgiAHIgIACIhLAOQglAHgjABQglABgiAFIgFABIgTABIgEAAQgaAAgZgJgAEYhDQhAgLg8gPQg8gOgggRQgggQgYgbQgWgbgJgYQgEgLgBgMQgBgPAEgSQArgaAagrQAgg3ARg+IAFgVQAUADAXAOQgJAjABAyQABBFAmArQAUAXAZgaQAmgoAWg2QAKgZAUgmQB2ACgQDHIAAACIAAADQAAA8gZAxQgVAngpAHIgRABQgMAAgNgCgAGZjgIAAgCIAAABIAAAEIAAgDgAGZjiIAAAAg");
	this.shape_1.setTransform(138.8,88.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA4AQIAAAAQgKgQgUgHIAFgMQAZgFAUgBQALAOgDATIgCANQgFAQgMAIQgCgRgHgMgAgxAQQgKgbgZgJQADgJAFgJIADgGQAXAUAcALIgBAMIgGANQgGAMgJANQgCgMgDgJg");
	this.shape_2.setTransform(170.1,19.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag/BGQAAgIAJgIIAAAAQAFgJAGgGQAQgNAYAQQABAIgDAKQgBAIgEAIQgGALgKAFIgBAAQgMAGgIAAQgRAAABgcgAAig4IAAgGQAAgMADgKQAUAHAKASIAAAAQAHAMACARIgCABQgMAGgJAAQgTAAAAghgAhFgtQgEgLgCgMIAAAAQgBgPADgOQAZAJAKAdQADAJACAMQgFAIgFADQgEADgEAAQgKAAgIgVg");
	this.shape_3.setTransform(169,27);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC66").s().p("AHEQ5Qg8gOgvgUQg4gXhDAFQhMAHgGhQQATgxBAgmIBlg7QA0geA4gUQA/gVAcgtQAcgtAxgtQAvgrAtgZQA2gdBDgNQgOgSgWgUQgdgZgggTQgjgUgbgYQgcgZgTgdQgVgggUgbIgngzQAigHAggOIBGgcQAjgNAggOQAggOAVAMIAJAIIAMAIQAZAXAQAeQAPAeAPAhQAPAhAQAgIAiBEQARAiAIAkIARBHIADARQgOATgJAVQgVAwgwAlQgyAmg3AYIhwAxIh2A0Qg2AYg8APQglAJgQAeQglBJBGAPQAiAHAhAAQA9gBAgAfQAtAshHAGIgTABQgsAAgrgKgAD2O/QgFgNAAgKQAAgbAhgJQghAJAAAbQAAAKAFANgAu6NUQhAgoBIg3QAXgSAQgcQAcgzAng0QASgaAjALQAsAOA3AEQBDAGA5gfQA6geAxgjQA3glA8gUQBAgVBEgDQBLgDAZg/QAVg1Ang4QAbgmAXgmQAfg3AngmQANAZAQAUQAXAdAgAVQAfAVAjAOQAbALAcgBIAAAAQgmA8glAlIhYBYIhYBZQguAxgqAiQgtAig9AOQg+AOhCAGQhEAGhEAKIh9AUIiCAWQhBAMgdAvQghA3g3AXQgUAJgTAAQgXAAgVgNgAHzgzQgkgBgfgIQglgKgkgOQgkgOgdgVQgfgWgiAAQAdgIAUghQAUghAPgkQAPgkAMgiQAMgjALgjQAKgkAEglQAJAYAYAbQAYAaAgARQAhARA7AOQA8AOBAALQAXAEATgDQgFAmgQAcQgLASgKATIgNAaQgOAdgUAcQgVAcAIAhQgPAAgWAGQglAIgoABIgJAAgAIDhCIAAAAIAAAAQgKABgGAAQgKgBAAgFQAAgEAIgHQgIAHAAAEQAAAFAKABQAGAAAKgBgAI+oBQgmgrgBhGQAAgyAJgjQAEgQARgeQAZAUATATQAaAaApAAIADAAIADAAIAAAAIABAAQAVAAASgDQgSADgVAAIgBAAIAAAAIgDAAIgDAAQgpAAgagaQgTgTgZgUIgFgEQgbgVgKgaIAFgSQAThAAbg1IA2hkQAjgVArgRQAwgTAmAWIADADQAQAgAXASQAGAMAEAOQAFAOACAOQgJALgFALQgPAfAHAoQAHAkADAoIAAADQgQAhgRAXQgVAdglAMQgMAFgOACIgNAWQgUAlgKAaQgWA2gmAnQgOAOgLAAQgLAAgJgKgAKTsyQgGAFgFAJIAAAAQgJAIAAAIQgBApAmgTIAAAAQAKgFAGgLQAEgIACgIQACgJgBgJQgMgJgLAAQgJAAgIAHgALts5QAQAAgBgXQABAXgQAAIAAAAIAAAAIgJgBIAJABIAAAAIAAAAgALqu7IgFALQgDAKAAAMIAAAGQAAAxAogWIACgBQANgIAEgPIACgNQADgWgLgOIAIgIIgIAIQgIgLgRgGQgNAKgHAOIAAAAgAJ0ugQABAMAEALQALAcAPgKQAFgDAFgIQAKgNAFgLIAGgQIACgLQgdgMgXgTQAHgJAOgBIACAAIAAAAIAAAAQAgAAgDApQADgpggAAIAAAAIAAAAIgCAAQgOABgHAJIgNgMIANAMIgDAFQgFAJgCAJQgEAOACAPIgBAAIABAAgAM1vaQgIgbgggFQAgAFAIAbgALGwBQgIgFgJAAIgBAAIAAAAIgKABIAAAAIgBAAIgBABIgBAAIABAAIABgBIABAAIAAAAIAKgBIAAAAIABAAQAJAAAIAFIAAAAgAL+vTQARAGAIALQgUABgZAGQAHgOANgKgAMXvCIAAAAg");
	this.shape_4.setTransform(98.6,113);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#993300").s().p("ADJGmQAQgcAGgmQApgGAVgoQAZgwAAg9IAAgDIAAgCQAPjEh1gCIAMgWQAOgDAMgEQAlgMAWgdQAQgXAQghIABgBIgBgCQgCgpgHgjQgIgoAPgfQAGgLAJgLQgDgOgEgOQgFgOgGgNQgXgRgPggIgBgBIgCgCQgngWgwATQgqARgjAVIg2BkQgcA1gTBAIgFASIgDANIgSBDIgFAVQgQA9ghA3QgZAqgtAaQgNAHgNAGQgtASgxAAQAxAAAtgSQANgGANgHQgEASABAPIgLAMIgFAIQgdAegnAOQhMAbhLgRQgwgLgZgRQAvgRAigiQAwguAZg3QAxilAUgiQAZgrA0giQAsgdAag3QAcg7AggrQAbgnA/gVQA5gSBMANQA7gLA5AdQA4AcAEBMQADBGgXA2QgbA+AlA3QAYAjAcCRIgGAvIgFAZQgQBZgXAlQgZAngdApIgPATIAAABQglAxg+AMIgmAJQAKgUALgRgAh8CUIAAAAgAAAg5IAShDIADgNQALAaAbAVIAFAEQgSAegEAQQgXgOgTgDgAEjmXIACACIABABIgDgDgAEjmXIAAAAg");
	this.shape_5.setTransform(148.7,45.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,199.1,224.1);


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


(lib.Wordshits = function(mode,startPosition,loop) {
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
	this.shape.setTransform(85.4,17.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgHA9QgDgDAAgFIAAgKIABgJIgDgsIgPgBQgMgBAAgKQAAgFAEgEQADgDAFAAIAPABIgBgJIAAgJQAAgFAEgDQADgEAGAAQALAAgBAWIAAAIIAJgBQALAAADABQAHADAAAIQAAAFgEADQgCADgGAAIgEAAIgFAAIgIABIABAsIAAAFIAAAFQAAAUgMAAQgDAAgEgDg");
	this.shape_1.setTransform(76.9,16);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgJA/QgEgDAAgFIgBgQIAAgQIABgUIABgSQAAgFADgDQAEgDAFAAQAEAAADADQADADAAAFIgBASIgBAUIABAQIAAAQQAAAFgDADQgEADgDABQgFgBgDgDgAgHgsQgEgDAAgGQAAgFAEgEQAEgEAEABQAGgBAEAEQAEAEAAAFQAAAGgEADQgEAEgGABQgEgBgEgEg");
	this.shape_2.setTransform(70.3,15.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AAUBAQgCgHgCgNIgBgVIAAgGIAAgHIAAgHQgBgDgEAAQgJAAgGAHQgEAEgHANQAAAggEAGQgDAHgHAAQgFAAgEgDQgEgDAAgFIABgFQABgCAAgVIAAg5IAAgDIABgOIgBgIIgBgIQAAgFAEgDQADgEAGAAQAIAAADAKQACAFAAALIgBASIAAARQAGgGAIgEQAFgDAIAAQAPAAAHAJQAFAGABALIABAWIACARIADARIAAADQAAAFgEAEQgDADgFAAQgJAAgDgJg");
	this.shape_3.setTransform(62.5,15.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

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


(lib.WordsCarmen = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#009900").s().p("AARAoIgCgSIgBgTIAAgFIAAgIIAAgDIABgEQAAgHgEgBQgHAAgGAKQgHAKgEANIgBAIIAAAIIgBAHIAAAIQAAAFgEADQgDAEgGAAQgFAAgDgEQgEgDAAgFIAAgHIgBgIIABgYIACgWIgBgIIAAgIQAAgFAEgDQADgEAFAAQAMAAABAPIAAABQANgNAMAAQAQAAAHANQAEAJAAATIAAAGIAAAEQAAAHACAKQACAMAAAGQAAAFgEADQgDAEgGAAQgKAAgCgLg");
	this.shape.setTransform(100.5,12.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009900").s().p("AgcAlQgPgKgBgUQABgVALgPQAOgSATABQAPAAALAEQANAHAAAOQAAAJgLAIQgFAEgPAEIgbANQAEAEAGADQAGACAGAAQALAAAJgEQAHgFAEAAQAKAAgBAJQAAAKgOAHQgNAEgNAAQgTAAgNgKgAgKgTQgHAFgDALIAUgJIARgJQgGgEgKAAQgGAAgFAGg");
	this.shape_1.setTransform(90.6,12.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009900").s().p("AgGAyQgEgDAAgFIgCgdIgCgcIgBgJQgKAGgKAOIgCABIAAAaIAAAHIgBAGQAAAFgEADQgDACgFAAQgIAAgCgGQgCgFAAgJIAAgfIgBgNIAAgNQAAgIADgGQADgIAHAAQAFAAADAEQAEAEAAAEIgBAIQAOgPAMAAQANAAAEAKQAGgFAGgCQAHgDAHAAQASAAAGASQABADADAUIAGAuQAAAFgEADQgDADgFAAQgLAAgBgKIgEgZIgCgYQgDgQgDAAQgDAAgHAEIgKAHQAAAKACARQADATAAAKQAAAFgEADQgDAEgGAAQgDAAgDgEg");
	this.shape_2.setTransform(78.8,12.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#009900").s().p("AgiAtQgCgDAAgFIAAg4IAAgIIAAgIQAAgFADgDQADgDAFAAQAKAAACAKQAOgMASAAQASAAAAAXIAAAGQAAAOgMAAQgLAAAAgMIAAgIQgSADgJARIAAAqQAAAFgEADQgCAEgGAAQgGAAgDgEg");
	this.shape_3.setTransform(67.5,12.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#009900").s().p("AAVAoIgPAGQgGACgCAAQgVAAgLgLQgKgMAAgXQAAgTAPgOQAQgQAUAAQAIAAALAFQANAGAAAHQAAADgCADIgBAJIgBALQAAAPADAIIAEAJIADAIQAAAFgDADQgEADgEAAQgEAAgJgIgAgLgQQgJAJAAAKQAAAMAEAGQAEAGAJAAQADAAAFgCQAFgBAEgEQgCgUAAgKIAAgGIABgIIgDgBIgCgBQgKAAgJAKg");
	this.shape_4.setTransform(58.1,12.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#009900").s().p("AgmA1QgNgOAAgTQAAgbAagfQAWgaAVAAIAHAAIAFACQAEgFAFAAQAJAAADALIABARQAAAEgDAEQgDAFgGAAQgIAAgEgIQgCgFgBAAQgCgBgFAAQgLAAgNASQgUAWAAAUQAAAKAGAHQAHAHAJAAQAGAAAJgFIAOgJQAGgEAEAAQAFAAAEAEQADAEAAAEQAAAGgEADQgYAVgXgBQgUAAgOgOg");
	this.shape_5.setTransform(47.5,10.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

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


(lib.Wordsit = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#0066FF").s().p("AgHA9QgDgDAAgFIAAgKIABgJIgCgsIgQgBQgMgBAAgKQAAgFADgEQAEgDAFAAIAPABIAAgJIAAgJQAAgFADgDQAEgEAFAAQAKAAAAAWIAAAIIAJgBQALAAADABQAHADAAAIQAAAFgEADQgDADgFAAIgEAAIgFAAIgIABIACAsIAAAFIAAAFQAAAUgNAAQgDAAgEgDg");
	this.shape.setTransform(78.4,16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("AgpA/QgDgDAAgFQAAgFAEgDQADgEAGAAIARgBIAAgoQAAgWABgWIgTABQgFAAgEgDQgDgEAAgFQAAgFADgDQADgDAFgBIAbgBQAOAAAbAEQAKACAAAKQAAAGgFADQgDADgEAAIgXgDIgBApIAAAoIAYAAQAFAAAEADQADAEAAAFQAAAEgDAEQgFADgEAAIgQABIgPAAIgQABIgSACQgFAAgEgEg");
	this.shape_1.setTransform(69.2,15.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

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


(lib.anim_carmen_ishitfalls = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_5 = function() {
		playSound("carmen_falls");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(5).call(this.frame_5).wait(6));

	// Layer 9
	this.instance = new lib.static_ball("synched",0);
	this.instance.setTransform(335.8,2.2,1,1,0,0,0,23.1,23.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},1).to({scaleX:0.67,scaleY:0.67,guide:{path:[335.7,2.1,337.5,-27.7,346.4,-53.7,355.7,-80.8,373.7,-106.8,391.8,-132.8,416.4,-147,421.3,-149.8,427.3,-150.1]}},9).wait(1));

	// LBicep
	this.instance_1 = new lib.static_carmen_LBicep("synched",0);
	this.instance_1.setTransform(379.2,76.9,0.999,0.999,0,171.2,171,6.2,10.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:6.3,skewX:173.5,skewY:173.2,x:379.1},1).to({regX:6.2,regY:10.8,scaleX:1,scaleY:1,skewX:180,skewY:180,y:76.7},3).to({x:388.2,y:173.8},6).wait(1));

	// LForearm
	this.instance_2 = new lib.static_carmen_LForearm("synched",0);
	this.instance_2.setTransform(339.5,78.2,0.993,0.993,0,-28.6,151.4,4.7,57.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:57.2,scaleX:0.99,scaleY:0.99,skewX:-25.1,skewY:154.9,x:339.2,y:76.6},1).to({regX:4.6,regY:57.3,scaleX:1,scaleY:1,skewX:-15.2,skewY:164.8,x:338.4,y:72.1},3).to({x:345.5,y:167.9},6).wait(1));

	// body
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("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");
	this.shape.setTransform(296,132.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("Ai0HZQgjgPgfgUQgggVgXgeQgQgUgOgZIgKgUQgQghgZgYQgNgNgPgJQAmADAigQQAigPAbgbQAcgaAagVQAbgXAZgPQAiAAAfAWQAdAVAkAPQAkAOAjAJQAfAIAkABIAJAAQAoAAAlgJQAWgFAPgBQAeAQAXAcQAVAaAUAhQATAfAVAfQALAQAQAOQgVgNggAOQggAPgjANIhGAcQggANgiAHIgIACIhLAOQglAHgjABQglABgiAFIgFABIgTABIgEAAQgaAAgZgJgAEYhDQhAgLg8gPQg8gOgggRQgggQgYgbQgWgbgJgYQgEgLgBgMQgBgPAEgSQArgaAagrQAgg3ARg+IAFgVQAUADAXAOQgJAjABAyQABBFAmArQAUAXAZgaQAmgoAWg2QAKgZAUgmQB2ACgQDHIAAACIAAADIAAgDIAAgCIAAABIAAAEQAAA8gZAxQgVAngpAHIgRABQgMAAgNgCg");
	this.shape_1.setTransform(336.2,109.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA4AQIAAAAQgKgQgUgHIAFgMQAZgFAUgBQALAOgDATIgCANQgFAQgMAIQgCgRgHgMgAgxAQQgKgbgZgJQADgJAFgJIADgGQAXAUAcALIgBAMIgGANQgGAMgJANQgCgMgDgJg");
	this.shape_2.setTransform(367.5,40.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag/BGQAAgIAJgIIAAAAQAFgJAGgGQAQgNAYAQQABAIgDAKQgBAIgEAIQgGALgKAFIgBAAQgMAGgIAAQgRAAABgcgAAig4IAAgGQAAgMADgKQAUAHAKASIAAAAQAHAMACARIgCABQgMAGgJAAQgTAAAAghgAhFgtQgEgLgCgMIAAAAQgBgPADgOQAZAJAKAdQADAJACAMQgFAIgFADQgEADgEAAQgKAAgIgVg");
	this.shape_3.setTransform(366.4,48.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC66").s().p("AHEQ5Qg8gOgvgUQg4gXhDAFQhMAHgGhQQATgxBAgmIBlg7QA0geA4gUQA/gVAcgtQAcgtAxgtQAvgrAtgZQA2gdBDgNQgOgSgWgUQgdgZgggTQgjgUgbgYQgcgZgTgdQgVgggUgbIgngzQAigHAggOIBGgcQAjgNAggOQAggOAVAMIAJAIIAMAIQAZAXAQAeQAPAeAPAhQAPAhAQAgIAiBEQARAiAIAkIARBHIADARQgOATgJAVQgVAwgwAlQgyAmg3AYIhwAxIh2A0Qg2AYg8APQglAJgQAeQglBJBGAPQAiAHAhAAQA9gBAgAfQAtAshHAGIgTABQgsAAgrgKgAD2O/QgFgNAAgKQAAgbAhgJQghAJAAAbQAAAKAFANgAu6NUQhAgoBIg3QAXgSAQgcQAcgzAng0QASgaAjALQAsAOA3AEQBDAGA5gfQA6geAxgjQA3glA8gUQBAgVBEgDQBLgDAZg/QAVg1Ang4QAbgmAXgmQAfg3AngmQANAZAQAUQAXAdAgAVQAfAVAjAOQAbALAcgBIAAAAQgmA8glAlIhYBYIhYBZQguAxgqAiQgtAig9AOQg+AOhCAGQhEAGhEAKIh9AUIiCAWQhBAMgdAvQghA3g3AXQgUAJgTAAQgXAAgVgNgAHzgzQgkgBgfgIQglgKgkgOQgkgOgdgVQgfgWgiAAQAdgIAUghQAUghAPgkQAPgkAMgiQAMgjALgjQAKgkAEglQAJAYAYAbQAYAaAgARQAhARA7AOQA8AOBAALQAXAEATgDQgFAmgQAcQgLASgKATIgNAaQgOAdgUAcQgVAcAIAhQgPAAgWAGQglAIgoABIgJAAgAIDhCIAAAAIAAAAQgKABgGAAQgKgBAAgFQAAgEAIgHQgIAHAAAEQAAAFAKABQAGAAAKgBgAI+oBQgmgrgBhGQAAgyAJgjQAEgQARgeQAZAUATATQAaAaApAAIADAAIADAAIAAAAIABAAQAVAAASgDQgSADgVAAIgBAAIAAAAIgDAAIgDAAQgpAAgagaQgTgTgZgUIgFgEQgbgVgKgaIAFgSQAThAAbg1IA2hkQAjgVArgRQAwgTAmAWIADADQAQAgAXASQAGAMAEAOQAFAOACAOQgJALgFALQgPAfAHAoQAHAkADAoIAAADQgQAhgRAXQgVAdglAMQgMAFgOACIgNAWQgUAlgKAaQgWA2gmAnQgOAOgLAAQgLAAgJgKgAKTsyQgGAFgFAJIAAAAQgJAIAAAIQgBApAmgTIAAAAQAKgFAGgLQAEgIACgIQACgJgBgJQgMgJgLAAQgJAAgIAHgALts5QAQAAgBgXQABAXgQAAIAAAAIAAAAIgJgBIAJABIAAAAIAAAAgALqu7IgFALQgDAKAAAMIAAAGQAAAxAogWIACgBQANgIAEgPIACgNQADgWgLgOIAIgIIgIAIQgIgLgRgGQgNAKgHAOQAHgOANgKQARAGAIALQgUABgZAGgAJ0ugQABAMAEALQALAcAPgKQAFgDAFgIQAKgNAFgLIAGgQIACgLQADgpggAAIAAAAIAAAAIgCAAQgOABgHAJIgNgMIANAMQAHgJAOgBIACAAIAAAAIAAAAQAgAAgDApQgdgMgXgTIgDAFQgFAJgCAJQgEAOACAPIgBAAIABAAgAM1vaQgIgbgggFQAgAFAIAbgALGwBQgIgFgJAAIgBAAIAAAAIgKABIAAAAIgBAAIgBABIgBAAIABAAIABgBIABAAIAAAAIAKgBIAAAAIABAAQAJAAAIAFIAAAAg");
	this.shape_4.setTransform(296,134.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#993300").s().p("ADJGmQAQgcAGgmQApgGAVgoQAZgwAAg9IAAgDIAAgCQAPjEh1gCIAMgWQAOgDAMgEQAlgMAWgdQAQgXAQghIABgBIgBgCQgCgpgHgjQgIgoAPgfQAGgLAJgLQgDgOgEgOQgFgOgGgNQgXgRgPggIgBgBIgCgCQgngWgwATQgqARgjAVIg2BkQgcA1gTBAIgFASIgDANIgSBDIgFAVQgQA9ghA3QgZAqgtAaQgNAHgNAGQgtASgxAAQAxAAAtgSQANgGANgHQgEASABAPIgLAMIgFAIQgdAegnAOQhMAbhLgRQgwgLgZgRQAvgRAigiQAwguAZg3QAxilAUgiQAZgrA0giQAsgdAag3QAcg7AggrQAbgnA/gVQA5gSBMANQA7gLA5AdQA4AcAEBMQADBGgXA2QgbA+AlA3QAYAjAcCRIgGAvIgFAZQgQBZgXAlQgZAngdApIgPATIAAABQglAxg+AMIgmAJQAKgUALgRgAh8CUIAAAAgAAAg5IAShDIADgNQALAaAbAVIAFAEQgSAegEAQQgXgOgTgDgAEjmXIACACIABABIgDgDg");
	this.shape_5.setTransform(346.2,67.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.1,1,1).p("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");
	this.shape_6.setTransform(296,132.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCC66").s().p("AHEQ5Qg8gOgvgUQg4gXhDAFQhMAHgGhQQATgxBAgmIBlg7QA0geA4gUQA/gVAcgtQAcgtAxgtQAvgrAtgZQA2gdBDgNQgOgSgWgUQgdgZgggTQgjgUgbgYQgcgZgTgdQgVgggUgbIgngzQAigHAggOIBGgcQAjgNAggOQAggOAVAMIAJAIIAMAIQAZAXAQAeQAPAeAPAhQAPAhAQAgIAiBEQARAiAIAkIARBHIADARQgOATgJAVQgVAwgwAlQgyAmg3AYIhwAxIh2A0Qg2AYg8APQglAJgQAeQglBJBGAPQAiAHAhAAQA9gBAgAfQAtAshHAGIgTABQgsAAgrgKgAD2O/QgFgNAAgKQAAgbAhgJQghAJAAAbQAAAKAFANgAu6NUQhAgoBIg3QAXgSAQgcQAcgzAng0QASgaAjALQAsAOA3AEQBDAGA5gfQA6geAxgjQA3glA8gUQBAgVBEgDQBLgDAZg/QAVg1Ang4QAbgmAXgmQAfg3AngmQANAZAQAUQAXAdAgAVQAfAVAjAOQAbALAcgBIAAAAQgmA8glAlIhYBYIhYBZQguAxgqAiQgtAig9AOQg+AOhCAGQhEAGhEAKIh9AUIiCAWQhBAMgdAvQghA3g3AXQgUAJgTAAQgXAAgVgNgAHzgzQgkgBgfgIQglgKgkgOQgkgOgdgVQgfgWgiAAQAdgIAUghQAUghAPgkQAPgkAMgiQAMgjALgjQAKgkAEglQAJAYAYAbQAYAaAgARQAhARA7AOQA8AOBAALQAXAEATgDQgFAmgQAcQgLASgKATIgNAaQgOAdgUAcQgVAcAIAhQgPAAgWAGQglAIgoABIgJAAgAIDhCIAAAAIAAAAQgKABgGAAQgKgBAAgFQAAgEAIgHQgIAHAAAEQAAAFAKABQAGAAAKgBgAI+oBQgmgrgBhGQAAgyAJgjQAEgQARgeQAZAUATATQAaAaApAAIADAAIADAAIAAAAIABAAQAVAAASgDQgSADgVAAIgBAAIAAAAIgDAAIgDAAQgpAAgagaQgTgTgZgUIgFgEQgbgVgKgaIAFgSQAThAAbg1IA2hkQAjgVArgRQAwgTAmAWIADADQAQAgAXASQAGAMAEAOQAFAOACAOQgJALgFALQgPAfAHAoQAHAkADAoIAAADQgQAhgRAXQgVAdglAMQgMAFgOACIgNAWQgUAlgKAaQgWA2gmAnQgOAOgLAAQgLAAgJgKgAKTsyQgGAFgFAJIAAAAQgJAIAAAIQgBApAmgTIAAAAQAKgFAGgLQAEgIACgIQACgJgBgJQgMgJgLAAQgJAAgIAHgALts5QAQAAgBgXQABAXgQAAIAAAAIAAAAIgJgBIAJABIAAAAIAAAAgALqu7IgFALQgDAKAAAMIAAAGQAAAxAogWIACgBQANgIAEgPIACgNQADgWgLgOIAIgIIgIAIQgIgLgRgGQgNAKgHAOIAAAAgAJ0ugQABAMAEALQALAcAPgKQAFgDAFgIQAKgNAFgLIAGgQIACgLQADgpggAAIAAAAIAAAAIgCAAQgOABgHAJIgNgMIANAMQAHgJAOgBIACAAIAAAAIAAAAQAgAAgDApQgdgMgXgTIgDAFQgFAJgCAJQgEAOACAPIgBAAIABAAgAM1vaQgIgbgggFQAgAFAIAbgALGwBQgIgFgJAAIgBAAIAAAAIgKABIAAAAIgBAAIgBABIgBAAIABAAIABgBIABAAIAAAAIAKgBIAAAAIABAAQAJAAAIAFIAAAAgAL+vTQARAGAIALQgUABgZAGQAHgOANgKgAMXvCIAAAAg");
	this.shape_7.setTransform(296,134.2);

	this.instance_3 = new lib.static_carmen_fall("synched",0);
	this.instance_3.setTransform(296.1,132.3,1,0.999,0,13.3,14.6,98.5,111);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_7},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape_6}]},1).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_3}]},5).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({_off:false},0).to({regX:98.7,regY:111.1,scaleY:1,rotation:60,skewX:0,skewY:0,y:132.4},5).wait(1));

	// RForearm
	this.instance_4 = new lib.static_carmen_RForearm("synched",0);
	this.instance_4.setTransform(294.2,64.8,0.999,0.999,6.5,0,0,59,34.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:9.3,x:293.7,y:62.6},1).to({regY:34,scaleX:1,scaleY:1,rotation:15,x:293,y:58.2},2).to({x:334.8,y:125.3},7).wait(1));

	// RBicep
	this.instance_5 = new lib.static_carmen_RBicep("synched",0);
	this.instance_5.setTransform(331.6,69.3,0.997,0.997,8.8,0,0,35.8,7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:35.9,scaleX:1,scaleY:1,rotation:11.5,y:68.9},1).to({regX:35.8,scaleX:1,scaleY:1,rotation:17.2,x:331.2,y:68.4},2).to({x:372,y:134.3},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(196.5,-21.9,199.1,266.2);


(lib.anim_carmen_ishit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_5 = function() {
		playSound("ball_bounce");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(5).call(this.frame_5).wait(8));

	// Layer 9
	this.instance = new lib.static_ball("synched",0);
	this.instance.setTransform(-329.1,-187.9,3.333,3.333,180,0,0,23,23.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[-328.9,-187.5,-332.1,-187.9,-335.2,-188.4]}},1).to({regX:23.1,scaleX:1,scaleY:1,rotation:0,x:335.8,y:2.2},5).to({scaleX:0.67,scaleY:0.67,rotation:2880,guide:{path:[335.7,2.1,337.5,-27.7,346.4,-53.7,355.7,-80.8,373.7,-106.8,391.8,-132.8,416.4,-147,421.3,-149.8,427.3,-150.1]}},6).wait(1));

	// LBicep
	this.instance_1 = new lib.static_carmen_LBicep("synched",0);
	this.instance_1.setTransform(379.1,76.7,1,1,150,0,0,6.2,10.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,rotation:0,skewX:153.1,skewY:153},1).to({scaleX:1,scaleY:1,skewX:180,skewY:180},9).wait(3));

	// LForearm
	this.instance_2 = new lib.static_carmen_LForearm("synched",0);
	this.instance_2.setTransform(342.1,92.5,0.996,0.996,0,-60.2,119.8,4.6,57.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:4.7,scaleX:0.99,scaleY:0.99,skewX:-55.7,skewY:124.3,x:341.7,y:90.5},1).to({regX:4.6,regY:57.3,scaleX:1,scaleY:1,skewX:-15.2,skewY:164.8,x:338.4,y:72.1},9).wait(3));

	// body
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AF0nUQgGAGgFAGQgCAEgDADQgcAegoAOQhMAbhLgRQgvgLgagQQAwgSAighQAwguAZg4QAwimAUgjQAZgqA0giQAsgdAag4QAcg7AggqQAegnA/gVQA4gTBNAOQA6gMA6AdQA3AcAEBMQAEBGgYA2QgbA/AmA2QAXAjAdCTQgDAZgEAXQgCANgCALQgQBagXAlQgZAngeAoQgHAKgHAJQAAABgBAAQglAxg+ANQgUAEgRAEQAKgTALgSQAQgbAFgmQApgHAVgnQAagxgBg8QAAgCAAgCQAAgBAAAAQAQjHh2gCQAGgKAHgMQAOgCAMgEQAlgNAVgdQARgWAQghQAAgBAAgBQAAgBAAgBQgDgogHgjQgHgoAPgfQAFgMAJgKQgCgOgFgOQgEgPgGgMQgXgSgQggQAAAAAAgBQgBgBgCAAQgmgXgwATQgrARgjAVQgbAzgbAxQgbA1gTBBQgDAIgCAJQgCAHgCAGQgJAggKAkQgCAKgDALQgRA+ggA3QgaArgtAaQgEASABAPgAMbwgQgBgBgCgBALlucQACgHADgFQAHgOANgJQARAGAIALQgUAAgZAGAMMtnQgBABgBAAQgoAWAAgxQAAgDAAgCQAAgMADgKQAUAGAKASQAAABABAAQAGAMACAQQANgIAEgPQACgHAAgGQADgWgLgNQAHgIABgBAK0uiQgBAFgBAGQgCAIgEAIQgFAMgKANQgFAHgFAEQgPAKgLgcQgEgMgBgLIAAgBQgCgOAEgOQACgKAFgJQABgDACgCQAXATAdAMQADgqgiACQgOAAgHAJQgHgGgGgGAMNvnQAgAFAIAbAJ0uMQgBgBAAAAAKdtuQgBgMgEgKQgKgdgYgIAKIsRIAAAAQgJAIAAAIQgBAqAmgUIAAAAQAKgFAGgLQAEgIACgIQACgJgBgJQgXgQgRAOQgGAFgFAJgAILsVQAKAbAbAVQADACACACQAZAUATATQAaAZApABQAZAAAVgEAIgqzQgJAjAAAyQABBFAmArQAUAXAZgaQAmgoAWg2QAKgZAUgmAIgqzQAEgRARgdAH0rEQAUADAYAOAF3n1QgMAGgOAGQgtASgwABADlh6QAdgIAUghQAUghAPgkQAPgkAMgiQAMgiALgkQAKgjAEgmQAJAYAYAbQAYAbAgAQQAhARA7AOQA8APBAALQAXAEATgDAF5m9QgEgKgBgNANHsLQAAgCAAgCAMrnAQAAgDAAgCAKnvxQATgFAMAJALksnQAaAHgCgdAJugvQAeAQAXAcQAVAYAUAhQATAfAVAfQALAQAQAOQAEADAFAEQAGAEAGAEQAZAXAQAfQAPAeAPAhQAPAhAQAfQARAiARAjQARAiAIAjQAJAlAIAjQACAIABAIQgOATgJAWQgVAwgwAlQgyAmg3AYQg3AYg5AYQg5AZg9AbQg2AZg8AOQglAKgQAdQglBKBGAPQAiAHAhgBQA9gBAgAfQAtAthHAGQg2ACg0gLQg8gOgvgUQg4gYhDAGQhMAHgGhRQATgwBAgmQA0ggAxgcQA0geA4gTQA/gWAcgtQAcgsAxgtQAvgsAtgYQA2gdBDgOQgOgSgWgTQgdgZgggTQgjgUgbgYQgcgZgTgeQgVgggUgbQgSgZgVgaQgEABgEABQgmAHglAHQglAHglABQgkABgiAFQgDAAgDABQgJABgKAAQgcABgbgKQgjgPgfgUQgggVgXgeQgQgUgNgZAMPCSQgVgNggAOQggAPgjANQgiANgkAPQggANgiAHAKqi/QgGANgHANQgOAdgUAcQgVAcAIAhQgPABgWAFQglAJgoAAQgFAAgEAAQgkgBgfgIQglgJgkgOQgkgPgdgVQgfgWgiAAAHxg/QgQAQASABQAGAAAKgBAEsD9QgJAIgQgFQgmA7glAmQgpAqgvAuQguAtgqAsQguAxgqAhQgtAjg9ANQg+APhCAFQhEAGhEAKQhDALg6AJQg/AKhDAMQhBAMgdAwQghA3g3AXQguATglgYQhAgoBIg3QAXgRAQgcQAcgzAng1QASgaAjALQAsAOA3AFQBDAFA5geQA6gfAxgiQA3gmA8gUQBAgUBEgDQBLgDAZg/QAVg2Ang3QAbgnAXglQAfg4AngmQgGgJgFgLQgQghgZgYQgNgNgNgJQAkADAigQQAigNAbgbQAcgaAagVQAbgXAZgPAESOYQguAMASAu");
	this.shape.setTransform(296,132.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("Ai0HZQgjgPgfgUQgggVgXgeQgQgUgOgZIgKgUQgQghgZgYQgNgNgPgJQAmADAigQQAigPAbgbQAcgaAagVQAbgXAZgPQAiAAAfAWQAdAVAkAPQAkAOAjAJQAfAIAkABIAJAAQAoAAAlgJQAWgFAPgBQAeAQAXAcQAVAaAUAhQATAfAVAfQALAQAQAOQgVgNggAOQggAPgjANIhGAcQggANgiAHIgIACIhLAOQglAHgjABQglABgiAFIgFABIgTABIgEAAQgaAAgZgJgAEYhDQhAgLg8gPQg8gOgggRQgggQgYgbQgWgbgJgYQgEgLgBgMQgBgPAEgSQArgaAagrQAgg3ARg+IAFgVQAUADAXAOQgJAjABAyQABBFAmArQAUAXAZgaQAmgoAWg2QAKgZAUgmQB2ACgQDHIAAACIAAADIAAgDIAAgCIAAABIAAAEQAAA8gZAxQgVAngpAHIgRABQgMAAgNgCg");
	this.shape_1.setTransform(336.2,109.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag/BGQAAgIAJgIIAAAAQAFgJAGgGQAQgNAYAQQABAIgDAKQgBAIgEAIQgGALgKAFIgBAAQgMAGgIAAQgRAAABgcgAAig4IAAgGQAAgMADgKQAUAHAKASIAAAAQAHAMACARIgCABQgMAGgJAAQgTAAAAghgAhFgtQgEgLgCgMIAAAAQgBgPADgOQAZAJAKAdQADAJACAMQgFAIgFADQgEADgEAAQgKAAgIgVg");
	this.shape_2.setTransform(366.4,48.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA4AQIAAAAQgKgQgUgHIAFgMQAZgFAUgBQALAOgDATIgCANQgFAQgMAIQgCgRgHgMgAgxAQQgKgbgZgJQADgJAFgJIADgGQAXAUAcALIgBAMIgGANQgGAMgJANQgCgMgDgJg");
	this.shape_3.setTransform(367.5,40.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#993300").s().p("ADJGmQAQgcAGgmQApgGAVgoQAZgwAAg9IAAgDIAAgCQAPjEh1gCIAMgWQAOgDAMgEQAlgMAWgdQAQgXAQghIABgBIgBgCQgCgpgHgjQgIgoAPgfQAGgLAJgLQgDgOgEgOQgFgOgGgNQgXgRgPggIgBgBIgCgCQgngWgwATQgqARgjAVIg2BkQgcA1gTBAIgFASIgDANIgSBDIgFAVQgQA9ghA3QgZAqgtAaQgNAHgNAGQgtASgxAAQAxAAAtgSQANgGANgHQgEASABAPIgLAMIgFAIQgdAegnAOQhMAbhLgRQgwgLgZgRQAvgRAigiQAwguAZg3QAxilAUgiQAZgrA0giQAsgdAag3QAcg7AggrQAbgnA/gVQA5gSBMANQA7gLA5AdQA4AcAEBMQADBGgXA2QgbA+AlA3QAYAjAcCRIgGAvIgFAZQgQBZgXAlQgZAngdApIgPATIAAABQglAxg+AMIgmAJQAKgUALgRgAh8CUIAAAAgAAAg5IAShDIADgNQALAaAbAVIAFAEQgSAegEAQQgXgOgTgDgAEjmXIACACIABABIgDgDg");
	this.shape_4.setTransform(346.2,67.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC66").s().p("AHEQ5Qg8gOgvgUQg4gXhDAFQhMAHgGhQQATgxBAgmIBlg7QA0geA4gUQA/gVAcgtQAcgtAxgtQAvgrAtgZQA2gdBDgNQgOgSgWgUQgdgZgggTQgjgUgbgYQgcgZgTgdQgVgggUgbIgngzQAigHAggOIBGgcQAjgNAggOQAggOAVAMIAJAIIAMAIQAZAXAQAeQAPAeAPAhQAPAhAQAgIAiBEQARAiAIAkIARBHIADARQgOATgJAVQgVAwgwAlQgyAmg3AYIhwAxIh2A0Qg2AYg8APQglAJgQAeQglBJBGAPQAiAHAhAAQA9gBAgAfQAtAshHAGIgTABQgsAAgrgKgAD2O/QgFgNAAgKQAAgbAhgJQghAJAAAbQAAAKAFANgAu6NUQhAgoBIg3QAXgSAQgcQAcgzAng0QASgaAjALQAsAOA3AEQBDAGA5gfQA6geAxgjQA3glA8gUQBAgVBEgDQBLgDAZg/QAVg1Ang4QAbgmAXgmQAfg3AngmQANAZAQAUQAXAdAgAVQAfAVAjAOQAbALAcgBIAAAAQgmA8glAlIhYBYIhYBZQguAxgqAiQgtAig9AOQg+AOhCAGQhEAGhEAKIh9AUIiCAWQhBAMgdAvQghA3g3AXQgUAJgTAAQgXAAgVgNgAHzgzQgkgBgfgIQglgKgkgOQgkgOgdgVQgfgWgiAAQAdgIAUghQAUghAPgkQAPgkAMgiQAMgjALgjQAKgkAEglQAJAYAYAbQAYAaAgARQAhARA7AOQA8AOBAALQAXAEATgDQgFAmgQAcQgLASgKATIgNAaQgOAdgUAcQgVAcAIAhQgPAAgWAGQglAIgoABIgJAAgAIDhCIAAAAIAAAAQgKABgGAAQgKgBAAgFQAAgEAIgHQgIAHAAAEQAAAFAKABQAGAAAKgBgAI+oBQgmgrgBhGQAAgyAJgjQAEgQARgeQAZAUATATQAaAaApAAIADAAIADAAIAAAAIABAAQAVAAASgDQgSADgVAAIgBAAIAAAAIgDAAIgDAAQgpAAgagaQgTgTgZgUIgFgEQgbgVgKgaIAFgSQAThAAbg1IA2hkQAjgVArgRQAwgTAmAWIADADQAQAgAXASQAGAMAEAOQAFAOACAOQgJALgFALQgPAfAHAoQAHAkADAoIAAADQgQAhgRAXQgVAdglAMQgMAFgOACIgNAWQgUAlgKAaQgWA2gmAnQgOAOgLAAQgLAAgJgKgAKTsyQgGAFgFAJIAAAAQgJAIAAAIQgBApAmgTIAAAAQAKgFAGgLQAEgIACgIQACgJgBgJQgMgJgLAAQgJAAgIAHgALts5QAQAAgBgXQABAXgQAAIAAAAIAAAAIgJgBIAJABIAAAAIAAAAgALqu7IgFALQgDAKAAAMIAAAGQAAAxAogWIACgBQANgIAEgPIACgNQADgWgLgOIAIgIIgIAIQgIgLgRgGQgNAKgHAOIAAAAgAJ0ugQABAMAEALQALAcAPgKQAFgDAFgIQAKgNAFgLIAGgQIACgLQADgpggAAIAAAAIAAAAIgCAAQgOABgHAJIgNgMIANAMIgDAFQgFAJgCAJQgEAOACAPIgBAAIABAAgAM1vaQgIgbgggFQAgAFAIAbgALGwBQgIgFgJAAIgBAAIAAAAIgKABIAAAAIgBAAIgBABIgBAAIABAAIABgBIABAAIAAAAIAKgBIAAAAIABAAQAJAAAIAFIAAAAgAKAvUQAHgJAOgBIACAAIAAAAIAAAAQAgAAgDApQgdgMgXgTgAL+vTQARAGAIALQgUABgZAGQAHgOANgKgAMXvCIAAAAgAKAvUIAAAAgAKAvUIAAAAg");
	this.shape_5.setTransform(296,134.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.1,1,1).p("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");
	this.shape_6.setTransform(296,132.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCC66").s().p("AHEQ5Qg8gOgvgUQg4gXhDAFQhMAHgGhQQATgxBAgmIBlg7QA0geA4gUQA/gVAcgtQAcgtAxgtQAvgrAtgZQA2gdBDgNQgOgSgWgUQgdgZgggTQgjgUgbgYQgcgZgTgdQgVgggUgbIgngzQAigHAggOIBGgcQAjgNAggOQAggOAVAMIAJAIIAMAIQAZAXAQAeQAPAeAPAhQAPAhAQAgIAiBEQARAiAIAkIARBHIADARQgOATgJAVQgVAwgwAlQgyAmg3AYIhwAxIh2A0Qg2AYg8APQglAJgQAeQglBJBGAPQAiAHAhAAQA9gBAgAfQAtAshHAGIgTABQgsAAgrgKgAD2O/QgFgNAAgKQAAgbAhgJQghAJAAAbQAAAKAFANgAu6NUQhAgoBIg3QAXgSAQgcQAcgzAng0QASgaAjALQAsAOA3AEQBDAGA5gfQA6geAxgjQA3glA8gUQBAgVBEgDQBLgDAZg/QAVg1Ang4QAbgmAXgmQAfg3AngmQANAZAQAUQAXAdAgAVQAfAVAjAOQAbALAcgBIAAAAQgmA8glAlIhYBYIhYBZQguAxgqAiQgtAig9AOQg+AOhCAGQhEAGhEAKIh9AUIiCAWQhBAMgdAvQghA3g3AXQgUAJgTAAQgXAAgVgNgAHzgzQgkgBgfgIQglgKgkgOQgkgOgdgVQgfgWgiAAQAdgIAUghQAUghAPgkQAPgkAMgiQAMgjALgjQAKgkAEglQAJAYAYAbQAYAaAgARQAhARA7AOQA8AOBAALQAXAEATgDQgFAmgQAcQgLASgKATIgNAaQgOAdgUAcQgVAcAIAhQgPAAgWAGQglAIgoABIgJAAgAIDhCIAAAAIAAAAQgKABgGAAQgKgBAAgFQAAgEAIgHQgIAHAAAEQAAAFAKABQAGAAAKgBgAI+oBQgmgrgBhGQAAgyAJgjQAEgQARgeQAZAUATATQAaAaApAAIADAAIADAAIAAAAIABAAQAVAAASgDQgSADgVAAIgBAAIAAAAIgDAAIgDAAQgpAAgagaQgTgTgZgUIgFgEQgbgVgKgaIAFgSQAThAAbg1IA2hkQAjgVArgRQAwgTAmAWIADADQAQAgAXASQAGAMAEAOQAFAOACAOQgJALgFALQgPAfAHAoQAHAkADAoIAAADQgQAhgRAXQgVAdglAMQgMAFgOACIgNAWQgUAlgKAaQgWA2gmAnQgOAOgLAAQgLAAgJgKgAKTsyQgGAFgFAJIAAAAQgJAIAAAIQgBApAmgTIAAAAQAKgFAGgLQAEgIACgIQACgJgBgJQgMgJgLAAQgJAAgIAHgALts5QAQAAgBgXQABAXgQAAIAAAAIAAAAIgJgBIAJABIAAAAIAAAAgALqu7IgFALQgDAKAAAMIAAAGQAAAxAogWIACgBQANgIAEgPIACgNQADgWgLgOIAIgIIgIAIQgIgLgRgGQgNAKgHAOQAHgOANgKQARAGAIALQgUABgZAGgAJ0ugQABAMAEALQALAcAPgKQAFgDAFgIQAKgNAFgLIAGgQIACgLQADgpggAAIAAAAIAAAAIgCAAQgOABgHAJIgNgMIANAMQAHgJAOgBIACAAIAAAAIAAAAQAgAAgDApQgdgMgXgTIgDAFQgFAJgCAJQgEAOACAPIgBAAIABAAgAM1vaQgIgbgggFQAgAFAIAbgALGwBQgIgFgJAAIgBAAIAAAAIgKABIAAAAIgBAAIgBABIgBAAIABAAIABgBIABAAIAAAAIAKgBIAAAAIABAAQAJAAAIAFIAAAAg");
	this.shape_7.setTransform(296,134.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_7},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape_6}]},1).wait(12));

	// RForearm
	this.instance_3 = new lib.static_carmen_RForearm("synched",0);
	this.instance_3.setTransform(297.9,87.3,1,1,-22.6,0,0,59,34.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1,scaleY:1,rotation:-18.3,x:297.4,y:84},1).to({regY:34,scaleX:1,scaleY:1,rotation:15,x:293,y:58.2},8).wait(4));

	// RBicep
	this.instance_4 = new lib.static_carmen_RBicep("synched",0);
	this.instance_4.setTransform(333.1,72.1,0.999,0.999,-20.9,0,0,35.8,7.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1,scaleY:1,rotation:-16.6,x:332.9,y:71.7},1).to({regY:7.5,scaleX:1,scaleY:1,rotation:17.2,x:331.2,y:68.4},8).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-407.1,-265.5,802.7,509.9);


(lib.anim_carmen_is = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		playSound("ball_kick");
	}
	this.frame_8 = function() {
		playSound("ball_kick");
	}
	this.frame_12 = function() {
		playSound("ball_kick");
	}
	this.frame_16 = function() {
		playSound("ball_kick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(4).call(this.frame_8).wait(4).call(this.frame_12).wait(4).call(this.frame_16).wait(5));

	// Layer 9
	this.instance = new lib.static_ball("synched",0);
	this.instance.setTransform(359.6,18.9,1.554,1.554,0,0,0,23.1,23.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-1080},1).to({scaleX:1,scaleY:1,guide:{path:[359.4,19,386.4,56.5,405.7,107.8]}},4).to({scaleX:0.66,scaleY:0.66,rotation:1800,guide:{path:[405.7,108,405.7,108,405.7,108,366.2,146.7,354.3,194.8,347.1,223.5,338.5,241,338.4,240.9,338.4,240.9]}},4).to({scaleX:1.51,scaleY:1.51,rotation:3600,guide:{path:[338.4,241,311.2,213.8,278.8,178.5,249.4,146.6,202.9,136.1,171.6,129,143.6,135.4,143.6,135.4,143.6,135.4]}},4).to({scaleX:0.34,scaleY:0.34,rotation:2520,guide:{path:[143.5,135.6,183.2,166.9,199.5,202.2,212.5,230.1,213.9,273.5]}},4).to({scaleX:2.9,scaleY:2.9,rotation:3600,guide:{path:[214.1,273.5,223.7,246,225.9,220.7,228.1,196.4,235.4,173.3,243.7,147.7,251,122,258.2,96.8,265.1,72,271.7,48,280.8,24.7,289.8,1.3,297.5,-22.5,305.7,-47.7,322.9,-69.5,338.3,-88.9,357.8,-103.8,378.3,-119.4,397.8,-135.8,418.6,-153.4,443.5,-157.7,450.5,-158.9,457.5,-159.5]}},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(322.7,-18,73.6,73.6);


(lib.Diagramhits = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"hits subject":63,"hits verb":147,"hits complement":217,"hits review":277});

	// timeline functions:
	this.frame_6 = function() {
		playSound("thesubjectitisapronoun");
	}
	this.frame_74 = function() {
		playSound("cowbell_3times");
	}
	this.frame_75 = function() {
		playSound("it");
	}
	this.frame_175 = function() {
		playSound("cowbell_3times");
	}
	this.frame_176 = function() {
		playSound("ithits");
	}
	this.frame_242 = function() {
		playSound("cowbell_3times");
	}
	this.frame_243 = function() {
		playSound("ithitscarmen");
	}
	this.frame_249 = function() {
		playSound("cowbell_3times");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(6).call(this.frame_6).wait(68).call(this.frame_74).wait(1).call(this.frame_75).wait(100).call(this.frame_175).wait(1).call(this.frame_176).wait(66).call(this.frame_242).wait(1).call(this.frame_243).wait(6).call(this.frame_249).wait(96));

	// textClips
	this.instance = new lib.Wordsverb();
	this.instance.setTransform(-261.9,430.1,1,1,0,0,0,50.7,14.6);

	this.instance_1 = new lib.Wordscomplement();
	this.instance_1.setTransform(-86,430.1,1,1,0,0,0,50.7,14.6);

	this.instance_2 = new lib.Wordssubject();
	this.instance_2.setTransform(-434.9,431.8,1,1,0,0,0,50.7,19.7);

	this.instance_3 = new lib.staticperiod("synched",0);
	this.instance_3.setTransform(-183.4,706.5,1,1,0,0,0,6.9,17.3);

	this.instance_4 = new lib.WordsCarmen();
	this.instance_4.setTransform(-224.7,717.6,1,1,0,0,0,73.5,17.7);

	this.instance_5 = new lib.Wordshits();
	this.instance_5.setTransform(-282.6,717.6,1,1,0,0,0,73.5,22.9);

	this.instance_6 = new lib.Wordsit();
	this.instance_6.setTransform(-317.3,718.1,1,1,0,0,0,73.5,22.9);

	this.instance_7 = new lib.Wordswho();
	this.instance_7.setTransform(-431.6,521.5,1,1,0,0,0,51.8,10.4);

	this.instance_8 = new lib.Wordsit();
	this.instance_8.setTransform(-317.3,718.1,1,1,0,0,0,73.5,22.9);

	this.instance_9 = new lib.Wordsdoes();
	this.instance_9.setTransform(-272.9,518.4,1,1,0,0,0,73.5,16);

	this.instance_10 = new lib.Wordshits();
	this.instance_10.setTransform(-282.6,717.6,1,1,0,0,0,73.5,22.9);

	this.instance_11 = new lib.WordsTowhat();
	this.instance_11.setTransform(-84.5,515.4,1,1,0,0,0,51.8,16);

	this.instance_12 = new lib.WordsCarmen();
	this.instance_12.setTransform(-224.7,717.6,1,1,0,0,0,73.5,17.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("AgGA9QgEgDAAgFIAAgKIAAgJIgCgsIgQgBQgLgBAAgKQAAgFAEgEQADgDAFAAIAPABIgBgJIAAgJQABgFADgDQADgEAFAAQALAAABAWIAAAIIAJgBQAKAAADABQAHADAAAIQAAAFgDADQgDADgGAAIgFAAIgDAAIgJABIABAsIAAAFIAAAFQAAAUgMAAQgDAAgDgDg");
	this.shape.setTransform(-433.2,516.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("AgoA/QgEgDAAgFQAAgFAEgDQAEgEAFAAIARgBIAAgoQAAgWACgWIgTABQgGAAgDgDQgEgEAAgFQAAgFAEgDQADgDAEgBIAbgBQAOAAAaAEQALACAAAKQAAAGgFADQgCADgFAAIgXgDIgBApIgBAoIAYAAQAGAAADADQAEAEAAAFQAAAEgEAEQgEADgFAAIgPABIgPAAIgPABIgSACQgGAAgDgEg");
	this.shape_1.setTransform(-442.4,516.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgXAtQgOgFAAgJQAAgJALAAQAEAAAHADQAIACAEAAQAQAAAAgHQAAgEgMgGQgQgIgFgCQgNgIAAgNQAAgRATgGQALgEAUAAQAJAAAEACQAGADAAAJQAAAPgIAAQgJAAgCgHIgHAAQgTAAAAAFQAAAEAKAGQASAIAGADQANAIAAAMQAAAPgOAIQgMAGgOAAQgMAAgJgEg");
	this.shape_2.setTransform(-255.5,514.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgHA9QgDgDAAgFIAAgKIABgJIgCgsIgQgBQgMgBAAgKQAAgFADgEQAEgDAFAAIAPABIAAgJIAAgJQAAgFADgDQAEgEAFAAQAKAAAAAWIAAAIIAJgBQALAAADABQAHADAAAIQAAAFgEADQgDADgFAAIgEAAIgFAAIgIABIACAsIAAAFIAAAFQAAAUgNAAQgDAAgEgDg");
	this.shape_3.setTransform(-264,512.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgKBAQgDgEAAgFIAAgQIgBgQIABgUIABgRQAAgFADgEQAEgDAFAAQADAAAEADQADAEAAAFIgBARIgBAUIABAQIAAAQQAAAFgEAEQgDACgDAAQgGAAgDgCgAgHgrQgEgEAAgFQAAgGAEgEQAFgDADgBQAFABAFADQAEAEAAAGQAAAFgEAEQgFAEgFgBQgDABgFgEg");
	this.shape_4.setTransform(-270.6,512.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AAUBAQgCgHgCgNIgBgVIAAgGIAAgHIAAgHQgBgDgEAAQgJAAgGAHQgEAEgHANQAAAggEAGQgDAHgHAAQgFAAgEgDQgEgDAAgFIABgFQABgCAAgVIAAg5IAAgDIABgOIgBgIIgBgIQAAgFAEgDQADgEAGAAQAIAAADAKQACAFAAALIgBASIAAARQAGgGAIgEQAFgDAIAAQAPAAAHAJQAFAGABALIABAWIACARIADARIAAADQAAAFgEAEQgDADgFAAQgJAAgDgJg");
	this.shape_5.setTransform(-278.4,511.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},51).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_7},{t:this.instance_6,p:{x:-317.3,y:718.1}},{t:this.instance_5,p:{regY:22.9,x:-282.6,y:717.6}},{t:this.instance_4,p:{regY:17.7,x:-224.7,y:717.6}},{t:this.instance_3}]},12).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_8},{t:this.instance_5,p:{regY:22.9,x:-282.6,y:717.6}},{t:this.instance_4,p:{regY:17.7,x:-224.7,y:717.6}},{t:this.instance_6,p:{x:-429.6,y:535.2}},{t:this.instance_3}]},12).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_6,p:{x:-317.3,y:718.1}},{t:this.instance_5,p:{regY:22.9,x:-282.6,y:717.6}},{t:this.instance_4,p:{regY:17.7,x:-224.7,y:717.6}},{t:this.instance_3}]},11).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_6,p:{x:-317.3,y:718.1}},{t:this.instance_5,p:{regY:22.9,x:-282.6,y:717.6}},{t:this.instance_4,p:{regY:17.7,x:-224.7,y:717.6}},{t:this.instance_3},{t:this.instance_7}]},21).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_8},{t:this.instance_5,p:{regY:22.9,x:-282.6,y:717.6}},{t:this.instance_4,p:{regY:17.7,x:-224.7,y:717.6}},{t:this.instance_6,p:{x:-429.6,y:532.3}},{t:this.instance_3}]},10).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_6,p:{x:-317.3,y:718.1}},{t:this.instance_5,p:{regY:22.9,x:-282.6,y:717.6}},{t:this.instance_4,p:{regY:17.7,x:-224.7,y:717.6}},{t:this.instance_3}]},8).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_6,p:{x:-317.3,y:718.1}},{t:this.instance_5,p:{regY:22.9,x:-282.6,y:717.6}},{t:this.instance_4,p:{regY:17.7,x:-224.7,y:717.6}},{t:this.instance_3}]},22).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_6,p:{x:-317.3,y:718.1}},{t:this.instance_5,p:{regY:22.9,x:-282.6,y:717.6}},{t:this.instance_4,p:{regY:17.7,x:-224.7,y:717.6}},{t:this.instance_3},{t:this.instance_9}]},7).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_6,p:{x:-317.3,y:718.1}},{t:this.instance_5,p:{regY:22.9,x:-282.6,y:717.6}},{t:this.instance_4,p:{regY:17.7,x:-224.7,y:717.6}},{t:this.instance_3}]},9).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_6,p:{x:-317.3,y:718.1}},{t:this.instance_10},{t:this.instance_4,p:{regY:17.7,x:-224.7,y:717.6}},{t:this.instance_3},{t:this.instance_5,p:{regY:14.6,x:-268.5,y:510.3}}]},13).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_6,p:{x:-317.3,y:718.1}},{t:this.instance_5,p:{regY:22.9,x:-282.6,y:717.6}},{t:this.instance_4,p:{regY:17.7,x:-224.7,y:717.6}},{t:this.instance_3}]},9).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_6,p:{x:-317.3,y:718.1}},{t:this.instance_10},{t:this.instance_4,p:{regY:17.7,x:-224.7,y:717.6}},{t:this.instance_3},{t:this.instance_5,p:{regY:14.6,x:-268.5,y:510.3}}]},12).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_6,p:{x:-317.3,y:718.1}},{t:this.instance_5,p:{regY:22.9,x:-282.6,y:717.6}},{t:this.instance_4,p:{regY:17.7,x:-224.7,y:717.6}},{t:this.instance_3}]},7).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_6,p:{x:-317.3,y:718.1}},{t:this.instance_5,p:{regY:22.9,x:-282.6,y:717.6}},{t:this.instance_4,p:{regY:17.7,x:-224.7,y:717.6}},{t:this.instance_3}]},13).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_6,p:{x:-317.3,y:718.1}},{t:this.instance_5,p:{regY:22.9,x:-282.6,y:717.6}},{t:this.instance_4,p:{regY:17.7,x:-224.7,y:717.6}},{t:this.instance_3},{t:this.instance_11}]},7).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_6,p:{x:-317.3,y:718.1}},{t:this.instance_5,p:{regY:22.9,x:-282.6,y:717.6}},{t:this.instance_4,p:{regY:17.7,x:-224.7,y:717.6}},{t:this.instance_3}]},9).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_6,p:{x:-317.3,y:718.1}},{t:this.instance_5,p:{regY:22.9,x:-282.6,y:717.6}},{t:this.instance_12},{t:this.instance_3},{t:this.instance_4,p:{regY:9.3,x:-86.9,y:511.3}}]},10).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_6,p:{x:-317.3,y:718.1}},{t:this.instance_5,p:{regY:22.9,x:-282.6,y:717.6}},{t:this.instance_4,p:{regY:17.7,x:-224.7,y:717.6}},{t:this.instance_3}]},7).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_6,p:{x:-317.3,y:718.1}},{t:this.instance_5,p:{regY:22.9,x:-282.6,y:717.6}},{t:this.instance_12},{t:this.instance_3},{t:this.instance_4,p:{regY:9.3,x:-86.9,y:511.3}}]},10).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_6,p:{x:-317.3,y:718.1}},{t:this.instance_5,p:{regY:22.9,x:-282.6,y:717.6}},{t:this.instance_4,p:{regY:17.7,x:-224.7,y:717.6}},{t:this.instance_3}]},5).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_8},{t:this.instance_5,p:{regY:22.9,x:-282.6,y:717.6}},{t:this.instance_4,p:{regY:17.7,x:-224.7,y:717.6}},{t:this.instance_3},{t:this.instance_6,p:{x:-429.6,y:535.2}}]},12).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_6,p:{x:-317.3,y:718.1}},{t:this.instance_5,p:{regY:22.9,x:-282.6,y:717.6}},{t:this.instance_4,p:{regY:17.7,x:-224.7,y:717.6}},{t:this.instance_3}]},8).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_6,p:{x:-317.3,y:718.1}},{t:this.instance_5,p:{regY:22.9,x:-282.6,y:717.6}},{t:this.instance_12},{t:this.instance_3},{t:this.instance_4,p:{regY:9.3,x:-86.9,y:511.3}}]},9).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_6,p:{x:-317.3,y:718.1}},{t:this.instance_5,p:{regY:22.9,x:-282.6,y:717.6}},{t:this.instance_4,p:{regY:17.7,x:-224.7,y:717.6}},{t:this.instance_3}]},8).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_8},{t:this.instance_5,p:{regY:22.9,x:-282.6,y:717.6}},{t:this.instance_4,p:{regY:17.7,x:-224.7,y:717.6}},{t:this.instance_3},{t:this.instance_6,p:{x:-429.6,y:535.2}}]},10).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_8},{t:this.instance_10},{t:this.instance_4,p:{regY:17.7,x:-224.7,y:717.6}},{t:this.instance_3},{t:this.instance_6,p:{x:-429.6,y:535.2}},{t:this.instance_5,p:{regY:14.6,x:-268.5,y:510.3}}]},7).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_6,p:{x:-317.3,y:718.1}},{t:this.instance_5,p:{regY:22.9,x:-282.6,y:717.6}},{t:this.instance_4,p:{regY:17.7,x:-224.7,y:717.6}},{t:this.instance_3},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},6).wait(20));

	// only thing visible (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("APNNEIAA6HIVRAAIAAaHgEgkdANEIAA6HISWAAIAAaHg");
	mask.setTransform(-255.4,493.7);

	// first pic
	this.instance_13 = new lib.anim_carmen_is();
	this.instance_13.setTransform(-497.3,467.5,0.326,0.326,0,0,0,31.6,-38.8);
	this.instance_13._off = true;

	this.instance_14 = new lib.anim_carmen_ishitfalls();
	this.instance_14.setTransform(-226,481.2,0.417,0.417,0,0,0,5.7,14.8);

	this.instance_15 = new lib.Wordshits();
	this.instance_15.setTransform(-268.5,510.3,1,1,0,0,0,73.5,14.6);

	this.instance_16 = new lib.WordsCarmen();
	this.instance_16.setTransform(-86.9,511.3,1,1,0,0,0,73.5,9.3);

	this.instance_13.mask = this.instance_14.mask = this.instance_15.mask = this.instance_16.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_13}]},86).to({state:[]},21).to({state:[{t:this.instance_13}]},18).to({state:[{t:this.instance_13}]},22).to({state:[{t:this.instance_13}]},16).to({state:[{t:this.instance_13}]},13).to({state:[{t:this.instance_13}]},9).to({state:[{t:this.instance_13}]},12).to({state:[{t:this.instance_13}]},7).to({state:[{t:this.instance_13}]},13).to({state:[{t:this.instance_13},{t:this.instance_14}]},16).to({state:[{t:this.instance_13}]},10).to({state:[{t:this.instance_13},{t:this.instance_14}]},7).to({state:[{t:this.instance_13}]},10).to({state:[{t:this.instance_13},{t:this.instance_14}]},5).to({state:[{t:this.instance_14}]},12).to({state:[{t:this.instance_13},{t:this.instance_14},{t:this.instance_15}]},8).to({state:[{t:this.instance_13}]},9).to({state:[{t:this.instance_13},{t:this.instance_14}]},8).to({state:[{t:this.instance_14}]},10).to({state:[{t:this.instance_14}]},7).to({state:[{t:this.instance_16}]},6).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(86).to({_off:false},0).to({_off:true},21).wait(18).to({_off:false,regY:-38.9,scaleX:0.37,scaleY:0.37,x:-517,y:461.2},0).wait(140).to({_off:true},12).wait(8).to({_off:false},0).wait(17).to({_off:true},10).wait(33));

	// pen
	this.pen = new lib.anim_pencil();
	this.pen.setTransform(31.9,-28.2);

	this.timeline.addTween(cjs.Tween.get(this.pen).to({regX:-7.2,regY:352,x:-490.4,y:577.4},4).to({x:-27.9,y:583.8},10).to({x:-378.4,y:472.3},5).to({y:652.6},6).to({x:-173.5,y:474.1},5).to({x:-172,y:583.8},7).to({x:27.8,y:370},7).to({_off:true},1).wait(300));

	// only thing visible (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EgcgAtCIAA6JIe/AAIAAaJg");
	mask_1.setTransform(-182.6,288.3);

	// first pic
	this.instance_17 = new lib.anim_carmen_ishit();
	this.instance_17.setTransform(-318.1,482.6,0.3,0.3,0,0,0,-77.8,-34.6);
	this.instance_17._off = true;

	this.instance_18 = new lib.WordsCarmen();
	this.instance_18.setTransform(-86.9,511.3,1,1,0,0,0,73.5,9.3);

	this.instance_17.mask = this.instance_18.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_17}]},163).to({state:[]},13).to({state:[{t:this.instance_17}]},9).to({state:[]},12).to({state:[{t:this.instance_17}]},7).to({state:[{t:this.instance_17}]},13).to({state:[{t:this.instance_17}]},16).to({state:[{t:this.instance_17}]},10).to({state:[{t:this.instance_17}]},7).to({state:[{t:this.instance_17}]},10).to({state:[{t:this.instance_17}]},5).to({state:[{t:this.instance_17}]},12).to({state:[]},8).to({state:[{t:this.instance_17}]},9).to({state:[{t:this.instance_17}]},8).to({state:[{t:this.instance_17}]},10).to({state:[]},7).to({state:[{t:this.instance_18}]},6).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(163).to({_off:false},0).to({_off:true},13).wait(9).to({_off:false},0).to({_off:true},12).wait(7).to({_off:false},0).wait(73).to({_off:true},8).wait(9).to({_off:false},0).wait(18).to({_off:true},7).wait(26));

	// right bar
	this.instance_19 = new lib.static_bar();
	this.instance_19.setTransform(-166.2,471.3,0.882,0.391,0,0,0,0.1,-1.2);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(30).to({_off:false},0).to({scaleX:1.18,scaleY:45.6,x:-164.7,y:465.4},7).wait(308));

	// left bar
	this.instance_20 = new lib.static_bar();
	this.instance_20.setTransform(-371.1,469.4,0.882,0.391,0,0,0,0.1,-1.2);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(19).to({_off:false},0).to({scaleX:1.18,scaleY:75.63,y:465.7},6).wait(320));

	// line1
	this.instance_21 = new lib.static_line("synched",0);
	this.instance_21.setTransform(-483.2,574.5,0.02,2.236,0,63.4,0,162.5,0.1);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(4).to({_off:false},0).to({regX:164,regY:1.6,scaleX:2.8,skewX:-116.6,x:-22,y:579.3},10).wait(331));

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
(lib.subject_scene7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene7:0,scene7repeat:300});

	// timeline functions:
	this.frame_0 = function() {
		this.btn_menu.addEventListener("click", openMenu.bind(this));
		this.btn_goNext.addEventListener("click", openNext.bind(this));
		this.btn_goBack.addEventListener("click", openPrev.bind(this));
		
		
		function openMenu(){
		
		 window.open ("../menu/menu.html","_self");
		}
		
		
		function openNext(){
		
		 window.open ("subject_scene8.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("subject_scene6.html","_self");
		}
	}
	this.frame_316 = function() {
		this.gotoAndPlay("scene7repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(316).call(this.frame_316).wait(1));

	// Layer 2
	this.instance = new lib.Diagramhits();
	this.instance.setTransform(457.9,-14.7,1,1,0,0,0,-66.2,329.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(317));

	// New Title
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("Ag9BIQgDgDAAgEIABgMIAAgMIABgRIAAgRIAAgQIgBgTIgBgRIgBgSQABgEADgEQADgDAFAAQAGAAAHALQAWAiASAXQAVAZAbAZIAAgMIgBgLQAAgngDgYIgDgKIgBgKQgBgLALAAQAPAAABA9IgBAcIAAAfIgBAPQgCAJgJAAQgEAAgIgGQgmgkgvhBIAAAVIAAATIAAAXIAAAXQABAZgKAAQgFAAgDgDg");
	this.shape.setTransform(298.8,28);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("AgoA3QgMgOgCgaQgCgMAAghIABgVIABgLQADgIAGABQAIAAAAAPIAAA2QAAA3AmAAQAlAAAAhdIAAgJIAAgIQAAgFACgFQACgFAFAAQAKAAAAANIAAALIAAAMQAABpg4AAQgbAAgOgQg");
	this.shape_1.setTransform(284.2,28.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066FF").s().p("AguA5QgTgRAAgaQAAgeATgbQAVgdAeAAQAfAAAOAOQAQAOAAAgQAAAegSAZQgUAdgdAAQgbAAgSgPgAgfgeQgPAVAAAXQAAASANALQANAKATAAQAUABAPgXQANgUAAgXQAAgXgKgJQgJgJgXAAQgVABgPAWg");
	this.shape_2.setTransform(269.6,28.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0066FF").s().p("Ag9BIQgDgDAAgEIABgMIAAgMIABgRIAAgRIAAgQIgBgTIgBgRIAAgSQAAgEADgEQAEgDAEAAQAGAAAHALQAWAiASAXQAVAZAbAZIAAgMIgBgLQAAgngDgYIgCgKIgCgKQAAgLAKAAQAQAAAAA9IgBAcIAAAfIgCAPQgBAJgJAAQgFAAgGgGQgmgkgwhBIAAAVIAAATIAAAXIAAAXQAAAZgJAAQgFAAgDgDg");
	this.shape_3.setTransform(254.5,28);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0066FF").s().p("AguA5QgTgRAAgaQAAgeATgbQAVgdAeAAQAfAAAOAOQAQAOAAAgQAAAegSAZQgUAdgdAAQgbAAgSgPgAgfgeQgPAVAAAXQAAASANALQANAKATAAQAUABAPgXQANgUAAgXQAAgXgKgJQgJgJgXAAQgVABgPAWg");
	this.shape_4.setTransform(239.3,28.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0066FF").s().p("AguBGQgDgDAAgEIAAgWIgBgWIACgXIABgaIgBgOIAAgOQAAgFADgEQAEgFAFABIAXACQANABAGAFQAmAUAAAcQAAAPgNAIQgKAJgQAFQAdAPAPARQACADAAAEQAAAEgDACQgDADgEAAQgDAAgDgDQgfgegjgLIABATIAAASQAAAEgDADQgDACgDAAQgEAAgDgCgAgdgoIABALIgBASIgCARIAEAAIAEAAQAXAAALgGQAFgBAFgFQAEgFAAgEQAAgMgOgMQgMgKgOgBIgOgBg");
	this.shape_5.setTransform(225.9,27.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0066FF").s().p("AgmBHQgCgDAAgDIAAgcIABglIACglIAAgNIABgOQACgIAHABIAJgBIANAAQAPAAAPALQAQANAAASQAAAXgRAMQgQAMgTAAIgMgBIAAAxQAAADgDADQgCACgEAAQgEAAgCgCgAgUg2IAAARIgCAlIALAAQANAAALgHQAMgIAAgPQAAgKgMgIQgKgHgKAAIgHAAIgGABg");
	this.shape_6.setTransform(214.8,27.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAdAvIgGgHIgQAHQgGADgDAAQgWAAgKgMQgJgLAAgYQAAgVAPgQQAQgQATAAQAIAAAKAEQANAGAAAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAIgBAMIgBATQAAALACAHIAGAQIACAFIAAABQAAAFgCABQgDADgDAAQgCAAgFgEgAgOgWQgLAMAAANQAAAQAGAHQAFAIALAAQAHAAAGgEQADgBAGgGQgDgXAAgMIABgIIABgKIgFgCIgEgBQgNgBgKAMg");
	this.shape_7.setTransform(199.2,30.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgZAzQgOgFAAgJQAAgEADgDQADgDAEAAQACAAAFAFQACACAIABIALACQAFAAAGgCQAJgDAAgGQAAgMgSgFIgHgCQgNgDgFgDQgHgEAAgKQAAgTASgJIAQgGIARgGQAEgBAEAAQAEAAADACQADADAAAEIABAIIABAIQAAAEgDADQgCACgEAAQgFAAgCgDQgCgDgBgHIgVAGQgNAGAAAJIAFABQAUAEAKAHQAPAIAAASQAAAPgNAIQgLAGgOAAQgNAAgLgEg");
	this.shape_8.setTransform(183.8,29.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgHBDQgDgDAAgEIgBgRIAAgQIABgWIABgUQAAgEADgDQACgCAEAAQACAAACACQADADAAAEIgBAUIgBAWIAAAQIABARQAAAEgCADQgDACgCAAQgEAAgCgCgAgEgyQgEgDAAgEQAAgFAEgDQADgDACAAQAFAAADADQADADAAAFQAAAEgDADQgDADgFAAQgCAAgDgDg");
	this.shape_9.setTransform(176.9,27.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0066FF").s().p("AAKAcQgCgCAAgEIABgjIABgKQACgGAGAAQADAAADADQACACAAAEIAAAEIgBAEIAAAiQgBAIgIAAQgDAAgDgCgAgZAOIAAgQIABgTQAAgDACgDQACgCAEAAQADAAADACQACADAAADIAAASIAAAQIAAAEIAAAFQAAADgCADQgDACgDAAQgJAAAAgQg");
	this.shape_10.setTransform(164,23.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0066FF").s().p("AgFBBQgDgDAAgDIABgLIAAgKIgBg1IgVgBQgIgBAAgIQgBgEADgDQACgDAFAAIATACIAAgNIgBgLQAAgEADgDQADgCAEAAQAFAAACANIAAAJIAAAFIAAAGIANgCQAKAAADABQAGACgBAHQAAAEgCADQgDACgEAAIgEAAIgFAAIgNABIACA1IAAAEIAAAFQABAUgKAAQgCAAgDgCg");
	this.shape_11.setTransform(155.8,28.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0066FF").s().p("AgoBEQgCgDAAgEQAAgEACgDQADgCAEgBIAUgBIABgSIgBgQIAAgPQAAgUACggIgMABIgMAAQgEAAgDgDQgCgCAAgFQAAgIAIgBIAdgBQAQAAAcAFQAIAAAAAKQAAADgDAEQgDACgDAAIgPgCIgPgBQgCAaAAAXIAAAQIAAAQIAAAQIAdAAQAEAAACACQADADAAAEQAAAEgDADQgCADgEAAIgQAAIgPAAIgRACIgSABQgEAAgDgCg");
	this.shape_12.setTransform(146.2,28.1);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(317));

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

	this.instance_3 = new lib.Background("synched",0);
	this.instance_3.setTransform(275,195.5,1.069,1.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.btn_goNext},{t:this.btn_goBack},{t:this.instance_1},{t:this.btn_menu}]}).wait(317));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(284.2,-172.2,875.1,775.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;