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


(lib.tumble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgpA1QgTgPAAgcQAAgfAQgVQAQgXAcAAQAUAAANAGQAPAIAAASQAAANgOAKQgGAEgTAIIguAWQAHALAKAEQAKAGANgBQAIABAMgDQAOgFAEgGQAEgGAFAAQAEAAAEACQADADAAAFQAAANgWALQgTAHgRAAQgbAAgRgNgAgYggQgKAMgFAVIAlgQQAVgLAKgIQgLgKgSAAQgOAAgKAMg");
	this.shape.setTransform(75.1,23.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgNBZIABgtIACgsIABgrIAAgsQAAgNALAAQAMAAAAANIgBAsIAAArIgCA8IgBAdQgBAMgKAAQgMAAAAgMg");
	this.shape_1.setTransform(64.7,20);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgkBcQgEAFgGAAQgEAAgEgDQgDgDAAgFIABgJIAAgKIgBgmIgBgmIABgiIAAgiQAAgHADgGQAEgIAGAAQAKAAgBALIAAAFIgBAFIAAAbIAAAfQAKgHAKgEQAJgDAIAAQAbAAAQAUQAPASAAAbQAAAcgSATQgSAUgZAAQgTAAgPgHgAgSgFIgSALIAAAVIAAAUIAAAUIARAGQAHADAKAAQAQAAAMgNQALgMAAgTQAAgSgKgMQgJgMgRAAQgJAAgKAFg");
	this.shape_2.setTransform(54.1,20.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgGBIQgEgEAAgFQAAgPgDgdQgDgbAAgPQAAgNgDgHQgJAEgJAIIgOAQIgGAIIgCAVIgBAVIABAKIABAKQAAAFgDADQgEADgFAAQgOAAAAgfIABgWIACgVIgBgTIgCgUQAAgbANAAQAFAAAEAEQAEAEAAAFIgBAHIgBAIIABAMQAGgNAMgKQANgLAIAAQATAAAHATQAGgJAKgEQAJgFAMAAQAUAAAIAWQABAFAEAeQADAUAFAxQABAFgEADQgEADgFAAQgKAAgBgKQgDgOgCgYIgEglQgBgIgDgIQgEgLgFAAQgFAAgMAHQgMAHgDAFQgBALABAMIAEAfQACATAAANQAAAFgDAEQgEADgFAAQgEAAgDgDg");
	this.shape_3.setTransform(36.9,23.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAbA6QgPAIgTAAQgQAAgKgHQgMgIgCgPQgFggAAgYQAAgRAEgVQABgLAKAAQAGAAADAEQAEADAAAFIgCASIgCATIABAiQACAOACAJIAIADIAIACQAPgBATgFIAAgZIgBgWQAAgbADgTQABgMAKAAQAGAAADAEQAEAEAAAFIgDAuIAAAZIABAbIAAAIIAAAIQAAAFgDAEQgEADgFAAQgJAAgDgMg");
	this.shape_4.setTransform(20.5,23.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgHBWQgEgDAAgFIABgOIAAgOIgChGIgbgCQgLgCAAgKQAAgGADgDQADgEAFAAIAaACIAAgQIgBgPQAAgGADgDQAEgDAFAAQAKAAACASIAAALIAAAHIAAAHIARgCQANAAAEABQAHADAAAJQAAAFgDAEQgDADgGAAIgGAAIgGAAIgQACIACBHIAAAFIAAAGQABAbgOAAQgDAAgEgDg");
	this.shape_5.setTransform(8,21.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,83.8,38.9);


(lib.Tocaps = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgkA0QgQgRgBgcQgBgbAPgVQARgZAdAAQAZAAAMAXQAKASAAAZQAAAagOATQgQAWgZAAQgUAAgPgPgAgVgYQgIAOAAARQAAARAKAKQAIAIAKAAQAMAAAJgJQALgKAAgSQACgugbAAQgRAAgKARg");
	this.shape.setTransform(25.5,23.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgIBaQgEgEAAgFIABgFIABgGIgBgSIgBgSQAAgRgDgfIgDgxIgLAAQgbAAgPgEQgKgCAAgKQAAgFADgEQAEgEAFAAIAUADIAUABIAWAAIAVgBIAcACIAcABQAFAAAEAEQADADAAAGQAAAFgDAEQgEADgFAAIgcgBIgcgCIgIAAIADA3QADAiAAAUIABANIAAANQAAAIgCAGQgEAIgHAAQgEAAgEgDg");
	this.shape_1.setTransform(11.7,20.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Tocaps, new cjs.Rectangle(0,0,34.3,38.9), null);


(lib.run = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAeA8IgEgbQgCgPAAgMIABgKIAAgMQABgagLAAQgNAAgMAQQgLAOgGAXIgBALIgBAMIABALIAAALQAAAGgCADQgEADgFAAQgFAAgEgDQgDgDAAgGIgBgLIgBgLIACgiIACgjIAAgLIgBgMQAAgFADgDQAEgEAFAAQALAAABAQIAAAPQAVgcAUAAQAUAAAIARQAFALABAXIAAANIAAAKQgBAKADAQQADAQAAAKQAAAGgEADQgDADgGAAQgKAAgBgLg");
	this.shape.setTransform(48.5,23.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAbA6QgPAIgTAAQgQAAgKgHQgMgIgCgPQgFggAAgYQAAgRAEgVQABgLAKAAQAGAAADAEQAEADAAAFIgCASIgCATIABAiQACAOACAJIAIADIAIACQAPgBATgFIAAgZIgBgWQAAgbADgTQABgMAKAAQAGAAADAEQAEAEAAAFIgDAuIAAAZIABAbIAAAIIAAAIQAAAFgDAEQgEADgFAAQgJAAgDgMg");
	this.shape_1.setTransform(35.2,23.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgvA4IAAhVIABgMIAAgMQAAgMALAAQAMAAAAAUQAXgWAcAAQAKAAAEAHQAGAHAAAPIAAAJQgBAPgMAAQgLAAAAgMIAAgIIAAgLQgUADgKAIQgKAIgIAQIABBCQAAAMgNAAQgLAAAAgMg");
	this.shape_2.setTransform(23.1,23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.run, new cjs.Rectangle(14.5,0,42.3,38.9), null);


(lib.is = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AghBEQgTgHAAgMQAAgFAEgDQADgEAFAAQAEAAAGAFQADADAKACIAOACQAJgBAIgCQALgEAAgHQAAgRgXgFIgLgDQgRgEgGgEQgKgHAAgNQAAgaAYgLQAHgDAPgFIAXgHQAFgDAGAAQAFAAAEAEQADADAAAGIACALIABAJQAAAGgDADQgEAEgFAAQgHAAgCgEQgCgDgBgLQgKADgTAGQgSAHAAAMIAHACQAbAFAOAJQATAMAAAYQAAAUgRAKQgOAJgVAAQgQAAgOgGg");
	this.shape.setTransform(14.9,23);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgLBYQgEgDAAgFIAAgWIAAgWIABgdIABgbQAAgGADgDQAEgEAFAAQAEAAAEAEQADADAAAGIgBAbIgBAdIAAAWIAAAWQAAAFgDADQgDAEgFAAQgFAAgDgEgAgHhCQgEgFAAgFQAAgGAEgEQAEgFAFAAQAGAAAEAFQAEAEAAAGQAAAFgEAFQgEAEgGAAQgFAAgEgEg");
	this.shape_1.setTransform(5.9,20.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.is, new cjs.Rectangle(0,0,23.3,38.9), null);


(lib.hard = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgrBTQgRgRAAgbQAAghARgSQARgUAbAAQAPAAAHAFIAMAIQABgzACgSQACgLAKAAQALAAAAAMQAAARgFA5QgBASgBARQABApADAVIABADQAAAEgEAEQgEADgEAAQgIAAgDgLQgJAGgJAEQgKADgJAAQgZAAgRgRgAgcACQgKAMAAAYQAAAQALALQALAMAPAAQAJAAAIgEIANgKIAEgEIgBgVIAAgOIABgOQgFgKgIgEQgIgFgLAAQgTAAgKALg");
	this.shape.setTransform(48.7,20.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgvA4IAAhVIABgMIAAgMQAAgMALAAQAMAAAAAUQAXgWAcAAQAKAAAEAHQAGAHAAAPIAAAJQgBAPgMAAQgLAAAAgMIAAgIIAAgLQgUADgKAIQgKAIgIAQIAABCQABAMgNAAQgLAAAAgMg");
	this.shape_1.setTransform(35.8,23.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAnA+IgIgIIgVAJQgJADgFAAQgcAAgNgQQgNgPAAgfQAAgdAVgVQAUgVAbAAQALAAANAGQARAHAAAJQAAAEgDACIgCAPIAAAbQgBAPADAJIAHAVIADAHIABACQAAAEgEAEQgDADgEAAQgDAAgGgGgAgUgeQgNAQAAATQAAAUAHAKQAHAKAOAAQALAAAIgEIAMgKQgEgfAAgQIABgLIACgOIgIgDIgFgBQgSAAgOAPg");
	this.shape_2.setTransform(23,23.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAiBdQgDgLgDgSQgCgSAAgLIAAgKIAAgKQAAgWgLABQgPAAgLAMQgHAIgKAUQAAAugFAJQgDAHgHAAQgFAAgEgCQgEgEAAgFIACgGQAAgCAAgPIABgTIAAhYIABgUIgBgMIgBgMQAAgFADgDQAEgDAFgBQAKAAACALQACAMAAAKIgBAbQgBANABANIAAALQAJgOAMgGQAKgHANAAQAVAAAHANQAGAJAAAWIABAXIADAZQABAOACALIABAEQAAAFgEADQgDAEgGAAQgIgBgCgIg");
	this.shape_3.setTransform(9.5,20.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hard, new cjs.Rectangle(0,0,58.1,38.9), null);


(lib.fun = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAeA8IgEgbQgBgPAAgMIAAgKIABgMQAAgagKAAQgOAAgLAQQgLAOgHAXIgBALIgBAMIABALIABALQAAAGgDADQgEADgFAAQgGAAgDgDQgDgDgBgGIAAgLIgBgLIACgiIABgjIAAgLIAAgMQAAgFAEgDQADgEAFAAQALAAABAQIAAAPQAVgcAVAAQATAAAIARQAFALAAAXIAAANIAAAKQAAAKADAQQADAQAAAKQAAAGgDADQgEADgFAAQgLAAgBgLg");
	this.shape.setTransform(34.7,23.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAbA6QgPAIgTAAQgQAAgKgHQgMgIgCgPQgFggAAgYQAAgRAEgVQABgLAKAAQAGAAADAEQAEADAAAFIgCASIgCATIABAiQACAOACAJIAIADIAIACQAPgBATgFIAAgZIgBgWQAAgbADgTQABgMAKAAQAGAAADAEQAEAEAAAFIgDAuIAAAZIABAbIAAAIIAAAIQAAAFgDAEQgEADgFAAQgJAAgDgMg");
	this.shape_1.setTransform(21.4,23.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgTBoQgDgDgBgFIAAgDQADgPAAgTIAAghIAAgjIgUABQgMAAAAgLQAAgMAVgBIAMAAIACgTQADgbAKgNQANgPAbAAQARAAAAALQAAAMgQAAQgeAAgDApIgBAIIAbgCQAUAAAAAMQAAAJgKACIgKABQgFgBgWACIgBAbIAAAXIABAWQgBAYgCANQgBAJgKAAQgFAAgDgDg");
	this.shape_2.setTransform(8.3,20.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43,38.9);


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


(lib.verbArrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgtBLQgEgEAAgEIAAgdIACgmIACgpIABgbQABgFADgBQANgEARAAQAQAAAQAMQASANAAAUQAAAZgTAOQAOAGAHAHQAIAIAAAJQAAAMgNALQgJAIgKAEQgVAIgiAAQgEAAgEgEgAgdAnIAAAUQAZAAAPgHQAHgDAHgFQAFgFAAgDQAAgEgMgGQgJgEgJgDIgKgBIgDAAIgEAAIgMgBIAAAWgAgZg6IAAASIgCAmIAPABQANgCAKgHQAKgJAAgOQAAgJgLgIQgKgIgKAAIgPAAg");
	this.shape.setTransform(61.9,16.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgxBKQgDgDAAgEIgBgXIAAgXIACgaIACgbIgBgPIgBgOQAAgGADgEQAEgFAGAAIAYACQANACAIAFQAoAVAAAeQAAAPgOAKQgLAJgQAFQAfAQAPATQACADAAADQAAAEgDADQgDADgEAAQgDAAgEgDQgggggngLIABATIABAUQAAAEgDADQgDADgEAAQgEAAgDgDgAgegrIAAAMIgBATIgCATIAEAAIAEAAQAZAAAMgHQAFgCAFgFQAFgFAAgEQAAgOgPgLQgNgLgQgCIgOgBg");
	this.shape_1.setTransform(49.1,16.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgqBLQgKgIAAggIABgOIAAgPIgBgGQAAgBADgEIACgpIgBgKIgBgLQAAgMAKAAQADAAADADIAXgEIASgCQAYAAAOAFQAGADAAAHQAAADgCADQgDAEgEAAIgDAAQgQgFgQAAIgRABIgUAFIABAKIgBAmIApgFIAXgCQAEAAAEADQACACAAAFQABAIgKACIgXACIgsADIAAAOIgBALQAAAVAEAFQACACANAAIARAAIASgBIAGAAIAGAAQAKgBAAALQAAAIgJABQgJACgdAAQgeAAgJgIg");
	this.shape_2.setTransform(36.6,16.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgRBHQgMgegOg3IgIgaQgGgVAAgGQAAgEAEgDQACgCAEgBQAIABACAHIAEARIAJAiQAJAjAJAbIABgDIAZhFIAIgYQAGgOAGgIQADgEAFAAQAEAAADADQADADAAAEQAAADgCADQgGAJgEAKIgHAVIgbBGQgEANgHAMQgCAGgFAAQgIAAgDgIg");
	this.shape_3.setTransform(24.2,17);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF0000").ss(2,1,1).p("AgZgjIgDBHIA5AA");
	this.shape_4.setTransform(2.9,16.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF0000").ss(2,1,1).p("AhNAqQBWh8BFA8");
	this.shape_5.setTransform(7.8,15.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.verbArrow, new cjs.Rectangle(-1,0,70.9,31.9), null);


(lib.Bk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("EAsHgXiMAAAAvFMhYNAAAMAAAgvFg");
	this.shape.setTransform(253.7,150.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFDDFF","#FDB91C"],[0,1],0.1,-152.1,0,152.3).s().p("EgsGAXjMAAAgvFMBYNAAAMAAAAvFg");
	this.shape_1.setTransform(253.7,150.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Bk, new cjs.Rectangle(-29.6,-1,566.6,303.5), null);


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


(lib.ButtonBackground = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(0.1,1,1).p("AEtC6IpZAAIAAlzIJZAAg");
	this.shape.setTransform(31.2,19);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AksC6IAAlzIJZAAIAAFzg");
	this.shape_1.setTransform(31.2,19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,-0.6,62.2,39.2);


(lib.staticbuffyfArm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6B4E32").ss(0.5,1,1).p("AgdhjQgEAPAAARAh7BSQgBADgBADQAGAHAGAFAB+A3QAAgBAAAA");
	this.shape.setTransform(14.3,30.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#6B4E32").ss(0.5,1,1).p("AgEAPQAEgPAFgO");
	this.shape_1.setTransform(99.8,33.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.5,1,1).p("AhjB9QADgDACgCQAXgbAPgnQABgFABgFQADgQAEgOQAKgeARgWQAIgKAJgJQAcgeAogWQAMgHANgGQBKgiAUhJQABgEABgEQACgIADgHAFrggQgKAegLAcQgRArgVAoQgTAjglAdQgjAagoAUQgpAUgsAPAlKAoQAoAKAlANQAUADAUAEQAsAJAhARQADACACABQASAKAOAQQALAKAIANQABABAAABQAPAWAEAWAlKAoQgGgCgGgCAlpgTQANAfASAcAlpgTQAAAAAAgBAlqgVQABABAAAB");
	this.shape_2.setTransform(63.1,38.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(0.5,1,1).p("AEBj7QABgCARgtQARguBBgZQADgBADgBQAHgCAHgCQAugKAxAPQAwAPAYAtQAWApgCAwQgBAxgPAuQgPAugtAOQgjAKgYAZAnDitQABgDACgEQARguAxACQAsACgGA4QAQgFATACQA1AFgeA4QgSAhAJA3AolhQQAAgDAAgDQgBglAVgcQAVgdAdABQAMAAANAFAolhQQABAIACAIQACAMAKAGACbD/QgcAWgdATQgaARgcAXQgJAHgIAHQgcAZgnAEQguAFghgaQglgdgdghQgdgigqgYQgpgYgegiQgbgfgjgWQgEgEgFgCQgTgKgSgCQgXgBgVgHQgWgIgUgNQgogaAOgoQgEgGgDgIQgVgqAagm");
	this.shape_3.setTransform(56.4,38);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BE9670").s().p("Ah3FmQglgdgdghQgdgigqgYQgpgYgegiQgbgfgjgWIgJgGQgTgKgSgCQgXgBgVgHQgWgIgUgNQgogaAOgoIgHgOQgVgqAagmIADAQQACAMAKAGQgKgGgCgMIgDgQIAAgGQgBglAVgcQAVgdAdABQAMAAANAFIADABIADgHQARguAxACQAsACgGA4QAQgFATACQA1AFgeA4QgSAhAJA3IAAABIABACQAMAfASAbIgMgDIAMADQApALAlANIAoAGQAsAJAhASIAEACQASALAPAPIAEgFQAXgaAOgoIACgKQADgPAFgPQAJgdARgXIARgSQAegeAogXIAYgMQBKgiAVhKIACgIIAEgPIASgvQARguBBgZIAGgCIAOgEQAugKAxAPQAwAPAYAtQAWApgCAwQgBAxgPAuQgPAugtAOQgjAKgYAZIAJgeIgJAeQgKAegLAcQgRArgVAoQgSAjglAdQgjAagpAUQgpAUgrAPQgcAWgdATQgbARgbAXIgRAOQgcAZgnAEIgQABQgkAAgbgWgAgOCVIACACQANAWAFAWQgFgWgNgWIgCgCQgIgMgKgLQAKALAIAMgAojAOQAGAHAHAEQgHgEgGgHIADgGIgDAGIAAAAgAnGiNIAAgDQAAgPADgOQgDAOAAAPIAAADg");
	this.shape_4.setTransform(56.4,38);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.staticbuffyfArm, new cjs.Rectangle(-1,-1,114.9,78), null);


(lib.staticbuffybArm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AiNhwQgOAbgOAaQglBZA8ApQBDAwBlgHQBogIArhQQAYgsgPg8");
	this.shape.setTransform(19.2,42.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AIaCGQAWgFAQgOQAOgMAAgSQABgXgJgUQgBgCgBgDQgFgJgIgJQgIgLgKgGQgcgRghARQAAAAgBABQAAgBAAAAQgdghAcgUQACgBABAAQAUgMAUAMQAjAWARAgQACAEACAEQAJAUgOAHApOA9QAIgNAHgMQAYgqAigjQAhgjAjggQAkghAogbQAogbAlgfQAkgdA1AFQAeACAdABQASABARABQAxADAwAIQAIABAIACQAjAGAjALQApAMAqAOQARAGAQAFQAdAJAcAIQAQAEAPAEQAgAJAbAKQArAQArATQApARAaAeAhzgxQAdABAcABQAdAAAdAAQARAAARgBQAwAAAvAHQAdAEAcAHQATAFATAGQAaAHAWAOQACABABABQABABABABQAPAKAMAOQAFAGAEAGQAFAHADAIAEVAGQAFASgDASQgDAagSAYQgfAsAtAZQAaAPAUARQANAMAVgSQADgDADgDQAeggAMgjQgBAIACALQAAAAAAAAQAqAAAVAZQAUAXgDAVQANAHARACQAYADAFgQQALgigNgeAHnADQAAAAAAAAQgBAAgBABQgWAOgGAYQgEAOACASQgEAAgFABQgiAFgJAVQgBAFgCAHQAAAAAAABQAAgHADgGQAFgfgcALQgmAPgGAnAHIBSQAAgEgBgEQAsgCAcApQAHAKAEALAFgC7QAAAnAdAQQAtAYAlgiQAQgPACgPAhzgxQgQgBgRgCAkmCCQALgTANgSQAOgRAQgQQAKgJAKgJQAYgXAZgWQAMgLALgKQARgNAQgM");
	this.shape_1.setTransform(64.1,25.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BE9670").s().p("Ao+DkQg8gqAmhZIAcg1IAOgaQAYgpAigkQAhgiAkggQAjghAogbQAogcAmgeQAjgdA1AEIA8AEIAjACQAxACAvAIIAQADQAjAHAjAKQApAMArAPIAhALIA5AQIAeAJQAgAJAcAKQArAQArASQAoASAaAeQgOAJAAAOQAAANAPASQgPgSAAgNQAAgOAOgJIADgCQAUgMAUANQAjAVARAiIAEAIQAJATgOAHQgFgKgHgIQgJgKgKgGQgcgTggATQAggTAcATQAKAGAJAKQAHAIAFAKIACAFQAJATAAAXQgBASgNAMQgRAPgVAFQAMAegKAhQgFARgYgDQgSgDgNgHIABgFQAAgTgSgUQgVgYgpgBIgBAAIgCgNIABgGQgMAkgeAgIgGAFQgVASgNgLQgTgRgbgPQgtgaAggrQARgYADgaQADgSgFgSQAPALAMAMIAKANQAEAHAEAIQgEgIgEgHIgKgNQgMgMgPgLIgCgBIgDgCQgVgPgbgIIglgKQgdgHgcgFQgvgHgxABIgiAAIg5AAIg5gCIghgCIAhACIghAaIgYAVIgxAtIgTASQgRAPgNARQAPA9gZAtQgqBQhpAIIgZABQhVAAg7gqgAGSBAQgmAOgGAnQAGgnAmgOIAAgBQAHgCAFAAIAAAAIAAAAQANAAgDAVIAAACQgDAFAAAHIAAgBIADgLQAJgWAigEIAJgBIACAIIgCgIIABAAIADAAIAAAAIABAAQAoAAAaAlIABACQAHAKAFALQgFgLgHgKIgBgCQgaglgoAAIgBAAIAAAAIgDAAIgBAAIAAgNQAAgKACgJQAGgZAWgMIACgCIABAAIABAAIgCAAIAAAAIgCACQgWAMgGAZQgCAJAAAKIAAANIgJABQgiAEgJAWIAAgCQADgVgNAAIAAAAIAAAAQgFAAgHACIAAABgAkRBxQALgUAOgSQgOASgLAUgAGTDhQgegRAAgnIAGgFQAeggAMgkIgBAGIACANIABAAQApABAVAYQASAUAAATIgBAFQgCAQgPAOQgXAUgYAAQgRAAgSgJgAGoBUIAAAAgAH8gOg");
	this.shape_2.setTransform(61.9,26.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.staticbuffybArm, new cjs.Rectangle(-0.2,-1,124.3,55.9), null);


(lib.Sam = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("ACIiOQABgKAEgFQACgDABgCQADgGABgGQACgHADgHQADgGAAgHQgBgJAAgJQABgUgEgSAhrB3QAAgBAAAAQACgCADgBIABAAQgCgHAAgHQABgIAHgHQARgDALAQQAJAOANAKQAMALARAFAhrB3QABACACABQAJANAQAIAgoDtQgGAFgHAFQgQAMgJgBQgKAAgKgIQgaABgLgBQgKAAAAgQIAEgEQgHAAgDgCQgCAAgBgBQgCgBgCgBQgDgCgCgKQgBgJAKgGQABgBACAAQgCAAgBAAQgKAAgGgIQgBgOAMgIQgHACgFgKQgFgFADgGQAIgMAGABQgKgKAEgQQACgKAJgDQACAAABAAQALAAALAEQAJABAGAHQADAEAEAFAChAwQgJASgCATQgDATADASQADAUAKASQAJARACAUQADAWgNASQgGAJgIAEQgTAKgUgM");
	this.shape.setTransform(17.5,66.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AAblXQgTALgSAJQgTAJgTAKQgEACgIABQAdgXAcgYQAJgKAJgGQADgEAGgEQglgDgoACQgLAAgKgCQgGAAgEgDQAogWAugIQAUgDAVgDQANgDAQABQgRgkgfgcQAvASAoAeQAYgfAPgjQAPAfANAkQAEAIABgBQAIgSAWgGQAUgFAUgEQASgEASAFQgRAGgWAPQgKAGgGAIQATADAYACQAfADAcAMQALAEAJAJQgcgEgigDQgRgBgGAIQAoAZAiAdQANAMALANQgWgGgegMQgMgFgLgGQAOAVAXAaQANAQAKAQQgTgMgZgNQgTgLgRgLQAJAUABAXQAAAVAEAVQgJgFgHgNQgDgFgEgFQgEgHgEgFQgIgJgOgFQgFgEgGgEQgUgLgQADQgGADgFADQgKALgEAQQgCAJgCABAD+irQgBABAAACQAAAGAAAGQAIAMAPAOQAPANANARQANAQAKASQALASAKASQAKARADATQACATAHATQAHAUAEAVQAFAUACAUQACAVgCAVQgCAVgFAUQgFAUACAVQACAUAAAWQAAAEgBAEQADAUABATQABAWgMARQgLAQgNAQQgMAPgPAMQgQANgOANQgPAPgQAOQgQANgWgIQgOABgPAAQgVgBgTgHQgUgHgRgLQgHgFgHgGQgVgCgUAAQgWABgRgNQgRgNgOgNQgQgNgNgRQgMgQgMgRQgMgRgKgRQgKgTgJgSQgIgTgKgRQgKgSgHgTQgBgBAAAAQgEgLABgNQADAAADgBQAUgFAUgFQAUgGAQgJQARgKASgFQAFgBAGgCQgCAdAAARQAAATAEATQADATACAVQACAUAFAUQADATAKAQQAMASAMARQAMARAMAQQAMAQAOAQQAHAJAIAIAF7ErQgBARgGAQQgBAAAAABQgCADgDADQgGAGgJAEQgRAIgSAKQgRAKgTAHQgTAGgRACQgWgBgUgGQgUgGgTgJQgSgKgQgLQgRgMgNgQQgNgRgKgTQgKgSgGgUQgGgTgIgUQgHgSgDgTQgDgUgCgQQAKgEAIgGQARgLAMgPQABAAAAgBQABgCABgBQAKgRAPABQAVAAAUACQAVACAQgMAC8kjQgIgIgHgMQgHgNgKgGQgDAIgGAHQgHAJgEAGQgGgPgFgTQgDgKgCgJQgIAHgJAFQgQAJgRAFQgBgNgBgOQgBgKgDgJQgGACgFADQgJAGgHAIQgFAEgEAFQgBABAAABQgJAPgHATQgHAUgOATQgPAGgTAGQgMADAFAKQAGAQAXAAQgCAVAGATQAGAUAKARQAAABABAAQASAGAUgKQASgKANgRQAMgQAFgUADrkTQAKAIAGALQAFAJgBAMQgDAVgTALQgRAKgVgFQgWgHgKgOAAXj7QgFgUAPgRQAJgLAMgBAAlliQgGAFgEAGAk5ADQACgOABgQQACgUAFgTQAEgVAHgUQAHgTAKgRQALgSAKgRQAMgTALgNQAHgJAKgGQAUgGATgBQAUgBAUgBQAJARAPAOQAQANAPAOQAPAOAQAOQAOAMALAQQALARAKARQAIAUAHAWQgKADgHAFQgQAMgKARQgJAPgKAXQgQgIgTgHQgUgHgTABQgVABgRAKQgBAAgBABQgQAKgLARQgLARgNALQgTAJgSgPQgOgMgIgSQgIgTgQgMQgIgGgHgBgABjhzQACAAACgBQgEAHgFAHQAAACgBABABdhjQgFAHgEAGQgGAKgFAKQgCAEgEADQgPAJgVACQgKAAgJAEAgBiXQAIAPATAKQATAKAWACQATACANgDAEJj5QAGATgJAVQgHASgBAUAC9j2QAOgCAJAFAjGDDQgCAMgBAMQgBAVABAVQAAAUAFATQAHAUAKARQAKAQgBAVQgBAVgOAPQgCACgBABQgOAMgTgIQgQgHgVgFQgQgDgSgCQgDAAgEAAQgVgCgVAEAlGDiQAIAAAJgDQATgHAPgPQANgOAKgQQAQAKATAIQAJAEAKACQALABALgBQARgDARgEAlGDiQgLgBgLgFQgQgHgBgRQgPgPALgQQgPgMgDgLQgFgYASgJQAMgHgEgSQgDgLAHgFQAPgJANgHQgKgXANgRQAIgLAKACAl7E0QARAHAVAAQARgBAHgKQACgEACgEQAEgOgDgMQgGgUgGgRQgCgEAAgDAAAA5QAUAAASgJQAMgGAHgJAgOCQQANgDANgCQAKgBAJgDADeHwQAGgBAGgBQAFgBAEgB");
	this.shape_1.setTransform(47.5,49.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AAnCzIAMgBIAJgDIgJADIgMABQgOABgPAAQgUgBgTgHQgUgGgRgMIgOgLQgIgHgHgJIgaghIgYghIgYgiQgKgRgEgSQgFgUgCgUIgFgoQgDgTgBgTQAAgRACgcIAbgFQAKgCAJgDIAFAkQADATAHATIAOAnQAGATAKASQAKATANAQQANAQARAMQAQALASAKQATAKATAFQAUAGAWABQARgBATgHQATgHARgKQASgKARgIQAJgEAGgGIAFgGIABgBQAGgPABgRQADATABAUQABAWgMAQIgYAhQgMAPgPALQgQANgOAOQgPAPgQANQgKAIgMAAQgIAAgIgDg");
	this.shape_2.setTransform(65.8,81.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F1D38D").s().p("ABoGfQgVABgRgNQgRgMgQgOQgQgNgNgRIgXggQgMgRgKgSQgKgSgJgTQgIgSgKgSQgKgSgHgTQgJASgDAUQgCASADASQADAUAKASQAJARACAUQACAWgMATQgGAIgJAFQgSAKgUgNIADgDQAOgOACgWIAAgDQAAgTgKgPQgKgRgGgTQgGgTAAgVIAAgOIAAgcIADgYIgDAYIAAAcIAAAOQAAAVAGATQAGATAKARQAKAPAAATIAAADQgCAWgOAOIgDADQgOAMgTgIQgQgHgVgEQgQgEgSgBIgHgBQgVgCgVAEIgMALQgQALgKAAQgJgBgKgHIglgBQgLAAABgQIADgEQgGAAgEgBIgCgBIgFgDQgDgCgBgKQgBgJAKgGIACgBIgCAAQgKAAgGgIQgCgOANgIQgHACgFgJQgFgGADgGQAIgLAGABQgLgKAEgRQADgKAJgCIADgBQAKAAAMAEQAJACAGAGIAHAJIACAEQAKAMAQAIQgQgIgKgMIgCgEIAAgBQACgCADgBIAAAAQgBgHAAgHQAAgIAIgGQARgEALARQAJANANALQAMAKARAFQgHALgSAAQgVAAgRgHQARAHAVAAQASAAAHgLIADgIQAEgNgDgNQgFgUgHgQIgCgIIABAAIAAAAIAAAAQAIAAAIgDIAAAAQAUgHAOgPQANgOAKgQQAQALATAIQAJADAKACQALABALgBIAigGIgiAGQgLABgLgBQgKgCgJgDQgTgIgQgLQgKAQgNAOQgOAPgUAHIAAAAQgIADgIAAIAAAAIAAAAIgBAAQgLAAgLgGQgPgHgCgRQgPgPALgQQgPgMgCgLQgGgYASgJQAMgHgEgSQgDgLAHgEIAdgRQgLgWANgRQAIgKAKABQAHABAIAGQAQANAIASQAIASAOAMIABAAIABABIABABIABAAQAJAHAJAAIABAAIAAAAQAGAAAHgDIABgBQANgLALgRQALgPARgLIABgBQARgKAVgBIABAAIAAAAIABAAIABAAIABAAQAQAAAQAFIABABIABAAIAAAAIABAAQATAHAQAIQAJgWAJgRQAKgRARgLQAHgGAKgDQAJgDALgBQAVgBAOgKQAEgDACgEIAMgUIAIgNIACgCIgCADQgEAHgEAFQAEgFAEgHIACgDIAIgOIgEABQAFgPABgSICVgYIAAADIgBAMQAIAMAPAOQAPAOANAQQANARALASIAUAjQALARACAUQADATAGASQAHAVAFAVQAEATACAUQACAVgCAVQgCAVgFAUQgFAUACAVQADAVgBAVIAAAIQgCARgGAQIgBABIgFAGQgGAGgIAEQgSAIgRAKQgSAKgTAHQgTAHgRABQgWgBgUgGQgUgFgTgKQgRgKgRgLQgRgMgNgQQgNgRgKgTQgJgSgHgTIgNgnQgIgTgDgTIgFgkQAKgEAJgGQAQgKAMgPIABgCIACgDIAAgBIABgBIAAAAIABgBQAJgMAMgBIABAAIAAAAIAAAAIABAAIApACIAFABIABAAIAAAAQASAAANgLQgNALgSAAIAAAAIgBAAIgFgBIgpgCIgBAAIAAAAIAAAAIgBAAQgMABgJAMIgBABIAAAAIgBABIAAABIgCADIgBACQgMAPgQAKQgJAGgKAEQgJADgKACIgbAFIgKACQgSAGgRAJQgPAKgVAFIgoAKIgGACIAAACQAAALAEAKIAAABIAAgBQgEgKAAgLIAAgCIAGgCIAogKQAVgFAPgKQARgJASgGIAKgCQgCAcABARQAAATADATIAFAoQACAUAFAUQAEATALARIAXAiIAYAhIAaAhQAHAJAJAHQgVgCgVAAgABSAFQgTAJgUABQAUgBATgJQALgFAHgJQgHAJgLAFgAi7AmQgJAAgJgHIgBAAIgBgBIgBgBIgBAAQgOgMgIgSQgIgSgQgNQgIgGgHgBIAEgeQACgUAEgTQAEgWAHgTQAHgTALgSIAVgjQALgTALgNQAHgJALgGQATgGAUgBIAngCQAJARAPAOIAfAbIAfAcQANAMALARQAMAQAJASQAJATAHAWQgKADgHAGQgRALgKARQgJARgJAWQgQgIgTgHIgBAAIAAAAIgBAAIgBgBQgQgFgQAAIgBAAIgBAAIgBAAIAAAAIgBAAQgVABgRAKIgBABQAAgKAFgFIADgFIAEgMIAFgOQACgFAAgGIAAgCIAAgLIAAgGIAAgJQAAgQgDgOQADAOAAAQIAAAJIAAAGIAAALIAAACQAAAGgCAFIgFAOIgEAMIgDAFQgFAFAAAKQgRALgLAPQgLARgNALIgBABQgHADgGAAIAAAAIgBAAgAh4gUIAAAAgAA3hXIAAAAgABuicQgWgDgSgKQgTgJgKgPIABAAIAAAAQAGACAGAAIABAAIAAAAQAMAAAMgHIAAAAIABAAQASgKANgQQAMgQAFgVQgFAVgMAQQgNAQgSAKIgBAAIAAAAQgMAHgMAAIAAAAIgBAAQgGAAgGgCIAAAAIgBAAIgBgCQgKgRgGgTQgGgUACgUQgWgBgGgPQgFgLAMgDQASgFAPgHQAPgTAHgUQAHgTAJgOIAKgMQAHgIAJgGQAFgDAGgCQADAJABAKIACAcQARgGAQgJQAJgEAIgIIAFAUQAFASAGAPIALgOQAGgIADgIQAKAHAHAMQAHAMAIAIIgKAHQgLAKgEAQQgCAJgCABQACgBACgJQAEgQALgKIAKgHQAQgDAUAMIALAHQAKAJAGAKQAEAIAAAIIAAAGQgDAVgTALIgBAAQgKAGgMAAIAAAAIgBAAQgGAAgIgCQgVgGgLgPQALAPAVAGQAIACAGAAIABAAIAAAAQAMAAAKgGIABAAQATgLADgVIAAgGQAAgIgEgIQgGgKgKgJQAOAFAIAJIAJAMQAFAUgJAUQgHASgBAUIiVAYQgBASgFAPQgHABgLAAIgOAAgAEAkeIgBAAQgGgDgIAAIAAAAIAAAAIgEAAIAAAAIgCAAIgDABIADgBIACAAIAAAAIAEAAIAAAAIAAAAQAIAAAGADIABAAgABCkmIgBgJQAAgPALgNQAJgLAMgBQgMABgJALQgLANAAAPIABAJgAApjBIAAAAg");
	this.shape_3.setTransform(43.2,54.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ACCB5IgHgLIgIgMQgIgJgOgFIgLgHQgUgMgQADQgIgIgHgMQgHgMgKgHQgDAIgGAIIgKAOQgGgPgFgSIgFgUQgIAIgJAEQgQAJgRAGIgCgcQgBgJgDgJQgGACgFADQgJAGgHAHQgFAEgEAGIgBACIgmATIgmAUQgDABgJABQAdgXAcgYIATgPIAJgIQgmgCgoABQgLAAgKgBQgGgBgEgDQAogVAvgJIApgGQANgCAQAAQgRgkgfgbQAvARAoAfQAYggAOgiQAPAeANAkQAEAJABgBQAIgSAWgGIAogKQASgDASAEQgRAGgWAPQgKAGgGAIQATAEAYACQAfACAcAMQALAEAJAKQgcgFgigCQgRgCgGAJQApAYAhAcQAOAMAKAOQgWgHgegLQgMgFgLgGQAOAUAXAaQANAQAKAQIgsgZQgTgKgRgMQAJAUABAXQAAAWAEAUQgJgEgHgNg");
	this.shape_4.setTransform(61.7,13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,88.4,101.7);


(lib.INFINITIVE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AB4CYIAAkvIG/AAIAAEvg");
	mask.setTransform(56.7,-1.1);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6699").s().p("AgqBHQgKgJgBgeIACgkIACglIgBgKIgBgJQABgPANAAQAEAAADACIAVgDIARgCQAXAAAOAFQAJADAAAKQAAAEgDAEQgFAEgFAAIgEAAQgPgEgOgBIgOACIgRADIgBAkIAjgDIAXgCQAFAAAEAEQAEAEAAAFQAAAKgMABIgWACIgmAEIgBATQgBASADACQABACAKAAIARgBIARAAIAGAAIAFgBQAFAAAFAEQADADABAGQgBALgKACQgJABgcAAQgfAAgJgIg");
	this.shape.setTransform(54.4,-1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6699").s().p("AgTBCQgMgbgOgyIgHgZQgGgSABgHQgBgEAFgFQADgDAGAAQAJAAADAJIAEARIAJAdQAHAaAHAUIAVg3IAIgWQAFgNAHgHQAEgFAFAAQAFAAAEAEQAEADABAGQAAADgDAEQgFAHgEAKIgHATIgZA/QgEAMgGALQgEAHgHAAQgKAAgDgJg");
	this.shape_1.setTransform(41.9,-0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6699").s().p("AgrBDQgEgDAAgFQAAgGAEgDQAEgFAGAAIASgBIgBgqQAAgYACgXIgUABQgFAAgEgEQgEgDAAgGQAAgFAEgDQADgEAFgBIAbAAQARAAAcAEQALABAAALQAAAGgEAEQgEADgEAAIgZgDQgBARAAAbIAAArIAZgBQAGAAAEADQADAFAAAEQAAAGgDADQgEAEgGAAIgQABIgQAAIgSACIgTABQgFAAgEgEg");
	this.shape_2.setTransform(30.1,-0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6699").s().p("AgIBEQgFgEAAgFIABgEIAAgEIAAgNIgBgNIgCghIgCgiIgFAAQgVAAgMgDQgKgCAAgKQAAgEADgEQAEgFAGABIAPABIAPABIARAAIAQAAIAVABIAVABQAGAAADADQAEAEAAAFQAAAGgEADQgDAEgGAAIgXgBIgWgBIACAmIACAlIABAJIABAJQAAAHgDAGQgEAHgHAAQgEAAgEgDg");
	this.shape_3.setTransform(18.5,-1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF6699").s().p("AgrBDQgEgDAAgFQAAgGAEgDQAEgFAGAAIASgBIAAgqQAAgYABgXIgTABQgGAAgEgEQgEgDAAgGQAAgFAEgDQADgEAFgBIAcAAQAQAAAcAEQALABAAALQAAAGgEAEQgEADgEAAIgYgDQgCARAAAbIAAArIAZgBQAGAAAEADQADAFAAAEQAAAGgDADQgEAEgGAAIgQABIgQAAIgSACIgSABQgGAAgEgEg");
	this.shape_4.setTransform(6.5,-0.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF6699").s().p("AhBBHQgDgDAAgGIABgLIAAgLIAAgQIABgRIgBgRIAAgRIAAgRIgCgQQAAgGAFgEQAFgFAGAAQAGAAAJAMQApA8ApAlIAAgOIgBg9IgBgKIgBgKQAAgNAOAAQAPAAAAAvIgBAPIAAA5IgCAPQgBAMgMAAQgHAAgHgHQgkgggsg6IgBAdIABAWIAAAWQAAAcgOAAQgGAAgFgFg");
	this.shape_5.setTransform(-6.3,-0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF6699").s().p("AgrBDQgEgDAAgFQAAgGAEgDQAEgFAGAAIASgBIAAgqQAAgYACgXIgUABQgGAAgEgEQgEgDAAgGQAAgFAEgDQADgEAFgBIAcAAQAQAAAcAEQALABAAALQAAAGgFAEQgDADgFAAIgXgDQgCARAAAbIAAArIAZgBQAFAAAEADQAEAFAAAEQAAAGgEADQgEAEgFAAIgQABIgQAAIgSACIgSABQgGAAgEgEg");
	this.shape_6.setTransform(-19.3,-0.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF6699").s().p("AgvBLQgDgEAAgGIAAhpIAAgLIAAgLQAAgGAEgDQADgDAGgBIAGABIAUgCIAPgBQALAAAQAEQAUAGAAAHQAAAGgEADQgDAEgGAAIgFgBQgLgEgSABIgMAAIgQACIAAAfQAOgDAJgBQAQABANABQAMACAAALQAAAFgEADQgDADgGAAIgOgBIgOAAQgHAAgQAEIAAA6QAAAGgEADQgFAEgFAAQgFAAgEgDg");
	this.shape_7.setTransform(-30,-0.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF6699").s().p("AhABHQgEgDAAgGIAAgLIABgLIAAgQIABgRIgBgRIAAgRIgBgRIgBgQQAAgGAFgEQAFgFAGAAQAGAAAJAMQApA8ApAlIABgOIgBg9IgCgKIAAgKQAAgNANAAQAPAAAAAvIAAAPIgBA5IgCAPQgCAMgLAAQgGAAgJgHQgjgggsg6IgBAdIAAAWIABAWQAAAcgNAAQgIAAgDgFg");
	this.shape_8.setTransform(-43.7,-0.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF6699").s().p("AgrBDQgEgDAAgFQAAgGAEgDQAEgFAGAAIASgBIgBgqQAAgYACgXIgUABQgFAAgEgEQgEgDAAgGQAAgFAEgDQADgEAFgBIAbAAQARAAAcAEQALABAAALQAAAGgEAEQgEADgEAAIgZgDQgBARAAAbIAAArIAZgBQAGAAAEADQADAFAAAEQAAAGgDADQgEAEgGAAIgQABIgQAAIgSACIgTABQgFAAgEgEg");
	this.shape_9.setTransform(-56.7,-0.7);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(9));

	// Layer 3
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0066").s().p("AgqBHQgKgJgBgeIACgkIACglIgBgKIgBgJQABgPANAAQAEAAADACIAVgDIARgCQAXAAAOAFQAJADAAAKQAAAEgDAEQgFAEgFAAIgEAAQgPgEgOgBIgOACIgRADIgBAkIAjgDIAXgCQAFAAAEAEQAEAEAAAFQAAAKgMABIgWACIgmAEIgBATQgBASADACQABACAKAAIARgBIARAAIAGAAIAFgBQAFAAAFAEQADADABAGQgBALgKACQgJABgcAAQgfAAgJgIg");
	this.shape_10.setTransform(54.4,-1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0066").s().p("AgTBCQgMgbgOgyIgHgZQgGgSABgHQgBgEAFgFQADgDAGAAQAJAAADAJIAEARIAJAdQAHAaAHAUIAVg3IAIgWQAFgNAHgHQAEgFAFAAQAFAAAEAEQAEADABAGQAAADgDAEQgFAHgEAKIgHATIgZA/QgEAMgGALQgEAHgHAAQgKAAgDgJg");
	this.shape_11.setTransform(41.9,-0.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0066").s().p("AgrBDQgEgDAAgFQAAgGAEgDQAEgFAGAAIASgBIgBgqQAAgYACgXIgUABQgFAAgEgEQgEgDAAgGQAAgFAEgDQADgEAFgBIAbAAQARAAAcAEQALABAAALQAAAGgEAEQgEADgEAAIgZgDQgBARAAAbIAAArIAZgBQAGAAAEADQADAFAAAEQAAAGgDADQgEAEgGAAIgQABIgQAAIgSACIgTABQgFAAgEgEg");
	this.shape_12.setTransform(30.1,-0.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0066").s().p("AgIBEQgFgEAAgFIABgEIAAgEIAAgNIgBgNIgCghIgCgiIgFAAQgVAAgMgDQgKgCAAgKQAAgEADgEQAEgFAGABIAPABIAPABIARAAIAQAAIAVABIAVABQAGAAADADQAEAEAAAFQAAAGgEADQgDAEgGAAIgXgBIgWgBIACAmIACAlIABAJIABAJQAAAHgDAGQgEAHgHAAQgEAAgEgDg");
	this.shape_13.setTransform(18.5,-1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0066").s().p("AgrBDQgEgDAAgFQAAgGAEgDQAEgFAGAAIASgBIAAgqQAAgYABgXIgTABQgGAAgEgEQgEgDAAgGQAAgFAEgDQADgEAFgBIAcAAQAQAAAcAEQALABAAALQAAAGgEAEQgEADgEAAIgYgDQgCARAAAbIAAArIAZgBQAGAAAEADQADAFAAAEQAAAGgDADQgEAEgGAAIgQABIgQAAIgSACIgSABQgGAAgEgEg");
	this.shape_14.setTransform(6.5,-0.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0066").s().p("AhBBHQgDgDAAgGIABgLIAAgLIAAgQIABgRIgBgRIAAgRIAAgRIgCgQQAAgGAFgEQAFgFAGAAQAGAAAJAMQApA8ApAlIAAgOIgBg9IgBgKIgBgKQAAgNAOAAQAPAAAAAvIgBAPIAAA5IgCAPQgBAMgMAAQgHAAgHgHQgkgggsg6IgBAdIABAWIAAAWQAAAcgOAAQgGAAgFgFg");
	this.shape_15.setTransform(-6.3,-0.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0066").s().p("AgrBDQgEgDAAgFQAAgGAEgDQAEgFAGAAIASgBIAAgqQAAgYACgXIgUABQgGAAgEgEQgEgDAAgGQAAgFAEgDQADgEAFgBIAcAAQAQAAAcAEQALABAAALQAAAGgFAEQgDADgFAAIgXgDQgCARAAAbIAAArIAZgBQAFAAAEADQAEAFAAAEQAAAGgEADQgEAEgFAAIgQABIgQAAIgSACIgSABQgGAAgEgEg");
	this.shape_16.setTransform(-19.3,-0.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0066").s().p("AgvBLQgDgEAAgGIAAhpIAAgLIAAgLQAAgGAEgDQADgDAGgBIAGABIAUgCIAPgBQALAAAQAEQAUAGAAAHQAAAGgEADQgDAEgGAAIgFgBQgLgEgSABIgMAAIgQACIAAAfQAOgDAJgBQAQABANABQAMACAAALQAAAFgEADQgDADgGAAIgOgBIgOAAQgHAAgQAEIAAA6QAAAGgEADQgFAEgFAAQgFAAgEgDg");
	this.shape_17.setTransform(-30,-0.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0066").s().p("AhABHQgEgDAAgGIAAgLIABgLIAAgQIABgRIgBgRIAAgRIgBgRIgBgQQAAgGAFgEQAFgFAGAAQAGAAAJAMQApA8ApAlIABgOIgBg9IgCgKIAAgKQAAgNANAAQAPAAAAAvIAAAPIgBA5IgCAPQgCAMgLAAQgGAAgJgHQgjgggsg6IgBAdIAAAWIABAWQAAAcgNAAQgIAAgDgFg");
	this.shape_18.setTransform(-43.7,-0.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0066").s().p("AgrBDQgEgDAAgFQAAgGAEgDQAEgFAGAAIASgBIgBgqQAAgYACgXIgUABQgFAAgEgEQgEgDAAgGQAAgFAEgDQADgEAFgBIAbAAQARAAAcAEQALABAAALQAAAGgEAEQgEADgEAAIgZgDQgBARAAAbIAAArIAZgBQAGAAAEADQADAFAAAEQAAAGgDADQgEAEgGAAIgQABIgQAAIgSACIgTABQgFAAgEgEg");
	this.shape_19.setTransform(-56.7,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]}).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.9,-16.9,126.1,30.5);


(lib.animbuffyhead = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AEAg6QARAYAjAKAEAg6QAaADA0ALQAAABAAABQAPAsgNA0QgWBUhZAeAD1hZQAAAEAAADQADAMAHAKQABABAAABAkEijQAJgEAKAAQAKABAHAGQAGAHAEAIQAEAJAEAIQABABABABQAAABAAAEQgCgBgBgCQgIgFgHgFQgIgFgJgDQgJgDgKABQgJACgIAEQgJAEgIAFQgIAGgHAGQADgGADgHQADgIAIgGQAGgGAIgFQAIgEAIgEgAjXgoQgBgVgLgTAk9gOQAHgFAFgGQAAAAAAgBQAJgIAKgFQABAAACgBQACgBADgBQAJgDAKgBQACgBABAAQAGgBAGgBQASgBALAKAk9gOQAAgBAAgBQgFgNABgDQABgDgBgJQAAgJAGgRQAGgRAOgKQAQgMAQAHQAGADACAEAk9gOQACAIADAGQABAEAFALQABACABACQACAFADAGQABgBABgBQALgIANgFQAEgCAEgCQAMgFAMgFQACgBABAAQAKgDAKgEQAEgRgBgQAlJgIQAHgCAFgEAj7CKQgGAEgHACQgGACgFACQgCAAgBAAQgOAGgSABQgYADgFgSQgCgFAAgGQAAgLAFgMQAGgPgBgPQAAgCAAgB");
	this.shape.setTransform(56.1,63.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AkrCNQgQAYgdgPQgtAxgPhHQgKAMgTgaQgegrAIg5QACgMgNgQQg2hEBAguQAQACABAFQgIhdBSgYQAogMAVAZQAOg8AngSQAYgLAiAFQALACAIAEQAGAEAEAGQACgFADgFQAmhJBMgUQAZgGAUAQQALAJAJAAQAOAAAMgKQBPhGA2BQQBjgjA7BQQAHAKgEAHQA7gJAMAmQAMAigRAiQgHANAhABQBGAAgNAyQgIAhgYAXQA6AWg4AyQgGAGgIAAQA5AWg7AqQgSANgPAHQAXA8hLAIQgZADgOgKQgCgBgBgCQgBAAAAgBQAAACAAABAkpBwIAAAAQATADACguQA1AZAEhOQBEArAthJQAFgIALAJQA6ArAvgQQAOgFANgJQgCAlAqgLQgPAZATALQAIghAvAKQAZAFgBAeQAAAXgMAOQABAFAEADQAvAnAKgeAkFEeQACgDgBgEQAAgBAAgCQgDgrgTghQgQgcgBgfQAAgCAAgDQAAgLACgNQgIgBgMgKAEmF9QgDgbgRgNQgBgBgCgCQgBAAAAAAQgCgBgBgBQgWAfggAbQgqAkhAgNQgtgKgbgSQAOgLAHgLQAWgigkgUQgrgXgnAeQgcAXgIAeQgOA6gzgeQghgTgVgYAE7CDQgFAagwgCQgrgCgEgZQgBgKADgMACZBvQgOAQgdAEABWA+QgDAKACAO");
	this.shape_1.setTransform(49.2,42.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#6B4E32").ss(0.1,1,1).p("AgbAfQADAAADAAQASAAAOgHQAPgIACgQQACgTgLgL");
	this.shape_2.setTransform(28.3,61.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BE9670").s().p("AA0DYQgugJgagTQAOgKAHgMQAWgigjgTQgtgYgnAfQgcAWgHAeQgOA7gzgeQghgUgVgYIANgFIgNAFIgLAEIgDAAQgOAGgSACQgYACgFgRQgCgGAAgGQAAgLAFgMQAGgPgBgPIAAgDQACgEAAgDIgBgDQgDgsgTggQgQgcgBgfIAAgEQAAgMACgMIAAAAQATACADguQA1AZADhNQBFAqAthKQAEgHAMAIQA6AsAvgQQAOgFAOgKQgDAmAqgKQgQAYATALQAIggAwAKQAYAFAAAdQgBAXgMAOQgOAQgdAEQAdgEAOgQQABAFAFAEQAuAmAKgeQAEAZAsACQAvACAFgaQAEAMAGAKIABACQARAYAjAKQgjgKgRgYQAaADA0ALIAAACQAPAsgNA0QgWBUhZAeQgEgcgQgNIgEgCIgBgBIgDgCQgWAfggAcQgfAagqAAQgPAAgRgEgAkvgCIAAABIAFAOIAGAPIACAEIAFALIACgCQALgIANgFIAIgEIAYgKIADgBIAUgIQAEgQgBgQQgBgVgLgTQALATABAVQgLgKgSACIgMABIgDABIgTAFIgFABIgDACQgKAEgJAJIAAAAQgFAGgHAFIAAgBQgEgMAAgEIAAgBIAAgFIAAgHIAAgBQAAgJAGgQQAGgQAOgKIABgCQAJgGAJAAIABAAIABAAIAIABIACABIABAAQAGADACAEQgCgEgGgDIgBAAIgCgBIgIgBIgBAAIgBAAQgJAAgJAGIgBACQgOAKgGAQQgGAQAAAJIAAABIAAAHIAAAFIAAABQAAAEAEAMgAk7AFQAHgDAFgDQgFADgHADgAj2iVIgQAIQgIAEgGAGQgIAGgDAJQgDAGgDAGIAPgLQAIgGAJgEQAIgEAJgBQAKgCAJADQAJAEAIAFIAPAKIADACIAAgEIgCgDIgIgQQgEgJgGgGQgHgHgKAAQgKAAgJAEgAAdhxIAAgLQAAgHABgHQgBAHAAAHIAAALg");
	this.shape_3.setTransform(54.7,62.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AjzE2IgEgPQAHgFAEgGIABgBQAJgIAJgFIAEgBIAEgCIAUgEQALAKgCAVQgCAQgPAHQgPAIgSgBIgGABIgHgPgAmUDgQgKAMgTgaQgegrAIg5QACgMgNgRQg2hEBAgtQAQACABAFQgIhdBSgYQAogMAVAZQAOg8AngSQAYgLAiAFQALACAIAEQAGAEAEAGIAFgKQAmhJBMgUQAZgGAUAQQALAJAJAAQAOAAAMgKQBPhGA2BQQBjgjA7BQQAHAKgEAHQA7gJAMAmQAMAigRAiQgHANAhABQBGAAgNAyQgIAhgYAXQA6AVg4AyQgGAGgIAAQA5AXg7AqQgSANgPAHQAXA8hLAIQgZADgOgKIgDgDIgBgBIAAADIAAAHQgFAagwgCQgrgCgEgZIAAgFQAAgIACgJQgCAJAAAIIAAAFQgKAdgvgmQgEgDgBgFQAMgOAAgXQABgegZgFQgvgKgIAhQgTgMAPgYQgqALACgmQgNAKgOAFQgvAQg6gsQgLgJgFAIQgtBKhEgrQgEBOg1gZQgCAugTgDIAAAAQgIgBgMgKQAMAKAIABQgCAMAAAMIAAAFQgQAYgdgPQgSAUgNAAQgUAAgJgqgAkpDQIAAAAgAjnCzQADgIAHgGQAHgGAIgFIAQgIQAJgEAJAAQAKABAHAGQAGAHAEAIIAJARIABACIABAFIgEgDIgPgKQgHgFgKgDQgIgDgKABQgJACgJAEQgIAEgIAFIgQAMQAEgGADgHg");
	this.shape_4.setTransform(49.2,32.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.animbuffyhead, new cjs.Rectangle(-1,-1,100.3,86.1), null);


(lib.animbuffyfLeg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AADABQgDAAgCgB");
	this.shape.setTransform(52.8,31.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("Ag8AFQAfgSAZgdQAdgiAkgfQAlggAfghQAhgiAngaQAngcAugSQAsgSAngQQAsgSApgXIAAAAAHJhyQgSARgSARQghAgggAfQggAeghAfQgiAfghAgQghAgggAhQgfAigjAeQgkAfgpAcQgnAcgtAOQgqAOgvACQgZACgXgFQgYgFgVgNQgogYgiggQgkgigbgpQgXgkgKgrQgLgsgLgtQgIgegGgdQABgBABgBQgBABgBAAQAAgBAAgBQACgCADgCQAlggAugPQAtgQAsgTQAkgQAmgNQAEgBADgCQAtgQArgNQAbgIAegHAgui9QABADAAADQABACABADQAJAfABAjQABAygSAqQgGANgEAMQgKAegCAgQgEAmALAj");
	this.shape_1.setTransform(57.8,51);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#6B4E32").ss(0.1,1,1).p("AAFgEQgCADgDACQAAACgCACQgBAAgBAA");
	this.shape_2.setTransform(53.6,31.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#6B4E32").ss(0.1,1,1).p("ADNhSQACAAADgBADNhSQABACAAABQAAADAAADADGhQQACgBADAAQAAABABABADNhSQgBAAgBABAjMBTQAAAAAAgBQgCABgCABQABgCACgC");
	this.shape_3.setTransform(32.7,39.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CE00FF").s().p("AhKEhQAJgsgYgLIAAgPIgBhFQAqAbAhgcQAJgHAHgLQADgDABgJIAIAAIADggQAIhxgkhMIAAgGQg0AGALg3QAAgFgDgGQgDgJgJgGQAAgIgDgDQgPgaACgvQAPgiArgBIAAAGQBICiAlDIIAFAaIAAAMIABAOQABAQAAANQAEA9gTAkIgOAAQhlgCglA9QAAgJADgFg");
	this.shape_4.setTransform(123,42.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF00FF").s().p("AjWByQgEgYgDghIgCgSIADgRIAGglIAEgUQAGgSAIgSQAIgSAKgQIATgdQAJgOAMgPQALgNAOgNQANgNATgHQARgHASgDQATgCASAAQATAAASABQATACATAGQASAHARAJQARAIAOAOQANANALAPQALAPAKAQIAUAeQALARAFATIAIAhQAEATgCAQQgBAQABAOIgEAGIgEABIgDAAIgFABQgeAHgbAIQgrANgtAQIgHADQgmANgjAQQgsATgtAQQguAPglAgIgFAEIgEADQgCgYgNhUg");
	this.shape_5.setTransform(31.7,26.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#474441").s().p("AgngPIAaAAIANgBIAdAAIALAAQAAAJgCADQgNAVgRAAQgUAAgbggg");
	this.shape_6.setTransform(125.2,84.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CEC8C2").s().p("AgKAsQgUgagEgtIAAgMQAGgJAJgDQAFgDAJAAQgGA0AcATQADADABAJQAIAFAEAJQACAGAAAFIgOABIgZAAQAAgGgGgFg");
	this.shape_7.setTransform(121.7,77.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#ADA59F").s().p("AgjAsQgDgJgJgGQBLAXgHhcIAAgOQA0AlgwA8QgDAGAAAFIgPAAIgKABIgdAAQAAgGgDgFg");
	this.shape_8.setTransform(128.5,77.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BEB6AF").s().p("AAIAJQgBgWgbAJIgPAAIgMAAIAAgPQAuAAAxAFIAAAJQgGAAgGACIgcAXIAAgLg");
	this.shape_9.setTransform(125.8,72.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BAB6B5").s().p("AgEAWQgEgpAAgrQAIAQAFAUQAEAVAAAbIgDAdIABALIgIAAIgDgog");
	this.shape_10.setTransform(111.9,55.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3E3935").s().p("AgSAOIgDgnQAJgjAhgBIAAAHIgOAAIABBRIAAAQIAAABIABANQgJAAgCAEIgDABQgJAAgEgwg");
	this.shape_11.setTransform(118.5,39.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A19D97").s().p("AgbBEQAYgGgJglIgBgMIAAgNIAAAAIAAgQIgBhSIAOgBIAAAOQAgBDgEBkIAAAMQgGAAgJADQgKADgHAAQgbAAAEggg");
	this.shape_12.setTransform(120.7,44);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#221F19").s().p("AAIBvIAAgOIgBgMQAFhkgghCQAGgGADgJQACgFABgJQAjBLgHByIgEAgg");
	this.shape_13.setTransform(122.7,43.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#181512").s().p("Ag1C1IAAgdIAAgLIADgdQAAgcgFgVIA3gWQgEApAtgMQAJgDAFAAIABAOIgPAAIhQACIAAAOIAAAPIABBFIAAAPIgOAAIgBgPgAgphuIAAgPIgBgZIAAgBIACAAQAnAEgHgwIAGAAQgLA3AzgGIAAAGQAAAJgDAFQgCAJgGAGIAAgOIAAgGQgiAAgIAjIACAoIgQABQAAgVgMgig");
	this.shape_14.setTransform(117.9,46.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#44413D").s().p("AAIA4QAAgIgDgGQgUgogHg5IAMANQARAZAMAeQADAJAAAGIABAHIAAAHIAAAOIgIAAIgHAAg");
	this.shape_15.setTransform(111.4,25.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#847B7A").s().p("AgIAQIAAgBQAJgHAEgKIAEgNQAAAJgDAGQgBANgNADg");
	this.shape_16.setTransform(104.1,13.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#201C1A").s().p("AAIA3QAAgGgDgCQgLgSgdAAIAAgHIAAgFQANgDABgOQADgFAAgJIACgJQAAgKgBgIQAFgHAIgDQAFgDAGAAQAAAaARALQAGADAGAAQAAAJgDADQgDACgJAAIgNAAQAGAWACATIABAOg");
	this.shape_17.setTransform(106.9,13.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#423938").s().p("AAEAkQgRgcgHgoQAGgJAJgDQAFgDAFAAQgCAuAPAZQADADAAAJQAAAGgDADQgDADgJAAQAAgGgCgGg");
	this.shape_18.setTransform(114.1,20.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#302C2A").s().p("AgwAUIAAgOQAdgTAcgSQAFgDAFAAIASALQAGADAGAAIAAAOQAAAGgDACQgDADgIAAIgMAAQgigQglAuIAAgPg");
	this.shape_19.setTransform(112.4,4.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#ACA8A3").s().p("AgVAAQAPgFAKgMQADgDAAgGQAGAAADADQAGADgBAGQABAIgDAGQgNAbgJAAQgKAAgIgbg");
	this.shape_20.setTransform(132.9,82.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#261F1A").s().p("AA6BBQAwg9g0gkIAAgJQgygFgtAAIAAAPQgIAAgGADQgJADgFAJIAAALQgGAAgGADIgRALIAAgNIgBgMQAlg9BlACIAOAAQAJAIAGADQAGADAIgBIAPAAIAAAPIAAAOQAJAzgWASIAAAOQAAAGgDADQgMALgOAGQAAgFADgGg");
	this.shape_21.setTransform(125.2,74.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1F1C19").s().p("AgFA4IgChfIAAgdIANgBIABAdIABBgIAAANIgNABIAAgOg");
	this.shape_22.setTransform(134.1,61.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2A2929").s().p("AB2F2QABhVgag2IgBgMIAAgOIgBg4IAeAAIAAA3IACCMIAAAOIABAMgAhplbIgRgLIAAgPQATACARAEIgHAXQgGAAgGgDg");
	this.shape_23.setTransform(126.7,36.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#ABA9A6").s().p("AAABSIAAgNIAAhgIgBgdQAAgFgGgDQgDgGgFAAIAAgLIgBgPIAPAAIAKAAIABAOIAAA3IAAAPIABALQAAAIADAGQAJA9gXAXIAAgPg");
	this.shape_24.setTransform(134.9,60.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AhAE7IARgMQAGgDAGAAQADAvAVAaQAGAFAAAGQAxA8AcgxQADgDgBgJIAPgBQAPA3Aag3QACgGAAgIQAAgGgGgDQgCgDgGAAIgBgOQAXgRgJg0IAAgPQAXgXgJg9QgDgGgBgJQAbA3gCBUIAGAAQAAAJgDAFQgLAjgOAjQAAAJgDADQg1AxgrAAQhEAAgpiAgAhJEeQgPgcgEgmIAPAAQAXAMgIArQgDAGAAAIQgFAAgDgDgACsEQIgCiLIgBg3QAIAaADAdQAJBDgMBTQABADgGAAIAAgOgABmDxQgGgDgJgIQATgkgEg8QAAgOgCgPIAAgPIAOAAQAGAAADAGQAGADAAAFIgPAAIABAeIABBgIAAAOIAAAAQgJAAgFgDgAhOCIIAAgOIAAgPIBQgBIAOAAQAAAIgDADQgIALgIAHQgRAOgTAAQgSAAgVgNgAhsA0QAAgGgDgIQgOg/g5gVIAAgBIgBg0QAbABAbAGIAEABIAAAGQAOgOAMgOIABgCQADgGgBgGIAPAAIAAABIAAAaIABAOQALAjAAAUIARgBQAFA3ALgJQADgDAJAAIAAAMQAJAlgXAGIg4AWQgEgVgKgPgACMBNIAAgNQgBhZgGhDQgajsiXhbIAHgXQCKAfAhCYQAQBMAIBZQAJBRACBbgAgOk1IAAgHQgrABgPAjQgFAAgGADQgJADgGAJQAHAoASAdQADAGgBAGQAJAAADgEQADgCAAgGQAJAGACAIQAEAGAAAFIgGAAQAHAxgogEIgBgBIAAgOIAAgHIAAgHQAAgGgEgJQgLgfgTgYIgLgOQgGAAgDgDQgGgCAAgJIAJAAIgBgOQgCgTgGgWIAOAAQAJAAADgDQADgDgBgJQgFAAgGgDQgSgLAAgaQAlgvAjARIAMAAQAIAAADgDQADgDAAgGQAaAdAPAoIABAMQBXCeAaDXIgQADQgljHhIiig");
	this.shape_25.setTransform(121.8,44.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#444342").s().p("AgEAJIgFgaIAPgCQADAFAAAJIAAAOIABALIgOAAIAAgLg");
	this.shape_26.setTransform(132.3,51.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#BE9670").s().p("Aj4FeQgYgFgVgNQgogYgiggQgkgigbgpQgXgkgKgrIgWhZQgIgegGgdIACgCIgCABIAAgCIAFgEQAlggAugPQAtgQAsgTQAkgQAmgNIAHgDQAtgQArgNQAbgIAegHIAFgBIABADIAAAAIAAAAIgBAAIgEgBIgBgBIABABIAEABIABAAIAAAAIAAAAIACAGIACAFQAJAfABAjQABAygSAqIgKAZQAfgSAZgdQAegiAjgfQAlggAfghQAhgiAngaQAngcAugSIBTgiQAsgSApgXIAAAAIAAAHQAdAAAMASQADACAAAGQAAAJAGACQADADAGAAQAGA6AVAoQADAGAAAIQABAGgDAGIgBACQgMAOgOAOIAAgGIgEgBQgbgGgbgBIABA0IgkAiIhBA/QggAeghAfIhDA/IhBBBQgfAigjAeQgkAfgoAcQgoAcgtAOQgqAOgvACIgNABQgSAAgRgEgAhsCMQgIgbAAgcIABgSQACggAKgeQgKAegCAgIgBASQAAAcAIAbg");
	this.shape_27.setTransform(62.1,51);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.animbuffyfLeg, new cjs.Rectangle(9.4,-0.6,130.8,89.3), null);


(lib.animbuffybLeg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AjABQQgKgPgJgPQgZgpgPguQgEgLgIgGQgJgFgBgHQgGgvABgwQAAgbAFgaQADgQAEgQQACgGACgHQAQgvAgglQAegjArgVQAqgUAvgHQAEAAAFgBQArgFAtAJQAtAIAuAGQAhAEAgABQAMAcARAgQAgA9ANBBQAAACABACQAGAjgFAjQgEAWgGAVQgBAFgCAFQgMgBgMgCQgQgDgOgGQgpgSgsgVQgtgVgagmQAHArARAmQATApASAqQAUAsAPAtQAQAwgHAwQgIAwARAtQARAtAYAnQAZAoAYAoQAHAMAGANAi1BgQAMARANAQQAUAZARAa");
	this.shape.setTransform(29.7,43.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AjojwQAGAIAFAIQAbAtAkAnQADAEAEAEQA9A/BCA7QAxArApA7QAGAIAFAJADhDqQAAgJAAgJQABgzAGg4QAAgFABgEADhDqQAAAEAAAD");
	this.shape_1.setTransform(33.7,75.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#6B4E32").ss(0.1,1,1).p("ADtAgQkqhFg0AGQg0AGgcgDQgbgDgQAE");
	this.shape_2.setTransform(73.5,6.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC00FF").s().p("ADdDDQijgqirhbIgWgMIgJgHIgLgJQgMgHgLgJQgvgggPgjIAIgKQA+hLgYhAQAHAFACAGQAcAgAWgKIALAIIA0AoQgtAPABAqQAAALADAMQABAEAGAFIgFAHIAXAVQBQBJBNASIAEADQAagrAjApQAEADAGABQAJAEAJgDQAHAFAEgBQAcAFAhAdQARAfgZAhg");
	this.shape_3.setTransform(27.2,93.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF00FF").s().p("AhBC5IgJgBIgJAAQg0ACgygGQgfgDgagwQAMACAMAAIADgKQAGgUAEgWQAFgjgGgjIgBgFQgNhAggg9QgRgfgMgcQAQgFAbADQAcAEA0gGQA0gGEqBGQBDAYAFAnQAEAnALAhQALAigcAmQgdAngqAOQgsAQgmALQgoANgxAEQgXACgZAAIglgBg");
	this.shape_4.setTransform(78,21.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#ACA8A3").s().p("AABAWQgGgEgDgGQgagzAxAWQgEAOACAOQAAAEAFAEQgEAEgEAAIgEABQgDAAgCgCg");
	this.shape_5.setTransform(-9.9,81.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#ADA59F").s().p("AghgDQgDgGgEgDIAIgLIAHgIIARgWQAEADAFABQAIADAKgDQg8ArBIAxIAKAIQgLADgKAAQgoAAgNg5g");
	this.shape_6.setTransform(-4.3,80.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#474441").s().p("AgYAVQgUgxBJgCIgPAUIgIAKIgQAWIgHAIQgHgFAAgEg");
	this.shape_7.setTransform(-5.8,75.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#423938").s().p("AgZgEQgEAAgGgFQgFgEAAgDQgBgEAGgHQAEAEAGABQAfAEAiASQADAJgDAJQgBAGgDAEQgigcgbgEg");
	this.shape_8.setTransform(47,104);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#302C2A").s().p("AgVAtQgEgEgBgEQAAgDAFgHIAGgJQAhgQgNg2IALAJIALAIQgCAigEAfQgBAFgEAFIgRAGQgGADgDAEIgLgIg");
	this.shape_9.setTransform(60.4,111.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#44413D").s().p("AgUAMQgIgDgFgEIgKgHIgLgIIAIgLQAHAFAGABQApAIAvAdIgOAAQgeAAgfgKg");
	this.shape_10.setTransform(45.2,98.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#201C1A").s().p("AACAgQgEADgEAEQgGgFgBgEQAAgEAFgHIAIgKQgbgKgTgPIAFgHQAEAEAEgBIADAAQANAAALgJIAAAGIAAgGQAGgFAEgGIAJAHQgGAMAJAJQADAGAHAFIAGAGQAHAGAHADIABAFQABAGgCAGQgCAGgDAEQgUgPgTAGg");
	this.shape_11.setTransform(56.8,102.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#847B7A").s().p("AgBAFQgJgIAGgMIAAAAIAAABQAAAKAFAKIAGAKQgGgFgCgGg");
	this.shape_12.setTransform(58.7,100.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CC9966").s().p("ABQAWIAKAIQgFAGgFAEIAAgSgAhZgnIAEADIgEABIAAgEg");
	this.shape_13.setTransform(48.2,95.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3E3935").s().p("AAfAsIAIgLIhJg4IgKgJQAFgGgBgEQAAgOArAeIAgAWQAVAZgVAag");
	this.shape_14.setTransform(30.6,96.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#444342").s().p("AAAAKIgKgJIgJgFIAIgLIAJAHIAWALIgHANQgHgBgGgFg");
	this.shape_15.setTransform(13.8,99.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#A19D97").s().p("ABBA5QhDgPhJg+IgIgHQADgEACgJQATgpAbAcQgJAVAhAPIAIAHIAKAIIBLA5IgJALIgLgJg");
	this.shape_16.setTransform(26,94);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#221F19").s().p("AhDgeIgWgWIAFgHIAKAIIAJAIQBIA+BEAPQABAHAFAIQADAFAGAGQhNgShQhIg");
	this.shape_17.setTransform(25,96.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2A2929").s().p("AE4B9QAEgEAFgDIATgHIALAJQgNANgNALgAjigqIhphRIgKgJIgJgHIADgEQA+AzA4ANIAJAGIALAJIAqAhIgSAVIgpggg");
	this.shape_18.setTransform(28.1,104.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#ABA9A6").s().p("AAzA1IgpghIgLgIIgIgHQgHgFgGAAQgygdgEgfIALAIIAKAIIBIA3IAVARQAFAEAFgDQAGACADgFIAJAHIALAJIgIAKIgHAJIgLgIg");
	this.shape_19.setTransform(6.1,96);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1F1C19").s().p("AAaAdIhHg3IgKgIIAIgLIALAIIBHA4IAVARIgIAKIgWgRg");
	this.shape_20.setTransform(5.1,94.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#BEB6AF").s().p("AggAhQADgEABgGIgBgiIAJAHQASAMAJgaIAIgKIAHgJIALAIQgbAiggAhg");
	this.shape_21.setTransform(3.2,82.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CEC8C2").s().p("AgSAHQgEABgGgFQgKADgIgDQgGgBgEgDIAIgKIAQgUQAEADAHgBQAfAAAkAZIAJAGQADAKgDAIQgBAGgFAGQgkgigfAJg");
	this.shape_22.setTransform(0.5,75.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#181512").s().p("ABECFQgGgGgDgFQgFgIgBgHIALAIIAFAEQAUgagVgbIgggWIAKgNQAPAMAhAMIALAIIATAQQgcAbApAYIgEAEQgigpgbArgAhrANIAJgLIAvg8IgLgIIgLgJIg0goIgLgJIAJgLIALAJIAWAQIAIAHIAUAUQAUAQATAJIgRA2QgbgcgTApQgDAIgDAEIgLgIg");
	this.shape_23.setTransform(27.3,89.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#BAB6B5").s().p("AAQAYQgRgJgUgQIgUgTIgJgHIAFgHIAgAXQAgAVAgAZQgRgCgSgJg");
	this.shape_24.setTransform(22.8,80.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AB8DxQhCghhHgvQhBgphGg1IARgVIAKAIQBEA0A1AjQC/B5Ceg7IANATQg8AwhEAAQg1AAg5gdgAEGC4IgJgGQiqgcivhuIAHgNQCqBbCkAqIAFAEQAZghgRgfQADgEABgGQADgIgDgKQgigTgggEQgGgBgEgEQgFAHAAAEQAAAEAFADQgKADgIgDQgGgBgEgDIADgFQgogYAcgbIALAIIAKAJQAFADAIADQAnANAlgDQAEgEADgBQAGgDAGAFIgFAHQAUAPAaALIgIAKQgFAHABAEQAAAEAHAFQADgEAFgDQATgGAUAPQANA3giAQIgGAJQgFAHAAADQABAEAEAEIgMAAQggAAgggLgAjDAqQg3ghg4g5QgCgBADgFIALAJIBoBQIAqAgQgYgKgXgPgAiQAVIAIgKIgVgQIhIg5IgLgIQAFgGAFgDQAGgDAMgBQAPAjAvAhQALAIAMAHIAKAIIgIALQgDAEgGgBIgEABQgDAAgDgCgACFgNIgLgIQghgMgPgMIgJANQgsgdAAANQAAAEgFAHIgJgHQgggPAJgVIAQg2QASAJARABQAEAEAIACQANAHAMADQAqALAngXIAFAEIAiAbQgQATgUAQIgEADIgEgDIAAAEQADASADAPQADAGAEADIgIAKIgUgPgACqhjIgMgRIAMARgAk2hBIgEAEQgGgFgDgFQgTgdgRgfQgHgFgBgEQgMi1DBBKIgBATQgBAGgEAFQgkgZggAAQgHABgFgDQhKABAUAyQABAEAGAGIgIAKQgygVAaA0QADAFAGAFQAFAEAFgDQAEAAADgFIALAJQAAAbAsAYIALAJQAEAfAyAcQAGACAHAFQg5gNg9gzgAhVhIQgDgMAAgLQgBgpAtgPIAKAIIAMAJIgwA9IgIALQgHgGAAgEgAidjeQgDgFgGgFQADgFAEAAQAeAGAeAUIgIALQgGADgGAAQgRAAgVgZg");
	this.shape_25.setTransform(24.4,96.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#261F1A").s().p("AgNBWIgMgJQgsgYABgbIgLgIQgEgEgBgEQgCgOAEgOQAFADACAFQARBIA6gRIAGAFQAhgiAcghIgMgJQAGgGABgGQADgJgDgJIgJgHQAEgEABgGIABgUIALAIIAJAHQAXBAg9BJIgJALQgLACgGADQgFACgFAGIgIALIgKgIg");
	this.shape_26.setTransform(-0.2,81.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#BE9670").s().p("ADlHuQgGgFgGADQgEABgDAEQgvgdgqgJQgGgBgHgFQgEgDgDgGQgEgQgCgRIAEgBIAEgDQAUgQAQgTIgigbQgog6gzgtQhBg6g8g/IgIgIQgRgagUgZIgZghIgLgQIgTgeQgZgpgPgvQgEgKgIgGQgJgGgBgHQgGgvABgwQAAgbAFgZQADgQAEgQIAEgNQAQgvAggmQAegiArgVQAqgUAvgHIAJgBQArgFAtAIQAtAJAuAGQAhAEAgAAQAMAcARAgQAgA9ANBBIABAFQAGAjgFAjQgEAWgGAUIgDAKQgMAAgMgCQgQgDgOgGIhVgoQgtgVgagmQAHAsARAmIAlBTQAUAsAPAuQAQAugHAwQgIAxARAsQARAuAYAnQAZAnAYApIANAYQgFA4gBAzIgBATQgLAJgNAAIgDAAIgBAAQgDAAgEgDg");
	this.shape_27.setTransform(29.7,50.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0000FF").s().p("ADPA8IAAAAIASAGIgSgGgAjghBIAAAAIAFACIgFgCg");
	this.shape_28.setTransform(94.3,6.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.animbuffybLeg, new cjs.Rectangle(-12.4,-0.2,129.2,123.9), null);


(lib.CaratforDiagram = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().p("AgGBFQgCgDAAgEIAAgLIAAgLIgCg4IgWgBQgIgCAAgIQAAgEADgEQACgCAEAAIAVABIAAgNIgBgMQAAgEADgDQACgDAFAAQAHAAACAPIAAAJIAAAFIAAAGIANgBQALAAADABQAGACAAAHQAAAEgDADQgCADgFAAIgEAAIgGAAIgMABIABA5IAAAEIAAAFQABAWgKAAQgDAAgEgDg");
	this.shape.setTransform(151.1,54.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AAfAyIgGgHIgRAHQgHADgEAAQgXAAgKgNQgKgMAAgZQAAgXARgQQAQgRAVAAQAJAAAKAEQANAGAAAHQAAADgCACIgBAMIgBAVQAAAMACAHIAGARIACAGIABABQAAAEgDADQgDACgDAAQgCAAgFgEgAgQgYQgLANAAAPQAAAQAGAIQAFAIAMAAQAJAAAGgDIAJgIQgCgZAAgNIAAgJIABgKIgGgDIgEgBQgOAAgLAMg");
	this.shape_1.setTransform(141.3,55.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("AglAtIAAhEIABgJIAAgKQgBgKAJAAQAKAAAAAQQASgSAWAAQAJAAADAGQAEAGAAAMIAAAHQAAAMgJAAQgJAAAAgJIAAgHIAAgIQgQABgJAHQgIAHgGAMIABA1QAAAKgLAAQgIAAAAgKg");
	this.shape_2.setTransform(131.6,55.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("AAfAyIgHgHIgQAHQgHADgEAAQgWAAgLgNQgKgMAAgZQAAgXAQgQQAQgRAWAAQAIAAALAEQAOAGAAAHQAAADgCACIgCAMIgBAVQAAAMACAHIAGARIADAGIAAABQAAAEgDADQgDACgDAAQgCAAgFgEgAgPgYQgMANAAAPQAAAQAGAIQAFAIAMAAQAJAAAGgDIAKgIQgEgZAAgNIABgJIACgKIgGgDIgFgBQgOAAgKAMg");
	this.shape_3.setTransform(121.4,55.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9900").s().p("AgbArQgOgNAAgUQAAgUANgVQAPgXARAAQAKAAAMAEQAPAHAAAIQAAADgDAEQgDACgDAAQgDAAgCgBIgEgEQgGgFgNABQgJgBgKATQgJAPAAAMQAAAMAJAIQAIAHAMAAQAGAAAGgDIAMgGIAEgCQAEAAACADQADADAAAEQAAAGgPAHQgNAGgJAAQgTAAgNgMg");
	this.shape_4.setTransform(111.2,55.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF9900").ss(2,1,1).p("AhNAqQBWh8BFA8");
	this.shape_5.setTransform(96.1,51.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF9900").ss(2,1,1).p("AgZgjIgDBHIA5AA");
	this.shape_6.setTransform(91.2,52.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(20));

	// Layer 4
	this.instance = new lib.verbArrow();
	this.instance.parent = this;
	this.instance.setTransform(151.5,13.3,1,1,0,0,0,30.2,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// Layer 2
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(3,1,1).p("AKQCSIwLAAIkUkj");
	this.shape_7.setTransform(65.6,14.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#330033").ss(3,1,1).p("AqPiRIEUEjIQLAA");
	this.shape_8.setTransform(65.6,14.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#660066").ss(3,1,1).p("AqPiRIEUEjIQLAA");
	this.shape_9.setTransform(65.6,14.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#990099").ss(3,1,1).p("AqPiRIEUEjIQLAA");
	this.shape_10.setTransform(65.6,14.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#CC00CC").ss(3,1,1).p("AqPiRIEUEjIQLAA");
	this.shape_11.setTransform(65.6,14.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FF00FF").ss(3,1,1).p("AKQCSIwLAAIkUkj");
	this.shape_12.setTransform(65.6,14.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7}]}).to({state:[{t:this.shape_7}]},4).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},5).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_7}]},1).wait(1));

	// Layer 3
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(3,1,1).p("AAACmIAAlL");
	this.shape_13.setTransform(76.1,45.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#330033").ss(3,1,1).p("AAAilIAAFL");
	this.shape_14.setTransform(76.1,45.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#660066").ss(3,1,1).p("AAAilIAAFL");
	this.shape_15.setTransform(76.1,45.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#990099").ss(3,1,1).p("AAAilIAAFL");
	this.shape_16.setTransform(76.1,45.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#CC00CC").ss(3,1,1).p("AAAilIAAFL");
	this.shape_17.setTransform(76.1,45.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FF00FF").ss(3,1,1).p("AAACmIAAlL");
	this.shape_18.setTransform(76.1,45.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13}]}).to({state:[{t:this.shape_13}]},4).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},5).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_13}]},1).wait(1));

	// Layer 1
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(3,1,1).p("AiCBBICCiCICDCC");
	this.shape_19.setTransform(76.1,69);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#330033").ss(3,1,1).p("AiCBBICCiCICDCC");
	this.shape_20.setTransform(76.1,69);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#660066").ss(3,1,1).p("AiCBBICCiCICDCC");
	this.shape_21.setTransform(76.1,69);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#990099").ss(3,1,1).p("AiCBBICCiCICDCC");
	this.shape_22.setTransform(76.1,69);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#CC00CC").ss(3,1,1).p("AiCBBICCiCICDCC");
	this.shape_23.setTransform(76.1,69);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FF00FF").ss(3,1,1).p("AiCBBICCiCICDCC");
	this.shape_24.setTransform(76.1,69);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19}]}).to({state:[{t:this.shape_19}]},4).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},5).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_19}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-2.7,192.6,79.7);


(lib.buffyrunanim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frontArm
	this.instance = new lib.staticbuffyfArm();
	this.instance.parent = this;
	this.instance.setTransform(157.3,83.1,1,1,0,0,0,98.9,15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:97.4,regY:16.5,scaleX:1,scaleY:1,rotation:13,x:155.8,y:84.1},4).to({regY:16.4,scaleX:1,scaleY:1,rotation:-85,x:155.7,y:84},8).to({regX:98.9,regY:15.6,scaleX:1,scaleY:1,rotation:-12,x:157.3,y:83.2},4).wait(1));

	// head
	this.instance_1 = new lib.animbuffyhead();
	this.instance_1.parent = this;
	this.instance_1.setTransform(140.8,66,1,1,0,0,0,82.7,66);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:82.6,scaleX:1,scaleY:1,rotation:-18,x:140.7},5).to({regX:82.7,scaleX:1,scaleY:1,rotation:23.8,x:140.8,y:66.1},6).to({scaleX:1,scaleY:1,rotation:3.8,y:66},5).wait(1));

	// frontLeg
	this.instance_2 = new lib.animbuffyfLeg();
	this.instance_2.parent = this;
	this.instance_2.setTransform(193.5,145.3,0.995,0.995,113.5,0,0,29.7,22.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:29.8,rotation:26.8,y:145.4},4).to({regX:29.7,rotation:119.1,y:145.3},8).to({regX:29.8,scaleX:0.99,scaleY:0.99,rotation:111.3,y:145.4},4).wait(1));

	// Layer 7
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ApNAiQDAgRDEggQCwgeCxATQB+AOB9AMQA2AFA2AFQAtAEAiAU");
	this.shape.setTransform(184.6,262.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AnPg5QgMAAgEAAQABABAAAAQAIAAAHgBgAlng5QgeAAgeAAQgBABAAgBQgBABgBgBQAAABgBgBQAAABgBgBQgBABAAgBQgBABgBgBQAAABgBgBQAAABgBgBQgBABAAgBQgBABAAgBQgBABAAgBQgBABAAgBQgBABAAgBQgBABAAgBQgBABAAgBQgBABAAgBQgBABAAgBQgBABAAgBQgBABAAgBQgBABAAgBQgBABAAgBQgBABAAgBQgBABAAgBIgTAAAxBgbQC3gZC7gCQB4gCB5AAQCpATC+gDQCBgDCCgBQBQAABGARQgpAPg4ALQhRAPhwAHQizAKi0ABQiCABiCAAQHJAeIogGQF9gEE/AA");
	this.shape_1.setTransform(205.6,262.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(17));

	// body
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.1,1,1).p("AAfoCQAGAqgEAlQgKBSgxBDQgxBBgiBZAiooeQgKBEg8AzQg2AuhFAxQhEAwhFA0Ahwh6QgBABgBABAIPCbQgCgEgCgDQg9gFgxgCQgogBgpgCQgIAAgIAAQgxgCgwgMQgwgLgtgFQgwgFgtgIQgtgJgrgJQgCgPgEgQAIQCeQAAgBgBgCQgFAZgDAaQgDAVgCAVQgGAugXAnQgXAoghAfQgHAHgIAGQgbAXgfARQgkAVgfARQgiATgpAQQgsASgvgHQgwgGgpgTQgggQgQguQgPgqgJguQgHgngGgmQgBgYgBgYQgBgxADgxQABgfgEgdQAAgCgBgCQAAgBAAgBAgzEhQgBgJgCgJQgHguAAgxQABgvAGguAmRn6QgDgUADgCAoPlWQgEgGA0gI");
	this.shape_2.setTransform(187.4,110.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(0.1,1,1).p("Ak5lVQARgBASgBQAugDAugDQAFAAAGAAQArgDAqAHQAvAIAtAKQAEABADABQAIABAHADQAhAKAZARQACACADACQAEADADACQAjAVAmAWQAoAYApAVQAqAWAmAeQAmAeAeAnQAcAlAZAnQAJAOAHATQAAACABADQAEAGAEAHQATAdAPAgQAWAsAEAxQAEAxgHAyQgDAYgFAXAh0A8QgCAFgBAFAhFDvQgBgNgDgNQgMgrgaglQgNgTgSgNQgDAEgDAEQgfAkgrAVQgrAVgwAFQgvAEgvgPQgXgIgSgNQgRgMgOgRQgUgZADgrQADgwgLgsQgBgDAAgDQgIgggLgpQgNgsAEAFQADAFgEgHAh5BIQgKAPgLAOAk5lVQgCACgBADAmYlQQASABATgCQAdgCAdgC");
	this.shape_3.setTransform(188.1,91.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF00FF").s().p("ABtIeQgwgGgpgUQgfgQgRguQgPgqgJguIgNhNIgCgwQgBgwADgxQABgggEgdIgBgEIAAgCQArAKAtAIQAtAIAwAFQAtAFAwAMQAwAMAxABIAQABIBRADQAxACA9AEIAEAHQgFAZgDAaIgFArQgGAtgXAoQgXAoghAeIgPANQgbAXgfARIhDAnQgiATgpAQQggAMgiAAQgNAAgMgBgAmegLQgWgIgTgMQgRgMgOgRQgUgaADgrQADgvgLguIgBgGQBFgzBEgwQBFgyA2gtQA8g0AKhEQArgCAqAHQAvAHAuALIAGABIAPAEQAGAqgEAmQgKBRgxBDQgxBBgiBZIgDAKIgCADIgVAcIgGAIQgfAlgrAVQgrAVgwAEIgVAAQglAAgkgLg");
	this.shape_4.setTransform(188.8,110.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BE9670").s().p("AIKFfIgCgEIgEgHQg9gEgxgCIhRgDIgQgBQgxgBgwgMQgwgMgtgFQgwgFgtgIQgtgIgrgKIgGgeIgBAAQgBgNgDgNQgMgsgaglQgNgTgSgNIAVgcIACgCIAEgKQAhhZAxhBQAxhDAKhRQAEgmgGgqQAhAKAZASIAFAEIAIAFIBIArQAoAXApAVQAqAXAmAeQAmAeAeAnQAcAkAZAoQAJAOAHASIACAGIAIAMQASAeAPAfQAWAtAEAxQAEAxgHAxQgDAZgFAXIgBAAgAoMhsQgNgsAEAFQABABAAAAQAAABAAAAQAAgBAAAAQgBgBgBgCQgEgHA0gIQA0gIAPg9QAPg9gDgUQgEgUADgCQASABATgCIA6gFIgDAGIADgGIAjgCIBcgFIALgBQgKBFg8AzQg2AthFAyQhEAwhFAzQgIgggLgog");
	this.shape_5.setTransform(188.1,91.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(17));

	// backLeg
	this.instance_3 = new lib.animbuffybLeg();
	this.instance_3.parent = this;
	this.instance_3.setTransform(199,141.8,0.998,0.998,-33.1,0,0,89.4,26.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({rotation:-106.1,y:141.7},8).to({regX:89.5,regY:26.3,scaleX:1,scaleY:1,rotation:-63.2,x:198.9},4).wait(1));

	// backArm
	this.instance_4 = new lib.staticbuffybArm();
	this.instance_4.parent = this;
	this.instance_4.setTransform(156.1,66.1,0.999,0.999,24,0,0,9.1,40);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:39.9,scaleX:1,scaleY:1,rotation:-0.8,y:66},4).to({regX:9,regY:40,scaleX:1,scaleY:1,rotation:159.4,x:156},8).to({regX:9.1,regY:39.9,scaleX:1,scaleY:1,rotation:36.3,x:156.1,y:66.1},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(58,0,257.6,278.8);


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


(lib.blank_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.blank_gr("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(32.6,17,1,1,0,0,0,32.5,17);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.blank_1, new cjs.Rectangle(0.1,0,65,34), null);


(lib.SamFlipping = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Sam("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(43.2,49.9,1,1,0,0,0,43.2,49.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:43.3,rotation:-75,x:43.3,y:49.8},2).to({regX:43.2,rotation:-210,x:43.4},2).to({regX:43.3,regY:49.8,rotation:-315,y:49.9},3).to({regX:43.2,regY:49.9,rotation:-360,x:43.2},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,88.4,101.7);


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
		var bgm = createjs.Sound.play('bgmInf',{loop:-1});
		//var vo = createjs.Sound.play('VO');
		
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
				bgm.volume += 0.5;
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
		
		 window.open ("inf_Scene5b.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("inf_Scene5.html","_self");
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


(lib.ToRunishard_Scene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_60 = function() {
		playSound("cowbell_3times");
	}
	this.frame_88 = function() {
		playSound("Flying");
	}
	this.frame_111 = function() {
		playSound("Flying");
	}
	this.frame_120 = function() {
		playSound("Flying");
	}
	this.frame_130 = function() {
		playSound("Flying");
	}
	this.frame_141 = function() {
		playSound("Flying");
	}
	this.frame_152 = function() {
		playSound("_2a");
	}
	this.frame_156 = function() {
		playSound("_2a");
	}
	this.frame_160 = function() {
		playSound("_2a");
	}
	this.frame_166 = function() {
		playSound("_2a");
	}
	this.frame_187 = function() {
		playSound("wrong_answer");
	}
	this.frame_194 = function() {
		playSound("wrong_answer");
	}
	this.frame_201 = function() {
		playSound("wrong_answer");
	}
	this.frame_219 = function() {
		playSound("cowbell_3times");
	}
	this.frame_265 = function() {
		playSound("Flying");
	}
	this.frame_297 = function() {
		playSound("_2a");
	}
	this.frame_303 = function() {
		playSound("_2a");
	}
	this.frame_309 = function() {
		playSound("_2a");
	}
	this.frame_315 = function() {
		playSound("_2a");
	}
	this.frame_339 = function() {
		playSound("wrong_answer");
	}
	this.frame_344 = function() {
		playSound("wrong_answer");
	}
	this.frame_349 = function() {
		playSound("wrong_answer");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(60).call(this.frame_60).wait(28).call(this.frame_88).wait(23).call(this.frame_111).wait(9).call(this.frame_120).wait(10).call(this.frame_130).wait(11).call(this.frame_141).wait(11).call(this.frame_152).wait(4).call(this.frame_156).wait(4).call(this.frame_160).wait(6).call(this.frame_166).wait(21).call(this.frame_187).wait(7).call(this.frame_194).wait(7).call(this.frame_201).wait(18).call(this.frame_219).wait(46).call(this.frame_265).wait(32).call(this.frame_297).wait(6).call(this.frame_303).wait(6).call(this.frame_309).wait(6).call(this.frame_315).wait(24).call(this.frame_339).wait(5).call(this.frame_344).wait(5).call(this.frame_349).wait(41));

	// actions
	this.instance = new lib.CaratforDiagram();
	this.instance.parent = this;
	this.instance.setTransform(289.4,-221.7,0.505,0.505,0,0,0,65.5,37.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgFBNQgFgGAAgDQAAgEADgDQADgCAEAAQADAAADAFQAEAFAAAEQAAADgDADQgCADgEgBQgDAAgDgEgAgGAjIgBgLIAAgMIAAgpIABgrQAAgJAHAAQAJAAAAAJIAABrQAAAKgJgBQgHABAAgKg");
	this.shape.setTransform(240.1,-230.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgGBFQgDgDAAgEIABgLIAAgLIgCg4IgVgCQgJgBAAgJQAAgDADgEQACgCAEAAIAVABIAAgNIgBgMQAAgEACgCQAEgEAEAAQAHAAACAPIAAAJIAAAGIAAAFIAOgBQAKAAADABQAGABAAAIQAAAEgDADQgDADgDAAIgGgBIgEAAIgOACIACA5IAAAEIAAAFQABAWgLgBQgCAAgEgCg");
	this.shape_1.setTransform(233.3,-229.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAfAyIgHgHIgQAHQgHADgEAAQgXAAgKgNQgKgMAAgZQAAgXARgQQAPgRAWAAQAIAAALAEQAOAGAAAHQAAADgCACIgCAMIgBAVQAAAMACAHIAGARIACAGIABABQAAAEgDADQgDACgDAAQgCAAgFgEgAgQgYQgLANAAAPQAAAQAGAIQAGAIALAAQAJAAAGgDIAKgIQgEgZAAgNIABgJIABgKIgFgDIgFgBQgOAAgLAMg");
	this.shape_2.setTransform(223.5,-227.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AglAtIAAhEIABgJIAAgKQAAgKAIAAQAJAAABAQQASgSAXAAQAHAAAEAGQAEAGAAAMIAAAHQAAAMgKAAQgIAAAAgJIgBgHIAAgIQgPABgJAHQgIAHgGAMIABA1QAAAKgKAAQgJAAAAgKg");
	this.shape_3.setTransform(213.8,-227.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAfAyIgHgHIgQAHQgHADgEAAQgXAAgKgNQgKgMAAgZQAAgXAQgQQARgRAVAAQAIAAALAEQANAGAAAHQAAADgCACIgBAMIAAAVQgBAMACAHIAGARIADAGIAAABQAAAEgDADQgCACgEAAQgCAAgFgEgAgPgYQgMANAAAPQAAAQAGAIQAFAIAMAAQAIAAAHgDIAJgIQgCgZAAgNIAAgJIACgKIgHgDIgDgBQgPAAgKAMg");
	this.shape_4.setTransform(203.6,-227.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgbArQgOgMAAgWQAAgSANgVQAPgYARAAQAJAAAMAEQAPAGABAIQgBAFgCADQgCACgEAAQgDAAgCgBIgEgEQgGgEgNgBQgJABgKARQgJAQABALQgBANAJAIQAJAHALAAQAGAAAGgDIAMgHIAEgBQAEAAADADQACADAAADQAAAIgPAHQgNAFgJAAQgTAAgNgMg");
	this.shape_5.setTransform(193.4,-227.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAfAyIgGgHIgRAHQgHADgEAAQgXAAgKgNQgKgMAAgZQAAgXARgQQAPgRAWAAQAIAAALAEQAOAGAAAHQAAADgCACIgCAMIgBAVQAAAMACAHIAGARIACAGIABABQAAAEgDADQgDACgDAAQgCAAgFgEgAgQgYQgLANAAAPQAAAQAGAIQAGAIALAAQAJAAAGgDIAKgIQgEgZAAgNIABgJIABgKIgFgDIgFgBQgOAAgLAMg");
	this.shape_6.setTransform(177.1,-227.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAYAwIgCgWIgCgVIABgJIAAgJQAAgVgIAAQgLAAgJANQgJAMgFARIgBAKIAAAJIAAAJIABAJQgBAEgCADQgDACgEAAQgEAAgDgCQgDgDABgEIgBgJIgBgJIACgbIABgcIAAgJIAAgJQgBgFADgCQADgDAEAAQAJAAABANIAAALQARgWAQAAQAPAAAGAOQAFAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgCADQgEADgEAAQgIAAgBgJg");
	this.shape_7.setTransform(161,-227.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgcApQgNgNgBgXQgBgVAMgRQAOgUAXAAQAUAAAKASQAIAPgBAUQAAAVgLAPQgMASgUAAQgQAAgMgNgAgRgTQgGALAAANQAAAOAIAIQAGAHAJAAQAJAAAHgIQAJgIAAgOQACglgWAAQgOAAgIAOg");
	this.shape_8.setTransform(150.2,-227.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgGBFQgCgDAAgEIAAgLIAAgLIgCg4IgWgCQgIgBAAgJQAAgDADgEQACgCAEAAIAVABIAAgNIgBgMQAAgEADgCQACgEAFAAQAHAAACAPIAAAJIAAAGIAAAFIANgBQALAAADABQAGABAAAIQAAAEgDADQgCADgFAAIgEgBIgGAAIgMACIABA5IAAAEIAAAFQABAWgKgBQgDAAgEgCg");
	this.shape_9.setTransform(134.4,-229.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgKBGIABgjIABgjIAAgiIABgkQAAgKAIABQAKgBAAAKIAAAkIgBAiIgBAxIgBAWQgBAKgIgBQgJAAAAgKg");
	this.shape_10.setTransform(127,-230.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgIBHQgEgDAAgFIAAgRIAAgRIABgXIABgWQAAgEADgDQACgDAEAAQAEAAACADQADADAAAEIgBAWIgBAXIAAARIABARQAAAFgDADQgDADgDAAQgEAAgCgDgAgFg1QgEgEAAgEQAAgFAEgDQADgDAEgBQAEABAEADQADADAAAFQAAAEgDAEQgEADgEABQgEgBgDgDg");
	this.shape_11.setTransform(121.6,-230);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAWAuQgMAHgPAAQgNAAgIgGQgKgGgBgMQgEgaAAgTQAAgOADgQQABgJAIAAQAEAAADACQADADAAAEIgBAPIgCAPIABAbQABAMACAGIAHADIAGABQAMAAAPgEIgBgUIAAgSQAAgVACgQQABgJAJAAQAEABADACQACADAAAEIgBAlIAAAUIAAAVIAAAHIAAAGQAAAEgCADQgDADgEAAQgIAAgCgKg");
	this.shape_12.setTransform(113.4,-227.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgdBJQgDAFgFAAQgEAAgCgCQgDgDAAgEIABgIIAAgHIgBgfIAAgeIAAgbIAAgcQAAgFACgFQAEgGAFAAQAIAAAAAIIgBAFIAAADIgBAWIAAAZQAJgGAHgDQAIgDAGAAQAVABANAQQAMANAAAXQAAAWgOAPQgPAQgUAAQgPAAgMgGgAgPgDIgOAIIAAARIAAAPIAAAQIANAGQAGACAIAAQANAAAJgKQAJgKAAgPQAAgPgHgKQgIgJgNAAQgHAAgJAFg");
	this.shape_13.setTransform(102.6,-230.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgaA2QgPgFgBgKQAAgEADgDQAEgDADAAQAEAAAEAFQACACAJACIALABQAHAAAHgCQAJgDgBgGQABgNgTgFIgJgCQgNgDgFgEQgJgEABgLQAAgVASgJIASgGQANgDAGgDQAEgCAEAAQAFAAADADQACADAAAEIABAIIABAJQAAAEgCADQgDADgEAAQgGAAgBgEQgCgDgBgIIgWAHQgPAGgBAKIAHABQAVAEAKAHQARAKgBATQAAAQgNAIQgMAHgQAAQgNAAgLgFg");
	this.shape_14.setTransform(85.3,-228);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgIBHQgEgDAAgFIAAgRIAAgRIABgXIABgWQAAgEADgDQACgDAFAAQACAAADADQADADAAAEIgBAWIgBAXIAAARIABARQAAAFgDADQgDADgDAAQgEAAgCgDgAgFg1QgEgEAAgEQAAgFAEgDQADgDAEgBQAEABAEADQADADAAAFQAAAEgDAEQgEADgEABQgEgBgDgDg");
	this.shape_15.setTransform(78.1,-230);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAYAwIgDgWIgBgVIAAgJIAAgJQABgVgIAAQgLAAgJANQgJAMgFARIgBAKIgBAJIABAJIABAJQAAAEgDADQgDACgEAAQgFAAgCgCQgDgDAAgEIAAgJIgBgJIABgbIACgcIAAgJIAAgJQAAgFACgCQADgDAEAAQAJAAABANIAAALQAQgWARAAQAPAAAHAOQAEAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgCADQgEADgDAAQgJAAgBgJg");
	this.shape_16.setTransform(-67.9,-227.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAiAzIgGgfIgaAFIgaAFIgQAmQgEAFgFAAQgDAAgEgDQgDgDAAgEQAAgFAPgfQgBgCAAgDQgBgIAKgDQALgTARgcQAWglAGAAQAIAAACALIAHAhIAOBDIAFAPIADALQAAAEgDADQgCADgFAAQgIAAgHgXgAgMAHIAjgHIgIglg");
	this.shape_17.setTransform(-80.8,-229.8);

	this.instance_1 = new lib.INFINITIVE();
	this.instance_1.parent = this;
	this.instance_1.setTransform(6.9,-229.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(390));

	// Character
	this.instance_2 = new lib.SamFlipping();
	this.instance_2.parent = this;
	this.instance_2.setTransform(512.2,-98.7,0.905,0.905,0,0,0,43.2,49.9);
	this.instance_2._off = true;

	this.instance_3 = new lib.buffyrunanim();
	this.instance_3.parent = this;
	this.instance_3.setTransform(472.1,-181.5,0.363,0.363,0,0,0,3.3,-68.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(85).to({_off:false},0).to({scaleX:0.78,scaleY:0.78,x:-188.4,y:-83.1},16).to({_off:true},1).wait(3).to({_off:false,regX:43.3,scaleX:0.87,skewY:180,y:-102.3},0).to({x:0.6,y:-102.7},6).wait(1).to({scaleX:0.61},0).wait(1).to({scaleX:0.62,skewY:0,x:0.7},0).wait(1).to({scaleX:0.96,x:-8.9},0).to({x:-49.6,y:-173.7},2).to({rotation:30,x:-102.1,y:-194.7},4).to({x:-27.7,y:-183.5},2).to({x:60.5,y:-178.7},4).to({x:30.8,y:-132.5},2).to({x:8.3,y:-26.5},4).to({regX:43.4,regY:50,scaleX:0.29,scaleY:0.78,rotation:29.9,x:27.3,y:-28.2},1).to({scaleX:0.61,scaleY:0.78,rotation:0,skewX:29.8,skewY:-150.2,x:46.4,y:-30},1).to({regX:43.3,scaleX:0.94,scaleY:0.78,x:65.3,y:-31.8},1).to({regY:49.9,scaleX:0.92,scaleY:0.78,skewX:30,skewY:-150,x:191.6,y:-42.7},3).to({scaleX:0.97,scaleY:0.78,skewX:29.9,skewY:-150.1,x:186.9,y:-89.2},2).to({regX:43.2,scaleX:1.03,scaleY:0.78,skewX:30,skewY:-150,x:182.3,y:-135.7},2).to({scaleX:0.95,x:275.8,y:-98},5).to({regX:43.3,scaleX:1,x:465.9,y:-87.1},4).to({_off:true},1).wait(238));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(261).to({_off:false},0).to({scaleX:0.34,scaleY:0.34,x:-233.7,y:-169.6},15).to({_off:true},1).wait(113));

	// Line
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(4,1,1).p("ABLAAIiVAA");
	this.shape_18.setTransform(348.5,-63.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(4,1,1).p("AkNAAIIbAA");
	this.shape_19.setTransform(328.7,-63.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(4,1,1).p("AnSAAIOkAA");
	this.shape_20.setTransform(309,-63.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(4,1,1).p("AqVAAIUrAA");
	this.shape_21.setTransform(289.2,-63.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(4,1,1).p("AtZAAIazAA");
	this.shape_22.setTransform(269.4,-63.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(4,1,1).p("AwdAAMAg7AAA");
	this.shape_23.setTransform(249.6,-63.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(4,1,1).p("AzhAAMAnDAAA");
	this.shape_24.setTransform(229.9,-63.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(4,1,1).p("A2lAAMAtLAAA");
	this.shape_25.setTransform(210.1,-63.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(4,1,1).p("A5pAAMAzTAAA");
	this.shape_26.setTransform(190.3,-63.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(4,1,1).p("A8tAAMA5bAAA");
	this.shape_27.setTransform(170.6,-63.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(4,1,1).p("A/xAAMA/jAAA");
	this.shape_28.setTransform(150.8,-63.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(4,1,1).p("EAi2AAAMhFrAAA");
	this.shape_29.setTransform(131,-63.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(4,1,1).p("A6pBVICqipICgCfEgi1ABVIIMAAEAi2ABVMg9fAAA");
	this.shape_30.setTransform(131,-72.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(4,1,1).p("A6pF8ICqiqICgCgEgi1AF8IIMAAA4JDSIAApNEAi2AF8Mg9fAAA");
	this.shape_31.setTransform(131,-101.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(4,1,1).p("A35mFIm4AAA6pGGICqiqICgCgEgi1AGGIIMAAA4JDcIAApNEAi2AGGMg9fAAA");
	this.shape_32.setTransform(131,-102.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(4,1,1).p("A2hj0IpKAAIkikiA5RIXICqiqICgCgEghdAIXIIMAAA2xFtIAApNEAkOAIXMg9fAAA");
	this.shape_33.setTransform(122.2,-117.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(4,1,1).p("A5RIXICqiqICgCgEghdAIXIIMAAA2xFtIAApNAxLj0IugAAIkikiEAkOAIXMg9fAAA");
	this.shape_34.setTransform(122.2,-117.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(4,1,1).p("A5RIXICqiqICgCgEghdAIXIIMAAA2xFtIAApNAqRj0I1aAAIkikiEAkOAIXMg9fAAA");
	this.shape_35.setTransform(122.2,-117.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(4,1,1).p("AvVH/IAAAxAvVCCIAAF9Ip8AAICqiqICgCgEAkOAH/MgzjAAAA5RH/IoMAAA2xFVIAApOAqRkNI1aAAIkiki");
	this.shape_36.setTransform(122.2,-114.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(4,1,1).p("AvVF3IAAFAAvVgEIAAF7Ip8AAICqiqICgCgEAkOAF3Q5yAA5xAAA5RF3IoMAAAqRmUI1aAAIkikiA2xDNIAApN");
	this.shape_37.setTransform(122.2,-101.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(4,1,1).p("Ahii0IDFFp");
	this.shape_38.setTransform(187.1,-83);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(4,1,1).p("AvVF3IAAFAAvVgEIAAF7Ip8AAICqiqICgCgEAkOAF3MgzjAAAA5RF3IoMAAA2xDNIAApNAqRmUI1aAAIkiki");
	this.shape_39.setTransform(122.2,-101.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FF00FF").ss(4,1,1).p("AKtAAI1ZAA");
	this.shape_40.setTransform(-12,-141.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FF00FF").ss(4,1,1).p("AC5IXICqiqICgCgAjgj0IkikiAFZFtIAApN");
	this.shape_41.setTransform(-58,-117.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(4,1,1).p("AwtAeIAAFAAwtldIAAF7EAi2AAeMgzjAAAIp8AAIoMAA");
	this.shape_42.setTransform(131,-66.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(4,1,1).p("AvVF3IAAFAAvVgEIAAF7Ip8AAICqiqICgCgEAkOAF3MgzjAAAA5RF3IoMAAAqRmUI1aAAIkikiA2xDNIAApN");
	this.shape_43.setTransform(122.2,-101.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FF00FF").ss(4,1,1).p("AC5IXICqiqICgCgAFZFtIAApNAjgj0Ikiki");
	this.shape_44.setTransform(-58,-117.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_18}]},88).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},15).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},3).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},5).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},5).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},11).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_38}]},45).to({state:[{t:this.shape_43},{t:this.shape_38}]},5).to({state:[{t:this.shape_42},{t:this.shape_44},{t:this.shape_40},{t:this.shape_38}]},2).to({state:[{t:this.shape_39},{t:this.shape_38}]},5).to({state:[{t:this.shape_42},{t:this.shape_44},{t:this.shape_40},{t:this.shape_38}]},2).to({state:[{t:this.shape_43},{t:this.shape_38}]},39).to({state:[{t:this.shape_42},{t:this.shape_44},{t:this.shape_40},{t:this.shape_38}]},99).to({state:[{t:this.shape_43},{t:this.shape_38}]},3).to({state:[{t:this.shape_42},{t:this.shape_44},{t:this.shape_40},{t:this.shape_38}]},2).to({state:[{t:this.shape_39},{t:this.shape_38}]},3).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_38}]},2).wait(41));

	// To
	this.instance_4 = new lib.Tocaps();
	this.instance_4.parent = this;
	this.instance_4.setTransform(47,32.5,1,1,0,0,0,17.2,19.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(79).to({_off:false},0).wait(73).to({rotation:45,x:-82.8,y:-170.6},12).wait(43).to({alpha:0},6).wait(27).to({rotation:0,x:60.5,y:32.5,alpha:1},0).wait(57).to({rotation:45,x:-82.5,y:-171.1},10).wait(83));

	// run
	this.instance_5 = new lib.tumble("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(109.4,32.4,1,1,0,0,0,41.9,19.4);
	this.instance_5._off = true;

	this.instance_6 = new lib.run();
	this.instance_6.parent = this;
	this.instance_6.setTransform(101.7,32.5,1,1,0,0,0,35.6,19.4);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(79).to({_off:false},0).wait(77).to({startPosition:0},0).to({x:-17.9,y:-159.7},12).wait(39).to({startPosition:0},0).to({alpha:0},6).to({_off:true},27).wait(150));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(240).to({_off:false},0).wait(63).to({x:-25.9,y:-161.7},12).wait(75));

	// is
	this.instance_7 = new lib.is();
	this.instance_7.parent = this;
	this.instance_7.setTransform(166.2,32.5,1,1,0,0,0,11.7,19.4);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(79).to({_off:false},0).wait(81).to({x:107.7,y:-82.7},12).wait(35).to({alpha:0},6).wait(27).to({x:138.1,y:32.5,alpha:1},0).wait(69).to({x:108.6,y:-84.3},10).wait(71));

	// hard
	this.instance_8 = new lib.fun("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(202.4,32.4,1,1,0,0,0,21.5,19.4);
	this.instance_8._off = true;

	this.instance_9 = new lib.hard();
	this.instance_9.parent = this;
	this.instance_9.setTransform(181.8,32.5,1,1,0,0,0,29.1,19.4);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(79).to({_off:false},0).wait(87).to({startPosition:0},0).to({x:276.7,y:-82.5},12).wait(29).to({startPosition:0},0).to({alpha:0},6).to({_off:true},27).wait(150));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(240).to({_off:false},0).wait(75).to({x:277.8,y:-84.3},10).wait(65));

	// sentence
	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#E302E3").s().p("AgKALQgEgFAAgGQAAgFAEgFQAEgEAGAAQAHAAAEAEQAEAFAAAFQAAAGgEAFQgEAEgHAAQgGAAgEgEg");
	this.shape_45.setTransform(225.2,42.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#E302E3").s().p("AAeA7IgEgaQgBgOAAgNIAAgLIABgLQAAgbgKABQgOgBgMARQgLAPgGAVIgBAMIgBAMIABALIAAALQAAAFgCAEQgEADgFAAQgGAAgDgDQgEgEAAgFIAAgLIgBgLIACgiIACgjIAAgLIgBgMQAAgFAEgEQADgDAFAAQALAAABAQIAAAOQAVgbAVAAQATAAAIARQAFAMABAWIAAAMIAAALQAAAKACAQQADAQAAAKQAAAGgDADQgEADgFAAQgLAAgBgMg");
	this.shape_46.setTransform(215.7,36.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#E302E3").s().p("AAbA6QgPAIgTAAQgQAAgKgHQgMgIgCgPQgFggAAgYQAAgRAEgVQABgLAKAAQAGAAADADQAEAEAAAFIgCASIgCATIABAiQACAOACAJIAIADIAIACQAPAAATgGIAAgZIgBgWQAAgbADgTQABgLAKAAQAGAAADADQAEAEAAAFIgDAuIAAAZIABAbIAAAIIAAAIQAAAFgDAEQgEADgFAAQgJAAgDgMg");
	this.shape_47.setTransform(202.4,36.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#E302E3").s().p("AgTBoQgDgDgBgFIAAgCQADgQAAgTIAAghIAAgjIgUACQgMAAAAgNQAAgMAVAAIAMAAIACgTQADgbAKgNQAMgPAcAAQARAAAAAMQAAALgQAAQgeAAgDApIgBAIIAbgCQAUAAAAANQAAAIgKACIgKABQgFAAgXABIgBAbIABAXIAAAWQABAYgDANQgCAKgIgBQgGAAgDgDg");
	this.shape_48.setTransform(189.3,33.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#E302E3").s().p("AghBEQgTgHAAgMQAAgFAEgEQADgEAFAAQAEAAAGAHQADADAKABIAOABQAJAAAIgCQALgEAAgHQAAgQgXgHIgLgDQgRgDgGgFQgKgFAAgOQAAgaAYgKQAHgEAPgEQAQgFAHgEQAFgBAGAAQAFgBAEAEQADADAAAGIACAKIABAKQAAAGgDADQgEAEgFAAQgHAAgCgFQgCgDgBgKIgdAJQgSAIAAALIAHACQAbAFAOAJQATAMAAAYQAAAUgRAKQgOAIgVAAQgQAAgOgFg");
	this.shape_49.setTransform(169.3,36);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#E302E3").s().p("AgLBYQgEgDAAgFIAAgWIAAgWIABgdIABgcQAAgFADgDQAEgEAFAAQAEAAAEAEQADADAAAFIgBAcIgBAdIAAAWIAAAWQAAAFgDADQgDAEgFAAQgFAAgDgEgAgHhDQgEgEAAgGQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAGQAAAGgEAEQgEAFgGAAQgFAAgEgFg");
	this.shape_50.setTransform(160.3,33.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#E302E3").s().p("AgpA1QgTgPAAgcQAAgfAQgVQAQgYAcAAQAUABANAGQAPAJAAARQAAAMgOAKIgZANIguAWQAHAKAKAGQAKAEANAAQAIAAAMgDQAOgDAEgHQAEgHAFAAQAEAAAEAEQADADAAAEQAAANgWAKQgTAJgRAAQgbAAgRgOgAgYggQgKALgFAXIAlgRQAVgLAKgIQgLgKgSABQgOgBgKAMg");
	this.shape_51.setTransform(142.5,36.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#E302E3").s().p("AgNBYIACgsIABgsIAAgsIABgsQAAgMALAAQAMAAAAAMIAAAsIgBAsIgCA8IgBAcQgBANgKAAQgMAAAAgNg");
	this.shape_52.setTransform(132,33);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#E302E3").s().p("AglBcQgEAFgFAAQgFAAgDgDQgDgDAAgFIABgJIAAgKIgBgnIgBglIABgiIAAgiQAAgHACgGQAFgIAGAAQAJAAAAALIAAAFIgBAFIAAAbIAAAfQALgHAJgEQAJgEAIAAQAbAAAPAVQAQASAAAbQAAAcgSATQgSAUgaAAQgSAAgQgHgAgTgFQgEADgNAIIAAAVIAAATIAAAUIAQAHQAIADAJAAQARAAALgNQAMgMAAgTQAAgSgKgMQgJgMgRAAQgJAAgLAFg");
	this.shape_53.setTransform(121.4,33.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#E302E3").s().p("AgGBIQgEgEAAgFQAAgPgDgdQgDgcAAgOQAAgNgDgHQgJADgJAJIgOAQIgGAIIgCAVIgBAVIABAKIABAKQAAAFgDADQgEADgFAAQgOAAAAgfIABgWIACgVIgBgTIgCgUQAAgbANAAQAFAAAEAEQAEAEAAAFIgBAHIgBAHIABANQAGgNAMgKQANgLAIAAQATAAAHATQAGgJAKgEQAJgFAMAAQAUAAAIAWQABAFAEAeQADAUAFAxQABAFgEADQgEADgFAAQgKAAgBgKQgDgOgCgYIgEglQgBgIgDgJQgEgLgFAAQgFAAgMAIQgMAHgDAFQgBALABAMIAEAfQACATAAANQAAAFgDAEQgEADgFAAQgEAAgDgDg");
	this.shape_54.setTransform(104.2,36.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#E302E3").s().p("AAbA6QgPAIgTAAQgQAAgKgHQgMgIgCgPQgFggAAgYQAAgRAEgVQABgLAKAAQAGAAADADQAEAEAAAFIgCASIgCATIABAiQACAOACAJIAIADIAIACQAPAAATgGIAAgZIgBgWQAAgbADgTQABgLAKAAQAGAAADADQAEAEAAAFIgDAuIAAAZIABAbIAAAIIAAAIQAAAFgDAEQgEADgFAAQgJAAgDgMg");
	this.shape_55.setTransform(87.9,36.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#E302E3").s().p("AgHBWQgEgDAAgFIABgOIAAgOIgChGIgbgCQgLgCAAgKQAAgGADgDQADgEAFAAIAaACIAAgQIgBgQQAAgFADgDQAEgDAFAAQAKAAACARIAAALIAAAHIAAAIIARgCQANAAAEABQAHADAAAJQAAAFgDAEQgDADgGAAIgGAAIgGAAIgQABIACBIIAAAFIAAAGQABAbgOAAQgDAAgEgDg");
	this.shape_56.setTransform(75.4,34.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#E302E3").s().p("AgkA0QgQgRgBgdQgBgaAPgVQARgZAdAAQAZAAAMAWQAKASAAAaQAAAagOATQgQAWgZAAQgUAAgPgPgAgVgYQgIAOAAAQQAAASAKAKQAIAIAKAAQAMAAAJgJQALgKAAgSQACgugbAAQgRAAgKARg");
	this.shape_57.setTransform(55.3,36.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#E302E3").s().p("AgIBaQgEgEAAgFIABgFIABgGIgBgSIgBgSQAAgSgDgeIgDgxIgLAAQgbAAgPgEQgKgDAAgJQAAgFADgEQAEgEAFAAIAUACIAUACIAWAAIAVgBIAcABIAcACQAFAAAEADQADAEAAAFQAAAGgDADQgEAEgFAAIgcgCIgcgBIgIAAIADA3QADAiAAAUIABANIAAANQAAAIgCAGQgEAIgHAAQgEAAgEgDg");
	this.shape_58.setTransform(41.5,33.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#E302E3").s().p("AgKALQgEgFAAgGQAAgFAEgFQAFgEAFAAQAGAAAFAEQAEAFAAAFQAAAGgEAFQgFAEgGAAQgFAAgFgEg");
	this.shape_59.setTransform(212,42.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#E302E3").s().p("AgrBUQgRgSAAgbQAAggASgTQAQgUAbAAQAOAAAIAFIAMAIQABgzACgSQACgLAJAAQAMAAAAAMQAAARgFA6QgCARABASQgBAoAEAVIAAADQABAFgEADQgDADgFAAQgIAAgDgLQgJAHgJADQgJADgKAAQgZAAgRgQgAgcACQgLAMAAAZQAAAQAMALQALALAPAAQAKAAAGgEQAFgCAJgIIADgDIAAgWIAAgOIAAgOQgEgKgIgEQgHgFgLAAQgUAAgKALg");
	this.shape_60.setTransform(201.4,33.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#E302E3").s().p("AgvA4IAAhUIABgNIAAgMQAAgMALAAQAMAAAAAVQAXgYAcAAQAKAAAEAIQAFAHABAQIAAAIQgBAPgMAAQgLAAAAgMIAAgIIAAgKQgUACgKAIQgKAJgIAQIABBBQAAANgNAAQgLAAAAgNg");
	this.shape_61.setTransform(188.5,36.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#E302E3").s().p("AAnA+IgIgIIgVAJQgJADgFAAQgcAAgNgQQgNgPAAgfQAAgdAVgVQAUgVAbAAQALAAANAGQARAGAAAKQAAADgDADIgCAPIAAAbQgBAPADAJIAHAVIADAGIABADQAAAEgEAEQgDADgEAAQgDAAgGgGgAgUgeQgNAQAAATQAAAUAHAKQAHAKAOAAQALAAAIgEIAMgKQgEgfAAgQIABgLIACgOIgIgDIgFgBQgSAAgOAPg");
	this.shape_62.setTransform(175.7,36.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#E302E3").s().p("AAhBdQgCgKgDgTQgCgSAAgLIABgKIAAgJQAAgWgMAAQgPAAgMANQgGAHgLAUQAAAvgEAIQgDAIgHAAQgFAAgEgDQgEgEAAgFIACgFQABgDAAgPIAAgSIABhZIAAgUIgBgMIgBgMQAAgFAEgDQADgEAFAAQAKAAACALQACAMAAAKIgBAaQgBAOAAANIAAALQAKgOAMgGQAKgHANAAQAUAAAIANQAFAKABAVIABAXIADAZQABAPACALIABADQAAAFgDAEQgEADgFAAQgJAAgDgJg");
	this.shape_63.setTransform(162.2,33.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#E302E3").s().p("AAeA7IgDgaQgCgOgBgNIABgLIABgLQAAgbgLABQgNgBgLARQgLAPgHAVIgBAMIgBAMIABALIABALQgBAFgDAEQgDADgGAAQgEAAgEgDQgDgEAAgFIgBgLIgBgLIACgiIABgjIAAgLIAAgMQAAgFADgEQAEgDAFAAQALAAABAQIABAOQAUgbAUAAQAUAAAIARQAFAMAAAWIAAAMIAAALQABAKACAQQADAQAAAKQAAAGgEADQgDADgGAAQgKAAgBgMg");
	this.shape_64.setTransform(114.5,36.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#E302E3").s().p("AguA4IAAhUIAAgNIAAgMQAAgMALAAQAMAAAAAVQAXgYAcAAQAKAAAFAIQAEAHAAAQIAAAIQgBAPgLAAQgKAAAAgMIAAgIIgBgKQgTACgLAIQgLAJgHAQIAABBQAAANgMAAQgKAAAAgNg");
	this.shape_65.setTransform(89.1,36.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_58,p:{x:41.5}},{t:this.shape_57,p:{x:55.3}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50,p:{x:160.3}},{t:this.shape_49,p:{x:169.3}},{t:this.shape_48},{t:this.shape_47,p:{x:202.4}},{t:this.shape_46},{t:this.shape_45}]},61).to({state:[]},2).to({state:[{t:this.shape_58,p:{x:41.5}},{t:this.shape_57,p:{x:55.3}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50,p:{x:160.3}},{t:this.shape_49,p:{x:169.3}},{t:this.shape_48},{t:this.shape_47,p:{x:202.4}},{t:this.shape_46},{t:this.shape_45}]},2).to({state:[]},2).to({state:[{t:this.shape_58,p:{x:41.5}},{t:this.shape_57,p:{x:55.3}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50,p:{x:160.3}},{t:this.shape_49,p:{x:169.3}},{t:this.shape_48},{t:this.shape_47,p:{x:202.4}},{t:this.shape_46},{t:this.shape_45}]},2).to({state:[{t:this.shape_58,p:{x:54.6}},{t:this.shape_57,p:{x:68.4}},{t:this.shape_65},{t:this.shape_47,p:{x:101.2}},{t:this.shape_64},{t:this.shape_50,p:{x:132}},{t:this.shape_49,p:{x:141}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59}]},151).to({state:[]},2).to({state:[{t:this.shape_58,p:{x:54.6}},{t:this.shape_57,p:{x:68.4}},{t:this.shape_65},{t:this.shape_47,p:{x:101.2}},{t:this.shape_64},{t:this.shape_50,p:{x:132}},{t:this.shape_49,p:{x:141}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59}]},2).to({state:[]},2).to({state:[{t:this.shape_58,p:{x:54.6}},{t:this.shape_57,p:{x:68.4}},{t:this.shape_65},{t:this.shape_47,p:{x:101.2}},{t:this.shape_64},{t:this.shape_50,p:{x:132}},{t:this.shape_49,p:{x:141}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59}]},2).wait(162));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-246.8,442.9,44.9);


(lib.fcb_states = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{up:0,press:1,uncheckedDisabled:2,checkedDisabled:3,checkedPress:4,checkedEnabled:5});

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
(lib.inf_Scene5a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene5a:0,scene5a_repeat:389});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
		
	}
	this.frame_4 = function() {
		playSound("infinitiveisbuiltonacarat");
	}
	this.frame_69 = function() {
		playSound("totumble");
	}
	this.frame_224 = function() {
		playSound("torunishard");
	}
	this.frame_399 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(65).call(this.frame_69).wait(155).call(this.frame_224).wait(175).call(this.frame_399).wait(1));

	// Lesson
	this.instance = new lib.ToRunishard_Scene();
	this.instance.parent = this;
	this.instance.setTransform(265.7,309.5,1,1,0,0,0,125.7,19.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0066").s().p("AgZAxQgKgKAAgQQAAgTAKgLQAKgMAQAAQAIAAAFADIAGAFQABgeACgKQABgHAFAAQAHAAAAAHIgDAsIgBAUQAAAYACAMIAAACQAAABAAAAQAAABAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgFAAgCgGQgFAEgGACQgFACgFAAQgPAAgKgKgAgQABQgGAIAAANQAAAKAGAHQAHAGAJAAQAFAAAEgCIAIgGIACgCIAAgNIAAgIIAAgJQgDgFgEgCQgFgDgGAAQgLAAgGAGg");
	this.shape.setTransform(366.6,29.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0066").s().p("AgYAfQgLgJAAgQQAAgSAKgMQAJgOAQAAQAMAAAHAEQAKAFAAAKQAAAHgJAGIgPAHIgaANQAEAGAGADQAGADAHAAQAFAAAGgCQAJgCACgEQADgEADAAQAAAAABAAQABABAAAAQABAAAAAAQABABAAAAQABABAAAAQAAAAAAABQABAAAAABQAAABAAAAQAAAIgNAGQgLAFgKAAQgPAAgLgIgAgOgTQgGAHgCANIAWgKQAMgGAFgFQgGgFgLAAQgIAAgGAGg");
	this.shape_1.setTransform(358.4,31.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0066").s().p("AgDAqQgCgCAAgDIgCgaIgBgYQgBgIgCgEQgFACgFAFIgIAKIgEAEIgBAMIgBAMIABAGIAAAGQAAADgBACQgDACgDAAQgIAAAAgTIABgMIABgMIgBgMIgBgLQABgQAGAAQADAAADACQACACAAADIAAAFIgBAEIAAAHQAFgHAGgGQAIgHAFAAQALAAADAMQAEgGAGgCQAFgDAIAAQALAAAFANIADAUIAFAoQAAADgCACQgCACgDAAQgHAAAAgGIgDgWIgDgWIgCgJQgCgHgDAAQgDAAgHAFQgHAEgCADIAAANIADASIABATQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_2.setTransform(348.7,31.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0066").s().p("AgDAqQgCgCAAgDIgCgaIgCgYQABgIgDgEQgFACgFAFIgIAKIgEAEIgBAMIgBAMIABAGIAAAGQAAADgCACQgCACgCAAQgJAAAAgTIABgMIABgMIgBgMIAAgLQgBgQAIAAQACAAADACQACACAAADIAAAFIgBAEIAAAHQAFgHAHgGQAHgHAFAAQALAAAEAMQAEgGAFgCQAGgDAGAAQANAAAEANIACAUIAGAoQAAADgCACQgDACgDAAQgFAAgCgGIgCgWIgCgWIgDgJQgCgHgDAAQgCAAgIAFIgJAHIABANIABASIACATQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_3.setTransform(337.3,31.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0066").s().p("AAXAlIgFgFIgMAFQgFACgCAAQgRAAgIgJQgIgJAAgTQAAgQANgMQAMgNAPAAQAGAAAIAEQAKAEAAAFQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABIgBAJIAAAPIABAOIAFAMIABAEIAAABQAAADgBACQgBABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQgCAAgDgDgAgLgRQgIAJAAALQAAAMAEAGQAEAGAJAAQAFAAAFgDIAIgFQgDgTAAgJIABgHIABgHIgFgCIgDgBQgKAAgIAJg");
	this.shape_4.setTransform(327.8,31.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0066").s().p("AgbAhIAAgyIAAgHIAAgHQAAgHAHAAQAGAAABAMQANgNAQAAQAGAAADAEQADAEAAAJIAAAFQgBAJgGAAQgHAAABgHIgBgFIAAgGQgMABgFAFQgGAFgEAJIAAAnQgBAHgGAAQgHAAAAgHg");
	this.shape_5.setTransform(320.7,31.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0066").s().p("AgYA3QgJgBAAgGQAAgGAGAAIAJABQAGABAHAAQANAAAFgNQAEgJAAgSQgEAHgFAEQgGADgGAAQgNABgIgKQgIgJAAgNQAAgTALgMQAMgMASAAQAHAAAFACQAEACADADQAHAAAAAIIgBAOIgCANIgCAXQAAAPgDAJQgDAMgHAGQgJAGgPAAQgKAAgGgCgAgMgjQgHAIAAANQAAALAEAEQAEAGAIAAQAGAAAHgIQAGgHABgIIADgYIgGgEIgGAAQgNAAgHAJg");
	this.shape_6.setTransform(312.9,33.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0066").s().p("AAXAlIgFgFIgMAFQgFACgCAAQgSAAgHgJQgIgJAAgTQAAgQANgMQAMgNAPAAQAGAAAIAEQAKAEAAAFQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABIgBAJIAAAPIABAOIAFAMIABAEIAAABQAAADgBACQgBABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAgEgDgAgLgRQgIAJAAALQAAAMAEAGQAEAGAJAAQAFAAAFgDIAHgFQgCgTAAgJIABgHIABgHIgFgCIgDgBQgKAAgIAJg");
	this.shape_7.setTransform(305.4,31.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0066").s().p("AgGA0QgCgCAAgEIgBgMIAAgNIABgRIABgQQAAgDACgCQABgCAEAAQACAAACACQACACAAADIgBAQIgBARIAAANIABAMQAAAEgCACQgCACgCAAQgDAAgCgCgAgEgnQgCgCAAgDQAAgEACgDQADgCACAAQAEAAACACQADADAAAEQAAADgDACQgCADgEAAQgCAAgDgDg");
	this.shape_8.setTransform(299.7,30);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0066").s().p("AgWA6QgIgCgEgDIgBAAQgCAAgDgCQgCgDAAgDIABgWIAAgXIAAgYIAAgZQAAgDADgDQADgDADAAIAMAEIAMAGQAUAHAOAPQARARAAATQAAAMgGAMQgGALgKAHQgLAHgTAAIgNgBgAgagTIAAAUIgBAnIABABQAHAEAJAAQAPAAAIgFQAHgFAEgIQAEgIAAgJQABgTgXgOQgGgFgagMg");
	this.shape_9.setTransform(292.5,30.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0066").s().p("AgcAyQgNgGgBgLQAAgDACgCQADgCADAAQADAAADAEQADAGADABQAGAEAMAAQAKAAAKgEQAMgGAAgLQAAgKgKgFQgJgEgMgBQgLAAgIgEQgKgFAAgLQAAgNAOgLQAOgKAOAAQAHAAAJADQALADAAAFQAAAGgGAAIgKgBQgIgCgDAAQgLAAgHAGQgJAFAAAIQAAAGALACIAOACQARABAJAJQAJAIAAAMQAAARgQAKQgOAJgRAAQgNAAgLgFg");
	this.shape_10.setTransform(277.5,30.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0066").s().p("AgeA3QgIgGABgXIAAgKIAAgMIAAgEQAAAAAAAAQAAAAAAgBQAAAAAAgBQABgBAAAAIABgfIgBgHIAAgIQAAgIAHAAQADAAACABIAQgDIAOgBQASAAAKAEQAEACAAAFQAAACgCADQgCADgCAAIgDgBQgMgDgLgBIgMABIgPAEIABAHIgBAcIAegDIARgCQADAAACACQACACABAEQgBAGgGAAIgSACIgfACIgBAKIAAAJQAAAQACACQACACAKAAIAMAAIANAAIAEgBIAFAAQAHAAABAHQgBAHgGABQgHABgVAAQgWAAgGgGg");
	this.shape_11.setTransform(267.9,30);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0066").s().p("AgMA0QgJgVgKgoIgGgUQgEgPAAgFQAAgDACgCQACgCADAAQAFAAACAGIADAMIAHAZQAGAaAHATIAAgBIATgzIAGgSQAEgLAEgFQADgDADAAQADAAACACQACACAAAEIgBAEIgHAOIgGAQIgTAzIgIASQgBAEgEAAQgGAAgCgGg");
	this.shape_12.setTransform(258.8,30.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0066").s().p("AgfA1QgCgCAAgDQAAgEACgCQACgCADAAIAQgBIAAgOIAAgMIAAgMQAAgPACgZIgKAAIgJAAQgDAAgCgCQgCgCAAgDQAAgHAGAAIAWgBQANAAAWADQAGABAAAHQAAADgCACQgCACgDAAIgMgBIgLgCIgCAnIAAANIABAMIgBAMIAXAAQADAAACACQACACAAADQAAAEgCACQgCACgDAAIgMAAIgMAAIgNACIgPABQgDAAgCgCg");
	this.shape_13.setTransform(249.6,30.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0066").s().p("AgEA1QgDgCAAgDIABgEIAAgDIAAgKIgBgLIgBgcIgCgdIgHAAQgQAAgJgCQgFgBAAgGIABgFQADgDADABIALABIAMABIANAAIAMgBIARABIAQABQADAAACACQACACAAADQAAADgCADQgCACgDAAIgQgBIgRgBIgFAAIACAgIACAfIAAAIIABAIQAAAFgCADQgCAFgEAAQgCAAgCgCg");
	this.shape_14.setTransform(241.2,29.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0066").s().p("AgfA1QgCgCAAgDQAAgEACgCQACgCADAAIAQgBIAAgOIAAgMIAAgMQAAgPACgZIgKAAIgJAAQgDAAgCgCQgCgCAAgDQAAgHAGAAIAWgBQANAAAWADQAGABAAAHQAAADgCACQgCACgDAAIgMgBIgLgCIgCAnIAAANIABAMIgBAMIAXAAQADAAACACQACACAAADQAAAEgCACQgCACgDAAIgMAAIgMAAIgNACIgPABQgDAAgCgCg");
	this.shape_15.setTransform(231.5,30.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0066").s().p("AgwA4QgBgCAAgDIAAgJIABgKIAAgMIAAgOIAAgOIAAgNIgBgOIgBgNQAAgEACgDQADgCAEAAQAEAAAGAIQARAbAOASQARATAUATIAAgJIgBgJQAAgegCgSIgBgIIgCgIQAAgIAIAAQAMAAAAAuIAAAYIAAAXIgBAMQgCAHgGAAQgEAAgFgGQgegbgkgzIgBAQIAAAQIAAASIABASQAAASgIABQgEgBgDgCg");
	this.shape_16.setTransform(221.8,30.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0066").s().p("AgfA1QgCgCAAgDQAAgEACgCQACgCADAAIAQgBIAAgOIAAgMIAAgMQAAgPACgZIgKAAIgJAAQgDAAgCgCQgCgCAAgDQAAgHAGAAIAWgBQANAAAWADQAGABAAAHQAAADgCACQgCACgDAAIgMgBIgLgCIgCAnIAAANIABAMIgBAMIAXAAQADAAACACQACACAAADQAAAEgCACQgCACgDAAIgMAAIgMAAIgNACIgPABQgDAAgCgCg");
	this.shape_17.setTransform(211.8,30.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0066").s().p("AgiA6QgCgCAAgDIABgqIAAgqIAAgJIAAgKQAAgDACgCQACgCADAAIAEABIAQgCIALgBQAJAAAKACQAPAEAAAFQAAADgCACQgCACgDAAIgDAAQgJgDgPAAIgKAAIgNACIgBAfQAOgDAHAAIAWABQAGABAAAGQAAAEgBACQgCABgEAAIgLgBIgKAAQgFAAgQAEIgBAxQAAADgCACQgCACgDAAQgDAAgCgCg");
	this.shape_18.setTransform(203.8,30.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0066").s().p("AgwA4QgCgCAAgDIABgJIAAgKIAAgMIABgOIAAgOIgBgNIgBgOIAAgNQAAgEACgDQADgCAEAAQAEAAAFAIQATAbANASQARATAUATIAAgJIAAgJQAAgegDgSIgCgIIgBgIQAAgIAIAAQAMAAAAAuIAAAYIgBAXIgBAMQgBAHgGAAQgEAAgGgGQgdgbgkgzIgBAQIAAAQIAAASIABASQAAASgIABQgEgBgDgCg");
	this.shape_19.setTransform(193.2,30.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0066").s().p("AgfA1QgCgCAAgDQAAgEACgCQACgCADAAIAQgBIAAgOIAAgMIAAgMQAAgPACgZIgKAAIgJAAQgDAAgCgCQgCgCAAgDQAAgHAGAAIAWgBQANAAAWADQAGABAAAHQAAADgCACQgCACgDAAIgMgBIgLgCIgCAnIAAANIABAMIgBAMIAXAAQADAAACACQACACAAADQAAAEgCACQgCACgDAAIgMAAIgMAAIgNACIgPABQgDAAgCgCg");
	this.shape_20.setTransform(183.2,30.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(400));

	// main
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,53.9,1,1,0,0,0,54,40.5);

	this.instance_1 = new lib.Bk();
	this.instance_1.parent = this;
	this.instance_1.setTransform(277.7,192,0.908,1,0,0,0,256.7,150.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.UI}]}).wait(400));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,200.6,534,398.7);
// library properties:
lib.properties = {
	id: 'C38C8B022E6FD045BCB2B50428F56C4C',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/bgmusic.mp3", id:"bgmusic"},
		{src:"sounds/bgmusic2.mp3", id:"bgmusic2"},
		{src:"sounds/bgmInf.mp3", id:"bgmInf"},
		{src:"sounds/_3a.mp3", id:"_3a"},
		{src:"sounds/_4b.mp3", id:"_4b"},
		{src:"sounds/wrong_answer.mp3", id:"wrong_answer"},
		{src:"sounds/cowbell_3times.mp3", id:"cowbell_3times"},
		{src:"sounds/SENameofIdea.mp3", id:"SENameofIdea"},
		{src:"sounds/Flying.mp3", id:"Flying"},
		{src:"sounds/_7a.mp3", id:"_7a"},
		{src:"sounds/highclick.mp3", id:"highclick"},
		{src:"sounds/infinitiveisbuiltonacarat.mp3", id:"infinitiveisbuiltonacarat"},
		{src:"sounds/lowclick.mp3", id:"lowclick"},
		{src:"sounds/parrotmove1.mp3", id:"parrotmove1"},
		{src:"sounds/parrotmove2.mp3", id:"parrotmove2"},
		{src:"sounds/SENameOfPerson.mp3", id:"SENameOfPerson"},
		{src:"sounds/_6b.mp3", id:"_6b"},
		{src:"sounds/torunishard.mp3", id:"torunishard"},
		{src:"sounds/totumble.mp3", id:"totumble"},
		{src:"sounds/_2a.mp3", id:"_2a"}
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
an.compositions['C38C8B022E6FD045BCB2B50428F56C4C'] = {
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