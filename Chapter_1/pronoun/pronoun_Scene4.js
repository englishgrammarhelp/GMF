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


(lib.VertLine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("AAKEiIgTAAIAApDIATAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgJEiIAApDIATAAIAAJDg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-30,4,60);


(lib.pronounwinIcanwin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AA2BrIgHgwQgCgaAAgWIABgUIAAgVQAAgvgSAAQgYAAgVAdQgVAbgLAnIgCAWIgBAVIABAUIABAUQAAAJgGAHQgGAGgJAAQgKAAgGgGQgGgHAAgJIgBgUIgCgUQAAgXADgnQAEgoAAgWIgBgVIgBgVQAAgKAGgGQAHgGAJAAQAUAAACAdIABAaQAkgyAmAAQAkAAANAfQAKAVABAoIAAAXIAAATQAAASAEAdQAFAdAAASQAAAKgGAGQgHAGgJAAQgTAAgCgVg");
	this.shape.setTransform(22.4,7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgVCfQgGgGAAgKIgBgnIAAgoQAAgVACgeQACgeAAgVQAAgJAGgHQAGgGAKAAQAIAAAGAGQAGAHAAAJQAAAVgCAeQgCAeAAAVIABAoIAAAnQAAAKgGAGQgGAGgIAAQgKAAgGgGgAgNh4QgIgIAAgKQAAgLAIgHQAHgIAKAAQAKAAAIAIQAHAHAAALQAAAKgHAIQgIAHgKAAQgKAAgHgHg");
	this.shape_1.setTransform(4.2,1.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAOBAQgFgTgEghIgGgwIgSApIgiBbQgDAIgFAFQgHAMgOABQgRAAgQhCQgIgigHg5IgGghQgDgUAAgNQAAgJAHgGQAGgGAKAAQAQAAAEASQADANACATIADAgIANBiQAZhDAahYQAHgZARAAQARAAAGAcQAGAZAJA2QAJA2AGAfIAQg8IAdh2QADgOAQAAQAJAAAHAHQAHAGAAAIIgDALQgRBHgcBaQgGAUgOAVQgIALgNAAQgYAAgNg7g");
	this.shape_2.setTransform(-17.8,7.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pronounwinIcanwin, new cjs.Rectangle(-35.5,-33.3,71.1,66.7), null);


(lib.pronounheader = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgwBUQgXgKAAgSQgBgFAEgEQAEgDAFAAQAGAAAEAHQAHAJAFAEQAKAGAUABQASAAAQgJQAVgLAAgSQAAgQgSgIQgPgIgUAAQgUgBgNgHQgSgKAAgSQAAgWAZgSQAYgRAYAAQAMAAAPAEQATAFAAAIQAAALgLAAIgRgDQgMgCgHAAQgSAAgNAJQgOAKAAANQAAALASADIAZADQAcADAQAPQAPANAAAUQAAAegbARQgYAPgdAAQgXAAgSgJg");
	this.shape.setTransform(355.8,1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhRBgQgEgEAAgFIABgQIAAgQIABgWIAAgXIAAgXIAAgZIgCgXIgBgWQAAgGAFgEQAEgGAHAAQAGAAAKAPQAeAuAYAdQAdAkAiAgIAAgQIAAgPQAAg1gFgfIgDgNQgCgJAAgEQAAgPAMAAQAWAAAABQIgBAoIAAAoIgCATQgCANgLAAQgGAAgKgJQgygvg/hXIgBAbIAAAbIAAAeIABAfQAAAhgMgBQgIAAgDgDg");
	this.shape_1.setTransform(337.3,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag1BIQgQgRgDgjQgCgPAAguIAAgbQABgLACgFQADgJAIAAQALAAAAAVIAABIQAABJAzAAQAwAAAAh8IAAgMIAAgKQAAgHADgGQADgHAHAAQAMAAAAARIAAAPIAAAPQAACMhJAAQglAAgSgWg");
	this.shape_2.setTransform(318.1,1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag9BMQgagWAAgjQAAgpAZgjQAdgmApAAQAoAAATASQAUATABAoQAAApgYAiQgaAngoAAQgjAAgYgUgAgrgoQgSAbgBAgQAAAXASAPQARAOAZAAQAcAAATgeQARgaABghQgBgdgMgMQgNgLgdAAQgdAAgWAeg");
	this.shape_3.setTransform(298.9,1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhSBgQgDgEAAgFIABgQIAAgQIABgWIAAgXIAAgXIAAgZIgCgXIgBgWQAAgGAFgEQAFgGAGAAQAGAAAKAPQAeAuAYAdQAdAkAiAgIAAgQIgBgPQAAg1gDgfIgEgNQgDgJAAgEQAAgPAOAAQAVAAAABQIgBAoIAAAoIgCATQgCANgLAAQgHAAgJgJQgygvg/hXIAAAbIgBAbIABAeIAAAfQAAAhgMgBQgHAAgFgDg");
	this.shape_4.setTransform(279,1.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag9BMQgZgWAAgjQgBgpAZgjQAcgmApAAQApAAATASQAVATAAAoQgBApgXAiQgaAngoAAQgjAAgYgUgAgrgoQgTAbAAAgQAAAXASAPQAQAOAaAAQAcAAATgeQASgagBghQABgdgNgMQgNgLgeAAQgcAAgWAeg");
	this.shape_5.setTransform(259,1.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag+BcQgDgDAAgGIgBgcIgBgdIACggQADgXAAgLIgBgSIgBgTQAAgHAEgFQAEgGAIAAIAeADQAQACALAGQAxAaAAAmQAAASgQAOQgOALgUAGQAmAVASAWQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEQgpgogwgOIABAYIAAAYQAAAGgDADQgEAEgFAAQgFAAgEgEgAgmg2IAAAPIgBAYIgDAXIAGAAIAFABQAfAAAPgJQAHgCAFgHQAHgGAAgFQAAgRgTgPQgRgNgUgCIgSgCg");
	this.shape_6.setTransform(241.4,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgzBeQgDgDAAgFIAAgkQAAgSACggIADgyIAAgRQAAgMABgFQADgMAJACIALgBIASgCQAVABAUAPQAVARAAAYQAAAegXARQgUAQgcAAIgPgBIgBBAQAAAFgDADQgDADgFAAQgFAAgDgDgAgahIIgBAXIgCAwIANABQAUAAAOgKQAPgLAAgTQAAgOgPgKQgNgJgPAAIgJAAIgHABg");
	this.shape_7.setTransform(226.9,0.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag1BeQgMgLABgnIAAgRIABgUIgBgGQgBgDADgEQACgjAAgQIgBgOIgBgNQAAgPAMAAQAFABAEADQAPgEANgCQANgCAKAAQAdAAATAHQAHADAAAJQAAAFgDAEQgDADgGAAIgDAAQgVgGgTAAQgKAAgLACIgaAFIACAOQAAARgCAdIA0gFIAdgCQAFAAAEADQAEADAAAGQAAAKgMACIgdACIg3AFIAAAQIgBAPQAAAbAEAFQADADAQAAIAWAAIAWAAIAIgBIAHgBQANAAAAAMQAAALgLACQgLACglAAQgmAAgLgKg");
	this.shape_8.setTransform(205.4,1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgwBUQgXgKAAgSQgBgFAEgEQAEgDAFAAQAGAAAEAHQAHAJAFAEQAKAGAUABQASAAAQgJQAVgLAAgSQAAgQgSgIQgPgIgUAAQgUgBgNgHQgSgKAAgSQAAgWAZgSQAYgRAYAAQAMAAAPAEQATAFAAAIQAAALgLAAIgRgDQgMgCgHAAQgSAAgNAJQgOAKAAANQAAALASADIAZADQAcADAQAPQAPANAAAUQAAAegbARQgYAPgdAAQgXAAgSgJg");
	this.shape_9.setTransform(188.6,1.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AArBAIgIgnQgNACgUAEIgfAGQgHAQgPAfQgDAIgHgBQgFAAgEgDQgDgEAAgFQAAgGASgmQgCgEAAgEQAAgKAMgCQAOgaAVghQAcgvAHAAQAJAAAEANIAIAqIASBTIAHATQAEALgBADQABAFgEAEQgEADgFAAQgLAAgIgcgAgPAJQAPgEAdgFIgKgug");
	this.shape_10.setTransform(170.5,1.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgyBLQgRgTAAgaQAAgoAigrQAdgkAdAAIALAAIAIACQAFgGAGgBQAJABACAKQACAKAAAPQAAAFgDAEQgDAFgGAAQgIgBgEgIQgEgJgDgBQgCgCgKAAQgRAAgWAbQgdAlAAAfQAAAQAKAMQALALAOAAQAMABANgHQAHgDAOgMQAIgEADgBQAFABAEAEQADADABAFQAAAGgGAEQggAdgggBQgZABgRgUg");
	this.shape_11.setTransform(154.3,1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AggB6QgCgDAAgFQgBgFAIgGIALgIQAbgdAAg+QAAgXgHgZQgGgdgOgPIgLgLQgHgJAAgEQAAgEACgEQAEgDAFAAQACAAAFADQAYARAOAmQAOAiAAAgQAABcgzAdQgFACgEAAQgEAAgEgCg");
	this.shape_12.setTransform(134.8,3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ag1BeQgMgLABgnIAAgRIABgUIgBgGQgBgDADgEQACgjAAgQIgBgOIgBgNQAAgPAMAAQAFABAEADQAOgEANgCQANgCALAAQAeAAARAHQAIADAAAJQAAAFgDAEQgDADgFAAIgEAAQgVgGgTAAQgKAAgLACIgZAFIABAOQAAARgCAdIA0gFIAdgCQAGAAADADQAEADAAAGQAAAKgMACIgcACIg4AFIAAAQIgBAPQAAAbAEAFQADADAQAAIAWAAIAWAAIAIgBIAHgBQANAAAAAMQAAALgKACQgMACglAAQgmAAgLgKg");
	this.shape_13.setTransform(122.5,1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgVBZQgPglgShFIgKghQgHgaAAgIQAAgFAEgEQADgDAFAAQAKAAACAKIAFAVIAMAqQALAsALAhIABgCIAghXIAKgeQAHgSAIgKQAEgFAGAAQAEAAAEAEQAEAEAAAFQAAAEgCADQgIAMgFAMIgJAbIghBYQgGAPgHAPQgDAIgHAAQgKAAgDgKg");
	this.shape_14.setTransform(106.9,1.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ag1BaQgDgEAAgFQAAgGADgDQAEgDAFgBQAIAAASgCQABgKAAgNIgBgUIAAgVQAAgbADgqIgQABIgQAAQgFgBgEgDQgDgEAAgFQAAgMALgBIAlgBQAYABAkAFQALABAAAMQAAAFgEAEQgEADgEAAIgUgCIgUgCQgDAkAAAeIABAWIAAAVIAAAUIAmAAQAFAAAEAEQADAEAAAFQAAAFgDAEQgEADgFAAIgUAAIgVABIgXACQgQACgIABQgFgBgEgDg");
	this.shape_15.setTransform(91.2,1.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgIBaQgEgEAAgFIABgFIABgGIgBgSIgBgSQAAgRgDgfIgDgxIgLAAQgbAAgPgEQgKgCAAgKQAAgFADgEQAEgEAFAAIAUADIAUABIAWAAIAVgBIAcACIAcABQAFAAAEAEQADADAAAGQAAAFgDAEQgEADgFAAIgcgBIgcgCIgIAAIADA3QADAiAAAUIABANIAAANQAAAIgCAGQgEAIgHAAQgEAAgEgDg");
	this.shape_16.setTransform(76.9,0.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAqBAIgIgnQgMACgUAEIggAGQgFAQgPAfQgEAIgHgBQgFAAgDgDQgFgEAAgFQAAgGATgmQgCgEAAgEQAAgKAMgCQANgaAWghQAcgvAHAAQAJAAAEANIAIAqIASBTIAHATQADALABADQgBAFgDAEQgEADgFAAQgLAAgJgcgAgPAJQAPgEAdgFIgKgug");
	this.shape_17.setTransform(58.1,1.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AhSBgQgDgEAAgFIABgQIABgQIAAgWIABgXIAAgXIgBgZIgBgXIgCgWQAAgGAFgEQAEgGAHAAQAGAAAKAPQAeAuAYAdQAcAkAjAgIAAgQIgBgPQAAg1gDgfIgEgNQgCgJgBgEQAAgPANAAQAWAAAABQIAAAoIgBAoIgCATQgCANgLAAQgHAAgJgJQgygvg/hXIAAAbIgBAbIABAeIAAAfQAAAhgNgBQgGAAgFgDg");
	this.shape_18.setTransform(39.3,1.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("Ag1BaQgDgEAAgFQAAgGADgDQAEgDAFgBQAIAAASgCQABgKAAgNIgBgUIAAgVQAAgbADgqIgQABIgQAAQgFgBgEgDQgDgEAAgFQAAgMALgBIAlgBQAYABAkAFQALABAAAMQAAAFgEAEQgEADgEAAIgUgCIgUgCQgDAkAAAeIABAWIAAAVIAAAUIAmAAQAFAAAEAEQADAEAAAFQAAAFgDAEQgEADgFAAIgUAAIgVABIgXACQgQACgIABQgFgBgEgDg");
	this.shape_19.setTransform(22.4,1.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("ABLBcQgDgGgDgNIgFgVQgFgUgLhCIgYBJIgIAXQgEAOgEAJQgGAJgIAAQgGAAgFgIIgEgNIgEgNQgMgsgKgwIgFAWIgPBAQgBALgFAWQgEAKgIAAQgGAAgEgFQgDgDAAgGQAAgUAIgeIAOgwIAHgmQAFgbAHgJQAEgHAHAAQAJAAADAJQAFALAFAiQAHAoAOAuQARguANgzIAEgSQACgLADgGQAFgKAJAAQAKAAAFAVQADAHACAWQAIA2AKAnIAGAVQAFARAAAEQAAAFgEADQgEAEgFAAQgHAAgEgHg");
	this.shape_20.setTransform(4.7,1.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("Ag9BMQgZgWAAgjQgBgpAZgjQAcgmApAAQApAAATASQAVATgBAoQAAApgXAiQgaAngoAAQgjAAgYgUgAgrgoQgTAbAAAgQAAAXASAPQAQAOAaAAQAcAAATgeQASgagBghQABgdgNgMQgNgLgeAAQgcAAgWAeg");
	this.shape_21.setTransform(-16.4,1.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AhRBgQgEgEAAgFIABgQIAAgQIABgWIAAgXIAAgXIAAgZIgCgXIgBgWQAAgGAFgEQAEgGAHAAQAGAAAKAPQAeAuAYAdQAdAkAiAgIAAgQIAAgPQAAg1gFgfIgDgNQgCgJAAgEQAAgPAMAAQAWAAAABQIgBAoIAAAoIgCATQgCANgLAAQgGAAgKgJQgygvg/hXIgBAbIAAAbIAAAeIABAfQAAAhgMgBQgIAAgDgDg");
	this.shape_22.setTransform(-36.2,1.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAQB6QgzgdABhcQgBggANgiQAPgmAYgRQAEgDADAAQAFAAADADQAEAEAAAEQAAAEgIAJIgLALQgOAPgHAdQgGAZAAAXQAAA+AbAdIAMAIQAGAGABAFQAAAFgEADQgDACgEAAQgEAAgFgCg");
	this.shape_23.setTransform(-50.6,3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AhSBgQgDgEAAgFIABgQIABgQIAAgWIABgXIAAgXIgBgZIgBgXIgCgWQAAgGAFgEQAEgGAHAAQAGAAAKAPQAeAuAYAdQAcAkAjAgIAAgQIgBgPQAAg1gDgfIgEgNQgCgJgBgEQAAgPANAAQAWAAAABQIAAAoIgBAoIgCATQgCANgLAAQgHAAgJgJQgygvg/hXIAAAbIgBAbIABAeIAAAfQAAAhgNgBQgGAAgFgDg");
	this.shape_24.setTransform(-72.7,1.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("Ag1BIQgQgRgDgjQgCgPAAguIAAgbQABgLACgFQADgJAIAAQALAAAAAVIAABIQAABJAzAAQAwAAAAh8IAAgMIAAgKQAAgHADgGQADgHAHAAQAMAAAAARIAAAPIAAAPQAACMhJAAQglAAgSgWg");
	this.shape_25.setTransform(-91.9,1.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("Ag9BMQgagWABgjQAAgpAZgjQAcgmAoAAQAoAAAUASQAVATgBAoQAAApgWAiQgbAngpAAQgiAAgYgUgAgqgoQgUAbABAgQAAAXARAPQAQAOAZAAQAdAAAUgeQAQgaAAghQAAgdgNgMQgMgLgeAAQgdAAgUAeg");
	this.shape_26.setTransform(-111.1,1.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AhRBgQgEgEAAgFIABgQIABgQIAAgWIABgXIAAgXIgBgZIgCgXIgBgWQAAgGAFgEQAFgGAGAAQAGAAAKAPQAeAuAYAdQAdAkAiAgIAAgQIAAgPQAAg1gFgfIgDgNQgDgJABgEQgBgPANAAQAWAAAABQIAAAoIgBAoIgCATQgCANgLAAQgHAAgJgJQgxgvhAhXIgBAbIAAAbIAAAeIABAfQAAAhgNgBQgHAAgDgDg");
	this.shape_27.setTransform(-131,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pronounheader, new cjs.Rectangle(-143.2,-19.4,509.7,38.8), null);


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


(lib.Ipointingredstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AlpAqIAAgBQAAAAAAABQAGADAFADQAWAMAaACQANABALgBQATgBATgDQAUgDAUgDQASgDAQgFQAPgEANgBQAbgCAagGQANgDANgCQASgDARgBQASgCARgEQAUgEAUgFQAQgEAQABQAQAAANgDQAMgBAKACQACABACAEQgCgFgCgHQgBgCAAgDQAAgBABgCQAEgNAGgNQAHgRAHgRQAHgRAGgSQAFgQAJgPQAKgRAUAAQAKAAAMgBQASgBARADQASAEASADQASAEARAEQATAEARAHQAQAHAQAGQAVAIAAAPQAAAAAAABQgEADgGACQgSAHgTgDQgMgBgNABQgDAAgCAAQgDAAgEgBQgTgDgTgFQgRgDgRgHADfgCQgSgKAFgMQACgFAFgCQgKgHgHgOQgJgRAKgLQACgCgCgEQgGgSANgJAFSgVQgBAHgBAHQAAAJgGALQgJASgRAHQgRAHgTADQgTACgSADQgSADgTAEQgRAEgRADQgTAEgSAFQgSAFgSACQgTACgTAHQgSAHgRgBQgWgCgGAPQgBgBgCAAQgDgBgEABQgSACgSAEQgSADgSABQgTABgSABQgTABgSAEQgTAEgTAEQgSAEgTADQgRADgSADQgSADgTAEQgPAEgTgBQgUgBgSgGQgTgFgKgWQgKgWgDgNAFjhTQgDAAgEABQgBAPgIARQAAAAAAABQAAAAgBABQgBACgBACQADALgBAMQgOAAgTgIQgRgIgTgEAFTgyQgCgBgDACQACAAACABAFOgxQgLgDgNgEQgTgFgNgH");
	this.shape.setTransform(39.3,-8.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("AlfCeQgTgBgSgGQgUgFgKgWQgKgWgDgNQgDgOASgBQASgCAQgOQAQgPAGgBIAAAAIAKAGQAWAMAaACIAZAAIAlgEIApgGQARgDARgFQAPgEANgBQAagCAagGIAagFQASgDARgBQATgCAQgEIApgJQAQgEAPABQAQAAAOgDQAMgBAJACQACABACAEIgEgMIgBgFIABgDIAKgaIAPgiQAGgRAGgSQAGgQAJgPQAKgRAUAAIAVgBQASgBARADIAkAHIAkAIQASAEARAHIAhANQAVAIAAAPIgBABQgEADgFACQgSAHgTgDQgNgBgNABIgFAAIgGgBIgngIQgRgDgQgHQAQAHARADIAnAIIAGABIgGABQgCAPgHARQgCgBgDACIAEABIgCAEQACALgBAMQgOAAgSgIQgSgIgTgEQATAEASAIQASAIAOAAIgCAOQAAAJgFALQgJASgRAHQgSAHgTADIglAFIgkAHIgjAHIgkAJQgTAFgSACQgSACgTAHQgSAHgSgBQgWgCgGAPIgCgBIgIAAIgkAGQgRADgTABIglACQgTABgSAEIglAIIgmAHIgiAGIgmAHQgLADgPAAIgIAAgADggCQgPgIAAgJIACgFQABgFAFgCQgKgHgHgOQgEgIAAgGQAAgIAGgGIABgCIgBgEQgDgGAAgFQAAgKAKgGQgKAGAAAKQAAAFADAGIABAEIgBACQgGAGAAAIQAAAGAEAIQAHAOAKAHQgFACgBAFIgCAFQAAAJAPAIgAE3g4IAYAHIgYgHQgUgFgNgHQANAHAUAFg");
	this.shape_1.setTransform(39.3,-8.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Ipointingredstill, new cjs.Rectangle(-4.9,-25.7,88.5,33.6), null);


(lib.Imirrorpointstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AgwBEQAKgLACANQABAKAHAFQAHAFAJACQAIABAIACQAHACAIACQAIACAIADQAIACAIABQAJACAIADQAJADAKACQAIABAJABQAKABAKABQAKABAHABQAHAABggEIgfhXQgFgCgeAAQgggBgJgDQgJgDgJgCQgJgCgJgDQgIgDgIgDQgJgEgKgBQgJgCgGgDQAAAAAAAAQgEgIgEgHQgEgIgDgIQgDgIgDgIQgDgJgDgIQgEgJgHgHQgGgGgHgFQgHgFgJgEQgIgEgJgEQgIgEgIgDQgIgCgJgCQgJgDgKAAQgJABgIgBQgKAAgJACQgIABgIABQgKACgJABQgKABgJABQgJABgHAGQgGAGgFAGQgHAHgGAHQgGAHgHAHQgGAGgGAHQgCADgBACQADADAFABQAFAAAFAAQAHABAFgEQADgCADgBQAGgDAFgEQAFgDAEgEQADgDAEgDQADgDAEgBQAGgDAHgBQAHgBAIgBQAGAAAHgCQAFgBAFgBQADgBAEAAQgBACgCACQgGAIgHAGQgHAHgIAEQgJAGgBAIQgBAEACAEQAEAIAEAIQAEAHABAIQAIgGAGgHQAGgHAHgHQAHgHAHgGQAEgFAEgFAh3A+QACAGAFAEQAFAFAFAEQAGAGAJACQAJADAJgDQAIgDAIgGQAFgFAGgDQgBAAAAgBQgDgBgCgCQgCgDgBgGQAAgKgHgHAhzhVQAEgFAEgHAiOgDQAAACAAABQgBAEAAAGQAIAJAHAHQAHAGACAJQABAHgBAHQgBAEABADQABgBABgDQADgGACgIQACgHADgIQAEgJADgKQAEgLAAgK");
	this.shape.setTransform(4.9,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("ACNB7IgRgCIgUgCIgRgCQgKgCgJgDIgRgFIgQgDIgQgFIgPgEIgQgDQgJgCgHgFQgHgFgBgKQgCgNgKALQgCgDgBgGQAAgKgHgHQAHAHAAAKQABAGACADIAFADIABABQgGADgFAFQgIAGgIADQgJADgJgDQgJgCgGgGIgKgJQgFgEgCgGIACgEIAFgOIAFgPIAHgTQAEgLAAgKQAAAKgEALIgHATIgFAPIgFAOIgCAEIAAgHQABgHgBgHQgCgJgHgGQgHgHgIgJIABgKIAAgDIAOgNIANgOIAOgNIAIgKIgIAKIgOANIgNAOIgOANQgBgIgEgHIgIgQQgCgEABgEQABgIAJgGQAIgEAHgHIANgOIADgEIgHABIgKACQgHACgGAAIgPACQgHABgGADQgEABgDADIgHAGIgJAHIgLAHIgGADQgFAEgHgBIgKAAQgFgBgDgDIADgFIAMgNIANgOIANgOIALgMQAHgGAJgBIATgCIATgDIAQgCQAJgCAKAAIARAAQAKAAAJADIARAEIAQAHIARAIIAQAJQAHAFAGAGQAHAHAEAJIAGARIAGAQIAHAQIAIAPIAAAAQAGADAJACQAKABAJAEIAQAGIASAFIASAFQAJADAgABQAeAAAEACIAgBXIhkAEIgDAAgAhzhVIAIgMIgIAMg");
	this.shape_1.setTransform(4.9,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Imirrorpointstill, new cjs.Rectangle(-20.5,-13.3,50.9,26.6), null);


(lib.isentstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhgCiQgGgHAAgJQAAgKAGgGQAGgHAJAAQAPAAAhgEQACgSAAgXIgCglIgBglQAAgyAGhMIgdABIgcABQgKAAgGgHQgGgGAAgKQAAgUAUgCQASgCAxAAQArAABCAJQATADAAAVQAAAKgHAGQgHAFgIAAQgPAAgVgCIgjgFQgFBAAAA5IABAmIAAAmQAAAVgBARIBFgBQAJAAAHAGQAGAHAAAJQAAAKgGAHQgHAGgJAAIglABIglAAQgNAAgdAEQgdAEgPAAQgJAAgGgGg");
	this.shape.setTransform(0.2,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.isentstill, new cjs.Rectangle(-14.4,-33.3,28.8,66.7), null);


(lib.ibubblestill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A000FF").s().p("AguBPQgDgDgBgFQABgEADgEQADgDAEAAQAHAAAQgCIABgUIgBgSIAAgSQAAgYADglIgOAAIgOABQgEAAgEgDQgDgEAAgEQAAgKAKgBIAhgBQAUAAAhAEQAJACAAAKQAAAFgEADQgDACgEAAIgRgBIgSgCQgCAfAAAbIAAATIABATIgBASIAhAAQAFAAADADQADADABAFQgBAEgDADQgDAEgFAAIgSAAIgSAAIgUACIgVACQgEAAgDgDg");
	this.shape.setTransform(-0.4,-2.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1,1).p("ABBDYQggACghAAQjYAAiZhAQiahAAAhaQAAhZCahAQBsgtCMgNQAlgEAmgBQAXgBAXAAQDZAACZBAQCaBAAABZQAABaiaBAQg4AXhAAP");
	this.shape_1.setTransform(0,-4.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgUA1QgfgjglgbQgEgDAAgFIAAgJIACgFQACgHAGgFQAZgFAWANQAGAEAHAGIAPAOIAMAMQAGgZASgTQAHgIAJgGIAQgLQAYgEAGARIACAFIABAGQABARgPALQgZAQgGAfIgFAOQgFAMgJAKQgJADgIAAQgSAAgPgRg");
	this.shape_2.setTransform(15.7,19.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ACVDaIgPgOQgGgGgHgEQgVgNgZAFQgGAFgDAHIgBAFQggABghAAQjYAAiZhAQiZg/gBhaQABhaCZhAQBsgtCMgNQAlgDAmgCIAuAAQDZAACZA/QCZBAABBbQgBBZiZA/Qg4AYhAAPIgBgFQgHgRgYAEIgQALQgJAGgHAIQgRASgGAbIgOgNg");
	this.shape_3.setTransform(0,-3.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ibubblestill, new cjs.Rectangle(-53.8,-28,107.7,54.6), null);


(lib.HorizontalLine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("AXXAKMgutAAAIAAgTMAutAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("A3WAKIAAgTMAutAAAIAAATg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.5,-2,301,4);


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


(lib.canwinstillcan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AA2BrIgHgwQgCgaAAgWIABgUIAAgVQAAgvgSAAQgYAAgVAdQgVAbgLAnIgCAWIgBAVIABAUIABAUQAAAJgGAHQgGAGgJAAQgKAAgGgGQgGgHAAgJIgBgUIgCgUQAAgXADgnQAEgoAAgWIgBgVIgBgVQAAgKAGgGQAHgGAJAAQAUAAACAdIABAaQAkgyAmAAQAkAAANAfQAKAVABAoIAAAXIAAATQAAASAEAdQAFAdAAASQAAAKgGAGQgHAGgJAAQgTAAgCgVg");
	this.shape.setTransform(23.7,7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABGBwQgKgIgEgHQgWAKgQAGQgQAHgJgBQg0AAgXgcQgXgcAAg4QAAg0AlgmQAlgmAxAAQATAAAYAKQAeAMAAASQAAAFgEAFQgCAIgCAUIgBAvQAAAcAEAPQACALALAcIAGAMIABAEQAAAIgGAHQgGAFgJAAQgEAAgLgKgAgkg2QgZAcAAAjQAAAkAMASQANASAaAAQAUAAAPgIQAHgEAPgNQgHg4AAgeIABgUIAEgYIgOgGIgKgCQghAAgYAcg");
	this.shape_1.setTransform(-0.1,7.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag/BgQgfgcAAgvQAAgsAdgvQAig1AoAAQAVAAAbAKQAiANgBATQABAIgGAHQgFAGgJAAQgGAAgFgDIgJgIQgNgLgdAAQgWAAgWAoQgTAlgBAaQABAdATARQATAPAcAAQANAAAPgHIAagNQAGgEADAAQAIAAAGAHQAGAGAAAIQAAAQgiAPQgeAOgTAAQgsAAgfgcg");
	this.shape_2.setTransform(-23,7.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.canwinstillcan, new cjs.Rectangle(-36.9,-33.3,73.8,66.7), null);


(lib.canwinstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgSATQgIgIAAgLQAAgKAIgIQAHgIALAAQALAAAIAIQAIAIAAAKQAAALgIAIQgIAIgLAAQgLAAgHgIg");
	this.shape.setTransform(33.7,17.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AA2BrIgGgwQgDgaAAgWIABgUIAAgVQAAgvgRAAQgZAAgVAdQgVAbgLAnIgCAWIgBAVIABAUIABAUQAAAJgGAHQgGAGgJAAQgKAAgGgGQgGgHAAgJIgBgUIgCgUQAAgXADgnQADgoABgWIgBgVIgBgVQAAgKAGgGQAHgGAJAAQAUAAACAdIAAAaQAmgyAmAAQAiAAAOAfQAKAVABAoIAAAXIgBATQABASAFAdQAEAdAAASQAAAKgGAGQgGAGgKAAQgTAAgCgVg");
	this.shape_1.setTransform(16.8,7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgVCfQgGgGAAgKIgBgnIAAgoQAAgVACgeQACgeAAgVQAAgJAGgHQAGgGAKAAQAIAAAGAGQAGAHAAAJQAAAVgCAeQgCAeAAAVIABAoIAAAnQAAAKgGAGQgGAGgIAAQgKAAgGgGgAgNh4QgIgIAAgKQAAgLAIgHQAHgIAKAAQAKAAAIAIQAHAHAAALQAAAKgHAIQgIAHgKAAQgKAAgHgHg");
	this.shape_2.setTransform(-1.4,1.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAOBAQgFgTgEghIgGgwIgSApIgiBbQgDAIgFAFQgHAMgOABQgRAAgQhCQgIgigHg5IgGghQgDgUAAgNQAAgJAHgGQAGgGAKAAQAQAAAEASQADANACATIADAgIANBiQAZhDAahYQAHgZARAAQARAAAGAcQAGAZAJA2QAJA2AGAfIAQg8IAdh2QADgOAQAAQAJAAAHAHQAHAGAAAIIgDALQgRBHgcBaQgGAUgOAVQgIALgNAAQgYAAgNg7g");
	this.shape_3.setTransform(-23.4,7.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.canwinstill, new cjs.Rectangle(-41.1,-33.3,82.3,66.7), null);


(lib.beachbannerstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAIAjQgEgDgBgGQgMAMgLAAQgGAAgEgEQgEgEAAgGQAAgIAHgIQAHgGAXgKIAAgIIAAgKIgDgDIgGgCQgFAAgDACQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAAAIACAFQADADAAADQAAADgDADQgCADgFAAQgFAAgDgDQgEgDAAgEQAAgGAFgFQAEgFAIgDQAIgCAIAAQAKAAAGAEQAGAFACAFQABADAAAMIAAAbIABAGIABACIACAAQACAAACgCIACABQgEAGgEADQgEADgGAAQgGAAgDgDgAgKAIQgDAEAAAFQAAADADADQACACADAAQAEAAAEgFIAAgXQgIAFgFAGg");
	this.shape.setTransform(35.1,11.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAJArQgGAHgDACQgEACgGAAQgOAAgIgMQgHgKAAgPQAAgMAEgIQAFgJAGgFQAHgFAIAAQAGAAADACQAEACAFAFIgBgWIAAgKQAAAAgBgBQAAAAAAgBQgBAAAAgBQgBAAAAAAIgGgBIAAgEIAfAAIABBTIAAAKQAAAAABABQAAABAAAAQAAABABAAQAAABAAAAQACABAFAAIAAADIgfAGgAgJgNQgDADgCAGQgCAFAAANQAAANACAHQACAHAEADQACABADAAQAGAAAGgLIAAglQgGgLgHAAQgDAAgCABg");
	this.shape_1.setTransform(26.6,9.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgYAbQgJgMAAgOQAAgPAJgMQAJgMAPABQAJgBAIAFQAJAFAEAJQAEAJAAAKQAAAPgIALQgJAMgRAAQgQAAgIgLgAgFgdQgDADgCAJIgBAYIABAPQACAFADADQACADADABQADgBACgCQADgDACgEQACgIAAgVQgBgNgBgFQgCgFgDgDQgCgBgDAAQgEAAgBADg");
	this.shape_2.setTransform(18,11.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgaAyIADAAQAFAAADgBQABgBABgDQABgCAAgIIAAhRIgIAAQgKAAgFAFQgHAGgCAMIgDAAIAAgdIBeAAIAAAdIgCAAQgDgKgDgFQgDgEgGgDQgCgBgIAAIgIAAIABBRQAAAIABACQAAABAAAAQABABAAAAQABAAAAABQABAAABAAQACACAEAAIAEAAIAAADIg2AAg");
	this.shape_3.setTransform(10.1,9.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAJArQgGAHgDACQgEACgGAAQgOAAgIgMQgHgKAAgPQAAgMAEgIQAFgJAGgFQAHgFAIAAQAGAAADACQAEACAFAFIgBgWIAAgKQAAAAgBgBQAAAAgBgBQAAAAAAgBQgBAAAAAAIgGgBIAAgEIAfAAIABBTIAAAKQAAABABAAQAAABAAAAQAAABABAAQAAABAAAAQACABAFAAIAAADIgfAGgAgJgNQgDADgCAGQgCAFAAANQAAANACAHQACAHAEADQACABADAAQAGAAAGgLIAAglQgGgLgHAAQgDAAgCABg");
	this.shape_4.setTransform(36.7,-9.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AADAjQAEgBABgDQACgBAAgJIAAgfIgBgLIgCgEIgEgBQgFAAgHAKIAAAlQAAAJACACQACACAEABIAAACIglAAIAAgCQAFgBACgDQABgBAAgJIAAgnQAAgJgBgCQgCgCgFgBIAAgCIAdAAIAAAJQAGgGAEgDQAFgCAGAAQAHAAAFADQAFAEACAFQABAFAAAMIAAAcQAAAIABACQACACAFABIAAADIglAAg");
	this.shape_5.setTransform(27.7,-8.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAIAjQgEgDgBgGQgMAMgLAAQgGAAgEgEQgEgEAAgHQAAgIAHgHQAHgGAXgKIAAgHIAAgLIgDgEIgGgBQgFAAgDACQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAAAIACAFQADADAAADQAAADgDADQgCADgFAAQgFAAgDgDQgEgDAAgEQAAgFAFgGQAEgEAIgEQAIgCAIAAQAKAAAGAFQAGAEACAFQABADAAAMIAAAbIABAGIABACIACAAQACAAACgDIACACQgEAHgEACQgEADgGAAQgGAAgDgDgAgKAIQgDAEAAAEQAAAEADADQACACADAAQAEAAAEgEIAAgYQgIAEgFAHg");
	this.shape_6.setTransform(19.5,-8.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgwA1IAAgDIAKgBQADgBABgDQABgCAAgIIAAhEQAAgJgCgCQAAgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBAAQgDgCgHAAIAAgDIAyAAQASAAAHADQAIADAFAHQADAGAAAIQAAAHgEAGQgGAGgOAEQAPACAHAFQAIAHAAAMQAAALgJAIQgMAKgXAAgAgJAjIAAAEQAAAEADACQACACAEAAQAFAAAGgCQAFgDACgGQAEgFAAgHQgBgHgDgGQgDgFgHgDQgFgCgMAAgAgJgEQALAAAFgCQAFgDADgFQACgFAAgHQAAgHgDgEQgCgEgFgCQgGgDgKAAg");
	this.shape_7.setTransform(9.8,-9.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AADAyQADAAACgDQACgCAAgIIAAghIgBgKIgCgDIgEgCQgDABgCACQgDACgEAFIAAAmQAAAIACACQABADAFAAIAAADIglAAIAAgDQAEAAACgDQACgCAAgIIgBhJQAAgIgBgDQgCgBgFgBIAAgDIAeAAIAAArQAGgHAEgCQAFgDAFAAQAHAAAFAEQAFADACAGQACAEAAAMIAAAdQAAAIABACQACACAFAAIAAAEIglAAg");
	this.shape_8.setTransform(-3.8,-9.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgVAcQgJgMAAgPQAAgOAIgLQAJgOAQAAQAMAAAGAGQAHAGAAAGQAAAFgCADQgDACgEAAQgFAAgDgDQgDgDgBgHQAAgFgCgDIgFgBQgCAAgDAEQgEAGAAAMQAAAKAEAJQADAJAFAFQAEAEAGAAQAEgBADgCQAEgCAEgEIADACQgGAJgHAFQgIAEgJABQgNgBgJgKg");
	this.shape_9.setTransform(-11.6,-8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAIAjQgEgDgBgGQgMAMgLAAQgGAAgEgEQgEgEAAgGQAAgIAHgIQAHgGAXgKIAAgIIAAgKIgDgDIgGgCQgFAAgDACQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAAAIACAFQADADAAADQAAAEgDACQgCADgFAAQgFAAgDgDQgEgDAAgEQAAgGAFgFQAEgEAIgEQAIgCAIAAQAKAAAGAEQAGAEACAGQABADAAAMIAAAbIABAHIABABIACAAQAAAAABAAQAAAAABAAQAAgBABAAQAAgBABAAIACABQgEAGgEADQgEADgGAAQgGAAgDgDgAgKAIQgDAEAAAFQAAADADADQACACADAAQAEAAAEgFIAAgXQgIAFgFAGg");
	this.shape_10.setTransform(-19.1,-8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgWAaQgIgKABgPQgBgRAKgLQAKgKAMAAQAMgBAIAKQAIAJABASIgoAAQACANAGAIQAFAHAIAAQAEAAAEgDQAEgCAEgHIADABQgGANgIAFQgGAEgKAAQgQAAgHgMgAgEgcQgEAGgBAMIAAADIAVAAQAAgNgCgEQgBgFgDgCIgFgCQgDABgCAEg");
	this.shape_11.setTransform(-26.7,-7.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgvA1IAAgDIAKgBQACgBABgDQABgCAAgIIgBhEQAAgJgBgCQAAgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBAAQgDgCgHAAIAAgDIAxAAQATAAAHADQAIADAFAHQADAGAAAIQABAHgGAGQgFAGgOAEQAPACAHAFQAIAHAAAMQAAALgJAIQgMAKgXAAgAgJAjIAAAEQABAEACACQACACAEAAQAFAAAFgCQAGgDACgGQADgFABgHQAAgHgEgGQgEgFgGgDQgFgCgMAAgAgJgEQALAAAFgCQAGgDACgFQADgFgBgHQAAgHgCgEQgDgEgFgCQgGgDgKAAg");
	this.shape_12.setTransform(-35.8,-9.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.beachbannerstill, new cjs.Rectangle(-49,-20.8,98,41.7), null);


(lib.texti = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_114 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(114).call(this.frame_114).wait(1));

	// vert 1
	this.instance = new lib.VertLine("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-66.6,156.1,0.8,0.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({_off:false},0).to({alpha:1},5).wait(51));

	// horz
	this.instance_1 = new lib.HorizontalLine("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.1,163.9,0.8,1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({_off:false},0).to({alpha:1},5).wait(51));

	// win
	this.instance_2 = new lib.canwinstill();
	this.instance_2.parent = this;
	this.instance_2.setTransform(55.4,146.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.instance_3 = new lib.pronounwinIcanwin();
	this.instance_3.parent = this;
	this.instance_3.setTransform(62.1,140.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(35).to({_off:false},0).to({alpha:1},6).wait(13).to({y:162.9,alpha:0},0).to({_off:true},25).wait(36));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(79).to({_off:false},0).to({alpha:1},5).wait(10).to({alpha:0},0).to({alpha:1},6).wait(15));

	// can
	this.instance_4 = new lib.canwinstillcan();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-29.7,147.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(29).to({_off:false},0).to({alpha:1},6).wait(19).to({y:164.1,alpha:0},0).wait(20).to({x:-27.7,y:141.1},0).to({alpha:1},5).wait(15).to({alpha:0},0).to({alpha:1},6).wait(15));

	// i
	this.instance_5 = new lib.isentstill();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,159.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:2.59,scaleY:2.59,x:2,y:160},9).to({scaleX:1,scaleY:1,x:0,y:159},5).to({x:-90.4,y:146},8).wait(32).to({y:168,alpha:0},0).wait(15).to({y:141},0).to({alpha:1},5).wait(20).to({alpha:0},0).to({alpha:1},6).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.4,125.9,28.8,66.7);


(lib.Ipointingred = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_11 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(11).call(this.frame_11).wait(1));

	// Layer 1
	this.instance = new lib.Ipointingredstill();
	this.instance.parent = this;
	this.instance.setTransform(-64,-21.2,0.999,0.999,57.7,0,0,-30.7,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:9.9,rotation:12.7,x:-73.1,y:4},11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.3,-17.2,73,90.1);


(lib.Imirrorpoint = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_11 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(11).call(this.frame_11).wait(1));

	// Layer 1
	this.instance = new lib.Imirrorpointstill();
	this.instance.parent = this;
	this.instance.setTransform(21.3,13.1,0.998,0.998,-56.6,0,0,18.7,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:18.8,scaleX:1,scaleY:1,rotation:5.7,x:22,y:5.2},11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.9,-6.4,47.5,54.4);


(lib.ibubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// Layer 1
	this.instance = new lib.ibubblestill();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.151,0.151);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({scaleX:1,scaleY:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.1,-4.2,16.3,8.3);


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


(lib.beachbanner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.beachbannerstill();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.beachbanner, new cjs.Rectangle(-49,-20.8,98,41.7), null);


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
		var bgm = createjs.Sound.play('bgmusic',{loop:-1});
		var vo = createjs.Sound.play('VO4');
		
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
		
		 window.open ("pronoun_Scene5.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("pronoun_Scene3.html","_self");
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


(lib.I = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Ipointingred();
	this.instance.parent = this;
	this.instance.setTransform(-73.4,-3.3);

	this.instance_1 = new lib.Imirrorpoint();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-140.4,-8.6);

	this.instance_2 = new lib.beachbanner();
	this.instance_2.parent = this;
	this.instance_2.setTransform(120.2,-65.9);

	this.instance_3 = new lib.ibubble();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-96.1,-126.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AUVxQQgBAFAAAFQgBAPADANQADAFAAAFQAAgBAAAAQgCgEgBgFAUZwgQAAACAAACQgDARgMAPQgIALgFgKQgCgCgBgDQgHgTAEgUQAEgSAHgRQAEgGAEgCQgMADgQAAQj8A/j8gXQgCABgDAAQgQADgRADQgHACgGADQgHAFgCAHQgBACAAACQAAAAAAABQgDATABATQAAAGACAFQgFACgBACQgDAIgIAGQgNANgDgQQgBgCAAgEQgBgPADgQQAGgVAKgRQAAAAABgBQgJgDgKgBImSgXQgOAHgHANQgDAHgDAHQgDAKgCAJQgCAPABAPIAmgCAT9v7IgHABQkTguj7BiQAJgEAEgGAUKxSQAGgDAFAFAVMwHQgMAAgMgCQgUgDgHgUAdNydQkeA9kOgFQgJAJgDAMAbdrYQgEAAgFgDQgJgGgLABQgQABgPAGQgSAGgSgCQgUgCgPgLQgQgNgSgLQgLAGgNAJQgRAKgTADQgVADgUgHQgZgJAEgZQACgJgKgCQgOgCgNAFQgQAGgQAHQgPAHgQADQgWAFgXABQgUABgVgEQgXgEgSgPQgNgKgPAKQgQAKgSAFQgUAFgVgEQgKgBgIgHQgKgIgLAEQgPAGgOAKQgPAJgQAJQgPAIgQAEQgQAEgPACQgZAEgXgKQgDAAAAgFQgDgUARgUQATgKAEgPQAEgTAOgMQAMgLAPgEQARgGASgCQAYgDAWAJQAHADADgFQAIgOAOgFQASgHATgCQAWgCAUAJQAJAEAJAAQAGAAAGgFQAKgJAPgDQASgDASAAQATAAASADQAaAEAXAKQAPAGAMgTQAIgPAOgHQARgKARgFQAQgEARABQASADAPAGQATAJASAGQASAHARgIQASgJARgJQATgKAVACQAHABAFAEQAKAJARAFQAUAGASgGIgDioIAAgnAa7x6QgCADgCACQAJAFALABQABABACAAQADAAADAAIABAAQAKAAALgCQANgDAMgCAbMxoQAEAGAGAEIAAAAQABABACAAQAFACAHAAQAVABASACAVMwHQAHAAAGgBQABAAAAgBQACgBADgBQCshJDMAoIBigJIACgPQgGgJgDgMQgFgSAHgRQAGgRANgLQADgDADgCIALgBIAIgBQACACADACQgJgLgPAJAVMwHIAOgCAEGwGQAQAFASgCQASgCARAEQAVAFgQAHQgDABgEABQgRADgSABQgUABAAAMAEDuiQgMgGgHgMQgJgPgCgTQgBgEAAgEIoIAPIABARIAGCIIKGgsQAAAAAAAAQAAgBAAgBQgBgSgCgRQgCgTgIgRIBfgJAEDuiQADACAEABQAAgCAAgCgAEKujQABgCABgDQADgHADgIAIWtpQgCgCgCgCAG7u9QABAEgBAFQAAAKgFAKQAAACAAADQAAADAAADQgCAUgCATQgCARgBASQAAAAAAABQAAAAAAAAQgBAPgBAPQgBAOAAAMQAAAHgBAHQgBAIgBAIQgCAPgCAPQgCASgCARQgCATgCATQgBATAAASQADAOgCAOAGjuWQgFASgCAUQgBAKgBALQgBALgBAKQgBAUAAATQAAAFAAAEQAEAEgBAFQAAADAAAFQgCgJgBgIAF6uUQAAAKAAAJQAAALAAAKQAAALABAKQACATACATQACAKABAJQACAFAAAFQgBAEgBAEQAAgJAAgJAFuqMQAAgEAAgEQACgQACgRQADgRAAgRQAAgTAAgTQAAgGgBgHQgBgJgBgJQAAgBAAgBQgBgIgBgIQgCgKgCgLQgCgPgBgQAGvtKQAPACAOAHQASAHAMARQAKAOAKAOQALAQAKAQQADAFABAFQgCgRACgUQADgQACgRAFcurIhSAIAK6wPQgGgIgLACALTvAQABAAACAAQABAAACgBQABAEACACQADAHADAGQgKgIgFgKQgBgBgBgBQACgBAFABQAAABABAAAK5vZQADANAKAIQAGAEAHAAALiuuQAAAAABAAQAFAEgBAFQADAFACAGQAGAPADAQQABALABAMQAAAHAAAIQgBgDgCgCQgIgRgRgKQgQgJgRgHQgMgFgMgFQgVgHgVgEQgOgDgNgDQAAAAgBAAQgIgCgHgCQAIADAHAEQATANAQAPQAMAMAJANQALASAIATQAEANgBAOQgBAPgGAIQgGgNgJgLQgLgPgSgHQgSgHgTgHQgRgFgQgHQgOgGgNgKQADATACATQACAOgBAMQAAgCABgCQABgIACgHAKYvKQgLgDgIAEIjKAVAKYvKQADACADABALnulIAAAAQgDgFgCgEALovGQgGADgJACAJSp5IB8A+AJokFICogsAbfpjI0Sg4IgLgBQgCgBgBgCQgEgEgEgDQgCgCgCgCAG1kHQAAAAABgEQAAgEAEgJQAGgRAFgSQAFgSAGgRQAGgQAFgQQAFgRAHgQQAGgQAEgRQAEgSABgSQABgRABgRQAAgUgDgTQgDgTgGgSQgFgQgJgQQgIgPgKgOQgFgGgFgHAGsl9QgBAAgBABQgGADgIACQgJACgKABQgKABgKAAQgEAAgDgBQgQgDABgUQAAgFAAgGQABgOACgOQACgRABgTQABgTAAgTQAAgCAAgBQABgSAAgRQABgRgBgSQgBgTABgTQAAAEAAAEQABgEAAgEQABgDAAgDQADgNACgOIAAAAQgQgFgPACQgUACgTACQgSACgSAAQgPAAgPgEAGcpiQgBgHgCgJQgCgLgBgNAGcpoQAAAAAAABIAAAFQAAALABALQAAADAAADQgDARgCATQgBASADAUQACAQACAQQAAACABACQADARADATQAEASAEARQACAKgDAKQgBABAAAAQAAABgBABQAAAAAAAAQAAABgBAAQABAAABgBQABAKABALQAAACAAACQABAIAAAHQAAARACAQQABANABANQABACAAACQABAEAAAEQAAACABACQAAAHABAHQAAADAAADQAFAKgCAGQALgJAPgDQATgEAQAKQAQAKAMAOQAKAMAMAKQgFAEgEAEAAMqtQAEgJAIgJQANgPAPgOQANgLARgFQATgIAUAGQASAEAMANQANAMACASQgPgIgUgFQgVgEgUADQgXAEgNAUQgJANgEAQQgBADAAAEQACgBACAAQANgFAQgHQACAAABgBQAegKAfAIQAkAKADAgQABANgCALQgCgFgLAAQABADAAADQABATgEASIAAAAQgCAPgBAPQAAAEAAAEQABAMgDANQgCAIgBAHQgCASgOANQgDADgCADQAEAAAEgBQATgBAOANQAPAMADASQAAABAAABQADAUgPAPQgOANgRAHQgRAHgSAEQgSAEgSgBIAAAAQgEARgKAPQgKAQgQAKQgQAKgSAFQgQAFgPAIQgKAEgIAGQgPAKgQAEQgRAEgSACQgEABgFABQgBAAAAAAQABgCABgCQgBACAAACQgCAFAAAGQABARABAQIAAABQAAADABADQABATACASQABAEAAAEQAPADATgCQADAAADgBQALgDAKgJQAPgQARgMQAHgFAHgFIhkgDACipkQAAAAAAgBQgEgMgOgIQgPgJgRgFQgQgFgQgBQgTgBgOAEACdobQAIgRAPgMQAPgLASgFQATgFATgCQAVAAAPANQAPAOAHATQAHAQgBASQgBASgHARQgEgTgMgNQgKgNgOgHQAJASAEAWQAEAUgHASQgIgHgIgNQADAGAFAQQAAAAAAAAQABAEABAEQAEAOgFANQAAAAAAAAQgBACAAABIABAAIBDAEADnmbQADgMgCgMQADAHADAJQABAEAAAEQADASgCARQAFgEAEgDQANgMAHgPACJmgQADACADADQAHAFgBAFADQmcQAFAPABAOQAJgHAEgLQADgFABgFIAIAAADNmfQgBgCgBgEQAAgDAAgEQACAHACAGQAAABAAABQABABAAAAQgFAFAAAEQgDgDgEgDQgCgCgEgBADPmdIAAAAADPmdQgBAAgBgCQABAAABAAADCmdIANAAADQmcQAAAAgBgBAGGn0QgBAKgBAOQAAABAAAAQAAAGgBAHQgBARgHARQgCAFgCAFAGPnaQAFAQgBARQAAAMgCALQAAADAAACQgBACAAABQAAACAAABQAAgDABgDAGtlhQgBAFgGADQgLAIgOAAQAAAAAAAAQgEAAgDAAQgVgCgHgIQAAADAAACQAAASgCAVQgCARgBATQgCAPgBAPQAAAKAAAKQABAOgBAJQAAgFAAgEQAAgHAAgHAGPk5QgEAPgBARQgBARAGAOQABADACAEAG3jhQgBACgCABQACALAFAIQAGAHAJADQAQAHAJARQAEAIADAJQgGgGgGgHAG2jzQAAAKABAIQABgBABgBQAAACgBACQAAgBgBgBAFvinQgBAAAAgBQAAAAAAgBQgEgJAEgIQADgGAKgFQAOgHAPgCQAEgBAEAAQAQgBAJAHQADADACAFAFvinIgBAAQgHgBgHAAQgCABgDAAQgFABgGADQgLAEgEAHQgBACgBACQgCAGABAJQACATgOALQAFAIAKAEQAUAJAVgaQAEADADADQAFAGgBAGQgBAGgIAGQgPANgCAUQgCAQALAKQADACAEADQABgBAAgBQAAgBAAAAIAAAAQACgFABgBAFvinQABADADACQAEADAHACQARAGAMAOQAJAJAEANQgEgEgFgEAGthYQADgEAEgBQAJgEAPAJQATgGAMgJQAbAEAKgTQAFgLgEgJAG5AVQAAAAAAAAQAJgMANgLQAOgPATgGQASgGAQgIQANgHAKgKQALgLANgEQATgEALgQQAMgQgFgUQgCgLAAgLQAAgJACgIQgFACgEAEAG5AUQABgBABgBQAHgMAIgLQAIgNAJgOAFqhsQgLgKgOgEAFkgTQgNAPgFAQQgFASgKAQQgIANgIANQgIAPgJAPQgKAPgHARQgBACgBADQgHAPgEAPQgFARgHAQQgIARgIARQgHAMgGAMQAAAAABAAIgCAGQgEAMgEAMQgFAPgGAOQgEAJgEALQgFAOgIAKQgEgNgEgOQgFgSgFgTQgFgQgBgSQAAABAAABQgEgTgFgTQgEgRgFgTQgEgRgDgSQgCgHgBgHQgDgNgCgMQgDgSgCgTQgCgRgCgRQgDgTgCgTQgCgRABgRQAAgLgCgKQgBgJgDgIQAAgCAAgBQgBgTgBgTQgBgTgEgRQgEgSgLgNQgCgDgCgCIAEABIDkAGAERCLIgCAAAG5AVQAAAAAAAAIAAgBQgBACgCADQABgCACgCQgEARgDARQgBAHgBAIIAAABQgBALAAAMQABATABAUQABAUACATQADATABATQABAOABAOQAAABAAACQgCgBgCAAQACgBACgBQADgCAGgCQAVgGAVgDQAJgCAJgBQAJAAAJACQANADAIAKQADADACAEQACAEABADQADgFAFgEQARgMAVgGQAQgFAQgDQAEgBAFgBQAGgBAGACQATAHASALQAGAEAFAEQAEADABAEQALgaAagNQATgKAWgDQAKgCAKACQAVAFAPARQAFAFADAGQAMgOAPgJQAPgKASgFQAQgEAQAGQAPAHALAMQAKAKAJAMQACACACADAG5AUQgJADgGAGQgHAGgEAKQgIASgJASQgBABgBACQgIAQgIAPQgFAJgFAJQgBABAAABQgDAGgDAHQgHASgFATQgCAGgBAHQgEANgBANQgBACAAADQAAADgBADQgBALgDANQgEASgGASQgFASgHARQgHAQgHAPQgFAKgFAKQgDAGgDAHQgJARgHARQgCAEgBAEQgDAGgBAHQACgBABgCQADgGgCgEQgBgBgCgBAFxCHQgEAggCAVQgEAegBAIQAAADAAADQAAAAAAABQAAACAAADQABAJAAALQAAAIABAIQAAASAAATQAAATAEASQABAEABAEQACALgBAMQgBACAAACQAAACACADQABgEACgEQAGgNAEgMIAAAAQABgCAAgBQAGgXgCgXQgCgZgMgZQgFgMgDgLAGTDkQABAGAAAGQAAABAAAAQABAJAAAJQgBANABANQAAAKABAKQAAAGAAAFQAAADAAACQAAABAAABQAAAIAAAJQAAAIgBAIQAAABAAACQACAHgBACQgBADgBAGQAAgJABgJAG6DxQAAACAAADQABAGAAAGQABANAAANQABAOgBAOQAAAFAAAGQAAAEAAAFIAAAAQAAAOADAPQADASAAASQAAAGABAGQgEgBgEgBQAAgBAAABQgBgBAAAAQgFALACAKQACAAABABQABAAABABQATAHgQARQgNAOgEATQgCALgCALIAAABQgBAGAAAGQgBALgCAKQgCAJgCAIQgCALgCAMQABgBABgBQAAAFAAAGIAAAAQAAAGgBAGQgBASAAATQAAATgDAUQgDASABATQAAATgDASQgEATgBAUQgBATABATQABATgBATQAAAUABAUQABASADASQgBAAgCAAQABAAAAAAQADADAAAEQAAALAAALQAAALABAMQABAFADADQAEAEAEAFQAFAEAEAFQgKAAgJAAQgHAAgHAAAKxjFQADAIgHAKQgFAGgJAAQgSgDgSAEQgMADgJAFAKxjFQgCgHgJgGQgPgLgTACQgTABgSAFQgTAFgSAKQgJAFgJAGQACADADABQANAMAPAJQAMAIANAGQABAAABABIABAAQACACADABAIPkRIDIhaAILpsICfBeAG2j5QAEAFgEABAbZoaQgBgDgBgCQgCgEgEgEQAMgFAQgHQAEgCAEgCQANgFANgEQAJgDAJAAQAJgBAIADQALADAEAIQABACAAADQAAACAAABQAAABAAABQABAGACAHQgPBrgGBrQgICkAQCiQAAABAAAAQAHBDALBCQgLACgLAEQgDAAgCABQgQAFgOAHQgPAGgOAGQAGAKACAKQAHgDAGgDQASgHASgEQANgDALADQADABAEABAPdDqQAKgJAKgJQAPgNARgHQASgHASAAQASAAARAJQAQAJALAOQAIAKAFAMQAFgDAFgEQALgMAPgGQAMgEANADQAWAFAVAIQAOAGALAKQAEAAACgCQAHgFAHgFQARgMAUgEQAUgDATAEQAQAEANAJQAIAGAKgJQAXgUAdgDQAYgDAXAJQANAEAMAHQAFACAEAEQABgDADgDQAEgGAIgGQAKgIAOgDQANgEALAGQAGADAFAGQAKANASgLQAEgDAFAAQARABAQAHQAKAEAIAFQAGADACAFQADAMgLAEQgKAEgJABQgMACgLgEQgXgHgWgIQgLgDgIAHQgFAFgEAHQgEAGgFAGQgOAQgXABQgRABgSAAQgWAAgSgLQgZgPgZARQglAYgpgGQgIgBgIgCQgVgGgTgLQgCADgBAEQgDAHgGAEQgMAIgOAGQgJAFgLAAQgDgBgDABQgDAAgDABQgPAEgQAAIAAAAQgBAAAAAAAbXiOIwmg3AG3BHIUgAAIABBoQgDACgDACAdYyeQgDACgDADQgCACABAFQABADACAEAdlybQAQAOADAVQADASgCATQgCAUgQAKAdIw2QgCgBgBgBQgFgFgFgHAdIw2IAfABQgBAAAAAAQgRAKgNgLgAc5w1IAPgBAcXsUQgBAEgBAEQgCAHAAAIQAAAIABAJQABAEAAADQABACAAADQACAMABAMQABAOAAANQAAAOAAAOQAAAEgCADAc5w1QgPCQAGCQQADBiAOBiIhTADIgPABIAAgWIgCh1IAAgDIgDipAb1o3QABAFABAEAb1o3QgCgLgFgMAbZoaQAEAJgEALIAAgPQgBgBABgBQAAgCAAgBgAdCouIADAPAbXiOQAQhfABheQAAhegPhdAcXg5QAIATAEAYQABAGABAHIAAAAQAAABAAAAQABALABAMQAAARgCARQgBANgDAOQgBAFgCAFAcXg5QgBgDAAgEQgEgIAFAPgAcJgbQAGAHAEAUQADATgDATQgDAPgFAPAb0CiQAAAAAAAAQgCAAgCABQgNAFgLAHAcLDoQABATADASQADASADARQAAABAAABQADAPAEAOQAGATACAUQABgEABgHQABgOABgOQACgRAAgRQABgdgJgbQAFgEAFAAQAGABAGABAb8C2QgIADgIADQgQAHgMAMQAKAGAJAUQAHAOAEAQQAEATAFATQACAGABAGQABACAAADQAAAAAAAAQgBABgBAAQgEACgEABQgSADgTABQgJAAgJAAQgLAAgKAAQgTgBgTACQgSABgRAFQgSAFgTABQgDAAgEABIAAAAQgPABgOACQgTACgTACQgRACgQgGQgTgGgUAEQgSADgTADQgIABgIABQgKACgJACQgTADgSAGQgQAGgRADQAFABAEACQgDABgDACIAAAAQgBAAAAAAQgGADgIACQgRAEgRAEQgSAFgTACQgNABgMABQgHAAgGABQgPAAgQAAQgQABgQAAQgSgBgRAAQgTgBgTAAQgRAAgQAAQgSAAgSABQgRABgRABQgRABgRACQgUACgTABQgUABgUABQgPAAgPAAQgSABgRACQgQABgPACQgPACgPABQgRABgRADQgSACgRAFQgTAFgSAHQgSAHgRAGQgSAHgTAHQgNAGgNAFQgPAHgPAGQgSAGgPALAdKCtQAAAXABAdQABAJAAAJQgBAGAAAGQAAAPAAAOQAAARgCAQQgBARgCARQgCAUgDAVQgCAOgBAOQgCAUgCATQAAACAAABQAAACAAACQAAAEAAAEQAAAMgCANQgBATgBAUQgBARABASQAAABAAAAQABASgCASQgCATAAAUQABASAAATQABASABASQACATABAUQACASAEASQACAJABAJQABAHgBAHQACAJAEAJQAJAZgXAEQgSAEgSgFQgBAAAAAAQgNgEgKgJQgEgDgDgEQgJgKgDgMQgBgCAAgDQgBgDACgDAbfpNIgIAAAbXBHQAFgzAAgvQABg7gGg4AbsE5QAEgCAHADQABABACABQAAABABABQAAAAAAAAQACALABALQABAIABAJQgNgPgUgBQgSgCgTACQgSABgQAKQgPAJgMAJQgDACgDgCQgPgKgRgFQgTgGgTAAQgZgBgGAPQgCADgCACQgGAEgHACQAHAJgLAAQgWgCgXgCQgXgCgYABQgfABgOAWQgDAEgFACQgGACgHABQgYABgZAGQgMACgJAIQgEACgEABQgGAAgGAAQgJgBgJgCQgLgDgMgBQgbgEgVgCQAEADACAFQADAFgCAEQgFASgXAAQgSAAgTgBQgTgBgTgBQgTAAgSgCQgRgBgRgCQgRgBgRABQgRABgRAAQgSABgRAEQgTAFgTAEQgSAEgTACQgSABgSACQgUACgTABQgTAAgTgCQgRgBgRgCQgSgCgSAGQgRAGgRAHQgQAGgRAGQgSAFgSgEQgSgFgTAEQgTAEgSAJQgRAIgQAJQgPAIgOAKAcCHSQAAgFABgEQABgNAAgOQAAgKABgLAcAFlQAAAKAAALQAAAUAAATQAAATAAAUQAAAAAAABQAAAEAAAFIAAAAQAAAEABAFQAAgFABgEQAEAPABAUQAAARABAQQAAAUABATQAAARgBARQgCASgCATQgCATgCAUQgCASgEASQgDARgEASQgDARgCARQgCARgBARQgBABAAACQAGgBABgBAbqM8QAAgCAAgBAcVL9QADAQgCAaQgBAPgGAOQgCAFADABAcTNuQABACAAADQACANgEAUAb6OWQAMABAMAAQAHAAAIAAQATABAUADQADAAACAAQgBAPgEAQQgEAPgCAPQgBASAAASQABAUABATQABARAAASQABAUACATQACATACASQACASABASQAAARAAAQQAAATABATQABATADASQADASAHAQQABABAAABQACAAABAAQADAQADARQACARABAQQACAUAIARQAGAMAEAMQACAGABAGQABADAAAGIChAAMAAAguzAb4OWQAAADAAADQABAPgCAVQgCASgBAQQgCARgBAQQAAASACASQADAWAAAXQgBASABASQABAQABAPQABASABATQAAASABARQAAAQACAPQACASABATQgDAUACANQgBARgBARQgCATgFASQgFATgIASQgJASAAAUQAGACAAgBAcOOwQgDASACATQACASABASQABAPgBAPQAAAGABAGQABAEABAEAddVEQADAAABACIAAAAAcAUjQAAASACARQAAAEAAAEQgCgFgBgFAc+XaQAAgIAAgDQAAgJgBgJQgCgTAAgSQgBgTAAgTQAAgLAAgLAdVVuQgBAEADAYQACAPAEAQQACALABALAc+XaIBEAAAGcXaIVKAAIBYAAAVKEuQAEASASAIQAJAEAEABASrE4IAAAAQAEgGAHgDQATgKAKAIASJE0QALAFAMABQAGABAFAAQgBgBABgCQAFAAAFABQgCABgEAAQAAAAgBABIgBAAQgBAAAAAAQgBAAAAAAQAAAAABABQAAAAABAAIABAAQAAAAAAAAQAAAPAWAKQAIADAJAAASJE0QASACAQACAUZGrQAAABgBAAQgCACgCABQgCgBgBAAQgBABgBAAQADAAACAAQAFAAAGAAQAKABAJgEAQIExQAHACAJACQARACARgCQAFgBAEgBQAEgCAEgBQANgGAMABQATACASAHAOFEzQAHAAAHABQARAAAQgCQAGgBAGgCQAGgBAHgCQAFgCADgCQAWgCAPAHQAHACAHACQAdABAeABAOFEzQgBAQAMANQAJAJAMAGQARAIASACAMbE7QAFgDAFgDQAGgFAAgHQAFAHAJgCQARgEASADQAVAEAUACAMYE9QAEAaAYARQAPAKASAEAMYE9QACgBABgBAHDFMQAQAKATABQAWACAOgPQAPgRATAHQASAGAUAAQAQAAARgEQALgEALgDQAGgDAGgCQASgGALgOQAIAKAJAIQAaAaAlgJQAMgDAKgFQAAgDAAgCQABAAACADAKMFEQAFATAMAQQALAOAQAIQAUAJANgJQACgHAAgFAGnDzQAAAIAAAIQAAALABAMQAAALAAAMQABADAAAEQAAAPgDAOAFwGEQgEAKgDAKQgDAKACAHQALgLAOgIQAZgMAXAJQAEACAFABAG3GrQgQgFgQAHQgSAHgRAIQgRAIgLANQgHAIABALQABATABAUQAAASACASQABATADASQAAABAAABQAAACAAADQABAPgDAPQgEASACATQABAMABAMQAAABAAABQAAABAAABQAAACAAADQgBAGAAAGQgBAKABAKQAAARgBAQQgBATgCASQgCATAAAUQAAAOgBAPQAAAFgBAFQgBATABATQABAUACATQADAVgNAOQgCAGAAAFQgCAOAHAGQAWACATgDQAMgCAMgBAGEHeQAAADAAAEQgBAZACAaQAAABAAACQABAMAAANQAAAOAAANQAAABAAABQgBANgCAMQgDgFgDgIAAxF6QAIAQAGARQAHASAHASQAGARAHASQAHAQAJARQAIAQAIASQAIAVAVAAQATAAAPgKQAQgLAOgNQAOgOAJgRQAFgLAGgMQAIgSAIgQQAAgBAAgBAFvICQABAMAAAOQAAAEAAAFQABARAAARQAAAFABAFQAAAGAAAFQAAAAAAABIAAAAQAAAEABAEQAAARgBARQgCARgBASQgBARgDAQAGeJGQgBAFAAAEQgBADAAADQgBAEAAAFQgEgIgDgIQgFgPABgQQABgKgDgKAEjF9IAuAAAF5MYQAAADAAAEQACAdACAeQAAALABAKQABAKAAAKQAAAEAAAFQABAEAAAFQAAANgBANQAAALgBALQAAABAAABQAAAGAAAGAFmNrQAAADABAEQADAUACAVQABANAAANQAAAHAAAIQgCgHAAgBQAAgCACgFAGMQoQgBAAAAAAQgTgBgSAAQgLABgLgBQAAAAAAAAQgEAAgEgBAFgT8QAAgBAAgBQACgSACgSQACgSABgSQABgSABgSQABgSgEgRQgDgSgGgQQgGgRgHgRAGsQnQgQABgQAAQgBgVABgVAGsQsQgBATgCATQgDATgDATQgDATgDAUQgDARgCASQAAABAAAAQgCAKgBALQgBAHgBAIQAAABAAACAGJTdQABAAABgGQACgLABgKIAAgBQAAgDAAgEQABgMgBgMQAAgCAAgCQAAgFAAgFQABgMACgHAGCS6QgBAJAAAIQAAgFABgFQABgDgBgEgAGERRQgJAJADAWQADASABATQABATgBASAGeW7QAMgGgJgUQgIgQgDgTQgDgSgCgSQgDgTABgTQACgTAAgUQAAgSACgRQgGADgHACQgSAEgLALQgBABgBABQgCACAAADQgEARACATQACAUAAATQAAATgDAUQgDASgHAQQgHASgHAVQAKADALgCQAUgDATABQALABAJgDQACgBACgBQAAAKgBAJQAAADgBACQAAAEAAADAFxTUQgDAIgCAIQgBAEgBAFQgBAEgBAFQgBAEgBAEQgBAAAAABQAAAAAAABQgBACAAADIAAAAQgCAFgCAFQgBgKABgJQgBAAABAAArLtBIAAAAIyBimIgKgCA2prEQgHgEgIgBQgHgCgGgBQgHgCgHgBQgIgCgIgCQgKgCgJgBQgJgBgIABQgIAAgIABQgIAAgIABQgJABgKAAQgJABgIABQgJADgIACQgJACgJADQgIACgIACQgIAEgIADQgIAEgEAJQgDAJgBABQABAAAAgBQADgHgCgIQgBgJgGgHQgGgHgHgBQgJgDgJgDQgJgEgKgDQgJgCgJgDQgJgCgJgBQgEAAgEABQAAAAgBAAQgDAAgEABQgJABgIAFQgGAFgHAEQgBABgCACQgDACgDADQAFgCAGgCQAAAAAAAAQABAAAAAAQAOgFAPgCQAFgBACACQgDAAgDABQgOAEgNAIQAAAAgBABQAAAAAAAAQgRAMgJATQgEAHAAAIQAIgIAOgJQgJAIgJANQgBABAAABQgIAMAAAPQACgCACgDIAAAAQAJgJAMgHQgJAIgGANQgBACgBABQgEALAAALQgBAJAEAHQABABAAABQACgGADgHQADgJAFgIQADgGADgCQgEAFgDAGQgFAIgDAKQgBAHAAAGQgBANAEAMQABgHAEgGQADgFAEgEQAAABgCAFQgDAIgBAJQAAACAAABQgBAKACAKQABgCABgCQABgDACgDQABgBABgBQAAADgBADQABABAAAAQAAABAAAAQACADgEABA42oIQgEABgEABQgIACgHACQgJACgIABQgJACgKgCQgJAAgJgEQgIgCgHgEQgIgFgHgHQgHgGgFgIQgFgIgFgJQgEgHgEgIQgEgJgBgJQAAgJABgJQABgKAFgIQAFgHAFgGQADgDACgBQADAAACADQACADAEABQAFABAFABA5Cn+QABAAABgBQACgBACgBQAGgEAGgBQALgCAKAAQABAAAAAAQASABAQAIQAEABAFACQAIAFAFAHQABABAAAAQgEgDgHAAQgJABgIAGQgHAFgDAKQgDAIABAKQABAKAFAIQAHAJAKABQAEABAEgCQAAAAAAAAQAAAAAAAAQgJAHgKACQgOADgNgBQgJAAgJgDQgGgDgFgFQgTgUgGgZQgCgFADgFQADgFADgFQAEgEADgEQABgBAAAAQABAAAAAAIAAAAQADgCACgBA5Cn+QABgBADgCQAEgEAEgDQAEgBAFgBQAKgDAKgEQAJgCAJAAQAEgBADAAQgFgBgGgBQgJAAgKADQgJACgIAFQgEACgDACA5Cn+QgBABgBABQgEADgDAEQgHAIgGAKIAAAAQgEAGACAHQgDgBgCABQgCABgCAAQgEAAgEAAQgRgBgRAEQgSADgRAGQgIADgIADQgRAIgSgCQgBAAgBAAQgBAAgCgBQgDAAgDgCQgFgDgGgCQgCAAgCgBQgKgCgKADQgGAAgEADA4AoUQAGgBAGgDQAIgEAIgFQAHgFAHgFQAIgGAHgHQAGgGAHgEQAHgFAGgFQAIgGAGgGQAHgHAFgJQAAgBABgBQADgGACgHQAEgJgBgIQAAgJgBgIQgCgHgCgFQgDgBABgCQgBgBACgBQACgDACgDQABgBACgBQAFgFAHgDQAJgFALgCQAMgBANADQAOACANAIQAMAGAKAHQAHAFAGAHQAGAEACAEQABgEACgEQACgFABgGQABgHgBgHQgCgFgBgFQgDgIgCgHQAEAFAEAEQAGAEAEAAQAAgFAAgGQAAgFgDgEQgCgDgDgEQAAAAgBAAQAAABgBgBQgBABAAgBQgGgDgIgBQgJAAgKABQgJAAgJACQgJABgIACQgJACgIAEQgHADgHADQgHAEgGADQgGAEgGABA4AoUQAEAAAEABQAJADAIAFQAIAHAHAGQAIAHADAIQAEAJACAKQABAFAAAFQAAAEgBAEQgBAHgDAGQAIgIAJgDQAJgCAIgDQAHgBACABQABABABABQADAHABADQAEAAADgBQAKgBAJAFQAEABAEACQACgBAEABQAKAAAJgCQAJgBAJgFQAHgFAGgFQACgDADgCQgLAAgHgJQgFgIgBgJQgBgKAEgJQAEgKAIgFQAHgHAJAAQAJAAAEAFQABABABABQACABABABQABAJgDAJQgDAIgDAIQgEAJgFAGQgEAFgEAEA6sqYQAAAAAAgBQAAAAAAgBQABgDAAgDQgBgDgCgDQgBgBgBgBQgBgCgCgBQgEgGgFgFQgHgHgIgEQgJgEgIgBA6sqYQgBAAAAgBQgBgBgBgBIAAAAQgBAAAAAAQgDgDgDgEQgCgCgBgCQgEgEgEgCQgGgDgHgDQgIgDgJgBQgJgCgIABQgKAAgIACQgKADgCAHA67qQQgHgBgIADQgIACgHACQgHACgIACQgIADgHAGQgHAGgHAHQgHAIgFAIA6sqYQgBAAAAAAQgBAAAAAAQgBAAgBAAQgBAAgBAAIgBAAQgDAAgEAAIgBAAQAAAAgBgBQgKgBgJgBQgHgBgIABQgJACgJACQgIADgIAEQgIAGgIAFA89pLQABABAAABQABABABABA8FooQACAHACAHQACAHADAGQAEAJAEAKQACAEADAEQACAEACADQAEAFAFAFQAFACADAFQgBgBgBgBQgDgCgDgDA8PomQAAAGAAAGQAAAJABAIQACAKADAIQADAHAFAIQAEAGAFAFQAGAGAHAFQAGADADACA8pobQgBADgBACQgBAGgFAFQgFAIADAJQACAIACAKQACAIAEAIQAEAHADAHQACAEABADQABABAAACQABgBACgBQgCgBgCAAQgGAAgGAGQgGAHgCAJQgCAIgCAIQgCAKgCAJQgBAJABAKQAAAKACAJQACAJAEAJQAEAHAGAGQAHAFAHAFQAIAFAKACQAJAAAIgFQAIgEAIgFQAGgEADgFQABgBABgBQABgBABAAQAGgBAEAIQAEAHADAJQADAIADAIQADAJAGAIQAFAGAFAHQAGAHAFAGQAGAIAHAGQAGAGAIAFQAIAEAIAFQAHAEAIADQAIAEAJADQAJADAJACQAKACAJABQAGABAFABQABAAAAAAQAEAAADABQAIAAAJAAQAJAAAKAAQAKAAAJgBQAKgCAKAAQAHgBAIAAQAIgBAIgBQAGgBAFgCQADgBAEgBQAIgDAHgCQAJgEAGgHQAHgHAIgEQAIgFAIgHQAIgFAGgIQAHgHAHgGQAHgHAGgHQAEgHADgHQABgBAAgCQACgCABgDQADgDABgFQAEgJADgJQADgIABgJQABgJAAgJQAAgJgBgJQAAgJAAgKQABgIgBgKQAAgKgCgJQgDgIgDgIQgEAFgFADQgHAGgIACQgBABAAAAQgJADgKABQgKAAgLgBQAAAAgBAAQgDgEgEgDA7ppKQAAAFABAGQAAAEABADQACAJAEAJQADAJAFAHQAEAGAEAHQAEAGAHAEQACABACABQADgBABACQABAAABADQgDgCgDgCA7SpoQgBADgBAMQgBAKACAKQABAKADAKQACAIAEAIQADAIADAIQACAEACADQACACADACA72o9QgKgGAAALQABAHABAFQAAABAAAAQACAIAEAHQAEAIAGAGQAFAHAEAGQAGAIAIAFQAHAFAHAEA8KmRQgJABgEAHQgEAGgEAHQgDAGAAAIQAAAAAAABQAAAJAFAIQAEAFAFABA8NlzQgBgCgBgDQgEgKAEgIQACgCABgEQABgBABAAA71lUQgBgEgDgEQgEgIgGgFQgGgFgEgFA7/mWQgGgCgFAHA8ZluQAEgKAIAFA3hnvQACAEABADQAFAKABAMQAAAIgCAHQgDAHgFAGQgDAEgFADA3QmyQgBAAgCABQACgBACgBQgBABAAAAQgDAFgEAEQgEAFgFADQgDACgEACQgJADgJACQgJACgJAAQgJAAgJgCQgJgBgJgEQgIgDgIgFQgIgEgEgHQgFgIgEgIQgEgJAAgKQgBgIABgIA5/lkQAHAGAFAIQACAFAFADQAHAGAFAGQAHAHAGAHQAGAHAHAFQAGAFAIADQAIADAIACQAIACAJAAQAJAAAJACQAKABAJAAQAJgBAIgBQAIAAAIgBQAJAAAJgCQAKgCAJgDQAJgEAIgFQAIgFAJgFQAIgFAIgEQAIgFAIgGQAHgFAAgGA5ol5QgFABgGAIQgGAGgGAGA6blWQACACAKgEQAIgEAHgGQAAgBABgBA4rjCQAFAHAEAIQAFAHAFAJQADAJACAIQACAJgBAJQgBAJgCAJQgCAKgIAGQgCABgCACQABACACACQACAFADAFQAEAJADAKQADAIABAJQACAJABAJQACAKADAJQAEAIAEAJQADAIAGAGQAHAGAHAFQAHAFAGAFQAIAGAIAEQAJAEAJACQAJACAJgBQAJAAAKgCQAJgBAJgCQAJgDAHgHQAGgHADgJQACgKABgJQACgKAAgIQAAgKAAgKQAAgJgDgKQgDgIgDgKQgDgIgDgIQgEgIgDgJQgEgHgBgJQgBgJAAgKQAAAAgBAAQgJAEgJAEQgEACgEgBQgKgDgFgJQgEgIgDgJQgCgJACgJQABgJAAgJQAAgJADgJA4khbQgFADgGAAQgJAAgKABQgFAAgFgBQAGAFADAIQADAIADAJQACAJgBAKQAAAKgBAJQAAAKgBAIQgBAJgBAJQAAAJAAAKQAAAJABAJQABAJAAAJQAAAEAAAEQAAAEAAAFQAAADADACA5MhYQgEAAgFgBQgHgDgIgDQgHgEgIgEQgJgEgJgBQgKgCgKACQgJABgIAEQgJAFgHAFQgHAEgHAFQgGAFgFAFQgIAGgEAJQgEAIgDAJQgCAIgDAHQgDAIgEAIQgEAJgDAIQAAABAAABQgHAGgCAKQgDAJgEAHQgFAIgFAIQgGAIgEAJQgEAJgFAIQgEAIgCAJQgDAKgCAJQgCAKgCAJQgCAKgDAJQgCAJgCAJQgDAJgEAJQgDAGgDAGIgBAFQgBABAAABIAAAEQgBACgCACQABgEACgEIAAy7A4khbQAAgBAAAAQAAAAABABgA4ghXQgBAAgBgBQgBAAgBgDA9MDZQABAEgCABQAAAAAAABIAAFoQADgEAGgFQAHgGAFgIQAGgHAFgIQAGgIAEgIQAEgHAGgEQACgBACgBQAAgBAAAAQAEgIADgHQAEgJAEgIQADgHADgHQADgHADgIQADgHADgHQACgGACgHQADgJADgKQAEgIADgJQADgJACgJQADgJADgIQAAgCABgCQAAgCABgDQAEgUgBgUQAAgBAAgBQAAgBAAAAQABgJACgJQACgHADgIQADgHACgIQADgIAEgHQADgIADgIQADgIAEgIQAEgKAEgJQAEgJAEgJQADgIADgJQADgIADgHQADgHADgHQAEgIADgIQAEgLAJgHQACAFACAGQAEAJAEAIQADAIABAHQACAJADAIQADAJACAJQADAJABAJQABAIAAAJQABAAAAABIAAAAQAAgBgBAAA58BcQgCgEgCgDA4+BPQABAAAAADQABACAAABQAAAEABAEQAAACAAACQAAAKgBAJQgBAHAAAHQAAALgBAKQgCAMgFAKQgEAHgEAGQgDAGgEAFQgFAGgDADQADAHACAIQACAFABAFQAAAGgCAHQgCAFgDAFQgDAGADAJQACAHACAJQACAJAAAKQAAAJgBAJQgBAIAAAHQAAAHABAHQABABgBAHQgBAJgCAJQgDAJgDAJQgDAIgCAJQgCAHgCAIQgBAIgBAIQgBAKAAAJQAAAJABAJQAAAHABAIQABAJgBAIQgBAJAAAIQgBAHABAIQAAACAAACQgCAHgDAHQgEAKgEAIQgDAIgDAIQgDAJgCAJQgCAIgEAJQgDAHgCAHQgDAJgDAIQgCAIgDAJQgDAIgEAIQgDAIgEAIQgEAIgDAIQgEAIgDAJQgDAHgDAHQgCAFgCAGIHbg5IABAAA5UDnQAAAEABAFQABALAKADQAIACAIABQAIABAJABQAIAAAIACQAJABAKABQAJAAAIADQAJACAKACQAIABAIACQAJACAIABQAIACAJAAQAJgBAJABQAIAAAJABQAKABAJABQAIAAAJABQAKACAKAAQAIAAAJAAQAKABAJAAQAKAAAKAAQAJAAAKgCQAJgBAJgBQAIgBAIAAQAJgBAJAAQAJgBAKgBQAJgBAKgBQAJgBAJgEQACgBADgBQAAABgBACQACgCgBgBQADgCACgBQAAAAAAgBQAAgBAAAAQgBgJgBgKQgCgJgBgKQgCgJgBgKQgCgIgCgJQgCgKgCgJQgDgIgCgIQgEgJgDgJQgEgIgGgIQgFgIgDgJQgDgIgEgIQAAAAAAAAIAAAAQgDgHgFgFQgFgIgHgHQgBgBgCgBIAAAAQgGgGgGgEQgHgGgIgFQgHgGgIgFQgHgFgHgFQgIgFgHgFQgHgFgIgFQgGgGgGgFQgHgGgGgGQgGgGgGgIQgEgGgDgHQgCgFgCgFQgCgFgCgFQgCgJgDgHQgCgKgCgKQgCgNAEgJQAIAAAIAAQAJABAKADQAFADAGACQAHAAAGADQAAAAAAAAQACABABABQADABADACQAFABAEABQAJADAIACQAJACAJACQAIACAIADQAJACAJACQAJACAJADQAJACAJAEQAJACAIADQAJACAIAEQAIAEAIAFQAIAFAJACQAKADAIAFQAAAAAAAAQAEAAACABQACABACACQAHABAGACIABAAIgUAXAwwyAILwC6IAdAIA30weIM1CbIABAAIGaBOIAHgBIABA8QgHgDgHgDQgSgFgSACQgVADgNAMQAUgFAPALQgaADgSAVQARgHAQAIQgaAGgVARQAAAAgBABQgFAEgFAGQgJALgEAOQAOgRAVgEQgaAMgBAcQAbgRAggGQAcgGAWASQAGAFADAGQACADACADQABAEAAADQABABgBAAQABABAAABQgBAJgBAHQgEARgFASQAAABAAAAQgBABAAACQAAgCABgBQAIgPAMgMQAKgKALgJQAEgDADgDQADgCACgCQAKgHAMgEQACgBACAAQgGAJACALQAEAaASAUQAZAcAiAMQgHAAgHAAQgSACgRAGQgIACgIADQABABABABQgKAGgIAJQgJAJgFAKQgEAHgCAHAkkvPIgIjLAkcr6QAKAEAJAHQAQALAOAOQANAOALAPQAGAHAAAIQAOgKAQgGQASgJATgDQASgDASgBQASgCASACQARABARABQAVABAMAOQAGAGAFAGQgBABAAABQgBAEgBADA0Tr+QgCgDgDgDQAAgBgBAAQgHgHgHgGQgIgGgJgBQgJgDgJABQgKAAgJACQgJACgKADQgIACgHAFQgIAFgIAGQgIAFgFAJQgEAIgDAIQgDAIgBAJQAAAFgBAFQgBADAAACQAAAHAEADA2Sq1QAAgKAFgIQAAgBABgBQAEgGAEgGQAGgGAFgGQAHgGAHgFQAIgFAIgFQAHgEAHgDQAJgDAKgCQAJgBAJAAQAGAAAHADQAEABAEABA0KrlQAAABAAABQAAgBgCgCQgBgBgCgCQADACACACQgBgJgEgIQgCgEgCgEArLtBIAJABA0CrcQAAAAgBgBQAAgBgBgBQgDgDgDgDA2RqoQAAAAAAAAA2QqqQAAABgBABA2PqlQgBgBgBgCA2SpqQAIAHAGAHQAGAIAEAHQAGAIACAKQABAGABACQgDABgDABQgHADgHADQgIAFgIAHQgHAHgFAHQgFAIgDAIQgDAKABAJQABAKADAIQAEAJACAGQACAAAAABQAAAAAAAAQAAABAAAAA1wozQAGgBAFgCQAIgBAJAAQAJAAAIACQAKACAHAGQAIAGADAJQAEAIABAKQAEADAAAGQABAKgBAJQgBAKgDAJQgCAJgGAHQgCADg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mMmJQAJARAMAQQAMAQAMAQQALAOAQAIQARAIASAFQASAFARABQARABASAAQASAAASgDQASgEARgEQAUgEARgKQAQgJAMgOQANgQAHgSQAGAIACAJQAFAQgDgBAhJnZQAMAIANAEQARAEARAEQASAFATAAQAUAAATAAQATAAARACQACAAABAAQABgBABAAQgKgFgJgJQgBAAgBgBQgBgBgCAAQgBgCgDABQgDgBgDgBQgBAAgBAAQgTgCgTgEQgSgEgRAAQgUgCgTgFQgOgFgOgFACDnGQAAAAgBABQgNACgMAFQgCABgCgBABpm+QgBgBgBAAABPnPQAAAAAAAAQgCgBgCAAACCmgQgBgCgCgDQAFACAFADIgHAAIg3gDQASgEAVAAQADABADAAQAEABADAAACCmgQABABAAABQAFAJgFANQgFAOgKAAAg/lwQAAAAAAAAQgFgHgGgFABMlZQADgDAEgEQAEgEAFgDABMlZQAAABAAABIAAABQgCAAgBgBQABAAACgCgABHlhQAFADAAAFAkmqmQAEAEAEAEQABABAAAAQAFAFAFAGQAJANAIAOAkoo6QgBAAgBgBQgJgGgMgDQgSgEgSADQgRADgOAIQgCACgDACQgGAFgFAFQgHAIgGAJQgBABAAAAQgGAJgCAKQgBAIAAAIQAAARAHAPQABADABACQAKASARAKQASAKATgDQAUgEAQgHQAEATAUAHQAWAFAJgPAl7oWQgHAAgIAEQgHAEgDADQgBACAAAAQgCALAEAJQAEAHAHAGQARALAPgQQANgPgNgQQgIgLgLABgAmUoLQgKALALALAmUoLQAFgUAUAJAknpAQgBADAAADQAAADAAAEQAAAEACADQAAABABABAqwqcIEZAZIB2AKAklntIAAAAQgEAHgGAHQAAAAAAABQAFADAEACAminXQgMAOgIARQgFAKgDAKIAAABIjugXAjqjdQgBAAAAAAQgIgBgJgBQgHgCgIgBQgMgDgMgCQgRgEgSgEQgQgFgQgIQgRgJgOgMQgPgMgMgNQgNgPgJgTQgIgPgDgQQgDgVADgVQABgHACgHIAIABAh1iAQABAQgFAOQgGASgFASQgGATgKARQgJAQgLAOQgLAOgKAPQgLAQgNAPQgMAOgOAMQgPAMgSABQgOABgNgFQgTgGgHgUQgGgTAEgTQADgTALgPQAKgPANgNQANgNANgMQANgNALgPQABgCACgCQAJgOACgRQADgSAAgTQAAgTgEgSQgDgQgEgQQAIABAIABQASACARgBQASgCASgCQAMgBAMgBAqYCKICFgJAqYiwIGGgNABKivQgMgMgRgCQgSgEgSAGQgJAEgKAFABogtQgDgEgBgEQAAgEAAgFAkQheQAGACAGACQALACAMAEAhNiAQAAASgHAUQgGARgEARQgEAQgFARQgFASgDASQgCATABASQACAUAFATQAGAUANAQQAKANALAMIAAAAQAIAIAJAGAkFjLIAFBmAgdCVIAEgBQABAJABAKQAAAGABAHQAAADABADQABAKAEAKQADAKAGAIQAKARAIAUQABABAAACQAEACgBADAgdCVQABgJAAgIQACAIABAIAgnCqQAAAAgBAAQgEAGABAKQAAATgEASQgBAFgDAEQgBADgCACQAAADAAADQgBAUABATQAAATgBATQAAATADAUQABAJABAKAghCtQAAABAAAAQgDgCgDgBQAAgBgBAAQgEgDgEgDIAJAGIAGADQABgEABgEQgFABgDAEAgfClQABgIABgIAg2DtQgGAIgLABQgSACgRAIQgSAHgRAIQgRAHgWgBQgQgBgRABQgUAAgTAAQgRAAgRAEQgSAEgUAAQgTAAgUgCQgSgCgSgFQgRgFgSgIQgSgIgUgEQgJgCgJADQgIACgGgBQAAgDAAgCAy9oEIDmjjAzAowIDljfArLtBIABNNAAMEIQACAEABAEQAAgCAAgBQAFARAEASQAEATAGASQAGASAIARQABABAAABAALK2QgCgDgBgCQgKgQgHgSQgIgSgEgTQgFgSgDgTQgEgTgDgTQgDgSgDgSQgDgTgBgTQgBgSgBgRQgBgSAAgTQAAgKgBgJIBjAAAAIK2IADAAIErACAm0LTQAHAJALAGQAPAIAPAIQARAJARAHQARAHASAEQAQAEARAEQATAFAUAAQAQgBARAAQASgBASgCQASgCATgDQAUgDATgDQATgCAUgDQATgCATgHQARgHANgMQANgMAKAAQgBgCgBgDQAAgBgBgBQAAgCAAgDQgCgBgCAAQADAFABABAAZLSQAAAAgBAAQgFgPgIgNAB0PZQAIgUgDgVQgEgUgBgVQAAgLAAgJQABgQgEgOQgEgQgEgQQgDgOgGgMQgGgKgGgJQgIgLgJgMQgLgNgPgJQgJgFgHgEAqYGcICJgNAnjI5QADACABADQACAOAEAPQAGARAGARQAGATAEASQAEAQAEAPQABABAAABAm6LDIAAAAQAAACABABQABAGADAFQABABAAABQAAABAAAAQgGAPgJANQgNASgNATQgJAOgKANQgLAOgIARQgHAOgIAPQgIAQgIAQQAAABAAAAQgBADgCACIABAAQAWgQAagOQANgGAOgBQASAAARACQAVADAUAEQAZAFAWAKQAOAHALAKQAKAKAKALQAEAFAEAFQAFAHAEAIQAFAKADAKQACAIABAIQABAGAAAFQADgBADAAQgJANgHANQgIAQgLAPQgHAMgIALQgIAMgJAMQgKAPgJAQQgJARgJAQQgJAOgHAPQgEAJgEAKQgDAGgCAGQgHAQgGAPQgHASgGATQgGATgHASQgGAQgEAQQgBACAAADQgBACgBABQAAABAAACQgFARgGATQgFASgFASQgFASgBARA9FNhIV9icIAOgCAokOSQgIAKgFALQgHAQgIAPQgCAEgCAEIgEAIQgEAIgDAIQgIASgKARQgJAOgKAPQgLAQgLAQQgKAPgIAPQgKAQgHARQgGAQgGAQQgHASgHASQgFAQgFARQgCAJgCAJIxiCuAoiOMQAAAEgCACAlFVeQgBACgCADQAAgDAAgCQABgGAAgGQADgSADgRQAEgSAFgRQAEgSAFgSQAFgRAGgSQABgEABgFQAFgNAEgOQAGgSAGgSQAFgPAGgQQAFgQAEgRQAFgTAAgUQAAgQABgRQACgRgJgQQABgBAAAAQAOgNAQgJQAEgDAEgCQAMgHANgHQAQgJAUAAQASAAATAAQATAAATACQAUACATABQATACARADQATAEARAFQAUAGAOAOQAGAGAFAIQAGAIAEAJQADAHACAIQAAAAABAAQABgBACgBQAJgKAGgPQABgBAAgBAmOTKIBmgQAkOPyQAAgBABAAQAHgRAMgMABhP2QAAAAgBABQgHAMgJALQgMAOgIARQgJARgJARQgJARgJASQgIAPgIAQQgIARgKAQQgHALgFAMQgCAEgCAFQgGARgGARQgGARgDASQgDAMgCALQgBAEgBAFQAAACAAADQgDANgCAMQgBAEgBAFQgBABAAADArJKHIAAALAvKJJICki6AwnJbID9j0AyXEMIAAAAQAAgBAAAAQAAAAAAABgAyYEPQAAANACANQACAKAAAKQAAAGABAGQAAAIAAAIQAAAJgBAJQAAAIgBAIQgBAIgCAJQgCAJgCAKQgBAIgCAHQgCAIAAAHQgBAKgCAKQgBAIgBAIQAAABAAABQAAACgBABQgBAHgCAHQgDAIgBAIQgCAJgCAIQgCAKgDAJQgCAJgDAIQgEAJgDAJQgDAHgBAHQgEAIgBAIQgCAKgCAKQgDAJgBAKQgCAIgCAJQgBAJgDAJQgCAHgDAHQAAACgBABQAAACAAACIAAAAIABAAIIYhBIAAoIAsEXaQAAgFAAgDQABgTAEgTQAFgTAEgSQAEgRAGgPQABgCABgDQABgDABgDQADgUAEgTQADgSAEgSQADgLACgKAg7VVQACAGgFAHQgEAOgEAPQgFAPgCAQQgDATgGASQgDAKACAIAlFVeQADgEACgDQAJgNAJgNAlLXaQAAgLAAgKQgBgSACgSQACgRACgSQACgQgBgQAsEXaIEiAAICXAAID0AAIHzAAA7TEzQAAgBAAgCA6+MBQgBAEgBAEA9NMTIgUACA9NMTIAAALA6+MBIiPASA9NJHIAADMApIPWI0KDFEAgagXZMhA8AAAMAAAAuzIUeAAAFGPuIjSgVAgWTJIF2Az");
	this.shape.setTransform(-13.2,-24.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AskBWQgJgBgJgEIgQgIQgIgEgEgHIgJgQQgEgJAAgKIAAgRQAGgJAHgHIAIgHIADAEIgHAIIgGAIQgDAFACAFQAGAaATATQAFAFAGADQAJAEAJAAQANABAOgDQAKgCAJgHIABAAIgBAAQgEACgEgBQgKgCgHgIQgFgJgBgKQgBgJADgJQADgJAHgFQAIgFAJgBQAHAAAEADIgBgBQgFgIgIgEIgJgEQgQgHgSgBIgBAAQgKAAgLACQgGABgGAEIgEACIgCABIAEgDIAIgHIAJgCIAUgHQAJgCAJgBIAHAAIAIABQAJADAIAFIAPANQAIAGADAJQAEAIACAJIABALIgBAHQgBAIgCAGQAHgIAJgDIARgFQAHgBADABIABACIAFAKQgHACgGADIAAAAIgIAAIgMACIgWAIIABgBIADgGIACgEIgCAEIgDAGIgEACIADgBIgHAJQgDAFgGADIgHADIgSAGQgJACgJAAQgJAAgJgCgArhAqQgDAIgFAGQgDAEgEADQAEgDADgEQAFgGADgIQACgGAAgGIAAgCQgBgMgFgKIgDgGIADAGQAFAKABAMIAAACQAAAGgCAGgAJBBSQgTgFgQgKQgQgKgHgTIAAgBQgDgJACgIQgGgIgKgIQgQgLgTAIIAEgHIAAAAIADgFQAOgIAQAJQANAHAEAOIgDAJIADgJIAAAEIAIAAQgDAQAGAPQAIASATAFQASAEATACQATACASgHQATgIAKgRQAKgRgDgVQgCgRgMgPQgNgRgWgBQgUAAgSADIgIACQAQgGASgCIAOAAIATAFIARADQAKAGAHAJQAJALACAMIABABIABAJIAAAEIAAAHIgGgEIAGAEIAAgHIAAgEIgBgJIAcAJQATAGAUABQASABASAEQATAEATACIACAAIAHACIADABIAAAAIADABIACABQAKAIAJAGIgBAAIgEAAQgRgCgTAAIgnAAQgTAAgTgEIgigJQgNgDgLgIQgCAOgKAMQgLANgNALQgQAMgUACIgIAAQgPAAgQgDgAFzA4QgRgKgKgSIgCgFQgHgPAAgQQAAgIABgIQADgKAFgJIABgBQAGgJAHgIIALgKIAGgEQAOgJAQgCQASgDASAEQAMADAKAGIABABIAAAHIACAHIABACQgNgOgTgCQgSgCgUAEQgJACgJAFQgIAEgIAHQgHAHgFAIQgEAIgCAJQgDAUAKAQQAKAQAPAKQAPALASABIADAAQARAAANgIIABAJQgQAHgUADIgJABQgOAAgOgHgAp3A6IgBgBIgHgGQACgBAEAAQAKAAAJgBQAJgCAJgFQAHgEAGgGIAFgEIAIgJQAFgHAEgIIAGgQQADgGAAgHIgBgEQAEADAAAGQABAKgBAJQgBAJgDAJQgCAJgGAHIgFAFIgJAIQgHAFgIADIgBABQgJADgKABIgGAAIgPgBgAImAwQgQgJgEgVIAAgIQAGgUARABQgEADgDAFQADgFAEgDQAHgEALAGIAIAGQAKAIADAQQADAPgMAIQgIAHgJAAQgHAAgJgFgApUATQgFgIgBgJQgBgJAEgKQAEgJAIgGQAHgGAJAAQAJAAAFAFIABACIADACIABAEQAAAHgDAGIgGAQQgEAIgFAHIgIAJIgBAAQgKAAgHgJgAFwAFQgHgFgEgGQgEgJACgLIABgCQAEgEAGgDQAIgEAHAAQALgBAIALQANAQgNAOQgIAJgKAAQgGAAgIgFgAopgdIAAAAg");
	this.shape_1.setTransform(-89.3,-74.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6400").s().p("AP1CuIgCgIQgCgJgDgGQABAMgDALIgDALQgFALgJAGQgBgOgFgPIAAAAIgBgCIgEgNIABAGQAAAEACADIACACIgOgBIgEAAQgDgSgPgMQgOgMgSABIgIABIAEgGQAOgOADgSIACgPQADgKAAgLIAAgEIAAgHIAAAHIAAAEQAAALgDAKIgCAPQgDASgOAOIgEAGIgBAAQgNACgNAFIgCgBQgJgFgKgIIgCgCIgCgBQgBAAAAgBQgBAAAAAAQAAAAgBAAQgBAAAAAAIgHgBQgBgDAAgHQAAgMgKAEQgTAHADgOQACgKAGgHQADgDACgIQACgHgBgJQgJgJAQgOIACgCQgKAHgLADQgbAJgcAEIgdAEQgOACgOAAQgSAAgRgCQgGgDgGgCQgMgDgMAAQgigNgZgcQgRgTgEgaQgCgLAFgJIgEABQgLAEgLAIIgEADIgIAGIgUATQgNAMgHAOIgCADIABgDIAAAAQAGgRADgRIACgQIAAgDIAAAAIgCgHIgDgHQgEgFgFgFQgWgSgdAFQgfAGgbARQABgbAZgNQgVAFgNAQQADgNAKgMIAKgKIABgBQAUgRAbgFQgRgIgRAGQATgVAagDQgQgLgUAGQANgMAVgDQATgCARAFIAOAFQALAFAJAGQAPAMAOANQAOAOALAPQAFAIABAIQAOgKAPgHQASgIAUgEQARgDASgBQATgBASABIAhADQAVABAOANIAKAMIgBADIgCAGIACgGIABgDQAFgJAIgJQANgPAOgNQAOgMAQgFQAUgHAUAFQARAEANANQAMANADARQgPgIgVgEQgUgEgVADQgXAEgMATQgKAOgDAPIgCAHIAEgBIAegLIADgBQAegKAfAIQAjAJADAhQACANgDAKQgBgEgMgBIABAGQABAUgDARIAAAAQgDAPAAAPQAHgSAPgLQAPgMASgFQATgEAUgBQAVgBAPANQAOAOAIASQAHAQgCASQgBASgHARQgDgSgMgOQgLgMgOgHQAKARAEAWQAEAUgHASQgIgHgIgNIAHAWIAAABIADAHQAEAOgFANIgBABIgBADQgHAPgMALIgJAIQACgSgDgSgANGAaIANgKIgNAKgANVhCQARABAPAEQARAFAQAJQAOAIADANIAAAAIAAAAQgDgNgOgIQgQgJgRgFQgPgEgRgBQgSgCgOAFQAKgDANAAIAJAAgAHnhUIABACIAJALIARAbIgRgbIgJgLIgBgCIgJgHIAJAHgAISgzIAFgKIACgHIABgDQgCgcgPgSQgHgIgIgHQAIAGAHAIIABAAQARATAJAYIAEALQAFgGAIgFQADgIAAgIIAAgBIAAgDIAAADIAAABQAAAIgDAIQgIAFgFAGIgEgLQgJgYgRgTIgBAAQgHgIgIgGQAIAHAHAIQAPASACAcIgBADIgCAHIgFAKIgTgcIATAcgAHfh2QAKAJAJAMIAMARIgNAJIAOgIIgBgBIgMgRQgJgMgKgJQgDgDgCAAIgBAAIAAAAQgDAAAAAFQAAgFADAAIAAAAIABAAQACAAADADIAAAAgAvdCNIgCAAIgEgBIgGgCIgKgFIgEgCQgKgBgKACQgGABgFACIgDAAIgDgHIgHgPQgFgIgBgIIgFgSQgDgIAGgIQAEgFACgHQABAAAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBIgBgBIAAgBQABgDgBgEIgCADIgDAFIgBAEQgDgJABgKIABgEQABgIADgIIACgHIgIAKQgDAFgCAIQgEgMABgNIACgMQACgKAGgJIAGgKIgGAHQgFAIgDAJIgEAOIgBgDQgEgHAAgIQABgMAEgKIABgEQAGgNAKgIQgNAHgIAKIAAAAIgEAFQgBgQAIgMIACgCQAIgMAKgJQgOAJgIAJQAAgJAEgHQAJgSAQgNIABAAIABgBQAMgIAOgDIAGgCQgCgBgEAAQgQACgNAFIgBAAIgBABIgLAEIAHgGIACgCIAOgJQAIgFAJgCIAHgBIAAAAIAJAAQAJAAAJADIASAFIATAGIASAGQAGACAGAGQAGAHACAJQABAJgDAHIAAABIAEgKQADgJAJgFIAQgGIAQgFIARgFIASgEIARgDIASgBIAQgBIAQgBQAJgBAIABIAUAEIAQADIANADIANADQAJABAGAFIABgFIACgKQAAgJADgJQADgIAFgIQAFgIAIgGQAHgGAIgEQAIgFAIgDIATgFIASgCQAKgBAJADQAJACAIAGIANAMIACACIAEAGIgIgDQgGgCgHAAQgJgBgJACQgJABgJAEQgIACgHAEIgQALIgNAKIgLAMIgJAMIgBADQgFAIAAAJQAAgJAFgIIABgDIAJgMIALgMIANgKIAQgLQAHgEAIgCQAJgEAJgBQAJgCAJABQAHAAAGACIAIADIAFAHQAEAIAAAJIgEgEIACADIADADIgBgCIAHAHIABACIABABIgBAAIgCAAIgBAAQgGgEgHAAIgEAAIgDAAIAAAAIgBAAIgFAAIgHAAIgSACIgRAEQgJABgIAEIgOAHIgNAHIgLAFIALgFIANgHIAOgHQAIgEAJgBIARgEIASgCIAHAAIAFAAIABAAIAAAAIADAAIAEAAQAHAAAGAEIABAAIACAAIABAAIAEAGQADAFABAFIgBALQgDAAgGgFIgJgIIAFAOIADAKQACAHgBAHQgBAGgDAGIgDAHQgCgEgFgEIgOgLQgKgIgLgGQgNgIgPgCQgMgCgNABQgKABgKAFIgMAJIgCACIgFAGQAAAAgBAAQAAABAAAAQAAAAAAAAQAAABABAAQgBAAAAABQAAAAABABQAAAAAAAAQABAAAAABIAEAMIACAQQAAAJgDAIIgGAOIgBACQgEAIgHAHIgOAMIgOAJIgMALQgHAHgJAGIgOAJQgHAGgJAEIgMADIgKgBQgKgBgJADQgJACgJAFIgGAFIgJACIgPADIgQAEQgKABgJgBQgKgBgJgDQgIgDgHgEIgPgMQgHgGgEgIIgKgQIgJgQQgEgHAAgKIgBgGIABgMQABgJAFgIIALgOQACgDADAAIAAAAIABAAQAAAAABAAQAAAAABABQAAAAABAAQAAABABAAQACADAEABIAJACIgJgCQgEgBgCgDQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAIgBAAIAAAAQgDAAgCADIgLAOQgFAIgBAJIgBAMIABAGQAAAKAEAHIAJAQIAKAQQAEAIAHAGIAPAMQAHAEAIADQAJADAKABQAJABAKgBIAQgEIAPgDIAJgCIgJAGIgDAEIgCABIgIAIQgHAIgGAJIAAAAQgEAGACAHIgEAAIgFABIgHAAQgSAAgRADQgSADgRAGIgPAHQgPAGgOAAIgGAAgAwKAvIACASQABAJADAIIAIAPQAEAGAFAFQAGAHAIAEIAJAFIgJgFQgIgEgGgHQgFgFgEgGIgIgPQgDgIgBgJIgCgSIAAgLIAAALIAAAAgAvXBtIADACQgDgFgGgCIAGAFgAv8AwIAFANIAJASIAEAJIAEAGIAJAKIgJgKIgEgGIgEgJIgJgSIgFgNIgDgPIADAPgAv6ASIABAMIAAABQADAIAEAGQAEAIAFAHIAKANQAFAHAIAGQAHAFAIADQgIgDgHgFQgIgGgFgHIgKgNQgFgHgEgIQgEgGgDgIIAAgBIgBgMIAAgBQAAgGADgBIABAAIAAAAIADABIABABIABAAIgBAAIgBgBIgDgBIAAAAIgBAAQgDABAAAGIAAABIAAAAgAu9BMIAGAEIgBgDIgCgBIgDAAgAvjAKIACAIQACAJADAIIAIAQIAIANQAFAGAHAEIADACIgDgCQgHgEgFgGIgIgNIgIgQQgDgIgCgJIgCgIIAAgKIAAAAIAAAAIAAAKgAvOAEQABAKADAKIAGARIAHAPIAEAHIAEAEIgEgEIgEgHIgHgPIgGgRQgDgKgBgKIgBgKIABgIIABgQIgBAQIgBAIIABAKgAvFhEIgOAEIgPAEQgJADgHAGIgNAOQgHAHgGAIQAGgIAHgHIANgOQAHgGAJgDIAPgEIAOgEIABAAIABAAIAAAAIAIgBIACAAIAAAAIADAAIABAAIgBAAIgDAAIAAAAIgCAAIgIABIAAAAIgBAAIgBAAgAvYhQIgSAEQgJACgHAFIgQALIAQgLQAHgFAJgCIASgEIAAAAIAIgBIABAAIAAAAIADAAIADAAIASADIACAAIAAAAIADABIADAAIABAAIAAAAIABAAIAAAAIADAAIABAAIABgBIABAAIAAAAIABgCIAAgDIAAgDIAAADIAAADIgBACIgBgBIgCgBIAAgBIAAAAIgHgGIgDgEQgDgEgFgDIgMgFQgJgEgJgBQgIgBgJAAQgJABgJACQgKACgBAHQABgHAKgCQAJgCAJgBQAJAAAIABQAJABAJAEIAMAFQAFADADAEIADAEIAHAGIAAAAIAAABIgDADIAAAAIgBAAIAAAAIgBAAIgDAAIgDgBIAAAAIgCAAIgSgDIgDAAIgDAAIAAAAIgBAAIgIABIAAAAIAAAAgAvFh2QAIAEAGAGIAKALIAHALIgDgFIgBgDIgDgDIgKgLQgGgGgIgEQgKgFgHgBQAHABAKAFgAqfhvQgFgDAAgGIAAgBIAAABQAAAGAFADgAFug9QAbgRAfgGIg7AbgAGohUg");
	this.shape_2.setTransform(-90.5,-83.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("ANMIuQgEgJgFgIIgMgOQgOgOgTgGQgSgFgTgDQgSgEgSgCIgngDQgTgCgUAAIgkAAQgUAAgQAJIgZAOIgJAFQgQAJgNANIgBABQgNAMgHARIAAABIgHABIAAgLQgBgIgDgHQgDgLgEgKQgEgIgFgGIgJgLIgTgVQgLgKgOgHQgXgKgYgFIgpgHQgSgCgSAAQgOABgMAGQgaAOgXAQQACgCABgEIAQggIAOgdQAJgRALgOIATgbIAZglQAKgNAGgPIAAgBQAGAJALAGIAfAQQAQAJASAHQARAHARAEIAhAIQAUAFATAAIAigBIAjgDIAmgFIAmgGIAngFQAUgCASgHQASgHANgMQANgMAKAAIgCgFIAAgCIgBgFIAQAJQAQAJAKANIASAXIALATQAHAMADAOIAIAgQAEAOgBAQIAAAUQABAVADAUQAEAVgIAUIgBACQgGAPgKAKIgDACIAAABQgCgJgEgHgAGGidQgTgCgRgFQgSgFgSgIQgSgIgTgEQgKgCgJADQgIACgFgBIgBgFIABAFQgNgCgCgQQgCgTACgTQABgUAHgTQAGgTAJgQIAUghIACgEQAJgOANgLQANgNAQgLIAfgTQAPgJAMgNQANgOALgOQAMgOAIgQQAIgRARgLQALgHAJACIAEAAIAMAEIAWAGIgDAEQgLAPgNANIgaAZQgMANgLAQQgKAPgEATQgDATAGATQAGAUAUAGQANAFAOgBQARgBAQgMQAOgMAMgOIAXgfIAVgdQAMgPAJgQQAKgRAFgSIAMglQAEgOAAgPQAPACASgBIAHgCQAAATgHATQgGARgEARIgJAhQgGASgCATQgDATACASQABAUAGATQAGAUAMAQQAKANAMAMIAAAAQAIAIAJAGIAIAGQgEAGAAAKQAAATgEASIgDAJIgDAFQgGAIgMABQgSACgRAIIgjAPQgRAHgVgBIgiAAIgmAAQgSAAgRAEQgSAEgTAAQgUAAgTgCgAo9ibIgTgBIgSAAQgKAAgJgCIgSgBIgSgCIgSgBIgSAAIgRgCIgQgDIgQgDIgTgEQgJgDgJAAIgSgCIgRgCIgQgCQgJgBgIgCQgJgDgCgLIgBgJIgCgKIgFgPIAHgJIAIgLIAHgNQAGgKABgMIACgVIABgOQABgJgBgKIAAgEIgBgIIAAgDQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAAAIAAgIIgBgSIgCgSIABgTIABgSIACgTIABgTQAAgKgCgJIgGgRQgDgIgFgFIAKABIASgBQAHAAAFgDIACAEIABABIAFAKQAFAIACAKQADAIACAJIACASQACAKAEAJIAHASQADAIAHAGIANALIAOAKQAHAGAJAEQAIAEAJACQAJACAJgBIAUgCIASgDQAJgDAGgHQAHgHACgJIAEgTIABgTIAAgUQAAgJgCgJIgGgTIgHgQIgHgRQgDgHgCgJQgBgJABgKQAHgDAIAAIADgBQgEAJACANIAEAUIAFAQIADAKIAEAKQADAHAFAGQAFAIAHAHIAMALIANALIAPALIAPAKIAOAKIAOALIAQALIAMAKIAAAAIADACQAGAHAGAIQAFAGACAGIABAAIAAAAQAEAIACAIQADAJAGAIQAFAIAEAIIAHASIAFAQIAFATIADARIADATIADATIADATIAAABIAAABIgFADIgBgBIAAABIgFACQgIAEgKABIgTACIgTACIgSABIgPABIgTACIgTACIgTAAg");
	this.shape_3.setTransform(-88.5,19.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ApuJ4QgTgBgQgLIgHAAIAAgJIAAgLIAAgbIgBgbIgBgLIAAgGIAAgDIAJgDQAVgGAVgEIASgCQAJgBAJACQANADAIAKIAFAIIADAGQADgFAFgDQARgNAVgFIAggJIAJgCQAGgBAGACQATAIASALIALAIQAEADABADQALgZAagNQATgKAWgEQAKgCAKADQAVAFAPAQQAFAGADAGQAMgOAPgKQAPgJASgFQAQgFAQAHQAPAGALAMIATAWIAEAFIgEgFIAUgRQAPgNARgIQASgHASAAQASAAAQAJQAQAJALAOQAIALAFAMIAKgIQALgLAPgGQAMgFANADQAWAGAVAIQAOAFALALQAEAAACgDIAOgKQARgLAUgEQAUgEATAFQAQADANAKQAIAFAKgJQAXgTAdgEQAYgCAXAIQANAFAMAGIAJAGIAEgGQAEgGAIgFQAKgJAOgDQANgDALAFQAGAEAFAFQAKANASgLQAEgCAFAAQARAAAQAHIASAKQAGADACAEQADAMgLAEQgKAEgJACQgMABgLgDIgtgPQgLgEgIAIQgFAFgEAGIgJANQgOAPgXACIgjAAQgWAAgSgKQgZgPgZARQglAYgpgHIgQgDQgVgGgTgLIgDAHQgDAHgGAEQgMAJgOAGQgJAEgLAAIgGAAIgBgKQgKgIgTAKQgHAEgEAFIAAAAIgigDQgSgIgTgBQgMgCgMAGIgIADIg8gBIgNgFQgPgGgWACIgIADIgOAEIgLACQgQADgRgBIgNgBQgVgCgVgDQgSgEgRAEQgJACgFgGQAAAHgGAEIgKAGIgDgDIAAAFQgKAGgMADQglAIgagZQgJgJgIgKQgLAOgSAHIgMAEIgWAHQgRAFgQAAQgUAAgSgHQgTgHgPARQgNAOgTAAIgEAAgAmjBaQgCgGgJgGQgPgLgTACQgTABgSAEQgTAFgSAKIgSAMQgMgKgKgMQgMgPgQgKQgQgKgTAEQgPADgLAKQACgGgFgKQAEgCgFgEIgBgPQABAAAAAAQAAAAAAAAQAAgBAAgBQABAAAAgBQAAgFAEgIQAGgQAFgSIALgjIALggQAFgRAHgQQAGgRAEgRQAEgRABgSIACgiQAAgUgDgTQgDgTgGgSQgFgQgJgQIgSgdIABgNIURA5IAAAWIgIAAIAIAAIAPgBQAFALADAMIgJAEIgcALIAGAJIACAEIgBAEIAAACIAAAPQAQBcAABeQgBBdgQBggAnsAbICogrgApFAOIDIhYgAmqjuIifhdgAmGkaIh8g+gAivmyQgDgBAAgEQgDgUARgVQATgJAEgQQAEgSAOgMQAMgLAPgEQARgGASgCQAYgDAWAJQAHADADgGQAHgNAOgFQASgHATgCQAWgCAUAJQAJAEAJAAQAGAAAGgFQAKgJAPgDQASgDASAAQATAAASADQAaADAXAKQAPAHAMgTQAIgPAOgIQARgJARgFQAQgEARABQASACAPAHIAlAPQASAHARgJIAjgRQATgKAVACQAHABAFAEQAKAJARAFQAUAGASgGIADCpIgJAAQgJgGgLABQgQABgPAGQgSAGgSgCQgUgCgPgLQgQgNgSgLIgYAPQgRAKgTADQgVADgUgHQgZgJAEgZQACgJgKgCQgOgCgNAFIggANQgPAHgQADQgWAFgXABQgUABgVgEQgXgFgSgOQgNgKgPAJQgQAKgSAFQgUAFgVgDQgKgBgIgHQgKgIgKAEQgPAGgOAJIgfATQgPAIgQAEIgfAGIgOABQgSAAgQgHg");
	this.shape_4.setTransform(97.7,-53.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006600").s().p("Ag/BxQgKgQgLgQIgUgcQgMgRgSgHQgOgHgPgCIAAAAIAAgBIADghIADgoIABgGIAAgFQAFgKAAgKIDJgVQAIgEAKAEQADAPAOgMQAIgIADgHQABgDAEgBQAEANAKAIQAGAEAGAAQAGAKAKAIIAFAJIAAAAIAFAMQAGAOADAQIACAXIAAAOIgDgFQgIgQgRgKQgQgJgRgHIgYgKQgVgHgVgEIgbgGIgBAAIgOgEQAHADAHAFQATANAQAPQAMALAJANQALARAIAUQAEANgBANQgBAQgGAHQgGgMgJgMQgLgPgSgHQgSgHgSgHQgRgFgQgHQgPgFgMgKIgEgDIAEADIAFAmQACANgBAMIgFAhQgDAUADARQgCgFgCgFg");
	this.shape_5.setTransform(46.3,-111.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CC9900").s().p("AeCXaIgBgJIgDgMQgEgMgGgMQgIgRgCgUIgDghIgHghIAAgBQAAAAAAAAQAAAAgBgBQAAAAAAAAQgBAAgBAAIABACIACAAIAHAhIADAhQACAUAIARQAGAMAEAMIADAMIABAJIhEAAIAAgLIgBgSIgCgmIgBglIAAgWIAAAWIABAlIACAmIABASIAAALIhYAAIAAgDQAAABgGgCQAAgUAJgTQAIgRAFgTQAFgTACgSIADgiIACAJIAAgHIgCgkIgDgkQgCgPAAgQIgBgkIgCgkIgCgfIAAglQAAgWgDgWQgCgSAAgTIADgfIADgjQACgVgBgPIAAgGIACAAIAYABIAAgEQAEgTgCgNIgBgFIABgDIACAAIACAAIAEABIAOACIAAAAIAAAAIANgBIADgBQARgDAAgOQgBgFgCgHIgGgSIAAgHIAAgHIgDgSQgEgSgCgSIgDgnIgCgkIgBgmQAAgTACgUIACgXIgBgMIAAAAIAAgBIAAgXIAAgNIACgmIACgZIAAgIIAAgCIAAgCIAAgBIAAgCIAEgnIADgcIAFgqIADghQACgQAAgRIAAgdIAAgMIABgCIgBgQIgBg0IABA0IABAQIgBACIAAAMIAAAdQAAARgCAQIgDAhIgFAqIgDAcIgEAnIAAACIAAABIAAACIAAACIAAAIIgCAZIgCAmIAAANIAAAXIAAABIAAAAIABAMIgCAXQgCAUAAATIABAmIACAkIADAnQACASAEASIADASIAAAHIAAAHIAGASQACAHABAFQAAAOgRADIgDABIgNABIAAAAIAAAAIgOgCIgEgBIgCAAIgCAAQgMgEgKgJIgHgHQgJgKgDgMIgBgFIAAgEIAAgCIAEgiQACgRADgSIAHgjQAEgRACgTIAEgmIAEglIABgiIgBgnIgBghQgBgUgEgQIABgJIABgaIABgVIgBAVIgBAaIgBAJIgCAAIAAgJIAAgBIAAgmIAAgnIAAgVIgCgSIgDgVIgBgFIgDgMIgJgmQgEgQgHgPQgJgTgKgHQAMgMAQgGIAQgGQgCgKgGgKIAdgNQAOgGAQgFIAFgBIAWgGQgLhCgHhDIAAAAIAAgBQgLhsAAhsQAAg3ADg3QAGhrAPhrIgDgPIAAgDIgBgFQgEgIgLgDIAAAAIgCgBIgMgBIgBAAIgBAAIgBAAQgJAAgJACIgZAKQgDgLgFgLIBTgEQgOhigEhiQgBgoAAgpQAAhnALhnIAPgCIAAAAIAAAAIABABIABAAQAGAFAHAAIAAAAIABAAQAHAAAHgEIAAgBIgegBIgPACIACgQQAFAHAFAFIADACIgDgCQgFgFgFgHIgCAQQgLBnAABnQAAApABAoQAEBiAOBiIhTAEIgPAAIAAgWIgCh2IAAgCIgDipIgDinIBigJIhiAJIAAgoIAAAoQjMgpitBJIgEACIgOACQgMAAgMgCQgUgDgHgUIAAAEQgDARgMAPQgIALgGgKIgGABQkTguj7BiQAJgEAEgGQgEAGgJAEQgGADgJADIgBgCIgHAAIACACQgHAAgGgEQgKgIgEgNQgEABgBADQgDAHgIAIQgNAMgEgPIAHADIgHgDIAAgHIAAgHQAAgMACgMQAGgVAKgRQgKARgGAVQgCAMAAAMIAAAHIAAAHQgKgEgIAEIjJAVIAAgDIgBgGIABAGIAAADIhhAJIhRAJIACgGIAGgOIgGAOIgCAGIBRgJQAJASACASIADAkIAAAAIAAABIAAAAIAAAAIAAgBIAAAAIgDgkQgCgSgJgSIBhgJQgBAKgFAKIAAAFIgBAGIgDAoIgDAiIAAABIAAAAIgCAeIgBAaIgBAOIgCAQIgEAeIgEAkIgEAmIgBAkIAAABIAAAFIACAWIgBAGQgDARgCATQgBASADAUIAEAgIABAEIAGAkIAIAkQACAJgEAKIgBABQgGADgIACIgTADIgIABIgGAAIgCAAIAAAAIgCAAIgCAAIgHgBQgPgDAAgSIAAgCIAAgLIADgcIADgkIABgmIAAgCIAAgBIABgjIABgRIgBgRIAAgRIABgWIgBAHIABgHIABgGQADgNACgNIAAgBQgQgEgPABIgnAEQgSACgSAAQgPAAgPgDQAPADAPAAQASAAASgCIAngEQAPgBAQAEIAAABQgCANgDANIgBAGIgBAHIABgHIgBAWIAAARIABARIgBARIgBAjIAAABIAAACIgBAmIgDAkIgDAcIAAALIAAACQAAASAPADIAHABIACAAIACAAIAAAAIACAAIAGAAIAIgBIATgDQAIgCAGgDIABgBIAAABIgBABIAAABIgBABIACgBIACAWIAAADIABAQIACAgIADAaIAAAFIABAHIAAAEIABAOIABAGIABASIgDAEQACAKAGAIIgDACQgJgHgQABIgIABQgPACgOAHQgKAFgDAHQgEAHADAJIABACIAAAAIAAAAQgHgBgHAAIgFABIgLADQgLAFgEAHIgCAEQgCAGABAJQACASgOAMQAFAIAKAEQAUAJAVgbIAHAHQAGAGgCAGQgBAGgIAHQgPAMgCATQgCARALAJQgNAPgFARQgFASgKAPIgQAbIgRAeQgKAPgHAQIgCAGQgHAPgEAPQgFARgHAQIgQAiIgNAYIABAAIgCAGIgIAYIgLAdIgIAUQgFANgIALIgIgbIgKglQgFgQgBgSIAAACIgJgmIgJgkIgHgjIgDgPIgFgYQgDgTgCgSIgEgiIgFgmQgCgQABgSQAAgLgCgKQgBgJgDgIIAAgEIgCglQgBgTgEgRQgEgRgLgOIAAgEIgEgBQgMgMgRgDQgSgDgSAHQgJADgKAGIhkgEIBkAEIgOAJQgRANgPAPQgKAJgLADIgGABQgTACgPgDIgBgIIgDgmIgBgGIAAAAIgCggQAAgHACgGIAJgBIAjgGQAQgEAPgKQAIgFAKgFQAPgIAQgFQASgFAQgKQAQgKAKgPQAKgQAEgRIAAAAQASABASgEQASgEARgGQARgIAOgNQAPgOgDgVIAAgCIAEAAIgEABIAGADIAHAFQAAgDAFgFQAFAPABAOQAJgHAEgKIAEgLIAIAAQADASgCASIAJgIQANgMAGgPIACAAIBDADIhDgDIAAgEQAFgNgEgNIgCgHIAIgDQAHgTgEgUQgEgVgJgRQAOAGAKANQAMAOAEARQAHgQABgSQABgSgHgQQgHgSgPgPQgPgNgVABQgTABgTAFQgSAFgPALQgPAMgIARQABgPACgPIAAAAQAEgSgBgTIgBgGQALAAACAFQACgKgBgOQgDgggkgJQgfgJgeALIgDABIgdAKIgEACIABgHQAEgQAJgOQANgSAXgEQAUgEAVAFQAUAEAPAHQgCgQgNgNQgMgNgSgEQgUgFgTAGQgRAGgNALQgPAOgNAOQgIAKgEAJIgLgMQgMgOgVgBIgigCQgSgCgSACQgSABgSADQgTADgSAJQgQAGgNALQgBgJgGgHQgLgPgNgOQgOgOgQgLQgJgHgKgEIgBg8IKGgsIqGAsIgGiIIgBgRIIIgPIoIAPIgIjLIAIDLIgaABIgCAIIrwi6ILwC6IAdAIIAGCIIgHABImahOIgBAAIs1ibIM1CbIABAAIGaBOIAHgBIABA8IgOgGQgSgEgSACQgVACgNAMQAUgFAPALQgaADgSAVQARgGAQAIQgaAFgVARIgBABIgKAKQgJAMgEANQAOgQAVgFQgaAMgBAcIAAAEIA7gbQAcgFAWARQAGAFADAGIAEAGIABAHIAAABIABACIgCAQQgEASgFASIAAAAIgBADIgBAGIgCgBQgJgGgMgDQgSgEgSADQgRADgNAIIgGAEIgLALQgHAHgGAJIgBABQgGAJgCAKQgBAIAAAIQAAARAHAPQgMAOgIARQgFAKgDAKIAAABIjugXIDuAXIgDAOQgDAVADAVQADAQAIAPQAJATANAOQAMAOAPAMQAOAMARAJQAQAIAQAFIAjAIIAYAFIAPACIARADIABAAIAHAgQAEASAAATQAAATgDASQgCARgJAOIgWgHIgNgDQgHgQgPgMQgOgNgTgEQgJgDgKgBQgJAAgKACQgTACgSAIQgTAGgSAIIggAOQgQAGgRAFIggAKQgSAFgPAKIgdATQgRAKgSAIQgRAJgRAKQgRAKgSAHIgMAGIgBtNIAJABIgJgBIAAAAIyBimIgKgCIAKACIgBAHIAAS7IgDAIIADgEIAAFoIAADMICPgSIHbg5IABAAIABAAIIYhBIAAALIAAgLIAAoIIABgBQAPgEAOgGIAGgDIAXgOQAQgJASgHIAhgNIAkgNQAPgGAPgKQAQgJAWgJQAJAFgBATQgBATADAUIgDADIgTAhQgKARgGATQgHASgBAUQgBAUACATQABAQANACQAAAPgCAQQgDATAAASQAAAQACARQACASgBARIgBAKQAAAMABAMIADAnQABATADATIAIAlQADAQAFAQIACAFIACgBQACAPAEAPIAMAhIAKAmIAIAfIgNADI19CcIV9icIAOgBIABADQABAGADAEIABADIAAABQgGAPgJANIgaAlIgTAbQgLAOgIAQIgPAeIgQAgIAAABIgDAFIABAAQgIAKgFALIgTAnIgEAII0KDFIUKjFIgHAPQgIATgKAQIgTAdIgWAhQgKAPgIAOQgKAQgHASIgMAfIgOAkIgKAiIgEASIxiCtIRiitIgFAUQgEATgDASIgHAnIgCAGIgCAFQgGAPgEARIgJAlQgEASgBAUIAAAII0eAAMAAAguzMBA8AAAIAJAAMAAAAuzgAdXWKIAGAeQACALABAMQgBgMg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gFQgKgRgHgSQgIgRgEgTIgIglIgHgmIgGgkQgDgTgBgTIgCgjQgBgTAAgSIgBgUIBjABIhjgBIgCgTQgDgTAAgTQABgUAAgSIAAgnIAAgGIAEgFIADgJQAEgSAAgUQgBgJAEgGIABAAIAGAEIAAgBIACgIIACgQIAEgBIACATIABANIABAGQABAKAEAKQADAJAGAJQAKARAIATIABAEIADAIIAAgDIAJAjQAEATAGARQAGATAIARIABACQAIAQAGAQIAOAkIANAkIAQAhIAQAhQAIAWAVAAQATAAAPgKQAQgLAOgNQAOgOAJgSIALgWIAQgjIAAgBQADgGgDgEIAEgIQAHgRAJgSIAGgMIAKgUIAOggQAHgQAFgSQAGgSAEgTIAEgYIABgFIABgFIAEgaIAEgNQAFgTAHgSIAGgNIABgDIAKgRIAQgfIACgEIARgkQAFgJAGgGQAGgGAJgDIgDAEIADgDIgHAhIgCAQIAAABIgBAXIACAnIADAnQADASABAUIACAcIgEABIAEABIAAAGIABALIABAbIAAAbIAAALIAAAJIAAABQAAAOADAOQADATAAASIABAMIgIgCIAAAAIgBgBIgJgDIgBAAQgKgEgJAAIAAAAIgBAAQgMAAgMAGIAAAAIgBAAIgBABIAAAAIgBAAQgOAIgLALIgBgHQAAgFACgFIAHgUIADgIQAGgNAEgMIAAAAIABgEQAFgQAAgSIgBgLQgCgZgMgZQgFgMgDgMQADAMAFAMQAMAZACAZIABALQAAASgFAQIgBAEIAAAAQgEAMgGANIgDAIIgHAUQgCAFAAAFIABAHQALgLAOgIIABAAIAAAAIABgBIABAAIAAAAQAMgGAMAAIABAAIAAAAQAJAAAKAEIABAAIAJADQgFALACAKIADABIACABQATAGgQASQgNAOgEASIgEAXIAAABIgBAMIgDAVIgEARIgEAXIACgCIAAALIAAAAIgBAMQgBASAAASQAAAUgDAUQgDASABATQAAATgDASQgEATgBATQgBAUABATQABATgBATIABAnQABATADARIgDAAIABABQADADAAAEIAAAWIABAWQABAFADAEIAIAJIAJAJIgTAAIgOAAIAAAqQAQAAAQgBIAAAFQgBATgCATIgGAlIgGAoIgFAjIAAABIgDAVIgCAPIAAADQgGADgHACQgSAEgLALIgCACIgCAFQgCALAAALIAAAOIACAmQAAAUgDAUQgDARgHARIgOAnIACAAIALACIABAAIAAAAIAHgBIAAAAIACAAIADgBIABAAIAXgBIABAAIAAAAIAEAAIAFAAIADAAIAAAAIABAAQAIAAAIgCIAAAAIAEgCIgBATIgBAFIAAAHgAFgUOIADgJIAAAAIACgFIAAgBIAAAAIAAgBIADgIIACgKIACgIIAFgQIgFAQIgCAIIgCAKIgDAIIAAABIAAAAIAAABIgCAFIAAAAIgDAJIgBgLIABgHIgBAAIABAAIgBAAIABAAIgBAHIABALgAFgT8IAAgCIAEgkIADgkIACgkIAAgIQAAgOgDgOQgDgRgGgRIgNghIANAhQAGARADARQADAOAAAOIAAAIIgCAkIgDAkIgEAkIAAACIl2gzgAGOS6IAAAHIAAABIgDAVQgBAGgBAAQABAAABgGIADgVIAAgBIAAgHIAAgMIAAgNIAAgBIAAgCIABgKIgBAAIAAAKIAAACIAAABIAAANIAAAMgAGCS6IgBARIABgKQABgDgBgEIABgTIgBgSIgEglIgBgMQAAgNAHgGQgHAGAAANIABAMIAEAlIABASIgBATIAAAAgAGPSUQAAgMACgIQgCAIAAAMgAGLQoIAAAAIABAAIgBAAIAAAAIgFgBIgIAAIgLAAIgBAAIAAAAIgGAAIgGAAIgEAAIAAAAIgFAAIgBAAIAAAAIgJAAIgDAAIAAAAIgIgBIAIABIAAAAIADAAIAJAAIAAAAIABAAIAFAAIAAAAIAEAAIAGAAIAGAAIAAAAIABAAIALAAIAIAAIAFABgAFIPjIgCALIACgLQALgLAAgQIgBgIIgDgnIgBgQIABgXIABgJIABgeQAAgTACgTIADglIABghIAAgGIAAgOIABgMIAAgDIAAgCIAAgBIAAgBIAAgBIAAgBIgCgYIAAgOQAAgMACgLQACgMAAgNIAAgGIAAgEIAAgCIgEglIgCglIgCgnIAAgBQAAgKAGgHQALgNARgIIAjgPIABgBIABAAIAAAAIABgBQAHgCAIAAIAAAAIABAAQAGAAAGACIABAAIgBAAQgGgCgGAAIgBAAIAAAAQgIAAgHACIgBABIAAAAIgBAAIgBABIgjAPQgRAIgLANQgGAHAAAKIAAABIACAnIACAlIAEAlIAAACIAAAEIAAAGQAAANgCAMQgCALAAAMIAAAOIACAYIAAABIAAABIAAABIAAABIAAACIAAADIgBAMIAAAOIAAAGIgBAhIgDAlQgCATAAATIgBAeIgBAJIgBAXIABAQIADAnIABAIQAAAQgLALgAF+PTIAAgGIAAgGIAAgBIAAgBIABgWIABgRIAAgKIgBgIIAAgJIgBgUIgBgVIgEg7IAAgIIAAAIIAEA7IABAVIABAUIAAAJIABAIIAAAKIgBARIgBAWIAAABIAAABIAAAGIAAAGgAFrO8IACAIIAAgPQgCAEAAADgAFnNyIAFApIABAaIgBgaIgFgpIgBgHIABAHgAFyKGIgDAkIgEAhIAEghIADgkIABgZIAAgIIgBgIIAAAAIAAgBIAAAAIAAgLIgBgKIgBgiIAAgKIgBgaIABAaIAAAKIABAiIABAKIAAALIAAAAIAAABIAAAAIABAIIAAAIIgBAZgAGDJpQACgLABgNIAAgBIAAgBIAAgOIAAgNIgBgZIAAgDIgBgqIAAgKIAAgDIAAgDIAAADIAAADIAAAKIABAqIAAADIABAZIAAANIAAAOIAAABIAAABQgBANgCALIgGgMIAGAMgAGUJOQADAIAEAIIABgJIAAgGIACgJIgCAJIAAAGIgBAJQgEgIgDgIQgEgMAAgMIAAgHIAAgDQAAgJgCgIQACAIAAAJIAAADIAAAHQAAAMAEAMgAFwGEIgCgFIAAAAIAAgEIABgJIgBgOIgCgIQgEgTAAgSIAAglIgBgRIgBgTIAAgDIAAgDIAAAAIAAgBIAAgFIAFgnIAGg0IgGA0IgFAnIAAAFIAAABIAAAAIAAADIAAADIABATIABARIAAAlQAAASAEATIACAIIABAOIgBAJIAAAEIAAAAIACAFgAFRF9IguAAgAGUF5IACgJQABgCgCgHQgBAJAAAJgAGWFUIgBAQIAAADIAAgDIABgQIAAgSIAAAAIAAgBIAAgFIAAgLIgBgUIgBgNIABgOIgBgRIAAgBIAAAAIgBgMIABAMIAAAAIAAABIABARIgBAOIABANIABAUIAAALIAAAFIAAABIAAAAIAAASgAGmFUQADgOAAgPIAAgHIgBgWIgBgYIAAgPIAAAPIABAYIABAWIAAAHQAAAPgDAOgAniXaIAAgFQABgRAFgTIAKgkIALgkIAAgCIACgDIABgFQAEgQAGgQIANglQAGgTAHgSIANgfIAFgMIAIgTQAHgPAJgPIASggIATgfIARgZIAPgWQALgPAIgQQAHgNAJgNIABgBQAHgRANgMQAIAQgCARIgBAhQAAAUgFATIgJAhIgLAfIgMAjIgJAcIgCAJIgLAjIgJAkQgFARgEASIgGAjIgBAMIAAAFIADgFQABAQgCAQIgEAjQgCARABASIAAAWgAmOTKIBmgQgAFXXCIgLgCIgCAAIAOgnQAHgRADgRQADgUAAgUIgCgmIAAgOQAAgLACgLIACgFIACgCQALgLASgEQAHgCAGgDQgCARAAASQAAAUgCATQgBATADATIAFAkQADASAIARQAJAUgMAGIgEACIAAAAQgIACgIAAIgBAAIAAAAIgDAAIgFAAIgEAAIAAAAIgBAAIgXABIgBAAIgDABIgCAAIAAAAIgHABIAAAAIgBAAgAGeW7IAAAAgAdgVGIAAAAgArVT8IAAAAgAGTTqIAAAAgApIPWIAAAAgAALK2gAG6GWIAAAAgAgyF5gAbXBHQAFgzABgwQAAg6gGg3QAQhgABheQAAhegQhdQAFgLgEgJIgCgFIgGgJIAcgLIAJgEIABAJIgBgJIAZgKQAJgCAJAAIABAAIABAAIABAAIAMABIACABIAAAAQALADAEAIIABAFIAAADIAAACIADANQgPBrgGBrQgDA3AAA3QAABsALBsIAAABIAAAAQAHBDALBCIgWAGIgFABQgQAFgOAGIgdANIgBAAIgDABQgNAFgLAHgAclA5QgBANgDAOIgDAKIADgKQADgOABgNQACgOAAgOIAAgGIgCgXIAAgBIAAAAIgCgNQgEgYgIgTIgBgHQgEgIAFAPQAIATAEAYIACANIAAAAIAAABIACAXIAAAGQAAAOgCAOgAcTAmIgIAeIAIgeQACgJAAgKQAAgKgCgJQgEgUgGgIQAGAIAEAUQACAJAAAKQAAAKgCAJgAgKixgAkds2gArLtBgAEKuiIAAAAgAG8u0IAAAAgAkkvPgAKpwVIAAAAgAdXwwQgHAAgGgFIgBAAIgBgBIAAAAIAAAAIAeABIAAABQgHAEgHAAIgBAAIAAAAg");
	this.shape_6.setTransform(-13.2,-24.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0099CC").s().p("AqsDrIADgVIABgMIAAgBIAFgWQAEgTANgOQAPgRgTgHIgCgBIgCgBQgDgKAFgLIABABIAAAAIAIACIAAgMQgBgSgDgSQgDgPAAgOIAAAAIAHAAQAQAKAUABQAVACAOgPQAPgRATAHQASAGAUAAQARAAAQgEIAWgHIAMgFQATgFALgOQAHAKAJAHQAbAaAkgJQAMgDALgFQAEAbAXAQQAPAKATAEQgTgEgPgKQgXgQgEgbIACgCIAKgGQAGgEAAgHQAFAHAJgCQARgEASADQAVAEAVABIAAADQAAAPAKALQAKAJALAGQARAIASACQgSgCgRgIQgLgGgKgJQgKgLAAgPIAAgDIANABQARAAAQgBIAMgDIANgDIAIgEQAWgCAQAHIANAEIAQADQARACARgCIAJgCIAIgCQAMgGANABQASACASAGQALAFAMABIALABIABABIABAAIABAAIAAAAIABAAIAAAAQAQAAAQgEIAFgBIAHAAQAKAAAJgEQAOgGAMgIQAHgEACgHIADgHQATALAWAGIAPADQAqAGAkgYQAagRAZAPQARALAWAAIAjgBQAXgBAOgQIAJgMQAFgHAEgFQAIgHALADIAtAPQALAEAMgCQAKgBAJgEQAMgEgEgMQgCgFgGgDIgRgJQgQgHgSgBQgFAAgEADQgSALgKgNQgEgGgHgDQgLgGgNAEQgNADgLAIQgHAGgFAGIgEAGIgIgGQgNgHgNgEQgXgJgXADQgeADgXAUQgKAJgIgGQgNgJgPgEQgUgEgUADQgUAEgRAMIgNAKQgDACgEAAQgLgKgOgGQgVgIgWgFQgNgDgMAEQgPAGgLAMIgJAHQgFgMgJgKQgLgOgQgJQgPgJgSAAQgTAAgRAHQgSAHgPANIgUASIgTgWQgLgMgPgHQgQgGgQAEQgSAFgOAKQgQAJgLAOQgEgGgEgFQgPgRgWgFQgKgCgKACQgWADgSAKQgaANgMAaQgBgEgEgDIgLgIQgSgLgTgHQgGgCgGABIgIACIghAIQgUAGgRAMQgGAEgCAFIgDgHIgGgHQgIgKgMgDQgJgCgKAAIgSADQgVADgVAGIgJAEIgCgcQgBgTgDgTIgDgnIgBgnIAAgXIAHAAIUfAAIABBoQAMgHAMgFIAEgBIAAAAQAGALACAJIgQAGQgQAHgMAMQAKAGAJAUQAHAOAEAQIAJAmIADALIAAADIgDgCIgHgCIgCAAIgCABIACgBIACAAIAHACIADACIgBADIACgBIAAAAIAEAWIABARQgMgPgVgBQgSgCgTACQgSABgQAKIgbASQgDACgDgCQgPgKgRgFQgTgGgTAAQgYgBgHAPQgBADgDACQgGAEgHACQAHAJgLAAIgtgEQgXgCgYABQgfABgOAWQgDAEgFACQgFACgHABQgZABgZAGQgLADgKAHIgIADIgLAAIgTgDIgXgEQgbgEgVgCQAFADABAFQADAFgBAEQgGASgXAAIglgBIglgCIglgCIgigDQgQgBgSABIgiABQgSABgRAEIgmAJQgSAEgTACIgkADIgnADQgTAAgSgCIgjgDQgSgCgSAGIgiANIggAMQgTAFgRgEQgTgFgTAEQgTAEgSAJIghARQgPAIgOAKgAiBBdIghACIgjADIgnADIgoACIgdAAIgkADIgfADIgeADQgRABgRADQgRACgSAFQgTAFgSAHIgjANIglAOIgaALIgeANQgSAGgPALQAPgLASgGIAegNIAagLIAlgOIAjgNQASgHATgFQASgFARgCQARgDARgBIAegDIAfgDIAkgDIAdAAIAogCIAngDIAjgDIAhgCIAkgBIAhAAIAmABIAiABIAhgBIAeAAIANgBIAZgCQATgCATgFIAhgIIAPgFIAAAAIAAAAIAHgDIgJgDQAQgDAQgGQATgGASgDIATgEIAQgCIAlgGIACgBIABAAIAMgBIABAAIAAAAQAKAAAKADIACABIAAAAIABAAIABAAQAMAFAMAAIAAAAIAAAAIAIgBIAAAAIAmgEIAdgDIABAAIAHgBQASgBASgFQASgFASgBQASgCATABIALAAIAIAAIABAAIABAAIASAAQATgBASgDIAIgDIgIADQgSADgTABIgSAAIgBAAIgBAAIgIAAIgLAAQgTgBgSACQgSABgSAFQgSAFgSABIgHABIgBAAIgdADIgmAEIAAAAIgIABIAAAAIAAAAQgMAAgMgFIgBAAIgBAAIAAAAIgCgBQgKgDgKAAIAAAAIgBAAIgMABIgBAAIgCABIglAGIgQACIgTAEQgSADgTAGQgQAGgQADIAJADIgHADIAAAAIAAAAIgPAFIghAIQgTAFgTACIgZACIgNABIgeAAIghABIgigBIgmgBIghAAIgkABgAl5BKIACgMIgCAMQgGAEgJAAQgIAAgKgEQgQgIgLgOQgMgQgFgTQAFATAMAQQALAOAQAIQAKAEAIAAQAJAAAGgEgACAAlIABAAIABAAIgBAAIgBAAIAAAAIgBAAQgFAAgFgCIAAAAIAAAAIgEgBQgVgKgBgPQABAPAVAKIAEABIAAAAIAAAAQAFACAFAAIABAAIAAAAgAENAVIANAFIgNgFQgRgIgFgRQAFARARAIgAKAh/IAFgEIgFAEgAKnAJIAAAAg");
	this.shape_7.setTransform(97.5,5.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCC99").s().p("AECQxIAAgWQgBgSACgRIAEgjQACgQgBgQIAFgHIgHgFIAGgjQAEgSAFgRIAJgkIALgjIADgJIAIgcIAMgjIALgfIAJghQAFgTAAgUIABghQACgRgIgQIAAgBQAOgOAQgIIAIgFIAZgOQAQgJAUAAIAlAAQATAAATACIAnADQATACASAEQATADARAFQAUAGAOAOIALANQAGAJAEAIQADAIACAIIABAAIAAABQgIAMgJALQgMAOgIAQIgSAjIgSAjIgQAfIgTAhQgHALgFAMIgEAJIgMAiQgGARgDASIgFAXIgBAJIgBAFIgFAZIgCAJIgBADIgIAeQgFAPgCAPQgDAUgGASQgDAJACAIIAAAGgAENOuIASgaIgSAagAi2QxIAAgIQABgUAEgSIAJglQAEgRAGgPIACgFIACgGIAHgnQADgSAEgTIAFgUIAEgSIAKgiIAOgkIAMgfQAHgSAKgQQAIgOAKgPIAWghIATgdQAKgQAIgTIAGgPIAEgIIAEgIIAPgfQAGgLAHgKQAXgQAZgOQANgGAOgBQASgBARADIApAHQAZAFAWAJQAOAIALAKIAUAVIAIALQAFAGAEAIQAFAKADALQACAHABAIIABALIAGgBQgJANgHANQgIAQgLAPIgPAWIgRAZIgTAfIgSAgQgJAPgHAPIgIATIgFAMIgNAfQgHASgGATIgNAlQgGAQgEAQIgBAFIgCADIAAACIgLAkIgKAkQgFATgBARIAAAFgAEvFsIghgIQgSgFgRgGQgRgHgRgJIgegRQgLgFgGgJIgCgDQgDgEgBgGIAAgDIgBAAIAAgCIgJgfIgKgmIgMghQgEgPgCgPQAAgCgEgCQgFgQgDgQIgIglQgDgTgBgTIgDgmQgBgMAAgMIABgKQABgRgCgSQgCgRAAgQQAAgSADgTQADgQgBgPQAGABAIgDQAJgCAJABQAUAFASAIQASAHARAGQASAFASACQAUACATAAQAUAAASgEQARgEARAAIAngBIAhAAQAWACARgIIAjgOQARgIASgCQALgBAGgIIAAAGIAAAnQAAASgBAUQAAATADATIACATIABAUQAAASABASIACAjQABATADATIAGAkIAHAmIAIAlQAEATAIARQAHASALARIAAAFIADAAQAIANAGAPIAAAAIgEgCIAFAHIAAABIACAGQgKAAgNAMQgOAMgRAGQgTAIgTACIgnAFIgnAGIglAFIgkACIghACQgUAAgTgFgAxsFNIAGgOIAHgRIAHgQIAHgQIAHgQIAFgRIAGgRIAFgPIAGgQIAFgSIAGgQIAIgSIAFgOIAAgEIAAgPIABgRQABgIgBgJIgBgPQgBgKAAgIIABgTIACgQIAEgPIAFgRIAGgRIADgSQABgHgBgBIgBgOIABgPIABgSQAAgKgCgKIgEgQQgDgIADgGIAFgLQACgGAAgGIABAIQABALAKAEQAIACAIABIARABIAQACIATADQAJAAAIADIATAEIAQADIARADIARABIASAAIARACIATACIARABQAKABAKABIARAAIATAAIAUAAIATgBIASgCIAQgBIASgCIATgCIATgBQAJgCAJgDIAFgCIAAACQgBAOACANIACAUIABAMIAAAQIgBASIgBAPIgDARIgEATIgDAPIgCAPIgDAUIgCAQIAAACIAAADIgEAOIgEAQIgEARIgFATIgFARIgHASIgEAOQgEAIgBAIIgEATIgEAUIgEAQIgEASIgEAPIgBADIgCAEInbA5IAEgLgAz/jJIAAgBQACgCgBgEIACgEIAFgMIAHgSIAEgSIAFgTIAEgTIAFgTQACgJAEgIIAJgRIAKgRIAKgQQAEgHADgKQACgKAHgFIAAgCQADgKAEgIIAHgQIAFgPQADgJAEgIQAEgJAIgHIALgJQAHgGAHgDIAQgJQAIgEAJgCQAKgCAKACQAJACAJAEIAPAHIAPAFIAJACQAGAFADAIIAGARQACAJgBAKIgBATIgBASIgCATIAAASIABASIABATIAAAHIAAAKQAAADADACIAAAEQAAAJgBAKIgBAOIgBAVQgCAMgFAKIgIANIgHALIgIAIIAAgBIgCgQIgEgSIgFgTQgDgHgCgJIgEgPIgIgRIgEgLIgEgHIAEAHQgJAGgEAMIgHAPIgGAPIgGAPIgGAQIgIASIgIAUIgHAPIgGAQIgHAQIgFAPIgFAPIgDARIAAAEQABAUgEAUIgBAEIgBAFIgGARIgFASIgHARIgGASIgEANIgGAOIgGAOIgGAOIgIASIgHAPIAAABIgEACQgGAEgEAGQgEAJgGAIIgLAPQgFAIgHAGIgJAJgALIB7IgQghIgQghIgNgkIgOgjQgGgQgHgQIgCgCQgIgRgGgTQgGgRgEgTIgIgjIAAgBQAAgDgDgBIgCgEQgIgTgLgRQgGgJgDgJQgEgKgBgKIgBgGIgBgNIgCgTIgDgQIgBARIgCAQQgFABgDADIgJgFQgJgGgIgIIAAAAQgLgMgKgNQgNgQgGgUQgFgTgCgUQgBgTACgSQADgUAFgRIAJghQAEgSAGgQQAIgUgBgSQAMgDAJgJQAPgPARgNIAOgJQAKgGAKgDQASgHASADQARADAMAMIAEAFQALAOAEARQAEARABATIACAlIAAAEIAAAJQABAEADAEQACAKAAALQgBASACARIAFAmIAEAiQACASADATIAFAYIADAPIAHAjIAJAkIAJAmIAAgCQABASAFAQIAKAlIAIAbQAIgLAFgNIAIgUIALgdIAIgYIACgGIgBAAIANgYIAQgiQAHgQAFgRQAFgPAGgPIACAAIAAgGQAHgQAKgPIARgeIAQgbQAKgPAFgSQAFgSANgPQgLgJACgRQACgTAPgMQAIgHABgGQACgGgGgGIgHgHQgLgJgOgEQAOAEALAJQgUAbgVgJQgKgEgFgIQAOgMgCgSQgBgJACgGIACgEQAEgHALgFIALgDIAFgBQAHAAAHABIABAAIgBAAIAAgCQgEgJAEgHQAEgHAJgFQAOgHAPgCIAIgBQAQgBAJAHIADgCQgGgIgCgKIAEgEIAAABIABgDQALgJAPgDQATgEAQAJQAQAKAMAPQAKAMAMALIASgNQASgKATgEQASgFATgBQATgBAPAKQAJAGACAHQADAIgHAKQgFAGgJgBQgSgCgSAEQgMADgJAFIgJAGIAJgGQgCAIAAAJIgCgBIgZgOQgPgJgNgMIgFgDIgJAGIAJgGIAFADQANAMAPAJIAZAOIACABQAAALACAKQAFAVgMAQQgLAQgTAFQgNACgLAMQgKAKgNAGQgQAIgSAHQgTAGgOAOIgFgCIARgbIgRAbIgPAXIgCADQgIADgHAGQgGAGgFAJIgRAkIgCAEIgQAfIgKARIgBADIgGANQgHASgFATIgDANIgFAaIgBAFIgBAFIgEAYQgEATgGASQgFASgHAQIgOAgIgKAUIgGAMQgJASgHAQIgGAGIADACIgEANIADgDIAAABIgQAjIgLAWQgJASgOAOQgOANgQALQgPAKgTAAQgVAAgIgWgAO5m3IABgCIAAgBIAAAAIADgGIgDAGIAAAAIgIgDIAHAGgAQaoAQATgHAMgJIADAAIAAAAIAGAAIAAAAIABAAQASAAAIgNIABgCIAAgBQADgGAAgGIgCgHIACAHQAAAGgDAGIAAABIgBACQgIANgSAAIgBAAIAAAAIgGAAIAAAAIgDAAQgMAJgTAHQgKgHgIAAIAAAAIAAAAIgFABIAAAAIgBAAQgEABgDAFQADgFAEgBIABAAIAAAAIAFgBIAAAAIAAAAQAIAAAKAHgAP2odQgEgLgJgKQgMgOgRgFQgHgDgEgDIgEgFIAEAFQAEADAHADQARAFAMAOQAJAKAEALIgJgHIAJAHgAQ4pBQgDgJgEgJQgJgQgQgGQgJgEgFgHQAFAHAJAEQAQAGAJAQQAEAJADAJIgMgNIAMANgAQMpqQgCgFgDgDQADADACAFgAJbigQADABAAADIAAABIgBADIgCgIgAJbigIAAAAgAmPjCQgTgHgSgHQgLgEAAgGIAAgBIAAgBIAMgJQAagTAMgHIAggSIABAAIAAgBIAggUQAPgKAOgNQANgMAPgKIADgCIABAAQANgKAOgHIAjgRIAggOIAigOIAUgJIALgGQASgIARgKQARgKARgJQASgIARgKIAcgTQAPgKASgFIAggKQARgFAQgGIAggOQASgIATgGQASgIATgCQAKgCAKAAQAJABAJADQATAEAOANQAPAMAHAQIgEAAQgIgCgLAGQgRAMgJARQgIAQgLAOQgLAOgNAOQgMANgQAJIgfATQgPALgOAMQgMAMgJAOQgDgUABgTQABgTgJgFQgWAJgQAJQgPAKgPAGIgkANIggANQgSAHgQAJIgXAOIgGADQgOAGgPAEIgBAAIAAABIgeAIQgTAGgSAIQgPAIgPAKIgeASIgfASQgRAKgSAEQgTAFgPAIQgGAEgHAAIgHAAQgPAAgOgEgAmKkjQgIgEgJgEIgQgFIgRgHIgSgHIgSgGIgSgFQgIgCgHgEIgQgGIgNgHIgPgIIgQgHIgQgGQgJgDgJgCQgIgCgJABQgKAAgJACQgGACgFAEIgCABIgMgKIgPgMIgPgLIgOgJIgPgKIgPgLIgMgLIgNgMQgGgGgGgIQgEgGgDgIIgEgJIgEgKIgFgRIgEgTQgCgNAEgJIAQABQAJABAKACIALAFIAFADIAIAEIAAgDIAAgBIABAAIACABIAFAFIACgCIAIAEIARAEIASAEIAQAEIASAFIASAEIASAHIARAEIARAHIAQAJQAIAFAJACQAKADAIAFIABAAIAHADIAEABIgCgBIANAEIABAAIAMAFIANAHIANAIIAPAJIAQAKIAQAJIAMAIIAQAKIAQAKIARAJQAIAFAKADIASAIQAJACAIAEIATAIIAQAHIABABIADACIAAABIgDACQgPAKgNAMQgOANgPAKIggAUIAAABIgBAAQgVgOgIgEgAoSm8IAUgXgAr3oAIAZgbgAEilFQgTgGgHgUQgGgTAEgUQADgSALgQQAKgPANgNIAagaQANgNALgOIADgEQAJgOACgRQADgSAAgTQAAgTgEgSIgHggIAQACIADAAIARABIAAAAIABAAIAHAAIAHgBIAkgDIAYgCIgYACIgkADIgHABIgHAAIgBAAIAAAAIgRgBIgDAAIgQgCIgBAAIgRgDIgPgCIgYgFIgjgIQgQgFgQgIQgRgJgOgMQgPgMgMgOQgNgOgJgTQgIgPgDgQQgDgVADgVIADgOIAAgBQADgKAFgKQAIgRAMgOIACAFQAKASARAKQASAKATgEQAUgDAQgHIgBgJQABgPAMgMIACgBIgBAAQAGgHAEgHIAAAAQATgJAQANQAKAHAGAIQgCAIADAJIAAACQAHASAQAKQAQALATAEQATAEAUgBQAUgBAQgNQANgLALgNQAKgLACgOQALAHANADIAiAJQATAFATgBIAnAAQATABARACIAEAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQANgFAMgCIACgBIAHAAQATgBAOALQAPANADASIAAACQADAVgPAOQgOANgRAIQgRAGgSAEQgSAEgSgBIAAgDIAHgHIAJgHIgJAHIgHAHQAAgFgFgEQAFAEAAAFIgDACIADABQgEARgKAQQgKAPgQAKQgQAKgSAFQgRAFgPAIQgKAFgIAFQgPAKgQAEIgjAGIgJABIABgDIgCAEIABgBQgCAGAAAHIACAgIAAAAIABAGIADAmIABAIQABAQgFAOIgLAkQgGATgKARQgJAQgLAPIgVAdIgYAeQgMAOgOAMQgPANgSABIgCAAQgNAAgMgEgAFyrGQASAAASgEIAjgIQAUgEARgJQAQgKAMgOQANgPAHgTQAGAIACAJIABADIAAAAIAAAAQAEANgDAAIAAAAIAAgBIAAABIAAAAQADAAgEgNIAAAAIAAAAIgBgDQgCgJgGgIIAAAAQgFgHgGgFQAGAFAFAHIAAAAQgHATgNAPQgMAOgQAKQgRAJgUAEIgjAIQgSAEgSAAQgSAAgRgCQgRgBgSgFQgSgFgRgIQgQgIgLgOIgYggQgMgQgJgRQAJARAMAQIAYAgQALAOAQAIQARAIASAFQASAFARABQARACASAAIAAAAgALRsxQgFAOgKAAQAKAAAFgOQADgGAAgGQAAgFgDgFQADAFAAAFQAAAGgDAGgALjs6IABgCQgBgDgGgFIgGgFIgKgEIgHgCIgGgBQgVAAgSAEIA3ADIABACIAGgCIAGAFQAGAFABADIgBACgAE1tIQAMAAAHgKIAAgBIAAABQgHAKgMAAIgBAAIgBAAIgHgBIgBAAIgCgBQgUgFgEgUQAEAUAUAFIACABIABAAIAHABIABAAIABAAgACXtLIgIgBgAFCuMQATAHAHATQgHgTgTgHQgHgDgHAAIgBAAIAAAAQgKAAgJAHIgBAAIABAAQAJgHAKAAIAAAAIABAAQAHAAAHADIAAAAgAEnuCIgIgGIAIAGgAwulMIAAAAgAtsloQgJgCgJgEQgIgEgIgGIgNgKIgOgLQgGgHgDgHIgIgSQgDgKgCgJIgDgSQgBgJgDgIQgDgKgEgIIgFgKIgDgFIAEgDQAIgGACgKIADgSQABgJgCgJQgCgJgDgIIgKgRIgJgOIABAAIAHABIARABIATgBIATgBIAUgCIAPgBIAQgCIALgDQgDAKAAAIIgBASQgCAJACAJQADAJAEAJQAFAIAKACQAEACAEgCIASgIIACAAQgBAJABAKQABAIAEAIIAHARIAGAQIAGATQADAJAAAJIAAAUIgCASIgDATQgDAKgGAHQgHAHgJACIgSAEIgTACIgGAAIgMgBgAO4oWIAAAAgASyo8IAAAAgAS0pNIAAAAgAvVpqIgHgBIgBAAIgLgCIgTgDIgSgFQgJgDgIgDIgPgJIgQgIQgIgFgGgGIgNgOIgLgNIgKgOQgGgHgDgJIgGgQIgHgQQgEgIgGABIgCABIgBADQgEAEgGAEIgQAKQgIAEgJgBQgKgBgIgFIgOgKQgGgGgEgHQgEgIgCgKQgCgJAAgJQgBgKABgKIAEgTIAEgQQACgJAGgHQAGgGAGAAIABACIADgBQAFgDAFAAQAKgCAKABIAEABIALAGIAGACIADAAIADABQARABARgIIAQgGQARgGASgEQARgCARAAIAIAAIAEgBIAHADQAAAKAEAJIAJAQQAEAHAIAFIAQAHQAJAEAJABQAJACAJAAQAJAAAJgCIASgGIAHgDQAFgDAEgFIAHgJIAWgIIAMgCIAIAAIAAAAQAGgDAHgCIAGgBQAKgBAJAFIAIADIAHAHIABAAQALABAKAAQAKgBAJgDIABgBQAIgCAHgFIAJgIIAGAPQACAKAAAJIAAATIAAASIABATQAAAIgBAJQgBAJgDAJIgHARIgDAIIgEAFIgBADQgDAHgEAHQgGAHgHAHIgOAOQgGAGgIAGQgIAHgIAFQgIAEgHAHQgGAHgJADIgPAGIgHACIgLADIgQACIgPABIgUACIgTABIgTABIgRgBgAuqq/IADAAIADgBIARgBIAQgBQAJAAAJgCQAKgCAJgEQAJgDAIgFIARgKIAQgJIAQgLQAHgEAAgGQAAAGgHAEIgQALIgQAJIgRAKQgIAFgJADQgJAEgKACQgJACgJAAIgQABIgRABIgDABIgDAAIAAAAIAAAAIgFAAIgIgBIgSgCQgJAAgIgCIgQgFQgIgCgGgGQgHgFgGgHIgNgNQgFgIgHgFQgFgDgCgFQgFgIgHgFQAHAFAFAIQACAFAFADQAHAFAFAIIANANQAGAHAHAFQAGAGAIACIAQAFQAIACAJAAIASACIAIABIAFAAIAAAAIAAAAgAy1sSQAGAFAEAIQADAEABAFQgBgFgDgEQgEgIgGgFQgGgFgEgFQAEAFAGAFgAxJr+IABAAIAHgDQAIgEAHgGIABgBIAMgNQAGgIAFgBQgFABgGAIIgMANIgBABQgHAGgIAEIgHADIgBAAIgCAAIAAAAIgCgBIACABIAAAAIACAAgAzUsWQAAAJAFAIQAEAFAFABQgFgBgEgFQgFgIAAgJIAAgBIAAAAIAAgBQAAgHADgGIAIgNQAEgHAJgBIgCACIgDAFQgCAEAAAFQAAAEACAFIACAFIgCgFQgCgFAAgEQAAgFACgEIADgFIACgCIABgCQADgEAEAAIABAAIAAAAIABAAIABAAIgBAAIgBAAIAAAAIgBAAQgEAAgDAEIgBACQgJABgEAHIgIANQgDAGAAAHIAAABIAAAAIAAABgAzLsWIAAgBIAAAAQADgGAEgBIAAAAIABAAIAEACIAAAAIAAAAIgEgCIgBAAIAAAAQgEABgDAGIAAAAIAAABgAs8s2IACAAIACgBQAKgBAHgEQAJgFABgKIABgFQAAgHgGgGQAGAGAAAHIgBAFQgBAKgJAFQgHAEgKABIgCABIgCAAIAAAAIAAAAIgLgCIgCAAIgCgBQgGgCgEgEQAEAEAGACIACABIACAAIALACIAAAAIAAAAgAtktXQADgJAJgFQgJAFgDAJgAvdprIAAAAgAIOsZIAAAAgAt5t0IABgHIgBgLQgCgJgEgJQgDgIgIgHIgPgNQgIgFgJgDIgIgBIAMgDQAIgFAIgFIAOgJQAIgHAHgHIANgKIANgKIAOgMQAHgHAFgIIABgDQAIAHAGAHQAGAIAEAHQAGAJACAJIACAJIgGABIgOAHQgIAFgIAGQgHAHgFAIQgFAHgDAIQgDAJABAKQABAKADAIIAHAPQgDgBgHABIgRAGQgJADgHAHQACgGABgIgAKRt7QgTgCgTgEQgSgEgSgBQgUgBgTgFIgcgKIgBgCQgDgMgIgKQgHgKgKgGQARADARgBQAPAAAOgBIAdgEQAbgEAbgJQAMgEAKgGIgDACQgPANAJAKQAAAJgCAHQgCAIgCADQgHAHgCAKQgCAOATgHQAKgEAAALQAAAHABADIgCAAgAFNuiQgQgJgOAIIAEgKQADgHgBgIQAAgHgEgEIgHgJIgCgCIgBgDIgCgHIAAgHIABgGIABgDQAIgPAMgMIAVgTIAHgGIAFgEQAKgHAMgEIAEgBQgGAJACALQAEAZASAVQAZAcAiAMIgOAAQgSACgQAGIgRAGIACACQgKAFgIAKQgJAIgFAKQgEAEgCAFQgEgPgNgHg");
	this.shape_8.setTransform(-72.2,17.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C6FFFF").s().p("AqEJBIgGgBIACgPIAGgiIABAAQAJgMAMgMQAPgOATgHQARgGAQgIQANgHAKgKQAMgLANgDQASgEAMgRQAMgQgFgUQgDgLABgLIAAAAIAGADIgGgDIAAAAQgBgJACgIQAKgFAMgDQASgEASADQAJABAEgHQAIgKgDgIIQkA4QAHA3gBA7QgBAwgFAzgAqLDJIgCghIAAgQIgBgDIgCgWIACgCIAGgEQATgOgDgXIgEgFQAAAQgHAOQgEAJgIAGQAEgJgDgKIgHgkIgHgkIAAgEIgFgfQgCgTABgTQABgSADgSIABgFQACgPgEgOIACgkIADgmIAFgkIAEgdIACgRIAAgNIACgbIACgeQAPACANAHQASAIAMAQIAUAcQAMAQAJAQQADAFABAFQgCgRADgTIAFgiIAAgEIAEgOIgFgHIgFgnQAMAKAPAGQAQAHAQAGQATAGATAHQARAHALAPQAJAMAGANQAGgIACgQQABgNgFgNQgHgUgLgRQgJgOgMgLQgRgPgSgNIABgEIAaAGQAWAEAUAHIAZAKQARAHAQAKQARAJAIARIADAFIgBgPIgCgXQgCgQgGgOIgFgMQAAgFgFgDIAAgBIgHgMIgDgGQAJgCAHgEQD6hiETAuIAGgBQAGAKAIgLQALgPADgQIABgFQAHAUATADQANACAMAAIANAAIABgCIAEgCQCthJDMApIADCnQgSAGgVgGQgRgFgKgJQgEgEgHgBQgWgCgTAKIgiASQgSAJgSgHIgkgPQgQgHgSgCQgQgCgQAFQgSAFgQAJQgPAIgIAOQgLAUgQgHQgWgKgbgEQgSgCgSAAQgTgBgSAEQgOACgLAJQgFAFgGAAQgJAAgJgEQgUgIgWACQgTABgSAHQgPAGgHANQgEAGgGgDQgVgJgYADQgSACgRAFQgPAFgMAKQgPANgEASQgEAQgTAJQgRAUADAVQABAEADABQAWAJAZgEIAfgFQARgEAPgJIAegSQANgKAQgGQAKgEAKAJQAIAGALACQAVADAUgFQASgFAQgKQAOgKANAKQATAPAXAEQAUAFAVgBQAWgCAWgFQAQgDAPgHIAggNQAOgFAOADQAJACgBAJQgEAZAYAIQAVAHAVgDQATgDAQgKIAZgPQASAMAQAMQAPAMATACQATACARgHQAQgFAQgCQAKAAAKAFQAEADAFAAIACB2I0Sg5IgLgBIALABIAAANIASAdQAIAPAGARQAGARADATQADAUgBATIgBAhQgCASgEASQgDARgHAQQgHAQgFARIgKAhIgLAiQgFASgHARIgHABIgDgZgAqDisIAHAHIADADIALAOIgLgOIgDgDIgHgHIgFgEIAFAEg");
	this.shape_9.setTransform(95.2,-75.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFF99").s().p("AqzJDIAAgHIABgFIABgTQALgGgIgUQgIgQgDgTIgFgkQgDgTABgTQACgTAAgUQAAgSACgRQAJgGAEgLQAEgLACgMQACgRABgRQABgUgHgUIAGgmQACgTABgTIAAgFQgQACgQgBIAAgqIAOAAIATAAIgJgJIgIgJQgDgDgBgFIgBgXIAAgWQAAgEgDgDIACAAQgDgSgBgRIgBgoQABgTgBgTQgBgTABgTQABgUAEgTQADgSAAgTQgBgTADgSQADgUAAgTQAAgTABgSIABgMIAAAAIAAgLIgCACIAEgXIAEgRIAHABQAOgKAPgIIAhgRQASgJATgEQATgEASAFQASAEASgFIAhgMIAigNQASgGASACIAiADQATACATAAIAngDIAkgDQATgCASgEIAmgJQARgEASgBIAigBQARgBARABIAiADIAlACIAlACIAlABQAXAAAFgSQACgEgDgFQgCgFgEgDQAVACAbAEIAXAEIASADIAMAAIgCABIAFAAIALAAIgGgEQAJgHAMgDQAZgGAYgBQAHgBAGgCQAFgCADgEQAOgWAfgBQAYgBAXACIAtAEQALAAgHgJQAHgCAGgEQACgCACgDQAGgPAZABQATAAATAGQARAFAPAKQADACADgCIAbgSQAQgKASgBQATgCASACQAUABANAPIAAAVIAAAnIAAAnIAAABIAAAJIAAAAIABAJIABgJQAEAPABAUIABAhIABAnIgBAiIgEAlIgEAnQgCASgEASIgHAjQgDARgCARIgEAiQgBADABADIABAFQADAMAJAKIAHAHQAKAJAMAEIgBADIABAFQACANgEAUIgBACIgXAAIgCAAIAAAFQABAPgCAVIgDAjIgDAgQAAASACASQADAWAAAXIAAAkIACAfIACAlIABAjQAAAQACAPIADAlQgDAUACANIgCAiQgCATgFASQgFATgIASQgJASAAAUQAGACAAgBIAAADgADRnnQAIAAAHgDIACAAIgCAAQgHADgIAAIAAAAIAAAAIgBAAIgBAAIABAAIABAAIAAAAIAAAAg");
	this.shape_10.setTransform(97.2,67);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.I, new cjs.Rectangle(-222.5,-175.6,418.7,301.6), null);


// stage content:
(lib.pronoun_Scene4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// text
	this.instance_4 = new lib.texti();
	this.instance_4.parent = this;
	this.instance_4.setTransform(274.9,206.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Layer 1
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,54.9,1,1,0,0,0,54,40.5);

	this.instance_5 = new lib.pronounheader();
	this.instance_5.parent = this;
	this.instance_5.setTransform(163.4,43);

	this.instance_6 = new lib.I();
	this.instance_6.parent = this;
	this.instance_6.setTransform(287.9,218.8,0.902,0.902);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#0066FD","#CCCCCC","#FFFFFF","#FFFFFF","#FFFFFF","#996600","#FFCC00"],[0,0.184,0.788,0.937,1,1,1],170.8,205.9,170.8,205.9).s().p("AgWAUQgDgGABgGQAEgRAPgMQAGgGAIAAQASADgCASQgCAGgFAEQgJAHgFALQgBACgDACQgEACgEAAQgIAAgGgIg");
	this.shape_11.setTransform(170.8,205.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.instance_6},{t:this.instance_5},{t:this.UI}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,201.6,534,398.7);
// library properties:
lib.properties = {
	id: '83D4F56EC543FC4E8930ED694CDCF2C0',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/_12a.mp3", id:"_12a"},
		{src:"sounds/_12b.mp3", id:"_12b"},
		{src:"sounds/_13b.mp3", id:"_13b"},
		{src:"sounds/_13c.mp3", id:"_13c"},
		{src:"sounds/_16a.mp3", id:"_16a"},
		{src:"sounds/_18b.mp3", id:"_18b"},
		{src:"sounds/_19b.mp3", id:"_19b"},
		{src:"sounds/_2a.mp3", id:"_2a"},
		{src:"sounds/_3a.mp3", id:"_3a"},
		{src:"sounds/_4a.mp3", id:"_4a"},
		{src:"sounds/_6a.mp3", id:"_6a"},
		{src:"sounds/_7b.mp3", id:"_7b"},
		{src:"sounds/_9a.mp3", id:"_9a"},
		{src:"sounds/bgmusic.mp3", id:"bgmusic"},
		{src:"sounds/bgmusic_1.mp3", id:"bgmusic_1"},
		{src:"sounds/MenuPronoun.mp3", id:"MenuPronoun"},
		{src:"sounds/s_coolcheer.mp3", id:"s_coolcheer"},
		{src:"sounds/VO4.mp3", id:"VO4"},
		{src:"sounds/hesheit.mp3", id:"hesheit"},
		{src:"sounds/himherit.mp3", id:"himherit"},
		{src:"sounds/i.mp3", id:"i"},
		{src:"sounds/me.mp3", id:"me"},
		{src:"sounds/nominative.mp3", id:"nominative"},
		{src:"sounds/objectis.mp3", id:"objectis"},
		{src:"sounds/objectivecase.mp3", id:"objectivecase"},
		{src:"sounds/objectsof.mp3", id:"objectsof"},
		{src:"sounds/replaces.mp3", id:"replaces"},
		{src:"sounds/subjectis.mp3", id:"subjectis"},
		{src:"sounds/subjectof.mp3", id:"subjectof"},
		{src:"sounds/substitutes.mp3", id:"substitutes"},
		{src:"sounds/them.mp3", id:"them"},
		{src:"sounds/they.mp3", id:"they"},
		{src:"sounds/us.mp3", id:"us"},
		{src:"sounds/we.mp3", id:"we"},
		{src:"sounds/you.mp3", id:"you"}
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
an.compositions['83D4F56EC543FC4E8930ED694CDCF2C0'] = {
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