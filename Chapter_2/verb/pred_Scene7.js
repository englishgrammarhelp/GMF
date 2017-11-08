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


(lib.Symbol128 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgnA1QgKgKAAgWQAAgUAKgUQAJgWAQgNQAKgJAJAAQAIAAALAFQAPAFAAAHQgBADgCADQgCACgDAAIgGgCQgMgHgIAAQgFAAgGAGIgJALQgSAYAAAbQAAAPAEAGQAGAGAMAAQAOAAAKgJQALgJAEgSQgVACgPAHIgEABQgDAAgCgDQgCgCAAgEQAAgEAEgCQAPgKAqAAQADAAADADQACABAAADQAAAFgEADQgGAXgPAPQgPAOgVAAQgTAAgJgLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-6.4,10,12.9);


(lib.Symbol127 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ag0A9QgCgCAAgEIABgJIAAgLIAAgOIABgPIAAgOIgBgQIgBgPIgBgOQAAgEAEgDQADgDAEAAQAEAAAGAJQATAeAPATQASAVAWAWIAAgKIAAgKQAAgigCgUIgDgIIgBgIQAAgJAIAAQAOgBAAAzIAAAZIgBAaIgBAMQgBAJgHgBQgFABgGgGQgfgegog4IgBAjIAAATIAAATQAAAWgIAAQgEAAgDgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.6,-6.4,11.1,12.8);


(lib.Symbol126 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgkA8QgDgDAAgEIAAgWIABgfIACggIABgWQABgEACgBQAKgEAOAAQAMAAANAKQAPALAAAQQAAAUgQAKQAMAFAGAGQAGAHAAAHQAAAJgLAJQgHAGgIAEQgQAGgcABQgDAAgDgEgAgXAfIAAAQQAUgBAMgFQAFgCAFgEQAFgEAAgCQAAgEgKgEQgHgEgHgCIgIgBIgDAAIgDAAIgJAAIAAARgAgUguIgCAsIAMABQALgBAHgHQAIgGAAgMQAAgGgIgHQgIgGgIgBIgMABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.9,-6.3,8,12.7);


(lib.Symbol125 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgnA7QgCgCAAgEIAAgSIgBgSIACgVIABgVIgBgMIAAgMQgBgEADgEQADgEAFABIATABQAKACAHADQAgARAAAZQAAALgLAIQgJAIgNAEQAYANAMAOQACADAAADQAAADgCACQgCADgEAAQgCAAgDgDQgagZgfgJIACAeQgBAEgCACQgCADgDAAQgDAAgDgDgAgYgiIABAJIgBAQIgDAOIAEAAIADAAQAUAAAKgFQAEgBADgEQAFgEAAgEQAAgKgMgKQgLgIgMgCIgMgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.3,-6.1,8.7,12.3);


(lib.Symbol124 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgfA2QgOgGAAgNQAAgCACgDQACgCAEAAQADAAADAEQAEAHADABQAHAFANAAQALAAAKgFQANgHAAgMQAAgKgLgGQgJgEgNgBQgMAAgJgEQgLgHAAgLQAAgPAPgLQAQgKAPAAQAHgBAKADQAMADAAAFQAAAIgHAAIgLgCIgMgCQgLAAgIAGQgJAGAAAJQAAAGALADIAQABQASACAKAKQAJAIAAANQAAATgRALQgPAJgSAAQgPAAgMgFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.6,-5.9,9.3,11.9);


(lib.Symbol123 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AARA9QgDgCAAgEIgEgPIgGgiQgEgUgBgMQgHAZgHARQgKAVgDAMIABADQAAAEgDACQgDACgDAAQgLAAAAgJIgLgxQgFgSgMgkIgBgDQAAgHAJAAQAFAAADAFIAFAQIAJAiIAIAiQAJgUAHgaIAIgYQAIgRAFAAQAFAAADAFQADAHADAZQABANAEARIAGAfQALgZAPgqIAFgPQACgJADgFQADgEAEAAQAJAAAAAHIgDAIIgfBOIgLAbQgDAFgFAAQgEAAgDgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.6,-6.3,15.3,12.6);


(lib.Symbol122 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AghA8QgIgHAAgZIAAgLIABgNIgBgEQAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIACgiIgBgIIgBgJQAAgJAJAAQADAAACACIARgDIAPgCQAUAAALAFQAFACAAAFQAAADgCADQgDACgDAAIgCAAQgNgEgNAAIgMABIgRAEIABAIIgBAeIAhgDIASgCQAEAAACADQACACAAADQAAAGgHABIg1AFIgBALIAAAJQAAARACADQACADAKAAIAOgBIAOAAIAFgBIAEAAQAJAAAAAIQAAAHgGABQgIACgYAAQgYAAgGgHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.2,-6.6,8.4,13.4);


(lib.Symbol121 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgnA7QgCgCAAgEIAAgSIgBgSIACgVIABgVIgBgMIAAgMQgBgEADgEQADgEAFABIATABQAKACAHADQAgARAAAZQAAALgLAIQgJAIgNAEQAYANAMAOQACADAAADQAAADgCACQgCADgEAAQgCAAgDgDQgagZgfgJIACAeQgBAEgCACQgCADgDAAQgDAAgDgDgAgYgiIABAJIgBAQIgDAOIAEAAIADAAQAUAAAKgFQAEgBADgEQAFgEAAgEQAAgKgMgKQgLgIgMgCIgMgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.3,-6.1,8.7,12.3);


(lib.Symbol120 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAbAoIgFgYIgVAEIgTAEIgOAeQgDAEgEAAQgDAAgCgCQgDgCAAgEQAAgDAMgZIgBgFQAAgGAHgCIAXgmQARgdAFAAQAGAAACAJIARBPIAEAMIADAJQAAAEgDACQgCACgDAAQgIAAgFgTgAgJAFIAbgFIgGgeg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.7,-5.9,9.6,11.8);


(lib.Symbol119 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgJARQgCgCAAgDQAAgDAFgKIAGgNQACgEADAAQADAAACACQACACAAADQAAACgLAXQgBAFgEAAQgDAAgCgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,-1.9,2.3,3.8);


(lib.Symbol118 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgfA2QgOgGAAgNQAAgCACgDQACgCAEAAQADAAADAEQAEAHADABQAHAFANAAQALAAAKgFQANgHAAgMQAAgKgLgGQgJgEgNgBQgMAAgJgEQgLgHAAgLQAAgPAPgLQAQgKAPAAQAHgBAKADQAMADAAAFQAAAIgHAAIgLgCIgMgCQgLAAgIAGQgJAGAAAJQAAAGALADIAQABQASACAKAKQAJAIAAANQAAATgRALQgPAJgSAAQgPAAgMgFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.6,-5.9,9.3,11.9);


(lib.Symbol117 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgiA6QgCgDAAgEQAAgDACgCQADgDADAAIAQgBIABgOIAAgOIgBgMQAAgSACgaIgUAAQgDAAgDgDQgCgBAAgEQAAgIAHAAIAZAAQAOAAAXACQAIABAAAIQAAADgEADQgCABgCAAIgOAAIgMgCIgBArIAAANIAAAOIAAAMIAYAAQADABACACQADACAAAEQAAADgDACQgCACgDABIgNAAIgNAAIgPABIgPABQgDAAgDgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.8,-5.9,7.7,11.9);


(lib.Symbol116 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAwA7QgCgEgCgJIgDgNIgKg2IgVA9QgCAIgEAGQgDAGgEAAQgFAAgDgFIgDgIIgCgJQgIgcgGgeIgNA2QAAAHgEAPQgCAGgFAAQgEAAgCgDQgCgCAAgEQgBgNAGgTIANg3QAEgRADgFQADgFAFAAQAFAAADAGQADAHADAVQAEAaAJAdQALgdAIghIACgLQACgHACgEQADgGAFAAQAHAAAEANQABAEACAOQAEAiAHAZIAEAOIADANQAAAEgCACQgDACgDAAQgEAAgDgEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.3,-6.3,12.6,12.6);


(lib.Symbol115 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAbAoIgFgYIgVAEIgTAEIgOAeQgDAEgEAAQgDAAgCgCQgDgCAAgEQAAgDAMgZIgBgFQAAgGAHgCIAXgmQARgdAFAAQAGAAACAJIARBPIAEAMIADAJQAAAEgDACQgCACgDAAQgIAAgFgTgAgJAFIAbgFIgGgeg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.7,-5.9,9.6,11.8);


(lib.Symbol114 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgJARQgCgCAAgDQAAgDAFgKIAGgNQACgEADAAQADAAACACQACACAAADQAAACgLAXQgBAFgEAAQgDAAgCgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,-1.9,2.3,3.8);


(lib.Symbol113 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AghA8QgIgHAAgZIAAgLIABgNIgBgEQAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIACgiIgBgIIgBgJQAAgJAJAAQADAAACACIARgDIAPgCQAUAAALAFQAFACAAAFQAAADgCADQgDACgDAAIgCAAQgNgEgNAAIgMABIgRAEIABAIIgBAeIAhgDIASgCQAEAAACADQACACAAADQAAAGgHABIg1AFIgBALIAAAJQAAARACADQACADAKAAIAOgBIAOAAIAFgBIAEAAQAJAAAAAIQAAAHgGABQgIACgYAAQgYAAgGgHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.2,-6.6,8.4,13.4);


(lib.Symbol112 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgkA8QgDgDAAgEIAAgWIABgfIACggIABgWQABgEACgBQAKgEAOAAQAMAAANAKQAPALAAAQQAAAUgQAKQAMAFAGAGQAGAHAAAHQAAAJgLAJQgHAGgIAEQgQAGgcABQgDAAgDgEgAgXAfIAAAQQAUgBAMgFQAFgCAFgEQAFgEAAgCQAAgEgKgEQgHgEgHgCIgIgBIgDAAIgDAAIgJAAIAAARgAgUguIgCAsIAMABQALgBAHgHQAIgGAAgMQAAgGgIgHQgIgGgIgBIgMABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.9,-6.3,8,12.7);


(lib.SLimMouth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_152 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(152).call(this.frame_152).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgGBCQAAgCABgBQADgGADgHQABgBAAgBQAAgBAAgBQABgCAAgBQACgEACgEQABgBAAgBQABAAAAAAQAHgLAHgJQAIgLAHgIQAOgQALgWQAFgKAEgLAgngoQAAgBAAAAIAAAAQgEgCgEAEQgFAEgGAHQgJAJgDANQAAACgBADQgCALALgDQADAAACgFQADgFACgGQABgCAAgDQAEgMAIgOg");
	this.shape.setTransform(17.5,2.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C6FFFF").s().p("AgGAOIAGgNIABgCIABgBIABgDIAEgIIABgCIAAAAIgEAcIgLADIABgCg");
	this.shape_1.setTransform(17.5,7.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPAPIABgFQADgLAJgKIAKgLQAEgDAEACIAAAAQgIAOgEAMIgBAFIgEAMQgCAEgDABIgDAAQgIAAACgKg");
	this.shape_2.setTransform(11.9,1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC99").s().p("AhPBeQgSgegZgfIADgzIAGgJQBKh1CIBBIABACQASAMAHAVIg9BbIgCAPIAAAAIgBACIgEAIIgBADIgBACIgBACIgHANIgBADQgeAIgdAAQggAAgggJgAAEgKIgLAKQgJAJgCANIgBAFQgDAMAMgDQADAAACgFIAFgMIAAgFQAEgMAHgNIAAgBIAAAAIgDgBQgCAAgCADg");
	this.shape_3.setTransform(12.3,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AAmhCQAAANgFAKQgLAXgOAQQgHAHgHALQgHAKgHAKQgBAAAAABQAAABgBABQgCADgCAEQAAACgBABQAAABAAABQAAACgBABQgEAGgDAHQgBABgBAB");
	this.shape_4.setTransform(20.5,2.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgVAPQgDgHABgIQAAgcAXAAQAXgBABAdQACAdgZAAQgRAAgFgOg");
	this.shape_5.setTransform(11.5,0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFCC99").s().p("AhPBeQgSgegZgfIADgzIAGgJQBKh1CIBBIABACQASAMAHAVIgEAGIg5BVIgCAPIAAAAIgBACIgEAIIgBADIgBACIgBACIgHANIgBADQgeAIgdAAQggAAgggJgAgfAFQgBAIADAHQAFAPASAAQAYAAgCgeQgCgcgVAAQgYAAAAAcgAAsBfIAAAAgAAtBcIAHgNIABgCIABgCIABgDIAEgIIABgCIAAAAIgEAdIgMAEIABgDg");
	this.shape_6.setTransform(12.3,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgpAMIgHgCIgBgDIABgBIACgGIADgDIAGgFIAHgCIAbgBQAYABAMACIAJACQAGADABADIABABQAAAEgCACIgKAAIAAgBIgKAAQgNgDgPAAQgVAAgJAFIgJAEIgCAAg");
	this.shape_7.setTransform(11.3,-0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag5AGQAAggA8AJIgRAAIAWABIABAAIAMABIAAABQAlAEAAAQQAAAIgNAAIgtgCIAFAAQgTgDgJAFQgKAGgFAAQgTAAAAgOgAgfgJIgGACIgHAGIgDACIgCAGIAAABIAAADIAHACIAAABIADgBIAJgEQAJgFAUAAQAQAAANADIAKABIAAAAIAJAAQACgCAAgDIAAgDQgCgCgGgCIgJgDQgMgCgYgBIgbABg");
	this.shape_8.setTransform(11.3,-0.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCC99").s().p("AhPBeQgSgegZgfIADgzIAGgJQBKh1CIBBIABACQASAMAHAVIgEAGIg5BVIgCAPIAAAAIgBACIgEAIIgBADIgBACIgBACIgHANIgBADQgeAIgdAAQggAAgggJgAhDACQAAAOATAAQAFAAAKgGQAJgFAUADIgFAAIAsACQANAAAAgIQAAgQglgEIAAgBIgLgBIgBAAIgXgBIASAAQgNgCgLAAQglAAAAAZgAAsBfIAAAAgAAtBcIAHgNIABgCIABgCIABgDIAEgIIABgCIAAAAIgEAdIgMAEIABgDg");
	this.shape_9.setTransform(12.3,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AgngpQgEgCgEAEQgFAEgGAHQgJAJgDANQAAACgBADQgCALALgDQADAAACgFQADgFACgGQABgCAAgDQAEgMAIgOIAAgBgAgGBCQAAgCABgBQADgGADgHQABgBAAgBQAAgBAAgBQABgCAAgBQACgEACgEQABgBAAgBQABAAAAAAQAHgLAHgJQAIgLAHgIQAOgQALgWQAFgKAEgL");
	this.shape_10.setTransform(17.5,2.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C6FFFF").s().p("AgGAOIAGgNIABgBIABgCIABgDIAEgIIABgCIAAgBIgEAdIgLADIABgCg");
	this.shape_11.setTransform(17.5,7.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("AglBDQABgBABgBQADgHAEgGQABgBAAgCQAAgBAAgBQABgBAAgCQACgEACgDQABgBAAgBQAAgBABAAQAHgKAHgKQAHgLAHgHQAOgQALgXQAFgKAAgN");
	this.shape_12.setTransform(20.5,2.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgvAWQAAgIARgWQANgRAMgFQAHgCAUAAQAUAAAEAIQACAEAAAWQAAAcgFAAQAAgGgZAAQggAAgIAFQgIAEgDAAQgOAAAAgLgAABgYQgIABgOAUQgOANAAAJQAAADACACIA2gHIAKABQAHgDAAAFQAEAAgBgQQABgUgHgFQgFgDgRAAIgMAAg");
	this.shape_13.setTransform(10.1,1.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgmAUQAAgKAOgNQAOgTAJgBQAbgCAGAFQAHAEAAAVQAAAPgEAAQABgEgIACIgKAAIg1AHQgDgCAAgDg");
	this.shape_14.setTransform(10.4,1.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFCC99").s().p("AhPBeQgSgegZgfIADgzIAGgJQBKh1CIBBIABACQASAMAHAVIgEAGIg5BVIgCAPIAAAAIgBACIgEAIIgBADIgBACIgBACIgHANIgBADQgeAIgdAAQggAAgggJgAgbgRQgMAFgNAQQgRAXAAAIQAAALANAAQAEAAAIgEQAIgFAhAAQAYAAAAAGQAFAAAAgcQAAgWgCgEQgEgIgUAAQgUAAgHACgAAsBfIAAAAgAAtBcIAHgNIABgCIABgCIABgDIAEgIIABgCIAAAAIgEAdIgMAEIABgDg");
	this.shape_15.setTransform(12.3,0);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgTABIADgBIAiAAIACABIgnAAg");
	this.shape_16.setTransform(12.3,0);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAlAIIgIgFIgEgCIgCgBIgUAAQgjAAgRAOQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAgBAAgBQAAgGARgGIAUgNIABAAIAWgCQAJgCAHAHIANALQAQAMAAAEQAAABAAABQgBAAAAABQAAAAgBAAQgBAAAAAAIgNgKgAgRgGIAAABIAngBIgCgCIgiAAg");
	this.shape_17.setTransform(12.1,0.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFCC99").s().p("AhPBeQgSgegZgfIADgzIAGgJQBKh1CIBBIABACQASAMAHAVIgEAGIg5BVIgCAPIAAAAIgBACIgEAIIgBADIgBACIgBACIgHANIgBADQgeAIgdAAQggAAgggJgAAVAHIACACIAEACIAIAFIANAKQAAAAABgBQABAAAAAAQAAgBABAAQAAgBAAAAQAAgFgQgMIgNgLQgHgGgJABIgWADIgBgBIgUAMQgRAHAAAHQAAAAAAABQABABAAAAQAAABABAAQAAAAABAAQARgOAjAAIAPAAIAFAAgAAsBfIAAAAgAAtBcIAHgNIABgCIABgCIABgDIAEgIIABgCIAAAAIgEAdIgMAEIABgDg");
	this.shape_18.setTransform(12.3,0);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AglAKQgFAAAAgFQAAgHAGgCQAFgDAagEQAwgIAAAcQAAABgGADIgQAAIgTAAQgVAAgSgDg");
	this.shape_19.setTransform(11.6,-1.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgtAOQgDgDAAgGQAAgLAJgEQAPgHAzAAQAWADAAAXQAAAJgUAAQhFAAgFgEgAgFgLQgaAEgFACQgGADAAAGQAAAFAFABQAaAEAggCIAQAAQAGgDAAgBQAAgVgeAAQgIAAgKACg");
	this.shape_20.setTransform(11.6,-1.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFCC99").s().p("AhPBeQgSgegZgfIADgzIAGgJQBKh1CIBBIABACQASAMAHAVIgEAGIg5BVIgCAPIAAAAIgBACIgEAIIgBADIgBACIgBACIgHANIgBADQgeAIgdAAQggAAgggJgAgvgUQgJAEAAALQAAAGADADQAFAEBFAAQAUAAAAgIQAAgYgWgEQgyABgQAHgAAsBfIAAAAgAAtBcIAHgNIABgCIABgCIABgDIAEgIIABgCIAAAAIgEAdIgMAEIABgDg");
	this.shape_21.setTransform(12.3,0);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgNAFIAAAAIgOgCIADgCQAHgFAHAAQAZAAAMAJIABAAIgpAAg");
	this.shape_22.setTransform(11.1,-1.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgjATIgBgBIAAgBQAAgFAfACQATAAABgCQABAAAAABQABAAAAAAQAAAAABABQAAABAAAAQAAAFglAAgAAbADIgYABIgogDQgIAAgDgBIgDAAQgMAAAAgDQAAgCAMAAQAHAAALgJQAJgHAJADIgFAAIAHAAQAjABgCAKIAJAGIADAAIABABIAAAAIAPABIAKgBQAGAAAAAEQAAADgNAAQgPAAgJgEgAgigFIgDACIAOABIAAABIApAAIgBgBQgLgKgZAAQgIAAgHAHg");
	this.shape_23.setTransform(12,-0.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFCC99").s().p("AhPBeQgSgegZgfIADgzIAGgJQBKh1CIBBIABACQASAMAHAVIgEAGIg5BVIgCAPIAAAAIgBACIgEAIIgBADIgBACIgBACIgHANIgBADQgeAIgdAAQggAAgggJgAgnANIAAABIABABIAQABQAlAAAAgFQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAgBAAQgBACgTAAIgOgBQgRAAAAAEgAAwADQANAAAAgDQAAgDgGAAIgKABIgPgCIAAAAIgBgBIgDAAIgJgGQACgKgjgBIgHAAIAFAAQgJgDgJAHQgLAJgHAAQgMAAAAACQAAAEAMAAIADAAQADABAIAAIAoACIAYAAQAJADAPAAgAAsBfIAAAAgAAtBcIAHgNIABgCIABgCIABgDIAEgIIABgCIAAAAIgEAdIgMAEIABgDg");
	this.shape_24.setTransform(12.3,0);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgpAFQAOgFANgQQAhAAAEACIAEADIADAIQABAEAKAJQgUAHgLAAQgTAAgggMg");
	this.shape_25.setTransform(10.7,-0.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgbAQQgYgHAAgEQAAgCAXgKIAIgJQAHgIAKABIAUABIgFAAIAGABQARABAEANQABAHAEACQAIAFAAADQAAAFgNAFQgNAEgMAAQgQAAgZgIgAgKgPQgOAPgNAGQAfAMATAAQALAAAVgIQgLgIgBgFIgDgHIgEgDQgDgCgXAAIgKAAg");
	this.shape_26.setTransform(10.3,-0.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFCC99").s().p("AhPBeQgSgegZgfIADgzIAGgJQBKh1CIBBIABACQASAMAHAVIgEAGIg5BVIgCAPIAAAAIgBACIgEAIIgBADIgBACIgBACIgHANIgBADQgeAIgdAAQggAAgggJgAgogRIgIAJQgXAKAAACQAAAEAYAHQAZAIARAAQALAAANgEQANgFAAgFQAAgDgIgFQgEgCgBgHQgEgNgQgBIgGgBIAFAAIgVgBIgBAAQgKAAgGAHgAAsBfIAAAAgAAtBcIAHgNIABgCIABgCIABgDIAEgIIABgCIAAAAIgEAdIgMAEIABgDg");
	this.shape_27.setTransform(12.3,0);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgiANQABgDAFAAIAqAFIAJgDQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABQAAAGgUgBQgoAAAAgHgAgjAAQgGgBgEgDQgOgEAAgHQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAQAHgBAFAIQAFADALACIALAAIAgABIAVgBIAKgIIALgGQABAAAAAAQABAAAAAAQABABAAAAQAAABAAABQAAAEgMAGQgBADgEACQgHACgVAAQgoABgKgCg");
	this.shape_28.setTransform(12,0.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFCC99").s().p("AhPBeQgSgegZgfIADgzIAGgJQBKh1CIBBIABACQASAMAHAVIgEAGIg5BVIgCAPIAAAAIgBACIgEAIIgBADIgBACIgBACIgHANIgBADQgeAIgdAAQggAAgggJgAglARQAAAIAnAAQAVAAAAgGQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAgBAAIgJADIgpgFQgGAAAAADgAg/gKQAAAGAOAEQAEACAHABQAKADAnAAQAVAAAIgEQADgCABgCQAMgGAAgEQAAgBAAAAQAAgBgBgBQAAAAAAAAQgBAAgBAAIgKAHIgLAIIgVAAIggAAIgKgBQgMgCgFgDQgFgHgHAAQgBAAAAAAQgBAAAAAAQAAABgBAAQAAABAAABgAAsBfIAAAAgAAtBcIAHgNIABgCIABgCIABgDIAEgIIABgCIAAAAIgEAdIgMAEIABgDg");
	this.shape_29.setTransform(12.3,0);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgZALQgLgDgBgHIgGgPQAbAHAaAAQAXAAALgCIgFAHQgEAFgCAKQgBACgKAAQgZAAgWgEg");
	this.shape_30.setTransform(9.9,0.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgcAQIgEgPIgFgJQgdgIAAgJQAAgBAAAAQAAgBABAAQAAgBABAAQABAAABAAQANAKAQAFQAdAIAcAAIAdgBIAFgCIAFgDQABAAABAAQABABAAAAQABABAAAAQAAABAAABIgBABIAAABQgIALgCAHIgFAPQgCABgMAAQg9AAgEgNgAgXAJQABAHALADQAWAEAZAAQALAAAAgCQACgKAFgGIAEgGQgLABgXAAQgaAAgagGIAFAPg");
	this.shape_31.setTransform(8.5,-0.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFCC99").s().p("AhPBeQgSgegZgfIADgzIAGgJQBKh1CIBBIABACQASAMAHAVIgEAGIg5BVIgCAPIAAAAIgBACIgEAIIgBADIgBACIgBACIgHANIgBADQgeAIgdAAQggAAgggJgAhogeQAAAIAdAJIAFAKIAEAOQAEANA+AAQALAAABgBIAGgPQACgHAIgLIAAgBIABgBQAAgBAAgBQgBgBAAAAQgBAAAAgBQgBAAgBAAIgFADIgFACIgcABQgdAAgdgIQgRgFgNgKQgBAAAAAAQgBAAAAAAQgBABAAABQAAAAAAABgAAsBfIAAAAgAAtBcIAHgNIABgCIABgCIABgDIAEgIIABgCIAAAAIgEAdIgMAEIABgDg");
	this.shape_32.setTransform(12.3,0);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(1,1,1).p("AgnBCQABgCABgBQADgGAEgHQABgBAAgBQAAgBAAgBQABgCAAgBQACgEACgEQABgBAAgBQAAAAABAAQAHgLAHgJQAIgLAGgIQAOgQALgWQAFgKAEgL");
	this.shape_33.setTransform(20.7,2.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgEANQgdgMgGgLIgLAHIgDgDQAAgHAMgDIALgJQAAAAABAAQABAAAAAAQAAABABAAQAAABAAABIgHAIQAAAMAlAMIAXAIIAcAFQAAADgFABQgYAAgdgOg");
	this.shape_34.setTransform(8.1,-1.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFCC99").s().p("AhPBeQgSgegZgfIADgzIAGgJQBKh1CIBBIABACQASAMAHAVIg9BbIgCAPIAAAAIgBACIgEAIIgBADIgBACIgBACIgHANIgBADQgeAIgdAAQggAAgggJgAgvgDQAeANAXAAQAGAAAAgDIgcgGIgWgHQgmgNAAgLIAGgJQAAgBAAAAQAAgBgBgBQAAAAAAAAQgBAAgBAAIgLAJQgMADAAAHIADADIAMgHQAGAMAcAMgAAsBfIAAAAgAAtBcIAHgNIABgCIABgCIABgDIAEgIIABgCIAAAAIgEAdIgMAEIABgDg");
	this.shape_35.setTransform(12.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},129).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_4}]},2).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_11},{t:this.shape_10}]},3).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},5).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_12}]},1).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_12}]},1).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_12}]},2).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_12}]},1).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_12}]},3).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_12}]},2).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-10.3,25.7,20.8);


