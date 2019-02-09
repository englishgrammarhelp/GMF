(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"vsa_dynamicQuiz1_atlas_", frames: [[1054,154,322,58],[1618,0,273,71],[1490,247,93,47],[1378,198,110,51],[1278,214,93,47],[1054,214,110,51],[1490,198,93,47],[1278,263,93,47],[1008,1217,615,112],[1044,611,506,108],[0,0,1052,609],[0,1217,1006,169],[1054,0,282,92],[1338,0,278,88],[1501,90,273,71],[1054,94,445,58],[1166,214,110,51],[0,611,1042,604],[1378,163,253,33]]}
];


// symbols:



(lib.CachedTexturedBitmap_1 = function() {
	this.initialize(ss["vsa_dynamicQuiz1_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_10 = function() {
	this.initialize(ss["vsa_dynamicQuiz1_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_12 = function() {
	this.initialize(ss["vsa_dynamicQuiz1_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_13 = function() {
	this.initialize(ss["vsa_dynamicQuiz1_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_14 = function() {
	this.initialize(ss["vsa_dynamicQuiz1_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_15 = function() {
	this.initialize(ss["vsa_dynamicQuiz1_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_16 = function() {
	this.initialize(ss["vsa_dynamicQuiz1_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_18 = function() {
	this.initialize(ss["vsa_dynamicQuiz1_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2 = function() {
	this.initialize(ss["vsa_dynamicQuiz1_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_20 = function() {
	this.initialize(ss["vsa_dynamicQuiz1_atlas_"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_22 = function() {
	this.initialize(ss["vsa_dynamicQuiz1_atlas_"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_23 = function() {
	this.initialize(ss["vsa_dynamicQuiz1_atlas_"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_24 = function() {
	this.initialize(ss["vsa_dynamicQuiz1_atlas_"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_25 = function() {
	this.initialize(ss["vsa_dynamicQuiz1_atlas_"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_26 = function() {
	this.initialize(ss["vsa_dynamicQuiz1_atlas_"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_3 = function() {
	this.initialize(ss["vsa_dynamicQuiz1_atlas_"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_32 = function() {
	this.initialize(ss["vsa_dynamicQuiz1_atlas_"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_4 = function() {
	this.initialize(ss["vsa_dynamicQuiz1_atlas_"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_9 = function() {
	this.initialize(ss["vsa_dynamicQuiz1_atlas_"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.wrong_HL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_26();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.wrong_HL, new cjs.Rectangle(0,0,136.5,35.5), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Correct!", "bold 26px 'Comic Sans MS'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 38;
	this.text.lineWidth = 102;
	this.text.parent = this;
	this.text.setTransform(-3.3,-72.95);

	this.text_1 = new cjs.Text("Explanation:", "bold 14px 'Comic Sans MS'", "#000099");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 22;
	this.text_1.lineWidth = 100;
	this.text_1.parent = this;
	this.text_1.setTransform(-203,-51);

	this.instance = new lib.CachedTexturedBitmap_23();
	this.instance.parent = this;
	this.instance.setTransform(-247,-30.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text_1},{t:this.text}]}).wait(1));

	// Layer_3
	this.instance_1 = new lib.CachedTexturedBitmap_24();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-71.9,-85.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer_2
	this.instance_2 = new lib.CachedTexturedBitmap_25();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-70.9,-84.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-255,-85.2,511,139.3), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_22();
	this.instance.parent = this;
	this.instance.setTransform(-259.95,-150.5,0.4943,0.4943);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-259.9,-150.5,520,301);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_20();
	this.instance.parent = this;
	this.instance.setTransform(-126.5,-27,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126.5,-27,253,54);


(lib.menu_main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_12();
	this.instance.parent = this;
	this.instance.setTransform(3.4,0,0.4375,0.4375);

	this.instance_1 = new lib.CachedTexturedBitmap_32();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.7,-0.7,0.4375,0.4375);

	this.instance_2 = new lib.CachedTexturedBitmap_14();
	this.instance_2.parent = this;
	this.instance_2.setTransform(3.4,0,0.4375,0.4375);

	this.instance_3 = new lib.CachedTexturedBitmap_13();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-0.7,-0.7,0.4375,0.4375);

	this.instance_4 = new lib.CachedTexturedBitmap_16();
	this.instance_4.parent = this;
	this.instance_4.setTransform(3.4,0,0.4375,0.4375);

	this.instance_5 = new lib.CachedTexturedBitmap_15();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-0.7,-0.7,0.4375,0.4375);

	this.instance_6 = new lib.CachedTexturedBitmap_18();
	this.instance_6.parent = this;
	this.instance_6.setTransform(3.4,0,0.4375,0.4375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_5},{t:this.instance_4}]},1).to({state:[{t:this.instance_1},{t:this.instance_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.7,-0.7,48.2,22.3);


(lib.correct_HL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_10();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.correct_HL, new cjs.Rectangle(0,0,136.5,35.5), null);


(lib.Copyright = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedTexturedBitmap_9();
	this.instance.parent = this;
	this.instance.setTransform(-63.3,-7.15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.3,-7.1,126.5,16.5);


(lib.UI = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//Enable Touch============================================================
		createjs.Touch.enable = true;
		
		//Menu button======================================================
		this.btn_menu.addEventListener("click", openMenu.bind(this));
		
		//Nav buttons======================================================
		this.btn_goQuiz.addEventListener("click", openQuiz.bind(this));
		//this.btn_goBack.addEventListener("click", openPrev.bind(this));
		
		
		//Menu function========================================
		function openMenu(){
		
		 window.open ("../menu/menu.html","_self");
		}
		
		//Nav functions======================================================
		function openQuiz(){
		
		 window.open ("http://www.course.englishgrammarhelp.com/quizzes/verb-subject-agreement%ef%bb%bf/","_self");
		}
		/*
		function openPrev(){
		
		 //window.open ("active_Scene4.html","_self");
		}
		
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// actions
	this.btn_goQuiz = new lib.Symbol2();
	this.btn_goQuiz.name = "btn_goQuiz";
	this.btn_goQuiz.parent = this;
	this.btn_goQuiz.setTransform(-222.8,187.05,0.8063,1);
	new cjs.ButtonHelper(this.btn_goQuiz, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_goQuiz).wait(1));

	// main
	this.instance = new lib.Copyright("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-220.65,376.5);

	this.btn_menu = new lib.menu_main();
	this.btn_menu.name = "btn_menu";
	this.btn_menu.parent = this;
	this.btn_menu.setTransform(23.4,5.55,1,1.1429,0,0,0,23.4,10.5);
	new cjs.ButtonHelper(this.btn_menu, 0, 1, 2, false, new lib.menu_main(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_menu},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.UI, new cjs.Rectangle(-324.8,-7.2,372.3,393.09999999999997), null);


// stage content:
(lib.vsa_dynamicQuiz1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{quiz_start:0});

	// UI
	this.instance = new lib.CachedTexturedBitmap_2();
	this.instance.parent = this;
	this.instance.setTransform(113.9,108.2,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(187.05,186.65,0.5,0.5);

	this.UI = new lib.UI();
	this.UI.name = "UI";
	this.UI.parent = this;
	this.UI.setTransform(547.95,54.85,1,1,0,0,0,54,40.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.UI},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// exText
	this.exText = new cjs.Text("", "bold 14px 'Comic Sans MS'");
	this.exText.name = "exText";
	this.exText.lineHeight = 22;
	this.exText.lineWidth = 492;
	this.exText.parent = this;
	this.exText.setTransform(30,134.05);

	this.exBox = new lib.Symbol6();
	this.exBox.name = "exBox";
	this.exBox.parent = this;
	this.exBox.setTransform(273,156.75,1,1,0,0,0,0.5,0.5);
	this.exBox.visible = false;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.exBox},{t:this.exText}]}).wait(1));

	// grey
	this.grey = new lib.Symbol5();
	this.grey.name = "grey";
	this.grey.parent = this;
	this.grey.setTransform(276.7,192.4,1.0115,1.0063);
	this.grey.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.grey).wait(1));

	// text
	this.instance_2 = new lib.CachedTexturedBitmap_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(159.65,9.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// highlight
	this.wHL4 = new lib.wrong_HL();
	this.wHL4.name = "wHL4";
	this.wHL4.parent = this;
	this.wHL4.setTransform(379.55,169.3,0.8804,1,0,0,0,68.2,17.7);
	this.wHL4.visible = false;

	this.wHL3 = new lib.wrong_HL();
	this.wHL3.name = "wHL3";
	this.wHL3.parent = this;
	this.wHL3.setTransform(203.9,304.3,0.8804,1,0,0,0,68.1,17.7);
	this.wHL3.visible = false;

	this.cHL1 = new lib.correct_HL();
	this.cHL1.name = "cHL1";
	this.cHL1.parent = this;
	this.cHL1.setTransform(204.1,169.3,0.8804,1,0,0,0,68.3,17.7);
	this.cHL1.visible = false;

	this.wHL2 = new lib.wrong_HL();
	this.wHL2.name = "wHL2";
	this.wHL2.parent = this;
	this.wHL2.setTransform(203.9,259.3,0.8804,1,0,0,0,68.1,17.7);
	this.wHL2.visible = false;

	this.wHL1 = new lib.wrong_HL();
	this.wHL1.name = "wHL1";
	this.wHL1.parent = this;
	this.wHL1.setTransform(203.9,214.3,0.8804,1,0,0,0,68.1,17.7);
	this.wHL1.visible = false;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.wHL1},{t:this.wHL2},{t:this.cHL1},{t:this.wHL3},{t:this.wHL4}]}).wait(1));

	// bg
	this.instance_3 = new lib.CachedTexturedBitmap_4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(16.5,41.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(288.8,207.1,252.59999999999997,193.1);
// library properties:
lib.properties = {
	id: 'CAE23E8E8141BC48AA58A2CD6CF61DD9',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/vsa_dynamicQuiz1_atlas_.png", id:"vsa_dynamicQuiz1_atlas_"},
		{src:"sounds/cheer.mp3", id:"cheer"},
		{src:"sounds/correct.mp3", id:"correct"},
		{src:"sounds/wrong.mp3", id:"wrong"},
		{src:"sounds/bgmTest.mp3", id:"bgmTest"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['CAE23E8E8141BC48AA58A2CD6CF61DD9'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;