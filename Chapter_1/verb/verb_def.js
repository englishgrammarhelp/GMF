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
		{src:"sounds/JingleVerb.mp3", id:"JingleVerb"},
		{src:"sounds/SEBoyJump.mp3", id:"SEBoyJump"},
		{src:"sounds/SECorrectAnswer.mp3", id:"SECorrectAnswer"},
		{src:"sounds/SEGirlJump.mp3", id:"SEGirlJump"},
		{src:"sounds/SEGirlsCheer.mp3", id:"SEGirlsCheer"},
		{src:"sounds/SERandom1.mp3", id:"SERandom1"},
		{src:"sounds/SERandom2.mp3", id:"SERandom2"},
		{src:"sounds/SERitaChopsMick.mp3", id:"SERitaChopsMick"},
		{src:"sounds/SERitaThrowsBob.mp3", id:"SERitaThrowsBob"},
		{src:"sounds/SESamKicksRita.mp3", id:"SESamKicksRita"},
		{src:"sounds/SEWrongAnswer.mp3", id:"SEWrongAnswer"},
		{src:"sounds/verbaverbshows.mp3", id:"verbaverbshows"},
		{src:"sounds/verbritachopsmick.mp3", id:"verbritachopsmick"},
		{src:"sounds/verbritathrowsbub.mp3", id:"verbritathrowsbub"},
		{src:"sounds/verbsamkicksrita.mp3", id:"verbsamkicksrita"},
		{src:"sounds/verbthegirlscheer.mp3", id:"verbthegirlscheer"}
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