(lib.ProMouth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_135 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(135).call(this.frame_135).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgtA9IgBgBIAAABQgDACgDgFIgBgBIAAgDIgBgBQAHgdgHgZIAEgCQAJAEABALIAAADQACAEAAAFIgCAZIAAABQAKAGAKAAQADgDAFgCQADgBAEABIAEgCIAFgDIACAAIAIgGQABgFAGAAIAGgFIAAAAIACgCQAAgEABgEIAAAAIgBgEQgGgGAIgFIAEgEIAAgBQgGgCADgIIABgDQgIgEADgHQgXALgYgFQgHgCAAgDIgOAAQgJAAgIgDIAAABQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIgEgBIgKgOIABgBIAiAEQA+AGAxgjIABAAQgEAJABAJQACAOgCAMIgCAIIgCAFIAAADQgKAZggAOIAAACIgBADQACAEADgCIABgBIAAgDIAMgHIAFgEIgQASIgHAEIAAABIgDAAIgGAFIgBABQgRAJgSAAQgMAAgMgEg");
	this.shape.setTransform(23.4,-5.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhQCUQgUgKACgQQgFABgCgEQAAgBAAgBQABAAAAgBQAAAAABgBQAAAAABAAQAKgQgFgSIgRgCQgPgDACgRIgHgDIgLgRIgKgNIAAgEIAAgBQASgUAagEIADAAQAGAGgQACIgKACQgMAGgJAKQAGAIAGAJIAIALQAEACADADQgCAZAagEIAAgBQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAABAAIABADIACgBQAUgEARACQgRAHgUAAQAIATgKASQAEAQAQAJQAdAPAdgOIgBgCQAqgbA1gDQANgBANgFQA0gTAhgsQADAJgKAKQg2A4hNAGQgfADgaANIAHAAQgUARgXAAQgRAAgTgJgAhqAgIAAACIAAAAQgGABAAgFIAAgBQgMgGgGgLQABgBAAAAQAAgBABAAQAAAAABAAQABAAAAABQAJAHAIAFQALgtgWgmQgCgDgBgCIgEgGIAAAAQghgHgVgXIgCABQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBIACgCIAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAAAABAAQAQgNAEgXIABgLIAGgCQACAVgQAXQgEAFgFADQAUATAaAIIgHgIIABAAIAJAJQANADAPABQAvADAsgNQAbgIAPgWQADAFgEAFQAEAFgHAIIAAABQAJAxggAeIgBABIAAAEQABAGgHAIQgfAegkAAQgSAAgUgIgAheAeQAdAKAfgPIABgBIAJgGIAHgEIAEgDQAKgIAFgJIgDADIgFADIgMAHIAAADIgBABQgDACgCgEIABgDIAAgCQAfgNAKgaQADgIABgIQACgMgCgOQgBgJAEgJIABgCIgCACQgwAjg/gGIgigEIgCgBIABACIAJAOQAHALADAMQAHAagHAcIgBAEIADABQACAFAEgCIABAAg");
	this.shape_1.setTransform(28.3,-2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC9966").s().p("AizCIIhMhSIAAgXIgDAAQgLgjADgnIgMgRIAAg6IAGgGQA0gkBAgSIgBAKQgEAXgQAOQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAgBABIAAAAIgCACQAAABAAAAQABABAAAAQAAAAABAAQABAAAAAAIACAAQAVAXAhAGIAAAAIAEAGQABADACACQAWAngLAuQgIgGgJgHQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAGAMAMAFIAAABQAAAEAGAAIAAgBIAAgBQA7AXAtgtQAIgHAAgHIAAgBIAAgEQAggegJgyIAAAAQAHgIgEgFQAEgFgDgFQgPAWgbAIQgsAMgvgCQgOgBgOgEIgJgJIgBABIAHAHQgZgIgVgSQAFgEAEgFQARgWgDgVQA4gQBBgDIBigGQAAABAAAAQAAABAAAAQAAAAABABQAAAAAAAAQBJAoAkBUIBRAvQAeBMgSBgIgvApQhQAYhMAAQiBAAh3hGgAhMB7QAtAWAhgdIgFgBQAZgNAfgCQBNgGA2g4QAKgLgDgIQghArg0AUQgNAEgNABQg1AEgqAaIABACQgdAPgdgQQgQgIgDgQQAJgTgIgSQAUAAARgIQgRgCgUAFIgCAAIgBgCQgBAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIAAACQgaAEACgaQgDgDgEgBIgIgMQgGgJgGgGQAJgKAMgGIAKgDQAQgBgGgIIgDABQgaAEgSAUIAAACIAAADIAKAMIALARIAHAEQgCARAPADIASACQAEASgKAQQAAAAgBAAQAAAAgBABQAAAAAAABQgBABAAAAQACAFAFgBQgBAQATAJgAhbAFIAAAAIABABIgBgBgAhkABIABgCIABAAIAAACIABACIgDgCgAAWg/IACgFIACgHQgBAIgDAHIAAgDgAh3hfIACABIgBABIgBgCgAAch3IACgCIgBACIgBAAg");
	this.shape_2.setTransform(27.9,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSAEQgSgBgMABIgDgEIABgBIAiADIAJABQARABASgDIAEgBIgFACQgJADgRAAIgTgBgAA0gEIgBABIgFABIAGgCg");
	this.shape_3.setTransform(21.2,-9.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC9966").s().p("AhNC+IhegiQAFAFAAAFQgBABAAAAQAAAAgBAAQAAABgBAAQgBAAgBAAQgRAAgbhBIg4g8IAAgXIgDAAQgLgjADgnIgMgRIAAg6IAGgGQA0gkBAgSIgBAKQgEAXgQAOQgBAAAAAAQAAAAgBAAQAAAAAAABQgBAAAAABIAAAAIgDACQABAAAAABQAAABABAAQAAAAABAAQAAAAABAAIACAAQAUAXAiAGIAAAAIAEAGIAAACIgJACQgMAGAAAHQAAAKAQANIAEAEIgBABIAEADQAIAJgBAHQAAALgDALQgFAMAAATIgBANQAAANAHAKQASAhBIAAQAHAABlgxQAsgLAMgBQBEgCAIgEQAEgBAGgHQANgOAAgVQACgwgOAAQgFAAAAAEQAKAoAAAEQAAAMgMATIgLAGQhHAAgOAGQghAGgOAEQgUAIgqAWQgiAUgFAAQhAAAgRgbQgHgKAAgaQAAgRAEgKQADgKAAgPIAAgEIAUASQABAAABAAQAAAAABgBQAAAAAAAAQABAAAAgBIABgDQgWgagLgFIgHgIQgOgNAAgEQgBgFAIAAIBMgCQAEAAAGgDQAZgGAJgEQAfgZAAgBIgBgDIgDAAIgQALIgLAFQgsAMgvgCQgPgBgNgEIgJgJIgBABIAGAHQgZgIgUgSQAFgEADgFQARgWgCgVQA4gQBBgDIBhgGQAAABABAAQAAABAAAAQAAAAAAABQABAAAAAAQAMAGALAIQAGgCAGAAQALAABSBEQASAMAiANQARALAJAXQAWA0AFATQAIAaAAAmIAAAnQgBAHgQAtQgGASgsAUQg8AbhYAAQhHAAhWgbgAjjAGIABAAIgBgBgAiIhqIADAAIgBACIgCgCg");
	this.shape_4.setTransform(29.5,1.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AiOBqQgGgLAAgNIABgNQAAgUAEgLQAEgLAAgMQAAgHgHgIIgEgDIABAAIgFgEQgPgOAAgJQAAgHAMgGIAJgDIAAgBIgEgGIgBAAQghgGgUgYIgCABQgBAAAAAAQgBAAAAgBQgBAAAAgBQgBAAAAgBIADgCIAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABAAQAQgNAEgXIABgLIAFgCQADAVgRAXQgDAFgFADQAUATAZAIIgGgIIABAAIAJAJQANADAPABQAuADAsgNIAMgEIARgLIADAAIABADQAAABggAYQgJAEgZAHQgGADgEAAIhMABQgIAAAAAGQAAAEAPANIAHAHQALAFAVAZIgBAEQABAAgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAIgUgRIAAAEQAAAOgDAKQgEAKAAASQAAAbAGAJQASAbBAAAQAEAAAkgTQApgXAUgHQAOgFAhgGQANgGBIABIALgHQAMgUAAgLQAAgFgKgmQAAgFAFAAQAOAAgCAwQAAAUgNAQQgGAGgFACQgHADhEADQgMAAgtALQhkAygIAAQhHAAgTghgAhzgtQAiACAMgFIAGgCIgFABQgRADgSgBIgKgBIghgEIgDgBIACACIADAFIAKAAIATABgAgxg1IAEgBIACgBIgGACg");
	this.shape_5.setTransform(30.8,-4.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CC9966").s().p("AhNC+IhegiQAFAFAAAFQgBABAAAAQAAAAgBAAQAAABgBAAQgBAAgBAAQgRAAgbhBIg4g8IAAgXIgDAAQgLgjADgnIgMgRIAAg6IAGgGQA0gkBAgSIgBAKQgEAXgQAOQgBAAAAAAQAAAAgBAAQAAAAAAABQgBAAAAABIAAAAIgDACQABAAAAABQAAABABAAQAAAAABAAQAAAAABAAIACAAQAMANAQAIQgKAAAJAUQAKAVAQANIAEAEIgBABIAEADQAIAJgBAHQAAALgDALQgFAMAAATIgBANQAAANAHAKQASAhBIAAQAHAABlgxQAsgLAMgBQBEgCAIgEQAEgBAGgHQANgOAAgVQACgwgOAAQgFAAAAAEQAKAoAAAEQAAAMgMATIgLAGQhHAAgOAGQghAGgOAEQgUAIgqAWQgiAUgFAAQhAAAgRgbQgHgKAAgaQAAgRAEgKQADgKAAgPIAAgEIAUASQABAAABAAQAAAAABgBQAAAAAAAAQABAAAAgBIABgDQgWgagLgFIgHgIQgOgNgPgTQgOgUAvASIA7AJIgKgEIgigLQgNgBgMgEIgFgFIgDgBIAEAFQgZgIgUgSQAFgEADgFQARgWgCgVQA4gQBBgDIBhgGQAAABABAAQAAABAAAAQAAAAAAABQABAAAAAAQAMAGALAIQAGgCAGAAQALAABSBEQASAMAiANQARALAJAXQAWA0AFATQAIAaAAAmIAAAnQgBAHgQAtQgGASgsAUQg8AbhYAAQhHAAhWgbgAjjAGIABAAIgBgBgAiFhqIgBAAIgCAAIACAAIAGAAIgFAAg");
	this.shape_6.setTransform(29.5,1.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AiOBqQgGgLAAgNIABgNQAAgUAEgLQAEgLAAgMQAAgHgHgIIgEgDIABAAIgFgEQgPgOgKgVQgJgTAKgBQgQgHgMgOIgCABQgBAAAAAAQgBAAAAgBQgBAAAAgBQgBAAAAgBIADgCIAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABAAQAQgNAEgXIABgLIAFgCQADAVgRAXQgDAFgFADQAUATAZAIIgEgFIADABIAFAFQAMADANABIAiAMIAKAEIg8gJQgugSAOATQAOAUAPANIAHAHQALAFAVAZIgBAEQABAAgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAIgUgRIAAAEQAAAOgDAKQgEAKAAASQAAAbAGAJQASAbBAAAQAEAAAkgTQApgXAUgHQAOgFAhgGQANgGBIABIALgHQAMgUAAgLQAAgFgKgmQAAgFAFAAQAOAAgCAwQAAAUgNAQQgGAGgFACQgHADhEADQgMAAgtALQhkAygIAAQhHAAgTghgAiSg0IAAAAIAFAAIgGAAIgCgBIACABIAAAAIABAAg");
	this.shape_7.setTransform(30.8,-4.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgZAaIgHgCQgKgCgGgDQgZgJgHAAIgDAAIAAAAQABgHgHgLIgCgCIACABIAEABQAKADAKAAQAdAAAsgIQAagEAhgJIAKAAIACABIADADIADAFIACALIAFAUQAAAIgFABQgMAEg0AAg");
	this.shape_8.setTransform(22.2,-10.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CC9966").s().p("AhNC+IhegiQAFAFAAAFQgBABAAAAQAAAAgBAAQAAABgBAAQgBAAgBAAQgRAAgbhBIg4g8IAAgXIgDAAQgLgjADgnIgMgRIAAg6IAGgGQA0gkBAgSIgBAKQgEAXgQAOQgBAAAAAAQAAAAgBAAQAAAAAAABQgBAAAAABIAAAAIgDACQABAAAAABQAAAAAAAAQAAABAAAAQABAAAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQACAAAOAHQAIADAFADIABACQAHAMAAAHIAAAAIgHAHIgBAEIgBACQAAAEAEABQAJAPAMAKIAEAEIgBABIAEADQAIAJgBAHQAAALgDALQgFAMAAATIgBANQAAANAHAKQASAhBIAAQAHAABlgxQAsgLAMgBQBEgCAIgEQAEgBAGgHQANgOAAgVQACgwgOAAQgFAAAAAEQAKAoAAAEQAAAMgMATIgLAGQhHAAgOAGQghAGgOAEQgUAIgqAWQgiAUgFAAQhAAAgRgbQgHgKAAgaQAAgRAEgKQADgKAAgPIAAgEIAUASQABAAABAAQAAAAABgBQAAAAAAAAQABAAAAgBIABgDQgWgagLgFIgHgIQgKgJgKgMIAAAAQAAgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBAAIgDgEQAEgEADAAIAgAKIAOAEIAGACIABABQADABAsAAQA4AAAOgFQAHgDAAgKQAAgGgFgSQgBgIgCgEQAAgEgCgDQgFgFgMAAQgPAAgHACQgPAGgSAEQgpAJgmAAQgSAAgPgGQgMgHgHAAQAFgEADgFQARgWgCgVQA4gQBBgDIBhgGQAAABABAAQAAABAAAAQAAAAAAABQABAAAAAAQAMAGALAIQAGgCAGAAQALAABSBEQASAMAiANQARALAJAXQAWA0AFATQAIAaAAAmIAAAnQgBAHgQAtQgGASgsAUQg8AbhYAAQhHAAhWgbgAjjAGIABAAIgBgBg");
	this.shape_9.setTransform(29.5,1.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AiOBqQgGgLAAgNIABgNQAAgUAEgLQAEgLAAgMQAAgHgHgIIgEgDIABAAIgFgEQgMgLgIgOQgEgCAAgEIABgBIABgEIAHgIIACAAQAHAAAaAKQAFADALABIAGADIAxABQA1AAALgEQAEgCAAgHIgEgWIgBgKIgEgGIgCgCIgCgBIgLgBQghAJgaAFQgtAHgdAAQgKAAgKgDIgEgBIgCAAQgEgEgIgDQgOgHgCAAQgBAAgBAAQAAAAgBABQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQgBAAAAgBIADgCIAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABAAQAQgNAEgXIABgLIAFgCQADAVgRAXQgDAFgFADQAHABAMAGQAOAHASAAQAnAAAogJQASgEAQgGQAHgDAOAAQAOAAADAGQACACABAEQACAEABAIQAFASAAAHQAAAKgHACQgNAFg5AAQgsAAgDgBIgCAAIgFgCIgPgEIgfgKQgDAAgEADIADAEQABAAAAABQABAAAAAAQABABAAAAQAAABAAAAIAAAAQAKANAKAJIAHAHQALAFAVAZIgBAEQABAAgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAIgUgRIAAAEQAAAOgDAKQgEAKAAASQAAAbAGAJQASAbBAAAQAEAAAkgTQApgXAUgHQAOgFAhgGQANgGBIABIALgHQAMgUAAgLQAAgFgKgmQAAgFAFAAQAOAAgCAwQAAAUgNAQQgGAGgFACQgHADhEADQgMAAgtALQhkAygIAAQhHAAgTghg");
	this.shape_10.setTransform(30.8,-4.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AABAzQgOABgOgFIgBAAIAAAAQgEACgCgFIgBgBIgBgDIAAAAQAHgegHgZIAEgCQAIAFACALIAAACQACAEAAAFIgBAUQAEgBAGgBIAVABIARgBQgRgQAAgDQAAgKALAAQAFAAAPAKIADADIAJAOIAAAEIgBAGIAAABQgFAIgSAFIgTACIgJgBgAguglIgGgKQAEABADgCQAEgCAGABIATAJIAEADIgKAAQgJAAgIgCIAAAAQAAABAAAAQgBABAAAAQAAAAgBAAQAAABAAAAIgFgBgAgqgyIgGgBIAKABIgEAAg");
	this.shape_11.setTransform(21.6,-4.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CC9966").s().p("AizCIIhMhSIAAgXIgDAAQgLgjADgnIgMgRIAAg6IAGgGQAxgiA8gSIgCgQQAAgIAGAAIAAAAQAGABAHAOQABAEAAALIAAADQAHARAAAPQgGAUAAAGQAAAGAMAHQADACAHACIADABIAAABQABADACACQAWAngLAuQgIgGgJgHQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAGAMAMAFIAAABQAAAEAGAAIAAgBIAAgBQAgANAdgIIAEAAQAYgKAEgDQAFgCAAgJQAAgXgrgeQgWgRgOgHQgGgDgMgBIAAAAIgKAAQgJgBgFgEQgPgKAAgDQAAgGAGgTQAAgKgHgaIgDgLQA2gOA9gDIBigGQAAABAAAAQAAABAAAAQAAAAABABQAAAAAAAAQBJAoAkBUIBRAvQAeBMgSBgIgvApQhQAYhMAAQiBAAh3hGgAhMB7QAtAWAhgdIgFgBQAZgNAfgCQBNgGA2g4QAKgLgDgIQghArg0AUQgNAEgNABQg1AEgqAaIABACQgdAPgdgQQgQgIgDgQQAJgTgIgSQAUAAARgIQgRgCgUAFIgCAAIgBgCQAAAAgBAAQAAAAAAAAQAAABAAAAQAAAAAAAAIAAACQgaAEACgaQgDgDgEgBIgIgMQgGgJgGgGQAJgKAMgGIAKgDQAQgBgGgIIgDABQgaAEgSAUIAAACIAAADIAKAMIALARIAHAEQgCARAPADIASACQAEASgKAQQAAAAgBAAQAAAAgBABQAAAAAAABQgBABAAAAQACAFAFgBQgBAQATAJgAhbAFIAAAAIABABIgBgBgAhkABIABgCIABAAIAAACIABACIgDgCgAgJgFIAAgFIAAgFIABAEQAAADgBADgAgVgfIAAgBIgKgKQgPgSgdgTIgEgCQAQAIAKAJIAeAbIAGAJIgEgDgAhihaIAGACIANAHIgTgJg");
	this.shape_12.setTransform(27.9,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhaCgQgUgJABgQQgEABgCgFQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAABAAQAJgQgEgSIgRgCQgQgDACgRIgGgEIgLgRIgKgMIAAgEIAAgCQARgUAagEIAEgBQAGAIgQABIgKADQgNAGgJAKQAHAHAFAJIAIAMQAEABADADQgBAaAagFIgBgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAIACACIACAAQAUgFARACQgSAIgTAAQAHASgJATQADAQAQAIQAdAQAegPIgCgCQAqgaA2gEQANgBAMgEQA1gUAggrQADAIgKALQg1A4hOAGQgeACgaANIAGABQgTAQgXAAQgRAAgTgJgAh0AtIgBABIAAABQgFAAAAgEIAAgBQgMgGgGgMQAAAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQAIAHAJAFQAKgsgVgnQgDgDAAgCIgBgBIgDgBQgHgCgDgCQgMgHAAgGQAAgGAHgUQAAgPgHgRIAAgDQAAgLgCgEQgHgPgGAAIgCgCIAAgDIACAAQAFAAAFAIQADACABAHIABAGIAEALQAGAaAAAKQgGATAAAGQAAADAPAKQAGADAIACIAGAAIAEAAIABAAQALABAHADQANAHAWARQArAdAAAXQAAAJgEADQgEADgYAKIgFAAQgLADgLAAQgSAAgUgIgAhDAvIATgCQASgFAFgIIABgBIAAAAQACgDAAgDIgCgEIgIgOIgGgHIgdgbQgLgJgPgIIgOgHIgFgCQgGgCgEADQgDABgEgBIAGAKQAGALADALQAIAZgIAeIAAADIACABQADAFADgCIABAAQAPAGAOgCIAJABg");
	this.shape_13.setTransform(29.3,-3.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgyAAIgBAAQAIgCAGgEQALgIAeAAQAZAAAXANIgBABQgKAAAAAAIhbAPg");
	this.shape_14.setTransform(19.5,-9.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhtCmIAAAAQADAAAEACIgHgCgAhzBvQgFgIgJg1QgGgmgggHQgRgEgEgCQgJgGAAgQQAAgMALgEIAAgGQAAgGgDgEIgCAAQggAAAIgWQAAgLABgBIAOgNQAGgFAGgRIgCgFIAAgDQAAgLgBgEQgHgOgGgBIgCgCIAAgDIACAAQAEAAAGAIQADACABAHIABAGIADALIACAGIABAGIAAABIAAAAIAAACQAAALgMALQgMALAAAHQAAAPAQAAQAMAAAKgHQAKgIAkAAQAhAAAMAHQAGADAEAHQAVAPATABIANAAQAAAFgNAAQgPAAgVgLQgeAGg8AGQgjAEAAALQAAARAYAHIAeAIQAGAJAHAdIAKAtQAJAeAQAAQA7AAAWgNQA/gjAUgIQARgHBGgDQALgCAMgKQAWgHAAgYIAAgKQgBgLgEgNIADgCQANAAgDAjIAAABQAAAYgNAIQgYAPhjANQgrAGgVAYQgLAahGAAQgoAAgLgRgAilg/QgHAFgHABIAAACIAAAOIBcgOQAAgCAKAAIADAAIgCgBQgXgMgZAAQgfAAgKAHg");
	this.shape_15.setTransform(32.4,-3.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CC9966").s().p("AizCIIhMhSIAAgXIgDAAQgLgjADgnIgMgRIAAg6IAGgGQAxgiA8gSIgCgQQAAgIAGAAIAAAAQAGABAHAOQABAEAAALIAAADIACAFQgGARgGAFIgOANQgBABAAALQgIAWAgAAIACAAQADAEAAAGIAAAGQgLAEAAAMQAAAQAJAGQAEADARAEQAgAHAGAlQAJA1AFAIQALARAoAAQBGAAALgaQAVgYArgGQBjgNAYgPQANgHAAgYIAAgBQAbBKgRBdIgvApQhQAYhMAAQiBAAh3hGgAhACAIAHACQgEgCgDAAIAAAAgAhDA1IgKgtQgHgcgGgJIgegJQgYgHAAgRQAAgLAjgEQA8gGAegGQAUALAPAAQANAAAAgFIgNAAQgSgBgVgPQgEgHgGgDQgMgHghAAQgkAAgKAIQgKAHgMAAQgQAAAAgPQAAgHAMgLQAMgLAAgLIAAgCIAAAAIAAgBIgBgFIgCgHIgDgLQA2gOA9gDIBigGQAAABAAAAQAAABAAAAQAAAAABABQAAAAAAAAQA9AhAiBAQAHgcAYAAQAXAAAMAlQAFANAAAYIAAAOIASAKIAAAKQAAAYgWAGQgMAKgLACQhGADgRAHQgUAIhAAjQgWANg6AAQgQAAgJgegAgghfIABgBIACABIgDAAg");
	this.shape_16.setTransform(27.9,0);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAAAAIABAAIgBABg");
	this.shape_17.setTransform(26.7,-6.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CC9966").s().p("AizCIIhMhSIAAgXIgDAAQgLgjADgnIgMgRIAAg6IAGgGQA0gkBAgSIgBAKQgCAPgHAKIgBABIgMALQgFAGgCAGQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAIABAAQAEgIAPgNIACAAIABgBIAEgLIAFgTIAAgCIAAgFIADgBQADgDAFAAIADAAQAygMA5gDIBigGQAAABAAAAQAAABAAAAQAAAAABABQAAAAAAAAQBJAoAkBUIAMAHQAAAKgCADIgQAbQgEAHghAMQgoANgNAJQgeAUgQAeIgXAZQgTAVgqAAQgTAAgPgKQgVgMAAgWQAAgKAGgRQAGgRAAgQQAAgagPgEQgZAAgOgBQgMgBgHgGQgFgCgFgHQgJgGgDgJQgCgGAAgYIAAgUIAAgBIABgHQgEABgBAMIAAAPQAAAVACAFQABAJADAEQAKAOAHAAIAAAAQAHAIAOACIAYABQARAAAHAFQACACACAGIABAPQAAAPgGARQgGASAAAKQAEAwA4AAQALAAAWgIQAVgHAGgFQAPgNAJgMQAQgXAdgcQAGgFAogQQAtgTACgDIARgdIACgKIBBAlQAeBMgSBgIgvApQhQAYhMAAQiBAAh3hGgAgLhAIAAAAIABgCgAidhrQgSAAAAATQgDAVAdAAQAGAAAGgIIAFgIQADgFAAgFQAAgHgEgCQgGgGgJAAIgJABg");
	this.shape_18.setTransform(27.9,0);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AhsBiQAAgKAHgSQAFgSAAgPIgBgPQgCgHgBgBQgIgGgRAAIgXAAQgPgDgHgHIAAAAQgHAAgKgNQgDgEgBgJQgBgGAAgUIAAgPQAAgMAEgCIgBAHIAAABIAAAVQAAAXACAHQADAJAJAGQAFAGAFACQAHAFANABQANACAZgBQAPAEAAAbQAAARgGARQgFARAAAJQAAAWAUANQAPAJATAAQAqAAAUgUIAWgZQAQgeAegUQAOgJAngPQAhgMAEgGIAQgbQACgDAAgJIAAgKIgHghIAAgCIACgBQAGAAAEAkIgBAMIgCALIgQAbQgDAEgtASQgoARgGAGQgdAbgQAXQgIAMgQAOQgGAFgVAHQgWAHgLAAQg4AAgEgvgAixg0QAAgUASAAIAJgBQAJAAAGAGQAFADAAAGQAAAFgEAGIgFAHQgGAIgGAAQgcAAACgUgAi1hfIAMgMIABAAQAHgLACgOIACgLIAFgBIAAAFIAAABIgEATIgFALIgBABIgCAAQgPAOgEAHIgBAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAABgBAAQACgGAFgFg");
	this.shape_19.setTransform(28.1,-3.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#990000").s().p("AAUAaIgJgCQgOAAgPgHIAAgBIgBAAQgDACgCgFQABgEAAgJIABgDQADgKABgJQAAgBABgBQAAAAAAgBQABAAAAAAQABAAAAAAQAMAAANAbQAIASAHAGIgFAAg");
	this.shape_20.setTransform(18.6,-4.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAOAmQgKgDgEgMIgEgJIAFABIASAAQgLgMgDgEIARAJIAGADIAGABIAGACIADABIACAAIAAABIAAABIAAACIAAABIAAABIgBAGIgBABQgDADgFACQgHADgLACIgBAAIgCAAgAgHAIQgGgQgKgIQAEgDAEAAQAOAAAAAQIgFANIgBgCgAgkgUIgEABIAAgHIABABIgGgJQAFABADgBQAEgCAFABIATAJIAEACIgKAAQgJABgHgDIAAABQgBAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIAGADIAAAAIAAABQgEgBgEAAgAgjglIgGAAIAKAAIgEAAg");
	this.shape_21.setTransform(20.9,-5.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CC9966").s().p("AhsC5Qg4gQgFgRQgDgKgUgIQgTgHAAgJQAAgIAEgEIg0g3IAAgYIgDAAQgLgjADgnIgMgRIAAg6IAGgGQAxghA8gTIgCgQQAAgIAGABIAAAAQAGAAAHAOQABAEAAALIAAADQAHARAAAQQgGATAAAHQAAAFAMAHQADADAHABIADACIAAABQABACACACIACAEIgCgBIgBAQIgCAGIgBgCIgEAAQgbABgVARIAAACIAAAEIAHAMIABABIAJATIAHAEQgEAQAPAFIASAEQACASgMAPQgBAAAAAAQgBAAAAABQgBAAAAABQAAAAAAABQABAFAFgBQgEAQAUAMQArAbAngYIgHgBQAdgJAfABQBRAEA+gwQAMgJgCgJQgnAng5AMQgNADgOgBQg2gDgwAUIABACQggALgcgTQgPgLgCgQQAMgRgFgUQAUADATgFQgSgFgVACIgCAAIgBgCQAAAAgBAAQAAAAAAAAQAAABAAAAQAAAAAAAAIAAABQgbABAFgYQgDgDgEgCIgHgNIgDgGIgHgMQAKgIAOgEIAKgCQAKABACgDIAAABIgBALIgDAKIgJgIIgIgHQAAAAgBAAQAAgBgBAAQAAABgBAAQAAAAgBABIAFAJQAEAGAHAFIAAABQAAAEAGAAIAAgBIAAgBQAgARAegEIAFABIAagHIAFgCQAEgCABgIIAAgBIAAgBIABgFIADABQgLgNgUgOQgWgQgOgIQgGgDgMAAIAAAAIgKgBQgJgBgFgEQgPgKAAgCQAAgHAGgSQAAgLgHgZIgDgLQA1gPA+gDIBigGQAAABAAAAQAAABAAAAQAAABABAAQAAAAAAAAQBJApAkBTIAGAEIAJgBQA+AAAWAwQAJAVAAAiQAAAIgGAmIAGAjQAAAbgCAHQgHARgdAQQgpAWgLAAQgbACgJAHQgJAHgqAAQisAAgqgZgAhzgfIAAAAIABABIgBgBgAgdgfIABgGIAAgBIAAgBIAAgCIABADIAAABIAAAAQAAADgCADgAghgsIgCgCQgPgRgdgUIgEgCQAQAJAKAJIAbAYIgDgBgAhmheIAGACIANAHIgTgJg");
	this.shape_22.setTransform(28.3,0.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AhxCNQgTgLADgQQgFAAgBgFQAAAAAAgBQABgBAAAAQAAAAABAAQABgBAAAAQAMgOgCgTIgRgEQgQgFAEgRIgGgEIgJgSIgBgCIgIgMIABgEIAAgBQAUgRAcgBIADAAIACADIABgGIABgRIACABIgBgDQgDgDAAgCIgBgBIgDgCQgHgBgDgDQgMgHAAgFQAAgGAHgUQAAgQgHgQIAAgEQAAgLgCgEQgHgOgGAAIgCgDIAAgCIACgBQAFAAAFAIQADADABAGIABAHIAEALQAGAZAAALQgGATAAAGQAAADAPAJQAGAEAIABIAGABIAEAAIABAAQALAAAHAEQANAHAWAQQAUAOALAMIgDAAIAAAFIAAABIgBABQgBAHgEACIgEACIgbAHIgEgBQgfAEgfgQIgBABIAAAAQgGAAABgEIAAgBQgHgFgFgGIgEgJQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAIAHAGIAJAIIADgKIACgKIAAAAQgCACgKAAIgLABQgNADgLAJIAHALIADAHIAHAMQAEACADAEQgFAZAbgBIAAgBQAAgBAAAAQAAAAAAAAQABAAAAgBQAAAAAAAAIACADIACAAQAVgCARAEQgTAFgUgCQAGATgMARQABAQAPALQAcATAhgKIgCgCQAwgVA3ADQANABAOgDQA4gMAngnQACAJgLAJQg/AxhQgFQgfgBgdAJIAGABQgSAMgTAAQgWAAgXgPgAhlgXIAFADQAKAHAHARIAAABIACAEIAEAKQAFALAKADIAEAAQAKgBAHgDQAFgDADgDIABgBIAAAAQACgCAAgDIAAgBIAAAAIAAgEIgBAAIAAgBIgBgBIgbgXQgLgJgPgJIgOgHIgFgCQgGgBgEACQgDACgEgBIAFAIIgBAAIAAAGIAEgBQAEAAAEACgAhFAhQgHgHgIgSQgOgbgMAAQAAAAgBAAQAAAAgBABQAAAAAAAAQgBABAAABQgBAJgDAJIgBADQAAAKgBAFQACAEADgCIABABQAPAHAPABIAJABIAFABIAAAAg");
	this.shape_23.setTransform(28.1,-5.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgtA9IgBgBIAAABQgDACgDgFIgBgBIAAgDIgBgBQAHgdgHgZIAEgCQAJAEABALIAAADQACAEAAAFIgCAZIAAABQAKAGAKAAQADgDAFgCQADgBAEABIAEgCIAFgDIACAAIAIgGQABgFAGAAIAGgFIAAAAIACgCQAAgEABgEIAAAAIgBgEQgGgGAIgFIAEgEIAAgBQgGgCADgIIABgDQgIgEADgHQgXALgYgFQgHgCAAgDIgOAAQgJAAgIgDIAAABQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIgEgBIgKgOIABgBIAiAEQA+AGAxgjIABAAQgEAJABAJQACAOgCAMIgCAIIgCAFIAAADQgKAZggAOIAAACIgBADQACAEADgCIABgBIAAgDIAMgHIAGgEIgRASIgHAEIAAABIgDAAIgGAFIgBABQgRAJgSAAQgMAAgMgEg");
	this.shape_24.setTransform(23.4,-5.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CC9966").s().p("AizCIIhMhSIAAgXIgDAAQgLgjADgnIgMgRIAAg6IAGgGQA0gkBAgSIgBAKQgEAXgQAOQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAgBABIAAAAIgCACQAAABAAAAQABABAAAAQAAAAABAAQABAAAAAAIACAAQAVAXAhAGIAAAAIAEAGQABADACACQAWAngLAuQgIgGgJgHQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAGAMAMAFIAAABQAAAEAGAAIAAgBIAAgBQA7AXAtgtQAIgHAAgHIAAgBIAAgEQAggegJgyIAAAAQAHgIgEgFQAEgFgDgFQgPAWgbAIQgsAMgvgCQgOgBgOgEIgJgJIgBABIAHAHQgZgIgVgSQAFgEAEgFQARgWgDgVQA4gQBBgDIBigGQAAABAAAAQAAABAAAAQAAAAABABQAAAAAAAAQBJAoAkBUIBRAvQAeBMgSBgIgvApQhQAYhMAAQiBAAh3hGgAhMB7QAtAWAhgdIgFgBQAZgNAfgCQBNgGA2g4QAKgLgDgIQghArg0AUQgNAEgNABQg1AEgqAaIABACQgdAPgdgQQgQgIgDgQQAJgTgIgSQAUAAARgIQgRgCgUAFIgCAAIgBgCQAAAAgBAAQAAAAAAAAQAAABAAAAQAAAAAAAAIAAACQgaAEACgaQgDgDgEgBIgIgMQgGgJgGgGQAJgKAMgGIAKgDQAQgBgGgIIgDABQgaAEgSAUIAAACIAAADIAKAMIALARIAHAEQgCARAPADIASACQAEASgKAQQAAAAgBAAQAAAAgBABQAAAAAAABQgBABAAAAQACAFAFgBQgBAQATAJgAhbAFIAAAAIABABIgBgBgAhkABIABgCIABAAIAAACIABACIgDgCgAAWg/IACgFIACgHQgBAIgDAHIAAgDgAh3hfIACABIgBABIgBgCgAAch3IACgCIgBACIgBAAg");
	this.shape_25.setTransform(27.9,0);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgtA9IgBgBIAAABQgDACgDgFIgBgBIAAgDIgBgBQAHgdgHgZQgDgMgGgLIgKgOIABgBIAiAEQA+AGAxgjIABAAQgEAJABAJQACAOgCAMIgCAIIgCAFIAAADQgKAZggAOIAAACIgBADQACAEADgCIABgBIAAgDIAMgHIAGgEIgRASIgHAEIAAABIgDAAIgGAFIgBABQgRAJgSAAQgMAAgMgEg");
	this.shape_26.setTransform(23.4,-5.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},93).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_7},{t:this.shape_6}]},2).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},3).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},3).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},2).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},5).to({state:[{t:this.shape_1},{t:this.shape_25},{t:this.shape_24}]},4).to({state:[{t:this.shape_1},{t:this.shape_25},{t:this.shape_26}]},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-20.6,55.7,41.3);


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


(lib.frb_rightOut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("AgqAcIAIgHQAKALASAAQAPAAAMgLQALgMAAgPQAAgQgLgMIAHgIQAOAPAAAVQAAATgOAPQgPAOgTAAQgVAAgPgOg");
	this.shape.setTransform(4.3,4.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_rightOut, new cjs.Rectangle(0,0,8.5,8.5), null);


(lib.frb_rightIn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D4D0D8").s().p("AghAXIAHgIQAIAJANAAQAMAAAIgJQAJgJAAgLQAAgMgJgJIAIgHQALANAAAPQAAAQgLAMQgNALgPAAQgRAAgLgLg");
	this.shape.setTransform(3.4,3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_rightIn, new cjs.Rectangle(0,0,6.8,6.8), null);


(lib.frb_leftOut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Symbol_22:0});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("AgqAHQAAgTAPgPQAPgPATAAQAVAAAPAPIgHAHQgNgMgQAAQgPAAgMAMQgMAMAAAPQAAASAMALIgHAHQgPgOAAgWg");
	this.shape.setTransform(4.3,4.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_leftOut, new cjs.Rectangle(0,0,8.6,8.6), null);


(lib.frb_leftIn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Symbol_23:0});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D4D0D8").s().p("AghAGQAAgQAMgLQALgMAQAAQAPAAANAMIgHAHQgJgJgMAAQgMAAgIAJQgJAIAAAMQAAAMAJAJIgHAHQgMgLAAgRg");
	this.shape.setTransform(3.4,3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_leftIn, new cjs.Rectangle(0,0,6.9,6.9), null);


(lib.frb_hitArea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("AhABBIAAiBICBAAIAACBg");
	this.shape.setTransform(6.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_hitArea, new cjs.Rectangle(0,0,13,13), null);


(lib.frb_dot_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_dot_disabled, new cjs.Rectangle(0,0,4,4), null);


(lib.frb_dot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_dot, new cjs.Rectangle(0,0,4,4), null);


(lib.frb_background_pressed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAVQgJgIAAgNQAAgLAJgJQAJgJALAAQANAAAIAJQAJAJAAALQAAANgJAIQgJAJgMAAQgLAAgJgJg");
	this.shape.setTransform(3,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_background_pressed, new cjs.Rectangle(0,0,6,6), null);


(lib.frb_background_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgUAVQgJgIAAgNQAAgLAJgJQAJgJALAAQANAAAIAJQAJAJAAALQAAANgJAIQgJAJgMAAQgLAAgJgJg");
	this.shape.setTransform(3,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_background_disabled, new cjs.Rectangle(0,0,6,6), null);


(lib.frb_background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUAVQgJgIAAgNQAAgLAJgJQAJgJALAAQANAAAIAJQAJAJAAALQAAANgJAIQgJAJgMAAQgLAAgJgJg");
	this.shape.setTransform(3,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_background, new cjs.Rectangle(0,0,6,6), null);


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


(lib.Bk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#009999").ss(3,1,1).p("EgnNgXjMBObAAAMAAAAvHMhObAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#CCFFFF","#FEFDB4"],[0,1],0,-153.2,0,153.3).s().p("EgnNAXkMAAAgvHMBObAAAMAAAAvHg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-252.5,-152.3,505,304.7);


(lib.tpbewordsstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHAIQgEgDAAgFQAAgDAEgEQADgDAEgBQAEABAEADQADAEABADQgBAFgDADQgEAEgEAAQgEAAgDgEg");
	this.shape.setTransform(158.9,12.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgKBDIABghIABgiIABghIAAghQAAgKAIABQAKgBAAAKIgBAhIAAAhIgCAtIAAAWQgBAKgIAAQgJAAAAgKg");
	this.shape_1.setTransform(153.8,5.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgbAnQgMgNgBgVQgBgUAMgQQANgTAWAAQASAAAKARQAHAOAAATQAAAUgLAOQgMARgSAAQgQAAgLgMgAgQgSQgGAKAAANQAAANAIAIQAGAGAIAAQAJAAAHgHQAHgIABgNQABgjgVAAQgMAAgIANg");
	this.shape_2.setTransform(146.1,7.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgbAnQgMgNgBgVQgBgUAMgQQANgTAWAAQASAAAKARQAHAOAAATQAAAUgLAOQgMARgSAAQgQAAgLgMgAgQgSQgGAKAAANQAAANAIAIQAGAGAIAAQAJAAAHgHQAHgIABgNQABgjgVAAQgMAAgIANg");
	this.shape_3.setTransform(136.1,7.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgaApQgNgMAAgUQAAgSANgUQANgWARAAQAJAAALAEQAOAFAAAIQAAAEgCADQgCACgEAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAIgEgEQgGgEgMAAQgJAAgJARQgIAPAAALQAAAMAIAHQAIAHALAAQAGAAAGgDIALgGIAEgCQADAAADADQACADAAADQAAAHgOAHQgNAFgIAAQgSAAgNgLg");
	this.shape_4.setTransform(126.5,7.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgKAUQgDgCAAgEQAAgCAFgNIAIgQQABgEAFAAQADgBACADQADADAAADQAAACgNAcQgCAGgEAAQgDgBgCgCg");
	this.shape_5.setTransform(45.4,13.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgOBPQgDgCAAgEIAAgCQACgMAAgOIAAgZIAAgaIgPABQgJAAAAgJQAAgKAQAAIAJAAIABgOQADgVAIgKQAIgMAVAAQANAAAAAJQAAAJgMAAQgWAAgDAfIAAAGIAUgBQAPAAAAAJQAAAHgIABQgDABgEAAIgVABIgBAUIAAASIABARQAAARgCAKQgBAIgHAAQgEAAgCgDg");
	this.shape_6.setTransform(37.2,5.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgOBPQgDgCAAgEIAAgCQACgMAAgOIAAgZIAAgaIgPABQgJAAAAgJQAAgKAQAAIAJAAIABgOQADgVAIgKQAIgMAVAAQANAAAAAJQAAAJgMAAQgWAAgDAfIAAAGIAUgBQAPAAAAAJQAAAHgIABQgDABgEAAIgVABIgBAUIAAASIABARQAAARgCAKQgBAIgHAAQgEAAgCgDg");
	this.shape_7.setTransform(27.6,5.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAVAsQgMAGgOAAQgMAAgIgFQgJgGgCgLQgDgZAAgSQAAgNADgQQABgIAHAAQAEAAADACQADADAAAEIgBAOIgCAOIABAZQABALACAHIAGADIAGABQAMAAANgEIAAgTIAAgRQAAgUACgPQABgJAIAAQAEAAACADQADADAAAEIgCAjIAAATIABAUIAAAGIAAAGQAAAEgDADQgCACgEAAQgHAAgCgJg");
	this.shape_8.setTransform(18,7.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgbBGQgDAEgFAAQgDAAgDgCQgDgDAAgEIABgHIAAgHIgBgeIAAgcIAAgaIAAgaQAAgFACgFQAEgFAFAAQAHAAAAAIIgBAEIAAADIAAAVIAAAXQAIgFAHgDQAIgCAEAAQAVAAAMAPQAMAOAAAUQAAAWgOAOQgNAPgUAAQgOAAgLgFgAgOgEIgNAIIAAAQIAAAPIAAAQIAMAEQAGACAHAAQANAAAIgJQAJgKAAgOQAAgOgHgJQgIgJgNAAQgGAAgIAEg");
	this.shape_9.setTransform(7.7,5.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tpbewordsstill, new cjs.Rectangle(-51.4,-10.3,214.6,30.3), null);


(lib.tobeeyesstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhPAXIAAAAQgDgNAKgIIACgBIADgBIAAAAQAMAAAGACQAKAHgEARQgBAHgFAEQgHADgFAAQgOAAgEgRgAArgPQgDgNAKgIIACAAIADgCIAAAAQAegBgFAcQgCAGgEAFQgHABgGAAQgOAAgEgQg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.tobeeyesstill, new cjs.Rectangle(-8.1,-3.9,16.2,7.9), null);


(lib.tobewordsbeingstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgfBGQgLgCAAgHQAAgIAIAAIALABQAHACAJAAQARgBAHgQQAEgLAAgXQgFAJgGAEQgHAFgIAAQgQAAgLgLQgKgLAAgRQABgYAOgPQAOgQAYAAQAIAAAGACQAGADADAEQAJAAAAALIgCARIgCARIgCAdQgBASgDAMQgEAOgJAHQgKAJgUAAQgMAAgJgCgAgPgsQgJAKAAARQAAANAFAFQAFAHAKAAQAIAAAIgJQAJgKAAgJIAFgfQgEgDgEgBIgIgBQgQAAgJAMg");
	this.shape.setTransform(14.7,5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AAWAsIgDgUIgBgUIAAgHIABgJQAAgUgIAAQgKABgIALQgIALgEARIgBAIIgBAJIABAIIAAAIQAAAEgDADQgCACgEAAQgEAAgCgCQgCgDAAgEIgBgIIgBgIIACgZIABgZIAAgJIgBgJQAAgDADgDQADgDADABQAJAAAAALIABAKQAPgTAOgBQAPAAAGANQADAJABAQIAAAJIAAAIQAAAHACAMQACAMAAAIQAAAEgDACQgDADgDAAQgIAAgBgJg");
	this.shape_1.setTransform(5.4,2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgIBBQgCgCAAgEIgBgQIAAgQIABgWIABgUQAAgEACgDQADgCAEAAQACAAADACQACADAAAEIAAAUIgBAWIAAAQIAAAQQAAAEgCACQgDADgDAAQgDAAgDgDgAgFgxQgDgDAAgFQAAgEADgCQADgEAEAAQAEAAADAEQADACAAAEQAAAFgDADQgDADgEAAQgEAAgDgDg");
	this.shape_2.setTransform(-2.1,0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgeAnQgOgLAAgUQAAgXALgQQANgRAUAAQAPAAAJAFQALAGAAANQAAAJgKAIIgTAJIgiAQQAFAHAIAEQAIAEAIAAQAHAAAIgCQALgDADgFQADgFADAAQAEAAADADQACACAAADQAAAKgRAHQgNAGgOAAQgSAAgNgKgAgSgXQgHAIgEAQIAcgMQAPgIAHgGQgIgHgNAAQgLAAgHAJg");
	this.shape_3.setTransform(-9.7,2.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgbBEQgDADgEAAQgEAAgBgBQgDgDAAgEIAAgHIAAgGIAAgdIgBgcIAAgZIAAgZQABgFACgEQACgGAGAAQAGAAAAAIIAAADIAAAEIgBAUIAAAXQAIgFAIgDQAHgDAEAAQAUAAAMAPQAMANAAAVQgBAUgNAPQgNAOgTAAQgOAAgLgFgAgOgDIgNAIIAAAPIAAAOIAAAPIAMAFQAHABAGAAQANAAAHgJQAJgJAAgNQAAgOgHgJQgHgJgNAAQgGAAgIAFg");
	this.shape_4.setTransform(-20.2,0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgZAyQgOgFABgJQAAgEACgCQADgDAEAAQADAAAEAEQACACAIACIAKABQAHAAAFgCQAJgCAAgGQAAgMgRgFIgJgCQgLgCgFgEQgIgEAAgKQAAgTASgIQAFgDALgDIARgGIAIgBQAEAAACACQADADAAAEIACAHIABAIQAAAEgDADQgCACgEAAQgGAAgBgDQgCgCgBgIIgVAGQgNAGAAAJIAFABQAUAEAKAGQAOAJAAASQAAAPgMAHQgKAGgQAAQgLAAgMgEg");
	this.shape_5.setTransform(-36.2,2.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgIBBQgCgCAAgEIgBgQIAAgQIABgWIABgUQAAgEACgDQADgCAEAAQACAAADACQACADAAAEIAAAUIgBAWIAAAQIAAAQQAAAEgCACQgDADgDAAQgDAAgDgDgAgFgxQgDgDAAgFQAAgEADgCQADgEAEAAQAEAAADAEQADACAAAEQAAAFgDADQgDADgEAAQgEAAgDgDg");
	this.shape_6.setTransform(-42.9,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tobewordsbeingstill, new cjs.Rectangle(-47.5,-15.1,69.2,29.5), null);


(lib.tobewords1beingstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AghBMQgNgDAAgHQAAgJAJAAIAMABQAIACAKAAQASAAAHgSQAEgMABgZQgGAKgGAFQgIAFgIAAQgSAAgLgMQgLgMAAgSQAAgbAPgQQAQgRAaAAQAIABAHACQAGACADAFQALAAAAALQgBAIgCALIgCASIgCAgQgBAUgEAMQgDAQgKAHQgMAKgWgBQgMABgJgCgAgRgwQgJAMAAARQAAAOAFAHQAGAGALABQAIAAAKgLQAIgKABgKIAEghIgHgEIgJgCQgSAAgKANg");
	this.shape.setTransform(22,5.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AAYAwIgCgWIgCgVIAAgJIAAgJQABgVgIAAQgLAAgJANQgJAMgFARIgBAKIAAAJIAAAJIABAJQAAAEgDADQgDACgEAAQgEAAgDgCQgCgDAAgEIgBgJIgBgJIACgbIABgcIAAgJIAAgJQAAgFACgCQADgDAEAAQAJAAABANIAAALQARgWAQAAQAQAAAGAOQAEAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgCADQgEADgDAAQgJAAgBgJg");
	this.shape_1.setTransform(11.9,2.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgIBHQgEgDAAgEIAAgSIAAgRIABgXIABgWQAAgEADgDQACgDAFAAQADAAACADQADADAAAEIgBAWIgBAXIAAARIABASQAAAEgDADQgDADgDAAQgEAAgCgDgAgGg1QgDgEAAgEQAAgFADgDQAEgEAEAAQAEAAAEAEQADADAAAFQAAAEgDAEQgEADgEABQgEgBgEgDg");
	this.shape_2.setTransform(3.8,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AghAqQgPgMAAgWQAAgYANgSQANgSAWAAQAQAAAKAFQAMAHAAAOQAAAKgLAIIgUAKIglARQAGAIAIAEQAIAFAKAAQAHAAAJgDQALgDAEgFQADgGAEAAQADAAADADQADADAAADQAAALgSAIQgPAGgOAAQgVAAgOgLgAgUgZQgHAJgEARIAegNQAQgJAIgGQgJgIgOAAQgMAAgIAKg");
	this.shape_3.setTransform(-4.5,2.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgtBLQgEgEAAgEIAAgdIACgmIACgpIABgbQABgEADgCQANgEARAAQAQAAAQAMQASANAAAUQAAAZgTANQAOAHAHAHQAIAIAAAJQAAAMgNALQgJAIgKAEQgVAIgiAAQgEAAgEgEgAgdAnIAAAUQAZAAAPgHQAHgDAHgFQAFgFAAgDQAAgEgMgGQgJgEgJgDIgKgBIgDAAIgEAAIgMgBIAAAWgAgZg6IAAASIgCAlIAPACQANgCAKgHQAKgJAAgOQAAgJgLgIQgKgIgKAAIgPAAg");
	this.shape_4.setTransform(-16,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tobewords1beingstill, new cjs.Rectangle(-24.8,-16.7,54.3,31.9), null);


(lib.tobebubblestill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AB5DcQgdglg0gGQkGgakOAOQg/ADgugjQgCgFgEgCQgNgJgKgJIAAgFIgDgFIgDgFIgIgJIgCgKIgGgjQgOhgAEhlQADgFACgFIADgJQAHgHAFgHQARghAagaIAKgFQAPgHALgNQDjAADkANIDAAJQDzAMDzAWQAjADAXAZIAPAGQACADAEADQAJAIAEAIQAAAwACAxQACBbgkBTQgkAkgrAbIgWAFQgQAFgQACQiCAKh6AlQgEAIgGAEQgSANgJAUQgkgpgzgOg");
	this.shape.setTransform(0.1,-2.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ADjFMIgMgCIgDgFQgGgMgIgLIgNgTQgCgEgEgBQgQgIgMgOQgIgJgFgMIgJgCIgJgBIgKgCIgLgDIgDgFIgEgEIgHgGIgEgEIgDgEIgLgEIgEgCIgBgCIgKgBQhEgLhGgBImggKQg8gBg4gXIgDgFIgDgFIgCgEIgDgFIgEgCQgNgDgIgLIgHgKIgDgEIgKgPIgCgFQgDgZgHgYQgMgpgBgtQgDhTAWhMQANgrAjgYIACgFQADgJAIgFIAPgIIAIgFIAPgOIAFgCIAIgCIAAAAQDmAADlAEQAwAAAvAGQCNATCRgDQAwgBAvALQAlAIAngBQBTgCBOAXQBjAcgCBfQgCA+gEA8QgDAngNAjQgJAWgCAYIgEAEQgdATgWAaQgKAMgPAIQhtA5iDgGQgIAAgJAEQgeANggAFIgEAEIgFAFIgGAFIgIAFIgCAFIgBAPIAAAJIAAAKIAAAKIgBAFIgBAJIgDAIIgEACIgFAAIgCAAgAApCcQAzAFAdAmQAzAOAlApQAJgUASgNQAGgFAEgHQB6glCCgLQAPgBAQgFIAWgGQAsgaAkglQAkhSgDhbQgBgxAAgwQgFgJgJgHQgDgDgCgEIgPgFQgXgZgkgDQjygWj0gMIjAgJQjjgNjkAAQgLANgPAHIgKAEQgaAbgRAhQgEAHgHAGIgDAJQgCAGgEAFQgDBlAOBgIAGAiIABAKIAIAKIAEAFIACAFIABAEQAKAKANAJQADACADAFQAuAiA+gDQBagEBaAAQCyAACvARg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tobebubblestill, new cjs.Rectangle(-70,-33.2,140.1,66.5), null);


(lib.scene4beenstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AATAmIgCgRIgBgRIAAgHIABgHQAAgQgHAAQgIgBgHALQgIAJgDAOIgBAHIgBAIIABAHIAAAHQAAAEgCABQgCADgDAAQgEAAgCgDQgCgBgBgEIAAgHIAAgHIABgWIABgWIgBgHIAAgHQAAgEACgCQADgDADABQAHAAABAKIABAJQAMgSANAAQAMAAAGALQADAIAAAOIAAAIIAAAGQAAAHACAKIACARQgBAEgCACQgCACgDAAQgHgBgBgHg");
	this.shape.setTransform(13.7,3.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgaAiQgMgKAAgRQAAgUAKgNQALgPARgBQAMAAAJAFQAKAFAAAMQAAAHgJAGQgEAEgNAEIgcAPQAEAGAGADQAHADAIAAQAFAAAHgBQAJgDADgFQADgDADAAQADAAACACQACABAAADQAAAJgOAGQgMAFgLABQgRAAgLgJgAgPgUQgHAHgDAOIAYgKQANgHAGgGQgGgFgMAAQgJAAgGAHg");
	this.shape_1.setTransform(5.1,4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgaAiQgMgKAAgRQAAgUAKgNQALgPARgBQAMAAAJAFQAKAFAAAMQAAAHgJAGQgEAEgNAEIgcAPQAEAGAGADQAHADAIAAQAFAAAHgBQAJgDADgFQADgDADAAQADAAACACQACABAAADQAAAJgOAGQgMAFgLABQgRAAgLgJgAgPgUQgHAHgDAOIAYgKQANgHAGgGQgGgFgMAAQgJAAgGAHg");
	this.shape_2.setTransform(-3.6,4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgXA6QgDAEgDAAQgDAAgCgCQgCgCAAgDIAAgGIAAgGIAAgZIgBgYIAAgVIAAgWQAAgFACgEQADgEAEAAQAGAAAAAHIAAADIAAADIgBARIAAAUQAHgFAGgCQAGgCAFAAQAQAAALANQAKALAAARQAAASgMANQgLAMgQAAQgMAAgKgFgAgMgDIgLAHIAAANIAAANIAAAMIALAFQAFABAGAAQAKAAAHgIQAHgIAAgMQAAgLgFgIQgHgIgKAAQgGAAgHAEg");
	this.shape_3.setTransform(-12.7,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.scene4beenstill, new cjs.Rectangle(-19.8,-11.7,39.6,26.3), null);


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


(lib.frb_background_pressed_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//var component = _parent._parent;
		////::: don't delete the above
		//
		////::: SKIN ELEMENT REGISTRATION
		///*      To add styleFormat properties to your skins :
		//   1) Break up your skin into individual movie clips (skinElements)
		//   2) add a registerSkinElement line of code for each skinElement
		//
		//component.registerSkinElement(skinElement, propertyName)
		//// makes the skinElement Listen to the propertyName specified (eg: "background")
		//
		//																	  n*/
		//component.registerSkinElement(background_mc, "backgroundDisabled");
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin element
	this.background_mc = new lib.frb_background_pressed();
	this.background_mc.parent = this;
	this.background_mc.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_background_pressed_1, new cjs.Rectangle(2,2,6,6), null);


(lib.frb_background_disabled_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//var component = _parent._parent;
		////::: don't delete the above
		//
		////::: SKIN ELEMENT REGISTRATION
		///*      To add styleFormat properties to your skins :
		//   1) Break up your skin into individual movie clips (skinElements)
		//   2) add a registerSkinElement line of code for each skinElement
		//
		//component.registerSkinElement(skinElement, propertyName)
		//// makes the skinElement Listen to the propertyName specified (eg: "background")
		//
		//																	  n*/
		//component.registerSkinElement(background_mc, "backgroundDisabled");
		//
		//
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin element
	this.background_mc = new lib.frb_background_disabled();
	this.background_mc.parent = this;
	this.background_mc.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_background_disabled_1, new cjs.Rectangle(2,2,6,6), null);


(lib.frb_background_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//var component = _parent._parent;
		////::: don't delete the above
		//
		////::: SKIN ELEMENT REGISTRATION
		///*      To add styleFormat properties to your skins :
		//   1) Break up your skin into individual movie clips (skinElements)
		//   2) add a registerSkinElement line of code for each skinElement
		//
		//component.registerSkinElement(skinElement, propertyName)
		//// makes the skinElement Listen to the propertyName specified (eg: "background")
		//
		//																	  n*/
		//component.registerSkinElement(background_mc, "background");
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin element
	this.background_mc = new lib.frb_background();
	this.background_mc.parent = this;
	this.background_mc.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_background_1, new cjs.Rectangle(2,2,6,6), null);


(lib.frb_frame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//var component = _parent._parent;
		////::: don't delete the above
		//
		////::: SKIN ELEMENT REGISTRATION
		///*      To add styleFormat properties to your skins :
		//   1) Break up your skin into individual movie clips (skinElements)
		//   2) add a registerSkinElement line of code for each skinElement
		//
		//component.registerSkinElement(skinElement, propertyName)
		//// makes the skinElement Listen to the propertyName specified (eg: "background")
		//
		//																	  n*/
		//component.registerSkinElement(shadow_mc, "shadow");
		//component.registerSkinElement(darkshadow_mc, "darkshadow");
		//component.registerSkinElement(highlight_mc, "highlight");
		//component.registerSkinElement(highlight3D_mc, "highlight3D");
		//
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin elements
	this.highlight3D_mc = new lib.frb_rightOut();
	this.highlight3D_mc.parent = this;
	this.highlight3D_mc.setTransform(1.5,1.5);

	this.highlight_mc = new lib.frb_rightIn();
	this.highlight_mc.parent = this;
	this.highlight_mc.setTransform(2.2,2.2);

	this.shadow_mc = new lib.frb_leftIn();
	this.shadow_mc.parent = this;
	this.shadow_mc.setTransform(1,1);

	this.darkshadow_mc = new lib.frb_leftOut();
	this.darkshadow_mc.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.darkshadow_mc},{t:this.shadow_mc},{t:this.highlight_mc},{t:this.highlight3D_mc}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_frame, new cjs.Rectangle(0,0,10,10), null);


(lib.frb_dot_disabled_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//var component = _parent._parent;
		////::: don't delete the above
		//
		////::: SKIN ELEMENT REGISTRATION
		///*      To add styleFormat properties to your skins :
		//   1) Break up your skin into individual movie clips (skinElements)
		//   2) add a registerSkinElement line of code for each skinElement
		//
		//component.registerSkinElement(skinElement, propertyName)
		//// makes the skinElement Listen to the propertyName specified (eg: "background")
		//
		//																	  n*/
		//component.registerSkinElement(disabled_mc, "foregroundDisabled");
		//
		//
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin element
	this.disabled_mc = new lib.frb_dot_disabled();
	this.disabled_mc.parent = this;
	this.disabled_mc.setTransform(3,3);

	this.timeline.addTween(cjs.Tween.get(this.disabled_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_dot_disabled_1, new cjs.Rectangle(3,3,4,4), null);


(lib.frb_dot_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//var component = _parent._parent;
		////::: don't delete the above
		//
		////::: SKIN ELEMENT REGISTRATION
		///*      To add styleFormat properties to your skins :
		//   1) Break up your skin into individual movie clips (skinElements)
		//   2) add a registerSkinElement line of code for each skinElement
		//
		//component.registerSkinElement(skinElement, propertyName)
		//// makes the skinElement Listen to the propertyName specified (eg: "background")
		//
		//																	  n*/
		//component.registerSkinElement(dot_mc, "radioDot");
		//
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin elements
	this.dot_mc = new lib.frb_dot();
	this.dot_mc.parent = this;
	this.dot_mc.setTransform(3,3);

	this.timeline.addTween(cjs.Tween.get(this.dot_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.frb_dot_1, new cjs.Rectangle(3,3,4,4), null);


(lib.tobewordsbeing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tobewordsbeingstill();
	this.instance.parent = this;
	this.instance.setTransform(229.6,146.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({alpha:0},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(182.1,131.3,69.2,29.5);


(lib.tobeconc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_99 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(1));

	// Layer 1
	this.instance = new lib.Symbol116("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(80.7,201.3);

	this.instance_1 = new lib.Symbol115("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(67.6,201.3);

	this.instance_2 = new lib.Symbol114("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(55.4,207.8);

	this.instance_3 = new lib.Symbol113("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(47.9,201.1);

	this.instance_4 = new lib.Symbol112("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(38,201);

	this.instance_5 = new lib.Symbol122("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(147.3,201.1);

	this.instance_6 = new lib.Symbol121("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(137.2,201.1);

	this.instance_7 = new lib.Symbol120("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(126,201.3);

	this.instance_8 = new lib.Symbol119("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(113.8,207.8);

	this.instance_9 = new lib.Symbol118("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(105.6,201.5);

	this.instance_10 = new lib.Symbol117("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(95.6,201.3);

	this.instance_11 = new lib.Symbol125("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(238.4,201.1);

	this.instance_12 = new lib.Symbol113("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(228.4,201.1);

	this.instance_13 = new lib.Symbol123("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(215.2,201.4);

	this.instance_14 = new lib.Symbol124("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(191.8,201.5);

	this.instance_15 = new lib.Symbol123("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(166.6,201.4);

	this.instance_16 = new lib.Symbol115("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(67.6,201.3);

	this.instance_17 = new lib.Symbol114("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(55.4,207.8);

	this.instance_18 = new lib.Symbol113("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(47.9,201.1);

	this.instance_19 = new lib.Symbol127("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(357.3,202.6);

	this.instance_20 = new lib.Symbol122("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(336.1,202.5);

	this.instance_21 = new lib.Symbol126("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(326.1,202.4);

	this.instance_22 = new lib.Symbol128("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(306.2,202.5);

	this.instance_23 = new lib.Symbol127("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(294.4,202.6);

	this.instance_24 = new lib.Symbol122("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(274.4,202.5);

	this.instance_25 = new lib.Symbol126("synched",0);
	this.instance_25.parent = this;
	this.instance_25.setTransform(264.4,202.4);

	this.instance_26 = new lib.Symbol122("synched",0);
	this.instance_26.parent = this;
	this.instance_26.setTransform(147.3,201.1);

	this.instance_27 = new lib.Symbol119("synched",0);
	this.instance_27.parent = this;
	this.instance_27.setTransform(113.8,207.8);

	this.instance_28 = new lib.Symbol117("synched",0);
	this.instance_28.parent = this;
	this.instance_28.setTransform(95.6,201.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4,p:{scaleY:1,y:201,alpha:1}},{t:this.instance_3,p:{scaleY:1,y:201.1,alpha:1,x:47.9}},{t:this.instance_2,p:{scaleY:1,y:207.8,alpha:1,x:55.4}},{t:this.instance_1,p:{scaleY:1,y:201.3,alpha:1,x:67.6}},{t:this.instance,p:{scaleY:1,y:201.3,alpha:1}}]}).to({state:[{t:this.instance_4,p:{scaleY:1.095,y:199.2,alpha:0.91}},{t:this.instance_3,p:{scaleY:1.044,y:200.2,alpha:0.961,x:47.9}},{t:this.instance_2,p:{scaleY:1.017,y:207.5,alpha:0.98,x:55.4}},{t:this.instance_1,p:{scaleY:1,y:201.3,alpha:1,x:67.6}},{t:this.instance,p:{scaleY:1,y:201.3,alpha:1}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1.345,y:194.3,alpha:0.691}},{t:this.instance_3,p:{scaleY:1.251,y:196.2,alpha:0.77,x:47.9}},{t:this.instance_2,p:{scaleY:1.186,y:205.4,alpha:0.828,x:55.4}},{t:this.instance_1,p:{scaleY:1.098,y:199.4,alpha:0.91,x:67.6}},{t:this.instance,p:{scaleY:1.032,y:200.7,alpha:0.969}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1.655,y:188.3,alpha:0.41}},{t:this.instance_3,p:{scaleY:1.553,y:190.4,alpha:0.5,x:47.9}},{t:this.instance_2,p:{scaleY:1.475,y:201.7,alpha:0.57,x:55.4}},{t:this.instance_1,p:{scaleY:1.349,y:194.6,alpha:0.691,x:67.6}},{t:this.instance,p:{scaleY:1.226,y:197,alpha:0.801}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1.905,y:183.4,alpha:0.191}},{t:this.instance_3,p:{scaleY:1.835,y:184.9,alpha:0.25,x:47.9}},{t:this.instance_2,p:{scaleY:1.773,y:197.9,alpha:0.301,x:55.4}},{t:this.instance_1,p:{scaleY:1.658,y:188.7,alpha:0.41,x:67.6}},{t:this.instance,p:{scaleY:1.524,y:191.3,alpha:0.531}}]},1).to({state:[{t:this.instance_4,p:{scaleY:2,y:181.5,alpha:0.102}},{t:this.instance_3,p:{scaleY:1.989,y:181.9,alpha:0.109,x:47.9}},{t:this.instance_2,p:{scaleY:1.967,y:195.4,alpha:0.129,x:55.4}},{t:this.instance_1,p:{scaleY:1.907,y:183.9,alpha:0.18,x:67.6}},{t:this.instance,p:{scaleY:1.813,y:185.7,alpha:0.27}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1.905,y:183.4,alpha:0.191}},{t:this.instance_3,p:{scaleY:1.956,y:182.5,alpha:0.141,x:47.9}},{t:this.instance_2,p:{scaleY:1.983,y:195.3,alpha:0.121,x:55.4}},{t:this.instance_1,p:{scaleY:2,y:182.1,alpha:0.102,x:67.6}},{t:this.instance,p:{scaleY:1.982,y:182.5,alpha:0.121}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1.655,y:188.3,alpha:0.41}},{t:this.instance_3,p:{scaleY:1.749,y:186.6,alpha:0.32,x:47.9}},{t:this.instance_2,p:{scaleY:1.814,y:197.4,alpha:0.27,x:55.4}},{t:this.instance_1,p:{scaleY:1.902,y:184,alpha:0.191,x:67.6}},{t:this.instance,p:{scaleY:1.968,y:182.7,alpha:0.129}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1.345,y:194.3,alpha:0.691}},{t:this.instance_3,p:{scaleY:1.447,y:192.4,alpha:0.602,x:47.9}},{t:this.instance_2,p:{scaleY:1.525,y:201.1,alpha:0.531,x:55.4}},{t:this.instance_1,p:{scaleY:1.651,y:188.8,alpha:0.41,x:67.6}},{t:this.instance,p:{scaleY:1.774,y:186.4,alpha:0.301}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1.095,y:199.2,alpha:0.91}},{t:this.instance_3,p:{scaleY:1.165,y:197.9,alpha:0.852,x:47.9}},{t:this.instance_2,p:{scaleY:1.227,y:204.9,alpha:0.801,x:55.4}},{t:this.instance_1,p:{scaleY:1.342,y:194.8,alpha:0.691,x:67.6}},{t:this.instance,p:{scaleY:1.476,y:192.2,alpha:0.57}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1,y:201,alpha:1}},{t:this.instance_3,p:{scaleY:1.011,y:200.9,alpha:0.988,x:47.9}},{t:this.instance_2,p:{scaleY:1.033,y:207.4,alpha:0.969,x:55.4}},{t:this.instance_1,p:{scaleY:1.093,y:199.5,alpha:0.922,x:67.6}},{t:this.instance,p:{scaleY:1.187,y:197.7,alpha:0.828}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1,y:201,alpha:1}},{t:this.instance_3,p:{scaleY:1,y:201.1,alpha:1,x:47.9}},{t:this.instance_2,p:{scaleY:1,y:207.8,alpha:1,x:55.4}},{t:this.instance_1,p:{scaleY:1,y:201.3,alpha:1,x:67.6}},{t:this.instance,p:{scaleY:1.018,y:201,alpha:0.98}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1,y:201,alpha:1}},{t:this.instance_3,p:{scaleY:1,y:201.1,alpha:1,x:47.9}},{t:this.instance_2,p:{scaleY:1,y:207.8,alpha:1,x:55.4}},{t:this.instance_1,p:{scaleY:1,y:201.3,alpha:1,x:67.6}},{t:this.instance,p:{scaleY:1,y:201.3,alpha:1}}]},5).to({state:[{t:this.instance_4,p:{scaleY:1,y:201,alpha:1}},{t:this.instance_3,p:{scaleY:1,y:201.1,alpha:1,x:47.9}},{t:this.instance_2,p:{scaleY:1,y:207.8,alpha:1,x:55.4}},{t:this.instance_1,p:{scaleY:1,y:201.3,alpha:1,x:67.6}},{t:this.instance,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_10,p:{scaleY:1,y:201.3,alpha:1,x:95.6}},{t:this.instance_9,p:{scaleY:1,y:201.5,alpha:1}},{t:this.instance_8,p:{scaleY:1,y:207.8,alpha:1,x:113.8}},{t:this.instance_7,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_6,p:{scaleY:1,y:201.1,alpha:1}},{t:this.instance_5,p:{scaleY:1,y:201.1,alpha:1,x:147.3}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1,y:201,alpha:1}},{t:this.instance_3,p:{scaleY:1,y:201.1,alpha:1,x:47.9}},{t:this.instance_2,p:{scaleY:1,y:207.8,alpha:1,x:55.4}},{t:this.instance_1,p:{scaleY:1,y:201.3,alpha:1,x:67.6}},{t:this.instance,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_10,p:{scaleY:1.095,y:199.4,alpha:0.91,x:95.6}},{t:this.instance_9,p:{scaleY:1.043,y:200.6,alpha:0.961}},{t:this.instance_8,p:{scaleY:1.015,y:207.6,alpha:0.98,x:113.8}},{t:this.instance_7,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_6,p:{scaleY:1,y:201.1,alpha:1}},{t:this.instance_5,p:{scaleY:1,y:201.1,alpha:1,x:147.3}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1,y:201,alpha:1}},{t:this.instance_3,p:{scaleY:1,y:201.1,alpha:1,x:47.9}},{t:this.instance_2,p:{scaleY:1,y:207.8,alpha:1,x:55.4}},{t:this.instance_1,p:{scaleY:1,y:201.3,alpha:1,x:67.6}},{t:this.instance,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_10,p:{scaleY:1.345,y:194.6,alpha:0.691,x:95.6}},{t:this.instance_9,p:{scaleY:1.25,y:196.7,alpha:0.77}},{t:this.instance_8,p:{scaleY:1.18,y:205.5,alpha:0.84,x:113.8}},{t:this.instance_7,p:{scaleY:1.093,y:199.5,alpha:0.922}},{t:this.instance_6,p:{scaleY:1.037,y:200.4,alpha:0.969}},{t:this.instance_5,p:{scaleY:1.008,y:200.9,alpha:0.988,x:147.3}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1,y:201,alpha:1}},{t:this.instance_3,p:{scaleY:1,y:201.1,alpha:1,x:47.9}},{t:this.instance_2,p:{scaleY:1,y:207.8,alpha:1,x:55.4}},{t:this.instance_1,p:{scaleY:1,y:201.3,alpha:1,x:67.6}},{t:this.instance,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_10,p:{scaleY:1.655,y:188.7,alpha:0.41,x:95.6}},{t:this.instance_9,p:{scaleY:1.552,y:191,alpha:0.5}},{t:this.instance_8,p:{scaleY:1.467,y:201.8,alpha:0.578,x:113.8}},{t:this.instance_7,p:{scaleY:1.341,y:194.8,alpha:0.691}},{t:this.instance_6,p:{scaleY:1.236,y:196.5,alpha:0.789}},{t:this.instance_5,p:{scaleY:1.152,y:198.1,alpha:0.859,x:147.3}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1,y:201,alpha:1}},{t:this.instance_3,p:{scaleY:1,y:201.1,alpha:1,x:47.9}},{t:this.instance_2,p:{scaleY:1,y:207.8,alpha:1,x:55.4}},{t:this.instance_1,p:{scaleY:1,y:201.3,alpha:1,x:67.6}},{t:this.instance,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_10,p:{scaleY:1.905,y:183.9,alpha:0.191,x:95.6}},{t:this.instance_9,p:{scaleY:1.835,y:185.6,alpha:0.25}},{t:this.instance_8,p:{scaleY:1.767,y:198,alpha:0.309,x:113.8}},{t:this.instance_7,p:{scaleY:1.65,y:188.8,alpha:0.41}},{t:this.instance_6,p:{scaleY:1.536,y:190.7,alpha:0.52}},{t:this.instance_5,p:{scaleY:1.43,y:192.8,alpha:0.609,x:147.3}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1,y:201,alpha:1}},{t:this.instance_3,p:{scaleY:1,y:201.1,alpha:1,x:47.9}},{t:this.instance_2,p:{scaleY:1,y:207.8,alpha:1,x:55.4}},{t:this.instance_1,p:{scaleY:1,y:201.3,alpha:1,x:67.6}},{t:this.instance,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_10,p:{scaleY:2,y:182,alpha:0.102,x:95.6}},{t:this.instance_9,p:{scaleY:1.989,y:182.6,alpha:0.109}},{t:this.instance_8,p:{scaleY:1.964,y:195.5,alpha:0.129,x:113.8}},{t:this.instance_7,p:{scaleY:1.902,y:184,alpha:0.191}},{t:this.instance_6,p:{scaleY:1.822,y:185.2,alpha:0.262}},{t:this.instance_5,p:{scaleY:1.734,y:186.8,alpha:0.34,x:147.3}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1,y:201,alpha:1}},{t:this.instance_3,p:{scaleY:1,y:201.1,alpha:1,x:47.9}},{t:this.instance_2,p:{scaleY:1,y:207.8,alpha:1,x:55.4}},{t:this.instance_1,p:{scaleY:1,y:201.3,alpha:1,x:67.6}},{t:this.instance,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_10,p:{scaleY:1.905,y:183.9,alpha:0.191,x:95.6}},{t:this.instance_9,p:{scaleY:1.957,y:183.3,alpha:0.141}},{t:this.instance_8,p:{scaleY:1.985,y:195.2,alpha:0.109,x:113.8}},{t:this.instance_7,p:{scaleY:2,y:182.1,alpha:0.102}},{t:this.instance_6,p:{scaleY:1.985,y:182,alpha:0.109}},{t:this.instance_5,p:{scaleY:1.949,y:182.7,alpha:0.141,x:147.3}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1,y:201,alpha:1}},{t:this.instance_3,p:{scaleY:1,y:201.1,alpha:1,x:47.9}},{t:this.instance_2,p:{scaleY:1,y:207.8,alpha:1,x:55.4}},{t:this.instance_1,p:{scaleY:1,y:201.3,alpha:1,x:67.6}},{t:this.instance,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_10,p:{scaleY:1.655,y:188.7,alpha:0.41,x:95.6}},{t:this.instance_9,p:{scaleY:1.75,y:187.2,alpha:0.32}},{t:this.instance_8,p:{scaleY:1.82,y:197.3,alpha:0.262,x:113.8}},{t:this.instance_7,p:{scaleY:1.907,y:183.9,alpha:0.18}},{t:this.instance_6,p:{scaleY:1.963,y:182.4,alpha:0.129}},{t:this.instance_5,p:{scaleY:1.992,y:181.8,alpha:0.109,x:147.3}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1,y:201,alpha:1}},{t:this.instance_3,p:{scaleY:1,y:201.1,alpha:1,x:47.9}},{t:this.instance_2,p:{scaleY:1,y:207.8,alpha:1,x:55.4}},{t:this.instance_1,p:{scaleY:1,y:201.3,alpha:1,x:67.6}},{t:this.instance,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_10,p:{scaleY:1.345,y:194.6,alpha:0.691,x:95.6}},{t:this.instance_9,p:{scaleY:1.448,y:193,alpha:0.602}},{t:this.instance_8,p:{scaleY:1.533,y:201,alpha:0.52,x:113.8}},{t:this.instance_7,p:{scaleY:1.659,y:188.7,alpha:0.41}},{t:this.instance_6,p:{scaleY:1.764,y:186.3,alpha:0.309}},{t:this.instance_5,p:{scaleY:1.848,y:184.6,alpha:0.238,x:147.3}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1,y:201,alpha:1}},{t:this.instance_3,p:{scaleY:1,y:201.1,alpha:1,x:47.9}},{t:this.instance_2,p:{scaleY:1,y:207.8,alpha:1,x:55.4}},{t:this.instance_1,p:{scaleY:1,y:201.3,alpha:1,x:67.6}},{t:this.instance,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_10,p:{scaleY:1.095,y:199.4,alpha:0.91,x:95.6}},{t:this.instance_9,p:{scaleY:1.165,y:198.3,alpha:0.852}},{t:this.instance_8,p:{scaleY:1.233,y:204.8,alpha:0.789,x:113.8}},{t:this.instance_7,p:{scaleY:1.35,y:194.6,alpha:0.68}},{t:this.instance_6,p:{scaleY:1.464,y:192.1,alpha:0.578}},{t:this.instance_5,p:{scaleY:1.57,y:190,alpha:0.488,x:147.3}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1,y:201,alpha:1}},{t:this.instance_3,p:{scaleY:1,y:201.1,alpha:1,x:47.9}},{t:this.instance_2,p:{scaleY:1,y:207.8,alpha:1,x:55.4}},{t:this.instance_1,p:{scaleY:1,y:201.3,alpha:1,x:67.6}},{t:this.instance,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_10,p:{scaleY:1,y:201.3,alpha:1,x:95.6}},{t:this.instance_9,p:{scaleY:1.011,y:201.3,alpha:0.988}},{t:this.instance_8,p:{scaleY:1.036,y:207.3,alpha:0.969,x:113.8}},{t:this.instance_7,p:{scaleY:1.098,y:199.4,alpha:0.91}},{t:this.instance_6,p:{scaleY:1.178,y:197.7,alpha:0.84}},{t:this.instance_5,p:{scaleY:1.266,y:195.9,alpha:0.762,x:147.3}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1,y:201,alpha:1}},{t:this.instance_3,p:{scaleY:1,y:201.1,alpha:1,x:47.9}},{t:this.instance_2,p:{scaleY:1,y:207.8,alpha:1,x:55.4}},{t:this.instance_1,p:{scaleY:1,y:201.3,alpha:1,x:67.6}},{t:this.instance,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_10,p:{scaleY:1,y:201.3,alpha:1,x:95.6}},{t:this.instance_9,p:{scaleY:1,y:201.5,alpha:1}},{t:this.instance_8,p:{scaleY:1,y:207.8,alpha:1,x:113.8}},{t:this.instance_7,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_6,p:{scaleY:1.015,y:200.8,alpha:0.988}},{t:this.instance_5,p:{scaleY:1.051,y:200.1,alpha:0.949,x:147.3}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1,y:201,alpha:1}},{t:this.instance_3,p:{scaleY:1,y:201.1,alpha:1,x:47.9}},{t:this.instance_2,p:{scaleY:1,y:207.8,alpha:1,x:55.4}},{t:this.instance_1,p:{scaleY:1,y:201.3,alpha:1,x:67.6}},{t:this.instance,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_10,p:{scaleY:1,y:201.3,alpha:1,x:95.6}},{t:this.instance_9,p:{scaleY:1,y:201.5,alpha:1}},{t:this.instance_8,p:{scaleY:1,y:207.8,alpha:1,x:113.8}},{t:this.instance_7,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_6,p:{scaleY:1,y:201.1,alpha:1}},{t:this.instance_5,p:{scaleY:1,y:201.1,alpha:1,x:147.3}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1,y:201,alpha:1}},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_10,p:{scaleY:1,y:201.3,alpha:1,x:95.6}},{t:this.instance_9,p:{scaleY:1,y:201.5,alpha:1}},{t:this.instance_8,p:{scaleY:1,y:207.8,alpha:1,x:113.8}},{t:this.instance_7,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_6,p:{scaleY:1,y:201.1,alpha:1}},{t:this.instance_5,p:{scaleY:1,y:201.1,alpha:1,x:147.3}},{t:this.instance_15,p:{scaleY:1,y:201.4,alpha:1}},{t:this.instance_1,p:{scaleY:1,y:201.3,alpha:1,x:180.2}},{t:this.instance_14,p:{scaleY:1,y:201.5,alpha:1}},{t:this.instance_2,p:{scaleY:1,y:207.8,alpha:1,x:200}},{t:this.instance_13,p:{scaleY:1,y:201.4,alpha:1}},{t:this.instance_12,p:{scaleY:1,y:201.1,alpha:1}},{t:this.instance_11,p:{scaleY:1,y:201.1,alpha:1}},{t:this.instance_3,p:{scaleY:1,y:201.1,alpha:1,x:248.5}}]},7).to({state:[{t:this.instance_4,p:{scaleY:1,y:201,alpha:1}},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_10,p:{scaleY:1,y:201.3,alpha:1,x:95.6}},{t:this.instance_9,p:{scaleY:1,y:201.5,alpha:1}},{t:this.instance_8,p:{scaleY:1,y:207.8,alpha:1,x:113.8}},{t:this.instance_7,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_6,p:{scaleY:1,y:201.1,alpha:1}},{t:this.instance_5,p:{scaleY:1,y:201.1,alpha:1,x:147.3}},{t:this.instance_15,p:{scaleY:1.095,y:199.6,alpha:0.91}},{t:this.instance_1,p:{scaleY:1.029,y:200.8,alpha:0.969,x:180.2}},{t:this.instance_14,p:{scaleY:1.002,y:201.4,alpha:1}},{t:this.instance_2,p:{scaleY:1,y:207.8,alpha:1,x:200}},{t:this.instance_13,p:{scaleY:1,y:201.4,alpha:1}},{t:this.instance_12,p:{scaleY:1,y:201.1,alpha:1}},{t:this.instance_11,p:{scaleY:1,y:201.1,alpha:1}},{t:this.instance_3,p:{scaleY:1,y:201.1,alpha:1,x:248.5}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1,y:201,alpha:1}},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_10,p:{scaleY:1,y:201.3,alpha:1,x:95.6}},{t:this.instance_9,p:{scaleY:1,y:201.5,alpha:1}},{t:this.instance_8,p:{scaleY:1,y:207.8,alpha:1,x:113.8}},{t:this.instance_7,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_6,p:{scaleY:1,y:201.1,alpha:1}},{t:this.instance_5,p:{scaleY:1,y:201.1,alpha:1,x:147.3}},{t:this.instance_15,p:{scaleY:1.345,y:194.8,alpha:0.691}},{t:this.instance_1,p:{scaleY:1.218,y:197.1,alpha:0.801,x:180.2}},{t:this.instance_14,p:{scaleY:1.127,y:199.1,alpha:0.891}},{t:this.instance_2,p:{scaleY:1.076,y:206.8,alpha:0.93,x:200}},{t:this.instance_13,p:{scaleY:1.014,y:201.1,alpha:0.988}},{t:this.instance_12,p:{scaleY:1,y:201.1,alpha:1}},{t:this.instance_11,p:{scaleY:1,y:201.1,alpha:1}},{t:this.instance_3,p:{scaleY:1,y:201.1,alpha:1,x:248.5}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1,y:201,alpha:1}},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_10,p:{scaleY:1,y:201.3,alpha:1,x:95.6}},{t:this.instance_9,p:{scaleY:1,y:201.5,alpha:1}},{t:this.instance_8,p:{scaleY:1,y:207.8,alpha:1,x:113.8}},{t:this.instance_7,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_6,p:{scaleY:1,y:201.1,alpha:1}},{t:this.instance_5,p:{scaleY:1,y:201.1,alpha:1,x:147.3}},{t:this.instance_15,p:{scaleY:1.655,y:188.9,alpha:0.41}},{t:this.instance_1,p:{scaleY:1.514,y:191.5,alpha:0.539,x:180.2}},{t:this.instance_14,p:{scaleY:1.394,y:194,alpha:0.641}},{t:this.instance_2,p:{scaleY:1.312,y:203.8,alpha:0.719,x:200}},{t:this.instance_13,p:{scaleY:1.176,y:198,alpha:0.84}},{t:this.instance_12,p:{scaleY:1.084,y:199.5,alpha:0.93}},{t:this.instance_11,p:{scaleY:1.036,y:200.4,alpha:0.969}},{t:this.instance_3,p:{scaleY:1.007,y:201,alpha:0.988,x:248.5}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1,y:201,alpha:1}},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_10,p:{scaleY:1,y:201.3,alpha:1,x:95.6}},{t:this.instance_9,p:{scaleY:1,y:201.5,alpha:1}},{t:this.instance_8,p:{scaleY:1,y:207.8,alpha:1,x:113.8}},{t:this.instance_7,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_6,p:{scaleY:1,y:201.1,alpha:1}},{t:this.instance_5,p:{scaleY:1,y:201.1,alpha:1,x:147.3}},{t:this.instance_15,p:{scaleY:1.905,y:184.1,alpha:0.191}},{t:this.instance_1,p:{scaleY:1.805,y:185.9,alpha:0.281,x:180.2}},{t:this.instance_14,p:{scaleY:1.701,y:188.1,alpha:0.371}},{t:this.instance_2,p:{scaleY:1.62,y:199.9,alpha:0.441,x:200}},{t:this.instance_13,p:{scaleY:1.462,y:192.6,alpha:0.59}},{t:this.instance_12,p:{scaleY:1.327,y:194.7,alpha:0.711}},{t:this.instance_11,p:{scaleY:1.234,y:196.6,alpha:0.789}},{t:this.instance_3,p:{scaleY:1.151,y:198.2,alpha:0.859,x:248.5}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1,y:201,alpha:1}},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_10,p:{scaleY:1,y:201.3,alpha:1,x:95.6}},{t:this.instance_9,p:{scaleY:1,y:201.5,alpha:1}},{t:this.instance_8,p:{scaleY:1,y:207.8,alpha:1,x:113.8}},{t:this.instance_7,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_6,p:{scaleY:1,y:201.1,alpha:1}},{t:this.instance_5,p:{scaleY:1,y:201.1,alpha:1,x:147.3}},{t:this.instance_15,p:{scaleY:2,y:182.3,alpha:0.102}},{t:this.instance_1,p:{scaleY:1.98,y:182.5,alpha:0.121,x:180.2}},{t:this.instance_14,p:{scaleY:1.932,y:183.7,alpha:0.16}},{t:this.instance_2,p:{scaleY:1.883,y:196.5,alpha:0.211,x:200}},{t:this.instance_13,p:{scaleY:1.762,y:186.8,alpha:0.309}},{t:this.instance_12,p:{scaleY:1.636,y:188.8,alpha:0.43}},{t:this.instance_11,p:{scaleY:1.533,y:190.8,alpha:0.52}},{t:this.instance_3,p:{scaleY:1.428,y:192.8,alpha:0.609,x:248.5}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1,y:201,alpha:1}},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_10,p:{scaleY:1,y:201.3,alpha:1,x:95.6}},{t:this.instance_9,p:{scaleY:1,y:201.5,alpha:1}},{t:this.instance_8,p:{scaleY:1,y:207.8,alpha:1,x:113.8}},{t:this.instance_7,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_6,p:{scaleY:1,y:201.1,alpha:1}},{t:this.instance_5,p:{scaleY:1,y:201.1,alpha:1,x:147.3}},{t:this.instance_15,p:{scaleY:1.905,y:184.1,alpha:0.191}},{t:this.instance_1,p:{scaleY:1.971,y:182.7,alpha:0.129,x:180.2}},{t:this.instance_14,p:{scaleY:1.997,y:182.5,alpha:0.102}},{t:this.instance_2,p:{scaleY:1.999,y:195,alpha:0.102,x:200}},{t:this.instance_13,p:{scaleY:1.962,y:183,alpha:0.129}},{t:this.instance_12,p:{scaleY:1.893,y:183.8,alpha:0.199}},{t:this.instance_11,p:{scaleY:1.82,y:185.2,alpha:0.262}},{t:this.instance_3,p:{scaleY:1.733,y:186.9,alpha:0.34,x:248.5}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1,y:201,alpha:1}},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_10,p:{scaleY:1,y:201.3,alpha:1,x:95.6}},{t:this.instance_9,p:{scaleY:1,y:201.5,alpha:1}},{t:this.instance_8,p:{scaleY:1,y:207.8,alpha:1,x:113.8}},{t:this.instance_7,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_6,p:{scaleY:1,y:201.1,alpha:1}},{t:this.instance_5,p:{scaleY:1,y:201.1,alpha:1,x:147.3}},{t:this.instance_15,p:{scaleY:1.655,y:188.9,alpha:0.41}},{t:this.instance_1,p:{scaleY:1.782,y:186.3,alpha:0.301,x:180.2}},{t:this.instance_14,p:{scaleY:1.873,y:184.9,alpha:0.211}},{t:this.instance_2,p:{scaleY:1.924,y:196,alpha:0.172,x:200}},{t:this.instance_13,p:{scaleY:1.986,y:182.6,alpha:0.109}},{t:this.instance_12,p:{scaleY:2,y:181.7,alpha:0.102}},{t:this.instance_11,p:{scaleY:1.985,y:182,alpha:0.109}},{t:this.instance_3,p:{scaleY:1.948,y:182.7,alpha:0.148,x:248.5}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1,y:201,alpha:1}},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_10,p:{scaleY:1,y:201.3,alpha:1,x:95.6}},{t:this.instance_9,p:{scaleY:1,y:201.5,alpha:1}},{t:this.instance_8,p:{scaleY:1,y:207.8,alpha:1,x:113.8}},{t:this.instance_7,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_6,p:{scaleY:1,y:201.1,alpha:1}},{t:this.instance_5,p:{scaleY:1,y:201.1,alpha:1,x:147.3}},{t:this.instance_15,p:{scaleY:1.345,y:194.8,alpha:0.691}},{t:this.instance_1,p:{scaleY:1.486,y:192,alpha:0.559,x:180.2}},{t:this.instance_14,p:{scaleY:1.606,y:189.9,alpha:0.449}},{t:this.instance_2,p:{scaleY:1.688,y:199,alpha:0.379,x:200}},{t:this.instance_13,p:{scaleY:1.824,y:185.7,alpha:0.262}},{t:this.instance_12,p:{scaleY:1.916,y:183.3,alpha:0.18}},{t:this.instance_11,p:{scaleY:1.964,y:182.4,alpha:0.129}},{t:this.instance_3,p:{scaleY:1.993,y:181.8,alpha:0.109,x:248.5}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1,y:201,alpha:1}},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_10,p:{scaleY:1,y:201.3,alpha:1,x:95.6}},{t:this.instance_9,p:{scaleY:1,y:201.5,alpha:1}},{t:this.instance_8,p:{scaleY:1,y:207.8,alpha:1,x:113.8}},{t:this.instance_7,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_6,p:{scaleY:1,y:201.1,alpha:1}},{t:this.instance_5,p:{scaleY:1,y:201.1,alpha:1,x:147.3}},{t:this.instance_15,p:{scaleY:1.095,y:199.6,alpha:0.91}},{t:this.instance_1,p:{scaleY:1.195,y:197.6,alpha:0.82,x:180.2}},{t:this.instance_14,p:{scaleY:1.299,y:195.8,alpha:0.73}},{t:this.instance_2,p:{scaleY:1.38,y:202.9,alpha:0.66,x:200}},{t:this.instance_13,p:{scaleY:1.538,y:191.1,alpha:0.52}},{t:this.instance_12,p:{scaleY:1.673,y:188,alpha:0.391}},{t:this.instance_11,p:{scaleY:1.766,y:186.3,alpha:0.309}},{t:this.instance_3,p:{scaleY:1.849,y:184.6,alpha:0.23,x:248.5}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1,y:201,alpha:1}},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_10,p:{scaleY:1,y:201.3,alpha:1,x:95.6}},{t:this.instance_9,p:{scaleY:1,y:201.5,alpha:1}},{t:this.instance_8,p:{scaleY:1,y:207.8,alpha:1,x:113.8}},{t:this.instance_7,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_6,p:{scaleY:1,y:201.1,alpha:1}},{t:this.instance_5,p:{scaleY:1,y:201.1,alpha:1,x:147.3}},{t:this.instance_15,p:{scaleY:1,y:201.4,alpha:1}},{t:this.instance_1,p:{scaleY:1.02,y:200.9,alpha:0.98,x:180.2}},{t:this.instance_14,p:{scaleY:1.068,y:200.2,alpha:0.941}},{t:this.instance_2,p:{scaleY:1.117,y:206.3,alpha:0.891,x:200}},{t:this.instance_13,p:{scaleY:1.238,y:196.9,alpha:0.789}},{t:this.instance_12,p:{scaleY:1.364,y:194,alpha:0.672}},{t:this.instance_11,p:{scaleY:1.467,y:192.1,alpha:0.578}},{t:this.instance_3,p:{scaleY:1.572,y:190,alpha:0.48,x:248.5}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1,y:201,alpha:1}},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_10,p:{scaleY:1,y:201.3,alpha:1,x:95.6}},{t:this.instance_9,p:{scaleY:1,y:201.5,alpha:1}},{t:this.instance_8,p:{scaleY:1,y:207.8,alpha:1,x:113.8}},{t:this.instance_7,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_6,p:{scaleY:1,y:201.1,alpha:1}},{t:this.instance_5,p:{scaleY:1,y:201.1,alpha:1,x:147.3}},{t:this.instance_15,p:{scaleY:1,y:201.4,alpha:1}},{t:this.instance_1,p:{scaleY:1,y:201.3,alpha:1,x:180.2}},{t:this.instance_14,p:{scaleY:1,y:201.5,alpha:1}},{t:this.instance_2,p:{scaleY:1.001,y:207.8,alpha:1,x:200}},{t:this.instance_13,p:{scaleY:1.038,y:200.7,alpha:0.961}},{t:this.instance_12,p:{scaleY:1.107,y:199,alpha:0.898}},{t:this.instance_11,p:{scaleY:1.18,y:197.6,alpha:0.84}},{t:this.instance_3,p:{scaleY:1.267,y:195.9,alpha:0.762,x:248.5}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1,y:201,alpha:1}},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_10,p:{scaleY:1,y:201.3,alpha:1,x:95.6}},{t:this.instance_9,p:{scaleY:1,y:201.5,alpha:1}},{t:this.instance_8,p:{scaleY:1,y:207.8,alpha:1,x:113.8}},{t:this.instance_7,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_6,p:{scaleY:1,y:201.1,alpha:1}},{t:this.instance_5,p:{scaleY:1,y:201.1,alpha:1,x:147.3}},{t:this.instance_15,p:{scaleY:1,y:201.4,alpha:1}},{t:this.instance_1,p:{scaleY:1,y:201.3,alpha:1,x:180.2}},{t:this.instance_14,p:{scaleY:1,y:201.5,alpha:1}},{t:this.instance_2,p:{scaleY:1,y:207.8,alpha:1,x:200}},{t:this.instance_13,p:{scaleY:1,y:201.4,alpha:1}},{t:this.instance_12,p:{scaleY:1,y:201.1,alpha:1}},{t:this.instance_11,p:{scaleY:1.015,y:200.8,alpha:0.98}},{t:this.instance_3,p:{scaleY:1.052,y:200.1,alpha:0.949,x:248.5}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1,y:201,alpha:1}},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_28},{t:this.instance_9,p:{scaleY:1,y:201.5,alpha:1}},{t:this.instance_27},{t:this.instance_7,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_6,p:{scaleY:1,y:201.1,alpha:1}},{t:this.instance_26},{t:this.instance_15,p:{scaleY:1,y:201.4,alpha:1}},{t:this.instance_1,p:{scaleY:1,y:201.3,alpha:1,x:180.2}},{t:this.instance_14,p:{scaleY:1,y:201.5,alpha:1}},{t:this.instance_2,p:{scaleY:1,y:207.8,alpha:1,x:200}},{t:this.instance_13,p:{scaleY:1,y:201.4,alpha:1}},{t:this.instance_12,p:{scaleY:1,y:201.1,alpha:1}},{t:this.instance_11,p:{scaleY:1,y:201.1,alpha:1}},{t:this.instance_3,p:{scaleY:1,y:201.1,alpha:1,x:248.5}},{t:this.instance_25,p:{scaleY:1,y:202.4,alpha:1}},{t:this.instance_24,p:{scaleY:1,y:202.5,alpha:1}},{t:this.instance_10,p:{scaleY:1,y:202.6,alpha:1,x:283.5}},{t:this.instance_23,p:{scaleY:1,y:202.6,alpha:1}},{t:this.instance_22,p:{scaleY:1,y:202.5,alpha:1}},{t:this.instance_8,p:{scaleY:1,y:209.1,alpha:1,x:314.2}},{t:this.instance_21,p:{scaleY:1,y:202.4,alpha:1}},{t:this.instance_20,p:{scaleY:1,y:202.5,alpha:1}},{t:this.instance_5,p:{scaleY:1,y:202.5,alpha:1,x:346.1}},{t:this.instance_19,p:{scaleY:1,y:202.6,alpha:1}}]},11).to({state:[{t:this.instance_4,p:{scaleY:1,y:201,alpha:1}},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_28},{t:this.instance_9,p:{scaleY:1,y:201.5,alpha:1}},{t:this.instance_27},{t:this.instance_7,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_6,p:{scaleY:1,y:201.1,alpha:1}},{t:this.instance_26},{t:this.instance_15,p:{scaleY:1,y:201.4,alpha:1}},{t:this.instance_1,p:{scaleY:1,y:201.3,alpha:1,x:180.2}},{t:this.instance_14,p:{scaleY:1,y:201.5,alpha:1}},{t:this.instance_2,p:{scaleY:1,y:207.8,alpha:1,x:200}},{t:this.instance_13,p:{scaleY:1,y:201.4,alpha:1}},{t:this.instance_12,p:{scaleY:1,y:201.1,alpha:1}},{t:this.instance_11,p:{scaleY:1,y:201.1,alpha:1}},{t:this.instance_3,p:{scaleY:1,y:201.1,alpha:1,x:248.5}},{t:this.instance_25,p:{scaleY:1.095,y:200.5,alpha:0.91}},{t:this.instance_24,p:{scaleY:1.044,y:201.6,alpha:0.961}},{t:this.instance_10,p:{scaleY:1.013,y:202.4,alpha:0.988,x:283.5}},{t:this.instance_23,p:{scaleY:1,y:202.6,alpha:1}},{t:this.instance_22,p:{scaleY:1,y:202.5,alpha:1}},{t:this.instance_8,p:{scaleY:1,y:209.1,alpha:1,x:314.2}},{t:this.instance_21,p:{scaleY:1,y:202.4,alpha:1}},{t:this.instance_20,p:{scaleY:1,y:202.5,alpha:1}},{t:this.instance_5,p:{scaleY:1,y:202.5,alpha:1,x:346.1}},{t:this.instance_19,p:{scaleY:1,y:202.6,alpha:1}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1,y:201,alpha:1}},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_28},{t:this.instance_9,p:{scaleY:1,y:201.5,alpha:1}},{t:this.instance_27},{t:this.instance_7,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_6,p:{scaleY:1,y:201.1,alpha:1}},{t:this.instance_26},{t:this.instance_15,p:{scaleY:1,y:201.4,alpha:1}},{t:this.instance_1,p:{scaleY:1,y:201.3,alpha:1,x:180.2}},{t:this.instance_14,p:{scaleY:1,y:201.5,alpha:1}},{t:this.instance_2,p:{scaleY:1,y:207.8,alpha:1,x:200}},{t:this.instance_13,p:{scaleY:1,y:201.4,alpha:1}},{t:this.instance_12,p:{scaleY:1,y:201.1,alpha:1}},{t:this.instance_11,p:{scaleY:1,y:201.1,alpha:1}},{t:this.instance_3,p:{scaleY:1,y:201.1,alpha:1,x:248.5}},{t:this.instance_25,p:{scaleY:1.345,y:195.7,alpha:0.691}},{t:this.instance_24,p:{scaleY:1.251,y:197.6,alpha:0.77}},{t:this.instance_10,p:{scaleY:1.173,y:199.3,alpha:0.84,x:283.5}},{t:this.instance_23,p:{scaleY:1.096,y:200.7,alpha:0.91}},{t:this.instance_22,p:{scaleY:1.036,y:201.8,alpha:0.969}},{t:this.instance_8,p:{scaleY:1.011,y:209,alpha:0.988,x:314.2}},{t:this.instance_21,p:{scaleY:1,y:202.4,alpha:1}},{t:this.instance_20,p:{scaleY:1,y:202.5,alpha:1}},{t:this.instance_5,p:{scaleY:1,y:202.5,alpha:1,x:346.1}},{t:this.instance_19,p:{scaleY:1,y:202.6,alpha:1}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1,y:201,alpha:1}},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_28},{t:this.instance_9,p:{scaleY:1,y:201.5,alpha:1}},{t:this.instance_27},{t:this.instance_7,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_6,p:{scaleY:1,y:201.1,alpha:1}},{t:this.instance_26},{t:this.instance_15,p:{scaleY:1,y:201.4,alpha:1}},{t:this.instance_1,p:{scaleY:1,y:201.3,alpha:1,x:180.2}},{t:this.instance_14,p:{scaleY:1,y:201.5,alpha:1}},{t:this.instance_2,p:{scaleY:1,y:207.8,alpha:1,x:200}},{t:this.instance_13,p:{scaleY:1,y:201.4,alpha:1}},{t:this.instance_12,p:{scaleY:1,y:201.1,alpha:1}},{t:this.instance_11,p:{scaleY:1,y:201.1,alpha:1}},{t:this.instance_3,p:{scaleY:1,y:201.1,alpha:1,x:248.5}},{t:this.instance_25,p:{scaleY:1.655,y:189.6,alpha:0.41}},{t:this.instance_24,p:{scaleY:1.553,y:191.7,alpha:0.5}},{t:this.instance_10,p:{scaleY:1.457,y:193.8,alpha:0.59,x:283.5}},{t:this.instance_23,p:{scaleY:1.346,y:195.9,alpha:0.691}},{t:this.instance_22,p:{scaleY:1.234,y:197.9,alpha:0.789}},{t:this.instance_8,p:{scaleY:1.167,y:207,alpha:0.852,x:314.2}},{t:this.instance_21,p:{scaleY:1.085,y:200.7,alpha:0.922}},{t:this.instance_20,p:{scaleY:1.037,y:201.7,alpha:0.969}},{t:this.instance_5,p:{scaleY:1.008,y:202.3,alpha:0.988,x:346.1}},{t:this.instance_19,p:{scaleY:1,y:202.6,alpha:1}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1,y:201,alpha:1}},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_28},{t:this.instance_9,p:{scaleY:1,y:201.5,alpha:1}},{t:this.instance_27},{t:this.instance_7,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_6,p:{scaleY:1,y:201.1,alpha:1}},{t:this.instance_26},{t:this.instance_15,p:{scaleY:1,y:201.4,alpha:1}},{t:this.instance_1,p:{scaleY:1,y:201.3,alpha:1,x:180.2}},{t:this.instance_14,p:{scaleY:1,y:201.5,alpha:1}},{t:this.instance_2,p:{scaleY:1,y:207.8,alpha:1,x:200}},{t:this.instance_13,p:{scaleY:1,y:201.4,alpha:1}},{t:this.instance_12,p:{scaleY:1,y:201.1,alpha:1}},{t:this.instance_11,p:{scaleY:1,y:201.1,alpha:1}},{t:this.instance_3,p:{scaleY:1,y:201.1,alpha:1,x:248.5}},{t:this.instance_25,p:{scaleY:1.905,y:184.8,alpha:0.191}},{t:this.instance_24,p:{scaleY:1.835,y:186.2,alpha:0.25}},{t:this.instance_10,p:{scaleY:1.758,y:188.1,alpha:0.32,x:283.5}},{t:this.instance_23,p:{scaleY:1.655,y:190,alpha:0.41}},{t:this.instance_22,p:{scaleY:1.534,y:192.1,alpha:0.52}},{t:this.instance_8,p:{scaleY:1.45,y:203.4,alpha:0.59,x:314.2}},{t:this.instance_21,p:{scaleY:1.329,y:196,alpha:0.699}},{t:this.instance_20,p:{scaleY:1.235,y:197.9,alpha:0.789}},{t:this.instance_5,p:{scaleY:1.153,y:199.5,alpha:0.859,x:346.1}},{t:this.instance_19,p:{scaleY:1.079,y:201.1,alpha:0.93}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1,y:201,alpha:1}},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_28},{t:this.instance_9,p:{scaleY:1,y:201.5,alpha:1}},{t:this.instance_27},{t:this.instance_7,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_6,p:{scaleY:1,y:201.1,alpha:1}},{t:this.instance_26},{t:this.instance_15,p:{scaleY:1,y:201.4,alpha:1}},{t:this.instance_1,p:{scaleY:1,y:201.3,alpha:1,x:180.2}},{t:this.instance_14,p:{scaleY:1,y:201.5,alpha:1}},{t:this.instance_2,p:{scaleY:1,y:207.8,alpha:1,x:200}},{t:this.instance_13,p:{scaleY:1,y:201.4,alpha:1}},{t:this.instance_12,p:{scaleY:1,y:201.1,alpha:1}},{t:this.instance_11,p:{scaleY:1,y:201.1,alpha:1}},{t:this.instance_3,p:{scaleY:1,y:201.1,alpha:1,x:248.5}},{t:this.instance_25,p:{scaleY:2,y:182.9,alpha:0.102}},{t:this.instance_24,p:{scaleY:1.989,y:183.3,alpha:0.109}},{t:this.instance_10,p:{scaleY:1.961,y:184.2,alpha:0.141,x:283.5}},{t:this.instance_23,p:{scaleY:1.905,y:185.1,alpha:0.18}},{t:this.instance_22,p:{scaleY:1.821,y:186.6,alpha:0.262}},{t:this.instance_8,p:{scaleY:1.752,y:199.5,alpha:0.32,x:314.2}},{t:this.instance_21,p:{scaleY:1.637,y:190,alpha:0.43}},{t:this.instance_20,p:{scaleY:1.535,y:192.1,alpha:0.52}},{t:this.instance_5,p:{scaleY:1.431,y:194.1,alpha:0.609,x:346.1}},{t:this.instance_19,p:{scaleY:1.317,y:196.5,alpha:0.711}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1,y:201,alpha:1}},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_28},{t:this.instance_9,p:{scaleY:1,y:201.5,alpha:1}},{t:this.instance_27},{t:this.instance_7,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_6,p:{scaleY:1,y:201.1,alpha:1}},{t:this.instance_26},{t:this.instance_15,p:{scaleY:1,y:201.4,alpha:1}},{t:this.instance_1,p:{scaleY:1,y:201.3,alpha:1,x:180.2}},{t:this.instance_14,p:{scaleY:1,y:201.5,alpha:1}},{t:this.instance_2,p:{scaleY:1,y:207.8,alpha:1,x:200}},{t:this.instance_13,p:{scaleY:1,y:201.4,alpha:1}},{t:this.instance_12,p:{scaleY:1,y:201.1,alpha:1}},{t:this.instance_11,p:{scaleY:1,y:201.1,alpha:1}},{t:this.instance_3,p:{scaleY:1,y:201.1,alpha:1,x:248.5}},{t:this.instance_25,p:{scaleY:1.905,y:184.8,alpha:0.191}},{t:this.instance_24,p:{scaleY:1.956,y:183.9,alpha:0.141}},{t:this.instance_10,p:{scaleY:1.987,y:183.7,alpha:0.109,x:283.5}},{t:this.instance_23,p:{scaleY:2,y:183.3,alpha:0.102}},{t:this.instance_22,p:{scaleY:1.985,y:183.4,alpha:0.109}},{t:this.instance_8,p:{scaleY:1.958,y:196.9,alpha:0.141,x:314.2}},{t:this.instance_21,p:{scaleY:1.894,y:185,alpha:0.199}},{t:this.instance_20,p:{scaleY:1.822,y:186.5,alpha:0.262}},{t:this.instance_5,p:{scaleY:1.735,y:188.2,alpha:0.34,x:346.1}},{t:this.instance_19,p:{scaleY:1.626,y:190.5,alpha:0.441}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1,y:201,alpha:1}},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_28},{t:this.instance_9,p:{scaleY:1,y:201.5,alpha:1}},{t:this.instance_27},{t:this.instance_7,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_6,p:{scaleY:1,y:201.1,alpha:1}},{t:this.instance_26},{t:this.instance_15,p:{scaleY:1,y:201.4,alpha:1}},{t:this.instance_1,p:{scaleY:1,y:201.3,alpha:1,x:180.2}},{t:this.instance_14,p:{scaleY:1,y:201.5,alpha:1}},{t:this.instance_2,p:{scaleY:1,y:207.8,alpha:1,x:200}},{t:this.instance_13,p:{scaleY:1,y:201.4,alpha:1}},{t:this.instance_12,p:{scaleY:1,y:201.1,alpha:1}},{t:this.instance_11,p:{scaleY:1,y:201.1,alpha:1}},{t:this.instance_3,p:{scaleY:1,y:201.1,alpha:1,x:248.5}},{t:this.instance_25,p:{scaleY:1.655,y:189.6,alpha:0.41}},{t:this.instance_24,p:{scaleY:1.749,y:187.9,alpha:0.32}},{t:this.instance_10,p:{scaleY:1.827,y:186.7,alpha:0.25,x:283.5}},{t:this.instance_23,p:{scaleY:1.904,y:185.2,alpha:0.191}},{t:this.instance_22,p:{scaleY:1.964,y:183.8,alpha:0.129}},{t:this.instance_8,p:{scaleY:1.989,y:196.5,alpha:0.109,x:314.2}},{t:this.instance_21,p:{scaleY:2,y:182.9,alpha:0.102}},{t:this.instance_20,p:{scaleY:1.985,y:183.3,alpha:0.109}},{t:this.instance_5,p:{scaleY:1.95,y:184,alpha:0.141,x:346.1}},{t:this.instance_19,p:{scaleY:1.886,y:185.5,alpha:0.199}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1,y:201,alpha:1}},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_28},{t:this.instance_9,p:{scaleY:1,y:201.5,alpha:1}},{t:this.instance_27},{t:this.instance_7,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_6,p:{scaleY:1,y:201.1,alpha:1}},{t:this.instance_26},{t:this.instance_15,p:{scaleY:1,y:201.4,alpha:1}},{t:this.instance_1,p:{scaleY:1,y:201.3,alpha:1,x:180.2}},{t:this.instance_14,p:{scaleY:1,y:201.5,alpha:1}},{t:this.instance_2,p:{scaleY:1,y:207.8,alpha:1,x:200}},{t:this.instance_13,p:{scaleY:1,y:201.4,alpha:1}},{t:this.instance_12,p:{scaleY:1,y:201.1,alpha:1}},{t:this.instance_11,p:{scaleY:1,y:201.1,alpha:1}},{t:this.instance_3,p:{scaleY:1,y:201.1,alpha:1,x:248.5}},{t:this.instance_25,p:{scaleY:1.345,y:195.7,alpha:0.691}},{t:this.instance_24,p:{scaleY:1.447,y:193.8,alpha:0.602}},{t:this.instance_10,p:{scaleY:1.543,y:192.2,alpha:0.512,x:283.5}},{t:this.instance_23,p:{scaleY:1.654,y:190,alpha:0.41}},{t:this.instance_22,p:{scaleY:1.766,y:187.6,alpha:0.309}},{t:this.instance_8,p:{scaleY:1.833,y:198.5,alpha:0.25,x:314.2}},{t:this.instance_21,p:{scaleY:1.915,y:184.6,alpha:0.18}},{t:this.instance_20,p:{scaleY:1.963,y:183.8,alpha:0.129}},{t:this.instance_5,p:{scaleY:1.992,y:183.2,alpha:0.109,x:346.1}},{t:this.instance_19,p:{scaleY:1.999,y:183.3,alpha:0.102}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1,y:201,alpha:1}},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_28},{t:this.instance_9,p:{scaleY:1,y:201.5,alpha:1}},{t:this.instance_27},{t:this.instance_7,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_6,p:{scaleY:1,y:201.1,alpha:1}},{t:this.instance_26},{t:this.instance_15,p:{scaleY:1,y:201.4,alpha:1}},{t:this.instance_1,p:{scaleY:1,y:201.3,alpha:1,x:180.2}},{t:this.instance_14,p:{scaleY:1,y:201.5,alpha:1}},{t:this.instance_2,p:{scaleY:1,y:207.8,alpha:1,x:200}},{t:this.instance_13,p:{scaleY:1,y:201.4,alpha:1}},{t:this.instance_12,p:{scaleY:1,y:201.1,alpha:1}},{t:this.instance_11,p:{scaleY:1,y:201.1,alpha:1}},{t:this.instance_3,p:{scaleY:1,y:201.1,alpha:1,x:248.5}},{t:this.instance_25,p:{scaleY:1.095,y:200.5,alpha:0.91}},{t:this.instance_24,p:{scaleY:1.165,y:199.3,alpha:0.852}},{t:this.instance_10,p:{scaleY:1.242,y:198,alpha:0.781,x:283.5}},{t:this.instance_23,p:{scaleY:1.345,y:195.9,alpha:0.691}},{t:this.instance_22,p:{scaleY:1.466,y:193.4,alpha:0.578}},{t:this.instance_8,p:{scaleY:1.55,y:202.1,alpha:0.5,x:314.2}},{t:this.instance_21,p:{scaleY:1.671,y:189.3,alpha:0.391}},{t:this.instance_20,p:{scaleY:1.765,y:187.6,alpha:0.309}},{t:this.instance_5,p:{scaleY:1.847,y:186,alpha:0.238,x:346.1}},{t:this.instance_19,p:{scaleY:1.921,y:184.8,alpha:0.172}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1,y:201,alpha:1}},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_28},{t:this.instance_9,p:{scaleY:1,y:201.5,alpha:1}},{t:this.instance_27},{t:this.instance_7,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_6,p:{scaleY:1,y:201.1,alpha:1}},{t:this.instance_26},{t:this.instance_15,p:{scaleY:1,y:201.4,alpha:1}},{t:this.instance_1,p:{scaleY:1,y:201.3,alpha:1,x:180.2}},{t:this.instance_14,p:{scaleY:1,y:201.5,alpha:1}},{t:this.instance_2,p:{scaleY:1,y:207.8,alpha:1,x:200}},{t:this.instance_13,p:{scaleY:1,y:201.4,alpha:1}},{t:this.instance_12,p:{scaleY:1,y:201.1,alpha:1}},{t:this.instance_11,p:{scaleY:1,y:201.1,alpha:1}},{t:this.instance_3,p:{scaleY:1,y:201.1,alpha:1,x:248.5}},{t:this.instance_25,p:{scaleY:1,y:202.4,alpha:1}},{t:this.instance_24,p:{scaleY:1.011,y:202.2,alpha:0.988}},{t:this.instance_10,p:{scaleY:1.039,y:201.9,alpha:0.961,x:283.5}},{t:this.instance_23,p:{scaleY:1.095,y:200.8,alpha:0.91}},{t:this.instance_22,p:{scaleY:1.179,y:199,alpha:0.84}},{t:this.instance_8,p:{scaleY:1.248,y:206,alpha:0.781,x:314.2}},{t:this.instance_21,p:{scaleY:1.363,y:195.3,alpha:0.672}},{t:this.instance_20,p:{scaleY:1.465,y:193.4,alpha:0.578}},{t:this.instance_5,p:{scaleY:1.569,y:191.4,alpha:0.488,x:346.1}},{t:this.instance_19,p:{scaleY:1.683,y:189.4,alpha:0.391}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1,y:201,alpha:1}},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_28},{t:this.instance_9,p:{scaleY:1,y:201.5,alpha:1}},{t:this.instance_27},{t:this.instance_7,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_6,p:{scaleY:1,y:201.1,alpha:1}},{t:this.instance_26},{t:this.instance_15,p:{scaleY:1,y:201.4,alpha:1}},{t:this.instance_1,p:{scaleY:1,y:201.3,alpha:1,x:180.2}},{t:this.instance_14,p:{scaleY:1,y:201.5,alpha:1}},{t:this.instance_2,p:{scaleY:1,y:207.8,alpha:1,x:200}},{t:this.instance_13,p:{scaleY:1,y:201.4,alpha:1}},{t:this.instance_12,p:{scaleY:1,y:201.1,alpha:1}},{t:this.instance_11,p:{scaleY:1,y:201.1,alpha:1}},{t:this.instance_3,p:{scaleY:1,y:201.1,alpha:1,x:248.5}},{t:this.instance_25,p:{scaleY:1,y:202.4,alpha:1}},{t:this.instance_24,p:{scaleY:1,y:202.5,alpha:1}},{t:this.instance_10,p:{scaleY:1,y:202.6,alpha:1,x:283.5}},{t:this.instance_23,p:{scaleY:1,y:202.6,alpha:1}},{t:this.instance_22,p:{scaleY:1.015,y:202.2,alpha:0.988}},{t:this.instance_8,p:{scaleY:1.042,y:208.6,alpha:0.961,x:314.2}},{t:this.instance_21,p:{scaleY:1.106,y:200.3,alpha:0.91}},{t:this.instance_20,p:{scaleY:1.178,y:199,alpha:0.84}},{t:this.instance_5,p:{scaleY:1.265,y:197.3,alpha:0.762,x:346.1}},{t:this.instance_19,p:{scaleY:1.374,y:195.4,alpha:0.66}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1,y:201,alpha:1}},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_28},{t:this.instance_9,p:{scaleY:1,y:201.5,alpha:1}},{t:this.instance_27},{t:this.instance_7,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_6,p:{scaleY:1,y:201.1,alpha:1}},{t:this.instance_26},{t:this.instance_15,p:{scaleY:1,y:201.4,alpha:1}},{t:this.instance_1,p:{scaleY:1,y:201.3,alpha:1,x:180.2}},{t:this.instance_14,p:{scaleY:1,y:201.5,alpha:1}},{t:this.instance_2,p:{scaleY:1,y:207.8,alpha:1,x:200}},{t:this.instance_13,p:{scaleY:1,y:201.4,alpha:1}},{t:this.instance_12,p:{scaleY:1,y:201.1,alpha:1}},{t:this.instance_11,p:{scaleY:1,y:201.1,alpha:1}},{t:this.instance_3,p:{scaleY:1,y:201.1,alpha:1,x:248.5}},{t:this.instance_25,p:{scaleY:1,y:202.4,alpha:1}},{t:this.instance_24,p:{scaleY:1,y:202.5,alpha:1}},{t:this.instance_10,p:{scaleY:1,y:202.6,alpha:1,x:283.5}},{t:this.instance_23,p:{scaleY:1,y:202.6,alpha:1}},{t:this.instance_22,p:{scaleY:1,y:202.5,alpha:1}},{t:this.instance_8,p:{scaleY:1,y:209.1,alpha:1,x:314.2}},{t:this.instance_21,p:{scaleY:1,y:202.4,alpha:1}},{t:this.instance_20,p:{scaleY:1.015,y:202.2,alpha:0.988}},{t:this.instance_5,p:{scaleY:1.05,y:201.5,alpha:0.949,x:346.1}},{t:this.instance_19,p:{scaleY:1.114,y:200.4,alpha:0.898}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1,y:201,alpha:1}},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_28},{t:this.instance_9,p:{scaleY:1,y:201.5,alpha:1}},{t:this.instance_27},{t:this.instance_7,p:{scaleY:1,y:201.3,alpha:1}},{t:this.instance_6,p:{scaleY:1,y:201.1,alpha:1}},{t:this.instance_26},{t:this.instance_15,p:{scaleY:1,y:201.4,alpha:1}},{t:this.instance_1,p:{scaleY:1,y:201.3,alpha:1,x:180.2}},{t:this.instance_14,p:{scaleY:1,y:201.5,alpha:1}},{t:this.instance_2,p:{scaleY:1,y:207.8,alpha:1,x:200}},{t:this.instance_13,p:{scaleY:1,y:201.4,alpha:1}},{t:this.instance_12,p:{scaleY:1,y:201.1,alpha:1}},{t:this.instance_11,p:{scaleY:1,y:201.1,alpha:1}},{t:this.instance_3,p:{scaleY:1,y:201.1,alpha:1,x:248.5}},{t:this.instance_25,p:{scaleY:1,y:202.4,alpha:1}},{t:this.instance_24,p:{scaleY:1,y:202.5,alpha:1}},{t:this.instance_10,p:{scaleY:1,y:202.6,alpha:1,x:283.5}},{t:this.instance_23,p:{scaleY:1,y:202.6,alpha:1}},{t:this.instance_22,p:{scaleY:1,y:202.5,alpha:1}},{t:this.instance_8,p:{scaleY:1,y:209.1,alpha:1,x:314.2}},{t:this.instance_21,p:{scaleY:1,y:202.4,alpha:1}},{t:this.instance_20,p:{scaleY:1,y:202.5,alpha:1}},{t:this.instance_5,p:{scaleY:1,y:202.5,alpha:1,x:346.1}},{t:this.instance_19,p:{scaleY:1.001,y:202.6,alpha:1}}]},28).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34,194.4,53.1,15.3);


