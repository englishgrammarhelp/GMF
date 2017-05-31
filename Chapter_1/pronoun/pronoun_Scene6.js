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
		{src:"sounds/_12a.mp3", id:"_12a"},
		{src:"sounds/_12b.mp3", id:"_12b"},
		{src:"sounds/_13b.mp3", id:"_13b"},
		{src:"sounds/_13c.mp3", id:"_13c"},
		{src:"sounds/_16a.mp3", id:"_16a"},
		{src:"sounds/_18b.mp3", id:"_18b"},
		{src:"sounds/_19b.mp3", id:"_19b"},
		{src:"sounds/_2a.mp3", id:"_2a"},
		{src:"sounds/_3a.mp3", id:"_3a"},
		{src:"sounds/_4a.mp3", id:"_4a"},
		{src:"sounds/_6a.mp3", id:"_6a"},
		{src:"sounds/_7b.mp3", id:"_7b"},
		{src:"sounds/_9a.mp3", id:"_9a"},
		{src:"sounds/bgmusic.mp3", id:"bgmusic"},
		{src:"sounds/JinglePronoun.mp3", id:"JinglePronoun"},
		{src:"sounds/MenuPronoun.mp3", id:"MenuPronoun"},
		{src:"sounds/s_coolcheer.mp3", id:"s_coolcheer"},
		{src:"sounds/hesheit.mp3", id:"hesheit"},
		{src:"sounds/himherit.mp3", id:"himherit"},
		{src:"sounds/i.mp3", id:"i"},
		{src:"sounds/me.mp3", id:"me"},
		{src:"sounds/nominative.mp3", id:"nominative"},
		{src:"sounds/objectis.mp3", id:"objectis"},
		{src:"sounds/objectivecase.mp3", id:"objectivecase"},
		{src:"sounds/objectsof.mp3", id:"objectsof"},
		{src:"sounds/replaces.mp3", id:"replaces"},
		{src:"sounds/subjectis.mp3", id:"subjectis"},
		{src:"sounds/subjectof.mp3", id:"subjectof"},
		{src:"sounds/substitutes.mp3", id:"substitutes"},
		{src:"sounds/them.mp3", id:"them"},
		{src:"sounds/they.mp3", id:"they"},
		{src:"sounds/us.mp3", id:"us"},
		{src:"sounds/we.mp3", id:"we"},
		{src:"sounds/you.mp3", id:"you"}
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



