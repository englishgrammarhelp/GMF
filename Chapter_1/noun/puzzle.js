(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
var rect; // used to reference frame bounds
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


(lib.twiggslegsstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#121212").s().p("AAqCKIgBgCQAUAFAMgNIACgEIAAAFIAAADQgGAIgNAAQgGAAgIgCgABaB9IABABIgDADIACgEgABfCAIADAAIgDABgABnB0IgEgDIgJAFIgNgCIgHgFIgUAIIgCgJQhXgChJgtQAbhpAyhhIAAACQgDAFAFAAQgyBegSBoQBXAoBhgFIACAEIAcAKIgKAJQAFgFgFgDg");
	this.shape.setTransform(9.2,21.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF99").s().p("ABRAgIABAAIgBABIAAgBgAhRgbIAAgFIANAbg");
	this.shape_1.setTransform(4.1,-8.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3A3A3A").s().p("AAAAAIABAAIAAAAg");
	this.shape_2.setTransform(5.6,-3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAFGQIgBgCIgBgFIADgLIAEAOIAHADIAPgLIAMADIAIgIIADADQgHAOgRgFIgOAJgACVFbIAAgDIANAAIAEgDIADACIAAABIgNAHgAAmBNIAAgCIBDiAIAAAAIAEgNIACALIhHCJIgBAAQgEAAADgFgAAsg7IAGABIgLAgIgCgBIACABIgeBHIgFAAgAigmNIAGgGIDbAJIgHABIjUgDIgIAYIACgNIgCAPIgBABIgEADQgDgPAKgQg");
	this.shape_3.setTransform(1.8,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC99").s().p("AAMFtIADgMIAJgFIAGADIATgMIgBgGIAQgGIAHAIIgFAKIgLABIgBAHIgIAHIgMgDIgPALgAhzFIQguAHgUgdIAEgKIAggWQBKiwA2i2Ihei3IgCgGIgihEIAAgBQA7gcA+AVIAJAEQAvB8AQCDIgoBoIhfD/IArANQgRgGgRgIIBbj+IAehHIAAAAIALgfQgQh/gth5IBNgfIAmD3IgCABIACAAIABAjIAAABIhDCAQgxBggbBqQBIAtBYACIACAJIAUgIIAHAFIANACIAJgFIAEADQAFAEgFAFIgFADIgDAAIgDgCIgCgBIgCAEIgNABIAAgGIgCAEQgMAOgUgGIgFgEQgGgeggAQIgJAGQgigEgfgHIBBAUIAhgMIAHAMIgMANIgngFIg1AYQg1ggg/ALg");
	this.shape_4.setTransform(1.6,2.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AhqAgIgJgtIAAgCIABgBIAIgYIDTACIAMAfIgIANIhHAjQhFgqhLAhg");
	this.shape_5.setTransform(-2.9,-35.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0B0B0B").s().p("AAvF9IgEALQg9grhKANQgoAGgSghIAFgFIACAGQAUAdAvgHQA/gLA1AgIA1gZIAmAGIAMgOIgGgLIgiALIhBgUQAgAIAhADIAKgFQAfgQAGAeIgBABQgUAbgiALIgDgDIACgGIAKgBIAGgLIgIgHIgQAGIABAGIgTALIgGgCIgJAFIgDAMgAhkEPQA+iiA0ihIgSgpIgOgbIg3h1IBdC3Qg1C2hJCwIghAWQAbgYAMgfgAgzErIBfj/IAFAAIhbD+QARAIASAGgACRg2IgBgjIAAgBIgmj3IhNAfQAtB5AQB/IgGgCQgQiDgwh8IgJgEQg8gVg8AcIgMgKIgGgtIAFgDIAJAuQBLghBFArIBHgjIAIgOIApEzIgCgLIgDANIgBAAIAAAAgAhSj2Igdg8IACgGIAiBFgABimKIAHAAIAFAfgAh4mCIgBANIgBACg");
	this.shape_6.setTransform(-2.2,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.twiggslegsstill, rect = new cjs.Rectangle(-17.3,-40.6,37.9,80.8), [rect]);


(lib.twiggsheadstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#252525").s().p("AAAAAIABgBIAAADg");
	this.shape.setTransform(-5.8,3.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCFCFC").s().p("AgQAUIgLgVQALgQASgFQALgCAFACIgKAEQgJALAIAKIAJAEIAMgFQgLAWgWAAIgLgEg");
	this.shape_1.setTransform(5.4,2.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F9F9F9").s().p("AgLATQgQAAACgYQAKgOATgCQgCADgBAFQgBAQASgBQAGAAADgEQAAAOgPAJIgCABQgFgEgQABg");
	this.shape_2.setTransform(11.6,1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C6FFFF").s().p("AAAAAIAAAAIABABIgBAAIAAgBg");
	this.shape_3.setTransform(11.8,-1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0B0B0B").s().p("AAFBbIAFgMIABAMgAg3BbQgQgagYgUIAEABIAGAGQATAQALAXgAASA6QAeAHAVgZQAQgUACgYQABgMgDgLQgCgGgDgFQAYATgLAdIgEAKQgdAqgyAPgAgQAvQgkgOgBgmQAOAhAkANQAigFAagWQgZAdgoAHIgIgDgAAdgKIAUgHIACgVQgYACgTAMQgFAEgFADQgPAEgOgDIgQgTIgIgCIABgBIgUgCIAEAAIAJgHIAmgZIAsABIAhgSIACgBIAGAAIAOABQAHAFABAJQADARgMARIgPAOQAAAHgGAEQgGAEgIABIgHABIgEAAgAgHhDQgSAFgLAQIALAWIAKADQAXAAAKgWIABgCQAIgRgTgFIgHgBIgIABgAA+gmIADgBQAPgJgBgQIABgBQAIgSgUgEIgGACQgDABgCACQgVACgKAOQgBAZAPAAIAGAAQAMAAAEADg");
	this.shape_4.setTransform(6.3,7.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC99").s().p("AgOBtQgQgmgigXQgRgLgUgHQgGgDgFgEIgIgKIAEgJIAlgCIgRgLIAIgHIACACIAAgDIAtgFIAUACIgBAAIAJACIAPATQAOADAOgEQAHgCAFgEQATgNAYgCIgCAVIgUAGQAFABAGgCQAHAAAHgFQAFgDAAgHIAQgOIAFADQADAGABAGQAEAKgBALQgCAagRATQgUAagegIIgIATIgBABIAAACIgFAMgAAQBAIAJAEQAogHAZgeQgaAWgjAGQgjgNgOgiQABAnAjANgAgogfIgBgGIgIgIIADgHQAYABAWgHQAlgNAOglIAOAHQAQALAHAQIgBABIAAABIghASIgtgBIgkAZg");
	this.shape_5.setTransform(3,5.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0A0A0A").s().p("AgDAAIADgCIAEgBIgGAHg");
	this.shape_6.setTransform(9,-9.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF6400").s().p("Ah6BiIgFgCIgBgDQAAgRAIgPQAJgRAPgCIgFAKQgKAVAKAVIgMAJgAhUBkIgCgDIgIgBQgFgIABgKQACgNAIgMIALAeIAJAHIAAAFIgNAGgAhHBRQgCgGAAgHQgBgGABgGIAJgBIAAgFIAHAKIANALIgTAOgAiNAoQAGgIAIgGQAFgEAGgDIAbAPQgSAAgMAOQgLANgHAOgAg3A4QgHgJgLgDIABgcIAFgGIAIAMIAAgEQABgOALgJIAGAaIABggQAmgaArgHQANACADALQAPADAJANQAGAIgFAIQgOAZgbAKQgOAEgPAAQgOAEgPABIAKAGIgDAHIgrADIgCgFgABSgSIgFgQQARADAOAIQANAJAEAOIgFAIgACAhRIAFABIACAEQgjANgfATQAWggAlgFgABahaQAWgQAbAFIADALIgFAGIgQgHIgTAEIglAlQAFgZAUgPg");
	this.shape_7.setTransform(-0.9,-5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAGCjQgKgXgTgQIgGgGQgLgQgTgFQgagGgPgVIAJgTIANgGIAAgFIgJgHIgLgeQgIAMgCANQgBAKAFAIIAIABIACADQAAABAAAAQAAAAAAAAQAAAAgBAAQAAAAAAgBQgLABgFgHQgKgVAKgVIAFgJQgPACgJAQQgIAPAAARIgGgIQgIgQgDgQQgDgVASgQIAWgCIAbAWQAIgtApgSQAdgOAdgMQASgHALAMQACgdATgUQAPgPAXAAQAJAAAJADQAEABADAEIAEAHQADAGgEABIgDgLQgbgFgWAQQgUAPgFAZIAlglIAaAGQglAFgWAgQAfgTAjgNIgCgDIAhAOIAAABQglgKgfAWIgDACIgKAGQAeAOAPAbIgFAPIAJAUIgGAAIgBgCQgIgQgQgKIgOgHQgOAkgmAOQgVAFgXgBIgKgFQAPgBAOgEQAPAAAOgEQAbgKAOgZQAFgJgGgIQgJgNgPgDQgDgLgNgCQgrAHgmAaIgBAhIgGgbQgLAKgBAOIAAAEIgIgMIgFAGIgBAcQALADAHAIIACAFIArgDIAHAIIABAHIAMABIgIAHIgEAAIguAFIgBABIgJAIIARAMIgkABIgEAJIAIALQAEAEAGACQAVAHARAMQAiAWAPAmgAhKAFIgJABQgBAGABAGQAAAHACAGIAIAEIATgOIgNgLIgHgKgAiJgXQgIAGgGAIIAEAiQAHgOALgMQAMgOASAAIgbgPQgGADgFAEgABIhEIAmAbIAFgJQgEgOgNgJQgOgIgRgDgAh/A1IgFgEIAJAEIgCABIgCgBgAA7AdQgIgKAJgLIAKgEQATAFgIARIgBACIgMAFgAB0gCQAAgFADgDQACgCADgBIAGgCQAUAEgIARIgBABQgCAGgHAAIgCAAQgPAAABgPg");
	this.shape_8.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.twiggsheadstill, rect = new cjs.Rectangle(-15.5,-16.3,31.5,32.7), [rect]);


(lib.twiggsbodystill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiFCVIACABQABABAAAAQABAAAAAAQAAABAAAAQAAAAgBABgABnBvIAJgEIAQABIgThfIAAAEIgCAEIAAgCIgBADIAAAAIAAACIAAgCIAAACIgNAlIgFAEIgGgEIAYg6IAGgEIAAAIQAFgBABAHQACASAFARQAJAdAAAfIgDAFgAhbA1QgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAIACgCIAJgDQAAADgDADQgDADgEAAIgBgBgAhgiVIgCgDIAIAAIAAABQgBAEgCAAIgDgCg");
	this.shape.setTransform(1.9,-1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("Ag1BYIgCAAIgJAEIgCAAIgPhHIAYgRIAFgWIABgWIABgJQABgYgCgYQARAfAPAiQADAFAGAEQAHAGALgFQAFgCAEgEQAEgGACgIQACgEAAgGIgEgaIAxAqIgLAWIAXBQIgnAhg");
	this.shape_1.setTransform(-0.6,-6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("AgzCeIB9g8IAEANIgMAbQgdATgkAFQgJABgJAAQgSAAgQgFgAilhzQAJgLALgIQAMgJAQgEQAWgHAYAIQAGANAFANQADAIABAIIgBAKIgBAVQgGASgSAOIgNgbQAGBaAjBTQAVgBARgKIAQgLIAyALQgeAXghAPIgjANQgUAGgUAEQg8iBgRiNgACDBhIgBgEQhPgEhMgPIgogKIgGgVQAEAAADgCQADgDAAgEIABAAIAhAGIgKgBICRAZIAFgFIgBgJIANglIAAAAIAAgBIABgCIACgDIAAgEIATBegAhBBLIAkACIgNAIIgJAEQgLgDgDgLgAApAtIAwgfIgchVIANgKQAUgOAZAIIgiAWIACAAIAugOIgfAYQAEABADgBQAJgDAJgFIADgCIANgBIgUAOQAPgHAQACIAMAAQgEAMgKAEIgTAJIgIAaIgYA5gAhJAmIADgBIgCACgAgehvQgEgMgBgNQgBgHgFgEQgOgMgQgDIAAAAIA1AAIACAKIANACQAXAegMAmQgcgBgKgcgAAdiBQgIgHgEgNQAEgCAEAAQAHgDAIABIAHABIAMANQAPAVAFAYQgagPgYgUg");
	this.shape_2.setTransform(0,-0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0B0B0B").s().p("AgSCoQgfgBgdgJQgUgFgMgQQAAAAABAAQAAgBAAAAQAAAAgBAAQAAgBgBAAIgCgBQgRhAgUg+QgXhGAFhLIAOgRIAbgFIAlgEQAKABACgFIABACQAFAFACgHQAPADAPAMQAFAEAAAHQABANAFAMQAKAcAcABQALgmgXgeIgMgCIgCgKIAGAAIAEAFQAVgDAXAAQALAAALADIAhA6QAOAAAPAFQAbALAWAXQAAAOgJAJQgLANgRgFIgCAbIAAgJIgFAFIAHgaIATgJQALgEAEgMIgMAAQgRgCgOAHIATgOIgMABIgEACQgIAFgKADQgDABgDgBIAegYIgtAOIgCAAIAhgWQgYgIgUAOIgOAKIAcBVIgvAfIA8AGIAGADIAFgEIABAJIgFAFIiRgZIAKABIghgGIBgAKIAnggIgWhQIAKgWIgwgqIADAaQAAAFgBAFQgDAIgEAGQgEAEgFACQgKAFgIgGQgGgEgDgFQgPgigRggQACAZgBAYQgBgIgDgJQgEgNgHgNQgXgIgXAHQgPAEgNAJQgLAIgJALQASCNA8CBQAUgEATgGIAjgNQAigPAegXIgzgLIgPALQgRAKgWABQgjhTgGhaIAOAbQARgNAGgTIgEAYIgZARIAPBGIAAABQAAABAAAAQgBAAAAABQAAAAABABQAAAAAAAAIABABIAGAVIApAKQBLAPBPAEIACAEIgJAEIgkgBIgNArQgoAegxAAIgDAAgAgzCZQAaAJAbgFQAkgFAdgTIALgbIgDgNgAgzBUIAKgEIAMgIIgkgCQADALALADgAAaicQgFAAgDACQADANAIAHQAYAUAbAPQgFgYgPgVIgMgNIgHgBIgDAAQgGAAgGACgAB+AHIAAABIgBAAIABgBgAB+AHIABgDIAAACIgBABg");
	this.shape_3.setTransform(0,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.twiggsbodystill, rect = new cjs.Rectangle(-17,-16.9,34,33.6), [rect]);


(lib.stacelegstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0D0D0D").s().p("AgFAAIADgBIACgCIARgIIgDAJIgeAOg");
	this.shape.setTransform(-14.9,37.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0C0C0C").s().p("AABBfQAIgdgBgcQgBghgMgfIgCgKQgEg1ACg0IADAWQACA8AJA1QAOBRgTA9IgBACIgHAEQADgYAGgXg");
	this.shape_1.setTransform(-8.2,17.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AAAAAIAAAAIAAABIAAgBg");
	this.shape_2.setTransform(-0.5,-10.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#111111").s().p("AgBgGIACAGIABAHg");
	this.shape_3.setTransform(-9.9,-12.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#232323").s().p("AAAAAIAAAAIABAAIgBAAg");
	this.shape_4.setTransform(13.1,39.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#151515").s().p("AhAgWIADAAIB6AqIAEADQhGgRg7gcg");
	this.shape_5.setTransform(9.8,32.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0F0F0F").s().p("Ag4D5IgEgCIAkggIAHgDIACgDIARgLIgPgfIANhuQAGg7ACg7IAFhQIACALQABADACABIgHCKQgMBMAIBMQADATAGAUIAtALIgEAEIgagFQgWADgUAFQgaAJgSAWQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAgAASh+IAAAAgAAOipIgDhRIAAgBIABADQAAABABAAQAAABABAAQAAAAAAAAQABAAAAAAIABAmIADgpIACATQADA0gGA0g");
	this.shape_6.setTransform(-1.6,14.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#101010").s().p("AgFDDIgIgCIgIgMIAWjEQAEABABgDIgSDKIAKAKIgBAAIgCAAgAADhZQgDg3AVgxIABgBIgSBtIgBgEg");
	this.shape_7.setTransform(3.9,10.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3A3A3A").s().p("AAAAAIAAABIAAAAIAAgBg");
	this.shape_8.setTransform(6.1,-8.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCC99").s().p("AigFZIgEgPIAfgPQARgEAKgPIACgEQAPgPAIgUIABgCQAUg+gPhRQgJg1gCg8QgDgfAOgcQAFgKABgKQAEgVAAgVQgSgrgNguQgFgUgOgQIAAgFIgFgFIgCgEQgGgNgHgMQgSgegDgkIAEgBQBBAXBEgKIAHAGQAPBDgEBGIgCAhIAAACIADBRIgBAcIgFBPQgCA7gHA8IgNBvIAQAeIgSALIgCAEIgHACIgkAhQgWAQgbAEIgIABQgQAAgMgMgABoFHIgJgHIgEgBQgHgJgMgDIgagFIgtgKQgFgUgDgUQgJhMANhMIAGiKQAGgzgDg1IgCgTIgCgIIABhJIgGhLIAAgMIgBgDIgCgHIBegRQADAygFAzQgDAagGAbIgOA7IgBADQgWAxAEA2IAAAFQAFAbgLAYQgCAFACAGIAEAHIgYDFIAJALIAIADQA6AdBHARIABALQgPAWgYAIQgNgBgJgHgAhfiyIgBgHIABACIABABIAFAOg");
	this.shape_9.setTransform(-0.1,5.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0E0E0E").s().p("AAKAbIABgFIACAOgAgMggIAAgDIACAAIAVAyIgGABIgRgwg");
	this.shape_10.setTransform(8.5,-32.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0B0B0B").s().p("AgpCpIgPgpIgGgOIAAgCIgLglIgihAIARAYIACADIAGAKQANARAGAUQANAuARAqgAAdCIIAAgDIgBgBIACghQAFhGgPhDIABgHIAIAYIAHBLIgCBIIgBAMIgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAgBgBgABhiOIAGgGIAFAZIgCAAIAAADgABcimIgLABIgZgGIAmgBIAGAYg");
	this.shape_11.setTransform(-3.4,-24);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AibGiIgRgZIADgKIAPgGIgMAMIAEAPQAQAPAUgEQAcgEAWgRIADACQABABAAAAQAAAAABAAQAAABAAAAQAAABAAAAQgRASgaACIgpgBgAB3GNQglgTgqgNIAEgEIAaAFQAMADAHAJIAFABIAJAHQAIAHANABQAZgIAPgWIgCgLIgDgDQAKACADAIIABAFQgNAdgdAHIgBAAQgGgBgFgDgAiVF2IABAAIgDABIACgBgAiDFuIASgOQAQgNAHgUIAHgDQgIAUgOAPIgDAEQgKAPgRAEgAAoBgIgDgHQgCgGACgFQALgZgFgcIAShrIAAgCIAPg7QAFgbAEgaQAFgzgEgyIhdARIACAHIAAACIAAAAIABANIgIgYIgBAHIgIgGQhEAKhBgXIgDgCIAAADQACAkASAeQAIAMAGANIgSgXIgKghQgXhKAOhNIALgJIAwAEIBEANIA4gIIAYAGIgbAEQg6APg5gQQgbgGgcAAIgEAFIgDAIQgIApAHAqIACAIQBEAeBFgWIgCgeIAKgEIADAkIBjgQIAFgBIAAAHIgBAFIADAqQABAbgFAcIgOBJIgWBtIgCAEQABA2gMA2QAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgBAAgAhbAjQAAgfANgeQAHgTgEgWIAIAEQAAAVgDAVQgBAKgFAKQgOAbACAfgAgBAQIgBgLIABgbIADAqQgCgBgBgDgAAAhjIABgLIACAIIgDAqgAhbhtIgEgOIAFAOIgBAAgAhhh+IgEgHIgGgdIALAmIgBgCgAh5jGIAEAFIABAFg");
	this.shape_12.setTransform(0,-0.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFF00").s().p("AAdBDIABgCIAAADIgBgBgAh4AkIgCgIQgHgpAIgpIADgIIAEgFQAcAAAbAGQA5AQA6gOIAbgEIALgBIAIASIADAAIgGAGIAJAWIATAxIhkAPIgDgjIgKADIACAeQgcAJgeAAQgnAAgngRgAh6ArIAEACIgDAAIgBgCg");
	this.shape_13.setTransform(-3.6,-34.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.stacelegstill, rect = new cjs.Rectangle(-17.3,-42.1,34.6,83.8), [rect]);


(lib.staceheadstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AgNAIIALgbIAQARIAAAAQgIAKgGAMg");
	this.shape.setTransform(-7.5,-8.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0C0C0C").s().p("AgagSQALASAXAIQAKAFAJABQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAgBABIgSACQgagLgIgag");
	this.shape_1.setTransform(7.6,1.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#090909").s().p("AAAgCIABABIgBAEg");
	this.shape_2.setTransform(11.5,-0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#202020").s().p("AAEAFIAHAAIAAABIgHABgAgHACIgDgIIAKAMgAAAAAIALABIgFAAIgEACIgCgDg");
	this.shape_3.setTransform(11.2,-5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#242424").s().p("AgEABIAAgBQAEAAAFABg");
	this.shape_4.setTransform(12.8,-4.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4C4C4C").s().p("AgDgCIAAgBIAHAHg");
	this.shape_5.setTransform(7.6,-3.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#111111").s().p("AgEgHIAJgCIgBAQIgEADg");
	this.shape_6.setTransform(8.9,-4.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5D5D5D").s().p("AAAABIABgBIAAABg");
	this.shape_7.setTransform(0,-11.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#393939").s().p("AAAgBIABABIAAACIgBgDg");
	this.shape_8.setTransform(9.2,-7.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FDFDFD").s().p("AgWAQIgEgaIALgKQAJgIADAKIABAEIAAgCIAEAGIADAJIADAIIgKAJIABgQIgKABIAFARIgJAHIgHgJgAAQAFIAAAAIALABg");
	this.shape_9.setTransform(9.6,-5.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1C1C1C").s().p("AgCgCQADgEAFAAIABACIgNALQAAgGAEgDg");
	this.shape_10.setTransform(6.9,-9.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFCC99").s().p("Ag6ByQADgRAAgRQAAgOgDgNIgFgwIAGABIAEgDIgFgDQgHgJgEgKQgDgJAHgBIAFAGIACALIAEgJQAFghAPgeQALgWAYgHIANAGIAAAAIgVASIACAJIAFgHIAOgMIAIgCIADAEIADARQgFgIgKABIgHACIgEARIgaAOQAJAEAJgFIAGgEIAIAZQAAAAAAAAQAAABABAAQAAAAAAABQABAAAAAAIAJAHIAJgGIADgDIALgIIAHAEIAFAAIAHAAIAKAAIgDAMIgMAOIgDAKIgBAFIgMAhQgIgBgKgFQgXgIgLgTQAIAbAaALIASgCIgaAiQggAIgcgaIASASQAOAMAQAHIgBAMIgBAKg");
	this.shape_11.setTransform(6.2,-0.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#121212").s().p("AgmAxIAAAAIgCgKIAAgDIANgzIAGgJQAMgUAWgDIAFAGQgXAHgLAWQgPAdgGAgIgBABIAAgBgAAegdQAHgBgBgCIAEACIgBAAIgIADgAAfgjIAAAAIACABIgCgBgAAYgrQgDgCAAgEIAIAIQgDAAgCgCg");
	this.shape_12.setTransform(4.5,-7.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C6FFFF").s().p("AgCAAIAAgBIAFABIgDABg");
	this.shape_13.setTransform(5,-13.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#101010").s().p("AACBnQgQgHgOgMIgSgSQAcAZAggHIgRAJIACAFIAPgGIgHAWQgFgFgBAFgAhBA3IAAgEQABAAABAAQAAAAABgBQAAAAAAgBQAAAAgBgBIgCgCIgHgpIAJAKIAFAxIgEALgAA1AHIADgIIgCAKIgBgCgAg8gMQAAAAABAAQAAABABAAQAAAAABAAQABgBAAAAIAAABIABAAIgDAKgABJgPQgCgFgDAEIADgMQgFgBgFAAIgHAAIgCgCIAFgCIAEAAIANAEIADALIgDAFIgBgCgAg8gYIADgBIAAAEIgDgDgAAHgYIgHgYIgGADQgKAFgIgEIAagOIAEgQIAHgCQAKgCAFAJIAIATIgFgGIgBgCQgDgKgJAIIgLAKIAEAbIgBABQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAgBgBgAhKgeIABAFIgCACIABgHgAhHg/IABAIIgGAMgAAlhAIABABIgBAAIAAgBgAg+hfIACABIgLAegAAghKIABgFIADANgAAWhbIABAAIABAFIgCgFgAg1hsIAEACIgLAJgAgxhxIABABIgCABg");
	this.shape_14.setTransform(6.2,-1.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#151515").s().p("AhQBBIAFgLIADgGQAHgMAJgLIAAgBIADgDQAWgZAdgQIAlgEIgTAOIAAgCIAAgBQhDASgXBBgAAzgRIAAACIgaADQAMgGAOABgAAogWIAAgHIAIgKIgEARIgBABIgDgBgABOhFIADAFIgJAEQgQAEgPAPQAHgVAegHg");
	this.shape_15.setTransform(-0.4,-11.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAvCWQgBAAAAgBQgBAAAAAAQgBAAgBAAQAAgBgBAAQAHgGAAgNIAAghIAEgLQADANAAANQgBARgDARQABAFgEAAIgCAAgABwCRIAAgKQACgFAFAFIACAKgAi4B6IAUgdQAKgNAFgQQACgIAAgHQAAgjgIgiQgEgSgBgSQgCgqApgTQASgJATAEQAkAKARAiIACAAQARAEAEAQIgCADIgBAAIgRgRIgLAcIANANIgDAGIgSgMQgJAQgHASQgTAzgQA0IgFALQgFAHgGAGIgKAGIgNABQgZAAgWgJgAhYgpQADASAAARQgBBIgvA3IAAAAIABAAIASgGQAMgRAFgVIAIghQAMgvAagpIgogPIADASgAhphSIgFADQAFAxgIAwIgJArQgHAegTAaIAHAEQASgUAJgZQAOglAHgmQADgSgDgTQgCgKgEgJIADgKQAUgHAQARQAEADAFABIAKgCIgFAAIghgYQgHgHgJAAQgFAAgFACgAiuB1IAHAAIAAgHgAh1hlQgSAfABAkIABBBQAAAOgDAOQgHAfgTAaIAHAAIABgFIANgYQANgXAEgaQAHg5gBg7IASgOIAIABQAGABAFADQAVAPAVAQIAAgHIgigdQgNgLgQAAQgHAAgIACgAiKAZIgCgjQgCgUABgUQABgmAegSQAHgEAIACQAKABAJAHQAUAPAUARIABgFIgZgeQgKgMgQgBQgcgCgWANQgQAKAAARQgBAWAEAVIAIAtIADAPIAAAAgABsByIASgJIAZgjQABAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIAMgiIABgEIADgLIAMgPQADgEACAFIAAACQgLATgIAXIgIAXQgJAYgXARIgQAGIgCgFgAArBIQgygPgYguQgHgMAEgNIAGAFQgBALAGAIIANATQAAgYAEgVQADgRAHgPIAKgOQgcAvAMA1IADAEQADgwAUgtQAHgQASgIQgQAMgIAWQgGAQgDARQgEAbgDAdIAOAHIALhNIAGgMIAIgLQAWgcAdgVIADgCIgFgBQgOgCgMAHIgJAHIgEgCQAAAAAAAAQAAgBAAAAQAAAAABgBQABAAAAgBIACgBIATgNQAAgKAGgHQAPgPAPgEIgYAVIgHAJIAAAIQABAAAAAAQABABAAAAQABAAAAgBQAAAAABAAIAZgKIgIAFIgHAFIAKAFQAVgNAZAIIADgPIgGgFIglAJIAggOIgVgSIgDgEQAZAOAQATIgHAVIgDgDIgkADQgFACACAEQAAADACACQACACADAAQAJAAAHAHQAGAHgBAKIAAAFIAEAIIAAADIABAAIANAdIAAAAIACAEIACABIAAACIgFAAIgKgOIgDgIIgIgUIgEgRIgBgFIgEgCQAAABgGABQgGAAgDAEQgEAEAAAGIgHAIIgBgKIAVgRIACAAIgCAAIgNgGIgFgGQgWACgNAVIgGAJIgdAvIgCAGIADgCIANABIADADIABAIQgBABAAAAQgBAAgBAAQAAAAgBAAQAAgBgBAAIgFgHQgHACAEAJQAEAJAGAJIAGAEIgFADIgFgBIgJgKIgFgUIgEA1IAQAIIACACQAAABABABQAAAAgBAAQAAABgBAAQAAAAgBAAIgBAAIgCAAg");
	this.shape_16.setTransform(-5,-3.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFF99").s().p("Ah9CFQAvg3ABhIQAAgRgDgRIgDgSIAoAOQgaAogMAwIgIAhQgFAWgMAQIgSAHgAiMCCQATgaAHgfIAJgrQAIgwgFgwIAFgEQAPgFALAKIAhAYIAFABIgKACQgFgCgEgDQgQgQgUAGIgDAKQAEAJACAKQADATgDASQgHAmgOAlQgJAagSATgAimCBIAHgGIAAAGgAiaCAQATgaAHgfQADgOAAgOIgBhBQgBgjASggQAZgHATAQIAiAdIAAAHQgVgQgVgOQgFgDgGgCIgIgBIgSAPQABA6gHA5QgEAagNAXIgNAYIgBAFgAAzBUIADAAIAAAEgAAmBHIAEg1IAFAUIAHApgAARA8QADgcAEgcQADgRAGgQQAIgVAQgNQgSAIgHARQgUArgDAxIgEgDQgLg2AcguIgKANQgIAPgDARQgDAWAAAYIgNgTQgGgJABgMQAWhBBEgTIAAACIgCACQAAABgBAAQAAABgBAAQAAAAAAABQAAAAAAABIgHAKIALgJIAJgHIAagDIACABQgdAVgWAcIgIAMIAAgJIgGAUIgLBOgAA4g+IgIAfIAKgeIABgDgAiFAXIgIgtQgEgWABgVQAAgSAQgJQAWgOAcACQAQABAKAMIAZAeIgBAGQgUgSgUgPQgJgHgKgBQgIgCgHAEQgeASgBAnQgBATACATIACAkIgDgOgAAuAHIgBgEIAdguIgMAyIgDABgABshaIAHgFIAIgFIgZAKIADgRIAZgVIAJgFIAVASIggAOIAlgJIAGAFIgDAPQgZgHgVANg");
	this.shape_17.setTransform(-5.8,-4.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.staceheadstill, rect = new cjs.Rectangle(-23.5,-18.6,37.5,30.1), [rect]);


(lib.stacebodystill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2E2E2E").s().p("AAHADIgNgEIAAgBIACAAIALAFg");
	this.shape.setTransform(-23.3,19.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2C2C2C").s().p("AgJgDQAjABgbAFIgDABQgGAAABgHg");
	this.shape_1.setTransform(7.8,19.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9C9C9C").s().p("AAAAAIAFAAQgFABgEAAg");
	this.shape_2.setTransform(13.4,7.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("AhvAhIgDgLIgKgUIgBgCIAIgOQAugPAxgDIA5gJIBSAIIAJAgIgSAiIgGABIiDgEIgCAAIABAAIhIAMg");
	this.shape_3.setTransform(5.8,2.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0B0B0B").s().p("AhxCbQgbgCgagGIA9AHQAJABACgIIA7gFIgCgMIgfgIQAUACAWgBIAIgJIABAHIAIAAQgGAIgJAIIAIAFIgGADIALAFQgvAGgvAAIgIgBgACZBnIgBgCQANgpALgqQADgFAGACQAIACACgGQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBIAGgBIgCAQIgGgDIABAEIgkBEIADAIIAAAHIADAgIgJALQAFgXgHgYgAi+COIAAAAIAAAAgAjWCFIAKADIAAABIAAABIgKgFgAiZBjQgGgDgGAAQgHAAgHACQAagtAqgiIBSg/QgFAGAGAAIAEgDIgIAPIAAADIABAAIAKAUIgDAEIgQgbQgzAkgsAvQgPAPgJASQAVAMAVAIQgSgEgSgHgAjdBXIgDAHQAUg0AngsQAdgiAigdIASgJQgbAbgdAZQg8AygUBNgABVAIIA2AFIADADQgegDgbgFgAA+AEIgBgBIABABgADSg7IhSgIIASgGIAtACIgZggIAsAnQgBgXgPgYQgLgSgOgNIgwgIIAAgFIAtADIARASQAYAcARAiQgFACABAFIAFAVIgEADIgCAOgAB9hKIgHgKIAWAKIgPAAgABziXIABAAIABAAIgCAAg");
	this.shape_4.setTransform(-3.5,5.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAACbQgYAAgXgFIgMgFIAGgDQA/AVBEgJIAogEIAJgMQAwgQApgcQAMgIAKgKQAGgGADgIIADgMIg2hQIgXAuIAZAxIgEAMIhAAgIgFgDIAAgHIACgDQAhgDAXgUIABgDQgCgegYgRIgCgDIAGACIADgQIARgiIADgNIAEgEIgGgVQgBgFAFgCQAMAWAOAWIAdAqQAMATAIAXQgKAbgXAOQgmAXgpAVQgXALgYACQgeAFgeAAQgWAAgVgDgAiNCZIg+gGIgXgFIAAgBIgNgFIgCgBIgKgDIgEgCIgGglIADgHIABASIAFAUQAeAPAjADQAdAAAbAEQgBAHgHAAIgCAAgAg2B4IAAgGIAHgRQAJgWABgWIgXg1IACgEIAEAKIAIAJIBIgMIAAAAICEAEQAAABABAAQAAABAAAAQAAAAAAABQAAAAAAAAQgCAGgJgCQgGgBgDAEIgBABIgFgBIgGADIgWgEIgCgEIg2gFQgvADgsAJIAFAVQAFAUAAAUQABAVgKARIgEACgAhCgsQAWgIAXgGQA2gRA4AAIAPABIAGAAIgTAGIg5AJQgwADgvAOIgEADQgGAAAFgFgAAHiXIABgGIAIABIgHARIiBBBIgSAIgABQiXIAAgBIgGgEIALABIgBAEg");
	this.shape_5.setTransform(0.2,5.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFCC99").s().p("AgxCOIgIgFQAJgIAHgIIAEgCQAKgRgBgVQAAgVgFgUIgFgUQAsgKAvgCQAbAFAdADIAWAEQAFAAAGgCIABAAQgKAqgNApIAAACQAHAYgFAXIgoAEQgVADgVAAQgtAAgsgPgABOCQQAcgGgkgBQgBAIAJgBgAi3CPQgjgEgegOIgFgVQAVhMA7gyQAdgZAcgbICBhBIAHgRIA6AAIAFAFIAAAAIABAAIAEABIAxAIQANANALASQAPAYABAXIgrgnIAZAgIgtgDIgGAAIgXgKIAHAJQg3AAg2ARQgXAGgWAIIhSA/QgpAigaAtQAGgCAHAAQAHAAAGADQASAHASAEIAwALIAgAJIABAMIg7AFQgbgEgdAAgACBBrIAFACIBAgfIAEgMIgZgyIAXgtIA2BPIgDAMQgDAIgGAGQgKALgMAIQgpAbgwAQIgCgfgAjtCIIAAAAIACAAIgBAAIgBAAgAhAgaIAAACIgBABIABgDg");
	this.shape_6.setTransform(-0.2,5.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.stacebodystill, rect = new cjs.Rectangle(-26,-10.2,52.4,31.6), [rect]);


(lib.slimlegstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("AgcEHIhDgSIhIgMIgBAAIgBgCIgEgKQAzgcAFg7QAMhygKhwQgGhHAAhGIA1gCQAQC8ggC6IgKA1QBXAtBhgJIAIAIIgJAMIgMgJIgKgBIALAPIgagKIAPALIgQAIIgQgQIgIABIAPAQgAB6DwIgRgFQgIgEgBgEIiFgUIgEgIQAUgcAAgkQgBglABgkQABhdgBhfIABgCQAOg7gOg8IgBgCIABgDIAGgDIAEgIIAxAKQgJDQgODOQAAAIgEAHQBGAyBbgKIACAJIgbgEIAIAJQgOAKgTAAIgBAAg");
	this.shape.setTransform(0.7,11.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgVF7IBFABIgOgRIAIgBIAQAQIAQgHIgPgMIAaAKIgMgOIALAAIAMAJIAJgMIgIgIQhiAJhWgtIAJg1QAhi7gQi7Ig2ACQABBHAGBFQAJBygLBxQgGA7gzAcIAFAKQgFgGgEgIQAbgPANgbQAGgNABgNQARi+gUi9IgjgRQggh4AJh9IAIgKIDegCIAmDrIgfAMIgUG4QAbAKAdAHQAxALAzAGIgEAKIgSAHQgFAJgKAFQghgCgdANQgeAOgfAAQgZAAgYgKgAgOgKQABBegCBeQgBAkABAlQABAkgUAcIAEAIICEAUQACAFAHADIARAFQAUABAOgLIgHgJIAaAEIgBgJQhbAKhGgxQAEgIAAgIQAOjPAIjPIgwgJIgEAHIgGADIgBADIAAADQAOA7gNA7IgBAAIAAACgAg0h5QAFCdgTCdIgNBkQgBAKAFAIIAAABIAgAJIASgfQAIicAAibIAAgCQACgbgCgbQgBgbgDgagAizl4QgEBWAQBWQAFAbAOAXQAdAuA3gNQAZgFAZgNIgIirQAKApgBArQAAAoAMAkQAWACAXABQALAAAKgEQAGgCAEgFIAEgGIgnjbgAh7FoQgXACgOgNIBIAMIgjgBg");
	this.shape_1.setTransform(0,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009933").s().p("AhhBhQgOgXgFgbQgQhVAEhWIDbgHIAnDaIgEAGQgEAFgGACQgKAEgLAAQgXgBgXgCQgMgkAAgoQABgqgKgpIAICqQgZANgYAFQgNACgKAAQgnAAgWgjg");
	this.shape_2.setTransform(-5.1,-25.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.slimlegstill, rect = new cjs.Rectangle(-18.8,-39,37.6,77.8), [rect]);


(lib.slimheadstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfAXQgGgWAPgLIALABIAAAAIAFASIgNAAQgHANAMAFIgQADIgBgHgAARAJIgDgEIAFgiIALAAIAEAYIgJABIAAAOg");
	this.shape.setTransform(1.9,-2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("AgcBzIAAgcQAWAPAbADIAFAKgAgEBgQgjgOgWghIgUAEIgKgRQgMgUALgVIAEgJIAJgCIAZALIAAAAIAFgBQAJgDAIgGIgIgNIgEgKIgBgfIBHgoIAGgFIATAJIARBDIANAMQAHAIADAJQAGASABAUQAAAMgCANQgDASgOAMQgGAFgIADQgUAKgUAAQgPAAgOgGgAgNAfQALAQARAJQAjAGARghIAFgOQgNAcgbAGQgKACgKAAQgOgKgLgOIgHgJIAHANgAAQAAIgBgNQALgLAQgBIAMABIAEAHIAAgKIgcgBIgUARIAGALgAgUgsQgBAJACALQABAGAEgCIAOgDQAHABADgIQAFgQgLgOIAAAAIgLgDQgLAHgCAMgAAggpIAIABQAGACAEgCIAEgCQAEgQgGgQQgCgGgFgDIgIgDQgOAWAHAYIAAgFg");
	this.shape_1.setTransform(0.3,2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAdCLIgEgKQgbgDgXgPIABAcQgFgTgLgQIgJgKIgPgRIgNADIgMgHIgCgKIgFgdIgLhaIAggNIgJAGIABAPIgNgIIAMA5IADgiIAIAkIAJgeIADAjIALAKIgagLIgIACIgFAJQgKAWALAUIAKARIAUgEQAWAhAkAOQAhANAkgRQAHgDAGgFQAOgMADgSQADgNgBgMQgBgUgGgTQgDgJgGgHIgNgMIgShDIgSgJQAIgMAAgRIAAgLIgHAjIgFggIAYgLIgOAsIAKADIAEgDIACgZIASBoQAKAJAJAJQAFAFACAGQALAhgLAiQgHAVgSAMQgVAOgXABIACAKgAASBQQgSgJgJgQIgIgNIAIAJQAJAOAQAKQAKAAAJgCQAcgGANgcIgGAOQgOAcgbAAIgLgBgAANAMIAVgQIAcABIAAAJIgFgGIgMgBQgQABgLAKIACAOgAgugEIACAOIAKgHIgCgHIAIAMQgIAGgJADIgFABgAgQAAQgBgLABgJQABgMALgHIALADIgKgBQgPANAGAWIABAGIgBAAQgDAAgBgEgAAEAAQgLgDAHgNIAMAAIgEgUQAKAOgFAQQgCAGgGAAIgBAAgAgygQIgFg4IAKAZQAKgRgEgYIgOAFIA0gbIgDAEQgDAGgBAHQgBAIABAIIAAABIgBgMQgBgJgHgDQAAAAgBAAQAAAAAAAAQAAAAgBABQAAAAAAAAIgCAVIgFgNIgLABIACAiQAdgRAegLIAFgBIhHAoIACAfgAAsgQIAAgOIAJgCIgEgXIgLgBIgFAjIAAAFQgHgYAPgWIAHADQAFADACAGQAGAQgEAQIgEACIgEABIgFgBgAhLhFIAWgOIgFAEIADAHIgGgEQgIACgBAJIgFgEgAAUh5IALgFIgKAkgAAEhxIAQgIQgJAIgCAOIAAAIg");
	this.shape_2.setTransform(0,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#996600").s().p("AgfBOIgKgJIgEgkIgJAfIgHgmIgEAkIgLg6IANAIIgCgOIAJgHIAGAFQAAgJAJgCIAFAEIgCgHIAFgEIANgFQAEAYgKAQIgKgYIAGA3IAKACIADAKIADAIIgKAGIgCgOIgEAWgAgSgdIALgBIAGANIABgVQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAAAAAQAIADAAAJIABAMIAAgCQAAgIABgHQABgHADgGIACgEIAHgEIAEAXIABgJQACgNAJgIIAAAAIAAAAIABAfIAKglIAAAAIAAAAIAGAgIAGgjIABALQAAARgJAMIgGAFIgGABQgeALgdAQgAA+ghIAOgsIACATIgCAZIgEADg");
	this.shape_3.setTransform(-2,-5.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.slimheadstill, rect = new cjs.Rectangle(-10.8,-13.8,21.5,27.9), [rect]);


(lib.slimbodystill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("AhFDAQgcgHgUgWQALgTABgXQABgPADgRIAWBRIAUANIAUAAQApgXAjgjIAYgXQAGAEABAKQACAfgJAdQgZARgeAFIgWABQgaAAgbgHgAg/CwQgLgIgEgLQgDgIgCgIIggiTQgMg0gHg1IgGg0IAMgTIBOgCIgBgOIA2AAIAIALQADAGAJABIAJgCIAYgKIARgDQAVAWANAcQArBaAVBiQAHAgAFAgIAAAGQgVALgWgFQgYgFgXgHIgigLIAdgiIAoAEIgKguQgQhEgkg+IAhBkIhJA0IhOgSQgGg5gKg4IgGgZQAGBAALBAQAIAyAQAxQA8hDBLgwIALAcIg5BDQgNARgQAPQgeAgglAWgAhzA+QgMAMgKAOQgNARgLATQgHgJAGgLQARgdAYgWQgJAGgIAIQgUATgTAVIADgMQAEgLAHgJQAVgZAbgRQgJAEgJAFIgwAjIgBgCIAFgWIA+gfIAOA8IgkA4gAgjBkIgEgbIAbAJIgUAUgAgkBFQgOgSAAgWIBFAPQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAQgEAIgGAHIgOASg");
	this.shape.setTransform(-0.1,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ah9CoQAOgjgBgmIgEAKIgMAaQgEAJgKACQAAgkAOghIgkA4IgHgJIgGgJQgEgKgDgKQgEgUAEgXQAcgXAjgKIgYi1IANgUIBKgFIAGgKIABAPIhPACIgLASIAGA1QAHA0ALA0IAgCUQACAIAEAHQAEALAKAJIAXACQAmgWAeggQAPgPAOgRIA5hCIgMgdQhKAxg8BDQgRgxgIgzQgKg/gHhBIAHAZQAKA4AGA5IBNASIBKgzIghhkQAkA+AQBEIAKAuIgogFIgdAiIAhALQAXAIAZAEQAWAGAUgLIABgGQgFghgHgfQgWhigqhbQgNgbgWgWIgRACIgYALIgJABQgIgBgEgFIgHgMIAGAAIAIAMIA6gMIAnA5IAIAPQAxByARB8IgEAGQgFAJgMAAQgtgEgrgPIgIAbQgGAVAGAVIgDAIQgWAEgUAKIgSAFIgLABQhBAAg4gigAhqB3QgBAWgMAUQAVAVAcAHQAmALAlgFQAdgFAagQQAIgegCgeQAAgKgGgEIgYAXQgjAigpAYIgUAAIgUgOIgXhRQgDARAAAQgAiLCIIAkg4IgNg9Ig/AfIgFAXIAAADIACgCIAwgiQAIgGAKgEQgbASgVAZQgIAIgEAMIgDAMQATgVAVgUQAHgHAJgHQgXAWgSAdQgGALAIAJQALgTANgRQAKgNAMgMgAgkBiIABACIABgBIAVgTIgbgJgAgmBCIAiAJIAOgRQAGgHADgIQAAgBAAAAQAAAAAAAAQAAAAgBgBQAAAAgBAAIhEgPQAAAXANARgABbAyIAYAJQAGgHgDgKIgCgHg");
	this.shape_1.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.slimbodystill, rect = new cjs.Rectangle(-18.6,-20.1,37.4,40.3), [rect]);


(lib.Shuffle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_3 = function() {
		playSound("SEClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(3).call(this.frame_3).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AghAqQgPgMAAgWQAAgYANgSQANgSAWAAQAQAAAKAFQAMAHAAAOQAAAKgLAIIgUAKIglARQAGAIAIAEQAIAFAKAAQAHAAAJgDQALgDAEgFQADgGAEAAQADAAADADQADADAAADQAAALgSAIQgPAGgOAAQgVAAgOgLgAgUgZQgHAJgEARIAegNQAQgJAIgGQgJgIgOAAQgMAAgIAKg");
	this.shape.setTransform(29,3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgKBHIABgjIABgkIAAgiIABgkQAAgJAIAAQAKAAAAAJIAAAkIgBAiIgBAwIgBAXQgBAKgIAAQgJgBAAgJg");
	this.shape_1.setTransform(20.6,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgPBTQgDgCAAgEIAAgCQACgNAAgPIAAgaIAAgcIgQABQgJAAAAgJQAAgKARAAIAJgBIACgPQACgVAIgKQAKgNAVAAQAOAAAAAKQAAAJgNAAQgXAAgDAhIAAAGIAVgBQAQAAAAAJQAAAIgIABIgIAAIgWACIgBAVIAAASIABASQAAATgCAKQgBAIgHAAQgEAAgDgDg");
	this.shape_2.setTransform(12.6,0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgPBTQgDgCAAgEIAAgCQACgNAAgPIAAgaIAAgcIgQABQgJAAAAgJQAAgKARAAIAJgBIACgPQACgVAIgKQAKgNAVAAQAOAAAAAKQAAAJgNAAQgXAAgDAhIAAAGIAVgBQAQAAAAAJQAAAIgIABIgIAAIgWACIgBAVIAAASIABASQAAATgCAKQgBAIgHAAQgEAAgDgDg");
	this.shape_3.setTransform(2.4,0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAWAvQgMAGgPAAQgNAAgIgGQgKgGgBgMQgEgaAAgTQAAgOADgRQABgIAIAAQAEAAADACQADAEAAADIgBAPIgCAPIABAbQABALACAIIAHACIAGABQAMAAAPgEIgBgUIAAgSQAAgVACgQQABgIAJgBQAEABADACQACADAAAEIgBAlIAAAUIAAAVIAAAHIAAAGQAAAEgCADQgDADgEAAQgIAAgCgJg");
	this.shape_4.setTransform(-7.7,3.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAaBKIgEgXIgBgXIAAgIIAAgIQAAgRgJAAQgMAAgJAKQgFAGgJAQQAAAmgDAGQgDAGgGAAQgEAAgDgCQgDgDAAgEIABgEQABgDAAgMIABgOIAAhHIABgQIgBgJIgBgKQAAgEADgCQACgDAFAAQAIAAABAIIABARIAAAWIgBAVIAAAJQAIgLAKgFQAIgGAKAAQAQAAAGALQAEAHABARIABATIACAUIADAUIABADQAAAEgDADQgDACgEAAQgHAAgDgHg");
	this.shape_5.setTransform(-18.5,0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgaA2QgQgFABgKQAAgEACgDQADgDAEAAQAEAAAFAFQABACAJACIALABQAHAAAHgCQAJgDAAgGQAAgNgTgFIgJgCQgNgDgFgEQgJgEABgLQgBgVAUgJIARgGQANgDAGgDQAEgCAEAAQAFAAADADQACADAAAEIABAIIABAJQAAAEgCADQgDADgEAAQgFAAgDgEQgBgDgBgIIgWAHQgQAGABAKIAGABQAVAEAKAHQAQAKAAATQAAAQgNAIQgMAHgQAAQgNAAgLgFg");
	this.shape_6.setTransform(-29.6,2.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(3,1,1).p("AGmhxItLAAQgvAAghAhQghAiAAAuQAAAvAhAhQAhAiAvAAINLAAQAvAAAhgiQAhghAAgvQAAgughgiQghghgvAAg");
	this.shape_7.setTransform(0,1.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AmlBxQgvAAghghQghghAAgvQAAguAhgiQAhggAvAAINLAAQAvAAAhAgQAhAiAAAuQAAAvghAhQghAhgvAAg");
	this.shape_8.setTransform(0,1.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgkAvQgQgOgBgYQAAgbAOgTQAPgVAYAAQARAAAMAHQANAGAAAQQAAALgMAIQgFAFgSAHIgoATQAGAJAJAEQAJAFALAAQAIAAAKgDQAMgDAEgGQADgGAEAAQAFAAACADQADADAAAEQAAALgTAJQgRAHgPAAQgXABgPgMgAgVgcQgJAKgFAUIAhgQQATgJAIgHQgJgJgQAAQgNAAgIALg");
	this.shape_9.setTransform(31.9,3.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgMBOIACgnIABgnIABgmIAAgnQAAgLAKAAQALAAAAALIgBAnIgBAmIgBA1IgBAZQgCALgIAAQgLAAAAgLg");
	this.shape_10.setTransform(22.6,0.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgQBcQgEgDAAgFIABgCQACgOAAgQIAAgdIAAgfIgRACQgLAAAAgLQgBgLAUAAIAKAAIABgQQADgYAJgMQAKgOAYAAQAPAAAAALQAAALgOAAQgZgBgEAlIAAAGIAYgBQARAAAAALQAAAHgIACIgJABIgZABIgBAYIABAUIAAAUQAAATgCAMQgBAJgIgBQgEAAgDgCg");
	this.shape_11.setTransform(13.8,1.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgRBcQgDgDAAgFIABgCQACgOAAgQIAAgdIAAgfIgSACQgLAAABgLQgBgLAUAAIAJAAIACgQQADgYAKgMQAJgOAYAAQAPAAAAALQABALgOAAQgagBgEAlIAAAGIAYgBQARAAAAALQAAAHgIACIgJABIgZABIgBAYIABAUIAAAUQAAATgCAMQgBAJgIgBQgFAAgDgCg");
	this.shape_12.setTransform(2.7,1.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAYA0QgNAGgQABQgPAAgJgHQgKgGgCgOQgFgcAAgWQAAgPAEgSQABgKAJAAQAFAAADAEQADADAAAEIgCAQIgBAQIABAeQABANACAIIAHACIAIABQANABAPgFIAAgWIAAgTQAAgYACgRQACgKAJAAQAEAAADADQAEADAAAFIgCAoIAAAXIAAAWIAAAIIABAHQAAAEgEAEQgDACgEAAQgJABgCgKg");
	this.shape_13.setTransform(-8.4,3.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAdBRQgCgJgCgQQgCgPAAgKIAAgJIAAgIQAAgUgKAAQgNAAgKAMQgGAGgJASQAAApgEAHQgDAHgGAAQgFAAgDgDQgDgDAAgEIABgFQABgDAAgNIAAgQIABhNIAAgSIgBgLIgBgKQAAgEADgDQAEgDAEAAQAJAAABAJQACALAAAIIgBAXIAAAYIAAAJQAJgLAKgGQAJgGALAAQASAAAHALQAEAJABASIABAVIACAWQABAMADAKIAAADQAAAFgDADQgDACgFAAQgIAAgCgIg");
	this.shape_14.setTransform(-20.4,0.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgdA7QgRgFAAgLQAAgEAEgDQADgEAEAAQAEAAAFAGQACACAJABIANABQAIAAAGgCQAKgCAAgIQAAgOgUgFIgKgCQgOgDgGgFQgJgFAAgMQAAgWAVgKQAGgDAOgEIAUgGQAEgCAFgBQAFABADADQADADAAAEIABAKIACAJQAAAEgDAEQgDADgFAAQgGAAgCgFQgCgCgBgKIgZAIQgQAHAAAKIAGACQAYAEAMAIQARAKAAAVQAAASgPAJQgMAIgSAAQgPAAgMgGg");
	this.shape_15.setTransform(-32.6,3.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(3,1,1).p("AHQh8IufAAQg0AAglAkQgkAlAAAzQAAA0AkAkQAlAlA0AAIOfAAQA0AAAkglQAlgkAAg0QAAgzglglQgkgkg0AAg");
	this.shape_16.setTransform(0,1.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#66FFFF").s().p("AHQB9IufAAQg0AAgkglQglgkAAg0QAAgzAlglQAkgkA0AAIOfAAQA0AAAkAkQAlAlAAAzQAAA0glAkQgkAlg0AAIAAAAg");
	this.shape_17.setTransform(0,1.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AghAqQgPgMAAgWQAAgYANgSQANgSAWAAQAQAAAKAFQAMAHAAAOQAAAKgLAIIgUAKIglARQAGAIAIAEQAIAFAKAAQAHAAAJgDQALgDAEgFQADgGAEAAQADAAADADQADADAAADQAAALgSAIQgPAGgOAAQgVAAgOgLgAgUgZQgHAJgEARIAegNQAQgJAIgGQgJgIgOAAQgMAAgIAKg");
	this.shape_18.setTransform(29,3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgKBHIABgjIABgkIAAgiIABgkQAAgJAIAAQAKAAAAAJIAAAkIgBAiIgBAwIgBAXQgBAKgIAAQgJgBAAgJg");
	this.shape_19.setTransform(20.6,0.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgPBTQgDgCAAgEIAAgCQACgNAAgPIAAgaIAAgcIgQABQgJAAAAgJQAAgKARAAIAJgBIACgPQACgVAIgKQAKgNAVAAQAOAAAAAKQAAAJgNAAQgXAAgDAhIAAAGIAVgBQAQAAAAAJQAAAIgIABIgIAAIgWACIgBAVIAAASIABASQAAATgCAKQgBAIgHAAQgEAAgDgDg");
	this.shape_20.setTransform(12.6,0.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgPBTQgDgCAAgEIAAgCQACgNAAgPIAAgaIAAgcIgQABQgJAAAAgJQAAgKARAAIAJgBIACgPQACgVAIgKQAKgNAVAAQAOAAAAAKQAAAJgNAAQgXAAgDAhIAAAGIAVgBQAQAAAAAJQAAAIgIABIgIAAIgWACIgBAVIAAASIABASQAAATgCAKQgBAIgHAAQgEAAgDgDg");
	this.shape_21.setTransform(2.4,0.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAWAvQgMAGgPAAQgNAAgIgGQgKgGgBgMQgEgaAAgTQAAgOADgRQABgIAIAAQAEAAADACQADAEAAADIgBAPIgCAPIABAbQABALACAIIAHACIAGABQAMAAAPgEIgBgUIAAgSQAAgVACgQQABgIAJgBQAEABADACQACADAAAEIgBAlIAAAUIAAAVIAAAHIAAAGQAAAEgCADQgDADgEAAQgIAAgCgJg");
	this.shape_22.setTransform(-7.7,3.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAaBKIgEgXIgBgXIAAgIIAAgIQAAgRgJAAQgMAAgJAKQgFAGgJAQQAAAmgDAGQgDAGgGAAQgEAAgDgCQgDgDAAgEIABgEQABgDAAgMIABgOIAAhHIABgQIgBgJIgBgKQAAgEADgCQACgDAFAAQAIAAABAIIABARIAAAWIgBAVIAAAJQAIgLAKgFQAIgGAKAAQAQAAAGALQAEAHABARIABATIACAUIADAUIABADQAAAEgDADQgDACgEAAQgHAAgDgHg");
	this.shape_23.setTransform(-18.5,0.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgaA2QgQgFABgKQAAgEACgDQADgDAEAAQAEAAAFAFQABACAJACIALABQAHAAAHgCQAJgDAAgGQAAgNgTgFIgJgCQgNgDgFgEQgJgEABgLQgBgVAUgJIARgGQANgDAGgDQAEgCAEAAQAFAAADADQACADAAAEIABAIIABAJQAAAEgCADQgDADgEAAQgFAAgDgEQgBgDgBgIIgWAHQgQAGABAKIAGABQAVAEAKAHQAQAKAAATQAAAQgNAIQgMAHgQAAQgNAAgLgFg");
	this.shape_24.setTransform(-29.6,2.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0000FF").s().p("AmlBxQgvAAghghQghghAAgvQAAguAhgiQAhggAvAAINLAAQAvAAAhAgQAhAiAAAuQAAAvghAhQghAhgvAAg");
	this.shape_25.setTransform(0,1.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AmlBxQgvAAghghQghghAAgvQAAguAhgiQAhggAvAAINLAAQAvAAAhAgQAhAiAAAuQAAAvghAhQghAhgvAAg");
	this.shape_26.setTransform(0,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_25},{t:this.shape_7},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_26},{t:this.shape_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-16.2,110.1,31.9);
p.frameBounds = [rect, new cjs.Rectangle(-60.3,-17.4,120.8,35.1), new cjs.Rectangle(-55,-16.2,110.1,31.9), new cjs.Rectangle(-55,-11.6,110.1,25.7)];


(lib.samslegstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009933").s().p("AiYCIIgGgJIAWkJIAGgDIgGAAIAAgBIEVABQAXCFgGCJIhrADIgLiIIgFCUg");
	this.shape.setTransform(-7.7,4.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("AjVFuQgOgMAIgTIAEgKIgOAVIgLAFIAAgXIgRARIAFgcIgSAPIADgSIgOAKIAAgOIgFgCQB6iPgdjAQgRhtgGhuIgIhuIBvAGQglEVgQEVQgEBPgUBOIgDAIgACvEcIgXgOQh1AqgRh0QgHgmgBgmQgLjjgrjhIgHghQA3gIAvAPQAKEeA0EaQA2AlA9ARIAoAMIACACQgCAFgDAEIgmgNIAcAUQgNAEgOAAQgbAAgagOgADrEDIATgEIAZALIAIAIgAhnlgIACgBIgBADIgBgCg");
	this.shape_1.setTransform(2,55.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AkkHYIgKgPIAmgrIAAgGQBBiMgUieQgFgigBgjQgEh9gLh+IgfgQQgJiTAliNIEnAEQA4CQgbCYIgJABIgEAEIAtI4Qg0kbgJkdQgwgPg2AIIAGAhQArDgALDkQACAmAGAmQASB0B0gqIAYAOQAmAVAqgLIgdgUIAnANQADgEABgFIgCgCIgogMQg9gRg2glQBKATBDAaIgTAEIA0APIgIgIIAYAKQhABAhagkQgTgIgWABQhDgFgqgxQAUjJg4jBIgEgDQAAhigXheIgNgLIgIADQg2E0gJE5QgBArgUAlIgUAOQAThOAFhPQAQkWAlkUIhwgGIAIBuQAHBtAQBtQAdDBh6CPIAFACIAAAOIAOgKIgDASIASgPIgFAcIARgRIAAAXIALgFIAOgVIgEAKQgHATANAMQgxgCgegpgAhnjLIACACIABgDIgDABgAjpn1IAGAAIgGADIgWEKIAGAJIC8AHIAFiUIALCJIBqgDQAGiKgXiFIkVgCg");
	this.shape_2.setTransform(2,40.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.samslegstill, rect = new cjs.Rectangle(-28.3,-11.2,60.7,103.3), [rect]);


(lib.samsheadstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("AhFCDIACgKIAGg1QACgRAIgMIgRACQgYABgPgSIAAgLIADgFIAoABQgKgIgMAAIgMgBQAWgkAdggQAJgKAMgDIABgVIAxgSIADgKQARANAOAPQAeAgAUAnIgMAOIgKARIACAQIgCAEQgRAFgRgCIgdgFQgJAAgEgGIgFABIgCAIQAGAIALACQAjAFAjgJIgBAKQgCAIgFAHQgHALgLAIQgKAIgGAKQgHAPAKAQIAXALgAAQhUQgOAAgHAMIADALIAEgJQARgLAWAIIAHgDQgMgJgQAAIgEABg");
	this.shape.setTransform(1.1,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABVCWIgXgMQgKgPAHgPQAGgLAKgHQALgJAIgKQAFgHACgJIABgJQgjAJgkgFQgLgCgGgIIACgIIAGgCQADAGAJABIAdAFQARACARgFIADgEIgDgRIAKgRIANgOQgVgmgeggQgOgPgQgNIgEAJIgwATIgBAVQgMADgKAJQgdAhgVAkIALAAQAMAAALAJIgpgBIgDAEIAAAMQAPARAYAAIARgDQgIANgCAQIgGA2IgCAKIgNAAIAIgFIAChJIgigRIgKgVIACgHIAJgEQAHgYgNgWQgDgFgDgDIgTABIATgwIgVgPIAggFIgCgFIAegJIADglIAQAZIAkgXIApAAIgFAJIABAEIA3ALIgTAOQACARAMAKQAPAQANASIAZAjIgWAfQALAogcAfIgIAIIgPAKIACAcIAlAPgAAFg1QAJgMANgBQASgBAOAKIgHADQgVgIgSALIgFAJg");
	this.shape_1.setTransform(0,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.samsheadstill, rect = new cjs.Rectangle(-12.8,-14.8,25.6,30), [rect]);


(lib.samsbodystill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99CCFF").s().p("AgLAZIAAABIgCABIACgCgAAMgZIACAAIgFAGg");
	this.shape.setTransform(12.1,9.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("AhzCmQg7gRgVg4QgJgbgCgcQgCgVAEgTIADgVQABgFgBgFIgDANQgdgTAAgiQAAgpAZgiIBGglQAJgEAIgGIAEgFICMAAIBAAQIAXAWQALALAEANIATAzQAHARAJAQQAVAoAQApIABACQAaAjAKArQgHAPgJALQgQATgWAKIAAAAQAFgYgDgZQgCgUgOgQIgFADIhEhfQgFgGAAgHQgCgQAAgRQgHABgCAIQgFAUAJASQAEAIADAIQADANABANQABAdgJAdQgJAegNAdQgzADgsgUQgbgMgbgKQgLgEgEgMQgLgbgGgdIgKgxIA2ANQgMgLgQgEIgKgEIgRgdIgMAVQARAmAEAoIAEBDIAEgUIAKALQA7AXA7AQQAUAFAVAEQAPgBAOgDQAGgCAGgFIAFgGIACAAIgBgBIAWgtIAEgGIAAABIgCAQQgCAIAAAJQAAAHAEAFIAHAHIABgGIgDgGIADgRIAUgLIgFAlIgGAHIgJgEIALAKQAYgagJgjQAWAQgKAcIgGASIABAEQgIAUgSAOQgHAGgJADQgbADgcABQhfgHhdgcgAA+gYQgPAHgQABQgFAAABAEQABABAAAAQAAAAABAAQAAABABAAQAAAAABAAQAVAAATgKQAJgFgHgGIgLAHgACsCvIAAAAIAAABIAAgBgABPCLIABgIIAAAAIAYgKIgPATgABmASIgBgFIAGAFg");
	this.shape_1.setTransform(0.5,-2.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABrDOQhJgDhFgSQg1gMgygRQglgLgTghQgKgRgFgWQgLgvAFgvQgRgUgGgaQgHgjARgeQAGgLAJgIQAagUAdgPQAVgLAXgJIgEAEQgIAGgJAFIhGAkQgZAjAAApQAAAiAdATIADgNQABAFgBAFIgDAUQgEAUACAUQACAcAJAbQAVA5A7ARQBdAcBfAGQAcAAAbgEQAJgCAHgGQASgOAIgUIgBgFIAGgRQAKgdgWgPQAJAigYAbIgLgKIAJAEIAGgHIAFgmIgUALIgDARIADAGIgBAGIgHgHQgEgFAAgHQAAgIACgJIADgQIAEADIABAMIAWgJIgyhKIgGgGIABAFQAGAagKAbIgOAjQgEAKAAALIADgFIAYgKIAKgiIALAIIgDAHIgWAtIgBABIgFAGQgGAEgGACQgOADgPABQgVgDgUgFQg7gRg7gWIgKgMIgEAUIgEhCQgEgpgRglIAMgVIARAdIAKADQAQAEAMALIg2gNIAKAxQAGAdALAcQAEALALAEQAbALAbAMQAsATAzgCQANgeAJgdQAJgdgBgdQgBgOgDgLQgDgJgEgIQgJgTAFgUQACgHAHgBQAAAQACARQAAAHAFAFIBEBgIAFgEQAOAQACAVQADAZgFAYIAAAAIAAAAQAWgLAQgSQAJgLAHgPQgKgrgagkIgBgCQgQgogVgoQgJgRgHgRIgTgyQgEgOgLgLIgXgVIhAgQIBAAHQAoAbAOAvQAEAQAHAPIAXAqQALAUAJAVQAKAWAMAWQAOAbAGAdQADARgIAMQgWAigmAQIAAAAIAAABQgVAggjAGIgMgBgABTB8IgBAJIAKAAIAPgSIgYAJIAAgBIAAABgAAigRQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQgBgFAFAAQAQAAAPgIIALgGQAHAFgJAGQgSAJgUAAIgCAAg");
	this.shape_2.setTransform(0.2,-1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.samsbodystill, rect = new cjs.Rectangle(-23.8,-22.1,48.2,41.5), [rect]);


(lib.prolegsstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AAAAAIAAgBIABABIAAABIgBABQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAg");
	this.shape.setTransform(-41.1,43.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC9966").s().p("AAqFVIgEgJIAFAAIAGAFIANgGIgPgJIgQAMQg5glhCgRIg1gMQhNAAgfhEQAhgxgEg8QgDgggRgcIgMgUQgLgTgGgUQgTg5AMg/QAFgXANgUQAlg3gDhAICSAEQALAcgSAZQAFA7gCA8QgBAngHAmQgVBvAPBtQAgAgAqARIgjgZQgHgmAGgkQAEgZgCgZIgTk8QARgcgKggQAvgEAkggIBNAQQgZBkgHBpQgDA0gFAzQgKBwBCBWICKAsIAKgCIgFAKIAQARIgIAeIgPgFIgLAOIgGgBIgEgFQgJgSANgPIgcgHQhHAqhNgbIA1AhQAagZAiAMIABALQgGAogkgHIACAKQgFADgGABQgOAGgKgHIACgIIgDgHIgMgEIAIAhIgLAJgABnEqIARANIAIgDQgEgMgLAAQgEAAgGACgADmD2IAIACIACgMgACyElQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBQgCgRgEgOIgBgEQArgXgKAvIgBAIQgMAGgHAAIgFgBgAELD1IABgKIgHgIIADgJIANAJQAKAJgCAOIgNADg");
	this.shape_1.setTransform(-9,66.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAaHzQgmgWgsgNQhGgYhGgbQgugRgPgwQAhgjAEgxQAFg6gTg3IALAUQASAbACAhQAEA8ggAxQAeBDBNAAIA2AMQBCASA5AkIAQgLIAPAJIgNAGIgGgFIgFAAIADAIIAcAKIALgKIgHggIALAEIAEAHIgDAIQAKAHAPgGQAFgBAFgDIgBgLQAkAIAFgpIAAgKQgjgMgaAZIg1giQBNAcBHgqIAcAGQgNAQAKASIAEAFIAFAAIALgNIAPAFIAJgfIgQgRIAFgKIgKADIiKgsQhDhWALhxQAFg0ADgzQAGhoAZhlIhNgPQgjAggvAEQAJAggQAbIATE8QABAagEAZQgGAkAHAmIAjAZQgqgRgfghQgQhsAVhwQAHgnABgnQACg6gFg8QASgYgKgcIiTgEQAEA/gmA4QgNATgEAYQgMA+ATA5IgCgEQgXgrAEgyQAFhFAog8QAUgfgOgjIgYgHQgZgGgXgNIgVgPQAJg4gJg5QgOheAkhTIHDACQgCBigIBjQgEAtAJAtIgnAWQAGAagGAYQgtCvASC1QAFAsASAnQAZARAeAMQA9AXBAADIAEAFIAGADIAEADIAEAEIAGAJQACAFABAFIAAAGIgEASQgGABgGACQgLAEgLAGIgUAPIgGAFQgHAFgJgDIgEAAIgBAAIgKAGIgLAFIgCACIgFAAQgEACgFABIgIgCIg5ArQgaAUgdAAQgYAAgagOgADAGMIAAADQAFAPACARQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAAAQAIADAPgJIACgIQAGgfgQAAQgJAAgOAIgAEbFvIAGAIIgBAKIAGAHIANgCQACgOgLgJIgMgJgAg3E5QgHg9APg7QANgwgYgrIgDgFQglBvArBpgAB8G2QAUgIAFASIgIADgAD8GCIAJgKIgBAMg");
	this.shape_2.setTransform(-11.2,52.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.prolegsstill, rect = new cjs.Rectangle(-43,1.2,63.7,102.7), [rect]);


(lib.proheadstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC9966").s().p("Ah+BtIAIgJIAFgBIAHAIIAQgrIAggRIgJgLIAFgFIADgFQAHgQADgTIADAIQABACgBADIgDAWIACAEIAGgDIAUhZIAHANIAEAKQAFANgEAPIAGADIADgBIAFgNIgQgeIACgcIAkArIAEgeIgPgSIgCAIIAJANIgHAGIgFgbIAWgVIAsgCIANAwIAlAAIgDALIgCAEQgGAJgLABQgFADgGAAIAAAkIgoAfIApgRIgIASIgXAtIhVgCIARAKQAZANAeABIAGAGgAA0hYQgHAQAJAQIAFAAIAAgBIACgEQAGgPgIgPIgFAAIgCADg");
	this.shape.setTransform(5.7,6.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABrCpQgegBgZgOIgSgJIBWACIAYgtIAHgTIgoARIAngeIABglQAFAAAFgDQAMgCAGgIIACgEIADgLIglAAIgOgvIgsACIgWAVIAFAaIAIgGIgKgMIACgIIAPASIgEAdIgkgqIgCAaIARAfIgFAMIgFACIgFgDQAEgPgGgNIgEgKIgGgNIgVBaIgFADIgDgEIAEgWQAAgEgBgDIgDgHQgDATgFAQIgEAGIgEAFIAIALIgfARIgQArIgHgIIAIgRIgEgIIgRAAIgNAHQgEgPgOgIIgOAQIgNgZIgBAYIgRgnIgFABIgEADIgBARIgGgCIgDgFQgBgSALgPIgFgIIgKgBIgEAGIgGAKQgCADgFADQAAgWAOgQIAAgTIgJADIgMguIAWgcIAAgLIAkgbQgMgCgJAIIgFAFIgDACIgLgIQAWgMAXgBIAAgPQAYgGATgRIgNADIgHgDIgDgFQAggNAggLQAJgDAJgBIAAgIIAUAIIAHgEIgLgKIACgEQALAEAGALQADAFABAHIAEAFIABgBIgCgLIAKgZQAVAHAagDIAGAGIAcADQgVAOgbAHQgIACgIgBIgEAGIANAGQAWgNAZgCQAKAAALACIgDAOQARABAPALQAKAGAFANQAEAJgFAGQgGgTgTAGIAWAWIAQgEQAEAMgCALIgCAHIgKgPIgOADIADACQgMAZAHAYIAFACQAQgFAOAIQAKAFABALQgEANgMAGIgTAJQAIAjgNAiQgMAdgYATIABANIgGACgAhfCvQAQgFASgEIgJAJgABvAIQgJgOAHgQIACgEIAEAAQAIAPgFAPIgDAEIAAAAIgEAAg");
	this.shape_1.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.proheadstill, rect = new cjs.Rectangle(-19.4,-17.3,38.8,35), [rect]);


(lib.probodystill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC9966").s().p("ABWDDIgDgCQgHgJAGgLQADgGABgIIABgHIAOACIgIAXIA0AMQgIAOgTAAQgSAAgOgIgAhEC6IA3gTIAgAcQgOACgMAAQgfAAgegLgAitDCQgdgYgQgfIAAgGIgOgTIABgBQgOgdgEghQgDgWABgVQABgeATgZIgHgvQAXgxAtgcIAJgDQAjgPAkgNICoAAIADAGQAcABAZALQAJAEAHAJQALAOAJAQIAMAXQApARARAnQARAlgGAoQgEAhgYAXQgWAUgZAQQgQALgSAIIgZALIAAgYIgQgTIgCghIA0gsQgLgTAGgWQAEgQgCgPQgCgQgFgQQADAbgCAXQgCARgLAQQgEAEAAAIIAAAIQgLAMgKAQQgEAIgBAJIgDAPIgFAPQhOgbhRAJQgMgJgOADIgOABQAfgzgYg1QAUgPAHgXIABgFQgZAUgLAdQALAUgEAVQgGAdgHAcQgfAAgZAOIgCAJQARgMAVgDQAzAAAyAJQAOADAKgLQBAAAA1AnQAHAJgEANIgCAJQgXgVgegDIADAOQAAAFgBAEIgCAEQABgLgJgEQgHgFgHADIARAVIgBAIIgfgUIARARQAEALgEALQgCAHgEADIgDABIgIgBIgHgKIACAAIAAgBIABgEQgOgZgbAIQgPAEgNAHQgyAYg4AAIgMAAgABNCVIABAVQgNAPgRAFIgMADg");
	this.shape.setTransform(-0.1,-15.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABdDKQgRgFgRAAQgRgDgQADQgeAHgggDQgXgDgUgIIgDgFQgDACgDgBIgfAKQgbAIgZgKQgLgFgKgFQgMgIgIgMQgWgegJggIgMgkQgMgjAJgkIALg2IADgWQADgTAGgSQAFgOALgLQAkgkAtgTQAXgKAZABQgkANgjAPIgJADQgtAcgXAxIAHAvQgTAZgBAeQgBAVADAWQAEAhAOAdIgBAAIAAABIAOATIAAAGQAQAfAdAYQA+ADA4gbQANgHAPgEQAbgIAOAZIgBAEIAAABIgCAAIAHAKIAIABIADgBQAEgDACgHQAEgLgEgLIgRgRIAfAUIABgIIgRgVQAHgDAHAFQAJAEgBALIACgEQABgEAAgFIgDgOQAeADAXAVIACgJQAEgNgHgJQg1gnhAAAQgKALgOgDQgygJgzAAQgVADgRAMIACgJQAZgOAfAAQAHgcAGgdQAEgVgLgUQALgdAZgUIgBAFQgHAXgUAPQAYA1gfAzIAOgBQAOgDAMAJQBRgJBOAbIAFgPIADgPQABgJAEgIQAKgQALgMIAAgIQAAgHAEgFQALgQACgRQACgXgDgbQAFAQACAQQACAPgEAQQgGAWALATIg0AsIACAhIAQATIAAAYIAZgLQASgIAQgLQAZgQAWgUQAYgXAEghQAGgogRglQgRgngpgRIgMgXQgJgQgLgOQgHgJgJgEQgZgLgcgBIgDgGQAfACAeAMQALAFAHAKQAUAZAMAcQAZAKARAUQANAOAJASQAKAVAAAWQABAygiAkQgvAzhCAXIAAAFIgGACIgIAXIAMgBIAKAAQAOACANAKQgJAYgbADIgXgGgABWCaQgBAIgDAGQgGALAHAJIADACQAOAIASAAQATAAAIgOIg0gMIAIgXIgOgCIgBAHgAhEC1QAqAQAtgHIgggcIg3ATgAAkC8IAMgDQARgFANgPIgBgVg");
	this.shape_1.setTransform(-0.1,-14.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.probodystill, rect = new cjs.Rectangle(-26.3,-35.5,52.6,41.6), [rect]);


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
p.nominalBounds = rect = new cjs.Rectangle(-1,-1,48.8,23);
p.frameBounds = [rect, rect, rect, rect];


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

}).prototype = getMCSymbolPrototype(lib.general_buttoncolor, rect = new cjs.Rectangle(0,0,23.7,23.6), [rect]);


(lib.Copyright = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAxAOIgFgUIgIATQgHAPgFAAQgEAAgCgFIgDgPIgCgOQgKAigIAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIACgEQAFgIAEgMIAGgWQABgEAEAAQAIAAADAPIAEAVIAFgMIAGgRQADgIAEAAQAEAAACAFIAFASIAEANQACAHADAHIABADQAAAAAAABQAAAAAAABQgBABAAAAQAAAAgBABQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQgGAAgEgQgAglAYIgBgPIgBgMIAAgMIgKAAIgJgBQgGAAAAgGQAAgGAGAAIAIABIAJAAIAZAAIAGAAIAGgBQAFAAAAAGQAAAGgEAAIgYABIAAANIABAMIABAHIABAHQAAAAAAABQAAAAgBABQAAABAAAAQgBAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgGAAgBgFg");
	this.shape.setTransform(102,-3.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgVAsQgMgFAAgIQAAgDACgCQADgCADAAQACAAAEADQACACAHABIAJABQAFAAAFgBQAHgDAAgFQAAgKgOgEIgIgCQgKgCgEgDQgHgDAAgJQAAgRAQgHIAOgFIAOgFIAHgBQAEAAACACQACACAAAEIABAHIABAGQAAAEgCACQgCACgEAAQgEAAgCgDIgCgIIgSAFQgLAFAAAIIAEABQARADAJAGQANAHAAAPQAAANgLAHQgJAFgNAAQgLAAgJgDg");
	this.shape_1.setTransform(90.8,2.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgVAiQgMgKAAgRQAAgOALgRQAMgTANAAQAIAAAKAEQALAEAAAHQAAADgBACQgCACgDAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAIgEgCQgEgFgLAAQgHAAgHAPQgHANAAAIQAAALAHAFQAGAGAJAAQAFAAAFgDIAJgEIAEgBQADAAACACQACADAAACQAAAGgMAFQgLAFgHAAQgPAAgKgKg");
	this.shape_2.setTransform(83,2.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgHA4QgCgCAAgDIAAgOIAAgOIABgSIAAgSQAAgDACgDQACgCAEAAQACAAACACQACADABADIgCASIAAASIAAAOIAAAOQAAADgCACQgCADgCAAQgDAAgDgDgAgEgqQgDgDAAgEQAAgDADgDQADgDACAAQAEAAADADQACADAAADQAAAEgCADQgDACgEAAQgCAAgDgCg");
	this.shape_3.setTransform(76.8,0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AATAmIgCgRIgBgRIAAgGIABgIQgBgRgGAAQgJABgHAJQgGAKgFANIgBAIIAAAIIAAAHIABAHQAAAEgCACQgCACgEAAQgDAAgCgCQgDgCAAgEIAAgHIgBgHIACgWIABgWIAAgHIAAgIQAAgDACgCQACgCADgBQAHAAABALIAAAJQANgRANgBQANAAAEAMQAEAHABAOIAAAIIgBAHQAAAGACAKIABARQAAADgBACQgDACgDAAQgHABgBgIg");
	this.shape_4.setTransform(70.4,2.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAZAoIgFgGIgOAGQgFACgDAAQgSAAgIgKQgJgKAAgUQABgRANgOQANgNAQAAQAIAAAIADQALAFAAAGIgCAEIgBAJIgBARQAAAJACAGIAEAOIACAEIAAABQAAADgCACQgCACgCAAQgCAAgEgDgAgMgTQgJAKAAAMQAAANAEAGQAFAHAJAAQAHAAAEgDIAIgGQgCgUAAgKIABgHIABgJIgFgCIgEAAQgLAAgIAJg");
	this.shape_5.setTransform(61.9,2.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAVA7QgCgHgBgLIgBgTIAAgGIAAgGQAAgOgHAAQgKAAgHAIQgEAEgHANQAAAegDAGQgCAEgEABQgEAAgCgCQgCgCAAgEIAAgDIABgMIAAgLIABg4IAAgOIgBgHIAAgHQAAgEACgCQACgCADAAQAHAAABAHIABANIAAARIgBASIAAAHQAHgJAHgFQAGgDAJAAQANAAAEAIQAEAGAAANIABAPIACAQIACAQIAAACQAAAEgCACQgCACgDAAQgGAAgCgGg");
	this.shape_6.setTransform(53.3,0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgVAiQgMgKAAgRQAAgOALgRQAMgTANAAQAIAAAKAEQALAEAAAHQAAADgBACQgCACgDAAQgBAAAAAAQgBAAgBAAQAAAAAAAAQgBgBAAAAIgEgCQgEgFgLAAQgHAAgHAPQgHANAAAIQAAALAHAFQAGAGAJAAQAFAAAFgDIAJgEIAEgBQADAAACACQACADAAACQAAAGgMAFQgLAFgHAAQgPAAgKgKg");
	this.shape_7.setTransform(44.5,2.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgaAiQgMgKAAgSQAAgTAKgOQALgOARAAQAMAAAJADQAKAGAAALQAAAIgJAHQgEACgNAGIgcANQAEAHAGADQAHAEAIAAQAFgBAHgCQAJgCADgEQADgFADAAQADAAACACQACACAAAEQAAAIgOAHQgMAEgLAAQgRAAgLgIgAgPgUQgHAHgDAOIAYgLQANgGAGgFQgGgHgMAAQgJAAgGAIg");
	this.shape_8.setTransform(36.1,2.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAwA7QgDgEgBgJIgDgNIgKg2IgQAuIgFAPQgCAJgEAFQgDAGgEAAQgEAAgDgFIgEgIIgCgJQgHgbgHgfIgDAOIgKAoQAAAIgDAOQgDAGgFAAQgEAAgDgDQgBgCAAgEQAAgNAFgTIAIgeIAGgZQACgRAFgFQACgFAGAAQAFAAACAGQADAHADAVQAEAaAKAdQAKgdAJghIABgLQACgHACgEQAEgGAEAAQAIAAADANIADASQAFAjAGAZIAFANIACANQAAAEgCACQgDACgDAAQgEAAgDgEg");
	this.shape_9.setTransform(24.6,0.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgdAkIAAg2IAAgHIAAgIQAAgIAHAAQAIAAAAANQAOgPASAAQAGAAADAFQADAFAAAKIAAAFQAAAKgHAAQgHAAAAgIIAAgFIgBgHQgMACgGAFQgHAFgFAKIAAAqQAAAIgIAAQgGAAAAgIg");
	this.shape_10.setTransform(9,2.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAZAoIgFgGIgNAGQgGACgDAAQgTAAgHgKQgJgKABgUQgBgRANgOQANgNASAAQAGAAAJADQALAFAAAGIgCAEIgCAJIAAARQAAAJABAGIAGAOIABAEIAAABQAAADgBACQgCACgEAAQgBAAgEgDgAgNgTQgIAKAAAMQAAANAEAGQAFAHAJAAQAHAAAFgDIAIgGQgDgUAAgKIABgHIABgJIgFgCIgDAAQgLAAgKAJg");
	this.shape_11.setTransform(0.9,2.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgEAuQgCgDAAgDIgCgcIgCgbQAAgIgCgEQgFACgGAGIgJAKIgEAFIgBANIgBANIABAHIABAGQAAADgDACQgCADgDAAQgJAAAAgVIABgNIAAgOIAAgMIgBgMQAAgSAIAAQADAAADADQACACAAADIAAAFIgBAFIAAAIQAEgJAIgGQAIgHAGAAQAMAAAEAMQAEgGAGgDQAGgDAIAAQANAAAEAPIAEAVIAFAsQAAADgCADQgCACgEAAQgGAAgBgHIgDgYIgDgXIgCgLQgDgHgDAAQgDAAgIAFQgHAEgDADIABAPIACAUIACAUQAAADgDADQgCACgDAAQgCAAgDgCg");
	this.shape_12.setTransform(-9.4,2.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgEAuQgCgDAAgDIgCgcIgCgbQAAgIgCgEQgFACgGAGIgJAKIgEAFIgBANIgBANIABAHIABAGQAAADgDACQgCADgDAAQgJAAAAgVIABgNIAAgOIAAgMIgBgMQAAgSAIAAQADAAADADQACACAAADIAAAFIgBAFIAAAIQAEgJAIgGQAIgHAGAAQAMAAAEAMQAEgGAGgDQAGgDAIAAQANAAAEAPIAEAVIAFAsQAAADgCADQgCACgEAAQgGAAgBgHIgDgYIgDgXIgCgLQgDgHgDAAQgDAAgIAFQgHAEgDADIABAPIACAUIACAUQAAADgDADQgCACgDAAQgCAAgDgCg");
	this.shape_13.setTransform(-21.8,2.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAZAoIgFgGIgNAGQgGACgDAAQgTAAgHgKQgJgKAAgUQAAgRANgOQAOgNARAAQAGAAAJADQALAFAAAGIgCAEIgCAJIAAARQAAAJACAGIAEAOIACAEIAAABQAAADgCACQgBACgDAAQgCAAgEgDgAgMgTQgJAKAAAMQAAANAEAGQAFAHAJAAQAHAAAEgDIAIgGQgCgUAAgKIABgHIABgJIgFgCIgEAAQgLAAgIAJg");
	this.shape_14.setTransform(-32.2,2.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgdAkIAAg2IAAgHIAAgIQAAgIAHAAQAIAAAAANQAOgPASAAQAGAAADAFQADAFAAAKIAAAFQAAAKgHAAQgHAAAAgIIAAgFIgBgHQgMACgGAFQgHAFgFAKIAAAqQAAAIgIAAQgGAAAAgIg");
	this.shape_15.setTransform(-40,2.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgnA1QgKgLAAgVQAAgVAKgUQAJgVAQgNQAJgJAKAAQAIAAALAEQAPAGAAAHQgBADgCACQgCADgEAAIgFgCQgLgHgJAAQgFAAgGAGIgJALQgSAYAAAbQAAAPAEAFQAGAHAMAAQANAAALgJQALgKAEgRQgVABgPAIIgEAAQgDABgCgDQgDgDAAgDQAAgEAFgDQAQgJApAAQAEAAACADQACAAAAAEQAAAFgEACQgFAYgQAOQgPAPgVAAQgTAAgJgLg");
	this.shape_16.setTransform(-49.4,0.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgZA8QgCgDAAgDQAAgCAFgNIARgqQALgaAMgOIACgBIgngBIgRAAQgIgBAAgHQAAgDACgCQADgCADgBIAdABIAdABIAOAAQAJAAAAAFQAAAEgFAGIgHAIQgKAMgJAQIgOAeIgGASQgEAMgDAGQgCADgEABQgEAAgCgCg");
	this.shape_17.setTransform(-64.5,0.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AACA9IgOAAIgIAAQgEgCAAgFQAAgIAMAAIAEAAIADAAIAAgKIgBgLIACgeQABgTAAgLQgKAJgDAAQgDgBgCgCQgDgDAAgDQAAgDAHgGIAMgJQAGgHAGAAQAFAAAAAGIAAAFIgBAGIABAIIAAAIIgCAaIgCAaIAAALIABAKIAIAAQAEAAACACQACACAAAEQAAADgCACQgCACgEAAg");
	this.shape_18.setTransform(-73,0.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgjApQgHgRgBgaQAAgXALgQQANgUAUAAQAVAAALARQALAPgBAWQABAigLASQgMARgVAAQgYAAgLgVgAgUgfQgIAMAAAQQAAAZAIAMQAGANAOAAQAQAAAHgTQAFgNAAgTQAAgVgGgLQgHgKgOAAQgNAAgIAPg");
	this.shape_19.setTransform(-81.6,0.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAYA7IgGgCIgLABIgMABIgJABIgJAAIgCAAIgCAAQgGgBgCgFIgBgJQAAgSAKgLQAFgGAUgMQAKgHADgFQAIgIgBgKQAAgEgGgFQgGgDgGAAQgFAAgHAEIgLAJQgDACgCABQgJgBAAgGQAAgEADgCQAJgJAHgEQAJgFAJAAQANAAALAHQALAHgBAMQAAAIgCAHQgCAHgFAFQgFAGgOAJQgPAJgEAGQgJAIABANIAPgBIAXgBQAHgBAEADQAIADgBAFQAAADgBACQgCACgEAAIgFgBg");
	this.shape_20.setTransform(-91.3,0.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("Ag3ACQAAgUATgRQAUgSAXABQAXAAANAOQANAOAAAWQAAASgQASQgRATgWABIgBAAQg3AAAAg0gAgbgbQgOAMAAARQAAAUALAJQAKAIAVAAQARAAANgPQALgOAAgOQAAgPgIgJQgHgLgQAAQgXAAgPAMgAgVARQgJgIAAgJQAAgMANgJQAMgIALAAQAEAAAEACQAEACgBAFQAAAGgFAAIgDgBIgCAAQgIAAgHAEQgIAFABAGQAAADAEAEQAFACAFABQAEgBAGgFIAIgEQAEAAACACQABADAAACQABAFgKAGQgIAFgIAAQgLAAgJgGg");
	this.shape_21.setTransform(-102.7,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-111.1,-13.1,222.2,26.3);
p.frameBounds = [rect];


(lib.circlebuttonnext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_3 = function() {
		playSound("SEClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(3).call(this.frame_3).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("ABsAAQAAAtggAfQgfAggtAAQgsAAggggQgfgfAAgtQAAgsAfggQAggfAsAAQAtAAAfAfQAgAgAAAsg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Agtg7IBbA7IhbA8g");
	this.shape_1.setTransform(1.5,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3,1,1).p("AB3AAQAAAxgjAjQgjAjgxAAQgwAAgjgjQgjgjAAgxQAAgwAjgjQAjgjAwAAQAxAAAjAjQAjAjAAAwg");
	this.shape_2.setTransform(0,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#66FFFF").s().p("AhTBTQgjgiAAgxQAAgwAjgjQAjgjAwAAQAxAAAjAjQAjAjAAAwQAAAxgjAiQgjAkgxAAQgwAAgjgkgAghBCIBjhCIhjhBg");
	this.shape_3.setTransform(0,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgxhBIBjBBIhjBCg");
	this.shape_4.setTransform(1.6,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(3,1,1).p("ABMhMQAgAgAAAsQAAAtggAfQgfAggtAAQgsAAggggQgfgfAAgtQAAgsAfggQAggfAsAAQAtAAAfAfg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Agtg7IBbA7IhbA8g");
	this.shape_6.setTransform(1.5,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0000FF").s().p("AhMBMQgfgfAAgtQAAgsAfggQAggfAsAAQAtAAAfAfQAgAgAAAsQAAAtggAfQgfAggtAAQgsAAgggggAgeA8IBag8Ihag7g");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhMBMQgfgfAAgtQAAgsAfggQAggfAsAAQAtAAAfAfQAgAgAAAsQAAAtggAfQgfAggtAAQgsAAggggg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_8},{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-12.3,-12.3,24.6,24.6);
p.frameBounds = [rect, new cjs.Rectangle(-13.3,-13.4,26.8,26.8), rect=new cjs.Rectangle(-12.3,-12.3,24.6,24.6), rect];


(lib.twiggsstandingstill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.twiggslegsstill();
	this.instance.parent = this;
	this.instance.setTransform(-1.5,39.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.twiggsstandingstill, rect = new cjs.Rectangle(-18.9,-0.7,37.8,80.8), [rect]);


(lib.twiggshead = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.twiggsheadstill();
	this.instance.parent = this;
	this.instance.setTransform(-6,2.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.twiggshead, rect = new cjs.Rectangle(-21.5,-14.1,31.5,32.7), [rect]);


(lib.twiggsbody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.twiggsbodystill();
	this.instance.parent = this;
	this.instance.setTransform(0,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.twiggsbody, rect = new cjs.Rectangle(-17,-16.4,34,33.6), [rect]);


(lib.stacelegs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.stacelegstill();
	this.instance.parent = this;
	this.instance.setTransform(7.4,30.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.stacelegs, rect = new cjs.Rectangle(-9.9,-12,34.6,83.8), [rect]);


(lib.stacehead = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.staceheadstill();
	this.instance.parent = this;
	this.instance.setTransform(0,7.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.stacehead, rect = new cjs.Rectangle(-23.5,-11.4,37.5,30.1), [rect]);


(lib.stacebody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.stacebodystill();
	this.instance.parent = this;
	this.instance.setTransform(-0.1,-2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.stacebody, rect = new cjs.Rectangle(-26.1,-12.6,52.4,31.6), [rect]);


(lib.slimlegs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.slimlegstill();
	this.instance.parent = this;
	this.instance.setTransform(6.1,30.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.slimlegs, rect = new cjs.Rectangle(-12.7,-8.4,37.6,77.8), [rect]);


(lib.slimhead = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.slimheadstill();
	this.instance.parent = this;
	this.instance.setTransform(0,5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.slimhead, rect = new cjs.Rectangle(-10.8,-8.1,21.5,27.9), [rect]);


(lib.slimbody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.slimbodystill();
	this.instance.parent = this;
	this.instance.setTransform(2.8,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.slimbody, rect = new cjs.Rectangle(-15.9,-19.2,37.4,40.3), [rect]);


(lib.samslegs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.samslegstill();
	this.instance.parent = this;
	this.instance.setTransform(2.8,1,0.82,0.82);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.samslegs, rect = new cjs.Rectangle(-20.5,-8.2,49.8,84.7), [rect]);


(lib.samshead = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.samsheadstill();
	this.instance.parent = this;
	this.instance.setTransform(-1.2,7.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.samshead, rect = new cjs.Rectangle(-14,-6.9,25.6,30), [rect]);


(lib.samsbody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.samsbodystill();
	this.instance.parent = this;
	this.instance.setTransform(-0.2,-8.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.samsbody, rect = new cjs.Rectangle(-24.1,-30.5,48.2,41.5), [rect]);


(lib.prolegs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.prolegsstill();
	this.instance.parent = this;
	this.instance.setTransform(16.1,-2.2,0.686,0.686);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.prolegs, rect = new cjs.Rectangle(-13.5,-1.4,43.7,70.5), [rect]);


(lib.prohead = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.proheadstill();
	this.instance.parent = this;
	this.instance.setTransform(0,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.prohead, rect = new cjs.Rectangle(-19.4,-16.5,38.8,35), [rect]);


(lib.probody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.probodystill();
	this.instance.parent = this;
	this.instance.setTransform(1.2,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.probody, rect = new cjs.Rectangle(-25.1,-20.5,52.6,41.6), [rect]);


(lib.Legs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.slimlegs();
	this.instance.parent = this;
	this.instance.setTransform(254.6,-35.3);

	this.instance_1 = new lib.samslegs();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-254.2,-35);

	this.instance_2 = new lib.prolegs();
	this.instance_2.parent = this;
	this.instance_2.setTransform(187.6,-40.9);

	this.instance_3 = new lib.prolegs();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-130.7,-40.9);

	this.instance_4 = new lib.slimlegs();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-63.7,-35.3);

	this.instance_5 = new lib.stacelegs();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-0.1,-32.7);

	this.instance_6 = new lib.twiggsstandingstill();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-191.1,-43.2);

	this.instance_7 = new lib.twiggsstandingstill();
	this.instance_7.parent = this;
	this.instance_7.setTransform(127.2,-43.2);

	this.instance_8 = new lib.samslegs();
	this.instance_8.parent = this;
	this.instance_8.setTransform(63.6,-35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("APJm/IJYAAIAAN9IpYAAgAFPm/IJYAAIAAN9IpYAAgEAi+gG/IJYAAIAAN9IpYAAgAZEnBIJYAAIAAN9IpYAAgAkrm/IJXAAIAAN9IpXAAgEgsVgG7IJYAAIAAN9IpYAAgA4gm7IJYAAIAAN9IpYAAgAulm7IJYAAIAAN9IpYAAgEgibgG7IJYAAIAAN9IpYAAg");
	this.shape.setTransform(0.5,-2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9BFB").s().p("AkrG/IAAt9IJXAAIAAN9g");
	this.shape_1.setTransform(0.5,-2.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9EC49E").s().p("A9dHCIAAt9IJYAAIAAN9gAUGG8IAAt9IJYAAIAAN9g");
	this.shape_2.setTransform(32.2,-2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9E9BFB").s().p("A9dHBIAAt9IJYAAIAAN9gAUGG9IAAt9IJYAAIAAN9g");
	this.shape_3.setTransform(95.6,-1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9D9E").s().p("A9dHBIAAt9IJYAAIAAN9gAUGG9IAAt9IJYAAIAAN9g");
	this.shape_4.setTransform(-94.7,-1.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFE9E").s().p("A9dHBIAAt9IJYAAIAAN9gAUGG9IAAt9IJYAAIAAN9g");
	this.shape_5.setTransform(-31.3,-1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-284.3,-48,569.6,92);
p.frameBounds = [rect];


(lib.Heads2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// actions
	this.instance = new lib.samshead();
	this.instance.parent = this;
	this.instance.setTransform(-253.3,-3);

	this.instance_1 = new lib.slimhead();
	this.instance_1.parent = this;
	this.instance_1.setTransform(254.3,0,1.012,0.991);

	this.instance_2 = new lib.prohead();
	this.instance_2.parent = this;
	this.instance_2.setTransform(191.4,2.6,1.012,0.986);

	this.instance_3 = new lib.prohead();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-126.5,2.6);

	this.instance_4 = new lib.slimhead();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-63.1,0.2);

	this.instance_5 = new lib.stacehead();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1.5,1.7,1.012,0.991);

	this.instance_6 = new lib.twiggshead();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-189.7,0.7);

	this.instance_7 = new lib.twiggshead();
	this.instance_7.parent = this;
	this.instance_7.setTransform(128.8,0.7,1.012,0.991);

	this.instance_8 = new lib.samshead();
	this.instance_8.parent = this;
	this.instance_8.setTransform(65.1,-3,1.012,0.991);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("APJjUIJYAAIAAGnIpYAAgAFPjUIJYAAIAAGnIpYAAgEAi+gDUIJYAAIAAGnIpYAAgAZEjUIJYAAIAAGnIpYAAgAkrjUIJXAAIAAGnIpXAAgEgsVgDSIJYAAIAAGnIpYAAgA4gjSIJYAAIAAGnIpYAAgAuljSIJYAAIAAGnIpYAAgEgibgDSIJYAAIAAGnIpYAAg");
	this.shape.setTransform(0.5,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9BFB").s().p("AkrDUIAAmnIJXAAIAAGng");
	this.shape_1.setTransform(0.5,-0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9EC49E").s().p("A9dDVIAAmnIJYAAIAAGngAUGDTIAAmnIJYAAIAAGng");
	this.shape_2.setTransform(32.2,-0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9E9BFB").s().p("A9dDVIAAmnIJYAAIAAGngAUGDTIAAmnIJYAAIAAGng");
	this.shape_3.setTransform(95.6,-0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9D9E").s().p("A9dDVIAAmnIJYAAIAAGngAUGDTIAAmnIJYAAIAAGng");
	this.shape_4.setTransform(-94.7,-0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFE9E").s().p("A9dDVIAAmnIJYAAIAAGngAUGDTIAAmnIJYAAIAAGng");
	this.shape_5.setTransform(-31.3,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Heads2, rect = new cjs.Rectangle(-284.3,-22.8,569.6,44.6), [rect]);


(lib.headMove = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{R1:1,R2:9,R3:17,R4:24,R5:31,L1:39,L2:46,L3:53,L4:60,L5:67});

	// timeline functions:
	this.frame_0 = function() {
		var rCount = 0;
		var lCount = 0;
		var rando = 0;
		
		//Button calls
		this.btn_head_right.addEventListener("click", headsRight.bind(this));
		this.btn_head_left.addEventListener("click", headsLeft.bind(this));
		
		
		
		//Right
		function headsRight()
		{
			rCount += 1;
			if(rCount == 1){this.gotoAndPlay('R1'); lCount = 4;}
			else if(rCount ==2){this.gotoAndPlay('R2'); lCount = 3;}
			else if(rCount ==3){this.gotoAndPlay('R3'); lCount = 2;}
			else if(rCount ==4){this.gotoAndPlay('R4'); lCount = 1;}
			else if(rCount ==5){this.gotoAndPlay('R5'); lCount = 0;}
			else if(rCount > 5){
				
				this.gotoAndPlay('R1');
				rCount = 1;
				lCount = 4;
			}
			console.log('right click', rCount);
			console.log('Left click', lCount);
		}
		
		//Left
		function headsLeft()
		{
			
			lCount += 1;
			if(lCount == 1){this.gotoAndPlay('L1'); rCount = 4;}
			else if(lCount ==2){this.gotoAndPlay('L2'); rCount = 3;}
			else if(lCount ==3){this.gotoAndPlay('L3'); rCount = 2;}
			else if(lCount ==4){this.gotoAndPlay('L4'); rCount = 1;}
			else if(lCount ==5){this.gotoAndPlay('L5'); rCount = 0;}
			else if(lCount > 5){
				
				this.gotoAndPlay('L1');
				lCount = 1;
				rCount = 4;
			}
			console.log('right click', rCount);
			console.log('Left click', lCount);
		}
		
		this.shuffle = function()
		{
			
			rando = Math.floor(Math.random()*3);
		
			if(rando==0){this.gotoAndPlay('R3'); lCount = 2; rCount=3;}
			else if (rando==1){this.gotoAndPlay('R4'); rCount = 4; lCount=1;}
			else if (rando==2){this.gotoAndPlay('R2'); rCount = 2; lCount=3;}
		
		}
		function testText()
		{
			console.log('test');
		}
		
		this.stop();
	}
	this.frame_8 = function() {
		playSound('SE-Stop');
		this.stop();
	}
	this.frame_16 = function() {
		playSound('SE-Stop');
		this.stop();
	}
	this.frame_23 = function() {
		playSound('SE-Stop');
		this.stop();
	}
	this.frame_30 = function() {
		playSound('SE-Stop');
		this.stop();
	}
	this.frame_38 = function() {
		playSound('SE-Stop');
		this.stop();
	}
	this.frame_45 = function() {
		playSound('SE-Stop');
		this.stop();
	}
	this.frame_52 = function() {
		playSound('SE-Stop');
		this.stop();
	}
	this.frame_59 = function() {
		playSound('SE-Stop');
		this.stop();
	}
	this.frame_66 = function() {
		playSound('SE-Stop');
		this.stop();
	}
	this.frame_73 = function() {
		playSound('SE-Stop');
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(8).call(this.frame_16).wait(7).call(this.frame_23).wait(7).call(this.frame_30).wait(8).call(this.frame_38).wait(7).call(this.frame_45).wait(7).call(this.frame_52).wait(7).call(this.frame_59).wait(7).call(this.frame_66).wait(7).call(this.frame_73).wait(37));

	// buttons
	this.btn_head_left = new lib.circlebuttonnext();
	this.btn_head_left.parent = this;
	this.btn_head_left.setTransform(-240.9,0.6,1.1,1.1,180);
	new cjs.ButtonHelper(this.btn_head_left, 0, 1, 2, false, new lib.circlebuttonnext(), 3);

	this.btn_head_right = new lib.circlebuttonnext();
	this.btn_head_right.parent = this;
	this.btn_head_right.setTransform(-11.4,0.7,1.1,1.1);
	new cjs.ButtonHelper(this.btn_head_right, 0, 1, 2, false, new lib.circlebuttonnext(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_head_right},{t:this.btn_head_left}]}).wait(110));

	// Mask
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AQ4IDIAAv7IeKAAIAAP7gEgvBAIDIAAwFMAhmAAAIAAQFg");
	this.shape.setTransform(-137.6,-23.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(110));

	// Head
	this.head_row = new lib.Heads2();
	this.head_row.parent = this;
	this.head_row.setTransform(0,2);

	this.timeline.addTween(cjs.Tween.get(this.head_row).wait(1).to({x:63,y:3.2},7).to({x:-253.8},1).to({x:-190.3},7).wait(1).to({x:-127},6).wait(1).to({x:-63.3},6).wait(1).to({x:0},7).wait(1).to({x:-63.5},6).wait(1).to({x:-126.6},6).wait(1).to({x:-190.3},6).wait(1).to({x:-253.9},6).wait(1).to({x:-316.9},6).to({_off:true},1).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-438.6,-74.6,723.4,103.1);
p.frameBounds = [rect, rect, new cjs.Rectangle(-438.6,-74.6,732.9,103.1), new cjs.Rectangle(-438.6,-74.6,741.9,103.1), new cjs.Rectangle(-438.6,-74.6,750.9,103.1), new cjs.Rectangle(-438.6,-74.6,759.9,103.1), new cjs.Rectangle(-438.6,-74.6,768.9,103.1), new cjs.Rectangle(-438.6,-74.6,777.9,103.1), new cjs.Rectangle(-438.6,-74.6,786.4,103.1), new cjs.Rectangle(-537.7,-74.6,701.1,103.1), new cjs.Rectangle(-529.1,-74.6,692.5,103.1), new cjs.Rectangle(-520,-74.6,683.4,103.1), new cjs.Rectangle(-511,-74.6,674.4,103.1), new cjs.Rectangle(-501.9,-74.6,665.3,103.1), new cjs.Rectangle(-492.8,-74.6,656.2,103.1), new cjs.Rectangle(-483.7,-74.6,647.1,103.1), rect=new cjs.Rectangle(-474.2,-74.6,637.6,103.1), rect, new cjs.Rectangle(-464.1,-74.6,627.5,103.1), new cjs.Rectangle(-453.6,-74.6,617,103.1), new cjs.Rectangle(-443,-74.6,606.4,103.1), rect=new cjs.Rectangle(-438.6,-74.6,602,103.1), rect, rect, rect, new cjs.Rectangle(-438.6,-74.6,607.5,103.1), new cjs.Rectangle(-438.6,-74.6,618.1,103.1), new cjs.Rectangle(-438.6,-74.6,628.7,103.1), new cjs.Rectangle(-438.6,-74.6,639.3,103.1), new cjs.Rectangle(-438.6,-74.6,650,103.1), rect=new cjs.Rectangle(-438.6,-74.6,660.1,103.1), rect, new cjs.Rectangle(-438.6,-74.6,669.6,103.1), new cjs.Rectangle(-438.6,-74.6,678.7,103.1), new cjs.Rectangle(-438.6,-74.6,687.7,103.1), new cjs.Rectangle(-438.6,-74.6,696.7,103.1), new cjs.Rectangle(-438.6,-74.6,705.8,103.1), new cjs.Rectangle(-438.6,-74.6,714.8,103.1), rect=new cjs.Rectangle(-438.6,-74.6,723.4,103.1), rect, new cjs.Rectangle(-438.6,-74.6,713.3,103.1), new cjs.Rectangle(-438.6,-74.6,702.7,103.1), new cjs.Rectangle(-438.6,-74.6,692.1,103.1), new cjs.Rectangle(-438.6,-74.6,681.5,103.1), new cjs.Rectangle(-438.6,-74.6,671,103.1), rect=new cjs.Rectangle(-438.6,-74.6,659.9,103.1), rect, new cjs.Rectangle(-438.6,-74.6,649.9,103.1), new cjs.Rectangle(-438.6,-74.6,639.3,103.1), new cjs.Rectangle(-438.6,-74.6,628.8,103.1), new cjs.Rectangle(-438.6,-74.6,618.3,103.1), new cjs.Rectangle(-438.6,-74.6,607.8,103.1), rect=new cjs.Rectangle(-438.6,-74.6,602,103.1), rect, rect, rect, new cjs.Rectangle(-442.8,-74.6,606.2,103.1), new cjs.Rectangle(-453.4,-74.6,616.8,103.1), new cjs.Rectangle(-464,-74.6,627.4,103.1), rect=new cjs.Rectangle(-474.1,-74.6,637.5,103.1), rect, new cjs.Rectangle(-485.2,-74.6,648.6,103.1), new cjs.Rectangle(-495.8,-74.6,659.2,103.1), new cjs.Rectangle(-506.4,-74.6,669.8,103.1), new cjs.Rectangle(-517,-74.6,680.4,103.1), new cjs.Rectangle(-527.6,-74.6,691,103.1), rect=new cjs.Rectangle(-537.7,-74.6,701.1,103.1), rect, new cjs.Rectangle(-548.7,-74.6,712.1,103.1), new cjs.Rectangle(-559.2,-74.6,722.6,103.1), new cjs.Rectangle(-569.7,-74.6,733.1,103.1), new cjs.Rectangle(-580.2,-74.6,743.6,103.1), new cjs.Rectangle(-590.7,-74.6,754.1,103.1), new cjs.Rectangle(-600.7,-74.6,764.1,103.1), rect=new cjs.Rectangle(-438.6,-74.6,602,103.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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
p.nominalBounds = rect = new cjs.Rectangle(0,0,48.5,46.7);
p.frameBounds = [rect, rect=new cjs.Rectangle(0,-2.4,48.5,49.1), rect, rect];


(lib.Bodies = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.samsbody();
	this.instance.parent = this;
	this.instance.setTransform(-254.2,10.3);

	this.instance_1 = new lib.slimbody();
	this.instance_1.parent = this;
	this.instance_1.setTransform(254.2,-1.7);

	this.instance_2 = new lib.probody();
	this.instance_2.parent = this;
	this.instance_2.setTransform(190.8,-1.1);

	this.instance_3 = new lib.probody();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-127.5,-1.1);

	this.instance_4 = new lib.slimbody();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-63.7,-1.7);

	this.instance_5 = new lib.stacebody();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,-4.5);

	this.instance_6 = new lib.twiggsbody();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-191.1,-0.2);

	this.instance_7 = new lib.twiggsbody();
	this.instance_7.parent = this;
	this.instance_7.setTransform(127.1,-0.2);

	this.instance_8 = new lib.samsbody();
	this.instance_8.parent = this;
	this.instance_8.setTransform(63.7,10.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("APJjUIJYAAIAAGoIpYAAgAFPjUIJYAAIAAGoIpYAAgEAi+gDUIJYAAIAAGoIpYAAgAZEjVIJYAAIAAGnIpYAAgAkrjUIJXAAIAAGoIpXAAgEgsVgDSIJYAAIAAGoIpYAAgA4gjSIJYAAIAAGoIpYAAgAuljSIJYAAIAAGoIpYAAgEgibgDSIJYAAIAAGoIpYAAg");
	this.shape.setTransform(0.5,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9EC49E").s().p("A9dDVIAAmnIJYAAIAAGngAUGDTIAAmnIJYAAIAAGng");
	this.shape_1.setTransform(32.2,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFE9E").s().p("A9dDVIAAmnIJYAAIAAGngAUGDTIAAmnIJYAAIAAGng");
	this.shape_2.setTransform(-31.3,-0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9D9E").s().p("A9dDVIAAmnIJYAAIAAGngAUGDTIAAmnIJYAAIAAGng");
	this.shape_3.setTransform(-94.7,-0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9BFB").s().p("AkrDUIAAmnIJXAAIAAGng");
	this.shape_4.setTransform(0.5,-0.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9E9BFB").s().p("A9dDVIAAmnIJYAAIAAGngAUGDTIAAmnIJYAAIAAGng");
	this.shape_5.setTransform(95.6,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-284.3,-22.9,569.6,44.7);
p.frameBounds = [rect];


(lib.LegsMoving = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"R1":1,"R2":9,"R3":17,"R4":25,"R5":33,"L1":41,"L2":49,"L3":57,"L4":65,"L5":73});

	// timeline functions:
	this.frame_0 = function() {
		var rCount = 0;
		var lCount = 0;
		var rando = 0;
		
		//Button calls
		this.btn_leg_right.addEventListener("click", legsRight.bind(this));
		this.btn_leg_left.addEventListener("click", legsLeft.bind(this));
		
		
		
		//Right
		function legsRight()
		{
			rCount += 1;
			if(rCount == 1){this.gotoAndPlay('R1'); lCount = 4;}
			else if(rCount ==2){this.gotoAndPlay('R2'); lCount = 3;}
			else if(rCount ==3){this.gotoAndPlay('R3'); lCount = 2;}
			else if(rCount ==4){this.gotoAndPlay('R4'); lCount = 1;}
			else if(rCount ==5){this.gotoAndPlay('R5'); lCount = 0;}
			else if(rCount > 5){
				
				this.gotoAndPlay('R1');
				rCount = 1;
				lCount = 4;
			}
			console.log('right click', rCount);
			console.log('Left click', lCount);
		}
		
		//Left
		function legsLeft()
		{
			
			lCount += 1;
			if(lCount == 1){this.gotoAndPlay('L1'); rCount = 4;}
			else if(lCount ==2){this.gotoAndPlay('L2'); rCount = 3;}
			else if(lCount ==3){this.gotoAndPlay('L3'); rCount = 2;}
			else if(lCount ==4){this.gotoAndPlay('L4'); rCount = 1;}
			else if(lCount ==5){this.gotoAndPlay('L5'); rCount = 0;}
			else if(lCount > 5){
				
				this.gotoAndPlay('L1');
				lCount = 1;
				rCount = 4;
			}
			console.log('right click', rCount);
			console.log('Left click', lCount);
		}
		
		this.shuffle = function()
		{
			
			rando = Math.floor(Math.random()*3);
		
			if(rando==0){this.gotoAndPlay('R2'); lCount = 3; rCount=2;}
			else if (rando==1){this.gotoAndPlay('R1'); rCount = 1; lCount=4;}
			else if (rando==2){this.gotoAndPlay('R5'); rCount = 5; lCount=0;}
		
		}
		this.stop();
	}
	this.frame_8 = function() {
		playSound('SE-Stop');
		this.stop();
	}
	this.frame_16 = function() {
		playSound('SE-Stop');
		this.stop();
	}
	this.frame_24 = function() {
		playSound('SE-Stop');
		this.stop();
	}
	this.frame_32 = function() {
		playSound('SE-Stop');
		this.stop();
	}
	this.frame_40 = function() {
		playSound('SE-Stop');
		this.stop();
	}
	this.frame_48 = function() {
		playSound('SE-Stop');
		this.stop();
	}
	this.frame_56 = function() {
		playSound('SE-Stop');
		this.stop();
	}
	this.frame_64 = function() {
		playSound('SE-Stop');
		this.stop();
	}
	this.frame_72 = function() {
		playSound('SE-Stop');
		this.stop();
	}
	this.frame_80 = function() {
		playSound('SE-Stop');
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(8).call(this.frame_16).wait(8).call(this.frame_24).wait(8).call(this.frame_32).wait(8).call(this.frame_40).wait(8).call(this.frame_48).wait(8).call(this.frame_56).wait(8).call(this.frame_64).wait(8).call(this.frame_72).wait(8).call(this.frame_80).wait(30));

	// buttons
	this.btn_leg_left = new lib.circlebuttonnext();
	this.btn_leg_left.parent = this;
	this.btn_leg_left.setTransform(-241.3,-26.1,1.1,1.1,180);
	new cjs.ButtonHelper(this.btn_leg_left, 0, 1, 2, false, new lib.circlebuttonnext(), 3);

	this.btn_leg_right = new lib.circlebuttonnext();
	this.btn_leg_right.parent = this;
	this.btn_leg_right.setTransform(-11.8,-26,1.1,1.1);
	new cjs.ButtonHelper(this.btn_leg_right, 0, 1, 2, false, new lib.circlebuttonnext(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_leg_right},{t:this.btn_leg_left}]}).wait(110));

	// mask
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Egu/AKoIAA1OMAhwAAAIAAVOgARAJhIAA0IIeAAAIAAUIg");
	this.shape.setTransform(-138.2,18.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(110));

	// Right
	this.instance = new lib.Legs("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},1).to({x:64},7).to({x:-253.6},1).to({x:-190.5},7).to({startPosition:0},1).to({x:-126.8},7).to({startPosition:0},1).to({x:-63.2},7).to({startPosition:0},1).to({x:0},7).to({startPosition:0},1).to({x:-63},7).to({startPosition:0},1).to({x:-127},7).to({startPosition:0},1).to({x:-190.5},7).to({startPosition:0},1).to({x:-254.1},7).to({startPosition:0},1).to({x:-316.7},7).to({_off:true},1).wait(29));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-439,-49.3,724.3,136.1);
p.frameBounds = [rect, rect, new cjs.Rectangle(-439,-49.3,733.4,136.1), new cjs.Rectangle(-439,-49.3,742.6,136.1), new cjs.Rectangle(-439,-49.3,751.7,136.1), new cjs.Rectangle(-439,-49.3,760.8,136.1), new cjs.Rectangle(-439,-49.3,770,136.1), new cjs.Rectangle(-439,-49.3,779.1,136.1), new cjs.Rectangle(-439,-49.3,788.3,136.1), new cjs.Rectangle(-537.9,-49.3,700.6,136.1), new cjs.Rectangle(-528.9,-49.3,691.6,136.1), new cjs.Rectangle(-519.9,-49.3,682.6,136.1), new cjs.Rectangle(-510.9,-49.3,673.6,136.1), new cjs.Rectangle(-501.9,-49.3,664.6,136.1), new cjs.Rectangle(-492.9,-49.3,655.6,136.1), new cjs.Rectangle(-483.8,-49.3,646.5,136.1), rect=new cjs.Rectangle(-474.8,-49.3,637.5,136.1), rect, new cjs.Rectangle(-465.7,-49.3,628.4,136.1), new cjs.Rectangle(-456.6,-49.3,619.3,136.1), new cjs.Rectangle(-447.5,-49.3,610.2,136.1), rect=new cjs.Rectangle(-439,-49.3,601.7,136.1), rect, rect, rect, rect, new cjs.Rectangle(-439,-49.3,606.6,136.1), new cjs.Rectangle(-439,-49.3,615.6,136.1), new cjs.Rectangle(-439,-49.3,624.7,136.1), new cjs.Rectangle(-439,-49.3,633.8,136.1), new cjs.Rectangle(-439,-49.3,642.9,136.1), new cjs.Rectangle(-439,-49.3,652,136.1), rect=new cjs.Rectangle(-439,-49.3,661.1,136.1), rect, new cjs.Rectangle(-439,-49.3,670.1,136.1), new cjs.Rectangle(-439,-49.3,679.1,136.1), new cjs.Rectangle(-439,-49.3,688.2,136.1), new cjs.Rectangle(-439,-49.3,697.2,136.1), new cjs.Rectangle(-439,-49.3,706.2,136.1), new cjs.Rectangle(-439,-49.3,715.2,136.1), rect=new cjs.Rectangle(-439,-49.3,724.3,136.1), rect, new cjs.Rectangle(-439,-49.3,715.3,136.1), new cjs.Rectangle(-439,-49.3,706.3,136.1), new cjs.Rectangle(-439,-49.3,697.3,136.1), new cjs.Rectangle(-439,-49.3,688.3,136.1), new cjs.Rectangle(-439,-49.3,679.3,136.1), new cjs.Rectangle(-439,-49.3,670.3,136.1), rect=new cjs.Rectangle(-439,-49.3,661.3,136.1), rect, new cjs.Rectangle(-439,-49.3,652.1,136.1), new cjs.Rectangle(-439,-49.3,643,136.1), new cjs.Rectangle(-439,-49.3,633.8,136.1), new cjs.Rectangle(-439,-49.3,624.7,136.1), new cjs.Rectangle(-439,-49.3,615.6,136.1), new cjs.Rectangle(-439,-49.3,606.4,136.1), rect=new cjs.Rectangle(-439,-49.3,601.7,136.1), rect, rect, rect, rect, new cjs.Rectangle(-447.6,-49.3,610.3,136.1), new cjs.Rectangle(-456.7,-49.3,619.4,136.1), new cjs.Rectangle(-465.8,-49.3,628.5,136.1), rect=new cjs.Rectangle(-474.8,-49.3,637.5,136.1), rect, new cjs.Rectangle(-483.9,-49.3,646.6,136.1), new cjs.Rectangle(-493,-49.3,655.7,136.1), new cjs.Rectangle(-502.1,-49.3,664.8,136.1), new cjs.Rectangle(-511.2,-49.3,673.9,136.1), new cjs.Rectangle(-520.3,-49.3,682.9,136.1), new cjs.Rectangle(-529.4,-49.3,692.1,136.1), rect=new cjs.Rectangle(-538.5,-49.3,701.2,136.1), rect, new cjs.Rectangle(-547.4,-49.3,710.1,136.1), new cjs.Rectangle(-556.3,-49.3,719,136.1), new cjs.Rectangle(-565.3,-49.3,727.9,136.1), new cjs.Rectangle(-574.2,-49.3,736.9,136.1), new cjs.Rectangle(-583.2,-49.3,745.9,136.1), new cjs.Rectangle(-592.1,-49.3,754.8,136.1), new cjs.Rectangle(-601,-49.3,763.7,136.1), rect=new cjs.Rectangle(-439,-49.3,601.7,136.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.BodiesMoving = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"R1":0,"R1":1,"R2":8,"R3":16,"R4":24,"R5":31,"L1":38,"L2":46,"L3":54,"L4":62,"L5":70});

	// timeline functions:
	this.frame_0 = function() {
		var rCount = 0;
		var lCount = 0;
		var rando = 0;
		
		//Button calls
		this.btn_body_right.addEventListener("click", bodiesRight.bind(this));
		this.btn_body_left.addEventListener("click", bodiesLeft.bind(this));
		
		
		
		//Right
		function bodiesRight()
		{
			rCount += 1;
			if(rCount == 1){this.gotoAndPlay('R1'); lCount = 4;}
			else if(rCount ==2){this.gotoAndPlay('R2'); lCount = 3;}
			else if(rCount ==3){this.gotoAndPlay('R3'); lCount = 2;}
			else if(rCount ==4){this.gotoAndPlay('R4'); lCount = 1;}
			else if(rCount ==5){this.gotoAndPlay('R5'); lCount = 0;}
			else if(rCount > 5){
				
				this.gotoAndPlay('R1');
				rCount = 1;
				lCount = 4;
			}
			console.log('right click', rCount);
			console.log('Left click', lCount);
		}
		
		//Left
		function bodiesLeft()
		{
			
			lCount += 1;
			if(lCount == 1){this.gotoAndPlay('L1'); rCount = 4;}
			else if(lCount ==2){this.gotoAndPlay('L2'); rCount = 3;}
			else if(lCount ==3){this.gotoAndPlay('L3'); rCount = 2;}
			else if(lCount ==4){this.gotoAndPlay('L4'); rCount = 1;}
			else if(lCount ==5){this.gotoAndPlay('L5'); rCount = 0;}
			else if(lCount > 5){
				
				this.gotoAndPlay('L1');
				lCount = 1;
				rCount = 4;
			}
			console.log('right click', rCount);
			console.log('Left click', lCount);
		}
		
		this.shuffle = function()
		{
			
			rando = Math.floor(Math.random()*3);
		
			if(rando==0){this.gotoAndPlay('L3'); lCount = 3; rCount=2;}
			else if (rando==1){this.gotoAndPlay('L4'); rCount = 1; lCount=4;}
			else if (rando==2){this.gotoAndPlay('L2'); rCount = 3; lCount=2;}
		
		}
		this.stop();
	}
	this.frame_7 = function() {
		playSound('SE-Stop');
		this.stop();
	}
	this.frame_15 = function() {
		playSound('SE-Stop');
		this.stop();
	}
	this.frame_23 = function() {
		playSound('SE-Stop');
		this.stop();
	}
	this.frame_30 = function() {
		playSound('SE-Stop');
		this.stop();
	}
	this.frame_37 = function() {
		playSound('SE-Stop');
		this.stop();
	}
	this.frame_45 = function() {
		playSound('SE-Stop');
		this.stop();
	}
	this.frame_53 = function() {
		playSound('SE-Stop');
		this.stop();
	}
	this.frame_61 = function() {
		playSound('SE-Stop');
		this.stop();
	}
	this.frame_69 = function() {
		playSound('SE-Stop');
		this.stop();
	}
	this.frame_77 = function() {
		playSound('SE-Stop');
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(8).call(this.frame_15).wait(8).call(this.frame_23).wait(7).call(this.frame_30).wait(7).call(this.frame_37).wait(8).call(this.frame_45).wait(8).call(this.frame_53).wait(8).call(this.frame_61).wait(8).call(this.frame_69).wait(8).call(this.frame_77).wait(33));

	// buttons
	this.btn_body_left = new lib.circlebuttonnext();
	this.btn_body_left.parent = this;
	this.btn_body_left.setTransform(-241.3,0,1.1,1.1,180);
	new cjs.ButtonHelper(this.btn_body_left, 0, 1, 2, false, new lib.circlebuttonnext(), 3);

	this.btn_body_right = new lib.circlebuttonnext();
	this.btn_body_right.parent = this;
	this.btn_body_right.setTransform(-11.8,0.1,1.1,1.1);
	new cjs.ButtonHelper(this.btn_body_right, 0, 1, 2, false, new lib.circlebuttonnext(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_body_right},{t:this.btn_body_left}]}).wait(110));

	// mask
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AQ/DwIAAnfIeJAAIAAHfgEgvIADlIAAnUMAhwAAAIAAHUg");
	this.shape.setTransform(-138,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(110));

	// animations
	this.instance = new lib.Bodies("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:9.2},1).to({x:64.4},6).to({x:-253.2},1).to({x:-189.7},7).to({startPosition:0},1).to({x:-126.6},7).to({startPosition:0},1).to({x:-63.6},6).to({startPosition:0},1).to({x:0},6).to({startPosition:0},1).to({x:-63.3},7).to({startPosition:0},1).to({x:-127.1},7).to({startPosition:0},1).to({x:-190.5},7).to({startPosition:0},1).to({x:-254},7).to({startPosition:0},1).to({x:-317},7).to({_off:true},1).wait(32));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-439.6,-23.5,724.9,48);
p.frameBounds = [rect, new cjs.Rectangle(-439.6,-23.5,734.1,48), new cjs.Rectangle(-439.6,-23.5,743.3,48), new cjs.Rectangle(-439.6,-23.5,752.5,48), new cjs.Rectangle(-439.6,-23.5,761.7,48), new cjs.Rectangle(-439.6,-23.5,770.9,48), new cjs.Rectangle(-439.6,-23.5,780.1,48), new cjs.Rectangle(-439.6,-23.5,789.3,48), new cjs.Rectangle(-537.5,-23.5,701.2,48), new cjs.Rectangle(-528.5,-23.5,692.2,48), new cjs.Rectangle(-519.4,-23.5,683.1,48), new cjs.Rectangle(-510.3,-23.5,674,48), new cjs.Rectangle(-501.2,-23.5,664.9,48), new cjs.Rectangle(-492.2,-23.5,655.9,48), new cjs.Rectangle(-483.1,-23.5,646.8,48), rect=new cjs.Rectangle(-474,-23.5,637.7,48), rect, new cjs.Rectangle(-465,-23.5,628.7,48), new cjs.Rectangle(-456,-23.5,619.7,48), new cjs.Rectangle(-447,-23.5,610.7,48), rect=new cjs.Rectangle(-439.6,-23.5,603.3,48), rect, rect, rect, rect, new cjs.Rectangle(-439.6,-23.5,608.8,48), new cjs.Rectangle(-439.6,-23.5,619.3,48), new cjs.Rectangle(-439.6,-23.5,629.8,48), new cjs.Rectangle(-439.6,-23.5,640.3,48), new cjs.Rectangle(-439.6,-23.5,650.8,48), rect=new cjs.Rectangle(-439.6,-23.5,661.3,48), rect, new cjs.Rectangle(-439.6,-23.5,671.9,48), new cjs.Rectangle(-439.6,-23.5,682.5,48), new cjs.Rectangle(-439.6,-23.5,693.1,48), new cjs.Rectangle(-439.6,-23.5,703.7,48), new cjs.Rectangle(-439.6,-23.5,714.3,48), rect=new cjs.Rectangle(-439.6,-23.5,724.9,48), rect, new cjs.Rectangle(-439.6,-23.5,715.8,48), new cjs.Rectangle(-439.6,-23.5,706.8,48), new cjs.Rectangle(-439.6,-23.5,697.8,48), new cjs.Rectangle(-439.6,-23.5,688.8,48), new cjs.Rectangle(-439.6,-23.5,679.7,48), new cjs.Rectangle(-439.6,-23.5,670.7,48), rect=new cjs.Rectangle(-439.6,-23.5,661.6,48), rect, new cjs.Rectangle(-439.6,-23.5,652.5,48), new cjs.Rectangle(-439.6,-23.5,643.3,48), new cjs.Rectangle(-439.6,-23.5,634.3,48), new cjs.Rectangle(-439.6,-23.5,625.2,48), new cjs.Rectangle(-439.6,-23.5,616.1,48), new cjs.Rectangle(-439.6,-23.5,606.9,48), rect=new cjs.Rectangle(-439.6,-23.5,603.3,48), rect, rect, rect, rect, new cjs.Rectangle(-447.7,-23.5,611.4,48), new cjs.Rectangle(-456.7,-23.5,620.4,48), new cjs.Rectangle(-465.8,-23.5,629.5,48), rect=new cjs.Rectangle(-474.8,-23.5,638.5,48), rect, new cjs.Rectangle(-483.9,-23.5,647.6,48), new cjs.Rectangle(-493,-23.5,656.7,48), new cjs.Rectangle(-502,-23.5,665.7,48), new cjs.Rectangle(-511.1,-23.5,674.8,48), new cjs.Rectangle(-520.2,-23.5,683.9,48), new cjs.Rectangle(-529.3,-23.5,692.9,48), rect=new cjs.Rectangle(-538.3,-23.5,702,48), rect, new cjs.Rectangle(-547.3,-23.5,711,48), new cjs.Rectangle(-556.3,-23.5,720,48), new cjs.Rectangle(-565.3,-23.5,729,48), new cjs.Rectangle(-574.3,-23.5,738,48), new cjs.Rectangle(-583.3,-23.5,747,48), new cjs.Rectangle(-592.3,-23.5,756,48), new cjs.Rectangle(-601.3,-23.5,765,48), rect=new cjs.Rectangle(-439.6,-23.5,603.3,48), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.puzzle_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var that = this;
		
		that.btn_shuffle.addEventListener("click", buttonClicked);
		 
		function buttonClicked(){
		  that.heads.shuffle();
		  that.body.shuffle();
		  that.leg.shuffle();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Background
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("APFuvIAAdfI+JAAIAA9fg");
	this.shape.setTransform(-111.4,19.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Shuffle
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009921").s().p("AAgBaIAAhXIgBgUQgCgKgCgFQgDgGgGgDQgGgDgLAAQgHAAgIADQgIACgJAGIAAB7Ig4AAIAAiuIA4AAIAAATQAPgMAOgGQANgGARAAQAcAAAQARQAQAQAAAhIAABxg");
	this.shape_1.setTransform(8.2,-113.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009921").s().p("AhHBJQgQgQAAghIAAhxIA4AAIAABXIABAVQABAJADAGQADAFAGADQAGADALAAQAGAAAJgDQAJgDAIgFIAAh7IA4AAIAACuIg4AAIAAgTQgQAMgNAGQgMAGgSAAQgdAAgPgRg");
	this.shape_2.setTransform(-14.8,-112.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#009921").s().p("AhGBEQgZgZAAgrQAAgqAZgZQAZgZAtAAQAuAAAZAZQAZAZAAAqQAAArgZAZQgZAZguAAQgtAAgZgZgAgOgzQgGACgFAHQgGAGgDALQgDAKAAAPQAAAPADAKQACALAGAGQAFAGAGADQAIADAIAAQAHAAAHgCQAHgDAFgGQAFgHADgJQACgKAAgRQAAgOgCgLQgDgKgFgGQgFgHgHgCQgHgDgIAAQgHAAgHACg");
	this.shape_3.setTransform(-37,-112.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#009921").s().p("AAwB0IhiieIAACeIg3AAIAAjnIBIAAIBUCEIAAiEIA3AAIAADng");
	this.shape_4.setTransform(-61.6,-115.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#009921").s().p("AgcBYIAAg+IA5AAIAAA+gAgcgZIAAg+IA5AAIAAA+g");
	this.shape_5.setTransform(-92.6,-112.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#009921").s().p("AhNB1IAAgpIAxAAIAAh6IgxAAIAAgmQAMAAAKgBQAKgBAHgEQAIgEAEgGQAEgGABgKIAzAAIAADAIAwAAIAAApg");
	this.shape_6.setTransform(-109.8,-115.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#009921").s().p("AAgBaIAAhXIgBgUQgCgKgCgFQgDgGgGgDQgGgDgLAAQgHAAgIADQgIACgJAGIAAB7Ig4AAIAAiuIA4AAIAAATQAPgMAOgGQANgGARAAQAcAAAQARQAQAQAAAhIAABxg");
	this.shape_7.setTransform(-144,-113.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#009921").s().p("AhGBEQgZgZAAgrQAAgqAZgZQAZgZAtAAQAuAAAZAZQAZAZAAAqQAAArgZAZQgZAZguAAQgtAAgZgZgAgOgzQgGACgGAHQgFAGgDALQgDAKAAAPQAAAPACAKQAEALAEAGQAFAGAHADQAHADAIAAQAIAAAHgCQAHgDAEgGQAGgHADgJQADgKgBgRQABgOgDgLQgDgKgFgGQgFgHgHgCQgHgDgIAAQgHAAgHACg");
	this.shape_8.setTransform(-166.4,-112.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#009921").s().p("AgbB6IAAivIA3AAIAACvgAgdhOIAAgqIA7AAIAAAqg");
	this.shape_9.setTransform(-182.9,-116.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#009921").s().p("AgaBlQgQgNAAghIAAhRIgXAAIAAglIAXAAIAAgzIA4AAIAAAzIA0AAIAAAlIg0AAIAAA+IAAAQQAAAHACAFQACAGAGADQAFADALAAIALgCIAKgDIAFAAIAAAmQgJADgKABQgKACgPAAQggAAgQgOg");
	this.shape_10.setTransform(-195.7,-115.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#009921").s().p("AgTBXQgTgFgOgMQgOgLgHgSQgIgQAAgYQAAgYAIgRQAIgSAPgMQAOgLATgFQASgFAUgBQARAAAQAFQAPAEANAGIAAAvIgIAAIgIgGIgLgHIgOgGQgIgCgKAAQgWAAgMAOQgMAOAAAYQAAAaANANQALAMAXAAQAKAAAJgCIAOgGIAJgGIAIgHIAIAAIAAAwQgNAGgPAEQgOADgSABQgWgBgTgFg");
	this.shape_11.setTransform(-212.3,-112.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#009921").s().p("AhABFQgcgYAAgrQAAgrAbgZQAagaAuAAQArAAAVAWQAWAWAAAoIAAATIiAAAQABAVAPAKQAOALAbAAQASAAARgGQAQgGAKgIIAGAAIAAAtQgTAIgRAEQgQADgVAAQg0AAgcgYgAgYgwQgKAIgBATIBIAAQgBgSgIgJQgIgJgSAAQgPAAgLAJg");
	this.shape_12.setTransform(-232.4,-113);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#009921").s().p("Ag6B0QgWgGgTgHIAAg4IAHAAQATAPAXAIQAXAIAVAAIAOgBQAJgBAFgDQAHgCAFgFQADgDAAgJQAAgIgFgFQgHgGgNgDIgbgFQgOgDgNgFQgdgJgNgPQgNgRAAgYQAAghAdgTQAdgWAtAAQAXAAAXAFQAWAFAQAGIAAA2IgGAAQgOgMgUgHQgVgIgVAAIgOABQgIACgGADQgHABgEAGQgEAEgBAHQAAAIAIAFQAGAGAVADIAXAGIAZAHQAbAIANAOQAMAPAAAZQAAAigcAWQgeAUgxAAQgdAAgVgEg");
	this.shape_13.setTransform(-254.2,-115.8);

	this.btn_shuffle = new lib.Shuffle();
	this.btn_shuffle.parent = this;
	this.btn_shuffle.setTransform(-110.8,136.8,0.953,1.094,0,0,0,-0.1,0.3);
	new cjs.ButtonHelper(this.btn_shuffle, 0, 1, 2, false, new lib.Shuffle(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_shuffle},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Head
	this.heads = new lib.headMove();
	this.heads.parent = this;
	this.heads.setTransform(15.1,-51.4);

	this.timeline.addTween(cjs.Tween.get(this.heads).wait(1));

	// Body
	this.body = new lib.BodiesMoving();
	this.body.parent = this;
	this.body.setTransform(15,-3.7,1,1,0,0,0,-0.1,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.body).wait(1));

	// Leg
	this.leg = new lib.LegsMoving();
	this.leg.parent = this;
	this.leg.setTransform(15,66.5,1,1,0,0,0,-0.1,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.leg).wait(1));

}).prototype = getMCSymbolPrototype(lib.puzzle_1, rect = new cjs.Rectangle(-424.6,-138.3,724.4,294.1), [rect]);


// stage content:
(lib.puzzle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//Menu button -----------------------------------------
		this.btn_menu.addEventListener("click", openMenu.bind(this));
		
		this.btn_goNext.addEventListener("click", openNext.bind(this));
		
		
		function openNext(){
		
		 window.open ("noun_def.html","_self");
		}
		
		function openMenu(){
		
		 window.open ("../menu/menu.html","_self");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// actions
	this.btn_menu = new lib.menu_main();
	this.btn_menu.parent = this;
	this.btn_menu.setTransform(513.4,21.6,1,1.143,0,0,0,23.4,10.5);
	new cjs.ButtonHelper(this.btn_menu, 0, 1, 2, false, new lib.menu_main(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_menu).wait(1));

	// puzzle
	this.btn_goNext = new lib.goNext();
	this.btn_goNext.parent = this;
	this.btn_goNext.setTransform(253.8,319.7);
	new cjs.ButtonHelper(this.btn_goNext, 0, 1, 2, false, new lib.goNext(), 3);

	this.instance = new lib.Copyright("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(275,389.5);

	this.puzzle = new lib.puzzle_1();
	this.puzzle.parent = this;
	this.puzzle.setTransform(385.9,154.3,0.991,0.991,0,0,0,-0.3,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.puzzle},{t:this.instance},{t:this.btn_goNext}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(240.6,208.6,717.7,394.1);
p.frameBounds = [rect];
// library properties:
lib.properties = {
	id: 'D8AA94153F474F4A8FFB1DFB016DF9DE',
	width: 550,
	height: 400,
	fps: 15,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/High_Screaming_Gtr.mp3", id:"High_Screaming_Gtr"},
		{src:"sounds/SEClick.mp3", id:"SEClick"},
		{src:"sounds/SEStop.mp3", id:"SEStop"}
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
an.compositions['D8AA94153F474F4A8FFB1DFB016DF9DE'] = {
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