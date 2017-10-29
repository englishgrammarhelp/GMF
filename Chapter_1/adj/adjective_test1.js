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


(lib.WhichOne = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZBJQgEgDAAgEQAAgGAEgFQADgFAGAAQAJAAAAALQAAAFgDAFQgCAFgGAAQgEAAgDgDgAgUAkQgCgDAAgEQAAgHAMgKIAXgRQAMgKAAgJQAAgMgLgJQgKgKgKAAQgHAAgJAHQgJAGgCAAQgFAAgCgDQgDgDAAgEQAAgIAOgIQAOgHAJAAQASAAARAQQAPAPAAAUQABAOgKAKQgGAHgOAKQgPALgFAHQgEAEgEAAQgEAAgDgDg");
	this.shape.setTransform(131.9,17.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgqBLQgKgIAAggIABgOIAAgPIgBgGQAAgBACgEIADgpIgCgKIgBgLQABgMAJAAQAFAAACADIAXgEIASgCQAYAAAOAFQAGADABAHQgBADgCADQgDAEgEAAIgDAAQgRgFgPAAIgQABIgVAFIABAKIgBAmIApgFIAYgCQADAAAEADQACACABAFQAAAIgJACIgYACIgsADIgBAOIAAALQAAAVAEAFQABACANAAIASAAIASgBIAGAAIAGAAQAKgBAAALQAAAIgIABQgKACgdAAQgfAAgIgIg");
	this.shape_1.setTransform(121,16.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhBBMQgDgDAAgEIABgNIAAgLIABgTIABgSIgBgTIAAgTIgCgSIgBgTQAAgEAFgEQADgDAFAAQAGAAAHALQAYAkATAZQAXAbAcAaIAAgMIgBgNQAAgpgDgaIgDgKIgCgLQAAgLALAAQARAAAAA/IAAAgIgBAgIgCAQQgBAKgJAAQgGAAgHgHQgogmgyhGIAAAXIgBAUIABAZIAAAZQAAAagKAAQgGgBgDgDg");
	this.shape_2.setTransform(106.6,16.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgxA9QgUgSAAgcQAAggAUgcQAWgfAhAAQAgAAAQAPQAQAOAAAhQAAAhgSAbQgWAfggAAQgbAAgUgQgAgiggQgPAWAAAZQAAATAOAMQANALAUAAQAXAAAPgYQAOgWAAgZQAAgXgKgKQgKgJgYAAQgXAAgRAYg");
	this.shape_3.setTransform(90.6,17);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag8BNQgDgCAAgEIACggIACgeIgBgPIAAgRIABgXIAAgXQABgEACgDQADgDAEAAQAEAAADADQACADAAAEIgBAYIgBAWIAAAZIAqgIQAZgEARgBIABgpQAAgIADgIQACgKAHAAQADAAADACQADADAAAEIgBAEQgBAFAAAIIAAAIIAAAJIgCAdIgCAcIACAXIABAVQAAAEgDAEQgDACgEAAQgEAAgCgCQgDgEAAgEIgBgVIgBgXIAAgOQgQAAgYAEIgpAIIgBAaIgCAZQAAAEgDACQgDADgEAAQgEAAgCgDg");
	this.shape_4.setTransform(69.1,16.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgoA8QgNgPAAgVQAAggAbgiQAXgdAXAAIAJAAIAGACQAEgGAFAAQAHAAACAJQABAIAAALQAAAFgCACQgDAEgEABQgHAAgDgIQgDgGgCgBQgCgBgIAAQgOgBgQAWQgYAdAAAZQAAANAIAJQAIAKAMAAQAJgBAKgFQAGgDAMgIQAFgEADgBQAEABADADQADADAAAEQAAAEgEADQgZAXgaAAQgUAAgOgPg");
	this.shape_5.setTransform(55.4,16.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgqBIQgDgDAAgEQAAgEADgDQADgDADAAIAVgCIABgSIAAgRIgBgQQAAgWADgiIgNABIgMAAQgFAAgDgDQgCgDAAgEQAAgJAJgBIAdgBQATAAAdAFQAJABAAAJQAAAFgEACQgCADgEAAIgQgCIgPgCQgCAdAAAZIAAAQIAAARIAAARIAeAAQAEAAADADQADACAAAFQAAAEgDADQgDADgEAAIgRAAIgQAAIgSACIgUACQgDAAgDgDg");
	this.shape_6.setTransform(43.7,16.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ag8BNQgDgCAAgEIACggIACgeIgBgPIAAgRIABgXIAAgXQABgEACgDQADgDAEAAQAEAAADADQACADAAAEIgBAYIgBAWIABAZIApgIQAYgEASgBIABgpQAAgIADgIQACgKAHAAQADAAADACQADADAAAEIgBAEQgCAFAAAIIABAIIAAAJIgCAdIgCAcIACAXIABAVQAAAEgDAEQgDACgEAAQgEAAgCgCQgDgEAAgEIgBgVIgBgXIAAgOQgQAAgYAEIgpAIIgBAaIgCAZQAAAEgDACQgDADgEAAQgEAAgCgDg");
	this.shape_7.setTransform(30.7,16.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAWBNQgEgDAAgFQgFgLgBgIIgHgqIgGgpQgJAggJAVQgMAagDAPIAAAEQAAAFgDADQgDACgFAAQgOAAAAgMIgCgMIgLgwQgHgXgPgtIgBgEQAAgJALAAQAGAAADAHIAHAUQAHASAFAYIAKArQAKgZALghIAJgeQAJgVAIAAQAGAAADAHQAEAIADAgIAGAlIAJAmQANgfAUg1IAFgSQADgLADgHQAEgFAGAAQAKAAgBAKIgDAJIgDALIgGARIgcBGIgPAiQgDAGgHAAQgFAAgDgCg");
	this.shape_8.setTransform(12.9,17.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,139.6,31.9);


(lib.WhatKind = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgaBJQgDgDAAgEQAAgGADgFQAEgFAFAAQAKAAAAALQAAAFgCAFQgDAFgFAAQgFAAgEgDgAgTAkQgEgDAAgEQAAgHANgKIAWgRQANgKAAgJQAAgMgKgJQgLgKgLAAQgFAAgKAHQgKAGgCAAQgDAAgEgDQgDgDAAgEQABgIAPgIQANgHAIAAQAUAAAPAQQAQAPABAUQAAAOgKAKQgFAHgPAKQgPALgFAHQgDAEgFAAQgDAAgDgDg");
	this.shape.setTransform(130.9,17.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgeBPQgLgDgGgEIgBAAQgEAAgDgDQgCgDAAgEIABgfIAAgfIAAghIAAgiQAAgEAEgEQAEgFAEAAQACAAAOAHIARAIQAbAJATAUQAXAXAAAbQAAARgIAPQgIAPgNAKQgPAKgcAAQgHAAgJgCgAgkgaIAAAbIgBA1IACACQAIAFANAAQAWAAAKgHQAJgGAGgLQAFgLAAgMQAAgagegUQgJgGgkgQg");
	this.shape_1.setTransform(119.1,16.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhBBMQgCgDgBgEIABgNIAAgLIABgTIAAgSIAAgTIAAgTIgCgSIgBgTQABgEADgEQAEgDAFAAQAGAAAHALQAYAkATAZQAXAbAbAaIAAgMIAAgNQAAgpgDgaIgDgKIgCgLQAAgLALAAQAQAAAAA/IAAAgIAAAgIgCAQQgBAKgJAAQgFAAgIgHQgngmgzhGIgBAXIAAAUIAAAZIABAZQAAAagLAAQgFgBgDgDg");
	this.shape_2.setTransform(103.7,16.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgqBIQgDgDAAgEQAAgEADgDQADgDADAAIAVgCIACgSIgBgRIgBgQQAAgWADgiIgNABIgMAAQgEAAgEgDQgCgDAAgEQAAgJAJgBIAdgBQATAAAeAFQAIABAAAJQAAAFgEACQgCADgEAAIgQgCIgPgCQgCAdAAAZIAAAQIAAARIAAARIAeAAQAEAAADADQADACAAAFQAAAEgDADQgDADgEAAIgRAAIgQAAIgSACIgUACQgDAAgDgDg");
	this.shape_3.setTransform(90.2,16.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgvBMQgCgEAAgFIABhEIABhEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIgBAeQgCATABAKQANgMAQgTIAbghQAEgDAEAAQAEAAADACQADAEAAAEQAAAGgaAcIgjAlIAkAjIAKAJQAGAEAGACQAIACAAAIQAAADgCADQgCAEgFAAQgOAAgbgaIgdgeIAAACIAAAyQAAAKgJAAQgFAAgEgEg");
	this.shape_4.setTransform(79.5,17.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgGBIQgDgDAAgFIAAgEIABgFIgBgNIgBgPIgCgmIgDgoIgIAAQgWAAgMgCQgIgDAAgHQAAgEADgEQADgCAEAAIAQABIAQABIARAAIARAAIAWABIAXABQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAIgXgBIgWgBIgHAAIADAsQACAbAAAQIABAKIAAAKQAAAHgCAFQgCAHgGgBQgDAAgDgCg");
	this.shape_5.setTransform(60.5,16.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAiAzIgHgfIgaAFIgZAFIgQAmQgDAFgGAAQgDAAgDgDQgEgDAAgEQAAgFAPgfQgCgCABgDQAAgIAJgDQALgTARgcQAWglAGAAQAHAAADALIAGAhIAPBDIAFAPIAEALQgBAEgDADQgCADgFAAQgIAAgHgXgAgMAHIAjgHIgIglg");
	this.shape_6.setTransform(45.4,17);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ag8BNQgDgCAAgEIACggIACgeIgBgPIAAgRIABgXIAAgXQABgEACgDQADgDAEAAQAEAAADADQACADAAAEIgBAYIgBAWIABAZIApgIQAYgEASgBIABgpQAAgIADgIQACgKAHAAQADAAADACQADADAAAEIgBAEQgCAFAAAIIABAIIAAAJIgCAdIgCAcIACAXIABAVQAAAEgDAEQgDACgEAAQgEAAgCgCQgDgEAAgEIgBgVIgBgXIAAgOQgQAAgYAEIgpAIIgBAaIgCAZQAAAEgDACQgDADgEAAQgEAAgCgDg");
	this.shape_7.setTransform(30.7,16.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAWBNQgEgDAAgFQgFgLgBgIIgHgqIgGgpQgJAggJAVQgMAagDAPIAAAEQAAAFgDADQgDACgFAAQgOAAAAgMIgCgMIgLgwQgHgXgPgtIgBgEQAAgJALAAQAGAAADAHIAHAUQAHASAFAYIAKArQAKgZALghIAJgeQAJgVAIAAQAGAAADAHQAEAIADAgIAGAlIAJAmQANgfAUg1IAFgSQADgLADgHQAEgFAGAAQAKAAgBAKIgDAJIgDALIgGARIgcBGIgPAiQgDAGgHAAQgFAAgDgCg");
	this.shape_8.setTransform(12.9,17.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,138.6,31.9);


(lib.HowMany = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZBJQgEgDAAgEQAAgGAEgFQADgFAGAAQAJAAAAALQAAAFgDAFQgCAFgGAAQgEAAgDgDgAgUAkQgCgDAAgEQAAgHAMgKIAXgRQAMgKAAgJQAAgMgLgJQgKgKgKAAQgHAAgJAHQgJAGgCAAQgFAAgCgDQgDgDAAgEQAAgIAOgIQAOgHAJAAQASAAARAQQAPAPAAAUQABAOgKAKQgGAHgOAKQgPALgFAHQgEAEgDAAQgFAAgDgDg");
	this.shape.setTransform(126,17.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgUBLQgDgDAAgEQAAgEAJgRIAMgWQgSgXgFgMQgEgLgKgPQgPgVgCgFIgBgFQAAgEADgDQADgDAEAAQAEAAAEAFIAHAMIAOAVQAHAMAFAKQADAIAJANIAXg1IAKgVQADgHAGAAQAEAAADADQADADAAAEQAAAFgFAJIgGALIgRAqIgSAoIgMAVIgFALQgDAGgFAAQgEAAgDgDg");
	this.shape_1.setTransform(114.5,17);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhBBMQgCgDgBgEIABgNIAAgLIABgTIAAgSIAAgTIAAgTIgCgSIgBgTQABgEADgEQAEgDAFAAQAGAAAHALQAYAkATAZQAXAbAbAaIAAgMIAAgNQAAgpgDgaIgDgKIgCgLQAAgLALAAQAQAAAAA/IAAAgIAAAgIgCAQQgBAKgJAAQgFAAgIgHQgngmgzhGIgBAXIAAAUIAAAZIABAZQAAAagLAAQgFgBgDgDg");
	this.shape_2.setTransform(100.6,16.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAiAzIgGgfIgbAFIgZAFIgQAmQgDAFgGAAQgEAAgCgDQgEgDAAgEQAAgFAPgfQgCgCABgDQAAgIAJgDQALgTARgcQAWglAGAAQAHAAADALIAHAhIAOBDIAFAPIAEALQgBAEgDADQgCADgFAAQgIAAgHgXgAgMAHIAjgHIgIglg");
	this.shape_3.setTransform(85,17);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AA8BJQgDgEgDgLIgDgRQgEgPgIg0IgUA5IgGASIgHATQgEAHgGAAQgGAAgDgGQgCgEgCgHIgDgLQgKgigHgmIgEASIgNAyQAAAJgEASQgEAHgGAAQgFAAgCgDQgDgDAAgFQAAgPAGgYIALgnIAGgfQAEgVAFgGQAEgHAGAAQAGAAADAIQAEAIAEAbQAFAgAMAlQANglALgpIACgOQADgIACgFQAEgIAHAAQAIAAAEARIAEAWQAGAsAIAfIAGARIADAQQAAAEgDADQgEADgDAAQgFAAgEgGg");
	this.shape_4.setTransform(69.1,17);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAWBNQgEgDAAgFQgEgLgBgIIgIgqIgGgpQgJAggKAVQgLAagDAPIABAEQgBAFgDADQgDACgFAAQgNAAgBgMIgCgMIgLgwQgGgXgQgtIgBgEQAAgJALAAQAGAAADAHIAHAUQAGASAGAYIAJArQALgZALghIAJgeQAJgVAIAAQAGAAADAHQADAIAEAgIAGAlIAJAmQANgfAUg1IAEgSQAEgLADgHQAEgFAGAAQAJAAAAAKIgCAJIgFALIgEARIgdBGIgPAiQgDAGgHAAQgEAAgEgCg");
	this.shape_5.setTransform(44.2,17.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgxA9QgUgSAAgcQAAggAUgcQAWgfAhAAQAgAAAQAPQAQAOAAAhQAAAhgSAbQgWAfggAAQgbAAgUgQgAgiggQgPAWAAAZQAAATAOAMQANALAUAAQAXAAAPgYQAOgWAAgZQAAgXgKgKQgKgJgYAAQgXAAgRAYg");
	this.shape_6.setTransform(25.5,17);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ag8BNQgDgCAAgEIACggIACgeIgBgPIAAgRIABgXIABgXQgBgEADgDQADgDAEAAQAEAAADADQACADAAAEIgBAYIgBAWIABAZIApgIQAYgEASgBIABgpQAAgIADgIQACgKAHAAQADAAADACQADADAAAEIgBAEQgCAFAAAIIABAIIAAAJIgCAdIgBAcIABAXIABAVQAAAEgDAEQgCACgFAAQgEAAgCgCQgDgEAAgEIgBgVIgBgXIAAgOQgQAAgYAEIgpAIIgBAaIgDAZQAAAEgCACQgDADgEAAQgEAAgCgDg");
	this.shape_7.setTransform(9.9,16.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,133.7,31.9);


(lib.GameBackgroundbubblered = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("incorrectwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AKKjCI0TAAQhRAAg5A5Qg5A5AABQIAAAAQAABRA5A5QA5A5BRAAIUTAAQBRAAA5g5QA5g5AAhRIAAAAQAAhQg5g5Qg5g5hRAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF9900","#FFE600"],[0,1],-0.1,19,0,-18.9).s().p("AqJDDQhQAAg6g5Qg5g5AAhRIAAAAQAAhQA5g5QA6g5BQAAIUTAAQBRAAA5A5QA5A5AABQIAAAAQAABRg5A5Qg5A5hRAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#00B3FF","#B3D1FF"],[0,1],-0.1,19,0,-18.9).s().p("AqJDDQhQAAg6g5Qg5g5AAhRIAAAAQAAhQA5g5QA6g5BQAAIUTAAQBRAAA5A5QA5A5AABQIAAAAQAABRg5A5Qg5A5hRAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AqJDDQhQAAg6g5Qg5g5AAhRIAAAAQAAhQA5g5QA6g5BQAAIUTAAQBRAAA5A5QA5A5AABQIAAAAQAABRg5A5Qg5A5hRAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.5,-20.5,171,41.1);


(lib.GameBackgroundbubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("correctwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AKKjCI0TAAQhRAAg5A5Qg5A5AABQIAAAAQAABRA5A5QA5A5BRAAIUTAAQBRAAA5g5QA5g5AAhRIAAAAQAAhQg5g5Qg5g5hRAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF9900","#FFE600"],[0,1],-0.1,19,0,-18.9).s().p("AqJDDQhQAAg6g5Qg5g5AAhRIAAAAQAAhQA5g5QA6g5BQAAIUTAAQBRAAA5A5QA5A5AABQIAAAAQAABRg5A5Qg5A5hRAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#00B3FF","#B3D1FF"],[0,1],-0.1,19,0,-18.9).s().p("AqJDDQhQAAg6g5Qg5g5AAhRIAAAAQAAhQA5g5QA6g5BQAAIUTAAQBRAAA5A5QA5A5AABQIAAAAQAABRg5A5Qg5A5hRAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00CC00").s().p("AqJDDQhQAAg6g5Qg5g5AAhRIAAAAQAAhQA5g5QA6g5BQAAIUTAAQBRAAA5A5QA5A5AABQIAAAAQAABRg5A5Qg5A5hRAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.5,-20.5,171,41.1);


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
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* play();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#D5FFD7","#61EF01","#1DA400","#004A00"],[0,0.345,0.635,0.937],0.4,7,0,0.4,7,18.8).s().p("AAAB2QgwAAgigjQgjgigBgxQABgwAjgiQAigjAwAAQAxAAAjAjQAjAigBAwQABAxgjAiQgjAjgxAAIAAAAg");
	this.shape.setTransform(11.9,11.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.general_buttoncolor, new cjs.Rectangle(0,0,23.7,23.6), null);


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


(lib.fcb_rightOut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("AhABBIAAgKIB3AAIAAh3IAKAAIAACBg");
	this.shape.setTransform(6.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_rightOut, new cjs.Rectangle(0,0,13,13), null);


(lib.fcb_rightIn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D4D0D8").s().p("Ag2A3IAAgKIBjAAIAAhjIAKAAIAABtg");
	this.shape.setTransform(6.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_rightIn, new cjs.Rectangle(1,1,11,11), null);


(lib.fcb_leftOut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("Ag7A8IAAh3IB3AAIAAAKIhtAAIAABtg");
	this.shape.setTransform(6,6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_leftOut, new cjs.Rectangle(0,0,12,12), null);


(lib.fcb_leftIn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D4D0D8").s().p("AgxAyIAAhjIBjAAIAAAKIhZAAIAABZg");
	this.shape.setTransform(6,6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_leftIn, new cjs.Rectangle(1,1,10,10), null);


(lib.fcb_hitArea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("AhABBIAAiBICBAAIAACBg");
	this.shape.setTransform(6.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_hitArea, new cjs.Rectangle(0,0,13,13), null);


(lib.fcb_check_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("AgLAiIgBAAIgVgVIgCgEIABgSQAAgFAGAAIADACIARARIAhgkIAEgDQAHAAAAAGIAAASIgCAEIgoAnIgDACg");
	this.shape.setTransform(3.6,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_check_disabled, new cjs.Rectangle(0,0,7.1,7), null);


(lib.fcb_check = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgLAiIgBAAIgVgVIgCgEIABgSQAAgFAGAAIADACIARARIAhgkIAEgDQAHAAAAAGIAAASIgCAEIgoAnIgDACg");
	this.shape.setTransform(3.6,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_check, new cjs.Rectangle(0,0,7.1,7), null);


(lib.fcb_background_pressed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgsAtIAAhZIBZAAIAABZg");
	this.shape.setTransform(4.5,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_background_pressed, new cjs.Rectangle(0,0,9,9), null);


(lib.fcb_background_disabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgsAtIAAhZIBZAAIAABZg");
	this.shape.setTransform(4.5,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_background_disabled, new cjs.Rectangle(0,0,9,9), null);


(lib.fcb_background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// element
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsAtIAAhZIBZAAIAABZg");
	this.shape.setTransform(4.5,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_background, new cjs.Rectangle(0,0,9,9), null);


(lib.blank_gr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("Aj+CqIAAlTIH9AAIAAFTg");
	this.shape.setTransform(32.5,17,1.275,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65,34);


(lib.check_mark = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AidByQgZgzgHghQACgIADgEQAFgFAPAAQARgBAcAnIAZAnQAegbAfgzQAhg5ASgcQBBhlBmgSQAAABAAAAQAAABABAAQAAAAAAAAQABABAAAAQADABAAAPQAAAKhvCLQh4CYhJBBQgXgmgUgpg");
	this.shape.setTransform(19,19.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AidByQgZgzgHghQADgIACgDQAEgHAQABQARgBAdAnIAYAnQAegcAfgyQAhg5ASgcQBBhkBmgTQAAABAAAAQAAABABAAQAAAAAAAAQABABABAAQACACAAAOQAAAKhuCLQh5CYhJBBQgYgmgTgpg");
	this.shape_1.setTransform(22,21.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.check_mark, new cjs.Rectangle(0,0,41,40.5), null);


(lib.bk3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF9933","#980189"],[0.008,1],53.8,-17.5,53.8,22.4).s().p("AhSChQgKgEgHgBIgIgCIAKgFQAQgIAIgGQAkgkABgFIgBgCIgFgBQgNAAgTAIIgUAJIABgBQA6hQAAgOIgBgDIgCgBQgIAAgbARIgkAYIgBgBQAEgLAJglQAJglAAgIQAAgBAAAAQgBgBAAgBQAAAAgBAAQAAgBgBAAQgeAggaAVQgNgpgIgcIgEgQQAHAIAJAIIAFADQAQANALAAQADAAAAgMIAAgEQgEgeAAgMQAAgQAFgLQAKgXADgLQAIAnAZAlIATAbQAiAwAFAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAgBAAAAIAAgDQgDgMgCgMIAAgUIAAgGQAAgXAEgPIADgOQACAOAUAsIACAEIALAiQAFATAHALQAQgTAtgwQgQAvgUAvQAAAAAAABQAAABAAAAQABABAAAAQABAAABAAQAJgNAdgTIAtgdIACACQAAAJgUAnIgGAOQgEAIgFAEQgeARAAAGIABADIACAAQANAAAhgQQAbgNANgJIABAAQgTAfgkAeIggAYIAAABQABABAAAAQAAAAABAAQAAABABAAQAAAAABAAIAqgPIABABQgDAJgbANQgYAMgUAEIgDABIgUAGQgnAMgJAAQgzAAgTgHg");
	this.shape.setTransform(116.2,175.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#CCCCCC","#6A6A6A"],[0,1],125.1,-9.1,125.1,2.7).s().p("AhKAvIgNgEIAAAAIANgBQAPgFAYgMIASgJIANgIQAKgHAGgFQANgNAggUQASgMAGgFQAJAHgCAVQAAAJgDAZIgBAIIgBAGIgBAFIgBAAIgDAAIAAADIABACQgHAHgQAHQgXAJgLAAQg+AAgigIg");
	this.shape_1.setTransform(50,189.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FF9933","#660033"],[0.008,1],76.2,-16.3,76.2,23.6).s().p("AA4CoIAAgBIAFgGQARgVAAgIIgDgDQgPALgTAAIAAgJIADgLQAAgFgEAAQgGAAgWALIgZAMIAAgBQAJgRAAgGIgBgBIgDgBIhFAeQAEgKAAgIQABgKgFAAIgYAbQgNAMgXAHIgFABIgIABIABgBIAAgCQAAgFADgCQALgNAAgMQAAgGgFgCQgVgHgFAEIgCABIgCgEQgBgCAAgJIAAgEQAKgCAHgFQAHgHABgGIABAAIABgWQAAgMgNgeIgNgaIADgBQAYAFAJAOIAFANQADAHADAEIADgBIAAgJQAAghgVgnQgOgcgZgfIAAAAQAqAaAaAhQAWAbAKAfIACgBIAAgxIgBgIQgEgYgPggQgVgrgJgVQBJBMATAsQAHAPAAALIgDAJQgDAJABAIQgBABADADQAKgMAAgHQAAgHAJgeIAEgRIANgyQACAWAMAtIACAHQAOAtAAAaQAAAGgEAKQgEAJAAAFQAAAAAAABQABAAAAABQAAAAABABQAAAAABAAQAqgZA4g3QgFAJgCAPIgEAaQgKAkgOAQQAAAAAAABQAAAAABABQAAAAAAAAQABABABAAIAkgaQAbgTAXgJQgIASgcAqQgbAmAAABIAAADIADABIAWgLQAXgLAMgCIAAABQgOAUgVAQQgIAHgTAIIgBABIgLAEIgJACIgBABIAAAAQgMAEgKAAQgKAAgGgFg");
	this.shape_2.setTransform(93.7,174.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFFFFF","#919191"],[0,1],120.9,-8.1,120.9,3.7).s().p("AiSAtQgJgGgCgJIAAgFIgBgEIAGgDQAOgKAWgJQAUgKAagLQBBgaAiAAIABADIgZAOQgZAPgNAQQgGAJgOAJIgNAHIgMAGQgWALgQADQgKACgGAAQgDgFgCAAQgBAAAAAAQgBAAAAAAQAAABgBAAQAAABAAAAIAAAFIgGgEgAA0ArIgKgEIAGgOIABgHQACgOAAgTIAPgLQAQgKAcAAQARAAAQAVQAMAPADASIAAAHIAAADQABAFgJAGQgNAJgUAAQgMAAg1gFg");
	this.shape_3.setTransform(54.2,188.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#66CCFF","#B4FEFD","#FFFFFF"],[0,0.6,1],997.2,-60.1,997.2,5.8).s().p("AgBAJIAAgQIADAGIAAABIgCAIIAAAAIAAABg");
	this.shape_4.setTransform(67.6,138.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#67E473","#015C13"],[0.008,1],328.6,-53.2,328.6,53.4).s().p("AgVgQIAAgKIALAAQAGgDANgMQAIAAAGALIAABFIgsADg");
	this.shape_5.setTransform(40.2,150.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#67E473","#015C13"],[0.008,1],26.3,-24.1,26.3,82.5).s().p("AjnA5QAbgUAoAAQgUgOguAHQgzAMgVADQATgbAmgQQAogRAgAHIABgFIAFAAQghgVACgOQARAAAPALIAZARQAPgVAzgOQgDAHgKAJQgKAJgDAIIAvgOQAigIAVAKIgmAKQgVAHgKALQAmgDAeALQAdAMAJAVQgqgTgrADQAJAKAWAUQASASABARQgqg3grANQAnAbAFArIgbgaQgSgOgPABQAIAIgGABQgKgHgdAAQgHABgNAIQgMAHgDAAQABgHAKgHQAJgJACgFQgdgCgiAVIgbASQgQAKgNAEQAFglAfgUgADDAMQgLACgFAPQgHARgGADQgCgKAFgQQAEgQgBgIQgFgRgbgIQghgGgPgEQAogOAbAJQgHgFgagOQgWgLgKgKQAcgGAyAZQgLgPgPgiQAOgDAPAMIAWAVIADgRQACgMAHgDQAAAHACAKIACANQAfgQALgCQgCAHgJAGQgMAHgCADQA8ACAMAfQgNADgPgBQgPgCgIgFIAXAeQAQAUAAAVQgLACgMgMQgRgPgEgCIAOAsQAIAggRAMQgEgHgIgbQgFgXgLgGIgOAjQgKAVgLAJIAHhIg");
	this.shape_6.setTransform(80.8,115.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#FF9933","#660033"],[0.008,1],197.4,-32.1,197.4,7.8).s().p("AhmAJIAAgCIAIgEIADACQAJAEAFgBQANAAAGgGIACAAIAGAHQAEAFAFAAQAFAAAKgFIAMgHIAagVIABABQgFAKgBAFIABADIADAAQBEgPAYgPQgMAPgQAKIgTAHIgGACIgMAFQgJAFAAADIAAACIABAFIgEABQgYAGgtAAQgKgBgxgVg");
	this.shape_7.setTransform(305.7,190.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#67E473","#015C13"],[0.008,1],96.6,-70.2,96.6,36.4).s().p("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");
	this.shape_8.setTransform(409.7,167.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#67E473","#015C13"],[0.008,1],353.6,-31.2,353.6,8.7).s().p("AghA1IgHgFIgEgDIgCgDIgCABIgBABQgBAAgBAAQAAABgBAAQAAAAgBABQAAAAAAABIgGAAQgBgCAAgHIAAgKQACgGAFgCIgEgCIgDgCQgCgCAAgFQAAgLAJgCIAFgBQAFgCABgDQgCgFACgDQACgCAGgEIAJgFIAGgHIAIgHIAIAAIAAABIABAAIAAAAIACABIACgCQADgBAEAAIAAgCIACABIABABQAXgIASgBIAABbIABAAQAIAAAAACQAAABAAAAQAAAAgBABQAAAAAAABQgBAAgBABQABAAABAAQABAAAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQgBAAAAAAIgFABIgGAAIgKAAIABABIgUAAQgBAAAAAAQAAgBgBAAQAAAAgBAAQgBAAAAAAIgCAAIAAACIgDAAIgGgBIgBAAIAAABIgDAAIgDgDIgHAAIgHADQgFACgLAAIgCgBg");
	this.shape_9.setTransform(244.2,189.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#ADFC36","#BB9500"],[0.008,1],-50.1,-6.8,-50.1,8.4).s().p("AhhBbIgGgEQgMgJgHgOQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQgBAFANAQIAFAFIgfAAIgDgBIgOAAIgDAAIgCgEIgNgOIAAgBQgHgKgDgCQgQgZgGgaQAHALANAMQAPAOAJAAIADgBIAAgEIgNgnQgHgSgBgUQAIAQAEAFQAPAUAIgBIACAAIAAgLIgBgPIAAAAQAVAUADAAQAAAAABAAQAAAAAAAAQAAAAAAAAQABAAAAgBIgBgPQAAgKAFgBIgDAEIACABIADgBIAFALQABADAGAFQAFAGAEAAQAIAAADgoIAAAAIADAJQADAHAIAAQAHgBALgOIAWgbIAAAAIgBASQAAAMAIAAQACAAAagdQAZgbAEgGQgCANgFAUQgFASAAAOQAAAHACADQAFgIAkgVIAAAFIgKAfQgGAOABAMIAAAIQABAHAKAAQAJAAARgNQASgNAKgRIAAAAQgKAfABAGIAAAEQABAFADAAQAEAAAQgOQAQgOAMgDIAAAIQgDAKgEARQgFANAAAPQAAABAAAAQAAAAAAABQABAAAAAAQAAABABAAIABgBQACgJAOgGIAQgGIAQgDIACABQgOAJABAMQgOACgEAGQAAACAAAIIAAAGIABADIgMgBIgBABIgCADQgBACgOAAQgJAAgFgFQgDgGgBABQgEADgDACQgIAEgHAAQgFAAgBgEIAAgGIgCgBIgJAHQgGADgDABQgOAAgBgCQAAgBAAAAQgBAAAAgBQgBAAgBAAQAAAAgCAAQgTAHgMAAQgDAAAAgFIAAgCQAAgEgDAAIgJAEQgIADgGABQgGgBgBgDIAAgCQAAgHgCgCQgDAIgNAAQgIAAgDgPIgCAAQgBAAgFAJQgDAHgFACIgFABIgCgBQgDgBgEgFIgGgHIgCAAQAAADAFAKIADAHQAAAFgHAAQgKAAgNgIg");
	this.shape_10.setTransform(220.2,182.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#FEDD92","#D2A679"],[0,1],1026.9,-112,1037.9,-7.2).s().p("ApdAHIABAAIAAAAIgBAAgAm2gFIABABIAAAAgAJegGIAAAAIAAAAg");
	this.shape_11.setTransform(101.6,193.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#C25812","#FF9933"],[0,1],-3.5,16.1,-8.2,-1.5).s().p("AhFBQIgKgKIgKgIQgSgNgMgMQgKgKgCgOIgCgYQAEAIARAKQASALAKAAIACAAIAAgDQgBgKgJgRQgHgPAAgPQAAgLAFgDQAEAFACANQAGASALAAQAIAAAEgYQABAFAEAIQAGALAGAAQAMAAAYhAIAGAvIAAALIABAAIAUgTIALgUIAAAAIAAAuIgEAOIACACQAqgbANgbIABAAIgLAiQgGASgHAOQAAABAAAAQAAABAAAAQABAAAAABQAAAAABAAQAJgHAZgOQARgLAGgHIgUAjQgKAPgZAXIACACQAXgLArgZQgMAQgWAUQgTAQgMAGQgGADgFAAIgEgDQgDgCgEAAQgFAAgHACIgSAGIggAIIAAgBIALgNQANgSAAgJIAAgEIgCAAIgMAUIgIALQgJALgGAAQgEgKgFAAQgRAOgCAAQgKAAgDgFg");
	this.shape_12.setTransform(163.8,184.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#67E473","#015C13"],[0.008,1],28,-88.1,28,18.5).s().p("ANuCMIAAgBIAAABgANOCMIABgCIABACgAMFCMIABgBIAAABgALdCMIAGgDIAAABIAAACgALCCMQAEgEACgIIADAIQACADAEABgAF+CMQAEgEAVAAQAjgCAAgNIgBgEIAIAAIAAABIABAGQAAABABAAQAAABAAAAQAAAAAAAAQAAAAAAAAIAEADQAHAFAKAAIADgBIAdAAIACABIAmAAIAHAAQAUgBAGgEIAHAIIADADgAC0CMQAFgGADgGIABAAIAAAAQgCAEgGAIgABZCMIAGgGIAHAGgAizCMIAGgCQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAgAjmCMIAJgDIAJgDIAEgBIAAABIAAABIABAEIABABgAnkCMIARgBIACABgAqPCKIACAAIABABIgDgBgAm+BwIABgBIAAACgAEPBqIABgBIAAABgApQBiIABAAIAAABgAiaBeIAAAAIAAABgAECBJIAAAAIAAABgAttBCIADAAIgCACgAJdAxIACAAIAAACIgCgCgAmOAiIABAAIAAAAgANpAiIABgBIAAABgAESAMIAAgBIABABgADdAEIAAAAIAAAAgAq1iLIABAAIAAAAIgBAAg");
	this.shape_13.setTransform(144.9,177.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#67E473","#015C13"],[0.008,1],46.4,-16.2,46.4,23.7).s().p("ADFCtQgQgEgfgBIgdgBIgBABQgFADggABQgYgBgIgDIgEgDIgBgCIAAgCQAAgBAAAAQAAAAgBAAQAAgBgBAAQgBAAAAAAIgHADQgKAEgNAAQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAgBAAAAIAAgBIgBgDQA+gWAAgVIgBgCIgCgBIgdAJIAAAAIArgqIAEABIAQgBQARgCAFAEIADAEQACAEADAAQABAAAAgBQABAAAAAAQAAAAABAAQAAgBAAAAQAGgTACgEQAJgNAZgDIABgFQAAgGgDgJQgDgJAAgGQAAgIAIgGQAIgGAagJQAFgDANADQAKAAABgOQgBgGADgDQAGgGASAAQAGgBAGAGIAGAGIANgOIAAgCIAIAAQAIAAADAEIADAEIAGAJIAKgSIACgCQAFgJAEAAQAFAAAIAJIABABIACgBIAAgEIgBgJQACgOAaAAIAQAJQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAAAQgCgEACgDQACgHAOAAQAYAAALASQAEAHACAIIABAFIADgFQAEgGAEgDQANgOATAAQATAAANAQIAFAHQAFAHAAAEIAAACIAAABIAAADIACAAIABAAIABgDIADgBQAFABAEAFQADAFAAADQAAAGgMAMIACABIALgCQATAAgBASQAAALgIAKIAKAHQALAGAAAFIgBADQACABAGAAIAIAAQgCgaARABQAQgBADALQADAMABgBQAEAAAAgGQgDgFAAgDQAAgDACgCQAFgDAPAAQALAAAAAMIACAAQACAAADgEQAFgGANABQADAAAEAIQAEAIABAGQgIADAAAEQAAADADADQADAEAAAEQAAASgcAFQgdADAAADIABABQATgEAAATQAAAEgIAJIgHAGIgJADIgRABIAAADIAEAFQAAANgzgBQgGAAgCAEIgEAEIgEACIgmABIgCgEQgDgDgBAAQgBAAAAAAQAAAAgBABQAAAAgBABQAAAAgBABIAAAAQgDAEgRAAQAJgDghAAIgLADIgDgEIAKgHIAZgUQAfgWAAgNIgBgBIgCgBQgGAAgVANIgdARIAAgBQAJgJAVghQAUggAAgDIgBgBIgBgBQgUAVgEACIgmAYIAAAAQAGgLAKghQAJgeAAgFIAAgBIgCgBQgPAbgFAGQgQAUgVAMIAAgBIABhAIgDgBIgBABQgJAcgUAPIgDgfIgFgeQgDAGgRAlQgNAcgFAAQgJAAgDgPQgCgRgCgEIgCAAQAAAIgEANQgEAPgEABQgHgBgGgRQgFgTgFAAQgHAAAAASQAAANAQArQgggKgHgJQgJgWgEABIgBABIAAAJQACAJACASQADAQAHALQAGAIAWAQIgDACIgNAHIgFADQgJAGgNgBIgHABIgOAAIgVABIgXgFgAk2CsQgTAAgEgEIgBAAQgEgDgDAAIgTADIgJABIgoADQgNgBgOgDIgCgBIgBgBIAPgFQAKgFAKgHQATgNAHgKIABABQABAGgFANQAAADADACQAQgKAygSIAAACIgEAOIAAADQABADAEAAQAQAAAlgYQgDAJAAAGIAAAFQACAFAIAAQAJgBADgBIAHgEIABABQgFAOgFAHIgDADIgFgDIgCgBIgHABQgLAAgRAFIgDABIgPAFIgGgBgAnjCoIgDAAIglgBQAAAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAAAIgBgFQgCgUgLgPQgRgZghAAQgNAAgVAKQgKAFgFAEQAAgggRABQg5AAg0AZIgrASIgNAHQgYALgIAJIgBACIgCADIAAlVIADABIAEAAQAYAIAOATIACAAIABgDQAEgHATAAQAIAAAGACQAFADADAEQAFAFAAAEIgDAJQgDAHAAAFIAAAEIAFAAQADAAAFgDQAGgDALgBQAMAAAAAUQAAAaADAGIABgBIABgEIABgBQABgBAMAAQAHAAAMAJQALAJAAACQAAACgDAEIgCABIABACIAFABQAtAAgCANIgDAJQABAEAKAAQAFAAAFgCQAEgCASAAQANAAACAaQAAAGgIAHIgIAIIABADIACABQAHAAAWgQQAWgPABAAQAFABAFANQAAAGgDAEIACADIACAAQgBgIASAAQAaAAAAAgQAAAIARALQARALAAACQAAAHgRAGQgRAFAAABIAAACIADACIAGgBIAAANIAEAIQAOAQAKgEIAIgEQgBAEgDAGQgEAIgDADQgCAIgDAEIgBAAQgFAGgRABIgGAAgAL3CdIgnAAIgBgBIgdAAIgTgCQgEgCAAgGIACgDIADAAIACAAQAHgEAFgFQAHgJAAgHQAAgIgIgIIACAAQAqgHAAgWIAAgHIgFgGQAAgCAEgDQADgCAAgCQgEgZgPAAQgMAAgHAGIgEgFQgEgEgKgBQgJAAgGAFIgGAEIgJgFQgEgDgHAAQgSAAAAAZIgJAAQgBgHgSgLQAGgKAAgKQAAgJgCgEQgFgIgRgCQAFgHAAgFQgBgLgFgEIAAgMIACgJQAGgOAPAAQAHAAAEAGQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIAAgYIgCgJQAAgHANgBQAMgBAAgGQgEgPAAgHIAAgEQAEgFANAAQAVAAAIALQADAEACAJIABgBQABgBABgLQAFgLARAAQALAAADAIQADAHADAAIAUgKQAGAAAIATQAIARADABQABAAAAgBQABAAAAAAQABAAAAgBQAAAAABAAQAMAKAAAEIgCAHQAAACAXAEQAXADAAARIAAAJQgDANgKAQQAgAQAAAHQAAACgGAFQgHAFAAAFQAAADAOAGQAOAGAAAJQAAAEgCADQgBAAAAgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQgHgBAAAKIAAARQgZgUgDgIQgLgbgCAAIgBAAIAAAEIAKAbQAEAFABAJIACAMIAAACIgCAAQgOgKgLgUQgKgSgBABIgCAAIAAADQADAaAUA+QgSgIgQgUIgMgSIgCABIAAAGQAEAYALAWQACAEAIAJQAAAEABACIAGAGIgCABIgKABIgMADgAi3A+IAAAAIAAAAgAnUgNQAAAAAAAAQABAAAAgBQAAAAAAAAQABAAAAAAIABABIgDABgABJgPIABAAIAAABIAAABg");
	this.shape_14.setTransform(123.5,174.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#ADFC36","#BB9500"],[0.008,1],177.5,19.9,172.4,2.3).s().p("Ag1BxIARgGIAOgHIAQgKQAWgRAAgKQAAgBAAgBQAAgBgBAAQAAgBgBAAQAAAAgBAAIgnATIg0ANIAAAAQAEgIAAgGQABgHgFAAQgbAVgPAJQgLAGgEAAQgDAAgEgGQgFgHgCAAQgDAAgFAEQgDACgEABIgKABIgCgBIgGgDIAZgOQAAgFgGAAQAFgDAAgFQgDgJgJgGIAAgPQAAgQgDgHQgHgNgFgSQAIAFAFAKQAGAMACACQAGgLAAgVQAAgJgFgcIgHgfIAbAjQAWAdAHAQIACAAQgDgZAVglIATgeIAJgQIAHgOIAAAAIAAASQgCAHAAASIACAgIAAAQQAAALADAFIADgBQAGgTAvgbIBRgsIAAAAIg1BaQAAAAAAABQAAAAABABQAAAAAAAAQABABABAAQArgVAhgHQA1gMATgGIg7AkQguAbAAAFQAAAAAAABQAAAAAAABQAAAAABABQABAAAAAAQALgDAqgGIA5gIIAAABQh8BFAAAEIADAEQANgGAVgDIAqgFIAAAAQgVAegfAQIgGADIABACIADABIAQgGIAsgQIAAABQgHACgHAGIgGAHIgGAFIgFACQgWALg2AAIgGgDIgDgBQg0AOgWAAQgWAAAMgPg");
	this.shape_15.setTransform(315.1,180.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#67E473","#015C13"],[0.008,1],217.5,-90.3,217.5,16.3).s().p("AGCB2IABgBIABABgABuBuIACgBIAAABgAC3BmIABgBIAAABIgBAAgAGaBfIABAAIgBAAgAC1BZIABAAIAAABgAnBA5IAAAAIABAAgAHBAAIABAAIgCAAgAF1grIAFAAIgFABgAFYhlIAAAAIAAABgADLh0IAAgBIAAABg");
	this.shape_16.setTransform(288.8,179.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#67E473","#015C13"],[0.008,1],-71.5,-68.8,-71.5,37.8).s().p("AAAAFIAAgLIABgBIAAANIgBACg");
	this.shape_17.setTransform(351.6,157.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#67E473","#015C13"],[0.008,1],175.2,-18.3,175.2,21.6).s().p("AsLC1IAAgCIAFAAQAAAAABgBQAAAAABAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAgBAAQAAgBgBAAQgBAAgBABQABgBABAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgCgIgBIgBAAIAAhbIADAAQAKAAABACQAAABABABQAAAAAAAAQABABAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAgBIAEgIQAGgHALAAIAIACQAFADADAAIAFgCQALgGAEAHIACACQACAAAEgFIACgIQgEgLAAgGIAAgFIAUAAIAIAEQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAAAAAIAAgGQgDgIACgGQAFgNAegBIAFADQADAAAGgIQAGgJAGgBQAEAAAHAKQAIAIAEgBQAAAAABAAQABAAAAAAQAAAAABAAQAAgBAAAAQgDgIABgGQACgLASABQADAAAKAIQAKAKADAAQACAAABgEIADgIQAFgMAVABQAHgBAPAYIgBAGQAfgIAGATQAAAFgFALIABAFIAFAAIAQgEQgCAGgFAGQgDADAAAGQAAADACABQAHAJAEgBQACAAAEgEQAJgJALAKQADACACAEQAAAEADABQAcgGAMAHQAIAFAAAEQAAADgGAHQAAABAAAAQAAABAAAAQABABAAAAQABAAABAAQAFgDATAAQAQABALAFQAJAFAAAFQAAAHghAVIgBABIgNAIQgaANgTAAQgNAAAAgDQgBgDgCAAQgBgBgFAHQgEAGgEAAQgPgJgEAAQgBAAgDADQgCAEgJAAQgCAAgFgFQgFgEgCAAIgDAAQAFAMggAAIgEgGQgBAAAAAAQgBAAAAABQAAAAgBAAQAAABAAAAIAAACQAAABgVAAQgFAAgGgGIgFgFIgEAAIACAIQgCAEgRAAQgGAAgBgEQgCgEgCAAIgFAFQgGAEgUAAQgKAAgKgIIgKgHIgDABQAAADADAGQgBAGgTgBQgDAAgGgDIgGgFQgDABgCAFQgEAFgUABIgYgKQgaAPgQADgAEXCnIgfgGQgFgHgEgEIgCgBIgDgBIgBAAIgDgDIgEADQgIADgWAFQggAHgQAAQgrgBgJgHQgCgGgCgBQgBgBAAAAQgBAAAAgBQgBAAgBAAQAAAAgBAAIgGACIgGABQgKAEgSAAQgYAAgNgEIgDgBIgGgDIgBABIACgCIAFgEIAhgYIgBgCIgCgBQgoAPgJABIAVgTQARgSAAgCIAAgCIgEgBIhBAJIB6hKIgDgBQhiANgNADQBqg7ABgKIgBgBIgDgBIhOAVIgGAAIAAgDQgDgEABgHIAAgHQAEgJATAAQARAAAIAEIAIADQABAAABAAQAAAAABAAQAAgBAAAAQAAAAAAgBQAAgUARgPIAJgFIANABQAJABACgJIACgLQAAgUARgBIAKACQADgZAOgLQAOgOAbgBQASABANAIIANAJQACgBAEgHIAHgLIABABIABgBIACgBIAGgFQAFgDAOgEIAeAAQATADAJAOQAJANAFAAIAZgHQAcgIARAAIAMAAIALARQAHAJAGAFIBXABIA9AGQAKABAGAHIAFALQAGAUAOAXQAbABASAGQARAGACAKQAGAXAAAIQAAAMALAGIAWALQAGAEAGALQAGALAAAGIAAAZQAEALAYgEIADAEIAAAHQAAAWgiAKQgJAGgLAFQgWAIgpABQgCAAgDgDQgEgDgDAAIgbAIQgcAJgLABIgKgIQgEgCgIAAIgJABQgJADgBABQgKACgNADQgKAEgSACIg0AGIgfAAIgLABQgIAAgJgFIgLgGIgYAHQgWAFgOABQgFgBgegEgAlECTIABgBIAAACIgBgBgAA7AdIAAAAIAAABg");
	this.shape_18.setTransform(327.8,176.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#67E473","#015C13"],[0.008,1],85.4,-60.1,85.4,46.5).s().p("AGcErQAKgkAAgQIAAgIIgDAAQgJAAgSAPIgVARIAAAAIAAgHQAMghAAgSQAAAAAAgBQAAgBgBAAQAAgBAAAAQgBgBAAAAQgfA8gfAAQgFAAAAgLQAAgKAIgWQAIgYAAgFIAAgGIgDAAQgMgBgcAaIAAgIQACgNAGgVQAFgRAAgOQAAgEgCgCIgbAiQgXAWgLANQgDgHAAgLQAAgMgCgFQgfAvgKAAQgHAAgDgJQgEgKgBAAQgCAAgEARQgDAUgDAGQgKgHgDgIIgDgJIABgCQADgFAAgCQAAgNgOgGQgOgFAAgCQAAgBAGgHQAHgGAAgEQAAgJgfgOIAAgBQAJgPACgNIABgJQAAgZgugBIACgGQgIgUgLAAQgDAAgIgQQgHgSgIABQgFAAgGADIgIAGIgFgIQgFgGgKAAQgWAAgEAOQgJgPgYAAQgVAAAAAOQAAAJAEAMIgMADQgMADAAAKIABALIAAAPQgFgEgEAAQgZAAgBAbIgBAFIABAGIgGgBIgEAAIgEgKQgNgagcAAQgVAAgVAWIAAAAQgIghgjAAQgWAAACANIgFgEQgGgCgMAAQgKgBgEADQgIAFAAASQgFgIgHAAQgGAAgGALIgCACIgHANQgBgFgDgCQgEgFgIgBIgGAAIgJAAIgCAAIABABIgBAAQgHAIgCAAQgLgHgLABQgLgBgHAHQgHAEgBAFIgBAJQgQACgLADQgrAPAAAVQAAAHABAGIAEAPQgWAGgKAMIgKASIgEgEQgBgBgQAAQgPAAgHABQAcgdAAgLIgBgBIgCgBQg7AmgbAIIgBAAIABgBQASgJAIgOIALgXQARgYAAgYQAAgGgDgDIhLA0IAAgBIAPgrIAKgkIACgIQAAgIgDAAIgDACIgIAOQgQAYglAjIgSg7QgWg+gGAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIAAgBIAAgIQABgNgEAAIgCABIgGA8IgCAXQgBAUACAOIAAAAQgUgVgJgNIgDgDQgNgbgIgLQgJgMgLghIgIgeQgGABgKAjQgKAiAAAFIAEApIAAAEIAAAGIgSgKQgMgHgEgEIgPgXIgCABIAAAQIADARIALAoQAJAfAFACQgVASgUAMIAAgBQAGgNAAgKQAAgNgQhCIgBgEQgIg7gHgaQgHASgJAkQgFAUgGAPIgHASIgHgSIgIgUQgJgWgNgPQgRgUgYgZIgTgUQgJgJgBABIgDAAIADAIIAdBDQAPAfAEAYQACAKAAAKIgBAKIgUgeQgKgMgJgIQg3gzgLAAIgCABQACAGAlA+IABACQAVAlADAYQgEgIgHgHQgNgMgTAAIgFAAIAAAFIANAeQANAeAAAKIAAAQQgEgFgIgEQgRgJgBgLQgGgjgZAAIgOABQAAgFgEgHQgFgIgFAAQgFgBgQAMIgSAOIgBgBQAGgGAAgHQAAgIgDgIQgHgQgTAAQgIAAgEACQgFACgLAAQgBAAAAgGIAAgKQAAgFgIgEQgLgEgXADQAFgIgPgKQgQgLgXgBQABgQgCgKQgEgSgPAAIgVAGQAGgNAAgHQgBgGgEgFQgEgGgHgDQgHgDgKAAIgXAFIgCAAQgHgGgLgFIgHgEIgSgGIgDgBIAAhFIADAAIAAA7IAtgDIAAhGIACAEIADALQACAEABAAIAFgEIAUgTQAHAAALAUIAGALQADAAAIgLIAHgKIAOAKIARAOIAFgLIABgCQAEgKACAAQAJAAALALIAGAFIAFAHIgBgGIAAgBIgBgCIgBgDIgFgLQgIgQACgNQAEgEALACIAKABIAAAAQAEABADACIABAAIABACIADgCIAEABQAEACAEAAIgHgNQgEgHABgIIAGgDQADgCADAAQAGgBAFAFQAGAFAEAAQAAgHADgIIADgGIAEgGQAEgEADgCIAMgDIACABIAGACIACAAIABAAQAFgDALgKQAKgKAJgCQAKAHgHARIgFANQgDAIAAACQAHgBALgIIADgCIADgDIAGAAIABACIAFAFIAGADIAAAFQAAANAFACIAFgMQADgJADgCIABAAQAAAAAAABQABAAAAAAQABABAAAAQABAAABAAIACAAIAFAEIALAFQAAAAABAAQAAAAABAAQAAAAAAAAQABgBAAAAIAAgBIAFACQgFgLAAgJQAAgFACgFQANgFAPAFIAOAIIAIADIABgEQAIgVAXgOIAEAQQABAKAHACQAGAAALgKQALgNAJgBQAEAEgDAGQgDAHACACQAEgBAKgGQAHgGAJABQAEACACAHIAAABQACAFADACIADAAQgDgIAEgKQADgJAIgBQAGABAJAGQAJAGAGABQgDgIACgHQABgIAHAAIAMAMQAHAJAHACQAFgMALgEQANAFAQAUQAFgJANAAQAJADAFALIACADIAIAQQAHABAFgJQAGgHAHAAQADAOASAKQAPgRAJgGIAEgDIACADIAIANQAFAIAJACQAEAAAFgGQAEgGAFAAQAAAJAKAIQALABAJgDIAPgIIAIgOQANgUATgOQAcgUAggCQgbARgMAKQgQAOgIARIgCAIIASgHIAYgKQAbgJAWAFQgGACgfALIgGADQgSAHgHAJIAjAAQAZAAAKAFQAFgJARABQANAAAJAGQACgIAFgEQAFgDAKABQAIACAIADIALAGIADgFQALgVAhgLQAOAIACAGQAIgFASgHIAAABIACABQAAAAABgBQAAAAAAAAQABAAAAgBQAAAAAAgBQACgBANAAQAJAAAGAHQAGAJAFAAQABAAAAABQABAAAAAAQAAABABAAQABAAAAAAIgBgCIACgCIgCAAIgEgPIgHgUQAHABAMAGQALAGAIABQgBgYgXgWIgTgPQgKgJgDgHQAOgCAVAEIABgBIAGADIABAAIAAABIAIAHIAMAKIAAAAQAHAJAHAEQABgRgLgQQgOgUgCgIQADgBAEABQACACAIAAIACABIADACIgDAAQAMADAIATQAJAUAIAFIAMgeQAHgRAHgKQACAPgIASQgIATAAAFQAIgCARgRQARgRAOgCQgHALgPALIgZAUQAHABAZgFQAXgGALADQgIAGgVAHQgWAFgIAFQAFAEARgDQAQgDAEAHQgQAGgcAGQAAAGALABQALACgBAHQAAAFgEACQgFADAAACQAEAEAEgBIANgBQAEAFAFAPIAEAIQADAHAFACQgDgGAEgDQACgBAEgBIAHABQAGACAEAHIAJAUQAGgFAKACIASAGQgDgQAUgFQALgCAagDQAAADAFAEIgFAGQgEAEAEAEQAFgBAJgIQAHgGAIABQAIAAAIAMQAJAMAGABQgEgIACgJQACgKAJgBQAIABAIAJQADgMAHAAIABAHIABAAIACAGQADAHAEAEQAFgRAUABQAPABAQAKIATgTQAFgDAGAAIAEAAIAEAAIAVAFIAAABQAEADADADQACgFAEgEQAJgJATADQAOAEAGAHQAGAHABAJQAAgJADgFQACgGAEgDQACABADAGIACADQABAAAAABQABAAAAAAQABAAABAAQAAAAABAAIAAAAIADgGQABgEADgBQAFABADALQADAMAFACQACgGAOABQACABACAJQACAHAEABQAOgMAcABQAMAAAWADIACAAIAAAAIAAABIgCACIABABIACAAIADgBQACABAJAAIACAAQAMAAADgDIACgDIACgBIAAAAIABAAIADABQABAAAAABQABAAAAAAQABAAABAAQAAAAABAAIAAAAIABAAIADgIIAFgSQAFgRAKgDQABAKgFAJQgGALAAAHQAGgCAJgIQAJgHAHgCQAFAJgKAPQgJANAHAIQAFgBAEgDQAGgCAFAAQAJAAADAIIACAHIgBACIgKAQIAQgOIAGgIQAOgNANAGQAEABAGAKQAEAKAHgBQgDgBAEgGQADgFAFABQAKAAAMAJQAMAKAEAAQACgMAQAGQANAFAFAIIABACIADgCQAFgEAMACIALACIALACIAAgCQgCgKgNgYQgNgZAAgLQAKAEAPANQAPAMAJAGQgBgOAGgOQAHgQACgIQAFAEAGARQAFARAHAEQAagbAVgKQgFAJgOARQgOAQgEAMIAggLQAYgIAOAEIgZAOQgPAIgHAIQAFACAWABQATAAAIAEIgSAGIgNACQAEAFAIAFIALAGQANAGAJABQABACgDAGQgCAEAGAAIATgHQAPgEALAGQAAAIgHAFQgJAFgBAGIAVgHQAJgDAMAJIAAACQh9AHhwAlQBuACBvgRIA6gHIgCgEQABABAAAAQABAAAAAAQABABAAAAQAAABAAAAQB+gPCEABQCPADCJgHIkfgEQAAgTAKgCQAFABAGAGQAGAIAGABQAAgOAFgHIABgBIADgBIAEABIABABIACADQADAEAEAAQAGgVANgFQAGADAKAJQAHgJAJgCIAMASQAHgEAHAFIAKAKIAIgBIAIgBIAEACQAFAEACAAQACAAACgGQABgGAKAAQADAAAJAGQAJAEADABIALgFQAMgFAKABQALgBAGAGQAFAFADAAIAKgEQAJgEAHAAQAJAAAEAFIAEAGIABAAIABgBIABABIAOgHIACgBIAAARIgCAAIAAAMQgJAKgHANQgFgFgGgEQgLgGgLAAQgiAAgTARIgDADQgLAJgEAMIgTAQQgQAOAEAOQgZAEgLAJIgGAGQgFARgEAGIgGgDQgIgCgQAAQgWAAgGAKQgCAEAAAIIAAAJQABAFACACIgTAFQgTAEgbAMIAAAAIAAgBQAmg+ALgUIAFgJQAAAAAAgBQgBAAAAAAQAAAAgBgBQgBAAAAgBIgTAMIg5AhQg1AcgPAQIgDgvIADgrQAAgQgDgHQgHAJgJAWIgCAFQgJATgEAHQgcAqgCATQg0hIgHABIgDAAIAAAGQAOA1AAAVIAAAQQgjgpgBgBQgBAAAAABQgBAAAAAAQAAAAgBABQAAAAAAAAQAFARAQAiQAEAJABARQABALACAIQgKgEgQAAIgRABQAEgOgPgGQgFgCgMACQgLACgMgJQgBgBAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIgBgCIgmgBQAAgFAFgIQAGgIAAgDIAAgDIgFgBQgHAAgDACQgCACgGAAIAAgBIAEgOQAAgSgkgBQgEgdgeAAQgQAAgHALQgEAFgBAHQgPgRgLAAQgPAAgFALQgDAGABAGIgGgIQgFgHgGABQgJgBgHAKIgIAJQgegBgKAHQgFAEAAAKIAAAKQgVgFgHAGQgDADACAEQAAAKACAFIAAABIgBAAQgFgCgMAGIgFAFQgOgGgEAAQgJABgHAFQgEADgCADIgQAAQgZACgSAEIgDADIgCAAIgCABIgDACIgCAAIAAgEIgCgDIgDAHIgJAAIgGAHQgEAFgFADQgDgEgBAAQgHgBgTAJQgRAHgFADgAQWgJQgsAAgqADIACgSQADgPAIgFQANAMAGAFQgBgeAKgFIAAAAQAGgCAFACQAEACACAFQAEAQACACQAPgVAQgCQABAFgDAFQgEAGABAFQAFAAAFgEQAFgEAGABQAEACAFALQADALAHABQgBgQAKgMQAFABAHAGIAIAGIADACQACgYAaACQADADAFAOIABACIAAADIAGgEIANgGQAKgHALAAQAJAFAFAOQAAACgEAHQgDAFADAEQAFABAFgDQAEgFAEAAIAHAJIAEAGIjAgDgAUog0IgCgCIACABIAEAEIgEgDg");
	this.shape_19.setTransform(194.6,157.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#FEDD92","#3CCC49"],[0,1],1638.8,-460.5,1698.8,-233.7).s().p("EgoOAK0IAAlEIgGAAIAAtnIABgBIABAAIADgCIABAAQABAFgBAHQACAIAPAHIAXALIADAAQAbAIAyAAQA0gBARgOQAHgFAEgIQAVAKA4AAQAVAAAPgJQALgJAAgIQAIAOAlgKQAWgBAIgEQAKAIAhAAIBEgGQACAAAGAEQAGADAHAAQALAAAFgCIACABQAJAAAJgGQAFgDAKAAIATAAIAHAFQAIAFATABQAHAAASgIIAXABQAHAFADAAQAGABAEAEQAJADAkABQAdgBA7gRIAYAAQAEADAJAAQAGAAAGgCIACgBIALAAIACADQAGAFAeABQAhAAAFgFQA0AAAZAGQAYAFAIAAQATAAgFgDQAbAAAJADQACgBAKgGIAKgHIABgBIAOAAIAIAHIAEAGQAFAGALAAQAGAAAOgPQAEAAADAMQANgHAKgJIABAAIgPAPIAAAEIACAAIAhgIIAkgKQAFAAAEAGQAFAAAIgFQADAFAGAAIAMgDQAcABABADQASgBAAgGIABADIABABIAAADQAFgBARAAQAdgBAAgFIABgBIDOAAIAEAEIAAABIABAAIACABIABAAIAjADIASgBIABAAIAAgDIACABQALAKAQAAQAJAAAAgJIAAgGQACADAHAAQAFAAAFgEIAPAAIAHABIAEgBIAHAAIAAACQACAFAJAAQAIgBAOgGIACAAQAAALAHgBQAGAAAXgGQAHAAAHADQANgBAIgGIACAAQAAAAAAAAQAAABAAAAQABABAAAAQAAABABAAQADAEAIABQAHgBAKgHIAAAAQAGAJAUAAQAGAAACgCQACgDARgBIgCAHIgBAJIAAABIAAABIABAFQABAFACACIAHAAIACgCIADgCIAFAGQAHAEAKAAQAGAAAHgCIAKgCIADABQABACAEAAIADAAIAVABIAVgCIAEAAIAOACQAYAAAegRIAKAFQALADAHAAQARAAAGgJIAIAEQAFACAKAAQALAAACgDQAAgEABgCIAOAGQAJADANAAQAIAAAEgCIALgFQADAGANAAQAJAAAEgDIAFgFIAEAEQAFADAPAAIALAAIABgCQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAIAAQAQAAAGgFIAFgEIAGADQAFADAFAAQAEAAAFgDIAHgDIAHADQAEAFAEAAQAFAAADgEIAEgFQAEADAJAAQAbAAAegRQAEAFAPAHQAdANAkAAQAfAAAbgIQAJALAWgEIApgLQATgFABABIADAEQACABAOAAQAwAAAagQIACAAQABAFAEACQAJADAjABQAeAAAJgIQACALAHACQAMAFApgBQAWABATgGQAegJAJgBQABAEAHAEIAAgCIACACIAIAHIARACIAzAIQANAAAWgGIAXgGQADAAAJAFQAKAFAHAAIAKgBIAfAAIA4gGQAogDAYgNIAIAAIAGAGQAGAFAOAAQAHAAAzgSQAAAAABAAQAAAAABAAQAAABABAAQAAABABABQACACAFAAQAoAAAagKQAMgEALgHQAkgJgBgdIAAgHQgCgFgGgFIgWAAQgCgCAAgJIgBgNIAHAAQAGgFAGABQAIACADgBIA8AAQADAEAAAEQAEACAfAAIACAHQADAEALAAQAEAAACgCQAdgFAJgPQAEgHAFgMIgDAMIgDATIAEABQAPgEAQgPQAVgUAGgEIABAIIgDARIABAEIAGABQAOAAANgEIAggGIgBAMIAAAHIAEABIAJgEIAQAAQAEADAFABQAFAAAEgFICtAAIANgCIAuAAQATANAIAAQAEAAABgKIACgNIAFAJQAEAGADAAIADgCQACgCADgBIADAHQADAEAFAAQAGAAAJgNQAKgOgCgJIAAg/IAMAeQAHAWAAAKIgBAIIADAAQAIABAGgXIAIAXQAGAQAFAAQABAAAGgLQAFgLABgEQABADACAOQADAMAIAAIAIgCIAVgDQACAKAJAAQAEAAAKgIIACADIABACIAAABIADACIAOAAQAUgDAKgDQAJgCAJgGIABABQAAAEgCADQAAABgBAAQAAABgBAAQAAABAAAAQAAABAAABIAAAEQABAEAEAAIARgGIAcgIIAcgIIAOgFQANgHAIgBQAVgFATgBQgDADgEAKIgDAKQAAAHAFgBIARgFIAdgKIASgGQALgEAOgCIgHAUQgEAJAAAIIAAAEIAEABIANgFQAMgFAEgCIAJgCIAEgDIAGAAIgBAKQAAAIAJAAIBDgIIADAFQAFADAGAAQADAAANgFIAPgGQACgDADgGIADgIQACAKAEANQAFAPAFAAQAHAAAEgIIAGgKIADAIQADAIAEAAQADAAAHgJIAKgMIAEAFIAJAAIAEgCICHgBIgHUJg");
	this.shape_20.setTransform(295.7,241.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#66CCFF","#B4FEFD","#FFFFFF"],[0,0.6,1],1712.1,-8.2,1712.1,100).s().p("AfQM8QgEgPgFgHIg5AAIgEgTQgDgJgDgHIgVgBIgdAEQAFgQgCgLQgEgTgigBQgEAAgIAGQgIAEgJAAQgEgJgFgGQgKgMgeANQgOAGgHAPQgHANACAKIgHgFQgDgCgQAAQgGAAgHAHQgIAIgEAAIgUAAQgLAEAAALIABAPQgRAAgNADQgHACgDACIAAgRIgBgBIAAAAIgQgPQgIgGgPgCQgGgEgDgEQgCgCgBgPQgBgMgHgGIg8gCIgEgNQgDgJgMgFIgkgEIgsABIgGAFQgDAEgGABIgHgLQgEgJgIgDQgIgCgOAKQgPAKgDAAIgEgBIABgBIgCgDIgigBQgSAAAAAXIAAAEIAAgBIhfACQgLACgRAHIgQAGQgGAAgMgQQgJgMggARQgZAOgEAEQgDADAAAMIACANIADANIAAADIgCABQABgGgBgBIgmACIgHAEIgDADIgIgDQgGgEgeAAQgJAAgHAHQgFAGAAAGIAAABIAAAAQgWgNg3gBIg2AAIAAgcQgDgIgIgJIgRgOIgmAAIgCABQADgHgBgDQgDgGgVAAIgYABQgDgDgCgIQgBgHgDgCQgZAAgBgCQgBgGgCAAQgCgBgEADQgFAFgDAAIgDgGIgRAAIgaACQgHACgFAEIgEAGIgBAEIgEAEIgCACIgDAEIAAABIgIACIgFADQgEgKgOABQgGAAgJADIgLAEQgIgKgRAAQgMAAgKAFQgJAEgEAAQgOgLgIAAQgKABgEAFQgCAEgBABIgJgGIAAAAIgFgBQgJADgFgBIgjgbIgCgBQgFABgEADIgHAGIgCgBIgBgBIgBgBIgEgFIgCgBIAAAAIgBgBIgFAAIgDAAQgFADgFAIIgJANQgBgFgKgFQgEADgDAHIgHALIgFgGIgHgFQgEgDgDAAQgEACgEAFIgFAIIgBABQAAgEgGgCIgIgDQgCgXgTgCQgQgCgWAKQgCgSgTADQgTACgGANIgJgGQgFgEgHABIgDAHIgEAIIgCAEIgCgDIgFgIIgEgHIgBgBQgDAAgDACQgCACgEgCQADgDgBgDIgDgFIgBgCQgHgBgGADIgFAEQgKAHgHAAQgBgHgEgEIgFgDQgJgEgKAFIgBACQgEAIgCARQgEgBgFgGQgFgGgFgBQgFAIgDAPIgFAWIgCAAIgEgDIAAABQgQgMgFAAQADgFAAgEQgIgIgQAAQgNAAgMAGQAAgFgDgCQgDgFABgCQgOgBgKgEIgJgFQADgCAQgDIAHgCQAGgDABgEQgJgDgQgCIgbgFQAEgCAVgLQAPgJAFgKQgMgDgUAFQgaAEgIABQAEgIAOgPQAKgPgCgMQgPADgQAPQgSAQgJAEIgIgZQgGgNgKgEIgIAaQgGARgEAIQgZgWgWgKQACAPAMAZQAIAOADAKIgFABQgFgGgGgBIAAACIgGgJQgJgKgKABIAOAOQAIAJADAHQgJACgVgKQgSgKgPAJQgIgKgNgEQgPgFgIAKQgCgIgHgEIgEgCIgEgBIgNgDIgDACQgDAAgCgCIgBgCIAAgBIgKAQQgCgPgPAAIgGABIABgDIgGAAIgCAEIgDgBIAAgDIAEgKIABgCQAIgOgGgJQgHgCgIAHQgHAFgDgDIADgMIACgIIAAgEIAAgDIgBAAQgOAAgGAQIgGARIgBADIAAABIgBACIgBABIAAABIgBABIAAgBQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAABIgBABIgCABIgCAAIAAABQgEAFgTAAIgBgDIACgCIgEgBIgBgBIgEAEQgNgHgYAAQgKAAgJACQgQACgMAGQgBgHgGgHIgCgCIgKAAQgFAAgBACIgCgDQgKgTgHgEQgCAJgFADQgEgJgKAAQgCAIgFAFQgHgQgWgBQgTAAgNALIgCACIgCgCQgOgLgUAFIgIACQgOAGgIAMIgXgLIgDADQgEAFgJAAIgHAAIgIADIgBgFIgDgBIgBAAIgBgGIAAgEIgDgDQgKABgBAKQgIgHgGgCQgQAHACARQgHgMgVgEQgYgFgHgFQgGACgLAAIgRABQgUADgCARQgQABgSgQQgFgGgGgDQgLgGgJACQgEgIgMgRQgLgOgDgMIAggJQACgEgEgCQgBgBgBgBQAAAAAAgBQAAAAAAAAQABgBABAAIAXAEIgDgFQgagBgIgCIAUgJQAMgEADgJQgJgEgOACQgTAEgJgCQADgGAPgMQAOgLAAgIQgQgCgPAMQgRANgDAAQAFgSAAgJQABgPgIgGQgFAHgJAWQgIAUgGAIIgOgYQgGgJgHgDIAAgCQgDgGgKAAIgDAAIgQgCQACAIANARQAKAOABAOIgOgLQgCgFgEgDIgHgGQgEgEgCAAIgIgHIgBABIgCABQAFAFAEACIABABIgGgBQgJAAAAACIgLgBI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");
	this.shape_21.setTransform(295.6,83.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B16A01").s().p("Ag5CCQgEgFgOgCIACgHIAFgFIBHhXIAlglQAqgrBShMQAEAcgiAfIgdAZQgQAOgGAMQhEA7g6BZIgFACIgDACIgEADIgCgDgAiTB2IADABIgMADQAFgEAEAAgAikB3IACgCIAGgJQAGgKADgPIAEgwIAIgtQAFgagDgOQAOACgCAIIgBAKIgCAAQgHAagDAxIgFA6IAAAEIAAACQgHgBgLAGIgHAGg");
	this.shape_22.setTransform(80.5,128.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("APtCvIAEgBIADALgAPlCvIACABQAFACgDACIgEgFgAMkCRIADABIgDABIAAgCgALWCKIgBAAIABgCIACgCIAAACIAAACIgCAAgAgKBHIgCgGIADgBIABACIACAJgADkA0IAEgBIAAABIACAAgAgDgSIADAAIAIABIgCACIgJgDgAvBhKIABAAIgCASIABgSgAlLhTIAHgCQgBACgFAFgAvvi4IgBAFQgHgEAIgBg");
	this.shape_23.setTransform(164.3,132.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("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JACAAATIgDAAIgFgGIgGgIQgEgBgFAFQgFAEgFgBQgCgFADgFQAEgHAAgCQgGgOgIgFQgLAAgLAHIgNAHIgFADIgBgDIgBgCQgFgOgCgCQgbgDgBAYIgEgCIgHgGQgHgGgGAAQgJALAAARQgGgCgEgLQgEgLgFgCQgFgBgFAEQgGAEgFAAQAAgFADgFQADgGgBgFQgQACgOAVQgCgBgFgRQgCgFgDgCQgEgCgGACIgBAAQgJAGAAAdQgGgEgMgNQgIAFgDAPIgDASIgHAAIAFgXQAEgOAEgIQAGABAFAGQAFAGADABQADgRADgIIABgDQAKgEAKAEIAEADQAFAEAAAHQAHAAAKgIIAGgDQAGgDAHAAIABADIACAEQACAEgDADQADABADgBQADgDACABIABABIAEAGIAFAIIACAEIADgEIAEgJIADgGQAHgBAFAEIAJAGQAGgNASgCQAUgDACASQAWgKAPACQAUACABAXIAJADQAFACAAAEIACgBIAFgIQADgGAEgBQAEAAADACIAHAGIAFAGIAHgLQAEgHADgDQAKAFACAEIAIgMQAFgIAFgDIAEgBIAEABIABABIAAAAIADACIAEAEIABAAIABABIABABIAIgFQAEgEAFAAIACABIAjAbQAEAAAJgDIAFABIABAAIAIAHQACgBACgFQAEgFAKAAQAIAAANALQAEAAAKgEQAKgFAMAAQARAAAIAKIAKgEQAKgEAGAAQAOAAAEAKIAFgEIAIgBIgBgBIAEgEIACgCIADgEIACgFIAEgFQAFgFAHgBIAZgCIARAAIAEAGQADAAAEgFQAEgDADABQABAAACAFQABADAYgBQAEADABAHQABAIADADIAZgCQAVAAACAHQABADgDAGIACgBIAnAAIARAPQAIAIADAJIAAAcIA2AAQA3ABAVAMIABABIAAgCQAAgFAFgGQAGgHAJAAQAfAAAGAEIAHADIAEgDIAHgEIAlgCQABABgBAGIACgBIAAgDIgCgNIgDgNQAAgMAEgDQADgEAagOQAfgRAJALQAMARAGAAIAQgGQASgIAKgCIBfgBIABAAIAAgDQAAgXASAAIAiABIABADIAAABIAEABQADAAAPgKQAOgKAIACQAHADAFAJIAHALQAFgBAEgEIAGgFIArgBIAkADQAMAGADAIIAEAOIA9ACQAGAFABANQABAO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MQAIAVAWArQAOAgAFAYIABAIIAAAyIgDABQgJgggWgbQgaghgrgaIAAAAIAAAAQAZAfAPAcQAUAnAAAiIAAAJIgCABQgEgEgCgHIgGgNQgIgPgYgFIgBgBQgBAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAAAIAAABIANAbQANAeAAAMIgCAWIAAAAQgBAGgHAHQgIAFgKACIABAEQgBAJABACIADAEIABgBQAFgEAVAHQAGACgBAGQAAAMgLANQgCACgBAFIAAACIAAABIAIgBIAFgBQAXgHANgMIAYgbQAEAAgBAKQAAAIgEAKIBGgeIADABIAAABQAAAGgIARIAAABIAagMQAVgLAHAAQAEAAAAAFIgDALIAAAJQASAAAQgLIACADgEggMAGhIABAAQAEAEATAAIAGABIAQgFIADgBQARgFALgBIAHAAIACAAIAFAEIADgEQAFgGAEgOIAAgCIAAABIgHAEQgEABgIABQgJAAgCgFIAAgFQAAgHADgIQglAYgPAAQgFAAgBgDIAAgDIAEgOIAAgCQgyARgQALQgDgDAAgCQAFgNAAgHIgBgBIAAABQgIAJgTAOQgKAHgJAFIgQAFIgBAAIACABIADABQANADAOAAIAogCIAJgBIASgDIABAAQADAAADADgAwgGIIgBADQAAAGAEABIASADIAdAAIACABIAnAAIAFABIALgDIALgCIABAAIgFgGQgCgCAAgEQgHgJgCgFQgLgVgFgZIAAgFIACgBIAMASQAQATATAJQgVg/gDgZIAAgDIACgBQABAAAKASQAMATANALIACACIAAgCIAAgCIgBgNQgBgIgFgFIgKgbIAAgEIACgBQACAAALAcQADAIAYATIAAgQQABgKAHAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABQADgEAAgDQAAgJgOgGQgOgGAAgDQAAgFAGgFQAHgGAAgDQAAgGgggQQAJgQADgNIABgJQAAgRgXgEQgXgDAAgCIABgHQAAgEgMgLQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgDAAgIgSQgJgSgFAAIgUAKQgDAAgEgHQgDgIgLAAQgRAAgEALQgBAKgBABIgBABQgDgIgCgEQgIgLgVAAQgOAAgDAEIgBAFQAAAHAEAPQAAAFgMACQgMABAAAHIABAJIAAAXQAAABAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgEgGgIAAQgPAAgFAOIgDAJIAAAMQAGAEABAKQAAAFgGAIQASACAFAIQACAEAAAKQAAAKgGAJQASAMABAHIAIAAQAAgZATAAQAHAAADACIAJAGIAHgFQAGgEAJAAQAKAAAEAFIAEAFQAHgHALAAQAQAAAEAaQAAACgEACQgDACAAADIAFAGIAAAGQAAAXgrAHIgBAAQAHAIAAAHQAAAIgHAIQgFAGgGADIgDAAIgDABgAhCBKQgNgIgJADIgUAGQABgGAIgFQAIgFgBgIQgKgGgPAFIgTAGQgGAAACgDQACgGgBgDQgIgBgNgGIgLgGQgIgFgEgFIANgCIARgFQgHgFgUAAQgWAAgEgCQAHgIAOgIIAZgNQgOgEgYAHIggALQAFgLAOgRQAOgQAFgKQgVAKgaAbQgHgEgGgQQgFgRgFgFQgDAJgHAPQgFAOAAAOQgIgFgQgNQgOgNgKgEQAAALANAZQAMAXACAKIABACIgLgCIgMgCQgLgCgGAEIgDACIgBgCQgFgIgNgFQgQgFgCALQgDAAgNgKQgMgIgJAAQgFgBgEAGQgEAEADACQgGAAgFgIQgFgLgEgBQgNgFgOAMIgHAIIgPAOIAJgPIACgDIgDgGQgDgJgJAAQgFAAgGACQgEADgFABQgHgHAKgOQAJgPgFgIQgHABgIAIQgJAHgGACQAAgHAFgLQAFgJgBgKQgKAEgEARIgGARIgDAJIgBAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBIgEgBIAAAAIgBAAIgBABIgCADQgDADgMAAIgDAAQgJAAgBgBIgEABIgCAAIAAgBIABgCIAAAAIABgBIgCAAQgWgDgNAAQgcAAgOAMQgEgCgCgHQgCgIgBgCQgOgBgDAGQgEgCgDgLQgEgLgFgCQgCABgCAFIgCAFIgBABQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBIgDgDQgCgGgDgBQgDADgDAGQgCAFgBAKQgBgKgFgHQgHgHgNgDQgTgEgJAJQgEAEgDAGQgDgEgEgDIAAAAIgVgGIgDAAIgFAAQgGABgFACIgSATQgQgJgPgBQgUgCgFARQgEgDgDgIIgCgGIADABIABAEIAIgCIAGAAQAKAAADgFIADgEIAYALQAHgLAPgGIAHgCQAVgGAOAMIABACIACgCQAOgLASAAQAWAAAHARQAGgFABgJQAKABAEAJQAGgDABgJQAHAEALASIABAEQABgCAFAAIAKgBIACADQAGAHACAHQALgHAQgCQAJgBALAAQAYgBANAIIAEgEIAAABIAFABIgCACIAAgBIgCACIgBABIABABIACAAQATAAAEgFIAAgBIADAAIABgBIACgCQAAAAAAgBQABAAAAAAQABAAAAAAQABAAABAAIAAAAIAAAAIABgBIAAgBIACgCIAAgBIABgEIAGgRQAGgPAOgBIAAAEIAAADIgBAJIgEAMQAEADAHgGQAHgGAIACQAGAJgIAOIgBACIgBAAIgEADQgEADgBADIAGABIgBADIAAABIADgBIACgDIAGAAIgBADIAHgBQAPAAACAOIAKgPIAAABIABABQABADAEAAIADgCIAMACIAEACIAEACQAIAEABAHQAJgJAPAFQAMAEAJAJQAOgIASAIQAVALAKgCQgDgIgJgHIgOgOQALgCAIALIAHAIIAAgCQAGABAFAGIAHAJIgDgLQgDgIgHgOQgNgZgCgPQAWAKAZAWQAFgJAFgQIAJgaQAJAEAGANIAIAZQAKgEASgQQAQgPAPgDQACAMgLAPQgNAPgEAIQAIgBAZgFQAVgEALADQgEAKgQAIQgVALgDACIAaAEQARACAIAEQgBAEgFADIgIACQgQADgCACIAIAFQALAEANAAQAAADADAEQACADAAAEQANgFANAAQAPAAAIAHQABAFgDAFQAFAAAQAMIAAgBIADADIgDABIAAgCgAk8AMQADgDgFgCIgCgBIAEAGgEgmOAAAIgOgLIgHAKQgJAKgCAAIgGgKQgLgTgIAAIgUASIgEADQgCAAgBgDIgEgKIgBgFQgFgKgJAAQgNAMgGADIgMAAIAAgDQARgFAOgLQAIAAAGAFQAFAHACAQQASgVAHAAQAJAAANAXIADAFIAGgFIALgOQAIAAAPAPIAHAHIADgHQAEgNAHAAQAIAAALAJQgIgPgCgUQAFgFAMABIAPABIAAgBIACAAQAEAAAGAFQADgDgCgFQgGgMABgEQAEgGALgBQANgCAFAHIADgIIABgBQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgGAMgJIACgEIgDAAIAAgCIAFgFIABAAQAHgbAFgoIAKhSQgJAAgJAIQgLAJgGACQgHgIAGgLIALgQQgXAFgdAUQgiAWgPAGQgKggAWgZQASgUAhgJQgVgFgfAIQgrAKgHABQABgOAOgPQAMgNARgKQANgGAYgFIAogHQgNgSgKgRQAQgBATAIQATAIAJANQAaggA6gFQgBAIgHAGQgJAHgCAEQAXgIAgABQAkABAMANQgjABgjAQQA7AEArA2QgIgBgfgLQgcgKgVABQAIALASAVQAPATAGATQgJABgLgPQgPgVgIgFQgSgMgTAFQAEAJAQAUQANAVAAAUQgGAEgHgKIgNgRQgEgEgKgEQgKgFgEgDQgBAAAAAAQgBAAAAABQAAAAAAABQAAAAAAABQADAEgBACQgGAAgJgDQgJgEgGAAQgCABgBAFIgHAiIgDAuIgDAoIgBACIgCAJIADAEIAAARIgBAAIABAEIAOgMQAJgHAJgCIAMAJQABAIgCAIIAEgDIABAAIgDAGIAFAAQApg+BFhGQArgsBYhUQgMgKgagGQgegGgOgEQALgFAwgGQglgbgPgJQAOgGAYAFQAOADAXAIQgBgGgHgOQgHgNgBgJQAMgCAQAJIAXAQIAFgSQAEgKAIgCQAGAHADAXIAXgIQANgGAIAHQgCAIgOAIQAxAKAOAeQgKADgLAAIgXAAQAFAKAQAUQANATgEASQgNABgUgMIAGAnQACAbgPAIQgMgHgHgSQgEgLgFgZIgSAnQgKAXgQAGQgCgPADgSQAEgWAAgNQgFAEgMAXQgJAQgOACQABgGAHgNQAEgKgBgIQh7BphOBwIABACIABABIABAAIABAAIACABIAIAGIgCgIQgBgMAPgEQAJgCALADQALACAHAHQAXgfAMgHQAPAGgBAUQAGABAKgKQALgLAIgBQAFAAADAFIAGAHIAOgEQAIgCAEAGQADgCADgHQADgHAEgBQAJAAAHAFIANAHQACgBgCgHQgCgIAEgDQASgGAMAZQANgFAQgLIABABIgCABIAYAVQAZgOAPAfIAEAJQAGgBAHgIQAGgIAHAAIADAJQAFAOAGADQAGgCAJgKIAEgEQAGgGAFgBQAGABAFAHIACADQAFAMAGACQAFAAAHgIQAGgIAHAAQAAAKAHALQAOAEAJgKIAJgNIADgGQAVgaAjgRQAmgTAgAGQgyAZgdAjQA4gWAnAIQgIAJgVAIIgPAFQgOAFgFADQASAGAcgFQAagEAPAGIAEgFQADgEAFgDQAKgBALAEIASAGQAKgQATgKQAWgMAPAPQAKgIAGgBQAIgDAHADQAFgCALAAQAMAAADAEIACAGIAEADIgCgJIgBgBQgEgTgDgGQAPADAWALQABgVgWgUIgUgQQgMgKgFgHQADgCAGgBIACADIAIgCIALACQAAgCAJAAIAGAAIAAgBQgEgBgGgFIACgBIACgBIAIAGQABAAAEAFIAHAFQAEAEADAFIANALQgBgOgKgOQgMgRgCgIIAPACIADAAQALAAADAFIAAADQAHADAGAJIANAYQAHgIAIgUQAIgWAFgIQAJAHgBAPQgBAIgEATQADAAARgOQAPgMAQADQAAAHgOALQgQANgDAGQAKACASgEQAPgDAJAFQgDAIgNAFIgTAIQAHACAaACIAEAEIgYgDQgBAAAAAAQgBABAAAAQAAABABAAQAAABABAAQAEADgBADIghAKQADALALAPQANARADAIQAKgDALAHQAFADAGAFQASARAQgBQABgRAUgDIASgBQALAAAGgCQAGAEAZAFQAUAFAHALQgBgQAPgHQAGABAIAIQACgKAKgBIACADIAAAEQgGgBgDAMQgJgIgIgBQgIAAgCAKQgCAJADAJQgFgCgJgMQgJgLgHgBQgJgBgIAHQgIAHgFABQgEgDADgEIAFgHQgEgEAAgDQgbADgLADQgUAEAEAQIgTgFQgJgDgHAGIgIgVQgEgGgHgCIgHgCQgEABgBABQgFADADAHQgEgDgDgGIgEgJQgGgPgEgEIgMAAQgFABgEgEQABgBAFgEQAEgCgBgFQABgHgKgCQgLgBAAgGQAcgFAQgHQgEgHgQADQgRAEgFgEQAIgGAVgFQAVgGAIgHQgLgDgXAGQgZAFgGgBIAYgTQAPgMAIgLQgPADgQAQQgSARgHACQAAgFAIgTQAHgSgBgOQgIAKgGARIgMAdQgIgFgJgUQgJgTgMgDIADAAIgCgCIgCAAQgJgBgBgCQgEgBgDABQACAIANAUQALAQgBARQgGgEgHgIIgBgBIgLgKIgIgHIgBAAIAAgBIgGgDIgIgCIgEAAIAKADQgVgDgOABQAEAIAKAIIASAQQAYAVAAAYQgHgBgLgGQgMgFgHgCIAGAUIAFAPIABAAIgBACIABADQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBgBAAAAQgFAAgGgIQgGgIgJAAQgNAAgDACQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAgBAAIgBgBIgBAAQgRAGgIAFQgDgFgNgJQgiALgLAVIgCAGIgMgHQgIgDgIgBQgJgCgGAEQgFADgBAIQgKgGgNAAQgRgBgEAJQgLgEgZAAIgjAAQAHgKASgHIAHgCQAfgLAFgDQgWgFgaAJIgZAKIgSAHIADgIQAHgRARgOQAMgKAbgRQghACgbAVQgUAOgNATIgIAOIgOAIQgKAEgLgCQgJgIAAgJQgFAAgEAGQgFAGgFAAQgIgBgGgJIgHgNIgCgCIgEACQgJAGgPARQgSgJgDgOQgHgBgGAIQgGAIgHgBIgIgQIgBgDQgGgLgIgDQgOABgFAIQgQgUgMgFQgMAEgEAMQgHgCgHgIIgMgNQgIAAgBAIQgBAIADAHQgHgBgJgGQgJgGgGgBQgHACgEAJQgDAJADAIIgDAAQgDgCgCgFQgCgIgEgBQgKgCgHAGQgJAHgEAAQgDgCADgGQAEgHgEgDQgJABgMAMQgLALgGgBQgGgBgCgLIgDgQQgYAOgHAVIgCAFIgHgEIgPgIQgOgFgNAFQgCAFgBAFQAAAJAFAMIgEgCIgBAAQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgKgGIgGgEIgCAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBgBAAAAIAAAAQgDADgDAIIgGAMQgFgCAAgNIAAgEIgFgEIgFgFIgCgBIgGAAIgDACIgDACQgKAIgHABQgBgCADgIIAGgNQAHgRgLgHQgJACgJAKQgLALgGADIAAgBIgDABIgFgCIgDgBIgDgBQgEAAgEADQgEACgDAEIgFAGIgDAHQgCAHAAAIQgFgBgFgFQgFgFgGABQgEAAgDACIgFADQgCAJAFAHIAGAMQgDABgFgDIgDAAIgDABIgCgBIAAAAQgEgDgEAAIAAgBIgJAAQgMgDgEAEQgCANAIARIAFAJIABAEIABACIAAABIABAFIgFgGIgGgGQgLgJgIAAQgCAAgEAJIgBABIgFALIgRgMgEghDgDjIgkAnIhJBXIgEAFIgCAHQANACAFAFIABADIAEgDIAEgDIAFgBQA6hZBEg9QAHgLAQgOIAcgZQAjgfgEgcQhTBMgqAqgEgjygDfIgIAuIgFAvQgDAPgFALIgGAJIgCACIAAAAIAHgFQALgGAGABIAAgCIABgFIAEg5QAEgyAHgaIgBATIACgTIACgLQACgHgPgDQADAOgEAbgEgkNgEtQgoAAgcATQgeAVgFAlQANgEAQgKIAbgSQAigVAdACQgCAFgKAIQgJAIgCAHQAEAAAMgHQANgIAGgCQAeABAKAGQAFAAgHgJQAPgBASAPIAbAZQgGgrgmgaQArgNArA2QgCgQgSgTQgWgUgJgKQArgCArATQgJgWgdgLQgfgMgmADQAKgMAVgHIAngJQgWgKgjAIIguANQADgHAKgJQAKgKADgHQgzAOgPAWIgZgSQgPgLgSABQgBANAgAVIgEABQgIABAHADQgggGgoARQgmARgTAaQAUgDA0gLQAPgDANAAQAZAAANAKgA+sj/QALgIAJgVIAPgkQAKAHAGAWQAIAcAEAGQAQgLgHghIgOgsQADABASARQAMAMALgCQAAgWgQgUIgXgfQAIAGAPABQAPABANgDQgMgeg8gDQACgDAMgHQAJgGACgHQgLACgfAQIgCgNQgCgKAAgHQgIAEgCALIgCASIgWgWQgQgLgOACQAQAiAKAQQgxgZgcAGQAKAKAWALQAaANAHAGQgbgJgoANQAOAEAiAHQAbAHAEARQACAJgEAQQgFAQACALQAFgEAHgRQAGgPALgCIgHBIgAovg9IACgJIABgCIAAAQgEgjqgBtIgBADIAAABIgCACIAAABIADgHg");
	this.shape_24.setTransform(296.1,149.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(37.6,-1,516.9,312.2);


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


(lib.fcb_background_pressed_1 = function(mode,startPosition,loop) {
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
		//																		  n*/
		//component.registerSkinElement(background_mc, "backgroundDisabled");
		//
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin element
	this.background_mc = new lib.fcb_background_pressed();
	this.background_mc.parent = this;
	this.background_mc.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_background_pressed_1, new cjs.Rectangle(2,2,9,9), null);


(lib.fcb_background_disabled_1 = function(mode,startPosition,loop) {
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
		//																		  n*/
		//
		//component.registerSkinElement(background_mc, "backgroundDisabled");
		//
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin element
	this.background_mc = new lib.fcb_background_disabled();
	this.background_mc.parent = this;
	this.background_mc.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_background_disabled_1, new cjs.Rectangle(2,2,9,9), null);


(lib.fcb_background_1 = function(mode,startPosition,loop) {
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
		//																		  n*/
		//component.registerSkinElement(background_mc, "background");
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin element
	this.background_mc = new lib.fcb_background();
	this.background_mc.parent = this;
	this.background_mc.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_background_1, new cjs.Rectangle(2,2,9,9), null);


(lib.fcb_frame = function(mode,startPosition,loop) {
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
		//																		  n*/
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
	this.darkshadow_mc = new lib.fcb_leftOut();
	this.darkshadow_mc.parent = this;

	this.shadow_mc = new lib.fcb_leftIn();
	this.shadow_mc.parent = this;

	this.highlight_mc = new lib.fcb_rightIn();
	this.highlight_mc.parent = this;

	this.highlight3D_mc = new lib.fcb_rightOut();
	this.highlight3D_mc.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.highlight3D_mc},{t:this.highlight_mc},{t:this.shadow_mc},{t:this.darkshadow_mc}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_frame, new cjs.Rectangle(0,0,13,13), null);


(lib.fcb_check_disabled_1 = function(mode,startPosition,loop) {
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
		//																		  n*/
		//component.registerSkinElement(check_mc, "foregroundDisabled");
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin element
	this.check_mc = new lib.fcb_check_disabled();
	this.check_mc.parent = this;
	this.check_mc.setTransform(2.9,3.2);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_check_disabled_1, new cjs.Rectangle(2.9,3.2,7.1,7), null);


(lib.fcb_check_1 = function(mode,startPosition,loop) {
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
		//																		  n*/
		//
		//component.registerSkinElement(check_mc, "check");
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// skin element
	this.check_mc = new lib.fcb_check();
	this.check_mc.parent = this;
	this.check_mc.setTransform(2.9,3.2);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.fcb_check_1, new cjs.Rectangle(2.9,3.2,7.1,7), null);


(lib.blank = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.blank_gr("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(32.6,17,1,1,0,0,0,32.5,17);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.blank, new cjs.Rectangle(0.1,0,65,34), null);


(lib.answer_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.check_mark();
	this.instance.parent = this;
	this.instance.setTransform(158.6,19.3,1,1,0,0,0,19,19.3);

	this.instance_1 = new lib.HowMany("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(69.8,29.1,1,1,0,0,0,69.8,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.answer_3, new cjs.Rectangle(0,0,180.6,45), null);


(lib.answer_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.WhatKind("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(69.8,28.1,1,1,0,0,0,69.8,16);

	this.instance_1 = new lib.check_mark();
	this.instance_1.parent = this;
	this.instance_1.setTransform(159.6,19.3,1,1,0,0,0,19,19.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.answer_2, new cjs.Rectangle(0,0,181.6,44), null);


(lib.answer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.WhichOne("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(69.8,27.1,1,1,0,0,0,69.8,16);

	this.instance_1 = new lib.check_mark();
	this.instance_1.parent = this;
	this.instance_1.setTransform(160.6,19.3,1,1,0,0,0,19,19.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.answer_1, new cjs.Rectangle(0,0,182.6,43), null);


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


(lib.fcb_states = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{up:0,"press":1,uncheckedDisabled:2,checkedDisabled:3,checkedPress:4,checkedEnabled:5});

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
		/* stop();*/
	}
	this.frame_3 = function() {
		/* stop();
		*/
	}
	this.frame_4 = function() {
		/* stop();
		*/
	}
	this.frame_5 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1));

	// check_enabled
	this.instance = new lib.fcb_check_1();
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(2));

	// check_disabled
	this.instance_1 = new lib.fcb_check_disabled_1();
	this.instance_1.parent = this;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({_off:true},1).wait(2));

	// background pressed/disabled
	this.instance_2 = new lib.fcb_background_pressed_1();
	this.instance_2.parent = this;

	this.instance_3 = new lib.fcb_background_disabled_1();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},2).to({state:[]},1).wait(1));

	// background static
	this.frb_frame_mc = new lib.fcb_background_1();
	this.frb_frame_mc.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.frb_frame_mc).wait(6));

	// check box frame
	this.fcb_frame_mc = new lib.fcb_frame();
	this.fcb_frame_mc.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.fcb_frame_mc).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13,13);


// stage content:
(lib.adjective_test1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var scoreVar = 0;
		
		this.btn_goNext.mouseEnabled=false;
		
		this.btn_which.addEventListener("click", clickWhich.bind(this));
		this.btn_kind.addEventListener("click", clickKind.bind(this));
		this.btn_how.addEventListener("click", clickHow.bind(this));
		
		
		this.btn_goNext.addEventListener("click", openNext.bind(this));
		this.btn_goBack.addEventListener("click", openPrev.bind(this));
		
		//nav buttons
		function openNext(){
		
		 window.open ("adjective_test2.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("adjective_Scene11.html","_self");
		}
		
		
		
		//quiz functions
		function clickWhich(){
		
		    scoreVar += 1;
			this.answer_1.visible = true;
			this.btn_which.mouseEnabled=false;
			if(scoreVar >=3){
				this.btn_goNext.visible = true;
				this.btn_goNext.mouseEnabled=true;
			}
			
		}
		
		function clickKind(){
		
		    scoreVar += 1;
			this.answer_2.visible = true;
			this.btn_kind.mouseEnabled=false;
			if(scoreVar >=3){
				this.btn_goNext.visible = true;
				this.btn_goNext.mouseEnabled=true;
			}
			
		}
		
		function clickHow(){
		
		    scoreVar += 1;
			this.answer_3.visible = true;
			this.btn_how.mouseEnabled=false;
			if(scoreVar >=3){
				this.btn_goNext.visible = true;
				this.btn_goNext.mouseEnabled=true;
			}
			
		}
	}
	this.frame_1 = function() {
		playSound("showwhatyouknow");
	}
	this.frame_16 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(15).call(this.frame_16).wait(1));

	// Main
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgFBMQgFgEAAgFQAAgDADgCQADgDAEAAQADAAADAFQAEAFAAAEQAAAEgDACQgCACgEABQgDAAgDgGgAgGAkIgBgNIAAgLIAAgqIABgqQAAgJAHABQAJgBAAAJIAABsQAAAIgJABQgHgBAAgIg");
	this.shape.setTransform(207.3,16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AAGAcIgEgXIgCgUIgIARIgPApIgDAFQgDAGgHAAQgHAAgIgdQgDgPgEgZIgCgPIgBgOQAAgFADgCQACgDAFAAQAHAAACAIIACAOIABAPIAGArQALgdAMgoQADgLAHAAQAIAAACANIAHAjIAGAlIAIgaIANg1QABgGAHAAQAEAAADADQADADAAAEIgBAEQgHAggNAnQgDAJgGAKQgDAFgHAAQgKgBgGgag");
	this.shape_1.setTransform(198.3,18.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgcApQgNgNgBgXQgBgVAMgRQAOgUAXAAQAUAAAKASQAIAPgBAUQAAAVgLAPQgMASgUAAQgQAAgMgNgAgRgTQgGALAAANQAAAOAIAIQAGAHAJAAQAJAAAHgIQAJgIAAgOQACglgWAAQgOAAgIAOg");
	this.shape_2.setTransform(186,18.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AAYAwIgDgWIgBgVIAAgJIAAgJQABgVgIAAQgLAAgJANQgJAMgFARIgBAKIgBAJIABAJIABAJQAAAEgDADQgDACgEAAQgFAAgCgCQgDgDAAgEIAAgJIgBgJIABgbIACgcIAAgJIAAgJQAAgFACgCQADgDAEAAQAJAAABANIAAALQAQgWARAAQAPAAAHAOQAEAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgCADQgEADgDAAQgJAAgBgJg");
	this.shape_3.setTransform(176,18.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AAaBLQgFgKgKgOIgRgXIgRAMIgBAeQAAAEgDADQgDADgEAAQgJAAgBgOIABgYIABgYIABghIABgiIgBgKIgBgLQABgEADgDQACgCAEAAQAFAAACACQADADAAAEIABALIAAALIgBAfIAAAhIAYgVIAWgWQADgEAEAAQADAAADADQAEADAAAEQAAAEgDADQgMAOgSAPIAVAdQAQAVgBAGQAAAEgCACQgDADgFAAQgFAAgDgFg");
	this.shape_4.setTransform(165.8,15.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AAWAvQgMAGgPAAQgNAAgIgGQgKgGgBgMQgEgaAAgTQAAgNADgSQABgIAIAAQAEAAADADQADACAAAFIgBAOIgCAPIABAbQABALACAIIAHACIAGABQAMAAAPgEIgBgUIAAgSQAAgVACgPQABgJAJAAQAEAAADACQACADAAAEIgBAlIAAAUIAAAVIAAAGIAAAHQAAAFgCACQgDADgEAAQgIAAgCgJg");
	this.shape_5.setTransform(148.6,18.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgcApQgNgNgBgXQgBgVAMgRQAOgUAXAAQAUAAAKASQAIAPgBAUQAAAVgLAPQgMASgUAAQgQAAgMgNgAgRgTQgGALAAANQAAAOAIAIQAGAHAJAAQAJAAAHgIQAJgIAAgOQACglgWAAQgOAAgIAOg");
	this.shape_6.setTransform(138,18.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgZBNQgDgEAAgDQAAgKAVgvIgjhCIgFgIQgCgEAAgDQAAgEADgDQADgDAEAAQAEAAADAEQAQAWASArIAPgiIAPgdQADgGAFAAQAEAAADADQADACAAAEIgBAGIgiBHQgMAbgGASIgGATQgDAHgGAAQgEAAgDgCg");
	this.shape_7.setTransform(127.4,21.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgFBEQgDgCAAgDIAAgMIAAgLIgCg4IgWgBQgIgCAAgIQAAgFACgCQADgDAEAAIAUACIAAgOIAAgMQAAgEADgDQACgCAEAAQAJAAABAOIAAAIIAAAGIAAAHIANgCQALAAADABQAGACAAAHQAAAEgCADQgDADgFAAIgEAAIgGAAIgMABIACA4IAAAFIAAAFQAAAVgKABQgEAAgCgEg");
	this.shape_8.setTransform(111.8,17);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AAfAyIgGgHIgRAHQgHADgEAAQgXAAgKgNQgKgMAAgZQAAgXAQgQQARgRAVAAQAJAAAKAEQANAGAAAHQAAADgCACIgBAMIAAAVQgBAMACAHIAGARIADAGIAAABQAAAEgDADQgCACgEAAQgCAAgFgEgAgQgYQgLANAAAPQAAAQAGAIQAFAIAMAAQAIAAAHgDIAJgIQgCgZAAgNIAAgJIABgKIgGgDIgDgBQgPAAgLAMg");
	this.shape_9.setTransform(102,18.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AAaBKIgEgXIgBgXIAAgIIAAgIQAAgRgJAAQgMAAgJAKQgFAGgJAQQAAAmgDAGQgDAGgGAAQgEAAgDgCQgDgDAAgEIABgEQABgDAAgMIABgOIAAhHIABgQIgBgJIgBgKQAAgEADgCQACgDAFAAQAIAAABAIIABARIAAAWIgBAVIAAAJQAIgLAKgFQAIgGAKAAQAQAAAGALQAEAHABARIABATIACAUIADAUIABADQAAAEgDADQgDACgEAAQgHAAgDgHg");
	this.shape_10.setTransform(91.2,15.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AAGAcIgEgXIgCgUIgIARIgPApIgDAFQgEAGgGAAQgHAAgIgdQgDgPgEgZIgCgPIgBgOQAAgFADgCQADgDAEAAQAHAAACAIIACAOIABAPIAGArQALgdALgoQAEgLAHAAQAIAAADANIAGAjIAGAlIAIgaIANg1QABgGAHAAQAEAAADADQADADAAAEIgBAEQgIAggMAnQgDAJgGAKQgDAFgHAAQgKgBgGgag");
	this.shape_11.setTransform(78.5,18.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AAGAcIgEgXIgCgUIgIARIgPApIgDAFQgDAGgHAAQgHAAgIgdQgDgPgEgZIgCgPIgBgOQAAgFADgCQACgDAFAAQAHAAACAIIACAOIABAPIAGArQALgdAMgoQADgLAHAAQAIAAACANIAHAjIAGAlIAIgaIANg1QABgGAHAAQAEAAADADQADADAAAEIgBAEQgHAggNAnQgDAJgGAKQgDAFgHAAQgKgBgGgag");
	this.shape_12.setTransform(58.8,18.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AgcApQgNgNgBgXQgBgVAMgRQAOgUAXAAQAUAAAKASQAIAPgBAUQAAAVgLAPQgMASgUAAQgQAAgMgNgAgRgTQgGALAAANQAAAOAIAIQAGAHAJAAQAJAAAHgIQAJgIAAgOQACglgWAAQgOAAgIAOg");
	this.shape_13.setTransform(46.5,18.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AAaBKIgEgXIgBgXIAAgIIAAgIQAAgRgJAAQgMAAgJAKQgFAGgJAQQAAAmgDAGQgDAGgGAAQgEAAgDgCQgDgDAAgEIABgEQABgDAAgMIABgOIAAhHIABgQIgBgJIgBgKQAAgEADgCQACgDAFAAQAIAAABAIIABARIAAAWIgBAVIAAAJQAIgLAKgFQAIgGAKAAQAQAAAGALQAEAHABARIABATIACAUIADAUIABADQAAAEgDADQgDACgEAAQgHAAgDgHg");
	this.shape_14.setTransform(35.8,15.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AgmBEQgTgJAAgPQAAgEADgCQADgDAEAAQAEAAAFAGQAEAHAEADQAJAGAPAAQAPAAANgHQAQgIAAgQQAAgMgOgHQgMgGgQgBQgQAAgKgFQgOgIAAgPQAAgSATgNQAUgOATgBQAJABAMADQAQAEAAAHQAAAIgJABIgOgDIgPgCQgOAAgLAHQgLAIABALQAAAIANADIAUADQAXACAMAMQAMAKAAAQQAAAXgWAOQgSANgYAAQgRgBgPgGg");
	this.shape_15.setTransform(23.1,16.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#9900CC").ss(3,1,1).p("EAojAYTMhRGAAAMAAAgwlMBRGAAAg");
	this.shape_16.setTransform(275,188.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.UI}]}).wait(17));

	// btn text
	this.instance = new lib.HowMany("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(441.8,312.5,1,1,0,0,0,69.8,16);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgZBJQgEgDAAgEQAAgGAEgFQADgFAGAAQAJAAAAALQAAAFgDAFQgDAFgEAAQgFAAgDgDgAgUAkQgDgDAAgEQAAgHANgKIAWgRQANgKAAgJQAAgMgLgJQgKgKgKAAQgHAAgJAHQgKAGgBAAQgFAAgDgDQgCgDAAgEQAAgIAOgIQAOgHAJAAQASAAARAQQAQAPAAAUQAAAOgKAKQgFAHgPAKQgPALgFAHQgEAEgEAAQgDAAgEgDg");
	this.shape_17.setTransform(475.3,268.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgqBLQgKgIAAggIABgNIAAgRIgBgEQAAgDACgCIADgqIgBgLIgCgKQAAgMALAAQAEAAACADIAXgFIASgBQAYAAAOAGQAGACABAHQgBADgCAEQgDADgEAAIgDAAQgQgFgQAAIgQACIgVAEIABAKIgBAlIApgEIAYgCQAEAAADADQACADAAAFQABAHgKABIgXACIgsAFIgBAMIAAAMQAAAVAEAEQABADANAAIASAAIASgBIAGAAIAGgBQAKABAAAJQAAAIgIADQgKABgdAAQgfAAgIgIg");
	this.shape_18.setTransform(464.5,268.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgxBKQgDgDAAgEIgBgXIAAgXIACgaIACgbIgBgPIgBgOQAAgGADgEQAEgFAGAAIAYACQANACAIAFQAoAVAAAeQAAAPgOAKQgLAJgQAFQAfAQAPATQACADAAADQAAAEgDADQgDADgEAAQgDAAgEgDQgggggngLIABATIABAUQAAAEgDADQgDADgEAAQgEAAgDgDgAgegrIAAAMIgBATIgCATIAEAAIAEAAQAZAAAMgHQAFgCAFgFQAFgFAAgEQAAgOgPgLQgNgLgQgCIgOgBg");
	this.shape_19.setTransform(451.9,268.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgqBLQgJgIAAggIAAgNIABgRIgBgEQAAgDABgCIACgqIgBgLIgBgKQAAgMAKAAQAFAAACADIAWgFIATgBQAYAAAOAGQAHACAAAHQAAADgDAEQgDADgEAAIgDAAQgRgFgPAAIgQACIgVAEIABAKIgCAlIAqgEIAYgCQADAAADADQAEADAAAFQgBAHgIABIgYACIgsAFIgBAMIAAAMQAAAVADAEQADADAMAAIASAAIASgBIAGAAIAFgBQALABAAAJQAAAIgIADQgKABgdAAQgeAAgJgIg");
	this.shape_20.setTransform(439.4,268.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("Ag8BOQgDgDAAgFIACgeIACggIgBgPIAAgQIABgXIAAgXQABgEACgDQADgDAEAAQAEAAADADQACADAAAEIgBAXIgBAYIABAXIApgHQAYgEASAAIABgrQAAgHADgHQACgLAHAAQADAAADADQADACAAAEIgBAFQgCAEAAAHIABAJIAAAJIgCAdIgCAcIACAWIABAXQAAADgDADQgDADgEAAQgEAAgCgDQgDgDAAgDIgBgXIgBgWIAAgOQgQAAgYAFIgpAHIgBAZIgCAZQAAAFgDADQgDACgEAAQgEAAgCgCg");
	this.shape_21.setTransform(425.4,268.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAWBNQgEgDAAgFQgFgLgBgIIgHgqIgGgpQgJAggJAVQgMAagDAPIABAEQgBAFgDADQgDACgFAAQgOAAAAgMIgCgMIgLgwQgGgXgQgtIgBgEQAAgJALAAQAGAAADAHIAHAUQAHASAFAYIAKArQAKgZALghIAJgeQAJgVAIAAQAGAAADAHQAEAIADAgIAGAlIAJAmQANgfAUg1IAFgSQADgLADgHQAEgFAGAAQAKAAgBAKIgDAJIgDALIgGARIgcBGIgPAiQgDAGgHAAQgFAAgDgCg");
	this.shape_22.setTransform(407.6,268.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgaBJQgDgDAAgEQAAgGADgFQAEgFAFAAQAKAAAAALQAAAFgCAFQgEAFgFAAQgEAAgEgDgAgTAkQgDgDgBgEQAAgHANgKIAWgRQANgKAAgJQAAgMgKgJQgLgKgLAAQgFAAgKAHQgKAGgCAAQgDAAgEgDQgDgDAAgEQABgIAPgIQANgHAIAAQAUAAAPAQQAQAPAAAUQAAAOgJAKQgGAHgOAKQgPALgFAHQgDAEgEAAQgFAAgCgDg");
	this.shape_23.setTransform(470.8,221.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AhBBNQgDgDABgFIAAgMIABgNIAAgSIABgSIgBgTIAAgTIgBgSIgBgSQAAgFADgEQAEgDAFAAQAFgBAIAMQAYAlATAYQAXAbAbAaIAAgNIAAgLQAAgqgDgaIgDgKIgCgLQAAgLAKAAQARAAAABAIAAAfIAAAgIgBAQQgCAKgJAAQgGAAgHgHQgogmgyhGIgBAWIAAAWIAAAYIABAYQAAAagLAAQgEAAgEgCg");
	this.shape_24.setTransform(458,220.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgqBLQgKgJAAgfIABgOIABgQIgCgEQABgCACgEIACgpIgBgLIgBgKQAAgMAKAAQADAAAEADIAVgEIATgCQAYAAAOAFQAGADAAAHQABAEgDADQgDADgEAAIgDgBQgQgEgQAAIgRACIgUAEIABAKIgBAmIApgFIAXgCQAFAAACADQADADAAAEQAAAIgJABIgXACIgsAFIAAAMIgBAMQAAAWAEADQACADANAAIARAAIASAAIAGgBIAFAAQALAAAAAKQAAAHgJADQgIABgeAAQgeAAgJgIg");
	this.shape_25.setTransform(444,220.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("Ag9BNQgCgCAAgFIABgeIACggIAAgOIgBgRIABgXIACgXQAAgEACgDQADgDAEAAQAEAAACADQADADAAAEIgBAXIgBAYIAAAYIAqgHQAZgGARAAIABgqQAAgHACgHQADgLAGAAQAEAAADADQADACAAAFIgBADQgBAEgBAIIABAJIAAAJIgBAdIgCAcIABAWIABAXQAAADgDAEQgDACgDAAQgEAAgDgCQgDgEAAgDIgBgXIgBgWIABgPQgSABgXAFIgpAIIgCAYIgCAZQABAFgDACQgDADgEAAQgEAAgDgDg");
	this.shape_26.setTransform(429.9,220.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAWBNQgEgDAAgFQgEgLgBgIIgIgqIgGgpQgIAggLAVQgLAagEAPIACAEQAAAFgEADQgEACgEAAQgNAAAAgMIgEgMIgKgwQgHgXgOgtIgBgEQAAgJAKAAQAGAAADAHIAIAUQAFASAGAYIAJArQALgZAKghIAKgeQAJgVAHAAQAHAAADAHQAEAIADAgIAGAlIAJAmQANgfAUg1IAEgSQAEgLAEgHQADgFAGAAQAJAAAAAKIgCAJIgFALIgEARIgeBGIgNAiQgEAGgHAAQgEAAgEgCg");
	this.shape_27.setTransform(412.1,221.1);

	this.instance_1 = new lib.WhatKind("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(439.3,173,1,1,0,0,0,69.8,16);

	this.instance_2 = new lib.WhichOne("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(438.9,128.1,1,1,0,0,0,69.8,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.instance}]}).wait(17));

	// marks
	this.answer_3 = new lib.answer_3();
	this.answer_3.parent = this;
	this.answer_3.setTransform(142.8,275.9,1,1,0,0,0,90.3,22.4);
	this.answer_3.visible = false;

	this.answer_2 = new lib.answer_2();
	this.answer_2.parent = this;
	this.answer_2.setTransform(143.3,233.4,1,1,0,0,0,90.8,21.9);
	this.answer_2.visible = false;

	this.answer_1 = new lib.answer_1();
	this.answer_1.parent = this;
	this.answer_1.setTransform(143.8,189,1,1,0,0,0,91.3,21.5);
	this.answer_1.visible = false;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.answer_1},{t:this.answer_2},{t:this.answer_3}]}).wait(17));

	// btn
	this.btn_kind = new lib.GameBackgroundbubble();
	this.btn_kind.parent = this;
	this.btn_kind.setTransform(437.3,174.5);
	new cjs.ButtonHelper(this.btn_kind, 0, 1, 2, false, new lib.GameBackgroundbubble(), 3);

	this.btn_where = new lib.GameBackgroundbubblered();
	this.btn_where.parent = this;
	this.btn_where.setTransform(521.8,288.5,1,1,0,0,0,84.5,19.5);
	new cjs.ButtonHelper(this.btn_where, 0, 1, 2, false, new lib.GameBackgroundbubblered(), 3);

	this.btn_when = new lib.GameBackgroundbubblered();
	this.btn_when.parent = this;
	this.btn_when.setTransform(521.8,241.6,1,1,0,0,0,84.5,19.5);
	new cjs.ButtonHelper(this.btn_when, 0, 1, 2, false, new lib.GameBackgroundbubblered(), 3);

	this.btn_which = new lib.GameBackgroundbubble();
	this.btn_which.parent = this;
	this.btn_which.setTransform(521.8,147.9,1,1,0,0,0,84.5,19.5);
	new cjs.ButtonHelper(this.btn_which, 0, 1, 2, false, new lib.GameBackgroundbubble(), 3);

	this.btn_how = new lib.GameBackgroundbubble();
	this.btn_how.parent = this;
	this.btn_how.setTransform(521.8,335.3,1,1,0,0,0,84.5,19.5);
	new cjs.ButtonHelper(this.btn_how, 0, 1, 2, false, new lib.GameBackgroundbubble(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_how},{t:this.btn_which},{t:this.btn_when},{t:this.btn_where},{t:this.btn_kind}]}).wait(17));

	// Text
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgHBBQgEgEAAgGIgBgIIgBgHQAAgGAEgEQAFgEAFAAQAPAAAAAdQAAAGgEAEQgEAEgGAAQgFAAgEgEgAgKgiQgDgEAAgGIgBgFIgBgFQAAgGAEgEQAEgEAGAAQAPAAAAAYQAAAGgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_28.setTransform(321.3,142.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("Ag0A/IAAhfIAAgOIAAgNQAAgOAMAAQAOAAAAAXQAagaAfAAQALAAAGAIQAFAJAAARIAAAKQgBAQgNABQgLAAAAgOIgBgKIAAgLQgWADgMAJQgMAJgIASIAABKQAAANgNAAQgMAAAAgNg");
	this.shape_29.setTransform(311,144.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AguA7QgVgRAAgfQAAgiARgYQATgbAfAAQAWAAAOAIQASAJAAAUQAAAOgPALQgIAFgWAJIgzAZQAIALAMAGQALAGAOAAQAKAAAMgEQAQgEAFgIQAFgHAFAAQAEAAAFAEQADADAAAFQAAAPgZALQgUAKgUAAQgeAAgTgQgAgcgkQgLANgFAZIAqgTQAXgMALgJQgLgLgVAAQgQAAgMANg");
	this.shape_30.setTransform(296.5,144.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAJAoQgDgMgDgUIgEgeIgLAZIgVA5QgBAFgEADQgEAIgJAAQgKAAgKgpQgFgVgFgjIgDgVIgCgUQAAgGAEgEQAEgEAGAAQAKAAADAMQACAIABAMIACAUIAIA8QAPgpAQg3QAFgPAKAAQALAAAEARIAIAxQAGAiAEATIAKglIAShKQACgIAKAAQAFAAAFAEQAEAEAAAFIgCAGQgKAtgRA3QgEANgJANQgFAHgIAAQgPAAgIglg");
	this.shape_31.setTransform(279,144.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgmBMQgVgHABgOQgBgFAFgFQAEgEAFAAQAFAAAGAHQAEADALACIAQABQAKAAAJgCQANgEAAgIQAAgUgagGIgNgDQgTgEgHgFQgLgHAAgPQAAgdAbgMQAIgEARgFQASgFAIgDQAFgDAHAAQAGAAADAEQAEADABAHIABALIACAMQgBAGgDAEQgEADgGABQgHAAgDgGQgDgDgBgLIggAKQgUAIAAANIAIACQAeAGAQAJQAWAOgBAcQABAVgUAMQgQAJgXAAQgSAAgRgGg");
	this.shape_32.setTransform(262.2,143.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAhBDIgDgeQgCgQAAgOIAAgMIABgNQAAgegLAAQgQAAgNASQgMARgHAYIgCAOIAAANIAAAMIABANQAAAGgDAEQgEADgGAAQgGAAgEgDQgEgEAAgGIAAgNIgBgMIACgmIACgnIgBgNIAAgNQAAgGAEgEQAEgEAFAAQANABABARIAAARQAXgfAYAAQAWAAAIATQAGANABAZIAAAOIgBAMQAAALADASQADASAAALQAAAGgEAEQgEAEgFAAQgMAAgCgNg");
	this.shape_33.setTransform(248.7,144.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAsBGQgHgGgDgEIgXALQgKADgFAAQggAAgPgSQgOgRAAgjQAAggAXgXQAXgYAeAAQAMAAAPAGQATAIAAALQAAADgDADQgCAFAAAMIgBAeQAAARACAKIAJAYIADAHIABACQAAAGgEADQgEAEgFAAQgDAAgGgGgAgWghQgQARAAAVQAAAXAIALQAIALAQAAQAMAAAJgFQAFgCAJgIQgEgjAAgSIAAgNIADgPIgJgEIgGgBQgUAAgPASg");
	this.shape_34.setTransform(233.9,144.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAhBDIgDgeQgCgQAAgOIAAgMIABgNQAAgegLAAQgQAAgNASQgMARgHAYIgCAOIAAANIAAAMIABANQAAAGgDAEQgEADgGAAQgGAAgEgDQgEgEAAgGIAAgNIgBgMIACgmIACgnIgBgNIAAgNQAAgGAEgEQAEgEAFAAQANABABARIAAARQAXgfAYAAQAWAAAIATQAGANABAZIAAAOIgBAMQAAALADASQADASAAALQAAAGgEAEQgEAEgFAAQgMAAgCgNg");
	this.shape_35.setTransform(211.4,144.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAsBGQgHgGgDgEIgXALQgKADgFAAQggAAgPgSQgOgRAAgjQAAggAXgXQAXgYAeAAQAMAAAPAGQATAIAAALQAAADgDADQgCAFAAAMIgBAeQAAARACAKIAJAYIADAHIABACQAAAGgEADQgEAEgFAAQgDAAgGgGgAgWghQgQARAAAVQAAAXAIALQAIALAQAAQAMAAAJgFQAFgCAJgIQgEgjAAgSIAAgNIADgPIgJgEIgGgBQgUAAgPASg");
	this.shape_36.setTransform(196.6,144.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgnA8QgTgSAAgcQAAgcASgdQAVghAYAAQAOAAAQAHQAWAHAAAMQgBAGgDAEQgDADgGAAQgDAAgDgCIgGgEQgIgHgTAAQgMAAgOAZQgMAXAAAQQAAARAMAKQALALARgBQAJABAJgFIAQgIIAGgCQAEAAAFAEQADAEAAAEQAAALgVAJQgSAIgNAAQgaAAgUgRg");
	this.shape_37.setTransform(182.3,144.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#CE0063").s().p("AgmBMQgUgHgBgOQABgFAEgFQAEgEAGAAQAEAAAHAHQADADALACIAQABQALAAAIgCQANgEAAgIQAAgUgagGIgOgDQgRgEgIgFQgMgHAAgPQAAgdAbgMQAJgEARgFQASgFAHgDQAGgDAHAAQAGAAADAEQAFADAAAHIABALIABAMQABAGgEAEQgEADgFABQgIAAgDgGQgCgDgCgLIgfAKQgWAIAAANIAIACQAfAGAPAJQAXAOAAAcQgBAVgSAMQgRAJgXAAQgSAAgRgGg");
	this.shape_38.setTransform(159.4,143.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#CE0063").s().p("AguA7QgVgRAAgfQAAgiARgYQATgbAfAAQAWAAAOAIQASAJAAAUQAAAOgPALQgIAFgWAJIgzAZQAIALAMAGQAKAGAPAAQAKAAAMgEQAQgEAFgIQAFgHAFAAQAEAAAEAEQAEADAAAFQAAAPgZALQgUAKgUAAQgeAAgTgQgAgcgkQgLANgFAZIAqgTQAYgMAKgJQgMgLgUAAQgRAAgLANg");
	this.shape_39.setTransform(145.6,144.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#CE0063").s().p("AgOA/IgVg4IgYg9IgCgGQAAgGAEgEQAEgEAGAAQAIAAAEAIIAiBfQAKgWAPgoIAMggQAEgIAIAAQAFAAAFAEQAEAEAAAGQAAAFgXA1IgbA/QgBANgLAAQgKAAgEgMg");
	this.shape_40.setTransform(131.1,144.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#CE0063").s().p("AgMBjQgEgEAAgGIgBgYIAAgZIABggIABgfQAAgGAEgEQAEgEAGAAQAFAAAEAEQADAEAAAGIgBAfIgBAgIAAAZIAAAYQAAAGgDAEQgEAEgFAAQgGAAgDgEgAgIhKQgFgFAAgHQAAgGAFgFQAFgFAFAAQAHAAAFAFQAEAFAAAGQAAAHgEAFQgFAEgHAAQgFAAgFgEg");
	this.shape_41.setTransform(120.4,141.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#CE0063").s().p("AgIBgQgEgEAAgFIAAgQIABgPIgDhOIgfgDQgMgBABgNQAAgFADgEQAEgEAFAAIAdACIgBgTIAAgQQAAgGAEgEQAEgEAGAAQALAAACAUIABAMIgBAIIAAAJIAUgCQAOAAAEABQAJACAAAKQAAAHgFADQgDAFgGAAIgHgBIgGAAIgTACIADBQIAAAGIAAAHQAAAegPAAQgEAAgEgEg");
	this.shape_42.setTransform(109.6,142.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#CE0063").s().p("AgmA8QgUgSAAgcQAAgcATgdQAUghAZAAQANAAAQAHQAWAHgBAMQABAGgEAEQgEADgFAAQgEAAgDgCIgFgEQgIgHgSAAQgNAAgOAZQgNAXAAAQQAAARANAKQAMALARgBQAHABAKgFIAQgIIAFgCQAGAAADAEQAEAEAAAEQAAALgVAJQgTAIgLAAQgcAAgSgRg");
	this.shape_43.setTransform(95.9,144.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#CE0063").s().p("AguA7QgVgRAAgfQAAgiARgYQATgbAfAAQAWAAAOAIQASAJAAAUQAAAOgPALQgIAFgWAJIgzAZQAIALAMAGQAKAGAPAAQAKAAAMgEQAQgEAFgIQAFgHAFAAQAEAAAEAEQAEADAAAFQAAAPgZALQgUAKgUAAQgeAAgTgQgAgcgkQgLANgFAZIAqgTQAYgMAKgJQgMgLgUAAQgRAAgLANg");
	this.shape_44.setTransform(81.3,144.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#CE0063").s().p("AgsBiIgBgHQAAgFAFgEQAEgEAFAAQAIAAAJASIAHANQAGAHAGAAQAGAAAEgJQAEgHAAgHQAAgQgEhBIgFhLQAAgHAEgFQAEgFAGgBQAFABAEADQAFADAAAEIAFBNIADBVQAAATgLAPQgMARgSAAQgcAAgVgtgAAJhzQgFgEABgHQgBgHAFgEQAFgFAGAAQAHAAAFAFQAEAEAAAHQAAAHgEAEQgFAEgHABQgGgBgFgEg");
	this.shape_45.setTransform(66.3,145.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#CE0063").s().p("AgwBdQgTgTAAgeQAAglATgVQAUgWAdAAQAQAAAJAFIANAKQACg6ACgUQACgMALAAQAMAAAAANQAAATgFBBQgCATAAAUQAAAuAEAXIABADQAAAGgEADQgEAEgFAAQgJAAgEgNQgJAIgLADQgLAEgKAAQgcAAgTgTgAgfACQgMAOAAAbQAAASANAMQAMANARAAQAKAAAIgEQAFgCAKgJIAEgFIAAgXIAAgQIAAgQQgFgLgIgFQgJgFgMAAQgWAAgLAMg");
	this.shape_46.setTransform(53.7,140.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#CE0063").s().p("AAvBHQgDgNgGgeQgOABgWAFIgjAIQgHASgQAiQgFAIgIAAQgFAAgEgEQgFgEABgGQgBgGAVgrQgDgEABgFQAAgLANgDQAPgcAZgmQAfg0AIAAQAKAAAFAPIAIAuIAUBeIAJAWQADAKAAAFQABAFgFAEQgEAEgFAAQgNAAgKgggAgRAKQARgEAggGIgLg0g");
	this.shape_47.setTransform(35.2,141.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgIAJQgDgEAAgFQAAgEADgDQAEgEAEAAQAFAAADAEQAEADAAAEQAAAFgEAEQgDADgFAAQgEAAgEgDg");
	this.shape_48.setTransform(218.1,91.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AglAtIAAhEIABgJIAAgKQAAgKAIAAQAJAAABAQQASgSAWAAQAJAAADAGQAEAGAAAMIAAAHQAAAMgKAAQgIAAAAgJIgBgHIAAgIQgPABgJAHQgIAHgGAMIABA1QgBAKgJAAQgJAAAAgKg");
	this.shape_49.setTransform(211,86.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AghAqQgPgMAAgWQAAgYANgSQANgSAWAAQAQAAAKAFQAMAHAAAOQAAAKgLAIIgUAKIglARQAGAIAIAEQAIAFAKAAQAHAAAJgDQALgDAEgFQADgGAEAAQADAAADADQADADAAADQAAALgSAIQgPAGgOAAQgVAAgOgLgAgUgZQgHAJgEARIAegNQAQgJAIgGQgJgIgOAAQgMAAgIAKg");
	this.shape_50.setTransform(200.6,86.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAGAcIgEgXIgCgUIgIARIgPApIgEAFQgCAGgHAAQgHAAgIgdQgDgPgDgZIgDgPIgBgOQAAgFADgCQACgDAFAAQAHAAACAIIACAOIACAPIAFArQALgdAMgoQADgLAHAAQAHAAADANIAHAjIAHAlIAHgaIANg1QABgGAHAAQAEAAADADQADADAAAEIgBAEQgHAggNAnQgCAJgHAKQgDAFgGAAQgLgBgGgag");
	this.shape_51.setTransform(188.2,86.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgbA2QgPgFAAgKQABgEADgDQACgDAFAAQADAAAEAFQADACAIACIALABQAHAAAGgCQAJgDAAgGQAAgNgSgFIgJgCQgNgDgGgEQgHgEgBgLQAAgVATgJIATgGQANgDAFgDQAEgCAFAAQAEAAACADQADADAAAEIACAIIABAJQgBAEgCADQgDADgEAAQgFAAgDgEQgBgDgBgIIgXAHQgPAGAAAKIAGABQAWAEALAHQAQAKAAATQAAAQgOAIQgLAHgRAAQgNAAgMgFg");
	this.shape_52.setTransform(176.1,86.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAYAwIgDgWIgBgVIAAgJIAAgJQABgVgIAAQgLAAgJANQgJAMgFARIgBAKIgBAJIABAJIABAJQAAAEgDADQgDACgEAAQgFAAgCgCQgDgDAAgEIAAgJIgBgJIABgbIACgcIAAgJIAAgJQAAgFACgCQADgDAEAAQAJAAABANIAAALQAQgWARAAQAPAAAHAOQAEAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgCADQgEADgDAAQgJAAgBgJg");
	this.shape_53.setTransform(166.6,86.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAfAyIgGgHIgRAHQgHADgEAAQgXAAgKgNQgKgMAAgZQAAgXAQgQQARgRAVAAQAJAAAKAEQANAGAAAHQAAADgCACIgBAMIAAAVQgBAMACAHIAGARIACAGIABABQAAAEgDADQgCACgEAAQgCAAgFgEgAgQgYQgLANAAAPQAAAQAGAIQAFAIAMAAQAIAAAHgDIAJgIQgCgZAAgNIAAgJIABgKIgGgDIgDgBQgPAAgLAMg");
	this.shape_54.setTransform(156,86.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAYAwIgDgWIgBgVIAAgJIAAgJQAAgVgHAAQgLAAgJANQgJAMgFARIgBAKIgBAJIABAJIAAAJQAAAEgCADQgDACgEAAQgEAAgDgCQgDgDAAgEIAAgJIgBgJIABgbIACgcIgBgJIAAgJQAAgFADgCQADgDAEAAQAJAAABANIAAALQARgWAQAAQAPAAAHAOQAEAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgDADQgDADgDAAQgJAAgBgJg");
	this.shape_55.setTransform(139.9,86.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAfAyIgHgHIgQAHQgHADgEAAQgXAAgKgNQgKgMAAgZQAAgXAQgQQARgRAVAAQAIAAALAEQANAGAAAHQAAADgCACIgBAMIAAAVQgBAMACAHIAGARIADAGIAAABQAAAEgDADQgCACgEAAQgCAAgFgEgAgPgYQgMANAAAPQAAAQAGAIQAFAIAMAAQAIAAAHgDIAJgIQgCgZAAgNIAAgJIACgKIgHgDIgDgBQgPAAgKAMg");
	this.shape_56.setTransform(129.4,86.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgbArQgOgNAAgUQAAgTANgWQAPgXARAAQAJAAAMAEQAPAGABAJQgBADgCADQgCADgEAAQgDAAgCgCIgEgDQgGgFgNABQgJgBgKATQgJAQABALQgBANAJAHQAJAHALAAQAGAAAGgEIAMgFIAEgCQAEAAADADQACADAAAEQAAAHgPAGQgNAGgJAAQgTAAgNgMg");
	this.shape_57.setTransform(119.2,86.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AghAqQgPgMAAgWQAAgYANgSQANgSAWAAQAQAAAKAFQAMAHAAAOQAAAKgLAIIgUAKIglARQAGAIAIAEQAIAFAKAAQAHAAAJgDQALgDAEgFQADgGAEAAQADAAADADQADADAAADQAAALgSAIQgPAGgOAAQgVAAgOgLgAgUgZQgHAJgEARIAegNQAQgJAIgGQgJgIgOAAQgMAAgIAKg");
	this.shape_58.setTransform(102.7,86.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgKAtIgPgnIgRgsIgBgFQAAgEADgDQADgCAEgBQAGAAACAHIAZBCIASgsIAIgWQADgGAFAAQAEAAADADQADACAAAEQAAAEgQAnIgUAtQAAAJgIgBQgHAAgDgIg");
	this.shape_59.setTransform(92.2,86.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgJBHQgCgDAAgFIAAgRIgBgSIABgWIABgWQAAgFACgDQAEgCAEAAQACAAAEACQACADAAAFIgBAWIgBAWIABASIAAARQAAAFgDADQgCADgEgBQgEABgDgDgAgGg1QgDgEAAgEQAAgFADgDQAEgEADABQAFgBAEAEQADADAAAFQAAAEgDAEQgEAEgFgBQgDABgEgEg");
	this.shape_60.setTransform(84.7,84.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgFBEQgDgCgBgDIABgMIAAgLIgCg4IgVgBQgJgCAAgIQAAgFACgCQADgDAEAAIAUACIAAgOIAAgMQAAgEACgDQAEgCADAAQAJAAABAOIAAAIIAAAGIAAAHIAOgCQAKAAADABQAGACAAAHQAAAEgCADQgDADgFAAIgFAAIgEAAIgOABIADA4IAAAFIAAAFQAAAVgKABQgEAAgCgEg");
	this.shape_61.setTransform(77,84.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgbArQgOgNAAgUQAAgTANgWQAPgXARAAQAKAAALAEQAQAGAAAJQAAADgDADQgDADgDAAQgDAAgCgCIgEgDQgGgFgNABQgJgBgKATQgJAQAAALQAAANAJAHQAJAHALAAQAGAAAGgEIAMgFIAEgCQAEAAADADQACADAAAEQAAAHgPAGQgNAGgJAAQgTAAgNgMg");
	this.shape_62.setTransform(67.2,86.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AghAqQgPgMAAgWQAAgYANgSQANgSAWAAQAQAAAKAFQAMAHAAAOQAAAKgLAIIgUAKIglARQAGAIAIAEQAIAFAKAAQAHAAAJgDQALgDAEgFQADgGAEAAQADAAADADQADADAAADQAAALgSAIQgPAGgOAAQgVAAgOgLgAgUgZQgHAJgEARIAegNQAQgJAIgGQgJgIgOAAQgMAAgIAKg");
	this.shape_63.setTransform(56.7,86.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgeBGIgCgFQAAgEAEgDQACgDAFAAQAFAAAHANIAFAKQADAFAFAAQAEAAADgHIADgKIgEg6IgDg1QAAgFADgEQADgDAEAAQAEAAADACQADACAAADIAEA3IACA8QAAAOgIALQgJAMgMAAQgUAAgOgggAAHhSQgEgDAAgFQAAgFAEgDQADgDAFAAQAEAAAEADQADADAAAFQAAAFgDADQgEADgEAAQgFAAgDgDg");
	this.shape_64.setTransform(46.1,87);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgiBDQgOgOAAgWQAAgaAOgPQAOgPAVgBQALABAGADIAKAHIADg4QABgIAIAAQAJAAAAAJQAAAOgEAuIgBAcQAAAgADARIAAADQAAADgDADQgDACgDABQgGAAgDgJQgHAFgIADQgHACgIAAQgUAAgNgNgAgWABQgIAKAAAUQAAAMAJAJQAIAKAMAAQAIAAAFgDQAEgCAHgGIADgEIAAgQIAAgMIAAgMQgEgHgGgDQgGgEgJAAQgPAAgIAIg");
	this.shape_65.setTransform(37.1,83.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AAfAyIgHgHIgQAHQgHADgEAAQgWAAgLgNQgKgMAAgZQAAgXAQgQQAQgRAWAAQAJAAAKAEQANAGAAAHQAAADgBACIgCAMIAAAVQgBAMACAHIAGARIADAGIAAABQAAAEgDADQgCACgEAAQgCAAgFgEgAgPgYQgMANAAAPQAAAQAGAIQAFAIAMAAQAIAAAHgDIAKgIQgDgZAAgNIAAgJIACgKIgHgDIgDgBQgPAAgKAMg");
	this.shape_66.setTransform(26.2,86.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAYAwIgDgWIgBgVIABgJIAAgJQgBgVgHAAQgLAAgJANQgJAMgFARIgBAKIgBAJIABAJIAAAJQABAEgDADQgDACgEAAQgFAAgCgCQgCgDgBgEIAAgJIgBgJIABgbIACgcIgBgJIAAgJQABgFACgCQADgDAEAAQAJAAABANIAAALQAQgWARAAQAPAAAHAOQAEAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgDADQgCADgFAAQgIAAgBgJg");
	this.shape_67.setTransform(429.1,56.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AAfAyIgHgHIgQAHQgHADgEAAQgWAAgLgNQgKgMAAgZQAAgXAQgQQAQgRAWAAQAJAAAKAEQAOAGgBAHQAAADgBACIgCAMIAAAVQgBAMACAHIAGARIADAGIAAABQAAAEgDADQgDACgDAAQgCAAgFgEgAgPgYQgMANAAAPQAAAQAGAIQAGAIALAAQAJAAAGgDIAKgIQgDgZgBgNIABgJIACgKIgGgDIgEgBQgPAAgKAMg");
	this.shape_68.setTransform(418.5,56.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgbA2QgOgFAAgKQAAgEADgDQACgDAFAAQACAAAGAFQACACAIACIALABQAHAAAHgCQAIgDABgGQgBgNgSgFIgJgCQgNgDgGgEQgHgEAAgLQgBgVAUgJIASgGQANgDAFgDQAEgCAFAAQAEAAADADQACADAAAEIACAIIAAAJQABAEgDADQgDADgEAAQgGAAgCgEQgBgDgBgIIgXAHQgOAGAAAKIAFABQAWAEAKAHQAQAKABATQAAAQgOAIQgMAHgQAAQgNAAgMgFg");
	this.shape_69.setTransform(402.2,56.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AAYAwIgCgWIgCgVIABgJIAAgJQAAgVgIAAQgLAAgJANQgJAMgFARIgBAKIAAAJIAAAJIABAJQgBAEgCADQgDACgEAAQgEAAgDgCQgCgDAAgEIgBgJIgBgJIACgbIABgcIAAgJIAAgJQgBgFADgCQADgDAEAAQAJAAABANIAAALQARgWAQAAQAQAAAFAOQAFAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgCADQgDADgEAAQgJAAgBgJg");
	this.shape_70.setTransform(392.7,56.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgcApQgNgNgBgXQgBgVAMgRQAOgUAXAAQAUAAAKASQAIAPgBAUQAAAVgLAPQgMASgUAAQgQAAgMgNgAgRgTQgGALAAANQAAAOAIAIQAGAHAJAAQAJAAAHgIQAJgIAAgOQACglgWAAQgOAAgIAOg");
	this.shape_71.setTransform(381.8,56.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgIBHQgEgDAAgEIAAgSIAAgRIABgXIABgWQAAgFADgDQACgCAFAAQACAAADACQADADAAAFIgBAWIgBAXIAAARIABASQAAAEgDADQgDACgDABQgEgBgCgCgAgFg1QgEgDAAgFQAAgEAEgEQADgDAEAAQAEAAAEADQADAEAAAEQAAAFgDADQgEADgEAAQgEAAgDgDg");
	this.shape_72.setTransform(374.2,54.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgGBEQgDgCAAgDIABgMIAAgLIgCg4IgVgBQgJgCAAgJQAAgEADgCQACgDAEAAIAVACIAAgOIgBgMQAAgEACgDQAEgCAEAAQAHAAACAOIAAAIIAAAHIAAAGIAOgCQAKAAADABQAGABAAAIQAAAEgDADQgDADgDAAIgGAAIgEAAIgOABIACA4IAAAFIAAAFQABAVgLABQgCgBgEgDg");
	this.shape_73.setTransform(366.5,55);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgaA2QgPgFAAgKQgBgEADgDQAEgDADAAQAEAAAEAFQACACAJACIALABQAHAAAGgCQAKgDgBgGQABgNgTgFIgJgCQgNgDgFgEQgJgEABgLQAAgVASgJIASgGQANgDAGgDQAEgCAEAAQAFAAADADQACADAAAEIABAIIABAJQAAAEgCADQgDADgEAAQgGAAgBgEQgCgDgBgIIgWAHQgPAGgBAKIAHABQAVAEAKAHQARAKgBATQAAAQgNAIQgMAHgQAAQgNAAgLgFg");
	this.shape_74.setTransform(356.6,56.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AghAqQgPgMAAgWQAAgYANgSQANgSAWAAQAQAAAKAFQAMAHAAAOQAAAKgLAIIgUAKIglARQAGAIAIAEQAIAFAKAAQAHAAAJgDQALgDAEgFQADgGAEAAQADAAADADQADADAAADQAAALgSAIQgPAGgOAAQgVAAgOgLgAgUgZQgHAJgEARIAegNQAQgJAIgGQgJgIgOAAQgMAAgIAKg");
	this.shape_75.setTransform(346.7,56.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAWAvQgMAGgPAAQgNAAgIgGQgKgGgBgMQgEgaAAgTQAAgOADgRQABgIAIAAQAEAAADADQADADAAADIgBAPIgCAPIABAbQABALACAIIAHACIAGABQAMAAAPgEIgBgUIAAgSQAAgVACgQQABgIAJgBQAEAAADADQACADAAAEIgBAlIAAAUIAAAVIAAAHIAAAGQAAAEgCADQgDADgEAAQgIAAgCgJg");
	this.shape_76.setTransform(335.9,56.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AANBFIABgLIABgKIADgWIgNACQgUAAgNgLQgOgMAAgUQAAgcAQgRQAQgSAcAAQAGAAACAEQAEgEADAAQAFAAACAEQADADAAAEQAAAcgDAiIgEAkQgDAVAAARQAAAFgDACQgDADgEAAQgIAAgCgKgAgPgrQgHAMgBARQAAALAIAHQAHAIANgBQAJAAAFgKQAEgKAAgaIABgaQgBABgFgBIgHAAQgRADgJAPg");
	this.shape_77.setTransform(325.1,59);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgbBHQgNgIgEgMIgBgEQAAgEADgCQADgDAEAAQAEAAADAEIAEAGQAEAFAGADQAGACAIAAQAJAAAIgHQAJgHAAgKQAAgPgLgIQgJgIgPgCQgLgBAAgGQAAgGAIgDIAXgGQAGgCAEgFQADgEAAgGQABgIgHgGQgHgFgMAAQgHAAgGADIgLAHIgFACQgEAAgDgDQgDgDAAgEQAAgHAPgHQANgHAJAAQAUAAAMAKQANAJAAATQAAAXgTAHIgDACQANAEAGAJQAHAJAAAPQAAATgOANQgOAOgSAAQgPAAgMgGg");
	this.shape_78.setTransform(308,54.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgPBTQgDgCAAgEIAAgCQACgNAAgPIAAgaIAAgcIgQABQgJAAAAgJQAAgKARAAIAJgBIACgPQACgVAIgKQAKgNAVAAQAOAAAAAKQAAAJgNAAQgXAAgDAhIAAAGIAVgBQAQAAAAAJQAAAIgIABIgIAAIgWACIgBAVIAAASIABASQAAATgCAKQgBAIgHAAQgEAAgDgDg");
	this.shape_79.setTransform(290.8,54.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgcApQgNgNgBgXQgBgVAMgRQAOgUAXAAQAUAAAKASQAIAPgBAUQAAAVgLAPQgMASgUAAQgQAAgMgNgAgRgTQgGALAAANQAAAOAIAIQAGAHAJAAQAJAAAHgIQAJgIAAgOQACglgWAAQgOAAgIAOg");
	this.shape_80.setTransform(280.5,56.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AAaBKIgEgXIgBgXIAAgIIAAgIQAAgRgJAAQgMAAgJAKQgFAGgJAQQAAAmgDAGQgDAGgGAAQgEAAgDgCQgDgDAAgEIABgEQABgDAAgMIABgOIAAhHIABgQIgBgJIgBgKQAAgEADgCQACgDAFAAQAIAAABAIIABARIAAAWIgBAVIAAAJQAIgLAKgFQAIgGAKAAQAQAAAGALQAEAHABARIABATIACAUIADAUIABADQAAAEgDADQgDACgEAAQgHAAgDgHg");
	this.shape_81.setTransform(263.8,54);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgbArQgOgMAAgWQAAgTANgUQAPgYARAAQAKAAAMAFQAOAGAAAHQAAAFgCACQgDADgDAAQgDAAgCgCIgEgDQgGgFgNAAQgJAAgKASQgJARAAAKQAAAOAJAHQAIAHAMAAQAGAAAHgEIALgGIAEgBQAEAAACADQADADAAADQAAAHgPAIQgNAFgJAAQgTAAgNgMg");
	this.shape_82.setTransform(252.9,56.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AAfAyIgHgHIgQAHQgHADgEAAQgWAAgLgNQgKgMAAgZQAAgXAQgQQAQgRAWAAQAJAAAKAEQANAGAAAHQAAADgBACIgCAMIAAAVQgBAMACAHIAGARIADAGIAAABQAAAEgDADQgDACgDAAQgCAAgFgEgAgPgYQgMANAAAPQAAAQAGAIQAGAIALAAQAJAAAGgDIAKgIQgDgZgBgNIABgJIACgKIgHgDIgDgBQgPAAgKAMg");
	this.shape_83.setTransform(242.6,56.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AghAqQgPgMAAgWQAAgYANgSQANgSAWAAQAQAAAKAFQAMAHAAAOQAAAKgLAIIgUAKIglARQAGAIAIAEQAIAFAKAAQAHAAAJgDQALgDAEgFQADgGAEAAQADAAADADQADADAAADQAAALgSAIQgPAGgOAAQgVAAgOgLgAgUgZQgHAJgEARIAegNQAQgJAIgGQgJgIgOAAQgMAAgIAKg");
	this.shape_84.setTransform(232.1,56.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AAYAwIgDgWIgBgVIAAgJIAAgJQAAgVgHAAQgLAAgJANQgJAMgFARIgBAKIgBAJIABAJIAAAJQAAAEgCADQgDACgEAAQgEAAgDgCQgDgDAAgEIAAgJIgBgJIABgbIACgcIgBgJIAAgJQAAgFADgCQADgDAEAAQAJAAABANIAAALQARgWAQAAQAPAAAHAOQAEAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgDADQgDADgDAAQgJAAgBgJg");
	this.shape_85.setTransform(215.5,56.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgcApQgNgNgBgXQgBgVAMgRQAOgUAXAAQAUAAAKASQAIAPgBAUQAAAVgLAPQgMASgUAAQgQAAgMgNgAgRgTQgGALAAANQAAAOAIAIQAGAHAJAAQAJAAAHgIQAJgIAAgOQACglgWAAQgOAAgIAOg");
	this.shape_86.setTransform(204.7,56.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AAaBLQgFgKgKgOIgQgXIgSAMIgBAeQAAAEgDADQgDADgEAAQgJAAgBgOIABgYIACgYIAAghIABgiIgBgKIAAgLQAAgEADgDQACgCAEAAQAEAAADACQADADAAAEIABALIAAALIgBAfIAAAhIAZgVIAVgWQADgEAEAAQADAAADADQAEADAAAEQAAAEgDADQgMAOgSAPIAWAdQAPAVgBAGQAAAEgCACQgEADgEAAQgFAAgDgFg");
	this.shape_87.setTransform(188.8,53.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgbArQgOgMAAgWQAAgTANgUQAPgYARAAQAJAAAMAFQAPAGABAHQgBAFgCACQgCADgEAAQgDAAgCgCIgEgDQgGgFgNAAQgJAAgKASQgIARAAAKQAAAOAIAHQAJAHALAAQAGAAAGgEIAMgGIAEgBQAEAAADADQACADAAADQAAAHgPAIQgNAFgJAAQgTAAgNgMg");
	this.shape_88.setTransform(177.8,56.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgIBHQgDgDgBgEIAAgSIAAgRIABgXIABgWQAAgFADgDQACgCAFAAQACAAADACQADADAAAFIgBAWIgBAXIABARIAAASQAAAEgDADQgDACgDABQgEgBgCgCgAgGg1QgDgDAAgFQAAgEADgEQAEgDADAAQAFAAAEADQADAEAAAEQAAAFgDADQgEADgFAAQgDAAgEgDg");
	this.shape_89.setTransform(170,54.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgKBHIABgjIABgkIAAgiIABgkQAAgJAIAAQAKAAAAAJIAAAkIgBAiIgBAwIgBAXQgBAKgIAAQgJgBAAgJg");
	this.shape_90.setTransform(164.2,53.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgoA8QgNgPAAgVQAAggAbgiQAXgdAXAAIAJAAIAGACQAEgFAFgBQAHAAACAJQABAIAAALQAAAFgCACQgDAFgEAAQgHAAgDgIQgDgGgCgCQgCAAgIAAQgOgBgQAWQgYAdAAAZQAAANAIAJQAIAKAMAAQAJgBAKgFQAGgDAMgJQAFgDADAAQAEAAADADQADADAAAEQAAAEgEAEQgZAWgaAAQgUAAgOgPg");
	this.shape_91.setTransform(155.7,54.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgFAuQgDgCAAgFIAAgFIgBgGQAAgEADgCQADgDADAAQALAAAAAUQAAAFgDACQgCADgFAAQgDAAgDgDgAgHgYQgCgDAAgEIgBgEIAAgDQAAgFADgCQACgDAFAAQAKAAAAARQAAAEgDADQgDADgEAAQgEAAgDgDg");
	this.shape_92.setTransform(140.3,55.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgaA2QgPgFgBgKQAAgEAEgDQADgDADAAQAEAAAEAFQACACAJACIALABQAHAAAGgCQAKgDgBgGQAAgNgSgFIgJgCQgNgDgGgEQgIgEAAgLQABgVASgJIASgGQANgDAGgDQAEgCAEAAQAFAAACADQADADAAAEIACAIIABAJQAAAEgDADQgDADgEAAQgFAAgCgEQgCgDgBgIIgWAHQgPAGgBAKIAHABQAVAEALAHQAPAKAAATQAAAQgNAIQgMAHgQAAQgNAAgLgFg");
	this.shape_93.setTransform(132.3,56.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AAYAwIgDgWIgBgVIAAgJIAAgJQAAgVgHAAQgLAAgJANQgJAMgFARIgBAKIgBAJIABAJIAAAJQAAAEgCADQgDACgEAAQgFAAgCgCQgCgDgBgEIAAgJIgBgJIABgbIACgcIgBgJIAAgJQAAgFADgCQADgDAEAAQAJAAABANIAAALQAQgWARAAQAPAAAHAOQAEAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgDADQgDADgDAAQgJAAgBgJg");
	this.shape_94.setTransform(122.7,56.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgcApQgNgNgBgXQgBgVAMgRQAOgUAXAAQAUAAAKASQAIAPgBAUQAAAVgLAPQgMASgUAAQgQAAgMgNgAgRgTQgGALAAANQAAAOAIAIQAGAHAJAAQAJAAAHgIQAJgIAAgOQACglgWAAQgOAAgIAOg");
	this.shape_95.setTransform(111.9,56.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgJBHQgCgDAAgEIAAgSIgBgRIABgXIABgWQAAgFACgDQAEgCADAAQADAAAEACQACADAAAFIgBAWIgBAXIAAARIABASQAAAEgDADQgCACgEABQgEgBgDgCgAgFg1QgEgDAAgFQAAgEAEgEQADgDADAAQAGAAADADQADAEAAAEQAAAFgDADQgDADgGAAQgDAAgDgDg");
	this.shape_96.setTransform(104.2,54.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgGBEQgCgCAAgDIAAgMIAAgLIgCg4IgWgBQgIgCAAgJQAAgEACgCQADgDAEAAIAUACIAAgOIAAgMQAAgEADgDQADgCADAAQAJAAABAOIAAAIIAAAHIAAAGIANgCQALAAADABQAGABAAAIQAAAEgDADQgCADgFAAIgEAAIgGAAIgMABIACA4IAAAFIAAAFQAAAVgKABQgEgBgDgDg");
	this.shape_97.setTransform(96.5,55);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgbArQgOgMAAgWQAAgTANgUQAPgYARAAQAJAAAMAFQAPAGABAHQgBAFgCACQgCADgEAAQgDAAgCgCIgEgDQgGgFgNAAQgJAAgKASQgJARABAKQgBAOAJAHQAJAHALAAQAGAAAGgEIAMgGIAEgBQAEAAADADQACADAAADQAAAHgPAIQgNAFgJAAQgTAAgNgMg");
	this.shape_98.setTransform(86.8,56.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AAWAvQgMAGgPAAQgNAAgIgGQgKgGgBgMQgEgaAAgTQAAgOADgRQABgIAIAAQAEAAADADQADADAAADIgBAPIgCAPIABAbQABALACAIIAHACIAGABQAMAAAPgEIgBgUIAAgSQAAgVACgQQABgIAJgBQAEAAADADQACADAAAEIgBAlIAAAUIAAAVIAAAHIAAAGQAAAEgCADQgDADgEAAQgIAAgCgJg");
	this.shape_99.setTransform(76.4,56.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AglAtIAAhEIABgJIAAgKQAAgKAIAAQAJAAABAQQASgSAXAAQAHAAAEAGQAEAGAAAMIAAAHQAAAMgKAAQgIAAAAgJIgBgHIAAgIQgPABgJAHQgIAHgGAMIABA1QAAAKgKAAQgJAAAAgKg");
	this.shape_100.setTransform(66.7,56.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgGBEQgDgCAAgDIABgMIAAgLIgCg4IgVgBQgJgCAAgJQAAgEADgCQACgDAEAAIAVACIAAgOIgBgMQAAgEACgDQAEgCAEAAQAHAAACAOIAAAIIAAAHIAAAGIAOgCQAKAAADABQAGABAAAIQAAAEgDADQgDADgDAAIgGAAIgEAAIgOABIACA4IAAAFIAAAFQABAVgLABQgCgBgEgDg");
	this.shape_101.setTransform(56.9,55);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgaA2QgPgFgBgKQAAgEADgDQAEgDADAAQAEAAAEAFQACACAJACIALABQAHAAAGgCQAKgDgBgGQABgNgTgFIgJgCQgNgDgFgEQgJgEABgLQAAgVATgJIARgGQANgDAGgDQAEgCAEAAQAFAAADADQACADAAAEIABAIIABAJQAAAEgCADQgDADgEAAQgGAAgBgEQgCgDgBgIIgWAHQgPAGAAAKIAGABQAVAEAKAHQARAKgBATQAAAQgNAIQgMAHgQAAQgNAAgLgFg");
	this.shape_102.setTransform(47,56.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AAYAwIgDgWIgBgVIABgJIAAgJQgBgVgHAAQgLAAgJANQgJAMgFARIgBAKIgBAJIABAJIAAAJQABAEgDADQgDACgEAAQgFAAgCgCQgCgDgBgEIAAgJIgBgJIABgbIACgcIgBgJIAAgJQABgFACgCQADgDAEAAQAJAAABANIAAALQAQgWARAAQAQAAAFAOQAFAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgDADQgCADgFAAQgIAAgBgJg");
	this.shape_103.setTransform(37.5,56.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgqBIQgDgDAAgEQAAgEADgDQACgDAEAAIAWgCIABgSIgBgRIAAgQQgBgWADgiIgMABIgOAAQgDAAgEgDQgCgDAAgEQAAgJAJgBIAdgBQATAAAeAFQAIABAAAJQAAAFgEACQgCADgEAAIgQgCIgQgCQgCAdAAAZIAAAQIABARIgBARIAfAAQAEAAADADQADACAAAFQAAAEgDADQgDADgEAAIgQAAIgQAAIgTACIgUACQgEAAgCgDg");
	this.shape_104.setTransform(26.6,54.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_105.setTransform(45.7,287.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgmBjQgSgKgGgTIgBgEQAAgFAEgEQAFgEAFAAQAFAAAEAFIAHAJQAEAIAJADQAIADALAAQAPAAALgJQAMgKAAgOQAAgVgQgNQgNgKgVgCQgPgCAAgKQAAgHAMgFIAfgIQAKgEAFgFQAEgGAAgIQABgMgKgIQgKgHgRAAQgJgBgJAFIgPAKQgFACgCAAQgGAAgEgDQgEgEAAgGQAAgLAVgJQATgJALAAQAdAAAQAMQATAOAAAaQAAAggaAKIgFACQASAHAJANQAJANAAAUQAAAbgTASQgTAUgbAAQgUgBgRgIg");
	this.shape_106.setTransform(33.4,278.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_107.setTransform(45.7,245.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AApBnIgJgCIgUABIgVAAIgPACIgQABIgFAAIgEgBQgJAAgEgJQgBgFAAgLQAAggARgUQAIgJAjgXQATgNAGgHQAMgOAAgRQAAgJgLgHQgLgGgJAAQgMAAgLAHIgTAQQgGAEgEAAQgOAAAAgLQAAgGAGgFQAQgPALgHQARgJAQAAQAWAAARAMQAUANAAAWQAAANgEAMQgEAMgIAKQgLALgXAPQgaAQgHAJQgPAPgBAXIAcgDIApgBQAKAAAKADQAMAFAAAIQAAAGgEAEQgDAEgGAAQgDAAgHgCg");
	this.shape_108.setTransform(33.7,235.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_109.setTransform(41.3,202.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AADBrIgaAAIgNgBQgHgDAAgIQAAgOAWAAIAGAAIAGAAIgBgTIgBgTQAAgRADgjQACgjAAgSQgSAPgFAAQgFAAgEgFQgFgEAAgFQABgGAMgKIAUgQQALgMALgBQAKAAgBALIgBAJIgBAJIABAPIAAANQAAAPgDAgQgDAdAAAQIABATIACASIAOAAQAFABAFADQADAEAAAFQAAAHgDADQgFADgFABg");
	this.shape_110.setTransform(31.6,192.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("rgba(255,255,255,0.8)").s().p("A5OQiMAAAghDMAydAAAMAAAAhDg");
	this.shape_111.setTransform(181.5,221.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]}).wait(17));

	// Anim
	this.instance_3 = new lib.bk3("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(261.5,210.5,1.007,1,0,0,0,282.3,176.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(17));

	// Layer 1
	this.btn_goBack = new lib.goNext();
	this.btn_goBack.parent = this;
	this.btn_goBack.setTransform(57.6,352.3,1,1,0,0,180);
	new cjs.ButtonHelper(this.btn_goBack, 0, 1, 2, false, new lib.goNext(), 3);

	this.btn_goNext = new lib.goNext();
	this.btn_goNext.parent = this;
	this.btn_goNext.setTransform(494,352.3);
	this.btn_goNext.visible = false;
	new cjs.ButtonHelper(this.btn_goNext, 0, 1, 2, false, new lib.goNext(), 3);

	this.instance_4 = new lib.Copyright("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(275,389.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.btn_goNext},{t:this.btn_goBack}]}).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(284.2,199.4,533.3,399.6);
// library properties:
lib.properties = {
	id: 'F85C9D605B7A234F973AAB3A12EA45C9',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/SE1stThought.mp3", id:"SE1stThought"},
		{src:"sounds/SE2ndThought.mp3", id:"SE2ndThought"},
		{src:"sounds/SE3rdThought.mp3", id:"SE3rdThought"},
		{src:"sounds/arealways.mp3", id:"arealways"},
		{src:"sounds/arearticles.mp3", id:"arearticles"},
		{src:"sounds/SEAdjetiveAnswers.mp3", id:"SEAdjetiveAnswers"},
		{src:"sounds/modifies.mp3", id:"modifies"},
		{src:"sounds/nounmarkers.mp3", id:"nounmarkers"},
		{src:"sounds/SEBlackHair.mp3", id:"SEBlackHair"},
		{src:"sounds/wrong_answer.mp3", id:"wrong_answer"},
		{src:"sounds/SEBrownHair.mp3", id:"SEBrownHair"},
		{src:"sounds/bushrattle.mp3", id:"bushrattle"},
		{src:"sounds/SERitaChopsMick.mp3", id:"SERitaChopsMick"},
		{src:"sounds/correctwav.mp3", id:"correctwav"},
		{src:"sounds/_6a.mp3", id:"_6a"},
		{src:"sounds/_7a.mp3", id:"_7a"},
		{src:"sounds/highclick.mp3", id:"highclick"},
		{src:"sounds/incorrectwav.mp3", id:"incorrectwav"},
		{src:"sounds/JingleAdjetives.mp3", id:"JingleAdjetives"},
		{src:"sounds/lowclick.mp3", id:"lowclick"},
		{src:"sounds/signalthecomingofanoun.mp3", id:"signalthecomingofanoun"},
		{src:"sounds/bgmTest.mp3", id:"bgmTest"},
		{src:"sounds/eyepopsout.mp3", id:"eyepopsout"},
		{src:"sounds/eagleleaves.mp3", id:"eagleleaves"},
		{src:"sounds/eaglemove.mp3", id:"eaglemove"},
		{src:"sounds/_1b.mp3", id:"_1b"},
		{src:"sounds/parrotleaves.mp3", id:"parrotleaves"},
		{src:"sounds/parrotmove1.mp3", id:"parrotmove1"},
		{src:"sounds/parrotmove2.mp3", id:"parrotmove2"},
		{src:"sounds/percussionloop.mp3", id:"percussionloop"},
		{src:"sounds/pianoe.mp3", id:"pianoe"},
		{src:"sounds/pianof.mp3", id:"pianof"},
		{src:"sounds/pianof_1.mp3", id:"pianof_1"},
		{src:"sounds/SERedHair.mp3", id:"SERedHair"},
		{src:"sounds/scaryloop.mp3", id:"scaryloop"},
		{src:"sounds/showwhatyouknow.mp3", id:"showwhatyouknow"},
		{src:"sounds/ack.mp3", id:"ack"},
		{src:"sounds/articlesareadjectivescallednounmarkers.mp3", id:"articlesareadjectivescallednounmarkers"},
		{src:"sounds/SE3questions.mp3", id:"SE3questions"},
		{src:"sounds/_6b.mp3", id:"_6b"},
		{src:"sounds/SEWaterHits.mp3", id:"SEWaterHits"},
		{src:"sounds/SEWaterSpill.mp3", id:"SEWaterSpill"},
		{src:"sounds/SEWhichOne.mp3", id:"SEWhichOne"},
		{src:"sounds/whistles_crowd.mp3", id:"whistles_crowd"},
		{src:"sounds/_1d.mp3", id:"_1d"},
		{src:"sounds/yeah.mp3", id:"yeah"}
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
an.compositions['F85C9D605B7A234F973AAB3A12EA45C9'] = {
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