(lib.tobebubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_104 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(104).call(this.frame_104).wait(1));

	// Layer 1
	this.instance = new lib.tobebubblestill();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.078,0.078);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(85).to({_off:false},0).to({scaleX:1.67,scaleY:0.95,x:28,y:-14.4},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.tobe1wordsbeing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tobewords1beingstill();
	this.instance.parent = this;
	this.instance.setTransform(39.2,68.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({alpha:0},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(14.4,52.1,54.3,31.9);


(lib.tobe1words = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_109 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(109).call(this.frame_109).wait(1));

	// Layer 1
	this.instance = new lib.tpbewordsstill();
	this.instance.parent = this;
	this.instance.setTransform(-13.6,-0.8);
	this.instance.alpha = 0;

	this.instance_1 = new lib.tobewordsbeing();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-144.7,-141.7);

	this.instance_2 = new lib.tobe1wordsbeing();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-81.2,-64.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},94).to({state:[{t:this.instance},{t:this.instance_2},{t:this.instance_1}]},15).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(94).to({alpha:1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65,-11.1,214.6,30.3);


(lib.tobeeyes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// Layer 1
	this.instance = new lib.tobeeyesstill();
	this.instance.parent = this;
	this.instance.setTransform(0,1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-3.6},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.1,-2.1,16.2,7.9);


(lib.scene4been = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.scene4beenstill();
	this.instance.parent = this;
	this.instance.setTransform(27.5,-21.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.7,-33,39.6,26.3);


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
		var bgm = createjs.Sound.play('bgmAux',{loop:-1});
		//var vo = createjs.Sound.play('VO');
		
		//volume vars -----------------------------------------
		var mute= false;
		bgm.volume = 0.05;
		var prev_vol = bgm.volume;
		
		//Menu function -----------------------------------------
		function openMenu(){
		
		 window.open ("verb_menu.html","_self");
		}
		
		//volume functions -----------------------------------------
		function volDwn()
		{
			createjs.Sound.volume = createjs.Sound.volume -0.05;
			if(!mute){
				bgm.volume -= 0.05;
				prev_vol = bgm.volume;
			}
			console.log(bgm.volume);
			console.log(prev_vol);
		}
		function volUp()
		{
			createjs.Sound.volume = createjs.Sound.volume +0.05;
			if(!mute){
				bgm.volume += 0.05;
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
		
		 window.open ("pred_Quiz1.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("pred_Scene6.html","_self");
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


(lib.frb_states = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{unselectedEnabled:0,press:1,unselectedDisabled:2,selectedDisabled:3,selectedEnabled:4});

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
	this.frame_4 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// dot_enabled
	this.instance = new lib.frb_dot_1();
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(1));

	// dot_disabled
	this.instance_1 = new lib.frb_dot_disabled_1();
	this.instance_1.parent = this;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({_off:true},1).wait(1));

	// background pressed/disabled
	this.instance_2 = new lib.frb_background_pressed_1();
	this.instance_2.parent = this;

	this.instance_3 = new lib.frb_background_disabled_1();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

	// background up/static
	this.instance_4 = new lib.frb_background_1();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5));

	// radio button frame
	this.frb_frame_mc = new lib.frb_frame();
	this.frb_frame_mc.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.frb_frame_mc).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10,10);


