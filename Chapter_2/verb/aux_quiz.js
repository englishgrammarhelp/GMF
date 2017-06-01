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
		{src:"sounds/BeautifulDrumnbass.mp3", id:"BeautifulDrumnbass"},
		{src:"sounds/High_Screaming_Gtr.mp3", id:"High_Screaming_Gtr"},
		{src:"sounds/square_bits.mp3", id:"square_bits"}
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



(lib.highlight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,204,0,0.498)").s().p("AkSCQIAAkgIIkAAIAAEgg");
	this.shape.setTransform(27.5,14.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,55,29);


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


(lib.blank_gr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("Aj9CqIAAlSIH7AAIAAFSg");
	this.shape.setTransform(32.5,17,1.275,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65,34);


(lib.TextButtonBackground = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,204,255,0.224)").s().p("AlpDGIAAmLILTAAIAAGLg");
	this.shape.setTransform(36.3,19.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,72.5,39.8);


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


(lib.TextButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Background
	this.instance = new lib.TextButtonBackground("single",0);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,72.5,39.8);


(lib.blank = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.blank_gr("synched",0);
	this.instance.setTransform(32.6,17,1,1,0,0,0,32.5,17);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,65,34);


(lib.practicequiz2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{firstSet:0,secondSet:10,thirdSet:20,fourthset:30,fifthset:40,sixthset:50,seventhset:60,eighthset:70,ninthset:80,tenthset:90});

	// timeline functions:
	this.frame_0 = function() {
		var scoreNum =0;
		
		this.btn_correct.addEventListener("click", correct.bind(this));
		this.btn_wrong.addEventListener("click", wrong.bind(this));
		
		function correct(){
			scoreNum +=1;
			this.result.text = "Correct!";
			this.btn_correct.mouseEnabled = false;
			this.btn_wrong.mouseEnabled = false;
			this.highlight.visible = true;
			this.score.text = scoreNum;
		 
		}
		
		function wrong(){
		
			this.result.text = "Incorrect";
			
		}
		var frame = 1;
		
		this.btn_next.addEventListener("click", goNext.bind(this));
		
		function goNext(){
		
			frame +=10;
			this.result.text = " ";
			this.gotoAndPlay(frame);
			this.btn_correct.mouseEnabled = true;
			this.btn_wrong.mouseEnabled = true;
			this.highlight.visible = false;
		 
		}
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.stop();
	}
	this.frame_49 = function() {
		this.stop();
	}
	this.frame_59 = function() {
		this.stop();
	}
	this.frame_69 = function() {
		this.stop();
	}
	this.frame_79 = function() {
		this.stop();
	}
	this.frame_89 = function() {
		this.stop();
	}
	this.frame_99 = function() {
		this.stop();
		this.btn_next.addEventListener("click", goNext.bind(this));
		
		function goNext(){
		
			window.open ("aux_finish.html","_self");
		 
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(10).call(this.frame_19).wait(10).call(this.frame_29).wait(10).call(this.frame_39).wait(10).call(this.frame_49).wait(10).call(this.frame_59).wait(10).call(this.frame_69).wait(10).call(this.frame_79).wait(10).call(this.frame_89).wait(10).call(this.frame_99).wait(1));

	// Layer 20
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AglBpQgFgEAAgGQAAgJAFgHQAFgIAIAAQAOAAAAARQAAAIgEAGQgEAHgIAAQgGAAgFgEgAgcAzQgEgEAAgGQAAgKASgOIAggYQASgPAAgNQAAgRgQgOQgOgNgPAAQgJAAgOAJQgNAJgEAAQgGAAgEgEQgEgFAAgGQAAgLAWgLQATgKANAAQAaAAAYAWQAXAWAAAdQAAAUgNAPQgIAJgWAPQgVAQgHAKQgFAGgGAAQgGAAgEgFg");
	this.shape.setTransform(188.3,325.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgnBOQgVgHAAgPQAAgFAEgEQAFgFAFAAQAFAAAHAHQADADAMACQAJACAHAAQAKAAAJgDQANgEAAgJQAAgTgbgHIgNgDQgSgFgJgFQgLgGAAgQQABgeAbgMQAIgEARgFIAbgJQAGgCAGgBQAHAAAEAFQADADABAHIABALIACAMQAAAHgDAEQgFAEgFAAQgJAAgCgGQgDgDgCgLIggAKQgVAIAAANIAIADQAfAGAQAKQAXANAAAcQAAAXgUAMQgRAKgXAAQgTAAgRgHg");
	this.shape_1.setTransform(173.8,328.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag2BAIAAhhIABgOIAAgOQAAgOANAAQANAAABAXQAagaAgAAQALAAAGAJQAGAIAAASIAAAKQgBARgOAAQgMAAAAgOIAAgKIgBgMQgWADgLAKQgNAJgIATIAABLQAAAPgOAAQgNAAAAgPg");
	this.shape_2.setTransform(160.5,328.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgMBmQgEgEgBgGIAAgaIgBgZIACghIABgfQAAgHAEgEQAEgEAGAAQAEAAAEAEQAEAEAAAHIgBAfIgCAhIAAAZIABAaQAAAGgEAEQgDAEgFAAQgGAAgDgEgAgIhNQgFgFAAgGQAAgHAFgFQAFgFAFAAQAHAAAFAFQAEAFABAHQgBAGgEAFQgFAFgHAAQgFAAgFgFg");
	this.shape_3.setTransform(149.4,325.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAtBIQgHgGgDgEIgYALQgKADgFAAQghAAgPgSQgPgSAAgkQAAggAYgZQAYgYAeAAQANAAAPAGQATAIAAALQAAAEgDADQgBAGgBAMIgBAdQAAASADAKIAJAZIADAIIABACQAAAGgEADQgEAEgFAAQgDAAgHgGgAgXgiQgQASAAAVQAAAXAJAMQAIAMAQAAQAMAAAJgFIAPgLQgFgkAAgSIABgNIACgQIgJgEIgGgBQgUAAgQASg");
	this.shape_4.setTransform(137.6,328.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgIBkQgEgEAAgGIAAgQIABgQIgDhRIgfgCQgNgCAAgMQAAgHAEgDQAEgEAGgBIAdADIAAgTIgBgSQAAgGAEgEQAEgEAGAAQALAAACAVIAAANIAAAIIAAAJIAUgDQAPAAAEACQAJADAAAKQAAAGgEAEQgEAEgGABIgHgBIgHAAIgTACIADBRIAAAHIAAAHQAAAfgPAAQgEAAgEgDg");
	this.shape_5.setTransform(123.3,326.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgnBOQgVgHAAgPQAAgFAEgEQAFgFAFAAQAFAAAHAHQADADAMACQAKACAGAAQAKAAAJgDQANgEAAgJQAAgTgbgHIgNgDQgSgFgJgFQgKgGgBgQQABgeAbgMQAIgEARgFIAbgJQAGgCAHgBQAGAAAEAFQADADAAAHIACALIACAMQAAAHgEAEQgEAEgGAAQgIAAgCgGQgDgDgCgLIggAKQgVAIAAANIAIADQAfAGAQAKQAXANAAAcQAAAXgUAMQgQAKgYAAQgTAAgRgHg");
	this.shape_6.setTransform(109.1,328.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ag2BzQgEgFAAgGIABg5IAAg2IgCg4IgCgdQAAgLADgGQAFgJAIABQAFAAAEADQAEAEAAAGIgBAFIgBAIQAMgJAMgEQAKgEAJAAQAdAAAOAaQAKAUAAAiQAAAcgQAUQgRAVgdAAQgNAAgRgFIAABEQAAAGgEAFQgEADgGAAQgGAAgEgDgAgMhKQgIAEgLALQACAgAAAiQAPAFAOAAQARAAAKgMQAIgKAAgSQAAgagGgNQgHgNgNAAQgLAAgKAGg");
	this.shape_7.setTransform(94.8,332.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAfBDQgRAJgWAAQgSAAgMgIQgOgJgCgRQgGgmAAgbQAAgUAEgYQACgNAMAAQAGAAAEAEQAEAEAAAGIgCAVIgCAWQAAAXACAPQABARADAKIAKAEIAIACQARAAAWgHIgBgcIAAgaQAAgeADgXQABgNANAAQAGAAAEAEQAEAEAAAGIgDA2IAAAcIAAAfIABAJIAAAKQAAAGgEAEQgEAEgGAAQgLAAgDgOg");
	this.shape_8.setTransform(79.4,328.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgnBOQgVgHAAgPQAAgFAFgEQADgFAHAAQAEAAAHAHQADADAMACQAJACAHAAQAKAAAJgDQANgEAAgJQAAgTgbgHIgMgDQgUgFgHgFQgMgGAAgQQAAgeAcgMQAJgEAQgFIAbgJQAGgCAHgBQAGAAAEAFQAEADgBAHIADALIABAMQAAAHgEAEQgDAEgHAAQgHAAgEgGQgCgDgBgLIghAKQgVAIAAANIAIADQAfAGAQAKQAXANAAAcQAAAXgUAMQgRAKgXAAQgSAAgSgHg");
	this.shape_9.setTransform(55.7,328.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgvA9QgWgSAAggQAAgjASgZQATgbAgAAQAWAAAPAIQASAKAAAUQAAAOgQAMQgHAFgXAJIg0AZQAIAMAMAGQAMAGAOAAQAJAAANgEQARgEAFgIQAFgHAFAAQAFAAAEADQAEAEAAAFQAAAQgaALQgVAKgUAAQgfAAgTgQgAgdglQgKAOgHAYIAsgSQAXgNALgJQgMgLgUAAQgRAAgMANg");
	this.shape_10.setTransform(41.4,328.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgnBOQgVgHAAgPQAAgFAEgEQAFgFAFAAQAFAAAHAHQADADAMACQAJACAHAAQAKAAAJgDQANgEAAgJQAAgTgbgHIgNgDQgSgFgJgFQgLgGAAgQQABgeAbgMQAJgEAQgFIAbgJQAGgCAGgBQAHAAAEAFQADADAAAHIACALIACAMQAAAHgEAEQgEAEgFAAQgJAAgCgGQgDgDgCgLIggAKQgVAIAAANIAIADQAfAGAQAKQAXANAAAcQAAAXgUAMQgRAKgXAAQgTAAgRgHg");
	this.shape_11.setTransform(25.7,328.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAtBIQgHgGgDgEIgYALQgKADgFAAQghAAgPgSQgPgSAAgkQAAggAYgZQAYgYAeAAQANAAAPAGQATAIAAALQAAAEgDADQgBAGgBAMIgBAdQAAASADAKIAJAZIADAIIABACQAAAGgEADQgEAEgFAAQgDAAgHgGgAgXgiQgQASAAAVQAAAXAJAMQAIAMAQAAQAMAAAJgFIAPgLQgFgkAAgSIABgNIACgQIgJgEIgGgBQgUAAgQASg");
	this.shape_12.setTransform(11.6,328.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgnA+QgUgTAAgeQgBgbAUgeQAUgiAZAAQAOAAASAGQAVAJAAAMQAAAFgDAEQgEAEgFAAQgFAAgCgCIgHgFQgHgHgUAAQgMAAgOAaQgNAYAAAPQAAATANAKQALALARAAQAJAAAJgFIAQgJIAHgCQAFAAAEAEQAEAEgBAGQABAKgWAKQgTAIgNAAQgbAAgTgRg");
	this.shape_13.setTransform(-3.2,328.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgIBkQgEgEAAgGIAAgQIABgQIgDhRIgfgCQgNgCAAgMQAAgHAEgDQAEgEAGgBIAdADIAAgTIgBgSQAAgGAEgEQAEgEAGAAQALAAACAVIAAANIAAAIIAAAJIAUgDQAPAAAEACQAJADAAAKQAAAGgEAEQgEAEgGABIgHgBIgHAAIgTACIADBRIAAAHIAAAHQAAAfgPAAQgEAAgEgDg");
	this.shape_14.setTransform(-17.6,326.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgMBmQgFgEAAgGIAAgaIgBgZIACghIABgfQAAgHAEgEQAEgEAGAAQAEAAAEAEQAEAEAAAHIgCAfIgBAhIAAAZIABAaQAAAGgDAEQgEAEgFAAQgGAAgDgEgAgIhNQgFgFAAgGQAAgHAFgFQAFgFAEAAQAHAAAGAFQAEAFAAAHQAAAGgEAFQgGAFgHAAQgEAAgFgFg");
	this.shape_15.setTransform(-28.1,325.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAfBDQgRAJgWAAQgSAAgMgIQgOgJgCgRQgGgmAAgbQAAgUAEgYQACgNAMAAQAGAAAEAEQAEAEAAAGIgCAVIgCAWQAAAXACAPQABARADAKIAKAEIAIACQARAAAWgHIgBgcIAAgaQAAgeADgXQABgNANAAQAGAAAEAEQAEAEAAAGIgDA2IAAAcIAAAfIABAJIAAAKQAAAGgEAEQgEAEgGAAQgLAAgDgOg");
	this.shape_16.setTransform(-40,328.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgmBOQgWgHAAgPQAAgFAEgEQAFgFAFAAQAFAAAGAHQAEADAMACQAJACAHAAQAKAAAJgDQANgEAAgJQAAgTgbgHIgNgDQgSgFgJgFQgLgGABgQQgBgeAcgMQAIgEASgFIAagJQAGgCAGgBQAHAAAEAFQADADABAHIABALIACAMQAAAHgDAEQgFAEgFAAQgIAAgEgGQgCgDgCgLIggAKQgVAIAAANIAJADQAeAGAQAKQAXANAAAcQAAAXgUAMQgQAKgYAAQgTAAgQgHg");
	this.shape_17.setTransform(-55,328.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("Ag2BAIAAhhIABgOIAAgOQAAgOANAAQANAAABAXQAagaAgAAQALAAAGAJQAGAIAAASIAAAKQgBARgOAAQgMAAAAgOIAAgKIgBgMQgWADgLAKQgNAJgIATIAABLQAAAPgOAAQgNAAAAgPg");
	this.shape_18.setTransform(216.1,286.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAfBDQgRAJgWAAQgSAAgMgIQgOgJgCgRQgGgmAAgbQAAgUAEgYQACgNAMAAQAGAAAEAEQAEAEAAAGIgCAVIgCAWQAAAXACAPQABARADAKIAKAEIAIACQARAAAWgHIgBgcIAAgaQAAgeADgXQABgNANAAQAGAAAEAEQAEAEAAAGIgDA2IAAAcIAAAfIABAJIAAAKQAAAGgEAEQgEAEgGAAQgLAAgDgOg");
	this.shape_19.setTransform(201.2,286.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgpA8QgTgUgBghQgBgeARgYQAUgdAhAAQAdAAAOAaQAMAVgBAdQAAAegQAWQgSAZgcAAQgYAAgRgRgAgYgcQgJAQAAATQAAAVALALQAJAKANAAQANAAAKgLQAMgMABgUQACg1gfAAQgTAAgMATg");
	this.shape_20.setTransform(185.7,286.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AglBuQgEgEAAgFQAAgPAfhDIgzhgIgGgKQgEgHAAgEQAAgGAEgEQAFgFAFAAQAHAAADAFQAYAiAaA9IAVgwQALgaALgSQAEgIAIAAQAFAAAFAEQAEAEAAAGQAAADgCAEIgxBoQgSAngHAaIgKAbQgDAKgJAAQgGAAgFgEg");
	this.shape_21.setTransform(170.4,290.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AglBuQgEgEAAgFQAAgPAfhDIgzhgIgGgKQgEgHAAgEQAAgGAEgEQAFgFAFAAQAHAAADAFQAYAiAaA9IAVgwQALgaALgSQAEgIAIAAQAFAAAFAEQAEAEAAAGQAAADgCAEIgxBoQgSAngHAaIgKAbQgDAKgJAAQgGAAgFgEg");
	this.shape_22.setTransform(146.6,290.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("Ag2BAIAAhhIABgOIAAgOQAAgOANAAQANAAABAXQAagaAgAAQALAAAGAJQAGAIAAASIAAAKQgBARgOAAQgMAAAAgOIAAgKIgBgMQgWADgLAKQgNAJgIATIAABLQAAAPgOAAQgNAAAAgPg");
	this.shape_23.setTransform(132.9,286.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("Ag2BAIAAhhIABgOIAAgOQAAgOANAAQANAAABAXQAagaAgAAQALAAAGAJQAGAIAAASIAAAKQgBARgOAAQgMAAAAgOIAAgKIgBgMQgWADgLAKQgNAJgIATIAABLQAAAPgOAAQgNAAAAgPg");
	this.shape_24.setTransform(119,286.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAtBIQgHgGgDgEIgYALQgKADgFAAQghAAgPgSQgPgSAAgkQAAggAYgZQAYgYAeAAQANAAAPAGQATAIAAALQAAAEgDADQgBAGgBAMIgBAdQAAASADAKIAJAZIADAIIABACQAAAGgEADQgEAEgFAAQgDAAgHgGgAgXgiQgQASAAAVQAAAXAJAMQAIAMAQAAQAMAAAJgFIAPgLQgFgkAAgSIABgNIACgQIgJgEIgGgBQgUAAgQASg");
	this.shape_25.setTransform(104.2,286.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgnA+QgVgTABgeQAAgbASgeQAWgiAYAAQAOAAASAGQAVAJAAAMQAAAFgDAEQgEAEgFAAQgEAAgEgCIgGgFQgHgHgUAAQgMAAgPAaQgMAYAAAPQAAATAMAKQANALAQAAQAJAAAKgFIAPgJIAHgCQAFAAAEAEQAEAEAAAGQgBAKgVAKQgTAIgNAAQgbAAgTgRg");
	this.shape_26.setTransform(89.4,286.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("Ag9BoQgEgFAAgGQAAgGAEgEQAEgEAGAAQAJAAAVgDQACgMAAgOIgBgYIgBgYQAAgfAEgxIgSABIgTAAQgGAAgEgEQgEgEAAgGQAAgNANgCIArgBQAaAAArAGQAMACAAANQAAAHgEAEQgFADgFAAQgJAAgOgCIgXgCQgDApAAAjIAAAZIABAYIgBAYIAtAAQAGAAAEAEQAEAEAAAGQAAAHgEAEQgEAEgGAAIgYAAIgYABQgHAAgTACQgTADgJAAQgGAAgEgEg");
	this.shape_27.setTransform(65.3,283);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF0000").s().p("AgPBmIACgzIACgzIAAgyIABgzQAAgPAMAAQAOAAAAAPIgBAzIgBAyIgCBGIgBAhQgBAOgLgBQgOAAAAgOg");
	this.shape_28.setTransform(44.7,282.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF0000").s().p("AgPBmIACgzIACgzIAAgyIABgzQAAgPAMAAQAOAAAAAPIgBAzIgBAyIgCBGIgBAhQgBAOgLgBQgOAAAAgOg");
	this.shape_29.setTransform(36.8,282.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF0000").s().p("AgMBmQgFgEAAgGIAAgaIgBgZIACghIABgfQAAgHAEgEQAEgEAGAAQAEAAAEAEQAEAEAAAHIgCAfIgBAhIAAAZIABAaQAAAGgDAEQgEAEgFAAQgGAAgDgEgAgIhNQgFgFAAgGQAAgHAFgFQAFgFAEAAQAHAAAGAFQAEAFAAAHQAAAGgEAFQgGAFgHAAQgEAAgFgFg");
	this.shape_30.setTransform(29,282.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF0000").s().p("AAfBvQgFgFAAgGQgHgRgCgLIgLg9QgGgkgBgXQgNAvgOAeQgRAmgFAVQACADAAADQAAAHgGAEQgFAEgHAAQgTAAAAgRIgEgSIgQhGQgJghgWhCIgBgFQAAgNAPAAQAJAAAFAKQADAFAHAYQAJAaAIAkIAOA8QAPgjAPgwIAOgrQANgfAKAAQAKAAAEAKQAFAMAFAuQADAXAHAfIAMA3QATgtAchMIAHgbQAEgQAGgJQAGgIAIAAQAOAAAAAOIgEAOIgGAPIgIAaIgqBkQgGARgOAgQgFAJgKAAQgHAAgFgDg");
	this.shape_31.setTransform(10.2,283.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF0000").s().p("Ag5B1QgEgDAAgFIABgFQALgfAeg5QAdg3ALgfQATgyAJAAQAFAAAEAEQAEADAAAFIgBAIIgQAnQgKAagRAiIgdA5IgaA5QgEAIgHAAQgFAAgEgEg");
	this.shape_32.setTransform(-13,282.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF0000").s().p("AgPBmIACgzIACgzIAAgyIABgzQAAgPAMAAQAOAAAAAPIgBAzIgBAyIgCBGIgBAhQgBAOgLgBQgOAAAAgOg");
	this.shape_33.setTransform(-24.3,282.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF0000").s().p("AgPBmIACgzIACgzIAAgyIABgzQAAgPAMAAQAOAAAAAPIgBAzIgBAyIgCBGIgBAhQgBAOgLgBQgOAAAAgOg");
	this.shape_34.setTransform(-32.3,282.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF0000").s().p("AAtBIQgHgGgDgEIgYALQgKADgFAAQghAAgPgSQgPgSAAgkQAAggAYgZQAYgYAeAAQANAAAPAGQATAIAAALQAAAEgDADQgBAGgBAMIgBAdQAAASADAKIAJAZIADAIIABACQAAAGgEADQgEAEgFAAQgDAAgHgGgAgXgiQgQASAAAVQAAAXAJAMQAIAMAQAAQAMAAAJgFIAPgLQgFgkAAgSIABgNIACgQIgJgEIgGgBQgUAAgQASg");
	this.shape_35.setTransform(-43.7,286.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF0000").s().p("AAmBqQgDgLgDgVQgDgVAAgNIABgLIAAgMQAAgYgNAAQgRAAgNAOQgIAIgMAYQAAA2gEAKQgFAJgIAAQgGAAgEgFQgFgEABgFIABgGQABgDAAgSIABgVIAAhmIABgXIgBgOQgBgHgBgGQAAgHAEgDQAFgFAGAAQALAAACANQACAOAAALIgBAfQAAAPAAAQIAAANQAMgQANgIQALgIAPAAQAXABAJAPQAHALAAAXIACAbIADAdQABARADAMIAAAFQAAAFgEAFQgEADgGAAQgKAAgDgLg");
	this.shape_36.setTransform(-59.3,282.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF0000").s().p("Ag4BhQgagMAAgVQAAgGADgEQAFgDAGAAQAGAAAGAHQAHALAGAEQAMAIAXAAQAUAAATgKQAXgMAAgVQAAgSgUgLQgQgIgYgBQgXAAgPgIQgUgLAAgWQAAgZAcgVQAcgTAbAAQAOAAARAEQAXAGAAAKQAAAMgNAAQgFAAgOgDQgPgDgIAAQgTABgQAKQgQALAAAQQAAALAVAFQAIACAUACQAhACASASQAQAOAAAYQAAAigfAUQgaARgjAAQgZAAgWgKg");
	this.shape_37.setTransform(-77.7,283.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgLAMQgFgFAAgHQAAgFAFgGQAFgFAGAAQAHAAAFAFQAFAGAAAFQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_38.setTransform(169.7,335.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAmBqQgDgLgDgVQgCgVAAgNIAAgLIAAgMQAAgYgNAAQgRAAgNAOQgIAJgMAXQAAA2gFAKQgDAJgJAAQgFAAgFgFQgFgEAAgFIACgGQABgEABgRIAAgVIAAhmIABgXIgBgOQgBgHAAgGQAAgHADgDQAFgFAFAAQANAAACANQACAOAAALIgBAfQgBAQAAAPIAAANQALgQAOgIQALgIAPAAQAYAAAIAPQAGAMABAXIABAbIADAdQACARADANIAAADQAAAGgDAEQgFAEgGABQgKAAgDgMg");
	this.shape_39.setTransform(129.3,324.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAIApIgFghIgDgeIgMAZIgVA7QgCAFgEADQgEAIgJAAQgLAAgKgqQgFgWgFgkIgEgVIgBgVQAAgGAEgEQAEgEAGAAQALAAACAMIADAVIACAUIAJA+QAPgqARg5QAFgPAKgBQALAAAEASIAJAzQAFAiAFAUIAKgmIAShMQADgJAKAAQAGAAAEAFQAEADAAAHIgBAGQgLAugSA4QgEANgJANQgFAIgJAAQgPgBgJglg");
	this.shape_40.setTransform(110.9,329);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgwA9QgVgSAAggQAAgjASgZQATgbAgAAQAWAAAPAIQASAKAAAUQAAAOgQAMQgHAFgXAJIg0AZQAIAMAMAGQAMAGAOAAQAJAAANgEQARgEAFgIQAFgHAFAAQAFAAAEADQAEAEAAAFQAAAQgaALQgVAKgUAAQgfAAgUgQgAgdglQgKAOgHAYIAsgSQAXgNALgJQgMgLgUAAQgRAAgMANg");
	this.shape_41.setTransform(70.6,328.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgIBkQgEgEAAgGIAAgQIABgQIgDhRIgfgCQgNgCAAgMQAAgHAEgDQAEgEAGgBIAdADIAAgTIgBgSQAAgGAEgEQAEgEAGAAQALAAACAVIAAANIAAAIIAAAJIAUgDQAPAAAEACQAJADAAAKQAAAGgEAEQgEAEgGABIgHgBIgHAAIgTACIADBRIAAAHIAAAHQAAAfgPAAQgEAAgEgDg");
	this.shape_42.setTransform(41.9,326.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgHBTQgEgEAAgGQAAgSgDghQgDggAAgRQAAgPgFgIQgKAEgKALIgRASIgHAJIgBAXIgCAZIACAMIABALQAAAGgEAEQgFADgGAAQgQAAAAgkIACgZIABgYIgBgWIgBgXQAAggAOAAQAGAAAEAFQAFAFAAAFIgBAJIAAAIIAAAPQAHgPAPgMQAOgMAKAAQAWAAAGAWQAIgLALgFQALgFAOAAQAXAAAJAZQACAGAEAiQAEAXAGA4QAAAGgEAEQgEAEgGAAQgMAAgCgMIgFgsIgFgqQgBgKgEgJQgEgNgGAAQgFAAgPAJQgNAIgEAFIAAAbIAFAkQACAWAAAPQAAAGgEAEQgEAEgGAAQgEAAgEgEg");
	this.shape_43.setTransform(9.1,328.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAiBEIgEgfQgCgQAAgPIAAgLIABgNQAAgfgLAAQgQAAgNATQgNARgHAYIgBAOIgBAOIABANIAAAMQAAAHgDAEQgEAEgGAAQgGAAgFgEQgDgEAAgHIgBgMIgBgNIACgnIACgoIgBgOIAAgNQAAgGAFgEQADgEAGAAQANAAABATIABAQQAXggAYAAQAXAAAIAUQAHAOAAAaIAAAOIAAALQAAAMADATQADASAAAMQAAAGgEAEQgEAEgGAAQgNAAgBgOg");
	this.shape_44.setTransform(-33.5,328.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAIAoIgFggIgDgeIgMAZIgVA7QgCAFgEADQgEAIgJAAQgLABgKgrQgFgWgFgkIgEgVIgBgVQAAgGAEgEQAEgEAGAAQALAAACAMIADAVIACAUIAJA+QAPgqARg4QAFgQAKgBQALAAAEASIAJAzQAFAiAFAUIAKgmIAShMQADgJAKAAQAGAAAEAFQAEADAAAHIgBAGQgLAugSA4QgEANgJAOQgFAHgJAAQgPgBgJgmg");
	this.shape_45.setTransform(200.6,286.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgvA9QgWgSAAggQAAgjARgZQAUgbAgAAQAWAAAPAIQASAKAAAUQAAAOgQAMQgHAFgXAJIg0AZQAIAMAMAGQAMAGANAAQAKAAANgEQARgEAFgIQAFgHAFAAQAFAAAEADQAEAEAAAFQAAAQgaALQgVAKgVAAQgeAAgTgQgAgcglQgMAOgFAYIArgSQAXgNAMgJQgMgLgVAAQgRAAgLANg");
	this.shape_46.setTransform(160.3,286.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAmBqQgDgLgDgVQgCgVgBgNIABgLIAAgMQAAgYgNAAQgRAAgNAOQgIAIgMAYQAAA2gEAKQgFAJgIAAQgGAAgEgFQgFgEABgFIABgGQABgDABgSIAAgVIAAhmIABgXIgBgOQgCgHABgGQAAgHADgDQAFgFAFAAQANAAACANQABAOAAALIgBAfQgBAPABAQIAAANQALgQAOgIQALgIAPAAQAXABAJAPQAGALABAXIABAbIAEAdQABARADAMIAAAFQAAAFgDAFQgFADgGAAQgKAAgDgLg");
	this.shape_47.setTransform(143.9,282.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgIBkQgEgFAAgFIAAgQIABgQIgDhRIgfgCQgNgCAAgMQAAgGAEgEQAEgFAGAAIAdADIAAgUIgBgRQAAgGAEgEQAEgEAGAAQALAAACAVIAAANIAAAIIAAAJIAUgDQAPAAAEABQAJAEAAAKQAAAHgEADQgEAEgGABIgHgBIgHAAIgTACIADBRIAAAHIAAAHQAAAfgPAAQgEAAgEgDg");
	this.shape_48.setTransform(119.8,283.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgwA9QgVgSAAggQAAgjASgZQATgbAgAAQAWAAAPAIQASAKAAAUQAAAOgQAMQgHAFgXAJIg0AZQAIAMAMAGQAMAGAOAAQAJAAANgEQARgEAFgIQAFgHAFAAQAFAAAEADQAEAEAAAFQAAAQgZALQgWAKgUAAQgeAAgVgQgAgdglQgLAOgGAYIAsgSQAYgNAKgJQgMgLgUAAQgRAAgMANg");
	this.shape_49.setTransform(105.4,286.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgwBuQgSgEAAgLQAAgNAMAAIASADQAMACAOgBQAZAAAKgaQAHgRABgkQgIAOgKAIQgLAGgMAAQgZAAgRgRQgPgRAAgbQgBglAWgYQAXgYAlAAQAOAAAIADQAJAEAFAGQAPABAAAQQAAALgDAQIgEAbIgDAtQgBAdgFASQgGAXgOAKQgRAOgfAAQgSAAgNgCgAgZhGQgNARAAAZQAAAVAIAJQAIAKAPAAQANAAANgOQAMgPACgOIAGgxQgFgEgHgCQgFgDgHAAQgZABgPASg");
	this.shape_50.setTransform(89.2,290.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FF0000").s().p("AgMBmQgFgEAAgGIAAgaIgBgZIACghIABgfQAAgHAEgEQAEgEAGAAQAEAAAEAEQAEAEAAAHIgCAfIgBAhIAAAZIABAaQAAAGgDAEQgEAEgFAAQgGAAgDgEgAgIhNQgFgFAAgGQAAgHAFgFQAFgFAFAAQAHAAAFAFQAEAFAAAHQAAAGgEAFQgFAFgHAAQgFAAgFgFg");
	this.shape_51.setTransform(53.4,282.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FF0000").s().p("AAIAoIgFggIgDgeIgMAZIgVA7QgCAFgEADQgEAIgJAAQgLABgKgrQgFgWgFgkIgEgVIgBgVQAAgGAEgEQAEgEAGAAQALAAACAMIADAVIACAUIAJA+QAPgqARg4QAFgQAKgBQALAAAEASIAJAzQAFAiAFAUIAKgmIAShMQADgJAKAAQAGAAAEAFQAEADAAAHIgBAGQgLAugSA4QgEANgJAOQgFAHgJAAQgPgBgJgmg");
	this.shape_52.setTransform(39.2,286.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FF0000").s().p("AAmBqQgDgLgDgVQgCgVgBgNIABgLIAAgMQAAgYgNAAQgRAAgNAOQgIAIgMAYQAAA2gFAKQgDAJgJAAQgFAAgFgFQgFgEAAgFIACgGQABgDABgSIAAgVIAAhmIABgXIgBgOQgBgHAAgGQAAgHADgDQAFgFAFAAQANAAACANQACAOAAALIgBAfQgBAPAAAQIAAANQALgQAOgIQALgIAPAAQAYABAIAPQAGALABAXIABAbIADAdQACARADAMIAAAFQAAAFgDAFQgFADgGAAQgKAAgDgLg");
	this.shape_53.setTransform(-24.6,282.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FF0000").s().p("AgnBOQgVgHAAgPQAAgFAFgEQADgFAHAAQAEAAAHAHQADADAMACQAJACAHAAQAKAAAJgDQANgEAAgJQAAgTgbgHIgMgDQgUgEgHgGQgMgGAAgQQAAgdAcgNQAJgEAQgFIAbgJQAGgCAHgBQAGAAAEAEQAEAEgBAHIADAMIABALQAAAHgEAEQgDAEgHAAQgHAAgEgGQgCgDgBgLIghAKQgVAIAAANIAIADQAfAGAQAKQAXANAAAcQAAAXgUAMQgRAKgXAAQgSAAgSgHg");
	this.shape_54.setTransform(-40.6,285.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgvA9QgWgSAAggQAAgjARgZQAUgbAgAAQAWAAAPAIQASAKAAAUQAAAOgQAMQgHAFgXAJIg0AZQAIAMAMAGQALAGAPAAQAJAAANgEQARgEAFgIQAEgHAGAAQAFAAAEADQAEAEAAAFQAAAQgaALQgVAKgUAAQgfAAgTgQgAgdglQgKAOgHAYIAsgSQAXgNALgJQgLgLgVAAQgRAAgMANg");
	this.shape_55.setTransform(-63.6,286.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAmBqQgDgLgDgVQgDgVAAgNIABgLIAAgMQAAgYgNAAQgRAAgNAOQgIAIgMAYQAAA2gEAKQgFAJgIAAQgGAAgEgFQgFgEABgFIABgGQABgDAAgSIABgVIAAhmIABgXIgBgOQgBgHgBgGQAAgHAEgDQAFgFAGAAQALAAACANQACAOAAALIgBAfQAAAPAAAQIAAANQAMgQANgIQALgIAPAAQAXABAJAPQAHALAAAXIACAbIADAdQABARADAMIAAAFQAAAFgEAFQgEADgGAAQgKAAgDgLg");
	this.shape_56.setTransform(-80,282.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("Ag4BhQgagMAAgVQAAgGADgEQAFgDAGAAQAGAAAGAHQAHALAGAEQAMAIAXAAQAUAAATgKQAXgMAAgVQAAgSgUgLQgQgIgYgBQgXAAgPgIQgUgLAAgWQAAgZAcgVQAcgTAbAAQAOAAARAEQAXAGAAAKQAAAMgNAAQgFAAgOgDQgPgDgIAAQgTABgQAKQgQALAAAQQAAALAVAFQAIACAUACQAhACASASQAQAOAAAYQAAAigfAUQgaARgjAAQgZAAgWgKg");
	this.shape_57.setTransform(-98.4,283.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("Ag/BJQgPgeAAgvQAAgpAUgfQAXgjAmAAQAlAAAVAfQASAcAAAnQAAA+gUAgQgVAfgmAAQgrAAgUgngAglg5QgNAWAAAdQAAAsAMAYQANAXAZAAQAcAAANgiQAJgYAAgjQAAgmgMgTQgMgTgXAAQgZAAgPAbg");
	this.shape_58.setTransform(152.6,325);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("Ag/BJQgPgeAAgvQAAgpAUgfQAXgjAmAAQAlAAAVAfQASAcAAAnQAAA+gUAgQgVAfgmAAQgrAAgUgngAglg5QgNAWAAAdQAAAsAMAYQANAXAZAAQAcAAANgiQAJgYAAgjQAAgmgMgTQgMgTgXAAQgZAAgPAbg");
	this.shape_59.setTransform(134.9,325);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgHBDQgEgEAAgHIgBgIIgBgHQAAgGAFgEQAEgEAEAAQAQAAAAAdQAAAHgEAEQgEAEgHAAQgEAAgEgEgAgJgjQgFgEAAgGIAAgFIgBgGQAAgGAEgEQAFgEAGAAQANAAAAAZQAAAGgDAEQgFAEgFAAQgFAAgEgEg");
	this.shape_60.setTransform(121.7,326.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("Ag3BYQgOgWAAglQAAhEA5g0IAMgNQAJgKAFAAQAFAAAFAFQAEADAAAGQAAAFgOAPIgbAcQgMALgIAYQAMgGAKgCQAJgDAEAAQAhAAASASQARAPAAAgQAAAigTAWQgUAWgfAAQglAAgSgbgAgWADIgTALIAAAPQAAAZAIAQQALAUAWAAQAUAAAMgPQALgOAAgYQAAgTgMgKQgLgIgUAAQgMAAgKADg");
	this.shape_61.setTransform(108.4,325.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgmBOQgWgHAAgPQAAgFAFgEQAEgFAFAAQAFAAAGAHQAEADAMACQAJACAHAAQAKAAAJgDQANgEAAgJQAAgTgbgHIgMgDQgTgFgIgFQgMgGABgQQgBgeAcgMQAIgEASgFIAagJQAGgCAGgBQAHAAAEAFQADADABAHIABALIACAMQAAAHgDAEQgFAEgFAAQgIAAgEgGQgCgDgBgLIghAKQgVAIAAANIAJADQAeAGAQAKQAXANAAAcQAAAXgUAMQgQAKgYAAQgTAAgQgHg");
	this.shape_62.setTransform(46.7,328.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AAmBqQgDgLgDgVQgDgVABgNIAAgLIAAgMQAAgYgNAAQgRAAgNAOQgHAJgNAXQAAA2gFAKQgDAJgJAAQgGAAgEgFQgEgEgBgFIACgGIABgVIABgVIAAhmIABgXIgBgOQgCgHAAgGQAAgHAFgDQADgFAHAAQAMAAABANQADAOAAALIgBAfQgCAQABAPIAAANQAMgQANgIQALgIAPAAQAYAAAIAPQAHAMABAXIABAbIACAdQACARADANIABADQAAAGgFAEQgEAEgGABQgKAAgDgMg");
	this.shape_63.setTransform(8.1,324.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgNBmQgDgEAAgGIgBgaIgBgZIACghIABgfQAAgHAEgEQAEgEAGAAQAEAAAEAEQAEAEAAAHIgBAfIgCAhIABAZIAAAaQAAAGgEAEQgEAEgEAAQgGAAgEgEgAgIhNQgFgFAAgGQAAgHAFgFQAFgFAFAAQAGAAAFAFQAFAFABAHQgBAGgFAFQgFAFgGAAQgFAAgFgFg");
	this.shape_64.setTransform(-17.9,325.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgwBuQgSgEAAgLQAAgNANAAIAQADQAMACAPgBQAZAAALgaQAGgRAAgkQgHAOgLAIQgKAGgLAAQgbAAgQgRQgPgRgBgbQAAglAXgYQAWgYAlAAQANAAAJADQAJAEAFAGQAPABAAAQQAAALgDAQIgEAbIgDAtQgBAdgFASQgGAXgOAKQgRAOgeAAQgTAAgNgCgAgZhGQgNARAAAZQAAAVAIAJQAHAKAQAAQAMAAAOgOQAMgPACgOIAGgxQgGgEgFgCQgHgDgGAAQgZABgPASg");
	this.shape_65.setTransform(224.7,290.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgpA8QgTgUgBghQgBgeARgYQAUgdAhAAQAdAAAOAaQAMAVgBAdQAAAegQAWQgSAZgcAAQgYAAgRgRgAgYgcQgJAQAAATQAAAVALALQAJAKANAAQANAAAKgLQAMgMABgUQACg1gfAAQgTAAgMATg");
	this.shape_66.setTransform(200.7,286.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgvA9QgWgSAAggQAAgjARgZQAUgbAgAAQAWAAAPAIQASAKAAAUQAAAOgQAMQgHAFgXAJIg0AZQAIAMAMAGQAMAGANAAQAKAAAOgEQAQgEAFgIQAEgHAGAAQAFAAAEADQAEAEAAAFQAAAQgaALQgVAKgVAAQgeAAgTgQgAgcglQgMAOgFAYIArgSQAYgNALgJQgMgLgVAAQgRAAgLANg");
	this.shape_67.setTransform(163.4,286.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgPBmIACgzIACgzIAAgyIABgzQAAgPAMAAQAOAAAAAPIgBAzIgBAyIgCBGIgBAhQgBAOgLgBQgOAAAAgOg");
	this.shape_68.setTransform(151.2,282.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgqBqQgFAGgGAAQgGAAgDgEQgEgDAAgGIABgLIAAgKIgBgtIgBgrIABgoIAAgnQgBgIAEgIQAEgIAJAAQALAAAAANIgBAFIgBAGIAAAfIAAAkQALgJAMgDQALgEAHgBQAfAAATAXQASAVAAAfQAAAhgVAWQgUAXgdAAQgXAAgRgIgAgVgGIgUANIgBAYIABAWIAAAXIATAIQAIADAMAAQASAAANgPQANgOAAgWQAAgVgKgOQgMgNgUAAQgJAAgMAGg");
	this.shape_69.setTransform(138.9,282.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgwA9QgVgSAAggQAAgjASgZQATgbAgAAQAWAAAPAIQASAKAAAUQAAAOgQAMQgHAFgXAJIg0AZQAIAMAMAGQALAGAOAAQAKAAAOgEQAQgEAFgIQAEgHAGAAQAFAAAEADQAEAEAAAFQAAAQgZALQgWAKgVAAQgdAAgVgQgAgdglQgKAOgGAYIArgSQAYgNAKgJQgLgLgVAAQgRAAgMANg");
	this.shape_70.setTransform(98.8,286.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgqBqQgFAGgGAAQgGAAgDgEQgEgDAAgGIAAgLIAAgKIAAgtIgBgrIABgoIAAgnQAAgIADgIQAFgIAIAAQALAAAAANIgBAFIgBAGIAAAfIAAAkQAMgJALgDQALgEAIgBQAeAAATAXQASAVAAAfQAAAhgVAWQgUAXgdAAQgXAAgRgIgAgVgGIgUANIgBAYIABAWIAAAXIATAIQAIADAMAAQASAAANgPQANgOAAgWQAAgVgLgOQgLgNgTAAQgKAAgMAGg");
	this.shape_71.setTransform(82.3,282.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgwA9QgVgSAAggQAAgjASgZQATgbAgAAQAWAAAPAIQASAKAAAUQAAAOgQAMQgHAFgXAJIg0AZQAIAMAMAGQAMAGANAAQAKAAAOgEQAQgEAFgIQAEgHAGAAQAFAAAEADQAEAEAAAFQAAAQgZALQgWAKgVAAQgdAAgVgQgAgcglQgMAOgFAYIArgSQAYgNALgJQgNgLgUAAQgRAAgLANg");
	this.shape_72.setTransform(57.1,286.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AAmBqQgDgLgDgVQgCgVgBgNIABgLIAAgMQAAgYgNAAQgRAAgNAOQgIAIgMAYQAAA2gFAKQgDAJgJAAQgFAAgFgFQgFgEAAgFIACgGQABgDABgSIAAgVIAAhmIABgXIgBgOQgBgHAAgGQAAgHADgDQAFgFAFAAQANAAACANQACAOAAALIgBAfQgBAPAAAQIAAANQAMgQANgIQALgIAPAAQAYABAIAPQAGALABAXIABAbIADAdQACARADAMIABAFQgBAFgDAFQgFADgGAAQgKAAgDgLg");
	this.shape_73.setTransform(40.7,282.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FF0000").s().p("AgNBmQgDgEAAgGIgBgaIAAgZIABghIABgfQAAgHAEgEQAEgEAGAAQAEAAAEAEQAEAEAAAHIgBAfIgCAhIABAZIAAAaQAAAGgEAEQgEAEgEAAQgGAAgEgEgAgIhNQgFgFAAgGQAAgHAFgFQAFgFAFAAQAGAAAFAFQAGAFAAAHQAAAGgGAFQgFAFgGAAQgFAAgFgFg");
	this.shape_74.setTransform(3.8,282.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FF0000").s().p("AAmBqQgDgLgDgVQgDgVABgNIAAgLIAAgMQAAgYgNAAQgRAAgNAOQgHAIgNAYQAAA2gFAKQgDAJgJAAQgFAAgFgFQgEgEgBgFIACgGQABgDABgSIAAgVIAAhmIABgXIgBgOQgCgHAAgGQABgHAEgDQAEgFAFAAQAMAAADANQACAOAAALIgBAfQgBAPAAAQIAAANQAMgQANgIQALgIAPAAQAYABAIAPQAGALACAXIAAAbIADAdQACARADAMIABAFQAAAFgFAFQgEADgGAAQgKAAgDgLg");
	this.shape_75.setTransform(-84.5,282.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FF0000").s().p("Ag4BhQgagMgBgVQAAgGAFgEQAEgDAGAAQAGAAAGAHQAHALAGAEQAMAIAXAAQAUAAASgKQAZgMAAgVQAAgSgVgLQgRgIgXgBQgWAAgQgIQgUgLAAgWQAAgZAcgVQAcgTAbAAQANAAASAEQAXAGAAAKQAAAMgNAAQgGAAgOgDQgOgDgHAAQgVABgPAKQgQALAAAQQAAALAVAFQAIACAUACQAgACATASQARAOAAAYQAAAiggAUQgbARgiAAQgZAAgWgKg");
	this.shape_76.setTransform(-103,283.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgLAMQgFgFAAgHQAAgFAFgFQAFgGAGAAQAHAAAFAGQAFAFAAAFQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_77.setTransform(262.4,333.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgxBgQgUgUAAggQAAglAUgVQAUgWAegBQAQAAAJAGIAOAJQACg7ACgVQACgMALAAQANAAAAANQAAATgGBEIgBAnQAAAwAEAYIAAADQAAAGgEAEQgEADgFAAQgJAAgEgMQgKAHgLAEQgLADgKAAQgdAAgTgTgAggACQgMAOAAAcQAAASANAOQANANARAAQAKAAAIgEQAFgDALgJIAEgFIAAgZIAAgPIAAgRQgFgLgJgEQgJgHgNAAQgVAAgMANg");
	this.shape_78.setTransform(220.1,323.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgPBmIACg0IACgyIAAgyIABgzQAAgOAMAAQAOAAAAAOIgBAzIgBAyIgCBGIgBAgQgBAOgLABQgOAAAAgPg");
	this.shape_79.setTransform(199.1,322.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgPBmIACg0IACgyIAAgyIABgzQAAgOAMAAQAOAAAAAOIgBAzIgBAyIgCBGIgBAgQgBAOgLABQgOAAAAgPg");
	this.shape_80.setTransform(191.1,322.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AAIAoIgFghIgDgdIgMAZIgVA6QgCAGgEACQgEAJgJAAQgLAAgKgqQgFgWgFgkIgEgVIgBgVQAAgGAEgEQAEgEAGAAQALAAACAMIADAUIACAWIAJA9QAPgpARg5QAFgRAKABQALAAAEARIAJAzQAFAiAFAUIAKgnIAShLQADgIAKAAQAGAAAEADQAEAFAAAFIgBAHQgLAugSA4QgEANgJAOQgFAHgJAAQgPAAgJgng");
	this.shape_81.setTransform(153.8,327.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgvA9QgWgSAAggQAAgjARgZQAUgbAgAAQAWAAAPAIQASAKAAAUQAAAOgQAMQgHAFgXAJIg0AZQAIAMAMAGQALAGAPAAQAJAAANgEQARgEAFgIQAEgHAGAAQAFAAAEADQAEAEAAAFQAAAQgaALQgVAKgUAAQgfAAgTgQgAgcglQgMAOgGAYIAsgSQAXgNAMgJQgMgLgVAAQgRAAgLANg");
	this.shape_82.setTransform(136.1,326.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgnA+QgVgTAAgeQABgbASgeQAWgiAZAAQANAAARAGQAWAJAAAMQAAAFgEAEQgDAEgFAAQgFAAgDgCIgFgFQgJgHgSAAQgNAAgPAaQgMAYAAAPQAAATAMAKQANALAQAAQAJAAAKgFIAQgJIAGgCQAFAAAEAEQAEAEAAAGQgBAKgVAKQgTAIgNAAQgbAAgTgRg");
	this.shape_83.setTransform(106.6,326.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AAiBEIgEgfQgCgQAAgPIABgLIAAgNQAAgfgLAAQgQAAgMATQgNARgIAYIgBAOIgBAOIABANIABAMQAAAHgEAEQgEAEgGAAQgHAAgDgEQgEgEAAgHIgBgMIgBgNIACgnIACgoIAAgOIgBgNQAAgGAEgEQAEgEAGAAQANAAACATIAAAQQAXggAYAAQAXAAAJAUQAFAOABAaIAAAOIAAALQAAAMADATQADASAAAMQAAAGgEAEQgEAEgGAAQgNAAgBgOg");
	this.shape_84.setTransform(83.1,326.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgNBmQgDgEAAgGIgBgaIAAgZIABghIABgfQAAgHAEgEQAEgEAGAAQAEAAAEAEQAEAEAAAHIgCAfIgBAhIABAZIAAAaQAAAGgDAEQgFAEgEAAQgGAAgEgEgAgIhNQgFgFAAgGQAAgHAFgFQAFgFAEAAQAIAAAEAFQAGAFgBAHQABAGgGAFQgEAFgIAAQgEAAgFgFg");
	this.shape_85.setTransform(56.2,323.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgIBjQgEgEAAgFIAAgQIABgQIgDhRIgfgCQgNgCAAgMQAAgGAEgFQAEgEAGAAIAdACIAAgTIgBgRQAAgGAEgEQAEgEAGAAQALAAACAVIAAAMIAAAJIAAAIIAUgCQAPAAAEABQAJADAAALQAAAGgEAFQgEADgGAAIgHAAIgHAAIgTACIADBSIAAAGIAAAHQAAAfgPAAQgEAAgEgEg");
	this.shape_86.setTransform(44.9,324.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgnA+QgVgTABgeQAAgbASgeQAWgiAYAAQAOAAASAGQAVAJAAAMQAAAFgDAEQgEAEgFAAQgFAAgDgCIgGgFQgHgHgUAAQgMAAgPAaQgMAYAAAPQAAATAMAKQANALAQAAQAJAAAKgFIAPgJIAHgCQAFAAAEAEQADAEAAAGQAAAKgVAKQgTAIgNAAQgbAAgTgRg");
	this.shape_87.setTransform(30.8,326.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgIBjQgEgEAAgFIAAgQIABgQIgDhRIgfgCQgNgCAAgMQAAgGAEgFQAEgEAGAAIAdACIAAgTIgBgRQAAgGAEgEQAEgEAGAAQALAAACAVIAAAMIAAAJIAAAIIAUgCQAPAAAEABQAJADAAALQAAAGgEAFQgEADgGAAIgHAAIgHAAIgTACIADBSIAAAGIAAAHQAAAfgPAAQgEAAgEgEg");
	this.shape_88.setTransform(-12.7,324.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgmBPQgWgJAAgOQAAgGAFgEQADgEAHAAQAEAAAGAHQAEADAMACQAKACAGAAQAKAAAJgDQANgEAAgJQAAgTgbgHIgMgEQgUgEgHgFQgLgGAAgQQAAgeAbgMQAIgEASgFQASgFAIgEQAGgCAGAAQAHAAAEADQAEAEAAAGIACANIABAMQAAAGgDAEQgFAEgGAAQgIAAgDgFQgCgEgBgMIghAKQgVAKAAANIAJACQAeAGAQAKQAXANAAAcQAAAXgUAMQgQAKgYAAQgSgBgRgFg");
	this.shape_89.setTransform(-26.9,326.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AAiBEIgEgfQgCgQAAgPIAAgLIABgNQAAgfgLAAQgQAAgMATQgNARgIAYIgBAOIgBAOIABANIAAAMQAAAHgDAEQgEAEgGAAQgGAAgEgEQgEgEAAgHIgBgMIgBgNIACgnIACgoIAAgOIgBgNQAAgGAEgEQAEgEAGAAQANAAACATIAAAQQAYggAXAAQAWAAAKAUQAFAOABAaIAAAOIAAALQAAAMADATQADASAAAMQAAAGgEAEQgEAEgGAAQgMAAgCgOg");
	this.shape_90.setTransform(-40.8,326.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgnA+QgVgTABgeQAAgbASgeQAWgiAYAAQAOAAASAGQAVAJAAAMQAAAFgDAEQgEAEgFAAQgFAAgDgCIgGgFQgHgHgUAAQgMAAgPAaQgMAYAAAPQAAATAMAKQANALAQAAQAJAAAKgFIAPgJIAHgCQAFAAAEAEQADAEAAAGQAAAKgVAKQgTAIgNAAQgbAAgTgRg");
	this.shape_91.setTransform(-71.4,326.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgwA9QgVgSAAggQAAgjASgZQATgbAgAAQAWAAAPAIQASAKAAAUQAAAOgQAMQgHAFgXAJIg0AZQAIAMAMAGQAMAGANAAQAKAAAOgEQAQgEAFgIQAFgHAFAAQAFAAAEADQAEAEAAAFQAAAQgZALQgWAKgVAAQgdAAgVgQgAgdglQgKAOgHAYIAsgSQAYgNAKgJQgMgLgUAAQgRAAgMANg");
	this.shape_92.setTransform(-95.2,326.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AAmBrQgDgMgDgWQgDgUABgNIAAgMIAAgLQAAgYgNAAQgRAAgNAOQgHAIgNAYQAAA2gFAKQgDAJgJgBQgGAAgEgEQgEgDgBgGIACgGIABgVIABgVIAAhmIABgYIgBgNQgCgGAAgIQAAgFAFgFQADgDAHAAQAMAAABAMQADAOAAALIgBAfQgCAPABAQIAAAMQAMgPANgIQALgHAPAAQAYgBAIAQQAHAKABAYIABAbIACAeQACAQADAMIABAFQAAAFgFAFQgEADgGAAQgKABgDgLg");
	this.shape_93.setTransform(-111.6,323.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgIBjQgEgEAAgFIAAgQIABgQIgDhRIgfgCQgNgCAAgMQAAgGAEgFQAEgEAGAAIAdACIAAgTIgBgRQAAgGAEgEQAEgEAGAAQALAAACAVIAAAMIAAAJIAAAIIAUgCQAPAAAEABQAJADAAALQAAAGgEAFQgEADgGAAIgHAAIgHAAIgTACIADBSIAAAGIAAAHQAAAfgPAAQgEAAgEgEg");
	this.shape_94.setTransform(-127.1,324.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AAmBrQgDgMgDgWQgCgUgBgNIABgMIAAgKQAAgZgNAAQgRAAgNAOQgIAJgMAXQAAA2gFAKQgEAJgIgBQgFAAgFgDQgFgEAAgGIACgGQABgEABgRIAAgVIAAhmIABgYIgBgNQgBgGAAgIQAAgFADgFQAEgDAGAAQANAAACAMQACAOgBALIAAAfQgCAPABAQIAAAMQALgPAOgIQALgHAPAAQAXgBAJAPQAGALABAYIABAbIAEAeQABAQADAMIAAAEQAAAGgDAFQgFADgGABQgKAAgDgLg");
	this.shape_95.setTransform(285.6,280.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgIBjQgEgDAAgGIAAgQIABgQIgDhRIgfgCQgNgCAAgMQAAgHAEgEQAEgDAGAAIAdABIAAgTIgBgRQAAgGAEgEQAEgEAGAAQALAAACAVIAAAMIAAAJIAAAIIAUgBQAPAAAEABQAJACAAALQAAAGgEAFQgEADgGAAIgHAAIgHAAIgTACIADBSIAAAGIAAAHQAAAfgPAAQgEAAgEgEg");
	this.shape_96.setTransform(270.1,282.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgNBmQgDgEAAgGIgBgaIAAgZIABghIABgfQAAgHAEgEQAEgEAGAAQAEAAAEAEQAEAEAAAHIgCAfIgBAhIABAZIAAAaQAAAGgDAEQgFAEgEAAQgGAAgEgEgAgIhNQgFgFAAgGQAAgHAFgFQAFgFAEAAQAIAAAEAFQAGAFgBAHQABAGgGAFQgEAFgIAAQgEAAgFgFg");
	this.shape_97.setTransform(259.6,281);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AAIAoIgFghIgDgdIgMAZIgVA6QgCAGgEACQgEAJgJAAQgLABgKgrQgFgWgFgjIgEgWIgBgVQAAgGAEgEQAEgEAGAAQALAAACAMIADAUIACAWIAJA9QAPgpARg6QAFgPAKAAQALAAAEARIAJAzQAFAiAFAUIAKgnIAShLQADgJAKABQAGAAAEADQAEAEAAAGIgBAHQgLAugSA4QgEANgJANQgFAIgJAAQgPAAgJgng");
	this.shape_98.setTransform(245.3,284.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgwBtQgSgDAAgMQAAgMAMAAIARACQANADAOAAQAZgBAKgZQAHgSAAgkQgHAPgLAGQgKAIgLAAQgaAAgQgSQgQgRgBgaQAAgnAXgXQAWgYAlAAQANAAAKAEQAIADAFAHQAPAAAAARQAAAJgDASIgEAaIgDAtQgBAdgFASQgGAXgOALQgRANgeAAQgTAAgNgDgAgZhGQgNARAAAaQAAAUAIAIQAHALAQAAQAMAAAOgOQAMgPACgPIAGgvQgGgFgFgCQgHgDgGABQgZAAgPASg");
	this.shape_99.setTransform(218.8,288.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AAiBEIgEgfQgCgQAAgPIABgLIAAgNQAAgfgLAAQgQAAgNATQgNARgHAYIgBAOIgBAOIABANIAAAMQAAAHgDAEQgEAEgGAAQgGAAgFgEQgDgEAAgHIgBgMIgBgNIACgnIACgoIgBgOIAAgNQAAgGAFgEQADgEAGAAQANAAABATIABAQQAYggAXAAQAXAAAIAUQAHAOAAAaIAAAOIAAALQAAAMADATQADASAAAMQAAAGgEAEQgEAEgGAAQgMAAgCgOg");
	this.shape_100.setTransform(204,284.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgNBmQgDgEAAgGIgBgaIAAgZIABghIABgfQAAgHAEgEQAEgEAGAAQAEAAAEAEQAEAEAAAHIgBAfIgCAhIABAZIAAAaQAAAGgEAEQgEAEgEAAQgGAAgEgEgAgIhNQgFgFAAgGQAAgHAFgFQAFgFAFAAQAGAAAFAFQAGAFAAAHQAAAGgGAFQgFAFgGAAQgFAAgFgFg");
	this.shape_101.setTransform(192.3,281);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AAlBrQgHgOgPgTIgXgiIgZASIgCAqQAAAHgEAEQgEAEgGAAQgOAAAAgTIACgkIABgjIABgvIAAgxIAAgPIgBgPQAAgGAEgEQAEgEAGAAQAGAAAEAEQAEAEAAAGIABAQIAAAPIgBAtIAAAwQATgPAQgQIAfgfQAFgGAFAAQAGABAEAEQAFAEAAAGQAAAFgFAFQgRAUgZAWIAeApQAWAeAAAJQAAAFgEAFQgFAEgGAAQgHAAgFgJg");
	this.shape_102.setTransform(181,280.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgpA8QgTgUgBghQgBgeARgYQAUgdAhAAQAdAAAOAaQAMAVgBAdQAAAegQAWQgSAZgcAAQgYAAgRgRgAgYgcQgJAQAAATQAAAVALALQAJAKANAAQANAAAKgLQAMgMABgUQACg1gfAAQgTAAgMATg");
	this.shape_103.setTransform(150.4,284.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AAIAoIgFghIgDgdIgMAZIgVA6QgCAGgEACQgEAJgJAAQgLABgKgrQgFgWgFgjIgEgWIgBgVQAAgGAEgEQAEgEAGAAQALAAACAMIADAUIACAWIAJA9QAPgpARg6QAFgPAKAAQALAAAEARIAJAzQAFAiAFAUIAKgnIAShLQADgJAKABQAGAAAEADQAEAEAAAGIgBAHQgLAugSA4QgEANgJANQgFAIgJAAQgPAAgJgng");
	this.shape_104.setTransform(133.2,284.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FF0000").s().p("AAiBEIgEgfQgCgQAAgPIAAgLIABgNQAAgfgLAAQgQAAgMATQgNARgIAYIgBAOIgBAOIABANIABAMQAAAHgEAEQgEAEgGAAQgHAAgDgEQgEgEAAgHIgBgMIgBgNIACgnIACgoIAAgOIgBgNQAAgGAEgEQAEgEAGAAQANAAACATIAAAQQAYggAXAAQAWAAAKAUQAFAOABAaIAAAOIAAALQAAAMADATQADASAAAMQAAAGgEAEQgEAEgGAAQgMAAgCgOg");
	this.shape_105.setTransform(107.3,284.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FF0000").s().p("AgwA9QgVgSAAggQAAgjASgZQATgbAgAAQAWAAAPAIQASAKAAAUQAAAOgQAMQgHAFgXAJIg0AZQAIAMAMAGQAMAGANAAQAKAAAOgEQAQgEAFgIQAEgHAGAAQAFAAAEADQAEAEAAAFQAAAQgZALQgWAKgVAAQgdAAgVgQgAgcglQgMAOgFAYIArgSQAYgNALgJQgNgLgUAAQgRAAgLANg");
	this.shape_106.setTransform(91.7,284.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FF0000").s().p("AgvA9QgWgSAAggQAAgjARgZQAUgbAgAAQAWAAAPAIQASAKAAAUQAAAOgQAMQgHAFgXAJIg0AZQAIAMAMAGQALAGAPAAQAJAAANgEQARgEAFgIQAFgHAFAAQAFAAAEADQAEAEAAAFQAAAQgaALQgVAKgUAAQgfAAgTgQgAgcglQgMAOgGAYIAsgSQAXgNAMgJQgMgLgVAAQgRAAgLANg");
	this.shape_107.setTransform(75.8,284.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FF0000").s().p("AgqBpQgFAHgGAAQgFAAgEgDQgEgFAAgFIAAgLIAAgLIAAgtIgBgrIAAgmIAAgoQAAgJAEgGQAFgJAIAAQAKAAAAAMIAAAGIgBAGIgBAfIAAAkQAMgIAMgFQALgEAHAAQAfAAATAYQASATAAAhQAAAggVAXQgUAWgeAAQgVAAgSgJgAgVgFIgVALIAAAZIAAAWIAAAXIATAJQAKACAKAAQATAAANgOQANgPAAgVQAAgVgLgOQgLgOgUAAQgJAAgMAHg");
	this.shape_108.setTransform(59.3,280.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FF0000").s().p("AgmBPQgWgJAAgOQAAgGAFgEQADgEAHAAQAEAAAGAHQAEADAMACQAKACAGAAQAKAAAJgDQANgEAAgJQAAgTgbgHIgMgEQgUgEgHgFQgLgGAAgQQAAgdAbgNQAIgEASgFQASgFAIgEQAGgCAHAAQAGAAAEAEQAEADAAAGIACAMIABANQAAAGgDAEQgFAEgGAAQgIAAgDgFQgCgEgBgMIghAKQgVAKAAANIAJACQAeAGAQAKQAXANAAAcQAAAXgUAMQgQAKgYgBQgSAAgRgFg");
	this.shape_109.setTransform(34.3,284);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FF0000").s().p("AAmBrQgDgMgDgWQgDgUAAgNIABgMIAAgKQAAgZgNAAQgRAAgNAOQgIAJgMAXQAAA2gEAKQgFAJgIgBQgGAAgEgDQgFgEABgGIABgGQABgEAAgRIABgVIAAhmIABgYIgBgNQgBgGgBgIQAAgFAEgFQAFgDAGAAQALAAACAMQACAOAAALIgBAfQAAAPAAAQIAAAMQAMgPANgIQALgHAPAAQAXgBAJAPQAHALAAAYIACAbIADAeQABAQADAMIAAAEQAAAGgDAFQgFADgGABQgKAAgDgLg");
	this.shape_110.setTransform(4.6,280.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FF0000").s().p("AAiBEIgEgfQgCgQAAgPIAAgLIABgNQAAgfgLAAQgQAAgMATQgOARgHAYIgBAOIgBAOIABANIAAAMQABAHgEAEQgEAEgGAAQgGAAgEgEQgEgEAAgHIgBgMIgBgNIACgnIACgoIgBgOIAAgNQAAgGAFgEQADgEAGAAQANAAACATIAAAQQAYggAXAAQAWAAAKAUQAGAOAAAaIAAAOIAAALQAAAMADATQADASAAAMQAAAGgEAEQgEAEgGAAQgNAAgBgOg");
	this.shape_111.setTransform(-26.1,284.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FF0000").s().p("AgwA9QgVgSAAggQAAgjASgZQATgbAgAAQAWAAAPAIQASAKAAAUQAAAOgQAMQgHAFgXAJIg0AZQAIAMAMAGQAMAGANAAQAKAAAOgEQAQgEAFgIQAFgHAFAAQAFAAAEADQAEAEAAAFQAAAQgZALQgWAKgVAAQgdAAgVgQgAgdglQgKAOgHAYIAsgSQAYgNAKgJQgMgLgUAAQgRAAgMANg");
	this.shape_112.setTransform(-41.7,284.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FF0000").s().p("AgvA9QgWgSAAggQAAgjARgZQAUgbAgAAQAWAAAPAIQASAKAAAUQAAAOgQAMQgHAFgXAJIg0AZQAIAMAMAGQAMAGANAAQAKAAAOgEQAQgEAFgIQAEgHAGAAQAFAAAEADQAEAEAAAFQAAAQgaALQgVAKgVAAQgeAAgTgQgAgcglQgMAOgFAYIArgSQAYgNALgJQgMgLgVAAQgRAAgLANg");
	this.shape_113.setTransform(-57.6,284.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FF0000").s().p("AgqBpQgEAHgHAAQgGAAgDgDQgEgFAAgFIAAgLIAAgLIAAgtIgBgrIAAgmIAAgoQABgJADgGQAEgJAJAAQAKAAAAAMIAAAGIgBAGIAAAfIAAAkQAMgIALgFQALgEAIAAQAeAAATAYQASATAAAhQAAAggVAXQgUAWgeAAQgVAAgSgJgAgVgFIgUALIgBAZIABAWIAAAXIASAJQAJACALAAQATAAANgOQANgPAAgVQAAgVgLgOQgLgOgTAAQgKAAgMAHg");
	this.shape_114.setTransform(-74.1,280.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AAlBrQgHgOgPgTIgXgiIgZASIgCAqQAAAHgEAEQgEAEgGAAQgOAAAAgTIACgkIABgjIABgvIAAgxIAAgPIgBgPQAAgGAEgEQAEgEAGAAQAGAAAEAEQAEAEAAAGIABAQIAAAPIgBAtIAAAwQATgPAQgQIAfgfQAFgGAFAAQAGABAEAEQAFAEAAAGQAAAFgFAFQgRAUgZAWIAeApQAWAeAAAJQAAAFgEAFQgFAEgGAAQgHAAgFgJg");
	this.shape_115.setTransform(-98.6,280.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("ABXBqQgEgHgEgQIgFgYQgGgXgNhLIgcBTIgJAbQgFAQgFAKQgGALgIAAQgIAAgFgJIgGgPIgEgQQgOgygLg3IgFAaIgTBIQgBANgFAaQgFALgKAAQgGAAgEgFQgEgEAAgGQAAgYAKgjIAPg3IAIgsQAHggAHgJQAGgIAHAAQAKAAAFALQAFAMAGAnQAHAuARA1QASg1AQg7IAEgUQADgNAEgHQAFgLAKAAQAMAAAHAXIAFAiQAIA9ANAuIAGAZQAGATAAAEQAAAHgFADQgEAFgGAAQgIAAgEgIg");
	this.shape_116.setTransform(-148.7,281.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AAlBsQgHgOgPgUIgXgjIgZATIgCAqQAAAHgEAEQgEAEgGAAQgOAAAAgUIACgiIABgjIABgwIAAgxIAAgPIgBgPQAAgGAEgEQAEgEAGAAQAGAAAEAEQAEAEAAAGIABAPIAAAQIgBAuIAAAvQATgPAQgPIAfghQAFgEAFAAQAGgBAEAFQAFAEAAAGQAAAFgFAEQgRAVgZAVIAeArQAWAdAAAJQAAAFgEAEQgFAFgGAAQgHAAgFgIg");
	this.shape_117.setTransform(227.2,324.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgwA9QgVgSAAggQAAgjASgZQATgbAgAAQAWAAAPAIQASAKAAAUQAAAOgQAMQgHAFgXAJIg0AZQAIAMAMAGQAMAGAOAAQAJAAANgEQARgEAFgIQAFgHAFAAQAFAAAEADQAEAEAAAFQAAAQgZALQgWAKgUAAQgeAAgVgQgAgdglQgLAOgGAYIAsgSQAXgNALgJQgMgLgUAAQgRAAgMANg");
	this.shape_118.setTransform(194.9,328.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AAiBEIgEgfQgCgQAAgPIABgLIAAgNQAAgfgLAAQgQAAgNATQgNARgHAYIgBAOIgBAOIABANIABAMQgBAHgDAEQgEAEgGAAQgGAAgFgEQgDgEAAgHIgBgMIgBgNIACgnIACgoIgBgOIAAgNQAAgGAEgEQAEgEAGAAQANAAABATIABAQQAXggAYAAQAWAAAJAUQAHAOAAAaIAAAOIAAALQAAAMADATQADASAAAMQAAAGgEAEQgEAEgGAAQgMAAgCgOg");
	this.shape_119.setTransform(127.4,328.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgwA9QgVgSAAggQAAgjASgZQATgbAgAAQAWAAAPAIQASAKAAAUQAAAOgQAMQgHAFgXAJIg0AZQAIAMAMAGQAMAGAOAAQAJAAANgEQARgEAFgIQAFgHAFAAQAFAAAEADQAEAEAAAFQAAAQgZALQgWAKgUAAQgeAAgVgQgAgdglQgLAOgGAYIAsgSQAXgNALgJQgMgLgUAAQgRAAgMANg");
	this.shape_120.setTransform(95,328.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgvA9QgWgSAAggQAAgjARgZQAUgbAgAAQAWAAAPAIQASAKAAAUQAAAOgQAMQgHAFgXAJIg0AZQAIAMAMAGQALAGAPAAQAJAAANgEQARgEAFgIQAEgHAGAAQAFAAAEADQAEAEAAAFQAAAQgaALQgVAKgUAAQgfAAgTgQgAgcglQgMAOgGAYIAsgSQAXgNAMgJQgMgLgVAAQgRAAgLANg");
	this.shape_121.setTransform(65.5,328.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgPBmIACgzIACgzIAAgyIABgzQAAgPAMAAQAOAAAAAPIgBAzIgBAyIgCBFIgBAiQgBAOgLgBQgOAAAAgOg");
	this.shape_122.setTransform(53.3,324.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgnA+QgUgTAAgeQgBgbAUgeQAUgiAZAAQAOAAARAGQAWAJAAAMQAAAFgEAEQgDAEgGAAQgEAAgCgCIgHgFQgIgHgTAAQgMAAgOAaQgNAYAAAPQAAATANAKQALALARAAQAIAAAKgFIAQgJIAHgCQAFAAAEAEQADAEAAAGQABAKgWAKQgTAIgNAAQgbAAgTgRg");
	this.shape_123.setTransform(-11.4,328.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgnA+QgVgTAAgeQABgbASgeQAWgiAYAAQAOAAASAGQAVAJAAAMQAAAFgDAEQgEAEgFAAQgEAAgEgCIgGgFQgHgHgUAAQgMAAgPAaQgMAYAAAPQAAATAMAKQANALAQAAQAJAAAKgFIAPgJIAHgCQAFAAAEAEQAEAEAAAGQgBAKgVAKQgTAIgNAAQgbAAgTgRg");
	this.shape_124.setTransform(-65,328.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AAmBqQgDgLgDgVQgDgVABgNIAAgLIAAgMQAAgYgNAAQgRAAgNAOQgHAJgNAXQAAA2gFAKQgDAJgJAAQgFAAgFgFQgEgEgBgFIACgGQABgEABgRIAAgVIAAhmIABgXIgBgOQgCgHAAgGQABgHAEgDQAEgFAFAAQAMAAADANQACAOAAALIgBAfQgBAQAAAPIAAANQAMgQANgIQALgIAPAAQAYAAAIAPQAGAMACAXIAAAbIADAdQACARADANIABADQAAAGgFAEQgEAEgGABQgKAAgDgMg");
	this.shape_125.setTransform(-105.2,324.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AAiBEIgEgfQgCgQAAgPIAAgLIABgNQAAgfgLAAQgQAAgMATQgNARgIAYIgBAOIgBAOIABANIABAMQAAAHgEAEQgEAEgGAAQgHAAgDgEQgEgEAAgHIgBgMIgBgNIACgnIACgoIAAgOIgBgNQAAgGAEgEQAEgEAGAAQANAAACATIAAAQQAYggAXAAQAWAAAKAUQAFAOABAaIAAAOIAAALQAAAMADATQADASAAAMQAAAGgEAEQgEAEgGAAQgMAAgCgOg");
	this.shape_126.setTransform(256.3,286.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AAmBqQgDgLgDgVQgCgVAAgNIAAgLIAAgMQAAgYgNAAQgRAAgNAOQgHAIgNAYQAAA2gFAKQgDAJgJAAQgGAAgEgFQgEgEgBgFIACgGIABgVIABgVIAAhmIABgXIgBgOQgBgHgBgGQAAgHAFgDQADgFAHAAQAMAAABANQACAOABALIgCAfQgBAPABAQIAAANQAMgQANgIQALgIAPAAQAYABAIAPQAHALABAXIABAbIACAdQACARADAMIABAFQAAAFgFAFQgEADgGAAQgKAAgDgLg");
	this.shape_127.setTransform(225.3,282.5);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AAlBsQgHgOgPgUIgXgjIgZATIgCArQAAAGgEAEQgEAEgGAAQgOAAAAgUIACgjIABgiIABgwIAAgxIAAgPIgBgPQAAgGAEgEQAEgEAGAAQAGAAAEAEQAEAEAAAGIABAQIAAAPIgBAuIAAAvQATgPAQgPIAfghQAFgEAFAAQAGgBAEAFQAFAEAAAGQAAAFgFAEQgRAVgZAVIAeArQAWAdAAAJQAAAGgEADQgFAFgGAAQgHAAgFgIg");
	this.shape_128.setTransform(187.5,282.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgvA9QgWgSAAggQAAgjARgZQAUgbAgAAQAWAAAPAIQASAKAAAUQAAAOgQAMQgHAFgXAJIg0AZQAIAMAMAGQAMAGANAAQAKAAAOgEQAQgEAFgIQAEgHAGAAQAFAAAEADQAEAEAAAFQAAAQgZALQgWAKgVAAQgeAAgTgQgAgcglQgMAOgFAYIArgSQAYgNALgJQgMgLgVAAQgRAAgLANg");
	this.shape_129.setTransform(113.4,286.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgHBTQgEgEAAgGQAAgSgDghQgDggAAgRQAAgPgFgIQgKAEgKALIgRASIgHAJIgBAXIgCAZIACAMIABALQAAAGgEAEQgFADgGAAQgQAAAAgkIACgZIABgYIgBgWIgBgXQAAggAOAAQAGAAAEAFQAFAFAAAFIgBAJIAAAIIAAAPQAHgPAPgMQAOgMAKAAQAWAAAGAWQAIgLALgFQALgFAOAAQAXAAAJAZQACAGAEAiQAEAXAGA4QAAAGgEAEQgEAEgGAAQgMAAgCgMIgFgsIgFgqQgBgKgEgJQgEgNgGAAQgFAAgPAJQgNAIgEAFQgBANABAOIAFAkQACAWAAAPQAAAGgEAEQgEAEgGAAQgEAAgEgEg");
	this.shape_130.setTransform(64.9,286.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FF0000").s().p("AgmBOQgWgHAAgPQAAgFAFgEQADgFAHAAQAEAAAGAHQAEADAMACQAKACAGAAQAKAAAJgDQANgEAAgJQAAgTgbgHIgMgDQgUgEgHgGQgMgGAAgQQAAgdAcgNQAJgEARgFIAagJQAGgCAHgBQAGAAAEAEQADAEAAAHIADAMIABALQAAAHgEAEQgDAEgHAAQgHAAgEgGQgCgDgBgLIghAKQgVAIAAANIAIADQAfAGAQAKQAXANAAAcQAAAXgUAMQgRAKgXAAQgSAAgRgHg");
	this.shape_131.setTransform(37.4,285.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FF0000").s().p("AAmBqQgDgLgDgVQgDgVAAgNIABgLIAAgMQAAgYgNAAQgRAAgNAOQgIAIgMAYQAAA2gEAKQgFAJgIAAQgGAAgEgFQgFgEABgFIABgGQABgDABgSIAAgVIAAhmIABgXIgBgOQgCgHABgGQAAgHADgDQAFgFAFAAQAMAAACANQACAOAAALIgBAfQAAAPAAAQIAAANQALgQAOgIQALgIAPAAQAXABAJAPQAGALABAXIABAbIAEAdQABARADAMIAAAFQAAAFgDAFQgFADgGAAQgKAAgDgLg");
	this.shape_132.setTransform(7.7,282.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FF0000").s().p("AgwA9QgVgSAAggQAAgjASgZQATgbAgAAQAWAAAPAIQASAKAAAUQAAAOgQAMQgHAFgXAJIg0AZQAIAMAMAGQAMAGAOAAQAJAAANgEQARgEAFgIQAFgHAFAAQAFAAAEADQAEAEAAAFQAAAQgaALQgVAKgUAAQgfAAgUgQgAgdglQgKAOgHAYIAsgSQAXgNALgJQgMgLgUAAQgRAAgMANg");
	this.shape_133.setTransform(-23.4,286.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FF0000").s().p("AgPBBIgVg6Igag/IgBgGQAAgGAEgEQAFgEAGAAQAIAAAEAJIAkBhQAIgXARgpQADgLAJgVQAEgJAIAAQAGAAAEAEQAFAEAAAFQAAAGgYA3IgdBBQAAANgLAAQgKAAgFgMg");
	this.shape_134.setTransform(-38.5,286.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FF0000").s().p("AAtBIQgHgGgDgEIgYALQgKADgFAAQghAAgPgSQgPgSAAgkQAAggAYgZQAYgYAeAAQANAAAPAGQATAIAAALQAAAEgDADQgBAGgBAMIgBAdQAAASADAKIAJAZIADAIIABACQAAAGgEADQgEAEgFAAQgDAAgHgGgAgXgiQgQASAAAVQAAAXAJAMQAIAMAQAAQAMAAAJgFIAPgLQgFgkAAgSIABgNIACgQIgJgEIgGgBQgUAAgQASg");
	this.shape_135.setTransform(-53.2,286.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgHBTQgEgEAAgGQAAgSgDghQgDggAAgRQAAgPgFgIQgKAEgKALIgRASIgHAJIgBAXIgCAZIACAMIABALQAAAGgEAEQgFADgGAAQgQAAAAgkIACgZIABgYIgBgWIgBgXQAAggAOAAQAGAAAEAFQAFAFAAAFIgBAJIAAAIIAAAPQAHgPAPgMQAOgMAKAAQAWAAAGAWQAIgLALgFQALgFAOAAQAXAAAJAZQACAGAEAiQAEAXAGA4QAAAGgEAEQgEAEgGAAQgMAAgCgMIgFgsIgFgqQgBgKgEgJQgEgNgGAAQgFAAgPAJQgNAIgEAFQgBANABAOIAFAkQACAWAAAPQAAAGgEAEQgEAEgGAAQgEAAgEgEg");
	this.shape_136.setTransform(-97.1,286.4);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("Ag5BhQgbgTABgaQgBgRAOAAQAPAAAAARQAAALARAMQAQALAOAAQAKAAAEhHQACggAAgzIgBgPIgHAAIgQAAIgRgBQgGAAgEgEQgFgEABgGQAAgPATAAIAPAAIANABIAZgBIAbgBQAhAAAAAQQAAAGgFAEQgDAFgHAAIgIgBIgKgBIgQAAIAAARQAABogNAwQgKAfgVAAQgYAAgZgSg");
	this.shape_137.setTransform(-126.2,283.5);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgIBvQgGgIAAgGQAAgFAFgDQAEgDAFgBQAEAAAFAIQAGAGAAAGQAAAFgFAEQgDAEgGAAQgDAAgGgHgAgJAzIAAgRIAAgRIAAg7IAAg+QAAgNALAAQANAAAAANIAACbQAAANgNAAQgLAAAAgNg");
	this.shape_138.setTransform(153,324.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AAmBqQgDgLgDgVQgCgVgBgNIABgLIAAgMQAAgYgNAAQgRAAgNAOQgIAJgMAXQAAA2gFAKQgEAJgIAAQgFAAgFgFQgFgEAAgFIACgGQABgEABgRIAAgVIAAhmIABgXIgBgOQgBgHAAgGQAAgHADgDQAEgFAGAAQANAAACANQABAOAAALIAAAfQgCAQABAPIAAANQALgQAOgIQALgIAPAAQAXAAAJAPQAGAMABAXIABAbIAEAdQABARADANIAAADQAAAGgDAEQgFAEgGABQgKAAgDgMg");
	this.shape_139.setTransform(113.2,324.9);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgxBgQgUgUAAgfQAAgmAUgVQAUgWAeAAQAQAAAJAEIAOAKQACg8ACgUQACgNALAAQANAAAAAOQAAATgGBEIgBAoQAAAvAEAYIAAADQAAAGgEADQgEAEgFAAQgJAAgEgNQgKAIgLADQgLAFgKAAQgdAAgTgUgAggACQgMAOAAAcQAAATANAMQANAOARAAQAKAAAIgFQAFgCALgJIAEgFIAAgYIAAgQIAAgSQgFgKgJgFQgJgFgNAAQgVAAgMAMg");
	this.shape_140.setTransform(73.7,324.8);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgMBmQgFgEAAgGIAAgaIgBgZIACghIABgfQAAgHAEgEQAEgEAGAAQAEAAAEAEQAEAEAAAHIgCAfIgBAhIAAAZIABAaQAAAGgEAEQgDAEgFAAQgGAAgDgEgAgIhNQgFgFAAgGQAAgHAFgFQAFgFAFAAQAHAAAFAFQAEAFAAAHQAAAGgEAFQgFAFgHAAQgFAAgFgFg");
	this.shape_141.setTransform(61.5,325.2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgxBgQgUgUAAgfQAAgmAUgVQAUgWAeAAQAQAAAJAEIAOAKQACg8ACgUQACgNALAAQANAAAAAOQAAATgGBEIgBAoQAAAvAEAYIAAADQAAAGgEADQgEAEgFAAQgJAAgEgNQgKAIgLADQgLAFgKAAQgdAAgTgUgAggACQgMAOAAAcQAAATANAMQANAOARAAQAKAAAIgFQAFgCALgJIAEgFIAAgYIAAgQIAAgSQgFgKgJgFQgJgFgNAAQgVAAgMAMg");
	this.shape_142.setTransform(48.5,324.8);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AAmBqQgDgLgDgVQgCgVgBgNIABgLIAAgMQAAgYgNAAQgRAAgNAOQgIAJgMAXQAAA2gEAKQgFAJgIAAQgGAAgEgFQgFgEABgFIABgGQABgEABgRIAAgVIAAhmIABgXIgBgOQgCgHABgGQAAgHADgDQAFgFAFAAQANAAACANQABAOAAALIgBAfQgBAQABAPIAAANQALgQAOgIQALgIAPAAQAXAAAJAPQAGAMABAXIABAbIAEAdQABARADANIAAADQAAAGgDAEQgFAEgGABQgKAAgDgMg");
	this.shape_143.setTransform(8,324.9);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgwA9QgVgSAAggQAAgjASgZQATgbAgAAQAWAAAPAIQASAKAAAUQAAAOgQAMQgHAFgXAJIg0AZQAIAMAMAGQAMAGAOAAQAJAAAOgEQAQgEAFgIQAFgHAFAAQAFAAAEADQAEAEAAAFQAAAQgZALQgWAKgUAAQgeAAgVgQgAgdglQgKAOgHAYIAsgSQAYgNAKgJQgMgLgUAAQgRAAgMANg");
	this.shape_144.setTransform(156.8,286.3);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AAmBqQgDgLgDgVQgDgVABgNIAAgLIAAgMQAAgYgNAAQgRAAgNAOQgHAIgNAYQAAA2gFAKQgDAJgJAAQgGAAgEgFQgEgEgBgFIACgGIABgVIABgVIAAhmIABgXIgBgOQgCgHAAgGQAAgHAFgDQADgFAHAAQAMAAABANQADAOAAALIgBAfQgCAPABAQIAAANQAMgQANgIQALgIAPAAQAYABAIAPQAHALABAXIABAbIACAdQACARADAMIABAFQAAAFgFAFQgEADgGAAQgKAAgDgLg");
	this.shape_145.setTransform(140.4,282.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FF0000").s().p("AgIBkQgEgFAAgFIAAgQIABgQIgDhRIgfgCQgNgCAAgMQAAgGAEgEQAEgFAGAAIAdADIAAgUIgBgRQAAgGAEgEQAEgEAGAAQALAAACAVIAAANIAAAIIAAAJIAUgDQAPAAAEABQAJAEAAAKQAAAHgEADQgEAEgGABIgHgBIgHAAIgTACIADBRIAAAHIAAAHQAAAfgPAAQgEAAgEgDg");
	this.shape_146.setTransform(102.6,283.9);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FF0000").s().p("AgpA8QgTgUgBghQgBgeARgYQAUgdAhAAQAdAAAOAaQAMAVgBAdQAAAegQAWQgSAZgcAAQgYAAgRgRgAgYgcQgJAQAAATQAAAVALALQAJAKANAAQANAAAKgLQAMgMABgUQACg1gfAAQgTAAgMATg");
	this.shape_147.setTransform(87.9,286.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FF0000").s().p("AAiBEIgEgfQgCgQAAgPIABgLIAAgNQAAgfgLAAQgQAAgNATQgMARgIAYIgBAOIgBAOIABANIABAMQgBAHgDAEQgEAEgGAAQgHAAgEgEQgDgEAAgHIgBgMIgBgNIACgnIACgoIAAgOIgBgNQAAgGAEgEQAEgEAGAAQANAAABATIABAQQAXggAYAAQAWAAAJAUQAGAOABAaIAAAOIAAALQAAAMADATQADASAAAMQAAAGgEAEQgEAEgGAAQgNAAgBgOg");
	this.shape_148.setTransform(73.3,286.1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FF0000").s().p("AgHBTQgEgEAAgGQAAgSgDghQgDggAAgRQAAgPgFgIQgKAEgKALIgRASIgHAJIgBAXIgCAZIACAMIABALQAAAGgEAEQgFADgGAAQgQAAAAgkIACgZIABgYIgBgWIgBgXQAAggAOAAQAGAAAEAFQAFAFAAAFIgBAJIAAAIIAAAPQAHgPAPgMQAOgMAKAAQAWAAAGAWQAIgLALgFQALgFAOAAQAXAAAJAZQACAGAEAiQAEAXAGA4QAAAGgEAEQgEAEgGAAQgMAAgCgMIgFgsIgFgqQgBgKgEgJQgEgNgGAAQgFAAgPAJQgNAIgEAFIAAAbIAFAkQACAWAAAPQAAAGgEAEQgEAEgGAAQgEAAgEgEg");
	this.shape_149.setTransform(45.6,286.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FF0000").s().p("AgIBkQgEgFAAgFIAAgQIABgQIgDhRIgfgCQgNgCAAgMQAAgGAEgEQAEgFAGAAIAdADIAAgUIgBgRQAAgGAEgEQAEgEAGAAQALAAACAVIAAANIAAAIIAAAJIAUgDQAPAAAEABQAJAEAAAKQAAAHgEADQgEAEgGABIgHgBIgHAAIgTACIADBRIAAAHIAAAHQAAAfgPAAQgEAAgEgDg");
	this.shape_150.setTransform(-2.4,283.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FF0000").s().p("AgJAeIgBgNIgBgMIgBgKQAAgOABgFQADgLAIAAQAFAAAEADQADAEAAAFIAAAJIgBAJIABALIABAMQAAASgNAAQgGAAgDgGg");
	this.shape_151.setTransform(-15.1,273.5);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AAmBqQgDgLgDgVQgDgVABgNIAAgLIAAgMQAAgYgNAAQgRAAgNAOQgHAJgNAXQAAA2gFAKQgDAJgJAAQgFAAgFgFQgEgEgBgFIACgGQABgEABgRIAAgVIAAhmIABgXIgBgOQgCgHAAgGQABgHAEgDQAEgFAFAAQAMAAADANQACAOAAALIgBAfQgBAQAAAPIAAANQAMgQANgIQALgIAPAAQAYAAAIAPQAGAMACAXIABAbIACAdQACARADANIABADQAAAGgFAEQgEAEgGABQgKAAgDgMg");
	this.shape_152.setTransform(191.8,324.9);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgwBuQgSgEAAgLQAAgNAMAAIARADQAMACAPgBQAZAAAKgaQAHgRABgkQgIAOgKAIQgLAGgMAAQgaAAgPgRQgRgSABgaQAAglAVgYQAXgYAlAAQAOAAAJADQAIAEAFAGQAPABAAAQQAAALgDAQIgEAbIgDAuQgBAcgFASQgGAXgOAKQgRAOgfAAQgSAAgNgCgAgZhGQgNARAAAZQAAAVAIAJQAIAKAPAAQANAAANgOQAMgPACgOIAGgxQgFgEgHgCQgFgDgHAAQgZABgPASg");
	this.shape_153.setTransform(175.3,332.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AAiBEIgEgfQgCgQAAgPIABgLIAAgNQAAgfgLAAQgQAAgNATQgNARgHAYIgBAOIgBAOIABANIAAAMQAAAHgDAEQgEAEgGAAQgGAAgFgEQgDgEAAgHIgBgMIgBgNIACgnIACgoIgBgOIAAgNQAAgGAFgEQADgEAGAAQANAAABATIABAQQAXggAYAAQAXAAAIAUQAHAOAAAaIAAAOIAAALQAAAMADATQADASAAAMQAAAGgEAEQgEAEgGAAQgNAAgBgOg");
	this.shape_154.setTransform(152.4,328.5);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgPBmIACgzIACgzIAAgyIABgzQAAgPAMAAQAOAAAAAPIgBAzIgBAyIgCBFIgBAiQgBAOgLgBQgOAAAAgOg");
	this.shape_155.setTransform(123.9,324.7);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgWB5QgEgEAAgGIAAgDQADgTAAgVIAAgmIAAgoIgWACQgPAAAAgOQAAgOAZgBIAOAAIACgVQAEggAMgPQAMgSAgAAQAUAAAAAOQAAANgSAAQgjABgEAvIAAAJIAfgCQAWAAAAAOQAAAKgLACIgLACQgGgBgaACIgCAeIABAaIABAbQAAAbgDAPQgBALgLAAQgGAAgEgDg");
	this.shape_156.setTransform(-11.5,325.6);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AAmBqQgDgLgDgVQgDgVAAgNIABgLIAAgMQAAgYgNAAQgRAAgNAOQgIAJgMAXQAAA2gEAKQgFAJgIAAQgGAAgEgFQgFgEABgFIABgGQABgEAAgRIABgVIAAhmIABgXIgBgOQgCgHABgGQAAgHADgDQAFgFAFAAQAMAAACANQACAOAAALIgBAfQAAAQAAAPIAAANQALgQAOgIQALgIAPAAQAXAAAJAPQAGAMABAXIABAbIAEAdQABARADANIAAADQAAAGgDAEQgFAEgGABQgKAAgDgMg");
	this.shape_157.setTransform(-63.9,324.9);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgIBkQgEgEAAgGIAAgQIABgQIgDhRIgfgCQgNgCAAgMQAAgHAEgDQAEgEAGgBIAdADIAAgTIgBgSQAAgGAEgEQAEgEAGAAQALAAACAVIAAANIAAAIIAAAJIAUgDQAPAAAEACQAJADAAAKQAAAGgEAEQgEAEgGABIgHgBIgHAAIgTACIADBRIAAAHIAAAHQAAAfgPAAQgEAAgEgDg");
	this.shape_158.setTransform(-79.3,326.3);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgPBBIgVg6Igag/IgBgGQAAgGAEgEQAFgEAGAAQAIAAAEAJIAkBhQAIgXARgpQADgLAJgVQAEgJAIAAQAGAAAEAEQAFAEAAAFQAAAGgYA3IgdBBQAAANgLAAQgKAAgFgMg");
	this.shape_159.setTransform(235.3,286.2);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgwA9QgVgSAAggQAAgjARgZQAUgbAgAAQAWAAAPAIQASAKAAAUQAAAOgQAMQgHAFgXAJIg0AZQAIAMAMAGQAMAGANAAQAKAAAOgEQAQgEAFgIQAEgHAGAAQAFAAAEADQAEAEAAAFQAAAQgZALQgWAKgVAAQgdAAgVgQgAgcglQgMAOgFAYIArgSQAYgNALgJQgNgLgUAAQgRAAgLANg");
	this.shape_160.setTransform(205.6,286.3);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FF0000").s().p("AgJAeIgBgNIgBgMIgBgKQAAgOACgFQACgLAIAAQAFAAAEADQADAEAAAFIAAAJIgBAJIABALIABAMQAAASgNAAQgGAAgDgGg");
	this.shape_161.setTransform(161.1,273.5);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FF0000").s().p("AAiBEIgEgfQgCgQAAgPIABgLIAAgNQAAgfgLAAQgQAAgNATQgNARgHAYIgBAOIgBAOIABANIABAMQgBAHgDAEQgEAEgGAAQgGAAgFgEQgDgEAAgHIgBgMIgBgNIACgnIACgoIgBgOIAAgNQAAgGAEgEQAEgEAGAAQANAAABATIABAQQAXggAYAAQAWAAAJAUQAHAOAAAaIAAAOIAAALQAAAMADATQADASAAAMQAAAGgEAEQgEAEgGAAQgMAAgCgOg");
	this.shape_162.setTransform(148.6,286.1);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FF0000").s().p("AAmBqQgDgLgDgVQgDgVAAgNIABgLIAAgMQAAgYgNAAQgRAAgNAOQgIAIgMAYQAAA2gEAKQgFAJgIAAQgGAAgEgFQgFgEABgFIABgGQABgDAAgSIABgVIAAhmIABgXIgBgOQgCgHABgGQAAgHADgDQAFgFAFAAQAMAAACANQACAOAAALIgBAfQAAAPAAAQIAAANQALgQAOgIQALgIAPAAQAXABAJAPQAGALABAXIABAbIAEAdQABARADAMIAAAFQAAAFgDAFQgFADgGAAQgKAAgDgLg");
	this.shape_163.setTransform(118.8,282.5);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FF0000").s().p("AgwBuQgSgEAAgLQAAgNANAAIAQADQAMACAPgBQAZAAALgaQAGgRAAgkQgHAOgLAIQgKAGgLAAQgbAAgQgRQgPgRgBgbQAAglAXgYQAWgYAlAAQANAAAJADQAJAEAFAGQAPABAAAQQAAALgDAQIgEAbIgDAtQgBAdgFASQgGAXgOAKQgRAOgeAAQgTAAgNgCgAgZhGQgNARAAAZQAAAVAIAJQAHAKAQAAQAMAAAOgOQAMgPACgOIAGgxQgGgEgFgCQgHgDgGAAQgZABgPASg");
	this.shape_164.setTransform(102.3,290.1);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FF0000").s().p("AAfBDQgRAJgWAAQgSAAgMgIQgOgJgCgRQgGgmAAgbQAAgUAEgYQACgNAMAAQAGAAAEAEQAEAEAAAGIgCAVIgCAWQAAAXACAPQABARADAKIAKAEIAIACQARAAAWgHIgBgcIAAgaQAAgeADgXQABgNANAAQAGAAAEAEQAEAEAAAGIgDA2IAAAcIAAAfIABAJIAAAKQAAAGgEAEQgEAEgGAAQgLAAgDgOg");
	this.shape_165.setTransform(87.3,286.4);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FF0000").s().p("AgIBkQgEgFAAgFIAAgQIABgQIgDhRIgfgCQgNgCAAgMQAAgGAEgEQAEgFAGAAIAdADIAAgUIgBgRQAAgGAEgEQAEgEAGAAQALAAACAVIAAANIAAAIIAAAJIAUgDQAPAAAEABQAJAEAAAKQAAAHgEADQgEAEgGABIgHgBIgHAAIgTACIADBRIAAAHIAAAHQAAAfgPAAQgEAAgEgDg");
	this.shape_166.setTransform(42.8,283.9);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FF0000").s().p("AgJAeIgBgNIgBgMIgBgKQAAgOABgFQADgLAIAAQAFAAAEADQADAEABAFIgBAJIAAAJIAAALIABAMQAAASgNAAQgHAAgCgGg");
	this.shape_167.setTransform(30,273.5);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FF0000").s().p("AAiBEIgEgfQgCgQAAgPIAAgLIABgNQAAgfgLAAQgQAAgMATQgOARgHAYIgBAOIgBAOIABANIAAAMQABAHgEAEQgEAEgGAAQgGAAgEgEQgEgEAAgHIgBgMIgBgNIACgnIACgoIgBgOIAAgNQAAgGAFgEQADgEAGAAQANAAABATIABAQQAYggAXAAQAXAAAIAUQAHAOAAAaIAAAOIAAALQAAAMADATQADASAAAMQAAAGgEAEQgEAEgGAAQgNAAgBgOg");
	this.shape_168.setTransform(17.5,286.1);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FF0000").s().p("AgxBgQgUgUAAgfQAAgmAUgVQAUgWAeAAQAQAAAJAEIAOAKQACg8ACgUQACgMALAAQANAAAAANQAAATgGBEIgBAoQAAAvAEAYIAAADQAAAGgEADQgEAEgFAAQgJAAgEgMQgKAHgLADQgLAFgKAAQgdgBgTgTgAggACQgMAOAAAcQAAATANAMQANAOARAAQAKAAAIgFQAFgCALgJIAEgFIAAgYIAAgQIAAgRQgFgLgJgFQgJgFgNgBQgVAAgMANg");
	this.shape_169.setTransform(0.9,282.4);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FF0000").s().p("AAfBDQgRAJgWAAQgSAAgMgIQgOgJgCgRQgGgmAAgbQAAgUAEgYQACgNAMAAQAGAAAEAEQAEAEAAAGIgCAVIgCAWQAAAXACAPQABARADAKIAKAEIAIACQARAAAWgHIgBgcIAAgaQAAgeADgXQABgNANAAQAGAAAEAEQAEAEAAAGIgDA2IAAAcIAAAfIABAJIAAAKQAAAGgEAEQgEAEgGAAQgLAAgDgOg");
	this.shape_170.setTransform(-23,286.4);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FF0000").s().p("AgpA8QgTgUgBghQgBgeARgYQAUgdAhAAQAdAAAOAaQAMAVgBAdQAAAegQAWQgSAZgcAAQgYAAgRgRgAgYgcQgJAQAAATQAAAVALALQAJAKANAAQANAAAKgLQAMgMABgUQACg1gfAAQgTAAgMATg");
	this.shape_171.setTransform(-38.5,286.4);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FF0000").s().p("AAmBqQgDgLgDgVQgDgVAAgNIABgLIAAgMQAAgYgNAAQgRAAgNAOQgIAIgMAYQAAA2gEAKQgFAJgIAAQgGAAgEgFQgFgEABgFIABgGQABgDAAgSIABgVIAAhmIABgXIgBgOQgCgHABgGQAAgHADgDQAFgFAFAAQAMAAACANQACAOAAALIgBAfQAAAPAAAQIAAANQALgQAOgIQALgIAPAAQAXABAJAPQAGALABAXIABAbIAEAdQABARADAMIAAAFQAAAFgDAFQgFADgGAAQgKAAgDgLg");
	this.shape_172.setTransform(-54,282.5);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FF0000").s().p("AgmBOQgWgHAAgPQAAgFAFgEQAEgFAFAAQAFAAAGAHQAEADAMACQAKACAGAAQAKAAAJgDQANgEAAgJQAAgTgbgHIgMgDQgUgEgHgGQgLgGAAgQQAAgdAbgNQAIgEASgFIAagJQAGgCAGgBQAHAAAEAEQAEAEAAAHIACAMIABALQAAAHgDAEQgFAEgFAAQgIAAgEgGQgCgDgBgLIghAKQgVAIAAANIAJADQAeAGAQAKQAXANAAAcQAAAXgUAMQgQAKgYAAQgSAAgRgHg");
	this.shape_173.setTransform(-70,285.7);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AhXBvQgFgEAAgGQABgPACgeQADgdAAgQIgBgVIAAgYIABghIABghQAAgGAEgFQAEgEAGABQAFgBAEAEQAFAFAAAGIgCAhIgBAiIAAAiIA8gJQAkgIAYAAQACgUAAgpQAAgLAEgKQAEgPAIgBQAGAAAEAFQAEADABAGIgCAGQgCAGAAALIAAANIAAAMQAAAPgCAcQgDAaABAOIABAhIACAgQAAAFgEAFQgEADgGAAQgFAAgEgDQgFgFAAgFIgBggIgBghIAAgVQgYAAgiAIIg7ALQAAANgDAXQgDAXAAANQAAAGgDAEQgEAFgGAAQgFAAgEgFg");
	this.shape_174.setTransform(-112.1,283);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AgwBuQgSgEAAgLQAAgNANAAIARADQAMACAOgBQAZAAALgaQAGgRABgkQgIAOgKAIQgLAGgLAAQgbAAgQgRQgQgSAAgaQAAglAXgYQAWgYAlAAQAOAAAIADQAJAEAFAGQAPABAAAQQAAALgDAQIgEAbIgDAuQgBAcgFASQgGAXgOAKQgRAOgeAAQgTAAgNgCgAgZhGQgNARAAAZQAAAVAIAJQAHAKAQAAQANAAANgOQAMgPACgOIAGgxQgGgEgGgCQgFgDgHAAQgZABgPASg");
	this.shape_175.setTransform(186.7,332.5);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AAmBqQgDgLgDgVQgCgVAAgNIAAgLIAAgMQAAgYgNAAQgRAAgNAOQgHAJgNAXQAAA2gFAKQgDAJgJAAQgGAAgEgFQgEgEgBgFIACgGIABgVIABgVIAAhmIABgXIgBgOQgBgHgBgGQAAgHAFgDQADgFAHAAQAMAAABANQACAOABALIgCAfQgBAQABAPIAAANQAMgQANgIQALgIAPAAQAYAAAIAPQAHAMABAXIABAbIACAdQACARADANIABADQAAAGgFAEQgEAEgGABQgKAAgDgMg");
	this.shape_176.setTransform(114.2,324.9);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AAmBqQgDgLgDgVQgCgVAAgNIAAgLIAAgMQAAgYgNAAQgRAAgNAOQgHAJgNAXQAAA2gEAKQgEAJgJAAQgFAAgFgFQgEgEAAgFIABgGIABgVIABgVIAAhmIABgXIgBgOQgBgHgBgGQAAgHAFgDQADgFAHAAQAMAAABANQACAOAAALIgBAfQAAAQAAAPIAAANQAMgQANgIQALgIAPAAQAXAAAJAPQAGAMACAXIABAbIACAdQACARADANIABADQgBAGgEAEQgEAEgGABQgKAAgDgMg");
	this.shape_177.setTransform(53.3,324.9);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AAmBqQgDgLgDgVQgDgVABgNIAAgLIAAgMQAAgYgNAAQgRAAgNAOQgHAJgNAXQAAA2gFAKQgDAJgJAAQgFAAgFgFQgEgEgBgFIACgGQABgEABgRIAAgVIAAhmIABgXIgBgOQgCgHAAgGQABgHAEgDQAEgFAGAAQALAAADANQACAOAAALIgBAfQgBAQAAAPIAAANQAMgQANgIQALgIAPAAQAYAAAIAPQAGAMACAXIAAAbIADAdQACARADANIABADQAAAGgFAEQgEAEgGABQgKAAgDgMg");
	this.shape_178.setTransform(12.7,324.9);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FF0000").s().p("AgJAeIgBgNIgBgMIgBgKQAAgOACgFQACgLAIAAQAFAAAEADQADAEABAFIgBAJIAAAJIAAALIABAMQAAASgNAAQgHAAgCgGg");
	this.shape_179.setTransform(151.5,273.5);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FF0000").s().p("AgNBmQgDgEAAgGIgBgaIAAgZIABghIABgfQAAgHAEgEQAEgEAGAAQAEAAAEAEQAEAEAAAHIgBAfIgCAhIABAZIAAAaQAAAGgDAEQgFAEgEAAQgGAAgEgEgAgIhNQgFgFAAgGQAAgHAFgFQAFgFAEAAQAIAAAEAFQAGAFgBAHQABAGgGAFQgEAFgIAAQgEAAgFgFg");
	this.shape_180.setTransform(127.3,282.8);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FF0000").s().p("AgJAeIgBgNIgBgMIgBgKQAAgOACgFQACgLAIAAQAFAAAEADQAEAEAAAFIgBAJIAAAJIAAALIABAMQAAASgNAAQgHAAgCgGg");
	this.shape_181.setTransform(73.6,273.5);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FF0000").s().p("AAiBEIgEgfQgCgQAAgPIABgLIAAgNQAAgfgLAAQgQAAgNATQgNARgHAYIgBAOIgBAOIABANIAAAMQAAAHgDAEQgEAEgGAAQgGAAgFgEQgDgEAAgHIgBgMIgBgNIACgnIACgoIgBgOIAAgNQAAgGAFgEQADgEAGAAQANAAABATIABAQQAXggAYAAQAXAAAIAUQAHAOAAAaIAAAOIAAALQAAAMADATQADASAAAMQAAAGgEAEQgEAEgGAAQgNAAgBgOg");
	this.shape_182.setTransform(61,286.1);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FF0000").s().p("AgmBOQgWgHAAgPQAAgFAFgEQAEgFAGAAQAEAAAGAHQAEADAMACQAKACAGAAQAKAAAJgDQANgEAAgJQAAgTgbgHIgMgDQgUgEgHgGQgLgGAAgQQAAgdAbgNQAIgEASgFIAagJQAGgCAGgBQAHAAAEAEQAEAEAAAHIACAMIABALQAAAHgDAEQgFAEgFAAQgIAAgEgGQgCgDgBgLIghAKQgVAIAAANIAJADQAeAGAQAKQAXANAAAcQAAAXgUAMQgQAKgYAAQgSAAgRgHg");
	this.shape_183.setTransform(45.7,285.7);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FF0000").s().p("AgMBmQgFgEAAgGIAAgaIgBgZIACghIABgfQAAgHAEgEQAEgEAGAAQAEAAAEAEQAEAEAAAHIgCAfIgBAhIAAAZIABAaQAAAGgDAEQgFAEgEAAQgGAAgDgEgAgIhNQgFgFAAgGQAAgHAFgFQAFgFAEAAQAHAAAGAFQAEAFAAAHQAAAGgEAFQgGAFgHAAQgEAAgFgFg");
	this.shape_184.setTransform(35.2,282.8);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AgIBkQgEgFAAgFIAAgQIABgQIgDhRIgfgCQgNgCAAgMQAAgGAEgEQAEgFAGAAIAdADIAAgUIgBgRQAAgGAEgEQAEgEAGAAQALAAACAVIAAANIAAAIIAAAJIAUgDQAPAAAEABQAJAEAAAKQAAAHgEADQgEAEgGABIgHgBIgHAAIgTACIADBRIAAAHIAAAHQAAAfgPAAQgEAAgEgDg");
	this.shape_185.setTransform(-37,283.9);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AAmBqQgDgLgDgVQgCgVAAgNIAAgLIAAgMQAAgYgNAAQgRAAgNAOQgHAIgNAYQAAA2gEAKQgEAJgJAAQgFAAgFgFQgEgEAAgFIABgGIABgVIABgVIAAhmIABgXIgBgOQgBgHgBgGQAAgHAFgDQADgFAHAAQAMAAABANQACAOAAALIgBAfQAAAPAAAQIAAANQAMgQANgIQALgIAPAAQAXABAJAPQAGALACAXIABAbIACAdQACARADAMIABAFQgBAFgEAFQgEADgGAAQgKAAgDgLg");
	this.shape_186.setTransform(-66.8,282.5);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AgJBnQgEgEAAgGIAAgGIABgHIgBgUIgBgVQAAgVgDgiIgEg5IgNAAQgfAAgRgFQgMgDAAgLQAAgFAEgFQAEgFAHABIAWACIAXACIAaAAIAYgBIAgACIAhABQAGAAAEAFQAEAEAAAGQAAAGgEAEQgEAEgGAAIghgBIgggCIgKAAIAEBAQADAnAAAWIABAPIABAPQAAAKgDAHQgEAJgIAAQgEAAgFgEg");
	this.shape_187.setTransform(-84,282.7);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AAmBqQgDgLgDgVQgDgVAAgNIABgLIAAgMQAAgYgNAAQgRAAgNAOQgIAJgMAXQAAA2gEAKQgFAJgIAAQgGAAgEgFQgFgEABgFIABgGQABgEAAgRIABgVIAAhmIABgXIgBgOQgBgHgBgGQAAgHAEgDQAFgFAGAAQALAAACANQACAOAAALIgBAfQAAAQAAAPIAAANQAMgQANgIQALgIAPAAQAXAAAJAPQAHAMAAAXIACAbIADAdQABARADANIAAADQAAAGgEAEQgEAEgGABQgKAAgDgMg");
	this.shape_188.setTransform(213.4,324.9);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AgwBuQgSgEAAgLQAAgNANAAIARADQALACAPgBQAZAAALgaQAGgRAAgkQgHAOgLAIQgKAGgLAAQgbAAgQgRQgQgSAAgaQAAglAXgYQAWgYAlAAQANAAAJADQAJAEAFAGQAPABAAAQQAAALgDAQIgEAbIgDAuQgBAcgFASQgGAXgOAKQgRAOgeAAQgTAAgNgCgAgZhGQgNARAAAZQAAAVAIAJQAHAKAQAAQAMAAAOgOQAMgPACgOIAGgxQgGgEgFgCQgHgDgGAAQgZABgPASg");
	this.shape_189.setTransform(196.9,332.5);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AgNBmQgDgEAAgGIgBgaIAAgZIABghIABgfQAAgHAEgEQAEgEAGAAQAEAAAEAEQAEAEAAAHIgBAfIgCAhIABAZIAAAaQAAAGgEAEQgEAEgEAAQgGAAgEgEgAgIhNQgFgFAAgGQAAgHAFgFQAFgFAEAAQAIAAAEAFQAGAFAAAHQAAAGgGAFQgEAFgIAAQgEAAgFgFg");
	this.shape_190.setTransform(185.7,325.2);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AgZBnQgRgsgVhOIgLgnQgIgdAAgKQAAgGAEgEQAEgEAGAAQALAAADAMIAFAZIAOAvQAOAzAMAmIABgCIAkhlIAMgiQAIgWAJgKQAFgGAGAAQAGAAAFAFQAEAEAAAGQAAAEgDAFQgJAMgFAPIgLAfIgmBlQgHASgJASQgCAIgIAAQgLAAgFgLg");
	this.shape_191.setTransform(120,325.5);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AAiBEIgEgfQgCgQAAgPIAAgLIABgNQAAgfgLAAQgQAAgNATQgNARgHAYIgBAOIgBAOIABANIAAAMQAAAHgDAEQgEAEgGAAQgGAAgFgEQgDgEAAgHIgBgMIgBgNIACgnIACgoIgBgOIAAgNQAAgGAFgEQADgEAGAAQANAAABATIABAQQAYggAXAAQAXAAAIAUQAHAOAAAaIAAAOIAAALQAAAMADATQADASAAAMQAAAGgEAEQgEAEgGAAQgNAAgBgOg");
	this.shape_192.setTransform(74.1,328.5);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AgxBgQgUgUAAgfQAAgmAUgVQAUgWAeAAQAQAAAJAEIAOAKQACg8ACgUQACgNALAAQANAAAAAOQAAATgGBEQgBATAAAVQAAAvAEAYIAAADQAAAGgEADQgEAEgFAAQgJAAgEgNQgKAIgLADQgLAFgKAAQgdAAgTgUgAggACQgMAOAAAcQAAATANAMQANAOARAAQAKAAAIgFQAFgCALgJIAEgFIAAgYIAAgQIAAgSQgFgKgJgFQgJgFgNAAQgVAAgMAMg");
	this.shape_193.setTransform(33.6,324.8);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AgPBBIgVg6Igag/IgBgGQAAgGAEgEQAFgEAGAAQAIAAAEAJIAkBhQAIgXARgpQADgMAJgUQAEgJAIAAQAGAAAEAEQAFAEAAAGQAAAFgYA3IgdBBQAAANgLAAQgKAAgFgMg");
	this.shape_194.setTransform(-41.5,328.6);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AAiBEIgEgfQgCgQAAgPIABgLIAAgNQAAgfgLAAQgQAAgNATQgMARgIAYIgBAOIgBAOIABANIABAMQgBAHgDAEQgEAEgGAAQgHAAgEgEQgDgEAAgHIgBgMIgBgNIACgnIACgoIAAgOIgBgNQAAgGAEgEQAEgEAGAAQANAAABATIABAQQAXggAYAAQAWAAAJAUQAGAOABAaIAAAOIAAALQAAAMADATQADASAAAMQAAAGgEAEQgEAEgGAAQgNAAgBgOg");
	this.shape_195.setTransform(-99.5,328.5);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AgMBmQgEgEgBgGIAAgaIgBgZIACghIABgfQAAgHAEgEQAEgEAGAAQAEAAAEAEQAEAEAAAHIgBAfIgCAhIAAAZIABAaQAAAGgEAEQgDAEgFAAQgGAAgDgEgAgIhNQgFgFAAgGQAAgHAFgFQAFgFAFAAQAHAAAEAFQAFAFABAHQgBAGgFAFQgEAFgHAAQgFAAgFgFg");
	this.shape_196.setTransform(-111.2,325.2);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AgqBqQgFAGgGAAQgFAAgEgEQgEgDAAgGIAAgLIAAgKIAAgtIgBgrIAAgoIAAgnQABgIADgIQAFgIAIAAQAKAAABANIgBAFIgBAGIAAAfIAAAkQAMgJALgDQALgEAIgBQAeAAATAXQASAVAAAfQAAAhgVAWQgVAXgdAAQgVAAgSgIgAgVgGIgUANIgBAYIABAWIAAAXIATAIQAJADAKAAQATAAANgPQANgOAAgWQAAgVgLgOQgLgNgTAAQgKAAgMAGg");
	this.shape_197.setTransform(147.7,282.5);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AAfBvQgFgFAAgGQgHgRgCgLIgLg9QgGgkgBgXQgNAvgOAeQgRAmgFAVQACADAAADQAAAHgGAEQgFAEgHAAQgTAAAAgRIgEgSIgQhGQgJghgWhCIgBgFQAAgNAPAAQAJAAAFAKQADAFAHAYQAJAaAIAkIAOA8QAPgjAPgwIAOgrQANgfAKAAQAKAAAEAKQAFAMAFAuQADAXAHAfIAMA3QATgtAchMIAHgbQAEgQAGgJQAGgIAIAAQAOAAAAAOIgEAOIgGAPIgIAaIgqBkQgGARgOAgQgFAJgKAAQgHAAgFgDg");
	this.shape_198.setTransform(-29.2,283.2);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AgmBOQgWgHAAgPQAAgFAFgEQADgFAHAAQAEAAAGAHQAEADAMACQAKACAGAAQAKAAAJgDQANgEAAgJQAAgTgbgHIgMgDQgUgFgHgFQgLgGAAgQQAAgeAbgMQAIgEASgFIAagJQAGgCAHgBQAGAAAEAFQAEADAAAHIACALIABAMQAAAHgDAEQgFAEgGAAQgIAAgDgGQgCgDgBgLIghAKQgVAIAAANIAJADQAeAGAQAKQAXANAAAcQAAAXgUAMQgQAKgYAAQgSAAgRgHg");
	this.shape_199.setTransform(216.1,328.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AgtBlIgBgHQAAgGAEgEQAFgEAFAAQAJAAAJATIAIAOQAFAHAFAAQAHAAAEgKQADgHABgHQAAgQgFhFIgEhMQAAgHAEgFQAEgGAGAAQAFAAAFAEQAEADABAEIAEBPIAEBYQAAATgMAQQgMASgTAAQgcAAgVgvgAAJh3QgFgFAAgGQAAgHAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAHQAAAGgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_200.setTransform(-42.8,329.4);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AgwBuQgSgEAAgLQAAgNANAAIAQADQAMACAPgBQAZAAALgaQAGgRAAgkQgHAOgLAIQgKAGgLAAQgbAAgPgRQgQgRgBgbQAAglAXgYQAWgYAlAAQANAAAKADQAIAEAFAGQAPABAAAQQAAALgDAQIgEAbIgDAtQgBAdgFASQgGAXgOAKQgRAOgeAAQgTAAgNgCgAgZhGQgNARAAAZQAAAVAIAJQAHAKAQAAQAMAAAOgOQAMgPACgOIAGgxQgGgEgFgCQgHgDgGAAQgZABgPASg");
	this.shape_201.setTransform(218.9,290.1);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AgIBkQgEgFAAgFIAAgQIABgQIgDhRIgfgCQgNgCAAgMQAAgGAEgEQAEgFAGAAIAdADIAAgUIgBgRQAAgGAEgEQAEgEAGAAQALAAACAVIAAANIAAAIIAAAJIAUgDQAPAAAEABQAJAEAAAKQAAAHgEADQgEAEgGABIgHgBIgHAAIgTACIADBRIAAAHIAAAHQAAAfgPAAQgEAAgEgDg");
	this.shape_202.setTransform(106.2,283.9);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AgWB5QgEgFAAgFIAAgDQADgTAAgVIAAgnIAAgmIgWABQgPAAAAgOQAAgOAZAAIAOgBIACgWQAEgfAMgPQAMgSAgAAQAUAAAAAOQAAANgSAAQgjABgEAvIAAAJIAfgCQAWAAAAAOQAAAKgLACIgLABQgGAAgaACIgCAeIABAaIABAbQAAAbgDAPQgBALgLAAQgGAAgEgDg");
	this.shape_203.setTransform(91.8,283.2);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AgNBmQgDgEAAgGIgBgaIAAgZIABghIABgfQAAgHAEgEQAEgEAGAAQAEAAAEAEQAEAEAAAHIgBAfIgCAhIABAZIAAAaQAAAGgDAEQgFAEgEAAQgGAAgEgEgAgIhNQgFgFAAgGQAAgHAFgFQAFgFAEAAQAIAAAEAFQAGAFgBAHQABAGgGAFQgEAFgIAAQgEAAgFgFg");
	this.shape_204.setTransform(80.9,282.8);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AgwA9QgVgSAAggQAAgjASgZQATgbAgAAQAWAAAPAIQASAKAAAUQAAAOgQAMQgHAFgXAJIg0AZQAIAMAMAGQAMAGAOAAQAJAAANgEQARgEAFgIQAFgHAFAAQAFAAAEADQAEAEAAAFQAAAQgZALQgWAKgUAAQgeAAgVgQgAgdglQgKAOgHAYIAsgSQAXgNALgJQgMgLgUAAQgRAAgMANg");
	this.shape_205.setTransform(52.3,286.3);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FF0000").s().p("AAiBEIgEgfQgCgQAAgPIABgLIAAgNQAAgfgLAAQgQAAgNATQgNARgHAYIgBAOIgBAOIABANIAAAMQAAAHgDAEQgEAEgGAAQgGAAgFgEQgDgEAAgHIgBgMIgBgNIACgnIACgoIgBgOIAAgNQAAgGAFgEQADgEAGAAQANAAABATIABAQQAYggAXAAQAXAAAIAUQAHAOAAAaIAAAOIAAALQAAAMADATQADASAAAMQAAAGgEAEQgEAEgGAAQgMAAgCgOg");
	this.shape_206.setTransform(8.3,286.1);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FF0000").s().p("Ag6BWQgTgVAAgeQAAguAogyQAhgqAhgBIAMABIAKACQAFgHAIAAQAJAAADANQACALAAARQABAFgEAFQgEAFgGABQgJAAgGgLQgDgJgEgCQgCgBgMgBQgVABgXAfQgiAqAAAkQAAASAMANQAMAOARAAQAMAAAPgHQAIgFASgMQAIgHAEAAQAFAAAEAGQAFAEAAAGQAAAGgFAFQgmAhgkAAQgeAAgUgXg");
	this.shape_207.setTransform(-22.9,282.8);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FF0000").s().p("AglBuQgEgEAAgFQAAgPAfhDIgzhgIgGgKQgEgHAAgEQAAgGAEgEQAFgFAFAAQAHAAADAFQAYAiAaA9IAVgwQALgaALgSQAEgIAIAAQAFAAAFAEQAEAEAAAGQAAADgCAEIgxBoQgSAngHAaIgKAbQgDAKgJAAQgGAAgFgEg");
	this.shape_208.setTransform(-54.8,290.1);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FF0000").s().p("ABWBqQgEgHgDgQIgFgYQgGgXgMhLIgdBTIgIAbQgFAQgGAKQgGALgIAAQgIAAgFgJIgGgPIgEgQQgOgygLg3IgFAZIgSBJQgBANgHAaQgEALgJAAQgHAAgFgFQgDgEAAgGQAAgYAJgiIAQg4IAJgsQAGgfAGgKQAHgIAIAAQAJAAAEAKQAGANAGAnQAIAvAPAzQAUg0APg7IAEgVQADgMAEgIQAFgKAKAAQAMAAAGAXIAGAhQAJA+AMAuIAHAYQAFAUAAAFQAAAFgEAFQgFAEgGAAQgHAAgGgIg");
	this.shape_209.setTransform(-89.4,283.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35,p:{x:-43.7,y:286.4}},{t:this.shape_34,p:{x:-32.3}},{t:this.shape_33,p:{x:-24.3}},{t:this.shape_32,p:{x:-13,y:282.5}},{t:this.shape_31,p:{x:10.2}},{t:this.shape_30,p:{x:29}},{t:this.shape_29,p:{x:36.8}},{t:this.shape_28,p:{x:44.7}},{t:this.shape_27,p:{x:65.3}},{t:this.shape_26},{t:this.shape_25,p:{x:104.2,y:286.4}},{t:this.shape_24,p:{x:119,y:286.4}},{t:this.shape_23,p:{x:132.9,y:286.4}},{t:this.shape_22},{t:this.shape_21,p:{x:170.4,y:290.1}},{t:this.shape_20,p:{x:185.7,y:286.4}},{t:this.shape_19},{t:this.shape_18,p:{x:216.1,y:286.4}},{t:this.shape_17},{t:this.shape_16,p:{x:-40}},{t:this.shape_15,p:{x:-28.1}},{t:this.shape_14,p:{x:-17.6}},{t:this.shape_13,p:{x:-3.2,y:328.7}},{t:this.shape_12,p:{x:11.6,y:328.8}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8,p:{x:79.4,y:328.8}},{t:this.shape_7,p:{x:94.8}},{t:this.shape_6,p:{x:109.1}},{t:this.shape_5,p:{x:123.3}},{t:this.shape_4,p:{x:137.6,y:328.8}},{t:this.shape_3},{t:this.shape_2,p:{x:160.5,y:328.8}},{t:this.shape_1},{t:this.shape,p:{x:188.3}}]}).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55,p:{x:-63.6,y:286.3}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_35,p:{x:-9,y:286.4}},{t:this.shape_34,p:{x:2.4}},{t:this.shape_33,p:{x:10.4}},{t:this.shape_32,p:{x:21.7,y:282.5}},{t:this.shape_52,p:{x:39.2}},{t:this.shape_51},{t:this.shape_29,p:{x:61.2}},{t:this.shape_28,p:{x:69.1}},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48,p:{x:119.8}},{t:this.shape_47},{t:this.shape_46,p:{x:160.3,y:286.3}},{t:this.shape_18,p:{x:175.4,y:286.4}},{t:this.shape_45,p:{x:200.6}},{t:this.shape_25,p:{x:217.9,y:286.4}},{t:this.shape_21,p:{x:232.4,y:290.1}},{t:this.shape_44,p:{x:-33.5}},{t:this.shape_20,p:{x:-18.9,y:328.8}},{t:this.shape_43,p:{x:9.1}},{t:this.shape_12,p:{x:27.7,y:328.8}},{t:this.shape_42,p:{x:41.9}},{t:this.shape_14,p:{x:55.5}},{t:this.shape_41,p:{x:70.6}},{t:this.shape_2,p:{x:85.7,y:328.8}},{t:this.shape_40,p:{x:110.9}},{t:this.shape_39},{t:this.shape_4,p:{x:144.9,y:328.8}},{t:this.shape_5,p:{x:159.1}},{t:this.shape_38,p:{x:169.7}}]},10).to({state:[{t:this.shape_76},{t:this.shape_75,p:{x:-84.5}},{t:this.shape_35,p:{x:-68.9,y:286.4}},{t:this.shape_34,p:{x:-57.5}},{t:this.shape_33,p:{x:-49.6}},{t:this.shape_32,p:{x:-38.2,y:282.5}},{t:this.shape_31,p:{x:-15}},{t:this.shape_74,p:{x:3.8}},{t:this.shape_29,p:{x:11.5}},{t:this.shape_28,p:{x:19.5}},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70,p:{x:98.8,y:286.3}},{t:this.shape_12,p:{x:122.6,y:286.4}},{t:this.shape_69},{t:this.shape_68,p:{x:151.2}},{t:this.shape_67},{t:this.shape_48,p:{x:186.5}},{t:this.shape_66,p:{x:200.7,y:286.4}},{t:this.shape_65},{t:this.shape_20,p:{x:240,y:286.4}},{t:this.shape_40,p:{x:-32.2}},{t:this.shape_64,p:{x:-17.9}},{t:this.shape_14,p:{x:-7.4}},{t:this.shape_63,p:{x:8.1}},{t:this.shape_8,p:{x:32.5,y:328.8}},{t:this.shape_62},{t:this.shape_4,p:{x:70.2,y:328.8}},{t:this.shape_5,p:{x:84.4}},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape,p:{x:168.7}}]},10).to({state:[{t:this.shape_116},{t:this.shape_25,p:{x:-128.7,y:284.7}},{t:this.shape_24,p:{x:-113.9,y:284.6}},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_32,p:{x:-11.4,y:280.7}},{t:this.shape_110},{t:this.shape_35,p:{x:20.2,y:284.7}},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105,p:{x:107.3,y:284.4}},{t:this.shape_104},{t:this.shape_103,p:{x:150.4,y:284.7}},{t:this.shape_23,p:{x:165.7,y:284.6}},{t:this.shape_102},{t:this.shape_101,p:{x:192.3,y:281}},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92,p:{x:-95.2,y:326.9}},{t:this.shape_91},{t:this.shape_66,p:{x:-56.7,y:327.1}},{t:this.shape_90,p:{x:-40.8,y:326.8}},{t:this.shape_89},{t:this.shape_88},{t:this.shape_18,p:{x:1.6,y:327}},{t:this.shape_8,p:{x:15.7,y:327}},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85,p:{x:56.2,y:323.4}},{t:this.shape_20,p:{x:67.3,y:327.1}},{t:this.shape_84,p:{x:83.1,y:326.8}},{t:this.shape_83},{t:this.shape_2,p:{x:121.3,y:327}},{t:this.shape_82,p:{x:136.1,y:326.9}},{t:this.shape_81},{t:this.shape_12,p:{x:179.7,y:327.1}},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_4,p:{x:236.2,y:327.1}},{t:this.shape_21,p:{x:250.7,y:330.7}},{t:this.shape_77}]},10).to({state:[{t:this.shape_137},{t:this.shape_101,p:{x:-112.3,y:282.8}},{t:this.shape_136},{t:this.shape_75,p:{x:-68.8}},{t:this.shape_135,p:{x:-53.2}},{t:this.shape_134},{t:this.shape_133},{t:this.shape_32,p:{x:-8.4,y:282.5}},{t:this.shape_132,p:{x:7.7}},{t:this.shape_35,p:{x:23.3,y:286.4}},{t:this.shape_131},{t:this.shape_130},{t:this.shape_103,p:{x:83.3,y:286.4}},{t:this.shape_18,p:{x:98.6,y:286.4}},{t:this.shape_129},{t:this.shape_45,p:{x:139.7}},{t:this.shape_66,p:{x:156.9,y:286.4}},{t:this.shape_2,p:{x:172.2,y:286.4}},{t:this.shape_128},{t:this.shape_48,p:{x:209.9}},{t:this.shape_127},{t:this.shape_25,p:{x:240.9,y:286.4}},{t:this.shape_126},{t:this.shape_125},{t:this.shape_70,p:{x:-88.8,y:328.7}},{t:this.shape_124},{t:this.shape_12,p:{x:-50.2,y:328.8}},{t:this.shape_44,p:{x:-34.8}},{t:this.shape_123},{t:this.shape_20,p:{x:3.3,y:328.8}},{t:this.shape_43,p:{x:22.7}},{t:this.shape_7,p:{x:41.7}},{t:this.shape_122,p:{x:53.3}},{t:this.shape_121},{t:this.shape_5,p:{x:79.9}},{t:this.shape_120},{t:this.shape_64,p:{x:115.7}},{t:this.shape_119,p:{x:127.4,y:328.5}},{t:this.shape_4,p:{x:150.8,y:328.8}},{t:this.shape_40,p:{x:176.8}},{t:this.shape_118,p:{x:194.9}},{t:this.shape_82,p:{x:210.8,y:328.7}},{t:this.shape_117},{t:this.shape_38,p:{x:237.8}}]},10).to({state:[{t:this.shape_27,p:{x:-75.2}},{t:this.shape_135,p:{x:-51.2}},{t:this.shape_30,p:{x:-39.4}},{t:this.shape_105,p:{x:-27.7,y:286.1}},{t:this.shape_151},{t:this.shape_150,p:{x:-2.4}},{t:this.shape_32,p:{x:11.9,y:282.5}},{t:this.shape_35,p:{x:26.8,y:286.4}},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147,p:{x:87.9}},{t:this.shape_146,p:{x:102.6}},{t:this.shape_48,p:{x:124.9}},{t:this.shape_145,p:{x:140.4}},{t:this.shape_144},{t:this.shape_66,p:{x:180.4,y:286.4}},{t:this.shape_119,p:{x:196.3,y:286.1}},{t:this.shape_70,p:{x:211.8,y:286.3}},{t:this.shape_40,p:{x:-10.4}},{t:this.shape_143,p:{x:8}},{t:this.shape_20,p:{x:23.5,y:328.8}},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140,p:{x:73.7}},{t:this.shape_14,p:{x:97.8}},{t:this.shape_139,p:{x:113.2}},{t:this.shape_4,p:{x:128.8,y:328.8}},{t:this.shape_5,p:{x:143}},{t:this.shape_138}]},10).to({state:[{t:this.shape_174},{t:this.shape_92,p:{x:-93,y:286.3}},{t:this.shape_173,p:{x:-70}},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_28,p:{x:-11.5}},{t:this.shape_169},{t:this.shape_168,p:{x:17.5}},{t:this.shape_167},{t:this.shape_166},{t:this.shape_32,p:{x:57,y:282.5}},{t:this.shape_147,p:{x:71.8}},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_150,p:{x:133.8}},{t:this.shape_162},{t:this.shape_161},{t:this.shape_146,p:{x:173.9}},{t:this.shape_68,p:{x:193.4}},{t:this.shape_160,p:{x:205.6}},{t:this.shape_25,p:{x:220.7,y:286.4}},{t:this.shape_159},{t:this.shape_82,p:{x:250.4,y:286.3}},{t:this.shape_158,p:{x:-79.3}},{t:this.shape_157},{t:this.shape_12,p:{x:-48.3,y:328.8}},{t:this.shape_42,p:{x:-34.1}},{t:this.shape_156,p:{x:-11.5}},{t:this.shape_103,p:{x:3.5,y:328.8}},{t:this.shape_66,p:{x:18.8,y:328.8}},{t:this.shape_140,p:{x:35.1}},{t:this.shape_20,p:{x:59.7,y:328.8}},{t:this.shape_8,p:{x:75.2,y:328.8}},{t:this.shape_14,p:{x:89.5}},{t:this.shape_4,p:{x:112.5,y:328.8}},{t:this.shape_155},{t:this.shape_122,p:{x:131.8}},{t:this.shape_154},{t:this.shape_15,p:{x:164}},{t:this.shape_153},{t:this.shape_152},{t:this.shape_5,p:{x:206.7}},{t:this.shape_38,p:{x:217.3}}]},10).to({state:[{t:this.shape_187,p:{x:-84,y:282.7}},{t:this.shape_186},{t:this.shape_12,p:{x:-51.2,y:286.4}},{t:this.shape_185,p:{x:-37}},{t:this.shape_13,p:{x:-14,y:286.3}},{t:this.shape_4,p:{x:0.8,y:286.4}},{t:this.shape_2,p:{x:15.6,y:286.4}},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_150,p:{x:86.3}},{t:this.shape_32,p:{x:100.6,y:282.5}},{t:this.shape_35,p:{x:115.5,y:286.4}},{t:this.shape_180},{t:this.shape_168,p:{x:139}},{t:this.shape_179},{t:this.shape_146,p:{x:164.3}},{t:this.shape_48,p:{x:186.6}},{t:this.shape_145,p:{x:202}},{t:this.shape_92,p:{x:218.4,y:286.3}},{t:this.shape_103,p:{x:-63.4,y:328.8}},{t:this.shape_90,p:{x:-47.6,y:328.5}},{t:this.shape_55,p:{x:-32.1,y:328.7}},{t:this.shape_40,p:{x:-5.8}},{t:this.shape_178},{t:this.shape_66,p:{x:28.2,y:328.8}},{t:this.shape_177},{t:this.shape_101,p:{x:65.9,y:325.2}},{t:this.shape_14,p:{x:76.4}},{t:this.shape_5,p:{x:98.7}},{t:this.shape_176},{t:this.shape_118,p:{x:130.6}},{t:this.shape_140,p:{x:155.3}},{t:this.shape_20,p:{x:171.3,y:328.8}},{t:this.shape_175},{t:this.shape_38,p:{x:198.3}}]},10).to({state:[{t:this.shape_198},{t:this.shape_92,p:{x:-6.6,y:286.3}},{t:this.shape_173,p:{x:16.4}},{t:this.shape_132,p:{x:32.4}},{t:this.shape_35,p:{x:48,y:286.4}},{t:this.shape_34,p:{x:59.4}},{t:this.shape_33,p:{x:67.4}},{t:this.shape_32,p:{x:78.7,y:282.5}},{t:this.shape_52,p:{x:96.2}},{t:this.shape_74,p:{x:110.4}},{t:this.shape_29,p:{x:118.2}},{t:this.shape_28,p:{x:126.1}},{t:this.shape_197},{t:this.shape_160,p:{x:164.2}},{t:this.shape_196},{t:this.shape_195},{t:this.shape_42,p:{x:-85.4}},{t:this.shape_55,p:{x:-70.3,y:328.7}},{t:this.shape_2,p:{x:-55.3,y:328.8}},{t:this.shape_194},{t:this.shape_85,p:{x:-30.2,y:325.2}},{t:this.shape_82,p:{x:-18.2,y:328.7}},{t:this.shape_40,p:{x:-0.6}},{t:this.shape_41,p:{x:17.5}},{t:this.shape_193},{t:this.shape_66,p:{x:58.2,y:328.8}},{t:this.shape_192},{t:this.shape_187,p:{x:101.1,y:325.1}},{t:this.shape_191},{t:this.shape_14,p:{x:144}},{t:this.shape_20,p:{x:158.2,y:328.8}},{t:this.shape_84,p:{x:174,y:328.5}},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_5,p:{x:228.4}},{t:this.shape_38,p:{x:238.9}}]},10).to({state:[{t:this.shape_209},{t:this.shape_135,p:{x:-69.3}},{t:this.shape_208},{t:this.shape_32,p:{x:-39.4,y:282.5}},{t:this.shape_207},{t:this.shape_35,p:{x:-7.1,y:286.4}},{t:this.shape_206},{t:this.shape_45,p:{x:34.2}},{t:this.shape_205},{t:this.shape_68,p:{x:72.6}},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_185,p:{x:128.5}},{t:this.shape_145,p:{x:144}},{t:this.shape_4,p:{x:159.6,y:286.4}},{t:this.shape_48,p:{x:173.8}},{t:this.shape_18,p:{x:196.7,y:286.4}},{t:this.shape_101,p:{x:207.6,y:282.8}},{t:this.shape_201},{t:this.shape_40,p:{x:-104.3}},{t:this.shape_85,p:{x:-90.1,y:325.2}},{t:this.shape_158,p:{x:-79.5}},{t:this.shape_139,p:{x:-64.1}},{t:this.shape_200},{t:this.shape_16,p:{x:-28}},{t:this.shape_6,p:{x:-13.8}},{t:this.shape_42,p:{x:0.4}},{t:this.shape_14,p:{x:22.7}},{t:this.shape_143,p:{x:38.2}},{t:this.shape_46,p:{x:54.6,y:328.7}},{t:this.shape_5,p:{x:77.7}},{t:this.shape_63,p:{x:93.1}},{t:this.shape_2,p:{x:108.7,y:328.8}},{t:this.shape_92,p:{x:123.5,y:328.7}},{t:this.shape_55,p:{x:139.4,y:328.7}},{t:this.shape_20,p:{x:163,y:328.8}},{t:this.shape_156,p:{x:178}},{t:this.shape_8,p:{x:201.9,y:328.8}},{t:this.shape_199},{t:this.shape,p:{x:230.6}}]},10).wait(10));

	// highlight
	this.highlight = new lib.highlight();
	this.highlight.setTransform(-51,283,1.291,1,0,0,0,27.5,14.5);
	this.highlight.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.highlight).wait(10).to({scaleX:1,x:52.6,y:284.7},0).wait(10).to({x:-4,y:282.9},0).wait(10).to({scaleX:2.26,x:57.1,y:283},0).wait(10).to({scaleX:1,x:23.5,y:284.4},0).wait(10).to({scaleX:1.67,x:64.6,y:284.7},0).wait(10).to({scaleX:2.36,x:-15.4,y:283.7},0).wait(10).to({scaleX:1.22,x:58.6,y:284.7},0).wait(10).to({scaleX:1.2,x:39.5,y:283.4},0).wait(10).to({scaleX:1,x:-6.4,y:284.2},0).wait(10));

	// buttons
	this.btn_wrong = new lib.TextButton();
	this.btn_wrong.setTransform(-8.9,263.5,0.87,1.022,0,0,0,0.3,1.7);
	new cjs.ButtonHelper(this.btn_wrong, 0, 1, 2, false, new lib.TextButton(), 3);

	this.btn_correct = new lib.TextButton();
	this.btn_correct.setTransform(-88.6,261.9,1.017,1.018,0,0,0,1.8,0);
	new cjs.ButtonHelper(this.btn_correct, 0, 1, 2, false, new lib.TextButton(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_correct,p:{regX:1.8,scaleX:1.017,scaleY:1.018,x:-88.6,y:261.9,regY:0}},{t:this.btn_wrong,p:{regX:0.3,scaleX:0.87,scaleY:1.022,x:-8.9,y:263.5}}]}).to({state:[{t:this.btn_correct,p:{regX:1.7,scaleX:0.708,scaleY:0.995,x:26.3,y:263.7,regY:0}},{t:this.btn_wrong,p:{regX:0.4,scaleX:0.931,scaleY:1,x:-49,y:261.1}}]},10).to({state:[{t:this.btn_correct,p:{regX:1.8,scaleX:0.865,scaleY:0.986,x:-31,y:264.8,regY:3.1}},{t:this.btn_wrong,p:{regX:0.3,scaleX:1.026,scaleY:1,x:-115.1,y:263.2}}]},10).to({state:[{t:this.btn_correct,p:{regX:1.7,scaleX:1.722,scaleY:0.995,x:-4.3,y:260.7,regY:0}},{t:this.btn_wrong,p:{regX:0.4,scaleX:0.979,scaleY:0.933,x:-84.9,y:263.6}}]},10).to({state:[{t:this.btn_correct,p:{regX:1.7,scaleX:0.621,scaleY:0.986,x:1.5,y:264.8,regY:3.1}},{t:this.btn_wrong,p:{regX:0.4,scaleX:0.842,scaleY:1,x:-76.6,y:263.2}}]},10).to({state:[{t:this.btn_correct,p:{regX:1.7,scaleX:1.311,scaleY:0.995,x:18.9,y:263.3,regY:0}},{t:this.btn_wrong,p:{regX:0.3,scaleX:0.956,scaleY:1,x:-62.3,y:264.9}}]},10).to({state:[{t:this.btn_correct,p:{regX:1.7,scaleX:1.828,scaleY:0.951,x:-77.3,y:263.8,regY:0}},{t:this.btn_wrong,p:{regX:0.4,scaleX:1.683,scaleY:0.961,x:62.7,y:265.3}}]},10).to({state:[{t:this.btn_correct,p:{regX:1.6,scaleX:0.924,scaleY:1.038,x:29.4,y:260.3,regY:0}},{t:this.btn_wrong,p:{regX:0.4,scaleX:0.936,scaleY:1,x:106.1,y:262.7}}]},10).to({state:[{t:this.btn_correct,p:{regX:1.7,scaleX:0.94,scaleY:0.933,x:7.6,y:263,regY:0}},{t:this.btn_wrong,p:{regX:0.4,scaleX:0.716,scaleY:0.9,x:83,y:265.2}}]},10).to({state:[{t:this.btn_correct,p:{regX:1.5,scaleX:0.703,scaleY:0.933,x:-32.4,y:263,regY:0}},{t:this.btn_wrong,p:{regX:0.4,scaleX:0.716,scaleY:0.9,x:-100.5,y:265.9}}]},10).wait(10));

	// btn actions
	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#214DF8").s().p("AgvA4QgMgXAAgjQAAgfAPgYQASgbAcAAQAcAAAQAYQAOAVAAAeQAAAugQAYQgPAYgdAAQggAAgPgdgAgcgrQgJARAAAWQAAAhAJASQAJARATABQAWAAAKgaQAGgTAAgZQAAgegJgOQgJgPgSAAQgSAAgMAVg");
	this.shape_210.setTransform(-54,422);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#214DF8").s().p("AACBTIgTAAIgLgBQgFgCAAgGQAAgLARAAIAFAAIAEABIgBgQIgBgPQABgNACgaQACgcABgOQgPALgEAAQgEAAgDgDQgDgDAAgEQAAgFAJgIIAQgNQAIgJAIAAQAHAAAAAIIgBAHIAAAIIAAALIAAAKQABAMgDAZQgCAWAAAMIABAPIABAPIAKAAQAFAAADADQADADAAAEQAAAFgDACQgDADgFAAg");
	this.shape_211.setTransform(-65.4,421.7);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#214DF8").s().p("AgrBZQgDgCAAgFIABgDQAIgYAXgrQAVgpAJgXQAOgnAHABQAEAAADACQADADAAAEIgBAGIgMAdQgHAUgOAaIgVArIgUArQgCAFgGAAQgEABgDgDg");
	this.shape_212.setTransform(-76.1,421.8);

	this.score = new cjs.Text("0", "22px 'Comic Sans MS'", "#214DF8");
	this.score.name = "score";
	this.score.textAlign = "center";
	this.score.lineHeight = 33;
	this.score.lineWidth = 44;
	this.score.setTransform(-99,413.4);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#214DF8").s().p("AgFAyQgDgDAAgFIgBgFIgBgGQABgFADgDQADgDADAAQAMAAAAAWQAAAFgDADQgEAEgEAAQgDAAgDgEgAgHgaQgDgDAAgFIgBgEIAAgEQAAgFADgDQAEgDAEAAQAKAAAAATQAAAFgDADQgDADgEAAQgDAAgEgDg");
	this.shape_213.setTransform(-115.2,423.4);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#214DF8").s().p("AgjAuQgRgNAAgZQAAgZAOgTQAOgVAYAAQAQAAAMAGQAOAHAAAQQAAALgNAIQgFAEgRAGIgoAUQAHAJAJAEQAIAFAKAAQAIAAAKgDQANgEADgFQAEgGAEAAQAEAAADADQADADAAADQAAAMgTAJQgRAHgQAAQgWAAgOgMgAgVgbQgJAKgEASIAhgOQASgJAIgHQgKgJgPAAQgMAAgJALg");
	this.shape_214.setTransform(-124.2,424.7);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#214DF8").s().p("AgoAxIAAhKIAAgKIAAgLQAAgLAKABQAKAAAAARQAUgTAYgBQAJAAAEAHQAEAGAAANIAAAIQAAAOgKAAQgKAAAAgLIAAgHIAAgJQgRACgJAHQgJAHgGAOIAAA5QAAALgLAAQgJAAAAgLg");
	this.shape_215.setTransform(-135.4,424.8);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#214DF8").s().p("AgfAtQgPgPAAgZQgBgWANgTQAPgVAZgBQAVABALATQAJAQAAAWQAAAWgNARQgNAUgVgBQgSAAgNgNgAgSgVQgHANAAANQAAAPAIAKQAHAGAKABQAJgBAIgHQAJgKABgPQABgogYAAQgNAAgJAPg");
	this.shape_216.setTransform(-146.9,424.9);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#214DF8").s().p("AgeAvQgPgPAAgWQAAgUAPgXQAQgaASAAQAKAAANAFQARAGAAAJQAAAFgDADQgDACgEAAQgDABgCgCIgEgEQgHgFgOAAQgJAAgLATQgKASAAAMQAAAOAKAIQAJAHAMABQAHgBAHgDIAMgGIAFgCQAEAAADADQADADAAAEQAAAIgRAHQgOAHgKAAQgUAAgPgNg");
	this.shape_217.setTransform(-158.1,424.8);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#214DF8").s().p("AgqBKQgUgJAAgQQAAgFADgDQADgDAEAAQAGAAAEAGQAFAIAFADQAJAGARAAQAPAAAOgHQASgJAAgQQAAgOgPgIQgNgHgRAAQgRAAgMgGQgPgIAAgQQAAgUAVgPQAVgPAUAAQALAAANADQARAFAAAHQAAAJgKAAIgPgCQgKgCgGAAQgPAAgMAIQgMAJAAALQAAAJAQAEQAGABAPABQAZACANAOQANAKAAASQAAAagXAPQgVANgZAAQgUAAgQgHg");
	this.shape_218.setTransform(-171.3,422.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.score},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210}]}).wait(100));

	// Layer 6
	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#33CCFF").s().p("AgGA8QgEgFAAgEQAAgEADgCQADgDAEAAQADAAAEAFQAEAEAAAEQAAAEgDADQgEADgEAAQgCAAgEgFgAgFAiQgCgDAAgEIgBgJIAAgJIAAgfIABggQAAgEACgDQADgDADAAQAEAAADADQADADAAAEIAABRQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_219.setTransform(-133.3,111.4);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#33CCFF").s().p("AgyA6QgDgDAAgFQAAgGAFgHIAIgMIAaggQAOgUANgMIgRAAIgfAAIgDABIgCAAQgFAAgDgDQgDgDAAgFQgBgLARABIAPAAIAQABIAQgBIASAAQAYAAAAAKQAAAHgKAHIgLAHQgNAKgTAVIgZAmIAZgBIAbgBIAQABQAJACABAHQgBAFgDADQgEADgEAAIgHgBIgHAAIgiABIgjAAQgFAAgEgCg");
	this.shape_220.setTransform(-140.6,111.8);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#33CCFF").s().p("AgjA4QgEgDAAgEQAAgFAEgDQADgDAFAAIAPgBIgBgkQABgTABgTIgRAAQgEAAgDgDQgEgDAAgEQAAgFAEgDQACgCAEgBIAYAAQAMAAAXADQAKABAAAKQAAAFgDACQgDADgFAAIgUgCIgBAkIAAAjIAVAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAIgOAAIgNAAIgOACIgQABQgEAAgDgDg");
	this.shape_221.setTransform(-150.6,111.8);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#33CCFF").s().p("AgeA1QgVgQAAglIABgMIAAgLIAAgJIAAgJQAAgGADgFQADgHAFAAQAFAAADACQADADAAAFIAAANIAAANIAAALIgBALQAAAKADAKQADANAHAEQADADAMAAQATAAAHgjQAEgQAAgiQAAgEADgEQADgFAHAAQAFAAADADQACADAAAEQAAAfgDARQgFAZgNARQgFAIgIAFQgKAGgJAAQgTAAgKgHg");
	this.shape_222.setTransform(-160.9,111.9);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#33CCFF").s().p("AATAvQgOAFgKAAQgYAAgUgTQgSgTAAgWQAAgcAVgUQAWgTAbAAQAfAAAPAXQAOATAAAdQAAAWgYASIAPANIAJAHQAFAFAAAEQAAAEgDAEQgEADgFAAQgFAAgggdgAgBAeQgLgLAAgHQAAgFAEgDQADgDAEAAQAEAAADAFQAIAJAIAHQATgMAAgOQAAgWgJgNQgKgOgTAAQgTAAgOANQgPANAAATQAAANANANQAMAMAPAAIAEAAIAAAAg");
	this.shape_223.setTransform(-173.5,113.2);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("AgKAKQgEgEAAgGQAAgFAEgFQAFgEAFAAQAGAAAFAEQAEAFAAAFQAAAGgEAEQgFAFgGAAQgFAAgFgFg");
	this.shape_224.setTransform(286.7,176.4);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FF0000").s().p("AgmBeQgEAHgGAAQgEAAgEgEQgDgDAAgFIAAgKIABgKIgBgoIgBgmIAAgjIAAgkQAAgHAEgGQAEgIAHAAQAKAAAAALIgBAFIgBAFIAAAcIAAAgQALgHAKgEQAKgEAHAAQAbAAARAVQAQASAAAdQAAAdgTAUQgTAUgZAAQgUAAgQgIgAgTgFIgSALIAAAWIAAAUIAAAUIARAIQAIACAKAAQAQAAAMgNQAMgNAAgTQAAgTgKgNQgKgMgRAAQgJAAgLAGg");
	this.shape_225.setTransform(276,167);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FF0000").s().p("AgwA6IAAhXIABgNIAAgMQAAgNALAAQAMAAAAAVQAYgYAcAAQALAAAFAIQAFAIAAAQIAAAIQgBAQgMAAQgLAAAAgMIAAgJIAAgLQgUADgLAIQgLAJgIAQIABBEQAAANgNAAQgLAAAAgNg");
	this.shape_226.setTransform(262.1,170.5);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FF0000").s().p("AgqA2QgUgQAAgcQAAgfAQgXQASgYAcAAQAUAAANAHQARAJAAASQAAANgPAKQgGAFgVAHIguAXQAHALALAFQAKAGAMAAQAJAAAMgEQAPgEAEgHQAEgGAFAAQAFAAADADQAEADAAAFQAAAOgXAKQgTAJgTAAQgbAAgRgPgAgZghQgKAMgFAWIAngQQAVgMAJgIQgLgKgSAAQgPAAgKAMg");
	this.shape_227.setTransform(248.6,170.4);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FF0000").s().p("AgWBcQgQgmgShHIgKgjQgIgaAAgJQAAgFAFgEQADgDAGAAQAJAAADAKIAFAXIAMAqQAMAuAMAiIAAgCIAghaIALggQAHgSAIgKQAFgFAFAAQAGAAADAEQAFAEAAAFQgBAEgCAEQgIAMgFANIgKAcIgiBaQgGAQgIAQQgCAHgHAAQgKAAgEgKg");
	this.shape_228.setTransform(233.6,167.5);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FF0000").s().p("AghBjQgEgEAAgFQAAgNAcg8IguhWIgFgJQgEgGAAgEQAAgFAEgEQAEgEAFAAQAGAAADAEQAWAeAXA4IASgsQAKgXAKgQQAEgHAHAAQAFAAAEADQAEAEAAAFIgCAHIgsBcQgQAjgHAXIgIAZQgDAJgJAAQgFAAgEgDg");
	this.shape_229.setTransform(209.4,173.8);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FF0000").s().p("AgwA6IAAhXIAAgNIABgMQAAgNALAAQANAAAAAVQAXgYAdAAQAKAAAFAIQAFAIAAAQIAAAIQgBAQgMAAQgLAAAAgMIAAgJIgBgLQgTADgKAIQgMAJgHAQIAABEQAAANgNAAQgLAAAAgNg");
	this.shape_230.setTransform(197.2,170.5);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FF0000").s().p("AAoBAIgIgJQgMAHgKADQgJAEgEAAQgeAAgOgRQgMgQAAghQgBgcAWgWQAVgWAbAAQALAAAOAGQARAHAAAKQAAADgCADIgCAQIgBAaQgBAQADAJQABAFAHASIADAGIAAACQAAAFgDADQgDAEgFAAQgCAAgHgGgAgUgfQgPARAAATQAAAUAIAKQAHALAPAAQAKAAAJgEQAEgCAIgIQgDggAAgRIAAgLIACgOIgIgDIgFgBQgSAAgOAPg");
	this.shape_231.setTransform(183.9,170.6);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FF0000").s().p("AgLBbQgEgDAAgGIAAgXIgBgWIACgeIACgcQAAgGADgDQADgEAGAAQADAAAEAEQADADAAAGIgBAcIgCAeIABAWIAAAXQAAAGgDADQgDAEgEAAQgGAAgDgEgAgHhFQgEgEAAgGQAAgGAEgFQAFgEAEAAQAGAAAFAEQADAFAAAGQAAAGgDAEQgFAFgGAAQgEAAgFgFg");
	this.shape_232.setTransform(173.8,167.3);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FF0000").s().p("AgNBcIABgvIACgtIABgtIAAguQAAgMAKAAQANAAAAAMIgBAuIAAAtIgCA+IgBAeQgCANgIAAQgNAAAAgNg");
	this.shape_233.setTransform(166.4,166.8);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FF0000").s().p("AgLBbQgEgDAAgGIAAgXIgBgWIACgeIACgcQAAgGADgDQADgEAGAAQADAAAEAEQADADAAAGIgBAcIgCAeIABAWIAAAXQAAAGgDADQgDAEgEAAQgGAAgDgEgAgHhFQgEgEAAgGQAAgGAEgFQAFgEAEAAQAGAAAFAEQADAFAAAGQAAAGgDAEQgFAFgGAAQgEAAgFgFg");
	this.shape_234.setTransform(159.4,167.3);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FF0000").s().p("AAnBEQgLgNgcgnIgZAZIgVAVQgEAFgFgBQgFABgEgEQgEgEAAgFQAAgEAEgEIALgLIALgLIAbgaIgQgYQgKgPgIgGQgFgEAAgGQAAgEAEgFQAEgDAEgBQAIAAAPAUIAUAfIAZgYQAPgOAGgJQAEgFAFAAQAFAAAEADQAEAEAAAFQAAAHgMAMIgSARIgXAXIApA0QADAEAAAEQAAAFgDAEQgEADgFABQgFgBgEgEg");
	this.shape_235.setTransform(147.8,170);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FF0000").s().p("AAcA8QgQAJgTAAQgQAAgLgIQgMgIgCgQQgFghAAgYQAAgSADgWQACgLAKAAQAGAAAEADQADAEAAAFIgBATIgCAUIABAiQABAPADAJIAIAEIAIABQAPAAATgGIAAgZIAAgXQAAgbACgVQACgLALAAQAFAAAEADQAEAEgBAFIgCAwIAAAaIAAAbIABAIIAAAJQAAAFgEAEQgDADgGAAQgJAAgDgMg");
	this.shape_236.setTransform(133.5,170.5);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FF0000").s().p("AAsBBQgEgLgFgdQgMACgWAEIgfAHQgGARgQAgQgEAHgHAAQgFAAgEgEQgEgDAAgGQAAgGAUgoQgDgDAAgFQAAgKANgDQAOgZAWgjQAcgwAIAAQAKAAADAOIAIAqIATBWIAHAVQAEAKAAADQAAAGgEADQgEAEgFAAQgLAAgJgegAgPAIIAsgIIgKgwg");
	this.shape_237.setTransform(117,167.6);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("AgHBZQgEgDAAgFIABgPIAAgOIgDhIIgcgCQgLgCAAgLQAAgGADgDQAEgEAFAAIAbACIgBgRIAAgQQAAgFADgEQAEgDAFAAQAKAAACATIAAALIAAAHIAAAIIASgCIARABQAIADAAAJQAAAGgEAEQgDADgGAAIgGAAIgGAAIgSABIADBKIAAAFIAAAHQABAbgOAAQgDAAgEgDg");
	this.shape_238.setTransform(93.8,168.3);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AgjA4QgSgRAAgbQAAgYARgbQATgfAWAAQAMAAAPAGQAUAHAAALQAAAFgDAEQgDADgFAAQgEAAgDgCIgFgEQgHgGgRAAQgLAAgNAXQgMAVAAAOQAAAQAMAKQALAJAOAAQAIAAAJgEIAOgIIAGgCQAEAAAEAEQADADAAAFQAAAKgTAIQgRAIgMAAQgYAAgRgPg");
	this.shape_239.setTransform(81.1,170.4);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AgqA2QgUgQAAgcQAAgfAQgXQASgYAcAAQAUAAANAHQARAJAAASQAAANgPAKQgGAFgVAHIguAXQAHALALAFQAKAGAMAAQAJAAAMgEQAPgEAEgHQAEgGAFAAQAFAAADADQAEADAAAFQAAAOgXAKQgTAJgTAAQgbAAgRgPgAgZghQgKAMgFAWIAngQQAVgMAJgIQgLgKgSAAQgPAAgKAMg");
	this.shape_240.setTransform(67.4,170.4);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("AgwA6IAAhXIABgNIAAgMQAAgNALAAQAMAAAAAVQAYgYAcAAQALAAAFAIQAFAIAAAQIAAAIQgBAQgMAAQgLAAAAgMIAAgJIAAgLQgUADgLAIQgLAJgIAQIABBEQAAANgNAAQgLAAAAgNg");
	this.shape_241.setTransform(54.2,170.5);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AgwA6IAAhXIABgNIAAgMQAAgNALAAQANAAAAAVQAXgYAdAAQAKAAAFAIQAFAIAAAQIAAAIQgBAQgMAAQgLAAAAgMIAAgJIgBgLQgUADgJAIQgMAJgIAQIABBEQAAANgNAAQgLAAAAgNg");
	this.shape_242.setTransform(41.7,170.5);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000000").s().p("AglA1QgRgSgBgdQAAgaAPgXQASgZAdAAQAaAAANAXQAKATAAAaQgBAbgOATQgQAXgZAAQgVAAgQgQgAgVgZQgJAPAAAQQAAATAKAKQAJAJALAAQALAAAKgKQALgLAAgSQACgwgcAAQgRABgKARg");
	this.shape_243.setTransform(28,170.6);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("AgjA4QgSgRAAgbQAAgYARgbQATgfAWAAQAMAAAPAGQAUAHAAALQAAAFgDAEQgDADgFAAQgEAAgDgCIgFgEQgHgGgRAAQgLAAgNAXQgMAVAAAOQAAAQAMAKQALAJAOAAQAIAAAJgEIAOgIIAGgCQAEAAAEAEQADADAAAFQAAAKgTAIQgRAIgMAAQgYAAgRgPg");
	this.shape_244.setTransform(14.8,170.4);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#000000").s().p("AgqA2QgUgQAAgcQAAgfAQgXQASgYAcAAQAUAAANAHQARAJAAASQAAANgPAKQgGAFgVAHIguAXQAHALALAFQAKAGAMAAQAJAAAMgEQAPgEAEgHQAEgGAFAAQAFAAADADQAEADAAAFQAAAOgXAKQgTAJgTAAQgbAAgRgPgAgZghQgKAMgFAWIAngQQAVgMAJgIQgLgKgSAAQgPAAgKAMg");
	this.shape_245.setTransform(-6.6,170.4);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#000000").s().p("AAiBfQgDgKgCgTQgDgTAAgLIABgKIAAgKQAAgWgMAAQgPAAgMAMQgGAIgMAVQAAAwgEAJQgDAIgIAAQgFAAgEgEQgEgDAAgFIABgGQABgDABgPIAAgTIAAhbIABgWIgBgMIgBgMQAAgFAEgEQADgDAGAAQAKAAACALQACAMAAAKIgBAcIgBAcIAAALQALgOAMgHQAKgHANAAQAVAAAIAOQAFAKABAUIABAZIADAaIAEAaIABAEQAAAFgEAEQgEADgFAAQgJAAgDgKg");
	this.shape_246.setTransform(-21.2,167);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000000").s().p("AgHBZQgEgDAAgFIABgPIAAgOIgDhIIgcgCQgLgCAAgLQAAgGADgDQAEgEAFAAIAbACIgBgRIAAgQQAAgFADgEQAEgDAFAAQAKAAACATIAAALIAAAHIAAAIIASgCIARABQAIADAAAJQAAAGgEAEQgDADgGAAIgGAAIgGAAIgSABIADBKIAAAFIAAAHQABAbgOAAQgDAAgEgDg");
	this.shape_247.setTransform(-35.1,168.3);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#000000").s().p("AghBjQgEgEAAgFQAAgNAcg8IguhWIgFgJQgEgGAAgEQAAgFAEgEQAEgEAFAAQAGAAADAEQAWAeAXA4IASgsQAKgXAKgQQAEgHAHAAQAFAAAEADQAEAEAAAFIgCAHIgsBcQgQAjgHAXIgIAZQgDAJgJAAQgFAAgEgDg");
	this.shape_248.setTransform(-56.1,173.8);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#000000").s().p("AgTBsQgEgEAAgFIAAgCQADgRAAgTIAAgjIAAgjIgVACQgNAAABgNQAAgMAVgBIANAAIACgUQADgcALgNQALgQAcAAQASAAAAAMQAAAMgQAAQgfAAgEArIAAAIIAcgCQAVAAAAANQgBAJgJACIgKABQgGgBgYACIgBAbIAAAYIABAXQAAAYgCAOQgBAKgJAAQgGAAgDgDg");
	this.shape_249.setTransform(-69.3,167.6);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#000000").s().p("AgLBbQgEgDAAgGIAAgXIgBgWIACgeIACgcQAAgGADgDQADgEAGAAQADAAAEAEQADADAAAGIgBAcIgCAeIABAWIAAAXQAAAGgDADQgDAEgEAAQgGAAgDgEgAgHhFQgEgEAAgGQAAgGAEgFQAFgEAEAAQAGAAAFAEQADAFAAAGQAAAGgDAEQgFAFgGAAQgEAAgFgFg");
	this.shape_250.setTransform(-79.1,167.3);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000000").s().p("AgHBZQgEgDAAgFIABgPIAAgOIgDhIIgcgCQgLgCAAgLQAAgGADgDQAEgEAFAAIAbACIgBgRIAAgQQAAgFADgEQAEgDAFAAQAKAAACATIAAALIAAAHIAAAIIASgCIARABQAIADAAAJQAAAGgEAEQgDADgGAAIgGAAIgGAAIgSABIADBKIAAAFIAAAHQABAbgOAAQgDAAgEgDg");
	this.shape_251.setTransform(-89.1,168.3);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#000000").s().p("AAfA9IgEgbIgCgcIABgKIAAgMQABgcgLAAQgOAAgLARQgLAPgIAWIgBAMIAAANIAAALIABAMQABAFgEAEQgDADgGAAQgGAAgDgDQgEgEAAgFIgBgMIgBgLIACgjIADgkIgBgMIAAgMQAAgFADgEQAEgDAFAAQAMAAABAQIAAAPQAVgcAVAAQAUAAAIARQAGAMAAAYIAAANIAAAJQABALACARQADAQAAALQAAAFgEAEQgDADgGAAQgLAAgBgMg");
	this.shape_252.setTransform(-101.7,170.3);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#000000").s().p("AgqA2QgUgQAAgcQAAgfAQgXQASgYAcAAQAUAAANAHQARAJAAASQAAANgPAKQgGAFgVAHIguAXQAHALALAFQAKAGAMAAQAJAAAMgEQAPgEAEgHQAEgGAFAAQAFAAADADQAEADAAAFQAAAOgXAKQgTAJgTAAQgbAAgRgPgAgZghQgKAMgFAWIAngQQAVgMAJgIQgLgKgSAAQgPAAgKAMg");
	this.shape_253.setTransform(-115.7,170.4);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#000000").s().p("AgsBWQgSgSAAgcQAAgiASgSQASgVAbAAQAPAAAIAFIAMAJQABg2ADgSQABgMAKAAQAMAAAAANQAAARgFA9QgCAQAAATQAAAqAEAWIAAADQAAAFgDADQgEADgEAAQgIAAgEgLQgJAHgKADQgKAEgIAAQgbAAgRgSgAgdACQgKAMAAAaQAAAQALAMQAMAMAQAAQAIAAAIgEIAOgLIADgEIAAgWIAAgPIAAgOQgEgKgIgEQgIgFgMAAQgTAAgLALg");
	this.shape_254.setTransform(-130.8,166.9);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#000000").s().p("Ag3BdQgDgEAAgGQAAgFADgEQAEgEAFAAIAbgCQACgLAAgNIgBgVIgBgWQABgbADgsIgQABIgRAAQgGAAgDgDQgEgEAAgFQAAgMAMgCIAmgBQAYAAAmAGQALACAAALQAAAHgEADQgEADgFAAQgIAAgMgCIgVgDQgDAlAAAgIAAAWIABAWIgBAVIApAAQAEAAAFAEQADAEAAAFQAAAGgDAEQgFADgEAAIgWAAIgVABQgHAAgRADIgZACQgFgBgEgDg");
	this.shape_255.setTransform(-145.4,167.5);

	this.result = new cjs.Text("", "bold 20px 'Comic Sans MS'");
	this.result.name = "result";
	this.result.textAlign = "center";
	this.result.lineHeight = 30;
	this.result.lineWidth = 305;
	this.result.setTransform(60.7,438.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.result},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219}]}).wait(100));

	// next
	this.btn_next = new lib.goNext();
	this.btn_next.setTransform(266.8,441.5);
	new cjs.ButtonHelper(this.btn_next, 0, 1, 2, false, new lib.goNext(), 3);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#000000").ss(1,1,1).p("EAnIAAAMhOPAAA");
	this.shape_256.setTransform(65.4,438.5);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f().s("#000000").ss(1,1,1).p("EgnLAYKMAAGgk5IABraMBOQAAAIgCLaMgAFAk5");
	this.shape_257.setTransform(65.8,283.9);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.lf(["#FFFFFF","#5689FE"],[0.416,1],325.5,-206.8,329.2,200.9).s().p("EgnKASdMAAFgk5MBOQAAAMgAFAk5g");
	this.shape_258.setTransform(65.7,320.3);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#214DF8").s().p("EgnIAFsIACrXMBOPAAAIgCLXg");
	this.shape_259.setTransform(66,165.7);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#000000").ss(1,1,1).p("EgnFgMvIABraMBOQAAAIgCLaMgAFAk5MhOQAAAg");
	this.shape_260.setTransform(65.8,283.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.btn_next}]}).to({state:[{t:this.shape_259},{t:this.shape_258},{t:this.shape_260},{t:this.btn_next}]},99).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-199,97.8,516.6,390.3);


// stage content:



(lib.aux_quiz = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{quiz:0});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.btn_menu.addEventListener("click", goMenu.bind(this));
		
		function goMenu(){
		
			window.open ("verb_menu.html","_self");
		 
		}
		playSound("BeautifulDrumnbass");
		playSound("BeautifulDrumnbass",-1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Main
	this.btn_menu = new lib.skiptomenu();
	this.btn_menu.setTransform(514.1,20.3);
	new cjs.ButtonHelper(this.btn_menu, 0, 1, 2, false, new lib.skiptomenu(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_menu).wait(1));

	// Quiz2
	this.instance = new lib.practicequiz2();
	this.instance.setTransform(486,53.3,1,1,0,0,0,276.8,145.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(285.2,201.8,536.1,394.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;