(lib.VertLine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("AAKEiIgTAAIAApDIATAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgIEhIAApBIARAAIAAJBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-30,4,60);


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


(lib.shestill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgaAvQgGgGABgIQAAgGANgeQAMgbAGgLQAEgLAKAAQAHAAAGAGQAFAGABAIQAAAFggBEQgDAMgKAAQgIAAgGgGg");
	this.shape.setTransform(48.4,20.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9900FF").s().p("AhfCoQgVgTAAhHIAAgeIACgkQgCgFAAgGQAAgGAEgGQAEg/AAgeQAAgJgCgPIgCgYQAAgaAWAAQAJAAAGAGQAbgHAXgDQAYgEASAAQA2AAAgANQAOAGAAAPQAAAJgFAHQgHAHgJAAIgHgBQglgLgjAAQgRAAgUAEQgVADgZAHIACAXQAAAegEA2IBfgKQAqgEAKAAQAJAAAHAGQAGAGAAALQAAASgUACIg0AFIhkAJIgBAdIgBAaQAAAxAHAJQAGAGAdAAIAngBIApgBIANgBIANgCQAXAAAAAXQAAATgTADQgUAFhDAAQhEAAgTgTg");
	this.shape_1.setTransform(27.5,1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9900FF").s().p("AiJCtQgGgGAAgJQAAgXAEguQAEgvAAgXIgBgjIgBgkIACg0IACg1QAAgJAHgGQAGgGAJAAQAJAAAGAGQAGAGAAAJQAAASgDAjIgCA1IABA1IBegQQA3gKAngBQACgfAAg/QAAgRAGgRQAHgYANAAQAIAAAHAGQAHAGAAAKIgCAJQgEAJAAASIABATIAAAUQAAAWgDArQgEAqAAAWIACAyQACAhAAARQAAAJgGAGQgGAGgJAAQgIAAgHgGQgGgGAAgJQAAgRgCghQgDgiAAgQIABghQglABg1AKIhdASQAAAUgEAlQgEAkAAAUQAAAJgGAGQgGAGgJAAQgJAAgGgGg");
	this.shape_2.setTransform(-4.2,2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9900FF").s().p("AhXCXQgpgSgBghQAAgJAHgGQAGgGAJAAQALAAAIAMQALARAJAGQATAMAkAAQAgAAAdgPQAlgSAAgiQAAgcgfgQQgbgNglgBQgjgBgYgNQgfgSAAghQAAgnAsghQArgeArAAQAVAAAbAIQAkAJAAAOQAAAUgUAAQgJAAgWgFQgWgEgMAAQggAAgYAQQgZASAAAXQAAATAhAIQAMACAgACQAzAFAcAbQAaAYAAAlQAAA0gwAfQgqAbg2AAQgoAAghgQg");
	this.shape_3.setTransform(-37.2,2.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.2,-33.3,110.5,66.7);


(lib.shesentstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhfCoQgVgTAAhHIAAgeIACgkQgCgFAAgGQAAgGAEgGQAEg/AAgeQAAgJgCgPIgCgYQAAgaAWAAQAJAAAGAGQAbgHAXgDQAYgEASAAQA2AAAgANQAOAGAAAPQAAAJgFAHQgHAHgJAAIgHgBQglgLgjAAQgRAAgUAEQgVADgZAHIACAXQAAAegEA2IBfgKQAqgEAKAAQAJAAAHAGQAGAGAAALQAAASgUACIg0AFIhkAJIgBAdIgBAaQAAAxAHAJQAGAGAdAAIAngBIApgBIANgBIANgCQAXAAAAAXQAAATgTADQgUAFhDAAQhEAAgTgTg");
	this.shape.setTransform(33.7,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiJCtQgGgGAAgJQAAgXAEguQAEgvAAgXIgBgjIgBgkIACg0IACg1QAAgJAHgGQAGgGAJAAQAJAAAGAGQAGAGAAAJQAAASgDAjIgCA1IABA1IBegQQA3gKAngBQACgfAAg/QAAgRAGgRQAHgYANAAQAIAAAHAGQAHAGAAAKIgCAJQgEAJAAASIABATIAAAUQAAAWgDArQgEAqAAAWIACAyQACAhAAARQAAAJgGAGQgGAGgJAAQgIAAgHgGQgGgGAAgJQAAgRgCghQgDgiAAgQIABghQglABg1AKIhdASQAAAUgEAlQgEAkAAAUQAAAJgGAGQgGAGgJAAQgJAAgGgGg");
	this.shape_1.setTransform(2,2.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhXCXQgpgSgBghQAAgJAHgGQAGgGAJAAQALAAAIAMQALARAJAGQATAMAkAAQAgAAAdgPQAlgSAAgiQAAgcgfgQQgbgNglgBQgjgBgYgNQgfgSAAghQAAgnAsghQArgeArAAQAVAAAbAIQAkAJAAAOQAAAUgUAAQgJAAgWgFQgWgEgMAAQggAAgYAQQgZASAAAXQAAATAhAIQAMACAgACQAzAFAcAbQAaAYAAAlQAAA0gwAfQgqAbg2AAQgoAAghgQg");
	this.shape_2.setTransform(-31,2.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49,-33.3,98,66.7);


(lib.pronounhowl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgYCeQAAgaADg1QACg2AAgZIABhOIAChQQAAgWATAAQAWAAAAAWIgBBQIgBBOIgEBsIgBAzQgDAWgRAAQgWAAAAgXg");
	this.shape.setTransform(40.4,1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AANA/QgEgTgFggIgFgvIgSAoIghBaQgDAJgGAEQgGANgPAAQgQABgQhCQgIgigIg5IgFggQgDgUAAgOQAAgJAHgGQAGgGAJAAQARAAAEASQADANABATIAEAhIANBgQAYhBAahZQAHgYARAAQARAAAGAbQAGAaAIA1QAJA2AHAfIAQg8IAch2QAEgNAPAAQAJAAAHAGQAHAGAAAJIgCAKQgRBIgcBYQgGAUgOAVQgIAMgNAAQgYgBgOg7g");
	this.shape_1.setTransform(18.9,7.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhABdQgegfgCgzQgBgwAbglQAegtA1AAQAsAAAXAoQASAhgBAtQAAAvgZAjQgcAngtAAQglAAgagbgAgmgsQgOAaAAAdQAAAgARASQAPAPATAAQAVAAARgRQASgTABgfQADhTgxAAQgeAAgSAeg");
	this.shape_2.setTransform(-8.9,7.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AA7CmQgFgSgEgiQgEgfAAgVIAAgRIABgSQAAgngUAAQgbAAgWAXQgLANgTAlQAABUgIAPQgFAOgOAAQgJAAgHgHQgGgGAAgJIACgJQABgGABgaIABghIAAifIACglQAAgLgCgKQgCgKAAgLQAAgJAHgGQAFgGAKAAQASAAADATQADAVAAASIgBAwQgCAYABAYIAAATQASgYAVgMQASgMAYAAQAkAAANAYQAKAQACAmIABAqIAEAuQAEAZAEAUIABAGQAAAJgGAGQgIAGgIAAQgQAAgFgQg");
	this.shape_3.setTransform(-32.9,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.4,-33.3,96.9,66.7);


(lib.pronounheader = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAdA7IgDgbQgCgOAAgMIABgKIAAgMQAAgagKAAQgOAAgKAQQgLAPgGAVIgBAMIgCALIACALIAAAMQAAAFgDAEQgDADgGAAQgFAAgEgDQgDgEAAgFIAAgMIgBgLIABghIACgiIAAgMIgBgLQABgFADgEQADgEAFAAQAMAAABAQIAAAPQAUgcAUABQATgBAJASQAFALAAAWIAAANIAAAJQAAALACAPQAEAQAAALQgBAFgDAEQgEACgFAAQgLAAgBgLg");
	this.shape.setTransform(134.8,3.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAbA6QgQAHgRAAQgQAAgLgGQgLgJgDgPQgEgfAAgYQAAgQADgWQACgLAKAAQAFAAAEAEQADADAAAGIgCASIgBASIABAhQABAPADAIIAIAEIAIABQAOAAASgGIAAgYIAAgWQAAgbACgSQABgMALAAQAFAAAEAEQADADAAAFIgCAuIAAAZIAAAaIABAIIAAAJQAAAFgEADQgDADgFABQgKgBgCgLg");
	this.shape_1.setTransform(121.5,4.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgjAzQgRgRgBgcQAAgaAOgVQARgYAdAAQAYAAANAWQAKASAAAZQgBAagOATQgPAVgYAAQgVAAgOgPgAgVgXQgIANAAAQQAAASAKAKQAIAIALAAQALAAAJgJQAKgLABgRQACgtgcgBQgQAAgKASg");
	this.shape_2.setTransform(108.2,4.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhRBfQgDgEgBgFIABgPIABgQIAAgXIABgWIAAgXIgBgYIgBgXIgCgXQAAgGAGgEQAEgFAHAAQAFAAALAOQAdAuAYAeQAcAiAjAgIAAgPIgBgPQAAg0gEggIgDgNQgDgIAAgEQAAgPANAAQAVAAAABQIAAAmIgBApIgCATQgCAMgKAAQgHAAgJgJQgygvg/hWIAAAbIgBAaIABAfIAAAeQAAAhgMAAQgHAAgEgEg");
	this.shape_3.setTransform(92.1,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAnA+IgJgJIgUAKQgJADgEAAQgdAAgNgQQgMgPAAggQAAgbAUgVQAVgVAaAAQAKAAAOAFQAQAHAAAKQAAADgCADIgCAPIgBAZQAAAPACAJIAIAWIADAGIAAACQAAAFgDADQgDADgFAAQgCAAgGgFgAgTgdQgOAPAAASQAAAUAHAKQAHAKAOAAQAKAAAIgEIANgJQgEgfAAgQIAAgLIACgNIgHgDIgGgCQgRAAgNAQg");
	this.shape_4.setTransform(68.1,4.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AghBDQgTgHAAgLQAAgFAEgEQAEgEAFAAQAEAAAGAGQADADAKACIAOABQAIAAAIgCQALgEAAgIQAAgQgXgGIgLgDQgQgEgHgEQgKgFAAgOQAAgZAYgLQAIgDAOgFIAXgHQAFgDAGAAQAFAAADAEQAEADAAAGIABAKIACAKQAAAGgEADQgDAEgFgBQgHABgDgFQgCgDgBgKQgJACgTAGQgSAIAAALIAHADQAaAFAOAIQAUALAAAYQAAAVgRAKQgPAIgTAAQgQAAgPgGg");
	this.shape_5.setTransform(47.8,3.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgoA1QgTgQAAgcQAAgdAPgWQARgXAbAAQATAAANAHQAQAIAAARQAAANgOAKQgGAFgUAGIgtAXQAHAKALAFQAKAFALAAQAJAAALgDQAOgEAFgHQAEgGAEAAQAFAAADADQADADAAAFQAAANgVAKQgTAIgSAAQgZAAgRgNgAgYggQgKAMgFAVIAmgQQAUgLAJgIQgKgJgSAAQgOAAgKALg");
	this.shape_6.setTransform(35.4,4.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgiA1QgRgQAAgaQAAgWAQgbQASgdAVAAQAMAAAPAGQATAHAAAKQAAAFgDADQgDAEgFAAQgDAAgDgCIgFgEQgHgGgRAAQgKAAgMAWQgLAVAAAMQAAARALAJQAKAIAOAAQAHAAAJgDIAOgIIAFgCQAEAAAEAEQADADAAAFQAAAJgTAIQgQAHgLAAQgXAAgRgPg");
	this.shape_7.setTransform(22,4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAnA+IgJgJIgUAKQgJADgEAAQgdAAgNgQQgMgPAAggQAAgbAUgVQAVgVAaAAQAKAAAOAFQAQAHAAAKQAAADgCADIgCAPIgBAZQAAAPACAJIAIAWIADAGIAAACQAAAFgDADQgDADgFAAQgCAAgGgFgAgTgdQgOAPAAASQAAAUAHAKQAHAKAOAAQAKAAAIgEIANgJQgEgfAAgQIAAgLIACgNIgHgDIgGgCQgRAAgNAQg");
	this.shape_8.setTransform(9.1,4.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgMBYIABgsIABgsIABgrIAAgsQABgMAJAAQAMAAABAMIgBAsIAAArIgDA8IgBAcQAAAMgKAAQgLAAAAgMg");
	this.shape_9.setTransform(-0.7,0.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AguBjQgDgEAAgFIAAgxIAAgvQAAgbgCgVIgCgZQAAgJADgGQAEgHAHAAQAFAAADAEQADACAAAGIAAADIgBAIQALgIAJgDQAJgEAIAAQAZAAAMAWQAJASAAAdQAAAYgOARQgPATgZAAQgLAAgOgFIgBA7QAAAFgDAEQgDADgFAAQgGAAgDgDgAgKg/QgHADgKAJQACAcAAAcQANAGAMgBQAPABAIgLQAHgJAAgPQAAgXgFgLQgGgLgLAAQgJAAgJAGg");
	this.shape_10.setTransform(-10.7,7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgoA1QgTgQAAgcQAAgdAPgWQARgXAbAAQATAAANAHQAQAIAAARQAAANgOAKQgGAFgUAGIgtAXQAHAKALAFQAKAFALAAQAJAAALgDQAOgEAFgHQAEgGAEAAQAFAAADADQADADAAAFQAAANgVAKQgTAIgSAAQgZAAgRgNgAgYggQgKAMgFAVIAmgQQAUgLAJgIQgKgJgSAAQgOAAgKALg");
	this.shape_11.setTransform(-24.1,4.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AguA4IAAhUIABgMIAAgMQgBgNALAAQAMAAAAAVQAXgXAbAAQALAAAEAIQAFAHAAAPIAAAJQgBAPgMAAQgKAAAAgMIAAgJIAAgKQgUACgKAJQgKAIgIAQIABBBQAAAMgNAAQgKAAAAgMg");
	this.shape_12.setTransform(-36.8,4.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#9C30CE").s().p("AAdA7IgDgbQgCgOAAgMIABgKIAAgMQAAgagKAAQgOAAgKAQQgLAPgGAVIgBAMIgCALIACALIAAAMQAAAFgDAEQgDADgGAAQgFAAgEgDQgDgEAAgFIAAgMIgBgLIABghIACgiIAAgMIgBgLQABgFADgEQADgEAFAAQAMAAABAQIAAAPQAUgcAUABQATgBAJASQAFALAAAWIAAANIAAAJQAAALACAPQAEAQAAALQgBAFgDAEQgEACgFAAQgLAAgBgLg");
	this.shape_13.setTransform(-56.9,3.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#9C30CE").s().p("AAbA6QgQAHgRAAQgQAAgLgGQgLgJgDgPQgEgfAAgYQAAgQADgWQACgLAKAAQAFAAAEAEQADADAAAGIgCASIgBASIABAhQABAPADAIIAIAEIAIABQAOAAASgGIAAgYIAAgWQAAgbACgSQABgMALAAQAFAAAEAEQADADAAAFIgCAuIAAAZIAAAaIABAIIAAAJQAAAFgEADQgDADgFABQgKgBgCgLg");
	this.shape_14.setTransform(-70.2,4.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#9C30CE").s().p("AgjAzQgRgRgBgcQAAgaAOgVQARgYAdAAQAYAAANAWQAKASAAAZQgBAagOATQgPAVgYAAQgVAAgOgPgAgVgXQgIANAAAQQAAASAKAKQAIAIALAAQALAAAJgJQAKgLABgRQACgtgcgBQgQAAgKASg");
	this.shape_15.setTransform(-83.5,4.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#9C30CE").s().p("AAdA7IgDgbQgCgOAAgMIAAgKIABgMQAAgagKAAQgNAAgLAQQgLAPgGAVIgCAMIgBALIABALIABAMQAAAFgDAEQgEADgFAAQgFAAgEgDQgDgEAAgFIAAgMIgBgLIACghIABgiIAAgMIgBgLQABgFADgEQADgEAFAAQAMAAABAQIAAAPQAUgcAUABQATgBAIASQAGALAAAWIAAANIAAAJQAAALACAPQAEAQAAALQAAAFgEAEQgDACgGAAQgLAAgBgLg");
	this.shape_16.setTransform(-96.1,3.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#9C30CE").s().p("AgjAzQgRgRgBgcQAAgaAOgVQARgYAdAAQAYAAANAWQAKASAAAZQgBAagOATQgPAVgYAAQgVAAgOgPgAgVgXQgIANAAAQQAAASAKAKQAIAIALAAQALAAAJgJQAKgLABgRQACgtgcgBQgQAAgKASg");
	this.shape_17.setTransform(-109.8,4.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#9C30CE").s().p("AguA4IAAhUIAAgMIAAgMQAAgNALAAQANAAAAAVQAWgXAbAAQALAAAEAIQAFAHAAAPIAAAJQgBAPgMAAQgKAAAAgMIAAgJIAAgKQgUACgKAJQgKAIgIAQIABBBQAAAMgNAAQgKAAAAgMg");
	this.shape_18.setTransform(-121.7,4.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#9C30CE").s().p("AgyBdQgEgDAAgFIAAgkQAAgRADggIACgyIAAgRQAAgMACgFQADgLAJABIALgBIASgBQAUAAATAQQAWAQAAAYQAAAfgXAPQgVAQgaAAIgPgBIgBBAQAAAFgDADQgEAEgEAAQgFAAgDgEgAgahHIAAAWIgDAxIAOAAQASAAAOgJQAQgMAAgTQAAgOgPgJQgOgJgNAAIgKAAIgHABg");
	this.shape_19.setTransform(-134.5,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-143.2,-19.4,286.4,38.8);


(lib.pronouncanword = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AA1BrIgGgwQgDgaAAgXIABgSIAAgVQAAgwgRAAQgZAAgUAdQgUAbgLAnIgCAVIgCAWIACATIABAUQgBAKgFAGQgHAGgJAAQgKAAgFgGQgHgGABgKIgBgUIgCgTQAAgXADgmQADgoAAgXIgBgVIgBgVQABgJAGgGQAGgGAKAAQATAAACAcIABAaQAlgxAlAAQAjAAAOAfQAJAUABApIAAAWIAAATQAAASAFAdQAEAdAAASQABAJgHAGQgGAGgJAAQgUAAgCgUg");
	this.shape.setTransform(23.7,7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABGBwQgKgJgFgHQgVALgQAGQgQAGgJAAQgzAAgYgdQgWgcAAg4QAAgzAlgmQAkgmAxABQATgBAYALQAeAMAAARQAAAGgFAEQgCAJgBATIgCAvQAAAbAEAQQACAKAMAdIAFALIABAFQAAAIgGAGQgGAFgIABQgEAAgLgKgAgkg2QgZAcAAAiQAAAlANARQANATAZgBQATAAAPgIQAIgDAOgNQgHg4AAgdIACgUIADgZIgOgGIgJgCQggAAgZAcg");
	this.shape_1.setTransform(-0.1,7.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag+BgQgggdAAgvQAAgqAegwQAhg0AoAAQAVAAAaAKQAiANAAASQAAAJgGAGQgEAHgJAAQgGAAgFgEIgJgIQgNgKgdAAQgVAAgWAoQgUAlAAAYQAAAdAUARQATAQAaAAQANAAAPgHIAagOQAGgDADAAQAIAAAHAGQAFAHAAAIQAAAQghAPQgeANgUAAQgqAAgfgbg");
	this.shape_2.setTransform(-23,7.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.9,-33.3,73.8,66.7);


(lib.itstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9900FF").s().p("AgOChQgIgGABgKIAAgKIABgKIgBggIgBghQAAgfgFg3QgGg9AAgbIgUAAQgwAAgbgHQgSgFgBgRQABgJAFgHQAHgHAKAAIAjAEQAWADAOAAIAoAAIAmgBQARAAAhACQAiADAQAAQAJAAAHAGQAGAHABAJQgBAKgGAGQgHAHgJAAQgQAAgigDQghgCgRAAIgPAAQAAAeAFBEQAFA+AAAjIACAXIABAYQAAAPgEALQgHAOgMAAQgHAAgHgGg");
	this.shape.setTransform(14.4,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9900FF").s().p("AhgChQgGgGAAgKQAAgJAGgHQAHgGAJAAQAOAAAhgFQACgSAAgXIgBglIgCgkQAAgxAHhMIgdABIgdAAQgJAAgGgGQgHgGAAgKQAAgVAVgCQASgCAwAAQAqAABCAKQAUADAAAUQAAALgIAGQgGAFgJAAQgOAAgVgDIgkgEQgFA/AAA5IABAmIABAmQAAAUgCARIBGgBQAJAAAGAHQAGAGAAAKQAAAJgGAHQgGAGgJAAIglABIglABQgNAAgcAEQgdAEgPAAQgJAAgHgHg");
	this.shape_1.setTransform(-15.1,2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.7,-33.3,59.4,66.7);


(lib.itsentstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOChQgIgGABgKIAAgKIABgKIgBggIgBghQAAgfgFg3QgGg9AAgbIgUAAQgwAAgbgHQgSgFgBgRQABgJAFgHQAHgHAKAAIAjAEQAWADAOAAIAoAAIAmgBQARAAAhACQAiADAQAAQAJAAAHAGQAGAHABAJQgBAKgGAGQgHAHgJAAQgQAAgigDQghgCgRAAIgPAAQAAAeAFBEQAFA+AAAjIACAXIABAYQAAAPgEALQgHAOgMAAQgHAAgHgGg");
	this.shape.setTransform(14.4,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhgChQgGgGAAgKQAAgJAGgHQAHgGAJAAQAOAAAhgFQACgSAAgXIgBglIgCgkQAAgxAHhMIgdABIgdAAQgJAAgGgGQgHgGAAgKQAAgVAVgCQASgCAwAAQAqAABCAKQAUADAAAUQAAALgIAGQgGAFgJAAQgOAAgVgDIgkgEQgFA/AAA5IABAmIABAmQAAAUgCARIBGgBQAJAAAGAHQAGAGAAAKQAAAJgGAHQgGAGgJAAIglABIglABQgNAAgcAEQgdAEgPAAQgJAAgHgHg");
	this.shape_1.setTransform(-15.1,2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.7,-33.3,59.4,66.7);


(lib.HorizontalLine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("AXWAKMgurAAAIAAgTMAurAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("A3VAJIAAgRMAurAAAIAAARg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.5,-2,301,4);


(lib.Hesheitsaxcheekstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgdAZQAwgCAEguIAAgIIABAAQAEADABAFQACAFgCAJIAAACQgGARgPAKQgKAJgRADIgDAAQgHAAAAgHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-3.2,6.1,6.5);


(lib.Hesheitfinger4sill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#FFCC66"],[0,0.333],41.9,8.2,41.9,8.2).s().p("AAAAAIAAAAIAAAAg");
	this.shape.setTransform(-2.4,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAOAPQgRgHgKAHIgIgDIgBgIIAAAAIgCAAIgEAEIgCgBIgFgGIAAgBIABAAIAAgCQAfAHAiACIAAgBQgTgGgUgFQgLgCgIgFIgFgDIAnAEQAPAGAKAJIACADIABABQADAEgEABIgFADIgMAAIgDgBg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("AgfABIAAACIgBACIgBgQIABAAIADAAIAEAEQAJAFALACQAUADATAIIAAABQgigCgfgJg");
	this.shape_2.setTransform(-0.3,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.7,-1.7,7.4,3.4);


(lib.Hesheitfinger3still = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("AgaAKIgNgBQgBgJADgGIADgCIAEgCIAFADQAGADALAAQAIABABgEIADAAQAQAGAUABIAAACQgkAGglgIQAEAGAGAFIgDgBg");
	this.shape.setTransform(-0.4,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgfAKQgGgEgEgGQAnAHAigFIAAgCQgUgBgOgGIgDAAQgDAEgIgBQgLAAgGgDIgFgDIAPgEIAdAAIADACIAAAAIABAAQAEADAIgBQAPAEAEALIgBABQgOALgcgFIAJADIgmgFg");
	this.shape_1.setTransform(0.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-1.5,9.1,3.2);


(lib.Hesheitfinger2still = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("AggAJIgGgNIgBgDIAEAAIAIAAQAeADAkgBIAAABIhDAMIABABIgFAAg");
	this.shape.setTransform(-0.5,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAQALIABAAIAMACIgEAAQgFAAgEgCgAAUALIgEAAIgDgCIgwABIgBgBIBEgMIACgBIACAAIgCAAIgCAAQgiABgggCIgIgBIAKgEIAAAAIABAAQAWABATgCIAGgBQAKADAPgBIAAABIACABQABAIgDAFIgBABQgEAFgJAAIgHAAg");
	this.shape_1.setTransform(0.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-1.3,9.1,2.7);


(lib.Hesheitfinger1still = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("AgeALIADAAIgEgBQgDgFgBgFIAMgGIABgBQAcgHAeAFIAAACQgXAIgYAHQgJABgHACIACABg");
	this.shape.setTransform(-0.2,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAigBIAAgBQgegGgcAHIgBABIgMAFIAAgGIAGgDQAFADALgHQAEgCAFAAIAFAAQANgDAPAAQADACAGACIAAABIABACQAIAQgeABIABACIgWABIgHAAQAYgHAXgIg");
	this.shape_1.setTransform(0,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.9,-1.6,7.8,3.3);


(lib.Hesheitdogmouthstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSAUIAAgCQALgZAVgOIAEAAQAEALgMARQgKAPgKAAQgEAAgEgCg");
	this.shape.setTransform(-0.1,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgYAdIgBAAQgBgKAAgLQAMgXAYgLIADAAQAFgIAEAHQAGAJgBAKQAAAIgGAKQgNAVgSAAQgGAAgIgCgAAPgTIgCAAQgVAOgLAZIAAACQARAHALgUQAMgRgEgLIgBgBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.7,-3.2,5.6,6.4);


(lib.Hesheitsetoffingersstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFCC00","#FFFFFF"],[0,0.502],40.1,20.8,0,40.1,20.8,0).s().p("AgHACIgBgEIAEACIAAAAQAFACAHAAIgBABg");
	this.shape.setTransform(-3.6,4.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgoAxIgBgBIgDgDIAAgQQALgMAOgHIAAgCIgCABQgOAIACgRQASgJgIgHQgGgGgBgGQgBgGAFgGIABgCIADgFIAHAAQAPAHASgJIAOAAQAEAEgDAOIgDADIAAABQAcAHgYAUIgCAAQgQAFgDAUIgCABIgPALIAAADIAAABIgMAFIgGABIgEADIgCAAIgMgBgAAAAFIgmAbQAFASARgMIAQgMQALgHACgNIAAgBIgMgBIgBABgAgYgCQAJAFAQgDQAPgFAQgBIABgCQAKgOgSABIgDAAIgBAAQgZAAgUATgAgYghIgCAAQAFARAYgMIADAAIARgIIACgCQgZgBgVAEIgDAAIAAACg");
	this.shape_1.setTransform(0,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("AglAeIAmgbIABgBIAMABIAAABQgCANgLAHIgQAMQgHAFgFAAQgHAAgDgLgAgXgEQAVgTAZAAIADAAQASgBgKAOIgBACQgQABgPAFQgGACgGAAQgIAAgFgEgAgZgjIACAAIAAgCIADAAQAVgEAZABIgCACIgRAIIgDAAQgJAFgHAAQgKAAgDgKg");
	this.shape_2.setTransform(-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-5.1,9.1,10.3);


(lib.Hesheitguitararmstll = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("ACvAuIgDgBIAAgBQgKgHgJgIIAAgCQgLgGgBARIgBABQgXAPgVgQIgCAAIgKABQgkAEgnACIgCAAQg+AEg9AGIAAACIgCAAIgBAAIgLABIggABIgHABIgBAAIgVAAIgBAAQgeABgXgDQgHgBgBgDIAAgBIAGAAQADgBACgEQAEgJgCgGIAEgDIABgFIAEgBIAHgMIAFAAIACgGIAIgGIAHAPIAAgBQAFgQAcAEIADAAQB1AMCAgCIACAAQAYgfAggYIACgCIAVgOIAAgCQAzAAAkAQIAAABQgQAHgbgGQgbgGgOAPIBbAbIAAADQgvgGgpAAQABADACABQADACADABIACAAIABABIA5AcIAAABIhJgSIgJgCIABAHIACAAIACACQAZAVAWAZIAAAAQgQgBgOgPgAgogFIAEgDIABAAIACAAIgFADIgCAAg");
	this.shape.setTransform(-0.2,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ACtA4IgBgBQgGgKgKgDQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQgMgFgLAJIgRAEIggAAIAAAAIgBAAIgKAAQg+AEg9ABIhIAEIAAAEIgBABIhDgBIg1AGQgJgBgGgEIADgJQABADAGABQAYADAdgBIACAAIAUAAIACAAIAGAAIAggCIALgBIACAAIACAAIAAgCQA9gGA+gEIACAAQAmgCAlgEIAJgBIADAAQAVAQAWgPIACgBQABgRALAGIAAACQAJAIAKAHIAAABIACABQAOAPARABIgBAAQgWgZgYgVIgCgCIgCAAIgBgHIAIACIBKASIAAgBIg5gcIgBgBIgCAAQgEgBgCgBQgDgCgBgDQAqAAAvAGIAAgDIhbgbQAOgPAbAGQAbAGAQgHIgBgBQgjgQgzAAIAAACIgWAPIgCABQgfAZgYAeIgCAAQiBACh0gMIgDAAQgcgEgFAQIAAABIgIgPIAFgFIAAACIADAAQAZADAXgCQAUAEAXgCQAlACAkAAIAAAAIAMAAIgBAAIgDAAQAtAIA5gDIACAAQAlgqAxgfIAAgBIAAgBIACAAQAkgBAbAIIADAAQAIAGAGgCIAEACIAKAIIABADIgKAKIAAABQgKABgJAAQALAMARAFQAKADgHAJIgDAAQgbAHghgHQgBgBgBAAQgBAAAAAAQgBAAAAAAQAAAAABAAIAjANQAQAHgEANIgBABQgfAJgcgSIgCAAQAdATAEAgIAAABQgVgFgPgKg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,-7.1,52,14.3);


(lib.hestill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgaAvQgFgGgBgIQAAgGAOgeQAMgbAGgLQAEgLAJAAQAJAAAFAGQAGAGAAAIQgBAFgfBEQgCAMgMAAQgHAAgGgGg");
	this.shape.setTransform(32.8,20.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9900FF").s().p("AhfCoQgVgTAAhHIAAgeIACgkQgCgFAAgGQAAgGAEgGQAEg/AAgeQAAgJgCgPIgCgYQAAgaAWAAQAJAAAGAGQAbgHAXgDQAYgEASAAQA2AAAgANQAOAGAAAPQAAAJgFAHQgHAHgJAAIgHgBQglgLgjAAQgRAAgUAEQgVADgZAHIACAXQAAAegEA2IBfgKQAqgEAKAAQAJAAAHAGQAGAGAAALQAAASgUACIg0AFIhkAJIgBAdIgBAaQAAAxAHAJQAGAGAdAAIAngBIApgBIANgBIANgCQAXAAAAAXQAAATgTADQgUAFhDAAQhEAAgTgTg");
	this.shape_1.setTransform(11.9,1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9900FF").s().p("AiJCtQgGgGAAgJQAAgXAEguQAEgvAAgXIgBgjIgBgkIACg0IACg1QAAgJAHgGQAGgGAJAAQAJAAAGAGQAGAGAAAJQAAASgDAjIgCA1IABA1IBegQQA3gKAngBQACgfAAg/QAAgRAGgRQAHgYANAAQAIAAAHAGQAHAGAAAKIgCAJQgEAJAAASIABATIAAAUQAAAWgDArQgEAqAAAWIACAyQACAhAAARQAAAJgGAGQgGAGgJAAQgIAAgHgGQgGgGAAgJQAAgRgCghQgDgiAAgQIABghQglABg1AKIhdASQAAAUgEAlQgEAkAAAUQAAAJgGAGQgGAGgJAAQgJAAgGgGg");
	this.shape_2.setTransform(-19.8,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.6,-33.3,79.3,66.7);


(lib.hesheitsent2still = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgSATQgIgIAAgLQAAgKAIgIQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIQgIAIgLAAQgKAAgIgIg");
	this.shape.setTransform(46.6,17.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgYCeQAAgaADg1QACg2AAgZIABhOIAChQQAAgWATAAQAWAAAAAWIgBBQIgBBOIgEBsIgBAzQgDAWgRAAQgWAAAAgXg");
	this.shape_1.setTransform(34.8,1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AANA/QgEgTgFggIgFgvIgSAoIghBaQgDAJgGAEQgGANgPAAQgQABgQhCQgIgigIg5IgFggQgDgUAAgOQAAgJAHgGQAGgGAJAAQARAAAEASQADANABATIAEAhIANBgQAYhBAahZQAHgYARAAQARAAAGAbQAGAaAIA1QAJA2AHAfIAQg8IAch2QAEgNAPAAQAJAAAHAGQAHAGAAAJIgCAKQgRBIgcBYQgGAUgOAVQgIAMgNAAQgYgBgOg7g");
	this.shape_2.setTransform(13.3,7.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhABdQgegfgCgzQgBgwAbglQAegtA1AAQAsAAAXAoQASAhgBAtQAAAvgZAjQgcAngtAAQglAAgagbgAgmgsQgOAaAAAdQAAAgARASQAPAPATAAQAVAAARgRQASgTABgfQADhTgxAAQgeAAgSAeg");
	this.shape_3.setTransform(-14.5,7.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AA7CmQgFgSgEgiQgEgfAAgVIABgRIAAgSQAAgngUAAQgbAAgWAXQgLANgTAlQgBBUgGAPQgHAOgMAAQgJAAgIgHQgGgGAAgJIACgJQACgGABgaIAAghIABifIABglQAAgLgCgKQgCgKAAgLQAAgJAGgGQAHgGAJAAQASAAADATQADAVABASIgCAwQgBAYAAAYIAAATQASgYAVgMQASgMAYAAQAkAAANAYQAKAQABAmIACAqIAEAuQADAZAFAUIABAGQAAAJgHAGQgHAGgIAAQgQAAgFgQg");
	this.shape_4.setTransform(-38.5,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54,-33.3,108.1,66.7);


(lib.hesentstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhfCoQgVgTAAhHIAAgeIACgkQgCgFAAgGQAAgGAEgGQAEg/AAgeQAAgJgCgPIgCgYQAAgaAWAAQAJAAAGAGQAbgHAXgDQAYgEASAAQA2AAAgANQAOAGAAAPQAAAJgFAHQgHAHgJAAIgHgBQglgLgjAAQgRAAgUAEQgVADgZAHIACAXQAAAegEA2IBfgKQAqgEAKAAQAJAAAHAGQAGAGAAALQAAASgUACIg0AFIhkAJIgBAdIgBAaQAAAxAHAJQAGAGAdAAIAngBIApgBIANgBIANgCQAXAAAAAXQAAATgTADQgUAFhDAAQhEAAgTgTg");
	this.shape.setTransform(18.1,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiJCtQgGgGAAgJQAAgXAEguQAEgvAAgXIgBgjIgBgkIACg0IACg1QAAgJAHgGQAGgGAJAAQAJAAAGAGQAGAGAAAJQAAASgDAjIgCA1IABA1IBegQQA3gKAngBQACgfAAg/QAAgRAGgRQAHgYANAAQAIAAAHAGQAHAGAAAKIgCAJQgEAJAAASIABATIAAAUQAAAWgDArQgEAqAAAWIACAyQACAhAAARQAAAJgGAGQgGAGgJAAQgIAAgHgGQgGgGAAgJQAAgRgCghQgDgiAAgQIABghQglABg1AKIhdASQAAAUgEAlQgEAkAAAUQAAAJgGAGQgGAGgJAAQgJAAgGgGg");
	this.shape_1.setTransform(-13.6,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.4,-33.3,66.8,66.7);


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


(lib.texthesheit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_254 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(254).call(this.frame_254).wait(1));

	// vert1
	this.instance = new lib.VertLine("synched",0);
	this.instance.setTransform(-55.9,173.8,0.8,0.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(124).to({_off:false},0).to({alpha:1},5).wait(125).to({startPosition:0},0).wait(1));

	// horz
	this.instance_1 = new lib.HorizontalLine("synched",0);
	this.instance_1.setTransform(0.1,183.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(124).to({_off:false},0).to({x:-3.9,alpha:1},5).wait(125).to({startPosition:0},0).wait(1));

	// howl
	this.instance_2 = new lib.hesheitsent2still();
	this.instance_2.setTransform(84.5,167.5);

	this.instance_3 = new lib.pronounhowl();
	this.instance_3.setTransform(85.1,160.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},63).to({state:[]},60).to({state:[{t:this.instance_3}]},19).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_3}]},107).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(142).to({_off:false},0).to({alpha:1},5).wait(108));

	// can
	this.instance_4 = new lib.pronouncanword();
	this.instance_4.setTransform(-14.9,166.8);
	this.instance_4._off = true;
	new cjs.ButtonHelper(this.instance_4, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(63).to({_off:false},0).to({_off:true},60).wait(10).to({_off:false,y:160.8,alpha:0},0).to({alpha:1},5).wait(117));

	// it
	this.instance_5 = new lib.itsentstill();
	this.instance_5.setTransform(0,169);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(42).to({_off:false},0).to({scaleX:1.52,scaleY:1.52},10).to({scaleX:1,scaleY:1},5).to({alpha:0},5).wait(1).to({x:-94.9},0).wait(39).to({alpha:1},0).to({scaleX:1.52,scaleY:1.52,x:-100.9},10).to({scaleX:1,scaleY:1,x:-94.9},5).to({alpha:0},5).to({_off:true},1).wait(38).to({_off:false,y:162,alpha:1},0).wait(7).to({alpha:0},8).wait(24).to({alpha:1},0).wait(55));

	// she
	this.instance_6 = new lib.shesentstill();
	this.instance_6.setTransform(0,167);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(20).to({_off:false},0).to({scaleX:1.43,scaleY:1.43,y:166},10).to({scaleX:1,scaleY:1,y:167},5).to({alpha:0},7).wait(21).to({x:-108.9},0).wait(19).to({alpha:1},0).to({scaleX:1.43,scaleY:1.43,x:-120.9,y:166},10).to({scaleX:1,scaleY:1,x:-108.9,y:167},5).to({alpha:0},5).to({_off:true},20).wait(25).to({_off:false,x:-106.9,y:160,alpha:1},0).wait(7).to({alpha:0},7).wait(28).to({alpha:1},0).to({alpha:0},11).wait(55));

	// he
	this.instance_7 = new lib.hesentstill();
	this.instance_7.setTransform(0,169);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:1.45,scaleY:1.45,y:166},9).to({scaleX:1,scaleY:1,y:169},5).to({alpha:0},6).wait(43).to({x:-94.9,alpha:1},0).to({scaleX:1.45,scaleY:1.45,x:-98.9,y:166},9).to({scaleX:1,scaleY:1,x:-94.9,y:169},5).to({alpha:0},5).wait(35).to({_off:true},1).wait(9).to({_off:false,y:160,alpha:1},0).wait(11).to({alpha:0},8).wait(30).to({alpha:1},0).to({alpha:0},12).wait(67));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.4,135.7,66.8,66.7);


(lib.she = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// Layer 1
	this.instance = new lib.shestill();
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({alpha:1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.2,-33.3,110.5,66.7);


(lib.it = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_44 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(1));

	// Layer 1
	this.instance = new lib.itstill();
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({alpha:1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.7,-33.3,59.4,66.7);


(lib.Hesheitsaxfinger1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Hesheitfinger1still();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-15,x:-0.4,y:-0.8},4).to({rotation:0,x:0,y:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.9,-1.6,7.8,3.3);


(lib.Hesheitsaxcheek = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Hesheitsaxcheekstill();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.49,scaleY:0.49},14).to({scaleX:1.09,scaleY:1.09},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-3.2,6.1,6.5);


(lib.Hesheitguitararm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Hesheitguitararmstll();
	this.instance.setTransform(-23.4,2.7,1,1,0,0,0,-23.4,2.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:2.6,rotation:15},3).to({regY:2.7,rotation:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,-7.1,52,14.3);


(lib.Hesheitfinger4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Hesheitfinger4sill();
	this.instance.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({scaleX:1,scaleY:1,rotation:13.3},4).to({scaleX:1,scaleY:1,rotation:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.6,-1.7,7.4,3.4);


(lib.Hesheitfinger3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Hesheitfinger3still();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:1,scaleY:1,rotation:-19},4).to({scaleX:1,scaleY:1,rotation:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-1.5,9.1,3.2);


(lib.Hesheitfinger2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Hesheitfinger2still();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-15},4).to({rotation:0},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-1.3,9.1,2.7);


(lib.Hesheitdogmouth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Hesheitdogmouthstill();
	this.instance.setTransform(0,0,0.536,0.536);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.5,scaleY:1.5},14).wait(15).to({scaleX:0.54,scaleY:0.54},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,-1.7,3,3.4);


(lib.Hesheitsetoffingers = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Hesheitsetoffingersstill();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({x:1.8},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-5.1,9.1,10.3);


(lib.he = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_13 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(13).call(this.frame_13).wait(1));

	// Layer 1
	this.instance = new lib.hestill();
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.6,-33.3,79.3,66.7);


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


(lib.Hesheitdogstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Hesheitdogmouth();
	this.instance.setTransform(5.9,-8.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC6633").s().p("AhfCaIAAgCQgBgSAEgMIAAgBQgKAEgKAFIAAgCQgFgdAPgTIACgCQgHgHgGAHQgMAPgGgLQAGgQAJgNIAAgDIABAAQAVgeAfgTQgGgBgBgEQgFgUgNAKIgBAAQADghgVALQAAgJADgCQAOgJAAgMIgCAAQglADgZAPIgBgIQgBgLgHAJQgPAVgDgVIAAgCQgEgNgLAWQgLgBAOgTQALgPgEgGQgIABgDAEQgRARgDgOQALgWAWgLIAAgBQA4gYBBASQAIACAGAGQAUgkAtgNIAAgBQAVAAAQgFIABAAQALASgEAOIABAAQAUAFASgHIAAACIAAABQACAWgEAOQAFAYASgYIADgCQAWgLAkACQAYAKALAXIABADQgBAigQATIAAACIgBACIgSAWIgCgBQgBgLgOAAIgBgCQgHgOgLgLIgDAAQgWADAFgYIgBAAQgSgLgOAPIgCABQgLArg2AMQgCAKAJgBIAAgBQAYAKAEAcIgEAAIgHgGQgEgIgLABQgKAIACAPQAAANAGAMQAIASAVgFIAEgCQAQALACAZIgBAAQgSgEAPAUQADAEAAAGIAAAEQgBAFgEADIAAABIgCABIgCACIgFABIAAACIgBAAIABAAIAAAAIg3AAQgYgJgnADIgIAFIgZgCIAHADIgHABQgGgLgHgJgAhRB+QgJAXAWANIAWAAQAXgOgIgcQgBgGgIgCIgbgDQgKAFgEAMgAgbBZQgGARAOAMQgBADACAEQADAEAFAAIAOACQAJgBAGgHQARgWgQgVQgCgEgEgBQgNgCgLAAQgMADgFANgAhfAuQgGAKALAGIAJAAQAEgBAAgDQAIgSgUAAQgEACgCAEgAgfhTQgOAFgIAOQgGALgBANQAAAIAGAHQAKANASgDQAIgFgBgJIgDgGQAHgDAFgGQAEgHAAgIQABgYgWAAIgEAAgACbhhQgSADAGAQQABAEADADQgBARATABIACAAIALAAIAEgDIABgBQAYABADgTQADgPgMgJIglgBIgJADgAimhyQgCAHAHAEQAWAMAaAAQAEgCAEgBQAUgDgCgSQAAgDgCgCQgMgHgPADIAAgBQgGgHgJACQgFADgJgBIgEAAQgOAAgDAOgAAiiRQgGALAKAGIAJAAQADgBABgDQAIgRgUAAQgCABgDADgABRBWIgBAAIABgBIABABg");
	this.shape.setTransform(0,1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhZC4QgLgOgBgXIgBgCQgbgEAKgeIABgCQgHAAgKgIIAAgCQABgcANgRIADAAIABgBQAQgZAXgRIgCgBQgOgKgFgTIgBgBQgCADgEgBQgQgIANgRIACgCQgeABgUANQgCgCgBgDQAAgGgBABQgQAVgLgSIAAgBQgIACgLALIgBAAQgFgXAKgUIgBAAQgPAYgEgQQgBgFAAgKQAFgFACgHIAAgDQAPgJAMgMIACAAIAAgDQBBgbBGAZIABAAQAlgyBPgDIACAAQALgQAcADIAAABQAVALgMAWIgCABIgBACIgGAFQAGAWAAATIABAAQAbgOApACIACAAQAPAFAMALIABABQAJAMAFAQIABAAIAAAWIAAACQgHAJgDANIgCAAIAAACQgJARgKANIgDAAQgMAHgFgMQgDAAgCABQgHAFAAgHQgBgKgIgEQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQgIADAAgEQABgMgJgEIgCAAQgbAMAMgiQAAgEgDADQgeAjgpAYQAXAZAFAeIABADQAOAHACATIAAACQgOAMAQAUIABACQgBAVgFASIgJAFQAEgDABgFIAAgFQAAgGgDgEQgPgUASAEIABAAQgCgYgQgMIgEADQgVAEgIgSQgGgMAAgNQgCgPAKgHQALgBAEAIIAHAFIAEAAQgEgbgYgLIAAABQgJABACgMQA2gJALgsIACAAQAOgQASALIABAAQgFAYAWgCIADAAQALAKAHAOIABACQAOAAABAKIACAAIASgUIABgCIAAgCQAQgTABgiIgBgCQgLgYgYgKQgkgCgWALIgDACQgSAYgFgXQAEgPgCgVIAAgCIAAgCQgSAHgUgFIgBAAQAEgOgLgSIgBABQgQAEgVAAIAAABQgtANgUAlQgGgGgIgDQhBgSg4AYIAAACQgWALgLAVQADAOARgRQADgEAIAAQAEAFgLAPQgOAUALAAQALgWAEANIAAACQADAVAPgVQAHgJABAMIABAHQAZgPAlgCIACAAQAAALgOAJQgDADAAAIQAVgLgDAhIABAAQANgKAFATQABAEAGACQgfATgVAeIgBABIAAACQgJAOgGAPQAGALAMgPQAGgHAHAHIgCACQgPATAFAdIAAACQAKgFAKgDIAAABQgEAMABARIAAACQAHAKAGAKIgBAAIgGAAgABRBhIABAAIgBgCIgBACIABAAIAAAAgABFC4IAAgBIgBAAIABAAIAAgCIAFAAIACgCIgEAFgAhECsQgWgMAJgYQAEgMAKgFIAbAEQAIABABAHQAIAbgXAOIgWAAgAgKCMQgFgBgDgEQgCgDABgEQgOgMAGgRQAFgNAMgDQALAAANADQAEAAACAEQAQAVgRAWQgGAIgJAAIgOgBgAhaBIQgLgGAGgKQACgEAEgBQAUAAgIARQAAADgEABIgJAAgAg2gPQgGgGAAgJQABgNAGgLQAIgOAOgEQAbgCgCAZQAAAIgEAHQgFAHgHACIADAGQABAJgIAFIgIABQgNAAgHgLgACngrIgCAAQgTgBABgRQgDgDgBgEQgGgQASgDIAJgCIAlAAQAMAJgDAPQgDAUgYgCIgBABIgEADIgLAAgAihhcQgHgEACgIQADgPASACQAJABAFgEQAJgCAGAHIAAABQAPgDAMAIQACABAAADQACASgUADQgEABgEADQgaAAgWgMgAAmh1QgKgHAGgKQADgEACgBQAUABgIAQQgBADgDACIgJAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.5,-18.5,45.1,37);


(lib.Hesheitdog = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Hesheitdogstill();
	this.instance.setTransform(-2.2,17,0.998,0.998,15.5,0,0,-1.3,16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-1.4,scaleX:1,scaleY:1,rotation:-12.6,x:-0.8},14).to({regX:-1.3,scaleX:1,scaleY:1,rotation:15.5,x:-2.2},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.1,-22.7,53.3,47.6);


(lib.hesheitbubblestill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.it();
	this.instance.setTransform(-136.4,-199.4);

	this.instance_1 = new lib.she();
	this.instance_1.setTransform(-275.2,-199.9);

	this.instance_2 = new lib.he();
	this.instance_2.setTransform(-427.4,-200.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AeREuQs6BYxXAAQz2AAuDhzQuEhyAAihQAAihOEhyQODhyT2AAQT4AAODByQODByAAChQAABsmUBXEAmrADnQgBABgBABEAphADFQhNAQhbAQ");
	this.shape.setTransform(-290.9,-196.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EAsBAGdQgVABgQgPQhdgYhUgtIgBgBQiFgvh8hCIgkgRQhhgvhpgWQgggHgQgVIgIAAIgEgEIgFgGIgIgEQgHgEgDgGIAAgDIAAgEIABgDIAAgEIADgDIADgDIAEgCIABgBIAZACQAGAIAIAFIAEAGQBXAjBXAaQAbAIAZANQAqANAhAaIABACQCBA4CCA0QBSAhBPAjQgIhBgSg+QgniNiJg9QgYgLgTgQIAAgDIAAgHIABgDIACgDIABgCIACgBIABAAIAEAAIAAgBIAJAAIAOABIALAHIASAPQByAuA4BvQAcA3AJA9QAIAyACA0QABAKgJAFIgCABIgJAAgEAnQgBEQgsgGgegeQgIggAEgjIACgOQAKgNANgLIAEgDIAxgHQgcgigUgoIgEgHIAAgoIAAgOQAwggA4gTIAHgEIALgDIANAGQADACACADQAJAMgHAPIgEALQgwAUgtAVQARAeATAdQApgHAdgeIAQgDIAAgBIANAGIAFAFQANAhghAWIgFAEQgaAKgaABIAJANIASAXIAAAHIAAAHIAFAGIAEAHQAdBBg4AVQgVAIgYAAIgUgCgEgnIgB6Qg0gXgShBIAAgGIAAgHIgFgHIgEgHIAAgUIAAgUIgFgHIgEgHQg/AJhOAVIgEABIgCAFIgEAHQgLAJgMAEIANAQIAGAFQA8gbAXA/QAAARgDAQQgBAIgDAGQhUAfgxheQgLgWgSgSIgCgOIAAgNIAEgHIACgFIAFgBIAKgBIABgBIAAgBIABAAIAEgCIABgFQABgHACgGQB3gSBqgrQAxAkACBGQAAANAGAOQBMgsAiBJQAHAhAAAjQgBAJgEAJQgXAJgUAAQgdAAgWgVg");
	this.shape_1.setTransform(-299.7,-173.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("EAn5AGuQiDg0iAg4IgBgCQgigagpgNQgZgNgbgIQhXgahXgjIgEgGQgIgFgGgIIgZgCIgBABIgEACIgDADIgDADIAAAEIgBADQs6BXxXAAQz2AAuEhyQuDhyAAigQAAiiODhyQOEhyT2AAQT3AAODByQODByAACiQABBrmUBWQANATAKAVQAFALAAANQgBAJgDAIIgDAFIgFAAIgBgBIgCgBQAOgigYgcQgEgFgCgGQgEgEgDgFQhMARhbAPIgJAAIAAABIgFABIAAAAIgDABIAAADIgCADIgBADIAAAHIAAADQATAQAYALQCJA9AnCNQARA+AJBBQhQgjhRghgEAm0gEeIgIAEQg3ATgwAgIAAAOIAAAoIAEAHQAUAoAcAiIgyAHIgDADQgNALgLANIgCAOQgDAjAHAeQAfAeAsAGQAjAFAegLQA4gVgdg/IgFgHIgEgGIAAgHIAAgHIgSgXIgJgNQAagBAagKIAFgEQAggWgMghIgFgFIgOgGIAAABIgPADQgdAegpAHQgTgdgRgeQAtgVAvgUIAFgLQAHgPgKgMQgCgDgCgCIgOgGIgKADgEgpzgChIAEAHIAAAUIAAAUIAFAHIAEAHIAAAHIAAAGQATBBAzAWQAmAjA5gYQAEgJAAgHQABgjgHghQgjhJhMAsQgFgOgBgNQgBhGgxgkQhqArh3ASQgCAGgCAHIAAAFIgEACIgBAAIAAABIgBABIgKABIgFABIgCAFIgFAHIABANIACAOQARASAMAWQAxBcBUgdQADgGABgIQACgQAAgRQgWg/g9AbIgGgFIgMgQQAMgEALgJIAEgHIACgFIAEgBQBNgVA/gJIAFAHg");
	this.shape_2.setTransform(-290.9,-185.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-598.9,-236.7,616,104.5);


(lib.hesheitbubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// Layer 1
	this.instance = new lib.hesheitbubblestill();
	this.instance.setTransform(43,73.6,0.224,0.224);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,y:9.7,alpha:1},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.3,20.6,138,23.4);


(lib.HESHEIT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hesheitbubble();
	this.instance.setTransform(89.3,-0.6,0.368,0.368);

	this.instance_1 = new lib.Hesheitfinger3();
	this.instance_1.setTransform(43.9,5);

	this.instance_2 = new lib.Hesheitfinger4();
	this.instance_2.setTransform(44.3,7.8);

	this.instance_3 = new lib.Hesheitfinger2();
	this.instance_3.setTransform(43.4,2.5);

	this.instance_4 = new lib.Hesheitsaxfinger1();
	this.instance_4.setTransform(42.9,-0.2);

	this.instance_5 = new lib.Hesheitsetoffingers();
	this.instance_5.setTransform(43.8,16);

	this.instance_6 = new lib.Hesheitdog();
	this.instance_6.setTransform(84,32.3);

	this.instance_7 = new lib.Hesheitsaxcheek();
	this.instance_7.setTransform(43.1,-14);

	this.instance_8 = new lib.Hesheitguitararm();
	this.instance_8.setTransform(-73.7,4.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("AB3h3IgJAHIgKAJIgNALIigB2IguAjQgFAEgFAEAhFAzQAEgEADgDIAWgSICEhqIACgCQACAAABgCIADgCIANgLACChZIgZATIh3BtIghAfIglAhIgWAR");
	this.shape.setTransform(-58.8,6.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1,1).p("A0XuuIAAXXIAAAJIAAF9MAovAAAIAAmTIAAgCIAA3I");
	this.shape_1.setTransform(-6.5,3.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3,1,1).p("AUYAAMgovAAA");
	this.shape_2.setTransform(-6.5,-90.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC33").s().p("AgqD2IgIgCQg6gRgJhCIAAgCIAAgwQAFgdAGgbIABgCQACgSAPAQQACACADgCQAEgDACgFQADgFAAgHQgLgUgOAVIABgCQADgGACgJQAdABAGgTIABgCQgDgTgTgEIAAgBQARABAMgDIACAAQAJgLALgJIAFgEIACAAIAAAHIgBAJIAAAAIAAABQgCAGgDAGIAFAAIAAAAIAAACIAAAAIgCAAQgDACgBADQgFANAGAKIABABIAAABIABABIABAAIACAAIABADIgBgCIgBAAIgBAAIgBABIgFAIIAAADIAAAIIAGAHIgEAFIAAABIAAAAIgBABIAAAAIAAADIgBAGQAEAHAHADIAFAAIAAADIgCAAQACADgBAEIgBABIAAAAQABAagegHIgBgBIgOgIIAAACQACAPAPACIABAAQgCAWAXAJIACAAQAuACARgcIAAACQAAAvAJAlIACABQAKAKAAAUQAAAGgTABQgLABgKAGQgVALgWAAQgMAAgMgCgAg1CmIAAAYIACAAQADAOAMAFIABABQAYAGAGgOIAAgDQgMgjgkgBIAAADgAg1A1IAAABIABgBIAAgBIgBABgABaDrQgQgIgEgUIgBgBIgDgFIAAAAQgQgnABg4IAAgBIAAgGQAEgDABgFIAAgCQAQgPgNAeIgBACQALAqACAzIACAAIAAADIABADQAJAZARgSIABgBIAAgaIAAgCIACAAQAAgygSgfQgHgKgIgIIAKAAIACAAIAKANQARAZAHAkQAHAlgMAVQgHAMgMAHIgCAAgABcDWQgRgUAAgmIAAgCQgCgggFgcQAeAXgCA4QgBAUgDAQIAAAFIAAAAgAgMifQAQgkADg0IABAAQAJAXgEAgQgDAagPAIIgEABQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape_3.setTransform(44.3,13.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#009933").s().p("AB7BhQgMgHgDgOQBJgmAihMIABgCQAeAfAlAYIACABQgeAFgcAJIgCAAIgCAAQhBAQghAxIAAACIgCAAgACPBRQAJgPALAKQAGAEgCAEQgRAIgSAFQAGgGAFgKgAinBKQgMgNgHgTIgBgBQgfgdg2gGIgDAAIAAgBQgJABAAgGQA3gnA6gmQAJgGAFgKQAIgHAEAKIAAACIABACQABATgEANQgCAUAEAQIAAACIABACQAIAaASAUIgBACQgZAUgXAWIAAgCg");
	this.shape_4.setTransform(-73.4,23.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FFFFFF","#996600"],[0,0.333],-661.6,-14.1,976.8,-14.1).s().p("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");
	this.shape_5.setTransform(-43.9,-4.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#996600").s().p("AgfBWQgEgbgRgaIAAgCIAAgDQAMgGAHAWIAKAeQAFgRgPgVQgPgVASAAIAAADIACADQANAYALAaIAAADIgCAAQgIADgGADIAAAAQgGAEgEAEIgBgCgAgGAsIgNgSIgEgFQgEgIAGgGQAHAAgBAHIAAABQALALAEAOQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAIgCACIgEAAgAgKAOQgHgGgBgIQgBgDAEgCQAGgBAAAGIAAAAQAHAEgBAHQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBABIgFAAgAAAgIIgDgFQgFgIAFgHIABgCQAFABABAIIABAEQAGAHACAIIgBACIgCAAQgIAAgCgIgAAQgMQgIgKgGgMIgBgDQgBgFAEgCQAIABADAJQACAHAEAHQADAFgFADIgDAAgAAegbQgJgGgHgUIgBgBIAAgCQAAgKADgIQADgIAGgFIABACIANAbIAOAZIgLADIgMgXIgLgUIgBAAQALAYACAWg");
	this.shape_6.setTransform(-98.3,-48.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCF9C").s().p("ApyFMQgDAAgDgDIAAgDIAAAAQABgFACgDIgFAAQgDAAgDgDIAAgBIgBgDQgBgFACgEQACgGAFAAQAJACACAIIAAAEIADgBQAHAAACAFQACADgBAEIgFAGIgCABIgEADIgFABIgBAAgADME2QgPgFgSgDIgHgDQgDgCgBgEIAAAAQAAgKAJgEQAjAAAeAOQACACABADQABAJgJAEIgIAAIgRgBgAqYEvQgCgDAAgDIAAgCIABgEQAEgIAJgBQALgBAEAKIAAACQgBAIgHAEQgDACgEgBIgBAAIgEABQgEAAgDgEgAJ/EcIgEgIIgCgCIgGgDIgEAAQgBAGgIgCQgBgBAAAAQAAAAgBAAQAAgBAAAAQgBAAAAgBIgBgCIgBABIgCABQgIADgIgCIgCgCQgCgGAGgDIADgBIADgBIAGgBIAAAAIADgCIADAAQANAAAMADIACgBIACAAQAFgBAEAEIABAAQAGgCAHABQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAABQADAHgHADIgBAAIACAEQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBABQgEAEgFgEIgBgBIgBAAQgBAEgFABIgBAAQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAgBgBAAgAGfEVIgDgCIAAgBQgHAAgCgGQgBgDACgDIADgBIABAAIAAgBQABgEAFgBIACAAQAEgBAEABIABgDIAFgCIANgCQAHgBADADQACACAAAEQABAAAAABQAAAAgBAAQAAABAAAAQAAABgBAAQgEAFgGgEQgFACgFAAQADAEABAFQABAAAAABQAAAAgBABQAAABAAAAQgBABAAAAQgEAFgGgFIgCgCIAAACQgCADgDAAIgFgBgADxDdIABgIQACgJALgEQAQgFAPgHQAOgJALgJIAMgJIAEAAQAUACgLASIgEAHQgGAHgJAFIgKAGQgYANgZAKIgHACQgIAAgCgKgApekvQgMgCABgLQAAgEACgFQACgEAEgCQAKABAEAEIAAACIAAACIgCgBIgDABQgKAFADALIACADIgBAAg");
	this.shape_7.setTransform(-38.7,39.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#0066FD","#CCCCCC","#FFFFFF","#FFFFFF","#FFFFFF","#996600","#FFCC00"],[0,0.184,0.788,0.937,1,1,1],42.1,15.8,42.1,15.8).s().p("AAAAkIAAgCQgEgDACgFIABgCIAAgBIABgBQABgCABgCIAAAQIABAAIABABIAAABIABACIgFgCgAABAOIAAAAIgBgEIgBgBIgCgCIAAgDQAAgFADgGQAAAHABAGIAAACIABAHIgBgBgAgBgRIgBgBIgBgBIAAgEIgBgLIABgBIADgCIgBAVIAAgBg");
	this.shape_8.setTransform(42.1,15.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CC6633").s().p("AB1CiQgJgDgSAEIgDAAQg4gBgmgSIAAgIQAVgPgBgbQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABAAQAXgSgHgaIAAgCQAKgIAHgKQALgRAFgVIgaAeIgFAIQgJANgDAMQANACgKAKQgTASAEASIAAACQgMATgRAPIAAACIgCAAIgDAAIgCABQgcAFgeAEIgCgDIAAgCQgNADgIgFQgIgFgOgDQgHgEgJAFQgGAEAAgEQAFgPgHgFQAfgKApAAQALgBAKAEQAGgFAFgGQgBALAIAKIAfgCQAOgCAAgQIAAgWQABgWgTABQgHADAAAHIgBAIQgHAFgIADIACgEIAAgDQABgVALgTQADgGgCAAQgDABgDAFQgCAIgEAHQgLATgfgBIgCAAQgPgFgTgCIAAgCQgSgNgNgRIgHgLIAAgCQgEgLgGgHIAAgCIAAgTQALghAjgJIAAgCQAlgDAQARIACABQACgHAPAOQAUASAJASQgFANgOAFIAAAAIAAgBQgXgHgOgRQgNgSgSgNQAIANANAOIAAABIAJAJIARAPIAVASIABgBIACgBQAHgHAJgGIAAgCQAKgNAGgTIAAgCQgDgSgGgPQACgEgBgFIgBgDIABAAIgBgBIgFgEIgHgIIgBgCIgCgFIAAgBIAAgCQgCgJAAgJIgBgCIAAgBIAAgBIgBAAQgFAAgDgCIgBAAIgBAAIgBgBIgBgBIAAgCQgCgDABgDIAAgBIABgKIACgQIACgDIADgCIAhAAIALACIANABIAMABIBYABQAEAAADACIAEABQAMADAEAMIABABIABAFIAAAEIAAADIAAABIgCADIAAAMIAAAIIgDAMIgCAJIABgJQABgIgHgCIgBAAIgCACQgCAJAAAKIAAAGIAAABIAAAFQgEAVAIAIIAAADQgEAYgKAMIAAAAQgEADAAAEQgBAGgDAEIgEAFQABgUgTgCQgEACgDADQgEAEgBAGIgEAGQgCAEgFACQgMAGgCALQgCAMgDAKQgHAYAYAAQAFgDADgEQAFgHgDgIIAIgGQANgLAIgPIABgDIAFgCIgBADIgBAEIAAAAQgPApgkAfIAAAKIAAACQAZAPAtgFIACAAIACABQAHAHAGAJIgDAAQgcgGAQAPIAAAFQgCABgEAAQgEAAgIgCgAh2ggQgFAHgBAHQgDATAPAMIAAASQgBAXAWAAQAGgEAHAAIAOgBQARgEgCgSQgCgMgHgJQgGgHgMgFIAAgBIgBgCQgCgHgEgEQgKgOgVgCIgEAEgACfCCIgCgBQgJgBgFgGIgnACQgVACgKgIIAHgGIAAgCQAWgRAkAFIACAAQAkAAAdAFIACAAQAaAHALAWIABAAQgPAAgMACIABAAQAPALgRABIgCAAIgBgBQgIgBgGgCIAAACIAAACIAAABIAAABIgCAAIgMABQgWAAgFgTgAC1BuIAAABQgFABgCAFQgCAJAGAGIACABIAjAAQAFgCACgGQABgFgEgDQgMgIgOAAIgMABgAjCBuQgCgLgLAFQgTAIAGgJQAJgCAEgGIABgBIgmAEIAAgCQA+gbBSAFIAMAAQAEAFAKgDQAXgFAEAIIgBACQgkAag7gJIgBACQgRACgEAQIAAABIgRABQgRAAAFgKgABfBZIATgUIAogpIAOgOIABgCIgWAQIgHAGQgQANgNAPIgCAAIAZgiIAegkIAAgCQgLAIgJAIIgHAIIgCAAIAHgKQAMgPAOgOIABgCQgRAHgPAUIgBAAQARgyBCgBIABACQAZAHgCAiQgHATgSAKIgJAHQgJAIgFAOIgCADIgGADQgTAFgBAQIgCAAQgQARgcgIQAXgUAUgXIAAgCQgSANgWAVIgBACIgBAAQgHAPgKAAQgFAAgFgDgADOgdQgJAEABAKIABABQgMAJgGALQgEAIAFAIQAGAJANgEQAJgDAFgIIAGgHQAEgCACgCQAKgLgGgRQgBgDgEgBIgUgDIAAABg");
	this.shape_9.setTransform(77.1,58.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#FFCC00","#FFFFFF"],[0,0.502],41.4,33.1,0,41.4,33.1,0).s().p("AgJAGIgFgEQgBgCABgDQAOgRAOAQIABABQACAQgLAAQgGAAgJgHg");
	this.shape_10.setTransform(41.4,33.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag6ANIAAgCIAAgLQALgFAKASQADAFAIgDQAFgCAEgFQAHgNgUAPIgCABIgSgSIgBgCIAdgOIAFAAQAVABgEAcIAAACQgOATgQAAQgOAAgOgOgAApgEQgHANgKgKQgBAAAAgBQgBAAAAAAQAAAAgBABQAAAAAAABQgGAVgFgbIAAgDIABAAIABgCIACgBQAKgPAaABIABACQAQARgOAPIgKAEIgCABQAIgMgIgFg");
	this.shape_11.setTransform(47.2,-21.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("Ai9CtQgLgLgJgNIAAgCIAAgwIAJgdIABAAIACAAQAKAFALAFQAgAMArACIABACIAEAIQACATAaABIgEACQgHAFgFAJIAAABQgZgUgvALIAAACQgMAHgIAKQgHAKgFAMIgBAAgAB7gHIgbAAIAAgCQgLgGgRABIgBgCQgYgOgagLQAKgUAOgQIAAgCQAkgFATgiIAAgCQARgaASgZQADgEgBALIgBAGIAAACQgBAVgIAPQgDATAHAKIAAACQAMAGAUgBIACAAQAcgSASgbIACgBIABAAQAAAJgIADIAAADIgCAAQggAkgTAwIAAACIAAADIgBAAQgHAPgQAEIgCAAgAgghTQgOgKgCgWQAIgLAFAIIABAAQAVATgQARIgDAAIAAgBg");
	this.shape_12.setTransform(17.2,5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFCC99").s().p("ArGJvIADgFIACgCQAGgEAKAAQAKAAAFgEIgCAAQgVgKgUgLIAAgDQAlACAggFIAAgBQAngGATgZQARgXAUgUIACgFQAAgBABAAQAAAAAAgBQAAAAAAAAQABgBAAAAQgCgFgDgDQgDgDgEgBIgDAAQhChOhZg4QgcgSgfgPIgDgBQglgSgRglIAAgCIAAgDIA5g2IBDhAIABgCQA3ACAfAnQALANgEANIgCAAQgCgLgKAFIAAACQgkAbgpAWIgCABIgDAAQgPAFgJAMQAvAZAoAgQAOALAMANQAiA0AnAtIAAABIABAAIATAWQAmApAqAkIACAAIABACQATAKgFAYQgWARgngIQgigIgdALIgLAEQgVAHgSALQgbAPgegGIAAACQgLAHgKAAQgNAAgLgLgADRJjIgCAAQgRAHgagCIgBgCQgRgFgQgIIAIAAQAJgEgBgKQgBgDgCgBQgegOgjgBQgJAEAAAKIAAABQgIABgMgCIgBABQgIABgDAFIgUABQgaAEAAgYQAJgTgDgiIgCAAQgEgSgIgPQgGgMgJgKIgwg2Qg3g8g7g4IAAgDIAAgmIgCgBQgagWgegSIAAgBQgOgIgHgMQAdgWAtgIIAAgCQAYgLAOAJIgBACQgEAGgHACIgBgBQgBgIgHgBIAHAMIAAAAIABABIAfAyQAyBOA3BKIACABQApBMA2BBIACAAQAcASAhAPQAbAMAeAJQAdAKASgSQAZgKAEAWIAAACQgbACAIAIIAFAAIAHAAQAYAOgggCIgCAAQgBAHAKAFIgJAAQgQADAVADQAHAAgCAIIgBACIgKABQgQAAgMgMgAH0I6IAAACIgDAAQgngGgagUIgCAAIguAAIAAgCQAAgTgJgKIAQgNQAYgVAWgWIAAgCQAYgWAMghIAAgCQAOgZAIgfIAAgCQARgKAJgTIAAgCQACgFgCgEQghhVg6g+QgEgLgJgHQgWgTgLgeQAIgXATACIAAACQAzAxAyAzIACAAQAqAyAnA0IABACQAAAXgKAMQgfAigYApIgCAAQgDAFgHACIAAACQgEALgIAGIAAADIgBACIgyA9IgXAbIgDADIABAKIABAAQAbAbAsAHIAFABIgDABIgDABQgGACACAHIACABQAIADAIgDIACgCIABAAIABACQAAAAABABQAAAAAAAAQABABAAAAQAAAAABAAQAIADABgHIAEABQAFAHgCAFIgBACIgCAAIgIAAQgQAAgMgFgAEJI1IgBgCQgIgKgNgFIAAgBIgRgDIAAgCIgOgKIgDAAQgygBgmgOIAAgCIALgIIABgCIASgDIgBAIQACAOAPgFQAZgKAYgOQAJAVAXAGIA1AOIAAACIAOACIAAAAIATABIgBADQgEgBgEABIgCAAQgFACgBAEIgBAAIgDACQgCADABADQACAFAHABIAAAAQgMAHgPAAQgOAAgPgGgAFPIcQANgFAKgIIAAgBQARgEAFAKQAAAHgFAAIgNABQgDgEgHABIgNACIgFACIABgBgAD1HXQALgTgUgCQAcgSAbgTQA4goAygsQAUgSAZgMIACgBQAFgMgYgGIAAgCQhDg7g5hFIgBgCQgFgFgEgHQgFgIgCgLIAHgNQAIgMALgKIAAgBQAYgIAYAHIACABIBEBTIACABQAwA9AmBIIgEAQQgwAsg8AgIAAACIgCABQg1Ahg6AcIgrAUIgCABIgFADIAEgHgAF3AjIAAgCIAAgWQAEgHgCgKIAAgDQAYhIArg1IAAgCIACAAIAng3QgGABgCAEQgUAkgUgdIAAgBQgEgCgBgEIAegTIACAAIAAgBQAtgkBIADIADAAIAAAAIAAAAQgIAfgQAWIAAACIgBACQgRAYgaAOIgCABIABgBIAAgBQAMgQAJgSIgCABQgdAdgWAjIAAAFIAAACIgCAAQgZArgTAzQgBAMAEAEIACABQBZgJBWgaIAAgCIAYgHIADAAQAGgHAIgEIACgBIAKgpIAAgCIAHgFIAAgBIAAgBIAAgBIABAAIABgBIADAAIABAAIAAgDIADgBIAOgFIAIgCIAKAAIABABIABABIAAAAQgCADgEABIAAABQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABIAAAAIgBACIgBAAIgCABIAAAAIAAAFIAAABIgBABIAAAAIgBAAIgBABIgBABIgCAAIgDAAIAHAAIAAAAIAAAAIABgBIAAABIABAAIABABIAEAAIAAABIAAABIAGAGIADAGIABABIACACIABABIgBABIAAAAIAAABIABABIABAAIACAAIABAAIAAgBIAAABIABABIAAAAQgIAFAEAJIACACQgBADABAEQABADADAAIAHABIgKgBIALADIAFACIgCABIgCADQgCAJAAAKQgNgDgHAFIgJgDIAAgHIgCAAIgFAEIgBgBIgGgGIAAgBIgKASIgDAAQgZALgSgQIgCABIgSAHIgOAEIgCAAQhaAfhoAUIgDADQgJADgIAAQgRAAgEgSgAK7hFIAGgCIgJgBIAAAAIADADgAJ4AZIAAgCQAVgXAVAXIABACQgLAKgLAAQgLAAgKgKgAFrAZQgpgBgfgKIgCgBIgBgBIgQgLIAAgBQAIgZALgWQALgVAPgSIAAgCIACAAQAmgtAxgiIACABQAOAPAKASIAAABQgzA+gQBfIgCAAgAHEgCQgIAAADgLIAAgDIAAgCQAPgmASgjIAAgCQAkALAaATIABACIhXA7IgCABIgCgBgAqjgIQgDgBgCgDQgEAEgJgDIgDgCIAAABIgBgBIABAAIgCgDQgDgLAKgFIADgBIACAAIAAgBIAAgCQgEgFgKgBQgEACgCAFQgCAFAAAEQgMgggEglQgIhXgChdIgBgPQAAgxABgzQAFgdAbAMQAYALAXgJQAFgLAAgLQAAgIgCgHQgDgMgIgKIgCgBQgJAKgMgEIgDgBQgUgMgEgdIAAgCQAIgNAVABIADAAIAAABQAEgDABgFQACgIgKgLQgCgNADgHIACgDQgJAIABgTIAHgFIABgCQAUgUARgYIABgCIAMgDIAAABIAAgBIAHgCIANAUIgCADQgJALAKAHQAHgYAEASIgBAGIAAAFQgBASAGgVQAEgPARgBQAUAMgOAaIgBAAQgDATANgaIACAAQAIgGANANQAJAIAGALIACACQAOAXADAiIAAAEQgIAZgXAMIAAABIgCABQgcAKgqgEIgBgBQgNgJgMADQAPAQAhgBIACAAQAEAOAHAMIABACQANAhAZgfQAGgHALgCQAXAEAVAGQAmAKAjARIAnASQBNAhBTAYIAFABQATAFAUgEQAygKApgRQAvgGAmgNIACgBQgVAQgRASQgMAMgOAJQgyAjhKAMQgKACgIgCIgWgEIgJgCQgigIgggLIhAgWQgygQgzgPIgBgCQgKgegXgSQAXAnASAqQAmBVAXBiIABAAIAAAFQAAAEgCADQgVAVgxgHIgFAEIgGABIAAABIgBAAIgOADIgEADIgEADIgDAAQgCACgEABIAAABIAAAAIgBABIgBABIgCACIAAABQgBAAAAAAQgBAAAAABQgBAAAAABQAAAAgBABIgBAAIgFADIgCABIgFADIAAAAIgDACIgEADIgCABIgEADQgNAJgFAOQgBAAAAAAQgBAAAAABQgBAAAAAAQAAABgBAAIgCAEIgEAAIgBgBIgBgGIgDgNQgCgLgEgKIgBgBQgCgIgEgHIgBgCIgBAAIgBgBIgBgBIAAgBIABgBIgBAAIAAgBIAAAAQgVgogYglIAAgBQgCgDAAgDQgVglgXgjQAAgYABgYQABgKgBgDQAAAAAAgBQAAAAgBAAQAAAAAAAAQAAABgBAAQgCADgEAMQACAtABAzIACAAQgBA+AQAuQADAEABAGIAAAAQADAEABAEIABABQAEACABADQAEAFgFAIQgDAEgFgBIAAABIACAHQAEAKgKAEQgDABgEAAIgCgCQgDAEgEAAIgGgCgAovnwIAAgBQALgIAGgLQAHgLACgOIgBAAQgKAagWAOQghgBgQgRQgYgagJAcQAEAFACgGIABgCQAcAYA2AAgAqdo9QgGAEgBAHIAAAKQAAAEADACIACAAIABgBIAAgBQAAgIABgHIABgCQAIgIALgDIABAAQAGAAAFgCQABgBAAAAQABgBAAAAQAAgBgBAAQAAgBgBAAIgNAAQgLACgIAHgAJ/gzQgEgGAAgHIAAgeIgBgDIAAgPQANgXARgTIABgBQALgRACAEQAEAJAAALIgBAAQAAAUgEAQIgCABQgSAQgBAiIgCAAQgHALgFAAIgDgBgAL9hIIACAAIgDABIABgBgALahUIAAAAIAAAAgAMChdIAAgBIADAAIAAABIgDAAgALbheIAEgBIAAABIgCAAIgCAAgAJWibIAAgCIAAgPQAJgTADgYIAAgCQAUgOAOgUQAHgKAFgLIABgEQABgCACgCQADgCAFAAQgBgIgHAAIgBAAQgGAAgIAEQgLAFgGgFIgEgEIgHgHIAAgCQgDgHAAgKIABgHQACgGAEgEIAFgFQAHgFALgBIACgBQARAJAGACIgCgDQgCgCAAgDQAOgTAUAWQACACAEABIABABIAAACQgBAGgEAEIABATIACAAQAFAKAHAEQANAIATgFIAAAAIAIgDIACgBIABgBQARgMAcABIAAACQgEAGgFAFQgJAIgLAFIADAAQAXgCAMgLIADgDIAAABIAFACQAKAGADAMQACAHAAAJIAAADQgMAcgdAOIgBAAIgGADQgOAEgOADIgBgBIAAgUIgCgBQgMgCgGAEQgFAFABALIgBABQgdALgXgUIAAADQAAAEgFgBIgDgBQADAIgMAEQAAASgVATQgMAKgNAAQgKAAgLgGgAB2kyIgCAAQgOgHgHgNIgBgCQAfAFARgGIAAABQAPAEgFANIAAACQgLADgNAAIgKAAgACmlRIghAAIgBgCQgVgEgKgQQAFABABgDIACAAQAwgEATAXIgCABIgFAEIgDAAgAL5lgQAEgBABgEIAAgCIACAAQARgSAaAQIABACQgMAIgOAGQgEACABgLQgJgKgEAVIgBACQgCAAgGgLgAAelgQgHgOgDgRQAmABAdgIIACAAQAPgTAHAQIAAADIgBACQgUAagngJIAAAFIAAACIgCABQgGAIgLADIgCAAgACFl6IAhgHIADAAIAcALIADABQAMAFgKAHIgDACIgMABQgfAAgXgUgAB9mVQAEAAABgEIAAgDIAwAFIADAAIAAABQASgDABAOIgBABQgMADgLAAQgaAAgZgOg");
	this.shape_13.setTransform(-29.6,10.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF6600").s().p("AiJBLIgEgJIgBgBQgDgJABgIIABgDIAAgBQACgIAHgIIAAgBIABAAIAAgBIABgBIACgBIAAgCIAAgDQARgQATADIAAAAIABABIABAAIABAAIAAAAIAAAAIAEABIAAABIAAAAIAAABQACADAAADIgBACIAAABIgBAAQgCADgGADIgBAAIgDABIgCABQgQAaANAWIAAAAIgUgDQABgTAAgTIACgBIAPgMIAAgBIADgDIABAAIAKgJIAAgBIAAAAIgCABIAAAAQgWAFgMAQIAAACQgBAKgEAHQAAAIACAFQACAFADAEIAAAAIABACIAAAAIABAAIgNAEgAhkBLQAAgFgEgRQAEgNAJgIIABAAIABgBIAAAAIAAgCIAFgEIAAgBIABAAIAIgKIABgBIgBgBIABAAIABAAIACACIACACIABABQADgEADABQAEABAEAGIgFgLIgBgCQgDgIAFAAIABAAIABAAQAAAKACAEQACADAFgCIgCAAIgBgGIAAgIQgBgMAFgQIAAgCQAqgoBFALIACAAQASAKAHAXIABAEIAAAEIACABIABABIAAADQgDAKgHAFIAAACIAAACQgQAPgRAOIgDABQgVAIgaADIgBAAIAAAAIAAgBQgVgPgNgZIgBAAQANAggVAEQgIgCgEgFQgEgEgDgBQgFgCgDAHQgCAHgEAFIgBABIgCACIgDACIACgIQADgOgGAAIAAAAIgGADIAAACIAAAAQACAFgEAAQAAARABARIAAAAgAh8BIgAirAwIABgVIAAAAIgBgPIAAgCQAGgSAUgIIAAgBQAYgBARADIADAAIAMAGIAEACIAAAAIgNAAIgCAAIgjAAIAAABQgOADgIAGIAAACQgEAKgDAMIADAOIAAACQAAABABAAQAAAAABAAQAAAAAAAAQABAAAAAAIADgEQACgGABgOQAAgFADgFQAKgNAcADQgJAIgUALIgCAAQgDANgEAKIAAABIgBAAIgDAFIgCAEIgCAAIAAABgABZAMQAHgJAEgKIABgDIAGgQIABgBIABAHIABABQAHAKgDAQQgDAPgHAAQgGAAgJgKgACjgPQgHgTgVgEIgDgBIACAAIABAAIACgCIACAAQAWgDAJAKIABAAIAAABQgEAOACACIgGACIAAAAgACjgwIgCAAIg6ADIAAgBQALgIAPgFIAAgBQAdgFALAOIABAAQADAIgDAAQgCAAgFgFgAhDg6IABAAIAEgEIABgBQATgBAOAFIABAAIAAAAIAAABIgCABQgHABgWAAIgHABgAgag9IgKgFIgBgBQgTgCgMAHIgCgFQAEgBAHgEQAGgDAHAAQAQAAAKAFQAEACADADQgCAFgGAAIgFgBg");
	this.shape_14.setTransform(40.3,-28.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C6FFFF").s().p("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AJAGIADABIACABQAKAEAHgJIACABQANATgIAWIgCAGIgCAAQgQAAgSgCIgYgGIgCABQgGAGgJAFIAAANIAAACIABBkIAAAPQABBPAFBQIABArQAIAeAOAZIACABQACAHAGAFIADgJIABgBIADACQAIADAEgEQACADAEACQAIADAEgGIADACQADAAADgBQAKgDgEgKIgBgIIAAAAQAFAAACgEQAFgHgDgGIAAgBQAAgFgEgFIAAgCIgFgQIAAAAQgNgvgDg6IAAgDIAAgYQApA6AhBDIABAAIAFALIAAABIAAACIAAAAIABACIAFAIIABAAIAKAVIAAABIAAACIADAKIADARIgBAAIAAAEIgEADIgBABIgKAGQgJAOgQAHQACAHgDACQg8AuhAApIAAADQgUADANADQALAEgNAFIABADQgUAcgXAaQgcAgghAcIAAACIAAADIgDAAQASAsAsAUIACABIAbALQAoAjAvAbIACABIA+A8IgBABQghgKgkgBIgBABQgvAFgvAIIgBABIgCACQhVAZhXgYQgCgEgEgCQgkgRgoALIgDACIgKAHIgIAGQgGAGgHADgAIVDDIACgBIgCAAIAAABgAHzC3IAAgBIgBAAgAIaCtIAAAAIAEAAIAAAAIgEAAgAHzCsIAFAAIAAAAIgFAAgACzLRIAAABIhrADQAzgaAxgeIAAgBQArgVAigdIACgBQgEAVgKAaIAAACIgBABQgSAcgTAaIAAACIgCAAIgCACIgQgEgAtVJjQgQgdgegOQgegPgZgUIARgIIAAgBIBTgtQAFgDADADQAUgIAOgOIAdgaQAwBDBugJQAOgBAPgDQAQgFANgHQAFARAPAHQAAACADADIAFAAIAYgHIATgHQADgCACgDIAAgBIADABIACAAQAbATAYAWIACAAIAAAmIAAADQBIBFBEBJIgDACIiagBQAAAAAAABQAAAAAAAAQAAAAgBAAQAAABgBAAQihAEieAAQgsgxgmg2gAD5D/IBFgwIABgCQA1ANASghIABgCIAAgCQAEAAgBgFIABAAIAAgDIACAEIAAAEIAAANQgBAKADAJIACAEIAAACIgBAAIAAABQgmAOgpAJIgCABQgdALggAAIgJAAgApYCiIgBAAIAAgDQgahhglhUIgJgTQAqAHAmAMQAhALAfANIACABQAqAJAlAOIAZALIACAAIBZgTIACAAQgvAxg6AoQgFADgKgBQgJgUgCgcIACgHQhLgBgbA8IgCAAIAAARIAAADQgKAYgaAHg");
	this.shape_15.setTransform(-6.5,-15.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00CC33").s().p("A0XDXIAAl7IAJAAIACABIAKABIABAAIADgEQABgEAEgDIAHgFIAEgEIAGgCQAkgPAlAQIAIAEQBZAbBZgZIAAAAIACgCQBSgSBPAGIABgBIABgBIAeAfIACAAIAAADQgIAogaAWIgCABQgSAHgQAJIgCAAQgOgBgKADIAAADIgDAAIg5AAIgBgCQgQgMgRAJQgBAKACADIAAABQAAADACADQAFAHAHgEQgEACgEAAIAEADQACACAEABQAHADADgDIABABQACADAEAAIABAIIABADQACADAEABQAAAAAAAAQAAABAAAAQABAAABAAQABAAABgBIgBADIgCACQAMAMAUACIACABQAMgDAJgGIABgBQA/ACAngiQAGgFAMAAQAyADA3gDIADgBQAHgKAAgRIAAgCIgXgcQAAgBAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgCgBQgugpgpguQCgANCjgIQBIgEBIAGQAHAAAEgIIgDgFIgCgCIADgCIAOAQQAZAcANAoIAAACQADAbgIAQQAGAqAzgRQALgEAQABIANACQARADAPAFQAYAJASAOIACAAQAeAEASgIIACAAQARATAUgHIACAAQAVgVgGglIAAgCQAXAGAdABIADAAQAQgKAWgCIADAAQAEgJAKgEIAAgCQA8gCAjAWQANAIATABQANAMAVgHIACAAIADAAQAeAEAKgQIACAAQAHgdgcAFQgFgBgDgBQgOgIgfADIgVgEQghgGgNgYIAFgGQAWgZAVgbIAAABQAdACAdABQAIAAAGgEIAGgCQCRgOCVAKQANABAMgBIACgBIAAgBIAJAAIAAAcIAAACQAGANAHALIACAAIAAACIADAEQAQASARARIgDAAQgzAFgyAHIAAABQgTAFgJANIAAADIgDAAQABAXATgFIAJAAIAWABQALAQAdADIACADQAEAJAQgCQAzARBHgMIADgBQAqAVA/ABIADAAIAhAFQAOADAEgHIACgIIATABIAAgEQAWgDAmAAIAAgBIAFAAQAEAAADgDQALgMAIAHQAIgMgPgOQgegdg2gFIAJgFQAXgSANgbIACgBIAOgKQASgPAKgWIgBgCQAAgLgDgIIAEgBQAlAEAlACIABABIACABQAcAAAaADQATADARADQAOADAMAFQAMAFAJgGIADAAIAAGRgAhohyQgggMgcgTIgBgCQgZgdgWgfIAAgBIADgCIBdAFIAiACIACAAQAjAFAggCIguAdIAAACIgCABQgeAKgZAQIAAAHIAAACQAFAJAJAEQAKAEAOABQAXABAcgCQAIAIANAFIAAABQgFAEgEAAQgwgCgpgOgABih5IgYAAIgCAAQgagMgjgFIAAgBQgLgHgIgLQAMgHARgGIAAgBIAmgSIAHgEQA6ADA6ABQAFAAAEgCQgVAVgWATIgRANIgCABQgQAGgNAKIgCAAg");
	this.shape_16.setTransform(-6.5,76.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AO8KeIghgFIgDAAQg/AAgqgVIgDAAQhHANgzgSQgQACgEgJIgCgDQgdgCgLgRIgWAAIgJAAQgTAEgBgXIADAAIAAgCQAJgNATgFIAAgCQAygHAzgEIADgBQgRgQgQgSIgDgEIAAgCIgCgBQgHgLgGgMIAAgDIAAgcIAAgBQAPgdAhgMIAAgCQBKADAoAlIABABIgGgWQgGgBABgHIAAgGQgKgFgDgLQgFgMAAgNQgKAAgCgJIgBgCIgBgGQAAgJACgIIABgBIABAAIABAAQADACACACIgBAKIAAABQAAADABADIAAACIABABIABABIABAAIABAAQAEACAEAAIABACIABACQAAAJACAJIAAACIAAABIACAFIABACIAIAIIAEAFIAAAAIAAAAIABADQABAFgCAEQAGAPADASIABACQgHATgKAPIAAACQgJAGgHAHIgCABIgBABIgVgSIgRgRIgJgJIAAAAQgNgPgIgNQASANANASQAOASAXAIIAAABIAAAAQAOgEAFgQQgJgSgUgSQgPgOgCAHIgCgBQgQgRglADIAAACQgjAJgLAhIAAATIAAACQAGAJAEALIAAACIAHALQANASASAMIAAACQATACAPAFIACAAQAfABALgTQAEgHACgIQADgFADgBQACAAgDAGQgLATgBAVIAAADIgCAEQAIgCAHgGIABgIQAAgHAHgDQAVgBgBAWIAAAWQAAAQgQACIgfACQgIgKACgLQgGAGgGAFQgKgEgLABQgpAAgfAKQAHAFgFAPQAAAEAGgEQAJgFAHAEQAOADAIAFQAIAFANgDIAAACIACADQAegEAcgFIACgBIADAAIACAAIAAgCQARgPAOgTIAAgCQgEgSATgSQAKgKgNgCQADgMAJgNIAFgIIAaggQgFAXgLARQgHAKgKAIIAAACQAHAagXASQAAAAgBABQAAAAAAAAQAAAAAAAAQAAABAAAAQABAbgXAPQgEADAEAFQAoASA4ABIADAAQASgEAJADQANAEAFgDIAAgFQgQgPAcAGIADAAQgGgJgHgHIgCgBIgCAAQgtAFgZgPIAAgCIAAgKQAkgfAPgpIAAAAIABgDIABgDIgEABIgCADQgIAPgNALIgIAGQADAIgFAHQgDAEgFADQgYAAAHgYQADgKACgMQACgLAMgGQAFgCACgEIAEgGQABgGAEgEQADgDAE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WgnQAWASALAeIAAACQA0APAyAQIA/AWQAgALAjAIIAIACIAXAEQAHACALgCQBJgLAygkQAOgJAMgMQATgSAWgQIgDABQgnANgvAGQgpARgyAKQgVAEgTgEIgFgCQhSgYhNghIgngSQgkgRgmgKQgVgGgWgEQgLACgGAHQgaAfgNghIAAgCQgHgMgFgOIgCAAQghABgPgQQANgDANAJIAAABQAqAEAcgKIACgBIABgBQAWgMAJgZIAAgDQgEgigOgYIgBgCQgHgKgIgJQgNgNgJAGIgBAAQgOAaADgTIACAAQAOgagUgMQgRABgFAPQgGAVABgSIABgFIAAgGQgEgSgGAYQgLgHAJgLIACgDIgMgUQAWANANAJIAFAAIAIAAQASACABAUIAAACQAmAYASAtIABABIAAAfIAAACQgLAYgUAOIgCABIgBABQgPALgbAAQABALAFAIIABACIABAEQAGARALgIQAOgIALgMQAzADAjARQArAWAuASICcA6QBSgLBGgVQAjgKAggLIgMgiIAAgCQAbAAAjgDIACAAQARgNAVgJQgDAHAEAIQAFACAAgEIAAgDIAAgCIACgCIACAAIAAgDIAAgCQAHgDAHgCQANgCAOAGIADABIACgCIAAAAIAIgHIAGgGIAAAAIAMgJIAIgHIACAAIAAgDIAdgOIADAAIAGgCIAAgBIAKgCQAPgDAOADIADAAIABAAQAGgSACgWIAAgKIgCAAIgNABIgBAAQgOABgNACIgCABIgBAAIgCAAIAAAAIgIACIgBAAIgEABIAAAAQgbAHgZALIAAABIgOAGIgBAAIgCABIgCABIgBAAIgEACQgdANgYARQAIAHADAIQADAJgEAJQgFgUgOgMIAAgBQASgMAOgMIgEAAQgbgJAXgUIAHgFQAYgHgHAYIAAACQACAMAWgOIACAAIAAgBQANgEgNgRQALgZASAJIgBABQgEAEgHgBQgRAZAXgVIABgBQANgDgKAIIgBACQAGAPAWgJQAGgDAEgBIAEAAIAAAAIADAAIAFgBIADgCQACgCgBgEIgCgBQgDgCgIAEQgDACgFgEIgGgEQALgcASALIAEADIABAAQABABAAABQABABAAAAQAAABAAAAQgBABgBAAIgDACIABACQAFASAagJQALgDAFAEQAFAggNAaIAAABIgCACQAAAAAAABQAAAAgBAAQgBAAAAAAQgBAAgBAAIgFAAIAAACQgFAOgTABQgDAAgCgCIgCgCQAKADAMgLIAEgBQgRABgQgFQgDAEgFACIgDABQAEAVgWAIIgBACQgQAHABgCIABgCQAGgVgOAPIgBACQgCgBgDABIgEADIgDADIAAAAIABAFIABAAQAIACAGACQAUAIgLAWIABAAIACAAQANAJgKARQgHAKgKgEIgFgBQACANgVABQgBAEgGgBIgFAAQAFAGAAASIgCAAQgQALgegEIgBgBQgPgGgIgNIgBgCIgEgHQABAAAAgBQAAAAAAAAQABgBAAAAQAAAAAAAAQAfABgJgNIgCAAQgXAAgNAVIAAACQAJAAACABQABABAAAAQAAABAAAAQAAABgBAAQAAABgBABIgBAAQgQgCgIAHIgWASQhaBMhQBVIAAAFIAAADIARALIACABQATgDAPgDIAAABQgEAagJAVIgBABQgEAJgHAHQgnAkgxAbIAAADIgTArIAAACIAAADQACAGgDABIgBAAIAAABQAaArAtAYIABACQgJAOgMAKIgBACQA+BpBIBfIAAABQAYAoAbAlIAAAAQAWAgAZAdIABACQAcATAgALQApAOAwACQAEAAAFgDIAAgBQgNgFgIgJQgcACgXgBQgOAAgKgEQgJgFgFgIIAAgDIAAgHQAZgQAegKIACAAIAAgDIAugcQggACgjgFIgCgBIgigBIhdgFIABgCIAAgBIBcACIAqABIAaABIApAGIALgIQAdgSAagTQAkgbAggfQAggeApgWQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBIgCgBQhNg8g6hOIgBgBIgEgGQgNgXgUgQIgBgCQgKgZAEgmIAKgoIACgBIAAgCIAAgCQAMgcAQgaQAKgQAKgOIACgBIAAgCIAAgDQA9hCBPgwIACgBIAAgCQAmgUAogRIABgCQApgCAdAJIAMAFIACAAIAEgBIABgBIAAgCQAIgFAGgJIAFgKQAAgBAAgBQAAgBAAAAQgBgBAAAAQAAAAAAgBIgGgCQgMgGgHgMIAAAAIgDgHIgBAAIgCgSIAAgBQgCgQAAgRQAEAAgBgFIAAgBIAAgCIAFgCIABAAQAFAAgCAOIgCAHIACgCIACgCIABgBQAEgFADgGQADgHAFACQADABAEAEQAEAEAHADQAWgFgNgfIABAAQAMAZAXAOIABABIAAABIAAAAQAbgDAVgJIACAAQARgOAQgQIABgBIAAgDQAGgGADgLIAAgCIAAgCIgCgBIgBgDIgBgEQgGgXgSgKIgDAAQhHgMgqApIAAACQgEAQAAANIABAIIABAGIABAAQgEADgDgEQgCgDABgKIgCAAIgBAAQgFAAADAIIABACIAGALQgFgGgDgCQgEgBgCAFIgCgBIgCgCIgBgCIgCAAIAAAAIAAAAIgBABIgIAKIAAABIgBAAIgFAFIAAACIAAAAIgBAAIgBABQgIAIgEANQADARAAAFQAAAAAAABQAAAAAAABQAAAAAAAAQgBAAAAAAIgCAAIgBgCIAAgBQgNgWAQgaIACAAIAEgBIABgBQAFgCADgDIAAgBIAAAAIABgDQABgCgCgEIAAAAIAAgBIgBAAIgEgBIAAAAIAAgBIAAAAIgBAAIgBAAIgBAAQgSgDgSAQIAAACIAAADIgBAAIgBABIgBABIAAABIgBAAQgHAIgCAJIAAABIgBADQAAAIADAJIAAAAIAEAJIAAABQgLgJgIgNIAAgCIABAAIADgDIADgFIAAgBIAAAAQAFgKACgNIADgBQAUgKAJgLQgcgCgKAPQgEAFAAAEQgBAPgCAFIgCAEQgBAAAAABQAAAAgBAAQAAAAgBgBQAAAAgBAAIAAgCIgCgPQACgMAFgKIAAgCQAIgHANgEIABgBIAiAAIACAAIANAAIABAAIgEgBIgNgGIgCAAQgSgEgXACIAAABQgUAHgGAUIAAADIAAAOIAAABIAAAVIgBgCQgJgOACgZQAJgWAUgLIADgBQAdgCAQAJIADABQALACAGAGIAFAFIAAAAIACABIACAAIAFAAIABAAQAFgBADgCIADgEIgBAAIACgEIgBAEIABgBIABgEIAAgCQgBgeAXgEIgBgBQgQgGgRAFQAAAAAAgBQgBAAAAgBQAAAAABAAQAAAAAAgBIAHgBQAXAAAHgBIACAAIgBgCIAAAAIgBAAQgNgEgTABIgCABIgEADIAAABQgHAFABgFIABgCIAEgDQALgGAUABIABACIAJAFQAKADAEgHQgEgDgEgDQgKgFgQABQgHAAgFADQgHAEgEAAQgFAAAAgFQAOgJAaACIADAAQAGAGAFACQAMAGAKgDIAAgBQADgVgHgIIACABIAAABQAOANADgGQAAAAABAAQAAAAAAAAQAAABAAAAQABABAAABIAAAFQgCASAigDQANgBAIAHIACACQAFAFAHADIAFACQAOgBATgQIABgCQATgEARAEIACAAQAVAOgCAZIAAACQgJALgCgBQgCgCAFgPIAAAAIgBAAQgJgKgWACIgDABIgCABIAAAAIgDABIAEAAQAUAEAHATIAAABIADAKIAAABQgKADAAgQIAAgCQgKgLgQABIgLACIgBAAIAGADIABABIABAAQAUAOABAeIAAACQgQACAEgYIgBgEQgDgOgLAEQADAFgBAEQgGAmAQAQIABACQAJAbgTAJIAAACIAJAMIAKANIAAACIAAADQAAATgCAQIgCABQgOAYgaAIIgBAAQgNAFgOADQgFABgFAAIgCAtIAAACQgNAPAJAHQgPAAgPADIgGAAIAEgBIAAgCQAHgdAHgpIgCAAQgYAGgTgLIgDAAIgCAAIAAACIgCADIAIAQIABABQABAbgEAXIgCAAQABAJAEADIgFADIgBAGIgDABIAAADIAAAAIgEAAIgBABIAAAAIAAABIgBABIAAABIgGAFIgBACIgJApIgCABQgIAEgHAHIgCAAIgYAHIgBACQhVAYhZALIgCgBQgFgGACgMQASgxAagrIABAAIAAgCIAAgFQAXgjAcgdIACgBQgJASgMAQIAAABIAAABIABgBQAbgOARgYIAAgCIABgCQAQgWAHgeIAAgBIAAAAIgCAAQhJgDgtAlIAAAAIgCAAIgdATQABAEADACIABABQAUAdATgkQADgEAGgBIgnA3IgCAAIgBACQgqA1gYBGIAAADQACAMgFAHIAAAWIAAACQAGAaAhgLIACgBIAAgCQBogUBbghIACAAIANgEIASgHIADgBQARAQAagLIACAAIALgQIAAABIAFAGIACABQgLAHgJALIgDAAQgLADgRgBIAAABQATAEACATIAAACQgGAVgegBQgBAJgEAGIAAACQANgVALAUQAAAIgCAFQgCAEgEADQgEACgCgCQgOgQgDASIAAACQgHAbgFAdIAAAwIAAACQAKBCA6ARIAHACQAmAIAfgRQAKgGAMgBQASgBABgGQgBgUgJgKIgCgBQgKglAAgvIAAgCQgRAcgvgCIgDAAQgWgJACgWIgBAAQgQgCgBgPIAAgCIAOAIIAAABQAfAHgCgaIAAAAIABgBQACgEgCgCIA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AAgCIgBgBIAAgBIgBgBIAAgPQgBACgDACgAHdBKIAAACIACADIABABIAEADIAAAAIAAABIAAgGIAAgCQgCgHgBgIQgDAGgBAHgAGNAsIABACQATAVAXgVIAAgCQgLgMgLAAQgKAAgLAMgAHeAhIgBABIAAALIABAEIABABIAAABIABABIAAgVIgCACgABVhDIgCAAIgBACQgPASgLAWQgLAVgIAYIAAACIAQALIABABIACABQAgAKAoABIADAAQAQhfAyg+IABgBQgLgSgOgPIgBgBQgxAigmAtgAD2hGQgSAjgQAkIAAACIAAADQgCALAHAAIADABIACgBIBWg5IAAgCQgbgTgjgLIAAACgAE7gnIhFAvQAlACAhgMIACAAQApgKAmgNIAAgBIABAAIAAgCIgCgEQgDgJABgKIAAgOIAAgDIgCgEIAAADIgBAAQABAFgEAAIAAACIgBACQgSAhg1gNIgBABgAGviGIgCABQgRATgMAXIgBAPIABADIAAAeQAAAHAEAGQAGAFAKgPIABAAQACgiASgQIACgBQADgQAAgUIACAAIAAAAQAAgLgFgJIgBAAQgDAAgIANgAFJgvIABACIAaAAIADAAQAQgEAGgPIACAAIAAgDIAAgCQATgwAggkIACAAIAAgDQAHgDABgJIgBAAIgCABQgTAbgbASIgDAAQgTABgMgGIAAgCQgHgKACgTQAJgPABgVIAAgCIABgGQAAgLgDAEQgSAZgQAaIgBACQgSAigkAFIgBACQgNAQgKAUQAaALAYAOIAAACIAFAAQAOAAAJAFgAqbkNQAlBWAaBhIAAACIABABIABACQAagHAKgYIAAgDIAAgRIACAAQAbg8BLAAIgCAIQACAbAJAVQAKABAFgEQA6gnAvgyIgCABIhZATIgCgBIgZgKQglgOgqgJIgCgBQgfgPghgLQgmgMgqgHIAJATgAHrhsQABAEAFgDQARgIADgaQAEgggJgXIgBAAQgDA0gRAkgAmrhsIADgCgAC4iZQACAWAOAKIAAABIACAAQARgRgVgTIgCAAQgCgDgCAAQgEAAgEAGgAGpkNQAHABABAHQgFAAgCACQgDACAAACIgCAEQgFALgHAKQgOAUgTAOIgBACQgDAYgIATIAAAPIAAACQAXAPAWgTQAWgTAAgSQAMgEgEgIIAEABQAFABAAgEIAAgDQAXAUAdgLIAAgBQgBgLAGgFQAFgEAMACIACABIAAAUIAAABIABAAQAPgDAOgEIAGgDIABAAQAcgOAMgcIAAgDQABgJgCgHQgEgMgKgGIgEgCIAAgBIgBABIgDACQgMALgWACIgEAAQALgEAJgJQAFgFAFgGIAAgCIgBAAQgcAAgRALIAAABIgDABIgIADIAAAAQgTAFgMgIQgIgEgFgKIgBAAIgBgTQADgEABgGIABgCIgCgBQgEgBgCgCQgTgWgOATQAAADACACIACADQgHgCgQgJIgDABQgKABgIAGIgFAEQgDAEgDAGIAAAIQAAAKACAGIABACIAGAHIAEAEQAGAFALgFQAJgDAFgBIABAAIAAAAgAmeiHIAJgIgAHaksIAAAMIAAADQAfAdAcgjIABgBQAEgegXgCIgDAAIgCABIgdAOIABACIASATIACAAQAUgRgHAPQgEAFgFACQgIADgDgFQgIgQgJAAIgEABgAiKkxQAHANAOAHIADAAQATABAOgEIABgCQAEgNgOgEIAAgBQgRAGgfgFIAAACgAI/kdIACgBIAKgEQAOgSgQgQIgBgCQgagBgKAPIgCAAIgBACIgBABIAAACQAFAeAGgYQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAABABQAKALAHgOQAIAHgIAMgAhkk+IAAACIAiAAIACAAIAFgEIACgBQgTgXgwAEIgBAAQgBADgFgBQAJAQAWAEgAITlQQAAAEgEABQAHAPACgGQAEgVAIAKQgBALAFgCQAOgGALgIIAAgCQgagQgRASIgCAAIgBACgAjKlLIABAAQAMgDAGgIIABgBIAAgCIAAgFQAnAJAVgaIAAgCIAAgDQgGgQgPATIgCAAQgdAIgngBQADARAIAOgAhkllQAcAYAngFIADgCQAJgHgMgFIgCgBIgdgLIgCAAIgiAHgAI7mOIgGARIAAACQgEANgIAJQAUAWAGgcQADgRgHgLIgCAAIgBgHIgBAAgAhnmEQAAAEgEAAQAjAUAngJIAAgBQAAgOgTADIAAgBIgCAAIgwgFIgBADgAJzmjQANALgFgOIgCgBQgKgNgdAEIAAACQgPAFgLAIIAAABIA5gEIACABgAu/J1IAFAAQgDADgBAEIAAABIgBgIgAP1J0IgCgBQgGgGACgJQACgFAFgBIAAgBQAWgEAQALQAEADgBAFQgCAGgFACIgjAAgABRI7IACAAIAAAAIgCAAgALPIOIAAgSQgPgMADgVQABgHAFgHIAEgEQAVACAKAOQAEAFACAGIABACIAAABQAMAGAHAIQAGAJACAMQACASgRAEIgOABQgHAAgGAEQgWAAABgXgAP3IFQgFgIAEgIQAGgNAMgJIgBgBQgBgKAJgEIAAgBIAUADQAEABABADQAGARgKANQgCACgEACIgGAHQgFAIgJADIgHACQgIAAgEgHgA0PH/IgCgCQABgGAFgCQAHgEAGgFIAIgGIAKgHIADgCQAogLAkARQAEACACADQBXAZBVgZIACgCIABgBQAvgJAvgFIABAAQAkABAhAJIgBABQhPgFhSASIgCABIAAABQhZAYhZgbIgIgDQglgRgkAPIgGADIgEAEIgHAFQgEACgBAEIgDAEIgBABIgKgBgAT9HpQgMgFgOgDQgRgEgTgCQgagDgcAAIgCgCIgBgBQglgCglgDIAAgCIABgBIBNABIACABIABABQAbgBAaADIAVADQAdAGAcAKQABAAAAABQAAAAAAAAQAAAAAAABQABAAAAABQgFADgGAAQgEAAgGgCgAHTEFIAAgBQgNgFgDgOIgBAAIAAgYIAAgDQAkABAMAjIAAADQgFAKgNAAIgNgCgAHMDuQgCAFACACIAEAEQAdASgCgdIgCAAQgHgIgHAAQgIAAgHAIgAqeBvQgXgegdgXQAPgOARALIACABIAAgCQAPgBAMgEIACAAIAEgEIAKgIIAugjIAIAAQggAUgdAYIAAADQAegMAZgTQANgKgGgFIAAgBIAYAAIAJAAIARgCIgIAFIgIAKIhGA8IAAgCIAAgDIABgBIBFg9IgCAAQgmAZglAcIABgCQAUgQARgQIAHgHIANgOIgCAAQguAng1AeIgBACIgBABQAEAPAIgIIACAAIABACQACACgIADQAPAKgOAIIgBABIgBAAgApMAUIAWgSgAp5BoIAAgIIAXgQQAVgOAXgRQAggXAQgaIACABIAGAHIgEADIgHAFQg6Arg2AvIAAgCgAHCBoIAAgBIAAABIAAABIAAgBgAp5BcIADAAIACgCIASgKIgXAQIAAgEgApyBWQgHgBADgKIACAAQAFAKAOgPQAognAsghQgGAIgJAJQgNAPgSAOIgCACIg1ApgAo9AuIAhgfgAphAHIAAgBIAAAAIABgDIAAAAIAHgBIACAAIguAjIAkgegAuuADIgCAAQgOgXgIgeIgBgsQgFhPgBhRIAAgPIgBhkIAAgDIAAgMQAJgFAGgGIACgBIAYAFQASADAQAAIACAAIACgGQAIgWgNgUIgCAAQgHAJgKgEIgCgBIgDgCQgJgFgHgGIgCgBQgJgRgIgUIgCgEIgDgFIgBAAQgLgYgRgQIAAgDQA/g1AghTIABgBQAWAYAJAkIAAACIAAABIAAgBIgPgZIgNgbIAAgCQgHAFgDAIQgCAIAAAKIAAACIABABQAHAUAIAGIACAAQgCgWgMgYIACAAIAKAUIAMAXIAAACQgRAYgVAUIgBACIgGAFQgBATAIgIIgBADQgDAHACANQAJALgBAIQgBAFgFADIAAgBIgCAAQgWgBgHANIAAACQADAdAVAMIACABQANAEAJgKIABABQAJALADALQACAHgBAIQAAALgFALQgWAJgZgLQgagMgGAdQgBAzABAxIAAAPQACBdAJBXQAEAlALAgQAAAJAMACIAAABIgDAJQgGgFgCgIgAvOojIAAADIAAACQASAaAEAbIAAACQAFgEAFgEIABAAQAGgDAHgDIACAAIAAgDQgLgagNgYIgBgDIgBgDQgRAAAOAVQAPAVgFARIgJgeQgGgRgIAAIgGABgAuwoqIAEAFIANASIADAAIACgCQABAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQgFgOgKgLIAAgBQAAgHgHAAQgGAGAFAIgAuppGQgEACABAEQACAJAHAGIAFAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgHgGgFIAAgBQgBgFgFAAIgBAAgAudpdQgEAHAFAIIADAFQAEAIAIABIACgBIAAgCQgCgIgGgHIAAgEQgCgIgHgBIgBACgAuWpmIABADQAFAMAIAKIAEAAQAFgDgDgFQgEgHgDgHQgCgJgIgBQgEACABAFgAqLAHIANAAIAAAAIgNAAgApXACIAAAAgAHNgzIABAAIAJABIgHACIgDgDgAHYhJIADAAIABgBIAAgBIABAAIABAAIAAABIgBABIgCAAIgDAAgAHehMIABAAIgBABIAAgBgAmkhdIAZgUIgXAWIgCgCgAmwhoIgBAAIADgBIgCABIAAAAgAmLhxIAAAAgAm1hzgAFRkpIAAgBIAAgBIgBgBQgDgDgBgFQgCgGAAgHQAEgIABgJIAAgCQALgRAWgFIABAAIABAAIABAAIgBAAIgKAJIAAABIgEADIAAAAIgPANIgBAAQAAAUgCATgAhrmkIAAgCQARgPAUgMIADgBIACgCIACgBIABAAIAOgHQAYgMAagHIAEgBIABAAIAHgCIAhgGIAAABQgRAEgPAEIgJADIgDABQgYAKgWAOIgCABQgCABABAFIAAADIgBACIgDAAIgDgFQgDgEgCAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBABAAAAIgCAGIgBAFIgBAJIgBAAQgHgdgIAiIAAACQgDAHgEgUQAAAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAABQgCADgEABQgBAOgDACIgBAAQgCAAgFgJgAtrnzIgBACQgDAGgDgFQAIgcAYAaQARARAgABQAWgOAKgaIACAAQgDAPgGALQgHALgKAHIgBABQg2AAgbgYgAuMoNQgDgCAAgEIABgKQAAgHAGgEQAJgHAKgCIANAAQABABABAAQAAABAAAAQAAABAAAAQgBABgBAAQgFACgFAAIgBAAQgMADgHAIIgBACQgCAHABAIIgBABIgBABIgCAAg");
	this.shape_17.setTransform(-6.2,8.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-138.4,-92.3,264,191.6);


// stage content:



(lib.pronoun_Scene6 = function(mode,startPosition,loop) {
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
		
		 window.open ("pronoun_Scene7.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("pronoun_Scene5.html","_self");
		}
		playSound("_7b");
	}
	this.frame_41 = function() {
		playSound("_7b");
	}
	this.frame_82 = function() {
		playSound("_7b");
	}
	this.frame_123 = function() {
		playSound("_7b");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(41).call(this.frame_41).wait(41).call(this.frame_82).wait(41).call(this.frame_123).wait(42));

	// actions
	this.btn_goBack = new lib.goNext();
	this.btn_goBack.setTransform(57.6,352.3,1,1,0,0,180);
	new cjs.ButtonHelper(this.btn_goBack, 0, 1, 2, false, new lib.goNext(), 3);

	this.btn_goNext = new lib.goNext();
	this.btn_goNext.setTransform(494,352.3);
	new cjs.ButtonHelper(this.btn_goNext, 0, 1, 2, false, new lib.goNext(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_goNext},{t:this.btn_goBack}]}).wait(165));

	// text
	this.instance_9 = new lib.texthesheit();
	this.instance_9.setTransform(274.9,182.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(165));

	// main
	this.instance_10 = new lib.Copyright("synched",0);
	this.instance_10.setTransform(275,389.5);

	this.btn_menu = new lib.skiptomenu();
	this.btn_menu.setTransform(514.1,20.3);
	new cjs.ButtonHelper(this.btn_menu, 0, 1, 2, false, new lib.skiptomenu(), 3);

	this.instance_11 = new lib.pronounheader();
	this.instance_11.setTransform(275,18);

	this.instance_12 = new lib.HESHEIT();
	this.instance_12.setTransform(285.4,173.8,1.427,1.427);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgRATQgXgCAIgRQACgFAEgEQAGgGAHgEQAWgBATAMQAMAHgIAKQgGAJgLACIgggBg");
	this.shape_18.setTransform(349,223);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.instance_12},{t:this.instance_11},{t:this.btn_menu},{t:this.instance_10}]}).wait(165));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(284.2,198.6,537.1,400.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;