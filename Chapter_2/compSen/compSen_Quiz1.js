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
	this.shape_5.graphics.f("#FFFFFF").s().p("AhqBjQgrgoAAg7QAAg6ArgqQAKgIALgGIAKgHIAUgJIAIgCQAXgIAYAAQAaAAAXAIIAIACIAUAJIAKAHQAKAGAJAIQAsAqAAA6QAAA7gsAoQgtApg9AAQg9AAgtgpgAAABtQAuAAAfggQAfggAAgsQAAgpgbgeIgEgFQgHgHgHgEQgbgUgkAAQgrAAggAfQgfAgAAAsQAAApAaAeIAFAFIAFAFQAeAbAoAAgAhGBSICXiYQAbAeAAApQAAAsgfAgQgfAgguAAQgoAAgegbgAAuAaQAHgCACgGQAJgJAAgMQAAgMgJgJQgCgFgHgDIAAA6IAAAAgAhGBSIAAAAgAhLBNIgFgFQgageAAgpQAAgsAfggQAggfArAAQAkAAAbAUQAHAEAHAHIAEAFIiXCYIgFgFgAAuAagAAuggQAHADACAFQAJAJAAAMQAAAMgJAJQgCAGgHACgABAgDIAAAAgABRhGIAAAAg");
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
	this.shape_9.graphics.f("#FFFFFF").s().p("AhqBjQgrgoAAg7QAAg6ArgqQAKgIALgGIAKgHIAUgJIAIgCQAXgIAYAAQAaAAAXAIIAIACIAUAJIAKAHQAKAGAJAIQAsAqAAA6QAAA7gsAoQgtApg9AAQg9AAgtgpgAhGBSQAeAbAoAAQAuAAAfggQAfggAAgsQAAgpgbgeQAbAeAAApQAAAsgfAgQgfAgguAAQgoAAgegbICXiYIiXCYgAhqABQAAApAaAeIAFAFIAFAFIgFgFIgFgFQgageAAgpQAAgsAfggQAggfArAAQAkAAAbAUQAHAEAHAHIAEAFIgEgFQgHgHgHgEQgbgUgkAAQgrAAggAfQgfAgAAAsIAAAAgAAuAaQAHgCACgGQAJgJAAgMQAAgMgJgJQgCgFgHgDIAAA6IAAAAgAAuAagAAuggQAHADACAFQAJAJAAAMQAAAMgJAJQgCAGgHACgABAgDIAAAAg");
	this.shape_9.setTransform(15,14.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_2},{t:this.shape_4},{t:this.shape_3},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_7},{t:this.shape_8},{t:this.shape_2},{t:this.shape_4},{t:this.shape_3},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_9},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,32,30.1);


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


(lib.blank_gr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("Aj+CqIAAlTIH9AAIAAFTg");
	this.shape.setTransform(32.5,17,1.275,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65,34);


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
		
		//background music ---------------------------------------
		var bgm = createjs.Sound.play('bgmTest',{loop:-1});
		
		
		//volume vars -----------------------------------------
		var mute= false;
		bgm.volume = 0.1;
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.btn_menu},{t:this.vol_dwn},{t:this.vol_up}]}).wait(1));

	// vol_frame
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s("#000000").ss(1.5,1,1).rr(-33,-12,66,24,4.9);
	this.shape_5.setTransform(-24.7,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.UI, new cjs.Rectangle(-114,-13,161.8,30.1), null);


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


