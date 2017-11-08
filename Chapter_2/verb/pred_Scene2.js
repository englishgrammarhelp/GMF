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


(lib.Symbol232 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ag3BJQgNgOABgeQgBgcANgcQAOgeAUgSQAOgMAOAAQALAAAPAGQAUAIAAAJQAAAFgEADQgCAEgFAAQgDAAgEgDQgQgKgMAAQgHAAgJAIIgMAQQgZAhAAAlQABAUAFAIQAHAJATAAQARAAAOgMQAQgNAGgYQgeACgVAKIgEABQgFAAgDgEQgDgDAAgFQAAgGAGgDQAWgNA5AAQAFAAADADQACACAAAFQABAHgHADQgGAhgWAUQgUATgcAAQgbAAgOgPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.8,-8.8,13.7,17.7);


(lib.Symbol231 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhIBUQgDgDAAgFIABgOIAAgNIABgUIAAgVIAAgUIAAgVIgCgVIgBgUQAAgEAEgFQAFgDAGAAQAFgBAIAMQAbApAVAbQAZAeAeAcIAAgNIAAgOQAAgtgEgcIgCgMQgDgHAAgFQAAgMAMAAQASAAABBGIgBAjIAAAjIgCASQgCAKgKABQgGgBgHgHQgsgqg4hNIAAAwIAAAaIAAAbQAAAdgLAAQgGAAgEgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.6,-8.7,15.3,17.5);


(lib.Symbol230 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAYBUQgEgDAAgFQgFgNgBgIIgJguQgFgcgBgSQgKAkgLAXQgMAdgEAQIABAFQAAAFgEADQgEADgFAAQgPAAAAgNIgPhDQgHgZgRgyIAAgEQAAgKALAAQAHAAAEAHIAIAXQAGATAGAcIALAuQALgbAMglIAKggQAKgYAIAAQAIAAADAIQAEAJAEAjQACARAFAYIAJAqQAPgiAVg6IAGgVQADgMAEgHQAEgGAGAAQALAAAAALIgDAKIgKAfIggBNIgPAlQgEAHgIAAQgFAAgEgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.5,-8.7,21.1,17.5);


(lib.Symbol229 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ag2BRQgDgDAAgFIgBgZIgBgZQAAgKADgSIACgeIgBgQIgBgQQAAgGADgFQAEgGAIABIAZACQAPACAJAFQAsAXAAAhQAAARgPALQgMAKgSAGQAiASAQAUQADADAAAEQAAAEgDAEQgEADgEAAQgEAAgEgDQgjgkgrgMIABAqQAAAFgDADQgDAEgEAAQgFAAgDgEgAghgvIAAANIgBAVIgDAUIAFAAIAFAAQAbAAANgHQAGgCAFgFQAGgGAAgFQAAgPgRgMQgOgMgSgCIgQgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-8.4,12,16.9);


(lib.Symbol228 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgqBKQgVgJAAgQQAAgEADgDQADgDAFAAQAGAAAEAGQAFAIAFADQAIAGASAAQAPAAAOgHQATgKAAgQQAAgNgQgIQgNgHgRgBQgRAAgMgGQgQgJAAgQQAAgTAWgQQAUgPAWAAQAKAAANAEQASAEAAAIQAAAJgKAAIgPgCQgLgDgGAAQgPABgMAIQgMAIAAAMQAAAJAPADQAHACAQABQAYACAOANQANAMAAASQAAAZgYAQQgUANgaAAQgUAAgQgIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.4,-8.2,12.8,16.4);


(lib.Symbol227 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgvBPQgCgDAAgFQAAgEACgEQADgDAFAAIAYgCIABgUIgBgSIgBgSQAAgYADglIgcABQgFAAgDgDQgDgDAAgFQAAgLAKAAIAggBQAVAAAgAFQAKABAAAKQAAAFgEADQgDACgEAAIgSgBIgRgCQgDAfAAAcIABASIAAATIAAASIAiAAQAEgBAEAEQACADAAAFQAAAFgCADQgEADgEAAIgSAAIgSAAIgVACIgVACQgFAAgDgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.3,-8.2,10.6,16.4);


