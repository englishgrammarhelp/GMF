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


(lib.AriclesAre = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKALQgEgFAAgGQAAgFAEgFQAEgEAGAAQAHAAAEAEQAEAFAAAFQAAAGgEAFQgEAEgHAAQgGAAgEgEg");
	this.shape.setTransform(348.5,112);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhSBfQgDgEAAgFIABgPIABgPIAAgXIAAgXIAAgXIAAgZIgBgWIgCgYQAAgFAFgEQAEgFAHgBQAGAAAKAPQAeAuAYAdQAcAkAjAgIAAgQIgBgPQAAg1gDgfIgEgNQgCgJgBgEQABgOANAAQAVAAAABPIAAAoIgBAoIgCAUQgCAMgLAAQgGAAgKgJQgygvg/hXIAAAbIgBAbIABAeIAAAfQAAAhgNgBQgHAAgEgEg");
	this.shape_1.setTransform(335.5,103.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag1BIQgQgRgDgjQgCgPAAguIAAgbQABgLACgFQADgJAIAAQALAAAAAVIAABIQAABJAzAAQAwAAAAh8IAAgMIAAgKQAAgHADgGQADgHAHAAQAMAAAAARIAAAPIAAAPQAACMhJAAQglAAgSgWg");
	this.shape_2.setTransform(316.3,103.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag9BMQgagWABgjQAAgpAZgjQAbgmApAAQAoAAAUASQAUATAAAoQAAApgWAiQgbAngpAAQgiAAgYgUgAgqgoQgUAbABAgQAAAXARAPQAQAOAZAAQAdAAAUgeQARgaAAghQAAgdgOgMQgMgLgeAAQgdAAgUAeg");
	this.shape_3.setTransform(297.1,103.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhRBfQgEgEAAgFIABgPIABgPIAAgXIABgXIAAgXIgBgZIgBgWIgCgYQAAgFAFgEQAFgFAGgBQAGAAAKAPQAeAuAYAdQAcAkAjAgIAAgQIAAgPQgBg1gDgfIgEgNQgDgJABgEQgBgOANAAQAWAAAABPIAAAoIgBAoIgCAUQgCAMgLAAQgHAAgJgJQgxgvhAhXIgBAbIAAAbIAAAeIABAfQAAAhgNgBQgGAAgEgEg");
	this.shape_4.setTransform(277.3,103.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAnA+IgIgIIgVAJQgJADgFAAQgcAAgNgQQgNgPAAgfQAAgdAVgVQAUgVAbAAQALAAANAGQARAHAAAJQAAAEgDACIgCAPIAAAbQgBAPADAJIAHAVIADAHIABACQAAAEgEAEQgDADgEAAQgDAAgGgGgAgUgeQgNAQAAATQAAAUAHAKQAHAKAOAAQALAAAIgEIAMgKQgEgfAAgQIABgLIACgOIgIgDIgFgBQgSAAgOAPg");
	this.shape_5.setTransform(253.3,106.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgTBoQgDgDgBgFIAAgDQADgPAAgTIAAghIAAgjIgUABQgMAAAAgLQAAgMAVgBIAMAAIACgTQADgbAKgNQANgPAbAAQARAAAAALQAAAMgQAAQgeAAgDApIgBAIIAbgCQAUAAAAAMQAAAJgKACIgKABQgFgBgXACIAAAbIAAAXIAAAWQAAAYgCANQgBAJgKAAQgFAAgDgDg");
	this.shape_6.setTransform(232.9,103.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgkA0QgQgRgBgcQgBgbAPgVQARgZAdAAQAZAAAMAXQAKASAAAZQAAAagOATQgQAWgZAAQgUAAgPgPgAgVgYQgIAOAAARQAAARAKAKQAIAIAKAAQAMAAAJgJQALgKAAgSQACgugbAAQgRAAgKARg");
	this.shape_7.setTransform(219.9,106.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgqBfQgPgDAAgKQAAgLAKAAIAPACQAKADANgBQAWAAAJgXQAGgPAAgeQgGAMgJAGQgJAGgLAAQgWAAgOgPQgOgPAAgXQAAghATgUQAUgVAgAAQAMAAAHADQAIADAEAGQANAAAAAOQAAAJgDAOIgDAYIgDAnQAAAZgFAQQgFATgMAKQgPALgbAAQgQAAgLgCgAgWg9QgLAPAAAWQAAASAGAIQAHAJAOgBQALAAAMgMQAKgNACgNQACgNADgcQgFgEgFgBQgFgCgGAAQgWAAgNAPg");
	this.shape_8.setTransform(199.3,109.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAeA8IgDgbQgCgPAAgMIAAgLIABgLQgBgagJgBQgOAAgLARQgLAPgHAVIgBAMIgBAMIABALIABALQAAAFgEAEQgDAEgGAAQgFAAgDgEQgDgEgBgFIAAgLIgBgLIACgiIABgjIAAgLIAAgMQAAgFAEgEQADgDAFAAQALAAABAQIABAOQAUgbAVAAQATAAAIARQAFAMAAAWIAAAMIAAALQABAKACAQQADAQAAAKQAAAFgEAEQgDADgGAAQgKAAgBgLg");
	this.shape_9.setTransform(186.6,106.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgLBYQgEgDAAgFIAAgWIAAgWIABgdIABgbQAAgGADgDQAEgEAFAAQAEAAAEAEQADADAAAGIgBAbIgBAdIAAAWIAAAWQAAAFgDADQgDAEgFAAQgFAAgDgEgAgHhCQgEgFAAgFQAAgGAEgEQAEgFAFAAQAGAAAEAFQAEAEAAAGQAAAFgEAFQgEAEgGAAQgFAAgEgEg");
	this.shape_10.setTransform(176.5,103.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgGBIQgEgEAAgFQAAgPgDgdQgDgbAAgPQAAgNgDgHQgJAEgJAIIgOAQIgGAIIgCAVIgBAVIABAKIABAKQAAAFgDADQgEADgFAAQgOAAAAgfIABgWIACgVIgBgTIgCgUQAAgbANAAQAFAAAEAEQAEAEAAAFIgBAHIgBAIIABAMQAGgNAMgKQANgLAIAAQATAAAHATQAGgJAKgEQAJgFAMAAQAUAAAIAWQABAFAEAeQADAUAFAxQABAFgEADQgEADgFAAQgKAAgBgKQgDgOgCgYIgEglQgBgIgDgIQgEgLgFAAQgFAAgMAHQgMAHgDAFQgBALABAMIAEAfQACATAAANQAAAFgDAEQgEADgFAAQgEAAgDgDg");
	this.shape_11.setTransform(163.3,106.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgkA0QgQgRgBgcQgBgbAPgVQARgZAdAAQAZAAAMAXQAKASAAAZQAAAagOATQgQAWgZAAQgUAAgPgPgAgVgYQgIAOAAARQAAARAKAKQAIAIAKAAQAMAAAJgJQALgKAAgSQACgugbAAQgRAAgKARg");
	this.shape_12.setTransform(146.6,106.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgiA2QgSgQAAgaQAAgYARgaQASgeAWAAQAMAAAPAGQASAHAAALQAAAEgDAEQgDAEgEAAQgEAAgDgDIgFgEQgHgGgQAAQgMAAgMAXQgLAUAAAOQAAAQALAJQAKAJAPAAQAIAAAIgEIAOgHIAFgCQAFAAADADQAEAEAAAEQAAAJgTAJQgRAHgLAAQgYAAgQgPg");
	this.shape_13.setTransform(133.9,106.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgpA1QgTgQAAgbQAAgeAQgWQAQgXAcgBQAUAAANAHQAPAJAAARQAAANgOAJQgGAFgTAIIguAWQAHALAKAEQAKAFANABQAIgBAMgDQAOgEAEgGQAEgHAFAAQAEAAAEAEQADADAAAEQAAANgWAKQgTAJgRgBQgbAAgRgNgAgYggQgKALgFAXIAlgRQAVgLAKgIQgLgJgSAAQgOAAgKALg");
	this.shape_14.setTransform(113.3,106.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAiBcQgDgKgDgSQgCgSAAgLIAAgKIAAgJQAAgXgLAAQgPABgLANQgHAHgKAUQAAAvgFAIQgDAIgHAAQgFAAgEgEQgEgDAAgFIABgFQABgDAAgPIABgSIAAhZIABgUIgBgMIgBgMQAAgFADgDQAEgEAFABQAKAAACAKQACAMAAAJIgBAbQgBAOABANIAAALQAKgNALgIQALgGAMAAQAVAAAHANQAGAKAAAUIABAYIADAZQABAOACAMIABADQAAAFgEAEQgDACgGAAQgIABgCgKg");
	this.shape_15.setTransform(99.2,103);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgHBWQgEgDAAgFIABgOIAAgOIgChGIgbgCQgLgCAAgKQAAgGADgDQADgEAFAAIAaACIAAgQIgBgPQAAgGADgDQAEgDAFAAQAKAAACASIAAALIAAAHIAAAHIARgCQANAAAEABQAHADAAAJQAAAFgDAEQgDADgGAAIgGAAIgGAAIgQACIACBHIAAAFIAAAGQABAbgOAAQgDAAgEgDg");
	this.shape_16.setTransform(85.8,104.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAhBeQgHgNgNgRIgUgdIgWAQIgCAkQAAAGgDAEQgDADgGAAQgMAAAAgRIACgeIABgeIABgqIAAgqIAAgNIgBgNQAAgFADgEQAEgDAFgBQAFABAEADQADAEAAAFIAAAOIABAMIgBAoIAAAqQAQgNAPgPIAbgbQAEgEAEAAQAFAAAEADQAEAEAAAFQAAAEgEAEQgPASgWATIAbAkQATAaAAAHQAAAFgEAEQgEADgFAAQgHAAgDgGg");
	this.shape_17.setTransform(66.5,102.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AguA4IAAhVIAAgMIAAgMQAAgMALAAQAMAAAAAUQAXgWAcAAQAKAAAFAHQAEAHAAAPIAAAJQgBAPgLAAQgLAAABgMIAAgIIgBgLQgUADgKAIQgLAIgHAQIAABCQAAAMgMAAQgLAAABgMg");
	this.shape_18.setTransform(53.4,106.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAnA+IgIgIIgVAJQgJADgFAAQgcAAgNgQQgNgPAAgfQAAgdAVgVQAUgVAbAAQALAAANAGQARAHAAAJQAAAEgDACIgCAPIAAAbQgBAPADAJIAHAVIADAHIABACQAAAEgEAEQgDADgEAAQgDAAgGgGgAgUgeQgNAQAAATQAAAUAHAKQAHAKAOAAQALAAAIgEIAMgKQgEgfAAgQIABgLIACgOIgIgDIgFgBQgSAAgOAPg");
	this.shape_19.setTransform(40.6,106.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgGBIQgEgEAAgFQAAgPgDgdQgDgbAAgPQAAgNgDgHQgJAEgJAIIgOAQIgGAIIgCAVIgBAVIABAKIABAKQAAAFgDADQgEADgFAAQgOAAAAgfIABgWIACgVIgBgTIgCgUQAAgbANAAQAFAAAEAEQAEAEAAAFIgBAHIgBAIIABAMQAGgNAMgKQANgLAIAAQATAAAHATQAGgJAKgEQAJgFAMAAQAUAAAIAWQABAFAEAeQADAUAFAxQABAFgEADQgEADgFAAQgKAAgBgKQgDgOgCgYIgEglQgBgIgDgIQgEgLgFAAQgFAAgMAHQgMAHgDAFQgBALABAMIAEAfQACATAAANQAAAFgDAEQgEADgFAAQgEAAgDgDg");
	this.shape_20.setTransform(24.7,106.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AggBgQgEgEAAgFQAAgMAbg6IgshUIgFgIQgEgGAAgEQAAgFAEgEQAEgDAFAAQAFAAADAEQAVAdAXA1IASgqQAKgWAJgQQAEgHAGAAQAFAAAEAEQAEADAAAFIgCAGIgqBbQgQAhgHAWIgIAYQgDAJgIAAQgFAAgEgDg");
	this.shape_21.setTransform(0.5,109.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgpA1QgTgQAAgbQAAgeAQgWQAQgXAcgBQAUAAANAHQAPAJAAARQAAANgOAJQgGAFgTAIIguAWQAHALAKAEQAKAFANABQAIgBAMgDQAOgEAEgGQAEgHAFAAQAEAAAEAEQADADAAAEQAAANgWAKQgTAJgRgBQgbAAgRgNgAgYggQgKALgFAXIAlgRQAVgLAKgIQgLgJgSAAQgOAAgKALg");
	this.shape_22.setTransform(-12.3,106.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAiBcQgDgKgDgSQgCgSAAgLIAAgKIAAgJQAAgXgLAAQgPABgLANQgHAHgKAUQAAAvgFAIQgDAIgHAAQgFAAgEgEQgEgDAAgFIABgFQABgDAAgPIABgSIAAhZIABgUIgBgMIgBgMQAAgFADgDQAEgEAFABQAKAAACAKQACAMAAAJIgBAbQgBAOABANIAAALQAKgNALgIQALgGAMAAQAVAAAHANQAGAKAAAUIABAYIACAZQACAOACAMIABADQAAAFgEAEQgDACgGAAQgIABgCgKg");
	this.shape_23.setTransform(-26.4,103);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgHBWQgEgDAAgFIABgOIAAgOIgChGIgbgCQgLgCAAgKQAAgGADgDQADgEAFAAIAaACIAAgQIgBgPQAAgGADgDQAEgDAFAAQAKAAACASIAAALIAAAHIAAAHIARgCQANAAAEABQAHADAAAJQAAAFgDAEQgDADgGAAIgGAAIgGAAIgQACIACBHIAAAFIAAAGQABAbgOAAQgDAAgEgDg");
	this.shape_24.setTransform(-39.7,104.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgTBFQAAgIALgPQAJgRAIAAQAEAAADAEQADADABAEQAAAFgJAKQgJAKAAAFQgBAKgJAAQgLAAAAgLgAAAgxQgDgEgBgFIgBgFIAAgEQAAgFAEgEQACgDAFAAQAOAAAAAVQAAAFgDAEQgEADgFAAQgGAAgCgDg");
	this.shape_25.setTransform(393.1,69.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAPAlQgEgDAAgEIABgwQAAgJACgEQADgIAHAAQAFAAADAEQADADAAAEIAAAGIgBAFIgBAuQAAALgLAAQgEAAgDgDgAgiATIAAgXIABgYQAAgFADgDQADgDAFAAQAEAAADADQAEADAAAFIAAAXIgBAXIABAGIAAAFQAAAFgDADQgDADgFAAQgMAAAAgVg");
	this.shape_26.setTransform(384.4,60.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgwBVQgXgLAAgSQgBgGAEgCQAEgEAFAAQAGAAAEAHQAHAJAFADQAKAIAUgBQASAAAQgIQAVgLAAgSQAAgQgSgJQgPgHgUgBQgUAAgNgHQgSgKAAgTQAAgVAZgSQAYgRAYAAQAMAAAPAEQATAFAAAIQAAALgLAAIgRgCQgMgDgHAAQgSAAgNAKQgOAJAAANQAAAKASAFIAZACQAcACAQAQQAPANAAAVQAAAcgbASQgYAPgdAAQgXAAgSgIg");
	this.shape_27.setTransform(371,67);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("Ag+BcQgDgDAAgGIgBgcIgBgdIACggQADgXAAgLIgBgSIgBgTQAAgHAEgFQAEgGAIAAIAeADQAQACALAGQAxAaAAAmQAAASgQAOQgOALgUAGQAmAVASAWQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEQgpgogwgOIABAYIAAAYQAAAGgDADQgEAEgFAAQgFAAgEgEgAgmg2IAAAPIgBAYIgDAXIAGAAIAFABQAfAAAPgJQAHgCAFgHQAHgGAAgFQAAgRgTgPQgRgNgUgCIgSgCg");
	this.shape_28.setTransform(354.6,66.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("Ag0BeQgNgLAAgnIABgRIABgUIgCgGQAAgDADgEQACgjAAgRIgBgNIgBgNQAAgOAMAAQAFgBAEAEQAPgEAMgCQANgCALAAQAeAAARAHQAJAEAAAIQgBAFgCADQgEAFgFAAIgEgBQgVgGgTAAQgKAAgLACIgZAGIABAMQAAARgDAeIA1gFIAdgCQAGAAADADQAEAEAAAFQAAAKgLABIgdADIg4AFIgBAQIAAAPQAAAbAEAFQADADAQAAIAWAAIAXgBIAHgBIAHgBQANABAAANQAAAJgKADQgMACglAAQgmAAgKgKg");
	this.shape_29.setTransform(339.1,66.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("Ag6BeQgEgFAAgGIAChUIAChWQAAgFADgDQAEgEAFAAQAFAAAEAEQADADAAAFIgBAlIgCAlQARgPAUgYIAigoQAEgFAGAAQAEAAAEAEQAEADAAAGQAAAIgfAiIgsAuQAOAPAfAdIAMALQAHAFAIADQAKADAAAJQAAAEgDAEQgDAFgFAAQgTAAghghIgkglIAAACIAABAQAAAMgLAAQgHAAgEgGg");
	this.shape_30.setTransform(324.4,66.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("Ag+BcQgDgDAAgGIgBgcIgBgdIACggQADgXAAgLIgBgSIgBgTQAAgHAEgFQAEgGAIAAIAeADQAQACALAGQAxAaAAAmQAAASgQAOQgOALgUAGQAmAVASAWQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEQgpgogwgOIABAYIAAAYQAAAGgDADQgEAEgFAAQgFAAgEgEgAgmg2IAAAPIgBAYIgDAXIAGAAIAFABQAfAAAPgJQAHgCAFgHQAHgGAAgFQAAgRgTgPQgRgNgUgCIgSgCg");
	this.shape_31.setTransform(308.1,66.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAqBAIgIgnQgMABgUAFIggAHQgFAQgPAfQgEAHgHAAQgFgBgDgDQgFgEAAgFQAAgGATgnQgCgDAAgEQAAgKAMgDQANgZAWghQAcgvAHAAQAJAAAEAOIAIAoIASBVIAHASQAEALAAADQAAAFgEADQgEAEgFAAQgLAAgJgcgAgPAJQAPgEAdgFIgKgvg");
	this.shape_32.setTransform(290.6,66.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("ABLBcQgEgGgDgNIgEgVQgFgUgLhCIgZBJIgGAXQgFAOgEAJQgGAJgIAAQgGAAgFgIIgFgNIgDgNQgNgsgJgwIgFAWIgPBAQgBALgFAWQgEAKgJAAQgFAAgEgFQgDgDAAgGQAAgUAJgeIANgwIAHgmQAGgbAFgJQAGgHAHAAQAHAAAEAJQAFALAFAiQAHAoAOAuQARguANgzIADgSQADgLAEgGQAEgKAIAAQALAAAFAVQACAHADAWQAIA2AKAnIAGAVQAFARAAAEQAAAFgEADQgEAEgFAAQgHAAgEgHg");
	this.shape_33.setTransform(270.8,66.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AhSBgQgDgFAAgEIABgQIABgQIAAgWIAAgXIAAgXIAAgYIgBgYIgCgWQAAgGAFgFQAEgEAHAAQAGAAAKAOQAeAtAYAfQAcAjAjAgIAAgPIgBgQQAAg0gDggIgEgNQgCgIgBgFQABgPANAAQAVABAABPIAAAnIgBApIgCATQgCANgLAAQgGAAgKgJQgygvg/hYIAAAcIgBAbIABAeIAAAfQAAAggNABQgHAAgEgEg");
	this.shape_34.setTransform(242.4,66.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("Ag1BIQgQgRgDgjQgCgPAAguIAAgbQABgLACgFQADgJAIAAQALAAAAAVIAABIQAABJAzAAQAwAAAAh8IAAgMIAAgKQAAgHADgGQADgHAHAAQAMAAAAARIAAAPIAAAPQAACMhJAAQglAAgSgWg");
	this.shape_35.setTransform(223.2,66.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("Ag9BMQgagWABgjQAAgpAZgjQAbgmApAAQAoAAAUASQAUATAAAoQAAApgWAiQgbAngpAAQgiAAgYgUgAgqgoQgUAbABAgQAAAXARAPQAQAOAZAAQAdAAAUgeQARgaAAghQAAgdgOgMQgMgLgeAAQgdAAgUAeg");
	this.shape_36.setTransform(204,66.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AhRBgQgEgFAAgEIABgQIABgQIAAgWIABgXIAAgXIgBgYIgBgYIgCgWQAAgGAFgFQAFgEAGAAQAGAAAKAOQAeAtAYAfQAcAjAjAgIAAgPIgBgQQAAg0gDggIgEgNQgDgIABgFQgBgPANAAQAWABAABPIAAAnIgBApIgCATQgCANgLAAQgHAAgJgJQgxgvhAhYIgBAcIAAAbIAAAeIABAfQAAAggNABQgGAAgEgEg");
	this.shape_37.setTransform(184.1,66.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAOAlQgDgDABgEIABgwQgBgJACgEQADgIAHAAQAFAAADAEQADADAAAEIgBAGIAAAFIgBAuQAAALgLAAQgFAAgDgDgAgiATIABgXIAAgYQAAgFADgDQADgDAFAAQAEAAAEADQACADAAAFIAAAXIAAAXIAAAGIABAFQAAAFgDADQgDADgFAAQgMAAAAgVg");
	this.shape_38.setTransform(168.2,60.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgrBTQgRgRAAgbQAAghASgSQAQgUAbAAQAOAAAIAFIALAIQACg0ADgRQABgLAJAAQAMAAAAAMQAAAQgFA6QgBASAAARQAAApADAVIAAADQAAAEgDAEQgDADgFAAQgHAAgEgLQgJAHgJADQgJADgKAAQgZAAgRgRgAgcACQgLAMAAAYQAAAQAMALQALAMAPAAQAKAAAGgEIAOgKIADgDIAAgWIAAgOIAAgPQgEgJgIgEQgIgFgKAAQgUAAgKALg");
	this.shape_39.setTransform(148.5,66.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgpA1QgTgQAAgbQAAgfAQgVQAQgYAcABQAUgBANAIQAPAIAAARQAAAMgOALQgGAEgTAIIguAWQAHAKAKAGQAKAEANAAQAIAAAMgCQAOgFAEgGQAEgGAFAAQAEAAAEACQADADAAAFQAAAOgWAKQgTAHgRABQgbAAgRgOgAgYggQgKAMgFAVIAlgQQAVgLAKgIQgLgKgSAAQgOAAgKAMg");
	this.shape_40.setTransform(134.6,69.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgNBZIABgtIACgsIAAgrIABgsQAAgNALAAQAMAAAAANIAAAsIgBArIgCA8IgBAdQgBAMgKAAQgMAAAAgMg");
	this.shape_41.setTransform(124.1,66);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgNBZIACgtIABgsIAAgrIABgsQAAgNALAAQAMAAAAANIAAAsIgBArIgCA8IgBAdQgBAMgKAAQgMAAAAgMg");
	this.shape_42.setTransform(117.3,66);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAnA+IgIgIIgVAJQgJADgFAAQgcAAgNgQQgNgPAAgfQAAgdAVgVQAUgVAbAAQALAAANAGQARAHAAAJQAAAEgDACIgCAPIAAAbQgBAPADAJIAHAVIADAHIABACQAAAEgEAEQgDADgEAAQgDAAgGgGgAgUgeQgNAQAAATQAAAUAHAKQAHAKAOAAQALAAAIgEIAMgKQgEgfAAgQIABgLIACgOIgIgDIgFgBQgSAAgOAPg");
	this.shape_43.setTransform(107.4,69.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgiA2QgSgQAAgaQAAgYARgaQASgeAWAAQAMAAAPAGQASAHAAALQAAAEgDAEQgDAEgEAAQgEAAgDgDIgFgEQgHgGgQAAQgMAAgMAXQgLAUAAAOQAAAQALAJQAKAJAPAAQAIAAAIgEIAOgHIAFgCQAFAAADADQAEAEAAAEQAAAJgTAJQgRAHgLAAQgYAAgQgPg");
	this.shape_44.setTransform(94.7,69.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgpA1QgTgQAAgbQAAgfAQgVQAQgYAcABQAUgBANAIQAPAIAAARQAAAMgOALQgGAEgTAIIguAWQAHAKAKAGQAKAEANAAQAIAAAMgCQAOgFAEgGQAEgGAFAAQAEAAAEACQADADAAAFQAAAOgWAKQgTAHgRABQgbAAgRgOgAgYggQgKAMgFAVIAlgQQAVgLAKgIQgLgKgSAAQgOAAgKAMg");
	this.shape_45.setTransform(74.1,69.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgvA4IAAhVIABgMIAAgMQAAgMALAAQAMAAAAAUQAXgWAcAAQAKAAAEAHQAGAHAAAPIAAAJQgBAPgMAAQgLAAAAgMIAAgIIAAgLQgUADgKAIQgKAIgIAQIABBCQgBAMgMAAQgLAAAAgMg");
	this.shape_46.setTransform(61.4,69.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAnA+IgIgIIgVAJQgJADgFAAQgcAAgNgQQgNgPAAgfQAAgdAVgVQAUgVAbAAQALAAANAGQARAHAAAJQAAAEgDACIgCAPIAAAbQgBAPADAJIAHAVIADAHIABACQAAAEgEAEQgDADgEAAQgDAAgGgGgAgUgeQgNAQAAATQAAAUAHAKQAHAKAOAAQALAAAIgEIAMgKQgEgfAAgQIABgLIACgOIgIgDIgFgBQgSAAgOAPg");
	this.shape_47.setTransform(48.6,69.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgwBVQgXgLAAgSQgBgGAEgCQAEgEAFAAQAGAAAEAHQAHAJAFADQAKAIAUgBQASAAAQgIQAVgLAAgSQAAgQgSgJQgPgHgUgBQgUAAgNgHQgSgKAAgTQAAgVAZgSQAYgRAYAAQAMAAAPAEQATAFAAAIQAAALgLAAIgRgCQgMgDgHAAQgSAAgNAKQgOAJAAANQAAAKASAFIAZACQAcACAQAQQAPANAAAVQAAAcgbASQgYAPgdAAQgXAAgSgIg");
	this.shape_48.setTransform(26.2,67);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("Ag0BeQgNgLAAgnIABgRIABgUIgCgGQAAgDADgEQACgjABgRIgCgNIgBgNQAAgOAMAAQAFgBAEAEQAPgEANgCQAMgCALAAQAdAAATAHQAIAEAAAIQAAAFgDADQgEAFgFAAIgEgBQgVgGgTAAQgKAAgLACIgaAGIACAMQAAARgDAeIA1gFIAdgCQAFAAAEADQAEAEAAAFQAAAKgLABIgeADIg3AFIgBAQIAAAPQAAAbAEAFQADADAQAAIAWAAIAXgBIAHgBIAHgBQANABAAANQAAAJgKADQgMACglAAQgmAAgKgKg");
	this.shape_49.setTransform(10,66.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("Ag0BgQgHgFAAgOIACgoQADg3AAhEQAAgGAEgDQADgEAFAAQAGAAADAEQADADAAAGQAABFgDA3IgBATIgBASQAgAAAvgPIAEgBQAGAAADAEQADAEAAAFQAAAIgIADQgNAHgeAFQgaAFgRAAQgNAAgFgEg");
	this.shape_50.setTransform(-4.7,66.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgyBLQgRgTAAgZQAAgpAigsQAegjAcgBIALABIAIACQAEgGAIAAQAHgBADALQACALAAAOQAAAFgDAEQgDAFgGgBQgIABgEgKQgDgHgDgCQgDgBgKgBQgRAAgWAbQgcAlAAAgQgBAQAKALQALAMAPgBQALAAANgGQAHgEAOgKQAHgGAEAAQAFAAAEAFQAEAEAAAEQgBAFgFAFQgfAcggABQgaAAgRgUg");
	this.shape_51.setTransform(-19.1,66.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("Ag1BaQgDgEAAgFQAAgGADgDQAEgEAFABQAIAAASgDQABgKAAgNIgBgUIAAgVQAAgbADgqIgQABIgQAAQgFAAgEgEQgDgEAAgFQAAgLALgBIAlgBQAYgBAkAGQALABAAAMQAAAGgEADQgEADgEAAIgUgBIgUgDQgDAkAAAeIABAVIAAAWIAAAUIAmAAQAFAAAEAEQADADAAAFQAAAGgDADQgEAFgFAAIgUAAIgVAAIgXACQgQACgIAAQgFAAgEgDg");
	this.shape_52.setTransform(-33.8,66.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgIBaQgEgEAAgFIABgFIABgGIgBgSIgBgSQAAgRgDgfIgDgxIgLAAQgbAAgPgEQgKgCAAgKQAAgFADgEQAEgEAFAAIAUADIAUABIAWAAIAVgBIAcACIAcABQAFAAAEAEQADADAAAGQAAAFgDAEQgEADgFAAIgcgBIgcgCIgIAAIADA3QADAiAAAUIABANIAAANQAAAIgCAGQgEAIgHAAQgEAAgEgDg");
	this.shape_53.setTransform(-48.1,66.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("Ag+BcQgDgDAAgGIgBgcIgBgdIACggQADgXAAgLIgBgSIgBgTQAAgHAEgFQAEgGAIAAIAeADQAQACALAGQAxAaAAAmQAAASgQAOQgOALgUAGQAmAVASAWQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEQgpgogwgOIABAYIAAAYQAAAGgDADQgEAEgFAAQgFAAgEgEgAgmg2IAAAPIgBAYIgDAXIAGAAIAFABQAfAAAPgJQAHgCAFgHQAHgGAAgFQAAgRgTgPQgRgNgUgCIgSgCg");
	this.shape_54.setTransform(-65.2,66.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AArBAIgJgnQgMABgUAFIgfAHQgGAQgQAfQgDAHgHAAQgFgBgEgDQgDgEAAgFQAAgGASgnQgCgDAAgEQAAgKAMgDQAOgZAVghQAcgvAHAAQAKAAADAOIAIAoIASBVIAHASQADALAAADQAAAFgDADQgEAEgFAAQgLAAgIgcgAgPAJQAPgEAdgFIgKgvg");
	this.shape_55.setTransform(-82.6,66.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FF9900").s().p("AhSBfQgDgEAAgFIABgPIABgPIAAgXIAAgXIAAgXIAAgZIgBgWIgCgYQAAgFAFgEQAEgFAHgBQAGAAAKAPQAeAuAYAdQAcAkAjAgIAAgQIgBgPQAAg1gDgfIgEgNQgCgJgBgEQABgOANAAQAVAAAABPIAAAoIgBAoIgCAUQgCAMgLAAQgGAAgKgJQgygvg/hXIAAAbIgBAbIABAeIAAAfQAAAhgNgBQgHAAgEgEg");
	this.shape_56.setTransform(335.1,103.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FF9900").s().p("Ag1BIQgQgRgDgjQgCgPAAguIAAgbQABgLACgFQADgJAIAAQALAAAAAVIAABIQAABJAzAAQAwAAAAh8IAAgMIAAgKQAAgHADgGQADgHAHAAQAMAAAAARIAAAPIAAAPQAACMhJAAQglAAgSgWg");
	this.shape_57.setTransform(315.9,103.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FF9900").s().p("Ag9BMQgagWABgjQAAgpAZgjQAbgmApAAQAoAAAUASQAUATAAAoQAAApgWAiQgbAngpAAQgiAAgYgUgAgqgoQgUAbABAgQAAAXARAPQAQAOAZAAQAdAAAUgeQARgaAAghQAAgdgOgMQgMgLgeAAQgdAAgUAeg");
	this.shape_58.setTransform(296.7,103.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FF9900").s().p("AhRBfQgEgEAAgFIABgPIABgPIAAgXIABgXIAAgXIgBgZIgBgWIgCgYQAAgFAFgEQAFgFAGgBQAGAAAKAPQAeAuAYAdQAcAkAjAgIAAgQIgBgPQAAg1gDgfIgEgNQgDgJABgEQgBgOANAAQAWAAAABPIAAAoIgBAoIgCAUQgCAMgLAAQgHAAgJgJQgxgvhAhXIgBAbIAAAbIAAAeIABAfQAAAhgNgBQgGAAgEgEg");
	this.shape_59.setTransform(276.8,103.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAiBcQgDgKgDgSQgCgSAAgLIAAgKIAAgJQAAgXgLAAQgPABgLANQgHAHgKAUQAAAvgFAIQgDAIgHAAQgFAAgEgEQgEgDAAgFIACgFQAAgDAAgPIABgSIAAhZIABgUIgBgMIgBgMQAAgFADgDQAEgEAFABQAKAAACAKQACAMAAAJIgBAbQgBAOABANIAAALQAKgNALgIQALgGAMAAQAVAAAHANQAGAKAAAUIABAYIACAZQACAOACAMIABADQAAAFgEAEQgDACgGAAQgIABgCgKg");
	this.shape_60.setTransform(98.7,103);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AguA4IAAhVIAAgMIAAgMQAAgMALAAQAMAAAAAUQAXgWAcAAQAKAAAFAHQAEAHAAAPIAAAJQAAAPgMAAQgLAAABgMIAAgIIgBgLQgUADgKAIQgLAIgHAQIAABCQAAAMgMAAQgLAAABgMg");
	this.shape_61.setTransform(53,106.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgTBFQAAgIALgPQAJgRAIAAQAEAAADAEQADADABAEQAAAFgJAKQgJAKAAAFQgBAKgJAAQgLAAAAgLgAAAgxQgDgEgBgFIAAgFIgBgEQAAgFAEgEQACgDAFAAQAOAAAAAVQAAAFgEAEQgDADgGAAQgFAAgCgDg");
	this.shape_62.setTransform(388.9,69.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AAPAlQgEgDAAgEIABgwQAAgJACgEQADgIAHAAQAFAAADAEQADADAAAEIAAAGIgBAFIgBAuQAAALgLAAQgEAAgDgDgAgiATIAAgXIABgYQAAgFADgDQADgDAFAAQAEAAADADQADADABAFIAAAXIgBAXIABAGIAAAFQAAAFgDADQgDADgFAAQgMAAAAgVg");
	this.shape_63.setTransform(380.2,60.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FF9900").s().p("AgwBVQgXgLAAgSQgBgGAEgCQAEgEAFAAQAGAAAEAHQAHAJAFADQAKAIAUgBQASAAAQgIQAVgLAAgSQAAgQgSgJQgPgHgUgBQgUAAgNgHQgSgKAAgTQAAgVAZgSQAYgRAYAAQAMAAAPAEQATAFAAAIQAAALgLAAIgRgCQgMgDgHAAQgSAAgNAKQgOAJAAANQAAAKASAFIAZACQAcACAQAQQAPANAAAVQAAAcgbASQgYAPgdAAQgXAAgSgIg");
	this.shape_64.setTransform(366.8,67);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FF9900").s().p("Ag+BcQgDgDAAgGIgBgcIgBgdIACggQADgXAAgLIgBgSIgBgTQAAgHAEgFQAEgGAIAAIAeADQAQACALAGQAxAaAAAmQAAASgQAOQgOALgUAGQAmAVASAWQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEQgpgogwgOIABAYIAAAYQAAAGgDADQgEAEgFAAQgFAAgEgEgAgmg2IAAAPIgBAYIgDAXIAGAAIAFABQAfAAAPgJQAHgCAFgHQAHgGAAgFQAAgRgTgPQgRgNgUgCIgSgCg");
	this.shape_65.setTransform(350.5,66.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FF9900").s().p("Ag0BeQgNgLAAgnIABgRIABgUIgCgGQAAgDADgEQACgjABgRIgCgNIgBgNQAAgOAMAAQAFgBAEAEQAOgEANgCQANgCALAAQAdAAASAHQAJAEAAAIQAAAFgDADQgEAFgFAAIgEgBQgVgGgTAAQgKAAgLACIgaAGIACAMQAAARgDAeIA1gFIAdgCQAFAAAEADQAEAEAAAFQAAAKgLABIgeADIg3AFIgBAQIAAAPQAAAbAEAFQADADAQAAIAWAAIAXgBIAHgBIAHgBQANABAAANQAAAJgKADQgMACglAAQgmAAgKgKg");
	this.shape_66.setTransform(334.9,66.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FF9900").s().p("Ag6BeQgEgFAAgGIAChUIAChWQAAgFADgDQAEgEAFAAQAFAAAEAEQADADAAAFIgBAlIgCAlQARgPAUgYIAigoQAEgFAGAAQAEAAAEAEQAEADAAAGQAAAIgfAiIgsAuQAOAPAfAdIAMALQAHAFAIADQAKADAAAJQAAAEgDAEQgDAFgFAAQgTAAghghIgkglIAAACIAABAQAAAMgLAAQgHAAgEgGg");
	this.shape_67.setTransform(320.3,66.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FF9900").s().p("Ag+BcQgDgDAAgGIgBgcIgBgdIACggQADgXAAgLIgBgSIgBgTQAAgHAEgFQAEgGAIAAIAeADQAQACALAGQAxAaAAAmQAAASgQAOQgOALgUAGQAmAVASAWQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEQgpgogwgOIABAYIAAAYQAAAGgDADQgEAEgFAAQgFAAgEgEgAgmg2IAAAPIgBAYIgDAXIAGAAIAFABQAfAAAPgJQAHgCAFgHQAHgGAAgFQAAgRgTgPQgRgNgUgCIgSgCg");
	this.shape_68.setTransform(303.9,66.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FF9900").s().p("AAqBAIgIgnQgMABgUAFIgfAHQgHAQgOAfQgEAHgHAAQgFgBgEgDQgEgEABgFQgBgGATgnQgCgDAAgEQAAgKAMgDQAOgZAVghQAcgvAHAAQAJAAAEAOIAIAoIASBVIAHASQAEALAAADQAAAFgEADQgEAEgFAAQgLAAgJgcgAgPAJQAPgEAdgFIgKgvg");
	this.shape_69.setTransform(286.5,66.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FF9900").s().p("ABLBcQgDgGgEgNIgEgVQgFgUgLhCIgZBJIgGAXQgFAOgEAJQgGAJgIAAQgGAAgFgIIgFgNIgDgNQgMgsgKgwIgEAWIgQBAQgBALgFAWQgEAKgJAAQgFAAgEgFQgDgDAAgGQAAgUAJgeIANgwIAHgmQAGgbAFgJQAGgHAHAAQAIAAAEAJQAEALAFAiQAHAoAOAuQARguANgzIADgSQADgLAEgGQAEgKAIAAQALAAAFAVQADAHACAWQAIA2AKAnIAGAVQAFARAAAEQAAAFgEADQgEAEgFAAQgHAAgEgHg");
	this.shape_70.setTransform(266.6,66.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FF9900").s().p("AhSBgQgDgFAAgEIABgQIABgQIAAgWIABgXIAAgXIgBgYIgBgYIgCgWQAAgGAFgFQAEgEAHAAQAGAAAKAOQAeAtAYAfQAcAjAjAgIAAgPIgBgQQAAg0gDggIgEgNQgCgIgBgFQAAgPANAAQAWABAABPIAAAnIgBApIgCATQgCANgLAAQgHAAgJgJQgygvg/hYIAAAcIgBAbIABAeIAAAfQAAAggNABQgGAAgFgEg");
	this.shape_71.setTransform(238.2,66.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FF9900").s().p("Ag1BIQgQgRgDgjQgCgPAAguIAAgbQABgLACgFQADgJAIAAQALAAAAAVIAABIQAABJAzAAQAwAAAAh8IAAgMIAAgKQAAgHADgGQADgHAHAAQAMAAAAARIAAAPIAAAPQAACMhJAAQglAAgSgWg");
	this.shape_72.setTransform(219,66.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FF9900").s().p("Ag9BMQgagWABgjQAAgpAZgjQAcgmAoAAQAoAAAUASQAVATgBAoQAAApgWAiQgbAngpAAQgiAAgYgUgAgqgoQgUAbABAgQAAAXARAPQAQAOAZAAQAdAAAUgeQAQgaAAghQAAgdgNgMQgMgLgeAAQgdAAgUAeg");
	this.shape_73.setTransform(199.8,66.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FF9900").s().p("AhRBgQgEgFAAgEIABgQIABgQIAAgWIABgXIAAgXIgBgYIgCgYIgBgWQAAgGAFgFQAFgEAGAAQAGAAAKAOQAeAtAYAfQAdAjAiAgIAAgPIAAgQQAAg0gFggIgDgNQgDgIABgFQgBgPANAAQAWABAABPIAAAnIgBApIgCATQgCANgLAAQgHAAgJgJQgxgvhAhYIgBAcIAAAbIAAAeIABAfQAAAggMABQgIAAgDgEg");
	this.shape_74.setTransform(180,66.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AAPAlQgEgDABgEIABgwQAAgJABgEQADgIAHAAQAFAAADAEQADADAAAEIgBAGIAAAFIgBAuQAAALgLAAQgEAAgDgDgAgiATIAAgXIABgYQAAgFADgDQADgDAFAAQAFAAADADQADADAAAFIAAAXIgBAXIABAGIAAAFQAAAFgDADQgDADgFAAQgMAAAAgVg");
	this.shape_75.setTransform(164.1,60.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgrBTQgRgRAAgbQAAghARgSQASgUAaAAQAPAAAHAFIALAIQACg0ACgRQACgLAKAAQALAAAAAMQAAAQgFA6QgBASgBARQABApADAVIABADQAAAEgEAEQgDADgFAAQgIAAgDgLQgJAHgJADQgKADgJAAQgZAAgRgRgAgcACQgKAMAAAYQAAAQALALQALAMAPAAQAJAAAIgEIANgKIAEgDIgBgWIAAgOIABgPQgFgJgIgEQgIgFgLAAQgTAAgKALg");
	this.shape_76.setTransform(151.8,66.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgNBZIACgtIABgsIABgrIAAgsQAAgNALAAQAMAAAAANIAAAsIgBArIgCA8IgBAdQgBAMgKAAQgMAAAAgMg");
	this.shape_77.setTransform(127.4,66);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgNBZIACgtIABgsIABgrIAAgsQAAgNALAAQAMAAAAANIgBAsIAAArIgCA8IgBAdQgBAMgKAAQgMAAAAgMg");
	this.shape_78.setTransform(120.6,66);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgvA4IAAhVIABgMIAAgMQAAgMALAAQAMAAAAAUQAXgWAcAAQAKAAAEAHQAFAHABAPIAAAJQgBAPgMAAQgLAAAAgMIAAgIIAAgLQgUADgKAIQgKAIgIAQIABBCQAAAMgNAAQgLAAAAgMg");
	this.shape_79.setTransform(64.7,69.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FF9900").s().p("AgwBVQgXgLAAgSQgBgGAEgCQAEgEAFAAQAGAAAEAHQAHAJAFADQAKAIAUgBQASAAAQgIQAVgLAAgSQAAgQgSgJQgPgHgUgBQgUAAgNgHQgSgKAAgTQAAgVAZgSQAYgRAYAAQAMAAAPAEQATAFAAAIQAAALgLAAIgRgCQgMgDgHAAQgSAAgNAKQgOAJAAANQAAAKASAFIAZACQAcACAQAQQAPANAAAVQAAAcgbASQgYAPgdAAQgXAAgSgIg");
	this.shape_80.setTransform(29.5,67);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FF9900").s().p("Ag1BeQgMgLAAgnIABgRIABgUIgCgGQABgDACgEQADgjAAgRIgCgNIgBgNQAAgOAMAAQAFgBAEAEQAPgEANgCQANgCAKAAQAdAAATAHQAHAEABAIQgBAFgDADQgDAFgGAAIgDgBQgVgGgTAAQgKAAgLACIgaAGIACAMQAAARgDAeIA1gFIAdgCQAFAAAEADQAEAEAAAFQAAAKgMABIgdADIg3AFIAAAQIgBAPQAAAbAEAFQADADAQAAIAWAAIAWgBIAIgBIAHgBQANABAAANQAAAJgLADQgLACglAAQgmAAgLgKg");
	this.shape_81.setTransform(13.3,66.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FF9900").s().p("Ag0BgQgHgFAAgOIACgoQADg3AAhEQAAgGAEgDQADgEAFAAQAGAAADAEQADADAAAGQAABFgDA3IgBATIgBASQAgAAAvgPIAEgBQAGAAADAEQADAEAAAFQAAAIgIADQgNAHgeAFQgaAFgRAAQgNAAgFgEg");
	this.shape_82.setTransform(-1.4,66.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FF9900").s().p("AgyBLQgRgTAAgZQAAgpAjgsQAcgjAdgBIAKABIAJACQAEgGAIAAQAHgBADALQACALAAAOQAAAFgDAEQgDAFgGgBQgIABgEgKQgDgHgDgCQgDgBgKgBQgSAAgUAbQgdAlAAAgQAAAQAKALQAKAMAOgBQAMAAANgGQAHgEAPgKQAGgGAEAAQAGAAADAFQAEAEgBAEQAAAFgEAFQghAcggABQgYAAgSgUg");
	this.shape_83.setTransform(-15.8,66.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FF9900").s().p("Ag1BaQgDgEAAgFQAAgGADgDQAEgEAFABQAIAAASgDQABgKAAgNIgBgUIAAgVQAAgbADgqIgQABIgQAAQgFAAgEgEQgDgEAAgFQAAgLALgBIAlgBQAYgBAkAGQALABAAAMQAAAGgEADQgEADgEAAIgUgBIgUgDQgDAkAAAeIABAVIAAAWIAAAUIAmAAQAFAAAEAEQADADAAAFQAAAGgDADQgEAFgFAAIgUAAIgVAAIgXACQgQACgIAAQgFAAgEgDg");
	this.shape_84.setTransform(-30.5,66.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FF9900").s().p("AgIBaQgEgEAAgFIABgFIABgGIgBgSIgBgSQAAgRgDgfIgDgxIgLAAQgbAAgPgEQgKgCAAgKQAAgFADgEQAEgEAFAAIAUADIAUABIAWAAIAVgBIAcACIAcABQAFAAAEAEQADADAAAGQAAAFgDAEQgEADgFAAIgcgBIgcgCIgIAAIADA3QADAiAAAUIABANIAAANQAAAIgCAGQgEAIgHAAQgEAAgEgDg");
	this.shape_85.setTransform(-44.8,66.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FF9900").s().p("Ag+BcQgDgDAAgGIgBgcIgBgdIACggQADgXAAgLIgBgSIgBgTQAAgHAEgFQAEgGAIAAIAeADQAQACALAGQAxAaAAAmQAAASgQAOQgOALgUAGQAmAVASAWQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEQgpgogwgOIABAYIAAAYQAAAGgDADQgEAEgFAAQgFAAgEgEgAgmg2IAAAPIgBAYIgDAXIAGAAIAFABQAfAAAPgJQAHgCAFgHQAHgGAAgFQAAgRgTgPQgRgNgUgCIgSgCg");
	this.shape_86.setTransform(-61.9,66.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FF9900").s().p("AArBAIgIgnQgNABgUAFIggAHQgGAQgPAfQgDAHgHAAQgFgBgEgDQgDgEAAgFQAAgGASgnQgCgDAAgEQAAgKAMgDQAOgZAVghQAcgvAHAAQAJAAAEAOIAIAoIASBVIAHASQADALAAADQAAAFgDADQgEAEgFAAQgLAAgIgcgAgPAJQAPgEAdgFIgKgvg");
	this.shape_87.setTransform(-79.3,66.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47,p:{x:48.6}},{t:this.shape_46},{t:this.shape_45,p:{x:74.1}},{t:this.shape_44,p:{x:94.7}},{t:this.shape_43,p:{x:107.4}},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40,p:{x:134.6}},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24,p:{x:-39.7}},{t:this.shape_23,p:{x:-26.4}},{t:this.shape_22,p:{x:-12.3}},{t:this.shape_21,p:{x:0.5}},{t:this.shape_20,p:{x:24.7}},{t:this.shape_19,p:{x:40.6}},{t:this.shape_18},{t:this.shape_17,p:{x:66.5}},{t:this.shape_16,p:{x:85.8}},{t:this.shape_15},{t:this.shape_14,p:{x:113.3}},{t:this.shape_13,p:{x:133.9}},{t:this.shape_12,p:{x:146.6}},{t:this.shape_11,p:{x:163.3}},{t:this.shape_10,p:{x:176.5}},{t:this.shape_9,p:{x:186.6}},{t:this.shape_8,p:{x:199.3}},{t:this.shape_7,p:{x:219.9}},{t:this.shape_6,p:{x:232.9}},{t:this.shape_5,p:{x:253.3}},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{x:348.5}}]}).to({state:[{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_47,p:{x:51.9}},{t:this.shape_79},{t:this.shape_45,p:{x:77.4}},{t:this.shape_44,p:{x:98}},{t:this.shape_43,p:{x:110.7}},{t:this.shape_78},{t:this.shape_77},{t:this.shape_40,p:{x:137.9}},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_24,p:{x:-40.2}},{t:this.shape_23,p:{x:-26.8}},{t:this.shape_22,p:{x:-12.7}},{t:this.shape_21,p:{x:0.1}},{t:this.shape_20,p:{x:24.3}},{t:this.shape_19,p:{x:40.2}},{t:this.shape_61},{t:this.shape_17,p:{x:66.1}},{t:this.shape_16,p:{x:85.4}},{t:this.shape_60},{t:this.shape_14,p:{x:112.8}},{t:this.shape_13,p:{x:133.4}},{t:this.shape_12,p:{x:146.1}},{t:this.shape_11,p:{x:162.8}},{t:this.shape_10,p:{x:176.1}},{t:this.shape_9,p:{x:186.2}},{t:this.shape_8,p:{x:198.9}},{t:this.shape_7,p:{x:219.5}},{t:this.shape_6,p:{x:232.4}},{t:this.shape_5,p:{x:252.8}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape,p:{x:348}}]},4).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97,46,499.8,75.7);


(lib.AAndandTheare = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMANQgFgGAAgHQAAgGAFgGQAFgFAHAAQAHAAAGAFQAFAGAAAGQAAAHgFAGQgGAFgHAAQgHAAgFgFg");
	this.shape.setTransform(302.7,122.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag6BlQgcgMAAgWQAAgGAFgEQADgEAHAAQAHAAAGAIQAHALAGAEQAMAIAYAAQAVAAAUgJQAZgNAAgWQAAgTgVgLQgSgJgZgBQgXAAgQgJQgVgMAAgWQAAgaAegVQAcgVAdAAQAPAAASAFQAXAGAAAKQAAANgNAAQgGAAgOgDQgPgDgJAAQgVAAgQALQgRAMAAAQQABAMAVAFQAIACAWABQAiADATASQARAQAAAZQAAAjggAVQgcASgkAAQgbAAgWgLg");
	this.shape_1.setTransform(288.6,112.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhABxQgOgNABgvIAAgVIABgYQgCgDABgEQAAgEACgEQADgqAAgVIgBgPIgCgQQAAgSAPAAQAGAAAFAFQARgFAQgDQAPgCANAAQAjAAAWAJQAJAEAAAKQABAGgEAEQgFAFgFAAIgFgBQgZgHgXAAQgMAAgNADQgPACgQAEIACAPQAAAVgDAjIA/gGIAjgDQAGAAAFAEQAEAFAAAGQAAANgNABIgjADIhDAHIgBATIAAASQAAAgAFAGQADAEATAAIAbgBIAbAAIAJgBIAIgBQAQAAAAAPQAAAMgNADQgNADgtAAQguAAgNgMg");
	this.shape_2.setTransform(269.1,111.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag/BzQgIgGAAgQIACgxQAEhCAAhSQAAgGAFgEQAEgFAGAAQAGAAAEAFQAEAEAAAGQAABTgEBDIgBAWQgCAMABAKQAmAAA5gSIAFgBQAGAAAFAFQADAFAAAFQAAAKgJAEQgRAIgjAGQggAGgUAAQgPAAgHgFg");
	this.shape_3.setTransform(251.4,112);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag8BaQgVgXAAgeQABgxAqg0QAigsAiAAIANABIAKACQAFgHAIAAQALAAADANQABAMAAARQAAAGgCAFQgFAFgHAAQgJAAgFgLQgEgJgEgCQgDgCgMAAQgVAAgZAhQgjAsAAAmQAAATAMANQAMAOASAAQAPAAAOgIQAJgEARgNQAJgGAEAAQAGAAAFAFQAEAFAAAFQAAAHgFAFQgoAigmAAQgeAAgVgXg");
	this.shape_4.setTransform(234.1,111.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhABsQgEgFAAgGQAAgGAEgFQAEgEAGAAQAKAAAWgDQABgMAAgPIAAgZIgBgYQAAghAEgzIgTABIgTAAQgHAAgEgEQgEgEAAgHQAAgOAOgBQALgBAhAAQAcAAAsAGQANACAAAOQAAAHgFAEQgEADgGAAQgJAAgPgCIgXgDQgEArAAAmIABAZIABAZIgBAZIAuAAQAGAAAEAEQAEAEAAAHQAAAGgEAFQgEAEgGAAIgZAAIgZABQgIAAgTACQgUADgKAAQgGAAgEgEg");
	this.shape_5.setTransform(216.5,112);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgKBsQgEgEAAgHIAAgGIABgHIgBgVIgBgWQAAgVgDglIgEg7IgOAAQggAAgSgEQgMgEAAgLQAAgGAEgEQAEgGAHABIAYACQAOACAJAAIAbAAIAagBIAhACIAiACQAGAAAEAEQAFAEAAAHQAAAGgFAEQgEAFgGAAIgigCQgWgCgLABIgKAAIAEBBQADApAAAYIABAPIABAQQAAAKgDAHQgFAKgIAAQgFAAgFgEg");
	this.shape_6.setTransform(199.4,111.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhKBvQgEgEAAgHIgBgiIgCgjQAAgNADgaQAEgbAAgNIgCgWIgCgWQABgIAEgHQAGgHAKAAIAjADQAUADANAHQA7AfAAAuQABAWgVAQQgQAOgZAHQAuAZAXAbQADAEAAAGQABAGgFAEQgEAFgGAAQgGAAgFgFQgxgwg6gQIACAcIAAAdQAAAHgEAEQgEAEgHAAQgGAAgEgEgAguhBIABASQAAAMgCARIgDAcIAGAAIAHAAQAlAAASgJQAIgEAHgHQAIgJAAgFQAAgVgYgRQgUgQgXgDIgVgCg");
	this.shape_7.setTransform(178.8,111.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAzBMIgKguQgPACgXAFIgnAIQgHAUgRAkQgFAJgIAAQgGAAgFgFQgEgEgBgGQABgIAWguQgCgEAAgFQAAgMANgDQASgeAZgpQAig3AIgBQAMABAEAPIAJAyIAWBlIAJAXQADAMAAADQABAHgFAEQgFAEgFABQgOAAgKgjgAgSALQARgFAkgGIgMg4g");
	this.shape_8.setTransform(157.9,112.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgzBkQgVgVAAggQAAgnAVgXQAUgXAhAAQARgBAJAGIANAKQADg+ADgVQACgNALAAQANAAAAAOQAAAUgGBGQgBAUAAAWQAAAxAEAZIAAAEQABAFgFAEQgEAEgFgBQgJABgFgNQgKAHgMAEQgLAEgLAAQgfAAgTgUgAghACQgNAPAAAdQAAAUAOANQANANASAAQALABAJgFQAEgCAMgKIAEgFIAAgZIAAgRIAAgSQgFgLgKgFQgJgGgNAAQgXAAgMANg");
	this.shape_9.setTransform(129.3,111.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgyA/QgWgSAAghQAAglASgaQAVgcAhAAQAYAAAPAIQATAKAAAVQAAAPgQAMQgIAFgYAKIg2AbQAIAMAMAGQAMAGAPAAQALAAANgDQARgFAGgIQAEgIAGAAQAFAAAEAEQAEAEAAAFQAAAQgaAMQgXAKgVAAQggAAgVgRgAgdgnQgMAOgGAbIAtgUQAZgNAMgKQgNgLgWAAQgRAAgMANg");
	this.shape_10.setTransform(112.6,115.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgQBqIACg1IABg1IABg1IABg1QAAgOANAAQAPAAAAAOIgBA1IgBA1IgCBIIgBAiQgCAPgLAAQgPAAAAgPg");
	this.shape_11.setTransform(100,111.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgQBqIACg1IABg1IABg1IABg1QAAgOANAAQAPAAAAAOIgBA1IgBA1IgCBIIgBAiQgCAPgLAAQgPAAAAgPg");
	this.shape_12.setTransform(91.8,111.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAuBLQgGgGgDgFQgOAIgLAEQgLAEgGAAQgiAAgPgUQgPgSgBglQABgjAYgZQAYgZAhAAQANAAAPAGQAVAJAAALQAAAEgEADQgBAGgBANIAAAfQAAASACALIAJAaIAEAHIABADQAAAGgFAEQgEADgFAAQgDAAgIgGgAgYgkQgRATAAAXQAAAYAJAMQAIAMARAAQAOAAAJgFQAGgDAJgIQgEgmAAgTIAAgOIACgQIgJgEIgGgBQgWAAgQASg");
	this.shape_13.setTransform(80.1,115.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgpBAQgVgTAAgfQAAgdATgfQAWgjAbAAQAOAAASAGQAWAJAAAMQAAAGgDAEQgEAFgFAAQgFAAgDgDIgGgFQgIgHgUAAQgOAAgPAbQgNAYAAARQAAATANAMQAMAKATAAQAJAAAKgFIARgJQAEgCACAAQAFAAAEAEQAEAEAAAGQAAALgWAKQgUAIgNAAQgdAAgUgSg");
	this.shape_14.setTransform(64.7,115.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ag6BlQgbgMgBgWQAAgGAFgEQAEgEAGAAQAHAAAFAIQAIALAGAEQAMAIAYAAQAVAAAUgJQAZgNAAgWQAAgTgVgLQgRgJgZgBQgYAAgQgJQgVgMAAgWQAAgaAegVQAcgVAdAAQAOAAATAFQAXAGAAAKQAAANgNAAQgGAAgOgDQgQgDgIAAQgVAAgQALQgQAMAAAQQgBAMAWAFQAIACAXABQAhADATASQARAQAAAZQAAAjggAVQgcASgkAAQgbAAgWgLg");
	this.shape_15.setTransform(346.4,68.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AhABxQgOgNAAgvIABgVIABgYQgCgDAAgEQABgEADgEQACgqAAgVIgBgPIgBgQQAAgSAOAAQAGAAAFAFQARgFAPgDQAQgCANAAQAkAAAVAJQAKAEAAAKQgBAGgDAEQgEAFgHAAIgEgBQgZgHgXAAQgMAAgNADQgOACgRAEIABAPQAAAVgCAjIA/gGIAjgDQAGAAAEAEQAFAFAAAGQAAANgOABIgiADIhDAHIgBATIAAASQAAAgAEAGQAEAEAUAAIAagBIAcAAIAIgBIAJgBQAPAAAAAPQAAAMgNADQgOADgsAAQgtAAgOgMg");
	this.shape_16.setTransform(326.9,67.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgaBrQgRgsgWhTIgMgoQgIgfgBgJQABgHAFgEQAEgEAFAAQAMAAADAMIAFAZIAPAyQANA2AOAnIABgCIAmhqIANgjQAIgWAJgLQAFgGAHAAQAFAAAFAEQAFAFAAAGQAAAFgDAEQgJAOgGAOIgLAhIgoBpQgHATgJASQgDAIgJAAQgLAAgFgLg");
	this.shape_17.setTransform(308.2,68.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AhABsQgEgFAAgGQAAgGAEgFQAEgEAGAAQAKAAAWgDQABgMAAgPIAAgZIgBgYQAAghAEgzIgTABIgTAAQgHAAgEgEQgEgEAAgHQAAgOAOgBQALgBAhAAQAcAAAsAGQANACAAAOQAAAHgFAEQgEADgGAAQgJAAgPgCIgXgDQgEArAAAmIABAZIABAZIgBAZIAuAAQAGAAAEAEQAEAEAAAHQAAAGgEAFQgEAEgGAAIgZAAIgZABQgIAAgTACQgUADgKAAQgGAAgEgEg");
	this.shape_18.setTransform(289.4,68.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgKBsQgEgEAAgHIAAgGIABgHIgBgVIgBgWQAAgVgDglIgEg7IgOAAQggAAgSgEQgMgEAAgLQAAgGAEgEQAEgGAHABIAYACQAOACAJAAIAbAAIAagBIAhACIAiACQAGAAAEAEQAFAEAAAHQAAAGgFAEQgEAFgGAAIgigCQgWgCgLABIgKAAIAEBBQADApAAAYIABAPIABAQQAAAKgDAHQgFAKgIAAQgFAAgFgEg");
	this.shape_19.setTransform(272.2,67.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("Ag8BaQgUgXgBgeQAAgxAqg0QAjgsAjAAIAMABIAKACQAGgHAIAAQAKAAACANQACAMABARQgBAGgDAFQgDAFgIAAQgJAAgFgLQgEgJgDgCQgEgCgLAAQgWAAgZAhQgjAsAAAmQAAATAMANQAMAOASAAQAPAAAPgIQAIgEASgNQAIgGAEAAQAGAAAEAFQAFAFAAAFQAAAHgGAFQgnAigmAAQgeAAgVgXg");
	this.shape_20.setTransform(252,67.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("Ag/BxQgPgNAAgvIABgVIABgYQgCgDAAgEQABgEADgEQACgqAAgVIgBgPIgBgQQAAgSAOAAQAGAAAFAFQARgFAPgDQAQgCANAAQAkAAAVAJQAKAEAAAKQgBAGgDAEQgEAFgHAAIgEgBQgZgHgXAAQgMAAgNADQgPACgQAEIABAPQAAAVgCAjIA/gGIAjgDQAGAAAEAEQAFAFAAAGQAAANgOABIgiADIhDAHIgBATIAAASQAAAgAEAGQAEAEAUAAIAagBIAcAAIAIgBIAJgBQAPAAAAAPQAAAMgNADQgOADgsAAQgtAAgNgMg");
	this.shape_21.setTransform(233.7,67.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("Ag8BlQgbgUAAgbQAAgSAPAAQAOAAAAASQAAAMARAMQARAMAPAAQALAAAFhKQACgiAAg1IgBgPIgIAAIgRgBIgRAAQgHAAgEgEQgEgEgBgHQAAgPAVAAIAOAAIAPABIAbgCIAcgBQAhAAAAARQAAAGgEAFQgFAFgGAAIgJgBIgJgBIgRAAIAAARQAABsgOAyQgKAhgXAAQgaAAgZgTg");
	this.shape_22.setTransform(214.1,68.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgtB2QgRgEgIgGIgCAAQgGAAgEgFQgEgEAAgGIABguIABgvIAAgyIgBgzQAAgGAGgHQAGgGAGAAQAEAAAUAKIAaAMQApAOAdAdQAiAjAAApQAAAZgLAXQgMAXgVAOQgWAPgqAAQgLAAgNgDgAg3goIABApIgDBQIAEACQAMAJAUAAQAgAAAQgKQAOgKAIgQQAJgRAAgSQAAgogtgdQgOgKg2gYg");
	this.shape_23.setTransform(193.6,68.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAzBMIgKgvQgOACgYAGIgmAIQgIAUgRAkQgFAIgIAAQgGAAgFgEQgEgEAAgHQAAgHAWguQgDgDABgGQgBgLAOgEQASgeAZgpQAhg3AJAAQAMAAAEAPIAJAyIAWBkIAIAYQAEALABAEQAAAHgFAEQgFAEgFAAQgOAAgKgigAgSAKQARgEAkgGIgMg4g");
	this.shape_24.setTransform(171.1,68.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgoBSQgXgJAAgOQAAgGAFgFQAEgEAGAAQAFAAAHAHQAEADAMADIAQABQAMAAAJgCQAOgFAAgJQAAgUgcgHIgOgDQgUgFgIgFQgMgHAAgRQAAgfAdgNQAJgEASgFIAcgJQAGgDAHAAQAGAAAEAEQAEAEAAAHIACAMIACANQAAAGgEAEQgEAEgHAAQgIAAgDgFQgCgEgCgMIghAKQgXAKAAAOIAIACQAhAGARALQAXAOAAAdQAAAYgUAMQgRAKgaAAQgTAAgRgGg");
	this.shape_25.setTransform(143.7,70.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgmBzQgFgEAAgGQAAgPAghGIg1hkIgGgLQgEgHAAgEQAAgGAEgFQAFgEAGAAQAGAAAEAFQAZAiAbBAIAWgyQAMgaALgTQAEgJAIAAQAGAAAFAFQAEAEAAAGQAAADgCAEIgyBtQgTAogJAbIgKAcQgEALgJAAQgGAAgEgEg");
	this.shape_26.setTransform(128.6,75.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAuBLQgGgGgDgFQgOAIgLAEQgKAEgHAAQgiAAgPgUQgQgSAAglQAAgjAZgZQAYgZAhAAQANAAAQAGQATAJABALQAAAEgDADQgCAGgBANIgBAfQABASACALIAJAaIAEAHIAAADQAAAGgDAEQgFADgFAAQgDAAgIgGgAgYgkQgQATAAAXQgBAYAJAMQAJAMAQAAQAOAAAJgFQAFgDAKgIQgEgmgBgTIABgOIACgQIgJgEIgGgBQgVAAgRASg");
	this.shape_27.setTransform(113.6,71.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAJAqQgDgMgCgWIgFggIgLAbIgXA9QgCAGgDACQgFAJgKAAQgLABgKgsQgFgXgFgmIgEgWQgCgNAAgJQAAgGAEgEQAFgEAGAAQALAAACAMIAEAVIACAWIAJBBQAQgtARg6QAFgRALAAQALAAAFATIAJA0QAGAkAEAVIALgoIAUhPQACgJAKAAQAGAAAEAEQAFAFAAAFIgCAHQgKAwgTA7QgFANgJAOQgFAIgJAAQgPAAgKgog");
	this.shape_28.setTransform(95.7,71.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgQBqIACg2IABg0IABg1IABg0QAAgPANAAQAPAAAAAPIgBA0IgBA1IgCBIIgBAiQgCAPgLAAQgPAAAAgPg");
	this.shape_29.setTransform(81.3,67.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAvBLQgHgGgDgFQgOAIgLAEQgLAEgGAAQgiAAgPgUQgQgSABglQgBgjAZgZQAYgZAhAAQANAAAPAGQAVAJgBALQAAAEgDADQgBAGAAANIgBAfQgBASADALIAJAaIADAHIACADQgBAGgEAEQgEADgFAAQgDAAgHgGgAgYgkQgRATAAAXQAAAYAJAMQAIAMASAAQAMAAAKgFQAFgDAKgIQgFgmABgTIAAgOIACgQIgJgEIgGgBQgVAAgRASg");
	this.shape_30.setTransform(69.5,71.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgyA/QgWgSAAghQAAglATgaQAUgcAhAAQAYAAAPAIQATAKAAAVQAAAPgRAMQgHAFgYAKIg2AbQAHAMANAGQAMAGAPAAQAKAAAOgDQASgFAEgIQAFgIAGAAQAFAAAEAEQAEAEAAAFQAAAQgaAMQgWAKgWAAQggAAgVgRgAgegnQgLAOgGAbIAtgUQAagNALgKQgNgLgWAAQgSAAgMANg");
	this.shape_31.setTransform(44.9,71.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("Ag4BDIAAhmIABgOIAAgPQAAgOAMAAQAPAAAAAYQAcgbAiAAQAMAAAFAJQAGAJAAASIAAAKQgBASgOAAQgNAAAAgOIAAgKIgBgNQgXADgNAKQgMAKgJATIABBPQAAAPgPAAQgNAAAAgPg");
	this.shape_32.setTransform(29.7,71.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAuBLQgGgGgDgFQgOAIgLAEQgLAEgGAAQgiAAgPgUQgPgSgBglQABgjAYgZQAYgZAhAAQANAAAPAGQAVAJAAALQAAAEgEADQgBAGgBANIgBAfQABASACALIAJAaIAEAHIABADQAAAGgFAEQgEADgFAAQgDAAgIgGgAgYgkQgRATAAAXQAAAYAJAMQAIAMARAAQAOAAAJgFQAGgDAJgIQgEgmAAgTIAAgOIACgQIgJgEIgGgBQgWAAgQASg");
	this.shape_33.setTransform(14.4,71.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AhABxQgNgNAAgvIAAgVIABgYQgBgDAAgEQAAgEADgEQACgqAAgVIgBgPIgBgQQAAgSAOAAQAGAAAFAFQARgFAPgDQARgCAMAAQAkAAAVAJQAKAEAAAKQgBAGgDAEQgEAFgHAAIgEgBQgZgHgXAAQgMAAgNADQgPACgQAEIABAPQAAAVgCAjIA/gGIAjgDQAGAAAEAEQAFAFAAAGQAAANgOABIgiADIhDAHIgBATIAAASQAAAgAEAGQAEAEAUAAIAagBIAcAAIAIgBIAJgBQAPAAAAAPQAAAMgNADQgOADgsAAQgtAAgOgMg");
	this.shape_34.setTransform(283.8,24);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AhbB0QgEgEAAgGQAAgQACgfQADgfAAgPIAAgXIgBgZIABgjIACgjQAAgGAEgEQADgEAGAAQAHAAAEAEQAEAEAAAGIgBAkIgCAjIABAkIA+gLQAlgHAaAAQABgVABgrQAAgLADgLQAFgQAJAAQAFAAAEAEQAFAEAAAGIgBAGQgCAHgBALIABANIAAANQAAAPgCAdQgDAcAAAPIACAhIABAiQAAAGgDAEQgFAEgGAAQgGAAgEgEQgEgEAAgGIgBgiIgCghIABgWQgaABgjAHIg+AMQAAANgCAYQgDAYAAAOQAAAGgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_35.setTransform(262.7,24.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgKBsQgEgEAAgHIAAgGIABgHIgBgVIgBgWQAAgVgDglIgEg7IgOAAQggAAgSgEQgMgEAAgLQAAgGAEgEQAEgGAHABIAYACQAOACAJAAIAbAAIAagBIAhACIAiACQAGAAAEAEQAFAEAAAHQAAAGgFAEQgEAFgGAAIgigCQgWgCgLABIgKAAIAEBBQADApAAAYIABAPIABAQQAAAKgDAHQgFAKgIAAQgFAAgFgEg");
	this.shape_36.setTransform(242,24);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("Ag0BkQgUgUAAghQAAgnAVgXQAVgYAfAAQASAAAJAGIAOAKQABg+ADgVQADgNALAAQANAAAAAOQAAAUgFBGQgCAVAAAVQgBAxAFAZIAAADQAAAGgEAEQgEADgFABQgKgBgEgNQgKAIgLAFQgMADgLAAQgfAAgUgUgAgiACQgMAPAAAeQAAASAOAOQANANASAAQALAAAIgEQAGgDALgJIAEgEIAAgaIAAgRIAAgSQgFgLgKgFQgJgGgNAAQgYAAgMANg");
	this.shape_37.setTransform(212.7,23.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAkBHIgEggQgCgRAAgPIAAgNIABgOQAAgfgMAAQgQAAgOATQgOASgIAaIgBAOIgBAPIABANIABANQAAAHgEAEQgEAEgGAAQgHAAgEgEQgEgEAAgHIgBgNIgBgNQAAgPADgaIACgqIgBgOIAAgOQAAgGAEgEQAEgEAGAAQAOAAABATIAAARQAZghAZAAQAXAAAKAVQAGAOAAAbIAAAOIAAANQAAAMAEATQADAUAAAMQAAAGgEAEQgFAEgGAAQgNAAgBgOg");
	this.shape_38.setTransform(196.4,27.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAuBLQgGgGgDgFQgOAIgLAEQgKAEgHAAQgiAAgPgUQgQgSAAglQAAgjAZgZQAYgZAhAAQANAAAQAGQATAJABALQAAAEgDADQgCAGgBANIgBAfQABASACALIAJAaIAEAHIAAADQAAAGgDAEQgFADgFAAQgDAAgIgGgAgYgkQgQATAAAXQgBAYAJAMQAJAMAQAAQAOAAAJgFQAFgDAKgIQgEgmgBgTIABgOIACgQIgJgEIgGgBQgVAAgRASg");
	this.shape_39.setTransform(180.6,27.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgRAgQgEgEAAgFQAAgFAJgUIAMgaQADgHAHAAQAEAAAFAFQADAEAAAFQAAADgUAuQgDAIgIAAQgFAAgDgEg");
	this.shape_40.setTransform(160.7,36.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AhiByQgEgEAAgHIABgSIABgTIABgbIAAgbIAAgcIgBgeIgBgbIgCgcQAAgGAGgGQAFgFAIAAQAHAAAMARQAkA2AdAkQAiAqAqAnIAAgSIgBgTQAAg/gFgmIgEgPQgDgKAAgGQAAgRAQAAQAZAAAABfIAAAwIgBAwIgCAYQgCAOgOAAQgIAAgLgKQg7g4hNhqIAAAhIgBAhIABAkIAAAlQAAAngPAAQgIAAgFgFg");
	this.shape_41.setTransform(143.9,24.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAzBMIgJgvQgQADgYAFIglAIQgIATgSAlQgEAJgIgBQgGABgEgFQgGgEAAgGQAAgHAXgvQgCgEgBgEQABgMAOgEQAQgfAagoQAig4AIABQALgBAFARIAJAxIAWBkIAIAYQAFALAAAFQgBAGgEAEQgEAFgHgBQgNABgKgjgAgSAKQASgEAjgGIgMg4g");
	this.shape_42.setTransform(120.6,24.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgRAgQgEgEAAgFQAAgFAJgUIAMgaQADgHAGAAQAGAAADAFQAEAEAAAFQAAADgUAuQgDAIgIAAQgFAAgDgEg");
	this.shape_43.setTransform(97.6,36.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAzBMIgJgvQgQADgXAFIgnAIQgHATgRAlQgFAJgIgBQgGABgEgFQgFgEgBgGQABgHAWgvQgCgEAAgEQAAgMANgEQASgfAZgoQAig4AIABQAMgBAEARIAJAxIAWBkIAJAYQADALAAAFQABAGgFAEQgFAFgFgBQgOABgKgjgAgSAKQARgEAkgGIgMg4g");
	this.shape_44.setTransform(81.4,24.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FF9900").s().p("Ag6BlQgcgMAAgWQAAgGAFgEQADgEAHAAQAHAAAGAIQAHALAGAEQAMAIAYAAQAVAAAUgJQAZgNAAgWQAAgTgVgLQgSgJgZgBQgXAAgQgJQgVgMAAgWQAAgaAegVQAcgVAdAAQAPAAASAFQAXAGAAAKQAAANgNAAQgGAAgOgDQgPgDgJAAQgVAAgQALQgRAMAAAQQABAMAVAFQAIACAWABQAiADATASQARAQAAAZQAAAjggAVQgcASgkAAQgbAAgWgLg");
	this.shape_45.setTransform(288.6,112.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FF9900").s().p("AhABxQgOgNABgvIAAgVIABgYQgCgDABgEQAAgEACgEQADgqAAgVIgBgPIgCgQQAAgSAPAAQAGAAAFAFQARgFAQgDQAPgCANAAQAjAAAWAJQAJAEAAAKQABAGgEAEQgFAFgFAAIgFgBQgZgHgXAAQgMAAgNADQgPACgQAEIACAPQAAAVgDAjIA/gGIAjgDQAGAAAFAEQAEAFAAAGQAAANgNABIgjADIhDAHIgBATIAAASQAAAgAFAGQADAEATAAIAbgBIAbAAIAJgBIAIgBQAQAAAAAPQAAAMgNADQgNADgtAAQguAAgNgMg");
	this.shape_46.setTransform(269.1,111.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FF9900").s().p("Ag/BzQgIgGAAgQIACgxQAEhCAAhSQAAgGAFgEQAEgFAGAAQAGAAAEAFQAEAEAAAGQAABTgEBDIgBAWQgCAMABAKQAmAAA5gSIAFgBQAGAAAFAFQADAFAAAFQAAAKgJAEQgRAIgjAGQggAGgUAAQgPAAgHgFg");
	this.shape_47.setTransform(251.4,112);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FF9900").s().p("Ag8BaQgVgXAAgeQABgxAqg0QAigsAiAAIANABIAKACQAFgHAIAAQALAAADANQABAMAAARQAAAGgCAFQgFAFgHAAQgJAAgFgLQgEgJgEgCQgDgCgMAAQgVAAgZAhQgjAsAAAmQAAATAMANQAMAOASAAQAPAAAOgIQAJgEARgNQAJgGAEAAQAGAAAFAFQAEAFAAAFQAAAHgFAFQgoAigmAAQgeAAgVgXg");
	this.shape_48.setTransform(234.1,111.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FF9900").s().p("AhABsQgEgFAAgGQAAgGAEgFQAEgEAGAAQAKAAAWgDQABgMAAgPIAAgZIgBgYQAAghAEgzIgTABIgTAAQgHAAgEgEQgEgEAAgHQAAgOAOgBQALgBAhAAQAcAAAsAGQANACAAAOQAAAHgFAEQgEADgGAAQgJAAgPgCIgXgDQgEArAAAmIABAZIABAZIgBAZIAuAAQAGAAAEAEQAEAEAAAHQAAAGgEAFQgEAEgGAAIgZAAIgZABQgIAAgTACQgUADgKAAQgGAAgEgEg");
	this.shape_49.setTransform(216.5,112);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FF9900").s().p("AgKBsQgEgEAAgHIAAgGIABgHIgBgVIgBgWQAAgVgDglIgEg7IgOAAQggAAgSgEQgMgEAAgLQAAgGAEgEQAEgGAHABIAYACQAOACAJAAIAbAAIAagBIAhACIAiACQAGAAAEAEQAFAEAAAHQAAAGgFAEQgEAFgGAAIgigCQgWgCgLABIgKAAIAEBBQADApAAAYIABAPIABAQQAAAKgDAHQgFAKgIAAQgFAAgFgEg");
	this.shape_50.setTransform(199.4,111.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FF9900").s().p("AhKBvQgEgEAAgHIgBgiIgCgjQAAgNADgaQAEgbAAgNIgCgWIgCgWQABgIAEgHQAGgHAKAAIAjADQAUADANAHQA7AfAAAuQABAWgVAQQgQAOgZAHQAuAZAXAbQADAEAAAGQABAGgFAEQgEAFgGAAQgGAAgFgFQgxgwg6gQIACAcIAAAdQAAAHgEAEQgEAEgHAAQgGAAgEgEgAguhBIABASQAAAMgCARIgDAcIAGAAIAHAAQAlAAASgJQAIgEAHgHQAIgJAAgFQAAgVgYgRQgUgQgXgDIgVgCg");
	this.shape_51.setTransform(178.8,111.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FF9900").s().p("AAzBMIgKguQgPACgXAFIgnAIQgHAUgRAkQgFAJgIAAQgGAAgFgFQgEgEgBgGQABgIAWguQgCgEAAgFQAAgMANgDQASgeAZgpQAig3AIgBQAMABAEAPIAJAyIAWBlIAJAXQADAMAAADQABAHgFAEQgFAEgFABQgOAAgKgjgAgSALQARgFAkgGIgMg4g");
	this.shape_52.setTransform(157.9,112.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#990066").s().p("Ag6BlQgbgMgBgWQAAgGAFgEQAEgEAGAAQAHAAAFAIQAIALAGAEQAMAIAYAAQAVAAAUgJQAZgNAAgWQAAgTgVgLQgRgJgZgBQgYAAgQgJQgVgMAAgWQAAgaAegVQAcgVAdAAQAOAAATAFQAXAGAAAKQAAANgNAAQgGAAgOgDQgQgDgIAAQgVAAgQALQgQAMAAAQQgBAMAWAFQAIACAXABQAhADATASQARAQAAAZQAAAjggAVQgcASgkAAQgbAAgWgLg");
	this.shape_53.setTransform(346.4,68.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#990066").s().p("AhABxQgOgNAAgvIABgVIABgYQgCgDAAgEQABgEADgEQACgqAAgVIgBgPIgBgQQAAgSAOAAQAGAAAFAFQARgFAPgDQAQgCANAAQAkAAAVAJQAKAEAAAKQgBAGgDAEQgEAFgHAAIgEgBQgZgHgXAAQgMAAgNADQgOACgRAEIABAPQAAAVgCAjIA/gGIAjgDQAGAAAEAEQAFAFAAAGQAAANgOABIgiADIhDAHIgBATIAAASQAAAgAEAGQAEAEAUAAIAagBIAcAAIAIgBIAJgBQAPAAAAAPQAAAMgNADQgOADgsAAQgtAAgOgMg");
	this.shape_54.setTransform(326.9,67.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#990066").s().p("AgaBrQgRgsgWhTIgMgoQgIgfgBgJQABgHAFgEQAEgEAFAAQAMAAADAMIAFAZIAPAyQANA2AOAnIABgCIAmhqIANgjQAIgWAJgLQAFgGAHAAQAFAAAFAEQAFAFAAAGQAAAFgDAEQgJAOgGAOIgLAhIgoBpQgHATgJASQgDAIgJAAQgLAAgFgLg");
	this.shape_55.setTransform(308.2,68.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#990066").s().p("AhABsQgEgFAAgGQAAgGAEgFQAEgEAGAAQAKAAAWgDQABgMAAgPIAAgZIgBgYQAAghAEgzIgTABIgTAAQgHAAgEgEQgEgEAAgHQAAgOAOgBQALgBAhAAQAcAAAsAGQANACAAAOQAAAHgFAEQgEADgGAAQgJAAgPgCIgXgDQgEArAAAmIABAZIABAZIgBAZIAuAAQAGAAAEAEQAEAEAAAHQAAAGgEAFQgEAEgGAAIgZAAIgZABQgIAAgTACQgUADgKAAQgGAAgEgEg");
	this.shape_56.setTransform(289.4,68.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#990066").s().p("AgKBsQgEgEAAgHIAAgGIABgHIgBgVIgBgWQAAgVgDglIgEg7IgOAAQggAAgSgEQgMgEAAgLQAAgGAEgEQAEgGAHABIAYACQAOACAJAAIAbAAIAagBIAhACIAiACQAGAAAEAEQAFAEAAAHQAAAGgFAEQgEAFgGAAIgigCQgWgCgLABIgKAAIAEBBQADApAAAYIABAPIABAQQAAAKgDAHQgFAKgIAAQgFAAgFgEg");
	this.shape_57.setTransform(272.2,67.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#990066").s().p("Ag8BaQgUgXgBgeQAAgxAqg0QAjgsAjAAIAMABIAKACQAGgHAIAAQAKAAACANQACAMABARQgBAGgDAFQgDAFgIAAQgJAAgFgLQgEgJgDgCQgEgCgLAAQgWAAgZAhQgjAsAAAmQAAATAMANQAMAOASAAQAPAAAPgIQAIgEASgNQAIgGAEAAQAGAAAEAFQAFAFAAAFQAAAHgGAFQgnAigmAAQgeAAgVgXg");
	this.shape_58.setTransform(252,67.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#990066").s().p("Ag/BxQgPgNAAgvIABgVIABgYQgCgDAAgEQABgEADgEQACgqAAgVIgBgPIgBgQQAAgSAOAAQAGAAAFAFQARgFAPgDQAQgCANAAQAkAAAVAJQAKAEAAAKQgBAGgDAEQgEAFgHAAIgEgBQgZgHgXAAQgMAAgNADQgPACgQAEIABAPQAAAVgCAjIA/gGIAjgDQAGAAAEAEQAFAFAAAGQAAANgOABIgiADIhDAHIgBATIAAASQAAAgAEAGQAEAEAUAAIAagBIAcAAIAIgBIAJgBQAPAAAAAPQAAAMgNADQgOADgsAAQgtAAgNgMg");
	this.shape_59.setTransform(233.7,67.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#990066").s().p("Ag8BlQgbgUAAgbQAAgSAPAAQAOAAAAASQAAAMARAMQARAMAPAAQALAAAFhKQACgiAAg1IgBgPIgIAAIgRgBIgRAAQgHAAgEgEQgEgEgBgHQAAgPAVAAIAOAAIAPABIAbgCIAcgBQAhAAAAARQAAAGgEAFQgFAFgGAAIgJgBIgJgBIgRAAIAAARQAABsgOAyQgKAhgXAAQgaAAgZgTg");
	this.shape_60.setTransform(214.1,68.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#990066").s().p("AgtB2QgRgEgIgGIgCAAQgGAAgEgFQgEgEAAgGIABguIABgvIAAgyIgBgzQAAgGAGgHQAGgGAGAAQAEAAAUAKIAaAMQApAOAdAdQAiAjAAApQAAAZgLAXQgMAXgVAOQgWAPgqAAQgLAAgNgDgAg3goIABApIgDBQIAEACQAMAJAUAAQAgAAAQgKQAOgKAIgQQAJgRAAgSQAAgogtgdQgOgKg2gYg");
	this.shape_61.setTransform(193.6,68.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#990066").s().p("AAzBMIgKgvQgOACgYAGIgmAIQgIAUgRAkQgFAIgIAAQgGAAgFgEQgEgEAAgHQAAgHAWguQgDgDABgGQgBgLAOgEQASgeAZgpQAhg3AJAAQAMAAAEAPIAJAyIAWBkIAIAYQAEALABAEQAAAHgFAEQgFAEgFAAQgOAAgKgigAgSAKQARgEAkgGIgMg4g");
	this.shape_62.setTransform(171.1,68.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FF9900").s().p("AhABxQgNgNAAgvIAAgVIABgYQgBgDAAgEQAAgEADgEQACgqAAgVIgBgPIgBgQQAAgSAOAAQAGAAAFAFQARgFAPgDQARgCAMAAQAkAAAVAJQAKAEAAAKQgBAGgDAEQgEAFgHAAIgEgBQgZgHgXAAQgMAAgNADQgPACgQAEIABAPQAAAVgCAjIA/gGIAjgDQAGAAAEAEQAFAFAAAGQAAANgOABIgiADIhDAHIgBATIAAASQAAAgAEAGQAEAEAUAAIAagBIAcAAIAIgBIAJgBQAPAAAAAPQAAAMgNADQgOADgsAAQgtAAgOgMg");
	this.shape_63.setTransform(283.8,24);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FF9900").s().p("AhbB0QgEgEAAgGQAAgQACgfQADgfAAgPIAAgXIgBgZIABgjIACgjQAAgGAEgEQADgEAGAAQAHAAAEAEQAEAEAAAGIgBAkIgCAjIABAkIA+gLQAlgHAaAAQABgVABgrQAAgLADgLQAFgQAJAAQAFAAAEAEQAFAEAAAGIgBAGQgCAHgBALIABANIAAANQAAAPgCAdQgDAcAAAPIACAhIABAiQAAAGgDAEQgFAEgGAAQgGAAgEgEQgEgEAAgGIgBgiIgCghIABgWQgaABgjAHIg+AMQAAANgCAYQgDAYAAAOQAAAGgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_64.setTransform(262.7,24.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FF9900").s().p("AgKBsQgEgEAAgHIAAgGIABgHIgBgVIgBgWQAAgVgDglIgEg7IgOAAQggAAgSgEQgMgEAAgLQAAgGAEgEQAEgGAHABIAYACQAOACAJAAIAbAAIAagBIAhACIAiACQAGAAAEAEQAFAEAAAHQAAAGgFAEQgEAFgGAAIgigCQgWgCgLABIgKAAIAEBBQADApAAAYIABAPIABAQQAAAKgDAHQgFAKgIAAQgFAAgFgEg");
	this.shape_65.setTransform(242,24);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FF9900").s().p("AhiByQgEgEAAgHIABgSIABgTIABgbIAAgbIAAgcIgBgeIgBgbIgCgcQAAgGAGgGQAFgFAIAAQAHAAAMARQAkA2AdAkQAiAqAqAnIAAgSIgBgTQAAg/gFgmIgEgPQgDgKAAgGQAAgRAQAAQAZAAAABfIAAAwIgBAwIgCAYQgCAOgOAAQgIAAgLgKQg7g4hNhqIAAAhIgBAhIABAkIAAAlQAAAngPAAQgIAAgFgFg");
	this.shape_66.setTransform(143.9,24.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FF9900").s().p("AAzBMIgJgvQgQADgYAFIglAIQgIATgSAlQgEAJgIgBQgGABgEgFQgGgEAAgGQAAgHAXgvQgCgEgBgEQABgMAOgEQAQgfAagoQAig4AIABQALgBAFARIAJAxIAWBkIAIAYQAFALAAAFQgBAGgEAEQgEAFgHgBQgNABgKgjgAgSAKQASgEAjgGIgMg4g");
	this.shape_67.setTransform(120.6,24.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FF9900").s().p("AAzBMIgJgvQgQADgXAFIgnAIQgHATgRAlQgFAJgIgBQgGABgEgFQgFgEgBgGQABgHAWgvQgCgEAAgEQAAgMANgEQASgfAZgoQAig4AIABQAMgBAEARIAJAxIAWBkIAJAYQADALAAAFQABAGgFAEQgFAFgFgBQgOABgKgjgAgSAKQARgEAkgGIgMg4g");
	this.shape_68.setTransform(81.4,24.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_68},{t:this.shape_43},{t:this.shape_67},{t:this.shape_66},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape}]},4).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,363.1,133.4);


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


(lib.Lesson8ArticlesIntro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		playSound("AANDandTHEarealwaysadjart");
	}
	this.frame_125 = function() {
		playSound("articlesarecallednounmarkers");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(101).call(this.frame_125).wait(115));

	// Layer 2
	this.instance = new lib.AAndandTheare("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(241.7,143.7,0.79,0.79,0,0,0,181.6,66.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.31,scaleY:1.31,x:250.7,y:141.7,startPosition:9},9).wait(101).to({startPosition:2},0).to({scaleX:0.97,scaleY:0.97,x:244.7,y:84.7,startPosition:3},11).wait(119));

	// Layer 1
	this.instance_1 = new lib.AriclesAre("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(244.6,242.1,0.765,0.765,0,0,0,150.6,88.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(115).to({_off:false},0).to({scaleX:1.02,scaleY:1.02,x:242.6,y:237.1,startPosition:1},10).wait(115));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(98.2,91,286.9,105.4);


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
		var bgm = createjs.Sound.play('bgmAdj',{loop:-1});
		
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
		
		 window.open ("adjective_Scene11b.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("adjective_test1.html","_self");
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
(lib.adjective_Scene11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene14:0,scene14_repeat:517});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_528 = function() {
		this.gotoAndPlay("scene14_repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(528).call(this.frame_528).wait(1));

	// Main
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgJAJQgDgDAAgGQAAgFADgDQAEgEAFAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFAAQgFAAgEgEg");
	this.shape.setTransform(345.6,28);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAaA1IgDgYIgBgYIAAgJIAAgKQAAgXgIAAQgMAAgKAOQgKANgGATIgBAKIAAALIAAAJIABAKQAAAFgDADQgDADgFAAQgEAAgDgDQgDgDAAgFIgBgKIAAgJIABgeIACgfIgBgKIAAgKQAAgFADgDQADgCAFAAQAJgBABAOIABANQASgYASAAQARAAAHAQQAEAKABATIAAALIAAAJQAAAJACAOQACAOAAAJQAAAEgDADQgDAEgEAAQgKgBgBgJg");
	this.shape_1.setTransform(337.4,22.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAYA0QgNAGgQABQgPAAgJgHQgKgGgCgOQgEgcgBgWQABgPADgSQACgKAIAAQAFAAADAEQADADAAAEIgBAQIgCAQIABAeQABANACAIIAIACIAHABQANAAAPgEIAAgWIAAgTQABgYABgRQABgKAKAAQAEAAADADQADADABAEIgDApIAAAXIABAWIAAAIIAAAHQAAAFgDADQgDADgEAAQgJAAgCgKg");
	this.shape_2.setTransform(325.7,23);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AggAuQgOgPgBgaQAAgXAMgSQAPgWAaAAQAWAAALAUQAJAPgBAXQAAAXgMARQgOATgWAAQgSAAgNgNgAgTgVQgHAMAAAOQAAAQAJAJQAHAHAJAAQALAAAIgIQAJgJAAgQQACgogYAAQgPAAgJAPg");
	this.shape_3.setTransform(314.1,23.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAaA1IgDgYIgBgYIAAgJIAAgKQAAgXgIAAQgMAAgKAOQgKANgGATIgBAKIAAALIAAAJIABAKQAAAFgDADQgDADgFAAQgEAAgDgDQgDgDAAgFIgBgKIAAgJIABgeIACgfIgBgKIAAgKQAAgFADgDQADgCAFAAQAJgBABAOIABANQASgYASAAQARAAAHAQQAEAKABATIAAALIAAAJQAAAJACAOQACAOAAAJQAAAEgDADQgDAEgEAAQgKgBgBgJg");
	this.shape_4.setTransform(303,22.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAiA3IgHgIIgSAJQgIACgEAAQgZAAgMgOQgLgNAAgcQAAgZASgSQASgTAYABQAJAAAMAEQAOAGAAAIQAAADgCADIgBANIgBAXQAAAOACAHIAGATIADAGIABABQAAAFgDADQgDADgEgBQgCABgGgFgAgRgaQgNAOAAAQQAAASAHAJQAGAJAMgBQAKABAHgEIALgIQgEgcAAgOIABgKIACgLIgHgEIgFgBQgPAAgMAOg");
	this.shape_5.setTransform(284.9,23.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgdA7QgRgFAAgLQAAgFAEgDQADgDAEAAQAEAAAFAGQACACAJABIANABQAIAAAGgCQAKgDAAgGQAAgPgUgFIgKgDQgOgDgGgEQgJgFAAgMQAAgXAVgJQAGgDAOgEIAUgGQAEgDAGAAQAEAAADAEQADADAAAEIABAKIACAJQAAAEgDADQgDAEgFAAQgGAAgCgFQgCgCgBgKIgZAIQgQAHAAAKIAGACQAYAFAMAHQARAKAAAWQAAARgPAJQgMAIgSAAQgPgBgMgFg");
	this.shape_6.setTransform(267,22.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgkAvQgQgOAAgYQAAgbANgTQAOgVAZAAQARAAAMAHQANAHAAAPQAAALgMAJQgFAEgSAHIgoATQAGAJAKAFQAIAEALAAQAIAAAKgDQAMgDAEgGQADgGAEAAQAFAAACADQADADABAEQgBAMgTAIQgRAIgPAAQgXAAgPgMgAgWgcQgJAKgDAUIAggPQATgKAIgHQgJgIgQAAQgNAAgJAKg");
	this.shape_7.setTransform(256.2,22.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgKBOQgDgDAAgFIAAgTIAAgUIABgZIABgYQAAgFADgDQADgDAEAAQAEAAADADQADADAAAFIgBAYIgBAZIAAAUIAAATQAAAFgDADQgCADgEAAQgEAAgEgDgAgGg6QgEgEAAgFQAAgFAEgEQAEgEAEAAQAFAAAEAEQADAEAAAFQAAAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_8.setTransform(247.1,20.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgRBcQgDgDAAgFIAAgCQACgOAAgQIAAgdIAAgeIgRAAQgKABgBgKQABgMASAAIAKAAIADgQQACgYAJgLQALgPAXAAQAPAAABALQAAALgPAAQgaAAgCAkIgBAGIAYgBQARAAAAAKQAAAJgJABIgIABIgZABIAAAXIAAAVIAAAUQAAATgCAMQgBAJgIgBQgFAAgDgCg");
	this.shape_9.setTransform(238,20.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgJBOQgEgDAAgFIAAgTIgBgUIACgZIABgYQAAgFADgDQADgDAFAAQADAAADADQADADAAAFIgBAYIgBAZIAAAUIABATQgBAFgDADQgDADgDAAQgEAAgDgDgAgGg6QgDgEAAgFQAAgFADgEQAEgEAEAAQAFAAAEAEQAEAEgBAFQABAFgEAEQgEADgFAAQgEAAgEgDg");
	this.shape_10.setTransform(229.7,20.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AglBJQgQgPABgYQAAgcAPgRQAPgRAXAAQANAAAGAEIAKAHQACgtACgQQACgJAIAAQAKAAAAAKQAAAPgFAzIgBAfQAAAkAEASIAAACQgBAFgDADQgCACgFAAQgGAAgDgKQgIAGgIADQgJADgHAAQgXAAgOgPgAgZACQgJAKAAAWQAAANAKAKQAKALAOgBQAHAAAGgCQAFgDAIgGIACgEIAAgTIAAgMIAAgMQgDgJgHgEQgHgEgJAAQgRAAgKAKg");
	this.shape_11.setTransform(219.9,20);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgfAuQgPgPgBgaQAAgXAMgSQAPgWAaAAQAWAAALAUQAJAPgBAXQAAAXgMARQgNATgXAAQgRAAgNgNgAgTgVQgHAMAAAOQAAAQAJAJQAHAHAJAAQALAAAIgIQAJgJAAgQQACgogYAAQgPAAgJAPg");
	this.shape_12.setTransform(207.6,23.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgFA/QgDgDAAgFQAAgNgDgZQgDgZAAgNQAAgLgDgGQgHADgIAIIgNAOIgFAHIgCASIgBASIABAJIABAJQAAAEgDADQgDADgFAAQgMAAAAgbIABgUIACgSIgBgRIgBgRQAAgYALAAQAEAAADADQAEAEAAAEIgBAGIAAAHIAAALQAFgLALgJQALgKAIAAQARAAAFARQAGgIAIgEQAIgEALAAQASAAAGAUQACADADAbIAHA8QABAFgEADQgDADgEAAQgJAAgCgKIgEghIgDggQgBgIgDgHQgEgJgEAAQgEAAgLAGIgNAKIAAAVIAEAbQACARAAALQAAAFgDADQgDADgFAAQgEAAgCgDg");
	this.shape_13.setTransform(193.6,23);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CE0063").s().p("AguBTQgLgKAAgiIABgPIAAgSIgBgFQAAgDACgDIACguIgBgLIgBgMQAAgNALAAQAFAAADAEQANgEALgCQAMgBAJAAQAaAAAPAGQAIADAAAHQAAAEgDAEQgDADgFABIgDgBQgSgFgRgBQgJAAgKACIgWAFIABALIgCAqIAugFIAagCQAEAAAEADQADADAAAFQAAAIgKACIgaACIgwAEIgBAPIAAANQAAAYADADQADAEAOAAIATAAIAUgBIAHAAIAGgCQALAAAAAMQAAAJgJACQgKABghAAQghAAgJgIg");
	this.shape_14.setTransform(171.8,20.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CE0063").s().p("AgSBOQgNgggRg9IgIgdQgHgWABgHQgBgFAEgDQADgDAFAAQAHAAADAJIAEASIALAlQAJAnALAdIAAgCIAchNIAJgaQAGgQAHgIQADgFAGAAQAEAAADAEQADADABAFQAAADgCADQgHAKgFALIgIAXIgdBOQgFANgGANQgDAHgGAAQgIAAgDgJg");
	this.shape_15.setTransform(158.2,20.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CE0063").s().p("AgvBPQgCgDAAgFQAAgEACgEQADgDAFAAQAHAAAQgCIABgUIAAgSIgBgSQAAgYADglIgOAAIgOABQgEAAgEgDQgDgEAAgEQAAgKAKgBIAggBQAVAAAgAEQAKACAAAKQAAAFgEADQgDACgEAAIgSgBIgRgCQgDAfABAbIAAATIAAATIAAASIAiAAQAEAAAEADQADADAAAFQAAAEgDADQgEAEgEAAIgSAAIgSAAIgVACIgVACQgFAAgDgDg");
	this.shape_16.setTransform(144.4,20.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CE0063").s().p("AgHBPQgDgDAAgFIAAgFIABgFIgBgQIAAgPQAAgQgDgbQgDgeAAgNIgKAAQgXAAgOgDQgIgCAAgJQAAgEADgEQADgDAFAAIARACIARABIAUAAIASAAIAZABIAZABQAEAAADADQADADAAAFQAAAFgDADQgDADgEAAIgZgBIgYgBIgIAAIADAwQACAeAAARIABALIABAMQAAAHgDAGQgDAHgGAAQgDAAgEgDg");
	this.shape_17.setTransform(131.8,20.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CE0063").s().p("AgsBCQgPgQAAgXQAAgjAfgnQAZggAZABIAKAAIAHACQAEgGAGAAQAHAAACAJQACAJAAANQAAAFgCADQgDAEgGAAQgHAAgDgIQgDgHgDgCQgCgBgJAAQgPAAgSAYQgaAgAAAcQAAAOAJAJQAJALANAAQAKAAALgFIATgOQAGgEADAAQAFAAADADQADAEAAAEQAAAFgEAEQgcAZgcAAQgWAAgQgRg");
	this.shape_18.setTransform(117,20.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CE0063").s().p("AguBTQgLgKAAgiIABgPIAAgSIgBgFQAAgDACgDIACguIgBgLIgBgMQAAgNALAAQAFAAADAEQANgEALgCQAMgBAJAAQAaAAAPAGQAIADAAAHQAAAEgDAEQgDADgFABIgDgBQgSgFgRgBQgJAAgKACIgWAFIABALIgCAqIAugFIAagCQAEAAAEADQADADAAAFQAAAIgKACIgaACIgwAEIgBAPIAAANQAAAYADADQADAEAOAAIATAAIAUgBIAHAAIAGgCQALAAAAAMQAAAJgJACQgKABghAAQghAAgJgIg");
	this.shape_19.setTransform(103.6,20.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CE0063").s().p("AgrBKQgUgPgBgTQAAgOAMAAQAKAAABANQAAAJAMAJQAMAJALAAQAIAAADg3QACgYAAgnIgBgLIgGAAIgMAAIgMgBQgGAAgCgDQgEgDAAgFQAAgLAPAAIALAAIAKABIAUgBIAUgBQAZAAAAAMQAAAFgDADQgEAEgEAAIgGgBIgIgBIgMAAIABANQAABPgLAlQgHAYgRAAQgTAAgSgOg");
	this.shape_20.setTransform(89.1,20.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CE0063").s().p("AghBWQgMgCgGgFIgBAAQgFAAgDgDQgDgEAAgEIABgiIABgiIAAgkIgBgmQAAgEAEgFQAFgFAFAAQACAAAPAHIATAJQAdALAWAVQAZAaAAAdQAAATgJAQQgIARgPAKQgRAMgeAAQgIAAgKgDgAgogdIABAeIgCA7IACABQAKAGAOAAQAXAAAMgHQAKgHAGgMQAGgMAAgNQAAgeghgVQgKgHgngSg");
	this.shape_21.setTransform(74.1,20.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CE0063").s().p("AAmA4IgHgiIgdAFIgbAHIgTApQgDAFgHAAQgEAAgDgCQgDgEgBgFQAAgEARgiQgCgEAAgDQAAgJAKgCQANgWASgeQAZgpAGAAQAJAAACAMIAHAkIARBKIAFARQAEAJAAACQAAAFgEADQgDADgEAAQgKAAgHgZgAgNAIQANgEAZgEIgIgog");
	this.shape_22.setTransform(57.6,20.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAaA1IgDgYIgBgYIAAgJIAAgKQAAgXgIAAQgMAAgKAOQgKANgGATIgBAKIAAALIAAAJIABAKQAAAFgDADQgDADgFAAQgEAAgDgDQgDgDAAgFIgBgKIAAgJIABgeIACgfIgBgKIAAgKQAAgFADgDQADgCAFAAQAJgBABAOIABANQASgYASAAQARAAAHAQQAEAKABATIAAALIAAAJQAAAJACAOQACAOAAAJQAAAEgDADQgDAEgEAAQgKgBgBgJg");
	this.shape_23.setTransform(37.7,22.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAmA4IgIgiIgcAFIgbAHIgTApQgDAFgGAAQgFAAgDgCQgEgEAAgFQAAgEARgiQgCgEAAgDQAAgJAKgCQAMgWAUgeQAYgpAGAAQAIAAADAMIAHAkIARBKIAGARQADAJAAACQAAAFgDADQgEADgEAAQgKAAgHgZgAgNAIQANgEAZgEIgIgog");
	this.shape_24.setTransform(23.5,20.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(3,1,1).p("EAojAYGMhRGAAAMAAAgwLMBRGAAAg");
	this.shape_25.setTransform(275,187.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.UI}]}).wait(529));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgoiAb+MAAAg38MBRFAAAMAAAA38g");
	mask.setTransform(275,212.3);

	// content
	this.instance = new lib.Lesson8ArticlesIntro();
	this.instance.parent = this;
	this.instance.setTransform(277.5,159.9,1,1,0,0,0,246.5,126.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(529));

	// Anim
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#00993D","#24FD4F"],[0,1],-259.5,0,259.6,0).s().p("EgoiAYGMAAAgwLMBRFAAAMAAAAwLg");
	this.shape_26.setTransform(275,187.5);

	var maskedShapeInstanceList = [this.shape_26];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_26).wait(529));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,201.6,534,398.7);
// library properties:
lib.properties = {
	id: '5F17C212AEE7124DB88D14C6E83EA2FC',
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
		{src:"sounds/AANDandTHEarealwaysadjart.mp3", id:"AANDandTHEarealwaysadjart"},
		{src:"sounds/SEAdjetiveAnswers.mp3", id:"SEAdjetiveAnswers"},
		{src:"sounds/modifies.mp3", id:"modifies"},
		{src:"sounds/nounmarkers.mp3", id:"nounmarkers"},
		{src:"sounds/articlesarecallednounmarkers.mp3", id:"articlesarecallednounmarkers"},
		{src:"sounds/SEBlackHair.mp3", id:"SEBlackHair"},
		{src:"sounds/wrong_answer.mp3", id:"wrong_answer"},
		{src:"sounds/SEBrownHair.mp3", id:"SEBrownHair"},
		{src:"sounds/bushrattle.mp3", id:"bushrattle"},
		{src:"sounds/SERitaChopsMick.mp3", id:"SERitaChopsMick"},
		{src:"sounds/_6a.mp3", id:"_6a"},
		{src:"sounds/_7a.mp3", id:"_7a"},
		{src:"sounds/highclick.mp3", id:"highclick"},
		{src:"sounds/bgmAdj.mp3", id:"bgmAdj"},
		{src:"sounds/lowclick.mp3", id:"lowclick"},
		{src:"sounds/signalthecomingofanoun.mp3", id:"signalthecomingofanoun"},
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
an.compositions['5F17C212AEE7124DB88D14C6E83EA2FC'] = {
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