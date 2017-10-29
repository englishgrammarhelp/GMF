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


(lib.Symbol104 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF33").s().p("AAqBWIgEgmQgDgVAAgSIABgPIABgRQAAgmgOAAQgUAAgRAXQgQAVgKAgIgBARIgBARIABAQIABAPQAAAJgFAFQgFAEgHAAQgIAAgEgEQgFgFAAgJIgCgPIAAgQQgBgSADggIACgxIgBgRIAAgRQAAgIAFgEQAFgGAHAAQARAAABAYIABAUQAegnAeAAQAbAAAMAZQAHAQABAhIAAAhQAAAOAEAYQADAWAAAPQAAAIgEAEQgGAGgHAAQgPAAgDgRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.7,-10.2,15.5,20.5);


(lib.Symbol103 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF33").s().p("AgKB7QgGgEAAgGIABgUIAAgUIgDhnIgngCQgQgCAAgPQAAgJAFgFQAEgFAIAAIAlADIgBgXIgBgXQAAgHAFgFQAGgEAHgBQAPABADAZIAAAQIAAAVIAZgDQASAAAFACQALAEAAANQAAAHgFAFQgEAFgIAAIgJAAIgIAAIgYACIAEB4QAAAngTAAQgGAAgFgGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.4,-12.8,14.9,25.7);


(lib.Symbol102 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF33").s().p("AgQB/QgGgFAAgHIAAggIAAggIABgpQACgXAAgRQAAgIAFgFQAEgFAIAAQAHAAAFAFQAEAFAAAIQAAARgBAXQgCAZAAAQIABAgIAAAgQAAAHgFAFQgFAFgGAAQgIAAgEgFgAgLhgQgGgGAAgJQAAgIAGgGQAGgGAIAAQAIAAAGAGQAHAGgBAIQABAJgHAGQgGAGgIAAQgIAAgGgGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.3,-13.2,4.7,26.5);


(lib.Symbol101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF33").s().p("AgxBiQgbgKAAgSQABgGAFgGQAGgFAGAAQAGAAAJAIQAEAEAPADQALACAIAAQAOAAALgDQAQgFAAgMQAAgXghgJIgRgEQgXgFgLgHQgNgIAAgVQgBgkAjgQQAKgEAWgIQAYgGAKgFQAHgCAJAAQAHgBAFAFQAFAFgBAIQAAAFADAKQACAKABAEQAAAJgGAEQgFAGgHgBQgKABgDgHQgDgFgCgOQgNADgbAKQgcALAAARIAKACQAnAIAUAMQAcASAAAiQAAAdgYAPQgUAMgfgBQgXAAgVgHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.6,-10.5,15.3,21.1);


(lib.Symbol100 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF33").s().p("Ag0BLQgYgYgBgpQgBgnAVgeQAZglArABQAjgBASAhQAOAaAAAkQgBAngUAcQgWAegkAAQgeAAgVgVgAgfgjQgLAUAAAZQAAAZAOAOQALAMAQAAQARAAANgNQAPgPABgaQADhDgoABIgBgBQgYAAgOAZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.7,-9.6,15.6,19.3);


(lib.Symbol99 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF33").s().p("AhECPQgEgFAAgIIAAiMQAAgmgCgfIgDgkQAAgNAFgJQAFgKAKAAQAHAAAEAFQAFAFAAAHIgBAGIgBAKQAPgLAOgFQAOgFAMAAQAlAAAQAgQANAZAAAqQAAAlgUAZQgVAaglAAQgQAAgVgGIgBBUQAAAIgFAFQgEAFgIAAQgIAAgFgFgAgQhdQgJAFgOAOQACAoAAArQATAIASgBQAXAAALgQQAKgNAAgXQAAgggIgQQgIgQgQAAQgPAAgNAHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.8,-14.8,15.7,29.6);


(lib.Symbol98 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF33").s().p("Ag8BMQgbgWAAgoQAAgsAXgfQAYgiAoAAQAcAAATAKQAXAMAAAZQAAASgVAOQgIAHgdAMIhCAfQAKAPAPAIQAOAHATAAQAMAAAQgFQAVgFAGgKQAGgJAHAAQAGAAAFAFQAFAFAAAFQAAAUggAOQgbAMgZAAQgnAAgZgUgAgkgvQgOARgHAgIA2gYQAfgQANgLQgPgOgaAAQgWAAgOAQg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.8,-9.6,17.6,19.2);


(lib.Symbol97 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF33").s().p("AhDBRIAAh7IAAgRIAAgRQAAgSAQAAQASAAAAAdQAhghAoAAQAPAAAGALQAIALgBAVIAAAMQAAAWgRAAQgPAAgBgRIAAgMIgBgPQgbAEgQAMQgQALgJAXIAABgQgBASgRAAQgPAAAAgSg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.8,-9.8,13.7,19.8);


(lib.Symbol96 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF33").s().p("AhKCIQgFgFABgHIAAg0QAAgaACguQAEgyAAgXIAAgYQABgRACgIQADgQAOACIAQgCIAZgBQAgAAAcAWQAeAYAAAiQAAAsggAZQgdAXgpAAIgWgDQgBAbAABDQAAAHgEAFQgFAEgHAAQgIAAgEgEgAgdhpIgKABIgDBmIATACQAcAAAUgPQAWgQAAgcQAAgUgVgOQgUgNgVAAIgOABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.9,-14,15.9,28.1);


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


(lib.ant2still = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AAwiRQgBAAAAAAQgFAAgDgDQgDgDAAgEQAAgFADgDQADgDAFAAQAEAAADADQADADAAAFQAAACgBACQgBACgBABQgDADgDAAgABYhfQAAgDACgCQACgCAEAAQADAAACACQADADAAADQAAAEgDACQgCACgDAAQgCAAgBAAQgCAAgBgCQgCgCAAgEQAAAAAAgBgAgdhNQAMAEAOATQADAGADAFQADAGADAGQADAGADAHQAHAQAFATQABADAAADQAKAngDAfQgBASgGAKQgEAIgHACQgQAEgTgcQgQgXgLgiQgCgHgCgGQgBgEgBgEQgBgGgBgFQgCgMgCgLQAAgGgBgHQAAgLABgKQAAgFABgEQgFACgGAAQgSAAgNgTQgMgSAAgbQAAgaAMgTQANgSASAAQASAAANASQANATAAAaQAAATgGAOQgFgBgEABQgOAEgEAZACpByQADAOAAAUQAAAUgDAOQgCAOgEAAQgDAAgDgOQgDgOAAgUQAAgUADgOQADgOADAAQAEAAACAOgAhljuQgDACgDAAQgFAAgEgEQgEgEAAgFQAAgFAEgEQAEgDAFAAQAFAAADADQAEAEAAAFQAAACAAABQgBADgDADQgBABgBABgAiajZQABAAAAgBQADgCAAgEQAAgBAAAAQAAgFgDgDQgDgDgFAAQgEAAgDADQgDADAAAFQAAAEADADQADADAEAAQAEAAADgCgAhjBrQgDAAgCACQgDADAAAFQAAAEADADQADADAFAAQAEAAADgDQACgBAAgCQABgCAAgCQAAgFgDgDQgDgDgEAAQgCAAgBABgAhyBSQABAAAAgBQABgBAAgBQAAgCgCgBQAAgBAAAAQgBAAgCAAQgCAAgBABQAAAAAAAAIAAAAQACAAACACQACACAAACgAh4BMQgDAAgCACQgCACAAADQAAACACACQACACADAAQACAAACgCQACgCAAgCIAAgBAgqEBQgBgBgEgBQgDAAgEgBQgMgBgRAAQgRAAgMABQgLACAAACQAAACALABQAMABARAAQARAAAMgBQAMgBAAgCQAAgBAAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhwEEQgLgBAAgCQAAgCALgBIAdgBIAdABIAHABIAFACIgFgCIgBAAQgCgGAAgFIgBgCQgDgMgBgMIgBgCIgDgLIAAgCQAAgEgEgEQAAgGgCgFQgEgLgDgKIgHgfQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAIABgBIANgDIArABIABACIABABIAAADIgBABQgZgCgYAHQAFAHACAJQACARAGAQQAGAVADAVIgRgoIAVBFIgBAAIAAAAQAAACgMABQgMACgRAAQgQAAgNgCgACdC2QgDgOAAgUQAAgUADgOQADgOADAAQADAAADAOQADAOAAAUQAAAUgDAOQgDAOgDAAQgDAAgDgOgACWDBIgCgBIgBgBIgBgCIAAgCQgEgDgDgEIgDgEIgBgBIAAgBIAAgBQgcgsgFg0QgDgTgHgSQgTASgVAOQgEACgFgCIgBgCIgBgCIAAgBQAYgRAVgTIABgBIADgBIAEAAIACABQANAWAEAaQAEAiALAfIADAEIAAAEIAaAkIAAABIAAACIgBABQgBAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAIgCAAgAgSBrQgQgXgLgiIgEgNIgBgIIgDgLIADALIgRACQgVAEgXgCIAAAFIAAAFQAEAIABAIIABAEIACgFIAAgBIAAgBQAKgTAUgEIAEgBIAEABIABABIABADIgBADIgDACIgBABQgMACgKAIQgBADgCACIgBABQgEAKABAKIABAJIAFAJIABABQAAAHAEAGIABACIAAAFIAAADIgBAAIABgFQAAgEgDgDQgDgDgFAAIgDAAIgBgCIgBgBIgBgCIAAgBIAAgCQgEgIgBgJIgBAAIgEAAIgBABIAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAABAAAAQgBABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAgBQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBABgBQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAAAgBQABAAABAAQAAgBABAAQAAAAABAAIAAAAQABAAAAAAQABAAAAAAQABABAAAAQABABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAABABQgBgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAgBgBQAAAAgBgBQAAAAgBAAQAAAAgBAAIAAAAIAAAAIADgBIADAAIABABQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAAAIAAACIAAgCQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAAAIgBgBIgBgKQgBgJgDgIIgBgBIAAgPIgBgFIABgIIgBAAIABAAQAAgHACgGIAAgBIAAgGIAAgCQASgJAUgCIAMABIABABIAAABIAAADIAAACIgmAHIgBABIgCABIAAABQAAAFgCAEIgBABIAAAFIAqABIANgBIADgBIgEgXIgBgNIABgVIABgJQgFACgGAAQgRAAgNgTQgNgSAAgbQAAgaANgTQANgSARAAQASAAANASQANATAAAaQAAATgGAOQAMAEAOATIAGAMIAGALIAGANQAHAQAFASIABAHQAKAngDAfQgBASgGAKQgEAIgIACIgEABQgNAAgRgZgAgmhNQgOAEgEAZQAEgZAOgEQAEgBAFABIgFAAIgEAAgAhnB8QgDgDAAgFQAAgEADgDIAEgDIADAAQAFAAADADQADADAAAEIgBAFIgCADQgDADgFAAQgEAAgDgDgAAZAHIAPgBQAWAAATgHQAJgEAHAGIAQACIAAAGIAAAHQgNgCgLgFQgeAGgfAFIgDgNgAAhgDIgBgCIAAgDQAUgJAQgNQAGgFADgGIADgFIAAgBIAAgBIAAgBIACgCIAAgBIAAgCIABgBIABgCQADgQgDgSIABgDIABAAIABgBIAAABQAAAEACACIAEACIgEgCQgCgCAAgEIAAgBIACgFQADgCADAAQAEAAACACQACADAAADQAAAEgCACQgCACgEABIgCgBQAEAUgIAUIAAABIAAACIAAABQgFAMgIAJIAAABIgBABIgIAGQgNAEgMAHIgDABIgGgCgAATgpIgCgBIgCAAIgBgEIAAgCQAMgPAQgJQAUgMACgVQAAgJgFgHIgLgYQADAAADgDIACgDIgCADQgDADgDAAIgBAAQgFAAgDgDQgDgCAAgFQAAgEADgEQADgDAFAAQAEAAADADQADAEAAAEIgBAEQAMAWAFAYQACAKgFAKQgFAIgIAHIgOALQgHAFgHAEIgDADQABAAAAABQAAAAAAABQAAAAgBABQAAAAAAABIgBACIgDABIgDgBgAByhpIgBgBIAAgEIADALIgCgGgAhoipIgEgBQgDgVgPgLIgFgDQgMgFgLgHIABgBQADgCAAgEIAkAQIACABQAEAIADAIQADAIAFAIIAAABIAAACIgCABQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgBAAgAhJivIgEgfIgCgNIgLgKIgCgCQgFgDgEgEIAAAAIACgCQADgDABgDQgBADgDADIgCACQgDACgDAAQgFAAgEgEQgDgEgBgEQABgGADgDQAEgEAFAAQAFAAADAEQAFADAAAGIgBACIANAKIADABIAHAKIACADIAAACIAAAAIABACIABABIABANIAAAHIABABIABACIABAKQAAAFgCAEIgDAAIgEAAgAiojaQgDgDAAgEQAAgEADgDQADgEAFAAQAEAAADAEQADADAAAEIAAABQAAAEgDACIgBABQgDACgDABQgFgBgDgDg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ant2still, new cjs.Rectangle(-18.7,-27.7,37.4,55.4), null);


