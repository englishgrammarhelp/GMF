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


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AJJFKQgGAAgFgFQgEgEAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAHRFKQgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAFZFKQgGAAgFgFQgEgEAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAEQgEAFgGAAgADhFKQgGAAgFgFQgEgEAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAEQgEAFgGAAgABpFKQgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAgOFKQgGAAgFgFQgEgEAAgGQAAgGAEgFQAFgEAGAAIA7AAQAGAAAEAEQAFAFAAAGQAAAGgFAEQgEAFgGAAgAiGFKQgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAEQgEAFgGAAgAj+FKQgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAl2FKQgGAAgFgFQgEgEAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAEQgEAFgGAAgAnuFKQgGAAgFgFQgEgEAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAEQgEAFgGAAgApmFKQgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAqPEnQgEgFAAgGIAAg8QAAgGAEgEQAFgFAGAAQAGAAAFAFQAEAEAAAGIAAA8QAAAGgEAFQgFAEgGAAQgGAAgFgEgAJ7EKQgFgFAAgGIAAg8QAAgGAFgEQAEgFAGAAQAGAAAFAFQAEAEAAAGIAAA8QAAAGgEAFQgFAEgGAAQgGAAgEgEgAqPCvQgEgFAAgGIAAg8QAAgGAEgEQAFgFAGAAQAGAAAFAFQAEAEAAAGIAAA8QAAAGgEAFQgFAEgGAAQgGAAgFgEgAJ7CSQgFgFAAgGIAAg8QAAgGAFgEQAEgFAGAAQAGAAAFAFQAEAEAAAGIAAA8QAAAGgEAFQgFAEgGAAQgGAAgEgEgAqPA3QgEgFAAgGIAAg7QAAgGAEgEQAFgFAGAAQAGAAAFAFQAEAEAAAGIAAA7QAAAGgEAFQgFAEgGAAQgGAAgFgEgAJ7AaQgFgFAAgGIAAg7QAAgGAFgEQAEgFAGAAQAGAAAFAFQAEAEAAAGIAAA7QAAAGgEAFQgFAEgGAAQgGAAgEgEgAqPhAQgEgFAAgGIAAg8QAAgGAEgEQAFgFAGAAQAGAAAFAFQAEAEAAAGIAAA8QAAAGgEAFQgFAEgGAAQgGAAgFgEgAJ7hdQgFgFAAgGIAAg8QAAgGAFgEQAEgFAGAAQAGAAAFAFQAEAEAAAGIAAA8QAAAGgEAFQgFAEgGAAQgGAAgEgEgAqPi4QgEgFAAgGIAAg8QAAgGAEgEQAFgFAGAAQAGAAAFAFQAEAEAAAGIAAA8QAAAGgEAFQgFAEgGAAQgGAAgFgEgAJ7jVQgFgFAAgGIAAg8QAAgGAFgEQAEgFAGAAQAGAAAFAFQAEAEAAAGIAAA8QAAAGgEAFQgFAEgGAAQgGAAgEgEgAIrkrQgGAAgEgEQgFgFAAgGQAAgGAFgEQAEgFAGAAIA8AAQAGAAAFAFQAEAEAAAGQAAAGgEAFQgFAEgGAAgAGzkrQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgAE7krQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgADDkrQgGAAgEgEQgFgFAAgGQAAgGAFgEQAEgFAGAAIA8AAQAGAAAFAFQAEAEAAAGQAAAGgEAFQgFAEgGAAgABLkrQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgAgskrQgGAAgEgEQgFgFAAgGQAAgGAFgEQAEgFAGAAIA7AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgAikkrQgGAAgEgEQgFgFAAgGQAAgGAFgEQAEgFAGAAIA8AAQAGAAAFAFQAEAEAAAGQAAAGgEAFQgFAEgGAAgAkckrQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgAmUkrQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgAoMkrQgGAAgEgEQgFgFAAgGQAAgGAFgEQAEgFAGAAIA8AAQAGAAAFAFQAEAEAAAGQAAAGgEAFQgFAEgGAAgAqEkrQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAg");
	this.shape.setTransform(64.5,31.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-1.5,-1.5,132,66), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AJJFKQgGAAgFgFQgEgEAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAHRFKQgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAFZFKQgGAAgFgFQgEgEAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAEQgEAFgGAAgADhFKQgGAAgFgFQgEgEAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAEQgEAFgGAAgABpFKQgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAgOFKQgGAAgFgFQgEgEAAgGQAAgGAEgFQAFgEAGAAIA7AAQAGAAAEAEQAFAFAAAGQAAAGgFAEQgEAFgGAAgAiGFKQgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAEQgEAFgGAAgAj+FKQgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAl2FKQgGAAgFgFQgEgEAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAEQgEAFgGAAgAnuFKQgGAAgFgFQgEgEAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAEQgEAFgGAAgApmFKQgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAqPEnQgEgFAAgGIAAg8QAAgGAEgEQAFgFAGAAQAGAAAFAFQAEAEAAAGIAAA8QAAAGgEAFQgFAEgGAAQgGAAgFgEgAJ7EKQgFgFAAgGIAAg8QAAgGAFgEQAEgFAGAAQAGAAAFAFQAEAEAAAGIAAA8QAAAGgEAFQgFAEgGAAQgGAAgEgEgAqPCvQgEgFAAgGIAAg8QAAgGAEgEQAFgFAGAAQAGAAAFAFQAEAEAAAGIAAA8QAAAGgEAFQgFAEgGAAQgGAAgFgEgAJ7CSQgFgFAAgGIAAg8QAAgGAFgEQAEgFAGAAQAGAAAFAFQAEAEAAAGIAAA8QAAAGgEAFQgFAEgGAAQgGAAgEgEgAqPA3QgEgFAAgGIAAg7QAAgGAEgEQAFgFAGAAQAGAAAFAFQAEAEAAAGIAAA7QAAAGgEAFQgFAEgGAAQgGAAgFgEgAJ7AaQgFgFAAgGIAAg7QAAgGAFgEQAEgFAGAAQAGAAAFAFQAEAEAAAGIAAA7QAAAGgEAFQgFAEgGAAQgGAAgEgEgAqPhAQgEgFAAgGIAAg8QAAgGAEgEQAFgFAGAAQAGAAAFAFQAEAEAAAGIAAA8QAAAGgEAFQgFAEgGAAQgGAAgFgEgAJ7hdQgFgFAAgGIAAg8QAAgGAFgEQAEgFAGAAQAGAAAFAFQAEAEAAAGIAAA8QAAAGgEAFQgFAEgGAAQgGAAgEgEgAqPi4QgEgFAAgGIAAg8QAAgGAEgEQAFgFAGAAQAGAAAFAFQAEAEAAAGIAAA8QAAAGgEAFQgFAEgGAAQgGAAgFgEgAJ7jVQgFgFAAgGIAAg8QAAgGAFgEQAEgFAGAAQAGAAAFAFQAEAEAAAGIAAA8QAAAGgEAFQgFAEgGAAQgGAAgEgEgAIrkrQgGAAgEgEQgFgFAAgGQAAgGAFgEQAEgFAGAAIA8AAQAGAAAFAFQAEAEAAAGQAAAGgEAFQgFAEgGAAgAGzkrQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgAE7krQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgADDkrQgGAAgEgEQgFgFAAgGQAAgGAFgEQAEgFAGAAIA8AAQAGAAAFAFQAEAEAAAGQAAAGgEAFQgFAEgGAAgABLkrQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgAgskrQgGAAgEgEQgFgFAAgGQAAgGAFgEQAEgFAGAAIA7AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgAikkrQgGAAgEgEQgFgFAAgGQAAgGAFgEQAEgFAGAAIA8AAQAGAAAFAFQAEAEAAAGQAAAGgEAFQgFAEgGAAgAkckrQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgAmUkrQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgAoMkrQgGAAgEgEQgFgFAAgGQAAgGAFgEQAEgFAGAAIA8AAQAGAAAFAFQAEAEAAAGQAAAGgEAFQgFAEgGAAgAqEkrQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAg");
	this.shape.setTransform(64.5,31.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-1.5,-1.5,132,66), null);


