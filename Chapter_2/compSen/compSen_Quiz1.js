(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	manifest: [
		{src:"sounds/colon_spins.mp3?1495224314754", id:"colon_spins"},
		{src:"sounds/right_answer.mp3?1495224314754", id:"right_answer"},
		{src:"sounds/High_Screaming_Gtr.mp3?1495224314754", id:"High_Screaming_Gtr"},
		{src:"sounds/RockGroove.mp3?1495224314754", id:"RockGroove"},
		{src:"sounds/wrong_answer.mp3?1495224314754", id:"wrong_answer"}
	]
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
	this.initialize(mode,startPosition,loop,{firstSet:0,secondSet:10});

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
		
		this.btn_next.addEventListener("click", goNext.bind(this));
		
		function goNext(){
		
			window.open ("compSen_finish.html","_self");
		 
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(9).call(this.frame_18).wait(1));

	// Layer 15
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AHrAGIAAl6AytANIIcAAAqMl0IAAF6AqMF1IAAloIc6AA");
	this.shape.setTransform(61.7,268.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AI3ANIijmBAI3ANIJ3AAAytANIIcAAAqMl0IAAF6AqMF1IAAloITDAA");
	this.shape_1.setTransform(61.7,268.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},10).wait(9));

	// text
	this.result = new cjs.Text("", "bold 20px 'Comic Sans MS'", "#FFFFFF");
	this.result.name = "result";
	this.result.textAlign = "center";
	this.result.lineHeight = 30;
	this.result.lineWidth = 305;
	this.result.setTransform(59.2,323.9);

	this.timeline.addTween(cjs.Tween.get(this.result).wait(19));

	// Layer 16
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000CC").s().p("Ag6BhQgOgNAAgpQAAgRADggQACgiAAgRIgBgNIgBgNQAAgTARAAQAGAAAFADIAcgGQANgCAKAAQAgAAATAIQAMAEAAAMQAAAHgFAFQgFAFgIAAIgFAAQgVgGgTAAIgTACIgXAEIgBAyIAwgEIAegDQAIAAAFAFQAFAFAAAIQAAANgQACIgeACIg0AFIgBAaQAAAZADAEQABABAPAAIAVAAIAYAAIAIgBIAHgBQAHAAAGAEQAGAFAAAIQAAAPgPACQgNADgmAAQgpAAgNgLg");
	this.shape_2.setTransform(229.6,382.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0000CC").s().p("Ag4BNQgSgUAAgbQAAgpAlgsQAfgmAfAAIALABIAHABQAGgGAIAAQANAAADAPQACALAAAOQAAAGgEAGQgEAHgKAAQgLAAgFgNQgDgFgDgBQgBgBgJAAQgQAAgTAZQgdAhAAAeQAAAOAJAJQAKAKANAAQAKAAANgGIATgNQAKgGAFAAQAIAAAFAFQAFAGAAAGQAAAIgGAFQgjAegiAAQgdAAgUgVg");
	this.shape_3.setTransform(213.2,382.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0000CC").s().p("AhYBhQgFgFAAgHIABgQIABgOIAAgXIABgWIgBgXIAAgYIgCgWIgBgYQAAgHAHgGQAGgGAIAAQAKAAAMARQA3BSA4AyIAAgUIgBhSIgBgOIgCgOQAAgSATAAQAUAAAABAIAAAUIgBBPIgCAUQgDAQgPAAQgKAAgKgKQgygsg7hNIgBAmIABAeIAAAfQAAAlgSAAQgJAAgGgGg");
	this.shape_4.setTransform(194.5,382.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0000CC").s().p("Ag6BhQgOgNAAgpQAAgRADggQACgiAAgRIgBgNIgBgNQAAgTARAAQAGAAAFADIAcgGQANgCAKAAQAgAAATAIQAMAEAAAMQAAAHgFAFQgFAFgIAAIgFAAQgVgGgTAAIgTACIgXAEIgBAyIAwgEIAegDQAIAAAFAFQAFAFAAAIQAAANgQACIgeACIg0AFIgBAaQAAAZADAEQABABAPAAIAVAAIAYAAIAIgBIAHgBQAHAAAGAEQAGAFAAAIQAAAPgPACQgNADgmAAQgpAAgNgLg");
	this.shape_5.setTransform(176.1,382.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0000CC").s().p("AgLBcQgGgFAAgIIAAgFIABgGIgBgRIgBgSQABgRgDgbIgDguIgHAAQgcAAgRgEQgOgEAAgNQAAgGAFgFQAFgHAIABIAVACIAUABIAXAAIAVAAIAdABIAdACQAHAAAGAFQAFAFAAAHQAAAHgFAFQgGAFgHAAIgfgBIgegCIADA0QADAfgBATIABANIABAMQAAAKgEAHQgFAKgJAAQgFAAgGgEg");
	this.shape_6.setTransform(158.7,382.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0000CC").s().p("AhEBSQgPgMAAgPQAAgIAFgGQAFgFAIAAQAMAAAFAMQAHAPAaAAQATAAAVgJQAVgKAAgMQAAgQgNgFQgJgDgagBQgXgBgRgGQgYgKABgTQAAgZAbgVQAagUAcAAQANAAASAFQAXAHAAAKQAAAGgFAFQgEAGgIAAQgGAAgMgDQgMgCgHAAQgPAAgNAIQgQAIABAJQAAAFAEADQAFADAJABIAeACQAdACAQAOQASANAAAbQAAAhgmARQgcAMgjAAQggAAgTgOg");
	this.shape_7.setTransform(140.5,383.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0000CC").s().p("Ag7BcQgFgGAAgHQAAgGAGgGQAEgFAJAAIAYgCIAAg5QAAghACgfIgbABQgIAAgFgFQgFgFAAgHQAAgIAFgFQAFgEAGAAIAlgBQAXAAAmAEQAPADAAAPQAAAIgGAFQgFAEgGAAIghgDQgCAWAAAmIAAA4IAjAAQAHAAAFAFQAFAFAAAIQAAAGgFAFQgGAGgHAAIgWAAIgVAAQgHAAgSACIgZACQgIAAgFgEg");
	this.shape_8.setTransform(124.3,383);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0000CC").s().p("AAlBIIgRgYIgQgWIgmArIgYAZQgFAGgHAAQgIAAgFgGQgGgFABgHQgBgGAFgFIAXgZIAtgvIgbghIgPgSQgIgLgIgGQgHgGAAgIQAAgHAFgFQAFgFAIAAQAHAAALAJQAIAHAGAIIAQAUIAVAcIAggqQAYgeAKAAQAGAAAGAFQAGAFAAAHQAAAGgFAFQgRAUgJAMQgJAOgWAaIAbAlQAPAVANAOQAFAGgBAGQAAAHgEAFQgGAFgIAAQgMAAgUgdg");
	this.shape_9.setTransform(107.6,383.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0000CC").s().p("Ag6BhQgOgNAAgpQAAgRADggQACgiAAgRIgBgNIgBgNQAAgTARAAQAGAAAFADIAcgGQANgCAKAAQAgAAATAIQAMAEAAAMQAAAHgFAFQgFAFgIAAIgFAAQgVgGgTAAIgTACIgXAEIgBAyIAwgEIAegDQAIAAAFAFQAFAFAAAIQAAANgQACIgeACIg0AFIgBAaQAAAZADAEQABABAPAAIAVAAIAYAAIAIgBIAHgBQAHAAAGAEQAGAFAAAIQAAAPgPACQgNADgmAAQgpAAgNgLg");
	this.shape_10.setTransform(90.7,382.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0000CC").s().p("AhYBhQgFgFAAgHIABgQIABgOIAAgXIABgWIgBgXIAAgYIgCgWIgBgYQAAgHAHgGQAGgGAIAAQAKAAAMARQA3BSA4AyIAAgUIgBhSIgBgOIgCgOQAAgSATAAQAUAAAABAIAAAUIgBBPIgCAUQgDAQgPAAQgKAAgKgKQgygsg7hNIgBAmIABAeIAAAfQAAAlgSAAQgJAAgGgGg");
	this.shape_11.setTransform(3.2,382.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0000CC").s().p("AhCBOQgcgXAAgkQAAgqAbgjQAegpAsAAQAtABAVAUQAXAVAAAoQAAApgaAjQgcApgsAAQgmgBgagVgAgnglQgUAaABAeQAAAUAQANQAQANAYABQAagBASgbQARgZABgeQgBgagLgLQgMgKgdAAQgaAAgUAbg");
	this.shape_12.setTransform(-17.8,383);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0000CC").s().p("Ag7BcQgFgGAAgHQAAgGAGgGQAEgFAJAAIAYgCIAAg5QAAghACgfIgbABQgIAAgFgFQgFgFAAgHQAAgIAFgFQAEgEAHAAIAmgBQAWAAAmAEQAPADAAAPQAAAIgGAFQgEAEgHAAIghgDQgCAWAAAmIAAA4IAjAAQAHAAAFAFQAFAFAAAIQAAAGgFAFQgFAGgIAAIgWAAIgVAAQgHAAgRACIgaACQgIAAgFgEg");
	this.shape_13.setTransform(-35.3,383);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0000CC").s().p("AgLBcQgGgFAAgIIABgFIABgGIgBgRIgCgSQAAgRgCgbIgDguIgHAAQgdAAgQgEQgOgEAAgNQAAgGAEgFQAFgHAKABIAUACIAUABIAXAAIAVAAIAdABIAdACQAIAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgIAAIgfgBIgegCIADA0QACAfAAATIACANIAAAMQAAAKgEAHQgFAKgJAAQgGAAgFgEg");
	this.shape_14.setTransform(-51.2,382.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0000CC").s().p("Ag4BNQgSgUAAgbQAAgpAlgsQAfgmAfAAIALABIAHABQAGgGAIAAQANAAADAPQACALAAAOQAAAGgEAGQgEAHgKAAQgLAAgFgNQgDgFgDgBQgBgBgJAAQgQAAgTAZQgdAhAAAeQAAAOAJAJQAKAKANAAQAKAAANgGIATgNQAKgGAFAAQAIAAAFAFQAFAGAAAGQAAAIgGAFQgjAegiAAQgdAAgUgVg");
	this.shape_15.setTransform(-68.3,382.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0000CC").s().p("AAsBHQgGgPgGgTIgfADQgRABgLACIgVAqQgFAJgKAAQgHAAgGgFQgFgEAAgIQAAgGATgmIgCgHQAAgGANgEQASgdAVghQAegwAIAAQANAAAGAQIAIApIASBSIAGARQAFALAAAFQAAAHgFAFQgGAFgHAAQgKAAgKgYgAgIALQAFgBALgBIARgBIgIgpIgZAsg");
	this.shape_16.setTransform(-86.1,383.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(19));

	// buttons
	this.btn_wrong = new lib.quiz_btn();
	this.btn_wrong.setTransform(80.2,366,0.92,1);
	new cjs.ButtonHelper(this.btn_wrong, 0, 1, 2, false, new lib.quiz_btn(), 3);

	this.btn_correct = new lib.quiz_btn();
	this.btn_correct.setTransform(-93.9,367.1,0.665,1);
	new cjs.ButtonHelper(this.btn_correct, 0, 1, 2, false, new lib.quiz_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_correct,p:{scaleX:0.665,x:-93.9,y:367.1}},{t:this.btn_wrong,p:{scaleX:0.92,x:80.2}}]}).to({state:[{t:this.btn_correct,p:{scaleX:0.915,x:80.2,y:364.6}},{t:this.btn_wrong,p:{scaleX:0.631,x:-93.9}}]},10).wait(9));

	// Layer 6
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#07C1D6").s().p("AgGA8QgEgFAAgEQAAgEADgCQADgDAEAAQADAAAEAFQAEAEAAAEQAAAEgDADQgEADgEAAQgCAAgEgFgAgFAiQgCgDAAgEIgBgJIAAgJIAAgfIABggQAAgEACgDQADgDADAAQAEAAADADQADADAAAEIAABRQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_17.setTransform(-98.1,118.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#07C1D6").s().p("AgyA6QgDgDAAgFQAAgGAFgHIAIgMIAaggQAOgUANgMIgRAAIgfAAIgCABIgDAAQgFAAgDgCQgDgEgBgFQABgLAQABIAQAAIAPABIAQgBIASAAQAYAAAAAKQAAAHgKAHIgLAHQgNAKgTAVIgZAmIAZgBIAbgBIAQABQAJACABAHQgBAFgDADQgEADgEAAIgHgBIgHAAIgiABIgjAAQgFAAgEgCg");
	this.shape_18.setTransform(-105.4,119);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#07C1D6").s().p("AgjA4QgEgDAAgEQAAgFAEgDQADgDAFAAIAPgBIgBgkQABgTABgTIgQAAQgGAAgCgDQgEgDAAgEQAAgFAEgDQACgCAEgBIAXAAQANAAAXADQAKABAAAKQAAAFgDACQgEADgEAAIgUgCIgBAkIAAAjIAVAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAIgNAAIgOAAIgOACIgPABQgGAAgCgDg");
	this.shape_19.setTransform(-115.4,119);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#07C1D6").s().p("AgeA1QgVgQAAglIABgMIAAgLIAAgJIAAgJQAAgGADgFQADgHAFAAQAFAAADACQADADAAAFIAAANIAAANIAAALIgBALQAAAKADAKQADANAHAEQADADAMAAQATAAAHgjQAEgQAAgiQAAgEADgEQADgFAHAAQAFAAADADQACADAAAEQAAAfgDARQgFAZgNARQgFAIgIAFQgKAGgJAAQgTAAgKgHg");
	this.shape_20.setTransform(-125.7,119.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#07C1D6").s().p("AATAvQgOAFgKAAQgYAAgUgTQgSgTAAgWQAAgcAWgUQAVgTAbAAQAfAAAPAXQAOATAAAdQAAAWgYASIAPANIAJAHQAFAFAAAEQAAAEgEAEQgDADgFAAQgFAAgggdgAAAAeQgMgLAAgHQAAgFAEgDQADgDAFAAQADAAAEAFQAGAJAJAHQATgMAAgOQAAgWgJgNQgKgOgTAAQgTAAgOANQgPANAAATQAAANAMANQANAMAPAAIAFAAIAAAAg");
	this.shape_21.setTransform(-138.3,120.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("AgZBDQgEgEAAgFQAAgGADgFQAFgGAHAAQAGAAADAEQADAEAAAFQAAAFgDAFQgEAGgHAAQgEAAgFgDgAgTAdQgEgDAAgFQAAgHALgJIATgNQAMgIgBgHQABgIgJgHQgIgIgHAAQgFAAgIAGQgIAFgEAAQgFAAgDgEQgEgDAAgFQAAgJAPgHQANgGAJAAQARAAAPAOQAQAOAAASQAAASgSAMIgOAKQgKAGgCAFQgFAFgFAAQgEAAgEgEg");
	this.shape_22.setTransform(147.9,195.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("AgXAtQgOgFAAgJQAAgJALAAQAEAAAHADQAIACAEAAQAQAAAAgHQAAgEgMgGQgQgIgFgCQgNgIAAgNQAAgRATgGQALgEAUAAQAJAAAEACQAGADAAAJQAAAPgIAAQgJAAgCgHIgHAAQgTAAAAAFQAAAEAKAGQASAIAGADQANAIAAAMQAAAPgOAIQgMAGgOAAQgMAAgJgEg");
	this.shape_23.setTransform(138.3,197.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF0000").s().p("AgJBAQgEgEAAgFIgBgQIAAgQIABgUIABgSQAAgEAEgEQADgDAFAAQAEAAADADQADAEAAAEIAAASIgBAUIAAAQIAAAQQAAAFgDAEQgEACgDAAQgFAAgDgCgAgHgrQgEgEAAgFQAAgGAEgEQAFgEADAAQAFAAAFAEQAEAEAAAGQAAAFgEAEQgFADgFAAQgDAAgFgDg");
	this.shape_24.setTransform(131.8,195.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF0000").s().p("AAUBAQgCgHgCgNIgBgVIAAgGIAAgHIAAgHQgBgDgEAAQgJAAgGAHQgEAEgHANQAAAggEAGQgDAHgHAAQgFAAgEgDQgEgDAAgFIABgFQABgCAAgVIAAg5IAAgDIABgOIgBgIIgBgIQAAgFAEgDQADgEAGAAQAIAAADAKQACAFAAALIgBASIAAARQAGgGAIgEQAFgDAIAAQAPAAAHAJQAFAGABALIABAWIACARIADARIAAADQAAAFgEAEQgDADgFAAQgJAAgDgJg");
	this.shape_25.setTransform(124,194.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF0000").s().p("AgGA9QgEgDAAgFIAAgKIAAgJIgCgsIgQgBQgLgBAAgKQAAgFADgEQAEgDAFAAIAPABIgBgJIAAgJQABgFADgDQADgEAFAAQALAAABAWIAAAIIAJgBQAKAAADABQAHADAAAIQAAAFgDADQgEADgFAAIgFAAIgDAAIgJABIACAsIAAAFIAAAFQgBAUgMAAQgDAAgDgDg");
	this.shape_26.setTransform(114.4,195.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF0000").s().p("AgXAtQgOgFAAgJQAAgJALAAQAEAAAHADQAIACAEAAQAQAAAAgHQAAgEgMgGQgQgIgFgCQgNgIAAgNQAAgRATgGQALgEAUAAQAJAAAEACQAGADAAAJQAAAPgIAAQgJAAgCgHIgHAAQgTAAAAAFQAAAEAKAGQASAIAGADQANAIAAAMQAAAPgOAIQgMAGgOAAQgMAAgJgEg");
	this.shape_27.setTransform(97.8,197.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF0000").s().p("AgJBAQgEgEAAgFIgBgQIAAgQIABgUIABgSQAAgEAEgEQADgDAFAAQAEAAADADQADAEAAAEIAAASIgBAUIAAAQIAAAQQAAAFgDAEQgEACgDAAQgFAAgDgCgAgHgrQgEgEAAgFQAAgGAEgEQAFgEADAAQAFAAAFAEQAEAEAAAGQAAAFgEAEQgFADgFAAQgDAAgFgDg");
	this.shape_28.setTransform(91.3,195.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF0000").s().p("AgGAyQgEgDAAgFIgCgdIgCgcIgBgJQgKAGgKAOIgCABIAAAaIAAAHIgBAGQAAAFgEADQgDACgFAAQgIAAgCgGQgCgFAAgJIAAgfIgBgNIAAgNQAAgIADgGQADgIAHAAQAFAAADAEQAEAEAAAEIgBAIQAOgPAMAAQANAAAEAKQAGgFAGgCQAHgDAHAAQASAAAGASQABADADAUIAGAuQAAAFgEADQgDADgFAAQgLAAgBgKIgEgZIgCgYQgDgQgDAAQgDAAgHAEIgKAHQAAAKACARQADATAAAKQAAAFgEADQgDAEgGAAQgDAAgDgEg");
	this.shape_29.setTransform(73.9,197.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF0000").s().p("AgiAtQgCgDAAgFIAAg4IAAgIIAAgIQAAgFADgDQADgDAFAAQAKAAACAKQAOgMASAAQASAAAAAXIAAAGQAAAOgMAAQgLAAAAgMIAAgIQgSADgJARIAAAqQAAAFgDADQgDAEgGAAQgGAAgDgEg");
	this.shape_30.setTransform(62.6,197.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF0000").s().p("AgcAlQgMgNgBgUQgBgSAMgPQANgSAWAAQARAAALAPQAJAMAAATQAAASgLAOQgMAQgTABQgQAAgMgLgAgLgOQgGAJAAAJQAAAKAGAGQAFAFAGgBQAGAAAGgEQAGgHABgKQABgbgQABQgJgBgGAKg");
	this.shape_31.setTransform(53.3,197.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF0000").s().p("AgPBKQgEgEAAgEIAAgDQACgMAAgLIAAgqIgFABIgGAAQgFAAgEgDQgDgDAAgGQAAgIAJgCIAPgCIABgKQADgTAIgKQAIgMAVAAQAQAAAAAMQAAALgPAAQgKAAgFAIQgEAFgBAMIgBACIASgBQAQAAAAAMQAAALgRAAIgRABIAAAVIAAAYQAAAQgCAJQgCAKgIAAQgFAAgDgDg");
	this.shape_32.setTransform(44,195.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF0000").s().p("AAUBAQgCgHgCgNIgBgVIAAgGIAAgHIAAgHQgBgDgEAAQgJAAgGAHQgEAEgHANQAAAggEAGQgDAHgHAAQgFAAgEgDQgEgDAAgFIABgFQABgCAAgVIAAg5IAAgDIABgOIgBgIIgBgIQAAgFAEgDQADgEAGAAQAIAAADAKQACAFAAALIgBASIAAARQAGgGAIgEQAFgDAIAAQAPAAAHAJQAFAGABALIABAWIACARIADARIAAADQAAAFgEAEQgDADgFAAQgJAAgDgJg");
	this.shape_33.setTransform(26.7,194.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF0000").s().p("AgaAmQgOgMAAgTQAAgPAMgTQAOgVASAAQAIAAAMAFQAPAGABAIQAAAFgEACQgDAEgEAAQgFAAgFgEQgFgEgKAAQgGAAgIAOQgHAMAAAHQAAAJAHAGQAGAFAJAAQAFAAAJgFQAJgEACAAQAFAAADADQADAEAAAFQAAAGgPAHQgNAGgIAAQgSAAgNgLg");
	this.shape_34.setTransform(16.5,197.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF0000").s().p("AgKBAQgDgEAAgFIAAgQIgBgQIABgUIABgSQAAgEADgEQAEgDAFAAQADAAAEADQADAEAAAEIgBASIgBAUIABAQIAAAQQAAAFgEAEQgDACgDAAQgGAAgDgCgAgHgrQgEgEAAgFQAAgGAEgEQAFgEADAAQAFAAAFAEQAEAEAAAGQAAAFgEAEQgFADgFAAQgDAAgFgDg");
	this.shape_35.setTransform(9.8,195.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF0000").s().p("AAUBAQgCgHgCgNIgBgVIAAgGIAAgHIAAgHQgBgDgEAAQgJAAgGAHQgEAEgHANQAAAggEAGQgDAHgHAAQgFAAgEgDQgEgDAAgFIABgFQABgCAAgVIAAg5IAAgDIABgOIgBgIIgBgIQAAgFAEgDQADgEAGAAQAIAAADAKQACAFAAALIgBASIAAARQAGgGAIgEQAFgDAIAAQAPAAAHAJQAFAGABALIABAWIACARIADARIAAADQAAAFgEAEQgDADgFAAQgJAAgDgJg");
	this.shape_36.setTransform(2,194.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF0000").s().p("AARBEQgEgDgBgFQgEgKgBgHIgIg2QgHAPgGAOQgKAVgDAMIABAFQAAAFgFADQgEADgGAAQgFAAgFgDQgFgEABgGIgEgKIgJgpQgGgTgOgmIAAgFQAAgFAEgDQADgDAFAAQAHAAAFAGIAEALQAJAZAKAtQAIgRAHgVIAKgbQAJgTAHAAQAIAAAEAJQACAEACAMIACASQACAPAJAmIAZg9IAFgQQACgKAEgGQAFgGAGAAQAGAAADAEQAEADAAAFIgDAJIgEAJIgEAPIgQAkIgRAmIgGAOQgFAIgHAAQgFAAgFgDg");
	this.shape_37.setTransform(-12.7,195.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgHAGQgDgDAAgDQAAgCADgDQAEgDADAAQAEAAADADQAEADAAACQAAADgEADQgDADgEAAQgDAAgEgDg");
	this.shape_38.setTransform(228.9,175.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgFAvQgCgDAAgDIAAgIIAAgHIgBghIgNgCQgJgBAAgIQAAgDADgDQACgDAEAAIAMACIAAgIIAAgHQAAgDADgDQACgCAEAAQAIAAAAARIAAAFIAHgBQAIAAADACQAFACAAAGQAAAEgDACQgCADgFAAIgCAAIgEAAIgGABIABAiIAAADIAAADQAAARgKgBQgCABgDgDg");
	this.shape_39.setTransform(222.6,171.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAOAfIgDgOIgBgOIABgFIAAgGIAAgCIAAgDQAAgGgDAAQgFAAgEAIQgFAHgDAKIgBAGIAAAGIgBAGIAAAGQAAAEgEADQgCACgEAAQgEAAgDgCQgCgDAAgEIgBgGIgBgGIACgSIABgRIAAgGIgBgGQAAgEADgDQADgCAEAAQAIAAABAKIABABQAKgKAIAAQANAAAFALQADAHAAAPIAAAEIAAADIACAOIACANQAAAEgEADQgCACgEAAQgIAAgBgIg");
	this.shape_40.setTransform(215.7,172.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgWAdQgMgJABgPQgBgPAKgMQAKgOAPAAQAMAAAIAEQAKAFAAALQAAAHgIAGIgQAGIgUAKQACAEAGACQAEABAEAAQAJAAAHgDQAFgEAEAAQAGAAAAAHQAAAIgLAFQgJAEgLAAQgPAAgKgIgAgIgPQgEAEgDAJIAPgHQAIgEAFgEQgEgCgIAAQgEAAgFAEg");
	this.shape_41.setTransform(207.9,172.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgaAjQgCgCAAgEIAAgrIABgGIAAgHQgBgDADgDQACgDAFAAQAHAAACAIQAKgJAOAAQAOAAAAASIAAAFQgBAKgJAAQgIAAgBgIIAAgHQgNACgGANIAAAhQAAAEgDACQgDADgEAAQgFAAgCgDg");
	this.shape_42.setTransform(200.8,172.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgWAdQgMgJAAgPQAAgPAKgMQAKgOAPAAQAMAAAIAEQAKAFAAALQAAAHgIAGIgQAGIgUAKQADAEAEACQAFABAEAAQAJAAAGgDQAGgEADAAQAIAAgBAHQAAAIgLAFQgJAEgLAAQgOAAgLgIgAgIgPQgFAEgCAJIAPgHQAIgEAFgEQgFgCgHAAQgFAAgEAEg");
	this.shape_43.setTransform(193.3,172.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgMA5QgDgCAAgEIABgCIABgSIAAggIgEAAIgEABQgEAAgDgDQgDgCAAgEQAAgHAHgCIAMgBIABgIQACgPAGgHQAGgKAQAAQANAAAAAJQAAAJgMAAQgIAAgEAGQgDAEgBAKIAAACIANgBQANAAAAAIQAAAJgOAAIgNABIAAAQIABATQAAAMgCAHQgCAIgFAAQgEAAgDgDg");
	this.shape_44.setTransform(185.8,170.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgMA5QgDgCAAgEIABgCIABgSIAAggIgEAAIgEABQgEAAgDgDQgDgCAAgEQAAgHAHgCIAMgBIABgIQACgPAGgHQAGgKAQAAQANAAAAAJQAAAJgMAAQgIAAgEAGQgDAEgBAKIAAACIANgBQANAAAAAIQAAAJgOAAIgNABIAAAQIABATQAAAMgCAHQgCAIgFAAQgEAAgDgDg");
	this.shape_45.setTransform(178.7,170.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgHAxQgDgCAAgEIAAgNIgBgMIABgQIABgNQAAgEADgCQACgDAEAAQADAAACADQADACAAAEIgBANIAAAQIAAAMIAAANQAAAEgDACQgCADgCAAQgFAAgCgDgAgFghQgDgDAAgFQAAgEADgDQADgDADAAQAEAAADADQADADAAAEQAAAFgDADQgDADgEAAQgDAAgDgDg");
	this.shape_46.setTransform(173.5,170.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AASAzQgEADgFABIgJAAQgPABgKgKQgKgKAAgPQAAgTAKgJQAKgMAPABIAJAAQAEACADACIACggQACgJAHAAQAEABADACQACADAAADIgBAeIgCAcQAAAYACAJIAAACQAAADgDADQgDACgDAAQgFABgDgFgAgNADQgFAFAAAMQAAAIAGAFQAFAFAHAAIAGgBIAHgEIACgCIAAgZQgCgFgEgBQgEgBgFAAQgIAAgFAEg");
	this.shape_47.setTransform(167.2,170.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgWAdQgLgJAAgPQAAgPAJgMQAKgOAPAAQAMAAAIAEQAKAFAAALQAAAHgIAGIgQAGIgUAKQACAEAGACQAEABAEAAQAJAAAHgDQAFgEAEAAQAGAAAAAHQABAIgMAFQgKAEgKAAQgPAAgKgIgAgIgPQgFAEgCAJIAPgHQAHgEAGgEQgFgCgHAAQgFAAgEAEg");
	this.shape_48.setTransform(153.1,172.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgaAjQgCgCAAgEIAAgrIAAgGIAAgHQABgDACgDQACgDAEAAQAIAAABAIQAKgJAPAAQAOAAAAASIAAAFQgBAKgJAAQgIAAgBgIIAAgHQgNACgHANIAAAhQAAAEgCACQgDADgEAAQgFAAgCgDg");
	this.shape_49.setTransform(146,172.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AAQAfIgLAFIgGABQgQAAgJgJQgIgJAAgRQAAgPAMgLQAMgMAPAAQAHAAAIAEQALAEAAAGQgBAAAAABQAAAAAAABQAAABAAAAQgBAAAAABIgBAHIAAAJQAAALACAGIACAHIADAHQAAADgDADQgDACgDAAQgDAAgHgGgAgJgMQgGAHAAAHQAAAKADAEQADAFAHAAIAGgCIAHgEIgCgWIABgFIAAgGIgCgBIgCgBQgHAAgIAIg");
	this.shape_50.setTransform(138.7,172.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgkAsQgIgGAAgJQAAgEADgDQACgDAFAAQAGAAADAHQAEAIANAAQAKAAALgFQAMgFAAgHQAAgIgHgDQgGgCgNAAQgMgBgJgDQgNgEABgLQAAgNAOgLQAOgMAPAAQAGAAAKAEQAMADAAAFQAAAEgCADQgDADgEAAIgKgCIgJgBQgJAAgGAEQgIAEAAAFQAAADACACIAIACIAPABQAPABAJAIQAKAGAAAOQAAASgUAJQgQAHgRAAQgSAAgKgIg");
	this.shape_51.setTransform(123.8,170.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AggAzQgDgDAAgEIAAhHIgBgJIABgJQAAgGALgCQAGgBAMAAQALAAAMAIQANAKAAAPQAAAHgDAGQgBAEgHAEQAHADAGAGQAFAHAAAIQAAAJgKAIQgGAFgHADQgPAGgYAAQgEAAgDgEgAgRAkQAMgBAMgDQAMgEgBgEQAAgFgHgEQgGgEgFAAIgRAAgAgRgjIAAAPIAAANIAJABQAUgBgBgOQAAgFgFgEQgGgGgGAAIgLABg");
	this.shape_52.setTransform(114.8,170.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgkAyQgCgCgBgEIAAgPIAAgQIAAg1QAAgEADgEQAEgFAGABIARABQAJABAFAEQAdAOAAAWQAAAJgFAFQgHAHgMAEQASALAKAKQABADAAADQAAAEgCADQgDADgEAAQgEAAgDgDQgVgUgXgHIABAWQAAAEgCACQgDADgEAAQgEAAgDgDgAgUABIADAAQARAAAGgCIAGgEQADgDAAgCQAAgIgKgHQgGgGgLgBIgIgBg");
	this.shape_53.setTransform(105.8,170.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgeA0QgIgHAAgWIACgaIABgbIgBgHIgBgHQAAgLAKAAQADAAADACIAPgDIALgBQARAAALAEQAGACAAAHQAAADgCADQgDADgEAAIgDAAQgLgDgLAAIgJABIgMACIgBAbIAZgDIAQgBQAEAAADADQADACAAAFQAAAGgJABIgQABIgbADIgBAOQAAANACACIAJABIAKAAIANAAIAEgBIAEAAQAEAAADACQADACAAAFQAAAIgIABQgHACgTAAQgXAAgGgGg");
	this.shape_54.setTransform(97,170.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgOAwQgIgUgKgjIgFgTQgFgNAAgFQAAgEAEgCQADgDADAAQAGAAADAHIADAMIAGAWIALAhIAOgoIAGgQQAEgKAFgFQADgEAEAAQADAAADADQAEADAAAEIgCAFQgEAFgDAIIgFANIgTAuQgDAIgEAIQgDAGgEAAQgGAAgEgHg");
	this.shape_55.setTransform(87.8,170.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgeA0QgIgHAAgWIACgaIABgbIgBgHIgBgHQAAgLAKAAQADAAADACIAPgDIALgBQARAAALAEQAGACAAAHQAAADgCADQgDADgEAAIgDAAQgLgDgLAAIgJABIgMACIgBAbIAZgDIAQgBQAEAAADADQADACAAAFQAAAGgJABIgQABIgbADIgBAOQAAANACACIAJABIAKAAIANAAIAEgBIAEAAQAEAAADACQADACAAAFQAAAIgIABQgHACgTAAQgXAAgGgGg");
	this.shape_56.setTransform(72.7,170.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgdApQgKgLAAgOQAAgVAUgYQARgUAPAAIAGAAIAEABQADgDAEAAQAHAAACAIIABANQAAADgCADQgCAEgFAAQgGAAgDgHQgBAAAAgBQAAgBgBAAQAAgBAAAAQgBAAAAAAIgGgBQgIAAgJAOQgQARAAAQQAAAHAFAGQAFAFAHAAQAFAAAHgEIAKgGQAFgEADAAQAEAAADADQADADAAADQAAAFgEADQgTAPgRAAQgQAAgKgLg");
	this.shape_57.setTransform(63.9,170.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgvA0QgCgDAAgEIAAgIIAAgIIABgMIAAgMIAAgLIAAgNIgBgNIgBgMQAAgEADgDQAEgDAEAAQAGAAAGAIQAdAtAeAaIAAgLIgBgrIgBgIIAAgHQAAgJAKAAQALAAAAAiIAAALIgBApIgBALQgBAJgJAAQgFAAgFgGQgbgYgfgoIAAATIAAARIAAAQQAAAUgKAAQgEAAgEgDg");
	this.shape_58.setTransform(53.8,170.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgeA0QgIgHAAgWIACgaIABgbIgBgHIgBgHQAAgLAKAAQADAAADACIAPgDIALgBQARAAALAEQAGACAAAHQAAADgCADQgDADgEAAIgDAAQgLgDgLAAIgJABIgMACIgBAbIAZgDIAQgBQAEAAADADQADACAAAFQAAAGgJABIgQABIgbADIgBAOQAAANACACIAJABIAKAAIANAAIAEgBIAEAAQAEAAADACQADACAAAFQAAAIgIABQgHACgTAAQgXAAgGgGg");
	this.shape_59.setTransform(43.9,170.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgFAxQgDgCAAgEIAAgDIABgDIgBgKIAAgJIgCgXIgCgZIgDAAQgQAAgIgCQgIgCAAgHQAAgEACgCQADgEAFABIALABIALABIAMgBIALAAIAPABIAQABQAEAAADACQACADAAAEQAAAEgCADQgDACgEAAIgRAAIgQgBIABAcIACAZIAAAHIABAHQAAAFgCAFQgDAFgFAAQgCAAgDgDg");
	this.shape_60.setTransform(34.5,170.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgkAsQgIgGAAgJQAAgEADgDQACgDAFAAQAGAAADAHQAEAIANAAQAKAAALgFQAMgFAAgHQAAgIgHgDQgGgCgNAAQgMgBgJgDQgNgEABgLQAAgNAOgLQAOgMAPAAQAGAAAKAEQAMADAAAFQAAAEgCADQgDADgEAAIgKgCIgJgBQgJAAgGAEQgIAEAAAFQAAADACACIAIACIAPABQAPABAJAIQAKAGAAAOQAAASgUAJQgQAHgRAAQgSAAgKgIg");
	this.shape_61.setTransform(24.8,170.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgfAxQgDgDAAgEQAAgDADgDQADgDAEAAIANgBIAAgfQAAgQACgRIgPAAQgEAAgDgCQgDgDAAgEQAAgEADgDQACgCAEAAIAUgBQALAAAVADQAIABAAAIQAAAFgDACQgDACgDAAIgSgBIgBAfIAAAfIASgBQAEAAADADQADADAAAEQAAAEgDACQgDADgEAAIgMAAIgLAAIgMACIgOABQgEAAgDgDg");
	this.shape_62.setTransform(16,170.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AATAnIgJgNIgIgMIgUAXIgMAOQgDACgFAAQgEAAgDgCQgCgDAAgEQAAgDACgDIANgNIAXgZIgOgRIgHgKIgJgJQgEgEAAgEQAAgDADgDQACgDAEAAQAEAAAGAFIAHAIIAJALIALAPIARgXQANgQAFAAQAEAAADADQADACAAAEQAAADgDADIgNARIgRAVIAOAUIAPATQADADAAADQAAAEgDADQgDACgEAAQgHAAgLgPg");
	this.shape_63.setTransform(7.1,170.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgeA0QgIgHAAgWIACgaIABgbIgBgHIgBgHQAAgLAKAAQADAAADACIAPgDIALgBQARAAALAEQAGACAAAHQAAADgCADQgDADgEAAIgDAAQgLgDgLAAIgJABIgMACIgBAbIAZgDIAQgBQAEAAADADQADACAAAFQAAAGgJABIgQABIgbADIgBAOQAAANACACIAJABIAKAAIANAAIAEgBIAEAAQAEAAADACQADACAAAFQAAAIgIABQgHACgTAAQgXAAgGgGg");
	this.shape_64.setTransform(-2.1,170.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AASAzQgEADgFABIgJAAQgPABgKgKQgKgKAAgPQAAgTAKgJQAKgMAPABIAJAAQAEACADACIACggQACgJAHAAQAEABADACQACADAAADIgBAeIgCAcQAAAYACAJIAAACQAAADgDADQgDACgDAAQgFABgDgFgAgNADQgFAFAAAMQAAAIAGAFQAFAFAHAAIAGgBIAHgEIACgCIAAgZQgCgFgEgBQgEgBgFAAQgIAAgFAEg");
	this.shape_65.setTransform(-16.9,170.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AANAfIgCgOIgBgOIABgFIAAgGIAAgCIAAgDQAAgGgCAAQgHAAgDAIQgFAHgDAKIgCAGIAAAGIAAAGIgBAGQAAAEgDADQgCACgEAAQgEAAgDgCQgCgDgBgEIAAgGIgBgGIABgSIABgRIAAgGIAAgGQAAgEADgDQACgCAEAAQAKAAAAAKIAAABQAKgKAKAAQANAAAEALQADAHAAAPIAAAEIAAADIACAOIABANQAAAEgDADQgCACgEAAQgJAAgBgIg");
	this.shape_66.setTransform(-24.5,172.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAQAfIgLAFIgGABQgRAAgIgJQgIgJAAgRQAAgPAMgLQAMgMAPAAQAGAAAJAEQALAEAAAGQAAAAgBABQAAAAAAABQAAABAAAAQgBAAAAABIgBAHIgBAJQABALACAGIACAHIADAHQAAADgDADQgCACgEAAQgDAAgHgGgAgJgMQgGAHAAAHQAAAKADAEQAEAFAGAAIAGgCIAHgEIgCgWIAAgFIABgGIgCgBIgCgBQgHAAgIAIg");
	this.shape_67.setTransform(-32.1,172.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AguA0QgDgDAAgEIAAgIIAAgIIABgMIAAgMIAAgLIAAgNIgBgNIgBgMQAAgEAEgDQADgDAEAAQAGAAAGAIQAdAtAeAaIABgLIgCgrIgBgIIAAgHQAAgJAKAAQALAAAAAiIAAALIAAApIgCALQgBAJgJAAQgEAAgHgGQgagYgfgoIAAATIAAARIABAQQAAAUgLAAQgEAAgDgDg");
	this.shape_68.setTransform(-47.8,170.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgjAqQgPgNAAgTQAAgWAOgTQARgVAXAAQAXAAAMALQAMALAAAWQAAAVgNATQgQAVgXAAQgUAAgOgLgAgVgTQgKAOAAAPQAAALAJAHQAJAHAMAAQAOAAAKgPQAJgNAAgPQAAgPgHgFQgGgGgPAAQgOAAgLAPg");
	this.shape_69.setTransform(-59.1,170.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgfAxQgDgDAAgEQAAgDADgDQADgDAEAAIANgBIAAgfQAAgQACgRIgPAAQgEAAgDgCQgDgDAAgEQAAgEADgDQACgCAEAAIAUgBQALAAAVADQAIABAAAIQAAAFgDACQgDACgDAAIgSgBIgBAfIAAAfIASgBQAEAAADADQADADAAAEQAAAEgDACQgDADgEAAIgMAAIgLAAIgMACIgOABQgEAAgDgDg");
	this.shape_70.setTransform(-68.6,170.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgFAxQgDgCAAgEIAAgDIABgDIgBgKIAAgJIgCgXIgCgZIgDAAQgQAAgIgCQgIgCAAgHQAAgEACgCQADgEAFABIALABIALABIAMgBIALAAIAPABIAQABQAEAAADACQACADAAAEQAAAEgCADQgDACgEAAIgRAAIgQgBIABAcIACAZIAAAHIABAHQAAAFgCAFQgDAFgFAAQgCAAgDgDg");
	this.shape_71.setTransform(-77.2,170.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgdApQgKgLAAgOQAAgVAUgYQARgUAPAAIAGAAIAEABQADgDAEAAQAHAAACAIIABANQAAADgCADQgCAEgFAAQgGAAgDgHQgBAAAAgBQAAgBgBAAQAAgBgBAAQAAAAAAAAIgGgBQgIAAgJAOQgQARAAAQQAAAHAFAGQAFAFAHAAQAFAAAHgEIAKgGQAFgEADAAQAEAAADADQADADAAADQAAAFgEADQgTAPgRAAQgQAAgKgLg");
	this.shape_72.setTransform(-86.3,170.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AAYAmQgEgHgCgMIgRACIgPACIgLAWQgCAGgGAAQgEgBgDgCQgDgCAAgEQAAgEAKgUIgBgEQABgEAGgCIAVggQAPgaAEAAQAIAAADAJIAEAWIAKArIAEAJQACAGAAADQAAAEgDADQgDACgDAAQgGAAgFgNgAgEAGIAIgBIAJgBIgEgVIgNAXg");
	this.shape_73.setTransform(-95.9,170.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgiArQAAgDADgDQACgCAEAAIAIABIALABQAIAAAFgGQAEgGACgNQgEADgEACQgFACgDAAQgNAAgJgJQgJgJABgMQAAgSALgMQAMgMARAAQAHAAAFACQAEABADAEQAJABAAAJIgCANQgDAQAAAPQgBAWgGAKQgKAOgUAAQgbAAAAgLgAgJgeQgGAHAAALQAAAIADAEQAEADAFAAQAEAAAFgFQAGgGABgGIADgUIgFgCIgEgBQgKAAgGAHg");
	this.shape_74.setTransform(229,152.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AANAfIgCgOIgBgOIABgFIAAgGIAAgCIAAgDQAAgGgCAAQgGAAgEAIQgFAHgDAKIgBAGIAAAGIgBAGIgBAGQAAAEgDADQgCACgEAAQgEAAgDgCQgDgDAAgEIAAgGIgBgGIABgSIABgRIAAgGIAAgGQAAgEADgDQACgCAEAAQAKAAAAAKIABABQAJgKAKAAQANAAAEALQAEAHgBAPIAAAEIAAADIACAOIACANQgBAEgDADQgCACgEAAQgIAAgCgIg");
	this.shape_75.setTransform(221.8,150.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgHAxQgDgCAAgEIAAgNIgBgMIABgQIABgNQAAgEADgCQACgDAEAAQADAAACADQADACAAAEIgBANIAAAQIAAAMIAAANQAAAEgDACQgCADgCAAQgFAAgCgDgAgFghQgDgDAAgFQAAgEADgDQADgDADAAQAEAAADADQADADAAAEQAAAFgDADQgDADgEAAQgDAAgDgDg");
	this.shape_76.setTransform(216.3,149);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AACAVIgCgVIgCACIgKAaIgEAFQgDAEgFAAQgDABgEgGQgDgGgDgKIgHgjIAAgJQAAgEACgCQADgDAEAAQAHAAACAHIABAKIABAJIAEAQIALghQADgJAGAAQAHAAACAKIAEASIAEASIAKgoQACgGAHAAQAEAAADADQADACgBAEIAAACIgOAvQgCAGgEAGQgEAFgFAAQgJAAgFgRg");
	this.shape_77.setTransform(209.4,150.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgVAdQgKgKAAgQQgBgNAJgMQAKgOARAAQAOAAAIALQAHAKAAAOQAAAOgJALQgJANgPAAQgMAAgJgIgAgIgKQgEAHAAAGQAAAIAEAEQAEAEAEAAQAFAAAEgEQAFgFABgIQAAgUgMAAQgGAAgFAIg");
	this.shape_78.setTransform(200.7,150.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgFA1QgDgDAAgEIAAhcQAAgEADgDQADgCACAAQAEAAACACQADADAAAEIAABZQAAANgJAAQgDAAgCgDg");
	this.shape_79.setTransform(195.2,148.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgFA1QgDgDAAgEIAAhcQAAgEADgDQADgCACAAQAEAAACACQADADAAAEIAABZQAAANgJAAQgCAAgDgDg");
	this.shape_80.setTransform(191.3,148.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgVAdQgKgKAAgQQgBgNAJgMQAKgOARAAQAOAAAIALQAHAKAAAOQAAAOgJALQgJANgPAAQgMAAgJgIgAgIgKQgEAHAAAGQAAAIAEAEQAEAEAEAAQAFAAAEgEQAFgFABgIQAAgUgMAAQgGAAgFAIg");
	this.shape_81.setTransform(185.7,150.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgMA5QgDgCAAgEIABgCIABgSIAAggIgEAAIgEABQgEAAgDgDQgDgCAAgEQAAgHAHgCQADgBAJAAIABgIQACgPAGgHQAGgKAQAAQANAAAAAJQAAAJgMAAQgIAAgEAGQgDAEgBAKIAAACIANgBQANAAAAAIQAAAJgOAAIgNABIAAAQIABATQAAAMgCAHQgCAIgFAAQgEAAgDgDg");
	this.shape_82.setTransform(178.5,149.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgkAsQgIgGAAgJQAAgEADgDQACgDAFAAQAGAAADAHQAEAIANAAQAKAAALgFQAMgFAAgHQAAgIgHgDQgGgCgNAAQgMgBgJgDQgNgEABgLQAAgNAOgLQAOgMAPAAQAGAAAKAEQAMADAAAFQAAAEgCADQgDADgEAAIgKgCIgJgBQgJAAgGAEQgIAEAAAFQAAADACACIAIACIAPABQAPABAJAIQAKAGAAAOQAAASgUAJQgQAHgRAAQgSAAgKgIg");
	this.shape_83.setTransform(164.1,149.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgFAxQgDgCAAgEIAAgDIABgDIgBgKIAAgJIgCgXIgCgZIgDAAQgQAAgIgCQgIgCAAgHQAAgEACgCQADgEAFABIALABIALABIAMgBIALAAIAPABIAQABQAEAAADACQACADAAAEQAAAEgCADQgDACgEAAIgRAAIgQgBIABAcIACAZIAAAHIABAHQAAAFgCAFQgDAFgFAAQgCAAgDgDg");
	this.shape_84.setTransform(154.4,148.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgvA0QgCgDAAgEIAAgIIAAgIIABgMIAAgMIAAgLIAAgNIgBgNIgBgMQAAgEADgDQAEgDAEAAQAGAAAGAIQAdAtAeAaIAAgLIgBgrIgBgIIAAgHQAAgJAKAAQALAAAAAiIAAALIgBApIgBALQgBAJgJAAQgFAAgGgGQgagYgfgoIAAATIAAARIAAAQQAAAUgKAAQgEAAgEgDg");
	this.shape_85.setTransform(143.8,149);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgeA0QgIgHAAgWIACgaIABgbIgBgHIgBgHQAAgLAKAAQADAAADACIAPgDIALgBQARAAALAEQAGACAAAHQAAADgCADQgDADgEAAIgDAAQgLgDgLAAIgJABIgMACIgBAbIAZgDIAQgBQAEAAADADQADACAAAFQAAAGgJABIgQABIgbADIgBAOQAAANACACIAJABIAKAAIANAAIAEgBIAEAAQAEAAADACQADACAAAFQAAAIgIABQgHACgTAAQgXAAgGgGg");
	this.shape_86.setTransform(133.9,148.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AAkAsIgDgQIgHgiIgKAbIgFANQgCAHgDAFQgDAGgFAAQgGAAgEgHIgEgNIgKgjIgIAgIgCAPQgDAKgIAAQgEAAgDgDQgCgDAAgEQgBgLAFgQIAIgYIAEgVQADgPADgFQAEgFAFAAQAHAAACAHQAEAGADASQACASAHASQAFgSAHgYIAEgQQAEgKAHAAQAHAAAEAMIAEARQADAbAHAVIAFAXQAAAEgDACQgCADgFAAQgHAAgEgLg");
	this.shape_87.setTransform(123.3,149.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgeA0QgIgHAAgWIACgaIABgbIgBgHIgBgHQAAgLAKAAQADAAADACIAPgDIALgBQARAAALAEQAGACAAAHQAAADgCADQgDADgEAAIgDAAQgLgDgLAAIgJABIgMACIgBAbIAZgDIAQgBQAEAAADADQADACAAAFQAAAGgJABIgQABIgbADIgBAOQAAANACACIAJABIAKAAIANAAIAEgBIAEAAQAEAAADACQADACAAAFQAAAIgIABQgHACgTAAQgXAAgGgGg");
	this.shape_88.setTransform(112.8,148.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgjAoIABgVQACgbABglQAAgEACgCQADgDAEgBQAEABACADQAEACAAAEQAAAlgDAcIgBARQAQgBAYgHIADAAQAEAAADACQACADAAAEQAAAGgGADQgIADgQADQgOACgKABQgRgBAAgPg");
	this.shape_89.setTransform(104.6,149.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgeA0QgCgDAAgDIAAgTIABgeIACgfQAAgTAKACIAGgBIAKgBQALAAAMAJQANAJAAAOQAAASgOAIQgMAJgPAAIgGAAIAAAgQAAADgDADQgCACgEAAQgEAAgDgCgAgLgZIgCAXIAFABQAJAAAHgFQAHgFAAgKQAAgFgHgFQgHgFgGABIgDAAIgDAAIAAAKg");
	this.shape_90.setTransform(96.9,148.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AAkAsIgDgQIgIgiIgJAbIgEANQgDAHgDAFQgDAGgFAAQgHAAgDgHIgEgNIgKgjIgIAgIgCAPQgDAKgIAAQgFAAgDgDQgBgDAAgEQgBgLAFgQIAHgYIAFgVQADgPADgFQAEgFAFAAQAHAAACAHQAEAGACASQAEASAFASQAHgSAGgYIAEgQQADgKAIAAQAHAAAFAMIADARQAEAbAGAVIAGAXQAAAEgEACQgCADgEAAQgIAAgEgLg");
	this.shape_91.setTransform(87.1,149.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgjAqQgPgNAAgTQAAgWAOgTQARgVAXAAQAXAAAMALQAMALAAAWQAAAVgNATQgQAVgXAAQgUAAgOgLgAgVgTQgKAOAAAPQAAALAJAHQAJAHAMAAQAOAAAKgPQAJgNAAgPQAAgPgHgFQgGgGgPAAQgOAAgLAPg");
	this.shape_92.setTransform(75.1,149.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgdApQgKgLAAgOQAAgVAUgYQARgUAPAAIAGAAIAEABQADgDAEAAQAHAAACAIIABANQAAADgCADQgCAEgFAAQgGAAgDgHQgBgBAAAAQAAgBgBAAQAAgBgBAAQAAAAAAAAIgGgBQgIAAgJAOQgQARAAAQQAAAHAFAGQAFAFAHAAQAFAAAHgEIAKgGQAFgEADAAQAEAAADADQADADAAADQAAAFgEADQgTAPgRAAQgQAAgKgLg");
	this.shape_93.setTransform(65.3,148.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgaAjQgCgCAAgEIAAgrIAAgGIAAgHQABgDACgDQACgDAEAAQAIAAABAIQAKgJAPAAQAOAAAAASIAAAFQgBAKgIAAQgJAAAAgIIAAgHQgOACgHANIAAAhQAAAEgCACQgDADgEAAQgFAAgCgDg");
	this.shape_94.setTransform(51.6,150.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgVAdQgKgKAAgQQgBgNAJgMQAKgOARAAQAOAAAIALQAHAKAAAOQAAAOgJALQgJANgPAAQgMAAgJgIgAgIgKQgEAHAAAGQAAAIAEAEQAEAEAEAAQAFAAAEgEQAFgFABgIQAAgUgMAAQgGAAgFAIg");
	this.shape_95.setTransform(44.3,150.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgMA5QgDgCAAgEIABgCIABgSIAAggIgEAAIgEABQgEAAgDgDQgDgCAAgEQAAgHAHgCQADgBAJAAIABgIQACgPAGgHQAGgKAQAAQANAAAAAJQAAAJgMAAQgIAAgEAGQgDAEgBAKIAAACIANgBQANAAAAAIQAAAJgOAAIgNABIAAAQIABATQAAAMgCAHQgCAIgFAAQgEAAgDgDg");
	this.shape_96.setTransform(37.1,149.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgSAjQgKgEAAgHQAAgHAIAAIAJACQAGACADAAQAMAAAAgGQAAgDgKgEIgQgIQgJgGAAgKQAAgOAOgEQAJgDAPAAQAHAAADACQAFACAAAGQAAANgHAAQgGAAgCgFIgFgBQgPAAAAAEQAAADAIAEQAOAHAEACQAKAGAAAJQAAAMgLAGQgIAFgLAAQgJAAgIgDg");
	this.shape_97.setTransform(24.1,150.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgEAnQgDgCAAgEIgCgXIgBgVIgBgHQgIAEgIALIgBABIgBAUIAAAFIAAAFQAAAEgDACQgDACgEAAQgFAAgDgFIgBgLIAAgXIAAgKIgBgKQAAgHADgEQACgHAFAAQAEAAADADQADADAAAEIgBAGQALgMAJAAQAKAAADAIQAFgEAFgCQAFgCAGAAQANAAAFAOIADASIAFAjQAAAEgDADQgDACgEAAQgIAAgBgIIgDgUIgCgSQgCgMgDAAIgHADIgIAGIACAUIACAXQAAAEgDACQgDADgEAAQgCAAgCgDg");
	this.shape_98.setTransform(15.5,150.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgZAjQgDgCAAgEIAAgrIABgGIAAgHQAAgDACgDQACgDAFAAQAHAAACAIQAKgJAOAAQAOAAAAASIAAAFQgBAKgJAAQgJAAAAgIIAAgHQgNACgGANIAAAhQAAAEgEACQgCADgEAAQgEAAgCgDg");
	this.shape_99.setTransform(6.7,150.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgVAdQgKgKAAgQQgBgNAJgMQAKgOARAAQAOAAAIALQAHAKAAAOQAAAOgJALQgJANgPAAQgMAAgJgIgAgIgKQgEAHAAAGQAAAIAEAEQAEAEAEAAQAFAAAEgEQAFgFABgIQAAgUgMAAQgGAAgFAIg");
	this.shape_100.setTransform(-0.6,150.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgMA5QgDgCAAgEIABgCIABgSIAAggIgEAAIgEABQgEAAgDgDQgDgCAAgEQAAgHAHgCQADgBAJAAIABgIQACgPAGgHQAGgKAQAAQANAAAAAJQAAAJgMAAQgIAAgEAGQgDAEgBAKIAAACIANgBQANAAAAAIQAAAJgOAAIgNABIAAAQIABATQAAAMgCAHQgCAIgFAAQgEAAgDgDg");
	this.shape_101.setTransform(-7.8,149.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgEAnQgDgCAAgEIgCgXIgBgVIgBgHQgIAEgIALIgBABIgBAUIAAAFIAAAFQAAAEgDACQgDACgEAAQgFAAgDgFIgBgLIAAgXIAAgKIgBgKQAAgHADgEQACgHAFAAQAEAAADADQADADAAAEIgBAGQALgMAJAAQAKAAADAIQAFgEAFgCQAFgCAGAAQANAAAFAOIADASIAFAjQAAAEgDADQgDACgEAAQgIAAgBgIIgDgUIgCgSQgCgMgDAAIgHADIgIAGIACAUIACAXQAAAEgDACQgDADgEAAQgCAAgCgDg");
	this.shape_102.setTransform(-22.7,150.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AAQAfIgLAFIgGABQgRAAgIgJQgIgJAAgRQAAgPAMgLQAMgMAPAAQAGAAAJAEQALAEAAAGQAAAAgBABQAAABAAAAQAAAAAAABQgBAAAAABIgBAHIgBAJQABALACAGIACAHIADAHQAAADgDADQgCACgEAAQgDAAgHgGgAgJgMQgGAHAAAHQAAAKADAEQAEAFAGAAIAGgCIAHgEIgCgWIAAgFIABgGIgCgBIgCgBQgHAAgIAIg");
	this.shape_103.setTransform(-32.1,150.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgaAjQgCgCAAgEIAAgrIAAgGIAAgHQABgDACgDQACgDAEAAQAIAAABAIQAKgJAPAAQAOAAAAASIAAAFQgBAKgIAAQgJAAAAgIIAAgHQgOACgHANIAAAhQAAAEgCACQgDADgEAAQgFAAgCgDg");
	this.shape_104.setTransform(-39.3,150.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgiArQAAgDADgDQACgCAEAAIAIABIALABQAIAAAFgGQAFgGABgNQgEADgEACQgFACgDAAQgOAAgIgJQgJgJAAgMQAAgSAMgMQALgMASAAQAHAAAEACQAFABADAEQAJABAAAJIgCANQgCAQgBAPQgBAWgGAKQgKAOgUAAQgbAAAAgLgAgJgeQgGAHAAALQAAAIADAEQADADAHAAQADAAAFgFQAGgGABgGIADgUIgFgCIgEgBQgKAAgGAHg");
	this.shape_105.setTransform(-46.6,152.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AAQAfIgLAFIgGABQgQAAgJgJQgIgJAAgRQAAgPAMgLQAMgMAPAAQAGAAAJAEQAKAEAAAGQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABIgBAHIgBAJQAAALACAGIAEAHIACAHQAAADgCADQgDACgEAAQgDAAgHgGgAgIgMQgHAHAAAHQAAAKADAEQAEAFAGAAIAGgCIAHgEIgCgWIAAgFIABgGIgCgBIgCgBQgIAAgGAIg");
	this.shape_106.setTransform(-54.1,150.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgHAxQgDgCAAgEIAAgNIgBgMIABgQIABgNQAAgEADgCQACgDAEAAQACAAADADQACACAAAEIAAANIgBAQIAAAMIABANQAAAEgDACQgDADgCAAQgDAAgDgDgAgFghQgDgDAAgFQAAgEADgDQADgDADAAQAEAAADADQADADABAEQgBAFgDADQgDADgEAAQgDAAgDgDg");
	this.shape_107.setTransform(-59.8,149);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AASAzQgEADgFABIgJAAQgPAAgKgJQgKgKAAgQQAAgSAKgJQAKgMAPABIAJABQAEAAADADIACghQACgHAHAAQAEAAADACQACADAAAEIgBAeIgCAbQAAAYACAJIAAACQAAAEgDACQgDACgDAAQgFAAgDgEgAgNACQgFAHAAALQAAAIAGAFQAFAFAHAAIAGgBIAHgFIACgCIAAgZQgCgEgEgBQgEgBgFAAQgIAAgFADg");
	this.shape_108.setTransform(-66.1,148.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgWAdQgMgJAAgPQAAgPAKgMQAKgOAPAAQAMAAAIAEQAKAFAAALQAAAHgIAGIgQAGIgUAKQACAEAGACQAEABAEAAQAJAAAGgDQAGgEADAAQAIAAgBAHQAAAIgLAFQgJAEgLAAQgOAAgLgIgAgIgPQgFAEgCAJIAPgHQAIgEAFgEQgEgCgIAAQgEAAgFAEg");
	this.shape_109.setTransform(-80.2,150.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AAQAyQgCgGgBgKIgCgQIAAgFIABgFIgBgGQAAgCgDAAQgIAAgEAFIgIANQAAAZgDAFQgCAGgGAAQgEAAgDgDQgDgCAAgEIABgEIABgSIAAgsIAAgCIAAgLIAAgGIgBgGQAAgEADgDQACgCAEAAQAHAAADAHIABANIgBANIAAAOQAFgFAGgDQADgCAHAAQAMAAAFAGQAEAFAAAJIABAQIACAOIACANIAAADQAAADgDADQgDACgEAAQgGAAgCgGg");
	this.shape_110.setTransform(-88,148.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgFAxQgDgCAAgEIAAgDIABgDIgBgKIAAgJIgCgXIgCgZIgDAAQgQAAgIgCQgIgCAAgHQAAgEACgCQADgEAFABIALABIALABIAMgBIALAAIAPABIAQABQAEAAADACQACADAAAEQAAAEgCADQgDACgEAAIgRAAIgQgBIABAcIACAZIAAAHIABAHQAAAFgCAFQgDAFgFAAQgCAAgDgDg");
	this.shape_111.setTransform(-97,148.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#66CCFF").s().p("Egg/AFiIAArDMBB/AAAIAALDg");
	this.shape_112.setTransform(64.9,170.6,1,1.058);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(3,1,1).p("AJr1QQBzABByABIUBAIIgbAAQgJAAgKAAQolgColgCMgwpAADIAAAOEghQgUkMAAAAp1MBCaAAAMAAAgqX");
	this.shape_113.setTransform(65.5,267);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#00CCFF").s().p("EghMAVOMAAAgp1IAAgMIAAgJIAAgOMAwpgADIRKAEIATAAIAUAAMAAAAqXgEghBgJ6MBB/AAAIAArFMhB/AAAg");
	this.shape_114.setTransform(65.1,267.3);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#0000FF").s().p("AACgCIgEgOIAFAAIAAAJIAAALIgBANg");
	this.shape_115.setTransform(-147.8,134.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]}).wait(19));

	// btn
	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#214DF8").s().p("AgjBSIgDgBQgHAAgCgHQgCgEAAgJQAAgZAOgPQAGgHAcgRQAMgKAGgGQAJgLAAgOQAAgGgJgGQgHgFgIAAQgIAAgJAGIgPAMQgFAEgCAAQgMAAAAgJQAAgFAEgEQANgMAJgFQANgHAMAAQARAAAOAJQAPALAAAQQAAALgDAKQgDAJgHAIQgHAHgUAMQgSANgGAGQgMANAAARIAWgCIAegBQAJAAAHADQAKAEAAAGQAAAEgDAEQgDADgEAAIgHgCIgJgBIgQAAIgOABIgNABIgMABIgEAAg");
	this.shape_116.setTransform(-31.3,428.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#214DF8").s().p("AgrBZQgDgCAAgEIABgEQAIgXAXgsQAVgpAJgYQAOgmAHABQAEAAADACQADADAAAEIgBAGIgMAdQgHAUgOAaIgVArIgUArQgCAGgGAAQgEAAgDgDg");
	this.shape_117.setTransform(-43.7,428.3);

	this.score = new cjs.Text("0", "22px 'Comic Sans MS'", "#214DF8");
	this.score.name = "score";
	this.score.textAlign = "center";
	this.score.lineHeight = 33;
	this.score.lineWidth = 44;
	this.score.setTransform(-71.5,419.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#214DF8").s().p("AgFAyQgDgDAAgFIAAgFIgBgGQgBgFAEgDQADgDADAAQAMAAAAAWQAAAFgDADQgEAEgEAAQgDAAgDgEgAgHgaQgDgDAAgFIAAgEIgBgEQAAgFADgDQAEgDAEAAQAKAAAAATQAAAFgDADQgDADgEAAQgDAAgEgDg");
	this.shape_118.setTransform(-87.7,429.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#214DF8").s().p("AgkAuQgQgNAAgZQAAgZANgTQAPgVAYAAQARAAALAGQANAHAAAQQABALgMAIQgGAEgRAGIgnAUQAFAJAKAEQAJAFAKAAQAHAAAKgDQAMgEAFgFQADgGAEAAQAEAAADADQADADAAADQAAAMgUAJQgQAHgPAAQgWAAgQgMgAgVgbQgJAKgEASIAhgOQASgJAHgHQgIgJgQAAQgNAAgIALg");
	this.shape_119.setTransform(-96.7,431.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#214DF8").s().p("AgoAxIAAhKIAAgKIAAgLQAAgKAKAAQAKAAAAARQAUgTAYAAQAJgBAEAHQAEAGAAANIAAAIQAAAOgKAAQgKAAAAgLIAAgHIAAgJQgRACgJAHQgJAHgGAOIAAA5QAAALgLAAQgJAAAAgLg");
	this.shape_120.setTransform(-107.9,431.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#214DF8").s().p("AgfAtQgPgPAAgZQgBgWANgSQAPgXAZAAQAVABALATQAJAQAAAWQAAAWgNARQgNATgVAAQgSAAgNgNgAgSgVQgHANAAANQAAAPAIAJQAHAIAKAAQAKAAAHgJQAJgJABgPQABgngYAAQgNAAgJAOg");
	this.shape_121.setTransform(-119.4,431.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#214DF8").s().p("AgeAvQgPgPAAgWQAAgUAPgXQAQgaASAAQAKAAANAFQARAGAAAJQAAAFgDACQgDADgEAAQgDAAgCgBIgEgEQgHgFgOAAQgJAAgLATQgKATAAALQAAAOAKAIQAJAHAMAAQAHAAAHgDIAMgGIAFgCQAEAAADADQADADAAAEQAAAIgRAIQgOAGgKAAQgUAAgPgNg");
	this.shape_122.setTransform(-130.6,431.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#214DF8").s().p("AgqBKQgUgJAAgQQAAgFADgDQADgDAEAAQAGAAAEAGQAFAIAFADQAJAGARAAQAPAAAOgHQASgJAAgQQAAgOgPgIQgNgHgRAAQgRAAgMgGQgPgIAAgQQAAgUAVgPQAVgPAUAAQALAAANADQARAFAAAHQAAAJgKAAIgPgCQgKgCgGAAQgPAAgMAIQgMAJAAALQAAAJAQAEQAGABAPABQAZACANAOQANAKAAASQAAAagXAPQgVANgZAAQgUAAgQgHg");
	this.shape_123.setTransform(-143.8,429);

	this.btn_next = new lib.goNext();
	this.btn_next.setTransform(266.8,441.5);
	new cjs.ButtonHelper(this.btn_next, 0, 1, 2, false, new lib.goNext(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_next},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.score},{t:this.shape_117},{t:this.shape_116}]}).wait(19));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-171.5,105,486.7,383.2);


// stage content:
(lib.diag_quiz = function(mode,startPosition,loop) {
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