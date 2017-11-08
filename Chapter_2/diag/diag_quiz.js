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
		bgm.volume = 0.5;
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
	this.initialize(mode,startPosition,loop,{firstSet:0,secondSet:10});

	// timeline functions:
	this.frame_0 = function() {
		var scoreNum =0;
		var rSound; 
		var wSound; 
		
		this.btn_correct.addEventListener("click", correct.bind(this));
		this.btn_wrong.addEventListener("click", wrong.bind(this));
		
		function correct(){
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
		 
		}
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_18 = function() {
		this.stop();
		
		this.btn_next.addEventListener("click", goNext.bind(this));
		
		function goNext(){
		
			window.open ("diag_quiz1.html","_self");
		 
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(9).call(this.frame_18).wait(1));

	// Layer 15
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AHrAHIAAl7AytANIIcAAAqMl0IAAF7AqMF1IAAloIc6AA");
	this.shape.setTransform(61.7,268.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AI4ANIijmBAI4ANIJ2AAAytANIIcAAAqMl0IAAF7AqMF1IAAloITEAA");
	this.shape_1.setTransform(61.7,268.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},10).wait(9));

	// text
	this.result = new cjs.Text("", "bold 20px 'Comic Sans MS'", "#FFFFFF");
	this.result.name = "result";
	this.result.textAlign = "center";
	this.result.lineHeight = 30;
	this.result.lineWidth = 305;
	this.result.parent = this;
	this.result.setTransform(61.2,325.9);

	this.timeline.addTween(cjs.Tween.get(this.result).wait(19));

	// Layer 16
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000CC").s().p("Ag6BhQgOgMAAgpQAAgRACghQADgiAAgRIgCgNIgBgOQAAgTASAAQAFAAAFADIAcgFQANgCALAAQAgAAATAHQAMAFAAALQAAAHgFAFQgFAGgHAAIgGgBQgUgFgUAAIgTABIgXAFIgCAyIAxgFIAfgCQAHAAAGAFQAFAEAAAIQAAAOgQACIgfADIg1AFIgBAaQAAAZADADQACACAOAAIAXgBIAYAAIAHgBIAHAAQAIAAAFAEQAGAEAAAJQAAAOgPADQgNACgnAAQgpAAgMgLg");
	this.shape_2.setTransform(229.6,382.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0000CC").s().p("Ag4BNQgTgUAAgbQAAgpAlgtQAgglAgAAIAKAAIAIABQAGgFAHAAQANAAADAPQADAKAAAPQAAAGgEAFQgFAHgJAAQgMAAgFgMQgDgGgCgBQgCgBgIAAQgQAAgUAZQgdAiAAAeQAAAOAJAKQAJAKANAAQAMAAANgHIATgMQAKgHAFAAQAIAAAFAGQAFAFAAAHQAAAHgHAGQgjAdgjAAQgcAAgUgVg");
	this.shape_3.setTransform(213.2,382.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0000CC").s().p("AhZBiQgEgFAAgIIABgPIABgPIAAgWIABgXIgBgYIAAgXIgCgXIgCgXQAAgHAHgHQAHgFAIgBQAKABALAQQA5BSA4AzIAAgUIgBhSIgCgPIgCgNQABgSASAAQAUAAABBAIAAAUIgBBQIgDATQgCAQgQABQgJgBgLgJQgxgtg8hOIgBAoIABAeIAAAeQAAAmgSgBQgKABgGgGg");
	this.shape_4.setTransform(194.5,382.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0000CC").s().p("Ag6BhQgOgMAAgpQAAgRACghQADgiAAgRIgCgNIgBgOQAAgTASAAQAFAAAFADIAcgFQANgCALAAQAgAAATAHQAMAFAAALQAAAHgFAFQgFAGgHAAIgGgBQgUgFgUAAIgTABIgXAFIgCAyIAxgFIAfgCQAHAAAGAFQAFAEAAAIQAAAOgQACIgfADIg1AFIgBAaQAAAZADADQACACAOAAIAXgBIAYAAIAHgBIAHAAQAIAAAFAEQAGAEAAAJQAAAOgPADQgNACgnAAQgpAAgMgLg");
	this.shape_5.setTransform(176.1,382.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0000CC").s().p("AgMBcQgFgFAAgHIAAgFIABgGIgBgSIgBgRQAAgRgDgdIgDguIgHAAQgcAAgRgEQgOgDABgNQgBgHAFgFQAFgGAJAAIAUADIAUABIAYAAIAVgBIAeACIAdABQAHAAAFAFQAGAFAAAHQAAAIgGAFQgFAFgHAAIgggCIgegBIADAzQADAgAAATIABANIABANQAAAJgFAIQgEAKgKAAQgGAAgGgFg");
	this.shape_6.setTransform(158.7,382.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0000CC").s().p("AhEBTQgQgMAAgQQAAgIAGgFQAEgFAIAAQAMAAAFALQAIAQAaAAQAUAAAUgKQAWgJAAgMQgBgQgNgFQgJgEgbgBQgWAAgRgHQgYgKAAgUQABgZAagUQAagVAeAAQANAAASAGQAWAHAAAJQABAHgFAFQgFAFgIAAQgGAAgMgCQgMgDgGAAQgQABgOAHQgPAIAAAJQAAAFAFADQAEADAJACIAfACQAdACAQANQASAPAAAbQAAAgglARQgcANgkAAQggAAgTgOg");
	this.shape_7.setTransform(140.5,383.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0000CC").s().p("Ag8BcQgEgFAAgHQgBgHAGgFQAFgGAJABIAYgCIAAg6QAAghACggIgbABQgIAAgGgEQgEgGAAgHQAAgHAEgFQAFgEAHgBIAlgBQAYAAAmAFQAOADAAAPQAAAIgFAEQgFAFgHAAIgggEQgCAXAAAmIAAA5IAigBQAHABAGAFQAEAEAAAIQAAAHgEAFQgGAFgIAAIgVAAIgWAAQgIAAgRADIgZACQgIAAgGgFg");
	this.shape_8.setTransform(124.3,383);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0000CC").s().p("AAlBJIgRgZIgQgWIgnAsIgXAZQgFAFgIAAQgHAAgFgFQgGgFAAgHQAAgGAFgGIAWgYIAtgxIgbggIgPgTQgIgLgHgGQgHgFAAgIQAAgHAEgFQAGgGAIAAQAGAAAMAKQAHAHAGAHIAQAVIAXAcIAfgqQAZgfAJAAQAHAAAFAFQAGAFAAAIQAAAGgEAFQgSATgIANQgKAOgWAaIAbAlQAQAWAMAOQAFAFAAAGQAAAIgFAFQgGAFgHAAQgNAAgUgdg");
	this.shape_9.setTransform(107.6,383.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0000CC").s().p("Ag6BhQgOgMAAgpQAAgRACghQADgiAAgRIgCgNIgBgOQAAgTASAAQAFAAAFADIAcgFQANgCALAAQAgAAATAHQAMAFAAALQAAAHgFAFQgFAGgHAAIgGgBQgUgFgUAAIgTABIgXAFIgCAyIAxgFIAfgCQAHAAAGAFQAFAEAAAIQAAAOgQACIgfADIg1AFIgBAaQAAAZADADQACACAOAAIAXgBIAYAAIAHgBIAHAAQAIAAAFAEQAGAEAAAJQAAAOgPADQgNACgnAAQgpAAgMgLg");
	this.shape_10.setTransform(90.7,382.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0000CC").s().p("AhZBiQgEgFAAgIIABgPIABgPIAAgWIABgXIgBgYIAAgXIgCgXIgCgXQAAgHAHgHQAHgFAIgBQAKABALAQQA5BSA4AzIAAgUIgBhSIgCgPIgCgNQABgSASAAQAUAAABBAIAAAUIgBBQIgDATQgCAQgQABQgJgBgLgJQgxgtg8hOIgBAoIABAeIAAAeQAAAmgSgBQgKABgGgGg");
	this.shape_11.setTransform(3.2,382.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0000CC").s().p("AhDBPQgcgYAAgkQAAgrAbgjQAegoAuAAQAsAAAWAUQAWAVAAAoQAAAqgZAkQgcAoguAAQglAAgbgVgAgoglQgTAZAAAfQAAAVARANQAQANAXAAQAbAAATgcQARgZAAgfQAAgagMgKQgLgLgdABQgcgBgUAcg");
	this.shape_12.setTransform(-17.8,383);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0000CC").s().p("Ag8BcQgEgFgBgHQAAgHAGgFQAFgGAJABIAXgCIAAg6QABghACggIgcABQgIAAgFgEQgEgGgBgHQABgHAEgFQAFgEAGgBIAmgBQAYAAAlAFQAPADAAAPQABAIgHAEQgEAFgHAAIghgEQgCAXAAAmIAAA5IAjgBQAHABAFAFQAGAEgBAIQABAHgGAFQgFAFgIAAIgVAAIgWAAQgIAAgRADIgaACQgIAAgFgFg");
	this.shape_13.setTransform(-35.3,383);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0000CC").s().p("AgLBcQgHgFAAgHIABgFIABgGIgBgSIgBgRQAAgRgCgdIgEguIgGAAQgdAAgQgEQgOgDgBgNQABgHAEgFQAFgGAJAAIAUADIAVABIAWAAIAXgBIAdACIAcABQAIAAAGAFQAEAFAAAHQAAAIgEAFQgGAFgIAAIgegCIgfgBIAEAzQACAgAAATIABANIAAANQAAAJgDAIQgGAKgJAAQgGAAgFgFg");
	this.shape_14.setTransform(-51.2,382.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0000CC").s().p("Ag4BNQgTgUAAgbQAAgpAlgtQAgglAgAAIAKAAIAIABQAGgFAHAAQANAAADAPQADAKAAAPQAAAGgEAFQgFAHgJAAQgMAAgFgMQgDgGgCgBQgCgBgIAAQgQAAgUAZQgdAiAAAeQAAAOAJAKQAJAKANAAQAMAAANgHIATgMQAKgHAFAAQAIAAAFAGQAFAFAAAHQAAAHgHAGQgjAdgjAAQgcAAgUgVg");
	this.shape_15.setTransform(-68.3,382.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0000CC").s().p("AAsBIQgGgPgFgUIgfADQgTACgLACIgUAqQgFAJgLAAQgGAAgGgFQgFgFgBgHQAAgHATglIgCgIQABgGAMgDQASgeAWgiQAfgwAHAAQAOAAAFARIAIApIASBSIAHARQAFALgBAGQAAAHgEAFQgHAFgHAAQgJgBgLgXgAgJAMQAGgCALAAIARgCIgIgqIgaAug");
	this.shape_16.setTransform(-86.1,383.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(19));

	// buttons
	this.btn_wrong = new lib.quiz_btn();
	this.btn_wrong.parent = this;
	this.btn_wrong.setTransform(80.2,366,0.92,1);
	new cjs.ButtonHelper(this.btn_wrong, 0, 1, 2, false, new lib.quiz_btn(), 3);

	this.btn_correct = new lib.quiz_btn();
	this.btn_correct.parent = this;
	this.btn_correct.setTransform(-93.9,367.1,0.665,1);
	new cjs.ButtonHelper(this.btn_correct, 0, 1, 2, false, new lib.quiz_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_correct,p:{scaleX:0.665,x:-93.9,y:367.1}},{t:this.btn_wrong,p:{scaleX:0.92,x:80.2}}]}).to({state:[{t:this.btn_correct,p:{scaleX:0.915,x:80.2,y:364.6}},{t:this.btn_wrong,p:{scaleX:0.631,x:-93.9}}]},10).wait(9));

	// Layer 6
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#07C1D6").s().p("AgKBTQgFgGAAgGQAAgFAFgEQAEgEAGAAQAFAAAGAHQAFAGAAAGQAAAFgFAEQgEAEgGAAQgFAAgGgHgAgHAvQgEgEAAgFIAAgNIgBgMIABgsIAAgsQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAGIAABxQAAAFgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_17.setTransform(117.7,113.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#07C1D6").s().p("AhFBQQgFgEAAgHQAAgHAHgLIAMgQIAjguQAUgbATgRIgZABIgrAAIgEAAIgDAAQgGAAgFgDQgFgEAAgHQAAgPAWAAIAWABIAWABIAYAAIAZgBQAgAAAAAOQAAAJgOAKIgPAJQgSAOgZAfIglA0IAAAAIAlgBIAlgBIAVABQANADAAAJQAAAHgFAEQgEAEgHAAIgJAAIgJgBIgwABIgxABQgHAAgFgEg");
	this.shape_18.setTransform(107.6,113.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#07C1D6").s().p("AgyBOQgEgEAAgGQAAgGAEgFQAFgEAHAAIAUgCIAAgwQAAgcACgbIgXABQgHAAgEgEQgEgFAAgGQAAgGAEgEQAEgEAFAAIAggBQATAAAhAEQAMACAAANQAAAHgFAEQgEADgFAAIgcgDQgCAUAAAgIAAAwIAdAAQAHAAAEAEQAEAEAAAGQAAAGgEAFQgEAEgHAAIgSAAIgTAAIgVACIgVACQgHAAgEgEg");
	this.shape_19.setTransform(93.9,113.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#07C1D6").s().p("AgrBKQgcgWAAg1IABgQIAAgPIAAgMIABgNQAAgIADgIQAEgKAHAAQAGAAAFAEQAFAEAAAHIAAASIAAASIgBAPIAAAPQAAAQADAOQAFAQAJAHQAEAEARAAQAbAAAKgxQAFgYABgtQgBgHAEgFQAFgIAJAAQAIAAADAGQADAEgBAFQAAAqgDAYQgHAjgRAZQgIAKgLAHQgOAJgNAAQgbAAgOgKg");
	this.shape_20.setTransform(79.8,113.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#07C1D6").s().p("AAaBCQgRAGgRAAQgiAAgagaQgZgaAAggQAAgnAegaQAdgbAnAAQAqAAAWAfQATAaAAApQAAAgghAYIAUASIAMAJQAHAHAAAGQAAAGgEAFQgFAEgGAAQgIAAgtgngAgCAqQgPgPAAgKQAAgGAFgFQAEgDAGAAQAHAAAFAGQAJAMAMAKQAagRAAgUQAAgfgMgRQgOgUgaAAQgbAAgUARQgVATAAAaQAAATARASQARARAVAAIAGAAIAAAAg");
	this.shape_21.setTransform(62.3,115.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#07C1D6").s().p("AgkAKQgGgEAAgFQAAgGAGgDQAFgDAGAAIAZgBIAZgBQAHAAAFADQAGADAAAHQAAALgQABQgPABglAAQgGAAgFgDg");
	this.shape_22.setTransform(45.7,115.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#07C1D6").s().p("AgxBSQgMgKAAgjIACgqQADgdgBgPIgBgLIgBgLQAAgQAPAAQAFAAAEADQAMgDALgCIAVgBQAbAAAQAGQAKADAAAKQAAAGgEAEQgEAFgHABIgFgBQgRgFgQAAIgQABIgUAEIgBAqIApgDIAagCQAGAAAEADQAFAEAAAHQAAAMgOACIgZACIgtAEIgBAWQAAAVACADQACABAMABIATgBIAUAAIAGgBIAHAAQAGgBAFAEQAEAEAAAHQAAAMgMADQgKABgiAAQgiAAgLgJg");
	this.shape_23.setTransform(32.5,113.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#07C1D6").s().p("Ag6BQQgEgEAAgGIAAgYIAAgYIAAhWQAAgHAFgGQAFgHAKABIAaACQAPACAKAFQAuAXAAAiQAAAOgKAKQgJALgTAHQAcAQAPARQADAEAAAFQAAAGgEAFQgFAEgGAAQgGAAgFgEQgggfgmgMIABAjQAAAGgEAEQgEAFgHAAQgGAAgFgFgAghADIAGAAQAZAAAMgFIAKgIQAFgEAAgDQAAgMgQgLQgNgLgQgBIgNgBg");
	this.shape_24.setTransform(18.5,113.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#07C1D6").s().p("AgwBSQgEgEAAgGIAAgeIACgwIACgyQABgcAPABIAKgBIAPgBQAVAAATAOQAUAPAAAWQAAAcgWAPQgTAOgaAAIgJAAIgBAxQAAAGgEAEQgDAEgHAAQgGAAgEgEgAgTg4IAAAPIgCAlIAHABQAQAAAKgIQAMgJABgOQgBgJgKgHQgLgHgMAAIgGAAIgEABg");
	this.shape_25.setTransform(5.5,113.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF0000").s().p("AgZBDQgFgDAAgFQAAgGAEgFQAEgHAHAAQAHAAACAFQADAEAAAFQAAAFgDAFQgDAGgHAAQgFAAgEgEgAgUAeQgDgEgBgEQABgHAKgJIAVgOQALgJAAgHQAAgIgJgHQgIgHgIAAQgFAAgHAFQgJAGgEAAQgFAAgDgEQgDgEAAgFQgBgIAQgIQANgGAIAAQATAAAPAOQAQAOAAASQAAASgSANIgPALQgJAGgDAFQgFAFgFAAQgFAAgEgEg");
	this.shape_26.setTransform(147.9,195.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF0000").s().p("AgYAuQgNgFAAgKQAAgIAKAAQAEAAAIACQAIADAEAAQARAAAAgHQAAgFgNgFQgRgIgFgDQgMgJAAgMQAAgSASgGQALgEAWAAQAJAAAEADQAGADAAAIQAAAQgJAAQgJAAgBgHIgIgBQgUAAAAAGQAAADAMAGQARAIAHAEQAMAJAAALQAAAPgOAIQgLAHgQAAQgLAAgKgEg");
	this.shape_27.setTransform(138.3,197.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF0000").s().p("AgKBAQgEgDABgGIgBgPIAAgQIABgUIABgTQAAgFADgDQAEgEAEAAQAFAAADAEQADADABAFIgBATIgBAUIAAAQIAAAPQAAAGgDADQgEADgEAAQgFAAgDgDgAgIgsQgEgDAAgGQAAgFAEgFQAFgDAFAAQAFAAAFADQADAFAAAFQAAAGgDADQgFAEgFAAQgFAAgFgEg");
	this.shape_28.setTransform(131.8,195.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF0000").s().p("AAVBAQgDgHgBgNIgCgUIAAgHIABgGIgBgIQAAgEgEAAQgKAAgHAIQgEAFgHAMQAAAggDAHQgDAHgIAAQgFAAgEgDQgEgEAAgFIABgEQABgCABgWIAAg6IAAgDIAAgOIAAgIIgBgIQAAgFADgDQAEgDAFAAQAJAAADAJQABAGAAAKIAAASIgBARQAHgGAHgDQAGgDAJAAQAPAAAGAIQAFAHABAMIABAVIACASIADARIABADQAAAFgEADQgEADgFAAQgJAAgCgJg");
	this.shape_29.setTransform(124,194.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF0000").s().p("AgHA9QgEgDABgFIAAgJIAAgKIgCgsIgQgBQgMgCABgKQAAgFADgDQAEgEAFAAIAPABIgBgJIAAgJQAAgFAEgDQADgDAFAAQAMAAAAAWIAAAHIAJgBQAKAAAEACQAGACABAIQAAAFgEAEQgDADgGAAIgEAAIgEAAIgJAAIACAuIAAAEIAAAFQAAAUgNAAQgDAAgEgDg");
	this.shape_30.setTransform(114.4,195.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF0000").s().p("AgYAuQgNgFAAgKQAAgIAKAAQAEAAAIACQAIADAEAAQARAAAAgHQAAgFgNgFQgRgIgFgDQgMgJAAgMQAAgSASgGQALgEAWAAQAJAAAEADQAGADAAAIQAAAQgJAAQgJAAgBgHIgIgBQgUAAAAAGQAAADAMAGQARAIAHAEQAMAJAAALQAAAPgOAIQgLAHgQAAQgLAAgKgEg");
	this.shape_31.setTransform(97.8,197.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF0000").s().p("AgKBAQgEgDABgGIgBgPIAAgQIABgUIABgTQAAgFADgDQAEgEAEAAQAFAAADAEQADADABAFIgBATIgBAUIAAAQIAAAPQAAAGgDADQgEADgEAAQgFAAgDgDgAgIgsQgDgDgBgGQABgFADgFQAFgDAFAAQAFAAAFADQADAFAAAFQAAAGgDADQgFAEgFAAQgFAAgFgEg");
	this.shape_32.setTransform(91.3,195.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF0000").s().p("AgHAzQgDgEAAgFIgCgdIgCgdIgBgIQgLAFgKAOIgBACIgBAbIAAAHIAAAGQAAAEgEADQgEADgFAAQgHAAgDgHQgCgEAAgKIAAgfIAAgNIAAgNQAAgIACgGQAEgIAGAAQAFAAAEAEQAEADAAAFIgBAHQANgPAMAAQAOAAAFAKQAFgEAHgDQAGgCAIAAQARAAAGARQACAEACAUIAGAuQABAFgEAEQgEADgFAAQgKAAgCgKIgDgaIgDgYQgCgQgEAAQgCAAgHAEIgLAHQAAAKADASQACATAAAJQAAAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_33.setTransform(73.9,197.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF0000").s().p("AgiAuQgDgEAAgEIAAg5IAAgIIAAgIQAAgFAEgDQADgEAFAAQAKAAACAKQAOgLATAAQASAAAAAXIAAAGQgBANgMAAQgKAAgBgLIAAgJQgTADgIARIAAAsQgBAFgDADQgDADgFAAQgGAAgDgDg");
	this.shape_34.setTransform(62.6,197.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF0000").s().p("AgcAlQgNgMAAgUQgBgTALgPQAOgSAWAAQASAAAKAOQAKAMAAAUQAAASgLAPQgNAQgTAAQgQAAgMgLgAgMgOQgFAJAAAKQAAAKAGAFQAFAFAGAAQAHAAAFgFQAHgGAAgKQABgcgQAAQgKAAgGAKg");
	this.shape_35.setTransform(53.3,197.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF0000").s().p("AgQBKQgDgDAAgFIAAgCQACgNAAgLIAAgrIgGABIgFABQgGAAgDgEQgDgDgBgFQAAgIAJgDIAQgBIAAgKQADgUAIgJQAJgMAWAAQAPAAAAALQAAAMgOAAQgLAAgFAHQgDAGgBALIgBADIARgBQAQAAAAALQAAAMgRgBIgRABIAAAXIAAAXQAAARgCAJQgCAJgIAAQgFAAgEgDg");
	this.shape_36.setTransform(44,195.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF0000").s().p("AAVBAQgDgHgBgNIgCgUIAAgHIABgGIgBgIQAAgEgEAAQgKAAgHAIQgEAFgHAMQAAAggDAHQgDAHgIAAQgFAAgEgDQgEgEAAgFIABgEQABgCABgWIAAg6IAAgDIAAgOIAAgIIgBgIQAAgFADgDQAEgDAFAAQAJAAADAJQABAGAAAKIAAASIgBARQAHgGAHgDQAGgDAJAAQAPAAAGAIQAFAHABAMIABAVIACASIADARIABADQAAAFgEADQgEADgFAAQgJAAgCgJg");
	this.shape_37.setTransform(26.7,194.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF0000").s().p("AgaAmQgOgLgBgTQAAgQANgTQAOgVASAAQAJAAAMAEQAPAHAAAIQAAAEgDADQgDADgFABQgEAAgGgFQgEgDgLgBQgGAAgIAOQgHANAAAIQAAAJAGAGQAGAEAKAAQAGAAAIgEQAJgEACgBQAFABADADQADAEAAAEQAAAGgOAIQgNAFgJABQgTAAgMgMg");
	this.shape_38.setTransform(16.5,197.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF0000").s().p("AgKBAQgDgDgBgGIAAgPIgBgQIABgUIABgTQAAgFAEgDQADgEAGAAQAEAAAEAEQADADAAAFIgBATIgBAUIABAQIAAAPQgBAGgDADQgDADgEAAQgGAAgDgDgAgHgsQgEgDgBgGQABgFAEgFQAEgDAEAAQAGAAAEADQAEAFABAFQgBAGgEADQgEAEgGAAQgEAAgEgEg");
	this.shape_39.setTransform(9.8,195.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF0000").s().p("AAVBAQgDgHgBgNIgCgUIAAgHIABgGIgBgIQAAgEgEAAQgKAAgHAIQgEAFgHAMQAAAggDAHQgDAHgIAAQgFAAgEgDQgEgEAAgFIABgEQABgCABgWIAAg6IAAgDIAAgOIAAgIIgBgIQAAgFADgDQAEgDAFAAQAJAAADAJQABAGAAAKIAAASIgBARQAHgGAHgDQAGgDAJAAQAPAAAGAIQAFAHABAMIABAVIACASIADARIABADQAAAFgEADQgEADgFAAQgJAAgCgJg");
	this.shape_40.setTransform(2,194.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF0000").s().p("AARBEQgEgDAAgFQgFgKgBgGIgJg4QgGARgGAOQgLAVgDAMIABAEQAAAGgEADQgFADgFAAQgGAAgEgDQgFgEAAgGIgDgLIgJgoQgGgUgOgnIgBgEQABgFAEgEQADgCAFAAQAHAAAEAFIAFALQAIAZALAvQAHgRAHgXIAKgbQAJgTAIAAQAIAAAFAJQABAFACAMIACARQADAQAJAmIAZg9IAEgRQADgJAEgGQAEgGAHAAQAGAAADADQAEADgBAFIgDAKIgDAJIgFAPIgQAlIgQAlIgGAPQgFAHgIAAQgFAAgFgDg");
	this.shape_41.setTransform(-12.7,195.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgHAHQgDgDAAgEQAAgCADgDQADgDAEAAQAFAAADACQADADAAADQAAAEgDADQgEACgEAAQgEAAgDgCg");
	this.shape_42.setTransform(228.9,175.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgFAvQgDgCAAgDIAAgIIAAgIIgBgiIgMgBQgKgBABgIQAAgEACgDQADgCAEAAIALABIAAgIIAAgGQAAgEADgCQADgDADAAQAKAAgBARIAAAGIAHgBQAIAAADABQAFACABAGQgBAEgCADQgCACgFAAIgDAAIgEAAIgGABIABAjIAAADIAAAEQAAAQgKAAQgDAAgCgDg");
	this.shape_43.setTransform(222.6,171.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAOAfIgCgOIgBgOIABgFIAAgGIAAgDIAAgDQAAgFgDAAQgGAAgFAHQgFAIgDAKIgBAGIAAAHIgBAFIAAAGQAAAEgDADQgDADgEAAQgDAAgEgDQgCgDAAgEIgBgFIAAgGIABgTIABgSIAAgGIgBgGQAAgEADgCQADgDAEAAQAJAAAAALIABABQAKgKAKAAQANAAAFAKQADAIAAAOIAAAFIAAADIABAOIACAOQAAAEgDACQgCADgFAAQgIAAgBgJg");
	this.shape_44.setTransform(215.7,172.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgXAeQgLgJAAgQQAAgQAJgMQALgNAPAAQANAAAHAEQAKAFAAAKQAAAIgHAGIgQAGIgWALQADADAFACQAFACAEAAQAJAAAHgEQAFgDAEAAQAHAAAAAHQAAAHgLAFQgKAEgLAAQgPAAgLgHgAgIgPQgFAEgDAIIAQgGQAIgEAFgEQgEgDgIAAQgFAAgEAFg");
	this.shape_45.setTransform(207.9,172.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgaAkQgDgDAAgEIAAgrIABgHIAAgGQAAgEADgCQACgDAEAAQAHAAACAIQALgJAOAAQAOAAABASIAAAEQgBALgJAAQgJAAAAgJIAAgHQgPADgGANIAAAhQAAAEgDADQgDACgEAAQgEAAgCgCg");
	this.shape_46.setTransform(200.8,172.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgXAeQgLgJAAgQQAAgQAKgMQAKgNAQAAQAMAAAHAEQALAFgBAKQABAIgJAGIgPAGIgWALQADADAFACQAFACAEAAQAKAAAGgEQAGgDADAAQAHAAAAAHQAAAHgMAFQgJAEgLAAQgPAAgLgHgAgIgPQgFAEgCAIIAPgGQAIgEAFgEQgEgDgHAAQgGAAgEAFg");
	this.shape_47.setTransform(193.3,172.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgMA6QgDgDAAgDIAAgCIACgTIAAghIgFABIgEAAQgEAAgDgCQgCgDAAgEQAAgGAGgCIAMgBIABgIQACgPAGgIQAHgJARAAQAMAAAAAJQAAAJgLAAQgJAAgDAGQgDAEgBAJIAAACIANgBQANAAAAAJQAAAJgOAAIgNAAIAAASIAAASQAAANgBAHQgCAHgHAAQgDAAgDgCg");
	this.shape_48.setTransform(185.8,170.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgMA6QgDgDAAgDIAAgCIACgTIAAghIgFABIgEAAQgEAAgDgCQgCgDAAgEQAAgGAGgCIAMgBIABgIQACgPAGgIQAHgJARAAQAMAAAAAJQAAAJgLAAQgJAAgDAGQgDAEgBAJIAAACIANgBQANAAAAAJQAAAJgOAAIgNAAIAAASIAAASQAAANgBAHQgCAHgHAAQgDAAgDgCg");
	this.shape_49.setTransform(178.7,170.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgIAyQgCgDgBgEIAAgMIAAgNIAAgPIABgOQABgEACgDQACgCAFAAQADAAADACQACADAAAEIgBAOIAAAPIAAANIAAAMQAAAEgCADQgDACgDAAQgEAAgDgCgAgFgiQgEgDAAgEQAAgEAEgDQADgDADAAQAEAAADADQAEADAAAEQAAAEgEADQgDADgEAAQgDAAgDgDg");
	this.shape_50.setTransform(173.5,170.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AATAzQgFAEgFABIgJAAQgPAAgLgJQgKgLAAgPQAAgSAKgKQALgMAQAAIAJABQAEABADACIACggQABgIAIAAQAEAAACADQADADAAADIgCAeIgBAcQAAAZABAJIAAACQAAADgCADQgDACgEAAQgFAAgCgFgAgNADQgFAGAAALQAAAIAFAFQAGAGAHgBIAHAAIAGgFIACgCIAAgZQgCgEgDgCQgEgBgFgBQgJAAgFAFg");
	this.shape_51.setTransform(167.2,170.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgXAeQgLgJAAgQQAAgQAJgMQALgNAPAAQANAAAHAEQALAFAAAKQgBAIgHAGIgQAGIgWALQADADAFACQAEACAFAAQAJAAAHgEQAFgDAEAAQAHAAAAAHQAAAHgLAFQgKAEgLAAQgPAAgLgHgAgJgPQgEAEgDAIIAQgGQAIgEAGgEQgFgDgIAAQgFAAgFAFg");
	this.shape_52.setTransform(153.1,172.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgaAkQgDgDAAgEIAAgrIABgHIAAgGQAAgEADgCQACgDAEAAQAIAAABAIQALgJAOAAQAOAAAAASIAAAEQAAALgJAAQgJAAAAgJIAAgHQgPADgGANIAAAhQAAAEgDADQgDACgEAAQgEAAgCgCg");
	this.shape_53.setTransform(146,172.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AARAfIgLAFIgHACQgRAAgJgJQgIgJAAgSQABgPALgMQAMgMARAAQAGAAAIAEQALAEAAAGQAAABAAAAQAAABAAABQgBAAAAAAQAAABgBAAIgBAHIAAAKQAAAMACAFIADAIIACAGQAAAEgCACQgDADgDAAQgEAAgGgHgAgJgNQgGAHgBAJQAAAJAEAFQADAEAHAAIAHgBIAGgEIgCgYIABgFIAAgGIgBgBIgCAAQgJAAgHAHg");
	this.shape_54.setTransform(138.7,172.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgkAtQgIgHAAgIQAAgEACgDQADgDAEAAQAGAAADAGQAEAJAOAAQALAAALgGQALgFAAgGQAAgJgHgCQgFgCgOgBQgMAAgJgEQgNgFAAgKQAAgOAOgLQAOgLAQAAQAHAAAKADQAMAEAAAFQAAADgCADQgDADgFAAIgJgBIgKgCQgJABgHAEQgIAEAAAFQAAADADABIAHADIARABQAPABAJAHQAJAHAAAPQAAARgUAKQgPAGgTAAQgRAAgKgHg");
	this.shape_55.setTransform(123.8,170.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AggA0QgEgDAAgEIAAhIIgBgJIABgJQABgHALgBQAFgBANAAQALgBAMAJQAOAKAAAOQAAAIgDAGQgCAEgGAEQAHADAFAHQAGAHAAAHQAAAJgKAIQgHAFgHADQgPAHgYgBQgFAAgCgDgAgSAlQAMgBANgEQAMgDAAgEQAAgGgHgDQgHgEgEgBIgTAAgAgSgjIAAAOIAAAOIAKAAQAUgBAAgOQAAgFgGgEQgGgFgGAAIgMABg");
	this.shape_56.setTransform(114.8,170.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgkAzQgDgDAAgEIAAgPIAAgPIAAg3QAAgEADgEQAEgEAFAAIASACQAJABAGADQAdAPAAAWQAAAJgGAFQgHAHgMAFQATAKAJALQACACAAAEQAAAEgDACQgCADgFAAQgDAAgDgDQgVgTgYgIIABAWQAAAEgDADQgCADgEAAQgFAAgCgDgAgUACIACAAQARAAAIgDIAGgFQADgDAAgBQAAgIgKgHQgIgHgKgBIgIAAg");
	this.shape_57.setTransform(105.8,170.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgfA0QgHgHAAgWIABgaIABgcIAAgHIgBgHQAAgKAKAAQADAAACABIAPgCIANgBQARAAAKADQAGADAAAGQAAAEgCACQgDAEgEAAIgDgBQgLgDgKAAIgKABIgNACIAAAbIAZgCIARgBQAEAAADACQADADAAAEQAAAHgJABIgQACIgdACIAAAOQAAAOABACIAJAAIAMAAIANAAIAEAAIAEgBQAEAAACACQAEADAAAFQAAAHgIACQgHABgVAAQgWAAgHgGg");
	this.shape_58.setTransform(97,170.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgOAxQgIgUgKglIgGgSQgEgNAAgFQAAgEADgDQADgCAEAAQAGAAADAHIACALIAHAXIAKAhIAQgoIAFgRQAFgJAEgGQADgDAEAAQAEAAADADQADACAAAEIgCAGQgDAFgEAHIgEAOIgTAuQgDAJgEAIQgDAFgFAAQgHAAgDgGg");
	this.shape_59.setTransform(87.8,170.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgfA0QgHgHAAgWIABgaIABgcIAAgHIgBgHQAAgKAKAAQADAAACABIAPgCIANgBQARAAAKADQAGADAAAGQAAAEgCACQgDAEgEAAIgDgBQgLgDgKAAIgKABIgNACIAAAbIAZgCIARgBQAEAAADACQADADAAAEQAAAHgJABIgQACIgdACIAAAOQAAAOABACIAJAAIAMAAIANAAIAEAAIAEgBQAEAAACACQAEADAAAFQAAAHgIACQgHABgVAAQgWAAgHgGg");
	this.shape_60.setTransform(72.7,170.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgeAqQgKgLAAgPQAAgWAUgYQARgUARAAIAFAAIAFABQADgDAEAAQAHAAACAIIABAOQAAADgCADQgDADgFAAQgGAAgDgGQAAgBAAgBQgBAAAAgBQgBAAAAAAQAAgBgBAAIgFAAQgJAAgKANQgQASAAAQQAAAIAFAFQAFAFAHAAQAGAAAHgDIAKgHQAGgDACAAQAFAAACADQADACAAAEQAAAEgDADQgTAQgTAAQgPAAgLgLg");
	this.shape_61.setTransform(63.9,170.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgvA1QgCgDAAgEIAAgIIAAgJIABgMIAAgMIAAgMIAAgNIgBgMIgBgMQAAgEADgEQAEgDAEAAQAGAAAFAJQAeAsAfAbIAAgKIgBgtIgBgHIAAgIQAAgJAKAAQALAAAAAiIAAALIgBAqIgBALQgBAJgJAAQgFAAgGgFQgagYgggqIAAAVIAAAQIAAAQQAAAVgKAAQgFAAgDgDg");
	this.shape_62.setTransform(53.8,170.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgfA0QgHgHAAgWIABgaIABgcIAAgHIgBgHQAAgKAKAAQADAAACABIAPgCIANgBQARAAAKADQAGADAAAGQAAAEgCACQgDAEgEAAIgDgBQgLgDgKAAIgKABIgNACIAAAbIAZgCIARgBQAEAAADACQADADAAAEQAAAHgJABIgQACIgdACIAAAOQAAAOABACIAJAAIAMAAIANAAIAEAAIAEgBQAEAAACACQAEADAAAFQAAAHgIACQgHABgVAAQgWAAgHgGg");
	this.shape_63.setTransform(43.9,170.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgFAyQgEgDAAgEIABgDIAAgDIAAgJIgBgKIgBgYIgCgYIgEAAQgPAAgJgDQgIgBAAgIQAAgDADgDQADgDAEAAIALABIALABIANAAIALAAIAQABIAPAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAIgQgBIgRgBIACAcIABAbIABAHIAAAHQAAAFgCAEQgDAFgFAAQgDAAgCgCg");
	this.shape_64.setTransform(34.5,170.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgkAtQgIgHAAgIQAAgEACgDQADgDAEAAQAGAAADAGQAEAJAOAAQALAAALgGQALgFAAgGQAAgJgHgCQgFgCgOgBQgMAAgJgEQgNgFAAgKQAAgOAOgLQAOgLAQAAQAHAAAKADQAMAEAAAFQAAADgCADQgDADgFAAIgJgBIgKgCQgJABgHAEQgIAEAAAFQAAADADABIAHADIARABQAPABAJAHQAJAHAAAPQAAARgUAKQgPAGgTAAQgRAAgKgHg");
	this.shape_65.setTransform(24.8,170.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AggAyQgCgDAAgEQAAgEADgDQACgCAFAAIANgBIAAgfQAAgSABgRIgPABQgEAAgDgDQgCgDAAgEQAAgEACgCQADgCADgBIAVAAQAMAAAUACQAIACAAAIQAAAEgDADQgDACgDAAIgSgCIgBAgIAAAfIATAAQAEAAADADQACACAAAEQAAAEgDADQgCACgFAAIgLABIgMAAIgNABIgOABQgEAAgDgCg");
	this.shape_66.setTransform(16,170.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AATAnIgJgNIgIgMIgUAYIgNANQgDADgEAAQgEAAgDgDQgDgDAAgDQABgEACgCIAMgOIAYgZIgPgSIgHgKIgJgJQgDgDAAgEQgBgEADgDQADgDAEAAQAEAAAFAFIAIAIIAJALIALAPIARgWQAOgRAEAAQAEAAAEADQACADAAAEQAAADgCADIgOARIgRAVIAOAUIAQATQACADAAAEQAAADgCADQgDADgEAAQgIAAgLgQg");
	this.shape_67.setTransform(7.1,170.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgfA0QgHgHAAgWIABgaIABgcIAAgHIgBgHQAAgKAKAAQADAAACABIAPgCIANgBQARAAAKADQAGADAAAGQAAAEgCACQgDAEgEAAIgDgBQgLgDgKAAIgKABIgNACIAAAbIAZgCIARgBQAEAAADACQADADAAAEQAAAHgJABIgQACIgdACIAAAOQAAAOABACIAJAAIAMAAIANAAIAEAAIAEgBQAEAAACACQAEADAAAFQAAAHgIACQgHABgVAAQgWAAgHgGg");
	this.shape_68.setTransform(-2.1,170.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AATAzQgFAEgFABIgJAAQgPAAgLgJQgKgLAAgPQAAgSAKgKQALgMAQAAIAJABQAEABADACIACggQABgIAIAAQAEAAACADQADADAAADIgCAeIgBAcQAAAZABAJIAAACQAAADgCADQgDACgEAAQgFAAgCgFgAgNADQgFAGAAALQAAAIAFAFQAGAGAHgBIAHAAIAGgFIACgCIAAgZQgCgEgDgCQgEgBgFgBQgJAAgFAFg");
	this.shape_69.setTransform(-16.9,170.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AAOAfIgCgOIgBgOIABgFIAAgGIAAgDIAAgDQAAgFgDAAQgGAAgFAHQgFAIgDAKIgBAGIAAAHIAAAFIgBAGQAAAEgDADQgCADgEAAQgFAAgDgDQgCgDAAgEIAAgFIgBgGIABgTIABgSIAAgGIAAgGQAAgEACgCQADgDAEAAQAJAAABALIAAABQAKgKAKAAQANAAAEAKQAEAIAAAOIAAAFIAAADIACAOIABAOQAAAEgDACQgDADgDAAQgJAAgBgJg");
	this.shape_70.setTransform(-24.5,172.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AARAfIgMAFIgGACQgRAAgIgJQgJgJABgSQgBgPAMgMQAMgMAQAAQAHAAAIAEQALAEAAAGQAAABAAAAQAAABAAABQgBAAAAAAQAAABgBAAIgBAHIAAAKQAAAMACAFIADAIIADAGQgBAEgCACQgDADgDAAQgDAAgHgHgAgJgNQgGAHgBAJQAAAJADAFQAEAEAGAAIAHgBIAHgEIgBgYIAAgFIAAgGIgBgBIgCAAQgJAAgHAHg");
	this.shape_71.setTransform(-32.1,172.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgvA1QgDgDABgEIAAgIIAAgJIABgMIAAgMIAAgMIAAgNIgBgMIgBgMQgBgEAEgEQAEgDAEAAQAGAAAFAJQAfAsAdAbIABgKIgBgtIgBgHIAAgIQgBgJALAAQALAAgBAiIAAALIAAAqIgBALQgCAJgIAAQgFAAgGgFQgagYghgqIAAAVIAAAQIABAQQAAAVgKAAQgFAAgDgDg");
	this.shape_72.setTransform(-47.8,170.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgjAqQgQgMAAgUQAAgWAPgTQAQgWAYAAQAYAAAMALQAMALAAAWQAAAWgOATQgPAWgYAAQgUAAgOgMgAgVgUQgKAOAAAQQAAALAJAIQAIAGANAAQAOAAAKgOQAJgOAAgQQAAgOgGgGQgGgFgQAAQgOAAgLAOg");
	this.shape_73.setTransform(-59.1,170.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AggAyQgCgDAAgEQAAgEADgDQACgCAFAAIANgBIAAgfQAAgSABgRIgPABQgEAAgDgDQgCgDAAgEQAAgEACgCQADgCADgBIAVAAQAMAAAUACQAIACAAAIQAAAEgDADQgDACgDAAIgSgCIgBAgIAAAfIATAAQAEAAADADQACACAAAEQAAAEgDADQgCACgFAAIgLABIgMAAIgNABIgOABQgEAAgDgCg");
	this.shape_74.setTransform(-68.6,170.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgFAyQgEgDAAgEIABgDIAAgDIAAgJIgBgKIgBgYIgCgYIgEAAQgPAAgJgDQgIgBAAgIQAAgDADgDQADgDAEAAIALABIALABIANAAIALAAIAQABIAPAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAIgQgBIgRgBIACAcIABAbIABAHIAAAHQAAAFgCAEQgDAFgFAAQgDAAgCgCg");
	this.shape_75.setTransform(-77.2,170.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgeAqQgKgLAAgPQAAgWAUgYQARgUARAAIAFAAIAFABQADgDAEAAQAHAAACAIIABAOQAAADgCADQgDADgFAAQgGAAgDgGQAAgBgBgBQAAAAAAgBQgBAAAAAAQAAgBgBAAIgFAAQgJAAgKANQgQASAAAQQAAAIAFAFQAFAFAHAAQAGAAAHgDIAKgHQAGgDACAAQAFAAACADQADACAAAEQAAAEgDADQgTAQgTAAQgPAAgLgLg");
	this.shape_76.setTransform(-86.3,170.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AAYAnQgEgIgCgLIgQACIgQABIgLAXQgDAFgFAAQgFAAgCgDQgDgCgBgEQAAgDALgUIgBgFQAAgDAGgCIAWghQAQgaAEAAQAHgBADAKIAFAVIAKAsIADAJQACAHAAACQAAAEgDADQgCACgEAAQgGAAgFgMgAgEAGIAJgBIAJgBIgFgVIgNAXg");
	this.shape_77.setTransform(-95.9,170.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgjAsQABgEACgCQADgDADAAIAJACIAKABQAJAAAGgHQAEgGABgNQgDAEgFABQgEACgFAAQgNAAgJgJQgIgIAAgNQAAgTALgLQAMgMATAAQAGAAAFABQAFACADADQAJABAAAJIgCANQgDAQgBARQgBAWgGAKQgJANgWAAQgbAAAAgKgAgJgeQgHAHAAALQAAAIADAEQAEADAGAAQAEAAAGgFQAGgGAAgGIAEgVIgGgCIgDgBQgLAAgGAIg");
	this.shape_78.setTransform(229,152.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AAOAfIgCgOIgBgOIABgFIAAgGIAAgDIAAgDQAAgFgDAAQgGAAgFAHQgFAIgDAKIgBAGIAAAHIgBAFIAAAGQAAAEgDADQgDADgDAAQgEAAgEgDQgCgDAAgEIAAgFIgBgGIABgTIABgSIAAgGIAAgGQAAgEACgCQADgDAEAAQAJAAAAALIABABQAKgKAKAAQANAAAEAKQAEAIAAAOIAAAFIAAADIACAOIABAOQAAAEgDACQgDADgEAAQgIAAgBgJg");
	this.shape_79.setTransform(221.8,150.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgIAyQgCgDgBgEIAAgMIAAgNIAAgPIABgOQABgEACgDQACgCAFAAQADAAADACQACADAAAEIgBAOIAAAPIAAANIAAAMQAAAEgCADQgDACgDAAQgEAAgDgCgAgFgiQgEgDAAgEQAAgEAEgDQADgDADAAQAEAAADADQAEADAAAEQAAAEgEADQgDADgEAAQgDAAgDgDg");
	this.shape_80.setTransform(216.3,149);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AADAWIgEgXIgCADIgKAbIgDAEQgDAFgFAAQgEAAgEgGQgDgGgDgJIgGgkIgBgKQAAgDADgDQADgCAEAAQAHAAACAHIABAJIABAKIADAQIALghQAEgJAGAAQAIAAACAKIADASIAEASIALgoQABgGAIAAQADAAADACQADADAAAEIAAACIgPAvQgCAGgEAHQgEAEgFAAQgJAAgEgQg");
	this.shape_81.setTransform(209.4,150.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgVAdQgKgJgBgRQAAgOAIgMQALgOARABQAOgBAIAMQAHAKAAAOQAAAPgIALQgKAMgPAAQgMAAgJgIgAgJgKQgEAGAAAHQAAAJAFAEQADADAFAAQAFAAAFgDQAFgFAAgJQABgUgNAAQgHgBgFAJg");
	this.shape_82.setTransform(200.7,150.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgGA2QgCgDAAgEIAAheQAAgEACgCQAEgCADAAQADAAADACQACACABAEIAABaQAAANgKAAQgDAAgDgCg");
	this.shape_83.setTransform(195.2,148.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgGA2QgDgDAAgEIAAheQAAgEADgCQAEgCACAAQAEAAADACQADACgBAEIAABaQAAANgJAAQgDAAgDgCg");
	this.shape_84.setTransform(191.3,148.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgVAdQgKgJgBgRQAAgOAIgMQALgOARABQAOgBAIAMQAHAKAAAOQAAAPgIALQgKAMgPAAQgMAAgJgIgAgJgKQgEAGAAAHQAAAJAFAEQADADAFAAQAFAAAFgDQAFgFAAgJQABgUgNAAQgHgBgFAJg");
	this.shape_85.setTransform(185.7,150.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgMA6QgDgDAAgDIAAgCIACgTIAAghIgFABIgEAAQgEAAgDgCQgCgDAAgEQAAgGAGgCQADgBAJAAIABgIQACgPAGgIQAHgJARAAQAMAAAAAJQAAAJgLAAQgJAAgDAGQgDAEgBAJIAAACIANgBQANAAAAAJQAAAJgOAAIgNAAIAAASIAAASQAAANgBAHQgCAHgHAAQgDAAgDgCg");
	this.shape_86.setTransform(178.5,149.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgkAtQgIgHAAgIQAAgEACgDQADgDAEAAQAGAAADAGQAEAJAOAAQALAAALgGQALgFAAgGQAAgJgHgCQgFgCgOgBQgMAAgJgEQgNgFAAgKQAAgOAOgLQAOgLAQAAQAHAAAKADQAMAEAAAFQAAADgCADQgDADgFAAIgJgBIgKgCQgJABgHAEQgIAEAAAFQAAADADABIAHADIARABQAPABAJAHQAJAHAAAPQAAARgUAKQgPAGgTAAQgRAAgKgHg");
	this.shape_87.setTransform(164.1,149.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgFAyQgEgDAAgEIABgDIAAgDIAAgJIgBgKIgBgYIgCgYIgEAAQgPAAgJgDQgIgBAAgIQAAgDADgDQADgDAEAAIALABIALABIANAAIALAAIAQABIAPAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAIgQgBIgRgBIACAcIABAbIABAHIAAAHQAAAFgCAEQgDAFgFAAQgDAAgCgCg");
	this.shape_88.setTransform(154.4,148.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgvA1QgCgDAAgEIAAgIIAAgJIABgMIAAgMIAAgMIAAgNIgBgMIgBgMQAAgEADgEQAEgDAEAAQAGAAAFAJQAeAsAfAbIAAgKIgBgtIgBgHIAAgIQAAgJAKAAQALAAgBAiIAAALIAAAqIgBALQgBAJgJAAQgFAAgGgFQgagYgggqIAAAVIAAAQIAAAQQAAAVgKAAQgFAAgDgDg");
	this.shape_89.setTransform(143.8,149);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgfA0QgHgHAAgWIABgaIABgcIAAgHIgBgHQAAgKAKAAQADAAACABIAPgCIANgBQARAAAKADQAGADAAAGQAAAEgCACQgDAEgEAAIgDgBQgLgDgKAAIgKABIgNACIAAAbIAZgCIARgBQAEAAADACQADADAAAEQAAAHgJABIgQACIgdACIAAAOQAAAOABACIAJAAIAMAAIANAAIAEAAIAEgBQAEAAACACQAEADAAAFQAAAHgIACQgHABgVAAQgWAAgHgGg");
	this.shape_90.setTransform(133.9,148.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AAlAtIgEgRIgHgiIgKAcIgEAMQgDAIgDAEQgDAHgGAAQgGAAgEgIIgDgMIgKgkIgIAgIgDAQQgDAJgIAAQgEAAgDgDQgCgDAAgDQAAgMAFgPIAHgaIAFgVQADgOADgFQAEgFAFAAQAGAAADAGQADAGADATQADARAGAUQAHgTAHgZIADgPQAEgKAIAAQAHAAAEALIADARQAEAcAGAVIAGAXQAAAEgDADQgDACgEAAQgIAAgDgKg");
	this.shape_91.setTransform(123.3,149.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgfA0QgHgHAAgWIABgaIABgcIAAgHIgBgHQAAgKAKAAQADAAACABIAPgCIANgBQARAAAKADQAGADAAAGQAAAEgCACQgDAEgEAAIgDgBQgLgDgKAAIgKABIgNACIAAAbIAZgCIARgBQAEAAADACQADADAAAEQAAAHgJABIgQACIgdACIAAAOQAAAOABACIAJAAIAMAAIANAAIAEAAIAEgBQAEAAACACQAEADAAAFQAAAHgIACQgHABgVAAQgWAAgHgGg");
	this.shape_92.setTransform(112.8,148.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgjApIABgWQACgcAAglQAAgDACgDQADgDAEAAQAEAAADADQADADAAADQAAAlgCAdIgBARQAQAAAYgIIAEAAQADAAAEADQACADAAADQAAAGgHADQgHADgRADQgPADgJAAQgSAAABgPg");
	this.shape_93.setTransform(104.6,149.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgeA0QgDgDAAgDIAAgTIACgeIABggQAAgSAKABIAGgBIAKgBQANABAMAIQANAKAAAOQAAASgOAJQgMAJgRAAIgFAAIgBAfQAAADgCADQgDACgEAAQgEAAgCgCgAgMgaIgBAYIAEAAQAKAAAHgFQAIgFAAgJQAAgGgHgEQgHgFgHAAIgEAAIgDAAIAAAKg");
	this.shape_94.setTransform(96.9,148.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AAlAtIgEgRIgHgiIgKAcIgEAMQgDAIgDAEQgDAHgGAAQgGAAgEgIIgDgMIgKgkIgIAgIgDAQQgDAJgIAAQgEAAgDgDQgCgDAAgDQAAgMAFgPIAHgaIAEgVQADgOAEgFQAEgFAFAAQAGAAADAGQADAGADATQADARAGAUQAHgTAGgZIAFgPQADgKAIAAQAHAAAEALIADARQAEAcAGAVIAGAXQAAAEgDADQgDACgEAAQgHAAgEgKg");
	this.shape_95.setTransform(87.1,149.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgjAqQgQgMAAgUQAAgWAPgTQAQgWAYAAQAYAAAMALQAMALAAAWQAAAWgOATQgPAWgYAAQgUAAgOgMgAgVgUQgKAOAAAQQAAALAJAIQAIAGANAAQAOAAAKgOQAJgOAAgQQAAgOgGgGQgGgFgQAAQgOAAgLAOg");
	this.shape_96.setTransform(75.1,149.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgeAqQgKgLAAgPQAAgWAUgYQARgUARAAIAFAAIAFABQADgDAEAAQAHAAACAIIABAOQAAADgCADQgDADgFAAQgGAAgDgGQAAgBgBgBQAAAAAAgBQgBAAAAAAQAAgBgBAAIgFAAQgJAAgKANQgQASAAAQQAAAIAFAFQAFAFAHAAQAGAAAHgDIAKgHQAGgDACAAQAFAAACADQADACAAAEQAAAEgDADQgTAQgTAAQgPAAgLgLg");
	this.shape_97.setTransform(65.3,148.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgaAkQgCgDAAgEIAAgrIAAgHIAAgGQAAgEADgCQACgDAEAAQAIAAABAIQALgJAPAAQAOAAgBASIAAAEQgBALgIAAQgJAAAAgJIAAgHQgPADgGANIAAAhQAAAEgDADQgCACgEAAQgFAAgCgCg");
	this.shape_98.setTransform(51.6,150.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgVAdQgKgJgBgRQAAgOAIgMQALgOARABQAOgBAIAMQAHAKAAAOQAAAPgIALQgKAMgPAAQgMAAgJgIgAgJgKQgEAGAAAHQAAAJAFAEQADADAFAAQAFAAAFgDQAFgFAAgJQABgUgNAAQgHgBgFAJg");
	this.shape_99.setTransform(44.3,150.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgMA6QgDgDAAgDIAAgCIACgTIAAghIgFABIgEAAQgEAAgDgCQgCgDAAgEQAAgGAGgCQADgBAJAAIABgIQACgPAGgIQAHgJARAAQAMAAAAAJQAAAJgLAAQgJAAgDAGQgDAEgBAJIAAACIANgBQANAAAAAJQAAAJgOAAIgNAAIAAASIAAASQAAANgBAHQgCAHgHAAQgDAAgDgCg");
	this.shape_100.setTransform(37.1,149.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgSAkQgLgEAAgHQAAgIAIABIAKACQAFABAEAAQANABAAgGQAAgDgKgEIgRgJQgKgHAAgJQAAgOAPgEQAIgDARAAQAHAAADACQAEACAAAGQAAAMgGAAQgHAAgBgFIgGgBQgPAAAAAFQAAADAJAEQANAGAFADQAKAHAAAJQAAALgLAHQgJAEgMAAQgJABgHgDg");
	this.shape_101.setTransform(24.1,150.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgFAoQgDgDAAgEIgBgXIgCgWIgBgHQgIAFgIALIgBABIAAAVIAAAFIAAAFQAAADgDACQgDACgEAAQgGAAgCgFIgBgLIAAgYIgBgKIAAgKQAAgGACgFQADgGAFAAQAEAAADADQADADAAADIgBAGQAKgMAJAAQALAAAEAIQAEgDAFgCQAFgCAGAAQANAAAFANIADATIAFAkQAAAEgDACQgCADgEAAQgIAAgCgIIgCgUIgCgTQgCgMgDAAIgHADIgJAFIACAWIACAWQAAAEgCADQgDACgEAAQgDAAgDgCg");
	this.shape_102.setTransform(15.5,150.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgaAkQgCgDgBgEIAAgrIABgHIAAgGQAAgEACgCQADgDAEAAQAHAAACAIQALgJAOAAQAPAAAAASIAAAEQgBALgJAAQgJAAAAgJIAAgHQgPADgGANIAAAhQAAAEgDADQgDACgEAAQgEAAgCgCg");
	this.shape_103.setTransform(6.7,150.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgVAdQgKgJgBgRQAAgOAIgMQALgOARABQAOgBAIAMQAHAKAAAOQAAAPgIALQgKAMgPAAQgMAAgJgIgAgJgKQgEAGAAAHQAAAJAFAEQADADAFAAQAFAAAFgDQAFgFAAgJQABgUgNAAQgHgBgFAJg");
	this.shape_104.setTransform(-0.6,150.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgMA6QgDgDAAgDIAAgCIACgTIAAghIgFABIgEAAQgEAAgDgCQgCgDAAgEQAAgGAGgCQADgBAJAAIABgIQACgPAGgIQAHgJARAAQAMAAAAAJQAAAJgLAAQgJAAgDAGQgDAEgBAJIAAACIANgBQANAAAAAJQAAAJgOAAIgNAAIAAASIAAASQAAANgBAHQgCAHgHAAQgDAAgDgCg");
	this.shape_105.setTransform(-7.8,149.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgFAoQgDgDAAgEIgBgXIgCgWIgBgHQgIAFgIALIgBABIAAAVIAAAFIAAAFQAAADgDACQgDACgEAAQgGAAgCgFIgBgLIAAgYIgBgKIAAgKQAAgGACgFQADgGAFAAQAEAAADADQADADAAADIgBAGQAKgMAJAAQALAAAEAIQAEgDAFgCQAFgCAGAAQANAAAFANIADATIAFAkQAAAEgDACQgCADgEAAQgIAAgCgIIgCgUIgCgTQgCgMgDAAIgHADIgJAFIACAWIACAWQAAAEgCADQgDACgEAAQgDAAgDgCg");
	this.shape_106.setTransform(-22.7,150.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AARAfIgMAFIgGACQgRAAgIgJQgJgJABgSQgBgPAMgMQAMgMAQAAQAHAAAIAEQALAEAAAGQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAIgBAHIAAAKQAAAMACAFIADAIIADAGQgBAEgCACQgDADgDAAQgDAAgHgHgAgJgNQgGAHgBAJQAAAJADAFQAEAEAGAAIAHgBIAHgEIgBgYIAAgFIAAgGIgBgBIgCAAQgJAAgHAHg");
	this.shape_107.setTransform(-32.1,150.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgaAkQgCgDAAgEIAAgrIAAgHIAAgGQAAgEADgCQACgDAEAAQAIAAABAIQALgJAPAAQAOAAgBASIAAAEQgBALgIAAQgJAAAAgJIAAgHQgPADgGANIAAAhQAAAEgDADQgCACgEAAQgFAAgCgCg");
	this.shape_108.setTransform(-39.3,150.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgiAsQgBgEADgCQACgDAFAAIAIACIALABQAIAAAGgHQAEgGABgNQgEAEgEABQgFACgEAAQgNAAgIgJQgJgIAAgNQAAgTALgLQAMgMATAAQAHAAAEABQAEACAEADQAIABABAJIgCANQgDAQgBARQgBAWgGAKQgJANgVAAQgbAAAAgKgAgJgeQgHAHABALQAAAIACAEQAEADAGAAQAFAAAFgFQAFgGABgGIAEgVIgGgCIgDgBQgLAAgGAIg");
	this.shape_109.setTransform(-46.6,152.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AAQAfIgLAFIgHACQgQAAgJgJQgHgJgBgSQAAgPANgMQAMgMAPAAQAHAAAJAEQAKAEAAAGQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAIgBAHIgBAKQAAAMACAFIADAIIACAGQAAAEgCACQgDADgEAAQgCAAgIgHgAgJgNQgHAHABAJQAAAJADAFQADAEAGAAIAIgBIAHgEIgDgYIABgFIABgGIgDgBIgCAAQgIAAgHAHg");
	this.shape_110.setTransform(-54.1,150.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgIAyQgDgDABgEIAAgMIgBgNIABgPIABgOQgBgEADgDQADgCAEAAQADAAADACQACADAAAEIAAAOIgBAPIAAANIABAMQAAAEgDADQgDACgDAAQgEAAgDgCgAgGgiQgDgDAAgEQAAgEADgDQAEgDADAAQAFAAACADQAEADAAAEQAAAEgEADQgCADgFAAQgDAAgEgDg");
	this.shape_111.setTransform(-59.8,149);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AATAzQgFADgFABIgJABQgPAAgLgKQgKgJAAgQQAAgSAKgLQALgLAQAAIAJABQAEABADADIACghQABgIAIAAQAEAAACACQADAEAAADIgCAeIgBAdQAAAYABAIIAAADQAAADgCACQgDADgEAAQgFAAgCgFgAgNADQgFAGAAAMQAAAHAFAFQAGAFAHABIAHgCIAGgEIACgCIAAgZQgCgFgDgBQgEgCgFAAQgJABgFAEg");
	this.shape_112.setTransform(-66.1,148.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgXAeQgLgJAAgQQAAgQAJgMQALgNAPAAQANAAAHAEQAKAFAAAKQAAAIgIAGIgPAGIgWALQADADAFACQAFACAEAAQAKAAAGgEQAGgDADAAQAHAAAAAHQAAAHgMAFQgJAEgLAAQgPAAgLgHgAgIgPQgFAEgDAIIAQgGQAIgEAFgEQgEgDgIAAQgFAAgEAFg");
	this.shape_113.setTransform(-80.2,150.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AAQAyQgCgFgBgKIgBgQIAAgFIAAgGIAAgFQgBgDgDAAQgHAAgFAGIgJANQAAAZgCAFQgDAFgGAAQgEAAgDgCQgDgDAAgDIABgEIABgTIAAgsIAAgDIABgKIgBgHIgBgGQAAgEADgCQADgDAEAAQAHAAACAHIABANIAAAOIAAANQAFgFAFgCQAFgDAGAAQAMAAAFAHQAEAFABAJIABARIABANIACAOIABACQAAAEgDADQgDACgEAAQgHAAgCgHg");
	this.shape_114.setTransform(-88,148.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgFAyQgEgDAAgEIABgDIAAgDIAAgJIgBgKIgBgYIgCgYIgEAAQgPAAgJgDQgIgBAAgIQAAgDADgDQADgDAEAAIALABIALABIANAAIALAAIAQABIAPAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAIgQgBIgRgBIACAcIABAbIABAHIAAAHQAAAFgCAEQgDAFgFAAQgDAAgCgCg");
	this.shape_115.setTransform(-97,148.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(3,1,1).p("AJs1QQByAABzACIUBAHIgbAAQgKAAgKAAQolgCokgBMgwrAADIAAAOEghRgUkMAAAAp1MBCbAAAMAAAgqY");
	this.shape_116.setTransform(65.5,267);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#66CCFF").s().p("Egg/AF3IAArtMBB/AAAIAALtg");
	this.shape_117.setTransform(64.9,170.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#00CCFF").s().p("EghNAVOMAAAgp1IAAgNIAAgIIAAgOMAwrgADIRJADIAUAAIATAAMAAAAqYgEghBgU9IAALuMBCAAAAIAAruIAAgDMhCAAAAg");
	this.shape_118.setTransform(65.1,267.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#0000FF").s().p("AADgCIgFgOIAFAAIAAAIIAAAMIAAANg");
	this.shape_119.setTransform(-147.8,134.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]}).wait(19));

	// btn
	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#214DF8").s().p("AgjBSIgEAAQgHAAgCgHQgBgEgBgJQABgZAOgQQAFgHAcgRQAOgLAGgGQAIgKABgOQgBgHgIgFQgIgFgIAAQgIAAgJAGIgQAMQgFADgCAAQgMAAAAgJQABgFAEgDQAMgMAJgFQAOgIAMAAQASAAANAKQAQAKgBARQAAALgCAJQgDAJgHAIQgIAJgTAMQgTAMgGAHQgNAMAAASIAXgCIAfgBQAJAAAGACQAKAEAAAHQAAAEgDADQgCADgFAAIgHgBIgIgCIgQABIgPAAIgNABIgNACIgDgBg");
	this.shape_120.setTransform(-31.3,428.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#214DF8").s().p("AgsBaQgDgDAAgEIABgEQAIgXAYgrQAWgrAIgXQAOgmAIAAQAEAAADADQADACAAAFIgCAFIgMAeQgHAUgNAaIgXArIgTArQgDAGgGAAQgEAAgDgCg");
	this.shape_121.setTransform(-43.7,428.3);

	this.score = new cjs.Text("0", "22px 'Comic Sans MS'", "#214DF8");
	this.score.name = "score";
	this.score.textAlign = "center";
	this.score.lineHeight = 33;
	this.score.lineWidth = 44;
	this.score.parent = this;
	this.score.setTransform(-69.5,421.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#214DF8").s().p("AgFAzQgDgDgBgFIAAgGIgBgGQAAgEAEgDQADgDAEAAQALAAABAWQAAAFgDADQgEADgEAAQgFAAgCgDgAgHgaQgEgEAAgEIAAgEIgBgEQABgFADgDQADgDAFAAQALAAAAATQAAAEgEAEQgCADgFAAQgEAAgDgDg");
	this.shape_122.setTransform(-87.7,429.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#214DF8").s().p("AgkAvQgRgOAAgYQAAgbAOgTQAPgVAYAAQARAAALAHQAOAHAAAPQAAALgMAJQgGAEgQAHIgpATQAGAJAJAFQAJAEALAAQAHAAAKgDQANgDAEgGQAEgGAEAAQADAAAEADQACADAAAEQABAMgUAIQgRAIgPAAQgXAAgPgMgAgVgcQgKAKgEAUIAigPQASgKAIgHQgJgIgQAAQgNAAgIAKg");
	this.shape_123.setTransform(-96.7,431.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#214DF8").s().p("AgpAxIAAhKIABgKIAAgMQAAgKAJAAQALAAAAARQAUgTAZAAQAIAAAFAHQAEAGAAANIAAAIQgBANgKAAQgJAAAAgLIgBgHIAAgJQgRACgJAHQgKAIgGAOIAAA5QAAALgKAAQgKAAAAgLg");
	this.shape_124.setTransform(-107.9,431.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#214DF8").s().p("AggAtQgOgOAAgZQgBgYAMgSQAPgWAbAAQAVAAALAUQAJAQgBAWQAAAXgMARQgOATgWAAQgSAAgNgOgAgTgVQgHAMAAAPQAAAPAJAJQAHAHAJAAQALAAAIgIQAJgJAAgPQACgpgYAAQgPAAgJAPg");
	this.shape_125.setTransform(-119.4,431.4);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#214DF8").s().p("AgeAvQgPgOAAgXQAAgUAOgYQAQgaATAAQALABANAEQAQAGAAAKQAAAEgCADQgDADgEAAQgDAAgCgBIgFgFQgGgEgPAAQgKAAgKATQgKASAAAMQAAAOAKAJQAJAHANAAQAGAAAHgEIANgGIAFgCQAEAAACAEQADACAAAEQAAAIgQAIQgPAGgJABQgVAAgPgOg");
	this.shape_126.setTransform(-130.6,431.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#214DF8").s().p("AgrBKQgUgJAAgQQAAgFADgCQADgDAFAAQAFAAAEAGQAGAIAEADQAJAGASAAQAPAAAOgHQATgKAAgQQAAgOgQgHQgNgHgSgBQgRAAgMgGQgPgJAAgQQAAgTAWgQQAVgPAVAAQAKAAANAEQASAEAAAIQAAAJgKAAIgPgCQgLgDgGAAQgQABgLAIQgMAIAAAMQAAAJAQADQAGACAQABQAYACAOANQANAMAAASQAAAZgYAQQgUANgbAAQgTAAgRgIg");
	this.shape_127.setTransform(-143.8,429);

	this.btn_next = new lib.goNext();
	this.btn_next.parent = this;
	this.btn_next.setTransform(266.8,441.5);
	new cjs.ButtonHelper(this.btn_next, 0, 1, 2, false, new lib.goNext(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_next},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.score},{t:this.shape_121},{t:this.shape_120}]}).wait(19));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-171.5,95.2,486.7,393);


// stage content:
(lib.diag_quiz = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{quiz1:0});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Quiz2
	this.instance = new lib.practicequiz2();
	this.instance.parent = this;
	this.instance.setTransform(477,53.3,1,1,0,0,0,276.8,145.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Main
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.timeline.addTween(cjs.Tween.get(this.UI).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(303.7,201.6,512.8,394.4);
// library properties:
lib.properties = {
	id: '6F8735A23A23D4428309D8DC2FA74749',
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
		{src:"sounds/bgmusic.mp3", id:"bgmusic"},
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
an.compositions['6F8735A23A23D4428309D8DC2FA74749'] = {
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