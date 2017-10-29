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


(lib.AnModsNoun = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgVAWQgKgJAAgNQAAgMAKgJQAJgJAMAAQANAAAJAJQAKAJgBAMQABANgKAJQgJAJgNAAQgMAAgJgJg");
	this.shape.setTransform(434.9,216.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiqDFQgHgHAAgLIACggIABghIABguIABgvIAAgyIgBgyQAAgQgDggQgDgfAAgQQAAgMAKgJQAKgKAMAAQAOAAAUAdQA/BfAyA+QA7BJBHBEQABgLgBgVIAAggQAAhugJhCIgHgbQgFgRAAgJQAAgeAbAAQAsAAAACkIgBBTIgBBUQAAAMgEAdQgEAZgXAAQgOAAgTgSQhnhhiEi3IgBA5IgBA5IABA/IABA/QAABEgbAAQgNAAgJgJg");
	this.shape_1.setTransform(407.9,198.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhwCWQgfgkgIhIQgEggAAhfQAAgjABgXQACgXADgIQAGgTARAAQAXAAAAArIAACUQAACYBqABQBlgBAAkBIAAgYIAAgVQAAgPAGgMQAHgPAOAAQAZAAAAAiIAAAgIAAAfQAAEkiXAAQhOAAgngtg");
	this.shape_2.setTransform(368.1,198.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ah/CcQg1gtAAhIQAAhWAzhIQA7hPBVAAQBTAAApAlQAqAnAABUQAABWgvBHQg3BQhVAAQhIAAgxgrgAhZhVQgoA5AABDQABAxAjAeQAjAdA0AAQA8AAAog+QAjg3AAhEQAAg9gbgYQgZgYg+AAQg9AAgrA+g");
	this.shape_3.setTransform(328.4,198.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AiqDFQgHgHAAgLIACggIABghIABguIABgvIAAgyIgBgyQAAgQgDggQgDgfAAgQQAAgMAKgJQAKgKAMAAQAOAAAUAdQA/BfAyA+QA7BJBHBEQABgLgBgVIAAggQAAhugJhCIgHgbQgFgRAAgJQAAgeAbAAQAsAAAACkIgBBTIgBBUQAAAMgEAdQgEAZgXAAQgOAAgTgSQhnhhiEi3IgBA5IgBA5IABA/IABA/QAABEgbAAQgNAAgJgJg");
	this.shape_4.setTransform(287.1,198.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ABRCBQgLgKgGgIQgYANgTAHQgTAGgLAAQg7AAgbghQgZgfgBhBQABg8AqgsQApgrA6AAQAWAAAcALQAiAOAAAUQAAAHgFAFQgDAKgBAWIgCA3QAAAgAFASQACALANAhIAGAOIABAEQABAKgIAHQgGAGgKAAQgEAAgNgLgAgqg+QgdAfAAApQAAAqAPAUQAPAVAdAAQAXAAARgJQAJgFARgOQgJhCABghIABgYIAEgbIgQgHQgGgDgFAAQgmAAgcAhg");
	this.shape_5.setTransform(237.4,204.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhGCNQgngOAAgZQAAgLAIgHQAIgHAKgBQAIABAMALQAGAHAVADQASADALAAQAUAAARgFQAXgIAAgPQAAgigwgNIgZgFQgigIgOgKQgUgNgBgdQABg1AxgWQAQgHAfgJQAigJAPgIQAKgEAMAAQALAAAHAIQAHAGAAAMQAAAHADAOQADAPAAAGQAAAMgGAHQgIAHgKAAQgOAAgGgJQgEgGgDgWQgSAFgoANQgoAQAAAYIAPAEQA5AKAcATQApAZABAzQAAApgkAVQgeARgsAAQghAAgegLg");
	this.shape_6.setTransform(195.2,203.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhWBtQgngfAAg5QAAhBAggsQAjgxA5AAQApAAAbAPQAhARgBAkQAAAagcAUQgNAJgpATIhfAtQAOAVAVAKQAVAMAbAAQARAAAYgHQAegIAJgOQAIgNAKAAQAJAAAHAGQAHAHAAAIQAAAdguAUQgmARglAAQg4AAgjgdgAg0hDQgVAXgKAwIBOgkQAtgXATgQQgWgVgmABQgegBgVAZg");
	this.shape_7.setTransform(169.6,204.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgYC3QgHgHAAgLIgBguIgBgtQAAgYADgjQACgjAAgYQAAgLAHgHQAHgHALAAQAKAAAHAHQAHAHAAALQAAAYgDAjQgCAjAAAYIABAtIAAAuQAAALgGAHQgHAHgKAAQgLAAgHgHgAgQiLQgJgJAAgMQAAgMAJgJQAJgIALAAQAMAAAJAIQAJAJAAAMQAAAMgJAJQgJAJgMAAQgLAAgJgJg");
	this.shape_8.setTransform(148.2,198.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgpDYQgHgHAAgKIABgFQAEghAAgnIAAhEIAAhJIgoADQgaAAABgZQgBgZAtgCIAYAAIAEgmQAHg4AVgcQAZgfA4AAQAlgBgBAZQABAYgiAAQg8AAgIBWIAAAPIA3gDQAoAAAAAZQAAATgUADQgIACgMAAQgLgBgvAEIgCA4IABAwIABAvQAAAvgFAbQgEAUgTAAQgLABgHgHg");
	this.shape_9.setTransform(126.9,199);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgYC3QgHgHAAgLIgBguIgBgtQAAgYADgjQACgjAAgYQAAgLAHgHQAHgHALAAQAKAAAHAHQAHAHAAALQAAAYgDAjQgCAjAAAYIABAtIAAAuQAAALgGAHQgHAHgKAAQgLAAgHgHgAgQiLQgJgJAAgMQAAgMAJgJQAJgIALAAQAMAAAJAIQAJAJAAAMQAAAMgJAJQgJAJgMAAQgLAAgJgJg");
	this.shape_10.setTransform(107.4,198.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhZCsQgkgjAAg4QAAhEAkgnQAjgpA5AAQAdAAAQAJIAYASQADhrAFglQADgWAUAAQAXAAAAAYQAAAjgKB4QgDAlAAAlQAABUAIArIAAAGQABAKgIAHQgHAGgJAAQgQAAgHgXQgSAOgUAHQgUAGgUAAQg0AAgigjgAg7AEQgVAZAAAzQAAAhAXAXQAXAYAfAAQAUAAAPgIQAIgFAUgQIAHgIIAAgsIAAgdIAAgeQgJgUgQgKQgQgKgWAAQgpAAgWAYg");
	this.shape_11.setTransform(84.4,197.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhLBrQgigjgCg7QgBg4AegrQAjg0A/AAQAyAAAaAvQAVAlgBA1QAAA3gdAoQggAtg1AAQgqAAgfgggAgsgzQgRAdAAAjQAAAlAUAVQARARAWAAQAaAAATgUQAVgVABgkQAEhhg5AAQgkAAgUAjg");
	this.shape_12.setTransform(55.4,204.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgOCVQgHgHAAgLQAAgfgGg8QgGg7AAgeQAAgbgIgPQgSAIgSASIgeAiIgNAQQAAAPgCAcQgDAdAAAPQAAAIACANIADAUQAAAKgIAIQgIAHgKAAQgdgBAAhAQAAgQADgeQADgdAAgPIgCgpQgDgaAAgOQAAg5AaAAQAKAAAIAIQAIAJAAAKIgBAPIgBAQIAAAaQANgbAagWQAZgWASAAQAoAAAOAnQAOgSATgJQATgJAZAAQAqAAAQAtQADAJAHA/QAHAqALBlQABAKgHAIQgIAGgLABQgVAAgDgXQgFgbgEgzIgJhNQgCgSgGgRQgJgWgKAAQgKAAgZAPQgYAQgIAIQAAAYABAYIAIBDQAFAoAAAaQAAALgHAHQgHAHgLAAQgKAAgHgHg");
	this.shape_13.setTransform(22.5,204.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AA9B7IgGg3QgEgeAAgZIABgYIABgYQAAg3gVAAQgcABgZAhQgXAfgNAuIgCAYIgCAZIACAXIABAWQAAAMgHAHQgGAHgMAAQgLAAgHgHQgGgHgBgMIgBgWIgCgXQABgaADgtQADgvABgaIgBgYIgBgXQAAgLAIgHQAGgHALAAQAXAAACAhIABAeQArg5ArAAQApAAAQAkQALAXABAuIAAAaIAAAXQgBAUAGAiQAFAhABAVQAAALgIAHQgHAHgLAAQgVAAgEgYg");
	this.shape_14.setTransform(241.2,49.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("ABYCDQgHgXgKg5QgZAEgqAJIhCAOQgMAhggBAQgHAOgPAAQgJAAgIgHQgJgIAAgKQAAgNAnhQQgEgGAAgJQAAgUAZgGQAcg1AshHQA7hgAPAAQATAAAIAcIAQBVIAlCvIAPAoQAIAUgBAHQAAALgHAIQgIAHgKAAQgYAAgRg8gAggASQAegHA+gLIgUhhg");
	this.shape_15.setTransform(207.7,44);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0000FF").s().p("AiqDFQgHgHAAgLIACggIABghIABguIABgvIAAgyIgBgyQAAgQgDggQgDgfAAgQQAAgMAKgJQAKgKAMAAQAOAAAUAdQA/BfAyA+QA7BJBHBEQABgLgBgVIAAggQAAhugJhCIgHgbQgFgRAAgJQAAgeAbAAQAsAAAACkIgBBTIgBBUQAAAMgEAdQgEAZgXAAQgOAAgTgSQhnhhiEi3IgBA5IgBA5IABA/IABA/QAABEgbAAQgNAAgJgJg");
	this.shape_16.setTransform(407.9,198.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0000FF").s().p("AhwCWQgfgkgIhIQgEggAAhfQAAgjABgXQACgXADgIQAGgTARAAQAXAAAAArIAACUQAACYBqABQBlgBAAkBIAAgYIAAgVQAAgPAGgMQAHgPAOAAQAZAAAAAiIAAAgIAAAfQAAEkiXAAQhOAAgngtg");
	this.shape_17.setTransform(368.1,198.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0000FF").s().p("Ah/CcQg1gtAAhIQAAhWAzhIQA7hPBVAAQBTAAApAlQAqAnAABUQAABWgvBHQg3BQhVAAQhIAAgxgrgAhZhVQgoA5AABDQABAxAjAeQAjAdA0AAQA8AAAog+QAjg3AAhEQAAg9gbgYQgZgYg+AAQg9AAgrA+g");
	this.shape_18.setTransform(328.4,198.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0000FF").s().p("AiqDFQgHgHAAgLIACggIABghIABguIABgvIAAgyIgBgyQAAgQgDggQgDgfAAgQQAAgMAKgJQAKgKAMAAQAOAAAUAdQA/BfAyA+QA7BJBHBEQABgLgBgVIAAggQAAhugJhCIgHgbQgFgRAAgJQAAgeAbAAQAsAAAACkIgBBTIgBBUQAAAMgEAdQgEAZgXAAQgOAAgTgSQhnhhiEi3IgBA5IgBA5IABA/IABA/QAABEgbAAQgNAAgJgJg");
	this.shape_19.setTransform(287.1,198.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#DC2882").s().p("ABRCBQgLgKgGgIQgYANgTAHQgTAGgLAAQg7AAgbghQgZgfgBhBQABg8AqgsQApgrA6AAQAWAAAcALQAiAOAAAUQAAAHgFAFQgDAKgBAWIgCA3QAAAgAFASQACALANAhIAGAOIABAEQABAKgIAHQgGAGgKAAQgEAAgNgLgAgqg+QgdAfAAApQAAAqAPAUQAPAVAdAAQAXAAARgJQAJgFARgOQgJhCABghIABgYIAEgbIgQgHQgGgDgFAAQgmAAgcAhg");
	this.shape_20.setTransform(237.4,204.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape}]},9).wait(11));

	// Layer 2
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#9900CC").ss(3,1,1).p("EAmhAQzMhNBAAAMAAAghlMBNBAAAg");
	this.shape_21.setTransform(230.4,121.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0.8)").s().p("EgmgAQzMAAAghlMBNBAAAMAAAAhlg");
	this.shape_22.setTransform(230.4,121.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#9900CC").ss(3,1,1).p("EgmggQyMBNBAAAMAAAAhlMhNBAAAg");
	this.shape_23.setTransform(230.4,121.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,248,252,0.8)").s().p("EgmgAQzMAAAghlMBNBAAAMAAAAhlg");
	this.shape_24.setTransform(230.4,121.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,242,248,0.8)").s().p("EgmgAQzMAAAghlMBNBAAAMAAAAhlg");
	this.shape_25.setTransform(230.4,121.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(255,235,245,0.8)").s().p("EgmgAQzMAAAghlMBNBAAAMAAAAhlg");
	this.shape_26.setTransform(230.4,121.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,229,242,0.8)").s().p("EgmgAQzMAAAghlMBNBAAAMAAAAhlg");
	this.shape_27.setTransform(230.4,121.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(255,222,238,0.8)").s().p("EgmgAQzMAAAghlMBNBAAAMAAAAhlg");
	this.shape_28.setTransform(230.4,121.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,216,235,0.8)").s().p("EgmgAQzMAAAghlMBNBAAAMAAAAhlg");
	this.shape_29.setTransform(230.4,121.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(255,209,232,0.8)").s().p("EgmgAQzMAAAghlMBNBAAAMAAAAhlg");
	this.shape_30.setTransform(230.4,121.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(255,203,228,0.8)").s().p("EgmgAQzMAAAghlMBNBAAAMAAAAhlg");
	this.shape_31.setTransform(230.4,121.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(255,196,225,0.8)").s().p("EgmgAQzMAAAghlMBNBAAAMAAAAhlg");
	this.shape_32.setTransform(230.4,121.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(255,202,228,0.8)").s().p("EgmgAQzMAAAghlMBNBAAAMAAAAhlg");
	this.shape_33.setTransform(230.4,121.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(255,208,231,0.8)").s().p("EgmgAQzMAAAghlMBNBAAAMAAAAhlg");
	this.shape_34.setTransform(230.4,121.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(255,214,234,0.8)").s().p("EgmgAQzMAAAghlMBNBAAAMAAAAhlg");
	this.shape_35.setTransform(230.4,121.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(255,220,237,0.8)").s().p("EgmgAQzMAAAghlMBNBAAAMAAAAhlg");
	this.shape_36.setTransform(230.4,121.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(255,226,240,0.8)").s().p("EgmgAQzMAAAghlMBNBAAAMAAAAhlg");
	this.shape_37.setTransform(230.4,121.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(255,231,243,0.8)").s().p("EgmgAQzMAAAghlMBNBAAAMAAAAhlg");
	this.shape_38.setTransform(230.4,121.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(255,237,246,0.8)").s().p("EgmgAQzMAAAghlMBNBAAAMAAAAhlg");
	this.shape_39.setTransform(230.4,121.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(255,243,249,0.8)").s().p("EgmgAQzMAAAghlMBNBAAAMAAAAhlg");
	this.shape_40.setTransform(230.4,121.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(255,249,252,0.8)").s().p("EgmgAQzMAAAghlMBNBAAAMAAAAhlg");
	this.shape_41.setTransform(230.4,121.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21}]}).to({state:[{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_25},{t:this.shape_23}]},1).to({state:[{t:this.shape_26},{t:this.shape_23}]},1).to({state:[{t:this.shape_27},{t:this.shape_23}]},1).to({state:[{t:this.shape_28},{t:this.shape_23}]},1).to({state:[{t:this.shape_29},{t:this.shape_23}]},1).to({state:[{t:this.shape_30},{t:this.shape_23}]},1).to({state:[{t:this.shape_31},{t:this.shape_23}]},1).to({state:[{t:this.shape_32},{t:this.shape_21}]},1).to({state:[{t:this.shape_33},{t:this.shape_23}]},1).to({state:[{t:this.shape_34},{t:this.shape_23}]},1).to({state:[{t:this.shape_35},{t:this.shape_23}]},1).to({state:[{t:this.shape_36},{t:this.shape_23}]},1).to({state:[{t:this.shape_37},{t:this.shape_23}]},1).to({state:[{t:this.shape_38},{t:this.shape_23}]},1).to({state:[{t:this.shape_39},{t:this.shape_23}]},1).to({state:[{t:this.shape_40},{t:this.shape_23}]},1).to({state:[{t:this.shape_41},{t:this.shape_23}]},1).to({state:[{t:this.shape_22},{t:this.shape_21}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.6,0,496,237.5);


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


(lib.WhichOneBubble2still = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.8,1,1).p("ACXmcIELgpIAggEAkUFyQAAANgJAJQgJAJgNAAQgMAAgJgIQAAAAgBgBQgJgJAAgNQAAgNAJgJQAJgJANAAQABAAAAAAQANABAIAIQAFAFACAFQACAGAAAGgAmlGRQAMAAAIAIQAJAJAAAMQAAAMgJAIQgIAIgMAAQgMAAgIgIQgIgIAAgMQAAgMAIgJQAIgIAMAAg");
	this.shape.setTransform(-25.9,17.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AIcjVQgCAGgDAFQgJAPgOAAQgNAAgKgPQgCgEgCgGQgFgMAAgQQAAgQAFgNQACgEACgEQAKgQANAAQAOAAAJAQQACAEACAEQADACADAEQAHAJAAANQAAANgHAJQgCAEgDACgAIbkNQAFANAAAQQAAAPgEAMAoVC5QATgSAaAAQAbAAASASQATASAAAbQAAAbgTASQgSATgbAAQgaAAgTgTQgJgJgEgLQgFgMAAgNQAAgbASgSgACeixQACgIAFgHQALgOAOAAQAPAAAKAOQALAPAAAUQAAAVgLAOQgKAPgPAAQgOAAgLgPQgKgOAAgVQAAgCAAgCQAAgIADgIg");
	this.shape_1.setTransform(2.2,23.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AEaA2IAAgBIgBAAIAAgDIAAgEIgBgBIgBgCIAAgCIAAgCIAAgBIgBgBIAAgEIgBgIIAAgBIgCgFIACACIAEADIADAEIARAFQAQADASgCIAAABIAAAKQAAAIgDAHIAAABQAAADgBACIgHABIgDABIgQACIgCABIgEAAIgFABQgFgBgGACIgBgTgAErApIAAgBIAAgBIAAAAIAAACgAkvAqIgBAAIgBgBQgSgGgLgNIAHglIAAgBIAAgBIAAgDQAGgLAEgPIABAAQAAAGACADIAAAKIAAABQAEAGABAHIAAACIAAAEIAAACQAFANABASIABAAQAGAFADAHIABABIATAOIAAABIgegMgAjrAuQgGgDgGABIAAgBIgOgEIgBgBQgEgEgEACIAAgBQgGgDgDgHIAAgBIgEgFIgCgFIgCgFIgDgOIgBgDIAAgBIAAgGIgCgEIgCgCIAAgBIAAAAIAAgBIgCgCIgCgJIgBgFIgBgIIAAgGIABgFIAAgBIABAAIABgGIABgCIABgBIAEgDQAFgBAFABIADACIACACIAJABIABABQAFADAIABIABAAQAiARAhATIAAAAQAHAUAEAVIAAACIAAABQgEANADAMIgBAAQgYACgXgCIAAABQgFABgGAAIAAAAgAhOAbQgCgHABgGQACgIALgGIAAAAIAHgDIADABQAEAAADACIACAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABIADgBIACAAIACgCQAAgCADgDQAFgEAHgDIALgEIAMgEIAWgGIAbgHIAHgCIAOgDIAMgBIANABIADgBIAAgBQAMgDAEAFIABABQAHgKATgBIAEABIABAAIAAAAIAAABIACAHIALAGIAAAAIABABQADACADABQAGAFAIAEQABADAEAAQABAEAFgBIAAAEIkKAoIgDgFg");
	this.shape_2.setTransform(-3.2,-27);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#996600").s().p("AgpBKIgBAAQgEgHgFgBIgBAAQgDgJgEgBIAAAAIgDgPIgFgBIAAAAIgCAAQgDgBgCgDIgFgIQgPgagBgeIEKgpIAggEIAAAAIAAACIAAABQAGABAGgCIAHAIIANAJIAFACIACACIABABQABACADABIABACIAAACIACAIIABABIABABIAAAFIACAPIABABIABAAIAAAGIABASIgFAAIgDgDIgBgBIgBgBIAAAAQgBgDAAgDIgDgCIAAAAQAHgEgDgCIgBABIAAgBQAEgPgFgQIAAgBIABgCIAAgDQAAgBAAAAQgBAAAAAAQAAgBgBAAQAAAAgBAAIgDAAIgBgBIAAgBQgDgDgDgDQgEgCgFAAQgFAAgBgEQgLAFgKgDIAAABQgIAGgHAAIgBgDQgLAJgPAEIgCABQgDAJgJgBIgBAAQgIAMgOAHIgBAAIgFAKIgBABQgLAFgJAIIgBAAIgBAJIABACIgBAFIACAFIAAABIgHAEQgDAEgHABIgMADQgWAEgWAGIgCACIgBAAIgCAAIgBAAIgEAAQgFACgFAEQgDACgDgEQgFAAgCADIgBgBIgLAIIAAAAQgFACgFAAIgEAAgACGAlIAAAAIgDgBIgDgCIgEgEQgDgDABgEIABgDQADgGAGgCIAFAAIACAAIAEgCIAFgDIACABIABAAIABgCIAAgBQADgFAEgEQADAEAFAEIgBABQgGAKgLAGQgCADgEAAIAAABIgEAFIAAABIABACIACAAQADAAABgDIAGgDIAAgBIABgBQAHgFAGgHIADgCIAAAAQAEAEADAEIAAAAIgCADIgBABIgFAFIgDACIAAAAIgEgBIgCAAIgBgBIgCACIgEADIgEACIgJACIgBABIgEgBgAjPAWIgBAAQgNgFgJgKIgBgBQgOAAgLgJIAAAAIA7AAIAAABQAIAPgEAMIgBABIgNgEgACvAJIAAgBIAAgCIABgDIAAgCQADgJALgFIAAgBIAAgBQAGgFAFgGIAAgBIgBgCIAAgBIgCAAIgBAAIgBAAQgCAEgDADIgIAHIgEADIAEgEIADgGIABgDQACgFAFgCQAIAAAEACQADACABADIAAAFIgBAEIgCAFIgFAKQgFAFgGAEIgCABIgEABIgGACIgBACIgDgEgACkgHIgBAAIADgCIAFgCIAHgBQgGAGgBAGQgEgCgDgFg");
	this.shape_3.setTransform(-1.2,-20.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AERCMIAAAAQgGgFgDgIQAAAAAAgBQABAAAAAAQAAgBAAgBQAAAAAAgBIAAgCQgCgCgCgGQADgKAJgDIACAAQAFAGgCAMIAAABIAAANQgBAJgCAAIgCgBgAj0hLIAAgBQABgHgCgFIgBAAQgIgBgHgHIgBABIgKABIAAAEIAAACIAAAAQAAgSgGgQQADgBAAgEIABAAIAAADIAAABQADgKAIgFIABgBQAJgDABAJIABAAIAAgBIAAgBQAEAGACAJIABAAQAFATgDATIAAACIgBAEIAAABIgBAAg");
	this.shape_4.setTransform(-21,-2.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AB7FPIgLgBQAFgMAIgBQAFAEgBAGIAAAAQADgCAEgBQAHAAgEAGIgBAAIgGADIgJgCgACgFCQgGgDACgKIAAAAIgGgFQgMgJgOgIIAAgBIgEgFIAAgBQADgRgDgOIgCgIIAAgBQgDgIAAgIIAAgHIAAAAQgHg6glgbIgBAAIgGgDIgBAAIgvACIAAABIAAABIgDAAIgBAAQgUACgSAGIgBAAIgNAZIAAABQABAJgDAFIAAADIAAABIAAAIIAAACQAAAAgBAAQAAAAAAAAQAAAAgBABQAAAAAAABQABABAAABQAAABgBAAQAAABAAAAQgBAAAAAAQgLAAgOgFIAAAAQgCgCgEgBIAAAAQgGgFgEgFIgCAAQgGgBgCgFIgBAAIgIgCIgBAAIgCgCQgYgQgagOQgGgEgHgDQgngPgggVQgIABgDgDQgLgHgNgEQgGgFgHgCQgWgHgRgMIgBAAQgJAAgEgHIgBAAIgLgCIAAgBQgDgDgFgBIgBAAIAAAAIAAgBQgDgFgGgCIgBAAQgJABgGgHIAAgBQgCgFgDgEIAAgBQAAgggGgaIAAAAQgIgNAAgPIgBAAQgKgEgBgIIgEAAIgDgBQgEgFgBACIgBgBQgDgEgCgBQgBAAgBAAQAAAAgBABQAAAAgBAAQAAABgBAAIAAgBQgKAEgKgKIgBAAQgFADgHgDIgBgBIgPgIIAAABIgQgDIAAgBIgHgJQgBAEgFgBQgHgBgIgCIgFACIgCAAQgFACgDAFIgHAOIgIALIAAAAIAAABIgBAAIgHAbIAAgBIgKgJIgBgBIgJgXIgEgEQgDgFgBgIIAAgDIAAgGIAAgHIAAgBIACgMIADgJIAAAAIADgGIABgBQAIgNAMgIIAEgCIAEAAIALAAIAKAAIAEAAIACABIACADIABABIABADIABAGQAEAAADAFIAAAAQAKgHAGAJIABAAQAJgBAAAMQACgDAGgBIADAAIACgBQAGAIAMABIAAABQgGAKANgIIABgBIADAIIABAAIABAAIACgEIABgBIAEgHIABgBIAJgMIADgDIAFgHIADgEIABgBQAHgKADgMIACgDQAEgVAIgWIACgDQALgQAHgSQAHgJAIgIIAJgIIAEgDIAAgBIABAAIAKAAIAKABIAIAAIAEACQADgCAFABQAEAAACACIAAgDQANgJASABIAAgBQARgIASAEIADACQAQgKAYAEIAAABQAcgCAZgEIABAAQAagIAbgBIAAABQARgHAMAGIABABQAHAAACgFIAAgBQAJABAFgFIABAAQAMAFANgBIABAAQAqANAsAQIABABQgJgBgIACIAAABQAQAGATgBIABAAIAQAHIABAAQAUACATAJIAJADIAcALQAFADACADIABABQAUALAXAJIAAABQgGAFgOABQgHABgJgCQgEADgGABIAAAAQgJABgIgCIgBAAQgUAHgcABIAAgBQgVAHgbAFIgDAAIgDAAIgHABIAAABIgBAAQghAGghADIAAABIgCABQgSADgWABIgBABIgNAEIAAABIgBAAIgnAKIgBgBQgDgBgGACIAAgBQgCgGgEgFQgFgEgEAFIgNARIAAgBQgGADgDAFIABACQADAFgBAIIgBAIIgYAAIAAgEIAAgDIgIgDIgBAAQgFgNgHgLIgBAAQgSgJgQgLIAAgBQgYgKgbgHIAAgBQgOgDgHgLQgEABgFgDQgKgGgQgCIAAABQgDADgCgBIgBAAQgEgJAAgPIAAAAQgFgIgBgIIgBAAIgHAIIgJANIAAABIgMASIgDADIgCAGIAAABIgGASIAAACQgGAYgLAVIgCADQgGAMgIALIgCABIgEAFIgGAGIgFAGQgCADgEACIABAAIABAAIAKAGQAIAEAJACIABAAIAAAAQAFgCALADIAHACQAHAHAIgCIABAAQgCAHAHgEQAFgCABAEQACADAIADIABABIABAAQAOgBALAKIAAABQADgCADACIABAAQAMAFAKAIIABAAQAOABAKALIABAAQAZALAeAKIABABIAAgCIAAgBQABgHAGgDQALgBADAKIAAABIAJABIACAAQATACATAGQAHACAFAFIAEAEIABACIAFABQgBgMgGgOIASgGIAEAJIAAAAIABADIAAABQAHASAJAPQADAGAJgEIAAABIAHADIARgDIAJgBIAPgDIARgDQAWgEAYgBIAWAAIAHABIADABIAFgCIABAAIA+gNIAAAAQAWgDAZgGIAAgBIAAgBIAPgCIABgBQA2gOA5gMQAEgBAEADQAFANAFgKIAAgBIAAgCQADgHALgBIAMAAIBCAlIABAAQAJAJANAEIABAAIBYAzIAAABQAVAFALANIAAAAQgcgDgkABQgLABgGAGIgBAAQgKAHgIAJIgBAAQg2AUg5ARIgBAAQgIAAgGACIAAABIgBABQgQAFgTADIAAABIgBAAIgcAKIgBAAQgJAAgHgCQgHgGgMAAQghgBgcAMIAAABIAAABQgMAEgFAJIgBAAQgFgBgEACIAAABQgPALgKARQAAAMABAJIACAGIAAABIAGAHIAAABIAFAEIAAAAIABAAQAEAEACAAQAAAAAAAAQABAAAAgBQAAAAABgBQAAgBAAgBQAAgHgFgEIgBgCIAAgBQgCgHABgKIAIgMIAAgBQAPgFAQgEQgCAHgBAIIgDADIgBABIAAABQgEAFgFAEIAAACIAAABIgBAAIgHAdIABABQAHACACAGIAAAAIABADIAAADQAIgBAJADIABABQAMAEANgDIACAAQAEgJALgDIABAAQAKgCAHgFIAIgFIAIgIIADgEIAAAAQAGgVgJgPIAAgBQAIgBAFACIAAgBIAAgBIAAgEIACgDIAAgBIAGgDIAEgDIABAAIgBAAIAAgBQAQgFAPgBQAFgBgFACQgFADgBAHIAAABQAFAJgCAEIAAABQgMALAOABIABAAQAGAAgGAJQgFAKAGAEQAHgCABAIIAAAAIAAAAQgUALgZAEIgBACIgEAEIgHAEQgCgCgGADIgCgBQgEgBgFgDQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQgHAHgEAHIAAACIgBAAQgQAEgLAJIgBAAQgOACgJAGIAAAAQgCAFgDACIAAAFIgBAFIAMABIABAAQANAAALgFIAAgBQAHgBAEgBQAFgDADgDIABgBQAjgWAugLIAAgBIAAgBQAIgDAKACIABAAQAygXA5gQIABAAQgMAKgQAFIAAABIgBAAQgeAPgiAKIAAABIgBAAQgGACgEACIgBABIAAABIgBAAIhSAdIAAABIAAABIgMAFIgBAAIgNAFIgLAEQgZAJgdAFgAG6C6IgBAAQAHgJAPABIABgBQAGgEgCgHIgBAAQgEgGgMACIAAABQgHAFgJgCQAEgIAPgDQAPgDACgKQgFgEgGABQgFAAgGADQgNAIgFgIIgBAAQgOgCgUAEIAAABQgRAIgTAAIAWgGIABAAQAAgEAFgBIAAAAQAegKAngFIAAgBQAPgEADgRIADgJQAMgEAMgDQgFANAAARQAAAPAFANIgFATIAAAFIAAABIgbALQgJAEgKAAIgJgBgAI5CVIAHgLIAAgBQAEgDADgFIAAAAQAGgPgDgKIgBgEQADgIAHAGIAAABQAGAGABAKIABAAIAAALIAAABIAAACIAAABQACATgIAHIgBAAQgGADgFAAQgJAAgHgKgAoWgvQgDgCgBgLIAAgBIAAgRQAGgFAIgDIABAAQAJAIAJAAIgBAAQgGgGAJABIAAABQALAAAFAGIAAAAQgGAFgKABIAAABQgDADgEACIAAACIgBAAIgHAJIgBAAQgLgEgDAKIgBAAgAmNhuQgKgBgGgEIASgOIAAgBQgBgJACgGIAAgBQAIgbALgXQADgJAGgEQADABgEAKQgNAdgDAmIAAAAQgBARgMAEIgBAAgAnOiaIgVAAIgFAAIgJgHQgIgHgGgIIgBAAIgEAAQgHgEABgJIAAgCIABgDIADgFQAGgJAPAAIAJgBIAQABIAQAAQAFgDAEAAIABgCIADgFQAFgHAGgDIAHABIAFADQAEAFgEAKIgCADIABAAIACgCQAAAHgDAEIgCAFIgBABQgBAMgHAJQgFAKgIAIIgCAAIgDAAQgGAAgFgCg");
	this.shape_5.setTransform(0.5,-12.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFF00").s().p("Ai7BOQgLgOAAgVIAAgFQABgIACgHQADgIAFgHQAKgNAPAAQAOAAALANQAKAPAAAUQAAAVgKAOQgLAPgOAAQgPAAgKgPgACIgBIgFgKQgEgMAAgQQAAgQAFgNIAEgIQAJgQAOAAQANAAAJAQIAEAIQAEACADAEQAHAJAAANQAAANgHAJIgGAGQAFgMAAgPQAAgQgGgNQAGANAAAQQAAAPgFAMIgFALQgJAOgNAAQgOAAgJgOgAC6gMIAAAAg");
	this.shape_6.setTransform(37.6,3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ArBKEQgIgIAAgMQAAgMAIgJQAJgIAMAAQAMAAAIAIQAIAJAAAMQAAAMgIAIQgIAIgMAAQgMAAgJgIgApPJLIgBgBQgJgJAAgNQAAgNAJgJQAJgJANAAIABAAQAMABAJAIQAEAFADAFQACAGAAAGQAAANgJAJQgJAJgNAAQgNAAgIgIgAoDINQgJgJgEgMQgFgLAAgNQAAgbASgSQATgTAaAAQAbAAASATQATASAAAbQAAAagTATQgSASgbAAQgaAAgTgSgAinF+IgMgNIABAAIgCgOIgHADIgBgCIgFAAIgBAFIgGADQgeAKgcgMIAAgBQgDgCgCgDQAAgFACgFQAFgMgIgGIgCAAIgDADQgGADgEAEIgDADQgXARgfAIIgNACQhEACgNg2IAAgCQgCgMAAgMQAKgLAFgQQABgFgDgBQgGgHgEAHIgBABIAAAAIgJARQgKAGgNADQgrALgYgdIgBgBQgSgOgBghIAFgDIAAAAIABgBQARgHAAgXIAAgBQgDgIgJgCIgBAAQgPANgIAUIgBAAIgQgFQgQgOgOgPIAAgCQgCgJgFgHIAAgCQgEgLgDgOIAGAAQALgBAJgIIACgGIAAgEIADgBIABAAIAQgOIgFAAIgBAAIgPABIgSABIgCAAIgHADIAAABIgHAIIg3AAIAAgFIgBgyIAKgFIACgGQACgKgDgJQgOgLgTAGQgpAOgfgWIgCgHQgGggACgjQAogCAegVIAAgGIgBgEQgEgCgEAAQgsAGgdgbIAAgGIAAhCIABgDIADgGQASgIAOgQIAAgGIgBgDQgEgDgEAAQggADgTgYIgBgIIAAg7QAbgKAcgHIACgFQADgHgEgGQgGgHgLAAIgCgDQgDgFgFgEIAAgHIAAgaQABAAAAgBQAAAAAAAAQAAAAAAgBQAAAAgBgBIgBgbIANgZQAJgMAMgHIABAAQAGADABAJIAAAAQAKAVAYABIABAAQAFgCABgHIAAgBQgFgZgVgJIgBAAIAAgBQgGgCAAgFIAHgQIAAgBQAPgNAWgHIAAgBQAagHAfAEIABAAQAVAEASAIIABAAIABAAIAKAEIAAAAIAEAAIABADIANABIACgCIACgDIAGgSIABgEQAJgCAEgHIABgDQAIgEAEgJIACgDQAIgCAIAAQAXgCAWAAQAKAMAPAFIAIACIAFgDIADgCIABgDQgBgMAGgLIABgDQAJgEAEgIIACgDQAJgEAEgJIABgDIBzAAIAGAHIADACIAAAEQAAAFACAEIACADIALABIAGgBIAFgGIACgDIAFgCIACgBIABgCQADgGAAgHIABgDQAIgCAEgGIACgEQAHgCAGAAQAsgBAsAAQAHAeAdAAIAGgCQAJgMAOgKIADgDIAtAAIABABQADAHAGAEIABACIABADQAFARAEARIACAEIAMAAIACgBQANgTAPgRIABgCQAZgUAiAEIADABQAVAOAHAaIABADIAAAGQAAAMACAKIACAEIAMAAIACAAIACgGQACgSAAgTIAAgDIALgEIACgBIABgCIABgDIACgDQA3gaAZAxIABADIABADIAFAZIACAEIAEADIACADIAAADQACAMAHAKIACADQALAEAKgEIACgBIADgDQAFgHACgHIAMgFIABAAQAGADAGgDIABAAQAHACAHgBIAOADIAAABQAQgCAPACIABAAQAFgEAGABIABABQAIADAIABIAAABIgBADQgFAHgIAFIAAABIgCAAQgNAEgIAJIAAAAIAAAAIgEAFIABABIAAAAIADABQAJADAJgGIATgMIAkgIQAVgFAUADIAFACQAHAEAGAGIABAAIAFAMIABAAIAAALIAAABIgKAQIgBABIgBAAIgYAVQAEANANgJQAVgPAeACQALAAAJADIAAAAQASAJAIASIAAABQgGAfgVARIABACIAAACQAFADACAEIABACQAcgNAkAFQAMAIAHAMIABABQADALAAAKQgBANgFALIgBABIgBAAIAAACIAAABIgBAAQgLATgRANIAAABIAAAAQAAABAAAAQAAABgBAAQAAAAAAAAQAAABgBAAQADANAPgHIAEgDQAZgIAfACIABAAQAAABABAAQAAAAAAAAQABABAAAAQABAAABAAIABAAIANADIABAAQAKAGAFAJIABABIADASIABACIAAABIgCAEQgLAXgOATIgFAEIABABIgCACQAAABAAAAQAAAAAAABQAAAAAAAAQABABAAAAIAEABQAJADAOgFIAAgBQAOgDARgBIABAAQADACAGABIAAAAIACABIAEADIABAAIAAABIAGAFIAAABIADANIAAABIgDAMIgBABQgJAOgNAMIAAABIgBAAIgEAEIgMgBQgIABgJAHIgCADIAAADIABAGIACADIAHACIALACQANAMADAQQACAPgFAOIgBADIgFADIgGAJIgDADIgzAEIgDABIgBACIgBADIgBADQACAMANACIACACIACADIACADIAAADIAAADIgJAaIgkADIgDABIgBAEIgBAcIAAAZIAAADIgCADIgCADIAAADIAAADIgOAQIgDADQgRACgRAEIgCABIgBAEIAAADIAAADIAAADQADAGAHAEIACADIAAADIAAAMIAAADIgFAEIgCADIgBADIAAADIAAADQgFAEgDAGIgBACQgUAAgVgDQgbgGgZAGQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAABIgBAVIgBAZIgBAEQgpgIglAMIgBACIgCADIgBANQgCANgIALIgDAEQgOADgPACIgBgEIgLAGIgXABIgDABIgCADIAAAEIgCAAIgMAAIgBAAQgagBgNgOQgIgJgMgBIAAABIgBABQgKAcgZAPIAAABIAAABIgBAAIgEADQgRAJgWAFQgRACgMAAQgRgBgLgHIgNgJIABgBQAAgGgEgCQAAgFgFABQgJADgEAJIAAABIAAACIgBAAQgRAYghAJIAAABIgBAAQgfAHgfgEIAAgBIgLgEIAAgBQgFgFgHgEQgCgFgEgEQgJgMgHgPQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgCABQgBAEgZAiIAAAAIgFAFQgGAFgIADQgTAFgaAAQgSAAgTgRgABdDfIAUABIALABIAJACIADABIACADIACACIA4ADQAggMAjgLIABgBIADgBIAvgOIAAAAIBTgYIAAAAIA8gUIAAgBQAbgJAagKIAhgPIAcgKQAFgCADgDIACgEIABAAQABgBAAAAQAAAAAAAAQAAgBAAAAQAAAAgBgBQgBgEADgDQALgEABgNIAAgBIAKgJIAAgBQALgGADgOQAEgQgBgLIACgKQABgEAFABIgCgCIgBgDIgBgBIgEgJIgDgJIgxgfIgBgBIAAAAIgBgBIgrgZQgigTgkgSIAAgBQg5gjg7gfIgBgBQgHgJgGgMIAAgBQgCgfgHgaIAAgCQgEgdgLgWIABgBQAGgNgLgHIgBgBQgFgGgEgHIgBAAIgSgLIAAgBQgFgGgKgHIAAgBIgBAAQgVgagggPQgggPgkgBIgBAAIgFAAIgBAAIgBgBIgOgGIgBAAIgGABIAAgBIgMgFIgBAAQgJABgHgDQgCgFgGgBQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBAAAAAAQgDgIgHgEIAAgBQgjgFgnABIAAgBQgHgCgJAAIAAAAQgFgBgDgCIAAAAIgHACIAAAAQgMgCgPABIAAABQgBAGgHABQAAgBABAAQAAgBAAAAQAAAAAAgBQgBAAAAAAIgBgBQgJACgKgBIgEADQgIAHgFgIIgBAAQgFAFgRABIAAABIgBAAQgMACgJgDIgBAAQgGAEgIgDIgBABQgEAFgJAAIAAACQgdABgbAHQgaAHgbAEIgBAAQgFAEgIgCIAAABIgGADIgBAAIgNAAIAAAAIggAIIAAABIgBABQgLAGAEAPIAAABQgJAGAJAEIAAABQgEAIgJAKIgYADQgMACgLAEIgDAAIgBABIgBAAIgCABQgSAFgVACQgRAFgOAHIgMAGQgJAEgGgFIAAgBIAAgBIgBABIgPAIIgSALIgGAEIgEADIgFAEIgCACIACAKQgNANgHAUIgDANIABAHQABAKgEADIgBAHIABABIABAAIAFANIABAAQADAOAGALIAAACIAEADIABAAQADAJAGAFIABABIABACIABAAIABABIACABQAFACACAFQACADABAFIAAABIAAAFQAAAFACADIACAAIAAgBQAAgIAHgEIABAAIAIAAIACABIABABQACgCACAFIACACQAFAFAEAGIABAFIAAABIAAAMIAAABQAEAFgEADIAAAHIAAABIABAGQAFAEAAALIAAAEQAEAEgBAJQAMASASANIAAAAQAFAIAHAFIAAABQAaAJAhACIABAAQALAFAKgIQAMgIAHgOIAEgFIAPgPQAMAAAKAJIAAABIAKACIABAAIAAABIABAAICCA8IABAAQAeAOAaARIABABQATAMAVAKIABAAIAXANIABABQAKAFACAJIACAAIADAAQAMACAJAHIAFAFIACACIACACIAHAIIACACIAAABIABAEIADgBQABAIADAIIADADQAKASAJAUIAKAEQABAIAHABQAgAFAhgBIAGgBIgFAEgAJzCeIADgCIAAgBQAFgCgCgDIgGAIgAH/CNIABAAIABAAIgCAAgAAUCrQgQgUgEgYQAAgNABgNIABgIIADgMIAAgHIAAgBIADgCIAEgHIACgCIADgCIAFABIACABIAAgBIAHgLIAAgBIAUAAIgBAEIgBAAQgIgCgHACIgBAAIgFALQAFADgBAIIAAABIAAABIgBADIAAABIgDAGIAAABIAAABIgEAHIAAACIAAAEIAAAEQgBARAEAQIABAEIAJARIACAEIgRAKIgCgDgAnbgXIgOAAQgEgBgCgCQgDgDAAgFIAAgFIgLgIIAAgBIgCgFIgIgQIAAgBIAAgLIAAgBIAAgDIgBgGIgBgBIgBgJQgFgeANgcIADgEIABgCQACgDADgBIADAAIAEABIAEACIABgBIABAAIABAEIABADQACAFgDAIIgEAKQgKAVAHAXQAFAKAHAHIAHAGIAJAEIAAAAIAFACIAKABIADABIACAAIAAgBIAAgBIAFgIIgBgFIAAgDIAAgLQABgKgCgJQgCgIAEgEIABgBIAAgBIADgBIABgBQAEgBAEACIAAAAIAFAEIABABQAHgBAFACIABAAIADADIACACQACAEAAAGQAAATgEARIgBAGIAAABIAAABQACAZgUALIgBABQgLACgGgFIgFABIgBABIgNABIgFACIgEgCgAoChAIABAAQADAEAAAHIABAAQAFAEADAGIABAAIADACQACgDAEgCIAAAAQgPgMgIgQIAAAKgAEijeIgYAAQgIgBgHgEIgYgVIgCAAQgHgBgDgFQgHgJgJgCIgFgBIgCAAQgDAAgCACIgBAAIgfAFIgBgDIABgCIAAAAIAAgBQgCgFgFgBIAAgBIgBgCQgFgBgDgDIgKgFQgDgEgEAAQgCgDgEgCIgBgBIgBgEIACAAIABAAQAIgEAMAAQAVgFAWgCIAAgBQAGgBADABIAIgBIAGAAIAHgBIACgBIADAAIABAAQAPgFATADIABABIAAAAIAIACIAGACQALAGADAPIADAKIABABQAMAbADAdIgIgBg");
	this.shape_7.setTransform(0.4,-1.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("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LgEAEgLIACgBQAxgRArATIAGAAIAAgDQACgOAOgFQAMgVAXgDQA+gHBAAFQAFAAAGAFIAEAFIABgCIAAgDIAAgEIADgDIABgCIABgBQATgRAZgFIBfABIAHABIACADQAJAMAFAOIARgQQAIgIALAAQAegCAeAEQAFABACAGIAEAEIAHAIQADAGACAHIADAAIAFgBIABgDIAGgJIABgEQAlgbAtANQAWAGAMAUQAogeAyAMQAYAGAGAWIACADQALAWALAWIABADIAAADIAAAHIAAADIACAAQALgIAIAHIAAgBIABAAIAAgBIACgBIAGgCIAAgBQALAAAHgDIAAAAIAHAAIACAAIAEAAIABAAIAjAAIABAAIAGAAIABAAIANAAIABAAQANAGAPADQgDAEACAHIACADIACABQAJACAJAAIABAAQAJAAAKgCIACgBIAKgBIABABIADACIACABIAAAAIANABIAEAAQAVAIAIAUIAAABQAAAPgHAPIAAABQAOgDALADIAAAAQATACAOAGIAAABQANAFAGAMIAAABIABAAQAJAMgCAVIgBABQgGALgIAJQAAAFAHgCIACAAQAPgDASACIAAAAIAMACIABABQANAJAJANIABAAIADAPIAAABIABAAQAEATgHANIAAACIAAABIgFAKQgEAKgHAHIABACIAAABIAMgCQAXgDAXAFIABABQAjAIACAkIAAAAIABAAIgBAGIAAAHQgBAHgCAGQgCAHgFADIAAABIgHAJQAEAHALgEIAHgCIACABQAFABAHgBIABAAIANAHIAAABIABAAQAHAEAFAIIABAjIAAAGQgIALgMAHIAEABIgBABIAAAGIAAAEIABADIADADIAGACQgGACgCADIACADIABADIAAAEIACADIABADIAAADIAAAcQgBARgGARIgCAAIgGADIgDADQgOAPgXgBQACAOAAAPQgBAogngBIgLgBIABAcQABAmgeAZIgDABIgPAEQAEApgcAdQgEAFgIAAQgnACglgGIAAADIAAAZQAAAPgLAKIgIACQghADghABQAAATgNAQQgMARgWgBIgqgBIgJACIgCAAQgfAFgagMIAAgBQgFgEgHgCIgBAAQgFAIgHAHQgYAbgpAJIAAABQgnAJghgMIgBAAQgIgGgKgEIAAABQgIAIgKAGIAAABIgRANQgZAIgYADIgSACQgUAAgQgHgACUFuIgCgCIgCgDIgCgBIAFgDIACAAQADgFgHgBQgEABgDACIAAABQABgGgEgFQgJACgEAMIgVgBIAFgFIgGABQghABgggFQgHgBgBgIIgJgEQgKgUgKgSIgDgDQgDgIgBgIIgDACIgBgFIAAgBIgCgCIgGgHIgDgDIgCgCIgEgEQgKgIgMgBIgCgBIgDAAQgCgJgKgFIgBgBIgWgNIgCAAQgVgKgTgMIgBgBQgagRgegOIgBAAIiCg9IgBAAIAAgBIgBAAIgKgCIAAgBQgKgJgMAAIgPAPIgEAFQgHAOgMAJQgJAIgLgFIgBAAQgigCgagKIAAgBQgHgFgEgIIgBAAQgRgNgNgRQABgJgEgFIAAgEQAAgLgFgEIAAgGIAAgBIAAgGQADgEgDgFIAAgBIAAgMIAAgBIgCgFQgEgGgFgEIgCgCQgBgFgDACIgBgBIgCgBIgIAAIgBAAQgHAEABAHIAAABIgDAAQgCgCAAgFIAAgEIAAgCQAAgEgCgEQgDgEgFgDIgCgBIAAgBIgBAAIgCgCIgBgBQgGgFgDgJIgBAAIgDgDIAAgCQgGgLgEgOIAAAAIgGgNIgBAAIgBgBIABgHQAFgDgCgKIgBgHIADgNQAIgUAMgNIgCgKIACgCIAFgEIAEgCIAGgFIASgLIAPgIIABgBIAAABIAAABQAGAFAJgEIAMgGQAOgHARgFQAWgCARgFIACgBIABAAIACAAIACgBQAMgEALgCIAYgDQAJgKAFgIIAAgBQgKgEAKgGIAAgBQgFgPALgGIABgBIAAgBIAggIIAAAAIANAAIACAAIAFgDIAAgBQAIACAGgEIAAAAQAbgEAagHQAbgHAdgBIAAgCQAKAAADgFIABgBQAIADAGgEIABAAQAKADALgCIACAAIAAgBQAQgBAFgFIABAAQAFAIAIgHIAEgDQAKABAJgCIABABQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAIgBAAgGIAAgBQAPgBAMACIAAAAIAIgCIAAAAQACACAFABIAAAAQAJAAAIACIAAABQAngBAiAFIAAABQAHAEADAIQABAAAAAAQAAABAAAAQABAAAAAAQABAAAAAAQAHABABAFQAHADAJgBIABAAIAMAFIAAABIAGgBIABAAIAOAGIACABIABAAIAFAAIAAAAQAkABAgAPQAgAQAVAZIABAAIAAABQALAHAEAGIAAABIATALIABAAQAEAHAEAGIABABQALAHgGANIAAABQAKAWAEAdIAAACQAHAaACAfIAAABQAGAMAIAJIAAABQA8AfA4AiIABABQAjASAiATIArAZIABABIAAAAIABABIAxAfIADAKIAFAIIAAACIABACIACADQgFgBgBAEIgCAKQABALgDAQQgEAOgLAGIAAABIgKAJIAAABQgBANgKAEQgEADACAEQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAAAIgCABIgCADQgDADgFACIgbAKIgiAPQgaAKgaAJIAAABIg9AUIAAAAIhSAYIAAAAIgwAOIgCABIgCABQgiALggANIg5gEgABJCYIAHADIABABQAlAbAGA6IABAAIgBAHQAAAIADAIIAAABIACAHQADAOgDARIAAACIAEAEIAAACQAOAHAMAJIAGAFIAAAAQgBALAFADIAAABQAdgGAZgIIALgEIANgFIACAAIALgGIAAAAIAAgBIBSgdIABAAIAAgBIABgBQAFgDAFgBIABAAIAAgBQAigLAegOIABgBIAAAAQAQgGANgJIgBAAQg5APgyAXIgBAAQgLgCgHADIAAACIAAAAQgvALgjAWIAAABQgEAEgEACQgFACgGABIAAAAQgMAFgMABIgBAAIgNgCIACgFIgBgFQADgBACgFIAAAAQAKgHAOgCIABAAQALgJAPgEIABAAIAAgBQAEgIAHgGQAAAAAAABQABAAAAABQAAAAABABQAAAAAAAAQAFAEAEABIADABQAGgEABADIAHgEIAEgFIACgBQAYgFAUgKIABAAIAAAAQgCgJgGADQgHgFAGgJQAFgKgFABIgBAAQgPgBAMgLIAAgBQACgEgFgJIAAgCQABgHAGgCQAEgCgEAAQgPABgRAGIAAAAIABABIgBAAIgDACIgHAEIAAAAIgCADIAAAEIAAABIAAACQgFgCgIAAIABABQAIAPgFAVIgBABIgDAEIgHAIIgJAFQgHAEgJACIgBAAQgMADgEAJIgBAAQgNADgNgEIgBAAQgJgDgIABIAAgEIgBgCIAAgBQgCgFgGgCIgCgBIAIgeIAAAAIAAgBIAAgBQAFgEAEgGIABgBIAAgBIADgCIAAAEQAAAVAKAOQALAPAOAAQAPAAALgPQAKgOAAgVQAAgUgKgPQgLgOgPAAQgOAAgLAOQgEAHgDAIQgQAEgPAGIAAAAIgIANQAAAKABAHIAAABIABABQAFAEAAAIQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgCAAgEgEIgBAAIAAAAIgFgFIAAAAIgGgHIAAgBIgBgGQgCgKAAgMQAKgRAPgLIAAgBQAEgBAFAAIABAAQAGgJALgDIAAgBIAAgBQAdgMAhAAQALABAHAGQAHACAJgBIABAAIAcgJIABAAIAAgCQATgCAQgGIABAAIAAgBQAGgDAJAAIABAAQA5gRA1gUIABAAQAIgJAKgGIABAAQAHgHAKAAQAlgBAbADIAAAAQgLgOgUgEIAAgBIhZg0IgBAAQgNgFgJgIIgBgBIhCgjIgMAAQgLABgDAHIAAABIAAABQgFAKgFgMQgDgDgFABQg5AMg2ANIgBAAIgPACIAAACIAAAAQgYAGgWADIAAABIg+AOIgCAAIgFABIgDgBIgHAAIgWAAQgYAAgWAFIgRADIgPADIgJABIgRACIgHgDIAAgBQgJAEgDgGQgJgQgHgSIAAgBIgBgCIAAAAIgDgIIgSAGQAFANABAMIgFgCIgBgBIgEgFQgEgFgIgCQgTgGgTgBIgCgBIgIAAIgBAAQgDgLgLACQgGACgBAHIAAABIAAABIgBAAQgegKgZgKIAAgBQgLgLgOAAIgBgBQgJgHgMgGIgBAAQgEgCgDACIAAgBQgKgJgPABIgBgBIAAgBQgJgCgCgDQgBgFgFADQgHAEACgHIgBAAQgIABgGgGIgIgDQgKgDgGACIAAABIgBgBQgIgBgJgEIgKgHIgBAAIgBAAQAEgCADgDIAEgFIAGgHIAEgEIACgCQAIgKAGgMIACgDQALgWAGgYIAAgBIAGgSIABgCIABgGIADgDIAMgRIABgCIAIgMIAHgJIABAAQABAJAFAHIAAABQAAAPAFAIIAAAAQACABADgDIAAgBQAQACAKAHQAFACAEAAQAHALAPADIAAAAQAaAHAYALIAAAAQAQALASAJIABABQAHALAFANIABAAIAIADIAAADIAAADIAYABIABgIQABgIgDgFIgBgCQAEgGAGgCIAAAAIAMgRQAEgEAFADQAEAFACAGIAAABQAGgCADACIABAAIAngJIACAAIAAgBIAMgFIABAAQAWgBASgEIABAAIAAgBQAigEAhgGIABAAIAAAAIAHgBIADAAIADgBQAbgEAVgHIAAABQAcgBAUgHIACAAQAHACAJgBIAAgBQAHgBADgDQAJACAHAAQAPgCAFgFIAAAAQgXgJgUgLIAAgBQgDgEgEgCIgdgLIgJgEQgTgJgUgBIgBgBIgQgHIgBAAQgTABgQgFIABgBQAHgCAJAAIgBgBQgrgPgqgOIgCAAQgNABgMgEIgBAAQgFAFgJgCIAAABQgCAFgHAAIgBgBQgMgGgRAHIAAAAQgbAAgaAJIgBAAQgZAEgcACIAAgBQgYgFgQAKIgDgBQgSgFgRAJIAAAAQgSAAgNAIIABADQgDgCgEAAQgFgBgDADIgDgDIgJAAIgJAAIgKAAIgBAAIgBAAIgEADIgJAJQgIAIgHAJQgHASgLAPIgCAEQgHAVgFAWIgBADQgEALgHAKIgBACIgDAEIgFAGIgDAEIgJAMIgBABIgEAHIAAAAIgDAFIgBAAIgBAAIgCgIIgBAAQgNAIAFgJIAAgBQgMgCgGgHIgCAAIgDAAQgGABgCAEQAAgMgJABIgBAAQgGgJgJAHIgBgBQgDgFgEAAIgBgGIgBgCIgBgCIgCgCIgCgBIgEAAIgKAAIgLgBIgDAAIgFADQgMAIgIANIgBABIgDAFIAAABIgDAJIgCAMIAAAAIAAAIIAAAGIAAACQABAIAEAGIADAEIAJAWIABACIAKAJIAAAAIAHgaIABAAIAAgBIAAAAIAIgMIAIgOQACgEAFgCIADgBIAEgBQAIACAHABQAFAAACgDIAHAJIAAABIAPADIAAgBIAPAIIABAAQAIADAEgCIABgBQALAKAKgDIAAABQAAgBAAAAQABgBAAAAQABAAABAAQAAAAABAAQACABAEAEIAAAAQABgCAFAGIADABIADAAQABAHAKAFIACAAQgBAOAIANIABABQAFAYAAAhIAAACQADADADAFIAAABQAFAIAJgCIABAAQAGACAEAFIAAACIAAAAIAAAAQAGABACACIAAABIALADIABAAQAEAGAJABIABAAQASALAWAHQAGACAGAFQAOAEAKAIQAEACAHgBQAhAVAmAQQAHACAGAEQAaAPAYAQIACACIABAAIAIABIABAAQACAFAGABIACAAQAEAGAHAEIAAABQADAAACACIAAAAQAPAFAKABQABAAAAAAQAAgBABAAQAAgBAAAAQAAgBgBgBQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAAAAAIAAgBIAAgIIAAgCIAAgCQADgGAAgIIAAgCIAMgZIABAAQARgFAVgCIACAAIACgBIAAAAIAAgBIAvgDIABAAgAAWDEIgCABIgEAIIgDABIAAABIAAAHIgDANIgBAIQgBAMAAANQAFAYAPAUIACADIABADIAAADQAKAFAGALIAuADIABgDIADgGQADgCAEAAIgDgDIgBAAIAAgBIAAgEIAAAAQgCgPAAgRIAAgDIAAgBQgDgJABgNIAAgBQgCgKgEAHQgBAQgCAOQgFAagXgFIgMgEIgCgFIgJgRIgBgEQgDgQAAgQIAAgEIABgFIAAgCIADgHIAAgBIAAgBIADgGIAAgBIACgDIAAgBIgBgBQABgHgFgEIAFgLIABAAQAIgCAHACIACAAQgCAEgHAEQgGAEgBAIQAHgJALgGIAAAAQALgBAGAEIABAAQAGAIADALIAAACQADgFgBgHIAAgCIAAAAQAAgNgIgFIgHAAIgNgBIgCAAIgVAAIAAABIgGALIAAABIgDgBIgEgBIgEADgABHEDIABgMIAAgBQACgNgFgFIgCAAQgJACgDALQABAGADACIAAABQAAABAAABQAAABAAAAQgBABAAAAQAAAAgBAAQAEAIAGAGIAAgBQAEAEAAgMgAHCDSIABAAQAOADAOgGIAbgMIAAgBIAAgFIAFgTIAEAKQAKAPAOAAQANAAAJgPIAFgLIAGgGQAGgJAAgNQAAgNgGgJQgDgEgEgCIgEgIQgJgQgNAAQgOAAgKAQIgDAIQgNADgMAEIgCAJQgDARgPAEIAAAAQgoAGgeAJIAAABQgFAAABAEIgCAAIgWAGQAUAAAQgIIAAAAQAUgEAOABIABAAQAFAIANgHQAGgEAFAAQAGAAAFADQgCALgPADQgPADgEAHQAJADAHgFIAAgBQAMgCAFAFIAAAAQADAIgHAEIAAAAIgCAAQgOAAgHAJgAJJChIAAABIgHALQALAPAQgIIABAAQAJgIgDgTIAAgBIAAgBIAAgBIAAgLIAAAAQgCgLgGgGIAAAAQgHgGgDAHIABAEQADALgFAOIgBAAQgDAFgEAEgAnKBtIANgBIACAAIAEgCQAGAFALgCIABgBQAVgKgDgaIAAgBIAAgBIACgGQADgRAAgTQAAgGgCgEIgCgCIgDgDIgBAAQgFgCgHABIgBgBIgEgEIgBAAQgEgBgEAAIgBABIgCABIgBABIgBABQgEAFACAHQACAJgBAKIAAAMIAAACIABAFIgFAIIAAABIAAABIgBAAIgEAAIgKgCIgEgBIgBgBIgIgEIgHgFQgIgHgEgLQgIgXALgUIADgKQADgIgBgEIgCgEIgBgEIgBAAIgBABIgEgCIgEAAIgCgBQgDABgDADIgBACIgDAEQgNAbAFAeIABAJIABABIABAGIAAADIAAABIAAALIAAABIAIAQIACAFIAAABIAMAIIgBAFQAAAFADADQACACAFABIANABQAEACAFgDgAndAjIAAADQADATAMAIIABgBQAHgHACgNIgBgBQgJgIgMAAIgDAAgAnEAmIABAAQABAFAAAHIAAABIABAAIAAgBIABgEIAAgBQADgTgFgTIgBAAQgCgIgFgHIAAACIAAABIAAAAQgBgKgJAEIgBAAQgJAFgCAJIAAgBIAAgCIgBAAQAAADgDACQAFAQABARIAAAAIAAgBIAAgFIAKgBIABAAQAHAHAIAAgAheh1IgBAAQgKAGgCAJQgBAGACAHIACAEQACAfAOAaIAGAIQACADADABIACAAIAAAAIAFABIACAPIAAAAQAFAAACAJIACAAQAEABAEAHIABAAQAHABAIgDIAAAAIAKgIIABABQADgDAFAAQADAEADgCQAFgEAFgCIADAAIACAAIACAAIABAAIACgBQAVgGAXgEIAMgDQAGgCAEgDIAGgEIAAgBIgBgFIAAgFIAAgCIAAgJIABAAQAKgIALgGIABgBIAFgKIABAAQAOgHAIgMIABAAQAIABAEgJIABgBQAPgEALgJIABADQAHAAAIgGIAAgBQALADALgFQABAEAFAAQAFAAADACQAEACADAEIAAABIABABIADAAQABAAAAAAQABAAAAABQAAAAAAAAQABAAAAABIgBADIgBACIAAABQAGAQgFAPIABABIABgBQACACgGAEIgBAAIAEADQgBADACADIAAAAIgCAAIgVAHIAAABIAVgGIACAAIABgBIABABIADADIAFAAIgBgTIAAgGIgBAAIgBgBIgCgPIAAgFIgBgBIgBgBIgCgIIgBgCIAAgCQgDgBgCgCIAAgBIgCgCIgFgCIgNgJIgHgIQgGACgGgBIAAgBIAAgCIAAAAIAAgBQACgCADAAIADAAIAEABQAJACAHAJQAEAFAGABIACAAIAYAVQAIAEAIABIAXAAIAIACQgCgegNgbIgBgBIgCgKQgEgPgLgGIgGgCIgIgCIAAAAIgBgBQgTgDgPAFIAAAAIgEAAIgCABIgHABIgFAAIgJABQgDgBgGABIAAABQgVACgWAFQgMABgIADIAAAAIgDABIACADIAAABQAEACACADQAEAAADAEIAKAFQADADAFABIABACIAAABQAGABABAFIAAABIAAAAIgBACQgEABgCgEQgDgBgBgDQgIgDgGgGQgDAAgDgCIgBgBIAAgBIgMgGIgCgGIAAgCIAAAAIAAAAIgEAAQgUABgGAJIgBAAQgFgFgLADIAAAAIgEABIgMAAIgNABIgNACIgHACIgaAIIgWAGIgNAEIgLADQgIADgEAEQgDADgBAEIgCACIgBAAIgDAAQAAAAAAgBQAAgBgBAAQAAgBAAAAQgBgBAAAAIgCgCQgDgBgFgBIgCAAIgHADgAB7gsQgGACgCAGIgBADQgCAEAEADIADAEIAEACIADABIAAAAIAFAAIAJgCIADgCIAEgDIACgCIACABIACAAIADABIAAAAIAEgCIAFgFIAAgBIADgDIAAAAQgDgFgEgDIAAAAIgDACQgGAHgIAFIAAABIgBABIgGADQgBADgCAAIgCAAIgBgCIAAgBIAEgFIAAgBQAEAAACgDQAKgGAHgKIABgBQgFgEgDgFQgFAEgCAGIAAABIgBACIgBAAIgCgBIgFADIgEACIgCAAIgCAAIgEAAgAoRg2IAAAQIAAACQABAKAEACIABABQACgKALAEIABAAIAHgKIABAAIAAgBQAEgCADgDIAAgBQAKgCAHgEIgBAAQgEgGgMgBIAAAAQgJgBAHAFIAAABQgJgBgJgIIgBAAQgHAEgHAFgAkIg8QALAKAOAAIABABQAJAKANAFIABAAIANAEIABgBQADgMgIgQIAAgBIg6AAIAAAAgAC+hXIABAAIABABIAAACIAAABQgEAGgGAFIAAABIgBABQgKAFgDAKIAAACIgBADIAAACIAAABIADAEIABgCIAGgCIADgBIACgBQAHgEAFgGIAFgKIACgFIABgEIAAgFQgBgDgDgCQgEgCgIAAQgFACgCAFIgBADIgEAGIgEAEIAEgDIAIgHQAEgDACgEIAAAAIACAAgAD5hdIAAACIABAHIAAAEIABABIAAABIAAACIAAADIABABIABABIAAAFIAAACIAAABIABABIAAASQAHgBAFAAIAFAAIADgBIADAAIAQgCIADgBIAHgCQABgBAAgEIAAAAQADgHAAgIIAAgKIAAgBQgSACgRgEIgRgFIgCgDIgEgEIgCgCIACAFgACjhEIgFACIgDACIAAAAQAEAFAEADQABgHAGgGIgHABgAlZijQgEAPgHALIAAACIAAABIAAACIgGAmQAKANATAFIAAABIABAAIAeAMIAAgBIgTgNIAAgBQgDgIgHgEIAAgBQgBgSgGgOIAAgBIAAgFIAAgBQgBgIgDgFIAAgBIAAgKQgCgEAAgGgAkHhHIAAABQAGAAAFgCIAAAAQAXACAXgCIABAAQgCgNAEgNIAAgBIAAgBQgEgWgHgUIAAgBQghgSgigRIgBAAQgIgBgGgEIgBAAIgIgCIgCgCIgEgBQgEgCgGABIgDADIgBACIgBACIgCAFIAAAAIAAABIgBAFIgBAGIABAJIABAFIADAIIABADIABAAIAAABIAAAAIABACIACAEIAAAHIAAABIACADIADAPIACAFIACAEIAEAFIAAABQADAHAGADIAAABQAEgBAEAEIABABIANAEIABABIAEgBQADAAAFACgAluitQgKAYgJAaIAAABQgCAHABAJIAAABIgSANQAHAEAJABIABAAQANgEAAgQIAAAAQAEgnAMgdQAFgKgEAAQgFAEgEAIgAnni5QgPAAgHAKIgDAFIgBADIAAACQgBAIAIAFIADAAIABAAQAGAIAIAGIAKAHIAEAAIAVABQAGACAIgBIACAAQAIgHAFgKQAHgKACgLIABgCIABgFQADgDAAgHIgCACIgBAAIACgEQAEgKgEgEIgEgDIgIgCQgGAEgEAGIgEAFIgBADQgDAAgGACIgQAAIgPAAIgJAAgAKBEbQACAEgEABIgBABIgDACIAGgIgAIJESIAAAAIgBABIABgBgAnsBZIgBAAQgDgGgFgEIgBAAQAAgHgCgEIgBAAIgBgKQAIARAPALIAAAAQgEACgBADIgEgCgAnUAzIgCgDIAAgDQAIgDAEAEIAAABQgDAGgDAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBgAEPhOIAAABIAAABIgBABIABgDg");
	this.shape_8.setTransform(-0.4,-15.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.WhichOneBubble2still, new cjs.Rectangle(-84.1,-69.5,167.4,133.8), null);


(lib.V = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0066").s().p("AgfCBQgVg2gahjIgPgxQgKgkAAgMQAAgIAGgEQAFgGAHAAQAOAAAEAPIAXBaQARBAAQAwIA+isQAKgbAMgNQAFgHAIAAQAHAAAFAFQAGAGAAAIQAAAEgDAGQgLAQgHATIg9CkQgIAXgLAVQgFALgKAAQgOAAgFgNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.4,-14.2,20.8,28.4);


(lib.T = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0066").s().p("AgMCBQgGgFAAgHIACgIIAAgIIgBgaIgBgaQAAgZgEgtQgEgxgBgVIgPAAQgnAAgWgGQgPgDAAgOQAAgHAFgGQAFgGAIAAIAdADQARADAMAAIAfgBIAgAAIAnACIApACQAHAAAFAFQAGAFAAAIQgBAHgFAGQgFAFgHAAIgpgCQgagCgNAAIgNAAQABAYAEA3QADAxAAAdIACASIABATQAAAMgEAJQgFALgKAAQgGAAgGgFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.8,-13.4,23.7,26.8);


(lib.J = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0066").s().p("AhIB6QghgZAAggQAAgVASAAQASAAAAAVQgBAPAVAOQAUAOASAAQANAAAGhZQADgpAAg/IgBgTIgKAAIgVAAIgUgBQgIAAgFgFQgGgFABgIQgBgSAZAAIARAAIASABIAggBIAigCQAoAAAAAVQAAAHgFAFQgFAGgIAAIgLgBIgLgCIgUABIABAVQAACCgSA7QgMAogcAAQgeAAgfgWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.6,-14.4,21.2,28.8);


(lib.I = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0066").s().p("AhNCBQgFgFAAgIQAAgHAFgGQAFgFAIAAQALAAAbgEQABgOAAgSIgBgdIgBgeQAAgnAFg9IguABQgIAAgEgFQgGgFAAgIQAAgRARgBQAOgBAnAAQAiAAA1AHQAQACAAARQAAAIgGAFQgGAEgGAAQgMAAgRgCIgcgEQgEAzAAAuIABAeIAAAfIgBAeIA3gBQAIAAAFAFQAFAGAAAHQAAAIgFAFQgFAFgIAAIgdABIgeAAQgKAAgXADQgYADgLAAQgIAAgFgFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.6,-13.4,17.4,26.9);


(lib.E = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0066").s().p("AhMCIQgRgQgBg4IABgZIABgdQgCgEAAgEQABgGADgEQADgzABgZIgCgTIgCgSQAAgWARABQAIAAAGAEQAUgFATgDQATgDAPAAQArAAAaAKQALAFAAANQAAAGgEAFQgFAHgIAAIgFgBQgegIgcAAQgOgBgQADQgRACgTAGIABASQAAAZgDArIBMgHIAqgEQAHAAAGAFQAEAFABAIQAAAPgQACIh7ALIgBAXIAAAWQAAAmAGAIQADAEAYAAIAggBIAhAAIAKgBIAKgBQATgBAAATQAAAPgPADQgQADg2AAQg3AAgPgOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.4,-15,18.9,30);


(lib.D = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0066").s().p("Ag2CNQgUgEgKgIIgCAAQgIAAgFgFQgFgGAAgHIACg3IACg3IgBg9IgBg9QAAgIAHgIQAIgHAHgBQAEAAAYANIAfAOQAxARAjAjQAqAqAAAxQAAAegOAcQgOAbgZARQgbASgyABQgNAAgQgFgAhEBhIAEADQAPAKAYAAQAnAAASgMQARgMAKgTQAKgUAAgWQAAgwg2gjQgRgMhBgdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.5,-14.5,21,29.1);


(lib.C = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0066").s().p("AhJBsQgYgbAAglQAAg7Ayg+QAqg1ApAAIAPABQAIABAFACQAGgJAKAAQAMAAADAQQADAOAAAVQAAAHgEAFQgFAIgJAAQgLAAgGgNQgEgMgFgDQgDgBgPAAQgZAAgfAnQgqA0AAAuQAAAXAPAQQAPARAVAAQARAAASgJQALgGAVgPQAKgIAFAAQAHAAAFAGQAFAGAAAHQAAAIgGAFQgvAqguAAQgkAAgagcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.7,-13.6,19.6,27.2);


(lib.A = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0066").s().p("AA9BbQgEgQgHgnQgRACgeAHIgtAJQgKAXgVAtQgGAJgJAAQgHAAgGgFQgFgFAAgHQAAgJAbg3QgEgFAAgGQABgOAQgEQAVglAegxQAphDAKAAQAOAAAFAUIAmC0IAKAcQAEAOAAAFQABAHgGAGQgFAFgIAAQgQAAgMgqgAgWANQAWgGAqgHIgOhDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.7,-13.2,21.5,26.6);


(lib.daydreamingguystill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF33").s().p("ACICjIgKgGIAEgGIAAAAIAGgKIAEgHQALgWAHgWIAGABIgBAJIAIgqIABAAIAFABIACAQIgTBOIAAACIgjAkIgBABIABgBIAAAAIAHgCIgRAWIAMgFQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAIgEAEIgZAHgACZCWIgCAJIADgLgACYCKIgBABIABgBIABgBgACoBcIACgHIgBAAgACoCnIALgQIAjhRIAEgMIAAAAIAAgBIACgEIAAAAIABgBQACgMgCAAQgDABgIAOIgHAYIAAABIgIAYIgShwIgOgUIACgDIABgBIAAAAIAAgBIgBAAIgHglIADgBIAHAFIABABIAAgBIgIgWIgCgDIACgBIAMAGIABAAIAAAAIAAAAIAHADIAAAAIACAKIgCACIgBADIAAAAQAAAAAAABQAAAAAAAAQAAABABAAQAAAAABAAIAAAAQADAAAKgEQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAAAAAIANAWIAGAHIgBABIgMgIIAeBLIgJg2QAIAPAEAOQAEAMABANIABAUIgBALQgCAVgHAWIgCACIgVAbIgBgBIgGAIIACABIgkAsgADEBNIABgGIgBgFIgDAAIADALgADhA8QADgDADgCIAAgKgACzgdIAAgBIgBgEQgBgIABgEIAAgCQABgCAEAAIACABIAIAGIgGgGIgEgCIAAgBQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAABgBAAIgBADQgBAFACAIIAAAAIAAABIABAFIAAAAIAAAAgADFguIAAABIAAAAIABAAIgCgEIgDgCIAEAFgACxg9IAFAFIAAAAIABABIgBgCIAAgBIgEgEIgBgBIgBgBQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAIAFAFgACthQIAAABIAAABIACADIgBgFIgBgEIAAAAIAAAAIAAAEgADhCkIADgLIAGgOIAfgnIAFgDIABgCQAIgNAFgDQAEgDABAIIAAAHIgGAJIgUAYIgBgBIgCgBIgeAugABdBaIADgGQATgdgPALIADgOIAAAAIACgCIgBgBIAJg3IAFABQAIAUgHARIgCAEIAAALIAEAAIACgBIAFAEQgOAbgPASgAECAzIABgBIgEgvIgDgKIgahEQAIgIAGAHQAGAGADAJIAJAiIAAABIABAAIgBgBIgHghIABAAIgEgHIgDgIIAWAAIAAACIABAAIgBgHIgCgMQAEAAADADQANALAHAOIgBABQABADAAADIgRgOIABgBIgCgBIABACIAWA8IABAFIgGAoIACABIgNAIIgTAcgAEUAsIACgGQACgCgBgEQgGARADgFgAEFglIAOAKIAMA3IgNhEgAENhAIAAAAIABAAIgBgFgACWAmIABgnIAQALIAAADIAAAAIgKAbgAjsAbQgDgDgBgFIgBgDIABgEIABgBIABgBIgBAAIAGgNIgJgRIABgBIAAgBQAJgaALAUIAAACIgCAHIACAcIAAACQABAFgCAGIgDAFIgDACIgDAAQgDAAgCgCgAlAgKIAFgUQAEgLADgDIACgBIACAAIgBgCIgBAAIABgBIAMgVIAbgUIgOAkIgCAFQgKAHgHgCIADAFIADAIIACAGIAAAAIgDABIgTAPgAE4gOIgEgUQgEgcAHgBIAIAfIACAOQABAHgEAAQgCAAgEgDgACMgxIgBgBIgBgBIgCAAIACABIgHgBIgNgNIgugUIBOAIIAAAAIABABIALAggAgDgtIgBgHQgDgIgPAMIABgYIACgSIAAAAIAAAAQAAgFgHAAQAAABgBAAQAAAAgBABQgBAAAAAAQgBAAAAAAIgIgHIgDgGIAgALIgfgVIgQgUIAUACIgCgCIAAAAIgSgGQgIgKALACIABAAIAAgBQgMgDADAJIgFgGQgFgGAMABQAKAEAIgDQATAFAOAKIgBABIACAAQAGABADAEQAFAFAAAHIAAABIABAAIAEAIIAFAPIABADIAJgLIgSgjIABgBIANAKIAAgEIAHALIADAFIAEgMIgEgKIgsgjIglgNIgRgFIAxAEIAZALIAAABIAeAlIANAMIAHAFIACAAIACABIAbARIAHgLIAggIIAAAAIAAgBQAJgEgDgGIAAAAIAVgLIBMARIAAABIAXAPIAWANIAAABIgbgCIgSgNIgGgEIgygGIgBAAIgNAIIgHACIAAAAIgdAEQgFADgBADQgBACADACQAEADACgEIABgCIACADIAAAAIACACIASAVIgBADQgcgMgdAAIgDAAIgSACIAAAAIgBAAQgNACgMAFIAAgBQAAgBAAAAQAAgBgBAAQAAAAAAAAQgBAAgBAAQgJgKgEAAQAAAAgBAAQAAAAAAAAQAAABgBAAQAAAAAAABIACAHIAAAAIAPAFIABAAIAAAAIAuAIIgBACIgZAAIgvgLIgCAEQgDAGABAEIABACQABAEAGAFIAXgIIAaAEIAHAGIgDACIgLgEIhDAKgAAIhPIgHABIgBACQgEADgEACIAOABIAEgCIADgEQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAAAAAgBIgCAAIgCAAgAgKhmIAQANIgEgTQgEAFgHAAIgEgBgAAdhqIAAABIgBAEIAAABIACACQAEABALgHIACgCIgIgBIgCABIgBgBIgHgBIAAACgAC+iDIABABIAKAAIgdgJgAjfg8IASgLIgHASQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBgBIgFABQgGAAAEgJgAjGg5QADgIAPgSIAFgEIAegLIADADIgxAqgAj0hOIAAgBIABgBIALgMIAAABIgEAMQgFAFgCAAQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAgBAAgBgADchSIgYgTQgEgDgCAEQgGAIgEgDIgBAAIgDgEIARgHIAAAAIAEgBIAKgCIAAAAIABAAIgBgCIAAAAIABgBIABAAIAAAAIACABIAFADQATAIgLAPIgCADIgBAAIgBAAgAjlhXIgDAAIAAgEIABgCIACgEIABgBIABgBIANgHIAAgCIABAAQABgBABAAQAAAAABAAQAAAAABABQAAAAAAABQAAACgCAFIgRAOgAkDh1IAAgBIAbgOIACAFIgdASIgCAAQgFAAAHgIgAiaiIIADAAIAAgBIAGgDQAQgFgIAJQgDABgCACIgBABIgYAOgABBiGIgBgBIgDgJIgwgnIgBgBIgPgPIAAgBIgCgCIgCgBIgDgBIgBgBIgBACIgEgBIg8gLIAfgCIAAgBIAEAAIABAAIAdgBIAiAFIAGAAIABgCQAYAIAMAVIAPAfIABACIgDACIACAQIABAIIgCgEIgDAJgAjIipIgCgBIAAgBQgFgFAAgDIAIgIIACAAIAVgIIAZgKIABABIAAgBQAHgBgEAHIAVACIgcALIgBgBIAAABIAAAAQgVAJANAFIAAABIAEgBIAWgHIBSABIAEABQAKAEAHAHIgVgDIhOACIgFgEIAAgBIAAAAIAAABIABAEIgZAFIgFAAg");
	this.shape.setTransform(16.8,-49.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B1D16").s().p("AAAABQgDgKAFANIgCgDg");
	this.shape_1.setTransform(140.6,61.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7E9092").s().p("AgIgPIAAgEIARAhIAAAGg");
	this.shape_2.setTransform(140.7,66.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B4A99E").s().p("AAagEIAJAAIhGAJg");
	this.shape_3.setTransform(128.2,62.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#898882").s().p("AANgOIgwAIIgJAAIAAgBIA7gKIAeAfIAAAEg");
	this.shape_4.setTransform(135.3,62.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#70655A").s().p("AAtgFIAAABIg9AJIgBAAIgaABg");
	this.shape_5.setTransform(126.3,62.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#757069").s().p("AgrAFIAAgBIBXgKIgBACIhCALg");
	this.shape_6.setTransform(125.9,61.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#564B41").s().p("AgFgBIAAgBQANgJgCAOIAAABQgCACgEABQgGgBABgHg");
	this.shape_7.setTransform(129.4,57.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B2A69E").s().p("AAAAJQgLgBAAgKIAAgCQAHgHAMAEIACAAQACACgBAFIAAAAQgGAFgFAEgAgJgCIAAABQAAAGAGABQADAAACgDIAAgBQACgIgEAAQgDAAgGAEg");
	this.shape_8.setTransform(129.8,57.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7D6C5E").s().p("AANgJIgFAFIgBABQAAADgDAEIgDACQgFAEgIAAg");
	this.shape_9.setTransform(121.6,58.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#90837A").s().p("AABAFQgGgBABgGIAAgCQALgFgCALQAAABAAABQgBABAAAAQAAABgBAAQAAAAAAAAIgCgBg");
	this.shape_10.setTransform(125.5,58.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#7C898B").s().p("AALA2IAVgRIhEhdIBJBfIgbASg");
	this.shape_11.setTransform(122.8,49.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A89082").s().p("AgWALIArgXIAHgCIg3Adg");
	this.shape_12.setTransform(125.3,56.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#81726A").s().p("AgIgFIAAgBIAAAAIABgBQAPgDABAPIAAABIAAABIgBAAIgFABQgIAAgDgNgAgBABIACADIgCgHIAAAEg");
	this.shape_13.setTransform(140.7,61.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#946F5E").s().p("AgHgKIAAgBIAPAXg");
	this.shape_14.setTransform(138.9,61.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#746B62").s().p("AgmABIAMAAIgNACgAAmgCIACAAIAAABg");
	this.shape_15.setTransform(134.1,60.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#706356").s().p("AAAAAQADAAACAAQABAAABAAQAAAAgBAAQgBAAgCABIgDgBgAgFABIgBgBIAEABIgDAAg");
	this.shape_16.setTransform(135.4,57.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#382B1F").s().p("AAAACIgDgBIgBgBIAAAAIAGABIADABIgFAAg");
	this.shape_17.setTransform(135.1,57.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B6ACA3").s().p("AgMgGIgBgBQALgGALAKQADADACAEQgDAEgEACIAAAAQgQgCgDgOgAABAAQACAAABAAQABAAAAAAQgBAAgBAAQgCAAgCAAIgIgCIAAABIABABIAAAAIAEAAIADAAIACAAg");
	this.shape_18.setTransform(135.6,57.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#7E786A").s().p("AgDAEQAPgPgOAPg");
	this.shape_19.setTransform(137.8,54);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#241810").s().p("AgLACIAAgBQApgOgfARIgBABIgEABQgEAAgBgEg");
	this.shape_20.setTransform(140.1,50.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#746C62").s().p("AgCgDIABAAIABAAQABAGAGgDIABAAIAGAAIgbAEg");
	this.shape_21.setTransform(139,51);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B19181").s().p("AgDAIIACgDIAFgMIgBAPg");
	this.shape_22.setTransform(150.2,67.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#27190E").s().p("AAAABIABgBIgBABg");
	this.shape_23.setTransform(149.8,68.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#768888").s().p("AAAAEIAAgCIAAgFIABAHg");
	this.shape_24.setTransform(141.7,68);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#493930").s().p("AgDAEIAAgBIgCgHIACAAIAJAEIgCADIgBAAIAAABIgCABIgEgBg");
	this.shape_25.setTransform(143,64.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#99857C").s().p("AACAEIACgEQAGADgGABIgCABgAgGgEIACABIgCAAIAAgBg");
	this.shape_26.setTransform(143.1,64.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1F1509").s().p("AgBgCIABgCIABAAQACAJgBAAQgBAAgCgHg");
	this.shape_27.setTransform(149.9,66.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#1F150F").s().p("AgBAFIAAgPIABgBIAAABQADAWgCAAIgCgHg");
	this.shape_28.setTransform(151.8,59.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#1E120B").s().p("AgCgCIABAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIACADIgFgFg");
	this.shape_29.setTransform(157.5,57.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#24170D").s().p("AgMAAIAEAAIAWABg");
	this.shape_30.setTransform(160.6,57);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B9ADA5").s().p("AgDAFQAPgHgWgFIgBgEIAYAAIgNAYg");
	this.shape_31.setTransform(157.3,54.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#816E63").s().p("AAAAGQAEgEgFgEIgDgCIgCgBIAAgBIABAAQAVAFgQAHIgBABIABgBg");
	this.shape_32.setTransform(156.9,54.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#3A2E2B").s().p("AgDgFIABAAIACACQAGAFgDADIgDABg");
	this.shape_33.setTransform(156.6,54.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#AA9C93").s().p("AgGADQgDgFAAgJQAIgGAHAIIABABQAHALgIALIAAABQgIgBgEgLg");
	this.shape_34.setTransform(152.6,54.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#6C6358").s().p("AgcABIAhgBIAYABg");
	this.shape_35.setTransform(114.1,63.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#AEA79D").s().p("AAKABIgYgBIAdAAIgFABg");
	this.shape_36.setTransform(116.1,63.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#9A8D85").s().p("AgkAFIAFgDIAqgEIAagCIhIAJIgBAAg");
	this.shape_37.setTransform(120.8,63.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#846C60").s().p("AAVgKIgiATIgHACg");
	this.shape_38.setTransform(116.5,60.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#7C7367").s().p("AgcgEIAHgCQgEAIAFADIgVACgAArgBIAAABIgOABIAOgCg");
	this.shape_39.setTransform(117.3,62.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#919390").s().p("AAZgLIgBACQgBAFgGAEQgHADgKAAIgYAJg");
	this.shape_40.setTransform(121.5,56.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#7B807E").s().p("Ag0AhIBRg7IAYgJIhlBHg");
	this.shape_41.setTransform(116.1,60.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#615248").s().p("AADgEIgCACIgBAAIABABQgBACACADIACABQgOgIANgBg");
	this.shape_42.setTransform(117.8,40.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#A79184").s().p("AAAAAIACAAIgDABIABgBg");
	this.shape_43.setTransform(117.4,37.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#41372E").s().p("AgPgDIASABQgKAAAXAGIAAAAg");
	this.shape_44.setTransform(157.6,47.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#3E2F25").s().p("AgNAAIgBAAQgYgGALAAIALAAIAvANg");
	this.shape_45.setTransform(160.6,48.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#463A32").s().p("AAMAAIgFACQgngHAsAFg");
	this.shape_46.setTransform(153,46.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#B49F92").s().p("AgSAMIAmgdIAEAAIgvAjg");
	this.shape_47.setTransform(154.5,43.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#6B5648").s().p("AgVARIArghIgDAEIgnAdIgBAAg");
	this.shape_48.setTransform(154.7,42.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FDFCFA").s().p("AAAAAIABAAIAAAAIgBAAg");
	this.shape_49.setTransform(152.5,42.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#6B6C64").s().p("AgVAPIAAgBIACAAIgCgLQAIAEAAgIIAAgBIABAAIAjgPIgtAig");
	this.shape_50.setTransform(154.6,41.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#806D60").s().p("AAFAHIACgEIAAAEIgBAAIgBAAgAgCgEIgEAAQAMgGABAJQgCgDgHAAg");
	this.shape_51.setTransform(152.7,40.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#32281F").s().p("AgCAIIgFgRIAFAAQAHAAACADQACACgCADIgDADIAAABQABAHgEAAIgDgCg");
	this.shape_52.setTransform(152.8,40.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#BEBAB4").s().p("AgTAVIgLggIAMgFIAPAMIAhgRIABAAIAAADIgIAJIgjAOIABgBIAAgDQACgDgCgCQgBgJgNAHIAEARIACALg");
	this.shape_53.setTransform(154.6,40.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#6E615A").s().p("AACAHIgDgEIAAgDIgCgBIgCgHQABAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAIAGALQABABAAABQAAABABABQAAAAAAABQgBAAAAAAIgDgCg");
	this.shape_54.setTransform(145,45.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#604E41").s().p("AgRAGIAjgLIggALg");
	this.shape_55.setTransform(147.2,40.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#6D6055").s().p("AAVgDIgYAAIA0gTQgNAHgCAKIAAACIhSAagAAqgJIAEAAIAAACIgIADIAEgFg");
	this.shape_56.setTransform(141.2,42);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#C5B8B2").s().p("AgDADIACgDIgLgMIARAJIgEAEQgJANAVgOIgBACIgMAKIgCABQgEAAADgKg");
	this.shape_57.setTransform(151.1,42.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#8B8985").s().p("AgGAAIABACQAPABgMgNQAAgBAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAIAAgEIAKAMIgCAEQgDAMAHgEIgHAFIgGAEg");
	this.shape_58.setTransform(150.4,43.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#3C2F2B").s().p("AgCAIIgBgEIgBgLIACAAQAAABABAAQAAAAABAAQAAAAAAABQAAAAAAAAQAMANgNAAIgBAAg");
	this.shape_59.setTransform(150.1,42.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#332A20").s().p("AgmAUIAAgCQACgKAOgHIATgBIAJgJIATgCIAMgIIACAKIghALIgjAMIgFAFIgBAAIgDABg");
	this.shape_60.setTransform(148.4,39.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#767472").s().p("AgHACIAOgFIAIgBIgLAIIgSABg");
	this.shape_61.setTransform(147.6,39.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#E5DAD2").s().p("AgeAGIAbgJIgIADIgGAEQgRgDATARgAASABQAGgMgHgBIAOgFIgMASIgBAAg");
	this.shape_62.setTransform(155.8,38.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#9C8E84").s().p("AhCAZIAAgBIAhgMIAhgMIBCgYIABAAQAAASgOAGIAAgDIAMgTIgOAGIgVAIIgbAJIgLAFIg5ATIgBAAg");
	this.shape_63.setTransform(152.4,38.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#463930").s().p("AgjAHIAvgVIANgCIALACQgJAAAEAGIACABIhBAYg");
	this.shape_64.setTransform(155.7,36.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#917A6B").s().p("AgSAgIAEgDQAggagIgfIgBAAIgKgCIAAgBIABAAIAKABQAGABADAFIAAABIgHAZIAAAAIAAABIgGAIIgUAVg");
	this.shape_65.setTransform(158.4,38.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#2C221A").s().p("AgvAzQgFgJALgGIAIgGIAMgKIAsgiIAJgJQANgGAAgSIAAAAIgCgCQgEgGAIABIABAAQAJAfgiAZIgrAiIgXATIgEgEg");
	this.shape_66.setTransform(154.6,40.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#A9A29F").s().p("AAJgCIAAACIgMABIgFACg");
	this.shape_67.setTransform(157.3,35.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#8B8983").s().p("AAegMIAHgCIAGgCIgvAVIgMAIIgTACIgHACg");
	this.shape_68.setTransform(152.6,37.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#62564B").s().p("AgjAJQAhgRgqAOIAAABIgBAAIgBgBIAJgGIARgGQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAAAgBIAAAAIAnACIAXAGIADABIgCAAIhKAIg");
	this.shape_69.setTransform(143.4,49.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#7F756D").s().p("AgCAEIgBgBQANgOgKANIAAABQAAAAAAABQAAAAAAAAQgBAAAAAAQAAAAgBAAIAAAAg");
	this.shape_70.setTransform(141.6,48.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#AA9E95").s().p("AgwAZIgHgLQAAgBgBAAQAAgBAAgBQAAAAAAAAQAAgBAAAAQACgEADgCIBGgvIADABIAAAEIAEADIgRAVIAhABIAKAPIgXgFIgmgDQAJgNgNAPIABABIgRAFIgJAHIgLAJIAdgGIBJgIIAEAHIhJACIgiAjQAOgRgQARIACAAIgGAGgAgyAwgAAVgyQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAIAGgDIAHADIAEADIAAABIgHAJIgHgNg");
	this.shape_71.setTransform(142.6,49.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#85776E").s().p("ABgAMIjAgTIgBgCIAGgDICFAMIA4ALIAAABIgCAAg");
	this.shape_72.setTransform(124.8,39.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#6A594D").s().p("AgCAAIABAAIAFABg");
	this.shape_73.setTransform(134.8,41.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#9D978F").s().p("AgZAOIBWgcIgHADIg1ASIgSAIgAg2AFIgGgCIAAgBQATABANAJIABABIgbgIg");
	this.shape_74.setTransform(140.7,40.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#30251C").s().p("AgeAPQgFgBgDgJIAbgGIAygNIgEAKIgXAGIgDAAIgfAMIgGABIgCAAg");
	this.shape_75.setTransform(129.1,45.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#A79187").s().p("AgOgXIACgHIAAABIAWAXIAEAjIgGACg");
	this.shape_76.setTransform(126.7,51.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#58493D").s().p("AgEgBIAEgDQAKACgKAHg");
	this.shape_77.setTransform(124.7,48.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#1A120E").s().p("ACSCTIgDgJIgSgiIgeggIg8AKIhYAMIgrAGIgdABIgiABIBmhIQAKAAAHgDQAGgEABgFIAbgSIhLhfIgngzIDAAVIAHACIAbAIIACABIAIABIATgIIAZAAIhGAbIgEABIghAGIAEgJIAmgLIgHgBIABAAIgGgCIgDAAIg0gLIgqgKIgtgFIgMgBQgNgBgHABQgOABAQAKIAPASIAsA0IAEAHIAGAGIAWA2IgsAYIgaATIgGABIgBAAIAAABIgLACIgqAXIgNAMIAVgCQAKAFAigIIAGgCIANgBIAUACIBCgMIAMgDIA4gJIAJAFIACABIARAXIAFAIIAIALIAOATIAGARg");
	this.shape_78.setTransform(127.3,53.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#BDADA2").s().p("AhjAeIABgCQADABAEgCIAhgLIACAAIA4gOIAEgBIBSgaIABAAIijA1IgTACgABbgaIAHgDIACAAIgKADIABAAg");
	this.shape_79.setTransform(135.9,44.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#8D7567").s().p("AAQAbQALgHgKgDIgFADIgrgzIADAAIATAWIAEAGQAGALAGACIAGAHQAKgHAHAKQADAEgCACIAAAAIgCAAIgFAAIgCAHg");
	this.shape_80.setTransform(123,46.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#78716A").s().p("AgMAEIACgCIAXgFIAAABIgZAGg");
	this.shape_81.setTransform(126.5,45.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#75695F").s().p("Ag2AEIADgBIABAAQACAIAGABIgBACgAAWgHIAhgGIg3ANg");
	this.shape_82.setTransform(130.3,45.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#D8CFC8").s().p("AgPAqIAFAAIgFABIAAgBgAgJAkQgHgKgKAGIgGgGQAEABADgEIAFgGIALAKIADAAQAHAKgJAEQACgBgDgEgAgSAQIABgBIAAABIgBAAgABTgRIilgWIAWAcIAGgKIAEANIABAAQAFAFACgHIABAAQgBgQgJAAIACgEIAGAFQACACAAADQACAGgBAFQAAAGgGgBQgMgGAJAQIgTgWIgWgZIgBgBIABAAIBOAFIArAIIA0ALIADABIAGABIgBAAIhSAXIgYAHg");
	this.shape_83.setTransform(127,44.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#78756F").s().p("AghAWIBSgWIAGAAIgmALIgyANIAAgCgAg2gWIAAgBIAsAKg");
	this.shape_84.setTransform(131.2,43);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#8D7D71").s().p("AgTAOIgPgRIgCgBQgCgDAAgDIAWAYgAgmgLIACgCQAHgBANABIAMABIArAFIAAABg");
	this.shape_85.setTransform(121.8,41.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#8E7E76").s().p("AAAAIIgBAAIgEgMIgBgDIAAgBIAEgBQAIAAABAPIgBAAQgBAEgCAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAgAgEgFQALAWgIgUQAAgBgBAAQAAgBAAAAQgBAAAAAAQAAAAgBgBIgBAAIABABg");
	this.shape_86.setTransform(122.1,42.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#2D221D").s().p("AgCgFIgBAAIABAAQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAEAJIgGgLg");
	this.shape_87.setTransform(121.9,42.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#AB978A").s().p("AhhggICYgOIACAAIA+gFQg8AVhtgBQgXABgXACIgWBQg");
	this.shape_88.setTransform(162.5,61.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#211A0C").s().p("AgIgCIAAgBIAAAAIAJABQARACgSADIgCABQgGgBAAgFg");
	this.shape_89.setTransform(168.4,56.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#4D4139").s().p("AATAMQgEgHgJAAIgYgRIAlALIAAAOIAAgBg");
	this.shape_90.setTransform(162.1,53.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#857C74").s().p("AgGgDIAAgBQAJAAADAFIABABQgGADgDAAQgFAAABgIg");
	this.shape_91.setTransform(163.3,54.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#B7B3AD").s().p("AgIgDIABAAIAQAHg");
	this.shape_92.setTransform(167.4,50.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#18100B").s().p("AgBAGIAAgBQABgXACAYg");
	this.shape_93.setTransform(178.2,55.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#291D13").s().p("AgEgBIAUABIgfACg");
	this.shape_94.setTransform(174.8,55.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#473B31").s().p("AAAAJQgDAAgBgEIAAgBIgBgDIAAAAQgDgJAHAAIAEABQABAAAAAAQAAAAABABQAAAAAAAAQABABAAAAIAAABQACACgGAKIgBABIgBAAg");
	this.shape_95.setTransform(171.9,52.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#483A2E").s().p("AiVBIIACgEIAEgSQAGARgDgTIgCAAIAKguIAIgRQAGATgGgiIA3gLQALALgGgJQgBgBAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAIAAgBIABAAIATABIAbABIgXgCIAygBIAbgGQAAAHAGAAIiYAOIgWBUIgGAOIgCACgAArgxIAKABIAOgGIAYACIAfgCIgVgBIATgJIAGAAIgCgBIAEgCIgBgEQACgBAPAFIAAAAQAOAMgPAGQgDgZgBAYIAAABIgkACIg+AFQAUgEgSgDg");
	this.shape_96.setTransform(164.1,61.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#797068").s().p("AiWB4IAAgBIAfhtIAAgBIAMgBIAvgEIAAABIgBAAIg3ALIAAgBIgBABIAAAPIgHASIgLAuIgBADIgDASIgCAEgAg7AEIC7gUIgTAIIgLADIgXgCIgPAGIgJgBIgKAAIAAAAIAAAAIgbAFIgyABIgEABgABjgcIgNgEIABgBQAGgLgBgDIAAAAIAbALIABAAQAQAHAPAJQgOgFgCABIABAEIgFACgABPglIAAgDIABADIgBAAgAA4gzIgGgCIgSgIIgNgEIgEgBIgQgEIAAAAIiBgbIgFgBQgNgHAMgKIAHgEQgLAHAFAJIAEAEIAXgUIACAAIgGAGQBeAXBmAnQgHABACAJIgXgKgAgohTIAsAHIgvgNIgLgBIgTgBgAhfhfIAEgCIgXgDQgEAAAXAFg");
	this.shape_97.setTransform(163.4,56.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#B0B2AE").s().p("AABAFIAOgRQAAALgJAGQgHAIgMAAg");
	this.shape_98.setTransform(-92.4,31);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#928981").s().p("AAIADIACgEIAEgBIgDAFIgDAAgAgNABQAJgFADAGIgMgBg");
	this.shape_99.setTransform(-94.2,36.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#50483B").s().p("AACAEIgJgDIAOgEQADAHgGAAIgCAAg");
	this.shape_100.setTransform(-89.6,36.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#848178").s().p("AAAAFIgYgHIANACIAKADQAIABgDgIIAVAEIgUABIgFAEg");
	this.shape_101.setTransform(-89.2,36.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#DCD9CC").s().p("AgDgCIADgDQAIgJgHASIAAABQgBABAAABQAAABAAAAQAAAAgBABQAAAAAAAAQgCAAAAgLg");
	this.shape_102.setTransform(-86.9,28.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#B0A295").s().p("AgFgHIACgGIAAAFQABARADgJIABgBIAEgGIgIAUIgBABg");
	this.shape_103.setTransform(-86.9,28.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#828A8A").s().p("AALgPIAFAAIgXAXIgIAIg");
	this.shape_104.setTransform(-88.9,26.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#5C5851").s().p("AgIASIAIgTIADgFQgDAJAAANIAAABIgHAEgAAJgUIgEAIIgBgCQgEgBgGADg");
	this.shape_105.setTransform(-86.4,28.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#B8B5AF").s().p("AgEAAIgCACIAAgEIAAgDIABgBQAGgDAFABIABABIgCAGIgDAEIgDAGQAGgSgJAJg");
	this.shape_106.setTransform(-86.6,27.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#A7A099").s().p("AAAAFIAAgIIABABIAAACIgBABIAAAEg");
	this.shape_107.setTransform(-108.2,39);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#56554F").s().p("AABACIgBgBIAAgGIABAFIAAAEIAAACIAAgEg");
	this.shape_108.setTransform(-108.1,38.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#B2B2AB").s().p("AgGgGQAJgJAPAAIgiAYIgBAHQAAgNALgJg");
	this.shape_109.setTransform(-106.5,36.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#C2B8AE").s().p("AgdAKIACgDIAZgDIgMAGIgQACIABgCgAgEAAIAjgLIgbAMIgIgBg");
	this.shape_110.setTransform(-99.1,35.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#675C50").s().p("AgHAOIALgGIAFgBIABgBIABgBIAagMIgjAKIgSgDQAOgGAPgGIALgCIAHgBIAAAAIABAAIAAAAQAYANhDASgAghAKIgBAEIgDAAIAEgEg");
	this.shape_111.setTransform(-99.8,34.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#7A7972").s().p("Ag4AZIAOgFIAvgNQgQAFgNAIIgJgCIAAACQgFADgCAFIgzAWgAAzgDQAMgBAIgHQAJgIAAgKIAEgNIAIgHQAAAWgUAQQgUAOgcABIgBAAIgIABg");
	this.shape_112.setTransform(-98.9,32.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#8E867E").s().p("AgPAAIgCABQgEAEgFACQgDgDAOgEgAAMgFIAQgBIgEACIgRAFIAFgGg");
	this.shape_113.setTransform(-103.4,36.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#979894").s().p("AgSALIAlgVIgIAJIgYAMg");
	this.shape_114.setTransform(-85.9,24.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#757A74").s().p("AgLAJIAPgRIAPgJIgCAEIgjAgg");
	this.shape_115.setTransform(-82.9,22.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#A0948C").s().p("AgFAAIALAAIgEABg");
	this.shape_116.setTransform(-28.4,65.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#787B77").s().p("AgGAEIAOgLIADAAIgPANIgGACg");
	this.shape_117.setTransform(-23.3,62.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#A89D93").s().p("AgCgCIACAAQAGAEgFABIgDgFg");
	this.shape_118.setTransform(-36.9,65.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#B6ABA2").s().p("Ag9ALQAFgBgIgFIAGAAIAGAGIgJAAIAAAAgAACALIADgBIAAABgABBgKIgEAEIgBAAg");
	this.shape_119.setTransform(-30.5,64.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#7D807D").s().p("AgeATIAqgfIATgGIgTAJIgIAKIgHAFIgZANg");
	this.shape_120.setTransform(-19.4,60.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#838785").s().p("AATgRIASgFIg2AnIgTAGg");
	this.shape_121.setTransform(-14.5,56.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#878984").s().p("AAjgSIAFAAIg9AgIgSAFg");
	this.shape_122.setTransform(-8.5,52.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#C2BEB7").s().p("AgCgBIgCgCIAJAHIgCAAIgFgFg");
	this.shape_123.setTransform(-51.9,55.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#A5A49E").s().p("AATALIg2gkIgCgBIAMAGIA+AsIABABIAAACQgJgJgKgHg");
	this.shape_124.setTransform(-56.5,52.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#56564D").s().p("AgfgWIAiAUQASARgOgPIgBgBIAaAQIgDABQgDACAEAFg");
	this.shape_125.setTransform(-55.9,52.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#2F271B").s().p("AgEgDIAAgBIADACIABABIAFAGIgJgIg");
	this.shape_126.setTransform(-55.1,52.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#9C938B").s().p("AgJAJIgKgIIgDgDIAAgBIAOAMIgBAAgAAMgHIAAgBIALAJg");
	this.shape_127.setTransform(-50.5,55.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#AC9688").s().p("AAWAVIgogfIAAgBQgGgCAAgHIAAAAIACAAIALAAIAkAoIAAABg");
	this.shape_128.setTransform(-51.8,52.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#6A5A50").s().p("AAFALIAKABIABAAIAVASQgPgLgRgIgAgIgFIgcgYIADAAIALAJIASAQIgEgBg");
	this.shape_129.setTransform(-45.9,57.6);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#878986").s().p("AAIAHIgCgCIgZgRIAFADIAiAWg");
	this.shape_130.setTransform(-61.1,49);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#868783").s().p("AABABIgHgDQAIABAEADIAAABg");
	this.shape_131.setTransform(-63.2,47.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#4D4840").s().p("AAEACIgVgMIAdALIAGAKIgOgJg");
	this.shape_132.setTransform(-65.7,46.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#AEA297").s().p("ABKAvIiVhcIAAgBICVBbIABgBIABACIgBABg");
	this.shape_133.setTransform(-63.2,45);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#868881").s().p("AgGgDIALAEIACADIgNgHg");
	this.shape_134.setTransform(-76.4,40.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#68665F").s().p("AgZgMIgCgDIA3AfIg1gcg");
	this.shape_135.setTransform(-73.1,42);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#65584E").s().p("ABQAuIAAABIgBAAIABgBgAg1gYIgbgVIAAgBIAJABICVBcg");
	this.shape_136.setTransform(-63.6,45);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#9D8F86").s().p("ABRAjIgigOIgKgFIgCAAIg+gZIACgCIBzAuIAAABgAhZgjIABAAIAAAAIgBAAg");
	this.shape_137.setTransform(-79.8,36.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#615141").s().p("AAWAHIAiAPIAAABgAgTgBIgkgTIADgCIA+AZg");
	this.shape_138.setTransform(-77.3,38.2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#C0AFAB").s().p("AAAgEIABAHIgBACg");
	this.shape_139.setTransform(-67.9,24.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#565651").s().p("AgMACIAcgHIgfALg");
	this.shape_140.setTransform(-79.6,20.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#A9A8A3").s().p("AgEgBIAagJIAAAEIAAABIgcAHIgPAJg");
	this.shape_141.setTransform(-80.3,20.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#585855").s().p("AgFAGIAKgPIgBAIIgBADIAAABIgCAIQgBAEgCAAQgCAAgBgJgAABgLQAAgEADABQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAgBAAAAQAAAAgBAAQgBAAgBAAQAAAAgBABg");
	this.shape_142.setTransform(-76.6,19.5);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#95897C").s().p("AABgHQABgBAAAAQABgBABAAQABAAAAABQAAAAAAABIAAABIgKAQg");
	this.shape_143.setTransform(-76.6,19.2);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#A7B5B6").s().p("AACAjIAJhQIgFBPIgQAMg");
	this.shape_144.setTransform(-71.4,9.2);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#7B8584").s().p("AgjAdIADgDIgDAIgAATgVIARgMIgXARg");
	this.shape_145.setTransform(-74.4,16);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#9CAEB2").s().p("AAEgdIgDAeIgCAXIAAACIgCAEg");
	this.shape_146.setTransform(-69.8,1.6);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#566D71").s().p("AACglIACgEIgHBTg");
	this.shape_147.setTransform(-70.4,8.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#B2A69F").s().p("AADAIQgEgGgEgFQAAgKAHAFQAAAKAEAJIAAAAIgDgDg");
	this.shape_148.setTransform(-55.5,0.8);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#B6AAA1").s().p("AAMAPIAAAAIABAAgAgLgNIAAgBIABABIgBAAg");
	this.shape_149.setTransform(-49.8,7.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#88786C").s().p("AAMAFIgdgJIAjAJg");
	this.shape_150.setTransform(-1.7,-12.2);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#9F9F9C").s().p("AAVAIIgqgPIAAAAIACAAIAHABIAiAOIgBAAg");
	this.shape_151.setTransform(-9.1,-11.3);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#A29994").s().p("AAAABIgCgBIAFABg");
	this.shape_152.setTransform(-11.4,-12.2);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#747877").s().p("AgWgKIgGgFIA5Afg");
	this.shape_153.setTransform(-10.9,-14.7);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#C9B6A8").s().p("AACACIgDgCIgMgHIAbAPg");
	this.shape_154.setTransform(-7.7,-14.3);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#766355").s().p("AgSgJIADAAIADABIAPAJIAEACIAMAHg");
	this.shape_155.setTransform(-9.8,-15.4);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#5E584E").s().p("AgIAAIARAAIgBAAIgOABIgCgBg");
	this.shape_156.setTransform(-29.7,-21.2);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#C7C1BC").s().p("AgCAAIADAAIACABIgFgBg");
	this.shape_157.setTransform(-22.1,-23.1);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#6F6D6B").s().p("AAFAIIgCAAIgBgCIgDABIgDgBIAEgBIAEgKIgRADIACgEIAGgCIANgCIAGAVQgEgCgFgBg");
	this.shape_158.setTransform(-22.2,-23.7);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#6A7A7F").s().p("AAAADIgBgEIABgEIACALg");
	this.shape_159.setTransform(-21.6,-27.3);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#779298").s().p("AAEgLIADADIAAASIgNACg");
	this.shape_160.setTransform(-22.1,-25.8);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#E4D9D5").s().p("AgFAkQAAgDgCgCIgFgCIABgBQAPgGAEgOIACAFIgKAYIgGABIABgCgAAHgXIAGgOIgGAPg");
	this.shape_161.setTransform(-22.7,-28.3);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#61787F").s().p("AgHASIAFgPIAHgVIADgBIgOAnIgBgCg");
	this.shape_162.setTransform(-21.1,-32.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#4D5C63").s().p("AgCAKIgEgBIAAgBIADgUIAKAZg");
	this.shape_163.setTransform(-38.2,-27.3);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#8E908C").s().p("AAVAHQgLgGgMgCQANgJALAHIgBADIAAAHgAgVgCIAAgBIAFABIgFAAg");
	this.shape_164.setTransform(-36.8,-26);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#B9B6B4").s().p("AABAUIABAAIAAABIAAABgAgBgVIADAUIgCABg");
	this.shape_165.setTransform(-39.1,-28.5);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#7D8A8D").s().p("AAAABIAAgBIABAAIAAABIgBAAg");
	this.shape_166.setTransform(-39.1,-32.1);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#8E9798").s().p("AABAcIgCgCQgHgIAIgKIABgCIgCgTIABgOIAAAAIAAAPQAGAFgBAMIAAABIgEAWg");
	this.shape_167.setTransform(-39.1,-29.3);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#757472").s().p("AAdAKIg/gTIACAAIACAAIBCATg");
	this.shape_168.setTransform(-3.8,-27.5);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#B0968B").s().p("AAmA6IgeghIAhAhgAgog4IACgBIAAAJg");
	this.shape_169.setTransform(-15.5,-22.2);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#9E7869").s().p("AgHAOIABgDQgCAOAAAPIgCABgAAJgnIACgBIgDAPIgCACIgEAGg");
	this.shape_170.setTransform(-18.5,-32);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#747C7C").s().p("AAhAVQgQAAgNgFQgMgFgLgKIgDgCQgHgHgFgIIABgEQAEAJAIAHIADAEQAVAUAgABg");
	this.shape_171.setTransform(-10.7,-30.5);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#E0CDC6").s().p("AAIAeIgMgRIgMgPIALgKIgEAMIAaAlgAgPgkIgBAEIgBAAg");
	this.shape_172.setTransform(-11.9,-36.2);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#BEA8A1").s().p("AABgFIACAAIgDAGIgBAEIgBABg");
	this.shape_173.setTransform(-13.5,-40.1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#7D6C63").s().p("AAKAUIAEgDIAMAQQgJgKgHgDgAATggIgDAIIgEANIgGAEQgQALgIARIgFAAIgCABg");
	this.shape_174.setTransform(-15,-38.2);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#A3ABAC").s().p("AgCgGIANgKIAAADIAAABQgBAFgEADQgDADgFgBIgIATg");
	this.shape_175.setTransform(-18.6,-37.8);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#615956").s().p("AgFAGIgEgXIAKAXIgEALIgBABgAAKgMIAAADIgCADg");
	this.shape_176.setTransform(-16.6,-47.3);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#798589").s().p("AgbAdIApgvIAOgMIg3A9g");
	this.shape_177.setTransform(-14.6,-42.4);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#BCB0AB").s().p("AgHAEIAGgJIABAEIAEgRIACgDIALgHIAAABIgSAoIABAUgAgOgeIgCAAIABgCIACAAIABAAIAAADIADAYg");
	this.shape_178.setTransform(-16.3,-46);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#6D6D6B").s().p("AAHgEIAAAHIAAACIgNAMgAAFgQIACAAIAAAGIgCgGg");
	this.shape_179.setTransform(-12.5,-46);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#ABBABB").s().p("AACAIIABgCIgBAKIAAgIgAgCgNIAAgCIACAJg");
	this.shape_180.setTransform(-12,-47.3);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#8F8C88").s().p("AgHAJIAAgTQAAAJABAEQACAHACAAQACAAADgQIAGgCIgGAIQgCAKgCAAIgCABQgCAAgCgCg");
	this.shape_181.setTransform(-2.6,-36.6);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#312922").s().p("AgEAKQgCgGAAgHIAAgIIANgFIgCAQQgDARgCAAQgCAAgCgHg");
	this.shape_182.setTransform(-2.7,-37.3);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#625A54").s().p("AAAAHIgIgPIANAOIAEgBIgJAEg");
	this.shape_183.setTransform(-7.1,-45.4);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#A08A81").s().p("AgeAcIAEgIIAHgGIgJAOIgCAAgAAZgQQgFgDgGABIAJgJIAIAQIgGgFg");
	this.shape_184.setTransform(-10.3,-43.5);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#B5A6A0").s().p("AgaAEIAAAAIATgIIAiACIg1AHIAAgBg");
	this.shape_185.setTransform(-0.9,-46.2);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#B4A29B").s().p("AgHADIAZgJIAAABIAAABIgFACIgTAFIgLAEg");
	this.shape_186.setTransform(-5.4,-45.2);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#695E57").s().p("AgFgOIAEACIAAABIAAAFIADAFIAEAFIAAAEIgBAHIAAAAg");
	this.shape_187.setTransform(-56.8,-8.7);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#BDB4AD").s().p("AABAEQgEgFgDgJIAGAAIAHAFIAAAIIAAAIIgGgHg");
	this.shape_188.setTransform(-56.9,-12.8);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#6E665F").s().p("AgCAEIgFgKIACAAQACAHAEAGgAABgGIAGAAIABAAIAAAFg");
	this.shape_189.setTransform(-57,-13.1);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#70625A").s().p("Ag7BpIAJhUQgDAeAAAeIgCAZgAA0gNQgEgHgEgFQAJACAHgBIAAAJQgHgFAAALIgBgEgAAkg3QAFgLACAOIgHgDgAAig4IAAgBIAAABgAgOhAIACgEIgBAEIgBAAgAAzhVIAAgBIAAAEgAAQhpIAGARIgEgBIgCgMIgRASQAHgMAKgKg");
	this.shape_190.setTransform(-61.4,1.4);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#4C656B").s().p("AABgNIAAgDIABAAIgDAhg");
	this.shape_191.setTransform(-69.5,0);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#70898E").s().p("AgHARIANgfIACgCIgOAhIgBAAg");
	this.shape_192.setTransform(-68.6,-3.4);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#BBA9A1").s().p("AgOAPIADgIIAIgHIARgRIACALIgEgBQgCADgBAEIgCAPQgDgCgDgMIAAAAIAAAAIgIARIgIAAg");
	this.shape_193.setTransform(-61.2,-6.9);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#DCD6D6").s().p("AAAAIQgHggAKAeIAAABIgCACg");
	this.shape_194.setTransform(-62.5,-15.4);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#B7B1AF").s().p("AACALQgTgRAQgEQADAEAFADIABAEIABADIgCAEIgBABQgKgeAHAgIABAAIgCAAg");
	this.shape_195.setTransform(-62.8,-15.6);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#998C85").s().p("AgFAIQgEgGgCgFQgCgHAAgHIATALIAAACQgPAEATARIACABIADgCIAAACQgMAAgIgKg");
	this.shape_196.setTransform(-63.6,-16.2);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#7B8C90").s().p("AAUgBIgVgsIABgEIAYAwIgtBMIgCABgAgNhGIgCgEIAAgBIACABIAFAIIgFgEg");
	this.shape_197.setTransform(-65.6,-12.5);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#B3AFAE").s().p("AAGAJQgJgFgCABIAAgNIAKAPIABACIAAAAg");
	this.shape_198.setTransform(-69,-24.4);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#9E9D9B").s().p("AgLgMIAAgDQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQADgBAIAFIAAAAIAAAAIACAFIAKAbIAAABg");
	this.shape_199.setTransform(-68.5,-22);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#585653").s().p("AAOAXIAAgBIAAAAIACgEIAAADIABAAIgDAFgAgOgKIgCgPIABACIACABIADAEIACgBIAFAEIACAEQABAIAFAEg");
	this.shape_200.setTransform(-63.6,-17);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#9EABB0").s().p("AgCgGIAAAAIAFANg");
	this.shape_201.setTransform(-70,-26);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#48463F").s().p("AAAAKIAAgEIAAgHIgBgCIgBgJIAFAYg");
	this.shape_202.setTransform(-70.3,-28.2);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#C3B5AE").s().p("AgHABIAAgBQAFgDAGACIAEABIgLADg");
	this.shape_203.setTransform(-80.1,-33.4);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#595E5F").s().p("AAZA4IgKgdIAMAegAABAEIgGgNIAAgGIABABIACACIAOAhgAgag3IAAAAIABgBIABACIgCgBg");
	this.shape_204.setTransform(-69.7,-25.7);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#4E4F4D").s().p("AgDAGIAEgLIADALQgDgBgEABg");
	this.shape_205.setTransform(-73.5,-43.8);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#63615A").s().p("AgDgGIAHAUIgJgeQAAgHACgGQAAAAABAAQAAAAAAAAQABAAAAABQABABAAABIAGAsIgEAMg");
	this.shape_206.setTransform(-74,-46.2);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#ADA69F").s().p("AgCgEIgCgKIAJAdg");
	this.shape_207.setTransform(-74.1,-46.4);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#808686").s().p("AgGAIIANgTQAAARgHAFIAAABg");
	this.shape_208.setTransform(-40.6,-37.3);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#AC978B").s().p("AADAFQgDAAAAgEIgDgGIAGAGIABADIAAABIgBAAg");
	this.shape_209.setTransform(-51.3,-26.3);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#B39F92").s().p("AABALQAEAAgBgJQgBgEgFgBIgEgGIAAgBQAFADACAEQAKAOgHAAIgDAAg");
	this.shape_210.setTransform(-50.3,-24.8);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#6B6E6B").s().p("AAJAQIgbghIAAgBIACAAIAEAGQAbAlgEgWQAGABABAFQACAJgEAAIgHgCg");
	this.shape_211.setTransform(-51.7,-25.5);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#BAB4AD").s().p("AABABIgBAAIAAgBIAAAAIABABg");
	this.shape_212.setTransform(-55.4,-29.6);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#704536").s().p("AgBgWIAAgCIABAAIAAgBIACAzg");
	this.shape_213.setTransform(-54.5,-34.5);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#583F32").s().p("AACgJIAAAHIgCAJIgBABIAAABIAAABg");
	this.shape_214.setTransform(-54.4,-38);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#C39D88").s().p("AAAAZIgCgzIAAgBIACgBIAAAAIACAWIgBAGQgBAQADANg");
	this.shape_215.setTransform(-54.3,-34.4);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#77695D").s().p("AAAgBIABgDIAAAIIgBABg");
	this.shape_216.setTransform(-54.1,-38.8);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#0B0505").s().p("AACBGIgDgGIgBgBQgRgbgGgdIABgBIgCg4IADgMIAAgBIADgHQAPgnAFAcIgBAGIgBACIgBACIAAABQgEAGAAAJIAAABIgBADIgFAUIAAAAIAAABIADAxIADAFQAEAbASASIADAGQAAAEAEABIABAAIADAGQABAIgCAAQgFAAgSgYg");
	this.shape_217.setTransform(-53.2,-33.8);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#B29A8D").s().p("AgEATIACgKIACAAIAAAHIgDADIgBAAgAADgRIABgBIABAAIAAAAIgCACIAAgBg");
	this.shape_218.setTransform(-53.9,-39.2);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#2A2D2D").s().p("AATBAIgFgIIgNgOIABAAIgBgBIgBgCQgGgJgHgGIgFgPIgBgJQAAgCAHAKQACAEAFAAIACgDIABgCQAFAdARAaIAAACIgBAAgAgDg3IADgIIgDANg");
	this.shape_219.setTransform(-55.5,-33.7);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#8D827C").s().p("AAKA7IgGgMIgBgDIAAAAIANAPgAACArIgBgCIACADgAgNAYIgCgMIAEAOIgCgCgAgBg1IAAgFIAAAFg");
	this.shape_220.setTransform(-55.7,-34);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#BFA595").s().p("AAAAOIAAgCIABgGQAJgLgLgHIgFAAIAAgCQAGACADACQAIAHgIAOIgDAEg");
	this.shape_221.setTransform(-53.4,-42.6);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#66625D").s().p("AgOASIAHgWIAKgSIAFABQAMAGgJANQgFgdgPAmIgCAHIAAABIgDAIgAAIAFIACgDIgBADg");
	this.shape_222.setTransform(-54.4,-41.6);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#7F888A").s().p("AgPgJIgFgFIApAdg");
	this.shape_223.setTransform(-46.2,-45.4);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#96928F").s().p("AASAeIAAgCIACACIgCAAgAgEARIgBggIgSgOIAVAKIAEAmIAAgCQgBgcASARIAFAFIgFgEQgNgGgCALIAIAJIgFAAIAAAAIgBABIgBAAIgCADg");
	this.shape_224.setTransform(-50.2,-47.5);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#6D6862").s().p("AADAEQgTgPAWAPIgDAAg");
	this.shape_225.setTransform(-49.5,-53.2);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#C1B3B0").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_226.setTransform(-48.6,-57.6);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#9B9191").s().p("AAAAAIgBAAIABAAIACABIgBAAg");
	this.shape_227.setTransform(-48.4,-57.6);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#7B6F6B").s().p("AgSgDIAfAAIAGAHIglgHg");
	this.shape_228.setTransform(-44.5,-56.8);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#BCAFAA").s().p("AABADIgFgGIABAAIAIAHIgEgBg");
	this.shape_229.setTransform(-42.8,-56.7);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#7E7871").s().p("AgKgDIAPADIAGACIgVACg");
	this.shape_230.setTransform(-54.1,-52.4);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#B2B6B1").s().p("AgGAIIgGgDIAOACIAGACIgGABQgEAAgEgCgAAJAHIgDgQIAHAPIAAACIgDABg");
	this.shape_231.setTransform(-52.3,-52.9);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#788080").s().p("AAQALQgNgIgKgIQgZgWATACIADAFIgDgCQgLALApARIAGAVg");
	this.shape_232.setTransform(-53.2,-55);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#9D9B95").s().p("AgDACQgFgGANAEIgIACg");
	this.shape_233.setTransform(-59,-72.2);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#5C564D").s().p("AghAAQAXAAASgEIArAEIg1ACQgLgCgNACIgBAAQgOgDAFAGIAAAAIgBAAQgbgCAfgDg");
	this.shape_234.setTransform(-55.7,-72.4);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#574C3F").s().p("AAjACIAdADIAEAEgAhDgHIAEgBIAlADg");
	this.shape_235.setTransform(-47.2,-73.2);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#778E96").s().p("AAFAdIgKg9IAAgCIALBFIgBgGg");
	this.shape_236.setTransform(-76.2,-52.5);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#7E675A").s().p("AAAgGIAAAEIACAEIgDAFg");
	this.shape_237.setTransform(-73.6,-67.4);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#C0A99F").s().p("AAAgBIAAAAIABADIAAAAg");
	this.shape_238.setTransform(-73.5,-67.5);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#8A9EA2").s().p("AABgpIACANIAAABIABA9QgEAAgBADIgCAFg");
	this.shape_239.setTransform(-76.5,-60.5);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#B0ADA7").s().p("AAAgBIADAAIgFADIACgDg");
	this.shape_240.setTransform(-76.1,-68.4);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#C1BDB7").s().p("AAAgCQAVACgdADIAIgFg");
	this.shape_241.setTransform(-70.9,-71.3);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#B3A79D").s().p("AgMAKIAAgDIACgEIADgEQAJgPALAMQgIAEgHAHIgJADIgBAAg");
	this.shape_242.setTransform(-72.3,-68.7);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#84837F").s().p("AAAAOIgCgWIgCAAQACgGACgGIAFgDIgEAzgAADgYIACgDIAAAEg");
	this.shape_243.setTransform(-76.3,-66.1);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#5E4D43").s().p("AgEABIAIgDIABAAIgJAFg");
	this.shape_244.setTransform(-72.4,-71);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#6B6055").s().p("AgNAGQgHgRAhAGIACADIgDACQgLgMgJAOIgDAFIgCgBg");
	this.shape_245.setTransform(-72.2,-69.1);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#504338").s().p("AgEAAIAJgBIgHADg");
	this.shape_246.setTransform(-70.4,-69.7);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#4E4A47").s().p("AgGgEIANgRIgIAUIgEAXg");
	this.shape_247.setTransform(-10.3,-50.6);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#BDB1A7").s().p("AgGAAIADgGIACgBQgJAOARgDIABAAIgJADIgDABQgEAAACgIg");
	this.shape_248.setTransform(-3.1,-49);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#695E56").s().p("AgBAOQABgFAAgGIAAgCIASgTIgBAGIgCAGQgDAMAIgEIACAAIAAABQgQAPgKABIADgFgAgVAIIABAAIAAADIgBgDg");
	this.shape_249.setTransform(-5.3,-48.4);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#85665C").s().p("AgDAZIAEgSIgGgMIADgSIAAgBIgBAMIAAABIAJAQIgGAOIAAABIAAABIgCAEIgBAAg");
	this.shape_250.setTransform(-7.1,-50.1);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#BFB9B6").s().p("AACAPIAAAAIgBABgAgBgPIABAAIgBAAg");
	this.shape_251.setTransform(-7.3,-49.7);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#657073").s().p("AAAASIAAAAIAAACgAAAgTIAAAAIAAACIAAgCg");
	this.shape_252.setTransform(-5.3,-50.1);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#61605E").s().p("AAIgFIgRALIgDAAIAZgRIgMAXg");
	this.shape_253.setTransform(-4.6,-55.8);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#97918D").s().p("AgDAEQgCgEgBgDIAAgDIABgBIACAAQgFALAMgEQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAIgDAHIAAABQgEAAgDgEg");
	this.shape_254.setTransform(-5.2,-54.5);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#634F4A").s().p("AADgJIAAAAIAEANIgNAGg");
	this.shape_255.setTransform(-6.5,-53.8);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#B2A49F").s().p("AgLAKIABgLIACgCIANgGQAKACgFAKIAAAAQgLgUgJAaIAAABIgBAAg");
	this.shape_256.setTransform(-6.3,-52.4);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#837671").s().p("AAAAAIABAAIgBABg");
	this.shape_257.setTransform(-6.4,-58.5);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#5C5D5C").s().p("AgOAEIAAABQgCAKAJgLIAHgGIARgOIgOAPIgKAMIgEAEIgEACQgDAAAEgNg");
	this.shape_258.setTransform(-6.1,-57.6);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#C9C4C1").s().p("AAOgIIgCACIgMANIgHABIgGABg");
	this.shape_259.setTransform(-7.7,-61.1);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#DBD4D1").s().p("AAAAAIABAAIgBABIAAgBg");
	this.shape_260.setTransform(-6.1,-59.1);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#B7B3B3").s().p("AgGADIAAAEIADAAIAAABIgHAGgAgCgFIALgHIACgBIAAACIgMAHIgBAAIAAgBg");
	this.shape_261.setTransform(-5.8,-58.7);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#C6BCB7").s().p("AAAgEIgKARIAAgBIAAgMIASgNIADAaIAAACg");
	this.shape_262.setTransform(-13.4,-50.1);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#746A62").s().p("AgCgCQADgFAGgBIgNAQQAAgGAEgEg");
	this.shape_263.setTransform(-10.3,-51.9);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#7D7771").s().p("AAAAEIAAAAIgBgEIACgFIAAAJIAAAAIABACIgCgCg");
	this.shape_264.setTransform(-13.9,-54.4);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#4F433A").s().p("AgDACQAHACAJgGIgCACQgHAFgEACIgDgFgAgMgGIACAFIAAAAIACABIgCAAIgCABIAAgHg");
	this.shape_265.setTransform(-12.8,-53.8);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#6B605A").s().p("AAAAAIAAAAIABABIAAAAIgBAAIAAgBg");
	this.shape_266.setTransform(-17.7,-49.4);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#ADABA1").s().p("AABAAIgKAAIAFgCQAWACgNADQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape_267.setTransform(-19,-51.7);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#AFB1B3").s().p("AgDAJQgNgPAYgEQgTAIAMAHIAAABIgEAFIAAgCg");
	this.shape_268.setTransform(-15.5,-56.4);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#6F6E6A").s().p("AAMgOIgZATIgDAAIAhgZIgRApg");
	this.shape_269.setTransform(-11.1,-56.7);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#AF9B93").s().p("AgGABIAKgLIADAAIgMAUIgBABg");
	this.shape_270.setTransform(-13.2,-55.1);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#686E6E").s().p("AgOAfQgNgHAVgJIATgbQAAgIgIgGQgFgEgHgBIATACIAIAJIghA0IgBgBg");
	this.shape_271.setTransform(-14,-59);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#544842").s().p("AgHACQgBgCgBgEIATAAIAAABIgCACQgHAGgDAAQgDAAgCgDgAACAAIACAAIgFgEQgBAAAEAEg");
	this.shape_272.setTransform(-11.4,-62.4);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#8E817D").s().p("AADACIgCABQgIgJAKAIg");
	this.shape_273.setTransform(-11.3,-62.6);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#837E7B").s().p("AgFAHQgDgBgBgFQgCgEABgEIABAAQAAAOAHgIQAEgHAJACIgIADQgBAGgCADQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAIgCgBg");
	this.shape_274.setTransform(-16.7,-61.6);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#A0A09D").s().p("AgSgGIAJgDIAIABQAGABAFAEQAJAFAAAIg");
	this.shape_275.setTransform(-14.5,-61.3);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#A6A19D").s().p("AgHADIAPgFQgBAAAAABQAAABgBAAQAAAAgBAAQAAAAgBAAIgLADg");
	this.shape_276.setTransform(-2.2,-62.1);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#62534B").s().p("AgEAAIAEgDQAAADAFADIAAABIgJgEg");
	this.shape_277.setTransform(-3.9,-66.8);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#6E696A").s().p("AgGgGIAAABQgIAIAIgBIAGgBIgWAPgAAVgPIABAAIgDACg");
	this.shape_278.setTransform(-8.4,-60.4);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#565953").s().p("AgHAEIAOgHIgDADIgKAEg");
	this.shape_279.setTransform(-8.4,-65.6);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#868B8A").s().p("Ag6AUIACgFQAzgkBAABIgGABQg8AFgzAjg");
	this.shape_280.setTransform(-3.8,-70.2);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#8D7E77").s().p("AgOAFIAdgJIgHADIgUAGg");
	this.shape_281.setTransform(-1.7,-68.6);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#91877D").s().p("AgdACIATgBIgJABgAASAAIAEgBIAIAAIgEABIgIAAg");
	this.shape_282.setTransform(-22.5,-51.7);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#92857D").s().p("AABABQgTgDAaACIgFABIgCAAg");
	this.shape_283.setTransform(-28.4,-51.6);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#ACA29B").s().p("AhWARIAWABQBzATB2giIAEACQAPAHADgOIAFgFIgHAOIgcAGIgOgCIgIAGIgqAGIgOABQgbACgcAAQg4AAg6gJgAi/gTIgBgBIgDgFQAPAIAIADIACAEg");
	this.shape_284.setTransform(-35,-55);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#2B2517").s().p("AgCAEIgEgBQgDABACgGIABAAIANgBIACABIgBAAQgEAGgEAAIgCAAg");
	this.shape_285.setTransform(-26,-52.3);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#5E544B").s().p("AAVAcQg/gGhCACIgPgGIBkAFIABgBIAAAAIgBAAQhBgCg4gYIAGACQAbAHAbACQBUANBVgGIgBAAQgCAHADgBIAEABQAGACAFgJIABAAIgDgBIArgGIgMAJIATAFIgEAAIgSgBIgLADIgTACIAKAAIgLABIgDABIgOgBIgPAEIgqgCgABFAZQADABADgCIgOgBQgEAAAMACgACoAbIAAAAIgBgBIAGABgAC5AKQgBgHgJACIgMgCIAbgFIgDAIIgBAFIgBAAIAAgBgAi9gdIAVAJIACACQAHAGAIAFQgTgKgTgMg");
	this.shape_286.setTransform(-35.2,-54);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#ADA29A").s().p("AAEACIgIgDIAIABIAAACg");
	this.shape_287.setTransform(-37.8,-69.4);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#584B3F").s().p("AgSgEIAPACIAWAHg");
	this.shape_288.setTransform(-38.5,-71.9);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#534338").s().p("AgVgHIArANIgPABg");
	this.shape_289.setTransform(-33.5,-70.4);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#92887F").s().p("ADEATIgsgNIgJgDIgXgHIgPgBIgEgEIAaAEQAMABAKAEIANADIgFgBIAcALIAjAMgAjSADIACAAQAwgPAwgHIhNAZIgeAEIAJgHgAjQAHQAdgDgUgDIgJAGgAgagXIgEABIhIACQAmgFAmACg");
	this.shape_290.setTransform(-50.9,-71.7);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#C6BCB4").s().p("AgNgEIAFABIALADIACABIAJAEg");
	this.shape_291.setTransform(-33.8,-71);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#86867F").s().p("AgTgBIAAgDIAnAHIAAACg");
	this.shape_292.setTransform(-35.4,-69);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#878883").s().p("AgjgJIAAgCIBHAXg");
	this.shape_293.setTransform(-29.8,-67.5);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#7D6D62").s().p("AAMAKIgJgKIAoAPIACACQACAEADAAIANABIAKAEIAJgEIADAAIgNAGgAgogIIgsgTIAYAGIA5AUg");
	this.shape_294.setTransform(-22.7,-67);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#EDE4DF").s().p("ABMAdIATAAIgJAEgAAPAIIgBgCIgFgBIg5gTIgjgMIgJgFIgCgBQAwAPAwALIAGADQAUASAZACIADAFg");
	this.shape_295.setTransform(-24,-67.7);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#959A96").s().p("AApAUIgKgOIhJgZIAsAPQAJAAAHABQAHACAGACQAMAHAAAJIAAABIgBACIgBAAg");
	this.shape_296.setTransform(-21.9,-64.4);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#382D21").s().p("AAAABIABgBIgBABg");
	this.shape_297.setTransform(-99.7,-9.8);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#7B7267").s().p("AgJAHQACgFAHgDIAAgBIADgCIAAABIABgBIACgBIAAAAIADgBIABgBIgQAOIgBABg");
	this.shape_298.setTransform(-100.4,-9.1);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#ADA39A").s().p("AhHAjIAAABQgHAEgCAFIACABIgnAOQAWgOAYgLgAg8AeIAYgJIAAAAIgIAMIgIADIgZAJgAB2g7IgEACIg1AbQAcgQAdgNg");
	this.shape_299.setTransform(-93.3,-12.9);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#1C150E").s().p("AgGACIADgCIAGgBIAFgBIgPAFg");
	this.shape_300.setTransform(-84.2,-21.1);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#60574D").s().p("AhgBBIABgBIgBABgAA1gxIADgDQAWgIATgEIgRAHIgPAGIgHACIgCACIgBABIgFACg");
	this.shape_301.setTransform(-90.4,-16.1);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#72645C").s().p("AABAAIAAAAIgBABIABgBg");
	this.shape_302.setTransform(-85.6,-33.7);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#9B918A").s().p("AgaADIAFgEIACgCIARADIgHAEIgRgBgAAZABIACAAIAAAAg");
	this.shape_303.setTransform(-83.6,-33.4);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#A5978E").s().p("AgGAHIADgFIAJgIIABAAIgNANg");
	this.shape_304.setTransform(48,65.2);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#6A6157").s().p("AAAABIABgBIAAAAIgBABIAAAAg");
	this.shape_305.setTransform(48.8,64.4);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#B3A99F").s().p("AAHgGIABAAIADAAIgBABIgCADIgSAJg");
	this.shape_306.setTransform(-0.2,51.7);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#DED4CC").s().p("AgBAAIALgCIgBABIgGACIgDACIgFAAQgKAAAOgDg");
	this.shape_307.setTransform(21,32.7);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#C6BDB4").s().p("AgDAAIAAAAIAHABIgBAAIAAAAg");
	this.shape_308.setTransform(24.4,31.7);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#9E958D").s().p("AAHACIgHgCIASACIgJABIgCgBgAgRgBIAHABIgBAAIgGAAgAgJAAIgIgCIANACIgFAAg");
	this.shape_309.setTransform(25.8,31.9);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#6B625A").s().p("AAAgDIgMAHQgDgOgJAFIgBABIAAgCIAAgDIAXAAIALAGIADADIAAgBIAFACIADAAIAGAEIAAAAIgGACIgCADIgDAAQgLAAgEgNg");
	this.shape_310.setTransform(22.9,28.5);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#6D5D55").s().p("AgDAAIAFAAIABAAIAAABg");
	this.shape_311.setTransform(38.1,30.6);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#ACABAA").s().p("AARgRIAAACIghAhg");
	this.shape_312.setTransform(9.5,42.6);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#D2C9C0").s().p("AIfBvIgFgQIgOgUIgIgLIgGgHIgQgYIgCAAIgJgGIg4AKIgLAAIhYALIgNADIgHABQghAIgKgFQgGgDAEgJIAjgUIALgDIgtAgIDlgbIAOARIADgDIABgBIAAABQADARAOgEIgGAMQAHAPAJgQQAIABAEAFIADAGQADAIgMgCQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgLADANAJIAGASgAIZBDIACAIIAAABQAFACACgCIAAAAIACgBQAGgBgGgDIgJgEIgCgBIAAABgAJwACIADgBIggBtgAH/AlQAMgKAIARIgCAGQgBgRgRAEgAE3AUIAFgCQAJAAAGgEIACgCIABAFQACAKgHAAQgGAAgMgHgAL3gTIgYgHIgWgZQgHgEABgCIgEgGQAygEANArIBpgBIgagMIAhALIACAAIgFABIi8AWIgBAAIgvADgALkgjIAAABQgDAPAQgJIAAgOIgmgLgAM6guIABAAIAAABgAttg9IAAgBIBHgtIAFgDIgBADIgzAhIgaAPIACgCg");
	this.shape_313.setTransform(88.7,57.3);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#836F61").s().p("AgkAXIBIgtIAAABIhFAsg");
	this.shape_314.setTransform(4.3,48.7);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#766B60").s().p("AgCACIAFgEIgBACIgEADIAAgBg");
	this.shape_315.setTransform(8.3,46.3);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#120D09").s().p("AiJCDQAPgRASgLIAEgDIAEgCIAFgDQAKgFAMgEIAFgCIACAAIAGgCIAQgOIAYgNIgaAVIgSAOIAAAAIgGAEQgMAJgHALIgDABIgLAFQgIADgHAIgAieCDIgCgFIgDgKQgGgIgHgGIgHgGIgFAAIgCAAQgHgJgJgIIgCgCIACABIgBgBQgFgFgEgHIgPgKIgegUIgBAAIgKgBIgSgBIgCgCIgCgDIAAgBIAAgDIAAgBIABgBIABgCIADgCIAAgBIADAAIAEAAIAdABQANALAPAJQAPAIALAOQAVAMAPARIAFAHIAEAFIAIANQAEAIADAJgAAAAnIASgJIA4gmIA+giIA0gTIAVgOIAngXQADgBABgCIAAgBIAfgSIAMgKQgLARgNAQIgEAGIgHAEIhJAtIgBAAIgRAOQgkASgnALQg3ARgvAgg");
	this.shape_316.setTransform(-18.1,55.3);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#656860").s().p("AgSAKIAlgUIglAVIAAgBg");
	this.shape_317.setTransform(4.7,46.5);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#A8A8A1").s().p("AgXAOIAvgbIgCADIAAABQgCACgDABIgmAUg");
	this.shape_318.setTransform(5,46.1);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#8A8C87").s().p("AgmASIBKgiIADAAIAAABIgVAPIgzASg");
	this.shape_319.setTransform(-1.1,49.3);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#AFA49D").s().p("AgLAFIAAgCIAEgDIAAAAQASgOABAOIgEAAIABAAIgKACQgSAEATgBIgFADIgGgDg");
	this.shape_320.setTransform(21.1,32.5);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#665E53").s().p("AgEAEIABgHIACgBIAGAIg");
	this.shape_321.setTransform(12.6,33.9);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#615950").s().p("AAAAHIgFgFIACAAIABgBQgCgGgKABIgCgBQADgCADACQAuAIghAEIgDAAg");
	this.shape_322.setTransform(32,20.3);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#54483B").s().p("AADgCIABAEIgFABQgFAAAJgFg");
	this.shape_323.setTransform(33.7,18.2);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#A39C96").s().p("AAEgCIAFgEIAGABIAAAAIgBAEIgLADIgRAFIASgJg");
	this.shape_324.setTransform(32.5,17.3);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#5D5752").s().p("AgFABIARgEIgXAHIAGgDg");
	this.shape_325.setTransform(31.6,17.9);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#9F8F83").s().p("AgGABIANgCQgFADgDAAIgFgBg");
	this.shape_326.setTransform(28.7,19);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#A59B98").s().p("AgGgBIgBgBIAEgBQAIgBADAGIgCABIgBAAIgEABQgFAAgCgFg");
	this.shape_327.setTransform(31,20.1);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#605247").s().p("AgTABIAngEIgSAHg");
	this.shape_328.setTransform(29,5.9);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#A09E9A").s().p("AANAMIgagWIAAgBIAbAXIgBAAg");
	this.shape_329.setTransform(22.8,2.1);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#58554D").s().p("AAiAnQgBgBgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQgCgBAAgDIgCgJIAKAPIgBAAgAASAMIADAGQgEgEgGgCIgagXIgdgbIBZA5g");
	this.shape_330.setTransform(23,2.1);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#BBB1AD").s().p("AgIgBIARAAIAAADIgRgDg");
	this.shape_331.setTransform(36.5,8.5);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#DAD1C8").s().p("AgIAAQgBAAAMAAIAGAAIAAAAIgQAAIgBABIAAgBg");
	this.shape_332.setTransform(65.8,33.7);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#B9AEA5").s().p("AgPAAIANAAIASAAQgNAAAAABIgSgBg");
	this.shape_333.setTransform(64.5,33.6);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#988C84").s().p("AggABQAUgCAtABIAAAAIgNABQgZgBgbABg");
	this.shape_334.setTransform(61,33.5);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#A49990").s().p("AAEgBIgBABIgGACg");
	this.shape_335.setTransform(74.6,32.8);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#84776F").s().p("AAAAAIABAAIgBABIAAgBg");
	this.shape_336.setTransform(75,32.8);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#211A14").s().p("AkVAbQgCgDgFAEIAAABQgIgBgCgHIgHgJIAbgJQAPgEAIgJIABAAIAEgCQAHgDAFgFQAKgJABgMIABgBQAKgFACAPIAOgIQAEAQAOgCIACgDIAGgCIAHACIACAAIAJAIQABACADAAIBkADIAHACIAvACIAmABQAcACAdAAIAGAAIAUgBIACABIAPAFIAUgGIAOAJIBSACIAhgHIAIAKIhAgCIiaAKIgPgCQhSgNhVABIgGgEIgQADIgOgGIg0gCIgDAJIgBAAIgFACIAAgJIgdAGIgGAKQgHgBgKADIgCABIAAAAIgBACQgPALgJATIgBACQAAgIgBgJg");
	this.shape_337.setTransform(42.6,32.2);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#53463D").s().p("AgmAHQAPAFgCgMIACgCQAYAIADgTIAGAAIANADIAIgDIAIAAIguAYIgBAAIAAAAIABAAIgEADIgHAAg");
	this.shape_338.setTransform(48.9,22.8);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#989590").s().p("AALgBIgFACIgQABg");
	this.shape_339.setTransform(43.3,23.6);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#A79991").s().p("AgWAAIAFgEIABAAIAFACIATAGIgFABgAATACIAEABIgIABg");
	this.shape_340.setTransform(46.2,23.8);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#110C09").s().p("AAlAiQgIgLgRgCIgPgDQgagIgagFQAhgEgvgJQgDgCgDACIACABIgEABIABABQADAHAJgCIAGAEQgZgEgagBIgDgJIAJgCIAFgBQAHAFAHgIIAGgDIAEgCIAYgIIALgEIAAAIQgOAIAQgDIAEAHQAEAGAJAEIAAABIAAAAQACACADABIAIAAQAJADAMAAIBHACIAcACQgCAVgZgJIgDACQADANgQgFIgFgCIgBAAIgWAFIgEABg");
	this.shape_341.setTransform(37.9,20.5);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#8B827A").s().p("ABCAKIAVAAIgIADgAgnAFQgMAAgKgCQAVABAUgEIABAAIANACQASAEAUACgAhKgBQgJgFgDgGIACACQAFAFAFADIABABg");
	this.shape_342.setTransform(43.3,20.4);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#B9A8A0").s().p("AAAAAIADAAIgFABIACgBg");
	this.shape_343.setTransform(44.9,10.5);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#60574C").s().p("AgDgHQAAAAABABQAAAAABAAQAAABABAAQAAAAAAABIAEAMIgHgPg");
	this.shape_344.setTransform(60.1,11.4);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#7C6F65").s().p("ABqAQQAFgCAEgDIABAAIAAAAIgBAKIgJgFgAhygTIADgBIACAAIgGACIABgBg");
	this.shape_345.setTransform(43.3,5.1);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#9B948E").s().p("ACsAvIgLgHIALACIACACIACAFIgEgCgABfAMQgZgOgcgFIgEgBIgDAAQgSgDgRAAIgFgEIBAAHQAUAGAPAGIATAIQgJgBgJABgAiYgVIABAAIAGABIAVAEIASgJIAVACIgRAAIgXALgAiggXIgFgQIgKgJIABAAQAGACADAEIAEAGIACAJQAAADACACg");
	this.shape_346.setTransform(41.7,8.1);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#998D84").s().p("AAAgDIABAEIgBADg");
	this.shape_347.setTransform(57.3,5.9);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#2F2217").s().p("AAAAAIABAAIgBABg");
	this.shape_348.setTransform(63.7,12.4);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#BFA495").s().p("AAAAAIAAAAIABABg");
	this.shape_349.setTransform(63.7,12.4);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#64574D").s().p("AALAMQAJAFAJAEIACACQgFAGgIAEgAgRAVIgLgDIgCgBIAMABIADAFgAgcggIAAABIAAAFg");
	this.shape_350.setTransform(60.7,10.3);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#B6A498").s().p("AAAgBIAGABIAAAAIgLACIAFgDg");
	this.shape_351.setTransform(83.4,43.4);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#777469").s().p("AgCAAIAEAAIABAAIAAAAIgBABg");
	this.shape_352.setTransform(83.8,43.2);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#72665C").s().p("AAAAAIADAAIgFABIACgBg");
	this.shape_353.setTransform(83.7,43.1);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#19110D").s().p("AgCAEIgDAAIABgBIAKgGIgHAIg");
	this.shape_354.setTransform(84.3,42.7);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#4E4137").s().p("AgEgEIAJADIgCABIgHAFg");
	this.shape_355.setTransform(84.5,29.4);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#2E281F").s().p("AgFACIAFgEIADgDQgBAHAIABIgCABIgRACg");
	this.shape_356.setTransform(81.9,30.2);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#1E140E").s().p("AgTAJQALgLAGgOQAIgEAJAIQAGAAgCAFIgBABIgTAIIAAAKIgLAHQgHgCAAgIg");
	this.shape_357.setTransform(84.1,28.7);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#100A08").s().p("AAAAJQgCgBgDgFIACgLQAIAJABAEIAAACQAAAAgBABQAAAAAAAAQgBABgBAAQAAAAgBAAIgCAAg");
	this.shape_358.setTransform(85.9,21.4);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#372C21").s().p("AAAAoQACgFgGAAIgBgkIgBgNIAAgHQADAFADABQAEAAABgCIACAYIAAAEQAAANgDAMIgEAFIAAgBgAgEghIAFgHIACADIABASQgBgEgHgKg");
	this.shape_359.setTransform(86.1,23.9);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#675D54").s().p("AmFB7IAEgDIAighQAJAAAHgJIgNAUIgNALIgeARgAlKBGQAIgSAAgZIAAAAQAGgEABADQACAJgBAIIgDAGIgGAIIgIAOIABgBgAAtALICagLIBBACIgIgJIgiAHIhSgCIgOgJIAwgCIALADQAFACAHAAIAMABQAcACAmgEQASAGAUgGIAbgHQAFAAAEgCIgDADIARgBIgGADIhGARIAAgBIgJAEIgWAFIgBABIgQgBIgDABIghABIABgBIgHAAIgSgCIAAgBQguAAgUACIgpACIgBAAIgagDgAkgAJIAAAAIgBABgAkNAGIAGgLIAdgFIAAAJIgGABQgBgMgTANIAAAAIgEADIAAADIgFgBgAjOgEIgEgBIgNgCIAAABIgBACIgEABIADgKIA0ADIAOAFIAQgCIAGAEIgyACgABbgKIAEAAIAQgBIAPAAIgUAGgAhOgQIAAAAIAwADgAF2g1IABgDIABAAIAAAAQAFgNACgOIACABIABgNIAFAKIABAkQgJgIgJAEgAGDhqIACgTIABATIAAAIg");
	this.shape_360.setTransform(46.4,32.4);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#F8EEEE").s().p("AAAACIAAgGIABACIAAAHIgBgDg");
	this.shape_361.setTransform(84.8,20.6);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#F6F0E9").s().p("AAAAAIAAgBIABgBQAAABAAABQAAAAAAAAQAAAAAAABQAAAAAAAAIgBABIAAABIAAgDg");
	this.shape_362.setTransform(84.8,17.4);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#DED5CF").s().p("AAAAcIgCgGIAAgNIACADIABAFIACAIIABANgAgDACIAAgGIAAgRIACgCIABAbIgDgCgAgDggIABgFIABALIgCACIAAgIg");
	this.shape_363.setTransform(85,19.9);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#493529").s().p("AgBgIIABAAIAAABIACAHIgCAJg");
	this.shape_364.setTransform(86.1,13.6);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#EAE1DB").s().p("AnpDtIAbAAIABACIgcgCgAC9gBIAJgBIgFACgAHlihIAFgCIgGAIIABgGgAFojoIgPgGIAAAAIAAAAIAiAJIgTgDg");
	this.shape_365.setTransform(56.4,41);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#A69E98").s().p("AAMAFIghgIIAAgCIAjAHIAIAEIgKgBg");
	this.shape_366.setTransform(93.1,17.5);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#76685D").s().p("AACAeIgBgCIgBgSIABgRIACABIABA9gAAAgfIgDgOIADgJIAAACIABAEIAAABIAAAQIgBAAIAAAAg");
	this.shape_367.setTransform(86.4,19.1);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#271B15").s().p("AADApIgDgVIAGAFIABAAIgBASgAgGgmIACgCQAGgHgBASIABASIAEANIgDABIgCACIgBACg");
	this.shape_368.setTransform(85.8,15.7);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#5C534D").s().p("AAFA3IgDg7IgHgKIgBgGIABgkIABACIACAKIACAEIABABIACAAIAAABIAAgBIAEAAIAFAOIAAAFIAAACIAAAEIgBAAQABgSgHAHIgCADIAGAtIAAAAIgBACIAAAFIAAACIADADIACAVIgGAHIgBAMgAgLhFIgBgFIACAEIADAIIAAABg");
	this.shape_369.setTransform(84.8,14.2);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#372D26").s().p("AAFALIABAAIAAABgAgDgFIgCgFIABgBIADAIg");
	this.shape_370.setTransform(84.5,9.1);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#ABA29C").s().p("AlxCiIAag0IABgBIAAAAIgEgBIgRAAIADgLIAKAAQACAIAIAAQAAAZgJASIAAABIgFAHQgHAJgIAAgAC/BGQAdAAAdgFIACABIAFACQgZACgUAAIgUAAgACcBAIgxACIgPAAQAhgCAggDIAGAEIADACIgKgDgAgxBAIgwgDIgBgBIAKABIAMAAIAYAAIAoAEgAjxAmIABgGQADAEAFAFIgEAAgAj/AeIgYAAIAAgEIAGgCIATADIALAJgAFlAVIAAAAIAAAAgAFsgFIABgJIAAgJIADAGIgBANIgDgBgAFvgiIAAgHIgBgcIAAAAQABAAAAgBQAAAAAAAAQAAgBAAgBQAAAAAAgBIgBABIgBgLIgBAEQgBgTgDgUIAIAKIACA9IgBATgAFliHIgBgLIABgPIAAgDIACAEIAAAlQgCgFAAgHg");
	this.shape_371.setTransform(48.2,24.6);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#F9F1EB").s().p("AAAgHIABACIAAANIgBgPg");
	this.shape_372.setTransform(83.8,9);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#D7D2CC").s().p("AAAAEIgBgJIADAHIAAAEIgCgCg");
	this.shape_373.setTransform(83.7,7.8);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#F4F1EB").s().p("AhBBfIgBABIgDACIAEgDgAARhhQAbAHAaAIIAAAAIg1gPg");
	this.shape_374.setTransform(106.6,22.6);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#241912").s().p("AgEAHIgCAAQADgDABgEIAAgBIgCgFIALADIgKAKIgBAAIAAAAg");
	this.shape_375.setTransform(111.8,24.3);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#FFFF00").s().p("ATHHAIgHgSQgNgJAMgDQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABABQALACgCgIIgEgHQgDgEgIgBQgKAQgGgPIAFgMIABgBIAAgBIAAgBIADgFQgJgRgLAKIgBAAIAAABIgBABIgCACIgPgQIjlAbIAuggIABgBIAAAAQAbAPgEgRIAAgFQADgDAAgFIABgBIA5geIgFgkIgXgXIAFgBIACAAIABAAQAJgEgHgLIATgCICkg2IACgBIAKgDIA5gTIALAhIgCAAIAAABQgWAQAKgOIAEgFIgSgJIAAAEIgCAAIABAMIAAASQgMAKANAHIAEABICBAbIABAAIAQAEIAFABIAMAEIASAIIAGACIAYAKIAAABIAAADIABABQAAAEAFAAIABAAIAMAEIAZAMIhoABQgOgrgyAEIAFAFQgBACAGAFIAWAZIAZAGIh4AUIgMABIgBABIgCABIgdBsIAAABgAQNFVIAAACQgBAHAHABQADADABgGQACgIgGAAIgGABgAQxFSIAAABQgBAMALAAIAAABQAHgEAFgHIABAAQAAgEgCgDIgBAAIgIgBQgIAAgEAFgARpFLIAAABQAEAPAQACIABgBQAEgCADgDQgCgGgDgDQgIgGgGAAQgFAAgEADgAVQFDIAMgZIgZAAIACAEIAAAAIAAACIAEAMIADgBgAUXEoQAAAJADAGQAEAKAJABIAAAAQAIgLgHgNIgBgBQgEgEgFAAQgDAAgEADgATPDQIABAHIhHAxQgDACgCADQAAABAAAAQAAABAAAAQAAABAAAAQAAABABABIAHALIgJAdIAHgHIAigiIBKgCIgEgIIACAAIgDgBIgKgQIgigCIASgUQAFAFgDgHIAHgJIAAgBIgEgEIgIgDIgFADgAn8HAQAGgJAJgDIAKgEIAQgFIAFgJQAEgHAFgDIgCgCIAAAAIASgOIAbgUIAIgGQAvggA4gRQAngMAkgSIATgKIAZgPIAzghIACgDIABgCIAEgGQANgQALgRIANgUIAFgHIAHgOIAHgIIADgGIABgDQAJgSAOgMIACgBIACgBQAKgDAHABIAEABIAHADIAEgDIADgCIAGgDIADgCIAHgCIAFgCIAAAAIAFgBIAHgBIAAAAIABAAIABAAIAEAAIAFABIAHADIACABIAKgBIAygCQBUgBBUAOIAPACIAaADIAAAAIAqgCQAaAAAaABIATABIACAAIARAAIAggBIADgBIARABIABgBIAWgFIAHgCIACgBIBFgSIAHgDIABgBIALgHIAJgFIACgCIgLgDIAUgJIAFgFQADgLAAgNIAAgFIgBg9QAqAVAygBQAGAFAHABQAVAFAUAKIAMAFIABgBIAFgBQAPAEADAJIAGADIgBACIgEACIgBAFIgEAKQgKAVgWAGQgNAFgKAKQgJAIgMAEQgXAKgVANIgYARIgSAPQgWAVgaAUIgsAgQggAYgcAdQgXAZgfAMIgMAFQgWAHgVAKQhGAkg9AwIgBABIgDACIgKAJIgDAFIAAABQgIANgIAMgAhuGcIgBgCIgbAAIAcACgAIcCrIAEADIAFgEgA4HiCIAagLQAYgJAVgMQA/giAzgvIBag7IAEgDIAogOIABAAIAZgJIAIgEQAkgNAhgUIAngZIAyghIAFgCQASgIATgHQAKAIANAHQAGADAIACQAaAIAZALQAPAGAMgIIAFgEIAWAtIgsBOIgOAfIAAADIgJA8IgJBRIgOALIgGAGIgpAfIgEAMIgEADIgbAJIgRAOIgQASIglAVIgcAgIgEANIgOASIgPAIIgkAJIgKACIgwANIgOAFQgPAAgLAJQgKAKAAAOIAAAJIgGACIgKAKIgDABIgIAGIAAAAIgDABQgLAHgJAJIgTAQIgFABIgEACIgYAUQgKAKgNACQgEAEgBAGIgBADIgEACIgGAFIgFAGIgBADIgBABQgbAQgXAZQgEAFgDAGIgBAAIgDACIgEAFIgBAEQgSAKgQAPgA2+AOIACABIgBgPIgBAOgAwukZIABABIAAgBIgBAAgAQADqQgGgCgIgMIgDgGQgKgRAMAHQAGABABgHQAAgFgBgGQgBgDgCgBIgFgGIgDAEIgDABIAAACIAAACIgFAKIgXgcICmAXIhiAfIgCABIgBABIgDABIgEAGQgDADgDAAIgBAAgAUvCVIAGgEIAIgEIAVgJQAHABgGANIgiARQgTgRARADgAKLheIABAAIgBABIAAgBgA01ksIAGgDIgFAEgAwtm9IAFgBIgDAFIgGACg");
	this.shape_376.setTransform(21.3,23.7);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#9B897D").s().p("AAAAAIABAAIAAABIgBgBg");
	this.shape_377.setTransform(138.7,18);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#DED6CF").s().p("AAAAFQgDgCgCgEIgHgOQALANAMALIAAACIAAACIACADQgGgGgHgFg");
	this.shape_378.setTransform(75.8,-11.1);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#6B5242").s().p("AAAAAIAAAAIAAABg");
	this.shape_379.setTransform(67.6,-23.6);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#7D6355").s().p("AAGAMIgTgiIAAgBQAOAXANAYIgIgMg");
	this.shape_380.setTransform(69,-21.2);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#5D5D5C").s().p("AAGALIAGACIADAFIAJASQgKgLgIgOgAgXgjIAFAGIAAADIgFgJg");
	this.shape_381.setTransform(73.6,-17.1);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#9EA1A1").s().p("AABAMIACAAIgBAGIgBgGgAABgNIgDgBIAAgDIAFACIAAACg");
	this.shape_382.setTransform(54.8,1.3);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#685E58").s().p("AgDAHIAAgBIAGADgAACgHIABgCIABAAIAAACIgBABIgBgBg");
	this.shape_383.setTransform(54.9,-1.2);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#819294").s().p("AAHAgIAAgCIABACIgBAAgAgHgfIABAAIABAEg");
	this.shape_384.setTransform(54.5,-5.3);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#676061").s().p("AgBgBIAAAAIgEgFIAHAEQAHAEABAGQgFgFgGgEgAgIgGIgCgBIAEABIABADIgDgDg");
	this.shape_385.setTransform(48.9,-20.1);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#B5A19A").s().p("AAHAKIgOgMQgBgEABgDIABAAIACABQgEAHAQALIgBAAg");
	this.shape_386.setTransform(49.4,-22.3);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#B6B2AD").s().p("AAbA+IgUgyIgEgPIAZBBIgBAAgAgag5IgBgDIAAgBIAAABIAFAFIgEgCg");
	this.shape_387.setTransform(51,-14.7);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#B6A89F").s().p("AABAGQgCgBgCgDIgDgEIgBgEIAJAEIABAAIAFAJIgBAAIgGgBg");
	this.shape_388.setTransform(53.1,-16.9);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#75645A").s().p("AALAaIgHgMQACACADACQAEABADAAIAFAMgAgUgeIABAAIATAjIABAEg");
	this.shape_389.setTransform(52.3,-18.1);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#ACB7B5").s().p("AAAAHIAAgCIABgMIAAAKIAAAFIgBgBg");
	this.shape_390.setTransform(53.6,-37.3);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#C0A69B").s().p("AAIAHIgSgPIgCAAIgCAAIAAgDIAdAXg");
	this.shape_391.setTransform(59.5,-34.7);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#BBA096").s().p("AACAOIgGgHIAGgUIADAZIAAACg");
	this.shape_392.setTransform(57.5,-37.1);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#B39C92").s().p("AgDgCIAGAEIgCABQgCAAgCgFg");
	this.shape_393.setTransform(42.2,-34.3);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#64524C").s().p("AAEACIAAAAIAAABgAgEgCIABAAIABABg");
	this.shape_394.setTransform(42.2,-34.4);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#231E1A").s().p("AgDABIgBgBIAEgCQACgDACABIgBAJg");
	this.shape_395.setTransform(42.3,-34.7);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#AC9F9A").s().p("AAAAAIAAAAIABAAIgBAAg");
	this.shape_396.setTransform(43.1,-36.9);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#7C7A7A").s().p("AgIALIAMgVIACAAIADAAQgEAFgCAGIgCAFQgBgCgEAEIgDADIgBAAg");
	this.shape_397.setTransform(42.6,-35.8);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#4C4748").s().p("AgJAMIATgXIAAAKIgDABQgIAEgFAIg");
	this.shape_398.setTransform(44.2,-38);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#645B54").s().p("AgIAKQALgRAGgCQgEADgHAMIgBACIgFADIAAgBg");
	this.shape_399.setTransform(44.3,-40.3);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#8C8C87").s().p("AACgFQABADgCACIgBAFIgBABIADgLg");
	this.shape_400.setTransform(44.5,-45.3);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#7B675D").s().p("AAAAEIgCgHIACADIADAAIgDAEIAAAAg");
	this.shape_401.setTransform(48.6,-45);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#888179").s().p("AgDgFQAEgLABAPIACAAIgGAMg");
	this.shape_402.setTransform(48.4,-47.2);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#BBA8A2").s().p("AAAALIgCgDQgDgDABgEIAGgMIADAAIgBAHQgIAJAHAGIgBABIgCgBg");
	this.shape_403.setTransform(48.6,-46.2);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#5A544F").s().p("AAAAFQgBgOgFAKIgBAAQAEgJALAHIgCAEIgBACIgEAAg");
	this.shape_404.setTransform(48.7,-47.9);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#7A5A4F").s().p("AAIgfIABAHIAAABIgKAiIgHAVg");
	this.shape_405.setTransform(58,-39.6);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#AF8D7F").s().p("AgBAEIADgOIAAAIIgCANg");
	this.shape_406.setTransform(58.9,-43.2);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#70888B").s().p("AgLAcIALghIABgDIAEgGIgQA1gAAKggIAAgFIACgBIgDAJIABgDg");
	this.shape_407.setTransform(54.9,-40.8);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#666159").s().p("AABAFQgBgHgGgJIABABIAMAWIgGgHg");
	this.shape_408.setTransform(64,-27.8);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#75574B").s().p("AAJAFIAHAFIAAABIgHgGgAgOgKIgBAAIACAAIACABIgDgBg");
	this.shape_409.setTransform(59.4,-34.5);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#9A867B").s().p("AB9DmIAAgEIABAFgABdBfIAQAvIABADIgBAAIgBABIgPgzgAAyAAIAAgCIAFAHIgFgFgAAfgaIgFgFIgKgSIgCgFIAGADIAWAkIgLgLgAgVhnIgWgkIAAgBIAbAjIAAAIgAh8jlIgBgBIAEADIgDgCg");
	this.shape_410.setTransform(73.5,-10.3);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#858581").s().p("AgegIIAGAAIArAMIAMAFg");
	this.shape_411.setTransform(2.2,-25.6);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#FEFDFC").s().p("ACtBJIACgBIABAAIgCAHIgEAAQgMgCAPgEgAivhIIAAgFIABgBIALAWQgHgHgFgJg");
	this.shape_412.setTransform(3.5,-25.3);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#798585").s().p("AAMgLIgDAHQgEAHgFAFQgFAEgGAAg");
	this.shape_413.setTransform(23.3,-19.3);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#FBF7F4").s().p("AgEACIAAgBQAEgGAFgCQgEAFgBAFIAAABIgEAEIAAgGg");
	this.shape_414.setTransform(27.3,-20.8);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#786055").s().p("AgEACIAJgLIAAABIgHAMIgCAGg");
	this.shape_415.setTransform(26.9,-21.2);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#776965").s().p("AgMADIAAgBIgBgBIAAgBIADgCQAKgHAIANIAGABg");
	this.shape_416.setTransform(26.4,-24.2);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#72625B").s().p("AgPACIALgCIgCACIgJABIAAgBgAAKgBIAGgBIAAABIgGAAg");
	this.shape_417.setTransform(29,-22.4);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#A3A7A6").s().p("AgXgQIAPAEIAEADIAcAZIAAABg");
	this.shape_418.setTransform(19,-0.8);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#816B61").s().p("AADADIgFgEIgCgBIAHADIACACg");
	this.shape_419.setTransform(17.3,-5.5);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#FCFAF9").s().p("AA9ArIABABIAAAAgAA3AmIAAAAIAAABgAASAVIgEgCIgBgBIAJACIAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAgBAAgAg9grIACAAIgCABg");
	this.shape_420.setTransform(24.8,-1.4);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#DDD1C9").s().p("AC5A4IAAAAIADgDIAAAFIgDgCgAgwAaIAAgCIAHAAIgDABIgBABIgCABgAhsgCIAHABIAAABIgBABgAi7g4IADAAIgBABg");
	this.shape_421.setTransform(36.4,0.6);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#AFA59B").s().p("AgCAEIgBgDIABgFIACAAQAEgBAAAFIAAACIgBADIgCAAIgDgBg");
	this.shape_422.setTransform(15.1,-5.5);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#59564E").s().p("AAAAGIABgDIAAgDQAHAGgEAAIgEAAgAgEgFIACABIgDABIABgCg");
	this.shape_423.setTransform(15.4,-5.6);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#5F5953").s().p("AAFgFIgLABIAIgFIADAAIACATg");
	this.shape_424.setTransform(12.8,-7.5);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#FF0000").s().p("AHlH+IABgBIAKgGIAJgFIAIgJQAVgVAZgQIAMgIIAGgEIABgDIAGgBIAIgIQAJgIALgGQAXgGATgMIAKgDIAFgDIAIgDQAPgGAMgKIADgCQAOgMATgHIABgCIAkgjIASgSIANgJIAHgJIAAgBQAHgHAJgFIAEgCIAMgDIAAAAIABgBIAAgBIAIgJIAFgGQAkgvA4gWQAagLAYgNIACgBIACgBIAEgEIAJgIQAfgcAlgRQAMgOASAAIABAAIABAAIALgLIgMgDIgBgBIgCgDQgRgBgRgEIgFgCIgDAAQgUgPgYgJIgygUIgVAAIgIgEIgjgGIAAABIAAABIAAAAIAPAEIgQgDIAAAAQgRgFgPgIIgLgBIgBgQIACgCIgDgDIgBgDIgCgHIgBgFIAAgBIAAgGIgFgOIgDgHQgEgHAAgJIgBgLIAEACIAaAIIBVAcQAQAGARABQAtAFAsAKIA1APIAAgBIAVAHQAoAeAzABQAjABAhAJIAAAAIABAAIgBAAQgnATglAYQg7AmgzAwQg0AxgwAzQgiAmgsAcQgmAZgfAhQgIAIgIAFQgcATgaAVQgrAjglApIgCABIAAABIgIAJgA0rH+IAAhFIAnghIAHgGIAIgDQAEgDADgFQAFgIAJgHQAFgDACgFQAPgJALgQQADgEAEgCQALgFACgLIABgCIAMgDQAGgFAEgGIABgDIAGgDQAJgEAHgHIADgDIAPgDIABgBIAHgGIASgOQAEgEACgFIAJgCQADgDABgDQAFgKAKgFQAGgDAEgIIAJgCIAKgGQAVgJAXgHQAZgCAZABIANABIAJABIADAAIADgGIALADIAXAIIAAACIABgCIAGgEIATgCQAogBAiAUIAXANIANAHIA3AdIATAKIAJAFIAWANIAOAJIAHAFIAaASIADABIACACIA3AlQAJAGAKAJIADAEIABACIAGAGIACAAIABAAQATgCANANIABABIAFACIAAADIAAABIACADIACACIASABQARAIAPAKIgVgRIAeAUIAPAKQAEAGAFAGIgBAAIACACQAJAIAHAJIAFAFIAAABIAJAAQAHAGAGAIIADAKIACAFgAz5F7QAXgZAbgRIABAAIgGAFQgFAKgKAFQgIAFgFAIIgJADIgBABQgCAGgDAEIgBADIgIACQADgFAEgFgAxlEAQAKgIALgHQgFAEgCAFIgCAEIgGADIgMAKIgCADIgKACIASgQgAxGDqIADgCIgBACIgBADIgJACIAIgFgA0rjYIA3gnIANgKIAcgSIAIgFQAlgWAlgSIAcgOIAJgFIAUgLIgBgBQASgMAQgOIAcgQQAjgUAhgXIALgIQAogUAmgWQAIgFAHgFIAAAAIARAAIAHgDQAOACAOgBIACAAIAEACIAMgCIgEgDIABAAQAEAAADABIASAEIACABIAQAKIADADQAQALAJgHIAAAAIACABQAPAHAEATIAAACIABAIIAAADIAAAGIAAAAIAGAOIAAAPQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABIAAACIAZAhIACAEQgKgHgPgBQgTgCgOgKIgJgFIABgCIACgJQACgRgbACIAAABIgEAAIgDABIgNAGIgHgCIAAABIgHABIgEAFIgCACIAAAAIgBADIgHADQgTAEgWAJIgDACIgGABIgEAHIgIADQgKAEgJAIQgKAJgKAIQgVANgWAJIgCgCIgFAEQgqAQgoAVQglAUglAXIgHADIABAAQgeATgYAXQg9AzhIAgQgMAFgMAEgAIHhwIAAAAIgFACQgQADgRgCQgjgGghgIQgigIghgKIgLgEIAAADIgFAAIgCgBIgGAAIgBADIgNADIgpgdIAAAAIACgCIAEACQABAAABAAQAAAAABAAQAAAAABAAQAAAAAAABIAAgCIgIgBIgHgCIgagCQgCAAgDgCQgOgPgEgOIgdgUIABgBIgDgDIgIgEQgIgFgBgFQgBgFACgEQgGgKAGgQIAEgHIABACQAAAFAEACQAfALAfAJIAHACQAIACAJAAQA2gDAwAVIAEADQApARAqAPQAoAOApAAIATgBIACAFIAAACIAAACIAEABIADAAIgBAbIgCAAIACAFQACAKAAALQABAEgDADIgCADIgBAAQgEADgFACIgIABQgJAAgKgHgAE9iPIAAAAIgBgBgAE2iUIAAAAIAAgBgAEsieIAAgDIgCgBIACAEgADCjmIABAAIgCgBg");
	this.shape_425.setTransform(-0.7,17.4);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#716D66").s().p("AAXAFIAlgLIANADIAAABQgZAGgZADgAhIABIAGAAIAAABIgGgBg");
	this.shape_426.setTransform(6.8,-11.8);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#A7A09B").s().p("AAgAaIgJgFIgBgGIAZAPgAAAgNIgIgDIACgKIgjAEIgFgDIAUAAQAIgBAGgCIALgBIABAQIAAAAg");
	this.shape_427.setTransform(13.4,-5.1);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#717B7C").s().p("AgTAPIABgBIAmgeIgnAhIAAgCg");
	this.shape_428.setTransform(20.1,-16.4);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#000000").s().p("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");
	this.shape_429.setTransform(2.9,15.2);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#7D8282").s().p("AgZALQAVgDAQgKIgYAPgAAbgMIAAABIgMAHIAMgIg");
	this.shape_430.setTransform(15.4,-13.6);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#917F77").s().p("AAKgEIAEAAIAAAAIgbAJg");
	this.shape_431.setTransform(16.4,-26.4);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#726052").s().p("AgCASIACgEIADAAIgBABQgBADgEABIABgBgAAFgFIgKgLIAAgBQAEABACACQAEADAAAGQABAFgBAGIgBAFg");
	this.shape_432.setTransform(19.1,-28.2);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#888A87").s().p("AAAAAIAAAAIAAABg");
	this.shape_433.setTransform(18.3,-29.6);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#736861").s().p("Ag1ABIAWAEIgDABIgHAAgAA2gFIgWAHIgKABg");
	this.shape_434.setTransform(9.6,-25.3);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#7D746B").s().p("AgrgBIgPgFIABAAIA0ALIApgJIAXgCQgcANgdAAQgWAAgXgIg");
	this.shape_435.setTransform(7.7,-26.3);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#130D0B").s().p("AAqA3IgDAAIgXgFIgrgNIhCgTIgCAAQgggBgXgUIgDgEIgLgWIgBABQABgKgGgGQADgDAAgFIAAgBIADgGQAHADAJAKIANARIAIAIIABAAIAGAFQAzAjBAANIANAGQA1ATAygZQAggEAPgVIAAgBIACgEIALALIgBARIgBAEIgEAAIgMgBIAAAAIgEAAIgZAKIggAJIgeAIg");
	this.shape_436.setTransform(2.5,-30.2);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#B9ABA1").s().p("AgYgEIAAAAIAAAAIgBgCIAzANg");
	this.shape_437.setTransform(4.5,-26.5);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#97837A").s().p("ABAAfIABAAIAAAAIgBAAgAhAgeIAJAHIgBABIgIgIg");
	this.shape_438.setTransform(-4.6,-30.1);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#0B0806").s().p("AggADIgOAFIAAgFIAEgEQAOgMAPgEQAKgCAJABQALABALAFIAFADIAOAOQAAAHgEgBIgQgHIgCgBIgNgFIgpATIgFADg");
	this.shape_439.setTransform(1.3,-39.3);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#7B7570").s().p("AAhgCIgFgDIAHABIAHAFIAFALgAguAHIAYgSIAJABQgPAEgOAKIgEAGg");
	this.shape_440.setTransform(1.3,-39.9);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#A0928C").s().p("AABAOIABAAIgBABIAAgBgAAKgDIgFgLQAEAEACAEIABADgAgLgFIACABIgBABg");
	this.shape_441.setTransform(5,-38.3);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#B7A399").s().p("AAAACIABgDIAAADIgBAAg");
	this.shape_442.setTransform(3.2,-44.9);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#AAA7A3").s().p("AAAAAIABAAIgBAAg");
	this.shape_443.setTransform(3.2,-44.6);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#5D5B55").s().p("AgBgBIACAAIABgBIAAAAIAAABIgBAEg");
	this.shape_444.setTransform(3.1,-44.9);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#67615E").s().p("AASAEIgEgDIghgBIAfgDIAIAHg");
	this.shape_445.setTransform(0.3,-46.6);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#6A5850").s().p("AgYAAIgCAAIAJgEIAHgDQAUABAOALIADADg");
	this.shape_446.setTransform(-0.6,-48.1);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#0B0909").s().p("AAZgHIgtABIgFAFIgCAAIAAABQgLAFgFgGIgCgEIAAgEIBYgFIADAdg");
	this.shape_447.setTransform(15.8,-43);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#99918A").s().p("AgPgBIACADIgBAAgAAKgBIAFAAIgLADIAGgDg");
	this.shape_448.setTransform(12.8,-43.5);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#C0BBB8").s().p("AAIAGIgBAAIgOgLIAGADIAJAIg");
	this.shape_449.setTransform(39.4,-26.5);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#A6A19E").s().p("AAeAOIg+gaIAAgBIANADIADABIAAABIAxAWIgDAAg");
	this.shape_450.setTransform(41.1,-24);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#D3C5BF").s().p("Ag4AfIABgGIAJgNIAJgBIgGAFQgGACgDAHIAAACIAAAFIgEAFgAgNAHIArgdIAKgLIABgCIABgBIAAAAIAQAPIAAACIgRgFIg0AgIgCgBg");
	this.shape_451.setTransform(32.1,-23.3);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#78726D").s().p("AgDgCIAGADIABACg");
	this.shape_452.setTransform(39.7,-29);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#5F544F").s().p("AgBgIIAVAMIgYgGIgPALg");
	this.shape_453.setTransform(32.8,-28.4);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#6E6761").s().p("AAJAHIgOgOIACgCIAZATgAgIgFIgKALIgDABg");
	this.shape_454.setTransform(37,-26.1);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#7F665B").s().p("AgWAPIAAgBIApgbIAEgBIgrAdIgCAAg");
	this.shape_455.setTransform(32.8,-24);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#6C5E57").s().p("AAGgLIAAAMIAAADIgBACIgIAFIgBABQgFAAAPgXg");
	this.shape_456.setTransform(33,-31.3);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#F4E9E8").s().p("AAAgDIABgBIgBAJIAAgIg");
	this.shape_457.setTransform(32.1,-33.8);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#A7948E").s().p("AAAAAIAAAAIAAABg");
	this.shape_458.setTransform(32,-35.3);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#84817E").s().p("AgYAJQALgBAGgFQADgDABgCIAcgFIgrARgAgCgJIABAAIgBABIAAgBg");
	this.shape_459.setTransform(29.6,-24.7);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#E5DCD9").s().p("AhsBTIgTgFIBcAPIgmAAgAACBaIAAACIgGAAgACfgGIABgBIAAACgACvgbIABAAIAAAAgAgNgjIADgBIADABIgGAAgABng5IAAAAIABAAgADJg8IAAAAIAAACgAjFhUIgDgIQALAJANAFIgBADIgUgJg");
	this.shape_460.setTransform(7.5,-21.1);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#626A6D").s().p("AARgRIAAACIgaAfIgHACg");
	this.shape_461.setTransform(31.1,-31.9);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#D0C8C5").s().p("AgMAbIAAAAIgCABgAAOgaIABAAIgBABg");
	this.shape_462.setTransform(30.7,-32.7);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#606261").s().p("AgBADIABAAIANgbIAAAAIAAADIgNAYIAAABIgMAVg");
	this.shape_463.setTransform(28.2,-35.6);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#5E493D").s().p("AACgMIAAATIgDAGg");
	this.shape_464.setTransform(26.3,-41.5);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#938A83").s().p("AAMgOIgnAAIgGAAIAtgBIAVAXIABAAIgCAIg");
	this.shape_465.setTransform(17.1,-42.2);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#DDD4CF").s().p("AAAAAIABAAIgBABg");
	this.shape_466.setTransform(27.2,-44.1);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#6F8186").s().p("AgmA4QAHAAAHgCIgCABIgLAHgAAmg9IABAAIgBAJIAAgJg");
	this.shape_467.setTransform(22.6,-40.7);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#D3CDC5").s().p("AgBgFIACABIABAEIgBAGIgCgLg");
	this.shape_468.setTransform(36.3,-42);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#DACFCE").s().p("AAAAAIAAAAIAAABg");
	this.shape_469.setTransform(33.5,-48);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#4B4340").s().p("AAAgKIAAACQAAABABAAQAAAAABABQAAAAABgBQAAAAAAAAQACgBADgEIAAAAIgBAEIAAABIAAAAIgFALIgJAJg");
	this.shape_470.setTransform(38,-42.6);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#3A302B").s().p("AgDAIIgCgDQAHgMADgBQACgBgCALIgBABIAAAAIgBAAQgCAEgBACIgCAAIgBgBg");
	this.shape_471.setTransform(38.4,-44.3);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#D6CFCC").s().p("AgNAsIAFgHIABABIgFAHgAAPgsIAAAKQgEABgDADg");
	this.shape_472.setTransform(38.5,-40.2);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#5D534E").s().p("AgjAEQAkgJAlACIhLAHIACAAg");
	this.shape_473.setTransform(30.5,-64.3);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#3F3832").s().p("AABACIAAAAIgCgEIACACIABACIgBABg");
	this.shape_474.setTransform(36.4,-54.1);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#BAA9A5").s().p("AgFALIgBgFIAAgBIAAAAQgCgHABgEIABgEQABAAAAAAQABAAAAAAQABAAAAAAQABAAABAAIAAAAIADACIAGAGIgIgGIgBgBQgDAAgCADIAAACQgBAEABAGIABAEIAAABg");
	this.shape_475.setTransform(35.3,-53.3);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#58524F").s().p("AAFBTIAAgCIAAAEgAAHAAIAAAAIAAAAgAAMg9IAAAAIAAADIAAgDgAgLhUIABABIgBAAIAAgBg");
	this.shape_476.setTransform(32.3,-42);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#735147").s().p("AgMBOIABgCIgBAEIAAgCgAAGhOIABAAIAAgBIACALQAEATAAAVIAAAXIgCAFIAAABIAAABQAFgngKgpg");
	this.shape_477.setTransform(30.5,-42.5);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#64554E").s().p("AAAAAIAAAAIABAAIAAABg");
	this.shape_478.setTransform(30.5,-54.3);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#BDB2AE").s().p("AAFAEIAAAAIgFgEIgFgEQABAAABAAQAAAAABAAQAAABABAAQAAAAABABIAAAAIAAACIAFADIAAAAIABACg");
	this.shape_479.setTransform(34.6,-55.4);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#B6B0AA").s().p("AKWIcIgNgEIAOAEIgBAAgAqVoUIAAgBIAAgCIAAgEIAAAAIABAEIABAGIgCgDg");
	this.shape_480.setTransform(100.3,-3.7);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#1F1410").s().p("AAAAAIABAAIgBABg");
	this.shape_481.setTransform(31.1,-58.6);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#575048").s().p("AgFgDIgBgPQAAABABAAQAAAAAAABQABAAABAAQAAABABAAIABAAIAIAig");
	this.shape_482.setTransform(37.2,-56.1);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#4D4440").s().p("AgGAEIAAAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIAAAAIACgCIABgCQAFAEAAgCQAEgGAFAFQgBAAAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAQgIAEgEAAIAAAAg");
	this.shape_483.setTransform(35.7,-56.3);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#9E968F").s().p("AAFgBIAAABIABAAIgBAAIgBAAIgJACg");
	this.shape_484.setTransform(37,-60.2);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#615C59").s().p("AAOBCIABAAIgBACgAgOATIAMhWIACABIAGALIgBAAIAAADIgDgDIgBAEIgIA3IgBADIgDAOQAOgLgRAdg");
	this.shape_485.setTransform(28,-44.7);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#A79E9A").s().p("Ag2B4IgIgFIAMAAIgCAEIgBABgAgHB0IAdgDQgIAFgKAAQgFAAgGgCgAg3BTIAAABIgCADIgBABIgCABgAAxgKQAKgcgBgaIACgBQAEANgCAOQgCANgJAPgAAeg4IABgCIgBACgAAshzIAAgEIAAAFIAAgBg");
	this.shape_486.setTransform(24.1,-38.4);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#9DB3B7").s().p("AAAAcIAAg3IAAAGIAAABIABAuIAAACIgBAAg");
	this.shape_487.setTransform(26.4,-49.7);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#C9BEB9").s().p("AAoAPIABAAIAAAAgAA0gKIAAgBIABABIAAAAIAAAAgAgzgNIgBAAIAAAAIABgBIAAAAIAAAAIAAABg");
	this.shape_488.setTransform(26.6,-55.7);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#D2C6C2").s().p("AgHgCIAMABQABAAAAAAQABAAAAABQABAAAAAAQAAAAAAAAIAAABIAAAAIgBABIAAABg");
	this.shape_489.setTransform(20.6,-57.3);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#FAF4EE").s().p("AAAAAIAAAAIAAABg");
	this.shape_490.setTransform(20.4,-60);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#514944").s().p("AgHAeIgHgGIgKgIIgSgTIAJAFIABABIAQALIACgGIAIAWIAAAAgAAwAKQALgNgTgJIgFgCQAIACAEADQANAJgOANIACgDgAAFAMIgGgCIAAAAIAAgBIgBAAIgMgFIAAgCQgCgLgPgFIgJgBIgMAFIAFADQgCAEgEgCQgDgCABgDQABgCAFgDIAdgFIAAAAIAHgBIANgIIAAAAIAyAGIAGADIAAABIg8gBQgBABAFAEIAAABIADACIADADIAAgBIAUgHIAFABIABAAIABABIgBAAIgBAAIgKAEIgEABIAAABIgRAGIADADIABABQAEACAGgHQACgDAEADIgPARg");
	this.shape_491.setTransform(34.4,-58.9);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#C4BBB5").s().p("AgDgBIgCgCQAFgBAGAGIAAACIgBAAg");
	this.shape_492.setTransform(30.6,-59.1);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#978A85").s().p("AAAAAIAAAAIAAABIAAgBg");
	this.shape_493.setTransform(29.7,-62);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#6B797C").s().p("AAIANIgcglIApAxg");
	this.shape_494.setTransform(19.9,-64.8);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#EEE4DE").s().p("AAFAFIgBgBIgRgHIAbAIg");
	this.shape_495.setTransform(35.5,-62.7);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#B2AFAA").s().p("AAAAAIAAAAIAAAAg");
	this.shape_496.setTransform(14.8,-58.3);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#969B98").s().p("AANAMQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAgBQAHAAAAAFgAgUgKIgDgEIAaAOIACAFQgKgIgPgHg");
	this.shape_497.setTransform(12.4,-59.8);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#B2A7A1").s().p("AAAAAIgGAAIACgBIAGgBIAEAAQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAIgDAEQAEgGgIACg");
	this.shape_498.setTransform(17.4,-56.9);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#E7DDDA").s().p("AgBAAIADAAIgBABg");
	this.shape_499.setTransform(15.6,-59.5);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#CBBFBA").s().p("AAFgEIAAgBIgBAJIgHACQgFAAANgKg");
	this.shape_500.setTransform(4,-58);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#B5A39D").s().p("Ag0AgIAAgBQAAgEACgBQAggzA1AFQg9ACgZA3IgCABgAAvgGIgKgNIAFAAIABABQAIAIAAgDIADAEQgCAFgCAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAgAAbgjIAAgCIADADg");
	this.shape_501.setTransform(1.9,-53.5);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#6D625B").s().p("AgTAEIAIgKIARAGIADAAIALAGg");
	this.shape_502.setTransform(4,-56.9);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#6C6B69").s().p("AAIgDIgEADIgBAAIgKAEg");
	this.shape_503.setTransform(3,-59.5);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#685550").s().p("AgrAGQAEgEAFgEIAMgIQAZgOAjgBIAEAAIABAAQAHALABACQAAACgIgIIgBAAIgFgBIAAAAIgDAAQg0gFggAyQAAgLAHgJg");
	this.shape_504.setTransform(1.9,-53.5);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#B2A19A").s().p("AgPAIIAYgRIAHgDIAAACIgPAJIgBABQgSAOASgGIACADIAAACg");
	this.shape_505.setTransform(4.4,-58.4);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#B1A7A0").s().p("AAAABIgVgCIAAgBIAXACIACADQAUAZgUgjIgBgBIgBgEIAQgHIADAEQgWACAQAbQABACgBAEg");
	this.shape_506.setTransform(8.2,-59.3);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#756766").s().p("AgDAAIgCgDIACgHQALAVgCAAQgBAAgIgLg");
	this.shape_507.setTransform(9,-59);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#635951").s().p("AgIAEIgHACIAdgLIABAEIABABIgCAGg");
	this.shape_508.setTransform(7,-60);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#675B53").s().p("AgDgEIAIAEIAAAAQgFAFgCAAQgEAAADgJg");
	this.shape_509.setTransform(8.9,-63.8);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#666560").s().p("AgDABIgGACIAAgBQAPgGADABQAEABgJAGQAIgIgPAFg");
	this.shape_510.setTransform(2.6,-63.3);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#615B53").s().p("AgBABQABgBADgBIgFADIABgBg");
	this.shape_511.setTransform(2.7,-62.7);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#625D59").s().p("AAAAAIAAABIAAAAIAAgBg");
	this.shape_512.setTransform(1.3,-68);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#F4E8E4").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_513.setTransform(2.9,-66.5);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#736A66").s().p("AgMADIAXgGIACAAIgVAGIgEABg");
	this.shape_514.setTransform(1.7,-66.8);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#4E4742").s().p("AADAAIgGABIgBAAIgKABIAWgFIAHAHg");
	this.shape_515.setTransform(2.2,-70.9);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#B5ACA9").s().p("AgFACIAFgCIANgEIgZAJg");
	this.shape_516.setTransform(0.4,-69.3);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#F6EEE9").s().p("AAAAAIABAAIgBAAIAAABg");
	this.shape_517.setTransform(1.7,-69.8);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#73746E").s().p("AgKgDIAIAAQAbAGgcABg");
	this.shape_518.setTransform(4,-70.9);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#7A716D").s().p("ABBCgIAjgsIAGgIIgpA3gAgHgzIAAAAIAAAGgAA9g0IABAAIAAAAgABwg+IABAAIABABgAgLhXIAAgCIALACIgDABIgBAAIgDABQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAgAg4hjIAAgBIAAABgAA3hwIACABIgBAAgAAbh5IABAAIAAAAIACACgAhfiOIABABIgBAAIAAgBgAhwifIAAgBIACACIgCgBgAhdiiIAAABIAAABIAAgCg");
	this.shape_519.setTransform(27.2,-47.2);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#BFB6AE").s().p("AgFgCIAAAAIgCgEIAPANg");
	this.shape_520.setTransform(18.4,-63.2);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#6B5E57").s().p("AgHgGIAMAHIABABIACAEIAAABg");
	this.shape_521.setTransform(16.9,-64.1);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#7B7D79").s().p("AgHgFIAAgBIAQAJIAAAEg");
	this.shape_522.setTransform(18.3,-63.2);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#CEC5C0").s().p("AgIgBIAOACIABgBIACACg");
	this.shape_523.setTransform(12.3,-63);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#F7F0EA").s().p("AgGAAIgBAAIgBgCIARAFg");
	this.shape_524.setTransform(12,-63.2);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#B59F94").s().p("AgGAHIgFgIQgDgJAMAEIAAAAIgBAAQgLgBAIAIIABACIABABIARAFg");
	this.shape_525.setTransform(11.8,-63.6);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#BDB4AF").s().p("AgLgEIgFgBIAKAAIAXALIgMAAQgGgGgKgEg");
	this.shape_526.setTransform(12.9,-66.5);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#ACA7A0").s().p("AgMAAIgQgCIgHgBIAvABIAOAAIAFACIAFADg");
	this.shape_527.setTransform(11.6,-68.7);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#747A76").s().p("AgKgDIgEgDIAdANg");
	this.shape_528.setTransform(16.2,-68);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#686058").s().p("AgYgDIAQAAIAQADIARADg");
	this.shape_529.setTransform(9.5,-68.6);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#695F56").s().p("AgigDIAngDIAAABIgdACIA7AKgAAJgGIAHAAIgFAAg");
	this.shape_530.setTransform(11.7,-70.4);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#8D8985").s().p("AhFACIgGAAICOgDIAJACIh6ABIgXAAg");
	this.shape_531.setTransform(10.7,-72.4);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#EDE6E0").s().p("AA9AZIADgBIACAGIgDALgAgYgXIADABIgBABgAhBgnIAAgBIABAAIAAABg");
	this.shape_532.setTransform(18.7,-67);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#BCB2AA").s().p("AgFAJIgBAAIABgCIABABIADABgAAdgBIgigFIgdABIAFgBIAdgCIAjAHg");
	this.shape_533.setTransform(16.2,-70.5);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#7B736C").s().p("AAiAvQABABAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIgBABgAAmAlIAAABIAAAAIAAgBgAglgeIADAAIACACIACACIARAPgAgfgwIADAAQATABANAEIgBACg");
	this.shape_534.setTransform(19.5,-66.5);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#9B7D71").s().p("AgEAAIAJAAIgBABg");
	this.shape_535.setTransform(17.9,-72.5);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#9F948B").s().p("AgCgGIAEAIIABAFg");
	this.shape_536.setTransform(57.8,-50.4);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#4E686C").s().p("AAAAXIACgDIgBAMgAgEgcIAAgDIAJAMIgBAEQgCgIgGgFg");
	this.shape_537.setTransform(56,-47.9);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#909FA1").s().p("AAIAhIAAgCIACgCIAAAIIgCABIAAgFgAgEgaIgBgDIgEgIIAOAMIAAADQgEgDgFgBg");
	this.shape_538.setTransform(55.1,-48.5);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#A08B82").s().p("AgjgTIgVgYIBuBUIADADIgBAAg");
	this.shape_539.setTransform(50.8,-56.9);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#FFCC99").s().p("AkhLAQgDgJgEgIIgIgNIgEgFIALgBQgBAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIgPgEQgPgRgVgNQgLgNgPgIQgPgJgNgLIgdgBIgSgPIgLgKIglgpIgLgBIgCAAIAAAAQgJgBgEgFIAAAAIgCgDIgBABIiWhcIhzgvIgDACIgCACIgIACQghAAgggDQgGAAgBgGQgDgVAYAAIAAAAIAAAAQgEgOALgKIAJgGIAIgDIAAgBQAAgNADgLIACgGIAEgHQAIgQAQgLQAGgEAHgBIAPgGIABgBIAbACIACAAIAJABQgEgJACgKIADgIIAAgBQAFgKAIgJIABAAQADgSAQgNQAGgGAHgDQAPAAAPADIAIgCIAFgDIADAAIABgQIABgZQABgeADgdIABgOQADgTAEgUQAFgUASgLIADgCIACAAIABAAIAIgBIAIgQIABgBIAAABQADALADADIACgQQAAgFADgCIAEABIAEABIABAAIAEAKIAFAGIABAKIAAAFIAAABIABAAIACABIAHADIAJAFQgDgIABgKIAAgHIAAAAIABgKIAAgEIAAgHIAAgEIgDgGIgEgFIAAgFIAAgBQgBgGAEgEIACgCIACABIAAgFIAAgIIAAgJIAAgEIAAgBIgHAAIgHAAIgBAAIgfAAIgFgGIgFgEIgBgBIAAgCIAAgDIgBgGQgFgDgEgEIgBgBQgFgFgCgIIgCgEIgFgEQgHgGgHgKIgHgLQgLgVgIgXQgTg6gRg8QgEgPgCgPIgQiCIgDgfIgEg0QgDgaAPgTIAEgFIAAgBIgBgEIAJgDQAIgHAIgGIADgBIAIgFIANgGQAMgFAMgDQAYgFAZABQAJAAAJgCIABAAIAJgDIAAgBQANgCAMADIAKAEIAFADQATgBATACQAXACAXAFIAqACQAJAAAJACQAIACAHAEIADABIAJADIAAAAIAoAIIBIAVIBKAaIAKAOQgBAEACAFQABAEADACQADABACgCQADgDABgIIAlARIgUAdQgaAEANAQIABACQgDAPgQgHIgEgCQh1Aih0gTIgWgBQgbgCgbgIIgGgCIgGgDQgJgFgHgGIgCgCIgCgEQgJgDgPgIQgTgCAZAWQALAJANAIIAEAQIAAACIgCAAIgFgBIgQgDIgRgDIAAAIIAcAOIARAOIABAhIAIAIIACgCIABgBIABAAIAAAAIAGAAIgJgKQACgKANAGIAFADIAlAZIANAJQAAAFAEABIABAAIAYAoIgPAUIAGAEQAXALgGAcIgBABIAAAAIgBAOIACAWQgJALAHAHIADACIAAACIAFAAIAKACIACABIACgCQANADALAGIAAAAQABAEACACIBBABIAFAGIAEADIACABIAIADIgBgJIABgFQAHADAEAFQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABIgEAEIADABIAHgDIAQACIADAAIAFABIACAAQAFABAEADQAIAFACANQAEAWATANIABAAIADADIACABIADACIAPAQIAFAEIAHAGIABABQAKAKAMAHIADACIAAAAIArAPIABABIAHAAIADABQAVALAXAEIAcAFQAkAHAlAAIAEADIAjgEIgBAKIAIADIABAAQAIAEAFAHIACACIABADQAEAHACAHIABAFIAJAFIAwAhIAaAXIALAJIAFAPIADABQAAABABAAQAAAAABAAQABABAAAAQABAAABAAIAbAJIAXgMIARABIBIADIAHAFIAGAEQASAAASADIADAAIAEABQAcAFAZAOQAJAAAIABQATADAPANIANAKIACACIAKAHIAFABIAaAJIABAAIAFgCQAHgFAFgGIABgBIgCgBIgBAAQgIgEgJgFIgGgEIgLgJQgPgNgIgRIgBgCIgDgJIgBgFQgEgNAAgQIAAgFQgCgJAAgKQAAgWAEgTIACgGQgFgSAAgTQgFgKgDgKIgKgfIgGgQIgGgNIgEgKIgBAAIgLgEIgUgkQgRgMADgHIgCgBIgBAAQgNgFgNgHIAAgBIgFgEQgQABgKgGQgHgEgEgHIgCgGIgCgBQgJgGgDgJIgBgCQgDgIADgLIAAgCIgHgFIAFgIIAeguIACABIAAAAIgNAWIABABQADAJAEgEIABAAIAAgBIABgKIABgFQADgHADgFQAFgHAJgFIADgCIAFgDIAHgBIACgMQAHgaAOgVIACgEIABgBQgJgGAJgKIACgHIABgCIACgFIAFgKIAGgIIABAAIABgCIABgBIgEgtQACACADABIABAAIAGABIAYAUIAEAIIACADQAFABAEADQAGAFADAHQADAJgBAOQgBAIgDAGIgCADIgCACIAAACIABAFIgBAFIAAAEIgEAOIgEAGIgCADIgLAiIgDANIABACIACABQAMAHAJANQAOADANAJQALAGAKAIQAKAIAJAJIAIALIAAABQAGAJACAIIAGAGQAYAdAVAgIAEAGIAIAMIAEAFIAMAPIAAADIACAAQANATAKAUIAHANQACAFAEACQAHAFAGAGQARAQAIAYIACACIACADQALAnANAoQAGASAEATIABAFIACAJIACARIAAAMQAAAGACAFIABAGQADATABAUIAAAIIAAADIAAARIABAHIAAAHIAAAOIAAAIIgBAJQgCAOgFANIAAAAIgBAEQgGAOgLAMIgCADIgHAFQgDACgFABIgbAGQgUAHgTgHIgFgCIgCgBQgdAFgdAAIgMAAQgHAAgGgDIgDgCIgFgEQghAEghABIgPABIgEAAIgCgBIgUABIgGAAQgdAAgdgCIgngDIgZgBIgMAAIgKAAIgGgBIhkgDQgDAAgCgCIgIgHIgCgBIgHgCIAAAAIgGgEQgFgEgDgFIgBAGIAAABIgCgCIgLgKIgTgDIgGADIAAADIAAADIAAACQgBAMgKAJQgFAFgHADIgFACIAAAAQgJAKgOAEIgbAJIgCABIgBAHIgCALIAQABIAEABIAAAAIgBABIgaA0IgjAkIgEACIgwAdIhKAjIhMAmIg4ApIgrAfIgQAMIgFAFIgGACQgLAEgKAFIgFADIgMAAIAIACIgEACQgTAMgOARgAkQKiIAEAAIAAAAIgEAAgAqHEQIABgCIgCgIgAHvEGIAFAAIAHgBIAIAAIgEgCIAAAAIgBAAIABAAIAwgaIgIABIgWAAIgGgBIgcgCQgTgCgTgDIgOgDIAAAAQgVAEgUgBIgIAAQgDgBgCgDIAAAAIAAgBQgGgDgFgFIgCgCIgEgHIgCgFIAAgIIABgEIAAAAIgGgBIgFAEIgTAKIgFADIgFACIgGADIgNADIgGABIgJACIADAJQAaACAZAEIADABQAaAFAaAIIAQADQARACAIALIABAAIAFgBIAQgCgAHdB+IAGgBIgDgBIgDACgAGVBrIAAgEIgSAAIASAEgAnGBqIAAAAIAAgBIAAABgAneBMIABABIgCgCgAoTAUIACAEQADAGAFAGIADADIAAAAQgDgKgBgLIAAgJQgIABgIgCQAEAFADAHgAo8iTIAAAAIAEAGIADADIANACIgLgEIgCgEQgCgCgCgBIgCAAIgBAAgAkSi/IACABIAPgBIABgBIgSABgAofk9IABAKIADAMIACADQAHAGAGAJIAAABIABABIACADIAGAMIAGAAIAFAHIAAABIAcAiIAGACQAMADgMgSQgDgEgFgDIAAgEIgHgGQgTgSgEgbQgDgOABgQIABgHIgCgWIADgDIAAgIIAAgJIAAgBQAAgJAEgGIABgCIAEgEQAIgPgIgHQgEgCgGgCIAAACIgLASIgHAWIAAAFIAAAAIAAAFIABA5IAAABIgBADIgCADQgFgBgCgDQgGgJgBAAIAAAAgAnEmpIACABIgCgDIAAACgAmLofIADABIgJgJIAAAAIgfAAIAlAIgAnGosIAAABIAAAAIAAAAIACABIABAAIgDgCgAlmKKIABgBIABACgAAfhfIAAgCIAnAAIhcgPIgJgDIgcgPIgEgDIgQgJIgDgCIghghIgUgUQgZgOgCgfIAAgFIAAgDIAAgKQAAgOACgPIAEgRQACgGADgGIAEgFIACgCIADgPIAFAAQAIgRARgMIAGgFIABAAIABgBIABgEIACgHIAJgPIAjggQAFgBAFADIAGAEIAAADIAMgEIAGAAIANgGIAFgCIA1gJIAEAEIACAAIAAABIAGAJIACAFIABABIABgBIAAgEIAAgCIAAgBIABgBIAAgIIgDgJIgKgCIgDgCQgOgNgVAAIgHADIgBAAQgQADAJgPQAYg4A9gCIACAAIABABIAJANQAFAFACgIIgDgDQAAgCgIgMIgBgBIgLgGIgDgEIgDgDIACgKIAPgJIAVACIAQATQABgDgBgCQgRgdAXgCQAPAIALAJIAIAHIALADIgQAiQAGAUAGgKIABgCIALgBIACAFIAGgBIABAAIBEgJIALAEIATASIAAA4IAAAJQgBAQgDAPQgGAYgMAUIgFAHQgQAVgUAFQgHABgHAAIABAGIAPgBQAVgDAQgMIAIgHQAIgIADgLIAJgKQAPgSAOgbIADgHQABAbgKAbIgDAJIAAAAQgGAOgJAOQgRAcgbAdIAhgJIgiAeIgjgSQgDgCgEgBIgFAGIACgBIAAAAQgOAWggAEIgXACIgqAKIg1gPIABACIAAABIgBAAQg+gNgzgkIgGgFIgBAAIABgBIgbgmIADgMIgKAKIgEADIgEAFIAAACQABAFgDADQAGAGgBAKIAAAFIgBAEQAFAIAHAHIADACIAEAIIAUAJIAAgCQAOAFAPAAIBAAUIA+ASIAHAAIAGAAIAVAEIAegIIAKAAIAWgIIAcgKIABAAIAIAFIABAAQAFAAABgDIABgBIABgEIABgFQAMgLARARIAFACIADABQARAFANgIIAEgCIAJABIgBACIABgCIAIADQAHAEACAIIAAABIgFAGIAEAAQgBADgDADQgGAFgLABQgIgOgKAHIgDACIAAACIAAABIAAABIAAAAIADASIgGANIgDADIgXAYIgoAfIgBABIgLAIIgDACQgRALgWADIglALIABACQgPACgPAAQgeAAgfgGgABlhiIAHAAIAAgCgADvifQgPAEAMACIADgBIADgHIgBAAIgCACgAEJjFIAAABIAAgCIAAABgAgDl0IAAADIAAAFIAAAIIAAATQADADADgBQADgBABgKIAGgJIAqgUIAOAGIABACIAAgBIARAHQAEABgBgHIADAAIgBgDQgCgDgFgFIgHgGIgHAAQgLgFgKgCQgLgBgKACIgJgBgABSlcIABAAIgBgBIAAABgADWmgIAUAeIACgIIgBAAIgDgfIhZAFIAAAEIABAFIABgBQAFAIALgHIAAAAIACgBIALgEg");
	this.shape_540.setTransform(-3.1,-2);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#BFAEA7").s().p("AAAAAIAAAAIAAAAg");
	this.shape_541.setTransform(50.6,-49.9);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#6F5F57").s().p("AgBADIAAgBQgHgVANAUIAAAAIgGAJIAAgHg");
	this.shape_542.setTransform(50.1,-50);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#503C35").s().p("AgEABIgBgFIAAgBQAAgGAKAFIAAABIABAKIAAABIgBABIAAAAQgNgUAHAVIAAABIgDgIg");
	this.shape_543.setTransform(50.1,-50.6);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#596B72").s().p("AgDAWIAFgoIACgFIgDAtIgBAAIAAABIgBABIgCgCg");
	this.shape_544.setTransform(46.4,-48);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#849299").s().p("AgBAOIAAggIADAcIgBAEIgBAFg");
	this.shape_545.setTransform(46.7,-51.8);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#C6A699").s().p("AADAXIgBgLIAAgBIgEgaIAAgBQgDgJAFADIABAAIADAtIgBABg");
	this.shape_546.setTransform(50.4,-52.4);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#8C8783").s().p("AgFAFQgJgNAMAEIAMAHIgGgBIgBAAQgDgBgBgBIgBAAQgGgDADAIIABABIgBgBg");
	this.shape_547.setTransform(50.6,-54.6);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#917063").s().p("AAIAaIgVg2IABgFIAaBDg");
	this.shape_548.setTransform(40.7,-53.4);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#89959A").s().p("AgEgQIADABIAGAgIgJghg");
	this.shape_549.setTransform(42.2,-53.7);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#9E9E9B").s().p("AAAAAIABAAIgBABIAAgBg");
	this.shape_550.setTransform(44.3,-56.5);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#5C504A").s().p("AgYgGIAGAGIACAMIAFAvIgBAAgAAYArIABgBIgBABgAgMgSIAAgBIAAACgAgTgzIgDgIIADAIgAgBg3IABAAIgBAAg");
	this.shape_551.setTransform(44,-50.1);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#C7B7B0").s().p("AAAADIAAgBIAAgEIABAFIgBAAg");
	this.shape_552.setTransform(43.5,-57);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#67615D").s().p("AAMgBIAAgBIgDgKIgBgCQAAgEgCgDIACgBQAEAJACAKIACALQABAJgBAKgAgOgWIgBgEIACAEIgBAAg");
	this.shape_553.setTransform(45.3,-53.4);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#716867").s().p("AALAKQgDgJgGgFQgFgGgIAIIgBADQAAgEACgDQADgGAGACIAHAFIABADIADAGIADAHg");
	this.shape_554.setTransform(40.6,-56.4);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#755B4F").s().p("AgPgMIAGAAIAFACIAUAXg");
	this.shape_555.setTransform(45.6,-60.2);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#68625F").s().p("AgJAOIgPgOIAAgBIASANIAaABIAFAEgAgYgPIAAgBIAXAQg");
	this.shape_556.setTransform(42.5,-60.7);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#0D0908").s().p("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");
	this.shape_557.setTransform(-11.4,-8.2);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#C8BFBA").s().p("AAAAAIAAAAIABAAg");
	this.shape_558.setTransform(44.6,-59.4);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#FFFF99").s().p("ADiC9IgDAEIgaAIgABtDDIgFgDIAWgMIAWgUIAAAAIAPgSIAKgOIAKAGIglA4IgDACIgfAEIgDgBgAEQCHIAGAEIgGAIgACMA9IAGAFIgJALQADgIAAgIgADNA9IAEgSIAAAAIADAKIAAABIgBAIgADGAJIAHACIgHAVgADaAdIAEgQIgDAQgACqARQAGgEgEgIIADgDQADAGACAGIgBABIgEAGgAjxgPIAAgBIgCgJIgEgbIAEgBQADAPABATIAAAFIgBABIgBgCgAkVgWIAEgRIAHACIAAALIgLAIgACggjIABgEIADADIAAABIABABgACPg9IgUgSIADgCIARAPIAAAFgAiYhVIABgBIAIAEIgBAAIgGACQgEAAACgFgADGhpIAAAAIgBAAIACgDIAJAIIgDABQgDgEgEgCgAhih/IALgFIABABIgJAHgAi3icIgCgFIARgJIgOAOIgBAAgAhajIIAEAEIgEAAg");
	this.shape_559.setTransform(12.1,-46.3);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#AB9E96").s().p("AAWAJIgsgPIAAgCQAWAHAWAJIABABIgBAAg");
	this.shape_560.setTransform(40.5,-63.5);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#635248").s().p("AgWgIIAsAPIABACg");
	this.shape_561.setTransform(40.5,-63.3);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#9B8276").s().p("AADAFIgKgHIgBgCIABAAIAQAJg");
	this.shape_562.setTransform(43.6,-62.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.daydreamingguystill, new cjs.Rectangle(-133.1,-74.1,312.3,142.6), null);


(lib.bk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#66CCFF","#B4FEFD","#FFFFFF"],[0,0.6,1],1711,-72.2,1711,36).s().p("AYGHQIAAABQgbgUgIgBQAGgHgCgIQgMgMgaABQgVAAgVAHQAAgGgEgFQgFgGABgGQggABgWgQQAFgDAagFQAUgDADgMQgOgGgbgDQgigEgJgDQAFgFAjgSQAZgNAIgRQgTgFgiAHQgqAJgNAAQAHgMAWgZQARgYgDgTQgZAEgaAYQgeAbgPAGQgKgggDgJQgKgVgQgHIgOArQgJAbgHAOQgqgkgjgRQADAaAUAoQAMAXAGAPIgIADQgIgKgKgBIAAADIgKgOQgOgTgSADQAEAFATASQAOAOAFANQgQADgigSQgegPgXAOQgPgPgUgHQgZgIgNAPQgEgPgSgHIgjgJQCBi5DMiuQABAOgIAQQgLAWgBAJQAXgEAPgaQAUglAHgGQABAVgHAjQgGAeAEAZQAbgKARgmIAdg/QAIApAHASQALAcAUAMQAYgOgDgrQgIgxgBgPQAgAUAVgBQAGgegVgfQgaghgIgRIAmABQASgBAQgEQgXgxhQgRQAWgNAFgNQgOgLgWAJQggANgFAAQgGgmgJgLQgNADgGAQQgEAKgEAUIgngbQgagOgUADQACAQALAUQALAXADAKQgngNgWgEQgogJgWAKQAZAPA8ArQhPAKgRAJQAXAHAxAJQAqALAUAQQiRCJhGBHQh4B5hDBrIgFAAQABgJAIgQQANgWgKgPQgMgEgNALQgLAJgGgFIAGgUIACgGIABgIIgBgMIAAAAQgXACgKAZQgJAegIANQAAgsAGhLQAEgsABghIALg3QABgIAEgCQAKAAAPAGQAOAGALgBQABgDgEgGQgEgFAHgBQAGAGAQAHQAQAIAIAGIAVAcQALAQAKgGQABgigWgiQgagggHgOQAggIAdAUQANAIAYAgQATAaAOgCQgJgfgZgeQgegigNgTQAjgCAtAQQA0ATANACQhGhZhigHQA6gaA5gBQgUgXg7gBQg0gBgmANQADgGAPgMQAMgLABgNQhgAIgqA1QgPgUgfgOQgegNgcABQARAcAWAeIhDAMQgmAHgWALQgcAPgTAWQgYAYgCAYQANgBBGgRQAygNAkAIQg2APgeAhQgkAnARA2QAYgKA3glQAwghAlgIIgRAbQgKASAMAMQAJgDASgOQAPgNAPgBQgGAtgKBaQgJBCgMArIAAAAIgQARQgWgNgnABQgvAAgeAQQgDgMgMgPQgYAAgDAEQgSgkgNgGQgCAPgJAEQgHgOgQgBQgDAOgJAIQgMgcgjABQghgBgXAVQgXgXgkAKQgiAJgPAXQgzgXgLgHQghgTgQgYQgVgCgiADQgeADgNgEQgNgDgQgRQgRgRgKgEIAAgCQAAgEgKAAIg3gBQAAgBAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAIgBAAIAAABQgOgZg3gGQhCgCgQgFIAggNQAUgIAFgOQgOgHgYAEQgeAGgQgDQAFgKAagVQAWgRAAgNQgagEgYAUQgcAWgGABQAIggABgMQACgYgPgMQgIANgOAjQgNAggLAPIgVgpQgLgPgLgEIAAgEQgFgIgRAAIgFAAQgMgDgOgBQAEAMAUAcQARAXABAXIgWgSQgEgIgHgGQgFgFgGgDQgHgIgCAAIgtgnQgbgagMgbQgpABgsgdQgugfgigCQgIgEgKgMIgGgIIgLgKIACAFQg4gbgrATIg7AaQgWAJgRACQgcgGgOADQgaADgoAUIhEAmQgOAHgqAeQghAXgTAFQg9AOhPA9Ig8AtQgiAZgaALQgVgpgdAKQgHAEAEANQADAMgEACIgUgMQgMgIgOABQgIABgFALQgFAMgFADQgGgKgNADIgXAHIgKgMQgFgIgIABQgOABgSASQgQAQgKgBQACgigYgIQgUALgmAyQgLgLgSgEQgSgEgPAEQgmAJAXApIgugUQgBACgDAJQgDAGgEADQACgZgZgKQgZAOgOAFQAPgagDgYIgTgPQgPADgOAMIgZAUQgCgVgVgCQgUAIgOAYQgJAOgOAfQgIgLgUADQgUACgGAJQgBAHAJATQADAJgEAEQgJgIgHAAIgEAAIAAACIgYgCQgVgCgHAKQADAfANAZQgSgOgNAAQgOAAgIAjQgigmgQAAQgUAZgIAIQgZgxgQAAQgMAAgdAjQgIgugUAAQgSASgUAIIAAsUMBQJAAAIAAOLQgTACgDABQgGAEgCADQgGgRgXAAQgKAAgQAHIgRAGQgNgQgcAAQgUAAgQAHQgQAHgHAAQgVgRgOAAQgQAAgHAIQgDAJgCAAIgPgLIAAAAQgDgBgFAAQgPAFgHgBIg6gsIgEgCQgHABgHAGIgNAIIAAAAIgCgBIgKgKIgFgDIgBgBIgHgBIgFABQgJAFgIANIgOAUQgCgHgRgIQgFAFgHAMQgHANgEAEIgIgJIgLgKQgGgDgGgBQgGADgGAKIgJAMIgCACQAAgHgJgCQgMgEgCgCQgDgmgggDQgZgDgkARQgEgeggAEQgeAFgKAVIgOgLQgJgGgLACIgFAKIgHAOIgEAGIgDgFIgIgNIgHgKIgBgCQgFgBgEADQgFADgFgCQAFgEgDgHIgGgLQgQgCgOALQgQANgMAAQAAgRgQgGQgQgHgRAIQgGANgGAhQgFgDgJgKQgIgKgJgBQgHANgGAYIgJAoQgCgEgGgDg");
	this.shape.setTransform(296.7,47.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#CCCCCC","#6A6A6A"],[0,1],205.4,-15.1,205.4,4.4).s().p("AiQBHIAAgBQAaAAA8gdIAegQIAUgMQASgMAKgJQAVgVA1giQAdgTAKgIQAOAMgCAjQAAANgGAsIgCALIgBAKQAAAFgCAEIgCAAIgFABIAAAEIACACQgLAMgaAMQgmAQgTAAQh7AAg4gUg");
	this.shape_1.setTransform(233.6,182.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFFF","#919191"],[0,1],198.5,-13.5,198.5,6).s().p("AjwBKQgPgLgDgOIAAgIIgBgGIAIgGQAwgfBXgjQBqgqA6AAIABADIgoAYQgqAagVAaQgLAOgXAPIgVAMIgTAJQg4AbgiAAQgEgJgEAAQgDAAgBAFIAAAGIABABIgLgGgABWBGIgQgHIAIgWIACgLQAEgZABgeIAXgTQAcgPAtAAQAcAAAZAhQAVAaAEAeIABALIAAAFQAAAIgOALQgUAOgigBQgTAAhXgIg");
	this.shape_2.setTransform(240.5,180.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FEA245","#6666FF"],[0,1],20.8,-49.2,39.5,20.4).s().p("AKOCaQgogJgLgHQgJAEgTAAIgcACQghAEgDAcQgaACgdgcQgcgagYAGQgGgNgUgcQgSgYgFgTIA1gQQACgFgGgEQgGgEAGgCQAGAAAmAGQAaAEAWgCQALAIAUAXIAJABIAsABQANAEAOAKIAdAWQARAKAQABQAIABAfgCQAagCAQADIAcAYQAQAOAQAFQgHARgYAFQgHgWgIgIQgQADgDAQQgNgNgJgCQgaALACAbQgLgTgigHgAnrCGQgNgTABgPQgNgBgJANQgKANgKABQgJgDgIgUQgJgRgNgCQgMADgNAQQgNAQgLADQgNgHgKgjQgMAAgKANQgLANgJABQgahEgvAaQgigcgFgHQDXiTDLg0IACAJQgHAFABAKQAVgCAggPQAggQAWgBQgCAQAHAWQAPABALgNQANgQAHgDQAKAGAjAeQAaAXAYAHIgBgcQAAgQAJgCQBHAjBCADQABgJgHgNQgIgMADgEQAMAAASAHQATAHAMABQgCgPAJgEQAJAFADAAIAMgFQgBAGAGAJQAFAIABAHQAKAGAfAeQASARALAEIAAABIABABIgKgBQgPAAAAADIABABIgBAAQgmgJgMAJQAJAMASAQIAhAaQAlAggBAjQglgTgZgEQAGAJAHAfIgGACQgFgGgTAAQgTAAgIADQgMgFgMAFQgKACgRANQgYgagkAUQgfARgPAbIgegKQgSgHgSACQgKAIgJALQgZgJgqAHQguAHgdgJQALgHAsgPQAigNAOgPQhAgNhcAlQAvg6BTgqQg1gJg/AfQg5AcgiAqQgMAWgIAJQgKANgQAAIgLgCg");
	this.shape_3.setTransform(230.3,57.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#C25812","#FF9933"],[0,1],135,32.6,127.3,3.8).s().p("A2TC5QANgDAMgGQAMgFALgHIAXgQQAjgcABgRQAAgGgGAAIg8AeQguAPghAHIAAAAQAGgNABgKQACgLgJAAQgpAigWAPQgRAKgHAAQgEAAgHgKIAAgBQgGgLgEAAQgEAAgIAHQgEADgGACQgGABgKAAIgDgBIgJgEIAngYQAAgIgKAAQAIgEgBgJQgEgQgOgIIABgaQAAgagFgLQgLgWgHgdQAMAIAHAQQAJAUADADQAKgSgBgjQABgPgIgtQgHgogDgLIAoA5QAjAwAKAaIADgBQgFgpAgg8IAcgxQARgdAHgUIABAAIAAAdQgEAMABAeIADA0IAAAaQAAASAFAJIADgCQAKgfBJgsIB7hJIAAABQgSAkg/BuQABAFAEABQBBgjAzgMQBRgSAcgKIhaA6QhGAtAAAIQAAAFAEABQAPgGBAgKQA4gKAggDIAAABQi9ByAAAHIAEAGQAUgKAhgFIBAgIIAAABQghAxgvAaIgJAEQAAABAAAAQAAABABAAQAAABAAAAQABABAAABIAEAAIAZgJIBDgaIAAABQgMAEgJAKIgKALIgJAIIgHAEQgiAShTAAIgIgFIgFgBQhQAWghAAQgiAAASgZgAUMDBQgGgJgJgIQgHgHgJgGQgfgVgUgTQgQgRgDgYQgBgagDgOQAHAMAcASQAeATARAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAgBAAAAIAAgFQgCgPgOgeQgLgZAAgXQAAgTAHgEQAHAJAEAVQAKAcASAAQANAAAGgnQACAJAGALQAJATALAAQAUAAAnhoIAAAAIAKBMIgBASIAEAAIAggfQAGgIANgYIAAAAIAABKIgHAYIADADQBGgsAWgsIAAAAIgRA2QgKAfgMAYQAAAEADABQAQgLApgYQAcgSAIgNIggA7QgQAZgpAlIAEAEQAlgSBHgpIAAABQgTAZgmAhQgeAagTAKQgMAFgHAAIgHgFQgFgEgGAAQgIAAgMAEQgMADgRAIQglAHgSAFIAAgBIATgWQAXgeAAgOIgBgHIgDAAIgVAhIgNASQgQASgJAAQgGgRgJAAQgbAYgEAAQgRAAgFgIg");
	this.shape_4.setTransform(279.8,167.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FF9933","#980189"],[0.008,1],88.3,-28.6,88.3,36.8).s().p("AiHEIQgQgGgMgDIgNgCIARgIQAagOANgKQA8g6AAgJIgBgDIgJgBQgVAAgfAMIggAOIABAAQBfiEAAgXIgBgFIgFgBQgNAAgqAbIg9AoIgBgBQAHgSAOg+QAPg+AAgNQAAgEgEgCQgxA1gsAkQgchYgMg1QANAQAVAQQAaAUARAAQAHAAgBgTQgGg3gBgUQAAgbAIgSQARglAGgSQAMA/AqA9QBUB7AKAAQABAAABAAQAAAAABAAQAAAAAAgBQABAAAAAAIAAgFQgGgVgCgUIAAgpQgBgnAGgYIAGgXQACAXAmBPQAGAOALAqQAJAfALASQAbggBKhOQgbBNghBNQAAAFAGABQAPgWAvgfIBKgxIACADQABAQggBBIgLAWQgGANgIAHQgyAdAAAJQAAABAAAAQAAABABAAQAAABAAABQAAAAABABIADAAQAXAAA0gaQAtgVAWgQIABAAQggAzg6AyIg1AnIAAACQACADAGAAIBEgZIABABQgEAQgtAWQgnASghAHIgGACIgfAJQhCAUgOAAQhUAAgfgLg");
	this.shape_5.setTransform(342.3,159.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B16A01").s().p("Ah1DLIgLAAIADgFIABgDIAEgLIAHgJIB2iPIA8g+QBFhGCIh9QAGAvg4AzIgvApQgbAXgKASQh6BshnCjQgDgXgZAAgAkOC8QAUgUAHgoQACgKAGhEQABgLAMg/QAIgsgGgXQAYAFgDAMIgDASIgCAAQgLApgGBRQgHBegDAYQgHAIgfAAg");
	this.shape_6.setTransform(392.1,57.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#FEDD92","#D2A679"],[0,1],1775.2,-184.3,1793.2,-12.4).s().p("A9fAQIAEAAIgEgBIAAgCIAIAEgAhlAHIADAAIAAAAIgDAAgACtgOIACACIAAABgAdfgPIABgBIAAABIgBAAg");
	this.shape_7.setTransform(229.1,188.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AR6D6IAIgCQAEALABAHgARuD5IADACQAIAEgFADIgGgJgAMxDJIAFABIgFABIAAgCgAKxC+IgBgBIACgDIADgDIgBADIABAEIgEAAgAK4CpIABAAIAAAAgAoHBPQgCgGgCgDIAFgCIABACIAEAPgAh/AwIAFgCIABABIADACgAL1g7IADAAIgDAeIAAgegAn8hEIAGAAQAHABAGACIgCACQgFgDgMgCgAtViZQgagWgXgGQgHABgMAPQgKANgFgDIAAgeQgWgHgbAKQgdAPgOAFQABgFAIgGQAHgFgBgHQgfAAgvAQQgxARgSABQAQgGA6gkQAwgeAjgEQALgCAbAFQAagCA8gbQAtgVBAAQQARAmAtgEQAeAYBGAmQgFAOABABIgfgLQgSgHgQgBQgCAIAJAOQAIAMgEAEQgiACgngPQgwgTgRgCQgFADABASQACARgGAEQgMgGgfgbgAwXivIALgDQgBAEgIAIgAKqjvIgCAIQgKgGAMgCg");
	this.shape_8.setTransform(295.8,57.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#FEDD92","#3CCC49"],[0,1],1637.8,-531.4,1697.8,-304.6).s().p("EgoEAJ5IAAyuIADABQAJABAOAAIAZgDIAZADQAkAAAugbIAPAHQAPAGANAAQAZAAAJgOQAFABAHAEQAIAEAPAAQAPAAAEgGQABgGACgDIAUAJQAOAGAUAAQANAAAGgEIAPgIQAGAKATAAQAOAAAGgFIAHgIIAHAHQAHAEAXAAIAQAAIADgDQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQABACAMAAQAYAAAJgIIAIgIQACAAAIAGQAIAEAHABQAGgBAHgEQAHgGADAAQACAAAIAHQAIAHAGAAQAHAAAFgFIAHgKQAFAGANAAQAqAAAtgcQAGAHAZAMQArAWA3AAQAwAAApgNQANASAigIIA+gRQAcgJABACQABACAFAFQACACAWAAQBIAAApgcIACAAQABAKAHADQAOAGA0AAQAuAAAPgMQADARAKAEQARAHBAAAQAfAAAegJQAtgOAPgCQACAJATAIQATAIAbAAQAYAAAfgRIAVgNIABAAIAFgFIABAAIAAABQADAIgCANQACAMAZALIAnASQAtANBWAAQBVAAAcgXQALgJAIgOQAiARBbABQAkgBAXgPQATgNAAgOQANAWA8gRQAkAAAPgIQAQANA2ABQATgBBbgJQAEAAAKAGQAJAFAMAAQATAAAGgDIAEACQAPgBAPgIQAIgFARgCIAfAAIALAJQANAKAfAAQAMAAAegNQAlABAAABQALAIAFABQALABAGAGQAPAGA7AAQAvAABhgeIAoAAQAFAHAQAAQALAAAJgFIADgCIARAAIADAGQAMAJAwABQA3gBAJgGQBTAAApAJQApAIANAAQAeAAgHgEQAsAAAPADQADAAARgMIAQgLIAAAAIACgCIAWAAIAOAMIAGAKQAKAKASAAQAIAAAXgXQAIAAAFASQAVgLAPgQIACAAQgJALgQAOIAAAHIAEAAIA2gMIA8gRQAHAAAHAJQAHAAAPgIQADAIALAAIATgEQAvAAACAFQAdAAgBgKIAEAFIABACQAAAAAAABQABAAAAABQAAAAAAABQgBAAAAABQAIgCAaAAQAwAAAAgIQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABgBIFRAAIAIAIIAAABIABABIACABIADgBIA5AGIAegBIACgCIAAgEIACACQATAQAZAAQAQAAAAgPIgBgIQAFAEALAAQAIAAAHgIIAZAAQAFACAHAAIAHgCIALAAIAAAFQADAHAPAAQAOAAAYgMIABAAQAAASANAAQAKAAAlgKQAMAAALAEQAWAAANgMIADAAQAAAEACACQAFAHAPAAQAKAAARgNIABAAQAJAQAgAAQAKAAAEgEQADgFAlAAIAWABIAFADIAYgIQAGAAASAHQAFAAAKgGQAKgFAAgDIAATxgEghtgEsIAMgIIgTAAIAHAIg");
	this.shape_9.setTransform(296.7,247.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#FF9933","#660033"],[0.008,1],96.4,-27.9,96.4,37.5).s().p("EgiMAEGIgBgCIAMgHIAGACQAMAHAIgBQAUAAAKgLIADAAQAEAHAEAFQAGAIAIAAQAIAAAPgIIASgMQASgNAYgWIABACQgJAPAAAJIABAFIAFABQBogbAjgXIAAAAQgRAXgYARIgfANIgIADIgSAJQgPAIAAAFIABAEIACAJIgHABQgjAJhHAAQgQgBhJgjgAZbENIgKgHQgUgPgKgXQAAAAAAABQgBABAAAAQAAABgBAAQAAAAgBAAQAAAJAVAaIAHAIIgzABQgEgDgCABIgWgBIgDAAIgGgGQgPgPgMgQIAAADQgJgNACABQgdgrgKgtQAMASAVATQAZAXAPAAIAEgBIAAgGIgWg/QgKghgCggQANAZAHAJQAZAhAMAAIAEAAIAAgTIgCgaIAAAAQAiAiAGAAQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAAAAAQgBgQAAgKQAAgQAJgBIgGAFIAEACQADgBADgCIAHAUQACAFAJAIQAKAJAFAAQANAAAFhAIAAAAIAFAPQAFAKAOAAQAKAAATgYIAkgtIAAAAIAAABIgCAeQAAARANAAQAEABArgvQAqgrAHgLQgDAVgJAiQgIAcAAAXQAAANADAEQAJgOA7ghIAAAIQgDALgOAmQgJAaAAATIAAANQADAMAQAAQAPAAAbgVQAegWARgdIAAAAQgQA1AAAJIAAAHQABAIAGAAQAHAAAagXQAbgZASgEIAAAPQgEAPgGAeQgJAVAAAXQAAAEADACIACgBQADgOAXgLIAbgJQAXgHAEAAQABAAADAHQACAHAGAAQAIAAATgRIAAABIgbAwIADAFIAIgEIAFgCIAIgCIAggEIAAAXQgRAWgNAAQgPgIgDABIgYAHIgCgBIgYgBIgCgBIgIAAIgbgBIgCABIgDAEQgCAFgWAAQgQAAgHgJIAAAAQgFgJgBAAIgNAJQgMAGgLABQgJgBgBgGIgBgKIgDgBQgIAHgHAEQgJAGgGAAQgXAAgBgDQgBgCgGgBQghALgUAAQgEAAABgJIAAgCQgBgHgGAAIgOAHQgNAGgLAAQgKAAgCgGIgBgDQAAgLgCgDQgGANgUAAQgOAAgDgYIgEgBQgCAAgJAPQgGAKgHAEIgIABIgEgBQgFgDgGgHIgJgMIgDACQgBAEAHAQIAGALQAAAJgKAAQgRAAgWgNgAjCEGIgBgBIAJgJQAbgjAAgOQAAgBgEgDQgaARgeAAIAAgOQAFgPAAgEQAAgHgHAAQgKAAgkASIgqAUIAAgDQAOgcAAgJIgBgCIgFgBQgWALhcAmQAGgRAAgNQACgQgHAAQggAlgIAIQgVATgmALIgIACIgNACIABgCIAAgDQABgIAEgEQASgUAAgVQABgKgKgDQgigLgIAGIgCACIgFgHQgBgEAAgNIAAgHQAQgDAMgKQAMgKABgKIABAAIADglQAAgSgWgyIgVgsIAFgBQAoAJANAYIAJAUQAFAMAGAGIADgBIABgQQAAhdhjh6IAAAAQCCBRAiBxIAEgDIAAhRQgEgrgdg+QgjhHgOgjQCiCrAABFIgEAQQgFAPAAAMQAAAEAFAEQAQgVAAgLQAAgPAVhKIAXhSIABAAQACAnAYBRQAWBNAAAqQAAAJgGAQQgHAQAAAHQAAAEAFACQBFgqBchbQgIAQgDAaIgGAqQgRA6gXAaQgBAFAFABIA8gsQArgeAmgPQgMAdgvBFQgsA+AAADIAAAFIAFABIAkgRQAmgTATgDIAAACQgWAggiAaQgOALgfAPIgCABIgSAHQgMAAgDACIgBABIAAACQgUAGgQAAQgRAAgJgJg");
	this.shape_10.setTransform(334.2,158.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#67E473","#015C13"],[0.008,1],162.8,-28.4,162.8,37).s().p("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");
	this.shape_11.setTransform(267.8,159.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#67E473","#015C13"],[0.008,1],138.8,-83.7,138.8,91.3).s().p("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A+gUQAWAOAFAJQAMgIAdgKIABABIACAAQABAAABAAQAAAAABgBQAAAAABgBQAAAAAAgBQAEgDAVAAQAPAAAKANQAKANAIAAQADADADACIgBgGQABAAAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAIgCAAQgDgLgFgOQgIgWgCgKQALACAUAKQASAJANABQgBgognghIgegaQgRgOgFgNQAWgCAjAGIACgDQAGACAEAEIABABIAAAAIABABIANALIATAQIABABQALANALAIQABgcgRgbQgXgggDgNQAFgCAHACQACACAOACIADABIAEADIgFAAQAUAFAOAfQAPAhANAIIATgxQALgcAMgPQADAXgMAdQgOAgAAAIQANgDAdgcQAbgbAXgEQgMARgYAUIgpAgQALABApgIQAmgKASAFQgNALgjAKQgjAJgNAJQAIAHAcgGQAagFAHALQgaALgvAJQAAAJATADQARACgCANQABAHgGAEQgJAGgBACQAHAGAIgBIAUgBQAGAGAKAaQAIAWAKAHQgHgRATgCQATAAAKARQADAFAKAcQALgKAQAFIAeAJQgGgaAhgIQATgEArgFQAAAFAHAGIgIAMQgFAGAGAGQAIgCAOgMQANgLAOABQAMACANASQAPATAJAEQgGgPAEgOQADgRAOAAQANABAOAOQAFgTALAAIAHAVQAFAMAHAGQAIgcAhACQAYACAbAQIAeghQAIgDAKAAIANgBIAiAKIABAAQAGAFAFAGQANghArAIQAqAKACAiQADgcAMgKQAEACAEAJQAEAJAHgBIAFgKQADgHAEgCQAIADAGASQAFARAIAFQAEgKAWACQADADADAOQADALAHACQAXgTAuAAQAVAAAkAGIADAAIgBABIgCACIABACIADABQACAAAEgDQACACATAAQATAAAFgEQADgCABgEIACgBIABAAIABAAIAFABQAEADAEAAIABAAIAAAAQACgDAEgLIAJgcQAHgcAQgHQACAQgIARQgJARAAAMQAKgDAOgNQAOgNAMgCQAIAOgQAZQgPAWALAMQAJgCAGgEQAKgDAIAAQAPAAAFANIAEALIgSAfQAMgKAYgbQAXgVAVAIQAHADAJARQAIAPAKgBQgFgCAHgIQAGgKAIACQAPgBAUAQQAUAPAGAAQAEgSAaAJQAYAKAHAOQAKgJAXADIAlAGQgCgPgXgrQgVgpAAgTQAQAHAYAVQAaAVAOAIQgCgXAKgXQALgZAEgNQAJAIAJAcQAIAaAMAGQAqgsAjgQQgIAQgXAbQgXAbgHASIA0gRQAogNAXAHIgpAWQgZANgLAOQAIAEAjAAQAgAAANAIQgiALgQAAQALAPAbAMQAVAKAOACQABADgEALQgDAFAKAAQAHgBAYgKQAZgGARAKQABAMgNAIQgOAJgBAJQAEAAAdgKQAPgFAVANQAAAGAHAEQALAFABACIAGgsQAEgZANgIQAVAVAKAGQgBgwAQgJQAVgGAGASQAIAcADACQAYgjAagEQACAJgFAJQgGAJABAIQAJAAAIgGQAJgHAJACQAHADAHASQAGASALACQgBgaAQgUQAJACALAJIANAKIAFADQACgnAsAEQAEAEAJAYIABADIABAEIAJgFIAVgMQASgKASAAQAOAIAJAWQgBAEgGAMQgFAHAEAIQAIACAIgHQAIgHAHAAIAKAPQAGAJAHADQgCgiARgEQAJACAKALQAKAMAJACQAAgXAJgLIABgBQACgDAEAAQACAAAEADIABABIADAFQAFAGAIAAQAJgjAVgHQAKAFARAOQAKgNAQgFIAUAdQAMgGAKAJIAQAQQAGABAJgDQAGgDAHABIAGAFQAIAEADABQADgBADgIQADgKAPAAQAGAAAPAJQAOAIAFAAIASgHQAUgHARgBQASABAJAIQAJAJAEAAIARgHQAPgHALAAQAPAAAGAJQAGAJACAAIAAAAIACAAIABAAIAcgNIAAN4IgCAAQgVAAgIACIgOAEQAhg1AAgQgAVECuIAIAAIAGgMIAAAAQgJAEgFAIgEgipAAQIACAJIAHgLIgJACgA8xgeQADgFgGgBgA0JiUQgHABAJAGIgBgIIgBABgADCMZIABAAIABACgA5mMYIABAAIAAACgABBMUIAAADIAAABgAVdMPIABgBIAAABIgBAAgAgsMCIABgBIAAACgAKhL8IABAAIAAABgEAnoALzIAAAAIAAABgAWzLpIAAgBIAAABgAVILaIAAAAIgBAAgAoBLOIAGABIgEADgAUQK/IAAgBIAAABgAeBKzIADAAIAAACIgDgCgAESKZIAAABIgBAAgEAk6AKZIAAgBIAAABgAzPKFIABAAIgCABgALjKDIAAAAIAAABgAViJ1IAAAAIABABgAULJoIAAAAIAAAAgEAhKAJLIAAgBIAAABgATKJKIABgBIAAABgA1DI+IAJAAIgJACgA1vHfIAAgBIAAACgA5GHFIABgBIAAABgAjSF8IABAAIAAAAIgBAAgAJAotQAtggBCAAQghgYhLANQhVASghAFQAegrA/gbQBCgdA0ALIABgIIAIAAQg1gkACgVQAdgCAZASQAlAcAEACQAYgkBUgXQgFAMgRAPQgQAPgEAMIBMgWQA4gNAkAQQgzAMgNAFQgiALgRASQBAgEAxATQAwATAQAkQhIgghGAFQAOAQAlAhQAeAeADAcQhHhahHAVQBAAsAJBHQgcgdgQgOQgdgYgaACQAMAOgJABQgQgLgxgBQgJADgWANQgUALgGAAQADgLAPgNQAPgNAFgJQgxgCg3AhIgsAeQgbAQgUAHQAHg9AyghgAT9p3QgQADgKAZQgMAcgIAFQgEgRAIgaQAIgagEgPQgHgcgtgMQg2gLgYgGQBCgXAtAPQgNgJgrgWQgkgSgPgQQAugKBQAoQgRgZgZg4QAXgEAZAUQAFADAfAgIAEgdQADgTANgGQgBAMAEAQQAEAQAAAFQAygaATgDQgEALgPAKQgTAMgEAEQBjAFAUAyQgVAFgZgCQgZgCgOgKIAmAzQAbAiABAiQgTAEgUgTQgdgcgFgDQAEAQATA5QAMA2gcATQgGgLgMgtQgKgkgSgLQgJASgOAoQgPAigTAPIALh3g");
	this.shape_12.setTransform(296.7,101.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("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");
	this.shape_13.setTransform(296.7,104.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(40.2,0,512.9,311.2);


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


(lib.adjectiveswish1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.E("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(625.3,274.3,1,1,-18);

	this.instance_1 = new lib.V("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(560.5,274.7,1,1,-18);

	this.instance_2 = new lib.I("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(494.9,274.7,1,1,-18);

	this.instance_3 = new lib.T("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(435,274.3,1,1,-18);

	this.instance_4 = new lib.C("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(364.9,274.4,1,1,-18);

	this.instance_5 = new lib.E("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(301.1,274.3,1,1,-18);

	this.instance_6 = new lib.J("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(232.8,275.2,1,1,-18);

	this.instance_7 = new lib.D("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(161.8,274.7,1,1,-18);

	this.instance_8 = new lib.A("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(83.5,274.8,1,1,-18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8,p:{rotation:-18,x:83.5,y:274.8,alpha:1}},{t:this.instance_7,p:{rotation:-18,x:161.8,y:274.7,alpha:1}},{t:this.instance_6,p:{rotation:-18,x:232.8,y:275.2,alpha:1}},{t:this.instance_5,p:{rotation:-18,x:301.1,y:274.3,alpha:1}},{t:this.instance_4,p:{rotation:-18,x:364.9,y:274.4,alpha:1}},{t:this.instance_3,p:{rotation:-18,x:435,y:274.3,alpha:1}},{t:this.instance_2,p:{rotation:-18,x:494.9,y:274.7,alpha:1}},{t:this.instance_1,p:{rotation:-18,x:560.5,y:274.7,alpha:1}},{t:this.instance,p:{rotation:-18,x:625.3,y:274.3,alpha:1}}]},15).to({state:[{t:this.instance_8,p:{rotation:-36,x:93.3,y:274.5,alpha:1}},{t:this.instance_7,p:{rotation:-36,x:168.9,y:274.5,alpha:1}},{t:this.instance_6,p:{rotation:-36,x:237.6,y:274.9,alpha:1}},{t:this.instance_5,p:{rotation:-36,x:303.3,y:274.1,alpha:1}},{t:this.instance_4,p:{rotation:-36,x:364.8,y:274.2,alpha:1}},{t:this.instance_3,p:{rotation:-36,x:432.6,y:274.1,alpha:1}},{t:this.instance_2,p:{rotation:-36,x:490.4,y:274.5,alpha:1}},{t:this.instance_1,p:{rotation:-36,x:553.9,y:274.5,alpha:1}},{t:this.instance,p:{rotation:-36,x:616.3,y:274.1,alpha:1}}]},1).to({state:[{t:this.instance_8,p:{rotation:-54,x:103,y:274.1,alpha:1}},{t:this.instance_7,p:{rotation:-54,x:175.9,y:274.1,alpha:1}},{t:this.instance_6,p:{rotation:-54,x:242.3,y:274.4,alpha:1}},{t:this.instance_5,p:{rotation:-54,x:305.3,y:273.8,alpha:1}},{t:this.instance_4,p:{rotation:-54,x:364.7,y:273.9,alpha:1}},{t:this.instance_3,p:{rotation:-54,x:430,y:273.8,alpha:1}},{t:this.instance_2,p:{rotation:-54,x:485.9,y:274.1,alpha:1}},{t:this.instance_1,p:{rotation:-54,x:547.1,y:274.1,alpha:1}},{t:this.instance,p:{rotation:-54,x:607.2,y:273.8,alpha:1}}]},1).to({state:[{t:this.instance_8,p:{rotation:-72,x:112.5,y:273.6,alpha:1}},{t:this.instance_7,p:{rotation:-72,x:182.7,y:273.6,alpha:1}},{t:this.instance_6,p:{rotation:-72,x:246.7,y:273.8,alpha:1}},{t:this.instance_5,p:{rotation:-72,x:307.3,y:273.5,alpha:1}},{t:this.instance_4,p:{rotation:-72,x:364.5,y:273.5,alpha:1}},{t:this.instance_3,p:{rotation:-72,x:427.4,y:273.4,alpha:1}},{t:this.instance_2,p:{rotation:-72,x:481.3,y:273.6,alpha:1}},{t:this.instance_1,p:{rotation:-72,x:540.2,y:273.6,alpha:1}},{t:this.instance,p:{rotation:-72,x:598,y:273.5,alpha:1}}]},1).to({state:[{t:this.instance_8,p:{rotation:-90,x:121.9,y:273,alpha:1}},{t:this.instance_7,p:{rotation:-90,x:189.4,y:273,alpha:1}},{t:this.instance_6,p:{rotation:-90,x:251,y:273,alpha:1}},{t:this.instance_5,p:{rotation:-90,x:309.1,y:273,alpha:1}},{t:this.instance_4,p:{rotation:-90,x:364.1,y:273,alpha:1}},{t:this.instance_3,p:{rotation:-90,x:424.6,y:273,alpha:1}},{t:this.instance_2,p:{rotation:-90,x:476.4,y:273,alpha:1}},{t:this.instance_1,p:{rotation:-90,x:533.1,y:273,alpha:1}},{t:this.instance,p:{rotation:-90,x:588.6,y:273,alpha:1}}]},1).to({state:[{t:this.instance_8,p:{rotation:-108,x:131.1,y:272.5,alpha:1}},{t:this.instance_7,p:{rotation:-108,x:195.9,y:272.5,alpha:1}},{t:this.instance_6,p:{rotation:-108,x:255,y:272.3,alpha:1}},{t:this.instance_5,p:{rotation:-108,x:310.8,y:272.6,alpha:1}},{t:this.instance_4,p:{rotation:-108,x:363.6,y:272.6,alpha:1}},{t:this.instance_3,p:{rotation:-108,x:421.7,y:272.6,alpha:1}},{t:this.instance_2,p:{rotation:-108,x:471.5,y:272.5,alpha:1}},{t:this.instance_1,p:{rotation:-108,x:525.8,y:272.5,alpha:1}},{t:this.instance,p:{rotation:-108,x:579.2,y:272.6,alpha:1}}]},1).to({state:[{t:this.instance_8,p:{rotation:-126,x:140.1,y:271.9,alpha:1}},{t:this.instance_7,p:{rotation:-126,x:202.2,y:272,alpha:1}},{t:this.instance_6,p:{rotation:-126,x:258.8,y:271.7,alpha:1}},{t:this.instance_5,p:{rotation:-126,x:312.4,y:272.2,alpha:1}},{t:this.instance_4,p:{rotation:-126,x:363,y:272.2,alpha:1}},{t:this.instance_3,p:{rotation:-126,x:418.6,y:272.2,alpha:1}},{t:this.instance_2,p:{rotation:-126,x:466.3,y:272,alpha:1}},{t:this.instance_1,p:{rotation:-126,x:518.4,y:272,alpha:1}},{t:this.instance,p:{rotation:-126,x:569.6,y:272.2,alpha:1}}]},1).to({state:[{t:this.instance_8,p:{rotation:-144,x:149,y:271.5,alpha:1}},{t:this.instance_7,p:{rotation:-144,x:208.4,y:271.6,alpha:1}},{t:this.instance_6,p:{rotation:-144,x:262.4,y:271.2,alpha:1}},{t:this.instance_5,p:{rotation:-144,x:313.9,y:271.9,alpha:1}},{t:this.instance_4,p:{rotation:-144,x:362.3,y:271.9,alpha:1}},{t:this.instance_3,p:{rotation:-144,x:415.5,y:272,alpha:1}},{t:this.instance_2,p:{rotation:-144,x:461,y:271.6,alpha:1}},{t:this.instance_1,p:{rotation:-144,x:510.8,y:271.6,alpha:1}},{t:this.instance,p:{rotation:-144,x:559.8,y:271.9,alpha:1}}]},1).to({state:[{t:this.instance_8,p:{rotation:-162,x:157.7,y:271.3,alpha:1}},{t:this.instance_7,p:{rotation:-162,x:214.5,y:271.3,alpha:1}},{t:this.instance_6,p:{rotation:-162,x:265.9,y:270.8,alpha:1}},{t:this.instance_5,p:{rotation:-162,x:315.3,y:271.7,alpha:1}},{t:this.instance_4,p:{rotation:-162,x:361.4,y:271.7,alpha:1}},{t:this.instance_3,p:{rotation:-162,x:412.3,y:271.8,alpha:1}},{t:this.instance_2,p:{rotation:-162,x:455.6,y:271.4,alpha:1}},{t:this.instance_1,p:{rotation:-162,x:503.2,y:271.3,alpha:1}},{t:this.instance,p:{rotation:-162,x:550.1,y:271.7,alpha:1}}]},1).to({state:[{t:this.instance_8,p:{rotation:180,x:166.4,y:271.2,alpha:1}},{t:this.instance_7,p:{rotation:180,x:220.5,y:271.2,alpha:1}},{t:this.instance_6,p:{rotation:180,x:269.3,y:270.7,alpha:1}},{t:this.instance_5,p:{rotation:180,x:316.6,y:271.7,alpha:1}},{t:this.instance_4,p:{rotation:180,x:360.6,y:271.6,alpha:1}},{t:this.instance_3,p:{rotation:180,x:409,y:271.7,alpha:1}},{t:this.instance_2,p:{rotation:180,x:450.2,y:271.3,alpha:1}},{t:this.instance_1,p:{rotation:180,x:495.4,y:271.2,alpha:1}},{t:this.instance,p:{rotation:180,x:540.2,y:271.7,alpha:1}}]},1).to({state:[{t:this.instance_8,p:{rotation:162,x:175.1,y:271.3,alpha:1}},{t:this.instance_7,p:{rotation:162,x:226.5,y:271.3,alpha:1}},{t:this.instance_6,p:{rotation:162,x:272.7,y:270.8,alpha:1}},{t:this.instance_5,p:{rotation:162,x:318,y:271.7,alpha:1}},{t:this.instance_4,p:{rotation:162,x:359.7,y:271.7,alpha:1}},{t:this.instance_3,p:{rotation:162,x:405.7,y:271.8,alpha:1}},{t:this.instance_2,p:{rotation:162,x:444.7,y:271.4,alpha:1}},{t:this.instance_1,p:{rotation:162,x:487.7,y:271.3,alpha:1}},{t:this.instance,p:{rotation:162,x:530.4,y:271.7,alpha:1}}]},1).to({state:[{t:this.instance_8,p:{rotation:144,x:183.9,y:271.5,alpha:1}},{t:this.instance_7,p:{rotation:144,x:232.6,y:271.6,alpha:1}},{t:this.instance_6,p:{rotation:144,x:276.2,y:271.2,alpha:1}},{t:this.instance_5,p:{rotation:144,x:319.4,y:271.9,alpha:1}},{t:this.instance_4,p:{rotation:144,x:358.9,y:271.9,alpha:1}},{t:this.instance_3,p:{rotation:144,x:402.5,y:272,alpha:1}},{t:this.instance_2,p:{rotation:144,x:439.3,y:271.6,alpha:1}},{t:this.instance_1,p:{rotation:144,x:480,y:271.6,alpha:1}},{t:this.instance,p:{rotation:144,x:520.6,y:271.9,alpha:1}}]},1).to({state:[{t:this.instance_8,p:{rotation:126,x:192.8,y:271.9,alpha:1}},{t:this.instance_7,p:{rotation:126,x:238.8,y:272,alpha:1}},{t:this.instance_6,p:{rotation:126,x:279.9,y:271.7,alpha:1}},{t:this.instance_5,p:{rotation:126,x:320.8,y:272.2,alpha:1}},{t:this.instance_4,p:{rotation:126,x:358.2,y:272.2,alpha:1}},{t:this.instance_3,p:{rotation:126,x:399.4,y:272.2,alpha:1}},{t:this.instance_2,p:{rotation:126,x:434,y:272,alpha:1}},{t:this.instance_1,p:{rotation:126,x:472.5,y:272,alpha:1}},{t:this.instance,p:{rotation:126,x:510.9,y:272.2,alpha:1}}]},1).to({state:[{t:this.instance_8,p:{rotation:108,x:201.8,y:272.5,alpha:1}},{t:this.instance_7,p:{rotation:108,x:245.1,y:272.5,alpha:1}},{t:this.instance_6,p:{rotation:108,x:283.7,y:272.3,alpha:1}},{t:this.instance_5,p:{rotation:108,x:322.4,y:272.6,alpha:1}},{t:this.instance_4,p:{rotation:108,x:357.5,y:272.6,alpha:1}},{t:this.instance_3,p:{rotation:108,x:396.3,y:272.6,alpha:1}},{t:this.instance_2,p:{rotation:108,x:428.9,y:272.5,alpha:1}},{t:this.instance_1,p:{rotation:108,x:465,y:272.5,alpha:1}},{t:this.instance,p:{rotation:108,x:501.3,y:272.6,alpha:1}}]},1).to({state:[{t:this.instance_8,p:{rotation:90,x:211,y:273,alpha:1}},{t:this.instance_7,p:{rotation:90,x:251.6,y:273,alpha:1}},{t:this.instance_6,p:{rotation:90,x:287.7,y:273,alpha:1}},{t:this.instance_5,p:{rotation:90,x:324.1,y:273,alpha:1}},{t:this.instance_4,p:{rotation:90,x:357,y:273,alpha:1}},{t:this.instance_3,p:{rotation:90,x:393.4,y:273,alpha:1}},{t:this.instance_2,p:{rotation:90,x:423.9,y:273,alpha:1}},{t:this.instance_1,p:{rotation:90,x:457.8,y:273,alpha:1}},{t:this.instance,p:{rotation:90,x:491.8,y:273,alpha:1}}]},2).to({state:[{t:this.instance_8,p:{rotation:72,x:220.3,y:273.6,alpha:1}},{t:this.instance_7,p:{rotation:72,x:258.2,y:273.6,alpha:1}},{t:this.instance_6,p:{rotation:72,x:291.9,y:273.8,alpha:1}},{t:this.instance_5,p:{rotation:72,x:326,y:273.5,alpha:1}},{t:this.instance_4,p:{rotation:72,x:356.7,y:273.5,alpha:1}},{t:this.instance_3,p:{rotation:72,x:390.6,y:273.4,alpha:1}},{t:this.instance_2,p:{rotation:72,x:419,y:273.6,alpha:1}},{t:this.instance_1,p:{rotation:72,x:450.7,y:273.6,alpha:1}},{t:this.instance,p:{rotation:72,x:482.5,y:273.5,alpha:1}}]},1).to({state:[{t:this.instance_8,p:{rotation:54,x:229.9,y:274.1,alpha:1}},{t:this.instance_7,p:{rotation:54,x:265.1,y:274.1,alpha:1}},{t:this.instance_6,p:{rotation:54,x:296.4,y:274.4,alpha:1}},{t:this.instance_5,p:{rotation:54,x:327.9,y:273.8,alpha:1}},{t:this.instance_4,p:{rotation:54,x:356.4,y:273.9,alpha:1}},{t:this.instance_3,p:{rotation:54,x:388,y:273.8,alpha:1}},{t:this.instance_2,p:{rotation:54,x:414.4,y:274.1,alpha:1}},{t:this.instance_1,p:{rotation:54,x:443.8,y:274.1,alpha:1}},{t:this.instance,p:{rotation:54,x:473.3,y:273.8,alpha:1}}]},1).to({state:[{t:this.instance_8,p:{rotation:36,x:239.6,y:274.5,alpha:1}},{t:this.instance_7,p:{rotation:36,x:272,y:274.5,alpha:1}},{t:this.instance_6,p:{rotation:36,x:301,y:274.9,alpha:1}},{t:this.instance_5,p:{rotation:36,x:330,y:274.1,alpha:1}},{t:this.instance_4,p:{rotation:36,x:356.3,y:274.2,alpha:1}},{t:this.instance_3,p:{rotation:36,x:385.4,y:274.1,alpha:1}},{t:this.instance_2,p:{rotation:36,x:409.9,y:274.5,alpha:1}},{t:this.instance_1,p:{rotation:36,x:437,y:274.5,alpha:1}},{t:this.instance,p:{rotation:36,x:464.1,y:274.1,alpha:1}}]},1).to({state:[{t:this.instance_8,p:{rotation:18,x:249.4,y:274.8,alpha:1}},{t:this.instance_7,p:{rotation:18,x:279.1,y:274.7,alpha:1}},{t:this.instance_6,p:{rotation:18,x:305.8,y:275.2,alpha:1}},{t:this.instance_5,p:{rotation:18,x:332.1,y:274.3,alpha:1}},{t:this.instance_4,p:{rotation:18,x:356.3,y:274.4,alpha:1}},{t:this.instance_3,p:{rotation:18,x:382.9,y:274.3,alpha:1}},{t:this.instance_2,p:{rotation:18,x:405.5,y:274.7,alpha:1}},{t:this.instance_1,p:{rotation:18,x:430.3,y:274.7,alpha:1}},{t:this.instance,p:{rotation:18,x:455.1,y:274.3,alpha:1}}]},1).to({state:[{t:this.instance_8,p:{rotation:0,x:259.2,y:274.9,alpha:1}},{t:this.instance_7,p:{rotation:0,x:286.3,y:274.8,alpha:1}},{t:this.instance_6,p:{rotation:0,x:310.7,y:275.4,alpha:1}},{t:this.instance_5,p:{rotation:0,x:334.3,y:274.4,alpha:1}},{t:this.instance_4,p:{rotation:0,x:356.3,y:274.4,alpha:1}},{t:this.instance_3,p:{rotation:0,x:380.5,y:274.4,alpha:1}},{t:this.instance_2,p:{rotation:0,x:401.1,y:274.8,alpha:1}},{t:this.instance_1,p:{rotation:0,x:423.7,y:274.8,alpha:1}},{t:this.instance,p:{rotation:0,x:446.1,y:274.4,alpha:1}}]},1).to({state:[{t:this.instance_8,p:{rotation:0,x:259.2,y:274.9,alpha:1}},{t:this.instance_7,p:{rotation:0,x:286.3,y:274.8,alpha:1}},{t:this.instance_6,p:{rotation:0,x:310.7,y:275.4,alpha:1}},{t:this.instance_5,p:{rotation:0,x:334.3,y:274.4,alpha:1}},{t:this.instance_4,p:{rotation:0,x:356.3,y:274.4,alpha:1}},{t:this.instance_3,p:{rotation:0,x:380.5,y:274.4,alpha:1}},{t:this.instance_2,p:{rotation:0,x:401.1,y:274.8,alpha:1}},{t:this.instance_1,p:{rotation:0,x:423.7,y:274.8,alpha:1}},{t:this.instance,p:{rotation:0,x:446.1,y:274.4,alpha:1}}]},1).to({state:[{t:this.instance_8,p:{rotation:0,x:259.2,y:274.9,alpha:1}},{t:this.instance_7,p:{rotation:0,x:286.3,y:274.8,alpha:1}},{t:this.instance_6,p:{rotation:0,x:310.7,y:275.4,alpha:1}},{t:this.instance_5,p:{rotation:0,x:334.3,y:274.4,alpha:1}},{t:this.instance_4,p:{rotation:0,x:356.3,y:274.4,alpha:1}},{t:this.instance_3,p:{rotation:0,x:380.5,y:274.4,alpha:1}},{t:this.instance_2,p:{rotation:0,x:401.1,y:274.8,alpha:1}},{t:this.instance_1,p:{rotation:0,x:423.7,y:274.8,alpha:1}},{t:this.instance,p:{rotation:0,x:446.1,y:274.4,alpha:1}}]},1).to({state:[{t:this.instance_8,p:{rotation:0,x:259.2,y:274.9,alpha:1}},{t:this.instance_7,p:{rotation:0,x:286.3,y:274.8,alpha:1}},{t:this.instance_6,p:{rotation:0,x:310.7,y:275.4,alpha:1}},{t:this.instance_5,p:{rotation:0,x:334.3,y:274.4,alpha:1}},{t:this.instance_4,p:{rotation:0,x:356.3,y:274.4,alpha:1}},{t:this.instance_3,p:{rotation:0,x:380.5,y:274.4,alpha:1}},{t:this.instance_2,p:{rotation:0,x:401.1,y:274.8,alpha:1}},{t:this.instance_1,p:{rotation:0,x:423.7,y:274.8,alpha:1}},{t:this.instance,p:{rotation:0,x:446.1,y:274.4,alpha:1}}]},1).to({state:[{t:this.instance_8,p:{rotation:0,x:259.2,y:274.9,alpha:1}},{t:this.instance_7,p:{rotation:0,x:286.3,y:274.8,alpha:1}},{t:this.instance_6,p:{rotation:0,x:310.7,y:275.4,alpha:1}},{t:this.instance_5,p:{rotation:0,x:334.3,y:274.4,alpha:1}},{t:this.instance_4,p:{rotation:0,x:356.3,y:274.4,alpha:1}},{t:this.instance_3,p:{rotation:0,x:380.5,y:274.4,alpha:1}},{t:this.instance_2,p:{rotation:0,x:401.1,y:274.8,alpha:1}},{t:this.instance_1,p:{rotation:0,x:423.7,y:274.8,alpha:1}},{t:this.instance,p:{rotation:0,x:446.1,y:274.4,alpha:1}}]},1).to({state:[{t:this.instance_8,p:{rotation:0,x:259.2,y:274.9,alpha:1}},{t:this.instance_7,p:{rotation:0,x:286.3,y:274.8,alpha:1}},{t:this.instance_6,p:{rotation:0,x:310.7,y:275.4,alpha:1}},{t:this.instance_5,p:{rotation:0,x:334.3,y:274.4,alpha:1}},{t:this.instance_4,p:{rotation:0,x:356.3,y:274.4,alpha:1}},{t:this.instance_3,p:{rotation:0,x:380.5,y:274.4,alpha:1}},{t:this.instance_2,p:{rotation:0,x:401.1,y:274.8,alpha:1}},{t:this.instance_1,p:{rotation:0,x:423.7,y:274.8,alpha:1}},{t:this.instance,p:{rotation:0,x:446.1,y:274.4,alpha:1}}]},1).to({state:[{t:this.instance_8,p:{rotation:0,x:259.2,y:274.9,alpha:0.898}},{t:this.instance_7,p:{rotation:0,x:286.3,y:274.8,alpha:0.898}},{t:this.instance_6,p:{rotation:0,x:310.7,y:275.4,alpha:0.898}},{t:this.instance_5,p:{rotation:0,x:334.3,y:274.4,alpha:0.898}},{t:this.instance_4,p:{rotation:0,x:356.3,y:274.4,alpha:0.898}},{t:this.instance_3,p:{rotation:0,x:380.5,y:274.4,alpha:0.898}},{t:this.instance_2,p:{rotation:0,x:401.1,y:274.8,alpha:0.898}},{t:this.instance_1,p:{rotation:0,x:423.7,y:274.8,alpha:0.898}},{t:this.instance,p:{rotation:0,x:446.1,y:274.4,alpha:0.898}}]},1).to({state:[{t:this.instance_8,p:{rotation:0,x:259.2,y:274.9,alpha:0.801}},{t:this.instance_7,p:{rotation:0,x:286.3,y:274.8,alpha:0.801}},{t:this.instance_6,p:{rotation:0,x:310.7,y:275.4,alpha:0.801}},{t:this.instance_5,p:{rotation:0,x:334.3,y:274.4,alpha:0.801}},{t:this.instance_4,p:{rotation:0,x:356.3,y:274.4,alpha:0.801}},{t:this.instance_3,p:{rotation:0,x:380.5,y:274.4,alpha:0.801}},{t:this.instance_2,p:{rotation:0,x:401.1,y:274.8,alpha:0.801}},{t:this.instance_1,p:{rotation:0,x:423.7,y:274.8,alpha:0.801}},{t:this.instance,p:{rotation:0,x:446.1,y:274.4,alpha:0.801}}]},1).to({state:[{t:this.instance_8,p:{rotation:0,x:259.2,y:274.9,alpha:0.699}},{t:this.instance_7,p:{rotation:0,x:286.3,y:274.8,alpha:0.699}},{t:this.instance_6,p:{rotation:0,x:310.7,y:275.4,alpha:0.699}},{t:this.instance_5,p:{rotation:0,x:334.3,y:274.4,alpha:0.699}},{t:this.instance_4,p:{rotation:0,x:356.3,y:274.4,alpha:0.699}},{t:this.instance_3,p:{rotation:0,x:380.5,y:274.4,alpha:0.699}},{t:this.instance_2,p:{rotation:0,x:401.1,y:274.8,alpha:0.699}},{t:this.instance_1,p:{rotation:0,x:423.7,y:274.8,alpha:0.699}},{t:this.instance,p:{rotation:0,x:446.1,y:274.4,alpha:0.699}}]},1).to({state:[{t:this.instance_8,p:{rotation:0,x:259.2,y:274.9,alpha:0.602}},{t:this.instance_7,p:{rotation:0,x:286.3,y:274.8,alpha:0.602}},{t:this.instance_6,p:{rotation:0,x:310.7,y:275.4,alpha:0.602}},{t:this.instance_5,p:{rotation:0,x:334.3,y:274.4,alpha:0.602}},{t:this.instance_4,p:{rotation:0,x:356.3,y:274.4,alpha:0.602}},{t:this.instance_3,p:{rotation:0,x:380.5,y:274.4,alpha:0.602}},{t:this.instance_2,p:{rotation:0,x:401.1,y:274.8,alpha:0.602}},{t:this.instance_1,p:{rotation:0,x:423.7,y:274.8,alpha:0.602}},{t:this.instance,p:{rotation:0,x:446.1,y:274.4,alpha:0.602}}]},1).to({state:[{t:this.instance_8,p:{rotation:0,x:259.2,y:274.9,alpha:0.5}},{t:this.instance_7,p:{rotation:0,x:286.3,y:274.8,alpha:0.5}},{t:this.instance_6,p:{rotation:0,x:310.7,y:275.4,alpha:0.5}},{t:this.instance_5,p:{rotation:0,x:334.3,y:274.4,alpha:0.5}},{t:this.instance_4,p:{rotation:0,x:356.3,y:274.4,alpha:0.5}},{t:this.instance_3,p:{rotation:0,x:380.5,y:274.4,alpha:0.5}},{t:this.instance_2,p:{rotation:0,x:401.1,y:274.8,alpha:0.5}},{t:this.instance_1,p:{rotation:0,x:423.7,y:274.8,alpha:0.5}},{t:this.instance,p:{rotation:0,x:446.1,y:274.4,alpha:0.5}}]},1).to({state:[{t:this.instance_8,p:{rotation:0,x:259.2,y:274.9,alpha:0.398}},{t:this.instance_7,p:{rotation:0,x:286.3,y:274.8,alpha:0.398}},{t:this.instance_6,p:{rotation:0,x:310.7,y:275.4,alpha:0.398}},{t:this.instance_5,p:{rotation:0,x:334.3,y:274.4,alpha:0.398}},{t:this.instance_4,p:{rotation:0,x:356.3,y:274.4,alpha:0.398}},{t:this.instance_3,p:{rotation:0,x:380.5,y:274.4,alpha:0.398}},{t:this.instance_2,p:{rotation:0,x:401.1,y:274.8,alpha:0.398}},{t:this.instance_1,p:{rotation:0,x:423.7,y:274.8,alpha:0.398}},{t:this.instance,p:{rotation:0,x:446.1,y:274.4,alpha:0.398}}]},1).to({state:[{t:this.instance_8,p:{rotation:0,x:259.2,y:274.9,alpha:0.301}},{t:this.instance_7,p:{rotation:0,x:286.3,y:274.8,alpha:0.301}},{t:this.instance_6,p:{rotation:0,x:310.7,y:275.4,alpha:0.301}},{t:this.instance_5,p:{rotation:0,x:334.3,y:274.4,alpha:0.301}},{t:this.instance_4,p:{rotation:0,x:356.3,y:274.4,alpha:0.301}},{t:this.instance_3,p:{rotation:0,x:380.5,y:274.4,alpha:0.301}},{t:this.instance_2,p:{rotation:0,x:401.1,y:274.8,alpha:0.301}},{t:this.instance_1,p:{rotation:0,x:423.7,y:274.8,alpha:0.301}},{t:this.instance,p:{rotation:0,x:446.1,y:274.4,alpha:0.301}}]},1).to({state:[{t:this.instance_8,p:{rotation:0,x:259.2,y:274.9,alpha:0.199}},{t:this.instance_7,p:{rotation:0,x:286.3,y:274.8,alpha:0.199}},{t:this.instance_6,p:{rotation:0,x:310.7,y:275.4,alpha:0.199}},{t:this.instance_5,p:{rotation:0,x:334.3,y:274.4,alpha:0.199}},{t:this.instance_4,p:{rotation:0,x:356.3,y:274.4,alpha:0.199}},{t:this.instance_3,p:{rotation:0,x:380.5,y:274.4,alpha:0.199}},{t:this.instance_2,p:{rotation:0,x:401.1,y:274.8,alpha:0.199}},{t:this.instance_1,p:{rotation:0,x:423.7,y:274.8,alpha:0.199}},{t:this.instance,p:{rotation:0,x:446.1,y:274.4,alpha:0.199}}]},1).to({state:[{t:this.instance_8,p:{rotation:0,x:259.2,y:274.9,alpha:0.102}},{t:this.instance_7,p:{rotation:0,x:286.3,y:274.8,alpha:0.102}},{t:this.instance_6,p:{rotation:0,x:310.7,y:275.4,alpha:0.102}},{t:this.instance_5,p:{rotation:0,x:334.3,y:274.4,alpha:0.102}},{t:this.instance_4,p:{rotation:0,x:356.3,y:274.4,alpha:0.102}},{t:this.instance_3,p:{rotation:0,x:380.5,y:274.4,alpha:0.102}},{t:this.instance_2,p:{rotation:0,x:401.1,y:274.8,alpha:0.102}},{t:this.instance_1,p:{rotation:0,x:423.7,y:274.8,alpha:0.102}},{t:this.instance,p:{rotation:0,x:446.1,y:274.4,alpha:0.102}}]},1).to({state:[{t:this.instance_8,p:{rotation:0,x:259.2,y:274.9,alpha:0}},{t:this.instance_7,p:{rotation:0,x:286.3,y:274.8,alpha:0}},{t:this.instance_6,p:{rotation:0,x:310.7,y:275.4,alpha:0}},{t:this.instance_5,p:{rotation:0,x:334.3,y:274.4,alpha:0}},{t:this.instance_4,p:{rotation:0,x:356.3,y:274.4,alpha:0}},{t:this.instance_3,p:{rotation:0,x:380.5,y:274.4,alpha:0}},{t:this.instance_2,p:{rotation:0,x:401.1,y:274.8,alpha:0}},{t:this.instance_1,p:{rotation:0,x:423.7,y:274.8,alpha:0}},{t:this.instance,p:{rotation:0,x:446.1,y:274.4,alpha:0}}]},1).to({state:[{t:this.instance_8,p:{rotation:0,x:259.2,y:274.9,alpha:0.102}},{t:this.instance_7,p:{rotation:0,x:286.3,y:274.8,alpha:0.102}},{t:this.instance_6,p:{rotation:0,x:310.7,y:275.4,alpha:0.102}},{t:this.instance_5,p:{rotation:0,x:334.3,y:274.4,alpha:0.102}},{t:this.instance_4,p:{rotation:0,x:356.3,y:274.4,alpha:0.102}},{t:this.instance_3,p:{rotation:0,x:380.5,y:274.4,alpha:0.102}},{t:this.instance_2,p:{rotation:0,x:401.1,y:274.8,alpha:0.102}},{t:this.instance_1,p:{rotation:0,x:423.7,y:274.8,alpha:0.102}},{t:this.instance,p:{rotation:0,x:446.1,y:274.4,alpha:0.102}}]},1).to({state:[{t:this.instance_8,p:{rotation:0,x:259.2,y:274.9,alpha:0.199}},{t:this.instance_7,p:{rotation:0,x:286.3,y:274.8,alpha:0.199}},{t:this.instance_6,p:{rotation:0,x:310.7,y:275.4,alpha:0.199}},{t:this.instance_5,p:{rotation:0,x:334.3,y:274.4,alpha:0.199}},{t:this.instance_4,p:{rotation:0,x:356.3,y:274.4,alpha:0.199}},{t:this.instance_3,p:{rotation:0,x:380.5,y:274.4,alpha:0.199}},{t:this.instance_2,p:{rotation:0,x:401.1,y:274.8,alpha:0.199}},{t:this.instance_1,p:{rotation:0,x:423.7,y:274.8,alpha:0.199}},{t:this.instance,p:{rotation:0,x:446.1,y:274.4,alpha:0.199}}]},1).to({state:[{t:this.instance_8,p:{rotation:0,x:259.2,y:274.9,alpha:0.301}},{t:this.instance_7,p:{rotation:0,x:286.3,y:274.8,alpha:0.301}},{t:this.instance_6,p:{rotation:0,x:310.7,y:275.4,alpha:0.301}},{t:this.instance_5,p:{rotation:0,x:334.3,y:274.4,alpha:0.301}},{t:this.instance_4,p:{rotation:0,x:356.3,y:274.4,alpha:0.301}},{t:this.instance_3,p:{rotation:0,x:380.5,y:274.4,alpha:0.301}},{t:this.instance_2,p:{rotation:0,x:401.1,y:274.8,alpha:0.301}},{t:this.instance_1,p:{rotation:0,x:423.7,y:274.8,alpha:0.301}},{t:this.instance,p:{rotation:0,x:446.1,y:274.4,alpha:0.301}}]},1).to({state:[{t:this.instance_8,p:{rotation:0,x:259.2,y:274.9,alpha:0.398}},{t:this.instance_7,p:{rotation:0,x:286.3,y:274.8,alpha:0.398}},{t:this.instance_6,p:{rotation:0,x:310.7,y:275.4,alpha:0.398}},{t:this.instance_5,p:{rotation:0,x:334.3,y:274.4,alpha:0.398}},{t:this.instance_4,p:{rotation:0,x:356.3,y:274.4,alpha:0.398}},{t:this.instance_3,p:{rotation:0,x:380.5,y:274.4,alpha:0.398}},{t:this.instance_2,p:{rotation:0,x:401.1,y:274.8,alpha:0.398}},{t:this.instance_1,p:{rotation:0,x:423.7,y:274.8,alpha:0.398}},{t:this.instance,p:{rotation:0,x:446.1,y:274.4,alpha:0.398}}]},1).to({state:[{t:this.instance_8,p:{rotation:0,x:259.2,y:274.9,alpha:0.5}},{t:this.instance_7,p:{rotation:0,x:286.3,y:274.8,alpha:0.5}},{t:this.instance_6,p:{rotation:0,x:310.7,y:275.4,alpha:0.5}},{t:this.instance_5,p:{rotation:0,x:334.3,y:274.4,alpha:0.5}},{t:this.instance_4,p:{rotation:0,x:356.3,y:274.4,alpha:0.5}},{t:this.instance_3,p:{rotation:0,x:380.5,y:274.4,alpha:0.5}},{t:this.instance_2,p:{rotation:0,x:401.1,y:274.8,alpha:0.5}},{t:this.instance_1,p:{rotation:0,x:423.7,y:274.8,alpha:0.5}},{t:this.instance,p:{rotation:0,x:446.1,y:274.4,alpha:0.5}}]},1).to({state:[{t:this.instance_8,p:{rotation:0,x:259.2,y:274.9,alpha:0.602}},{t:this.instance_7,p:{rotation:0,x:286.3,y:274.8,alpha:0.602}},{t:this.instance_6,p:{rotation:0,x:310.7,y:275.4,alpha:0.602}},{t:this.instance_5,p:{rotation:0,x:334.3,y:274.4,alpha:0.602}},{t:this.instance_4,p:{rotation:0,x:356.3,y:274.4,alpha:0.602}},{t:this.instance_3,p:{rotation:0,x:380.5,y:274.4,alpha:0.602}},{t:this.instance_2,p:{rotation:0,x:401.1,y:274.8,alpha:0.602}},{t:this.instance_1,p:{rotation:0,x:423.7,y:274.8,alpha:0.602}},{t:this.instance,p:{rotation:0,x:446.1,y:274.4,alpha:0.602}}]},1).to({state:[{t:this.instance_8,p:{rotation:0,x:259.2,y:274.9,alpha:0.699}},{t:this.instance_7,p:{rotation:0,x:286.3,y:274.8,alpha:0.699}},{t:this.instance_6,p:{rotation:0,x:310.7,y:275.4,alpha:0.699}},{t:this.instance_5,p:{rotation:0,x:334.3,y:274.4,alpha:0.699}},{t:this.instance_4,p:{rotation:0,x:356.3,y:274.4,alpha:0.699}},{t:this.instance_3,p:{rotation:0,x:380.5,y:274.4,alpha:0.699}},{t:this.instance_2,p:{rotation:0,x:401.1,y:274.8,alpha:0.699}},{t:this.instance_1,p:{rotation:0,x:423.7,y:274.8,alpha:0.699}},{t:this.instance,p:{rotation:0,x:446.1,y:274.4,alpha:0.699}}]},1).to({state:[{t:this.instance_8,p:{rotation:0,x:259.2,y:274.9,alpha:0.801}},{t:this.instance_7,p:{rotation:0,x:286.3,y:274.8,alpha:0.801}},{t:this.instance_6,p:{rotation:0,x:310.7,y:275.4,alpha:0.801}},{t:this.instance_5,p:{rotation:0,x:334.3,y:274.4,alpha:0.801}},{t:this.instance_4,p:{rotation:0,x:356.3,y:274.4,alpha:0.801}},{t:this.instance_3,p:{rotation:0,x:380.5,y:274.4,alpha:0.801}},{t:this.instance_2,p:{rotation:0,x:401.1,y:274.8,alpha:0.801}},{t:this.instance_1,p:{rotation:0,x:423.7,y:274.8,alpha:0.801}},{t:this.instance,p:{rotation:0,x:446.1,y:274.4,alpha:0.801}}]},1).to({state:[{t:this.instance_8,p:{rotation:0,x:259.2,y:274.9,alpha:0.898}},{t:this.instance_7,p:{rotation:0,x:286.3,y:274.8,alpha:0.898}},{t:this.instance_6,p:{rotation:0,x:310.7,y:275.4,alpha:0.898}},{t:this.instance_5,p:{rotation:0,x:334.3,y:274.4,alpha:0.898}},{t:this.instance_4,p:{rotation:0,x:356.3,y:274.4,alpha:0.898}},{t:this.instance_3,p:{rotation:0,x:380.5,y:274.4,alpha:0.898}},{t:this.instance_2,p:{rotation:0,x:401.1,y:274.8,alpha:0.898}},{t:this.instance_1,p:{rotation:0,x:423.7,y:274.8,alpha:0.898}},{t:this.instance,p:{rotation:0,x:446.1,y:274.4,alpha:0.898}}]},1).to({state:[{t:this.instance_8,p:{rotation:0,x:259.2,y:274.9,alpha:1}},{t:this.instance_7,p:{rotation:0,x:286.3,y:274.8,alpha:1}},{t:this.instance_6,p:{rotation:0,x:310.7,y:275.4,alpha:1}},{t:this.instance_5,p:{rotation:0,x:334.3,y:274.4,alpha:1}},{t:this.instance_4,p:{rotation:0,x:356.3,y:274.4,alpha:1}},{t:this.instance_3,p:{rotation:0,x:380.5,y:274.4,alpha:1}},{t:this.instance_2,p:{rotation:0,x:401.1,y:274.8,alpha:1}},{t:this.instance_1,p:{rotation:0,x:423.7,y:274.8,alpha:1}},{t:this.instance,p:{rotation:0,x:446.1,y:274.4,alpha:1}}]},1).wait(30));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ak8hrQAEgIALgRQAPgXAIAAQAKAAADAEQAEAEACAAQAEAAAJgaQANgbAaAAQABAAAMAKQAOAMAIAJQACgDADgLQACgMAEgFQAMgUAsAMQAPgEAPAQQABABAJALQAFAGACAAQAAAAARgQQARgQALAAQANAAAKARQAIANADANQAEgCAJgQQANgPAVAAQAZAAAGANQABADABAGQABAEACAAQACAAAQgUQAQgUADAAQAFAAAQAUQAQAUABAAQAGAAAGgFQABgBAJgKQAOgRAVAAQAaAAAHAsQAKgBAJgFIAUAAQAGAJAJAiQAIAdAHAEQAJADAEAdQACAVAAAXQAAAOAAADQgCALgIAIQADAZAAADQACATAAALQAAAEAAAJQAAAGgDAFQgGAKgcAAQgKARgLAQQgXAhgIAAQgGAAgMgOQgLgNgCAAQgBAAgRAYQgSAYgKAAQgpAAgFgIQgBgDAAgJQAAgKgDgHQgGARgKANQgSAYgWAAQgYAAgIgRQgCgFgCgJQgBgJAAgBQgGAEgGALQgGANgDAGQgKACgFAAQgGABgDAAQgUAAgJgSQgDgFgCgJQgCgIgBgCQgMAOgDADQgOAPgNAAQgSAAgJgSQgDgGgCgJQgCgIgBgEQgIAMgEAFQgFAHgLAEIgdAAQgFgDgBgHQgEgQAAgCQgCADgJANQgKAMgQAAQgaAAgHgVQgCgHgBgKQAAgLAAgFQgEACgIAHQgEADgMAAQgpAAgPgeQgIgSAAgdQAAgUAGgKQAGgKABgTQgBgSAAgKQABgSABgMQACgMAGgBQAHgCABgLQABgGABgEQABgJADgKg");
	this.shape.setTransform(269.3,317.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAsDGQgCgGgCgIIgBgLQgGAFgGAKIgJAUIgPACIgJABQgUAAgJgSQgDgFgCgJIgDgKIgPARQgOAOgNAAQgSAAgJgRQgDgGgCgJIgDgMIgMAQQgFAHgLAFIgdAAQgFgDgBgIIgEgRIgLAQQgKAMgQAAQgagBgHgUQgCgHgBgLIAAgPQgEACgIAHQgEADgMAAQgpAAgPgeQgIgSAAgdQAAgUAGgKQAGgKABgTIgBgcIACgfQACgLAGgBQAHgCABgMIACgKQABgHADgLQAEgIALgSQAPgWAIAAQAKgBADAFQAEAEACAAQAEAAAJgaQANgbAaAAQABAAAMAKQAOALAIAKQACgDADgLQACgMAEgFQAMgVAsANQAPgDAPAPIAKAMQAFAGACgBIARgQQARgPALAAQANAAAKARQAIAMADANQAEgCAJgPQANgPAVAAQAZAAAGANQABACABAHQAAABABABQAAAAAAABQABAAAAABQABAAAAAAQACAAAQgUQAQgUADAAQAFAAAQAUIARAUQAGAAAGgFIAKgLQAOgRAVAAQAaAAAHAsQAKgBAJgFIAUAAQAGAJAJAiQAIAdAHAEQAJADAEAdQACAUAAAYIAAARQgCALgIAIIADAcIACAeIAAAMQAAAHgDAEQgGALgcAAQgKAQgLAQQgXAigIAAQgGAAgMgOQgLgNgCAAQgBAAgRAXQgSAYgKAAQgpABgFgJIgBgLQAAgKgDgIQgGARgKANQgSAZgWAAQgYAAgIgRg");
	this.shape_1.setTransform(269.3,317.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AmxBGQAAgVAHgMQAJgKAAgUQAAgUAAgLQAAgTACgOQACgMAHgCQAJgBABgNQAEgTAEgLQAEgKANgSQATgZAKAAQANAAADAFQAEAEAEAAQAFAAAKgcQAQgdAgAAQACAAAPALQAQAMAKALQADgEADgMQAEgMAEgGQAPgWA2ANQASgDATAQQAAABAMAMQAFAGADAAQABAAAVgRQAUgRANAAQARAAAMASQALAOADAOQAFgCALgRQAQgQAaAAQAeAAAHAOQACADABAHQACAEACAAQACAAAUgVQAUgWAEAAQAFAAAUAWQAUAVAAAAQAJAAAHgFQABgBALgMQARgRAaAAQAfAAAJAvQANgBALgFIAYAAQAIAJAKAlQAKAfAKAEQAKAEAFAfQADAWAAAaQAAAOAAAEQgDAMgKAJQADAaACAEQABAUAAAMQAAAFABAJQgBAHgDAFQgIALghAAQgNASgOARQgcAkgKAAQgHAAgPgPQgOgOgBAAQgCAAgVAZQgWAagMAAQgzAAgFgIQgCgDAAgKQAAgKgEgJQgIATgMAOQgVAagbAAQgeAAgKgSQgDgGgCgJQgBgKAAgCQgIAFgGAMQgIAOgDAHQgOABgFABQgJABgDAAQgZAAgKgTQgEgGgDgKQgDgJAAgCQgPAQgEADQgRAQgQAAQgWAAgLgTQgEgHgCgJQgDgKgBgDQgKANgEAEQgHAIgOAEIgiAAQgGgCgDgJQgEgRgBgBQgCADgKAOQgNAMgTAAQggAAgJgWQgDgHgBgMQAAgMAAgEQgFACgJAHQgFAEgQAAQgxAAgSghQgLgTAAggg");
	this.shape_2.setTransform(276.3,314);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA2DWQgDgGgCgJIgCgMQgHAFgGAMIgMAVIgSACIgMABQgYAAgLgTQgDgGgEgKIgDgLIgSATQgSAQgQAAQgWAAgKgTQgEgHgDgJIgEgNIgOARQgHAIgNAEIgjAAQgHgCgBgJIgGgSIgMARQgNAMgTAAQggAAgJgWQgDgHgBgMIAAgQQgFACgJAHQgFAEgQAAQgxAAgSghQgLgTAAggQAAgVAIgMQAHgKABgUIgBgfQABgTACgOQABgMAJgCQAHgBADgNQADgTAEgLQAEgKAOgSQASgZALAAQAMAAAEAFQAEAEADAAQAEAAALgcQAQgdAgAAQACAAAOALQARAMAKALQADgEADgMQADgMAFgGQAPgWA2ANQASgDATAQIAMANQAGAGACAAIAVgRQAVgRANAAQAQAAANASQALAOADAOQAFgCALgRQAPgQAaAAQAfAAAHAOIAEAKQAAAEADAAQACAAAUgVQAUgWADAAQAGAAAUAWIAUAVQAJAAAHgFIAMgNQARgRAaAAQAfAAAJAvQAMgBALgFIAZAAQAHAJALAlQAKAfAJAEQALAEAFAfQADAWAAAaIgBASQgCAMgJAJIADAeIACAgIAAAOQAAAHgDAFQgIALgiAAQgMASgOARQgcAkgKAAQgIAAgNgPQgPgOgCAAQgCAAgUAZQgWAagMAAQgzAAgFgIQgCgDgBgKQABgKgEgJQgHATgNAOQgVAagcAAQgeAAgJgSg");
	this.shape_3.setTransform(276.3,314);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AoCBLQAAgXAJgMQAJgMABgVQgBgVAAgMQABgVACgOQACgNAKgCQAJgCADgNQADgVAFgMQAFgKARgUQAWgbAMAAQAOAAAFAGQAFAEADAAQAGAAANgeQATgfAlAAQADAAARALQAUAOALALQAEgEAEgMQADgOAFgHQASgXBBAPQAVgFAWATQABAAAOANQAHAHADAAQAAAAAZgTQAYgSAQAAQATAAAPATQAMAPAEAQQAHgDANgSQASgRAfAAQAkAAAJAPQACADABAHQACAFADAAQACAAAYgXQAXgXAFAAQAGAAAYAXQAYAXAAAAQAKAAAIgGQACgBANgMQAVgTAeAAQAlAAALAzQAOgBANgGIAdAAQAJAKANAoQAMAhALAEQAMAEAGAiQAEAYAAAcQAAAPgBAEQgDANgLAJQAEAcAAAEQADAWAAANQAAAFAAAKQgBAHgDAFQgKANgoAAQgOATgRASQghAngMAAQgJAAgRgQQgQgQgDAAQgCAAgZAcQgZAcgOAAQg9AAgHgJQgBgDgBgLQAAgLgEgJQgJAUgOAPQgaAcggAAQgkAAgLgTQgDgHgCgKQgCgKgBgCQgIAFgIANQgJAPgFAHQgPACgGABQgKABgFAAQgdAAgMgVQgEgGgEgLQgDgJgCgDQgQARgFAEQgVARgTAAQgaAAgMgVQgFgHgDgKQgDgKgBgEQgMAOgFAFQgJAIgPAFIgqAAQgHgDgDgJQgFgSAAgCQgDADgNAPQgOAOgYAAQglAAgLgYQgDgIgBgMQgBgNAAgFQgFACgMAIQgFAEgTAAQg7AAgVgkQgNgUAAgig");
	this.shape_4.setTransform(283.2,310.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABADmQgDgHgCgKIgDgMQgIAFgIANIgOAWIgVADIgPABQgdAAgMgVQgEgGgEgLIgFgMIgVAVQgVARgTAAQgaAAgMgVQgFgHgDgKIgEgOIgRATQgJAIgPAFIgqAAQgHgDgDgJIgFgUIgQASQgOAOgYAAQglAAgLgYQgDgIgBgMIgBgSQgFACgMAIQgFAEgTAAQg7AAgVgkQgNgUAAgiQAAgXAJgMQAJgMABgVIgBghQABgVACgOQACgNAKgCQAJgCADgNQADgVAFgMQAFgKARgUQAWgbAMAAQAOAAAFAGQAFAEADAAQAGAAANgeQATgfAlAAQADAAARALQAUAOALALQAEgEAEgMQADgOAFgHQASgXBBAPQAVgFAWATIAPANQAHAHADAAIAZgTQAYgSAQAAQATAAAPATQAMAPAEAQQAHgDANgSQASgRAfAAQAkAAAJAPQACADABAHQACAFADAAQACAAAYgXQAXgXAFAAQAGAAAYAXIAYAXQAKAAAIgGIAPgNQAVgTAeAAQAlAAALAzQAOgBANgGIAdAAQAJAKANAoQAMAhALAEQAMAEAGAiQAEAYAAAcQAAAPgBAEQgDANgLAJIAEAgQADAWAAANIAAAPQgBAHgDAFQgKANgoAAQgOATgRASQghAngMAAQgJAAgRgQQgQgQgDAAQgCAAgZAcQgZAcgOAAQg9AAgHgJQgBgDgBgLQAAgLgEgJQgJAUgOAPQgaAcggAAQgkAAgLgTg");
	this.shape_5.setTransform(283.2,310.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("ApTBRQAAgZALgNQAKgMABgXQgBgXAAgMQABgWADgQQACgOALgCQALgCADgOQAEgWAGgNQAGgLASgVQAagdAOAAQARAAAFAGQAGAFAEAAQAGAAAPghQAWghArAAQADAAAUANQAXAOAOAMQAEgEAEgOQAEgOAGgHQAUgZBLAPQAZgEAaATQABABAQAOQAHAHAEAAQABAAAcgUQAcgTATAAQAVAAASAUQAOAQAFARQAIgDAPgTQAUgTAlAAQApAAAKAQQACADACAIQACAFADAAQADAAAcgYQAbgZAFAAQAHAAAcAZQAbAYABAAQALAAAKgGQACgBAPgNQAYgUAjAAQArAAAMA2QAQgBAQgGIAhAAQAKALAQAqQAOAkAMAEQAOAFAHAkQAEAZAAAeQAAAQgBAEQgDAOgNAKQAFAeAAAFQADAXAAANQAAAGAAAKQAAAJgFAFQgLANguAAQgQAUgUAUQgmApgOAAQgKAAgUgQQgTgRgDAAQgCAAgdAdQgdAegRAAQhGAAgIgKQgBgDgBgLQAAgMgFgKQgKAVgRARQgeAeglAAQgpAAgNgVQgEgHgCgKQgCgMgBgCQgKAGgJANQgKAQgGAIQgRACgIABQgMABgEAAQgiAAgPgWQgFgHgEgLQgDgKgCgDQgTASgGAEQgYASgWAAQgeAAgPgWQgFgHgDgLQgDgLgCgEQgOAPgGAFQgJAJgTAFIgwAAQgIgDgDgKQgGgTgBgCQgDAEgOAQQgRAOgbAAQgsAAgMgaQgEgIgBgNQgBgOAAgFQgGACgNAJQgHAEgVAAQhEAAgZgmQgPgWAAgkg");
	this.shape_6.setTransform(290.1,307.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABKD1QgEgGgCgLIgDgNQgKAGgJANIgQAYIgZADIgQABQgiAAgPgWQgFgHgEgLQgDgKgCgDIgYAWQgZASgVAAQgfAAgOgWQgGgIgDgLIgFgPIgUAVQgJAJgSAEIgxAAQgIgCgDgKIgGgWIgSAVQgRAOgbgBQgsABgLgaQgFgJgBgMIAAgTQgHACgNAIQgGAEgWABQhEAAgZgnQgOgVAAgkQAAgZAKgNQALgNAAgWIgBgjQACgXACgPQADgPAKgBQALgCADgPQAEgWAGgMQAGgLASgVQAagdAOAAQARAAAFAFQAGAGAEAAQAGAAAPghQAWghAsAAQADAAATANQAXAOAOAMQAEgEAEgOQAEgOAGgIQAUgYBLAPQAZgFAaAUIARAPQAIAGADAAIAdgTQAcgUATABQAVgBASAVQAPAQAEARQAIgDAOgUQAVgSAlAAQAqAAAJAQQACADADAIQABAFADAAQADAAAcgZQAbgZAFAAQAHAAAcAZIAcAZQALAAAKgGIARgOQAYgUAjgBQArAAAMA3QAQgBAQgGIAhAAQALAKAPAqQAOAlAMAEQAOAFAHAjQAEAaAAAeQABAQgBAEQgEAOgNAKIAGAiQACAXAAAOIAAAQQAAAIgFAGQgKANgvgBQgQAVgUAUQgmApgOAAQgKAAgUgRQgTgQgCAAQgDAAgdAdQgdAegRAAQhGAAgIgKQgBgDgBgLQAAgNgFgJQgKAVgRAQQgdAegmABQgpAAgNgWg");
	this.shape_7.setTransform(290.1,307.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AqjBWQAAgbAMgOQAMgNAAgYQAAgYAAgOQAAgXADgRQADgPAMgCQANgCADgPQAFgYAGgNQAIgMAUgWQAegfAPAAQAUAAAGAGQAGAGAEAAQAJAAAQgjQAZgjAxAAQADAAAXANQAaAPAQAMQAFgDAEgPQAEgQAHgHQAXgbBVARQAdgFAdAVQABABASAPQAJAHADAAQABAAAhgVQAfgVAVAAQAZAAAVAWQAQARAEARQAJgCASgVQAXgTAqAAQAvAAALARQACADADAIQACAGADAAQAEAAAfgbQAegaAGAAQAJAAAfAaQAfAbABAAQAMAAAMgHQACgBARgOQAbgWAoAAQAxAAANA6QAUgBARgHIAmAAQAMAMARAtQAPAmAOAFQARAFAHAmQAFAbAAAgQAAARgBAFQgEAOgOALQAFAgABAFQADAYAAAPQAAAGAAALQAAAJgFAFQgNAOg0AAQgUAWgWAVQgrAsgPAAQgMAAgXgSQgWgSgCAAQgDAAghAgQghAfgTAAQhQAAgIgKQgCgEgBgLQAAgNgFgKQgMAWgUARQghAggqAAQgvAAgPgWQgFgHgCgLQgCgMgBgCQgLAGgLAOQgLARgHAIQgUACgIABQgOABgFAAQgmAAgRgYQgFgGgFgNQgEgKgCgDQgWATgGAEQgcATgYAAQgiAAgRgXQgFgIgFgLQgDgMgCgEQgQAPgHAGQgKAKgWAFIg3AAQgIgDgEgKQgGgWgCgBQgDAEgRARQgTAPgeAAQgyAAgNgbQgFgJgBgOQgBgPAAgGQgIADgOAJQgHAEgZAAQhNAAgcgoQgRgXAAgmg");
	this.shape_8.setTransform(297,304);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABVEFQgFgHgDgLIgDgOQgLAGgLAOIgSAZIgcADIgTACQgmAAgQgZQgGgGgFgMQgEgLgCgDIgcAXQgcATgYAAQgjAAgQgWQgFgIgFgMIgFgQIgXAVQgLAKgUAFIg3AAQgJgDgEgKIgIgXIgUAVQgTAPgeAAQgyAAgNgbQgGgJAAgOIgBgUQgHACgPAJQgIAEgYABQhNAAgdgpQgQgXAAgmQAAgaAMgOQAMgOAAgYIAAgmQABgXACgQQAEgPALgDQANgBAEgQQAEgYAGgNQAIgLAUgXQAdgfAQABQAUAAAFAFQAHAGAEAAQAJAAAQgjQAZgjAxAAQADAAAXANQAaAPAQANQAFgEAEgOQAFgRAGgHQAYgaBUAQQAdgEAdAUIATAQQAJAHAEAAIAhgVQAfgVAVABQAZAAAVAVQAQARAFARQAIgCASgVQAYgTAoAAQAvAAAMARQACADADAIQABAGAFAAQADAAAfgbQAfgaAFAAQAJAAAfAaIAgAbQANAAALgHIATgOQAbgXAoAAQAxAAAOA7QASgCASgGIAmAAQALAMASAsQAPAnAOAEQAQAFAIAnQAFAaAAAgQAAARgBAFQgDAOgPALIAFAlQADAYAAAPIABARQgBAJgEAFQgNAOg0ABQgTAVgXAWQgrArgPAAQgMAAgWgSQgXgSgCAAQgDAAghAgQghAggTAAQhPAAgJgLQgCgDgBgMQAAgNgFgKQgNAWgTASQghAfgqAAQgvABgOgXg");
	this.shape_9.setTransform(297,304);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("Ar0BbQAAgcANgOQAOgPABgaQgBgZAAgOQABgZADgSQADgQAOgCQAOgCAEgQQAFgZAHgOQAIgNAYgYQAgggASAAQAVAAAHAGQAHAGAFAAQAJAAASglQAcglA3AAQAEAAAaAOQAcAQASANQAFgEAFgPQAGgRAHgIQAagcBfASQAfgFAhAWQABAAAVAQQAKAIAEAAQABAAAkgWQAkgWAXAAQAcAAAXAXQASASAFASQAKgCATgWQAbgVAuAAQA1AAANASQACADADAJQACAGAEAAQAEAAAjgcQAigcAGAAQAKAAAjAcQAjAcABAAQAOAAAMgHQADgBATgPQAegXAtAAQA3AAAPA+QAVgCATgHIArAAQANANAUAvQARApAPAFQASAFAJApQAGAcAAAiQAAASgBAFQgFAQgQALQAGAiABAFQADAaAAAPQAAAHABALQgBAKgGAGQgOAOg6AAQgWAXgYAXQgxAugSAAQgMAAgZgTQgZgTgDAAQgDAAglAiQglAhgVAAQhZAAgKgLQgDgDAAgNQgBgOgGgKQgNAXgVATQgmAiguAAQg1AAgRgYQgFgIgDgLQgCgNgBgCQgNAGgMAPQgMASgHAJQgXACgJABQgPABgGAAQgrAAgTgZQgGgHgFgNQgFgLgCgDQgZAUgGAEQgfAVgcAAQgnAAgSgZQgGgIgFgNQgEgMgCgEQgSAQgHAGQgMAKgYAGIg9AAQgKgEgEgKQgHgXgBgBQgFAEgSASQgWAQgiAAQg3AAgPgdQgGgKgBgOQgBgQAAgGQgIADgRAKQgIAEgbAAQhWAAgggrQgTgYAAgpg");
	this.shape_10.setTransform(303.9,300.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ABeEVQgFgIgDgLIgDgPQgNAGgMAPIgTAbIggADIgVABQgrAAgTgZQgGgHgFgNQgFgLgCgDQgZAUgGAEQgfAVgcAAQgnAAgSgZQgGgIgFgNIgGgQIgZAWQgMAKgYAGIg9AAQgKgEgEgKIgIgYIgXAWQgWAQgiAAQg3AAgPgdQgGgKgBgOIgBgWQgIADgRAKQgIAEgbAAQhWAAgggrQgTgYAAgpQAAgcANgOQAOgPABgaIgBgnQABgZADgSQADgQAOgCQAOgCAEgQQAFgZAHgOQAIgNAYgYQAgggASAAQAVAAAHAGQAHAGAFAAQAJAAASglQAcglA3AAQAEAAAaAOQAcAQASANQAFgEAFgPQAGgRAHgIQAagcBfASQAfgFAhAWIAWAQQAKAIAEAAIAlgWQAkgWAXAAQAcAAAXAXQASASAFASQAKgCATgWQAbgVAuAAQA1AAANASQACADADAJQACAGAEAAQAEAAAjgcQAigcAGAAQAKAAAjAcIAkAcQAOAAAMgHIAWgQQAegXAtAAQA3AAAPA+QAVgCATgHIArAAQANANAUAvQARApAPAFQASAFAJApQAGAcAAAiQAAASgBAFQgFAQgQALIAHAnQADAaAAAPIABASQgBAKgGAGQgOAOg6AAQgWAXgYAXQgxAugSAAQgMAAgZgTQgZgTgDAAQgDAAglAiQglAhgVAAQhZAAgKgLQgDgDAAgNQgBgOgGgKQgNAXgVATQgmAiguAAQg1AAgRgYg");
	this.shape_11.setTransform(303.9,300.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("AtEBgQAAgeAOgPQAPgPABgbQgBgbAAgPQABgbAEgSQADgRAPgDQAQgCAEgRQAGgaAIgPQAIgOAagZQAkghAUAAQAYAAAHAGQAIAGAGAAQAJAAAVgnQAfgoA9AAQADAAAdAPQAgARATAPQAGgFAGgQQAGgSAIgIQAcgeBqATQAigFAlAXQABAAAWARQAMAIAEAAQACAAAngXQAogYAaAAQAeAAAaAZQAUATAGAUQAKgDAWgYQAdgWAzAAQA7AAAOAUQADAEADAJQACAGAFAAQAEAAAmgeQAngdAGAAQALAAAnAdQAmAeABAAQAQAAAOgHQADgCAVgQQAhgYAyAAQA8AAARBBQAYgBAVgHIAvAAQAOAMAWAzQATArARAFQAUAGAKArQAGAeAAAjQAAATgBAGQgFAQgRAMQAGAkABAFQADAbAAARQAAAHABAMQgBAKgGAHQgPAPhBAAQgYAZgbAYQg2AwgUAAQgOAAgbgUQgcgUgDAAQgEAAgoAjQgqAkgXAAQhiAAgLgMQgDgEgBgNQAAgOgHgLQgOAZgYATQgqAkgzAAQg7AAgSgZQgGgJgDgMQgCgNgCgDQgOAHgNAQQgOATgHAKQgZABgLACQgRABgGAAQgwAAgUgaQgHgIgGgOQgFgMgDgDQgbAWgHAEQgiAVgfAAQgrAAgUgZQgHgKgFgMQgFgNgCgFQgTASgJAGQgNALgaAFIhEAAQgLgDgEgMQgJgXgBgCQgFAEgTATQgZARglAAQg+AAgRgeQgGgKgBgQQAAgQgBgGQgJACgSALQgJAEgeAAQhgAAgjgtQgUgaAAgrg");
	this.shape_12.setTransform(310.9,297.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("ABoElQgGgJgDgMQgCgOgCgBQgOAGgNAQIgVAcIgkAEIgXABQgwAAgUgbQgHgHgGgOQgFgMgDgDIgiAaQgiAWgfgBQgrAAgUgaQgHgIgFgNIgHgSIgcAYQgNAKgaAGIhEAAQgLgDgEgLIgKgaIgYAXQgZARglAAQg+AAgRgeQgGgKgBgQIgBgWQgJACgSAKQgJAFgeAAQhgAAgjgtQgUgaAAgrQAAgdAOgQQAPgPABgcIgBgpQABgaAEgUQADgQAPgDQAQgCAEgRQAGgbAIgOQAIgOAagZQAkghAUAAQAYgBAHAHQAIAGAGAAQAJAAAVgnQAfgoA9AAQADABAdAPQAgAQATAOQAGgEAGgQQAGgSAIgIQAcgeBqATQAigGAlAYIAXARQAMAIAEAAIApgXQAogXAaAAQAeAAAaAYQAUATAGAUQAKgDAWgXQAdgXAzAAQA7AAAOAUQADAEADAJQACAGAFAAQAEAAAmgeQAngdAGAAQALAAAnAdIAnAeQAQAAAOgHIAYgRQAhgZAyAAQA8AAARBBQAYgBAVgIIAvAAQAOANAWAzQATArARAFQAUAGAKAqQAGAeAAAkQAAATgBAFQgFARgRAMIAHApQADAcAAAQIABATQgBAKgGAHQgPAPhBAAQgYAZgbAYQg2AwgUAAQgOAAgbgUQgcgUgDAAQgEAAgoAkQgqAjgXAAQhiAAgLgMQgDgDgBgOQAAgPgHgKQgOAYgYAUQgqAkgzAAQg7AAgSgZg");
	this.shape_13.setTransform(310.9,297.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,1,1).p("AuVBlQAAgfAPgQQARgQAAgdQAAgcAAgQQABgcAEgUQADgRARgDQARgCAEgSQAHgcAJgQQAJgOAdgaQAngkAWAAQAaAAAIAHQAIAGAHAAQAKAAAXgpQAigpBDAAQAEAAAfAPQAjASAVAPQAHgFAGgRQAGgSAJgJQAgggBzAUQAmgGAoAZQABABAZARQANAJAFAAQABAAAsgZQAqgYAdAAQAiAAAbAaQAXAUAGAUQAMgDAYgYQAggXA3AAQBBAAAPAUQAEAEADAKQADAGAEAAQAEAAArgfQAqgfAHAAQAMAAArAfQAqAfAAAAQASAAAPgIQADgCAYgQQAkgZA2AAQBDAAASBEQAagCAYgHIAzAAQAQAOAXA1QAVAtATAFQAXAGAKAtQAHAgAAAmQAAAUgCAGQgFARgTANQAGAmABAFQAEAdAAARQAAAHABANQgBALgHAGQgQARhHAAQgaAageAZQg8AzgUAAQgRAAgegVQgegVgDAAQgEAAgtAlQgtAmgaAAQhrAAgMgNQgDgEgBgOQgBgPgGgMQgRAbgZAUQgvAmg4AAQhBAAgTgbQgGgIgEgNQgDgOgBgDQgQAHgNARQgQAUgJAKQgbACgLABQgTACgHAAQg0AAgXgcQgHgIgHgPQgGgNgCgCQgeAWgIAFQgmAXggAAQgwAAgWgcQgIgJgFgOQgGgOgBgFQgWATgJAHQgPALgcAGIhLAAQgMgEgEgMQgKgZgBgCQgGAFgVAUQgbASgoAAQhFAAgSggQgHgLgBgQQAAgSgBgGQgKADgUAKQgKAGghAAQhpAAgngwQgVgbAAgug");
	this.shape_14.setTransform(317.8,293.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AByE0QgHgIgDgNQgDgOgBgDQgQAHgOARIgXAeIgnADIgaACQg0AAgXgcQgHgIgGgPQgHgNgCgCIglAbQgnAXggAAQgwAAgWgcQgIgJgFgOIgHgTIgfAaQgPALgcAGIhLAAQgMgEgFgMIgKgbIgbAZQgaASgpAAQhEAAgTggQgHgLgBgQIgBgYQgKADgTAKQgLAGggAAQhqAAgngwQgVgbAAguQAAgfAPgQQARgQAAgdIAAgsQABgcAEgUQADgRARgDQARgCAEgSQAIgcAIgQQAJgOAdgaQAngkAWAAQAaAAAJAHQAHAGAHAAQALAAAWgpQAigpBDAAQAEAAAfAPQAjASAVAPQAHgFAGgRQAHgSAJgJQAfggBzAUQAngGAoAZIAZASQANAJAEAAIAtgZQAsgYAcAAQAiAAAbAaQAXAUAHAUQALgDAYgYQAggXA3AAQBBAAAPAUQAEAEADAKQADAGAEAAQAEAAArgfQAqgfAHAAQAMAAAqAfIArAfQASAAAQgIIAagSQAkgZA3AAQBCAAASBEQAagCAYgHIAzAAQAQAOAYA1QAUAtATAFQAXAGAKAtQAHAgAAAmQAAAUgCAGQgEARgUANIAIArQADAdAAARIABAUQgBALgHAGQgQARhHAAQgaAageAZQg8AzgVAAQgQAAgegVQgegVgDAAQgEAAgtAlQgtAmgaAAQhsAAgLgNQgEgEAAgOQgBgPgGgMQgRAbgZAUQguAmg5AAQhBAAgTgbg");
	this.shape_15.setTransform(317.8,293.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,1,1).p("AvmBqQAAggARgRQASgRABgfQgBgdAAgRQABgdAFgVQADgSATgDQASgCAFgTQAHgeAKgQQAJgPAggcQArglAYAAQAcAAAJAHQAJAGAHAAQALAAAYgrQAlgrBJAAQAFAAAiAQQAlATAXAPQAIgFAGgRQAIgUAJgJQAighB+AUQApgFAsAZQABABAbASQANAKAGAAQACAAAvgaQAvgaAfAAQAkAAAfAbQAYAVAHAWQANgDAagaQAigYA9AAQBGAAARAVQAEAEADAKQADAHAFAAQAFAAAuggQAugiAIAAQAMAAAvAiQAuAgAAAAQAUAAAQgJQADgBAZgRQAogbA8AAQBIAAAUBIQAcgCAZgIIA4AAQARAPAaA3QAXAwAVAGQAXAGAMAwQAIAhAAAnQAAAVgCAHQgGATgVAMQAHAoACAGQAEAeAAATQAAAHABANQgCAMgHAGQgSARhNAAQgcAcghAbQhAA1gYAAQgRAAgggVQghgXgEAAQgEAAgxAnQgxAogcAAQh1AAgNgNQgEgFAAgPQgBgPgIgNQgRAcgcAWQgyAog9AAQhHAAgVgdQgHgIgDgPQgEgPgBgCQgRAHgPASQgRAVgJALQgeACgMABQgVACgIAAQg4AAgZgeQgIgIgHgPQgGgOgDgDQggAYgJAFQgpAYgkAAQg0AAgYgeQgIgJgGgOQgGgPgCgFQgYAUgJAHQgRALgeAHIhRAAQgOgFgFgMQgKgagBgCQgGAFgXAUQgdAUgtAAQhKAAgUgiQgHgLgBgRQgBgTgBgGQgKACgWAMQgLAFgkAAQhyAAgqgyQgYgdAAgwg");
	this.shape_16.setTransform(324.7,290.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AB8FEQgHgIgDgOQgEgPgBgDQgRAIgPARIgaAfIgqAFIgdABQg4AAgZgeQgIgIgHgPQgGgOgDgDQggAYgJAFQgpAYgkAAQg0AAgYgdQgIgKgGgOIgIgUIghAbQgRALgeAHIhRAAQgOgFgFgMIgLgcIgdAaQgdATgtAAQhKAAgUgiQgHgLgBgRIgCgZQgKACgWAMQgLAFgkAAQhyAAgqgyQgYgcAAgxQAAggARgRQASgRABgfIgBguQABgdAFgVQADgSATgDQASgDAFgSQAHgeAKgQQAJgPAggcQArglAYAAQAcgBAJAIQAJAGAHAAQALAAAYgrQAlgrBJAAQAFAAAiAQQAlASAXAQQAIgFAGgRQAIgUAJgJQAighB+AUQApgFAsAZIAcAUQANAIAGABIAxgaQAvgaAfAAQAkAAAfAbQAYAWAHAVQANgDAagaQAigYA9AAQBGAAARAVQAEAEADALQADAGAFAAQAFAAAuggQAugiAIAAQAMAAAvAiIAuAgQAUAAAQgJIAcgSQAogbA8AAQBIAAAUBIQAcgBAZgJIA4AAQARAPAaA3QAXAxAVAFQAXAGAMAwQAIAhAAAnQAAAWgCAFQgGAUgVANIAJAtQAEAeAAASIABAWQgCAKgHAIQgSAQhNAAQgcAcghAaQhAA2gYAAQgRABgggWQghgXgEAAQgEAAgxAnQgxAngcAAQh1ABgNgNQgEgFAAgOQgBgRgIgMQgRAcgcAWQgyAng9AAQhHAAgVgcg");
	this.shape_17.setTransform(324.7,290.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1,1,1).p("Aw3BwQAAgiATgSQATgSABggQAAggAAgQQABgfAEgWQAFgTATgDQAUgDAFgTQAIggAKgRQALgPAigdQAugoAaAAQAeAAAKAIQAKAHAHAAQANAAAaguQAogtBOAAQAFAAAlARQApATAZAQQAIgEAHgTQAHgUALgKQAlgjCIAWQAtgGAuAbQACABAdATQAOAJAHAAQABAAA0gbQAygbAiAAQAnAAAhAdQAaAWAIAXQAOgEAcgbQAlgZBCAAQBMAAASAWQAEAEADALQADAHAGAAQAFAAAygiQAxgiAJAAQAOAAAyAiQAyAiAAAAQAVAAASgJQADgBAbgSQAsgcBAAAQBOAAAVBLQAfgCAbgJIA9AAQASAQAcA7QAZAyAWAFQAaAHAMAyQAJAjAAApQAAAWgCAHQgGATgXAOQAIAqABAGQAFAgAAATQAAAIAAAOQgBAMgIAHQgTAShUAAQgeAcgjAcQhGA5gZAAQgTAAgjgXQgkgYgEAAQgEAAg1ApQg1ApgeAAQh/AAgOgNQgEgFAAgPQgBgRgIgNQgTAdgeAXQg2AqhDAAQhMAAgXgeQgHgJgEgOQgEgQgBgDQgSAIgRASQgSAWgKALQggADgNABQgXACgIAAQg9AAgbgfQgIgJgIgQQgHgOgDgDQgjAZgJAFQgtAZgnAAQg3AAgagfQgJgKgHgPQgGgPgDgFQgZAUgKAHQgSANghAGIhYAAQgOgEgFgNQgLgbgCgCQgHAFgZAWQgfATgxAAQhPAAgVgjQgIgMgCgSQAAgTgBgHQgMADgXAMQgMAGgnAAQh7AAgug1QgageAAgyg");
	this.shape_18.setTransform(331.7,287.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("ACGFUQgIgJgDgPIgFgSQgTAIgQASQgSAWgKALIgtAEIgfACQg+AAgbgfQgHgJgJgQQgGgPgEgDQgiAagKAFQgsAZgnAAQg3AAgbgfQgJgKgGgPIgJgUIgkAbQgRAMghAHIhYAAQgPgEgEgNIgNgdIggAbQgfATgxAAQhPAAgVgjQgJgMgBgSIgBgaQgMADgXAMQgMAFgnAAQh7AAgug1QgZgdAAgyQAAgjASgRQATgTABgfIAAgwQABggAEgVQAEgTAUgDQAUgDAFgTQAIgfAKgSQALgPAigdQAugoAaAAQAeAAAKAIQAKAHAHAAQANAAAaguQAogtBPAAQAEgBAlASQApATAZARQAIgFAHgTQAHgVALgJQAlgjCHAWQAugHAvAbIAeAVQAPAJAFAAIA1gbQAzgbAiAAQAnAAAhAdQAaAWAIAXQAOgEAbgbQAmgZBCAAQBMAAARAWQAEAEAEALQADAHAGAAQAFAAAygiQAxgjAJAAQAOAAAxAjIAzAiQAVAAARgJIAfgTQArgdBBAAQBNABAWBLQAegCAcgIIA9AAQASAPAcA7QAYAxAXAGQAaAGAMAyQAJAkgBApQAAAWgCAHQgFATgXAOIAIAvQAFAgABAUIAAAVQgBANgIAGQgTAThUgBQgfAdgiAcQhGA4gaABQgSAAgkgYQgjgYgEABQgEAAg1ApQg1ApgeAAQh/AAgOgOQgEgEgBgPQAAgRgJgNQgSAdgeAWQg2ArhDgBQhMABgXgeg");
	this.shape_19.setTransform(331.7,287.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(1,1,1).p("AyHB1QAAgkATgTQAVgSABghQAAghAAgSQAAggAGgXQAEgVAVgCQAWgDAFgVQAJggALgSQALgQAlgfQAxgpAcAAQAhAAAKAHQALAIAIAAQANAAAcgwQAsgvBUAAQAFAAAnASQAsAUAcARQAIgFAHgUQAJgVALgKQAoglCRAXQAxgGAzAcQAAABAgAUQAPAKAHAAQACAAA3gcQA2gdAkAAQArAAAjAeQAcAYAJAXQAOgDAfgdQAogaBGAAQBRAAAUAXQAEAEAFAMQADAHAFAAQAGAAA2gkQA1gkAJAAQAPAAA1AkQA2AkABAAQAWAAAUgJQADgCAdgSQAugeBGAAQBTAAAYBPQAggCAdgJIBBAAQAVAQAeA9QAaA1AYAGQAcAHANA0QAJAlAAArQAAAXgCAHQgGAUgZAOQAJAtABAGQAFAhAAAUQAAAIABAPQgCAMgIAIQgVAShZAAQgiAegmAeQhLA7gaAAQgUAAgmgZQgngYgEAAQgFAAg4ArQg5ArghAAQiIAAgOgOQgFgFAAgQQgCgRgIgOQgUAeghAYQg6AshHAAQhSAAgZgfQgIgKgEgPQgEgQgCgDQgTAIgSATQgTAXgLAMQgjADgOABQgYACgJAAQhBAAgeghQgJgJgIgRQgHgPgEgDQglAagKAGQgwAagqAAQg7AAgdggQgJgLgHgPQgGgQgEgGQgaAVgMAIQgSANglAHIhdAAQgQgEgGgOQgMgdgBgCQgHAFgbAXQgiAVg0AAQhVAAgYglQgIgMgCgTQAAgUgBgIQgNADgZANQgMAGgqAAQiEAAgyg3QgbggAAg0g");
	this.shape_20.setTransform(338.6,283.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("ACQFkQgIgKgEgPIgGgTQgTAIgSATQgTAXgLAMIgxAEIggACQhCAAgeghQgIgJgJgRQgHgPgDgDQgmAagKAGQgwAagpAAQg8AAgcggQgKgLgHgPIgKgWIgmAdQgTANgjAHIhfAAQgPgEgFgOQgNgdgBgCIgiAcQgiAVg0AAQhVAAgXglQgJgMgBgTIgCgcQgNADgYANQgNAGgqAAQiEAAgyg3QgbggAAg0QAAgkATgTQAWgSABghIgBgzQABggAFgXQAEgVAVgCQAWgDAFgVQAJggALgSQAMgQAkgfQAxgpAcAAQAhAAAKAHQALAIAIAAQANAAAdgwQAqgvBVAAQAFAAAnASQAsAUAcARQAIgFAIgUQAIgVALgKQAoglCRAXQAxgGAyAcIAhAVQAQAKAGAAQACAAA3gcQA2gdAlAAQAqAAAjAeQAcAYAJAXQAOgDAfgdQAogaBGAAQBSAAATAXQAFAEADAMQAEAHAFAAQAGAAA2gkQA1gkAJAAQAPAAA1AkIA3AkQAWAAAUgJIAggUQAugeBFAAQBVAAAWBPQAhgCAdgJIBBAAQAVAQAeA9QAaA1AYAGQAcAHANA0QAJAlAAArQAAAXgBAHQgHAUgZAOIAKAzQAFAhAAAUIAAAXQgBAMgIAIQgVAShZAAQgiAeglAeQhMA7gaAAQgUAAgmgZQgmgYgFAAQgFAAg4ArQg5ArggAAQiJAAgOgOQgFgFgBgQQgBgRgIgOQgVAeggAYQg6AshHAAQhSAAgZgfg");
	this.shape_21.setTransform(338.6,283.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(1,1,1).p("AzYB6QAAglAVgUQAWgUABgiQAAgjAAgSQABgiAFgYQAFgVAXgDQAXgDAGgVQAJgiALgTQANgRAnggQA1grAeAAQAiAAAMAIQALAIAIAAQAPAAAegyQAugyBaAAQAGAAAqATQAvAVAdASQAJgFAIgUQAJgXAMgLQAqglCcAYQA0gIA2AeQABABAiAVQARAKAHAAQABAAA7gdQA6geAnAAQAtAAAmAfQAeAZAJAYQAQgDAggeQArgcBMAAQBXAAAVAZQAEAEAEAMQAEAIAGAAQAGAAA6gmQA4glAKAAQAQAAA6AlQA5AmABAAQAYAAAUgKQAEgCAfgTQAygfBKAAQBZAAAZBTQAjgCAfgKIBGAAQAVARAhBAQAcA3AZAGQAeAHAOA3QAKAmAAAtQAAAYgCAHQgHAWgaAPQAJAuABAGQAGAjAAAVQAAAIAAAQQgBANgJAHQgXAUhgAAQgjAfgoAfQhQA+gdAAQgVAAgpgaQgpgagFAAQgFAAg8AuQg9AtgjAAQiSAAgQgPQgEgFgBgRQgBgSgJgOQgWAfgiAZQg/AuhMAAQhXAAgbggQgIgLgFgPQgEgSgCgCQgUAIgUAUQgUAYgMAMQglADgPACQgaABgJAAQhHAAgfgiQgJgJgJgRQgIgQgEgEQgoAcgKAFQg0AcgsAAQhAAAgegiQgKgLgIgQQgHgRgDgGQgdAWgMAJQgUANgmAHIhlAAQgRgEgGgOQgMgfgCgCQgHAGgeAYQgkAVg3AAQhcAAgYgmQgJgNgCgUQgBgVgBgIQgNAEgbANQgNAGgtAAQiOAAg0g6QgeggAAg3g");
	this.shape_22.setTransform(345.5,280.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("ACaF0QgIgLgFgPQgEgSgCgCQgUAIgUAUQgUAYgMAMIg0AFIgjABQhHAAgfgiQgJgJgJgRQgIgQgEgEQgoAcgKAFQg0AcgsAAQhAAAgegiQgKgLgIgQIgKgXIgpAfQgUANgmAHIhlAAQgRgEgGgOIgOghIglAeQgkAVg3AAQhcAAgYgmQgJgNgCgUIgCgdQgNAEgbANQgNAGgtAAQiOAAg0g6QgeggAAg3QAAglAVgUQAWgUABgiIAAg1QABgiAFgYQAFgVAXgDQAXgDAGgVQAJgiALgTQANgRAnggQA1grAeAAQAiAAAMAIQALAIAIAAQAPAAAegyQAugyBaAAQAGAAAqATQAvAVAdASQAJgFAIgUQAJgXAMgLQAqglCcAYQA0gIA2AeIAjAWQARAKAHAAIA8gdQA6geAnAAQAtAAAmAfQAeAZAJAYQAQgDAggeQArgcBMAAQBXAAAVAZQAEAEAEAMQAEAIAGAAQAGAAA6gmQA4glAKAAQAQAAA6AlIA6AmQAYAAAUgKIAjgVQAygfBKAAQBZAAAZBTQAjgCAfgKIBGAAQAVARAhBAQAcA3AZAGQAeAHAOA3QAKAmAAAtQAAAYgCAHQgHAWgaAPIAKA0QAGAjAAAVIAAAYQgBANgJAHQgXAUhgAAQgjAfgoAfQhQA+gdAAQgVAAgpgaQgpgagFAAQgFAAg8AuQg9AtgjAAQiSAAgQgPQgEgFgBgRQgBgSgJgOQgWAfgiAZQg/AuhMAAQhXAAgbggg");
	this.shape_23.setTransform(345.5,280.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(1,1,1).p("AQ0lMIBKAAQAXASAjBCQAdA5AcAHQAfAHAPA5QALAoAAAvQAAAZgCAIQgIAWgcAQQAKAwABAGQAGAkAAAWQAAAJABAQQgCAOgJAIQgYAUhmAAQgmAhgrAgQhVBAgfAAQgWAAgsgaQgrgbgFAAQgGAAhAAvQhBAvglAAQibAAgRgQQgFgFgBgRQgBgTgKgPQgXAhglAaQhCAvhRAAQhdAAgdghQgJgLgEgQQgFgSgCgDQgWAJgUAVQgWAZgNAMQgnADgQACQgcACgKAAQhLAAghgkQgKgKgJgSQgJgQgEgEQgqAdgMAGQg2AcgwAAQhEAAgggjQgLgLgIgRQgHgSgEgGQgeAXgNAJQgWAOgoAHIhsAAQgRgEgHgPQgNgggCgCQgIAGgfAZQgnAWg6AAQhiAAgagoQgKgNgCgVQAAgWgBgIQgOAEgdANQgOAHgwAAQiXAAg4g8QgfgiAAg5QAAgnAWgVQAYgUAAgkQAAgkAAgUQABgjAGgZQAFgWAYgDQAYgDAHgWQADgLACgJQAFgQAMgTQANgSAqghQA4gtAgAAQAlAAAMAIQAMAJAJAAQAPAAAhg0QAxg0BgAAQAGAAAtATQAyAWAeATQAKgFAJgWQAJgXANgLQAtgoCmAZQA3gHA6AfQABABAjAWQATAKAHAAQACAAA+geQA/gfApAAQAwAAApAgQAgAaAJAZQARgDAigfQAugdBRAAQBcAAAXAZQAEAFAFAMQADAIAHAAQAHAAA9gnQA8gnALAAQARAAA9AnQA9AnABAAQAZAAAWgKQAEgCAhgUQA1ggBPAAQBfAAAbBWQAlgCAhgKg");
	this.shape_24.setTransform(352.4,277.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("ACkGEQgJgLgEgQQgFgSgCgDQgWAIgVAWIgiAlIg4AFIglACQhLAAghgkQgKgKgJgSQgJgRgEgDQgqAdgMAFQg3AdgvAAQhEAAgggjQgLgLgIgSIgLgXIgrAfQgWAPgpAHIhrAAQgSgEgGgPIgPgiIgnAeQgnAXg6AAQhiAAgagoQgKgOgCgUIgCgeQgOAEgcANQgPAGgvABQiXAAg4g9QgfghgBg6QABgnAWgUQAXgVABgkIAAg3QABgjAGgZQAFgWAYgDQAZgDAGgWIAFgVQAEgPANgUQANgRAqghQA4guAgABQAlAAAMAIQAMAJAJAAQAPAAAgg0QAyg1BfAAQAHAAAsAUQAzAWAeATQAKgFAJgWQAJgXAMgMQAugnCmAZQA3gIA5AgIAmAXQARAKAIAAQACAAA/gfQA9geAqAAQAwAAAoAgQAgAaAKAZQAQgEAjgfQAugdBQAAQBdABAWAZQAFAFAEAMQAEAIAHAAQAGAAA+gnQA8gnALAAQARAAA8AnIA+AnQAaAAAVgKIAmgWQA1ggBOAAQBgAAAbBWQAkgDAigJIBKAAQAXASAiBCQAeA5AcAGQAfAIAPA5QALAoAAAvQAAAZgCAIQgIAWgcAPIALA3QAGAkAAAWIABAZQgCANgKAJQgXAUhnAAQglAhgrAfQhWBBgeAAQgXAAgrgbQgrgbgFAAQgGAAhBAwQhBAugkABQibAAgRgQQgGgFAAgRQgBgUgKgOQgXAgglAaQhCAwhRAAQhdAAgdghg");
	this.shape_25.setTransform(352.4,277.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},28).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).wait(50));

	// Layer 4
	this.instance_9 = new lib.daydreamingguystill();
	this.instance_9.parent = this;
	this.instance_9.setTransform(220.6,377.4,0.317,0.317);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(90));

	// Layer 3
	this.instance_10 = new lib.WhichOneBubble2still();
	this.instance_10.parent = this;
	this.instance_10.setTransform(241.6,349.2,0.306,0.306);
	this.instance_10.alpha = 0.121;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({scaleX:0.64,scaleY:0.64,x:298.5,y:326.3,alpha:1},6).wait(17).to({scaleX:0.5,scaleY:0.5,x:270.9,y:327.1},5).to({_off:true},1).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(178.5,327.9,98.9,71.1);


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
		
		 window.open ("verb_scene2.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("verb_intro.html","_self");
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


(lib.definition = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.instance = new lib.adjectiveswish1();
	this.instance.parent = this;
	this.instance.setTransform(-523.7,-436.3,1.487,1.487);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100));

	// Layer 7
	this.instance_1 = new lib.AnModsNoun("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-4.4,-29.1,1,1,0,0,0,221.5,118.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(31).to({_off:false},0).to({alpha:1},9).wait(60));

	// beach guy
	this.instance_2 = new lib.daydreamingguystill();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-204.3,132.6,0.395,0.395);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-258.4,51.2,147,108.5);


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
(lib.adjective_Scene2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene2:0,scene2_repeat:253});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_6 = function() {
		playSound("EvananAdjmodifiesanoun");
	}
	this.frame_264 = function() {
		this.gotoAndPlay("scene2_repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(258).call(this.frame_264).wait(1));

	// Main
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIAIQgDgDAAgFQAAgEADgEQAEgDAEAAQAFAAADADQAEAEAAAEQAAAFgEADQgDAEgFAAQgEAAgEgEg");
	this.shape.setTransform(316.9,25.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAYAwIgDgWIgBgVIAAgJIAAgJQAAgVgHAAQgLAAgJANQgJAMgFARIgBAKIgBAJIABAJIAAAJQABAEgDADQgDACgEAAQgFAAgCgCQgCgDgBgEIAAgJIgBgJIABgbIACgcIgBgJIAAgJQABgFACgCQADgDAEAAQAJAAABANIAAALQAQgWARAAQAPAAAHAOQAEAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgDADQgCADgFAAQgIAAgBgJg");
	this.shape_1.setTransform(309.4,21.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAWAuQgMAHgPAAQgNAAgIgGQgKgGgBgMQgEgaAAgTQAAgOADgQQABgJAIAAQAEAAADACQADADAAAEIgBAPIgCAPIABAbQABAMACAGIAHADIAGABQAMAAAPgEIgBgUIAAgSQAAgVACgQQABgJAJABQAEAAADACQACADAAAEIgBAlIAAAUIAAAVIAAAHIAAAGQAAAEgCADQgDADgEAAQgIAAgCgKg");
	this.shape_2.setTransform(298.7,21.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgcApQgNgNgBgXQgBgVAMgRQAOgUAXAAQAUAAAKASQAIAPgBAUQAAAVgLAPQgMASgUAAQgQAAgMgNgAgRgTQgGALAAANQAAAOAIAIQAGAHAJAAQAJAAAHgIQAJgIAAgOQACglgWAAQgOAAgIAOg");
	this.shape_3.setTransform(288.1,21.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAYAwIgCgWIgCgVIABgJIAAgJQAAgVgIAAQgLAAgJANQgJAMgFARIgBAKIAAAJIAAAJIABAJQgBAEgCADQgDACgEAAQgEAAgDgCQgDgDABgEIgBgJIgBgJIACgbIABgcIgBgJIAAgJQABgFACgCQADgDAEAAQAJAAABANIAAALQAQgWARAAQAQAAAFAOQAFAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgDADQgCADgFAAQgIAAgBgJg");
	this.shape_4.setTransform(278.1,21.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAfAyIgHgHIgQAHQgHADgEAAQgWAAgLgNQgKgMAAgZQAAgXAQgQQAQgRAWAAQAJAAAKAEQANAGAAAHQAAADgBACIgCAMIAAAVQgBAMACAHIAGARIADAGIAAABQAAAEgDADQgCACgEAAQgCAAgFgEgAgPgYQgMANAAAPQAAAQAGAIQAFAIAMAAQAIAAAHgDIAKgIQgDgZAAgNIAAgJIACgKIgHgDIgDgBQgPAAgKAMg");
	this.shape_5.setTransform(261.6,21.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgbA2QgPgFABgKQAAgEACgDQAEgDAEAAQACAAAGAFQACACAIACIALABQAHAAAHgCQAIgDABgGQAAgNgTgFIgJgCQgNgDgFgEQgIgEAAgLQgBgVAUgJIASgGQANgDAFgDQAEgCAFAAQAEAAADADQACADAAAEIABAIIABAJQABAEgDADQgDADgEAAQgGAAgCgEQgBgDgBgIIgWAHQgQAGABAKIAFABQAWAEAKAHQAQAKABATQAAAQgOAIQgMAHgQAAQgNAAgMgFg");
	this.shape_6.setTransform(245.3,20.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AghAqQgPgMAAgWQAAgYANgSQANgSAWAAQAQAAAKAFQAMAHAAAOQAAAKgLAIIgUAKIglARQAGAIAIAEQAIAFAKAAQAHAAAJgDQALgDAEgFQADgGAEAAQADAAADADQADADAAADQAAALgSAIQgPAGgOAAQgVAAgOgLgAgUgZQgHAJgEARIAegNQAQgJAIgGQgJgIgOAAQgMAAgIAKg");
	this.shape_7.setTransform(235.4,21.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgIBHQgDgDgBgFIAAgRIAAgRIABgXIABgWQAAgEADgDQACgDAFAAQACAAADADQADADAAAEIgBAWIgBAXIABARIAAARQAAAFgDADQgDADgDAAQgEAAgCgDgAgGg1QgDgDAAgFQAAgFADgDQAEgDADgBQAFABAEADQADADAAAFQAAAFgDADQgEADgFABQgDgBgEgDg");
	this.shape_8.setTransform(227.1,18.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgPBTQgDgCAAgEIAAgCQACgNAAgPIAAgaIAAgcIgQABQgJAAAAgJQAAgKARAAIAJgBIACgPQACgVAIgKQAKgNAVAAQAOAAAAAKQAAAJgNAAQgXAAgDAhIAAAGIAVgBQAQAAAAAJQAAAIgIABIgIAAIgWACIgBAVIAAASIABASQAAATgCAKQgBAIgHAAQgEAAgDgDg");
	this.shape_9.setTransform(218.9,19.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgIBHQgDgDgBgFIAAgRIAAgRIABgXIABgWQAAgEADgDQACgDAFAAQACAAADADQADADAAAEIgBAWIgBAXIABARIAAARQAAAFgDADQgDADgDAAQgEAAgCgDgAgGg1QgDgDAAgFQAAgFADgDQAEgDADgBQAFABAEADQADADAAAFQAAAFgDADQgEADgFABQgDgBgEgDg");
	this.shape_10.setTransform(211.4,18.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgiBCQgOgOAAgVQAAgaAOgPQAOgPAVAAQALgBAGAEIAKAHIADg3QABgJAIAAQAJAAAAAKQAAANgEAuIgBAcQAAAhADAQIAAACQAAAEgDADQgDACgDAAQgGAAgDgJQgHAGgIACQgHADgIAAQgUAAgNgOgAgWACQgIAJAAAUQAAAMAJAJQAIAJAMAAQAIAAAFgDQAEgBAHgHIADgCIAAgRIAAgMIAAgMQgEgHgGgDQgGgEgJAAQgPAAgIAJg");
	this.shape_11.setTransform(202.5,18.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgcApQgNgNgBgXQgBgVAMgRQAOgUAXAAQAUAAAKASQAIAPgBAUQAAAVgLAPQgMASgUAAQgQAAgMgNgAgRgTQgGALAAANQAAAOAIAIQAGAHAJAAQAJAAAHgIQAJgIAAgOQACglgWAAQgOAAgIAOg");
	this.shape_12.setTransform(191.3,21.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgFA6QgDgDAAgFIgCgiQgCgXAAgLQAAgLgDgFQgHADgHAHIgMANIgFAGIgBAQIgBARIABAIIABAIQAAAEgDACQgDADgEAAQgLAAAAgZIABgRIABgRIgBgPIgBgQQAAgWAKAAQAEAAADADQADADAAAEIAAAGIAAAGIAAAKQAFgKAKgIQAKgJAGAAQAQAAAFAPQAFgHAHgDQAIgEAJAAQARAAAGASIAEAbIAHA3QAAAEgDADQgDACgEAAQgIAAgCgIIgDgeIgDgeIgEgNQgDgJgEAAQgEAAgJAGQgKAGgDAEIABASIADAZQACAPAAAKQAAAFgDADQgDACgEAAQgDAAgDgCg");
	this.shape_13.setTransform(178.6,21.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CE0063").s().p("AgqBLQgJgIgBggIABgOIAAgQIgBgEQABgDABgDIACgpIgBgLIgBgKQABgMAJAAQAFAAACADIAXgEIASgCQAYAAAOAFQAHADAAAHQAAAEgDACQgDAEgEAAIgDgBQgQgEgQAAIgQABIgVAFIABAKIgCAmIAqgFIAYgCQADAAAEADQADADAAAEQAAAIgJABIgYADIgsADIgBANIAAAMQAAAVAEAFQABACANAAIASAAIASAAIAGgBIAGAAQAKAAAAAKQAAAHgIADQgKABgdAAQgfAAgIgIg");
	this.shape_14.setTransform(158.7,18.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CE0063").s().p("AgRBHQgMgdgOg4IgIgaQgGgUAAgHQAAgEAEgDQACgCAEgBQAIAAACAJIAEARIAJAgQAJAkAJAaIABgCIAZhFIAIgYQAGgPAGgHQADgEAFAAQAEAAADADQADADAAAEQAAADgCADQgGAJgEAKIgHAVIgbBHQgEAMgHAMQgCAGgFAAQgIAAgDgIg");
	this.shape_15.setTransform(146.3,19);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CE0063").s().p("AgqBIQgDgDAAgEQAAgEADgDQADgDAEAAIAUgCIABgSIAAgRIgBgQQAAgWADgiIgNABIgMAAQgFAAgDgDQgCgDAAgEQAAgJAJgBIAegBQASAAAdAFQAJABAAAJQAAAFgEACQgCADgEAAIgQgCIgPgCQgCAdAAAZIAAAQIAAARIAAARIAeAAQAEAAADADQADACAAAFQAAAEgDADQgDADgEAAIgRAAIgQAAIgSACIgTACQgEAAgDgDg");
	this.shape_16.setTransform(133.7,19);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CE0063").s().p("AgGBIQgDgDAAgFIAAgEIABgFIgBgOIgBgOIgCgnIgDgnIgIAAQgWAAgMgCQgIgDAAgHQAAgFADgCQADgDAEAAIAQACIAQABIARAAIARgBIAWABIAXABQAEAAADADQADADAAAEQAAAFgDACQgDADgEAAIgXgBIgWgBIgHAAIADAsQACAbAAAQIABAKIAAAKQAAAHgCAFQgCAGgGAAQgDAAgDgCg");
	this.shape_17.setTransform(122.3,18.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CE0063").s().p("AgoA8QgNgPAAgVQAAggAbgiQAXgeAXAAIAJABIAGACQAEgGAFAAQAHABACAIQABAIAAALQAAAEgCAEQgDADgEAAQgHABgDgIQgDgGgCgBQgCgBgIAAQgOAAgQAVQgYAdAAAZQAAANAIAJQAIAKAMAAQAJAAAKgGQAGgDAMgIQAFgFADAAQAEAAADAEQADADAAAEQAAAEgEADQgZAYgaAAQgUAAgOgQg");
	this.shape_18.setTransform(108.8,18.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CE0063").s().p("AgqBLQgJgIgBggIABgOIAAgQIgBgEQAAgDACgDIACgpIgBgLIgBgKQABgMAJAAQAFAAACADIAXgEIASgCQAYAAAOAFQAHADAAAHQAAAEgDACQgDAEgEAAIgDgBQgQgEgQAAIgQABIgVAFIABAKIgCAmIAqgFIAYgCQADAAAEADQADADAAAEQAAAIgJABIgYADIgsADIgBANIAAAMQAAAVAEAFQABACANAAIASAAIASAAIAGgBIAGAAQAKAAAAAKQAAAHgIADQgKABgdAAQgeAAgJgIg");
	this.shape_19.setTransform(96.6,18.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CE0063").s().p("AgnBEQgTgOAAgSQAAgMAKAAQAKAAAAAMQAAAIAMAIQALAIAKAAQAHAAADgxQABgXAAgjIAAgKIgGAAIgLAAIgLgBQgFAAgDgCQgCgDAAgFQAAgKANAAIAKAAIAJABIASgBIATgBQAWAAAAAMQAAAEgDADQgDADgEAAIgGgBIgGgBIgMABIABALQAABIgKAhQgGAWgPAAQgRAAgRgMg");
	this.shape_20.setTransform(83.5,19.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CE0063").s().p("AgeBPQgLgDgGgEIgBAAQgEAAgDgDQgCgDAAgEIABgfIAAgfIAAghIAAgiQAAgEAEgEQAEgFAEAAQACAAAOAHIARAIQAbAJATAUQAXAXAAAbQAAARgIAPQgIAPgNAKQgPAKgcAAQgHAAgJgCgAgkgaIAAAbIgBA1IACACQAIAFANAAQAWAAAKgHQAJgGAGgLQAFgLAAgMQAAgagegUQgJgGgkgQg");
	this.shape_21.setTransform(69.9,19);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CE0063").s().p("AAiAzIgHgfIgaAFIgZAFIgQAmQgDAFgGAAQgEAAgCgDQgEgDAAgEQAAgFAPgfQgCgCABgDQAAgIAJgDQALgTARgcQAWglAGAAQAHAAADALIAHAhIAOBDIAFAPIAEALQgBAEgDADQgCADgFAAQgIAAgHgXgAgMAHIAjgHIgIglg");
	this.shape_22.setTransform(54.9,19);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAYAwIgCgWIgCgVIABgJIAAgJQAAgVgIAAQgLAAgJANQgJAMgFARIgBAKIAAAJIAAAJIABAJQgBAEgCADQgDACgEAAQgEAAgDgCQgCgDAAgEIgBgJIgBgJIACgbIABgcIAAgJIAAgJQgBgFADgCQADgDAEAAQAJAAABANIAAALQARgWAQAAQAQAAAFAOQAFAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgCADQgDADgFAAQgIAAgBgJg");
	this.shape_23.setTransform(36.7,21.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAiAzIgHgfIgaAFIgZAFIgQAmQgDAFgGAAQgEAAgCgDQgEgDAAgEQAAgFAPgfQgCgCABgDQAAgIAJgDQALgTARgcQAWglAGAAQAHAAADALIAGAhIAPBDIAFAPIAEALQgBAEgDADQgCADgFAAQgIAAgHgXgAgMAHIAjgHIgIglg");
	this.shape_24.setTransform(23.8,19);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#9900CC").ss(3,1,1).p("EAojAYTMhRGAAAMAAAgwlMBRGAAAg");
	this.shape_25.setTransform(275,188.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.UI}]}).wait(265));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgoiAb+MAAAg38MBRFAAAMAAAA38g");
	mask.setTransform(275,212.3);

	// anim
	this.instance = new lib.definition();
	this.instance.parent = this;
	this.instance.setTransform(274,185.1);

	this.instance_1 = new lib.bk("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(261.5,211.9,1.007,1,0,0,0,282.3,176.6);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(265));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,201.6,534,398.7);
// library properties:
lib.properties = {
	id: '4620BB19209C084E89171BC3929DEC96',
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
		{src:"sounds/_6a.mp3", id:"_6a"},
		{src:"sounds/EvananAdjmodifiesanoun.mp3", id:"EvananAdjmodifiesanoun"},
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
an.compositions['4620BB19209C084E89171BC3929DEC96'] = {
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