(lib.VERBWORDSTILL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ah1DDQgLgKABgLIAAhKQgBglAFhBQAFhJABggQAAgYACgtQACgNAHgEQAigLAtAAQAqAAApAeQAvAkABAzQgBBCgyAjQAmAQATAUQASAUAAAXQAAAfggAcQgXAVgaAKQg3AWhZAAQgLAAgJgKgAhNBlIAAA0QBDgCAngRQASgGAQgPQAQgNAAgHQgBgMgggOQgYgMgWgGIgagEIgKABIgKAAQgOgBgPgCIgCA6gAhCiWIgBAsIgFBiIAmADQAlgDAYgVQAbgXgBgjQAAgYgbgUQgagVgbAAQgdAAgKACg");
	this.shape.setTransform(41.5,6.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AiADAQgIgIAAgLIgCg8IgCg8QAAgXAGgsQAFguAAgXQAAgNgDgaQgCgZAAgNQAAgPAIgLQAKgNARABIA9AFQAjAEAVANQBnA3AABOQAAAngjAcQgcAYgqAMQBPAqAnAvQAHAIAAAKQAAAKgIAIQgIAIgKAAQgKAAgIgIQhUhThlgdIACAyIABAyQAAALgHAIQgHAHgLAAQgLAAgHgHgAhQhxQACATAAAMQAAAUgEAeIgFAxIALAAIALAAQBBAAAegRQAPgGAMgMQANgPAAgKQAAgjgogeQgjgcgogFIgmgDg");
	this.shape_1.setTransform(8.1,7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AhuDDQgZgXAAhRIABgkIACgpQgDgGAAgHQAAgGAFgHQAFhKAAgjQAAgJgCgSQgDgSAAgKQAAgeAaAAQAKAAAIAHQAegIAbgEQAbgEAWAAQA+AAAlAPQARAHAAARQAAAKgHAIQgHAJgLAAIgIgBQgrgMgoAAQgUAAgXADQgZAEgcAIIACAaQAAAkgEA9IBtgKQAxgFALAAQALAAAIAHQAHAHAAAMQAAAVgXADIg8AFIh0ALIgBAiIgBAeQAAA4AIAKQAGAHAiAAIAugBIAvgBIAPgBIAPgCQAbAAAAAaQAAAWgWAEQgYAFhNAAQhPAAgWgVg");
	this.shape_2.setTransform(-24.2,6.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgtC5QgfhOgliPIgUhFQgPg1AAgQQAAgMAIgHQAHgHAKAAQAUAAAFAUIAKAtIAYBWQAYBcAYBFIABgEIBCi3IAWg+QAOgmAQgSQAJgKALAAQAKgBAJAIQAHAIAAALQAAAHgFAIQgPAYgKAaIgUA3IhEC2QgMAhgQAfQgGAPgPAAQgTAAgIgTg");
	this.shape_3.setTransform(-56.5,7.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.2,-33.2,136,76.5);


(lib.verbdesciptionblinkstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiqDFQgHgHAAgLIACggIABghIABguIABgwIgBgwIAAgzQAAgQgDggQgEgfAAgQQAAgMALgKQAKgJAMgBQAOABAUAdQA/BfAyA/QA7BIBHBEQABgLgBgWIAAgfQAAhugJhCIgHgbQgFgRAAgKQAAgdAbAAQAsAAABClIgCBSIAABUQAAANgEAcQgEAagXgBQgOAAgUgSQhnhiiEi2IgBA5IgBA5IABA/IABBAQAABEgagBQgOABgJgKg");
	this.shape.setTransform(166,7.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ah/CcQg1gtAAhIQAAhWA0hIQA6hQBVABQBTAAApAlQAqAnAABVQAABVgvBGQg3BRhVAAQhIABgxgsgAhZhVQgnA5AABDQAAAxAkAeQAjAdAzAAQA8ABAog/QAkg3AAhDQAAg+gcgYQgagXg9AAQg8AAgsA9g");
	this.shape_1.setTransform(124.4,7.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhuC7QgIgIAAgLQAAgLAIgIQAGgHAMAAQAQAAAmgFQADgVgBgaIgBgrQgCgaAAgRQAAg4AHhYIghABIghAAQgLAAgHgHQgIgHAAgMQAAgXAYgDQAVgCA5AAQAwAABMALQAXAEgBAYQAAALgIAIQgIAFgKAAQgQAAgYgDIgqgFQgFBKAABBIABAsIABAsQAAAYgCATIBQgBQALAAAHAIQAHAHAAALQAAALgHAIQgHAHgLAAIgqABIgrAAQgPAAghAFQgiAFgQAAQgMAAgGgHg");
	this.shape_2.setTransform(89.3,7.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgRC6QgIgHAAgMIABgLIACgLIgCgmIgCglQAAglgFg/QgHhIAAgfIgYABQg3AAgggIQgVgGAAgUQABgKAGgIQAHgJAMABIApAFQAaADAPAAIAugBIAtgBQAUAAAmADQAmADAUAAQAKAAAIAIQAHAHAAALQAAALgHAIQgIAHgKAAQgTAAgngDQgmgDgUAAIgSAAQABAkAGBOQAFBIABAoIABAbIACAbQAAASgFAMQgIARgOAAQgJAAgIgHg");
	this.shape_3.setTransform(59.6,7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhpCbQgjgnAAg1QAAhUBIhaQA8hMA8AAIAWABQAKABAHADQAJgNAPAAQARAAAFAXQAEAVAAAeQAAAKgGAIQgHAKgMAAQgRAAgIgTQgHgQgGgEQgFgDgVAAQglAAgrA5Qg9BLAABCQAAAhAVAXQAWAZAeAAQAYAAAbgOQAOgHAfgXQAOgKAIAAQALAAAHAIQAHAIAAAKQAAAMgJAIQhDA8hDAAQg1AAgkgpg");
	this.shape_4.setTransform(24.6,7.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ABYCDQgHgXgJg5QgbAEgqAJIhBAOQgNAhgeBAQgJAPgOAAQgJAAgJgIQgHgHAAgLQAAgMAmhRQgFgGAAgJQAAgVAZgFQAdg1AshHQA7hgAOAAQAVAAAHAcIAPBWIAnCuIAOAoQAHAUABAHQAAAMgJAHQgHAHgLAAQgXAAgRg8gAggASQAfgIA8gKIgUhhg");
	this.shape_5.setTransform(-11,7.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AhGCNQgngOAAgZQAAgLAIgHQAIgIAKAAQAIAAANAMQAGAGAVAEQARADALAAQAUAAAQgFQAXgHABgRQAAgigxgMIgYgGQghgIgPgJQgVgNABgcQAAg1AxgXQAQgHAfgJQAigKAOgGQAKgFANAAQALAAAHAHQAHAHgBALQAAAIAEAPQADAOAAAHQAAALgHAHQgHAIgLAAQgOAAgGgKQgDgHgDgUQgTAFgoANQgmAPgBAYQAIADAHACQA4AKAdATQApAYAAAyQAAAqgkAVQgdARgsAAQghAAgegLg");
	this.shape_6.setTransform(-58.6,12.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AA6COQgbgBgQhEQgFgWgFglIgHg3IgUAuIgnBpQgDAKgHAFQgHAPgRAAQgTABgShMQgJgogKhBIgGgmQgDgXAAgPQAAgLAIgHQAHgHALAAQATAAAFAVQADAPACAWIAEAlIAPBwQAchMAehmQAIgcAUAAQATAAAHAfQAHAeAKA+QAKA+AIAkIAThFIAgiJQAEgPASAAQALAAAIAHQAIAHAAAKIgDAMQgUBTggBmQgHAXgQAZQgJANgPAAIgBAAg");
	this.shape_7.setTransform(-88.2,13.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AhLBrQgigjgCg7QgBg3AegsQAkg0A9AAQAzAAAaAvQAVAlgBA1QAAA3gdAoQghAtgzAAQgrAAgfgggAgsgyQgRAcAAAjQAAAlAUAUQARARAXAAQAYAAATgTQAWgVABgkQAEhhg5AAQgjAAgVAkg");
	this.shape_8.setTransform(-120.3,13.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("ABEDAQgFgVgFgmQgFglAAgYIABgUIAAgUQAAgugXAAQgfAAgZAbQgNAPgXArQAABggIASQgHAQgPAAQgKAAgIgHQgIgHAAgLIACgLQACgGABgfIABglIABi5IABgqQAAgNgCgMQgCgLAAgNQAAgLAHgGQAHgIALAAQAVAAADAXQAEAYAAAUIgBA4IgCA3IABAXQAUgcAYgOQAWgOAbAAQAqAAAQAcQALATABAsIACAwIAFA1QAEAeAFAWIABAIQAAAKgIAHQgHAHgLAAQgSAAgGgTg");
	this.shape_9.setTransform(-148.1,6.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AhGCNQgngOAAgZQAAgLAIgHQAIgIAKAAQAIAAANAMQAFAGAWAEQARADALAAQAUAAAQgFQAYgHAAgRQgBgigvgMIgZgGQghgIgPgJQgVgNAAgcQAAg1AzgXQAPgHAfgJQAigKAOgGQALgFAMAAQALAAAHAHQAHAHAAALQAAAIADAPQADAOAAAHQAAALgHAHQgHAIgLAAQgOAAgGgKQgDgHgDgUQgTAFgoANQgnAPAAAYQAIADAHACQA4AKAdATQApAYAAAyQAAAqgkAVQgdARgsAAQghAAgegLg");
	this.shape_10.setTransform(-176.8,12.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-190.9,-33.2,382,76.5);


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


(lib.Scene3Yes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGBUQgEgGAAgEQAAgEADgDQADgCAEAAQACAAAFAFQAEAFAAAFQAAAEgDADQgDACgEAAQgCAAgFgFgAgGAnIgBgNIAAgNIAAgtIABgvQAAgJAHAAQAKAAAAAJIAAB2QAAAKgKAAQgHAAAAgKg");
	this.shape.setTransform(10.7,9.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgGBUQgEgGAAgEQAAgEADgDQADgCAEAAQACAAAFAFQAEAFAAAFQAAAEgDADQgDACgEAAQgCAAgFgFgAgGAnIgBgNIAAgNIAAgtIABgvQAAgJAHAAQAKAAAAAJIAAB2QAAAKgKAAQgHAAAAgKg");
	this.shape_1.setTransform(5.4,9.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgqBKQgUgJAAgQQAAgFADgDQADgDAEAAQAGAAAEAGQAFAIAFADQAJAGARAAQAPAAAOgHQASgJAAgQQAAgOgPgIQgNgHgRAAQgRAAgMgGQgPgIAAgQQAAgUAVgPQAVgPAUAAQALAAANADQARAFAAAHQAAAJgKAAIgPgCQgKgCgGAAQgPAAgMAIQgMAJAAALQAAAJAQAEQAGABAPABQAZACANAOQANAKAAASQAAAagXAPQgVANgZAAQgUAAgQgHg");
	this.shape_2.setTransform(-4.4,10.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AguBTQgKgKAAgiIAAgQIABgSIgBgFQAAgCACgCIACguIgBgMIgBgMQAAgMALAAQAEAAADADQANgEAMgBQALgCAIAAQAaAAAQAHQAHACAAAHQAAAFgDAEQgDADgEAAIgEgBQgSgFgRAAQgIAAgJACIgXAFIABALIgBApIAtgEIAZgDQAFABADADQADACAAAGQAAAHgKACIgZABIgwAFIAAAOIgBAOQAAAXAEAEQACADAPAAIASAAIAUgBIAGAAIAGgBQAMAAAAALQAAAJgJACQgLACgfAAQghAAgKgIg");
	this.shape_3.setTransform(-18.7,9.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgWBSQgDgDAAgFQAAgDAKgUIANgYQgTgZgGgMQgFgMgLgRIgSgcIgCgGQAAgEAEgDQADgEAEAAQAGAAADAFIAJANIAPAYQAIANAEALQAEAJAKANIAYg5IAMgYQADgHAHAAQAEAAAEADQADADAAAFQAAAFgGAKIgHAMIgSAuQgLAYgJATIgNAYIgFAMQgDAGgGAAQgEAAgEgDg");
	this.shape_4.setTransform(-33.3,10.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(0.1,1,1).p("ABrjOQgbgVgigSQgjgTgmgCQgogDgnAHQglAHgnAEQgiADggAIQgnAKghASQghARgdAYQgeAYgSAkQgQAjgJAjQgJAkAGAkQAGAlAMAjQAMAjAdAcQAbAaAjARQAZAMAaAKQAkAMAjAJQAlAKAmAEQAnAEAogDQAmgCAjgKQAhgJAcgSQAggUAcgWQAegXAjgJQAmgJAngBQAlAAAkAGQAmAGAmgKQAWgFAPgFQgigPghgSQgZgPgcgLQgigNgjgNQgigNgSggQgGgKgEgNQgLgkgJglQgJgkgXgdQgWgdgdgWg");
	this.shape_5.setTransform(-1.9,10.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiMEKQgmgEglgKQgjgJgkgMQgagKgZgMQgjgRgbgaQgdgcgMgjQgMgjgGglQgGgkAJgkQAJgjAQgjQASgkAegYQAdgYAhgRQAhgSAngKQAggIAigDQAngEAlgHQAngHAoADQAmACAjATQAiASAbAVQAdAWAWAdQAXAdAJAkQAJAlALAkQAEANAGAKQASAgAiANIBFAaQAcALAZAPQAhASAiAPIglAKQgmAKgmgGQgkgGglAAQgnABgmAJQgjAJgeAXQgcAWggAUQgcASghAJQgjAKgmACIggABQgYAAgXgCg");
	this.shape_6.setTransform(-1.9,10.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.1,-17.6,94.4,55.8);


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


(lib.fpb_rightOutFrame_up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Aj5D6IAAnzIHzAAIAAHzg");
	this.shape.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.fpb_rightInFrame_up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjEDFIAAmJIGJAAIAAGJg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39.5,39.5);


(lib.fpb_leftOutFrame_up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AjEDFIAAmJIGJAAIAAGJg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39.5,39.5);


(lib.fpb_leftInFrame_up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjEDFIAAmJIGJAAIAAGJg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39.5,39.5);


(lib.fpb_face_up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E8E8E8").s().p("AjEDFIAAmJIGJAAIAAGJg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39.5,39.5);


(lib.fpb_rightOutFrame_press = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AmjD6IAAnzINGAAIAAHzg");
	this.shape.setTransform(25,25,0.595,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.fpb_rightInFrame_press = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AjEDFIAAmJIGJAAIAAGJg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39.5,39.5);


(lib.fpb_leftOutFrame_press = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AjEDFIAAmJIGJAAIAAGJg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39.5,39.5);


(lib.fpb_leftInFrame_press = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AjEDFIAAmJIGJAAIAAGJg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39.5,39.5);


(lib.fpb_face_press = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E8E8E8").s().p("AjEDFIAAmJIGJAAIAAGJg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39.5,39.5);


(lib.fpb_rightOutFrame_over = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AmjD6IAAnzINGAAIAAHzg");
	this.shape.setTransform(25,25,0.595,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.fpb_rightInFrame_over = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjEDFIAAmJIGJAAIAAGJg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39.5,39.5);


(lib.fpb_leftOutFrame_over = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AjEDFIAAmJIGJAAIAAGJg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39.5,39.5);


(lib.fpb_leftInFrame_over = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjEDFIAAmJIGJAAIAAGJg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39.5,39.5);


(lib.fpb_face_over = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E8E8E8").s().p("AjEDFIAAmJIGJAAIAAGJg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39.5,39.5);


(lib.fpb_rightOutFrame_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Aj5D6IAAnzIHzAAIAAHzg");
	this.shape.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.fpb_rightInFrame_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjEDFIAAmJIGJAAIAAGJg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39.5,39.5);


(lib.fpb_leftOutFrame_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AjEDFIAAmJIGJAAIAAGJg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39.5,39.5);


(lib.fpb_leftInFrame_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjEDFIAAmJIGJAAIAAGJg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39.5,39.5);


(lib.fpb_face_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E8E8E8").s().p("AjEDFIAAmJIGJAAIAAGJg");
	this.shape.setTransform(19.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39.5,39.5);


(lib.boundingBox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnzHzIAAvmIPmAAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-50,100,100);


(lib.Copyright = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAbAHIgDgKIgEAKQgEAIgDAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQgBgBAAgBIgCgIIgBgHQgGASgCAAIgDgBIgBgCIABgCQADgFABgFIACgNQABAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAEAAACAJIADAKIACgGIADgJQADgEACAAQAAAAABAAQAAAAAAAAQABABAAAAQAAABAAAAIAEAKIACAGIACAIIABACIgBACIgCABQgDAAgDgJgAgTANIgBgIIAAgGIgBgHIgFAAIgGAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAgBAAgBQAAAAABgBQAAAAABgBQAAAAABAAIAFABIAEAAIAPAAIADgBIAEAAQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAABAAAAQAAABAAAAQAAAAAAABQAAAAgBAAIgOAAIAAAIIABAFIABAEIABAEIgCACIgCABQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAgBAAAAg");
	this.shape.setTransform(57.3,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgLAYQgGgDgBgEIABgDQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAIAEACIAEABIAFABIAFgBQADgBAAgDQABgGgJgCIgCgBIgIgDQgEAAAAgFQAAgKAIgEIAHgCIAIgDIAEgBIADABIABAEIABADIAAAEIgBADIgCABQgBAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAIgCgFIgJADQgFADgBAEIADABQAIACAFACQAHADAAAJQAAAHgGAEQgFADgGAAQgFAAgGgCg");
	this.shape_1.setTransform(51,3.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgLATQgHgGABgKQAAgGAFgKQAHgKAGAAQAEAAAGACQAGACABAEIgBADQgBAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgDgBIgBgBQgDgCgGAAQgCAAgFAIQgDAHAAADQAAAGADAEQAEADAEAAIAGgCIAEgCIACgBIAEABIABADQgBADgGADQgGADgEAAQgHAAgGgFg");
	this.shape_2.setTransform(46.6,3.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgDAfQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAAAIAAgJIAAgIIAAgKIAAgIQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABAAIACgCIACACQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABIAAAIIgBAKIAAAIIABAJQAAAAAAAAQAAABgBAAQAAABAAAAQAAAAgBAAIgBABIgDgBgAgBgXQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAAgBAAAAQABAAAAABQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQgBAAAAgBg");
	this.shape_3.setTransform(43.1,2.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAKAVIgBgJIgBgKIABgDIAAgDQAAgKgEAAQgFAAgCAFQgEAGgCAGIgBAEIAAAFIAAADIAAAFIgBADIgDABIgDgBIgBgDIAAgFIgBgDIABgMIAAgLIAAgEIAAgFIABgDIAEgBQAEAAAAAFIAAAGQAHgKAGAAQAHAAADAGQACAEAAAJIAAAEIAAACIABAKIABAJIgBADIgDABQgEAAgBgEg");
	this.shape_4.setTransform(39.5,3.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAOAWIgDgDIgIADIgDABQgKAAgFgFQgFgGAAgLQAAgJAIgHQAHgIAIAAQAEAAAFACQAGADAAADIgBACIgBAGIAAAIIABAIIACAIIACACIAAABIgBADIgDABIgDgCgAgGgKQgFAGAAAGQAAAGADAEQACAEAFgBQADAAADgBIAEgDIgBgPIAAgFIABgEIgDgBIgCgBQgFAAgFAFg");
	this.shape_5.setTransform(34.8,3.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AALAhIgBgLIgBgKIAAgDIAAgEQAAgGgEAAQgFAAgDADIgGAKQAAARgCACQAAABgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBgBAAAAIgBgDIABgBIAAgHIAAgHIAAgeIABgHIgBgEIAAgFQAAAAAAAAQAAgBAAAAQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQAEAAAAAEIABAIIAAAJIAAAKIAAAEQADgFAEgCQACgDAFAAQAHAAADAFQABADABAGIABAIIAAAJIACAJIAAACQAAABAAAAQAAAAAAABQgBAAAAAAQAAABAAAAIgDABQgEAAgBgDg");
	this.shape_6.setTransform(30,2.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgLATQgHgGABgKQAAgGAFgKQAHgKAGAAQAEAAAGACQAGACABAEIgBADQgBAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgDgBIgBgBQgDgCgGAAQgCAAgFAIQgDAHAAADQAAAGADAEQAEADAEAAIAGgCIAEgCIACgBIAEABIABADQgBADgGADQgGADgEAAQgHAAgGgFg");
	this.shape_7.setTransform(25,3.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgOASQgGgFAAgKQAAgKAFgHQAGgJAJAAQAGAAAFADQAGADAAAHQAAADgFAFIgKACIgOAIQACAEAEACQAEACACAAIAIgBQAFgCABgDQABAAAAAAQAAgBABAAQAAAAABAAQAAgBAAABIADAAIABADQAAAFgIADQgGAEgHAAQgIgBgGgFgAgIgKQgDAEgCAGIANgFQAGgDAEgDQgEgDgGgBQgEAAgEAFg");
	this.shape_8.setTransform(20.3,3.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAaAhIgCgHIgBgIQgCgHgEgWIgJAYIgDAJIgDAIQgBAEgCAAQgDAAgBgEIgCgEIgBgFIgIgfIgCAHIgFAWIgCAMQgBADgDABQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBgBAAAAIgBgEQAAgHADgLIAFgPIADgOQACgJABgEQACgDADAAQACABACADQACAEABAMQADAOAFAPQAFgPAEgSIACgHIACgGQABgDADAAQAEAAACAIIACAKQADASADAOIACAHIACAHQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAIgCABQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_9.setTransform(13.8,2.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgQAUIAAgdIAAgEIABgFQAAgEADAAQAFAAAAAHQAHgIAKAAQADAAACADQACACAAAGIAAADQgBAFgEAAQgEAAAAgEIAAgDIAAgEQgHABgCADQgEADgDAGIABAWQAAAEgFAAQgEAAAAgEg");
	this.shape_10.setTransform(5.1,3.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAOAWIgDgDIgIADIgDABQgKAAgFgFQgFgGAAgLQAAgJAIgHQAHgIAIAAQAEAAAFACQAGADAAADIgBACIgBAGIAAAIIABAIIACAIIACACIAAABIgBADIgDABIgDgCgAgGgKQgFAGAAAGQAAAGADAEQACAEAFgBQADAAADgBIAEgDIgBgPIAAgFIABgEIgDgBIgCgBQgFAAgFAFg");
	this.shape_11.setTransform(0.5,3.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgBAZQAAAAgBAAQAAgBAAAAQAAAAAAgBQgBAAAAgBIgBgPIgBgOQAAgFgBgCQgDABgDADIgFAGIgDADIAAAGIgBAHIABAEIAAADQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAAAIgDABQgFAAAAgLIAAgIIABgGIgBgHIAAgHQAAgKAFAAIACACQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAIAAADIgBACIAAAFQADgFAEgDQAFgEADAAQAGAAACAHQACgEADgBQAEgCAEAAQAHAAADAIIACAMIADAYIgBADIgDABQgEAAgBgEIgBgOIgCgLIgBgGQgCgEgCAAIgFADIgGAEIAAAHIABALIABALIgBADIgDACQAAAAAAAAQAAAAAAgBQAAAAAAAAQgBAAAAgBg");
	this.shape_12.setTransform(-5.2,3.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgBAZQAAAAgBAAQAAgBAAAAQAAAAAAgBQgBAAAAgBIgBgPIgBgOQABgFgCgCQgDABgDADIgFAGIgCADIgBAGIgBAHIABAEIABADQAAABgBAAQAAABAAAAQAAAAAAABQgBAAAAAAIgDABQgFAAAAgLIABgIIAAgGIAAgHIgBgHQAAgKAEAAIADACQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAIAAADIgBACIAAAFQADgFAEgDQAFgEADAAQAGAAABAHQADgEADgBQADgCAFAAQAHAAADAIIACAMIADAYIgCADIgCABQgEAAgBgEIgCgOIgBgLIgBgGQgCgEgCAAIgFADIgGAEIAAAHIABALIABALIgBADIgDACQAAAAAAAAQAAAAAAgBQAAAAAAAAQgBAAAAgBg");
	this.shape_13.setTransform(-12.2,3.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAOAWIgDgDIgIADIgDABQgKAAgFgFQgFgGAAgLQAAgJAIgHQAHgIAIAAQAEAAAFACQAGADAAADIgBACIgBAGIAAAIIABAIIACAIIACACIAAABIgBADIgDABIgDgCgAgGgKQgFAGAAAGQAAAGADAEQACAEAFgBQADAAADgBIAEgDIgBgPIAAgFIABgEIgDgBIgCgBQgFAAgFAFg");
	this.shape_14.setTransform(-18.1,3.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgQAUIAAgdIAAgEIABgFQAAgEADAAQAFAAAAAHQAHgIAKAAQADAAACADQACACAAAGIAAADQgBAFgEAAQgEAAAAgEIAAgDIAAgEQgHABgCADQgEADgDAGIABAWQAAAEgFAAQgEAAAAgEg");
	this.shape_15.setTransform(-22.4,3.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgVAdQgFgFgBgNQABgLAFgKQAFgMAIgIQAHgEAEAAQAEgBAGADQAIAEAAADIgBADIgEABIgCgBQgHgDgEAAQgDgBgCAEIgGAGQgKANAAAOQABAJACADQACADAIABQAGAAAGgGQAGgFACgJQgMAAgGAEIgDAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAIgBgDQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQAIgEAXABIADAAIABACQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQgDANgIAJQgJAHgKABQgKAAgGgHg");
	this.shape_16.setTransform(-27.7,2.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgNAhIgBgDIACgJIAKgWQAFgOAHgIIABgBIgVAAIgJgBQgFAAAAgEQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAIAQAAIAPABIAIAAQAFAAAAACQAAADgDADIgEAFQgGAGgFAKIgHAPIgCAKIgEAKQgBABAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgDgBg");
	this.shape_17.setTransform(-36.2,2.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AABAiIgHAAIgFgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQgBgEAIAAIACAAIABAAIAAgHIgBgGIABgPIABgRQgFAFgCAAIgDgBIgBgDQAAgDADgCIAHgGQACgEAEAAQAAAAABAAQAAABABAAQAAABAAAAQAAABAAABIAAADIAAADIAAAEIAAAEIgBAPIgBANIAAAGIABAGIAFAAQAAAAAAAAQABAAAAABQABAAAAAAQAAAAABABIAAADIAAADIgDABg");
	this.shape_18.setTransform(-41,2.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgSAXQgFgKAAgNQAAgMAGgKQAHgMAKAAQAMABAGAJQAGAJAAANQAAARgGAKQgGAJgMAAQgMABgGgMgAgLgRQgEAHAAAJQAAANAEAHQAEAHAHAAQAIABAEgMQADgHAAgJQAAgMgDgGQgEgGgIAAQgGAAgFAIg");
	this.shape_19.setTransform(-45.9,2.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AANAhIgDgBIgHAAIgFABIgFAAIgFAAIgBAAIgCAAQgDAAgBgDIAAgFQAAgKAGgHQACgDALgFIAHgHQADgEAAgGQAAgDgDgCQgDgCgDAAQgDAAgDADIgGAEIgDACQgFAAAAgEQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAFgFAEgCQAFgDAEAAQAHAAAFAEQAGAEAAAHIgBAIIgEAHQgDACgIAFQgGAFgDADQgFAFABAHIAJgBIALAAIAGABQAEABAAADQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAIgDABIgDAAg");
	this.shape_20.setTransform(-51.3,2.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgeAAQAAgKALgJQALgKALAAQAOAAAHAIQAHAIAAAMQAAAJgJAKQgKALgMAAIAAABQgeAAAAgegAgOgOQgIAGAAAIQAAAMAGAFQAGAEAKAAQAJAAAIgIQAGgIAAgGQAAgJgEgFQgFgGgIAAIgCAAQgKAAgIAHgAgKAJQgGgEAAgFQAAgGAIgFQAGgFAFAAQABAAAAABQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAABAAAAQgBABAAAAQgBAAgBAAIgCgBIgBAAQgDAAgEADQgEACAAADQAAACADABIAFABQABAAAEgCIAEgCIADAAIABADQAAAEgEACQgGADgDAAQgFAAgFgDg");
	this.shape_21.setTransform(-57.7,1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.3,-6.1,126.6,16.6);


(lib.LGlobalClass = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Symbol_36:0});

	// timeline functions:
	this.frame_0 = function() {
		/* // --------------VERSION CONTROL INFORMATION----------------------
		// 
		// Learning Interaction Global Toolbox Class
		// Developed by Dan Carr
		// Quality Assurance by Andrew Chemey
		// Last Modified for Flash MX: November 25, 2001
		// Copyright 2002 Macromedia Inc. All rights reserved.
		// 
		// 
		// ------------------END VERSION CONTROL--------------------------
		// 
		// Section 1: Start Contruction of the Global Class
		// 
		// 1-1: _global.LToolBox     // Initializes the Global Class
		// 
		// Section 2: Graphic Initialization Handling
		// 
		// 2-1: setTextField         // Sets a text field on the stage
		// 2-2: setCompLabel         // Sets the label of a component on the stage
		// 2-3: setCompCallBack      // Sets the callBack of a component on the stage
		// 2-4: setCompState         // Sets the active state of a component on the stage
		// 2-5: getCompLabel         // Returns the label of a component on the stage
		// 2-6: initControlButton    // Initializes the control button component
		// 
		// Section 3: Feedback Event Handling
		// 
		// 3-1: setFeedback          // Initializes feedback responses
		// 
		// Section 4: Navigation Event Handling
		// 
		// 4-1: setNavigation        // Handles navigation events at the end of a session
		// 
		// Section 5: Tracking Toolbox
		// 
		// 5-1: sessionStart         // DateStamp, timeStamp, and start sessionTimer
		// 5-2: sessionStop          // Stop sessionTimer and return Latency
		// 5-3: submitScore          // Format score and submit to the publish template
		// 
		// Section 6: Common Toolbox
		// 
		// 6-1: getDateStamp         // Format current date
		// 6-2: getTimeStamp         // Format current time
		// 6-3: sessionTimer         // "Start" and "Stop" the sessionTimer for Latency
		// 6-4: getLatency           // Format seconds to hours for Latency
		// 6-5: formatNum            // Format single digit number to a double digit number
		// 6-6: getObjProp           // Returns a report from an Object
		// 6-7: reportToOutput       // Trace this session's instance Properties to Output
		// 
		// 
		#initclip
		// SECTION 1: START GLOBAL FUNCTIONS
		// 1-1: Constructor function for the global class
		_global.LToolBox = function() {
			this.interaction_id = undefined;
			this.interaction_type = undefined;
			this.correct_response = undefined;
			this.student_response = undefined;
			this.result = undefined;
			this.feedback = undefined;
			this.numOfTries = 1;
			this.feedback_list = undefined;
			this.tracking = undefined;
			this.weighting = undefined;
			this.objective_id = undefined;
			this.latency = undefined;
			this.navigation = undefined;
		};
		// Inherit Object properties
		_global.LToolBox.prototype = new Object();
		// SECTION 2: GRAPHIC INITIALIZATION HANDLING
		// 2-1: Locate a named text field and set its value
		LToolBox.prototype.setTextField = function(fieldName, val) {
			eval(fieldName).text = val;
		};
		// 2-2: Locate a named component and set its label
		LToolBox.prototype.setCompLabel = function(UIComponent, val) {
			eval(UIComponent).setLabel(val);
		};
		// 2-2: Locate a named component and set its changeHandler
		LToolBox.prototype.setCompCallBack = function(UIComponent, val) {
			if (eval(UIComponent).setClickHandler) {
				eval(UIComponent).setClickHandler(val);
			} else if (eval(UIComponent).setChangeHandler) {
				eval(UIComponent).setChangeHandler(val);
			}
		};
		// 2-3: Locate a named component and set its enabled state
		LToolBox.prototype.setCompState = function(UIComponent, val) {
			eval(UIComponent).setEnabled(val);
		};
		// 2-4: Locate a named component and return its label
		LToolBox.prototype.getCompLabel = function(UIComponent) {
			return eval(UIComponent).getLabel();
		};
		// 2-5: Locate a named control button component and set its initial state
		LToolBox.prototype.initControlButton = function(callBack) {
			var initial_state;
			if (this.feedback == true) {
				initial_state = "Check Answer";
				if (this.navigation == "Auto GoTo Next Frame") {
					trace("WARNING: Feedback must be false and Tracking turned true \rto use Auto GoTo Next Frame. Navigation reset to Next Button.");
					this.navigation = "Next Button";
				}
			} else if (this.tracking == true) {
				initial_state = "Submit";
			} else if (this.navigation != "Off") {
				initial_state = "Next Question";
				if (this.navigation == "Auto GoTo Next Frame") {
					trace("WARNING: Feedback must be false and Tracking turned true \rto use Auto GoTo Next Frame. Navigation reset to Next Button.");
					this.navigation = "Next Button";
				}
			} else {
				initial_state = "";
			}
			this.label_state = initial_state;
			this.setCompLabel(this.Assets.ControlButton, initial_state);
			this.setCompState(this.Assets.ControlButton, false);
			this.setCompCallBack(this.Assets.ControlButton, callBack);
		};
		// SECTION 3: FEEDBACK EVENT HANDLING
		// 3-1: Set event handler to populate the feedback field
		LToolBox.prototype.setFeedback = function(val) {
			if (this.feedback == true) {
				if (val.toLowerCase() == "init") {
					// Use "init" for initial feedback.
					this.setTextField(this.Assets.FeedbackField, this.feedback_list[0]);
				} else if (val.toLowerCase() == "button") {
					// Use "button" for transition feedback
					var buttonState = this.getCompLabel(this.Assets.ControlButton);
					this.setTextField(this.Assets.FeedbackField, "Click the "+buttonState+" button.");
				} else if (val.toLowerCase() == "c") {
					// "c" for correct evaluation result
					this.setTextField(this.Assets.FeedbackField, this.feedback_list[1]);
				} else if (val.toLowerCase() == "w") {
					// "w" for incorrect evaluation result
					if (this.numOfTries>1) {
						this.setTextField(this.Assets.FeedbackField, this.feedback_list[3]);
					} else {
						this.setTextField(this.Assets.FeedbackField, this.feedback_list[2]);
					}
				}
			} else {
				this.setTextField(this.Assets.FeedbackField, "");
			}
		};
		// SECTION 4: FEEDBACK EVENT HANDLING
		// 4-1: Build Event Handler for navigation calls
		LToolBox.prototype.setNavigation = function() {
			if (this.navigation == "Off") {
				this.setCompState(this.Assets.ControlButton, false);
			} else if (this.navigation == "Next Button") {
				if (!this.buttonFlag || this.buttonFlag == false) {
					this.setCompLabel(this.Assets.ControlButton, "Next Question");
					this.buttonFlag = true;
				} else {
					if (this.navAction == "Stop") {
						if (this.navLabel == "") {
							eval(this.assets_path.nextFrame());
						} else {
							eval(this.assets_path.gotoAndStop(this.navLabel));
						}
					} else if (this.navAction == "Play") {
						if (this.navLabel == "") {
							eval(this.assets_path.gotoAndPlay(this._currentframe+1));
						} else {
							eval(this.assets_path.gotoAndPlay(this.navLabel));
						}
					}
				}
			} else if (this.navigation == "Auto GoTo Next Frame") {
				eval(this.assets_path.nextFrame());
			}
		};
		// SECTION 5: TRACKING TOOLBOX
		// 5-1: Get date and time stamp and start session timer
		LToolBox.prototype.sessionStart = function() {
			this.dateStamp = this.getDateStamp();
			this.timeStamp = this.getTimeStamp();
			this.sessionTimer("start");
		};
		// 5-2: Stop session timer and return latency
		LToolBox.prototype.sessionStop = function() {
			this.latency = this.getLatency(this.sessionTimer("stop"));
		};
		// 5-3: Format data and submit tracking
		LToolBox.prototype.submitScore = function() {
			if (this.weighting<=0 || this.weighting == undefined) {
				this.weighting = 1;
			}
			var weight;
			if (this.result == "C") {
				weight = this.weighting;
			} else if (this.result == "W") {
				weight = -1*this.weighting;
			}
			if (this.tracking == true) {
				var intData = this.dateStamp+";"+this.timeStamp+";"+this.interaction_ID+";"+this.objective_ID+";"+this.interaction_type+";"+this.correct_response+";"+this.student_response+";"+this.result+";"+this.weighting+";"+this.latency;
				// trace("intData: "+intData);
				fscommand("MM_cmiSendInteractionInfo", intData);
			}
			_root.QuizTrack.countScore(weight);
		};
		// SECTION 6: COMMON TOOLBOX
		// 6-1: Return formatted date properties
		LToolBox.prototype.getDateStamp = function() {
			var dateObj = new Date();
			var year = dateObj.getFullYear();
			var month = this.formatNum(dateObj.getMonth()+1);
			var day = this.formatNum(dateObj.getDate());
			var dateString = year+"/"+month+"/"+day;
			return dateString;
		};
		// 6-2: Return formatted time properties
		LToolBox.prototype.getTimeStamp = function() {
			var timeObj = new Date();
			var hours = this.formatNum(timeObj.getHours());
			var minutes = this.formatNum(timeObj.getMinutes());
			var seconds = this.formatNum(timeObj.getSeconds());
			var timeString = hours+":"+minutes+":"+seconds;
			return timeString;
		};
		// 6-3: Start or stop the session timer to calculate latency
		LToolBox.prototype.sessionTimer = function(action) {
			if (action.toLowerCase() == "start") {
				this.startTime = int(getTimer()/1000);
			} else if (action.toLowerCase() == "stop") {
				this.stopTime = int(getTimer()/1000);
				var elapsedSec = this.stopTime-this.startTime;
				return elapsedSec;
			}
		};
		// 6-4: Return formatted date properties
		LToolBox.prototype.getLatency = function(timeInSec) {
			var l_seconds, l_minutes, l_hours, timeInHours;
			if (timeInSec<=9) {
				l_seconds = "0"+timeInSec;
				l_minutes = "00";
				l_hours = "00";
			} else {
				l_seconds = timeInSec;
				l_minutes = "00";
				l_hours = "00";
			}
			if (l_seconds>59) {
				l_minutes = int(l_seconds/60);
				l_minutes = this.formatNum(l_minutes);
				l_seconds = l_seconds-(l_minutes*60);
				l_seconds = this.formatNum(l_seconds);
				l_hours = "00";
			}
			if (l_minutes>59) {
				l_hours = int(l_minutes/60);
				l_hours = this.formatNum(l_hours);
				l_minutes = l_minutes-(l_hours*60);
				l_minutes = this.formatNum(l_minutes);
			}
			timeInHours = l_hours+":"+l_minutes+":"+l_seconds;
			return timeInHours;
		};
		// 6-5: Return formatted number - convert from single digit to double digit
		LToolBox.prototype.formatNum = function(num) {
			if (num<=9) {
				num = "0"+num;
			}
			return num;
		};
		// 6-6: Trace the properties of an object and return its values in an Array
		LToolBox.prototype.getObjProp = function(objName, Trace) {
			var objNameArray = new Array();
			var i = 0;
			for (x in objName) {
				objNameArray[i] = objName[x];
				if (arguments[1] == true) {
					trace(x+" : "+objName[x]);
				}
				i++;
			}
			return objNameArray.reverse();
		};
		// 6-7: Trace Session Object properties to confirm tracking
		LToolBox.prototype.reportToOutput = function(defined) {
			var x, y;
			for (prop in this) {
				x = this[prop];
				y = typeof (this[prop]);
				if (defined == true) {
					if (x != undefined && y != "function" && y != "object") {
						trace("this."+prop+" : "+this[prop]);
					}
				} else if (defined == false || eval(defined) == undefined) {
					trace("this."+prop+" : "+this[prop]);
				} else if (defined.toLowerCase() == "object") {
					if (y == "object") {
						trace("this."+prop);
					}
				} else if (defined.toLowerCase() == "function") {
					if (y == "function") {
						trace("this."+prop);
					}
				}
			}
			trace("-------------------");
			trace("");
		};
		#endinitclip
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.VERBWORD = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_26 = function() {
		this.gotoAndPlay(21);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(26).call(this.frame_26).wait(1));

	// Layer 1
	this.instance = new lib.VERBWORDSTILL();
	this.instance.setTransform(158.7,114.8,0.221,0.221);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.85,scaleY:1.85,x:181.7,y:100.8},6).to({scaleX:1,scaleY:1,x:179.7,y:102.8},14).wait(4).to({alpha:0},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(141.6,107.4,30.1,16.9);


(lib.verbdescription = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.VERBWORD();
	this.instance.setTransform(48.4,19.1,1,1,0,0,0,156.7,115.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABYCDQgHgWgJg6QgaAEgrAJIhBAOQgNAhgeBAQgJAOgOAAQgKABgIgIQgHgIgBgLQAAgLAnhRQgFgGAAgJQABgVAYgFQAdg1AshGQA6hhAPAAQAUAAAHAcIAQBWIAmCuIAPAoQAIAVAAAHQgBAKgHAIQgJAHgJAAQgYAAgRg8gAggASQAfgIA8gKIgUhhg");
	this.shape.setTransform(-38.6,13.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.5,-27.2,122.9,76.5);


(lib.scene3redheadstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Scene3Yes();
	this.instance.setTransform(-61.4,-75.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("ABHBcQgLgHgKgIQgggagcgkQgUgXgQgcAhGhbQAKAdAOAZ");
	this.shape.setTransform(-12.6,-51.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AjMnAQAAAPgDAOQgDAUAEASQADARAMANQAHAIAKgDQAPgJAQgNQAPgMANgPQANgPAKgQQALgQAJgQQAJgQALgQQALgQAJgPQANgNANgOQALgOALgNQAMgOAKgNQAGgIAHgGQAEgCAEgCQAFgHAHgIQANgPAQgKQAPgLANgMQAMgOAKgMQANgPAQgLQAQgKAQgLQAQgLARgKQAQgKAOgNQAPgNAPgMQAPgLAOgLQAAgBAAgBQAFgPAIgPQAJgPAMgOQALgMALgNQAJgLANgGQADgCACgBQAKgKAIgNQAJgOAIgSQAHgRAEgSQAEgUAOgHQASgIAGAWQAGARgDATQgDATgKARQgEAGgFAGQgGAHgHAGQAHgFAIgDQAFgCAGgBQANACAKAJQACABABACQANgJAUgBQAIgBAJAAQAEABAEACQASAEARACQATABAdAFQAdAEACALQADALAFAKQgGgCgHgBQgRgEgUgBQgUgBg0AHQgGgFgIACAIMu8QALANAEAOAHYu/QgBAAAAABQgLAHgKAGALCtWQAIAIgNAEQgTAGgTgBQgSgBgTgCQgTgDgUAAQgTAAgTAAQgUgBgSAFQgRAFgQAKQgPAIgUACQgSACgUADQgEAAgFABQgBAAgCAAQgNALgMAMQgNALgPALQgNAIgLALQgBABgBABQAAAAgBABQgBABgCABQgIAHgIAHQgQANgPAPQgLALgMAMQgNAOgLANQgLANgLANQgJALgLALQgHAIgFAHQgBACgBACQgBABgBABQgLALgKAMQgLAPgNAPQgMAPgQAMQgOAMgOAMQgPAMgNANQgNAOgLAPQgJAPgLAQQgMAQgIAQQgBAAAAABQgCADgBAEQgHANgHAOQgIASgJAQQgIANgDAOQABAAAAABQAHADAGAEQAQAKAIAQQAJAQgBAVQgBATgHASQgGATgLANQgLANgQAJQgNAHgRAAAoptmQAAgKACgKQACgOALgGQAPgIARAEQAOADALAKQAEACACADQgDgDAAgFQAAgPAKgJQANgLATABQAJAAAGAEQAQAMAJANQgGgMAIgNQAQgYAdgIQAYgHAZAFQAEAAAFACQAXAJAIASQAMgRAWACQASADAQAIQAQAJABATQAKgGAMgEQASgGASgDQAUgEASAEQASAFAYABQANgLATgDQANgDALAHQAOAJAUADQAVADAIASQAIARAAAUQAAASgGARQgGASgNAOQgNANgTAFQgTAGgUAIQADARgKARQgDAFgFACQgLADgBAHQgEAUgWABQgUAAgQgHQABgGACgHQAKgugjgJQgLgDgIgEQgCgBgBgBQgCgDgDgCQgJgGgPAEQhOAXgbhBQgwgVgUBKQgBAAgBAAQhJAEgaAuQggA4AZA9QABADACADAhfrAQgLAzgEA7QgFBAgqAoQgWAUgZAWQgTAQgUARAj3oCQguA5gehSQgWg+gRhJQgBgEgFgTQA6AcBCghQAJgFAKgIQAMApABAvQACBEglAtgAhRkFQgIgDgJgCQgSgFgUADQgSACgQALQgNAKgRAEQgSAGgTgBQgSgBgTgCQgTgCgSgGQgRgFgRgDQgUgEgRAJQgQAJgLAOQgJANgCAQQgFgHgGgFQgOgNgNgNQgNgNgMgLQAAgBgBgBQgCgEgDgDQgNgMgOgOQgMgNgPgNQgOgLgQgMQgPgLgQgJQgQgKgOgKQgPgLgQgMQgPgNgPgMQgOgLgOgNQgHgHgJgGAl9hfQAEAFAFAGQANANATACQATACAUgBQARgCASgIQARgIAQgGQASgHATABQAUAAARACQASADASABQADAAADAAQgGALgGAMQgJARgCATQgCAUAEARQAEARAFASQAFATAKARQAEAHAGAFQAAAAABABQAMgJAQgGQASgHASgHQASgIARgGQgDAMgEAOQgGASgCATQgCATgCATQgDATgBAUQgCATAFARQABAFABAEQARgJAPgJQARgIAQgLQAEgDAEgDQgJAJgHAMQgJAPgHASQgEAKgDALQgBAGgBAGQgEASgRgBQgRgCgTgBQgUgBgUgBQgTAAgTADQgSADgTACQgUADgTACQgTADgSAJQgQAJgRAJQgPAHgOALQgOAKgKAPQgFAFgEAAQgKAAgJgBQgDgBgDAAQgCABgBABQgPAJgQAJQgPAKgPALQgPAKgSAJQgRAJgRAIQgRAIgRALQgPAJgLANQAAABgBAAQAAgBAAAAQgEgTAIgRAgEAtQABAAAAAAQAQgHAQgIQARgIAPgLQANgJAPgKQAPgMAPgLQAPgLAQgLQAPgKAQgLQAPgKARgIQARgHATADQATAEAHASQAHASACASQADATgBATQAAARgBATQAAAUACATQABAJAAAJQAAAEAAAEQAAAQAAAQQAAATABAUQAAAUgBATQgBAUgCATQgCATgBAUQgBAMAAANQAAADAAAEQACAPACAOQADATACASQADATABASQABAUAAAUQABAJARAWQABgBABgBQALgMAMgMQANgNAJgPQAKgPAJgMQAKgNAFgQQADgPAIgQQAKgXAPAOQAFAFACAIQACAFABAGQARgDACAUQAWADgHAQQgBACgCAEQgBADgFgBALbtiQgBgBgCgCQgLgKgSgFQgRgGgVABQgSAAgwAEQAAAAAAAAQgEgKgKAAALAuUQALADAKAGQARAIAEASQAAACABACQgGAHgKAEQACADACADQgBAAAAABQgMAFgQAAAJRtoQAEABACADQABABAAABQAsgDAUAAQAVAAANAIQAFAEADADAHkG4QAAAQggAiQggAigDAFQgBAAAAACQgCACgBACQgIALgGAMQgJARgHAPQgJARgNANQgNAMgMAOQgLANgSADQgUAFgSgJQgRgIgFgTQgFgSAAgUQAAgTABgTQABgTAAgTQAAgTgCgTQgBgOgFgMQgDgFgCgFQgFgMgEgMQgFgSgFgRQgFgTgFgTQgGgSgGgTQgFgPgHgNQgBgCgBgCQgCgHgCgHQgFgRgHgSQgGgRgFgRQgGgRgFgSQgFgQgFgSQgCgFAAgFQgDgOADgPAGqGVQARgBANASQAFAHADAGAHkGjQgFAIgLABAHaGVQARgCgHAPQAAAAAAABQATACgMAMQgBACgDADQgCABgBABIAAAAIgBAAQgEgCgFgCAHLGCQABABAAACQABAJgHAFAG4FxQACAMgCANAgWDmQAFAMAHAIQACABACABQAJAFAJAFAB+BzQgPAOgMAOQgNAOgNAMQgLAJgLAJAhqBZQACgBABAAAhoBXQgBABgBABQgJAMgMAIQgOAKgPAKQgQAKgRAHQgSAIgSACQgTADgUAAQgTAAgTAAQgSgBgOgGQAAgCgBgBQgCgGgCgFQAAgBAAgBQgCgFgBgFQgGgSgFgSQgGgTgEgTQgFgTgFgTQgEgPgDgTQgDgUABgUQAAgSABgRQgBgCgBgBQgEgIgCgJQgEgSgFgSQgEgRgIgPQgEgIgGgHAomHuQAFASAKALQAAABABABQAEACADADQAMAJAJAKQAMAOALAKQANANALAOQAMAQALAPQAJAPAJARQAIAQAIARQAHAPAFARQAEAMADAJQACACACACQAJALAKAKQAOAOAKAMQABAAABABQABACABACQAHALAIANQAKARALAPQAKAOAOAOQAOAOAMAMQANANAOAOQAKALAPAIQARAKAMANQALAMAKAOIAAAAQAFAEAAAIQgBAUgPAMQgPAMgVAAQgTAAgTgEQgSgDgRgGQgSgGgTgGQgSgGgUgDQgTgDgUABQgUACgSAGQgSAHgQALQgIAFgIAFQgQAKgTgEQgLgCgDgJQgEgKgHAFQgPALgTgNQgSgMAKgOQABgBAAACQAAAAAAAAIgBgBQgKgFgDgIQgHgTARgLQgHgBgGgDQgHgDAAgGQgDgaAVAHQAAgBgBAAQgOgKgHgTQgHgPAWgKQgQgKgBgSQAAgSAOgMQAOgLAWADQATADASAHQANAEANAFQASAHASAIQASAHAOAJQAKAHAMAGQgKgOgLgPQgJgNgOgNQgOgNgNgOQgOgMgOgNQgOgNgNgPQgLgMgJgNQgCgCgDgCQgGgGgJgEQgPgJgMgNQgOgNgOgKQgQgLgMgNQgNgNgOgOQgHgGgHgIQgCgDgCgDQgLgOgLgQQgKgQgLgPQgJgNgFgQQAAgCgBgCQABgHABgGQAFgTALgPQAMgQAMgNQAMgMALgMQAJgJAKgIQARgQARgOQAGgFAIgFQARgLARgMQAKgIAKgIQAOgLAOgJQAcgSAYgTQAIgFAPgIQADgGAGgFQANgMAPgMQAOgMAOgNQAPgNAOgMQAMgMAMgKAFLIVQgOANgOAOQgMANgOAMQgMALgEATQgCAGADAHQADAGACAGAk4sFQgHgJAFgLAkYsgQAHAJgDALAoptmQAAAAAAAAQgBAJABAJApvspQABgQAIgOQAJgRARgJQAQgJATAEAqzrYQAAAAAAgBQgFgJACgPQADgTALgOQALgOARgGQAOgGAPADAppsmQgDgCgDgBQgBADAAADQgBARAKARAm8ouQgFADgIABQgUABgLgDAptn3QAJADAKAEQASAHASAKQAQAIAMANQANANAOAJQAHAEAGAEQAHAEAGAFQACABABABQAIAEAHAFQARALAQAKQAQALAQALQAPALAMAPQAMAOALANQARAUAMgOQAMgNACgTQABgUgEgTQgDgTgGgSQgCgJgEgJAnAo2QACAEACAEQADgCABgDAmoojQgBgBAAAAQgMACgHgMAq8rMQADgGAFgFQABAAAAgBQACADADADQAGAHAHADAnJD1QgFAJABANQABATAJAQQAJAQAOAOQAOANAPALQAOALAPAFQAGABAGACApEOCQABABACABQAOAIATABQAUACAOgNAo9O5QAOAKATgFQAMgEAHgLAoGOcQAGAIgCAMQAAAFgDAHQgEAKgFAKQgKASAAATQAAAGABAFQABADABACAo7PZQALACALgFAmKN/QAFACAEACQASAGAQAJQAPAKARAIQAQAJASAFAo3QFQASAGAIgJ");
	this.shape_1.setTransform(25.2,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("Ah/FCIgGgBIgMgDQgPgFgOgLQgPgLgOgNQgOgNgJgQQgJgRgBgTQgBgMAFgJQADgGAGgFIAcgYIAcgZIAdgaIAYgWIAEALIABADQAOAGASABIAmABQAUgBATgCQAQgDASgHQARgIAQgKIAdgTQAMgIAJgNIADgBQAMgIAQgHIAkgOIAjgLIgHAXQgGATgCATIgEAmIgEAmQgCATAFASIACAIQAFAMAHAIIAEACIAUALIgCAMQgEARgTgBIgkgDIgogBQgTAAgTACIglAGIgnAFQgTACgQAKIghARQgPAIgOALQgOAKgKAOQgFAGgEAAIgDAAIgQgCgAhzh6QgTgCgNgOQgFgFgEgGIgCgDQgEgIgCgJIgJgkQgEgQgIgQQgEgIgGgHQACgPAJgNQALgPAQgIQARgJAUADQARADARAGQASAGATACIAlACQARABASgFQARgFANgKQAQgKASgDQAUgCASAEIARAGIABAAIANAHQAQALAIAQQAJAQgBAUQgBAUgHASQgGASgLANQgLANgQAJQgOAHgQABIgGAAIgkgEQgRgDgUAAQgTAAgQAHQgQAGgRAIQgSAHgRACIgRABIgWgBg");
	this.shape_2.setTransform(2.7,5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6600").s().p("AiKDIQACgCACgDQgCADgCACIgEgIIAEAIQgFAEgJAAQgTABgMgDIgFgCIgigRQgRgKgTgHQgTgGgOgKIgggUQgPgKgPgFIgEgBQgKgIgLgNQgJgMgFgPIAAgEQAAgKgDgKQAEgGAEgEIACgCIAEAGQAHAHAHADQgHgDgHgHIgEgGIgBAAQgEgKACgPQACgRALgOQALgOARgGQAPgGAOAEQACgQAIgPQAJgRARgJQAQgJASAEIAAABIAAAAIAAAIIAAAJIAAgJIAAgIIAAAAIAAgBIACgUQACgOALgGQAQgIARAEQAOADALAKIAGAFQgDgDAAgFQgBgPALgJQAMgLAUABQAJAAAGAEQAQAMAIANQgGgMAJgNQAQgYAcgIQAYgHAXAFIAJACQAXAJAIASQANgRAVACQASADARAIQAQAJAAATQALgFALgFQASgGATgDQATgEASAEQATAFAYABQAMgLATgDQAPgDALAHQAPAJAUADQAVADAIASQAIARgBAUQAAASgGARQgGASgNAOQgMANgTAFIgpAOQACAPgKARQgDAFgFACQgKADgCAHQgEAUgWABQgTAAgRgGIADgOQAKgsgjgJQgKgCgJgFIgDgCIgEgEQgJgHgQAEQhNAXgchBQgtgUgVBJIgBAAQhKAFgaArQggA4AaA9IADAGIgDACQAKAdAOAZIgEABQgJAAgGgLgAk2gJQgIgPAAgQIAAgDIAAgFIAHACIgHgCIAAAFIAAADQAAAQAIAPg");
	this.shape_3.setTransform(-5.3,-76.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ACXHfIgEgCQgHgJgFgLIAigSQAQgIAQgLIAJgGQgJAJgIAMQgIAPgHARIgHAWIgUgKgAikk4QgXg+gQhJIgGgXQA6AbBBghQAKgEAJgIQAMApACAuQACBEglAuQgTAXgQAAQgYAAgRgwg");
	this.shape_4.setTransform(9.4,-23);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC99").s().p("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");
	this.shape_5.setTransform(25.2,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109.6,-108.7,210.6,216.7);


(lib.scene3redhead = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.scene3redheadstill();
	this.instance.setTransform(0,-1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:53.9},8).to({x:-0.9,y:0.2},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109.6,-109.6,209.6,214.8);


(lib.main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.scene3redhead();
	this.instance.setTransform(104.7,-34.3,0.684,0.684);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgVAWQgJgJAAgNQAAgLAJgKQAJgJAMAAQAMAAAJAJQAKAKAAALQAAANgKAJQgJAJgMAAQgMAAgJgJg");
	this.shape.setTransform(188.8,121.1);

	this.instance_1 = new lib.verbdescription();
	this.instance_1.setTransform(-100.9,15.4);

	this.instance_2 = new lib.verbdesciptionblinkstill();
	this.instance_2.setTransform(-4,96.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1,1).p("A/X26MAAAAt1MA+vAAAMAAAgt1g");
	this.shape_1.setTransform(-4.3,-0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0099FF").s().p("A/YW7MAAAgt1MA+wAAAMAAAAt1g");
	this.shape_2.setTransform(-4.3,-0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(3,1,1).p("AAJAAIgRAA");
	this.shape_3.setTransform(-206.2,-147.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_2},{t:this.instance_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-208.6,-149,406.8,296.5);


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


(lib.FBoundingBoxSymbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{enabled:0,disabled:1});

	// timeline functions:
	this.frame_0 = function() {
		/* var component = _parent;
		component.registerSkinElement(boundingBox, "background");
		stop();
		*/
	}
	this.frame_1 = function() {
		/* component.registerSkinElement(boundingBox2, "backgroundDisabled");
		stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Skin Elements
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AH0H0IvmAAIAAvnIPmAAg");
	this.shape.setTransform(50,50);

	this.boundingBox = new lib.boundingBox();
	this.boundingBox.setTransform(50,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.boundingBox},{t:this.shape}]}).to({state:[{t:this.boundingBox},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,102,102);


(lib.fpb_up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* var component = _parent._parent;
		component.registerSkinElement(frame5, "face");
		component.registerSkinElement(frame3, "shadow");
		component.registerSkinElement(frame1, "darkshadow");
		component.registerSkinElement(frame4, "highlight");
		component.registerSkinElement(frame2, "highlight3D");
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin elements
	this.frame5 = new lib.fpb_face_up();
	this.frame5.setTransform(10,10,2.025,2.025);

	this.frame4 = new lib.fpb_leftInFrame_up();
	this.frame4.setTransform(5,5,2.152,2.152);

	this.frame3 = new lib.fpb_rightInFrame_up();
	this.frame3.setTransform(5,5,2.278,2.278);

	this.frame2 = new lib.fpb_leftOutFrame_up();
	this.frame2.setTransform(0,0,2.405,2.405);

	this.frame1 = new lib.fpb_rightOutFrame_up();
	this.frame1.setTransform(0,0,2.001,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame1},{t:this.frame2},{t:this.frame3},{t:this.frame4},{t:this.frame5}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100.1,100);


(lib.fpb_over = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* var component = _parent._parent;
		component.registerSkinElement(frame5, "face");
		component.registerSkinElement(frame3, "shadow");
		component.registerSkinElement(frame1, "darkshadow");
		component.registerSkinElement(frame4, "highlight");
		component.registerSkinElement(frame2, "highlight3D");
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin elements
	this.frame5 = new lib.fpb_face_over();
	this.frame5.setTransform(10,10,2.025,2.025);

	this.frame4 = new lib.fpb_leftInFrame_over();
	this.frame4.setTransform(5,5,2.152,2.152);

	this.frame3 = new lib.fpb_rightInFrame_over();
	this.frame3.setTransform(5,5,2.278,2.278);

	this.frame2 = new lib.fpb_leftOutFrame_over();
	this.frame2.setTransform(0,0,2.405,2.405);

	this.frame1 = new lib.fpb_rightOutFrame_over();
	this.frame1.setTransform(0,0,2.001,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame1},{t:this.frame2},{t:this.frame3},{t:this.frame4},{t:this.frame5}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100.1,100);


(lib.fpb_down = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* var component = _parent._parent;
		component.registerSkinElement(frame5, "face");
		component.registerSkinElement(frame4, "shadow");
		component.registerSkinElement(frame2, "darkshadow");
		component.registerSkinElement(frame3, "highlight");
		component.registerSkinElement(frame1, "highlight3D");
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin elements
	this.frame5 = new lib.fpb_face_press();
	this.frame5.setTransform(10,10,2.025,2.025);

	this.frame4 = new lib.fpb_leftInFrame_press();
	this.frame4.setTransform(5,5,2.152,2.152);

	this.frame3 = new lib.fpb_rightInFrame_press();
	this.frame3.setTransform(5,5,2.278,2.278);

	this.frame2 = new lib.fpb_leftOutFrame_press();
	this.frame2.setTransform(0,0,2.405,2.405);

	this.frame1 = new lib.fpb_rightOutFrame_press();
	this.frame1.setTransform(0,0,2.001,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame1},{t:this.frame2},{t:this.frame3},{t:this.frame4},{t:this.frame5}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100.1,100);


(lib.fpb_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* var component = _parent._parent;
		component.registerSkinElement(frame5, "face");
		component.registerSkinElement(frame3, "shadow");
		component.registerSkinElement(frame1, "darkshadow");
		component.registerSkinElement(frame4, "highlight");
		component.registerSkinElement(frame2, "highlight3D");
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin elements
	this.frame5 = new lib.fpb_face_disabled();
	this.frame5.setTransform(10,10,2.025,2.025);

	this.frame4 = new lib.fpb_leftInFrame_disabled();
	this.frame4.setTransform(5,5,2.152,2.152);

	this.frame3 = new lib.fpb_rightInFrame_disabled();
	this.frame3.setTransform(5,5,2.278,2.278);

	this.frame2 = new lib.fpb_leftOutFrame_disabled();
	this.frame2.setTransform(0,0,2.405,2.405);

	this.frame1 = new lib.fpb_rightOutFrame_disabled();
	this.frame1.setTransform(0,0,2.001,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame1},{t:this.frame2},{t:this.frame3},{t:this.frame4},{t:this.frame5}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100.1,100);


(lib.fpb_states = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{up:0,over:1,down:2,"disabled":3});

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

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Layer 6
	this.over_mc = new lib.fpb_over();

	this.disabled_mc = new lib.fpb_disabled();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.over_mc}]},1).to({state:[]},1).to({state:[{t:this.disabled_mc}]},1).wait(1));

	// states
	this.up_mc = new lib.fpb_up();

	this.down_mc = new lib.fpb_down();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.up_mc}]}).to({state:[]},1).to({state:[{t:this.down_mc}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100.1,100);


// stage content:
(lib.verb_def = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.btn_menu.addEventListener("click", openMenu.bind(this));
		this.btn_goNext.addEventListener("click", openNext.bind(this));
		
		function openMenu(){
		
		 window.open ("../menu/main_menu.html","_self");
		}
		
		function openNext(){
		
		 window.open ("verb_intro.html","_self");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20));

	// Image
	this.btn_goNext = new lib.goNext();
	this.btn_goNext.setTransform(485.9,347.7);
	new cjs.ButtonHelper(this.btn_goNext, 0, 1, 2, false, new lib.goNext(), 3);

	this.instance = new lib.Copyright("synched",0);
	this.instance.setTransform(275,389.5);

	this.btn_menu = new lib.skiptomenu();
	this.btn_menu.setTransform(514.1,20.3);
	new cjs.ButtonHelper(this.btn_menu, 0, 1, 2, false, new lib.skiptomenu(), 3);

	this.instance_1 = new lib.main();
	this.instance_1.setTransform(275,194.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.btn_menu},{t:this.instance},{t:this.btn_goNext}]}).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(341.4,201.8,479.9,398.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;