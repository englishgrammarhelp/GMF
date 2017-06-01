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
	this.shape.graphics.f("rgba(163,239,242,0)").s().p("AtuCqIAAlTIbdAAIAAFTg");
	this.shape.setTransform(79.3,17);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D5EFFA").s().p("AtvCqIAAlTIbfAAIAAFTg");
	this.shape_1.setTransform(88,17);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AtvCqIAAlTIbfAAIAAFTg");
	this.shape_2.setTransform(88,17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.7,0,176,34);


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
	this.initialize(mode,startPosition,loop,{firstSet:0,secondSet:10,thirdSet:19,fourthset:29});

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
		this.btn_next.addEventListener("click", goNext.bind(this));
		
		function goNext(){
		
			window.open ("aux_finish.html","_self");
		 
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(9).call(this.frame_18).wait(10).call(this.frame_28).wait(10).call(this.frame_38).wait(1));

	// Layer 15
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOARIAAgiIAdAAIAAAig");
	this.shape.setTransform(177,256.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKBiIAAjDIAVAAIAADDg");
	this.shape_1.setTransform(168.8,248.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgtA7QgNgOAAgaIAAhaIAYAAIAABPIABASQABAIADAFQAEAFAFADQAGADAKgBQAHABALgFQALgFAKgIIAAhnIAYAAIAACLIgYAAIAAgPQgMAKgLAEQgLAGgMAAQgWAAgMgOg");
	this.shape_2.setTransform(156.9,251.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgcBjIAAh4IgQAAIAAgUIAQAAIAAgEQAAgaANgNQAMgOAWAAIAOABIAMACIAAAVIgBAAIgLgCIgLgBQgPAAgHAHQgFAGAAATIAAAEIApAAIAAAUIgoAAIAAB4g");
	this.shape_3.setTransform(145,248.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgrA3QgUgTAAgjQAAgiATgUQATgUAdAAQAdAAAPAQQAQASAAAeIAAALIhnAAQAAANAEAKQAEAJAHAHQAHAGAJADQAIADAKAAQAOAAAPgFQAPgHAGgFIABAAIAAAaQgMAFgMADQgNAEgOAAQghAAgUgTgAgagqQgLALgCARIBQAAQAAgTgKgLQgJgJgTgBQgRAAgMAMg");
	this.shape_4.setTransform(131.9,251.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPBFQgMgFgKgIQgJgKgFgOQgFgOAAgSQAAghATgUQATgUAeAAQALABAMADQAMADAKAFIAAAaIgCAAQgKgIgMgFQgLgEgMAAQgSAAgLAOQgMAOAAAYQgBAaAMAOQAMANASAAQAIAAAHgCIAOgFIAKgGIAGgFIACAAIAAAaQgMAHgLACQgLAEgLAAQgOAAgNgFg");
	this.shape_5.setTransform(117.7,251.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgtA9QgOgNAAgTQAAgQAHgKQAHgIANgGQANgFASgCIAlgEIAAgEQAAgIgDgFQgDgFgFgDQgFgDgHgBIgNgBQgJAAgMACQgLADgNAEIgBAAIAAgYIAUgEQANgCANAAQANAAALACQALACAJAHQAIAFAEAKQAEAJAAAOIAABeIgYAAIAAgPIgIAGIgLAGQgGADgIACQgFACgLAAQgTAAgNgNgAALAAIgWABQgKADgHAGQgGAHAAAKQAAAMAHAGQAIAHAPAAQAKgBALgEQAKgFAJgHIAAglIgZACg");
	this.shape_6.setTransform(102.3,251.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgrBGIAAiLIAYAAIAAAVQAOgMAJgFQALgEALAAIAJAAIAJABIAAAYIgCAAIgKgBIgMgBQgLAAgJAGQgJAEgKAIIAABig");
	this.shape_7.setTransform(91.1,251.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgZBhQgLgBgKgDIAAgYIABAAIATAGQAMADAOAAQAKgBAHgCQAJgDAEgFQAEgFACgHQACgHAAgJIAAgNQgKAJgLAEQgKAEgNAAQgZAAgPgSQgPgTAAgfQAAgSAGgNQAFgOAIgJQAJgJAMgFQALgFAKAAQAMAAAIACQAJADAJAFIACgGIAWAAIAAB8QAAAjgRARQgPARghAAQgLAAgLgCgAgZg/QgLANAAAZQAAAYAIAKQAJANATAAQAIAAALgFQALgDAIgIIAAhLIgSgGQgIgCgIAAQgRAAgMAOg");
	this.shape_8.setTransform(75.7,253.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AggBGQgNgEgJgEIAAgbIABAAQALAIAOAGQAOAEANAAQANAAAJgFQAKgFgBgLQAAgIgEgEQgFgFgOgDIgLgCIgPgEQgTgFgIgHQgHgKAAgOQAAgIAEgIQADgIAHgGQAHgGALgDQALgEAMAAQAMAAAOADQANADAIAFIAAAZIgBAAQgJgHgNgEQgNgFgNAAQgLAAgJAFQgJAFAAAKQAAAJAGAEQAFAFAMADIAMADIAOACQARAEAJAHQAJAKAAAPQAAAUgQAMQgRANgZAAQgQAAgNgEg");
	this.shape_9.setTransform(52.4,251.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgKBfIAAiMIAVAAIAACMgAgMhFIAAgZIAZAAIAAAZg");
	this.shape_10.setTransform(41.9,248.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgrA3QgUgTAAgjQAAgiATgUQATgUAdAAQAdAAAPAQQAQASAAAeIAAALIhnAAQAAANAEAKQAEAJAHAHQAHAGAJADQAIADAKAAQAOAAAPgFQAPgHAGgFIABAAIAAAaQgMAFgMADQgNAEgOAAQghAAgUgTgAgagqQgLALgCARIBQAAQAAgTgKgLQgJgJgTgBQgRAAgMAMg");
	this.shape_11.setTransform(21.4,251.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgPBFQgNgFgIgIQgKgKgFgOQgFgOAAgSQAAghATgUQATgUAdAAQAMABANADQALADAKAFIAAAaIgCAAQgLgIgLgFQgMgEgLAAQgSAAgLAOQgNAOAAAYQAAAaAMAOQAMANASAAQAIAAAHgCIANgFIAKgGIAHgFIACAAIAAAaQgMAHgKACQgMAEgMAAQgNAAgNgFg");
	this.shape_12.setTransform(7.2,251.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgtA9QgOgNAAgTQAAgQAHgKQAHgIANgGQANgFASgCIAlgEIAAgEQAAgIgDgFQgDgFgFgDQgFgDgHgBIgNgBQgJAAgMACQgLADgNAEIgBAAIAAgYIAUgEQANgCANAAQANAAALACQALACAJAHQAIAFAEAKQAEAJAAAOIAABeIgYAAIAAgPIgIAGIgLAGQgGADgIACQgFACgLAAQgTAAgNgNgAALAAIgWABQgKADgHAGQgGAHAAAKQAAAMAHAGQAIAHAPAAQAKgBALgEQAKgFAJgHIAAglIgZACg");
	this.shape_13.setTransform(-8.2,251.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgQBQQgLgLAAgaIAAhJIgQAAIAAgVIAQAAIAAgoIAYAAIAAAoIAvAAIAAAVIgvAAIAAA+IABASQAAAGACAFQACAFAEADQAFACALAAQAGAAAFgCIAKgCIABAAIAAAVIgOADIgPABQgUAAgLgMg");
	this.shape_14.setTransform(-20.5,249.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgmBeQgQgEgRgHIAAggIACAAQAOAMASAGQATAGAQABQAWAAANgJQANgJAAgPQAAgMgGgGQgGgGgNgDIgUgEIgWgFQgZgFgMgLQgMgNAAgVQgBgXAVgPQAUgPAegBQASABARAEQARADANAGIAAAdIgCAAQgLgIgRgGQgSgHgRAAQgUAAgMAJQgMAIAAANQAAAMAGAGQAGAIAQADIAUAFIAaAEQAVAGALAJQAKAMABAUQgBALgFALQgFALgJAHQgLAIgNAFQgNAFgSgBQgUAAgQgDg");
	this.shape_15.setTransform(-34.5,248.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AglBhIAag8Ig5iFIAaAAIAqBoIAshoIAZAAIhRDBg");
	this.shape_16.setTransform(210.9,253.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgtA9QgOgNAAgTQAAgQAHgKQAHgIANgGQANgFASgCIAlgEIAAgEQAAgIgDgFQgDgFgFgDQgFgDgHgBIgNgBQgJAAgMACQgLADgNAEIgBAAIAAgYIAUgEQANgCANAAQANAAALACQALACAJAHQAIAFAEAKQAEAJAAAOIAABeIgYAAIAAgPIgIAGQgGAEgFACQgGADgIACQgFACgLAAQgTAAgNgNgAALAAIgWABQgKADgHAGQgGAHAAAKQAAAMAHAGQAIAHAPAAQAKgBALgEQAKgFAJgHIAAglIgZACg");
	this.shape_17.setTransform(195.2,251.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AguBRQgPgUAAgjQAAgSAFgMQAGgOAJgKQAIgJALgFQAMgFAKAAQAMAAAIACQAJACAJAFIAAg9IAYAAIAADDIgYAAIAAgPQgKAJgLAFQgLAFgLAAQgaAAgPgTgAgZgMQgLAMAAAaQAAAZAIANQAJANATAAQAJAAAKgEQAKgFAJgHIAAhPIgRgGQgIgCgJAAQgSAAgLAOg");
	this.shape_18.setTransform(179.3,248.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AglBhIAag8Ig5iFIAaAAIAqBoIAshoIAZAAIhRDBg");
	this.shape_19.setTransform(154.8,253.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgLBGIg5iLIAaAAIAqBuIAshuIAZAAIg6CLg");
	this.shape_20.setTransform(113,251.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AggBGQgNgEgJgEIAAgbIABAAQAMAIANAGQAOAEANAAQANAAAKgFQAIgFABgLQAAgIgGgEQgEgFgOgDIgLgCIgPgEQgTgFgIgHQgHgKgBgOQAAgIAFgIQADgIAHgGQAIgGALgDQALgEALAAQAMAAANADQAOADAIAFIAAAZIgBAAQgJgHgOgEQgNgFgMAAQgLAAgJAFQgJAFAAAKQAAAJAGAEQAFAFALADIANADIAOACQARAEAJAHQAJAKAAAPQAAAUgQAMQgRANgZAAQgQAAgNgEg");
	this.shape_21.setTransform(74.1,251.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("AgrA3QgUgTAAgjQAAgiATgUQATgUAdAAQAdAAAPAQQAQASAAAeIAAALIhnAAQAAANAEAKQAEAJAHAHQAHAGAJADQAIADAKAAQAOAAAPgFQAPgHAGgFIABAAIAAAaQgMAFgMADQgNAEgOAAQghAAgUgTgAgagqQgLALgCARIBQAAQAAgTgKgLQgJgJgTgBQgRAAgMAMg");
	this.shape_22.setTransform(59.4,251.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("AgPBFQgMgFgKgIQgJgKgFgOQgFgOAAgSQAAghATgUQATgUAeAAQALABAMADQAMADAKAFIAAAaIgCAAQgKgIgMgFQgLgEgMAAQgSAAgLAOQgMAOAAAYQgBAaAMAOQAMANASAAQAIAAAHgCIAOgFIAKgGIAGgFIACAAIAAAaQgMAHgLACQgLAEgLAAQgOAAgNgFg");
	this.shape_23.setTransform(45.2,251.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF0000").s().p("AAjBIIAAhOIgBgTQgBgIgDgFQgEgGgGgCQgFgDgKAAQgIAAgKAFQgLAFgKAHIAABoIgYAAIAAiMIAYAAIAAAQQALgJAMgFQALgFAMAAQAXAAAMANQAMAOAAAaIAABag");
	this.shape_24.setTransform(29.9,250.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF0000").s().p("AgtA9QgOgNAAgTQAAgQAHgKQAHgIANgGQANgFASgCIAlgEIAAgEQAAgIgDgFQgDgFgFgDQgFgDgHgBIgNgBQgJAAgMACQgLADgNAEIgBAAIAAgYIAUgEQANgCANAAQANAAALACQALACAJAHQAIAFAEAKQAEAJAAAOIAABeIgYAAIAAgPIgIAGQgGAEgFACQgGADgIACQgFACgLAAQgTAAgNgNgAALAAIgWABQgKADgHAGQgGAHAAAKQAAAMAHAGQAIAHAPAAQAKgBALgEQAKgFAJgHIAAglIgZACg");
	this.shape_25.setTransform(13.4,251.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF0000").s().p("AguBRQgPgUAAgjQAAgSAFgMQAGgOAJgKQAIgJALgFQAMgFAKAAQAMAAAIACQAJACAJAFIAAg9IAYAAIAADDIgYAAIAAgPQgKAJgLAFQgLAFgLAAQgaAAgPgTgAgZgMQgLAMAAAaQAAAZAIANQAJANATAAQAJAAAKgEQAKgFAJgHIAAhPIgRgGQgIgCgJAAQgSAAgLAOg");
	this.shape_26.setTransform(-2.5,248.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgrA3QgUgTAAgjQAAgiATgUQATgUAdAAQAdAAAPAQQAQASAAAeIAAALIhnAAQAAANAEAKQAEAJAHAHQAHAGAJADQAIADAKAAQAOAAAPgFQAPgHAGgFIABAAIAAAaQgMAFgMADQgNAEgOAAQghAAgUgTgAgagqQgLALgCARIBQAAQAAgTgKgLQgJgJgTgBQgRAAgMAMg");
	this.shape_27.setTransform(-27,251.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgPBFQgNgFgJgIQgJgKgFgOQgFgOAAgSQAAghATgUQATgUAdAAQANABAMADQALADAKAFIAAAaIgBAAQgLgIgMgFQgLgEgLAAQgTAAgMAOQgMAOAAAYQAAAaAMAOQALANAUAAQAGAAAIgCIANgFIAKgGIAIgFIABAAIAAAaQgMAHgKACQgLAEgNAAQgNAAgNgFg");
	this.shape_28.setTransform(-41.2,251.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgtA9QgOgNAAgTQAAgQAHgKQAHgIANgGQANgFASgCIAlgEIAAgEQAAgIgDgFQgDgFgFgDQgFgDgHgBIgNgBQgJAAgMACQgLADgNAEIgBAAIAAgYIAUgEQANgCANAAQANAAALACQALACAJAHQAIAFAEAKQAEAJAAAOIAABeIgYAAIAAgPIgIAGQgGAEgFACQgGADgIACQgFACgLAAQgTAAgNgNgAALAAIgWABQgKADgHAGQgGAHAAAKQAAAMAHAGQAIAHAPAAQAKgBALgEQAKgFAJgHIAAglIgZACg");
	this.shape_29.setTransform(-56.6,251.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgQBQQgLgLAAgaIAAhJIgQAAIAAgVIAQAAIAAgoIAYAAIAAAoIAvAAIAAAVIgvAAIAAA+IAAASQABAGACAFQACAFAFADQAFACAJAAQAGAAAHgCIAJgCIABAAIAAAVIgPADIgNABQgUAAgMgMg");
	this.shape_30.setTransform(-68.9,249.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgmBeQgRgEgRgHIAAggIACAAQAOAMATAGQATAGAQABQAWAAANgJQANgJAAgPQAAgMgGgGQgGgGgNgDIgVgEIgVgFQgZgFgMgLQgNgNAAgVQAAgXAVgPQAUgPAegBQATABAQAEQARADANAGIAAAdIgCAAQgLgIgSgGQgRgHgRAAQgTAAgNAJQgMAIAAANQAAAMAGAGQAGAIAPADIAWAFIAZAEQAVAGAKAJQALAMAAAUQABALgGALQgFALgKAHQgKAIgNAFQgOAFgRgBQgUAAgQgDg");
	this.shape_31.setTransform(-82.9,248.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgOASIAAgiIAdAAIAAAig");
	this.shape_32.setTransform(135.7,271);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgrA3QgUgUAAgiQAAghATgVQATgUAdAAQAdAAAPAQQAQARAAAfIAAALIhnAAQAAANAEAKQAEAJAHAHQAHAGAJADQAIADAKAAQAOAAAPgGQAPgFAGgGIABAAIAAAaQgMAFgMAEQgNADgOAAQghAAgUgTgAgagqQgLALgCARIBQAAQAAgTgKgKQgJgKgTAAQgRAAgMALg");
	this.shape_33.setTransform(123.3,265.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgPBFQgNgEgJgJQgJgKgFgOQgFgNAAgTQAAghATgUQATgTAegBQAMAAAMAEQALADAKAFIAAAbIgBAAQgLgJgMgFQgLgEgLAAQgTAAgMAOQgMANABAZQAAAZALAOQALAOAUAAQAGAAAIgCIANgFIAKgGIAIgEIABAAIAAAaQgMAFgKAEQgLADgMAAQgOgBgNgEg");
	this.shape_34.setTransform(109.1,265.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAjBIIAAhOIgBgTQgBgIgDgFQgEgGgGgCQgFgDgKAAQgIAAgKAFQgLAFgKAHIAABoIgYAAIAAiMIAYAAIAAAQQALgJAMgFQALgFAMAAQAXAAAMANQAMAOAAAaIAABag");
	this.shape_35.setTransform(93.8,265.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgtA9QgOgNAAgTQAAgQAHgKQAHgIANgGQANgFASgDIAlgCIAAgFQAAgHgDgGQgDgFgFgDQgFgDgHgBIgNgBQgJAAgMADQgLACgNAEIgBAAIAAgYIAUgEQANgCANAAQANAAALACQALADAJAFQAIAHAEAJQAEAJAAAOIAABeIgYAAIAAgPIgIAGIgLAGQgGADgIACQgFACgLAAQgTAAgNgNgAALAAIgWABQgKADgHAGQgGAHAAAKQAAANAHAFQAIAHAPgBQAKAAALgEQAKgFAJgHIAAglIgZACg");
	this.shape_36.setTransform(77.2,265.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AguBRQgPgUAAgjQAAgSAGgMQAFgOAIgKQAJgJAMgFQALgFAKAAQAMAAAIACQAJACAJAFIAAg9IAYAAIAADDIgYAAIAAgPQgKAJgLAFQgMAFgLAAQgZAAgPgTgAgZgMQgLAMAAAaQAAAZAJANQAIANATAAQAIAAAKgEQALgFAJgHIAAhPIgRgGQgIgCgJAAQgSAAgLAOg");
	this.shape_37.setTransform(61.3,263.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AggBGQgNgEgJgEIAAgbIABAAQALAIAOAGQAOAEANAAQANAAAJgFQAKgFgBgLQAAgIgEgEQgFgFgOgDIgLgCIgPgEQgTgFgIgHQgHgKAAgOQAAgIADgIQAEgIAHgGQAHgGALgDQALgEAMAAQAMAAAOADQANADAIAFIAAAZIgBAAQgJgHgNgEQgNgFgNAAQgLAAgJAFQgJAFAAAKQAAAJAGAEQAFAFAMADIAMADIAOACQARAEAJAHQAJAKAAAPQAAAUgQAMQgRANgZAAQgQAAgNgEg");
	this.shape_38.setTransform(38,265.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgrA3QgUgUAAgiQAAghATgVQATgUAdAAQAdAAAPAQQAQARAAAfIAAALIhnAAQAAANAEAKQAEAJAHAHQAHAGAJADQAIADAKAAQAOAAAPgGQAPgFAGgGIABAAIAAAaQgMAFgMAEQgNADgOAAQghAAgUgTgAgagqQgLALgCARIBQAAQAAgTgKgKQgJgKgTAAQgRAAgMALg");
	this.shape_39.setTransform(23.3,265.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgLBHIg5iMIAaAAIAqBuIAshuIAZAAIg6CMg");
	this.shape_40.setTransform(8,265.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgvA2QgRgUAAgiQAAghARgUQASgUAdAAQAeAAARAUQASAUAAAhQAAAigSAUQgRAUgeAAQgdAAgSgUgAgdgnQgLANABAaQgBAaALAOQALAOASAAQATAAALgOQAKgOAAgaQAAgagKgNQgLgOgTAAQgSAAgLAOg");
	this.shape_41.setTransform(-7.3,265.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AguBRQgPgUAAgjQAAgSAGgMQAEgOAKgKQAIgJAMgFQALgFAKAAQALAAAJACQAIACAKAFIAAg9IAYAAIAADDIgYAAIAAgPQgKAJgMAFQgLAFgKAAQgaAAgPgTgAgZgMQgLAMAAAaQAAAZAIANQAJANATAAQAIAAAKgEQALgFAJgHIAAhPIgRgGQgHgCgKAAQgSAAgLAOg");
	this.shape_42.setTransform(203.7,229.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAjBIIAAhOIgBgTQgBgIgDgFQgEgGgGgCQgFgDgKAAQgIAAgKAFQgLAFgKAHIAABoIgYAAIAAiMIAYAAIAAAQQALgJAMgFQALgFAMAAQAXAAAMANQAMAOAAAaIAABag");
	this.shape_43.setTransform(187.9,231.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgtA9QgOgNAAgTQAAgRAHgJQAHgIANgGQANgFASgCIAlgEIAAgDQAAgJgDgFQgDgFgFgDQgFgDgHgBIgNgBQgJAAgMACQgLADgNAEIgBAAIAAgYIAUgEQANgCANAAQANAAALADQALABAJAHQAIAFAEAKQAEAJAAAOIAABeIgYAAIAAgPIgIAGIgLAGQgGADgIACQgFACgLAAQgTAAgNgNgAALAAIgWABQgKADgHAGQgGAHAAAKQAAANAHAFQAIAGAPABQAKAAALgFQAKgFAJgHIAAgmIgZADg");
	this.shape_44.setTransform(171.4,232.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgPBQQgMgLAAgaIAAhJIgQAAIAAgVIAQAAIAAgoIAYAAIAAAoIAvAAIAAAVIgvAAIAAA+IAAASQABAGACAFQABAFAFADQAGACAJAAQAGAAAGgCIAKgCIABAAIAAAVIgOADIgPABQgUAAgKgMg");
	this.shape_45.setTransform(149.9,230.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AggBGQgNgEgJgEIAAgbIABAAQAMAIAOAGQANAEANAAQAOAAAIgFQAJgFAAgLQAAgIgEgEQgFgFgOgDIgLgCIgPgEQgTgFgHgHQgJgKABgOQAAgIADgIQAEgIAHgGQAIgGAKgDQAMgEALAAQANAAAMADQANADAJAFIAAAZIgBAAQgJgHgNgEQgOgFgMAAQgLAAgJAFQgJAFAAAKQAAAJAFAEQAGAFALADIAOADIANACQARAEAJAHQAJAKAAAPQAAAUgQAMQgQANgaAAQgQAAgNgEg");
	this.shape_46.setTransform(138.1,232.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgtA9QgOgNAAgTQAAgRAHgJQAHgIANgGQANgFASgCIAlgEIAAgDQAAgJgDgFQgDgFgFgDQgFgDgHgBIgNgBQgJAAgMACQgLADgNAEIgBAAIAAgYIAUgEQANgCANAAQANAAALADQALABAJAHQAIAFAEAKQAEAJAAAOIAABeIgYAAIAAgPIgIAGQgGAEgFACQgGADgIACQgFACgLAAQgTAAgNgNgAALAAIgWABQgKADgHAGQgGAHAAAKQAAANAHAFQAIAGAPABQAKAAALgFQAKgFAJgHIAAgmIgZADg");
	this.shape_47.setTransform(122.8,232.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAjBIIAAhOIgBgTQgBgIgDgFQgEgGgGgCQgFgDgKAAQgIAAgKAFQgLAFgKAHIAABoIgYAAIAAiMIAYAAIAAAQQALgJAMgFQALgFAMAAQAXAAAMANQAMAOAAAaIAABag");
	this.shape_48.setTransform(107.3,231.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("ABPBIIAAhOIgBgSQgBgJgCgFQgDgFgFgDQgGgDgLAAQgKAAgKAFQgJAFgKAIIAAAHIABAHIAABZIgXAAIAAhOIAAgSQgBgJgDgFQgCgFgGgDQgGgDgKAAQgJAAgKAFQgLAFgJAHIAABoIgYAAIAAiMIAYAAIAAAQQALgJALgFQALgFANAAQAOAAALAGQAHAGAFAKQAPgMAMgFQAMgFAOAAQAWAAAMAOQALAOAAAZIAABag");
	this.shape_49.setTransform(86.5,231.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgYBhQgLgBgLgDIAAgYIACAAIASAFQANAEANAAQAJgBAJgCQAHgDAFgFQAEgFACgHQACgHAAgJIAAgNQgKAJgKAEQgLAEgNAAQgZABgPgTQgPgSAAggQAAgSAFgNQAGgOAJgJQAIgJALgFQAMgFAKAAQAMAAAIACQAJACAJAGIABgHIAXAAIAAB8QAAAlgQAQQgRARggAAQgLAAgKgCgAgZg/QgLANAAAZQAAAXAIALQAJANATAAQAJgBAKgEQAKgEAJgGIAAhMIgSgGQgIgCgIAAQgSAAgLAOg");
	this.shape_50.setTransform(49.8,234.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgtA9QgOgNAAgTQAAgRAHgJQAHgIANgGQANgFASgCIAlgEIAAgDQAAgJgDgFQgDgFgFgDQgFgDgHgBIgNgBQgJAAgMACQgLADgNAEIgBAAIAAgYIAUgEQANgCANAAQANAAALADQALABAJAHQAIAFAEAKQAEAJAAAOIAABeIgYAAIAAgPIgIAGQgGAEgFACQgGADgIACQgFACgLAAQgTAAgNgNgAALAAIgWABQgKADgHAGQgGAHAAAKQAAANAHAFQAIAGAPABQAKAAALgFQAKgFAJgHIAAgmIgZADg");
	this.shape_51.setTransform(24.7,232.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FF0000").s().p("AgLBfIAAiMIAWAAIAACMgAgMhFIAAgZIAZAAIAAAZg");
	this.shape_52.setTransform(-8.8,229.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgrA3QgUgTAAgkQAAghATgUQATgUAdAAQAdAAAPARQAQAQAAAfIAAALIhnAAQAAANAEAKQAEAJAHAHQAHAGAJADQAIADAKAAQAOAAAPgFQAPgHAGgFIABAAIAAAaQgMAFgMADQgNAEgOAAQghAAgUgTgAgagrQgLAMgCARIBQAAQAAgTgKgLQgJgJgTgBQgRABgMAKg");
	this.shape_53.setTransform(-29.3,232.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgPBFQgNgFgJgIQgJgKgFgOQgFgOAAgSQAAghATgUQATgUAdAAQANABAMADQALADAKAFIAAAaIgBAAQgLgIgMgEQgLgFgLAAQgTAAgMAOQgMANAAAZQAAAaAMAOQALANAUAAQAGAAAIgCIANgFIAKgFIAIgGIABAAIAAAaQgMAHgKACQgLADgNABQgNAAgNgFg");
	this.shape_54.setTransform(-43.5,232.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgtA9QgOgNAAgTQAAgRAHgJQAHgIANgGQANgFASgCIAlgEIAAgDQAAgJgDgFQgDgFgFgDQgFgDgHgBIgNgBQgJAAgMACQgLADgNAEIgBAAIAAgYIAUgEQANgCANAAQANAAALADQALABAJAHQAIAFAEAKQAEAJAAAOIAABeIgYAAIAAgPIgIAGQgGAEgFACQgGADgIACQgFACgLAAQgTAAgNgNgAALAAIgWABQgKADgHAGQgGAHAAAKQAAANAHAFQAIAGAPABQAKAAALgFQAKgFAJgHIAAgmIgZADg");
	this.shape_55.setTransform(-58.9,232.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgmBeQgRgEgRgIIAAgfIACAAQAOAMATAGQATAHAQAAQAWAAANgJQANgJAAgPQAAgMgGgGQgGgGgNgDIgVgEIgVgFQgZgFgMgLQgNgMAAgWQAAgXAVgPQAUgQAeAAQATAAAQAFQARADANAGIAAAdIgCAAQgLgJgSgGQgRgGgRAAQgTAAgNAJQgMAIAAANQAAAMAGAGQAGAIAPADIAWAFIAZAEQAVAGAKAJQALAMAAAUQABALgGALQgFAKgKAIQgKAIgNAFQgOAEgRAAQgUAAgQgDg");
	this.shape_56.setTransform(-85.2,229.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FF0000").s().p("AggBGQgNgEgJgEIAAgbIABAAQALAIAOAGQAOAEANAAQANAAAJgFQAKgFgBgLQAAgIgEgEQgFgFgOgDIgLgCIgPgEQgTgFgIgHQgHgKAAgOQAAgIADgIQAEgIAHgGQAHgGALgDQALgEAMAAQAMAAAOADQANADAIAFIAAAZIgBAAQgJgHgNgEQgNgFgNAAQgLAAgJAFQgJAFAAAKQAAAJAGAEQAFAFAMADIAMADIAOACQARAEAJAHQAJAKAAAPQAAAUgQAMQgRANgZAAQgQAAgNgEg");
	this.shape_57.setTransform(38,265.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FF0000").s().p("AgrA3QgUgUAAgiQAAghATgVQATgUAdAAQAdAAAPAQQAQARAAAfIAAALIhnAAQAAANAEAKQAEAJAHAHQAHAGAJADQAIADAKAAQAOAAAPgGQAPgFAGgGIABAAIAAAaQgMAFgMAEQgNADgOAAQghAAgUgTgAgagqQgLALgCARIBQAAQAAgTgKgKQgJgKgTAAQgRAAgMALg");
	this.shape_58.setTransform(23.3,265.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FF0000").s().p("AgLBHIg5iMIAaAAIAqBuIAshuIAZAAIg6CMg");
	this.shape_59.setTransform(8,265.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FF0000").s().p("AgvA2QgRgUAAgiQAAghARgUQASgUAdAAQAeAAARAUQASAUAAAhQAAAigSAUQgRAUgeAAQgdAAgSgUgAgdgnQgLANABAaQgBAaALAOQALAOASAAQATAAALgOQAKgOAAgaQAAgagKgNQgLgOgTAAQgSAAgLAOg");
	this.shape_60.setTransform(-7.3,265.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FF0000").s().p("AgKBiIAAjDIAVAAIAADDg");
	this.shape_61.setTransform(-18.8,262.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AggBGQgNgEgJgEIAAgbIABAAQAMAIANAGQAOAEANAAQANAAAKgFQAIgFABgLQAAgIgGgEQgEgFgOgDIgLgCIgPgEQgTgFgIgHQgHgKgBgOQAAgIAFgIQADgIAHgGQAIgGALgDQALgEALAAQAMAAANADQAOADAIAFIAAAZIgBAAQgJgHgOgEQgNgFgMAAQgLAAgJAFQgJAFAAAKQAAAJAGAEQAFAFALADIANADIAOACQARAEAJAHQAJAKAAAPQAAAUgQAMQgRANgZAAQgQAAgNgEg");
	this.shape_62.setTransform(1.7,232.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgLBfIAAiMIAWAAIAACMgAgMhFIAAgZIAZAAIAAAZg");
	this.shape_63.setTransform(-8.8,229.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11,p:{x:21.4}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7,p:{x:91.1}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{x:131.9}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:168.8,y:248.3}},{t:this.shape,p:{x:177}}]}).to({state:[{t:this.shape_31},{t:this.shape_30,p:{x:-68.9,y:249.2}},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21,p:{x:74.1,y:251.1}},{t:this.shape_11,p:{x:97.6}},{t:this.shape_20},{t:this.shape_4,p:{x:128.3}},{t:this.shape_7,p:{x:142.8}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16,p:{x:210.9,y:253.7}},{t:this.shape,p:{x:221}}]},10).to({state:[{t:this.shape_56},{t:this.shape_30,p:{x:-71.2,y:230.2}},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_21,p:{x:1.7,y:232.1}},{t:this.shape_51},{t:this.shape_50},{t:this.shape_16,p:{x:66,y:234.7}},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_1,p:{x:-18.8,y:262.9}},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},9).to({state:[{t:this.shape_56},{t:this.shape_30,p:{x:-71.2,y:230.2}},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_63},{t:this.shape_62},{t:this.shape_51},{t:this.shape_50},{t:this.shape_16,p:{x:66,y:234.7}},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},10).wait(10));

	// Layer 2
	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(0,204,255,0.686)").s().p("Egg8AErIAApWMBB6AAAIAAJWg");
	this.shape_64.setTransform(65,248.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_64).wait(39));

	// text
	this.result = new cjs.Text("", "bold 20px 'Comic Sans MS'", "#FFFFFF");
	this.result.name = "result";
	this.result.textAlign = "center";
	this.result.lineHeight = 30;
	this.result.lineWidth = 305;
	this.result.setTransform(59.2,286.9);

	this.timeline.addTween(cjs.Tween.get(this.result).wait(39));

	// Layer 16
	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FF0000").s().p("AglBgQgEAFgHAAQgHAAgFgFQgEgFAAgGIAAgKIAAgJIAAiOQAAgJAEgHQAGgJAJAAQAOAAAAAPIgBAFIgBAFIAAAxQAKgGAIgCQAJgDAGAAQAeAAATAWQARASAAAdQAAAegVAUQgUAVgbAAQgTAAgQgGgAgNgBQgJABgLAIIAAA2QASAHANAAQANAAALgKQAKgLAAgRQAAgQgIgLQgJgJgPAAQgFAAgIAEg");
	this.shape_65.setTransform(247.7,349.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FF0000").s().p("AgxBCQgEgFAAgHIAAhRIAAgMIAAgMQAAgHAFgEQAEgFAIAAQAOAAACAOQAVgRAcAAQAZAAAAAiIAAAJQgCATgQAAQgQAAAAgQIAAgNQgbAEgNAZIABA+QAAAHgFAFQgFAFgIAAQgHAAgFgFg");
	this.shape_66.setTransform(234,353);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FF0000").s().p("AgqA2QgVgQgBgdQABgeAQgWQATgZAeAAQAWAAAPAHQATAKAAATQAAAOgQALQgHAFgWAIIgoATQAGAGAJADQAJAEAIAAQARAAAMgHQALgGAGAAQAOAAAAAMQgBAPgVAJQgSAIgUAAQgcAAgTgPgAgQgdQgJAIgFAPIAdgMQAPgIAKgGQgJgFgNAAQgKAAgIAIg");
	this.shape_67.setTransform(220,352.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FF0000").s().p("AgbBZQgPgkgShEIgLgiQgIgYABgJQgBgIAGgFQAFgEAIAAQAMAAAEAMIAGAWIAMApQAKAjAJAbIAchKIAKgfQAIgSAJgKQAGgGAHAAQAIAAAGAFQAEAFAAAHQAAAFgDAFQgHAKgFAOIgJAZIgiBWQgHAQgIAPQgGAKgIAAQgNAAgGgNg");
	this.shape_68.setTransform(204.3,350);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FF0000").s().p("AgqA2QgVgQAAgdQAAgeAQgWQATgZAeAAQAWAAAOAHQAUAKAAATQAAAOgPALQgIAFgWAIIgoATQAGAGAIADQAKAEAIAAQASAAAMgHQAKgGAGAAQANAAAAAMQABAPgWAJQgRAIgVAAQgcAAgTgPgAgQgdQgIAIgGAPIAdgMQAPgIAKgGQgJgFgNAAQgKAAgIAIg");
	this.shape_69.setTransform(176.7,352.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FF0000").s().p("AgmA3QgVgQABgcQgBgYATgaQAUgfAZAAQANAAARAHQAWAJAAALQAAAHgFAEQgEAGgHAAQgGgBgHgFQgIgGgPAAQgIAAgMATQgKATgBALQAAAOAKAHQAJAHANAAQAJAAAMgGQAMgHAEAAQAGAAAFAFQAGAFAAAHQAAAKgWAJQgTAJgNAAQgaAAgSgQg");
	this.shape_70.setTransform(162.7,352.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FF0000").s().p("AAaA6IgEgaQgCgOAAgNIAAgJIABgLIAAgFIAAgGQAAgKgEAAQgMAAgIAOQgLAOgFATIgCAMIAAALIgBALIgBALQABAHgGAFQgEAFgJAAQgHAAgFgFQgFgEAAgIIAAgLIgBgLIABgiIACghIAAgLIgBgMQAAgHAGgFQAEgEAIAAQARAAABAUIAAABQASgTATAAQAYAAAJAUQAGAOABAbIAAAJIgBAGQAAAKADAPQACAQAAAKQAAAHgEAFQgFAEgIAAQgPAAgCgPg");
	this.shape_71.setTransform(149.6,352.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FF0000").s().p("AgqA2QgVgQgBgdQAAgeARgWQATgZAeAAQAWAAAPAHQATAKAAATQAAAOgQALQgHAFgWAIIgoATQAGAGAIADQAKAEAIAAQASAAAMgHQAKgGAGAAQAOAAAAAMQAAAPgWAJQgRAIgVAAQgcAAgTgPgAgQgdQgIAIgGAPIAdgMQAPgIAKgGQgJgFgNAAQgKAAgIAIg");
	this.shape_72.setTransform(135.2,352.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FF0000").s().p("AgKBYQgFgFgBgGIABgOIAAgOIgChAIgYgCQgQgBAAgPQAAgHAFgFQAFgFAHAAIAWABIAAgNIgBgNQAAgHAFgEQAFgFAIAAQAQAAABAgIgBAKIANgBQAOAAAGACQAKADAAAMQAAAHgFAFQgFAFgHAAIgGAAIgHAAIgMABIACBBIAAAGIAAAHQAAAdgSAAQgFAAgFgEg");
	this.shape_73.setTransform(122,350.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FF0000").s().p("AgjBCQgTgHAAgOQAAgNAPAAQAGABALADQALADAGABQAYAAAAgLQAAgHgSgHQgYgMgHgDQgSgNAAgSQAAgZAbgJQAQgFAeAAQANAAAGADQAIAFAAAMQAAAWgMAAQgMAAgDgKIgKgBQgdAAAAAIQAAAFAQAJQAaAMAIAFQATAMAAARQAAAWgVALQgQAJgWAAQgRAAgOgFg");
	this.shape_74.setTransform(109.3,352.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FF0000").s().p("AgPBcQgFgFAAgIIAAgXIgBgXIACgcIABgaQAAgIAFgFQAFgEAHAAQAGAAAFAEQAFAFAAAIIgBAaIgCAcIABAXIAAAXQAAAIgFAFQgFAEgFAAQgIAAgFgEgAgKhAQgGgFAAgIQAAgIAGgFQAGgGAGABQAIgBAGAGQAGAFAAAIQAAAIgGAFQgGAGgIAAQgGAAgGgGg");
	this.shape_75.setTransform(99.8,350);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FF0000").s().p("AAjBCQgLgMgYghIggAeIgLAKQgFAGgHAAQgHAAgFgFQgGgFAAgHQAAgHALgKIARgNIAYgXIgPgTQgIgMgIgHQgHgFAAgGQAAgHAFgGQAFgEAHAAQAJgBAQATIASAaIAWgSQAOgMAFgJQAGgHAIAAQAHAAAGAEQAFAFAAAHQAAAIgNANIgTARIgTARIAmAuQAFAFAAAFQAAAHgGAEQgFAGgHAAQgHAAgGgHg");
	this.shape_76.setTransform(88.2,352.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FF0000").s().p("Ag6BhQgOgNAAgpQAAgRADggQACgiAAgRIgBgNIgBgNQAAgTARAAQAGAAAFADIAcgGQANgCAKAAQAgAAATAIQAMAEAAAMQAAAHgFAFQgFAFgIAAIgFAAQgVgGgTAAIgTACIgXAEIgBAyIAwgEIAegDQAIAAAFAFQAFAFAAAIQAAANgQACIgeACIg0AFIgBAaQAAAZADAEQABABAPAAIAVAAIAYAAIAIgBIAHgBQAHAAAGAEQAGAFAAAIQAAAPgPACQgNADgmAAQgpAAgNgLg");
	this.shape_77.setTransform(72.8,349.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FF0000").s().p("AgkBgQgFAFgHAAQgHAAgFgFQgEgFAAgGIAAgKIAAgJIAAiOQAAgJAEgHQAGgJAJAAQANAAAAAPIAAAFIgBAFIAAAxQAKgGAIgCQAJgDAGAAQAeAAATAWQAQASAAAdQABAegVAUQgUAVgbAAQgTAAgPgGgAgNgBQgJABgLAIIAAA2QASAHANAAQANAAALgKQAKgLAAgRQAAgQgIgLQgJgJgPAAQgEAAgJAEg");
	this.shape_78.setTransform(26.7,349.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FF0000").s().p("AgxBCQgEgFAAgHIAAhRIAAgMIAAgMQAAgHAFgEQAEgFAIAAQAOAAADAOQAUgRAcAAQAZAAAAAiIAAAJQgBATgRAAQgQAAAAgQIAAgNQgbAEgMAZIAAA+QAAAHgFAFQgFAFgIAAQgHAAgFgFg");
	this.shape_79.setTransform(12.9,353);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FF0000").s().p("AgqA2QgWgQAAgdQABgeAQgWQATgZAeAAQAWAAAPAHQATAKAAATQAAAOgQALQgHAFgVAIIgpATQAGAGAJADQAIAEAJAAQARAAAMgHQALgGAGAAQAOAAAAAMQgBAPgVAJQgSAIgUAAQgcAAgTgPgAgQgdQgJAIgEAPIAcgMQAPgIAKgGQgJgFgNAAQgKAAgIAIg");
	this.shape_80.setTransform(-1,352.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FF0000").s().p("AgbBZQgPgkgThEIgKgiQgIgYAAgJQAAgIAGgFQAGgEAGAAQANAAAEAMIAGAWIAMApQAJAjAKAbIAchKIALgfQAHgSAJgKQAGgGAHAAQAIAAAGAFQAEAFAAAHQAAAFgCAFQgIAKgGAOIgJAZIghBWQgHAQgIAPQgFAKgJAAQgNAAgGgNg");
	this.shape_81.setTransform(-16.8,350);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FF0000").s().p("AAZA6IgDgaQgCgOAAgNIABgJIAAgLIAAgFIAAgGQABgKgGAAQgKAAgJAOQgLAOgFATIgCAMIAAALIgBALIAAALQAAAHgGAFQgFAFgHAAQgIAAgFgFQgFgEAAgIIAAgLIgBgLIABgiIACghIAAgLIgBgMQAAgHAGgFQAEgEAIAAQAQAAACAUIAAABQASgTATAAQAYAAAJAUQAGAOABAbIAAAJIgBAGQAAAKADAPQACAQAAAKQAAAHgEAFQgGAEgHAAQgPAAgDgPg");
	this.shape_82.setTransform(-43.6,352.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FF0000").s().p("AgoA1QgTgSgBgdQgBgaARgWQATgaAgAAQAaAAAPAUQANASAAAbQAAAcgQAVQgRAXgcAAQgXAAgRgQgAgRgVQgIANAAAOQAAAPAJAIQAHAGAJABQAJAAAIgIQAJgJABgPQACgngXABIgBgBQgNAAgJAOg");
	this.shape_83.setTransform(-57.5,353.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FF0000").s().p("AgPBcQgFgFAAgIIAAgXIgBgXIACgcIABgaQAAgIAFgFQAFgEAHAAQAGAAAFAEQAFAFAAAIIgBAaIgCAcIABAXIAAAXQAAAIgFAFQgFAEgFAAQgIAAgFgEgAgKhAQgGgFAAgIQAAgIAGgFQAGgGAGABQAIgBAGAGQAGAFAAAIQAAAIgGAFQgGAGgIAAQgGAAgGgGg");
	this.shape_84.setTransform(-67.5,350);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FF0000").s().p("AgKBYQgFgFAAgGIAAgOIAAgOIgChAIgYgCQgQgBAAgPQAAgHAFgFQAFgFAHAAIAWABIAAgNIgBgNQAAgHAFgEQAGgFAGAAQASAAAAAgIgBAKIANgBQAPAAAFACQAKADAAAMQAAAHgFAFQgFAFgIAAIgFAAIgHAAIgMABIACBBIABAGIAAAHQAAAdgTAAQgFAAgFgEg");
	this.shape_85.setTransform(-77.6,350.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FF0000").s().p("AgnA3QgTgQgBgcQABgYARgaQAVgfAYAAQAOAAASAHQAVAJAAALQAAAHgEAEQgFAGgHAAQgGgBgHgFQgIgGgQAAQgHAAgMATQgLATABALQAAAOAJAHQAJAHAOAAQAIAAAMgGQANgHADAAQAHAAAFAFQAEAFAAAHQAAAKgVAJQgUAJgLAAQgbAAgTgQg");
	this.shape_86.setTransform(-90.6,352.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FF0000").s().p("AAsBHQgHgPgFgTIgeADQgSABgLACIgVAqQgFAJgKAAQgHAAgFgFQgGgEAAgIQAAgGASgmIgBgHQABgGAMgEQARgdAWghQAegwAHAAQAOAAAFAQIAIApIATBSIAGARQAFALAAAFQAAAHgFAFQgGAFgHAAQgKAAgKgYgAgJALQAGgBAKgBIASgBIgIgpIgaAsg");
	this.shape_87.setTransform(-106.7,350.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65}]}).wait(39));

	// buttons
	this.btn_wrong = new lib.quiz_btn();
	this.btn_wrong.setTransform(-118,330.1,0.875,1);
	new cjs.ButtonHelper(this.btn_wrong, 0, 1, 2, false, new lib.quiz_btn(), 3);

	this.btn_correct = new lib.quiz_btn();
	this.btn_correct.setTransform(56.5,330.1,1.148,1);
	new cjs.ButtonHelper(this.btn_correct, 0, 1, 2, false, new lib.quiz_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_correct,p:{scaleX:1.148,x:56.5,y:330.1}},{t:this.btn_wrong,p:{scaleX:0.875,x:-118,y:330.1}}]}).to({state:[{t:this.btn_correct,p:{scaleX:0.937,x:-118.6,y:332.9}},{t:this.btn_wrong,p:{scaleX:1.159,x:56.9,y:328.9}}]},10).to({state:[{t:this.btn_correct,p:{scaleX:1.153,x:62.1,y:333.1}},{t:this.btn_wrong,p:{scaleX:0.903,x:-118.6,y:332.1}}]},9).to({state:[{t:this.btn_correct,p:{scaleX:0.898,x:-119.5,y:332.1}},{t:this.btn_wrong,p:{scaleX:1.165,x:67.6,y:333.1}}]},10).wait(10));

	// Layer 6
	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#07C1D6").s().p("AgGA8QgEgFAAgEQAAgEADgCQADgDAEAAQADAAAEAFQAEAEAAAEQAAAEgDADQgEADgEAAQgCAAgEgFgAgFAiQgCgDAAgEIgBgJIAAgJIAAgfIABggQAAgEACgDQADgDADAAQAEAAADADQADADAAAEIAABRQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_88.setTransform(-98.1,118.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#07C1D6").s().p("AgyA6QgDgDAAgFQAAgGAFgHIAIgMIAaggQAOgUANgMIgRAAIgfAAIgCABIgDAAQgFAAgDgCQgDgEgBgFQABgLAQABIAQAAIAPABIAQgBIASAAQAYAAAAAKQAAAHgKAHIgLAHQgNAKgTAVIgZAmIAZgBIAbgBIAQABQAJACABAHQgBAFgDADQgEADgEAAIgHgBIgHAAIgiABIgjAAQgFAAgEgCg");
	this.shape_89.setTransform(-105.4,119);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#07C1D6").s().p("AgjA4QgEgDAAgEQAAgFAEgDQADgDAFAAIAPgBIgBgkQABgTABgTIgQAAQgGAAgCgDQgEgDAAgEQAAgFAEgDQACgCAEgBIAXAAQANAAAXADQAKABAAAKQAAAFgDACQgEADgEAAIgUgCIgBAkIAAAjIAVAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAIgNAAIgOAAIgOACIgPABQgGAAgCgDg");
	this.shape_90.setTransform(-115.4,119);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#07C1D6").s().p("AgeA1QgVgQAAglIABgMIAAgLIAAgJIAAgJQAAgGADgFQADgHAFAAQAFAAADACQADADAAAFIAAANIAAANIAAALIgBALQAAAKADAKQADANAHAEQADADAMAAQATAAAHgjQAEgQAAgiQAAgEADgEQADgFAHAAQAFAAADADQACADAAAEQAAAfgDARQgFAZgNARQgFAIgIAFQgKAGgJAAQgTAAgKgHg");
	this.shape_91.setTransform(-125.7,119.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#07C1D6").s().p("AATAvQgOAFgKAAQgYAAgUgTQgSgTAAgWQAAgcAWgUQAVgTAbAAQAfAAAPAXQAOATAAAdQAAAWgYASIAPANIAJAHQAFAFAAAEQAAAEgEAEQgDADgFAAQgFAAgggdgAAAAeQgMgLAAgHQAAgFAEgDQADgDAFAAQADAAAEAFQAGAJAJAHQATgMAAgOQAAgWgJgNQgKgOgTAAQgTAAgOANQgPANAAATQAAANAMANQANAMAPAAIAFAAIAAAAg");
	this.shape_92.setTransform(-138.3,120.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgFAGQgDgDAAgDQAAgDADgCQADgDACAAQAEAAACADQADACAAADQAAADgDADQgCADgEAAQgCAAgDgDg");
	this.shape_93.setTransform(122.1,187.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgdAkIAAg1IAAgIIABgIQAAgIAGAAQAIAAAAANQAOgOARAAQAHAAADAFQADAEAAAKIAAAGQgBAJgHAAQgHAAAAgHIAAgGIAAgGQgMABgGAFQgHAGgEAKIAAApQAAAHgIAAQgHAAAAgHg");
	this.shape_94.setTransform(116.4,183.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgZAhQgMgJAAgSQAAgTAJgNQALgPARAAQAMAAAIAEQAKAFAAAMQAAAIgJAGQgDADgNAEIgcAOQAEAGAHADQAGAEAHAAQAFAAAIgCQAJgCADgFQACgEADAAQADAAACACQACACAAADQAAAIgOAHQgMAFgLAAQgQAAgKgJgAgPgUQgGAIgDANIAYgKQAMgHAGgFQgHgGgLAAQgJAAgGAHg");
	this.shape_95.setTransform(108.1,183.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AAEAWIgCgSIgCgPIgFAMIgNAgQgBADgCACQgCAEgFABQgGAAgGgYQgCgLgDgTIgCgMIgBgMQAAgDACgCQACgDAEAAQAGAAABAHIACALIABAMIAFAhQAIgWAKggQACgIAFAAQAGAAACAJIAFAdIAGAdIAFgVIAKgpQACgFAFAAQAEAAACACQACACAAADIgBAEQgFAagLAeQgCAHgFAIQgDADgEAAQgJAAgFgVg");
	this.shape_96.setTransform(98.2,183.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgVArQgMgEAAgIQAAgDADgDQACgCAEAAQACAAAEAEQACACAGABIAJABQAFAAAFgCQAHgCAAgFQAAgLgPgDIgGgCQgLgDgEgDQgGgCAAgJQAAgQAPgHIANgFIAPgFIAHgBQADAAACACQADACAAADIABAHIABAHQAAADgDACQgCADgDAAQgEAAgCgDIgCgJIgSAGQgLAFAAAHIAFABQAQAEAIAFQANAGAAAQQAAANgLAGQgJAFgMAAQgKAAgKgDg");
	this.shape_97.setTransform(88.5,183.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AATAmIgCgRIgBgRIAAgGIAAgIQAAgQgGAAQgJAAgGAKQgHAKgEAMIgBAHIAAAJIAAAHIABAGQAAAEgCACQgDACgDAAQgEAAgCgCQgCgCAAgEIAAgGIgBgHIABgWIABgVIAAgIIAAgHQAAgDACgCQADgDACAAQAIAAABALIAAAJQANgSAMAAQAMAAAFALQAEAIAAANIAAAIIgBAGQAAAHACAKIACARQAAADgCACQgCACgDAAQgIAAAAgHg");
	this.shape_98.setTransform(80.8,183.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AAZAnIgGgFIgNAGQgFACgCAAQgTAAgIgKQgIgKAAgUQAAgRANgNQANgOAQAAQAHAAAIAEQALAEAAAGIgCAEIgBAKIgBAPQABAKABAGIAFANIABAEIABACQAAADgCACQgCACgDAAQgBAAgEgEgAgMgSQgJAKAAALQAAAMAFAHQAFAGAIAAQAGAAAFgCIAIgGQgDgUAAgJIABgIIACgIIgGgCIgDgBQgKAAgJAKg");
	this.shape_99.setTransform(72.4,183.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgEA2QgCgCAAgCIAAgJIABgJIgCgsIgRgCQgIAAAAgHQAAgDACgDQADgCADAAIARACIgBgLIAAgKQAAgDACgDQADgBADAAQAEAAACALIAAAHIAAAEIAAAFIALgBIALABQAEACAAAFQAAADgCADQgCACgDAAIgEAAIgEgBIgKACIABAsIAAADIAAAFQAAAQgIAAQgBAAgDgCg");
	this.shape_100.setTransform(59.7,182.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgVAhQgLgJAAgRQAAgOALgRQALgSANAAQAIgBAJAEQAMAFAAAGQAAAEgCACQgCACgDAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQAAAAgBgBIgDgCQgFgEgKAAQgGAAgIAPQgHAMAAAIQAAAKAHAGQAHAFAIABQAFgBAFgCIAJgFIADgBQADAAACACQACADAAADQAAAGgMAFQgKAEgHAAQgOAAgLgKg");
	this.shape_101.setTransform(51.8,183.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgZAhQgMgJAAgSQAAgTAJgNQALgPARAAQAMAAAIAEQAKAFAAAMQAAAIgJAGQgDADgNAEIgcAOQAEAGAHADQAGAEAHAAQAFAAAIgCQAJgCADgFQACgEADAAQADAAACACQACACAAADQAAAIgOAHQgMAFgLAAQgQAAgKgJgAgPgUQgGAIgDANIAYgKQAMgHAGgFQgHgGgLAAQgJAAgGAHg");
	this.shape_102.setTransform(43.5,183.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgdAkIAAg1IAAgIIABgIQAAgIAGAAQAIAAAAANQAOgOARAAQAHAAADAFQADAEAAAKIAAAGQgBAJgHAAQgHAAAAgHIAAgGIAAgGQgMABgGAFQgHAGgEAKIAAApQAAAHgIAAQgHAAAAgHg");
	this.shape_103.setTransform(35.3,183.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgdAkIAAg1IAAgIIABgIQAAgIAGAAQAIAAAAANQAOgOARAAQAHAAADAFQADAEAAAKIAAAGQgBAJgHAAQgHAAAAgHIAAgGIAAgGQgMABgGAFQgHAGgEAKIAAApQAAAHgIAAQgHAAAAgHg");
	this.shape_104.setTransform(27.6,183.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgWAhQgLgLAAgSQgBgQAKgNQALgQARAAQAQAAAIAOQAGAMAAAPQAAAQgJAMQgKAOgPAAQgNAAgJgJgAgNgOQgFAIAAAKQAAALAGAGQAFAGAHAAQAHAAAFgGQAHgHAAgLQACgcgSAAQgJAAgHALg");
	this.shape_105.setTransform(19.2,183.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgVAhQgLgJAAgRQAAgOALgRQALgSANAAQAIgBAJAEQAMAFAAAGQAAAEgCACQgCACgDAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQAAAAgBgBIgDgCQgFgEgKAAQgGAAgIAPQgHAMAAAIQAAAKAHAGQAHAFAIABQAFgBAFgCIAJgFIADgBQADAAACACQACADAAADQAAAGgMAFQgKAEgHAAQgOAAgLgKg");
	this.shape_106.setTransform(11.1,183.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgZAhQgMgJAAgSQAAgTAJgNQALgPARAAQAMAAAIAEQAKAFAAAMQAAAIgJAGQgDADgNAEIgcAOQAEAGAHADQAGAEAHAAQAFAAAIgCQAJgCADgFQACgEADAAQADAAACACQACACAAADQAAAJgOAGQgMAFgLAAQgQAAgKgJgAgPgUQgGAIgDANIAYgKQAMgHAGgFQgHgGgLAAQgJAAgGAHg");
	this.shape_107.setTransform(253.5,159.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AAVA7QgCgHgCgMIgBgSIAAgHIAAgGQAAgMgHAAQgJAAgHAHQgEAEgHANQAAAegCAGQgCAEgFAAQgDAAgCgCQgDgCAAgEIABgCIABgMIAAgMIAAg3IABgNIgBgHIgBgIQAAgEACgCQADgCADAAQAGABABAGIACAOIgBARIAAARIAAAHQAGgIAIgFQAFgEAIAAQANAAAFAJQADAFABAMIAAAPIACARIADAPIAAADQAAADgCACQgDACgDAAQgGAAgBgFg");
	this.shape_108.setTransform(244.5,157.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgEA2QgCgCAAgCIAAgJIABgJIgCgsIgRgCQgIAAAAgHQAAgDACgDQADgCADAAIARACIgBgLIAAgKQAAgDACgCQADgCACAAQAGAAABALIAAAHIAAAEIAAAFIALgBIALABQAEACAAAFQAAADgCADQgCACgEAAIgDAAIgEgBIgLACIACAsIAAADIAAAFQAAAQgIAAQgCAAgCgCg");
	this.shape_109.setTransform(236,158.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AATAmIgCgRIgCgRIAAgGIABgIQAAgQgGAAQgJAAgGAKQgHAKgEAMIgBAHIAAAJIAAAHIABAGQAAAEgDACQgCACgDAAQgEAAgCgCQgCgCAAgEIAAgGIgBgHIACgWIAAgVIAAgIIAAgHQAAgDACgCQADgDADAAQAHAAABALIAAAJQANgSAMAAQAMAAAFALQADAIABANIAAAIIgBAGQAAAHACAKIACARQAAADgCACQgCACgDAAQgIAAAAgHg");
	this.shape_110.setTransform(223.4,159.3);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgWAhQgLgLAAgSQgBgQAKgNQALgQARAAQAQAAAIAOQAGAMAAAPQAAAQgJAMQgKAOgPAAQgNAAgJgJgAgNgOQgFAIAAAKQAAALAGAGQAFAGAHAAQAHAAAFgGQAHgHAAgLQACgcgSAAQgJAAgHALg");
	this.shape_111.setTransform(214.7,159.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AAVA7IgNgSIgMgTIgOAKIAAAYQAAADgDACQgCACgDAAQgIAAAAgKIABgUIABgTIAAgZIAAgbIAAgIIAAgJQAAgDACgCQACgDADAAQAEAAACADQACACAAADIAAAJIABAIIgBAZIAAAaQALgIAIgIIARgSQACgDADAAQADAAADADQACACAAADQAAADgCADIgYAWIARAXQAMAQAAAFQAAADgCADQgDACgDAAQgEAAgCgFg");
	this.shape_112.setTransform(201.9,157.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgVAhQgLgJAAgRQAAgOALgRQALgSANAAQAIgBAJAEQAMAFAAAGQAAAEgCACQgCACgDAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAIgDgDQgFgEgKAAQgGAAgIAPQgHAMAAAIQAAAKAHAGQAHAFAIABQAFgBAFgCIAJgEIADgCQADAAACACQACADAAADQAAAGgMAFQgKAEgHAAQgOAAgLgKg");
	this.shape_113.setTransform(193.1,159.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgHA4QgCgCAAgEIAAgOIAAgOIABgSIAAgQQAAgEACgCQADgCADAAQACAAACACQACACAAAEIgBAQIAAASIAAAOIAAAOQAAAEgDACQgBACgCAAQgDAAgDgCgAgDgqQgEgCAAgEQAAgEAEgDQACgCACAAQAEAAACACQADADAAAEQAAAEgDACQgCADgEAAQgCAAgCgDg");
	this.shape_114.setTransform(186.9,157.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgIA4IABgdIABgbIAAgbIABgcQAAgIAGAAQAHAAAAAIIAAAcIAAAbIgBAmIgBASQgBAIgFAAQgIAAAAgIg");
	this.shape_115.setTransform(182.3,157.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgfAvQgLgMAAgQQAAgYAWgdQASgXASAAIAGABIAGABQADgEAEAAQAFAAACAHQABAHAAAJQAAADgBACQgDAEgDAAQgFgBgDgGQgDgEgBgCQgCgBgGAAQgMAAgLASQgUAXABATQAAAKAGAHQAHAIAJAAQAGAAAIgFQAFgBAJgIQAEgDADAAQADAAACADQADADAAADQAAADgDADQgVASgTAAQgQAAgLgNg");
	this.shape_116.setTransform(175.4,157.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgTA6QgEgCAAgEQAAgEAEgEQACgFAEAAQAIAAAAAJQAAAFgCADQgDAEgEAAQgCAAgDgCgAgPAcQgCgCAAgEQAAgFAKgIIAQgMQALgIgBgIQAAgJgIgHQgIgIgHAAQgFAAgHAFIgKAFQgEAAgCgCQgCgDAAgDQAAgHAMgFQAKgGAIAAQAOAAANAMQAMAMAAAQQAAALgIAIQgDAEgNAJQgLAJgDAFQgDAEgDgBQgDABgDgDg");
	this.shape_117.setTransform(161.1,157.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FF0000").s().p("AghA8QgIgHAAgZIAAgLIABgNIgBgEQAAAAABAAQAAAAAAAAQAAgBAAAAQABgBAAAAIACgiIgCgJIAAgIQAAgJAHAAQAEAAADACIARgEIAOgBQATAAALAEQAGADAAAFQAAAEgDACQgCACgDAAIgDAAQgNgEgMAAIgNACIgQADIABAIIgBAeIAggEIATgBQADAAADACQACACAAAEQAAAGgIAAIgSACIgiADIgBAKIAAAKQAAARACADQACACALAAIAMAAIAPAAIAEAAIAFgBQAJAAAAAIQgBAHgGABQgHABgXAAQgYAAgHgGg");
	this.shape_118.setTransform(152.5,157.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FF0000").s().p("AgfAvQgLgMAAgQQAAgYAWgdQASgXASAAIAGABIAGABQADgEAEAAQAFAAACAHQABAHAAAJQAAADgBACQgDAEgDAAQgFgBgDgGQgDgEgBgCQgCgBgGAAQgMAAgLASQgUAXABATQAAAKAGAHQAHAIAJAAQAGAAAIgFQAFgBAJgIQAEgDADAAQADAAACADQADADAAADQAAADgDADQgVASgTAAQgQAAgLgNg");
	this.shape_119.setTransform(142.6,157.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FF0000").s().p("AgzA9QgCgDAAgEIAAgJIABgKIAAgPIAAgOIAAgOIAAgQIgBgOIgBgPQAAgDADgDQADgDAEAAQAEAAAGAJQAUAdAOATQASAVAWAVIAAgKIAAgJQAAghgDgUIgCgJIgCgIQAAgJAJAAQANAAAAAzIAAAYIAAAZIgCANQgBAIgHAAQgEAAgGgGQgggdgng4IgBASIAAAQIABAUIAAATQAAAVgIAAQgFAAgCgCg");
	this.shape_120.setTransform(131.3,157.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FF0000").s().p("AghA8QgIgHAAgZIAAgLIABgNIgBgEQAAAAABAAQAAAAAAAAQAAgBAAAAQABgBAAAAIACgiIgCgJIAAgIQAAgJAHAAQAEAAADACIARgEIAOgBQATAAALAEQAGADAAAFQAAAEgDACQgCACgDAAIgDAAQgNgEgMAAIgMACIgRADIABAIIgBAeIAggEIASgBQAEAAADACQACACAAAEQAAAGgIAAIgSACIgiADIgBAKIAAAKQAAARACADQACACALAAIAMAAIAPAAIAEAAIAFgBQAJAAAAAIQgBAHgGABQgHABgXAAQgYAAgHgGg");
	this.shape_121.setTransform(120.1,157.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FF0000").s().p("AgEA5QgDgCAAgEIABgDIAAgEIAAgLIgBgMIgCgdIgCgfIgHAAQgRgBgKgCQgGgCAAgFQAAgEACgDQACgCAEAAIAMACIANAAIAOAAIAMAAIASABIASABQAEAAACACQACACAAAEQAAADgCADQgCACgEAAIgSgBIgRgBIgGAAIACAjIACAhIAAAIIABAJQAAAFgCAEQgCAFgEAAQgCAAgCgCg");
	this.shape_122.setTransform(110,157.4);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FF0000").s().p("AgeA2QgPgHAAgMQAAgDACgDQADgBADAAQAEAAADAEQAEAGADACQAHAEAMABQAKgBALgFQANgHAAgMQAAgKgLgFQgKgFgMAAQgMAAgJgEQgLgGAAgMQAAgOAQgLQAPgLAOAAQAIAAAJACQANAEAAAFQAAAHgHAAIgLgCIgMgBQgKAAgJAFQgIAGAAAJQAAAHALACIAPACQASABAKALQAJAGAAAOQAAATgRAKQgPAKgSAAQgOAAgMgFg");
	this.shape_123.setTransform(98.4,157.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FF0000").s().p("AghA5QgCgDAAgDQAAgDACgDQACgCAEAAIAQgCIABgOIgBgNIAAgNQAAgQACgbIgKAAIgKAAQgDAAgDgCQgCgCAAgEQAAgHAHgBIAYAAQAOAAAXADQAHABAAAHQAAAEgDACQgCACgDAAIgNgBIgNgCIgBAqIAAANIAAAOIAAANIAZAAQADAAACACQACACAAAEQAAADgCADQgCACgDAAIgOAAIgMAAIgOACIgPABQgEAAgCgCg");
	this.shape_124.setTransform(88.5,157.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FF0000").s().p("AAlA8IgMgPIgLgQIgMgSIgZAfIgOARQgDACgDAAQgDAAgDgCQgCgDAAgDQAAgDACgCIAOgQIAdggIgSgXIgJgMQgFgIgFgEQgDgCAAgEQAAgDACgDQACgCAEAAQAGAAALAOIAJAOIAPAVIASgZQARgYAGAAQADAAACACQADADAAADQAAADgDACIgQAVIgJAPIgLAMIARAYQAKAPAIAKQACACAAADQAAADgCADQgCACgEAAQgDAAgCgCg");
	this.shape_125.setTransform(78.2,157.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FF0000").s().p("AghA8QgIgHABgZIAAgLIABgNIgBgEQAAAAAAAAQAAAAAAAAQAAgBAAAAQABgBAAAAIACgiIgBgJIgBgIQAAgJAIAAQADAAACACIASgEIAOgBQASAAAMAEQAFADABAFQgBAEgCACQgCACgEAAIgCAAQgNgEgMAAIgNACIgPADIAAAIIgBAeIAggEIASgBQAEAAACACQACACAAAEQABAGgIAAIgSACIgiADIgBAKIAAAKQAAARADADQACACAKAAIANAAIAOAAIAFAAIAEgBQAIAAAAAIQAAAHgGABQgIABgWAAQgYAAgHgGg");
	this.shape_126.setTransform(67.7,157.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgdAkIAAg1IAAgIIABgIQAAgIAGAAQAIAAAAANQAOgOARAAQAHAAADAFQADAEAAAKIAAAGQgBAJgHAAQgHAAAAgHIAAgGIAAgGQgMABgGAFQgHAGgEAKIAAApQAAAHgIAAQgHAAAAgHg");
	this.shape_127.setTransform(54,159.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgWAhQgLgLAAgSQgBgQAKgNQALgQARAAQAQAAAIAOQAGAMAAAPQAAAQgJAMQgKAOgPAAQgNAAgJgJgAgNgOQgFAIAAAKQAAALAGAGQAFAGAHAAQAHAAAFgGQAHgHAAgLQACgcgSAAQgJAAgHALg");
	this.shape_128.setTransform(45.6,159.4);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FF0000").s().p("AgzA9QgCgDAAgEIAAgJIABgKIAAgPIAAgOIAAgOIAAgQIgBgOIgBgPQAAgDADgDQADgDAEAAQAEAAAGAJQAUAdAOATQASAVAWAVIAAgKIAAgJQAAghgDgUIgCgJIgCgIQAAgJAJAAQANAAAAAzIAAAYIAAAZIgCANQgBAIgHAAQgEAAgGgGQgggdgng4IgBASIAAAQIABAUIAAATQAAAVgIAAQgFAAgCgCg");
	this.shape_129.setTransform(30.5,157.5);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FF0000").s().p("AgmAwQgQgOgBgWQAAgZAQgXQATgYAYAAQAaAAAMALQANAMABAaQAAAZgPAWQgRAZgZAAQgWAAgPgNgAgagZQgNARAAAUQABAPAKAJQAMAJAPAAQARAAANgTQALgRgBgUQAAgSgIgIQgIgHgTAAQgRAAgNATg");
	this.shape_130.setTransform(17.7,157.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FF0000").s().p("AghA5QgCgDAAgDQAAgDACgDQACgCADAAIARgCIABgOIgBgNIAAgNQAAgQACgbIgKAAIgKAAQgDAAgDgCQgCgCAAgEQAAgHAHgBIAYAAQANAAAYADQAHABAAAHQAAAEgDACQgCACgDAAIgNgBIgNgCIgBAqIAAANIAAAOIAAANIAZAAQADAAACACQACACAAAEQAAADgCADQgCACgDAAIgOAAIgMAAIgOACIgQABQgDAAgCgCg");
	this.shape_131.setTransform(6.9,157.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FF0000").s().p("AgEA5QgDgCAAgEIABgDIAAgEIAAgLIgBgMIgCgdIgCgfIgHAAQgRgBgKgCQgGgCAAgFQAAgEACgDQACgCAEAAIAMACIANAAIAOAAIAMAAIASABIASABQAEAAACACQACACAAAEQAAADgCADQgCACgEAAIgSgBIgRgBIgGAAIACAjIACAhIAAAIIABAJQAAAFgCAEQgCAFgEAAQgCAAgCgCg");
	this.shape_132.setTransform(-2.3,157.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FF0000").s().p("AgfAvQgLgMAAgQQAAgYAWgdQASgXASAAIAHABIAFABQADgEAEAAQAGAAABAHQABAHAAAJQAAADgBACQgDAEgEAAQgEgBgDgGQgDgEgBgCQgCgBgGAAQgMAAgMASQgSAXAAATQAAAKAGAHQAHAIAJAAQAGAAAIgFQAFgBAJgIQAFgDACAAQADAAACADQADADAAADQAAADgDADQgVASgTAAQgQAAgLgNg");
	this.shape_133.setTransform(-13,157.4);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FF0000").s().p("AAbAoIgFgYIgVADIgTAFIgNAdQgDAFgEAAQgDAAgDgDQgCgCAAgDQAAgEAMgYQgCgDAAgCQAAgGAIgDIAXgkQAQgdAFAAQAGgBACAJIAFAaIAMA0IAEANIACAJQAAADgCACQgCADgEAAQgHgBgFgSgAgJAFIAbgFIgGgdg");
	this.shape_134.setTransform(-24,157.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FF0000").s().p("AgjA7QgDgDAAgDIAAgXIABgeIACggIABgWQAAgDACgCQALgDANAAQAMAAANAJQAOALAAAQQAAAUgPAKQALAFAGAGQAGAGAAAHQAAAKgKAIQgHAHgIADQgQAHgbAAQgDAAgDgEgAgXAeIAAAQQAVAAALgFQAFgCAFgFQAFgEAAgCQAAgEgKgEQgIgEgGgBIgHgCIgDAAIgDAAIgJAAIgBARgAgUgtIAAANIgBAeIAMABQAJgBAIgGQAIgHAAgLQAAgHgIgHQgIgGgIAAIgMABg");
	this.shape_135.setTransform(-39.2,157.3);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FF0000").s().p("AgmA7QgDgDAAgDIAAgSIgBgTIABgTIADgWIgCgLIAAgMQAAgFADgDQACgEAGAAIATACQAKABAGAEQAfARAAAYQAAAMgLAHQgIAHgNAEQAYANAMAPQACACAAADQAAADgCADQgDACgDAAQgDAAgDgCQgZgagegJIAAAQIABAPQAAADgCADQgDACgDAAQgDAAgCgCgAgYgiIABAKIgBAPIgCAOIAEAAIADAAQATAAAJgFQAEgBAEgEQAFgEgBgDQAAgLgMgJQgJgJgNgBIgMgBg");
	this.shape_136.setTransform(-49.5,157.4);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FF0000").s().p("AghA8QgHgHAAgZIAAgLIABgNIgBgEQAAAAAAAAQAAAAAAAAQAAgBAAAAQABgBAAAAIABgiIgBgJIAAgIQAAgJAIAAQADAAACACIASgEIANgBQAUAAALAEQAFADAAAFQABAEgDACQgCACgEAAIgCAAQgNgEgNAAIgLACIgQADIAAAIIgBAeIAggEIATgBQADAAACACQACACAAAEQAAAGgGAAIgTACIgiADIAAAKIgBAKQAAARADADQABACALAAIANAAIAOAAIAFAAIAEgBQAJAAgBAIQABAHgHABQgIABgWAAQgYAAgHgGg");
	this.shape_137.setTransform(-59.4,157.4);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FF0000").s().p("AgNA4QgKgXgLgrIgGgVQgFgRABgFQgBgDADgCQACgDAEAAQAFAAACAHIADANIAIAbQAHAbAHAVIAAgBIAUg3IAGgTQAEgMAFgGQADgDADAAQADAAADADQACACAAADIgBAFQgFAHgDAIIgGARIgVA3QgEAKgFAKQAAAFgFAAQgFAAgDgHg");
	this.shape_138.setTransform(-69.4,157.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgZAhQgMgJAAgSQAAgTAJgNQALgPARAAQAMAAAIAEQAKAFAAAMQAAAIgJAGQgDADgNAEIgcAOQAEAGAHADQAGAEAHAAQAFAAAIgCQAJgCADgFQACgEADAAQADAAACACQACACAAADQAAAJgOAGQgMAFgLAAQgQAAgKgJgAgPgUQgGAIgDANIAYgKQAMgHAGgFQgHgGgLAAQgJAAgGAHg");
	this.shape_139.setTransform(-84.1,159.4);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AAVA7QgCgHgCgMIgBgSIAAgHIAAgGQAAgMgHAAQgJAAgHAHQgEAEgHANQAAAegCAGQgCAEgFAAQgDAAgCgCQgDgCAAgEIABgCIABgMIAAgMIAAg3IABgNIgBgHIgBgIQAAgEACgCQADgCADAAQAGABABAGIACAOIgBARIAAARIAAAHQAGgIAIgFQAFgEAIAAQANAAAFAJQADAFABAMIAAAPIACARIADAPIAAADQAAADgCACQgDACgDAAQgGAAgBgFg");
	this.shape_140.setTransform(-93.2,157.3);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgEA2QgCgCAAgCIAAgJIAAgJIgBgsIgSgCQgGAAgBgHQAAgDADgDQACgCADAAIAQACIAAgLIAAgKQAAgDACgCQADgCADAAQAEAAACALIAAAHIAAAEIAAAFIALgBIAKABQAFACABAFQAAADgDADQgCACgDAAIgEAAIgEgBIgKACIABAsIAAADIAAAFQAAAQgIAAQgBAAgDgCg");
	this.shape_141.setTransform(-101.7,158.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgVArQgMgEAAgIQAAgDADgDQACgCAEAAQACAAAEAEQACACAGABIAJABQAFAAAFgCQAHgCAAgFQAAgLgPgDIgGgCQgLgDgEgDQgGgCAAgJQAAgQAPgHIANgFIAPgFIAHgBQADAAACACQADACAAADIABAHIABAHQAAADgDACQgCADgDAAQgEAAgCgDIgCgJIgSAGQgLAFAAAHIAFABQAQAEAIAFQANAGAAAQQAAANgLAGQgJAFgMAAQgKAAgKgDg");
	this.shape_142.setTransform(-114.4,159);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AghA5QgDgDABgDQgBgDADgDQACgCAEAAIAQgCIABgOIAAgNIgBgNQAAgQACgbIgKAAIgKAAQgDAAgDgCQgCgCAAgEQAAgHAHgBIAYAAQANAAAYADQAHABAAAHQAAAEgDACQgCACgDAAIgNgBIgMgCIgCAqIAAANIAAAOIAAANIAYAAQAEAAACACQACACAAAEQAAADgCADQgCACgEAAIgMAAIgOAAIgNACIgPABQgEAAgCgCg");
	this.shape_143.setTransform(-122.4,157.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#000000").ss(3,1,1).p("APt1KQgFAAgFAAQgFAAgFAAIgMAAIgBAAIgIAAIgDAAMgwRAADIAAAOAP11KQgFAAgEAAIgJAAIgLAAIgLAAAP01KIgIAAAP11KIgIAAIgVAAAPS1KIgFAAAPS1KIgFAAIgBAAAPZ1KIgHAAAPN1KIgEAAIgFAAAQe1KIgKAAIgMAAIgGAAQgEAAgEAAIgGAAAQC1KIgHAAQgEAAgDAAAQI1KIgLAAIgDAAAQK1KQgGAAgHAAAQe1KQgKAAgKAAAQU1KQgFAAgFAAAP71KIgGAAAUb1JIgLAAIgLAAQgDAAgBAAQgCAAAAAAQgDAAgDAAIgGAAIgGAAIgGAAIgJAAIgvAAIiRgBAUb1JQgHAAgGAAIAAAAIgJAAIgMAAAUC1JIgNgBQgcABgcgBIgOABAUC1JIAMAAAT/1JIgCAAQgFAAgFAAAUQ1JQgFAAgGAAATb1KQgPAAgPAAATx1JQgFAAgFAAATx1JQgJAAgKAAATb1KIAaAAAUC1JQgLAAgKAAAT91JIgMAAEAhKgVGIAHAAEghQgUkMAAAAp1MBCaAAAMAAAgqXIAAAAIgUAAQgJAAgKAAIsIgDAJr1QQBzABByABIGLAEAPJ1KIgIAA");
	this.shape_144.setTransform(65.5,267);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.lf(["#0066FD","#FFFFFF","#FFFFFF","#996600","#FFCC00","#FFFFFF"],[0,0.376,0.478,0.502,0.667,1],-337,135.8,88.2,135.8).s().p("AAOAAIgIAAIguAAIAOAAIA2AAIANAAIgVAAg");
	this.shape_145.setTransform(189.5,131.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.lf(["#0EB7E0","#C6FDF7"],[0,1],0,-222.7,0.1,134.6).s().p("EghMAVOMAAAgp1IAAgMIAAgJIAAgOMAwRgADIADAAIAHAAIACAAIALAAIgLAAIAMAAIAKAAIgLAAIAVAAIAHAAIAHAAIAHAAIAGAAIAMAAIAKAAICRABIAvAAIATAAIAMAAIABAAIACAAIAEAAIAMAAIAKAAIMJADIATAAIAUAAMAAAAqXgEghBgJ6MBB/AAAIAArFMhB/AAAg");
	this.shape_146.setTransform(65.1,267.3);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.lf(["#95D7F2","#FFFFFF"],[0,1],0,45.7,0.1,-45.6).s().p("Egg/AFiIAArDMBB/AAAIAALDg");
	this.shape_147.setTransform(64.9,168.3);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#0000FF").s().p("AACgCIgEgOIAFAAIAAAJIAAALIgBANg");
	this.shape_148.setTransform(-147.8,134.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88}]}).wait(39));

	// btn
	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#214DF8").s().p("AAQBFIAAgGIAAgEIAAgZIgtgBIgVgBQgKgBAAgHQAAgEAGgIIAKgLIAyhLQAIgKALAAQAMAAAAALIAABXIAEAAQAUAAAAAKQAAAIgIACQgEABgMAAIAAAoQAAAKgKAAQgLAAAAgQgAgbAMIArACIAAhEQgbAugQAUg");
	this.shape_149.setTransform(-31.5,415.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#214DF8").s().p("AgrBZQgDgDAAgDIABgEQAIgXAXgsQAVgpAJgXQAOgnAHABQAEAAADACQADADAAAEIgBAFIgMAeQgHAUgOAaIgVArIgUArQgCAGgGAAQgEAAgDgDg");
	this.shape_150.setTransform(-43.7,415.3);

	this.score = new cjs.Text("0", "22px 'Comic Sans MS'", "#214DF8");
	this.score.name = "score";
	this.score.textAlign = "center";
	this.score.lineHeight = 33;
	this.score.lineWidth = 44;
	this.score.setTransform(-71.5,406.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#214DF8").s().p("AgFAyQgDgDAAgFIAAgFIgBgGQgBgFAEgDQADgDADAAQAMAAAAAWQAAAFgDADQgEAEgEAAQgDAAgDgEgAgHgaQgDgDAAgFIAAgEIgBgEQAAgFADgDQAEgDAEAAQAKAAAAATQAAAFgDADQgDADgEAAQgDAAgEgDg");
	this.shape_151.setTransform(-87.7,416.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#214DF8").s().p("AgkAuQgQgNAAgZQAAgZANgTQAPgVAYAAQARAAALAGQANAHAAAQQABALgMAIQgGAEgRAGIgnAUQAFAJAKAEQAJAFAKAAQAHAAAKgDQAMgEAFgFQADgGAEAAQAEAAADADQADADAAADQAAAMgUAJQgQAHgPAAQgWAAgQgMgAgVgbQgJAKgEASIAhgOQASgJAHgHQgIgJgQAAQgNAAgIALg");
	this.shape_152.setTransform(-96.7,418.2);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#214DF8").s().p("AgoAxIAAhJIAAgLIAAgLQAAgLAKAAQAKAAAAASQAUgUAYAAQAJABAEAGQAEAHAAAMIAAAIQAAANgKAAQgKAAAAgKIAAgIIAAgJQgRACgJAIQgJAHgGAOIAAA5QAAALgLgBQgJABAAgLg");
	this.shape_153.setTransform(-107.9,418.3);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#214DF8").s().p("AgfAtQgPgPAAgZQgBgWANgTQAPgVAZAAQAVAAALATQAJAQAAAWQAAAXgNAQQgNAUgVAAQgSAAgNgOgAgSgUQgHAMAAANQAAAQAIAJQAHAGAKAAQAKAAAHgHQAJgKABgPQABgogYAAQgNABgJAPg");
	this.shape_154.setTransform(-119.4,418.4);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#214DF8").s().p("AgeAuQgPgOAAgXQAAgTAPgYQAQgZASAAQAKAAANAFQARAGAAAJQAAAFgDADQgDADgEAAQgDgBgCgBIgEgEQgHgFgOAAQgJAAgLAUQgKARAAALQAAAPAKAIQAJAIAMAAQAHAAAHgEIAMgGIAFgCQAEAAADADQADADAAAEQAAAIgRAHQgOAHgKAAQgUAAgPgOg");
	this.shape_155.setTransform(-130.6,418.3);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#214DF8").s().p("AgqBKQgUgJAAgQQAAgFADgDQADgDAEAAQAGAAAEAGQAFAIAFADQAJAGARAAQAPAAAOgHQASgJAAgQQAAgOgPgIQgNgHgRAAQgRAAgMgGQgPgIAAgQQAAgUAVgPQAVgPAUAAQALAAANADQARAFAAAHQAAAJgKAAIgPgCQgKgCgGAAQgPAAgMAIQgMAJAAALQAAAJAQAEQAGABAPABQAZACANAOQANAKAAASQAAAagXAPQgVANgZAAQgUAAgQgHg");
	this.shape_156.setTransform(-143.8,416);

	this.btn_next = new lib.goNext();
	this.btn_next.setTransform(266.8,441.5);
	new cjs.ButtonHelper(this.btn_next, 0, 1, 2, false, new lib.goNext(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_next},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.score},{t:this.shape_150},{t:this.shape_149}]}).wait(39));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-171.5,105,486.7,383.2);


// stage content:
(lib.pred_Quiz0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{quiz1:0});

	// timeline functions:
	this.frame_0 = function() {
		this.btn_menu.addEventListener("click", goMenu.bind(this));
		
		function goMenu(){
		
			window.open ("verb_menu.html","_self");
		 
		}
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