(lib.scene4slimneverwordsstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.scene4been();
	this.instance.parent = this;
	this.instance.setTransform(-4.1,58.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape.setTransform(43.3,44.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AATAmIgCgRIgBgRIAAgHIABgHQAAgQgHgBQgIAAgIALQgGAJgEANIgBAIIgBAIIABAHIAAAHQAAADgCACQgDADgDAAQgDAAgCgDQgCgCgBgDIAAgHIgBgHIACgWIABgWIgBgHIAAgIQAAgDACgCQADgDADAAQAHAAABALIAAAJQANgRANAAQANAAAFALQADAHAAAOIAAAIIAAAHQAAAGACAKIACARQAAADgDACQgCACgDABQgHAAgBgIg");
	this.shape_1.setTransform(37.2,40.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaAiQgMgKAAgSQAAgTAKgNQALgQARABQAMAAAJADQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHADAIABQAFAAAHgCQAJgDADgEQADgFADAAQADAAACADQACACAAACQAAAJgOAHQgMAEgLAAQgRABgLgJgAgPgUQgHAHgDAOIAYgLQANgGAGgGQgGgFgMgBQgJAAgGAIg");
	this.shape_2.setTransform(28.6,40.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaAiQgMgKAAgSQAAgTAKgNQALgQARABQAMAAAJADQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHADAIABQAFAAAHgCQAJgDADgEQADgFADAAQADAAACADQACACAAACQAAAJgOAHQgMAEgLAAQgRABgLgJgAgPgUQgHAHgDAOIAYgLQANgGAGgGQgGgFgMgBQgJAAgGAIg");
	this.shape_3.setTransform(19.9,40.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgXA6QgDAEgDAAQgDAAgCgCQgCgCAAgDIAAgGIAAgGIAAgZIgBgYIAAgVIAAgWQAAgFACgEQADgEAEAAQAGAAAAAHIAAADIAAADIgBARIAAAUQAHgFAGgCQAGgCAFAAQAQAAALANQAKALAAARQAAASgMANQgLAMgQAAQgMAAgKgFgAgMgDIgLAHIAAANIAAANIAAAMIALAFQAFABAGAAQAKAAAHgIQAHgIAAgMQAAgLgFgIQgHgIgKAAQgGAAgHAEg");
	this.shape_4.setTransform(10.8,38.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgdAkIAAg2IAAgHIAAgIQAAgIAHAAQAIAAAAANQAOgPASAAQAGAAADAFQADAFAAAKIAAAFQAAAKgHAAQgHAAAAgIIAAgFIgBgHQgMACgGAFQgHAFgFAKIAAAqQAAAIgIAAQgGAAAAgIg");
	this.shape_5.setTransform(-2.6,40.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgNQALgQARABQAMAAAJADQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHADAIABQAFAAAHgCQAJgDADgEQADgFADAAQADAAACADQACACAAACQAAAJgOAHQgMAEgLAAQgRABgLgJgAgPgUQgHAHgDAOIAYgLQANgGAGgGQgGgFgMgBQgJAAgGAIg");
	this.shape_6.setTransform(-10.9,40.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgIAkIgMggIgOgiIgBgEQABgDACgCQACgDADAAQAFAAACAFIAUA2QAFgNAJgXIAGgRQADgFAEAAQADAAADACQADACgBADQABADgNAfIgQAkQgBAHgGAAQgFAAgDgHg");
	this.shape_7.setTransform(-19.2,40.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgNQALgQARABQAMAAAJADQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHADAIABQAFAAAHgCQAJgDADgEQADgFADAAQADAAACADQACACAAACQAAAJgOAHQgMAEgLAAQgRABgLgJgAgPgUQgHAHgDAOIAYgLQANgGAGgGQgGgFgMgBQgJAAgGAIg");
	this.shape_8.setTransform(-27.4,40.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AATAmIgCgRIgBgRIAAgHIAAgHQABgQgHgBQgJAAgGALQgIAJgDANIgCAIIAAAIIAAAHIABAHQAAADgCACQgCADgDAAQgEAAgCgDQgDgCABgDIgBgHIAAgHIABgWIABgWIAAgHIAAgIQAAgDABgCQADgDADAAQAIAAAAALIABAJQANgRAMAAQAMAAAGALQADAHAAAOIAAAIIAAAHQAAAGACAKIABARQAAADgCACQgCACgDABQgHAAgBgIg");
	this.shape_9.setTransform(-36,40.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgNQALgQARABQAMAAAJADQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHADAIABQAFAAAHgCQAJgDADgEQADgFADAAQADAAACADQACACAAACQAAAJgOAHQgMAEgLAAQgRABgLgJgAgPgUQgHAHgDAOIAYgLQANgGAGgGQgGgFgMgBQgJAAgGAIg");
	this.shape_10.setTransform(34.6,16.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgIAkIgMggIgOgiIgBgEQABgDACgCQACgDADAAQAFAAACAFIAUA2QAFgNAJgXIAGgRQADgFAEAAQADAAADACQADACgBADQABADgNAfIgQAkQgBAHgGAAQgFAAgDgHg");
	this.shape_11.setTransform(26.3,16.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgFARIgBgIIAAgGIgBgGQAAgIABgCQACgGAEAAQADAAACACQAAAAABABQAAAAAAABQABAAAAABQAAABAAAAIAAAFIAAAFIAAAGIABAHQAAAKgIAAQgDAAgCgDg");
	this.shape_12.setTransform(19,9.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AghA5QgDgCAAgDQAAgEADgCQACgCADAAIAQgCIABgPIAAgNIgBgNQAAgRACgbIgKAAIgKABQgDAAgDgDQgCgCAAgDQAAgIAIAAIAYgBQAOAAAXADQAIABAAAIQAAADgEADQgCABgCAAIgOgBIgMgBIgBAqIAAAOIAAANIAAAOIAYgBQADAAACADQACACAAADQAAAEgCACQgCACgDAAIgNABIgNAAIgPABIgPACQgDAAgCgDg");
	this.shape_13.setTransform(11.7,14.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAFAXIgDgSIgCgRIgGAOIgMAgQgBADgCACQgCAEgGAAQgGABgFgYQgDgMgCgTIgDgMIgBgMQABgDACgCQACgDADAAQAHAAABAGIABAMIABAMIAFAiQAJgYAJgfQACgJAGAAQAGAAADAKIAEAdIAGAdIAFgVIALgqQABgFAFAAQAEABACACQADACgBADIAAAEQgGAZgKAfQgCAIgFAHQgDAEgEAAQgKgBgEgUg");
	this.shape_14.setTransform(-2.9,16.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgXAhQgKgLgBgSQAAgQAJgOQALgQATAAQAPAAAIAPQAHALgBAQQAAARgJAMQgKAOgPAAQgNAAgKgKgAgNgPQgFAJAAAKQAAAMAGAGQAFAFAHAAQAHAAAGgGQAHgGAAgMQABgdgRAAQgLAAgGALg");
	this.shape_15.setTransform(-12.8,16.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AATAmIgCgRIgBgRIAAgHIAAgHQAAgQgGgBQgJAAgGALQgHAJgFANIgBAIIAAAIIAAAHIABAHQAAADgCACQgDADgDAAQgDAAgCgDQgCgCAAgDIgBgHIgBgHIACgWIABgWIAAgHIAAgIQAAgDACgCQACgDADAAQAIAAAAALIAAAJQANgRANAAQANAAAEALQAEAHABAOIAAAIIgBAGQAAAHACAKIABARQAAADgBACQgDACgDABQgHAAgBgIg");
	this.shape_16.setTransform(-20.9,16.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAVA8IgMgTIgNgTIgOALIgBAXQAAAEgCACQgCACgEAAQgIAAAAgLIABgTIABgTIABgbIAAgbIAAgIIgBgIQAAgEACgCQADgCADAAQADAAACACQADACAAAEIAAAIIAAAJIAAAZIAAAaQAKgIAJgJIARgRQADgDADAAQADAAACACQADADAAADQAAADgCACIgYAXIARAYQAMAQAAAFQAAADgDACQgCACgDAAQgFAAgCgEg");
	this.shape_17.setTransform(-29.1,14.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgEA3QgCgCAAgDIAAgJIAAgJIgBgsIgSgCQgHgBAAgGQAAgEACgDQACgBAEAAIAQABIgBgLIAAgJQABgEACgCQACgCADAAQAGAAABALIAAAIIAAAEIAAAFIALgBIALAAQAFACAAAGQAAADgCACQgCACgEABIgDAAIgFgBIgKACIABAtIAAADIAAAEQABARgJAAQgCAAgCgCg");
	this.shape_18.setTransform(33.3,-9.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgFARIgBgIIAAgGIgBgGQAAgIABgCQACgGAEAAQADAAACACQAAAAABABQAAAAAAABQABAAAAABQAAABAAAAIAAAFIAAAFIAAAGIABAHQAAAKgIAAQgDAAgCgDg");
	this.shape_19.setTransform(26.3,-15);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AATAmIgCgRIgBgRIAAgHIABgHQgBgQgGgBQgIAAgIALQgGAJgFANIAAAIIgBAIIABAHIAAAHQAAADgCACQgDADgDAAQgDAAgCgDQgCgCgBgDIAAgHIgBgHIACgWIABgWIgBgHIAAgIQAAgDADgCQACgDADAAQAHAAABALIAAAJQAOgRAMAAQAMAAAFALQAEAHAAAOIAAAIIAAAGQAAAHACAKIACARQAAADgCACQgDACgDABQgHAAgBgIg");
	this.shape_20.setTransform(19.3,-8.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgbA2QgLgMAAgRQAAgVALgLQALgNARAAQAJAAAFADIAHAFQABghACgLQAAgHAHAAQAHAAAAAHIgDAxIgBAVQAAAaACAOIAAACQAAACgBACQgDADgDAAQgFAAgCgHQgGAEgGACQgFACgGAAQgQAAgLgKgAgRACQgHAHAAAPQAAALAHAHQAHAHAKAAQAGABAEgDIAJgHIACgCIgBgOIAAgJIABgJQgDgGgFgCQgFgDgHgBQgMAAgGAIg");
	this.shape_21.setTransform(10.2,-10.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgIA4IABgcIABgcIAAgcIABgcQgBgHAIgBQAHABAAAHIAAAcIgBAcIgBAmIgBASQAAAIgGAAQgIAAAAgIg");
	this.shape_22.setTransform(3.4,-10.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AASAlQgKAGgMAAQgKgBgHgEQgHgFgCgJQgDgWAAgOQAAgMADgNQABgHAGAAQADAAADACQACADAAADIgBALIgBANIABAUQAAAKACAGIAFACIAFAAQAKAAALgDIAAgQIAAgOQAAgRABgMQABgIAHAAQADABADACQACACAAADIgCAeIAAAQIABAQIAAAGIAAAFQAAAEgCACQgCACgEAAQgGAAgBgIg");
	this.shape_23.setTransform(-3,-7.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgXAhQgKgLgBgSQAAgQAJgOQALgQATAAQAPAAAIAPQAHALgBAQQAAARgJAMQgKAOgPAAQgNAAgKgKgAgNgPQgFAJAAAKQAAAMAGAGQAFAFAHAAQAHAAAGgGQAHgGAAgMQABgdgRAAQgLAAgGALg");
	this.shape_24.setTransform(-11.5,-7.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AARA9QgDgCAAgEIgFgPIgFgiIgFggQgHAZgHARQgKAVgDAMIABADQABAEgEACQgCACgFAAQgKAAAAgJIgCgKIgIgnIgSg2IAAgDQgBgHAJAAQAEAAAEAFIAFAQIAJAiIAIAiQAIgUAIgaIAJgYQAGgRAGAAQAFAAACAFQADAHAEAZIAEAeIAHAfQALgZAPgqIAFgPQABgJAEgFQADgEAEAAQAJAAAAAHIgDAIIgEAJIgDAOIgYA3IgLAbQgDAFgGAAQgDAAgDgCg");
	this.shape_25.setTransform(-23.5,-9.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.scene4slimneverwordsstill, new cjs.Rectangle(-49.6,-23.7,104.2,99.2), null);


(lib.scene4slimneverwords = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_54 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(54).call(this.frame_54).wait(1));

	// Layer 1
	this.instance = new lib.scene4slimneverwordsstill();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},44).wait(10).to({_off:false,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.6,-23.7,104.2,99.2);


(lib.scene4slimneverstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.scene4slimneverwords();
	this.instance.parent = this;
	this.instance.setTransform(0,10);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlbJTQhOgDhLgRIgggjQgIgIgDgLQgNgjgXgcIAAgJQABgNgJgKIgCgIIgEgTQgMg4ACg7IACh0IgCgDQAChAgCg+QgFhpAFhpIAAgIQAOgeASgbQAIgLAKgKQASgSAXgLQACgCACgBIAIgEQAZgPAcgIIADAAIADgBIAWgDQAugEAsgKQAWgFAXAAQETgDERAHQBTABBBgyIAIgEIAJgGQAsgeAJg3QAJgtgFgwIAAgQIABgOQAqARAeAoIACACQAFALAFALQADAIAGAFIABAAQAEAMAJAKQAFAFABAGQAIBngCBqQgCBigIBhIgCADQgUAvgfAoQhJBJhBBVQgEABgDAEQgPASgOATQgJAEAAAJIgCARQgKAYgFAbQgEAWgLATQgYAqgKAwQgHAJgDANQgCAMgGAKQgRAXgJAbQgDAIgGAEIhLA5IgaADQgHAGgIAAIhFAAQjJAAjKgIg");
	this.shape.setTransform(17.6,17);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AljJ5IgEAAIiXgcQgugkgWg2QgDgHgBgHQgXgTAAgdIAAgDQgbguACg4IAFjSIAChmIgCiwQgBgaAJgWIABgQQAAgGAFgFQAZg2AwgfIANgJQAMgHAPgFIAHgCIAOgHQAIgNAOgCQAIgKALgFIABgBIAJABQAEADACAFQAkgFAmgBQAMAAAMgDQAOgDAOgBQETgDERAAQAsAAAqgLQAlgKAfgYQACgEADgDQAEgHAHAAQAKgKAJgLIAEgGIABgFQACgGAGgEQAHgrABgrQgBgKgFgGIAAgOIAAgQQgIgGACgKIACgHIABgBIABgDIACgCIADgCIABAAQArACAhAeIADACQAWASARAYQAJAMAFAQIABAAQAsAxgJBLQgDAVAAAVQACBtgFBsQgDAtgHAuIgDAFQgLAYgJAZQgDAGgHADQgMAUgPARIgFAIIgMAJQgDADgDABIgEAFQgDAGgFACQgIANgLALIgGAFQgPAUgPAUQgCACgEABQgYAegZAbQgJAQgNANIgHAIIAAABIAEAEIgCACQgBALgFAKIgFAJQgMBBgdA5QgFAJgGAIQgKApgRAnIgCAFQgUAWgNAeQgDAHgFADQgmAagkAbIgsADQjcAIjdAAIgtAAgAn2kkIgIAEQgCABgCADQgXAKgSATQgLAJgHAMQgSAagOAfIAAAIQgFBoAFBqQACA+gCBAIACADIgCBzQgCA7AMA4IAEATIACAJQAJAJgBAOIAAAIQAXAcANAjQADALAIAIIAgAkQBLAQBOADQDsAKDsgCQAIAAAHgFIAagEIBLg4QAGgFADgIQAJgbARgWQAGgLACgMQACgNAIgJQAKgvAYgqQALgUAEgVQAFgcAKgXIACgRQAAgKAJgEQAOgTAPgRQADgEAEgCQBBhVBJhIQAegpAVguIACgEQAIhhAChhQAChqgIhnQgBgHgFgFQgJgKgEgMIgBAAQgHgEgCgIQgFgMgFgKIgCgDQgegogqgRIgBAPIAAAQQAEAvgIAuQgJA2gsAeIgJAHIgIAEQhCAyhSgCQkRgHkTADQgXAAgWAGQgsAKguAEIgWADIgDABIgDAAQgcAIgZAOg");
	this.shape_1.setTransform(17.8,16.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.scene4slimneverstill, new cjs.Rectangle(-49.7,-46.4,130.6,131.8), null);


(lib.scene4slimnever = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_132 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(132).call(this.frame_132).wait(1));

	// Layer 1
	this.instance = new lib.scene4slimneverstill();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.071,0.071);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(117).to({scaleX:1,scaleY:1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,-3.3,9.4,9.4);


(lib.Scene4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// proText
	this.instance = new lib.tobe1words();
	this.instance.parent = this;
	this.instance.setTransform(15.6,-115.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// slimText
	this.instance_1 = new lib.scene4slimnever();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-27.8,-1.3);

	this.instance_2 = new lib.tobebubble();
	this.instance_2.parent = this;
	this.instance_2.setTransform(32.3,-90.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// animation
	this.instance_3 = new lib.tobeeyes();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-92.5,-84.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// drawing
	this.instance_4 = new lib.SLimMouth();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-93.1,-60.9,1,1,0,0,0,12.6,0);

	this.instance_5 = new lib.ProMouth();
	this.instance_5.parent = this;
	this.instance_5.setTransform(100.8,-3.3,1,1,0,0,0,27.9,-0.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AMCjsQgLAXgYAMQgMAGgNAAQgDABgCAAQgaAAgZAFQgJABgLACQgrAPgsAMQgvAMgrAPQgCABgCABQgrASgkAcQgDACgEACQgpAUgiAfQgOANgPALQgGAEgFAEQgSASgPATQgCACgCACQgTAUgXAPQgOAJgOALQgUAQgMAVQgBACAAADQgHAvAXAtQAGAMAFALQACAEABADQAIATALARQADADABADQAZAqAZApQAFAHABAIQABAEACAEQAVApAIAuQACALABAMQABAUAAAUQAAAIAAAJAMlmgQgEgRADgSAMWl7QAAgDAAgEQAAgJAGgDAMfk9QgBgBAAAAQgFgIgFgFAPOqUQAFAAAEABAN1phQAGgCAHAAARPqRQABACADACQACgEADgEAQXqwQAJgFALgBQAIgBAGADAMomNQADACABACQAAgCgBgBAYRi4QAHADAFAFQAWASAUAUQAHAIAGAJQAQAZAQAZQAFAHAFAGQACACABADQAFAOAJAOQAHALAHALQAFAJAHAKQAQAZAGAgQgBAGABAHQABAMACANQABACAAADQABALAAALQABARAAAQQABACgBADQgFAUgFASQgDAMgDAMQgEASgDATQAAACgBACIAAABQAAABAAABQAAAAAAABQgCANgFALAcS1NIAAgKAZkCfQADADABAEQAQAhgDAlQgBAOgBANQAAAAAAABQgBAMgGAMQAAABAAACQgFARgHAPQgGALgHALAbEEeQgDAgAFAeQACALADAMQAIAfAGAfQABAEABAEQAMAsAIAuQAIAtAEAvQADAdACAdQACASgDARQAAAAAAABQgGAEAAAFQAAABABABQAAADAAACQgCABgDgBQgXgFgXAAQgUAAgPALQgDgBgCABQgLAFgMACQgVALgYgFQgDgBgEgBQgDAAgCgBAWmM6QAMgDALgDQAGgCAFgBQAWgGASgMQAFgDAFgDQALgGAJgIQALgKAMgKQAKgJAIgKQADgDADgDQAAAAAAAAQAFgFAEgFQAfgkASgtQAKgXAJgZQACgFACgGQAFgMACgLQAIgvAAgwQAAgQgBgRQAAgMgBgNQgBgXAAgYIAAgFAb/LNQgBAGgBAFQAAACgBACQgBABgBAAQAAADAAACQADANACAMQABAFABAFQAGAYAEAaQACAHAAAIQAAAHABAGQAAACAAADQABAHABAIQABASABASQADAfADAeQADAbgCAcQgBAQgBARQAAACgBACQgCAHgCAHIAAinAUfShQAGAJAKADQAHACAEACQAvAMAyABQAEABADAAQAwABAvABQApAAAngEQAXgCAWgDQAGgBAHgCQAWgHASgMQAGgEAEgBQAogPAfgkQADgDABgEQAHgRACgUQAAgGABgGIAAAMAUgDlQAAgDAAAMQgDAtARAqQADAJAFAHQAIAMAMAKQAFAEAEAEQALAJALAGQAFgEgFgEAVDGEQgBAFgBAFQgIAZgRARQgUAWgTAWQgEAEgCAFQgXAtAFAyQABALADAKQABADABABQABAFADADARDF2QAJACAKAGQAFADAFABQAlAOAogDQASgBARAAQASgBAQgIQADgCACgDQAKgFAJgEQAEgCABgBAYHGNQAEAhgFAhQgGAlgdAaAM2GDQACAAABAAQALACALgCQAxgIArgaQADgCADgDQAFgGAHgBAMvGEQgBAAgBAAQgDAAgDgBQgNgCgMgGQgrgTgPgsQgLgYgFgaQgEgQgCgRQgHgsgFgrQAAgDAAgDQABgBAAgCQADgFgEAIAMvGEQABAAABAAQADAAACgBQgEAAgDABgAMLGHQgNgHAGAPQACAEABAFQAKAvAcAoQAFAIAGAIQAIAMAKALQADAEAEABQAKADgEAHQgCAEgCAFQgEAPgEAPQgFARABASQABAEAAAEQAAABAAACQAAAFAAAEQAAAOAHALAP5KMQAKgiAEglQAFgVgCgWQgBgOgCgNQgDgSgJgQALrMkIAAAAQAlgYAmgZQAFgDAGgDQAsgWAugSQAGgCAFgCQAYgKAYgIQAFgCAFgBQAPgFAOgEQABgBACAAQAegKAfgJQARgFASgEQAwgKAxgKQAIABAGgEQAPgCALAFANIJ6QAAABAAAAQAFAIAHAGQAUAQAZAEQAnAHApgDANIJ6QgDgFAAgBQAAAAADADAKlRQQgCgCgCgCQgCgCgCgCQgGgJgFgJQgBgCgDgCQgGgWACgaQAAgEABgDQAHgZAKgXQACgEABgEQAFgNALgKQATgRAWgOQAEgDAFgDQAUgPAWgJQAWgJAYgFQAEAAADgBQAPgBAPgDQAQgDARAAQAogBAoAAQAbAAAcABQAXABAYAAQAKAAAKABQAYADAYAAQAtABAtAAQAEAAACAAQABACACACQAOANALAQQAaAoAXAqQAYArAMAvQACAIAAAHQABAOABAOQABAEAAADQAAAFgBAFQgBAFAAAFQgCANgKAIQgBACgCACQgJAJgJAGQgBABAAAAQAAAAgBAAQgFAEgFACIAAAAQAAAAgBAAQAAAAAAAAQgGADgGACQgDABgEAAQgDAAgEAAAV3NCQgHAAgHgBAV3NCQgLADgKAGQgLADgMACQgMABgLADQgqANgugBQgCgBgBAAQgDgEACgBAWmM6QgPADgQAAQgBABgCAAQgHABgGADAWmM6QgMADgMACQgEABgFABQgHAAgHABAK5BvQgEABACAGQACAGgDAFQgCADgBADQAAABAAABQgIAcgVAVQgZAageASQgDACgEABQgdALgfAAQgGABgHgBQgPgBgPgBQgHAAgIgCQgmgLgggSAGSDkQgIADADAMQAGAbAAAcQABAJAAAJQAEAkAIAiQABAFABAFQADAWABAXQACAdgFAcQAAADgBACQgEASABATAJFKkQgHAKgGAKQgFAHgIADQgMAFgLAFQgCAAgCABQgUgBgQgKQgSgNgUgLQgLgHgNgEQgYgIgYgFQgHgCgIgBQgLgBgJAEQgWAKgWALQgIAEgIAFQgJAGgKADQgDABgDACQgMAGgKAHQgNAKgIARQgGAOgDAOQgDALgBAMQgBAGgBAGQAAADgBACQgHAYgIAYQAAAAAAABQABABACACQADAEAEAEQAOATAIAVQAFAMACANQAAAFABAFIAAAAQAAACgDACQAAAFAAAEQgBAGgCAGQgBAEgCABQgQAEgHgRQgPgigLgkQAAgBAAAAQAAgBAAAAQgEgMgDgNQAAgBAAAAQAAgBAAgBQgHgggBggAD8JCQgQgBgLAMQgLALgJANQgVAcgWAbQgJAKgIALQgBACgCACQgHAHgJAKQgBACgCACQgCACgCACQgJAIgGAJQgEAGgFAFQgEADgDACQgDAEgDADQgCADgBAFQAAAEAAADQAEANABANQACAMgBAMQAAANgBAMQAAAFAAAFQAAADgBACQgBAIAAAHQABAJAFAFQACABACAAQALgCAHgKQAIgNAIgJQAAACAAACQADATANAMQAFAFAKgCQADAAACgBQADAAABgBQABgCAAgCABcLnQgHAFgHAEQgCABgCACQgCACgCACQgHAIgGAJQgEAIgEAJQgCADgCADQgKAPgOANQgEADgDACQgFAFgCAGQgBADAAACQAAADACACQACACACAAQAWAIAXgDQAEAAAEgCQAJgEAKgGAB6MXQAAgIAAgHQACABABACQAAAGgDAGgAB+NaQgDgegBgfQAAgDAAgDAB+NaQABABgBAAIAAAAQAAgBAAAAgADhO8IAAAAQgBgFgEgEQgGgHAGgCAIJJXQABAAAAAAQAKACAKADQAYAHAaACQABAAABAAQADAAADABQANADAOAAQAXgBAWgDQAEgBAEgBQATgHAVgCQAHgEAIgBQAagBAYAGQAEABADABQAYAHAJAPALrMkQgHgJgDgJQgDgKgDgGQgLgTgUgPQgVgRgYgOQgFgDgHgCQgdgOghgKQACgDgBgFQAAgBAAgBQgEgKgEgHQgDgHgGgIQgDgDgEgEQgJgKgLgIQgIgFgIgEQAAAAAAgBQAAAAgBAAAHrJLQAHAIAJACQADAAACAAQADABADAAQAAAAAAABQABgBAAAAAIGJWQABAAAAAAQABABABAAAGbIcQgJACAJAFQADABACACQADADABAEQAJAIANAFQADABADABQACABACABQATAHAUAGQADABADABQACABABAAQAMABAGAHAI/KjQgFgDALAEALrMkIgBAAQgBABgCACQgBAAgBABQgUANgVAIQgDACgDABQgNAIgMAIQgJAGgKAIQgDADgFAFQgCACgCACQgOAQgHAVQgEANgFAPQgBADAAAEQgFAagCAaQgBAZAEAXQABACABADQAEAKAHAJQABACACACQAFAGAEAFQACACACACQAKAIANAGQACACADAAQACAAACAAQAAAAABAAAKlRQQAFAEAGAEQADADACACQAJAFAIAEQAUAKARARQARARASATQAEAFAFAGQAEAGAEAFQACAEACADQAHAKAGALQAMAWAKAVQAFAIAFALQACAMAKAKQAHAHADAIQABADACABAKlRQQADgBADgBQACgBACgBQAJgCAEgFAMRVSQgDgJgCgFQAAgCAAgDQAAgBgBAAQgDgEgCgEQgCgRgFgOQgIgZgOgXQgBgDgDgDQgGgHgCgJQgCgIgFgHQgZgfgSglQgKgWgIgWQAAgBAAAAQAGAAAGgBADhO8QAVArAbApQAFAIAGAIQAQAYARAXQAEAFAGAGQACACABACQAIAVARAMQAFAEAEAFQACADAEADQAkAVAiAaQAUAQAPATQAHAJAHAKQACADACADQAKAZAIAaQADAJADAJQAAACABACQACAHACAIARNRbQAbASAeARQArAXAxACQAXABAYgBQADAAACgCQADgBACgBQABAAABAAQACAAABgBQADAAACABARNRbQgBgBgBgBQAAgCgBgBQAAgDgDgCARNRbQgLgHgKgHASEU+QAAgCABgCQACgNACgOQABgIABgHQAAgWgGgUQgHgvgXgpQgFgIgEgIQgJgSgIgRASEU+QAAABAAAAQgBADAAACASFU+IgBAAAq6w9QAAgCgBgBQgBgOgDgJQgBgEAAgDQABgKADgIQABgCAAgCQABgCACgBQAEgCAFAAQANgBAHAHQADACADABQAFAFAHAIQAGAHAAAKQAAADABACQAAADAAACQAAACgBABQACAAACABQACABABABQAHAFAIABAq6w9QABADABADQACAFABAFQABAFAAAFQABAIABAIQgCAFACAFQAAABABACQAAAFgBAHQAAgDAAgEQAAgBAAgCQgBgQgDgOQgCgKgCgLQAAgCAAgDQAAgBAAAAgAswu9QABAAADABQAUAGAXgCQACAAADgBQAJgCAIgFQAHgFAGgHQACgCABgBQAPgVgGgZQgCgEAAgDQABgGgDgBQgBgBAAgCQgBgPgIgLQgBgCgBgCQgBgDgCgDQgGgKgHgHQgEgCgBgFQAAgDgDgCQgFgFgFgIQgDgDAAgHQAAgCAAgDQAFgNAUAFQAIACAKAGQAFADAFAGQAFAEAEAGQAFAEADAFQABACAAABQADAGACAGQABACAAABAzbrtIgCgDIhZiMQAGgEAFgDQBQhVAUgkQABgCACgCQAUACASABQANABAMAAQAEABAEgBQAIAAAHAAQAFABAFgBQAPAAAMgHQAFgDAIAAQAEABADgCQAWgKAVgLQACgBACgBQASgKAUgJQABAGgFAIQgBACgCACQgBACgCACQACAFAIgBQAEAAAEAAQACAAACABQAcACAagDQAJgEAIgGQALgJAMgJQATgOAXgDQAEAAADAAQAPgCAMAEQAEACAEACQAHAEAGABQgIAFgKgBQgFAAgFABQgYAHgPAVQgCAEgCADQgGAMgCANQAAACAEAJQABADABADQAEAFAEgJQACgEACgEQAJgOAOgJQAEgDAGABQAGACAFgCQACgBACACQAHAHgCAMQgCAJgDAJQgHAUgHAVIAAAAApwwxQACAVABAXQAFgIAHgGQAIgGAJAEQACABAAABQAIAOgDASQgBAMgGALQgDAGgFAIQgDAEgDAFQgEAGgFAFQgCACgBACQgEAEgFADQgJAEgIAEQgBABgCABQgLAIgLACQgEABgEABQgEAAgCACQgBABAAACQADAOgKAFQgDABgDACQgCABgCABQgHADgHADAtevnQAAAAAAABQgBABAAABQgBAMAAALQAAAKAAAKQAAAFABAFQACAKACALQAAAAAAAAQAAACABABQAAABAAABIAAAAQABAHABAHQABABAAABIABAAQABADACADQABABAAAAIABABQAAAAABABQAAABABAAQAAAAABABIAAAAQABABABABQAGgMAFgNQADgHADgIQAGgOAFgPAtauVQgagIgGAAQgGgBgGAFQgJAJgJAEQgBAAAAABQgBAAAAAAQgDACgCACQgBABgCABQgCACgDABQgBAAAAABQgCAAgBAAQAAAAAAABIgBAAQgBAAgBAAQgBAAgBAAIgFAAAtzsaQgCAAgBAAQgBAAgBgBQgIgCgEgJQgBgDgBgEQAAgBgBgBQgBgDAAgDQgDgQAFgMIAAAAQACgFADgEQAFgHAFgCQAIgFALABQACABABAAQARAKAEAEQABABABABQAGAHACAJQADAGAAAHQABABAAABQAAABAAABQABAJgBAJQAAACgCADQgBADgDADQgBACgCACQgRgBgQAAQgBAAgBAAQgDgBgCAAQgDAAgBgEQAAAAABAAQADgBADAAAu2uGQgEAAgDgEQgRgVgKgWIgDABQgLAFgFAMQgGAQgJAPQgCADgBAEQgBAIgHAEQgEgIgGgIQgBgBgCgDQgIATgDAVQAAADgCADQAAACgCACQgJgGgIgHQgBgCgCgBQgFgEgFgCQgLAUgMAWQgNAagLAaIgDgBQgKgCgIgDQgLgEgNAAQgMgBgdAXQgKAIgNALIAUgWIADgDQgBABgCABQAAAAgBABQgGAGgGAGIAAABQgCACgBACQgCACgCADIAOgOQAEgEADgDIABgBQAJgJABAAQABAAgLAKIAAAAQgIAIgOANAvns+QgPgDgIAMQgEAEgCAEQgDADgBAEQgEAKAAAKQgBANAFAKQAGAMAKAEQACABACABQAVACAKgPQAGgIAFgIQACgDABgEQABgCACgDQgDgNgDgJQgCgDgCgDQgEgGgGgEQgGgEgHgBQgBAAgBgBgAs+s3QAAAAAAABQAIABAGACIABAAQABAAACABQAGACAGABQAGABAFACQABAAACABQAGACAGACQABAAAAAAQADABACABQABAAABABQACABACABQAGADAIAJQAHAHAHAFQAKAGAKALQABACABAAQAQAIAJAOQADAAACACQACACACAAQABAEAEgBQAMAJALAIQARALAQAOQAFAFAJAEQABACADACQASAKAPALQAEACADADQAGAEAGAEQAmAXAqAVQAFACAGADQAVAMAQAOQAOAMAPAOQAQAPASALQAKAHAMAHQAgATAgATQADABADACQAUAOAOARQAGAHABANQAAACABADQAFAIACAKQgGAIgIAFQgEACgJAAQgCABgDAAQgUAAgRADQgDAAgBgBQgDgDgIABQgDABgCACQgDgBgCAAQgNgCgPADQgbAAgXgHQgCAAgCgBQgGgDgKAAQgEAAgDgBQgEAAgDgCQgDgCgGgBQgNACgOgDQgCAAgDAAQgIgCgJgBQgPgBgPgCQgNgBgMgDQgDAAgCgBQgWgEgXAAQgZABgXADQgVADgYgBQgCAAgCABQgGADgHgBQgYgCgVAFQgDAAgBABQgOAAgMABQgVABgWABQgFAAgEgCQgHgDgJAAQgHACgIgCQgJAAgLABQgIAAgCgEAs6rTQAAAAAAAAQACAAABgBQADgBADgCQAKgIAIgIQADgDADgDQACgCADgCQAGgHAFgLQACgCABgDQAEgHgCgEQgBgDgHgBQgBAAgBAAQgDAAgDAAQgIAAgIABQgBABgBAAIgBAAQgIABgJAAIgCAAQgDAAgDAAQgCAAgCAAQgBAAgCAAAt8l/QgHgIgDgIQgGgHgBgKQgBgOAEgNQABgDAAgCQAFgNAGgMQAAgBABgBQADgHAEgGQABgBAAgCQAAgBAAgBQABgBAAgCQACgEACgDQABgBAAgBQABAAAAgBQAHgKAHgKQAIgLAHgIQAOgQALgWQAFgLAEgKQABgDABgDQADgHACgGQAAgBAAgCQACgagGgYQgBgCgBgDQgEgOgHgNQgEgIADgGQAAgBAAAAAs7rSQABgBAAAAAzbrtQAAABAAAAQgIAMgEANQgBADgBADQAAABAAABQAAABgBAAQAAACAAACQgBADAAADQgCAPACAQQAEAfAcATQARALAVgCQAEAAADgBQAIgBAIgBAyMpjQgCAIAGAKQACACABADQAIAVAOARQACACACACQACACACABQAEAEACAFQACADACADQAOASANAVQAKANAGAMQAAAEABAEQADAIACAIQABACABACQADASAAAUQgBAJgFAEQgBACgCACQgDAEgFgDQAAgFgHAEQgSALgYgEQgIgBgHAAQgagCgVAMQgOAIgKANQgEAGgGAEQgIAIgJAKQgHAKgHAGQgKAIgGAJQgEAGgFADQgCABgCABQgSAQgTARQgJAIgIAIQgbAXgWAdQgFAGgFAHQgCAEgDADQgEAFgEAGQgCACgBACQgCAEgFAEQgCACgCADQgMASgTASQgDADgDADQgHAHgHAGQgRAOgKASQgBADgCADQgGAKgHAMQgEAIgGAGQgHAJgFAKQgBADgCADQgIAMgHALQgFAGgEAHQgKAMgMAOQgIAKgHAKQAAACgCABQgJAKgGAKQgLATgKAYQgBACgBACQgBAHgBAIQgBAHAAAGQgBAUADAUQAEAXAGAVQAIAaAHAbQAGAXAHAWQAHAYAFAaQACALABAMQABAHABAIQAAACAAACQAAABAAAAQABAFAAAFQAEAagDAbQAAADABAEQAAATABATQAAAaAAAZQAAACAAABQAAAQgFAOQgBADAAACQgBAIgFAFQgGAFAGACQgBABAAABQgCACgCACQgIAIgKAFQgGACgGADQgJAJgLADQgOAFgOAHQgsAUgrAPQgYAHgWAJQgDACACAGQACADADACQAJAFAKgBQAbgBAXgKQAXgKAWgMQALgFAMgFQAHgDAIgFQADAEgLAHQgDADgEACQgeAVgZAUQgBABgCABQgDADgEADQgPANgOAMQgFAIgGAHQgDAEgCAGQAbAHAZgPQAEgCADgDQABAAAAgBQAEgCADgCQAWgPAXgMQAEgDAEgCQABAAABgBQAFgDAFgCQAcgPAWgPQAFgDAEgFQAAgBABAAQABgBABgCQADgCADgCQgEAEgEAEIAAABQgEAEgFAEQgPAOgUAMQgGAEgHAEQAAAAgBAAQgFAEgGADQgGADgFADQgKAGgJAGQgTALgNARQgEAGgEAGQgGAHACAOQABACACABQAGAGAKgFQADgBAEAAQAEgDAEAAQAegOAdgOQANgHAMgIQATgNAOgNQADgDAEgDQAIgJAIgKQABgBAAAAQAAAAAAAAQAAgBABAAQADgFAEgEQAAgBAAAAQACgCABgCQABgBABgBQgBADgCAEQgDAFgEAFQAAABgBABQgEAHgEAHQgFAHgEAHQgLARgIASQgQAhgWAeQADAEAKgCQAcgHAZgPQAEgFAFgGQAOgSALgOQAAgDAAgEQAAgLABgMQABgLALgEQAKgFAGgJQADgDADgDQAIgJAJgGQALgIAKgMQAFgGAGgJQAdgkAtgCQAKgBAJgBQASAAASAAQACgBABAAIABAAQAAAAAAAAQAAAAABAAQACAAADAAQACAAADAAQALgCAKgFQADgDAEgCQAUgKADgTQACgMgNAAQgTACgTAAQgDAAgCAAQgCAAgBAAQgaAAgaAAQgNAAgMAGQgKACgMAAQgDABgCAAQgNABgKgFQgYgMgNgVQgDgFgFgFAufpEIAAAAIAAAAQgEgCgEADQgFAFgGAGQgJAKgDAMQAAADgBACQgCANALgDQADgBACgEQADgGACgGQABgDAAgCQAEgNAIgOgAzXrxQgCACgCACQAAABAAAAIAAAAA3QKFQAAAAAAAAQAAgBgBgBQAAAAAAgBQgDgRAAgTQAAgEgBgEQgDgOgCgQQAAgCAAgDQgBgKgCgKQgGgUAAgWQgCgFABgGQgDgFABgHQgCgHABgIQgGgYgCgaQAAgJgBgIQAAgEgBgEQgBgHAAgIQgCgNAAgOQAAgPgBgPQgDgigBgiQADgaAFgYQABgFAAgFQAHgvAWgoQABgBABgCQAUgPAWgPQADgCACgCQAlgeAfglQAfgmAlggQADgDADgDQAlghAggkQADgEADgEQANgTARgOQANAqALAsQAHAbAHAcQAIAmAGAkQABAHABAIQACAwgHAvQgBAHAAAIQgBAGgCAGQgKApgEAqQgCAOgCANQgFAbgCAcQAAAFgBAFQgFAVgEAWQAAAEgCADQgBADAAADArFtpQAGADAEAFQAVASAZAQQAGACAEAFQATAQARANQACACACABQAFAGAHAHQADADACACQAOALAKAMQAIAJAKAIQABADACACQAIAIAKAGQAJAHALAFQAkAWAnATQAJAEAIAEQAbAOAdAMQAPAHAQAFQAbAKAaAMQANAGAOAHQASAKANAJQAFAFAHAGQAHAHAJAEQADACACACQAJALAMAJQAMAJALALQARASAQASQADADACADQADAFAEAFQAJANABAPQABAEAAAEQABAZgHAWQgFAOgGAOQACABgBACQgIAWgMASQgEAGgHAFQgLAIgOABQgCABgDAAQgLACgNABAjMkHQAAAAgBAAQkbAlg5gMQhAAKhCgMQgYgEgZgHQgBAAgBAAQgQABgRAAIgiABQABACAAACQAQArAKAxQAKAuAJAuQAEAZADAZQAAAEAAAEQAFAuABAwQABAwgEAvQgFAvgGAwQgBAHgBAIQgDAsgIAqQgBAEgBAFQAAABgBABAjMkHQAKgCAKgBIADAAIACAAQgBAAgBAAQgLABgMACgAy3GRQACADABAEQACAEADAEQAAAAAAAAQADAFADAFQADAEADADQABAEADAEQAFAHAGAFQABABABABQAFAEAFAFQACACADADQARAOAYABQAKACAKAAQASABARgDQAFgBAFAAQAQgDAQgBQAGgBAFgBQADgBAEgBQAJgBAIgBQALgBAMgCQAGgBAGgBQALgCAMgBQAJAAAJgDQAJgDAKgCQADAAACgBQAjgJAfgVQAEgDADgCQADgBADgDQABgCAEgCQANgOAPgSQAAAAAAAXQAAAWAAAiQAAAigBAJIAAABQgBAWgBAWQAAAIAAAHQgBAbgDAaQgGAvABAyQAAAjABAjQABAEAAAEQABAvAAAwQAAAwABAxQAAAKgFAHQgBADgDACQgVAKgVAJQgKAFgNAAQgHAAgIABQgCAAgDAAQgYADgaABQgaAAgYgCQgHgBgIgBQgCAAgDgBQgKgBgKgCQgGAAgFgDIAAgCQAAABAAABQABAGAAAHQAGAvABAwQABAvAAAwQAAAIgBAJQgDAagCAbQAAAGgBAGQgCARAAARQAAABAAAAQAAAGgBAEAuXIzIAKgBQAGgBAGgCQAogKAkgRQAJgFAIgEQAIgFAHgFQADgCAEgDQACgCABgDAyvGJQgFAAgEABQAAABgBAAQAAAAAAAAQgIACgHAEQgDACgDACQgCABgCAAQgFACgEAGQgDADgBADQgEAIgEAIQgKAVgDAYQAAACgBADQgEARgEARQAAABAAAAQgBAHgCAIQgBAKgBAKQgBAIgBAJQgBANgCAMQgDAagIAZQgBADgDAEQACABgDABQgBAJgCAJQgBADAAACAyMHUQgEgCAAAMQAAATADATQAEARALANQgMACgKAAQgGAAgGgBQgegEgegKQgMgDgIgHA0jLzQAAAJABADQAAABAAAAQAAgGgBgHIAAgXA0iL/QAFDEgCAJQgDAJALAFQALAFAOAGQAPAFAGACQAFACAFABQAGABAHACQADAAAEABQAAAAABAAAyUVTQgDAKgEgKQAAgCgBgDQAAgDgDgFQAAgEAAgEQAAgMgCgMQgBgOgDgNQgJgvgJgwQgCgJgBgJQgDgVgEgVQgCgNgBgMQgCgYgCgYQgCgXAAgYIAAgFQABAAABAAQAYAEAaAAQACAAADAAQA6ABA7gBQAFAAAFgBQAJgBAJAAIAAgEIAAgBQgEgpgKgpQgKgxgHgxQgCgRgBgSQAAgCgBgDQgCgGAEgBAx+IiQABABABACQAEAIAHABQABAAACgBQAAAAABgBQACACACABQAeANAjgBQAQAAAQgBQADAAACgBQAJgBAEgFAv9P1QAAgBgDgEAwAP1IAAAAIAAAFQABABAAACAwAP1QACAAABAAQgBACgCgBgAwAPxQAAACAAACAtjQMQAAAugDAuQAAAOgCAOQgBAugCAuQAAALgBAMQgBAaAAAaQAAAIgBAHQAAACAAACQgBAIAAAIQAAAFABAE");
	this.shape.setTransform(0.5,-4.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#993300").s().p("AkqCAIAAgEIAFgbIABgPQABgWgHgUQgHgugXgpIgIgQIgSgiQAbASAeAQQAsAXAwACQAYABAYgBIAOAKIAAAAIgMAFIgHABIgIAAIAIAAIAHgBIAMgFIAAAAQAGAJAJADIALAEQAwAMAxAAIAIABIBeACQApAAAngDIAtgFIAMgDQAWgHATgMIAJgFQApgPAfgkQACgDACgEQAHgRABgUIACAAIAAD/g");
	this.shape_1.setTransform(146.1,117.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AOeG9QgJgBgFgEQgGgDgDgHQgDgIgBgFIgBgLQgBgHgIgKQgHgLgBgHQgCgKAHgIQAGgHALAAIAAgBQAWAHAagBIAHgBIAHgDQAPgEAKAHQAKAGgBAMQAAAMgKAGIgGAEQAGAHgDAKQgDAHgHAJIgIAKIgKAFQgPAHgPAAIgCAAgAP+DBQAOgPAAgXQAAgogqgEIgBABIgFABIAAgBIACgDQAHgMALgLIACAAQAFACAFADQAMAOADAVIAEABQADAMAAANQABAOgHAMQgFAKgIAGIgCAAIABgBgAQOBwQAIAIACAOQABAJgBAIQAAgVgKgSgAPaBpQAAgGAFgFIAHgEQgHAHgFAIgAOrBYIAAAAIABgBIgBgNIACAFIACAEIABAGIAAALQgBgHgEgFgAOYBgIACACIgBAAIgBgCgANnBIIAHgGQAJgLAOgBQAfgBACAeQgIgHgPgDIgEABQgPAEgLAJQgEgIgGgHgAN6AxIAFAAQgMAEgKAIQAEgIANgEgAvJhxIABgFQACgNAJgJIAMgLQADgEAEACIAAABQgIAOgDAMIgBAFIgFAMQgCAFgDAAIgEABQgHAAACgKgAv+k+IgFgBQgJgFgGgMQgGgKABgMQABgKAEgKQABgEACgDIAGgJQAJgMAOAEIADAAQAGACAGAEQAGADAFAHIADAGIAGAWIgCAFIgEAHIgKAQQgKAMgRAAIgEAAgAtzlqIgCAAIgFAAQgDgBgBgEIABAAIAGgBIgGABIgBAAIgEAAQgIgCgEgJIgDgIIAAgCIgCgFQgCgQAEgMIABgBIAFgJQAEgGAGgDQAHgEAMAAIACACQARAKAEADIADADQAFAGADAJIADANIAAADIAAACQABAJgBAIIgBAFQgCAEgCADIgEADIghgBg");
	this.shape_2.setTransform(1.6,-46.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AF0PEIhfgCIgIgBQgxgBgwgMIgLgEQgJgDgGgJIAAAAIABAAIAKgGIAAAAIABgBQAKgGAIgJIAEgEQAJgIACgNIABgKIABgKIAAgHIgCgcQAAgHgCgIQgNgvgXgrQgXgqgbgoQgLgQgOgNIgDgEIADABQAvABApgNQAMgDALgBQAMgCALgDQAKgGALgDIAOgBIAKgCIAXgFIAYgGIALgDQAVgGATgMIAJgGQALgGAKgIIAWgUIATgTIAFgGIABAAIARAPIAFABIAIACQAXAFAVgLQAMgCAMgFQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAQgLATAAQAXAAAYAFIAEAAIAAAFIAGAZIACAKQAGAYAEAaQABAHAAAIIABANIABAFIABAPIADAkIAACnIgCAMQgBAUgHARQgCAEgCADQgfAkgpAPIgJAFQgTAMgWAHIgMADIgtAFQgjAEgkAAIgJAAgAmiInQgGgJgDgJIgHgQQgKgTgVgPQgVgRgXgOIgMgFQgdgOgigKQACgDAAgFIgBgCIgHgRQgEgHgGgIIgGgHQgKgKgLgIIgPgJIgBgBIgBAAIACAAIAUAFQAYAHAaACIABAAIAGABQANADAPAAQAXgBAWgDIAHgCQAUgHAUgCQAHgEAIgBQAbgBAYAGIAGACQAYAHAJAPIANACIACAGIABAJQAAAOAHALQgHgLAAgOIgBgJIABABQAFAIAHAGQATAQAaAEQAnAHApgDIAngVIAHAWIgDABIgcAJIgLADIgvASIgMAEQguASgsAWIgKAGIhMAxgABclHQAagFAYgOIAGgFQgBgFABgFQADgEADACQAAgFAGAAIABAAIABgDIAAgDIgBgGQAAgIABgIQgNgMgGgOIgIgDQgLgFgKAIQgLAIgGAMIAJgFQABAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAIAAABQgGAGgFADIACAFIgBAFQAAABgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAIgBgBIgBgIQgTAJgSgPQgHgFACgJIAAgCIgBgCIgIgEQgXgIAGgbQAEgQAJgPIAEgFIADgHQgGgGgDgGIgBgBQgQgTAKgZQADgHAFgHQgegLAAgdQAAgLAFgJIgCAAQgSgGgKgKQgOgJgFgQQgxAJgmgiIgBgCQgOAHgOgFQgYAAgSgWQgKAYgYAJQgJADgHgFIgCAAQgSAbgdgCIgBABQgBAFgHAFQgCACgBADQgPAmAIAlIADAFQAUAWgKAcQANAIALALIABABIgCADIgHADIgVgQIgBgBIgDgCIgCgBQgwAYAmAgQARAOAWgGIAJgGQACgCAEAAQAAAcgogKIgNgEIAGAMIgEABQgBgHgDgHQgmgQARglQgbAEgMgOQgKgLAAgUQgBgNAHgLIAIgCQgOgOAFgUQACgJAFgIIADgBQgEgFgDgIQgIgZAVgNIgEgEQgDgLACgLQADgWAQgMIgBgCQgCgPAFgPQAHgWATgIIADAAQgRgZANggQAMggAhgDQALgBAKACQAHgOANgLQAMgLAPgEQAOAAANAEIAKABIABgBIADgDQARgTAZgIIADAAIAOACQAJgFAMgBQAIgBAGADQAOgIARgEIAXgGQA8ABAXAkQAMgVAdgBIAAAAQAuAIAIAiIADAGQBLgBADBEQBGAAAEBCQAAAPgEAOQAzAagKBBQgEAXgNALIABACIABACQAQAZgLAZQgDAPgJAOQgFAIgCAHQALAQgFATQgEAQgPARIgDADQASAdgYAdIgIACQgEAIgFAEQgDAAgDgCIgKgEIgDAGIgCAEIgDAAQgGAAABAGIACACQgJAKgMAEIgBABIAAADIAAADIgJgEIgLACIgFAAQgRgFgOgIIgDgCIgEgCIgBADIgPANIABACQgHAGgKADQgOAFgMAAIgLgBgAClltQAJAFAJADIgIgEIAAgBIgEgCIgFgEIgBADgAEimXQgLAMgOAIIAJACQAPgLACgNIABgCIgCAEgABUmNIAIgCIAAgCIgIAEgAEkmiIgBgBIADgBIABgEIABgFIgEgGIgGgJQgGANAMANgABmmmIAAACIAGgGIgGAEgAAcnHIABgDIACgDIAAgFQgDAGAAAFgAlWn2IACAAIAAgBIgCABgAk6ovIABAHQgCAOAGALIgHAFIABAAIAIADQAGgUgMgTIgBgCIAAABgAAgofIABgFIAAAAIgBAFgAl1o6IAHAAIgBgBQgFgIgFgFQgBAHAFAHgAl0qKQgGAJADAJIAAgHQAAgJAGgDIgDABgAlgqGIgBgDIgCgBIgBAAIAEAEIAAAAgAlqq+QgEAIgBAKIABAJIAGAGQgEgRADgSIgBACgAi+rOIABABIgBgBgAkbtiIAEAEQAGgCAGAAIAAgBQgFgCgGAAIgFABgAkCtnIAAABIAAgCIAAABgAg+uOIAAAAQABACAEACIAEgIIgJAEgAi4nvQgGgtAWgiQAFgIAHgIIALgLQAYADADAZIAAABIACAEQAKATAAAVQgBAIgCAJQgJAlgnACIgCAAQgXAAgCgXgAiNngIABgBIAAAAIgBABgAh2oMQAAAXgOAOIgBABIgEAEIAGgEQAIgGAFgKQAHgMgBgNQAAgNgDgMIgEgCQgCgVgNgNIgFgFQgCgCgEAAIgBACQgLALgHALIgCAEIgBABIABgBIAFgBIABAAQAqADAAApgAkOoZIAAAAIAAgKIAAgDIAAAAQAAgPgEgNIgBgEIgDgMQgGgGAAgHQgEADgFACIgBgBIAAgBIAAgBIAAAAQAGgIAHgGQAKgIAMgEIANgDQAaAHAFAWIABAMIgBABIAAAAQAEAGABAHIAAgLIAAgFIgBgBIgCgFIABgCIABgBQAMARgIAWIgFAKQgDAKgFAIQgFADgBgEIABgDQgMAKgRADQgLgCgFgHgAjppFIABgBIgCgBIABACgAj9pxQgOABgJAKIgHAGQAGAIAEAIQALgKAPgEIAEgBQAPAEAIAHQgCgdgdAAIgCAAgAhNpTQgCgugwgCQgPAAgPADIgBACIAAABQgLAHgKgDQAYgSAgABQAyAHABAvIgBABIgCABIgCgBgAkbqEQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAcgSAkgGIAAAAQAIgBADAGIAAABIAAABQgBAAAAABQAAAAgBABQAAAAgBAAQgBAAAAAAIgBgBIgBgBIgBgBQgZADgXAJIgBABIAAABIgBABIgPAGIgCgBg");
	this.shape_3.setTransform(117.1,21.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#009933").s().p("ABHFEIgPgCIgFAAIgUgDQgHgBgEgCIgBgDIAAgCIgBgFIABAAIAAAAQAAABABAAQAAAAAAAAQABAAAAgBQAAAAAAAAQAAgCgDgDQgEgqgJgpQgKgwgGgxIgDgjIgBgFIgBgEQAAgBAAAAQAAgBABgBQAAAAABAAQAAgBABAAQgBAAAAABQgBAAAAAAQgBABAAABQAAAAAAABIABAEIABAFIADAjQAGAxAKAwQAJApAEAqIAAAAIAAAFIgRABIgJAAQg7ABg7gBIgFAAQgaAAgYgDIgCgBIAAAAIgIgBIgMgDIgLgCIgUgIQgPgFgLgFIgIgPQACgIgFjFIAAACIAAgNIgBgXIABAAIAFAAIAFgBQALgCALgEIAGgGQAVgKADgSQACgMgNAAQgUACgSAAIgGAAIABgFIAEgRQAAgBABAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIADgIQAJgYADgaIADgZIABgSIADgUIACgPIAAAAQAEgSAFgRIABgFQADgYAKgVIAHgPIAEgHQAFgGAEgBIAFgCIAGgDQAHgFAHgCIADAGIADAHIAEAIIAAABIAHAKIAFAGQACAFADAEQAEAGAHAGIABABIAKAJIAGAFQAQAOAYACIAUACQATABAQgDIAKgCIAggEIAKgCIAHgBIASgCIAWgDIANgCQALgDALAAQAJgBAJgDQAKgDAKgBIAFgBQAjgJAegVIAHgGQADAAAEgDQABgDAEgBIAcggIAAAWIAAA5IgBArIAAAAIgCAtIgBAPQAAAagDAaQgHAwABAxIACBGIAAAHIABBfIABBiQAAAJgEAIQgCADgDABIgpAUQgLAEgMAAIgQABIgEABQgZADgZAAIgJAAQgVAAgUgCgAgXiHIABAAIABAAIAggCIAFAAQAJgBADgFQgDAFgJABIgFAAIggACIgBAAIgBAAIAAAAIgBAAQgfAAgbgLIAAAAIgEgCIgEgCIgBABIgCABQgHgCgFgIIgCgCIACACQAFAIAHACIACgBIABgBIAEACIAEACIAAAAQAbALAfAAIABAAIAAAAgAEEjHIgHAGIgPAJIgRAJQgkARgnALIgNACIgKACIAKgCIANgCQAngLAkgRIARgJIAPgJIAHgGIADgEIgDAEgAjJitQAeAJAeAFIANABQAKAAALgCQgLgOgDgRQgDgQAAgRIAAgEQAAgKACgBIAAAAIABAAIAAABIAAgBIgBAAIAAAAQgCABAAAKIAAAEQAAARADAQQADARALAOQgLACgKAAIgNgBQgegFgegJQgLgEgJgGQAJAGALAEg");
	this.shape_4.setTransform(-103.8,66.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#996633").s().p("AkPAeIAKgHQBRhUAUgkIADgEIAmADIAZABIAHAAIAPAAIAKAAQAPAAAMgHQAGgDAHAAQAEABAEgCQAVgKAVgLIAEgCQARgKAVgJQABAGgFAIIgDAEIgDAEQABAFAJgBIAHAAIAFABQAbACAbgDQAJgEAHgGIAXgSQAUgOAWgDIAIAAQAOgCANAEIAIAEQAGAEAGABQgHAFgKgBIgKABQgYAHgPAVIgEAHQgGAMgCANIADAMIACAFIAAABIgBACIgBAYIAAATIABAKIAFAUIAAABIAAACIAAACIAAAAQgagGgGgBQgFgBgGAEQgJAJgKAEIgBABIgBAAIgEAEIgDACIgGADIgBABIgCABIgBAAIAAAAIgCAAIgDAAIgFAAIgBgFQgDgBgDgEQgSgUgKgWIgCABQgMAFgEAMQgGAPgKAPIgCAHQgBAIgIAEQgDgIgGgIIgDgEQgJATgCAVQAAADgDADIgBAEIgQgNIgEgDIgJgGIgXAqQgNAagMAaIgCgBIgSgFQgMgEgNAAQgMAAgcAWIgBgBIAAgBIAJgKIgKAKIAAAAIgCgBIADgDIgCACIgBABIgNANIAAAAIgIAFg");
	this.shape_5.setTransform(-105.7,-96.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFCC99").s().p("AhKTcQAAgRACgRIABgMIAFg1IABgRIgBhfQgBgwgFgvIgCgNIAAgCIABACQAEADAHAAIAUADIAFABIAPACQAXACAaAAQAZgBAZgDIAEAAIABAGQgBAugDAuQAAAOgCAOQAAAugCAuIgBAXIgCA0IgBAPIAAAEgAhKTcIifAAIgCgYIgEgbIgThfIgDgSQgCgVgEgVIgEgZIgDgwQgCgXgBgYIAAgFIACAAQAYAEAaAAIAFAAQA7ABA7gBIAKgBIARgBIABAFIAAADIAAACIACANQAFAvABAwIABBfIgBARIgFA1IgBAMQgCARAAARgAqqNVQAVgeAQghQAJgSAKgRIAJgOIAJgOIABgCIAGgKIAEgHIgCACIgDAEIgBABIgHAJIgBABIAAAAIAAABQgIAKgJAJIgGAGQgOANgUANQgMAIgMAHIg7AcQgFAAgEADQgDAAgDABQgLAFgGgGQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQgDgOAHgHIAIgMQANgRASgLIATgMIALgGIAMgHIAAAAIANgIQAUgMAQgOIAIgIIAAgBIAIgIIgFAEIgDADIgBABQgEAFgFADQgWAPgcAPIgJAFIgDABIgIAFQgXAMgWAPIgGAEIgCABIgHAFQgZAPgagHQABgGADgEIALgPIAdgZIAHgGIADgCIA3gpIAIgFQAKgHgDgEIgPAIIgWAKIgtAWQgYAKgaABQgLABgJgFQgDgCgBgDQgDgGAEgCQAWgJAXgHQAsgPAsgUQANgHAPgFQALgDAIgJIANgFQAKgFAIgIIADgEIABgCQgGgCAGgFQAFgFABgIIABgFQAFgOAAgQIAAgDIABgzIgCgmIAAgHQACgbgDgaIgBgKIAAgBIgBgEIgBgPIgEgXQgEgagIgYIgMgtIgPg1QgHgVgEgXQgDgUABgUIABgNIADgPIABgEQAKgYAMgTQAGgKAJgKIACgDQAGgKAJgJIAVgaIAJgNIAQgXIADgGQAEgKAHgJQAGgHAFgIIANgWIADgGQAKgSARgOIANgNIAGgGQATgSANgSIADgFQAFgEACgEIADgEIAJgLIAEgHIALgNQAVgdAbgXIARgQIAmghIAEgCQAFgDAEgGQAGgJAJgIQAIgGAHgKQAIgKAJgIQAFgEAEgGQAKgNAOgIQAVgMAaACIAPABQAYAEATgLQAGgEAAAFQAFADADgEIAEgEQAFgEAAgJQABgUgEgSIgBgEIgGgQQgBgEABgEQgGgMgKgNQgNgVgPgSIgDgGQgCgFgFgEIgEgDIgDgEQgOgRgIgVIgDgFQgHgKACgIIgCgGIgPACIgIABQgVACgQgLQgdgTgEgfQgCgQACgPIABgGIABgEIAAgBIAAgCIACgGQAEgNAIgMIABAAIAXgTQAcgXAMABQANAAAMAEIASAFIACABQAMgaANgaIAXgqIAJAGIAEADIARANIABgEQADgDAAgDQACgVAJgTIADAEQAGAIADAIQAIgEABgIIACgHQAKgPAGgQQAEgMAMgFIACgBQAKAWASAVQADAEADAAIABAGIAEAAIADAAIACAAIAAAAIAAgBIADAAIABgBIAGgDIADgCIAEgEIABAAIABgBQAKgEAJgJQAGgFAFABQAGAAAaAIIADAOIABACIAAAAIAEAGIABABIAAABIACABIAAABIABABIABAAIABACIALgZIAGgPIALgdIAFABQAUAGAWgCIAFgBQAKgCAHgFQAIgFAGgHIACgDQAPgVgGgZQgCgEABgDQABgGgDgBQgBgBAAAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQgBgPgIgLIgCgEIgDgGQgGgKgIgHQgEgCAAgFQgBgDgCgCQgGgFgEgIQgDgDgBgHIABgFQAFgNATAFQAJACAJAGIALAJIAJAKIAHAJIACADIAEAMIABADIAAABIABAFIADAVQADAOACAQIgBADIAAAHIABgMIAAgDQgCgFACgFIgCgQIgBgKIgEgKIgCgGIAAgDQgCgOgDgJIAAgHQABgKACgIIACgEIACgDQAFgCAFAAQAMgBAHAHIAGADIAMANQAGAHAAAKIABAFIAAAFIAAADIAEABIADACQAHAFAIABIgEALQADAVAAAXQAFgIAIgGQAHgGAJAEIADACQAHAOgCASQgCAMgFALIgJAOIgFAJIgJALIgEAEQgDAEgFADIgRAIIgDACQgMAIgLACIgHACIgHACQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQACAOgKAFIgGADIgEACIgNAGIAFANQAGADAFAFQAVASAYAQQAHACADAFQATAQARANIAEADIAMANIAGAFQAOALAKAMQAIAJAKAIIACAFQAIAIAKAGQAKAHALAFQAkAWAmATIARAIQAbAOAdAMIAfAMQAbAKAaAMIAbANQATAKAMAJIAMALQAIAHAJAEIAFAEQAJALALAJQANAJAKALIAiAkIAEAGIAHAKQAJANACAPIAAAIQABAZgHAWIgKAcQAAAAAAAAQABABAAAAQAAAAAAABQgBAAAAABQgHAWgNASQgEAGgHAFQgKAIgOABIgFABIgYADIgDAAIgVABIAAACQkcAlg4gMQhAAJhDgLIgagGIgFgBIgRgEIgDAAIAAAAIgDgBIgFAAIgcgBQgOAAgNADIgDABIABAEQAQArAJAxIATBcQAFAZADAZIAAAIQAFAvABAwQABAvgFAvQgEAvgHAwIgBAPQgDAsgJAqIgBAJQAAAAAAAAQAAABgBAAQAAAAAAABQAAAAgBAAIgFgMIgcAgQgEACgBACQgEADgDABIgHAFQgeAVgjAJIgFABQgKACgKADQgJADgJAAQgLABgLACIgMACIgWADIgSACIgHACIgKACIghAEIgKABQgQADgTgBIgUgCQgYgBgQgOIgGgFIgKgJIgBgCQgHgFgEgHQgDgEgCgEIgFgHIgHgKIAAAAIgEgIIgDgHIgDgGIABAAIABgBIAIgBIALABIACgGIACgHIAIgrIABgKQACgcAFgbIAEgbQAFgqAKgpQACgGAAgGIACgPQAGgugCgwIgBgPQgGglgJgmIgNg3IgZhWQgQAOgOATIgGAIQggAkgkAhIgHAGQglAggeAmQggAmgkAeIgGAEIgqAdIgCADQgWAogGAvIgCAKQgFAYgCAaQAAAiADAiIACAeQAAAOABANIACAPIAAAIIACARQACAaAFAYQAAAIABAHQgBAHADAFQgBAGACAFQAAAWAGAUQADAKAAAKIABAFQABAQAEAOIABAIQgBATADARIABABIAAACIAAAAIAHgCIAIAKQANAVAYAMQAKAFAMgBIAFgBIAXgCQALgGAOAAIAzAAIADAAIAGAAQASAAAUgCQANAAgCAMQgDATgVAKIgGAFQgLAFgLACIgFAAIgFAAIgBAAIAAAAIAAAAIgEABIgjAAIgUACQgsACgdAkIgMAPQgKAMgKAIQgJAGgJAJIgFAGQgHAJgKAFQgKAEgBALIgBAXIgBAHIgZAgIgJALQgYAPgdAHIgGAAQgEAAgCgCgAJ/nRIAGABQACgCACgBQAIgBADADQABAAAAAAQAAABABAAQAAAAABAAQABAAAAAAQASgDAUAAIAFgBQAIAAAFgCQAIgFAFgIQgCgKgEgIIgCgFQgBgNgFgHQgPgRgTgOIgGgDIhBgmIgWgOQgRgLgQgPIgdgaQgQgOgWgMIgLgFQgpgVgmgXIgMgIIgIgFQgPgLgSgKIgEgEQgIgEgFgFQgQgOgRgLIgYgRQgDABgBgEQgDAAgCgCIgEgCQgKgOgPgIIgDgCQgKgLgKgGQgGgFgHgHQgIgJgHgDIgEgCIgCgBIgFgCIgBAAIgMgEIgDgBIgKgDIgMgDIgEgBIAAAAIgOgDIgBgBIAAgCIgDgNQgDgJgFgHIgDgCQgEgEgRgKIgCgBQgMgBgHAFQgGACgEAHIgFAJIgBAAQgEAMACAQIACAGIAAACIADAHQAEAJAIACIACABIACAAQABAEADAAIAFABIACAAIAhABIAEAAIAEAAIAFAAIACAAIASgBIAAAAIACgBIAQgBIAHAAIABAAQAHAAABAEQACAEgEAHIgCAFQgFALgHAHIgEAEIgHAGQgHAIgKAIIgGADIgDABIgBAAIgBABIABAAQgDAGAEAIQAHANAFAOIABAFQAGAYgBAaIgBADIgEANIgDAGIgJAVQgLAWgNAQIgPATIgPAUIAAABIgBACIgEAHIgBADIgBACIgBADIgHANIgBACQgGAMgEANIgCAFQgEANABAOQABAKAGAHQAEAIAHAIIAKgIQACAEAIAAIAUgBQAHACAIgCQAJAAAGADQAFACAFAAIAqgCIAbgBIAEgBQAVgFAXACQAIABAFgDIAFgBQAXABAWgDQAXgDAYgBQAYAAAVAEIAFABQAMADANABIAeADIASADIAFAAQANADAOgCQAFABAEACIAGACIAIABQAKAAAFADIAFABQAXAHAaAAIASgCIAKABgAAOqlIgMALQgIAKgCAMIgBAFQgDANAMgDQACgBACgEIAFgMIABgFQAEgNAHgOIAAAAIAAAAIgDgBQgCAAgCACgAhJuXIgGAIQgCADgBAEQgEAKgBAKQgBANAGAKQAGAMAJAEIAFACQAUACALgPIAKgQIAEgHIACgFIgGgWIgDgGQgFgGgGgEQgGgEgGgBIgDgBIgGgBQgKAAgHAKgAkltOgAkltOgAkltOIgBgBIAEgEIgDAFgAkltOIANgOIAIgHIAAgBIAKgJIgKAKIAAAAIgVAVIAAAAgAkitTIADgEIAAgBIANgMIABgBIACgCIgDADIgTAWIADgFgABovaIgBgCIgBAAIgBgBIAAgBIgCgBIAAgBIgBgBIgEgGIAAAAIgBgCIgDgOIAAAAIAAgCIgBgDIAAAAIgEgVIgBgKIAAgUIABgXIABgCIAAgBQAEAFAEgJIAFgIQAJgOANgJQAFgDAGABQAGACAFgCQAAgBAAAAQABAAAAABQABAAAAAAQABAAAAABQAIAHgDAMIgFASIgOApIAAAAIgLAdIgGAPIgLAZIAAAAgABav3IAAAAg");
	this.shape_6.setTransform(-94.4,5.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CC9966").s().p("AgaOIQgCgBgBgDQgCgIgHgHQgKgKgCgMIgKgTIgWgrIgNgVIgFgHIgIgLIgJgLIgigkQgRgRgVgKIgQgJIgGgFIgLgIIAGgCIAFgCQAIgCAEgFQgEAFgIACIgFACIgGACIgEgEIgDgEQgHgJgEgJIgEgEQgFgSAAgUIAAgKIABgHQAHgZAKgXIAEgIQAEgNALgKQATgRAWgOIAJgGQAUgOAWgKQAWgJAYgFIAIgBIAegEQAQgDAQAAIBPgBIA3ABIAwABIAUABQAXADAYAAIBaABIAGABIgGgBIhagBQgYAAgXgDIgUgBIgwgBIg3gBIhPABQgQAAgQADIgeAEIgIABQgYAFgWAJQgWAKgUAOIgJAGQgWAOgTARQgLAKgEANIgEAIQgKAXgHAZIgBAHIAAAKQAAAUAFASIAEAEQAEAJAHAJIADAEIAEAEQgGABgGAAIAAABQAJAWAKAWQARAlAZAfQAGAHACAIQACAJAGAHIAEAGQANAXAJAZQAFAOABARQACAEAEAEIkHAAIgFgSQgJgagKgZIgEgGIgOgTQgPgTgUgQQghgaglgVIgGgGIgJgJQgRgMgIgVIgDgEIgJgLQgSgXgQgYIgKgQQgbgpgWgrIABgEIgBgFQAEgCAAgCIAAAAIAAAAIgCgKQgBgNgFgMQgIgVgPgTIgHgIIgDgDIAAgBQAJgXAGgZIABgFIACgMIAEgXQADgOAHgOQAIgRAMgKQALgHALgGIAGgDQAKgDAKgGIAPgJIAtgVQAHgDAHAAIABAAIAAAAIACAAIADAAIAPADQAYAFAXAIQANAEAMAHIAmAYQAPAKAUABIABAAIABgBIABAAIAAAAIABAAIAYgKQAHgDAFgHIANgUQAiAKAdAOIAMAFQAXAOAVARQAVAPAKATIAHAQQADAJAGAJIAAAAIBMgxIAKgGQAsgWAtgSIAMgEIAvgSIALgDIAcgJIADgBIgHgWQAKgiAEglQAEgQAAgRIAAgKIgEgbQgCgSgJgQQAJAQACASIAEAbIAAAKQAAARgEAQQgEAlgKAiIgnAVQgpADgmgHQgagEgTgQQgHgGgFgIIgBgBIAAgDIAAgIQgBgSAEgRIAJgeIAEgJQAEgHgKgDQgEgBgEgEQgJgLgIgMIgMgQQgbgogLguIAFgRIACgMQgrgTgPgsQgKgYgGgaIgGghQgHgsgEgrIAAgGQABgCAAgBQABgBAAgBQAAAAAAAAQgBABAAABIgBAAIABgCIACgGQACgDAAgDIgBgFIAAgDQAAgEADAAQgDAAAAAEIAAADIABAFQAAADgCADIgCAGIgBACQgIAcgUAVQgaAageASQgDACgEABQgcALggAAIgMAAIgegCIgPgCQgmgLgggSIgKARQgJADADAMQAHAbAAAcIABASQADAkAJAiIABAKQAEAWABAWQABAdgFAcIgBAFQgEASABATIgDAAQgJACAJAFIAFADIADAHQAKAIAMAFIAGACIAEACQATAIAUAFQAHAIAKACIAFAAIAFABIABABIAAgBIACABIABAAIABABIAPAJQALAIAKAKIAGAHQAGAIAEAHIAHARIABACQABAFgDADIAAAAIgCgBQgCAAgBgBQgBAAgBAAQAAAAAAAAQAAAAABABIABAAIgBAAQgBgBAAAAQAAAAAAAAQABAAABAAQABABACAAIACABIAAAAIgNAUQgFAHgHADIgYAKIgBAAIAAAAIgBAAIgBABIgBAAQgUgBgPgKIgmgYQgMgHgNgEQgXgIgYgFIgPgDIgDAAIgCAAIAAAAIgBAAQgHAAgHADIgtAVIgPAJQgKAGgKADIgGADQgLAGgLAHQgMAKgIARQgHAOgDAOIgEAXIgCAMIgBAFQgGAZgJAXIAAABIADADIAHAIQAPATAIAVQAFAMABANIACAKIAAAAIAAAAQAAACgEACIABAFIgBAEIAAAAQgBgFgEgEQgCgDAAgDQAAAAAAgBQAAAAAAAAQABgBAAAAQABgBAAAAQAAAAgBABQAAAAgBABQAAAAAAAAQAAABAAAAQAAADACADQAEAEABAFIAAAAIgCAMQgBAEgDABQgPAEgIgRQgPgigKgkIgBgBIAAgBIgGgZIAAAAIAAgBIgBgCQgGgfgCghQACAhAGAfIABACIAAABIAAAAIAGAZIAAABIABABIgDABIgBAEIgEABIgFABQgLACgFgFQgMgMgDgTIAAgEQgIAJgJANQgHAKgKACQgBAAAAAAQgBAAgBAAQAAAAAAAAQgBgBAAAAQgGgFAAgJIABgPIAAgFIABgKIgUAKQgDACgEAAQgYADgVgIQgDAAgCgCQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBIAAgFQACgGAGgFIAGgFQAOgNALgPIADgGIAJgRQAFgJAIgIIAEgEIAEgDIAOgJIACADIgHAFIgGAHIgDAIIABAHQADANACANIABAUIAAAEIgBAZIABgZIAAgEIgBgUQgCgNgDgNIgBgHIADgIIAGgHIAHgFIAJgLQAHgJAJgIIADgEIAEgEIAPgRIAEgEIAQgVQAWgbAVgcQAKgNALgLQALgMAQABIAFAAIAAgRIgBgoIgDgXQgIgugVgoIgDgIQgCgIgEgHIgyhTIgEgGQgMgRgHgTIgDgHIgLgXQgYgtAHgvIACgFQALgVAVgQIAbgUQAYgPATgUIADgEQAQgTASgSIAKgJIAdgYQAigfAqgUQAEgCACgCQAlgcAqgSIAEgCQAsgPAugMQAtgMArgPQAKgCAKgBQAYgFAaAAIAFgBQAOAAALgGQAZgMAKgXIAMgPQAMAOAbgEQgRAlAmAQQADAHABAHIAFgBIgHgMIANAEQAoAKAAgcQgEAAgCACIgJAGQgWAGgRgOQgmggAwgYIACABIADACIABABIAVAQIAHgDIACgDIgBgBQgLgLgNgIQAKgcgUgWIgDgFQgIglAPgmQABgDACgCQAHgFACgFIABgBQAcACARgbIACAAQAHAGAJgEQAYgJAKgYQASAWAZAAQANAFAOgHIABACQAmAiAxgJQAGAQANAJQAKAKATAGIACAAQgFAJAAALQAAAdAeALQgFAHgDAHQgKAZAQATIABABQADAGAGAGIgDAHIgEAFQgJAPgEAQQgGAbAXAIIAIAEIABACIAAACQgCAJAHAFQASAPATgJIABAIIABABQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAgBIABgFIgCgFQAFgDAGgGIAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAgBAAIgIAFQAFgMALgIQAKgIALAFIAIADQAGAOANAMQgBAIAAAIIABAGIAAADIgBADIgBAAQgFAAgBAFQgDgCgDAEQgBAFABAGIgGAEQgYAOgaAFQARADAUgHQAKgDAHgGIgBgCIAPgNIACgDIADACIADACQAOAIARAFIAFAAIALgCIAJAEIABgDIAAgCIAAgCQANgEAIgKIgCgCQgBgGAGAAIADAAIACgEIADgGIAKAEQADACADAAQAFgEAEgIIAIgCQAYgdgSgdIADgDQAPgRAEgQIADAAIAAgBQAKAEAFAGIABAAQAiAOAPAaIACgGQAGADAGAFQAWASATAUQAIAIAFAJIAhAyIAJANIADAFQAGAOAJAOIANAWIAMAUQARAZAGAgQgCAGABAHIAEAZIABAFIABAWIABAhIgBAFIgJAmIgGAYIgIAlIAAAFIAAAAIgBACIAAABQgCANgFALQAFgLACgNIAAgBIABgCIAAAAIAXAGQgDAgAFAeIAFAXQAIAfAFAfIACAHQAMAsAJAuQAIAtAEAvIAFA6QABASgDARIAAABQgGAEABAFIAAADIAAAEIgEAAQgYgFgXAAQgTAAgQALQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgMAFgMACQgVALgXgFIgIgCIgFgBIgRgPIAIgKQAfgkATgtIASgwIAFgLQAEgMACgLQAIgsAAgtIAAgGIgBgfIAAgaIgCgvIAAgFIAAAFIACAvIAAAaIABAfIAAAGQAAAtgIAsQgCALgEAMIgFALIgSAwQgTAtgfAkIgIAKIgBAAIgFAGIgTATIgWAUQgKAIgLAGIgJAGQgTAMgVAGIgLADIgYAGQgOADgRAAIgCABIgOAEIgBAAIAAAAIgGAAIgHgBIAHABIAGAAIAAAAIABAAQgLADgKAGQgLADgMACQgLABgMADQgpANgvgBIgDAAIgCgEIABgCIgBACIACAEIADADQAOANALAQQAbAoAXAqQAXArANAvQACAIAAAHIACAcIAAAHIgBAKIgBAKQgCANgJAIIgEAEQgIAJgKAHIgBAAIgFgIIgGAAIgCAAIgDABIgEABIgFACQgYABgYgBQgwgCgsgXQgegQgbgSIgBgDIgCgDQAAgDgCgCQACACAAADIACADIABADIASAiIAIAQQAXApAHAvQAHAUgBAWIgBAPIgFAbIAAAEgADJKmIgVgPIAVAPgAjqKbIAAAAIgBAAIgEAAIgFgCQgMgGgLgIIgDgEIgJgLIgEgEQgHgJgEgKIgCgFQgDgRAAgSIABgNQABgaAFgaIACgHIAJgcQAHgVAOgQIADgEIAJgIIATgOIAZgQIAGgDQAUgIAVgNIABgBIAEgDIAAAAIAAAAIgEADIgBABQgVANgUAIIgGADIgZAQIgTAOIgJAIIgDAEQgOAQgHAVIgJAcIgCAHQgFAagBAaIgBANQAAASADARIACAFQAEAKAHAJIAEAEIAJALIADAEQALAIAMAGIAFACIAEAAIABAAIAAAAgAsEGlIAAAAIAAgBIAAABgAsIFnQAAAfAEAeQgEgeAAgfIAAgDIAAgDQACgGABgGIgDgDIAAAPIAAADIAAADIAAAAgADcDQQgRAEgSAFIg9ATIA9gTQASgFARgEIBhgUIABAAIACAAIAAAAIABAAQAFAAAFgDIABAAIAIgBIAAAAIAAAAQAKAAAIAEQgIgEgKAAIAAAAIAAAAIgIABIgBAAQgFADgFAAIgBAAIAAAAIgCAAIgBAAIhhAUgAFmCWQABALADAKIABAEQACAFACADQgCgDgCgFIgBgEQgDgKgBgLIgBgSQAAgoASglIAGgJIAngsQASgQAHgZIADgKIgDAKQgHAZgSAQIgnAsIgGAJQgSAlAAAoIABASgAKCAZQgFAlgdAaQAdgaAFglQADgUAAgSIgBgbIABAbQAAASgDAUgAEbgoIAPAAIAjgBQARgBAQgIIAFgFIATgJIAFgDIgFADIgTAJIgFAFQgQAIgRABIgjABIgPAAIAAAAIgBAAQgeAAgdgKIAAAAIgDgBIgJgEQgKgFgKgDQAKADAKAFIAJAEIADABIAAAAQAdAKAeAAIABAAIAAAAgAhbgyIAFABIADAAIACAAIAFgBQgFAAgCABIgDAAIgFgBQgNgCgNgGQANAGANACgAhAgxIAGAAIACgBIAEAAIABAAQAxgIAqgaIAFgFQAGgGAHgBQgHABgGAGIgFAFQgqAagxAIIgBAAIgEAAIgCABIgGAAIAAAAIAAAAIgKgBIgCAAIACAAIAKABIAAAAIAAAAgAHlgzQABgBABAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBgBAAAAQAAAAABABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAgBABQgLgGgKgJIgJgIQgNgKgIgMQgFgHgDgJQgOgkAAglIAAgOIAAgKIAAABIAAAAIAAAAIAAgBIAAAKIAAAOQAAAlAOAkQADAJAFAHQAIAMANAKIAJAIQAKAJALAGIAAAAgALpiVIgBADQgEARgIAPQgFALgIALQAIgLAFgLQAIgPAEgRIABgDQAFgMABgMIAAAAIAAgBIADgbIAAgLQAAgfgNgcIgEgHIAEAHQANAcAAAfIAAALIgDAbIAAABIAAAAQgBAMgFAMgAAOoHQgLAAgFAIQgHAHACALQABAGAGALQAIALABAGIABALQABAFADAIQADAHAGAEQAFADAJABQAQABAQgHIAKgGIAIgKQAHgJADgGQADgKgGgIIAGgDQAKgHAAgLQABgMgKgHQgKgHgPAFIgHACIgHABQgaABgWgGgAhrp+IABAAIgEgCIADACgABtsHIgHAFQgFAEAAAGIAAABQgWAiAGAtQADAYAYgBQAngCAJglQACgJABgIQABgIgBgJQgCgPgHgIIgDgEIAAgBQgDgZgYgDIgLALgAgErSQAEAHALACQASgDAMgJIgCACQABAEAFgDQAFgIADgKIAFgKQAIgWgMgRIgBABIgBACIgCgEQgFgWgagHIgNADIgFABQgMAEgDAHQgIAGgGAIIAAAAIAAABIAAABIABABQAFgCAEgDQAAAHAGAGIADAMIABAEQAEANAAAPIAAAAIAAADIAAAKIAAAAIAAAAgACKs8QAwACACAuQAAABABAAQABAAAAAAQABAAAAAAQABAAAAgBIABgBQgBgvgygHQgggBgYASQAKADALgHIAAgBIABgCQANgDANAAIAEAAgAAttXIAAAAQgkAGgbASQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAABAAIACABIAPgGIAAgBIAAgBIABgBQAXgJAZgDIABABIABABIABABQABAAAAAAQABAAAAAAQABAAAAgBQAAAAABgBIAAgBIAAgBQgDgFgGAAIgCAAgAAvtDIAAAAIABgBIgBABgAk+DuIAAAAgAGvomIABgDIAFAEIAEACIAAABIAIAEQgJgDgJgFgAITo7QAOgJALgMIABgCQgCANgPALIgJgBgAFmpKIAAACIgIACIAIgEgAIop1IAGAJIAEAGIgBAFIgBAEIgDABIABABQgMgNAGgNgAFwpfIAHgEIgHAGIAAgCgAEpqLIAAAFIgCADIgBADQABgFACgGgAB9qaIAAAAIgBABIABgBgACEqeIACgBIgFAEIADgDgAhLqvIACAAIgBAAIgBAAIAAAAgAgxrDIAAAAIAGgFQgGgLACgOIgBgGIAAgCIABACQANATgGAUIgJgDgAErrdIABABIgCAEIABgFgABjrwIAAABIgBAAIABgBgAB5sLIgCABIABgCQAEAAACACIAFAFQgEgDgGgDgAA2sNIABABIAAAFIgBgGgABLuHIAAAAIABABIgBgBg");
	this.shape_7.setTransform(90.5,39.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C6FFFF").s().p("AtzDHIARAEIAFABIAbAGQgYgEgZgHgAu0DJQAMgDAPgBIAcABIAFAAIADABIghABIgiABIAEAAgAJ5CFQgFgHABgHQAFAFAFAIIABABIgHAAgAJ6A1IADgBQgGADAAAJIAAAHQgDgJAGgJgAKJA1IABAAIACACIABACIgEgEgAKAAcIgBgJQAAgKAFgIIABgBQgDASAEAQIgGgGgALTiiQAIgBAIADIAAAAQgHAAgGACIgDgEgALrinIABgBIgBACgAOwjOIAAAAIAJgDIgFAHQgDgCgBgCg");
	this.shape_8.setTransform(16.4,-49.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_5},{t:this.instance_4}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene4, new cjs.Rectangle(-182.2,-141.8,365.6,275.5), null);


(lib.content_scene7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tobeconc();
	this.instance.parent = this;
	this.instance.setTransform(10.4,169.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgvA5QgKgIgBgLQABgFADgEQADgEAHAAQAHAAAEAIQAFALARAAQAOAAAPgGQAOgHAAgIQABgLgKgEQgGgCgTgBQgPAAgMgFQgQgHAAgNQAAgSATgOQASgOAUAAQAIAAANAEQAQAFAAAGQAAAFgDADQgDAEgGAAIgNgCIgMgBQgLAAgJAFQgLAGAAAGQAAADADACQADADAHAAIAVACQATABAMAKQAMAJAAATQAAAXgaALQgTAJgZAAQgVAAgOgKg");
	this.shape.setTransform(123.4,24.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgrBDQgEgEAAgGIAAhbIAAgMQgBgIABgEQABgJAOgBQAHgCAQAAQAPAAAPAKQASANAAATQAAAKgDAHQgDAGgIAFQAJAEAHAIQAHAJAAAKQAAAMgNAKQgIAHgKADQgTAIgfAAQgGAAgEgEgAgXAvQAPAAARgFQAPgFAAgFQAAgHgKgFQgHgFgHAAIgXAAgAgXguIAAATIAAASIAMABQAagCAAgSQAAgHgIgFQgHgHgJABIgOAAg");
	this.shape_1.setTransform(111.8,23.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgvBCQgEgEAAgFIABgTIAAgUIAAhGQAAgGADgEQAFgGAIAAIAWACQAMABAHAFQAmATAAAcQAAALgIAIQgIAJgPAGQAXANAMANQADAEAAAEQAAAFgEAEQgEADgFAAQgFAAgDgDQgbgZgfgKIABAcQAAAFgEAEQgDADgFAAQgGAAgDgDgAgaADIADAAQAWAAAJgFQAFgCAEgEQADgDAAgCQAAgKgMgJQgLgJgNgBIgKgBg");
	this.shape_2.setTransform(100.3,23.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgoBDQgKgIAAgdIACgiIACgjIgBgJIgBgKQAAgNAMAAQAEAAAEACIATgDIAQgCQAWAAAOAFQAHADAAAIQAAAFgDAEQgDAEgGAAIgDgBQgPgEgNAAIgNABIgQADIgBAjIAhgDIAVgCQAGAAADAEQAFADAAAFQAAAKgMABIgVACIgkADIgBASQAAASACACQABABAKAAIAPAAIARAAIAFgBIAFgBQAFAAAEADQAEAEAAAGQAAAJgLACQgIACgbAAQgdAAgIgIg");
	this.shape_3.setTransform(89,23.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgSA+QgLgZgNgwIgHgXQgFgQAAgHQAAgFADgDQAEgEAFAAQAIAAAEAJIADAPIAJAcIANAsIAUg0IAHgVQAFgNAGgGQAEgFAGAAQAFAAAEAEQADADAAAFQAAADgCAEQgFAHgEAJIgGASIgYA8QgEAKgGALQgDAHgHAAQgJAAgDgJg");
	this.shape_4.setTransform(77.1,24.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgoBDQgKgIABgdIABgiIACgjIgBgJIgBgKQAAgNAMAAQAEAAAEACIATgDIAQgCQAWAAAOAFQAHADABAIQAAAFgEAEQgDAEgGAAIgDgBQgPgEgNAAIgNABIgQADIgBAjIAhgDIAWgCQAFAAAEAEQADADAAAFQAAAKgLABIgVACIglADIAAASQAAASACACQABABAKAAIAQAAIAQAAIAFgBIAFgBQAFAAAEADQAEAEAAAGQAAAJgKACQgJACgbAAQgcAAgJgIg");
	this.shape_5.setTransform(57.8,23.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgmA2QgNgOAAgTQAAgdAZgeQAWgaAWAAIAHAAIAGABQADgEAGAAQAJAAACALIABARQAAAEgCADQgDAGgHgBQgIAAgDgIQgCgEgCAAQgBgCgGAAQgLABgNARQgVAXAAAVQAAAKAHAGQAGAIAJAAQAIAAAJgGIANgIQAHgEADgBQAGAAADAEQAEAEAAAEQAAAGgFADQgYAVgYAAQgUAAgNgOg");
	this.shape_6.setTransform(46.4,23.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("Ag9BEQgEgEAAgFIABgKIAAgLIABgQIABgPIgBgQIAAgRIgBgPIgBgQQAAgFAFgEQAEgFAGAAQAGAAAIAMQAnA5AnAjIAAgOIgBg5IgBgKIgBgJQAAgNANAAQAOAAAAAtIAAAOIAAA2IgCAOQgCALgLAAQgGAAgIgHQghgegqg2IgBAbIAAAVIABAVQAAAagMAAQgHAAgEgEg");
	this.shape_7.setTransform(33.4,24);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgoBDQgJgIAAgdIABgiIABgjIAAgJIgBgKQAAgNAMAAQAEAAADACIAUgDIAQgCQAWAAANAFQAJADgBAIQAAAFgCAEQgEAEgFAAIgEgBQgOgEgOAAIgNABIgQADIgBAjIAigDIAVgCQAFAAAEAEQADADAAAFQABAKgMABIgVACIgkADIgBASQAAASACACQABABAKAAIAQAAIAQAAIAFgBIAFgBQAFAAAEADQAEAEAAAGQAAAJgLACQgIACgbAAQgdAAgIgIg");
	this.shape_8.setTransform(20.7,23.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgIBAQgEgEAAgFIABgDIAAgEIgBgNIAAgMIgCgfIgCggIgFAAQgUAAgLgCQgKgDAAgJQAAgEADgEQAEgEAGAAIAOACIAOABIAQgBIAPAAIAUABIAUABQAFAAAEADQAEAEAAAFQAAAFgEADQgEAEgFAAIgVgBIgWgBIADAkIACAjIAAAIIABAJQAAAHgDAFQgEAHgGAAQgEAAgEgDg");
	this.shape_9.setTransform(8.7,23.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgvA5QgKgIgBgLQABgFADgEQADgEAHAAQAHAAAEAIQAFALARAAQAPAAAOgGQAOgHAAgIQAAgLgJgEQgGgCgTgBQgPAAgMgFQgQgHAAgNQAAgSATgOQARgOAVAAQAIAAANAEQAQAFAAAGQAAAFgDADQgDAEgGAAIgNgCIgMgBQgMAAgIAFQgLAGAAAGQAAADADACQAEADAGAAIAVACQATABAMAKQAMAJAAATQAAAXgaALQgTAJgZAAQgVAAgOgKg");
	this.shape_10.setTransform(-3.8,24.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AgpBAQgDgEgBgEQAAgFAFgEQADgDAGAAIARgCIAAgnQAAgXABgWIgTAAQgGAAgDgDQgDgDgBgFQABgGADgDQADgDAEAAIAbgBQAQAAAaAEQAKABAAALQABAFgFAEQgDACgFAAIgXgCIgBAqIAAAnIAYAAQAGAAADAEQAEADgBAFQABAFgEADQgEAEgFAAIgQAAIgOAAIgRACIgSABQgGAAgDgDg");
	this.shape_11.setTransform(-15,24.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AAaAzIgMgSIgLgPIgaAeIgRASQgEADgFAAQgFAAgEgDQgDgEAAgFQAAgEADgDIAQgSIAfghIgTgWIgKgOQgGgHgFgEQgFgEAAgFQAAgFAEgEQADgDAFAAQAFgBAIAHIAJAKIALAOIAPATIAWgcQASgWAGABQAFAAAEADQADAEAAAFQAAADgDAEIgSAWIgVAcIASAZIAUAaQADADAAAFQAAAEgEAEQgDAEgFgBQgJAAgOgTg");
	this.shape_12.setTransform(-26.6,24.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AgoBDQgKgIAAgdIACgiIACgjIgBgJIgBgKQAAgNAMAAQAEAAAEACIATgDIAQgCQAWAAAOAFQAHADABAIQgBAFgDAEQgDAEgGAAIgDgBQgPgEgNAAIgNABIgQADIgBAjIAhgDIAVgCQAGAAADAEQAFADAAAFQAAAKgMABIgVACIglADIAAASQAAASACACQABABAKAAIAPAAIARAAIAFgBIAFgBQAFAAAEADQAEAEAAAGQAAAJgKACQgJACgbAAQgcAAgJgIg");
	this.shape_13.setTransform(-38.3,23.9);

	this.instance_1 = new lib.Scene4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(203.5,191.7,1.138,1.138);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CC9966").s().p("AgpD8QhWgXg6gfQgIgBgPgFQgwgSgWgXQgPgQgNggQgNgjgIgRQgPgcgCgHQgDgLgBgaIAAg0QAAgjgCgRQgCgUAEgJQAEgJAMgIIAUgPQAJgIAJgUQAJgYAGgIQAQgWAbgDIAAAAQAIAAAHAEQAHAEADAIQAEAHgCAIQgCAIgGAGIgKAHIgKAHQgEAEgDAIIgFANQgKAegcASQgHAEgDAEQgCAFAAAKIACBMQAAAZAEAOIAPAfQAIASANAmQAPAiAXAMIACABQAJgEAJACQAMABAZAQQAeASApAOQAaAJAxANQA7AQAbABIAFAAIAVgFIAJgCIANgJQARgMAkgBQApgDAOgFQAagJAageQAbgfgGgYQgBgGgFgJIgIgOQgCgGgCgQQgDgOgDgIQgHgOgSgLIghgTQgUgNgVgYIgkgsQgvg4gsgHQgfgFgwATQg8AWgUADQgUACgLgIQgKgHAAgNQgBgNAJgIQAGgGAXgEQAcgFAigLIA7gXIABACQAsgCArARQArARAeAhQAIAIAXAfQASAYAPAMIAyAjQAeAUAKAWQAEAIADAKIAEAUIAIAUIAHAUQAJAfgLAiQgHAZgPATQADAGABAGQABAIgDAGQgGAJgUAHQg6ATgZAGIg2AKIgRACIgJAGQgSALgdAAIgFAAQg0AAhKgUg");
	this.shape_14.setTransform(318.2,187.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.instance_1},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.content_scene7, new cjs.Rectangle(-46.3,8.7,457.8,370.4), null);


// stage content:
(lib.pred_Scene7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene7:0,scene7_repeat:161});

	// timeline functions:
	this.frame_4 = function() {
		playSound("beamisarewaswerebeingbeen");
	}
	this.frame_78 = function() {
		playSound("pop_up");
	}
	this.frame_93 = function() {
		playSound("beingbuffisbeingcool");
	}
	this.frame_109 = function() {
		playSound("Cowbell");
	}
	this.frame_118 = function() {
		playSound("pop_up");
	}
	this.frame_126 = function() {
		playSound("wouldntknowiveneverbeen");
	}
	this.frame_146 = function() {
		playSound("Cowbell");
	}
	this.frame_180 = function() {
		this.gotoAndPlay("scene7_repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(74).call(this.frame_78).wait(15).call(this.frame_93).wait(16).call(this.frame_109).wait(9).call(this.frame_118).wait(8).call(this.frame_126).wait(20).call(this.frame_146).wait(34).call(this.frame_180).wait(1));

	// content
	this.instance = new lib.content_scene7();
	this.instance.parent = this;
	this.instance.setTransform(264.9,180.6,1,1,0,0,0,194.6,182.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(181));

	// main
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.instance_1 = new lib.Bk("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275,190.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.UI}]}).wait(181));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,201.6,534,398.7);
// library properties:
lib.properties = {
	id: 'F73F2AA25BB47A4D98D6A4C7B192CF8A',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/beamisarewaswerebeingbeen.mp3", id:"beamisarewaswerebeingbeen"},
		{src:"sounds/beingbuffisbeingcool.mp3", id:"beingbuffisbeingcool"},
		{src:"sounds/Cowbell.mp3", id:"Cowbell"},
		{src:"sounds/bgmAux.mp3", id:"bgmAux"},
		{src:"sounds/High_Screaming_Gtr.mp3", id:"High_Screaming_Gtr"},
		{src:"sounds/needtoreview.mp3", id:"needtoreview"},
		{src:"sounds/organ_f_chord.mp3", id:"organ_f_chord"},
		{src:"sounds/pop_up.mp3", id:"pop_up"},
		{src:"sounds/powersynth.mp3", id:"powersynth"},
		{src:"sounds/predicateverbsdefinition.mp3", id:"predicateverbsdefinition"},
		{src:"sounds/right_answer.mp3", id:"right_answer"},
		{src:"sounds/salsa_groove.mp3", id:"salsa_groove"},
		{src:"sounds/trumpet_lick.mp3", id:"trumpet_lick"},
		{src:"sounds/wouldntknowiveneverbeen.mp3", id:"wouldntknowiveneverbeen"},
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
an.compositions['F73F2AA25BB47A4D98D6A4C7B192CF8A'] = {
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