(lib.blank = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.blank_gr("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(32.6,17,1,1,0,0,0,32.5,17);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.blank, new cjs.Rectangle(0.1,0,65,34), null);


(lib.practicequiz2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{firstSet:0,secondSet:10,thirdSet:19,fourthset:29,fifthset:39,sixthset:49,seventhset:59,eighthset:69,ninthset:79,tenthset:89});

	// timeline functions:
	this.frame_0 = function() {
		this.btn_next.visible = false;
		var scoreNum =0;
		var rSound; 
		var wSound; 
		
		this.btn_correct.addEventListener("click", correct.bind(this));
		this.btn_wrong.addEventListener("click", wrong.bind(this));
		
		function correct(){
			
			this.btn_next.visible = true;
			scoreNum +=1;
			this.result.text = "Correct!";
			this.btn_correct.mouseEnabled = false;
			this.btn_wrong.mouseEnabled = false;
			//this.highlight.visible = true;
			this.score.text = scoreNum;
			this.rSound = createjs.Sound.play('right');
			
		}
		
		function wrong(){
		
			this.result.text = "Incorrect";
			this.wSound = createjs.Sound.play('wrong');
			
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
			this.btn_next.visible = false;
		 
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
	this.shape.graphics.f("#FFFFFF").s().p("AgNALQgGgEAAgHQAAgFAGgGQAGgEAHAAQAJAAAGAEQAFAFAAAGQAAAHgFAEQgHAFgIABQgHgBgGgFg");
	this.shape.setTransform(198.6,269.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKBHQgFgFAAgHQAAgOgDgbQgDgaAAgOIgBgMQgOAIgOATIgCADIgBAlIAAAKIAAAIQAAAHgGADQgFAEgHAAQgKAAgEgJQgDgGAAgNIAAgtIAAgSIAAgSQAAgKADgJQAFgLAJAAQAHAAAFAFQAFAFAAAHIgBAKQATgVAQAAQATAAAIAOQAHgGAJgEQAJgDALAAQAYAAAIAYQACAFAEAcIAIBBQABAHgFAEQgGAFgHAAQgOAAgCgOIgFgkIgEgiQgDgWgFAAQgDAAgKAFIgPAKQAAAOAEAZQADAbAAANQAAAHgFAFQgEAEgIAAQgGAAgFgEg");
	this.shape_1.setTransform(183.8,264.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAdA4IgUAIQgIADgFAAQgdAAgPgPQgPgRAAgfQAAgcAWgVQAWgVAdAAQAMAAAPAGQASAJAAAKQAAAEgCADIgCAMIgBARQAAAXADAKIAGAMIAEANQAAAGgEAEQgFAEgHAAQgFAAgNgLgAgRgYQgMANAAARQAAAPAGAJQAGAIALAAQAHAAAHgCQAHgDAFgFQgDgcAAgOIABgJIABgMIgEgBIgEgBQgPAAgNANg");
	this.shape_2.setTransform(167,264.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgpA0QgVgOABgdQAAgdAQgWQASgYAeAAQAVAAAOAIQATAIgBAUQAAANgPAKQgHAFgUAIIgoASQAGAGAIAEQAIADAKAAQARAAAKgHQALgFAGgBQANABAAALQgBAOgUAKQgRAHgTAAQgcgBgTgOgAgPgdQgJAIgFAQIAcgNQAPgHAKgGQgIgFgNAAQgLAAgHAHg");
	this.shape_3.setTransform(152.8,264.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgKBVQgGgEAAgHIABgNIAAgNIgCg/IgXgCQgPgBAAgOQAAgHAEgFQAFgFAHAAIAVACIAAgNIgBgMQAAgHAFgFQAFgEAHAAQARAAAAAeIAAAKIAMgBQAOAAAFACQAKADAAAMQAAAHgFAEQgEAFgIAAIgGAAIgGAAIgLABIACA/IAAAGIAAAHQAAAcgSAAQgFAAgFgEg");
	this.shape_4.setTransform(140.1,262);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgpA0QgUgOAAgdQAAgdAQgWQASgYAeAAQAVAAAOAIQATAIAAAUQgBANgPAKQgGAFgVAIIgoASQAFAGAJAEQAIADAKAAQAQAAALgHQALgFAGgBQAMABAAALQAAAOgUAKQgRAHgTAAQgcgBgTgOgAgPgdQgJAIgFAQIAcgNQAPgHAKgGQgIgFgNAAQgLAAgHAHg");
	this.shape_5.setTransform(116.1,264.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAcBaQgDgLgCgRQgCgSAAgLIAAgJIAAgJIAAgLQgBgFgFgBQgOAAgKAMQgFAGgKARQAAAtgEAJQgFAKgKAAQgHAAgGgEQgFgFAAgHIABgHQABgCABgfIAAhQIAAgEIABgTIgBgMIgBgLQAAgGAFgFQAFgFAHAAQAMAAAEAOQACAGAAAQIAAAYIgBAZQAJgKAKgEQAJgEAMAAQAVAAAJALQAHAKABAQIACAeIACAYIAEAZIABAEQAAAGgFAFQgGAEgHAAQgMABgEgMg");
	this.shape_6.setTransform(102.3,260.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgKBVQgGgEAAgHIABgNIAAgNIgCg/IgXgCQgPgBAAgOQAAgHAEgFQAFgFAHAAIAVACIAAgNIgBgMQAAgHAFgFQAFgEAHAAQARAAAAAeIAAAKIAMgBQAOAAAFACQAKADAAAMQAAAHgFAEQgEAFgIAAIgGAAIgGAAIgLABIACA/IAAAGIAAAHQAAAcgSAAQgFAAgFgEg");
	this.shape_7.setTransform(89,262);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAZA4IgEgZQgBgNAAgMIAAgKIABgLIAAgEIAAgGQAAgKgFAAQgKAAgKANQgKAOgFATIgBALIgBALIgBALIAAALQgBAHgEAEQgFAFgIAAQgGAAgFgFQgFgEAAgHIgBgKIgBgMIACggIABghIAAgKIAAgMQAAgHAFgFQAFgEAHAAQAQAAABAUIAAAAQASgRATAAQAXAAAJATQAFANABAaIAAAJIAAAGQAAAKACAPQADAPgBAKQAAAGgEAEQgFAFgIAAQgPAAgBgPg");
	this.shape_8.setTransform(65.8,263.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgnAzQgSgRgBgcQgBgaAQgVQASgZAgAAQAZAAAOAUQANARAAAaQAAAcgPAUQgRAWgcAAQgWAAgQgQgAgRgUQgHAMAAAOQAAAPAIAIQAHAGAIAAQAKAAAIgHQAJgJAAgOQACgmgWgBQgOAAgJAOg");
	this.shape_9.setTransform(52.4,264.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgiBAQgSgHAAgOQAAgMAOAAQAGAAAKAEQALADAGAAQAXAAABgKQAAgGgRgIQgYgLgIgDQgRgNAAgRQAAgYAagJQAQgFAdAAQANAAAFADQAJAEgBAMQAAAWgLAAQgMAAgDgKIgKgBQgcAAAAAIQAAAFARAIQAYALAJAGQARAMAAAQQAAAVgUALQgPAJgWAAQgRAAgNgFg");
	this.shape_10.setTransform(28.9,264);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgwBAQgDgFAAgHIAAhPIAAgLIAAgLQAAgHAEgFQAFgEAHAAQAOAAACAOQAUgQAbAAQAYAAAAAgIAAAIQgBATgPAAQgQAAAAgQIAAgMQgbAEgMAYIAAA8QAAAHgEAFQgFAEgHAAQgIAAgFgEg");
	this.shape_11.setTransform(17.2,264.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgpA0QgVgOAAgdQAAgdARgWQASgYAdAAQAWAAAOAIQASAIAAAUQAAANgOAKQgIAFgUAIIgoASQAGAGAIAEQAIADAKAAQARAAALgHQAKgFAGgBQAMABAAALQABAOgVAKQgRAHgTAAQgcgBgTgOgAgQgdQgIAIgEAQIAbgNQAQgHAJgGQgIgFgOAAQgJAAgJAHg");
	this.shape_12.setTransform(3.8,264.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgKBHQgFgFAAgHQAAgOgDgbQgDgaAAgOIgBgMQgOAIgOATIgCADIgBAlIAAAKIAAAIQAAAHgGADQgFAEgHAAQgKAAgEgJQgDgGAAgNIAAgtIAAgSIAAgSQAAgKADgJQAFgLAJAAQAHAAAFAFQAFAFAAAHIgBAKQATgVAQAAQATAAAIAOQAHgGAJgEQAJgDALAAQAYAAAIAYQACAFAEAcIAIBBQABAHgFAEQgGAFgHAAQgOAAgCgOIgFgkIgEgiQgDgWgFAAQgDAAgKAFIgPAKQAAAOAEAZQADAbAAANQAAAHgFAFQgEAEgIAAQgGAAgFgEg");
	this.shape_13.setTransform(-12.5,264.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgKBHQgFgFAAgHQAAgOgDgbQgDgaAAgOIgBgMQgOAIgOATIgCADIgBAlIAAAKIAAAIQAAAHgGADQgFAEgHAAQgKAAgEgJQgDgGAAgNIAAgtIAAgSIAAgSQAAgKADgJQAFgLAJAAQAHAAAFAFQAFAFAAAHIgBAKQATgVAQAAQATAAAIAOQAHgGAJgEQAJgDALAAQAYAAAIAYQACAFAEAcIAIBBQABAHgFAEQgGAFgHAAQgOAAgCgOIgFgkIgEgiQgDgWgFAAQgDAAgKAFIgPAKQAAAOAEAZQADAbAAANQAAAHgFAFQgEAEgIAAQgGAAgFgEg");
	this.shape_14.setTransform(-31.9,264.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgPBZQgEgFAAgHIgBgWIAAgXIABgbIABgaQAAgHAFgFQAFgEAHAAQAGAAAFAEQAFAFAAAHIgBAaIgCAbIABAXIAAAWQAAAHgEAFQgFAEgHAAQgHAAgFgEgAgLg9QgFgFAAgIQAAgIAFgFQAGgFAHAAQAIAAAGAFQAFAFAAAIQAAAIgFAFQgGAFgIAAQgHAAgGgFg");
	this.shape_15.setTransform(-45,261.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAEAmQgDgKgDgeIgEAGIgSAvQgCAFgEADQgFAJgKAAQgGAAgGgKQgHgLgEgRQgEgPgIgyIgBgRQAAgHAFgEQAFgFAHABQANAAADANIADARIACARIAEAdQAKgXALglQAFgQANAAQAOAAAEASIAGAgIAGAhIAUhJQACgLANABQAHgBAFAFQAFAFAAAGIAAAEQgNAwgNAmQgEALgIAMQgGAHgKABQgPgBgJgeg");
	this.shape_16.setTransform(-57.3,264.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgiBAQgSgHAAgOQAAgMAPAAQAFAAAKAEQALADAGAAQAXAAABgKQAAgGgSgIQgXgLgIgDQgRgNAAgRQAAgYAagJQAPgFAfAAQAMAAAGADQAHAEAAAMQABAWgMAAQgMAAgCgKIgLgBQgcAAAAAIQAAAFAQAIQAZALAJAGQARAMAAAQQAAAVgTALQgQAJgWAAQgQAAgOgFg");
	this.shape_17.setTransform(-72.1,264);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgKBVQgGgEAAgHIABgNIAAgNIgCg/IgXgCQgPgBAAgOQAAgHAEgFQAFgFAHAAIAVACIAAgNIgBgMQAAgHAFgFQAFgEAHAAQARAAAAAeIAAAKIAMgBQAOAAAFACQAKADAAAMQAAAHgFAEQgEAFgIAAIgGAAIgGAAIgLABIACA/IAAAGIAAAHQAAAcgSAAQgFAAgFgEg");
	this.shape_18.setTransform(230.4,225.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgiBAQgSgHAAgOQAAgMAPAAQAFAAALAEQAKADAGAAQAYAAAAgKQAAgGgSgIQgYgLgGgDQgSgNAAgRQAAgYAagJQAPgFAfAAQAMAAAGADQAHAEABAMQAAAWgMAAQgMAAgCgKIgKgBQgdAAAAAIQAAAFAQAIQAZALAIAGQASAMAAAQQAAAVgTALQgQAJgWAAQgQAAgOgFg");
	this.shape_19.setTransform(218.3,227.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgpA1QgVgPAAgdQAAgeARgVQASgXAdAAQAWAAAOAGQASAKAAASQABAOgPAKQgHAFgVAIIgoATQAFAFAJAEQAIADAKAAQAQAAAMgHQAKgGAGABQANAAAAALQAAAOgVAKQgRAGgTAAQgcAAgTgNgAgQgcQgIAHgEAPIAbgLQAPgIAKgHQgIgEgOAAQgKAAgIAIg");
	this.shape_20.setTransform(205.2,227.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgkBdQgEAEgGAAQgHAAgFgEQgEgEgBgHIABgJIAAgJIAAiJQAAgJAEgHQAFgJAJAAQANAAAAAPIAAAFIgBAFIAAAvQAKgFAHgDQAJgCAGAAQAeAAARAUQAQATAAAcQABAcgUAUQgTAUgcAAQgRAAgQgGgAgNgCQgJADgKAHIAAA0QARAIAMAAQAOAAALgLQAJgKABgQQgBgQgHgKQgKgKgOAAQgFAAgIADg");
	this.shape_21.setTransform(191,223.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgpA1QgVgPABgdQAAgeAQgVQASgXAdAAQAWAAAOAGQASAKAAASQABAOgQAKQgHAFgUAIIgoATQAGAFAIAEQAIADAKAAQAQAAAMgHQAKgGAGABQANAAAAALQAAAOgVAKQgRAGgTAAQgcAAgTgNgAgPgcQgJAHgEAPIAbgLQAPgIAKgHQgIgEgOAAQgJAAgIAIg");
	this.shape_22.setTransform(165.5,227.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAcBZQgDgKgCgSQgCgQAAgMIAAgJIAAgJIAAgKQgBgHgFAAQgOAAgKAMQgFAGgKARQAAAtgEAJQgFAKgKAAQgHAAgGgEQgFgFAAgHIABgGQABgDABgeIAAhRIAAgEIABgUIgBgLIgBgKQAAgIAFgEQAFgEAHgBQAMAAAEANQACAIAAAPIAAAZIgBAXQAJgIAKgFQAJgEAMAAQAVAAAJAMQAHAIABASIACAdIACAZIAEAXIABAFQAAAGgFAFQgGAFgHAAQgMAAgEgNg");
	this.shape_23.setTransform(151.7,223.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgKBVQgGgEAAgHIABgNIAAgNIgCg/IgXgCQgPgBAAgOQAAgHAEgFQAFgFAHAAIAVACIAAgNIgBgMQAAgHAFgFQAFgEAHAAQARAAAAAeIAAAKIAMgBQAOAAAFACQAKADAAAMQAAAHgFAEQgEAFgIAAIgGAAIgGAAIgLABIACA/IAAAGIAAAHQAAAcgSAAQgFAAgFgEg");
	this.shape_24.setTransform(138.3,225.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("Ag+BOQAAgHAFgEQADgEAIAAIAQACQAJACAJAAQARAAAJgLQAIgLACgYQgHAHgIADQgIADgIAAQgYAAgPgPQgPgRgBgXQABgiATgUQAWgVAjAAQALAAAIADQAJADAEAFQAQACAAAQQAAAJgCAOQgGAdgBAfQAAAngMASQgRAYgoAAQgvAAAAgTgAgSg3QgKANAAATQAAAPAFAHQAGAGALAAQAJAAAKgKQAKgLABgLIAFglIgIgDIgIgBQgUAAgLANg");
	this.shape_25.setTransform(114.8,230.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAZA5IgEgaQgBgOAAgLIAAgKIAAgLIABgEIAAgGQAAgKgFAAQgLAAgJAOQgKANgFAUIgBALIgBAKIgBALIgBAKQAAAIgEAFQgFAEgIAAQgGAAgFgEQgFgFAAgHIgBgLIgBgLIACghIACgfIAAgMIgBgLQAAgHAFgEQAFgFAHAAQAQAAABAUIAAABQASgSATAAQAXAAAJATQAFANABAZIAAAJIAAAHQAAAKACAPQADAPgBAJQAAAHgEAFQgFAEgIAAQgPAAgBgOg");
	this.shape_26.setTransform(101.9,227.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgPBZQgEgFAAgHIgBgWIAAgXIABgbIABgaQAAgHAFgFQAFgEAHAAQAGAAAFAEQAFAFAAAHIgBAaIgCAbIABAXIAAAWQAAAHgEAFQgFAEgHAAQgHAAgFgEgAgLg9QgFgFAAgIQAAgIAFgFQAGgFAHAAQAIAAAGAFQAFAFAAAIQAAAIgFAFQgGAFgIAAQgHAAgGgFg");
	this.shape_27.setTransform(92,224.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgKBVQgGgEAAgHIABgNIAAgNIgCg/IgXgCQgPgBAAgOQAAgHAEgFQAFgFAHAAIAVACIAAgNIgBgMQAAgHAFgFQAFgEAHAAQARAAAAAeIAAAKIAMgBQAOAAAFACQAKADAAAMQAAAHgFAEQgEAFgIAAIgGAAIgGAAIgLABIACA/IAAAGIAAAHQAAAcgSAAQgFAAgFgEg");
	this.shape_28.setTransform(82.3,225.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgmA2QgSgQgBgbQABgXAQgaQAUgeAZAAQAMAAARAHQAWAJAAALQAAAGgFAEQgEAFgHAAQgFAAgIgFQgHgGgPAAQgIAAgLASQgLASAAAMQAAANAKAHQAIAHANAAQAJAAALgGQAMgGADAAQAHAAAFAFQAEAEABAGQAAAKgVAKQgSAIgNAAQgZAAgTgPg");
	this.shape_29.setTransform(69.8,227.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgpA1QgUgPAAgdQAAgeAQgVQASgXAeAAQAVAAAOAGQATAKAAASQgBAOgPAKQgGAFgVAIIgoATQAGAFAIAEQAIADAKAAQARAAAKgHQALgGAGABQANAAAAALQgBAOgUAKQgRAGgTAAQgcAAgTgNgAgPgcQgJAHgFAPIAcgLQAPgIAKgHQgIgEgNAAQgLAAgHAIg");
	this.shape_30.setTransform(56.4,227.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgLBgQgFgFAAgHIAAioQAAgHAFgEQAFgEAGgBQAIAAAEAFQAFAEAAAHIAAChQAAAYgRAAQgGgBgFgEg");
	this.shape_31.setTransform(46,223.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgpA1QgVgPAAgdQAAgeARgVQASgXAdAAQAWAAAOAGQASAKAAASQABAOgPAKQgHAFgVAIIgoATQAFAFAJAEQAIADAKAAQAQAAAMgHQAKgGAGABQANAAAAALQAAAOgVAKQgRAGgTAAQgcAAgTgNgAgQgcQgIAHgEAPIAbgLQAPgIAKgHQgIgEgOAAQgKAAgIAIg");
	this.shape_32.setTransform(35.5,227.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgiBAQgSgHAAgOQAAgMAOAAQAGAAAKAEQALADAGAAQAXAAABgKQAAgGgRgIQgYgLgIgDQgRgNAAgRQAAgYAagJQAQgFAdAAQANAAAFADQAJAEgBAMQAAAWgLAAQgMAAgDgKIgKgBQgcAAAAAIQAAAFARAIQAYALAIAGQASAMAAAQQAAAVgUALQgPAJgWAAQgRAAgNgFg");
	this.shape_33.setTransform(22.5,227.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgvBAQgFgFAAgHIAAhPIABgLIAAgLQAAgHAFgFQAEgEAHAAQANAAADAOQAVgQAaAAQAYAAABAgIgBAIQgBATgPAAQgQAAAAgQIgBgMQgaAEgMAYIAAA8QAAAHgFAFQgFAEgGAAQgJAAgDgEg");
	this.shape_34.setTransform(0,227.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgpA1QgUgPAAgdQAAgeAQgVQASgXAeAAQAVAAAOAGQATAKAAASQgBAOgPAKQgGAFgVAIIgoATQAFAFAJAEQAIADAKAAQAQAAALgHQALgGAGABQAMAAAAALQAAAOgUAKQgRAGgTAAQgcAAgTgNgAgPgcQgJAHgFAPIAcgLQAPgIAKgHQgIgEgNAAQgLAAgHAIg");
	this.shape_35.setTransform(-13.5,227.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgKBVQgGgEAAgHIABgNIAAgNIgCg/IgXgCQgPgBAAgOQAAgHAEgFQAFgFAHAAIAVACIAAgNIgBgMQAAgHAFgFQAFgEAHAAQARAAAAAeIAAAKIAMgBQAOAAAFACQAKADAAAMQAAAHgFAEQgEAFgIAAIgGAAIgGAAIgLABIACA/IAAAGIAAAHQAAAcgSAAQgFAAgFgEg");
	this.shape_36.setTransform(-26.2,225.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgXBnQgFgFAAgGIAAgDQADgSAAgPIAAg8IgIABIgHAAQgHAAgFgEQgFgEAAgIQAAgLAMgDQAFgCAQgBIACgNQADgcAMgNQANgQAdAAQAXAAAAAQQAAAPgVAAQgPAAgHALQgFAHgBARIgBADIAYgBQAWAAAAAQQAAAQgYgBIgXABIAAAgIAAAhQAAAWgDANQgDANgMAAQgHAAgFgEg");
	this.shape_37.setTransform(-38.6,224.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AA+BcQgKAAgJgXQgHgOgFgTIgdADIgcADQgGANgOAbQgGAJgJAAQgGAAgGgEQgFgFgBgHQABgGARgkQgCgEABgDQAAgGAMgEQARgdAWggQAdguAHAAQAOAAAEAQIAIAnIASBQQAAADAGANQAEAKABAGQgBAHgFAEQgFAFgGAAIgBAAgAgIALIAQgCIARgBIgIgoIgZArg");
	this.shape_38.setTransform(-54,224.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgUBfQgXAAAAgOQAAgRAZAAIAGAAIAAhrQgLAIgDAAQgGAAgGgFQgFgFAAgHQAAgGAJgHIANgLIAPgLQAIgHAJAAQAKAAABANIgBApIgBBKIAAAeIAIAAQAHAAAFAEQAEAFAAAHQAAAGgEAFQgFAEgHAAg");
	this.shape_39.setTransform(-81.9,223.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AhSBfQgGgEAAgGIANgjIgOAAQgHAAgEgFQgFgGAAgFQABgNAOgBIAbAAIASguIgPAAIgOAAQgHAAgFgFQgEgEAAgGQAAgOAPgBIAogCIAIgWQAGgPAIAAQAPAAAAAOQAAAHgFAQIArAAIAIgdQAFgMALAAQAGAAAFAEQAFAEAAAHQAAADgHAXIALAAQAVAAABAPQAAALgLAEQgGACgOAAIgFgBIgGAAIgPAvIARAAQAZAAAAAQQAAAHgFADQgEAEgHAAIgSAAIgRAAIgKAjQgDAOgQAAQgMAAAAgMQAAgGAJgfIgyAAIgPAoQgDAKgLAAQgGAAgFgFgAgeAUIAvAAIAOguIgrAAg");
	this.shape_40.setTransform(-100,223.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgwBAQgEgFAAgHIAAhPIABgLIAAgLQAAgHAFgFQAEgEAHAAQANAAADAOQAUgQAbAAQAZAAAAAgIgBAIQgBATgPAAQgQAAAAgQIAAgMQgbAEgMAYIAAA8QAAAHgFAFQgFAEgGAAQgIAAgFgEg");
	this.shape_41.setTransform(119.6,264.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgpA0QgUgOgBgdQABgdAQgWQASgYAeAAQAVAAAOAIQASAIABAUQAAANgPAKQgIAFgUAIIgoASQAFAGAJAEQAIADAKAAQAQAAALgHQALgFAGgBQAMABAAALQAAAOgUAKQgRAHgTAAQgcgBgTgOgAgPgdQgJAIgFAQIAcgNQAPgHAKgGQgIgFgNAAQgLAAgHAHg");
	this.shape_42.setTransform(106.1,264.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgRA2IgphhQgCgEAAgDQABgHAFgFQAGgEAGAAQAKAAAFAKQAHAOAUA2IARgpIALgbQAEgJALAAQAHAAAFAEQAGAFAAAHQAAAEgVAsIgZA2QAAAGgFAEQgEAEgGAAQgMAAgFgNg");
	this.shape_43.setTransform(93.5,264);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgvBAQgFgFAAgHIAAhPIABgLIAAgLQAAgHAFgFQADgEAIAAQAOAAACAOQAVgQAaAAQAZAAAAAgIgBAIQgBATgQAAQgPAAAAgQIgBgMQgaAEgMAYIAAA8QAAAHgFAFQgEAEgIAAQgHAAgEgEg");
	this.shape_44.setTransform(74.4,264.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgyBiQgFgFAAgHIAAgtIAAgwQAAgagBgTIgCgYQAAgLAEgGQAGgJAJABQAGgBAFAFQAFAFAAAGIAAACQAIgGAIgBQAHgDAJAAQAcAAANAYQAJASAAAcQAAAagPASQgQASgcAAQgJAAgMgCIAAAyQAAAHgFAFQgFAFgHAAQgHAAgFgFgAgGg5QgIADgIAHIABAxQALAEAKAAQANAAAGgIQAGgIAAgOIgBgWQgEgPgLAAQgIAAgHAEg");
	this.shape_45.setTransform(-0.3,267);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAYA8QgPAGgQAAQgRAAgMgHQgNgJgDgQQgFgeAAgXQAAgQAEgUQACgOAOAAQAHAAAFAFQAFAEAAAHIgBARIgCARQAAARABAMQABANADAIIAGACIAFABQANAAAQgEIAAgVIgBgUQAAgZADgSQACgPAOAAQAIAAAFAFQAFAEgBAHIgCArIAAAYIAAAZIABAHIAAAIQAAAHgFAEQgFAFgHAAQgKAAgFgKg");
	this.shape_46.setTransform(-13.7,264.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("Ag+BOQAAgHAFgEQADgEAIAAIAQACQAJACAJAAQARAAAJgLQAIgLACgYQgHAHgIADQgIADgIAAQgYAAgPgPQgPgRgBgXQABgiATgUQAVgVAkAAQALAAAIADQAJADAEAFQAQACAAAQQAAAJgCAOQgFAdgCAfQAAAngMASQgRAYgoAAQgvAAAAgTgAgSg3QgKANAAATQAAAPAGAHQAFAGALAAQAJAAAKgKQAKgLABgLIAFglIgIgDIgIgBQgUAAgLANg");
	this.shape_47.setTransform(188.3,230.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAZA5IgEgaQgCgOABgLIAAgKIAAgLIABgEIAAgGQAAgKgFAAQgLAAgJAOQgJANgGAUIgBALIgBAKIgBALIgBAKQABAIgFAFQgFAEgIAAQgHAAgFgEQgEgFAAgHIgBgLIgBgLIACghIACgfIAAgMIgBgLQAAgHAFgEQAFgFAHAAQAQAAABAUIAAABQASgSATAAQAXAAAIATQAHANAAAZIAAAJIAAAHQgBAKADAPQACAPAAAJQAAAHgEAFQgFAEgIAAQgPAAgBgOg");
	this.shape_48.setTransform(175.4,227.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAEAnQgDgMgDgdIgEAGIgSAvQgCAFgEADQgFAIgKABQgGAAgGgLQgHgKgEgRQgEgPgIgxIgBgSQAAgHAFgEQAFgEAHgBQANABADANIADAQIACARIAEAfQAKgZALgkQAFgQANAAQAOAAAEARIAGAhIAGAiIAUhKQACgLANAAQAHABAFAEQAFAEAAAIIAAADQgNAwgNAmQgEALgIALQgGAIgKAAQgPAAgJgdg");
	this.shape_49.setTransform(153.2,227.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgvBAQgFgFAAgHIAAhPIABgLIAAgLQAAgHAFgFQADgEAIAAQAOAAACAOQAVgQAaAAQAZAAgBAgIAAAIQgBATgQAAQgPAAAAgQIgBgMQgaAEgMAYIAAA8QAAAHgFAFQgEAEgIAAQgHAAgEgEg");
	this.shape_50.setTransform(88.8,227.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgpA1QgVgPABgdQAAgeAQgVQASgXAdAAQAWAAAOAGQATAKAAASQgBAOgPAKQgHAFgUAIIgoATQAGAFAIAEQAIADAKAAQARAAAKgHQALgGAGABQANAAAAALQgBAOgUAKQgRAGgTAAQgcAAgTgNgAgPgcQgJAHgFAPIAcgLQAPgIAKgHQgIgEgOAAQgKAAgHAIg");
	this.shape_51.setTransform(75.4,227.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAEAnQgDgMgDgdIgEAGIgSAvQgCAFgEADQgFAIgKABQgGAAgGgLQgHgKgEgRQgEgPgIgxIgBgSQAAgHAFgEQAFgEAHgBQANABADANIADAQIACARIAEAfQAKgZALgkQAFgQANAAQAOAAAEARIAGAhIAGAiIAUhKQACgLANAAQAHABAFAEQAFAEAAAIIAAADQgNAwgNAmQgEALgIALQgGAIgKAAQgPAAgJgdg");
	this.shape_52.setTransform(60.1,227.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgpA1QgUgPAAgdQAAgeAQgVQASgXAeAAQAVAAAOAGQATAKAAASQgBAOgPAKQgGAFgVAIIgoATQAGAFAIAEQAIADAKAAQARAAAKgHQALgGAGABQANAAAAALQgBAOgUAKQgRAGgTAAQgcAAgTgNgAgPgcQgJAHgFAPIAcgLQAPgIAKgHQgIgEgNAAQgLAAgHAIg");
	this.shape_53.setTransform(33.4,227.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AAEAnQgDgMgDgdIgEAGIgSAvQgCAFgEADQgFAIgKABQgGAAgGgLQgHgKgEgRQgEgPgIgxIgBgSQAAgHAFgEQAFgEAHgBQANABADANIADAQIACARIAEAfQAKgZALgkQAFgQANAAQAOAAAEARIAGAhIAGAiIAUhKQACgLANAAQAHABAFAEQAFAEAAAIIAAADQgNAwgNAmQgEALgIALQgGAIgKAAQgPAAgJgdg");
	this.shape_54.setTransform(18.2,227.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AA+BcQgKAAgKgXQgGgOgFgTIgdADIgcADQgGANgOAbQgFAJgKAAQgHAAgFgEQgFgFAAgHQAAgGASgkQgCgEAAgDQAAgGAMgEQARgdAVggQAeguAHAAQAOAAAEAQIAHAnIATBQQAAADAGANQAFAKAAAGQAAAHgGAEQgFAFgGAAIgBAAgAgIALIAQgCIAQgBIgHgoIgZArg");
	this.shape_55.setTransform(-22.7,224.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgoBdIgEAAQgLAAgEgJQgCgGAAgMQAAgWAKgPQAIgMARgMIAggVQATgOAAgSQAAgFgHgEQgIgEgHAAQgMAAgPALQgOAMgGgBQgGAAgFgDQgGgEAAgGQAAgIAGgGQAPgNALgGQAQgIAQAAQAVAAARALQATANAAAUQAAAVgJAOQgIAMgQAKIgdAUQgYAPgBATIATgCIAlgCQAKAAAKAFQANAGAAAIQAAAHgEAFQgFAEgHAAIgKAAIgJgCIgjAAIgOACIgOABIgEgBg");
	this.shape_56.setTransform(-50.2,224);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AhTBfQgEgEAAgGIAMgjIgOAAQgHAAgFgFQgDgGAAgFQgBgNAOgBIAcAAIASguIgOAAIgPAAQgHAAgFgFQgEgEAAgGQAAgOAPgBIAogCIAHgWQAIgPAHAAQAPAAAAAOQAAAHgFAQIArAAIAIgdQAEgMAMAAQAGAAAFAEQAFAEAAAHQAAADgHAXIALAAQAVAAAAAPQAAALgKAEQgFACgPAAIgFgBIgFAAIgQAvIARAAQAZAAAAAQQAAAHgFADQgEAEgHAAIgSAAIgRAAIgKAjQgDAOgPAAQgNAAAAgMQAAgGAIgfIgwAAIgQAoQgDAKgLAAQgGAAgGgFgAgeAUIAuAAIAPguIgrAAg");
	this.shape_57.setTransform(-68.7,223.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgNALQgGgEAAgHQAAgFAGgGQAGgEAIAAQAIAAAFAEQAGAFAAAGQAAAHgGAEQgGAFgHABQgIgBgGgFg");
	this.shape_58.setTransform(198.2,269.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AAdA4IgUAIQgIADgFAAQgdAAgPgPQgPgRAAgfQAAgcAWgVQAWgVAdAAQAMAAAPAGQASAJAAAKQAAAEgCADIgCAMIgBARQAAAXADAKIAGAMIAEANQABAGgFAEQgFAEgHAAQgGAAgMgLgAgRgYQgMANAAARQAAAPAGAJQAGAIALAAQAHAAAHgCQAGgDAGgFQgDgcAAgOIAAgJIACgMIgEgBIgEgBQgPAAgNANg");
	this.shape_59.setTransform(186,264.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgpA0QgVgOABgdQAAgdAQgWQASgYAdAAQAWAAAOAIQASAIAAAUQABANgQAKQgHAFgUAIIgoASQAGAGAIAEQAIADAKAAQAQAAAMgHQAKgFAGgBQANABAAALQAAAOgVAKQgRAHgTAAQgcgBgTgOgAgQgdQgIAIgEAQIAbgNQAPgHAKgGQgIgFgOAAQgJAAgJAHg");
	this.shape_60.setTransform(171.8,264.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AAiBcQgJAFgIABQgJACgJAAQgbAAgSgSQgTgRAAgcQAAghATgTQASgUAdAAQAJAAAIACQAHACAFAEQACgqACgPQACgPAOAAQAHAAAEAFQAFAFAAAGQAAASgDAkQgDAhAAATQAAArADAPIAAAEQAAAGgFAFQgEAEgHAAQgJAAgEgIgAgYAGQgJAKAAAVQAAANAJAKQAKAIANABQAIAAAFgCQAEgCAIgGIAEgEIAAgtQgEgHgHgDQgGgEgJAAQgRAAgJAKg");
	this.shape_61.setTransform(157.4,260.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AAiBcQgJAFgIABQgJACgJAAQgbAAgSgSQgTgRAAgcQAAghATgTQASgUAdAAQAJAAAIACQAHACAFAEQACgqACgPQACgPAOAAQAHAAAEAFQAFAFAAAGQAAASgDAkQgDAhAAATQAAArADAPIAAAEQAAAGgFAFQgEAEgHAAQgJAAgEgIgAgYAGQgJAKAAAVQAAANAJAKQAKAIANABQAIAAAFgCQAEgCAIgGIAEgEIAAgtQgEgHgHgDQgGgEgJAAQgRAAgJAKg");
	this.shape_62.setTransform(124.9,260.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgnAzQgSgRgBgcQgBgaAQgVQASgZAgAAQAZAAAOAUQANARAAAaQAAAcgPAUQgRAWgcAAQgWAAgQgQgAgRgUQgHAMAAAOQAAAPAIAIQAHAGAIAAQAKAAAIgHQAJgJAAgOQACgmgWgBQgOAAgJAOg");
	this.shape_63.setTransform(97.8,264.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("Ag+BOQAAgHAFgEQADgEAIAAIAQACQAJACAJAAQARAAAJgLQAIgLACgYQgHAHgIADQgIADgIAAQgYAAgPgQQgPgPgBgYQABghATgVQAWgVAjAAQALAAAIADQAJACAEAHQAQABAAARQAAAIgCAOQgGAdgBAfQAAAngMASQgRAYgoAAQgvAAAAgTgAgSg2QgKAMAAATQAAAPAFAHQAGAHALAAQAJAAAKgLQAKgLABgLIAFgkIgIgEIgIgBQgUAAgLAOg");
	this.shape_64.setTransform(84.7,267.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AAdA4IgUAIQgIADgFAAQgdAAgPgPQgPgRAAgfQAAgcAWgVQAWgVAdAAQAMAAAPAGQASAJAAAKQAAAEgDADIgBAMIgBARQAAAXADAKIAGAMIAEANQABAGgFAEQgFAEgHAAQgGAAgMgLgAgRgYQgMANAAARQAAAPAGAJQAGAIALAAQAHAAAHgCQAGgDAGgFQgDgcAAgOIAAgJIACgMIgEgBIgEgBQgPAAgNANg");
	this.shape_65.setTransform(60.5,264.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgnAzQgSgRgBgcQgBgaAQgVQASgZAgAAQAZAAAOAUQANARAAAaQAAAcgPAUQgRAWgcAAQgWAAgQgQgAgRgUQgHAMAAAOQAAAPAIAIQAHAGAIAAQAKAAAIgHQAJgJAAgOQACgmgWgBQgOAAgJAOg");
	this.shape_66.setTransform(24,264.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AAZA4IgEgZQgCgNAAgMIABgKIAAgLIABgEIAAgGQAAgKgFAAQgLAAgJANQgJAOgGATIgBALIgBALIgBALIgBALQABAHgFAEQgFAFgIAAQgHAAgFgFQgEgEAAgHIgBgKIgBgMIACggIACghIAAgKIgBgMQAAgHAFgFQAFgEAHAAQAQAAABAUIAAAAQASgRATAAQAXAAAIATQAHANAAAaIAAAJIAAAGQgBAKADAPQACAPAAAKQAAAGgEAEQgFAFgHAAQgQAAgBgPg");
	this.shape_67.setTransform(11.2,263.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgpA0QgUgOAAgdQAAgdAQgWQASgYAeAAQAVAAAOAIQATAIAAAUQgBANgPAKQgGAFgVAIIgoASQAGAGAIAEQAIADAKAAQARAAAKgHQALgFAGgBQANABAAALQgBAOgUAKQgRAHgTAAQgcgBgTgOgAgPgdQgJAIgFAQIAcgNQAPgHAKgGQgIgFgNAAQgLAAgHAHg");
	this.shape_68.setTransform(-43.5,264.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AAeA4IgVAIQgIADgFAAQgdAAgPgPQgPgRAAgfQABgcAVgVQAWgVAdAAQAMAAAPAGQASAJABAKQgBAEgDADIgCAMIAAARQAAAXADAKIAGAMIAEANQABAGgFAEQgFAEgGAAQgHAAgLgLgAgRgYQgMANAAARQAAAPAGAJQAGAIAMAAQAGAAAHgCQAGgDAHgFQgEgcAAgOIAAgJIACgMIgEgBIgDgBQgQAAgNANg");
	this.shape_69.setTransform(-76.6,264.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("Ag+BOQAAgHAFgEQADgEAIAAIAQACQAJACAJAAQARAAAJgLQAIgLACgYQgHAHgIADQgIADgIAAQgYAAgPgQQgPgPgBgYQABghATgVQAWgVAjAAQALAAAIADQAJACAEAHQAQABAAARQAAAIgCAOQgGAdgBAfQAAAngMASQgRAYgoAAQgvAAAAgTgAgSg2QgKAMAAATQAAAPAFAHQAGAHALAAQAJAAAKgLQAKgLABgLIAFgkIgIgEIgIgBQgUAAgLAOg");
	this.shape_70.setTransform(-90.4,267.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgPBZQgEgFAAgHIgBgWIAAgXIABgbIABgaQAAgHAFgFQAFgEAHAAQAGAAAFAEQAFAFAAAHIgBAaIgCAbIABAXIAAAWQAAAHgEAFQgFAEgHAAQgHAAgFgEgAgLg9QgFgFAAgIQAAgIAFgFQAGgFAHAAQAIAAAGAFQAFAFAAAIQAAAIgFAFQgGAFgIAAQgHAAgGgFg");
	this.shape_71.setTransform(218.9,224.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgSAaQgEgEAAgGQAAgDAHgPIALgTQAEgIAIAAQAGAAAFAFQAEAEAAAFQAAADgIAPIgKATQgEAIgIAAQgGAAgFgEg");
	this.shape_72.setTransform(172.1,234.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgpA1QgVgPAAgdQAAgeARgVQASgXAdAAQAWAAAOAGQASAKAAASQAAAOgOAKQgHAFgVAIIgoATQAGAFAIAEQAIADAKAAQARAAALgHQAKgGAGABQAMAAAAALQABAOgVAKQgRAGgTAAQgcAAgTgNgAgQgcQgIAHgEAPIAbgLQAQgIAJgHQgIgEgOAAQgJAAgJAIg");
	this.shape_73.setTransform(159.9,227.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AAiBcQgJAFgIACQgJABgJAAQgbAAgSgRQgTgSAAgcQAAghATgSQASgVAdAAQAJAAAIACQAHACAFAEQACgqACgQQACgOAOAAQAHAAAEAEQAFAFAAAHQAAASgDAjQgDAjAAARQAAAsADAPIAAADQAAAIgFADQgEAFgHAAQgJAAgEgIgAgYAFQgJALAAAVQAAANAJAJQAKAJANAAQAIAAAFgCQAEgBAIgHIAEgDIAAgsQgEgJgHgCQgGgEgJAAQgRAAgJAJg");
	this.shape_74.setTransform(115.3,223.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AAZA5IgEgaQgCgOAAgLIABgKIAAgLIABgEIAAgGQAAgKgFAAQgKAAgJAOQgKANgGAUIgBALIgBAKIAAALIgCAKQABAIgFAFQgFAEgHAAQgHAAgGgEQgEgFAAgHIgBgLIAAgLIABghIACgfIAAgMIgBgLQAAgHAFgEQAFgFAHAAQAQAAABAUIAAABQASgSATAAQAXAAAIATQAHANgBAZIAAAJIAAAHQABAKACAPQADAPAAAJQgBAHgFAFQgEAEgHAAQgQAAgBgOg");
	this.shape_75.setTransform(101.8,227.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AAeA5IgUAIQgJACgFAAQgdAAgPgQQgPgQAAgfQABgcAVgVQAWgVAdAAQAMAAAPAHQASAIABAKQAAAEgEAEIgCALIAAASQAAAWADAKIAGANIAFALQAAAHgFAEQgFAEgGAAQgHAAgLgKgAgQgXQgNAMAAAQQAAARAGAIQAGAIAMAAQAGAAAHgDQAGgCAHgEQgEgdAAgOIAAgJIACgLIgEgCIgDgBQgQAAgMAOg");
	this.shape_76.setTransform(88.2,227.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgnAzQgSgRgBgcQgBgaAQgVQASgZAgAAQAZAAAOAUQANARAAAaQAAAcgPAUQgRAWgcAAQgWAAgQgQgAgRgUQgHAMAAAOQAAAPAIAIQAHAGAIAAQAKAAAIgHQAJgJAAgOQACgmgWgBQgOAAgJAOg");
	this.shape_77.setTransform(50.6,227.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgjBeQgGgEAAgHQAAgLAag4QgNgagdgzIgGgKQgEgFAAgFQAAgGAGgFQAFgFAHAAQAIAAAEAGQASAXAWAuIAQgjQAIgSAJgOQAFgJAJAAQAHAAAFAFQAGAFAAAGQAAAEgCAEIgrBWQgPAggIAVIgHAWQgFAMgLAAQgHAAgFgFg");
	this.shape_78.setTransform(37.2,230.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AAZA5IgEgaQgCgOAAgLIABgKIAAgLIABgEIAAgGQAAgKgFAAQgKAAgJAOQgKANgGAUIgBALIgBAKIAAALIgCAKQABAIgFAFQgFAEgHAAQgHAAgGgEQgEgFAAgHIgBgLIAAgLIABghIACgfIAAgMIgBgLQAAgHAFgEQAFgFAHAAQAQAAABAUIAAABQASgSATAAQAXAAAIATQAHANgBAZIAAAJIAAAHQABAKACAPQADAPAAAJQgBAHgFAFQgEAEgHAAQgQAAgBgOg");
	this.shape_79.setTransform(13.1,227.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgpA1QgVgPAAgdQAAgeARgVQASgXAdAAQAWAAAOAGQASAKAAASQAAAOgOAKQgHAFgVAIIgoATQAFAFAJAEQAIADAKAAQAQAAAMgHQAKgGAGABQAMAAAAALQABAOgVAKQgRAGgTAAQgcAAgTgNgAgQgcQgIAHgEAPIAbgLQAQgIAJgHQgIgEgOAAQgJAAgJAIg");
	this.shape_80.setTransform(-14.8,227.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgpA1QgUgPgBgdQABgeAQgVQASgXAeAAQAVAAAOAGQASAKABASQAAAOgQAKQgHAFgUAIIgoATQAFAFAJAEQAIADAKAAQAQAAALgHQALgGAGABQAMAAAAALQAAAOgUAKQgRAGgTAAQgcAAgTgNgAgPgcQgJAHgFAPIAcgLQAPgIAKgHQgIgEgNAAQgLAAgHAIg");
	this.shape_81.setTransform(-57.7,227.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("Ag7BdQgGgGAAgIIAAh/IgBgSQAAgJABgGQACgMATgCQAJgDAWAAQAWAAAVAPQAZASAAAaQAAANgFAKQgEAIgKAIQAMAFAJAMQAKANAAANQAAAQgSAPQgLAJgNAFQgcALgrAAQgIAAgFgGgAggBCQAVgCAYgGQAVgHAAgHQgBgJgNgIQgKgFgKgBIgggBgAgggmIAAAZQALABAGAAQAkgDAAgYQAAgJgLgJQgKgIgNAAIgTAAg");
	this.shape_82.setTransform(-71.9,224);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgkBYQgSgJgGgRIgBgGQAAgGAGgFQAEgEAHAAQAIAAAFAGIAJAMQAHAFAPAAQAKAAAJgGQAJgIAAgJQAAgfgogDQgSgCAAgNQAAgKAOgEIAZgGQAIgDAFgEQAEgEAAgGQABgSgcAAQgKAAgLAHQgLAIgFAAQgHgBgEgFQgGgEAAgHQAAgKAVgKQASgKAMAAQAaAAASAMQASANAAAZQgBANgFAKQgEAJgLAFQAZANAAAfQAAAagTARQgSARgZAAQgUAAgQgIg");
	this.shape_83.setTransform(-98.8,224.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AhTBfQgEgEgBgGIANgjIgOAAQgHAAgFgFQgDgGAAgFQAAgNANgBIAcAAIASguIgOAAIgPAAQgHAAgEgFQgFgEAAgGQAAgOAPgBIAngCIAIgWQAIgPAHAAQAPAAAAAOQAAAHgEAQIAqAAIAJgdQAEgMAKAAQAHAAAFAEQAFAEAAAHQAAADgHAXIALAAQAWAAgBAPQAAALgKAEQgFACgPAAIgFgBIgGAAIgPAvIARAAQAZAAAAAQQAAAHgEADQgFAEgGAAIgSAAIgSAAIgJAjQgEAOgPAAQgNAAAAgMQAAgGAIgfIgwAAIgQAoQgDAKgLAAQgHAAgFgFgAgdAUIAtAAIAQguIgsAAg");
	this.shape_84.setTransform(-117.2,223.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgNALQgGgEAAgHQAAgFAGgGQAGgEAIAAQAIAAAFAEQAGAFAAAGQAAAHgGAEQgFAFgIABQgIgBgGgFg");
	this.shape_85.setTransform(215.1,269.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgpA0QgVgOAAgdQAAgdARgWQASgYAdAAQAWAAAOAIQASAIAAAUQAAANgOAKQgHAFgVAIIgoASQAFAGAJAEQAIADAKAAQAQAAAMgHQAKgFAGgBQANABAAALQAAAOgVAKQgRAHgTAAQgcgBgTgOgAgQgdQgIAIgEAQIAbgNQAQgHAJgGQgIgFgOAAQgJAAgJAHg");
	this.shape_86.setTransform(202.6,264.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgmA2QgSgQgBgbQABgXAQgaQAUgeAZAAQANAAAQAHQAWAJAAALQgBAGgEAEQgEAFgHAAQgFAAgIgFQgHgGgPAAQgIAAgLASQgLASAAAMQAAANAKAHQAIAHANAAQAJAAAMgGQALgGADAAQAHAAAFAFQAEAEAAAGQABAKgVAKQgSAIgNAAQgZAAgTgPg");
	this.shape_87.setTransform(189.1,264);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AAeA4IgUAIQgJADgFAAQgdAAgPgPQgOgRAAgfQAAgcAVgVQAWgVAdAAQALAAAQAGQATAJAAAKQAAAEgEADIgCAMIAAARQAAAXAEAKIAFAMIAFANQAAAGgFAEQgFAEgGAAQgHAAgLgLgAgQgYQgNANAAARQAAAPAGAJQAGAIAMAAQAGAAAHgCQAGgDAHgFQgEgcAAgOIABgJIABgMIgEgBIgDgBQgQAAgMANg");
	this.shape_88.setTransform(176.1,264.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgwBAQgDgFAAgHIAAhPIAAgLIAAgLQAAgHAEgFQAEgEAIAAQANAAADAOQAUgQAbAAQAZAAgBAgIAAAIQgBATgQAAQgPAAAAgQIAAgMQgbAEgMAYIAAA8QAAAHgEAFQgGAEgHAAQgHAAgFgEg");
	this.shape_89.setTransform(163.3,264.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgpA0QgUgOgBgdQABgdAQgWQASgYAeAAQAVAAAOAIQASAIABAUQAAANgQAKQgHAFgUAIIgoASQAFAGAJAEQAIADAKAAQAQAAALgHQALgFAGgBQAMABAAALQAAAOgUAKQgRAHgTAAQgcgBgTgOgAgPgdQgJAIgFAQIAcgNQAPgHAKgGQgIgFgNAAQgLAAgHAHg");
	this.shape_90.setTransform(139,264.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("Ag+BOQAAgHAEgEQAEgEAHAAIAQACQALACAHAAQASAAAIgLQAJgLABgYQgGAHgIADQgHADgJAAQgYAAgQgQQgOgPAAgYQgBghAVgVQAVgVAiAAQAMAAAIADQAJACAFAHQAPABAAARQAAAIgDAOQgEAdgBAfQgBAngNASQgPAYgoAAQgwAAAAgTgAgSg2QgKAMAAATQAAAPAFAHQAGAHALAAQAJAAAKgLQAJgLACgLIAFgkIgIgEIgIgBQgUAAgLAOg");
	this.shape_91.setTransform(88.3,267.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AAZA4IgDgZQgCgNgBgMIABgKIABgLIAAgEIAAgGQAAgKgFAAQgKAAgJANQgLAOgFATIgBALIgBALIAAALIgBALQAAAHgFAEQgFAFgHAAQgIAAgFgFQgEgEAAgHIgBgKIAAgMIABggIABghIAAgKIAAgMQAAgHAFgFQAFgEAHAAQAQAAABAUIAAAAQASgRATAAQAXAAAJATQAFANAAAaIAAAJIAAAGQABAKACAPQACAPABAKQAAAGgGAEQgEAFgHAAQgPAAgCgPg");
	this.shape_92.setTransform(75.4,263.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgLBgQgFgFAAgHIAAinQAAgIAFgFQAFgDAGAAQAIAAAEAEQAFAEAAAIIAAChQAAAWgRAAQgGABgFgFg");
	this.shape_93.setTransform(-42.4,260.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AAYA8QgPAGgQAAQgRAAgMgHQgNgJgDgQQgFgeAAgXQAAgQAEgUQACgOAOAAQAHAAAFAFQAFAEAAAHIgBARIgCARQAAARABAMQABANADAIIAGACIAFABQANAAAQgEIAAgVIgBgUQAAgZADgSQACgPAOAAQAIAAAFAFQAFAEgBAHIgCArIAAAYIAAAZIABAHIAAAIQAAAHgFAEQgFAFgHAAQgKAAgFgKg");
	this.shape_94.setTransform(-75.8,264.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgXBnQgFgFAAgGIAAgDQADgSAAgPIAAg8IgIABIgHAAQgHAAgFgEQgFgEAAgIQAAgLAMgDQAFgCAQgBIACgNQADgcAMgNQANgQAdAAQAXAAAAAQQAAAPgVAAQgPAAgHALQgFAHgBARIgBADIAYgBQAWAAAAAQQAAAQgYgBIgXABIAAAgIAAAhQAAAWgDANQgDANgMAAQgHAAgFgEg");
	this.shape_95.setTransform(191.6,224.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgPBZQgEgFAAgHIgBgWIAAgXIABgbIABgaQAAgHAFgFQAFgEAHAAQAGAAAFAEQAFAFAAAHIgBAaIgCAbIABAXIAAAWQAAAHgEAFQgFAEgHAAQgHAAgFgEgAgLg9QgFgFAAgIQAAgIAFgFQAGgFAHAAQAIAAAGAFQAFAFAAAIQAAAIgFAFQgGAFgIAAQgHAAgGgFg");
	this.shape_96.setTransform(182.2,224.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AAdA5IgUAIQgIACgFAAQgdAAgPgQQgOgQAAgfQgBgcAWgVQAWgVAdAAQALAAAQAHQASAIAAAKQAAAEgCAEIgCALIgBASQAAAWAEAKIAFANIAEALQAAAHgEAEQgFAEgHAAQgFAAgNgKgAgRgXQgMAMAAAQQAAARAGAIQAGAIALAAQAHAAAHgDQAHgCAFgEQgDgdAAgOIABgJIABgLIgEgCIgEgBQgPAAgNAOg");
	this.shape_97.setTransform(148.9,227.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgkBdQgEAEgHAAQgGAAgFgEQgEgEgBgHIABgJIAAgJIAAiJQAAgJAEgHQAFgJAJAAQANAAAAAPIAAAFIgBAFIAAAvQAKgFAIgDQAIgCAGAAQAdAAASAUQAQATAAAcQABAcgUAUQgUAUgbAAQgRAAgQgGgAgNgCQgIADgLAHIAAA0QARAIAMAAQAOAAALgLQAJgKABgQQgBgQgHgKQgKgKgOAAQgFAAgIADg");
	this.shape_98.setTransform(121.3,223.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgpA1QgVgPAAgdQAAgeARgVQASgXAdAAQAWAAAOAGQASAKAAASQABAOgPAKQgHAFgVAIIgoATQAFAFAJAEQAIADAKAAQAQAAAMgHQAKgGAGABQANAAAAALQAAAOgVAKQgRAGgTAAQgcAAgTgNgAgQgcQgIAHgEAPIAbgLQAPgIAKgHQgIgEgOAAQgJAAgJAIg");
	this.shape_99.setTransform(95.8,227.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("Ag+BOQAAgHAFgEQAEgEAGAAIARACQAKACAIAAQARAAAJgLQAIgLABgYQgGAHgIADQgIADgIAAQgYAAgQgPQgPgRAAgXQAAgiAVgUQAUgVAkAAQALAAAIADQAIADAGAFQAPACAAAQQAAAJgDAOQgEAdgCAfQgBAngLASQgQAYgoAAQgwAAAAgTgAgSg3QgKANAAATQAAAPAGAHQAFAGALAAQAJAAAKgKQAJgLACgLIAFglIgIgDIgIgBQgTAAgMANg");
	this.shape_100.setTransform(9.4,230.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgPBZQgEgFAAgHIgBgWIAAgXIABgbIABgaQAAgHAFgFQAFgEAHAAQAGAAAFAEQAFAFAAAHIgBAaIgCAbIABAXIAAAWQAAAHgEAFQgFAEgHAAQgHAAgFgEgAgLg9QgFgFAAgIQAAgIAFgFQAGgFAHAAQAIAAAGAFQAFAFAAAIQAAAIgFAFQgGAFgIAAQgHAAgGgFg");
	this.shape_101.setTransform(-13.4,224.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("Ag2BKQgSgTAAgaQAAgoAkgrQAfgkAeAAIAKAAIAIACQAFgGAIABQAMAAADAOQACAKAAAOQAAAGgEAFQgEAGgJABQgLAAgFgMQgDgFgCgBQgCgBgIAAQgPAAgTAXQgcAhAAAdQAAAOAIAJQAJAKANAAQALgBAMgGIATgMQAJgGAFgBQAIABAFAFQAFAFAAAHQAAAGgHAGQghAdgiAAQgcAAgTgVg");
	this.shape_102.setTransform(-31.7,224.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AANBJIAAgeIgwAAQgmAAAAgQQAAgGAGgJIAMgMIA6hTQAKgNAPAAQAIAAAFAEQAGAEAAAIIAABbQAQABAGACQAFAEAAAJQAAAKgJAEQgGADgMgBIAAAmQAAAHgEAFQgFAEgHAAQgSAAAAgYgAgWALIAjAAIAAg2IgjA2g");
	this.shape_103.setTransform(-58.1,223.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AhTBfQgEgEAAgGIAMgjIgOAAQgHAAgFgFQgDgGAAgFQgBgNAOgBIAcAAIASguIgOAAIgPAAQgHAAgEgFQgFgEAAgGQAAgOAPgBIAngCIAIgWQAIgPAHAAQAPAAAAAOQAAAHgFAQIArAAIAJgdQADgMAMAAQAGAAAFAEQAFAEAAAHQAAADgHAXIALAAQAWAAgBAPQAAALgKAEQgGACgOAAIgFgBIgFAAIgQAvIARAAQAZAAAAAQQAAAHgFADQgEAEgGAAIgSAAIgSAAIgJAjQgEAOgPAAQgNAAAAgMQAAgGAIgfIgwAAIgQAoQgDAKgLAAQgGAAgGgFgAgeAUIAuAAIAPguIgrAAg");
	this.shape_104.setTransform(-76.5,223.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AAZA4IgEgZQgBgNAAgMIAAgKIABgLIAAgEIAAgGQAAgKgFAAQgKAAgKANQgKAOgFATIgBALIgBALIgBALIgBALQAAAHgEAEQgFAFgIAAQgGAAgFgFQgFgEAAgHIgBgKIgBgMIACggIABghIAAgKIAAgMQAAgHAFgFQAFgEAHAAQAQAAABAUIAAAAQASgRATAAQAXAAAJATQAFANABAaIAAAJIAAAGQAAAKACAPQADAPgBAKQAAAGgEAEQgFAFgIAAQgPAAgBgPg");
	this.shape_105.setTransform(146.8,263.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgpA0QgVgOAAgdQAAgdARgWQASgYAdAAQAWAAAOAIQASAIAAAUQAAANgOAKQgHAFgVAIIgoASQAGAGAIAEQAIADAKAAQARAAALgHQAKgFAGgBQAMABAAALQABAOgVAKQgRAHgTAAQgcgBgTgOgAgQgdQgIAIgEAQIAbgNQAQgHAJgGQgIgFgOAAQgJAAgJAHg");
	this.shape_106.setTransform(132.9,264.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AAdA4IgUAIQgIADgFAAQgdAAgPgPQgOgRAAgfQgBgcAWgVQAWgVAdAAQALAAAQAGQASAJAAAKQAAAEgCADIgCAMIgBARQAAAXAEAKIAFAMIAEANQAAAGgEAEQgFAEgHAAQgFAAgNgLgAgRgYQgMANAAARQAAAPAGAJQAGAIALAAQAHAAAHgCQAHgDAFgFQgDgcAAgOIABgJIABgMIgEgBIgEgBQgPAAgNANg");
	this.shape_107.setTransform(99.9,264.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AAZA4IgDgZQgCgNAAgMIAAgKIABgLIAAgEIAAgGQAAgKgFAAQgKAAgKANQgKAOgFATIgBALIgBALIAAALIgBALQgBAHgEAEQgFAFgIAAQgHAAgEgFQgFgEAAgHIgBgKIgBgMIACggIABghIAAgKIAAgMQAAgHAFgFQAFgEAHAAQAQAAABAUIAAAAQASgRATAAQAXAAAJATQAFANAAAaIAAAJIAAAGQAAAKADAPQACAPAAAKQABAGgGAEQgEAFgIAAQgOAAgCgPg");
	this.shape_108.setTransform(86.4,263.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AAdA5IgUAIQgIACgFAAQgdAAgPgQQgPgQAAgfQAAgcAWgVQAWgVAdAAQAMAAAPAHQASAIAAAKQAAAEgCAEIgCALIgBASQAAAWAEAKIAFANIAEALQAAAHgEAEQgFAEgHAAQgFAAgNgKgAgRgXQgMAMAAAQQAAARAGAIQAGAIALAAQAHAAAHgDQAHgCAFgEQgDgdAAgOIAAgJIACgLIgEgCIgEgBQgPAAgNAOg");
	this.shape_109.setTransform(185.5,227.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgwBAQgEgFABgHIAAhPIAAgLIAAgLQAAgHAFgFQAEgEAHAAQANAAADAOQAVgQAaAAQAZAAAAAgIgBAIQgBATgPAAQgQAAAAgQIgBgMQgaAEgMAYIAAA8QAAAHgFAFQgFAEgGAAQgIAAgFgEg");
	this.shape_110.setTransform(123.2,227.3);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgpA1QgVgPABgdQgBgeARgVQASgXAdAAQAWAAAOAGQASAKAAASQABAOgPAKQgHAFgVAIIgoATQAFAFAJAEQAIADAKAAQAQAAAMgHQAKgGAGABQANAAAAALQAAAOgVAKQgRAGgTAAQgcAAgTgNgAgQgcQgIAHgEAPIAbgLQAPgIAKgHQgIgEgOAAQgKAAgIAIg");
	this.shape_111.setTransform(79.2,227.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AAZA5IgEgaQgCgOAAgLIABgKIAAgLIABgEIAAgGQAAgKgFAAQgLAAgJAOQgJANgGAUIgBALIgBAKIgBALIgBAKQABAIgFAFQgFAEgIAAQgHAAgFgEQgEgFAAgHIgBgLIgBgLIACghIACgfIAAgMIgBgLQAAgHAFgEQAFgFAHAAQAQAAABAUIAAABQASgSATAAQAXAAAIATQAHANAAAZIAAAJIAAAHQgBAKADAPQACAPAAAJQAAAHgEAFQgFAEgIAAQgPAAgBgOg");
	this.shape_112.setTransform(15.6,227.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgwBAQgDgFAAgHIAAhPIAAgLIAAgLQAAgHAEgFQAFgEAHAAQAOAAACAOQAVgQAaAAQAZAAAAAgIgBAIQgBATgPAAQgQAAAAgQIAAgMQgbAEgMAYIAAA8QAAAHgFAFQgEAEgHAAQgIAAgFgEg");
	this.shape_113.setTransform(-3.8,227.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgmBjQgOgDgIgGQgHAAgFgFQgFgEAAgIIABgkIACgkIgBgpIgBgoQAAgHAHgGQAGgHAIAAQAEAAAQAHIAWALQAjAMAZAYQAfAcAAAjQAAAUgLAUQgKATgSAMQgUANgkAAQgJAAgMgCgAgqA+IALAFIAOABQAZAAALgHQALgHAHgMQAGgMAAgNQAAgdgjgWQgLgHgngRg");
	this.shape_114.setTransform(-31.6,224.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("Ag/BHQgDgFgBgEQABgGAEgFQAGgEAGAAQAHAAAGAEIAJAKQAHAFANAAQARAAANgNQAMgOAAgTQAAgSgGgIQgGgJgMAAQgUAAgOANIgKAMQgGAFgIAAQgHABgFgFQgFgFAAgGIADgVQADgjAAgNIgCgIIgCgIQAAgGAHgDQAEgCAHAAIAHAAIAHAAIA6ABIAJgBIAKAAQAGAAAFADQAEAFABAHQgBASgkAAIgIAAIgGAAIgkAAIgCAYQAPgIAWAAQAdAAAQAXQAMARAAAbQAAAigUAVQgVAWgiABQgmAAgRgbg");
	this.shape_115.setTransform(-59.4,224.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AhTBfQgEgEAAgGIAMgjIgOAAQgHAAgFgFQgEgGAAgFQABgNAOgBIAbAAIASguIgPAAIgOAAQgHAAgFgFQgEgEAAgGQAAgOAPgBIAogCIAIgWQAGgPAIAAQAPAAAAAOQAAAHgFAQIArAAIAIgdQAEgMAMAAQAGAAAFAEQAFAEAAAHQAAADgHAXIALAAQAVAAAAAPQABALgLAEQgGACgOAAIgFgBIgFAAIgQAvIARAAQAZAAAAAQQAAAHgFADQgEAEgHAAIgSAAIgRAAIgKAjQgDAOgQAAQgMAAAAgMQAAgGAJgfIgyAAIgPAoQgDAKgLAAQgGAAgGgFgAgeAUIAvAAIAOguIgrAAg");
	this.shape_116.setTransform(-78.1,223.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgiBAQgSgHAAgOQAAgMAPAAQAFAAAKAEQALADAGAAQAYAAAAgKQAAgGgSgIQgYgLgGgDQgSgNAAgRQAAgYAagJQAPgFAfAAQAMAAAGADQAHAEABAMQAAAWgMAAQgMAAgCgKIgKgBQgdAAAAAIQAAAFAQAIQAZALAJAGQARAMAAAQQAAAVgTALQgQAJgWAAQgQAAgOgFg");
	this.shape_117.setTransform(195.7,264);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AAeA4IgVAIQgIADgFAAQgdAAgPgPQgPgRAAgfQABgcAVgVQAWgVAdAAQAMAAAPAGQASAJABAKQgBAEgDADIgCAMIAAARQAAAXADAKIAGAMIAEANQABAGgFAEQgFAEgGAAQgGAAgMgLgAgRgYQgMANAAARQAAAPAGAJQAGAIAMAAQAGAAAHgCQAGgDAHgFQgEgcAAgOIAAgJIACgMIgEgBIgDgBQgQAAgNANg");
	this.shape_118.setTransform(169.6,264.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgwBAQgDgFAAgHIAAhPIAAgLIAAgLQAAgHAEgFQAFgEAHAAQAOAAACAOQAUgQAbAAQAYAAAAAgIAAAIQgBATgQAAQgPAAAAgQIAAgMQgbAEgMAYIAAA8QAAAHgEAFQgGAEgHAAQgIAAgEgEg");
	this.shape_119.setTransform(139.1,264.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgvBAQgFgFAAgHIAAhPIABgLIAAgLQAAgHAFgFQADgEAIAAQAOAAACAOQAVgQAaAAQAYAAABAgIgBAIQgBATgQAAQgPAAAAgQIgBgMQgaAEgMAYIAAA8QAAAHgFAFQgEAEgHAAQgJAAgDgEg");
	this.shape_120.setTransform(90.1,264.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgSA2IgnhhQgDgEAAgDQAAgHAGgFQAFgEAHAAQALAAAEAKQAHAOAUA2IARgpIAKgbQAGgJAKAAQAGAAAGAEQAFAFABAHQgBAEgTAsIgaA2QgBAGgEAEQgFAEgFAAQgMAAgGgNg");
	this.shape_121.setTransform(64,264);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgLBgQgFgFAAgHIAAinQAAgIAFgFQAFgDAGAAQAIAAAEAEQAFAEAAAIIAAChQAAAWgRAAQgGABgFgFg");
	this.shape_122.setTransform(30.1,260.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgLBgQgFgFAAgHIAAinQAAgIAFgFQAFgDAGAAQAIAAAEAEQAFAEAAAIIAAChQAAAWgRAAQgGABgFgFg");
	this.shape_123.setTransform(23.3,260.6);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AAdA4IgUAIQgIADgFAAQgdAAgPgPQgPgRAAgfQAAgcAWgVQAWgVAdAAQAMAAAPAGQASAJAAAKQAAAEgCADIgCAMIgBARQAAAXADAKIAGAMIAEANQAAAGgEAEQgFAEgHAAQgFAAgNgLgAgRgYQgMANAAARQAAAPAGAJQAGAIALAAQAHAAAHgCQAHgDAFgFQgDgcAAgOIAAgJIACgMIgEgBIgEgBQgPAAgNANg");
	this.shape_124.setTransform(13.1,264.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AAZA4IgEgZQgCgNAAgMIABgKIAAgLIABgEIAAgGQAAgKgFAAQgKAAgJANQgKAOgGATIgBALIgBALIAAALIgCALQABAHgFAEQgFAFgHAAQgHAAgGgFQgEgEAAgHIgBgKIAAgMIABggIACghIAAgKIgBgMQAAgHAFgFQAFgEAHAAQAQAAABAUIAAAAQASgRATAAQAXAAAIATQAHANgBAaIAAAJIAAAGQABAKACAPQADAPAAAKQgBAGgFAEQgEAFgHAAQgQAAgBgPg");
	this.shape_125.setTransform(-11.2,263.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgmA2QgSgQAAgbQAAgXARgaQATgeAZAAQANAAAQAHQAWAJgBALQABAGgFAEQgEAFgHAAQgGAAgHgFQgHgGgPAAQgJAAgKASQgLASAAAMQAAANAJAHQAJAHANAAQAJAAALgGQANgGADAAQAGAAAFAFQAFAEAAAGQgBAKgUAKQgSAIgNAAQgaAAgSgPg");
	this.shape_126.setTransform(-49.7,264);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgyBiQgFgFAAgHIAAgtIAAgwQAAgagBgTIgCgYQAAgLAEgGQAGgJAJABQAGgBAFAFQAFAFAAAGIAAACQAIgGAIgBQAHgDAJAAQAcAAANAYQAJASAAAcQAAAagPASQgQASgcAAQgJAAgMgCIAAAyQAAAHgFAFQgFAFgHAAQgHAAgFgFgAgGg5QgIADgIAHIABAxQALAEAKAAQANAAAGgIQAGgIAAgOIgBgWQgEgPgLAAQgIAAgHAEg");
	this.shape_127.setTransform(-62.4,267);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AgyBiQgFgFAAgHIAAgtIAAgwQAAgagBgTIgCgYQAAgLAEgGQAGgJAJABQAGgBAFAFQAFAFAAAGIAAACQAIgGAIgBQAHgDAJAAQAcAAANAYQAJASAAAcQAAAagPASQgQASgcAAQgJAAgMgCIAAAyQAAAHgFAFQgFAFgHAAQgHAAgFgFgAgGg5QgIADgIAHIABAxQALAEAKAAQANAAAGgIQAGgIAAgOIgBgWQgEgPgLAAQgIAAgHAEg");
	this.shape_128.setTransform(-88.9,267);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AgpA1QgUgPgBgdQAAgeARgVQASgXAeAAQAVAAAOAGQASAKABASQAAAOgPAKQgIAFgUAIIgoATQAGAFAIAEQAIADAKAAQARAAAKgHQALgGAGABQAMAAAAALQABAOgVAKQgRAGgTAAQgcAAgTgNgAgQgcQgIAHgFAPIAcgLQAQgIAJgHQgIgEgNAAQgKAAgJAIg");
	this.shape_129.setTransform(227.1,227.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AgLBgQgFgFAAgHIAAioQAAgHAFgEQAFgEAGgBQAIAAAEAFQAFAEAAAHIAAChQAAAYgRAAQgGgBgFgEg");
	this.shape_130.setTransform(209.9,223.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgyBiQgFgFAAgHIAAguIAAguQAAgbgBgTIgCgYQAAgKAEgIQAGgHAJgBQAGAAAFAFQAFAFAAAGIAAABQAIgEAIgDQAHgCAJAAQAcAAANAYQAJASAAAcQAAAagPASQgQATgcgBQgJAAgMgBIAAAxQAAAHgFAFQgFAEgHAAQgHAAgFgEgAgGg6QgIAEgIAHQABAaAAAXQALAEAKAAQANAAAGgIQAGgIAAgOIgBgXQgEgOgLAAQgIAAgHADg");
	this.shape_131.setTransform(193.1,230.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AgpA1QgVgPABgdQAAgeAQgVQASgXAdAAQAWAAAOAGQASAKAAASQABAOgQAKQgHAFgUAIIgoATQAGAFAIAEQAIADAKAAQAQAAAMgHQAKgGAGABQANAAAAALQAAAOgVAKQgRAGgTAAQgcAAgTgNgAgQgcQgIAHgEAPIAbgLQAPgIAKgHQgIgEgOAAQgJAAgJAIg");
	this.shape_132.setTransform(156,227.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgnAzQgSgRgBgcQgBgaAQgVQASgZAgAAQAZAAAOAUQANARAAAaQAAAcgPAUQgRAWgcAAQgWAAgQgQgAgRgUQgHAMAAAOQAAAPAIAIQAHAGAIAAQAKAAAIgHQAJgJAAgOQACgmgWgBQgOAAgJAOg");
	this.shape_133.setTransform(86.6,227.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AAcBZQgDgKgCgSQgCgQAAgMIAAgJIAAgJIAAgKQgBgHgFAAQgOAAgKAMQgFAGgKARQAAAtgEAJQgFAKgKAAQgHAAgGgEQgFgFAAgHIABgGQABgDABgeIAAhRIAAgEIABgUIgBgLIgBgKQAAgIAFgEQAFgEAHgBQAMAAAEANQACAIAAAPIAAAZIgBAXQAJgIAKgFQAJgEAMAAQAVAAAJAMQAHAIABASIACAdIACAZIAEAXIABAFQAAAGgFAFQgGAFgHAAQgMAAgEgNg");
	this.shape_134.setTransform(21.7,223.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgwBAQgDgFAAgHIAAhPIAAgLIAAgLQAAgHAEgFQAFgEAHAAQAOAAACAOQAVgQAaAAQAZAAAAAgIgBAIQgBATgPAAQgQAAAAgQIAAgMQgbAEgMAYIAAA8QAAAHgFAFQgEAEgHAAQgIAAgFgEg");
	this.shape_135.setTransform(-47.5,227.3);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("Ag0BLQgNgTAAggQAAg7AzgsIAMgMQAIgIAGAAQAHABAFAEQAFAEAAAHQABAHgOANIgUASQgLALgFALQAHgDAFgBIAKgBQAegBARARQARAPAAAcQAAAegSASQgTAUgeAAQgiABgRgZgAgRAHIgOAIIAAAJQAAAWAIANQAHAKAQABQAPAAAJgLQAIgKAAgSQAAgNgIgIQgJgGgQAAQgJAAgHADg");
	this.shape_136.setTransform(-103.2,224.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgiBAQgSgHAAgOQAAgMAOAAQAGAAALAEQAKADAGAAQAYAAAAgKQAAgGgRgIQgYgLgIgDQgRgNAAgRQAAgYAagJQAQgFAdAAQANAAAFADQAJAEgBAMQAAAWgLAAQgMAAgDgKIgKgBQgcAAAAAIQAAAFARAIQAYALAIAGQASAMAAAQQAAAVgUALQgPAJgWAAQgRAAgNgFg");
	this.shape_137.setTransform(131.3,264);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgvBAQgEgFAAgHIAAhPIAAgLIAAgLQAAgHAEgFQAEgEAIAAQANAAADAOQAUgQAbAAQAZAAgBAgIAAAIQgBATgQAAQgPAAAAgQIAAgMQgbAEgMAYIAAA8QAAAHgEAFQgGAEgHAAQgHAAgEgEg");
	this.shape_138.setTransform(119.6,264.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgjBdQgFAEgHAAQgGAAgFgEQgFgEABgHIAAgJIAAgJIAAiJQAAgJAEgHQAFgJAJAAQANAAAAAPIgBAFIAAAFIAAAvQAJgFAJgDQAIgCAHAAQAdAAARAUQARATAAAcQAAAcgTAUQgVAUgbAAQgRAAgPgGgAgNgCQgJADgKAHIAAA0QARAIAMAAQAOAAAKgLQALgKgBgQQABgQgJgKQgIgKgOAAQgGAAgIADg");
	this.shape_139.setTransform(42.4,260.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AAdA4IgTAIQgJADgFAAQgdAAgPgPQgOgRAAgfQAAgcAVgVQAWgVAdAAQALAAAQAGQATAJAAAKQAAAEgDADIgDAMIAAARQAAAXAEAKIAFAMIAFANQgBAGgEAEQgFAEgHAAQgFAAgNgLgAgQgYQgNANAAARQAAAPAGAJQAGAIALAAQAHAAAHgCQAHgDAFgFQgDgcAAgOIABgJIABgMIgEgBIgEgBQgPAAgMANg");
	this.shape_140.setTransform(28.1,264.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgpA0QgUgOgBgdQAAgdARgWQASgYAeAAQAVAAAOAIQASAIABAUQAAANgPAKQgIAFgUAIIgoASQAGAGAIAEQAIADAKAAQARAAALgHQAKgFAGgBQAMABAAALQABAOgVAKQgRAHgTAAQgcgBgTgOgAgQgdQgIAIgFAQIAcgNQAQgHAJgGQgIgFgNAAQgKAAgJAHg");
	this.shape_141.setTransform(2.1,264.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("Ag+BOQAAgHAEgEQAFgEAGAAIAQACQALACAHAAQASAAAIgLQAJgLABgYQgGAHgIADQgHADgJAAQgYAAgQgQQgPgPABgYQAAghATgVQAWgVAiAAQAMAAAIADQAJACAEAHQAQABAAARQAAAIgDAOQgEAdgBAfQgBAngNASQgQAYgoAAQgvAAAAgTgAgSg2QgKAMAAATQAAAPAFAHQAGAHALAAQAJAAAKgLQAJgLACgLIAFgkIgIgEIgIgBQgUAAgLAOg");
	this.shape_142.setTransform(-11.5,267.4);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AgpA0QgUgOAAgdQAAgdAQgWQASgYAeAAQAVAAAOAIQATAIAAAUQgBANgPAKQgGAFgVAIIgoASQAFAGAJAEQAIADAKAAQAQAAALgHQALgFAGgBQAMABAAALQAAAOgUAKQgRAHgTAAQgcgBgTgOgAgPgdQgJAIgFAQIAcgNQAPgHAKgGQgIgFgNAAQgLAAgHAHg");
	this.shape_143.setTransform(-25.2,264.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AgRA2IgphhQgCgEAAgDQABgHAFgFQAGgEAGAAQAKAAAFAKQAHAOAUA2IARgpIAKgbQAFgJALAAQAHAAAFAEQAGAFAAAHQAAAEgVAsIgZA2QgBAGgEAEQgFAEgFAAQgMAAgFgNg");
	this.shape_144.setTransform(-37.8,264);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AAdA5IgTAIQgJACgFAAQgdAAgPgQQgOgQAAgfQAAgcAVgVQAWgVAdAAQALAAAQAHQATAIAAAKQAAAEgDAEIgDALIAAASQAAAWAEAKIAFANIAFALQgBAHgEAEQgFAEgHAAQgFAAgNgKgAgQgXQgNAMAAAQQAAARAGAIQAGAIALAAQAHAAAHgDQAHgCAGgEQgEgdAAgOIABgJIABgLIgEgCIgDgBQgQAAgMAOg");
	this.shape_145.setTransform(75.4,227.3);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AAeA5IgUAIQgJACgFAAQgdAAgPgQQgOgQAAgfQAAgcAVgVQAWgVAdAAQALAAAQAHQATAIAAAKQAAAEgEAEIgCALIAAASQAAAWAEAKIAFANIAFALQAAAHgFAEQgFAEgGAAQgHAAgLgKgAgQgXQgNAMAAAQQAAARAGAIQAGAIAMAAQAGAAAHgDQAGgCAHgEQgEgdAAgOIABgJIABgLIgEgCIgDgBQgQAAgMAOg");
	this.shape_146.setTransform(38.8,227.3);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("Ag4BeQgNgMAAgoQAAgRACgfIACgxIgBgMIgBgOQAAgSARAAQAGAAAEADQAOgDANgCQANgCAKAAQAfAAASAHQALAFAAAKQAAAHgEAFQgFAGgHgBIgGAAQgTgGgTABIgTABIgWAEIgBAxIAvgFIAdgCQAHAAAGAEQAFAFAAAIQAAANgQACIgdADIgzAEIgBAZQAAAYADADQABACAOAAIAWgBIAXAAIAHgBIAHgBQAHAAAFAFQAGAEAAAIQAAAOgOADQgNACglAAQgoAAgMgKg");
	this.shape_147.setTransform(24.3,224.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AgrBbQgFgEAAgGQAAgGAIgTIAag9QAQgjASgWIgyAAIgbgBQgRgCAAgPQAAgGAFgEQAFgFAHAAIAvABIAtAAIAWAAQAHABAFADQAGACAAAHQAAAGgHAKIgNANQgPARgOAaIgVAtIgKAbQgGARgGAJQgFAHgJAAQgGAAgGgFg");
	this.shape_148.setTransform(-2.1,224.5);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AhTBfQgEgEAAgGIAMgjIgOAAQgHAAgFgFQgDgGAAgFQAAgNANgBIAcAAIASguIgOAAIgPAAQgHAAgEgFQgFgEAAgGQAAgOAPgBIAngCIAIgWQAIgPAHAAQAPAAAAAOQAAAHgFAQIArAAIAJgdQAEgMAKAAQAHAAAFAEQAFAEAAAHQAAADgHAXIALAAQAWAAgBAPQAAALgKAEQgGACgOAAIgFgBIgFAAIgQAvIARAAQAZAAAAAQQAAAHgFADQgEAEgGAAIgSAAIgSAAIgJAjQgEAOgPAAQgNAAAAgMQAAgGAIgfIgwAAIgQAoQgDAKgLAAQgHAAgFgFgAgeAUIAuAAIAQguIgsAAg");
	this.shape_149.setTransform(-20.8,223.6);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AAZA5IgDgaQgDgOAAgLIABgKIAAgLIABgEIAAgGQAAgKgFAAQgLAAgIAOQgKANgGAUIgBALIgBAKIAAALIgBAKQAAAIgFAFQgFAEgHAAQgHAAgGgEQgEgFAAgHIgBgLIAAgLIABghIABgfIAAgMIAAgLQAAgHAFgEQAFgFAHAAQAQAAABAUIAAABQASgSATAAQAXAAAIATQAHANgBAZIAAAJIAAAHQABAKACAPQADAPAAAJQgBAHgFAFQgEAEgHAAQgPAAgCgOg");
	this.shape_150.setTransform(175.2,227.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AhCBTQgQgRAAgiQAAggAPggQAQggAYgVQARgOASAAQAMAAAVAJQAYAKAAALQAAAHgFAFQgFAFgIAAQgDAAgNgHQgMgHgLAAQgKAAgSAYQgcAiAAAoQAAAUAGAHQAHAIASAAQASAAAOgLQAPgLAHgVQgcACgUAJIgIACQgHAAgFgGQgFgFAAgGQAAgTArgGQAZgEAhAAQAIAAAFAEQAFAFAAAGQAAAJgIAFQgIAkgZAWQgaAWghAAQghAAgQgRg");
	this.shape_151.setTransform(-8.6,224.1);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AgtBVQgUgNAAgaQgBgkAYgPQgRgOAAgVQAAgYASgQQASgPAXgBQAdAAAPAQQAMAOAAAYQAAANgEAIQgFAHgKAGQAPAIAHALQAHAMAAATQAAAagUAPQgTANgbAAQgbABgSgMgAgYAVQgIAJAAAPQAAALAMAHQAIAEAMAAQASAAAHgIQAGgHAAgOQAAgMgKgHQgIgHgOgEQgSAIgFAFgAgagoQAAANAXAFQAMgDAFgDQAJgFAAgJQAAgOgGgFQgFgEgMAAQgaAAAAAZg");
	this.shape_152.setTransform(-35.8,224.3);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AhSBfQgFgEgBgGIANgjIgOAAQgHAAgEgFQgEgGgBgFQAAgNAOgBIAcAAIASguIgPAAIgOAAQgHAAgEgFQgFgEAAgGQAAgOAPgBIAngCIAIgWQAIgPAHAAQAPAAAAAOQAAAHgEAQIAqAAIAJgdQADgMALAAQAHAAAFAEQAFAEAAAHQAAADgHAXIALAAQAWAAAAAPQAAALgLAEQgFACgPAAIgFgBIgGAAIgPAvIARAAQAZAAAAAQQAAAHgEADQgFAEgGAAIgSAAIgSAAIgJAjQgEAOgQAAQgMAAAAgMQAAgGAIgfIgxAAIgPAoQgDAKgLAAQgHAAgEgFgAgdAUIAtAAIAQguIgsAAg");
	this.shape_153.setTransform(-54.3,223.6);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AgNALQgGgEAAgHQAAgFAGgGQAGgEAHAAQAJAAAGAEQAFAFAAAGQAAAHgFAEQgGAFgJABQgHgBgGgFg");
	this.shape_154.setTransform(166.9,269.8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AAdBbQgGgLgMgPIgTgZIgQALIgBAgQAAAHgFAFQgFAFgHAAQgSAAABgVIABgdIABgdIABgnIAAgoIAAgNIgBgMQABgHAEgFQAFgEAHAAQAHAAAFAEQAFAFAAAHIABANIAAAMIAAAjIgBAhQARgMAggiQAGgFAHAAQAGAAAFAFQAGAFAAAGQAAAGgFAFQgOAPgUASIAZAgQATAZgBAIQAAAHgEAFQgGAEgHAAQgKAAgEgJg");
	this.shape_155.setTransform(155.3,260.6);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AAeA4IgUAIQgJADgFAAQgdAAgPgPQgOgRAAgfQAAgcAVgVQAWgVAdAAQAMAAAPAGQATAJAAAKQAAAEgEADIgCAMIAAARQAAAXAEAKIAFAMIAFANQAAAGgFAEQgFAEgGAAQgHAAgLgLgAgQgYQgNANAAARQAAAPAGAJQAGAIAMAAQAGAAAHgCQAGgDAHgFQgEgcAAgOIABgJIABgMIgEgBIgDgBQgQAAgMANg");
	this.shape_156.setTransform(128.4,264.1);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AgjBdQgFAEgGAAQgHAAgFgEQgEgEAAgHIAAgJIAAgJIAAiJQAAgJAEgHQAFgJAJAAQANAAAAAPIgBAFIAAAFIAAAvQAJgFAIgDQAJgCAHAAQAcAAASAUQAQATAAAcQAAAcgSAUQgVAUgbAAQgRAAgPgGgAgNgCQgIADgLAHIAAA0QARAIAMAAQAPAAAJgLQAKgKAAgQQAAgQgHgKQgKgKgNAAQgGAAgIADg");
	this.shape_157.setTransform(76.5,260.8);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AAdA4IgUAIQgIADgFAAQgdAAgPgPQgPgRAAgfQAAgcAWgVQAWgVAdAAQAMAAAPAGQASAJAAAKQAAAEgCADIgCAMIgBARQAAAXAEAKIAFAMIAEANQAAAGgEAEQgFAEgHAAQgFAAgNgLgAgRgYQgMANAAARQAAAPAGAJQAGAIALAAQAHAAAHgCQAHgDAFgFQgDgcAAgOIABgJIABgMIgEgBIgEgBQgPAAgNANg");
	this.shape_158.setTransform(62.2,264.1);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AgwBAQgEgFAAgHIAAhPIABgLIAAgLQAAgHAFgFQAEgEAHAAQANAAADAOQAUgQAbAAQAZAAAAAgIgBAIQgBATgPAAQgQAAAAgQIgBgMQgaAEgMAYIAAA8QAAAHgFAFQgFAEgGAAQgIAAgFgEg");
	this.shape_159.setTransform(49.4,264.1);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AgpA0QgVgOAAgdQAAgdARgWQASgYAdAAQAWAAAOAIQASAIAAAUQAAANgOAKQgHAFgVAIIgoASQAFAGAJAEQAIADAKAAQAQAAAMgHQAKgFAGgBQAMABAAALQABAOgVAKQgRAHgTAAQgcgBgTgOgAgQgdQgIAIgEAQIAbgNQAQgHAJgGQgIgFgOAAQgJAAgJAHg");
	this.shape_160.setTransform(12.2,264.1);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AAcBaQgDgLgCgRQgCgSAAgLIAAgJIAAgJIAAgLQgBgFgFgBQgOAAgKAMQgFAGgKARQAAAtgEAJQgFAKgKAAQgHAAgGgEQgFgFAAgHIABgHQABgCABgfIAAhQIAAgEIABgTIgBgMIgBgLQAAgGAFgFQAFgFAHAAQAMAAAEAOQACAGAAAQIAAAYIgBAZQAJgKAKgEQAJgEAMAAQAVAAAJALQAHAKABAQIACAeIACAYIAEAZIABAEQAAAGgFAFQgGAEgHAAQgMABgEgMg");
	this.shape_161.setTransform(-1.6,260.8);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AAdA5IgUAIQgIACgFAAQgdAAgPgQQgOgQAAgfQgBgcAWgVQAWgVAdAAQALAAAQAHQASAIAAAKQAAAEgCAEIgCALIgBASQAAAWAEAKIAFANIAFALQgBAHgEAEQgFAEgHAAQgFAAgNgKgAgRgXQgMAMAAAQQAAARAGAIQAGAIALAAQAHAAAHgDQAHgCAFgEQgDgdAAgOIABgJIABgLIgEgCIgEgBQgPAAgNAOg");
	this.shape_162.setTransform(146.2,227.3);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AAZA5IgEgaQgCgOAAgLIABgKIAAgLIABgEIAAgGQAAgKgFAAQgLAAgJAOQgJANgGAUIgBALIgBAKIgBALIgBAKQABAIgFAFQgFAEgIAAQgHAAgFgEQgEgFAAgHIgBgLIgBgLIACghIACgfIAAgMIgBgLQAAgHAFgEQAFgFAHAAQAQAAABAUIAAABQASgSATAAQAXAAAIATQAHANAAAZIAAAJIAAAHQgBAKADAPQACAPAAAJQAAAHgEAFQgFAEgHAAQgQAAgBgOg");
	this.shape_163.setTransform(121.9,227.1);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AgiBAQgSgHAAgOQAAgMAPAAQAFAAAKAEQALADAGAAQAXAAABgKQAAgGgRgIQgYgLgIgDQgRgNAAgRQAAgYAagJQAPgFAfAAQAMAAAGADQAHAEAAAMQABAWgMAAQgMAAgCgKIgLgBQgcAAAAAIQAAAFAQAIQAZALAJAGQARAMAAAQQAAAVgTALQgQAJgWAAQgQAAgOgFg");
	this.shape_164.setTransform(40.8,227.2);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AgpA1QgVgPABgdQAAgeAQgVQASgXAdAAQAWAAAOAGQATAKgBASQAAAOgPAKQgHAFgUAIIgoATQAGAFAIAEQAIADAKAAQARAAAKgHQALgGAGABQANAAAAALQgBAOgUAKQgRAGgTAAQgcAAgTgNgAgPgcQgJAHgFAPIAcgLQAPgIAKgHQgIgEgOAAQgKAAgHAIg");
	this.shape_165.setTransform(27.7,227.2);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AgSA2IgnhhQgCgEgBgDQAAgHAGgEQAFgFAHAAQAKAAAFAJQAHAQAUA1IARgpIAKgaQAGgKAKAAQAGAAAGAEQAFAFABAGQgBAFgTAsIgaA2QgBAGgEAEQgFAEgFAAQgMAAgGgNg");
	this.shape_166.setTransform(15,227.1);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AgpA1QgVgPABgdQAAgeAQgVQASgXAdAAQAWAAAOAGQATAKgBASQAAAOgPAKQgHAFgUAIIgoATQAGAFAIAEQAIADAKAAQARAAAKgHQALgGAGABQANAAAAALQgBAOgUAKQgRAGgTAAQgcAAgTgNgAgPgcQgJAHgFAPIAcgLQAPgIAKgHQgIgEgOAAQgKAAgHAIg");
	this.shape_167.setTransform(-23.2,227.2);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AA0BdQgFgFAAgGIgBgbIgBgbIAAgMQgSABgcAFIguAJIgCAaIgBAaQgBAFgFAFQgEAFgHgBQgHABgFgFQgFgFAAgGQAAgMACgYIACgkIABgtIABguQAAgHAEgEQAFgFAHABQAHgBAGAFQAEAFAAAGIgBAcIAAAcIgBAMIAAAMIAugJQAbgEATgBIACgsQAAgKAGgNQAGgOAKAAQAGAAAFADQAFAFAAAHIAAAEQgCAJgBAHIgBAKIAAALIgCAiIgBAiIACAbIABAbQAAAGgEAFQgGAEgHAAQgGABgGgFg");
	this.shape_168.setTransform(-39.3,224.1);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("Ag0BeQgEgEAAgHQAAgKAMgEIAUgHQARgHAKgJQAKgJAJgPIgOAEIgKABQgZAAgSgNQgWgPAAgeQgBgjAXgRQAUgQAeABQAYAAAUASQATAUABAcQgBAfgMAcQgMAegWAQQgKAHgTAJQgXAKgJAAQgIABgFgGgAgZg9QgJAKAAARQAAAPAKAJQAKAHAOAAQAHAAAIgEQAIgEALgHIABgOQAAgNgLgMQgMgNgLAAQgRAAgJAJg");
	this.shape_169.setTransform(-67.8,224.5);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AgiBAQgSgHAAgOQAAgMAPAAQAFAAALAEQAKADAGAAQAYAAAAgKQAAgGgSgIQgYgLgGgDQgSgNAAgRQAAgYAagJQAQgFAeAAQAMAAAGADQAHAEABAMQAAAWgMAAQgMAAgCgKIgKgBQgdAAAAAIQAAAFAQAIQAZALAIAGQASAMAAAQQAAAVgTALQgQAJgWAAQgQAAgOgFg");
	this.shape_170.setTransform(143.7,264);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AAdBbQgHgLgLgPIgTgZIgQALIgBAgQAAAHgFAFQgFAFgHAAQgSAAABgVIABgdIABgdIABgnIAAgoIAAgNIgBgMQABgHAEgFQAFgEAHAAQAHAAAFAEQAFAFAAAHIABANIAAAMIAAAjIgBAhQARgMAggiQAGgFAHAAQAGAAAFAFQAGAFAAAGQAAAGgFAFQgOAPgUASIAZAgQATAZgBAIQAAAHgEAFQgGAEgHAAQgKAAgEgJg");
	this.shape_171.setTransform(120.6,260.6);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AgmA2QgSgQgBgbQABgXAQgaQAUgeAZAAQANAAAQAHQAWAJAAALQgBAGgEAEQgEAFgHAAQgFAAgIgFQgHgGgPAAQgIAAgLASQgLASAAAMQAAANAKAHQAIAHANAAQAJAAAMgGQALgGADAAQAHAAAFAFQAEAEABAGQAAAKgVAKQgSAIgNAAQgZAAgTgPg");
	this.shape_172.setTransform(106.8,264);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AAZA4IgDgZQgDgNAAgMIABgKIAAgLIABgEIAAgGQAAgKgFAAQgLAAgIANQgKAOgGATIgBALIgBALIAAALIgBALQAAAHgFAEQgFAFgHAAQgHAAgGgFQgEgEAAgHIgBgKIAAgMIABggIABghIAAgKIAAgMQAAgHAFgFQAFgEAHAAQAQAAABAUIAAAAQASgRATAAQAXAAAIATQAHANgBAaIAAAJIAAAGQABAKACAPQADAPAAAKQgBAGgFAEQgEAFgHAAQgPAAgCgPg");
	this.shape_173.setTransform(80.3,263.9);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AAdBbQgHgLgLgPIgTgZIgQALIgBAgQAAAHgFAFQgFAFgHAAQgRAAAAgVIABgdIABgdIABgnIAAgoIAAgNIgBgMQABgHAEgFQAFgEAHAAQAIAAAEAEQAFAFAAAHIAAANIABAMIgBAjIAAAhQARgMAhgiQAFgFAHAAQAGAAAFAFQAGAFAAAGQAAAGgFAFQgOAPgUASIAZAgQATAZgBAIQAAAHgEAFQgGAEgHAAQgKAAgEgJg");
	this.shape_174.setTransform(-42.6,260.6);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AgmA2QgTgQAAgbQAAgXARgaQAUgeAZAAQAMAAASAHQAUAJABALQgBAGgEAEQgEAFgHAAQgGAAgHgFQgHgGgPAAQgIAAgMASQgKASAAAMQAAANAKAHQAIAHANAAQAJAAAMgGQAMgGACAAQAHAAAFAFQAEAEAAAGQABAKgVAKQgTAIgMAAQgZAAgTgPg");
	this.shape_175.setTransform(-56.5,264);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AgpA1QgVgPAAgdQAAgeARgVQASgXAdAAQAWAAAOAGQASAKAAASQAAAOgOAKQgHAFgVAIIgoATQAFAFAJAEQAIADAKAAQAQAAAMgHQAKgGAGABQANAAAAALQAAAOgVAKQgRAGgTAAQgcAAgTgNgAgQgcQgIAHgEAPIAbgLQAQgIAJgHQgIgEgOAAQgJAAgJAIg");
	this.shape_176.setTransform(193.6,227.2);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("Ag+BOQAAgHAFgEQAEgEAGAAIAQACQAKACAJAAQARAAAIgLQAJgLABgYQgGAHgIADQgIADgIAAQgYAAgQgPQgOgRAAgXQgBgiAVgUQAUgVAjAAQAMAAAIADQAIADAGAFQAPACAAAQQAAAJgDAOQgEAdgBAfQgCAngMASQgPAYgoAAQgwAAAAgTgAgSg3QgKANAAATQAAAPAGAHQAFAGALAAQAJAAAKgKQAKgLABgLIAFglIgIgDIgIgBQgTAAgMANg");
	this.shape_177.setTransform(107.1,230.5);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AAZA5IgDgaQgDgOAAgLIABgKIAAgLIABgEIAAgGQAAgKgFAAQgLAAgIAOQgKANgGAUIgBALIgBAKIAAALIgBAKQAAAIgFAFQgFAEgHAAQgHAAgGgEQgEgFAAgHIgBgLIAAgLIABghIACgfIAAgMIgBgLQAAgHAFgEQAFgFAHAAQAQAAABAUIAAABQASgSATAAQAXAAAIATQAHANgBAZIAAAJIAAAHQABAKACAPQADAPAAAJQgBAHgFAFQgEAEgHAAQgPAAgCgOg");
	this.shape_178.setTransform(94.2,227.1);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AAeA5IgVAIQgIACgFAAQgdAAgPgQQgPgQAAgfQABgcAVgVQAWgVAdAAQAMAAAPAHQASAIABAKQgBAEgDAEIgCALIAAASQAAAWADAKIAGANIAEALQABAHgFAEQgFAEgGAAQgHAAgLgKgAgRgXQgMAMAAAQQAAARAGAIQAGAIAMAAQAGAAAHgDQAGgCAHgEQgEgdAAgOIAAgJIACgLIgEgCIgDgBQgQAAgNAOg");
	this.shape_179.setTransform(60.7,227.3);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AgvBAQgEgFgBgHIAAhPIABgLIAAgLQAAgHAEgFQAEgEAIAAQANAAADAOQAUgQAbAAQAZAAgBAgIAAAIQgBATgQAAQgPAAAAgQIgBgMQgaAEgMAYIAAA8QAAAHgEAFQgFAEgIAAQgHAAgEgEg");
	this.shape_180.setTransform(23.2,227.3);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AA0BdQgFgFAAgGIgBgbIgBgbIAAgMQgSABgcAFIguAJIgCAaIgCAaQAAAFgEAFQgFAFgHgBQgHABgFgFQgFgFAAgGQAAgMACgYIACgkIABgtIABguQAAgHAFgEQAFgFAGABQAHgBAGAFQAEAFAAAGIgBAcIAAAcIgBAMIAAAMIAugJQAagEAUgBIACgsQAAgKAGgNQAGgOAKAAQAGAAAFADQAFAFAAAHIAAAEQgDAJAAAHIgBAKIAAALIgCAiIAAAiIABAbIABAbQAAAGgEAFQgGAEgHAAQgGABgGgFg");
	this.shape_181.setTransform(-17.4,224.1);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("Ag7A/QgNgbAAgoQAAgiASgaQAVghAkAAQAjABATAcQAQAYAAAiQAAA1gTAbQgSAbgkABQgpgBgSgigAgcgtQgLARAAAWQAAAdAGAQQAJAaAYAAQATABAKgTQAKgSAAgkQAAgcgJgPQgJgOgTAAQgSAAgMATg");
	this.shape_182.setTransform(-45.8,224.1);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AgUBfQgXAAAAgOQAAgRAZAAIAGAAIAAhrQgKAIgEAAQgHAAgFgFQgFgFAAgHQAAgGAIgHIAOgLIAPgLQAIgHAJAAQAKAAABANIgBApIgBBKIAAAeIAHAAQAHAAAGAEQAEAFAAAHQAAAGgEAFQgGAEgHAAg");
	this.shape_183.setTransform(-61.3,223.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37,p:{x:-38.6,y:224.5}},{t:this.shape_36},{t:this.shape_35,p:{x:-13.5}},{t:this.shape_34,p:{x:0,y:227.3}},{t:this.shape_33,p:{x:22.5}},{t:this.shape_32},{t:this.shape_31,p:{x:46}},{t:this.shape_30,p:{x:56.4}},{t:this.shape_29,p:{x:69.8,y:227.2}},{t:this.shape_28,p:{x:82.3}},{t:this.shape_27,p:{x:92,y:224.3}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24,p:{x:138.3}},{t:this.shape_23,p:{x:151.7}},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20,p:{x:205.2}},{t:this.shape_19,p:{x:218.3,y:227.2}},{t:this.shape_18,p:{x:230.4,y:225.2}},{t:this.shape_17,p:{x:-72.1,y:264}},{t:this.shape_16},{t:this.shape_15,p:{x:-45,y:261.2}},{t:this.shape_14},{t:this.shape_13,p:{x:-12.5,y:264.1}},{t:this.shape_12,p:{x:3.8}},{t:this.shape_11,p:{x:17.2,y:264.1}},{t:this.shape_10,p:{x:28.9,y:264}},{t:this.shape_9,p:{x:52.4,y:264.2}},{t:this.shape_8},{t:this.shape_7,p:{x:89,y:262}},{t:this.shape_6,p:{x:102.3}},{t:this.shape_5,p:{x:116.1}},{t:this.shape_4,p:{x:140.1,y:262}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:183.8,y:264.1}},{t:this.shape,p:{x:198.6}}]}).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_10,p:{x:-7.5,y:227.2}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52,p:{x:60.1}},{t:this.shape_51},{t:this.shape_50,p:{x:88.8,y:227.3}},{t:this.shape_30,p:{x:101.4}},{t:this.shape_11,p:{x:125.7,y:227.3}},{t:this.shape_9,p:{x:137.8,y:227.3}},{t:this.shape_49,p:{x:153.2}},{t:this.shape_27,p:{x:165.5,y:224.3}},{t:this.shape_48},{t:this.shape_47,p:{x:188.3}},{t:this.shape_46,p:{x:-13.7,y:264.2}},{t:this.shape_45,p:{x:-0.3}},{t:this.shape_4,p:{x:23,y:262}},{t:this.shape_6,p:{x:36.3}},{t:this.shape_12,p:{x:50.1}},{t:this.shape_44,p:{x:74.4}},{t:this.shape_15,p:{x:84,y:261.2}},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape,p:{x:130.7}}]},10).to({state:[{t:this.shape_84,p:{x:-117.2}},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_18,p:{x:-44.6,y:225.2}},{t:this.shape_49,p:{x:-30}},{t:this.shape_80},{t:this.shape_30,p:{x:-0.8}},{t:this.shape_79},{t:this.shape_78,p:{x:37.2,y:230.5}},{t:this.shape_77,p:{x:50.6,y:227.3}},{t:this.shape_46,p:{x:63.7,y:227.3}},{t:this.shape_76},{t:this.shape_75,p:{x:101.8}},{t:this.shape_74,p:{x:115.3}},{t:this.shape_13,p:{x:143.7,y:227.3}},{t:this.shape_73},{t:this.shape_72,p:{x:172.1}},{t:this.shape_7,p:{x:194.7,y:225.2}},{t:this.shape_23,p:{x:208.1}},{t:this.shape_71,p:{x:218.9,y:224.3}},{t:this.shape_17,p:{x:228,y:227.2}},{t:this.shape_70},{t:this.shape_69},{t:this.shape_1,p:{x:-59.8,y:264.1}},{t:this.shape_68,p:{x:-43.5}},{t:this.shape_27,p:{x:-21.7,y:261.2}},{t:this.shape_19,p:{x:-12.5,y:264}},{t:this.shape_67},{t:this.shape_66,p:{x:24,y:264.2}},{t:this.shape_4,p:{x:36.7,y:262}},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63,p:{x:97.8,y:264.2}},{t:this.shape_9,p:{x:111,y:264.2}},{t:this.shape_62},{t:this.shape_15,p:{x:147.1,y:261.2}},{t:this.shape_61,p:{x:157.4}},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58,p:{x:198.2}}]},9).to({state:[{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_31,p:{x:-20.8}},{t:this.shape_101},{t:this.shape_75,p:{x:-3.5}},{t:this.shape_100},{t:this.shape_28,p:{x:32.9}},{t:this.shape_66,p:{x:45.2,y:227.3}},{t:this.shape_24,p:{x:68.7}},{t:this.shape_23,p:{x:82}},{t:this.shape_99},{t:this.shape_98,p:{x:121.3,y:223.9}},{t:this.shape_63,p:{x:135.1,y:227.3}},{t:this.shape_97},{t:this.shape_18,p:{x:161.7,y:225.2}},{t:this.shape_96,p:{x:182.2}},{t:this.shape_95,p:{x:191.6}},{t:this.shape_78,p:{x:-102.4,y:267.3}},{t:this.shape_9,p:{x:-89,y:264.2}},{t:this.shape_94,p:{x:-75.8,y:264.2}},{t:this.shape_37,p:{x:-52.2,y:261.4}},{t:this.shape_93,p:{x:-42.4}},{t:this.shape_71,p:{x:-35,y:261.2}},{t:this.shape_45,p:{x:-25}},{t:this.shape_27,p:{x:-3.8,y:261.2}},{t:this.shape_7,p:{x:5.3,y:262}},{t:this.shape_61,p:{x:29.2}},{t:this.shape_46,p:{x:43.1,y:264.2}},{t:this.shape_44,p:{x:56}},{t:this.shape_15,p:{x:65.5,y:261.2}},{t:this.shape_92},{t:this.shape_91},{t:this.shape_4,p:{x:111.8,y:262}},{t:this.shape_6,p:{x:125.2}},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87,p:{x:189.1}},{t:this.shape_86,p:{x:202.6}},{t:this.shape_85,p:{x:215.1}}]},10).to({state:[{t:this.shape_116,p:{x:-78.1}},{t:this.shape_115},{t:this.shape_114,p:{x:-31.6}},{t:this.shape_94,p:{x:-16.7,y:227.3}},{t:this.shape_113,p:{x:-3.8,y:227.3}},{t:this.shape_27,p:{x:5.7,y:224.3}},{t:this.shape_112,p:{x:15.6}},{t:this.shape_47,p:{x:28.5}},{t:this.shape_28,p:{x:52}},{t:this.shape_23,p:{x:65.4}},{t:this.shape_111},{t:this.shape_95,p:{x:103.4}},{t:this.shape_15,p:{x:113.7,y:224.3}},{t:this.shape_110},{t:this.shape_17,p:{x:134.9,y:227.2}},{t:this.shape_24,p:{x:147}},{t:this.shape_74,p:{x:170.9}},{t:this.shape_109},{t:this.shape_78,p:{x:199.1,y:230.5}},{t:this.shape_63,p:{x:-51.6,y:264.2}},{t:this.shape_37,p:{x:-38.7,y:261.4}},{t:this.shape_18,p:{x:-15.4,y:262}},{t:this.shape_6,p:{x:-2.1}},{t:this.shape_5,p:{x:11.7}},{t:this.shape_7,p:{x:35.7,y:262}},{t:this.shape_9,p:{x:48,y:264.2}},{t:this.shape_46,p:{x:61.1,y:264.2}},{t:this.shape_50,p:{x:74,y:264.1}},{t:this.shape_108},{t:this.shape_107,p:{x:99.9}},{t:this.shape_1,p:{x:116.7,y:264.1}},{t:this.shape_106},{t:this.shape_105},{t:this.shape_4,p:{x:159.1,y:262}},{t:this.shape,p:{x:170.4}}]},10).to({state:[{t:this.shape_116,p:{x:-121.7}},{t:this.shape_136},{t:this.shape_114,p:{x:-75.3}},{t:this.shape_94,p:{x:-60.3,y:227.3}},{t:this.shape_135},{t:this.shape_27,p:{x:-37.9,y:224.3}},{t:this.shape_112,p:{x:-28}},{t:this.shape_47,p:{x:-15.1}},{t:this.shape_4,p:{x:8.4,y:225.2}},{t:this.shape_134,p:{x:21.7}},{t:this.shape_20,p:{x:35.5}},{t:this.shape_10,p:{x:59.5,y:227.2}},{t:this.shape_23,p:{x:73.2}},{t:this.shape_133,p:{x:86.6}},{t:this.shape_52,p:{x:102}},{t:this.shape_72,p:{x:115.4}},{t:this.shape_49,p:{x:140.8}},{t:this.shape_132,p:{x:156}},{t:this.shape_33,p:{x:180}},{t:this.shape_131},{t:this.shape_15,p:{x:203.4,y:224.3}},{t:this.shape_130,p:{x:209.9}},{t:this.shape_31,p:{x:216.7}},{t:this.shape_129},{t:this.shape_74,p:{x:241.4}},{t:this.shape_128},{t:this.shape_77,p:{x:-76,y:264.2}},{t:this.shape_127},{t:this.shape_126},{t:this.shape_66,p:{x:-36.6,y:264.2}},{t:this.shape_113,p:{x:-23.6,y:264.1}},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_63,p:{x:50.9,y:264.2}},{t:this.shape_121},{t:this.shape_68,p:{x:76.6}},{t:this.shape_120},{t:this.shape_9,p:{x:113.1,y:264.2}},{t:this.shape_46,p:{x:126.2,y:264.2}},{t:this.shape_119},{t:this.shape_93,p:{x:159}},{t:this.shape_118},{t:this.shape_45,p:{x:183.3}},{t:this.shape_117,p:{x:195.7}},{t:this.shape,p:{x:207.3}}]},10).to({state:[{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_24,p:{x:51.6}},{t:this.shape_145},{t:this.shape_130,p:{x:85.5}},{t:this.shape_31,p:{x:92.4}},{t:this.shape_18,p:{x:112.7,y:225.2}},{t:this.shape_23,p:{x:126}},{t:this.shape_132,p:{x:139.8}},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_7,p:{x:15.2,y:262}},{t:this.shape_140},{t:this.shape_139},{t:this.shape_93,p:{x:53.1}},{t:this.shape_5,p:{x:63.5}},{t:this.shape_10,p:{x:76.6,y:264}},{t:this.shape_37,p:{x:99.9,y:261.4}},{t:this.shape_15,p:{x:110.2,y:261.2}},{t:this.shape_138},{t:this.shape_137},{t:this.shape_4,p:{x:143.4,y:262}},{t:this.shape_58,p:{x:154.7}}]},10).to({state:[{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_66,p:{x:6.1,y:227.3}},{t:this.shape_49,p:{x:32.3}},{t:this.shape_27,p:{x:44.6,y:224.3}},{t:this.shape_28,p:{x:53.7}},{t:this.shape_134,p:{x:67}},{t:this.shape_24,p:{x:90.8}},{t:this.shape_23,p:{x:104.1}},{t:this.shape_35,p:{x:117.9}},{t:this.shape_1,p:{x:135.1,y:227.3}},{t:this.shape_63,p:{x:161.8,y:227.3}},{t:this.shape_150},{t:this.shape_18,p:{x:-26.6,y:262}},{t:this.shape_6,p:{x:-13.3}},{t:this.shape_86,p:{x:0.5}},{t:this.shape_37,p:{x:24.8,y:261.4}},{t:this.shape_15,p:{x:35.1,y:261.2}},{t:this.shape_34,p:{x:44.5,y:264.1}},{t:this.shape_117,p:{x:56.2}},{t:this.shape_7,p:{x:68.3,y:262}},{t:this.shape_98,p:{x:92.5,y:260.8}},{t:this.shape_9,p:{x:106.3,y:264.2}},{t:this.shape_107,p:{x:120.1}},{t:this.shape_4,p:{x:132.9,y:262}},{t:this.shape_58,p:{x:144.1}}]},10).to({state:[{t:this.shape_84,p:{x:-86.1}},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_130,p:{x:-1.8}},{t:this.shape_96,p:{x:5.5}},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164,p:{x:40.8,y:227.2}},{t:this.shape_49,p:{x:66.5}},{t:this.shape_71,p:{x:78.8,y:224.3}},{t:this.shape_7,p:{x:87.9,y:225.2}},{t:this.shape_23,p:{x:101.2}},{t:this.shape_27,p:{x:112,y:224.3}},{t:this.shape_163},{t:this.shape_162},{t:this.shape_1,p:{x:173.9,y:227.3}},{t:this.shape_15,p:{x:187.1,y:224.3}},{t:this.shape_31,p:{x:193.6}},{t:this.shape_30,p:{x:204}},{t:this.shape_9,p:{x:-51.1,y:264.2}},{t:this.shape_37,p:{x:-38.2,y:261.4}},{t:this.shape_4,p:{x:-14.9,y:262}},{t:this.shape_161,p:{x:-1.6}},{t:this.shape_160},{t:this.shape_29,p:{x:36.5,y:264}},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_17,p:{x:100.7,y:264}},{t:this.shape_6,p:{x:114.3}},{t:this.shape_156,p:{x:128.4}},{t:this.shape_87,p:{x:141.4}},{t:this.shape_155},{t:this.shape_154}]},10).to({state:[{t:this.shape_116,p:{x:-79.4}},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_46,p:{x:-1.6,y:227.3}},{t:this.shape_34,p:{x:11.2,y:227.3}},{t:this.shape_180},{t:this.shape_78,p:{x:35.8,y:230.5}},{t:this.shape_179},{t:this.shape_31,p:{x:70.8}},{t:this.shape_133,p:{x:80.8}},{t:this.shape_178},{t:this.shape_177},{t:this.shape_24,p:{x:130.6}},{t:this.shape_77,p:{x:142.9,y:227.3}},{t:this.shape_18,p:{x:166.4,y:225.2}},{t:this.shape_23,p:{x:179.8}},{t:this.shape_176},{t:this.shape_61,p:{x:-83.4}},{t:this.shape_66,p:{x:-69.4,y:264.2}},{t:this.shape_175},{t:this.shape_174},{t:this.shape_7,p:{x:-19.6,y:262}},{t:this.shape_63,p:{x:-7.3,y:264.2}},{t:this.shape_4,p:{x:16.2,y:262}},{t:this.shape_161,p:{x:29.6}},{t:this.shape_12,p:{x:43.4}},{t:this.shape_164,p:{x:67.4,y:264}},{t:this.shape_173},{t:this.shape_156,p:{x:93.7}},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_6,p:{x:157.4}},{t:this.shape_9,p:{x:170.8,y:264.2}},{t:this.shape_45,p:{x:184.4}},{t:this.shape_85,p:{x:196.2}}]},10).wait(10));

	// text
	this.result = new cjs.Text("", "bold 20px 'Comic Sans MS'", "#FFFFFF");
	this.result.name = "result";
	this.result.textAlign = "center";
	this.result.lineHeight = 30;
	this.result.lineWidth = 305;
	this.result.parent = this;
	this.result.setTransform(61.2,288.9);

	this.timeline.addTween(cjs.Tween.get(this.result).wait(99));

	// Layer 16
	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#0000CC").s().p("Ag6BhQgOgMAAgpQAAgRACghQADgiAAgRIgCgNIgBgOQAAgTASAAQAFAAAFADIAcgFQANgCALAAQAgAAATAHQAMAFAAALQAAAHgFAFQgFAGgHAAIgGgBQgUgFgUAAIgTABIgXAFIgCAyIAxgFIAfgCQAHAAAGAFQAFAEAAAIQAAAOgQACIgfADIg1AFIgBAaQAAAZADADQACACAOAAIAXgBIAYAAIAHgBIAHAAQAIAAAFAEQAGAEAAAJQAAAOgPADQgNACgnAAQgpAAgMgLg");
	this.shape_184.setTransform(239,349.7);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#0000CC").s().p("AgMBcQgFgFAAgHIAAgFIABgGIgBgSIgBgRQAAgRgDgdIgDguIgHAAQgcAAgRgEQgNgDAAgNQgBgHAFgFQAFgGAJAAIAUADIAUABIAYAAIAVgBIAeACIAdABQAHAAAFAFQAGAFAAAHQAAAIgGAFQgFAFgHAAIgggCIgegBIADAzQADAgAAATIABANIABANQAAAJgFAIQgEAKgKAAQgGAAgGgFg");
	this.shape_185.setTransform(221.6,349.7);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#0000CC").s().p("Ag6BhQgOgMAAgpQAAgRACghQADgiAAgRIgCgNIgBgOQAAgTASAAQAFAAAFADIAcgFQANgCALAAQAgAAATAHQAMAFAAALQAAAHgFAFQgFAGgHAAIgGgBQgUgFgUAAIgTABIgXAFIgCAyIAxgFIAfgCQAHAAAGAFQAFAEAAAIQAAAOgQACIgfADIg1AFIgBAaQAAAZADADQACACAOAAIAXgBIAYAAIAHgBIAHAAQAIAAAFAEQAGAEAAAJQAAAOgPADQgNACgnAAQgpAAgMgLg");
	this.shape_186.setTransform(204.7,349.7);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#0000CC").s().p("AhDBMIADgoQADg2AAhEQAAgHAFgFQAFgFAHAAQAJAAAEAFQAGAFAAAHQgBBEgDA4IgDAgQAfgBAugOIAGgBQAIAAAFAGQAEAFAAAHQAAAKgLAFQgPAHggAFQgbAFgSAAQggAAAAgcg");
	this.shape_187.setTransform(189.4,350.1);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#0000CC").s().p("Ag4BgQgGgEAAgHIAAgjQABgUACgmQADgnAAgTQAAghASABIAMgCIASAAQAZAAAVAQQAZASAAAaQgBAggZATQgXAQgfAAIgKAAIgBA6QAAAHgFAEQgFAFgGAAQgIAAgEgFgAgXgxIgCAsIAIABQATAAAOgKQAOgKgBgQQAAgLgNgIQgNgIgNAAIgHAAIgGAAIAAASg");
	this.shape_188.setTransform(175,349.4);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#0000CC").s().p("ABFBSIgIgeQgFgXgHgqIgUA1IgHAXQgFAOgFAJQgGAMgMAAQgLgBgHgOIgHgXQgKgggIgkIgQA+IgFAcQgFASgOAAQgIABgFgHQgFgEAAgIQAAgUAJgeIAOgwIAIgnQAFgbAHgJQAHgJAKAAQALAAAGAMQAFALAGAiQAFAhALAlQANglANgsIAIgdQAGgTAPABQANgBAHAWQADAIADAXQAIA1ALAnQALAnAAADQAAAIgGAFQgFAFgIgBQgOABgGgVg");
	this.shape_189.setTransform(156.8,350.1);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#0000CC").s().p("AhDBOQgcgXAAgkQAAgqAbgkQAfgoAsAAQAtAAAWAVQAWAUAAAoQAAArgZAiQgcApguAAQgmAAgagWgAgoglQgTAaAAAeQAAAVARANQAPANAYAAQAbAAATgbQARgZAAggQAAgagMgLQgLgKgeAAQgbABgUAbg");
	this.shape_190.setTransform(134.7,350);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#0000CC").s().p("Ag4BNQgTgUAAgbQAAgpAlgtQAgglAgAAIAKAAIAIABQAGgFAHAAQANAAADAPQADAKAAAPQAAAGgEAFQgFAHgJAAQgMAAgFgMQgDgGgCgBQgCgBgIAAQgQAAgUAZQgdAiAAAeQAAAOAJAKQAJAKANAAQAMAAANgHIATgMQAKgHAFAAQAIAAAFAGQAFAFAAAHQAAAHgHAGQgjAdgjAAQgcAAgUgVg");
	this.shape_191.setTransform(116.4,349.7);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#0000CC").s().p("AhYBiQgGgGAAgGIABgQIABgPIABgWIAAgXIAAgXIgBgZIgBgWIgBgXQAAgHAGgHQAHgFAIAAQAJAAAMAQQA4BSA4AzIAAgUIgBhSIgBgPIgBgNQAAgSASAAQAVAAgBBAIAAAUIgBBPIgBAUQgDARgQgBQgJABgLgLQgxgrg9hPIAAAoIAAAeIABAeQAAAmgTAAQgJgBgFgFg");
	this.shape_192.setTransform(97.7,349.9);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#0000CC").s().p("Ag8BcQgEgFgBgHQAAgHAGgFQAFgGAJAAIAXgBIAAg5QABgiACggIgcACQgIgBgFgEQgEgFgBgIQABgHAEgFQAFgFAGAAIAmgBQAYAAAlAFQAPADABAOQAAAJgHAFQgEADgHAAIghgDQgCAXAAAmIAAA5IAjAAQAHAAAFAEQAGAGAAAHQAAAHgGAFQgFAFgIAAIgVABIgWAAQgIAAgRACIgaACQgIAAgFgFg");
	this.shape_193.setTransform(79.9,350);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#0000CC").s().p("Ag6BhQgOgMAAgpQAAgRACghQADgiAAgRIgCgNIgBgOQAAgTASAAQAFAAAFADIAcgFQANgCALAAQAgAAATAHQAMAFAAALQAAAHgFAFQgFAGgHAAIgGgBQgUgFgUAAIgTABIgXAFIgCAyIAxgFIAfgCQAHAAAGAFQAFAEAAAIQAAAOgQACIgfADIg1AFIgBAaQAAAZADADQACACAOAAIAXgBIAYAAIAHgBIAHAAQAIAAAFAEQAGAEAAAJQAAAOgPADQgNACgnAAQgpAAgMgLg");
	this.shape_194.setTransform(20.6,349.7);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#0000CC").s().p("AgLBcQgHgFABgHIAAgFIABgGIgBgSIgBgRQAAgRgCgdIgEguIgGAAQgdAAgQgEQgOgDgBgNQABgHAEgFQAFgGAJAAIAUADIAVABIAWAAIAXgBIAdACIAcABQAIAAAGAFQAEAFAAAHQAAAIgEAFQgGAFgIAAIgegCIgfgBIAEAzQACAgAAATIABANIAAANQAAAJgDAIQgGAKgJAAQgGAAgFgFg");
	this.shape_195.setTransform(3.2,349.7);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#0000CC").s().p("Ag6BhQgOgMAAgpQAAgRACghQADgiAAgRIgCgNIgBgOQAAgTASAAQAFAAAFADIAcgFQANgCALAAQAgAAATAHQAMAFAAALQAAAHgFAFQgFAGgHAAIgGgBQgUgFgUAAIgTABIgXAFIgCAyIAxgFIAfgCQAHAAAGAFQAFAEAAAIQAAAOgQACIgfADIg1AFIgBAaQAAAZADADQACACAOAAIAXgBIAYAAIAHgBIAHAAQAIAAAFAEQAGAEAAAJQAAAOgPADQgNACgnAAQgpAAgMgLg");
	this.shape_196.setTransform(-13.7,349.7);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#0000CC").s().p("AhDBMIADgoQADg2AAhEQAAgHAFgFQAFgFAHAAQAIAAAGAFQAEAFAAAHQABBEgEA4IgCAgQAegBAugOIAGgBQAHAAAFAGQAFAFAAAHQAAAKgLAFQgPAHggAFQgbAFgTAAQgfAAAAgcg");
	this.shape_197.setTransform(-29,350.1);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#0000CC").s().p("Ag4BgQgFgEgBgHIAAgjQAAgUADgmQACgnABgTQAAghASABIAMgCIASAAQAYAAAXAQQAXASAAAaQABAggaATQgXAQgfAAIgKAAIgBA6QAAAHgEAEQgGAFgHAAQgHAAgEgFgAgXgxIgCAsIAIABQATAAANgKQAPgKAAgQQAAgLgOgIQgMgIgOAAIgIAAIgEAAIgBASg");
	this.shape_198.setTransform(-43.4,349.4);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#0000CC").s().p("ABEBSIgHgeQgGgXgGgqIgTA1IgIAXQgFAOgFAJQgGAMgLAAQgMgBgHgOIgHgXQgKgggIgkIgQA+IgEAcQgGASgNAAQgKABgFgHQgEgEAAgIQAAgUAJgeIAOgwIAIgnQAFgbAHgJQAGgJAKAAQAMAAAFAMQAGALAFAiQAGAhALAlQAOglAMgsIAIgdQAGgTAOABQAPgBAGAWQADAIADAXQAHA1ALAnQAMAnAAADQAAAIgGAFQgFAFgIgBQgNABgIgVg");
	this.shape_199.setTransform(-61.6,350.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#0000CC").s().p("AhDBOQgcgXAAgkQAAgqAbgkQAegoAuAAQAsAAAWAVQAWAUAAAoQAAArgZAiQgdApgsAAQgnAAgagWgAgoglQgTAaAAAeQAAAVAQANQAQANAZAAQAaAAATgbQARgZAAggQAAgagMgLQgMgKgcAAQgcABgUAbg");
	this.shape_200.setTransform(-83.7,350);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#0000CC").s().p("Ag4BNQgTgUAAgbQAAgpAlgtQAgglAgAAIAKAAIAIABQAGgFAHAAQANAAADAPQADAKAAAPQAAAGgEAFQgFAHgJAAQgMAAgFgMQgDgGgCgBQgCgBgIAAQgQAAgUAZQgdAiAAAeQAAAOAJAKQAJAKANAAQAMAAANgHIATgMQAKgHAFAAQAIAAAFAGQAFAFAAAHQAAAHgHAGQgjAdgjAAQgcAAgUgVg");
	this.shape_201.setTransform(-102,349.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184}]}).wait(99));

	// buttons
	this.btn_wrong = new lib.quiz_btn();
	this.btn_wrong.parent = this;
	this.btn_wrong.setTransform(-118,330.1,0.875,1);
	new cjs.ButtonHelper(this.btn_wrong, 0, 1, 2, false, new lib.quiz_btn(), 3);

	this.btn_correct = new lib.quiz_btn();
	this.btn_correct.parent = this;
	this.btn_correct.setTransform(56.5,330.1,1.148,1);
	new cjs.ButtonHelper(this.btn_correct, 0, 1, 2, false, new lib.quiz_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_correct,p:{scaleX:1.148,x:56.5,y:330.1}},{t:this.btn_wrong,p:{scaleX:0.875,x:-118,y:330.1}}]}).to({state:[{t:this.btn_correct,p:{scaleX:1.165,x:54.4,y:328.9}},{t:this.btn_wrong,p:{scaleX:0.926,x:-124.1,y:328.9}}]},10).to({state:[{t:this.btn_correct,p:{scaleX:0.915,x:-118.6,y:334.9}},{t:this.btn_wrong,p:{scaleX:1.119,x:61.4,y:330.1}}]},9).to({state:[{t:this.btn_correct,p:{scaleX:0.858,x:-116.2,y:332.6}},{t:this.btn_wrong,p:{scaleX:1.085,x:64.5,y:334.9}}]},10).to({state:[{t:this.btn_correct,p:{scaleX:1.057,x:65.3,y:332.6}},{t:this.btn_wrong,p:{scaleX:0.881,x:-113,y:334.9}}]},10).to({state:[{t:this.btn_correct,p:{scaleX:0.915,x:-120.7,y:328.9}},{t:this.btn_wrong,p:{scaleX:1.136,x:55.5,y:328.9}}]},10).to({state:[{t:this.btn_correct,p:{scaleX:0.841,x:-112.2,y:330.1}},{t:this.btn_wrong,p:{scaleX:1.011,x:70.8,y:334.9}}]},10).to({state:[{t:this.btn_correct,p:{scaleX:0.915,x:-120.7,y:328.9}},{t:this.btn_wrong,p:{scaleX:1.136,x:54.5,y:328.9}}]},10).to({state:[{t:this.btn_correct,p:{scaleX:0.915,x:-120.7,y:328.9}},{t:this.btn_wrong,p:{scaleX:1.136,x:56.5,y:328.9}}]},10).to({state:[{t:this.btn_correct,p:{scaleX:0.915,x:-120.7,y:328.6}},{t:this.btn_wrong,p:{scaleX:1.136,x:54.5,y:328.6}}]},10).wait(10));

	// Layer 6
	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#07C1D6").s().p("AgHA8QgDgEAAgEQAAgEADgDQADgDAEAAQAEAAAEAFQADAFAAAEQAAAEgDADQgDACgEAAQgEAAgEgFgAgFAiQgDgCAAgFIAAgJIAAgJIAAgfIAAggQAAgFADgCQADgDADAAQAEAAADADQADACAAAFIAABRQAAAFgDACQgCADgFAAQgDAAgDgDg");
	this.shape_202.setTransform(-98.1,118.6);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#07C1D6").s().p("AgyA7QgEgEAAgEQABgGAFgIIAIgLIAagiQAOgTAOgMIgSAAIggAAIgCABIgCAAQgFgBgDgCQgEgDAAgFQAAgLAQAAIAQABIAQABIARgBIASAAQAXAAAAAKQABAHgLAGIgLAIQgNAJgSAXIgaAmIAagBIAbgBIAPABQAJABABAIQAAAFgEADQgDACgFABIgHgBIgGAAIgjABIgjAAQgGAAgDgCg");
	this.shape_203.setTransform(-105.4,119);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#07C1D6").s().p("AgkA5QgEgEABgEQgBgEAEgDQAEgEAEAAIAQgBIgBgjQAAgUACgUIgRABQgFAAgDgDQgEgDABgFQgBgEAEgDQADgDAEAAIAXgBQANAAAYADQAKACAAAJQgBAFgDADQgDACgEAAIgVgCIgBAlIAAAjIAWAAQAEAAADADQAEAEAAAEQgBAEgDADQgDADgEAAIgOABIgNAAIgPABIgQACQgFAAgDgDg");
	this.shape_204.setTransform(-115.4,119);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#07C1D6").s().p("AgfA1QgUgQAAgmIAAgLIABgLIAAgJIAAgJQAAgGACgGQADgHAGAAQAEAAADADQAEADAAAEIAAAOIAAANIgBALIAAALQAAALADAKQADAMAGAFQAEACAMABQAUAAAHgkQADgRAAghQAAgEADgFQAEgFAGAAQAFAAADAEQACADAAADQAAAfgDASQgEAZgNASQgGAHgIAGQgKAGgJAAQgUAAgKgIg");
	this.shape_205.setTransform(-125.7,119.1);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#07C1D6").s().p("AATAwQgNAEgLAAQgZAAgTgTQgSgTAAgWQAAgdAVgTQAWgTAcAAQAeAAAQAWQANATAAAeQAAAXgXASIAOAMIAJAHQAFAFABAFQgBAEgDADQgDADgFAAQgGAAgggcgAgBAfQgLgLAAgHQgBgFAEgDQADgDAFAAQAEAAAEAFQAHAIAJAHQASgLAAgPQAAgWgIgNQgLgPgSAAQgUAAgOANQgPAOgBATQAAAOANAMQAMANAQAAIAEAAIAAAAg");
	this.shape_206.setTransform(-138.3,120.4);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AgdAkIAAg2IAAgHIAAgIQAAgIAHAAQAIAAAAANQAOgPASAAQAGAAADAFQADAFAAAKIAAAFQAAAKgHAAQgHAAAAgIIAAgFIgBgHQgMACgGAFQgHAFgFAKIAAAqQAAAIgIAAQgGAAAAgIg");
	this.shape_207.setTransform(211.3,183.7);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AgaAiQgMgKAAgRQAAgUAKgOQALgPARAAQAMAAAJAFQAKAFAAAMQAAAHgJAGQgEADgNAFIgcAPQAEAGAGADQAHAEAIgBQAFAAAHgBQAJgDADgFQADgDADAAQADAAACABQACACAAAEQAAAIgOAGQgMAGgLAAQgRAAgLgJgAgPgUQgHAHgDAOIAYgKQANgHAGgFQgGgHgMABQgJAAgGAHg");
	this.shape_208.setTransform(203,183.7);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AAFAWIgDgSIgCgQIgGAOIgMAgQgBADgCABQgCAFgFABQgHAAgFgYQgDgMgCgUIgCgMIgCgLQAAgEADgCQACgCADAAQAHAAAAAHIACALIABALIAFAiQAJgWAJggQADgIAFAAQAGAAADAJIAEAcIAGAeIAGgVIAKgqQABgEAGAAQADAAACABQACADAAADIAAADQgGAagKAfQgCAIgFAHQgDAEgFAAQgJAAgEgWg");
	this.shape_209.setTransform(193,183.8);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AgVAsQgMgFAAgIQAAgDACgCQADgCADAAQACAAAEADQACACAHABIAJABQAFAAAFgBQAHgDAAgFQAAgKgOgEIgIgCQgKgCgEgDQgHgDAAgJQAAgRAQgHIAOgFIAOgFIAHgBQAEAAACACQACACAAAEIABAHIABAGQAAAEgCACQgCACgEAAQgEAAgCgDIgCgIIgSAFQgLAFAAAIIAEABQARADAJAGQANAHAAAPQAAANgLAHQgJAFgNAAQgLAAgJgDg");
	this.shape_210.setTransform(183.4,183.3);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AATAmIgCgRIgBgRIAAgGIABgIQgBgQgGAAQgJgBgHALQgGAJgFAOIgBAHIAAAIIAAAHIABAHQAAADgCADQgCACgEAAQgDAAgCgCQgDgDAAgDIAAgHIgBgHIACgWIABgWIAAgHIAAgHQAAgEACgCQACgDADABQAHAAABAKIAAAJQANgSANAAQANABAEAKQAEAIABAOIAAAIIgBAGQAAAHACAKIABARQAAAEgBACQgDABgDAAQgHAAgBgHg");
	this.shape_211.setTransform(175.7,183.6);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AAZAoIgFgGIgOAGQgFACgDAAQgSAAgIgKQgJgKAAgUQABgRANgOQANgNAQAAQAIAAAIADQALAFAAAGIgCAEIgBAJIgBARQAAAJACAGIAEAOIACAEIAAABQAAADgCACQgCACgCAAQgCAAgEgDgAgMgTQgJAKAAAMQAAANAEAGQAFAHAJAAQAHAAAEgDIAIgGQgCgUAAgKIABgHIABgJIgFgCIgEAAQgLAAgIAJg");
	this.shape_212.setTransform(167.2,183.7);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("AgEA3QgDgCAAgDIAAgJIABgJIgCgtIgRgBQgHgBAAgHQAAgDACgDQACgCADAAIARACIgBgLIAAgKQAAgDACgCQADgCADAAQAGAAACAMIAAAGIAAAFIAAAEIAKgBIALABQAFACAAAFQAAAEgCADQgDABgDAAIgDAAIgFAAIgKABIABAtIAAAEIAAAEQAAARgIAAQgCAAgCgCg");
	this.shape_213.setTransform(154.5,182.4);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AgVAiQgMgKAAgQQAAgQALgRQAMgSANAAQAIAAAKAEQALAEAAAHQAAADgBACQgCADgDAAQgBAAAAgBQgBAAgBAAQAAAAAAAAQgBgBAAAAIgEgDQgEgDgLAAQgHAAgHAOQgHANAAAJQAAAKAHAGQAGAFAJAAQAFAAAFgCIAJgFIAEgCQADAAACADQACACAAADQAAAGgMAFQgLAFgHAAQgPAAgKgKg");
	this.shape_214.setTransform(146.7,183.7);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("AgaAiQgMgKAAgRQAAgUAKgOQALgPARAAQAMAAAJAFQAKAFAAAMQAAAHgJAGQgEADgNAFIgcAPQAEAGAGADQAHAEAIgBQAFAAAHgBQAJgDADgFQADgDADAAQADAAACABQACACAAAEQAAAIgOAGQgMAGgLAAQgRAAgLgJgAgPgUQgHAHgDAOIAYgKQANgHAGgFQgGgHgMABQgJAAgGAHg");
	this.shape_215.setTransform(138.3,183.7);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("AgdAkIAAg2IAAgHIAAgIQAAgIAHAAQAIAAAAANQAOgPASAAQAGAAADAFQADAFAAAKIAAAFQAAAKgHAAQgHAAAAgIIAAgFIgBgHQgMACgGAFQgHAFgFAKIAAAqQAAAIgIAAQgGAAAAgIg");
	this.shape_216.setTransform(130.2,183.7);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("AgdAkIAAg2IAAgHIAAgIQAAgIAHAAQAIAAAAANQAOgPASAAQAGAAADAFQADAFAAAKIAAAFQAAAKgHAAQgHAAAAgIIAAgFIgBgHQgMACgGAFQgHAFgFAKIAAAqQAAAIgIAAQgGAAAAgIg");
	this.shape_217.setTransform(122.5,183.7);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("AgXAhQgKgLgBgSQAAgQAJgOQALgQATAAQAPAAAIAPQAHALgBAQQAAARgJAMQgKAOgPAAQgNAAgKgKgAgNgPQgFAJAAAKQAAAMAGAGQAFAFAHAAQAHAAAGgGQAHgGAAgMQABgdgRAAQgLAAgGALg");
	this.shape_218.setTransform(114.1,183.7);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AgVAiQgMgKAAgQQAAgQALgRQAMgSANAAQAIAAAKAEQALAEAAAHQAAADgBACQgCADgDAAQgBAAAAgBQgBAAgBAAQAAAAAAAAQgBgBAAAAIgEgDQgEgDgLAAQgHAAgHAOQgHANAAAJQAAAKAHAGQAGAFAJAAQAFAAAFgCIAJgFIAEgCQADAAACADQACACAAADQAAAGgMAFQgLAFgHAAQgPAAgKgKg");
	this.shape_219.setTransform(105.9,183.7);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("AgaAiQgMgKAAgRQAAgUAKgOQALgPARAAQAMAAAJAFQAKAFAAAMQAAAHgJAGQgEADgNAFIgcAPQAEAGAGADQAHAEAIgBQAFAAAHgBQAJgDADgFQADgDADAAQADAAACABQACACAAAEQAAAIgOAGQgMAGgLAAQgRAAgLgJgAgPgUQgHAHgDAOIAYgKQANgHAGgFQgGgHgMABQgJAAgGAHg");
	this.shape_220.setTransform(92.8,183.7);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("AAVA7QgCgHgBgMIgBgSIAAgGIAAgGQAAgOgHAAQgKAAgHAIQgEAEgHANQAAAegDAGQgCAFgEAAQgEgBgCgCQgCgCAAgDIAAgDIABgMIAAgLIABg5IAAgMIgBgIIAAgIQAAgDACgCQACgCADAAQAHAAABAGIABAPIAAARIgBARIAAAGQAHgIAHgEQAGgEAJgBQANAAAEAJQAEAGAAANIABAOIACARIACAQIAAACQAAAEgCACQgCACgDAAQgGAAgCgGg");
	this.shape_221.setTransform(83.7,181.6);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("AgEA3QgCgCgBgDIAAgJIABgJIgCgtIgRgBQgHgBAAgHQAAgDACgDQACgCADAAIARACIgBgLIAAgKQAAgDACgCQADgCADAAQAGAAACAMIAAAGIAAAFIAAAEIAKgBIALABQAFACAAAFQAAAEgDADQgBABgEAAIgEAAIgEAAIgKABIABAtIAAAEIAAAEQAAARgIAAQgCAAgCgCg");
	this.shape_222.setTransform(75.2,182.4);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000000").s().p("AATAmIgCgRIgBgRIAAgGIABgIQgBgQgGAAQgIgBgIALQgHAJgEAOIAAAHIgBAIIABAHIAAAHQAAADgCADQgDACgDAAQgDAAgCgCQgDgDAAgDIAAgHIgBgHIACgWIABgWIgBgHIAAgHQABgEACgCQACgDADABQAHAAABAKIAAAJQAOgSAMAAQANABAEAKQAEAIABAOIAAAIIgBAGQAAAHACAKIACARQAAAEgCACQgDABgDAAQgHAAgBgHg");
	this.shape_223.setTransform(62.6,183.6);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("AgXAhQgKgLgBgSQAAgQAJgOQALgQATAAQAPAAAIAPQAHALgBAQQAAARgJAMQgKAOgPAAQgNAAgKgKgAgNgPQgFAJAAAKQAAAMAGAGQAFAFAHAAQAHAAAGgGQAHgGAAgMQABgdgRAAQgLAAgGALg");
	this.shape_224.setTransform(53.9,183.7);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AAVA8IgMgTIgNgTIgOALIgBAXQAAAEgCACQgCACgEAAQgIAAAAgLIABgTIABgTIABgbIAAgbIAAgIIgBgIQAAgEACgCQADgCADAAQADAAACACQADACAAAEIAAAIIAAAJIAAAZIAAAaQAKgIAJgJIARgRQADgDADAAQADAAACACQADADAAADQAAADgCACIgYAXIARAYQAMAQAAAFQAAADgDACQgCACgDAAQgFAAgCgEg");
	this.shape_225.setTransform(41.2,181.4);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("AgVAiQgMgKAAgQQAAgQALgRQAMgSANAAQAIAAAKAEQALAEAAAHQAAADgBACQgCADgDAAQgBAAAAgBQgBAAgBAAQAAAAAAAAQgBgBAAAAIgEgDQgEgDgLAAQgHAAgHAOQgHANAAAJQAAAKAHAGQAGAFAJAAQAFAAAFgCIAJgFIAEgCQADAAACADQACACAAADQAAAGgMAFQgLAFgHAAQgPAAgKgKg");
	this.shape_226.setTransform(32.3,183.7);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("AgHA4QgCgCAAgDIAAgOIgBgOIABgSIABgSQAAgDACgDQACgCADAAQADAAACACQACADAAADIgBASIAAASIAAAOIAAAOQABADgDACQgCADgDAAQgDAAgCgDgAgEgqQgDgDAAgEQAAgDADgDQADgDADAAQADAAADADQADADAAADQAAAEgDADQgDACgDAAQgDAAgDgCg");
	this.shape_227.setTransform(26.1,181.7);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000000").s().p("AgIA5IABgdIABgcIAAgcIABgcQAAgIAHAAQAHAAAAAIIgBAcIAAAcIgBAnIgBASQgBAHgFABQgIgBAAgHg");
	this.shape_228.setTransform(21.5,181.5);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000000").s().p("AgfAwQgMgMAAgQQAAgaAXgcQASgXASAAIAHAAIAFABQADgDAEAAQAGAAABAGQACAHgBAJQABADgCADQgDADgDAAQgFAAgDgGQgCgFgCgBQgCgBgGAAQgLAAgNASQgTAWAAAVQAAAJAHAIQAGAIAKgBQAGABAJgFQAEgCAKgHQAEgEADAAQADABACADQADACAAADQAAADgEADQgUASgUAAQgRAAgKgMg");
	this.shape_229.setTransform(14.7,181.7);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_230.setTransform(-1.9,187.3);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FF0000").s().p("AgaAiQgMgKAAgRQAAgUAKgOQALgPARAAQAMAAAJAFQAKAFAAAMQAAAHgJAGQgEADgNAFIgcAPQAEAGAGADQAHAEAIgBQAFAAAHgBQAJgDADgFQADgDADAAQADAAACABQACACAAAEQAAAIgOAGQgMAGgLAAQgRAAgLgJgAgPgUQgHAHgDAOIAYgKQANgHAGgFQgGgHgMABQgJAAgGAHg");
	this.shape_231.setTransform(-8.2,183.7);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FF0000").s().p("AgEA3QgDgCAAgDIAAgJIABgJIgCgtIgRgBQgHgBAAgHQAAgDACgDQACgCADAAIARACIgBgLIAAgKQAAgDACgCQADgCADAAQAGAAACAMIAAAGIAAAFIAAAEIAKgBIALABQAFACAAAFQAAAEgCADQgDABgDAAIgDAAIgFAAIgKABIABAtIAAAEIAAAEQAAARgIAAQgCAAgCgCg");
	this.shape_232.setTransform(-16.5,182.4);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FF0000").s().p("AgaAiQgMgKAAgRQAAgUAKgOQALgPARAAQAMAAAJAFQAKAFAAAMQAAAHgJAGQgEADgNAFIgcAPQAEAGAGADQAHAEAIgBQAFAAAHgBQAJgDADgFQADgDADAAQADAAACABQACACAAAEQAAAIgOAGQgMAGgLAAQgRAAgLgJgAgPgUQgHAHgDAOIAYgKQANgHAGgFQgGgHgMABQgJAAgGAHg");
	this.shape_233.setTransform(-24.5,183.7);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FF0000").s().p("AgIA5IABgdIABgcIAAgcIAAgcQAAgIAHAAQAIAAAAAIIAAAcIgBAcIgBAnIAAASQgCAHgFABQgIgBAAgHg");
	this.shape_234.setTransform(-31.2,181.5);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FF0000").s().p("AgeA/QgCgCAAgDIAAgfIAAgfIgBgfIgBgQQAAgFACgEQACgFAFAAQADAAACADQACACAAADIAAACIgBAFIANgHQAGgCAFAAQAQAAAIAOQAGALAAATQAAAPgKALQgJAMgQAAQgHAAgJgDIgBAmQAAADgCACQgCADgDAAQgEAAgCgDgAgHgpIgKAJIABAkQAIADAIAAQAKAAAFgHQAEgFAAgKQAAgPgDgHQgEgHgHAAQgGAAgGADg");
	this.shape_235.setTransform(-37.6,185.5);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FF0000").s().p("AgEAuQgCgDAAgDIgCgcIgCgaQAAgJgCgFQgFADgGAFIgJALIgEAFIgBANIgBANIABAHIABAGQAAADgDACQgCACgDAAQgJABAAgVIABgNIAAgOIAAgMIgBgNQAAgRAIAAQADAAADADQACACAAADIAAAFIgBAEIAAAJQAEgIAIgIQAIgGAGAAQAMAAAEAMQAEgGAGgDQAGgCAIAAQANAAAEAOIAEAWIAFAsQAAADgCACQgCACgEAAQgGAAgBgHIgDgYIgDgXIgCgLQgDgHgDAAQgDAAgIAFQgHAFgDADIABAOIACAUIACAUQAAADgDADQgCACgDAAQgCAAgDgCg");
	this.shape_236.setTransform(-48.1,183.7);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FF0000").s().p("AgXAhQgKgLgBgSQAAgQAJgOQALgQATAAQAPAAAIAPQAHALgBAQQAAARgJAMQgKAOgPAAQgNAAgKgKgAgNgPQgFAJAAAKQAAAMAGAGQAFAFAHAAQAHAAAGgGQAHgGAAgMQABgdgRAAQgLAAgGALg");
	this.shape_237.setTransform(-58.7,183.7);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FF0000").s().p("AgVAiQgMgKAAgQQAAgQALgRQAMgSANAAQAIAAAKAEQALAEAAAHQAAADgBACQgCADgDAAQgBAAAAgBQgBAAgBAAQAAAAAAAAQgBgBAAAAIgEgDQgEgDgLAAQgHAAgHAOQgHANAAAJQAAAKAHAGQAGAFAJAAQAFAAAFgCIAJgFIAEgCQADAAACADQACACAAADQAAAGgMAFQgLAFgHAAQgPAAgKgKg");
	this.shape_238.setTransform(-66.9,183.7);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FF0000").s().p("AATAmIgCgRIgBgRIAAgGIAAgIQABgQgHAAQgJgBgGALQgIAJgDAOIgBAHIgBAIIABAHIAAAHQAAADgCADQgCACgDAAQgEAAgCgCQgDgDABgDIgBgHIAAgHIABgWIABgWIgBgHIAAgHQAAgEACgCQADgDADABQAIAAAAAKIABAJQANgSAMAAQAMABAGAKQADAIAAAOIAAAIIAAAGQAAAHACAKIABARQAAAEgCACQgCABgDAAQgHAAgBgHg");
	this.shape_239.setTransform(-75,183.6);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FF0000").s().p("AgHA4QgCgCAAgDIAAgOIAAgOIABgSIAAgSQAAgDACgDQADgCADAAQACAAACACQADADAAADIgBASIgBASIAAAOIABAOQAAADgDACQgCADgCAAQgEAAgCgDgAgEgqQgDgDAAgEQAAgDADgDQADgDACAAQAEAAADADQADADgBADQABAEgDADQgDACgEAAQgCAAgDgCg");
	this.shape_240.setTransform(-81.5,181.7);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("AgdAkIAAg2IAAgHIAAgIQAAgIAHAAQAIAAAAANQAOgPASAAQAGAAADAFQADAFAAAKIAAAFQAAAKgHAAQgHAAAAgIIAAgFIgBgHQgMACgGAFQgHAFgFAKIAAAqQAAAIgIAAQgGAAAAgIg");
	this.shape_241.setTransform(233,159.4);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AgXAhQgKgLgBgSQAAgQAJgOQALgQATAAQAPAAAIAPQAHALgBAQQAAARgJAMQgKAOgPAAQgNAAgKgKgAgNgPQgFAJAAAKQAAAMAGAGQAFAFAHAAQAHAAAGgGQAHgGAAgMQABgdgRAAQgLAAgGALg");
	this.shape_242.setTransform(224.6,159.4);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FF0000").s().p("AgaAiQgMgKAAgRQAAgUAKgOQALgPARAAQAMAAAJAFQAKAFAAAMQAAAHgJAGQgEADgNAFIgcAPQAEAGAGADQAHAEAIgBQAFAAAHgBQAJgDADgFQADgDADAAQADAAACABQACACAAAEQAAAIgOAGQgMAGgLAAQgRAAgLgJgAgPgUQgHAHgDAOIAYgKQANgHAGgFQgGgHgMABQgJAAgGAHg");
	this.shape_243.setTransform(211.5,159.4);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FF0000").s().p("AgEA3QgDgCAAgDIAAgJIABgJIgCgtIgRgBQgHgBAAgHQAAgDACgDQADgCACAAIARACIgBgLIAAgKQAAgDACgCQADgCADAAQAGAAABAMIAAAGIAAAFIAAAEIALgBIALABQAFACAAAFQAAAEgCADQgCABgEAAIgDAAIgFAAIgKABIABAtIAAAEIAAAEQAAARgIAAQgCAAgCgCg");
	this.shape_244.setTransform(203.2,158.1);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FF0000").s().p("AgaAiQgMgKAAgRQAAgUAKgOQALgPARAAQAMAAAJAFQAKAFAAAMQAAAHgJAGQgEADgNAFIgcAPQAEAGAGADQAHAEAIgBQAFAAAHgBQAJgDADgFQADgDADAAQADAAACABQACACAAAEQAAAIgOAGQgMAGgLAAQgRAAgLgJgAgPgUQgHAHgDAOIAYgKQANgHAGgFQgGgHgMABQgJAAgGAHg");
	this.shape_245.setTransform(195.2,159.4);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FF0000").s().p("AgIA5IABgdIABgcIAAgcIAAgcQABgIAGAAQAIAAAAAIIAAAcIgBAcIgBAnIAAASQgBAHgGABQgIgBAAgHg");
	this.shape_246.setTransform(188.5,157.2);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FF0000").s().p("AgeA/QgCgCAAgDIAAgfIAAgfIgBgfIgBgQQAAgFACgEQACgFAFAAQADAAACADQACACAAADIAAACIgBAFIANgHQAGgCAFAAQAQAAAIAOQAGALAAATQAAAPgKALQgJAMgQAAQgHAAgJgDIgBAmQAAADgCACQgCADgDAAQgEAAgCgDgAgHgpIgKAJIABAkQAIADAIAAQAKAAAFgHQAEgFAAgKQAAgPgDgHQgEgHgHAAQgGAAgGADg");
	this.shape_247.setTransform(182.1,161.2);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FF0000").s().p("AgEAuQgCgDAAgDIgCgcIgCgaQAAgJgCgFQgFADgGAFIgJALIgEAFIgBANIgBANIABAHIABAGQAAADgDACQgCACgDAAQgJABAAgVIABgNIAAgOIAAgMIgBgNQAAgRAIAAQADAAADADQACACAAADIAAAFIgBAEIAAAJQAEgIAIgIQAIgGAGAAQAMAAAEAMQAEgGAGgDQAGgCAIAAQANAAAEAOIAEAWIAFAsQAAADgCACQgCACgEAAQgGAAgBgHIgDgYIgDgXIgCgLQgDgHgDAAQgDAAgIAFQgHAFgDADIABAOIACAUIACAUQAAADgDADQgCACgDAAQgCAAgDgCg");
	this.shape_248.setTransform(171.6,159.4);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FF0000").s().p("AgXAhQgKgLgBgSQAAgQAJgOQALgQATAAQAPAAAIAPQAHALgBAQQAAARgJAMQgKAOgPAAQgNAAgKgKgAgNgPQgFAJAAAKQAAAMAGAGQAFAFAHAAQAHAAAGgGQAHgGAAgMQABgdgRAAQgLAAgGALg");
	this.shape_249.setTransform(161,159.4);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FF0000").s().p("AgVAiQgMgKAAgQQAAgQALgRQAMgSANAAQAIAAAKAEQALAEAAAHQAAADgBACQgCADgDAAQgBAAAAgBQgBAAgBAAQAAAAAAAAQgBgBAAAAIgEgDQgEgDgLAAQgHAAgHAOQgHANAAAJQAAAKAHAGQAGAFAJAAQAFAAAFgCIAJgFIAEgCQADAAACADQACACAAADQAAAGgMAFQgLAFgHAAQgPAAgKgKg");
	this.shape_250.setTransform(152.8,159.4);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000000").s().p("AgVAsQgMgFAAgIQAAgDACgCQADgCADAAQACAAAEADQACACAHABIAJABQAFAAAFgBQAHgDAAgFQAAgKgOgEIgIgCQgKgCgEgDQgHgDAAgJQAAgRAQgHIAOgFIAOgFIAHgBQAEAAACACQACACAAAEIABAHIABAGQAAAEgCACQgCACgEAAQgEAAgCgDIgCgIIgSAFQgLAFAAAIIAEABQARADAJAGQANAHAAAPQAAANgLAHQgJAFgNAAQgLAAgJgDg");
	this.shape_251.setTransform(139.8,159);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#000000").s().p("AgHA4QgCgCAAgDIAAgOIgBgOIABgSIABgSQAAgDACgDQACgCADAAQADAAADACQABADAAADIAAASIgBASIAAAOIABAOQgBADgCACQgCADgDAAQgDAAgCgDgAgEgqQgDgDAAgEQAAgDADgDQADgDADAAQADAAADADQADADAAADQAAAEgDADQgDACgDAAQgDAAgDgCg");
	this.shape_252.setTransform(134,157.4);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#000000").s().p("AgaAiQgMgKAAgRQAAgUAKgOQALgPARAAQAMAAAJAFQAKAFAAAMQAAAHgJAGQgEADgNAFIgcAPQAEAGAGADQAHAEAIgBQAFAAAHgBQAJgDADgFQADgDADAAQADAAACABQACACAAAEQAAAIgOAGQgMAGgLAAQgRAAgLgJgAgPgUQgHAHgDAOIAYgKQANgHAGgFQgGgHgMABQgJAAgGAHg");
	this.shape_253.setTransform(122.6,159.4);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#000000").s().p("AgVAiQgMgKAAgQQAAgQALgRQAMgSANAAQAIAAAKAEQALAEAAAHQAAADgBACQgCADgDAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBgBAAAAIgEgDQgEgDgLAAQgHAAgHAOQgHANAAAJQAAAKAHAGQAGAFAJAAQAFAAAFgCIAJgFIAEgCQADAAACADQACACAAADQAAAGgMAFQgLAFgHAAQgPAAgKgKg");
	this.shape_254.setTransform(114,159.4);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#000000").s().p("AATAmIgCgRIgBgRIAAgGIABgIQgBgQgGAAQgIgBgIAKQgHAKgEAOIgBAHIAAAIIAAAHIABAHQAAADgCADQgDACgDAAQgDAAgCgCQgDgDAAgDIAAgHIgBgHIACgWIABgWIgBgHIAAgHQABgEACgCQACgDADABQAHAAABAKIAAAJQAOgSAMAAQANABAEAKQAEAIABAOIAAAIIgBAGQAAAHACAKIACARQAAAEgCACQgDACgDAAQgHgBgBgHg");
	this.shape_255.setTransform(105.8,159.3);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#000000").s().p("AgaAiQgMgKAAgRQAAgUAKgOQALgPARAAQAMAAAJAFQAKAFAAAMQAAAHgJAGQgEADgNAFIgcAPQAEAGAGADQAHAEAIgBQAFAAAHgBQAJgDADgFQADgDADAAQADAAACABQACACAAAEQAAAIgOAGQgMAGgLAAQgRAAgLgJgAgPgUQgHAHgDAOIAYgKQANgHAGgFQgGgHgMABQgJAAgGAHg");
	this.shape_256.setTransform(97.2,159.4);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#000000").s().p("AgEA3QgDgCAAgDIAAgJIABgJIgCgtIgRgBQgHgBAAgHQAAgDACgDQADgCACAAIARACIgBgLIAAgKQAAgDACgCQADgCADAAQAGAAABAMIAAAGIAAAFIAAAEIALgBIALABQAFACAAAFQAAAEgCADQgCABgEAAIgDAAIgFAAIgKABIABAtIAAAEIAAAEQAAARgIAAQgCAAgCgCg");
	this.shape_257.setTransform(88.9,158.1);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#000000").s().p("AATAmIgCgRIgBgRIAAgGIAAgIQABgQgHAAQgJgBgGAKQgIAKgDAOIgBAHIgBAIIABAHIAAAHQAAADgCADQgCACgDAAQgEAAgCgCQgDgDABgDIgBgHIAAgHIABgWIABgWIgBgHIAAgHQAAgEACgCQADgDADABQAIAAAAAKIABAJQANgSAMAAQAMABAGAKQADAIAAAOIAAAIIAAAGQAAAHACAKIABARQAAAEgCACQgCACgDAAQgHgBgBgHg");
	this.shape_258.setTransform(81.1,159.3);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#000000").s().p("AgaAiQgMgKAAgRQAAgUAKgOQALgPARAAQAMAAAJAFQAKAFAAAMQAAAHgJAGQgEADgNAFIgcAPQAEAGAGADQAHAEAIgBQAFAAAHgBQAJgDADgFQADgDADAAQADAAACABQACACAAAEQAAAIgOAGQgMAGgLAAQgRAAgLgJgAgPgUQgHAHgDAOIAYgKQANgHAGgFQgGgHgMABQgJAAgGAHg");
	this.shape_259.setTransform(72.5,159.4);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#000000").s().p("AgVAsQgMgFAAgIQAAgDACgCQADgCADAAQACAAAEADQACACAHABIAJABQAFAAAFgBQAHgDAAgFQAAgKgOgEIgIgCQgKgCgEgDQgHgDAAgJQAAgRAQgHIAOgFIAOgFIAHgBQAEAAACACQACACAAAEIABAHIABAGQAAAEgCACQgCACgEAAQgEAAgCgDIgCgIIgSAFQgLAFAAAIIAEABQARADAJAGQANAHAAAPQAAANgLAHQgJAFgNAAQgLAAgJgDg");
	this.shape_260.setTransform(63.9,159);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#000000").s().p("AgaAiQgMgKAAgRQAAgUAKgOQALgPARAAQAMAAAJAFQAKAFAAAMQAAAHgJAGQgEADgNAFIgcAPQAEAGAGADQAHAEAIgBQAFAAAHgBQAJgDADgFQADgDADAAQADAAACABQACACAAAEQAAAIgOAGQgMAGgLAAQgRAAgLgJgAgPgUQgHAHgDAOIAYgKQANgHAGgFQgGgHgMABQgJAAgGAHg");
	this.shape_261.setTransform(51.2,159.4);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#000000").s().p("AAVA7QgCgHgBgMIgBgSIAAgGIAAgGQAAgOgHAAQgKAAgHAIQgEAEgHANQAAAegDAGQgCAFgEAAQgEgBgCgCQgCgCAAgDIAAgDIABgMIAAgLIABg5IAAgNIgBgHIAAgIQAAgDACgCQACgCADAAQAHAAABAGIABAPIAAARIgBARIAAAGQAHgIAHgEQAGgEAJgBQANAAAEAJQAEAGAAANIABAOIACARIACAQIAAACQAAAEgCACQgCACgDAAQgGAAgCgGg");
	this.shape_262.setTransform(42.1,157.3);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#000000").s().p("AgEA3QgCgCgBgDIAAgJIABgJIgBgtIgSgBQgHgBAAgHQAAgDACgDQADgCACAAIARACIAAgLIAAgKQAAgDABgCQADgCADAAQAGAAACAMIAAAGIAAAFIAAAEIALgBIAKABQAFACAAAFQAAAEgDADQgCABgDAAIgEAAIgDAAIgLABIACAtIAAAEIAAAEQAAARgJAAQgCAAgCgCg");
	this.shape_263.setTransform(33.6,158.1);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#000000").s().p("AgdAkIAAg2IAAgHIAAgIQAAgIAHAAQAIAAAAANQAOgPASAAQAGAAADAFQADAFAAAKIAAAFQAAAKgHAAQgHAAAAgIIAAgFIgBgHQgMACgGAFQgHAFgFAKIAAAqQAAAIgIAAQgGAAAAgIg");
	this.shape_264.setTransform(21.4,159.4);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#000000").s().p("AgaAiQgMgKAAgRQAAgUAKgOQALgPARAAQAMAAAJAFQAKAFAAAMQAAAHgJAGQgEADgNAFIgcAPQAEAGAGADQAHAEAIgBQAFAAAHgBQAJgDADgFQADgDADAAQADAAACABQACACAAAEQAAAIgOAGQgMAGgLAAQgRAAgLgJgAgPgUQgHAHgDAOIAYgKQANgHAGgFQgGgHgMABQgJAAgGAHg");
	this.shape_265.setTransform(13.1,159.4);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#000000").s().p("AAVA7QgCgHgBgMIgBgSIAAgGIAAgGQAAgOgHAAQgKAAgHAIQgEAEgHANQAAAegDAGQgCAFgEAAQgEgBgCgCQgCgCAAgDIAAgDIABgMIAAgLIABg5IAAgNIgBgHIAAgIQAAgDACgCQACgCADAAQAHAAABAGIABAPIAAARIgBARIAAAGQAHgIAHgEQAGgEAJgBQANAAAEAJQAEAGAAANIABAOIACARIACAQIAAACQAAAEgCACQgCACgDAAQgGAAgCgGg");
	this.shape_266.setTransform(4.1,157.3);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#000000").s().p("AgEA3QgCgCgBgDIAAgJIABgJIgCgtIgRgBQgHgBAAgHQAAgDACgDQACgCADAAIARACIgBgLIAAgKQAAgDACgCQADgCADAAQAGAAACAMIAAAGIAAAFIAAAEIAKgBIALABQAFACAAAFQAAAEgDADQgBABgEAAIgEAAIgEAAIgKABIABAtIAAAEIAAAEQAAARgIAAQgCAAgCgCg");
	this.shape_267.setTransform(-4.4,158.1);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#000000").s().p("AgaAiQgMgKAAgRQAAgUAKgOQALgPARAAQAMAAAJAFQAKAFAAAMQAAAHgJAGQgEADgNAFIgcAPQAEAGAGADQAHAEAIgBQAFAAAHgBQAJgDADgFQADgDADAAQADAAACABQACACAAAEQAAAIgOAGQgMAGgLAAQgRAAgLgJgAgPgUQgHAHgDAOIAYgKQANgHAGgFQgGgHgMABQgJAAgGAHg");
	this.shape_268.setTransform(-12.4,159.4);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#000000").s().p("AAVA7QgCgHgBgMIgBgSIAAgGIAAgGQAAgOgHAAQgKAAgHAIQgEAEgHANQAAAegDAGQgCAFgEAAQgEgBgCgCQgCgCAAgDIAAgDIABgMIAAgLIABg5IAAgNIgBgHIAAgIQAAgDACgCQACgCADAAQAHAAABAGIABAPIAAARIgBARIAAAGQAHgIAHgEQAGgEAJgBQANAAAEAJQAEAGAAANIABAOIACARIACAQIAAACQAAAEgCACQgCACgDAAQgGAAgCgGg");
	this.shape_269.setTransform(-21.5,157.3);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#000000").s().p("AAFAWIgDgSIgCgQIgGAOIgMAgQgBADgCABQgCAFgFABQgHAAgFgYQgDgMgCgUIgDgLIgBgMQAAgEADgCQACgCADAAQAHAAAAAHIACALIABALIAFAjQAJgXAJggQADgIAFAAQAGAAADAJIAEAcIAGAeIAGgVIAKgqQABgEAFAAQAEAAACABQACADAAADIAAADQgGAagKAfQgCAIgFAHQgDAEgEAAQgKAAgEgWg");
	this.shape_270.setTransform(-31.6,159.5);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#000000").s().p("AgaAiQgMgKAAgRQAAgUAKgOQALgPARAAQAMAAAJAFQAKAFAAAMQAAAHgJAGQgEADgNAFIgcAPQAEAGAGADQAHAEAIgBQAFAAAHgBQAJgDADgFQADgDADAAQADAAACABQACACAAAEQAAAIgOAGQgMAGgLAAQgRAAgLgJgAgPgUQgHAHgDAOIAYgKQANgHAGgFQgGgHgMABQgJAAgGAHg");
	this.shape_271.setTransform(-46.2,159.4);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#000000").s().p("AgEA3QgCgCgBgDIAAgJIABgJIgCgtIgRgBQgHgBAAgHQAAgDACgDQACgCADAAIARACIAAgLIAAgKQAAgDABgCQADgCADAAQAGAAACAMIAAAGIAAAFIAAAEIALgBIAKABQAFACAAAFQAAAEgDADQgCABgDAAIgEAAIgDAAIgLABIACAtIAAAEIAAAEQAAARgJAAQgCAAgCgCg");
	this.shape_272.setTransform(-54.5,158.1);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#000000").s().p("AAZAoIgFgGIgOAGQgFACgDAAQgSAAgJgKQgHgKAAgUQAAgRAMgOQAOgNAQAAQAIAAAIADQAKAFAAAGIgBAEIgCAJIAAARQAAAJABAGIAGAOIABAEIABABQAAADgCACQgCACgEAAQgBAAgEgDgAgNgTQgIAKAAAMQAAANAFAGQAEAHAJAAQAGAAAGgDIAIgGQgDgUAAgKIAAgHIACgJIgFgCIgDAAQgLAAgKAJg");
	this.shape_273.setTransform(-62.3,159.4);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#000000").s().p("AgVAiQgMgKAAgQQAAgQALgRQAMgSANAAQAIAAAKAEQALAEAAAHQAAADgBACQgCADgDAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBgBAAAAIgEgDQgEgDgLAAQgHAAgHAOQgHANAAAJQAAAKAHAGQAGAFAJAAQAFAAAFgCIAJgFIAEgCQADAAACADQACACAAADQAAAGgMAFQgLAFgHAAQgPAAgKgKg");
	this.shape_274.setTransform(-70.5,159.4);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#000000").s().p("AgHA4QgCgCAAgDIAAgOIAAgOIABgSIAAgSQAAgDACgDQADgCADAAQACAAACACQACADAAADIgBASIAAASIAAAOIAAAOQAAADgCACQgCADgDAAQgCAAgDgDgAgEgqQgDgDAAgEQAAgDADgDQADgDADAAQADAAADADQACADABADQgBAEgCADQgDACgDAAQgDAAgDgCg");
	this.shape_275.setTransform(-76.7,157.4);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#000000").s().p("AgbA1QgLgKAAgSQAAgVALgMQALgMARAAQAJAAAFADIAHAFQABggABgMQACgHAGAAQAHAAAAAIIgDAvIgBAXQAAAaACANIAAABQAAAEgCACQgCACgDAAQgEAAgDgIQgFAFgGACQgHACgFAAQgRAAgKgLgAgSABQgGAIAAAQQAAAKAHAHQAHAIAKAAQAGAAAEgDIAIgGIADgDIAAgNIAAgJIAAgKQgDgGgFgCQgFgEgHAAQgMABgHAGg");
	this.shape_276.setTransform(-83.9,157.2);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#000000").s().p("AATAmIgCgRIgBgRIAAgGIAAgIQABgQgHAAQgJgBgGAKQgIAKgDAOIgBAHIgBAIIABAHIAAAHQAAADgCADQgCACgDAAQgEAAgCgCQgDgDABgDIgBgHIAAgHIABgWIABgWIgBgHIAAgHQAAgEACgCQADgDADABQAIAAAAAKIABAJQANgSAMAAQAMABAGAKQADAIAAAOIAAAIIAAAGQAAAHACAKIABARQAAAEgCACQgCACgDAAQgHgBgBgHg");
	this.shape_277.setTransform(-92.6,159.3);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000000").s().p("AgiA5QgCgCAAgDQAAgEACgCQACgCAEAAIARgCIABgPIgBgNIAAgNQAAgRACgbIgKAAIgKABQgEAAgCgDQgCgCAAgDQAAgIAGAAIAYgBQAPAAAXADQAIABgBAIQAAADgCADQgCABgEAAIgMgBIgNgBIgCAqIAAAOIABANIgBAOIAZgBQAEAAACADQACACAAADQAAAEgCACQgCACgEAAIgNABIgNAAIgPABIgPACQgEAAgCgDg");
	this.shape_278.setTransform(-101.3,157.6);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f().s("#000000").ss(2,1,1).p("AqniVIVPAAIAAErI1PAAg");
	this.shape_279.setTransform(61,299.6);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("#000000").ss(3,1,1).p("AJs1QQByAABzACIUBAHIgbAAQgKAAgKAAQolgCokgBMgwrAADIAAAOEghRgUkMAAAAp1MBCbAAAMAAAgqY");
	this.shape_280.setTransform(65.5,267);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#66CCFF").s().p("ArOONIAAksIVPAAIAAEsgEgg/gDHIAArFMBB/AAAIAALFg");
	this.shape_281.setTransform(64.9,223.7);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#00CCFF").s().p("EghNAVOMAAAgp1IAAgNIAAgIIAAgOMAwrgADIRJADIAUAAIATAAMAAAAqYgArQHZIVPAAIAAksI1PAAgEghBgJ7MBCAAAAIAArFMhCAAAAg");
	this.shape_282.setTransform(65.1,267.3);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#0000FF").s().p("AADgCIgFgOIAFAAIAAAIIAAAMIAAANg");
	this.shape_283.setTransform(-147.8,134.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202}]}).wait(99));

	// btn
	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#214DF8").s().p("AgvA4QgMgXAAgkQAAgfAPgYQARgbAdAAQAcAAAQAZQAOAUAAAeQAAAwgPAXQgQAYgdAAQggABgPgegAgcgrQgKAQAAAWQAAAjAKASQAJARATAAQAWAAAKgaQAHgSgBgaQAAgegJgPQgIgOgTAAQgSAAgMAVg");
	this.shape_284.setTransform(-26.5,415.5);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#214DF8").s().p("AADBUIgVAAIgKgBQgGgCABgGQAAgLAQAAIAFAAIAFAAIgBgPIgBgPQAAgOADgbQACgbAAgOQgPALgDAAQgFAAgDgDQgDgEAAgEQAAgFAJgHIAQgNQAJgKAIAAQAIAAgBAJIAAAHIgBAHIABALIAAALQAAAMgCAYQgDAYAAAMIABAPIABAOIALAAQAFAAADADQACADAAAFQAAAEgCADQgDADgFAAg");
	this.shape_285.setTransform(-37.9,415.2);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#214DF8").s().p("AgsBZQgDgCAAgEIABgEQAIgXAYgrQAWgrAIgXQAOgmAIAAQAEAAADADQADADAAAEIgCAFIgMAeQgHAUgNAaIgXArIgTArQgDAGgGAAQgEAAgDgDg");
	this.shape_286.setTransform(-48.6,415.3);

	this.score = new cjs.Text("0", "22px 'Comic Sans MS'", "#214DF8");
	this.score.name = "score";
	this.score.textAlign = "center";
	this.score.lineHeight = 33;
	this.score.lineWidth = 44;
	this.score.parent = this;
	this.score.setTransform(-69.5,408.9);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#214DF8").s().p("AgFAzQgDgDgBgFIAAgGIgBgGQAAgEAEgDQADgDAEAAQALAAABAWQAAAFgDADQgEADgEAAQgFAAgCgDgAgHgaQgEgEAAgEIAAgEIgBgEQABgFADgDQADgDAFAAQALAAAAATQAAAEgEAEQgCADgFAAQgEAAgDgDg");
	this.shape_287.setTransform(-87.7,416.9);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#214DF8").s().p("AgkAvQgRgOAAgYQAAgbAOgTQAPgVAYAAQARAAALAHQAOAHAAAPQAAALgMAJQgGAEgQAHIgpATQAGAJAJAFQAJAEALAAQAHAAAKgDQANgDAEgGQAEgGAEAAQADAAAEADQACADAAAEQABAMgUAIQgRAIgPAAQgXAAgPgMgAgVgcQgKAKgEAUIAigPQASgKAIgHQgJgIgQAAQgNAAgIAKg");
	this.shape_288.setTransform(-96.7,418.2);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#214DF8").s().p("AgpAyIAAhLIABgLIAAgLQAAgKAJAAQALAAAAASQAUgUAZAAQAIAAAFAGQAEAHAAANIAAAHQgBAOgKAAQgJAAAAgKIgBgIIAAgJQgRACgJAIQgKAGgGAOIAAA7QAAAKgKAAQgKAAAAgKg");
	this.shape_289.setTransform(-107.9,418.3);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#214DF8").s().p("AggAuQgOgPAAgaQgBgWAMgTQAPgWAbAAQAVAAALAUQAJAQgBAWQAAAXgMAQQgOAUgWAAQgSAAgNgNgAgTgVQgHAMAAAOQAAAQAJAJQAHAHAJAAQALAAAIgIQAJgJAAgQQACgogYAAQgPAAgJAPg");
	this.shape_290.setTransform(-119.4,418.4);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#214DF8").s().p("AgeAvQgPgOAAgXQAAgUAOgYQAQgaATAAQALAAANAGQAQAGAAAIQAAAFgCADQgDADgEAAQgDAAgCgCIgFgDQgGgGgPAAQgKAAgKAUQgKASAAAMQAAAPAKAHQAJAIANAAQAGAAAHgDIANgHIAFgBQAEAAACACQADADAAAFQAAAIgQAHQgPAHgJgBQgVAAgPgNg");
	this.shape_291.setTransform(-130.6,418.3);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#214DF8").s().p("AgrBKQgUgJAAgQQAAgFADgCQADgDAFAAQAFAAAEAGQAGAIAEADQAJAGASAAQAPAAAOgHQATgKAAgQQAAgOgQgHQgNgHgSgBQgRAAgMgGQgPgJAAgQQAAgTAWgQQAVgPAVAAQAKAAANAEQASAEAAAIQAAAJgKAAIgPgCQgLgDgGAAQgQABgLAIQgMAIAAAMQAAAJAQADQAGACAQABQAYACAOANQANAMAAASQAAAZgYAQQgUANgbAAQgTAAgRgIg");
	this.shape_292.setTransform(-143.8,416);

	this.btn_next = new lib.goNext();
	this.btn_next.parent = this;
	this.btn_next.setTransform(266.8,441.5);
	new cjs.ButtonHelper(this.btn_next, 0, 1, 2, false, new lib.goNext(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_next},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.score},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284}]}).wait(99));

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
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Quiz2
	this.instance = new lib.practicequiz2();
	this.instance.parent = this;
	this.instance.setTransform(486,53.3,1,1,0,0,0,276.8,145.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Main
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.timeline.addTween(cjs.Tween.get(this.UI).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(312.7,201.6,503.8,394.4);
// library properties:
lib.properties = {
	id: 'C006293D3AC3E048893AF965DF3DC358',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/right.mp3", id:"right"},
		{src:"sounds/right_answer.mp3", id:"right_answer"},
		{src:"sounds/High_Screaming_Gtr.mp3", id:"High_Screaming_Gtr"},
		{src:"sounds/wrong.mp3", id:"wrong"},
		{src:"sounds/bgmTest.mp3", id:"bgmTest"},
		{src:"sounds/wrong_answer.mp3", id:"wrong_answer"}
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
an.compositions['C006293D3AC3E048893AF965DF3DC358'] = {
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