(lib.ant1still = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AAtiFQAAAXgRARQgQAQgWAAQgXAAgRgQQgQgRAAgXQAAgXAQgQQARgRAXAAQAWAAAQARQARAQAAAXgABshTQAAABAAAAQAAAFADADQABABACABQACABAEAAQAFAAACgDQAEgDAAgFQAAgFgEgEQgCgDgFAAQgFAAgEADQgDAEAAAEgACQgeQABgBACAAQAFAAADADQAEADAAAFQAAAEgEADQgDAEgFAAQgEAAgDgEQgCgBAAgBQgBgCAAgDQAAgFADgDQABgCADAAgAArAKQAAAegMAVQgLAVgRAAQgPAAgMgVQgMgVAAgeQAAgcAMgVQAMgVAPAAQARAAALAVQAMAVAAAcgAB4BsQgBACAAABQAAADAFADQACABAEABQALACAPAAQAQAAALgCQALgDAAgFQAAgDgLgDQgLgDgQAAQgPAAgLADQgHABgDACgAiYg1QgEAEgFAAQgFAAgEgEQgDgEAAgFQAAgFADgEQAEgDAFAAQAFAAAEADQAEAEAAAFQAAAFgEAEgAiDAQQAAgCgCgBQgCgDgEgBQgBAAgCAAQgFAAgDAEQgEADAAAFQAAAFAEAEQADADAFAAQAFAAAEgDQADgEAAgFQAAgDgBgCgAi1C5QgMgEAAgGQAAgGAMgEQANgEARAAQASAAAMAEQAMAEAAAGQAAAGgMAEQgMAFgSAAQgRAAgNgFg");
	this.shape.setTransform(-2,5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ai7D7QgMgEAAgGQAAgGAMgFQAMgDASAAQARAAANADQAMAFAAAGQAAAGgMAEQgNAEgRAAQgSAAgMgEgAh3DeQAAgCgBgDIgBgCIgBgCIgBgCIAAgRIAAgJQgDgJgBgKIABgDIABgIQACgHgDgEIABgGQAYgJAZgFQAHgBAHgDIAAgBIABgCIADAAIAAgBIACABIAEgBIAFACIABABIAAACIgBADIgBABIgDABIgJAHQgbAIgaAMIAAAAQgCACgBADIgBAFIAAABIABAMQAEAPgCARIABACIABABQACAHADAGIACADIAAAEIgBACIgBAAQgJAAgDgLgABuC6IgEgEQAAgHgEgIQgBgDgDgDQABgFgCgFIgEgGIgBgCIgFgIIgFgOIgCgIIgoAJIgBgBIAAgCIAAgCQAQgLAUgCQAOAAAEAOIAKAbQgCAFAFAFIACACIAEAJIAAABIAAACIABABIABACIAAACIAAAAQgBABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQAAADAFADIAAAAIAAACIgBABIgDACIgDgCgAB7C4IgGgBQgFgDAAgDQAAAAAAAAQAAgBABAAQAAgBAAAAQAAAAABgBQADgCAGgBQALgEAQAAQAPAAALAEQALACAAAEQAAAFgLACQgLADgPABQgQgBgLgDgAByCuIAAAAgACiCkQgVgCgUgFIAEgBIAEgDQAggBAeAMIAJADIAAADIgmgGgAgfB/QgLgVAAgeQAAgdALgVQAMgVARAAQAPAAAMAVQAMAVAAAdQAAAegMAVQgMAVgPAAQgRAAgMgVgAidBfQgDgDAAgFQAAgFADgEQAEgDAFAAIADAAQADABACACIADAEIgDgEQgCgCgDgBIABgBIABgBIAEgDIACgBIABgBIACAAIAAAAQAnAGAoAEIABABIABACIAAABIgBABIAAABQgmACgkgIIgEAAIgCACIgDACIABAFQAAAFgEADQgDAEgFAAQgFAAgEgEgAAtBMQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIABgDQAigDAjgKQADgCADgDQAGgHAAgIIACgGIABgCIABAAIADgBIACABIABACQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAIAAACIgEACQgDAEAAAEIABAFQgNAYgigBIgCABIAAABQgLACgLAAIgPgBgACFA1IgCgDIgBgFQAAgEADgEIAEgCIAEgBQAEAAADADQAEAEAAAEQAAAFgEADQgDADgEAAQgFAAgDgDgAhnApIgEgCQgfgGgVgVQAFgEAAgFIABABIACABIABABIABADQAaAUAgAHIAKADQALAFAMACIAEABIAAADIAAADIgHAAQgWAAgUgMgACDAyIAAAAgAAoAaIABgDQAggJAVgWIAGgGIABgDIAAABQAAAFAEADIACACQgIALgMAGIgBACIgBAAQgUAPgXACQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAgAiwAMQgDgEAAgFQAAgEADgEQAEgDAFAAQAFAAADADQAFAEAAAEQAAAFgFAEQgDAEgFAAQgFAAgEgEgAiaADIAAAAgABrgGIgCgCQgEgDAAgFIAAgBQABgEADgDQADgDAFAAQAFAAADADQADADABAFQgBAFgDADQgDADgFAAQgDABgDgCgABrgGIAAAAgAg4gbQgQgQAAgYQAAgWAQgRQAQgRAXAAQAXAAAQARQAQARAAAWQAAAYgQAQQgQAQgXAAQgXAAgQgQgAg6hyQgDgFgEgEIgQgcQgCgHACgHQgGgFgBgIQgDgcAcgDQAdAEgHAdQgGAXgYgHQgCAOAOANIADADIAGAKIAAAEIgBACIgDABIgEgBgAAKh5QgCgNADgNIABgJIgBgBIgBgCQABgZgQgSIgDgDIgCACQgIAEgIgFIgBAAIgCgCQgMgEgCgOQgDgbAcgEQAdAFgIAdQgBAGgCAEQAOAOAEAWQADANAAAOQAAAOgFAMQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgDgBg");
	this.shape_1.setTransform(-1.4,-1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ant1still, new cjs.Rectangle(-22.9,-27.1,41.7,52.6), null);


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


(lib.defpreposition = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_45 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(45).call(this.frame_45).wait(1));

	// Layer 1
	this.instance = new lib.Symbol104("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(591.2,277.9,1.444,1.444,53.3);

	this.instance_1 = new lib.Symbol100("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(533.4,278.2,1.444,1.444,53.3);

	this.instance_2 = new lib.Symbol102("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(498,274.3,1.444,1.444,53.3);

	this.instance_3 = new lib.Symbol103("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(455.7,275.5,1.444,1.444,53.3);

	this.instance_4 = new lib.Symbol102("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(419,274.3,1.444,1.444,53.3);

	this.instance_5 = new lib.Symbol101("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(372,277.4,1.444,1.444,53.3);

	this.instance_6 = new lib.Symbol100("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(318.1,278.2,1.444,1.444,53.3);

	this.instance_7 = new lib.Symbol99("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(258.8,281.7,1.444,1.444,53.3);

	this.instance_8 = new lib.Symbol98("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(207.3,278,1.444,1.444,53.3);

	this.instance_9 = new lib.Symbol97("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(153.8,278.1,1.444,1.444,53.3);

	this.instance_10 = new lib.Symbol96("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(105.8,273.9,1.444,1.444,53.3);

	this.instance_11 = new lib.Symbol104("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(452.9,278.6,1.2,1);
	this.instance_11.alpha = 0;

	this.instance_12 = new lib.Symbol100("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(429.3,279,1.2,1);
	this.instance_12.alpha = 0;

	this.instance_13 = new lib.Symbol102("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(412.7,274.5,1.2,1);
	this.instance_13.alpha = 0;

	this.instance_14 = new lib.Symbol103("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(395.9,275.9,1.2,1);
	this.instance_14.alpha = 0;

	this.instance_15 = new lib.Symbol102("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(380.2,274.5,1.2,1);
	this.instance_15.alpha = 0;

	this.instance_16 = new lib.Symbol101("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(362.6,278.1,1.2,1);
	this.instance_16.alpha = 0;

	this.instance_17 = new lib.Symbol100("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(340.9,279,1.2,1);
	this.instance_17.alpha = 0;

	this.instance_18 = new lib.Symbol99("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(318.5,283.1,1.2,1);
	this.instance_18.alpha = 0;

	this.instance_19 = new lib.Symbol98("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(295.4,278.8,1.2,1);
	this.instance_19.alpha = 0;

	this.instance_20 = new lib.Symbol97("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(273.4,278.9,1.2,1);
	this.instance_20.alpha = 0;

	this.instance_21 = new lib.Symbol96("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(251.4,274,1.2,1);
	this.instance_21.alpha = 0;

	this.instance_22 = new lib.Symbol104("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(469.7,278.6,1.4,1);
	this.instance_22.alpha = 0;

	this.instance_23 = new lib.Symbol100("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(442.2,279,1.4,1);
	this.instance_23.alpha = 0;

	this.instance_24 = new lib.Symbol102("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(422.8,274.5,1.4,1);
	this.instance_24.alpha = 0;

	this.instance_25 = new lib.Symbol103("synched",0);
	this.instance_25.parent = this;
	this.instance_25.setTransform(403.3,275.9,1.4,1);
	this.instance_25.alpha = 0;

	this.instance_26 = new lib.Symbol102("synched",0);
	this.instance_26.parent = this;
	this.instance_26.setTransform(384.9,274.5,1.4,1);
	this.instance_26.alpha = 0;

	this.instance_27 = new lib.Symbol101("synched",0);
	this.instance_27.parent = this;
	this.instance_27.setTransform(364.4,278.1,1.4,1);
	this.instance_27.alpha = 0;

	this.instance_28 = new lib.Symbol100("synched",0);
	this.instance_28.parent = this;
	this.instance_28.setTransform(339.1,279,1.4,1);
	this.instance_28.alpha = 0;

	this.instance_29 = new lib.Symbol99("synched",0);
	this.instance_29.parent = this;
	this.instance_29.setTransform(313,283.1,1.4,1);
	this.instance_29.alpha = 0;

	this.instance_30 = new lib.Symbol98("synched",0);
	this.instance_30.parent = this;
	this.instance_30.setTransform(285.9,278.8,1.4,1);
	this.instance_30.alpha = 0;

	this.instance_31 = new lib.Symbol97("synched",0);
	this.instance_31.parent = this;
	this.instance_31.setTransform(260.3,278.9,1.4,1);
	this.instance_31.alpha = 0;

	this.instance_32 = new lib.Symbol96("synched",0);
	this.instance_32.parent = this;
	this.instance_32.setTransform(234.6,274,1.4,1);
	this.instance_32.alpha = 0;

	this.instance_33 = new lib.Symbol104("synched",0);
	this.instance_33.parent = this;
	this.instance_33.setTransform(486.5,278.6,1.6,1);
	this.instance_33.alpha = 0;

	this.instance_34 = new lib.Symbol100("synched",0);
	this.instance_34.parent = this;
	this.instance_34.setTransform(455.1,279,1.6,1);
	this.instance_34.alpha = 0;

	this.instance_35 = new lib.Symbol102("synched",0);
	this.instance_35.parent = this;
	this.instance_35.setTransform(432.9,274.5,1.6,1);
	this.instance_35.alpha = 0;

	this.instance_36 = new lib.Symbol103("synched",0);
	this.instance_36.parent = this;
	this.instance_36.setTransform(410.6,275.9,1.6,1);
	this.instance_36.alpha = 0;

	this.instance_37 = new lib.Symbol102("synched",0);
	this.instance_37.parent = this;
	this.instance_37.setTransform(389.6,274.5,1.6,1);
	this.instance_37.alpha = 0;

	this.instance_38 = new lib.Symbol101("synched",0);
	this.instance_38.parent = this;
	this.instance_38.setTransform(366.2,278.1,1.6,1);
	this.instance_38.alpha = 0;

	this.instance_39 = new lib.Symbol100("synched",0);
	this.instance_39.parent = this;
	this.instance_39.setTransform(337.2,279,1.6,1);
	this.instance_39.alpha = 0;

	this.instance_40 = new lib.Symbol99("synched",0);
	this.instance_40.parent = this;
	this.instance_40.setTransform(307.4,283.1,1.6,1);
	this.instance_40.alpha = 0;

	this.instance_41 = new lib.Symbol98("synched",0);
	this.instance_41.parent = this;
	this.instance_41.setTransform(276.5,278.8,1.6,1);
	this.instance_41.alpha = 0;

	this.instance_42 = new lib.Symbol97("synched",0);
	this.instance_42.parent = this;
	this.instance_42.setTransform(247.2,278.9,1.6,1);
	this.instance_42.alpha = 0;

	this.instance_43 = new lib.Symbol96("synched",0);
	this.instance_43.parent = this;
	this.instance_43.setTransform(217.9,274,1.6,1);
	this.instance_43.alpha = 0;

	this.instance_44 = new lib.Symbol104("synched",0);
	this.instance_44.parent = this;
	this.instance_44.setTransform(503.3,278.6,1.8,1);
	this.instance_44.alpha = 0;

	this.instance_45 = new lib.Symbol100("synched",0);
	this.instance_45.parent = this;
	this.instance_45.setTransform(467.9,279,1.8,1);
	this.instance_45.alpha = 0;

	this.instance_46 = new lib.Symbol102("synched",0);
	this.instance_46.parent = this;
	this.instance_46.setTransform(443,274.5,1.8,1);
	this.instance_46.alpha = 0;

	this.instance_47 = new lib.Symbol103("synched",0);
	this.instance_47.parent = this;
	this.instance_47.setTransform(417.9,275.9,1.8,1);
	this.instance_47.alpha = 0;

	this.instance_48 = new lib.Symbol102("synched",0);
	this.instance_48.parent = this;
	this.instance_48.setTransform(394.3,274.5,1.8,1);
	this.instance_48.alpha = 0;

	this.instance_49 = new lib.Symbol101("synched",0);
	this.instance_49.parent = this;
	this.instance_49.setTransform(368,278.1,1.8,1);
	this.instance_49.alpha = 0;

	this.instance_50 = new lib.Symbol100("synched",0);
	this.instance_50.parent = this;
	this.instance_50.setTransform(335.4,279,1.8,1);
	this.instance_50.alpha = 0;

	this.instance_51 = new lib.Symbol99("synched",0);
	this.instance_51.parent = this;
	this.instance_51.setTransform(301.8,283.1,1.8,1);
	this.instance_51.alpha = 0;

	this.instance_52 = new lib.Symbol98("synched",0);
	this.instance_52.parent = this;
	this.instance_52.setTransform(267.1,278.8,1.8,1);
	this.instance_52.alpha = 0;

	this.instance_53 = new lib.Symbol97("synched",0);
	this.instance_53.parent = this;
	this.instance_53.setTransform(234.1,278.9,1.8,1);
	this.instance_53.alpha = 0;

	this.instance_54 = new lib.Symbol96("synched",0);
	this.instance_54.parent = this;
	this.instance_54.setTransform(201.1,274,1.8,1);
	this.instance_54.alpha = 0;

	this.instance_55 = new lib.Symbol104("synched",0);
	this.instance_55.parent = this;
	this.instance_55.setTransform(520.1,278.6,2,1);
	this.instance_55.alpha = 0;

	this.instance_56 = new lib.Symbol100("synched",0);
	this.instance_56.parent = this;
	this.instance_56.setTransform(480.8,279,2,1);
	this.instance_56.alpha = 0;

	this.instance_57 = new lib.Symbol102("synched",0);
	this.instance_57.parent = this;
	this.instance_57.setTransform(453.1,274.5,2,1);
	this.instance_57.alpha = 0;

	this.instance_58 = new lib.Symbol103("synched",0);
	this.instance_58.parent = this;
	this.instance_58.setTransform(425.2,275.9,2,1);
	this.instance_58.alpha = 0;

	this.instance_59 = new lib.Symbol102("synched",0);
	this.instance_59.parent = this;
	this.instance_59.setTransform(399,274.5,2,1);
	this.instance_59.alpha = 0;

	this.instance_60 = new lib.Symbol101("synched",0);
	this.instance_60.parent = this;
	this.instance_60.setTransform(369.7,278.1,2,1);
	this.instance_60.alpha = 0;

	this.instance_61 = new lib.Symbol100("synched",0);
	this.instance_61.parent = this;
	this.instance_61.setTransform(333.5,279,2,1);
	this.instance_61.alpha = 0;

	this.instance_62 = new lib.Symbol99("synched",0);
	this.instance_62.parent = this;
	this.instance_62.setTransform(296.2,283.1,2,1);
	this.instance_62.alpha = 0;

	this.instance_63 = new lib.Symbol98("synched",0);
	this.instance_63.parent = this;
	this.instance_63.setTransform(257.6,278.8,2,1);
	this.instance_63.alpha = 0;

	this.instance_64 = new lib.Symbol97("synched",0);
	this.instance_64.parent = this;
	this.instance_64.setTransform(221,278.9,2,1);
	this.instance_64.alpha = 0;

	this.instance_65 = new lib.Symbol96("synched",0);
	this.instance_65.parent = this;
	this.instance_65.setTransform(184.3,274,2,1);
	this.instance_65.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10,p:{scaleX:1.444,scaleY:1.444,rotation:53.3,x:105.8,y:273.9,alpha:1}},{t:this.instance_9,p:{scaleX:1.444,scaleY:1.444,rotation:53.3,x:153.8,y:278.1,alpha:1}},{t:this.instance_8,p:{scaleX:1.444,scaleY:1.444,rotation:53.3,x:207.3,y:278,alpha:1}},{t:this.instance_7,p:{scaleX:1.444,scaleY:1.444,rotation:53.3,x:258.8,y:281.7,alpha:1}},{t:this.instance_6,p:{scaleX:1.444,scaleY:1.444,rotation:53.3,x:318.1,y:278.2,alpha:1}},{t:this.instance_5,p:{scaleX:1.444,scaleY:1.444,rotation:53.3,x:372,y:277.4,alpha:1}},{t:this.instance_4,p:{scaleX:1.444,scaleY:1.444,rotation:53.3,x:419,y:274.3,alpha:1}},{t:this.instance_3,p:{scaleX:1.444,scaleY:1.444,rotation:53.3,x:455.7,y:275.5,alpha:1}},{t:this.instance_2,p:{scaleX:1.444,scaleY:1.444,rotation:53.3,x:498,y:274.3,alpha:1}},{t:this.instance_1,p:{scaleX:1.444,scaleY:1.444,rotation:53.3,x:533.4,y:278.2,alpha:1}},{t:this.instance,p:{scaleX:1.444,scaleY:1.444,rotation:53.3,x:591.2,y:277.9,alpha:1}}]}).to({state:[{t:this.instance_10,p:{scaleX:1.852,scaleY:1.852,rotation:102.2,x:111.6,y:272.6,alpha:1}},{t:this.instance_9,p:{scaleX:1.852,scaleY:1.852,rotation:102.2,x:155,y:270.7,alpha:1}},{t:this.instance_8,p:{scaleX:1.852,scaleY:1.852,rotation:102.2,x:207.1,y:270.8,alpha:1}},{t:this.instance_7,p:{scaleX:1.852,scaleY:1.852,rotation:102.2,x:254.4,y:269.1,alpha:1}},{t:this.instance_6,p:{scaleX:1.852,scaleY:1.852,rotation:102.2,x:314.9,y:270.7,alpha:1}},{t:this.instance_5,p:{scaleX:1.852,scaleY:1.852,rotation:102.2,x:368,y:271,alpha:1}},{t:this.instance_4,p:{scaleX:1.852,scaleY:1.852,rotation:102.2,x:416.2,y:272.5,alpha:1}},{t:this.instance_3,p:{scaleX:1.852,scaleY:1.852,rotation:102.2,x:451,y:271.9,alpha:1}},{t:this.instance_2,p:{scaleX:1.852,scaleY:1.852,rotation:102.2,x:493.2,y:272.5,alpha:1}},{t:this.instance_1,p:{scaleX:1.852,scaleY:1.852,rotation:102.2,x:524.5,y:270.7,alpha:1}},{t:this.instance,p:{scaleX:1.852,scaleY:1.852,rotation:102.2,x:581,y:270.8,alpha:1}}]},1).to({state:[{t:this.instance_10,p:{scaleX:2.225,scaleY:2.225,rotation:147,x:118.6,y:271.2,alpha:1}},{t:this.instance_9,p:{scaleX:2.225,scaleY:2.225,rotation:147,x:163.5,y:262,alpha:1}},{t:this.instance_8,p:{scaleX:2.225,scaleY:2.225,rotation:147,x:214.2,y:262.2,alpha:1}},{t:this.instance_7,p:{scaleX:2.225,scaleY:2.225,rotation:147,x:262.6,y:254.3,alpha:1}},{t:this.instance_6,p:{scaleX:2.225,scaleY:2.225,rotation:147,x:319.2,y:261.9,alpha:1}},{t:this.instance_5,p:{scaleX:2.225,scaleY:2.225,rotation:147,x:370.3,y:263.6,alpha:1}},{t:this.instance_4,p:{scaleX:2.225,scaleY:2.225,rotation:147,x:415.3,y:270.3,alpha:1}},{t:this.instance_3,p:{scaleX:2.225,scaleY:2.225,rotation:147,x:449.9,y:267.7,alpha:1}},{t:this.instance_2,p:{scaleX:2.225,scaleY:2.225,rotation:147,x:490.2,y:270.3,alpha:1}},{t:this.instance_1,p:{scaleX:2.225,scaleY:2.225,rotation:147,x:523.1,y:261.9,alpha:1}},{t:this.instance,p:{scaleX:2.225,scaleY:2.225,rotation:147,x:577.9,y:262.6,alpha:1}}]},1).to({state:[{t:this.instance_10,p:{scaleX:2.562,scaleY:2.562,rotation:-172.5,x:126.6,y:270.5,alpha:1}},{t:this.instance_9,p:{scaleX:2.562,scaleY:2.562,rotation:-172.5,x:177.7,y:258,alpha:1}},{t:this.instance_8,p:{scaleX:2.562,scaleY:2.562,rotation:-172.5,x:226.8,y:258.3,alpha:1}},{t:this.instance_7,p:{scaleX:2.562,scaleY:2.562,rotation:-172.5,x:280.2,y:247.5,alpha:1}},{t:this.instance_6,p:{scaleX:2.562,scaleY:2.562,rotation:-172.5,x:329.2,y:257.8,alpha:1}},{t:this.instance_5,p:{scaleX:2.562,scaleY:2.562,rotation:-172.5,x:377.5,y:260.1,alpha:1}},{t:this.instance_4,p:{scaleX:2.562,scaleY:2.562,rotation:-172.5,x:415.7,y:269.3,alpha:1}},{t:this.instance_3,p:{scaleX:2.562,scaleY:2.562,rotation:-172.5,x:451.5,y:265.8,alpha:1}},{t:this.instance_2,p:{scaleX:2.562,scaleY:2.562,rotation:-172.5,x:488.6,y:269.3,alpha:1}},{t:this.instance_1,p:{scaleX:2.562,scaleY:2.562,rotation:-172.5,x:527.4,y:257.8,alpha:1}},{t:this.instance,p:{scaleX:2.562,scaleY:2.562,rotation:-172.5,x:580.1,y:258.8,alpha:1}}]},1).to({state:[{t:this.instance_10,p:{scaleX:2.864,scaleY:2.864,rotation:-136.3,x:134.7,y:271,alpha:1}},{t:this.instance_9,p:{scaleX:2.864,scaleY:2.864,rotation:-136.3,x:192.4,y:260.8,alpha:1}},{t:this.instance_8,p:{scaleX:2.864,scaleY:2.864,rotation:-136.3,x:240,y:261,alpha:1}},{t:this.instance_7,p:{scaleX:2.864,scaleY:2.864,rotation:-136.3,x:298.9,y:252.2,alpha:1}},{t:this.instance_6,p:{scaleX:2.864,scaleY:2.864,rotation:-136.3,x:339.7,y:260.6,alpha:1}},{t:this.instance_5,p:{scaleX:2.864,scaleY:2.864,rotation:-136.3,x:385.2,y:262.5,alpha:1}},{t:this.instance_4,p:{scaleX:2.864,scaleY:2.864,rotation:-136.3,x:416.4,y:270,alpha:1}},{t:this.instance_3,p:{scaleX:2.864,scaleY:2.864,rotation:-136.3,x:453.4,y:267.1,alpha:1}},{t:this.instance_2,p:{scaleX:2.864,scaleY:2.864,rotation:-136.3,x:487.1,y:270,alpha:1}},{t:this.instance_1,p:{scaleX:2.864,scaleY:2.864,rotation:-136.3,x:532.3,y:260.6,alpha:1}},{t:this.instance,p:{scaleX:2.864,scaleY:2.864,rotation:-136.3,x:582.9,y:261.4,alpha:1}}]},1).to({state:[{t:this.instance_10,p:{scaleX:3.13,scaleY:3.13,rotation:-104.4,x:142.2,y:272.3,alpha:1}},{t:this.instance_9,p:{scaleX:3.13,scaleY:3.13,rotation:-104.4,x:203.7,y:268.4,alpha:1}},{t:this.instance_8,p:{scaleX:3.13,scaleY:3.13,rotation:-104.4,x:249.8,y:268.5,alpha:1}},{t:this.instance_7,p:{scaleX:3.13,scaleY:3.13,rotation:-104.4,x:311.6,y:265.2,alpha:1}},{t:this.instance_6,p:{scaleX:3.13,scaleY:3.13,rotation:-104.4,x:346.8,y:268.4,alpha:1}},{t:this.instance_5,p:{scaleX:3.13,scaleY:3.13,rotation:-104.4,x:389.9,y:269.1,alpha:1}},{t:this.instance_4,p:{scaleX:3.13,scaleY:3.13,rotation:-104.4,x:416.1,y:271.9,alpha:1}},{t:this.instance_3,p:{scaleX:3.13,scaleY:3.13,rotation:-104.4,x:453.6,y:270.8,alpha:1}},{t:this.instance_2,p:{scaleX:3.13,scaleY:3.13,rotation:-104.4,x:484.8,y:271.9,alpha:1}},{t:this.instance_1,p:{scaleX:3.13,scaleY:3.13,rotation:-104.4,x:533.7,y:268.4,alpha:1}},{t:this.instance,p:{scaleX:3.13,scaleY:3.13,rotation:-104.4,x:582.3,y:268.7,alpha:1}}]},1).to({state:[{t:this.instance_10,p:{scaleX:3.361,scaleY:3.361,rotation:-76.7,x:148.9,y:273.8,alpha:1}},{t:this.instance_9,p:{scaleX:3.361,scaleY:3.361,rotation:-76.7,x:210.2,y:277.6,alpha:1}},{t:this.instance_8,p:{scaleX:3.361,scaleY:3.361,rotation:-76.7,x:254.8,y:277.5,alpha:1}},{t:this.instance_7,p:{scaleX:3.361,scaleY:3.361,rotation:-76.7,x:316.2,y:280.8,alpha:1}},{t:this.instance_6,p:{scaleX:3.361,scaleY:3.361,rotation:-76.7,x:348.9,y:277.7,alpha:1}},{t:this.instance_5,p:{scaleX:3.361,scaleY:3.361,rotation:-76.7,x:390.4,y:277,alpha:1}},{t:this.instance_4,p:{scaleX:3.361,scaleY:3.361,rotation:-76.7,x:414.7,y:274.2,alpha:1}},{t:this.instance_3,p:{scaleX:3.361,scaleY:3.361,rotation:-76.7,x:451.5,y:275.3,alpha:1}},{t:this.instance_2,p:{scaleX:3.361,scaleY:3.361,rotation:-76.7,x:481.2,y:274.2,alpha:1}},{t:this.instance_1,p:{scaleX:3.361,scaleY:3.361,rotation:-76.7,x:530.2,y:277.7,alpha:1}},{t:this.instance,p:{scaleX:3.361,scaleY:3.361,rotation:-76.7,x:577.2,y:277.4,alpha:1}}]},1).to({state:[{t:this.instance_10,p:{scaleX:3.556,scaleY:3.556,rotation:-53.3,x:154.9,y:275.1,alpha:1}},{t:this.instance_9,p:{scaleX:3.556,scaleY:3.556,rotation:-53.3,x:212.7,y:285.6,alpha:1}},{t:this.instance_8,p:{scaleX:3.556,scaleY:3.556,rotation:-53.3,x:256,y:285.4,alpha:1}},{t:this.instance_7,p:{scaleX:3.556,scaleY:3.556,rotation:-53.3,x:314.1,y:294.4,alpha:1}},{t:this.instance_6,p:{scaleX:3.556,scaleY:3.556,rotation:-53.3,x:347.1,y:285.8,alpha:1}},{t:this.instance_5,p:{scaleX:3.556,scaleY:3.556,rotation:-53.3,x:387.6,y:283.8,alpha:1}},{t:this.instance_4,p:{scaleX:3.556,scaleY:3.556,rotation:-53.3,x:412.2,y:276.2,alpha:1}},{t:this.instance_3,p:{scaleX:3.556,scaleY:3.556,rotation:-53.3,x:447.4,y:279.1,alpha:1}},{t:this.instance_2,p:{scaleX:3.556,scaleY:3.556,rotation:-53.3,x:476.7,y:276.2,alpha:1}},{t:this.instance_1,p:{scaleX:3.556,scaleY:3.556,rotation:-53.3,x:522.7,y:285.8,alpha:1}},{t:this.instance,p:{scaleX:3.556,scaleY:3.556,rotation:-53.3,x:568.4,y:285,alpha:1}}]},1).to({state:[{t:this.instance_10,p:{scaleX:3.716,scaleY:3.716,rotation:-34.1,x:160.6,y:276.1,alpha:1}},{t:this.instance_9,p:{scaleX:3.716,scaleY:3.716,rotation:-34.1,x:213.2,y:291.2,alpha:1}},{t:this.instance_8,p:{scaleX:3.716,scaleY:3.716,rotation:-34.1,x:255.1,y:290.9,alpha:1}},{t:this.instance_7,p:{scaleX:3.716,scaleY:3.716,rotation:-34.1,x:308.5,y:303.9,alpha:1}},{t:this.instance_6,p:{scaleX:3.716,scaleY:3.716,rotation:-34.1,x:343.2,y:291.5,alpha:1}},{t:this.instance_5,p:{scaleX:3.716,scaleY:3.716,rotation:-34.1,x:383,y:288.7,alpha:1}},{t:this.instance_4,p:{scaleX:3.716,scaleY:3.716,rotation:-34.1,x:409.3,y:277.6,alpha:1}},{t:this.instance_3,p:{scaleX:3.716,scaleY:3.716,rotation:-34.1,x:442.4,y:281.9,alpha:1}},{t:this.instance_2,p:{scaleX:3.716,scaleY:3.716,rotation:-34.1,x:471.7,y:277.6,alpha:1}},{t:this.instance_1,p:{scaleX:3.716,scaleY:3.716,rotation:-34.1,x:513.2,y:291.5,alpha:1}},{t:this.instance,p:{scaleX:3.716,scaleY:3.716,rotation:-34.1,x:557.6,y:290.3,alpha:1}}]},1).to({state:[{t:this.instance_10,p:{scaleX:3.84,scaleY:3.84,rotation:-19.2,x:166.2,y:276.6,alpha:1}},{t:this.instance_9,p:{scaleX:3.84,scaleY:3.84,rotation:-19.2,x:213.4,y:294.5,alpha:1}},{t:this.instance_8,p:{scaleX:3.84,scaleY:3.84,rotation:-19.2,x:254,y:294.1,alpha:1}},{t:this.instance_7,p:{scaleX:3.84,scaleY:3.84,rotation:-19.2,x:302.4,y:309.4,alpha:1}},{t:this.instance_6,p:{scaleX:3.84,scaleY:3.84,rotation:-19.2,x:339,y:294.8,alpha:1}},{t:this.instance_5,p:{scaleX:3.84,scaleY:3.84,rotation:-19.2,x:378.1,y:291.5,alpha:1}},{t:this.instance_4,p:{scaleX:3.84,scaleY:3.84,rotation:-19.2,x:406.3,y:278.4,alpha:1}},{t:this.instance_3,p:{scaleX:3.84,scaleY:3.84,rotation:-19.2,x:437.3,y:283.4,alpha:1}},{t:this.instance_2,p:{scaleX:3.84,scaleY:3.84,rotation:-19.2,x:466.6,y:278.4,alpha:1}},{t:this.instance_1,p:{scaleX:3.84,scaleY:3.84,rotation:-19.2,x:503.3,y:294.8,alpha:1}},{t:this.instance,p:{scaleX:3.84,scaleY:3.84,rotation:-19.2,x:546.6,y:293.4,alpha:1}}]},1).to({state:[{t:this.instance_10,p:{scaleX:3.929,scaleY:3.929,rotation:-8.5,x:172,y:276.9,alpha:1}},{t:this.instance_9,p:{scaleX:3.929,scaleY:3.929,rotation:-8.5,x:214.4,y:296,alpha:1}},{t:this.instance_8,p:{scaleX:3.929,scaleY:3.929,rotation:-8.5,x:253.7,y:295.6,alpha:1}},{t:this.instance_7,p:{scaleX:3.929,scaleY:3.929,rotation:-8.5,x:297.8,y:312,alpha:1}},{t:this.instance_6,p:{scaleX:3.929,scaleY:3.929,rotation:-8.5,x:335.6,y:296.3,alpha:1}},{t:this.instance_5,p:{scaleX:3.929,scaleY:3.929,rotation:-8.5,x:374,y:292.8,alpha:1}},{t:this.instance_4,p:{scaleX:3.929,scaleY:3.929,rotation:-8.5,x:403.5,y:278.8,alpha:1}},{t:this.instance_3,p:{scaleX:3.929,scaleY:3.929,rotation:-8.5,x:432.5,y:284.2,alpha:1}},{t:this.instance_2,p:{scaleX:3.929,scaleY:3.929,rotation:-8.5,x:461.7,y:278.8,alpha:1}},{t:this.instance_1,p:{scaleX:3.929,scaleY:3.929,rotation:-8.5,x:494.3,y:296.3,alpha:1}},{t:this.instance,p:{scaleX:3.929,scaleY:3.929,rotation:-8.5,x:536.3,y:294.8,alpha:1}}]},1).to({state:[{t:this.instance_10,p:{scaleX:3.982,scaleY:3.982,rotation:-2.1,x:178,y:277,alpha:1}},{t:this.instance_9,p:{scaleX:3.982,scaleY:3.982,rotation:-2.1,x:216.9,y:296.5,alpha:1}},{t:this.instance_8,p:{scaleX:3.982,scaleY:3.982,rotation:-2.1,x:254.8,y:296.1,alpha:1}},{t:this.instance_7,p:{scaleX:3.982,scaleY:3.982,rotation:-2.1,x:295.6,y:313,alpha:1}},{t:this.instance_6,p:{scaleX:3.982,scaleY:3.982,rotation:-2.1,x:333.7,y:296.9,alpha:1}},{t:this.instance_5,p:{scaleX:3.982,scaleY:3.982,rotation:-2.1,x:371.1,y:293.3,alpha:1}},{t:this.instance_4,p:{scaleX:3.982,scaleY:3.982,rotation:-2.1,x:401,y:278.9,alpha:1}},{t:this.instance_3,p:{scaleX:3.982,scaleY:3.982,rotation:-2.1,x:428.4,y:284.4,alpha:1}},{t:this.instance_2,p:{scaleX:3.982,scaleY:3.982,rotation:-2.1,x:457.2,y:278.9,alpha:1}},{t:this.instance_1,p:{scaleX:3.982,scaleY:3.982,rotation:-2.1,x:486.7,y:296.9,alpha:1}},{t:this.instance,p:{scaleX:3.982,scaleY:3.982,rotation:-2.1,x:527.4,y:295.3,alpha:1}}]},1).to({state:[{t:this.instance_10,p:{scaleX:4,scaleY:4,rotation:0,x:184.3,y:277,alpha:1}},{t:this.instance_9,p:{scaleX:4,scaleY:4,rotation:0,x:221.1,y:296.7,alpha:1}},{t:this.instance_8,p:{scaleX:4,scaleY:4,rotation:0,x:257.6,y:296.2,alpha:1}},{t:this.instance_7,p:{scaleX:4,scaleY:4,rotation:0,x:296.2,y:313.2,alpha:1}},{t:this.instance_6,p:{scaleX:4,scaleY:4,rotation:0,x:333.6,y:297,alpha:1}},{t:this.instance_5,p:{scaleX:4,scaleY:4,rotation:0,x:369.7,y:293.4,alpha:1}},{t:this.instance_4,p:{scaleX:4,scaleY:4,rotation:0,x:399,y:278.9,alpha:1}},{t:this.instance_3,p:{scaleX:4,scaleY:4,rotation:0,x:425.2,y:284.5,alpha:1}},{t:this.instance_2,p:{scaleX:4,scaleY:4,rotation:0,x:453.1,y:278.9,alpha:1}},{t:this.instance_1,p:{scaleX:4,scaleY:4,rotation:0,x:480.9,y:297,alpha:1}},{t:this.instance,p:{scaleX:4,scaleY:4,rotation:0,x:520.1,y:295.5,alpha:1}}]},1).to({state:[{t:this.instance_10,p:{scaleX:3.982,scaleY:3.982,rotation:-2.1,x:190.9,y:277,alpha:1}},{t:this.instance_9,p:{scaleX:3.982,scaleY:3.982,rotation:-2.1,x:227,y:296.5,alpha:1}},{t:this.instance_8,p:{scaleX:3.982,scaleY:3.982,rotation:-2.1,x:262.1,y:296.1,alpha:1}},{t:this.instance_7,p:{scaleX:3.982,scaleY:3.982,rotation:-2.1,x:299.9,y:313,alpha:1}},{t:this.instance_6,p:{scaleX:3.982,scaleY:3.982,rotation:-2.1,x:335.2,y:296.9,alpha:1}},{t:this.instance_5,p:{scaleX:3.982,scaleY:3.982,rotation:-2.1,x:369.8,y:293.3,alpha:1}},{t:this.instance_4,p:{scaleX:3.982,scaleY:3.982,rotation:-2.1,x:397.4,y:278.9,alpha:1}},{t:this.instance_3,p:{scaleX:3.982,scaleY:3.982,rotation:-2.1,x:422.8,y:284.4,alpha:1}},{t:this.instance_2,p:{scaleX:3.982,scaleY:3.982,rotation:-2.1,x:449.4,y:278.9,alpha:1}},{t:this.instance_1,p:{scaleX:3.982,scaleY:3.982,rotation:-2.1,x:476.8,y:296.9,alpha:1}},{t:this.instance,p:{scaleX:3.982,scaleY:3.982,rotation:-2.1,x:514.5,y:295.3,alpha:1}}]},1).to({state:[{t:this.instance_10,p:{scaleX:3.929,scaleY:3.929,rotation:-8.5,x:197.8,y:276.9,alpha:1}},{t:this.instance_9,p:{scaleX:3.929,scaleY:3.929,rotation:-8.5,x:234.6,y:296,alpha:1}},{t:this.instance_8,p:{scaleX:3.929,scaleY:3.929,rotation:-8.5,x:268.2,y:295.6,alpha:1}},{t:this.instance_7,p:{scaleX:3.929,scaleY:3.929,rotation:-8.5,x:306.4,y:312,alpha:1}},{t:this.instance_6,p:{scaleX:3.929,scaleY:3.929,rotation:-8.5,x:338.5,y:296.3,alpha:1}},{t:this.instance_5,p:{scaleX:3.929,scaleY:3.929,rotation:-8.5,x:371.3,y:292.8,alpha:1}},{t:this.instance_4,p:{scaleX:3.929,scaleY:3.929,rotation:-8.5,x:396.2,y:278.8,alpha:1}},{t:this.instance_3,p:{scaleX:3.929,scaleY:3.929,rotation:-8.5,x:421.2,y:284.2,alpha:1}},{t:this.instance_2,p:{scaleX:3.929,scaleY:3.929,rotation:-8.5,x:446.2,y:278.8,alpha:1}},{t:this.instance_1,p:{scaleX:3.929,scaleY:3.929,rotation:-8.5,x:474.4,y:296.3,alpha:1}},{t:this.instance,p:{scaleX:3.929,scaleY:3.929,rotation:-8.5,x:510.4,y:294.8,alpha:1}}]},1).to({state:[{t:this.instance_10,p:{scaleX:3.84,scaleY:3.84,rotation:-19.2,x:204.9,y:276.6,alpha:1}},{t:this.instance_9,p:{scaleX:3.84,scaleY:3.84,rotation:-19.2,x:243.6,y:294.5,alpha:1}},{t:this.instance_8,p:{scaleX:3.84,scaleY:3.84,rotation:-19.2,x:275.8,y:294.1,alpha:1}},{t:this.instance_7,p:{scaleX:3.84,scaleY:3.84,rotation:-19.2,x:315.3,y:309.4,alpha:1}},{t:this.instance_6,p:{scaleX:3.84,scaleY:3.84,rotation:-19.2,x:343.2,y:294.8,alpha:1}},{t:this.instance_5,p:{scaleX:3.84,scaleY:3.84,rotation:-19.2,x:374.1,y:291.5,alpha:1}},{t:this.instance_4,p:{scaleX:3.84,scaleY:3.84,rotation:-19.2,x:395.4,y:278.4,alpha:1}},{t:this.instance_3,p:{scaleX:3.84,scaleY:3.84,rotation:-19.2,x:420.4,y:283.4,alpha:1}},{t:this.instance_2,p:{scaleX:3.84,scaleY:3.84,rotation:-19.2,x:443.3,y:278.4,alpha:1}},{t:this.instance_1,p:{scaleX:3.84,scaleY:3.84,rotation:-19.2,x:473.5,y:294.8,alpha:1}},{t:this.instance,p:{scaleX:3.84,scaleY:3.84,rotation:-19.2,x:507.8,y:293.4,alpha:1}}]},1).to({state:[{t:this.instance_10,p:{scaleX:3.716,scaleY:3.716,rotation:-34.1,x:212.2,y:276.1,alpha:1}},{t:this.instance_9,p:{scaleX:3.716,scaleY:3.716,rotation:-34.1,x:253.5,y:291.2,alpha:1}},{t:this.instance_8,p:{scaleX:3.716,scaleY:3.716,rotation:-34.1,x:284.2,y:290.9,alpha:1}},{t:this.instance_7,p:{scaleX:3.716,scaleY:3.716,rotation:-34.1,x:325.7,y:303.9,alpha:1}},{t:this.instance_6,p:{scaleX:3.716,scaleY:3.716,rotation:-34.1,x:348.9,y:291.5,alpha:1}},{t:this.instance_5,p:{scaleX:3.716,scaleY:3.716,rotation:-34.1,x:377.6,y:288.7,alpha:1}},{t:this.instance_4,p:{scaleX:3.716,scaleY:3.716,rotation:-34.1,x:394.8,y:277.6,alpha:1}},{t:this.instance_3,p:{scaleX:3.716,scaleY:3.716,rotation:-34.1,x:419.9,y:281.9,alpha:1}},{t:this.instance_2,p:{scaleX:3.716,scaleY:3.716,rotation:-34.1,x:440.6,y:277.6,alpha:1}},{t:this.instance_1,p:{scaleX:3.716,scaleY:3.716,rotation:-34.1,x:473.5,y:291.5,alpha:1}},{t:this.instance,p:{scaleX:3.716,scaleY:3.716,rotation:-34.1,x:505.9,y:290.3,alpha:1}}]},1).to({state:[{t:this.instance_10,p:{scaleX:3.556,scaleY:3.556,rotation:-53.3,x:219.4,y:275.1,alpha:1}},{t:this.instance_9,p:{scaleX:3.556,scaleY:3.556,rotation:-53.3,x:263.1,y:285.6,alpha:1}},{t:this.instance_8,p:{scaleX:3.556,scaleY:3.556,rotation:-53.3,x:292.3,y:285.4,alpha:1}},{t:this.instance_7,p:{scaleX:3.556,scaleY:3.556,rotation:-53.3,x:335.6,y:294.4,alpha:1}},{t:this.instance_6,p:{scaleX:3.556,scaleY:3.556,rotation:-53.3,x:354.2,y:285.8,alpha:1}},{t:this.instance_5,p:{scaleX:3.556,scaleY:3.556,rotation:-53.3,x:380.8,y:283.8,alpha:1}},{t:this.instance_4,p:{scaleX:3.556,scaleY:3.556,rotation:-53.3,x:394.2,y:276.2,alpha:1}},{t:this.instance_3,p:{scaleX:3.556,scaleY:3.556,rotation:-53.3,x:419.3,y:279.1,alpha:1}},{t:this.instance_2,p:{scaleX:3.556,scaleY:3.556,rotation:-53.3,x:437.9,y:276.2,alpha:1}},{t:this.instance_1,p:{scaleX:3.556,scaleY:3.556,rotation:-53.3,x:473.2,y:285.8,alpha:1}},{t:this.instance,p:{scaleX:3.556,scaleY:3.556,rotation:-53.3,x:503.7,y:285,alpha:1}}]},1).to({state:[{t:this.instance_10,p:{scaleX:3.361,scaleY:3.361,rotation:-76.7,x:226.2,y:273.8,alpha:1}},{t:this.instance_9,p:{scaleX:3.361,scaleY:3.361,rotation:-76.7,x:270.6,y:277.6,alpha:1}},{t:this.instance_8,p:{scaleX:3.361,scaleY:3.361,rotation:-76.7,x:298.4,y:277.5,alpha:1}},{t:this.instance_7,p:{scaleX:3.361,scaleY:3.361,rotation:-76.7,x:341.9,y:280.8,alpha:1}},{t:this.instance_6,p:{scaleX:3.361,scaleY:3.361,rotation:-76.7,x:357.4,y:277.7,alpha:1}},{t:this.instance_5,p:{scaleX:3.361,scaleY:3.361,rotation:-76.7,x:382.2,y:277,alpha:1}},{t:this.instance_4,p:{scaleX:3.361,scaleY:3.361,rotation:-76.7,x:393,y:274.2,alpha:1}},{t:this.instance_3,p:{scaleX:3.361,scaleY:3.361,rotation:-76.7,x:417.7,y:275.3,alpha:1}},{t:this.instance_2,p:{scaleX:3.361,scaleY:3.361,rotation:-76.7,x:434.6,y:274.2,alpha:1}},{t:this.instance_1,p:{scaleX:3.361,scaleY:3.361,rotation:-76.7,x:470.7,y:277.7,alpha:1}},{t:this.instance,p:{scaleX:3.361,scaleY:3.361,rotation:-76.7,x:499.6,y:277.4,alpha:1}}]},1).to({state:[{t:this.instance_10,p:{scaleX:3.13,scaleY:3.13,rotation:-104.4,x:232.5,y:272.3,alpha:1}},{t:this.instance_9,p:{scaleX:3.13,scaleY:3.13,rotation:-104.4,x:274.2,y:268.4,alpha:1}},{t:this.instance_8,p:{scaleX:3.13,scaleY:3.13,rotation:-104.4,x:300.6,y:268.5,alpha:1}},{t:this.instance_7,p:{scaleX:3.13,scaleY:3.13,rotation:-104.4,x:341.7,y:265.2,alpha:1}},{t:this.instance_6,p:{scaleX:3.13,scaleY:3.13,rotation:-104.4,x:356.7,y:268.4,alpha:1}},{t:this.instance_5,p:{scaleX:3.13,scaleY:3.13,rotation:-104.4,x:380.3,y:269.1,alpha:1}},{t:this.instance_4,p:{scaleX:3.13,scaleY:3.13,rotation:-104.4,x:390.8,y:271.9,alpha:1}},{t:this.instance_3,p:{scaleX:3.13,scaleY:3.13,rotation:-104.4,x:414.2,y:270.8,alpha:1}},{t:this.instance_2,p:{scaleX:3.13,scaleY:3.13,rotation:-104.4,x:430.4,y:271.9,alpha:1}},{t:this.instance_1,p:{scaleX:3.13,scaleY:3.13,rotation:-104.4,x:464.3,y:268.4,alpha:1}},{t:this.instance,p:{scaleX:3.13,scaleY:3.13,rotation:-104.4,x:491.8,y:268.7,alpha:1}}]},1).to({state:[{t:this.instance_10,p:{scaleX:2.864,scaleY:2.864,rotation:-136.3,x:237.9,y:271,alpha:1}},{t:this.instance_9,p:{scaleX:2.864,scaleY:2.864,rotation:-136.3,x:273,y:260.8,alpha:1}},{t:this.instance_8,p:{scaleX:2.864,scaleY:2.864,rotation:-136.3,x:298.1,y:261,alpha:1}},{t:this.instance_7,p:{scaleX:2.864,scaleY:2.864,rotation:-136.3,x:333.2,y:252.2,alpha:1}},{t:this.instance_6,p:{scaleX:2.864,scaleY:2.864,rotation:-136.3,x:351.1,y:260.6,alpha:1}},{t:this.instance_5,p:{scaleX:2.864,scaleY:2.864,rotation:-136.3,x:374.3,y:262.5,alpha:1}},{t:this.instance_4,p:{scaleX:2.864,scaleY:2.864,rotation:-136.3,x:387.5,y:270,alpha:1}},{t:this.instance_3,p:{scaleX:2.864,scaleY:2.864,rotation:-136.3,x:408.4,y:267.1,alpha:1}},{t:this.instance_2,p:{scaleX:2.864,scaleY:2.864,rotation:-136.3,x:424.9,y:270,alpha:1}},{t:this.instance_1,p:{scaleX:2.864,scaleY:2.864,rotation:-136.3,x:453.1,y:260.6,alpha:1}},{t:this.instance,p:{scaleX:2.864,scaleY:2.864,rotation:-136.3,x:479.5,y:261.4,alpha:1}}]},1).to({state:[{t:this.instance_10,p:{scaleX:2.562,scaleY:2.562,rotation:-172.5,x:242.7,y:270.5,alpha:1}},{t:this.instance_9,p:{scaleX:2.562,scaleY:2.562,rotation:-172.5,x:268.4,y:258,alpha:1}},{t:this.instance_8,p:{scaleX:2.562,scaleY:2.562,rotation:-172.5,x:292.2,y:258.3,alpha:1}},{t:this.instance_7,p:{scaleX:2.562,scaleY:2.562,rotation:-172.5,x:318.9,y:247.5,alpha:1}},{t:this.instance_6,p:{scaleX:2.562,scaleY:2.562,rotation:-172.5,x:341.9,y:257.8,alpha:1}},{t:this.instance_5,p:{scaleX:2.562,scaleY:2.562,rotation:-172.5,x:365.3,y:260.1,alpha:1}},{t:this.instance_4,p:{scaleX:2.562,scaleY:2.562,rotation:-172.5,x:383.2,y:269.3,alpha:1}},{t:this.instance_3,p:{scaleX:2.562,scaleY:2.562,rotation:-172.5,x:400.8,y:265.8,alpha:1}},{t:this.instance_2,p:{scaleX:2.562,scaleY:2.562,rotation:-172.5,x:418.6,y:269.3,alpha:1}},{t:this.instance_1,p:{scaleX:2.562,scaleY:2.562,rotation:-172.5,x:438.3,y:257.8,alpha:1}},{t:this.instance,p:{scaleX:2.562,scaleY:2.562,rotation:-172.5,x:463.8,y:258.8,alpha:1}}]},1).to({state:[{t:this.instance_10,p:{scaleX:2.225,scaleY:2.225,rotation:147,x:247.6,y:271.2,alpha:1}},{t:this.instance_9,p:{scaleX:2.225,scaleY:2.225,rotation:147,x:264.3,y:262,alpha:1}},{t:this.instance_8,p:{scaleX:2.225,scaleY:2.225,rotation:147,x:286.9,y:262.2,alpha:1}},{t:this.instance_7,p:{scaleX:2.225,scaleY:2.225,rotation:147,x:305.5,y:254.3,alpha:1}},{t:this.instance_6,p:{scaleX:2.225,scaleY:2.225,rotation:147,x:333.4,y:261.9,alpha:1}},{t:this.instance_5,p:{scaleX:2.225,scaleY:2.225,rotation:147,x:356.7,y:263.6,alpha:1}},{t:this.instance_4,p:{scaleX:2.225,scaleY:2.225,rotation:147,x:379.1,y:270.3,alpha:1}},{t:this.instance_3,p:{scaleX:2.225,scaleY:2.225,rotation:147,x:393.6,y:267.7,alpha:1}},{t:this.instance_2,p:{scaleX:2.225,scaleY:2.225,rotation:147,x:412.4,y:270.3,alpha:1}},{t:this.instance_1,p:{scaleX:2.225,scaleY:2.225,rotation:147,x:424,y:261.9,alpha:1}},{t:this.instance,p:{scaleX:2.225,scaleY:2.225,rotation:147,x:448.7,y:262.6,alpha:1}}]},1).to({state:[{t:this.instance_10,p:{scaleX:1.852,scaleY:1.852,rotation:102.2,x:253.5,y:272.6,alpha:1}},{t:this.instance_9,p:{scaleX:1.852,scaleY:1.852,rotation:102.2,x:265.8,y:270.7,alpha:1}},{t:this.instance_8,p:{scaleX:1.852,scaleY:1.852,rotation:102.2,x:287,y:270.8,alpha:1}},{t:this.instance_7,p:{scaleX:1.852,scaleY:1.852,rotation:102.2,x:301.7,y:269.1,alpha:1}},{t:this.instance_6,p:{scaleX:1.852,scaleY:1.852,rotation:102.2,x:330.5,y:270.7,alpha:1}},{t:this.instance_5,p:{scaleX:1.852,scaleY:1.852,rotation:102.2,x:353,y:271,alpha:1}},{t:this.instance_4,p:{scaleX:1.852,scaleY:1.852,rotation:102.2,x:376.4,y:272.5,alpha:1}},{t:this.instance_3,p:{scaleX:1.852,scaleY:1.852,rotation:102.2,x:389.1,y:271.9,alpha:1}},{t:this.instance_2,p:{scaleX:1.852,scaleY:1.852,rotation:102.2,x:407.7,y:272.5,alpha:1}},{t:this.instance_1,p:{scaleX:1.852,scaleY:1.852,rotation:102.2,x:415.5,y:270.7,alpha:1}},{t:this.instance,p:{scaleX:1.852,scaleY:1.852,rotation:102.2,x:438.8,y:270.8,alpha:1}}]},1).to({state:[{t:this.instance_10,p:{scaleX:1.444,scaleY:1.444,rotation:53.3,x:260.6,y:273.9,alpha:1}},{t:this.instance_9,p:{scaleX:1.444,scaleY:1.444,rotation:53.3,x:274.7,y:278.1,alpha:1}},{t:this.instance_8,p:{scaleX:1.444,scaleY:1.444,rotation:53.3,x:294.5,y:278,alpha:1}},{t:this.instance_7,p:{scaleX:1.444,scaleY:1.444,rotation:53.3,x:310.4,y:281.7,alpha:1}},{t:this.instance_6,p:{scaleX:1.444,scaleY:1.444,rotation:53.3,x:335.1,y:278.2,alpha:1}},{t:this.instance_5,p:{scaleX:1.444,scaleY:1.444,rotation:53.3,x:355.7,y:277.4,alpha:1}},{t:this.instance_4,p:{scaleX:1.444,scaleY:1.444,rotation:53.3,x:375.6,y:274.3,alpha:1}},{t:this.instance_3,p:{scaleX:1.444,scaleY:1.444,rotation:53.3,x:388.1,y:275.5,alpha:1}},{t:this.instance_2,p:{scaleX:1.444,scaleY:1.444,rotation:53.3,x:404.7,y:274.3,alpha:1}},{t:this.instance_1,p:{scaleX:1.444,scaleY:1.444,rotation:53.3,x:414.5,y:278.2,alpha:1}},{t:this.instance,p:{scaleX:1.444,scaleY:1.444,rotation:53.3,x:436,y:277.9,alpha:1}}]},1).to({state:[{t:this.instance_10,p:{scaleX:1,scaleY:1,rotation:0,x:268.2,y:274,alpha:1}},{t:this.instance_9,p:{scaleX:1,scaleY:1,rotation:0,x:286.5,y:278.9,alpha:1}},{t:this.instance_8,p:{scaleX:1,scaleY:1,rotation:0,x:304.8,y:278.8,alpha:1}},{t:this.instance_7,p:{scaleX:1,scaleY:1,rotation:0,x:324.1,y:283.1,alpha:1}},{t:this.instance_6,p:{scaleX:1,scaleY:1,rotation:0,x:342.8,y:279,alpha:1}},{t:this.instance_5,p:{scaleX:1,scaleY:1,rotation:0,x:360.9,y:278.1,alpha:1}},{t:this.instance_4,p:{scaleX:1,scaleY:1,rotation:0,x:375.5,y:274.5,alpha:1}},{t:this.instance_3,p:{scaleX:1,scaleY:1,rotation:0,x:388.6,y:275.9,alpha:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,rotation:0,x:402.6,y:274.5,alpha:1}},{t:this.instance_1,p:{scaleX:1,scaleY:1,rotation:0,x:416.4,y:279,alpha:1}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:436.1,y:278.6,alpha:1}}]},1).to({state:[{t:this.instance_65,p:{scaleX:2,x:184.3,alpha:0}},{t:this.instance_64,p:{scaleX:2,x:221,alpha:0}},{t:this.instance_63,p:{scaleX:2,x:257.6,alpha:0}},{t:this.instance_62,p:{scaleX:2,x:296.2,alpha:0}},{t:this.instance_61,p:{scaleX:2,x:333.5,alpha:0}},{t:this.instance_60,p:{scaleX:2,x:369.7,alpha:0}},{t:this.instance_59,p:{scaleX:2,x:399,alpha:0}},{t:this.instance_58,p:{scaleX:2,x:425.2,alpha:0}},{t:this.instance_57,p:{scaleX:2,x:453.1,alpha:0}},{t:this.instance_56,p:{scaleX:2,x:480.8,alpha:0}},{t:this.instance_55,p:{scaleX:2,x:520.1,alpha:0}},{t:this.instance_54,p:{scaleX:1.8,x:201.1,alpha:0}},{t:this.instance_53,p:{scaleX:1.8,x:234.1,alpha:0}},{t:this.instance_52,p:{scaleX:1.8,x:267.1,alpha:0}},{t:this.instance_51,p:{scaleX:1.8,x:301.8,alpha:0}},{t:this.instance_50,p:{scaleX:1.8,x:335.4,alpha:0}},{t:this.instance_49,p:{scaleX:1.8,x:368,alpha:0}},{t:this.instance_48,p:{scaleX:1.8,x:394.3,alpha:0}},{t:this.instance_47,p:{scaleX:1.8,x:417.9,alpha:0}},{t:this.instance_46,p:{scaleX:1.8,x:443,alpha:0}},{t:this.instance_45,p:{scaleX:1.8,x:467.9,alpha:0}},{t:this.instance_44,p:{scaleX:1.8,x:503.3,alpha:0}},{t:this.instance_43,p:{scaleX:1.6,x:217.9,alpha:0}},{t:this.instance_42,p:{scaleX:1.6,x:247.2,alpha:0}},{t:this.instance_41,p:{scaleX:1.6,x:276.5,alpha:0}},{t:this.instance_40,p:{scaleX:1.6,x:307.4,alpha:0}},{t:this.instance_39,p:{scaleX:1.6,x:337.2,alpha:0}},{t:this.instance_38,p:{scaleX:1.6,x:366.2,alpha:0}},{t:this.instance_37,p:{scaleX:1.6,x:389.6,alpha:0}},{t:this.instance_36,p:{scaleX:1.6,x:410.6,alpha:0}},{t:this.instance_35,p:{scaleX:1.6,x:432.9,alpha:0}},{t:this.instance_34,p:{scaleX:1.6,x:455.1,alpha:0}},{t:this.instance_33,p:{scaleX:1.6,x:486.5,alpha:0}},{t:this.instance_32,p:{scaleX:1.4,x:234.6,alpha:0}},{t:this.instance_31,p:{scaleX:1.4,x:260.3,alpha:0}},{t:this.instance_30,p:{scaleX:1.4,x:285.9,alpha:0}},{t:this.instance_29,p:{scaleX:1.4,x:313,alpha:0}},{t:this.instance_28,p:{scaleX:1.4,x:339.1,alpha:0}},{t:this.instance_27,p:{scaleX:1.4,x:364.4,alpha:0}},{t:this.instance_26,p:{scaleX:1.4,x:384.9,alpha:0}},{t:this.instance_25,p:{scaleX:1.4,x:403.3,alpha:0}},{t:this.instance_24,p:{scaleX:1.4,x:422.8,alpha:0}},{t:this.instance_23,p:{scaleX:1.4,x:442.2,alpha:0}},{t:this.instance_22,p:{scaleX:1.4,x:469.7,alpha:0}},{t:this.instance_21,p:{scaleX:1.2,x:251.4,alpha:0}},{t:this.instance_20,p:{scaleX:1.2,x:273.4,alpha:0}},{t:this.instance_19,p:{scaleX:1.2,x:295.4,alpha:0}},{t:this.instance_18,p:{scaleX:1.2,x:318.5,alpha:0}},{t:this.instance_17,p:{scaleX:1.2,x:340.9,alpha:0}},{t:this.instance_16,p:{scaleX:1.2,alpha:0,x:362.6}},{t:this.instance_15,p:{scaleX:1.2,x:380.2,alpha:0}},{t:this.instance_14,p:{scaleX:1.2,x:395.9,alpha:0}},{t:this.instance_13,p:{scaleX:1.2,x:412.7,alpha:0}},{t:this.instance_12,p:{scaleX:1.2,x:429.3,alpha:0}},{t:this.instance_11,p:{scaleX:1.2,x:452.9,alpha:0}},{t:this.instance_10,p:{scaleX:1,scaleY:1,rotation:0,x:268.2,y:274,alpha:0}},{t:this.instance_9,p:{scaleX:1,scaleY:1,rotation:0,x:286.5,y:278.9,alpha:0}},{t:this.instance_8,p:{scaleX:1,scaleY:1,rotation:0,x:304.8,y:278.8,alpha:0}},{t:this.instance_7,p:{scaleX:1,scaleY:1,rotation:0,x:324.1,y:283.1,alpha:0}},{t:this.instance_6,p:{scaleX:1,scaleY:1,rotation:0,x:342.8,y:279,alpha:0}},{t:this.instance_5,p:{scaleX:1,scaleY:1,rotation:0,x:360.9,y:278.1,alpha:0}},{t:this.instance_4,p:{scaleX:1,scaleY:1,rotation:0,x:375.5,y:274.5,alpha:0}},{t:this.instance_3,p:{scaleX:1,scaleY:1,rotation:0,x:388.6,y:275.9,alpha:0}},{t:this.instance_2,p:{scaleX:1,scaleY:1,rotation:0,x:402.6,y:274.5,alpha:0}},{t:this.instance_1,p:{scaleX:1,scaleY:1,rotation:0,x:416.4,y:279,alpha:0}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:436.1,y:278.6,alpha:0}}]},1).to({state:[{t:this.instance_65,p:{scaleX:1.947,x:188.7,alpha:0.02}},{t:this.instance_64,p:{scaleX:1.947,x:224.5,alpha:0.02}},{t:this.instance_63,p:{scaleX:1.947,x:260.1,alpha:0.02}},{t:this.instance_62,p:{scaleX:1.947,x:297.7,alpha:0.02}},{t:this.instance_61,p:{scaleX:1.947,x:334,alpha:0.02}},{t:this.instance_60,p:{scaleX:1.947,x:369.3,alpha:0.02}},{t:this.instance_59,p:{scaleX:1.947,x:397.8,alpha:0.02}},{t:this.instance_58,p:{scaleX:1.947,x:423.3,alpha:0.02}},{t:this.instance_57,p:{scaleX:1.947,x:450.5,alpha:0.02}},{t:this.instance_56,p:{scaleX:1.947,x:477.4,alpha:0.02}},{t:this.instance_55,p:{scaleX:1.947,x:515.7,alpha:0.02}},{t:this.instance_54,p:{scaleX:1.758,x:204.6,alpha:0.02}},{t:this.instance_53,p:{scaleX:1.758,x:236.9,alpha:0.02}},{t:this.instance_52,p:{scaleX:1.758,x:269.1,alpha:0.02}},{t:this.instance_51,p:{scaleX:1.758,x:303,alpha:0.02}},{t:this.instance_50,p:{scaleX:1.758,x:335.8,alpha:0.02}},{t:this.instance_49,p:{scaleX:1.758,x:367.6,alpha:0.02}},{t:this.instance_48,p:{scaleX:1.758,x:393.3,alpha:0.02}},{t:this.instance_47,p:{scaleX:1.758,x:416.4,alpha:0.02}},{t:this.instance_46,p:{scaleX:1.758,x:440.9,alpha:0.02}},{t:this.instance_45,p:{scaleX:1.758,x:465.2,alpha:0.02}},{t:this.instance_44,p:{scaleX:1.758,x:499.8,alpha:0.02}},{t:this.instance_43,p:{scaleX:1.568,x:220.5,alpha:0.02}},{t:this.instance_42,p:{scaleX:1.568,x:249.3,alpha:0.02}},{t:this.instance_41,p:{scaleX:1.568,x:278,alpha:0.02}},{t:this.instance_40,p:{scaleX:1.568,x:308.3,alpha:0.02}},{t:this.instance_39,p:{scaleX:1.568,x:337.5,alpha:0.02}},{t:this.instance_38,p:{scaleX:1.568,x:365.9,alpha:0.02}},{t:this.instance_37,p:{scaleX:1.568,x:388.9,alpha:0.02}},{t:this.instance_36,p:{scaleX:1.568,x:409.4,alpha:0.02}},{t:this.instance_35,p:{scaleX:1.568,x:431.3,alpha:0.02}},{t:this.instance_34,p:{scaleX:1.568,x:453,alpha:0.02}},{t:this.instance_33,p:{scaleX:1.568,x:483.9,alpha:0.02}},{t:this.instance_32,p:{scaleX:1.379,x:236.4,alpha:0.02}},{t:this.instance_31,p:{scaleX:1.379,x:261.7,alpha:0.02}},{t:this.instance_30,p:{scaleX:1.379,x:286.9,alpha:0.02}},{t:this.instance_29,p:{scaleX:1.379,x:313.6,alpha:0.02}},{t:this.instance_28,p:{scaleX:1.379,x:339.3,alpha:0.02}},{t:this.instance_27,p:{scaleX:1.379,x:364.2,alpha:0.02}},{t:this.instance_26,p:{scaleX:1.379,x:384.4,alpha:0.02}},{t:this.instance_25,p:{scaleX:1.379,x:402.5,alpha:0.02}},{t:this.instance_24,p:{scaleX:1.379,x:421.7,alpha:0.02}},{t:this.instance_23,p:{scaleX:1.379,x:440.8,alpha:0.02}},{t:this.instance_22,p:{scaleX:1.379,x:467.9,alpha:0.02}},{t:this.instance_21,p:{scaleX:1.189,x:252.3,alpha:0.02}},{t:this.instance_20,p:{scaleX:1.189,x:274.1,alpha:0.02}},{t:this.instance_19,p:{scaleX:1.189,x:295.9,alpha:0.02}},{t:this.instance_18,p:{scaleX:1.189,x:318.8,alpha:0.02}},{t:this.instance_17,p:{scaleX:1.189,x:341,alpha:0.02}},{t:this.instance_16,p:{scaleX:1.189,alpha:0.02,x:362.6}},{t:this.instance_15,p:{scaleX:1.189,x:380,alpha:0.02}},{t:this.instance_14,p:{scaleX:1.189,x:395.6,alpha:0.02}},{t:this.instance_13,p:{scaleX:1.189,x:412.2,alpha:0.02}},{t:this.instance_12,p:{scaleX:1.189,x:428.6,alpha:0.02}},{t:this.instance_11,p:{scaleX:1.189,x:452,alpha:0.02}},{t:this.instance_10,p:{scaleX:1,scaleY:1,rotation:0,x:268.2,y:274,alpha:0}},{t:this.instance_9,p:{scaleX:1,scaleY:1,rotation:0,x:286.5,y:278.9,alpha:0}},{t:this.instance_8,p:{scaleX:1,scaleY:1,rotation:0,x:304.8,y:278.8,alpha:0}},{t:this.instance_7,p:{scaleX:1,scaleY:1,rotation:0,x:324.1,y:283.1,alpha:0}},{t:this.instance_6,p:{scaleX:1,scaleY:1,rotation:0,x:342.8,y:279,alpha:0}},{t:this.instance_5,p:{scaleX:1,scaleY:1,rotation:0,x:360.9,y:278.1,alpha:0}},{t:this.instance_4,p:{scaleX:1,scaleY:1,rotation:0,x:375.5,y:274.5,alpha:0}},{t:this.instance_3,p:{scaleX:1,scaleY:1,rotation:0,x:388.6,y:275.9,alpha:0}},{t:this.instance_2,p:{scaleX:1,scaleY:1,rotation:0,x:402.6,y:274.5,alpha:0}},{t:this.instance_1,p:{scaleX:1,scaleY:1,rotation:0,x:416.4,y:279,alpha:0}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:436.1,y:278.6,alpha:0}}]},1).to({state:[{t:this.instance_65,p:{scaleX:1.895,x:193.2,alpha:0.039}},{t:this.instance_64,p:{scaleX:1.895,x:227.9,alpha:0.039}},{t:this.instance_63,p:{scaleX:1.895,x:262.6,alpha:0.039}},{t:this.instance_62,p:{scaleX:1.895,x:299.2,alpha:0.039}},{t:this.instance_61,p:{scaleX:1.895,x:334.5,alpha:0.039}},{t:this.instance_60,p:{scaleX:1.895,x:368.8,alpha:0.039}},{t:this.instance_59,p:{scaleX:1.895,x:396.6,alpha:0.039}},{t:this.instance_58,p:{scaleX:1.895,x:421.4,alpha:0.039}},{t:this.instance_57,p:{scaleX:1.895,x:447.8,alpha:0.039}},{t:this.instance_56,p:{scaleX:1.895,x:474,alpha:0.039}},{t:this.instance_55,p:{scaleX:1.895,x:511.3,alpha:0.039}},{t:this.instance_54,p:{scaleX:1.716,x:208.2,alpha:0.039}},{t:this.instance_53,p:{scaleX:1.716,x:239.6,alpha:0.039}},{t:this.instance_52,p:{scaleX:1.716,x:271,alpha:0.039}},{t:this.instance_51,p:{scaleX:1.716,x:304.2,alpha:0.039}},{t:this.instance_50,p:{scaleX:1.716,x:336.2,alpha:0.039}},{t:this.instance_49,p:{scaleX:1.716,x:367.2,alpha:0.039}},{t:this.instance_48,p:{scaleX:1.716,x:392.3,alpha:0.039}},{t:this.instance_47,p:{scaleX:1.716,x:414.8,alpha:0.039}},{t:this.instance_46,p:{scaleX:1.716,x:438.8,alpha:0.039}},{t:this.instance_45,p:{scaleX:1.716,x:462.5,alpha:0.039}},{t:this.instance_44,p:{scaleX:1.716,x:496.2,alpha:0.039}},{t:this.instance_43,p:{scaleX:1.537,x:223.2,alpha:0.039}},{t:this.instance_42,p:{scaleX:1.537,x:251.4,alpha:0.039}},{t:this.instance_41,p:{scaleX:1.537,x:279.5,alpha:0.039}},{t:this.instance_40,p:{scaleX:1.537,x:309.1,alpha:0.039}},{t:this.instance_39,p:{scaleX:1.537,x:337.8,alpha:0.039}},{t:this.instance_38,p:{scaleX:1.537,x:365.6,alpha:0.039}},{t:this.instance_37,p:{scaleX:1.537,x:388.1,alpha:0.039}},{t:this.instance_36,p:{scaleX:1.537,x:408.3,alpha:0.039}},{t:this.instance_35,p:{scaleX:1.537,x:429.7,alpha:0.039}},{t:this.instance_34,p:{scaleX:1.537,x:451,alpha:0.039}},{t:this.instance_33,p:{scaleX:1.537,x:481.2,alpha:0.039}},{t:this.instance_32,p:{scaleX:1.358,x:238.2,alpha:0.039}},{t:this.instance_31,p:{scaleX:1.358,x:263.1,alpha:0.039}},{t:this.instance_30,p:{scaleX:1.358,x:287.9,alpha:0.039}},{t:this.instance_29,p:{scaleX:1.358,x:314.1,alpha:0.039}},{t:this.instance_28,p:{scaleX:1.358,x:339.5,alpha:0.039}},{t:this.instance_27,p:{scaleX:1.358,x:364,alpha:0.039}},{t:this.instance_26,p:{scaleX:1.358,x:383.9,alpha:0.039}},{t:this.instance_25,p:{scaleX:1.358,x:401.7,alpha:0.039}},{t:this.instance_24,p:{scaleX:1.358,x:420.7,alpha:0.039}},{t:this.instance_23,p:{scaleX:1.358,x:439.5,alpha:0.039}},{t:this.instance_22,p:{scaleX:1.358,x:466.2,alpha:0.039}},{t:this.instance_21,p:{scaleX:1.179,x:253.2,alpha:0.039}},{t:this.instance_20,p:{scaleX:1.179,x:274.8,alpha:0.039}},{t:this.instance_19,p:{scaleX:1.179,x:296.4,alpha:0.039}},{t:this.instance_18,p:{scaleX:1.179,x:319.1,alpha:0.039}},{t:this.instance_17,p:{scaleX:1.179,x:341.1,alpha:0.039}},{t:this.instance_16,p:{scaleX:1.179,alpha:0.039,x:362.5}},{t:this.instance_15,p:{scaleX:1.179,x:379.7,alpha:0.039}},{t:this.instance_14,p:{scaleX:1.179,x:395.2,alpha:0.039}},{t:this.instance_13,p:{scaleX:1.179,x:411.6,alpha:0.039}},{t:this.instance_12,p:{scaleX:1.179,x:427.9,alpha:0.039}},{t:this.instance_11,p:{scaleX:1.179,x:451.1,alpha:0.039}},{t:this.instance_10,p:{scaleX:1,scaleY:1,rotation:0,x:268.2,y:274,alpha:0}},{t:this.instance_9,p:{scaleX:1,scaleY:1,rotation:0,x:286.5,y:278.9,alpha:0}},{t:this.instance_8,p:{scaleX:1,scaleY:1,rotation:0,x:304.8,y:278.8,alpha:0}},{t:this.instance_7,p:{scaleX:1,scaleY:1,rotation:0,x:324.1,y:283.1,alpha:0}},{t:this.instance_6,p:{scaleX:1,scaleY:1,rotation:0,x:342.8,y:279,alpha:0}},{t:this.instance_5,p:{scaleX:1,scaleY:1,rotation:0,x:360.9,y:278.1,alpha:0}},{t:this.instance_4,p:{scaleX:1,scaleY:1,rotation:0,x:375.5,y:274.5,alpha:0}},{t:this.instance_3,p:{scaleX:1,scaleY:1,rotation:0,x:388.6,y:275.9,alpha:0}},{t:this.instance_2,p:{scaleX:1,scaleY:1,rotation:0,x:402.6,y:274.5,alpha:0}},{t:this.instance_1,p:{scaleX:1,scaleY:1,rotation:0,x:416.4,y:279,alpha:0}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:436.1,y:278.6,alpha:0}}]},1).to({state:[{t:this.instance_65,p:{scaleX:1.842,x:197.6,alpha:0.051}},{t:this.instance_64,p:{scaleX:1.842,x:231.4,alpha:0.051}},{t:this.instance_63,p:{scaleX:1.842,x:265.1,alpha:0.051}},{t:this.instance_62,p:{scaleX:1.842,x:300.6,alpha:0.051}},{t:this.instance_61,p:{scaleX:1.842,x:335,alpha:0.051}},{t:this.instance_60,p:{scaleX:1.842,x:368.3,alpha:0.051}},{t:this.instance_59,p:{scaleX:1.842,x:395.3,alpha:0.051}},{t:this.instance_58,p:{scaleX:1.842,x:419.4,alpha:0.051}},{t:this.instance_57,p:{scaleX:1.842,x:445.1,alpha:0.051}},{t:this.instance_56,p:{scaleX:1.842,x:470.7,alpha:0.051}},{t:this.instance_55,p:{scaleX:1.842,x:506.9,alpha:0.051}},{t:this.instance_54,p:{scaleX:1.674,x:211.7,alpha:0.051}},{t:this.instance_53,p:{scaleX:1.674,x:242.4,alpha:0.051}},{t:this.instance_52,p:{scaleX:1.674,x:273,alpha:0.051}},{t:this.instance_51,p:{scaleX:1.674,x:305.3,alpha:0.051}},{t:this.instance_50,p:{scaleX:1.674,x:336.5,alpha:0.051}},{t:this.instance_49,p:{scaleX:1.674,x:366.8,alpha:0.051}},{t:this.instance_48,p:{scaleX:1.674,x:391.4,alpha:0.051}},{t:this.instance_47,p:{scaleX:1.674,x:413.3,alpha:0.051}},{t:this.instance_46,p:{scaleX:1.674,x:436.6,alpha:0.051}},{t:this.instance_45,p:{scaleX:1.674,x:459.8,alpha:0.051}},{t:this.instance_44,p:{scaleX:1.674,x:492.7,alpha:0.051}},{t:this.instance_43,p:{scaleX:1.505,x:225.8,alpha:0.051}},{t:this.instance_42,p:{scaleX:1.505,x:253.4,alpha:0.051}},{t:this.instance_41,p:{scaleX:1.505,x:281,alpha:0.051}},{t:this.instance_40,p:{scaleX:1.505,x:310,alpha:0.051}},{t:this.instance_39,p:{scaleX:1.505,x:338.1,alpha:0.051}},{t:this.instance_38,p:{scaleX:1.505,x:365.3,alpha:0.051}},{t:this.instance_37,p:{scaleX:1.505,x:387.4,alpha:0.051}},{t:this.instance_36,p:{scaleX:1.505,x:407.1,alpha:0.051}},{t:this.instance_35,p:{scaleX:1.505,x:428.1,alpha:0.051}},{t:this.instance_34,p:{scaleX:1.505,x:449,alpha:0.051}},{t:this.instance_33,p:{scaleX:1.505,x:478.5,alpha:0.051}},{t:this.instance_32,p:{scaleX:1.337,x:239.9,alpha:0.051}},{t:this.instance_31,p:{scaleX:1.337,x:264.5,alpha:0.051}},{t:this.instance_30,p:{scaleX:1.337,x:288.9,alpha:0.051}},{t:this.instance_29,p:{scaleX:1.337,x:314.7,alpha:0.051}},{t:this.instance_28,p:{scaleX:1.337,x:339.7,alpha:0.051}},{t:this.instance_27,p:{scaleX:1.337,x:363.9,alpha:0.051}},{t:this.instance_26,p:{scaleX:1.337,x:383.4,alpha:0.051}},{t:this.instance_25,p:{scaleX:1.337,x:401,alpha:0.051}},{t:this.instance_24,p:{scaleX:1.337,x:419.6,alpha:0.051}},{t:this.instance_23,p:{scaleX:1.337,x:438.1,alpha:0.051}},{t:this.instance_22,p:{scaleX:1.337,x:464.4,alpha:0.051}},{t:this.instance_21,p:{scaleX:1.168,x:254.1,alpha:0.051}},{t:this.instance_20,p:{scaleX:1.168,x:275.5,alpha:0.051}},{t:this.instance_19,p:{scaleX:1.168,x:296.9,alpha:0.051}},{t:this.instance_18,p:{scaleX:1.168,x:319.4,alpha:0.051}},{t:this.instance_17,p:{scaleX:1.168,x:341.2,alpha:0.051}},{t:this.instance_16,p:{scaleX:1.168,alpha:0.051,x:362.4}},{t:this.instance_15,p:{scaleX:1.168,x:379.5,alpha:0.051}},{t:this.instance_14,p:{scaleX:1.168,x:394.8,alpha:0.051}},{t:this.instance_13,p:{scaleX:1.168,x:411.1,alpha:0.051}},{t:this.instance_12,p:{scaleX:1.168,x:427.3,alpha:0.051}},{t:this.instance_11,p:{scaleX:1.168,x:450.2,alpha:0.051}},{t:this.instance_10,p:{scaleX:1,scaleY:1,rotation:0,x:268.2,y:274,alpha:0}},{t:this.instance_9,p:{scaleX:1,scaleY:1,rotation:0,x:286.5,y:278.9,alpha:0}},{t:this.instance_8,p:{scaleX:1,scaleY:1,rotation:0,x:304.8,y:278.8,alpha:0}},{t:this.instance_7,p:{scaleX:1,scaleY:1,rotation:0,x:324.1,y:283.1,alpha:0}},{t:this.instance_6,p:{scaleX:1,scaleY:1,rotation:0,x:342.8,y:279,alpha:0}},{t:this.instance_5,p:{scaleX:1,scaleY:1,rotation:0,x:360.9,y:278.1,alpha:0}},{t:this.instance_4,p:{scaleX:1,scaleY:1,rotation:0,x:375.5,y:274.5,alpha:0}},{t:this.instance_3,p:{scaleX:1,scaleY:1,rotation:0,x:388.6,y:275.9,alpha:0}},{t:this.instance_2,p:{scaleX:1,scaleY:1,rotation:0,x:402.6,y:274.5,alpha:0}},{t:this.instance_1,p:{scaleX:1,scaleY:1,rotation:0,x:416.4,y:279,alpha:0}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:436.1,y:278.6,alpha:0}}]},1).to({state:[{t:this.instance_65,p:{scaleX:1.789,x:202,alpha:0.07}},{t:this.instance_64,p:{scaleX:1.789,x:234.8,alpha:0.07}},{t:this.instance_63,p:{scaleX:1.789,x:267.6,alpha:0.07}},{t:this.instance_62,p:{scaleX:1.789,x:302.1,alpha:0.07}},{t:this.instance_61,p:{scaleX:1.789,x:335.5,alpha:0.07}},{t:this.instance_60,p:{scaleX:1.789,x:367.9,alpha:0.07}},{t:this.instance_59,p:{scaleX:1.789,x:394.1,alpha:0.07}},{t:this.instance_58,p:{scaleX:1.789,x:417.5,alpha:0.07}},{t:this.instance_57,p:{scaleX:1.789,x:442.5,alpha:0.07}},{t:this.instance_56,p:{scaleX:1.789,x:467.3,alpha:0.07}},{t:this.instance_55,p:{scaleX:1.789,x:502.4,alpha:0.07}},{t:this.instance_54,p:{scaleX:1.632,x:215.2,alpha:0.07}},{t:this.instance_53,p:{scaleX:1.632,x:245.2,alpha:0.07}},{t:this.instance_52,p:{scaleX:1.632,x:275,alpha:0.07}},{t:this.instance_51,p:{scaleX:1.632,x:306.5,alpha:0.07}},{t:this.instance_50,p:{scaleX:1.632,x:336.9,alpha:0.07}},{t:this.instance_49,p:{scaleX:1.632,x:366.5,alpha:0.07}},{t:this.instance_48,p:{scaleX:1.632,x:390.4,alpha:0.07}},{t:this.instance_47,p:{scaleX:1.632,x:411.7,alpha:0.07}},{t:this.instance_46,p:{scaleX:1.632,x:434.5,alpha:0.07}},{t:this.instance_45,p:{scaleX:1.632,x:457.1,alpha:0.07}},{t:this.instance_44,p:{scaleX:1.632,x:489.2,alpha:0.07}},{t:this.instance_43,p:{scaleX:1.474,x:228.5,alpha:0.07}},{t:this.instance_42,p:{scaleX:1.474,x:255.5,alpha:0.07}},{t:this.instance_41,p:{scaleX:1.474,x:282.5,alpha:0.07}},{t:this.instance_40,p:{scaleX:1.474,x:310.9,alpha:0.07}},{t:this.instance_39,p:{scaleX:1.474,x:338.4,alpha:0.07}},{t:this.instance_38,p:{scaleX:1.474,x:365.1,alpha:0.07}},{t:this.instance_37,p:{scaleX:1.474,x:386.7,alpha:0.07}},{t:this.instance_36,p:{scaleX:1.474,x:406,alpha:0.07}},{t:this.instance_35,p:{scaleX:1.474,x:426.5,alpha:0.07}},{t:this.instance_34,p:{scaleX:1.474,x:446.9,alpha:0.07}},{t:this.instance_33,p:{scaleX:1.474,x:475.9,alpha:0.07}},{t:this.instance_32,p:{scaleX:1.316,x:241.7,alpha:0.07}},{t:this.instance_31,p:{scaleX:1.316,x:265.8,alpha:0.07}},{t:this.instance_30,p:{scaleX:1.316,x:289.9,alpha:0.07}},{t:this.instance_29,p:{scaleX:1.316,x:315.3,alpha:0.07}},{t:this.instance_28,p:{scaleX:1.316,x:339.9,alpha:0.07}},{t:this.instance_27,p:{scaleX:1.316,x:363.7,alpha:0.07}},{t:this.instance_26,p:{scaleX:1.316,x:382.9,alpha:0.07}},{t:this.instance_25,p:{scaleX:1.316,x:400.2,alpha:0.07}},{t:this.instance_24,p:{scaleX:1.316,x:418.5,alpha:0.07}},{t:this.instance_23,p:{scaleX:1.316,x:436.8,alpha:0.07}},{t:this.instance_22,p:{scaleX:1.316,x:462.6,alpha:0.07}},{t:this.instance_21,p:{scaleX:1.158,x:254.9,alpha:0.07}},{t:this.instance_20,p:{scaleX:1.158,x:276.2,alpha:0.07}},{t:this.instance_19,p:{scaleX:1.158,x:297.4,alpha:0.07}},{t:this.instance_18,p:{scaleX:1.158,x:319.7,alpha:0.07}},{t:this.instance_17,p:{scaleX:1.158,x:341.3,alpha:0.07}},{t:this.instance_16,p:{scaleX:1.158,alpha:0.07,x:362.3}},{t:this.instance_15,p:{scaleX:1.158,x:379.2,alpha:0.07}},{t:this.instance_14,p:{scaleX:1.158,x:394.4,alpha:0.07}},{t:this.instance_13,p:{scaleX:1.158,x:410.6,alpha:0.07}},{t:this.instance_12,p:{scaleX:1.158,x:426.6,alpha:0.07}},{t:this.instance_11,p:{scaleX:1.158,x:449.3,alpha:0.07}},{t:this.instance_10,p:{scaleX:1,scaleY:1,rotation:0,x:268.2,y:274,alpha:0}},{t:this.instance_9,p:{scaleX:1,scaleY:1,rotation:0,x:286.5,y:278.9,alpha:0}},{t:this.instance_8,p:{scaleX:1,scaleY:1,rotation:0,x:304.8,y:278.8,alpha:0}},{t:this.instance_7,p:{scaleX:1,scaleY:1,rotation:0,x:324.1,y:283.1,alpha:0}},{t:this.instance_6,p:{scaleX:1,scaleY:1,rotation:0,x:342.8,y:279,alpha:0}},{t:this.instance_5,p:{scaleX:1,scaleY:1,rotation:0,x:360.9,y:278.1,alpha:0}},{t:this.instance_4,p:{scaleX:1,scaleY:1,rotation:0,x:375.5,y:274.5,alpha:0}},{t:this.instance_3,p:{scaleX:1,scaleY:1,rotation:0,x:388.6,y:275.9,alpha:0}},{t:this.instance_2,p:{scaleX:1,scaleY:1,rotation:0,x:402.6,y:274.5,alpha:0}},{t:this.instance_1,p:{scaleX:1,scaleY:1,rotation:0,x:416.4,y:279,alpha:0}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:436.1,y:278.6,alpha:0}}]},1).to({state:[{t:this.instance_65,p:{scaleX:1.737,x:206.4,alpha:0.078}},{t:this.instance_64,p:{scaleX:1.737,x:238.3,alpha:0.078}},{t:this.instance_63,p:{scaleX:1.737,x:270,alpha:0.078}},{t:this.instance_62,p:{scaleX:1.737,x:303.6,alpha:0.078}},{t:this.instance_61,p:{scaleX:1.737,x:336,alpha:0.078}},{t:this.instance_60,p:{scaleX:1.737,x:367.4,alpha:0.078}},{t:this.instance_59,p:{scaleX:1.737,x:392.8,alpha:0.078}},{t:this.instance_58,p:{scaleX:1.737,x:415.6,alpha:0.078}},{t:this.instance_57,p:{scaleX:1.737,x:439.8,alpha:0.078}},{t:this.instance_56,p:{scaleX:1.737,x:463.9,alpha:0.078}},{t:this.instance_55,p:{scaleX:1.737,x:498,alpha:0.078}},{t:this.instance_54,p:{scaleX:1.589,x:218.7,alpha:0.078}},{t:this.instance_53,p:{scaleX:1.589,x:247.9,alpha:0.078}},{t:this.instance_52,p:{scaleX:1.589,x:277,alpha:0.078}},{t:this.instance_51,p:{scaleX:1.589,x:307.7,alpha:0.078}},{t:this.instance_50,p:{scaleX:1.589,x:337.3,alpha:0.078}},{t:this.instance_49,p:{scaleX:1.589,x:366.1,alpha:0.078}},{t:this.instance_48,p:{scaleX:1.589,x:389.4,alpha:0.078}},{t:this.instance_47,p:{scaleX:1.589,x:410.2,alpha:0.078}},{t:this.instance_46,p:{scaleX:1.589,x:432.4,alpha:0.078}},{t:this.instance_45,p:{scaleX:1.589,x:454.4,alpha:0.078}},{t:this.instance_44,p:{scaleX:1.589,x:485.6,alpha:0.078}},{t:this.instance_43,p:{scaleX:1.442,x:231.1,alpha:0.078}},{t:this.instance_42,p:{scaleX:1.442,x:257.6,alpha:0.078}},{t:this.instance_41,p:{scaleX:1.442,x:284,alpha:0.078}},{t:this.instance_40,p:{scaleX:1.442,x:311.8,alpha:0.078}},{t:this.instance_39,p:{scaleX:1.442,x:338.7,alpha:0.078}},{t:this.instance_38,p:{scaleX:1.442,x:364.8,alpha:0.078}},{t:this.instance_37,p:{scaleX:1.442,x:385.9,alpha:0.078}},{t:this.instance_36,p:{scaleX:1.442,x:404.8,alpha:0.078}},{t:this.instance_35,p:{scaleX:1.442,x:424.9,alpha:0.078}},{t:this.instance_34,p:{scaleX:1.442,x:444.9,alpha:0.078}},{t:this.instance_33,p:{scaleX:1.442,x:473.2,alpha:0.078}},{t:this.instance_32,p:{scaleX:1.295,x:243.5,alpha:0.078}},{t:this.instance_31,p:{scaleX:1.295,x:267.2,alpha:0.078}},{t:this.instance_30,p:{scaleX:1.295,x:290.9,alpha:0.078}},{t:this.instance_29,p:{scaleX:1.295,x:315.9,alpha:0.078}},{t:this.instance_28,p:{scaleX:1.295,x:340,alpha:0.078}},{t:this.instance_27,p:{scaleX:1.295,x:363.5,alpha:0.078}},{t:this.instance_26,p:{scaleX:1.295,x:382.5,alpha:0.078}},{t:this.instance_25,p:{scaleX:1.295,x:399.4,alpha:0.078}},{t:this.instance_24,p:{scaleX:1.295,x:417.5,alpha:0.078}},{t:this.instance_23,p:{scaleX:1.295,x:435.4,alpha:0.078}},{t:this.instance_22,p:{scaleX:1.295,x:460.8,alpha:0.078}},{t:this.instance_21,p:{scaleX:1.147,x:255.8,alpha:0.078}},{t:this.instance_20,p:{scaleX:1.147,x:276.9,alpha:0.078}},{t:this.instance_19,p:{scaleX:1.147,x:297.9,alpha:0.078}},{t:this.instance_18,p:{scaleX:1.147,x:320,alpha:0.078}},{t:this.instance_17,p:{scaleX:1.147,x:341.4,alpha:0.078}},{t:this.instance_16,p:{scaleX:1.147,alpha:0.078,x:362.2}},{t:this.instance_15,p:{scaleX:1.147,x:379,alpha:0.078}},{t:this.instance_14,p:{scaleX:1.147,x:394,alpha:0.078}},{t:this.instance_13,p:{scaleX:1.147,x:410,alpha:0.078}},{t:this.instance_12,p:{scaleX:1.147,x:425.9,alpha:0.078}},{t:this.instance_11,p:{scaleX:1.147,x:448.5,alpha:0.078}},{t:this.instance_10,p:{scaleX:1,scaleY:1,rotation:0,x:268.2,y:274,alpha:0}},{t:this.instance_9,p:{scaleX:1,scaleY:1,rotation:0,x:286.5,y:278.9,alpha:0}},{t:this.instance_8,p:{scaleX:1,scaleY:1,rotation:0,x:304.8,y:278.8,alpha:0}},{t:this.instance_7,p:{scaleX:1,scaleY:1,rotation:0,x:324.1,y:283.1,alpha:0}},{t:this.instance_6,p:{scaleX:1,scaleY:1,rotation:0,x:342.8,y:279,alpha:0}},{t:this.instance_5,p:{scaleX:1,scaleY:1,rotation:0,x:360.9,y:278.1,alpha:0}},{t:this.instance_4,p:{scaleX:1,scaleY:1,rotation:0,x:375.5,y:274.5,alpha:0}},{t:this.instance_3,p:{scaleX:1,scaleY:1,rotation:0,x:388.6,y:275.9,alpha:0}},{t:this.instance_2,p:{scaleX:1,scaleY:1,rotation:0,x:402.6,y:274.5,alpha:0}},{t:this.instance_1,p:{scaleX:1,scaleY:1,rotation:0,x:416.4,y:279,alpha:0}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:436.1,y:278.6,alpha:0}}]},1).to({state:[{t:this.instance_65,p:{scaleX:1.684,x:210.8,alpha:0.102}},{t:this.instance_64,p:{scaleX:1.684,x:241.7,alpha:0.102}},{t:this.instance_63,p:{scaleX:1.684,x:272.5,alpha:0.102}},{t:this.instance_62,p:{scaleX:1.684,x:305,alpha:0.102}},{t:this.instance_61,p:{scaleX:1.684,x:336.4,alpha:0.102}},{t:this.instance_60,p:{scaleX:1.684,x:366.9,alpha:0.102}},{t:this.instance_59,p:{scaleX:1.684,x:391.6,alpha:0.102}},{t:this.instance_58,p:{scaleX:1.684,x:413.7,alpha:0.102}},{t:this.instance_57,p:{scaleX:1.684,x:437.2,alpha:0.102}},{t:this.instance_56,p:{scaleX:1.684,x:460.5,alpha:0.102}},{t:this.instance_55,p:{scaleX:1.684,x:493.6,alpha:0.102}},{t:this.instance_54,p:{scaleX:1.547,x:222.3,alpha:0.102}},{t:this.instance_53,p:{scaleX:1.547,x:250.7,alpha:0.102}},{t:this.instance_52,p:{scaleX:1.547,x:279,alpha:0.102}},{t:this.instance_51,p:{scaleX:1.547,x:308.9,alpha:0.102}},{t:this.instance_50,p:{scaleX:1.547,x:337.7,alpha:0.102}},{t:this.instance_49,p:{scaleX:1.547,x:365.7,alpha:0.102}},{t:this.instance_48,p:{scaleX:1.547,x:388.4,alpha:0.102}},{t:this.instance_47,p:{scaleX:1.547,x:408.7,alpha:0.102}},{t:this.instance_46,p:{scaleX:1.547,x:430.2,alpha:0.102}},{t:this.instance_45,p:{scaleX:1.547,x:451.7,alpha:0.102}},{t:this.instance_44,p:{scaleX:1.547,x:482.1,alpha:0.102}},{t:this.instance_43,p:{scaleX:1.411,x:233.8,alpha:0.102}},{t:this.instance_42,p:{scaleX:1.411,x:259.6,alpha:0.102}},{t:this.instance_41,p:{scaleX:1.411,x:285.4,alpha:0.102}},{t:this.instance_40,p:{scaleX:1.411,x:312.7,alpha:0.102}},{t:this.instance_39,p:{scaleX:1.411,x:339,alpha:0.102}},{t:this.instance_38,p:{scaleX:1.411,x:364.5,alpha:0.102}},{t:this.instance_37,p:{scaleX:1.411,x:385.2,alpha:0.102}},{t:this.instance_36,p:{scaleX:1.411,x:403.7,alpha:0.102}},{t:this.instance_35,p:{scaleX:1.411,x:423.3,alpha:0.102}},{t:this.instance_34,p:{scaleX:1.411,x:442.9,alpha:0.102}},{t:this.instance_33,p:{scaleX:1.411,x:470.6,alpha:0.102}},{t:this.instance_32,p:{scaleX:1.274,x:245.2,alpha:0.102}},{t:this.instance_31,p:{scaleX:1.274,x:268.6,alpha:0.102}},{t:this.instance_30,p:{scaleX:1.274,x:291.9,alpha:0.102}},{t:this.instance_29,p:{scaleX:1.274,x:316.5,alpha:0.102}},{t:this.instance_28,p:{scaleX:1.274,x:340.2,alpha:0.102}},{t:this.instance_27,p:{scaleX:1.274,x:363.3,alpha:0.102}},{t:this.instance_26,p:{scaleX:1.274,x:382,alpha:0.102}},{t:this.instance_25,p:{scaleX:1.274,x:398.6,alpha:0.102}},{t:this.instance_24,p:{scaleX:1.274,x:416.4,alpha:0.102}},{t:this.instance_23,p:{scaleX:1.274,x:434.1,alpha:0.102}},{t:this.instance_22,p:{scaleX:1.274,x:459.1,alpha:0.102}},{t:this.instance_21,p:{scaleX:1.137,x:256.7,alpha:0.102}},{t:this.instance_20,p:{scaleX:1.137,x:277.6,alpha:0.102}},{t:this.instance_19,p:{scaleX:1.137,x:298.4,alpha:0.102}},{t:this.instance_18,p:{scaleX:1.137,x:320.3,alpha:0.102}},{t:this.instance_17,p:{scaleX:1.137,x:341.5,alpha:0.102}},{t:this.instance_16,p:{scaleX:1.137,alpha:0.102,x:362.1}},{t:this.instance_15,p:{scaleX:1.137,x:378.7,alpha:0.102}},{t:this.instance_14,p:{scaleX:1.137,x:393.6,alpha:0.102}},{t:this.instance_13,p:{scaleX:1.137,x:409.5,alpha:0.102}},{t:this.instance_12,p:{scaleX:1.137,x:425.2,alpha:0.102}},{t:this.instance_11,p:{scaleX:1.137,x:447.6,alpha:0.102}},{t:this.instance_10,p:{scaleX:1,scaleY:1,rotation:0,x:268.2,y:274,alpha:0}},{t:this.instance_9,p:{scaleX:1,scaleY:1,rotation:0,x:286.5,y:278.9,alpha:0}},{t:this.instance_8,p:{scaleX:1,scaleY:1,rotation:0,x:304.8,y:278.8,alpha:0}},{t:this.instance_7,p:{scaleX:1,scaleY:1,rotation:0,x:324.1,y:283.1,alpha:0}},{t:this.instance_6,p:{scaleX:1,scaleY:1,rotation:0,x:342.8,y:279,alpha:0}},{t:this.instance_5,p:{scaleX:1,scaleY:1,rotation:0,x:360.9,y:278.1,alpha:0}},{t:this.instance_4,p:{scaleX:1,scaleY:1,rotation:0,x:375.5,y:274.5,alpha:0}},{t:this.instance_3,p:{scaleX:1,scaleY:1,rotation:0,x:388.6,y:275.9,alpha:0}},{t:this.instance_2,p:{scaleX:1,scaleY:1,rotation:0,x:402.6,y:274.5,alpha:0}},{t:this.instance_1,p:{scaleX:1,scaleY:1,rotation:0,x:416.4,y:279,alpha:0}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:436.1,y:278.6,alpha:0}}]},1).to({state:[{t:this.instance_65,p:{scaleX:1.632,x:215.2,alpha:0.121}},{t:this.instance_64,p:{scaleX:1.632,x:245.2,alpha:0.121}},{t:this.instance_63,p:{scaleX:1.632,x:275,alpha:0.121}},{t:this.instance_62,p:{scaleX:1.632,x:306.5,alpha:0.121}},{t:this.instance_61,p:{scaleX:1.632,x:336.9,alpha:0.121}},{t:this.instance_60,p:{scaleX:1.632,x:366.5,alpha:0.121}},{t:this.instance_59,p:{scaleX:1.632,x:390.4,alpha:0.121}},{t:this.instance_58,p:{scaleX:1.632,x:411.7,alpha:0.121}},{t:this.instance_57,p:{scaleX:1.632,x:434.5,alpha:0.121}},{t:this.instance_56,p:{scaleX:1.632,x:457.1,alpha:0.121}},{t:this.instance_55,p:{scaleX:1.632,x:489.2,alpha:0.121}},{t:this.instance_54,p:{scaleX:1.505,x:225.8,alpha:0.121}},{t:this.instance_53,p:{scaleX:1.505,x:253.4,alpha:0.121}},{t:this.instance_52,p:{scaleX:1.505,x:281,alpha:0.121}},{t:this.instance_51,p:{scaleX:1.505,x:310,alpha:0.121}},{t:this.instance_50,p:{scaleX:1.505,x:338.1,alpha:0.121}},{t:this.instance_49,p:{scaleX:1.505,x:365.3,alpha:0.121}},{t:this.instance_48,p:{scaleX:1.505,x:387.4,alpha:0.121}},{t:this.instance_47,p:{scaleX:1.505,x:407.1,alpha:0.121}},{t:this.instance_46,p:{scaleX:1.505,x:428.1,alpha:0.121}},{t:this.instance_45,p:{scaleX:1.505,x:449,alpha:0.121}},{t:this.instance_44,p:{scaleX:1.505,x:478.5,alpha:0.121}},{t:this.instance_43,p:{scaleX:1.379,x:236.4,alpha:0.121}},{t:this.instance_42,p:{scaleX:1.379,x:261.7,alpha:0.121}},{t:this.instance_41,p:{scaleX:1.379,x:286.9,alpha:0.121}},{t:this.instance_40,p:{scaleX:1.379,x:313.6,alpha:0.121}},{t:this.instance_39,p:{scaleX:1.379,x:339.3,alpha:0.121}},{t:this.instance_38,p:{scaleX:1.379,x:364.2,alpha:0.121}},{t:this.instance_37,p:{scaleX:1.379,x:384.4,alpha:0.121}},{t:this.instance_36,p:{scaleX:1.379,x:402.5,alpha:0.121}},{t:this.instance_35,p:{scaleX:1.379,x:421.7,alpha:0.121}},{t:this.instance_34,p:{scaleX:1.379,x:440.8,alpha:0.121}},{t:this.instance_33,p:{scaleX:1.379,x:467.9,alpha:0.121}},{t:this.instance_32,p:{scaleX:1.253,x:247,alpha:0.121}},{t:this.instance_31,p:{scaleX:1.253,x:270,alpha:0.121}},{t:this.instance_30,p:{scaleX:1.253,x:292.9,alpha:0.121}},{t:this.instance_29,p:{scaleX:1.253,x:317.1,alpha:0.121}},{t:this.instance_28,p:{scaleX:1.253,x:340.4,alpha:0.121}},{t:this.instance_27,p:{scaleX:1.253,x:363.1,alpha:0.121}},{t:this.instance_26,p:{scaleX:1.253,x:381.5,alpha:0.121}},{t:this.instance_25,p:{scaleX:1.253,x:397.9,alpha:0.121}},{t:this.instance_24,p:{scaleX:1.253,x:415.3,alpha:0.121}},{t:this.instance_23,p:{scaleX:1.253,x:432.7,alpha:0.121}},{t:this.instance_22,p:{scaleX:1.253,x:457.3,alpha:0.121}},{t:this.instance_21,p:{scaleX:1.126,x:257.6,alpha:0.121}},{t:this.instance_20,p:{scaleX:1.126,x:278.3,alpha:0.121}},{t:this.instance_19,p:{scaleX:1.126,x:298.9,alpha:0.121}},{t:this.instance_18,p:{scaleX:1.126,x:320.6,alpha:0.121}},{t:this.instance_17,p:{scaleX:1.126,x:341.6,alpha:0.121}},{t:this.instance_16,p:{scaleX:1.126,alpha:0.121,x:362}},{t:this.instance_15,p:{scaleX:1.126,x:378.5,alpha:0.121}},{t:this.instance_14,p:{scaleX:1.126,x:393.2,alpha:0.121}},{t:this.instance_13,p:{scaleX:1.126,x:409,alpha:0.121}},{t:this.instance_12,p:{scaleX:1.126,x:424.6,alpha:0.121}},{t:this.instance_11,p:{scaleX:1.126,x:446.7,alpha:0.121}},{t:this.instance_10,p:{scaleX:1,scaleY:1,rotation:0,x:268.2,y:274,alpha:0}},{t:this.instance_9,p:{scaleX:1,scaleY:1,rotation:0,x:286.5,y:278.9,alpha:0}},{t:this.instance_8,p:{scaleX:1,scaleY:1,rotation:0,x:304.8,y:278.8,alpha:0}},{t:this.instance_7,p:{scaleX:1,scaleY:1,rotation:0,x:324.1,y:283.1,alpha:0}},{t:this.instance_6,p:{scaleX:1,scaleY:1,rotation:0,x:342.8,y:279,alpha:0}},{t:this.instance_5,p:{scaleX:1,scaleY:1,rotation:0,x:360.9,y:278.1,alpha:0}},{t:this.instance_4,p:{scaleX:1,scaleY:1,rotation:0,x:375.5,y:274.5,alpha:0}},{t:this.instance_3,p:{scaleX:1,scaleY:1,rotation:0,x:388.6,y:275.9,alpha:0}},{t:this.instance_2,p:{scaleX:1,scaleY:1,rotation:0,x:402.6,y:274.5,alpha:0}},{t:this.instance_1,p:{scaleX:1,scaleY:1,rotation:0,x:416.4,y:279,alpha:0}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:436.1,y:278.6,alpha:0}}]},1).to({state:[{t:this.instance_65,p:{scaleX:1.579,x:219.6,alpha:0.129}},{t:this.instance_64,p:{scaleX:1.579,x:248.6,alpha:0.129}},{t:this.instance_63,p:{scaleX:1.579,x:277.5,alpha:0.129}},{t:this.instance_62,p:{scaleX:1.579,x:308,alpha:0.129}},{t:this.instance_61,p:{scaleX:1.579,x:337.4,alpha:0.129}},{t:this.instance_60,p:{scaleX:1.579,x:366,alpha:0.129}},{t:this.instance_59,p:{scaleX:1.579,x:389.1,alpha:0.129}},{t:this.instance_58,p:{scaleX:1.579,x:409.8,alpha:0.129}},{t:this.instance_57,p:{scaleX:1.579,x:431.8,alpha:0.129}},{t:this.instance_56,p:{scaleX:1.579,x:453.7,alpha:0.129}},{t:this.instance_55,p:{scaleX:1.579,x:484.7,alpha:0.129}},{t:this.instance_54,p:{scaleX:1.463,x:229.3,alpha:0.129}},{t:this.instance_53,p:{scaleX:1.463,x:256.2,alpha:0.129}},{t:this.instance_52,p:{scaleX:1.463,x:283,alpha:0.129}},{t:this.instance_51,p:{scaleX:1.463,x:311.2,alpha:0.129}},{t:this.instance_50,p:{scaleX:1.463,x:338.5,alpha:0.129}},{t:this.instance_49,p:{scaleX:1.463,x:365,alpha:0.129}},{t:this.instance_48,p:{scaleX:1.463,x:386.4,alpha:0.129}},{t:this.instance_47,p:{scaleX:1.463,x:405.6,alpha:0.129}},{t:this.instance_46,p:{scaleX:1.463,x:426,alpha:0.129}},{t:this.instance_45,p:{scaleX:1.463,x:446.3,alpha:0.129}},{t:this.instance_44,p:{scaleX:1.463,x:475,alpha:0.129}},{t:this.instance_43,p:{scaleX:1.347,x:239,alpha:0.129}},{t:this.instance_42,p:{scaleX:1.347,x:263.8,alpha:0.129}},{t:this.instance_41,p:{scaleX:1.347,x:288.4,alpha:0.129}},{t:this.instance_40,p:{scaleX:1.347,x:314.4,alpha:0.129}},{t:this.instance_39,p:{scaleX:1.347,x:339.6,alpha:0.129}},{t:this.instance_38,p:{scaleX:1.347,x:363.9,alpha:0.129}},{t:this.instance_37,p:{scaleX:1.347,x:383.7,alpha:0.129}},{t:this.instance_36,p:{scaleX:1.347,x:401.3,alpha:0.129}},{t:this.instance_35,p:{scaleX:1.347,x:420.1,alpha:0.129}},{t:this.instance_34,p:{scaleX:1.347,x:438.8,alpha:0.129}},{t:this.instance_33,p:{scaleX:1.347,x:465.3,alpha:0.129}},{t:this.instance_32,p:{scaleX:1.232,x:248.8,alpha:0.129}},{t:this.instance_31,p:{scaleX:1.232,x:271.4,alpha:0.129}},{t:this.instance_30,p:{scaleX:1.232,x:293.9,alpha:0.129}},{t:this.instance_29,p:{scaleX:1.232,x:317.7,alpha:0.129}},{t:this.instance_28,p:{scaleX:1.232,x:340.6,alpha:0.129}},{t:this.instance_27,p:{scaleX:1.232,x:362.9,alpha:0.129}},{t:this.instance_26,p:{scaleX:1.232,x:381,alpha:0.129}},{t:this.instance_25,p:{scaleX:1.232,x:397.1,alpha:0.129}},{t:this.instance_24,p:{scaleX:1.232,x:414.3,alpha:0.129}},{t:this.instance_23,p:{scaleX:1.232,x:431.3,alpha:0.129}},{t:this.instance_22,p:{scaleX:1.232,x:455.5,alpha:0.129}},{t:this.instance_21,p:{scaleX:1.116,x:258.5,alpha:0.129}},{t:this.instance_20,p:{scaleX:1.116,x:278.9,alpha:0.129}},{t:this.instance_19,p:{scaleX:1.116,x:299.4,alpha:0.129}},{t:this.instance_18,p:{scaleX:1.116,x:320.9,alpha:0.129}},{t:this.instance_17,p:{scaleX:1.116,x:341.7,alpha:0.129}},{t:this.instance_16,p:{scaleX:1.116,alpha:0.129,x:361.9}},{t:this.instance_15,p:{scaleX:1.116,x:378.2,alpha:0.129}},{t:this.instance_14,p:{scaleX:1.116,x:392.9,alpha:0.129}},{t:this.instance_13,p:{scaleX:1.116,x:408.4,alpha:0.129}},{t:this.instance_12,p:{scaleX:1.116,x:423.9,alpha:0.129}},{t:this.instance_11,p:{scaleX:1.116,x:445.8,alpha:0.129}},{t:this.instance_10,p:{scaleX:1,scaleY:1,rotation:0,x:268.2,y:274,alpha:0}},{t:this.instance_9,p:{scaleX:1,scaleY:1,rotation:0,x:286.5,y:278.9,alpha:0}},{t:this.instance_8,p:{scaleX:1,scaleY:1,rotation:0,x:304.8,y:278.8,alpha:0}},{t:this.instance_7,p:{scaleX:1,scaleY:1,rotation:0,x:324.1,y:283.1,alpha:0}},{t:this.instance_6,p:{scaleX:1,scaleY:1,rotation:0,x:342.8,y:279,alpha:0}},{t:this.instance_5,p:{scaleX:1,scaleY:1,rotation:0,x:360.9,y:278.1,alpha:0}},{t:this.instance_4,p:{scaleX:1,scaleY:1,rotation:0,x:375.5,y:274.5,alpha:0}},{t:this.instance_3,p:{scaleX:1,scaleY:1,rotation:0,x:388.6,y:275.9,alpha:0}},{t:this.instance_2,p:{scaleX:1,scaleY:1,rotation:0,x:402.6,y:274.5,alpha:0}},{t:this.instance_1,p:{scaleX:1,scaleY:1,rotation:0,x:416.4,y:279,alpha:0}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:436.1,y:278.6,alpha:0}}]},1).to({state:[{t:this.instance_65,p:{scaleX:1.526,x:224,alpha:0.148}},{t:this.instance_64,p:{scaleX:1.526,x:252.1,alpha:0.148}},{t:this.instance_63,p:{scaleX:1.526,x:280,alpha:0.148}},{t:this.instance_62,p:{scaleX:1.526,x:309.4,alpha:0.148}},{t:this.instance_61,p:{scaleX:1.526,x:337.9,alpha:0.148}},{t:this.instance_60,p:{scaleX:1.526,x:365.5,alpha:0.148}},{t:this.instance_59,p:{scaleX:1.526,x:387.9,alpha:0.148}},{t:this.instance_58,p:{scaleX:1.526,x:407.9,alpha:0.148}},{t:this.instance_57,p:{scaleX:1.526,x:429.2,alpha:0.148}},{t:this.instance_56,p:{scaleX:1.526,x:450.3,alpha:0.148}},{t:this.instance_55,p:{scaleX:1.526,x:480.3,alpha:0.148}},{t:this.instance_54,p:{scaleX:1.421,x:232.9,alpha:0.148}},{t:this.instance_53,p:{scaleX:1.421,x:258.9,alpha:0.148}},{t:this.instance_52,p:{scaleX:1.421,x:285,alpha:0.148}},{t:this.instance_51,p:{scaleX:1.421,x:312.4,alpha:0.148}},{t:this.instance_50,p:{scaleX:1.421,x:338.9,alpha:0.148}},{t:this.instance_49,p:{scaleX:1.421,x:364.6,alpha:0.148}},{t:this.instance_48,p:{scaleX:1.421,x:385.4,alpha:0.148}},{t:this.instance_47,p:{scaleX:1.421,x:404,alpha:0.148}},{t:this.instance_46,p:{scaleX:1.421,x:423.9,alpha:0.148}},{t:this.instance_45,p:{scaleX:1.421,x:443.5,alpha:0.148}},{t:this.instance_44,p:{scaleX:1.421,x:471.5,alpha:0.148}},{t:this.instance_43,p:{scaleX:1.316,x:241.7,alpha:0.148}},{t:this.instance_42,p:{scaleX:1.316,x:265.8,alpha:0.148}},{t:this.instance_41,p:{scaleX:1.316,x:289.9,alpha:0.148}},{t:this.instance_40,p:{scaleX:1.316,x:315.3,alpha:0.148}},{t:this.instance_39,p:{scaleX:1.316,x:339.9,alpha:0.148}},{t:this.instance_38,p:{scaleX:1.316,x:363.7,alpha:0.148}},{t:this.instance_37,p:{scaleX:1.316,x:382.9,alpha:0.148}},{t:this.instance_36,p:{scaleX:1.316,x:400.2,alpha:0.148}},{t:this.instance_35,p:{scaleX:1.316,x:418.5,alpha:0.148}},{t:this.instance_34,p:{scaleX:1.316,x:436.8,alpha:0.148}},{t:this.instance_33,p:{scaleX:1.316,x:462.6,alpha:0.148}},{t:this.instance_32,p:{scaleX:1.211,x:250.5,alpha:0.148}},{t:this.instance_31,p:{scaleX:1.211,x:272.7,alpha:0.148}},{t:this.instance_30,p:{scaleX:1.211,x:294.9,alpha:0.148}},{t:this.instance_29,p:{scaleX:1.211,x:318.3,alpha:0.148}},{t:this.instance_28,p:{scaleX:1.211,x:340.8,alpha:0.148}},{t:this.instance_27,p:{scaleX:1.211,x:362.7,alpha:0.148}},{t:this.instance_26,p:{scaleX:1.211,x:380.5,alpha:0.148}},{t:this.instance_25,p:{scaleX:1.211,x:396.3,alpha:0.148}},{t:this.instance_24,p:{scaleX:1.211,x:413.2,alpha:0.148}},{t:this.instance_23,p:{scaleX:1.211,x:430,alpha:0.148}},{t:this.instance_22,p:{scaleX:1.211,x:453.8,alpha:0.148}},{t:this.instance_21,p:{scaleX:1.105,x:259.3,alpha:0.148}},{t:this.instance_20,p:{scaleX:1.105,x:279.6,alpha:0.148}},{t:this.instance_19,p:{scaleX:1.105,x:299.9,alpha:0.148}},{t:this.instance_18,p:{scaleX:1.105,x:321.2,alpha:0.148}},{t:this.instance_17,p:{scaleX:1.105,x:341.8,alpha:0.148}},{t:this.instance_16,p:{scaleX:1.105,alpha:0.148,x:361.8}},{t:this.instance_15,p:{scaleX:1.105,x:378,alpha:0.148}},{t:this.instance_14,p:{scaleX:1.105,x:392.5,alpha:0.148}},{t:this.instance_13,p:{scaleX:1.105,x:407.9,alpha:0.148}},{t:this.instance_12,p:{scaleX:1.105,x:423.2,alpha:0.148}},{t:this.instance_11,p:{scaleX:1.105,x:444.9,alpha:0.148}},{t:this.instance_10,p:{scaleX:1,scaleY:1,rotation:0,x:268.2,y:274,alpha:0}},{t:this.instance_9,p:{scaleX:1,scaleY:1,rotation:0,x:286.5,y:278.9,alpha:0}},{t:this.instance_8,p:{scaleX:1,scaleY:1,rotation:0,x:304.8,y:278.8,alpha:0}},{t:this.instance_7,p:{scaleX:1,scaleY:1,rotation:0,x:324.1,y:283.1,alpha:0}},{t:this.instance_6,p:{scaleX:1,scaleY:1,rotation:0,x:342.8,y:279,alpha:0}},{t:this.instance_5,p:{scaleX:1,scaleY:1,rotation:0,x:360.9,y:278.1,alpha:0}},{t:this.instance_4,p:{scaleX:1,scaleY:1,rotation:0,x:375.5,y:274.5,alpha:0}},{t:this.instance_3,p:{scaleX:1,scaleY:1,rotation:0,x:388.6,y:275.9,alpha:0}},{t:this.instance_2,p:{scaleX:1,scaleY:1,rotation:0,x:402.6,y:274.5,alpha:0}},{t:this.instance_1,p:{scaleX:1,scaleY:1,rotation:0,x:416.4,y:279,alpha:0}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:436.1,y:278.6,alpha:0}}]},1).to({state:[{t:this.instance_65,p:{scaleX:1.474,x:228.5,alpha:0.172}},{t:this.instance_64,p:{scaleX:1.474,x:255.5,alpha:0.172}},{t:this.instance_63,p:{scaleX:1.474,x:282.5,alpha:0.172}},{t:this.instance_62,p:{scaleX:1.474,x:310.9,alpha:0.172}},{t:this.instance_61,p:{scaleX:1.474,x:338.4,alpha:0.172}},{t:this.instance_60,p:{scaleX:1.474,x:365.1,alpha:0.172}},{t:this.instance_59,p:{scaleX:1.474,x:386.7,alpha:0.172}},{t:this.instance_58,p:{scaleX:1.474,x:406,alpha:0.172}},{t:this.instance_57,p:{scaleX:1.474,x:426.5,alpha:0.172}},{t:this.instance_56,p:{scaleX:1.474,x:446.9,alpha:0.172}},{t:this.instance_55,p:{scaleX:1.474,x:475.9,alpha:0.172}},{t:this.instance_54,p:{scaleX:1.379,x:236.4,alpha:0.172}},{t:this.instance_53,p:{scaleX:1.379,x:261.7,alpha:0.172}},{t:this.instance_52,p:{scaleX:1.379,x:286.9,alpha:0.172}},{t:this.instance_51,p:{scaleX:1.379,x:313.6,alpha:0.172}},{t:this.instance_50,p:{scaleX:1.379,x:339.3,alpha:0.172}},{t:this.instance_49,p:{scaleX:1.379,x:364.2,alpha:0.172}},{t:this.instance_48,p:{scaleX:1.379,x:384.4,alpha:0.172}},{t:this.instance_47,p:{scaleX:1.379,x:402.5,alpha:0.172}},{t:this.instance_46,p:{scaleX:1.379,x:421.7,alpha:0.172}},{t:this.instance_45,p:{scaleX:1.379,x:440.8,alpha:0.172}},{t:this.instance_44,p:{scaleX:1.379,x:467.9,alpha:0.172}},{t:this.instance_43,p:{scaleX:1.284,x:244.3,alpha:0.172}},{t:this.instance_42,p:{scaleX:1.284,x:267.9,alpha:0.172}},{t:this.instance_41,p:{scaleX:1.284,x:291.4,alpha:0.172}},{t:this.instance_40,p:{scaleX:1.284,x:316.2,alpha:0.172}},{t:this.instance_39,p:{scaleX:1.284,x:340.1,alpha:0.172}},{t:this.instance_38,p:{scaleX:1.284,x:363.4,alpha:0.172}},{t:this.instance_37,p:{scaleX:1.284,x:382.2,alpha:0.172}},{t:this.instance_36,p:{scaleX:1.284,x:399,alpha:0.172}},{t:this.instance_35,p:{scaleX:1.284,x:416.9,alpha:0.172}},{t:this.instance_34,p:{scaleX:1.284,x:434.7,alpha:0.172}},{t:this.instance_33,p:{scaleX:1.284,x:460,alpha:0.172}},{t:this.instance_32,p:{scaleX:1.189,x:252.3,alpha:0.172}},{t:this.instance_31,p:{scaleX:1.189,x:274.1,alpha:0.172}},{t:this.instance_30,p:{scaleX:1.189,x:295.9,alpha:0.172}},{t:this.instance_29,p:{scaleX:1.189,x:318.8,alpha:0.172}},{t:this.instance_28,p:{scaleX:1.189,x:341,alpha:0.172}},{t:this.instance_27,p:{scaleX:1.189,x:362.6,alpha:0.172}},{t:this.instance_26,p:{scaleX:1.189,x:380,alpha:0.172}},{t:this.instance_25,p:{scaleX:1.189,x:395.6,alpha:0.172}},{t:this.instance_24,p:{scaleX:1.189,x:412.2,alpha:0.172}},{t:this.instance_23,p:{scaleX:1.189,x:428.6,alpha:0.172}},{t:this.instance_22,p:{scaleX:1.189,x:452,alpha:0.172}},{t:this.instance_21,p:{scaleX:1.095,x:260.2,alpha:0.172}},{t:this.instance_20,p:{scaleX:1.095,x:280.3,alpha:0.172}},{t:this.instance_19,p:{scaleX:1.095,x:300.4,alpha:0.172}},{t:this.instance_18,p:{scaleX:1.095,x:321.5,alpha:0.172}},{t:this.instance_17,p:{scaleX:1.095,x:341.9,alpha:0.172}},{t:this.instance_16,p:{scaleX:1.095,alpha:0.172,x:361.7}},{t:this.instance_15,p:{scaleX:1.095,x:377.8,alpha:0.172}},{t:this.instance_14,p:{scaleX:1.095,x:392.1,alpha:0.172}},{t:this.instance_13,p:{scaleX:1.095,x:407.4,alpha:0.172}},{t:this.instance_12,p:{scaleX:1.095,x:422.5,alpha:0.172}},{t:this.instance_11,p:{scaleX:1.095,x:444,alpha:0.172}},{t:this.instance_10,p:{scaleX:1,scaleY:1,rotation:0,x:268.2,y:274,alpha:0}},{t:this.instance_9,p:{scaleX:1,scaleY:1,rotation:0,x:286.5,y:278.9,alpha:0}},{t:this.instance_8,p:{scaleX:1,scaleY:1,rotation:0,x:304.8,y:278.8,alpha:0}},{t:this.instance_7,p:{scaleX:1,scaleY:1,rotation:0,x:324.1,y:283.1,alpha:0}},{t:this.instance_6,p:{scaleX:1,scaleY:1,rotation:0,x:342.8,y:279,alpha:0}},{t:this.instance_5,p:{scaleX:1,scaleY:1,rotation:0,x:360.9,y:278.1,alpha:0}},{t:this.instance_4,p:{scaleX:1,scaleY:1,rotation:0,x:375.5,y:274.5,alpha:0}},{t:this.instance_3,p:{scaleX:1,scaleY:1,rotation:0,x:388.6,y:275.9,alpha:0}},{t:this.instance_2,p:{scaleX:1,scaleY:1,rotation:0,x:402.6,y:274.5,alpha:0}},{t:this.instance_1,p:{scaleX:1,scaleY:1,rotation:0,x:416.4,y:279,alpha:0}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:436.1,y:278.6,alpha:0}}]},1).to({state:[{t:this.instance_65,p:{scaleX:1.421,x:232.9,alpha:0.18}},{t:this.instance_64,p:{scaleX:1.421,x:258.9,alpha:0.18}},{t:this.instance_63,p:{scaleX:1.421,x:285,alpha:0.18}},{t:this.instance_62,p:{scaleX:1.421,x:312.4,alpha:0.18}},{t:this.instance_61,p:{scaleX:1.421,x:338.9,alpha:0.18}},{t:this.instance_60,p:{scaleX:1.421,x:364.6,alpha:0.18}},{t:this.instance_59,p:{scaleX:1.421,x:385.4,alpha:0.18}},{t:this.instance_58,p:{scaleX:1.421,x:404,alpha:0.18}},{t:this.instance_57,p:{scaleX:1.421,x:423.9,alpha:0.18}},{t:this.instance_56,p:{scaleX:1.421,x:443.5,alpha:0.18}},{t:this.instance_55,p:{scaleX:1.421,x:471.5,alpha:0.18}},{t:this.instance_54,p:{scaleX:1.337,x:239.9,alpha:0.18}},{t:this.instance_53,p:{scaleX:1.337,x:264.5,alpha:0.18}},{t:this.instance_52,p:{scaleX:1.337,x:288.9,alpha:0.18}},{t:this.instance_51,p:{scaleX:1.337,x:314.7,alpha:0.18}},{t:this.instance_50,p:{scaleX:1.337,x:339.7,alpha:0.18}},{t:this.instance_49,p:{scaleX:1.337,x:363.9,alpha:0.18}},{t:this.instance_48,p:{scaleX:1.337,x:383.4,alpha:0.18}},{t:this.instance_47,p:{scaleX:1.337,x:401,alpha:0.18}},{t:this.instance_46,p:{scaleX:1.337,x:419.6,alpha:0.18}},{t:this.instance_45,p:{scaleX:1.337,x:438.1,alpha:0.18}},{t:this.instance_44,p:{scaleX:1.337,x:464.4,alpha:0.18}},{t:this.instance_43,p:{scaleX:1.253,x:247,alpha:0.18}},{t:this.instance_42,p:{scaleX:1.253,x:270,alpha:0.18}},{t:this.instance_41,p:{scaleX:1.253,x:292.9,alpha:0.18}},{t:this.instance_40,p:{scaleX:1.253,x:317.1,alpha:0.18}},{t:this.instance_39,p:{scaleX:1.253,x:340.4,alpha:0.18}},{t:this.instance_38,p:{scaleX:1.253,x:363.1,alpha:0.18}},{t:this.instance_37,p:{scaleX:1.253,x:381.5,alpha:0.18}},{t:this.instance_36,p:{scaleX:1.253,x:397.9,alpha:0.18}},{t:this.instance_35,p:{scaleX:1.253,x:415.3,alpha:0.18}},{t:this.instance_34,p:{scaleX:1.253,x:432.7,alpha:0.18}},{t:this.instance_33,p:{scaleX:1.253,x:457.3,alpha:0.18}},{t:this.instance_32,p:{scaleX:1.168,x:254.1,alpha:0.18}},{t:this.instance_31,p:{scaleX:1.168,x:275.5,alpha:0.18}},{t:this.instance_30,p:{scaleX:1.168,x:296.9,alpha:0.18}},{t:this.instance_29,p:{scaleX:1.168,x:319.4,alpha:0.18}},{t:this.instance_28,p:{scaleX:1.168,x:341.2,alpha:0.18}},{t:this.instance_27,p:{scaleX:1.168,x:362.4,alpha:0.18}},{t:this.instance_26,p:{scaleX:1.168,x:379.5,alpha:0.18}},{t:this.instance_25,p:{scaleX:1.168,x:394.8,alpha:0.18}},{t:this.instance_24,p:{scaleX:1.168,x:411.1,alpha:0.18}},{t:this.instance_23,p:{scaleX:1.168,x:427.3,alpha:0.18}},{t:this.instance_22,p:{scaleX:1.168,x:450.2,alpha:0.18}},{t:this.instance_21,p:{scaleX:1.084,x:261.1,alpha:0.18}},{t:this.instance_20,p:{scaleX:1.084,x:281,alpha:0.18}},{t:this.instance_19,p:{scaleX:1.084,x:300.9,alpha:0.18}},{t:this.instance_18,p:{scaleX:1.084,x:321.8,alpha:0.18}},{t:this.instance_17,p:{scaleX:1.084,x:342,alpha:0.18}},{t:this.instance_16,p:{scaleX:1.084,alpha:0.18,x:361.6}},{t:this.instance_15,p:{scaleX:1.084,x:377.5,alpha:0.18}},{t:this.instance_14,p:{scaleX:1.084,x:391.7,alpha:0.18}},{t:this.instance_13,p:{scaleX:1.084,x:406.8,alpha:0.18}},{t:this.instance_12,p:{scaleX:1.084,x:421.8,alpha:0.18}},{t:this.instance_11,p:{scaleX:1.084,x:443.2,alpha:0.18}},{t:this.instance_10,p:{scaleX:1,scaleY:1,rotation:0,x:268.2,y:274,alpha:0}},{t:this.instance_9,p:{scaleX:1,scaleY:1,rotation:0,x:286.5,y:278.9,alpha:0}},{t:this.instance_8,p:{scaleX:1,scaleY:1,rotation:0,x:304.8,y:278.8,alpha:0}},{t:this.instance_7,p:{scaleX:1,scaleY:1,rotation:0,x:324.1,y:283.1,alpha:0}},{t:this.instance_6,p:{scaleX:1,scaleY:1,rotation:0,x:342.8,y:279,alpha:0}},{t:this.instance_5,p:{scaleX:1,scaleY:1,rotation:0,x:360.9,y:278.1,alpha:0}},{t:this.instance_4,p:{scaleX:1,scaleY:1,rotation:0,x:375.5,y:274.5,alpha:0}},{t:this.instance_3,p:{scaleX:1,scaleY:1,rotation:0,x:388.6,y:275.9,alpha:0}},{t:this.instance_2,p:{scaleX:1,scaleY:1,rotation:0,x:402.6,y:274.5,alpha:0}},{t:this.instance_1,p:{scaleX:1,scaleY:1,rotation:0,x:416.4,y:279,alpha:0}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:436.1,y:278.6,alpha:0}}]},1).to({state:[{t:this.instance_65,p:{scaleX:1.368,x:237.3,alpha:0.199}},{t:this.instance_64,p:{scaleX:1.368,x:262.4,alpha:0.199}},{t:this.instance_63,p:{scaleX:1.368,x:287.4,alpha:0.199}},{t:this.instance_62,p:{scaleX:1.368,x:313.8,alpha:0.199}},{t:this.instance_61,p:{scaleX:1.368,x:339.4,alpha:0.199}},{t:this.instance_60,p:{scaleX:1.368,x:364.1,alpha:0.199}},{t:this.instance_59,p:{scaleX:1.368,x:384.2,alpha:0.199}},{t:this.instance_58,p:{scaleX:1.368,x:402.1,alpha:0.199}},{t:this.instance_57,p:{scaleX:1.368,x:421.2,alpha:0.199}},{t:this.instance_56,p:{scaleX:1.368,x:440.2,alpha:0.199}},{t:this.instance_55,p:{scaleX:1.368,x:467,alpha:0.199}},{t:this.instance_54,p:{scaleX:1.295,x:243.5,alpha:0.199}},{t:this.instance_53,p:{scaleX:1.295,x:267.2,alpha:0.199}},{t:this.instance_52,p:{scaleX:1.295,x:290.9,alpha:0.199}},{t:this.instance_51,p:{scaleX:1.295,x:315.9,alpha:0.199}},{t:this.instance_50,p:{scaleX:1.295,x:340,alpha:0.199}},{t:this.instance_49,p:{scaleX:1.295,x:363.5,alpha:0.199}},{t:this.instance_48,p:{scaleX:1.295,x:382.5,alpha:0.199}},{t:this.instance_47,p:{scaleX:1.295,x:399.4,alpha:0.199}},{t:this.instance_46,p:{scaleX:1.295,x:417.5,alpha:0.199}},{t:this.instance_45,p:{scaleX:1.295,x:435.4,alpha:0.199}},{t:this.instance_44,p:{scaleX:1.295,x:460.8,alpha:0.199}},{t:this.instance_43,p:{scaleX:1.221,x:249.6,alpha:0.199}},{t:this.instance_42,p:{scaleX:1.221,x:272,alpha:0.199}},{t:this.instance_41,p:{scaleX:1.221,x:294.4,alpha:0.199}},{t:this.instance_40,p:{scaleX:1.221,x:318,alpha:0.199}},{t:this.instance_39,p:{scaleX:1.221,x:340.7,alpha:0.199}},{t:this.instance_38,p:{scaleX:1.221,x:362.8,alpha:0.199}},{t:this.instance_37,p:{scaleX:1.221,x:380.7,alpha:0.199}},{t:this.instance_36,p:{scaleX:1.221,x:396.7,alpha:0.199}},{t:this.instance_35,p:{scaleX:1.221,x:413.7,alpha:0.199}},{t:this.instance_34,p:{scaleX:1.221,x:430.7,alpha:0.199}},{t:this.instance_33,p:{scaleX:1.221,x:454.7,alpha:0.199}},{t:this.instance_32,p:{scaleX:1.147,x:255.8,alpha:0.199}},{t:this.instance_31,p:{scaleX:1.147,x:276.9,alpha:0.199}},{t:this.instance_30,p:{scaleX:1.147,x:297.9,alpha:0.199}},{t:this.instance_29,p:{scaleX:1.147,x:320,alpha:0.199}},{t:this.instance_28,p:{scaleX:1.147,x:341.4,alpha:0.199}},{t:this.instance_27,p:{scaleX:1.147,x:362.2,alpha:0.199}},{t:this.instance_26,p:{scaleX:1.147,x:379,alpha:0.199}},{t:this.instance_25,p:{scaleX:1.147,x:394,alpha:0.199}},{t:this.instance_24,p:{scaleX:1.147,x:410,alpha:0.199}},{t:this.instance_23,p:{scaleX:1.147,x:425.9,alpha:0.199}},{t:this.instance_22,p:{scaleX:1.147,x:448.5,alpha:0.199}},{t:this.instance_21,p:{scaleX:1.074,x:262,alpha:0.199}},{t:this.instance_20,p:{scaleX:1.074,x:281.7,alpha:0.199}},{t:this.instance_19,p:{scaleX:1.074,x:301.3,alpha:0.199}},{t:this.instance_18,p:{scaleX:1.074,x:322.1,alpha:0.199}},{t:this.instance_17,p:{scaleX:1.074,x:342.1,alpha:0.199}},{t:this.instance_16,p:{scaleX:1.074,alpha:0.199,x:361.5}},{t:this.instance_15,p:{scaleX:1.074,x:377.3,alpha:0.199}},{t:this.instance_14,p:{scaleX:1.074,x:391.3,alpha:0.199}},{t:this.instance_13,p:{scaleX:1.074,x:406.3,alpha:0.199}},{t:this.instance_12,p:{scaleX:1.074,x:421.2,alpha:0.199}},{t:this.instance_11,p:{scaleX:1.074,x:442.3,alpha:0.199}},{t:this.instance_10,p:{scaleX:1,scaleY:1,rotation:0,x:268.2,y:274,alpha:0}},{t:this.instance_9,p:{scaleX:1,scaleY:1,rotation:0,x:286.5,y:278.9,alpha:0}},{t:this.instance_8,p:{scaleX:1,scaleY:1,rotation:0,x:304.8,y:278.8,alpha:0}},{t:this.instance_7,p:{scaleX:1,scaleY:1,rotation:0,x:324.1,y:283.1,alpha:0}},{t:this.instance_6,p:{scaleX:1,scaleY:1,rotation:0,x:342.8,y:279,alpha:0}},{t:this.instance_5,p:{scaleX:1,scaleY:1,rotation:0,x:360.9,y:278.1,alpha:0}},{t:this.instance_4,p:{scaleX:1,scaleY:1,rotation:0,x:375.5,y:274.5,alpha:0}},{t:this.instance_3,p:{scaleX:1,scaleY:1,rotation:0,x:388.6,y:275.9,alpha:0}},{t:this.instance_2,p:{scaleX:1,scaleY:1,rotation:0,x:402.6,y:274.5,alpha:0}},{t:this.instance_1,p:{scaleX:1,scaleY:1,rotation:0,x:416.4,y:279,alpha:0}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:436.1,y:278.6,alpha:0}}]},1).to({state:[{t:this.instance_65,p:{scaleX:1.316,x:241.7,alpha:0.219}},{t:this.instance_64,p:{scaleX:1.316,x:265.8,alpha:0.219}},{t:this.instance_63,p:{scaleX:1.316,x:289.9,alpha:0.219}},{t:this.instance_62,p:{scaleX:1.316,x:315.3,alpha:0.219}},{t:this.instance_61,p:{scaleX:1.316,x:339.9,alpha:0.219}},{t:this.instance_60,p:{scaleX:1.316,x:363.7,alpha:0.219}},{t:this.instance_59,p:{scaleX:1.316,x:382.9,alpha:0.219}},{t:this.instance_58,p:{scaleX:1.316,x:400.2,alpha:0.219}},{t:this.instance_57,p:{scaleX:1.316,x:418.5,alpha:0.219}},{t:this.instance_56,p:{scaleX:1.316,x:436.8,alpha:0.219}},{t:this.instance_55,p:{scaleX:1.316,x:462.6,alpha:0.219}},{t:this.instance_54,p:{scaleX:1.253,x:247,alpha:0.219}},{t:this.instance_53,p:{scaleX:1.253,x:270,alpha:0.219}},{t:this.instance_52,p:{scaleX:1.253,x:292.9,alpha:0.219}},{t:this.instance_51,p:{scaleX:1.253,x:317.1,alpha:0.219}},{t:this.instance_50,p:{scaleX:1.253,x:340.4,alpha:0.219}},{t:this.instance_49,p:{scaleX:1.253,x:363.1,alpha:0.219}},{t:this.instance_48,p:{scaleX:1.253,x:381.5,alpha:0.219}},{t:this.instance_47,p:{scaleX:1.253,x:397.9,alpha:0.219}},{t:this.instance_46,p:{scaleX:1.253,x:415.3,alpha:0.219}},{t:this.instance_45,p:{scaleX:1.253,x:432.7,alpha:0.219}},{t:this.instance_44,p:{scaleX:1.253,x:457.3,alpha:0.219}},{t:this.instance_43,p:{scaleX:1.189,x:252.3,alpha:0.219}},{t:this.instance_42,p:{scaleX:1.189,x:274.1,alpha:0.219}},{t:this.instance_41,p:{scaleX:1.189,x:295.9,alpha:0.219}},{t:this.instance_40,p:{scaleX:1.189,x:318.8,alpha:0.219}},{t:this.instance_39,p:{scaleX:1.189,x:341,alpha:0.219}},{t:this.instance_38,p:{scaleX:1.189,x:362.6,alpha:0.219}},{t:this.instance_37,p:{scaleX:1.189,x:380,alpha:0.219}},{t:this.instance_36,p:{scaleX:1.189,x:395.6,alpha:0.219}},{t:this.instance_35,p:{scaleX:1.189,x:412.2,alpha:0.219}},{t:this.instance_34,p:{scaleX:1.189,x:428.6,alpha:0.219}},{t:this.instance_33,p:{scaleX:1.189,x:452,alpha:0.219}},{t:this.instance_32,p:{scaleX:1.126,x:257.6,alpha:0.219}},{t:this.instance_31,p:{scaleX:1.126,x:278.3,alpha:0.219}},{t:this.instance_30,p:{scaleX:1.126,x:298.9,alpha:0.219}},{t:this.instance_29,p:{scaleX:1.126,x:320.6,alpha:0.219}},{t:this.instance_28,p:{scaleX:1.126,x:341.6,alpha:0.219}},{t:this.instance_27,p:{scaleX:1.126,x:362,alpha:0.219}},{t:this.instance_26,p:{scaleX:1.126,x:378.5,alpha:0.219}},{t:this.instance_25,p:{scaleX:1.126,x:393.2,alpha:0.219}},{t:this.instance_24,p:{scaleX:1.126,x:409,alpha:0.219}},{t:this.instance_23,p:{scaleX:1.126,x:424.6,alpha:0.219}},{t:this.instance_22,p:{scaleX:1.126,x:446.7,alpha:0.219}},{t:this.instance_21,p:{scaleX:1.063,x:262.9,alpha:0.219}},{t:this.instance_20,p:{scaleX:1.063,x:282.4,alpha:0.219}},{t:this.instance_19,p:{scaleX:1.063,x:301.8,alpha:0.219}},{t:this.instance_18,p:{scaleX:1.063,x:322.4,alpha:0.219}},{t:this.instance_17,p:{scaleX:1.063,x:342.2,alpha:0.219}},{t:this.instance_16,p:{scaleX:1.063,alpha:0.219,x:361.4}},{t:this.instance_15,p:{scaleX:1.063,x:377,alpha:0.219}},{t:this.instance_14,p:{scaleX:1.063,x:390.9,alpha:0.219}},{t:this.instance_13,p:{scaleX:1.063,x:405.8,alpha:0.219}},{t:this.instance_12,p:{scaleX:1.063,x:420.5,alpha:0.219}},{t:this.instance_11,p:{scaleX:1.063,x:441.4,alpha:0.219}},{t:this.instance_10,p:{scaleX:1,scaleY:1,rotation:0,x:268.2,y:274,alpha:0}},{t:this.instance_9,p:{scaleX:1,scaleY:1,rotation:0,x:286.5,y:278.9,alpha:0}},{t:this.instance_8,p:{scaleX:1,scaleY:1,rotation:0,x:304.8,y:278.8,alpha:0}},{t:this.instance_7,p:{scaleX:1,scaleY:1,rotation:0,x:324.1,y:283.1,alpha:0}},{t:this.instance_6,p:{scaleX:1,scaleY:1,rotation:0,x:342.8,y:279,alpha:0}},{t:this.instance_5,p:{scaleX:1,scaleY:1,rotation:0,x:360.9,y:278.1,alpha:0}},{t:this.instance_4,p:{scaleX:1,scaleY:1,rotation:0,x:375.5,y:274.5,alpha:0}},{t:this.instance_3,p:{scaleX:1,scaleY:1,rotation:0,x:388.6,y:275.9,alpha:0}},{t:this.instance_2,p:{scaleX:1,scaleY:1,rotation:0,x:402.6,y:274.5,alpha:0}},{t:this.instance_1,p:{scaleX:1,scaleY:1,rotation:0,x:416.4,y:279,alpha:0}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:436.1,y:278.6,alpha:0}}]},1).to({state:[{t:this.instance_65,p:{scaleX:1.263,x:246.1,alpha:0.23}},{t:this.instance_64,p:{scaleX:1.263,x:269.3,alpha:0.23}},{t:this.instance_63,p:{scaleX:1.263,x:292.4,alpha:0.23}},{t:this.instance_62,p:{scaleX:1.263,x:316.8,alpha:0.23}},{t:this.instance_61,p:{scaleX:1.263,x:340.3,alpha:0.23}},{t:this.instance_60,p:{scaleX:1.263,x:363.2,alpha:0.23}},{t:this.instance_59,p:{scaleX:1.263,x:381.7,alpha:0.23}},{t:this.instance_58,p:{scaleX:1.263,x:398.3,alpha:0.23}},{t:this.instance_57,p:{scaleX:1.263,x:415.9,alpha:0.23}},{t:this.instance_56,p:{scaleX:1.263,x:433.4,alpha:0.23}},{t:this.instance_55,p:{scaleX:1.263,x:458.2,alpha:0.23}},{t:this.instance_54,p:{scaleX:1.211,x:250.5,alpha:0.23}},{t:this.instance_53,p:{scaleX:1.211,x:272.7,alpha:0.23}},{t:this.instance_52,p:{scaleX:1.211,x:294.9,alpha:0.23}},{t:this.instance_51,p:{scaleX:1.211,x:318.3,alpha:0.23}},{t:this.instance_50,p:{scaleX:1.211,x:340.8,alpha:0.23}},{t:this.instance_49,p:{scaleX:1.211,x:362.7,alpha:0.23}},{t:this.instance_48,p:{scaleX:1.211,x:380.5,alpha:0.23}},{t:this.instance_47,p:{scaleX:1.211,x:396.3,alpha:0.23}},{t:this.instance_46,p:{scaleX:1.211,x:413.2,alpha:0.23}},{t:this.instance_45,p:{scaleX:1.211,x:430,alpha:0.23}},{t:this.instance_44,p:{scaleX:1.211,x:453.8,alpha:0.23}},{t:this.instance_43,p:{scaleX:1.158,x:254.9,alpha:0.23}},{t:this.instance_42,p:{scaleX:1.158,x:276.2,alpha:0.23}},{t:this.instance_41,p:{scaleX:1.158,x:297.4,alpha:0.23}},{t:this.instance_40,p:{scaleX:1.158,x:319.7,alpha:0.23}},{t:this.instance_39,p:{scaleX:1.158,x:341.3,alpha:0.23}},{t:this.instance_38,p:{scaleX:1.158,x:362.3,alpha:0.23}},{t:this.instance_37,p:{scaleX:1.158,x:379.2,alpha:0.23}},{t:this.instance_36,p:{scaleX:1.158,x:394.4,alpha:0.23}},{t:this.instance_35,p:{scaleX:1.158,x:410.6,alpha:0.23}},{t:this.instance_34,p:{scaleX:1.158,x:426.6,alpha:0.23}},{t:this.instance_33,p:{scaleX:1.158,x:449.3,alpha:0.23}},{t:this.instance_32,p:{scaleX:1.105,x:259.3,alpha:0.23}},{t:this.instance_31,p:{scaleX:1.105,x:279.6,alpha:0.23}},{t:this.instance_30,p:{scaleX:1.105,x:299.9,alpha:0.23}},{t:this.instance_29,p:{scaleX:1.105,x:321.2,alpha:0.23}},{t:this.instance_28,p:{scaleX:1.105,x:341.8,alpha:0.23}},{t:this.instance_27,p:{scaleX:1.105,x:361.8,alpha:0.23}},{t:this.instance_26,p:{scaleX:1.105,x:378,alpha:0.23}},{t:this.instance_25,p:{scaleX:1.105,x:392.5,alpha:0.23}},{t:this.instance_24,p:{scaleX:1.105,x:407.9,alpha:0.23}},{t:this.instance_23,p:{scaleX:1.105,x:423.2,alpha:0.23}},{t:this.instance_22,p:{scaleX:1.105,x:444.9,alpha:0.23}},{t:this.instance_21,p:{scaleX:1.053,x:263.8,alpha:0.23}},{t:this.instance_20,p:{scaleX:1.053,x:283.1,alpha:0.23}},{t:this.instance_19,p:{scaleX:1.053,x:302.3,alpha:0.23}},{t:this.instance_18,p:{scaleX:1.053,x:322.7,alpha:0.23}},{t:this.instance_17,p:{scaleX:1.053,x:342.3,alpha:0.23}},{t:this.instance_16,p:{scaleX:1.053,alpha:0.23,x:361.3}},{t:this.instance_15,p:{scaleX:1.053,x:376.8,alpha:0.23}},{t:this.instance_14,p:{scaleX:1.053,x:390.6,alpha:0.23}},{t:this.instance_13,p:{scaleX:1.053,x:405.2,alpha:0.23}},{t:this.instance_12,p:{scaleX:1.053,x:419.8,alpha:0.23}},{t:this.instance_11,p:{scaleX:1.053,x:440.5,alpha:0.23}},{t:this.instance_10,p:{scaleX:1,scaleY:1,rotation:0,x:268.2,y:274,alpha:0}},{t:this.instance_9,p:{scaleX:1,scaleY:1,rotation:0,x:286.5,y:278.9,alpha:0}},{t:this.instance_8,p:{scaleX:1,scaleY:1,rotation:0,x:304.8,y:278.8,alpha:0}},{t:this.instance_7,p:{scaleX:1,scaleY:1,rotation:0,x:324.1,y:283.1,alpha:0}},{t:this.instance_6,p:{scaleX:1,scaleY:1,rotation:0,x:342.8,y:279,alpha:0}},{t:this.instance_5,p:{scaleX:1,scaleY:1,rotation:0,x:360.9,y:278.1,alpha:0}},{t:this.instance_4,p:{scaleX:1,scaleY:1,rotation:0,x:375.5,y:274.5,alpha:0}},{t:this.instance_3,p:{scaleX:1,scaleY:1,rotation:0,x:388.6,y:275.9,alpha:0}},{t:this.instance_2,p:{scaleX:1,scaleY:1,rotation:0,x:402.6,y:274.5,alpha:0}},{t:this.instance_1,p:{scaleX:1,scaleY:1,rotation:0,x:416.4,y:279,alpha:0}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:436.1,y:278.6,alpha:0}}]},1).to({state:[{t:this.instance_65,p:{scaleX:1.211,x:250.5,alpha:0.25}},{t:this.instance_64,p:{scaleX:1.211,x:272.7,alpha:0.25}},{t:this.instance_63,p:{scaleX:1.211,x:294.9,alpha:0.25}},{t:this.instance_62,p:{scaleX:1.211,x:318.3,alpha:0.25}},{t:this.instance_61,p:{scaleX:1.211,x:340.8,alpha:0.25}},{t:this.instance_60,p:{scaleX:1.211,x:362.7,alpha:0.25}},{t:this.instance_59,p:{scaleX:1.211,x:380.5,alpha:0.25}},{t:this.instance_58,p:{scaleX:1.211,x:396.3,alpha:0.25}},{t:this.instance_57,p:{scaleX:1.211,x:413.2,alpha:0.25}},{t:this.instance_56,p:{scaleX:1.211,x:430,alpha:0.25}},{t:this.instance_55,p:{scaleX:1.211,x:453.8,alpha:0.25}},{t:this.instance_54,p:{scaleX:1.168,x:254.1,alpha:0.25}},{t:this.instance_53,p:{scaleX:1.168,x:275.5,alpha:0.25}},{t:this.instance_52,p:{scaleX:1.168,x:296.9,alpha:0.25}},{t:this.instance_51,p:{scaleX:1.168,x:319.4,alpha:0.25}},{t:this.instance_50,p:{scaleX:1.168,x:341.2,alpha:0.25}},{t:this.instance_49,p:{scaleX:1.168,x:362.4,alpha:0.25}},{t:this.instance_48,p:{scaleX:1.168,x:379.5,alpha:0.25}},{t:this.instance_47,p:{scaleX:1.168,x:394.8,alpha:0.25}},{t:this.instance_46,p:{scaleX:1.168,x:411.1,alpha:0.25}},{t:this.instance_45,p:{scaleX:1.168,x:427.3,alpha:0.25}},{t:this.instance_44,p:{scaleX:1.168,x:450.2,alpha:0.25}},{t:this.instance_43,p:{scaleX:1.126,x:257.6,alpha:0.25}},{t:this.instance_42,p:{scaleX:1.126,x:278.3,alpha:0.25}},{t:this.instance_41,p:{scaleX:1.126,x:298.9,alpha:0.25}},{t:this.instance_40,p:{scaleX:1.126,x:320.6,alpha:0.25}},{t:this.instance_39,p:{scaleX:1.126,x:341.6,alpha:0.25}},{t:this.instance_38,p:{scaleX:1.126,x:362,alpha:0.25}},{t:this.instance_37,p:{scaleX:1.126,x:378.5,alpha:0.25}},{t:this.instance_36,p:{scaleX:1.126,x:393.2,alpha:0.25}},{t:this.instance_35,p:{scaleX:1.126,x:409,alpha:0.25}},{t:this.instance_34,p:{scaleX:1.126,x:424.6,alpha:0.25}},{t:this.instance_33,p:{scaleX:1.126,x:446.7,alpha:0.25}},{t:this.instance_32,p:{scaleX:1.084,x:261.1,alpha:0.25}},{t:this.instance_31,p:{scaleX:1.084,x:281,alpha:0.25}},{t:this.instance_30,p:{scaleX:1.084,x:300.9,alpha:0.25}},{t:this.instance_29,p:{scaleX:1.084,x:321.8,alpha:0.25}},{t:this.instance_28,p:{scaleX:1.084,x:342,alpha:0.25}},{t:this.instance_27,p:{scaleX:1.084,x:361.6,alpha:0.25}},{t:this.instance_26,p:{scaleX:1.084,x:377.5,alpha:0.25}},{t:this.instance_25,p:{scaleX:1.084,x:391.7,alpha:0.25}},{t:this.instance_24,p:{scaleX:1.084,x:406.8,alpha:0.25}},{t:this.instance_23,p:{scaleX:1.084,x:421.8,alpha:0.25}},{t:this.instance_22,p:{scaleX:1.084,x:443.2,alpha:0.25}},{t:this.instance_21,p:{scaleX:1.042,x:264.6,alpha:0.25}},{t:this.instance_20,p:{scaleX:1.042,x:283.8,alpha:0.25}},{t:this.instance_19,p:{scaleX:1.042,x:302.8,alpha:0.25}},{t:this.instance_18,p:{scaleX:1.042,x:323,alpha:0.25}},{t:this.instance_17,p:{scaleX:1.042,x:342.4,alpha:0.25}},{t:this.instance_16,p:{scaleX:1.042,alpha:0.25,x:361.2}},{t:this.instance_15,p:{scaleX:1.042,x:376.5,alpha:0.25}},{t:this.instance_14,p:{scaleX:1.042,x:390.2,alpha:0.25}},{t:this.instance_13,p:{scaleX:1.042,x:404.7,alpha:0.25}},{t:this.instance_12,p:{scaleX:1.042,x:419.1,alpha:0.25}},{t:this.instance_11,p:{scaleX:1.042,x:439.6,alpha:0.25}},{t:this.instance_10,p:{scaleX:1,scaleY:1,rotation:0,x:268.2,y:274,alpha:0}},{t:this.instance_9,p:{scaleX:1,scaleY:1,rotation:0,x:286.5,y:278.9,alpha:0}},{t:this.instance_8,p:{scaleX:1,scaleY:1,rotation:0,x:304.8,y:278.8,alpha:0}},{t:this.instance_7,p:{scaleX:1,scaleY:1,rotation:0,x:324.1,y:283.1,alpha:0}},{t:this.instance_6,p:{scaleX:1,scaleY:1,rotation:0,x:342.8,y:279,alpha:0}},{t:this.instance_5,p:{scaleX:1,scaleY:1,rotation:0,x:360.9,y:278.1,alpha:0}},{t:this.instance_4,p:{scaleX:1,scaleY:1,rotation:0,x:375.5,y:274.5,alpha:0}},{t:this.instance_3,p:{scaleX:1,scaleY:1,rotation:0,x:388.6,y:275.9,alpha:0}},{t:this.instance_2,p:{scaleX:1,scaleY:1,rotation:0,x:402.6,y:274.5,alpha:0}},{t:this.instance_1,p:{scaleX:1,scaleY:1,rotation:0,x:416.4,y:279,alpha:0}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:436.1,y:278.6,alpha:0}}]},1).to({state:[{t:this.instance_65,p:{scaleX:1.158,x:254.9,alpha:0.27}},{t:this.instance_64,p:{scaleX:1.158,x:276.2,alpha:0.27}},{t:this.instance_63,p:{scaleX:1.158,x:297.4,alpha:0.27}},{t:this.instance_62,p:{scaleX:1.158,x:319.7,alpha:0.27}},{t:this.instance_61,p:{scaleX:1.158,x:341.3,alpha:0.27}},{t:this.instance_60,p:{scaleX:1.158,x:362.3,alpha:0.27}},{t:this.instance_59,p:{scaleX:1.158,x:379.2,alpha:0.27}},{t:this.instance_58,p:{scaleX:1.158,x:394.4,alpha:0.27}},{t:this.instance_57,p:{scaleX:1.158,x:410.6,alpha:0.27}},{t:this.instance_56,p:{scaleX:1.158,x:426.6,alpha:0.27}},{t:this.instance_55,p:{scaleX:1.158,x:449.3,alpha:0.27}},{t:this.instance_54,p:{scaleX:1.126,x:257.6,alpha:0.27}},{t:this.instance_53,p:{scaleX:1.126,x:278.3,alpha:0.27}},{t:this.instance_52,p:{scaleX:1.126,x:298.9,alpha:0.27}},{t:this.instance_51,p:{scaleX:1.126,x:320.6,alpha:0.27}},{t:this.instance_50,p:{scaleX:1.126,x:341.6,alpha:0.27}},{t:this.instance_49,p:{scaleX:1.126,x:362,alpha:0.27}},{t:this.instance_48,p:{scaleX:1.126,x:378.5,alpha:0.27}},{t:this.instance_47,p:{scaleX:1.126,x:393.2,alpha:0.27}},{t:this.instance_46,p:{scaleX:1.126,x:409,alpha:0.27}},{t:this.instance_45,p:{scaleX:1.126,x:424.6,alpha:0.27}},{t:this.instance_44,p:{scaleX:1.126,x:446.7,alpha:0.27}},{t:this.instance_43,p:{scaleX:1.095,x:260.2,alpha:0.27}},{t:this.instance_42,p:{scaleX:1.095,x:280.3,alpha:0.27}},{t:this.instance_41,p:{scaleX:1.095,x:300.4,alpha:0.27}},{t:this.instance_40,p:{scaleX:1.095,x:321.5,alpha:0.27}},{t:this.instance_39,p:{scaleX:1.095,x:341.9,alpha:0.27}},{t:this.instance_38,p:{scaleX:1.095,x:361.7,alpha:0.27}},{t:this.instance_37,p:{scaleX:1.095,x:377.8,alpha:0.27}},{t:this.instance_36,p:{scaleX:1.095,x:392.1,alpha:0.27}},{t:this.instance_35,p:{scaleX:1.095,x:407.4,alpha:0.27}},{t:this.instance_34,p:{scaleX:1.095,x:422.5,alpha:0.27}},{t:this.instance_33,p:{scaleX:1.095,x:444,alpha:0.27}},{t:this.instance_32,p:{scaleX:1.063,x:262.9,alpha:0.27}},{t:this.instance_31,p:{scaleX:1.063,x:282.4,alpha:0.27}},{t:this.instance_30,p:{scaleX:1.063,x:301.8,alpha:0.27}},{t:this.instance_29,p:{scaleX:1.063,x:322.4,alpha:0.27}},{t:this.instance_28,p:{scaleX:1.063,x:342.2,alpha:0.27}},{t:this.instance_27,p:{scaleX:1.063,x:361.4,alpha:0.27}},{t:this.instance_26,p:{scaleX:1.063,x:377,alpha:0.27}},{t:this.instance_25,p:{scaleX:1.063,x:390.9,alpha:0.27}},{t:this.instance_24,p:{scaleX:1.063,x:405.8,alpha:0.27}},{t:this.instance_23,p:{scaleX:1.063,x:420.5,alpha:0.27}},{t:this.instance_22,p:{scaleX:1.063,x:441.4,alpha:0.27}},{t:this.instance_21,p:{scaleX:1.032,x:265.5,alpha:0.27}},{t:this.instance_20,p:{scaleX:1.032,x:284.5,alpha:0.27}},{t:this.instance_19,p:{scaleX:1.032,x:303.3,alpha:0.27}},{t:this.instance_18,p:{scaleX:1.032,x:323.2,alpha:0.27}},{t:this.instance_17,p:{scaleX:1.032,x:342.5,alpha:0.27}},{t:this.instance_16,p:{scaleX:1.032,alpha:0.27,x:361.2}},{t:this.instance_15,p:{scaleX:1.032,x:376.3,alpha:0.27}},{t:this.instance_14,p:{scaleX:1.032,x:389.8,alpha:0.27}},{t:this.instance_13,p:{scaleX:1.032,x:404.2,alpha:0.27}},{t:this.instance_12,p:{scaleX:1.032,x:418.5,alpha:0.27}},{t:this.instance_11,p:{scaleX:1.032,x:438.7,alpha:0.27}},{t:this.instance_10,p:{scaleX:1,scaleY:1,rotation:0,x:268.2,y:274,alpha:0}},{t:this.instance_9,p:{scaleX:1,scaleY:1,rotation:0,x:286.5,y:278.9,alpha:0}},{t:this.instance_8,p:{scaleX:1,scaleY:1,rotation:0,x:304.8,y:278.8,alpha:0}},{t:this.instance_7,p:{scaleX:1,scaleY:1,rotation:0,x:324.1,y:283.1,alpha:0}},{t:this.instance_6,p:{scaleX:1,scaleY:1,rotation:0,x:342.8,y:279,alpha:0}},{t:this.instance_5,p:{scaleX:1,scaleY:1,rotation:0,x:360.9,y:278.1,alpha:0}},{t:this.instance_4,p:{scaleX:1,scaleY:1,rotation:0,x:375.5,y:274.5,alpha:0}},{t:this.instance_3,p:{scaleX:1,scaleY:1,rotation:0,x:388.6,y:275.9,alpha:0}},{t:this.instance_2,p:{scaleX:1,scaleY:1,rotation:0,x:402.6,y:274.5,alpha:0}},{t:this.instance_1,p:{scaleX:1,scaleY:1,rotation:0,x:416.4,y:279,alpha:0}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:436.1,y:278.6,alpha:0}}]},1).to({state:[{t:this.instance_65,p:{scaleX:1.105,x:259.3,alpha:0.289}},{t:this.instance_64,p:{scaleX:1.105,x:279.6,alpha:0.289}},{t:this.instance_63,p:{scaleX:1.105,x:299.9,alpha:0.289}},{t:this.instance_62,p:{scaleX:1.105,x:321.2,alpha:0.289}},{t:this.instance_61,p:{scaleX:1.105,x:341.8,alpha:0.289}},{t:this.instance_60,p:{scaleX:1.105,x:361.8,alpha:0.289}},{t:this.instance_59,p:{scaleX:1.105,x:378,alpha:0.289}},{t:this.instance_58,p:{scaleX:1.105,x:392.5,alpha:0.289}},{t:this.instance_57,p:{scaleX:1.105,x:407.9,alpha:0.289}},{t:this.instance_56,p:{scaleX:1.105,x:423.2,alpha:0.289}},{t:this.instance_55,p:{scaleX:1.105,x:444.9,alpha:0.289}},{t:this.instance_54,p:{scaleX:1.084,x:261.1,alpha:0.289}},{t:this.instance_53,p:{scaleX:1.084,x:281,alpha:0.289}},{t:this.instance_52,p:{scaleX:1.084,x:300.9,alpha:0.289}},{t:this.instance_51,p:{scaleX:1.084,x:321.8,alpha:0.289}},{t:this.instance_50,p:{scaleX:1.084,x:342,alpha:0.289}},{t:this.instance_49,p:{scaleX:1.084,x:361.6,alpha:0.289}},{t:this.instance_48,p:{scaleX:1.084,x:377.5,alpha:0.289}},{t:this.instance_47,p:{scaleX:1.084,x:391.7,alpha:0.289}},{t:this.instance_46,p:{scaleX:1.084,x:406.8,alpha:0.289}},{t:this.instance_45,p:{scaleX:1.084,x:421.8,alpha:0.289}},{t:this.instance_44,p:{scaleX:1.084,x:443.2,alpha:0.289}},{t:this.instance_43,p:{scaleX:1.063,x:262.9,alpha:0.289}},{t:this.instance_42,p:{scaleX:1.063,x:282.4,alpha:0.289}},{t:this.instance_41,p:{scaleX:1.063,x:301.8,alpha:0.289}},{t:this.instance_40,p:{scaleX:1.063,x:322.4,alpha:0.289}},{t:this.instance_39,p:{scaleX:1.063,x:342.2,alpha:0.289}},{t:this.instance_38,p:{scaleX:1.063,x:361.4,alpha:0.289}},{t:this.instance_37,p:{scaleX:1.063,x:377,alpha:0.289}},{t:this.instance_36,p:{scaleX:1.063,x:390.9,alpha:0.289}},{t:this.instance_35,p:{scaleX:1.063,x:405.8,alpha:0.289}},{t:this.instance_34,p:{scaleX:1.063,x:420.5,alpha:0.289}},{t:this.instance_33,p:{scaleX:1.063,x:441.4,alpha:0.289}},{t:this.instance_32,p:{scaleX:1.042,x:264.6,alpha:0.289}},{t:this.instance_31,p:{scaleX:1.042,x:283.8,alpha:0.289}},{t:this.instance_30,p:{scaleX:1.042,x:302.8,alpha:0.289}},{t:this.instance_29,p:{scaleX:1.042,x:323,alpha:0.289}},{t:this.instance_28,p:{scaleX:1.042,x:342.4,alpha:0.289}},{t:this.instance_27,p:{scaleX:1.042,x:361.2,alpha:0.289}},{t:this.instance_26,p:{scaleX:1.042,x:376.5,alpha:0.289}},{t:this.instance_25,p:{scaleX:1.042,x:390.2,alpha:0.289}},{t:this.instance_24,p:{scaleX:1.042,x:404.7,alpha:0.289}},{t:this.instance_23,p:{scaleX:1.042,x:419.1,alpha:0.289}},{t:this.instance_22,p:{scaleX:1.042,x:439.6,alpha:0.289}},{t:this.instance_21,p:{scaleX:1.021,x:266.4,alpha:0.289}},{t:this.instance_20,p:{scaleX:1.021,x:285.1,alpha:0.289}},{t:this.instance_19,p:{scaleX:1.021,x:303.8,alpha:0.289}},{t:this.instance_18,p:{scaleX:1.021,x:323.5,alpha:0.289}},{t:this.instance_17,p:{scaleX:1.021,x:342.6,alpha:0.289}},{t:this.instance_16,p:{scaleX:1.021,alpha:0.289,x:361.1}},{t:this.instance_15,p:{scaleX:1.021,x:376,alpha:0.289}},{t:this.instance_14,p:{scaleX:1.021,x:389.4,alpha:0.289}},{t:this.instance_13,p:{scaleX:1.021,x:403.6,alpha:0.289}},{t:this.instance_12,p:{scaleX:1.021,x:417.8,alpha:0.289}},{t:this.instance_11,p:{scaleX:1.021,x:437.8,alpha:0.289}},{t:this.instance_10,p:{scaleX:1,scaleY:1,rotation:0,x:268.2,y:274,alpha:0}},{t:this.instance_9,p:{scaleX:1,scaleY:1,rotation:0,x:286.5,y:278.9,alpha:0}},{t:this.instance_8,p:{scaleX:1,scaleY:1,rotation:0,x:304.8,y:278.8,alpha:0}},{t:this.instance_7,p:{scaleX:1,scaleY:1,rotation:0,x:324.1,y:283.1,alpha:0}},{t:this.instance_6,p:{scaleX:1,scaleY:1,rotation:0,x:342.8,y:279,alpha:0}},{t:this.instance_5,p:{scaleX:1,scaleY:1,rotation:0,x:360.9,y:278.1,alpha:0}},{t:this.instance_4,p:{scaleX:1,scaleY:1,rotation:0,x:375.5,y:274.5,alpha:0}},{t:this.instance_3,p:{scaleX:1,scaleY:1,rotation:0,x:388.6,y:275.9,alpha:0}},{t:this.instance_2,p:{scaleX:1,scaleY:1,rotation:0,x:402.6,y:274.5,alpha:0}},{t:this.instance_1,p:{scaleX:1,scaleY:1,rotation:0,x:416.4,y:279,alpha:0}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:436.1,y:278.6,alpha:0}}]},1).to({state:[{t:this.instance_65,p:{scaleX:1.053,x:263.8,alpha:0.301}},{t:this.instance_64,p:{scaleX:1.053,x:283.1,alpha:0.301}},{t:this.instance_63,p:{scaleX:1.053,x:302.3,alpha:0.301}},{t:this.instance_62,p:{scaleX:1.053,x:322.7,alpha:0.301}},{t:this.instance_61,p:{scaleX:1.053,x:342.3,alpha:0.301}},{t:this.instance_60,p:{scaleX:1.053,x:361.3,alpha:0.301}},{t:this.instance_59,p:{scaleX:1.053,x:376.8,alpha:0.301}},{t:this.instance_58,p:{scaleX:1.053,x:390.6,alpha:0.301}},{t:this.instance_57,p:{scaleX:1.053,x:405.2,alpha:0.301}},{t:this.instance_56,p:{scaleX:1.053,x:419.8,alpha:0.301}},{t:this.instance_55,p:{scaleX:1.053,x:440.5,alpha:0.301}},{t:this.instance_54,p:{scaleX:1.042,x:264.6,alpha:0.301}},{t:this.instance_53,p:{scaleX:1.042,x:283.8,alpha:0.301}},{t:this.instance_52,p:{scaleX:1.042,x:302.8,alpha:0.301}},{t:this.instance_51,p:{scaleX:1.042,x:323,alpha:0.301}},{t:this.instance_50,p:{scaleX:1.042,x:342.4,alpha:0.301}},{t:this.instance_49,p:{scaleX:1.042,x:361.2,alpha:0.301}},{t:this.instance_48,p:{scaleX:1.042,x:376.5,alpha:0.301}},{t:this.instance_47,p:{scaleX:1.042,x:390.2,alpha:0.301}},{t:this.instance_46,p:{scaleX:1.042,x:404.7,alpha:0.301}},{t:this.instance_45,p:{scaleX:1.042,x:419.1,alpha:0.301}},{t:this.instance_44,p:{scaleX:1.042,x:439.6,alpha:0.301}},{t:this.instance_43,p:{scaleX:1.032,x:265.5,alpha:0.301}},{t:this.instance_42,p:{scaleX:1.032,x:284.5,alpha:0.301}},{t:this.instance_41,p:{scaleX:1.032,x:303.3,alpha:0.301}},{t:this.instance_40,p:{scaleX:1.032,x:323.2,alpha:0.301}},{t:this.instance_39,p:{scaleX:1.032,x:342.5,alpha:0.301}},{t:this.instance_38,p:{scaleX:1.032,x:361.2,alpha:0.301}},{t:this.instance_37,p:{scaleX:1.032,x:376.3,alpha:0.301}},{t:this.instance_36,p:{scaleX:1.032,x:389.8,alpha:0.301}},{t:this.instance_35,p:{scaleX:1.032,x:404.2,alpha:0.301}},{t:this.instance_34,p:{scaleX:1.032,x:418.5,alpha:0.301}},{t:this.instance_33,p:{scaleX:1.032,x:438.7,alpha:0.301}},{t:this.instance_32,p:{scaleX:1.021,x:266.4,alpha:0.301}},{t:this.instance_31,p:{scaleX:1.021,x:285.1,alpha:0.301}},{t:this.instance_30,p:{scaleX:1.021,x:303.8,alpha:0.301}},{t:this.instance_29,p:{scaleX:1.021,x:323.5,alpha:0.301}},{t:this.instance_28,p:{scaleX:1.021,x:342.6,alpha:0.301}},{t:this.instance_27,p:{scaleX:1.021,x:361.1,alpha:0.301}},{t:this.instance_26,p:{scaleX:1.021,x:376,alpha:0.301}},{t:this.instance_25,p:{scaleX:1.021,x:389.4,alpha:0.301}},{t:this.instance_24,p:{scaleX:1.021,x:403.6,alpha:0.301}},{t:this.instance_23,p:{scaleX:1.021,x:417.8,alpha:0.301}},{t:this.instance_22,p:{scaleX:1.021,x:437.8,alpha:0.301}},{t:this.instance_21,p:{scaleX:1.011,x:267.3,alpha:0.301}},{t:this.instance_20,p:{scaleX:1.011,x:285.8,alpha:0.301}},{t:this.instance_19,p:{scaleX:1.011,x:304.3,alpha:0.301}},{t:this.instance_18,p:{scaleX:1.011,x:323.8,alpha:0.301}},{t:this.instance_17,p:{scaleX:1.011,x:342.7,alpha:0.301}},{t:this.instance_16,p:{scaleX:1.011,alpha:0.301,x:361}},{t:this.instance_15,p:{scaleX:1.011,x:375.8,alpha:0.301}},{t:this.instance_14,p:{scaleX:1.011,x:389,alpha:0.301}},{t:this.instance_13,p:{scaleX:1.011,x:403.1,alpha:0.301}},{t:this.instance_12,p:{scaleX:1.011,x:417.1,alpha:0.301}},{t:this.instance_11,p:{scaleX:1.011,x:437,alpha:0.301}},{t:this.instance_10,p:{scaleX:1,scaleY:1,rotation:0,x:268.2,y:274,alpha:0}},{t:this.instance_9,p:{scaleX:1,scaleY:1,rotation:0,x:286.5,y:278.9,alpha:0}},{t:this.instance_8,p:{scaleX:1,scaleY:1,rotation:0,x:304.8,y:278.8,alpha:0}},{t:this.instance_7,p:{scaleX:1,scaleY:1,rotation:0,x:324.1,y:283.1,alpha:0}},{t:this.instance_6,p:{scaleX:1,scaleY:1,rotation:0,x:342.8,y:279,alpha:0}},{t:this.instance_5,p:{scaleX:1,scaleY:1,rotation:0,x:360.9,y:278.1,alpha:0}},{t:this.instance_4,p:{scaleX:1,scaleY:1,rotation:0,x:375.5,y:274.5,alpha:0}},{t:this.instance_3,p:{scaleX:1,scaleY:1,rotation:0,x:388.6,y:275.9,alpha:0}},{t:this.instance_2,p:{scaleX:1,scaleY:1,rotation:0,x:402.6,y:274.5,alpha:0}},{t:this.instance_1,p:{scaleX:1,scaleY:1,rotation:0,x:416.4,y:279,alpha:0}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:436.1,y:278.6,alpha:0}}]},1).to({state:[{t:this.instance_10,p:{scaleX:1,scaleY:1,rotation:0,x:268.2,y:274,alpha:1}},{t:this.instance_9,p:{scaleX:1,scaleY:1,rotation:0,x:286.5,y:278.9,alpha:1}},{t:this.instance_8,p:{scaleX:1,scaleY:1,rotation:0,x:304.8,y:278.8,alpha:1}},{t:this.instance_7,p:{scaleX:1,scaleY:1,rotation:0,x:324.1,y:283.1,alpha:1}},{t:this.instance_6,p:{scaleX:1,scaleY:1,rotation:0,x:342.8,y:279,alpha:1}},{t:this.instance_5,p:{scaleX:1,scaleY:1,rotation:0,x:360.9,y:278.1,alpha:1}},{t:this.instance_4,p:{scaleX:1,scaleY:1,rotation:0,x:375.5,y:274.5,alpha:1}},{t:this.instance_3,p:{scaleX:1,scaleY:1,rotation:0,x:388.6,y:275.9,alpha:1}},{t:this.instance_2,p:{scaleX:1,scaleY:1,rotation:0,x:402.6,y:274.5,alpha:1}},{t:this.instance_1,p:{scaleX:1,scaleY:1,rotation:0,x:416.4,y:279,alpha:1}},{t:this.instance,p:{scaleX:1,scaleY:1,rotation:0,x:436.1,y:278.6,alpha:1}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(83.6,254.8,522.3,39.9);


(lib.ant2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ant2still();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-1.4,y:-9.3},4).to({x:0,y:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.7,-27.7,37.4,55.4);


(lib.ant1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ant1still();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.999,0.999,-9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:20.8},4).to({rotation:-9.8},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.1,-29.9,50,58.9);


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
		//this.btn_goBack.addEventListener("click", openPrev.bind(this));
		
		//background music ---------------------------------------
		var bgm = createjs.Sound.play('bgmPrep',{loop:-1});
		
		//volume vars -----------------------------------------
		var mute= false;
		bgm.volume = 0.2;
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
		
		 window.open ("prep_Scene1.html","_self");
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.btn_menu},{t:this.vol_dwn},{t:this.vol_up},{t:this.btn_goNext},{t:this.instance}]}).wait(1));

	// vol_frame
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s("#000000").ss(1.5,1,1).rr(-33,-12,66,24,4.9);
	this.shape_5.setTransform(-24.7,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.UI, new cjs.Rectangle(-283.9,-13,331.7,399), null);


(lib.ants = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ant2();
	this.instance.parent = this;
	this.instance.setTransform(18.5,5.2);

	this.instance_1 = new lib.ant1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-14.3,-7.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ants, new cjs.Rectangle(-41.4,-37.3,78.6,70.2), null);


(lib.defintion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ants();
	this.instance.parent = this;
	this.instance.setTransform(2.2,88.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAlA4IgGgiIgdAFIgcAHIgSAoQgDAHgHAAQgEAAgDgDQgDgEgBgEQAAgGARgiQgCgDAAgDQAAgJALgCQAMgWASgeQAZgpAGAAQAJAAACAMIAIAkIAQBKIAFARQADAJABADQgBAEgDADQgDADgEAAQgKAAgIgZgAgNAIQANgDAZgFIgIgpg");
	this.shape.setTransform(-0.2,-87.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgJAJQgDgDAAgGQAAgFADgDQAEgEAFAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFAAQgFAAgEgEg");
	this.shape_1.setTransform(93.9,4.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgpBXQgDgDAAgFIAAgrIAAgpIgBgrIgCgWQAAgIADgFQADgGAGAAQAEAAADADQADADAAAEIAAADIgBAHQAJgHAJgDQAIgDAHAAQAWAAAKATQAJAQAAAZQAAAXgNAPQgNAQgWAAQgKAAgNgEIAAAzQAAAFgDADQgDADgFAAQgEAAgDgDgAgKg4QgFADgJAIIABAyQAMAFALAAQANAAAHgKQAGgIAAgOQAAgTgEgKQgFgKgKAAQgJAAgIAFg");
	this.shape_2.setTransform(85.3,2.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJBOQgDgDgBgFIAAgTIgBgUIACgZIABgYQAAgFADgDQADgDAFAAQADAAADADQADADAAAFIgBAYIgBAZIAAAUIABATQAAAFgEADQgDADgDAAQgEAAgDgDgAgGg6QgEgEABgFQgBgFAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAFQAAAFgEAEQgEADgFAAQgEAAgEgDg");
	this.shape_3.setTransform(76.5,-3.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAdBRQgCgJgCgQQgCgPAAgKIAAgJIAAgIQAAgUgKAAQgNAAgKAMQgGAGgJASQAAApgEAHQgDAHgGAAQgFAAgDgDQgDgDAAgEIABgFQABgDAAgNIAAgQIABhNIAAgSIgBgLIgBgKQAAgEADgDQAEgDAEAAQAJAAABAJQACALAAAIIgBAXIAAAYIAAAJQAJgLAKgGQAJgGALAAQASAAAHALQAEAJABASIABAVIACAWQABAMADAKIAAADQAAAFgDADQgDACgFAAQgIAAgCgIg");
	this.shape_4.setTransform(67,-3.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgdA8QgRgHAAgKQAAgFAEgCQADgEAEAAQAEAAAFAFQACADAJACIANABQAIAAAGgCQAKgEAAgHQAAgOgUgFIgKgCQgOgDgGgFQgJgFAAgMQAAgWAVgKQAGgDAOgEIAUgHQAEgBAGAAQAEAAADACQADADAAAFIABAJIACAJQAAAFgDADQgDADgFAAQgGAAgCgDQgCgEgBgIIgZAHQgQAHAAAKIAGACQAYAEAMAIQARALAAAUQAAASgPAJQgMAHgSAAQgPAAgMgEg");
	this.shape_5.setTransform(54.8,-0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAaA0IgDgXIgBgYIAAgIIAAgLQAAgXgIAAQgMAAgKAOQgKANgGATIgBALIAAAKIAAAKIABAKQAAAEgDADQgDADgFAAQgEAAgDgDQgDgDAAgEIgBgKIAAgKIABgeIACgeIgBgKIAAgLQAAgEADgDQADgDAFgBQAJAAABAOIABANQASgYASAAQARAAAHAPQAEALABATIAAALIAAAJQAAAJACAOQACAOAAAJQAAAFgDADQgDACgEAAQgKAAgBgKg");
	this.shape_6.setTransform(44.3,-0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AggAtQgOgOgBgZQAAgYANgSQAOgWAaAAQAWAAALAUQAJAPgBAXQAAAXgMARQgOATgWAAQgSAAgNgOgAgTgVQgGAMAAAPQgBAPAJAJQAHAHAJAAQALAAAIgIQAJgJABgPQABgpgYAAQgPAAgJAPg");
	this.shape_7.setTransform(32.4,-0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgKBOQgDgDAAgFIAAgTIAAgUIABgZIABgYQAAgFADgDQADgDAEAAQAEAAADADQADADAAAFIgBAYIgBAZIAAAUIAAATQAAAFgDADQgDADgDAAQgFAAgDgDgAgGg6QgEgEAAgFQAAgFAEgEQAEgEAEAAQAFAAAEAEQAEAEgBAFQABAFgEAEQgEADgFAAQgEAAgEgDg");
	this.shape_8.setTransform(24,-3.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgGBLQgDgCAAgEIAAgNIAAgMIgCg+IgYgBQgJgBAAgKQAAgFADgDQADgDAEAAIAXACIgBgPIAAgNQAAgEADgDQADgEAEAAQAJAAACAQIAAAKIAAAGIAAAHIAPgCQALAAAEABQAGACAAAIQAAAFgDADQgDADgEAAIgGAAIgFAAIgPABIACA/IAAAFIABAFQAAAXgMABQgDAAgDgEg");
	this.shape_9.setTransform(15.5,-2.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAiA3IgHgIIgSAIQgIAEgEAAQgZAAgMgPQgLgNAAgbQAAgaASgSQASgSAYAAQAJgBAMAFQAOAGAAAJQAAADgCACIgBAOIgBAWQAAANACAJIAGASIADAGIABACQAAAEgDADQgDACgEABQgCgBgGgEgAgRgaQgNANAAASQAAARAHAJQAGAIAMABQAKgBAHgEIALgIQgEgbAAgOIABgKIACgMIgHgCIgFgBQgPAAgMANg");
	this.shape_10.setTransform(4.7,-0.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgMBOIACgnIABgnIABgmIAAgnQAAgLAKAAQALAAgBALIAAAnIgBAmIgBA1IgBAZQgCALgIAAQgLAAAAgLg");
	this.shape_11.setTransform(-3.9,-3.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgkAvQgRgOAAgYQAAgbAOgTQAOgVAZAAQARAAALAHQAOAHAAAPQAAALgMAJQgGAEgRAHIgoATQAGAJAJAFQAJAEALAAQAIAAAJgDQANgDAEgGQAEgGADAAQAEAAAEADQACADAAAEQAAAMgTAIQgRAIgPAAQgXAAgPgMgAgVgcQgJAKgFAUIAhgPQATgKAIgHQgJgIgQAAQgNAAgIAKg");
	this.shape_12.setTransform(-12.8,-0.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgpAxIAAhKIABgKIAAgMQAAgKAJAAQALAAAAARQAUgTAZAAQAIAAAFAHQAEAGAAANIAAAIQgBANgKAAQgJAAAAgLIgBgHIAAgJQgRACgJAHQgKAIgGAOIAAA5QAAALgKAAQgKAAAAgLg");
	this.shape_13.setTransform(-24,-0.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgdA8QgRgHAAgKQAAgFAEgCQADgEAEAAQAEAAAFAFQACADAJACIANABQAIAAAGgCQAKgEAAgHQAAgOgUgFIgKgCQgOgDgGgFQgJgFAAgMQAAgWAVgKQAGgDAOgEIAUgHQAEgBAGAAQAEAAADACQADADAAAFIABAJIACAJQAAAFgDADQgDADgFAAQgGAAgCgDQgCgEgBgIIgZAHQgQAHAAAKIAGACQAYAEAMAIQARALAAAUQAAASgPAJQgMAHgSAAQgPAAgMgEg");
	this.shape_14.setTransform(-41.8,-0.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAZA8QgMAAgGgdIgFgZIgCgXIgJAUIgQAsQgCAEgCACQgDAHgIAAQgIAAgHggQgEgRgEgbIgDgQIgBgRQAAgEADgDQADgDAFAAQAIAAACAJIACAQIACAPIAGAwIAZhMQADgMAIAAQAJAAADAOIAHAmQAEAaADAQIAIgeIAOg5QACgHAHAAQAFAAADADQADADAAAFIgBAFQgIAjgOArQgDAKgHAKQgDAFgGAAIgBAAg");
	this.shape_15.setTransform(-54.3,-0.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgfAtQgPgOgBgZQAAgYAMgSQAPgWAaAAQAWAAALAUQAJAPgBAXQAAAXgMARQgNATgXAAQgRAAgNgOgAgTgVQgHAMAAAPQAAAPAJAJQAHAHAJAAQALAAAIgIQAJgJAAgPQACgpgYAAQgPAAgJAPg");
	this.shape_16.setTransform(-67.8,-0.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAdBRQgCgJgCgQQgCgPAAgKIAAgJIAAgIQAAgUgKAAQgNAAgKAMQgGAGgJASQAAApgEAHQgDAHgGAAQgFAAgDgDQgDgDAAgEIABgFQABgDAAgNIAAgQIABhNIAAgSIgBgLIgBgKQAAgEADgDQAEgDAEAAQAJAAABAJQACALAAAIIgBAXIAAAYIAAAJQAJgLAKgGQAJgGALAAQASAAAHALQAEAJABASIABAVIACAWQABAMADAKIAAADQAAAFgDADQgDACgFAAQgIAAgCgIg");
	this.shape_17.setTransform(-79.6,-3.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgdA8QgRgHAAgKQAAgFAEgCQADgEAEAAQAEAAAFAFQACADAJACIANABQAIAAAGgCQAKgEAAgHQAAgOgUgFIgKgCQgOgDgGgFQgJgFAAgMQAAgWAVgKQAGgDAOgEIAUgHQAEgBAGAAQAEAAADACQADADAAAFIABAJIACAJQAAAFgDADQgDADgFAAQgGAAgCgDQgCgEgBgIIgZAHQgQAHAAAKIAGACQAYAEAMAIQARALAAAUQAAASgPAJQgMAHgSAAQgPAAgMgEg");
	this.shape_18.setTransform(-91.7,-0.8);

	this.instance_1 = new lib.defpreposition();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-43.2,1.349,1.349,0,0,0,346.2,278);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(3,1,1).p("EAjyAWWUgjyAAAgjxAAAMAAAgsrMBHjAAAg");

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#663366").s().p("EgjxAWWMAAAgsrMBHjAAAMAAAAsrMhHjAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.instance_1},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.defintion, new cjs.Rectangle(-355.5,-144.5,711,289), null);


// stage content:
(lib.prep_intro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* jingle = new Sound();
		jingle.attachSound("Jingle-Preposition");
		v1 = new Sound();
		v1.attachSound("preposition");
		
		jingle.start();
		
		volCurr = 100;
		volMax = 100;
		volMin = 0;
		move = true;
		
		function soundLevel(){
			if(move){
				dimVol();
			}
		}
		function dimVol(){
			if(volCurr > volMin){
				volCurr --;
				jingle.setVolume(volCurr);
			}
			else if(volCurr <= volMin){
				move = false;
				jingle.stop();
				nextSound();
			}	
		}
		
		function nextSound(){
			v1.setVolume(volMax);
			v1.onSoundComplete = backgroundSound;
			v1.start();
		}
		
		function backgroundSound(){
			jingle.setVolume = (volMax / 2);
			v1.onSoundComplete = null;
			jingle.start(0,99);
		}*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// main
	this.instance = new lib.defintion();
	this.instance.parent = this;
	this.instance.setTransform(271,186);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// btn
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.timeline.addTween(cjs.Tween.get(this.UI).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(190.5,201.6,711,398.7);
// library properties:
lib.properties = {
	id: '02141BF0871DC94D86862EC0FF6B0C8C',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/_2a.mp3", id:"_2a"},
		{src:"sounds/_3b.mp3", id:"_3b"},
		{src:"sounds/_4b.mp3", id:"_4b"},
		{src:"sounds/_4c.mp3", id:"_4c"},
		{src:"sounds/_5b.mp3", id:"_5b"},
		{src:"sounds/_6b.mp3", id:"_6b"},
		{src:"sounds/_7a.mp3", id:"_7a"},
		{src:"sounds/_7b.mp3", id:"_7b"},
		{src:"sounds/bgmPrep.mp3", id:"bgmPrep"},
		{src:"sounds/MenuPreposition.mp3", id:"MenuPreposition"},
		{src:"sounds/s_coolcheer.mp3", id:"s_coolcheer"},
		{src:"sounds/above.mp3", id:"above"},
		{src:"sounds/across.mp3", id:"across"},
		{src:"sounds/alongside.mp3", id:"alongside"},
		{src:"sounds/around.mp3", id:"around"},
		{src:"sounds/behind.mp3", id:"behind"},
		{src:"sounds/below.mp3", id:"below"},
		{src:"sounds/beneath.mp3", id:"beneath"},
		{src:"sounds/between.mp3", id:"between"},
		{src:"sounds/down.mp3", id:"down"},
		{src:"sounds/from.mp3", id:"from"},
		{src:"sounds/_in.mp3", id:"_in"},
		{src:"sounds/infront.mp3", id:"infront"},
		{src:"sounds/inside.mp3", id:"inside"},
		{src:"sounds/into.mp3", id:"into"},
		{src:"sounds/near.mp3", id:"near"},
		{src:"sounds/off.mp3", id:"off"},
		{src:"sounds/on.mp3", id:"on"},
		{src:"sounds/out.mp3", id:"out"},
		{src:"sounds/outof.mp3", id:"outof"},
		{src:"sounds/outside.mp3", id:"outside"},
		{src:"sounds/over.mp3", id:"over"},
		{src:"sounds/preposition.mp3", id:"preposition"},
		{src:"sounds/slurp.mp3", id:"slurp"},
		{src:"sounds/to.mp3", id:"to"},
		{src:"sounds/toward.mp3", id:"toward"},
		{src:"sounds/under.mp3", id:"under"},
		{src:"sounds/up.mp3", id:"up"},
		{src:"sounds/upon.mp3", id:"upon"}
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
an.compositions['02141BF0871DC94D86862EC0FF6B0C8C'] = {
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