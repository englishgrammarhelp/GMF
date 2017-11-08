(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:
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


(lib.vol_pos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1.5,1,1).p("ABagwIAABgQAAAWgZAAIiBAAQgZAAAAgWIAAhgQAAgVAZAAICBAAQAZAAAAAVg");
	this.shape.setTransform(9,7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgKA0QgDgDAAgGIAAgfIgFABIgTAAQgVAAAAgNQAAgHAHgDQADAAALAAIAYgBIAAgQIABgRQABgFADgDQADgCAEAAQAFAAADADQAEAEgBAFIAAAHIgBAIIABAPIAAAAIAKABIAIAAIAHgBIABAAIAJABQAKABADAGIABAEIgBAFIgDADIgDADIgFABIgEgBIgCAAIgEAAIgNAAIgOAAIAAAgQAAAMgLAAQgGAAgDgDg");
	this.shape_1.setTransform(9.6,6.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00CCFF").s().p("AhABGQgZAAAAgWIAAhfQAAgWAZAAICBAAQAYAAABAWIAABfQgBAWgYAAgAgHAqQAAAGADADQAEADAEAAQAMAAABgMIAAggIANAAIAOAAIADAAIACAAIAFABIAFgBIADgDIACgDIABgFIgBgEQgCgGgKgBIgJgBIgBAAIgHABIgIAAIgKgBIAAAAIgBgPIABgIIAAgHQAAgFgEgEQgDgDgGAAQgEAAgBACQgEADgBAFIgBARIAAAQIgYABQgKAAgDAAQgHADgBAIQABAMAUAAIATAAIAFgBg");
	this.shape_2.setTransform(9,7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0099FF").s().p("AhABGQgZAAAAgWIAAhfQAAgWAZAAICBAAQAYAAABAWIAABfQgBAWgYAAgAgHAqQAAAGADADQAEADAEAAQAMAAABgMIAAggIANAAIAOAAIADAAIACAAIAFABIAFgBIADgDIACgDIABgFIgBgEQgCgGgKgBIgJgBIgBAAIgHABIgIAAIgKgBIAAAAIgBgPIABgIIAAgHQAAgFgEgEQgDgDgGAAQgEAAgBACQgEADgBAFIgBARIAAAQIgYABQgKAAgDAAQgHADgBAIQABAMAUAAIATAAIAFgBg");
	this.shape_3.setTransform(9,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape_3},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,19.9,16);


(lib.vol_neg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1.5,1,1).p("AhAhFICBAAQAZAAAAAVIAABgQAAAWgZAAIiBAAQgZAAAAgWIAAhgQAAgVAZAAg");
	this.shape.setTransform(9,7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgMALIgCAAIgPAAQgLAAAAgKQAAgJALAAIAdgBIAdgBIAEABQAIAAAAAJQAAAIgKABIgVABIgJABIgNAAg");
	this.shape_1.setTransform(9.1,6.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhABGQgZAAAAgWIAAhfQAAgWAZAAICAAAQAaAAAAAWIAABfQAAAWgaAAgAABgLIgdAAQgLAAAAAKQAAAJALAAIAPAAIACAAIANAAIAJAAIAVgBQAKgBAAgIQAAgJgIAAIgEgBIgdABg");
	this.shape_2.setTransform(9,7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00CCFF").s().p("AhABGQgZAAAAgWIAAhfQAAgWAZAAICAAAQAaAAAAAWIAABfQAAAWgaAAgAABgLIgdAAQgLAAAAAKQAAAJALAAIAPAAIACAAIANAAIAJAAIAVgBQAKgBAAgIQAAgJgIAAIgEgBIgdABg");
	this.shape_3.setTransform(9,7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0099FF").s().p("AhABGQgZAAAAgWIAAhfQAAgWAZAAICAAAQAaAAAAAWIAABfQAAAWgaAAgAABgLIgdAAQgLAAAAAKQAAAJALAAIAPAAIACAAIANAAIAJAAIAVgBQAKgBAAgIQAAgJgIAAIgEgBIgdABg");
	this.shape_4.setTransform(9,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_3},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape_4},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,19.9,16);


(lib.vol_mute = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AASBRQAAgIgQgQQgMgNgHAAIAAhZQAHAAANgOQAPgOAAgHg");
	this.shape.setTransform(15.6,13.9,1.2,1.201);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AgGglIANAAQABAAAAABIAABJQAAABgBAAIgNAAQgBAAAAgBIAAhJQAAgBABAAg");
	this.shape_1.setTransform(10.5,13.8,1.2,1.201);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#990000").ss(1,1,1).p("AhHBRQgCgDgDgCQgDgDgBgCQgbgeAAgpQAAgsAfgfQAgggAsAAQAjAAAcAUQAGAEAHAIQACACADACQAbAeAAApQAAAtggAfQgfAggtAAQgpAAgegbICYiY");
	this.shape_2.setTransform(15.1,14.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AAJAAQAAANgJAJQgCAFgGACIAAg5QAGADACAFQAJAIAAAMg");
	this.shape_3.setTransform(20.6,13.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1.5,1,1).p("ACWAAQAAA7gsAoQgtAqg9AAQg+AAgsgqQgrgoAAg7QAAg6ArgqQAKgIAKgHQAFgDAGgDQAJgFAKgEQAEgBAFgCQAWgHAZAAQAaAAAXAHQAEACAEABQAKAEAJAFQAFADAFADQAKAHAKAIQAsAqAAA6g");
	this.shape_4.setTransform(15,14.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhqBjQgrgoAAg7QAAg6ArgqQAKgIALgGIAKgHIAUgJIAIgCQAXgIAYAAQAaAAAXAIIAIACIAUAJIAKAHQAKAGAJAIQAsAqAAA6QAAA7gsAoQgtApg9AAQg9AAgtgpgAhGBSQAeAbAoAAQAuAAAfggQAfggAAgsQAAgpgbgeQAbAeAAApQAAAsgfAgQgfAgguAAQgoAAgegbICXiYIiXCYgAhqABQAAApAaAeIAFAFIAFAFIgFgFIgFgFQgageAAgpQAAgsAfggQAggfArAAQAkAAAbAUQAHAEAHAHIAEAFIgEgFQgHgHgHgEQgbgUgkAAQgrAAggAfQgfAgAAAsIAAAAgAAuAaQAHgCACgGQAJgJAAgMQAAgMgJgJQgCgFgHgDIAAA6IAAAAgAAuAagAAuggQAHADACAFQAJAJAAAMQAAAMgJAJQgCAGgHACgABAgDIAAAAg");
	this.shape_5.setTransform(15,14.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00CCFF").s().p("AhqBjQgrgoAAg7QAAg6ArgqQAKgIALgGIAKgHIAUgJIAIgCQAXgIAYAAQAaAAAXAIIAIACIAUAJIAKAHQAKAGAJAIQAsAqAAA6QAAA7gsAoQgtApg9AAQg9AAgtgpgAhLhLQgfAgAAAsQAAApAaAeIAFAFIAFAFQAeAbAoAAQAuAAAfggQAfggAAgsQAAgpgbgeIgEgFQgHgHgHgEQgbgUgkAAQgrAAggAfg");
	this.shape_6.setTransform(15,14.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhHBRICYiYQAbAeAAApQAAAtggAfQgfAggtAAQgpAAgegbgAAuAZQAGgCADgGQAJgIAAgMQAAgNgJgJQgDgFgGgDIAAA6IAAAAgAhMBMIgEgFQgbgeAAgpQAAgsAfgfQAgggAsAAQAjAAAcAUQAGAEAHAIIAFAEIiYCYIgFgFgAAuAZgAAughQAGADADAFQAJAJAAANQAAAMgJAIQgDAGgGACgABAgDIAAAAg");
	this.shape_7.setTransform(15.1,14.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0099FF").s().p("AhqBjQgrgoAAg7QAAg6ArgqQAKgIALgGIAKgHIAUgJIAIgCQAXgIAYAAQAaAAAXAIIAIACIAUAJIAKAHQAKAGAJAIQAsAqAAA6QAAA7gsAoQgtApg9AAQg9AAgtgpgAhLhLQgfAgAAAsQAAApAaAeIAFAFIAFAFQAeAbAoAAQAuAAAfggQAfggAAgsQAAgpgbgeIgEgFQgHgHgHgEQgbgUgkAAQgrAAggAfg");
	this.shape_8.setTransform(15,14.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhqBjQgrgoAAg7QAAg6ArgqQAKgIALgGIAKgHIAUgJIAIgCQAXgIAYAAQAaAAAXAIIAIACIAUAJIAKAHQAKAGAJAIQAsAqAAA6QAAA7gsAoQgtApg9AAQg9AAgtgpgAAABtQAuAAAfggQAfggAAgsQAAgpgbgeIgEgFQgHgHgHgEQgbgUgkAAQgrAAggAfQgfAgAAAsQAAApAaAeIAFAFIAFAFQAeAbAoAAgAhGBSICXiYQAbAeAAApQAAAsgfAgQgfAgguAAQgoAAgegbgAAuAaQAHgCACgGQAJgJAAgMQAAgMgJgJQgCgFgHgDIAAA6IAAAAgAhGBSIAAAAgAhLBNIgFgFQgageAAgpQAAgsAfggQAggfArAAQAkAAAbAUQAHAEAHAHIAEAFIiXCYIgFgFgAAuAagAAuggQAHADACAFQAJAJAAAMQAAAMgJAJQgCAGgHACgABAgDIAAAAgABRhGIAAAAg");
	this.shape_9.setTransform(15,14.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_2},{t:this.shape_4},{t:this.shape_3},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_7},{t:this.shape_8},{t:this.shape_2},{t:this.shape_4},{t:this.shape_3},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_9},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,32,30.1);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AAABNIAAiZ");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-8.7,2,17.4);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1.3,1,1).p("AAAhNIAACb");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-8.8,2,17.7);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.8,1,1).p("AhtAAIDbAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12,-1,24,2);


(lib.menu_main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgWAoQgQgMAAgdIAAgIIAAgIIABgHIAAgGQAAgFABgEQADgFAEgBQADAAADACQADADgBADIAAAKIAAAKIAAAIIAAAIQAAAJABAHQADAJAFAEQADABAIABQAPAAAGgaQADgNAAgaIABgFQADgFAFAAQADAAADAEQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAXgCANQgDATgKAOQgEAFgGAEQgHAFgIgBQgPABgGgGg");
	this.shape.setTransform(37.7,11.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgoAtQgDgCAAgDIABgIIAAgHIAAgKIAAgKIAAgKIAAgMIgBgKIAAgLQAAgDADgDQADgDAEAAQAEAAAFAIQAaAmAaAXIAAgJIgBgmIgBgGIAAgHQAAgIAJAAQAJAAAAAeIAAAJIgBAkIAAAJQgBAIgIAAQgEAAgFgFQgWgUgcgkIgBASIABAOIAAAOQAAARgJAAQgDAAgDgDg");
	this.shape_1.setTransform(28.5,10.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgaAsQgHgFAAgTIABgXIACgXIgBgGIgBgGQAAgJAJAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAAAIANgCIALgBQAPAAAIADQAGACAAAGQAAADgCACQgDADgDAAIgDAAQgJgDgJAAIgJABIgKACIgBAXIAWgDIAOgBQAEABACACQADACAAADQAAAHgIAAIgOABIgYADIAAAMQAAAMABABQABABAGAAIAKgBIALAAIAEAAIADAAQAEAAACABQADADAAAEQAAAGgHACQgGABgRAAQgUAAgFgGg");
	this.shape_2.setTransform(20,10.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAfAmIgCgOQgDgKgEgTIgJAXIgDALIgFALQgDAFgEAAQgFAAgEgHIgDgLIgIgeIgIAcIgBANQgDAJgHgBQgDAAgDgCQgCgDAAgDQAAgKAFgNIAGgWIADgSQADgMADgFQADgEAEAAQAGABACAFQADAFADAQQACAPAFARQAGgRAGgVIADgNQADgIAHAAQAGgBADAKIADAPQADAYAGASIAFAUQAAADgDACQgDACgDAAQgGABgEgKg");
	this.shape_3.setTransform(10.9,11);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1.5,1,1).p("Ai4hoIFxAAQAxAAAAAwIAABxQAAAwgxAAIlxAAQgxAAAAgwIAAhxQAAgwAxAAg");
	this.shape_4.setTransform(23.4,10.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ai4BpQgxAAAAgwIAAhxQAAgwAxAAIFxAAQAxAAAAAwIAABxQAAAwgxAAg");
	this.shape_5.setTransform(23.4,10.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1.5,1,1).p("Ai4hoIFxAAQAxAAAAAwIAABwQAAAxgxAAIlxAAQgxAAAAgxIAAhwQAAgwAxAAg");
	this.shape_6.setTransform(23.4,10.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00CCFF").s().p("Ai4BpQgxAAAAgxIAAhvQAAgxAxAAIFxAAQAxAAAAAxIAABvQAAAxgxAAg");
	this.shape_7.setTransform(23.4,10.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0099FF").s().p("Ai4BpQgxAAAAgxIAAhvQAAgxAxAAIFxAAQAxAAAAAxIAABvQAAAxgxAAg");
	this.shape_8.setTransform(23.4,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_8},{t:this.shape_6},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,48.8,23);


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
	this.shape.graphics.rf(["#D5FFD7","#61EF01","#1DA400","#004A00"],[0,0.345,0.635,0.937],0.4,7,0,0.4,7,18.8).s().p("AAAB2QgwAAgigjQgjgigBgxQABgwAjgiQAigjAwAAQAxAAAjAjQAjAigBAwQABAxgjAiQgjAjgxAAIAAAAg");
	this.shape.setTransform(11.9,11.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","#EC0000","#9D0000","#480000"],[0,0.345,0.635,0.937],0.4,7,0,0.4,7,18.8).s().p("AAAB2QgwAAgigjQgjgigBgxQABgwAjgiQAigjAwAAQAxAAAjAjQAjAigBAwQABAxgjAiQgjAjgxAAIAAAAg");
	this.shape_1.setTransform(11.9,11.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},8).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23.7,23.6);


(lib.Copyright = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAcAIIgEgLIgDAKQgEAJgEAAQAAAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBIgCgJIgCgHQgGATgDAAIgCgBIgBgDIABgCQACgEACgHIADgMQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQAFAAACAIIACALIADgGIADgJQACgFACAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABIADAKIACAHIADAIIABABIgBADIgDABQgDAAgCgJgAgUANIgBgIIAAgGIgBgHIgFAAIgFgBQgBAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAABAAIAEAAIAFAAIAPAAIADAAIADAAQABAAABAAQAAAAAAABQABAAAAABQAAAAAAABQAAABAAABQAAAAgBABQAAAAAAAAQgBAAgBAAIgNABIAAAHIABAHIAAAEIABADIgBADIgCAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAgBg");
	this.shape.setTransform(57.3,-0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgMAYQgGgCAAgEIABgDQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAIAEACIAFACIAEABIAGgBQAEgCAAgCQAAgGgIgCIgEgCIgIgCQgDgCAAgFQAAgJAIgEIAIgDIAIgDIADAAIAEABIABADIABAEIAAADIgBAEIgDABQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAAAgBIgCgEIgKADQgGACAAAFIACAAQAJACAGADQAHAEAAAJQAAAHgGADQgFADgIAAQgFAAgGgCg");
	this.shape_1.setTransform(51,2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgLATQgHgGAAgJQAAgIAGgJQAGgLAIAAQAEAAAGACQAGADAAADIgBADQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAAAAAIgDgBIgCgCQgCgCgGAAQgEAAgEAIQgEAIAAAEQAAAGAEADQADADAGAAIAFgBIAFgDIACgBIADACIABADQAAADgGADQgHADgDAAQgJAAgFgGg");
	this.shape_2.setTransform(46.6,2.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgDAgQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAgBIAAgIIAAgIIABgKIAAgKQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAIADgBIACABQABAAAAABQAAAAAAABQABAAAAABQAAAAAAAAIgBAKIAAAKIAAAIIAAAIQAAABAAAAQAAAAAAABQAAAAgBAAQAAABAAAAIgCABIgDgBgAgCgXQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAgBQAAAAAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_3.setTransform(43.1,1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AALAVIgBgJIgBgKIAAgDIAAgEQAAgKgDAAQgFABgEAFQgEAGgCAGIAAAFIgBAEIABAEIAAAEIgBADIgDACIgEgCIgBgDIAAgEIAAgEIAAgMIABgMIAAgEIAAgEIABgEIADgBQAEABAAAFIABAFQAHgKAHAAQAHAAADAHQABAEABAIIAAAFIAAACIABAKIAAAJIgBAEIgDABQgEAAAAgFg");
	this.shape_4.setTransform(39.5,2.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAOAWIgDgDIgHADIgFACQgKAAgFgGQgEgFAAgMQAAgKAHgHQAIgIAJAAQAEAAAEACQAGADAAADIgBACIAAAGIgBAJIABAIIADAJIABABIAAABIgBAEIgDABIgDgDgAgGgKQgFAGAAAGQAAAHACADQADAEAFAAQADAAADgBIAEgEIgBgQIAAgEIABgFIgDgBIgCgBQgFABgFAFg");
	this.shape_5.setTransform(34.8,2.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAMAiIgCgLIgBgLIAAgDIAAgDQAAgIgDABQgGAAgDADIgHAKQAAARgBADQgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAIgBgEIABgBIAAgGIAAgHIAAggIABgHIgBgEIAAgEQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAQAAAAABgBQADAAAAAEIABAIIAAAKIAAAJIAAAFQAEgFAEgDQADgDAFABQAGAAAEAEQABAEAAAHIABAIIAAAJIACAJIABACQAAAAgBAAQAAABAAAAQAAABAAAAQgBAAAAAAIgDABQgDAAgBgCg");
	this.shape_6.setTransform(30,1.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgLATQgHgGAAgJQAAgIAGgJQAGgLAIAAQAEAAAGACQAGADAAADIgBADQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAAAAAIgDgBIgCgCQgCgCgGAAQgEAAgEAIQgEAIAAAEQAAAGAEADQADADAGAAIAFgBIAFgDIACgBIADACIABADQAAADgGADQgHADgDAAQgJAAgFgGg");
	this.shape_7.setTransform(25,2.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgOATQgHgFAAgKQAAgLAGgHQAGgJAJAAQAHAAAFACQAFADAAAHQAAAEgFAEIgJAEIgQAHQADAFADABQAEACAEAAIAHgBQAFgCACgCQAAgBABAAQAAAAAAAAQABgBAAAAQAAAAABAAIADABIABADQAAAEgIAEQgHADgGAAQgJAAgGgFgAgIgLQgEAFgCAGIAOgFQAHgEADgCQgDgEgHAAQgFAAgDAEg");
	this.shape_8.setTransform(20.3,2.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAbAhIgCgHIgCgIQgCgGgDgXIgJAZIgDAJIgEAIQgBADgCAAQgDAAgCgDIgBgFIgBgEIgIghIgCAIIgGAWIgBANQgCADgDAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBIAAgDQAAgHACgLIAGgQIACgPQACgJACgDQACgDACAAQADAAABAEQADAEABAMQADAOAFAPQAFgPAFgTIABgGIACgGQACgEADAAQAEAAABAIIADAKQACATADAOIADAIIACAHQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAIgDABQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_9.setTransform(13.8,1.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgQAUIAAgeIAAgEIAAgEQAAgFAEAAQAEAAAAAIQAIgJAKAAQAEAAABADQACADAAAFIAAADQAAAGgEAAQgEAAAAgFIAAgDIAAgDQgHAAgEAEQgDACgDAGIAAAXQAAAFgEAAQgEAAAAgFg");
	this.shape_10.setTransform(5.1,2.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAOAWIgDgDIgHADIgFACQgKAAgFgGQgEgFAAgMQAAgKAHgHQAIgIAJAAQAEAAAEACQAGADAAADIgBACIAAAGIgBAJIABAIIADAJIABABIAAABIgBAEIgDABIgDgDgAgGgKQgFAGAAAGQAAAHACADQADAEAFAAQADAAADgBIAEgEIgBgQIAAgEIABgFIgDgBIgCgBQgFABgFAFg");
	this.shape_11.setTransform(0.5,2.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgBAaQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAIgBgQIgBgPQAAgEgCgDQgDABgCAEIgGAFIgCADIAAAHIgBAIIABADIAAAEQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAAAABIgEABQgEAAAAgLIAAgIIABgHIgBgHIAAgHQgBgKAFAAIADABQAAABABAAQAAAAAAABQAAAAAAABQABAAAAABIAAACIgBADIAAAFQACgFAFgEQAEgEADAAQAHAAACAHQADgDACgCQAEgBAFAAQAGAAADAIIACAMIAEAYIgCADIgDABQgEAAAAgDIgCgOIgCgNIgBgGQgCgEgBAAIgGADIgGAEIAAAIIACALIABAMIgBADIgEABQAAAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAg");
	this.shape_12.setTransform(-5.2,2.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgCAaQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAIgBgQIgBgPQAAgEgBgDQgEABgCAEIgGAFIgCADIgBAHIAAAIIAAADIABAEQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAAAABIgDABQgGAAAAgLIABgIIAAgHIAAgHIgBgHQABgKAEAAIADABQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABIAAACIAAADIAAAFQADgFAEgEQAFgEADAAQAGAAACAHQACgDADgCQAEgBAEAAQAIAAACAIIACAMIAEAYIgCADIgDABQgDAAgBgDIgCgOIgCgNIgBgGQgBgEgCAAIgGADIgFAEIAAAIIABALIABAMIgBADIgEABQAAAAAAAAQAAAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_13.setTransform(-12.2,2.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAOAWIgDgDIgHADIgFACQgKAAgFgGQgEgFAAgMQAAgKAHgHQAIgIAJAAQAEAAAEACQAGADAAADIgBACIAAAGIgBAJIABAIIADAJIABABIAAABIgBAEIgDABIgDgDgAgGgKQgFAGAAAGQAAAHACADQADAEAFAAQADAAADgBIAEgEIgBgQIAAgEIABgFIgDgBIgCgBQgFABgFAFg");
	this.shape_14.setTransform(-18.1,2.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgQAUIAAgeIAAgEIAAgEQAAgFAEAAQAEAAAAAIQAIgJAKAAQAEAAABADQACADAAAFIAAADQAAAGgEAAQgEAAAAgFIAAgDIAAgDQgHAAgEAEQgDACgDAGIAAAXQAAAFgEAAQgEAAAAgFg");
	this.shape_15.setTransform(-22.4,2.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgWAeQgFgGAAgMQAAgLAFgLQAGgMAIgIQAGgFAFAAQAEAAAGACQAJAEgBADIgBAEIgDABIgDgBQgGgEgFAAQgDAAgDAEIgFAFQgKAOAAAPQAAAIADAEQACADAHAAQAIAAAGgFQAGgFACgKQgNAAgHAEIgCABQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBIgCgCQAAgBABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAJgFAWAAIAEABIABACQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABQgDANgJAIQgJAIgLAAQgKAAgGgGg");
	this.shape_16.setTransform(-27.7,1.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgOAhIgBgDIADgIIAKgXQAFgPAHgHIABgBIgVgBIgKAAQgEAAAAgEQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIARABIAPAAIAIAAQAFAAAAADQAAACgDADIgEAFQgFAHgFAJIgIARIgDAKIgEAKQAAAAgBABQAAAAAAAAQgBABgBAAQAAAAgBAAIgDgCg");
	this.shape_17.setTransform(-36.2,1.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AABAiIgIAAIgEAAQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgFAHAAIACAAIACAAIAAgGIgBgGIABgQIABgRQgGAEgBAAIgDgBIgCgDQAAgCAEgDIAHgFQADgEADAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABIAAADIAAADIAAAFIAAAEIgBAPIgCAOIABAGIABAGIAEAAQABAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAIABADIgBADIgDABg");
	this.shape_18.setTransform(-41,1.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgTAXQgFgJAAgPQAAgMAGgKQAIgLALAAQAMAAAGAKQAGAJAAAMQAAATgHAJQgGAKgMAAQgNAAgGgMgAgLgRQgEAHAAAJQAAANAEAIQAEAHAHAAQAJAAAEgLQADgHAAgLQAAgLgEgHQgEgFgHAAQgHgBgFAJg");
	this.shape_19.setTransform(-45.9,1.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AANAhIgDgBIgGABIgGAAIgFAAIgFABIgCAAIgBAAQgDAAgBgDIgBgGQAAgKAGgGQADgDALgHIAHgGQAEgFAAgFQAAgDgEgCQgDgCgDAAQgDAAgEACIgGAFIgDABQgEAAAAgDQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQAFgFAEgCQAFgDAFAAQAHAAAGAEQAGAEAAAHIgBAJIgEAGQgDADgIAFQgIAFgCADQgFAFAAAHIAJAAIAMgBIAHABQAEACAAACQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgCABIgEgBg");
	this.shape_20.setTransform(-51.3,1.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgeABQgBgLALgKQALgJANAAQANAAAHAIQAIAIAAAMQAAAKgJAKQgKALgNAAIAAAAQgfAAABgdgAgOgPQgJAHABAJQAAALAFAFQAHAFAKAAQAKAAAHgJQAGgIAAgHQAAgJgDgFQgFgFgJAAIgCAAQgLAAgHAGgAgLAJQgFgEAAgFQAAgHAHgFQAGgEAHAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQABABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAABAAABQAAAAgBABQAAAAgBAAQgBAAgBAAIgBAAIgBAAQgEAAgEACQgFADAAADQAAACAEABIAEACQADAAADgDIAEgCIAEABIABADQgBADgEADQgGADgEAAQgFAAgFgEg");
	this.shape_21.setTransform(-57.7,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.3,-7.1,126.6,16.6);


(lib.text_predicate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#993300").s().p("AgdAmQgPgLAAgUQAAgVAMgQQANgRAVAAQAPAAALAFQANAHAAAOQgBAJgKAIQgFADgPAGIgdAMQAFAFAFACQAGACAHAAQAMABAIgFQAHgFAFAAQAJABAAAIQAAAKgOAHQgNAFgOAAQgUAAgNgKgAgLgUQgGAGgEAKIAUgIIASgKQgFgEgKAAQgHAAgGAGg");
	this.shape.setTransform(141.8,17.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#993300").s().p("AgHA9QgDgDAAgFIAAgJIAAgKIgCgsIgQgBQgMgCAAgKQAAgFAEgDQADgEAGAAIAOABIAAgJIAAgJQAAgFAEgDQADgDAFAAQAMAAAAAWIAAAHIAJgBQAKAAAEACQAGACAAAIQABAFgEAEQgDADgGAAIgEAAIgEAAIgJAAIACAuIAAAEIAAAFQAAAUgMAAQgEAAgEgDg");
	this.shape_1.setTransform(132.6,16);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#993300").s().p("AAVAoIgOAGQgGACgDAAQgWAAgKgLQgLgMAAgWQAAgUAQgPQAPgPAVAAQAJAAALAEQANAGAAAIQAAACgCADIgBAJIgBAMQAAAPACAIIAEAJIAEAIQAAAFgEADQgDADgFAAQgEAAgJgIgAgMgRQgIAJAAAMQAAAMAEAFQAEAHAIAAQAFgBAFgBQAFgCAEgEQgDgUAAgKIABgHIABgIIgDgBIgDAAQgLAAgJAJg");
	this.shape_2.setTransform(123.4,17.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#993300").s().p("AgbAnQgNgMAAgTQAAgRAMgSQAOgWASABQAJAAAMAEQAPAGAAAIQAAAFgDADQgDAEgFgBQgEAAgGgDQgEgFgLAAQgGAAgIAOQgHAMgBAJQABAJAGAGQAGAEAKAAQAGABAIgFQAJgFACAAQAFAAADAEQAEAEAAAEQgBAHgPAGQgMAHgJAAQgSgBgOgKg");
	this.shape_3.setTransform(113.6,17.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#993300").s().p("AgKBAQgDgEAAgEIgBgQIgBgRIACgUIABgSQgBgFAEgDQAEgDAFAAQAEAAADADQADADAAAFIAAASIgBAUIAAARIAAAQQABAEgEAEQgEADgDAAQgGAAgDgDgAgIgsQgDgDAAgGQAAgFADgEQAFgEAEAAQAGAAAEAEQAFAEAAAFQAAAGgFADQgEAEgGAAQgEAAgFgEg");
	this.shape_4.setTransform(106.8,15.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#993300").s().p("AAYBCQgGAEgGABIgMABQgUAAgNgNQgNgMAAgUQAAgYANgOQANgOAVAAQAGAAAGABIAJAEQABgdABgLQACgLAKAAQAFAAADADQADAEAAAEIgCAnIgCAlQAAAfACALIABADQAAAEgEAEQgDADgFAAQgHAAgDgGgAgRAEQgHAHAAAQQAAAJAHAGQAHAIAKgBQAFABAEgCIAIgGIADgDIAAgfQgDgGgFgCQgEgDgHAAQgMAAgGAHg");
	this.shape_5.setTransform(98.7,15.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#993300").s().p("AgdAmQgPgLAAgUQAAgVAMgQQANgRAVAAQAPAAAKAFQAOAHAAAOQAAAJgLAIQgFADgPAGIgcAMQAEAFAFACQAHACAHAAQALABAIgFQAHgFAFAAQAJABAAAIQAAAKgOAHQgNAFgNAAQgVAAgNgKgAgLgUQgGAGgDAKIATgIIASgKQgFgEgKAAQgHAAgGAGg");
	this.shape_6.setTransform(88.4,17.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#993300").s().p("AgiAuQgDgEAAgEIAAg5IAAgIIAAgIQABgFADgDQADgEAFAAQAKAAABAKQAPgLATAAQASAAAAAXIAAAGQgBANgMAAQgKAAgBgLIAAgJQgTADgJARIAAAsQAAAFgDADQgDADgFAAQgGAAgDgDg");
	this.shape_7.setTransform(79.3,17.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#993300").s().p("AgnBDQgDgEAAgEIAAgYIABgoIACgoQAAgYANABIAIgBIANAAQAQAAAPALQARAMAAATQAAAWgSANQgQALgUAAIgIAAIAAAoQAAAEgEAEQgDADgFAAQgFAAgDgDgAgQguIAAANIgBAdIAGABQAMABAJgHQAKgHAAgLQAAgIgJgGQgJgGgJAAIgFAAIgEABg");
	this.shape_8.setTransform(70.1,15.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#993300").s().p("AgdAmQgPgLAAgUQAAgVAMgQQANgRAVAAQAPAAAKAFQAOAHAAAOQAAAJgLAIQgFADgPAGIgcAMQAEAFAFACQAGACAIAAQALABAIgFQAHgFAFAAQAJABAAAIQAAAKgPAHQgMAFgNAAQgVAAgNgKgAgLgUQgGAGgDAKIAUgIIASgKQgHgEgJAAQgHAAgGAGg");
	this.shape_9.setTransform(52.3,17.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#993300").s().p("AgHA9QgDgDgBgFIAAgJIABgKIgCgsIgQgBQgLgCAAgKQAAgFADgDQAEgEAEAAIAQABIgBgJIAAgJQAAgFADgDQAEgDAFAAQAMAAAAAWIAAAHIAJgBQAKAAADACQAIACAAAIQgBAFgDAEQgDADgFAAIgFAAIgEAAIgIAAIABAuIAAAEIAAAFQAAAUgNAAQgEAAgDgDg");
	this.shape_10.setTransform(43.1,16);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#993300").s().p("AgdAmQgPgLAAgUQAAgVAMgQQANgRAVAAQAPAAALAFQAMAHAAAOQABAJgLAIQgFADgPAGIgcAMQADAFAHACQAFACAHAAQAMABAIgFQAIgFAEAAQAJABAAAIQAAAKgPAHQgMAFgOAAQgTAAgOgKgAgLgUQgGAGgDAKIAUgIIASgKQgHgEgJAAQgHAAgGAGg");
	this.shape_11.setTransform(33.7,17.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#993300").s().p("AgIBFQgDgEAAgEIAAh5QAAgGADgDQAEgDAEAAQAFAAADADQAEADAAAGIAABzQAAASgMgBQgFABgDgEg");
	this.shape_12.setTransform(26.3,15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#993300").s().p("AgkBGQgDgDAAgFIAAghIAAghIgBghIgCgRQAAgIADgFQAFgGAGAAQAFAAADADQADAEABAEIAAABIALgFQAFgBAGAAQAVAAAJARQAGANABAUQAAATgMAMQgLAOgUAAIgPgCIAAAkQAAAFgDADQgEAEgFAAQgGAAgDgEgAgEgpQgGACgGAGIABAjQAIACAHAAQAJAAAFgFQAEgGABgKIgBgQQgDgLgJAAQgFAAgFADg");
	this.shape_13.setTransform(19.2,19.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#993300").s().p("AgHAzQgDgEAAgFIgCgdIgCgdIgBgIQgLAFgKAOIgBACIgBAbIAAAHIAAAGQAAAEgEADQgEADgFAAQgHAAgDgHQgCgEAAgKIAAgfIAAgNIAAgNQAAgIACgGQAEgIAGAAQAFAAAEAEQAEADAAAFIgBAHQANgPAMAAQAOAAAFAKQAFgEAHgDQAGgCAIAAQARAAAGARQACAEACAUIAGAuQABAFgEAEQgEADgFAAQgKAAgCgKIgDgaIgDgYQgCgQgEAAQgCAAgHAEIgLAHQAAAKADASQACATAAAJQAAAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_14.setTransform(7.4,17.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#993300").s().p("AgcAlQgNgMAAgVQgBgSALgPQAOgSAWAAQASAAAKAOQAKANAAASQAAATgLAPQgNAQgTAAQgQAAgMgLgAgMgOQgFAIAAAKQAAALAGAGQAFAEAGAAQAHAAAFgFQAHgGAAgKQABgcgQAAQgKAAgGAKg");
	this.shape_15.setTransform(-4.5,17.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#993300").s().p("AgmA2QgNgOAAgTQAAgcAZgfQAWgaAWAAIAHAAIAGABQADgEAGAAQAJAAACALIABAQQAAAFgCADQgDAGgHAAQgIAAgDgJQgCgEgCgBQgBgBgGAAQgLAAgNASQgVAXAAAVQAAAJAHAHQAGAIAJAAQAIAAAJgGIANgIQAHgEADAAQAGAAADADQAEAEAAAEQAAAGgFADQgYAVgYAAQgUAAgNgOg");
	this.shape_16.setTransform(-14.6,15.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#993300").s().p("AgdAmQgPgLAAgUQAAgVAMgQQANgRAVAAQAPAAAKAFQAOAHAAAOQAAAJgLAIQgFADgPAGIgcAMQAEAFAFACQAGACAIAAQALABAIgFQAHgFAFAAQAJABAAAIQAAAKgPAHQgMAFgNAAQgVAAgNgKgAgLgUQgGAGgDAKIAUgIIARgKQgGgEgJAAQgHAAgGAGg");
	this.shape_17.setTransform(-33.2,17.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#993300").s().p("AAVBAQgDgHgBgNIgCgUIAAgHIABgGIgBgIQAAgEgEAAQgKAAgHAIQgEAFgHAMQAAAggDAHQgDAHgIAAQgFAAgEgDQgEgEAAgFIABgEQABgCABgWIAAg6IAAgDIAAgOIAAgIIgBgIQAAgFADgDQAEgDAFAAQAJAAADAJQABAGAAAKIAAASIgBARQAHgGAHgDQAGgDAJAAQAPAAAGAIQAFAHABAMIABAVIACASIADARIABADQAAAFgEADQgEADgFAAQgJAAgCgJg");
	this.shape_18.setTransform(-43.2,15.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#993300").s().p("AgIBAQgEgEAAgFIABgDIAAgEIgBgNIAAgMIgCgfIgCggIgFAAQgUAAgLgCQgKgDAAgJQAAgEADgEQAEgEAGAAIAOACIAOABIAQgBIAPAAIAUABIAUABQAFAAAEADQAEAEAAAFQAAAFgEADQgEAEgFAAIgVgBIgWgBIADAkIACAjIAAAIIABAJQAAAHgDAFQgEAHgGAAQgEAAgEgDg");
	this.shape_19.setTransform(-54.6,15.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.1,0,212.1,29.1);


(lib.Dynamo_motion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.3,1,1).p("A+To9QgDgCgDgDIAAAAQgbgVgQggQgTgqgIguQgIgvAEgwQABgYgFgSQASAkAgAXQAgAXAlAcQAeAXArAMQAtAMAkAZQAeAWATAgQAJAPADANQATgMARgQQAdgaAsgJQARgDAXAAQgbghg3gLQgUgEgQgHQArgSAxAOQAvAOAaAZQAMgmAngbQAhgXAngRQgHAkgUAkQgMAWgLAcQAtgGAoAQQApAQAaAcQADACACADQAXAaALAmQAGAYAIASQACgyAVglQAXgoAmgVQAkgVAugNQAvgOAhgUQAJgGAKgHQgLAqgGAwQgBABAAAAQgFAnAHAtQAGAogFA1QgFAuglAfQguAng1gcQgEgCgCgBQgBgBAAAAQgKgFABgBAr+i9QgFiIAMiDQANiQgNiOQgMiIhwhQQh9hXhygvQh9g0iKgPQiQgPiGAiQiGAjhsA8QiBBIhBBqQhIB0gHCXQgFCIAECXQADCTgBCTQAAAKAAAJQgRAHgQAHQgpASgiAVQgkAVgsAOQgqANgeAZQggAaghAPQgoASghAbQgWASgWAVQgUATgaARIgBAAQAQAlAZAbQAbAdAXAmQAXAmAbAZQAdAaAcAiQAbAhApAcQAqAcAaAeQAbAfAtATQArATAiAQQArATAnAWQAUAMAfASQAtAZAzAIQAwAIAqAQQAlAOAvAIQAtAHAxAEQAyAFAzAGQAzAHAxAHQAxAIAugEQAygEAzAFQApAEAsgDQAEgBAEAAQADABADABQAdALAhATQAhATAnANQACABADABQAjAOAkAMQArAOAtALQAuANApAMQAqAMAtALQAoAKAvAMQAwAMAwAIQAqAHAyAKQAwAJAwgHQAxgIAwABQAUAAAJgIQgKgGgLgFQgggRglgZQgogbgigjQgegdgegiQgegggegoQgKgMgIgNQgQgZgMgbQgSgqgaggQgcgjgNgoQgQgqgBgyQgBg1AlgMQgfgWgqgNQgwgOgwgIQgygHgxgCQg0gDg0gBQgwgCgzAGQgwAFg1gBQg1AAgrALQgyAMgxAFQgvAEgvALQgvALgsAIQgwAJggAaQATAgAeAhQAfAhAeAdQAdAcAeAhQAbAeAlAdQAZAVAjAZQAhAXAlAaQAlAaAtAQQAEABAEACA8vmCQgtgFgWgWQgcgbADgwQACgvgKgkQAAgBAAgBQgBgEgCgEQgNgqgPgrQAcAcAzAFQA6AGA5AMQAmAIASAhQACADABADQAQAmgEAtA8GmKQADAAADAAA8GmKQAEgEAEgDQAKgHAOgEQAWgGAZgBQAggBAdAKQAtAQARAkQASAmgLA2QgHAjgTAeQgWAkg2ACQgyACgagaA8vmCQAGABAIAAA8GmKQgXABgSAHA8Nj2QgEgIgFgJQgSgoALgzQAFgYASgQA64o+QAQgIAPgKAzvpaQAKgrAWglQAWgjAigTQAhgSAjgWQAjgWAhgWQAmgZAfgUQAggVAhgLQgBAlgSAnQgOAgAGAzQAFAzgOAdQgKAUgQAEQAAAAgBAAQgFACgFgBAy/nwQABAEACAEA2MqVQgBABAAABQgBADgCAEA2Em4QgJACgIADA24kZQgDgLgCgMQgHg4AVggQATgcAYgUA15nAQgGAEgFAEQAagGAfAFQAqAHAsAUQArAVADA3QACAdgDAeQgEAvglATQgpAVg2gFQgtgEgcgdQgKgKgHgMAxYl0QgJAqgRAiQgPAegXAOQgBAAgBAAQgEgCgEgCAn8ieQAKgnAYgdQACgCACgCQAXgcAcggQAdggAigZQAhgWAngaQAjgXAngVQAngVAqgJQAtgJA1ACQgRAlgLArQgNAwAHAzQAHAvAAA1QAAAVAAAVQABAeABAdQABAYgCAXQALAEALAEQAUAIAVAEQADABAEABQADgBADgBQAWgEATgHQAmgOAcgXIg1AOIhKAAAhEAdQADgFADgFAg5gxQgCAbgGAYQgEAQABALQABAMAFAIAATgaQADABADAAAATgaQAAgBAAgCAANgbQADABADAAQACAwABAvQABA2AAAsQgBAzADAzQACAtABA1QAAA0AFAzQAEAygHAvQgEAYACAXQAAACAAADQAEgBAEgBIALgBIAAAAQAAAAAAAAQgIAHgJAJIAAAAQAAADABADApFAiQBZBDCXAQQCdAQBWhGQARgOANgUAr+i9QAQABAQAEQAwAKAxADQAIABAIAAQADAAAEAAQABABABAAQATAEAUACQAUADAWABQALABALAAQAAAAABAAQgBACAAACQgLAugVAlQgTAigPAsQgEAMgCAPQgBAHAAAIAAeJ4QgfAegjAWQghAUgmAVQgkAUghAVQgmAXgoAQQgmAOgvANQgsALgqANQguAOg0ACAAvJoQADgDADgDAAvJoQgFABgGAAAAcJrQABAGABAHAxti+QAsgLA1AIQAzAGAxAAQAwgBA1gDQAkgCAhAEQAAAGAAAGQAGCSgFCMA7VAbQgsADgpAOQguAQgkAgQghAcgOAqQgQAzA2AaQAbAOAXAPQAUAPAkADQAyAEAyAEQAyAEAyABQAzABA0AAQA1gBAyADQAzADAxAHQAzAIAwgMQAvgMAwgMQAsgLAvgYQApgVAYgjQATgbgDgpQgDg2gggSQgogWgzgJQgogHgigDQAFgKADgKQANgvACg1QACgtgLglAyYj8QAXANAOAhQADAIADAIA1WhIQgBATgCAUQgDAugWAqQglAIgxgIQgugHglgLQgFAGgDAGA1WhIQgaAHgWAHQgoANgmAcQghAWggAbQgDADgDACQgDgBgDgBA1WhIQAAgDABgDA0xhQQgUAEgRAEA4QB1QAsAFAwgFQAxgFAzgDQAUgBAUgEAx7AMQgNAagZAOQgkAVgvARQgZAJgbAFIAAAAQAEArgEAnQAAABAAABQgEAEgGACQgNAEgPADQgNAEgOAAQgOAAgOAAQgPAAgOAAQgPABgOgBQgPAAgNgBQgOgCgOgDQgNgDgNgDQABglAAgnQgDAAgDgBQgygHgvgOQgugOgagaQgMgMgKgQAjdR7QAAAAABAAQADACAEACA4xiUQAiAiAsgdQAHgFAEgIA7kjAQgBACgCADQgEgEgDgFQgDgEgDgFA74iAQADgjAOgYA74iAQgBAJAAALQgBAyAOAnQAKAaANAUQAFAAAFAAEgiBAAAQADgBADgCQAYgKAXgJQAsgSApgMQAqgOArgSQAlgQAygIQAtgHAmgNA4QB1QAAAAAAgBEgiBAAAQgBBpgFBHA50InQABgBACgBQgCgDgBgDAaxAdICyAuQgoAOgVAjINFhEIAAA1Io+C+Ih4gRIjECIIgeAAIk1BqQgngkAYgoIBLg8IiWAAIBSgtIAuAAQAYgYAsABIlFgtIEBhEICHhLIhLguIgugCIDfg3IgLgDEAgtAErIFrAzIq2DMQgwAIAEgzQgZAVglAHIgWAAIpqCPIg+AAICQA1IjLAAItQh3AQlCnQgTgJgEAAAQlCnIAAACIqvCIIAABqIK2hEIgZAtIgrBLIkPAAIhTBqIE0BxIgOAAAXSBUImPBkQgSgKgMgGQAAAAAAgBALYiNIj4BzIAABhICthZIGYBhIAABYAaxAdIEbhGIuJAAIDEhLIAAgXIovgCIA9gcIgtg8IpqCYQAFgDAEgEAQTGEIgbAAAVEGEIkxAAAjUR2IW9AA");
	this.shape.setTransform(-11.7,21.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000CC").s().p("AAaI2QgygGgyAFQguAEgxgIIhkgOQgzgHgygEQgxgEgtgIQgvgIglgOQgqgPgwgIQgzgIgsgaIg0gdQgngXgrgTIhNgiQgtgTgbggQgagdgqgdQgpgcgbggQgcgjgcgZQgcgagXglQgXgmgbgdQgZgbgPglIAAAAQAagRAUgTQAWgVAWgSQAhgaAogSQAhgPAggbQAegYArgOQArgNAkgWQAigUAqgTIAggPIAHgCIAugUQAsgRApgNQAqgOArgRQAlgRAygHQAtgIAmgNIgBAUQgBAyAOAoQAKAaANAVQgsACgoAOQgvAQgkAgQghAdgNAqQgRAyA2AbQAbANAXAQQAUAOAkADIBkAJQAyADAyACQAzABA0gBQA1AAAzADQAyACAwAIQAzAHAwgMIBfgYQAsgLAvgXQApgVAYgjQATgbgDgqQgDg2gggRQgogWgzgJQgogHgigEQAFgJADgMQANguACg2QACgtgLgkQAsgLA1AHQAzAGAxAAQAwAAA1gDQAkgCAhADQAQACAQADQAwALAxADIAQABIAHAAIACAAIAnAHQAUADAWABIAWAAIAAAFQgLAugVAkQgTAjgPAsQgEAMgCAQQBZBCCXAQQCdARBWhHQARgOANgTQABALAFAIQgFgIgBgLIAGgLIgGALQgBgMAEgPQAGgZACgcIAWAIQAUAIAWAFIAHABIAGACIADBgIABBhQgBA0ADAzQACAtABA1QAAAyAFA0QAEAxgHAwQgDAXABAXIAAAFIACANQggAegjAWQghAVgmAVQgkATghAWQgmAXgoAPQgmAPgvAMQgsALgqAOQguAOg0ABQgQgZgMgaQgSgrgaggQgcgjgNgoQgQgqgBgxQgBg2AlgMQgfgWgqgNQgwgOgwgHQgygIgxgCIhogEQgwgBgzAFQgwAGg1gBQg1gBgrALQgxANgxAEQgvAEgvAMQgvAKgsAIQgwAJggAaQATAhAeAgQAfAhAeAdQAdAcAeAiQAbAeAlAdQAZAUAjAZIBFAyQAlAaAtAPIAAAEQgUACgUAAQgXAAgWgCgAlQC1IADgDIgDgGIADAGIgDADgAtjjBQAFhHABhrQgBBrgFBHgAImkFQAChEAAhGQAAhKgDhLIAAgMIAAAMQADBLAABKQAABGgCBEgALdlBIABgOIgBAOg");
	this.shape_1.setTransform(-143.3,58.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00CCFF").s().p("AGNMwIhcgRQgwgIgwgMIhXgVQgtgMgqgMQgogMgvgMQgsgMgrgOQgkgMgjgNIgGgDQgmgNghgTQghgTgegLIgFgCIgIgDQgtgQglgZIhGgyQgjgZgagUQgkgegbgeQgeghgegcQgdgdgfghQgeghgTggQAggaAwgJQAsgIAvgLQAvgLAvgEQAxgFAygMQArgLA1ABQA1AAAwgFQAzgGAwACIBnAEQAxACAyAIQAwAHAwAOQAqANAfAWQglAMABA1QABAyAQAqQANAoAcAjQAaAgASAqQAMAbAQAZIASAaQAeAnAeAhQAeAhAeAeQAiAiAoAbQAlAaAfAQIAWALQgJAIgUAAQgwgBgxAIQgVADgVAAQgbAAgbgFgAqVDEIgYAIQgJAHgDAKQgFAPAHAOQAXAhAkgWQAHgIADgJIADgLQABgKgGgIIgIgLIgKgEIgPgFIAAABgABECnQgJAGgDAKQgEAPAGAOQAXAhAkgWQAHgHADgKIADgLQABgKgGgHIgIgLIgKgFIgPgFIAAABIgYAJgAnDCnQgJAGgEAKQgEAPAHAOQAXAhAjgWQAHgHAEgKIADgLQAAgKgGgHIgIgLIgJgFIgPgFIgBABIgXAJgAizCIIgYAIQgIAGgEALQgEAOAHAOQAXAiAjgWQAHgIADgKIADgLQABgKgGgHIgIgLIgJgFIgPgEIgBABgAHzjiQiXgQhZhCQABgQAEgMQAQgtATgiQAVgkALguIABgFQAKgnAYgdIAEgEIAzg8QAdggAigYIBIgxQAjgXAmgVQAogVAqgIQAtgKA1ADQgRAkgLAsQgNAvAHAzQAHAvAAA2IAAAqIACA6QABAYgCAXQgCAcgHAZQgDAPABALQgNAUgSAOQhFA5h0AAQgbAAgegDgAIvlSIgYAIQgIAGgEALQgEAOAHAOQAXAiAjgWQAHgIADgKIADgLQABgKgGgHIgIgLIgJgFIgPgEIgBABgAF6lwIgYAIQgIAGgEALQgEAOAHAOQAbAjAngYQAHgHADgKIADgLQABgKgGgHIgIgLIgKgFIgWgEIgBABgAK+l4IgYAIQgIAHgEAKQgEAPAHAOQAXAhAkgWQAGgIAEgJIADgLQABgKgGgIIgIgLIgKgEIgPgFIgBABg");
	this.shape_2.setTransform(-95.8,55.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9933").s().p("ApTDIIk1hxIBThpIEQAAIAqhLIExAAICXAAIhMA8QgXAnAmAjIE0hoIAeAAIDEiIIB5ARIFqAzIq2DLQgvAHADgzQgYAWglAHIgXAAIppCPg");
	this.shape_3.setTransform(143.4,69.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC33").s().p("AivCSIgBAAIAAhZImYhgIitBZIAAhhID4hzIIuACIAAAXIjDBLIOIAAIkbBGIgLgDIALADIjfA3ImOBkIgdgRg");
	this.shape_4.setTransform(112.1,23.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF00").s().p("AoHCsIBLg8IiWAAIBSguIAuAAQAYgXAsABIlFgsIEBhEICHhMIhLgtIgugCIDfg3ICyAtQgoAPgVAjINEhEIAAA1Io+C9Ih4gRIjDCIIgeAAIk1BpQgngjAYgog");
	this.shape_5.setTransform(182.6,49.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF9900").s().p("ApqA6IKuiHIABgCIAdARIGPhkIAuACIBMAtIiIBMIkBBCIFFAuQgsgBgYAXIgtAAIhTAtIkxAAIAZgtIq1BEg");
	this.shape_6.setTransform(87.6,46.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF99FF").s().p("AgKHvIgdgCIgbgEIgagHIABhMIADABQAVACAXAAIAAAAIAAAAQATAAATgCIACAAIAAAAIAEAAQAxgFAzgEQAUgBAUgDQgUADgUABQgzAEgxAFIgEAAIAAAAIgCAAQgTACgTAAIAAAAIAAAAQgXAAgVgCIgDgBIAAAAIgGAAQgygHgvgOQgugOgagbQgMgMgKgPIAKgBIgKABQgNgVgKgaQgPgoACgyIABgUQADgjAOgYQAaAbAygCQA2gDAWgjQATgfAHgiQALg1gSgnQgRgjgtgRQgdgKggABQgZABgXAGQgNAFgKAHIgIAGQgXACgTAHQgsgFgWgWQgcgcADgvQACgwgKgjIAAgDIgDgIIgchVQAcAcAyAFQA7AGA5AMQAmAIASAiQAQgIAPgKQATgNARgPQAdgaAsgJQARgEAWABQgagig3gLQgUgEgQgHQArgSAxAPQAvANAaAaQAMgmAmgbQAggXAngSQgGAlgUAkQgMAVgLAcQAtgGAoAQQAoARAbAbIAFAGQAXAaAKAmQAHAXAIATQACgzAVgkQAXgpAmgVQAkgUAugOQAvgNAhgVIATgMQgLApgHAwIAAACIgIABIgBAAIgBAAIABAAIABAAIAIgBQgFAmAHAuQAGAngFA1QgFAuglAfQguAng1gcIgGgDIgBAAIgKgGIAAAAIAAAAIAKAGIABAAQgJAqgRAiQgQAdgXAPIgBAAIgJgFIAJAFIABAAQAXANAOAhIAHAQQALAkgCAtQgCA2gNAuQgDAMgFAJQgNAagaAPQgjAVgvARQgZAJgbAFIAAAAQAEAqgEAoIgBACQgDAEgGACIgcAHQgNADgOAAIgcAAIgdABIgPAAIgNAAgAAuDnQgoANglAbQghAYggAbIgGAFQAlALAuAHQAwAHAlgHQAVgrAEgvIADgmIAlgJIglAJIABgGIgBAGQgbAGgVAIgAhvFTQAEgHAFgFIgGgCIAGACQgFAFgEAHgAhUCfQASAAAUgOQAHgFAEgHQgEAHgHAFQgUAOgSAAIgBAAIAAAAQgVAAgSgRIgBgBIABABQASARAVAAIAAAAIABAAgAAwiXQgZAVgSAbQgUAgAHA5QABAMAEAKIAAAIIACAFQAEAJAGAHQAIALAKAKQAcAeAtAEQA2AFAogWQAlgTAFgvQADgdgCgcQgDg3gsgVQgrgVgqgHQgggFgZAGIAKgIIgKAIIAAAAgAAeiRQAJgEAJgCQgJACgJAEgAj1jDIACgVQAAgigNgdIgDgFIADAFQANAdAAAiIgCAVgAD4jGIgDgIIADAIgAAnlyIgDAHIADgHIABgCIgBACgAHslYIAAAAg");
	this.shape_7.setTransform(-157.8,-7.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCCFF").s().p("ADrCfQgLgmgWgaQAJgrAXglQAVgiAigTQAhgSAjgWIBEgsIBFgtQAhgWAggLQgBAlgSAoQgOAgAGAyQAGAygPAeQgKATgQAFIAAgCQAGgwALgoIgTAMQggAUgwANQguAOgkAUQglAVgYApQgUAkgDAzQgIgTgGgXgAk3BRQg4gMg7gGQgzgEgcgdIAdBVIgEAEQgbgVgPghQgUgpgIgtQgIgwAEgwQACgXgGgSQASAkAgAWIBFA0QAeAXArAMQAuAMAjAYQAfAWASAgQAJAPAEANQgQAKgQAIQgRghgngJg");
	this.shape_8.setTransform(-158.2,-48.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AjyB0IADgFIABgFQAxAQAXhDIgJgXQgFgKgGgHQgFgDgFgBQgPgDgPgCIgLACQgZAGgNAUQgFALAAAMIgJgRQgSgoAKgyQAFgYASgQIAHAAIgHAAIAJgHQAKgHANgEQAXgGAYgBQAhgBAcAKQAuAQARAkQASAmgLA1QgIAjgSAeQgWAkg2ACIgIAAQgsAAgYgYgACkBqQgtgEgdgdIADgGQAZANAigKQAPgJADgRIADgMIgDgFQgUgvg1AEIgLACIgGACIgFAEIgGAFIgFAFIgDAGIgBALIAAADQgEgLgBgLQgIg4AWggQASgcAZgUQAZgGAgAFQAqAHArAUQArAVAEA3QACAdgDAdQgFAvglATQghARgpAAIgUgBg");
	this.shape_9.setTransform(-164.2,-8.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("Ax/JEIAJADIgIAAgAO0F+ItQh4IAGgFIgGAFIAAAAIgLACIgHACIgBgFQgBgXADgYQAIgvgFgyQgFgzAAg0QAAg0gCgtQgDgzAAg0IgBhhIgChgIAGABIgGgBIAAgDQAVgEATgIQAmgNAcgXIJqiZIAtA9Ig9AcIj4BzIAABiICuhaIGXBiIAABYIgBAAIgIgEIgBAAIgEgCIAAAAIgDgBIAAgBIgBAAIgBAAIAAAAIgCgBIgBAAIgBAAIAAAAIAAAAIABAAIABAAIACABIAAAAIABAAIABAAIAAABIADABIAAAAIAEACIABAAIAIAEIABAAIAAACIquCIIAABpIK1hEIgZAtIgbAAIAbAAIgqBLIkQAAIhTBqIE1BxICQA1gAPwFJIgOAAgARIAjgAnIoAIABAAIgBAFg");
	this.shape_10.setTransform(-17,56.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("An2G/QgHgOAFgOQADgLAJgGIAYgJIAAAAIAPAEIAKAFIAIALQAGAHgBAKIgDALQgEAKgGAIQgOAIgNAAQgSAAgOgUgAD7GZQgHgNAFgPQADgKAJgHIAYgIIAAgBIAPAEIAKAFIAIALQAGAIgBAKIgDAKQgEAKgGAIQgOAJgNAAQgSAAgOgVgAkMGZQgHgNAEgPQAEgKAIgHIAYgIIABgBIAPAEIAJAFIAIALQAGAIAAAKIgDAKQgEAKgHAIQgOAJgMAAQgSAAgOgVgAgTGDQgHgOAEgPQADgKAJgGIAXgJIABgBIAOAFIAKAFIAIALQAGAHgBAKIgDALQgDAKgHAHQgOAJgMAAQgSAAgNgUgAkXCmQgygHgygDQgzgDg0ABQg0AAgzgBQgygCgygDIhlgIQgjgEgVgOQgWgPgcgOQg2gaARgzQAOgpAhgdQAkggAugPQApgOAsgDQAKAPAMAMQAaAbAuAOQAvAOAyAHIAGABIgBBLIAaAGIAbAEIAdACIAdAAIAdAAIAcAAQAOgBANgDIAcgHQAGgCADgEIABgCQAEgngEgqIAAAAQAbgFAZgJQAvgRAjgVQAagOANgaQAiADAoAHQAyAJAoAWQAgASADA2QADAogTAbQgYAjgpAVQguAYgsALIhgAXQgdAIgfAAQgTAAgTgDgALPhXQgHgOAEgPQADgKAJgGIAYgJIABgBIAOAFIAKAFIAIALQAGAHgBAKIgDALQgDAKgHAHQgOAJgMAAQgTAAgNgUgAIah1QgHgOAEgPQADgKAJgHIAYgIIABgBIAWAFIAKAEIAIALQAGAIgBAKIgDALQgEAJgGAIQgQAKgOAAQgUAAgQgVgANeh9QgHgOAEgPQAEgKAIgGIAYgIIABgCIAPAFIAJAFIAIALQAGAHAAAKIgDALQgEAKgHAHQgOAJgMAAQgSAAgOgUgArZlXQgIgDgKgFQgJgFgKgIQgFgLAAgMIAAgFQAAgMAFgLQAOgUAYgGIALgCQAPACAPADQAFABAFADQAHAHAEAKIAKAXQgUA2gjAAQgIAAgKgDgAmNl/QgKgFgKgKQgGgHgFgIIgCgGIAAgIIAAgDIACgMIACgFIAFgGIAGgGIAGgDIAFgCIALgCQA1gFAVAwIACAGIgCALQgEARgPAKQgOAEgNAAQgRAAgPgIg");
	this.shape_11.setTransform(-115.1,36.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CCCCCC").s().p("AgBACIADgDIgCADg");
	this.shape_12.setTransform(-206.1,-36.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(0.3,1,1).p("Ar+i9QgFiIAMiDQANiQgNiOQgMiIhwhQQh9hXhygvQh9g0iKgPQiQgPiGAiQiGAjhsA8QiBBIhBBqQhIB0gHCXQgFCIAECXQADCTgBCTQAAAKAAAJQADgBADgCQAYgKAXgJQAsgSApgMQAqgOArgSQAlgQAygIQAtgHAmgNQADgjAOgYA6ZpQQATgMARgQQAdgaAsgJQARgDAXAAQgbghg3gLQgUgEgQgHQArgSAxAOQAvAOAaAZQAMgmAngbQAhgXAngRQgHAkgUAkQgMAWgLAcQAtgGAoAQQApAQAaAcQADACACADQAXAaALAmQAGAYAIASQACgyAVglQAXgoAmgVQAkgVAugNQAvgOAhgUQAJgGAKgHQgLAqgGAwQgBABAAAAQgFAnAHAtQAGAogFA1QgFAuglAfQguAng1gcQgEgCgCgBQgBgBAAAAQgKgFABgBA+To9QgDgCgDgDIAAAAQgbgVgQggQgTgqgIguQgIgvAEgwQABgYgFgSQASAkAgAXQAgAXAlAcQAeAXArAMQAtAMAkAZQAeAWATAgQAJAPADANA8vmCQgtgFgWgWQgcgbADgwQACgvgKgkQAAgBAAgBA64o+QgSghgmgIQg5gMg6gGQgzgFgcgcQAPArANAqQACAEABAEA64o+QACADABADQAQAmgEAtA8GmKQADAAADAAA8GmKQAEgEAEgDQAKgHAOgEQAWgGAZgBQAggBAdAKQAtAQARAkQASAmgLA2QgHAjgTAeQgWAkg2ACQgyACgagaA8vmCQAGABAIAAA8Nj2QgEgIgFgJQgSgoALgzQAFgYASgQQgXABgSAHA64o+QAQgIAPgKAzvpaQAKgrAWglQAWgjAigTQAhgSAjgWQAjgWAhgWQAmgZAfgUQAggVAhgLQgBAlgSAnQgOAgAGAzQAFAzgOAdQgKAUgQAEQAAAAgBAAQgFACgFgBAy/nwQABAEACAEA2MqVQgBABAAABQgBADgCAEA2Em4QgJACgIADA24kZQgDgLgCgMQgHg4AVggQATgcAYgUA15nAQgGAEgFAEQAagGAfAFQAqAHAsAUQArAVADA3QACAdgDAeQgEAvglATQgpAVg2gFQgtgEgcgdQgKgKgHgMAxYl0QgJAqgRAiQgPAegXAOQgBAAgBAAQgEgCgEgCAn8ieQAKgnAYgdQACgCACgCQAXgcAcggQAdggAigZQAhgWAngaQAjgXAngVQAngVAqgJQAtgJA1ACQgRAlgLArQgNAwAHAzQAHAvAAA1QAAAVAAAVQABAeABAdQABAYgCAXQALAEALAEQAUAIAVAEQADABAEABQADgBADgBQAAACAAABQADABAGAAQAAgCAAgCQAAgCAAgCAhEAdQADgFADgFAg5gxQgCAbgGAYQgEAQABALAAcgZQgBAWADAUQAHAvgEAyQgFA0AAAzQAAAogCAjQAAAMgBALQgDAzABA0QAAAsgBA1QgBAvgCAxAgBg/IBCAAAANgbQADABADAAApFAiQBZBDCXAQQCdAQBWhGQARgOANgUQABAMAFAIAr+i9QAQABAQAEQAwAKAxADQAIABAIAAQADAAAEAAQABABABAAQATAEAUACQAUADAWABQALABALAAQAAAAABAAQgBACAAACQgLAugVAlQgTAigPAsQgEAMgCAPQgBAHAAAIA5xIlQAggaAwgJQAsgIAvgLQAvgLAvgEQAxgFAygMQArgLA1AAQA1ABAwgFQAzgGAwACQA0ABA0ADQAxACAyAHQAwAIAwAOQAqANAfAWQglAMABA1QABAyAQAqQANAoAcAjQAaAgASAqQAMAbAQAZQA0gCAugOQAqgNAsgLQAvgNAmgOQAogQAmgXQAhgVAkgUQAmgVAhgUQAjgWAfgeQgBgHgBgGQAEgBADAAQAEABAEABQgGAFgHAHIAAAAQAAADABADAATJmQAFABAEABQADABAEABAArJsQAJADAIADQADABACAAQAjAOAaAVQAFAEAEADABBKJIAIAAIA1ANAxti+QAsgLA1AIQAzAGAxAAQAwgBA1gDQAkgCAhAEQAAAGAAAGQAGCSgFCMA7VAbQgsADgpAOQguAQgkAgQghAcgOAqQgQAzA2AaQAbAOAXAPQAUAPAkADQAyAEAyAEQAyAEAyABQAzABA0AAQA1gBAyADQAzADAxAHQAzAIAwgMQAvgMAwgMQAsgLAvgYQApgVAYgjQATgbgDgpQgDg2gggSQgogWgzgJQgogHgigDQAFgKADgKQANgvACg1QACgtgLglAyYj8QAXANAOAhQADAIADAIA1WhIQgBATgCAUQgDAugWAqQglAIgxgIQgugHglgLQgFAGgDAGA1WhIQgaAHgWAHQgoANgmAcQghAWggAbQgDADgDACQgDgBgDgBA1WhIQAAgDABgDA0xhQQgUAEgRAEA4QB1QAsAFAwgFQAxgFAzgDQAUgBAUgEAx7AMQgNAagZAOQgkAVgvARQgZAJgbAFIAAAAQAEArgEAnQAAABAAABQgEAEgGACQgNAEgPADQgNAEgOAAQgOAAgOAAQgPAAgOAAQgPABgOgBQgPAAgNgBQgOgCgOgDQgNgDgNgDQABglAAgnQgDAAgDgBQgygHgvgOQgugOgagaQgMgMgKgQAjdR7QgJAIgUAAQgwgBgxAIQgwAHgwgJQgygKgqgHQgwgIgwgMQgvgMgogKQgtgLgqgMQgpgMgugNQgtgLgrgOQgkgMgjgOQgDgBgCgBQgngNghgTQghgTgdgLQgDgBgDgBQgEgCgEgBQgtgQglgaQglgaghgXQgjgZgZgVQglgdgbgeQgeghgdgcQgegdgfghQgeghgTggQgCABgBABAysOoQgEAAgEABQgsADgpgEQgzgFgyAEQguAEgxgIQgxgHgzgHQgzgGgygFQgxgEgtgHQgvgIglgOQgqgQgwgIQgzgIgtgZQgfgSgUgMQgngWgrgTQgigQgrgTQgtgTgbgfQgagegqgcQgpgcgbghQgcgigdgaQgbgZgXgmQgXgmgbgdQgZgbgQglIABAAQAagRAUgTQAWgVAWgSQAhgbAogSQAhgPAggaQAegZAqgNQAsgOAkgVQAigVApgSQAQgHARgHQgBBpgFBHAjdR7QAAAAABAAQADACAEACAoLNoQAIANAKAMQAeAoAeAgQAeAiAeAdQAiAjAoAbQAlAZAgARQALAFAKAGA4xiUQAiAiAsgdQAHgFAEgIA7kjAQgBACgCADQgEgEgDgFQgDgEgDgFA74iAQgBAJAAALQgBAyAOAnQAKAaANAUQAFAAAFAAA4QB1QAAAAAAgBA50IfQABADACADEAgtAEdII+C+IAAA1ItFhEQAVAjAoAPIiyAtIEbBHIuJAAIDEBLIAAAXIovACIA9AcIgtA9IpqiZAVEDEICWAAIhLg8QgYgoAngjIE1BpIAeAAIDECIIB4gRAO6hhIA+AAIJqCOIAWAAQAlAHAZAWQgEgzAwAHIK2DMIlrAzAXSH0IAugCIBLgtIiHhMIkBhEIFFgtQgsABgYgXIguAAIhSguIkxAAIAZAuIq2hEIAABpIKvCIIAAACQgTAJgEAAABBghIM+h1IDLAAIiQA1Ik0BwIBTBqIEPAAIArBLIgbAAAO6hhIgOAAAQlGhIAABYImYBiIithaIAABiID4BzAQlGhQAAAAAAgBQAMgGASgKIGPBkAaxIrIjfg3AaxIrIgLADAjUR2IW9AA");
	this.shape_13.setTransform(-11.7,21.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0000CC").s().p("AAcI2QgygGgyAFQgtAEgygIIhkgOQgygHgygEQgygEgtgIQgugIgmgOQgqgPgwgIQgygIgtgaIg0gdQgngXgqgTIhOgiQgtgTgbggQgagdgpgdQgpgcgbggQgdgjgcgZQgbgagYglQgXgmgbgdQgYgbgQglIAAAAQAagRAVgTQAVgVAXgSQAhgaAngSQAhgPAggbQAfgYAqgOQAsgNAjgWQAigUAqgTIAhgPQgBBrgGBHQAGhHABhrIAGgCIAvgUQAsgRAogNQArgOAqgRQAmgRAxgHQAtgIAmgNIgBAUQgBAyAPAoQAJAaANAVQgsACgoAOQguAQglAgQggAdgOAqQgRAyA2AbQAcANAWAQQAUAOAkADIBkAJQAyADAyACQA0ABA0gBQA0AAAzADQAyACAwAIQAzAHAwgMIBfgYQAsgLAvgXQApgVAYgjQATgbgCgqQgDg2ghgRQgogWgzgJQgngHgigEQAEgJAEgMQANguACg2QACgtgMgkQAsgLA2AHQAyAGAxAAQAwAAA1gDQAlgCAgADQARACAPADQAxALAwADIAQABIAHAAIACAAIAnAHQAUADAWABIAWAAIAAAFQgLAugUAkQgUAjgPAsQgEAMgCAQQBZBCCXAQQCdARBWhHQARgOANgTIAHgLIgHALQgBgMAEgPQAGgZACgcIAXAIQATAIAWAFIAHABIAHACIACBgIABBhQAAA0ADAzIABAXIgBAXQgDAyAAAzIgBBiIgCBgIAAACIAIACIABADIABANQggAegjAWQghAVgmAVQgjATgiAWQgmAXgoAPQgmAPgvAMQgsALgqAOQguAOg0ABQgQgZgMgaQgSgrgZggQgcgjgOgoQgPgqgBgxQgBg2AkgMQgegWgrgNQgwgOgvgHQgygIgygCIhngEQgxgBgzAFQgwAGg1gBQg0gBgsALQgxANgxAEQgvAEgvAMQgvAKgsAIQgwAJggAaQAUAhAeAgQAeAhAeAdQAdAcAeAiQAbAeAlAdQAaAUAiAZIBFAyQAlAaAtAPIABAEQgVACgUAAQgXAAgWgCgAlOC1IADgDIgDgGIADAGIgDADgAIokFQADhEAAhGQAAhKgEhLIAAgMIAAAMQAEBLAABKQAABGgDBEgATolBQgGgIgBgLQABALAGAIgALglBIAAgOIAAAOgAlLCyIAAAAg");
	this.shape_14.setTransform(-143.5,58.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("Ax/IgIAJADIgIABgACzERQgagVgjgNIgFgCIgRgGIgIgCIgHgCIgIgCIAAgDIAChfIABhiQAAgzADgzIABgWIABhLQAAg0AFg0QAFgxgIgwQgDgVABgVIAAgEIABgFIAHABIALACIAAAAIASgCIM+h1IDMAAIiQA1IgOAAIAOAAIk1BxIBTBpIEQAAIAqBMIAZAtIq1hEIAABpIKuCHIAAACIgGADIAAAAQgNAHgEAAIAAAAIAAAAQAEAAANgHIAAAAIAGgDIAABZImXBiIiuhbIAABiID4BzIA9AcIgtA9gARIi/IgbAAgAPwnlgAnIojIABAAIgBAFg");
	this.shape_15.setTransform(-17,60.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF9900").s().p("ABiA/IgdARIgBgCIquiHIAAhpIK1BEIgZgtIExAAIBTAtIAtAAQAYAXAsgBIlFAuIEBBCICIBMIhMAtIguACg");
	this.shape_16.setTransform(87.6,55.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFCC33").s().p("Ar1AwIAAhhICtBZIGYhhIAAhYIABgBIAdgQIGOBkIDfA4IEbBFIuIAAIDDBLIAAAXIouACgAHQgEIALgCg");
	this.shape_17.setTransform(112.1,77.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF9933").s().p("ADiBAIgeAAIk0hoQgmAjAXAnIBMA8IiXAAIkxAAIgqhLIkQAAIhThpIE1hxIA9AAIJpCPIAXAAQAlAHAYAWQgDgzAvAHIK2DLIlqAzIh5ARg");
	this.shape_18.setTransform(143.4,31.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFF00").s().p("AnEDAIAugCIBLgtIiHhMIkBhEIFFgsQgsABgYgXIguAAIhSguICWAAIhLg8QgYgoAngjIE1BpIAeAAIDDCIIB4gRII+C9IAAA1ItEhEQAVAjAoAPIiyAtg");
	this.shape_19.setTransform(182.6,52.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_8},{t:this.shape_7},{t:this.shape_12},{t:this.shape_9},{t:this.shape_11},{t:this.shape_2},{t:this.shape_14},{t:this.shape_13}]},1).wait(4));

	// Layer 2
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(0.3,1,1).p("AFjijQAFgCAGgBAIbBoQBjA9CeACQCjACBkgyAFWiCQACgHACgGAwdA6QgCgHgBgHQgBgIgBgI");
	this.shape_20.setTransform(-123.9,15.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#0066FD","#FFFFFF","#FFFFFF","#996600","#FFFFFF","#FFCC00"],[0,0.533,0.969,0.988,1,1],-89.3,-61.8,87.4,60).s().p("Ag8L5QiHgoiIgkQiRgmhohKQhmhIgah4IgBgDIAAgPQABiTgDiTQgFiWAGiIQAHiXBIh1QBBhqCBhIQBsg8CGgiQCGgjCPAPQCJAPB+A0QByAvB9BYQBwBPAMCIQANCOgOCRQgKBwACB1QgZAKANAXQgaBigxB1Qg0B5hqBnQhcBYiFArQhLAXhKAAQhGAAhGgVg");
	this.shape_21.setTransform(-158.3,-16.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20}]}).wait(5));

	// Layer 4
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("AA7FJQg0gJgmgnQgfgfgMgnQgIgZAAgcQAAhFAvgyQgugNglgjQg3g3ABhOQgBhOA3g3QA4g4BNAAQAXAAAVAFQAyALAnAoQA3A3ABBOIgBASQgGBCgxAxIgDADQAmALAeAfQAzAyAABIQAAAcgIAZQgMAngfAfQgzAzhIAAQgQAAgPgDgAGEC1QgwAAgjgiQgigjAAgwQAAgdANgYQAIgPANgNQATgTAWgIQAUgIAWAAQAXAAATAIQAXAIASATQANANAIAPQANAYAAAdQAAAwgiAjQgiAigxAAIAAAAgAnGB8QgygyAAhGQAAhFAygyQAygyBGAAQBGAAAxAyQAyAyAABFQAABGgyAyQgxAyhGAAQhGAAgygyg");
	this.shape_22.setTransform(267.1,32.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(0.3,1,1).p("AkhkNIOhAAAnLmFIf3AAAqdQ4IJ2AAA4rw3MAtTAAAAvTsfISRAA");
	this.shape_23.setTransform(31,13);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(0.3,1,1).p("Ap8DEIBBAAAkih4ITrAAAvmjDIc+AAAlrDEIVSAAAqMA8IYnAA");
	this.shape_24.setTransform(351.1,40.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(0.3,1,1).p("A4/kNIOiAAAUnHZIhBAAAN8BRIc/AAAZBCdITrAAAX4HZIVSAAATWFSIYpAAEgjxgMfISSAAEgtJgQ3MAtSAAAA+7Q4IJ2AAA7pmFIf2AA");
	this.shape_25.setTransform(162,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22,p:{x:267.1,y:32.1}}]}).to({state:[{t:this.shape_22,p:{x:265.5,y:59.3}},{t:this.shape_25}]},1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-279.3,-96,731.4,235);


(lib.bracketdisplay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("ApwEYIAAovIThAAIAAIvg");
	var mask_graphics_1 = new cjs.Graphics().p("ApwEYIAAovIThAAIAAIvg");
	var mask_graphics_2 = new cjs.Graphics().p("ApwEYIAAovIThAAIAAIvg");
	var mask_graphics_3 = new cjs.Graphics().p("ApwEYIAAovIThAAIAAIvg");
	var mask_graphics_4 = new cjs.Graphics().p("AguEYIAAovIThAAIAAIvg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:52.1,y:6.2}).wait(1).to({graphics:mask_graphics_1,x:83.6,y:6.2}).wait(1).to({graphics:mask_graphics_2,x:115.1,y:6.2}).wait(1).to({graphics:mask_graphics_3,x:146.6,y:6.2}).wait(1).to({graphics:mask_graphics_4,x:120.3,y:6.2}).wait(1));

	// right
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AJOByQg+i6lFA5QlFA5i+giQi/gihWhX");
	this.shape.setTransform(177,11.4);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(5));

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AguEYIAAovIThAAIAAIvg");
	var mask_1_graphics_1 = new cjs.Graphics().p("ApwEYIAAovIThAAIAAIvg");
	var mask_1_graphics_2 = new cjs.Graphics().p("ApwEYIAAovIThAAIAAIvg");
	var mask_1_graphics_3 = new cjs.Graphics().p("ApwEYIAAovIThAAIAAIvg");
	var mask_1_graphics_4 = new cjs.Graphics().p("ApwEYIAAovIThAAIAAIvg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:120.3,y:6.2}).wait(1).to({graphics:mask_1_graphics_1,x:147.6,y:6.2}).wait(1).to({graphics:mask_1_graphics_2,x:117.1,y:6.2}).wait(1).to({graphics:mask_1_graphics_3,x:86.6,y:6.2}).wait(1).to({graphics:mask_1_graphics_4,x:56.1,y:6.2}).wait(1));

	// left
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1,1).p("AJOhxQhgBKi2AvQi1AwlJg/QlJhBg+C6");
	this.shape_1.setTransform(59,11.4);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(115.6,-1.5,4,25.8);


(lib.goNext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0.961)","rgba(255,255,255,0)","#2B2B2B"],[0,1,1],0,0.1,0,0,0.1,11.3).s().p("AhLAqQghgRABgYQgBgZAhgRQAfgSAsAAQAsAAAgASQAgARAAAZQAAAYggARQggASgsAAQgsAAgfgSg");
	this.shape.setTransform(22.8,8.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.502)").s().p("AhUhcICpBdIipBcg");
	this.shape_1.setTransform(25.1,20.4);

	this.blinker = new lib.general_buttoncolor();
	this.blinker.parent = this;
	this.blinker.setTransform(23.4,20.1,1.5,1.5,0,0,0,11.9,11.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["rgba(255,255,255,0.961)","rgba(255,255,255,0)","#2B2B2B"],[0,1,1],0,0.1,0,0,0.1,14.8).s().p("AhjA3QgqgXABgfQgBggAqgXQAqgYA5AAQA6AAAqAYQApAXAAAgQAAAfgpAXQgqAYg6AAQg5AAgqgYg");
	this.shape_2.setTransform(23.4,8.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(0,0,0,0.502)").ss(1,1,1,3,true).p("AAACxQhIAAg0g0Qg1g0AAhJQAAhIA1g0QA0g0BIAAQBKAAA0A0QA0A0AABIQAABJg0A0Qg0A0hKAAg");
	this.shape_3.setTransform(23.3,20.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["rgba(103,103,103,0.839)","rgba(134,134,134,0)"],[0.678,0.918],-0.8,0,0,-0.8,0,24.9).s().p("AitClQhEhFAAhgQAAhgBEhEQBEhEBiAAQBfAABCAwQBBAvAWCrQAVCskNAbQhiAAhEhEgAgICRQBGAAAygwIABgBIAEgDQA0g0AAhIQAAhJg0g0IgGgGIAAAAQgyguhEAAIgBgBIAAAAIgBAAIAAABQhEAAgyAuIgBABIgCACIgCABIAAAAIgBACQg1A0AABJQAABIA1A0IABABIACACQAzAxBGAAIAAAAIABAAIgBAAIAAAAQhGAAgzgxIgCgCIgBgBQg1g0AAhIQAAhJA1g0IABgCIAAAAIACgBIACgCIABgBQAyguBEAAIAAgBIABAAIAAAAIABABQBEAAAyAuIAAAAIAGAGQA0A0AABJQAABIg0A0IgEADIgBABQgyAwhGAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_4.setTransform(24.2,23.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.blinker},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.blinker},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.blinker},{t:this.shape_1},{t:this.shape}]},2).wait(1));

	// Layer 2
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#33FFFF").s().p("AipCqQhGhHAAhjQAAhiBGhGQBGhHBjAAQBjAABHBHQBGBGAABiQAABjhGBHQhHBGhjAAQhjAAhGhGg");
	this.shape_5.setTransform(24.4,21.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0099FF").s().p("AipCqQhGhHAAhjQAAhiBGhGQBGhHBjAAQBjAABHBHQBGBGAABiQAABjhGBHQhHBGhjAAQhjAAhGhGg");
	this.shape_6.setTransform(24.4,21.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48.5,46.7);


(lib.Scene1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("Flying");
	}
	this.frame_9 = function() {
		playSound("Flying");
	}
	this.frame_21 = function() {
		playSound("Flying");
	}
	this.frame_32 = function() {
		playSound("Flying");
	}
	this.frame_43 = function() {
		playSound("Flying");
	}
	this.frame_57 = function() {
		this.stop();
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(12).call(this.frame_21).wait(11).call(this.frame_32).wait(11).call(this.frame_43).wait(14).call(this.frame_57).wait(1));

	// Layer 1
	this.instance = new lib.Dynamo_motion();
	this.instance.parent = this;
	this.instance.setTransform(370.6,-114.6,0.143,0.143,0,0,0,86.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.32,scaleY:0.32,x:-307.5,y:-63.6},8).wait(1).to({skewY:180,x:-316.5,y:16.4},0).to({scaleX:0.57,scaleY:0.57,x:507.4,y:20.4},10).wait(2).to({regX:86.5,regY:21.5,scaleX:0.57,scaleY:0.57,rotation:-51.4,skewY:0,x:94.6,y:-370.3},0).to({regY:21.6,scaleX:0.57,scaleY:0.57,rotation:-81.7,guide:{path:[94.5,-370.2,57.3,-330.4,29.8,-283,1,-233.1,-16.2,-172.2,-34.2,-107.7,-42.6,-28.7,-44.9,-7.3,-46.5,15.3]}},5).to({regY:21.4,rotation:-120.4,x:39.1,y:403.1},5).wait(1).to({regX:86.6,regY:21.5,scaleX:0.57,scaleY:0.57,rotation:-244.5,x:-32.4,y:487},0).to({scaleX:0.56,scaleY:0.56,rotation:-289.6,guide:{path:[-32.3,487,-2,444.1,19.7,397.8,45.8,342.2,62.4,279.6,80.8,210,92.5,147.4,105.5,77.7,105.9,0.1,106.2,-77.7,96.5,-152,87,-225.1,70.4,-295.6,57.5,-350.4,31.5,-399.9]}},10).wait(1).to({regX:86.4,regY:21.4,scaleX:0.32,scaleY:0.32,rotation:-360,skewY:180,x:-320.2,y:-59.4},0).to({scaleX:0.57,scaleY:0.57,x:524.4,y:-58.6},13).wait(2));

	// Layer 9
	this.instance_1 = new lib.Tween7("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(97.5,26.3,1,1,0,0,0,0.3,7.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(36).to({_off:false},0).to({scaleY:3.77,y:26.5},5).wait(17));

	// Layer 8
	this.instance_2 = new lib.Tween5("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-34,-32.7,1,1,0,0,0,0,-7.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(26).to({_off:false},0).to({scaleY:7},4).wait(28));

	// Layer 5
	this.instance_3 = new lib.Tween3("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-102,26.4,1,1,0,0,0,-11,0);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(13).to({_off:false},0).to({scaleX:13.26,x:-102.6},3).wait(42));

	// Layer 12
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHA6QgDgDAAgFIAAgJIAAgJIgBgqIgQgBQgKgBAAgKQAAgEADgEQADgDAFAAIAOABIAAgJIgBgIQAAgFAEgDQADgDAFAAQALAAAAAVIAAAHIAJgBIANABQAGADAAAHQAAAFgDADQgDADgFAAIgEAAIgEAAIgIABIABArIAAAEIAAAEQAAAUgMAAQgDAAgEgDg");
	this.shape.setTransform(-56.9,-48.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgZAlQgNgLAAgTQAAgPALgRQAOgVAQAAQAJAAALAFQAPAGAAAHQAAAEgDADQgDADgFAAQgEAAgFgDQgFgEgKAAQgFAAgIAMQgHANAAAHQAAAJAHAFQAGAFAIAAQAGAAAIgEIAKgFQAFABADADQADADAAAEQAAAHgOAGQgNAGgIAAQgRgBgMgJg");
	this.shape_1.setTransform(-65.5,-47.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgcAkQgOgLAAgTQAAgUAMgOQAMgQATAAQAPAAAJAEQANAGAAANQAAAJgKAHQgFAEgOAFIgbAMQAEAFAGACQAGACAGAAQALAAAIgFQAHgEAEAAQAJAAAAAJQgBAJgOAGQgLAFgNAAQgTAAgNgJgAgKgTQgGAFgDAKIASgIQALgFAGgEQgFgDgKAAQgGAAgFAFg");
	this.shape_2.setTransform(-74.5,-47.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgdA6IgCgFQAAgEAFgEQADgDAFAAQAFAAAEAGIAGALQADAFADAAQAEAAACgLIgEguIgDgrQAAgFADgEQAEgFAFAAQAEAAAEADQAEACABAEIACAtIACAyQAAAMgIAKQgHALgNAAQgTAAgNgdgAADhBQgDgDAAgFQAAgGADgDQAEgEAFAAQAGAAADAEQAFADAAAGQAAAFgFADQgDAEgGAAQgFAAgEgEg");
	this.shape_3.setTransform(-83.4,-46.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgYA/QgDADgEAAQgFAAgDgDQgDgDAAgFIAAgFIAAgGIAAheQAAgFADgGQADgFAGAAQAJAAAAAKIAAADIAAADIAAAgQAGgEAFgBIAKgCQAUABAMAOQALAMAAASQAAAUgNANQgNAOgTAAQgLAAgLgEgAgJgBIgMAHIAAAjQALAEAIAAQAKABAGgIQAHgGAAgMQAAgKgFgHQgGgHgKABQgDAAgGACg");
	this.shape_4.setTransform(-91.1,-49.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AARApQgLAEgKAAQgMAAgIgFQgJgGgCgLQgDgUAAgPQAAgLACgOQACgJAJAAQAFAAAEADQADADAAAEIgBAMIgBAMIAAATIADAOIAEACIAEAAQAIAAALgDIAAgOIAAgNQAAgRABgMQABgKAKAAQAFAAAEADQADADAAAFIgCAdIABAQIAAAQIAAAGIAAAFQAAAEgDADQgEADgEAAQgHAAgDgGg");
	this.shape_5.setTransform(-100.6,-47.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgsA2QgKgHAAgLQAAgFADgDQADgEAGAAQAHAAAEAHQAEALARAAQANAAAOgGQANgGAAgJQAAgKgIgDQgGgCgSgBQgOAAgMgFQgPgGAAgNQABgQARgOQARgNATAAQAIAAAMADQAPAFAAAGQAAAEgDAEQgDADgFAAIgMgBIgMgCQgLAAgIAGQgKAEAAAHQAAADADACQADACAGABIAUABQATABAKAJQAMAJAAARQAAAWgYALQgTAJgXAAQgVAAgMgKg");
	this.shape_6.setTransform(-110.9,-48.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},47).wait(11));

	// Layer 11
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgYA/QgDADgEAAQgFAAgDgDQgDgDAAgFIAAgFIAAgGIAAheQAAgFADgGQADgFAGAAQAJAAAAAKIAAADIAAADIAAAgQAGgEAFgBIAKgCQAUABAMAOQALAMAAASQAAAUgNANQgNAOgTAAQgLAAgLgEgAgJgBIgMAHIAAAjQALAEAIAAQAKABAGgIQAHgGAAgMQAAgKgFgHQgGgHgKABQgDAAgGACg");
	this.shape_7.setTransform(51.5,-49.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AggArQgDgDAAgFIAAg1IAAgIIAAgHQAAgFAEgDQACgDAGAAQAIAAADAJQANgLASABQAQAAAAAVIAAAGQAAANgLAAQgKAAAAgLIgBgJQgSADgHARIAAAoQgBAFgDAEQgDACgFAAQgFABgDgEg");
	this.shape_8.setTransform(42.6,-47.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgbAkQgPgLAAgTQAAgUAMgOQAMgQATAAQAPAAAJAEQANAGAAANQAAAJgKAHQgFAEgOAFIgbAMQAEAFAGACQAGACAGAAQALAAAIgFQAHgEAEAAQAJAAAAAJQgBAJgOAGQgLAFgNAAQgTAAgMgJgAgKgTQgGAFgDAKIASgIQALgFAGgEQgFgDgKAAQgGAAgFAFg");
	this.shape_9.setTransform(33.5,-47.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgRA7QgKgYgNgtIgHgWQgEgPAAgHQAAgFADgDQAEgDAFAAQAHAAAEAIIADAPIAIAbIAMAoIATgwIAHgVQAFgLAGgHQADgEAGAAQAEAAAEADQADAEAAAEQAAAEgCADQgEAHgEAJIgGAQIgWA5IgKATQgDAHgGAAQgJAAgDgIg");
	this.shape_10.setTransform(23.2,-49.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},51).wait(7));

	// Layer 10
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgHA6QgDgDAAgFIAAgJIAAgJIgBgqIgQgBQgKgBAAgKQAAgEADgEQADgDAFAAIAOABIAAgJIgBgIQAAgFAEgDQADgDAFAAQALAAAAAVIAAAHIAJgBIANABQAGADAAAHQAAAFgDADQgDADgFAAIgEAAIgEAAIgIABIABArIAAAEIAAAEQAAAUgMAAQgDAAgEgDg");
	this.shape_11.setTransform(198.9,-48.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AARAmIgCgRIgBgRIAAgHIAAgHIAAgDIABgEQgBgHgDAAQgHAAgGAJQgGAKgEANIgBAHIgBAIIgBAHIAAAHQAAAFgDADQgEADgFAAQgFAAgDgDQgDgDAAgFIAAgHIgBgHIACgXIAAgVIAAgIIAAgIQAAgEADgDQAEgDAEAAQAMAAAAANIAAABQANgNAMAAQAPAAAHANQADAJAAASIAAAGIAAAEIACARQACAKAAAGQAAAFgEADQgCADgGAAQgKAAgBgKg");
	this.shape_12.setTransform(190.5,-47.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgbAkQgOgLgBgTQAAgUALgOQAMgQAVAAQAOAAAKAEQAMAGAAANQAAAJgKAHQgFAEgOAFIgbAMQAEAFAGACQAGACAGAAQALAAAHgFQAIgEADAAQAJAAAAAJQAAAJgNAGQgMAFgNAAQgTAAgMgJgAgLgTQgFAFgEAKIATgIQALgFAGgEQgFgDgJAAQgHAAgGAFg");
	this.shape_13.setTransform(181.1,-47.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgGAwQgEgDAAgFIgCgcIgCgbIgBgIQgJAFgKANIgBACIgBAZIAAAHIAAAGQAAAEgEADQgDACgFAAQgHAAgCgGQgCgEAAgJIAAgeIAAgMIgBgNQAAgHADgGQADgHAGAAQAFAAADADQAEAEAAAEIgBAHQANgOALAAQANAAAFAJQAFgEAGgCQAGgCAHAAQAQAAAGAQIAEAWIAGAsQAAAFgDADQgEADgFAAQgJAAgCgKIgDgYIgDgXQgCgPgEAAIgIAEIgKAHQAAAJACARIACAbQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_14.setTransform(170,-47.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgcAkQgOgLABgTQgBgUALgOQAMgQAVAAQAOAAAJAEQANAGAAANQAAAJgKAHQgFAEgOAFIgbAMQAEAFAGACQAFACAHAAQALAAAHgFQAIgEADAAQAKAAgBAJQABAJgOAGQgMAFgNAAQgTAAgNgJgAgLgTQgFAFgEAKIATgIQAKgFAHgEQgGgDgIAAQgHAAgGAFg");
	this.shape_15.setTransform(158.4,-47.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgHBBQgDgDAAgFIAAhyQAAgFADgDQAEgCADAAQAFAAADADQADACAAAFIAABuQABAPgMAAQgEAAgDgDg");
	this.shape_16.setTransform(151.4,-49.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgiBCQgDgCAAgGIAAgeIAAggIgBgfIgBgQQAAgIADgEQADgFAHgBQAEAAADADQADAEAAAEIAAABQAGgDAGgCIAKgBQATAAAJAQQAGAMAAAUQAAAQgKAMQgLAOgTAAQgGAAgIgDIAAAiQAAAGgDACQgEADgEAAQgFAAgEgDgAgEgnQgFADgGAEIABAiQAIACAGAAQAJAAAEgFQAEgFAAgJIgBgQQgCgKgIAAQgFAAgFACg");
	this.shape_17.setTransform(144.7,-45.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgGAwQgEgDAAgFIgCgcIgCgbIgBgIQgJAFgKANIgBACIgBAZIAAAHIAAAGQAAAEgEADQgDACgFAAQgHAAgCgGQgCgEAAgJIAAgeIAAgMIgBgNQAAgHADgGQADgHAGAAQAFAAADADQAEAEAAAEIgBAHQANgOALAAQANAAAFAJQAFgEAGgCQAGgCAHAAQAQAAAGAQIAEAWIAGAsQAAAFgDADQgEADgFAAQgJAAgCgKIgDgYIgDgXQgCgPgEAAIgIAEIgKAHQAAAJACARIACAbQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_18.setTransform(133.6,-47.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgaAjQgNgMAAgTQgBgSALgOQAMgQAWAAQARAAAJAMQAJANAAARQAAATgKANQgMAQgSAAQgPAAgLgLgAgLgOQgFAJAAAJQAAAKAFAGQAFADAGAAQAGAAAFgEQAHgGAAgKQABgagPAAQgJAAgGAJg");
	this.shape_19.setTransform(122.2,-47.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgkAzQgNgNAAgSQABgbAYgdQAVgZAUAAIAHABIAFAAQAEgDAFAAQAJAAABAKIABAQQAAAEgCADQgDAFgGAAQgIAAgDgIIgDgFIgHAAQgKAAgNAQQgTAWAAAUQAAAJAGAGQAGAHAIAAQAIAAAIgFIANgIQAGgEADAAQAGAAADAEQADADABAEQgBAFgEAEQgXATgXAAQgSAAgNgNg");
	this.shape_20.setTransform(112.7,-49.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},54).wait(4));

	// Layer 2
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#FFFFFF","#FF3366"],[0,1],-0.8,227.4,0.9,-227.3).s().p("EgjiAWlMAAAgtJMBHFAAAMAAAAtJg");
	this.shape_21.setTransform(46.5,-9.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(58));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-181,-153.6,603.7,289);


(lib.UI = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//Menu button -----------------------------------------
		this.btn_menu.addEventListener("click", openMenu.bind(this));
		
		//volume buttons -----------------------------------------
		this.vol_dwn.addEventListener("click", volDwn.bind(this));
		this.vol_up.addEventListener("click", volUp.bind(this));
		this.vol_mute.addEventListener("click", volMute.bind(this));
		
		//Nav buttons -----------------------------------------
		this.btn_goNext.addEventListener("click", openNext.bind(this));
		this.btn_goBack.addEventListener("click", openPrev.bind(this));
		
		//background music ---------------------------------------
		var bgm = createjs.Sound.play('bgmDia',{loop:-1});
		//var vo = createjs.Sound.play('VO');
		
		//volume vars -----------------------------------------
		var mute= false;
		bgm.volume = 0.05;
		var prev_vol = bgm.volume;
		
		//Menu function -----------------------------------------
		function openMenu(){
		
		 window.open ("../menu/menu.html","_self");
		}
		
		//volume functions -----------------------------------------
		function volDwn()
		{
			createjs.Sound.volume = createjs.Sound.volume -0.1;
			if(!mute){
				bgm.volume -= 0.1;
				prev_vol = bgm.volume;
			}
			console.log(bgm.volume);
			console.log(prev_vol);
		}
		function volUp()
		{
			createjs.Sound.volume = createjs.Sound.volume +0.1;
			if(!mute){
				bgm.volume += 0.1;
				prev_vol = bgm.volume;
			}
			console.log(bgm.volume);
			console.log(prev_vol);
		}
		
		function volMute()
		{
			if(!mute){
				mute = true
				bgm.volume = 0;
			}
			else{
				mute = false;
				bgm.volume = prev_vol;
			}
			console.log(mute);
		}
		
		
		//Nav functions -----------------------------------------
		
		function openNext(){
		
		 window.open ("diag_Scene2.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("diag_Scene0.html","_self");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// mute
	this.vol_mute = new lib.vol_mute();
	this.vol_mute.parent = this;
	this.vol_mute.setTransform(31.8,2.1,1,1,0,0,0,15,14.1);
	new cjs.ButtonHelper(this.vol_mute, 0, 1, 2, false, new lib.vol_mute(), 3);

	this.timeline.addTween(cjs.Tween.get(this.vol_mute).wait(1));

	// main
	this.instance = new lib.Copyright("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-220.6,376.5);

	this.btn_goBack = new lib.goNext();
	this.btn_goBack.parent = this;
	this.btn_goBack.setTransform(-438,335.3,1,1,0,0,180);
	new cjs.ButtonHelper(this.btn_goBack, 0, 1, 2, false, new lib.goNext(), 3);

	this.btn_goNext = new lib.goNext();
	this.btn_goNext.parent = this;
	this.btn_goNext.setTransform(-1.7,335.3);
	new cjs.ButtonHelper(this.btn_goNext, 0, 1, 2, false, new lib.goNext(), 3);

	this.vol_up = new lib.vol_pos();
	this.vol_up.parent = this;
	this.vol_up.setTransform(-6.7,2.6,1,1,0,0,0,9,7);
	new cjs.ButtonHelper(this.vol_up, 0, 1, 2, false, new lib.vol_pos(), 3);

	this.vol_dwn = new lib.vol_neg();
	this.vol_dwn.parent = this;
	this.vol_dwn.setTransform(-28.7,2.6,1,1,0,0,0,9,7);
	new cjs.ButtonHelper(this.vol_dwn, 0, 1, 2, false, new lib.vol_neg(), 3);

	this.btn_menu = new lib.menu_main();
	this.btn_menu.parent = this;
	this.btn_menu.setTransform(-89.6,2.6,1,1.143,0,0,0,23.4,10.5);
	new cjs.ButtonHelper(this.btn_menu, 0, 1, 2, false, new lib.menu_main(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1.5,1,1).p("AAYBrQgBgLgUgUQgQgRgKAAIAAh1QAKAAASgTQATgTAAgKg");
	this.shape.setTransform(-47.7,2.3,0.687,0.681);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AADBMQgQgRgKAAIAAh1QAKgBASgSQATgTAAgJIAADTQgBgKgUgUg");
	this.shape_1.setTransform(-47.7,2.3,0.687,0.681);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s("#000000").ss(1.5,1,1).rr(-0.75,-3.45,1.5,6.9,0.2);
	this.shape_2.setTransform(-52.2,2.3,1,1.003);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1.5,1,1).p("AAHAAQAAAJgHAHQgCAEgEACIAAgrQAEACACAEQACACACACQADAFAAAGg");
	this.shape_3.setTransform(-43.2,2.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgGgUQAEABACAEIABAAIADAFQADAEAAAGQAAAJgGAHIgBAAQgCAEgEABg");
	this.shape_4.setTransform(-46.5,2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.btn_menu},{t:this.vol_dwn},{t:this.vol_up},{t:this.btn_goNext},{t:this.btn_goBack},{t:this.instance}]}).wait(1));

	// vol_frame
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s("#000000").ss(1.5,1,1).rr(-33,-12,66,24,4.9);
	this.shape_5.setTransform(-24.7,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.UI, new cjs.Rectangle(-486.5,-13,534.3,399), null);


// stage content:
(lib.diag_Scene1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene1:0,scene1repeat:237});

	// timeline functions:
	this.frame_30 = function() {
		playSound("thediagramformconsistsof2");
	}
	this.frame_253 = function() {
		this.gotoAndPlay("scene1repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(30).call(this.frame_30).wait(223).call(this.frame_253).wait(1));

	// predicate
	this.instance_4 = new lib.text_predicate("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(324.1,81.5,1,1,0,0,0,43,14.6);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(222).to({_off:false},0).to({x:324.6,y:81.2,alpha:1},6).wait(26));

	// bracket
	this.instance_5 = new lib.bracketdisplay("synched",0,false);
	this.instance_5.parent = this;
	this.instance_5.setTransform(324,109.3,1,1,0,0,0,118,11.4);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(222).to({_off:false},0).wait(32));

	// Highlights
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(10,1,1).p("A2uAAMAtdAAA");
	this.shape_22.setTransform(271.9,222.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(10,1,1).p("A2uAAIKnAAMAi2AAA");
	this.shape_23.setTransform(271.9,222.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FF0000").ss(8,1,1).p("AAAokIAAJDIAAIG");
	this.shape_24.setTransform(194.4,219.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(10,1,1).p("AxaAAMAi1AAA");
	this.shape_25.setTransform(305.9,222.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#00CC00").ss(8,1,1).p("AAAkaIAAI1");
	this.shape_26.setTransform(325.9,190.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(10,1,1).p("AlTAAIKmAA");
	this.shape_27.setTransform(160.4,222.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FF0000").ss(4,1,1).p("AjlAAIHMAA");
	this.shape_28.setTransform(266.5,160.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#00CC00").ss(4,1,1).p("AleAAIK9AA");
	this.shape_29.setTransform(384.2,160.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_22}]},62).to({state:[{t:this.shape_24},{t:this.shape_23}]},29).to({state:[{t:this.shape_24},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},37).to({state:[]},64).to({state:[{t:this.shape_28}]},11).to({state:[{t:this.shape_29},{t:this.shape_28}]},11).wait(40));

	// main
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(4,1,1).p("EAjoAWlMhHPAAAMAAAgtJMBHPAAAg");
	this.shape_30.setTransform(274,187.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(254));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgjsAW0MAAAgtnMBHZAAAMAAAAtng");
	mask.setTransform(274.5,188);

	// Scene
	this.instance_6 = new lib.Scene1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(274,184,1,1,0,0,0,46,-12.7);

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(254));

	// buttons
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.timeline.addTween(cjs.Tween.get(this.UI).wait(254));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,201.6,534,398.7);
// library properties:
lib.properties = {
	id: '0AC8F31CD33A064A8683565D2AB1758D',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/bgmDia.mp3", id:"bgmDia"},
		{src:"sounds/wrong_answer.mp3", id:"wrong_answer"},
		{src:"sounds/Flying.mp3", id:"Flying"},
		{src:"sounds/right_answer.mp3", id:"right_answer"},
		{src:"sounds/thediagramformconsistsof2.mp3", id:"thediagramformconsistsof2"}
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
an.compositions['0AC8F31CD33A064A8683565D2AB1758D'] = {
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