(lib.Symbol226 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("ABCBRQgDgGgDgLIgDgTQgFgRgKg6IgcBVQgDALgFAJQgEAHgGABQgHgBgDgGIgFgMIgDgMQgLgmgIgqIgSBLQgBAKgFAUQgDAIgHAAQgFAAgDgEQgDgDAAgFQAAgSAIgaIAShMQAEgXAGgIQAEgGAGgBQAHAAADAJQAFAJAEAdQAHAkALAoQAPgoAMgtIADgQQACgJADgGQAFgIAGAAQAKAAAFASIAEAZQAGAwAKAiIAFATIAEASQAAAFgDADQgEADgEAAQgGAAgEgGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.7,-8.7,17.4,17.4);


(lib.Symbol225 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAmA4QgDgKgEgYIgdAGIgbAFIgTAqQgEAFgFAAQgFAAgDgDQgEgCAAgGQAAgFARghQgCgDAAgEQAAgIAKgDQANgWASgeQAZgpAGAAQAIAAAEAMIAWBuIAHARQADAIAAADQAAAFgEADQgDADgEAAQgKAAgHgZgAgNAIQANgEAagEIgJgog");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.6,-8.1,13.2,16.2);


(lib.Symbol224 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgNAXQgCgDAAgDQAAgDAGgPQAGgNADgGQACgFAFAAQAEAAADADQACADAAAEQAAACgPAhQgBAGgGAAQgEAAgDgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.6,-2.6,3.2,5.3);


(lib.Symbol223 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AguBTQgLgJAAgjIABgPIABgSIgCgFQAAgDACgCQADgfAAgPIgBgMIgCgMQAAgMALAAQAFAAADACIAYgFIAVgCQAaABAQAFQAHADAAAIQAAAFgDACQgDAEgFAAIgDAAQgSgGgRABIgSABIgXAFIABALIgCApIAugEIAagCQAEAAAEADQADADAAAFQAAAIgKACIhKAHIgBAOIAAANQAAAYADAEQADADAOAAIATgBIAUAAIAHgBIAGAAQALgBAAALQAAAKgJABQgKADghAAQghAAgJgJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.7,-9.1,11.6,18.3);


(lib.Symbol222 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgyBTQgEgEAAgFIAAggIACgrIACgsIACgeQAAgFADgCQAPgEASAAQASAAASANQAUAPAAAWQAAAcgWAOQAQAHAJAJQAIAIAAAKQAAANgPAMQgJAJgLADQgXAKgmAAQgEAAgFgEgAghAqIAAAXQAdgBAQgHQAIgCAHgHQAGgFAAgDQAAgFgOgGQgKgFgJgDIgLgBIgEAAIgEAAIgNgBIgBAXgAgchAIgCA9IAQABQAPgBALgJQALgKAAgPQAAgJgMgKQgLgIgMAAIgQAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.4,-8.7,11,17.4);


(lib.Symbol221 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAjAKIgWAAIgXgBIgvAAIgIABIgHAAIAAgTIAgAAIAhAAIAVAAIAXABIAkgBIAAATg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.3,-1,14.6,2);


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


(lib.tobeeyesstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhPAXIAAAAQgDgNAKgIIACgBIADgBIAAAAQAMAAAGACQAKAHgEARQgBAHgFAEQgHADgFAAQgOAAgEgRgAArgPQgDgNAKgIIACAAIADgCIAAAAQAegBgFAcQgCAGgEAFQgHABgGAAQgOAAgEgQg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.tobeeyesstill, new cjs.Rectangle(-8.1,-3.9,16.2,7.9), null);


(lib.tobemouthstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgjAKIAsgyIAcgHIgyBgg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.tobemouthstill, new cjs.Rectangle(-3.6,-4.8,7.3,9.7), null);


(lib.tobeblondeblinkstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhWAvIgKgLIgBglIA4gTIATAAIgIARIAYAjQgUAggYAAQgRAAgTgRgAA4gTIgGgdIAIgPIApALIgBAfIgJAHg");
	this.shape.setTransform(-1.1,3.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ah6gQIAEgSQALgKALgHIAJgEIAEgCQAZgJAaAKIhMAqIgKAvIA6AAIg5ATIACAlIABATQgVg9ANg/gAgxAyIAIgRIgTAAIAAgKIBCgTIAAgJIASAAIABgTIAUADQAfAAAVgWIADgrIgbgFIgmAwIAAgTIAcgdIAAgKIAcgGQAKABAJAHIAQAiQADAfgCAiQgBAMgEAFQgQAHgOAQIgEADIgzAAIgCgBIAwAAIgFgLIABgeIgogKIgIANIgiAJIADAOQAFAmgfAVgAg8Ahg");
	this.shape_1.setTransform(0.8,-1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("AhgCCIgbghQgQguAIgqQgCgYAAgbIAAgEIAugVQgMAGgLALIgEASQgMA/AVA9IgCgTIAKALQAuAoAig3QAegUgGgnIgCgMIAjgJIAFAcIAhAFIAJgHIAEALIgwAAIACABIgCAAQgNAcgbAZQgHATgPAIIgHAKQgaANgkAAIgIAAgAhuAQIAKgvIBNgqQgbgKgZAKIATgJIAsgHIAMgKIBIgSIAAAJIgdAdIAAATIAmgwIAbAFIgCAsQgWAWgfgBIgUgDIgBAUIgSAAIAAAJIhCASIAAAKgAB3h0QgJgGgKgCIAbgFQAFAWACAZg");
	this.shape_2.setTransform(-0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tobeblondeblinkstill, new cjs.Rectangle(-13.5,-13,27.1,26.1), null);


(lib.prointrostill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AERv/QADgDADgBQAVgMAXAOQALAHAKAGQANAJAEAOQADAMgIABQABAEAJgHQATgQAXAOQAJAFAIAFQAnAUAAAoQALgXAXAPQAZARAIAeQAFATgIAPQAYgIAZAPQAlAWAZAhQAEAFAAAGQABARgMAFQgHgCAJAIQACACACAEQAMAlgWAhQgGAJgGAEQgNAJgOgFQAHgQASAMQABAAABAAQApAbgDAyQgBAGgDAHQgKASgPAJQASACAOAGQACACADABQAiAXAXAjQAXAgAMAjQAFAPAHAPQAKAZAFAbQABAHADAHQABAEABADQAMAogCArQAAAOAEAMQADAIAAAJQAAA2gCA1QAAAHgCAGQgFAUgHAPQAMAXAFAOQAWBQAFBUQADA4gFA3QgDAegDAfQgBAEgBAEQgCAMgGAHQANAHAEANQAQA/AFBCQADA2ADA2QACAkgBAlQAAARgEARQgBAIAAAIQAAABAAABQgBACgBACQgBACgDADQgBABgBABQhAA5hWAOQhXANhZgDQgHAAgGgBQgsgIgrgNQgGgCgGgBQgCgBgCAAQgHgCgHACABivPQAJgPARgGQATgIAXAGQADABABAFQABAFAAAHQAMgZAfgNQAYgKAcACQAFAAACADQAEADgDAJQgBAFgDAEQgIgMALgJAA0vSQAJgNAVgDQAHACAFAIQADAFABAEQABAHgFAFQgHAIAIgPQABgDACgCAgRulQAAgHACgHQAHgSATgMQAGgDAFgCQAFgCAHgBQAOgCAEAJQACAEgBAHQAAACgCACQgCACgDACQABgLAFgIABPrxQAGADAJAAQAEAAAEAAQAYgBAXgHQAWgHAFgIQAHALATAHQAEABAEAAQAMgBAEgIQABABABABQAKAIAPgDQADAAACgBQABACABACQACAGAEADQAWAQAdACQAFAGAEACQAhAQAbATQgIACgFAFQgIAFARAEQAHABAEAFQAOAFAEAIQABAEAAAEQABAVgCASQgBAEAEAFQgEAEgDADQgLALgFAHQAKANAQAAQgOADgHAKQgFACAFAIQABADAGAFQAQALAKAFQgJAGgIADQABARAJAPQAFgEALAEQAIACAEAHQADAEABAHQACAUgIAPQgEAHgHAGQgHAFgKAFQgTAJgYgHQgGACgEgBQgEgFgDgEAClrIQAOAGABAOQglgNgpgEQAUgMAXAFQAOACAGACgABPrxQAGAJgGAPQAAAHgHgCQgEAEgEgCQgEAAgGADQAGASgPAMQgDACgCACQgCACgCAEQgDAGgEALQgCADgBADQgFANgBAQQgBACgCADQgGAHgIABQgDgQABAYQABABAAABABPrxQgEgDgDgFABYpPQAIgBAHgEQApgYgdghQgEgEgFgCQgXgFgdAOQgBAAAAABQAAAFAAAEQAAABAAABQAAAFAAAGQACARAJALQAEAGAFABQAIACAHgBgAA5p+QAFADAGABQABAAACABQADABACACQAAABABABQABAAABAAQABABABABQADAEACADQABADACACQABACAAACQAAAFAAAEQAAAEgCACACnpUQANACAIADQAJAEAHAGQAFAFACAEQABABABACQABAGAAAHQAAACgBABQAAABAAAAQgDADAAAEAECr1QgCgJAFAIQgBAAgCABgADxqXQAEAEADADQAEAEAEADQAQAOAUAEQAAgFgBgIQgBgKgOgJQgGgBgEAAQgNABgJgFADir7QgIgIAJgCQABAFgCAFgAGPm6QAOgHAIgPQAAgBABgBAgen2QAOAFgGAUQgEALgEALQAhAVAGADQADACAEAAQAnAAAngCQAGAAAHgCQAagFAVgMQACgDACgCQAAADAAADQgCApgiAcQgFAFgEAEQgiAPglAFQgTACgSgIQgKgLgQgBQAGAIAIAMQADAEAEACQgCAEAAAFQgBAMgIAHQgIASAQAOQAHAGARAAQA3AAA0gHQAFgBAEgBQAbgFAYgJQATgHAPgMQADgCACgFAGYhzQAAgGgBAPQgFA5AgAuQAIAKAJAJQAHAGAHAFQAIAFAIADAJxoTQgFACgFACQgCABgDAAIAAAAAG1mOIAAAAQABABACAEQAPAWAagQQAHgDADgHQAIgNgBACQgGAHAOgIQAUgBACgTQAAgEgCgDQgIgJAGADQACALAPgIQAVgMABgaQAAgCAAgCQACAFADAAQAWAGAQgPQAIgJgBgNQAAgGgCgHQAAgEgBgCQgCAAgCgCQACgGACAIALFj0QAJgKAKAUQAFAHACAJQAZBVg3BGANWMBQABACgDAEQgCAFgEACAMUgLQgKATgMAPQgDADgCAFQgDAJgDgJAK4ArQAVBehHBDQgHAHgIAAALwAWQACAEABAFQAEAMACANQAJBUgLBUQgDASgFARQgYBSgvBNQgJAOgKALQgRARgSAKQgKAAgGAFQgXAGgcANQgdANgOAAIgNABIgSgCQgRgCgRgBQg1gBg1gEQgCAAgDAAQgHgBgHAAQglAAgkgBQgegEgeACQgvgGgrAEQgJADgJACQgwAHgpARQgqAMgpAJQgaAMgSARQgFAEgFAEQgMAIgKAEQgDABAAADQgNAhACAnQACAjgGAbQgEAOACATQgDADgEABQgEAAgFACQgMABgIgHQgLgKgMgPQgBgDgBgCQgDgQgGgNQgSgmAHgxQgFg0ApgbQAMgMAOgIQAagXAfgSQACgBABgBQgDgGgDgFQABgBAGAMQARgMATgHQAGgCAFgDQBNghBVgVQAIgCAIgEQASgJBzghQAAAAAAAAQgWgRgiAMQgWAIgzgEQgZgDghgFQgYACgTgIQgZgJgVgUQgDgCgDgEQgIgLgLgXQAZgXgDgiQgBgGgBgHQgJgogWgcQgkgogMgzQgBgJAAgIIAAgBQg7h9AiiaQguAugnASQgIAIgMACQg3Ajg/AEQgVACiBgMQA3BKAFA9QAEA8gBBAQgBA/AAAJQAAAFgBAFQAPgGALAIQAHAGAJAFQAlAUAiAOQATAMAWAGQAHABAKAIQABAAAAABQAHAEADALQACAGAAAGQAAARgIAKQgDADgDAEQgHAIgJAFQgXAPgZgFQgGgFgHgBQgEgBAAgDQgugTgsgLQgSgFgVABQgRABgNAGQgIAEgIAEQgMAGgHAIQgDAEgEACQgUAQgPAOQgFAGgEAHQgMAWABAdQABADgBACQgCALgCAKQAAACAAADQgFAXgJAPQgFAIgDAIQgBAGgGAGQgDAIgGAKQgCADgBACAHDAQQAFALgGAVQgMAogPApQgLAegFAfQgBALAAAKQgFAlAVAdQADgDACgCAKoGiQAoACAlgIQAEgBAEAAQAYgBATgOQADgDADgEABdBoQABgKAHAKQAeArAHA0QAAAsgRAkQgCADgEABQgEABgFAAAF+AaQhHA/hcgVQgNgDgKgIQgVgRgRgOAGmEVQgfAcgrAHQgOADgNAEQgsANguAMQgHACgHACAFZHyIAAAAQAxAmAUAkQAaAuAJA3QAFAegFAdQgHAjgPAeQgBACAAABQgBACgBADQgBACghAeQgIgGgIgCQgTgEgUgEQgCgBgDgBQhKgXhGgkQALAbAWAbQACAIAGAHQAWA1AWAvQARAfgBAnQAAAEgBAHIkEAEQgBgHgDgEQgEgRgNgXQgFgJgFgLQgghCgvg4Qgmgtg9gOAgRulIAAAFQgBACgBACQABgFABgEgAgTucQgHAeAIAiQADAOAFAGQgCADgEAEQgcAhAOAnQACAFACAEQgNAEgNAFQgQAHANASQAEAFADAFQAJAOAAALQABACgFADQgJAGAKAOQAHAJAIAGQAIAGAIALQg1AMgfAEQhTALhUAOQgJABgJACQgsABgmAMQgGACgGACQgwAMgvANQgEABgFACQgVAKgWAIQgZAJjcCxQguAxAfBNQAfBNABAAQADADACADQACAEAGAGQACADAEADIAAAAQAIAJADAJQANAZAJAbQACAHACAGQALAxANAuQAEAMADAMQAFARADATQAAAEADADQAKAmgEAtAgKtIQAFgFgEAHQAAgBgBgBgAgLpyQABABAAABQAGAJAGALQAAACAAABQgBAGgFAHAACpcIAAAAQAAAAAAAAQgCABgBABQgRAIgQAGQgSAHgMAMQgFANAIALQAHAMAQAMQAFAEAGACQAGAAAGgBAmRm6QApgVAuAMQgUAJgcAFQgoAIglAVQgaAPgWAUAroh8QAIAIAGAIArahsQAGAIAEAJQABAAAAABAipkGQAJgoAQgrAAMAJQAPACgLAIQgqAgg5gOQgIgCgtgOQgEgCgEgCAk3E+QAQAIAOAKQADACADAAQALACAJAJQALALALAGQAFACACADQAHAIAIAHQAEAEADADQAhAeAXAoAk2EAQAiAEAjAAQAlgCAkgCQAtgCAnAKAnhC2QgBAJgDAIQgBAEgCACQgCACgFAAAs/GlQAEgEAEgEQAGgCADgDQAbgXAVgcQACgEADgHArKFlQgIAMgIALQgVAcgXAaQgRAKgKAJQgCAIgCAHQAFBTBOhJQAFghgCgkQAAgCAJgMQAJgLASgVArSHeQgDAQgEAPQgEAUgCASQgCAOABAMQASgGALgJQAGgEAHgHQAAgBABAAQAJgEAOAQQAMANAMALQBEA9BDA+QAqAoAqAoQAKAKAHALQAmA3AfA4QADAGACAHQAHAXAMA9IFXAAQADASgNgHAiNHaIgBAAQABAAAAABQAAgBAAAAgAskFSQgBAAgBABQgBABgBABQgTASgRAPQgFAFgDAIQgOAHAPAOQADADARAKQgDAeAEAKQADAHAQgJQAFgDAFgDAskFRIAAABQgDAAgBADAsYFCQAGAEgJAGQgCABgCABQgCABgDACIAAABIAAAAAk5QKQgCgKgCgKIgKAA");
	this.shape.setTransform(-2.5,4.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AHgmBQANgBAMgLQAqgngognQgMgLgQABQgcADgKAXQgDAIgBAIQgEAbAVAYQAEAFAFABQAJACAIgBgAl4F1QALAOgTAMQgCACgCACQgMARgSAEQgDABgDACQgDACgEACQggALgZALQgLAEgKAGQgJAFgFAIQgBADgBACQgBACAAAD");
	this.shape_1.setTransform(-29.4,-11.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA3A2QAAgEADgCIAAgBIABgEQAAgHgBgGIgCgCQgCgFgFgEQgHgHgJgDQgIgEgNgCQABgHADgIQALgXAcgDQAPgBAMALQApAmgrAnQgLAKgOACgAhCAFQACgCAAgEIAAgIQAAgBAAgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIgDgEIgFgIIgCgBIgCgBIgBgBQgCgDgDgBIgDgBQgGAAgFgDIgEAAIAAgDIAAgIIABgCQAdgOAXAFQAFACAEAFQAdAhgpAWQgHAFgIABg");
	this.shape_2.setTransform(13,-55.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AD2O0IgNgBQgsgIgqgNIgMgDIgFgBQgHgBgHABQAigeAAgCIACgFIACgDQAPgeAGgjQAGgdgGgeQgIg3gaguQgUgkgxgmIgBAAQA1AEA1ABQASABARACIASACIANgBQAOAAAcgNQAcgNAYgGQAGgFAKAAQASgKAQgRQALgLAIgOQAoACAlgIIAJgBQAYgBASgOIAGgHQANAHAEANQARA/AEBCIAHBsQABAkAAAlQgBARgDARQgCAIAAAIIAAACIgBAEIgFAFIgCACQg/A5hWAOQhIALhIAAIghgBgAmlIkQgYgogggeIgHgHIgPgPQgDgDgEgCQgLgGgLgLQgJgJgMgCQgCAAgDgCQgPgKgQgIIAHgHQAHgKABgRQAAgGgCgGQgEgLgGgEIgBgBQAhAFAkgBIBJgEQAsgCAoAKQAKAXAJALIAFAGQAVAUAZAJQAUAIAZgCQAgAGAZACQAzAEAXgIQAhgMAWARIABAAQh0AhgSAJQgHAEgJACQhVAVhNAhIgLAFQgTAHgSAMQgFgLgBAAgACnk0IgEgFIAAAAQAHgGAEgHQAJgPgDgUQgBgHgDgEQgEgHgIgCQgLgEgFAEQgJgPAAgRQAHgDAKgGQgLgFgPgLQgGgFgCgDQgFgIAGgCQAHgKANgDQgPAAgLgNQAGgHAKgLIAIgHQgEgFAAgEQADgSgBgVQAAgEgCgEQgEgIgOgFQgEgFgHgBQgRgEAIgFQAGgFAIgCQgcgTgggQQgEgCgFgGQgdgCgVgQQgFgDgCgGIgBgEIACgBQgFgIADAJIgFABQgQADgKgIIgCgCQACgEAAgGQgKACAIAIQgEAIgMABQgEAAgDgBQgTgHgIgLQgFAIgVAHQgXAHgYABIgJAAQgJAAgFgDQgFgDgCgFQACAFAFADQAFAJgGAPQAAAHgHgCQgDAEgFgCQgEAAgFADQAFASgPAMIgFAEIgDAGIgIARIgDAHQgFANAAAPIgEAFQgFAHgIABQgDgQABAYIAAACIgMgUIgCgCQgIgLgHgGQgIgGgHgJQgLgOAKgGQAEgDAAgCQAAgLgKgOIgHgKQgMgSAQgHIAagJIgEgJQgOgnAcghIAGgHQgGgGgDgOQgHghAGgfIACgEIAAgFQAAgHADgHQAHgSAUgMIAKgFQAGgCAGgBQAOgBAEAIQAJgNAVgDQAHACAFAIQADAFABAEIgCAFQgIAPAGgIQAFgFgBgHQAJgPASgGQATgIAWAGQAEABAAAFQACAFAAAHQAMgZAfgNQAXgKAcACQAFAAACADIAFgEQAVgMAXAOIAWANQAMAJAEAOQADAMgHABQABAEAIgHQAUgQAXAOIARAKQAmAUAAAoQALgXAXAPQAZARAIAeQAGATgIAPQAXgIAZAPQAlAWAZAhQAEAFAAAGQABARgMAFQgHgCAKAIIADAGQANAlgWAhQgGAJgHAEIgBAAQgSgMgIAQQAPAFAMgJQApAbgDAyQAAAGgEAHQgJATgQAIIgPAFIACAGIABANQABANgIAJQgPAPgWgGQgDAAgDgFIAAAEQgBAbgVALQgOAIgCgLQgHgDAJAJQACADgBAEQgCATgTABQgPAIAHgHQAAgCgHANQgEAHgGADQgLAHgJAAQgNAAgIgNgAFMm7QABAAAAABQABAAAAABQABAAAAAAQABAAAAAAQgBgEgBAAIgCACgAkbrzIABACIABgEIgCACgAjitqIAEgEQADgCAAgCQAAgHgCgEQgFAIAAALgAgCuVQACgEAAgFQADgJgDgDQgLAKAJALgAhPnHQgFgBgEgFQgVgXADgbQAOACAIADQAJAEAHAGQAEAFADAEIABADQACAGgBAHIAAADIgBABQgCADgBAEIAAAHIgEAAQgGAAgGgCgAjHn7QgFgBgFgGQgIgLgCgRIgBgKIAEgBQAGADAFABIADABQADABACACIACACIACAAIABACIAFAHIADAFQAAABABAAQAAAAAAABQAAAAAAABQABABAAAAIgBAJQABAEgCACIgBAEIgEABIgKgCgAgRo0IgIgHIgGgHIACgFQAJAFANgBIAJABQAOAJABAKIABANQgTgEgQgOgAirpwQAUgMAYAFIAUAEQANAGABAOQglgNgpgEgAgOqgIAAAAgAgvqmIAAAAg");
	this.shape_3.setTransform(24.9,-4.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC9966").s().p("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");
	this.shape_4.setTransform(-3.8,16.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.prointrostill, new cjs.Rectangle(-89.4,-100.1,173.9,208.8), null);


(lib.bubintrostill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AANARIgZgh");
	this.shape.setTransform(-8.3,-106);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1,1).p("AAAPUIAAjHIAAmmIAAg+IAAhwIAAlpIAAgBIAAqLIAAg0IAAhj");
	this.shape_1.setTransform(-114.3,22.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000099").s().p("AtLGtIAAguIAAjHIABAJIADASIACASIACASIABAIIAAABIAEgXQAGgXgBgaIgDiFIgCiFQgBhDAEhDQABgRAEgQQARhCgJhDQgEgWAVgHIAKgDIAKAEIAAgHIAAgLIAOAKQAIAHAHAKQAFAHAEAIIAHABQAEAOAMAKQAbAVASAeQAiA6A3AmQAbATAfAPQALAGAKAIQAfAVAhASIAGADIAnAOIAJAEIAOAGIAKAFQAvAVAwATIADADQAHAFAJAAIAHAAIAFACQAbAJAeADIAEACQAMAAALAGIA1AFIABAAIACABQAPADAPAAIATADIAFAAIABABIAGABIAIABIAOAEIAOADIAOABIANADIAWADIATADIATADIAUACIASABIASACIARACIARAAIARABIASAAIARAAIARAAIARgBIASgBIARgBIAIgBIAJgBIARgBIARgCIARgDIAOgCQAEgDAHAAQAPAAAPgCIABgDIAMgBIADgBIAEAAIAagEQANgBAMgDIBMgVIAPgGIATAAIAAgCQA0gKAxgRIACgBQAOgHAKgJIAGABIBrhQIgMBoIADAHIADALIABAdIADCCQABAsgDAqQgCAZgDAYQgFAhgDAjQgCAZgFAXIgFAAIAAAJIACAAIgCAJIgCAGQgBAKADAGIgEAMQgpAAgogBIgCABQgYAIgZAAQg3ACg2gCQgUgBgIgKQgjADgkAFIgeAEQgPACgOgCQgDAAgDgDQgEgFgBgEQhHAGhIACIAAgEQAEgEAAgFQABgMAAgNIgBgMIAAgEQAAgogBgoIACgMQAPgsgCgwIgDggIgBgRQAAgKgEgGIACgFQALgUAUgKIgsgXIgSBAIABACIAAACIgCBvQgCANgBANQgEAzgBAzIABAdQAAAPAKAGIgCAEIAAAFgArRF4IARABIghgJg");
	this.shape_2.setTransform(-30,82.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhZBXIgMgEQgFgKgBgMIgBgEQgCgdADgcIABgHQABgGADgGQAFgMAMgFIAIABIARACIADACIAEACQAMANgCATIgBADIAAABIgBAAIgFADQgJAHgCAMQgEAYAPATIAAABIAAACIgGAMIgUADIgNgDgAAwgKIAEgjIgBgCIAAgMIAAgDIABgFIACgEIAAgCQAFgHAIgEQAGgEAIgBIANAAQABAAAAABQABAAABAAQAAAAABAAQAAABABAAQAGAEADAIQACADAAAEIgBACIgFABIgBABIgCAAIAAAAIgBAAIgBACIgBAAIgBAAIgCAEIgDADQAAACgCACIAAABIgCADIgBAAIgBADIAAABIgBAJIABAHIAAAAQABAHADAHIABACIAAAAIAGACIAAABQgIAFgOABIgEAAQgNAAgKgIg");
	this.shape_3.setTransform(-13.3,-93.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#996633").s().p("AiJDEIgDgIIgCgaIAAgSIgEgEIgCgHIgFgGIgGgGQgKgBgHAJIgHAHIgCACQgEAIgIAEQgCACgEgBQgCgBgBgEIgEgSIgBgFQgCgLgGgJQgJgFgDgIQgBgDACgCQgJgFgKgBIgOAfIgFAKIgBABQgLAKgKgLQgFgFACgHQAFgUALgRIABgDQAHgSAMgPQACgUANgOIAJgHIgMADIgVAEIgCABQgKAGgMAAQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBQgGgJALgFQAOgGAPgDQAdgFAYgSQAQgNAKgSIADgFIADgCIABAAIABgCIAAgCQABgKADgJQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAHgEAEAHIATAIIADgBQAMgHANgFQAHgCAGgEQAXgRAagNIAVgLQATgJATgFQAPgLARgEQAKgDAMAAIARABIABAAIAKgEIAIgEQAMgHAMgFQAJgBAHADIAJABIApADQAAAAABAAQAAAAAAAAQAAAAABABQAAAAAAAAQAFAIgJACQgVADgVgBQgDAJgLABIgDAAIgGAEIABABQAFAIAHAGIAIAAQAggEAZALQAEACACADIAsACIAVABIAEgCQANgDADALQABAFgFADIgFADIgTAIQgIAEgGAHQgDADgEgBIAAAAIAAABIAAAEIAAABQAKAIAMAEIADADQAHAMgMAIIgCABQgnACgmgGIgUgBQgBABgEABIgPADQgHABgGAFQgEADgFABIg4AQQgJADgIAEIgEACQgFAIAAAKQAAAFgDAEQgGAMgCAPQgBAHgGAEQgEADgEgDQgGgFgFgHIgHgJIAAAAIgIAAQgOAGgHANQgGAMgEANIgIAaIgBAFQgCAOgNgBQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBgBQgHgHgJgEIgFgBQgGAIgFAKIgCAEIgFAKIABAEQAAAUgDAUIgCAJIgCAIIgBAMQAAAEgDACIgBABQgFACgDAAQgIAAgEgJg");
	this.shape_4.setTransform(-36.9,-103.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C6FFFF").s().p("AxWGSIAAg+IADAJIAEAOIABAPIAAAMIAAAMgARWmRIAAABIABABIgDAAIACgCg");
	this.shape_5.setTransform(-3.2,18.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFCC99").s().p("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");
	this.shape_6.setTransform(0,-13.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("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ABAAAAgBQAAAAABgBIAAgCIAAgDIABgBIABgDIAAgEIACgEQAEgigCgiQAAgRgFgRQgDgLgFgKIAAgBIgaglQgagdgbgJIgBgBIgCgEIgDgCQgMgIgNABQgIABgGAFIgBACIgKAEIgIAEIACgLIAAAAIgFgDIAAAAIgBgCQgDgGgBgHIAAgBIgBgHIAAgJIAAAAIACgEIAAAAIADgDIAAgBQABgCABgCIADgDIACgDIAAgBIACAAIABgBIABAAIAAgBIACAAIABgBIAFgBIABgCQAAgEgCgDQgDgIgGgEQgBAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgNgBQgIABgHAEQgHAEgFAHIAAACIgDAEIAAAFIgBADIABAMIgJAvIgIhWIAdgXIA5gPIACAGIgBAAIAAAOIAAADIABAcIABACIAAAAIABAFIgCACIAAAGIABACIADAHIADAFQADAIAEAHQAEAIAHAEIABABQADAEAFACIAAABIACABIAFADIABAAQAGAEAJACIAEACIAKAHIAPAHIAOAIQABAAAAABQABAAAAABQAAAAAAABQABABAAAAIANAAIAEAAIACgBIAOACIAMAAIAcACIAIABQAdAMAcAOIA4AUIAYALIAFABIACACIANAGIAOAGIABgBIABAAIABAAIABAAQAYAJAYAMQAHAEAHAAIAgANQAUAIAUAHQAQAEAMAJIAPAFQAYARAaAJIAFABQAGAEAHADIAPAHIAHAEIAFAGQApAPAfAcIALAIQAPAJAOALQAOAHANALIAEADQAWALASASIADADIAHAHIALAMQAOAKAMANIAAACIAGADIAPASQANAPAOAJIAAADQAwAjAmArIADAFIAIAKQAIAFAHAIIAUAWQAQAVANAXIAFALIAAAOIANAQIAJAYIALAcIAFAHIABAAIAHAFIAFgBIAGAOIgKAHIACASIAAABIAAABIABADIAFAKIAEAKIADAGIADAGIAKAEIAEgBIACAFIgGAJIgBAPIAAAOIAAAPIgBAOIgBAPIgBAOIAAAOIgCANIAAAHIgBAHQgCAKgBAKIAAAOIgBANIgCAOIgDANIgCAGIgBAGIgDAGIgGAMIgHAMIgIAOIgIAOIgHAPIgHAPIgHAOIgIAMIgHANIgJALIgOARIgRAOQgIAIgKAFIgSAMIgBACIgNAJIgJAF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");
	this.shape_7.setTransform(0,-1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bubintrostill, new cjs.Rectangle(-115.8,-125,230.4,250.1), null);


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


(lib.tobeMouth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// Layer 1
	this.instance = new lib.tobemouthstill();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.289,0.289);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.4,scaleY:1.4},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1.4,2.1,2.8);


(lib.tobeblondeblink = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tobeblondeblinkstill();
	this.instance.parent = this;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiNBxQAAAAgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBQgDgFgLAAQgDgDABgEIABgFQALgFAMgBQAJgBAJACIABAAQgPg2ALg3IAEgSQALgKAMgHIAJgEIADgBQAZgKAbAKIgDACQAFADADAIIABACIAAADIAAACIACADIACACQgCAPAEANIABAHIACACIABACIAAADIAAACQAHAIAAAKIAAAHQgQASgYAHIgEAFIgDAFQgTAKgNARIgGACIgEACIgCACIgBACIgBACQgOAGgNABIgKABIgEAAgAhrgTIgFAYQgGAHAAALQABAgACAfQAWgQARgRQARgIAKgQQAKgJALAHIADgBQgNgcgCgfIgBgIIgFgFIgDgCIAAgDgAAmAmIgCgBIAsAAIALABIgBAAgAB4AaQgoAAgogJQgIgBgEgJIAAgHIAAgEQADgGAHAAQgGgWABgXIABgFIACgBIAAgGIAdgdIAAgJIAcgHQAKABAJAHIAPAiQACATAAAVQgBgIgEgHQgIgTgQgIIABgTIgbgFIgUAaQgGAEgFAFIACABIACACQACAUAFAUIABAFQAlADAmAJIARADQAKADAEAHIAAAFIgBAFQgIACgHgCIgCACIgCACIgRAAIgEAAg");
	this.shape.setTransform(0.6,-1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("AhhCCIgYgdQANgCAOgFIAAgCIACgCIABgDIAEgCIAGgBQAOgSATgJIADgFIADgFQAYgHAQgSIAAgIQAAgJgGgHIAAgDIAAgCIgCgDIgCgCIgBgHQgEgOACgOIgCgDIgBgCIAAgDIAAgCIgCgDQgCgIgGgDIADgCQgbgKgYAKIATgJIArgHIAOgKIBGgSIAAAJIgcAdIAAAGIgDACIgBAFQgBAXAGAWQgHAAgDAFIAAAFIAAAIQAEAHAJACQAnAJApAAIgCADQgEAFgFADIgTAAIgKAAIgsAAIACABIgCAAQgNAcgbAZQgHATgPAIIgHAKQgbANgkAAIgHAAgAiDBLQgHgiAGggQgCgYAAgbIAAgEIAtgVQgLAGgLALIgEASQgLA2APA2IgCABQgJgCgJAAgAhxAMQAAgLAHgHIAFgZIA5gfIABACIADADIAEAFIABAHQADAgANAbIgDABQgLgGgKAJQgKAPgRAIQgSASgVAPQgDgfgBgfgAA9gZIgBgFQgGgTgBgVIgCgCIgCgBQAEgFAGgEIAVgaIAbAFIgBAUQAPAHAJATQADAHACAIIAAAGQACAMgCALQglgIglgEgAB1h0QgJgGgKgCIAbgFQAGAWACAZg");
	this.shape_1.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.shape}]},14).to({state:[{t:this.shape_1},{t:this.shape}]},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.5,-13,27.1,26.1);


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


(lib.staceintrostill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tobeblondeblink();
	this.instance.parent = this;
	this.instance.setTransform(-0.2,-17.2,0.205,0.205);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AhpCBIgIgFIAAgIIAAgBIAAAAIAAgCIACgJIADgIIACgOIABgFIAAAAIAAgEIADgJIAAgBIABgDIAAgBIAAgBIAAgBIAAgBIABgBIABgDIAAgCIABgBIAAgBIABgBIABgCIADgEIACgCIAEgEIAAABIACABIABABIACABIACADQALANARAEQAYAKAZgDIAAgBIADAAIADgBIAKgEQAHgDAHAAIADAAIAAAAIABAAIABABIABABIACADQAFAGAAAIIABAJIABAGIAAABIAAACIAAAJIABADIAAAAIgBAFIAAAPIgBAAIAAgBIAAABIgCAAIgBAAIAAABIgBAAIgBACgAhfB/IACAAIAAAAIABgBIgBAAIgDAAIABABgAAahBIgGgBIgGAAIgEAAIgBAAIgDgBIgGgBIAAgBIgFgCIgDgBIgCgCIgBgBIgBAAIAAAAIgEgBIACgHIANgCIgLgCIANgDIAAgBIgIAAIgDgFIAPgIIAAAAIgCgBIAAAAIAAAAIgJgCIABgKIABAAIAAAAIACgCIABgBIABAAIADgCIAAAAIABAAIACgBIACAAQAJgDAJACIAHACIABAAIADABIAEABIABAAIAHAAIABgBIAFgBIAHgBIAAgBIACAAIAIgCIAJgCQAHAAAGADIAJAFQAEAAACADIAAABQAFAEAAAHIAAAHQABAFgCAFIgBACIgCACIgDADQgGAHgJABIgIADQgJACgJAAIgCAAIgCAAIgJACIgJABIgCAAIgBAAIgIAAIgHAAg");
	this.shape.setTransform(-4.4,10.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C6FFFF").s().p("AhnDHIADABIgBAEgAhqDFIgDgPIAGARIgDgCgABujKIAAgBIAAAAIAAABg");
	this.shape_1.setTransform(-7.1,2.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("AhaC5IgFgBQgIgEgHgGIgFgEIgBgBIgHgIQAHgJgBgKQgBgFABgGQAIAJAJAIQAOAMATAHIgKgKQADgvAOguIABgCIAAgBIABAAIAAAAIABAAIABAAIAIAAIAEACIAAAAIAHADIAEAAIAHABIANAAIAPAAQAEAAAFgDIAWAAIACACQgDAOgGANIAAAAQgBADgDAEQgMAPgJARIgDAJIgCAFIAAAAIgBAAIAAACIAAAAIgBACIgBACIgDARIAAANIAAAAIgBABIgHABIgDABIgBAAIgCAAIgBABIgGADQgNAEgNAAQgRAAgQgIgABFCUIgEgCIgEgFIgCgCIgIgQIgCgGIgBgCQgIgUgCgVIAAgDIAAgBIACgCIAAgBIATgHIACgBIAAgBIABABIAAAAIABAAIADgBIABAAIABADQADADABADIAAABIAAACIAAABIAAABQAAAIAEAHIAFANIABACIABABIAAABIAAAAIABABIAEAAIADgCQADgBAEgDIAEgDIAEgFIAFgDIAEgDIAGgFIABAAIAAgBIAFgDIABgBIAFgEIAIgJIAFgGIADgCIADgEIACgDIACgCIAAAAIABgFIABAAIABAAIABAAIAGgBIgBAKIgBABIgGAZQAAAAABABQAAAAAAABQAAAAAAABQgBAAAAABQgDAEgEAEIgIAHIAAAAIgBABIAAAAIgEAEIgFAEIgBABIgMANIgEAEQgHAHgIAHIAAAAIgBAAIgDADIgGADIgCABQgFAEgHACIgCAAIAAABIgCAAIgEgBgAghBAIgGgCIAGABIADABIgDAAgADNA1IgBgBIgHgJQAZAAAWALIAAACIgNABQgNAAgNgEgAC+AqIABgDIABgBQACABABADIAAAAIAAABIABABIABAAIAAACIABAAQADACAAADIAAACIgBABQgFABgFABIAAgOgADFAlQAAAAgBAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIgBgEIAdgGIAAAAIAAAAIABAAQAAAAABAAQAAABABAAQAAABAAAAQABABAAAAIgDAHIgBABIgDAAQgIADgIAAIgBABQgEAAgDgDgACkAjIgIgYIAbgEIgEAOIgMACIAAAMgADHAbIgHABIgDgBIAAAAIgCAAIACgIIAlgKIAAAGIAAAAIAAABQgFAGgGADIgGACIgBAAIgEABIgFgBgAihAUIgHgBIgPAAIgPAAIgUABIgQAAIAAAAIgDAAIAAgBIgDgCIgDgDQAAgIADgGIACgDQAEgGAGgEIAJgIIAIgHIABgBIASgOIAHgFIAJgFIAGgFIABgBIAEgFIAFgEIACgBIAGgHIABgBIADgCIABgBIAAAAIAEgEIACgCIADgEIAAgBIAEgIIABgEIgBgCIgDgDIgBgBIAAgCIgGgIIgBgBIgGgJIgDgDIgCgFIAAgCIgBgDQgBgEAEgBQAZgVAfAAIAGgBQAEgBACADIABAAIgBAAIAAABQABAEgFABIgIABIgFABIgTAFIgHACIgBAAQgBAAgBABQAAAAgBAAQAAABgBAAQAAAAAAABIgBAAIABADIAIgEIAHgCIABgBIAMgCIACgBIAFgBIABgBIACgBIABAAIAEgBIAFAAIABABQADADgBAEIgCABIgDABIAAAAIgEABIgEABIgBAAIgBAAIgCABIgBAAIgGABIAAABIgFABIgEAAIgFACIgCAAIgBAAIgDABQgBAAAAABQAAAAgBAAQAAAAAAABQAAAAAAAAIABABIACAAIAIgCIAAgBIACAAIABgBQAKgBAJgDIABgBIAJgCQADAAADABIABABQABAFgFABIgCABIgNAGIgHADIgBABIgEAAIgPAEQAFACAGgCIAJgDIABAAQAGgDAHgBIACAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABIABACQgBAEgEABIgIAFIgBAAIgIADIgPAGIABACIAFADIABAFQABAFgCAGIgBACQABAAAAABQAAAAAAABQAAABAAAAQAAABAAABIgCADIgBAAIgDAEIgCACIgBACIgIAIIgPAOIgDACIgEAEIgNAKIgKAIIgBABIgKAGIgBAAIAAABIgCABIgIAFIABADIAAAAIAHgBIAFgBIAAgBQAmgHAnACIgBAQIgFAIIgEAJIgBACQgOACgPAAIgMAAgAhWiQIAAAAIABgBIgBABgADFAMIgBAAQgBgBAAAAQAAgBgBgBQAAAAAAgBQAAAAAAgBIAAgGIAAAAIAAgBIABAAIAAAAIACAAIAcgGIAAABQAAAAAAAAQAAABABAAQAAAAAAABQAAAAAAABIAAABQABACgBACIgBABIgEAEIgBAAIgGACQgGACgGAAIgFAAgAgwh+QgBgNAGgNIAHgPIAOgHIgGgBIAQgKIgFgDIADgEIAoAFIAGAOIgEAAIACAEIgBAGIAAgBIAAAOIgBADIgGAFIgBABIgKAAIAEACQALAEAMgDIABACIgNAQIABADIAHgEQASA6g4AQQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABIAAAGIAAAFIACAGQAJgLALABIAEgBIABAAQANgBAJAJQAFAEAAAHIABAGIABAIIAAAAIAAABIAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAQAAAAAAAAIgDgBIgBACIgDABIABAAIgCAAQAAAAAAAAQgBAAAAAAQgBABgBAAQAAAAgBAAIgQACIAAAAIgBAAIgBAAIgBAAIgPAFIgFgBIgIgDQgHgCgIABIgJACIgCABIgIAEIgBAAIgBABQAFhEgIhFgAAUhMIgCgOIACgCIAGAAIgSgGIAMAWgAgYimIgEAFIgBAAIgBACIABAAIgBAAIABABIABAAIAAgBIABgBIABgBIABgBIACgBIACgCIAFgCIADAAIACAAIAFABIABAAIgBgDIAAgBIgDAAIgDAAIAAAAIgBAAIgDABIgCABIAAAAIgDABIgBAAIgBAAIgBABgAASirIgCAAIAGgBIgBAAIgDABgAANixIAAABIAAACIAAAAIABABIAAABIAAAAIACgBIAAgBIABAAIADgBIACAAIAEABIAAAAIABAAIAAAAIABAAIAAAAIAAAAIAAAAIABgBIAAAAIgBAAIgCgBIAAAAIgIgBIgEAAIgBAAg");
	this.shape_2.setTransform(-0.4,-2.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF99").s().p("Ag8CoQgBgHgGgDIgCgBIgCgBIAAgiIgBAKIgEAOIgBgPIAEghIgEAFIgEAiIgCgHIgBgXIADgBIAKgjIgIACIAAACIAAABIAAACIgBADIAAABIgBAKQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAAAIgDABQAAAAgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBIAAgDIAAgBIABgIIACgNIACgKIABgBIABgDIADgFIAAgBIAEgIQAFgJADgJIACgFQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIAEgLIgGgeIgCgDIAAAAIAAAAIAAgBIAAAAIAAgBIAAgBIgBAAIAAgBIgBgCIAAgBIAAgCIAAAAIgBAAIAAgBIAAgCIAAAAIgBgBIAAgBIAAgBIAAAAIAAgBIAAAAIgBgDIAAgBIgBgBQABgBAAgBQABAAgBgBQAAAAAAAAQAAgBgBAAIAAgGIABgOIABgFIgBgBIgBgBIAAgBIAAgBIAAgBIAEgCIABgBIABAAIAAgBIAAAAIAFgCIAHgDIABgBIAAAAIAKgGIACgCIABgBIgBgDIgCgDIgBAAIAAAAIAAgBIAAAAIAAgBIAFgEIADgDQAAgGgDgFIgCgEQgBgNALgHIAOgJQABgCADgBIAKgEQAEgDAEABIAAAAIABgBIAAgBIABAAIABAAIAAAAIABgBIADADIABAAIAAAAIABACIAAAAIAAAAIABAAIgCACIAAAFIgBAIQgBAEgDADIgBABQgFAFgFAHIgBABQgEANgDANIABAGIgBALIAAAJIAAADIAAAGQACAFAAAGIABAwQABAYgDAYIgCAXIAAADQgFAXgJAWIgKAoIgCAEQgBASAAARgAAkgSIACgBIADAAQAQgFAMgMQAFgGADgHIAAAAIACgEIAAAAIACgFIAAgDIAAgHIAAgEIABgJIgBgHIAAgDIgCgDIAAgBIgBgCIAAgCIAAAAIAAgCIABgCQADgEABgEIAAAAIgBgHIgBgBIAAgBIgEgCIgBAAIgDgQIADACIADAEIACABIAAABIACACIAAgBIgBgCIAAgBIAAAAIgBgDIgBgBIAAAAIgBgCIAAgBIgCgEIAAgBIgDgGIAAgCIgBgDIgBgBIAAgBIgBgBIgEgFIgBgBIgBgBIgEgBIgFgBIgBAAIgHgBIgFgBIgFgBIgHgCQgDgBgCgCIAAgBIAAgDIABgCIADgBIAJAAIAIADIAJACIAFADIAEADIACABIAAAAIACABIADACIAFAIIABACIACADIABADIADAFIAAACIABACIAAAAIAAABIABAAIAAACIAAABIABADIAAADIABAJIAAABIABAEIgBAGIAAAEIgBAHIAAAAIABAvQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIgBADIAAAAIgBAEQAAALgDAMIgFAAIgFAAQgNABgNAGIgBACIgIADg");
	this.shape_3.setTransform(-4.4,-5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#FFFFFF","#6699FF"],[0.157,1],0,0,0,0,0,6.6).s().p("AgZA4IgCgPIgBgOIABgQIADgOIADgJIADgIIAEgIIAFgIIAEgIIAGgKIACgBQADgCADgBIAIgBIAEABIADACIACACIABADIABAFIABAHQAAALgCAKIgDAMIgEASIgCAJIgCAGIgBADIgDAHIgDAHIgCACIgEADIgDAEIgFACIgEADIgDAAIgHACg");
	this.shape_4.setTransform(21.2,-11.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC9966").s().p("AgvBwIADgIIAAgCIgBACIABgEIABgEIAAgCQAFgJgBgLIAAgBIABgBIAAAAIABAAIABAAQACAEgBAEIgEARIgBAKIgBAEQAFgDACgHIABgFIAAgKIADgDIgBgMIAAAAIAAgBIAAAAIAAgCIAAgEIABAAIAAgBIABgBIAFgOIACgUIABgBQgIgFgCgJIAAgBIgCgEIgBgIIAAgTIABgUIACgKQADgLAFgLIAGgNIAFgJIACgDIACgDIAGgHIABgBIAAgBIADgDIABgCIAFgCIABgBQAHgDAIgBIAFAAIAFAAIABABIADACIACAEIAAACQAQArgSAqIgBACIAAADIgBACIgCADQAAAEgCADIgKAPQgDAFgGADIgDACIgGAEQgEADgEAAIgDAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAIgEABQABADgBADIAAAEIgBABIAAABIAAABQgCALgGAKIAAABIAAACIACAAIAAALIgBAIQgEAVgPARgAgUAOIAAAAIAAAAIgBAAIABAAgAANhxIgDACIgCACIgJAKQgGAHgEAIQgIAQgFASQgDANAAAOIAAAXIAHAHQAFAFAHAAIAFgBQADgBAEgCIAHgEQAEgCADgDQAEgHACgIIABgEIACgIIABgBIABgEIACgLIAFgYIABgBIABgGIABgHIAAgPQgBgHgFgFIgCgCIgCgCIgCAAIgHgBIgBAAQgDAAgDABg");
	this.shape_5.setTransform(20.5,-6.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgHDrIABgCIABAAIABAAIAAAAIACABIAAAAIgBABgAiLDpIgBgBIADAAIABAAIgBABIAAAAIgBAAIgBAAgAAADpIAAAAIgBAAIAAgBIAAgOIABgGIAAAAIgBgDIAAgJIAAgCIAAgBIgBgGIAAgJQgBgIgFgGIgCgDIgBgBIAAgBIgCAAIAAAAIgDABQgHgBgGADIgLAEIgDABIgEABIAAAAQgZAEgYgLQgRgEgLgNIgCgCIgCgCIgBgBIgCgBIAAgBIgEAEIgCACIgCAEIgCACIgBACIAAAAIAAABIgBACIgBADIgBABIAAABIAAABIAAABIAAABIgBADIAAABIgDAJIAAAEIAAAAIgBAFIgCAOIgDAIIgCAJIAAACIAAAAIABABIgBAIIgDgCIAAgBIAAgBQgBgGACgFQAEgKAAgLQAAgJACgIQABgLAEgKIAEgKIABgBIAAAAIABAAIABgCIAGgGIACgBIACgEIAAgBQAEgDABgEIACgGQABgDAAgDIABgCIAAgCIAAgBIgBAAIgKgiIgCADIgDgJIABgBQgBgGABgFIAAgCIABgOIACgJIABgEIABgKIABgGIADgIIACgCIhRABIgcgBIgGAAIgEgBQgGgCgEgEIAAgDQAAgGACgGIACgEQAJgJAKgIIAOgMQAKgLANgJIAIgFIABAAIABgBIADgCQAEgCADgEIABAAIACgCIAAgBIAKgIQAJgHAGgJQADgEABgEQAAgEgCgEIgBgBIgUgdIAAgKQAigXApgDIAMgKIAAgCQATgNAXgEIAPgBIAAgDQAKgEALACQAjAHAJAhIABACIABABIABAEIABAGIAAAFIABAGIAAACIAAABQAFArgHArIgDACQACAZANAWIgCADIACAHIAIAHQASAQgPAUIAAAKQAEAFABAHQABAHACAGIADAHIADAKIABAAIAAABIACAAIAGgEIAMgJIABAAIAEgEIACgCIAHgFIAFgEIAAAAIACgCIAEgDIAMgOIABgBIAEgGIAAgBIABgCIAAgBIACgCQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAgKgDgIIAAgDIAAgEIABgEIALgFQAHACAHgBIADgBIAAAAIACgGIgBAAQgVhDAig9IAIgLIAEgFIAFgEIAGgEQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQAHgDAHgBIANABIADABQAFADAAAFIABACIABABIACAGQACAPABAPIAAACQgCAggMAdIAAAAQgEAGgDAHQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgJANgNAIQgFACgGAAIAAAAIABABIAAAAIAHgBIAKAAQAGADAAAHQAAABAAABQAAAAgBABQAAAAAAABQgBAAgBAAIAAACQADADACADIAAABIgCAFIgBACIgBAAIAAAAIAAAAIgBACIAAAAIAFADIAAABIAAACIgCAHQAAAAAAABQgBAAAAABQAAAAgBAAQAAABgBAAIAAABQgEACgDAAIAbAMIgBAGIgFABQgTADgQgKQATAGAUgDIAAgCQgWgLgZAAIAIAJIAAABIAAABIgBABQgGAEgIAAIgDgBIgFALQgFALgJAHIgIgBIAAADIgCgEIgFAFIgEAFIgQAOIgGAFIgOAOIgFAEIgHAHIgCACQgGAFgHADIgCABQgEACgEABIgJgBIgDgBIgJgKIgEgJIgFgLIgDgGIgBgCIgFgSIAAgBIgBgBIAAgBIAAgBQABgDgCgDIgBAAIAAAAIgBABIgCAHIgEAFIgFAJIgCACQgEAGgGAFIAAABIAAABIgDADIgBAAIAAACIgEAJIAAACIgBADIgBACIgBABIAAABIgCAGIgBABIAAADIgBABIgBAOQgBAHAAAIIABAAIAAAAIACACIAAABQAFAGACAHIABAJIABAKIAAADQABAKgBAIIAAACIAAACIAAAAIAAABIAAAJIAAADIgBAAIAAAAgAh5B1QABALgHAIIAIAIIAAABIAFAEQAHAGAIAEIAFABQAdANAegJIAGgDIABgBIACAAIABAAIADgBIAIgBIAAgBIAAAAIABgNIACgRIABgCIABgCIAAAAIAAgCIABAAIAAAAIACgFIAEgJQAIgRANgPQACgEABgDIABAAQAGgNADgOIgCgCIgXAAQgEADgEAAIgQAAIgNAAIgHgBIgEAAIgGgDIgBAAIgEgCIgIAAIgBAAIgBAAIAAAAIgBAAIAAABIgBACQgNAugEAvIALAKQgTgGgPgNQgJgHgHgKQgCAGABAFgAhUCGQgBgSACgSIABgEIAKgoQAJgVAFgXIABgDIABgXQADgYAAgYIgBgwQgBgGgBgGIAAgGIAAgDIAAgIIAAgMIAAgGQACgNAFgMIAAgCQAFgGAGgGIABgBQADgDABgEIABgHIAAgGIACgCIgBABIAAgBIAAAAIAAgBIgBgBIAAAAIgEgCIgBAAIAAAAIgBAAIAAABIgEAAIACABQgFAAgEACIgJAEQgEABgBACIgOAJQgLAIACANIABADQAEAGgBAGIgCACIgGAEIAAABIAAAAIABABIAAAAIABAAIACADIAAAEIAAAAIgCACIgKAGIgBABIgBABIgGADIgFACIAAAAIgBAAIgBAAIgBABIgDACIgBABIABACIAAAAIAAABIACABIgCAGIAAANIgBAGQABABAAAAQABAAAAABQAAAAAAABQgBAAAAABIAAABIAAABIABADIAAABIABAAIAAAAIAAACIAAAAIAAABIAAAAIABACIAAABIAAAAIAAABIABACIAAAAIABADIAAAAIAAABIAAAAIAAABIAAAAIABABIAAAAIAAAAIABADIAHAfIgFALQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABIgCAEQgCAKgGAIIgDAJIgBAAIgCAEIgCADIAAABIgCAKIgDAOIgBAHIAAABIABADQAAABAAABQAAAAABABQAAAAABAAQAAAAABAAIACAAQABgBAAAAQAAAAAAgBQABAAAAAAQAAgBAAAAIAAgKIABgBIAAgDIAAgCIAAgBIABgCIAHgBIgJAiIgDABIAAAYIACAHIAFgjIADgFIgDAhIAAAQIAFgPIAAgJIAAAhIADABIACACQAFADABAGIAUAQIAAAAgAA5AiIgCABIgSAHIgBABIgCACIAAABIAAADQADAVAHAUIABACIADAGIAHAQIACACIAEAFIAEACIAGABIAAgBIACAAQAHgCAGgEIABgBIAHgDIACgDIABAAIAAAAQAIgHAHgHIAEgEIAMgNIACgBIAEgEIAEgEIABAAIABgBIAAAAIAHgHQAFgDACgFQABgBAAAAQAAgBAAAAQAAgBAAAAQAAAAgBgBIAGgZIABgBIABgKIgGABIgBAAIgBAAIAAAAIgCAFIAAAAIgCACIgCADIgDAEIgDACIgFAGIgIAJIgFAEIgBABIgFADIAAABIgBAAIgGAFIgEADIgFADIgEAFIgEADQgDADgEABIgDACIgEAAIgBgBIAAAAIAAgBIgBgBIgBgCIgFgNQgDgHAAgIIAAgBIgBgBIAAgCIAAgBQgBgDgDgDIgBgDIgBAAIgCABIgCAAIAAAAIAAgBgACgApIgCAIIAFAJQAPgQAEgWIABgHIAAgLIACAAIAAAAIADABIAHgBQAEABAFgBIABAAIAGgCQAGgCAFgGIAAgBIAAAAIAAgGIglAKIgCAHIgCgBIAAgBIABgBQAFgJADgMIAAgBIAAAGQAAABAAAAQAAABABABQAAAAAAABQAAAAABABIABAAQAJACAIgEIAGgCIACAAIADgEIABgBQACgCgCgDIAAgBQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAgBAAAAIAAgBIgcAGIgCAAIAAAAIgBABIABgFQABgDgBgCIADgBQABAAABgBQAAAAABAAQAAgBAAAAQAAgBAAAAIADAAQAFgBAFgCIAGgFIADgBQAFgDADgFIAKgQQACgEABgDIABgEIABgCIABgDIAAgCQATgpgQgsIgBgBIgCgFIgDgCIAAAAIgGgBIgFABQgIABgHADIgBAAIgEADIgCABIgEAEIAAAAIgBABIgFAHIgCADIgDAEIgFAJIgGANQgEAKgDALIgCAKIgBAUIAAATIABAJIACAEIAAABQACAJAHAFIAAABIgCAUIgGAOIgBAAIAAABIAAABIAAADIgBACIAAABIABAAIAAAAIAAANIgCACIAAAKIgCAGQgBAGgFAEIAAgFIACgJIAEgRQAAgFgCgEIgBAAIAAAAIgBABIAAAAIAAACQAAAKgFAJIAAACIgBAFIgBADIABgBIAAABgAgWAnIAFABIAPAAIABAAIACAAIAIgBIAJgBIACgBIACAAQAJAAAJgCIAJgDQAJgBAGgHIADgDIABgCIABgCQACgEgBgGIAAgHQAAgGgEgEIAAgBQgCgDgFAAIgJgFQgGgDgHAAIgIACIgJACIgCAAIAAABIgHACIgFAAIgBABIgGAAIgBAAIgEgBIgDgBIgBAAIgHgCQgJgCgJADIgCABIgCAAIAAAAIgBABIgEABIgBAAIgBABIgCACIAAAAIgBAAIgBAKIAKABIABAAIAAAAIABABIAAABIgQAIIADAEIAJAAIABABIgPADIALACIgNACIgCAHIAEABIAAAAIABAAIABABIACACIADABIAFADIABAAIAGACIAEAAIAAAAIAEAAIACAAIAFAAgAC7AOIgBADIAAAOQAFAAAFgCIABgBIAAgCQAAgDgDgCIAAAAIgBgCIAAAAIgBgBIgBgBIAAAAQgBgDgCgBIAAAAIgBABgADcAAIgdAGIABAEQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAAAQADADAEAAIABgBQAIAAAIgDIADAAIACgBIACgHQAAAAgBgBQAAAAAAgBQgBAAAAgBQgBAAAAAAIgBAAIAAAAgACYgNIAIAXIAEAAIAAgLIALgCIAEgOgAilgEQAVABAUgDIABgCIAEgJIAFgJIACgQQgngCgnAHIAAABIgFABIgHABIAAAAIgBgDIAIgFIACgBIAAgBIABAAIAKgGIABgBIAKgIIANgKIAEgEIADgCIAPgOIAIgIIABgCIACgCIADgEIABAAIACgDQABgBAAgBQAAAAAAgBQAAgBgBAAQAAAAAAgBIAAgCQACgGgBgFIgBgFIgFgDIAAgCIAOgGIAIgDIABAAIAJgFQADgBABgEIgBgCQAAgBAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAIgDAAQgHABgGADIgBAAIgJADQgFACgFgCIAPgEIADAAIABgBIAHgDIANgGIACgBQAFgBgBgFIgBgBQgDgBgDAAIgJACIgBABQgJADgKABIgBABIgBAAIgBABIgIACIgCAAIgBgBQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABgBIADgBIABAAIACAAIAFgCIAEAAIAFgBIABgBIAFgBIABAAIADgBIAAAAIABAAIAFgBIADgBIAAAAIAEgBIABgBQACgEgEgDIgBgBIgFAAIgEABIgBAAIgBABIgCABIgFABIgCABIgMACIgBABIgHACIgHAEIgCgDIABAAQAAAAAAgBQABAAAAgBQABAAAAAAQABAAABgBIABAAIAHgCIATgFIAFgBIAIgBQAFgBgBgEIAAgBIABAAIgBAAQgCgCgDAAIgGABQggAAgZAVQgEABABAEIABADIAAACIACAFIADADIAHAJIAAABIAGAIIABACIABABIACADIABACIgBAEIgDAIIgBABIgDAEIgBACIgEAEIgBAAIgBABIgDACIAAABIgHAHIgCABIgFAEIgEAFIgBABIgGAFIgJAFIgHAFIgSAOIgBABIgIAHIgJAIQgFAEgFAGIgCADQgDAHAAAIIADADIADACIAAABIADAAIABAAIAPAAIAUgBIAPAAIAPAAIAHABgAgVjVIAGADIgRAKIAGABIgOAHIgHAPQgGANABANQAIBGgFBEIACgBIAAAAIAIgEIACgBIAJgCQAIgBAHACIAIADIAGABIAOgFIABAAIABAAIABAAIAAAAIAQgCQABAAABAAQAAAAABAAQAAgBABAAQAAAAABgBIABAAIAAAAIACgBIABgCIADABQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAgBIAAAAIAAgBIAAAAIAAgIIgBgGQgBgGgFgFQgJgJgMABIgBAAIgFABQgLgBgJALIgCgGIAAgFIABgGQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQA4gQgRg6IgHAEIgCgDIANgQIgBgCQgMADgKgEIgFgCIAKAAIABgBIAGgFIABgDIAAgOIAAABIABgGIgCgEIAEAAIgGgOIgogFgAh5hjIgBABIgDAEIgBAAIgSARIgCACIgQAOIgBAAIgBACIgEABIgDADIgHAFIgHAEIgDABQgEACABADIAAABIAFgBIABAAIADgBIAAABIACAAIAAgBIAHgBIAIgCIAGgBIAEAAIAEgBIAggBQADgBABgDIABgCIAAAAQADgSgEgTIgDgHQAAAAAAAAQABgBgBAAQAAAAAAgBQAAAAgBAAIAAAAIAAAAIgBAAIAAAAIgBAAgAAgisIACAAIADACIABABIABABIAAAHIAAABQgBAEgDADIgBACIAAACIAAABIABABIAAACIABABIABADIABADIABAIIgBAIIAAAEIAAAHIgBADIgBAFIgBABIgCADIAAAAQgDAHgFAGQgLANgQAEIgCABIgCAAIADAJIAHgDIAAgCQANgGAOgBIAEAAIAFAAQADgLAAgMIABgDIAAgBIACgCQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBAAIgBgwIAAAAIABgGIAAgFIABgGIgBgDIAAgCIAAgJIgBgDIgBgDIAAgBIAAgCIAAAAIAAAAIAAgBIgBgCIAAgBIgDgGIgBgDIgCgDIgCgCIgFgHIgDgDIgBgBIgBAAIgBgBIgEgDIgGgCIgIgDIgIgCIgIgBIgEACIgBABIAAADIABABQABACADABIAIACIAEABIAFABIAHABIABAAIAEABIAEACIACAAIAAABIAFAFIAAABIABABIAAABIABADIABACIACAGIAAABIACAEIAAABIACACIAAABIAAAAIABADIABABIAAAAIABADIAAAAIgCgCIgBgBIgCgBIgCgDIgDgDgAgDDpIgBAAIAAgBIAAAAIACAAIAAAAIgBABgAC4gvIAAgBIAAAAIABABgAC5g2IgIgIIAAgYQABgNADgNQAEgTAJgQQADgHAGgHIAKgLIADgCIACgBQAEgCAEAAIAGABIACABIADABIACACQAFAFAAAHIAAAPIgBAIIgBAFIgBABIgEAYIgDALIgBAFIgBAAIgBAIIgBAEQgDAIgEAHQgCAEgEACIgHAEQgEADgFABIgFAAIAAAAQgHAAgEgEgADdisQgDAAgDADIgCABIgHAKIgEAIIgFAIIgDAIIgEAIIgDAJIgCAPIgBAQIAAAOIACAPIAGAEIAIgCIACAAIAEgDIAFgDIAEgDIAEgDIACgCIADgHIADgHIABgDIACgGIACgJIAEgTIADgNQACgKAAgKIgBgIIAAgEIgCgDIgCgCIgDgCIgEgBIgIABgAAEh7IASAGIgGAAIgCACIACAOgAhaipIABgBIgBABgAghi3IAAgBIAAAAIAAAAIAAgCIABAAIAEgFIABgBIABAAIABAAIADgBIABAAIABgBIADgBIABAAIABAAIACAAIADAAIAAABIABADIgBAAIgFgBIgCAAIgDAAIgFACIgCACIgCABIgBABIgBABIgBABIAAABIgBAAIAAAAgAAOjEIAEgBIgGABIACAAgAAKjFIAAgBIgBgBIAAAAIAAgCIAAgBIABAAIAEAAIAIABIAAAAIACABIABAAIAAAAIgBABIAAAAIAAAAIAAAAIgBAAIAAAAIgBAAIAAAAIgEgBIgCAAIgDABIAAAAIgBABIgBABIgBAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.staceintrostill, new cjs.Rectangle(-25.6,-23.4,51.3,47), null);


(lib.staceintro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// Layer 1
	this.instance = new lib.staceintrostill();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.6,-23.4,51.3,47);


(lib.prointro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// Layer 1
	this.instance = new lib.prointrostill();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(44).to({x:2.3,y:-23.1},0).to({x:1.2,y:-25.1,alpha:1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.9,-99.6,172.9,207.8);


(lib.introtoverbsofbe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		playSound("maracas_shake");
	}
	this.frame_22 = function() {
		playSound("maracas_shake");
	}
	this.frame_40 = function() {
		playSound("maracas_shake");
	}
	this.frame_44 = function() {
		playSound("maracas_shake");
	}
	this.frame_59 = function() {
		playSound("maracas_shake");
	}
	this.frame_66 = function() {
		playSound("maracas_shake");
	}
	this.frame_113 = function() {
		this.gotoAndPlay(77);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(18).call(this.frame_22).wait(18).call(this.frame_40).wait(4).call(this.frame_44).wait(15).call(this.frame_59).wait(7).call(this.frame_66).wait(47).call(this.frame_113).wait(1));

	// Layer 1
	this.instance = new lib.Symbol221("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(61.8,88.8);

	this.instance_1 = new lib.Symbol222("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(62.4,77.9);

	this.instance_2 = new lib.Symbol223("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(76,78);

	this.instance_3 = new lib.Symbol224("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(86.2,87.2);

	this.instance_4 = new lib.Symbol225("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(103.1,78.3);

	this.instance_5 = new lib.Symbol226("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(121.2,78.3);

	this.instance_6 = new lib.Symbol227("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(60.1,104.5);

	this.instance_7 = new lib.Symbol228("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(73.9,104.7);

	this.instance_8 = new lib.Symbol224("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(86.2,87.2);

	this.instance_9 = new lib.Symbol225("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(103.1,78.3);

	this.instance_10 = new lib.Symbol229("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(117.3,104.2);

	this.instance_11 = new lib.Symbol223("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(76,78);

	this.instance_12 = new lib.Symbol230("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(43.3,132.7);

	this.instance_13 = new lib.Symbol225("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(103.1,78.3);

	this.instance_14 = new lib.Symbol228("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(73.9,104.7);

	this.instance_15 = new lib.Symbol224("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(86.2,87.2);

	this.instance_16 = new lib.Symbol230("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(43.3,132.7);

	this.instance_17 = new lib.Symbol223("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(76,78);

	this.instance_18 = new lib.Symbol229("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(117.3,104.2);

	this.instance_19 = new lib.Symbol223("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(76,78);

	this.instance_20 = new lib.Symbol222("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(62.4,77.9);

	this.instance_21 = new lib.Symbol223("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(76,78);

	this.instance_22 = new lib.Symbol227("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(60.1,104.5);

	this.instance_23 = new lib.Symbol231("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(73.4,163.2);

	this.instance_24 = new lib.Symbol232("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(89.6,163);

	this.instance_25 = new lib.Symbol224("synched",0);
	this.instance_25.parent = this;
	this.instance_25.setTransform(86.2,87.2);

	this.instance_26 = new lib.Symbol222("synched",0);
	this.instance_26.parent = this;
	this.instance_26.setTransform(62.4,77.9);

	this.instance_27 = new lib.Symbol223("synched",0);
	this.instance_27.parent = this;
	this.instance_27.setTransform(76,78);

	this.instance_28 = new lib.Symbol223("synched",0);
	this.instance_28.parent = this;
	this.instance_28.setTransform(76,78);

	this.instance_29 = new lib.Symbol231("synched",0);
	this.instance_29.parent = this;
	this.instance_29.setTransform(73.4,163.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{x:62.4,y:77.9,alpha:1}}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{x:62.4,y:77.9,alpha:1}},{t:this.instance_2,p:{x:76,y:78,alpha:1}}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{x:62.4,y:77.9,alpha:1}},{t:this.instance_2,p:{x:76,y:78,alpha:1}},{t:this.instance_3,p:{x:86.2,y:87.2,alpha:1}}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{x:62.4,y:77.9,alpha:1}},{t:this.instance_2,p:{x:76,y:78,alpha:1}},{t:this.instance_3,p:{x:86.2,y:87.2,alpha:1}}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{x:62.4,y:77.9,alpha:1}},{t:this.instance_2,p:{x:76,y:78,alpha:1}},{t:this.instance_3,p:{x:86.2,y:87.2,alpha:1}},{t:this.instance_4,p:{x:103.1,y:78.3,alpha:1}}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{x:62.4,y:77.9,alpha:1}},{t:this.instance_2,p:{x:76,y:78,alpha:1}},{t:this.instance_3,p:{x:86.2,y:87.2,alpha:1}},{t:this.instance_4,p:{x:103.1,y:78.3,alpha:1}},{t:this.instance_5,p:{alpha:1}}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{x:62.4,y:77.9,alpha:1}},{t:this.instance_2,p:{x:76,y:78,alpha:1}},{t:this.instance_3,p:{x:86.2,y:87.2,alpha:1}},{t:this.instance_4,p:{x:103.1,y:78.3,alpha:1}},{t:this.instance_5,p:{alpha:1}}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{x:62.4,y:77.9,alpha:1}},{t:this.instance_2,p:{x:76,y:78,alpha:1}},{t:this.instance_3,p:{x:86.2,y:87.2,alpha:1}},{t:this.instance_4,p:{x:103.1,y:78.3,alpha:1}},{t:this.instance_5,p:{alpha:1}}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{x:62.4,y:77.9,alpha:1}},{t:this.instance_2,p:{x:76,y:78,alpha:1}},{t:this.instance_3,p:{x:86.2,y:87.2,alpha:1}},{t:this.instance_4,p:{x:103.1,y:78.3,alpha:1}},{t:this.instance_5,p:{alpha:1}}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{x:62.4,y:77.9,alpha:1}},{t:this.instance_2,p:{x:76,y:78,alpha:1}},{t:this.instance_3,p:{x:86.2,y:87.2,alpha:1}},{t:this.instance_4,p:{x:103.1,y:78.3,alpha:1}},{t:this.instance_5,p:{alpha:1}}]},1).to({state:[{t:this.instance},{t:this.instance_1,p:{x:62.4,y:77.9,alpha:1}},{t:this.instance_2,p:{x:76,y:78,alpha:1}},{t:this.instance_3,p:{x:86.2,y:87.2,alpha:1}},{t:this.instance_4,p:{x:103.1,y:78.3,alpha:1}},{t:this.instance_5,p:{alpha:1}}]},1).to({state:[{t:this.instance_1,p:{x:62.4,y:77.9,alpha:1}},{t:this.instance_2,p:{x:76,y:78,alpha:1}},{t:this.instance_3,p:{x:86.2,y:87.2,alpha:1}},{t:this.instance_4,p:{x:103.1,y:78.3,alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{x:62.4,y:77.9,alpha:1}},{t:this.instance_2,p:{x:76,y:78,alpha:1}},{t:this.instance_3,p:{x:86.2,y:87.2,alpha:1}},{t:this.instance_4,p:{x:103.1,y:78.3,alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{x:62.4,y:77.9,alpha:1}},{t:this.instance_2,p:{x:76,y:78,alpha:1}},{t:this.instance_3,p:{x:86.2,y:87.2,alpha:1}},{t:this.instance_4,p:{x:103.1,y:78.3,alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{x:62.4,y:77.9,alpha:1}},{t:this.instance_2,p:{x:76,y:78,alpha:1}},{t:this.instance_3,p:{x:86.2,y:87.2,alpha:1}},{t:this.instance_4,p:{x:103.1,y:78.3,alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{x:62.4,y:77.9,alpha:1}},{t:this.instance_2,p:{x:76,y:78,alpha:1}},{t:this.instance_3,p:{x:86.2,y:87.2,alpha:1}},{t:this.instance_4,p:{x:103.1,y:78.3,alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{x:62.4,y:77.9,alpha:1}},{t:this.instance_2,p:{x:76,y:78,alpha:1}},{t:this.instance_3,p:{x:86.2,y:87.2,alpha:1}},{t:this.instance_4,p:{x:103.1,y:78.3,alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{x:62.4,y:77.9,alpha:1}},{t:this.instance_2,p:{x:76,y:78,alpha:1}},{t:this.instance_3,p:{x:86.2,y:87.2,alpha:1}},{t:this.instance_4,p:{x:103.1,y:78.3,alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance},{t:this.instance_6,p:{x:60.1,y:104.5,alpha:1}}]},1).to({state:[{t:this.instance_1,p:{x:62.4,y:77.9,alpha:1}},{t:this.instance_2,p:{x:76,y:78,alpha:1}},{t:this.instance_3,p:{x:86.2,y:87.2,alpha:1}},{t:this.instance_4,p:{x:103.1,y:78.3,alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance},{t:this.instance_6,p:{x:60.1,y:104.5,alpha:1}},{t:this.instance_7,p:{x:73.9,y:104.7,alpha:1}}]},1).to({state:[{t:this.instance_1,p:{x:62.4,y:77.9,alpha:1}},{t:this.instance_2,p:{x:76,y:78,alpha:1}},{t:this.instance_8,p:{x:86.2,y:87.2,alpha:1}},{t:this.instance_4,p:{x:103.1,y:78.3,alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance},{t:this.instance_6,p:{x:60.1,y:104.5,alpha:1}},{t:this.instance_7,p:{x:73.9,y:104.7,alpha:1}},{t:this.instance_3,p:{x:85.1,y:113.4,alpha:1}}]},1).to({state:[{t:this.instance_1,p:{x:62.4,y:77.9,alpha:1}},{t:this.instance_2,p:{x:76,y:78,alpha:1}},{t:this.instance_8,p:{x:86.2,y:87.2,alpha:1}},{t:this.instance_4,p:{x:103.1,y:78.3,alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance},{t:this.instance_6,p:{x:60.1,y:104.5,alpha:1}},{t:this.instance_7,p:{x:73.9,y:104.7,alpha:1}},{t:this.instance_3,p:{x:85.1,y:113.4,alpha:1}}]},1).to({state:[{t:this.instance_1,p:{x:62.4,y:77.9,alpha:1}},{t:this.instance_2,p:{x:76,y:78,alpha:1}},{t:this.instance_8,p:{x:86.2,y:87.2,alpha:1}},{t:this.instance_9,p:{x:103.1,y:78.3,alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance},{t:this.instance_6,p:{x:60.1,y:104.5,alpha:1}},{t:this.instance_7,p:{x:73.9,y:104.7,alpha:1}},{t:this.instance_3,p:{x:85.1,y:113.4,alpha:1}},{t:this.instance_4,p:{x:102,y:104.5,alpha:1}}]},1).to({state:[{t:this.instance_1,p:{x:62.4,y:77.9,alpha:1}},{t:this.instance_2,p:{x:76,y:78,alpha:1}},{t:this.instance_8,p:{x:86.2,y:87.2,alpha:1}},{t:this.instance_9,p:{x:103.1,y:78.3,alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance},{t:this.instance_6,p:{x:60.1,y:104.5,alpha:1}},{t:this.instance_7,p:{x:73.9,y:104.7,alpha:1}},{t:this.instance_3,p:{x:85.1,y:113.4,alpha:1}},{t:this.instance_4,p:{x:102,y:104.5,alpha:1}},{t:this.instance_10,p:{x:117.3,y:104.2,alpha:1}}]},1).to({state:[{t:this.instance_1,p:{x:62.4,y:77.9,alpha:1}},{t:this.instance_11,p:{x:76,y:78,alpha:1}},{t:this.instance_8,p:{x:86.2,y:87.2,alpha:1}},{t:this.instance_9,p:{x:103.1,y:78.3,alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance},{t:this.instance_6,p:{x:60.1,y:104.5,alpha:1}},{t:this.instance_7,p:{x:73.9,y:104.7,alpha:1}},{t:this.instance_3,p:{x:85.1,y:113.4,alpha:1}},{t:this.instance_4,p:{x:102,y:104.5,alpha:1}},{t:this.instance_10,p:{x:117.3,y:104.2,alpha:1}},{t:this.instance_2,p:{x:131.2,y:104.2,alpha:1}}]},1).to({state:[{t:this.instance_1,p:{x:62.4,y:77.9,alpha:1}},{t:this.instance_11,p:{x:76,y:78,alpha:1}},{t:this.instance_8,p:{x:86.2,y:87.2,alpha:1}},{t:this.instance_9,p:{x:103.1,y:78.3,alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance},{t:this.instance_6,p:{x:60.1,y:104.5,alpha:1}},{t:this.instance_7,p:{x:73.9,y:104.7,alpha:1}},{t:this.instance_3,p:{x:85.1,y:113.4,alpha:1}},{t:this.instance_4,p:{x:102,y:104.5,alpha:1}},{t:this.instance_10,p:{x:117.3,y:104.2,alpha:1}},{t:this.instance_2,p:{x:131.2,y:104.2,alpha:1}}]},1).to({state:[{t:this.instance_1,p:{x:62.4,y:77.9,alpha:1}},{t:this.instance_11,p:{x:76,y:78,alpha:1}},{t:this.instance_8,p:{x:86.2,y:87.2,alpha:1}},{t:this.instance_9,p:{x:103.1,y:78.3,alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance},{t:this.instance_6,p:{x:60.1,y:104.5,alpha:1}},{t:this.instance_7,p:{x:73.9,y:104.7,alpha:1}},{t:this.instance_3,p:{x:85.1,y:113.4,alpha:1}},{t:this.instance_4,p:{x:102,y:104.5,alpha:1}},{t:this.instance_10,p:{x:117.3,y:104.2,alpha:1}},{t:this.instance_2,p:{x:131.2,y:104.2,alpha:1}}]},1).to({state:[{t:this.instance_1,p:{x:62.4,y:77.9,alpha:1}},{t:this.instance_11,p:{x:76,y:78,alpha:1}},{t:this.instance_8,p:{x:86.2,y:87.2,alpha:1}},{t:this.instance_9,p:{x:103.1,y:78.3,alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance},{t:this.instance_6,p:{x:60.1,y:104.5,alpha:1}},{t:this.instance_7,p:{x:73.9,y:104.7,alpha:1}},{t:this.instance_3,p:{x:85.1,y:113.4,alpha:1}},{t:this.instance_4,p:{x:102,y:104.5,alpha:1}},{t:this.instance_10,p:{x:117.3,y:104.2,alpha:1}},{t:this.instance_2,p:{x:131.2,y:104.2,alpha:1}}]},1).to({state:[{t:this.instance_1,p:{x:62.4,y:77.9,alpha:1}},{t:this.instance_11,p:{x:76,y:78,alpha:1}},{t:this.instance_8,p:{x:86.2,y:87.2,alpha:1}},{t:this.instance_9,p:{x:103.1,y:78.3,alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance},{t:this.instance_6,p:{x:60.1,y:104.5,alpha:1}},{t:this.instance_7,p:{x:73.9,y:104.7,alpha:1}},{t:this.instance_3,p:{x:85.1,y:113.4,alpha:1}},{t:this.instance_4,p:{x:102,y:104.5,alpha:1}},{t:this.instance_10,p:{x:117.3,y:104.2,alpha:1}},{t:this.instance_2,p:{x:131.2,y:104.2,alpha:1}}]},1).to({state:[{t:this.instance_1,p:{x:62.4,y:77.9,alpha:1}},{t:this.instance_11,p:{x:76,y:78,alpha:1}},{t:this.instance_8,p:{x:86.2,y:87.2,alpha:1}},{t:this.instance_9,p:{x:103.1,y:78.3,alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance},{t:this.instance_6,p:{x:60.1,y:104.5,alpha:1}},{t:this.instance_7,p:{x:73.9,y:104.7,alpha:1}},{t:this.instance_3,p:{x:85.1,y:113.4,alpha:1}},{t:this.instance_4,p:{x:102,y:104.5,alpha:1}},{t:this.instance_10,p:{x:117.3,y:104.2,alpha:1}},{t:this.instance_2,p:{x:131.2,y:104.2,alpha:1}}]},1).to({state:[{t:this.instance_1,p:{x:62.4,y:77.9,alpha:1}},{t:this.instance_11,p:{x:76,y:78,alpha:1}},{t:this.instance_8,p:{x:86.2,y:87.2,alpha:1}},{t:this.instance_9,p:{x:103.1,y:78.3,alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance_6,p:{x:60.1,y:104.5,alpha:1}},{t:this.instance_7,p:{x:73.9,y:104.7,alpha:1}},{t:this.instance_3,p:{x:85.1,y:113.4,alpha:1}},{t:this.instance_4,p:{x:102,y:104.5,alpha:1}},{t:this.instance_10,p:{x:117.3,y:104.2,alpha:1}},{t:this.instance_2,p:{x:131.2,y:104.2,alpha:1}},{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{x:62.4,y:77.9,alpha:1}},{t:this.instance_11,p:{x:76,y:78,alpha:1}},{t:this.instance_8,p:{x:86.2,y:87.2,alpha:1}},{t:this.instance_9,p:{x:103.1,y:78.3,alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance_6,p:{x:60.1,y:104.5,alpha:1}},{t:this.instance_7,p:{x:73.9,y:104.7,alpha:1}},{t:this.instance_3,p:{x:85.1,y:113.4,alpha:1}},{t:this.instance_4,p:{x:102,y:104.5,alpha:1}},{t:this.instance_10,p:{x:117.3,y:104.2,alpha:1}},{t:this.instance_2,p:{x:131.2,y:104.2,alpha:1}},{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{x:62.4,y:77.9,alpha:1}},{t:this.instance_11,p:{x:76,y:78,alpha:1}},{t:this.instance_8,p:{x:86.2,y:87.2,alpha:1}},{t:this.instance_9,p:{x:103.1,y:78.3,alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance_6,p:{x:60.1,y:104.5,alpha:1}},{t:this.instance_7,p:{x:73.9,y:104.7,alpha:1}},{t:this.instance_3,p:{x:85.1,y:113.4,alpha:1}},{t:this.instance_4,p:{x:102,y:104.5,alpha:1}},{t:this.instance_10,p:{x:117.3,y:104.2,alpha:1}},{t:this.instance_2,p:{x:131.2,y:104.2,alpha:1}},{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{x:62.4,y:77.9,alpha:1}},{t:this.instance_11,p:{x:76,y:78,alpha:1}},{t:this.instance_8,p:{x:86.2,y:87.2,alpha:1}},{t:this.instance_9,p:{x:103.1,y:78.3,alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance_6,p:{x:60.1,y:104.5,alpha:1}},{t:this.instance_7,p:{x:73.9,y:104.7,alpha:1}},{t:this.instance_3,p:{x:85.1,y:113.4,alpha:1}},{t:this.instance_4,p:{x:102,y:104.5,alpha:1}},{t:this.instance_10,p:{x:117.3,y:104.2,alpha:1}},{t:this.instance_2,p:{x:131.2,y:104.2,alpha:1}},{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{x:62.4,y:77.9,alpha:1}},{t:this.instance_11,p:{x:76,y:78,alpha:1}},{t:this.instance_8,p:{x:86.2,y:87.2,alpha:1}},{t:this.instance_9,p:{x:103.1,y:78.3,alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance_6,p:{x:60.1,y:104.5,alpha:1}},{t:this.instance_7,p:{x:73.9,y:104.7,alpha:1}},{t:this.instance_3,p:{x:85.1,y:113.4,alpha:1}},{t:this.instance_4,p:{x:102,y:104.5,alpha:1}},{t:this.instance_10,p:{x:117.3,y:104.2,alpha:1}},{t:this.instance_2,p:{x:131.2,y:104.2,alpha:1}},{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{x:62.4,y:77.9,alpha:1}},{t:this.instance_11,p:{x:76,y:78,alpha:1}},{t:this.instance_8,p:{x:86.2,y:87.2,alpha:1}},{t:this.instance_9,p:{x:103.1,y:78.3,alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance_6,p:{x:60.1,y:104.5,alpha:1}},{t:this.instance_7,p:{x:73.9,y:104.7,alpha:1}},{t:this.instance_3,p:{x:85.1,y:113.4,alpha:1}},{t:this.instance_4,p:{x:102,y:104.5,alpha:1}},{t:this.instance_10,p:{x:117.3,y:104.2,alpha:1}},{t:this.instance_2,p:{x:131.2,y:104.2,alpha:1}},{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{x:62.4,y:77.9,alpha:1}},{t:this.instance_11,p:{x:76,y:78,alpha:1}},{t:this.instance_8,p:{x:86.2,y:87.2,alpha:1}},{t:this.instance_9,p:{x:103.1,y:78.3,alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance_6,p:{x:60.1,y:104.5,alpha:1}},{t:this.instance_7,p:{x:73.9,y:104.7,alpha:1}},{t:this.instance_3,p:{x:85.1,y:113.4,alpha:1}},{t:this.instance_4,p:{x:102,y:104.5,alpha:1}},{t:this.instance_10,p:{x:117.3,y:104.2,alpha:1}},{t:this.instance_2,p:{x:131.2,y:104.2,alpha:1}},{t:this.instance},{t:this.instance_12,p:{x:43.3,alpha:1}}]},1).to({state:[{t:this.instance_1,p:{x:62.4,y:77.9,alpha:1}},{t:this.instance_11,p:{x:76,y:78,alpha:1}},{t:this.instance_8,p:{x:86.2,y:87.2,alpha:1}},{t:this.instance_13,p:{alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance_6,p:{x:60.1,y:104.5,alpha:1}},{t:this.instance_7,p:{x:73.9,y:104.7,alpha:1}},{t:this.instance_3,p:{x:85.1,y:113.4,alpha:1}},{t:this.instance_9,p:{x:102,y:104.5,alpha:1}},{t:this.instance_10,p:{x:117.3,y:104.2,alpha:1}},{t:this.instance_2,p:{x:131.2,y:104.2,alpha:1}},{t:this.instance},{t:this.instance_12,p:{x:43.3,alpha:1}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:1}}]},1).to({state:[{t:this.instance_1,p:{x:62.4,y:77.9,alpha:1}},{t:this.instance_11,p:{x:76,y:78,alpha:1}},{t:this.instance_8,p:{x:86.2,y:87.2,alpha:1}},{t:this.instance_13,p:{alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance_6,p:{x:60.1,y:104.5,alpha:1}},{t:this.instance_14,p:{alpha:1}},{t:this.instance_3,p:{x:85.1,y:113.4,alpha:1}},{t:this.instance_9,p:{x:102,y:104.5,alpha:1}},{t:this.instance_10,p:{x:117.3,y:104.2,alpha:1}},{t:this.instance_2,p:{x:131.2,y:104.2,alpha:1}},{t:this.instance},{t:this.instance_12,p:{x:43.3,alpha:1}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:1}},{t:this.instance_7,p:{x:78,y:132.8,alpha:1}}]},1).to({state:[{t:this.instance_1,p:{x:62.4,y:77.9,alpha:1}},{t:this.instance_11,p:{x:76,y:78,alpha:1}},{t:this.instance_15,p:{x:86.2,y:87.2,alpha:1}},{t:this.instance_13,p:{alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance_6,p:{x:60.1,y:104.5,alpha:1}},{t:this.instance_14,p:{alpha:1}},{t:this.instance_8,p:{x:85.1,y:113.4,alpha:1}},{t:this.instance_9,p:{x:102,y:104.5,alpha:1}},{t:this.instance_10,p:{x:117.3,y:104.2,alpha:1}},{t:this.instance_2,p:{x:131.2,y:104.2,alpha:1}},{t:this.instance},{t:this.instance_12,p:{x:43.3,alpha:1}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:1}},{t:this.instance_7,p:{x:78,y:132.8,alpha:1}},{t:this.instance_3,p:{x:89.2,y:141.5,alpha:1}}]},1).to({state:[{t:this.instance_1,p:{x:62.4,y:77.9,alpha:1}},{t:this.instance_11,p:{x:76,y:78,alpha:1}},{t:this.instance_15,p:{x:86.2,y:87.2,alpha:1}},{t:this.instance_13,p:{alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance_6,p:{x:60.1,y:104.5,alpha:1}},{t:this.instance_14,p:{alpha:1}},{t:this.instance_8,p:{x:85.1,y:113.4,alpha:1}},{t:this.instance_9,p:{x:102,y:104.5,alpha:1}},{t:this.instance_10,p:{x:117.3,y:104.2,alpha:1}},{t:this.instance_2,p:{x:131.2,y:104.2,alpha:1}},{t:this.instance},{t:this.instance_12,p:{x:43.3,alpha:1}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:1}},{t:this.instance_7,p:{x:78,y:132.8,alpha:1}},{t:this.instance_3,p:{x:89.2,y:141.5,alpha:1}}]},1).to({state:[{t:this.instance_1,p:{x:62.4,y:77.9,alpha:1}},{t:this.instance_11,p:{x:76,y:78,alpha:1}},{t:this.instance_15,p:{x:86.2,y:87.2,alpha:1}},{t:this.instance_13,p:{alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance_6,p:{x:60.1,y:104.5,alpha:1}},{t:this.instance_14,p:{alpha:1}},{t:this.instance_8,p:{x:85.1,y:113.4,alpha:1}},{t:this.instance_9,p:{x:102,y:104.5,alpha:1}},{t:this.instance_10,p:{x:117.3,y:104.2,alpha:1}},{t:this.instance_2,p:{x:131.2,y:104.2,alpha:1}},{t:this.instance},{t:this.instance_16,p:{alpha:1}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:1}},{t:this.instance_7,p:{x:78,y:132.8,alpha:1}},{t:this.instance_3,p:{x:89.2,y:141.5,alpha:1}},{t:this.instance_12,p:{x:110.2,alpha:1}}]},1).to({state:[{t:this.instance_1,p:{x:62.4,y:77.9,alpha:1}},{t:this.instance_17,p:{x:76,y:78,alpha:1}},{t:this.instance_15,p:{x:86.2,y:87.2,alpha:1}},{t:this.instance_13,p:{alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance_6,p:{x:60.1,y:104.5,alpha:1}},{t:this.instance_14,p:{alpha:1}},{t:this.instance_8,p:{x:85.1,y:113.4,alpha:1}},{t:this.instance_9,p:{x:102,y:104.5,alpha:1}},{t:this.instance_10,p:{x:117.3,y:104.2,alpha:1}},{t:this.instance_11,p:{x:131.2,y:104.2,alpha:1}},{t:this.instance},{t:this.instance_16,p:{alpha:1}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:1}},{t:this.instance_7,p:{x:78,y:132.8,alpha:1}},{t:this.instance_3,p:{x:89.2,y:141.5,alpha:1}},{t:this.instance_12,p:{x:110.2,alpha:1}},{t:this.instance_2,p:{x:128.3,y:132.3,alpha:1}}]},1).to({state:[{t:this.instance_1,p:{x:62.4,y:77.9,alpha:1}},{t:this.instance_17,p:{x:76,y:78,alpha:1}},{t:this.instance_15,p:{x:86.2,y:87.2,alpha:1}},{t:this.instance_13,p:{alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance_6,p:{x:60.1,y:104.5,alpha:1}},{t:this.instance_14,p:{alpha:1}},{t:this.instance_8,p:{x:85.1,y:113.4,alpha:1}},{t:this.instance_9,p:{x:102,y:104.5,alpha:1}},{t:this.instance_18,p:{alpha:1}},{t:this.instance_11,p:{x:131.2,y:104.2,alpha:1}},{t:this.instance},{t:this.instance_16,p:{alpha:1}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:1}},{t:this.instance_7,p:{x:78,y:132.8,alpha:1}},{t:this.instance_3,p:{x:89.2,y:141.5,alpha:1}},{t:this.instance_12,p:{x:110.2,alpha:1}},{t:this.instance_2,p:{x:128.3,y:132.3,alpha:1}},{t:this.instance_10,p:{x:142,y:132.3,alpha:1}}]},1).to({state:[{t:this.instance_1,p:{x:62.4,y:77.9,alpha:1}},{t:this.instance_19,p:{x:76,y:78,alpha:1}},{t:this.instance_15,p:{x:86.2,y:87.2,alpha:1}},{t:this.instance_13,p:{alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance_6,p:{x:60.1,y:104.5,alpha:1}},{t:this.instance_14,p:{alpha:1}},{t:this.instance_8,p:{x:85.1,y:113.4,alpha:1}},{t:this.instance_9,p:{x:102,y:104.5,alpha:1}},{t:this.instance_18,p:{alpha:1}},{t:this.instance_17,p:{x:131.2,y:104.2,alpha:1}},{t:this.instance},{t:this.instance_16,p:{alpha:1}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:1}},{t:this.instance_7,p:{x:78,y:132.8,alpha:1}},{t:this.instance_3,p:{x:89.2,y:141.5,alpha:1}},{t:this.instance_12,p:{x:110.2,alpha:1}},{t:this.instance_11,p:{x:128.3,y:132.3,alpha:1}},{t:this.instance_10,p:{x:142,y:132.3,alpha:1}},{t:this.instance_2,p:{x:155.9,y:132.3,alpha:1}}]},1).to({state:[{t:this.instance_1,p:{x:62.4,y:77.9,alpha:1}},{t:this.instance_19,p:{x:76,y:78,alpha:1}},{t:this.instance_15,p:{x:86.2,y:87.2,alpha:1}},{t:this.instance_13,p:{alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance_6,p:{x:60.1,y:104.5,alpha:1}},{t:this.instance_14,p:{alpha:1}},{t:this.instance_8,p:{x:85.1,y:113.4,alpha:1}},{t:this.instance_9,p:{x:102,y:104.5,alpha:1}},{t:this.instance_18,p:{alpha:1}},{t:this.instance_17,p:{x:131.2,y:104.2,alpha:1}},{t:this.instance},{t:this.instance_16,p:{alpha:1}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:1}},{t:this.instance_7,p:{x:78,y:132.8,alpha:1}},{t:this.instance_3,p:{x:89.2,y:141.5,alpha:1}},{t:this.instance_12,p:{x:110.2,alpha:1}},{t:this.instance_11,p:{x:128.3,y:132.3,alpha:1}},{t:this.instance_10,p:{x:142,y:132.3,alpha:1}},{t:this.instance_2,p:{x:155.9,y:132.3,alpha:1}}]},1).to({state:[{t:this.instance_1,p:{x:62.4,y:77.9,alpha:1}},{t:this.instance_19,p:{x:76,y:78,alpha:1}},{t:this.instance_15,p:{x:86.2,y:87.2,alpha:1}},{t:this.instance_13,p:{alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance_6,p:{x:60.1,y:104.5,alpha:1}},{t:this.instance_14,p:{alpha:1}},{t:this.instance_8,p:{x:85.1,y:113.4,alpha:1}},{t:this.instance_9,p:{x:102,y:104.5,alpha:1}},{t:this.instance_18,p:{alpha:1}},{t:this.instance_17,p:{x:131.2,y:104.2,alpha:1}},{t:this.instance},{t:this.instance_16,p:{alpha:1}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:1}},{t:this.instance_7,p:{x:78,y:132.8,alpha:1}},{t:this.instance_3,p:{x:89.2,y:141.5,alpha:1}},{t:this.instance_12,p:{x:110.2,alpha:1}},{t:this.instance_11,p:{x:128.3,y:132.3,alpha:1}},{t:this.instance_10,p:{x:142,y:132.3,alpha:1}},{t:this.instance_2,p:{x:155.9,y:132.3,alpha:1}}]},1).to({state:[{t:this.instance_1,p:{x:62.4,y:77.9,alpha:1}},{t:this.instance_19,p:{x:76,y:78,alpha:1}},{t:this.instance_15,p:{x:86.2,y:87.2,alpha:1}},{t:this.instance_13,p:{alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance_6,p:{x:60.1,y:104.5,alpha:1}},{t:this.instance_14,p:{alpha:1}},{t:this.instance_8,p:{x:85.1,y:113.4,alpha:1}},{t:this.instance_9,p:{x:102,y:104.5,alpha:1}},{t:this.instance_18,p:{alpha:1}},{t:this.instance_17,p:{x:131.2,y:104.2,alpha:1}},{t:this.instance},{t:this.instance_16,p:{alpha:1}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:1}},{t:this.instance_7,p:{x:78,y:132.8,alpha:1}},{t:this.instance_3,p:{x:89.2,y:141.5,alpha:1}},{t:this.instance_12,p:{x:110.2,alpha:1}},{t:this.instance_11,p:{x:128.3,y:132.3,alpha:1}},{t:this.instance_10,p:{x:142,y:132.3,alpha:1}},{t:this.instance_2,p:{x:155.9,y:132.3,alpha:1}}]},1).to({state:[{t:this.instance_1,p:{x:62.4,y:77.9,alpha:1}},{t:this.instance_19,p:{x:76,y:78,alpha:1}},{t:this.instance_15,p:{x:86.2,y:87.2,alpha:1}},{t:this.instance_13,p:{alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance_6,p:{x:60.1,y:104.5,alpha:1}},{t:this.instance_14,p:{alpha:1}},{t:this.instance_8,p:{x:85.1,y:113.4,alpha:1}},{t:this.instance_9,p:{x:102,y:104.5,alpha:1}},{t:this.instance_18,p:{alpha:1}},{t:this.instance_17,p:{x:131.2,y:104.2,alpha:1}},{t:this.instance},{t:this.instance_16,p:{alpha:1}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:1}},{t:this.instance_7,p:{x:78,y:132.8,alpha:1}},{t:this.instance_3,p:{x:89.2,y:141.5,alpha:1}},{t:this.instance_12,p:{x:110.2,alpha:1}},{t:this.instance_11,p:{x:128.3,y:132.3,alpha:1}},{t:this.instance_10,p:{x:142,y:132.3,alpha:1}},{t:this.instance_2,p:{x:155.9,y:132.3,alpha:1}}]},1).to({state:[{t:this.instance_1,p:{x:62.4,y:77.9,alpha:1}},{t:this.instance_19,p:{x:76,y:78,alpha:1}},{t:this.instance_15,p:{x:86.2,y:87.2,alpha:1}},{t:this.instance_13,p:{alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance_6,p:{x:60.1,y:104.5,alpha:1}},{t:this.instance_14,p:{alpha:1}},{t:this.instance_8,p:{x:85.1,y:113.4,alpha:1}},{t:this.instance_9,p:{x:102,y:104.5,alpha:1}},{t:this.instance_18,p:{alpha:1}},{t:this.instance_17,p:{x:131.2,y:104.2,alpha:1}},{t:this.instance},{t:this.instance_16,p:{alpha:1}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:1}},{t:this.instance_7,p:{x:78,y:132.8,alpha:1}},{t:this.instance_3,p:{x:89.2,y:141.5,alpha:1}},{t:this.instance_12,p:{x:110.2,alpha:1}},{t:this.instance_11,p:{x:128.3,y:132.3,alpha:1}},{t:this.instance_10,p:{x:142,y:132.3,alpha:1}},{t:this.instance_2,p:{x:155.9,y:132.3,alpha:1}}]},1).to({state:[{t:this.instance_1,p:{x:62.4,y:77.9,alpha:1}},{t:this.instance_19,p:{x:76,y:78,alpha:1}},{t:this.instance_15,p:{x:86.2,y:87.2,alpha:1}},{t:this.instance_13,p:{alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance_6,p:{x:60.1,y:104.5,alpha:1}},{t:this.instance_14,p:{alpha:1}},{t:this.instance_8,p:{x:85.1,y:113.4,alpha:1}},{t:this.instance_9,p:{x:102,y:104.5,alpha:1}},{t:this.instance_18,p:{alpha:1}},{t:this.instance_17,p:{x:131.2,y:104.2,alpha:1}},{t:this.instance_16,p:{alpha:1}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:1}},{t:this.instance_7,p:{x:78,y:132.8,alpha:1}},{t:this.instance_3,p:{x:89.2,y:141.5,alpha:1}},{t:this.instance_12,p:{x:110.2,alpha:1}},{t:this.instance_11,p:{x:128.3,y:132.3,alpha:1}},{t:this.instance_10,p:{x:142,y:132.3,alpha:1}},{t:this.instance_2,p:{x:155.9,y:132.3,alpha:1}},{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{x:62.4,y:77.9,alpha:1}},{t:this.instance_19,p:{x:76,y:78,alpha:1}},{t:this.instance_15,p:{x:86.2,y:87.2,alpha:1}},{t:this.instance_13,p:{alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance_6,p:{x:60.1,y:104.5,alpha:1}},{t:this.instance_14,p:{alpha:1}},{t:this.instance_8,p:{x:85.1,y:113.4,alpha:1}},{t:this.instance_9,p:{x:102,y:104.5,alpha:1}},{t:this.instance_18,p:{alpha:1}},{t:this.instance_17,p:{x:131.2,y:104.2,alpha:1}},{t:this.instance_16,p:{alpha:1}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:1}},{t:this.instance_7,p:{x:78,y:132.8,alpha:1}},{t:this.instance_3,p:{x:89.2,y:141.5,alpha:1}},{t:this.instance_12,p:{x:110.2,alpha:1}},{t:this.instance_11,p:{x:128.3,y:132.3,alpha:1}},{t:this.instance_10,p:{x:142,y:132.3,alpha:1}},{t:this.instance_2,p:{x:155.9,y:132.3,alpha:1}},{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{x:62.4,y:77.9,alpha:1}},{t:this.instance_19,p:{x:76,y:78,alpha:1}},{t:this.instance_15,p:{x:86.2,y:87.2,alpha:1}},{t:this.instance_13,p:{alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance_6,p:{x:60.1,y:104.5,alpha:1}},{t:this.instance_14,p:{alpha:1}},{t:this.instance_8,p:{x:85.1,y:113.4,alpha:1}},{t:this.instance_9,p:{x:102,y:104.5,alpha:1}},{t:this.instance_18,p:{alpha:1}},{t:this.instance_17,p:{x:131.2,y:104.2,alpha:1}},{t:this.instance_16,p:{alpha:1}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:1}},{t:this.instance_7,p:{x:78,y:132.8,alpha:1}},{t:this.instance_3,p:{x:89.2,y:141.5,alpha:1}},{t:this.instance_12,p:{x:110.2,alpha:1}},{t:this.instance_11,p:{x:128.3,y:132.3,alpha:1}},{t:this.instance_10,p:{x:142,y:132.3,alpha:1}},{t:this.instance_2,p:{x:155.9,y:132.3,alpha:1}},{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{x:62.4,y:77.9,alpha:1}},{t:this.instance_19,p:{x:76,y:78,alpha:1}},{t:this.instance_15,p:{x:86.2,y:87.2,alpha:1}},{t:this.instance_13,p:{alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance_6,p:{x:60.1,y:104.5,alpha:1}},{t:this.instance_14,p:{alpha:1}},{t:this.instance_8,p:{x:85.1,y:113.4,alpha:1}},{t:this.instance_9,p:{x:102,y:104.5,alpha:1}},{t:this.instance_18,p:{alpha:1}},{t:this.instance_17,p:{x:131.2,y:104.2,alpha:1}},{t:this.instance_16,p:{alpha:1}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:1}},{t:this.instance_7,p:{x:78,y:132.8,alpha:1}},{t:this.instance_3,p:{x:89.2,y:141.5,alpha:1}},{t:this.instance_12,p:{x:110.2,alpha:1}},{t:this.instance_11,p:{x:128.3,y:132.3,alpha:1}},{t:this.instance_10,p:{x:142,y:132.3,alpha:1}},{t:this.instance_2,p:{x:155.9,y:132.3,alpha:1}},{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{x:62.4,y:77.9,alpha:1}},{t:this.instance_19,p:{x:76,y:78,alpha:1}},{t:this.instance_15,p:{x:86.2,y:87.2,alpha:1}},{t:this.instance_13,p:{alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance_6,p:{x:60.1,y:104.5,alpha:1}},{t:this.instance_14,p:{alpha:1}},{t:this.instance_8,p:{x:85.1,y:113.4,alpha:1}},{t:this.instance_9,p:{x:102,y:104.5,alpha:1}},{t:this.instance_18,p:{alpha:1}},{t:this.instance_17,p:{x:131.2,y:104.2,alpha:1}},{t:this.instance_16,p:{alpha:1}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:1}},{t:this.instance_7,p:{x:78,y:132.8,alpha:1}},{t:this.instance_3,p:{x:89.2,y:141.5,alpha:1}},{t:this.instance_12,p:{x:110.2,alpha:1}},{t:this.instance_11,p:{x:128.3,y:132.3,alpha:1}},{t:this.instance_10,p:{x:142,y:132.3,alpha:1}},{t:this.instance_2,p:{x:155.9,y:132.3,alpha:1}},{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{x:62.4,y:77.9,alpha:1}},{t:this.instance_19,p:{x:76,y:78,alpha:1}},{t:this.instance_15,p:{x:86.2,y:87.2,alpha:1}},{t:this.instance_13,p:{alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance_6,p:{x:60.1,y:104.5,alpha:1}},{t:this.instance_14,p:{alpha:1}},{t:this.instance_8,p:{x:85.1,y:113.4,alpha:1}},{t:this.instance_9,p:{x:102,y:104.5,alpha:1}},{t:this.instance_18,p:{alpha:1}},{t:this.instance_17,p:{x:131.2,y:104.2,alpha:1}},{t:this.instance_16,p:{alpha:1}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:1}},{t:this.instance_7,p:{x:78,y:132.8,alpha:1}},{t:this.instance_3,p:{x:89.2,y:141.5,alpha:1}},{t:this.instance_12,p:{x:110.2,alpha:1}},{t:this.instance_11,p:{x:128.3,y:132.3,alpha:1}},{t:this.instance_10,p:{x:142,y:132.3,alpha:1}},{t:this.instance_2,p:{x:155.9,y:132.3,alpha:1}},{t:this.instance}]},1).to({state:[{t:this.instance_20,p:{x:62.4,y:77.9,alpha:1}},{t:this.instance_19,p:{x:76,y:78,alpha:1}},{t:this.instance_15,p:{x:86.2,y:87.2,alpha:1}},{t:this.instance_13,p:{alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance_6,p:{x:60.1,y:104.5,alpha:1}},{t:this.instance_14,p:{alpha:1}},{t:this.instance_8,p:{x:85.1,y:113.4,alpha:1}},{t:this.instance_9,p:{x:102,y:104.5,alpha:1}},{t:this.instance_18,p:{alpha:1}},{t:this.instance_17,p:{x:131.2,y:104.2,alpha:1}},{t:this.instance_16,p:{alpha:1}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:1}},{t:this.instance_7,p:{x:78,y:132.8,alpha:1}},{t:this.instance_3,p:{x:89.2,y:141.5,alpha:1}},{t:this.instance_12,p:{x:110.2,alpha:1}},{t:this.instance_11,p:{x:128.3,y:132.3,alpha:1}},{t:this.instance_10,p:{x:142,y:132.3,alpha:1}},{t:this.instance_2,p:{x:155.9,y:132.3,alpha:1}},{t:this.instance},{t:this.instance_1,p:{x:32.2,y:162.9,alpha:1}}]},1).to({state:[{t:this.instance_20,p:{x:62.4,y:77.9,alpha:1}},{t:this.instance_21,p:{x:76,y:78,alpha:1}},{t:this.instance_15,p:{x:86.2,y:87.2,alpha:1}},{t:this.instance_13,p:{alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance_6,p:{x:60.1,y:104.5,alpha:1}},{t:this.instance_14,p:{alpha:1}},{t:this.instance_8,p:{x:85.1,y:113.4,alpha:1}},{t:this.instance_9,p:{x:102,y:104.5,alpha:1}},{t:this.instance_18,p:{alpha:1}},{t:this.instance_19,p:{x:131.2,y:104.2,alpha:1}},{t:this.instance_16,p:{alpha:1}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:1}},{t:this.instance_7,p:{x:78,y:132.8,alpha:1}},{t:this.instance_3,p:{x:89.2,y:141.5,alpha:1}},{t:this.instance_12,p:{x:110.2,alpha:1}},{t:this.instance_17,p:{x:128.3,y:132.3,alpha:1}},{t:this.instance_10,p:{x:142,y:132.3,alpha:1}},{t:this.instance_11,p:{x:155.9,y:132.3,alpha:1}},{t:this.instance},{t:this.instance_1,p:{x:32.2,y:162.9,alpha:1}},{t:this.instance_2,p:{x:45.9,y:163,alpha:1}}]},1).to({state:[{t:this.instance_20,p:{x:62.4,y:77.9,alpha:1}},{t:this.instance_21,p:{x:76,y:78,alpha:1}},{t:this.instance_15,p:{x:86.2,y:87.2,alpha:1}},{t:this.instance_13,p:{alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance_22,p:{alpha:1}},{t:this.instance_14,p:{alpha:1}},{t:this.instance_8,p:{x:85.1,y:113.4,alpha:1}},{t:this.instance_9,p:{x:102,y:104.5,alpha:1}},{t:this.instance_18,p:{alpha:1}},{t:this.instance_19,p:{x:131.2,y:104.2,alpha:1}},{t:this.instance_16,p:{alpha:1}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:1}},{t:this.instance_7,p:{x:78,y:132.8,alpha:1}},{t:this.instance_3,p:{x:89.2,y:141.5,alpha:1}},{t:this.instance_12,p:{x:110.2,alpha:1}},{t:this.instance_17,p:{x:128.3,y:132.3,alpha:1}},{t:this.instance_10,p:{x:142,y:132.3,alpha:1}},{t:this.instance_11,p:{x:155.9,y:132.3,alpha:1}},{t:this.instance},{t:this.instance_1,p:{x:32.2,y:162.9,alpha:1}},{t:this.instance_2,p:{x:45.9,y:163,alpha:1}},{t:this.instance_6,p:{x:58.5,y:163.2,alpha:1}}]},1).to({state:[{t:this.instance_20,p:{x:62.4,y:77.9,alpha:1}},{t:this.instance_21,p:{x:76,y:78,alpha:1}},{t:this.instance_15,p:{x:86.2,y:87.2,alpha:1}},{t:this.instance_13,p:{alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance_22,p:{alpha:1}},{t:this.instance_14,p:{alpha:1}},{t:this.instance_8,p:{x:85.1,y:113.4,alpha:1}},{t:this.instance_9,p:{x:102,y:104.5,alpha:1}},{t:this.instance_18,p:{alpha:1}},{t:this.instance_19,p:{x:131.2,y:104.2,alpha:1}},{t:this.instance_16,p:{alpha:1}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:1}},{t:this.instance_7,p:{x:78,y:132.8,alpha:1}},{t:this.instance_3,p:{x:89.2,y:141.5,alpha:1}},{t:this.instance_12,p:{x:110.2,alpha:1}},{t:this.instance_17,p:{x:128.3,y:132.3,alpha:1}},{t:this.instance_10,p:{x:142,y:132.3,alpha:1}},{t:this.instance_11,p:{x:155.9,y:132.3,alpha:1}},{t:this.instance},{t:this.instance_1,p:{x:32.2,y:162.9,alpha:1}},{t:this.instance_2,p:{x:45.9,y:163,alpha:1}},{t:this.instance_6,p:{x:58.5,y:163.2,alpha:1}},{t:this.instance_23,p:{x:73.4,alpha:1}}]},1).to({state:[{t:this.instance_20,p:{x:62.4,y:77.9,alpha:1}},{t:this.instance_21,p:{x:76,y:78,alpha:1}},{t:this.instance_15,p:{x:86.2,y:87.2,alpha:1}},{t:this.instance_13,p:{alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance_22,p:{alpha:1}},{t:this.instance_14,p:{alpha:1}},{t:this.instance_8,p:{x:85.1,y:113.4,alpha:1}},{t:this.instance_9,p:{x:102,y:104.5,alpha:1}},{t:this.instance_18,p:{alpha:1}},{t:this.instance_19,p:{x:131.2,y:104.2,alpha:1}},{t:this.instance_16,p:{alpha:1}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:1}},{t:this.instance_7,p:{x:78,y:132.8,alpha:1}},{t:this.instance_3,p:{x:89.2,y:141.5,alpha:1}},{t:this.instance_12,p:{x:110.2,alpha:1}},{t:this.instance_17,p:{x:128.3,y:132.3,alpha:1}},{t:this.instance_10,p:{x:142,y:132.3,alpha:1}},{t:this.instance_11,p:{x:155.9,y:132.3,alpha:1}},{t:this.instance},{t:this.instance_1,p:{x:32.2,y:162.9,alpha:1}},{t:this.instance_2,p:{x:45.9,y:163,alpha:1}},{t:this.instance_6,p:{x:58.5,y:163.2,alpha:1}},{t:this.instance_23,p:{x:73.4,alpha:1}},{t:this.instance_24,p:{alpha:1}}]},1).to({state:[{t:this.instance_20,p:{x:62.4,y:77.9,alpha:1}},{t:this.instance_21,p:{x:76,y:78,alpha:1}},{t:this.instance_25,p:{alpha:1}},{t:this.instance_13,p:{alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance_22,p:{alpha:1}},{t:this.instance_14,p:{alpha:1}},{t:this.instance_15,p:{x:85.1,y:113.4,alpha:1}},{t:this.instance_9,p:{x:102,y:104.5,alpha:1}},{t:this.instance_18,p:{alpha:1}},{t:this.instance_19,p:{x:131.2,y:104.2,alpha:1}},{t:this.instance_16,p:{alpha:1}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:1}},{t:this.instance_7,p:{x:78,y:132.8,alpha:1}},{t:this.instance_8,p:{x:89.2,y:141.5,alpha:1}},{t:this.instance_12,p:{x:110.2,alpha:1}},{t:this.instance_17,p:{x:128.3,y:132.3,alpha:1}},{t:this.instance_10,p:{x:142,y:132.3,alpha:1}},{t:this.instance_11,p:{x:155.9,y:132.3,alpha:1}},{t:this.instance},{t:this.instance_1,p:{x:32.2,y:162.9,alpha:1}},{t:this.instance_2,p:{x:45.9,y:163,alpha:1}},{t:this.instance_6,p:{x:58.5,y:163.2,alpha:1}},{t:this.instance_23,p:{x:73.4,alpha:1}},{t:this.instance_24,p:{alpha:1}},{t:this.instance_3,p:{x:100.6,y:172.1,alpha:1}}]},1).to({state:[{t:this.instance_20,p:{x:62.4,y:77.9,alpha:1}},{t:this.instance_21,p:{x:76,y:78,alpha:1}},{t:this.instance_25,p:{alpha:1}},{t:this.instance_13,p:{alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance_22,p:{alpha:1}},{t:this.instance_14,p:{alpha:1}},{t:this.instance_15,p:{x:85.1,y:113.4,alpha:1}},{t:this.instance_9,p:{x:102,y:104.5,alpha:1}},{t:this.instance_18,p:{alpha:1}},{t:this.instance_19,p:{x:131.2,y:104.2,alpha:1}},{t:this.instance_16,p:{alpha:1}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:1}},{t:this.instance_7,p:{x:78,y:132.8,alpha:1}},{t:this.instance_8,p:{x:89.2,y:141.5,alpha:1}},{t:this.instance_12,p:{x:110.2,alpha:1}},{t:this.instance_17,p:{x:128.3,y:132.3,alpha:1}},{t:this.instance_10,p:{x:142,y:132.3,alpha:1}},{t:this.instance_11,p:{x:155.9,y:132.3,alpha:1}},{t:this.instance},{t:this.instance_1,p:{x:32.2,y:162.9,alpha:1}},{t:this.instance_2,p:{x:45.9,y:163,alpha:1}},{t:this.instance_6,p:{x:58.5,y:163.2,alpha:1}},{t:this.instance_23,p:{x:73.4,alpha:1}},{t:this.instance_24,p:{alpha:1}},{t:this.instance_3,p:{x:100.6,y:172.1,alpha:1}}]},1).to({state:[{t:this.instance_26,p:{alpha:1}},{t:this.instance_21,p:{x:76,y:78,alpha:1}},{t:this.instance_25,p:{alpha:1}},{t:this.instance_13,p:{alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance_22,p:{alpha:1}},{t:this.instance_14,p:{alpha:1}},{t:this.instance_15,p:{x:85.1,y:113.4,alpha:1}},{t:this.instance_9,p:{x:102,y:104.5,alpha:1}},{t:this.instance_18,p:{alpha:1}},{t:this.instance_19,p:{x:131.2,y:104.2,alpha:1}},{t:this.instance_16,p:{alpha:1}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:1}},{t:this.instance_7,p:{x:78,y:132.8,alpha:1}},{t:this.instance_8,p:{x:89.2,y:141.5,alpha:1}},{t:this.instance_12,p:{x:110.2,alpha:1}},{t:this.instance_17,p:{x:128.3,y:132.3,alpha:1}},{t:this.instance_10,p:{x:142,y:132.3,alpha:1}},{t:this.instance_11,p:{x:155.9,y:132.3,alpha:1}},{t:this.instance},{t:this.instance_20,p:{x:32.2,y:162.9,alpha:1}},{t:this.instance_2,p:{x:45.9,y:163,alpha:1}},{t:this.instance_6,p:{x:58.5,y:163.2,alpha:1}},{t:this.instance_23,p:{x:73.4,alpha:1}},{t:this.instance_24,p:{alpha:1}},{t:this.instance_3,p:{x:100.6,y:172.1,alpha:1}},{t:this.instance_1,p:{x:117.1,y:162.9,alpha:1}}]},1).to({state:[{t:this.instance_26,p:{alpha:1}},{t:this.instance_27,p:{x:76,y:78,alpha:1}},{t:this.instance_25,p:{alpha:1}},{t:this.instance_13,p:{alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance_22,p:{alpha:1}},{t:this.instance_14,p:{alpha:1}},{t:this.instance_15,p:{x:85.1,y:113.4,alpha:1}},{t:this.instance_9,p:{x:102,y:104.5,alpha:1}},{t:this.instance_18,p:{alpha:1}},{t:this.instance_21,p:{x:131.2,y:104.2,alpha:1}},{t:this.instance_16,p:{alpha:1}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:1}},{t:this.instance_7,p:{x:78,y:132.8,alpha:1}},{t:this.instance_8,p:{x:89.2,y:141.5,alpha:1}},{t:this.instance_12,p:{x:110.2,alpha:1}},{t:this.instance_19,p:{x:128.3,y:132.3,alpha:1}},{t:this.instance_10,p:{x:142,y:132.3,alpha:1}},{t:this.instance_17,p:{x:155.9,y:132.3,alpha:1}},{t:this.instance},{t:this.instance_20,p:{x:32.2,y:162.9,alpha:1}},{t:this.instance_11,p:{x:45.9,y:163,alpha:1}},{t:this.instance_6,p:{x:58.5,y:163.2,alpha:1}},{t:this.instance_23,p:{x:73.4,alpha:1}},{t:this.instance_24,p:{alpha:1}},{t:this.instance_3,p:{x:100.6,y:172.1,alpha:1}},{t:this.instance_1,p:{x:117.1,y:162.9,alpha:1}},{t:this.instance_2,p:{x:130.7,y:163,alpha:1}}]},1).to({state:[{t:this.instance_26,p:{alpha:1}},{t:this.instance_28,p:{alpha:1}},{t:this.instance_25,p:{alpha:1}},{t:this.instance_13,p:{alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance_22,p:{alpha:1}},{t:this.instance_14,p:{alpha:1}},{t:this.instance_15,p:{x:85.1,y:113.4,alpha:1}},{t:this.instance_9,p:{x:102,y:104.5,alpha:1}},{t:this.instance_18,p:{alpha:1}},{t:this.instance_27,p:{x:131.2,y:104.2,alpha:1}},{t:this.instance_16,p:{alpha:1}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:1}},{t:this.instance_7,p:{x:78,y:132.8,alpha:1}},{t:this.instance_8,p:{x:89.2,y:141.5,alpha:1}},{t:this.instance_12,p:{x:110.2,alpha:1}},{t:this.instance_21,p:{x:128.3,y:132.3,alpha:1}},{t:this.instance_10,p:{x:142,y:132.3,alpha:1}},{t:this.instance_19,p:{x:155.9,y:132.3,alpha:1}},{t:this.instance},{t:this.instance_20,p:{x:32.2,y:162.9,alpha:1}},{t:this.instance_17,p:{x:45.9,y:163,alpha:1}},{t:this.instance_6,p:{x:58.5,y:163.2,alpha:1}},{t:this.instance_23,p:{x:73.4,alpha:1}},{t:this.instance_24,p:{alpha:1}},{t:this.instance_3,p:{x:100.6,y:172.1,alpha:1}},{t:this.instance_1,p:{x:117.1,y:162.9,alpha:1}},{t:this.instance_11,p:{x:130.7,y:163,alpha:1}},{t:this.instance_2,p:{x:144.5,y:163,alpha:1}}]},1).to({state:[{t:this.instance_26,p:{alpha:1}},{t:this.instance_28,p:{alpha:1}},{t:this.instance_25,p:{alpha:1}},{t:this.instance_13,p:{alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance_22,p:{alpha:1}},{t:this.instance_14,p:{alpha:1}},{t:this.instance_15,p:{x:85.1,y:113.4,alpha:1}},{t:this.instance_9,p:{x:102,y:104.5,alpha:1}},{t:this.instance_18,p:{alpha:1}},{t:this.instance_27,p:{x:131.2,y:104.2,alpha:1}},{t:this.instance_16,p:{alpha:1}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:1}},{t:this.instance_7,p:{x:78,y:132.8,alpha:1}},{t:this.instance_8,p:{x:89.2,y:141.5,alpha:1}},{t:this.instance_12,p:{x:110.2,alpha:1}},{t:this.instance_21,p:{x:128.3,y:132.3,alpha:1}},{t:this.instance_10,p:{x:142,y:132.3,alpha:1}},{t:this.instance_19,p:{x:155.9,y:132.3,alpha:1}},{t:this.instance},{t:this.instance_20,p:{x:32.2,y:162.9,alpha:1}},{t:this.instance_17,p:{x:45.9,y:163,alpha:1}},{t:this.instance_6,p:{x:58.5,y:163.2,alpha:1}},{t:this.instance_29,p:{alpha:1}},{t:this.instance_24,p:{alpha:1}},{t:this.instance_3,p:{x:100.6,y:172.1,alpha:1}},{t:this.instance_1,p:{x:117.1,y:162.9,alpha:1}},{t:this.instance_11,p:{x:130.7,y:163,alpha:1}},{t:this.instance_2,p:{x:144.5,y:163,alpha:1}},{t:this.instance_23,p:{x:159.9,alpha:1}}]},1).to({state:[{t:this.instance_26,p:{alpha:1}},{t:this.instance_28,p:{alpha:1}},{t:this.instance_25,p:{alpha:1}},{t:this.instance_13,p:{alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance_22,p:{alpha:1}},{t:this.instance_14,p:{alpha:1}},{t:this.instance_15,p:{x:85.1,y:113.4,alpha:1}},{t:this.instance_9,p:{x:102,y:104.5,alpha:1}},{t:this.instance_18,p:{alpha:1}},{t:this.instance_27,p:{x:131.2,y:104.2,alpha:1}},{t:this.instance_16,p:{alpha:1}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:1}},{t:this.instance_7,p:{x:78,y:132.8,alpha:1}},{t:this.instance_8,p:{x:89.2,y:141.5,alpha:1}},{t:this.instance_12,p:{x:110.2,alpha:1}},{t:this.instance_21,p:{x:128.3,y:132.3,alpha:1}},{t:this.instance_10,p:{x:142,y:132.3,alpha:1}},{t:this.instance_19,p:{x:155.9,y:132.3,alpha:1}},{t:this.instance},{t:this.instance_20,p:{x:32.2,y:162.9,alpha:1}},{t:this.instance_17,p:{x:45.9,y:163,alpha:1}},{t:this.instance_6,p:{x:58.5,y:163.2,alpha:1}},{t:this.instance_29,p:{alpha:1}},{t:this.instance_24,p:{alpha:1}},{t:this.instance_3,p:{x:100.6,y:172.1,alpha:1}},{t:this.instance_1,p:{x:117.1,y:162.9,alpha:1}},{t:this.instance_11,p:{x:130.7,y:163,alpha:1}},{t:this.instance_2,p:{x:144.5,y:163,alpha:1}},{t:this.instance_23,p:{x:159.9,alpha:1}}]},1).to({state:[{t:this.instance_26,p:{alpha:1}},{t:this.instance_28,p:{alpha:1}},{t:this.instance_25,p:{alpha:1}},{t:this.instance_13,p:{alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance_22,p:{alpha:1}},{t:this.instance_14,p:{alpha:1}},{t:this.instance_15,p:{x:85.1,y:113.4,alpha:1}},{t:this.instance_9,p:{x:102,y:104.5,alpha:1}},{t:this.instance_18,p:{alpha:1}},{t:this.instance_27,p:{x:131.2,y:104.2,alpha:1}},{t:this.instance_16,p:{alpha:1}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:1}},{t:this.instance_7,p:{x:78,y:132.8,alpha:1}},{t:this.instance_8,p:{x:89.2,y:141.5,alpha:1}},{t:this.instance_12,p:{x:110.2,alpha:1}},{t:this.instance_21,p:{x:128.3,y:132.3,alpha:1}},{t:this.instance_10,p:{x:142,y:132.3,alpha:1}},{t:this.instance_19,p:{x:155.9,y:132.3,alpha:1}},{t:this.instance},{t:this.instance_20,p:{x:32.2,y:162.9,alpha:1}},{t:this.instance_17,p:{x:45.9,y:163,alpha:1}},{t:this.instance_6,p:{x:58.5,y:163.2,alpha:1}},{t:this.instance_29,p:{alpha:1}},{t:this.instance_24,p:{alpha:1}},{t:this.instance_3,p:{x:100.6,y:172.1,alpha:1}},{t:this.instance_1,p:{x:117.1,y:162.9,alpha:1}},{t:this.instance_11,p:{x:130.7,y:163,alpha:1}},{t:this.instance_2,p:{x:144.5,y:163,alpha:1}},{t:this.instance_23,p:{x:159.9,alpha:1}}]},1).to({state:[{t:this.instance_26,p:{alpha:1}},{t:this.instance_28,p:{alpha:1}},{t:this.instance_25,p:{alpha:1}},{t:this.instance_13,p:{alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance_22,p:{alpha:1}},{t:this.instance_14,p:{alpha:1}},{t:this.instance_15,p:{x:85.1,y:113.4,alpha:1}},{t:this.instance_9,p:{x:102,y:104.5,alpha:1}},{t:this.instance_18,p:{alpha:1}},{t:this.instance_27,p:{x:131.2,y:104.2,alpha:1}},{t:this.instance_16,p:{alpha:1}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:1}},{t:this.instance_7,p:{x:78,y:132.8,alpha:1}},{t:this.instance_8,p:{x:89.2,y:141.5,alpha:1}},{t:this.instance_12,p:{x:110.2,alpha:1}},{t:this.instance_21,p:{x:128.3,y:132.3,alpha:1}},{t:this.instance_10,p:{x:142,y:132.3,alpha:1}},{t:this.instance_19,p:{x:155.9,y:132.3,alpha:1}},{t:this.instance},{t:this.instance_20,p:{x:32.2,y:162.9,alpha:1}},{t:this.instance_17,p:{x:45.9,y:163,alpha:1}},{t:this.instance_6,p:{x:58.5,y:163.2,alpha:1}},{t:this.instance_29,p:{alpha:1}},{t:this.instance_24,p:{alpha:1}},{t:this.instance_3,p:{x:100.6,y:172.1,alpha:1}},{t:this.instance_1,p:{x:117.1,y:162.9,alpha:1}},{t:this.instance_11,p:{x:130.7,y:163,alpha:1}},{t:this.instance_2,p:{x:144.5,y:163,alpha:1}},{t:this.instance_23,p:{x:159.9,alpha:1}}]},1).to({state:[{t:this.instance_26,p:{alpha:1}},{t:this.instance_28,p:{alpha:1}},{t:this.instance_25,p:{alpha:1}},{t:this.instance_13,p:{alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance_22,p:{alpha:1}},{t:this.instance_14,p:{alpha:1}},{t:this.instance_15,p:{x:85.1,y:113.4,alpha:1}},{t:this.instance_9,p:{x:102,y:104.5,alpha:1}},{t:this.instance_18,p:{alpha:1}},{t:this.instance_27,p:{x:131.2,y:104.2,alpha:1}},{t:this.instance_16,p:{alpha:1}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:1}},{t:this.instance_7,p:{x:78,y:132.8,alpha:1}},{t:this.instance_8,p:{x:89.2,y:141.5,alpha:1}},{t:this.instance_12,p:{x:110.2,alpha:1}},{t:this.instance_21,p:{x:128.3,y:132.3,alpha:1}},{t:this.instance_10,p:{x:142,y:132.3,alpha:1}},{t:this.instance_19,p:{x:155.9,y:132.3,alpha:1}},{t:this.instance},{t:this.instance_20,p:{x:32.2,y:162.9,alpha:1}},{t:this.instance_17,p:{x:45.9,y:163,alpha:1}},{t:this.instance_6,p:{x:58.5,y:163.2,alpha:1}},{t:this.instance_29,p:{alpha:1}},{t:this.instance_24,p:{alpha:1}},{t:this.instance_3,p:{x:100.6,y:172.1,alpha:1}},{t:this.instance_1,p:{x:117.1,y:162.9,alpha:1}},{t:this.instance_11,p:{x:130.7,y:163,alpha:1}},{t:this.instance_2,p:{x:144.5,y:163,alpha:1}},{t:this.instance_23,p:{x:159.9,alpha:1}}]},1).to({state:[{t:this.instance_26,p:{alpha:1}},{t:this.instance_28,p:{alpha:1}},{t:this.instance_25,p:{alpha:1}},{t:this.instance_13,p:{alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance_22,p:{alpha:1}},{t:this.instance_14,p:{alpha:1}},{t:this.instance_15,p:{x:85.1,y:113.4,alpha:1}},{t:this.instance_9,p:{x:102,y:104.5,alpha:1}},{t:this.instance_18,p:{alpha:1}},{t:this.instance_27,p:{x:131.2,y:104.2,alpha:1}},{t:this.instance_16,p:{alpha:1}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:1}},{t:this.instance_7,p:{x:78,y:132.8,alpha:1}},{t:this.instance_8,p:{x:89.2,y:141.5,alpha:1}},{t:this.instance_12,p:{x:110.2,alpha:1}},{t:this.instance_21,p:{x:128.3,y:132.3,alpha:1}},{t:this.instance_10,p:{x:142,y:132.3,alpha:1}},{t:this.instance_19,p:{x:155.9,y:132.3,alpha:1}},{t:this.instance},{t:this.instance_20,p:{x:32.2,y:162.9,alpha:1}},{t:this.instance_17,p:{x:45.9,y:163,alpha:1}},{t:this.instance_6,p:{x:58.5,y:163.2,alpha:1}},{t:this.instance_29,p:{alpha:1}},{t:this.instance_24,p:{alpha:1}},{t:this.instance_3,p:{x:100.6,y:172.1,alpha:1}},{t:this.instance_1,p:{x:117.1,y:162.9,alpha:1}},{t:this.instance_11,p:{x:130.7,y:163,alpha:1}},{t:this.instance_2,p:{x:144.5,y:163,alpha:1}},{t:this.instance_23,p:{x:159.9,alpha:1}}]},1).to({state:[{t:this.instance_26,p:{alpha:0.898}},{t:this.instance_28,p:{alpha:0.898}},{t:this.instance_25,p:{alpha:0.898}},{t:this.instance_13,p:{alpha:0.898}},{t:this.instance_5,p:{alpha:0.898}},{t:this.instance_22,p:{alpha:1}},{t:this.instance_14,p:{alpha:1}},{t:this.instance_15,p:{x:85.1,y:113.4,alpha:1}},{t:this.instance_9,p:{x:102,y:104.5,alpha:1}},{t:this.instance_18,p:{alpha:1}},{t:this.instance_27,p:{x:131.2,y:104.2,alpha:1}},{t:this.instance_16,p:{alpha:1}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:1}},{t:this.instance_7,p:{x:78,y:132.8,alpha:1}},{t:this.instance_8,p:{x:89.2,y:141.5,alpha:1}},{t:this.instance_12,p:{x:110.2,alpha:1}},{t:this.instance_21,p:{x:128.3,y:132.3,alpha:1}},{t:this.instance_10,p:{x:142,y:132.3,alpha:1}},{t:this.instance_19,p:{x:155.9,y:132.3,alpha:1}},{t:this.instance_20,p:{x:32.2,y:162.9,alpha:1}},{t:this.instance_17,p:{x:45.9,y:163,alpha:1}},{t:this.instance_6,p:{x:58.5,y:163.2,alpha:1}},{t:this.instance_29,p:{alpha:1}},{t:this.instance_24,p:{alpha:1}},{t:this.instance_3,p:{x:100.6,y:172.1,alpha:1}},{t:this.instance_1,p:{x:117.1,y:162.9,alpha:1}},{t:this.instance_11,p:{x:130.7,y:163,alpha:1}},{t:this.instance_2,p:{x:144.5,y:163,alpha:1}},{t:this.instance_23,p:{x:159.9,alpha:1}}]},1).to({state:[{t:this.instance_26,p:{alpha:0.801}},{t:this.instance_28,p:{alpha:0.801}},{t:this.instance_25,p:{alpha:0.801}},{t:this.instance_13,p:{alpha:0.801}},{t:this.instance_5,p:{alpha:0.801}},{t:this.instance_22,p:{alpha:1}},{t:this.instance_14,p:{alpha:1}},{t:this.instance_15,p:{x:85.1,y:113.4,alpha:1}},{t:this.instance_9,p:{x:102,y:104.5,alpha:1}},{t:this.instance_18,p:{alpha:1}},{t:this.instance_27,p:{x:131.2,y:104.2,alpha:1}},{t:this.instance_16,p:{alpha:1}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:1}},{t:this.instance_7,p:{x:78,y:132.8,alpha:1}},{t:this.instance_8,p:{x:89.2,y:141.5,alpha:1}},{t:this.instance_12,p:{x:110.2,alpha:1}},{t:this.instance_21,p:{x:128.3,y:132.3,alpha:1}},{t:this.instance_10,p:{x:142,y:132.3,alpha:1}},{t:this.instance_19,p:{x:155.9,y:132.3,alpha:1}},{t:this.instance_20,p:{x:32.2,y:162.9,alpha:1}},{t:this.instance_17,p:{x:45.9,y:163,alpha:1}},{t:this.instance_6,p:{x:58.5,y:163.2,alpha:1}},{t:this.instance_29,p:{alpha:1}},{t:this.instance_24,p:{alpha:1}},{t:this.instance_3,p:{x:100.6,y:172.1,alpha:1}},{t:this.instance_1,p:{x:117.1,y:162.9,alpha:1}},{t:this.instance_11,p:{x:130.7,y:163,alpha:1}},{t:this.instance_2,p:{x:144.5,y:163,alpha:1}},{t:this.instance_23,p:{x:159.9,alpha:1}}]},1).to({state:[{t:this.instance_26,p:{alpha:0.699}},{t:this.instance_28,p:{alpha:0.699}},{t:this.instance_25,p:{alpha:0.699}},{t:this.instance_13,p:{alpha:0.699}},{t:this.instance_5,p:{alpha:0.699}},{t:this.instance_22,p:{alpha:1}},{t:this.instance_14,p:{alpha:1}},{t:this.instance_15,p:{x:85.1,y:113.4,alpha:1}},{t:this.instance_9,p:{x:102,y:104.5,alpha:1}},{t:this.instance_18,p:{alpha:1}},{t:this.instance_27,p:{x:131.2,y:104.2,alpha:1}},{t:this.instance_16,p:{alpha:1}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:1}},{t:this.instance_7,p:{x:78,y:132.8,alpha:1}},{t:this.instance_8,p:{x:89.2,y:141.5,alpha:1}},{t:this.instance_12,p:{x:110.2,alpha:1}},{t:this.instance_21,p:{x:128.3,y:132.3,alpha:1}},{t:this.instance_10,p:{x:142,y:132.3,alpha:1}},{t:this.instance_19,p:{x:155.9,y:132.3,alpha:1}},{t:this.instance_20,p:{x:32.2,y:162.9,alpha:1}},{t:this.instance_17,p:{x:45.9,y:163,alpha:1}},{t:this.instance_6,p:{x:58.5,y:163.2,alpha:1}},{t:this.instance_29,p:{alpha:1}},{t:this.instance_24,p:{alpha:1}},{t:this.instance_3,p:{x:100.6,y:172.1,alpha:1}},{t:this.instance_1,p:{x:117.1,y:162.9,alpha:1}},{t:this.instance_11,p:{x:130.7,y:163,alpha:1}},{t:this.instance_2,p:{x:144.5,y:163,alpha:1}},{t:this.instance_23,p:{x:159.9,alpha:1}}]},1).to({state:[{t:this.instance_26,p:{alpha:0.602}},{t:this.instance_28,p:{alpha:0.602}},{t:this.instance_25,p:{alpha:0.602}},{t:this.instance_13,p:{alpha:0.602}},{t:this.instance_5,p:{alpha:0.602}},{t:this.instance_22,p:{alpha:0.898}},{t:this.instance_14,p:{alpha:0.898}},{t:this.instance_15,p:{x:85.1,y:113.4,alpha:0.898}},{t:this.instance_9,p:{x:102,y:104.5,alpha:0.898}},{t:this.instance_18,p:{alpha:0.898}},{t:this.instance_27,p:{x:131.2,y:104.2,alpha:0.898}},{t:this.instance_16,p:{alpha:1}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:1}},{t:this.instance_7,p:{x:78,y:132.8,alpha:1}},{t:this.instance_8,p:{x:89.2,y:141.5,alpha:1}},{t:this.instance_12,p:{x:110.2,alpha:1}},{t:this.instance_21,p:{x:128.3,y:132.3,alpha:1}},{t:this.instance_10,p:{x:142,y:132.3,alpha:1}},{t:this.instance_19,p:{x:155.9,y:132.3,alpha:1}},{t:this.instance_20,p:{x:32.2,y:162.9,alpha:1}},{t:this.instance_17,p:{x:45.9,y:163,alpha:1}},{t:this.instance_6,p:{x:58.5,y:163.2,alpha:1}},{t:this.instance_29,p:{alpha:1}},{t:this.instance_24,p:{alpha:1}},{t:this.instance_3,p:{x:100.6,y:172.1,alpha:1}},{t:this.instance_1,p:{x:117.1,y:162.9,alpha:1}},{t:this.instance_11,p:{x:130.7,y:163,alpha:1}},{t:this.instance_2,p:{x:144.5,y:163,alpha:1}},{t:this.instance_23,p:{x:159.9,alpha:1}}]},1).to({state:[{t:this.instance_26,p:{alpha:0.5}},{t:this.instance_28,p:{alpha:0.5}},{t:this.instance_25,p:{alpha:0.5}},{t:this.instance_13,p:{alpha:0.5}},{t:this.instance_5,p:{alpha:0.5}},{t:this.instance_22,p:{alpha:0.801}},{t:this.instance_14,p:{alpha:0.801}},{t:this.instance_15,p:{x:85.1,y:113.4,alpha:0.801}},{t:this.instance_9,p:{x:102,y:104.5,alpha:0.801}},{t:this.instance_18,p:{alpha:0.801}},{t:this.instance_27,p:{x:131.2,y:104.2,alpha:0.801}},{t:this.instance_16,p:{alpha:1}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:1}},{t:this.instance_7,p:{x:78,y:132.8,alpha:1}},{t:this.instance_8,p:{x:89.2,y:141.5,alpha:1}},{t:this.instance_12,p:{x:110.2,alpha:1}},{t:this.instance_21,p:{x:128.3,y:132.3,alpha:1}},{t:this.instance_10,p:{x:142,y:132.3,alpha:1}},{t:this.instance_19,p:{x:155.9,y:132.3,alpha:1}},{t:this.instance_20,p:{x:32.2,y:162.9,alpha:1}},{t:this.instance_17,p:{x:45.9,y:163,alpha:1}},{t:this.instance_6,p:{x:58.5,y:163.2,alpha:1}},{t:this.instance_29,p:{alpha:1}},{t:this.instance_24,p:{alpha:1}},{t:this.instance_3,p:{x:100.6,y:172.1,alpha:1}},{t:this.instance_1,p:{x:117.1,y:162.9,alpha:1}},{t:this.instance_11,p:{x:130.7,y:163,alpha:1}},{t:this.instance_2,p:{x:144.5,y:163,alpha:1}},{t:this.instance_23,p:{x:159.9,alpha:1}}]},1).to({state:[{t:this.instance_26,p:{alpha:0.398}},{t:this.instance_28,p:{alpha:0.398}},{t:this.instance_25,p:{alpha:0.398}},{t:this.instance_13,p:{alpha:0.398}},{t:this.instance_5,p:{alpha:0.398}},{t:this.instance_22,p:{alpha:0.699}},{t:this.instance_14,p:{alpha:0.699}},{t:this.instance_15,p:{x:85.1,y:113.4,alpha:0.699}},{t:this.instance_9,p:{x:102,y:104.5,alpha:0.699}},{t:this.instance_18,p:{alpha:0.699}},{t:this.instance_27,p:{x:131.2,y:104.2,alpha:0.699}},{t:this.instance_16,p:{alpha:1}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:1}},{t:this.instance_7,p:{x:78,y:132.8,alpha:1}},{t:this.instance_8,p:{x:89.2,y:141.5,alpha:1}},{t:this.instance_12,p:{x:110.2,alpha:1}},{t:this.instance_21,p:{x:128.3,y:132.3,alpha:1}},{t:this.instance_10,p:{x:142,y:132.3,alpha:1}},{t:this.instance_19,p:{x:155.9,y:132.3,alpha:1}},{t:this.instance_20,p:{x:32.2,y:162.9,alpha:1}},{t:this.instance_17,p:{x:45.9,y:163,alpha:1}},{t:this.instance_6,p:{x:58.5,y:163.2,alpha:1}},{t:this.instance_29,p:{alpha:1}},{t:this.instance_24,p:{alpha:1}},{t:this.instance_3,p:{x:100.6,y:172.1,alpha:1}},{t:this.instance_1,p:{x:117.1,y:162.9,alpha:1}},{t:this.instance_11,p:{x:130.7,y:163,alpha:1}},{t:this.instance_2,p:{x:144.5,y:163,alpha:1}},{t:this.instance_23,p:{x:159.9,alpha:1}}]},1).to({state:[{t:this.instance_26,p:{alpha:0.301}},{t:this.instance_28,p:{alpha:0.301}},{t:this.instance_25,p:{alpha:0.301}},{t:this.instance_13,p:{alpha:0.301}},{t:this.instance_5,p:{alpha:0.301}},{t:this.instance_22,p:{alpha:0.602}},{t:this.instance_14,p:{alpha:0.602}},{t:this.instance_15,p:{x:85.1,y:113.4,alpha:0.602}},{t:this.instance_9,p:{x:102,y:104.5,alpha:0.602}},{t:this.instance_18,p:{alpha:0.602}},{t:this.instance_27,p:{x:131.2,y:104.2,alpha:0.602}},{t:this.instance_16,p:{alpha:0.898}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:0.898}},{t:this.instance_7,p:{x:78,y:132.8,alpha:0.898}},{t:this.instance_8,p:{x:89.2,y:141.5,alpha:0.898}},{t:this.instance_12,p:{x:110.2,alpha:0.898}},{t:this.instance_21,p:{x:128.3,y:132.3,alpha:0.898}},{t:this.instance_10,p:{x:142,y:132.3,alpha:0.898}},{t:this.instance_19,p:{x:155.9,y:132.3,alpha:0.898}},{t:this.instance_20,p:{x:32.2,y:162.9,alpha:1}},{t:this.instance_17,p:{x:45.9,y:163,alpha:1}},{t:this.instance_6,p:{x:58.5,y:163.2,alpha:1}},{t:this.instance_29,p:{alpha:1}},{t:this.instance_24,p:{alpha:1}},{t:this.instance_3,p:{x:100.6,y:172.1,alpha:1}},{t:this.instance_1,p:{x:117.1,y:162.9,alpha:1}},{t:this.instance_11,p:{x:130.7,y:163,alpha:1}},{t:this.instance_2,p:{x:144.5,y:163,alpha:1}},{t:this.instance_23,p:{x:159.9,alpha:1}}]},1).to({state:[{t:this.instance_26,p:{alpha:0.199}},{t:this.instance_28,p:{alpha:0.199}},{t:this.instance_25,p:{alpha:0.199}},{t:this.instance_13,p:{alpha:0.199}},{t:this.instance_5,p:{alpha:0.199}},{t:this.instance_22,p:{alpha:0.5}},{t:this.instance_14,p:{alpha:0.5}},{t:this.instance_15,p:{x:85.1,y:113.4,alpha:0.5}},{t:this.instance_9,p:{x:102,y:104.5,alpha:0.5}},{t:this.instance_18,p:{alpha:0.5}},{t:this.instance_27,p:{x:131.2,y:104.2,alpha:0.5}},{t:this.instance_16,p:{alpha:0.801}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:0.801}},{t:this.instance_7,p:{x:78,y:132.8,alpha:0.801}},{t:this.instance_8,p:{x:89.2,y:141.5,alpha:0.801}},{t:this.instance_12,p:{x:110.2,alpha:0.801}},{t:this.instance_21,p:{x:128.3,y:132.3,alpha:0.801}},{t:this.instance_10,p:{x:142,y:132.3,alpha:0.801}},{t:this.instance_19,p:{x:155.9,y:132.3,alpha:0.801}},{t:this.instance_20,p:{x:32.2,y:162.9,alpha:1}},{t:this.instance_17,p:{x:45.9,y:163,alpha:1}},{t:this.instance_6,p:{x:58.5,y:163.2,alpha:1}},{t:this.instance_29,p:{alpha:1}},{t:this.instance_24,p:{alpha:1}},{t:this.instance_3,p:{x:100.6,y:172.1,alpha:1}},{t:this.instance_1,p:{x:117.1,y:162.9,alpha:1}},{t:this.instance_11,p:{x:130.7,y:163,alpha:1}},{t:this.instance_2,p:{x:144.5,y:163,alpha:1}},{t:this.instance_23,p:{x:159.9,alpha:1}}]},1).to({state:[{t:this.instance_26,p:{alpha:0.102}},{t:this.instance_28,p:{alpha:0.102}},{t:this.instance_25,p:{alpha:0.102}},{t:this.instance_13,p:{alpha:0.102}},{t:this.instance_5,p:{alpha:0.102}},{t:this.instance_22,p:{alpha:0.398}},{t:this.instance_14,p:{alpha:0.398}},{t:this.instance_15,p:{x:85.1,y:113.4,alpha:0.398}},{t:this.instance_9,p:{x:102,y:104.5,alpha:0.398}},{t:this.instance_18,p:{alpha:0.398}},{t:this.instance_27,p:{x:131.2,y:104.2,alpha:0.398}},{t:this.instance_16,p:{alpha:0.699}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:0.699}},{t:this.instance_7,p:{x:78,y:132.8,alpha:0.699}},{t:this.instance_8,p:{x:89.2,y:141.5,alpha:0.699}},{t:this.instance_12,p:{x:110.2,alpha:0.699}},{t:this.instance_21,p:{x:128.3,y:132.3,alpha:0.699}},{t:this.instance_10,p:{x:142,y:132.3,alpha:0.699}},{t:this.instance_19,p:{x:155.9,y:132.3,alpha:0.699}},{t:this.instance_20,p:{x:32.2,y:162.9,alpha:1}},{t:this.instance_17,p:{x:45.9,y:163,alpha:1}},{t:this.instance_6,p:{x:58.5,y:163.2,alpha:1}},{t:this.instance_29,p:{alpha:1}},{t:this.instance_24,p:{alpha:1}},{t:this.instance_3,p:{x:100.6,y:172.1,alpha:1}},{t:this.instance_1,p:{x:117.1,y:162.9,alpha:1}},{t:this.instance_11,p:{x:130.7,y:163,alpha:1}},{t:this.instance_2,p:{x:144.5,y:163,alpha:1}},{t:this.instance_23,p:{x:159.9,alpha:1}}]},1).to({state:[{t:this.instance_26,p:{alpha:0}},{t:this.instance_28,p:{alpha:0}},{t:this.instance_25,p:{alpha:0}},{t:this.instance_13,p:{alpha:0}},{t:this.instance_5,p:{alpha:0}},{t:this.instance_22,p:{alpha:0.301}},{t:this.instance_14,p:{alpha:0.301}},{t:this.instance_15,p:{x:85.1,y:113.4,alpha:0.301}},{t:this.instance_9,p:{x:102,y:104.5,alpha:0.301}},{t:this.instance_18,p:{alpha:0.301}},{t:this.instance_27,p:{x:131.2,y:104.2,alpha:0.301}},{t:this.instance_16,p:{alpha:0.602}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:0.602}},{t:this.instance_7,p:{x:78,y:132.8,alpha:0.602}},{t:this.instance_8,p:{x:89.2,y:141.5,alpha:0.602}},{t:this.instance_12,p:{x:110.2,alpha:0.602}},{t:this.instance_21,p:{x:128.3,y:132.3,alpha:0.602}},{t:this.instance_10,p:{x:142,y:132.3,alpha:0.602}},{t:this.instance_19,p:{x:155.9,y:132.3,alpha:0.602}},{t:this.instance_20,p:{x:32.2,y:162.9,alpha:0.898}},{t:this.instance_17,p:{x:45.9,y:163,alpha:0.898}},{t:this.instance_6,p:{x:58.5,y:163.2,alpha:0.898}},{t:this.instance_29,p:{alpha:0.898}},{t:this.instance_24,p:{alpha:0.898}},{t:this.instance_3,p:{x:100.6,y:172.1,alpha:0.898}},{t:this.instance_1,p:{x:117.1,y:162.9,alpha:0.898}},{t:this.instance_11,p:{x:130.7,y:163,alpha:0.898}},{t:this.instance_2,p:{x:144.5,y:163,alpha:0.898}},{t:this.instance_23,p:{x:159.9,alpha:0.898}}]},1).to({state:[{t:this.instance_26,p:{alpha:0}},{t:this.instance_28,p:{alpha:0}},{t:this.instance_25,p:{alpha:0}},{t:this.instance_13,p:{alpha:0}},{t:this.instance_5,p:{alpha:0}},{t:this.instance_22,p:{alpha:0.199}},{t:this.instance_14,p:{alpha:0.199}},{t:this.instance_15,p:{x:85.1,y:113.4,alpha:0.199}},{t:this.instance_9,p:{x:102,y:104.5,alpha:0.199}},{t:this.instance_18,p:{alpha:0.199}},{t:this.instance_27,p:{x:131.2,y:104.2,alpha:0.199}},{t:this.instance_16,p:{alpha:0.5}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:0.5}},{t:this.instance_7,p:{x:78,y:132.8,alpha:0.5}},{t:this.instance_8,p:{x:89.2,y:141.5,alpha:0.5}},{t:this.instance_12,p:{x:110.2,alpha:0.5}},{t:this.instance_21,p:{x:128.3,y:132.3,alpha:0.5}},{t:this.instance_10,p:{x:142,y:132.3,alpha:0.5}},{t:this.instance_19,p:{x:155.9,y:132.3,alpha:0.5}},{t:this.instance_20,p:{x:32.2,y:162.9,alpha:0.801}},{t:this.instance_17,p:{x:45.9,y:163,alpha:0.801}},{t:this.instance_6,p:{x:58.5,y:163.2,alpha:0.801}},{t:this.instance_29,p:{alpha:0.801}},{t:this.instance_24,p:{alpha:0.801}},{t:this.instance_3,p:{x:100.6,y:172.1,alpha:0.801}},{t:this.instance_1,p:{x:117.1,y:162.9,alpha:0.801}},{t:this.instance_11,p:{x:130.7,y:163,alpha:0.801}},{t:this.instance_2,p:{x:144.5,y:163,alpha:0.801}},{t:this.instance_23,p:{x:159.9,alpha:0.801}}]},1).to({state:[{t:this.instance_26,p:{alpha:0}},{t:this.instance_28,p:{alpha:0}},{t:this.instance_25,p:{alpha:0}},{t:this.instance_13,p:{alpha:0}},{t:this.instance_5,p:{alpha:0}},{t:this.instance_22,p:{alpha:0.102}},{t:this.instance_14,p:{alpha:0.102}},{t:this.instance_15,p:{x:85.1,y:113.4,alpha:0.102}},{t:this.instance_9,p:{x:102,y:104.5,alpha:0.102}},{t:this.instance_18,p:{alpha:0.102}},{t:this.instance_27,p:{x:131.2,y:104.2,alpha:0.102}},{t:this.instance_16,p:{alpha:0.398}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:0.398}},{t:this.instance_7,p:{x:78,y:132.8,alpha:0.398}},{t:this.instance_8,p:{x:89.2,y:141.5,alpha:0.398}},{t:this.instance_12,p:{x:110.2,alpha:0.398}},{t:this.instance_21,p:{x:128.3,y:132.3,alpha:0.398}},{t:this.instance_10,p:{x:142,y:132.3,alpha:0.398}},{t:this.instance_19,p:{x:155.9,y:132.3,alpha:0.398}},{t:this.instance_20,p:{x:32.2,y:162.9,alpha:0.699}},{t:this.instance_17,p:{x:45.9,y:163,alpha:0.699}},{t:this.instance_6,p:{x:58.5,y:163.2,alpha:0.699}},{t:this.instance_29,p:{alpha:0.699}},{t:this.instance_24,p:{alpha:0.699}},{t:this.instance_3,p:{x:100.6,y:172.1,alpha:0.699}},{t:this.instance_1,p:{x:117.1,y:162.9,alpha:0.699}},{t:this.instance_11,p:{x:130.7,y:163,alpha:0.699}},{t:this.instance_2,p:{x:144.5,y:163,alpha:0.699}},{t:this.instance_23,p:{x:159.9,alpha:0.699}}]},1).to({state:[{t:this.instance_26,p:{alpha:0}},{t:this.instance_28,p:{alpha:0}},{t:this.instance_25,p:{alpha:0}},{t:this.instance_13,p:{alpha:0}},{t:this.instance_5,p:{alpha:0}},{t:this.instance_22,p:{alpha:0}},{t:this.instance_14,p:{alpha:0}},{t:this.instance_15,p:{x:85.1,y:113.4,alpha:0}},{t:this.instance_9,p:{x:102,y:104.5,alpha:0}},{t:this.instance_18,p:{alpha:0}},{t:this.instance_27,p:{x:131.2,y:104.2,alpha:0}},{t:this.instance_16,p:{alpha:0.301}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:0.301}},{t:this.instance_7,p:{x:78,y:132.8,alpha:0.301}},{t:this.instance_8,p:{x:89.2,y:141.5,alpha:0.301}},{t:this.instance_12,p:{x:110.2,alpha:0.301}},{t:this.instance_21,p:{x:128.3,y:132.3,alpha:0.301}},{t:this.instance_10,p:{x:142,y:132.3,alpha:0.301}},{t:this.instance_19,p:{x:155.9,y:132.3,alpha:0.301}},{t:this.instance_20,p:{x:32.2,y:162.9,alpha:0.602}},{t:this.instance_17,p:{x:45.9,y:163,alpha:0.602}},{t:this.instance_6,p:{x:58.5,y:163.2,alpha:0.602}},{t:this.instance_29,p:{alpha:0.602}},{t:this.instance_24,p:{alpha:0.602}},{t:this.instance_3,p:{x:100.6,y:172.1,alpha:0.602}},{t:this.instance_1,p:{x:117.1,y:162.9,alpha:0.602}},{t:this.instance_11,p:{x:130.7,y:163,alpha:0.602}},{t:this.instance_2,p:{x:144.5,y:163,alpha:0.602}},{t:this.instance_23,p:{x:159.9,alpha:0.602}}]},1).to({state:[{t:this.instance_26,p:{alpha:0}},{t:this.instance_28,p:{alpha:0}},{t:this.instance_25,p:{alpha:0}},{t:this.instance_13,p:{alpha:0}},{t:this.instance_5,p:{alpha:0}},{t:this.instance_22,p:{alpha:0}},{t:this.instance_14,p:{alpha:0}},{t:this.instance_15,p:{x:85.1,y:113.4,alpha:0}},{t:this.instance_9,p:{x:102,y:104.5,alpha:0}},{t:this.instance_18,p:{alpha:0}},{t:this.instance_27,p:{x:131.2,y:104.2,alpha:0}},{t:this.instance_16,p:{alpha:0.199}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:0.199}},{t:this.instance_7,p:{x:78,y:132.8,alpha:0.199}},{t:this.instance_8,p:{x:89.2,y:141.5,alpha:0.199}},{t:this.instance_12,p:{x:110.2,alpha:0.199}},{t:this.instance_21,p:{x:128.3,y:132.3,alpha:0.199}},{t:this.instance_10,p:{x:142,y:132.3,alpha:0.199}},{t:this.instance_19,p:{x:155.9,y:132.3,alpha:0.199}},{t:this.instance_20,p:{x:32.2,y:162.9,alpha:0.5}},{t:this.instance_17,p:{x:45.9,y:163,alpha:0.5}},{t:this.instance_6,p:{x:58.5,y:163.2,alpha:0.5}},{t:this.instance_29,p:{alpha:0.5}},{t:this.instance_24,p:{alpha:0.5}},{t:this.instance_3,p:{x:100.6,y:172.1,alpha:0.5}},{t:this.instance_1,p:{x:117.1,y:162.9,alpha:0.5}},{t:this.instance_11,p:{x:130.7,y:163,alpha:0.5}},{t:this.instance_2,p:{x:144.5,y:163,alpha:0.5}},{t:this.instance_23,p:{x:159.9,alpha:0.5}}]},1).to({state:[{t:this.instance_26,p:{alpha:0}},{t:this.instance_28,p:{alpha:0}},{t:this.instance_25,p:{alpha:0}},{t:this.instance_13,p:{alpha:0}},{t:this.instance_5,p:{alpha:0}},{t:this.instance_22,p:{alpha:0}},{t:this.instance_14,p:{alpha:0}},{t:this.instance_15,p:{x:85.1,y:113.4,alpha:0}},{t:this.instance_9,p:{x:102,y:104.5,alpha:0}},{t:this.instance_18,p:{alpha:0}},{t:this.instance_27,p:{x:131.2,y:104.2,alpha:0}},{t:this.instance_16,p:{alpha:0.102}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:0.102}},{t:this.instance_7,p:{x:78,y:132.8,alpha:0.102}},{t:this.instance_8,p:{x:89.2,y:141.5,alpha:0.102}},{t:this.instance_12,p:{x:110.2,alpha:0.102}},{t:this.instance_21,p:{x:128.3,y:132.3,alpha:0.102}},{t:this.instance_10,p:{x:142,y:132.3,alpha:0.102}},{t:this.instance_19,p:{x:155.9,y:132.3,alpha:0.102}},{t:this.instance_20,p:{x:32.2,y:162.9,alpha:0.398}},{t:this.instance_17,p:{x:45.9,y:163,alpha:0.398}},{t:this.instance_6,p:{x:58.5,y:163.2,alpha:0.398}},{t:this.instance_29,p:{alpha:0.398}},{t:this.instance_24,p:{alpha:0.398}},{t:this.instance_3,p:{x:100.6,y:172.1,alpha:0.398}},{t:this.instance_1,p:{x:117.1,y:162.9,alpha:0.398}},{t:this.instance_11,p:{x:130.7,y:163,alpha:0.398}},{t:this.instance_2,p:{x:144.5,y:163,alpha:0.398}},{t:this.instance_23,p:{x:159.9,alpha:0.398}}]},1).to({state:[{t:this.instance_26,p:{alpha:0}},{t:this.instance_28,p:{alpha:0}},{t:this.instance_25,p:{alpha:0}},{t:this.instance_13,p:{alpha:0}},{t:this.instance_5,p:{alpha:0}},{t:this.instance_22,p:{alpha:0}},{t:this.instance_14,p:{alpha:0}},{t:this.instance_15,p:{x:85.1,y:113.4,alpha:0}},{t:this.instance_9,p:{x:102,y:104.5,alpha:0}},{t:this.instance_18,p:{alpha:0}},{t:this.instance_27,p:{x:131.2,y:104.2,alpha:0}},{t:this.instance_16,p:{alpha:0}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:0}},{t:this.instance_7,p:{x:78,y:132.8,alpha:0}},{t:this.instance_8,p:{x:89.2,y:141.5,alpha:0}},{t:this.instance_12,p:{x:110.2,alpha:0}},{t:this.instance_21,p:{x:128.3,y:132.3,alpha:0}},{t:this.instance_10,p:{x:142,y:132.3,alpha:0}},{t:this.instance_19,p:{x:155.9,y:132.3,alpha:0}},{t:this.instance_20,p:{x:32.2,y:162.9,alpha:0.301}},{t:this.instance_17,p:{x:45.9,y:163,alpha:0.301}},{t:this.instance_6,p:{x:58.5,y:163.2,alpha:0.301}},{t:this.instance_29,p:{alpha:0.301}},{t:this.instance_24,p:{alpha:0.301}},{t:this.instance_3,p:{x:100.6,y:172.1,alpha:0.301}},{t:this.instance_1,p:{x:117.1,y:162.9,alpha:0.301}},{t:this.instance_11,p:{x:130.7,y:163,alpha:0.301}},{t:this.instance_2,p:{x:144.5,y:163,alpha:0.301}},{t:this.instance_23,p:{x:159.9,alpha:0.301}}]},1).to({state:[{t:this.instance_26,p:{alpha:0}},{t:this.instance_28,p:{alpha:0}},{t:this.instance_25,p:{alpha:0}},{t:this.instance_13,p:{alpha:0}},{t:this.instance_5,p:{alpha:0}},{t:this.instance_22,p:{alpha:0}},{t:this.instance_14,p:{alpha:0}},{t:this.instance_15,p:{x:85.1,y:113.4,alpha:0}},{t:this.instance_9,p:{x:102,y:104.5,alpha:0}},{t:this.instance_18,p:{alpha:0}},{t:this.instance_27,p:{x:131.2,y:104.2,alpha:0}},{t:this.instance_16,p:{alpha:0}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:0}},{t:this.instance_7,p:{x:78,y:132.8,alpha:0}},{t:this.instance_8,p:{x:89.2,y:141.5,alpha:0}},{t:this.instance_12,p:{x:110.2,alpha:0}},{t:this.instance_21,p:{x:128.3,y:132.3,alpha:0}},{t:this.instance_10,p:{x:142,y:132.3,alpha:0}},{t:this.instance_19,p:{x:155.9,y:132.3,alpha:0}},{t:this.instance_20,p:{x:32.2,y:162.9,alpha:0.199}},{t:this.instance_17,p:{x:45.9,y:163,alpha:0.199}},{t:this.instance_6,p:{x:58.5,y:163.2,alpha:0.199}},{t:this.instance_29,p:{alpha:0.199}},{t:this.instance_24,p:{alpha:0.199}},{t:this.instance_3,p:{x:100.6,y:172.1,alpha:0.199}},{t:this.instance_1,p:{x:117.1,y:162.9,alpha:0.199}},{t:this.instance_11,p:{x:130.7,y:163,alpha:0.199}},{t:this.instance_2,p:{x:144.5,y:163,alpha:0.199}},{t:this.instance_23,p:{x:159.9,alpha:0.199}}]},1).to({state:[{t:this.instance_26,p:{alpha:0}},{t:this.instance_28,p:{alpha:0}},{t:this.instance_25,p:{alpha:0}},{t:this.instance_13,p:{alpha:0}},{t:this.instance_5,p:{alpha:0}},{t:this.instance_22,p:{alpha:0}},{t:this.instance_14,p:{alpha:0}},{t:this.instance_15,p:{x:85.1,y:113.4,alpha:0}},{t:this.instance_9,p:{x:102,y:104.5,alpha:0}},{t:this.instance_18,p:{alpha:0}},{t:this.instance_27,p:{x:131.2,y:104.2,alpha:0}},{t:this.instance_16,p:{alpha:0}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:0}},{t:this.instance_7,p:{x:78,y:132.8,alpha:0}},{t:this.instance_8,p:{x:89.2,y:141.5,alpha:0}},{t:this.instance_12,p:{x:110.2,alpha:0}},{t:this.instance_21,p:{x:128.3,y:132.3,alpha:0}},{t:this.instance_10,p:{x:142,y:132.3,alpha:0}},{t:this.instance_19,p:{x:155.9,y:132.3,alpha:0}},{t:this.instance_20,p:{x:32.2,y:162.9,alpha:0.102}},{t:this.instance_17,p:{x:45.9,y:163,alpha:0.102}},{t:this.instance_6,p:{x:58.5,y:163.2,alpha:0.102}},{t:this.instance_29,p:{alpha:0.102}},{t:this.instance_24,p:{alpha:0.102}},{t:this.instance_3,p:{x:100.6,y:172.1,alpha:0.102}},{t:this.instance_1,p:{x:117.1,y:162.9,alpha:0.102}},{t:this.instance_11,p:{x:130.7,y:163,alpha:0.102}},{t:this.instance_2,p:{x:144.5,y:163,alpha:0.102}},{t:this.instance_23,p:{x:159.9,alpha:0.102}}]},1).to({state:[{t:this.instance_26,p:{alpha:0.102}},{t:this.instance_28,p:{alpha:0.102}},{t:this.instance_25,p:{alpha:0.102}},{t:this.instance_13,p:{alpha:0.102}},{t:this.instance_5,p:{alpha:0.102}},{t:this.instance_22,p:{alpha:0}},{t:this.instance_14,p:{alpha:0}},{t:this.instance_15,p:{x:85.1,y:113.4,alpha:0}},{t:this.instance_9,p:{x:102,y:104.5,alpha:0}},{t:this.instance_18,p:{alpha:0}},{t:this.instance_27,p:{x:131.2,y:104.2,alpha:0}},{t:this.instance_16,p:{alpha:0}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:0}},{t:this.instance_7,p:{x:78,y:132.8,alpha:0}},{t:this.instance_8,p:{x:89.2,y:141.5,alpha:0}},{t:this.instance_12,p:{x:110.2,alpha:0}},{t:this.instance_21,p:{x:128.3,y:132.3,alpha:0}},{t:this.instance_10,p:{x:142,y:132.3,alpha:0}},{t:this.instance_19,p:{x:155.9,y:132.3,alpha:0}},{t:this.instance_20,p:{x:32.2,y:162.9,alpha:0}},{t:this.instance_17,p:{x:45.9,y:163,alpha:0}},{t:this.instance_6,p:{x:58.5,y:163.2,alpha:0}},{t:this.instance_29,p:{alpha:0}},{t:this.instance_24,p:{alpha:0}},{t:this.instance_3,p:{x:100.6,y:172.1,alpha:0}},{t:this.instance_1,p:{x:117.1,y:162.9,alpha:0}},{t:this.instance_11,p:{x:130.7,y:163,alpha:0}},{t:this.instance_2,p:{x:144.5,y:163,alpha:0}},{t:this.instance_23,p:{x:159.9,alpha:0}}]},1).to({state:[{t:this.instance_26,p:{alpha:0.199}},{t:this.instance_28,p:{alpha:0.199}},{t:this.instance_25,p:{alpha:0.199}},{t:this.instance_13,p:{alpha:0.199}},{t:this.instance_5,p:{alpha:0.199}},{t:this.instance_22,p:{alpha:0}},{t:this.instance_14,p:{alpha:0}},{t:this.instance_15,p:{x:85.1,y:113.4,alpha:0}},{t:this.instance_9,p:{x:102,y:104.5,alpha:0}},{t:this.instance_18,p:{alpha:0}},{t:this.instance_27,p:{x:131.2,y:104.2,alpha:0}},{t:this.instance_16,p:{alpha:0}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:0}},{t:this.instance_7,p:{x:78,y:132.8,alpha:0}},{t:this.instance_8,p:{x:89.2,y:141.5,alpha:0}},{t:this.instance_12,p:{x:110.2,alpha:0}},{t:this.instance_21,p:{x:128.3,y:132.3,alpha:0}},{t:this.instance_10,p:{x:142,y:132.3,alpha:0}},{t:this.instance_19,p:{x:155.9,y:132.3,alpha:0}},{t:this.instance_20,p:{x:32.2,y:162.9,alpha:0}},{t:this.instance_17,p:{x:45.9,y:163,alpha:0}},{t:this.instance_6,p:{x:58.5,y:163.2,alpha:0}},{t:this.instance_29,p:{alpha:0}},{t:this.instance_24,p:{alpha:0}},{t:this.instance_3,p:{x:100.6,y:172.1,alpha:0}},{t:this.instance_1,p:{x:117.1,y:162.9,alpha:0}},{t:this.instance_11,p:{x:130.7,y:163,alpha:0}},{t:this.instance_2,p:{x:144.5,y:163,alpha:0}},{t:this.instance_23,p:{x:159.9,alpha:0}}]},1).to({state:[{t:this.instance_26,p:{alpha:0.301}},{t:this.instance_28,p:{alpha:0.301}},{t:this.instance_25,p:{alpha:0.301}},{t:this.instance_13,p:{alpha:0.301}},{t:this.instance_5,p:{alpha:0.301}},{t:this.instance_22,p:{alpha:0}},{t:this.instance_14,p:{alpha:0}},{t:this.instance_15,p:{x:85.1,y:113.4,alpha:0}},{t:this.instance_9,p:{x:102,y:104.5,alpha:0}},{t:this.instance_18,p:{alpha:0}},{t:this.instance_27,p:{x:131.2,y:104.2,alpha:0}},{t:this.instance_16,p:{alpha:0}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:0}},{t:this.instance_7,p:{x:78,y:132.8,alpha:0}},{t:this.instance_8,p:{x:89.2,y:141.5,alpha:0}},{t:this.instance_12,p:{x:110.2,alpha:0}},{t:this.instance_21,p:{x:128.3,y:132.3,alpha:0}},{t:this.instance_10,p:{x:142,y:132.3,alpha:0}},{t:this.instance_19,p:{x:155.9,y:132.3,alpha:0}},{t:this.instance_20,p:{x:32.2,y:162.9,alpha:0}},{t:this.instance_17,p:{x:45.9,y:163,alpha:0}},{t:this.instance_6,p:{x:58.5,y:163.2,alpha:0}},{t:this.instance_29,p:{alpha:0}},{t:this.instance_24,p:{alpha:0}},{t:this.instance_3,p:{x:100.6,y:172.1,alpha:0}},{t:this.instance_1,p:{x:117.1,y:162.9,alpha:0}},{t:this.instance_11,p:{x:130.7,y:163,alpha:0}},{t:this.instance_2,p:{x:144.5,y:163,alpha:0}},{t:this.instance_23,p:{x:159.9,alpha:0}}]},1).to({state:[{t:this.instance_26,p:{alpha:0.398}},{t:this.instance_28,p:{alpha:0.398}},{t:this.instance_25,p:{alpha:0.398}},{t:this.instance_13,p:{alpha:0.398}},{t:this.instance_5,p:{alpha:0.398}},{t:this.instance_22,p:{alpha:0.102}},{t:this.instance_14,p:{alpha:0.102}},{t:this.instance_15,p:{x:85.1,y:113.4,alpha:0.102}},{t:this.instance_9,p:{x:102,y:104.5,alpha:0.102}},{t:this.instance_18,p:{alpha:0.102}},{t:this.instance_27,p:{x:131.2,y:104.2,alpha:0.102}},{t:this.instance_16,p:{alpha:0}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:0}},{t:this.instance_7,p:{x:78,y:132.8,alpha:0}},{t:this.instance_8,p:{x:89.2,y:141.5,alpha:0}},{t:this.instance_12,p:{x:110.2,alpha:0}},{t:this.instance_21,p:{x:128.3,y:132.3,alpha:0}},{t:this.instance_10,p:{x:142,y:132.3,alpha:0}},{t:this.instance_19,p:{x:155.9,y:132.3,alpha:0}},{t:this.instance_20,p:{x:32.2,y:162.9,alpha:0}},{t:this.instance_17,p:{x:45.9,y:163,alpha:0}},{t:this.instance_6,p:{x:58.5,y:163.2,alpha:0}},{t:this.instance_29,p:{alpha:0}},{t:this.instance_24,p:{alpha:0}},{t:this.instance_3,p:{x:100.6,y:172.1,alpha:0}},{t:this.instance_1,p:{x:117.1,y:162.9,alpha:0}},{t:this.instance_11,p:{x:130.7,y:163,alpha:0}},{t:this.instance_2,p:{x:144.5,y:163,alpha:0}},{t:this.instance_23,p:{x:159.9,alpha:0}}]},1).to({state:[{t:this.instance_26,p:{alpha:0.5}},{t:this.instance_28,p:{alpha:0.5}},{t:this.instance_25,p:{alpha:0.5}},{t:this.instance_13,p:{alpha:0.5}},{t:this.instance_5,p:{alpha:0.5}},{t:this.instance_22,p:{alpha:0.199}},{t:this.instance_14,p:{alpha:0.199}},{t:this.instance_15,p:{x:85.1,y:113.4,alpha:0.199}},{t:this.instance_9,p:{x:102,y:104.5,alpha:0.199}},{t:this.instance_18,p:{alpha:0.199}},{t:this.instance_27,p:{x:131.2,y:104.2,alpha:0.199}},{t:this.instance_16,p:{alpha:0}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:0}},{t:this.instance_7,p:{x:78,y:132.8,alpha:0}},{t:this.instance_8,p:{x:89.2,y:141.5,alpha:0}},{t:this.instance_12,p:{x:110.2,alpha:0}},{t:this.instance_21,p:{x:128.3,y:132.3,alpha:0}},{t:this.instance_10,p:{x:142,y:132.3,alpha:0}},{t:this.instance_19,p:{x:155.9,y:132.3,alpha:0}},{t:this.instance_20,p:{x:32.2,y:162.9,alpha:0}},{t:this.instance_17,p:{x:45.9,y:163,alpha:0}},{t:this.instance_6,p:{x:58.5,y:163.2,alpha:0}},{t:this.instance_29,p:{alpha:0}},{t:this.instance_24,p:{alpha:0}},{t:this.instance_3,p:{x:100.6,y:172.1,alpha:0}},{t:this.instance_1,p:{x:117.1,y:162.9,alpha:0}},{t:this.instance_11,p:{x:130.7,y:163,alpha:0}},{t:this.instance_2,p:{x:144.5,y:163,alpha:0}},{t:this.instance_23,p:{x:159.9,alpha:0}}]},1).to({state:[{t:this.instance_26,p:{alpha:0.602}},{t:this.instance_28,p:{alpha:0.602}},{t:this.instance_25,p:{alpha:0.602}},{t:this.instance_13,p:{alpha:0.602}},{t:this.instance_5,p:{alpha:0.602}},{t:this.instance_22,p:{alpha:0.301}},{t:this.instance_14,p:{alpha:0.301}},{t:this.instance_15,p:{x:85.1,y:113.4,alpha:0.301}},{t:this.instance_9,p:{x:102,y:104.5,alpha:0.301}},{t:this.instance_18,p:{alpha:0.301}},{t:this.instance_27,p:{x:131.2,y:104.2,alpha:0.301}},{t:this.instance_16,p:{alpha:0}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:0}},{t:this.instance_7,p:{x:78,y:132.8,alpha:0}},{t:this.instance_8,p:{x:89.2,y:141.5,alpha:0}},{t:this.instance_12,p:{x:110.2,alpha:0}},{t:this.instance_21,p:{x:128.3,y:132.3,alpha:0}},{t:this.instance_10,p:{x:142,y:132.3,alpha:0}},{t:this.instance_19,p:{x:155.9,y:132.3,alpha:0}},{t:this.instance_20,p:{x:32.2,y:162.9,alpha:0}},{t:this.instance_17,p:{x:45.9,y:163,alpha:0}},{t:this.instance_6,p:{x:58.5,y:163.2,alpha:0}},{t:this.instance_29,p:{alpha:0}},{t:this.instance_24,p:{alpha:0}},{t:this.instance_3,p:{x:100.6,y:172.1,alpha:0}},{t:this.instance_1,p:{x:117.1,y:162.9,alpha:0}},{t:this.instance_11,p:{x:130.7,y:163,alpha:0}},{t:this.instance_2,p:{x:144.5,y:163,alpha:0}},{t:this.instance_23,p:{x:159.9,alpha:0}}]},1).to({state:[{t:this.instance_26,p:{alpha:0.699}},{t:this.instance_28,p:{alpha:0.699}},{t:this.instance_25,p:{alpha:0.699}},{t:this.instance_13,p:{alpha:0.699}},{t:this.instance_5,p:{alpha:0.699}},{t:this.instance_22,p:{alpha:0.398}},{t:this.instance_14,p:{alpha:0.398}},{t:this.instance_15,p:{x:85.1,y:113.4,alpha:0.398}},{t:this.instance_9,p:{x:102,y:104.5,alpha:0.398}},{t:this.instance_18,p:{alpha:0.398}},{t:this.instance_27,p:{x:131.2,y:104.2,alpha:0.398}},{t:this.instance_16,p:{alpha:0.102}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:0.102}},{t:this.instance_7,p:{x:78,y:132.8,alpha:0.102}},{t:this.instance_8,p:{x:89.2,y:141.5,alpha:0.102}},{t:this.instance_12,p:{x:110.2,alpha:0.102}},{t:this.instance_21,p:{x:128.3,y:132.3,alpha:0.102}},{t:this.instance_10,p:{x:142,y:132.3,alpha:0.102}},{t:this.instance_19,p:{x:155.9,y:132.3,alpha:0.102}},{t:this.instance_20,p:{x:32.2,y:162.9,alpha:0}},{t:this.instance_17,p:{x:45.9,y:163,alpha:0}},{t:this.instance_6,p:{x:58.5,y:163.2,alpha:0}},{t:this.instance_29,p:{alpha:0}},{t:this.instance_24,p:{alpha:0}},{t:this.instance_3,p:{x:100.6,y:172.1,alpha:0}},{t:this.instance_1,p:{x:117.1,y:162.9,alpha:0}},{t:this.instance_11,p:{x:130.7,y:163,alpha:0}},{t:this.instance_2,p:{x:144.5,y:163,alpha:0}},{t:this.instance_23,p:{x:159.9,alpha:0}}]},1).to({state:[{t:this.instance_26,p:{alpha:0.801}},{t:this.instance_28,p:{alpha:0.801}},{t:this.instance_25,p:{alpha:0.801}},{t:this.instance_13,p:{alpha:0.801}},{t:this.instance_5,p:{alpha:0.801}},{t:this.instance_22,p:{alpha:0.5}},{t:this.instance_14,p:{alpha:0.5}},{t:this.instance_15,p:{x:85.1,y:113.4,alpha:0.5}},{t:this.instance_9,p:{x:102,y:104.5,alpha:0.5}},{t:this.instance_18,p:{alpha:0.5}},{t:this.instance_27,p:{x:131.2,y:104.2,alpha:0.5}},{t:this.instance_16,p:{alpha:0.199}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:0.199}},{t:this.instance_7,p:{x:78,y:132.8,alpha:0.199}},{t:this.instance_8,p:{x:89.2,y:141.5,alpha:0.199}},{t:this.instance_12,p:{x:110.2,alpha:0.199}},{t:this.instance_21,p:{x:128.3,y:132.3,alpha:0.199}},{t:this.instance_10,p:{x:142,y:132.3,alpha:0.199}},{t:this.instance_19,p:{x:155.9,y:132.3,alpha:0.199}},{t:this.instance_20,p:{x:32.2,y:162.9,alpha:0}},{t:this.instance_17,p:{x:45.9,y:163,alpha:0}},{t:this.instance_6,p:{x:58.5,y:163.2,alpha:0}},{t:this.instance_29,p:{alpha:0}},{t:this.instance_24,p:{alpha:0}},{t:this.instance_3,p:{x:100.6,y:172.1,alpha:0}},{t:this.instance_1,p:{x:117.1,y:162.9,alpha:0}},{t:this.instance_11,p:{x:130.7,y:163,alpha:0}},{t:this.instance_2,p:{x:144.5,y:163,alpha:0}},{t:this.instance_23,p:{x:159.9,alpha:0}}]},1).to({state:[{t:this.instance_26,p:{alpha:0.898}},{t:this.instance_28,p:{alpha:0.898}},{t:this.instance_25,p:{alpha:0.898}},{t:this.instance_13,p:{alpha:0.898}},{t:this.instance_5,p:{alpha:0.898}},{t:this.instance_22,p:{alpha:0.602}},{t:this.instance_14,p:{alpha:0.602}},{t:this.instance_15,p:{x:85.1,y:113.4,alpha:0.602}},{t:this.instance_9,p:{x:102,y:104.5,alpha:0.602}},{t:this.instance_18,p:{alpha:0.602}},{t:this.instance_27,p:{x:131.2,y:104.2,alpha:0.602}},{t:this.instance_16,p:{alpha:0.301}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:0.301}},{t:this.instance_7,p:{x:78,y:132.8,alpha:0.301}},{t:this.instance_8,p:{x:89.2,y:141.5,alpha:0.301}},{t:this.instance_12,p:{x:110.2,alpha:0.301}},{t:this.instance_21,p:{x:128.3,y:132.3,alpha:0.301}},{t:this.instance_10,p:{x:142,y:132.3,alpha:0.301}},{t:this.instance_19,p:{x:155.9,y:132.3,alpha:0.301}},{t:this.instance_20,p:{x:32.2,y:162.9,alpha:0}},{t:this.instance_17,p:{x:45.9,y:163,alpha:0}},{t:this.instance_6,p:{x:58.5,y:163.2,alpha:0}},{t:this.instance_29,p:{alpha:0}},{t:this.instance_24,p:{alpha:0}},{t:this.instance_3,p:{x:100.6,y:172.1,alpha:0}},{t:this.instance_1,p:{x:117.1,y:162.9,alpha:0}},{t:this.instance_11,p:{x:130.7,y:163,alpha:0}},{t:this.instance_2,p:{x:144.5,y:163,alpha:0}},{t:this.instance_23,p:{x:159.9,alpha:0}}]},1).to({state:[{t:this.instance_26,p:{alpha:1}},{t:this.instance_28,p:{alpha:1}},{t:this.instance_25,p:{alpha:1}},{t:this.instance_13,p:{alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance_22,p:{alpha:0.699}},{t:this.instance_14,p:{alpha:0.699}},{t:this.instance_15,p:{x:85.1,y:113.4,alpha:0.699}},{t:this.instance_9,p:{x:102,y:104.5,alpha:0.699}},{t:this.instance_18,p:{alpha:0.699}},{t:this.instance_27,p:{x:131.2,y:104.2,alpha:0.699}},{t:this.instance_16,p:{alpha:0.398}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:0.398}},{t:this.instance_7,p:{x:78,y:132.8,alpha:0.398}},{t:this.instance_8,p:{x:89.2,y:141.5,alpha:0.398}},{t:this.instance_12,p:{x:110.2,alpha:0.398}},{t:this.instance_21,p:{x:128.3,y:132.3,alpha:0.398}},{t:this.instance_10,p:{x:142,y:132.3,alpha:0.398}},{t:this.instance_19,p:{x:155.9,y:132.3,alpha:0.398}},{t:this.instance_20,p:{x:32.2,y:162.9,alpha:0.102}},{t:this.instance_17,p:{x:45.9,y:163,alpha:0.102}},{t:this.instance_6,p:{x:58.5,y:163.2,alpha:0.102}},{t:this.instance_29,p:{alpha:0.102}},{t:this.instance_24,p:{alpha:0.102}},{t:this.instance_3,p:{x:100.6,y:172.1,alpha:0.102}},{t:this.instance_1,p:{x:117.1,y:162.9,alpha:0.102}},{t:this.instance_11,p:{x:130.7,y:163,alpha:0.102}},{t:this.instance_2,p:{x:144.5,y:163,alpha:0.102}},{t:this.instance_23,p:{x:159.9,alpha:0.102}}]},1).to({state:[{t:this.instance_26,p:{alpha:1}},{t:this.instance_28,p:{alpha:1}},{t:this.instance_25,p:{alpha:1}},{t:this.instance_13,p:{alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance_22,p:{alpha:0.801}},{t:this.instance_14,p:{alpha:0.801}},{t:this.instance_15,p:{x:85.1,y:113.4,alpha:0.801}},{t:this.instance_9,p:{x:102,y:104.5,alpha:0.801}},{t:this.instance_18,p:{alpha:0.801}},{t:this.instance_27,p:{x:131.2,y:104.2,alpha:0.801}},{t:this.instance_16,p:{alpha:0.5}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:0.5}},{t:this.instance_7,p:{x:78,y:132.8,alpha:0.5}},{t:this.instance_8,p:{x:89.2,y:141.5,alpha:0.5}},{t:this.instance_12,p:{x:110.2,alpha:0.5}},{t:this.instance_21,p:{x:128.3,y:132.3,alpha:0.5}},{t:this.instance_10,p:{x:142,y:132.3,alpha:0.5}},{t:this.instance_19,p:{x:155.9,y:132.3,alpha:0.5}},{t:this.instance_20,p:{x:32.2,y:162.9,alpha:0.199}},{t:this.instance_17,p:{x:45.9,y:163,alpha:0.199}},{t:this.instance_6,p:{x:58.5,y:163.2,alpha:0.199}},{t:this.instance_29,p:{alpha:0.199}},{t:this.instance_24,p:{alpha:0.199}},{t:this.instance_3,p:{x:100.6,y:172.1,alpha:0.199}},{t:this.instance_1,p:{x:117.1,y:162.9,alpha:0.199}},{t:this.instance_11,p:{x:130.7,y:163,alpha:0.199}},{t:this.instance_2,p:{x:144.5,y:163,alpha:0.199}},{t:this.instance_23,p:{x:159.9,alpha:0.199}}]},1).to({state:[{t:this.instance_26,p:{alpha:1}},{t:this.instance_28,p:{alpha:1}},{t:this.instance_25,p:{alpha:1}},{t:this.instance_13,p:{alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance_22,p:{alpha:0.898}},{t:this.instance_14,p:{alpha:0.898}},{t:this.instance_15,p:{x:85.1,y:113.4,alpha:0.898}},{t:this.instance_9,p:{x:102,y:104.5,alpha:0.898}},{t:this.instance_18,p:{alpha:0.898}},{t:this.instance_27,p:{x:131.2,y:104.2,alpha:0.898}},{t:this.instance_16,p:{alpha:0.602}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:0.602}},{t:this.instance_7,p:{x:78,y:132.8,alpha:0.602}},{t:this.instance_8,p:{x:89.2,y:141.5,alpha:0.602}},{t:this.instance_12,p:{x:110.2,alpha:0.602}},{t:this.instance_21,p:{x:128.3,y:132.3,alpha:0.602}},{t:this.instance_10,p:{x:142,y:132.3,alpha:0.602}},{t:this.instance_19,p:{x:155.9,y:132.3,alpha:0.602}},{t:this.instance_20,p:{x:32.2,y:162.9,alpha:0.301}},{t:this.instance_17,p:{x:45.9,y:163,alpha:0.301}},{t:this.instance_6,p:{x:58.5,y:163.2,alpha:0.301}},{t:this.instance_29,p:{alpha:0.301}},{t:this.instance_24,p:{alpha:0.301}},{t:this.instance_3,p:{x:100.6,y:172.1,alpha:0.301}},{t:this.instance_1,p:{x:117.1,y:162.9,alpha:0.301}},{t:this.instance_11,p:{x:130.7,y:163,alpha:0.301}},{t:this.instance_2,p:{x:144.5,y:163,alpha:0.301}},{t:this.instance_23,p:{x:159.9,alpha:0.301}}]},1).to({state:[{t:this.instance_26,p:{alpha:1}},{t:this.instance_28,p:{alpha:1}},{t:this.instance_25,p:{alpha:1}},{t:this.instance_13,p:{alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance_22,p:{alpha:1}},{t:this.instance_14,p:{alpha:1}},{t:this.instance_15,p:{x:85.1,y:113.4,alpha:1}},{t:this.instance_9,p:{x:102,y:104.5,alpha:1}},{t:this.instance_18,p:{alpha:1}},{t:this.instance_27,p:{x:131.2,y:104.2,alpha:1}},{t:this.instance_16,p:{alpha:0.699}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:0.699}},{t:this.instance_7,p:{x:78,y:132.8,alpha:0.699}},{t:this.instance_8,p:{x:89.2,y:141.5,alpha:0.699}},{t:this.instance_12,p:{x:110.2,alpha:0.699}},{t:this.instance_21,p:{x:128.3,y:132.3,alpha:0.699}},{t:this.instance_10,p:{x:142,y:132.3,alpha:0.699}},{t:this.instance_19,p:{x:155.9,y:132.3,alpha:0.699}},{t:this.instance_20,p:{x:32.2,y:162.9,alpha:0.398}},{t:this.instance_17,p:{x:45.9,y:163,alpha:0.398}},{t:this.instance_6,p:{x:58.5,y:163.2,alpha:0.398}},{t:this.instance_29,p:{alpha:0.398}},{t:this.instance_24,p:{alpha:0.398}},{t:this.instance_3,p:{x:100.6,y:172.1,alpha:0.398}},{t:this.instance_1,p:{x:117.1,y:162.9,alpha:0.398}},{t:this.instance_11,p:{x:130.7,y:163,alpha:0.398}},{t:this.instance_2,p:{x:144.5,y:163,alpha:0.398}},{t:this.instance_23,p:{x:159.9,alpha:0.398}}]},1).to({state:[{t:this.instance_26,p:{alpha:1}},{t:this.instance_28,p:{alpha:1}},{t:this.instance_25,p:{alpha:1}},{t:this.instance_13,p:{alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance_22,p:{alpha:1}},{t:this.instance_14,p:{alpha:1}},{t:this.instance_15,p:{x:85.1,y:113.4,alpha:1}},{t:this.instance_9,p:{x:102,y:104.5,alpha:1}},{t:this.instance_18,p:{alpha:1}},{t:this.instance_27,p:{x:131.2,y:104.2,alpha:1}},{t:this.instance_16,p:{alpha:0.801}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:0.801}},{t:this.instance_7,p:{x:78,y:132.8,alpha:0.801}},{t:this.instance_8,p:{x:89.2,y:141.5,alpha:0.801}},{t:this.instance_12,p:{x:110.2,alpha:0.801}},{t:this.instance_21,p:{x:128.3,y:132.3,alpha:0.801}},{t:this.instance_10,p:{x:142,y:132.3,alpha:0.801}},{t:this.instance_19,p:{x:155.9,y:132.3,alpha:0.801}},{t:this.instance_20,p:{x:32.2,y:162.9,alpha:0.5}},{t:this.instance_17,p:{x:45.9,y:163,alpha:0.5}},{t:this.instance_6,p:{x:58.5,y:163.2,alpha:0.5}},{t:this.instance_29,p:{alpha:0.5}},{t:this.instance_24,p:{alpha:0.5}},{t:this.instance_3,p:{x:100.6,y:172.1,alpha:0.5}},{t:this.instance_1,p:{x:117.1,y:162.9,alpha:0.5}},{t:this.instance_11,p:{x:130.7,y:163,alpha:0.5}},{t:this.instance_2,p:{x:144.5,y:163,alpha:0.5}},{t:this.instance_23,p:{x:159.9,alpha:0.5}}]},1).to({state:[{t:this.instance_26,p:{alpha:1}},{t:this.instance_28,p:{alpha:1}},{t:this.instance_25,p:{alpha:1}},{t:this.instance_13,p:{alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance_22,p:{alpha:1}},{t:this.instance_14,p:{alpha:1}},{t:this.instance_15,p:{x:85.1,y:113.4,alpha:1}},{t:this.instance_9,p:{x:102,y:104.5,alpha:1}},{t:this.instance_18,p:{alpha:1}},{t:this.instance_27,p:{x:131.2,y:104.2,alpha:1}},{t:this.instance_16,p:{alpha:0.898}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:0.898}},{t:this.instance_7,p:{x:78,y:132.8,alpha:0.898}},{t:this.instance_8,p:{x:89.2,y:141.5,alpha:0.898}},{t:this.instance_12,p:{x:110.2,alpha:0.898}},{t:this.instance_21,p:{x:128.3,y:132.3,alpha:0.898}},{t:this.instance_10,p:{x:142,y:132.3,alpha:0.898}},{t:this.instance_19,p:{x:155.9,y:132.3,alpha:0.898}},{t:this.instance_20,p:{x:32.2,y:162.9,alpha:0.602}},{t:this.instance_17,p:{x:45.9,y:163,alpha:0.602}},{t:this.instance_6,p:{x:58.5,y:163.2,alpha:0.602}},{t:this.instance_29,p:{alpha:0.602}},{t:this.instance_24,p:{alpha:0.602}},{t:this.instance_3,p:{x:100.6,y:172.1,alpha:0.602}},{t:this.instance_1,p:{x:117.1,y:162.9,alpha:0.602}},{t:this.instance_11,p:{x:130.7,y:163,alpha:0.602}},{t:this.instance_2,p:{x:144.5,y:163,alpha:0.602}},{t:this.instance_23,p:{x:159.9,alpha:0.602}}]},1).to({state:[{t:this.instance_26,p:{alpha:1}},{t:this.instance_28,p:{alpha:1}},{t:this.instance_25,p:{alpha:1}},{t:this.instance_13,p:{alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance_22,p:{alpha:1}},{t:this.instance_14,p:{alpha:1}},{t:this.instance_15,p:{x:85.1,y:113.4,alpha:1}},{t:this.instance_9,p:{x:102,y:104.5,alpha:1}},{t:this.instance_18,p:{alpha:1}},{t:this.instance_27,p:{x:131.2,y:104.2,alpha:1}},{t:this.instance_16,p:{alpha:1}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:1}},{t:this.instance_7,p:{x:78,y:132.8,alpha:1}},{t:this.instance_8,p:{x:89.2,y:141.5,alpha:1}},{t:this.instance_12,p:{x:110.2,alpha:1}},{t:this.instance_21,p:{x:128.3,y:132.3,alpha:1}},{t:this.instance_10,p:{x:142,y:132.3,alpha:1}},{t:this.instance_19,p:{x:155.9,y:132.3,alpha:1}},{t:this.instance_20,p:{x:32.2,y:162.9,alpha:0.699}},{t:this.instance_17,p:{x:45.9,y:163,alpha:0.699}},{t:this.instance_6,p:{x:58.5,y:163.2,alpha:0.699}},{t:this.instance_29,p:{alpha:0.699}},{t:this.instance_24,p:{alpha:0.699}},{t:this.instance_3,p:{x:100.6,y:172.1,alpha:0.699}},{t:this.instance_1,p:{x:117.1,y:162.9,alpha:0.699}},{t:this.instance_11,p:{x:130.7,y:163,alpha:0.699}},{t:this.instance_2,p:{x:144.5,y:163,alpha:0.699}},{t:this.instance_23,p:{x:159.9,alpha:0.699}}]},1).to({state:[{t:this.instance_26,p:{alpha:1}},{t:this.instance_28,p:{alpha:1}},{t:this.instance_25,p:{alpha:1}},{t:this.instance_13,p:{alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance_22,p:{alpha:1}},{t:this.instance_14,p:{alpha:1}},{t:this.instance_15,p:{x:85.1,y:113.4,alpha:1}},{t:this.instance_9,p:{x:102,y:104.5,alpha:1}},{t:this.instance_18,p:{alpha:1}},{t:this.instance_27,p:{x:131.2,y:104.2,alpha:1}},{t:this.instance_16,p:{alpha:1}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:1}},{t:this.instance_7,p:{x:78,y:132.8,alpha:1}},{t:this.instance_8,p:{x:89.2,y:141.5,alpha:1}},{t:this.instance_12,p:{x:110.2,alpha:1}},{t:this.instance_21,p:{x:128.3,y:132.3,alpha:1}},{t:this.instance_10,p:{x:142,y:132.3,alpha:1}},{t:this.instance_19,p:{x:155.9,y:132.3,alpha:1}},{t:this.instance_20,p:{x:32.2,y:162.9,alpha:0.801}},{t:this.instance_17,p:{x:45.9,y:163,alpha:0.801}},{t:this.instance_6,p:{x:58.5,y:163.2,alpha:0.801}},{t:this.instance_29,p:{alpha:0.801}},{t:this.instance_24,p:{alpha:0.801}},{t:this.instance_3,p:{x:100.6,y:172.1,alpha:0.801}},{t:this.instance_1,p:{x:117.1,y:162.9,alpha:0.801}},{t:this.instance_11,p:{x:130.7,y:163,alpha:0.801}},{t:this.instance_2,p:{x:144.5,y:163,alpha:0.801}},{t:this.instance_23,p:{x:159.9,alpha:0.801}}]},1).to({state:[{t:this.instance_26,p:{alpha:1}},{t:this.instance_28,p:{alpha:1}},{t:this.instance_25,p:{alpha:1}},{t:this.instance_13,p:{alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance_22,p:{alpha:1}},{t:this.instance_14,p:{alpha:1}},{t:this.instance_15,p:{x:85.1,y:113.4,alpha:1}},{t:this.instance_9,p:{x:102,y:104.5,alpha:1}},{t:this.instance_18,p:{alpha:1}},{t:this.instance_27,p:{x:131.2,y:104.2,alpha:1}},{t:this.instance_16,p:{alpha:1}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:1}},{t:this.instance_7,p:{x:78,y:132.8,alpha:1}},{t:this.instance_8,p:{x:89.2,y:141.5,alpha:1}},{t:this.instance_12,p:{x:110.2,alpha:1}},{t:this.instance_21,p:{x:128.3,y:132.3,alpha:1}},{t:this.instance_10,p:{x:142,y:132.3,alpha:1}},{t:this.instance_19,p:{x:155.9,y:132.3,alpha:1}},{t:this.instance_20,p:{x:32.2,y:162.9,alpha:0.898}},{t:this.instance_17,p:{x:45.9,y:163,alpha:0.898}},{t:this.instance_6,p:{x:58.5,y:163.2,alpha:0.898}},{t:this.instance_29,p:{alpha:0.898}},{t:this.instance_24,p:{alpha:0.898}},{t:this.instance_3,p:{x:100.6,y:172.1,alpha:0.898}},{t:this.instance_1,p:{x:117.1,y:162.9,alpha:0.898}},{t:this.instance_11,p:{x:130.7,y:163,alpha:0.898}},{t:this.instance_2,p:{x:144.5,y:163,alpha:0.898}},{t:this.instance_23,p:{x:159.9,alpha:0.898}}]},1).to({state:[{t:this.instance_26,p:{alpha:1}},{t:this.instance_28,p:{alpha:1}},{t:this.instance_25,p:{alpha:1}},{t:this.instance_13,p:{alpha:1}},{t:this.instance_5,p:{alpha:1}},{t:this.instance_22,p:{alpha:1}},{t:this.instance_14,p:{alpha:1}},{t:this.instance_15,p:{x:85.1,y:113.4,alpha:1}},{t:this.instance_9,p:{x:102,y:104.5,alpha:1}},{t:this.instance_18,p:{alpha:1}},{t:this.instance_27,p:{x:131.2,y:104.2,alpha:1}},{t:this.instance_16,p:{alpha:1}},{t:this.instance_4,p:{x:62.1,y:132.6,alpha:1}},{t:this.instance_7,p:{x:78,y:132.8,alpha:1}},{t:this.instance_8,p:{x:89.2,y:141.5,alpha:1}},{t:this.instance_12,p:{x:110.2,alpha:1}},{t:this.instance_21,p:{x:128.3,y:132.3,alpha:1}},{t:this.instance_10,p:{x:142,y:132.3,alpha:1}},{t:this.instance_19,p:{x:155.9,y:132.3,alpha:1}},{t:this.instance_20,p:{x:32.2,y:162.9,alpha:1}},{t:this.instance_17,p:{x:45.9,y:163,alpha:1}},{t:this.instance_6,p:{x:58.5,y:163.2,alpha:1}},{t:this.instance_29,p:{alpha:1}},{t:this.instance_24,p:{alpha:1}},{t:this.instance_3,p:{x:100.6,y:172.1,alpha:1}},{t:this.instance_1,p:{x:117.1,y:162.9,alpha:1}},{t:this.instance_11,p:{x:130.7,y:163,alpha:1}},{t:this.instance_2,p:{x:144.5,y:163,alpha:1}},{t:this.instance_23,p:{x:159.9,alpha:1}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(1).to({alpha:0},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({x:75.6},0).wait(1).to({x:89.4},0).wait(1).to({x:95.5},0).wait(1).to({x:102.1},0).wait(1).to({x:118.2},0).wait(1).to({x:137.6},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({x:61,y:115},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({x:73},0).wait(1).to({x:88.2},0).wait(1).to({x:94.3},0).wait(1).to({x:100.9},0).wait(1).to({x:117},0).wait(1).to({x:130.9},0).wait(1).to({x:144.6},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({x:38.2,y:143.1},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({x:61},0).wait(1).to({x:77.1},0).wait(1).to({x:92.4},0).wait(1).to({x:98.5},0).wait(1).to({x:105.1},0).wait(1).to({x:128},0).wait(1).to({x:141.7},0).wait(1).to({x:155.5},0).wait(1).to({x:169.3},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({x:31.7,y:173.8},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({x:45.6},0).wait(1).to({x:59.3},0).wait(1).to({x:71.4},0).wait(1).to({x:88.9},0).wait(1).to({x:103.8},0).wait(1).to({x:109.9},0).wait(1).to({x:116.5},0).wait(1).to({x:130.4},0).wait(1).to({x:144.1},0).wait(1).to({x:157.9},0).wait(1).to({x:175.4},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(37));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(54.5,87.8,14.6,2);


(lib.intro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.staceintro();
	this.instance.parent = this;
	this.instance.setTransform(-94.3,-3.7,1.7,1.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGA4QgDgDgBgGIAAgHIgBgGQAAgFADgDQAFgDADgBQANABABAYQgBAGgDADQgDADgFAAQgFAAgDgDgAgIgdQgDgDgBgGIAAgDIAAgFQAAgFADgEQAEgDAEAAQANAAAAAUQAAAGgEADQgDAEgFAAQgFAAgDgEg");
	this.shape.setTransform(51.7,-44.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgoAzQgRgPgBgbQABgdAPgUQAPgXAbAAQATAAAMAHQAPAHAAASQAAALgNAKQgGAEgTAIIgsAVQAHAKAKAFQAJAEANAAQAHAAAMgCQAOgEAEgGQADgHAFAAQAEAAAEADQACADABAEQgBANgUAKQgTAIgQAAQgaAAgRgNgAgXgeQgKALgFAUIAkgPQAVgLAJgHQgKgKgSAAQgOAAgJAMg");
	this.shape_1.setTransform(41.9,-43.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgsA2IAAhRIAAgMIAAgMQAAgMAKAAQALAAABAUQAWgWAbAAQAJAAAFAHQAEAIABAOIAAAIQgCAPgKAAQgKAAAAgMIAAgIIgBgKQgSACgLAJQgKAHgHAQIAAA/QAAAMgLAAQgLAAABgMg");
	this.shape_2.setTransform(29.7,-43.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAlA8QgFgFgCgEIgUAKQgJADgEAAQgcAAgMgPQgMgPAAgeQAAgbATgVQAUgUAaAAQAKAAANAGQAQAGAAAKQAAACgDADIgBAPIgBAZQAAAOACAIQABAGAGAQIADAFIAAACQAAAFgDADQgDADgEAAQgDAAgGgFgAgTgcQgNAPAAASQAAATAHAJQAGALAOgBQAKABAIgFQAEgCAIgGQgEgfAAgPIABgLIACgNIgIgDIgFgBQgRAAgNAPg");
	this.shape_3.setTransform(17.4,-43.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgzBaQgLgKAAgmIABgQIAAgTIgBgGQAAgDACgDQADgiAAgQIgBgNIgCgNQAAgOAMAAQAFAAAEAEQAOgEAMgCQANgCAKAAQAcAAARAHQAIADAAAIQAAAFgDAEQgEAEgFAAIgDgBQgUgGgSAAQgKAAgKACQgMACgNADIABANIgCAsIAzgFIAbgCQAFAAAEADQADAEAAAFQAAAKgKABIgcADIg1AFIgBAPIAAAOQAAAaADAFQADADAQAAIAVAAIAWgBIAGgBIAHAAQANAAAAAMQAAAKgKACQgLACgkAAQgkAAgLgKg");
	this.shape_4.setTransform(-3.1,-46.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("Ag2BaQgFgFAAgFIAAgiIADgvQACghAAgPIABggQABgGADgCQAQgFAVAAQATAAATAOQAWAQAAAYQAAAegXARQARAHAJAJQAJAJAAALQAAAOgQAOQgKAJgMAFQgaAKgpAAQgEAAgFgFgAgkAvIAAAYQAfgBATgIQAIgDAHgHQAIgGgBgDQABgFgQgHQgLgFgKgDIgMgCIgFAAIgEAAIgOgBIgBAbgAgehFIAAAUIgDAuIARABQASgBAKgKQANgKAAgRQAAgLgNgJQgMgKgMAAIgSABg");
	this.shape_5.setTransform(-17.9,-46.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgTBkQgDgDAAgFIAAgCQADgPAAgSIgBggIAAghIgSABQgMAAAAgMQAAgLAVgBIALAAIACgSQADgaAKgMQALgPAaAAQARAAAAALQAAALgQAAQgcAAgDAoIgBAHIAagBQATAAAAALQAAAJgKACIgJAAQgFAAgWACIgBAZIABAWIAAAWQAAAWgCANQgBAJgJAAQgFAAgEgDg");
	this.shape_6.setTransform(-39.5,-46);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgiAyQgQgRgBgbQAAgZAOgUQAQgYAcAAQAXAAANAVQAJASAAAYQgBAZgNASQgPAVgYAAQgTAAgOgOgAgUgXQgIANAAAQQAAARAJAKQAIAHAKAAQAMAAAIgIQAKgKABgRQACgsgaAAIgBAAQgQAAgJAQg");
	this.shape_7.setTransform(-51.9,-43.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AguBRQgWgKgBgRQAAgFAEgDQADgEAFAAQAGAAAEAHQAGAJAFADQAKAHATAAQARAAAQgIQAUgKAAgSQAAgPgRgJQgOgHgUgBQgTAAgNgHQgQgJAAgSQAAgVAXgRQAXgQAXAAQALAAAPAEQATAFAAAIQAAAKgLAAIgQgDQgMgCgGAAQgSAAgMAJQgOAJAAANQAAAKASAEQAGABASABQAbACAPAPQAOANAAATQAAAcgaARQgXAOgcAAQgWAAgRgIg");
	this.shape_8.setTransform(161.6,-81.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("Ag2BaQgEgFgBgFIAAgiIACgvQADghAAgPIACggQAAgGADgCQAQgFAUAAQAUAAATAOQAWAQAAAYQAAAegXARQARAHAJAJQAJAJgBALQAAAOgPAOQgLAJgLAFQgZAKgpAAQgFAAgFgFgAgjAvIAAAYQAfgBARgIQAJgDAHgHQAIgGAAgDQgBgFgPgHQgLgFgKgDIgMgCIgEAAIgFAAIgNgBIgBAbgAgfhFIAAAUIgCAuIARABQARgBALgKQANgKAAgRQAAgLgNgJQgMgKgNAAIgSABg");
	this.shape_9.setTransform(146.1,-81.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("Ag7BZQgDgEAAgFIgBgbIgBgcQAAgLACgUQADgVAAgLIgBgSIgCgRQAAgHAEgFQAFgGAHAAIAdACQAQACAKAGQAvAaAAAkQAAASgQAMQgNALgTAGQAkAUASAVQADAEAAAEQAAAFgDAEQgEAEgFAAQgEAAgEgEQgngngugNIABAXIAAAXQAAAFgDAEQgEADgFAAQgFAAgDgDgAglg0IABAPIgBAXIgDAWIAFAAIAGAAQAdAAAOgIQAHgCAFgGQAHgHAAgEQAAgQgTgOQgQgNgSgCIgSgCg");
	this.shape_10.setTransform(130.7,-81.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AgzBaQgLgKAAgmIABgQIAAgTIgBgGQAAgDACgDQADgiAAgQIgBgNIgCgNQAAgOAMAAQAFAAAEAEQAOgEAMgCQANgCAKAAQAcAAARAHQAIADAAAIQAAAFgDAEQgEAEgFAAIgDgBQgUgGgSAAQgKAAgKACQgMACgNADIABANIgCAsIAzgFIAbgCQAFAAAEADQADAEAAAFQAAAKgKABIgcADIg1AFIgBAPIAAAOQAAAaADAFQADADAQAAIAVAAIAWgBIAGgBIAHAAQANAAAAAMQAAAKgKACQgLACgkAAQgkAAgLgKg");
	this.shape_11.setTransform(115.7,-81.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgVBVQgOgjgRhCIgJggQgHgZAAgHQAAgFADgEQAEgDAFAAQAJAAACAKIAFAUIALAoQALAqALAgIAAgCIAfhUIAKgdQAGgRAIgJQAEgFAFAAQAFAAAEAEQADAEAAAFQAAADgCAEQgHAKgFAMIgJAaIgfBUQgGAPgHAPQgDAHgHAAQgJAAgEgKg");
	this.shape_12.setTransform(100.8,-81.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgoAyQgRgOAAgbQAAgdAPgUQAPgXAbAAQATAAAMAGQAPAJAAARQAAALgNAKQgGAEgTAIIgsAVQAHAKAKAFQAJAEANAAQAHAAAMgCQAOgEAEgGQADgHAFAAQAEAAAEADQACAEAAADQAAANgUAKQgTAIgQAAQgaAAgRgOgAgXgeQgKALgFAVIAkgQQAVgLAJgHQgKgKgSAAQgOAAgJAMg");
	this.shape_13.setTransform(78.8,-78.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAgBYQgDgJgCgSQgCgRAAgLIAAgJIAAgKQAAgVgLABQgOAAgLAMQgGAHgLATQAAAtgDAJQgEAGgHABQgEAAgEgEQgEgDAAgFIABgFIACgRIAAgSIAAhVIABgTIgBgLQgBgGAAgFQAAgGADgCQAEgDAFAAQAJAAACAKQACALAAAJIgBAaIgBAaIAAAKQAKgNALgGQAKgHAMAAQAUAAAHAMQAFAJABAVIABAWIACAZIAEAYIABADQAAAFgEADQgDAEgFgBQgJABgCgKg");
	this.shape_14.setTransform(65.2,-82);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgIBWQgDgDAAgGIABgFIAAgFIgBgRIAAgSQAAgQgEgeIgDgvIgKAAQgaAAgPgDQgJgDAAgJQAAgFADgEQADgEAGABIATACIATABIAVAAIAVAAIAbABIAaABQAFAAAEAEQADADAAAFQAAAFgDAEQgEADgFAAIgagBIgbgBIgIAAQAAAQACAkQADAhAAATIABAMIABANQAAAIgDAFQgDAIgHAAQgDAAgFgDg");
	this.shape_15.setTransform(51,-81.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgeB1QgDgDAAgEQAAgGAHgFIAKgIQAagcAAg8QAAgWgGgYQgHgbgMgPIgLgLQgHgHAAgFQAAgEADgDQADgDAEAAQADAAAFADQAWAQAOAkQANAhAAAfQAABYgxAcQgEACgEAAQgEAAgDgCg");
	this.shape_16.setTransform(30.6,-79.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgoBbQgPgDAAgJQAAgLAKAAIAOACQAKACAMAAQAWAAAIgWQAGgOAAgeQgGAMgJAGQgJAGgKAAQgVAAgNgPQgOgOAAgWQAAggASgTQATgUAgAAQAKAAAIADQAHADAEAFQANAAAAAOQAAAIgDAOIgDAXIgDAmQAAAXgFAPQgFATgLAJQgOALgaAAQgQAAgKgCgAgVg6QgLAOAAAWQAAAQAGAIQAHAJANAAQALAAALgNQAKgMABgNQADgMADgbIgKgGQgFgBgGAAQgVAAgMAPg");
	this.shape_17.setTransform(19.3,-75.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAdA5IgEgaIgBgZIAAgKIAAgMQAAgZgJAAQgNAAgLAQQgLAOgGAVIgBALIgBALIABALIABALQAAAFgDADQgEADgFAAQgFAAgDgDQgDgDAAgFIgBgLIgBgLIACggIACghIgBgMIAAgLQAAgFADgDQAEgDAEAAQALAAABAPIABAOQATgbAUAAQATAAAHARQAFALABAWIAAALIAAAKQAAAKACAQQADAPAAAJQAAAGgEADQgDADgFAAQgKAAgBgLg");
	this.shape_18.setTransform(7.1,-79);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgLBVQgDgDAAgFIAAgWIgBgVIABgbIACgaQAAgGADgDQADgDAFAAQAEAAADADQAEADAAAGIgCAaIgBAbIABAVIAAAWQAAAFgDADQgDADgEAAQgGAAgDgDgAgHhAQgEgEAAgFQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAGQAAAFgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_19.setTransform(-2.6,-81.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgnAyQgTgOABgbQAAgdAOgUQAQgXAbAAQATAAAMAGQAPAJAAARQAAALgNAKQgGAEgTAIIgsAVQAHAKAKAFQAJAEAMAAQAJAAAKgCQAOgEAEgGQAFgHAEAAQAEAAADADQADAEABADQAAANgWAKQgRAIgSAAQgZAAgQgOgAgYgeQgJALgEAVIAkgQQATgLAJgHQgKgKgRAAQgOAAgKAMg");
	this.shape_20.setTransform(-12.5,-78.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgjBYQgEAFgFAAQgEAAgDgDQgEgDAAgFIAAgJIAAgJIAAglIgBgkIAAggIAAghQAAgHADgGQAFgHAHAAQAIAAAAAKIAAAFIgBAFIgBAaIAAAeQAKgHAKgEQAJgDAHAAQAZAAAQATQAPARAAAbQAAAagRATQgSATgZAAQgRAAgPgHgAgSgFIgRALIAAAUIAAASIAAAUIAQAGQAHACAJAAQAQAAALgMQALgLAAgSQAAgSgJgLQgJgMgQAAQgJAAgKAFg");
	this.shape_21.setTransform(-26.2,-82);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgTBkQgDgDAAgFIAAgCQADgPAAgSIgBggIAAghIgSABQgMAAAAgMQAAgLAVgBIALAAIACgSQADgaAKgMQALgPAaAAQARAAAAALQAAALgQAAQgcAAgDAoIgBAHIAagBQATAAAAALQAAAJgKACIgJAAQgFAAgWACIgBAZIABAWIAAAWQAAAWgCANQgBAJgJAAQgFAAgEgDg");
	this.shape_22.setTransform(-47,-81.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgiAyQgQgRgBgbQgBgZAOgUQARgYAcAAQAXAAANAVQAJASAAAYQgBAZgNASQgPAVgYAAQgTAAgOgOgAgUgXQgIANAAAQQAAARAJAKQAJAHAJAAQAMAAAIgIQAKgKABgRQACgsgaAAIgBAAQgQAAgJAQg");
	this.shape_23.setTransform(-59.4,-78.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgoAyQgRgOgBgbQABgdAPgUQAQgXAaAAQATAAAMAGQAPAJAAARQAAALgNAKQgGAEgTAIIgrAVQAGAKAKAFQAKAEALAAQAJAAAKgCQAPgEADgGQAEgHAFAAQAEAAAEADQACAEAAADQAAANgUAKQgSAIgSAAQgZAAgRgOgAgYgeQgJALgFAVIAkgQQAUgLAKgHQgLgKgRAAQgOAAgKAMg");
	this.shape_24.setTransform(-79,-78.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgHBTQgDgDAAgFIAAgNIABgOIgDhEIgagCQgKgBAAgKQAAgFADgEQADgDAFAAIAZACIgBgQIAAgPQAAgEADgDQADgEAFAAQAKABACAQIAAALIAAAGIAAAIIAQgCQANAAADACQAHABAAAJQAAAFgDAEQgDADgFAAIgGAAIgGgBIgQACIADBEIAAAGIAAAGQAAAagMgBQgEAAgEgCg");
	this.shape_25.setTransform(-91.5,-80.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAlA8QgFgEgCgFIgUAKQgJADgEAAQgcAAgMgPQgMgPAAgeQAAgcATgTQAUgVAaAAQAKAAANAGQAQAGAAAKQAAADgDACIgBAPIgBAZQAAAOACAIQABAGAGAQIADAFIAAADQAAAEgDADQgDADgEAAQgDAAgGgFgAgTgcQgNAOAAATQAAATAHAJQAGAKAOAAQAKABAIgFQAEgCAIgGQgEgfAAgPIABgLIACgNIgIgDIgFgBQgRAAgNAPg");
	this.shape_26.setTransform(-103.2,-78.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgHBTQgDgDAAgFIAAgNIABgOIgDhEIgagCQgKgBAAgKQAAgFADgEQADgDAFAAIAZACIgBgQIAAgPQAAgEADgDQADgEAFAAQAKABACAQIAAALIAAAGIAAAIIAQgCQANAAADACQAHABAAAJQAAAFgDAEQgDADgFAAIgGAAIgGgBIgQACIADBEIAAAGIAAAGQAAAagMgBQgEAAgEgCg");
	this.shape_27.setTransform(-115.1,-80.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AggBBQgSgGAAgMQAAgFAEgDQADgEAFABQADgBAHAGQACADAKACIANABQAJAAAIgCQAKgEABgHQgBgQgWgGIgLgCQgQgEgGgFQgKgFAAgNQAAgZAXgKQAIgEAOgEIAWgHQAFgCAFgBQAFABAEADQADADAAAFIACAKIABALQAAAFgEADQgCADgGABQgGgBgDgEQgCgDgBgKIgbAJQgRAHgBALIAHACQAaAEANAJQAUALgBAYQAAATgQAKQgOAHgUABQgPgBgOgFg");
	this.shape_28.setTransform(-126.8,-79.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgsA2IAAhRIAAgMIAAgMQAAgMAKAAQALAAABAUQAWgWAbAAQAJAAAFAHQAEAIAAAOIAAAIQgBAPgKAAQgKAAAAgMIAAgIIgBgKQgSACgLAJQgKAHgHAQIAAA/QAAAMgMAAQgKAAABgMg");
	this.shape_29.setTransform(-144.9,-78.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgiAyQgQgRgBgbQgBgZAOgUQARgYAcAAQAXAAANAVQAJASAAAYQgBAZgNASQgPAVgYAAQgTAAgOgOgAgUgXQgHANgBAQQAAARAJAKQAIAHAKAAQAMAAAIgIQAKgKABgRQACgsgaAAIgBAAQgQAAgJAQg");
	this.shape_30.setTransform(-157.5,-78.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAPB1QgwgcAAhYQAAgfAMghQAPgkAWgQQAFgDACAAQAFAAADADQADADAAAEQAAAFgHAHIgLALQgNAPgHAbQgFAYgBAWQAAA8AaAcIALAIQAHAFAAAGQAAAEgDADQgDACgEAAQgDAAgGgCg");
	this.shape_31.setTransform(-167.7,-79.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF0000").s().p("AguBRQgWgKgBgRQAAgFAEgDQADgEAFAAQAGAAAEAHQAGAJAFADQAKAHATAAQARAAAQgIQAUgKAAgSQAAgPgRgJQgOgHgUgBQgTAAgNgHQgQgJAAgSQAAgVAXgRQAXgQAXAAQALAAAPAEQATAFAAAIQAAAKgLAAIgQgDQgMgCgGAAQgSAAgMAJQgOAJAAANQAAAKASAEQAGABASABQAbACAPAPQAOANAAATQAAAcgaARQgXAOgcAAQgWAAgRgIg");
	this.shape_32.setTransform(107.4,-116.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF0000").s().p("Ag2BaQgEgFgBgFIAAgiIACgvQADghAAgPIACggQAAgGADgCQAQgFAUAAQAUAAATAOQAWAQAAAYQAAAegYARQASAHAJAJQAIAJAAALQAAAOgPAOQgLAJgLAFQgZAKgpAAQgGAAgEgFgAgjAvIAAAYQAfgBARgIQAJgDAIgHQAGgGABgDQAAgFgQgHQgLgFgKgDIgMgCIgEAAIgFAAIgNgBIgBAbgAgfhFIAAAUIgCAuIASABQAQgBAMgKQAMgKAAgRQAAgLgMgJQgNgKgNAAIgSABg");
	this.shape_33.setTransform(91.9,-117.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF0000").s().p("Ag7BZQgDgEAAgFIgBgbIgBgcQAAgLACgUQADgVAAgLIgBgSIgCgRQAAgHAEgFQAFgGAHAAIAdACQAQACAKAGQAvAaAAAkQAAASgQAMQgNALgTAGQAkAUASAVQADAEAAAEQAAAFgDAEQgEAEgFAAQgEAAgEgEQgngngugNIABAXIAAAXQAAAFgDAEQgEADgFAAQgFAAgDgDgAglg0IABAPIgBAXIgDAWIAFAAIAGAAQAdAAAOgIQAHgCAFgGQAHgHAAgEQAAgQgTgOQgQgNgSgCIgSgCg");
	this.shape_34.setTransform(76.5,-117.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF0000").s().p("AgzBaQgLgKAAgmIABgQIAAgTIgBgGQAAgDACgDQADgiAAgQIgBgNIgCgNQAAgOAMAAQAFAAAEAEQAOgEAMgCQANgCAKAAQAcAAARAHQAIADAAAIQAAAFgDAEQgEAEgFAAIgDgBQgUgGgSAAQgKAAgKACQgMACgNADIABANIgCAsIAzgFIAbgCQAFAAAEADQADAEAAAFQAAAKgKABIgcADIg1AFIgBAPIAAAOQAAAaADAFQADADAQAAIAVAAIAWgBIAGgBIAHAAQANAAAAAMQAAAKgKACQgLACgkAAQgkAAgLgKg");
	this.shape_35.setTransform(61.5,-117.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF0000").s().p("AgVBVQgOgjgRhCIgJggQgHgZAAgHQAAgFADgEQAEgDAFAAQAJAAACAKIAFAUIALAoQALAqALAgIAAgCIAfhUIAKgdQAGgRAIgJQAEgFAFAAQAFAAAEAEQADAEAAAFQAAADgCAEQgHAKgFAMIgJAaIgfBUQgGAPgHAPQgDAHgHAAQgJAAgEgKg");
	this.shape_36.setTransform(46.6,-117);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF0000").s().p("AgzBaQgLgKAAgmIABgQIAAgTIgBgGQAAgDACgDQADgiAAgQIgBgNIgCgNQAAgOAMAAQAFAAAEAEQAOgEAMgCQANgCAKAAQAcAAARAHQAIADAAAIQAAAFgDAEQgEAEgFAAIgDgBQgUgGgSAAQgKAAgKACQgMACgNADIABANIgCAsIAzgFIAbgCQAFAAAEADQADAEAAAFQAAAKgKABIgcADIg1AFIgBAPIAAAOQAAAaADAFQADADAQAAIAVAAIAWgBIAGgBIAHAAQANAAAAAMQAAAKgKACQgLACgkAAQgkAAgLgKg");
	this.shape_37.setTransform(16.6,-117.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF0000").s().p("AgwBIQgQgSAAgZQAAgmAhgqQAcgjAbAAIAKABIAIABQAFgGAGAAQAIAAACALQACAJAAAOQAAAFgCAEQgEAEgFAAQgIAAgEgJQgDgHgDgCQgCgBgKAAQgRAAgUAaQgcAjAAAeQAAAPAKALQAKAMAOAAQALAAAMgHQAHgDAOgKQAHgFADAAQAFAAAEADQADAEAAAFQAAAFgEAEQgfAcgfAAQgYAAgRgTg");
	this.shape_38.setTransform(1.8,-117.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF0000").s().p("AhOBbQgDgDAAgFIABgPIAAgPIABgWIAAgWIAAgWIgBgXIgBgWIgCgWQAAgGAFgEQAFgFAFAAQAHAAAJAOQAdAsAXAdQAbAhAhAfIAAgPIAAgOQAAgzgEgeIgDgMQgDgIAAgFQAAgOANAAQAVAAgBBNIAAAlIAAAnIgCATQgCAMgLAAQgHAAgIgJQgwgtg9hUIAAAbIgBAaIABAdIAAAdQAAAggMAAQgGAAgEgFg");
	this.shape_39.setTransform(-15.1,-117.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF0000").s().p("AgzBaQgLgKAAgmIABgQIAAgTIgBgGQAAgDACgDQADgiAAgQIgBgNIgCgNQAAgOAMAAQAFAAAEAEQAOgEAMgCQANgCAKAAQAcAAARAHQAIADAAAIQAAAFgDAEQgEAEgFAAIgDgBQgUgGgSAAQgKAAgKACQgMACgNADIABANIgCAsIAzgFIAbgCQAFAAAEADQADAEAAAFQAAAKgKABIgcADIg1AFIgBAPIAAAOQAAAaADAFQADADAQAAIAVAAIAWgBIAGgBIAHAAQANAAAAAMQAAAKgKACQgLACgkAAQgkAAgLgKg");
	this.shape_40.setTransform(-32,-117.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF0000").s().p("AgHBWQgEgDAAgGIABgFIAAgFIgBgRIgBgSQAAgQgDgeIgCgvIgLAAQgaAAgPgDQgJgDAAgJQAAgFADgEQADgEAGABIATACIATABIAVAAIAUAAIAbABIAbABQAFAAADAEQAEADAAAFQAAAFgEAEQgDADgFAAIgbgBIgbgBIgIAAQABAQADAkQACAhAAATIABAMIAAANQABAIgDAFQgDAIgHAAQgEAAgDgDg");
	this.shape_41.setTransform(-46.9,-117.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FF0000").s().p("AguBRQgWgKgBgRQAAgFAEgDQADgEAFAAQAGAAAEAHQAGAJAFADQAKAHATAAQARAAAQgIQAUgKAAgSQAAgPgRgJQgOgHgUgBQgTAAgNgHQgQgJAAgSQAAgVAXgRQAXgQAXAAQALAAAPAEQATAFAAAIQAAAKgLAAIgQgDQgMgCgGAAQgSAAgMAJQgOAJAAANQAAAKASAEQAGABASABQAbACAPAPQAOANAAATQAAAcgaARQgXAOgcAAQgWAAgRgIg");
	this.shape_42.setTransform(-64.3,-116.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF0000").s().p("AgyBWQgEgDAAgFQAAgGAEgDQACgEAGABIAYgDQACgKAAgMIgBgTIgBgUQAAgaAEgpIgQABIgPAAQgFABgEgEQgDgEAAgFQAAgLALAAIAkgBQAWAAAkAEQAJACABALQAAAFgFAEQgDACgFABIgSgCIgTgDQgDAiAAAfIAAAUIABAUIgBAUIAlAAQAFAAADAEQAEACAAAGQAAAFgEAEQgDADgFAAIgTAAIgUAAIgWACIgXACQgGAAgCgDg");
	this.shape_43.setTransform(-79.3,-117);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FF0000").s().p("AA4BaQgJgIgJgOIgQgYIgSgbIgnAvIgWAYQgEAEgFAAQgFAAgDgEQgDgDgBgFQAAgFADgDIAWgXIAsgyIgcgjIgOgTQgHgKgIgHQgEgDAAgGQAAgFADgEQADgDAFAAQAKAAAPAVIAQAUIAXAgIAbglQAagkAIAAQAFAAADADQAEAEABAFQAAAEgEAEIgYAfIgOAWIgRAUIAaAlQAQAWALAOQADAFAAADQABAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_44.setTransform(-94.6,-116.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FF0000").s().p("AgzBaQgLgKAAgmIABgQIAAgTIgBgGQAAgDACgDQADgiAAgQIgBgNIgCgNQAAgOAMAAQAFAAAEAEQAOgEAMgCQANgCAKAAQAcAAARAHQAIADAAAIQAAAFgDAEQgEAEgFAAIgDgBQgUgGgSAAQgKAAgKACQgMACgNADIABANIgCAsIAzgFIAbgCQAFAAAEADQADAEAAAFQAAAKgKABIgcADIg1AFIgBAPIAAAOQAAAaADAFQADADAQAAIAVAAIAWgBIAGgBIAHAAQANAAAAAMQAAAKgKACQgLACgkAAQgkAAgLgKg");
	this.shape_45.setTransform(-110.4,-117.3);

	this.instance_1 = new lib.introtoverbsofbe();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-34.4,-2.3,1,1,0,0,0,61.8,89.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.intro, new cjs.Rectangle(-174.5,-136.9,346.4,173.2), null);


(lib.bubintro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// Layer 1
	this.instance = new lib.bubintrostill();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({x:17.2},0).to({x:19.2,alpha:1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115.8,-125,230.4,250.1);


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
		
		 window.open ("pred_Scene3.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("pred_Scene1.html","_self");
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


(lib.slimintrostill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tobeMouth();
	this.instance.parent = this;
	this.instance.setTransform(2.4,-68.6);

	this.instance_1 = new lib.tobeeyes();
	this.instance_1.parent = this;
	this.instance_1.setTransform(2.9,-91.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3.5,1,1).p("AADAAIgFAA");
	this.shape.setTransform(-8.6,126);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C6FFFF").s().p("AgCACIAAgDIAFADg");
	this.shape_1.setTransform(-8.6,125.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009933").s().p("ABLEOQgHgRgDgSQgDgNAAgMIgBgfIAAgiIgCgjIgEgiIgFghIgIggIgJghIgKggIgGgQIAAFbIgRADIgSgEQgMgFgIgNQgIgOgFgQIgJggIgEgUQgHAGgGgHQgNgOgDgRIgCB/IgOAEIgPABQgLAAgKgCQgDgDgGAAIgTgBIgJgDIgfgKIgWgGIgRgOIAAgLQgBhDADhCIADgZQADgUgNgKIA2gXIAAgyIgZgLQADgjAJgiIAFgTIAEglQABgOgHgJIABgBIBDAJQgOgFgMgHQgGgEgEgFIgHgMIgFAOIgKgIIAKg7IAOgFIALgOIANATIgHAQIAugGIgdBMIA5AUIgBBlQAFgJAEgKQAHgVAOgKIANguIAjAEIgBgFQgnAEgigVIgBgBQgFAEgFAAQgJAAgGgKQgGgKAAgOQAAgPAGgKQAGgKAJAAQAHAAAGAIQATADASAGQANAFANACIAAgDIAbABIABAGIAHAAQAGABAFABIAlABIAEgBIAAABIAQABIACAAIADgDIAPALIgCAhIhmAPIB1gJIACACIAFABIgBAZQAABCAGBBIABgEQAAAAAAAAQAAgBAAAAQAAgBABAAQAAAAABgBIABAAIAEgBQAQAKAJATIAEAKIgEiiIgfgXQAVAFAXgFQAngHAngKIADgBIACAgIgKAJIACGhIgEgFQgDAJgHAEIgCgBQgSADgUABIg+ABIgEgDIgGABIgFACIgjABIgIgWgABxjWIAiADQAEgDAHgBQAQgCAPgGIAYgIIAggIIADABIADgJIABALQALAFgLAKIACAVIgJgBQgDACgDABIgKABIgNADIAFgCIgSACIACADQgnAIgpACIgEABIgIgig");
	this.shape_2.setTransform(-9.7,60.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhVA7IACAAIABgBIABgBIAAgCIAAgBIgDgFIgBgDIgCgBIAAgCIAAgBIgBgCIgBgBIgCgCIAAgCIAAgBQgDgOABgPIABgDIABgBQAIgGAGgJIABgBQAagTAiAJQADASgCASQAAAFACAEIABABIgDAZIg9AagAhrAXIAEgLIABAUgABEALIgPgIQgEgDgCgGIgBgBIACAAQAFgGgCgIIgDgWIABgGQABgJAIgCIAkABIAEAGIAGAAIADAOQAEAagSATIgKADIgBAAQgGACgFAAIgDAAgAAigqQgBgJACgHIABAbIgCgLgAArhFIACgBIADgBIgGADIABgBg");
	this.shape_3.setTransform(0.9,-92);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC99").s().p("Ag5TpIAIgJIAHlEIB1AAIAVAHIAAACIgEA2IgDAkIgBAkIgCAjIgDAjIgBAjIgCAiIgBA3IAPADIAAABgAjlTpIAAgBQAKgGgCgLIgBgVIgBgWIgCgWIgBgWIgBgWIgCgWIgCgWIgDgWIgBgWIgDgWIgDgWIgDgWIgDgWIgDgWIgDgWIgCgIIAeADIAYAEQA7AMA8ACQANAHgDAVQgCAMAAANQgDBCACBDQABBAgHA/QAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAIgBAMIAAAFgAqVM9IAAAAIB3irIgrARQhHB2h/AWIACgNIAOgVICDhZIAzgwIhMAfIgDAKIiDBNIgigDIDTiNIj1BMIAJgTIALAAIAKgCIAMgEIAYgIIAXgJIAjgOIAagIIAMgFIANgFIAagLIAMgEIAMgFIALgFQASgHAOgLIgBgHIgFgCIAAgBIAAgDIABgHIgBgHIgEgyIgEgnIgFgsIgHgqIgDgUIgCgUIgDgoIgCgVIgBgTIgCgUQgEgwgIgtIgCAHIgBgMIAAgOIgBgqIAAgFIAAgDIACgLQACgGgBgHIgBgGQABgOAEgMQADgNAHgKQAEgIAGgHQAJgJAFgLIAXgrQAPgdAXgVIAEgFIAMgSQAUgaASgbIAPgXIAIgKIAbgjIAJgMIAKgMIAMgOIAMgLIAMgMIALgKQAhgcAdggIAEgCQARgNAPgPIALgLIAWgXQAJgIAKgGQAHgFAIgBQAHgCAGABIAeAEIARAAIAIAEQAXAFAUgLIAHgFIACgRQgBgNgDgNIgEgTIgFgIIgOgaIgHgIIgHgIIgLgSQgWgngYglIgCg9IgkAdIgegOIgEgeQgBgIABgJIABgRIADgQQAJgsAbgiIA9AEIAwhbIAZAfIAHgtIAMgIIALgJIAMgIQAcgVAbgXIgOA0IAMgHIATAOIAtgdIAaA0IgbgEQgGAAgDAGIgDABIgCAAIgBACIgGABIgBAJQgCAHABAIIADAMIABAJQABAMAIADIAAABQACAFAEAEIAEASIBpADIgCAKQgCAHgDAGQgEAGgFAEQgIAIgLAGQgKAHgLADQgKAFgMADIgZABIA/AeQABARgBASQgBASgFASIgFASQgDAIgGAIQgIAMgJAKIgRAQQgNANgJAPQgNARgGATQgGATAAAUIABAGIAAAIQACAOAFANQACAIAHAFQAGAFAIADIAkADIAkACQAbACAdAAIATABIAKABIACAAIAsABIArAAIAqAAIArABIBCABIArAAIAWAAIAqAAIAgABIAeABIARABIAQAAIAbADIAaADIAaADIAZADIgMgPQgPgSgRgQIgsgnIgJgHIgMgIIgUgOQgMgHgIgIIgUgPIgVgSQgQgLgOgMIgUgPIgLgIIgKgIIgPgMIgPgLIgcgXIgzgsQgLgJgJgKQgKgKgKgJQgIgHgJgGIgOgJIgMgGIhnhWIgBgCQgDgSgCgSIgBgRIADgDIAGAAIABABIAFgFQAGAAAHACQALADALAGQAHAEAHAHIAAAEIASAOIASANIAfAaIASAOQALALANAJQAaASAbAVIAeAXIAbAVIAZASIATAMIASAMIAPAKIANAKIAJAIQATAOATALIAIAEIAHAEIAPALIAHAGQAKAEAJAGQAMAJALAKIAbAVIAVARIAKAIIAKAIIATAQQAOAMAMAMIAaAcIABABIACAIQAFAJAEAJQAEANADAPIADAVIgMAEQgRAGgTACIgTACIgUABIgnACIgnADIgnACIgnACIg6ADIgnACIgUABIgnACQgdADgdAAIg7ADIg6ADIgnADIgnACIgeAAIgnACQAEACADAEQAGAHAEAIQAHAJACALIAGATIAGASQAHAVACAXIABAEQAFAIACAKQAGAYgBAaIAAAFQAAAsABAsQABAtgCAsQgEArgBAtQAAAsgJArIgBAPQgBAPgDAMIgCAMIgEAfQgCAJgEAJIgJARIAAAbIhjBFIgjACIgjABIgngDQgUgBgTgDIgfgEIgggFIgfgHIgggJQgNgEgDgOIgCgcIgBgcIAAgdIACgeIADgeIAGgeIAIgjIAKgiQgBgLACgKIAAgBIAFhYQADgsABgsQAAgIACgIIgCguIgCgMIgFgeIgGgfIgFgZIgHgaIgIgiIgiAiIgJAKIgeAdIgKAJIgUATIgTASIgSASIgSASIgSASIgSARIgSASIgSASIgSARIgKAJIAAAFIgJALIgQAYIgNARIgQARQgIAIgFAIQgFAIgEAIQgGAQgEARQgEARABASIAAAOIACAOIACAqIACAcIACANQADAWABAUIAAANQABAcAEAbIADAcIABAbIADAcIADAbIACAcIADAbIADAcIACAbIARASQAPAOARANQAJAGALADIAXAHIAtACQAGgCAGACQAlADAlAHQgHAPgSAAIgnACIgkAGQgQAFgQAHQgPAGgOAIQgOAJgLALQgNALgLANQgKANgJAPIgRAgQgeA4g9ASQgGACgIABgAiXBtIABAAIgBgBIAAABgAmfkeIABAAIAAgBIgBABgAj5ssQAFAFAFADQAAAAABAAQAAAAAAAAQABAAABAAQAAgBABAAIAAgRQgIgIgDAAQgGAAADASgAglvBQgSADgOAKQgEADgBAEIgDACIgNANIgBABIAAAQIgEALIAFAIIAAABIABAKQAFANALADIAJANIA+gaIACgZIACABIADgBIABgBQADgRAAgTQAAgLgGgJIgDgBQgLgDgMAAIgOABgAnkg9IAAAAIgDAEgAM5orIACABIAJAKgAHjsqIAHAEIgBABgAGktaIADABIAAABgAGKtsIgTgMIAKAFIALAJIgCgCgACzuqIgBgBQgSgDgOgOQgGgHgEgIIgLgXIAKgJQAJgIABgNIABgOIgCgrIAIAFQAZAOAagPQAKgGAGgIIAIgLQgBgDADgFQACgGADgDQAGgFAGgCQAEgGABgHQACgRgEgQQgGgUgLgRQgFgJgDgLQgDgLAJgGQAEAAADACIADgJIAdBDIgDgDIADAMQADANgBAPIgBAKIANgJIgBgIQgLgCADgOQABgIgBgHQgCgTgKgQQgCgFAAgFQgBgQANgIQAMgCAFAGIAIgBIAHALQAMAXgFAaQgDAOgEANIgOAjQASAAAFgOQAFgPAEgPIAEgXQgCgEACgHQADgKALgFQANACAEAOQADAJgBAJQAAARgKAOIgOAWQgKARgNAOIADgCIANgMIAFgIQAEgKAKgFIAIgEQARgDACAQQACASgOAMIgOANIgNAOQgEAJgJAGQAAAEgHAEQgGAEgIABQgOADgLgGQgGgDgDgFIgCgBIgEgBIAFAUQAKAEgFANQgBAGgHADIgsARQgHADgGAEQgIAHgFAIIgDACIAAACQACAOADANQADAEgBAFQgBAFgFACQgIgBgEgHgABvv4IgHhOIAggkIAQAEIgVBvgAALw/IABgDIAFAFg");
	this.shape_4.setTransform(-0.3,0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("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gBAEIAEgCQACADAGAAQADgBABgEIABgDIAzgWQAHgKACgOQABgIgBgHQgBgJgDgHIgGgMIgCgNIgBgBQgDgMgEgMIABAAIgGgJIAAgBQgBgGgEgCIABgVIALgIIAUACQABACAEABQALAFANgDIAEgBIAGgDIATABIAGADQAGACACAGQACAIAFAHQABADAEABIASADIALAGQAEADADAEIAEAzIAVANQAEARgCARIgEATQgCAJgFAJQgIASgNAMIgQAOIgTALIgcAOIgeANIgNAFQAEAOAKAJIAGAFIASAMQANAJANAKIAwAmIAWATIgKgFIATAMIACACIAYAQIADACIAXARIAcAWIAdATIAeATIAUAOIAFADIhEgsIgHgEIAGAFIARALIAQAMIAaATIAhAWIAEAEIASALIAfAWIAUANIAdAUQAPAJAOALIAZATIAYAWIAOAOIAVARIAdAYIALALIgJgKQAEACADAEQANAQANASIAAAAIAAABIADAQIADAQIADAQIABASIgBAPIgBACIgEgBIgTAEIgVAEIgWADIgVADIgUAEIgVACIgVADIgqAFIgpAEIgrAEIg/ACIgqACIgpABIgrAAIgqAAIgVAAIgVgBIgVAAIgWgBIgVgBIgVgCIgVgCIgWgCIADAQIAGAgIAFAgIAFAgIADAeIACAgIACAfIACAeIABAfIAAAeIgBAfIgCAeIgCAdIgDAeIgFAeIgDAdIgCAcIgBAlIgCAkIgCAUIgBATIAAATIgCASIgBATIgBASIgBATIAAASIgBATIAAASIAAATIAAASIAAATIAAASIABASIABAqIABBGIgBAvIgCBHIgCAuIgDAvIgFAuIgDAiIgDAKIgEAKIgEAJIgJAOIgGAHQABADgCAFQgCAFgHAAIgGABIgDADIgJAEIgJAFIAAABQgEADgBAHQgHAzABA0IAACHQAAANgDAMQgCAOAGAHIgCAGIgJAUIgPgCIABg3IACgjIABgjIADgjIACgjIABgkIADgkIAEg2IAAgCIgVgHIh1AAIgHFEIgIAJQgCAHgFACIgCACQgKgCgDgJgAhJImIAKAgIAJAiIAIAgIAFAhIAEAiIACAjIABAiIAAAeQAAANADANQAEASAGARIAJAVIAhAAIAFgCIAGgBIAEADIA+gBQAUgBASgEIADACQAGgFADgIIAEAFIgCmiIAKgKIgCgfIgDABQgnAKgnAHQgWAFgWgFIAfAXIAECiIgEgKQgIgTgRgKIgEABIgBAAQAAAAgBABQAAAAAAABQgBAAAAAAQAAABAAAAIgBAEQgGhBAAhCIABgZIgEgCIgDgBIh1AJIBmgQIACggIgNgLIgDADIgDAAIgQgBIAAgBIgEABIglgBQgEgCgHAAIgHAAIAAgGIgdgBIAAADQgNgDgNgEQgSgGgTgDQgFgIgIAAQgIAAgHAKQgGAKAAAOQAAAPAGAKQAHAKAIAAQAFAAAFgEIABABQAiAVAogEIAAAFIgjgEIgMAtQgPALgHAUQgDALgGAIIAChlIg6gTIAdhNIgtAGIAGgPIgNgTIgKAOIgPAFIgKA7IAKAIIAFgPIAIANQADAFAHAEQAMAGANAGIhDgJIAAABQAGAJgBAOIgEAlIgEATQgKAigDAjIAZALIAAAzIg1AXQAMAJgDAUIgCAaQgEBCACBDIAAALIAQAOIAWAFIAfAKIAJADIAUACQAGAAACACQAKADALAAIAPgCIAOgDIACh/QAEARAMANQAGAHAHgFIAEAUIAJAgQAFAQAIAOQAIANANAEIARAFIASgEIAAlbIAGAQgAjwkyIgEACQgGACgDAFIgeAbIgpAlIgUATIgJAJIgJAJIgKAJIgJAKIgJAJIgJAJIgJAJIgJAKIgIAKIgJAJIgJAKIgIAKIgJAKIgIAJIgJAKIgKANIgDAEIgVAhQgKAOgMAMIgQAUIAABFQABAsADAuIADAtIACAVIADAXIACAWIACAXIADAWIAEAWIACAWIAAACIgCAPIAAANIAAADIADAIIADAGIACAPIAAAOQgBAgAMAfQAFANAIAMQAEAHAHADIALAIIAIAFIAOADIAOACIAiABIAIgBIABgBIALgCIAKAAIAFAAIACgBIABAAIAGgEIAFACQAGgDABgFIAAgHIACgBIAAgDIADgiQABgPAFgOQAHgZABgaIgBgCIAAgJIABgHIgBgJQAAgEAEgDQAIguATgsQAJgHAFgLQADgHAAgFIAFgFQAKgKAHgNQADgIACgHIAEgPIADgQIAEgPIAEgQIACgPIADgQIAEgYIAEgWIADgXIADgYIACgWIADgZIABgWIABgYQACgjAAgkQAAgvgEgxIgFgiIgBgJIgDgHIAAgGIAAgIQAAgFgDgDIgDgJIgDgLQgCgFgEgCIgCAAgAAYGoIAFgBQAogCAogJIgCgCIARgCIgEACIAMgDIAKgBQAEgBACgCIAJABIgBgVQAKgKgLgGIAAgKIgEAJIgDgBIggAIIgYAIQgPAGgQACQgGABgFADIgigDIAIAigAjoxfIgSDIIATAEIAVi/IAEAUIADATIACAUIAAASQAAAUgCAUQgDATgFAUIgGARIAfAEIAGgXIAHgXIAIgUIAIgTQAFgMAEgMQACgHgBgIIgCgPIgCgJIgHgpIAeBhIAUAFQAFgNABgMQAFgrACgrgACPwMIgBAOQgBAOgJAHIgKAJIALAYQAEAHAGAHQAOAOASADIABABQAEAHAIABQAFgCABgFQABgFgDgDQgDgOgCgOIAAgCIADgCQAFgIAIgHQAGgEAHgCIAsgSQAHgCABgHQAFgNgKgDIgFgVIAEABIACACQADAEAGADQALAHAOgEQAIgBAGgEQAHgEAAgEQAJgGAEgJIANgOIAOgNQAOgMgCgRQgCgRgRADIgIAEQgKAGgEAJIgFAIIgNAMIgDACQANgOAKgRIAOgVQAKgPAAgRQABgJgDgJQgEgOgNgBQgLAEgDAKQgCAHACAEIgEAXQgEAPgFAPQgFAOgSAAIAOgjQAEgNADgOQAFgagMgWIgHgMIgIABQgFgFgMABQgNAIABARQAAAEACAFQAKAQACAUQABAGgBAIQgDAOALACIABAIIgNAJIABgKQABgPgDgNIgDgMIADADIgdhDIgDAJQgDgCgEAAQgJAGADALQADAMAFAIQALASAGATQAEARgCAQQgBAHgEAHQgGABgGAFQgDADgCAGQgDAFABADIgIALQgGAJgKAFQgaAPgZgOIgIgEIACAqgABlxEIAHBOIAUABIAVhuIgQgFgAAqw0IgUALIgFAbIAzgkIAIAGIgChaIgNgBgAhbwYIAWAJIABgBIAKgZIAVACIAEhHIgOgBIgJBDIgHgrIgVgCgAgPw6IAXgDIAGACIgFgFIgEgyIgMAAgAqKM9QA9gTAeg4QAAAggfAWQgfAXgrAAQAIgBAGgBgAqiM2IAng6QgeAIgXAXIgCACIgDAAIAAAAIgQALIgUAEIgHACIgnALIgIgBIgDgBIgFgFIAAgBQAAgDgBgCQABgDgCgDIAXgXIAFgQQghALgigJQgFgBgEgFIABgEIACgDIAPgTIAAgBIAAAAQABAAAAAAQABgBAAAAQABgBAAAAQAAgBAAAAQAdgTAggLQAGgDAEgEIAAAAQATgLASgMQADgCABgCQAEgLgLAAIgDABIAAAAIgDAAQAAAAAAAAQgBABAAAAQgBAAAAABQAAAAgBABIAAABIgEgBIgBAAIgEACQgIAEgIABQgQACgOAHQgEABAAADQgUAGgSAKQgCACgFABQgTAEgTgDIAAgFID1hNIjTCNIAiADICDhMIADgKIBMggIgzAwIiDBZIgOAVIgCANQB/gWBHh1IArgSIh3CrgAtHLbIABAAIgBAAgAnkH6IAAAAIAAAEIAAgEgAiaBvIAAgBIABACgAmikcIABgBIAAABgAjysiQgFgCgFgGQgFgfATAVIAAARIgDABIgBAAgAhMtdQgLgDgFgNIgBgJIAAgBIgBgUIAAgPIABgCIANgNIADgCQABgDAEgEQAOgKASgCQATgDATAEIACABQAGAKAAAKQAAATgDARIgBACIgCAAIgDgBIgBAAQgBgEAAgFQABgTgCgTQgjgIgaASIgBACQgGAJgIAGIgBACIgBADQgBAPADAOIAAABIAAACIADACIABABIABACIAAABIAAABIABACIABADIADAEIAAACIAAACIgBABIgBABIgCgBgAitxJQABA1gBA0QABAJgEAGQgEAFgHACg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#996633").s().p("AijB3IATjHICIgIQgBArgFAqQgBAMgFAMIgUgFIgehgIAHApIACAJIACAQQAAAHgCAHQgDALgFAMIgIATIgIAUIgHAXIgGAXIgfgEIAGgRQAFgTACgUQADgUAAgTIAAgSIgCgUIgDgTIgEgUIgVC+gAhjBDQAHgBAEgGQADgFAAgKQABgzgBg1gABugaIAUgMIAThTIAMABIADBaIgIgGIgzAkgAgDgKIAGhBIAVACIAHArIAJhCIANABIgDBGIgVgCIgKAZIgBABgABPhkIAOAAIAEAyIgCADIgXADg");
	this.shape_6.setTransform(-8.8,-103.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.slimintrostill, new cjs.Rectangle(-86.7,-126.9,173.4,254.7), null);


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


(lib.slimintro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_44 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(1));

	// Layer 1
	this.instance = new lib.slimintrostill();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({y:-28.6},0).to({y:-30.1,alpha:1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.7,-126.9,173.4,254.7);


(lib.content_scene2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.prointro();
	this.instance.parent = this;
	this.instance.setTransform(51.4,246.9,0.581,0.581,0,0,180);

	this.instance_1 = new lib.slimintro();
	this.instance_1.parent = this;
	this.instance_1.setTransform(334.2,252,0.445,0.445,0,0,180);

	this.instance_2 = new lib.bubintro();
	this.instance_2.parent = this;
	this.instance_2.setTransform(375.5,146.4,0.351,0.351,0,0,180);

	this.instance_3 = new lib.intro();
	this.instance_3.parent = this;
	this.instance_3.setTransform(208.1,154.6,1.129,1.129);

	this.text = new cjs.Text("", "36px 'ComicSansMS'");
	this.text.lineHeight = 52;
	this.text.parent = this;
	this.text.setTransform(370.5,71);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.content_scene2, new cjs.Rectangle(2.6,0,413.5,309.8), null);


// stage content:
(lib.pred_Scene2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene2:0,scene2_repeat:158});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_4 = function() {
		playSound("existenceverbsorstateofbeing");
	}
	this.frame_50 = function() {
		playSound("theverbsofbeare");
	}
	this.frame_76 = function() {
		playSound("beamisarewaswerebeingbeen");
	}
	this.frame_176 = function() {
		this.gotoAndPlay("scene2_repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(46).call(this.frame_50).wait(26).call(this.frame_76).wait(100).call(this.frame_176).wait(1));

	// Layer 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AoWJJIAAlUIBkAAIAAFUgA6yDDIAAlxMAmbAAAIAAFxgAxujWIAAlyMAshAAAIAAFyg");
	var mask_graphics_42 = new cjs.Graphics().p("A6yGGIAAlyMAmbAAAIAAFygAxugTIAAlyMAshAAAIAAFyg");
	var mask_graphics_43 = new cjs.Graphics().p("AoWJJIAAlUIBkAAIAAFUgA6yDDIAAlxMApeAAAIAAFxgAxujWIAAlyMAshAAAIAAFyg");
	var mask_graphics_44 = new cjs.Graphics().p("AoWJJIAAlUIBkAAIAAFUgA6yDDIAAlxMAsiAAAIAAFxgAxujWIAAlyMAshAAAIAAFyg");
	var mask_graphics_45 = new cjs.Graphics().p("AoWJJIAAlUIBkAAIAAFUgA6yDDIAAlxMAvkAAAIAAFxgAxujWIAAlyMAshAAAIAAFyg");
	var mask_graphics_46 = new cjs.Graphics().p("AoWJJIAAlUIBkAAIAAFUgA6yDDIAAlxMAyoAAAIAAFxgAxujWIAAlyMAshAAAIAAFyg");
	var mask_graphics_47 = new cjs.Graphics().p("AoZJJIAAlUIBkAAIAAFUgA61DDIAAlxMA1rAAAIAAFxgAxxjWIAAlyMAshAAAIAAFyg");
	var mask_graphics_48 = new cjs.Graphics().p("Ap6JJIAAlUIBkAAIAAFUgA8XDDIAAlxMA4vAAAIAAFxgAzSjWIAAlyMAshAAAIAAFyg");
	var mask_graphics_49 = new cjs.Graphics().p("ArcJJIAAlUIBkAAIAAFUgA94DDIAAlxMA7xAAAIAAFxgA00jWIAAlyMAshAAAIAAFyg");
	var mask_graphics_50 = new cjs.Graphics().p("As+JJIAAlUIBkAAIAAFUgA/aDDIAAlxMA+1AAAIAAFxgA2WjWIAAlyMAshAAAIAAFyg");
	var mask_graphics_51 = new cjs.Graphics().p("As+JJIAAlUIE1AAIAAFUgA/aDDIAAlxMA+1AAAIAAFxgA2WjWIAAlyMAshAAAIAAFyg");
	var mask_graphics_52 = new cjs.Graphics().p("As+JJIAAlUIIFAAIAAFUgA/aDDIAAlxMA+1AAAIAAFxgA2WjWIAAlyMAshAAAIAAFyg");
	var mask_graphics_53 = new cjs.Graphics().p("As+JJIAAlUILWAAIAAFUgA/aDDIAAlxMA+1AAAIAAFxgA2WjWIAAlyMAshAAAIAAFyg");
	var mask_graphics_54 = new cjs.Graphics().p("As+JJIAAlUIOlAAIAAFUgA/aDDIAAlxMA+1AAAIAAFxgA2WjWIAAlyMAshAAAIAAFyg");
	var mask_graphics_55 = new cjs.Graphics().p("As+JJIAAlUIR2AAIAAFUgA/aDDIAAlxMA+1AAAIAAFxgA2WjWIAAlyMAshAAAIAAFyg");
	var mask_graphics_56 = new cjs.Graphics().p("As+JJIAAlUIVGAAIAAFUgA/aDDIAAlxMA+1AAAIAAFxgA2WjWIAAlyMAshAAAIAAFyg");
	var mask_graphics_57 = new cjs.Graphics().p("As+JJIAAlUIYXAAIAAFUgA/aDDIAAlxMA+1AAAIAAFxgA2WjWIAAlyMAshAAAIAAFyg");
	var mask_graphics_58 = new cjs.Graphics().p("EgnNAXlMAAAgvJMBObAAAMAAAAvJg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:247.5,y:102.5}).wait(42).to({graphics:mask_graphics_42,x:247.5,y:83}).wait(1).to({graphics:mask_graphics_43,x:247.5,y:102.5}).wait(1).to({graphics:mask_graphics_44,x:247.5,y:102.5}).wait(1).to({graphics:mask_graphics_45,x:247.5,y:102.5}).wait(1).to({graphics:mask_graphics_46,x:247.5,y:102.5}).wait(1).to({graphics:mask_graphics_47,x:247.8,y:102.5}).wait(1).to({graphics:mask_graphics_48,x:257.5,y:102.5}).wait(1).to({graphics:mask_graphics_49,x:267.3,y:102.5}).wait(1).to({graphics:mask_graphics_50,x:277.1,y:102.5}).wait(1).to({graphics:mask_graphics_51,x:277.1,y:102.5}).wait(1).to({graphics:mask_graphics_52,x:277.1,y:102.5}).wait(1).to({graphics:mask_graphics_53,x:277.1,y:102.5}).wait(1).to({graphics:mask_graphics_54,x:277.1,y:102.5}).wait(1).to({graphics:mask_graphics_55,x:277.1,y:102.5}).wait(1).to({graphics:mask_graphics_56,x:277.1,y:102.5}).wait(1).to({graphics:mask_graphics_57,x:277.1,y:102.5}).wait(1).to({graphics:mask_graphics_58,x:275,y:190.9}).wait(119));

	// content
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHA/QgEgEAAgGIgBgHIgBgHQAAgGAFgDQAEgFAFAAQAOAAAAAcQAAAGgDAEQgFADgFABQgFgBgEgDgAgJghQgEgEAAgFIgBgGIgBgEQABgGADgDQAFgFAGAAQANAAAAAYQAAAFgDAEQgFAEgFAAQgGAAgDgEg");
	this.shape.setTransform(335.5,143.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgsA5QgVgQAAgeQAAghAQgYQATgZAeAAQAVAAAOAHQARAJAAATQAAAOgPAKQgHAFgVAJIgyAYQAIALALAGQALAFANAAQAKAAAMgDQAQgEAFgHQAEgIAFAAQAFAAAEAEQADADAAAFQAAAPgYAKQgUAJgUAAQgcAAgSgPgAgagjQgMANgFAYIApgSQAXgMAKgJQgLgKgUAAQgQAAgKAMg");
	this.shape_1.setTransform(324.4,145.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgyA9IAAhcIAAgNIAAgNQAAgOALAAQANAAABAWQAZgYAeAAQALAAAFAIQAGAIgBAQIAAAJQgBARgMAAQgLAAAAgNIAAgJIgBgMQgVADgLAJQgMAJgIARIAABIQAAANgNAAQgLAAAAgNg");
	this.shape_2.setTransform(310.6,145.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAqBEQgGgGgDgEQgNAHgJADQgKAEgFAAQgfAAgPgSQgMgQAAgiQgBgfAWgXQAXgWAdAAQAMAAAOAGQARAHABAKQgBAEgCADIgCAQIgBAdQAAAQACAKQACAGAHARIADAHIABACQgBAGgDADQgEADgFAAQgCAAgHgFgAgWggQgOAQAAAVQgBAWAIALQAHALAQAAQAMAAAIgFQAGgCAIgIQgEgiAAgSIAAgMIADgOIgIgEIgHgBQgTAAgPARg");
	this.shape_3.setTransform(296.8,145.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("Ag6BmQgMgMAAgqIABgTIABgWQgCgDAAgDQAAgEADgDQACgmAAgTIgBgOIgBgOQAAgQANAAQAFAAAEAEIAfgHQANgCAMAAQAgAAATAIQAJAEAAAJQAAAFgDAEQgEAFgGAAIgEgBQgXgGgUAAQgLAAgMACIgcAGIABANIgBAzIA4gGIAggCQAGAAAEADQADAEAAAGQAAALgMACIgfADIg8AFIgBASIAAAQQAAAdADAFQAEAEARAAIAYgBIAZAAIAIgBIAIgBQAOAAgBAOQABALgLACQgNADgoAAQgpAAgNgLg");
	this.shape_4.setTransform(273.6,141.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("Ag9BmQgFgGAAgFIAAgnIACg1QADgmAAgRIABgkQABgHAEgCQASgFAXAAQAWAAAVAQQAZASAAAbQAAAigaASQATAJAKAKQAKALAAAMQAAAQgRAPQgMAKgNAFQgdAMgvAAQgFAAgFgFgAgoA1IAAAbQAigBAVgJQAKgDAIgIQAIgHAAgDQAAgGgRgIQgNgGgLgDIgOgCIgFAAIgFAAIgPgBIgBAegAgjhOIAAAXIgDAzIAVACQATgCAMgLQAOgMAAgSQAAgNgOgKQgOgLgOAAIgVABg");
	this.shape_5.setTransform(256.8,141.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgVBxQgEgEAAgFIABgDQACgRAAgUIAAgkIAAgmIgVACQgNAAAAgNQAAgNAXgBIANAAIACgUQADgeALgOQANgQAdAAQATAAAAAMQAAANgRAAQggAAgEAtIAAAIIAdgCQAVAAAAANQAAAKgKACIgLABQgGgBgYACIgBAeIAAAYIABAZQAAAZgDAOQgCAKgKAAQgFAAgEgDg");
	this.shape_6.setTransform(232.4,142.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgnA4QgSgSgBgfQgBgdAQgXQATgbAgAAQAaAAAOAZQALATAAAcQgBAcgPAVQgRAYgbAAQgWAAgQgRgAgXgaQgJAPAAASQAAATALALQAJAJALAAQANAAAKgKQALgLABgTQACgzgeAAQgSAAgLATg");
	this.shape_7.setTransform(218.5,145.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("Ag0BcQgZgMgBgUQAAgFAEgEQAEgDAGAAQAGAAAFAHQAHAKAFAEQAMAHAVAAQAUAAARgJQAXgLAAgUQAAgRgTgKQgQgIgXgBQgVAAgPgIQgSgLAAgUQAAgXAagUQAagSAaAAQANAAAQAEQAWAGAAAJQAAAMgMAAQgGAAgNgDQgNgDgHAAQgUAAgOAKQgPAKAAAPQAAALATAFIAcADQAeACARARQAQAOAAAWQAAAggeATQgZAQggAAQgYAAgUgJg");
	this.shape_8.setTransform(459.6,102.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("Ag9BmQgFgGAAgFIAAgnIACg1QADgmAAgRIABgkQABgHAEgCQASgFAXAAQAWAAAVAQQAZASAAAbQAAAigaASQATAJAKAKQAKALAAAMQAAAQgRAPQgMAKgNAFQgdAMgvAAQgFAAgFgFgAgoA1IAAAbQAigBAVgJQAKgDAIgIQAIgHAAgDQAAgGgRgIQgNgGgLgDIgOgCIgFAAIgFAAIgPgBIgBAegAgjhOIAAAXIgDAzIAVACQATgCAMgLQAOgMAAgSQAAgNgOgKQgOgLgOAAIgVABg");
	this.shape_9.setTransform(442.1,101.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AhCBlQgEgEgBgGIgBgfIgBggQABgMACgXQADgYAAgMIgBgUIgBgUQAAgIADgFQAFgHAKAAIAfADQASACAMAHQA1AcAAApQAAAUgSAPQgOAMgXAHQApAWAVAYQAEAFAAAEQgBAGgEAEQgDAEgGAAQgFAAgFgEQgrgrg1gPIABAaIABAaQAAAGgEAEQgEADgFAAQgGAAgDgDgAgpg6IABAQQAAAKgCAQIgDAZIAGAAIAGABQAhAAAQgJQAIgEAGgGQAHgIAAgFQAAgSgVgQQgSgPgVgCIgUgBg");
	this.shape_10.setTransform(424.7,101.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("Ag6BmQgMgMAAgqIABgTIABgWQgCgDAAgDQAAgEACgDQADgmAAgTIgBgOIgCgOQAAgQAOAAQAFAAAFAEIAegHQANgCAMAAQAgAAATAIQAJAEAAAJQAAAFgEAEQgDAFgGAAIgEgBQgXgGgUAAQgLAAgMACIgcAGIABANIgCAzIA5gGIAggCQAGAAADADQAEAEAAAGQAAALgMACIgfADIg8AFIgBASIAAAQQAAAdADAFQAEAEARAAIAYgBIAZAAIAIgBIAIgBQAOAAgBAOQABALgMACQgMADgoAAQgpAAgNgLg");
	this.shape_11.setTransform(407.8,101.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgXBhQgQgpgUhKIgKglQgIgbAAgJQAAgGAEgEQAEgDAFAAQALAAACALIAFAXIANAtQANAwAMAkIABgCIAihgIALggQAIgUAIgKQAFgFAGAAQAFAAAEAEQAEAEAAAGQAAAEgCAEQgJAMgFAOIgKAdIgjBfQgHARgIAQQgDAIgIAAQgKAAgEgKg");
	this.shape_12.setTransform(391,102.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgsA5QgVgQAAgeQAAghAQgYQATgZAeAAQAVAAAOAHQARAJAAATQAAAOgPAKQgGAFgWAJIgyAYQAIALALAGQALAFANAAQAKAAAMgDQAQgEAFgHQAEgIAFAAQAFAAAEAEQADADAAAFQAAAPgYAKQgUAJgUAAQgcAAgSgPgAgagjQgMANgEAYIAogSQAXgMAKgJQgLgKgUAAQgQAAgKAMg");
	this.shape_13.setTransform(366.1,105.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAkBkQgDgKgCgVQgDgTAAgMIABgLIAAgKQAAgYgNAAQgQAAgNAOQgGAIgMAWQAAAygEAJQgEAJgIAAQgFAAgEgEQgFgDAAgGIACgFIABgUIAAgTIABhhIABgWIgBgMQgCgGAAgHQAAgGAEgDQAEgEAGAAQAKAAACALQACANAAAKIgBAdIAAAdIAAANQALgPAMgIQAMgGANAAQAWAAAJANQAFALABAXIABAZIADAcIAEAbIABADQAAAGgEADQgEAEgGAAQgJAAgDgKg");
	this.shape_14.setTransform(350.7,101.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgJBhQgEgEAAgFIABgGIAAgGIAAgUIgBgTQAAgTgEgiIgDg1IgMAAQgdAAgQgEQgLgDAAgKQAAgFAEgFQAEgEAFAAIAVADIAWABIAYAAIAXAAIAeABIAfABQAGAAAEAEQADAEAAAGQAAAGgDAEQgEAEgGAAIgfgCIgegBIgJAAIADA7QAEAlAAAVIABAOIAAAPQAAAJgCAGQgEAJgIAAQgFAAgEgEg");
	this.shape_15.setTransform(334.7,101.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgiCEQgEgEAAgEQABgGAHgGIANgJQAdggAAhDQAAgZgHgbQgIgfgOgRIgMgMQgJgJAAgFQAAgEAEgEQAEgEAFAAQADAAAFAEQAZASAQApQAOAlAAAjQAABkg2AfQgGADgEAAQgEAAgEgDg");
	this.shape_16.setTransform(311.6,104);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgtBnQgRgDAAgLQAAgMAMAAQAEAAAMADQAKACAOAAQAZgBAJgYQAHgQAAghQgHANgKAGQgKAHgLAAQgZAAgPgQQgOgRAAgZQAAgkAUgVQAVgXAjAAQANAAAJADQAHADAFAHQAOAAAAAPQAAAKgDAPIgDAaIgDArQgBAagEARQgGAWgNAKQgQAMgdAAQgSAAgMgCgAgXhCQgNAQAAAYQAAAUAHAIQAIAJAOAAQAMABANgPQALgOACgNQADgOADgfQgFgEgGgCQgFgCgHAAQgYAAgNARg");
	this.shape_17.setTransform(298.9,108.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAgBBIgDgdQgCgQAAgOIAAgLIABgMQAAgdgLgBQgPAAgMASQgMARgHAXIgBANIgBANIABALIAAAMQAAAHgDADQgEAEgGAAQgFAAgEgEQgEgDAAgHIAAgMIgBgLIACglIACgmIgBgMIAAgNQAAgGADgDQAEgEAGAAQAMAAABARIAAAQQAXgeAWAAQAVAAAJATQAFAMABAZIAAANIAAALQAAALADASQACARAAALQAAAGgDAEQgEADgGAAQgLAAgCgMg");
	this.shape_18.setTransform(285.1,105.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgMBgQgEgEAAgGIAAgXIgBgYIACgfIABgeQAAgGAEgEQADgEAGABQAFgBADAEQAEAEAAAGIgBAeIgCAfIABAYIAAAXQAAAGgDAEQgEADgFABQgFgBgEgDgAgIhIQgEgFAAgGQAAgHAEgEQAFgFAFABQAHgBAEAFQAFAEAAAHQAAAGgFAFQgEAEgHAAQgFAAgFgEg");
	this.shape_19.setTransform(274.2,101.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgtA5QgUgQAAgeQAAghARgYQASgZAeAAQAVAAAOAHQARAJAAATQAAAOgPAKQgHAFgVAJIgxAYQAHALALAGQALAFANAAQAKAAAMgDQAQgEAEgHQAFgIAFAAQAFAAADAEQAEADAAAFQAAAPgYAKQgUAJgUAAQgcAAgTgPgAgbgjQgKANgGAYIApgSQAXgMAKgJQgMgKgTAAQgQAAgLAMg");
	this.shape_20.setTransform(263,105.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgoBjQgEAHgGAAQgFAAgEgEQgDgDAAgGIAAgKIAAgKIAAgqIgBgpIAAglIAAgkQAAgIAEgHQAEgIAIAAQAKAAAAALIgBAGIgBAGIAAAdIAAAhQALgHALgFQAKgDAIAAQAcAAASAVQARAUAAAeQAAAegUAVQgTAVgcAAQgUAAgRgIgAgUgGIgTANIgBAWIABAWIAAAVIASAIQAIACAKAAQASAAAMgNQANgOAAgUQAAgUgKgNQgLgNgSAAQgKAAgLAFg");
	this.shape_21.setTransform(247.5,101.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgVBxQgEgEAAgFIABgDQACgRAAgUIAAgkIAAgmIgVACQgNAAAAgNQAAgNAXgBIANAAIACgUQADgeALgOQANgQAdAAQATAAAAAMQAAANgRAAQggAAgEAtIAAAIIAdgCQAVAAAAANQAAAKgKACIgLABQgGgBgYACIgBAeIAAAYIABAZQAAAZgDAOQgCAKgKAAQgFAAgEgDg");
	this.shape_22.setTransform(224,102.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgnA4QgSgSgBgfQgBgdAQgXQATgbAgAAQAaAAAOAZQALATAAAcQgBAcgPAVQgRAYgbAAQgWAAgQgRgAgXgaQgJAPAAASQAAATALALQAJAJALAAQANAAAKgKQALgLABgTQACgzgeAAQgSAAgLATg");
	this.shape_23.setTransform(210,105.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgsA5QgVgQAAgeQAAghAQgYQATgZAeAAQAVAAAOAHQARAJAAATQAAAOgPAKQgGAFgWAJIgyAYQAIALALAGQALAFANAAQAKAAAMgDQAQgEAFgHQAEgIAFAAQAFAAAEAEQADADAAAFQAAAPgYAKQgUAJgUAAQgcAAgSgPgAgagjQgMANgEAYIAogSQAXgMAKgJQgLgKgUAAQgQAAgKAMg");
	this.shape_24.setTransform(187.9,105.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgIBdQgEgDAAgFIABgPIAAgQIgChMIgegCQgMgCAAgLQAAgGAEgEQAEgEAFAAIAcADIgBgSIAAgRQAAgFAEgEQADgEAGAAQALAAACAUIAAAMIAAAHIAAAIIATgCQANAAAFACQAIACAAAKQAAAGgEAEQgEADgFAAIgHAAIgGAAIgSACIACBNIAAAGIAAAHQABAdgPAAQgEAAgEgEg");
	this.shape_25.setTransform(173.8,103);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAqBEQgGgGgCgEQgOAHgJADQgKAEgFAAQgfAAgPgSQgNgQABgiQAAgfAVgXQAWgWAeAAQALAAAPAGQARAHABAKQgBAEgCADIgCAQIgBAdQAAAQADAKQAAAGAIARIADAHIABACQgBAGgDADQgEADgEAAQgDAAgHgFgAgWggQgOAQAAAVQgBAWAIALQAHALAQAAQALAAAJgFQAGgCAIgIQgEgiAAgSIABgMIACgOIgIgEIgHgBQgTAAgPARg");
	this.shape_26.setTransform(160.5,105.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgIBdQgEgDAAgFIABgPIAAgQIgChMIgegCQgMgCAAgLQAAgGAEgEQAEgEAFAAIAcADIgBgSIAAgRQAAgFAEgEQADgEAGAAQALAAACAUIAAAMIAAAHIAAAIIATgCQANAAAFACQAIACAAAKQAAAGgEAEQgEADgFAAIgHAAIgGAAIgSACIACBNIAAAGIAAAHQABAdgPAAQgEAAgEgEg");
	this.shape_27.setTransform(147.1,103);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgkBJQgVgHABgNQAAgGADgEQAFgDAFAAQAEgBAGAHQAEADALACIAPABQAKABAJgDQAMgEAAgIQAAgSgagGIgMgEQgSgDgHgGQgLgGAAgPQAAgcAagLQAIgEARgFQARgFAHgDQAGgCAHgBQAFAAAEAEQAEAEgBAGIACALIACALQAAAGgEAEQgEADgFABQgIAAgDgGQgCgDgBgKIgfAJQgUAIAAAMIAIACQAdAGAPAKQAWAMAAAbQAAAWgTAKQgQAKgWgBQgRABgQgHg");
	this.shape_28.setTransform(133.8,104.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgzA9IAAhcIABgNIAAgNQAAgOAMAAQANAAAAAWQAZgYAeAAQALAAAFAIQAGAIAAAQIAAAJQgBARgNAAQgLAAAAgNIAAgJIgBgMQgVADgMAJQgMAJgHARIAABIQAAANgNAAQgMAAAAgNg");
	this.shape_29.setTransform(113.4,105.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgnA4QgSgSgBgfQgBgdAQgXQATgbAgAAQAaAAAOAZQALATAAAcQgBAcgPAVQgRAYgbAAQgWAAgQgRgAgXgaQgJAPAAASQAAATALALQAJAJALAAQANAAAKgKQALgLABgTQACgzgeAAQgSAAgLATg");
	this.shape_30.setTransform(99.2,105.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AASCEQg3gfAAhkQAAgjAOglQAQgpAagSQAFgEADAAQAEAAAEAEQADAEAAAEQABAFgJAJIgLAMQgPARgIAfQgHAbAAAZQAABDAeAgIAMAJQAHAGAAAGQAAAEgDAEQgDADgFAAQgEAAgFgDg");
	this.shape_31.setTransform(87.6,104);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF0000").s().p("Ag0BcQgZgMgBgUQAAgFAEgEQAEgDAGAAQAGAAAFAHQAHAKAFAEQAMAHAVAAQAUAAARgJQAXgLAAgUQAAgRgTgKQgQgIgXgBQgVAAgPgIQgSgLAAgUQAAgXAagUQAagSAaAAQANAAAQAEQAWAGAAAJQAAAMgMAAQgGAAgNgDQgNgDgHAAQgUAAgOAKQgPAKAAAPQAAALATAFIAcADQAeACARARQAQAOAAAWQAAAggeATQgZAQggAAQgYAAgUgJg");
	this.shape_32.setTransform(398.4,62.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF0000").s().p("Ag9BmQgFgGAAgFIAAgnIACg1QADgmAAgRIABgkQABgHAEgCQASgFAXAAQAWAAAVAQQAZASAAAbQAAAigaASQATAJAKAKQAKALAAAMQAAAQgRAPQgMAKgNAFQgdAMgvAAQgFAAgFgFgAgoA1IAAAbQAigBAVgJQAKgDAIgIQAIgHAAgDQAAgGgRgIQgNgGgLgDIgOgCIgFAAIgFAAIgPgBIgBAegAgjhOIAAAXIgDAzIAVACQATgCAMgLQAOgMAAgSQAAgNgOgKQgOgLgOAAIgVABg");
	this.shape_33.setTransform(380.9,61.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF0000").s().p("AhCBlQgEgEgBgGIgBgfIgBggQABgMACgXQADgYAAgMIgBgUIgBgUQAAgIAEgFQAEgHAKAAIAfADQASACAMAHQA1AcAAApQAAAUgSAPQgOAMgXAHQApAWAVAYQAEAFAAAEQgBAGgEAEQgDAEgGAAQgFAAgFgEQgrgrg1gPIABAaIABAaQAAAGgEAEQgEADgFAAQgGAAgDgDgAgpg6IABAQQAAAKgCAQIgDAZIAGAAIAGABQAhAAAQgJQAHgEAHgGQAHgIAAgFQAAgSgVgQQgSgPgVgCIgUgBg");
	this.shape_34.setTransform(363.5,61.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF0000").s().p("Ag6BmQgMgMAAgqIABgTIABgWQgCgDAAgDQAAgEACgDQADgmAAgTIgBgOIgCgOQAAgQAOAAQAFAAAFAEIAegHQANgCAMAAQAgAAATAIQAJAEAAAJQAAAFgEAEQgDAFgGAAIgEgBQgXgGgUAAQgLAAgMACIgcAGIABANIgCAzIA5gGIAggCQAGAAAEADQADAEAAAGQAAALgMACIgfADIg8AFIgBASIAAAQQAAAdADAFQAEAEARAAIAYgBIAZAAIAIgBIAIgBQAOAAgBAOQABALgMACQgMADgpAAQgoAAgNgLg");
	this.shape_35.setTransform(346.6,61.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF0000").s().p("AgXBhQgQgpgUhKIgKglQgIgbAAgJQAAgGAEgEQAEgDAFAAQALAAACALIAFAXIANAtQANAwAMAkIABgCIAihgIALggQAIgUAIgKQAFgFAGAAQAFAAAEAEQAEAEAAAGQAAAEgCAEQgJAMgFAOIgKAdIgjBfQgHARgIAQQgDAIgIAAQgKAAgEgKg");
	this.shape_36.setTransform(329.7,62.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF0000").s().p("Ag6BmQgMgMAAgqIABgTIAAgWQgBgDAAgDQAAgEACgDQADgmAAgTIgBgOIgCgOQAAgQAOAAQAGAAAEAEIAdgHQAPgCALAAQAgAAATAIQAJAEAAAJQAAAFgEAEQgDAFgGAAIgEgBQgWgGgVAAQgLAAgMACIgcAGIABANIgCAzIA6gGIAfgCQAGAAADADQAEAEABAGQAAALgNACIgfADIg8AFIgBASIAAAQQAAAdADAFQAEAEASAAIAXgBIAZAAIAIgBIAIgBQANAAAAAOQAAALgLACQgMADgpAAQgpAAgMgLg");
	this.shape_37.setTransform(295.9,61.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF0000").s().p("Ag3BRQgSgUAAgcQAAgsAmgvQAfgnAfAAIAMABIAJABQAEgGAIAAQAJAAACAMQADAKAAAQQAAAFgDAFQgEAFgHAAQgIAAgEgKQgEgJgDgCQgDgBgLAAQgTAAgXAdQgfAoAAAiQAAARALANQALAMAQAAQAMAAAOgHQAIgEAQgLQAHgGAEAAQAGAAAEAEQADAFAAAFQAAAGgFAEQgiAfgjAAQgcAAgTgVg");
	this.shape_38.setTransform(279.2,61.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF0000").s().p("AhYBnQgEgEAAgGIABgRIAAgQIABgYIABgZIgBgaIAAgaIgCgZIgBgYQAAgHAFgFQAFgFAHAAQAHAAAKAQQAhAxAaAhQAfAlAlAkIAAgRIAAgRQAAg5gFgjIgDgNQgDgJAAgFQAAgQAOAAQAXAAAABXIAAArIgBArIgCAWQgCAMgMAAQgHAAgKgJQg2gzhFhfIgBAeIAAAeIAAAgIABAhQAAAkgOAAQgHAAgEgFg");
	this.shape_39.setTransform(260,62.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF0000").s().p("Ag5BmQgNgMAAgqIAAgTIACgWQgCgDAAgDQAAgEADgDQACgmAAgTIgBgOIgBgOQAAgQANAAQAFAAAEAEIAfgHQAOgCALAAQAgAAATAIQAJAEAAAJQAAAFgDAEQgEAFgGAAIgEgBQgWgGgVAAQgLAAgMACIgbAGIABANIgCAzIA4gGIAggCQAGAAAEADQADAEAAAGQABALgMACIggADIg9AFIAAASIgBAQQAAAdAFAFQADAEARAAIAZgBIAYAAIAIgBIAHgBQAOAAABAOQgBALgKACQgNADgoAAQgpAAgMgLg");
	this.shape_40.setTransform(241,61.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF0000").s().p("AgIBhQgFgEAAgFIABgGIABgGIgCgUIAAgTQAAgTgDgiIgEg1IgMAAQgdAAgRgEQgKgDAAgKQAAgFADgFQAFgEAGAAIAVADIAVABIAYAAIAYAAIAdABIAfABQAFAAAEAEQAEAEAAAGQAAAGgEAEQgEAEgFAAIgfgCIgdgBIgKAAIADA7QADAlAAAVIABAOIACAPQgBAJgDAGQgDAJgIAAQgFAAgDgEg");
	this.shape_41.setTransform(224.1,61.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FF0000").s().p("Ag0BcQgZgMgBgUQAAgFAEgEQAEgDAGAAQAGAAAFAHQAHAKAFAEQAMAHAVAAQAUAAARgJQAXgLAAgUQAAgRgTgKQgQgIgXgBQgVAAgPgIQgSgLAAgUQAAgXAagUQAagSAaAAQANAAAQAEQAWAGAAAJQAAAMgMAAQgGAAgNgDQgNgDgHAAQgUAAgOAKQgPAKAAAPQAAALATAFIAcADQAeACARARQAQAOAAAWQAAAggeATQgZAQggAAQgYAAgUgJg");
	this.shape_42.setTransform(204.4,62.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF0000").s().p("Ag6BiQgDgEAAgGQAAgGADgEQAEgEAGAAIAcgDIABgYIAAgWIgBgXQAAgdADguIgRABIgRAAQgGAAgDgEQgEgEAAgGQAAgMAMgBQALgCAdABQAaAAAnAFQAMACAAANQAAAGgEADQgEADgGAAIgVgBIgVgDQgDAnAAAhIAAAYIABAWIgBAXIAqAAQAFAAAEADQAEAEAAAGQAAAGgEAEQgEAEgFAAIgXAAIgWABQgIgBgRADQgRACgJAAQgGAAgEgDg");
	this.shape_43.setTransform(187.5,62.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FF0000").s().p("AA/BmQgJgJgLgQIgRgbIgVgeIgtA1IgYAbQgEAEgGAAQgFAAgEgEQgFgEAAgFQABgFADgEIAYgbIAyg5QgPgTgRgUIgPgUQgJgNgIgGQgFgFgBgGQABgGADgEQAEgEAGAAQALAAASAYIAQAXIAcAkIAegqQAdgpAJAAQAFAAAEAEQAFAEAAAGQgBAEgDAFQgRAVgKAOIgRAYQgKAOgIAJIAdAqQASAZANAQQAEAFAAAFQAAAFgFAEQgEAEgFAAQgFAAgFgEg");
	this.shape_44.setTransform(170.2,62.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FF0000").s().p("Ag6BmQgMgMAAgqIAAgTIABgWQgBgDAAgDQAAgEACgDQADgmAAgTIgBgOIgCgOQAAgQAOAAQAFAAAFAEIAdgHQAPgCALAAQAgAAATAIQAJAEAAAJQAAAFgEAEQgDAFgGAAIgEgBQgWgGgVAAQgLAAgMACIgcAGIABANIgCAzIA6gGIAfgCQAFAAAEADQAFAEAAAGQAAALgNACIgfADIg8AFIgBASIAAAQQAAAdADAFQAEAEASAAIAXgBIAZAAIAIgBIAIgBQANAAAAAOQAAALgLACQgMADgpAAQgpAAgMgLg");
	this.shape_45.setTransform(152.4,61.8);

	this.instance = new lib.content_scene2();
	this.instance.parent = this;
	this.instance.setTransform(277,194.8,1,1,0,0,0,208.1,154.6);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance}]},72).wait(105));

	// main
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.instance_1 = new lib.Bk("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(275,190.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.UI}]}).wait(177));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,201.6,534,398.7);
// library properties:
lib.properties = {
	id: '5425FC2FA1D102438A373C184797CA8B',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/beamisarewaswerebeingbeen.mp3", id:"beamisarewaswerebeingbeen"},
		{src:"sounds/existenceverbsorstateofbeing.mp3", id:"existenceverbsorstateofbeing"},
		{src:"sounds/bgmAux.mp3", id:"bgmAux"},
		{src:"sounds/High_Screaming_Gtr.mp3", id:"High_Screaming_Gtr"},
		{src:"sounds/maracas_shake.mp3", id:"maracas_shake"},
		{src:"sounds/needtoreview.mp3", id:"needtoreview"},
		{src:"sounds/organ_f_chord.mp3", id:"organ_f_chord"},
		{src:"sounds/powersynth.mp3", id:"powersynth"},
		{src:"sounds/predicateverbsdefinition.mp3", id:"predicateverbsdefinition"},
		{src:"sounds/right_answer.mp3", id:"right_answer"},
		{src:"sounds/salsa_groove.mp3", id:"salsa_groove"},
		{src:"sounds/theverbsofbeare.mp3", id:"theverbsofbeare"},
		{src:"sounds/trumpet_lick.mp3", id:"trumpet_lick"},
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
an.compositions['5425FC2FA1D102438A373C184797CA8B'] = {
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