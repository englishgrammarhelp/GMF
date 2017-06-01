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
		{src:"sounds/colon_spins.mp3", id:"colon_spins"},
		{src:"sounds/right_answer.mp3", id:"right_answer"},
		{src:"sounds/High_Screaming_Gtr.mp3", id:"High_Screaming_Gtr"},
		{src:"sounds/RockGroove.mp3", id:"RockGroove"},
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



(lib.skiptomenu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_3 = function() {
		playSound("colon_spins");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(3).call(this.frame_3).wait(1));

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
	this.shape_10.graphics.f().s("#000000").ss(2,1,1).p("AE3iIIAAERIptAAIAAkRg");
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
	this.shape_16.graphics.f().s("#000000").ss(2,1,1).p("AEaB8IozAAIAAj3IIzAAg");

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0066CC").s().p("AkZB8IAAj3IIzAAIAAD3g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.2,-16.9,58.6,30.5);


(lib.quiz_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(163,239,242,0)").s().p("AtvCqIAAlTIbfAAIAAFTg");
	this.shape.setTransform(88,17);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D5EFFA").s().p("AtvCqIAAlTIbfAAIAAFTg");
	this.shape_1.setTransform(88,17);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AtvCqIAAlTIbfAAIAAFTg");
	this.shape_2.setTransform(88,17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,176,34);


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
	this.initialize(mode,startPosition,loop,{firstSet:0,secondSet:10,thirdSet:19,fourthset:29,fifthset:39,sixthset:49,seventhset:59,eighthset:69,ninthset:79,tenthset:89});

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
			//this.highlight.visible = true;
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
			//this.highlight.visible = false;
		 
		}
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_18 = function() {
		this.stop();
	}
	this.frame_28 = function() {
		this.stop();
	}
	this.frame_38 = function() {
		this.stop();
	}
	this.frame_48 = function() {
		this.stop();
	}
	this.frame_58 = function() {
		this.stop();
	}
	this.frame_68 = function() {
		this.stop();
	}
	this.frame_78 = function() {
		this.stop();
	}
	this.frame_88 = function() {
		this.stop();
	}
	this.frame_98 = function() {
		this.stop();
		
		this.btn_next.addEventListener("click", goNext.bind(this));
		
		function goNext(){
		
			window.open ("compSen_finish.html","_self");
		 
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(9).call(this.frame_18).wait(10).call(this.frame_28).wait(10).call(this.frame_38).wait(10).call(this.frame_48).wait(10).call(this.frame_58).wait(10).call(this.frame_68).wait(10).call(this.frame_78).wait(10).call(this.frame_88).wait(10).call(this.frame_98).wait(1));

	// Layer 15
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNALQgFgFAAgGQAAgFAFgFQAHgFAGAAQAIAAAGAFQAGAFgBAFQABAGgGAFQgGAFgIAAQgGAAgHgFg");
	this.shape.setTransform(202.1,269.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgJBGQgFgEAAgHQAAgOgDgbQgDgZAAgOIgBgNQgPAIgOAUIgCACIAAAlIgBAJIAAAJQAAAGgFAEQgFAEgHAAQgLAAgDgKQgDgGAAgNIAAgrIgBgSIAAgSQAAgLAEgJQAFgLAIAAQAHAAAGAGQAFAFAAAGIgBALQASgWARAAQATAAAGAPQAIgHAJgDQAJgEAKAAQAYAAAJAYQACAFADAcIAJBAQAAAHgFAFQgFAEgHAAQgOAAgDgOIgEgjIgEgiQgEgWgFAAQgDAAgKAGIgOAKQAAANADAZQAEAaAAAOQAAAHgFAEQgFAFgHAAQgGAAgEgFg");
	this.shape_1.setTransform(187.3,264.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAdA4IgUAIQgIACgFABQgcAAgQgQQgOgQAAgfQAAgbAVgWQAXgUAbgBQAMABAPAGQATAIAAALQAAAEgDADIgCAMIgBARQAAAWAEAKIAFAMIAFAMQAAAGgFAEQgFAFgGAAQgGAAgMgLgAgQgXQgMAMAAAQQAAAQAFAJQAHAHALABQAFAAAIgDQAGgDAGgEQgEgcABgNIAAgJIABgMIgDgCIgEgBQgPAAgMAOg");
	this.shape_2.setTransform(170.5,264.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgoA0QgVgPAAgcQAAgdAQgWQATgXAcAAQAWAAAOAHQASAJAAATQAAANgPALQgHAEgVAIIgmASQAFAGAIAEQAIACAJABQARAAALgIQALgFAFAAQANAAAAAMQAAAOgVAJQgQAHgUAAQgbAAgSgOgAgPgcQgIAIgFAPIAbgMQAPgIAJgGQgHgFgOABQgJAAgIAHg");
	this.shape_3.setTransform(156.2,264.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgKBUQgFgEAAgHIAAgNIABgNIgCg9IgXgCQgQgCAAgOQAAgHAFgFQAFgEAHAAIAVABIgBgNIAAgMQAAgHAFgEQAFgFAHAAQAQAAAAAfIgBAKIANgBQAOAAAFABQAKAEAAALQAAAHgFAFQgFAEgHAAIgGAAIgGAAIgMABIACA/IABAGIAAAGQAAAdgSAAQgFAAgFgFg");
	this.shape_4.setTransform(143.5,262);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgoA0QgVgPAAgcQAAgdAQgWQATgXAcAAQAWAAAOAHQASAJAAATQAAANgPALQgHAEgUAIIgoASQAGAGAJAEQAHACAKABQAQAAALgIQAKgFAHAAQAMAAAAAMQAAAOgUAJQgSAHgSAAQgcAAgSgOgAgPgcQgJAIgEAPIAbgMQAPgIAJgGQgIgFgNABQgJAAgIAHg");
	this.shape_5.setTransform(119.6,264.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAcBZQgDgKgCgSQgDgRAAgLIABgJIAAgJIAAgLQgBgFgGAAQgNAAgJAKQgGAHgKARQAAAtgEAJQgFAKgKgBQgHAAgFgEQgFgEAAgIIABgGQABgCAAgfIABhPIAAgFIABgTIgCgLIgBgLQAAgHAFgFQAFgEAHAAQAMAAAFANQACAHAAAQIgBAYIgBAYQAJgJALgEQAIgFALAAQAVAAAJAMQAHAJACAQIABAeIACAYIAFAYIAAAFQAAAGgFAEQgFAFgHAAQgMAAgEgMg");
	this.shape_6.setTransform(105.8,260.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgKBUQgFgEAAgHIAAgNIABgNIgCg9IgXgCQgQgCAAgOQAAgHAFgFQAFgEAHAAIAVABIgBgNIAAgMQAAgHAFgEQAFgFAHAAQAQAAAAAfIgBAKIANgBQAOAAAFABQAKAEAAALQAAAHgFAFQgFAEgHAAIgGAAIgGAAIgMABIACA/IABAGIAAAGQAAAdgSAAQgFAAgFgFg");
	this.shape_7.setTransform(92.4,262);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAYA4IgDgZQgCgOAAgLIABgJIAAgMIABgEIAAgGQAAgJgGgBQgKAAgIAOQgKANgGATIgBALIgBALIAAAKIgBALQAAAHgFAFQgEAEgIAAQgHAAgFgEQgEgEgBgIIAAgKIgBgLIABghIACgfIAAgLIgBgMQAAgGAGgFQAFgFAGAAQAQABABATIAAABQASgRASAAQAYgBAIAUQAGANAAAZIAAAJIAAAGQAAAKADAPQACAOAAAKQAAAGgFAFQgEAEgIAAQgPAAgCgOg");
	this.shape_8.setTransform(69.3,263.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgnAzQgSgRgBgcQAAgZAPgVQATgZAfAAQAYAAAPATQANASAAAaQAAAagPAUQgRAWgbAAQgXAAgQgPgAgQgTQgIALAAAOQAAAOAJAIQAGAGAJAAQAJAAAHgHQAJgIABgPQACglgXAAQgNAAgIAOg");
	this.shape_9.setTransform(55.8,264.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AghA/QgTgHABgNQAAgMAOAAQAGAAAKADQAKAEAHAAQAWAAABgKQgBgGgRgIQgXgLgHgDQgSgMAAgRQAAgZAagIQAQgFAdAAQAMAAAGADQAIAEAAALQAAAWgLAAQgMAAgDgKIgKgBQgcAAABAIQAAAFAPAIQAYALAJAGQARALAAARQAAAVgTAKQgPAJgVAAQgRAAgNgFg");
	this.shape_10.setTransform(32.4,264);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgvA/QgEgEAAgHIAAhOIABgLIAAgMQgBgHAFgEQAEgFAHAAQAOAAACAOQAUgQAbAAQAYAAAAAhIgBAIQgBASgPAAQgPAAAAgPIgBgNQgaAFgMAXIAAA8QABAHgFAEQgFAFgHAAQgIAAgEgFg");
	this.shape_11.setTransform(20.7,264.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgpA0QgUgPAAgcQAAgdARgWQASgXAcAAQAVAAAOAHQATAJAAATQAAANgPALQgHAEgUAIIgnASQAFAGAJAEQAHACAKABQAQAAALgIQAKgFAHAAQAMAAAAAMQAAAOgUAJQgSAHgSAAQgbAAgUgOgAgPgcQgIAIgFAPIAcgMQAOgIAKgGQgJgFgNABQgJAAgIAHg");
	this.shape_12.setTransform(7.2,264.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgJBGQgFgEAAgHQAAgOgDgbQgDgZAAgOIgBgNQgPAIgOAUIgCACIAAAlIgBAJIAAAJQAAAGgFAEQgFAEgHAAQgLAAgDgKQgDgGAAgNIAAgrIgBgSIAAgSQAAgLAEgJQAFgLAIAAQAHAAAGAGQAFAFAAAGIgBALQASgWARAAQATAAAGAPQAIgHAJgDQAJgEAKAAQAYAAAJAYQACAFADAcIAJBAQAAAHgFAFQgFAEgHAAQgOAAgDgOIgEgjIgEgiQgEgWgFAAQgDAAgKAGIgOAKQAAANADAZQAEAaAAAOQAAAHgFAEQgFAFgHAAQgGAAgEgFg");
	this.shape_13.setTransform(-9,264.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgJBGQgFgEAAgHQAAgOgDgbQgDgZAAgOIgBgNQgPAIgOAUIgCACIAAAlIgBAJIAAAJQAAAGgFAEQgFAEgHAAQgLAAgDgKQgDgGAAgNIAAgrIgBgSIAAgSQAAgLAEgJQAFgLAIAAQAHAAAGAGQAFAFAAAGIgBALQASgWARAAQATAAAGAPQAIgHAJgDQAJgEAKAAQAYAAAJAYQACAFADAcIAJBAQAAAHgFAFQgFAEgHAAQgOAAgDgOIgEgjIgEgiQgEgWgFAAQgDAAgKAGIgOAKQAAANADAZQAEAaAAAOQAAAHgFAEQgFAFgHAAQgGAAgEgFg");
	this.shape_14.setTransform(-28.4,264.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgOBYQgFgEAAgHIAAgXIgBgWIABgbIACgZQAAgIAEgEQAFgFAIAAQAFAAAFAFQAEAEAAAIIgBAZIgBAbIAAAWIABAXQAAAHgFAEQgFAFgFAAQgHAAgFgFgAgKg9QgGgFAAgIQAAgHAGgFQAGgGAGAAQAHAAAGAGQAGAFAAAHQAAAIgGAFQgGAGgHAAQgGAAgGgGg");
	this.shape_15.setTransform(-41.6,261.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAEAmQgDgLgDgdIgDAFIgTAvQgCAGgDACQgFAJgKAAQgGAAgHgKQgGgLgEgRQgEgOgIgxIgCgRQAAgHAFgEQAFgFAHAAQAOAAADANIACARIACARIAFAdQAJgXAMgkQAFgQAMgBQANAAAEASIAHAhIAGAgIAThJQADgKAMAAQAHAAAGAFQAFAEAAAHIgBADQgMAwgNAmQgEALgIALQgGAIgKAAQgPAAgJgeg");
	this.shape_16.setTransform(-53.8,264.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AghA/QgTgHABgNQAAgMAOAAQAFAAALADQAKAEAGAAQAXAAABgKQAAgGgSgIQgXgLgHgDQgSgMAAgRQAAgZAagIQAQgFAdAAQAMAAAGADQAIAEAAALQAAAWgMAAQgMAAgCgKIgKgBQgbAAgBAIQAAAFAQAIQAYALAJAGQARALABARQgBAVgTAKQgPAJgWAAQgQAAgNgFg");
	this.shape_17.setTransform(-68.7,264);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgKBUQgFgEAAgHIAAgNIABgNIgCg9IgXgCQgQgCAAgOQAAgHAFgFQAFgEAHAAIAVABIgBgNIAAgMQAAgHAFgEQAFgFAHAAQAQAAAAAfIgBAKIANgBQAOAAAFABQAKAEAAALQAAAHgFAFQgFAEgHAAIgGAAIgGAAIgMABIACA/IABAGIAAAGQAAAdgSAAQgFAAgFgFg");
	this.shape_18.setTransform(210.3,225.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AghA/QgTgHABgNQAAgMAOAAQAFAAALADQAKAEAHAAQAWAAABgKQAAgGgSgIQgXgLgHgDQgSgMAAgRQAAgZAagIQAQgFAdAAQAMAAAGADQAIAEAAALQAAAWgLAAQgNAAgCgKIgKgBQgbAAgBAIQAAAFAQAIQAYALAJAGQARALABARQgBAVgTAKQgPAJgWAAQgQAAgNgFg");
	this.shape_19.setTransform(198.2,227.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgoA0QgVgPAAgcQAAgdAQgVQATgYAcAAQAWAAAOAHQASAJAAATQAAANgPALQgHAEgVAHIgmATQAFAGAIADQAJADAIABQARgBALgGQALgGAFAAQANAAAAAMQAAAOgVAJQgQAHgUAAQgbAAgSgOgAgPgcQgIAHgFAQIAbgMQAPgIAJgGQgHgFgOAAQgJAAgIAIg");
	this.shape_20.setTransform(185,227.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgjBcQgFAFgGAAQgGAAgGgEQgEgFAAgGIABgJIAAgJIAAiJQAAgJADgGQAGgJAJAAQANAAgBAOIAAAFIgBAFIAAAvQAKgFAIgCQAIgDAGAAQAdAAARAVQARARAAAcQAAAdgTATQgUAUgbAAQgRAAgPgGgAgNgBQgIACgLAHIAAA0QARAHAMAAQAOAAAKgKQAKgLAAgQQAAgQgIgKQgJgJgOAAQgEAAgJAEg");
	this.shape_21.setTransform(170.8,223.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgoA0QgVgPAAgcQAAgdAQgVQATgYAcAAQAWAAAOAHQASAJAAATQAAANgPALQgHAEgVAHIgnATQAGAGAIADQAJADAIABQARgBALgGQAKgGAHAAQAMAAAAAMQAAAOgVAJQgQAHgUAAQgbAAgSgOgAgPgcQgJAHgEAQIAbgMQAPgIAJgGQgHgFgOAAQgJAAgIAIg");
	this.shape_22.setTransform(145.3,227.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAcBZQgDgKgCgSQgDgRAAgMIABgJIAAgJIAAgKQgBgFgGAAQgNAAgJALQgGAFgKASQAAAtgEAIQgFALgKAAQgHAAgFgFQgFgFAAgGIABgHQABgDAAgeIABhQIAAgDIABgUIgCgLIgBgLQAAgHAFgFQAFgEAHAAQAMAAAFANQACAHAAAPIgBAZIgBAYQAJgJALgFQAIgDALAAQAVAAAJALQAHAJACAQIABAeIACAYIAFAYIAAAEQAAAHgFAFQgFAEgHAAQgMAAgEgMg");
	this.shape_23.setTransform(131.5,223.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgKBUQgFgEAAgHIAAgNIABgNIgCg9IgXgCQgQgCAAgOQAAgHAFgFQAFgEAHAAIAVABIgBgNIAAgMQAAgHAFgEQAFgFAHAAQAQAAAAAfIgBAKIANgBQAOAAAFABQAKAEAAALQAAAHgFAFQgFAEgHAAIgGAAIgGAAIgMABIACA/IABAGIAAAGQAAAdgSAAQgFAAgFgFg");
	this.shape_24.setTransform(118.2,225.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("Ag9BOQgBgHAFgEQAEgFAHAAIAQACQAKACAIABQAQAAAJgMQAIgKACgYQgHAGgHAEQgIADgHAAQgZAAgPgQQgPgQAAgWQAAgiAUgUQAVgWAiAAQAMAAAHAEQAJACAFAGQAQABAAARQAAAJgDANQgFAegBAeQgBAngMARQgQAZgnAAQgvgBAAgSgAgRg2QgLAMAAAUQAAAOAGAIQAFAFAMAAQAHAAAKgKQAKgKABgMIAGgkIgJgDIgIgCQgSAAgLAOg");
	this.shape_25.setTransform(94.7,230.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAYA4IgDgaQgCgNAAgMIABgJIAAgLIABgDIAAgGQgBgLgFABQgKAAgIANQgKANgGATIAAALIgBALIgBALIgBAKQAAAHgFAFQgEAFgIAAQgHAAgFgFQgEgFgBgGIAAgLIgBgLIABghIACgfIAAgLIgBgLQAAgIAGgEQAEgEAHAAQAQgBACAUIAAABQASgSARAAQAXABAJASQAGANAAAaIAAAJIAAAGQAAAKADAOQACAQAAAJQAAAGgFAFQgFAFgHAAQgPAAgCgPg");
	this.shape_26.setTransform(81.8,227.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgOBYQgFgEAAgHIAAgXIgBgWIABgbIACgZQAAgIAEgEQAFgFAIAAQAFAAAFAFQAEAEAAAIIgBAZIgBAbIAAAWIABAXQAAAHgFAEQgFAFgFAAQgHAAgFgFgAgKg9QgGgFAAgIQAAgHAGgFQAGgGAGAAQAHAAAGAGQAGAFAAAHQAAAIgGAFQgGAGgHAAQgGAAgGgGg");
	this.shape_27.setTransform(71.9,224.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgKBUQgFgEAAgHIAAgNIABgNIgCg9IgXgCQgQgCAAgOQAAgHAFgFQAFgEAHAAIAVABIgBgNIAAgMQAAgHAFgEQAFgFAHAAQAQAAAAAfIgBAKIANgBQAOAAAFABQAKAEAAALQAAAHgFAFQgFAEgHAAIgGAAIgGAAIgMABIACA/IABAGIAAAGQAAAdgSAAQgFAAgFgFg");
	this.shape_28.setTransform(62.2,225.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AglA1QgTgQAAgaQAAgXARgZQAUgeAYAAQAMAAARAHQAVAIAAALQAAAGgEAFQgFAFgGAAQgGAAgIgGQgGgFgPAAQgIAAgLASQgLASAAALQAAANAKAHQAIAHANAAQAJAAALgGQAMgHADAAQAHAAAEAFQAFAFAAAGQAAAJgVAKQgSAIgMAAQgZAAgSgPg");
	this.shape_29.setTransform(49.6,227.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgoA0QgVgPAAgcQAAgdAQgVQASgYAdAAQAWAAANAHQATAJAAATQAAANgPALQgHAEgUAHIgoATQAGAGAJADQAHADAKABQAQgBALgGQAKgGAHAAQAMAAAAAMQAAAOgUAJQgSAHgSAAQgbAAgTgOgAgPgcQgIAHgFAQIAbgMQAPgIAKgGQgJgFgNAAQgJAAgIAIg");
	this.shape_30.setTransform(36.2,227.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgLBgQgEgFAAgIIAAimQAAgHAFgFQAFgEAFAAQAHAAAFAEQAEAFAAAHIAACgQAAAXgQAAQgGAAgFgEg");
	this.shape_31.setTransform(25.9,223.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgoA0QgVgPAAgcQAAgdAQgVQATgYAcAAQAWAAAOAHQASAJAAATQAAANgPALQgHAEgVAHIgmATQAFAGAIADQAJADAIABQARgBALgGQALgGAFAAQANAAAAAMQAAAOgVAJQgQAHgUAAQgbAAgSgOgAgPgcQgIAHgFAQIAbgMQAPgIAJgGQgHgFgOAAQgJAAgIAIg");
	this.shape_32.setTransform(15.4,227.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgiA/QgRgHgBgNQAAgMAPAAQAGAAAKADQALAEAFAAQAXAAAAgKQAAgGgRgIQgXgLgHgDQgRgMAAgRQAAgZAagIQAPgFAdAAQANAAAFADQAIAEAAALQAAAWgMAAQgLAAgDgKIgKgBQgcAAAAAIQABAFAPAIQAZALAIAGQASALAAARQAAAVgUAKQgQAJgUAAQgRAAgOgFg");
	this.shape_33.setTransform(2.4,227.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgvA/QgEgEAAgHIAAhOIABgLIAAgMQgBgHAFgEQAEgFAIAAQANAAACAOQAUgQAbAAQAYAAAAAhIgBAIQgBASgPAAQgPAAAAgPIgBgNQgaAFgMAXIAAA8QABAHgFAEQgFAFgHAAQgIAAgEgFg");
	this.shape_34.setTransform(-20.2,227.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgpA0QgUgPAAgcQAAgdAQgVQASgYAdAAQAVAAAOAHQATAJAAATQAAANgPALQgHAEgUAHIgoATQAGAGAJADQAHADAKABQAQgBALgGQAKgGAHAAQAMAAAAAMQAAAOgUAJQgRAHgTAAQgbAAgUgOgAgPgcQgIAHgFAQIAcgMQAOgIAKgGQgJgFgNAAQgJAAgIAIg");
	this.shape_35.setTransform(-33.6,227.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgKBUQgFgEAAgHIAAgNIABgNIgCg9IgXgCQgQgCAAgOQAAgHAFgFQAFgEAHAAIAVABIgBgNIAAgMQAAgHAFgEQAFgFAHAAQAQAAAAAfIgBAKIANgBQAOAAAFABQAKAEAAALQAAAHgFAFQgFAEgHAAIgGAAIgGAAIgMABIACA/IABAGIAAAGQAAAdgSAAQgFAAgFgFg");
	this.shape_36.setTransform(-46.3,225.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgWBmQgFgEAAgHIAAgDQADgRAAgQIAAg7IgIABIgHABQgIAAgFgEQgEgFAAgHQAAgLALgEQAGgCAQAAIABgOQAEgbALgNQAMgRAeAAQAWAAAAAQQAAAQgVAAQgPAAgGAKQgFAIgCAQIAAAEIAXgCQAXAAAAAQQAAAQgYgBIgYACIAAAeIABAhQAAAXgDANQgDANgLAAQgHAAgFgFg");
	this.shape_37.setTransform(-58.7,224.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AA9BbQgJAAgKgWQgHgPgEgSIgdACIgcADQgFAOgPAbQgFAJgJAAQgHAAgGgFQgFgFAAgHQAAgGASgkQgCgEABgDQAAgGAMgDQAQgcAWggQAdgvAGAAQAOAAAEARIAIAnIASBOQABAEAGAMQAEALAAAFQAAAHgFAFQgFAFgGAAIgCgBgAgIALIAPgCIARgCIgIgnIgYArg");
	this.shape_38.setTransform(-74.2,224.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgNALQgFgFgBgGQABgFAFgFQAHgFAGAAQAIAAAGAFQAFAFABAFQgBAGgFAFQgGAFgIAAQgGAAgHgFg");
	this.shape_39.setTransform(130.7,269.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgvA/QgEgEAAgHIAAhOIABgLIAAgMQgBgHAFgEQAEgFAHAAQAOAAACAOQAUgQAaAAQAZAAAAAhIgBAIQgBASgPAAQgPAAAAgPIgBgNQgZAFgNAXIAAA8QAAAHgEAEQgFAFgHAAQgIAAgEgFg");
	this.shape_40.setTransform(119.6,264.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgpA0QgUgPAAgcQAAgdARgWQARgXAdAAQAVAAAOAHQATAJAAATQAAANgPALQgHAEgVAIIgmASQAFAGAIAEQAJACAJABQAQAAALgIQALgFAFAAQANAAAAAMQAAAOgUAJQgSAHgSAAQgcAAgTgOgAgPgcQgJAIgEAPIAcgMQAOgIAKgGQgIgFgOABQgJAAgIAHg");
	this.shape_41.setTransform(106.1,264.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgRA2IgohgQgCgEAAgEQAAgGAFgFQAGgFAHAAQAKAAAEAKQAHAPAUA0IAQgoIALgaQAFgKAKAAQAHAAAFAFQAGAFAAAGQAAAEgUAtIgaA1QAAAFgFAFQgEADgFAAQgMABgFgNg");
	this.shape_42.setTransform(93.5,264);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgvA/QgEgEAAgHIAAhOIABgLIAAgMQAAgHAEgEQAEgFAIAAQANAAACAOQAUgQAbAAQAYAAAAAhIgBAIQgBASgPAAQgPAAAAgPIgBgNQgaAFgMAXIAAA8QABAHgFAEQgFAFgHAAQgIAAgEgFg");
	this.shape_43.setTransform(74.4,264.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgpA0QgUgPAAgcQAAgdARgWQARgXAdAAQAWAAAOAHQASAJAAATQAAANgPALQgHAEgVAIIgmASQAFAGAIAEQAJACAIABQARAAALgIQALgFAFAAQANAAAAAMQAAAOgVAJQgQAHgUAAQgbAAgTgOgAgPgcQgIAIgFAPIAbgMQAPgIAJgGQgHgFgOABQgJAAgIAHg");
	this.shape_44.setTransform(50.1,264.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgyBiQgEgGAAgHIAAgtIAAguQAAgbgCgSIgCgZQAAgKAFgHQAFgIAJAAQAHAAAFAFQAEAEAAAGIAAACQAIgFAJgCQAGgCAIgBQAcAAANAZQAKARAAAdQAAAZgQASQgQASgbAAQgJAAgLgCIgBAxQAAAHgEAGQgFAEgHAAQgIAAgFgEgAgGg5QgIAEgIAGIACAxQALAEAJgBQAMAAAHgHQAGgHAAgOIgBgXQgEgOgMAAQgIgBgGAEg");
	this.shape_45.setTransform(-0.3,267);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAYA8QgQAGgOAAQgSAAgMgIQgNgIgDgQQgEgeAAgWQAAgQADgUQADgOAOAAQAHAAAFAEQAFAFAAAGIgCARIgCASQAAARACAKQABANACAJIAGACIAGAAQALAAAQgEIAAgVIAAgSQAAgZACgTQACgOAPAAQAHAAAFAEQAFAFAAAHIgCArIAAAWIAAAZIAAAIIABAHQAAAHgFAFQgFAEgHAAQgKAAgFgJg");
	this.shape_46.setTransform(-13.7,264.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("Ag+BOQAAgHAFgEQAEgFAHAAIAQACQAKACAIABQARAAAIgMQAIgKACgYQgHAGgIAEQgHADgHAAQgYAAgQgQQgPgQAAgWQAAgiAUgUQAVgWAiAAQALAAAIAEQAJACAFAGQAPABAAARQAAAJgCANQgFAegBAeQgBAngMARQgQAZgnAAQgvgBgBgSgAgSg2QgJAMgBAUQABAOAFAIQAGAFALAAQAHAAALgKQAJgKABgMIAGgkIgIgDIgIgCQgTAAgMAOg");
	this.shape_47.setTransform(164.7,230.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAZA4IgEgaQgCgNAAgMIAAgJIABgLIAAgDIAAgGQAAgLgEABQgLAAgIANQgKANgFATIgBALIgBALIgBALIgBAKQAAAHgFAFQgEAFgIAAQgHAAgFgFQgFgFABgGIgBgLIgBgLIACghIABgfIAAgLIAAgLQAAgIAEgEQAFgEAIAAQAQgBABAUIAAABQARgSATAAQAXABAIASQAGANAAAaIAAAJIAAAGQAAAKACAOQADAQAAAJQAAAGgFAFQgFAFgHAAQgPAAgBgPg");
	this.shape_48.setTransform(151.8,227.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAEAmQgDgLgDgcIgDAFIgTAvQgCAFgDADQgFAIgKABQgGAAgHgLQgGgLgEgQQgEgQgIgwIgCgSQAAgGAFgFQAFgEAHAAQAOAAADANIACARIACARIAFAdQAJgXAMglQAFgPAMAAQANAAAEARIAHAgIAGAhIAThIQADgLAMAAQAHAAAGAEQAFAFAAAHIgBAEQgMAvgNAlQgEAMgIALQgGAIgKAAQgPgBgJgdg");
	this.shape_49.setTransform(129.6,227.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgvA/QgEgEAAgHIAAhOIAAgLIAAgMQABgHAEgEQAEgFAIAAQANAAADAOQATgQAaAAQAZAAAAAhIAAAIQgCASgPAAQgQAAAAgPIAAgNQgZAFgMAXIAAA8QAAAHgFAEQgFAFgHAAQgIAAgEgFg");
	this.shape_50.setTransform(102.1,227.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgpA0QgUgPAAgcQAAgdARgVQARgYAdAAQAVAAAOAHQATAJAAATQAAANgPALQgHAEgVAHIgmATQAFAGAIADQAJADAJABQAQgBALgGQALgGAFAAQANAAAAAMQAAAOgUAJQgSAHgSAAQgcAAgTgOgAgPgcQgJAHgEAQIAcgMQAOgIAKgGQgIgFgOAAQgJAAgIAIg");
	this.shape_51.setTransform(77.8,227.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgpA0QgUgPAAgcQAAgdARgVQASgYAcAAQAVAAAOAHQATAJAAATQAAANgPALQgHAEgUAHIgoATQAGAGAJADQAHADAKABQAQgBALgGQAKgGAHAAQAMAAAAAMQAAAOgUAJQgSAHgSAAQgbAAgUgOgAgPgcQgIAHgFAQIAcgMQAOgIAKgGQgJgFgNAAQgJAAgIAIg");
	this.shape_52.setTransform(51.8,227.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAEAmQgDgLgDgcIgDAFIgTAvQgCAFgDADQgFAIgKABQgGAAgHgLQgGgLgEgQQgEgQgIgwIgCgSQAAgGAFgFQAFgEAHAAQAOAAADANIACARIACARIAFAdQAJgXAMglQAFgPAMAAQANAAAEARIAHAgIAGAhIAThIQADgLAMAAQAHAAAGAEQAFAFAAAHIgBAEQgMAvgNAlQgEAMgIALQgGAIgKAAQgPgBgJgdg");
	this.shape_53.setTransform(36.5,227.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgpA0QgUgPAAgcQAAgdARgVQARgYAdAAQAVAAAOAHQATAJAAATQAAANgPALQgHAEgVAHIgmATQAFAGAIADQAJADAJABQAQgBALgGQALgGAFAAQANAAAAAMQAAAOgUAJQgSAHgSAAQgcAAgTgOgAgPgcQgJAHgEAQIAcgMQAOgIAKgGQgIgFgOAAQgJAAgIAIg");
	this.shape_54.setTransform(9.8,227.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAEAmQgDgLgDgcIgDAFIgTAvQgCAFgDADQgFAIgKABQgGAAgHgLQgGgLgEgQQgEgQgIgwIgCgSQAAgGAFgFQAFgEAHAAQAOAAADANIACARIACARIAFAdQAJgXAMglQAFgPAMAAQANAAAEARIAHAgIAGAhIAThIQADgLAMAAQAHAAAGAEQAFAFAAAHIgBAEQgMAvgNAlQgEAMgIALQgGAIgKAAQgPgBgJgdg");
	this.shape_55.setTransform(-5.4,227.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgiA/QgRgHgBgNQAAgMAPAAQAGAAAKADQALAEAFAAQAXAAAAgKQAAgGgRgIQgXgLgHgDQgRgMAAgRQAAgZAZgIQAQgFAdAAQANAAAFADQAIAEAAALQAAAWgMAAQgMAAgCgKIgKgBQgbAAgBAIQAAAFAQAIQAYALAJAGQASALAAARQAAAVgUAKQgPAJgWAAQgQAAgOgFg");
	this.shape_56.setTransform(-31.1,227.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AA+BbQgKAAgKgWQgHgPgEgSIgeACIgbADQgFAOgOAbQgGAJgKAAQgGAAgFgFQgGgFAAgHQAAgGASgkQgCgEAAgDQABgGALgDQASgcAVggQAcgvAIAAQANAAAFARIAHAnIATBOQAAAEAFAMQAFALAAAFQAAAHgGAFQgEAFgGAAIgBgBgAgIALIAPgCIARgCIgIgnIgYArg");
	this.shape_57.setTransform(-46.3,224.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AAdA4IgUAIQgJACgDABQgdAAgQgQQgOgQAAgfQAAgbAWgWQAVgUAdgBQALABAQAGQASAIAAALQAAAEgDADIgCAMIgBARQABAWADAKIAGAMIAEAMQAAAGgEAEQgFAFgHAAQgGAAgMgLgAgQgXQgNAMAAAQQAAAQAHAJQAFAHAMABQAGAAAGgDQAHgDAGgEQgEgcAAgNIABgJIACgMIgFgCIgDgBQgOAAgNAOg");
	this.shape_58.setTransform(191.7,264.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgpA0QgUgPAAgcQAAgdARgWQARgXAdAAQAVAAAOAHQATAJAAATQAAANgPALQgHAEgUAIIgoASQAGAGAJAEQAHACAKABQAQAAALgIQAKgFAHAAQAMAAAAAMQAAAOgUAJQgRAHgTAAQgbAAgUgOgAgPgcQgIAIgFAPIAcgMQAOgIAKgGQgJgFgNABQgJAAgIAHg");
	this.shape_59.setTransform(177.4,264.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAhBcQgIAEgJACQgJABgHABQgcAAgSgSQgSgRAAgcQAAghASgSQATgUAcAAQAJAAAHACQAHABAGAFQABgrACgPQACgOAOAAQAHgBAFAFQAEAFAAAGQAAATgCAjQgDAhAAASQAAAsADAPIAAADQAAAHgFAEQgFAEgGABQgJgBgFgHgAgYAFQgJALAAAVQAAANAKAJQAKAJANAAQAHAAAFgCQADgCAIgGIAEgDIAAgtQgEgIgGgCQgHgEgJAAQgQAAgJAJg");
	this.shape_60.setTransform(163.1,260.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AAhBcQgIAEgJACQgJABgHABQgcAAgSgSQgSgRAAgcQAAghASgSQATgUAcAAQAJAAAHACQAHABAGAFQABgrACgPQACgOAOAAQAHgBAFAFQAEAFAAAGQAAATgCAjQgDAhAAASQAAAsADAPIAAADQAAAHgFAEQgFAEgGABQgJgBgFgHgAgYAFQgJALAAAVQAAANAKAJQAKAJANAAQAHAAAFgCQADgCAIgGIAEgDIAAgtQgEgIgGgCQgHgEgJAAQgQAAgJAJg");
	this.shape_61.setTransform(130.5,260.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgnAzQgSgRgBgcQAAgZAPgVQATgZAfAAQAYAAAPATQANASAAAaQAAAagPAUQgRAWgbAAQgXAAgQgPgAgQgTQgIALAAAOQAAAOAJAIQAGAGAJAAQAJAAAHgHQAJgIABgPQACglgXAAQgNAAgIAOg");
	this.shape_62.setTransform(103.5,264.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("Ag+BNQAAgGAFgFQAEgDAHAAIAQACQAKABAIAAQARABAIgLQAIgMACgXQgGAHgJACQgHADgIAAQgXAAgQgPQgPgQAAgXQAAghAUgVQAVgUAiAAQAMAAAHACQAJADAFAGQAPABAAARQAAAIgCAPQgFAdgBAdQgBAngMATQgQAXgnAAQgvABgBgUgAgSg2QgKAMAAAUQABAPAFAGQAGAGALAAQAHAAALgJQAJgMABgLIAGgkIgIgEIgIAAQgTAAgMANg");
	this.shape_63.setTransform(90.3,267.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AAdA4IgUAIQgJACgDABQgdAAgPgQQgPgQAAgfQAAgbAWgWQAVgUAdgBQALABAQAGQASAIAAALQAAAEgDADIgCAMIgBARQABAWADAKIAGAMIAEAMQAAAGgEAEQgFAFgHAAQgGAAgMgLgAgQgXQgNAMAAAQQAAAQAHAJQAFAHAMABQAGAAAGgDQAHgDAGgEQgEgcAAgNIABgJIACgMIgFgCIgDgBQgOAAgNAOg");
	this.shape_64.setTransform(66.1,264.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgnAzQgSgRgBgcQAAgZAPgVQATgZAfAAQAYAAAPATQANASAAAaQAAAagPAUQgRAWgbAAQgXAAgQgPgAgQgTQgIALAAAOQAAAOAJAIQAGAGAJAAQAJAAAHgHQAJgIABgPQACglgXAAQgNAAgIAOg");
	this.shape_65.setTransform(29.7,264.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AAZA4IgEgZQgCgOAAgLIAAgJIABgMIABgEIAAgGQgBgJgFgBQgKAAgIAOQgKANgGATIAAALIgBALIgBAKIgBALQAAAHgFAFQgEAEgIAAQgHAAgFgEQgEgEAAgIIgBgKIgBgLIACghIABgfIAAgLIgBgMQAAgGAGgFQAEgFAIAAQAQABABATIAAABQASgRARAAQAXgBAJAUQAGANAAAZIAAAJIAAAGQAAAKACAPQADAOAAAKQAAAGgFAFQgFAEgHAAQgPAAgBgOg");
	this.shape_66.setTransform(16.9,263.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgiA/QgSgHAAgNQAAgMAPAAQAGAAAKADQAKAEAHAAQAWAAAAgKQAAgGgRgIQgXgLgHgDQgSgMAAgRQAAgZAbgIQAPgFAdAAQAMAAAGADQAIAEAAALQAAAWgLAAQgMAAgDgKIgKgBQgbAAAAAIQAAAFAPAIQAYALAJAGQARALAAARQAAAVgTAKQgQAJgUAAQgRAAgOgFg");
	this.shape_67.setTransform(-6.9,264);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AAdA4IgUAIQgIACgFABQgdAAgPgQQgOgQAAgfQAAgbAVgWQAXgUAcgBQALABAQAGQASAIAAALQAAAEgDADIgCAMIgBARQABAWADAKIAFAMIAFAMQAAAGgFAEQgEAFgHAAQgGAAgMgLgAgQgXQgNAMAAAQQABAQAFAJQAHAHALABQAFAAAIgDQAGgDAGgEQgDgcAAgNIAAgJIACgMIgFgCIgDgBQgPAAgMAOg");
	this.shape_68.setTransform(-70.9,264.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("Ag+BNQAAgGAFgFQAEgDAHAAIAQACQAKABAIAAQARABAIgLQAIgMACgXQgGAHgJACQgHADgIAAQgXAAgQgPQgPgQAAgXQAAghAUgVQAVgUAiAAQAMAAAHACQAJADAFAGQAPABAAARQAAAIgCAPQgFAdgBAdQgBAngMATQgQAXgnAAQgvABgBgUgAgSg2QgKAMAAAUQABAPAFAGQAGAGALAAQAHAAALgJQAJgMABgLIAGgkIgIgEIgIAAQgTAAgMANg");
	this.shape_69.setTransform(-84.7,267.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AghA/QgSgHgBgNQAAgMAPAAQAGAAAKADQALAEAFAAQAXAAAAgKQAAgGgRgIQgXgLgHgDQgRgMAAgRQAAgZAZgIQAQgFAdAAQANAAAFADQAIAEAAALQAAAWgMAAQgMAAgCgKIgKgBQgbAAgBAIQAAAFAQAIQAYALAJAGQASALAAARQAAAVgUAKQgPAJgWAAQgQAAgNgFg");
	this.shape_70.setTransform(210.1,227.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgOBYQgFgEAAgHIAAgXIgBgWIABgbIACgZQAAgIAEgEQAFgFAIAAQAFAAAFAFQAEAEAAAIIgBAZIgBAbIAAAWIABAXQAAAHgFAEQgFAFgFAAQgHAAgFgFgAgKg9QgGgFAAgIQAAgHAGgFQAGgGAGAAQAHAAAGAGQAGAFAAAHQAAAIgGAFQgGAGgHAAQgGAAgGgGg");
	this.shape_71.setTransform(200.9,224.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgRAZQgFgEAAgFQAAgDAIgOIAKgUQAEgHAHAAQAHAAAEAEQAFAEAAAGQAAACgJAOIgJATQgEAIgHAAQgHAAgEgEg");
	this.shape_72.setTransform(154.1,234.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgoA0QgVgPAAgcQAAgdAQgVQASgYAdAAQAWAAANAHQATAJAAATQAAANgPALQgHAEgUAHIgoATQAGAGAJADQAHADAKABQAQgBALgGQAKgGAHAAQAMAAAAAMQAAAOgUAJQgSAHgSAAQgbAAgTgOgAgPgcQgIAHgFAQIAcgMQAOgIAKgGQgJgFgNAAQgJAAgIAIg");
	this.shape_73.setTransform(142,227.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AAhBbQgIAGgJABQgJABgHAAQgcAAgSgRQgSgRAAgdQAAggASgSQATgVAcAAQAJAAAHACQAHADAGADQABgqACgPQACgPAOAAQAHABAFAEQAEAFAAAHQAAASgCAjQgDAhAAASQAAArADAPIAAAEQAAAHgFAEQgFAFgGgBQgJAAgFgIgAgYAFQgJALAAAUQAAAOAKAJQAKAJANAAQAHAAAFgCQADgBAIgHIAEgEIAAgsQgEgIgGgCQgHgDgJAAQgQAAgJAIg");
	this.shape_74.setTransform(97.4,223.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AAdA4IgUAIQgJACgEAAQgdAAgPgPQgOgQAAgfQAAgcAWgUQAVgWAdABQALgBAQAHQASAIAAAKQAAAEgDAEIgCAMIgBARQABAVADAKIAFANIAFAMQAAAHgFAEQgEADgHAAQgGABgMgLgAgQgXQgNANAAAPQAAAQAHAIQAFAJAMgBQAGABAGgDQAHgDAGgEQgEgcAAgOIABgJIACgLIgFgBIgDgBQgPAAgMANg");
	this.shape_75.setTransform(70.3,227.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgnAzQgSgRgBgcQAAgZAPgVQATgZAfAAQAYAAAPATQANASAAAaQAAAagPAUQgRAWgbAAQgXAAgQgPgAgQgTQgIALAAAOQAAAOAJAIQAGAGAJAAQAJAAAHgHQAJgIABgPQACglgXAAQgNAAgIAOg");
	this.shape_76.setTransform(32.6,227.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgjBeQgFgFAAgGQAAgMAag4QgOgYgdg0IgGgJQgDgGAAgEQAAgHAFgFQAFgFAHAAQAIAAAFAGQARAXAVAuIAQgiQAJgTAIgNQAFgJAKAAQAGAAAGAEQAFAFAAAHQAAADgCAFIgqBVQgQAfgHAVIgHAXQgEALgMAAQgHAAgFgEg");
	this.shape_77.setTransform(19.2,230.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AAZA4IgEgaQgCgNAAgMIAAgJIABgLIAAgDIAAgGQAAgLgEABQgLAAgIANQgKANgFATIgBALIgBALIgBALIgBAKQAAAHgFAFQgEAFgIAAQgHAAgFgFQgFgFABgGIgBgLIgBgLIACghIABgfIAAgLIAAgLQAAgIAEgEQAFgEAIAAQAQgBABAUIAAABQARgSATAAQAXABAIASQAGANAAAaIAAAJIAAAGQAAAKACAOQADAQAAAJQAAAGgFAFQgFAFgHAAQgPAAgBgPg");
	this.shape_78.setTransform(-4.8,227.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgpA0QgUgPAAgcQAAgdARgVQARgYAdAAQAWAAAOAHQASAJAAATQAAANgPALQgHAEgVAHIgmATQAFAGAIADQAJADAIABQARgBALgGQALgGAFAAQANAAAAAMQAAAOgVAJQgQAHgUAAQgbAAgTgOgAgPgcQgIAHgFAQIAbgMQAPgIAJgGQgHgFgOAAQgJAAgIAIg");
	this.shape_79.setTransform(-18.7,227.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgoA0QgVgPAAgcQAAgdAQgVQATgYAcAAQAWAAAOAHQASAJAAATQAAANgPALQgHAEgVAHIgnATQAGAGAIADQAJADAIABQARgBALgGQAKgGAGAAQANAAAAAMQAAAOgVAJQgQAHgUAAQgbAAgSgOgAgPgcQgJAHgEAQIAbgMQAPgIAJgGQgHgFgOAAQgJAAgIAIg");
	this.shape_80.setTransform(-75.6,227.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("Ag7BcQgGgGAAgHIAAh/IAAgRQgBgJABgGQACgMAUgDQAJgCAVAAQAWgBAVAQQAYARAAAaQAAAOgFAKQgEAIgKAHQAMAFAJAMQALANAAANQAAAPgSAPQgMAKgNAFQgaAKgsABQgHAAgGgHgAgfBBQAVgBAWgHQAWgGgBgHQAAgKgNgHQgLgGgJgBIgfgBgAgfgmIAAAZQALACAFgBQAkgCAAgZQAAgIgLgJQgKgIgNAAIgSAAg");
	this.shape_81.setTransform(-89.9,224);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgMALQgHgFAAgGQAAgFAHgFQAFgFAHAAQAJAAAFAFQAGAFAAAFQAAAGgGAFQgGAFgIAAQgHAAgFgFg");
	this.shape_82.setTransform(192,269.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AglA1QgTgQAAgaQAAgXARgZQAUgeAYAAQAMAAARAHQAVAIAAALQAAAGgFAFQgEAFgGAAQgGAAgIgGQgGgFgPAAQgIAAgLASQgLASABALQgBANAKAHQAJAHAMAAQAIAAAMgGQAMgHADAAQAGAAAFAFQAFAFAAAGQAAAJgUAKQgTAIgMAAQgZAAgSgPg");
	this.shape_83.setTransform(166,264);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AAdA4IgUAIQgJACgDABQgdAAgPgQQgPgQAAgfQAAgbAWgWQAVgUAdgBQALABAQAGQASAIAAALQAAAEgDADIgCAMIgBARQABAWADAKIAFAMIAFAMQAAAGgFAEQgEAFgHAAQgGAAgMgLgAgQgXQgNAMAAAQQAAAQAHAJQAFAHAMABQAGAAAGgDQAHgDAGgEQgEgcAAgNIABgJIACgMIgFgCIgDgBQgOAAgNAOg");
	this.shape_84.setTransform(153,264.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgvA/QgEgEAAgHIAAhOIAAgLIAAgMQAAgHAFgEQAEgFAHAAQAOAAACAOQAUgQAaAAQAZAAAAAhIgBAIQAAASgQAAQgPAAgBgPIAAgNQgZAFgNAXIAAA8QAAAHgEAEQgFAFgHAAQgIAAgEgFg");
	this.shape_85.setTransform(140.2,264.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgoA0QgVgPAAgcQAAgdAQgWQASgXAdAAQAWAAANAHQATAJAAATQAAANgPALQgHAEgUAIIgoASQAGAGAJAEQAHACAKABQAQAAALgIQAKgFAHAAQAMAAAAAMQAAAOgUAJQgRAHgTAAQgbAAgTgOgAgPgcQgIAIgFAPIAcgMQAOgIAKgGQgJgFgNABQgJAAgIAHg");
	this.shape_86.setTransform(115.9,264.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("Ag+BNQAAgGAFgFQAEgDAHAAIAQACQAKABAIAAQARABAIgLQAIgMACgXQgHAHgIACQgHADgHAAQgYAAgQgPQgPgQAAgXQAAghAUgVQAVgUAiAAQALAAAIACQAJADAFAGQAPABAAARQAAAIgCAPQgFAdgBAdQgBAngMATQgQAXgnAAQgvABgBgUgAgSg2QgJAMgBAUQABAPAFAGQAGAGALAAQAHAAALgJQAJgMABgLIAGgkIgIgEIgIAAQgTAAgMANg");
	this.shape_87.setTransform(65.2,267.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AAZA4IgEgZQgCgOAAgLIAAgJIABgMIAAgEIAAgGQAAgJgEgBQgLAAgIAOQgKANgFATIgBALIgBALIgBAKIgBALQAAAHgEAFQgFAEgIAAQgHAAgFgEQgFgEABgIIgBgKIgBgLIACghIABgfIAAgLIAAgMQAAgGAEgFQAFgFAIAAQAQABABATIAAABQARgRATAAQAXgBAIAUQAGANAAAZIAAAJIAAAGQAAAKACAPQADAOAAAKQAAAGgFAFQgFAEgHAAQgPAAgBgOg");
	this.shape_88.setTransform(52.3,263.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgvA/QgEgEAAgHIAAhOIAAgLIAAgMQABgHAEgEQAEgFAHAAQAOAAADAOQATgQAaAAQAZAAAAAhIAAAIQgBASgQAAQgQAAAAgPIAAgNQgZAFgMAXIAAA8QgBAHgEAEQgFAFgHAAQgIAAgEgFg");
	this.shape_89.setTransform(32.9,264.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgLBfQgEgEAAgHIAAinQAAgHAFgFQAFgEAFAAQAHAAAFAFQAEADAAAIIAACgQAAAXgQAAQgGAAgFgFg");
	this.shape_90.setTransform(-65.5,260.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AAYA8QgQAGgOAAQgSAAgMgIQgNgIgDgQQgEgeAAgWQAAgQADgUQADgOAOAAQAHAAAFAEQAFAFAAAGIgCARIgCASQAAARACAKQABANACAJIAGACIAGAAQALAAAQgEIAAgVIAAgSQAAgZACgTQACgOAPAAQAHAAAFAEQAFAFAAAHIgCArIAAAWIAAAZIAAAIIABAHQAAAHgFAFQgFAEgHAAQgKAAgFgJg");
	this.shape_91.setTransform(195.7,227.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgWBmQgFgEAAgHIAAgDQADgRAAgQIAAg7IgIABIgHABQgIAAgFgEQgEgFAAgHQAAgLALgEQAGgCAQAAIABgOQAEgbALgNQAMgRAeAAQAWAAAAAQQAAAQgVAAQgPAAgGAKQgFAIgCAQIAAAEIAXgCQAXAAAAAQQAAAQgYgBIgYACIAAAeIABAhQAAAXgDANQgDANgLAAQgHAAgFgFg");
	this.shape_92.setTransform(145,224.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgOBYQgFgEAAgHIAAgXIgBgWIABgbIACgZQAAgIAEgEQAFgFAIAAQAFAAAFAFQAEAEAAAIIgBAZIgBAbIAAAWIABAXQAAAHgFAEQgFAFgFAAQgHAAgFgFgAgKg9QgGgFAAgIQAAgHAGgFQAGgGAGAAQAHAAAGAGQAGAFAAAHQAAAIgGAFQgGAGgHAAQgGAAgGgGg");
	this.shape_93.setTransform(135.6,224.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AAdA4IgUAIQgJACgDAAQgeAAgOgPQgPgQAAgfQAAgcAVgUQAXgWAbABQAMgBAPAHQATAIAAAKQAAAEgDAEIgCAMIAAARQgBAVAEAKIAGANIAEAMQAAAHgEAEQgGADgGAAQgGABgMgLgAgQgXQgMANAAAPQAAAQAFAIQAHAJALgBQAFABAHgDQAHgDAGgEQgDgcgBgOIABgJIABgLIgDgBIgEgBQgOAAgNANg");
	this.shape_94.setTransform(102.3,227.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgjBcQgEAFgHAAQgHAAgEgEQgFgFAAgGIAAgJIAAgJIAAiJQABgJAEgGQAFgJAIAAQANAAABAOIgBAFIAAAFIAAAvQAJgFAIgCQAIgDAGAAQAdAAASAVQAQARAAAcQAAAdgTATQgUAUgbAAQgQAAgQgGgAgMgBQgJACgKAHIAAA0QAQAHAMAAQAOAAAKgKQAKgLAAgQQAAgQgIgKQgJgJgOAAQgFAAgHAEg");
	this.shape_95.setTransform(74.7,223.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("Ag9BOQgBgHAFgEQAEgFAHAAIAQACQAKACAIABQAQAAAJgMQAIgKACgYQgHAGgHAEQgIADgHAAQgZAAgPgQQgPgQAAgWQAAgiAUgUQAVgWAiAAQAMAAAHAEQAJACAFAGQAPABABARQAAAJgDANQgFAegBAeQgBAngMARQgQAZgnAAQgvgBAAgSgAgSg2QgJAMgBAUQAAAOAGAIQAGAFALAAQAIAAAJgKQAKgKABgMIAGgkIgIgDIgJgCQgSAAgMAOg");
	this.shape_96.setTransform(-37.3,230.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AAYA4IgDgaQgCgNAAgMIAAgJIABgLIABgDIAAgGQgBgLgFABQgKAAgIANQgKANgGATIAAALIgBALIgBALIgBAKQAAAHgFAFQgEAFgIAAQgHAAgFgFQgEgFAAgGIgBgLIgBgLIACghIABgfIAAgLIgBgLQAAgIAGgEQAEgEAIAAQAQgBABAUIAAABQASgSARAAQAXABAJASQAGANAAAaIAAAJIAAAGQAAAKACAOQADAQAAAJQAAAGgFAFQgFAFgHAAQgPAAgCgPg");
	this.shape_97.setTransform(-50.2,227.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgOBYQgFgEAAgHIAAgXIgBgWIABgbIACgZQAAgIAEgEQAFgFAIAAQAFAAAFAFQAEAEAAAIIgBAZIgBAbIAAAWIABAXQAAAHgFAEQgFAFgFAAQgHAAgFgFgAgKg9QgGgFAAgIQAAgHAGgFQAGgGAGAAQAHAAAGAGQAGAFAAAHQAAAIgGAFQgGAGgHAAQgGAAgGgGg");
	this.shape_98.setTransform(-60.1,224.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("Ag1BKQgSgTAAgaQAAgnAkgrQAegkAeAAIAKAAIAHACQAFgGAIAAQAMAAADAPQACAJAAAOQAAAGgDAGQgFAGgIAAQgLAAgGgMQgCgFgDgBQgBgBgIAAQgQAAgSAYQgcAgAAAdQAAANAJAJQAJAKAMAAQAKAAANgGIASgNQAKgGAFAAQAHAAAFAFQAFAGAAAGQAAAHgGAGQgiAcghAAQgbAAgTgUg");
	this.shape_99.setTransform(-78.3,224.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgNALQgFgFAAgGQAAgFAFgFQAHgFAGAAQAIAAAGAFQAFAFAAAFQAAAGgFAFQgGAFgIAAQgGAAgHgFg");
	this.shape_100.setTransform(170.4,269.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AAZA4IgEgZQgCgOAAgLIAAgJIABgMIAAgEIAAgGQAAgJgEgBQgLAAgIAOQgKANgFATIgBALIgBALIgBAKIgBALQAAAHgFAFQgEAEgIAAQgHAAgFgEQgFgEABgIIgBgKIgBgLIACghIABgfIAAgLIAAgMQAAgGAEgFQAFgFAIAAQAQABABATIAAABQARgRATAAQAXgBAIAUQAGANAAAZIAAAJIAAAGQAAAKACAPQADAOAAAKQAAAGgFAFQgFAEgHAAQgPAAgBgOg");
	this.shape_101.setTransform(146.8,263.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AAZA4IgEgZQgCgOAAgLIAAgJIABgMIAAgEIAAgGQAAgJgEgBQgLAAgIAOQgKANgFATIgBALIgBALIgBAKIgBALQAAAHgEAFQgFAEgIAAQgHAAgFgEQgFgEABgIIgBgKIgBgLIACghIABgfIAAgLIAAgMQAAgGAEgFQAGgFAHAAQAPABACATIAAABQARgRATAAQAWgBAJAUQAGANAAAZIAAAJIAAAGQAAAKACAPQADAOAAAKQAAAGgFAFQgEAEgIAAQgPAAgBgOg");
	this.shape_102.setTransform(86.4,263.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AAdA4IgUAIQgJACgDAAQgdAAgPgPQgPgQAAgfQAAgcAWgUQAVgWAcABQAMgBAPAHQATAIAAAKQAAAEgDAEIgCAMIAAARQAAAVADAKIAGANIAEAMQAAAHgEAEQgFADgHAAQgGABgMgLgAgQgXQgNANAAAPQAAAQAHAIQAFAJAMgBQAGABAGgDQAHgDAGgEQgDgcgBgOIABgJIABgLIgEgBIgDgBQgOAAgNANg");
	this.shape_103.setTransform(161.9,227.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgiA/QgRgHgBgNQAAgMAPAAQAGAAAKADQALAEAFAAQAXAAAAgKQAAgGgRgIQgXgLgHgDQgRgMAAgRQAAgZAagIQAPgFAdAAQANAAAFADQAIAEAAALQAAAWgMAAQgLAAgDgKIgKgBQgcAAAAAIQABAFAPAIQAZALAIAGQARALAAARQABAVgUAKQgQAJgUAAQgRAAgOgFg");
	this.shape_104.setTransform(111.3,227.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgvA/QgEgEAAgHIAAhOIAAgLIAAgMQAAgHAFgEQAEgFAHAAQAOAAADAOQATgQAaAAQAZAAAAAhIAAAIQgBASgQAAQgQAAAAgPIAAgNQgZAFgMAXIAAA8QgBAHgEAEQgFAFgHAAQgIAAgEgFg");
	this.shape_105.setTransform(99.6,227.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgoA0QgVgPAAgcQAAgdAQgVQASgYAdAAQAWAAANAHQATAJAAATQAAANgPALQgHAEgUAHIgoATQAGAGAJADQAHADAKABQAQgBALgGQAKgGAHAAQAMAAAAAMQAAAOgUAJQgRAHgTAAQgbAAgTgOgAgPgcQgIAHgFAQIAbgMQAPgIAKgGQgJgFgNAAQgJAAgIAIg");
	this.shape_106.setTransform(55.6,227.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AglBiQgOgDgIgGQgIABgEgFQgFgFAAgHIABglIABgkIAAgnIgBgpQAAgGAGgGQAHgIAHAAQAEABAQAHIAXAKQAiAMAZAYQAeAdAAAhQAAAVgKAUQgLASgSAMQgUAOgjAAQgJAAgLgDgAgqA9IALAGIAOABQAZAAALgIQALgGAGgNQAHgMAAgNQAAgbgkgXQgKgHgngQg");
	this.shape_107.setTransform(-55.2,224.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AAdA4IgUAIQgJACgDABQgeAAgOgQQgPgQAAgfQAAgbAVgWQAXgUAbgBQAMABAPAGQATAIAAALQAAAEgDADIgCAMIAAARQgBAWAEAKIAGAMIAEAMQAAAGgEAEQgGAFgGAAQgGAAgMgLgAgQgXQgMAMAAAQQAAAQAFAJQAHAHALABQAFAAAHgDQAHgDAGgEQgDgcAAgNIAAgJIABgMIgDgCIgEgBQgOAAgNAOg");
	this.shape_108.setTransform(180.1,264.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgvA/QgEgEAAgHIAAhOIAAgLIAAgMQAAgHAFgEQAEgFAHAAQAOAAACAOQAUgQAaAAQAZAAAAAhIAAAIQgBASgQAAQgPAAgBgPIAAgNQgZAFgNAXIAAA8QAAAHgEAEQgFAFgHAAQgIAAgEgFg");
	this.shape_109.setTransform(149.6,264.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgvA/QgEgEAAgHIAAhOIABgLIAAgMQAAgHAEgEQAEgFAIAAQANAAADAOQATgQAbAAQAYAAAAAhIAAAIQgCASgPAAQgPAAgBgPIAAgNQgaAFgLAXIAAA8QAAAHgFAEQgFAFgHAAQgIAAgEgFg");
	this.shape_110.setTransform(100.6,264.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgoA0QgVgPAAgcQAAgdAQgWQATgXAcAAQAWAAAOAHQASAJAAATQAAANgPALQgHAEgUAIIgoASQAGAGAJAEQAHACAJABQARAAALgIQAKgFAHAAQAMAAAAAMQAAAOgVAJQgRAHgTAAQgbAAgSgOgAgPgcQgJAIgEAPIAbgMQAPgIAJgGQgIgFgNABQgJAAgIAHg");
	this.shape_111.setTransform(87.2,264.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgRA2IgohgQgCgEAAgEQAAgGAGgFQAFgFAGAAQALAAAFAKQAHAPATA0IARgoIAKgaQAFgKALAAQAGAAAGAFQAFAFAAAGQAAAEgUAtIgaA1QAAAFgEAFQgFADgFAAQgLABgGgNg");
	this.shape_112.setTransform(74.5,264);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgLBfQgEgEAAgHIAAinQAAgHAFgFQAFgEAFAAQAHAAAFAFQAEADAAAIIAACgQAAAXgQAAQgGAAgFgFg");
	this.shape_113.setTransform(40.7,260.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgLBfQgEgEAAgHIAAinQAAgHAFgFQAFgEAFAAQAHAAAFAFQAEADAAAIIAACgQAAAXgQAAQgGAAgFgFg");
	this.shape_114.setTransform(33.8,260.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AAdA4IgUAIQgIACgFABQgdAAgPgQQgOgQAAgfQAAgbAVgWQAXgUAcgBQALABAQAGQASAIAAALQAAAEgDADIgCAMIgBARQAAAWAEAKIAFAMIAFAMQAAAGgFAEQgFAFgGAAQgGAAgMgLgAgQgXQgNAMAAAQQABAQAFAJQAHAHALABQAFAAAIgDQAGgDAGgEQgEgcABgNIAAgJIACgMIgFgCIgDgBQgPAAgMAOg");
	this.shape_115.setTransform(23.7,264.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AAZA4IgEgZQgCgOAAgLIABgJIAAgMIAAgEIAAgGQAAgJgEgBQgLAAgIAOQgKANgFATIgCALIgBALIAAAKIgBALQAAAHgEAFQgGAEgHAAQgHAAgFgEQgFgEAAgIIgBgKIAAgLIABghIACgfIAAgLIAAgMQAAgGAEgFQAFgFAHAAQARABAAATIAAABQATgRASAAQAWgBAJAUQAGANAAAZIAAAJIAAAGQAAAKACAPQADAOAAAKQAAAGgFAFQgFAEgHAAQgPAAgBgOg");
	this.shape_116.setTransform(-0.6,263.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AglA1QgTgQAAgaQAAgXARgZQATgeAZAAQAMAAARAHQAVAIAAALQAAAGgEAFQgFAFgHAAQgFAAgIgGQgHgFgOAAQgIAAgLASQgLASAAALQAAANAKAHQAIAHANAAQAJAAALgGQAMgHADAAQAHAAAFAFQAEAFAAAGQAAAJgVAKQgSAIgMAAQgZAAgSgPg");
	this.shape_117.setTransform(-39.1,264);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgyBiQgEgGAAgHIAAgtIAAguQAAgbgCgSIgCgZQAAgKAFgHQAFgIAJAAQAHAAAFAFQAEAEAAAGIAAACQAIgFAJgCQAGgCAIgBQAcAAANAZQAKARAAAdQAAAZgQASQgQASgbAAQgJAAgLgCIgBAxQAAAHgEAGQgFAEgHAAQgIAAgFgEgAgGg5QgIAEgIAGIACAxQALAEAJgBQAMAAAHgHQAGgHAAgOIgBgXQgEgOgMAAQgIgBgGAEg");
	this.shape_118.setTransform(-51.8,267);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgyBiQgEgGAAgHIAAgtIAAguQAAgbgCgSIgCgZQAAgKAFgHQAFgIAJAAQAHAAAFAFQAEAEAAAGIAAACQAIgFAJgCQAGgCAIgBQAcAAANAZQAKARAAAdQAAAZgQASQgQASgbAAQgJAAgLgCIgBAxQAAAHgEAGQgFAEgHAAQgIAAgFgEgAgGg5QgIAEgIAGIACAxQALAEAJgBQAMAAAHgHQAGgHAAgOIgBgXQgEgOgMAAQgIgBgGAEg");
	this.shape_119.setTransform(-78.3,267);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgpA0QgUgPAAgcQAAgdARgVQARgYAdAAQAVAAAPAHQASAJAAATQAAANgPALQgHAEgVAHIgmATQAFAGAIADQAJADAIABQARgBALgGQALgGAFAAQANAAAAAMQAAAOgVAJQgQAHgUAAQgaAAgUgOgAgPgcQgJAHgEAQIAcgMQAOgIAJgGQgHgFgOAAQgJAAgIAIg");
	this.shape_120.setTransform(214,227.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgLBgQgEgFAAgIIAAimQAAgHAFgFQAFgEAFAAQAHAAAFAEQAEAFAAAHIAACgQAAAXgQAAQgGAAgFgEg");
	this.shape_121.setTransform(196.8,223.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgyBhQgEgFAAgGIAAguIAAguQAAgagCgUIgCgXQAAgLAFgHQAFgIAJAAQAHAAAFAEQAEAFAAAHIAAABQAIgFAJgCQAGgCAIAAQAcAAANAXQAKATAAAcQAAAZgQARQgQATgbAAQgJAAgLgCIgBAyQAAAGgEAFQgFAFgHAAQgIAAgFgFgAgGg5QgIADgIAIQACAZAAAXQALADAJABQAMAAAHgHQAGgJAAgNIgBgXQgEgPgMAAQgIAAgGAEg");
	this.shape_122.setTransform(180,230.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgiA/QgRgHgBgNQAAgMAPAAQAGAAAKADQALAEAFAAQAXAAAAgKQAAgGgRgIQgXgLgHgDQgRgMAAgRQAAgZAagIQAPgFAdAAQANAAAFADQAIAEAAALQAAAWgMAAQgMAAgCgKIgKgBQgcAAAAAIQAAAFAQAIQAZALAIAGQASALAAARQAAAVgUAKQgPAJgWAAQgQAAgOgFg");
	this.shape_123.setTransform(167,227.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgoA0QgVgPAAgcQAAgdAQgVQATgYAcAAQAWAAAOAHQASAJAAATQAAANgPALQgHAEgUAHIgoATQAGAGAJADQAHADAKABQAQgBALgGQAKgGAHAAQAMAAAAAMQAAAOgVAJQgRAHgSAAQgcAAgSgOgAgPgcQgJAHgEAQIAbgMQAPgIAJgGQgIgFgNAAQgJAAgIAIg");
	this.shape_124.setTransform(143,227.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgnAzQgSgRgBgcQAAgZAPgVQATgZAfAAQAYAAAPATQANASAAAaQAAAagPAUQgRAWgbAAQgXAAgQgPgAgQgTQgIALAAAOQAAAOAJAIQAGAGAJAAQAJAAAHgHQAJgIABgPQACglgXAAQgNAAgIAOg");
	this.shape_125.setTransform(73.5,227.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgoA0QgVgPAAgcQAAgdAQgVQATgYAcAAQAWAAAOAHQASAJAAATQAAANgPALQgHAEgUAHIgoATQAGAGAIADQAJADAIABQARgBALgGQAKgGAGAAQANAAAAAMQAAAOgVAJQgQAHgUAAQgbAAgSgOgAgPgcQgJAHgEAQIAbgMQAPgIAJgGQgHgFgOAAQgJAAgIAIg");
	this.shape_126.setTransform(22.5,227.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AAcBZQgDgKgCgSQgDgRAAgMIABgJIAAgJIAAgKQgBgFgGAAQgNAAgJALQgGAFgKASQAAAtgEAIQgFALgKAAQgHAAgFgFQgFgFAAgGIABgHQABgDAAgeIABhQIAAgDIABgUIgCgLIgBgLQAAgHAFgFQAFgEAHAAQAMAAAFANQACAHAAAPIgBAZIgBAYQAJgJALgFQAIgDALAAQAVAAAJALQAHAJACAQIABAeIACAYIAFAYIAAAEQAAAHgFAFQgFAEgHAAQgMAAgEgMg");
	this.shape_127.setTransform(8.7,223.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AAYA4IgDgaQgCgNAAgMIABgJIAAgLIABgDIAAgGQgBgLgFABQgKAAgIANQgKANgGATIgBALIAAALIgBALIgBAKQAAAHgFAFQgEAFgIAAQgHAAgFgFQgEgFgBgGIAAgLIgBgLIABghIACgfIAAgLIgBgLQAAgIAGgEQAEgEAHAAQAQgBACAUIAAABQASgSARAAQAXABAJASQAGANAAAaIAAAJIAAAGQAAAKADAOQACAQAAAJQAAAGgFAFQgFAFgHAAQgPAAgCgPg");
	this.shape_128.setTransform(-41.1,227.1);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AgvA/QgEgEAAgHIAAhOIAAgLIAAgMQABgHAEgEQAEgFAIAAQANAAADAOQATgQAbAAQAYAAAAAhIAAAIQgCASgPAAQgQAAAAgPIAAgNQgZAFgMAXIAAA8QAAAHgFAEQgFAFgHAAQgIAAgEgFg");
	this.shape_129.setTransform(119.6,264.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AgiA/QgRgHgBgNQAAgMAPAAQAGAAAKADQALAEAFAAQAXAAAAgKQAAgGgRgIQgXgLgHgDQgRgMAAgRQAAgZAagIQAPgFAdAAQANAAAFADQAIAEAAALQAAAWgMAAQgLAAgDgKIgKgBQgcAAAAAIQABAFAPAIQAZALAIAGQARALABARQAAAVgUAKQgQAJgUAAQgRAAgOgFg");
	this.shape_130.setTransform(76.6,264);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgpA0QgUgPAAgcQAAgdARgWQASgXAcAAQAVAAAOAHQATAJAAATQAAANgPALQgHAEgUAIIgoASQAGAGAJAEQAHACAKABQAQAAALgIQAKgFAHAAQAMAAAAAMQAAAOgUAJQgSAHgSAAQgbAAgUgOgAgPgcQgIAIgFAPIAcgMQAOgIAKgGQgJgFgNABQgJAAgIAHg");
	this.shape_131.setTransform(63.5,264.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AgjBcQgFAFgGAAQgGAAgFgEQgFgFAAgGIAAgJIAAgJIAAiJQAAgJAFgGQAEgJAJAAQAOAAAAAOIgBAFIgBAFIAAAvQAKgFAIgCQAJgDAFAAQAdAAARAVQARARAAAcQAAAdgTATQgUAUgaAAQgSAAgPgGgAgMgBQgJACgLAHIAAA0QASAHAMAAQANAAAKgKQAKgLAAgQQAAgQgIgKQgJgJgOAAQgFAAgHAEg");
	this.shape_132.setTransform(42.4,260.8);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AAdA4IgUAIQgJACgDABQgdAAgPgQQgPgQAAgfQAAgbAWgWQAVgUAcgBQAMABAPAGQATAIAAALQAAAEgDADIgCAMIAAARQgBAWAEAKIAGAMIAEAMQAAAGgEAEQgGAFgGAAQgGAAgMgLgAgQgXQgMAMAAAQQgBAQAHAJQAFAHAMABQAGAAAGgDQAHgDAGgEQgDgcgBgNIABgJIABgMIgDgCIgEgBQgOAAgNAOg");
	this.shape_133.setTransform(28.1,264.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgpA0QgUgPAAgcQAAgdARgWQARgXAdAAQAVAAAOAHQATAJAAATQAAANgPALQgHAEgVAIIgmASQAFAGAIAEQAJACAIABQARAAALgIQALgFAFAAQANAAAAAMQAAAOgVAJQgQAHgUAAQgaAAgUgOgAgPgcQgJAIgEAPIAcgMQAOgIAJgGQgHgFgOABQgJAAgIAHg");
	this.shape_134.setTransform(2.1,264.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("Ag+BNQABgGAEgFQAEgDAHAAIAQACQAKABAIAAQARABAIgLQAJgMABgXQgGAHgJACQgHADgIAAQgXAAgQgPQgPgQAAgXQAAghAUgVQAVgUAiAAQALAAAIACQAJADAFAGQAPABAAARQABAIgDAPQgFAdgBAdQgBAngMATQgQAXgnAAQgwABAAgUgAgSg2QgKAMAAAUQABAPAFAGQAGAGAKAAQAIAAALgJQAJgMACgLIAEgkIgHgEIgIAAQgTAAgMANg");
	this.shape_135.setTransform(-11.5,267.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgpA0QgUgPAAgcQAAgdARgWQASgXAcAAQAVAAAOAHQATAJAAATQAAANgPALQgHAEgUAIIgoASQAGAGAJAEQAHACAKABQAQAAALgIQAKgFAHAAQAMAAAAAMQAAAOgUAJQgSAHgSAAQgbAAgUgOgAgPgcQgIAIgFAPIAcgMQAOgIAKgGQgJgFgNABQgJAAgIAHg");
	this.shape_136.setTransform(-25.2,264.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgRA2IgohgQgCgEAAgEQAAgGAFgFQAGgFAHAAQAKAAAEAKQAHAPAUA0IAQgoIALgaQAFgKAKAAQAHAAAGAFQAFAFAAAGQAAAEgUAtIgaA1QAAAFgEAFQgFADgFAAQgMABgFgNg");
	this.shape_137.setTransform(-37.8,264);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AAdA4IgUAIQgIACgFAAQgcAAgPgPQgPgQAAgfQAAgcAVgUQAXgWAbABQAMgBAPAHQATAIAAAKQAAAEgDAEIgCAMIAAARQAAAVADAKIAGANIAEAMQAAAHgEAEQgGADgGAAQgGABgMgLgAgQgXQgMANAAAPQAAAQAFAIQAHAJALgBQAFABAIgDQAGgDAGgEQgDgcAAgOIAAgJIABgLIgDgBIgEgBQgPAAgMANg");
	this.shape_138.setTransform(51.8,227.3);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AAdA4IgUAIQgIACgFAAQgcAAgQgPQgOgQAAgfQAAgcAVgUQAXgWAbABQAMgBAPAHQATAIAAAKQAAAEgDAEIgCAMIgBARQAAAVAEAKIAFANIAFAMQAAAHgFAEQgFADgGAAQgGABgMgLgAgQgXQgMANAAAPQAAAQAFAIQAHAJALgBQAFABAIgDQAGgDAGgEQgEgcABgOIAAgJIACgLIgEgBIgEgBQgPAAgMANg");
	this.shape_139.setTransform(15.2,227.3);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("Ag3BdQgOgMAAgnQAAgRADgfIACgwIgBgNIgBgNQAAgSARAAQAFAAAFACQAOgDAMgBQANgCAKgBQAeABATAGQALAFAAALQAAAHgEAEQgFAGgIAAIgFAAQgUgGgSAAIgSABIgWAFIgCAwIAugEIAegDQAHAAAFAFQAFAFAAAHQAAANgPABIgdADIgzAFIgBAZQAAAXADAEQACABAOABIAUgBIAXAAIAHgBIAIgBQAHAAAFAEQAFAEAAAJQAAAOgOACQgMACglABQgnAAgMgLg");
	this.shape_140.setTransform(0.7,224.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgMALQgHgFABgGQgBgFAHgFQAFgFAHAAQAIAAAGAFQAGAFgBAFQABAGgGAFQgGAFgIAAQgHAAgFgFg");
	this.shape_141.setTransform(144.1,269.8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AAYA4IgDgaQgCgNAAgMIABgJIAAgLIABgDIAAgGQAAgLgGABQgKAAgIANQgKANgGATIgBALIgBALIAAALIgBAKQAAAHgFAFQgEAFgIAAQgHAAgFgFQgEgFgBgGIAAgLIgBgLIABghIACgfIAAgLIgBgLQAAgIAGgEQAFgEAGAAQAQgBABAUIAAABQATgSARAAQAYABAIASQAGANAAAaIAAAJIAAAGQAAAKADAOQACAQAAAJQAAAGgFAFQgEAFgIAAQgPAAgCgPg");
	this.shape_142.setTransform(151.6,227.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AgpA0QgUgPAAgcQAAgdARgVQARgYAdAAQAVAAAOAHQATAJAAATQAAANgPALQgHAEgVAHIgmATQAFAGAIADQAJADAIABQARgBALgGQALgGAFAAQANAAAAAMQAAAOgVAJQgQAHgUAAQgaAAgUgOgAgPgcQgJAHgEAQIAcgMQAOgIAJgGQgHgFgOAAQgJAAgIAIg");
	this.shape_143.setTransform(94.3,227.2);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AhBBTQgQgSAAgiQAAgfAPgfQAPghAYgUQARgPASAAQAMAAAUAJQAYAKAAAMQAAAGgFAFQgFAGgHAAQgEAAgMgHQgNgHgKAAQgJAAgTAXQgbAjAAAmQAAAUAGAIQAGAHASAAQARAAAOgKQAPgLAIgWQgdACgTAKIgHABQgIAAgFgFQgEgFAAgHQAAgSAqgGQAZgEAhAAQAHAAAFAFQAFAEAAAGQAAAJgHAEQgJAlgZAWQgZAWghAAQggAAgQgRg");
	this.shape_144.setTransform(-32.2,224.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AAcBaQgGgLgMgPIgRgZIgQALIgCAhQAAAHgFAEQgEAFgIAAQgRAAAAgUIABgdIACgdIAAgnIABgoIgBgMIAAgNQAAgHAFgEQAFgFAGAAQAIAAAEAFQAGAEgBAHIABANIAAANIAAAiIgBAgQARgLAggiQAGgFAGAAQAHAAAFAFQAFAFABAHQAAAFgGAGQgOAOgTARIAZAhQASAYAAAJQAAAGgFAFQgFAFgIAAQgJAAgFgKg");
	this.shape_145.setTransform(155.9,260.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AglA1QgTgQAAgaQAAgXARgZQATgeAYAAQANAAARAHQAVAIAAALQAAAGgFAFQgDAFgIAAQgFAAgHgGQgIgFgPAAQgHAAgLASQgKASAAALQAAANAJAHQAJAHAMAAQAJAAALgGQAMgHADAAQAGAAAGAFQAEAFAAAGQAAAJgUAKQgTAIgMAAQgZAAgSgPg");
	this.shape_146.setTransform(142,264);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AgiA/QgRgHgBgNQAAgMAPAAQAGAAAKADQALAEAFAAQAXAAAAgKQAAgGgRgIQgXgLgHgDQgRgMAAgRQAAgZAagIQAPgFAdAAQANAAAFADQAIAEAAALQAAAWgMAAQgMAAgCgKIgKgBQgcAAAAAIQAAAFAQAIQAZALAIAGQASALAAARQAAAVgUAKQgQAJgVAAQgQAAgOgFg");
	this.shape_147.setTransform(101.3,264);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AglA1QgTgQAAgaQAAgXARgZQATgeAYAAQANAAARAHQAVAIAAALQAAAGgFAFQgDAFgIAAQgFAAgHgGQgIgFgPAAQgHAAgLASQgKASAAALQAAANAJAHQAJAHAMAAQAJAAALgGQAMgHADAAQAGAAAGAFQAEAFAAAGQAAAJgUAKQgTAIgMAAQgZAAgSgPg");
	this.shape_148.setTransform(37.1,264);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AgoA0QgVgPAAgcQAAgdAQgWQASgXAdAAQAWAAANAHQATAJAAATQAAANgPALQgHAEgUAIIgoASQAGAGAJAEQAHACAKABQAQAAALgIQAKgFAHAAQAMAAAAAMQAAAOgUAJQgSAHgSAAQgbAAgTgOgAgPgcQgIAIgFAPIAbgMQAPgIAKgGQgJgFgNABQgJAAgIAHg");
	this.shape_149.setTransform(12.8,264.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AAcBZQgDgKgCgSQgDgRAAgLIABgJIAAgJIAAgLQgBgFgGAAQgNAAgJAKQgGAHgKARQAAAtgEAJQgFAKgKgBQgHAAgFgEQgFgEAAgIIABgGQABgCAAgfIABhPIAAgFIABgTIgCgLIgBgLQAAgHAFgFQAFgEAHAAQAMAAAFANQACAHAAAQIgBAYIgBAYQAJgJALgEQAIgFALAAQAVAAAJAMQAHAJACAQIABAeIACAYIAFAYIAAAFQAAAGgFAEQgFAFgHAAQgMAAgEgMg");
	this.shape_150.setTransform(-1,260.8);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AgpA0QgUgPAAgcQAAgdAQgVQATgYAcAAQAVAAAOAHQATAJAAATQAAANgPALQgHAEgUAHIgoATQAGAGAJADQAHADAKABQAQgBALgGQAKgGAHAAQAMAAAAAMQAAAOgUAJQgRAHgTAAQgbAAgUgOgAgPgcQgIAHgFAQIAcgMQAOgIAKgGQgJgFgNAAQgJAAgIAIg");
	this.shape_151.setTransform(181,227.2);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AAdA4IgUAIQgJACgDAAQgdAAgQgPQgOgQAAgfQAAgcAWgUQAVgWAdABQALgBAQAHQASAIAAAKQAAAEgDAEIgCAMIAAARQAAAVADAKIAFANIAFAMQAAAHgFAEQgEADgHAAQgGABgMgLgAgQgXQgNANAAAPQAAAQAHAIQAFAJAMgBQAGABAGgDQAHgDAGgEQgEgcAAgOIABgJIACgLIgFgBIgDgBQgOAAgNANg");
	this.shape_152.setTransform(123.3,227.3);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AAYA4IgDgaQgCgNAAgMIABgJIAAgLIABgDIAAgGQAAgLgGABQgKAAgIANQgKANgGATIgBALIAAALIgBALIgBAKQAAAHgFAFQgEAFgIAAQgHAAgFgFQgEgFgBgGIAAgLIgBgLIABghIACgfIAAgLIgBgLQAAgIAGgEQAFgEAGAAQAQgBACAUIAAABQARgSASAAQAYABAIASQAGANAAAaIAAAJIAAAGQAAAKADAOQACAQAAAJQAAAGgFAFQgEAFgIAAQgPAAgCgPg");
	this.shape_153.setTransform(99,227.1);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AgiA/QgSgHAAgNQAAgMAPAAQAGAAAKADQAKAEAHAAQAWAAAAgKQAAgGgRgIQgXgLgHgDQgSgMABgRQgBgZAbgIQAPgFAdAAQAMAAAGADQAIAEAAALQAAAWgLAAQgMAAgDgKIgKgBQgbAAAAAIQAAAFAPAIQAYALAJAGQARALAAARQAAAVgTAKQgQAJgUAAQgRAAgOgFg");
	this.shape_154.setTransform(17.9,227.2);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AgRA1IgohgQgCgEAAgCQAAgIAGgEQAFgEAHAAQAKAAAFAJQAHAPATA1IARgpIAKgaQAFgJAKgBQAHABAGAEQAFAEAAAHQAAAFgUArIgaA1QAAAHgEADQgFAFgFAAQgLgBgGgNg");
	this.shape_155.setTransform(-7.9,227.1);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AA0BcQgGgFAAgGIAAgbIgBgbIAAgLQgTAAgaAFIgvAJIgCAaIgBAaQAAAGgFAEQgEAFgIAAQgHAAgEgFQgFgEgBgHQAAgMADgYIACgkIABgrIAAguQABgHAEgEQAFgFAHAAQAHAAAFAFQAFAEAAAHIgBAbIAAAcIgCAMIAAANIAvgJQAZgFAUgBIABgsQABgKAGgMQAGgPAJAAQAGAAAGAEQAEAEAAAIIAAADQgCAJAAAHIgBAKIAAALIgCAiIgBAhIACAbIABAbQgBAGgEAFQgFAFgHAAQgHAAgFgFg");
	this.shape_156.setTransform(-62.3,224.1);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AghA/QgTgHABgNQAAgMAOAAQAFAAALADQAKAEAGAAQAXAAABgKQAAgGgSgIQgXgLgHgDQgSgMAAgRQAAgZAagIQAQgFAdAAQAMAAAGADQAIAEAAALQAAAWgMAAQgMAAgCgKIgKgBQgbAAgBAIQABAFAPAIQAYALAJAGQARALABARQgBAVgTAKQgPAJgWAAQgQAAgNgFg");
	this.shape_157.setTransform(143.7,264);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AAcBaQgGgLgMgPIgSgZIgQALIgBAhQAAAHgEAEQgGAFgHAAQgRAAAAgUIABgdIACgdIABgnIAAgoIAAgMIgBgNQAAgHAEgEQAFgFAHAAQAIAAAFAFQAEAEAAAHIABANIAAANIAAAiIgBAgQARgLAggiQAFgFAHAAQAHAAAFAFQAGAFgBAHQAAAFgEAGQgPAOgTARIAZAhQASAYAAAJQAAAGgFAFQgGAFgGAAQgKAAgFgKg");
	this.shape_158.setTransform(120.6,260.6);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AAdA4IgUAIQgJACgDABQgeAAgOgQQgPgQAAgfQAAgbAVgWQAXgUAbgBQAMABAPAGQATAIAAALQAAAEgDADIgCAMIAAARQgBAWAEAKIAGAMIAEAMQAAAGgEAEQgGAFgGAAQgGAAgMgLgAgQgXQgMAMAAAQQAAAQAFAJQAHAHALABQAFAAAIgDQAGgDAGgEQgDgcAAgNIAAgJIABgMIgDgCIgEgBQgOAAgNAOg");
	this.shape_159.setTransform(93.7,264.1);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AAYA4IgDgZQgCgOAAgLIABgJIAAgMIAAgEIAAgGQABgJgGgBQgKAAgIAOQgKANgGATIgBALIgBALIAAAKIgBALQAAAHgEAFQgGAEgHAAQgHAAgFgEQgFgEAAgIIgBgKIAAgLIABghIACgfIAAgLIgBgMQABgGAFgFQAEgFAHAAQARABAAATIAAABQATgRARAAQAYgBAIAUQAGANAAAZIAAAJIAAAGQAAAKADAPQACAOAAAKQAAAGgFAFQgFAEgHAAQgPAAgCgOg");
	this.shape_160.setTransform(80.3,263.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AAcBaQgGgLgMgPIgSgZIgQALIgBAhQAAAHgEAEQgGAFgHAAQgRAAAAgUIACgdIABgdIABgnIAAgoIAAgMIgBgNQAAgHAEgEQAGgFAHAAQAHAAAFAFQAEAEAAAHIABANIABANIgBAiIgBAgQARgLAggiQAFgFAHAAQAHAAAFAFQAGAFgBAHQAAAFgEAGQgPAOgUARIAaAhQASAYAAAJQAAAGgFAFQgGAFgGAAQgKAAgFgKg");
	this.shape_161.setTransform(-42.6,260.6);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AglA1QgTgQAAgaQAAgXARgZQAUgeAYAAQAMAAARAHQAVAIAAALQAAAGgEAFQgEAFgHAAQgGAAgIgGQgGgFgPAAQgIAAgLASQgLASAAALQAAANAKAHQAJAHAMAAQAJAAALgGQAMgHADAAQAHAAAEAFQAFAFAAAGQAAAJgVAKQgSAIgMAAQgZAAgSgPg");
	this.shape_162.setTransform(-56.5,264);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("Ag+BOQAAgHAFgEQAEgFAHAAIAQACQAKACAIABQARAAAIgMQAIgKACgYQgGAGgJAEQgHADgIAAQgXAAgQgQQgPgQAAgWQAAgiAUgUQAVgWAiAAQAMAAAHAEQAJACAFAGQAPABAAARQAAAJgCANQgFAegBAeQgBAngMARQgQAZgnAAQgvgBgBgSgAgSg2QgKAMAAAUQABAOAFAIQAGAFALAAQAHAAALgKQAJgKABgMIAGgkIgIgDIgIgCQgTAAgMAOg");
	this.shape_163.setTransform(75.9,230.5);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AAZA4IgEgaQgCgNAAgMIAAgJIABgLIAAgDIAAgGQAAgLgEABQgLAAgIANQgKANgFATIgBALIgBALIgBALIgBAKQAAAHgEAFQgFAFgIAAQgHAAgFgFQgFgFABgGIgBgLIgBgLIACghIABgfIAAgLIAAgLQAAgIAEgEQAGgEAHAAQAPgBACAUIAAABQARgSATAAQAWABAJASQAGANAAAaIAAAJIAAAGQAAAKACAOQADAQAAAJQAAAGgFAFQgEAFgIAAQgPAAgBgPg");
	this.shape_164.setTransform(63,227.1);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AAdA4IgUAIQgJACgDAAQgdAAgPgPQgPgQAAgfQAAgcAWgUQAVgWAcABQAMgBAPAHQATAIAAAKQAAAEgDAEIgCAMIAAARQgBAVAEAKIAGANIAEAMQAAAHgEAEQgGADgGAAQgGABgMgLgAgQgXQgMANAAAPQgBAQAHAIQAFAJAMgBQAGABAGgDQAHgDAGgEQgDgcgBgOIABgJIABgLIgDgBIgEgBQgOAAgNANg");
	this.shape_165.setTransform(29.5,227.3);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AgvA/QgEgEAAgHIAAhOIAAgLIAAgMQABgHAEgEQAEgFAIAAQANAAADAOQATgQAbAAQAYAAAAAhIAAAIQgCASgPAAQgQAAAAgPIAAgNQgaAFgLAXIAAA8QAAAHgFAEQgFAFgHAAQgIAAgEgFg");
	this.shape_166.setTransform(-20,227.3);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AA0BcQgGgFAAgGIgBgbIAAgbIAAgLQgTAAgaAFIgvAJIgCAaIgBAaQAAAGgFAEQgEAFgIAAQgHAAgFgFQgEgEAAgHQAAgMACgYIACgkIAAgrIABguQABgHAEgEQAFgFAHAAQAHAAAFAFQAEAEABAHIgBAbIAAAcIgBAMIgBANIAvgJQAZgFAUgBIABgsQABgKAGgMQAGgPAJAAQAHAAAFAEQAEAEAAAIIAAADQgCAJAAAHIgBAKIgBALIgBAiIgBAhIACAbIAAAbQAAAGgEAFQgFAFgHAAQgHAAgFgFg");
	this.shape_167.setTransform(-48.6,224.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37,p:{x:-58.7,y:224.5}},{t:this.shape_36},{t:this.shape_35,p:{x:-33.6}},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31,p:{x:25.9}},{t:this.shape_30,p:{x:36.2}},{t:this.shape_29,p:{x:49.6,y:227.2}},{t:this.shape_28,p:{x:62.2}},{t:this.shape_27,p:{x:71.9,y:224.3}},{t:this.shape_26},{t:this.shape_25,p:{x:94.7}},{t:this.shape_24,p:{x:118.2}},{t:this.shape_23,p:{x:131.5}},{t:this.shape_22},{t:this.shape_21,p:{x:170.8,y:223.9}},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18,p:{x:210.3,y:225.2}},{t:this.shape_17,p:{x:-68.7}},{t:this.shape_16},{t:this.shape_15,p:{x:-41.6,y:261.2}},{t:this.shape_14},{t:this.shape_13,p:{x:-9,y:264.1}},{t:this.shape_12,p:{x:7.2}},{t:this.shape_11,p:{x:20.7,y:264.1}},{t:this.shape_10,p:{x:32.4}},{t:this.shape_9,p:{x:55.8,y:264.2}},{t:this.shape_8},{t:this.shape_7,p:{x:92.4,y:262}},{t:this.shape_6,p:{x:105.8}},{t:this.shape_5},{t:this.shape_4,p:{x:143.5,y:262}},{t:this.shape_3,p:{x:156.2}},{t:this.shape_2},{t:this.shape_1,p:{x:187.3,y:264.1}},{t:this.shape,p:{x:202.1}}]}).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53,p:{x:36.5}},{t:this.shape_52},{t:this.shape_11,p:{x:65.2,y:227.3}},{t:this.shape_51,p:{x:77.8}},{t:this.shape_50},{t:this.shape_9,p:{x:114.2,y:227.3}},{t:this.shape_49,p:{x:129.6}},{t:this.shape_27,p:{x:141.9,y:224.3}},{t:this.shape_48,p:{x:151.8}},{t:this.shape_47,p:{x:164.7}},{t:this.shape_46,p:{x:-13.7,y:264.2}},{t:this.shape_45,p:{x:-0.3}},{t:this.shape_4,p:{x:23,y:262}},{t:this.shape_6,p:{x:36.3}},{t:this.shape_44,p:{x:50.1}},{t:this.shape_43,p:{x:74.4}},{t:this.shape_15,p:{x:84,y:261.2}},{t:this.shape_42},{t:this.shape_41,p:{x:106.1}},{t:this.shape_40},{t:this.shape_39}]},10).to({state:[{t:this.shape_81},{t:this.shape_80},{t:this.shape_18,p:{x:-62.5,y:225.2}},{t:this.shape_49,p:{x:-48}},{t:this.shape_35,p:{x:-32.7}},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77,p:{x:19.2}},{t:this.shape_76,p:{x:32.6,y:227.3}},{t:this.shape_46,p:{x:45.8,y:227.3}},{t:this.shape_75},{t:this.shape_48,p:{x:83.8}},{t:this.shape_74,p:{x:97.4}},{t:this.shape_13,p:{x:125.7,y:227.3}},{t:this.shape_73,p:{x:142}},{t:this.shape_72,p:{x:154.1}},{t:this.shape_7,p:{x:176.8,y:225.2}},{t:this.shape_23,p:{x:190.1}},{t:this.shape_71,p:{x:200.9,y:224.3}},{t:this.shape_70,p:{x:210.1,y:227.2}},{t:this.shape_69},{t:this.shape_68},{t:this.shape_1,p:{x:-54.1,y:264.1}},{t:this.shape_41,p:{x:-37.9}},{t:this.shape_27,p:{x:-16,y:261.2}},{t:this.shape_67,p:{x:-6.9}},{t:this.shape_66},{t:this.shape_65,p:{x:29.7,y:264.2}},{t:this.shape_4,p:{x:42.3,y:262}},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62,p:{x:103.5,y:264.2}},{t:this.shape_9,p:{x:116.6,y:264.2}},{t:this.shape_61},{t:this.shape_15,p:{x:152.7,y:261.2}},{t:this.shape_60,p:{x:163.1}},{t:this.shape_59},{t:this.shape_58,p:{x:191.7}},{t:this.shape,p:{x:203.9}}]},9).to({state:[{t:this.shape_99},{t:this.shape_31,p:{x:-67.4}},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_28,p:{x:-13.8}},{t:this.shape_65,p:{x:-1.5,y:227.3}},{t:this.shape_24,p:{x:22}},{t:this.shape_23,p:{x:35.4}},{t:this.shape_35,p:{x:49.2}},{t:this.shape_95},{t:this.shape_62,p:{x:88.5,y:227.3}},{t:this.shape_94},{t:this.shape_18,p:{x:115,y:225.2}},{t:this.shape_93,p:{x:135.6}},{t:this.shape_92,p:{x:145}},{t:this.shape_77,p:{x:169.1}},{t:this.shape_9,p:{x:182.5,y:227.3}},{t:this.shape_91,p:{x:195.7}},{t:this.shape_37,p:{x:-75.3,y:261.4}},{t:this.shape_90,p:{x:-65.5}},{t:this.shape_71,p:{x:-58.1,y:261.2}},{t:this.shape_45,p:{x:-48.1}},{t:this.shape_27,p:{x:-26.9,y:261.2}},{t:this.shape_7,p:{x:-17.8,y:262}},{t:this.shape_60,p:{x:6.1}},{t:this.shape_46,p:{x:20,y:264.2}},{t:this.shape_89,p:{x:32.9,y:264.1}},{t:this.shape_15,p:{x:42.4,y:261.2}},{t:this.shape_88},{t:this.shape_87},{t:this.shape_4,p:{x:88.7,y:262}},{t:this.shape_6,p:{x:102.1}},{t:this.shape_86},{t:this.shape_85,p:{x:140.2,y:264.1}},{t:this.shape_84},{t:this.shape_83},{t:this.shape_41,p:{x:179.5}},{t:this.shape_82,p:{x:192}}]},10).to({state:[{t:this.shape_107,p:{x:-55.2}},{t:this.shape_91,p:{x:-40.3}},{t:this.shape_89,p:{x:-27.4,y:227.3}},{t:this.shape_27,p:{x:-17.9,y:224.3}},{t:this.shape_48,p:{x:-8}},{t:this.shape_47,p:{x:4.9}},{t:this.shape_28,p:{x:28.4}},{t:this.shape_23,p:{x:41.8}},{t:this.shape_106},{t:this.shape_92,p:{x:79.8}},{t:this.shape_15,p:{x:90.1,y:224.3}},{t:this.shape_105,p:{x:99.6}},{t:this.shape_104,p:{x:111.3}},{t:this.shape_24,p:{x:123.4}},{t:this.shape_74,p:{x:147.3}},{t:this.shape_103},{t:this.shape_77,p:{x:175.5}},{t:this.shape_62,p:{x:-51.6,y:264.2}},{t:this.shape_37,p:{x:-38.7,y:261.4}},{t:this.shape_18,p:{x:-15.4,y:262}},{t:this.shape_6,p:{x:-2.1}},{t:this.shape_12,p:{x:11.7}},{t:this.shape_7,p:{x:35.7,y:262}},{t:this.shape_9,p:{x:48,y:264.2}},{t:this.shape_46,p:{x:61.1,y:264.2}},{t:this.shape_43,p:{x:74}},{t:this.shape_102},{t:this.shape_58,p:{x:99.9}},{t:this.shape_1,p:{x:116.7,y:264.1}},{t:this.shape_44,p:{x:132.9}},{t:this.shape_101},{t:this.shape_4,p:{x:159.1,y:262}},{t:this.shape_100}]},10).to({state:[{t:this.shape_107,p:{x:-88.3}},{t:this.shape_91,p:{x:-73.4}},{t:this.shape_85,p:{x:-60.5,y:227.3}},{t:this.shape_27,p:{x:-51,y:224.3}},{t:this.shape_128},{t:this.shape_25,p:{x:-28.2}},{t:this.shape_4,p:{x:-4.7,y:225.2}},{t:this.shape_127,p:{x:8.7}},{t:this.shape_126},{t:this.shape_104,p:{x:46.5}},{t:this.shape_23,p:{x:60.1}},{t:this.shape_125,p:{x:73.5}},{t:this.shape_53,p:{x:88.9}},{t:this.shape_72,p:{x:102.3}},{t:this.shape_49,p:{x:127.7}},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_15,p:{x:190.3,y:224.3}},{t:this.shape_121,p:{x:196.8}},{t:this.shape_31,p:{x:203.7}},{t:this.shape_120},{t:this.shape_74,p:{x:228.4}},{t:this.shape_119},{t:this.shape_76,p:{x:-65.4,y:264.2}},{t:this.shape_118},{t:this.shape_117},{t:this.shape_65,p:{x:-26.1,y:264.2}},{t:this.shape_11,p:{x:-13.1,y:264.1}},{t:this.shape_116},{t:this.shape_115,p:{x:23.7}},{t:this.shape_114},{t:this.shape_113},{t:this.shape_62,p:{x:61.5,y:264.2}},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_9,p:{x:123.6,y:264.2}},{t:this.shape_46,p:{x:136.8,y:264.2}},{t:this.shape_109},{t:this.shape_90,p:{x:169.5}},{t:this.shape_108},{t:this.shape_45,p:{x:193.8}},{t:this.shape_17,p:{x:206.3}},{t:this.shape,p:{x:217.8}}]},10).to({state:[{t:this.shape_140},{t:this.shape_139},{t:this.shape_24,p:{x:28}},{t:this.shape_138},{t:this.shape_121,p:{x:61.9}},{t:this.shape_31,p:{x:68.8}},{t:this.shape_18,p:{x:89.1,y:225.2}},{t:this.shape_23,p:{x:102.4}},{t:this.shape_35,p:{x:116.2}},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_7,p:{x:15.2,y:262}},{t:this.shape_133,p:{x:28.1}},{t:this.shape_132,p:{x:42.4}},{t:this.shape_90,p:{x:53.1}},{t:this.shape_131},{t:this.shape_130},{t:this.shape_37,p:{x:99.9,y:261.4}},{t:this.shape_15,p:{x:110.2,y:261.2}},{t:this.shape_129},{t:this.shape_70,p:{x:131.3,y:264}},{t:this.shape_4,p:{x:143.4,y:262}},{t:this.shape_82,p:{x:154.7}}]},10).to({state:[{t:this.shape_144},{t:this.shape_65,p:{x:-17.5,y:227.3}},{t:this.shape_49,p:{x:8.7}},{t:this.shape_27,p:{x:21,y:224.3}},{t:this.shape_28,p:{x:30.1}},{t:this.shape_127,p:{x:43.4}},{t:this.shape_24,p:{x:67.2}},{t:this.shape_23,p:{x:80.5}},{t:this.shape_143},{t:this.shape_1,p:{x:111.5,y:227.3}},{t:this.shape_62,p:{x:138.2,y:227.3}},{t:this.shape_142},{t:this.shape_18,p:{x:-26.6,y:262}},{t:this.shape_6,p:{x:-13.3}},{t:this.shape_3,p:{x:0.5}},{t:this.shape_37,p:{x:24.8,y:261.4}},{t:this.shape_15,p:{x:35.1,y:261.2}},{t:this.shape_11,p:{x:44.5,y:264.1}},{t:this.shape_10,p:{x:56.2}},{t:this.shape_7,p:{x:68.3,y:262}},{t:this.shape_21,p:{x:92.5,y:260.8}},{t:this.shape_9,p:{x:106.3,y:264.2}},{t:this.shape_58,p:{x:120.1}},{t:this.shape_4,p:{x:132.9,y:262}},{t:this.shape_141,p:{x:144.1}}]},10).to({state:[{t:this.shape_156},{t:this.shape_30,p:{x:-46.1}},{t:this.shape_121,p:{x:-24.8}},{t:this.shape_93,p:{x:-17.4}},{t:this.shape_155},{t:this.shape_73,p:{x:4.7}},{t:this.shape_154},{t:this.shape_49,p:{x:43.6}},{t:this.shape_71,p:{x:55.8,y:224.3}},{t:this.shape_7,p:{x:64.9,y:225.2}},{t:this.shape_23,p:{x:78.3}},{t:this.shape_27,p:{x:89.1,y:224.3}},{t:this.shape_153},{t:this.shape_152},{t:this.shape_1,p:{x:150.9,y:227.3}},{t:this.shape_15,p:{x:164.2,y:224.3}},{t:this.shape_31,p:{x:170.7}},{t:this.shape_151},{t:this.shape_9,p:{x:-50.5,y:264.2}},{t:this.shape_37,p:{x:-37.6,y:261.4}},{t:this.shape_4,p:{x:-14.3,y:262}},{t:this.shape_150,p:{x:-1}},{t:this.shape_149},{t:this.shape_148},{t:this.shape_89,p:{x:50,y:264.1}},{t:this.shape_133,p:{x:62.8}},{t:this.shape_132,p:{x:77.1}},{t:this.shape_147},{t:this.shape_6,p:{x:114.9}},{t:this.shape_115,p:{x:129}},{t:this.shape_146},{t:this.shape_145},{t:this.shape_141,p:{x:167.5}}]},10).to({state:[{t:this.shape_167},{t:this.shape_46,p:{x:-32.8,y:227.3}},{t:this.shape_166},{t:this.shape_105,p:{x:-8}},{t:this.shape_77,p:{x:4.6}},{t:this.shape_165},{t:this.shape_31,p:{x:39.6}},{t:this.shape_125,p:{x:49.6}},{t:this.shape_164},{t:this.shape_163},{t:this.shape_24,p:{x:99.4}},{t:this.shape_76,p:{x:111.7,y:227.3}},{t:this.shape_18,p:{x:135.2,y:225.2}},{t:this.shape_23,p:{x:148.6}},{t:this.shape_51,p:{x:162.4}},{t:this.shape_60,p:{x:-83.4}},{t:this.shape_65,p:{x:-69.4,y:264.2}},{t:this.shape_162},{t:this.shape_161},{t:this.shape_7,p:{x:-19.6,y:262}},{t:this.shape_62,p:{x:-7.3,y:264.2}},{t:this.shape_4,p:{x:16.2,y:262}},{t:this.shape_150,p:{x:29.6}},{t:this.shape_44,p:{x:43.4}},{t:this.shape_67,p:{x:67.4}},{t:this.shape_160},{t:this.shape_159},{t:this.shape_29,p:{x:106.8,y:264}},{t:this.shape_158},{t:this.shape_157},{t:this.shape_6,p:{x:157.4}},{t:this.shape_9,p:{x:170.8,y:264.2}},{t:this.shape_45,p:{x:184.4}},{t:this.shape,p:{x:196.2}}]},10).wait(10));

	// text
	this.result = new cjs.Text("", "bold 20px 'Comic Sans MS'", "#FFFFFF");
	this.result.name = "result";
	this.result.textAlign = "center";
	this.result.lineHeight = 30;
	this.result.lineWidth = 305;
	this.result.setTransform(59.2,286.9);

	this.timeline.addTween(cjs.Tween.get(this.result).wait(99));

	// Layer 16
	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#0000CC").s().p("Ag6BhQgOgNAAgpQAAgRADggQACgiAAgRIgBgNIgBgNQAAgTARAAQAGAAAFADIAcgGQANgCAKAAQAgAAATAIQAMAEAAAMQAAAHgFAFQgFAFgIAAIgFAAQgVgGgTAAIgTACIgXAEIgBAyIAwgEIAegDQAIAAAFAFQAFAFAAAIQAAANgQACIgeACIg0AFIgBAaQAAAZADAEQABABAPAAIAVAAIAYAAIAIgBIAHgBQAHAAAGAEQAGAFAAAIQAAAPgPACQgNADgmAAQgpAAgNgLg");
	this.shape_168.setTransform(239,349.7);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#0000CC").s().p("AgLBcQgGgFAAgIIAAgFIABgGIgBgRIgBgSQABgRgDgbIgEguIgGAAQgdAAgQgEQgOgEAAgNQAAgGAFgFQAFgHAIABIAUACIAVABIAXAAIAVAAIAdABIAdACQAHAAAGAFQAFAFAAAHQAAAHgFAFQgGAFgHAAIgfgBIgfgCIAEA0QADAfgBATIABANIABAMQAAAKgEAHQgFAKgJAAQgFAAgGgEg");
	this.shape_169.setTransform(221.6,349.7);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#0000CC").s().p("Ag6BhQgOgNAAgpQAAgRADggQACgiAAgRIgBgNIgBgNQAAgTARAAQAGAAAFADIAcgGQANgCAKAAQAgAAATAIQAMAEAAAMQAAAHgFAFQgFAFgIAAIgFAAQgVgGgTAAIgTACIgXAEIgBAyIAwgEIAegDQAIAAAFAFQAFAFAAAIQAAANgQACIgeACIg0AFIgBAaQAAAZADAEQABABAPAAIAVAAIAYAAIAIgBIAHgBQAHAAAGAEQAGAFAAAIQAAAPgPACQgNADgmAAQgpAAgNgLg");
	this.shape_170.setTransform(204.7,349.7);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#0000CC").s().p("AhCBMIACgoQADg2ABhDQAAgHAEgFQAFgFAIAAQAIAAAFAFQAFAFAAAHQAABEgEA3IgCAfQAfAAAsgPIAGgBQAIAAAFAGQAEAFAAAHQABALgLAEQgQAIgfAEQgbAGgSgBQgfAAAAgbg");
	this.shape_171.setTransform(189.4,350.1);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#0000CC").s().p("Ag4BgQgFgFAAgHIAAgjQAAgUADgkQACgnAAgUQABghARACIAMgCIATgBQAXAAAWAQQAYASAAAaQAAAhgZARQgYARgdAAIgLgBIgBA6QABAHgFAFQgFAFgHAAQgIAAgEgFgAgWgxIgCAsIAIABQARAAAOgJQAOgKAAgRQAAgKgOgJQgMgIgNAAIgHAAIgFAAIAAASg");
	this.shape_172.setTransform(175,349.4);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#0000CC").s().p("ABEBSIgHgfQgGgWgHgpIgTA0IgIAWQgFAOgFAJQgGAMgKAAQgMAAgGgOIgIgYQgKgggIgiIgQA8IgEAdQgFASgOAAQgJAAgFgGQgFgFABgHQAAgUAJgfIANguIAIgoQAGgaAGgKQAHgIAKgBQALABAGAMQAFAKAGAjQAFAgALAlQANgkAMgtIAIgdQAGgSAPAAQAOAAAHAVQADAJACAXQAIA0ALAmQAMAoAAADQgBAIgGAEQgFAFgHAAQgOAAgHgUg");
	this.shape_173.setTransform(156.8,350.1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#0000CC").s().p("AhCBOQgdgXAAglQAAgpAbgkQAfgoAsABQAtgBAVAVQAXAUAAApQAAApgaAjQgcApgsAAQgmAAgagWgAgngkQgUAZAAAdQABAWAQANQAQANAYgBQAZABAUgcQAQgZABgeQgBgbgMgKQgLgKgdAAQgaAAgUAcg");
	this.shape_174.setTransform(134.7,350);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#0000CC").s().p("Ag4BNQgSgUAAgbQAAgpAlgsQAfgmAfAAIALABIAHABQAGgGAIAAQANAAADAPQACALAAAOQAAAGgEAGQgEAHgKAAQgLAAgFgNQgDgFgDgBQgBgBgJAAQgQAAgTAZQgdAhAAAeQAAAOAJAJQAKAKANAAQAKAAANgGIATgNQAKgGAFAAQAIAAAFAFQAFAGAAAGQAAAIgGAFQgjAegiAAQgdAAgUgVg");
	this.shape_175.setTransform(116.4,349.7);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#0000CC").s().p("AhYBiQgFgGAAgHIABgPIABgPIABgXIAAgWIAAgXIgBgYIgBgXIgCgXQAAgHAGgGQAHgGAJAAQAJAAALAQQA4BSA4AzIAAgUIgBhSIgCgOIgBgOQAAgRASgBQAVAAAABBIAAAUIgBBOIgCAUQgDAQgQAAQgIAAgMgKQgxgsg7hNIAAAmIAAAfIABAdQAAAmgTAAQgJAAgGgFg");
	this.shape_176.setTransform(97.7,349.9);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#0000CC").s().p("Ag7BbQgFgFAAgGQAAgIAGgFQAEgFAJAAIAYgBIAAg6QAAggACggIgbABQgIAAgFgFQgFgFAAgIQAAgHAFgEQAFgFAGgBIAmgBQAWAAAmAGQAPACAAAPQAAAIgGAFQgEAEgHAAIghgEQgCAYAAAlIAAA4IAjAAQAHAAAFAFQAFAFAAAHQAAAHgFAGQgFAEgIAAIgWABIgVAAQgHAAgRACIgaADQgIgBgFgFg");
	this.shape_177.setTransform(79.9,350);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#0000CC").s().p("Ag6BhQgOgNAAgpQAAgRADggQACgiAAgRIgBgNIgBgNQAAgTARAAQAGAAAFADIAcgGQANgCAKAAQAgAAATAIQAMAEAAAMQAAAHgFAFQgFAFgIAAIgFAAQgVgGgTAAIgTACIgXAEIgBAyIAwgEIAegDQAIAAAFAFQAFAFAAAIQAAANgQACIgeACIg0AFIgBAaQAAAZADAEQABABAPAAIAVAAIAYAAIAIgBIAHgBQAHAAAGAEQAGAFAAAIQAAAPgPACQgNADgmAAQgpAAgNgLg");
	this.shape_178.setTransform(20.6,349.7);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#0000CC").s().p("AgLBcQgGgFAAgIIABgFIABgGIgBgRIgCgSQAAgRgCgbIgDguIgHAAQgdAAgQgEQgOgEAAgNQAAgGAEgFQAFgHAKABIAUACIAUABIAXAAIAVAAIAdABIAdACQAIAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgIAAIgfgBIgegCIADA0QACAfAAATIACANIAAAMQAAAKgEAHQgFAKgJAAQgGAAgFgEg");
	this.shape_179.setTransform(3.2,349.7);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#0000CC").s().p("Ag6BhQgOgNAAgpQAAgRADggQACgiAAgRIgBgNIgBgNQAAgTARAAQAGAAAFADIAcgGQANgCAKAAQAgAAATAIQAMAEAAAMQAAAHgFAFQgFAFgIAAIgFAAQgVgGgTAAIgTACIgXAEIgBAyIAwgEIAegDQAIAAAFAFQAFAFAAAIQAAANgQACIgeACIg0AFIgBAaQAAAZADAEQABABAPAAIAVAAIAYAAIAIgBIAHgBQAHAAAGAEQAGAFAAAIQAAAPgPACQgNADgmAAQgpAAgNgLg");
	this.shape_180.setTransform(-13.7,349.7);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#0000CC").s().p("AhDBMIAEgoQADg2AAhDQAAgHAEgFQAGgFAHAAQAIAAAFAFQAFAFAAAHQAABEgEA3IgCAfQAeAAAugPIAFgBQAIAAAFAGQAFAFgBAHQAAALgLAEQgOAIggAEQgaAGgTgBQgfAAgBgbg");
	this.shape_181.setTransform(-29,350.1);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#0000CC").s().p("Ag4BgQgFgFAAgHIAAgjQAAgUACgkQADgnAAgUQABghARACIANgCIASgBQAXAAAWAQQAYASAAAaQAAAhgZARQgXARgeAAIgKgBIgBA6QAAAHgFAFQgFAFgHAAQgHAAgFgFgAgXgxIgBAsIAIABQASAAANgJQAOgKAAgRQAAgKgNgJQgNgIgMAAIgIAAIgFAAIgBASg");
	this.shape_182.setTransform(-43.4,349.4);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#0000CC").s().p("ABEBSIgHgfQgGgWgHgpIgTA0IgIAWQgEAOgGAJQgGAMgKAAQgMAAgHgOIgHgYQgJgggJgiIgPA8IgFAdQgFASgOAAQgJAAgFgGQgEgFgBgHQAAgUAJgfIAPguIAHgoQAFgaAIgKQAGgIAKgBQAMABAFAMQAFAKAGAjQAGAgALAlQAMgkANgtIAHgdQAGgSAPAAQAOAAAGAVQADAJAEAXQAHA0ALAmQALAoAAADQABAIgHAEQgFAFgHAAQgOAAgHgUg");
	this.shape_183.setTransform(-61.6,350.1);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#0000CC").s().p("AhCBOQgdgXABglQAAgpAbgkQAegoAsABQAsgBAXAVQAVAUAAApQAAApgZAjQgcApgsAAQgmAAgagWgAgngkQgUAZABAdQAAAWAQANQAQANAYgBQAaABASgcQARgZAAgeQABgbgMgKQgMgKgdAAQgaAAgUAcg");
	this.shape_184.setTransform(-83.7,350);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#0000CC").s().p("Ag4BNQgSgUAAgbQAAgpAlgsQAfgmAfAAIALABIAHABQAGgGAIAAQANAAADAPQACALAAAOQAAAGgEAGQgEAHgKAAQgLAAgFgNQgDgFgDgBQgBgBgJAAQgQAAgTAZQgdAhAAAeQAAAOAJAJQAKAKANAAQAKAAANgGIATgNQAKgGAFAAQAIAAAFAFQAFAGAAAGQAAAIgGAFQgjAegiAAQgdAAgUgVg");
	this.shape_185.setTransform(-102,349.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168}]}).wait(99));

	// buttons
	this.btn_wrong = new lib.quiz_btn();
	this.btn_wrong.setTransform(-118,330.1,0.875,1);
	new cjs.ButtonHelper(this.btn_wrong, 0, 1, 2, false, new lib.quiz_btn(), 3);

	this.btn_correct = new lib.quiz_btn();
	this.btn_correct.setTransform(56.5,330.1,1.148,1);
	new cjs.ButtonHelper(this.btn_correct, 0, 1, 2, false, new lib.quiz_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_correct,p:{scaleX:1.148,x:56.5,y:330.1}},{t:this.btn_wrong,p:{scaleX:0.875,x:-118,y:330.1}}]}).to({state:[{t:this.btn_correct,p:{scaleX:1.165,x:54.4,y:328.9}},{t:this.btn_wrong,p:{scaleX:0.926,x:-124.1,y:328.9}}]},10).to({state:[{t:this.btn_correct,p:{scaleX:0.915,x:-118.6,y:334.9}},{t:this.btn_wrong,p:{scaleX:1.119,x:61.4,y:330.1}}]},9).to({state:[{t:this.btn_correct,p:{scaleX:0.858,x:-116.2,y:332.6}},{t:this.btn_wrong,p:{scaleX:1.085,x:64.5,y:334.9}}]},10).to({state:[{t:this.btn_correct,p:{scaleX:1.057,x:65.3,y:332.6}},{t:this.btn_wrong,p:{scaleX:0.881,x:-113,y:334.9}}]},10).to({state:[{t:this.btn_correct,p:{scaleX:0.915,x:-120.7,y:328.9}},{t:this.btn_wrong,p:{scaleX:1.136,x:55.5,y:328.9}}]},10).to({state:[{t:this.btn_correct,p:{scaleX:0.841,x:-112.2,y:330.1}},{t:this.btn_wrong,p:{scaleX:1.011,x:70.8,y:334.9}}]},10).to({state:[{t:this.btn_correct,p:{scaleX:0.915,x:-120.7,y:328.9}},{t:this.btn_wrong,p:{scaleX:1.136,x:54.5,y:328.9}}]},10).to({state:[{t:this.btn_correct,p:{scaleX:0.915,x:-120.7,y:328.9}},{t:this.btn_wrong,p:{scaleX:1.136,x:56.5,y:328.9}}]},10).to({state:[{t:this.btn_correct,p:{scaleX:0.915,x:-120.7,y:328.6}},{t:this.btn_wrong,p:{scaleX:1.136,x:54.5,y:328.6}}]},10).wait(10));

	// Layer 6
	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#07C1D6").s().p("AgGA8QgEgFAAgEQAAgEADgCQADgDAEAAQADAAAEAFQAEAEAAAEQAAAEgDADQgEADgEAAQgCAAgEgFgAgFAiQgCgDAAgEIgBgJIAAgJIAAgfIABggQAAgEACgDQADgDADAAQAEAAADADQADADAAAEIAABRQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_186.setTransform(-98.1,118.6);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#07C1D6").s().p("AgyA6QgDgDAAgFQAAgGAFgHIAIgMIAaggQAOgUANgMIgRAAIgfAAIgCABIgDAAQgFAAgDgCQgDgEgBgFQABgLAQABIAQAAIAPABIAQgBIASAAQAYAAAAAKQAAAHgKAHIgLAHQgNAKgTAVIgZAmIAZgBIAbgBIAQABQAJACABAHQgBAFgDADQgEADgEAAIgHgBIgHAAIgiABIgjAAQgFAAgEgCg");
	this.shape_187.setTransform(-105.4,119);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#07C1D6").s().p("AgjA4QgEgDAAgEQAAgFAEgDQADgDAFAAIAPgBIgBgkQABgTABgTIgQAAQgGAAgCgDQgEgDAAgEQAAgFAEgDQACgCAEgBIAXAAQANAAAXADQAKABAAAKQAAAFgDACQgEADgEAAIgUgCIgBAkIAAAjIAVAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAIgNAAIgOAAIgOACIgPABQgGAAgCgDg");
	this.shape_188.setTransform(-115.4,119);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#07C1D6").s().p("AgeA1QgVgQAAglIABgMIAAgLIAAgJIAAgJQAAgGADgFQADgHAFAAQAFAAADACQADADAAAFIAAANIAAANIAAALIgBALQAAAKADAKQADANAHAEQADADAMAAQATAAAHgjQAEgQAAgiQAAgEADgEQADgFAHAAQAFAAADADQACADAAAEQAAAfgDARQgFAZgNARQgFAIgIAFQgKAGgJAAQgTAAgKgHg");
	this.shape_189.setTransform(-125.7,119.1);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#07C1D6").s().p("AATAvQgOAFgKAAQgYAAgUgTQgSgTAAgWQAAgcAWgUQAVgTAbAAQAfAAAPAXQAOATAAAdQAAAWgYASIAPANIAJAHQAFAFAAAEQAAAEgEAEQgDADgFAAQgFAAgggdgAAAAeQgMgLAAgHQAAgFAEgDQADgDAFAAQADAAAEAFQAGAJAJAHQATgMAAgOQAAgWgJgNQgKgOgTAAQgTAAgOANQgPANAAATQAAANAMANQANAMAPAAIAFAAIAAAAg");
	this.shape_190.setTransform(-138.3,120.4);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AgEAkQgCgCAAgDIAAgFIAAgEQAAgDACgCQACgDACAAQAJAAAAARQgBADgCACQgCADgEAAQgBAAgDgDgAgFgTQgCgCAAgDIAAgDIAAgDQAAgEABgCQADgCADAAQAHAAAAAOQAAADgCACQgCADgDAAQgDAAgCgDg");
	this.shape_191.setTransform(225.4,182.7);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FF0000").s().p("AgZAhQgMgJAAgSQAAgTAJgNQALgPARAAQAMAAAIAEQAKAFAAAMQAAAIgJAGQgDADgNAEIgcAOQAEAGAHADQAGAEAHAAQAFAAAIgCQAJgCADgFQACgEADAAQADAAACACQACACAAADQAAAIgOAHQgMAFgLAAQgQAAgKgJgAgPgUQgGAIgDANIAYgKQAMgHAGgFQgHgGgLAAQgJAAgGAHg");
	this.shape_192.setTransform(218.8,183.7);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FF0000").s().p("AgVAhQgLgJAAgRQAAgOALgRQALgSANAAQAIgBAJAEQAMAFAAAGQAAAEgCACQgCACgDAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQAAAAgBgBIgDgCQgFgEgKAAQgGAAgIAPQgHAMAAAIQAAAKAHAGQAHAFAIABQAFgBAFgCIAJgFIADgBQADAAACACQACADAAADQAAAGgMAFQgKAEgHAAQgOAAgLgKg");
	this.shape_193.setTransform(210.2,183.7);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FF0000").s().p("AASAmIgBgRIgBgRIAAgGIAAgIQAAgQgHAAQgIAAgGAKQgHAKgEAMIgBAHIAAAJIAAAHIAAAGQAAAEgBACQgDACgDAAQgEAAgBgCQgDgCAAgEIgBgGIAAgHIABgWIABgVIAAgIIAAgHQAAgDACgCQACgDADAAQAIAAAAALIABAJQANgSALAAQANAAAFALQAEAIAAANIAAAIIgBAGQABAHACAKIABARQAAADgCACQgDACgDAAQgHAAgBgHg");
	this.shape_194.setTransform(202.1,183.6);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FF0000").s().p("AgZAhQgMgJAAgSQAAgTAJgNQALgPARAAQAMAAAIAEQAKAFAAAMQAAAIgJAGQgDADgNAEIgcAOQAEAGAHADQAGAEAHAAQAFAAAIgCQAJgCADgFQACgEADAAQADAAACACQACACAAADQAAAIgOAHQgMAFgLAAQgQAAgKgJgAgPgUQgGAIgDANIAYgKQAMgHAGgFQgHgGgLAAQgJAAgGAHg");
	this.shape_195.setTransform(193.5,183.7);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FF0000").s().p("AgDA2QgDgCAAgCIAAgJIAAgJIgBgsIgSgCQgGAAAAgHQAAgDACgDQACgCADAAIAQACIAAgLIAAgKQAAgDACgDQADgBACAAQAGAAABALIAAAHIAAAEIAAAFIALgBIAKABQAGACAAAFQgBADgCADQgCACgEAAIgDAAIgEgBIgLACIACAsIAAADIAAAFQAAAQgIAAQgBAAgCgCg");
	this.shape_196.setTransform(185.2,182.4);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FF0000").s().p("AgVArQgMgEAAgIQAAgDADgDQACgCAEAAQACAAAEAEQACACAGABIAJABQAFAAAFgCQAHgCAAgFQAAgLgPgDIgGgCQgLgDgEgDQgGgCAAgJQAAgQAPgHIANgFIAPgFIAHgBQADAAACACQADACAAADIABAHIABAHQAAADgDACQgCADgDAAQgEAAgCgDIgCgJIgSAGQgLAFAAAHIAFABQAQAEAIAFQANAGAAAQQAAANgLAGQgJAFgMAAQgKAAgKgDg");
	this.shape_197.setTransform(177.3,183.3);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FF0000").s().p("AgGA4QgCgCgBgEIAAgOIAAgOIABgSIABgQQAAgEACgCQACgCADAAQABAAADACQACACAAAEIgBAQIgBASIAAAOIABAOQAAAEgCACQgCACgCAAQgDAAgCgCgAgEgqQgCgCAAgEQAAgEACgDQADgCACAAQADAAADACQADADAAAEQAAAEgDACQgDADgDAAQgCAAgDgDg");
	this.shape_198.setTransform(171.5,181.7);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FF0000").s().p("AAYApIgYgfIgPAPIgNANQgDADgDAAQgDAAgCgDQgCgCAAgDIACgFIAGgHIAHgHIARgPIgKgOQgGgJgEgFQgEgCAAgDQAAgDADgDQACgCACAAQAFAAAKAMIALASIAQgNQAJgJADgGQADgDADAAQADgBADADQACACAAADQAAAEgIAIIgKAKIgPAOIAaAgQABABAAAAQAAABABAAQAAABAAAAQAAABAAABQAAADgDACQgCACgDABQgDAAgCgEg");
	this.shape_199.setTransform(164.4,183.4);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FF0000").s().p("AghA8QgIgHAAgZIAAgLIACgNIgCgEQAAAAABAAQAAAAAAAAQAAgBAAAAQABgBAAAAIACgiIgBgJIgBgIQAAgJAHAAQAEAAACACIASgEIAOgBQASAAAMAEQAFADABAFQgBAEgCACQgCACgDAAIgDAAQgNgEgMAAIgNACIgQADIABAIIgBAeIAggEIASgBQAEAAADACQABACAAAEQABAGgIAAIgSACIgiADIgBAKIAAAKQAAARACADQADACAKAAIAMAAIAPAAIAFAAIAEgBQAIAAAAAIQAAAHgGABQgIABgWAAQgYAAgHgGg");
	this.shape_200.setTransform(154.9,181.7);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AgdAkIAAg1IAAgIIABgIQAAgIAGAAQAIAAAAANQAOgOARAAQAHAAADAFQADAEAAAKIAAAGQgBAJgHAAQgHAAAAgHIAAgGIAAgGQgMABgGAFQgHAGgEAKIAAApQAAAHgIAAQgHAAAAgHg");
	this.shape_201.setTransform(141.2,183.7);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AgWAhQgLgLAAgSQgBgQAKgNQALgQARAAQAQAAAIAOQAGAMAAAPQAAAQgJAMQgKAOgPAAQgNAAgJgJgAgNgOQgFAIAAAKQAAALAGAGQAFAGAHAAQAHAAAFgGQAHgHAAgLQACgcgSAAQgJAAgHALg");
	this.shape_202.setTransform(132.8,183.7);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FF0000").s().p("AASAmIgCgRIgBgRIAAgGIABgIQAAgQgHAAQgIAAgGAKQgHAKgEAMIgBAHIgBAJIABAHIAAAGQAAAEgBACQgDACgDAAQgDAAgCgCQgDgCAAgEIgBgGIAAgHIACgWIABgVIgBgIIAAgHQAAgDACgCQADgDACAAQAIAAAAALIABAJQANgSALAAQANAAAFALQADAIABANIAAAIIAAAGQAAAHACAKIABARQAAADgCACQgDACgDAAQgGAAgCgHg");
	this.shape_203.setTransform(119.9,183.6);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FF0000").s().p("AgWAhQgLgLAAgSQgBgQAKgNQALgQARAAQAQAAAIAOQAGAMAAAPQAAAQgJAMQgKAOgPAAQgNAAgJgJgAgNgOQgFAIAAAKQAAALAGAGQAFAGAHAAQAHAAAFgGQAHgHAAgLQACgcgSAAQgJAAgHALg");
	this.shape_204.setTransform(111.2,183.7);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FF0000").s().p("AgHA4QgCgCAAgEIAAgOIAAgOIABgSIAAgQQAAgEACgCQADgCADAAQACAAACACQACACAAAEIgBAQIAAASIAAAOIAAAOQAAAEgCACQgDACgBAAQgDAAgDgCgAgDgqQgEgCAAgEQAAgEAEgDQACgCACAAQADAAADACQADADAAAEQAAAEgDACQgDADgDAAQgCAAgCgDg");
	this.shape_205.setTransform(105.1,181.7);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FF0000").s().p("AgDA2QgDgCAAgCIAAgJIABgJIgCgsIgSgCQgGAAAAgHQAAgDACgDQACgCADAAIAQACIAAgLIAAgKQAAgDACgDQACgBADAAQAFAAACALIAAAHIAAAEIAAAFIALgBIAKABQAGACAAAFQgBADgCADQgCACgEAAIgDAAIgEgBIgLACIACAsIAAADIAAAFQAAAQgIAAQgBAAgCgCg");
	this.shape_206.setTransform(98.9,182.4);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FF0000").s().p("AgVAhQgLgJAAgRQAAgOALgRQALgSANAAQAIgBAJAEQAMAFAAAGQAAAEgCACQgCACgDAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBIgDgCQgFgEgKAAQgGAAgIAPQgHAMAAAIQAAAKAHAGQAHAFAIABQAFgBAFgCIAJgFIADgBQADAAACACQACADAAADQAAAGgMAFQgKAEgHAAQgOAAgLgKg");
	this.shape_207.setTransform(91,183.7);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FF0000").s().p("AAbAoIgFgYIgVADIgTAFIgNAdQgDAFgEAAQgDAAgDgDQgCgCAAgDQAAgEAMgYQgCgDAAgDQAAgFAIgDIAXgkQAQgdAFAAQAGgBACAJIAFAaIAMA0IAEANIACAJQAAADgCACQgCADgEAAQgHgBgFgSgAgJAFIAbgFIgGgdg");
	this.shape_208.setTransform(80.9,181.9);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AgVArQgMgEAAgIQAAgDADgDQACgCAEAAQACAAAEAEQACACAGABIAJABQAFAAAFgCQAHgCAAgFQAAgLgPgDIgGgCQgLgDgEgDQgGgCAAgJQAAgQAPgHIANgFIAPgFIAHgBQADAAACACQADACAAADIABAHIABAHQAAADgDACQgCADgDAAQgEAAgCgDIgCgJIgSAGQgLAFAAAHIAFABQAQAEAIAFQANAGAAAQQAAANgLAGQgJAFgMAAQgKAAgKgDg");
	this.shape_209.setTransform(66.3,183.3);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AgHA4QgCgCAAgEIAAgOIAAgOIABgSIAAgQQAAgEACgCQADgCADAAQACAAACACQACACAAAEIgBAQIAAASIAAAOIAAAOQAAAEgCACQgDACgBAAQgDAAgDgCgAgDgqQgEgCAAgEQAAgEAEgDQACgCACAAQADAAADACQADADAAAEQAAAEgDACQgDADgDAAQgCAAgCgDg");
	this.shape_210.setTransform(60.5,181.7);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AgXA6QgCAEgEAAQgDAAgCgCQgCgDAAgDIAAgGIABgGIgBgYIAAgXIAAgWIAAgWQAAgEACgEQACgFAFAAQAGAAAAAHIgBADIAAADIAAASIAAATQAGgEAHgCQAGgDADAAQARAAAKANQAKAKAAASQAAASgLAMQgMANgPAAQgMAAgKgFgAgLgCIgLAFIAAAOIAAAMIAAANIAKAEQAFACAGAAQAJAAAIgIQAHgIAAgMQAAgMgGgIQgGgGgLAAQgEAAgHAEg");
	this.shape_211.setTransform(48.7,181.6);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AgdAkIAAg1IAAgIIABgIQAAgIAGAAQAIAAAAANQAOgOARAAQAHAAADAFQADAEAAAKIAAAGQgBAJgHAAQgHAAAAgHIAAgGIAAgGQgMABgGAFQgHAGgEAKIAAApQAAAHgIAAQgHAAAAgHg");
	this.shape_212.setTransform(40.2,183.7);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("AgZAhQgMgJAAgSQAAgTAJgNQALgPARAAQAMAAAIAEQAKAFAAAMQAAAIgJAGQgDADgNAEIgcAOQAEAGAHADQAGAEAHAAQAFAAAIgCQAJgCADgFQACgEADAAQADAAACACQACACAAADQAAAIgOAHQgMAFgLAAQgQAAgKgJgAgPgUQgGAIgDANIAYgKQAMgHAGgFQgHgGgLAAQgJAAgGAHg");
	this.shape_213.setTransform(31.9,183.7);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AgHAkIgNggIgNgiIgBgEQAAgDACgCQADgCADAAQAEAAACAFIAUA0QAEgMAJgWIAHgSQADgFAEAAQADAAACACQADADAAADQAAADgNAeIgQAjQAAAHgGAAQgFAAgCgGg");
	this.shape_214.setTransform(23.6,183.6);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("AgZAhQgMgJAAgSQAAgTAJgNQALgPARAAQAMAAAIAEQAKAFAAAMQAAAIgJAGQgDADgNAEIgcAOQAEAGAHADQAGAEAHAAQAFAAAIgCQAJgCADgFQACgEADAAQADAAACACQACACAAADQAAAIgOAHQgMAFgLAAQgQAAgKgJgAgPgUQgGAIgDANIAYgKQAMgHAGgFQgHgGgLAAQgJAAgGAHg");
	this.shape_215.setTransform(10.5,183.7);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("AAVA7QgCgHgCgMIgBgSIAAgHIAAgGQAAgMgHAAQgJAAgHAHQgEAEgHANQAAAegCAGQgCAEgFAAQgDAAgCgCQgDgCAAgEIABgCIABgMIAAgMIAAg3IABgNIgBgHIgBgIQAAgEACgCQADgCADABQAGAAABAGIACAOIgBARIAAARIAAAHQAGgIAIgFQAFgEAIAAQANAAAFAJQADAFABAMIAAAPIACARIADAPIAAADQAAADgCACQgDACgDAAQgGAAgBgFg");
	this.shape_216.setTransform(1.5,181.6);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("AgEA2QgCgCAAgCIAAgJIABgJIgCgsIgRgCQgIAAAAgHQAAgDACgDQADgCADAAIARACIgBgLIAAgKQAAgDACgDQADgBACAAQAGAAABALIAAAHIAAAEIAAAFIALgBIALABQAEACAAAFQAAADgCADQgCACgEAAIgDAAIgEgBIgLACIACAsIAAADIAAAFQAAAQgIAAQgCAAgCgCg");
	this.shape_217.setTransform(-7,182.4);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("AgLBCQgDgCAAgDIAAgCQACgKAAgMIAAgVIAAgVIgMABQgIAAAAgHQAAgIANgBIAIAAIABgMQACgRAHgIQAGgKARAAQALAAAAAHQAAAIgKAAQgTAAgCAaIAAAFIARgBQAMAAAAAIQAAAGgGABIgGAAIgSABIgBAQIABAOIAAAPQAAAPgBAIQAAAGgGAAQgDAAgCgCg");
	this.shape_218.setTransform(-19.8,181.9);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AgGA4QgCgCAAgEIAAgOIgBgOIABgSIABgQQAAgEABgCQADgCADAAQABAAADACQACACAAAEIgBAQIgBASIAAAOIABAOQAAAEgDACQgCACgBAAQgDAAgCgCgAgEgqQgCgCAAgEQAAgEACgDQADgCACAAQADAAAEACQACADAAAEQAAAEgCACQgEADgDAAQgCAAgDgDg");
	this.shape_219.setTransform(-25.8,181.7);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("AgTA9QgDgCAAgEQAAgIARglIgcg0IgDgGQgDgDAAgCQAAgDADgDQACgDADABQAEgBACADQANASANAiIAMgbQAGgNAGgLQADgDAEAAQADAAACABQADADAAADIgBAEIgbA5QgKAUgEAPIgFAPQgCAFgFABQgDAAgCgCg");
	this.shape_220.setTransform(-37.5,185.8);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("AgLBCQgDgCAAgDIAAgCQACgKAAgMIAAgVIAAgVIgMABQgIAAAAgHQAAgIANgBIAIAAIABgMQACgRAHgIQAGgKARAAQALAAAAAHQAAAIgKAAQgTAAgCAaIAAAFIARgBQAMAAAAAIQAAAGgGABIgGAAIgSABIgBAQIABAOIAAAPQAAAPgBAIQAAAGgGAAQgDAAgCgCg");
	this.shape_221.setTransform(-45.6,181.9);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("AgHA4QgCgCAAgEIAAgOIAAgOIABgSIAAgQQAAgEACgCQADgCADAAQACAAACACQACACAAAEIgBAQIAAASIAAAOIAAAOQAAAEgDACQgBACgCAAQgDAAgDgCgAgDgqQgEgCAAgEQAAgEAEgDQACgCACAAQAEAAACACQADADAAAEQAAAEgDACQgCADgEAAQgCAAgCgDg");
	this.shape_222.setTransform(-51.6,181.7);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000000").s().p("AgDA2QgDgCAAgCIAAgJIAAgJIgBgsIgSgCQgGAAAAgHQAAgDACgDQACgCADAAIAQACIAAgLIAAgKQAAgDACgDQADgBACAAQAGAAABALIAAAHIAAAEIAAAFIALgBIAKABQAGACAAAFQgBADgCADQgCACgEAAIgDAAIgEgBIgLACIACAsIAAADIAAAFQAAAQgIAAQgBAAgCgCg");
	this.shape_223.setTransform(-57.8,182.4);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("AATAmIgDgRIgBgRIAAgGIABgIQAAgQgGAAQgJAAgGAKQgHAKgEAMIgBAHIgBAJIABAHIABAGQgBAEgCACQgCACgDAAQgEAAgCgCQgCgCAAgEIAAgGIgBgHIACgWIAAgVIAAgIIAAgHQAAgDACgCQADgDADAAQAHAAABALIAAAJQANgSAMAAQAMAAAFALQADAIABANIAAAIIgBAGQAAAHACAKIACARQAAADgCACQgDACgCAAQgIAAAAgHg");
	this.shape_224.setTransform(-65.6,183.6);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AgZAhQgMgJAAgSQAAgTAJgNQALgPARAAQAMAAAIAEQAKAFAAAMQAAAIgJAGQgDADgNAEIgcAOQAEAGAHADQAGAEAHAAQAFAAAIgCQAJgCADgFQACgEADAAQADAAACACQACACAAADQAAAIgOAHQgMAFgLAAQgQAAgKgJgAgPgUQgGAIgDANIAYgKQAMgHAGgFQgHgGgLAAQgJAAgGAHg");
	this.shape_225.setTransform(-74.2,183.7);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("AgbA1QgLgLABgSQgBgUALgLQAMgNAPAAQAKAAAFAEIAHAEQAAggACgMQABgGAHAAQAGgBABAIIgEAwIgBAVQABAaACAOIAAABQAAADgCACQgDADgCAAQgFAAgCgIQgGAEgGADQgGACgFAAQgQAAgLgLgAgRABQgHAIAAAPQABALAGAGQAHAIAKAAQAFAAAEgCIAJgHIADgCIgBgOIAAgJIABgKQgEgFgEgCQgGgDgHAAQgLAAgGAGg");
	this.shape_226.setTransform(-83.5,181.5);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("AghA5QgCgDgBgDQABgDACgDQACgCADAAIARgCIABgOIAAgNIgBgNQAAgQACgbIgKAAIgKAAQgDAAgDgCQgCgCAAgEQAAgHAHgBIAYAAQANAAAYADQAHABAAAHQAAAEgDACQgCACgDAAIgNgBIgMgCIgCAqIAAANIABAOIgBANIAYAAQAEAAACACQACACAAAEQAAADgCADQgCACgEAAIgMAAIgOAAIgNACIgQABQgDAAgCgCg");
	this.shape_227.setTransform(-92.5,181.9);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000000").s().p("AgFAGQgDgDAAgDQAAgDADgCQADgDACAAQAEAAACADQADACAAADQAAADgDADQgCADgEAAQgCAAgDgDg");
	this.shape_228.setTransform(270.2,163);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FF0033").s().p("AgZAhQgMgJAAgSQAAgTAJgNQALgPARAAQAMAAAIAEQAKAFAAAMQAAAIgJAGQgDADgNAEIgcAOQAEAGAHADQAGAEAHAAQAFAAAIgCQAJgCADgFQACgEADAAQADAAACACQACACAAADQAAAJgOAGQgMAFgLAAQgQAAgKgJgAgPgUQgGAIgDANIAYgKQAMgHAGgFQgHgGgLAAQgJAAgGAHg");
	this.shape_229.setTransform(264,159.4);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FF0033").s().p("AgVAhQgLgJAAgRQAAgOALgRQALgSANAAQAIgBAJAEQAMAFAAAGQAAAEgCACQgCACgDAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAIgDgDQgFgEgKAAQgGAAgIAPQgHAMAAAIQAAAKAHAGQAHAFAIABQAFgBAFgCIAJgEIADgCQADAAACACQACADAAADQAAAGgMAFQgKAEgHAAQgOAAgLgKg");
	this.shape_230.setTransform(255.4,159.4);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FF0033").s().p("AATAmIgCgRIgCgRIAAgGIABgIQAAgQgGAAQgJAAgGAKQgHAKgEAMIgBAHIAAAJIAAAHIABAGQAAAEgDACQgCACgDAAQgEAAgCgCQgCgCAAgEIAAgGIgBgHIABgWIABgVIAAgIIAAgHQAAgDACgCQADgDADAAQAHAAABALIAAAJQANgSAMAAQAMAAAFALQADAIABANIAAAIIgBAGQAAAHACAKIACARQAAADgCACQgCACgDAAQgIAAAAgHg");
	this.shape_231.setTransform(247.2,159.3);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FF0033").s().p("AgZAhQgMgJAAgSQAAgTAJgNQALgPARAAQAMAAAIAEQAKAFAAAMQAAAIgJAGQgDADgNAEIgcAOQAEAGAHADQAGAEAHAAQAFAAAIgCQAJgCADgFQACgEADAAQADAAACACQACACAAADQAAAJgOAGQgMAFgLAAQgQAAgKgJgAgPgUQgGAIgDANIAYgKQAMgHAGgFQgHgGgLAAQgJAAgGAHg");
	this.shape_232.setTransform(238.6,159.4);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FF0033").s().p("AgEA2QgCgCAAgCIAAgJIAAgJIgBgsIgSgCQgHAAAAgHQAAgDACgDQADgCADAAIARACIgBgLIAAgKQAAgDACgCQACgCAEAAQAEAAACALIAAAHIAAAEIAAAFIALgBIAKABQAFACABAFQAAADgDADQgCACgDAAIgEAAIgEgBIgKACIABAsIAAADIAAAFQAAAQgIAAQgCAAgCgCg");
	this.shape_233.setTransform(230.3,158.1);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FF0033").s().p("AgVArQgMgEAAgIQAAgDADgDQACgCAEAAQACAAAEAEQACACAGABIAJABQAFAAAFgCQAHgCAAgFQAAgLgPgDIgGgCQgLgDgEgDQgGgCAAgJQAAgQAPgHIANgFIAPgFIAHgBQADAAACACQADACAAADIABAHIABAHQAAADgDACQgCADgDAAQgEAAgCgDIgCgJIgSAGQgLAFAAAHIAFABQAQAEAIAFQANAGAAAQQAAANgLAGQgJAFgMAAQgKAAgKgDg");
	this.shape_234.setTransform(222.4,159);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FF0033").s().p("AgHA4QgCgCAAgEIAAgOIAAgOIABgSIAAgQQAAgEACgCQADgCADAAQACAAACACQACACAAAEIgBAQIAAASIAAAOIAAAOQAAAEgCACQgDACgBAAQgDAAgDgCgAgDgqQgEgCAAgEQAAgEAEgDQACgCACAAQADAAADACQADADAAAEQAAAEgDACQgDADgDAAQgCAAgCgDg");
	this.shape_235.setTransform(216.7,157.4);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FF0033").s().p("AAXApIgXgfIgPAPIgOANQgCADgCAAQgDAAgDgDQgCgCAAgDIABgFIAHgHIAIgHIARgPIgLgOQgGgJgFgFQgDgCAAgDQAAgDACgDQADgCADAAQAEAAAJAMIAMASIAQgNQAJgJADgGQADgDADAAQADgBACADQADACAAADQAAAEgHAIIgMAKIgNAOIAZAgQAAABABAAQAAABAAAAQABABAAAAQAAABAAABQAAADgCACQgDACgDABQgDAAgDgEg");
	this.shape_236.setTransform(209.5,159.1);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FF0033").s().p("AghA8QgHgHgBgZIAAgLIABgNIgBgEQAAAAABAAQAAAAAAAAQAAgBAAAAQABgBAAAAIABgiIgBgJIAAgIQAAgJAHAAQAEAAADACIARgEIANgBQATAAAMAEQAGADgBAFQAAAEgCACQgCACgDAAIgDAAQgNgEgNAAIgLACIgRADIABAIIgBAeIAggEIATgBQADAAADACQACACAAAEQAAAGgIAAIgSACIgiADIAAAKIgBAKQAAARACADQACACALAAIAMAAIAPAAIAEAAIAFgBQAJAAAAAIQAAAHgHABQgHABgXAAQgYAAgHgGg");
	this.shape_237.setTransform(200.1,157.4);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("AgdAkIAAg1IAAgIIABgIQAAgIAGAAQAIAAAAANQAOgOARAAQAHAAADAFQADAEAAAKIAAAGQgBAJgHAAQgHAAAAgHIAAgGIAAgGQgMABgGAFQgHAGgEAKIAAApQAAAHgIAAQgHAAAAgHg");
	this.shape_238.setTransform(186.4,159.4);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AgWAhQgLgLAAgSQgBgQAKgNQALgQARAAQAQAAAIAOQAGAMAAAPQAAAQgJAMQgKAOgPAAQgNAAgJgJgAgNgOQgFAIAAAKQAAALAGAGQAFAGAHAAQAHAAAFgGQAHgHAAgLQACgcgSAAQgJAAgHALg");
	this.shape_239.setTransform(178,159.4);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FF0033").s().p("AASAmIgBgRIgBgRIAAgGIAAgIQAAgQgGAAQgJAAgGAKQgHAKgEAMIgBAHIAAAJIAAAHIABAGQAAAEgCACQgDACgDAAQgDAAgDgCQgCgCAAgEIgBgGIAAgHIABgWIABgVIAAgIIAAgHQAAgDACgCQACgDADAAQAIAAAAALIABAJQANgSAMAAQAMAAAFALQAEAIAAANIAAAIIgBAGQAAAHADAKIABARQAAADgCACQgCACgDAAQgIAAgBgHg");
	this.shape_240.setTransform(165.1,159.3);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FF0033").s().p("AgWAhQgLgLAAgSQgBgQAKgNQALgQARAAQAQAAAIAOQAGAMAAAPQAAAQgJAMQgKAOgPAAQgNAAgJgJgAgNgOQgFAIAAAKQAAALAGAGQAFAGAHAAQAHAAAFgGQAHgHAAgLQACgcgSAAQgJAAgHALg");
	this.shape_241.setTransform(156.4,159.4);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#FF0033").s().p("AgHA4QgBgCAAgEIAAgOIgBgOIABgSIABgQQAAgEABgCQADgCADAAQABAAADACQACACAAAEIgBAQIgBASIAAAOIABAOQAAAEgDACQgCACgBAAQgDAAgDgCgAgEgqQgDgCAAgEQAAgEADgDQADgCACAAQAEAAADACQACADAAAEQAAAEgCACQgDADgEAAQgCAAgDgDg");
	this.shape_242.setTransform(150.2,157.4);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FF0033").s().p("AgEA2QgCgCAAgCIAAgJIAAgJIgBgsIgSgCQgGAAgBgHQAAgDADgDQACgCADAAIAQACIAAgLIAAgKQAAgDACgCQADgCADAAQAEAAACALIAAAHIAAAEIAAAFIALgBIAKABQAFACABAFQAAADgDADQgCACgDAAIgEAAIgEgBIgKACIABAsIAAADIAAAFQAAAQgIAAQgBAAgDgCg");
	this.shape_243.setTransform(144,158.1);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FF0033").s().p("AgVAhQgLgJAAgRQAAgOALgRQALgSANAAQAIgBAJAEQAMAFAAAGQAAAEgCACQgCACgDAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQAAAAgBAAIgDgDQgFgEgKAAQgGAAgIAPQgHAMAAAIQAAAKAHAGQAHAFAIABQAFgBAFgCIAJgEIADgCQADAAACACQACADAAADQAAAGgMAFQgKAEgHAAQgOAAgLgKg");
	this.shape_244.setTransform(136.2,159.4);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FF0033").s().p("AAbAoIgFgYIgVADIgTAFIgNAdQgDAFgEAAQgDAAgDgDQgCgCAAgDQAAgEAMgYQgCgDAAgCQAAgGAIgDIAXgkQAQgdAFAAQAGgBACAJIAFAaIAMA0IAEANIACAJQAAADgCACQgCADgEAAQgHgBgFgSgAgJAFIAbgFIgGgdg");
	this.shape_245.setTransform(126.1,157.6);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#000000").s().p("AgdAkIAAg1IAAgIIABgIQAAgIAGAAQAIAAAAANQAOgOARAAQAHAAADAFQADAEAAAKIAAAGQgBAJgHAAQgHAAAAgHIAAgGIAAgGQgMABgGAFQgHAGgEAKIAAApQAAAHgIAAQgHAAAAgHg");
	this.shape_246.setTransform(111.9,159.4);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000000").s().p("AgZAhQgMgJAAgSQAAgTAJgNQALgPARAAQAMAAAIAEQAKAFAAAMQAAAIgJAGQgDADgNAEIgcAOQAEAGAHADQAGAEAHAAQAFAAAIgCQAJgCADgFQACgEADAAQADAAACACQACACAAADQAAAJgOAGQgMAFgLAAQgQAAgKgJgAgPgUQgGAIgDANIAYgKQAMgHAGgFQgHgGgLAAQgJAAgGAHg");
	this.shape_247.setTransform(103.6,159.4);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#000000").s().p("AAVA7QgCgHgCgMIgBgSIAAgHIAAgGQAAgMgHAAQgJAAgHAHQgEAEgHANQAAAegCAGQgCAEgFAAQgDAAgCgCQgDgCAAgEIABgCIABgMIAAgMIAAg3IABgNIgBgHIgBgIQAAgEACgCQADgCADAAQAGABABAGIACAOIgBARIAAARIAAAHQAGgIAIgFQAFgEAIAAQANAAAFAJQADAFABAMIAAAPIACARIADAPIAAADQAAADgCACQgDACgDAAQgGAAgBgFg");
	this.shape_248.setTransform(94.6,157.3);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#000000").s().p("AgDA2QgDgCAAgCIAAgJIAAgJIgBgsIgSgCQgGAAgBgHQABgDACgDQACgCADAAIAQACIAAgLIAAgKQAAgDACgCQADgCADAAQAEAAACALIAAAHIAAAEIAAAFIALgBIAKABQAGACAAAFQgBADgCADQgCACgDAAIgEAAIgEgBIgKACIABAsIAAADIAAAFQAAAQgIAAQgBAAgCgCg");
	this.shape_249.setTransform(86.1,158.1);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#000000").s().p("AgHA4QgBgCgBgEIAAgOIAAgOIABgSIAAgQQAAgEACgCQADgCADAAQACAAACACQACACAAAEIgBAQIAAASIAAAOIAAAOQAAAEgDACQgBACgCAAQgDAAgDgCgAgDgqQgEgCAAgEQAAgEAEgDQACgCACAAQAEAAACACQADADAAAEQAAAEgDACQgCADgEAAQgCAAgCgDg");
	this.shape_250.setTransform(80.2,157.4);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000000").s().p("AgZAhQgMgJAAgSQAAgTAJgNQALgPARAAQAMAAAIAEQAKAFAAAMQAAAIgJAGQgDADgNAEIgcAOQAEAGAHADQAGAEAHAAQAFAAAIgCQAJgCADgFQACgEADAAQADAAACACQACACAAADQAAAJgOAGQgMAFgLAAQgQAAgKgJgAgPgUQgGAIgDANIAYgKQAMgHAGgFQgHgGgLAAQgJAAgGAHg");
	this.shape_251.setTransform(73.6,159.4);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#000000").s().p("AgZAhQgMgJAAgSQAAgTAJgNQALgPARAAQAMAAAIAEQAKAFAAAMQAAAIgJAGQgDADgNAEIgcAOQAEAGAHADQAGAEAHAAQAFAAAIgCQAJgCADgFQACgEADAAQADAAACACQACACAAADQAAAJgOAGQgMAFgLAAQgQAAgKgJgAgPgUQgGAIgDANIAYgKQAMgHAGgFQgHgGgLAAQgJAAgGAHg");
	this.shape_252.setTransform(60,159.4);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#000000").s().p("AgXA6QgCAEgEAAQgDAAgCgCQgCgDAAgDIAAgGIABgGIgBgYIAAgXIAAgWIAAgWQAAgEACgEQACgFAFAAQAGAAAAAHIgBADIAAADIAAASIAAATQAGgEAHgCQAGgDADAAQARAAAKANQAKAKAAASQAAASgLAMQgMANgPAAQgMAAgKgFgAgLgCIgLAFIAAAOIAAAMIAAANIAKAEQAFACAGAAQAJAAAIgIQAHgIAAgMQAAgMgGgIQgGgGgLAAQgEAAgHAEg");
	this.shape_253.setTransform(50.9,157.3);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#000000").s().p("AATAmIgCgRIgBgRIAAgGIAAgIQAAgQgGAAQgJAAgGAKQgHAKgEAMIgBAHIAAAJIAAAHIABAGQAAAEgCACQgDACgDAAQgEAAgCgCQgCgCAAgEIgBgGIAAgHIABgWIABgVIAAgIIAAgHQAAgDACgCQADgDACAAQAIAAABALIAAAJQANgSAMAAQAMAAAFALQAEAIAAANIAAAIIgBAGQAAAHACAKIACARQAAADgCACQgCACgDAAQgIAAAAgHg");
	this.shape_254.setTransform(37.2,159.3);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#000000").s().p("AAZAnIgGgFIgNAGQgFACgCAAQgTAAgIgKQgIgKAAgUQAAgRANgNQANgOAQAAQAHAAAIAEQALAEAAAGIgCAEIgBAKIgBAPQABAKABAGIAFANIABAEIABACQAAADgCACQgCACgDAAQgBAAgEgEgAgMgSQgJAKAAALQAAAMAFAHQAFAGAIAAQAGAAAFgCIAIgGQgDgUAAgJIABgIIACgIIgGgCIgDgBQgKAAgJAKg");
	this.shape_255.setTransform(28.7,159.4);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#000000").s().p("AgVAhQgLgJAAgRQAAgOALgRQALgSANAAQAIgBAJAEQAMAFAAAGQAAAEgCACQgCACgDAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQAAAAgBAAIgDgDQgFgEgKAAQgGAAgIAPQgHAMAAAIQAAAKAHAGQAHAFAIABQAFgBAFgCIAJgEIADgCQADAAACACQACADAAADQAAAGgMAFQgKAEgHAAQgOAAgLgKg");
	this.shape_256.setTransform(20.5,159.4);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#000000").s().p("AgjA7QgDgDAAgDIAAgXIABgeIACggIABgWQAAgDACgCQALgDANAAQAMAAANAJQAOALAAAQQAAAUgPAKQALAFAGAGQAGAGAAAHQAAAKgKAIQgHAHgIADQgQAHgbAAQgDAAgDgEgAgXAeIAAAQQAVAAALgFQAFgCAFgFQAFgEAAgCQAAgEgKgEQgIgEgGgBIgHgCIgDAAIgDAAIgJAAIgBARgAgUgtIAAANIgBAeIAMABQAJgBAIgGQAIgHAAgLQAAgHgIgHQgIgGgIAAIgMABg");
	this.shape_257.setTransform(6.9,157.3);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#000000").s().p("AgnA7QgCgDAAgDIAAgSIgBgTIABgTIACgWIgBgLIAAgMQAAgFACgDQAEgEAEAAIATACQALABAFAEQAgARAAAYQAAAMgLAHQgIAHgOAEQAZANAMAPQACACAAADQAAADgDADQgCACgDAAQgDAAgDgCQgZgagegJIABAQIAAAPQAAADgCADQgCACgEAAQgDAAgDgCgAgYgiIABAKIgBAPIgBAOIADAAIADAAQATAAAJgFQAFgBADgEQAFgEgBgDQAAgLgMgJQgKgJgMgBIgLgBg");
	this.shape_258.setTransform(-3.3,157.4);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#000000").s().p("AghA8QgIgHABgZIAAgLIABgNIgBgEQAAAAAAAAQAAAAAAAAQAAgBAAAAQABgBAAAAIACgiIgBgJIgBgIQAAgJAIAAQADAAACACIASgEIAOgBQASAAAMAEQAFADABAFQgBAEgCACQgCACgEAAIgCAAQgNgEgMAAIgNACIgPADIAAAIIgBAeIAggEIASgBQAEAAACACQACACAAAEQABAGgIAAIgSACIgiADIgBAKIAAAKQAAARADADQACACAKAAIANAAIAOAAIAFAAIAEgBQAIAAAAAIQAAAHgGABQgIABgWAAQgYAAgHgGg");
	this.shape_259.setTransform(-13.3,157.4);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#000000").s().p("AgNA4QgKgXgLgrIgGgVQgFgRABgFQAAgDACgCQACgDADAAQAGAAACAHIADANIAHAbQAIAbAHAVIAAgBIATg3IAHgTQAFgMAEgGQADgDAEAAQADAAACADQACACABADIgCAFQgFAHgDAIIgGARIgVA3QgEAKgEAKQgBAFgFAAQgFAAgDgHg");
	this.shape_260.setTransform(-23.2,157.6);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#000000").s().p("AghA8QgIgHABgZIAAgLIABgNIgBgEQAAAAAAAAQAAAAAAAAQAAgBAAAAQABgBAAAAIACgiIgBgJIgBgIQAAgJAIAAQADAAACACIASgEIAOgBQASAAAMAEQAFADABAFQgBAEgCACQgCACgEAAIgCAAQgNgEgMAAIgNACIgPADIAAAIIgBAeIAggEIASgBQAEAAACACQACACAAAEQABAGgIAAIgSACIgiADIgBAKIAAAKQAAARADADQACACAKAAIANAAIAOAAIAFAAIAEgBQAIAAAAAIQAAAHgGABQgIABgWAAQgYAAgHgGg");
	this.shape_261.setTransform(-38.5,157.4);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#000000").s().p("AgEA5QgDgCAAgEIABgDIAAgEIAAgLIgBgMIgCgdIgCgfIgHAAQgRgBgKgCQgGgCAAgFQAAgEACgDQACgCAEAAIAMACIANAAIAOAAIAMAAIASABIASABQAEAAACACQACACAAAEQAAADgCADQgCACgEAAIgSgBIgRgBIgGAAIACAjIACAhIAAAIIABAJQAAAFgCAEQgCAFgEAAQgCAAgCgCg");
	this.shape_262.setTransform(-48.5,157.4);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#000000").s().p("AAbAoIgFgYIgVADIgTAFIgNAdQgDAFgEAAQgDAAgDgDQgCgCAAgDQAAgEAMgYQgCgDAAgCQAAgGAIgDIAXgkQAQgdAFAAQAGgBACAJIAFAaIAMA0IAEANIACAJQAAADgCACQgCADgEAAQgHgBgFgSgAgJAFIAbgFIgGgdg");
	this.shape_263.setTransform(-60.6,157.6);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#000000").s().p("AgfAvQgLgMAAgQQAAgYAWgdQASgXASAAIAHABIAFABQACgEAFAAQAGAAABAHQABAHAAAJQAAADgBACQgDAEgEAAQgEgBgDgGQgCgEgCgCQgCgBgGAAQgMAAgMASQgSAXgBATQABAKAGAHQAHAIAJAAQAGAAAIgFQAFgBAJgIQAFgDACAAQADAAACADQADADAAADQAAADgDADQgUASgUAAQgQAAgLgNg");
	this.shape_264.setTransform(-71,157.4);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#000000").s().p("AghA5QgCgDgBgDQABgDACgDQACgCADAAIARgCIABgOIAAgNIgBgNQAAgQACgbIgKAAIgKAAQgDAAgDgCQgCgCAAgEQAAgHAHgBIAYAAQANAAAYADQAHABAAAHQAAAEgDACQgCACgDAAIgNgBIgMgCIgCAqIAAANIABAOIgBANIAYAAQAEAAACACQACACAAAEQAAADgCADQgCACgEAAIgMAAIgOAAIgNACIgQABQgDAAgCgCg");
	this.shape_265.setTransform(-80.3,157.6);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#000000").s().p("AgXA/QgJgDgFgDIAAAAQgDAAgDgCQgCgCAAgEIAAgZIABgYIAAgZIgBgcQABgDADgDQADgEADAAIANAFIAOAHQAUAHAPAQQATASAAAVQAAANgGANQgGAMgLAHQgMAIgVAAIgNgBgAgcgUIAAAVIgBAqIABABQAIAEAKAAQAPAAAJgFQAHgFAFgJQAEgIAAgKQAAgUgYgPQgGgGgcgMg");
	this.shape_266.setTransform(-90.2,157.6);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#000000").s().p("AghA8QgIgHABgZIAAgLIABgNIgBgEQAAAAAAAAQAAAAAAAAQAAgBAAAAQABgBAAAAIACgiIgBgJIgBgIQAAgJAIAAQADAAACACIASgEIAOgBQASAAAMAEQAFADABAFQgBAEgCACQgCACgEAAIgCAAQgNgEgMAAIgNACIgPADIAAAIIgBAeIAggEIASgBQAEAAACACQACACAAAEQABAGgIAAIgSACIgiADIgBAKIAAAKQAAARADADQACACAKAAIANAAIAOAAIAFAAIAEgBQAIAAAAAIQAAAHgGABQgIABgWAAQgYAAgHgGg");
	this.shape_267.setTransform(-101,157.4);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#000000").s().p("AgmA7QgDgDAAgDIAAgSIgBgTIABgTIADgWIgCgLIAAgMQAAgFADgDQACgEAGAAIATACQAKABAGAEQAfARAAAYQAAAMgLAHQgIAHgNAEQAYANAMAPQACACAAADQAAADgCADQgDACgDAAQgDAAgDgCQgZgagegJIAAAQIABAPQAAADgCADQgDACgDAAQgDAAgCgCgAgYgiIABAKIgBAPIgCAOIAEAAIADAAQATAAAJgFQAEgBAEgEQAFgEgBgDQAAgLgMgJQgJgJgNgBIgMgBg");
	this.shape_268.setTransform(-111.1,157.4);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#000000").s().p("AggA8QgCgDAAgDIAAgXIABgfIACgfIAAgLIABgLQACgHAGABIAHgCIALAAQANAAAMAKQAOALAAAPQAAATgPAKQgNAKgQAAIgKgBIgBApQAAADgCADQgCACgDAAQgDAAgCgCgAgQgfIgCAfIAJAAQALAAAJgGQAJgHAAgMQAAgJgJgGQgJgGgIAAIgGAAIgEAAg");
	this.shape_269.setTransform(-120.4,157.2);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#000000").s().p("AAbAoIgFgYIgVADIgTAFIgNAdQgDAFgEAAQgDAAgDgDQgCgCAAgDQAAgEAMgYQgCgDAAgCQAAgGAIgDIAXgkQAQgdAFAAQAGgBACAJIAFAaIAMA0IAEANIACAJQAAADgCACQgCADgEAAQgHgBgFgSgAgJAFIAbgFIgGgdg");
	this.shape_270.setTransform(-135.5,157.6);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f().s("#000000").ss(3,1,1).p("AJr1QQBzABByABIUBAIIgbAAQgJAAgKAAQolgColgCMgwpAADIAAAOEghQgUkMAAAAp1MBCaAAAMAAAgqX");
	this.shape_271.setTransform(65.5,267);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#66CCFF").s().p("Egg/AFiIAArDMBB/AAAIAALDg");
	this.shape_272.setTransform(64.9,168.3);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#00CCFF").s().p("EghMAVOMAAAgp1IAAgMIAAgJIAAgOMAwpgADIRKAEIATAAIAUAAMAAAAqXgEghBgJ6MBB/AAAIAArFMhB/AAAg");
	this.shape_273.setTransform(65.1,267.3);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#0000FF").s().p("AACgCIgEgOIAFAAIAAAJIAAALIgBANg");
	this.shape_274.setTransform(-147.8,134.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186}]}).wait(99));

	// btn
	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#214DF8").s().p("AgvA3QgLgXAAgiQgBggAQgXQARgbAcAAQAcAAAQAYQANAVAAAeQABAugPAYQgQAYgdAAQggAAgPgegAgcgrQgKARAAAWQAAAhAKASQAJARATAAQAVAAAKgaQAHgRAAgaQAAgdgJgPQgJgOgSAAQgSgBgMAVg");
	this.shape_275.setTransform(-26.5,415.5);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#214DF8").s().p("AACBTIgTAAIgKgBQgGgCAAgGQAAgLARAAIAFAAIAEABIAAgQIgBgPQgBgNADgaQACgcAAgOQgOALgEAAQgFAAgDgDQgDgDAAgEQAAgFAJgIIARgNQAIgJAIAAQAHAAAAAIIAAAHIgBAIIABALIAAAKQAAAMgDAZQgCAWgBAMIABAPIABAPIAMAAQAEAAADADQADADAAAEQAAAFgDACQgDADgEAAg");
	this.shape_276.setTransform(-37.9,415.2);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#214DF8").s().p("AgrBZQgDgDAAgDIABgEQAIgXAXgsQAVgpAJgXQAOgnAHABQAEAAADACQADADAAAEIgBAFIgMAeQgHAUgOAaIgVArIgUArQgCAGgGAAQgEAAgDgDg");
	this.shape_277.setTransform(-48.6,415.3);

	this.score = new cjs.Text("0", "22px 'Comic Sans MS'", "#214DF8");
	this.score.name = "score";
	this.score.textAlign = "center";
	this.score.lineHeight = 33;
	this.score.lineWidth = 44;
	this.score.setTransform(-71.5,406.9);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#214DF8").s().p("AgFAyQgDgDAAgFIAAgFIgBgGQgBgFAEgDQADgDADAAQAMAAAAAWQAAAFgDADQgEAEgEAAQgDAAgDgEgAgHgaQgDgDAAgFIAAgEIgBgEQAAgFADgDQAEgDAEAAQAKAAAAATQAAAFgDADQgDADgEAAQgDAAgEgDg");
	this.shape_278.setTransform(-87.7,416.9);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#214DF8").s().p("AgkAuQgQgNAAgZQAAgZANgTQAPgVAYAAQARAAALAGQANAHAAAQQABALgMAIQgGAEgRAGIgnAUQAFAJAKAEQAJAFAKAAQAHAAAKgDQAMgEAFgFQADgGAEAAQAEAAADADQADADAAADQAAAMgUAJQgQAHgPAAQgWAAgQgMgAgVgbQgJAKgEASIAhgOQASgJAHgHQgIgJgQAAQgNAAgIALg");
	this.shape_279.setTransform(-96.7,418.2);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#214DF8").s().p("AgoAxIAAhJIAAgLIAAgLQAAgLAKAAQAKAAAAASQAUgUAYAAQAJABAEAGQAEAHAAAMIAAAIQAAANgKAAQgKAAAAgKIAAgIIAAgJQgRACgJAIQgJAHgGAOIAAA5QAAALgLgBQgJABAAgLg");
	this.shape_280.setTransform(-107.9,418.3);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#214DF8").s().p("AgfAtQgPgPAAgZQgBgWANgTQAPgVAZAAQAVAAALATQAJAQAAAWQAAAXgNAQQgNAUgVAAQgSAAgNgOgAgSgUQgHAMAAANQAAAQAIAJQAHAGAKAAQAKAAAHgHQAJgKABgPQABgogYAAQgNABgJAPg");
	this.shape_281.setTransform(-119.4,418.4);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#214DF8").s().p("AgeAuQgPgOAAgXQAAgTAPgYQAQgZASAAQAKAAANAFQARAGAAAJQAAAFgDADQgDADgEAAQgDgBgCgBIgEgEQgHgFgOAAQgJAAgLAUQgKARAAALQAAAPAKAIQAJAIAMAAQAHAAAHgEIAMgGIAFgCQAEAAADADQADADAAAEQAAAIgRAHQgOAHgKAAQgUAAgPgOg");
	this.shape_282.setTransform(-130.6,418.3);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#214DF8").s().p("AgqBKQgUgJAAgQQAAgFADgDQADgDAEAAQAGAAAEAGQAFAIAFADQAJAGARAAQAPAAAOgHQASgJAAgQQAAgOgPgIQgNgHgRAAQgRAAgMgGQgPgIAAgQQAAgUAVgPQAVgPAUAAQALAAANADQARAFAAAHQAAAJgKAAIgPgCQgKgCgGAAQgPAAgMAIQgMAJAAALQAAAJAQAEQAGABAPABQAZACANAOQANAKAAASQAAAagXAPQgVANgZAAQgUAAgQgHg");
	this.shape_283.setTransform(-143.8,416);

	this.btn_next = new lib.goNext();
	this.btn_next.setTransform(266.8,441.5);
	new cjs.ButtonHelper(this.btn_next, 0, 1, 2, false, new lib.goNext(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_next},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.score},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275}]}).wait(99));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-171.5,105,486.7,383.2);


// stage content:
(lib.compSen_Quiz = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{quiz1:0});

	// timeline functions:
	this.frame_0 = function() {
		//this.btn_menu.addEventListener("click", goMenu.bind(this));
		
		/*
		function goMenu(){
		
			window.open ("chapter2 main menu","_self");
		 
		}
		*/
		playSound("RockGroove");
		playSound("RockGroove",-1);
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Quiz2
	this.instance = new lib.practicequiz2();
	this.instance.setTransform(486,53.3,1,1,0,0,0,276.8,145.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Main
	this.btn_menu = new lib.skiptomenu();
	this.btn_menu.setTransform(516.9,20.4);
	new cjs.ButtonHelper(this.btn_menu, 0, 1, 2, false, new lib.skiptomenu(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_menu).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(312.7,201.9,511.4,394.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;