(lib.QuizB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.733)","rgba(255,255,255,0.271)"],[0,1],-256,0,256,0).s().p("Egn/AC5IAAlxMBP/AAAIAAFxg");
	this.shape.setTransform(0.1,-124.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1,1).p("EAoTgYDIAAfuMhQgAAAIAA/ugEAoTAYEMhQlAAAIAAvHMBQlAAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFFF","#33FFFF"],[0,1],-324.9,0,325,0).s().p("EgoSAHkIAAvHMBQlAAAIAAPHg");
	this.shape_2.setTransform(0,105.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFFFFF","#FF3366"],[0,1],0,148.9,0,-148.8).s().p("EgoQAP4IAA/vMBQhAAAIAAfvg");
	this.shape_3.setTransform(0.3,-52.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-259.3,-155.5,518.8,311.1);


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


(lib.item_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000099").ss(3,1,1).p("ApAAAISBAA");
	this.shape.setTransform(64,35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.098)").s().p("Ap3BzIAAjlITvAAIAADlg");
	this.shape_1.setTransform(64.1,34.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.item_2, new cjs.Rectangle(0.8,23,126.5,23), null);


(lib.item_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000099").ss(3,1,1).p("AJGkGIAAINApFAXISAAA");
	this.shape.setTransform(63.6,32.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.098)").s().p("ApdEMIAAoXIS7AAIAAIXg");
	this.shape_1.setTransform(61.2,32.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.item_1, new cjs.Rectangle(0.6,5,122.8,55.5), null);


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


(lib.check = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CC00").s().p("AiwA/IAAiWIB+B9IDjjjIAACYIjjDjg");
	this.shape.setTransform(40,45.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiwA/IAAiWIB+B9IDjjjIAACYIjjDjg");
	this.shape_1.setTransform(42,47.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.check, new cjs.Rectangle(22.3,26.3,37.5,40), null);


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


// stage content:
(lib.diag_quiz2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.item1.addEventListener("pressmove", click1.bind(this));
		this.item2.addEventListener("pressmove", click2.bind(this));
		
		//nav buttons --------------------------------------------
		this.btn_goNext.addEventListener("click", openNext.bind(this));
		this.btn_goBack.addEventListener("click", openPrev.bind(this));
		this.btn_goNext.mouseEnabled = false;
		
		
		
		var firstHit = false;
		var secondHit = false;
		
		//Drag n Drop
		var hit = false;
		function checkCollision(obj_1,obj_2) {
		
		    obj1x = obj_1.x;
		    obj1y = obj_1.y;
		    obj1w = obj_1.nominalBounds.width;
		    obj1h = obj_1.nominalBounds.height;
		
		    obj2x = obj_2.x;
		    obj2y = obj_2.y;
		    obj2w = obj_2.nominalBounds.width;
		    obj2h = obj_2.nominalBounds.height;
		
		    if (    obj1x >= obj2x + obj2w
		        ||  obj1x + obj1w <= obj2x
		        ||  obj1y >= obj2y + obj2h
		        ||  obj1y + obj1h <= obj2y) {
				console.log(hit);
				hit = false;
					
		    } 
			else {
				
				hit = true;
				obj_1.x = obj_2.x;
				obj_1.y = obj_2.y;
				console.log(hit);
				
		    }
		}
		
		function click1(evt)
		{
			checkCollision(evt.currentTarget,this.target1);
			
			if(!hit){
			evt.currentTarget.x = stage.mouseX / stage.scaleX;
			evt.currentTarget.y = stage.mouseY / stage.scaleY;
			console.log("click");
			}
			else if (hit){
				firstHit = true;
				console.log("first hit");
				evt.currentTarget.mouseEnabled = false;
				this.correct1.visible = true;
			}
			
			if (firstHit & secondHit)
			{
				console.log("yay!");
				this.btn_goNext.mouseEnabled = true;
				this.btn_goNext.visible = true;
			}
		
		}
		
		function click2(evt)
		{
			checkCollision(evt.currentTarget,this.target2);
			
			if(!hit){
			evt.currentTarget.x = stage.mouseX / stage.scaleX;
			evt.currentTarget.y = stage.mouseY / stage.scaleY;
			console.log("click");
			}
			else if (hit){
				secondHit = true;
				console.log("second hit");
				evt.currentTarget.mouseEnabled = false;
				this.correct2.visible = true;
			}
			
			if (firstHit & secondHit)
			{
				console.log("yay!");
				this.btn_goNext.mouseEnabled = true;
				this.btn_goNext.visible = true;
			}
		
			
		}
		
		
		//volume setting -----------------------------------------
		function volDwn()
		{
			createjs.Sound.volume = createjs.Sound.volume *0.5;
		}
		function volUp()
		{
			createjs.Sound.volume = createjs.Sound.volume +0.5;
		}
		
		//page navigation ----------------------------------------
		function openMenu(){
		
		 window.open ("../menu/menu.html","_self");
		}
		
		function openNext(){
		
		 window.open ("diag_quiz2b.html","_self");
		}
		
		
		function openPrev(){
		
		 window.open ("diag_quiz1b.html","_self");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// main
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgIBDQgEgEAAgFQAAgEAEgEQADgDAFABQAEAAAFAFQAEAFAAAFQAAAEgEADQgDADgFABQgEAAgFgHgAgGAmQgDgDAAgFIAAgKIAAgKIAAgjIAAgkQAAgGADgCQAEgDAEAAQAEAAAEADQADACAAAGIAABbQAAAFgDADQgEADgEAAQgEAAgEgDg");
	this.shape.setTransform(340.6,16.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgHAzQgDgEAAgFIgCgdIgCgdIgBgIQgLAFgKAOIgBACIgBAbIAAAHIAAAGQAAAEgEADQgEADgFAAQgHAAgDgHQgCgEAAgKIAAgfIAAgNIAAgNQAAgIACgGQAEgIAGAAQAFAAAEAEQAEADAAAFIgBAHQANgPAMAAQAOAAAFAKQAFgEAHgDQAGgCAIAAQARAAAGARQACAEACAUIAGAuQABAFgEAEQgEADgFAAQgKAAgCgKIgDgaIgDgYQgCgQgEAAQgCAAgHAEIgLAHQAAAKADASQACATAAAJQAAAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_1.setTransform(331.8,19.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AAVApIgOAGQgGACgDAAQgWAAgKgMQgLgLAAgXQAAgUAQgPQAPgPAVgBQAJAAALAGQANAFAAAHQAAADgCADIgBAJIgBAMQAAAQACAHIAEAJIAEAJQAAAEgEADQgDAEgFAAQgEgBgJgHgAgMgRQgIAKAAALQAAALAEAHQAEAFAIAAQAFAAAFgCQAFgBAEgDQgDgVAAgKIABgHIABgHIgDgCIgDgBQgLAAgJAKg");
	this.shape_2.setTransform(319.7,19.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgiAuQgDgEAAgEIAAg5IAAgIIAAgIQAAgFAEgDQADgEAFAAQAKAAACAKQAOgLATAAQARAAABAXIAAAGQgBANgMAAQgLAAAAgLIAAgJQgTADgIARIAAAsQgBAFgDADQgDADgFAAQgGAAgDgDg");
	this.shape_3.setTransform(310.5,19.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgsA4QAAgFADgDQACgDAGAAIALACIANABQAMAAAHgIQAFgHABgRQgEAEgGACQgFADgGAAQgRAAgLgMQgLgLAAgRQAAgYAOgOQAPgQAZAAQAJAAAFACQAHACADAEQAMACAAAMIgDAQQgEAVAAAVQgBAdgIANQgMARgcAAQgjAAABgOgAgNgnQgHAJAAAOQAAALAEAFQAEAEAIAAQAGAAAHgHQAHgIABgIIAEgaIgGgDIgFgBQgOAAgJAKg");
	this.shape_4.setTransform(301.2,21.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AAVApIgOAGQgGACgDAAQgWAAgKgMQgLgLAAgXQAAgUAQgPQAPgPAVgBQAJAAALAGQANAFAAAHQAAADgCADIgBAJIgBAMQAAAQACAHIAEAJIAEAJQAAAEgEADQgDAEgFAAQgEgBgJgHgAgMgRQgIAKAAALQAAALAEAHQAEAFAIAAQAFAAAFgCQAFgBAEgDQgDgVAAgKIABgHIABgHIgDgCIgDgBQgLAAgJAKg");
	this.shape_5.setTransform(291.5,19.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgKBAQgDgEgBgFIAAgQIAAgPIAAgVIABgSQABgFADgEQADgDAGAAQAEAAAEADQADAEAAAFIgBASIgBAVIABAPIAAAQQgBAFgDAEQgDADgFAAQgFAAgDgDgAgHgsQgFgEAAgFQAAgGAFgDQAEgEAFAAQAFAAAEAEQAEADAAAGQAAAFgEAEQgEAEgFAAQgFAAgEgEg");
	this.shape_6.setTransform(284.2,17.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AAYBCQgGAEgGABIgMABQgUAAgNgMQgNgOAAgTQAAgYANgNQANgPAVAAQAGAAAGABIAJAFQABgeABgMQACgKAKAAQAFAAADADQADADAAAFIgCAnIgCAlQAAAgACAKIABADQAAAFgEADQgDADgFAAQgHAAgDgGgAgRAEQgHAIAAAOQAAAKAHAHQAHAGAKABQAFAAAEgCIAIgGIADgCIAAghQgDgFgFgCQgEgDgHABQgMAAgGAGg");
	this.shape_7.setTransform(276,16.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgdAmQgPgLAAgUQAAgWAMgPQANgRAVAAQAPAAAKAFQAOAGAAAOQAAAKgLAHQgFAEgPAFIgcAOQAEAEAFADQAGACAIAAQALgBAIgEQAHgFAFABQAJgBAAAKQAAAKgPAGQgMAFgNAAQgVAAgNgKgAgLgUQgGAFgDALIAUgJIARgJQgGgDgJAAQgHAAgGAFg");
	this.shape_8.setTransform(257.9,19.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AAVBAQgDgHgBgNIgCgUIAAgHIABgGIgBgIQAAgEgEAAQgKAAgHAIQgEAFgHAMQAAAggDAHQgDAHgIAAQgFAAgEgDQgEgEAAgFIABgEQABgCABgWIAAg6IAAgDIAAgOIAAgIIgBgIQAAgFADgDQAEgDAFAAQAJAAADAJQABAGAAAKIAAASIgBARQAHgGAHgDQAGgDAJAAQAPAAAGAIQAFAHABAMIABAVIACASIADARIABADQAAAFgEADQgEADgFAAQgJAAgCgJg");
	this.shape_9.setTransform(248,16.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgHA9QgDgDAAgFIAAgJIAAgKIgCgsIgQgBQgMgCAAgKQAAgFAEgDQADgEAGAAIAOABIAAgJIAAgJQAAgFAEgDQADgDAFAAQAMAAAAAWIAAAHIAJgBQAKAAAEACQAGACAAAIQABAFgEAEQgDADgGAAIgEAAIgEAAIgJAAIACAuIAAAEIAAAFQAAAUgMAAQgEAAgEgDg");
	this.shape_10.setTransform(238.4,17.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AAYBCQgGAEgGABIgMABQgUAAgNgMQgNgOAAgTQAAgYANgNQANgPAVAAQAGAAAGABIAJAFQABgeABgMQACgKAKAAQAFAAADADQADADAAAFIgCAnIgCAlQAAAgACAKIABADQAAAFgEADQgDADgFAAQgHAAgDgGgAgRAEQgHAIAAAOQAAAKAHAHQAHAGAKABQAFAAAEgCIAIgGIADgCIAAghQgDgFgFgCQgEgDgHABQgMAAgGAGg");
	this.shape_11.setTransform(220.9,16.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgIBFQgDgDAAgGIAAh4QAAgFADgDQAEgDAEAAQAFAAADADQAEADAAAFIAAB0QAAARgMAAQgFAAgDgEg");
	this.shape_12.setTransform(213.2,16.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AgKBAQgDgEAAgFIgBgQIgBgPIACgVIABgSQgBgFAEgEQAEgDAEAAQAFAAAEADQACAEAAAFIAAASIgBAVIAAAPIAAAQQABAFgEAEQgEADgDAAQgGAAgDgDgAgIgsQgDgEAAgFQAAgGADgDQAFgEAEAAQAGAAAEAEQAFADAAAGQAAAFgFAEQgEAEgGAAQgEAAgFgEg");
	this.shape_13.setTransform(208.5,17.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AASAsQgMADgLAAQgMAAgJgEQgJgHgCgLQgEgWAAgRQAAgKADgQQACgJAKAAQAFAAAEADQADADAAAFIgBAMIgBAMIABAVQAAAKACAFIAEACIAEABQAJAAAMgEIAAgPIgBgOQAAgRACgNQABgLALAAQAFAAAEADQAEADgBAGIgBAeIAAARIAAARIAAAGIAAAFQAAAFgDAEQgEADgFAAQgHAAgDgGg");
	this.shape_14.setTransform(201,19.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AgrBDQgEgEAAgFIAAhdIAAgMQgBgGABgFQABgIAOgCQAHgCAQAAQAPAAAPALQASAMAAATQAAAKgDAHQgDAFgIAGQAJAEAHAJQAHAJAAAJQAAALgNALQgIAHgKADQgTAIgfAAQgGAAgEgEgAgXAvQAPgBARgEQAPgFAAgFQAAgHgKgFQgHgFgHAAIgXAAgAgXguIAAASIAAATIAMAAQAagCAAgRQAAgGgIgGQgHgGgJgBIgOABg");
	this.shape_15.setTransform(191.1,16.9);

	this.correct2 = new lib.check();
	this.correct2.parent = this;
	this.correct2.setTransform(339.1,143.1,0.668,0.667,0,0,0,26.1,26);
	this.correct2.visible = false;

	this.correct1 = new lib.check();
	this.correct1.parent = this;
	this.correct1.setTransform(155.9,143.3,0.668,0.667,0,0,0,26.6,26.9);
	this.correct1.visible = false;

	this.instance = new lib.Copyright("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(275,393.5);

	this.btn_goBack = new lib.goNext();
	this.btn_goBack.parent = this;
	this.btn_goBack.setTransform(57.6,352.3,1,1,0,0,180);
	new cjs.ButtonHelper(this.btn_goBack, 0, 1, 2, false, new lib.goNext(), 3);

	this.btn_goNext = new lib.goNext();
	this.btn_goNext.parent = this;
	this.btn_goNext.setTransform(494,352.3);
	this.btn_goNext.visible = false;
	new cjs.ButtonHelper(this.btn_goNext, 0, 1, 2, false, new lib.goNext(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_goNext},{t:this.btn_goBack},{t:this.instance},{t:this.correct1},{t:this.correct2},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.UI}]}).wait(1));

	// items
	this.item1 = new lib.item_1();
	this.item1.parent = this;
	this.item1.setTransform(349,293.9,1,1,0,0,0,64.5,31.4);

	this.item2 = new lib.item_2();
	this.item2.parent = this;
	this.item2.setTransform(162.3,293.9,1,1,0,0,0,64.5,31.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item2},{t:this.item1}]}).wait(1));

	// Directions
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgLAMQgEgFAAgHQAAgGAEgFQAFgEAGAAQAHAAAFAEQAEAFAAAGQAAAHgEAFQgFAEgHABQgGgBgFgEg");
	this.shape_16.setTransform(318.8,77.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgtBmQgRgDAAgKQAAgMAMAAQAFAAALACQALACANAAQAZAAAJgYQAGgQABgiQgHANgKAHQgKAHgMAAQgXAAgPgRQgPgQAAgZQAAgkAUgVQAVgXAkAAQAMAAAIADQAIAEAFAGQAOAAAAAQQAAAJgDAQIgDAYIgDAsQgBAagFARQgGAVgNAKQgQANgdAAQgRAAgMgDgAgYhBQgMAPAAAYQAAATAHAJQAIAKAOAAQANAAAMgOQALgOACgOIAGgtQgFgEgGgCQgGgCgGAAQgYAAgOASg");
	this.shape_17.setTransform(308,75);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAgBAIgEgdQgBgPAAgOIAAgLIABgNQAAgcgLAAQgPAAgMARQgMAQgHAYIgCANIAAANIAAALIACAMQAAAGgEAEQgEAEgGAAQgFAAgEgEQgEgEABgGIgBgMIgBgLIACglIACgmIAAgMIgBgNQAAgFADgEQAFgEAFAAQAMAAABARIABAQQAWgeAWAAQAVAAAIATQAGAMABAZIAAANIAAALQAAALACARQADASAAALQAAAFgEAEQgDAEgGAAQgLAAgCgNg");
	this.shape_18.setTransform(294.3,71.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgMBfQgEgDAAgGIAAgXIgBgZIACgeIABgeQAAgGAEgEQADgEAGABQAFgBADAEQAEAEAAAGIgBAeIgCAeIABAZIAAAXQAAAGgDADQgEAEgFAAQgFAAgEgEgAgIhIQgEgEAAgHQAAgGAEgFQAFgEAFAAQAHAAAEAEQAFAFAAAGQAAAHgFAEQgEAEgHAAQgFAAgFgEg");
	this.shape_19.setTransform(283.4,68.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgIBdQgDgEAAgFIAAgPIAAgPIgChMIgegCQgLgCgBgLQABgGADgEQAEgEAFAAIAcADIAAgSIgCgRQABgFAEgEQADgDAGAAQALAAACATIAAAMIAAAHIAAAJIATgDQANAAAFACQAHACAAAKQAAAGgDAEQgEADgGAAIgGAAIgGAAIgSACIACBNIAAAGIABAGQAAAdgPAAQgEAAgEgDg");
	this.shape_20.setTransform(273,69.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("Ag0BbQgZgLAAgUQAAgFAEgEQAEgDAFgBQAHABAFAHQAGAKAGADQALAIAVAAQAUAAARgJQAXgLAAgUQAAgRgTgJQgQgJgXAAQgVgBgOgHQgTgMAAgTQAAgXAbgUQAZgSAaAAQANgBAQAFQAWAFAAAKQAAALgMAAIgTgCQgNgDgHgBQgUABgOAKQgPAKAAAOQAAAMAUAEQAHACAUABQAeACARARQAPAOAAAWQAAAfgdATQgZAQggAAQgYABgUgKg");
	this.shape_21.setTransform(257.4,68.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgkBJQgUgHAAgNQAAgFAEgEQAEgEAFAAQAEAAAHAGQADADALACQAJACAGAAQAKAAAIgDQANgEAAgIQAAgSgZgGIgNgEQgSgDgHgFQgLgHAAgPQAAgbAagMQAIgEARgEIAZgJQAFgCAGAAQAGAAAEADQADAEAAAGIACALIABALQAAAGgDAEQgEAEgFAAQgIAAgDgFQgCgEgBgKIgeAJQgVAIAAANIAIACQAdAFAPAKQAWANAAAaQAAAVgTALQgPAJgXAAQgRAAgQgGg");
	this.shape_22.setTransform(232.9,70.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgHBdQgEgEgBgFIABgPIAAgPIgDhMIgdgCQgLgCAAgLQgBgGAEgEQADgEAGAAIAcADIgBgSIgBgRQAAgFAEgEQAFgDAFAAQALAAACATIAAAMIAAAHIAAAJIASgDQAOAAAEACQAJACgBAKQAAAGgDAEQgEADgFAAIgHAAIgHAAIgSACIADBNIAAAGIAAAGQABAdgOAAQgFAAgDgDg");
	this.shape_23.setTransform(220.4,69.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAgBAIgEgdQgCgPAAgOIABgLIAAgNQAAgcgKAAQgPAAgMARQgMAQgHAYIgBANIgBANIABALIABAMQgBAGgDAEQgEAEgGAAQgGAAgDgEQgDgEgBgGIAAgMIgBgLIACglIABgmIAAgMIgBgNQAAgFAFgEQAEgEAFAAQAMAAABARIAAAQQAXgeAWAAQAVAAAIATQAGAMAAAZIAAANIAAALQAAALADARQADASAAALQAAAFgEAEQgEAEgFAAQgMAAgBgNg");
	this.shape_24.setTransform(207.3,71.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAuBFIgJgqQgNABgWAGIgiAHQgGARgQAhQgFAHgHAAQgFAAgEgDQgEgEAAgGQAAgGATgqQgCgEAAgEQAAgLANgCQAPgcAXgkQAegyAIgBQAKAAAEAPIAJAtIATBaIAIAVQADAKAAAEQAAAGgEAEQgEADgFAAQgMAAgJgegAgQAJIAvgJIgKgyg");
	this.shape_25.setTransform(189.8,68.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(255,0,0,0.392)").s().p("AgWA3QgCADgDAAQgDAAgCgBQgCgCAAgDIABgGIAAgGIgBgXIAAgWIAAgUIAAgVQAAgEABgEQADgEAFAAQAFAAAAAGIgBADIAAADIAAAQIgBATQAHgEAGgCQAGgDAEAAQAQAAAJAMQAKALAAAQQgBARgKAMQgLALgPAAQgMAAgJgEgAgKgCIgLAGIgBAMIAAAMIABAMIAJAEIALABQAJAAAIgHQAGgIAAgLQAAgLgFgHQgGgHgKAAQgGAAgFAEg");
	this.shape_26.setTransform(355.8,115.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,0,0,0.392)").s().p("AgbAhIAAgyIAAgHIAAgHQAAgIAHAAQAGAAAAAMQAOgNARAAQAGAAADAEQACAFAAAJIAAAFQAAAJgHAAQgGAAAAgHIAAgFIAAgHQgMACgGAFQgGAFgFAKIAAAmQABAIgIAAQgHAAABgIg");
	this.shape_27.setTransform(347.8,117.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(255,0,0,0.392)").s().p("AgYAfQgMgIABgRQgBgSAKgNQAKgOAQAAQALAAAJAEQAJAFgBALQABAHgJAGIgPAHIgbANQAEAHAGACQAGAEAHAAQAFAAAHgCQAJgDADgDQACgEACgBQAEABACACQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAIgOAGQgLAFgLAAQgPAAgKgJgAgPgTQgFAHgEANIAXgKQANgGAFgFQgGgGgLAAQgIAAgHAHg");
	this.shape_28.setTransform(340.1,117.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,0,0,0.392)").s().p("AgMA1QgJgWgLgpIgGgUQgEgPAAgFQAAgDACgCQACgCADAAQAGAAACAGIACANIAHAZQAHAaAHATIAAgBIATg0IAGgSQAEgLAFgFQADgDADAAQADAAACACQACACAAADQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgFAHgCAHIgGAQIgUA0IgIATQgBAEgEAAQgGAAgCgGg");
	this.shape_29.setTransform(331.4,116.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(7,77,180,0.392)").s().p("AgEA0QgCgCAAgDIAAgJIAAgIIgBgpIgQgCQgHAAAAgHQAAgDACgDQACgBADAAIAPABIAAgKIAAgJQAAgEACgCQACgCADABQAGgBABALIAAAHIAAAEIAAAFIAKgBIAKABQAFABAAAFQAAADgCACQgCACgEAAIgDAAIgEAAIgKACIACApIAAAEIAAADQAAAQgIABQgCgBgCgBg");
	this.shape_30.setTransform(197.6,116.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(7,77,180,0.392)").s().p("AgUAgQgLgJAAgQQAAgOAKgQQALgRANAAQAHAAAJADQALAFAAAGQAAADgCACQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAIgEgBIgDgDQgEgDgKAAQgGAAgIANQgGAMAAAIQAAAKAGAFQAGAGAJAAQAEAAAFgDIAJgEIADgBQABAAAAAAQABAAABAAQAAAAABABQAAAAABABQACACAAADQAAAFgMAFQgJAEgHAAQgOAAgKgJg");
	this.shape_31.setTransform(190.2,117.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(7,77,180,0.392)").s().p("AgZAfQgKgIgBgRQAAgSAJgNQALgOAQAAQAMAAAHAEQAJAFAAALQAAAHgIAGIgPAHIgbANQAEAHAGACQAHAEAGAAQAGAAAHgCQAIgDADgDQACgEACgBQAEABABACQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAIgNAGQgLAFgLAAQgPAAgLgJgAgPgTQgFAHgEANIAXgKQAMgGAGgFQgGgGgLAAQgJAAgGAHg");
	this.shape_32.setTransform(182.4,117.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(7,77,180,0.392)").s().p("AgXA1IgBgEQAAgDADgCQACgCADAAQAEAAAFAJIAEAHQADAEADAAQADAAACgFIACgHIgCgsIgDgnQAAgEADgDQACgDADABIAFABQAAABABAAQAAABABAAQAAABAAAAQAAABAAAAIADApIACAtQAAALgGAHQgHAKgJgBQgPAAgLgXgAAFg9QgDgDAAgDQAAgEADgCQACgCAEgBQADABADACQADACAAAEQAAADgDADQgDADgDgBQgEABgCgDg");
	this.shape_33.setTransform(174.4,118.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(7,77,180,0.392)").s().p("AgWA3QgCADgDAAQgDAAgCgBQgCgCAAgDIABgGIAAgGIgBgXIAAgWIAAgUIAAgVQAAgEACgEQACgEAFAAQAFAAAAAGIgBADIAAADIAAAQIgBATQAHgEAGgCQAFgDAFAAQAPAAAKAMQAKALgBAQQAAARgLAMQgKALgPAAQgLAAgKgEgAgLgCIgKAGIgBAMIAAAMIABAMIAJAEIALABQAKAAAGgHQAHgIAAgLQAAgLgGgHQgGgHgJAAQgFAAgHAEg");
	this.shape_34.setTransform(167.9,115.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(7,77,180,0.392)").s().p("AAQAjQgJAEgLABQgJAAgHgFQgHgFgBgIQgDgTAAgPQAAgKACgNQABgGAGAAQAEAAACACQACACAAADIgBALIgBALIAAAUIADAOIAFACIAEABQAJAAALgDIAAgPIAAgNQAAgRABgLQABgGAGAAQADAAADABQACACAAAEIgCAbIAAAPIAAAQIABAFIAAAEQAAAEgCACQgCACgDAAQgGAAgCgHg");
	this.shape_35.setTransform(159.4,117.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(7,77,180,0.392)").s().p("AgdAzQgNgHAAgKQgBgEADgBQACgCADAAQAEAAACAEQAEAFADACQAGAEAMAAQAKAAAKgFQANgGAAgLQAAgJgLgGQgJgEgMgBQgLAAgJgEQgKgGAAgLQAAgNAPgLQAOgKAOAAQAHAAAJADQAMADAAAFQAAAGgHAAIgKgBIgLgCQgLAAgIAGQgIAFAAAIQAAAHALACIAPACQAQABAKAJQAJAIAAAMQAAASgRAKQgOAJgRAAQgNAAgMgFg");
	this.shape_36.setTransform(150.3,116.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]}).wait(1));

	// background
	this.target1 = new lib.Symbol2();
	this.target1.parent = this;
	this.target1.setTransform(165.5,171.9,1,1,0,0,0,64.5,31.4);

	this.target2 = new lib.Symbol1();
	this.target2.parent = this;
	this.target2.setTransform(349,171.9,1,1,0,0,0,64.5,31.4);

	this.instance_1 = new lib.QuizB("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(273.2,192.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.target2},{t:this.target1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(284.2,201.6,533.3,401.3);
// library properties:
lib.properties = {
	id: '1AF5931F1AE6FB45AC9611C1B32248F6',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/wrong_answer.mp3", id:"wrong_answer"},
		{src:"sounds/bgmTest.mp3", id:"bgmTest"},
		{src:"sounds/right_answer.mp3", id:"right_answer"}
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
an.compositions['1AF5931F1AE6FB45AC9611C1B32248F6'] = {
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