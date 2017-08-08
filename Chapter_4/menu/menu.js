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


(lib.VERBALStitle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0066").s().p("AgoFAQgUgYAAgWQAAgVARgPQARgOAWAAQAYAAAVAaQAUAZAAAVQAAAVgRAPQgRAPgWAAQgXAAgWgbgAgeC1QgQgOAAgWIgBgwIgBgxIABirIABirQAAgWAQgPQAPgPAWAAQAXAAAPAPQAPAPAAAWIAAG3QAAAWgPAOQgPAPgXAAQgXAAgOgPg");
	this.shape.setTransform(192.4,2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0066").s().p("AjgEOQgzgnAAgzQAAgaAQgRQAQgRAcAAQAlAAARAmQAYAzBTAAQBHAABDgfQBFggAAgnQAAg0grgQQgfgMhcgDQhHgBg5gZQhNgiABhAQAChRBVhDQBVhEBlAAQApAAA8ATQBKAXAAAeQAAAWgPAQQgRATgaAAQgTAAgngIQgngJgUAAQg1ABgvAZQgyAaAAAeQAAAQAPAKQAPAKAeAEIBpAGQBcAHA2AtQA7AxAABYQAABrh6A3QhdAqh3AAQhpAAg9gvg");
	this.shape_1.setTransform(153.7,5.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0066").s().p("AjdD6IAIiDQALi0AAjcQAAgYARgRQAQgQAZAAQAZAAAQAQQARARAAAYQAADdgLC5QgEAhgEBFQBjgCCYguQAKgDAIAAQAbAAAQATQAOARAAAVQAAAkgkAQQgwAWhnARQhdAPg8AAQhlAAgBhZgAjdD6IAAAAIAAAAg");
	this.shape_2.setTransform(102,4.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0066").s().p("ADTE5QghgCghhLQgWgxgQhAQgeAEhGAFQhBAEgjAHQgTAtgvBcQgSAeghAAQgWAAgTgQQgSgPAAgYQAAgWA9h6QgGgNABgLQABgUAngLQA7hlBIhuQBnidAYAAQAuAAAPA3IAaCFQAZB4AlCZQADALASAsQAPAjAAASQAAAYgSAQQgRAQgVAAIgDAAgAggAmQATgEAmgCIA7gFIgciLIhYCWg");
	this.shape_3.setTransform(45.9,4.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0066").s().p("AjNE7QgUgUAAgYIAAm3IgCg5QgBgfADgXQAGgnBDgIQAggJBJAAQBNAABIAyQBUA8AABYQAAAvgRAiQgOAagiAeQAoATAfAoQAkAsAAArQAAA3g9AxQgoAhgsARQhgAkiTAAQgZAAgUgVgAhwDeQBIgDBSgYQBJgVgBgYQgBgggugZQgjgUgggDQglAAhLgDgAhwjeIABBYIgBBYQAmAEATgCQB+gJAAhUQAAgeglgbQgmgdgrAAQg2AAgLABg");
	this.shape_4.setTransform(-10.1,2.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0066").s().p("AjiE2QgRgRAAgXIABhdIABheIAAlNQAAgbARgWQAVgdAlADIBnAIQA7AHAnAVQCxBZAACEQAAA3gkAoQgmAqhKAdQBuA9A3BAQAPARAAAUQAAAXgRARQgSARgYAAQgWAAgTgSQh+h2iVgtIAECGQAAAXgQARQgRAQgZAAQgZAAgQgQgAiBAMIATAAQBlAAAwgYQAWgLARgSQASgSAAgJQAAgug7grQg3gpg+gGIgxgEg");
	this.shape_5.setTransform(-64.6,3.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0066").s().p("AjBE9QgtgoAAiGQAAg4AIhuQAIhwAAg3QAAgPgEgcQgEgcAAgPQAAg/A6AAQASAAAPAKQAxgLArgHQArgFAmAAQBoAAA/AXQAmAPAAAmQAAAVgPASQgQATgaAAQgIAAgJgDQhEgSg/gBQgfABgjAFQgkAEgoALQAAA3gEBtICigQQBPgIAVAAQAZAAARAQQARAQAAAZQAAAxg0AGIhjAJQg6AGh3AJQgDA2AAAgQAABRAKALQAEAGAwAAIBMgBIBOgCQAIAAARgDQAQgCAIAAQAYAAARAOQATAQAAAbQAAAvgwAIQgqAIiCAAQiHAAgpgkg");
	this.shape_6.setTransform(-118.1,3.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0066").s().p("AhbEmQgyh4g+jjIgjhwQgXhOAAgeQAAgZASgQQASgPAXAAQAoAAAQAqIAQBHIAoCHQAgB2AeBaQA+icAjheIAkhjQAYg7AcggQATgVAaAAQAYAAASARQARAQABAYQAAAQgMAQQgWAhgSAtIggBTIhvEeQgSAygcAzQgSAggiAAQgqAAgSgpg");
	this.shape_7.setTransform(-174.1,4.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.VERBALStitle, new cjs.Rectangle(-205.3,-61.2,410.7,122.5), null);


(lib.TwiggsLegR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhrBVIgBgCQgHgEgGgGQgJgKgDgPQgEgSAAgSIABgWIgBAZQAFgnAFgFQASgXAdAAIA5gHQAcgFAagKIAAAAQAugOAXACQgDAQANAaQAMAWgJALQAWAPADARIAAACQgLAGgmAGIgIACQgbAKgaAHIg0ASIgZAHIgHABIADAAIgCABIgWAFIgMABIgHAAIgCAAQgEAAgFgCg");
	this.shape.setTransform(-5.4,22.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3A3839").s().p("Ag3ACQABgNAEgBQAMgEgIAdIgDAAQgFAAgBgLgAApgMIAOAFIAAAIQgKgFgEgIg");
	this.shape_1.setTransform(6.5,-14.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC97").s().p("AAADxQgBgJgIgQQgHgOgBgLQAlgJAWgMQgRgSgNgkQgNgsgJgWQgZhegVgdQgDgFgXgRQgTgNgBgLQgCgYAqgWQAygZAGgLQAEgGAAgNIABgHQABgJADgHIAGAQQASA7g2A/QALAdA5CBQArBgATBGQgpAZgkAAQgOAAgMgDgAg7h+QgFABAAANQAAAOAIgDQAHgagIAAIgCABg");
	this.shape_2.setTransform(7.4,-3.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhNEhIA1gRQAagIAagJIAJgCQAlgHAMgFIAAgCQgEgRgVgRQAJgKgMgWQgOgaADgQQgXgCgsANIAAAAQgaALgdAEIg6AHQgcABgTAXQgEAFgFAnIAAgZIgBAXQgIg3AlgKQAlgLAcgBQAdgBAcgKIANgFQA7gQASgBQACADACAIQAAAIADACQARgBAZgMQgGgTgag5QgZg2gKggQgHg5gOgVQgGgIgKgIIgSgNQgRgQAJgbIABgCIAKgIIA0gkQAXgRALgWQAGgNADgOQALAGAIAUIACAEQAJAVABAQQADAbgWAYQgWAZgBANQgBAWAZAwQAdA5ADALQADAHAMAFQACAHgCAPQAGAXAZAzQAVAtAEAeQg1Ahg1gCQAAAJANASIABACQgVAPg0AIIgOABIgDAGQgWAJgWAFQgbAGgbAEIgOACIAZgIgABKkNIgBAHQAAAMgFAHQgGAKgxAaQgpAVACAYQABALATAOQAWARADAEQAUAdAaBeQAJAXANArQAOAlARASQgXAMglAJQABAKAHAPQAIAQACAIQAuANA4giQgShGgshhQg6iAgLgdQA4g/gSg8IgGgPQgEAGgBAKg");
	this.shape_3.setTransform(-0.2,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.TwiggsLegR, new cjs.Rectangle(-19.4,-28.7,38.5,60.2), null);


(lib.TwiggsLegL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3A3839").s().p("AAFAFIgUgCQABgGAMABQANACAFgEQgBAJgKAAIAAAAg");
	this.shape.setTransform(-17.8,1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AgUAOIAOgPQAMgOANgHQAEAHAEAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgEgCgDAAQgDAHAGABIALAAQgUARgVAIQgJADgJACIAJgJg");
	this.shape_1.setTransform(13.3,2.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AAJBrIgJgFIAAAAQgQgYgVgTIgFgGQgxgtgLgWIATgJQBGgjAwgxQAJAKAKAPIAPAXIAIAPQAIAHAKATQAKASgDAhQgDAhgaAXQgVATgdAAIgOgBg");
	this.shape_2.setTransform(21.3,7.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC97").s().p("AkKB3QAEgYAcgQQAQgJAlgPQA1gZBWgtIBBgjQAQgJAigXQAdgVAQgHQA4gaAmA7QAJAOATAnQAQAiALAOQgPAVgxAZQgkhSgUgmQgfAhhXAdIgaAJQhGAagaAXQgEABgCgEQgCgFgCAAQgDAFABAMQAAAKgGAFQgUAIgYgIQgbgJgKACQgIABgYASQgSANgRAAIgHAAgAidBGIAVACQAKAAABgKQgFAEgOgCIgEAAQgIAAgBAGg");
	this.shape_3.setTransform(-3.7,-5.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ADeC6IgUgIQgOgVgRgSIgLgKIgmgiQgagYgNgSQAAgJANgMQAGgGAKgGQAegUABgKQABgIgVggQgVggACgQQgeAhhYAcIgQAGQhRAagbAWIAAAZQgVALgegJQgjgKgKABQgMABgVATQgTARgTgCQgNgGgBgIQAeglA+geQAjgSBKgiIAdgPIBKgpQAYgOArgbQAngWApgFQBDBEAWBGQAPgCARAGIAQAaIAPAYIALATQATAVAEAaQAFAZgLAgQgLAggfAQQgWAMgPAAQgGAAgFgCgAB8AsIgUAJQAMAXAwAuIAGAFQAUATAQAYIAAAAIAAABIAKAEQAnAFAagWQAZgXAEgiQADgigKgSQgKgSgIgIIgIgOIgPgXQgKgPgKgKQgxAwhFAjgABMipQgQAHgeAVQggAXgQAJIhCAjQhXAug0AZQglAOgQAJQgdAQgDAYQAVACAUgPQAZgSAIgBQAKgCAbAJQAYAIAUgIQAFgFAAgKQAAgMADgFQACAAACAFQACAEAEgBQAagWBHgaIAZgJQBXgeAeghQAVAmAkBSQAxgYAPgVQgLgOgRgjQgSgngKgOQgagpgjAAQgPAAgRAIgAB4AUIgOAQIgJAJQAJgBAKgEQAVgIAUgSIgLAAQgFAAACgHQADgBAEACQABAAABABQAAAAABgBQAAAAAAAAQABgBAAAAQgDgBgFgGQgNAGgNAOg");
	this.shape_4.setTransform(0.6,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.TwiggsLegL, new cjs.Rectangle(-31.4,-18.1,64,37.6), null);


(lib.TwiggsBack = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC97").s().p("AgyDUIgGgSIAAgDIgJgFQgFgDAAgBIguhKQgXghAAgNQgDgIAAgDIgBgEQgBgDAAgDQAAgFABgDQABgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAIACAAIARgPIAGgHQAJAIAuAdIACABIAPAVQApBFABA2IgtAUIgEADgAABAaQgTgJg7giIgCgCIgCAAIgGgHIADgHIADgGQAlhGgUhRQAGAAAMgHIACgBIACgBQAIgDAJABQABAFgBAbQgBAVAFAIQAGglgCgYQBDgdBeAyQAICYhLB+QgNgtg/gbg");
	this.shape.setTransform(-3.3,6.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("Ag5CAQgLgUgJgJIgDgCIABgBIgBgBIAAACIgwgbIAIgIIACABQAAgHAEgFIALAFIACABIgBgBIABABIABAAIAYANIADABIAbAPQCCA9g1BGQAFAAAHgKQAFgJAEAEQgLAxgwAMQgHg6grhNgAgpiRIgqAMQgHgXAGgYIAKgkQAHgFAGgGQAgghArgCQAyAHAuAdIAOAVQAGAngBAJIgDAgQhaghhNANg");
	this.shape_1.setTransform(-1.2,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AguD7QgDgEgEgBIgBAAIAEgDIAugUQgBg2gphFIgQgVIgBgBQgugdgJgIIgGAHIgRAPIgCAAQAAAAgBAAQgBAAAAABQgBAAAAABQAAAAgBABQgDgCgEgIIALgHQAIAAAXgdIAFgIQAUgoAEgSQALgxgCgzIgBgLQgHguASgrIAHgGIgKAkQgGAYAHAXIAqgMQBNgNBaAhIADgfQABgKgGgnIAOgLQACE5hRBVQAGA5gvAUQg4APgXAPIgCgCgAg+A8IgBABIADACQAJAKALATQAqBNAHA6QAxgLALgxQgDgFgGAJQgGALgGAAQA1hHiCg9IgbgOIgDgBIgYgOIgBAAIgBAAIABAAIgCAAIgLgFQgEAEAAAHIgCAAIgIAIIAwAaIAAgBgAhdAHIAAABIABAAIAFADIACACIABAAIACACQA8AjAUAJQA+AbANAtQBLh/gIiXQhfgyhDAdQADAYgGAlQgFgIABgVQABgbgBgFQgJgBgJADIgBABIgCABQgMAGgGABQATBRgkBGIgEAGIABAAIgDAGIgBgBgAg8DqIAAgHIAGASg");
	this.shape_2.setTransform(-2.9,3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.TwiggsBack, new cjs.Rectangle(-18.4,-26.3,31.1,55.2), null);


(lib.TwiggsArmR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAjD8QgRgEgLgNIgCABIgHgBIgCAAIgCAAIgPACIgFACIgOAGQgHAAgMADQgWAHgDgUQgEgCgIAEQgGADgDgFQgIACgCgKQgCgKgGAAIgPAAIAPgIIAHAAIACgFIAKgGIgBABQAlgSBSASIAoh1QAahLgCgzQgBgegUgzQgTguAAgUIAAgfQABgKACgKQADA+AIATIAIASIAUA7QALAkABAgQgJAVgXBdQgSBJgYAfQgsgGgXAAQgpgCgPATQAPgIAcgDQAdgCAUAGIgxADQgbACgQANQAMAEAqgKQApgKAYAMQABAGgEAFQAKAIAEAAIAOADQAJACAHgBIAMgCQALgLgHgeQgHghAHgOQATgcAVg4QAYhEAKgUQgFgvgShIQgThHgGgiIgCgJIAGAGIABADIADAHQAJAWADANIAAABIAAABIAEAOIAIAPIAFAXIABAJIACAEQAJAsANBOQgUAhgXA/QgeBSgIATQAVAvghARQgJAEgKAAIgMgBgAg/DxQANgFAUgEQAUgDAKgFIgngEQgZABABAUgAieDkIAJgEQgDAEABAKQgBgHgGgDg");
	this.shape.setTransform(-4.6,1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC97").s().p("AAcD6IgOgDQgEAAgKgIQAFgFgCgGQgYgMgoAKQgrAKgMgEQARgNAbgCIAxgDQgVgGgcACQgcADgQAIQAPgTApACQAXAAAsAHQAYggAShJQAXhcAJgWQgBgggLgjIgUg8IgHgSQgJgSgCg/QARgZAjANIABABIABABIABAJQAHAjASBGQATBIAEAvQgKAUgYBEQgVA5gTAbQgHAOAHAhQAHAegKALIgNACIgGABIgKgCgAgyDkIAoAEQgLAFgUADQgUAEgMAFQgCgTAZgCgAiFDZIAIgFIgBAGIgHgBg");
	this.shape_1.setTransform(-3.5,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.TwiggsArmR, new cjs.Rectangle(-20.5,-24.4,31.9,51.3), null);


(lib.Symbol60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		playSound("Clave");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(3));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AGeCgIs7AAIAAk/IM7AAg");
	this.shape.setTransform(-21.1,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1AFF00").s().p("AmdCgIAAk/IM7AAIAAE/g");
	this.shape_1.setTransform(-21.1,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FFFF").ss(1,1,1).p("ADMhVIAACrImXAAIAAirg");
	this.shape_2.setTransform(-21.1,1,2.029,1.863);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AjLBWIAAirIGXAAIAACrg");
	this.shape_3.setTransform(-21.1,1,2.029,1.863);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.SamTorso = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3A3839").s().p("AAAAAIAAAAIABABIgBgBg");
	this.shape.setTransform(10.7,-4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF00").s().p("AhkAuIgCgFQgCgJAAgOQAAgYATgZQAcgkA0AAQBEAAAbAlQAPAVAAAZQAAANgDAGIgDADIgEALQgpgKg2AGQgyAGgsARIgGgWg");
	this.shape_1.setTransform(0.1,-17.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F1D38D").s().p("AgaC2QgEADgHgCQgLgDgGAAIAAgDQgZgFgRgLQgSgLgEgLIgHgCQgFgwACgYQAEgDAJAAQgMgcAGgeQADgRAQgiQAQgiADgSQAGgegMgcQA8gVAjgCQgNBXAJAZQAHgQABgrQABgrAEgNIAlADQAWACAKAFQgOAmAYAxIAUAoQALAWACATQACARgCAjQADAFgBAIQAAAmgEASIgDAJIgBAQQAAAKgLAGQgLAHgHALQgPAJhEAAQgSAAgRgCg");
	this.shape_2.setTransform(0.2,5.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ah8CnIgFgFIADgBQgGgJAAgfQAAgfgHgIQADgBAFADQACACAAgHQgDgpAOglQATglAJgVQAEgDAAgHIAAgEIgBgCIgBgGIgCgLQgFgdgLgqIAGAAIABAFIAGAXQAsgRAzgGQA1gGAqAJIAEgKIACgDIAIABIgFAMQgDALgKAWQgGAmAXAoQAbAtACAbQACAQgFBhIgDAAIgFADQAEgSAAgmQABgJgEgEQADgjgCgTQgDgSgKgWIgUgnQgYgxAOgmQgLgGgVgBIglgDQgFAMgBAsQAAArgHAQQgKgZANhXQgjACg7AVQAMAcgGAeQgEASgPAiQgQAggEASQgGAfANAcQgKAAgEADQgBAYAFAwIgCAAg");
	this.shape_3.setTransform(0,2.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.SamTorso, new cjs.Rectangle(-14,-24.2,28,48.5), null);


(lib.SamLegR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AgnAzIgTgTIAAgRQAKgHgDgaQgDgbACgTQATAEAtACQAkACAPAJQgEAbgLAhIgQAsIAAAAQgWAIgPAAQgWAAgMgOgAg+AEIADgIIAAADIABAMg");
	this.shape.setTransform(-0.1,30.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1D38D").s().p("AghEcQAIgxgHhQQgIhiAAgEIAGgiQAGgdgHgiQgHgiAFg2QAFg2gBgMIgHgXQACgKgBgRQgCgkAFgJQALAAAeAeQgCAagKAuQASBCAJAoQAIAngEAkQgEAiABAUQACANAHAYQAHAZABAOQAIBhgLBNQgxgDgTgHg");
	this.shape_1.setTransform(-2.2,-5.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAgFoIAQgsQAMgiADgcQgOgJglgCQgsgCgUgDQgCASAEAbQADAcgKAHIgBgFIgBgMIAAgEIgFhXQgFi/ABgZQACgZgBgyQgBgygEACIADgnQAFhJAAgRIgBgXIgEg+IACADQAEgPAPgEQALAQAgAUQgRAvAWBMQAXBTgJAyIAAAAIABAAIAAAAIABAHIgCAAIAAAJQAAAFgHAnQATAkADBQIgCB9QAIAEASADQAQAEAEAJQgPA4gRAyIgJAAgAg8kxQABARgCALIAHAXQABALgFA2QgFA2AHAiQAHAigGAfIgGAhQAAADAJBjQAGBQgIAxQATAHAxADQALhNgIhhQgBgOgHgZQgHgZgBgLQgBgVADgjQAEgjgHgoQgJgngThCQAMguACgbQgggdgLAAQgFAJACAjg");
	this.shape_2.setTransform(-0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.SamLegR, new cjs.Rectangle(-7.4,-36,14.6,72.7), null);


(lib.SamLegL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AgtBAQgHghgMhDQAJgCAtgTQAigQAhABQAFAQADA1IgEAMIgFAiIgNANIgKAFQgaAMgUAAQgSAAgOgJg");
	this.shape.setTransform(0.3,29.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgwFnIgBgCQgShHgFggIARgFQAKgCAAgJQgEgWgBgVQgEgtAEgoQAEgmAKgjQAQgjAEgPQAHgbgRgYIAAAAIACgHIgCgIQAAgdAIgiIAShBQAThMgfgyIAkgUQAVgLAMAPIAEA+QAAgBADAZIAJBZQgGBjAAAfQAAAgAEBXIgBBJQAAA1gDANIACADIABAaQACAbgFAVQgDg2gFgPQgggBgjAPQgtAUgJABQANBFAHAhIgDAAIgDAAgAAAlGQAAARAIAPIAPAbQgIAogZBTQgQBJAXA2QgZA/gIAgQgFARgCAQQgIAsAGAlIACAEIAHAJQACAGgCAOQgBALAFAFIAqgQQAZgIAaABQAEiXgHhJQgHhKAGg4QAGg4gFhKIAAgJQgCgKgBgdQAAgdgNgGQgDgCgEAAQgPAAgUAZg");
	this.shape_1.setTransform(0.1,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F1D38D").s().p("AgqEYQABgOgBgGIgIgIIgCgFQgGgkAIgtQADgQAEgRQAIggAahAQgXg0AQhKQAYhTAIgoIgPgaQgHgQAAgRQAZgfARAIQAMAGABAdQAAAdACALIAAAIQAFBLgGA3QgGA4AHBJQAHBLgECWQgaAAgZAHIgqARQgFgGACgLg");
	this.shape_2.setTransform(0.8,-5.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.SamLegL, new cjs.Rectangle(-7.1,-35.9,14.5,72.6), null);


(lib.SamHead = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAFFFF").s().p("AABgMIAAAZQgDgEADgVg");
	this.shape.setTransform(11.3,1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1D38D").s().p("AgmAxQgegXgLgrQgGgCgCAGQgCAGgEgBQgOAAABgRQABgMAGgNQAGgBAEAGQAEAGAGgBQADgFgFgJIgIgQQARAFAkABQAcABAQAJQAIAAgLgMQAVgFAiAVQAFgBgFgJQAPgHAMAPQAKAOgEAOQAGAAABgHIADgJQAHAKgGAQQgDAJgIANQgBAAgCgMQgeA7gTAPIgPABQglAAgbgWgAARAxQARgCALgIQALgJgCgJQgJATgdADQgdACgOgSQAEAeAogIgAgHALQAEAFAIgBQAIgCACgFIgNgCIgCAAQgGAAgBAFgAg4gVQAfAPALgIIgXgJQgGgCgEAAQgHAAgCAEgAA+gbQgPAGgGAHQAeABANgSIgEAAQgHAAgLAEg");
	this.shape_1.setTransform(-0.1,3.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAgBsIgQgBQgrgDgkAFIAAgOQAGAAALADQAMADACgJQgsgcgIgiQgXAKgFgcQgFgaARgLQgNgUgBgRQANABAHAQQgGgPALgRQARgYABgDQAIAEgBANQBAgYArAEIgIAGQgGAEABAGQAogEAQAZQAJAPAEAkQANAAADAJIAAAMQgFAXAFAEIAAADIgEACQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBABIgBADIgIAFIgIAHQgZAjgQAPIgIADIgDAFIgGgBgAhRANQAMAsAeAYQAgAaAvgFQATgPAeg8QACAMABAAQAIgNADgJQAGgQgHgKIgDAJQgCAHgFAAQAEgOgKgOQgMgOgPAGQAFAKgFAAQgigUgVAEQALAMgIABQgQgJgcgBQgkgCgRgEIAIAPQAFAKgEAEQgFABgEgGQgEgFgGAAQgHANAAAMQgBARAOAAQAEAAACgGQACgEADAAIACAAgAgcA7QAOASAdgDQAdgCAJgTQACAJgLAIQgLAIgRADIgPACQgaAAgDgYgAgIArQABgGAIABIANABQgCAGgJABIgDAAQgFAAgDgDgAg5AKQAEgIAPAFIAXAKQgEADgGAAQgMAAgUgKgAAoARQAGgIAPgFQAOgFAHABQgLARgcAAIgDAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.SamHead, new cjs.Rectangle(-11.4,-10.8,22.9,21.8), null);


(lib.SamChest = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AhZAfQgPgVAAgZQAAgNAEgGIACgDIADgLQAdAHAjgBIACAAIAdgCQAzgGAsgRIAGAWIABAFQADAJAAAOQAAAYgTAZQgcAkg0AAQhEAAgbglg");
	this.shape.setTransform(-0.1,17.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3A3839").s().p("AAAAAIABAAIgBABIAAgBg");
	this.shape_1.setTransform(-10.7,4.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhuCmIAFgMQADgLAKgWQAGgmgXgoQgbgtgCgbQgCgQAFhhIADAAIAFgDQgEASAAAmQgBAJAEAEQgDAjACATQADASAKAWIAUAnQAYAxgOAmQAIAEAHACQAGABAvAAQAvgBA6gWQgMgcAGgeQAEgSAPgiQAQggAEgSQAGgfgNgcQAKAAAEgDQABgYgFgwIACAAIAFAFIgDABQAGAJAAAfQAAAfAHAIQgDABgFgDQgCgCAAAHQADApgOAlQgTAkgIAUIgCALIgBANIACALQAFAdALAqIgGAAIgBgFIgGgXQgsARgzAGIgeACIgBAAQgjABgdgGIgEAKIgCADIgIgBgAgJB3QAAgFAGAAQAHAAgCANQAAALgEAAIgHgTgAhrhBQAAgDANAAQAOAAATADQAjAAAEgWQgCgVAGAAQAEAAgBAKQAAAnguAAgAgDhZQAAgGADAAIANASQAIAHAIAAQA6AEAAACQAAADgYAAQhCAAAAgcg");
	this.shape_2.setTransform(0,-2.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F1D38D").s().p("AhFC1QgGgBgIgEQAOgmgYgxIgUgoQgLgXgCgSQgCgRACgkQgDgEABgJQAAgmAEgRIADgJIABgQQAAgKALgGQALgHAHgMQAPgIBEAAQASAAARACQAEgDAHABQALADAGAAIAAADQAZAGARALQASALAEALIAHABQAFAwgCAYQgEAEgJAAQAMAcgGAeQgDARgQAiQgQAigDASQgGAdAMAcQg7AWguABIgbAAQgWAAgFgBgAgGCXIAGASQAFAAAAgLQACgNgHAAQgGAAAAAGgAhpgiIAuAHQAuAAAAgoQABgKgEAAQgFAAACAWQgEAVgjAAQgUgDgOAAQgNAAAAADgAAAg6QAAAdBBAAQAZAAAAgDQAAgCg6gEQgIgBgJgGIgNgSQgCAAAAAFg");
	this.shape_3.setTransform(-0.3,-6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.SamChest, new cjs.Rectangle(-14,-24.2,28,48.5), null);


(lib.SamArmR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1D38D").s().p("ADmBvQgFgGABgKIALAGQAGADAAAHQgEADgDAAQgDAAgDgDgADfBIQAFAFAQAHQAOAHAEAHQgeAAgJgagACeBTIgPgGQgKgBgJgDQgMgFgDgDIgJgEIgMgHIAAAAIgDgCIAAAAIAAAAIAAgBIAAgBIgBABIAAABIAAgBIgEgCQgVgMgMgBIgcgEQgdgTgTgEQg8gHgcgGQgxgLgVgfQgNABgGADIgFABIgSAAQgNAAgDAAIgEgBIgIAAIgCgBIgCgCIABgBQgagXALgYQAIgPAOgEQAFgBAGAAIALABIAVAAIAIAAQAcgBARAVQBlADAiA5QBCADAsAbQASABAYAYQAKADAOAIQASAKALACQAOgUATgEQAVgEADAfQgIABgFgFIgHgKQACALgFAQIgGATIgBAKQgZAAgbgIgAjthwIAEAAIgFAAIABAAgAD+BQQgVgHgEgLQAKgEAPAHQATAJAGABQgCAIgJAAQgGAAgIgDgAEEA8QgKgEgBgHQANgBAOAKQgDAEgFAAIgIgCg");
	this.shape.setTransform(-0.6,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ADhB1IgKgHQgGgFgHgBQgQgJgggJIgjgKIgHgCQgLgCgWgMIgUgMQgZgFgTgKQgjgTgKgCQgKgCgSABQgUAChXgcQgYgIgNgGQgNgHgBgEIgZADQgOgDgHgGIAIAAIAEABQADABAOgBIARAAIAFgBQAHgDAMgBQAVAfAxALQAcAHA8AGQATAEAeATIAbAEQAMACAVALIAEACIABABIAAAAIAAAAIAAAAIAAABIAAgBIADACIABAAIAMAHIAIAEQADADAMAFQAJADALABIAOAGQAcAIAYAAIABgKIAGgTQAFgQgCgLIAHAKQAFAFAIgBQgDgfgVAEQgTAEgNAUQgMgCgSgKQgNgIgLgDQgYgYgSgBQgsgbhCgDQgig5hlgDQgQgVgdABIABAAIgJAAIgVAAIgKgBQgGAAgGABQgVAAACgDQADgEAngBIArAAQABABABAAQABAAAAAAQABAAAAABQAAAAAAAAIAFABQAGADAHAFIAPALQBeAEAlA3QAyAAA9AfIABAAIABABQAIAFAGACIAUAOIAAAAIAAABIACABIANAEIANAGQAQAIAMABQAIgYAaAEQAQADAIAKQAEAFADAGIABADIAAgBIABACIAZgBIAAAAQAAADAFAIQAEAHgDAIIABAAIgBARIgCAIQgIAMgLALIgFAFIgHAHIgBABQgKgCgIgGgADhBrQAGAGAHgGQABgGgHgEIgKgGQgCAKAFAGgAECBeQgEgHgPgHQgQgHgFgFQAJAaAfAAgADhA6QADALAVAHQAWAIADgNQgGgBgTgJQgKgEgHAAIgHABgAD1AtQAAAHAKAEQALAEAFgGQgNgJgMAAIgBAAgABQAwIAAgBIAAgBIAAABIAAABIAAAAgAkKgyIACAAIgBABIgBgBgAjyh0IgBAAIAFAAIgEAAg");
	this.shape_1.setTransform(-0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.SamArmR, new cjs.Rectangle(-28.5,-12.5,56.2,25), null);


(lib.SamArmL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAFFFF").s().p("AAAAAIAAAAIABABIgBgBg");
	this.shape.setTransform(-21.7,9.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1D38D").s().p("AjDCDQALgZAZgFQABAJgGAIQgHAJgBAEgAjhBtQALAAALgIQAQgLAJAFQgDAKgYATIgUgPgAiXBjQgCgGgNACIAEgNQgBgCgIADQgJAEgFgFQgCgLgBgPIAAgBQAKgIAMAEQAMADAFALQAkgNBFg0QA8gvAzgMQA6gyApgMIAAgBQAFgFAGgCQAIgCAKADQAwgGgHAwIAAAHIgFABIgVALQgNAHgPgCQguA0g1gGQgnA0h8ATIAAAXQgLAEgXAQQgVAOgRACQADgMgCgDgAjqBlQgDgDACgKQACgGADgGQAFABAHgBQAUgFAGAEQAAAFAEAFIgWANQgIAFgIAAIgIgCgAjiBGQgEgCgEgDQABgMAPgDQAEgBAYAGIgLAJQgJAHgJAAIgHgBg");
	this.shape_1.setTransform(1.7,-0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AjBCMIgIgMQgIgNgOgPQgGgHAGAEIgBgHQAAgJAJgIQgFgCgDgFQAEgPAGgMIAIAAIgCAEIAOgDIACAAQALABAJADIAAAHIARgMQAMACARAMQAegXAdgKIgBgKIAKAAIAEgEIAAAEQAGgEABgGIAHgEIABgEIACgCIAAABQAVgHAbgaQALgGAYgHQAXgHALgGQAJgFAmgeQAagVAmgNQATgEgMAHIgEADQgHABgFAGIAAAAQgoANg7AyQgyALg9AvQhFA0gkANQgEgLgMgDQgMgDgLAIIAAAAQABAPACALQAGAFAJgEQAHgDABACIgDANQANgCACAGQABADgDAMQASgCAUgNQAYgRALgDIAAgXQB7gUAog0QA1AGAtgzQAPACANgIIAVgLIAFAAIABANQgfAEgYAJQgkAsg7ACQgTAXgoARQgSAIg5ARIABAGIgHAAIAAgDQgIAAgEAEIgFAAIgBAMIgJAIIgBAJQgtAagcASIgeAAIgIgHIgKAAIgDAGIgEAFgAixCAIAXAAQABgEAHgJQAGgIgBgIQgaAEgKAZgAi5BiQgLAJgLAAIAUAOQAYgTACgKIgGgBQgIAAgKAHgAjZBkIABABIgBgCIAAABgAjZBWQgDAJADAEQAMADAMgGIAWgOQgDgFAAgFQgHgDgTAEQgHABgFgBQgEAHgBAGgAjJAvQgOADgCAMQAEAEAFABQAMAEAMgKIALgJQgUgFgGAAIgCAAgAj9BLIABgBIACAIIgDgHg");
	this.shape_2.setTransform(0,-0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("ABVAcIAAADIgLABQAEgEAHAAgAhVAMIACgEIAPABIgCAAIgOADIgBAAgABEgYIACgBIABAAQAEgCAAgDIABgBQgBAHgGAEIgBgEg");
	this.shape_3.setTransform(-12.3,2.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.SamArmL, new cjs.Rectangle(-25.3,-14.4,50.8,27.9), null);


(lib.RingR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("Ag9BsQgZgWgFgjIAAgSQAAgVAFgTQAHgaANgXQARgcAcgOIAAAAQAMgGAFAAIAEAAQAIgDAQAAIASAAQAdAFAOAXQAIAMgBAQQAAAbgGAaQgFAdgQAYIgIAKQgQALALgHIAFgEIgBACIAFgEQgnAlgZAEIgHAAQgSAEgVAAIgMAAgAg0g4QgQAXgIAbQgIAcADAdQACANAFAKQAPAbAjgDQAGAAAIgEQAZgKAXgSIAEgEQASgSAFgWIAMgqQAHgWgNgWQgNgXgQgHQgYgIgXAPIgDgDIgEACQgSAKgEAAIAAAAQgKAKgIAMg");
	this.shape.setTransform(0,69.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3A3839").s().p("AgDABIAAgBIADAAIAEAAQgDABgCAAIgCAAg");
	this.shape_1.setTransform(-6.7,-72.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FAFFFF").s().p("AAhAXIABgCQABAAAAAAQABAAAAAAQABABAAAAQAAABABABgAglgXIABAAIAAAAg");
	this.shape_2.setTransform(-2.7,-65.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF1A1A").s().p("AAkKjIABlJIAAgTIABgDIAAgHIAAgNIAAAAIAAgMIAAgCIAAgDIAAgCIgBhvIAAhSIAAiiIAAg3IABg0IAAgRIgBAAIAAgcIAAgbIABg0IAAglIAAgIIgBgVQAAhTgCgcQADgZAHgRIAFABIAACuIAAAIIAAAnIABBNIAAAbIgBAAIAAAUIABBoIABFhQAFABgCAMQACAKgDADIgCABIABCGIgBAhIAABbIAAAIIAAABIABAYIgDAsIAAAaQgBAQgJADIgEgPgAgHodIABgBIgJgMIgJgMIAAAAQAQAIAHABQAKAPAIAEQgFADgGAAQgGAAgHgGgAAkoxIAAgCIAAgDIAHADIAAgEIAAgXQgDAPgCgCQgBgBgCgPQgEgngHgEQAVADAIAfQAGAZgHAUIgBgBIAAAEIgBALIAAAFQgKgGgEgRgAgNqOQABgPgKgKQgMABgIALQgIALAGAKQgIAGgCgRQgCgRAFgIQAZgPAVAPQALAcgVAZQgBgEADgVg");
	this.shape_3.setTransform(-3.9,-11.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00B323").s().p("AgCBVQAMgSACgHQAIAMgJAQQgIANgOAIQgCgIALgQgAgoBMIAAgNQAigEAFgIQAJAFgSAOQgMAJgJAAQgFAAgEgDgAAQhjQAKgOAPAHQgJAZgeAIQAFgGAJgUg");
	this.shape_4.setTransform(-3,-68.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhiLwIgBgKQgCgaAGgaQAFgcALgaIADgJQAUgUAVgQQALgHANgFIAAhhIAAAAIAAn0QgCgOABgSIABgZIAAhtIAAgeIAAAAIAAgUIAAAAIAAgLIAAg/IAAAAIAAgeIAAAAIAAgBIAAgTIAAAAIAAgLIAAhBIAAgVIAAgIIAAgVIAAglIAAg/QgHABgTAKQgQAIgIgDQAEgIAKgOQAKgPADgJQgVAPgUgBIgDgZQAMgGAcgFIgPgSQgEgEgGgJIgCgDIgIgLIgCgCIAIAJIgFgIQAAgBAAAAQAAAAABgBQAAAAAAAAQAAgBABAAIAFACIACACIAAAAIAAAAIAJAMIAJAMIAAABQAMALAMgIQgIgEgLgPIAIACQAHAHALAEIACgEIAAgOIAAAAIAAgEIAAgEIABAAQAFg3gfACQgLgDgTAAQgMAAgJADIgCAAIAAgCIADgBQgaghAQgaQAmgPAVAMIAKAdQADgUATgJQARgJAKAVQgEAHgLAKQgLAJgDAIIALAAIAJAIIABAAIgGABQAKANADAVQgDAkgBAkIAAAFIgBAAQAAA/AFA/IAAAzIAAAIIAAApIAAA6IABAMIAAAFIAAAAIAAAcIgBAAIAAAVIAAA6IABAMIAAAFIAAAAIAAAcQABA5AABpQgBBKAEA1QgCACAAAXIABAdIABAEIgCABIgBAAQADAKAAAcIAABXQAAAegDAJIABAiIAABkIAAAVIABADIAABTIASADIAGACQAbAJAQAWQAQAZgEAdQgEAdgIAaQgJAcgRAYQgKAMgNAJQgXARgdACIgOADIgOABQgxAAgLg6gAhCJ6QgNAXgHAaQgFAUAAAVIAAASQAEAjAaAWQAdACAWgGIAHAAQAZgEAnglIgFAEIABgCIgFAEQgLAHAQgLIAIgKQAQgYAFgdQAGgbAAgbQABgQgIgMQgOgXgdgFIgSAAQgQAAgIADIgEAAQgGAAgLAGIAAAAQgcAOgRAcgAAHp8IAAABQgHARgDAZQACAcABBTIAAAVIAAAIIAAAlIAAA0IgBAbIAAAdIABAAIAAAQIAAA0IgBA4IAACiIABBSIAABuIAAACIAAADIAAACIAAANIAAAAIAAANIAAAGIAAADIAAATIgBFJIACAQQAJgEABgQIAAgaIADgsIgBgYIAAgBIAAgIIAAhbIABghIgBiGIACAAQADgDgBgKQABgNgFgBIgBlgIgBhpIAAgTIABAAIAAgcIgBhNIAAgnIAAgIIAAitQgBgBAAgBQAAAAAAgBQgBAAAAAAQAAAAgBAAIgBAAgAghpZQgLAPADAJQAOgJAIgNQAKgPgJgMQgCAGgNATgAhGpvIAAANQALAHATgOQASgOgJgFQgGAIghAFgAgCqlIAAABQADARAKAGIAAgFIABgKIAAgFIABABQAHgUgGgZQgIgfgUgDQAHAEAEAnQACAPABACQABACADgQIAAAYIAAAEIgGgEIAAAEgAg0sBQgDAVABAEQAWgZgMgcQgVgOgZAOQgFAIACARQACARAIgGQgGgKAIgLQAIgLAMAAQALAJgCAPgAhGsQQgGAHAAAIQgBALAKABQAIgBgBgNQgBgNgIAAIgBAAgAgNsSQgJAUgGAFQAegIAJgYQgGgDgEAAQgIAAgGAKgAhKL9QgFgKgCgNQgDgdAIgdQAIgbAQgXQAIgMAKgKIAAAAQAEAAASgKIAEgCIADADQAXgPAYAIQAQAHANAXQANAWgHAWIgMArQgFAWgSASIgEAEQgXASgZAKQgIAEgGAAIgHAAQgeAAgNgYgAhILmQAEATALAPQAYAJAXgKIAOgIIABgCQAcgOAFgLIAEgGQAIgOAHgPQALgYACgeQACgggegMQgIgCgJAAQgQAAgOAEQgcAMgRAZQgNARgEAUQgFAHAAAQIAAAFIgBAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.RingR, new cjs.Rectangle(-10.3,-81,20.8,162), null);


(lib.RingL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AgIByQgYgHgOgTQgSgXgIgcQgJgbgDgcQgBgKAIgVIAOgYQAogxA9AJIALACIASAQIgBAGIACACIACABQAKAVADAYQADAagCAaQgBAagKAYQgLAbgYAOQgIAJgLADQgHACgHAAIgNgCgAgFhjQgYAHgQATIgGAIIgGAKQgJAjACAXQADAYAIAbQAJAcAZAPIAMAHQAUgCASgUQAPgLAGgPQAMgaAAgdQAAgagCgSQgDgTgKgVQgHgPgOgDQgGgCgHAAQgKAAgKAEg");
	this.shape.setTransform(3.7,63.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF1A1A").s().p("AACJpIABgSIgDiQIAAhtIAAgNIAAgsIAAhtIAAgKIAAgCIAAgEIAAg7IAAlwIgBgkIAAh8QgBiegEAAIAAAAQgDgGgLgIQATgdAKgEQAGABgMAPQAIAgABAbQAGB1gBDCQAADgACBSQAGDZgNFcQgJAAgBgMg");
	this.shape_1.setTransform(1.4,-11.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAbLzQgbgLgRgUQgUgVgGgbQgHgbgFgbQgEgcAZgoQARgVAVgOIgBgCIAAksIAAAAIAAgBIAAgEIAAgBIAAkbIAAgEIAAoaIgBAAIABgsIAAgPIgDAAIAAgGIAAgSQgJgLgCgGIABgGIAJgLQAJgLABgIQAJgEAOgBQAYAAANAKQgMAJgPAHIgFAFIAAAKQgIAJAAADQAAAIAGAHIABABIgDAAQADA2AAB/QAABsACBPIABAEIgCAFQgBADADABQAAGyAEBdIgBAHIAAABIgDAAQAEBUAADDQAXgFARAGQARAJAJAPQAPAYAEAcQADAdgDAdQgFAcgKAaQgLAbgYAPQgPANgRACIgIABIgLgBgAgaIuIgOAXQgIAVABAKQADAdAJAbQAIAcARAXQAOATAYAHQAOADAOgDQAKgCAIgKQAZgOALgbQAKgYABgaQABgbgDgaQgCgYgKgVIgCgBIgDgCIABgGIgSgQIgKgCIgSgBQgyAAghAqgAAMocIAAB8IACAjIAAFyIAAA6IAAADIAAADIAAAKIAABtIAAArIAAAOIAABtIADCQIgBASQACAMAJAAQAMldgGjXQgChTAAjgQABjCgFh1QgCgbgIggQAMgPgGgBQgLAEgSAdQAKAHADAHIAAgBQAEAAABCfgAAQLYQgYgPgIgbQgIgcgDgYQgDgXAKgkIAFgJIAHgJQAPgTAXgHQATgGAQAEQAOADAGAPQALAVADATQACASAAAbQgBAdgLAaQgGAPgPALQgTAUgUACIgNgHgAAeIaQgWAIgOASIgEAGQgKAbADAdQACAdAHAeQAHAfAeAJQAOgBAOgNIAIgJIAJgLQAPgXAEgdQADgcgIgcQgGgbgWgVQgFgBgGAAQgJAAgKAEgAhuInQACAGgIAeQgKAgACASQgOgZAcg9gAhjJPIAVguQADAHgQAmQgLAdACAQIAAACQgIgUAJgag");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.RingL, new cjs.Rectangle(-12.9,-75.5,25.9,151.1), null);


(lib.pretestback = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AoGB9IAAj5IQNAAIAAD5g");
	this.shape.setTransform(51.9,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,103.9,25);


(lib.ParrotFly = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAFFFF").s().p("AAAAEIgBgHIABAAQAEAHgDAAIgBAAg");
	this.shape.setTransform(3.5,5.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF0066","#FFFF33"],[0,1],1,1.1,1,-1.7).s().p("AATABQgFgJABgFQgJABAAAOQgBAOgFABQgCgGADgJQADgHgEgBQAAAAAAABQAAAAgBAAQAAABgBgBQgBAAgBAAQgEgDgDACQgEAEgEAMQgHgFAHgJQAIgKgEgDQAEgBAKAGQAGAEADgEQADgBAGgEIAHADIgCADIAGgCIAFgDIADgDIgBAIQABAQgBABQgDgNgEAJIAAAAQgCgDgCgBQAAACACAJQACAHgEAEQABgJgGgKgAgGgCQACABgCAGQgBAIABAEQgOgCAOgRgAgYgNQAEADgFAEQgFAEABAEQgOgEATgLg");
	this.shape_1.setTransform(0.5,4.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0066").s().p("AABAJIAKgLQABACgGAIQgHAJAAAFQgEgGAGgHgAAEgSIADgDIAAAAIAAABIABAAIgDAFQgIALgHAEQADgJALgJg");
	this.shape_2.setTransform(1.3,-1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("AgJAVQAHgBAMgGQALgGAGAAQgIgNgJgBQgBADADACQADABgBAEQgjAYgWgQQACgfAsgFQARAIARAQQAGAKAAADIgHAKQgIgCgMADIgMABQgJAAgEgEgAArAXIABgBIgCADIABgCg");
	this.shape_3.setTransform(-2.7,-8.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FF0066","#FFFF33"],[0,1],-2.8,0,2.9,0).s().p("AgMAdQAIABAGgKIAMgRQgGAAgFAIQgDAIgFACQAAgHAEgGIAGgJQgFABgGALQgFALgHABQABgFAKgMQAHgJgBgHQgCAKgHgBQgBgEAFgGQAEgFgDgDIgKARQgGAJgGgCQACgFALgKQAKgJgBgGIACgCQADgDAFgBIACAJIABAEIAJAEQAAAGACACQAJAFAAADIgCAGIABABQgDABgDgCQgCgBgDAAQgOAZgJAAQgDAAgCgDg");
	this.shape_4.setTransform(3.9,-2.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FF0066","#FFFF33"],[0,1],-637.5,38,585.6,38).s().p("AAAAAIADgDIACgBIgIAJg");
	this.shape_5.setTransform(2.8,-4.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#33FF00").s().p("AgrAbQAEggAZgRIgBgBIAAAAIACgCQAEgGAAgDQAAgFgDgEIgCgDQAHgFAAgEQgIAAgBgCQAHgJAJAAIAAAIQAAAFADgCQABgDgBgHQgCgFACAAQAOgCANAKQACANgIAIQgJALgBAGQAsAYgUAYIACgFIgCgFQgBgCgFgCQgFgDABgGQgCgCgGAAQgCgCABgDQAAgKgFAAQgDAAgGADQgGAEAAABIAAAAIgBABQgMAHgEADQgLAKgCANQAAACAGAAQAGAAABADQgKAIABAMQAMgEAQAIQAJAAAJgLQAJgNACAAQAEAJgPANIgRAPIAAAAIgEgCQgDgDgCAAQgCAAgLAIQgbgLAEghgAgJADIAAgBIAAABg");
	this.shape_6.setTransform(3,-4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAXBXIgFgkIgGAUIAAgEIgYAAIgBAAIgHAAIAAgDQgRgLAAgNQACgFALgEQALgEADgFQgIgJgEgTIgEAAIABgGIAAgBIABAAQAMgiAQgKIgrgDQgZgEgNgJQgCgOAJgLQAIgKAPgFQAjgLAQAYQAKgOAXgBIAIAAQAJABAFAEQAFADACAHQADAKgHAJQgKALgBAGQAPAGAIANQAIAOgGANQgDAEgBAHQgQAUgMALIACACQAAAPANAUQAQAbADAHIgOgGQgDgCgGgJQgBAAgBAIQgDgCgDgJQgCgHgFgBQgGACAKALQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAAAgBIgEgBQABATgDATQgIgIgEgXgAAYAwQAFAKgBAJQAEgEgCgHQgCgJAAgDQADABABAEIADAIQAEABgGgJQADgKAEAOQAAgBAAgRIAAgHIgDACIgFADIgGACIADgDIgIgDQgGAEgDABQgDAEgGgEQgKgGgDABQADADgIAKQgHAKAHAFQAEgNAFgEQACgCAEADQABAAAAABQABAAAAAAQABgBAAAAQABgBAAAAQAFABgDAIQgEAJACAGQAGgBAAgOQAAgPAKgBQgBAFAFAKgAgCBAQgBgEACgIQABgGgCgCQgOASAOACgAgYAxQgCgFAGgEQAEgEgEgDQgSALAOAFgAANhhQAAABAJABQAAAEgHAFIACADQADADAAAGQAAADgEAGIgBAAIgBACIAAAAIABABQgYARgEAhQgEAgAaALQALgIACAAQACAAADADIAFACIAAAAIAQgPQAQgNgFgIQgCAAgJAMQgIALgJAAQgRgIgMAEQgCgLALgIQgBgDgGAAQgFAAgBgCQACgOALgJQAEgEALgHIABgBIAAAAQAAgBAHgEQAHgDADAAQAFAAAAAKQgBADACACQAGAAACADQgBAGAFADQAFACABACIACAFIgCAFQAUgZgsgYQABgGAJgLQAIgIgDgNQgNgKgNACQgCAAABAFQACAHgBADQgEABgBgEIAAgIIAAAAQgIAAgHAJgAA3gPQADAAACABQADACADgBIgBgBIACgGQAAgEgJgFQgCgCAAgGIgJgEIgBgEIgCgJQgFABgEADIgCACQABAGgKAJQgLALgCAFQAGACAGgKIAKgRQADADgEAFQgFAGABAEQAHABACgKQACAHgIAKQgKAMgBAEQAHAAAFgLQAGgMAGgBIgHAKQgEAGAAAHQAFgCAEgIQAFgIAGAAIgMARQgHAJgIgBQAKAKATgfgAAOgFQgHAGAEAFQAAgEAIgIQAGgIgBgDIgKAMgAAUgkIgDACQgMAKgDAJQAHgFAJgLIADgEIgBAAIAAgBIAAgBgAAegvIgDAEIgEAFIAJgKIgCABgAgRhKQgNAHgHABQAHAGATgDQALgDAIABIAHgKQAAgCgGgLQgQgRgRgIQgtAGgCAgQAWAQAkgZQABgDgDgCQgDgDABgDQAJACAIAOIAAAAQgGAAgLAFg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ParrotFly, new cjs.Rectangle(-7.8,-11.7,15.8,23.5), null);


(lib.Parrot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAFFFF").s().p("AABAGQgBgHgCgEIABAAQAGALgEAAIAAAAg");
	this.shape.setTransform(4.6,7.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF0066","#FFFF33"],[0,1],1.3,1.5,1.3,-2.3).s().p("AAaABQgHgNABgGQgMACAAASQgBAUgHABQgDgIAFgNQAEgJgGgCQgBAEgEgCQgGgEgDACQgHAFgFASQgKgIAKgMQALgNgFgFQAEAAAPAIQAIAFADgGQAEgBAJgFIAKADIgEAFIAIgDIAHgEIAEgDIAAAKQAAAVgBACQgFgSgEAMIAAAAQgDgDgDgCQgBADAEAMQACAKgFAEQABgMgHgNgAgIgDQACACgCAIQgCALACAFQgUgDAUgXgAghgSQAFAEgFAFQgIAGADAFQgUgFAZgPg");
	this.shape_1.setTransform(0.6,6.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0066").s().p("AABAMIAOgOQACADgJAKQgJAMgBAGQgFgHAIgKgAAFgZIAEgDIAAAAIABABIABAAIgFAGQgKAPgKAGQAEgMAPgNg");
	this.shape_2.setTransform(1.7,-2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FF0066","#FFFF33"],[0,1],-853.9,51,784.5,51).s().p("AAAAAIADgFIADgBIgLANg");
	this.shape_3.setTransform(3.7,-5.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9900").s().p("AgNAcQAKgBAQgJQAQgHAIAAQgLgSgNgCQgBAFAEADQAEABgBAFQgwAhgdgVQACgqA8gIQAXALAWAWQAJAOAAADIgKAOQgKgCgRADQgJACgHAAQgLAAgHgGgAA6AeIABgBIgDAEIACgDg");
	this.shape_4.setTransform(-3.8,-11.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FF0066","#FFFF33"],[0,1],-3.8,0,3.8,0).s().p("AgQAnQALABAIgNIAQgXQgIABgGAKQgGALgGACQAAgJAGgIIAIgMQgIABgHAPQgHAOgKACQACgHANgQQAKgNgBgIQgEAMgIAAQgDgGAHgIQAGgHgEgDQgEAFgJARQgIANgJgDQADgHAPgOQANgMgBgIIADgCQAFgFAGAAIADALIABAGIAMAFQAAAIACADQANAHAAAEIgDAIIABABQgEACgEgDQgDgCgDABQgUAggLAAQgEAAgDgDg");
	this.shape_5.setTransform(5.2,-3.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#33FF00").s().p("Ag6AkQAGgrAigWIgCgCIAAAAIADgDQAFgIAAgEQAAgHgEgFIgCgEQAIgHABgFQgMgBgBgCQAKgMALAAQABADgBAIQAAAGAFgCQACgEgCgJQgCgHACgBQASgCASAOQADARgKALQgNAPAAAIQA6AggbAgIADgHIgCgGQgCgDgHgCQgGgFABgIQgCgCgJgBQgDgCACgFQAAgNgGAAQgEAAgJAFQgJAEAAACIAAABIgBABQgQAJgFAEQgPANgDASQABADAIAAQAIAAABADQgOALACAQQAQgFAWALQAMAAALgPQAMgRADgBQAGANgVARIgWAUIAAAAIgGgCQgDgEgDAAQgDAAgPALQgkgQAFgsgAgMAEIAAgBIAAABg");
	this.shape_6.setTransform(3.9,-5.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAfB1IgHgxIgIAbIAAgGIggAAIgCAAIgKAAIABgDQgWgPgBgSQADgGAOgGQAPgFAEgGQgLgNgEgZIgGAAIABgJIAAAAIABAAQARguAVgOIg6gEQghgEgSgNQgDgSANgQQALgOATgGQAvgPAWAhQANgTAggBIALAAQALABAHAFQAHAFACAJQAEANgKAMQgMAQgCAHQAUAIALARQALATgIASQgEAGgCAIQgVAcgQAOIADADQAAAUARAbQAVAkAEAKIgTgJQgEgCgHgNQgCAAgBAMQgDgDgFgMQgDgKgHgCQgHAEANAOQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgFgCQABAZgEAZQgLgKgFgegAAgBAQAHANgBAMQAFgEgCgKQgEgMABgEQADACACAEQADAFABAHQAFABgIgNQAEgNAFATQABgBgBgXIABgKIgEADIgHAEIgIADIADgFIgJgDQgJAGgEABQgDAFgKgFQgNgIgEAAQAFAFgLANQgKANAKAIQAFgSAGgGQAEgCAFAEQAEADABgFQAHACgEAKQgGANADAIQAIgBABgUQAAgTAMgCQgBAHAHANgAgDBWQgBgFACgLQACgJgDgCQgTAYATADgAghBBQgCgGAHgGQAGgFgFgEQgZAPATAGgAARiDQABADALAAQAAAGgJAHIACAEQAFAEAAAHQAAAEgGAIIAAABIgCACIgBABIACABQghAWgFAtQgGAqAjAQQAQgLADAAQACAAAEAEIAHADIAAAAIAWgUQAUgSgFgMQgDABgMAQQgLAQgNgBQgWgLgRAFQgBgOANgMQgBgDgIAAQgHAAgBgCQADgTAOgNQAGgEAPgKIACgBIAAAAQAAgCAJgFQAJgEAEAAQAGAAAAANQgBAEADACQAIABADADQgBAJAGAEQAGADACACIACAHIgCAHQAagig6ggQABgIAMgOQALgMgDgRQgSgNgSACQgCAAABAHQADAJgCAEQgGACAAgGQABgIgBgCIAAAAQgLgBgKAMgABKgUQADgBAEADQADACAEgBIAAgCIACgIQAAgFgMgHQgDgDAAgIIgMgFIgBgGIgDgLQgGAAgGAFIgDACQABAIgNAMQgPAPgDAHQAJADAIgOQAJgRAEgFQAEADgGAHQgGAIACAGQAJAAADgMQADAJgLANQgOAQgCAGQAKgBAHgOQAHgQAJgBIgJANQgGAIAAAJQAGgCAHgLQAHgKAHgBIgQAXQgJAMgLAAQAOAMAZgpgAATgHQgJAIAEAIQABgHAKgLQAJgKgCgEIgNAQgAAbgxIgFAEQgPANgFAMQAKgHAMgPIAEgFIgBgBIAAgBIAAAAgAAog/IgEAFIgFAHIAMgNIgDABgAgXhjQgSAIgJACQAKAJAZgFQAQgEAKACIAKgNQAAgEgJgOQgWgXgXgKQg8AHgCArQAdAWAwgiQACgEgEgDQgEgDAAgFQANADALASIAAAAQgIAAgPAIg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#33FF00").s().p("AgbAfIgBgBIAAgBIACgDQAGgIAAgEQAAgHgFgEIgBgDQAIgHAAgGQgLAAgBgDQAKgMALAAQABADgBAIQAAAGAGgCQACgEgCgJQgCgHACAAQARgCASANQADARgKALQgNAOgBAIIABAAIgEABIgLACQgIACgHAAIgJABIgFABIAFgEg");
	this.shape_8.setTransform(4,-10.8,0.999,0.999,-18);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgtAkQghgEgSgNQgDgSANgPQALgOATgGQAvgPAWAhQANgTAggBIALAAQALABAHAFQAHAFACAJQAEANgKALQgLAPgDAHIgIABIgBAAQABgIAMgOQALgLgDgRQgSgNgSACQgCAAABAHQADAJgCAEQgGACAAgGQABgIgBgCQgLgBgKAMQABADALAAQAAAGgJAGIACAEQAFAEAAAHQAAAEgGAIIAAABIgCACIgBABIACABIgFAEIgEAAIgNABIgzgDgAgPASQgSAIgJACQAKAJAZgFQAQgEAKACIAKgNQAAgEgJgNQgWgXgXgKQg8AHgCAqQAdAWAwgiQACgEgEgCQgEgDAAgFQANADAKARIAAAAQgHAAgPAIg");
	this.shape_9.setTransform(-1.4,-9.4,0.999,0.999,-18);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#33FF00").s().p("Ag6AFQAFgoAegWIAFgBIAIgBQAIAAAGgCIANgCIADAAQA5AggaAgIADgGIgCgHQgCgCgHgDQgGgEABgJQgCgDgJgBQgDgCACgEQAAgNgGAAQgEAAgJAEQgJAFAAACIAAAAIgBABQgQAKgFAFQgPAMgDASQABADAIgBQAIAAABAEQgOALACAQQAQgFAWAKQAMABALgQQAMgRADAAQAGAMgVASIgWAUIAAAAIgGgDQgDgEgDAAQgDAAgPALQgkgPAFgsgAgMgbIAAAAIAAAAg");
	this.shape_10.setTransform(3.9,-2.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAEBSIgHgwIgHAbIAAgGIghAAIgCAAIgKAAIABgEQgWgPgBgSQADgGAOgFQAPgGADgFQgKgMgFgbIgFAAIABgJIAAAAIABAAQARgtAWgPIgHAAIAMgCIAFAAQgdAWgFApQgGAsAkAPQAPgLACAAQADABADADIAHACIABAAIAWgTQAUgSgGgMQgCAAgMARQgLAQgNgBQgVgKgRAFQgCgQAOgLQgBgEgIAAQgIABgBgDQADgTAPgMQAFgFAPgJIABgCIAAAAQAAgCAKgFQAJgEAEAAQAGAAAAANQgCAFADACQAJABACACQgBAJAGAFQAHACACACIACAHIgCAHQAaghg5ggIAIgCIAAABQAUAJAKARQAMASgIASQgEAGgCAJQgVAcgQAPIADACQAAATAQAbQAWAkAEAKIgTgIQgEgDgHgMQgCAAgBALQgEgDgEgMQgDgKgHgBQgHADANAOQAAABgBABQAAAAgBAAQAAABgBAAQgBAAAAgBIgFgCQABAZgFAaQgLgLgEgegAAEAdQAIAOgBAMQAFgFgDgKQgDgMABgDQADABACAEQACAFABAHQAFACgHgOQAEgMAFATQABgCgBgXIAAgKIgEADIgGAFIgIADIADgFIgKgEQgHAGgEABQgEAGgJgGQgOgIgFABQAFAEgKANQgKAOAJAHQAGgSAGgGQAEgCAFAEQAFADABgFQAGADgEAJQgFANADAIQAIgBAAgUQABgTAMgBQgBAGAFANgAgeAzQgCgFADgLQACgJgDgBQgTAYATACgAg8AeQgCgGAHgGQAGgFgFgDQgZAOATAGgAAvg3QADgBADADQAEACAEgBIgBgCIADgIQAAgFgNgHQgCgDgBgIIgLgEIgBgHIgDgLQgHAAgFAFIgDADQABAHgNAMQgOAPgDAHQAJADAHgOQAJgQAEgGQAEAEgGAGQgHAIADAGQAIAAAEgMQACAJgLANQgNARgBAGQAJgBAHgPQAHgPAJgCIgJAOQgGAHAAAJQAGgCAHgLQAGgKAIgBIgQAYQgJAMgLAAQANANAagrgAgIgqQgIAKAEAHQABgHAKgLQAIgLgCgEIgNAQgAAAhUIgEAEQgQANgEAMQAKgHALgPIAEgFIgBAAIAAgCIAAAAgAANhiIgEAFIgFAIIAMgOIgDABg");
	this.shape_11.setTransform(2.7,3.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF9900").s().p("AAEAXQAFgBAKgFIgDACIgBACIgBAAIgGABIgEABgAgbAPIgBgBIABgJIABgDQAEAGAXgBQAJABALgEIAEgBIACgBIgEAEIgGADQgVAJgBABIgFABQgJAAgIgFgAgYgCQAKgPAagFIAGACQAIAEACAHIABAGIAAAAIAAAAIgEgBIgCgBIABADIAAABIgBABQgJACgNAAIAAAAQgWAAgDgEg");
	this.shape_12.setTransform(3.8,-9.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#FF0066","#FFFF33"],[0,1],-3.8,0,3.8,0).s().p("AgQAnQALABAIgNIAQgXQgIABgGAKQgGALgGACQAAgJAGgIIAIgMQgIABgHAPQgHAOgKACQACgHANgQQAKgNgBgIQgEAMgIAAQgDgGAHgIQAGgHgEgDQgEAFgJARQgIANgJgDQADgHAPgOQANgMgBgIIADgCIAEgDIABAAIABgBIAFgBIADALIABAGIAMAFQAAAIACADQANAHAAAEIgDAIIABABQgEACgEgDQgDgCgDABQgUAggLAAQgEAAgDgDg");
	this.shape_13.setTransform(5.2,-3.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#33FF00").s().p("Ag6AuQAFgiAVgUQAKAFAPADIAHgDIgCACIAAABIgBAAQgQAJgFAFQgPANgDASQABADAIAAQAIAAABADQgOALACAQQAQgFAWALQAMAAALgPQAMgRADgBQAGANgVARIgWAVIAAAAIgGgDQgDgEgDAAQgDAAgPALQgkgQAFgsgAA2AjIgCgGQgCgCgHgDQgGgFABgIQgCgDgJgBQgDgCACgFQAAgLgGgBIACgBIABgBIABgBIADgDQAxAdgZAfIADgHgAgMAOIAAAAIAAAAgAgggjQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBIgCgIIACgJIABAAQAEgEAFABQgBAFAFAAQAEAAAAgGQABgIgJAAIgDAAIgBABIgDAAIAAAAQgCgBAFgKQAEgLAUgCQATgBADABIAEACIAHAFQAIAJAAABIAAABIABAHQgDgBgGAAQgLAAAAAEQAAAFAHAAIAIAAIADADQgCAGgEAEIgBABQgFgLgOAAQgGAAgBABIgMADQgPAFgIAKIgDAEIAAgDgAgLhpIAFAHIgDABIgCgIg");
	this.shape_14.setTransform(3.9,-6.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAECDIgHgwIgHAbIAAgGIghAAIgCAAIgKAAIABgEQgWgPgBgSQADgGAOgFQAPgGADgGQgKgMgFgbIgFAAIABgHIAAgBIABAAQAPgoATgQIABAAIABgBIAAAAQgBgHACgHIgEgJIgBgDQgEgEACgNQAAgfAYgKIgBgOQAAgNAEAAIARAXIAHAAIASAAIALALQAJAJAAACIAAABIACAGQAEAMgKAMIgIALIACACQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAEgDADQASAJAKAQQAMASgIASQgEAGgCAIQgVAcgQAPIADADQAAATAQAcQAWAjAEAKIgTgIQgEgDgHgMQgCAAgBALQgEgCgEgNQgDgKgHgBQgHADANAOQAAABgBABQAAAAgBABQAAAAgBAAQgBAAAAgBIgFgCQABAagFAZQgLgLgEgegAAEBOQAIAOgBAMQAFgFgDgKQgDgMABgDQADABACAFQACAEABAHQAFACgHgNQAEgNAFATQABgCgBgXIAAgKIgEADIgGAFIgIADIADgFIgKgEQgHAGgEABQgEAGgJgGQgOgHgFAAQAFAEgKAOQgKANAJAHQAGgSAGgGQAEgCAFAEQAFADABgFQAGADgEAKQgFAMADAIQAIgBAAgTQABgUAMgBQgBAGAFANgAgeBkQgCgFADgLQACgJgDgBQgTAYATACgAg8BQQgCgHAHgGQAGgFgFgDQgZAOATAHgAgtgCQgGArAkAQQAPgLACAAQADAAADAEIAHACIABAAIAWgUQAUgSgGgMQgCABgMAQQgLAQgNAAQgVgLgRAFQgCgQAOgLQgBgDgIAAQgIABgBgDQADgSAPgNQAFgFAPgJIABgCIAAAAIACgCIgGADQgOgDgLgGQgVAVgEAjgAAvgGQADgBADADQAEACAEgBIgBgCIADgIQAAgFgNgHQgCgCgBgJIgLgEIgBgGIgDgMIgFABIADgCQgKAEgFABIAAAAIAEgBIAGgBIgFAEIgDACQABAHgNAMQgOAPgDAHQAJADAHgOQAJgQAEgGQAEAEgGAGQgHAIADAGQAIABAEgNQACAJgLANQgNAQgBAGQAJgBAHgOQAHgPAJgCIgJAOQgGAGAAAJQAGgCAHgKQAGgKAIgBIgQAXQgJAMgLAAQANANAagqgAgIAGQgIAKAEAHQABgGAKgMQAIgKgCgEIgNAPgAAkhAIAAAAIgCACIgBABQAFABAAAMQgCAFADACQAJABACADQgBAIAGAFQAHACACADIACAGIgCAHQAYgfgxgeIgDADgAAAgjIgEAEQgQANgEAMQAKgHALgOIAEgGIgBAAIAAgBIAAgBgAANgxIgEAFIgFAIIAMgOIgDABgAgQhIIgBAJIABACQAKAGALgCQABgBAWgKIAGgCIAEgFIgCABIgEACQgLADgJAAQgXAAgEgFIgBACgAgNhPQADAEAWAAQANAAAJgDIABAAIAAgBIgBgDIACAAIAEACIAAgBIAAAAIgBgGQgCgGgIgEIgGgCQgaAFgKAPgAgUhgIABAIQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAIABADIACgDQAJgLANgEIANgDQACgCAFAAQAPAAAEAMIABgBQAEgFACgFIgDgEIgIAAQgHABAAgFQAAgEALAAQAGAAADABIgBgHIAAgBQAAgCgIgIIgHgFIgEgCQgDgCgUACQgTACgEAKQgFAKACABIABAAIACABIABgBIADAAQAJAAgBAIQAAAGgEAAQgFAAABgGQgFAAgEAEIgBgBIgBAKgAADiTIACAAIgFgHIADAHg");
	this.shape_15.setTransform(2.7,-1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{scaleX:1,scaleY:1,rotation:0,x:-3.8,y:-11.9}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_5},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_9},{t:this.shape_8},{t:this.shape_4,p:{scaleX:0.999,scaleY:0.999,rotation:-18,x:-4.2,y:-8.5}}]},25).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{scaleX:1,scaleY:1,rotation:0,x:-3.8,y:-11.9}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},8).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},15).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{scaleX:1,scaleY:1,rotation:0,x:-3.8,y:-11.9}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},18).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.5,-15.7,21.1,31.5);


(lib.MonkeyLegR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF9900","#FFF8EE","#FFFFFF","#FFEED5","#FFA31B"],[0,0.255,0.494,0.761,0.976],-10.5,3.3,27.8,-35).s().p("AhpCkQAfgnAIgWQALghgYgQQgGgEgIgDQACgRAWACQAaAEAHgHQAEACgEAEQgGAEAAACQACAGADgBQAGgDADABQgEAHAFACIACABIAJABIAIApQAEAVgGANQgDAAgBgFQgBgEgEAAQgCADgCANQgCALgIgBQABgHgCgHQgDgJABgFQgEADgBAXQAAASgSgBQAIgSgLgOQACAWgOANQgIAGgHAAQgIAAgIgHgAg+AmQgBAQAKgBQgBgPgHAAIgBAAgAgQAnIAAgKQAMgCAKgSQgJACgKAKQgLAMgHACQACgKAMgGIARgMQgHgCgBgCIgFgEQAEgIAMANQAQgHAMgQQARgWAHgGQACADgGAHQgHAJgBAEIATgKQALgGAFgHQgMADgGAJQACgQAQgTQADABgEAGQgEAGACAEQAGgBAIgKQAGgKALABQgRANgLAWQgDAAgCADQgCAEgFgBQgDAWggARQgkAWgIAPIgBAAQgDAAABgFgAAUAJQAMgCAFgIQgDAAgFgDQgCAFgHAIgABGhnIgBgBIgDgGIgBABQgCACADAHQAEAIgEACQgRgigPgMQAJAPgJACQgKgRgDgLQgDgIAAgHQAPgHARgBIANAlQACgKgDgKIgEgRQARAMAAAiIAAgBIAAgBQAEgMACgBQAWAoADAXQgEAAgCgHQgDgIgCgCQAAAIgGAFIgLAHQgEgUgEgKgABSheQACAMACgCQgCgIAEgJQADgHgCgCQgBADgFADQgBgCAAgJQABgHgFgCQABAKgHAKIADgBQAGAAABALgAA/huQABgEgCgGQAAAAAAAAQAAgBABABQAAAAABAAQABABABAAQACgGgFgCIgIgDQAFASADACgAAxh/QAEgOgIgBIgBAAQgHAAAMAPgAAuiZQgCgLgBAAQgBAFgCAAQgBgIgCgBIAAAPIAJAAIAAAAgAAziqIABAAIAAACIgBgCg");
	this.shape.setTransform(-0.5,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhzCiQAhgyAEgKQAOgkgdgOIgKgFQgBgTAfgCQAQgBAEgCQAJgDgCgKQALgDALgJQALgLAMgEIAAgDQAEgCAEgGIAAACQASgKALgPIAUghIgGACIAAgHIAAgCIADgBIgEgFIgJgKIgVgXQgGgSgOgEIAAgBIgBgDIAPgIQAAAGADAJQAEAKAKASQAIgDgIgOQAPALARAjQAEgDgEgHQgEgHADgDIABAAIADAGIABAAQAEALADAUIAMgIQAFgFAAgHQADABACAIQACAHAFABQgDgXgXgoQgBAAgEANIAAABIgBAAQABghgSgNIAFASQADAKgCAKIgOglIACgBIAAADIABgDQAJAAAJABIAbAjQATAZgBAVIAAACIABAAIACAIIAAAAQgDALAFAMQgQgDgGAMQgFAQgEAHQgPADgSAUQgRASgQAEQABAJAKAYIAAAWIgOgMQAAgFgCgFIgCgFQgFgIAAgGQgIAAgEAKIgFAJQgCADgDABQABAHAIAZQAGASgDATIg0ArQgIgDgZAHIgKACQgLAAgGgMgAhiAtQAJACAGAFQAYAPgLAhQgJAXgfAnQARAOAOgNQAPgNgCgWQALAOgJARQASACABgSQABgYAEgDQgBAFACAJQACAIgBAHQAJABABgLQACgOADgCQADgBABAFQACAFACAAQAHgOgEgUIgIgpIgJgBIgCgBQgGgCAFgHQgDgBgGACQgEABgBgFQgBgCAHgFQAEgDgEgCQgIAGgagDIgFAAQgQAAgDAPgAgUAbIgBAJQAAAGADAAQAJgQAjgVQAhgSADgWQAEABADgDQACgEACAAQAMgVARgNQgLgBgGAJQgJALgGABQgCgFAFgGQAEgFgEgBQgQATgBAPQAGgJALgCQgFAHgKAGIgTAKQAAgEAIgJQAGgIgCgCQgIAGgQAVQgNARgPAHQgMgNgFAIIAGAEQABACAIABIgTAMQgLAHgCAKQAHgCAKgMQAKgLAKgBQgLASgLACgAhCAkQAIgBAAAPIgBAAQgIAAABgOgAAYgGQAFADAEAAQgGAHgLADQAHgIABgFgABOhgQgBgOgJAEQAHgLgCgKQAGACgBAIQgBAJACACQAFgDABgDQACABgDAIQgFAJADAHIgBABQgCAAgBgKgAAziFIAIAEQAFABgCAHQgBgBgBAAQgBgBgBAAQAAAAgBAAQAAAAABABQACAGgBAEQgDgDgFgSgAApiQQAHABgEAOQgMgQAJABgAAhicIAAgOQACAAABAJQABAAACgGQABAAACALg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.MonkeyLegR, new cjs.Rectangle(-11.6,-17.4,23.3,34.8), null);


(lib.MonkeyLegL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#CCCCCC","#E49D34"],[0,1],-969.4,-62.1,274.9,-62.1).s().p("AgBAHQACgGgFAAQgGAAABgCQADABAHgFQAGgEADAFQACAEgKAFIgCADg");
	this.shape.setTransform(1.5,-0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ah+BMIAAgCIAEgRQAPgmABgJQgIgDgGgEIgCgQQAcAMgIAeQgEASgOAmQALAEAGgIQAHgKAFAAQgHgHADgFIAJgLQgJgBAAgFQAOgEABgIQgBgMALgOQAGgIAPgQQAagegagWQgGACAAAJQgBAIgEACQgCgOAFgSQgJABgDAOQgEAPgHACQAKgagEgJQgMgCgBASQgBATgJAAIAFgMQACgHgBgHQgGgBgDAGQgDAHgDACQgBgHAEgHQAEgIgBgHIgPAAIABAmQgBATgHASIgFgXIABgBIAEgJIAFgHIgCgDQABgGABgIQAAgLgEgIIABgDQAIABAMgGIAAAAQAGAGAGACIgBABIAAAAQADAEARgGIAHABIAHAAIABAEQAPAJAEALQACAHACAZQAQASgIANIAJgLQAKAAAigFQAOgBANABIAHAAIADAAIACACIAHABIgEACIgHACIgCAAQgJACgDACQAAABAMABQgEABgJAHQgEABgEABQgEABgEAAQABgCANgDQgIgGgMAGIgRALQgCgDAFgEIAAgBIAEgBQAKgHgDgDQgDgFgGADQgIAFgDgBQAAAEAFAAQAGAAgDAFQgKgBgBAGQgFACgCgHQgBgHgFABQgGAEACAAQAEAAAAAEQgTAJgKAIIgBAAQgFAEgDAFQACAHAHgQQADAKgRAIQgYALgCADQAEAGATgJQgJALgZAMQABAEAFAEQABACgHAEQADADAJgHIANgKQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAABQgCACgDAAIAFABIABgBIAAAAQAIgBAHgLQAOgTAGgDQAAAGgGADQACABAGgCQAFAAgCAMQANgGAKgPQAKgNADgMIAJABIAKAAIALAAIALgBQgGAHgOgBQAWAIAegGIAGgCQAKgCAHgEQAJgEAGgFIAEAEIgBAQIgJAAIAAgBIAAAAIgBAAIgDABIgRABQgbADgkgBQgqAfg5AcIgfAMQgQgDgNAEIgBgagAg1gCQgQAOgCAQQAXgIAWgXQgFgBgBgJIABgQQgEAKgSARgAgoBeQAEABACADIgDAEIgDgIgAgpAkQAFgIAIAAIgJALQgEAGgLADQAEgCAHgKgAgUAkQABgDAKgGQAFgEgHgHIATAAIgMAPQgFAGgGAAIgFgBgAA8AQQADgFAAgDIgUAFQgGACgFAAQgFAAgFgCQAJgEANgEQANgFAQgCIADgBIABAAIgBgBIAAAAIgBAAIgDAAIADgIIADgHIAKABIAAABIAGgBIACAAQAAACAEACIADACIAAABIABAAIAEADQgKABgHgEIgGAGQgEAEgGABIgGACQAAACAKABIABAAIAAAAQgIAMgKAAIgCgBgABoAJIgNgBQAAgCAIgBIABAAQABAAACgIQAEABADgCIACgBIAEADIgCABQgDABgFAAQABAEAFgDIADgBIAAAAIAAAAIADAAIACABQgBACgEABQgFACAEACQgDABgFAAIgCAAgAAIguIAEAAIgBAGQgCgCgBgEgAgPg8IABgHQAEAGAEAFIgCAFQgGAAgBgJg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FF9900","#FFF8EE","#FFFFFF","#FFEED5","#FFA31B"],[0,0.255,0.494,0.761,0.976],5.7,22.6,44,-15.7).s().p("Ah5BZQAPgnAEgSQAHgfgbgLIgBgDQAHgTABgTIAAgmIAOAAQACAIgEAHQgFAHACAHQACgBAEgHQADgGAFAAQACAIgDAHIgFALQAJAAACgTQABgRALABQAFAJgLAaQAIgCAEgPQADgOAIgBQgEASACAOQAEgCAAgIQABgIAGgDQAZAWgZAeQgQAQgGAIQgLAPABAMQAAAIgOADQgBAGAKAAIgJALQgEAFAHAHQgFABgHAJQgEAGgHAAIgGgBgAhcBZQAIgFgCgCQgEgEgCgEQAagMAIgLQgTAJgEgGQADgDAXgLQARgIgCgKIAAAAQAJgIATgJQABgFgEAAQgCAAAFgCQAGgBABAGQABAHAGgCQABgHAKABIABABIgBABQgFAEACADIARgLQAMgFAJAFQgOAEgBABQAFABAEgBQAEgBADgDQAKgFADgBQgLgCgBgBQADgCAKgBIABgBIAIgBIAEgDIABAAIgCAHIgEAIIAEABIAAAAIAAAAIgCAAQgRAEgNAEQgMAEgJAFQAEABAFAAQAFAAAGgBIAUgGQAAAEgDAFQALABAJgNIAAAAIgBAAQgKgBAAgCIAHgCQAFgCAFgDIAGgGQAHAEAKgBIAEADIgCABQgEACgEgBQgBAIgBAAIgCAAQgHACAAABIAMACQAHAAADgCQgEgBAFgCQAEgCABgBIAFAFQgGAFgJAFQgHADgKADIgHABQgeAGgWgIQAPABAFgGIgLAAIgLAAIgJAAIgJAAQgDALgKANQgKAPgNAHQACgMgGgBQgGACgBgBQAFgCAAgHQgGADgNATQgIALgHACIgBAAIAAAAIgFAAQADgBABgCQABgBAAAAQAAAAAAgBQgBAAAAAAQgBgBAAAAIgNAKQgHAFgEAAIgCAAgAgqAnQgGAKgEACQAKgCAFgGIAIgMQgHABgGAHgAgKAeQgJAGgBADQAIAEAIgJIALgOIgTAAQAHAHgFADgAhcBKIAAAAgABpACQAFABADgBIACgCIACACIgDABIAAABIAAAAIgDABIgDAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBgBAAgBgABmgIIABgBIAAABgABYgOIAAgBIAGAAIgGABIAAAAg");
	this.shape_2.setTransform(0.1,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.MonkeyLegL, new cjs.Rectangle(-12.8,-10.1,25.6,20.4), null);


(lib.MonkeyArmBanana = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3A3839").s().p("AgLgFQACgBAKADQAKADABAGg");
	this.shape.setTransform(-6,1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAFFFF").s().p("AAAAAIAAAAIAAAAg");
	this.shape_1.setTransform(-4.8,2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFCC").s().p("AgHALQgagFgDgQQAWgGAWAHQAXAGAGAPIgFABIAAgBQgBgGgKgEQgKgDgCABIAXAMIAAABIgQABQgMAAgLgDg");
	this.shape_2.setTransform(-8,1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("AggAwIAAAAQgEgHgEgDIAAgBQABgDAGgDQAGgDABgEQgDgGgGAFQgEADgBgCQgDgrAogOQACAIgFADQgHAEgBAIQgBAEAHAhQAEAXgQACIgCAAQgGAAgEgEgAg8AGQABgFAHgEQAIgFABgFQgCAUgLAAIgEgBgAAwADQAGgRARAEQgBAFADABQgCAGgIADIgGABQgFAAgEgDgAgrgSQgFACgIAKQgIAHgIACQgEgKAhgLgAgLggIAAgBIAAABgAAdgkQgSgFgLACQACgOAbACQAbABgQAHQAFAJgHAAIgJgCg");
	this.shape_3.setTransform(-3.6,5.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag+B1IAAAAQgLgCgGgRIAAAAIgBgCIAAgEQAAgFgDgCIgHgCIAAABIAAgBIAAgCQgBAAgBgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQgCABgCADQgDAIgDACQgEAAABgGIABgJQgDABgBAFIgBACIAAABIgCADQgDgGADgMIABgEQAAgGgGgEQASgVAWgFQgCgBgZgKQgSgHACgPQARgKAaAHQAVAFAQALIARgQIACABIABAAIAAAAQARADAMgNIAHgFIAAgBIASgRIgEgBIABgBIABgBIACgDIABAAIABAAIABAAIAAgBIABAAIABAAIABgBIACAAIACgBIABgCIAHgIQAHgFABgHQgIgHgPAAQgJABgEAEIgCgBIgGgEIAEgNQAJAJAtgEQAAgGgOABQADgDAMgCQAMgCACgFQgUgIgXABQgMAAgNACIgHACIgXAFQACgGAHgGIACgCIAPgBIAzgEQAHAFAcAGQAYAFAFANQgPADgPAcQgRAhgLAHQgNgBgFALIgHANIgBgDQgDgDgGAIQgGAIgHgCIAAAUQAAAEAHADQAIACABADQAFAUgVAAQgaAAgCADQgbgLgNgBQAJAMgBAPQAAAOgIAKQgIAIgIAAIgCAAgAg+BRQgBAEgGADQgGADgBAEIAAAAQAEAEAEAHIAAAAQAEAEAIAAQARgCgFgXQgHgjABgDQABgJAHgDQAFgDgCgIQgoAOADArQABADAFgEQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAQACAAACADgAhYA2QgHAFgBAFQAPAEACgYQgBAFgIAFgAAMA9QAIAEAHgDQAIgCACgIQgDgBABgEIgGgBQgMAAgFAPgAgCAxQgKAIgBAEQANAGAIgLQAJgJABgPIgPAAQABAKgGAHgAhrA9QAHgCAIgIQAJgLAEgCQghAMAFALgAgNAgQgCAMgPALQAcABgCgVQgEgDgDAAIgCAAgAgqAyQAagHAAgTQgVAJgFARgAh0ABQADARAaAFQATAEAVgCIAAAAIAAAAIAFgBQgGgQgXgHQgMgCgMAAQgLAAgKACgAgGAVQARAFgHgMQAQgHgagCQgbgBgDAOIAJgBQAJAAAMAEgAANAEQAGAFAFAAQADgGgFgFIgKgLQAAAEgHADQgFACAAAFIADgBQAFAAAFAEgAArgnQgTAVACARQAJgQACAHQgBgKAegpQABADADACIgEAUQgFAEgGgBIAAAJQgBAGAEAAQACgFAEAAQAHABAEgCQACgGgDgDIgEgGQADgCAFgJQAFgHAEABQgEgDAGgNQAGgNgDgCQgNARgJAGIABgFQAAAAAAgBQABgBgBAAQAAgBAAAAQgBAAAAgBQgEAIgXAagAiAAAIAEgFIgBADIAAAAIgEAHIABgFgAAYhdQACgHASgCQgBAEAEAEQADADgEAEQgLgBgLgFg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FF9900","#FFF8EE","#FFFFFF","#FFEED5","#FFA31B"],[0,0.255,0.494,0.761,0.976],-29.3,33.9,9,-4.4).s().p("AgmBTQABgEAJgIQAIgHgBgJIAPAAQgBAOgJAJQgGAHgIAAQgEAAgEgCgAg3BNQAPgLACgLQAEgBAFADQABAUgYAAIgDAAgAgpAuQAAATgaAHQAFgRAVgJgAgLAbQgGgFgHABQgBgGAGgCQAGgDABgEIAKALQADAGgCAHIAAAAQgEAAgGgFgAASgQQAXgbADgIQABABAAAAQABAAAAABQAAAAAAABQAAABAAAAIgCAFQAKgGANgRQADACgHANQgGANAEAEQgEgCgEAHQgFAKgEACIAFAFQACAEgBAFQgEACgHgBQgFAAgBAEQgEAAABgEIAAgKQAGACAFgEIADgUQgDgDAAgDQgeApABAJQgCgHgJAQQgBgRASgTgAgPg1IgGgCIgGAAIAAgCIgCABIgEgCQgFgJACgHIAYgGIAHgCQALgCAMAAQAYAAATAIQgCAFgLABQgMACgDADQAOgBAAAHQgtADgIgJIgEAOIgFgCgAgBhHQALAFALABQAEgEgDgCQgEgEAAgFQgRACgCAHg");
	this.shape_5.setTransform(2.5,-2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.MonkeyArmBanana, new cjs.Rectangle(-12.9,-11.7,26,23.4), null);


(lib.MickTorso = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("AhMAuIgFgEIgLggQgPg0AigwQAugRAnAVQAqAWAsAQQgrAggSAxIgBAEQgEAYAGAXIAFAPQgwgGhHgvg");
	this.shape.setTransform(-7.3,-2.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("AAbBdQgLgIgYgIQgegKgIgEQgVgLgKgSQgJgSACgaIgKADQgCgBABgIIAAgEQABgBAAAAQABAAAAAAQABAAAAABQABAAABABQAEAGACgBIABgDIAGgMIAQggQANgZASgFQARgFAoARIADABIAJAEQAXAJASACQAJABAIgBIAAAkIgFAGIgJAQIgDAFIAAACQADABAAAFIgDAEIgGANQgYA0gTAOIgDACIgBAAg");
	this.shape_1.setTransform(5.9,2.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAeBrQgggOgSgJIgHgEIgCACIgKgCIgbgFQgXgGgwggIgPgQQBIAuAwAGIgFgPQgGgXAEgXQAAAIACABIAKgDQgDAbAKASQAJASAVALQAIAEAeAKQAYAIAMAIIAAAJIgDABQgSgMghgNgAgiAJQAAgBgBAAQgBgBAAAAQgBAAAAAAQgBAAAAABQASgxAqghQgrgPgqgWQgogVguAQIAAgBIAXgIQAbgLAZAKQAYALAZANIAFACIAXAKQAtAVAkAMIAPAFQAVAGARADIABAAIADgDQAEACACAFQACADAEAAIAAACQgIABgIgBQgSgCgXgJIgJgEIgDgBQgqgRgQAFQgSAFgNAZIgPAgIgGALIgBADIgBAAQgCAAgEgFg");
	this.shape_2.setTransform(0.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.MickTorso, new cjs.Rectangle(-17.1,-13.2,32.7,26.4), null);


(lib.MickLegR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("AkACoQARgOAEgEQAEgSAMgXIATglQBPAIBAhFQAgglATgSQAMgMAOgKQASgMAUgHQAJgBAIAEQAJAFAFAAQAZgoAagaQAfgfAggJQAEAHAZAcQAeAjAEAYQgJAEgwAcIgKAFQgeASgdAFQgLACgKAAQgEABgEAEQgFAEgEAHQgKAPgDADQgcAUgpARIgHADIgJAEIhNAdIgLAEQgdALg8ApQg2AmgjALQgIgEAOgNg");
	this.shape.setTransform(-4.6,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAFFFF").s().p("AAAAAIAAAAIAAAAg");
	this.shape_1.setTransform(16.1,-17.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AlCDQQABgRAOgNQARgMAHgIQASg5AYgYQA0AGAogYQAZgPAigoQAkgqASgNIAMgHQAcgQAkAFQAkgsATgVIANgOQAjgjAlgTIAVgGIALgDIAKAEIAKgBQgcAHgtAUIAAAAIADAKIAAAAIAAAAIACAGQAhASAkBKQANgFAkgYIAMgHQAQgLANgGIgCASIggAVIgHAEQgmAZgeABIgpAZIgXAPQgWAMgWAFIgLADQgMADgMABQgHAEgFAQQgiAYgxAaIgaAMIgNAGIg2AXIhSAkQgSAIgnAgQgZASgWAAQgKAAgJgEgAkICBQgMAWgEATQgDAEgSAOQgOANAIADQAjgKA3gmQA7gpAdgLIALgFIBPgdIAIgDIAHgDQAogSAcgTQAEgDAJgRQAEgHAFgDQAEgDAFgBQAKgBAKgBQAegGAegRIAKgGQAvgcAJgDQgDgYgfgjQgZgdgEgHQggAJgfAgQgaAagZAoQgFAAgJgGQgIgEgJACQgSAGgTANQgOAJgNANQgSARghAlQhABFhPgHIgTAlg");
	this.shape_2.setTransform(-0.1,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6600").s().p("AhNgWIgCgGIgBAAIgCgKIAAAAQAtgUAcgHIAGAAIADABIAMgEQAMACALAGIABABQADADACgBIAHAHIAEABIAHAIQAPASAJAYQgCAEAAADIAAAIQgOAGgPALIgMAIQgkAYgMAEQgkhJghgSg");
	this.shape_3.setTransform(24.1,-14.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.MickLegR, new cjs.Rectangle(-32.4,-21.2,64.9,42.4), null);


(lib.MickLegL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("ACrBYIgLgGQgzgegUAAQgJgNgSgCIgLgBQgNgBgHgCQgVgHg7ghQgygdgjgEQgOgBglAEQgiAEgTgCQgogTgWADQBWgoApgWQAXADAkAYQAoAZAVAGQAhAJBDAHIAEAAQA3ALAaAeQASgCAVAAQA4ADBKAiQgJAggtAtQgggBgsgZg");
	this.shape.setTransform(-5.1,-1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6600").s().p("AgSA+IgGABQANgDAKgBIgNAFIgEgCgAgmAyQghgBgKgGQgDgIAWgWQAbgaAEgIQgBgJAGgKQAHgJAAgHQAVgJAXACQAWACAYAMQAHAUAEAVQgIANgLALQgcAbgiAPQgKgHgdgBg");
	this.shape_1.setTransform(28.2,7.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ADdCJIgBAAQgHgDgKgCIgYgHIAEgPQgcgMgegOQgtgXgwgdQgLgBgPgFQghgKg3gYQhHghg1ABQg5ACgcgFQgugIgUgcQBQgcA7ghQA5AYA7AiQA/ADAtANQAvANAdAZQAWAAAVACQBKAHA9AgQAJAAAKgIQARACARADQAVAEAWAHIACAHQgXgMgWgCQgXgCgWAJQgBAHgGAJQgGAKABAJQgEAIgcAbQgVAWADAIQAKAGAhABQAdABALAHIgDABQgKAAgNAEIgKAAQgPgGgRACgAi0g4QAjAEAyAdQA9AhAVAHQAHACAMABIALABQASACAJANQAUAAAzAeIAKAGQAtAZAfABQAugsAJghQhKghg5gDQgUgBgSADQgagfg3gKIgEgBQhDgHghgJQgVgFgogaQglgXgWgEQgpAWhWAoQAWgDAnATQAUADAigEQAcgEAPAAIAHAAg");
	this.shape_2.setTransform(-0.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.MickLegL, new cjs.Rectangle(-36.4,-14.1,72.8,28.3), null);


(lib.MickArmL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag5DiIgVgCIgDgFIgDAAIgHgFIgLgBIgCgEIgYAAIABgwQARgTAXgDQgHh9AxhDQgEgKABggIgBgBIAAgLIABAAIAEgCIAAAAIABgBIACAAIADgCIAAgDQAQgRAUgrIAFgNIACAAIAAgCIABgDIAHgMQAOgUAQgEIACABQgJANgUAVQgQAXAAAdQgQAIgNAZQgOAaAKAPQg/B4AUByQAFAGAFgGQAFgFAEAFQgJAdACASQANAQAKgBQgJgQgEgKQgGgSAPgOQAIAAAVAFQAQADAIgEQACgLgMgDIgUgFQgBgzAYg1QAihIAEgQQACgMgOgIQADgHANgJIAZgQIAKgJQAQgSgNgVIAvgvQAEAMgNAOIgWAYQAFASgOAWIgIAMIgBAAIgEACIgCAEIgOADIgFAFIgBABQgHABgDACQAGAsggBAQgfBBAEAqQAJAFAVAHQABAGgDAIIAAAEIg/gBIgBAFIAAABQACAFACABQAEADABAFIAKAIIAAAVIgaABgAhYDFQgDATAPAAQAEgngEgDQgJAEgDATgAhmC3QgEAOAHAIQgDgKAIgNQAHgLgEgFQgHAFgEAMgAh8CyQgKAXATAEQgGgRAPgSQANgQgGgDQgPAHgKAUg");
	this.shape.setTransform(-0.4,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("AhFDYQgCgSAKgcQgFgFgFAFQgFAFgEgFQgUhzA+h4QgKgOAOgaQANgZASgIQgBgdAQgXQAUgVAJgNIACABIAFAAIAFACQABADADABIAMABIADADIAIADIAIAJIABAAIAFABQADACACAFIAIADIACADIALAFIAFAAQAAABAAABQAAAAAAABQABAAAAABQAAAAABAAIAGABIAAAcIgEABIgBADIgDAHIgEACIgEANIgEABIgEAKIgEACIAAABQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBAAIgEAEIgCADIgLAMIgBABQgFAAABAFIgGADIAAgBIAJgLQAOgXgFgRIAVgYQAOgPgFgLIguAuQAMAVgQASIgKAJIgYAQQgOAKgCAHQANAIgBAMQgEAPghBJQgZA1ABAzIAUAEQALAEgBALQgIAEgQgEQgWgEgHAAQgQANAHATQAEAKAJAQIgCAAQgKAAgMgQgAhcDIQADgSAJgEQAEADgEAnQgPAAADgUgAhrC7QAEgMAHgFQAFAEgHAMQgIANADAKQgIgIAEgOgAiAC2QAKgVAPgGQAFADgNAPQgOATAGARQgTgEAKgXgAAAjDIAAgDIABgFQAHgMAHgKIAAgGIAPAAIACACQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAIACABQgPAFgOAUIgIAMQAAgFgBgBg");
	this.shape_1.setTransform(0,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.MickArmL, new cjs.Rectangle(-13.3,-23.3,26.6,46.6), null);


(lib.MichHead = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAFFFF").s().p("AgQAXQgGgGgGgnQAVAMAkAKQgPAXgaAAIgEAAg");
	this.shape.setTransform(2.7,6.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("AgkBcIgKgGIgFgCIgBgDQgIgDgHgFIgDgCIgRgJIADAAQgLgkAigWQggACgHgcIAHgHQADgCAGAFIAHAEQADAKAJACQABgFgEgSQgEgOAHgGQALAKAJgCIgBgUQAAgLAIAAIATAAQABAHgCAHQgBAFAGAEQAFgeAoAHQADgFgHgFQgFgEAGgCQANADAUAJQAUAJAMACQAFAZgJASQAZAZgWAqQgVAqgkAGQgQADgSgHIgegLQACAOAUAFgAgVATQADAbALAMQAaAFAVgPQAUgOAFgaQgeAEgVgMIghgaQgGATAEAagAAigaQAJAPATgFQASgGgDgTIgbgEQgDAIAJgBQAKgBgBAFQgDAKgHAAQgLgCgJAAIgBAAgAAAgmQALACAIgFIAAgQQgGACgDgFQgDgEgDAAQgKAKAGAQgABFg5QAAAIAEAEQAHABAIgFQACgSgRgCQgEAEAAAIg");
	this.shape_1.setTransform(1,4.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AhkAnQACAVgNgCQgKgSACgYQAKgBAJAJIAAgXQAUgHAXgVIAnghQAKALAZgLQAegMAHAEQAAABgGAEQgEADACAIQA1AFAVAVQgSAFgZgFQAOAQAVAQQgPACgBAFQgDAHgEAAQgjgYgmACQgCADAHAHQAFAFgHADQgfgBgdgHIAAASQABAMgFABQgEgBgFgHQgEgHgGAAQABAIgEAbIABALIgigfg");
	this.shape_2.setTransform(-0.2,-5.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AABCLQgTgFgCgOIAdALQATAHAQgDQAkgGAVgqQAWgrgZgZQAJgSgFgYQgMgCgUgJQgUgJgNgDQgGACAFAEQAHAFgCAFQgpgHgFAeQgGgEABgFQACgHAAgHIgUAAQgIAAAAALIABATQgJACgLgJQgHAGAEANQAEASgBAFQgJgCgDgKIgHgEQgFgFgEACIgHAHQAHAdAggCQghAWAKAkIgDAAIgLgHIgBgCQAHACgEgUQgEgXAMAAQgTgQAAgTQgPAAgKgWQgJgTADgcQAMgCACgIIABgYQAPgCAFAVIAtgpQAbgaAXgKQADAMgGALQADAAAjgMQAYgIASAIQABAMgUAEQAOAGAdAJQAXALAEAUIgXAAQgDAFALALQAOAMABAHIgNgJQgFARgBAZQgBAcAMALQgJBKg1AXIABAAgAhEATIAAgLQADgagBgIQAGAAAEAHQAFAHAEABQAFgBgBgMIAAgSQAdAIAgAAQAGgDgFgFQgHgHACgEQAmgCAjAZQAFAAACgHQACgFAPgCQgWgRgOgQQAZAFASgFQgVgUg1gGQgCgIAEgDQAGgDAAgCQgHgEgdAMQgaALgKgLIgnAhQgXAVgTAIIAAAXQgKgJgJABQgDAYAKARQANACgBgUIAhAeIAAAAgAACBoQgJgMgEgbQgEgbAHgTIAgAaQAWANAdgEQgFAagUAOQgQALgTAAIgNgBgAAKBdQAfACAPgaQglgLgUgMQAFApAGAGgAAsATQAKgBALADQAHAAADgKQABgFgKABQgJABADgIIAbAEQADATgSAGIgJABQgMAAgHgLgAAKAHQgHgPALgKQADAAADAEQADAFAGgCIAAAPQgGAEgHAAIgGgBgABTAAQgEgDAAgIQAAgIAEgEQARACgCASQgHADgGAAIgCAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.MichHead, new cjs.Rectangle(-12.9,-13.9,25.9,27.9), null);


(lib.MichArmRt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DE7710").s().p("AATAKIAAgCIgBgIIAAgDIAAAAIADAOgAgUgHIACgDIAAADIABAAIgDAAg");
	this.shape.setTransform(0.5,20.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#AE5C0D","#F2AD48"],[0,1],-12.3,17.3,-13.1,0.5).s().p("AgnAEIgBAAIgDgCIgGgDIAAgDQAMAFAFALIALAAIgCABIgPABgAAsgNIAGABIAAAJIgCABIgEABIAAgMg");
	this.shape_1.setTransform(0.5,21.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAqDlIgKgBIgFgFIAAgFIgBgCIgEgPIAAgBIgBgHIgEgDIgQgCIgFgDIgKACIAAAGIgCAEIAEAAIAAAAIADAKQABAIgCAIIgDAAQAAADgEABIgKAAQgFgLgMgGIAAgIIgDgHQgDABgDgBQgDgBABgGIgBAAIgEgCIACgBQgSgOgDgVQABgggDgaQgEgoAJg2QAKg4AAgVIAegZIASgIIABgDIAGgCQgIAIgMAJQgYASgDAVQgBAKAFAcQgCASgRAgQgKA4APA4QAPA5AhAYQADgFgGgPQgFgOAIgJQA0AGAFAlQAHgWgXgRQgdgPgMgIQgHghAchAQAbg7gRgoQAVgiAKgSQARgjgKghQAPgWAGgLQAJgUgHgQIgCgEIAKAFIACAJQAGAjgbAYQAOA3g1A9QASAqgaA/IgTAuQgJAZACARQAGAEAVAOQATAKAIAKIAMACIAAACIABAJIgGgBIAAAMIgBACIgCARgAgCiGIACAAIgCAFIAAgFg");
	this.shape_2.setTransform(0,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC99").s().p("AgSC7QgJAJAFAOQAHAPgDAFQghgYgPg5QgPg4AJg4QARghACgRQgFgcACgKQACgVAYgSQANgJAHgIIAJgDIAAgJIACgFIgCABIABgaQAAgeAGgWIAIgMQAHgLAJgFQARAAANAEIALAEIADAEQAGAQgJAUQgFALgPAWQAJAhgRAjQgJASgWAiQASAogbA7QgcBAAHAhQAMAIAcAQQAYAQgHAWQgGglgzgGg");
	this.shape_3.setTransform(-0.1,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.MichArmRt, new cjs.Rectangle(-8.3,-23.6,16.7,47.2), null);


(lib.HeadChest = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0C45B").s().p("AgrBQQgFgFAAgRIAAgJIAAgLQAKALASAFQAVAGANgLIAGALQgEAAgTALQgTAKgNAAIgIgBgAgLAwQgbgEgGgOQACgDAAgDIgBgCIgCgBIAAAAQAAhKAqgaQAlgFAJAeQgDgCgIABQgIACgCAFQADAEAIgEQAIgEAFAEQAGAVgEAYQgFAWgMANQgVAAgZgVQAAANANAHQALAHAKgDQgBAOgTAAIgKgBgAAUAKQARgFgDgLIgKgHQgGgEgEgBQgBAHAHADQAIAEAAAEIgNAEQgHACgGgEQABANARgFgAgIgbQgDAFABAHQAJACADgLQADgLgIgBIgFAJgAAZgPQAIABADgHQADgHgFgFIgBAAQgIAAAAASgAgGg5QgBAEgGADQgHADACAFQAHgFAIgBIALAAIgGgGQgDgDgFAAIAAAAg");
	this.shape.setTransform(5.3,-10.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#982E01").s().p("ABrBXQgOAFgKAAIgPgWIgEgDIAAgBIAEgCQABgLALAAQAFgGACgGQAFgOACACIgBgKQgBgDAFgHQgDgvACgGQgGgMgegGQgdgGACgVQASgFAOADQARABAIAHIAJAKQAMANACAJIAAABQALARAAALIAAAjQASAeAAAFQAAADgOATIACAOQABAJgJAAQgIgGgHAAgAhRBUQgEgDgKAAQgLABgBgGIgCgLQgHgHgXACIgBgCIALgPQAAgHgMgIQAAgDAJgIQAIgHAAgKQABgRANgLQANgKgBgCIACgPQACgCALgDQAFgBADgDIAFgHIACgDQAFgEAEABIAJgBIAFABIACgCQAWgNAWACQAZADAMAaQgWAFgKAYQgHASgGAoIgDAYIgBABIgEgBQgSAAgCAWQgOAAgGAJIgKAFIgDAAIAAABIgFADQgEgBgEgFg");
	this.shape_1.setTransform(1,-12.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AgnAkIABgBQgFgBgFgDIgCgBIAAAAQgTgKgDgLQAHgJAEgLIAAAAQAPAAAAgJQADgFAIAAQAHAAAEgFIADgKQADgEACgBIABAAIABAAIAEABIAAAMQgCASAFAIIAAACQAeATAnglIAEgEIACAFIAAAAQAPAjgiAUQgRALgYABIgDAAQgWAAgWgKg");
	this.shape_2.setTransform(0.7,-2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AiDDgIgCgBIAAgBIADgBIAEgCIgBAEIADgBIgCACgAhPAEIACgUQAFgHADgJIgDADQgEAAgMgJQgDgCgPABIgFgGQgDgFABgGQgCgDgWAAQgKAAADgIQAAgHAKgIQAAgDgMgMQAAgEALgJQAKgKgDgHQgEgLASgTQACgCAFgBQAEgDABgGQABgNACgCQADgDATgIQADgEABgGQADgDAPAAIAFAAQAhgXAsANQAIgGArABIAEAFIAAAAQAZAVAHAOQAPAgAAADIAAAkQASAeAAAFQgMATgCAHIACAPQAAAKgNgBQgIAAgDgCQgDgEgCAAQgQAGgGAAQgGAAgGgFQADALAAAKQgBAagVAKQgHABgUAHIgEAAQgvAAg2gdgAgyALQAFADAFABIgBACQAXAKAYgBQAYgBARgKQAigUgPgjIAAgBIgCgEIgEADQgnAmgegUIgBgCQgEgIACgRIAAgNIgEAAIgBAAIgBAAQgCABgDADIgDAKQgEAGgHgBQgIABgDAFQAAAIgPAAIAAAAQgEAMgHAKQACAJAUALIAAgBIACABgAgFg5IAAAJQAAAQAFAFQAPAEAYgNQAUgKAEAAIgGgLQgNALgVgGQgSgGgJgKIgBALgAB6ggQAJAAgBgJIgBgOQANgTAAgDQAAgFgSgeIAAgjQAAgLgLgSIAAgBQgCgIgMgNIgIgLQgJgHgRAAQgOgEgSAFQgCAVAdAGQAeAGAGAMQgCAGADAwQgFAHABADIABAKQgCgCgFAPQgCAFgFAGQgLAAgBAMIgEABIAAABIgBABIACgBIADADIAQAXQAJAAAOgGQAIAAAHAGgAhQgoQAEAEADACIAFgEIABgBIACAAIAKgEQAGgJAPAAQABgWATAAIADAAIABgBIADgYQAGgpAHgRQALgZAVgFQgMgagZgDQgVgCgXAOIgCABIgFgBIgJABQgEgBgEAEIgDADIgFAHQgDADgFACQgKADgDACIgBAOQAAACgNAKQgNALAAATQAAAJgJAHQgJAJAAADQAMAHAAAHIgKAQIAAABQAYgBAGAGIACALQABAGAMAAIACgBQAHAAAFAEgAAAhSQAAACgBAEQAGAOAaAEQAeAEACgSQgKAEgMgHQgOgIAAgNQAaAWAWgBQALgMAFgXQAEgZgFgUQgFgFgIAEQgIAEgDgDQABgFAJgCQAIgCADADQgKgfglAGQgqAZAABMIAAAAIACABIAAgBIAAADgAAthpQAGAEAHgCIANgEQAAgFgHgDQgIgEABgHQAEABAHAEIAKAIQACALgQAFIgJACQgJAAgBgKgAAhh6QgBgHACgGIAFgIQAKAAgEAMQgDAJgGAAIgDAAgABFh6QAAgUAJACQAFAFgEAHQgCAGgHAAIgBAAgAAdidQAHgDAAgEQAFAAAEADIAGAGIgMAAQgHABgIAFQgBgGAGgCg");
	this.shape_3.setTransform(0.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.HeadChest, new cjs.Rectangle(-13.8,-22.4,29.5,44.9), null);


(lib.Copyright = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAcAIIgDgLIgFAKQgDAJgEAAQAAAAAAAAQgBgBAAAAQgBAAAAgBQAAgBgBAAIgBgJIgCgHQgGATgDAAIgDgBIgBgDIABgCQAEgEABgHIADgMQAAgBABAAQAAAAAAgBQABAAAAAAQABAAABAAQADAAACAIIADALIADgGIACgJQADgFACAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABIADAKIACAHIADAIIAAABIAAADIgCABQgEAAgCgJgAgUANIAAgIIgBgGIgBgHIgFAAIgGgBQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAAAIAGAAIAEAAIAPAAIADAAIAEAAQAAAAABAAQAAAAAAABQABAAAAABQAAAAAAABQAAABAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIgOABIAAAHIAAAHIABAEIABADIgBADIgDAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAgBg");
	this.shape.setTransform(58,-6.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgLAYQgHgCAAgEIABgDQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAIAEACIAEACIAGABIAFgBQAEgCAAgCQAAgGgIgCIgEgCIgIgCQgDgCgBgFQAAgJAJgEIAHgDIAJgDIADAAIAEABIABADIAAAEIABADIgBAEIgDABQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBIgBgEIgKADQgGACAAAFIACAAQAKACAEADQAIAEAAAJQAAAHgHADQgFADgGAAQgGAAgFgCg");
	this.shape_1.setTransform(51.7,-3.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgMATQgGgGAAgJQAAgIAGgJQAHgLAHAAQAEAAAGACQAGADAAADIgBADQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAgBAAIgCgBIgBgCQgDgCgGAAQgDAAgFAIQgEAIAAAEQAAAGAEADQAEADAFAAIAFgBIAFgDIACgBIADACIABADQAAADgHADQgFADgEAAQgIAAgHgGg");
	this.shape_2.setTransform(47.4,-3.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgDAgQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAIAAgIIAAgIIABgKIAAgJQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAIADgBIACABQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABIgBAJIAAAKIAAAIIAAAIQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAIgCABIgDgBgAgCgXQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_3.setTransform(43.9,-4.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AALAWIgBgKIgBgKIAAgDIAAgEQAAgKgDAAQgFAAgEAGQgEAFgCAIIAAAEIgBAFIABADIAAAEIgBAEIgDABIgEgBIgBgEIAAgEIAAgDIAAgNIABgMIAAgEIAAgEIABgEIADgBQAEAAAAAGIABAGQAHgLAHAAQAHABADAFQABAFABAIIAAAEIAAADIABAKIAAAKIgBADIgDAAQgEAAAAgDg");
	this.shape_4.setTransform(40.3,-3.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAOAXIgDgEIgHAEIgFABQgKAAgFgGQgEgGAAgLQAAgJAHgIQAIgIAJABQAEAAAEACQAGACAAADIgBADIAAAFIgBAJIABAIIADAIIABACIAAACIgBADIgDAAIgDgBgAgGgKQgFAFAAAHQAAAHACAEQADADAFAAQADAAADgBIAEgDIgBgRIAAgEIABgFIgDgBIgCgBQgFAAgFAGg");
	this.shape_5.setTransform(35.5,-3.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAMAhIgCgKIgBgKIABgEIAAgEQAAgHgFAAQgFAAgEAFIgGAKQAAAQgCADQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBIgBgCIABgCIAAgGIAAgHIAAgfIABgHIgBgFIAAgEQAAgBAAAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAAAgBQAAAAABAAQAAAAABAAQAAgBABAAQADAAAAAFIABAHIAAAKIAAAKIAAADQADgEAEgDQAEgCAEgBQAIAAACAGQACACABAIIAAAIIABAJIABAJIABABQAAABgBAAQAAABAAAAQAAABAAAAQgBAAAAAAIgDABQgDAAgBgDg");
	this.shape_6.setTransform(30.7,-4.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMATQgGgGAAgJQAAgIAGgJQAHgLAHAAQAEAAAGACQAGADAAADIgBADQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAgBAAIgCgBIgBgCQgDgCgGAAQgDAAgFAIQgEAIAAAEQAAAGAEADQAEADAFAAIAFgBIAFgDIACgBIADACIABADQAAADgGADQgGADgEAAQgIAAgHgGg");
	this.shape_7.setTransform(25.8,-3.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgOATQgHgFAAgLQAAgKAGgIQAGgIAJAAQAHAAAFACQAFAEAAAGQAAAEgFAEIgJAEIgQAIQADAEADABQAEACAEAAIAHgBQAFgBACgDQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIADABIABACQAAAFgIAEQgHADgGAAQgJAAgGgFgAgIgLQgEAEgCAIIAOgGQAHgDADgEQgDgDgHAAQgFAAgDAEg");
	this.shape_8.setTransform(21,-3.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAbAhIgCgHIgCgHIgGgfIgJAaIgCAIIgEAIQgBAEgCAAQgDAAgCgDIgBgEIgCgGIgIggIgBAIIgGAXIgCALQgBAEgDAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBIgBgDQAAgHAEgLIAEgRIADgOQACgJACgDQABgDADAAQADAAACADQACAEABANQADAOAEAPQAGgPAEgTIACgGIACgGQACgEADABQAEgBACAIIACALQACASAEAOIACAHIABAIQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAAAIgDACQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_9.setTransform(14.6,-4.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgQAUIAAgeIAAgEIAAgEQAAgFAEAAQAEAAAAAIQAIgJAKAAQAEAAABADQACADAAAFIAAADQAAAGgEAAQgEAAAAgFIAAgDIAAgDQgHAAgEAEQgDACgDAGIAAAXQAAAFgEAAQgEAAAAgFg");
	this.shape_10.setTransform(5.8,-3.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAOAXIgDgEIgHAEIgFABQgKAAgFgGQgEgGAAgLQAAgJAHgIQAIgIAJABQAEAAAEACQAGACAAADIgBADIAAAFIgBAJIABAIIADAIIABACIAAACIgBADIgDAAIgDgBgAgGgKQgFAFAAAHQAAAHACAEQADADAFAAQADAAADgBIAEgDIgBgRIAAgEIABgFIgDgBIgCgBQgFAAgFAGg");
	this.shape_11.setTransform(1.2,-3.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgCAaQAAgBAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAIgBgQIgBgPQAAgEgBgDQgEABgDAEIgFAFIgCADIgBAHIAAAIIAAADIABAEQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAIgCABQgGAAAAgLIABgIIAAgHIAAgHIgBgHQABgKAEAAIADABQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABIAAACIAAADIAAAFQADgFAEgEQAEgEAEAAQAGAAACAHQACgDADgCQAEgBAEAAQAIAAACAIIACAMIAEAYIgCADIgDABQgDAAgBgDIgCgOIgBgNIgCgGQAAgBgBgBQAAAAAAgBQgBAAAAgBQgBAAAAAAIgGADIgFAEIAAAIIABALIAAAMIAAADIgDABQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_12.setTransform(-4.5,-3.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgCAaQAAgBAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAIgBgQIgBgPQAAgEgBgDQgEABgDAEIgFAFIgCADIgBAHIAAAIIAAADIABAEQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAIgCABQgFAAgBgLIABgIIAAgHIAAgHIgBgHQAAgKAFAAIADABQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABIAAACIAAADIAAAFQACgFAFgEQAFgEADAAQAGAAACAHQADgDADgCQADgBAEAAQAHAAAEAIIABAMIADAYIgBADIgDABQgDAAgCgDIgBgOIgBgNIgCgGQAAgBgBgBQAAAAAAgBQgBAAAAgBQgBAAAAAAIgGADIgGAEIAAAIIACALIAAAMIgBADIgCABQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_13.setTransform(-11.5,-3.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAOAXIgDgEIgHAEIgFABQgKAAgFgGQgEgGAAgLQAAgJAHgIQAIgIAJABQAEAAAEACQAGACAAADIgBADIAAAFIgBAJIABAIIADAIIABACIAAACIgBADIgDAAIgDgBgAgGgKQgFAFAAAHQAAAHACAEQADADAFAAQADAAADgBIAEgDIgBgRIAAgEIABgFIgDgBIgCgBQgFAAgFAGg");
	this.shape_14.setTransform(-17.4,-3.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgQAUIAAgeIAAgEIAAgEQAAgFAEAAQAEAAAAAIQAIgJAKAAQAEAAABADQACADAAAFIAAADQAAAGgEAAQgEAAAAgFIAAgDIAAgDQgHAAgEAEQgDACgDAGIAAAXQAAAFgEAAQgEAAAAgFg");
	this.shape_15.setTransform(-21.7,-3.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgVAeQgGgGAAgMQAAgMAGgLQAEgMAJgHQAGgFAFAAQAEAAAHADQAHADAAAEIgBADIgDABIgCgBQgIgEgEAAQgDAAgDAEIgFAGQgKANAAAPQAAAIACADQADAEAHAAQAHAAAHgFQAFgFADgKQgMAAgIAFIgCAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAAAIgBgEQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQAIgFAYAAIADABIABADQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgDAOgJAIQgJAIgLAAQgKAAgFgGg");
	this.shape_16.setTransform(-26.9,-4.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgOAfQgHgFAAgJQAAgOAKgEQgIgFAAgJQAAgIAGgFQAGgGAHAAQATAAAAASQAAAGgCADIgHAEQAHADACAEQADAEAAAIQAAAJgGAFQgHAFgJAAQgJAAgFgEgAgJAGQgEAEABAHQAAAFAFADQADACAEAAQAHAAAEgEQACgDAAgGQAAgFgEgEQgDgCgGgCIgJAFgAgIgXQgCADAAAFQAAAHAKACIAHgDQADgCAAgFQAAgGgDgCQgCgCgFAAQgFAAgDADg");
	this.shape_17.setTransform(-35.6,-4.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgTAXQgFgKAAgNQAAgNAGgKQAIgLALAAQAMAAAGAKQAGAIAAANQAAASgHALQgGAJgMAAQgNAAgGgMgAgLgRQgEAHAAAJQAAAOAEAGQAEAIAHAAQAJAAAEgLQADgHAAgKQAAgNgEgFQgEgHgHAAQgHABgFAIg");
	this.shape_18.setTransform(-41.1,-4.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgTAXQgFgKAAgNQAAgNAGgKQAIgLALAAQAMAAAGAKQAGAIAAANQAAASgHALQgGAJgMAAQgNAAgGgMgAgLgRQgEAHAAAJQAAAOAEAGQAEAIAHAAQAJAAAEgLQADgHAAgKQAAgNgEgFQgEgHgHAAQgHABgFAIg");
	this.shape_19.setTransform(-46.6,-4.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AANAhIgDgBIgGABIgGAAIgFAAIgFABIgCAAIgBAAQgDAAgBgDIgBgGQAAgKAGgGQADgDALgHIAHgGQAEgFAAgFQAAgDgEgCQgDgCgDAAQgDAAgEACIgGAFIgDABQgEAAAAgDQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQAFgFAEgCQAFgDAFAAQAHAAAGAEQAGAEAAAHIgBAJIgEAGQgDADgIAFQgIAFgCADQgFAFAAAHIAJAAIAMgBIAHABQAEACAAACQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgCABIgEgBg");
	this.shape_20.setTransform(-52,-4.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgfABQABgLAKgKQAMgJAMAAQANAAAHAIQAIAIgBAMQABAKgKAKQgJALgMAAIgBAAQgfAAAAgdgAgOgPQgJAHAAAJQAAALAHAFQAFAFAMAAQAJAAAHgJQAGgHAAgIQAAgJgDgFQgFgFgJAAIgCAAQgLAAgHAGgAgLAJQgFgEAAgFQAAgHAHgFQAGgEAGAAQABAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQABABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAABAAABQAAAAgBABQAAAAgBAAQgBAAgBAAIgBAAIgCAAQgDAAgEACQgFADABADQAAAAAAABQAAAAAAABQABAAAAABQABAAABAAIAEACQADAAADgDIAFgCIACABIABADQAAADgEADQgFADgFAAQgFAAgFgEg");
	this.shape_21.setTransform(-58.4,-5.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64,-13.1,128.1,16.6);


(lib.Chest = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgaB4IgSgCIgFAAQgLgBgIgDIgKgDIhmgnIAEABIAAAAIAFgFIAAADIgFACIB3AeIAFgCIgBACIgBAAIABABIACABIADABQAnAPArgaIAkgYQARgNALgEIAAAFQgDAGgGAGIgGABIgBAEIgSAIIgXAUIgHAFIAAgCQgNAPgbAAIgUgCgACrgrQgFgFgLgGQgMgGAAgNIgwgDIgIgBIA8AAQAaANAIAaIgKgFgAhZgtIAFgBIgCACIgDgBgAhwhSQgEAAgCgDQgCgEgEgDQARgRAsgIQAxgHAJAGIACABIABACIALAHQhGgIgrAUQgGABADAEQAFAHgCADIgIABg");
	this.shape.setTransform(-0.2,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("AgtBqIgDgBIgCgBIgBgBIABAAIABgCIgFACIh3geIAFgCIABgDIgFAFQAjhTAcgrIAAgbIAIgBQACgDgFgHQgDgEAGgBQArgUBGAIIAQAJIADACQAHAFAIADIACADIAFACIAJAGIAcABIAIABIAwADQAAANANAGQAKAGAFAFIgLgEQgOgEgQABQgJAFgHALIgIALQgHAXgBAcIAAAaQgLAEgRANIgkAYQgcAQgZAAQgPAAgOgFgAgDArIADgBIAAgBIgDACgAhVgtIACABIACgCIgEABgABlA7IAAAJIgJADQAGgHADgFg");
	this.shape_1.setTransform(-0.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Chest, new cjs.Rectangle(-18.2,-12.2,36.2,24.4), null);


(lib.CarmenTorso = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0C45B").s().p("AgNBbQgLgCgKgDQgQgFgOgKIgIgHQACgCADgFIAGgSIAMgcIAEg4IAAgDQABgIAGgLIACgDIAFgIQAIgHAIgDQAegMAmAtIAUALQgOAKgKAdQgJAdAAAUQgBAVgBALIgOAKQgKAFgNAAIgCAAIgMAAgAALBVQgDgHgGgCIABAAIgHAAQgCAAAAAEQgBAEAGgCQAGgCAGAFIAAAAg");
	this.shape.setTransform(0,-2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AgVAkIAAgDQg5AMAYhQQAJAHAEABIAAAAIAGADIAZAJIAUAGQAcAGATgKIAFgBIgHAHIgFAhIgGAFIgNAFg");
	this.shape_1.setTransform(-2.4,8.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgMBeIgUgGIgagKIgGgCIAAAAQgEgBgJgIIAAgNIAAgCIACgEIALgVIABgBQAIgVAAgLIAAgCQAAgKAEgUQALg2AOgCQAPgDgCAFIAAABQgIADgIAHIgFAHIgCAEQgHALAAAIIAAADIgFA4IgLAcIgHASQgCAFgCACIAIAHQAOAKAPAFQAKADALABIAOABQAOAAAKgFIANgKQACgLAAgVQAAgUAKgdQAJgeAPgJQgDgEAGACIgIAMQgHALgFATQgGASgCAXQgCAYgFAaIgEAEIgEACQgMAGgQAAQgIAAgLgCgAAABPQgGACABgEQABgEACgBIAGABIAAAAQAGACACAHQgFgFgHACg");
	this.shape_2.setTransform(-0.2,-2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.CarmenTorso, new cjs.Rectangle(-8.6,-11.8,16.3,23.6), null);


(lib.CarmenLegR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC66").s().p("AANEAIgHgWIgVhAIALgUIAOgZQAAghgZg7QgZg4AEgkQAAgGAHgMIAAgBQAHgNABgHIAAgCIAAgDQAAgSgKgdQgNgngCgQIACgdQACgRgGgLIACAAQANABAPADQAJADAJACQAbAIATgFQAFAfgLA1IgJAyQgDAWAAALQAAAKADAPIAGAgIACCPIABAXIADA7IADAnIADAYIgGABQgKAAgUgHgAgDhCIABABQADAIAJABIAAgGQgCgOgJgHQgEAJACAIg");
	this.shape.setTransform(-0.3,6.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAAE5IgGgWQgJgggCgQQgCgOACgMQAEgTAQgNQgCgYgKgiIgVg4QgTg2AOgmIADgHQACgDABgFQACgNgHgUIgLg0IgCgKIAAgFIgCgXQgCglABgGIgIgBIABAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAgCAIgGIABgIIgEgoQAAgTAKggIAGgPIAKgCQgSAgAAAkIAEAoQAAAJgCADQAlADAFAEIAhADIAMABIAFAAIACgBIAAgHIAAgBQAAgPACgGQACgGADAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAIAAAIIgCAOIAAADIABAHIgBACIABAAIgBAGIABAFIgCABQABAXgIBHIgEAjQgDAnADAWIAAAAQAEAlAABzIgDAFIgCBjIgDg7IgBgYIgBiQIgHgfQgDgOAAgKQAAgMAEgVIAJgyQAKg1gFgfQgTAFgagIQgKgCgIgDQgPgEgNAAIgDAAQAGALgBARIgCAdQACAPANAoQAKAdgBASIAAADIAAACQgBAHgGAMIgBACQgGALgBAGQgEAkAZA4QAaA8AAAhIgPAZIgLATIAVBBIAIAWQAbAKAJgEIgDgZIgEgmIAEAGQAEAfAJAeIgIAFQgmgFgPgNgAgBgFIAAgBQgDgIAEgJQAKAHABAOIABAFQgKgBgDgHg");
	this.shape_1.setTransform(-0.5,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AAzBEIAAgDIAAgHIAAgCIACgPIgBALIgBAQgAAkBDIgNAAIgggEQgGgEgkgCQABgDAAgJIgDgpQAAgiASggIAcgEIANgBQAPgBAdAPQgIAFAFAEQAIAXgBAbIgBAWIAAAGQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgDAAgCAFQgCAHAAAPIAAABIAAAGIgDACIgEgBg");
	this.shape_2.setTransform(0.2,-26.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.CarmenLegR, new cjs.Rectangle(-6.5,-33.3,12.2,66.6), null);


(lib.CarmenLegL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC66").s().p("AANEAIgHgWIgVhAIALgUIAOgZQAAghgZg7QgZg4AEgkQAAgGAHgMIAAgBQAHgNABgHIAAgCIAAgDQAAgSgKgdQgNgngCgQIACgdQACgRgGgLIACAAQANABAPADQAJADAJACQAbAIATgFQAFAfgLA1IgJAyQgDAWAAALQAAAKADAPIAGAgIACCPIABAXIADA7IADAnIADAYIgGABQgKAAgUgHgAgDhCIABABQADAIAJABIAAgGQgCgOgJgHQgEAJACAIg");
	this.shape.setTransform(0,6.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AApBBIgNgBIgggDQgGgEgkgDQABgDAAgJIgDgoQAAgfAPgeQAKACALAAIALABIABAAQAKgDAcgFIAAAAQAEAFADAKIACALIAAAaIABAUIAAAEIABAbIAAAAIgBARIAAABIAAAHIgDABIgEAAg");
	this.shape_1.setTransform(0,-26.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgBE6IgGgWQgJgggDgQQgCgOADgMQAEgTAPgNQgBgYgLghIgVg5QgSg2AOglIADgHQACgEABgFQACgNgHgUIgLg0IgCgKIAAgFIgCgXQgCgkAAgHIgHAAIAAgBQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgCAIgGIAAgIIgDgoQAAgTAJggIAGgNIAIACQgPAeAAAgIADAoQAAAJgBADQAkADAGAEIAgADIANABIAEAAIACgBIABgHIAAgBIABgRIAAAAIgBgbIAAgEIgBgVIAAgaIgDgLQgDgKgDgFIAAAAQAAgEAFABQAFABADASIADAbIACAuQAAALgCAEIAAAWIABABIAAADIACAIIAAADIgCABQABAYgJBGIgDAjQgEAnADAWIAAAAQAFAmgBBzIAAAIIABAkQABA7AIAnIAEASIABgCIAAAKIgDACIgHAFQgngFgOgNgAgwjJQAGAMgCAQIgCAdQACAQANAnQAKAeAAARIAAADIgBACQAAAHgHANIAAABQgHAMAAAFQgEAkAZA5QAZA7AAAhIgOAZIgMAUIAWBAIAHAWQAcAKAIgEIgDgYIgDgnIgEg7IAAgXIgCiQIgGggQgDgOAAgKQAAgLADgWIAJgyQAKg0gEggQgTAFgbgIQgJgCgJgDQgPgDgNgBIgCAAgAgCgEIgBgBQgCgIAEgJQAJAHACAOIAAAFQgJAAgDgIg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.CarmenLegL, new cjs.Rectangle(-6.2,-33.1,12.5,66.4), null);


(lib.CarmenBod = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0C45B").s().p("AgNEAIgHgWIgWhAIALgUIAPgZQAAghgag7QgZg4AEgkQABgGAGgMIABgBQAGgNABgHIAAgCIAAgDQAAgSgKgdQgNgngBgQIABgdQACgRgGgLIACAAQANABAPADQAJADALACQAZAIATgFQAFAfgLA1IgJAyQgDAWAAALQAAAKADAPIAGAgIACCPIABAXQACA1AEAtIADAYIgGABQgKAAgTgHgAgdhCIAAABQAEAIAJABIAAgGQgCgOgKgHQgEAJADAIgAAeDuQgIgngBg7IAAgkQAAh5gFgnIAAAAQgCgXADgnIAEgjQAIhHgBgXQAGgEAQgBQARgCAGgCQAIAfgMAvQgGAXgMAlIgFAOQAJATABAdQAAAXgEAeIgPBuIADAkIAFAqQAEAfgHAWQgDAKgFAIIgEgSg");
	this.shape.setTransform(-1.6,12.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3A3839").s().p("AABAAIAAABIgBAAIABgBg");
	this.shape_1.setTransform(4.9,3.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AAYBQIAAgCIAAgHIgBgDIADgSIAAgBQgBgFgDAAQgDAAgBAGQgDAHAAAOIAAABIAAAHIgCABIgFAAIgLgBIgigDQgFgEglgDQACgDAAgJIgEgoQAAgkAUggQABgFAIgNIAGgIIAAAAQAKgGAgAAQAcAAAZALQARAJADAIIADAIIgBAAIAAACIABAEIAAACQADAKADAQIABAHIADAjQgCAHAAAOIgFAYIAAAAIAAABQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAIAAABQgGgBgcAEIgGABQgHAAgCgEgABFBLIgBgBIgBAAIACABg");
	this.shape_2.setTransform(-1,-21.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgfFOIgHgWQgIgggDgQQgCgOADgMQAEgTAQgNQgBgYgMghIgVg5QgSg2AOgmIACgGQADgEAAgFQADgNgHgUIgLg0IgDgKIAAgFIgCgXQgCglABgGIgIgBIABAAQgBAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAgCAIgGIABgIIgEgoQAAgTAKggQADgJAJgQIAIgNQgBgLAIAAIAAABQADgDAGgCIAHgEQAEgCAdAAIAcABQAIABASAKQAYAPAAABQAKAhAAAFIAAAFIADAOQAFAYgFAXIAAAAQAAAQgDAIQABARgEAEQgBBEgaBGIgFANQAIAUABAaQABAagEAhQgPBlAAALQgBAMACAUQADAYAFAiQABAUgFAPQgHAWgTALQgmgFgPgNgAhPi1QAHALgCARIgCAdQACAQANAnQAKAdgBASIAAADIAAACQAAAHgHAMIgBABQgGAMgBAGQgEAkAZA5QAbA7AAAhIgQAZIgLATIAWBBIAIAWQAbAKAIgEIgDgYQgFgtgCg1IgBgYIgBiQIgHgfQgBgPgBgJQAAgMADgVIAJgyQAKg1gFgfQgRAFgbgIQgLgCgIgDQgPgEgNAAIgDAAgAAuirQgQABgGAEQABAXgIBHIgEAjQgDAmADAXIAAAAQAFAngBB6IAAAkQACA7AHAnIAEASQAFgIADgKQAHgWgDgfIgFgqIgEgkIAQhvQAEgegBgXQgBgcgIgTIAEgOQANgmAFgWQAMgvgIgfQgFACgSACgAAcjRIAAABIgDASIABADIAAAHIAAACQADAFAMgCQAcgEAGABIAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBIAAgBIAAAAIAFgYQAAgPACgGIgDgkIgBgHQgDgQgDgKIAAgCIgBgEIAAgCIABAAIgDgIQgDgIgRgJQgZgLgcAAQggAAgKAGIAAAAIgGAIQgIAMgBAGQgUAgAAAlIAEAoQAAAJgCADQAlADAFAEIAiADIALABIAFAAIACgBIAAgHIAAgBQAAgPADgGQABgGADAAQADAAABAFgAggAPIgBgBQgDgIAFgIQAKAGACAOIAAAGQgKgBgDgIgABFi4IABAAIABABIgCgBg");
	this.shape_3.setTransform(-1.2,4.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.CarmenBod, new cjs.Rectangle(-10.5,-30.5,18.5,70.4), null);


(lib.CarmenArmR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0C45B").s().p("AgXCOQAMgggGg1IgBgDIgGhAIgBgMQgBgTABgJQACgugCgIIgBgBQgBgHAPgZIgBgDQAEgBAFAAQAOACAFAFQAFAFAEAMQAEALgCANIgDASQgDAWgKAmQALAPADAVQABAPgDASQgJBIAAAIIALAGIgCACg");
	this.shape.setTransform(0.1,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgfCQQAMgRgDghIgHg0QgDgXACgPIAAhnQACgHACADIAAABQACAIgCAuQAAAJABASIAAANIAHBAIAAADQAGA1gMAggAAMCIQAAgIAKhIQACgSgBgPQgCgWgMgOQAKgmADgWIADgSQADgNgFgLQgEgMgFgFQgEgGgPgBQgFAAgEABIABADIAAgBIgBgBQgFAAABgDIAZgDQAYAMABAcIgBAUIAAAHQgCASgDASIAAAAQgIARAAAKQAJAMADATQABARgDAXQgIBAABAKIAHAHIgFADIgLgGg");
	this.shape_1.setTransform(0.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.CarmenArmR, new cjs.Rectangle(-3,-14.4,6.4,28.8), null);


(lib.CarmenArmL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0C45B").s().p("Ag4CmIACgHQACgLAAgSIAAggQgBgZADgSQACgPAFgJIAFgHQgKgOAHgdQALghABgKIACgrQABgWAJgMQAIgMAOgGQAJgEASgCIAIAAQABAAABAAQABAAAAAAQABAAAAgBQAAAAAAAAQAJABACAJQAEAQgGATQgGATgGAKIgJAMQgFAGgGAEQgBgFACgEQACgDgDgDIgIA0QgEAfgLALQACAJABAKIABAJIAAAOIAAAEQgCAPgEAQIgKAgQgHAagCALIAAADIAAAAIABACIgMAAIgFAEg");
	this.shape.setTransform(0.9,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag2CoIABgGIACgcIABgjQAAgYACgSQACgNADgKQADgIADgGQgHgRAGgdQAHgbACgPQACgCABgFIgCgNIAAgOQAMg4AlgHQAbgFADAFIABADQAAABgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgIgBQgTADgJAEQgNAGgIAMQgJAMgCAWIgBArQgCAKgKAgQgIAeAKANIgFAIQgEAJgDAPQgCASABAZIAAAfQgBATgCALIgBAGgAgPCgQABgLAIgaIAIghQAFgQACgOIABgEIAAgOIgBgJQgCgKgDgJQAMgLAEgfIAIg0QADADgCADQgCAEABAFQAHgEAEgGIAJgMIAGgGQAGAEgaAhQgEAVgJAZIgKAbQgBACACAKIADASIgBAMIAAADIAAAJIgBAAQgBARgLAdIgBAEQgHAVgCARIAAABIgDABIgEACIABgDg");
	this.shape_1.setTransform(0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAPAYIgQgEIgGgCIgDgDQgIgBgIABQgGgIgEgIIgCAAIgEgCIgKgCIACgMIAGAAIgCAGQACgEAEAEIAIAKQAOAQASgLIADAMQADAHAIgBQAEgEgBgOIgRgDIAAAAIgBgBQgMgBAAgKQAGADAQgEQAIgCAHAAQAGABAFACQAEAHAAAKQAAAMACAEQAJgSgEgOIgBgDIAAAAQgFgDgPAAIgBAAIgJAAQgRABgGgGIAFAAIADgDQAPgFASAGIAMAEIAHAFIABAgQgDADAAAFIggABgAAIgEQASAAgDAYQASgDgLgRQgFgJgHAAQgFAAgFAFg");
	this.shape_2.setTransform(-0.3,18.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC66").s().p("AADAQIgDgNQgSALgOgPIgIgLQgDgDgDAEIACgHIASAAIAFgDIANAAQAGAFASAAIAIgBIABAAQAQAAAEADIAAABIABADQAEAOgJASQgCgFABgLQAAgKgEgHQgFgDgHAAQgHAAgIACQgQAEgFgDQgBAJAMACIABAAIAAAAIARADQABAOgEAFIgBAAQgHAAgDgGgAAIgEQAMgNALARQAKARgSACQADgXgSAAg");
	this.shape_3.setTransform(-0.3,18.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.CarmenArmL, new cjs.Rectangle(-5.6,-17,12.2,37.9), null);


(lib.BufFTorso = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FE78E3").s().p("AAbDhQgdgBgHgBQgIgCgkgCIAFAAIgTAAQgRAAgcgXQgcgYADhWQAcACATATIAGAGQBIAIBHAEQAqAHAlgUQgKAxgjAgQgkAggdAAIgBAAgAABhMQgmAAgegKQgigKgWgXQALgegLhKQAOgDAFALIAIATQAHATAYALQAXALAYgBQAagBANgOQAOgNgCgmQAmgFAiAfQAqAlgUAsQgqAlhMACIgIAAg");
	this.shape.setTransform(7.3,17.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAFFFF").s().p("AgQANQgHgPgJgIQAJgFAVAFQAXAGAMgCQgJATgeAAIgKAAg");
	this.shape_1.setTransform(4.3,-12.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC9A67").s().p("AAWEMQhDgIg+gkQAFgXAQgYIAdgmQABgTgQgYIgEgFQgOgVgBgEQAoARAuACQAPABARgCIAZgCIAUgEQAjgJAdgSQAFAJADALQAGATAAAbIgBAXQgCAggHA4QgcAqhAAAQgMAAgOgCgAA4DpQAAADACADIAFABQANAAAAgOQAAgHgGgEIgOASgAhEgfQgigbARgfIABgCIAaABIAaACQAVACANgEQAGgCAEgDQAHgBABAGIABAGQgBAPADABIAJgCIgKAjQgHARgPAEQgJADgKAAQgZAAgYgUgAiViSQAAgHAPgMQgBgJgOACQADgGAXgbQAQgTgEgSQAMgDAMAGQAFgCgIgFQgIgHAHgEQAPgFAjgHQAJABgNAOQAKgGAYACIAfAEQAEgBAAAJQAAAKgEgDQAHAMAYAMIABANQAAAAgBABQAAAAAAAAQgBABAAAAQAAABAAAAQAAADADADQABAggMAZIgCAFIgHAKQgQAWgbAEIgOABQgzAAhKg0gAhAidQADAOAQARQAiAGASgRIAcgjQgzAUhAgcQAAALgHAQQAGACAFgEQAFgDAEAAIADABgAgYjPQAOABAAAGQgBAEgIAFQgGAFAAAGQANgDAMgYIglgIQgBAIAOAAgAhbjcQgTAHgBARQAIAAAMgIQAKgGANADQgDgOgLAAIgJABgAgGj0QgQAEgDAOQAFAEALgFQAKgHALAEQgCgOgKAAIgGAAg");
	this.shape_2.setTransform(6.8,2.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AhjCBQgCgFgGgCIAIgGQAEAIAMAAQAWAAgEgWQAQATACAAQAGAAAAgHQAAgFgKgPQgHgKgGgEIAGgEQACADAZARQAMAJADAMIAAABIgDADIgUgCQgDAAgFAEQgQAQgIgLIgXAIQgCAAgDgHgAiiB9QABgRgEgEQgFgEgZACIACgJQACADAEAAIAOgIQACAHAGAAIANgEQAFAFAAAHQgHAKAAAHIAAAFgACKB7QACgCACgHQAAgHAHACIAGAAIAAABQgNAHgDAGIgBAAgABvB0IgEgFIAAgBIAJAKIgFgEgAiLB1IABgDQAKgPAJgGQAAAAAAgBQABAAAAAAQAAAAABAAQAAgBAAAAIAHgDIACAMIABAFIgEAEQgMAIgQAAgAhXBiQAAgKgEgGQACgCAEAAQAFADgEASQgBAGABADIgCABgAB5BtQgGgGgCAAIAIgLIACAGIgCALgACnBWIAIAJIAGAFQgJABgJAEQAEgGAAgNgACEBZIAHgBIAAABIgCACgADMBFIABABQADAAAMgDIABAEIgFAHIADAGIgDADgAiLBWQAAgCAAAAQAAgBABgBQAAAAAAgBQABAAAAAAIABAAIgDAFgAjHBOIACgCQAKgCAJgIIABABQgGAJgHAEQgDACgBADQgCgEgDgDgACEBLIAAgBIABABgAjqA7IAGABIAbgHIgBACQAAAEgHAHIgEAFQgIgBgKACIgDgNgAiVBGIAAAAIAAgBIADAAIAFAAIgBABIgDABIgEgBgAhVBFQAFgQgBgTQALAEgDAJQgFAOAFAIgACRAvQADAFAFACIgOAHIAGgOgAC5A6IAMgDIADAAIgBABQgIAEgDAAIgDgCgAikA7QAAgBAAAAQAAgBAAAAQABAAAAAAQABAAAAAAIABgBIgCACIAAABIgBAAgAi8AsQAFgFACgDIADABQACgBAFgJIADAFIgEAFIgMARIgEABgAjsAlIABgBIACgBQAAAGAKAAQAOAAAKgFIgBABIgbAHIgIACIgBgJgAiXAlIAAACIgCABIACgDgADWAlIACgBIATgGQAEAAgPAIgAiDASQgEAKgQACQgBgNAVABgADLAYIAIAAIgKABgAjMANIgCgPQATAAALgBIACADQABACgCAFQgHgEgJAAQgMAAAAAJQAAAFAJACIgDACIgKABQADgEAAgFgAijARIgDgCQAHgPAMAAQgEAIgJANIgDgEgAhVASQABgEgDgFQgDgEABgFIAQADQACAPgMAAIgCAAgACdAMQAGgDAHAAIAEAGIgHABQgGAAgEgEgAC5AIIAAgBIAlABIAAADIghADgADqAGIACgBIABACIgDgBgAgrgLQgPARgIABQgCgRAZgBgACFgRIABABQASAGADAKIgJAAQgEgHgJgKgACtgNIAAAAIAUAGIgBAAIgJACQgIgHgCgBgADLgWQAFACAAACIgBABQgEAAAAgFgACKgkIABgCIAMAAIAIAAIADABIACAAQANABAIAJQAAgIgDgFIAJABQgDAHAAAKQgygLAAgDgAh8gbQAXgMABgLQAJgDADAIQAEAJADABQgEAJgOACIgHABQgKAAgIgEgADagtIAAgBIAAAAQAFAAAAAEQgDAFgBAFQgCgFABgIgAB2guQAEADAFADIgGAHQgDgGAAgHgAhNg2QAFgJAKgEQALgFABAOQgHgCgHADQgGADgFAAIgCAAgACag+IgPgEQAKAAANACQAPADAJAAIADADQgVgBgOgDgAB7g+IAJgDQgCACAAADIgHgCgABrhdQAZgKACAOQgNgBgPAKQgPAKgLABQADgOAYgKgAhShNQgKgEADgIQAKAAAJAIQgBAFgFAAIgGgBgAgnhsIAMAAQgIALAKAEQANAFAAAHQgdgEACgXgAAqhVQAAgIAIgDIAPgEQgMAPgKAAIgBAAgAAShZQABgOAPgBQACAPgNAAIgFAAgAAKiHQAIACgIAJQgHAIALAAQAAAGgFAGQgFAHgBAEQgSgNAZgdgAAqhoIALgYQAMAYgUAAIgDAAg");
	this.shape_3.setTransform(-1.6,-18.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("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");
	this.shape_4.setTransform(-1,-4.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.BufFTorso, new cjs.Rectangle(-26.8,-38.4,51.7,78.5), null);


(lib.BuffLegR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2AD48").s().p("AgdgJIAOABQAMADAaAMIAHADQgdgKgegJg");
	this.shape.setTransform(-25.3,3.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FE78E3").s().p("AgjBXQgqgWgVgDQAHgFASABQAZABAEgBQgOgNgbgBIgHABQgIACgKgBIgBACQgbgIBciPIAAAAIAAABIATAWQAoAtAAABIgBAAIgIANIgEAFQAGAFAKgFQAKgGADgIQAOAJAZAVQAXAPAbABIguAqQgZAZgOAVIgCAAQgfAAgjgRg");
	this.shape_1.setTransform(-31.2,-9.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC9A67").s().p("ACuBkQgOgCgbgRQgdgUgPgEQgZgGg8AAQg0gBgcgLQgUgWgPgGQhYACgogEQhFgHgmgZQAigqAvgjQAeAGA1AWQA4AYAbAGQAQAEBHALQA2AIAgAMQAPAGAhAVQAdAUAQACQARADAlgKQAogJASAAQAMACAWAJQAUAJAPAAQgKABgNAOQgQARgMADQgjgDgSADQgOACgZALQgQAHgLAAIgEgBg");
	this.shape_2.setTransform(7.9,3.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AD9CyQgHgBgLgFIgwgiIgEABIgHgDQgOgEhjgJQhEgGgeggQhuAFgtgIIgPgEIgRgIIgHgDQgbgNgLgDIgOgBQgfgJgggGIgvgVQgZgKgSgFIALgTIABgCQAJAAAJgBIAGgBQAcABAOANQgFABgYgCQgTgBgGAGQAUADAqAVQAlASAggBQAOgWAagYIAugpQgcgBgXgRQgYgUgPgJQgCAIgKAFQgKAFgGgEIAEgFIAIgNIAAAAQABgBgpgtIgTgXIAAgBIgBABQgJgNAYASQAYASgCgCIBMBCQAfAYAoABIAAATQAQAEBRAaQA8ATAvAEQA5AGA8AZQAgANBEAlQBlgZBYAdQAAAXgTAMQgHAGgPAHIgMADIgFAAIgEALQgdgFgRABQgMAAgaANQgUAKgNAAIgDAAgAACBlQAcAMA1ABQA8AAAZAGQAPAEAdATQAcASANACQAMABAUgIQAYgKAOgCQASgEAkAEQALgDAQgRQAOgPAJAAQgPAAgUgJQgWgKgMgBQgSgBgoAKQglAJgRgCQgQgDgdgTQghgXgPgFQgggMg3gIQhGgLgQgEQgbgGg4gXQg1gWgegGQgvAigiAqQAmAaBFAHQAoADBYgBQAPAFATAWg");
	this.shape_3.setTransform(0,-2.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.BuffLegR, new cjs.Rectangle(-43.5,-20.7,87,35.7), null);


(lib.BuffLegL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FE78E3").s().p("Ag8BKIgigrQgTgagVgmQgPgQA4ALQAeAZgQgSQgPgSANgHQANgIB6gKIgDABQADADADgFIAAgCQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQAIABAVARQBJA3gjBTIgCAAIgPABIgGAAQgrACghAAQg7AAgdgGgABYBMIANABIgNgBg");
	this.shape.setTransform(30.8,-0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC9A67").s().p("AB8ApIgMgGQgUAIgXABQghACgogLIgUgGIgtgQIgUgGQglgMgcgBQgPgBgbAEIgtAGQg2AHgdgYQAfABAggZIA1gpQAPAEAOAOIAWAYQAgAEAxgCIBQgDQBagBAiAlQBIgUArgDQAPAPAZAkQAZAkARAQQgSACgSAAQhOAAhXgng");
	this.shape_1.setTransform(-8.1,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AGOBZQgmgFhDAFQhIAGgcgCQghgChJgWIg5gQQgDgEgDgBIgYAAIAWADQgmAAgngEQgfgFgmgEIAAgBQgQgDgOgGIgBAAIgfgEQgagKgQgFQgigJgVAEQgXAIgUgDQg1gEg0gLQAIgKAVgIQAZgJAJgJIABAAQAGgBACgGQAWgeAggHQAmgJAVAmIAbgEQAWAMAoACQAPABA9gCQBggCAbAgQAegPB1gjQB0gjAmANQASADAAAEQgBAAgBAAQAAAAgBAAQAAAAAAABQgBAAAAAAIAAACIgDABQh7ALgNAHQgNAIAPASQAQASgegaQg4gKAPAQQAVAmATAZIAiArQAtAKB4gFIAGgBIAPAAIACAAIADAAIACAAIgMAVQgNgEgJgBgAAjAoQBsAxBdgMQgRgPgZgkQgZglgOgPQgsAEhIATQgiglhZABIhRAEQgxABgggDIgWgZQgOgOgOgEIg2ApQgfAagfgBQAcAXA2gGIAtgGQAbgFAQABQAbACAmALIATAGIAtAQIAVAHQAoAKAigCQAVgBAUgHIAMAFgAAWAzIAAAAIAHACIgHgCg");
	this.shape_2.setTransform(0.8,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.BuffLegL, new cjs.Rectangle(-42.4,-9.7,87.1,18.9), null);


(lib.BuffArmR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAAAAIAAAAIAAAAg");
	this.shape.setTransform(-30.9,9.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC9A67").s().p("AjWCEQgngdgEgKIADAEQgCgFAAgFQABgTAxgNQAIABAfgLQAfgMBSgXQAVgeBBgSQBUgXASgKQADgSAMgUIATgjQAFAHgIANQgLASgBAEQALACAUgRQAWgSAQgBQgEAHgQANQgPALgEALQAOAEAXgJQAegNAHgBQgPARgzASQAGANATgDIAigGQgEAKgTADQgbADgEADQADAKAWABQAbABAGADQgNAOgaAEQgdAFgSgLQgWAJhMAqQgmAWghAMQgRAHgRADQgpAqgqAQIgvATIgNABQgUAAgQgNg");
	this.shape_1.setTransform(-3.6,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AiwCVIAFgCIAvgTQApgRAqgpQAQgDASgHQAhgMAmgWQBLgqAXgJQASAKAcgEQAbgEAMgOQgFgDgbgBQgWgBgDgLQAEgCAagEQAUgDAEgKIgiAHQgTADgGgOQAzgRAPgRQgHABgeAMQgXAKgOgFQAEgKAPgLQAQgOAEgGQgQAAgWATQgUARgLgCQABgEALgSQAIgOgFgGIgTAiQgMAVgDASQgSAKhUAXQhBASgWAdQhRAYgfALQgfAMgIgCQgxANgBAUQAAAEACAFIgDgDIgKgPQAFgeBQgMQAYgEAmgPQAngQAWgEQAxglAjgMQAKgDAlgDQAdgEAOgJQAPgLAOgnQANghAagGQAFAGgHAKQgJANAAAGQAHADAWgPQAVgPAMAIQAIAFgQAOQgVATgCAEIAlgQQAUgJANAGQgBARgXAIQgaAIgEAJIAggHQAUgEAJAEQgBAPgSAGQgWAFgJAEQAEAHAOAAQANgBAEAKQgIAUghAHQgfAGgZgKQgaAJgvAeQgkAYgYAMIgNAFQgaADgMAFQgPAHgkAdQgcAWhGAaQACgIgHgBg");
	this.shape_2.setTransform(-3,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.BuffArmR, new cjs.Rectangle(-30.9,-14.8,55.4,31.6), null);


(lib.BuffArmL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC9A67").s().p("ADvBoQgIgDgGgLQgJgOgDgDQgIgCgTAFQgVAGgOgBQgTAAgtgOQgrgOgYABQgEgEAAgLQg5AVhDgdIgFgCIgxgXQgegOgXgCQgCABgGAIQgDAGgIgBIAPgeQgLAAgNAKQgNAKgNgBIAbgfQgEgBgRAGQgUAGgJABQAggaAWgBQgBgGgHgCQgKgCgCgCQAHgHARAAQgWgRgCgDQgNgOAKgRQAJABAEALIAGATQAwADAVAzQABAAAAAAQABAAAAgBQAAAAAAgBQAAgBAAgBQgCgDAEAAQCJAMBAAlIALAHQgEgFABgDQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAigHAwADIARABIBeALQBHgEAFBIIAAADQAAAJgPALIgjAZQgHgHgQgNgAk3g9QAAgNAZAAQAZAAAAANg");
	this.shape.setTransform(3.9,1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AEFCEIgVgNQgYgZgFgKQgpAHhDgPQhPgTgYAAQgoAHgSgDQgcgFglgVIgCgBIg5gfQgWAKgNgKIgMAMQgIAHgKAAQgBgHAEgJQAEgJAAgEQgXASgPgLQgGgGAHgFQAKgJAAgDIgVAFQgMADgFgEQgCgXAkgEQgFgFgUgBQgSAAgHgKQAAgRAagDQASgBAWAGQgTgXAAgUQAEgDADgIQATgCAPAUQAQAUAQAAQANAHAWAgQCLAPA5AgQA6gKA/AEIBMAHQA6AFAaAUQATBCgPgHIgBgDQgFhIhHAEIhdgLIgRgBQgxgDgiAIQgBAAAAAAQgBAAAAAAQAAAAgBABQAAAAAAABQgBADAEAFIgLgHQg/gliJgMQgEAAABAEQABAAAAABQAAABgBAAQAAABAAAAQgBAAgBAAQgVgzgwgDIgFgTQgEgLgKgBQgJARAMAOQADADAVARQgRAAgGAHQABACAKACQAIACAAAGQgVABghAaQAJgBAUgGQARgGAEABIgbAgQANAAANgJQAOgLAKAAIgPAeQAIABAEgGQAFgIACgBQAXACAeAOIAyAXIAEACQBEAdA4gVQAAALAEAEQAZgBAqAOQAtAOATAAQAOABAVgGQATgFAIACQAEADAIAOQAHALAHADQAQANAHAHQAJAJgHAAIgFAAgAk1g+IAyAAQAAgNgZAAIAAAAQgZAAAAANg");
	this.shape_1.setTransform(3.6,1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3A3839").s().p("AgFgBIAJgBIACAFQgHAAgEgEg");
	this.shape_2.setTransform(-22.9,-13.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.BuffArmL, new cjs.Rectangle(-28.5,-13.6,64.4,28.6), null);


(lib.BubPreparing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AkmBlIgCgFIgHAEIgJgCIAOg7QAMgnAFgmQAEglAMgoIAxAtQBvAfBxgCQBPgCCQhEQAhA8AIAsQAIArAJATIAYA3QhzgCh0AHIgCgGIgHAAQgDgJgIgFQgHgFgDgJIgIgXIgEgGQgJgQgPAAIgIBOIgeACIAAgCIgCgBIgFAAQgYACgYABIgSAAQhkAAhjgPg");
	this.shape.setTransform(62.9,44.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#996600").s().p("AiDA3QADgWgGgCQAMgFAMgUQAQgWAKgIQANADAbgSQAfgVAMgDQADAEgGAHQgIAKgBADQAOgDAlgMQAhgIATAOQgDAFgOADQgOADgEAEQADADAKgDQAKgCADgEQAMADAQALQAQAMAKAEQABAGgQgDQAAAGAGAFQAGAGAAAGQgUgRg0ABQg3ABgUgLQgCAHAGAEQAHAFAAAGQgNABgUAFQgUAGgMAAIACANQACAHgEAEQgGABgEgDIgIgEQgCABACAGQACAKgCAEQgQgUgcALg");
	this.shape_1.setTransform(63.6,-26.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFB366").s().p("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");
	this.shape_2.setTransform(53.1,34.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("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");
	this.shape_3.setTransform(53.4,31.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#996600").s().p("AA9AVQgzgSgOgSQgEAHAEAHQAEAGgCAFQgMgEgUgCQgUgBgMgEIgCAMQgBAHgFACQgFgBgDgEIgGgGQgCgBgBAHQgBAKgDADQgIgYgeAAQALgRgFgEQAMgBATgOQAWgQAMgEQALAIAegHQAkgJAMABQACAFgJAFQgLAFgBADQAPACAmABQAgAFANAUQgFADgNgDQgPgCgFADQACAEALABQAJABAFgCQAKAGAKAPQALARAIAGQgCAGgNgIQgCAGADAHQAEAIgCAFQgNgWgwgRg");
	this.shape_4.setTransform(66.6,-24.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFB366").s().p("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");
	this.shape_5.setTransform(55.1,35.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAcJ9QgKAAgIgDQgGAAgEgDIgFACQgKAEgIgEQgBAAAAgBQgBAAAAAAQgBAAAAgBQAAAAgBAAIgDgCIAAAAQgKAEgLgCQgIgDgBgKIgCgfIARgCQACgKADgKQAEgLAFgKIgZgFQgsgNgighIgugvQgRgRgLgXQgFgLgCgLQgDgNABgOIAAgbIACg0QACgVgIgTIgCAPIgJgaIACgHIgOgCIAOhBQAThBAMhmQgYgzABg5QgsAbgjAJQgZAogyAfQguAcgqAGIgDAWQgDAMgNAJQgMgCgHgVQgLABgWAJQgMgKgQgFQgUgGgKgGQgIgUAYgQQATgOAXgEQgLgDgIgNQgHgOADgKQANgJAYACQAZADANgIQAOgkAfgjQAigmAkgSQAGg3A/g7QAagYAcgTQAjgXAmgPIAPgPIACADIAngTQAigQAtAHIAAgBIAFgEIABgSIgFgMIgDgBQgNgWgDgeQAPgVAOgGQACgLgIgQQAEgEACABIAGAEQAAgJAGgXQAFAEACAMQAMgDAZgPQAYgOAQgCQAMAIAjgFQAmgHAWAKQgBAHgFAAQgHABgBACQALAGAiAMQAcANABAWQgFgBgFgEQgEgEgEgBIAZAgQAMAOACAOIgCAHIgDgDQgCgEgFAAQAFAKgCAIIgGAPIABAAIgGAHIgDACIgDAFQgKALgFADIALAEIAAAGQAVAHATAJIACABIgDACQAyAsAXAxIAIAUQBXAoAoA/QAPAaAGAMQAKAIAHgBIAWgCQAgASAHATQANAFADACQAHAGgCANQgFAGgPABIgaACQALAHACAIQADANAEAOQgPAIgdgCQgegCgSAHIgOgNQgJgHgLAGQgbgWgCgmQgggFgYgXIgNgOIABAOQABAYgGAZQgRBUgKAEQAuBRARBiIAWA+IgLABIgBAFIgBgEIgDgBQgDAQAAAOIABAqIACAWQAIAqgWAjQgpBAg9AtQgVAPgbABQAEAKADALIAEAUIAQACIAAAZQAAAFgCAFIgEAHIgXgBIgEAGIgFABIgGAAIgGgCIgFgCQgFAIgKgBIgKgBIgHAAIgFgCIgNAAIgJgDQgEgBgDgDIgDgDIgCgJIAAgGIABgKIADgIQgTgWgBgcIAAgYIgHAFQAFAZgGAZQgFATgPAPIAEASQACAHgFAIQgFAIgKACQgKABgLgBQgEADgFAAIgEgBgAARJbIgIASIAZAHIACgXIAIgBIABACIABADIABAEIgBAGIgBAHIAXgCIADgOIgJgVQADgGAHgCQAIgDACgIQAEgPACgPQABgLgBgLQgBgPALgGIACgIQgMgRgBgWIABgWIgVALIgGgDIgGgIQgGgMgEgPQgIgfgQgcQgEgHgFgEQgRgNgXgDIAGgCIATgCIALgRQATgZAOggQgvgBgwABQhRABhSgQIAGAVQAGARAAASQgBApgCAoQgBANADAMQAIAdAVAVQANANAMAQQAFAHAGADIAhAUQALAHAHAKQAGAJAKAFQAXALAaADQAFAAAIADIgOASQgEAFgBAGQgDALAAAKQAAAEgCAFIgDADIgOgHIADATIACACIATAHIAAgCIABgGIACgFIAGgLIAEADIABAFIAAACIgBADIAAAFIgBAIIADgBIAFgBIAFgDIABABIACgDIABgFIACgFIAKgLgACdJNIACAJIABAPIAIgCIAMgEIAEgDIgDgFIgDgEIgCgHIABgDIACgBQAGAEAEAGQADAGABAIIABgCIAGADIADABIAEAAIABAAIgCgHIgBgFIAAgFQABgEADgEIAIAYIATgJIgCgUIgIAIQgJgDADgJQAEgSgJgOIgNgSQAHgEAKAAQAOgCANgFQALgFAHgIIAHgHQAQgSAVgNQAHgFAFgGIAVgbIATgYQAQgUAAgYIgCgcIgCgYQgDglAGgkIjVAGIAgA5IARACIAFACQgJACgIAEQgMAFgIAJQgIAKgFANQgGAPgDAPQgGAagNAWIgGACQgFgIgLAAIgDABIgFgEIgKALIABAAQgDAFAAAHIABADIgBADIAAAIQgCAMAHAKQAEAFAAAGIABgEQADAGAEAEIgBADQADASgBAQQgBAOADALQADALAIAFIAIAGIgIAXIAEAOIAUACIgBgRIAFgGIACABgAAkEZQgDAJgGAHIgNARQAKADADAJQAHAXALAVQAOAZAGAcIAYgCIAGgGQAHgFAJAAQALgDALABIANgqQADgLAFgKQAJgQAGgRQADgHAGgGIgHgJQgQgXgGgcIgLAAIgLgQQgOgWgEgcQgBgIgEgCIgBAKIgKBCIgqgCIgPAsgAjaDXQBsAQBtgBQAWgBAYgCIAFAAIACABIABACIAegCIAJhOQAOAAAJAQIAEAHIAJAWQADAJAHAFQAHAFADAJI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");
	this.shape_6.setTransform(55.4,33);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#996600").s().p("Ah7BLQAJgKAEgYQAFgdAGgMQAPgBARgcQAWghAKgIQAFACgDAKQgEAMAAAEQANgKAdgbQAcgUAYAFQgBAGgMAIQgMAJgCAGQAEACAJgHQAIgGACgGQAMgCATAFQAVAEALgBQADAGgQADQACAGAJAEQAIADACAFQgagHgxAWQgzAYgZgDQABAIAIACQAJACADAFQgNAFgQAOQgRAOgMAFIAIALQAEAGgCAGQgFADgFgBIgJgBQgCACAEAGQAGAIAAAEQgYgMgWAWQgFgWgHABg");
	this.shape_7.setTransform(53.3,-30.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFB366").s().p("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");
	this.shape_8.setTransform(53.1,30.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("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");
	this.shape_9.setTransform(53.4,27.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape}]},3).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape}]},5).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape}]},36).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.3,-34.5,139.6,131.3);


(lib.BubCurl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AhmCEQgXgPgjgmIghgnQgJgWgEgWIgBhsQAAgSAKggQALARAPAOQA6AzBKABIgEAKIAdgYQAKAOALALQBWA/BqAKQgDAWAGATQAXBJhFAXQg8AVg7AAQhGAAhFgfg");
	this.shape.setTransform(21.9,70.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFB366").s().p("AA+GoQgFgIAAgIQAAgJAIgKQAEgGABgGIAHgFQgGgGgGgCQhrggAOhyQBuAQBqgcQgkBHgYA6QA5gfA/ACIgCgJIAugKIABAHQABAOgLAHIAOAIIgHARIgLAFIAEAFIAJABIALgFIAGAiQgJgMgOADIASAXQhZAjhZAAQggAAgggFgAFiE/IgTgDQgHAAgEACIgdgFIAFgZQgDgDgEABQgMgEgNADQgMAAgLAFIgCAJQgyADgxALIAIgLQAdgtAOg2IAQgKQARgLALgRQANgVgCgcQAMAFAMADQAYAGAXgEQgOAtgaAhQgaAggQAdIAUgQIANACQATAAASgLQAWgNASgVIAbAAIgBAGQgBAKgEAIIgLAUIAIgCIALAIIgSAJIADAEIAQADIAAAKIgMAJIAKAFIAAANIgRALIgGgBgAgZDOQgEAAgDgCIgBAAQh/AAhUhaIgFgJIgDAEQg5hEgYhUQAEBcBJBAIgLAMQhsAAg0haIAGgPIAcg+QAZg1A1g5QA1g5AfgOIAdgOIgHgJIADADIAEgBIABgBIAMAAQAZgBgEgUIgNAHQgJAHgLABIgKgKQgKgpAfgIQALgDAOAKQAMAIADgDQABgCgGgFQgIgGgCgLQADgBAGAAQAFABAEgDQgHgRABgKQAKgFAUgNQASgMANgFQAAgFgIgEIACgFQASADAdgNQAhgOAOAAIAAAEQgDADACADQAbgUARALQAEASACAjQAZAFAGAgQAFAegLAVQgxAogbAZQgOAEhNAKQgIgCgZgQQgUgMgLAEQAEAFARAIQAPAHACAFQAJABAFAEIABABQAxAGA1gPIAIgDQAYgUAkgiIAegFQANgCAcAIQBOAMApAeQApAeAiAjQAiAkAuAlQAlAwgdBOQgIAXgNAQIgBACQgXAcgmAFQgDACgDAAIgEAAIgLACQgaAFgSgLQAIgCAJgJQALgLAAgIIgIgOQAIgKAAgJQgKgQAAgEQADgYgCgFQgCgDgcAAIgCgDQAWgSAdgHQAEgDAIAAIAEABIgBgDIAggFIgkgCQhmhdiAA4IiLALQg6hVhcgSQBrAhAzBxQAGAPgDASQBSA8BiAVQAjAHAdgQQAFgJAIgLIAEgGQAXALADAeQAFBCgzAfQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAIgCAAIgCABIAAAAQg/ARhAAAQgtAAgsgIgAgJj7QAggHAFgbQgTANgUAGQgbAGgQgLQAMAaAhgGgAgwlNQgFAJADAJQAOAFAFgPQAEgPgMgIQgCAGgHAJgAAmlbQAAAHgGAIQgHAIAAAFQALACAFgLQAGgMgFgLQgOgGgQALQgQAMAAANQAEgCAQgOQAMgKAJAAIABAAgAhOlrQgSASATAIQgFgPAOgJQAIgFAPgJQgEgBgEAAQgLAAgOANgAAUlnQAIAAAFgLQAEgLgGgLQgUAGAJAbgAD6BjIAAgIQAAgKgDgIIAGAAQAKAAAAgDQAAgDgSAAIAAAAQgIgTgVgGIABgBQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAgEAHAAIAkAAIABgEQAAgDgZAAIgFAAIgQgBIgGAAIgFgNIAEgGIACgCIABgCIACgBIAUAAQARABAUAEIAHABIAGgBIAAATIgFAEQAAADAOASQAAAJgMAIQAAADAGAFQAGAEAAAFQAAAOgeAKIgJgKgAB8BPQg0gOgCgCQgvglg6gSQADgIABgHQAFgggYgYIBAgFQCZgVApCYQgIAQgUABIgeAAQgYAAgCgBgAC3gRQgjgrg1gOIAGgIIAbgFQBGgJBEAWIANAHQARAKALATIgSAHQgdAJgWATIgKAAQgZAAgGAHQgGgKgIgLg");
	this.shape_1.setTransform(45.5,49.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9966").s().p("ACKDgIAFACIgDAGIgCgIgACvCpIAEgDIACADIgGAAgAizjnIAFABIgBAFQgHgDADgDg");
	this.shape_2.setTransform(53,32.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#996600").s().p("Ah9BDQAKgIAFgYQAHgcAHgKQAOgBATgaQAXggALgHQAFADgEAJQgFAMABADQANgIAegYQAdgTAYAHQgCAGgNAHQgMAIgDAGQAEACAJgGQAJgGACgFQAMgBATAFQAUAGALAAQACAGgQACQACAGAIAEQAIAEACAFQgZgJgxASQg0AUgZgEQABAHAIADQAJACABAGQgMAEgRANQgRAMgMAEIAGAMQAEAGgCAFQgFADgGgBIgIgBQgDABAFAGQAFAIAAAFQgXgOgXAUQgEgWgHAAg");
	this.shape_3.setTransform(35.5,9.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("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");
	this.shape_4.setTransform(44.6,46.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.BubCurl, new cjs.Rectangle(0,0,89.2,93.6), null);


(lib.BubArmR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFB366").s().p("AihCOQgcgqADgNQADgMAjgXIANgIIAFgDIAJgJIABgBIADgCIAqgYIAAAAIAEgDQAKgIALgCQgBgGACgHQACgHAAgEQAqg0AzgeQAqg9AogMQgDAKgPAJQgRAIgDAIIATAEIAYAEQgkAKgKAOQAagRAhgEIABAAQADgEAMgJQAQgLAHAAQAAAAABAAQAAAAABABQAAAAAAABQAAAAAAABQAAADgNAMQgOAMgFAAIgBgBIgXARQgZASgXAHIABABQAJALgLATIgDAHQgIAXgIAOQgUAhggAMQAKAqgTArIgEAIQgNAbgYAVIgDgCQgJAXgVAAQgfAAg6gug");
	this.shape.setTransform(-5.2,1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC97").s().p("AAQALIgRgGQgGgFgEgCIANgIQAKAJAJAMgAgUAGIAEgEIAIAFIgMgBg");
	this.shape_1.setTransform(10.6,-10.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgkCyQAXgVANgbIAFgIQATgrgKgqQAggMAUghQAIgOAIgXIADgHQALgTgJgLIgBgBQAXgHAZgSIAXgRIABABQAFAAAOgMQANgMAAgDQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBAAAAAAQgHAAgQALQgMAJgDAEIgBAAQghAEgaARQAKgOAkgKIgYgEIgTgEQADgIARgIQAPgJADgKQgoAMgqA9QgzAegqA0QAAAEgCAHQgCAHABAFQgLACgKAJIgEADIAAAAIgqAYIgDACIgBABIgJAJIgFADIgNAIQgjAXgDAMQgFAGgDAGIgDAAQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgcBvhCIABgBIAbgMQAEgZAVgWIAfgeIALgJIAFgEQAPgFANgNQAGgHAUgZQAggrAjABQAAAOgKAJIgUAMQACAFAPAAQALAAALAGQAwghABAHQAFAYgeAPIgDACQAIAFAMAVQAAAEgHAAQgJAAgMgGQgDACgFAAQgNAAgEgCQgJAHgKAFIgGADIgEAAIgRAlIgOAjQgUAlggANQAIAwgWAqIgBADQgLAVgYAdgACUhuQAEACAHAGIASAGIAFAAQgKgOgKgIIgOAIgACLhlIAMAAIgIgFIgEAFg");
	this.shape_2.setTransform(-5.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.BubArmR, new cjs.Rectangle(-25,-18.3,39.2,38.2), null);


(lib.BubArmL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFB366").s().p("AAgCeQgEgEAAgDQgagcgKgUQgRgjADgtQgkgwgFg+QALgDABgGQgeAHglgMIg7gYQAQgFAkAJQAjAJASgFQgFgDgUAAQgSAAgEgFQAFgEAXgHQASgFAEgLQgkgFgFgSQAxAFAYAOQAYAOANAiQAkAJASAsQAIAMAPAEQAOADAHAEQAFAAAFAEQAJAEAOAMQAXAMAJAQIAMAOIABAAQADAJgEANIADARQAAARgfApQghArgRAAIgRADQgKADgFAAQgZgKgIgIgACmBIIAAAAIAAgBIAAABg");
	this.shape.setTransform(4.9,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAgCqQgGgJgQgQQgYgagFgMQgEgLgBgYQAAgZgDgKQgCgGgagyQgRgjAHgcQgeAFghgOQglgTgRgHQANgPAqAPQAKgIAbgIIABAAIAGgCIgFAAIAAgBIADABIAAgBQABAAABAAQAAgBAAAAQABgBgBAAQAAgBAAgBQAAgDgEgBIAAAAIgEAAIgDgCQgQgKgFgIQAPgJAkAIQAhAIAPANIANAAIADAJIgEAAQAAAHAHAHQAHAHAAAIQAbAHApA2IAFAGIAZAHQACAAAVAPQAXAPAIAGQAVAUAAAJQAAAFgEAAIAAAAIgMgNQgJgRgYgMQgNgMgKgEQgFgEgEAAQgHgDgPgEQgPgEgHgMQgSgsgkgJQgOghgYgOQgXgPgygFQAGASAkAFQgEALgTAFQgXAHgEAEQAEAGASgBQAUAAAFAEQgSAFgkgJQgjgKgRAFIA8AYQAkAMAegHQgBAGgLADQAGA/AjAvQgDAuASAiQAJAUAbAcQAAADAEAEIAAAEg");
	this.shape_1.setTransform(4.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.BubArmL, new cjs.Rectangle(-13.8,-17,36.7,35.5), null);


(lib.Background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AZ2+8IgLAAIAAAAIAAAAIgBAAIhQAAIhsAAIAAAAIgDAAIgBAAIiBAAIgLgBAZ2+8IgLgBIi+AAIiPAAEAqogP1IAAvIIiyAAIiTABQgHAAgFAAIgKAAQgBAAgBAAIgyAAIgGAAIgFAAIgFAAIlfAAIgNAAIhvAAIgQAAIioAAEAqogIhIAAAAMAAAAnfIiyAAIgbAAIi7AAMgrtAAAImdAAI7PAAIhuAAIAA+iIAAgdQAAgNAAgOQAAhPAAhQQAAkwAAkxQAAhAAAhBQAAiyAAiyQAAleAAleIBtAAEAqogPtIAAHEEgo5ge9MA9XAAA");
	this.shape.setTransform(1.5,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#009900","#E8FF88"],[0,1],598.4,139.9,598.4,-142).s().p("Ag2WTIAA+hIAAgeIAAgbIAAifIAAphIADAAQgDADAHAHIBHABQANAJASAGIAAAAIAAJyIgCgLQgFgXgMgKQggAbgBA7QgCAkAKAwIAcAMQgUAKgMAWQgFAKgCALIAAAYQATgDAdgTIAHgFIAAeSgAA30uQgJgJAFgDIAEgBIAAAAIAAANgAA31DQgagHgHgaQgKggASgNQAIAEARAPIAAAAIAAABIAAA6g");
	this.shape_1.setTransform(-265.8,55.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#0033FF","#00CCFF"],[0,1],521.5,54.2,521.5,-15).s().p("Ag2BAIAAh/IABAAQASABAmAAIA0AAIAAA2IAAAAQgUgMgXgFQgfAWAQAoQAEAPAKAMIgugCQgMAAgEACg");
	this.shape_2.setTransform(-265.8,-86.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#BA4A01","#FEC570"],[0,1],44,9.7,44,-26.4).s().p("Ag2CyIAAljIAFAAIBoAAIAAFbIAAAAQhTAEgZAEg");
	this.shape_3.setTransform(-265.8,-110.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FFFFFF","#80E6FF"],[0,1],491.2,61.1,491.2,-33.7).s().p("Ag2FeIAAq7IBtAAIAAAAIAAKpIAAAAIg6ACQgeABgQAPg");
	this.shape_4.setTransform(-265.8,-163.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#009900","#E8FF88"],[0,1],-438.5,123.7,-438.5,-158.3).s().p("AhYTwMAAAgnfICqAAIAHAAMAAAAnfg");
	this.shape_5.setTransform(265.4,71.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#0432EA","#00CCFF"],[0,1],-495.5,46.6,-495.5,-22.6).s().p("AhYDgIAAnAQCpABACABIAEADIACAEIgDAHIgHACIgBAAQAMAngECpQAECigLArIAEAAIAEADIACAFQAAAFgDAAIgQACIgBABIgBAAQggAChIAAIg0gBg");
	this.shape_6.setTransform(265.4,-78.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#FFFFFF","#80E6FF"],[0,1],-518,47.7,-518,-47.1).s().p("AhYHiIAAvFICxAAIAAPHIixgCg");
	this.shape_7.setTransform(265.4,-150.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#BA4A01","#FEC570"],[0,1],-97.6,14.2,-97.6,-21.8).s().p("Ax5iDIAKAAQANgSATALIABAAQAQAGAJgSQAMgDAQgBQAngBAMARQARB+gCA0QgEBWgqA/IgEATQhHAEgpAEgAvpDJQAThAADgRQAJATgCAtIgBAKQgDABgCAEQgBAGgFAAIgTABIACgFgAuVDGQgEgEgfgBQgNjRBMhnQAFgBAEADQAGADADgBQAHAJAEAhQADAfAKAJQBdAQAfARQAIAcAmALIBJALQAKAcAtAbQAuAcALAaQgIABgKgDQgJgDgIABQgRAWgqgGQhEgJgLAAQgYALgLABQgPABgvgFQglgEgVAIQgFACgFAHQgHAIgCACIg1ADIgZADgAlPCLIiFAAIAAgEIgkAAQgJgTgngXQglgWgHgYQg9gLgrgNQgDgSgUgKIgfgVQCdhHBLgpQAkAIAxgaQA+ghASgDQAHgBAPADIAJACQAWgBAsgMQAtgMAZgCQAaATBSAEQBuA2BRAQQALALARAbQBPgFBUAaICKAtQAwAxB6AEQAeABBKgCQBDgBAhACIAfAbQA2gEBEAbQA2AVAdAIQAAABAAABQAAAAABAAQAAAAAAAAQAAAAAAgBIABAAIACABIAAgBQBFAFAZATI3JAAgAKnB/IAKABIAAgEQgGACgEgBgAvPhAQgHguAAgcIAgAMQAUAGAVgCQgIAZgUAoQgWAsgIAVQAAgYgIgwg");
	this.shape_8.setTransform(-145.7,-115.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#02E302").s().p("AgMA8QgEgggOggIgdg3QAjgBAfAlIA1A8QgIACgTgJQgWgKgMABQgFALAPAKQAVAMADAGQgQgMgdAMg");
	this.shape_9.setTransform(228.1,-58.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FAFFFF").s().p("EAmWAc3IANgHIC6AAIAAAHgAr0c3IAMgHIGdAAIAPAHgEgpcAc3IAAgGIArAGgAcYtQIAEAAIgEAHgAqWyLIAAgCQAEABAGgCIAAAEgAc38rQAHgDgEgIQAGADgGAJg");
	this.shape_10.setTransform(-11.5,13.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#0033FF","#00CCFF"],[0,1],10.9,59.5,10.9,-9.7).s().p("A/aBAQAVgSADgHQAIABACALIACATQgEACgXAFQgRAFgGAHQgDgKARgPgEghuAA1IgGgJIAAAAIAAg2IBtgDIgCAOIgFAaQgIAtgNAFQALgiAJgrQgcgCgUAeIgKARIgUAoIgRgggA/qgOIAZAAIAJgGQAAAUACAIQgqAdgEAGQAAgWAKgjgEAgDgBHIgCgRIB0ABIgaAQg");
	this.shape_11.setTransform(-43.8,-91.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#009900","#E8FF88"],[0,1],5.7,141,5.7,-140.9).s().p("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");
	this.shape_12.setTransform(-4.7,54);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#0432EA","#00CCFF"],[0,1],-40.7,41.7,-40.7,-27.5).s().p("ARRELQgSgDhIgDIhrgGQgkgCiVgBQiWgBgzgNQgQgEgcgPQgcgOiWgEQjAgPgvgVQgngSgOgKQgbgSh9gUIiugbQhsgWgqAHQgvAJhjgRQgMgChDgYQgvgQhrgEIAAADQiKALn5AIQg2AahCATQhJAVg6gFQhAgEhmAZIg5AOQi4ASg7ACIgGgEIgTgTQgKgIgOAAQAAgPgCgEQgGgOgZgHIBJgCIAAgOQAAgSgcgEQg1gEgugIIAAgCQAKgGAegDIAAgFQgCAAgMgIQgLgIgbgBIAAABQgYADgKACIgFABQgGAAgFgDQgIgHgEgCQgIgBgFAJQgFAJgJgCQgIgNAAgGQAAgFAIgPQgBgIgSABQgJgfAJgQQACgHgHgCQgHgEAAgCQgHgxgEgsIAHAAIAAAAQANADAhgEQAjgFAUADQAPgBAIgXQAVgGA9AEQA1AFAUgOIBLAIQAoAFAUgVQAKgCAPADQAPAEAKgBQAEgBgEgIQgDgGgEgEIABgBMA3NAAAIAVAAIACARIBYAAIAagQIAHAAIAGAGIAKARQgkBDAFBEQACAAACgIQAFAMACANQANA5gmA+IgEAAIAAAHIAAAQIgFAGQgoAygOAOQgtAoAAAYIAAAAIgCADIAAAGIgVgBIAAABQgdADgFADQgCAHgGAEQgVAUgngGQgrgIgSAKQgVAQgFACQgVAJgyAEIgSACIgwAEIgYAJIgpgHgAfnDeIAAgGQAAgGAKgZIAAgBIAAgLQAAgLAPgrIABgEIACguQACg+ADgXQgCgSgVgpIgLgXQgEgFgDgFQgKgVgDgRIgFhMIAAgaIABgEIgCgDIgBgEQAAgDACgDIADgDIABgBIADgDIEkgBIC/ABIAAG/IgmgBQgNACgWAAQgmAAgMACIACgCQgGAAgDACIgHADQgDAAAAgKQAAgNAEgHIANgUQARgeADgLIAAgIQggARgBADQgMAWgGAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAgBAAgBQAEgLAAgGIABgRIADgiIAAgLQgMAGgGAKQgFANgGAIQgUAkgDgBQgCAAgFgGQgEgHAAgGIgBgVQABgHgFgMQgLgTgDABQgMgBgCAaQgBANABAOQgCA0gGAAQgHAAgbgcQgGgGgTgHIgLgGQgJgEgSAAIgHACIgBACIAAAAQAQAdAXA4IAAABQAGADAAAFQAAARhUADQg2AVgCAAQgJAAgDgGgEAk9ACsIAAAAIAAAAgEAgFgDiIABAAIABgBg");
	this.shape_13.setTransform(7.8,-73.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#85651D").s().p("Aj7ClIgBgDIACADgAD8ieIABgGIAAAGIAAAAIgBAAg");
	this.shape_14.setTransform(113.8,-175.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#6D4201","#F1B374"],[0,1],123.2,243.3,31.4,30.4).s().p("AEDDmQAHgEASAEQAVAFAIgBQgMAIgMAAQgPAAgPgMgACoCWIgBAAIgQgBIAQgEIAAAAIABAAIABAFIgBAAgAAfCOQACgJAaAFQgDAGgKABIgEABQgHAAgEgEgApZBjIAAgDIABAAIAGADQAQAGgIAKIgEAAQgNAAACgQgAB7AsQAHgNABgFQAEADgFAMQgGAPAAAFQgGgGAFgLgAJLhdQgLgWgIgFQAKgCAJATQANAaADAEIgBAAQgGAAgJgUgAI0ibIgDgBIAEgGIgBAHgAEIjsIAAgFIAAAFg");
	this.shape_15.setTransform(112.7,-167.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#07A335").s().p("AsPDBQgcABgiAQQgpASgQAEQAVgXBIgYQgngpgQggQAZgEAZAQQAIgOAXgMQAcgOAHgGQAGAPgHAbQgIAgABASQAhgUA8guQAAAGgMAWQgMAWABAQQAJAKAdAJQAeAJAJAKQgTABgqgJQgjgHgQAEQgWAGgMAfQgQAogIAIQAAhHgEgSgAOZANQgDgGADgJIAAgEIAGgYIgGAAQgIAAACAMQgjgsgLgeQAUAFAAgJQACgIgIABQgKABgEgBQgCgsgGgSQAPAFAKASIASAfQAJgDAIgGQAMgKALgPQAKgOATgdQABAIgMAdQgMAdAEAXQATgCAbgPQAZgPAOABQgLAOgeAPQgiAQgKAJQAMAKAgALQAiAMALAJIg1ADQggAAgQgHIgGAeQgEASgFAJQgEgCgCgEgAmJgxQgLAEgnAVQgeARgYAEQAPgUAngeQgMgKgggKQghgLgMgIQARgMBQgDIAAALQASgKANAHQgRgLAFgaQAJgeADgPQAJADADAPQAEARADAEQAQAFAagIQAfgKAPACQgDAJgQAIQgSAIgFAFQAFAHAVACQAVADAEAIQgCAGgKAFQgKAGgCAGIAoAAQATAEgBATQgPABgogLQgggJgRAMQgBAPgFAbQgGAYABARQgPgRgJgzgAidhzQgUgIgpARQguAUgYgCIAmgZQAXgOAXgDQgBgNgMgWQgHgPgCgNIgBgLQATABAdAKIAWAJIADgJQAfhCA7gWQgCAGgEAKIgMAaQgNAZAAAVIAAABIABgBQBTglA5ADQgfASgVAQQgaATgNARQAKAUAjAxQgMgBgkgOQglgOgWgCQgeAkALBXQg1g7AWg8gAhwjdQgFAPgBANQgCATAFARQgUAigHAnQAWggARg9QAPgCAjgOIAFgCQAogQAUgFQgZgFg9AcIgpAUIAEgUQAKgwAdgYQgbAJgNAjgAJMgdQgFgLgHgCQgKAAgMAGQgMAGgJAAQAKgIgCgGIgIgRQAfgJAfgvQAhgyAdgOQgGAQgdAgQgfAhgIAUQBBAGAgARQgOAJgcAAQgbgBgQgIQgFAHAEANQAFARAAAFQgFgCgGgMgASLg9QgyALgUABQAJgKALgHIAGgEQALgHANgDQgog6gOgbQADADAeAHQAXAEgFAQQAYgIAYgYIAogoQADANgKAYQgOAggCAIQALACAggHQAhgGAVADIhAAyQgmAfgHAnQgQgPgOgcgAs2gmQgCgPgCgHQgDgLgMgFQAEgGAHAFQAKAHAGgDQADAAAFgDIgIhNQAMACAJAOQALAUADACQAPgIAQgQIAbgeQAHAHgPAbQgSAeAGANQAxgQARgDQgGAGgOAFQgSAGgEACQANAOAVAhQgJAHgMgIQgRgKgEgBQgLANgQgFQgFABABAKQAAAKgEACQgjgXgbALgAMAhMQArgQAyAAQgBAJAFAJQAFAJgBAIQhFgEgggPgAIXhpQgKgfAMgZQAMAHAGAbQAGAfAHAIQgHAFgGAAQgNAAgHgWgAzDiWIhSAPQAAgIAPgLQAPgMARABQAAgOgGgOIgDgEQgNgWgBgEQAIACALAIQAMAIAHABQABAGgBAFIgBAFQgEAIABAHQADgBAGgSQAEAAAHAFQAGAEAGgFIgBgFQgCgDgDgCIgKgGQAJgTADgMQAGADADALQAEAPACACQAWgIAkgmQACAOgVArIgEAJQAJADAVgGQAWgGANAFQgMAKgUADIglACQgOAOgFA/QgXgPgIgng");
	this.shape_16.setTransform(37.5,-164.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#046A22").s().p("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");
	this.shape_17.setTransform(-6.5,-74.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#01B101").s().p("EgmxASKQgEgTgHgKQgBgdAJgaIABgCIAFgMQAQgjAbgSIAJgFIgCANIgBALQgGAhgJAaQgEANgNAYQgJAUAEAOQAcg4AggaQAUgQAWgEQgHATgLAQIgEAHQgLAPgNANQgSASgWAOQAJACAYgLIAOgHQAfgQARALIAAABQgRAnhEAGQgggIgJgPgEAmAAChIhHggQADgPgDglQgDgfAHgOQAPAGAEAlQAFAlAPAFQAghEAOgNQgGA6gNAjQAPgEARgVQAQgVAOgFQgFALgRAfQgOAagHARIABADIgTgFgAChqSQgQgagMgFQgWAkgRAKQgBgYAKgbQANghACgMQgUgJgcARQgfATgGAAQALgNAUgkQAUgdAaAFIgCgKIAJAAQANAZAsgJIAqgIQAXgCAKALQgFAJgQAOQgRANgFALQA+ASAXArQgXACgjgQQghgPgRACQAQAJAGAVQAGAYgQAMQgTgDgPgYgACUr7QAGAJgCAKQgCAKAGAGQASgNgCgSQgFgEgOAAIgFAAgAI/q0IgGggQAQAHADARIAFAaQgOgCgEgQgAHBq4IAVgTIAXgIIAFgBIABAMQAAAYgfAAQgPgIgEAAgAhStTQgBgCgFgBQgGgDAAgGIAAgEIAIAEIAbAMQADgCAFgLQAEgKAHAAQACACABAOQABALAIgBQAHgBAIgLQAHgKAIgBQgKAZgYAWQgWgXgcgEgAPPuGQgOgYgNgGQAXgOAQACQAEADAFARQAEAOAKABQgBAHgMABQgPgBgHAAgAOQu1QARgQALAGQgEAJgQAJQgSAKgFAGQgBgJAQgPgAAlwkQgCgJgUgmIgBgBQgOgdAGgXQAKAEAQAYQANAVATABQABgWAMgTIAVghQACAXgKAfQANADAhAAIAjABQgDAMgMAHIgCABIgcALQgGADAFAIQAFAHgEACQglgBgSAFQAWgKgKgKQgJACgMAPQgKAOgOAAIgBAAgAYIw0QgMgFgBgKQAWghAFADQgLAwAWACIgHAEIgSgJg");
	this.shape_18.setTransform(-3.6,-72.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#FFFFFF","#80E6FF"],[0,1],-44.3,47.4,-44.3,-47.4).s().p("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");
	this.shape_19.setTransform(-1.9,-149.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00FFFF").s().p("AiTAQIABgCIAAACgACTgPIAAAAIAMAAIAAAAgAiegPIAAAAIAAAAIAAAAIAAAAg");
	this.shape_20.setTransform(181.7,-196.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#4B2E01","#E49D34"],[0,1],166.5,197.9,32.9,-111.9).s().p("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");
	this.shape_21.setTransform(90.3,-73.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("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AFAEAIQAMgKALgkQANAEAGAjQAFACAOgNQAOgPANADQACAWgRAYQBcgbAXgmQAEgOgIgOQgHgNADgGQARAJAbgJIAUgHIANgEIgCAEQgGALgSAEQgJACgiACQATAZgjAsQAEAHAMABQgIADABAKIADASQAXgDAjAFQAjAGADAAQANABADAZQBlgwA2BMQAugOAMgHQAUgNAFgVIAIACIgKAhIANAGIACACIgKAIQgQgJgkARQANgCASAEIASACIAAAAQAOACAUAJQAQAAAOgDIAHgFQARgIAOgLIAEAEQgBAGgJAHQABABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAACgIADQAPgDAQgPQAWgWANgCQAQgCAfAJQAiAJATAAQAEgNgLgSQgOgYgCgHQgTAGgmgGQgsAYg5gEQgDgKgEgGQgIgngkgIIAAgDQgOgHgpgGQgmgFgOgJQgGgagRgJQAAAGAHAWQAGARgCARQgxgQgVgLQgEABgBALQgBAKgFABQgdgHgKgvQgMACgdARQgYAOgQgCQAEgVARgVIADgEIALgLQAggfAHgUQgPABgaALQgYAJgRACQgEAFAIAKQAIAMAAAIQgJABgKAAQgiABg0gOQgJAMgDAlQgCAngIANQgMgFgIgMQgMgSgDgjQhUAngrATQAJgWAWgTQAMgMAbgVQgagYghASQgjAcgSAFQABgQAKgRIAQgdQgJgDgdABQgdgBgOgEQASgPAkgMIA+gTQgHgfgcgYQgIgIgMgHQAQgEAVANIAKAGIAXAQQAHgEAHgMIAHgOQAKgXAMgFQAEAHAGASQAHANAOABQgDgqADgUQAUACAQAQIAZAcQAEgGATgkQANgbARgIQAIAOgMAvQAKAIAhgJQAdgHAGAQQgBAAAAAAQgBAAAAABQAAAAABABQAAABABABIABACIA9AOQASgSAngrQAkgjAigEQgEAOgQAdQgOAbgFASIBJgTQA1gLAdALQgnAUgaASQgZARgOAOQACATARAWQATAXAEANQAFgCAFgVQAFgSAQADQgSAUAKASQBlAbAXA/QAOAMAggNQAmgPAYAEIAdAGQAWAEASgGQAkgdASACQAJAAAMALQAMALAGABQAYADATgRIAmgkQgGgNgfgIQgegIgGgOQAYAAAeAKQAjALAPACQgLgKgGgeQgGggAMgYQAUAAA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");
	this.shape_22.setTransform(1.7,-33.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Background, new cjs.Rectangle(-276.8,-199.5,552.2,398.4), null);


(lib.TwiggsHeadArms = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC97").s().p("AhTEeQAQgDAJADQgIAIgpADQAHgHARgEgAg0EYQAFgHAAgEQhOgSgxAHQAOgMAdADQAtAGALgBQgIgIgbgBQgfgBgIgDQAVgHAfAHIAyAKQAOgYAYhBQAXhCAQgdQgNhugMgzQAbAFAvgCQgDAZAIAwQAJAxgDAaQgFAzgsBEQgvBMgJAiQgWgBgNAFQgFgFADgFgAhqEVIAYgBQgGAKghAAQACgIANgBgAiqERQAKgLAXAAQAOAAAbADQgNAIgWADIgPABQgOAAgKgEgAAShhQgogJgRgiQAJAAAPgKQAPgJACABIABAHQAAADAJAGQAJAGAJgEQAKgDgDgPQArAJARgeQARgdgbgYIAIgKIANgTIADgGIAJAMQAEAAAAgGQgEgNgBgJIADgJQAWgJATAMQASANgJAXQgFAFgEgFQgGgHgDAAQgEABAEAGQAGAIgDAGQgBADgIAAQgIAAAAAEQADAKASgKQARAogVAkQgTAggpARQgdAMgbAAQgLAAgMgCgAAhhwQAeAEAcgVIAtgkQgIgBAAgJQAAgHgKgBQgEAvhRAYgACMkYQgHAHAHAFQAAgFAKgCQAJgCgCgIIgCAAQgIAAgHAFgAANiXQgJgIAJgJQAHgCAEAEQAFAFAEgBQgCARgHAAQgFAAgGgGgAADi0IACgRQAIAEAAAVQgLAAABgIgAgyjVQgaACgPgRIAEAAIAHAEQASAIAYAAQAcAAAAgEIgBgCQgBgDgGgCIAYAAQAUAAAQgDQgHACgIAEQgUARgLAHQgOgPggACgAAyjoQARgFAAgFIgJgLIAIAAIAIADQANgEAJgKQAFgEAEgGQgGASgOAOIgJAKQgOgCgMACgAhVjqIAAgBIACACgABykQIABgCIABAFIgCgDg");
	this.shape.setTransform(-6.9,2.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6600").s().p("AhwB7QgVgEgSgLIgPgJQgGgIgDgBQgJgTARgWQAOgSATgHQgHAWgBASQgBARAIAIQACANAdAVgAhjBuIgIgDIgLgIIgOgNQgEgMABgOQACgYAWAAQAFAHgGAMQgHAOABAGQAOAUAPAQIgKgBgAizBpQgMgVgBgEIgCgNQAGgXASgRQASgRAVAEIABAAIABADIgEABQgcACgQAhQgJARADAOQABAGAEAFIAAAKgAhVASIgOgHQgIgCgEgEQgBgJACgHQAEgSAMgOQBEhUBZA7IgCAMIAIAJIAIAGIgDAGQgUAjgogXIgBAGQABANAMAJIAAABQAAAGgiAAQgaAAgNgFIgDgCIgDgDQgEgCgDAFIACAHQAAAKgJAAQgMAAgGgEgACLgvQgYgOgeAKQAPgYAoAAQAkgBATASQgHABgDAEIgCAEIgCgCQgBAEABAEIgCAEIgKAXIAAAAQgKgUgUgLgABOg9QANgVAcgKQAkgNATAZQgXgGgeAIQgZAHgSAOIgDADgABVhRQAEgFAHgJQAJgPAfgMQgFAJAAAIIAAACQgMADgOAJIgVANg");
	this.shape_1.setTransform(-4,-22.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("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");
	this.shape_2.setTransform(0,-0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FAFFFF").s().p("AhRASQABgVAbgIQAbgHAQAQQACAWgJAMQgUgWgMAdQgUgCgMgTgABAAQQgDgPgMAAQgOAAAAAMQAAADABADIgCgCQgRgKACgOQADgQAfgLQAIAIANACQANADAIAIQgGAagUAIIgHABQACgCAAgEgAhegmIAAAAIABgBIACABIgDAAg");
	this.shape_3.setTransform(-6.7,-16.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgEgDIAXgBQgGAJgfAAQACgHAMgBg");
	this.shape_4.setTransform(-17.1,30.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FAFFFF").s().p("AgxAnIAAAAQgUgCgMgTIABgGQABAKAQAAQAQAAAAgQIgDgGQgDgFgHAAIgJABQAHgEAJgDQAbgHAQAQQACASgGAMQAAAMgZAAIgKgBgAAgAQQgMgIgBgJQADADAHAAQAPAAAAgOQAAgLgMAAIgCAAQAIgGALgEQACgCAIAAQAQAAALAJQAJAHAAAFIAAABIAAAAQgGAagUAHQgIADgIAAIgGAAQgMAAgDgHgAhegmIAAAAIABgBIACABIgDAAg");
	this.shape_5.setTransform(-6.7,-16.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFCC97").s().p("AhTEeQAQgDAJADQgIAIgpADQAHgHARgEgAg0EYQAFgHAAgEQhOgSgxAHQAOgMAdADQAtAGALgBQgIgIgbgBQgfgBgIgDQAVgHAfAHIAyAKQAOgYAYhBQAXhCAQgdQgNhugMgzQAbAFAvgCQgDAZAIAwQAJAxgDAaQgFAzgsBEQgsBHgKAiIgJAFQgRAAgLAEQgFgFADgFgAiqERQAKgLAXAAQAOAAAbADQgNAIgWADIgPABQgOAAgKgEgAAShhQgogJgRgiQAJAAAPgKQAPgJACABIABAHQAAADAJAGQAJAGAJgEQAKgDgDgPQArAJARgeQARgdgbgYIAIgKIANgTIADgGIAJAMQAEAAAAgGQgEgNgBgJIADgJQAWgJATAMQASANgJAXQgFAFgEgFQgGgHgDAAQgEABAEAGQAGAIgDAGQgBADgIAAQgIAAAAAEQADAKASgKQARAogVAkQgTAggpARQgdAMgbAAQgLAAgMgCgAAhhwQAeAEAcgVIAtgkQgIgBAAgJQAAgHgKgBQgEAvhRAYgACMkYQgHAHAHAFQAAgFAKgCQAJgCgCgIIgCAAQgIAAgHAFgAANiXQgJgIAJgJQAHgCAEAEQAFAFAEgBQgCARgHAAQgFAAgGgGgAADi0IACgRQAIAEAAAVQgLAAABgIgAgyjVQgaACgPgRIAEAAIAHAEQASAIAYAAQAcAAAAgEIgBgCQgBgDgGgCIAYAAQAUAAAQgDQgHACgIAEQgUARgLAHQgOgPggACgAAyjoQARgFAAgFIgJgLIAIAAIAIADQANgEAJgKQAFgEAEgGQgGASgOAOIgJAKQgOgCgMACgAhVjqIAAgBIACACgABykQIABgCIABAFIgCgDg");
	this.shape_6.setTransform(-6.9,2.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF6600").s().p("AhwB7QgVgEgSgLIgPgJQgGgIgDgBQgJgTARgWQAOgSATgHQgHAWgBASQgBARAIAIQACANAdAVgAhjBuIgIgDIgLgIIgOgNQgEgMABgOQACgYAWAAQAFAHgGAMQgHAOABAGQAOAUAPAQIgKgBgAizBpQgMgVgBgEIgCgNQAGgXASgRQASgRAVAEIABAAIABADIgEABQgcACgQAhQgJARADAOQABAGAEAFIAAAKgAhVASIgOgHQgIgCgEgEQgBgJACgHQAEgSAMgOQBEhUBZA7IgCAMIAIAJIAIAGIgDAGQgUAjgogXIgBAGQABANAMAJIAAABQAAAGgiAAQgaAAgNgFIgDgCIgDgDQgEgCgDAFIACAHQAAAKgJAAQgMAAgGgEgACogRQgKgUgTgKQgYgOgeAKQAPgYAoAAQAkgBATASQgHABgDAEIgCAEIgCgCQgBAEABAEIgCAEIgJAVIgBACIAAAAIgBgBgABOg9QANgVAcgKQAkgNATAZQgXgGgeAIQgZAHgSAOIgDADgABVhRQAEgFAHgJQAJgPAfgMQgFAJAAAIIAAACQgMADgOAJIgVANg");
	this.shape_7.setTransform(-4,-22.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("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");
	this.shape_8.setTransform(0,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},19).to({state:[{t:this.shape_1},{t:this.shape_2},{t:this.shape},{t:this.shape_3}]},56).wait(61));

	// Layer 2
	this.instance = new lib.TwiggsArmR();
	this.instance.parent = this;
	this.instance.setTransform(9.2,-13.9,1,1,0,0,0,1.4,-22.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(75).to({regX:1.5,regY:-22.3,scaleX:1,scaleY:1,rotation:-79.6,x:9.1},10).to({rotation:-77.2},26).to({regX:1.4,regY:-22.4,scaleX:1,scaleY:1,rotation:0,x:9.2},5).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.2,-35.3,56.6,70.7);


(lib.Twiggs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.TwiggsHeadArms();
	this.instance.parent = this;
	this.instance.setTransform(-5,21,1,1,0,0,0,1.9,-17.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(145));

	// Layer 3
	this.instance_1 = new lib.TwiggsLegR();
	this.instance_1.parent = this;
	this.instance_1.setTransform(38.7,-1.1,0.998,0.998,77.5,0,0,-11.9,25.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,rotation:0,x:21.7,y:-19.8},7).to({rotation:-30,x:23.1,y:-21.1},11).to({scaleX:1,scaleY:1,rotation:-18,x:22.4,y:-21},35).to({scaleX:1,scaleY:1,rotation:-30,x:23.1,y:-21.1},22).to({scaleX:1,scaleY:1,rotation:-18,x:22.4,y:-21},35).to({scaleX:1,scaleY:1,rotation:0,x:21.3,y:-20.9},21).to({scaleX:1,scaleY:1,rotation:47.9,x:33.2,y:-7.4},13).wait(1));

	// Layer 2
	this.instance_2 = new lib.TwiggsBack();
	this.instance_2.parent = this;
	this.instance_2.setTransform(7.4,14.4,0.998,0.998,37.1,0,0,-11.9,9.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:-11.7,scaleX:1,scaleY:1,rotation:0,x:5.3,y:10.8},7).wait(124).to({scaleX:1,scaleY:1,rotation:26.3,x:6.8,y:13.4},13).wait(1));

	// Layer 4
	this.instance_3 = new lib.TwiggsLegL();
	this.instance_3.parent = this;
	this.instance_3.setTransform(33.4,-2.6,0.998,0.998,120.1,0,0,24.2,11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:24.1,regY:11.3,scaleX:1,scaleY:1,rotation:0,x:7.6,y:-23.5},7).to({scaleX:1,scaleY:1,rotation:-51.2,x:7.7},11).to({rotation:-30.6},35).to({rotation:-51.2},22).to({rotation:-30.6},35).to({scaleX:1,scaleY:1,rotation:0,x:7.6},21).to({regY:11.2,scaleX:1,scaleY:1,rotation:89.7,x:25.3,y:-9.4},13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.1,-54.7,133.7,128.2);


(lib.SamPRESS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_40 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(40).call(this.frame_40).wait(1));

	// Samhead
	this.instance = new lib.SamHead();
	this.instance.parent = this;
	this.instance.setTransform(-2.1,42.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-3.7,y:60.2},2).wait(7).to({x:-3.8,y:52.2},3).wait(3).to({scaleX:1,scaleY:1,rotation:-46.6,x:7.8,y:97.9},2).to({regX:-2.2,regY:-1.8,rotation:-93.3,x:51.3,y:121.3},2).to({regX:0,regY:0,rotation:-139.9,x:106.6,y:110.8},2).to({regX:-2.2,regY:-1.8,rotation:-93.3,x:51.3,y:121.3},2).to({regX:0,regY:0,rotation:-46.6,x:7.8,y:97.9},2).to({scaleX:1,scaleY:1,rotation:0,x:-3.8,y:52.2},2).wait(2).to({x:-3.7,y:60.2},0).wait(8).to({x:-2.1,y:42.1},2).wait(2));

	// ArmL
	this.instance_1 = new lib.SamArmL();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-11.8,48,1,1,0,0,0,21.9,-12.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:-12.5,scaleX:1,scaleY:1,rotation:29.1,x:-16.3,y:64.8},4).wait(11).to({regY:-12.4,scaleX:1,scaleY:1,rotation:67.7,x:-12.5,y:61.7},0).to({regY:-12.5,rotation:-37.3,x:9.8,y:114.7},2).to({scaleX:0.99,scaleY:0.99,rotation:-122.7,x:64.5,y:131.4},2).to({regX:22,regY:-12.4,scaleX:1,scaleY:1,rotation:-260.5,x:126.1,y:101.4},2).to({regX:21.9,regY:-12.5,scaleX:0.99,scaleY:0.99,rotation:-122.7,x:64.5,y:131.4},2).to({scaleX:1,scaleY:1,rotation:-37.3,x:9.8,y:114.7},2).to({regY:-12.4,rotation:67.7,x:-12.5,y:61.7},2).wait(1).to({regY:-12.5,scaleX:1,scaleY:1,rotation:29.1,x:-16.3,y:64.8},0).wait(1).to({regY:-12.4,scaleX:1,scaleY:1,rotation:0,x:-11.8,y:48},8).wait(4));

	// ArmR
	this.instance_2 = new lib.SamArmR();
	this.instance_2.parent = this;
	this.instance_2.setTransform(6.2,48.6,1,1,0,0,0,-23.4,-8.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-15,x:16.6,y:63.3},4).wait(11).to({regX:21.1,regY:6.7,x:63.6,y:66.8},0).to({regY:6.5,scaleX:1,scaleY:1,rotation:-60.4,x:65.8,y:64.1},2).to({regY:6.6,scaleX:1,scaleY:1,rotation:-105.8,x:64.7,y:65.5},2).to({regX:21.2,regY:6.7,scaleX:1,scaleY:1,rotation:-151.1,x:63.6,y:66.7},2).to({regX:21.1,regY:6.6,scaleX:1,scaleY:1,rotation:-105.8,x:64.7,y:65.5},2).to({regY:6.5,scaleX:1,scaleY:1,rotation:-60.4,x:65.8,y:64.1},2).to({regY:6.7,scaleX:1,scaleY:1,rotation:-15,x:63.6,y:66.8},2).wait(1).to({regX:-23.4,regY:-8.8,x:16.6,y:63.3},0).to({rotation:0,x:6.2,y:48.6},9).wait(4));

	// torso
	this.instance_3 = new lib.SamTorso();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-2.2,29.2);

	this.instance_4 = new lib.SamChest();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-2.1,65.6,1.221,0.377);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:-2.3,y:47.6},2).to({scaleY:0.54,x:-2,y:55.9},2).wait(4).to({_off:true,scaleX:1.22,scaleY:0.38,x:-2.1,y:65.6},2).wait(19).to({_off:false,scaleX:1,scaleY:0.54,x:-2,y:55.9},2).wait(4).to({scaleY:1,x:-2.3,y:47.6},2).to({x:-2.2,y:29.2},2).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({_off:false},2).to({scaleX:1.07,scaleY:0.9,x:-1,y:79.2},2).wait(3).to({scaleX:1.07,scaleY:0.9,rotation:-46.6,x:32.1,y:117.6},2).to({scaleY:0.9,rotation:-93.3,x:83.5,y:117.3},2).to({scaleX:1.07,rotation:-139.9,x:117.9,y:95.9},2).to({scaleX:1.07,rotation:-93.3,x:83.5,y:117.3},2).to({scaleY:0.9,rotation:-46.6,x:32.1,y:117.6},2).to({scaleX:1.07,scaleY:0.9,rotation:0,x:-1,y:79.2},2).wait(2).to({scaleX:1.22,scaleY:0.38,x:-2.1,y:65.6},0).to({_off:true,scaleX:1,scaleY:0.54,x:-2,y:55.9},2).wait(10));

	// LegL
	this.instance_5 = new lib.SamLegL();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-7,10.7,1,1,0,0,0,1,30.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:-7.1,y:29.1},2).to({scaleX:1,scaleY:1,rotation:-86.5,x:-8.6,y:50.8},2).to({rotation:-101.5,x:-8.5},2).to({regX:0.9,rotation:-146.5,x:-8.6},2).to({y:67.3},2).to({x:-9.8,y:99.8},2).to({regX:0.8,scaleX:1,scaleY:1,rotation:-252.6,x:-5.5,y:100.5},3).to({scaleX:1,scaleY:1,rotation:-299.1,x:51.5,y:121.2},2).to({scaleX:0.99,scaleY:0.99,rotation:-345.9,x:100.1,y:108.8},2).to({regX:0.9,scaleX:1,scaleY:1,rotation:-392.5,x:135.1,y:82.5},2).to({regX:0.8,scaleX:0.99,scaleY:0.99,rotation:-345.9,x:100.1,y:108.8},2).to({scaleX:1,scaleY:1,rotation:-299.1,x:51.5,y:121.2},2).to({regX:0.9,scaleX:1,scaleY:1,rotation:-146.5,x:-9.8,y:99.8},2).wait(2).to({x:-8.6,y:67.3},0).to({y:50.8},2).to({regX:1,rotation:-101.5,x:-8.5},2).to({rotation:-86.5,x:-8.6},2).to({scaleX:1,scaleY:1,rotation:0,x:-7.1,y:29.1},2).to({x:-7,y:10.7},2).wait(2));

	// LegR
	this.instance_6 = new lib.SamLegR();
	this.instance_6.parent = this;
	this.instance_6.setTransform(2.8,11.1,1,1,0,0,0,-2.1,31.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:2.7,y:29.5},2).to({rotation:90,x:2.9,y:50},2).to({scaleX:1,scaleY:1,rotation:105,x:3.5,y:49.4},2).to({scaleX:1,scaleY:1,rotation:150,x:5.3,y:47.5},2).to({y:64},2).to({x:8.5,y:98.2},2).wait(3).to({regY:31.7,scaleX:1,scaleY:1,rotation:142.9,x:42.3,y:133.8},2).to({regX:-2,regY:31.6,rotation:76.7,x:100.4,y:122},2).to({regX:-2.1,scaleX:1,scaleY:1,rotation:10.1,x:122.9,y:75.4},2).to({regX:-2,scaleX:1,scaleY:1,rotation:76.7,x:100.4,y:122},2).to({regX:-2.1,regY:31.7,rotation:142.9,x:42.3,y:133.8},2).to({regY:31.6,scaleX:1,scaleY:1,rotation:150,x:8.5,y:98.2},2).wait(2).to({x:5.3,y:64},0).to({y:47.5},2).to({scaleX:1,scaleY:1,rotation:105,x:3.5,y:49.4},2).to({scaleX:1,scaleY:1,rotation:90,x:2.9,y:50},2).to({rotation:0,x:2.7,y:29.5},2).to({x:2.8,y:11.1},2).wait(2));

	// RingL
	this.instance_7 = new lib.RingL();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-46.9,-64.1,1,1,0,0,0,2,-67.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regY:-67.8,rotation:4.8},4).wait(24).to({regY:-67.9,rotation:0},9).wait(4));

	// RingR
	this.instance_8 = new lib.RingR();
	this.instance_8.parent = this;
	this.instance_8.setTransform(47.3,-69.2,1,1,0,0,0,0,-62.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:-0.1,rotation:-5.8,x:47.2},4).wait(24).to({regX:0,rotation:0,x:47.3},9).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.9,-87.5,119.6,166.9);


(lib.SamBod = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3A3839").s().p("AAAAAIABAAIAAAAIgBAAg");
	this.shape.setTransform(10.6,26.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF00").s().p("AhkAuIgCgFQgCgJAAgOQAAgYATgZQAcgkA0AAQBEAAAbAlQAPAVAAAZQAAANgDAGIgCADIgFAKQgpgJg1AGQgzAGgsARIgGgWg");
	this.shape_1.setTransform(0,12.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F1D38D").s().p("AgaC2QgEADgHgCQgLgDgGAAIAAgDQgZgFgRgLQgSgLgEgLIgHgCQgFgwACgYQAEgDAJAAQgMgcAGgeQADgRAQgiQAQgiADgSQAGgegMgcQA8gVAjgCQgNBXAJAZQAHgQABgrQABgrAEgNIAlADQAWACAKAFQgOAmAYAxIAUAoQALAWACATQACARgCAjQADAFgBAIQAAAmgEASIgDAJIgBAQQAAAKgLAGQgLAHgHALQgPAJhEAAQgSAAgRgCg");
	this.shape_2.setTransform(0.1,36.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ah8CnIgFgFIADgBQgGgJAAgfQAAgfgHgIQADgBAFADQACACAAgHQgDgpAOglQATglAJgVQAEgDAAgHIAAgEIgBgCIgBgGIgCgLQgFgdgLgqIAGAAIABAFIAGAXQAsgRAzgGQA1gGAqAJIAEgKIACgDIAIABIgFAMQgDALgKAWQgGAmAXAoQAbAtACAbQACAQgFBhIgDAAIgFADQAEgSAAgmQABgJgEgEQADgjgCgTQgDgSgKgWIgUgnQgYgxAOgmQgLgGgVgBIglgDQgFAMgBAsQAAArgHAQQgKgZANhXQgjACg7AVQAMAcgGAeQgEASgPAiQgQAggEASQgGAfANAcQgKAAgEADQgBAYAFAwIgCAAg");
	this.shape_3.setTransform(-0.1,33.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(240));

	// Layer 2
	this.instance = new lib.SamLegL();
	this.instance.parent = this;
	this.instance.setTransform(-4.9,11.8,1,1,0,0,0,1,30.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({scaleX:1,scaleY:1,rotation:-20.6,x:-4.8},9).to({scaleX:1,scaleY:1,rotation:0,x:-4.9},14).to({regX:0.9,rotation:-3.3,x:-5},22).to({regY:30.5,scaleX:1,scaleY:1,rotation:-39.1,x:-8.3,y:11.5},31).to({regX:1,scaleX:1,scaleY:1,rotation:-120,x:-9.4,y:13.7},18).wait(56).to({regY:30.6,rotation:0,x:-4.9,y:11.8},21).wait(50));

	// Layer 3
	this.instance_1 = new lib.SamLegR();
	this.instance_1.parent = this;
	this.instance_1.setTransform(4.9,12.1,1,1,0,0,0,-2.1,31.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({regX:-2,regY:31.5,scaleX:1,scaleY:1,rotation:14.5},9).to({regX:-2.1,regY:31.6,scaleX:1,scaleY:1,rotation:0},14).to({rotation:4},22).to({scaleX:1,scaleY:1,rotation:37.3,x:6.8,y:11},31).to({regX:-2,regY:31.5,scaleX:1,scaleY:1,rotation:113.3,x:10,y:12.5},10).wait(64).to({regX:-2.1,regY:31.6,scaleX:1,scaleY:1,rotation:0,x:4.9,y:12.1},21).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.1,-55.5,28.2,110.1);


(lib.Sam = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Samhead
	this.instance = new lib.SamHead();
	this.instance.parent = this;
	this.instance.setTransform(-2.1,42.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(38).to({x:-3.8,y:53.5},10).wait(76).to({x:-2.1,y:42.1},9).wait(1));

	// samBod
	this.instance_1 = new lib.SamBod();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.3,40.5,1,1,0,0,0,2.6,43);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(38).to({x:-2,y:51.9},10).wait(13).to({scaleX:1,scaleY:1,rotation:-11.6},6).to({regY:42.9,scaleX:1,scaleY:1,rotation:26.6,x:0.6,y:52.5},12).to({regX:2.5,regY:43,scaleX:1,scaleY:1,rotation:25.5,x:0.4},18).to({regX:2.6,scaleX:1,scaleY:1,rotation:0,x:-2,y:51.9},7).wait(20).to({x:-0.3,y:40.5},9).wait(1));

	// Layer 2
	this.instance_2 = new lib.SamArmL();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-11.8,48,1,1,0,0,0,21.9,-12.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(38).to({regY:-12.5,rotation:15,x:-13,y:58.5},10).wait(76).to({regY:-12.4,rotation:0,x:-11.8,y:48},9).wait(1));

	// Layer 3
	this.instance_3 = new lib.SamArmR();
	this.instance_3.parent = this;
	this.instance_3.setTransform(6.2,48.6,1,1,0,0,0,-23.4,-8.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(38).to({rotation:-7.5,x:9.4,y:58.4},10).wait(76).to({rotation:0,x:6.2,y:48.6},9).wait(1));

	// RingL
	this.instance_4 = new lib.RingL();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-46.9,-64.1,1,1,0,0,0,2,-67.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(38).to({scaleX:1,scaleY:1,rotation:2.2},10).wait(76).to({scaleX:1,scaleY:1,rotation:0},9).wait(1));

	// RingR
	this.instance_5 = new lib.RingR();
	this.instance_5.parent = this;
	this.instance_5.setTransform(47.3,-69.2,1,1,0,0,0,0,-62.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(38).to({regY:-62.6,rotation:-3.3},10).wait(76).to({regY:-62.7,rotation:0},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.9,-87.5,119.6,166.9);


(lib.pretestbackblink = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pretestback("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(51.9,12.5,1,1,0,0,0,51.9,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},7).to({startPosition:0},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,103.9,25);


(lib.MonkeySwing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.MonkeyLegR();
	this.instance.parent = this;
	this.instance.setTransform(0.4,17.5);

	this.instance_1 = new lib.MonkeyLegL();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-16.4,-1.8);

	this.instance_2 = new lib.MonkeyArmBanana();
	this.instance_2.parent = this;
	this.instance_2.setTransform(16.2,-11.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgUAMQAEgDAGgCQAIgCgBAHQgEgBgGACIgDABQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAgAAIgBQAFgIAHgEQACAEgGAIQgFAHgGAEQgDgEAGgHg");
	this.shape.setTransform(3.4,-17.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#00FFFF"],[0,1],-9.7,1.7,29.5,1.7).s().p("AgEAAIAIgBIABACIgFABQgBAAAAAAQgBAAgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape_1.setTransform(16.2,-28.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FF9900","#FFF8EE","#FFFFFF","#FFEED5","#FFA31B"],[0,0.255,0.494,0.761,0.976],-16,35.9,22.3,-2.4).s().p("AgrCdIgIgEQAAgDACgEQADgDgBgFIgSAAQAHgHgHgWQgFgSALgBQgEgOgCgBQAAAHgHAQQgFANABANQADACAEgFQADgEABAEIgEAHQAAABAEAEQgMAEAEAHQADAGgBAGIgIAAIgJAAIAFgGQAJgIgOgEIgEAFIgFgFIABgCIgCAAIgDgDIACgDQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBABIgEgEQAKgBANgIQgIAEAAgIQAAgKgDAAQADAJgJAEQgHADAHAEIgLAAIAAAAQAEgOAVgdQgHABACgGQAEgGgFgBQgCARgYAMIACAPQAAADgEACIgGgBQAAgIAGgLIABgBIAAAAIAKgOQASgVACgJQgBAGgKgBQABgDANgOQAIgJgKAAQAGgBAIgHIACgBQAHgGAFgCIALAFQAHACAAAHIgHARQgEAKACALQAQgmAKgNQASgVAggFQAPAKAAgKQAAgDgGADQgFADgBgGQAJgCALgMQALgMAJgDQAHAGgEAKQgEALABACIABAAQADACAJgIQAMgKgQALQAEgHgFgJQgEgJgGgEQANgCAUgFQgBAIAEAIIAEACQgGACgGAIQgJALAJgDQgCgDAIgFQAIgEABgFIAFABIAGABIAFACIgEANIgCAEQgNAagXAOQAHgBgDAEQgDAGAEAAIAHgMQAEgHAHgBQAAAFgDAGQAIAAAMgFQAFgJABgNQACACAIAEIAEABIgSARIAAABIgHAFQgNANgRgDIAAAAIgBAAIgCgBIgRARQgQgMgVgFQgagHgQAKQgCAQARAHQAZAKACABQgWAFgRAVQAGAEAAAGIgBAEQgDAMADAGIACgDIAAgBIABgCQABgFACgBIgBAJQAAAGADAAQADgCADgIQACgDACgBQABAAAAAAQABAAAAABQABAAAAAAQABABABAAIAAACIAAABQgBAIgJAHQgIAHgBAHIgBAAIgBgLQAAgHgEADIADAPQgQABgQAHQAAgIAGgGIADAIQAAgLgEgKIgFgQIACAYQABAMgGAHQAAgEgEgDgAgxBlQgFAUAHAGQgCgKAIgZQAGgVgHgHQABALgIAagAgdBwQgDAJAFADQAEgFABgJQAAgKgFgFQABAGgDALgAgSAkIgHAQQADgBACgDIAEgIIAAAAIABgDIABgFQAAgEgCgCIgCAKgAhGAnQgIAGAFAEQAAgBALgMQAHgIgHgCQABAGgJAHgAhKAZIgBABQgOAXAKgIQAKgGgEgLIgBABgAAbARIgCAMIgCADIAEgDQADgDACgHQADgLgDgFQgDAFgCAJgAArgSIAHASQAEAIAPABIAMgQQgEAAgLAGIgIAEQAAgCAGgEIAAAAIABgBQAFgEgEgCQgGAAgFAGQABgLgHAFIAFgHQADgFgFgCQgBAEgIACgAiMB0IABgBIAAABIAAAAgAhEgBQAaAGAagGQgHAGgTACIgEAAQgRAAgFgIgAAKgkQAGgbANgFQABgEgGgBQgGAAAAgDQgMAZgVAUQgZAXgcABQgiACAAgTQAEgEADAEQAFAFACABQAHAAAFgJQABgJgKAAQAUgKAOggQATguAFgGQADACANABQALABADAEQABgFAOgGQAOgGADgJQABAAAHADQAFACABgFQAIAHAAAQQABARgJAGQADAFAMAEQAFABADgFQAEgFAFAAIAEAJQADAEAHgBQAEgBgGgGQgFgHAEgBQAJABAAAJQAAAKgGADQAFgCAHgMQgHgNgEgEQgFgFgTAFQAKgKAZgCQANASgNAXQgOAYgdgBQgBgMgCAAQgDACABAKQACAIgGADQgDAAACgGQACgGgEgDIgXAjQgOAUgRAGQAEgDAIgdgAhGgSQADAAADgCQAEgDAEACQACgOgLgEQgHAKACALgAgFhYQgFAOADAJQAKgBAGgRQAHgRgKgHQgHAFgEAOgAghhBQAVgggPgFQgWAgAQAFgAASijIAAABQgJAEgHABQAHgEAJgCg");
	this.shape_2.setTransform(5.3,-15.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("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");
	this.shape_3.setTransform(4.6,-16.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.MonkeySwing, new cjs.Rectangle(-29.2,-34.9,58.4,69.8), null);


(lib.MonkeyPRESS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_17 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(17).call(this.frame_17).wait(1));

	// Bod
	this.instance = new lib.MonkeySwing();
	this.instance.parent = this;
	this.instance.setTransform(0.8,0.1,1,1,0,0,0,5.6,-19);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:90,x:-5,y:-12.9},2).to({regY:-19.1,scaleX:1,scaleY:1,rotation:159,x:0.1,y:-25.3},2).to({regY:-19,rotation:245.9,x:6.5,y:-9.6},2).to({scaleX:1,scaleY:1,rotation:360,x:0.8,y:0.1},2).wait(1).to({rotation:450,x:-5,y:-12.9},2).to({regY:-19.1,scaleX:1,scaleY:1,rotation:519,x:0.1,y:-25.3},2).to({regY:-19,rotation:605.9,x:6.5,y:-9.6},2).to({scaleX:1,scaleY:1,rotation:720,x:0.8,y:0.1},2).wait(1));

	// Arm
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#CCCCCC","#E49D34"],[0,1],-987,-24.2,257.3,-24.2).s().p("AgCACIAAgEIAAgNQAEAHABAIQAAAHgDAJQgDgDABgLg");
	this.shape.setTransform(-2.1,-21.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAFFFF").s().p("AAAAAIABAAIgBAAg");
	this.shape_1.setTransform(2.3,-24.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#4B2E01","#E49D34"],[0,1],34.9,225.6,-64.4,-4.7).s().p("Ag6AmIABgEIAHgDIgFAHIgBADIABACIgCABIgBACIAAgIgAgpAAIAEgCQAhgTAZgEQADgCAFgJQAEgIAFgBQALACALgCQgGALABAOQgTAKgeAKQgjAMgRAPQAJgNgEgOg");
	this.shape_2.setTransform(-1.6,-29.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgQB2IgIACQgCAAgBgFIAAgRIADgfIAHgrIABgJQgGACgGAAQgGAAgGgDIgTgLIgBAEIgCgOIACgCIABgBIAAgDIAAgCIAFgHIABAAIABgCIADgCQAQgPAjgNQAegKAUgKIABAHIAAAAIABABIgCABQgFAQAHARIAGAOQADAMAAAJQgDgDgIAAQAMAjgSALIAAABQAHAOABANQACAXgPAPIAFACIAAAAIgLADIAAgKQAAgFgGACQAAAGgGAFQgIAFgBAEIAFgBIgIAGQgJAGgMAGQgGACgHAAQAFgLACgOgAgECCQgIADgBAFQAHAAAHgFQAIgGgDgDQgCADgIADgAASBzQAJgPAEgIQABABABAAQAAABABAAQAAAAAAgBQAAAAABgBQgJgEAAgHIAAgDQAEgBACACIABABQACAEADAAIAAgGQgBgMgGgDQgCABgEgFQgEgEgDADQAEgIgDgDQgFgDgCgEIAAgLQAIAGAAgIQABgLACgBIAAAiQAHAAAEgFQAFgHgEgRQgIAEgBgEQAGgLAEgKIAAgBQAEgLAAgLQABgTgKgQIgYAKQgTAIgEALQABgBAAABQABAAAAAAQABAAAAAAQABAAAAABQACACAAAGQABAKgHgCQgCgLgFgEQgDgDgDgBQgIgBgGAIIgBACQgHALADAIQAEAKARAAQAKAAAQgMQASgQAGgCQAIAJAEANQgDAGgGACQgDAAgCgEQgBgEgCAAQgBAEABALQgBAKgFAAQgEgDABgOQABgNgEgDQgGAKABAYIAAAJQAAATgBAGQgCAAgCgEQgBgFgDAAQgKAOAHAdIAGAXIAFgOQACgIAHgBQADAHgCAFIgHAIIAGgBQAGAAADAEgAgKAbIgBAFQAAALADADQADgJAAgHQAAgJgFgGIAAAMgAA0gUIgBALQAAAFAHACQAHgEgMgOIgBgCIAAACgAgIBCQAHABgBAOQAEgBABgGQABgJACgCIAIAAQgEAVgSACQgDgRADgDgAgwg/IgEgCIACgDQAAgBgJgNQgCgPAPgLQAOgMATAEQABgHAKgCIAQgDQAJgCAGgGQAFgHAEABQAXACgBAgIACgBIgGAJQgLADgKgCQgGABgEAIQgFAJgCACQgZAEgiATIgDACIgEgJgAgrhiQgMAOAKAOQAJgCAOgHQgBgJADgJQAEgMAAgFQgRADgKANgAgGhwIgKAYQALABALAIQAKgHgBgOQgBgVAAgEIAAAAQgOAAgGANgAAhiGQgHAEgEAJQgDAKAEAJQAJACAEgKQADgLAEgBIAAAKQAAAGAGgCQAEAAACgGQgBgPgHgFQgDgCgDAAQgEAAgEACg");
	this.shape_3.setTransform(-1.2,-24.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FF9900","#FFF8EE","#FFFFFF","#FFEED5","#FFA31B"],[0,0.255,0.494,0.761,0.976],-14.8,64,23.5,25.7).s().p("AgSCKQABgGAIgDQAJgCABgEQADAEgHAFQgHAGgHAAIgBAAgAASByQAGgEAAgHQAGgCAAAGIAAAJQgIADgIAEIgFAAQABgDAIgGgAgBBwIAGgJQACgFgDgGQgGAAgDAJIgFAOIgGgXQgGgdAJgOQADAAABAEQACAFADgBQACgFgBgTIAAgJQgBgYAFgLQAEADgBANQgBAPAEADQAFgBABgJQgBgLABgEQACAAABADQACAFADgBQAHgCACgFQgEgOgIgJQgGADgSAQQgQAMgKgBQgRAAgEgJQgDgJAHgKIABgCQAHgIAHABQAEAAACADQAFAFACAKQAHACgBgKQAAgFgCgDQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQAEgLATgIIAYgJQAKAPgBAUQAAAKgEAMIgBAAIABAAQgEAKgGAMQABAEAIgEQAEARgFAHQgEAEgHABIAAgjQgCACgBAKQAAAIgIgGIAAAMQACADAFADQADADgEAIQADgDAEAFQAEAFACgBQAGACABAMIAAAGQgDAAgCgEIgBAAQgCgDgEABIAAADQABAHAIAFQAAAAgBABQAAAAAAAAQgBAAAAAAQgBgBgBAAQgDAIgKAPQgFgGgJADgAgNBWQASgDAEgUIgIAAQgBABgBAJQgBAHgFAAQABgOgHAAQgDADADARgAAugJIABgMIAAgBIABACQAMAOgHAEQgHgDAAgEgAgwhjQAKgNARgCQAAAFgEALQgDAJABAJQgOAHgJACQgKgNAMgPgAgVhYIAKgZQAHgNANABQAAAEABAUQABAOgKAHQgLgHgLgBgAAShnQgEgJADgJQAEgJAHgEQAIgFAGAEQAHAFABAQQgCAGgEAAQgGABAAgFIAAgLQgEACgDALQgDAIgHAAIgDgBg");
	this.shape_4.setTransform(-0.7,-24.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(18));

	// Branch
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#4B2E01","#E49D34"],[0,1],27,230.3,-72.3,0).s().p("AiiCUQgKgDgKgYQgKgXAAgLIAKg3IABABQAAAAABAAQAAAAAAABQAAAAAAABQAAABAAABIAAADIAGAhQATgGAkgVQAEAPgJANIgFAFIgHACIgBAEIAAAJIAAAAQgEAHgGAQQgHATgIAAIAAADIAFAGIAAACIgBAAIgCABIgCAAgAijBnIgIAWQAKgCAFgNIAIgUQgLABgEAMgAgSABQALgBALgHIAlgWIgBgLIAAgEQAAgJgTgXIAAAAIgCgDIgBAAIAAAAIgDgEIgCgCIgDgIIABgIIgJgQIgBgCIABABIABAAQAMAKAAADQAAAKAEAEIAFAFQAFABAJAMIACACQACgEADgDIAGgGIABgGQgPgfgBgFQABAFANAJQAEADAAAHQAAAFAIAAQAEAAAOgJQgDAMgMAMQgBAFgGAEQgIAPgBAEIAAABIAAABQAEAFAAAHIAAABQADACAFACQAEAMgKAMQgHAJAHAGQgJgEgOAFQgPAHgIgFQgJAJgWALQgBgOAFgMgABMggQgGgHgBgFQANgKAvgJIgBgLIgFgRIAAAAQgEgDAAgGIACgPQAAgSgVgOIAAAAQARAHAFAGQACAEAAAMIAAAMQgBAAAAABQAAAAgBAAQAAABAAABQAAAAAAABIAFADQAFAAACgBIAEgBIAEgCIgBADQgEAFgBAHIAAADIABAFIAAABIABAEIgBAJQACAIAEACIABABIAAAAIAWAIQAUAIAHAMQgDADgRABQgFgVgPAAQgEABAAAKQABAJgDABQgagOgoATQAAgHgFgHgACRhqIgBABIgBABgACUhtQALgNAFgCQgEAKgNAFg");
	this.shape_5.setTransform(6.3,-34.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#07A335").s().p("AAuBsIgEgUQgMgDgTAFQgWAHgJAAQAFgOAPgHQAOgHAQACIAAglQAHAKAJAFQAMAGAJgKQACACADAPQADAKAHACQgOACgFAOIgHAeQgHgCgDgKgAA6geQABgRgGgIIAUgEQALAAANAIIAIAFIACABIALALQAJAIAGABQgdAVgUAAQgWAAgEgagAiEhSQAAgGALgNQANgSATAAIAEAAQgHAHAAAXQAGAZgoAAIgGgSg");
	this.shape_6.setTransform(19.1,-41.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#046A22").s().p("AACBaQgKABgDAQQgDgBgEgIQgDgHgFgBQADgFAJgBQgDgLAGgXQADABACAHQACAFAEABQADAAAIgFQAHgEAHAAQgPAZAVgBQgBAEgIAKQgHAIABAJQgNgQgBgEgABZg3IgDAAIgDgIQAAgFAQgGIAWgKQABADAAAEQAAAJgFAJIgEAAQgRAAgFAEIgCAAgAhkhAQgVgHAAgRQADgOAAgHQAPAGAGAOQADAJAEACIAAAEQAAAJABAGIgLgFg");
	this.shape_7.setTransform(14.4,-42.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("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");
	this.shape_8.setTransform(11,-36.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(18));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34,-53.9,68,107.9);


(lib.Monkey = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Bod
	this.instance = new lib.MonkeySwing();
	this.instance.parent = this;
	this.instance.setTransform(0.8,0.1,1,1,0,0,0,5.6,-19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:5.7,regY:-18.9,scaleX:1,scaleY:1,rotation:36.6,x:-3.9,y:-9},6).to({regX:5.6,regY:-19,scaleX:1,scaleY:1,rotation:0,x:0.8,y:0.1},4).wait(15).to({rotation:-100.7,x:2.8,y:-6.3},6).to({regY:-19.1,rotation:-89.7,x:2.5,y:-5.6},13).to({regY:-19,rotation:0,x:0.8,y:0.1},5).wait(16));

	// Arm
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#CCCCCC","#E49D34"],[0,1],-987,-24.2,257.3,-24.2).s().p("AgCACIAAgEIAAgNQAEAHABAIQAAAHgDAJQgDgDABgLg");
	this.shape.setTransform(-2.1,-21.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAFFFF").s().p("AAAAAIABAAIgBAAg");
	this.shape_1.setTransform(2.3,-24.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#4B2E01","#E49D34"],[0,1],34.9,225.6,-64.4,-4.7).s().p("Ag6AmIABgEIAHgDIgFAHIgBADIABACIgCABIgBACIAAgIgAgpAAIAEgCQAhgTAZgEQADgCAFgJQAEgIAFgBQALACALgCQgGALABAOQgTAKgeAKQgjAMgRAPQAJgNgEgOg");
	this.shape_2.setTransform(-1.6,-29.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgQB2IgIACQgCAAgBgFIAAgRIADgfIAHgrIABgJQgGACgGAAQgGAAgGgDIgTgLIgBAEIgCgOIACgCIABgBIAAgDIAAgCIAFgHIABAAIABgCIADgCQAQgPAjgNQAegKAUgKIABAHIAAAAIABABIgCABQgFAQAHARIAGAOQADAMAAAJQgDgDgIAAQAMAjgSALIAAABQAHAOABANQACAXgPAPIAFACIAAAAIgLADIAAgKQAAgFgGACQAAAGgGAFQgIAFgBAEIAFgBIgIAGQgJAGgMAGQgGACgHAAQAFgLACgOgAgECCQgIADgBAFQAHAAAHgFQAIgGgDgDQgCADgIADgAASBzQAJgPAEgIQABABABAAQAAABABAAQAAAAAAgBQAAAAABgBQgJgEAAgHIAAgDQAEgBACACIABABQACAEADAAIAAgGQgBgMgGgDQgCABgEgFQgEgEgDADQAEgIgDgDQgFgDgCgEIAAgLQAIAGAAgIQABgLACgBIAAAiQAHAAAEgFQAFgHgEgRQgIAEgBgEQAGgLAEgKIAAgBQAEgLAAgLQABgTgKgQIgYAKQgTAIgEALQABgBAAABQABAAAAAAQABAAAAAAQABAAAAABQACACAAAGQABAKgHgCQgCgLgFgEQgDgDgDgBQgIgBgGAIIgBACQgHALADAIQAEAKARAAQAKAAAQgMQASgQAGgCQAIAJAEANQgDAGgGACQgDAAgCgEQgBgEgCAAQgBAEABALQgBAKgFAAQgEgDABgOQABgNgEgDQgGAKABAYIAAAJQAAATgBAGQgCAAgCgEQgBgFgDAAQgKAOAHAdIAGAXIAFgOQACgIAHgBQADAHgCAFIgHAIIAGgBQAGAAADAEgAgKAbIgBAFQAAALADADQADgJAAgHQAAgJgFgGIAAAMgAA0gUIgBALQAAAFAHACQAHgEgMgOIgBgCIAAACgAgIBCQAHABgBAOQAEgBABgGQABgJACgCIAIAAQgEAVgSACQgDgRADgDgAgwg/IgEgCIACgDQAAgBgJgNQgCgPAPgLQAOgMATAEQABgHAKgCIAQgDQAJgCAGgGQAFgHAEABQAXACgBAgIACgBIgGAJQgLADgKgCQgGABgEAIQgFAJgCACQgZAEgiATIgDACIgEgJgAgrhiQgMAOAKAOQAJgCAOgHQgBgJADgJQAEgMAAgFQgRADgKANgAgGhwIgKAYQALABALAIQAKgHgBgOQgBgVAAgEIAAAAQgOAAgGANgAAhiGQgHAEgEAJQgDAKAEAJQAJACAEgKQADgLAEgBIAAAKQAAAGAGgCQAEAAACgGQgBgPgHgFQgDgCgDAAQgEAAgEACg");
	this.shape_3.setTransform(-1.2,-24.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FF9900","#FFF8EE","#FFFFFF","#FFEED5","#FFA31B"],[0,0.255,0.494,0.761,0.976],-14.8,64,23.5,25.7).s().p("AgSCKQABgGAIgDQAJgCABgEQADAEgHAFQgHAGgHAAIgBAAgAASByQAGgEAAgHQAGgCAAAGIAAAJQgIADgIAEIgFAAQABgDAIgGgAgBBwIAGgJQACgFgDgGQgGAAgDAJIgFAOIgGgXQgGgdAJgOQADAAABAEQACAFADgBQACgFgBgTIAAgJQgBgYAFgLQAEADgBANQgBAPAEADQAFgBABgJQgBgLABgEQACAAABADQACAFADgBQAHgCACgFQgEgOgIgJQgGADgSAQQgQAMgKgBQgRAAgEgJQgDgJAHgKIABgCQAHgIAHABQAEAAACADQAFAFACAKQAHACgBgKQAAgFgCgDQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQAEgLATgIIAYgJQAKAPgBAUQAAAKgEAMIgBAAIABAAQgEAKgGAMQABAEAIgEQAEARgFAHQgEAEgHABIAAgjQgCACgBAKQAAAIgIgGIAAAMQACADAFADQADADgEAIQADgDAEAFQAEAFACgBQAGACABAMIAAAGQgDAAgCgEIgBAAQgCgDgEABIAAADQABAHAIAFQAAAAgBABQAAAAAAAAQgBAAAAAAQgBgBgBAAQgDAIgKAPQgFgGgJADgAgNBWQASgDAEgUIgIAAQgBABgBAJQgBAHgFAAQABgOgHAAQgDADADARgAAugJIABgMIAAgBIABACQAMAOgHAEQgHgDAAgEgAgwhjQAKgNARgCQAAAFgEALQgDAJABAJQgOAHgJACQgKgNAMgPgAgVhYIAKgZQAHgNANABQAAAEABAUQABAOgKAHQgLgHgLgBgAAShnQgEgJADgJQAEgJAHgEQAIgFAGAEQAHAFABAQQgCAGgEAAQgGABAAgFIAAgLQgEACgDALQgDAIgHAAIgDgBg");
	this.shape_4.setTransform(-0.7,-24.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(66));

	// Branch
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#4B2E01","#E49D34"],[0,1],27,230.3,-72.3,0).s().p("AiiCUQgKgDgKgYQgKgXAAgLIAKg3IABABQAAAAABAAQAAAAAAABQAAAAAAABQAAABAAABIAAADIAGAhQATgGAkgVQAEAPgJANIgFAFIgHACIgBAEIAAAJIAAAAQgEAHgGAQQgHATgIAAIAAADIAFAGIAAACIgBAAIgCABIgCAAgAijBnIgIAWQAKgCAFgNIAIgUQgLABgEAMgAgSABQALgBALgHIAlgWIgBgLIAAgEQAAgJgTgXIAAAAIgCgDIgBAAIAAAAIgDgEIgCgCIgDgIIABgIIgJgQIgBgCIABABIABAAQAMAKAAADQAAAKAEAEIAFAFQAFABAJAMIACACQACgEADgDIAGgGIABgGQgPgfgBgFQABAFANAJQAEADAAAHQAAAFAIAAQAEAAAOgJQgDAMgMAMQgBAFgGAEQgIAPgBAEIAAABIAAABQAEAFAAAHIAAABQADACAFACQAEAMgKAMQgHAJAHAGQgJgEgOAFQgPAHgIgFQgJAJgWALQgBgOAFgMgABMggQgGgHgBgFQANgKAvgJIgBgLIgFgRIAAAAQgEgDAAgGIACgPQAAgSgVgOIAAAAQARAHAFAGQACAEAAAMIAAAMQgBAAAAABQAAAAgBAAQAAABAAABQAAAAAAABIAFADQAFAAACgBIAEgBIAEgCIgBADQgEAFgBAHIAAADIABAFIAAABIABAEIgBAJQACAIAEACIABABIAAAAIAWAIQAUAIAHAMQgDADgRABQgFgVgPAAQgEABAAAKQABAJgDABQgagOgoATQAAgHgFgHgACRhqIgBABIgBABgACUhtQALgNAFgCQgEAKgNAFg");
	this.shape_5.setTransform(6.3,-34.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#07A335").s().p("AAuBsIgEgUQgMgDgTAFQgWAHgJAAQAFgOAPgHQAOgHAQACIAAglQAHAKAJAFQAMAGAJgKQACACADAPQADAKAHACQgOACgFAOIgHAeQgHgCgDgKgAA6geQABgRgGgIIAUgEQALAAANAIIAIAFIACABIALALQAJAIAGABQgdAVgUAAQgWAAgEgagAiEhSQAAgGALgNQANgSATAAIAEAAQgHAHAAAXQAGAZgoAAIgGgSg");
	this.shape_6.setTransform(19.1,-41.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#046A22").s().p("AACBaQgKABgDAQQgDgBgEgIQgDgHgFgBQADgFAJgBQgDgLAGgXQADABACAHQACAFAEABQADAAAIgFQAHgEAHAAQgPAZAVgBQgBAEgIAKQgHAIABAJQgNgQgBgEgABZg3IgDAAIgDgIQAAgFAQgGIAWgKQABADAAAEQAAAJgFAJIgEAAQgRAAgFAEIgCAAgAhkhAQgVgHAAgRQADgOAAgHQAPAGAGAOQADAJAEACIAAAEQAAAJABAGIgLgFg");
	this.shape_7.setTransform(14.4,-42.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("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");
	this.shape_8.setTransform(11,-36.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(66));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34,-53.9,68,107.9);


(lib.MickPRESS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_34 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(1));

	// Back
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006600").s().p("AgUgGQANgLAggDIA2gFQAWAygDAiQhaAFgRAFQADgxgOgagAiFAzQAMgJADgmQADglAOgIQA0AIAJAbQgQADgdAjQgSAWgRAAQgGAAgHgDgABXgqIgngaQAngDAuAmQgGADgHAAQgQAAgRgMg");
	this.shape.setTransform(-49.5,54.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003300").s().p("AhZBGQgVgEgWAAQAGgUAUgRIAjgdQAOAFACAYQABAOgBAfIgDAAQgNAAgSgEgABGAKQgJgbgBgJQAUAIA1AEQgJAdgJANQgOAUgZACQABgTgHgVgAhUghQgTgLgGgJQAmgWAsADQAxACAPAlQhCgFgeAYQgGgIgTgLg");
	this.shape_1.setTransform(-46,54.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCC00").s().p("AiYCLQgCgGAEgFQADgGgBgGQAFABAJgDQAIgDAIABQgCAFgJADQgKADgCAFQABAHALABIATAAQAFAEgVAAIgagBgAgxB5QgRgFgFAAQADgFAOABQASABAEgBQgBAJgLAAIgFAAgAA4BTQAlgTAFghQACAlgiAXQgeATgpACIA9gdgABVBpIgSgEQACgHAVgUQAMAAgCALQgCANAEADQgDAEgIAAIgGAAgABxBhQgBgFALABQALABgBgFQAHAFgIAEQgLAEAAADQgDgIgFAAgABHgOQAOgYgQgeQgTgiAFgRQAGACAQAMQAMAJARgDQAKgJgKgdQAwgKAAAkQgBANgJAMQgLANgQABQgHAAgIgGQgJgFgHgBQAAAJAHAEIANAHQAMABAMgIQAOgIAIgBQgEAGgfARQADAfgOAmIgjgag");
	this.shape_2.setTransform(-42.1,51.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#AE5C0D","#F2AD48"],[0,1],36.1,9.6,-36,-9.7).s().p("AlDAbQgngbgLgEQARgNAjgFQAqgHBagDQABAlAigDQAIgEAFgNIAGgZQEOgWBBgJQgGApAGAKQAXAEAKgOQAFgIAEgZQAlAFAkAVQAVANAmAaQgYANhIAKQhbAMiWANIkBAVIgFABQglAAg9gtg");
	this.shape_3.setTransform(33.4,58.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F2AD48").s().p("AgpAyQgkgoARhEQAcgYAcADQAYAEATAYQApA0gVBLQgRAEgOAAQgqAAgbgeg");
	this.shape_4.setTransform(-2.7,17.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#AA5500").s().p("AkHDLQAMAdgQgNQgOgLgKgRQgEAUgWgXQgXgXADgYQgHgBABANQAAANgJgCQgBgBgDghQgMgEAAAKQgCgRAMgMIACADQBdBJAnAQQAJABAGgMQDJgPE4ggIAAAXQgTAFgegIQgSgFgOAUQgHgGggAHQghAHgOgMQgfAXgagTQgYASg7ABQhAACgSAJQAAgKgFgBQgJgBgRAOQgOAMgKgFQgLgCAKgHQANgIAAgDQgOABgVAPQgSANgUgCQgBgCAEgJQADgGgGgCQgLAAgJANQgJAOgKAAQgMgWgLgFgAE7CkQABgTgJAAQAHgHAVgCIAigDQAAAFgHAWQgSAFgPAAIgOgBgAiggeQAIhygDgjQAVgMAGgKQAHgCABAFQgBAbACBQQACBGgDAqQgEArgDAKQgHAcgVAAQgMgmAHhegADfg6QgIhnAAgoIAQgRQAKgKAMgBQAPA6gHB4QgEBDgCAKQgHArgWAKQAEg3gHhSg");
	this.shape_5.setTransform(31.6,48);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#AE5C0D","#F2AD48"],[0,1],0.4,8.4,-0.4,-8.4).s().p("AmjhBQB8geA6AbQAHgBAHgIQAHgJAGgCIA2AUQAOACAFgPQAEgNAEACQAWABgBAYQAAAMgFAdQAHAJAbgBQATgTAAhCQAcACA/gDQAdABARAJIAAADIAGAEIACACIACABIABAKIAPgCIABAAQARgBAEgHQAHAIgEAOIgHAVQAKAIAVgEQARgSACgkIAEgBIABAAIABgKQAsAHBjgBQBXAHALAwQAIAignA9QiBAFjyAUQj2AVh3AFQALiXhRgTg");
	this.shape_6.setTransform(39.4,15.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DE7710").s().p("AgtAuQANgggRgoIgdgGQgRgEgEgJQBCAAASAXQgCAOgBAfQgEAXgUAAIgDAAgADBAbQAGgWgIgPQgIgRgSgDIgBAAIAAgDQAFgGAKAEIAWAJIAAADIABAJIAAACIACACIAFAQQADAVgSAAIgBAAgAjCgHQgLAAgDgEIAMgXQADAEAMAbQgCgDgLgBg");
	this.shape_7.setTransform(33.8,7.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FAFFFF").s().p("AgJAGQgHgGAAgFQAAgHALgBQgCAQAGAGQAEABAFgDQAFgDAEABQgDAJgHAAQgHAAgJgIg");
	this.shape_8.setTransform(-33.2,39.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3A3839").s().p("AgIAKIAEAEIgBADIgDgHgAAJgQIAAAAIAAAAg");
	this.shape_9.setTransform(-18.6,63);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAYFiIAJgLQgLgCgEAJQgCAEgCAMIgTgNQgKgFgNAHQgFgPgRgLQgWgKgJgHQgHAKAIAPIAOAWQgSgHgNgaQgRgigGgGQgGgCACAJQACAJgGgBQgahFATgYQAQgWBJgCQBcgDAPgEIAJiPQAEhRgGg5QhdAFgmgCQg9gCgnggQgZg1AOhCQAbggA9gMQAlgIBSgDQADgCAfgrIAIgLIgBAxIAYAAIABADIALACIAHAEIADABIADAFIAVACIAFAEIAagCIAAgUIgKgIQgCgFgEgDQgCgCgBgEIgBgCIACgEIA/ABQABADACABQAUAOA8AAQA2ABASgJIAEABIABAAQgBAGADABQADABADgBIADAHIAAAIQgQgJgegBQg/ADgdgCQAABCgTATQgbABgHgJQAFgdAAgNQABgXgWgBQgEgCgEANQgFAPgOgCIg2gUQgGABgHAJQgHAJgHABQg6gbh7AeQBRATgLCYQB2gGD3gUQDygUCBgFQAog+gJgjQgLgvhXgHQhjABgsgHIgBgIIAAgDQAdADAvgBQA8AAAdAEQBLALAKBEQALBBg5AqQgGAAgBgHQgBgJgEAAQgPAEhVADQhAACgRAaQAPBggTCiQAeAQBDAdQAyAdAHAzQgFADgBAHQgGgFABgHQgDAFgMAIQgLAGgCAIQgLgJgOADQgNADgIALQgIACgGgHQgGgIgHACQgHgBgGAIQgGAIgIAAQgGgNgSACQgRADgBAPQgQgKgSAAQgFgBgjAEQgBAAAAAAQgBAAAAABQAAAAAAABQAAABABAAQACADADABQgDAHgNgKQgIgHAFAOQgFAAgJgFQgIgEgJABQgEgBgDAHQgDAFAEABQgxgIgTAUQgWgMgzAEQgJAGAdAJQgIADgXgJQgWgJgRAIQgCAIAJAEQAJAEgBAHQgMADgHgJQgIgMgDgCQgRABgWATQgSgRgVAKIgiAWQgHgGAFgGgAgFFTQAKAAAJgNQAJgOAKAAQAHACgDAHQgEAJAAABQAUACATgNQAVgPAOgBQAAADgNAJQgKAGALACQAJAFAPgMQAQgNAKAAQAEABAAALQASgKBBgCQA8gBAXgRQAbASAfgXQAOAMAhgHQAggHAGAHQAOgVASAFQAeAIATgFIAAgXQk4AhjJAOQgGAMgKgBQglgQhdhJIgCgDQgMAMACARQAAgJAMADQADAhABABQAIACAAgMQAAgOAHABQgDAYAXAXQAWAYAEgUQAKAQAOAMQAPAMgMgdQAMAGALAVgAhCDCQgkAGgRANQALAEAnAcQBBAwAlgEIECgWQCXgMBagMQBIgKAYgOQgmgbgVgMQgkgVgkgFQgEAZgGAIQgKANgXgEQgGgJAGgpQhBAIkPAXIgGAZQgEANgJAEQgiAEgBgmQhZACgpAHgAI7D1QgVACgHAHQAJABgBASQAUAEAagIQAIgWAAgEIgiACgABrhcQgGAKgVANQADAjgIBwQgHBfAMAnQAVgBAHgcQADgKAEgqQADgsgChGQgChPABgaQgBgEgFAAIgCAAgAHThtIgRARQABApAIBmQAHBSgEA4QAWgLAHgrQABgKAFhEQAHh3gPg5QgMABgKAJgAB6hvQADDVgDBDICmgOQBogIA+gMQAAgxgHhWQgHhYgBgvQjRARhsAHgAimj7QgRBFAjAoQAkAoBBgOQAVhLgpg1QgTgYgZgDIgHgBQgYAAgYAVgACdlUQAFAKAQAEIAdAGQARApgNAgQAXACAEgZQABggADgOQgSgYhCAAIgBAAgAAwkxQADADALABQALABADADQgMgbgDgEgApaEnQgBgGgEAAQgZAMgcgIQgegJAKgWQgDgFgYgHQAEgEAPADQATAEAIgDIgfgHQgRgFgCgPQgSgBgFAFQACAEAPABQANAAgDALQgKgIABAKQABAPgHACQgKABACgHIADgNQgGgBgIAAIAAgcQAXAIAJgeQAGgyAHgQQA2ghBGgGQBRgHArAnQAWgKgLgdIgXgqQAFgjAogHQAhgGAqAOQAPAegKAYQgKAZgeAFQAAAXgMAxQgLArAEAYQAHAAANgDQAMgCAKABQACARgNAHIgMAGQgNgCgUAAQgVAAgMACQgBgEgDgCIgXALIAAATQgEAJAAgcQgEADgJAQQgHAOgKACQgLgPgBgMQgHAIgKgCQgIgCgCALQgJgKgGABIgQAJQgGgMgCgWIgEgCIAAACQgLgBgHAHQgHAIgCABQAFALAFgGQAJgKAFABQgBAGADAHQADAHgCAIIgIADQgFAEACAIIgBAAQgEAAgCgGgAqLEOQgDAFABAGQAyAEgIgIIgTAAQgLAAgBgIQADgEAJgDQAJgEACgEQgIgBgIADQgJACgFAAQABAGgDAGgAomEGQAPADACgLQgDABgTgBQgOgBgDAFIABAAQAFAAAQAEgAm8DgIg+AeQAqgCAegUQAigWgCglQgFAhglASgAmxDzIASAEQANACAEgGQgEgDACgNQACgLgMgBQgVAVgCAHgAp1DzQAUAEAOAAQABgfgBgOQgCgYgOgFIgjAdQgUARgHAUIAFAAQAUAAATAEgAl7D3QAAgDALgEQAJgEgIgFQABAFgLgBQgKgCAAAGIABAAQAEAAADAIgAolCYQghADgNAKQAOAbgCAxQARgFBagFQADgigWgzIg2AGgAq1CwQgDAngLAIQAXALAYgdQAdglAQgDQgJgag0gIQgOAHgDAmgAnVC2QAHAWgCATQAagCAOgUQAJgNAJgeQg1gEgUgIQABAJAJAbgAqJB3QAGAJATALQATALAGAIQAegYBDAFQgPglgygDIgJAAQgnAAgiAUgAmvBJQAQAegOAXIAjAcQAPgngEgfQAfgRAEgGQgIABgOAIQgMAIgMgBIgNgHQgHgEAAgJQAHABAJAFQAIAGAHAAQAQgBALgNQAJgMABgNQAAgjgwAJQAKAdgKAJQgRADgMgKQgQgLgGgCQgFARATAigAoOBoIAnAaQAZAQAWgHQgsgkgkAAIgGABgAmsAPQAAAGAHAHQAUARAHgTQgFAAgEADQgFADgGgCQgFgFACgSQgLABAAAHgAGzkDIAHgUQAEgPgHgHQgDAHgSAAQAEgBAAgDIADAAQACgIgBgIIgDgKIAAAAQASADAIAQQAIARgHAWQATABgDgXIgEgRIABACIAAAFIAFAFIAKACIAEACIACgRIABgCQgBAkgSASIgNABQgLAAgHgGgAG1lJQgLgEgFAGIAAgHIAKgBIAGACIAQACIAEAEIABAHIgVgJg");
	this.shape_10.setTransform(8,37.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},15).to({state:[{t:this.shape_10},{t:this.shape_6},{t:this.shape_7},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_8},{t:this.shape_1},{t:this.shape},{t:this.shape_9}]},7).wait(13));

	// LtArm
	this.instance = new lib.MickArmL();
	this.instance.parent = this;
	this.instance.setTransform(28.7,-15.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({rotation:8.8,x:10.9,y:-32.5},0).wait(1).to({rotation:45,x:-16.8,y:-62.5},0).wait(1).to({regY:-0.1,scaleX:1,scaleY:1,rotation:122.5,x:-4,y:-109},0).wait(1).to({regX:0.1,rotation:254.6,x:31.2,y:-105.5},0).wait(1).to({rotation:330.2,x:53.9,y:-70.5},0).wait(1).to({rotation:302.2,x:53.6,y:-44.3},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:360,x:28.7,y:-15.8},0).wait(13));

	// head
	this.instance_1 = new lib.MichHead();
	this.instance_1.parent = this;
	this.instance_1.setTransform(50.2,-55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({rotation:67.5,x:55.1,y:-36.3},3).to({rotation:135,x:54.2,y:-30.1},3).wait(2).to({rotation:143.8,x:38.3,y:-42.7},0).wait(1).to({rotation:180,x:11.4,y:-54.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:219.4,x:-4.1,y:-77.7},0).wait(1).to({regX:0.1,regY:-0.1,rotation:305.6,x:-0.6,y:-122.5},0).wait(1).to({rotation:410.6,x:69.5,y:-102.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:437.2,x:55.1,y:-73.2},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:495,x:54.2,y:-30.1},0).wait(5).to({regX:0.1,regY:-0.1,rotation:435,x:53.4,y:-38.7},0).to({scaleX:1,scaleY:1,rotation:397.4,x:56.3,y:-42},3).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:360,x:50.2,y:-55.6},3).wait(2));

	// Chest
	this.instance_2 = new lib.Chest();
	this.instance_2.parent = this;
	this.instance_2.setTransform(41.7,-34);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({rotation:90,x:43.5,y:-41.7},6).wait(2).to({rotation:98.8,x:29.5,y:-55.8},0).wait(1).to({rotation:135,x:12,y:-70.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:174.4,x:6.4,y:-89.6},0).wait(1).to({rotation:260.6,x:11.9,y:-112.7},0).wait(1).to({rotation:365.6,x:56.8,y:-93.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:392.2,x:39.5,y:-70.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:450,x:43.5,y:-41.7},0).wait(5).to({rotation:405,x:40.7,y:-40.4},0).to({rotation:360,x:41.7,y:-34},6).wait(2));

	// RtArm
	this.instance_3 = new lib.MichArmRt();
	this.instance_3.parent = this;
	this.instance_3.setTransform(51.6,-15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(16).to({rotation:8.8,x:33.5,y:-28.7},0).wait(1).to({rotation:45,x:-0.8,y:-46.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:138.2,x:-12.3,y:-102.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:254.3,x:34.2,y:-122.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:350.6,x:65.1,y:-71.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:302.2,x:66,y:-63.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:360,x:51.6,y:-15.5},0).wait(13));

	// RtLeg
	this.instance_4 = new lib.MickLegL();
	this.instance_4.parent = this;
	this.instance_4.setTransform(13.8,-16.4,1,1,-90,0,0,30.1,8.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-30,x:-0.3,y:-44.6},6).wait(2).to({regY:8.2,rotation:0,x:4.5,y:-45.3},0).to({scaleX:1,scaleY:1,rotation:138.9,x:57.6,y:-78.6},6).wait(2).to({scaleX:1,scaleY:1,rotation:92,x:48.9,y:-90.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:86.4,x:47,y:-91},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:56.8,x:36.8,y:-104.6},0).wait(1).to({regX:30.2,scaleX:1,scaleY:1,rotation:153.1,x:22.7,y:-82.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:297.4,x:19.6,y:-106},0).wait(1).to({regY:8.1,scaleX:1,scaleY:1,rotation:441.1,x:15.9,y:-101.9},0).wait(1).to({regX:30.1,regY:8.2,scaleX:1,scaleY:1,rotation:498.9,x:57.6,y:-78.6},0).wait(5).to({rotation:453.9,x:24.6,y:-76.5},0).to({rotation:337.5,x:12.9,y:-49},3).to({regY:8.3,scaleX:1,scaleY:1,rotation:270,x:13.8,y:-16.4},3).wait(2));

	// TumBum
	this.instance_5 = new lib.MickTorso();
	this.instance_5.parent = this;
	this.instance_5.setTransform(25,-28,1,1,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:0,x:15.4,y:-39.7},6).wait(2).to({rotation:90,x:49.3,y:-68},6).wait(2).to({rotation:98.8,x:39.2,y:-80.9},0).wait(1).to({rotation:135,x:34.7,y:-84.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:133.5,x:26.8,y:-96.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:215.6,x:18.6,y:-93.2},0).wait(1).to({rotation:365.6,x:31.2,y:-101.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:392.2,x:20.3,y:-89.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:450,x:49.3,y:-68},0).wait(5).to({rotation:405,x:26.2,y:-63.1},0).to({rotation:300,x:25,y:-28},6).wait(2));

	// LeftLeg
	this.instance_6 = new lib.MickLegR();
	this.instance_6.parent = this;
	this.instance_6.setTransform(21.1,-20.2,0.999,0.999,-81.3,0,0,28,-17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regY:-17.6,scaleX:1,scaleY:1,rotation:-29.6,x:8.8,y:-31},4).to({regX:27.9,scaleX:1,scaleY:1,rotation:-147.5,x:7.3,y:-42.1},2).wait(1).to({rotation:0,x:4.9,y:-36.2},1).to({regY:-17.5,scaleX:1,scaleY:1,rotation:39.6,x:51.6,y:-80.2},6).wait(2).to({regY:-17.4,scaleX:1,scaleY:1,rotation:97.8,x:43.3,y:-92.7},0).wait(1).to({regY:-17.5,scaleX:1,scaleY:1,rotation:84.6,x:44.9,y:-92},0).wait(1).to({regY:-17.4,scaleX:1,scaleY:1,rotation:83.1,x:36.7,y:-103.4},0).wait(1).to({regY:-17.6,rotation:173.1,x:28.7,y:-89.5},0).wait(1).to({regY:-17.5,scaleX:1,scaleY:1,rotation:315.2,x:19.3,y:-105},0).wait(1).to({regY:-17.6,scaleX:0.99,scaleY:0.99,rotation:397.4,x:11.3,y:-97.8},0).wait(1).to({regY:-17.5,scaleX:1,scaleY:1,rotation:399.6,x:51.6,y:-80.2},0).wait(5).to({rotation:354.6,x:19.1,y:-73.4},0).to({regX:28,scaleX:1,scaleY:1,rotation:278.7,x:21.1,y:-20.2},6).wait(2));

	// Layer 17
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3A3839").s().p("AgIAKIAEAEIgBADIgDgHgAAJgQIAAAAIAAAAg");
	this.shape_11.setTransform(-18.6,63);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#006600").s().p("AgUgGQANgLAggDIA2gFQAWAygDAiQhaAFgRAFQADgxgOgagAiFAzQAMgJADgmQADglAOgIQA0AIAJAbQgQADgdAjQgSAWgRAAQgGAAgHgDgABXgqIgngaQAngDAuAmQgGADgHAAQgQAAgRgMg");
	this.shape_12.setTransform(-49.5,54.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#003300").s().p("AhZBGQgVgEgWAAQAGgUAUgRIAjgdQAOAFACAYQABAOgBAfIgDAAQgNAAgSgEgABGAKQgJgbgBgJQAUAIA1AEQgJAdgJANQgOAUgZACQABgTgHgVgAhUghQgTgLgGgJQAmgWAsADQAxACAPAlQhCgFgeAYQgGgIgTgLg");
	this.shape_13.setTransform(-46,54.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FAFFFF").s().p("AgJAGQgHgGAAgFQAAgHALgBQgCAQAGAGQAEABAFgDQAFgDAEABQgDAJgHAAQgHAAgJgIg");
	this.shape_14.setTransform(-33.2,39.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CCCC00").s().p("AiYCLQgCgGAEgFQADgGgBgGQAFABAJgDQAIgDAIABQgCAFgJADQgKADgCAFQABAHALABIATAAQAFAEgVAAIgagBgAgxB5QgRgFgFAAQADgFAOABQASABAEgBQgBAJgLAAIgFAAgAA4BTQAlgTAFghQACAlgiAXQgeATgpACIA9gdgABVBpIgSgEQACgHAVgUQAMAAgCALQgCANAEADQgDAEgIAAIgGAAgABxBhQgBgFALABQALABgBgFQAHAFgIAEQgLAEAAADQgDgIgFAAgABHgOQAOgYgQgeQgTgiAFgRQAGACAQAMQAMAJARgDQAKgJgKgdQAwgKAAAkQgBANgJAMQgLANgQABQgHAAgIgGQgJgFgHgBQAAAJAHAEIANAHQAMABAMgIQAOgIAIgBQgEAGgfARQADAfgOAmIgjgag");
	this.shape_15.setTransform(-42.1,51.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#AE5C0D","#F2AD48"],[0,1],36.1,9.6,-36,-9.7).s().p("AlDAbQgngbgLgEQARgNAjgFQAqgHBagDQABAlAigDQAIgEAFgNIAGgZQEOgWBBgJQgGApAGAKQAXAEAKgOQAFgIAEgZQAlAFAkAVQAVANAmAaQgYANhIAKQhbAMiWANIkBAVIgFABQglAAg9gtg");
	this.shape_16.setTransform(33.4,58.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F2AD48").s().p("AgpAyQgkgoARhEQAcgYAcADQAYAEATAYQApA0gVBLQgRAEgOAAQgqAAgbgeg");
	this.shape_17.setTransform(-2.7,17.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#AA5500").s().p("AkHDLQAMAdgQgNQgOgLgKgRQgEAUgWgXQgXgXADgYQgHgBABANQAAANgJgCQgBgBgDghQgMgEAAAKQgCgRAMgMIACADQBdBJAnAQQAJABAGgMQDJgPE4ggIAAAXQgTAFgegIQgSgFgOAUQgHgGggAHQghAHgOgMQgfAXgagTQgYASg7ABQhAACgSAJQAAgKgFgBQgJgBgRAOQgOAMgKgFQgLgCAKgHQANgIAAgDQgOABgVAPQgSANgUgCQgBgCAEgJQADgGgGgCQgLAAgJANQgJAOgKAAQgMgWgLgFgAE7CkQABgTgJAAQAHgHAVgCIAigDQAAAFgHAWQgSAFgPAAIgOgBgAiggeQAIhygDgjQAVgMAGgKQAHgCABAFQgBAbACBQQACBGgDAqQgEArgDAKQgHAcgVAAQgMgmAHhegADfg6QgIhnAAgoIAQgRQAKgKAMgBQAPA6gHB4QgEBDgCAKQgHArgWAKQAEg3gHhSg");
	this.shape_18.setTransform(31.6,48);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#DE7710").s().p("AguAwQANgggRgoIgdgGIgEgBIgKAAIgzADQgHAAgKAGIgCACQgNANgGAEIABACIgDgCIgCABIgBgCIgIgBQgLAAgDgEIANgXIAAABQAEgDAGgDIADgBQAWgJAkAAIAYAAQAaABAKADIAEACQAiAFAMAQQgDAOgBAfQgDAXgUAAIgEAAgADAAdQAHgWgIgPQgFgKgEgEQgEgDgbgGQgcgGgHAGIABgDIACgDIABAAIABgBIATgBQBAAAAFAbIgBARQAAADABACIAAACQAAARgPAAIgCAAg");
	this.shape_19.setTransform(33.8,7.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#AE5C0D","#F2AD48"],[0,1],0.4,8.4,-0.4,-8.4).s().p("AmjhBQB8geA6AbQAHgBAHgIQAHgJAGgCIACABIAMgCIAdgBIAiAAQAAAAABgBQAAAAABgBQAAAAABAAQAAAAABAAQAWABgBAYQAAAMgFAdQAHAJAbgBQATgTAAhCQAcACA/gDQAaABA3AGIAKABIgIACQAOAEABAOIAAABQABAGgCAHIgHAVQAKAIAVgEQAGgHAFgJIgBgHIABgLIAAgBIAAgMQAAgKgDgHIAAAAIABAAIATAAIABAAQAsAGBfgBQBXAHALAwQAIAignA9QiBAFjyAUQj2AVh3AFQALiXhRgTgAiyhNIgFgBIABABIAEAAIAAAAgAB1hOIAAAAIAAgCIgBgBIABADg");
	this.shape_20.setTransform(39.4,15.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("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");
	this.shape_21.setTransform(8,37.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]}).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.2,-69.6,148.4,143.3);


(lib.MickLegs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.MickLegL();
	this.instance.parent = this;
	this.instance.setTransform(20,-12.3,1,1,0,0,0,30.1,8.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:-11.3},8).to({rotation:-9.5,x:19.9},16).to({scaleX:1,scaleY:1,rotation:0,x:20},6).wait(8).to({regX:30.2,scaleX:1,scaleY:1,rotation:27.3,x:22.8,y:-12.5},4).to({regX:30.1,scaleX:1,scaleY:1,rotation:34.1,y:-13.8},34).to({scaleX:1,scaleY:1,rotation:0,x:20,y:-12.3},6).to({scaleX:1,scaleY:1,rotation:-23.8},3).to({regY:8.3,scaleX:1,scaleY:1,rotation:-31.8},25).to({regY:8.2,scaleX:1,scaleY:1,rotation:-87.7},7).wait(30).to({rotation:0},10).wait(9));

	// Layer 3
	this.instance_1 = new lib.MickLegR();
	this.instance_1.parent = this;
	this.instance_1.setTransform(20.4,-3.2,1,1,0,0,0,27.9,-17.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:15,y:-3.3},8).to({scaleX:1,scaleY:1,rotation:12.8,y:-3.2},16).to({scaleX:1,scaleY:1,rotation:0},6).wait(8).to({scaleX:1,scaleY:1,rotation:48.1,x:22.3,y:-3.7},4).to({scaleX:1,scaleY:1,rotation:60,x:21.8,y:-4.2},34).to({rotation:0,x:20.4,y:-3.2},6).to({scaleX:1,scaleY:1,rotation:22.3,y:-3.4},3).to({regX:28,scaleX:1,scaleY:1,rotation:29.8},25).to({regY:-17.4,scaleX:1,scaleY:1,rotation:82.2,y:-3.7},7).wait(30).to({regX:27.9,regY:-17.6,rotation:0,y:-3.2},10).wait(9));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("AAbBdQgLgIgYgIQgegKgIgEQgVgLgKgSQgJgSACgaIgKADQgCgBABgKQABgGAEAFQAEAGACgBIABgDIAGgMIAQggQANgZASgFQARgFAoARIADABIAJAEQAXAJASACQAJABAIgBIAAAkQgIAKgGAMIgDAFIAAACQADABAAAFIgDAEIgGANQgaA5gUALIgBAAg");
	this.shape.setTransform(36.8,-3.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAgBqQgggOgSgJIgHgEQgdAYgzAFQgUgIgKgTIAgAPIAAAAIADAAQAWAAAUgHQARgFANgJQgSgdAGgjQADgSAMgRQAIgLAKgKQALgPAPgLIAGgEQgagEgXgLIgLgGQgZgNgcgGIgTgDIgOABIgSABIgLAAIAAABIgFAAIAggLQAagLAaAKQAYALAYANIAFACIAYAKQAtAVAjAMIAQAFQAUAGARADIABAAIADgDQAFACACAFQACADAEAAIAAACQgIABgJgBQgSgCgWgJIgJgEIgEgBQgpgRgQAFQgTAFgMAZIgQAgIgFALIgCADQgCABgEgGQgEgFgBAGQgBAKACABIAKgDQgCAbAJASQAKASAUALQAIAEAeAKQAZAIALAIIAAAMQgSgNgkgOgACOAkIgBACIAAACIgCAAIADgEg");
	this.shape_1.setTransform(30.9,-6.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6600").s().p("AgmBsIgggQQAFABgJgXQgIgVABgXQABgMgBgMQgCgLACgLQAFgSgJgNQgIgOAIgnIAAAAIALgBIASgBIAOgBIATAEQAbAFAZAOIALAFQAXAMAbAEIgGAEQgPALgMAOQgKALgIALQgMAQgDATQgGAiASAdQgNAJgRAGQgTAGgWAAIgCABg");
	this.shape_2.setTransform(24.4,-7.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(166));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.5,-34.7,93.1,70.3);


(lib.CarmenLegsSplit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_37 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(37).call(this.frame_37).wait(1));

	// Layer 2
	this.instance = new lib.CarmenLegR();
	this.instance.parent = this;
	this.instance.setTransform(-2.5,-21.4,1,1,0,0,0,1.4,-27.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:1,scaleY:1,rotation:71.4,x:-4.6,y:-19.8},4).wait(3).to({regY:-28,scaleX:1,scaleY:1,rotation:88.9,x:-4.5,y:-19.9},3).wait(5).to({regY:-27.9,scaleX:1,scaleY:1,rotation:71.4,x:-4.6,y:-19.8},0).to({scaleX:1,scaleY:1,rotation:0,x:-2.5,y:-21.4},3).wait(3).to({scaleX:1,scaleY:1,rotation:71.4,x:-4.6,y:-19.8},6).wait(3).to({scaleX:1,scaleY:1,rotation:0,x:-2.5,y:-21.4},5).wait(1));

	// Layer 1
	this.instance_1 = new lib.CarmenLegL();
	this.instance_1.parent = this;
	this.instance_1.setTransform(3,-22.1,1,1,0,0,0,1.5,-28.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({regX:1.4,scaleX:1,scaleY:1,rotation:-69,x:4.2,y:-22.6},4).wait(6).to({regX:1.5,scaleX:1,scaleY:1,rotation:0,x:3,y:-22.1},5).wait(6).to({regX:1.4,scaleX:1,scaleY:1,rotation:-69,x:4.2,y:-22.6},6).wait(3).to({regX:1.5,scaleX:1,scaleY:1,rotation:0,x:3,y:-22.1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.5,-26.8,18.3,66.6);


(lib.CarmenFlip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_32 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(32).call(this.frame_32).wait(1));

	// Layer 1
	this.instance = new lib.ParrotFly();
	this.instance.parent = this;
	this.instance.setTransform(28.4,-32.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAFFFF").s().p("AgMA+IAAgCIABACgAgMAzIgBgFIACAFIgBAAgAANg9IABACIAAAAIgBANIAAgPg");
	this.shape.setTransform(-33.5,13.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AlBAPIACAEQAHgFACgCQABgDgDgIQAHAHAJACIgTAJIgGADgAhhADIAGAAIAEAAIAAAFIgBAAIjDAHQAsgGCOgGgAE8ACQgDgEgBgDIAIAEIACACIgCADQgBAFgCABQACgFgDgDgAgaAFIgBAAIAAgCIAAgCIABAAQA1gGAxAGQgNAGglgCQgngBgNAEgAExgIQAJgHADgGIABACIAAAAIgBAHQgBAEgEADIAAABQgJAGgLABQADgFAKgGgACGAAIBQgIQAugDAgAEQgkAHguACIgZAAQgdAAgWgCgAkrgIIABgNQADAFABAQIAAAAQgFAAAAgIg");
	this.shape_1.setTransform(-3.9,-14.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC66").s().p("AAXAQQAFgKgHgIIAAgBQgEgFgEgBIgCgBQgDAAgDABIAAABQAJACAEAEQAGAFgGAIQgEgJgFgEIgGgFIgCgBIgCgBIAAACIADAFIACABQAHAFgCAHQgGAFgEAAIgBgLQAAgFgDgCIgDgCIAAACIABAIQACAIgIACQgCgCAAgIIgCgIIAAgCIgDAAIgLABIgCABIAAgBIAFgKIAjAAIABgCIAGADIAAAAIABABIAHADIAGAFQAHAGgBAKQgDgBgDACIgEACIgBAAg");
	this.shape_2.setTransform(5.8,-14.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#996600").s().p("Ak0FfIADghQAAgKgDgXQgCgWAAgLQAFhcgFiYIgGjxQAIADAPACIADAzQACAegFANQAAgNgCAIQgCAIgBAKQgEBCAKCEQALCGgDA5IgFA5IABAhQgBATgLAIQgIgPAAgTgAEsDaQgEhdABg2IAChQQABgwgDgiQAAgGgCAEQgCAEgBgEQABgUgCg3QgDgtAEgdQADADAEgCIAFgDQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABQAHCzAADvIAABrQgBA4gIAVQAAgmgEhogAE8FOIACgNQADADAAAHQgBAHACABIgCABQgEAAAAgGgAk/l+QAEgEAEAFQAEAFAAAGQAEAAgBgKQAFAcgBA7QgHABgDAKIgEATQgLgtAGhKgAEplDIAJg1QAFAGAJAAIACAAQgCBLgTAXQgIgQAEgjg");
	this.shape_3.setTransform(-3.2,11.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ak9GKIgCgWIAAgiIAAAAIAAAAQAAghACgsQAFhWgFgqIgBgBQAEgOgBgcIAAAAIAAgCIgBgKIABAAIgBgFIAAAAQAAgsgBgUQgBgIgFgKQAAgaABgnQADg6gDgXQgDAEABAOQABANgDAEQgHgRADgiIAEgwQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAAAIAAgJIAGgDIATgJQgJgCgHgHQADAJgBACQgCADgHAEIgCgEIAAgTQADgVgBgNIgCgCIAAgHIACAAQgEgqAGgvQADgDAHAAIALgCQAKAZgDBHIAFgCIAAAHIgHAEQgCAPAEAUQAPAKAjgCIA3gGIgCgCIAIAAQADACADAAQALABAVgCQASgCAQABIABgDIAHABIADACIABAAIADAEIgGAAQiOAGgsAGIDDgHIABACIAAACIgJACIgcgCQgVgBgJAGIAHADIgNAAQgRgEgaACQg9AEgTgDQAEAeAAA+IAAAFQgKAYAAAHIAIBJIgCgBIABAOIgCAdQAAAMAEAIIAAAXQAAAZACAGIACAFIgBAHIAGAvQAAAFADAFQABAoAABOIAAABIAAAJIgBABIgEAjIgCAdIACAGIAAAAIADAJIAAAEQgJAGABARIgKAAIAAACQgFABAAADgAk2AKQAECZgEBcQgBAKADAXQADAWAAALIgDAgQgBATAIAPQAMgHABgUIgCggIAFg5QADg6gKiGQgKiDAEhCQAAgLACgHQACgJAAANQAFgNgCgeIgDgzQgPgCgIgDIAHDxgAkykFQAAAIAFAAQgBgQgDgFIgBANgAk/l7QgHBJALAuIAFgUQADgKAGAAQACg7gGgdQACALgFgBQAAgFgEgFQgCgDgCAAQgBAAAAAAQAAAAgBAAQAAAAgBABQAAAAAAABgAEdFwIAAgjQAFhUABhsQAAiSABhOIgHgFIAAgIQADgWgEg2QgDg1AEgTQhsgIgpAIQgOAIgHABQgDABgVgCQgQgCgGAFQgIgLgeACIAAAFIgFgDIgHAAQgJgDgZABIgOABIgEADIgBgJIABAAIAAADQANgEAnACQAlABANgGQgxgHg1AHIgBAAIAAgMIAEADIACACIA7AAIAAgBIAAgCIACAAIABAAIgBACIAAABIAHgBIAHgDQAFgDAEgFIAFAAIgFALIAAABIACgBIALgBIADAAIAAABIACAJQAAAJACABQAIgBgCgJIgBgIIAAgCIADACQADACAAAGIABAKQAFABAGgFQACgHgHgGIgCgBIgEgFIAAgCIADABIACABIAGAFQAFAFAEAJQAGgIgGgGQgEgEgJgDIAAAAQADgBADAAIACABQAEABAEAFIAAABQAHAJgFAJQACABADgCQADgCADABQABgKgHgHIgGgFIgHgDIgBgBIAAAAIgGgDIAEgDIAIAFQAKAFANACIANABQAUABAygFQAqgCAbgHQACgwALg3IgBgBIAGACIABAAIABACIgJA1QgEAjAJARQATgXABhLIAHgBIAEABQgEASgEAaQgFApAAAbIgBAAIAAAEIABAAQgEAeADAwQADA1gCAbQAEAEAIADIAAAJIgOAAQAEBXAABtIAADIQAFAFACAOIAAAeIgFAAQgCAAgCgFQgBAAAAAAQAAAAgBAAQAAABAAAAQABABAAAAIACADgAEohYQADAhgBAwIgCBQQAAA3ADBcQAEBoAAAnQAIgWABg3IAAhrQAAjvgHi0QAAAAAAgBQAAAAAAgBQAAAAgBAAQAAAAgBAAIgFAEQgDABgDgDQgEAeACAsQACA4AAATQAAAEADgEIABgBIAAAEgAE8FRQAAAHAFgCQgCgCABgHQAAgHgDgDIgBAOgAE1j6QADADgCAFQACAAABgGIACgDIgCgDIgIgEQAEgDABgEIABgHIAAAAIgBgCQgDAGgJAHQgKAHgDAFQALgBAJgHIAAgBQABADADAFgADPkFIhQAIQAfAEAtgBQAugDAkgHQgRgCgUAAQgTAAgWABg");
	this.shape_4.setTransform(-3.2,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(33));

	// Layer 3
	this.instance_1 = new lib.CarmenArmL();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-12.5,-16.3,0.769,0.769,0,0,0,-3,15.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-2.9,regY:15.9,scaleX:0.77,scaleY:0.86,rotation:4.8,x:-12.6},2).to({regY:15.8,scaleX:0.77,scaleY:0.87,rotation:6.8,x:-12.8},2).to({scaleY:0.91,rotation:11.3,x:-12.9,y:-16.4},2).wait(1).to({regX:3.8,regY:-12.3,x:-2.9,y:-40.3},0).wait(3).to({regX:3.6,regY:-12.2,scaleY:0.91,rotation:156.8},3).wait(1).to({regY:-12.1,scaleX:0.78,rotation:0,skewX:156.8,skewY:-23.1,x:-3.6},0).to({scaleX:0.78,scaleY:0.9,skewX:225.8,skewY:45.8,x:-3.7},2).wait(6).to({skewY:45.8},0).to({scaleX:0.78,scaleY:0.91,skewX:156.8,skewY:-23.1,x:-3.6},2).wait(1).to({regY:-12.2,scaleX:0.77,rotation:156.8,skewX:0,skewY:0,x:-2.9},0).to({regY:-12.3,scaleX:0.59,scaleY:0.74,rotation:1.5,x:-6.8,y:-36.8},5).wait(3));

	// Layer 4
	this.instance_2 = new lib.HeadChest();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-1.8,-33.1,0.769,0.769);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.77,scaleY:0.77,rotation:101.6,x:-6.4,y:-39.2},6).wait(20).to({scaleX:0.77,scaleY:0.77,rotation:0,x:-1.8,y:-33.1},4).wait(3));

	// Layer 2
	this.instance_3 = new lib.CarmenArmR();
	this.instance_3.parent = this;
	this.instance_3.setTransform(4.8,-16.2,0.769,0.769,0,0,0,0.1,14.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(33));

	// Layer 5
	this.instance_4 = new lib.CarmenTorso();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-3.3,-28.2,0.769,0.769);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:0.77,scaleY:0.77,rotation:26.9,x:-6.6,y:-34.7},2).to({rotation:94.9,x:-8.7,y:-39},2).to({rotation:116.6,x:-10.9,y:-41.6},2).to({scaleX:0.77,scaleY:0.77,rotation:136.2,x:-8.6,y:-46.8},4).wait(16).to({scaleX:0.77,scaleY:0.77,rotation:116.6,x:-10.9,y:-41.6},2).to({scaleX:0.77,scaleY:0.77,rotation:0,x:-3.3,y:-28.2},2).wait(3));

	// Layer 6
	this.instance_5 = new lib.CarmenLegsSplit();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-4,-17.2,0.769,0.769,0,0,0,1.3,-18.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:1.4,scaleX:0.77,scaleY:0.77,rotation:-41.2,x:-6.6,y:-28.6},2).to({regX:1.2,rotation:101.6,x:-21.5,y:-44.6},3).to({regX:1.1,regY:-18.6,scaleX:0.77,scaleY:0.77,rotation:177.2,x:-11.9,y:-54.8},5).wait(16).to({regX:1.2,regY:-18.4,scaleX:0.77,scaleY:0.77,rotation:101.6,x:-21.5,y:-44.6},2).to({regX:1.3,scaleX:0.77,scaleY:0.77,rotation:0,x:-4,y:-17.2},2).wait(3));

	// Layer 8
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgmACIAAgDIALAAIAtAAIABgBQAXAAgEACQgDABgJABIg/ABIgBgBg");
	this.shape_5.setTransform(-8.8,-13.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AghAIIgBgCIABgBIAFAAIA/gBIACAAIACACIgBACIgkAAIgjAAgAgRAAIgVAAIgBgCQAAgBBDgCIAKgCIACACQAAABgLAEIgCAAg");
	this.shape_6.setTransform(-9.8,-13.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).wait(33));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.3,-50.4,72.6,100.8);


(lib.Carmen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Parrot();
	this.instance.parent = this;
	this.instance.setTransform(30.3,-44.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC66").s().p("AhmARIgEgMQgRALgOgQIgIgJQgDgEgDAEIADgGIAQAAIAFgDIANAAQAGAFASgBIAIAAIABAAQAPAAAEADIABAAIAAADQAEAOgIARQgCgEAAgLQAAgKgEgHQgEgCgHgBQgGAAgIACQgRAEgFgDQAAAJALACIABAAIAAAAIARADQACAOgFAEIgBAAQgGAAgDgGgAhhgCQAMgNAKAQQAKARgRACQADgWgSAAgACJARQAHgMgJgLIgBgBQgFgGgFgCIgDgBQgEAAgEABIABABQALADAFAFQAIAHgHALQgGgMgGgGIgIgGIgCgBIgFgCIAAADQACACAEAEIACABQAKAHgDAKQgHAGgIgBIgBgOQAAgGgDgDIgFgDIAAADIACAKQACALgKACQgDgCAAgLQAAgHgCgDIgBgDIgDAAIgOACIgDABIAAgBQAEgGADgIIAuAAIACgBIAHADIABAAIABABIAJAFIAIAGQAIAIAAANQgFgBgDACQgDADgCAAIgCgBg");
	this.shape.setTransform(-9.5,-20.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AmiAUIADAFQAJgGACgDQACgEgFgLQAKAKALACIgYALIgIAFgAlwATQA5gHC5gIQhbAPiDAAIgUAAgAGbACQgEgFgBgEQAHAEAEABIACADQAAABgBAAQAAAAAAABQgBAAAAABQAAAAAAABQgCAHgCABQACgHgEgEgAgiABQBFgHBAAHQgRAIgwgCQgzgBgRAEgAGMgLQANgJAEgIIAAADIABAAIgBAKQgCAEgFAEIgBABQgLAJgOABQADgGANgJgACuAAIBogKQA8gFAqAFQgvAKg7ACIghABQgmAAgdgDgAmFgLIABgRQADAGACAWIAAAAQgHAAABgLg");
	this.shape_1.setTransform(-11.4,-20.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#996600").s().p("AmRHIQAEgcAAgOQAAgNgDgeQgDgdAAgOQAGh4gGjGIgJk5QALADATADIAEBCQACAngGARQAAgRgCALQgDAKgBAOQgFBVANCsQAOCugEBLIgGBKIABArQgBAZgPAKQgLgUABgZgAGGEcQgFh5ABhHIADhoQABg/gEgrQABgJgDAFQgDAFgBgFQABgZgDhIQgDg6AFgmQAEAEAEgCIAHgFQABAAABAAQAAAAAAAAQABABAAAAQAAABAAABQAJDpAAE3IAACLQgCBIgKAcQAAgygFiGgAGbGzIACgSQAEAEAAAJQgBAJADACIgDABQgFAAAAgHgAmfnxQAFgGAFAHQAFAHAAAHQAGAAgCgNQAHAlgCBNQgIABgEANIgGAZQgOg8AIhfgAGCmlIAMhFQAGAJAMAAIADAAQgCBhgZAeQgLgVAFgug");
	this.shape_2.setTransform(-10.6,13);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FAFFFF").s().p("AgQBRIAAgDIABADgAgQBCIgBgHIACAHIgBAAIAAAAgAAQhQIACADIAAAAIgBARIgBgUg");
	this.shape_3.setTransform(-50,16.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("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");
	this.shape_4.setTransform(-10.5,12.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(146));

	// Head
	this.instance_1 = new lib.HeadChest();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-8.7,-44.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({x:-18.5,y:-45.5},10).to({x:-8.7,y:-44.7},9).wait(48).to({x:-18.5,y:-45.5},7).to({rotation:-15,x:-25,y:-40.6},10).to({rotation:0,x:-8.7,y:-44.7},46).wait(8));

	// Layer 5
	this.instance_2 = new lib.CarmenArmR();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.1,-22.8,1,1,0,0,0,0.1,14.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({regX:0.2,regY:14.2,scaleY:1.13,rotation:-21.3,x:-0.2,y:-22},10).to({regX:0.1,regY:14.1,scaleY:1,rotation:0,x:-0.1,y:-22.8},9).wait(48).to({regX:0.2,regY:14.2,scaleY:1.13,rotation:-21.3,x:-0.2,y:-22},7).to({regX:0.4,scaleX:1,scaleY:1.15,rotation:0,skewX:-37.4,skewY:-44.9,x:0,y:-22.1},10).to({regX:0.1,regY:14.1,scaleX:1,scaleY:1,skewX:0,skewY:0,x:-0.1,y:-22.8},46).wait(8));

	// Layer 6
	this.instance_3 = new lib.CarmenArmL();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-22.8,-22.9,1,1,0,0,0,-3.1,15.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({scaleX:1,scaleY:0.98,rotation:-21.5,y:-22.8},10).to({scaleX:1,scaleY:1,rotation:0,y:-22.9},9).wait(48).to({scaleX:1,scaleY:0.98,rotation:-21.5,y:-22.8},7).to({regY:15.9,scaleX:1,scaleY:0.87,rotation:-41.4,x:-22.6,y:-22.2},10).to({regY:15.8,scaleX:1,scaleY:1,rotation:0,x:-22.8,y:-22.9},46).wait(8));

	// Layer 3
	this.instance_4 = new lib.CarmenTorso();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-10.6,-38.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({x:-19.9},10).to({x:-10.6},9).wait(48).to({x:-19.9},7).to({rotation:-15,x:-25.9,y:-30.9},10).to({scaleX:1,scaleY:1,rotation:2.5,x:-24.1,y:-33.8},7).to({rotation:10.2,x:-21,y:-34.9},12).to({scaleX:1,scaleY:1,rotation:-7.3,x:-18.2,y:-34.5},4).to({scaleX:1,scaleY:1,rotation:-5,x:-15.9,y:-35.7},7).to({scaleX:1,scaleY:1,rotation:0,x:-10.6,y:-38.3},16).wait(8));

	// Layer 2
	this.instance_5 = new lib.CarmenBod();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-11.6,-24,1,1,0,0,0,1.3,-18.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(8).to({x:-20.9},10).to({x:-11.6},9).wait(48).to({x:-20.9},7).to({rotation:-15,x:-23.1,y:-16.9},10).to({scaleX:1,scaleY:1,rotation:-77.7,x:-17.4,y:-25.7},15).to({scaleX:1,scaleY:1,rotation:-1.5,x:-18.9,y:-19.7},8).to({rotation:64.9,x:-21.7,y:-23.5},7).to({scaleX:1,scaleY:1,rotation:0,x:-11.6,y:-24},16).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.6,-67.2,94.4,131.2);


(lib.BuffBod = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.BufFTorso();
	this.instance.parent = this;
	this.instance.setTransform(0.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(43));

	// Layer 2
	this.instance_1 = new lib.BuffArmR();
	this.instance_1.parent = this;
	this.instance_1.setTransform(18.9,-1.6,1,1,0,0,0,-18.7,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({regY:11.4,rotation:-9.5},5).to({scaleX:1,scaleY:1,rotation:-11.1},4).to({regY:11.5,scaleX:1,scaleY:1,rotation:0},3).wait(4).to({scaleX:1,scaleY:1,rotation:70.9,x:17.4,y:5.5},6).wait(4).to({scaleX:1,scaleY:1,rotation:0,x:18.9,y:-1.6},9).wait(5));

	// Layer 3
	this.instance_2 = new lib.BuffArmL();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-4.8,0.6,1,1,0,0,0,28.6,7.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({scaleX:1,scaleY:1,rotation:8.7},5).to({rotation:9.1},4).to({scaleX:1,scaleY:1,rotation:0},3).wait(4).to({scaleX:1,scaleY:1,rotation:-41.3,x:-5.3,y:2.3},6).wait(4).to({scaleX:1,scaleY:1,rotation:0,x:-4.8,y:0.6},9).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62,-38.4,124,78.5);


(lib.BubFlip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_21 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(21).call(this.frame_21).wait(1));

	// Layer 3
	this.instance = new lib.BubPreparing();
	this.instance.parent = this;
	this.instance.setTransform(-6.4,-8.8,0.751,0.751,0,0,0,53.4,32.3);

	this.instance_1 = new lib.BubCurl();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1.9,-47.7,0.716,0.716,-30,0,0,44.6,46.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:32.2,scaleY:0.64,y:-1.8},2).to({regY:32.3,scaleY:0.75,y:-8.8},2).to({regY:32.2,rotation:-30,x:-2.9,y:-33.3},3).to({_off:true},1).wait(7).to({_off:false,regX:53.5,regY:32.1,rotation:0,x:-4.4},0).to({x:-6,y:-10.3},2).to({regX:53.4,regY:32.2,scaleY:0.64,x:-6.4,y:-1.8},2).to({regY:32.3,scaleY:0.75,y:-8.8},2).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).to({regX:44.5,rotation:-142.3,x:1.8,y:-47.8},3).to({regX:44.6,rotation:-315,y:-47.7},3).to({_off:true},1).wait(7));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAFFFF").s().p("AgBAAQgBgLgCgCQAHADACAKQACAJgGAGQgCgDAAgMg");
	this.shape.setTransform(-10,67.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AA5500").s().p("AADD8QgBgFACgGQADgFgBgEQArgGAQgEQAegIANgSQACAdgmAPQgcAMglAAIgEAAgAgWD8QgCgBgBgFQAAgFgDgBQgGgCAAAFQAAAHgDgBQgGABgCgJQgCgJgIACQgDAAACAFQAEAGgGABQgFACgBgGQgBgHgCgBQgEgBgCAEIgCAGQgUgJgNgRQATAJBXAGQABAEgDAFQgCAGABAFIgRAAgAgCCtQgLgCAAgVQAAgagDgEQALgFAWgBIABAAIAAADQgIAGACAcQABAWgOAAIgBAAgABgjfIgGgHIgIgGIgLgHQgIgFgjAAIhIACQglACgQAOQAJgKAMgEIAHgEQAcgEAcADIA3gCQAdgBAUATIAGAKIgBAAg");
	this.shape_1.setTransform(2.7,45.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DE7710").s().p("AhOgSQAUgBA7ACQArABAagFQAQATgNAVQheABgzACIgGgog");
	this.shape_2.setTransform(2.5,54.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F2AD48").s().p("AhLCFQAEh+AVhyIgCgBIABgFIACgGQAFgMAVAAIAbgBQAbAAAIAEIAJADIALAKQAHAQAAADQgBAcACAJIgBAAIgBAIIgBARIAAALQAHA5AFBdQhCAGhUAAIgBAAgAAHhsIgCALIgCDXQAFgUgCgyQgBgwADgvQgBgKAAgYIACgdIgBgEgAAUhbIAAAEIABAbIAAAGQACAqgCAmQgDBAAFAZQAAgPAChMQABgjgCgZIACgOIgDgaQAAgggCAAIgBARgAgVh2QgDABAAAEIACAWIABAPQAAAMgCAQIAAAEIAAAEQgCAvAABnQADgbABgsIABhIIAAgCIABgTQACgWgBgLQgBgLAAgKQABgKgDAAIAAAAgAAzAWQAEA8ABAWQAEgXgGhAQgEghACgiIgBgBIABggIABgWIgEgQQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAABIAFARIAAASQgDAVABAJIAAAAQgBAgADArgAgqhPQABAOgCAgQAABYgDAxQAHgegBhMQgCg8AEgvIgBgCQAAgJgCgBQgDACAAAHIAAAIIgBAAQADAJAAAQgAA8g3IAAACIAAgCgAglhlIAAgBIAAgBIAAACg");
	this.shape_3.setTransform(2.2,38.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DE8B10").s().p("Ah2DOQADgGgBgGQgOgVgCgjQgBgMADg2QAChiADgwQAFhOAOgvIACgHIABAAIgBAAQAAgHAIgEQAPgOAmgCIBHgCQAjgBAJAGIALAHIAIAGIAGAHIAEAGIAAAAIACAFQAFAOADATQACAOACA8QABAbAKBJQAJA+gCAeQgEBDgLAZQgSAnhaAFIgTAAQhJAAgkgegAgSCiQABAVAEAJIAUAAQALgJABgRIgBgkIAAgDQAZgCAlACQAIgvgNhdQgIhBABgqQAAAAABAAQAAAAAAgBQABAAAAgBQAAAAAAgBIAAgEQAAgcgDgIQgIgSgCgBIgOgJIgHgCIgJgBQgyAAgGgCQgXAAgMAKQgIAHAAAGIAAACQgFCJgVBvQAIAFABAWQACAXAHAGQAGAFASgDQAbgFAHAAQADAIABAYg");
	this.shape_4.setTransform(2.7,44.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgZEPQgHAAAGgMQAGgNgFgEQgIgBADAFQABACAAAAQAAABAAABQAAABAAAAQgBAAgBAAQgHAAgGgIQgHgJgHgBQgIAPAEANIgHABQgFgFADgPQADgZgKgBQgDADgEATQgDAPgKABQgCgDADgKIAFgQQgKABgEgVIgEgVIgDgMIADgBQABABAAAAQABAAAAAAQABAAAAABQABAAAAABQACAEADAAQAAgNgJgMIgEgFQgRgRgCgGQAKAEANAOIADACIAAgDIgDgTQgCggABgoIABgjIADg/QADhsAIgfQAFgVAHgPQAPgVAVgNQAYgPAbADIA7gDQAYAAAZAGQAeAJAEAiQAHAYAEAkQAGAtAGBXQAdEaiNgEQgEAAgBAFQgBAHgDAAQgLgIgVgBQgFACAAAHQABAHgIACQgGABgBgJIAAgQQgJgBgCAOQgCAOgHAAIgBgBgABiDUQgQAEgrAGQAAAEgCAGQgDAFACAFQAnABAegMQAlgPgBgdQgNARgeAIgAAbDyQgBgFACgFQACgGAAgEQhXgFgSgKQANASATAIIADgGQACgDAEABQACABABAGQABAGAFgCQAFAAgDgGQgDgGAEABQAIgDACAJQABAJAHgBQADABAAgGQAAgGAEADQADAAABAFQABAGABAAIASAAIAAAAgAhgDMQAAAMAEADQAFgGgBgKQgCgKgIgDQACADAAALgAhKjeQgPAwgEBNQgDAxgCBhQgDA3ABALQABAjAPAWQABAFgDAGQApAjBXgFQBagEASgoQALgZAEhCQABgfgIg9QgKhJgBgcQgCg8gCgOQgDgSgFgPIgCgEIAAAAIgEgHIABABIgGgLQgVgSgcAAIg5ACQgbgDgbAFIgHADQgMAEgJAKQgIAEAAAHIABAAIgBAAgACQDsQgBgGAHgDQAIgCABgDQAFAAgIAOQgBAAgBgBQgBAAAAAAQgBgBAAAAQgBAAAAABIgHABIAAAAgAizDAQgHgEADgIQAFgBABAGQADAGAFgBQgCADgDAAIgFgBgAASCpQgEgJgBgVQgBgXgDgJQgHAAgaAFQgSAEgGgGQgHgGgCgXQgBgWgIgEQAVhwAFiIIAAgDQAAgGAIgHQAMgKAWAAQAGACAzAAIAJABIAHACIAOAJQACABAIASQADAJAAAbIAAAEQAAABAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAqAIBAQANBegIAuQglgCgZACIAAAAQgXABgMAFQADAFABAZQAAAVALACQAQABgCgXQgBgcAHgGIABAkQgBARgLAJgAgwA6IAFAoQAygCBgAAQANgWgQgTQgaAFgrgCIg4gBIgXABgAADjVQgUAAgFAMIgCAHIgBAFIACABQgVBzgEB9QBVAABCgGQgFhcgHg7IAAgKIABgSIABgHIABgBQgCgIABgcQAAgDgHgRIgLgJIgJgEQgIgEgbAAIgcABgAiJA3QAUAYABAoQgTgdgCgjgAiuBiQgCgIACgJQAFADADAAIgCAKQgDAGAFABQgCADgCAAQgDAAgBgGgAihAsIgIACQgHgQgBgLQAIAAADAPQAEgBAAgIIgBgMIAJAAIgDAkIgEgFgAh+AkQgGgKgBgBQAEgGAEAJIAGAMIgCABQgCAAgDgFgAAgizIACgKIABgHIABAEIgCAdQAAAYABALQgDAvABAwQACAygFAUgAAwg3QACgngCgpIAAgHIgBgbIAAgEIABgRQACAAAAAhIADAZIgCAPQACAYgBAkQgDBLABAQQgFgaADg/gAADh6IAAgDIAAgEQACgQAAgNIgBgPIgCgVQAAgFADAAQADgBgBAKQAAAKABALQABALgCAWIgBAUIAAACIgBBIQgBArgDAbQAAhmACgwgABOg7QgDgrABggIAAAAQgBgJADgVIAAgSIgFgSQAAAAABgBQAAAAAAAAQAAgBABAAQABAAAAAAIAEAQIgBAVIgBAgIABACQgCAiAEAhQAGBAgEAWQgBgVgEg8gAgQhzQACgggBgOQAAgQgDgJIABABIAAgJQAAgHADgCQACACAAAIIABACQgEAvACA8QABBOgHAcQADgwAAhZgAiKALQgJgHgEAAQAFgEAHAFQAIAJAEgBQgBABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQgDAAgEgEgAiJgkIAMAAQABACACAOIACAFQgIgGgJgPgAiXg+QAGgEAEALIAEATIgOgagACuhHQAHACABAIQABAMACAFQgNgHACgUgABXiJIAAAAIAAACIAAgCgAgKi5IAAACIAAABIAAgDg");
	this.shape_5.setTransform(-0.5,46.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.8,-59,104.9,133);


(lib.BubBalancing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFB366").s().p("AANGvQAGgoAAgFIgNg9QgHgkAOgXIgNgeQgKgTAEgNQAGgIASgFIAYgGIAMgCQBGgQAbgHQgNBAgWASQARAXgFAZQgDARgRAdQgUAigFANQgLAcAJAZQgJgQgEgJQgGgRAHgOQgPALAHAVQAKAegCAMQgDABgcACQgRABgCAQQgKgQAEgbgABHD7QgNAEgEAIQAegFAIgQQgDACgSAHgAgJGfQgMgCAGgHQgIAIgNgIQgTgLgEgBQAEgIATgXQAOgQgCgQQgBgKgVgfQgSgaAFgWQg0gegSgcQAQgGAfAEQApAFARAAQAGAIAGAgQAGAcALAIQgPAcAKAwQALA4gEARQgEADgHAAIgFAAgAhtA6QAAgEADgFQgKACgMgLQgPgNgEgCQgNAEgCgBQgcgOgHgsQgIgqAOgrQgBgTAEgXIAEgeIAAh8IAfgsIAHgFQAIgBADgFIACgFIAIAHQAHAEAJgBQAIAdApAPQAlAOAngFQAsgGAVgaIADgGQAGgKAFgSIAHAGQAFAAABgEIAAAAQAGAGAOADQAdAHAKAMIAQAZIAFAIQgLBBgKAJIAEADIgFAFIgCgGQgDgJgEgGIgBAFQgDAXAUAfQAaAnACAUQACAagKAcQgGARgPAjQgDAAgFAGQgDAEgEgFQggA1hTAZQgqAMglAAQgmAAgigLgAABAlQAGAEAKgBQALgBAAgIIgEAAQgPAAgIAGgAgulCQgigKgRgXQAAgLADgBIgIgEQgEgDADgHQgKgCABAQQgFAAgEgEQgFgEgDgBQgDgSALgWQAEgBgBAJQgBAJAEAAQABgWASgTIACgBQARgSAbgHIgCAJQgBAEAIgCIgGAMQgDAHABAIQAIgEAGgRQAFgBADACQAEADADgBQAFgDgIgDQgLgDACgGQAkgPAlADQAvAEAFAjQAGABACgGQABgGADgBQAJgCAGAIQgFAfgQABQADAjgUAYIgDADQgUAVgkAHQgNACgLAAQgVAAgUgGgAAFleQgQAEgBAMQAFgDASgDQARgDAGgGQgIgDgIAAQgGAAgHACgAgJl4QAOAJARgGIACgEQAFgLgBgIIgJAAQACAKgGAEQgGAFgNgBIgEgHQgBgCADgGQgTAIAQAJgAghmnQAAAEgEAKIgBADQgCAKAKAAQAEgBABgGIABgIQABgMgIAAIgCAAgAAimpQgEADgCAHQgBAGAEAEQAIADABgMQACgLgHAAIgBAAgAASnCQgFAEAAAGQAFgEAcgFQgDgDgHgCIgLgEQgBAEgGAEg");
	this.shape.setTransform(0.5,-14.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s().p("AgSApQgHACABATQABATgEAEQgVgFg/gCQg6gCgcgJQAihMAKg2QAzA5BrgRQAtgHApgTQApgUAWgYQAMATAMAoQAOAvAGAOQgWAUgqANIhNATIgZAIIgQACIgfAFQAAgkgDgRg");
	this.shape_1.setTransform(0.8,-4.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FAFFFF").s().p("AgBAAQgBgLgCgCQAHADACAKQACAJgGAGQgCgDAAgMg");
	this.shape_2.setTransform(-10,67.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#AA5500").s().p("AADD7QgBgFACgGQADgFgBgFQArgFAQgEQAegJANgRQACAdgmAPQgcAMglAAIgEAAgAgWD7QgCgBgBgGQAAgFgDAAQgGgCAAAFQAAAHgDgBQgGABgCgJQgCgJgIACQgDAAACAFQAEAGgGABQgFACgBgGQgBgHgCgBQgEgBgCAEIgCAGQgUgJgNgRQATAJBXAFQABAFgDAFQgCAGABAFIgRAAgAgCCrQgLgBAAgVQAAgagDgFQALgEAWgCIABAAIAAAEQgIAGACAbQABAXgOAAIgBgBgAhNjjIgBgCQgCgFgIACIgLADQATgWATABQgDALgMAMg");
	this.shape_3.setTransform(2.7,45.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DE7710").s().p("AhOgSQAUgBA7ACQArABAagFQAQATgNAVQheABgzACIgGgog");
	this.shape_4.setTransform(2.5,54.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F2AD48").s().p("AhLB7QAEiAAWh1QAHAIAAAZQABAOgCAgQAABYgDAxQAHgegBhMQgChNAIgeQARADgBAXIAAABQADgSAHgJQgDAfAAAHQABAVANAIIAACgQAFgTgDhKQgCg9AOgVQAHAYgDA7QgDBAAFAZQAAgPAChMQACg8gHgdQAGAHAXgFQgCAjAEAyQAEA8ABAWQAEgWgGhBQgGg5AKgcQALA+AHCGQhCAFhUAAIgBAAgAgXg6QgCAwAABuQADgbABgsIABhLIABgkIgEAYg");
	this.shape_5.setTransform(2.2,39.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DE8B10").s().p("Ah2DKQADgGgBgGQgOgVgCgkQgBgLADg3QAChhADgwQAFhUAQgwQAFgEAVgFIACACQgJAIgNAKQACAGAKADQAMAEADACQgFCOgWBzQAIAFABAWQACAXAHAFQAGAGASgDQAbgFAHAAQADAIABAXQABAWAEAIIAUAAQALgIABgSIgBgjIAAgEQAZgBAlACQAIgvgNhdQgMheAIgvQgKgTAIgaQAHgZAMgDQASAWAFAnQACAOACA8QABAbAKBJQAJA+gCAeQgEBDgLAYQgSAohaAFIgTAAQhJAAgkgeg");
	this.shape_6.setTransform(2.7,44.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#996600").s().p("AhnAdQgBgGADgGIAHgRQAPADARgOQAYgVAFgCQAFADgEAGQgFAHACAFQAKgCAcgJQAYgHATAAQgLAJgBAGQAEAFAgAEQAdADAFANQhZgcgyAfQgBgFAEgDQAFgEAAgCQgQAAgWAOIgfAVIgEACQgCgDgBgDg");
	this.shape_7.setTransform(-0.1,-61.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("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");
	this.shape_8.setTransform(-3.3,3.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3A3839").s().p("ABOANIBBgCIgCACIgeAAIgEAAIgdAAgAiNAHIACAAIgDABIABgBgAhlgHIgJgDIACgCIAJAEIAEACIgGgBg");
	this.shape_9.setTransform(3.8,-65.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(49));

	// Layer 2
	this.instance = new lib.BubArmL();
	this.instance.parent = this;
	this.instance.setTransform(-14.6,-40.7,1,1,0,0,0,12.5,9.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({scaleX:1,scaleY:1,rotation:-24,x:-18,y:-41.6},9).to({scaleX:1,scaleY:1,rotation:0,x:-14.6,y:-40.7},10).wait(16));

	// Layer 3
	this.instance_1 = new lib.BubArmR();
	this.instance_1.parent = this;
	this.instance_1.setTransform(13,-43.2,1,1,0,0,0,-13.8,12.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({rotation:8.3,y:-43.3},9).to({rotation:0,y:-43.2},10).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.9,-73.8,81.9,147.8);


(lib.Bub = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.BubBalancing();
	this.instance.parent = this;
	this.instance.setTransform(2,40.5,1,1,0,0,0,2,40.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({regY:40.6,rotation:-2.2,y:40.6},12).to({regY:40.5,rotation:0.3,y:40.5},13).to({rotation:1.8,y:40.4},19).to({regY:40.6,rotation:4.3,y:40.6},12).to({regY:40.5,rotation:0,y:40.5},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.9,-73.8,81.9,147.8);


(lib.TwiggsPRESS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_30 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(30).call(this.frame_30).wait(1));

	// Layer 1
	this.instance = new lib.TwiggsHeadArms();
	this.instance.parent = this;
	this.instance.setTransform(-5,21,1,1,0,0,0,1.9,-17.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({scaleY:0.69,x:-1.8,y:37.6},3).to({scaleY:1,x:-5,y:21},2).to({rotation:-61.8,x:33.7,y:1.4},2).to({scaleX:1,scaleY:1,rotation:-171.4,x:2.7,y:-18.8},2).to({rotation:-306.4,x:-29.8,y:-1.3},2).to({regY:-17.2,scaleX:1,scaleY:1,rotation:-310.6,x:-20.8,y:10.5},1).to({regY:-17.1,scaleX:1,scaleY:1,rotation:-360,x:-5,y:21},1).wait(4));

	// Layer 3
	this.instance_1 = new lib.TwiggsLegR();
	this.instance_1.parent = this;
	this.instance_1.setTransform(41.8,24.6,0.998,0.998,143.9,0,0,-11.9,25.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({x:44.2,y:19.1},0).to({rotation:77.5,x:38.7,y:-1.1},3).to({scaleX:1,scaleY:1,rotation:0,x:21.7,y:-19.8},2).to({rotation:-30,x:23.1,y:-21.1},3).to({regY:25.7,scaleX:1,scaleY:1,rotation:-6.6,x:14.1,y:-1.4},3).to({regY:25.8,scaleX:1,scaleY:1,rotation:-30,x:23.1,y:-21.1},2).to({rotation:-121.8,x:-7.6,y:-19.1},2).to({scaleX:1,scaleY:1,rotation:-190,x:-10.2,y:13.1},1).to({scaleX:1,scaleY:1,rotation:-278,x:20.4,y:21.5},1).to({regX:-12,regY:25.7,scaleX:1,scaleY:1,rotation:-259.8,x:25.1,y:4.6},1).to({regX:-11.9,regY:25.8,scaleX:1,scaleY:1,rotation:-288,x:12.8,y:-17.1},1).to({scaleX:1,scaleY:1,rotation:-276.8,x:21.5,y:-20.4},1).to({regY:25.7,scaleX:1,scaleY:1,rotation:-227.1,x:22.7,y:-16.2},1).to({regY:25.8,rotation:-279.8,x:32.1,y:-3.2},1).to({scaleX:1,scaleY:1,rotation:-216.1,x:44.2,y:19.1},2).wait(1));

	// Layer 2
	this.instance_2 = new lib.TwiggsBack();
	this.instance_2.parent = this;
	this.instance_2.setTransform(9.2,17.5,0.998,0.998,68.9,0,0,-11.8,9.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({regX:-11.7,scaleX:1,scaleY:1,rotation:0,x:5.3,y:10.8},5).wait(3).to({x:2.5,y:28.7},3).to({x:5.3,y:10.8},2).to({regY:9.7,rotation:-91.8,x:24.9,y:-2.3},2).to({scaleX:1,scaleY:1,rotation:-228.4,x:8.5,y:-13.6},2).to({regY:9.6,scaleX:1,scaleY:1,rotation:-274.8,x:-4.8,y:-9.4},1).to({regX:-11.8,regY:9.7,rotation:-321.3,x:-18.3,y:-5.3},1).to({regX:-11.7,regY:9.6,scaleX:1,scaleY:1,rotation:-360,x:5.3,y:10.8},2).wait(1).to({scaleX:1,scaleY:1,rotation:-321.4},0).to({regX:-11.8,rotation:-291.1,x:9.2,y:17.5},2).wait(1));

	// Layer 4
	this.instance_3 = new lib.TwiggsLegL();
	this.instance_3.parent = this;
	this.instance_3.setTransform(41,16.4,0.997,0.997,170.8,0,0,24.2,11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:24.3,regY:11.3,scaleX:1,scaleY:1,rotation:205.9,x:38.2,y:18.2},3).to({regX:24.2,regY:11.2,scaleX:1,scaleY:1,rotation:132.9,x:43.4,y:15.2},3).to({scaleX:1,scaleY:1,rotation:120.1,x:33.4,y:-2.6},3).to({regX:24.1,regY:11.3,scaleX:1,scaleY:1,rotation:0,x:7.6,y:-23.5},2).to({scaleX:1,scaleY:1,rotation:-51.2,x:7.7},3).to({regY:11.4,scaleX:1,scaleY:1,rotation:123.7,x:12.6,y:-4.3},3).to({regY:11.3,scaleX:1,scaleY:1,rotation:38.8,x:13.2,y:-22},2).to({rotation:-53,x:-8.2,y:-9},2).to({regX:24.2,regY:11.2,scaleX:1,scaleY:1,rotation:-121.3,x:0.9,y:16.7},1).to({regX:24.1,regY:11.3,rotation:-189.6,x:27.7,y:14.4},1).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:-158.3,x:26.5,y:0.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:-210.6,x:7.6,y:-21.2},0).to({regX:24.2,scaleX:1,scaleY:1,rotation:-114.2,x:13.2,y:-23.3},1).to({scaleX:1,scaleY:1,rotation:-107.6,x:15.5,y:-18.4},1).to({scaleX:1,rotation:-155.4,x:34.1,y:-3.2},1).to({regX:24.1,regY:11.2,scaleX:1,scaleY:1,rotation:-111.1,x:39.6,y:17.7},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.1,-1.6,135.5,88.5);


(lib.TwiggsButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		playSound("highclick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(3));

	// Layer 2
	this.instance = new lib.TwiggsPRESS();
	this.instance.parent = this;
	this.instance.setTransform(-25.1,-32.8,0.772,0.772);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#458FFE").s().p("AlUKPQkqgIkggBQgJAAgIgCQgkgEAAgrQgBgYA+iCQA/iDAFgOQAahJAXg3IANg/QAOg5AagpQASgcA0haQASggANgOQABgHACgDQAHgIAUgEQAIgBC9gPIBIgFIgHgXQgbh4AAgWQAAgaAJgQQALgUAhgcIARgMQAJgrArglQAdgaApgPQA/hMCYAAQBAAAAoASIAYgBQBFAAAbAOQAeAOAHAAQCRAJBxAEQAmABAhARQAhAQARAZQAWAmAgApIAAAAQARAKAHAUQAGANgBAgQAAAvgxA2QghBRgSAcIgLASQBCAEAfAKQAlAMAAAeQAAANgJANQAdAoAKBBIAFAlIA/CqQASA0AUBmQAPA1AtBjIgBAJQAPAcAAAEQAAAYgSAKIgCAFQgNAQgzAJQh1AVm6AAQmFAAkhgIgAIsi9IAAAAIABgBIgBABg");
	this.shape.setTransform(-24.4,20.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape}]},2).wait(1));

	// Layer 1
	this.instance_1 = new lib.Twiggs();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-25.1,-32.8,0.772,0.772);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgfA3QgPgHAAgMQAAgDACgCQADgCADAAQAEAAADAEQAEAGADADQAHAEANAAQALAAALgFQANgHAAgMQAAgKgLgGQgKgFgNgBQgNAAgIgEQgMgHAAgMQAAgOAQgLQAQgMAPAAQAIAAAKADQAMADAAAGQAAAHgHAAIgLgCIgMgCQgMABgIAGQgJAGAAAJQAAAGAMADIAQACQASABAKAKQAJAIAAAOQAAATgRALQgPAKgTAAQgPAAgMgGg");
	this.shape_1.setTransform(25.4,66.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgiA+QgIgIAAgaIABgKIAAgOIgBgDIACgFIACghIgBgJIgBgIQAAgKAIAAQADAAADADQAJgDAJgCIAPgBQATAAAMAFQAFACAAAGQAAADgCACQgDADgDAAIgCAAQgOgFgMAAIgOACIgQAEIAAAIIgBAeIAigDIATgCQADAAADADQACACAAADQAAAHgHAAIgTACIgkAEIAAALIgBAIQAAASADADQACACAKABIAOAAIAPgBIAFgBIAEAAQAJAAAAAIQAAAHgHABQgHACgYAAQgZAAgHgGg");
	this.shape_2.setTransform(14.9,66.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AghA/QgFgEAAgJIABgaQACgjAAgtQAAgDADgDQACgCADAAQAEAAACACQACADAAADQAAAtgCAkIgBAMIAAAMQAUAAAfgKIADAAQADAAACACQACADAAADQAAAFgFACQgJAFgTADQgRADgLAAQgIAAgDgCg");
	this.shape_3.setTransform(5.2,66.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AghA9QgCgCAAgDIAAgXIABghIACghIAAgLIABgLQACgHAGABIAHgBIALgBQAPAAAMAKQAOAMAAAPQAAATgPALQgNALgSAAIgKgBIAAAqQAAADgDACQgCACgCAAQgEAAgCgCgAgRgvIAAAPIgCAgIAJAAQANAAAIgGQAKgIAAgMQABgJgKgHQgJgFgJAAIgGAAIgFAAg");
	this.shape_4.setTransform(-3.5,66.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgiA7QgDgDAAgDQAAgDADgDQACgCADgBIARgBIABgPIAAgNIgBgOQAAgRACgcIgKABIgKAAQgEAAgCgCQgCgCAAgEQAAgIAHgBIAYAAQAPAAAYAEQAHABAAAHQAAADgDADQgCACgDAAIgNgCIgNgBQgCAXAAAUIABAOIAAAOIAAAOIAZgBQADAAACADQADACAAAEQAAADgDACQgCACgDAAIgOABIgNAAIgPACIgQABQgDAAgCgCg");
	this.shape_5.setTransform(-12.4,66.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AggAxQgLgMAAgRQgBgaAXgcQATgYASAAIAHAAIAGACQACgFAFAAQAFAAACAIQABAGAAAKQAAADgCACQgCADgDAAQgGAAgCgGQgDgFgCgBQgBgBgHAAQgLAAgOASQgTAYAAAUQAAAKAHAIQAHAHAKAAQAGAAAJgEIAOgJQAEgEADAAQAEAAACADQACADAAADQAAADgDADQgVATgUAAQgRAAgLgNg");
	this.shape_6.setTransform(-21.6,66.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgiA7QgDgDAAgDQAAgDADgDQACgCADgBIARgBIABgPIAAgNIgBgOQAAgRACgcIgKABIgKAAQgEAAgCgCQgCgCAAgEQAAgIAHgBIAYAAQAPAAAYAEQAHABAAAHQAAADgDADQgCACgDAAIgNgCIgNgBQgCAXAAAUIABAOIAAAOIAAAOIAZgBQADAAACADQADACAAAEQAAADgDACQgCACgDAAIgOABIgNAAIgPACIgQABQgDAAgCgCg");
	this.shape_7.setTransform(-31.1,66.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgFA7QgCgDAAgDIAAgEIABgDIgBgMIAAgMIgCgfIgCggIgIAAQgRAAgKgCQgHgCAAgGQAAgDADgDQACgDAEABIAMABIANABIAPAAIANAAIATAAIASABQADAAACADQADACAAAEQAAADgDACQgCADgDAAIgSgBIgTgBIgFAAIACAkIACAiIAAAJIABAIQAAAGgCAEQgCAFgFAAQgCAAgDgCg");
	this.shape_8.setTransform(-40.5,66.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgoA8QgCgCAAgEIgBgSIAAgTIABgVIACgWIgBgMIgBgMQAAgEADgEQADgEAFAAIATACQALABAHAEQAgARAAAZQAAAMgLAJQgJAHgNAEQAZANAMAPQACACAAADQAAAEgCACQgDADgDAAQgDAAgDgDQgagagfgJIAAAQIABAPQAAAEgDACQgCADgDAAQgEAAgCgDgAgZgjIABAKIgBAQIgCAOIAEAAIADABQAUAAAJgGIAJgFQAEgFAAgDQAAgLgNgKQgKgIgNgCIgMgBg");
	this.shape_9.setTransform(-51.6,66.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAcApQgDgHgDgSIgUAEIgVAEIgNAfQgDAFgFgBQgCABgDgDQgCgCgBgEQABgEALgZQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgHAIgCQAJgQAOgWQASgeAEAAQAHAAACAJIAFAbIAMA1IAFANIACAJQgBADgCACQgDADgDAAQgHAAgFgTgAgKAFIAdgFIgGgeg");
	this.shape_10.setTransform(-63,66.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AghA9QgCgCAAgDIAAgXIACghIABghIAAgLIABgLQACgHAGABIAHgBIAMgBQANAAANAKQAOAMAAAPQAAATgPALQgOALgRAAIgKgBIgBAqQAAADgBACQgDACgDAAQgDAAgCgCgAgRgvIAAAPIgCAgIAJAAQANAAAJgGQAJgIABgMQAAgJgKgHQgJgFgJAAIgGAAIgFAAg");
	this.shape_11.setTransform(-73,66.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgFA7QgCgDAAgDIAAgEIABgDIgBgMIAAgMIgCgfIgCggIgIAAQgRAAgKgCQgHgCAAgGQAAgDADgDQACgDAEABIAMABIANABIAPAAIANAAIATAAIASABQADAAACADQADACAAAEQAAADgDACQgCADgDAAIgSgBIgTgBIgFAAIACAkIACAiIAAAJIABAIQAAAGgCAEQgCAFgFAAQgCAAgDgCg");
	this.shape_12.setTransform(2.9,41.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgfA3QgPgHAAgMQAAgDACgCQADgCADAAQAEAAADAEQAEAGADADQAHAEANAAQALAAALgFQANgHAAgMQAAgKgLgGQgKgFgNgBQgNAAgIgEQgMgHAAgMQAAgOAQgLQAQgMAPAAQAIAAAKADQAMADAAAGQAAAHgHAAIgLgCIgMgCQgMABgIAGQgJAGAAAJQAAAGAMADIAQACQASABAKAKQAJAIAAAOQAAATgRALQgPAKgTAAQgPAAgMgGg");
	this.shape_13.setTransform(-9,42.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAcApQgDgHgDgSIgVAEIgUAEIgOAfQgCAFgFgBQgCAAgDgCQgCgDAAgDQAAgDAMgaQgBAAAAgBQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgHAIgCQAJgQAOgWQARgeAGAAQAFAAADAIIAFAbIAMA2IAEANIACAJQAAADgCACQgDADgDAAQgHAAgFgTgAgJAFIAcgFIgHgeg");
	this.shape_14.setTransform(-20.7,42.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AghA9QgCgCAAgDIAAgXIACghIABggIAAgMIABgLQACgHAGABIAHgBIAMgBQANABANAJQAOAMAAAPQAAATgPALQgOALgRAAIgKgBIgBAqQAAADgBACQgDACgDAAQgDAAgCgCgAgRgvIAAAPIgCAfIAJABQANAAAJgGQAJgIABgMQAAgJgKgGQgJgHgJABIgGAAIgFAAg");
	this.shape_15.setTransform(-30.7,41.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_16.setTransform(-42,47.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgnAvIgBgEQAAgEACgCQADgCADAAQADAAAEADQADAGACABQAGADAJAAQANABAIgLQAJgKAAgOQAAgLgEgHQgEgJgLAAQgHAAgFADQgFABgEAEIgJAJQgDADgEABQgDAAgDgCQgCgDAAgDIABgNIADghIgBgGIgCgFQABgFAHAAIAGAAIAEAAIAOAAIANAAIAGAAIAHAAIAEgBIAFAAQADAAACACQADADAAADQgBAIgSABIgGAAIgFAAIgMAAIgOAAIgDAbQALgJARAAQASAAAJANQAIAMAAARQAAAWgNAOQgNAOgUAAQgXAAgLgRg");
	this.shape_17.setTransform(-48.9,41.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#0000FF").ss(1,1,1).p("AOwFpI9fAAQCilACjmRIVQAAg");
	this.shape_18.setTransform(-25.3,44.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF3366").s().p("AuvFpQCilACjmRIVQAAIDKLRg");
	this.shape_19.setTransform(-25.3,44.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[]},2).wait(1));

	// Layer 3
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(250,255,255,0.702)").s().p("AwmGxIF8tgIXuAAIDjNgg");
	this.shape_20.setTransform(-25.9,44.7);
	this.shape_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(1).to({_off:false},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.2,-75,103.2,98.9);


(lib.SwitchChapter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgdAtQgDgDAAgIIAAhBQAAgRAMAAQAGAAADAEQACAEAAAHQAFgHAEgEQAEgEAIAAQAHAAAHAEQAHAEAAAGQAAAFgDACQgDADgDAAIgHgBIgJgCQgFAAgDADQgCADgCAFQgCAFgBAIIgBARIAAAUQAAAIgDADQgDAEgGAAQgFAAgEgEg");
	this.shape.setTransform(63.7,1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AggAkQgMgNAAgXQAAgKACgJQADgJAHgGQAGgHAJgDQAIgEALAAQANAAALAGQAJAGAFAJQAGAKAAAKQAAAIgGACQgEADgKAAIguAAQAAAIAEAGQADAHAFADQAFADAFAAIAIgBIAIgDIAFgFIAHgGQACgCAEAAQAEAAACACQACACAAAEQAAADgDAEQgCAFgFAEQgFAEgIACQgIADgKAAQgWAAgNgNgAgNgZQgGAGgBAMIAqAAQAAgMgGgGQgGgGgJAAQgJAAgFAGg");
	this.shape_1.setTransform(53.9,1.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgIA+QgGgFgCgGQgBgHAAgLIAAgtIgEAAQgFAAgDgDQgDgCAAgEQAAgEADgCQAEgDAEAAIAEAAIAAgNIAAgJIACgHIADgDQADgCAEAAQAEAAADAEQACACAAADIABAKIAAAPIAJAAQAFAAADADQACACAAAEQAAAFgDACQgEACgHAAIgFAAIAAArIABAJQAAADACACQABABAEABIAGgBIAGgBQACAAADACQACADAAADQABAGgHADQgGADgMAAQgKAAgGgDg");
	this.shape_2.setTransform(45.7,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgsA/QgCgFAAgHIAAhnQAAgHADgDQADgEAFAAQAFAAAEAEQADADAAAHIAAADQAHgJAHgDQAHgEAIAAQALAAAKAFQAJAGAGALQAFALAAAPQAAALgDAIQgDAKgGAGQgFAGgIAEQgHADgJAAQgJAAgHgEQgHgEgGgIIAAAkQAAAQgMAAQgGAAgDgEgAgPgoQgHAIAAAPQAAAOAHAHQAGAIAJAAQAGAAAGgDQAFgEADgFQADgHAAgKQAAgKgDgHQgDgGgFgEQgFgEgHAAQgIAAgHAIg");
	this.shape_3.setTransform(36.8,3.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AAbAuQgDgEgEgHQgJAHgIAEQgHADgKAAQgKAAgGgEQgHgDgEgHQgEgGAAgHQAAgKAGgHQAGgGALgCIAMgDIAOgDIAOgEQAAgJgEgFQgDgEgLAAQgIAAgEACQgFADgDAFIgFAHQgBABgFAAQgEAAgDgCQgDgDAAgEQAAgGAFgGQAEgGAKgEQAJgEANAAQAQAAAJAEQAJAEAEAIQAEAIAAANIAAAOIAAANQAAAGACAIIACAJQAAAEgDADQgEADgEAAQgEAAgEgDgAADAFIgNADQgEABgDADQgEADAAAFQAAAGAEADQAEAEAHAAQAGAAAGgDQAGgDADgFQADgFAAgNIAAgDIgPAEg");
	this.shape_4.setTransform(25.8,1.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AATA0IAAgpQAAgLgEgFQgDgHgKABQgFAAgFADQgFAEgDAFQgCAGAAANIAAAgQAAAHgDAEQgDADgGAAQgMAAAAgOIAAhnQAAgHADgEQADgEAGABQAGgBADAEQADAEAAAHIAAAjIAJgIQAEgDAFgBQAFgCAGAAQAJAAAHAEQAHAEAEAHQADAEABAGIABALIAAAuQAAAHgEAEQgDADgFAAQgMAAAAgOg");
	this.shape_5.setTransform(15.1,0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgNBBQgIgCgHgEQgHgFgFgGQgGgGgDgHQgEgIgCgJQgBgIAAgKQAAgOAEgNQAFgMAIgIQAIgKALgEQAMgFAMABQAPAAANAFQAMAHAHAJQAGAJAAAIQAAAFgDAEQgDADgFAAQgFAAgCgDIgGgIQgFgKgHgEQgHgFgKAAQgPAAgJAMQgKAMAAAWQAAAPAEAKQAFAKAHAFQAIAFAJAAQALAAAJgFQAHgGAEgLQACgFACgDQACgDAGgBQAFABADADQAEADAAAFQAAAGgEAHQgDAHgGAHQgHAHgKAEQgKAEgNAAQgJAAgJgBg");
	this.shape_6.setTransform(3,0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AATA0IAAgpQAAgLgEgFQgDgHgKABQgFAAgFADQgFAEgDAFQgCAGAAANIAAAgQAAAHgDAEQgDADgGAAQgMAAAAgOIAAhnQAAgHADgEQADgEAGABQAGgBADAEQADAEAAAHIAAAjIAJgIQAEgDAFgBQAFgCAGAAQAJAAAHAEQAHAEAEAHQADAEABAGIABALIAAAuQAAAHgEAEQgDADgFAAQgMAAAAgOg");
	this.shape_7.setTransform(-13.6,0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AggAkQgNgNAAgWQABgOAFgLQAGgLALgHQALgGAOAAQAJAAAIADQAIADAFAEQAGAEACAFQADAFAAAEQAAAFgDADQgDADgFAAQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAAAAAgBIgFgFQgFgHgFgDQgEgDgHAAQgKAAgGAIQgHAIAAAOQAAAGABAGQACAGAEAEQADAEAEACQAEACAFAAQAHAAAFgDQAGgEADgHQACgEADgCQADgCADAAQAEAAADADQADADAAAEQAAAFgCAFQgDAFgGAFQgFAEgIADQgJADgKAAQgWAAgMgNg");
	this.shape_8.setTransform(-23.9,1.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgIA+QgGgFgCgGQgCgHABgLIAAgtIgEAAQgFAAgCgDQgEgCAAgEQAAgEAEgCQADgDAEAAIAEAAIAAgNIAAgJIABgHIAEgDQADgCADAAQAFAAACAEQADACAAADIABAKIAAAPIAJAAQAFAAADADQADACAAAEQAAAFgEACQgEACgHAAIgFAAIAAArIABAJQAAADACACQABABAEABIAGgBIAGgBQACAAADACQACADAAADQABAGgHADQgGADgMAAQgKAAgGgDg");
	this.shape_9.setTransform(-32.1,0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgIA/QgDgFAAgHIAAhDQAAgHADgEQADgDAFgBQAFABAEADQADAEAAAHIAABDQAAAIgDAEQgEADgFAAQgFAAgDgDgAgHgsQgEgEAAgFQAAgGAEgCQADgEAEAAQAFAAAEADQADADAAAGQAAAFgDAEQgEADgFAAQgEAAgDgDg");
	this.shape_10.setTransform(-38,0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AAVAuQgDgDgBgDIgEgLIgNgtIgMAtQgDAKgDAFQgDAFgIAAQgDAAgDgCIgFgEIgDgHIgCgGIgUg4QgDgJAAgDQAAgDADgEQAEgDAEAAQAFAAADAEIAFALIAPA1IAOgxIADgLQACgCADgDQADgDAEAAQAGAAADADQACADABADIAEAKIAOAxIAQg1IACgIIAEgFQACgCAEAAQAFAAADADQADADAAAEQAAAEgDAIIgTA4IgEALIgFAFQgDADgFAAQgGAAgDgDg");
	this.shape_11.setTransform(-47.8,1.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgeA8QgJgGgGgJQgFgIAAgIQAAgFADgEQADgDAGAAQAEABADACQACACACAGIAGAKQADAEAFADQAFACAIAAQALABAHgGQAHgFAAgJQAAgGgDgEQgEgEgHgCIgPgEQgOgDgJgFQgKgEgFgHQgGgIAAgKQAAgLAGgIQAGgJALgEQALgFAOABQAMAAAIACQAJAEAGAFQAFAEADAFQADAGAAAFQAAAFgEADQgDAEgFAAQgEAAgDgCIgFgIQgDgHgFgEQgFgEgKAAQgKAAgGAEQgHAFAAAGQAAAEADADIAFAFIAIADIALADQALACAJAEQAJADAGAEQAGAEAEAGQADAHAAAKQAAALgGAKQgGAJgLAGQgMAEgQAAQgSAAgMgGg");
	this.shape_12.setTransform(-61.1,0.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgdAtQgDgDAAgIIAAhBQAAgRAMAAQAGAAADAEQACAEAAAHQAFgHAEgEQAEgEAIAAQAHAAAHAEQAHAEAAAGQAAAFgDACQgDADgDAAIgHgBIgJgCQgFAAgDADQgCADgCAFQgCAFgBAIIgBARIAAAUQAAAIgDADQgDAEgGAAQgFAAgEgEg");
	this.shape_13.setTransform(63.7,1.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AggAkQgMgNAAgXQAAgKACgJQADgJAHgGQAGgHAJgDQAIgEALAAQANAAALAGQAJAGAFAJQAGAKAAAKQAAAIgGACQgEADgKAAIguAAQAAAIAEAGQADAHAFADQAFADAFAAIAIgBIAIgDIAFgFIAHgGQACgCAEAAQAEAAACACQACACAAAEQAAADgDAEQgCAFgFAEQgFAEgIACQgIADgKAAQgWAAgNgNgAgNgZQgGAGgBAMIAqAAQAAgMgGgGQgGgGgJAAQgJAAgFAGg");
	this.shape_14.setTransform(53.9,1.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgIA+QgGgFgCgGQgBgHAAgLIAAgtIgEAAQgFAAgDgDQgDgCAAgEQAAgEADgCQAEgDAEAAIAEAAIAAgNIAAgJIACgHIADgDQADgCAEAAQAEAAADAEQACACAAADIABAKIAAAPIAJAAQAFAAADADQACACAAAEQAAAFgDACQgEACgHAAIgFAAIAAArIABAJQAAADACACQABABAEABIAGgBIAGgBQACAAADACQACADAAADQABAGgHADQgGADgMAAQgKAAgGgDg");
	this.shape_15.setTransform(45.7,0.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgsA/QgCgFAAgHIAAhnQAAgHADgDQADgEAFAAQAFAAAEAEQADADAAAHIAAADQAHgJAHgDQAHgEAIAAQALAAAKAFQAJAGAGALQAFALAAAPQAAALgDAIQgDAKgGAGQgFAGgIAEQgHADgJAAQgJAAgHgEQgHgEgGgIIAAAkQAAAQgMAAQgGAAgDgEgAgPgoQgHAIAAAPQAAAOAHAHQAGAIAJAAQAGAAAGgDQAFgEADgFQADgHAAgKQAAgKgDgHQgDgGgFgEQgFgEgHAAQgIAAgHAIg");
	this.shape_16.setTransform(36.8,3.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAbAuQgDgEgEgHQgJAHgIAEQgHADgKAAQgKAAgGgEQgHgDgEgHQgEgGAAgHQAAgKAGgHQAGgGALgCIAMgDIAOgDIAOgEQAAgJgEgFQgDgEgLAAQgIAAgEACQgFADgDAFIgFAHQgBABgFAAQgEAAgDgCQgDgDAAgEQAAgGAFgGQAEgGAKgEQAJgEANAAQAQAAAJAEQAJAEAEAIQAEAIAAANIAAAOIAAANQAAAGACAIIACAJQAAAEgDADQgEADgEAAQgEAAgEgDgAADAFIgNADQgEABgDADQgEADAAAFQAAAGAEADQAEAEAHAAQAGAAAGgDQAGgDADgFQADgFAAgNIAAgDIgPAEg");
	this.shape_17.setTransform(25.8,1.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AATA0IAAgpQAAgLgEgFQgDgHgKABQgFAAgFADQgFAEgDAFQgCAGAAANIAAAgQAAAHgDAEQgDADgGAAQgMAAAAgOIAAhnQAAgHADgEQADgEAGABQAGgBADAEQADAEAAAHIAAAjIAJgIQAEgDAFgBQAFgCAGAAQAJAAAHAEQAHAEAEAHQADAEABAGIABALIAAAuQAAAHgEAEQgDADgFAAQgMAAAAgOg");
	this.shape_18.setTransform(15.1,0.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgNBBQgIgCgHgEQgHgFgFgGQgGgGgDgHQgEgIgCgJQgBgIAAgKQAAgOAEgNQAFgMAIgIQAIgKALgEQAMgFAMABQAPAAANAFQAMAHAHAJQAGAJAAAIQAAAFgDAEQgDADgFAAQgFAAgCgDIgGgIQgFgKgHgEQgHgFgKAAQgPAAgJAMQgKAMAAAWQAAAPAEAKQAFAKAHAFQAIAFAJAAQALAAAJgFQAHgGAEgLQACgFACgDQACgDAGgBQAFABADADQAEADAAAFQAAAGgEAHQgDAHgGAHQgHAHgKAEQgKAEgNAAQgJAAgJgBg");
	this.shape_19.setTransform(3,0.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AATA0IAAgpQAAgLgEgFQgDgHgKABQgFAAgFADQgFAEgDAFQgCAGAAANIAAAgQAAAHgDAEQgDADgGAAQgMAAAAgOIAAhnQAAgHADgEQADgEAGABQAGgBADAEQADAEAAAHIAAAjIAJgIQAEgDAFgBQAFgCAGAAQAJAAAHAEQAHAEAEAHQADAEABAGIABALIAAAuQAAAHgEAEQgDADgFAAQgMAAAAgOg");
	this.shape_20.setTransform(-13.6,0.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AggAkQgNgNAAgWQABgOAFgLQAGgLALgHQALgGAOAAQAJAAAIADQAIADAFAEQAGAEACAFQADAFAAAEQAAAFgDADQgDADgFAAQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAAAAAgBIgFgFQgFgHgFgDQgEgDgHAAQgKAAgGAIQgHAIAAAOQAAAGABAGQACAGAEAEQADAEAEACQAEACAFAAQAHAAAFgDQAGgEADgHQACgEADgCQADgCADAAQAEAAADADQADADAAAEQAAAFgCAFQgDAFgGAFQgFAEgIADQgJADgKAAQgWAAgMgNg");
	this.shape_21.setTransform(-23.9,1.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgIA+QgGgFgCgGQgCgHABgLIAAgtIgEAAQgFAAgCgDQgEgCAAgEQAAgEAEgCQADgDAEAAIAEAAIAAgNIAAgJIABgHIAEgDQADgCADAAQAFAAACAEQADACAAADIABAKIAAAPIAJAAQAFAAADADQADACAAAEQAAAFgEACQgEACgHAAIgFAAIAAArIABAJQAAADACACQABABAEABIAGgBIAGgBQACAAADACQACADAAADQABAGgHADQgGADgMAAQgKAAgGgDg");
	this.shape_22.setTransform(-32.1,0.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgIA/QgDgFAAgHIAAhDQAAgHADgEQADgDAFgBQAFABAEADQADAEAAAHIAABDQAAAIgDAEQgEADgFAAQgFAAgDgDgAgHgsQgEgEAAgFQAAgGAEgCQADgEAEAAQAFAAAEADQADADAAAGQAAAFgDAEQgEADgFAAQgEAAgDgDg");
	this.shape_23.setTransform(-38,0.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAVAuQgDgDgBgDIgEgLIgNgtIgMAtQgDAKgDAFQgDAFgIAAQgDAAgDgCIgFgEIgDgHIgCgGIgUg4QgDgJAAgDQAAgDADgEQAEgDAEAAQAFAAADAEIAFALIAPA1IAOgxIADgLQACgCADgDQADgDAEAAQAGAAADADQACADABADIAEAKIAOAxIAQg1IACgIIAEgFQACgCAEAAQAFAAADADQADADAAAEQAAAEgDAIIgTA4IgEALIgFAFQgDADgFAAQgGAAgDgDg");
	this.shape_24.setTransform(-47.8,1.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgeA8QgJgGgGgJQgFgIAAgIQAAgFADgEQADgDAGAAQAEABADACQACACACAGIAGAKQADAEAFADQAFACAIAAQALABAHgGQAHgFAAgJQAAgGgDgEQgEgEgHgCIgPgEQgOgDgJgFQgKgEgFgHQgGgIAAgKQAAgLAGgIQAGgJALgEQALgFAOABQAMAAAIACQAJAEAGAFQAFAEADAFQADAGAAAFQAAAFgEADQgDAEgFAAQgEAAgDgCIgFgIQgDgHgFgEQgFgEgKAAQgKAAgGAEQgHAFAAAGQAAAEADADIAFAFIAIADIALADQALACAJAEQAJADAGAEQAGAEAEAGQADAHAAAKQAAALgGAKQgGAJgLAGQgMAEgQAAQgSAAgMgGg");
	this.shape_25.setTransform(-61.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},2).wait(2));

	// Frame
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#333333").ss(2,1,1).p("AtPh8IafAAIAAD5I6fAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_26).wait(4));

	// Background
	this.instance = new lib.pretestbackblink();
	this.instance.parent = this;
	this.instance.setTransform(-0.1,0.1,1.631,1,0,0,0,51.9,12.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00FFFF").s().p("AtPB9IAAj5IafAAIAAD5g");

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#3399FF").s().p("AtPB9IAAj5IafAAIAAD5g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.7,-13.5,171.6,27);


(lib.SamButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		playSound("highclick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(3));

	// Layer 2
	this.instance = new lib.SamPRESS();
	this.instance.parent = this;
	this.instance.setTransform(1.7,3.2,0.772,0.772);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#458FFE").s().p("ApbKlQgEgvACg4IACgyQgHhUAHhIQANiPBFAAQAwAAAlAEIABgPQAFk5AAibQgQinAChjQADi7BXABQAZAAARAHQAngaAsgHQAogFA/AMIBsATQA/AGA1gPQAFgBBJgrQAkgUAbgLIABAAQATggAtAAQCDgBAAGGIAAKdIAegBQBnAAAkArQADAXAAAUIAAF1QAAA/gMAlQgQACgcARQwIAFgWADIgSADQhEgBgOiSg");
	this.shape.setTransform(3.1,17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape}]},2).wait(1));

	// Layer 1
	this.instance_1 = new lib.Sam();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1.7,3.2,0.772,0.772);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdAzQgOgHAAgLQAAgCACgCQACgDAEAAQADAAADAFQAEAGADACQAGADAMAAQAKAAAKgEQANgHAAgLQAAgKgLgFQgJgEgMgBQgMAAgIgEQgKgGAAgLQAAgNAPgLQAOgKAOAAQAHAAAJACQAMAEAAAEQAAAHgHAAIgKgBIgLgCQgLAAgIAFQgIAGAAAJQAAAFALADIAPABQAQACAKAJQAJAIAAAMQAAARgRALQgOAJgRAAQgOAAgLgFg");
	this.shape_1.setTransform(42.9,82.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgXA7QgHgCgFgDIAAAAQgDAAgDgDQgCgCAAgCIAAgYIABgXIAAgYIgBgbQABgCADgEQADgDADAAQACAAAKAFIANAGQAUAHAPAPQARARAAAVQAAAMgGAMQgGALgKAHQgLAIgVAAQgFAAgIgCgAgbgUIAAAVIgBAnIACABQAGAFAKAAQAPAAAIgFQAIgFAEgIQAEgIAAgJQAAgUgWgPQgHgFgbgMg");
	this.shape_2.setTransform(32.4,82.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgwA5QgDgCAAgDIAAgJIABgKIAAgNIABgOIgBgOIAAgOIgBgOIgBgOQAAgDAEgDQADgDADAAQAEAAAFAJQATAbAOASQARAVAVATIAAgJIAAgJQAAgggDgTIgBgHIgCgIQAAgJAHAAQANAAABAwIgBAYIAAAYIgBAMQgBAHgHAAQgEAAgFgFQgegdgng0IAAARIAAAPIAAATIAAASQAAAUgHAAQgFAAgBgDg");
	this.shape_3.setTransform(20.8,82);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AggAsQgJgLgCgVIgBgkIAAgRIABgJQACgGAFAAQAHAAgBANIAAArQAAAsAfAAQAdAAAAhKIAAgIIAAgGQAAgEACgEQACgEAEAAQAIAAAAAKIAAAJIAAAJQAABVgtAAQgWAAgLgNg");
	this.shape_4.setTransform(9.2,82.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AglA4QgCgDAAgDIAAgRIgBgRIACgUIABgUIgBgLIAAgLQgBgEADgDQADgEAFAAIARABQAKACAHADQAdAQAAAXQAAALgKAIQgIAHgMADQAWANAMANQACADAAACQAAADgCADQgDACgCAAQgDAAgDgCQgYgYgdgJIAAAPIABAOQAAADgCADQgCACgDAAQgEAAgCgCgAgWggIAAAJIgBAOIgCAOIAEAAIADAAQASAAAJgFIAHgFQAEgEABgDQAAgKgMgJQgKgIgLgBIgLgBg");
	this.shape_5.setTransform(-1.1,81.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgfA5QgIgHAAgYIAAgKIABgMIgBgEIABgDIACggIgBgIIgBgIQABgIAHAAQADAAADACIAQgEIAOgBQARAAALAEQAGACAAAFQAAADgCADQgDACgDAAIgCAAQgNgEgLAAIgMABIgPAEIAAAHIgBAcIAfgDIARgBQAEAAACACQACACAAAEQAAAFgHABIgSACIggADIAAAKIgBAIQAAARADACQABADAKAAIANgBIANAAIAFAAIAEgBQAIAAAAAIQAAAGgHABQgGACgXAAQgWAAgGgGg");
	this.shape_6.setTransform(-10.4,81.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AglAyQgJgKAAgUQAAgTAJgTQAJgVAOgMQAJgIAKAAQAHAAAKAEQAOAFAAAHQAAADgCACQgDACgDAAIgEgBQgMgHgHAAQgFAAgGAFIgJALQgQAWgBAaQABAOAEAFQAFAGAMAAQAMAAAKgIQAKgJAFgQQgVABgNAHIgEAAQgDAAgCgCQgCgCAAgDQAAgFADgCQAPgJAnAAQADAAADACQACACAAADQAAAFgEACQgFAWgPAOQgOANgTAAQgSAAgJgKg");
	this.shape_7.setTransform(-20.4,81.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgGAGQgCgCAAgEQAAgDACgCQADgDADAAQAEAAACADQADACAAADQAAAEgDACQgCADgEAAQgDAAgDgDg");
	this.shape_8.setTransform(-32,87.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgUA1QgKgFgEgKIAAgCQAAgEACgCQADgBACAAQADAAADACIADAGQADADAFACQAEABAGAAQAHAAAGgEQAGgFAAgIQABgMgJgGQgHgFgLgCQgIgBAAgFQAAgEAGgCIARgEQAFgDADgDQACgDAAgEQAAgGgEgFQgGgEgIAAQgFAAgFACIgJAGIgEACQgDgBgBgCQgDgCAAgDQAAgGAMgFQAJgFAHAAQAPAAAIAHQALAHAAAOQAAASgPAGIgCAAQAKAEAEAGQAGAHAAALQAAAPgLAKQgKAKgOAAQgLAAgJgFg");
	this.shape_9.setTransform(-38.6,82);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FF33FF").ss(1,1,1).p("AI5EJIxxAAIAAoRIRxAAg");
	this.shape_10.setTransform(2.8,68.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6AFE45").s().p("Ao4EJIAAoRIRxAAIAAIRg");
	this.shape_11.setTransform(2.8,68.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[]},2).wait(1));

	// Layer 3
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(250,255,255,0.702)").s().p("AqJFcIAAq3IUTAAIAAK3g");
	this.shape_12.setTransform(3.9,68.4);
	this.shape_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1).to({_off:false},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.1,-64.4,92.3,128.8);


(lib.MonleyButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		playSound("highclick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(3));

	// Layer 2
	this.instance = new lib.MonkeyPRESS();
	this.instance.parent = this;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#458FFE").s().p("AqYLPIgJgmIAfhkQAghiAAhiQgBg/gVhvQgWhjAAgHQAAgZANgVQATgeApAAQAaAAAJAEQAHAGALAEQAgAKCEACQAIgyALggIgDgQQg8gvAAg3QAAgmAbgzQAhg9AzgIIAgggQBHhEAAgzQgZhKAAg8QABg4AggqQA0hDB6AAQB3AABZCWQAiA4AUBAQATA3gBAgQAABcgJATQgjA2g2BkQgeA3gWA8IABAIQAEAoAaAeQCxgDBVgUQBCgPBFAAQBVAAAABLQAAAxgMBYQgMBYAABcQAABTAiBXIAhBYQAABLhcAAQgfAAgkgKIgWgLQgHgDnYgDQndACgIABIgqAFIgYAFQgaAHgjAMQgwAAgSgjgAnjJCIAAAAIAAgDg");
	this.shape.setTransform(3.2,33.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape}]},2).wait(1));

	// Layer 1
	this.instance_1 = new lib.Monkey();
	this.instance_1.parent = this;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgYAsQgNgGAAgJQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBAAAAQABgBAAAAQABAAABAAQAAAAABAAQADAAADAEIAFAGQAFAEAKAAQAKAAAIgFQALgFAAgKQAAgIgKgEQgHgEgKgBQgKAAgIgDQgIgFgBgKQABgLANgJQAMgJAMAAQAGAAAHACQALADAAAEQAAAFgGAAIgIgBIgLgBQgIAAgHAFQgHAFAAAHQAAAFAJACIAMABQAPACAIAIQAIAGAAAKQAAAQgPAJQgMAHgPAAQgLAAgJgEg");
	this.shape_1.setTransform(40.1,83);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgbAxQgGgGAAgUIAAgJIAAgKIAAgEIABgDIACgaIgBgIIgBgHQAAgHAGAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABABIAOgDIAMgBQAQAAAIAEQAFABAAAEQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAQgBAAgBAAIgBAAQgLgDgKAAIgLABIgNACIABAIIgBAYIAagDIAQgCQACAAACACQABABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAAFgFABIgQABIgcACIAAAJIAAAIQAAAOABACQACACAIAAIALAAIAMAAIAEgBIAEAAQAGAAAAAGQABAFgGABQgGACgTAAQgTAAgGgFg");
	this.shape_2.setTransform(31.7,82.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgbAyQgDgDAAgHIABgVQACgcAAgjQAAgDABgCQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQACACAAADQAAAjgCAdIAAAJIgBAKQARAAAYgIIACAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAAEgEACQgHAEgPACQgNADgJAAQgHAAgDgCg");
	this.shape_3.setTransform(24,82.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgaAxQAAAAgBgBQAAgBAAAAQAAgBAAAAQgBgBAAAAIAAgTIABgaIACgZIAAgJIABgJQABgGAFAAIAGAAIAJgBQALAAAJAIQAMAJAAAMQAAAQgMAIQgLAJgOAAIgHgBIgBAiQAAAAAAABQAAAAAAABQgBAAAAABQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAgAgNglIAAAMIgCAZIAHAAQAKAAAHgFQAIgFAAgLQAAgGgIgGQgHgFgGAAIgGAAIgDABg");
	this.shape_4.setTransform(17,82.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgbAuQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgDACgCQAAAAABgBQABAAAAAAQABAAAAAAQABAAABAAIANgCIABgMIAAgLIgBgKIACgkIgIAAIgJABQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAgGAGAAIATAAQALAAATACQAGABAAAGQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIgKgBIgKgBIgBAiIAAALIAAALIAAALIAUAAQABAAAAAAQABAAAAAAQABAAAAABQABAAABABQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAADgBACQgBAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgLABIgKAAIgMABIgMABQgBAAgBAAQAAAAgBAAQAAAAgBgBQgBAAAAgBg");
	this.shape_5.setTransform(10,82.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgZAnQgJgKAAgNQAAgVASgWQAPgTAOAAIAGAAIAEABQACgDAEAAQAEAAABAGIABANIgBAEQgCACgDABQgEAAgCgGIgDgEIgHgBQgJAAgKAOQgPATAAAQQAAAIAFAGQAFAGAIAAQAFAAAHgEQAEgBAHgGQAEgDACABQAAAAABAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAABQABAAAAABQAAAAAAABQAAAAAAABQAAADgCACQgRAPgQAAQgNAAgJgKg");
	this.shape_6.setTransform(2.6,82.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgbAuQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgDACgCQAAAAABgBQABAAAAAAQABAAAAAAQABAAAAAAIAOgCIAAgMIAAgLIAAgKIABgkIgIAAIgIABQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAgGAFAAIAUAAQALAAAUACQAFABAAAGQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBAAQAAABgBAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgKgBIgLgBIgBAiIAAALIAAALIAAALIAUAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgLABIgLAAIgLABIgNABQAAAAgBAAQAAAAgBAAQAAAAgBgBQgBAAAAgBg");
	this.shape_7.setTransform(-4.9,82.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgDAuQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAIAAgDIAAgDIAAgJIgBgJIgCgZIgBgZIgFAAQgOAAgJgCQgEgCAAgFQAAAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQACgCADAAIAKABIALABIALAAIAKgBIAPABIAOABQABAAABAAQAAAAABAAQAAAAABABQAAAAABABQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAIgOgBIgPgBIgEAAIACAdIABAbIAAAHIABAHQAAAEgBADQgCAEgEAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_8.setTransform(-12.3,82.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AggAwQgBgCAAgDIgBgOIAAgPIABgRIABgRIAAgKIgBgJQAAgEACgDQACgDAFAAIAPACQAJABAFADQAZAOAAATQAAAKgJAGQgHAGgKADQAUALAJAMQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBgBQgVgUgZgHIABAMIAAAMQAAADgBACQgCACgDAAQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAAAgBgBgAgUgbIABAHIgBANIgBALIADABIACAAQAQAAAIgFIAGgEQADgDAAgDQAAgJgKgHQgIgHgKgBIgJgBg");
	this.shape_9.setTransform(-21.2,82.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAWAhIgEgUIgRADIgQADIgLAZQgBADgEAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgBAAAAQAAgDAKgUIgBgEQAAgFAGgCIASgeQAOgYAEAAQAFAAACAHIAEAVIAJArIAEAKIACAHQAAABgBAAQAAABAAABQAAAAgBABQAAAAgBABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgFAAgFgPgAgIAEIAXgEIgFgYg");
	this.shape_10.setTransform(-30.2,82.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgaAxQAAAAgBgBQAAgBAAAAQAAgBAAAAQAAgBAAAAIAAgTIAAgaIACgZIAAgJIAAgJQACgGAFAAIAGAAIAJgBQAKAAAKAIQAMAJgBAMQAAAQgLAIQgLAJgOAAIgIgBIAAAiQAAAAAAABQAAAAAAABQgBAAAAABQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAgAgOglIAAAMIgBAZIAHAAQAKAAAHgFQAIgFAAgLQAAgGgIgGQgGgFgIAAIgEAAIgFABg");
	this.shape_11.setTransform(-38.2,82.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgDAuQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAIAAgDIAAgDIAAgJIgBgJIgBgZIgCgZIgFAAQgOAAgJgCQgEgCAAgFQAAAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQACgCADAAIAKABIALABIALAAIAKgBIAPABIAPABQAAAAABAAQAAAAABAAQAAABABAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABQgBAAAAAAQgBABAAAAQgBAAAAAAIgPgBIgPgBIgEAAIABAdIACAbIAAAHIABAHQAAAEgCADQgCAEgDAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_12.setTransform(34.7,62.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgqAyQgCgCABgDIAAgIIAAgIIAAgMIAAgMIAAgLIAAgNIAAgMIgBgMQAAgDACgCQADgDADAAQADAAAGAIQAPAXAMAQQAPASARARIAAgIIAAgIQAAgbgCgRIgCgGIAAgHQAAgHAGAAQALAAAAApIAAAUIAAAVIgBAKQgBAGgGAAQgEAAgFgEQgZgZghgtIAAAPIAAANIAAAQIAAAQQAAARgGAAQgEAAgCgCg");
	this.shape_13.setTransform(24.6,62.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgbAxQgGgGAAgVIAAgIIABgKIgBgEIABgDIACgbIgBgHIgBgGQAAgIAGAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABABIAOgDIAMgBQAPAAAKAEQAEABAAAFQAAAAAAABQAAAAgBABQAAAAAAABQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAgBAAIgCAAQgKgDgKAAIgKABIgOACIABAHIgBAZIAagDIAQgCQACAAACADQABAAAAAAQABABAAAAQAAABAAABQABAAAAABQgBAFgFABIgQABIgcACIAAAJIAAAHQAAAOABADQACACAIAAIAMgBIALAAIAEAAIAEAAQAGAAAAAGQABAGgGAAQgGACgTAAQgUAAgFgFg");
	this.shape_14.setTransform(15.6,62.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgYAsQgNgGAAgJQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBAAAAQABgBAAAAQABAAABAAQAAAAABAAQADAAADAEIAFAGQAFAEAKAAQAKAAAIgFQALgFAAgKQAAgIgKgEQgHgEgKgBQgKAAgIgDQgIgFgBgKQAAgLAOgJQAMgJAMAAQAGAAAHACQALADAAAEQAAAFgGAAIgIgBIgKgBQgJAAgHAFQgHAFAAAHQAAAFAJACIAMABQAPACAIAIQAIAGAAAKQgBAQgOAJQgMAHgPAAQgLAAgJgEg");
	this.shape_15.setTransform(6.9,62.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgbAxQgGgGAAgVIAAgIIABgKIgBgEIABgDIACgbIgBgHIgBgGQAAgIAGAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABABIAOgDIAMgBQAPAAAKAEQAEABAAAFQAAAAAAABQAAAAgBABQAAAAAAABQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAgBAAIgCAAQgKgDgKAAIgKABIgOACIABAHIgBAZIAagDIAQgCQACAAACADQABAAAAAAQABABAAAAQAAABAAABQABAAAAABQgBAFgFABIgQABIgcACIAAAJIAAAHQAAAOABADQACACAIAAIAMgBIALAAIAEAAIAEAAQAGAAAAAGQABAGgGAAQgGACgTAAQgUAAgFgFg");
	this.shape_16.setTransform(-1.5,62.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AggAwQgBgCAAgDIgBgOIAAgPIABgRIABgRIAAgKIgBgJQAAgEACgDQACgDAFAAIAPACQAJABAFADQAZAOAAATQAAAKgJAGQgHAGgKADQAUALAJAMQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBgBQgVgUgZgHIABAMIAAAMQAAADgBACQgCACgDAAQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAAAgBgBgAgUgbIABAHIgBANIgBALIADABIACAAQAQAAAIgFIAGgEQADgDAAgDQAAgJgKgHQgIgHgKgBIgJgBg");
	this.shape_17.setTransform(-9.7,62.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgaAxQAAAAgBgBQAAgBAAAAQAAgBAAAAQgBgBAAAAIAAgTIABgaIACgZIAAgJIABgJQABgGAFAAIAGAAIAJgBQALABAJAHQAMAJAAAMQAAAQgMAIQgLAJgOAAIgHgBIgBAiQAAAAAAABQAAAAAAABQgBAAAAABQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAgAgNglIAAAMIgCAZIAHAAQAKAAAHgFQAIgFAAgLQAAgGgIgGQgHgFgGABIgGAAIgDAAg");
	this.shape_18.setTransform(-17.2,62.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgFAGQgCgCAAgEQAAgCACgDQACgCADAAQADAAADACQACADAAACQAAAEgCACQgDACgDAAQgDAAgCgCg");
	this.shape_19.setTransform(-26.1,67.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAJApIAAgDIABgDIAAgOIgbgBIgMgBQgGAAAAgEQAAgDADgEIAGgHIAegsQAEgGAHAAQAHAAAAAGIAAA0IACAAQAMAAAAAGQAAAFgFABIgJAAIAAAYQAAAFgGAAQgHAAAAgJgAgQAIIAaABIAAgpIgaAog");
	this.shape_20.setTransform(-31.8,62.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FF33FF").ss(1,1,1).p("AJ7FNQp7iSp6CSQBmlNhmlMQJ6CAJ7iAQhbFdBbE8g");
	this.shape_21.setTransform(1.9,72.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFCC33").s().p("Ap6FNQBmlNhmlMQJ6CAJ7iAQhbFdBbE8Qp7iSp6CSg");
	this.shape_22.setTransform(1.9,72.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[]},2).wait(1));

	// Layer 3
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(250,255,255,0.702)").s().p("ArZGqQB1mqh1mpQLZCkLaikQhpG/BpGUQrai6rZC6g");
	this.shape_23.setTransform(0.8,72.3);
	this.shape_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(1).to({_off:false},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34,-53.9,68,107.9);


(lib.MickSwinging = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006600").s().p("AgUgGQANgLAggDIA2gFQAWAygDAiQhaAFgRAFQADgxgOgagAiFAzQAMgJADgmQADglAOgIQA0AIAJAbQgQADgdAjQgSAWgRAAQgGAAgHgDgABXgqIgngaQAngDAuAmQgGADgHAAQgQAAgRgMg");
	this.shape.setTransform(-49.5,54.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003300").s().p("AhZBGQgVgEgWAAQAGgUAUgRIAjgdQAOAFACAYQABAOgBAfIgDAAQgNAAgSgEgABGAKQgJgbgBgJQAUAIA1AEQgJAdgJANQgOAUgZACQABgTgHgVgAhUghQgTgLgGgJQAmgWAsADQAxACAPAlQhCgFgeAYQgGgIgTgLg");
	this.shape_1.setTransform(-46,54.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCC00").s().p("AiYCLQgCgGAEgFQADgGgBgGQAFABAJgDQAIgDAIABQgCAFgJADQgKADgCAFQABAHALABIATAAQAFAEgVAAIgagBgAgxB5QgRgFgFAAQADgFAOABQASABAEgBQgBAJgLAAIgFAAgAA4BTQAlgTAFghQACAlgiAXQgeATgpACIA9gdgABVBpIgSgEQACgHAVgUQAMAAgCALQgCANAEADQgDAEgIAAIgGAAgABxBhQgBgFALABQALABgBgFQAHAFgIAEQgLAEAAADQgDgIgFAAgABHgOQAOgYgQgeQgTgiAFgRQAGACAQAMQAMAJARgDQAKgJgKgdQAwgKAAAkQgBANgJAMQgLANgQABQgHAAgIgGQgJgFgHgBQAAAJAHAEIANAHQAMABAMgIQAOgIAIgBQgEAGgfARQADAfgOAmIgjgag");
	this.shape_2.setTransform(-42.1,51.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#AE5C0D","#F2AD48"],[0,1],36.1,9.6,-36,-9.7).s().p("AlDAbQgngbgLgEQARgNAjgFQAqgHBagDQABAlAigDQAIgEAFgNIAGgZQEOgWBBgJQgGApAGAKQAXAEAKgOQAFgIAEgZQAlAFAkAVQAVANAmAaQgYANhIAKQhbAMiWANIkBAVIgFABQglAAg9gtg");
	this.shape_3.setTransform(33.4,58.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F2AD48").s().p("AgpAyQgkgoARhEQAcgYAcADQAYAEATAYQApA0gVBLQgRAEgOAAQgqAAgbgeg");
	this.shape_4.setTransform(-2.7,17.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#AA5500").s().p("AkHDLQAMAdgQgNQgOgLgKgRQgEAUgWgXQgXgXADgYQgHgBABANQAAANgJgCQgBgBgDghQgMgEAAAKQgCgRAMgMIACADQBdBJAnAQQAJABAGgMQDJgPE4ggIAAAXQgTAFgegIQgSgFgOAUQgHgGggAHQghAHgOgMQgfAXgagTQgYASg7ABQhAACgSAJQAAgKgFgBQgJgBgRAOQgOAMgKgFQgLgCAKgHQANgIAAgDQgOABgVAPQgSANgUgCQgBgCAEgJQADgGgGgCQgLAAgJANQgJAOgKAAQgMgWgLgFgAE7CkQABgTgJAAQAHgHAVgCIAigDQAAAFgHAWQgSAFgPAAIgOgBgAiggeQAIhygDgjQAVgMAGgKQAHgCABAFQgBAbACBQQACBGgDAqQgEArgDAKQgHAcgVAAQgMgmAHhegADfg6QgIhnAAgoIAQgRQAKgKAMgBQAPA6gHB4QgEBDgCAKQgHArgWAKQAEg3gHhSg");
	this.shape_5.setTransform(31.6,48);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#AE5C0D","#F2AD48"],[0,1],0.4,8.4,-0.4,-8.4).s().p("AmjhBQB8geA6AbQAHgBAHgIQAHgJAGgCIA2AUQAOACAFgPQAEgNAEACQAWABgBAYQAAAMgFAdQAHAJAbgBQATgTAAhCQAcACA/gDQAzACAMAaQAbABAEgJQAHAIgEAOIgHAVQAKAIAVgEQAUgVgBgtQArAIBqgBQBXAHALAwQAIAignA9QiBAFjyAUQj2AVh3AFQALiXhRgTg");
	this.shape_6.setTransform(39.4,15.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DE7710").s().p("AgtAuQANgggRgoIgdgGQgRgEgEgJQBCAAASAXQgCAOgBAfQgEAXgUAAIgDAAgADBAbQAGgWgIgPQgIgTgVgBQAEgKANAFIAWAJQABAHAHAZQADAVgSAAIgBAAgAjCgHQgLAAgDgEIAMgXQADAEAMAbQgCgDgLgBg");
	this.shape_7.setTransform(33.8,7.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FAFFFF").s().p("Am9HCQgHgGgBgGQAAgHAMgBQgCASAFAFQAGABAEgDQAFgCAEAAQgDAKgHAAQgGAAgKgJgAGXmbQgGgGgGgpQAVANAlAKQgOAYgbAAIgFAAg");
	this.shape_8.setTransform(10.4,-5.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCC99").s().p("AilFDQgCgTAJgcQgEgFgFAFQgFAFgFgFQgUhzA/h4QgKgPAOgaQANgYARgIQgBgdARgXQAWgXAJgNQgWADgTAiQAAgEgDgBIAAgDIADgFQAGgMAIgKIAAgkIAHgBQACgDgFgHQgDgEAGgCQAsgUBHAJQgKgkAhgWQgfABgHgcIAGgHQAEgCAFAEIAIAFQADAKAJABQABgEgFgSQgDgOAHgGQALAKAIgCIAAgUQAAgLAIAAIATAAQABAGgDAIQAAAFAGAEQAFgeApAHQADgFgHgFQgFgEAGgCQANACATAKQAVAJAMACQAFAZgJARQAZAagWArQgVApgkAHQgQADgUgHIgdgMQADASAaADIAwACQABAOAMAGQAOAHADAIQAHARgJATQgFALgQAXQAKAhgRAhQgJATgWAiQARApgbA6QgcBAAHAiQALAHAeAQQAYAQgHAWQgGglg0gGQgJAJAFAOQAGAPgCAFQghgYgQg5QgOg3AJg5QARghACgRQgFgcABgLQADgVAYgSQAbgSAFgPQgLADgUAOIgjAYQgwAcgogUQAZgegGgXIAVgYQANgOgEgMIguAuQAQAbgdAVIgZAQQgNAJgDAHQAOAIgCAMQgEAPgiBKQgZA1ABAzIAUAFQANADgCALQgJAEgQgDQgVgFgIAAQgPANAGATQAEAKAJAQIgBAAQgKAAgMgPgABpjhQAEAbALAMQAbAFAVgPQAUgOAFgaQgeADgVgMIgigbQgGAUADAbgACikQQAJAPASgFQATgFgEgUIgagDQgEAHAKAAQAJgBAAAFQgDAKgIAAQgKgDgJAAIgBAAgAB/kbQAMACAIgGIAAgPQgGABgDgEQgDgFgDAAQgMAKAHARgADFkuQAAAIAEAEQAHAAAIgEQACgTgRgBQgEAEAAAIgAi9EyQADgSAJgEQAEADgEAnQgPAAADgUgAjLElQAEgMAHgFQAEAFgHALQgIANADAKQgHgIAEgOgAjhEgQAKgVAPgGQAGADgNAPQgPATAGARQgTgEAKgXg");
	this.shape_9.setTransform(38.4,-26.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3A3839").s().p("AkBLAIAAgDIACADIgCAAgADyq4IgHgGIAKgBQAAABABAAQAAAAABAAQAAAAABAAQAAAAABgBIAJAAIAAACQgEAHgFAAQgDAAgEgCg");
	this.shape_10.setTransform(18.8,-3.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFF00").s().p("AhkAnQACAVgNgCQgKgSACgYQAKgBAJAJIAAgXQAUgHAXgVIAnghQAKALAZgLQAegMAHAEQAAABgGAEQgEADACAIQA1AFAVAVQgSAFgZgFQAOAQAVAQQgPACgBAFQgDAHgEAAQgjgYgmACQgCADAHAHQAFAFgHADQgfgBgdgHIAAASQABAMgFABQgEgBgFgHQgEgHgGAAQABAIgEAbIABALIgigfg");
	this.shape_11.setTransform(50,-60.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("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");
	this.shape_12.setTransform(9,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(100));

	// Layer 2
	this.instance = new lib.MickLegs();
	this.instance.parent = this;
	this.instance.setTransform(32.5,-33.2,1,1,-60,0,0,39.6,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({regX:39.7,rotation:0,x:23.5,y:-33.8},9).wait(15).to({regX:39.6,rotation:-60,x:32.5,y:-33.2},10).wait(56));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.1,-73.6,146.4,147.3);


(lib.MickButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		playSound("highclick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(3));

	// Layer 2
	this.instance = new lib.MickPRESS();
	this.instance.parent = this;
	this.instance.setTransform(8.1,2,1,1,0,0,0,8,2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

	// Layer 1
	this.instance_1 = new lib.MickSwinging();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.1,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgyBEQgMgOAAgbQAAgaAMgaQAMgcATgQQANgMANAAQAJAAAPAGQASAHAAAJQAAAEgDADQgDAEgFAAQgCAAgEgDQgPgJgKAAQgHAAgIAIQgEADgHALQgXAeAAAjQAAATAGAHQAGAIARAAQAQAAANgLQAOgMAFgWQgbABgSAJIgFACQgEAAgDgEQgDgDAAgEQAAgFAFgEQAVgMA0AAQAEAAADADQADACAAAEQAAAHgFACQgHAfgTASQgUATgZAAQgZAAgMgOg");
	this.shape.setTransform(80.5,115.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhBBOQgDgDAAgFIAAgMIABgNIAAgSIABgTIAAgTIgBgUIgBgSIgBgTQAAgFAEgDQAEgEAFAAQAFAAAIALQAYAlATAZQAXAcAcAbIAAgNIAAgMQAAgrgEgaIgCgKIgCgLQAAgMAKAAQARAAAABBIAAAgIAAAhIgCAQQgBAKgJAAQgGAAgHgHQgogmgzhIIgBAXIAAAWIAAAYIAAAZQAAAbgKAAQgFAAgDgDg");
	this.shape_1.setTransform(65.5,115.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgqBJQgDgDgBgEQABgEADgDQACgDAFAAIAVgCIAAgTIAAgQIAAgRQgBgWADgjIgNABIgNAAQgEAAgCgDQgEgDAAgEQABgJAIgBIAfgBQASAAAeAEQAIACABAJQgBAFgDACQgDADgDAAIgRgCIgQgCQgCAdAAAaIABARIAAARIgBARIAgAAQADAAADADQAEADAAAEQAAAEgEADQgDADgDAAIgRAAIgQABIgTACIgTABQgFAAgCgDg");
	this.shape_2.setTransform(51.9,115.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AA9BLQgDgFgDgLIgDgRQgEgQgJg1IgUA7IgFATIgIASQgEAIgGAAQgGAAgDgHIgFgKIgCgMQgKgjgIgnIgEASIgMA0IgFAbQgDAIgHAAQgEAAgDgEQgDgDAAgEQAAgRAHgYIAKgnIAHgfQAEgWAFgHQAEgGAFAAQAHAAADAHQAEAJAEAbQAGAhALAlQANglALgpIADgPQABgJADgFQAEgIAHAAQAIAAAFARIADAYQAHAsAIAfIAFASIAEAQQAAAFgDADQgEADgDAAQgGAAgDgGg");
	this.shape_3.setTransform(37.5,115.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AA9BLQgDgFgDgLIgDgRQgFgQgIg1IgUA7IgGATIgHASQgEAIgHAAQgFAAgEgHIgDgKIgDgMQgKgjgIgnIgEASIgMA0IgFAbQgDAIgHAAQgFAAgDgEQgCgDAAgEQAAgRAHgYIALgnIAGgfQAEgWAFgHQADgGAHAAQAGAAADAHQAEAJAEAbQAGAhAKAlQAOglALgpIADgPQACgJACgFQAEgIAHAAQAIAAAFARIADAYQAHAsAIAfIAFASIAEAQQAAAFgEADQgCADgEAAQgGAAgDgGg");
	this.shape_4.setTransform(19.7,115.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAiA0IgGggIgaAFIgaAGQgFANgMAZQgDAFgFAAQgEAAgDgDQgDgDAAgEQAAgFAPgfQgCgDAAgDQAAgIAKgDQALgUARgcQAWglAGAAQAIAAADALIAGAhIAPBEIAFAQQADAIAAADQAAAEgDADQgDADgEAAQgJAAgHgXgAgMAHIAjgHIgIgmg");
	this.shape_5.setTransform(3.1,115.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgxBLQgDgDAAgEIgBgXIgBgYIACgaIACgbIgBgPIgBgPQAAgGAEgEQADgGAHABIAYACQANABAIAFQAoAWAAAfQAAAPgNAKQgLAKgRAFQAfAQAPATQADADAAADQAAAFgDADQgDADgEAAQgEAAgDgDQghghgngLIABATIABAUQAAAEgDADQgDADgEAAQgFAAgCgDgAgfgsIABAMIgBAUIgCATIAEAAIAEAAQAZAAAMgHQAGgCAEgFQAGgFAAgEQAAgOgQgMQgNgLgQgCIgPgBg");
	this.shape_6.setTransform(-10.3,115.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgyBEQgMgOAAgbQAAgaAMgaQAMgcATgQQANgMANAAQAJAAAPAGQASAHAAAJQAAAEgDADQgDAEgFAAQgCAAgEgDQgPgJgKAAQgHAAgIAIQgEADgHALQgXAeAAAjQAAATAGAHQAGAIARAAQAQAAANgLQAOgMAFgWQgbABgSAJIgFACQgEAAgDgEQgDgDAAgEQAAgFAFgEQAVgMA0AAQAEAAADADQADACAAAEQAAAHgFACQgHAfgTASQgUATgZAAQgZAAgMgOg");
	this.shape_7.setTransform(-23.6,115.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAiA0IgGggIgaAFIgaAGIgRAmQgDAFgFAAQgEAAgDgDQgDgDAAgEQAAgFAPgfQgCgDAAgDQAAgIAKgDQALgUARgcQAWglAGAAQAIAAADALIAGAhIAPBEIAFAQQADAIAAADQAAAEgDADQgDADgEAAQgJAAgHgXgAgMAHIAjgHIgIgmg");
	this.shape_8.setTransform(-38.1,115.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgqBJQgEgDAAgEQAAgEAEgDQACgDAEAAIAWgCIABgTIgBgQIAAgRQgBgWADgjIgNABIgNAAQgEAAgDgDQgDgDAAgEQAAgJAJgBIAegBQATAAAeAEQAJACAAAJQgBAFgDACQgCADgEAAIgRgCIgQgCQgCAdAAAaIABARIAAARIgBARIAfAAQAFAAACADQADADABAEQgBAEgDADQgCADgFAAIgQAAIgQABIgTACIgUABQgEAAgCgDg");
	this.shape_9.setTransform(-50.8,115.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgeBQQgLgCgGgFIgBAAQgEAAgDgDQgDgDAAgEIABggIABgfIAAghIgBgjQAAgEAEgFQAFgFADAAQADAAAOAHIARAIQAbAKATAUQAYAYAAAbQAAARgIAQQgIAPgOAKQgPALgcAAQgHgBgJgCgAgkgbIAAAcIgCA2IACACQAJAFANABQAWgBAKgGQAJgHAGgLQAGgMAAgMQAAgbgfgTQgJgHgkgRg");
	this.shape_10.setTransform(-63.4,115.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgiBEQgOgOAAgWQAAgbAOgPQAOgQAVAAQAMAAAGAEIAJAHQABgqACgPQACgJAHAAQAJAAAAAKQAAAOgEAvIgBAdQAAAhADARIAAACQAAAEgCADQgDACgEAAQgGAAgDgJQgHAFgHADQgIADgHAAQgVAAgNgOgAgWACQgJAKAAAUQAAAMAJAKQAJAJANAAQAHAAAGgDIALgIIACgDIAAgSIAAgLIAAgMQgDgIgHgDQgGgEgIAAQgQAAgIAJg");
	this.shape_11.setTransform(-83.1,114.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAYAxIgDgWIgBgWIAAgJIABgJQAAgVgIAAQgLAAgJANQgJAMgGARIAAAKIgBAKIABAJIAAAJQAAAEgDADQgCADgFAAQgEAAgDgDQgCgDAAgEIgBgJIgBgJIACgcIABgcIAAgKIAAgJQAAgFADgCQACgDAEAAQAKAAAAANIABAMQAQgWARgBQAQAAAGAPQAEAJAAASIAAAKIAAAIQAAAJACANQADANAAAIQAAAEgDAEQgDACgEAAQgJAAgBgJg");
	this.shape_12.setTransform(-94,117.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAgAzIgHgHIgRAIQgHACgEAAQgXAAgLgNQgKgMABgaQAAgXAQgRQAQgRAWAAQAJAAAKAEQAOAGAAAIQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAIgCANIgBAVQAAAMACAIIAGARIADAFIAAACQAAAEgDADQgCACgEAAQgCAAgEgEgAgQgYQgLANAAAPQAAAQAGAJQAFAIAMAAQAIAAAHgEIAKgHQgDgaAAgNIAAgJIACgLIgGgDIgFgBQgOAAgLANg");
	this.shape_13.setTransform(-104.7,117.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgnBFQgSgJgBgPQAAgEADgCQADgDAEAAQAFAAAEAGQAFAHAEADQAIAFAQAAQAPAAANgGQAQgJAAgPQAAgNgOgHQgMgGgQgBQgQAAgLgGQgOgIAAgPQAAgRAUgPQATgOAUAAQAJAAAMADQAQAFAAAGQAAAJgJAAIgOgCQgJgCgGAAQgOAAgLAIQgLAHAAALQAAAJAPADQAFABAPABQAWACANANQAMAKAAARQAAAYgWAOQgTAMgYAAQgSAAgPgHg");
	this.shape_14.setTransform(54.9,84.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgqBOQgGgEAAgLIACghQADgsAAg5QAAgDADgEQACgDAFAAQAEAAADADQACAEAAADQAAA5gCAtIgCAPIAAAPQAaAAAmgNIADAAQAEAAADAEQADACAAAFQAAAGgHADQgLAFgYAFQgVADgOAAQgKAAgEgDg");
	this.shape_15.setTransform(42.5,84.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAiA0IgGggIgaAFIgaAFIgRAnQgDAFgFAAQgEAAgDgDQgDgCAAgFQAAgFAPgfQgCgDAAgDQAAgIAKgDQALgUARgbQAWgmAGAAQAIAAADALIAGAhIAPBEIAFAQQADAIAAADQAAAEgDADQgDADgEAAQgJAAgHgXgAgMAHIAjgHIgIgmg");
	this.shape_16.setTransform(29.2,84.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgtBNQgEgFAAgEIAAgdIABgnIADgqQgBgJACgSQAAgFADgCQANgEASAAQAQAAAQAMQASAOAAAUQABAagVAOQAQAGAHAIQAHAHAAAKQAAAMgNALQgJAIgJAEQgWAJgiAAQgFAAgDgEgAgeAnIAAAVQAagBAPgGQAIgDAGgGQAGgFAAgCQAAgFgNgGQgKgEgIgDIgKgBIgEAAIgDAAIgMgBIgBAWgAgZg7IAAASIgCAmIAOABQAOgBAKgIQAKgJAAgOQAAgJgKgIQgLgIgKAAIgPAAg");
	this.shape_17.setTransform(16.1,83.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgxBLQgDgDAAgEIgBgXIgBgYIACgaIACgbIgBgPIgBgPQAAgGAEgEQADgGAHABIAYACQANABAIAFQAoAWAAAfQAAAPgNAKQgLAKgRAFQAfAQAPATQADADAAADQAAAFgDADQgDADgEAAQgEAAgDgDQghghgngLIABATIABAUQAAAEgDADQgDADgEAAQgFAAgCgDgAgfgsIABAMIgBAUIgCATIAEAAIAEAAQAZAAAMgHQAGgCAEgFQAGgFAAgEQAAgOgQgMQgNgLgQgCIgPgBg");
	this.shape_18.setTransform(3,83.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgqBMQgKgIAAggIAAgOIABgRIgBgEIACgGIACgqIgBgLIgBgLQAAgLAKAAQAEAAADACIAWgFIATgBQAYAAAOAGQAHADAAAGQAAAFgDADQgCADgFAAIgDgBQgQgEgQAAIgRABIgUAEIABALIgCAmIAqgEIAYgCQAEAAADADQADACAAAFQAAAIgJABIgYACIgsAFIgBANIAAAMQAAAWADAEQACACANABIASgBIASAAIAGgBIAGAAQAKAAAAAKQAAAIgIACQgJACgeAAQgfAAgIgJg");
	this.shape_19.setTransform(-9.5,83.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgRBJQgMgfgPg3IgIgcQgFgUAAgHQAAgFADgDQADgCAEAAQAHAAACAIIAEASIAJAhQAKAlAJAaIAAgCIAahHIAIgYQAGgPAGgIQADgDAFAAQAEAAADADQADADAAAEQAAADgCADQgGAJgEALIgHAVIgbBHIgLAaQgCAFgGAAQgHAAgDgHg");
	this.shape_20.setTransform(-22,84.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgLBIIACgkIABgkIABgjIAAglQAAgJAJgBQAKABgBAJIAAAlIAAAjIgCAxIgBAXQgBALgHAAQgLAAAAgLg");
	this.shape_21.setTransform(-38,83.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgKBIIABgkIABgkIAAgjIABglQAAgJAIgBQAKABAAAJIAAAlIgBAjIgBAxIgBAXQgBALgHAAQgLAAABgLg");
	this.shape_22.setTransform(-43.6,83.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAiA0IgGggIgaAFIgaAFIgRAnQgDAFgFAAQgEAAgDgDQgDgCAAgFQAAgFAPgfQgCgDAAgDQAAgIAKgDQALgUARgbQAWgmAGAAQAIAAADALIAGAhIAPBEIAFAQQADAIAAADQAAAEgDADQgDADgEAAQgJAAgHgXgAgMAHIAjgHIgIgmg");
	this.shape_23.setTransform(-53.9,84.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgEAEAAQAFAAAEAEQADAEAAAEQAAAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_24.setTransform(-69.7,91.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AggBMQgDgDAAgEQAAgEAHgQIAVg1QAOghAQgSIACgCIgxgBIgWAAQgJgBAAgJQgBgEADgDQADgCAEAAIAlAAIAlABIASAAQAKAAAAAGQAAAFgFAIIgJAKQgOAPgKAWIgSAnIgIAXQgEAOgFAIQgDAEgFAAQgEAAgDgCg");
	this.shape_25.setTransform(-78.2,84.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FF33FF").ss(1,1,1).p("ARkGoMgmIAAAIHOtPMAh7AAAg");
	this.shape_26.setTransform(-11.9,83.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFB300").s().p("A0kGoIHOtPMAh7AAAIjBNPg");
	this.shape_27.setTransform(-11.9,83.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#458FFE").s().p("AxDOwQj6gCAogZIHMreUAgMgjOgDCAjKID6AAIABAAIAcAAIAAAAIADAAIgCAGQgMASgJAiQgGAZgIBEQgXBPgZCRQgOBOgKBAQgXBfglCKQgZAKgdgCQihgNrQAMQoZAJnJAAIksgBg");
	this.shape_28.setTransform(-13.7,23.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_28}]},2).wait(1));

	// Layer 4
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(250,255,255,0.702)").s().p("A26I3IIPxuMAllAAAIjqRug");
	this.shape_29.setTransform(-14,86.9);
	this.shape_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_29).wait(1).to({_off:false},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.1,-73.6,146.4,147.3);


(lib.CarmenButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		playSound("highclick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(3));

	// Layer 2
	this.instance = new lib.CarmenFlip();
	this.instance.parent = this;
	this.instance.setTransform(0,-0.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#458FFE").s().p("AqvIqQAAgnA4gwQBIg+AUgjQBMiCA0gaQAWgLAggBIBBABIATAAQAHjAAAhmQgPh9AChNQACiRBSAAQA7AAAMCNIAAAHIBMgVQAUgGgIgnIgMhBQAAg0Acg9QAphdBQAAIAQABIAMgBQBCAAAFBIQAAARgKARIgBAKIgDAkQADBIAGAXQAFATAAArIAAATQA1gCBCAAIAIg2QAKg5AAgVQAAgGgagYQgagZAAgaQAAhLB2AAQA3AAASAqQAGANABAQIABAOQAABZgMBEQgMBEAACZIAJFOICBgBQBTAAAGBKQAEAngOA4QAAA5AFBzQAAANgJARQgIASgKAHQgXAPgWAAQyxAGgHABIgQADQhJAAAAhKg");
	this.shape.setTransform(-10.6,11.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape}]},2).wait(1));

	// Layer 1
	this.instance_1 = new lib.Carmen();
	this.instance_1.parent = this;
	this.instance_1.setTransform(5,1.3,0.772,0.772);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AghApQgOgMAAgSQAAgXAOgSQAPgWAWABQAWAAALAKQALAJAAAWQAAAXgNATQgOAUgWAAQgTABgNgMgAgWgVQgLAOAAASQAAAMAKAJQAJAHANAAQAPAAALgQQAJgPAAgSQAAgPgHgGQgHgHgQAAQgPAAgLARg");
	this.shape_1.setTransform(15.3,57.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgiAzQgBgCAAgDIAAgQIgBgQIABgRIABgSIAAgKIgBgKQAAgEACgDQADgEAFABIAQABQAIABAGAEQAbAOAAAVQAAAKgKAGQgHAHgLADQAVALAKANQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAABQgCACgDAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQgXgWgagHIABANIAAANQAAADgCACQgBACgDAAQgEAAgCgCgAgVgdIABAIIgBANIgCANIAEAAIADAAQAQAAAIgFIAHgEQADgEABgCQAAgKgLgIQgJgHgLgBIgKgBg");
	this.shape_2.setTransform(5.7,57.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgEAxQgCgCAAgDIAAgDIABgDIgBgKIAAgKIgBgZIgCgbIgHAAQgOAAgJgCQgFgCAAgFQAAgDACgCQACgCADAAIALABIAKABIAMAAIAMAAIAPABIAPAAQABAAABAAQAAABABAAQAAAAABAAQAAABABAAQACACAAADQAAADgCACQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIgPgBIgPAAIgFAAIACAdIACAdIAAAHIABAIQAAAEgCADQgCAFgEAAQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBgBgBAAg");
	this.shape_3.setTransform(-2.8,57.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgsA0QgCgCAAgDIABgJIAAgIIABgMIAAgNIAAgMIAAgOIgCgMIgBgMQAAgEAEgCQACgDADABQAEgBAFAJQAQAYANAQQAPATATASIAAgJIAAgIQAAgcgCgSIgCgGIgBgHQAAgJAHABQAMAAAAArIAAAVIAAAWIgCALQgBAHgGAAQgEAAgFgFQgbgagigvIgBAPIAAAOIABAQIAAASQAAARgHABQgDgBgDgCg");
	this.shape_4.setTransform(-13.4,57.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgcAxQgCgCAAgDQAAgDACgCQAAgBABAAQAAAAABgBQAAAAABAAQABAAAAAAIAPgBIAAgNIAAgKIgBgMQAAgOACgYIgIABIgJAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBgBQgCgCAAgDQAAgGAHAAIAUgBQAMAAAUACQAGACAAAGQAAADgCACQgBAAAAABQgBAAAAAAQgBAAgBAAQAAABgBAAIgLgCIgKgBIgCAkIAAAMIABALIgBALIAVAAQABAAAAABQABAAABAAQAAAAABABQAAAAABAAQAAABABABQAAAAAAABQAAAAABABQAAAAAAABQAAADgCACQgBAAAAABQgBAAAAAAQgBABgBAAQAAAAgBAAIgLABIgLAAIgMABIgOABQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAg");
	this.shape_5.setTransform(-22.7,57.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgFAGQgCgCAAgEQAAgCACgDQADgCACAAQADAAADACQACADAAACQAAAEgCACQgDACgDAAQgCAAgDgCg");
	this.shape_6.setTransform(-32.2,62.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AACA0IgNAAIgGgBQgDgBgBgDQAAgIALABIADAAIADAAIAAgJIgBgKIABgZQACgRgBgJQgIAIgCAAQgEAAgCgCQgCgCAAgEQAAgDAHgEIAKgIQAEgGAGAAQAFAAAAAFIgBAFIAAAEIAAAHIAAAHIgCAWIgBAWIAAAKIABAJIAHAAQABAAAAAAQABAAABAAQAAAAABAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAAAQABABAAABQAAADgCABQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAg");
	this.shape_7.setTransform(-36.9,57.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FF33FF").ss(1,1,1).p("AKwDHI12AAIEPmNIR+AQg");
	this.shape_8.setTransform(-16.7,53.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFF33").s().p("ArGDGIEPmMIR+AQIgXF8g");
	this.shape_9.setTransform(-16.7,53.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[]},2).wait(1));

	// Layer 5
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(250,255,255,0.702)").s().p("As3D8IGVoQITaAAIgYIpg");
	this.shape_10.setTransform(-19.8,55.3);
	this.shape_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1).to({_off:false},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.4,-50.5,72.9,101.2);


(lib.BuffyPRESS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_25 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(25).call(this.frame_25).wait(1));

	// Layer 2
	this.instance = new lib.BuffLegL();
	this.instance.parent = this;
	this.instance.setTransform(-6.7,-0.1,1,1,0,0,0,38.3,-1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:38.2,regY:-1.6,rotation:-34,x:21.8,y:-38.2},2).to({scaleX:1,scaleY:1,rotation:-71.6,x:65.2,y:-49},2).to({regX:38.1,scaleX:1,scaleY:1,rotation:-195,x:70.1,y:-40.3},2).to({regX:38.2,regY:-1.5,scaleX:1,scaleY:1,rotation:-266.7,x:80.8,y:-52.2},2).to({scaleX:1,scaleY:1,rotation:-392.6,x:49.1,y:-84.5},3).to({regX:38.1,regY:-1.6,scaleX:0.99,scaleY:0.99,rotation:-345.5,x:26.3,y:-77.1},2).to({regY:-1.5,scaleX:1,scaleY:1,rotation:-404.1,x:14.3,y:-63.1},3).to({regX:38.2,regY:-1.6,scaleX:1,scaleY:1,rotation:-394,x:-10.7,y:-42.1},2).to({regX:38.3,regY:-1.5,rotation:-360,x:-6.7,y:-0.1},5).wait(3));

	// Layer 3
	this.instance_1 = new lib.BuffBod();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.7,0.2,1,1,0,0,0,10.3,30.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:33.5,y:-39},2).to({x:78.6,y:-53.2},2).to({rotation:-82,x:72.3,y:-55},4).to({scaleX:1,scaleY:1,rotation:-207.8,x:52.4,y:-75.7},3).to({regY:30.3,scaleX:1,scaleY:1,rotation:-216.1,x:33.9,y:-69.9},2).to({regX:10.4,scaleX:1,scaleY:1,rotation:-312.1,x:-0.9,y:-41.1},5).to({regX:10.3,regY:30.2,scaleX:1,scaleY:1,rotation:-360,x:0.4,y:-26.6},3).to({x:0.7,y:0.2},2).wait(3));

	// Layer 4
	this.instance_2 = new lib.BuffLegR();
	this.instance_2.parent = this;
	this.instance_2.setTransform(2.8,2.3,1,1,0,0,0,-38.5,-11.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,scaleY:1,rotation:37.9,x:37.4,y:-35.2},2).to({scaleX:1,scaleY:1.2,rotation:64.7,x:78.3,y:-50.9},2).to({regX:-38.4,regY:-11.2,scaleX:0.92,scaleY:1.07,rotation:67,x:74.9,y:-46.1},4).to({regX:-38.5,scaleX:0.96,scaleY:1.14,rotation:-75.1,x:58.4,y:-83.2},3).to({regX:-38.4,regY:-11.3,scaleX:0.99,scaleY:1.19,rotation:-180.4,x:37.1,y:-73},2).to({regX:-38.6,scaleX:0.96,scaleY:1.22,rotation:-307.1,x:21.4,y:-56},3).to({regX:-38.4,scaleX:1,scaleY:1,rotation:-325.1,x:4.9,y:-37.8},2).to({regX:-38.5,scaleX:1,scaleY:1,rotation:-360,x:2.8,y:2.3},5).wait(3));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2AD48").s().p("AM6C0QirgblDhIQjggxidgeQhjgShJgKIgggFQg7gFg6gMQgzgKg0gHQg2gLg2gGIhpgMIgSgEIgEgFQg6gGg4gKQgkgFgkgIQgWgEgWgHIgVgDQAsgsBLAHIAAAAIAAADIK8B4QA2AJAoAJIALAAQASAABCASQAwAGAjALQASAGAsAGQCjAfG/BaIABAAIAnAJIAvAGIBFAGQgeAQhDAWIglgFg");
	this.shape.setTransform(0.8,14.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#7D440B","#EF9C21"],[0,1],90.4,14.5,-90.3,-14.2).s().p("AMKCzQhDgLhOgQQi6gohdgRQi4grhegPIhJgKQhcgMg2gNQh6gcj/gnQkLgoh5gbIgFgjQgDgWAIgFIApAIQA5AOA8AIIBrATIB2ARIBvATIBxARIBsASQAVACASAEICwAiQCNAbC4AmQFeBIC6AiIAbAEQgFAHAGAVQAHAVgEAFQg9gEhLgMg");
	this.shape_1.setTransform(-7,19.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AA5500").s().p("ACYEEIgBgMIgCgZQgDgwAChEIAEhOIAFhqQAJgFAMAEQAHADADgKQAGgBABAFIAADEQAAAcAEBFIgCALQgCAPgHAKQgFAIgHAEgAr9j7QAJAAAKgIQAEABABAIQABAHAGgBIAADhIAEApQgBAagWAFQgQg3AEj5gArXgrQgEgFABgGQAMAHgFAWQgDANgBAAQgCAAACgfgAKLgXQgEgnAAgPQAJgDA0gUQAmgOAVgCQgEAKAAAVIAAAiQgMADgrAQQgZAKgUAAIgMgBgArbhrIABggQAHgFgEA3IgBAAQgEAAABgSg");
	this.shape_2.setTransform(20.8,42.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AGAFvQAHgEAGgIQAGgKADgOIABgMQgDhEgBgdIAAjFQgBgFgGACQgDAKgHgDQgMgFgJAFIgFBsIgEBOQgCBDADAxIACAYIABAMIgVAAIgDgBIAAgSIAGABIABgSQAFhkABhdQABhGgBhCQiXgnkKgsIgGgBQlJg2hsgXQgCAqACBlQACBqgCA3QgCALAOAAIgIAQQgFAJABAKQgHADgBgIQAAgJgHADQgHABAEAFQAEAGgBADQgGgCgIgLQgHgKgKAAQgKg7gBheIgBijQgLAFgCgLQgEgVgCgEQg4AAhVgTQhlgYgdgDQgxgDgWgDQgngGgZgTIgLhFQAjgHBBgdQAwgSAmAQIgFADQGdA+DLAjQDKAjFQBJQFSBJB3AYIABgBIAGABQAQAAAPAEIASADQAhAHAfAEQA2AHAtgDQgUALgCAhQgBATAAAlQgXgDggARQglATgQABQgKACgNgFQgQgHgIgBQggACgSgCQgpgFhAgPIgDgBIhwgaQgxgOgYgFQgpgJghAJQACAYgCBSIgBBDQgCBTAHAyIAEAXIgBABQgCAHgDAFgAohCgQAWgFABgZIgEgrIAAjfQgGABgBgIQgBgIgEAAQgKAIgJgBQgED4AQA4gAoHBAQgDAxAHgfQAFgXgMgHQAAAGADAGgAOUAHQgzAUgKACQAAAQAEAmQAYAEAhgMQArgRAMgCIAAgjQAAgVAEgJQgVACgmAOgAvYkeIAGAiQB5AbELApQD/AnB6AcQA2ANBdANIBHAJQBfAQC4AqQBdARC6AoQBOAQBDAKQBLAMA9AFQAEgGgHgVQgGgVAFgGIgbgFQi6gglehJQi4gniMgbIixgiQgSgDgWgCIhsgTIhwgRIhwgSIh2gSIhqgSQg8gJg5gNIgpgJQgIAFACAXgAoKggIgBAgQAAAUAEgDQAEgxgGAAIgBAAgAu3k+IAVADQAWAHAWAEQAkAIAkAFQA4AKA6AGIAEAFIASAEIBpAMQA1AGA3ALQA0AHAzAKQA6AMA6AFIAhAFQBIALBkASQCcAeDhAyQFDBHCqAaIAmAFQBDgVAdgQIhEgGIgwgGIgmgJIgCAAQm+haijgfQgsgHgTgGQgjgKgvgHQhCgSgTAAIgLABQgogKg1gJIq8h4IgBgDIAAAAIgTgBQg9AAgmAmg");
	this.shape_3.setTransform(0,31.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100.6,-68.5,201.3,137);


(lib.Buffy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.BuffBod();
	this.instance.parent = this;
	this.instance.setTransform(0.7,0.2,1,1,0,0,0,10.3,30.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(84).to({x:1,y:-42.8},13).wait(26).to({x:0.7,y:0.2},13).wait(24));

	// Layer 4
	this.instance_1 = new lib.BuffLegR();
	this.instance_1.parent = this;
	this.instance_1.setTransform(2.8,2.3,1,1,0,0,0,-38.5,-11.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(84).to({scaleX:1,scaleY:1,rotation:37.9,x:5,y:-39.1},13).wait(26).to({scaleX:1,scaleY:1,rotation:0,x:2.8,y:2.3},13).wait(24));

	// Layer 2
	this.instance_2 = new lib.BuffLegL();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-6.7,-0.1,1,1,0,0,0,38.3,-1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(84).to({regX:38.2,regY:-1.6,rotation:-34,x:-10.7,y:-42.1},13).wait(26).to({regX:38.3,regY:-1.5,rotation:0,x:-6.7,y:-0.1},13).wait(24));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2AD48").s().p("AM6C0QirgblDhIQjggxidgeQhjgShJgKIgggFQg7gFg6gMQgzgKg0gHQg2gLg2gGIhpgMIgSgEIgEgFQg6gGg4gKQgkgFgkgIQgWgEgWgHIgVgDQAsgsBLAHIAAAAIAAADIK8B4QA2AJAoAJIALAAQASAABCASQAwAGAjALQASAGAsAGQCjAfG/BaIABAAIAnAJIAvAGIBFAGQgeAQhDAWIglgFg");
	this.shape.setTransform(0.8,14.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#7D440B","#EF9C21"],[0,1],90.4,14.5,-90.3,-14.2).s().p("AMKCzQhDgLhOgQQi6gohdgRQi4grhegPIhJgKQhcgMg2gNQh6gcj/gnQkLgoh5gbIgFgjQgDgWAIgFIApAIQA5AOA8AIIBrATIB2ARIBvATIBxARIBsASQAVACASAEICwAiQCNAbC4AmQFeBIC6AiIAbAEQgFAHAGAVQAHAVgEAFQg9gEhLgMg");
	this.shape_1.setTransform(-7,19.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AA5500").s().p("ACYEEIgBgMIgCgZQgDgwAChEIAEhOIAFhqQAJgFAMAEQAHADADgKQAGgBABAFIAADEQAAAcAEBFIgCALQgCAPgHAKQgFAIgHAEgAr9j7QAJAAAKgIQAEABABAIQABAHAGgBIAADhIAEApQgBAagWAFQgQg3AEj5gArXgrQgEgFABgGQAMAHgFAWQgDANgBAAQgCAAACgfgAKLgXQgEgnAAgPQAJgDA0gUQAmgOAVgCQgEAKAAAVIAAAiQgMADgrAQQgZAKgUAAIgMgBgArbhrIABggQAHgFgEA3IgBAAQgEAAABgSg");
	this.shape_2.setTransform(20.8,42.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AGAFvQAHgEAGgIQAGgKADgOIABgMQgDhEgBgdIAAjFQgBgFgGACQgDAKgHgDQgMgFgJAFIgFBsIgEBOQgCBDADAxIACAYIABAMIgVAAIgDgBIAAgSIAGABIABgSQAFhkABhdQABhGgBhCQiXgnkKgsIgGgBQlJg2hsgXQgCAqACBlQACBqgCA3QgCALAOAAIgIAQQgFAJABAKQgHADgBgIQAAgJgHADQgHABAEAFQAEAGgBADQgGgCgIgLQgHgKgKAAQgKg7gBheIgBijQgLAFgCgLQgEgVgCgEQg4AAhVgTQhlgYgdgDQgxgDgWgDQgngGgZgTIgLhFQAjgHBBgdQAwgSAmAQIgFADQGdA+DLAjQDKAjFQBJQFSBJB3AYIABgBIAGABQAQAAAPAEIASADQAhAHAfAEQA2AHAtgDQgUALgCAhQgBATAAAlQgXgDggARQglATgQABQgKACgNgFQgQgHgIgBQggACgSgCQgpgFhAgPIgDgBIhwgaQgxgOgYgFQgpgJghAJQACAYgCBSIgBBDQgCBTAHAyIAEAXIgBABQgCAHgDAFgAohCgQAWgFABgZIgEgrIAAjfQgGABgBgIQgBgIgEAAQgKAIgJgBQgED4AQA4gAoHBAQgDAxAHgfQAFgXgMgHQAAAGADAGgAOUAHQgzAUgKACQAAAQAEAmQAYAEAhgMQArgRAMgCIAAgjQAAgVAEgJQgVACgmAOgAvYkeIAGAiQB5AbELApQD/AnB6AcQA2ANBdANIBHAJQBfAQC4AqQBdARC6AoQBOAQBDAKQBLAMA9AFQAEgGgHgVQgGgVAFgGIgbgFQi6gglehJQi4gniMgbIixgiQgSgDgWgCIhsgTIhwgRIhwgSIh2gSIhqgSQg8gJg5gNIgpgJQgIAFACAXgAoKggIgBAgQAAAUAEgDQAEgxgGAAIgBAAgAu3k+IAVADQAWAHAWAEQAkAIAkAFQA4AKA6AGIAEAFIASAEIBpAMQA1AGA3ALQA0AHAzAKQA6AMA6AFIAhAFQBIALBkASQCcAeDhAyQFDBHCqAaIAmAFQBDgVAdgQIhEgGIgwgGIgmgJIgCAAQm+haijgfQgsgHgTgGQgjgKgvgHQhCgSgTAAIgLABQgogKg1gJIq8h4IgBgDIAAAAIgTgBQg9AAgmAmg");
	this.shape_3.setTransform(0,31.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(160));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100.6,-68.5,201.3,137);


(lib.BubButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		playSound("highclick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(3));

	// Layer 1
	this.instance = new lib.Bub();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.772,0.772);

	this.instance_1 = new lib.BubFlip();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.4,36.3,0.762,0.771,0,0,0,-0.6,46.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},2).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgYAqQgLgEAAgKQgBgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQADgBACAEQADAEADACQAFAEAKgBQAIAAAJgDQAKgGAAgKQAAgHgJgEQgHgFgKAAQgKAAgHgDQgIgFAAgKQAAgKAMgKQAMgIAMAAQAGAAAHACQAKADAAAEQAAAGgGAAIgIgCQgGgBgEAAQgIAAgHAFQgHAEAAAHQAAAFAJACIAMABQAOACAIAHQAIAHAAAKQAAAPgOAJQgMAHgOAAQgLAAgKgFg");
	this.shape.setTransform(47.8,77.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgaAvQgGgFAAgUIAAgJIABgKIgBgDQAAAAAAAAQAAAAAAAAQABgBAAAAQAAgBABAAIABgaIgBgHIAAgHQAAgHAFAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABABIAOgEIALgBQAPABAJADQAEACAAAEQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAABgBAAIgBAAQgLgDgKAAIgKAAIgNADIABAHIgBAXIAagDIAPgBQAAAAABAAQAAAAABAAQAAABABAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAABAAABQAAAEgGABIgPABIgbADIAAAIIAAAHQAAAOABACQACACAIAAIAKAAIAMgBIAEAAIADAAQAHAAAAAGQAAAGgFABQgGABgSAAQgUAAgFgGg");
	this.shape_1.setTransform(39.7,76.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgKAtQgIgTgJgiIgFgRQgDgNAAgEQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAQAFAAABAFIACALIAGAVIAMAmIAAgBIAQgrIAFgQQADgJAEgEQACgDADAAQABAAAAAAQABAAABABQAAAAABAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAABIgBADIgGAMIgFAOIgQAsIgHAPQgBAEgEAAQgEAAgCgFg");
	this.shape_2.setTransform(31.8,77.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgaAuQAAgBgBgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAIANgBIABgLIgBgKIAAgLQAAgNACgVIgIAAIgIAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAAAAAQgCgCAAgEQAAgFAFgBIATAAQAMAAASADQAGAAgBAGQAAADgCACIgEABIgKgBIgKgBIgCAiIABAKIAAAKIAAALIATAAQABAAAAAAQABAAABABQAAAAABAAQAAABAAAAQABAAAAABQABAAAAABQAAAAAAABQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAgBAAQAAABgBAAIgKAAIgLAAIgKABIgNABQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAg");
	this.shape_3.setTransform(23.9,77.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgEAtQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAgDIABgCIgBgKIAAgJIgCgYIgCgZIgFAAQgOAAgIgCQgEAAAAgGQAAAAAAgBQAAAAAAgBQAAAAAAgBQABgBAAAAQACgCADAAIAKACIAKAAIALAAIAKAAIAPAAIANABQABAAABAAQAAAAABABQAAAAABAAQAAABABAAQAAAAABABQAAAAAAABQAAAAAAABQAAABAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAIgNAAIgPgBIgEAAIACAcIABAaIAAAHIABAHQAAAEgCADQgCAEgDAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAgBgBg");
	this.shape_4.setTransform(16.7,76.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgaAuQgBgBAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAIAOgBIAAgLIAAgKIgBgLQAAgNACgVIgIAAIgIAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAAAAAQgCgCgBgEQABgFAFgBIATAAQAMAAASADQAGAAgBAGQABADgDACIgEABIgKgBIgKgBIgCAiIABAKIAAAKIAAALIATAAQABAAAAAAQABAAABABQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQABABAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAQAAABgBAAIgKAAIgKAAIgLABIgNABQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAg");
	this.shape_5.setTransform(8.4,77.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgoAwQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBIAAgHIABgIIAAgMIAAgLIAAgLIAAgNIgBgLIgBgMQAAgDADgCQACgCADAAQAEAAAEAHIAbAmQAPARAQARIAAgIIAAgIQAAgagBgQIgCgHIgCgGQAAgHAHAAQALAAAAAoIgBATIAAAVIgBAJQgBAHgFAAQgEAAgEgFQgagXgfgsIAAAOIAAANIAAAPIAAAQQAAAQgGAAQgDAAgCgCg");
	this.shape_6.setTransform(0,77);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgaAuQAAgBgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAIANgBIABgLIgBgKIAAgLQAAgNACgVIgIAAIgIAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBAAQgCgCAAgEQAAgFAHgBIASAAQALAAATADQAFAAABAGQgBADgCACIgEABIgKgBIgKgBIgBAiIAAAKIAAAKIAAALIATAAQABAAAAAAQABAAABABQAAAAABAAQAAABAAAAQABAAAAABQABAAAAABQAAAAAAABQABABAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAgBAAQAAABgBAAIgKAAIgKAAIgMABIgMABQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAg");
	this.shape_7.setTransform(-8.5,77.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgdAyQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAgBIABgkIAAgjIAAgJIAAgIQAAAAAAgBQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAIAOgCIAJgBQAHAAAKACQAMADAAAFQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgCAAQgIgDgNAAIgIABIgMABIgBAbQAMgDAGAAIATABQAGABAAAFQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAIgKgBIgJAAQgEAAgOADIAAAqQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABQgBAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape_8.setTransform(-15.5,77);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgoAwQgBgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAgBIABgHIAAgIIAAgMIABgLIgBgLIAAgNIAAgLIgBgMQAAgDADgCQACgCADAAQADAAAFAHQAPAXAMAPQAOARASARIAAgIIAAgIQAAgagDgQIgBgHIgCgGQABgHAGAAQALAAAAAoIgBATIAAAVIAAAJQgCAHgFAAQgEAAgEgFQgZgXgggsIAAAOIAAANIAAAPIAAAQQAAAQgGAAQgEAAgBgCg");
	this.shape_9.setTransform(-24.6,77);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgaAuQAAgBgBgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAIANgBIABgLIgBgKIAAgLQAAgNACgVIgIAAIgIAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBAAQgBgCAAgEQAAgFAFgBIATAAQAMAAASADQAGAAAAAGQAAADgDACIgEABIgKgBIgKgBIgCAiIABAKIAAAKIAAALIATAAQABAAAAAAQABAAABABQAAAAABAAQAAABAAAAQABAAAAABQABAAAAABQAAAAAAABQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAgBAAQAAABgBAAIgKAAIgLAAIgLABIgMABQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAg");
	this.shape_10.setTransform(-33.1,77.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgEAGQgCgDAAgDQAAgCACgCQACgCACAAQADAAACACQACACAAACQAAADgCADQgCABgDAAQgCAAgCgBg");
	this.shape_11.setTransform(-41.9,81.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AATAuIgFgBIgJABIgJAAIgGABIgHAAIgCAAIgDAAQgEAAgBgEIgBgIQAAgOAIgJQADgEAQgJQAIgGADgEQAGgGAAgIQAAgEgGgDQgFgDgEAAQgEAAgFAEIgJAHIgFACQgGAAAAgFQAAgDADgCQAGgHAGgDQAHgEAHAAQALAAAHAFQAJAGAAAKQAAAGgCAFQgCAGgEAEQgEAEgLAHQgLAIgDADQgHAHAAALIANgCIARAAIAJABQAGACAAAEQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgEgBg");
	this.shape_12.setTransform(-47.4,76.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FF33FF").ss(1,1,1).p("AKHFmI0NAAIDLrLIOhAAg");
	this.shape_13.setTransform(-1.4,51.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00CCFF").s().p("AqGFmIDLrLIOhAAIChLLg");
	this.shape_14.setTransform(-1.4,51.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#458FFE").s().p("AqNLGQghgPgBgXQAGgXAAgIQgBgmAZggQAagjAEhBQAEhnAahDQBMjAAzhOQAIgXAXgOQAQgPANAAIAAAAQA0gUBfAAICfACQgMgSAAgeQgBgOAFgNQgQgIgFgIQgMgQAAgiQAAgTAQgoQAAgOgPgfIAAgBQgQgJgJgRQgKgSAAgUQAAgZAPgUIAGgHQAAgQgDgMQgYgNgPggQgJgWgDgXQgOgPgSgNIgSgNQgpgNgBg4QAAgZAPgUQAVgbAkAAQAVAAAPAHQA+AJApAtQAlgzBCAAQBEAAAdAqIAIANIAAAAQBPh2BDAAQA0AAAWAjIAKAmQAAAbhFAtQgWAOAAAXQADAagCANQgCALgfAXQgeAYgCALQgCALgGAMIAEAGQAOAUAAAZQAAAWgUAmQgVAhAAADQAAAHALAgQALAhAAAVQAAA5gQBFQAMAQAEAcQCzAHBJAKQAJgCAJAAQBRAAASBtQASAjgBAzQgCBNADAPQAMBGA1CWQAoByAIAZQAHAQAAATQgBATgBAGQgDAKgPAXQgCADgQAIQgTAKgIAAQoJAGkVAFQl/AAhfgtg");
	this.shape_15.setTransform(-1.2,16.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_15}]},2).wait(1));

	// Layer 3
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(250,255,255,0.702)").s().p("Ar/G2IECtrIQbAAIDiNrg");
	this.shape_16.setTransform(-0.5,51.8);
	this.shape_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(1).to({_off:false},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.5,-56.9,63.1,114);


(lib.BuffyButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		playSound("highclick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(3));

	// Layer 3
	this.instance = new lib.BuffyPRESS();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.772,0.772);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(3));

	// Layer 1
	this.instance_1 = new lib.Buffy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.772,0.772);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgeA1QgOgHAAgLQAAgEACgCQACgCAEAAQADAAADAFQAEAFADACQAHAFAMAAQALAAAKgGQANgGAAgMQAAgJgLgFQgJgGgNAAQgMAAgIgEQgLgGAAgLQAAgOAPgLQAPgLAOAAQAIAAAJADQAMADAAAFQAAAHgGAAIgLgCIgMgCQgLAAgIAHQgIAFAAAIQAAAHALACIAPACQARACAKAJQAJAIAAAMQAAATgRAKQgOAKgSAAQgOAAgMgFg");
	this.shape.setTransform(84.5,76.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AggA7QgIgHAAgZIABgKIAAgNIgBgDIACgEIABggIAAgJIgBgIQAAgJAHAAQAEAAACACIARgDIAOgCQATAAALAFQAFACAAAFQAAADgCACQgCADgEAAIgCAAQgNgEgMAAIgMABIgQAEIABAIIgCAdIAhgEIASgBQADAAACACQACACAAAEQAAAGgHAAIgSACIgiADIAAAKIAAAJQAAARACADQACACAKAAIANAAIAOAAIAFgBIAEAAQAIAAAAAIQAAAGgGABQgHACgXAAQgYAAgGgGg");
	this.shape_1.setTransform(74.3,76.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AggA7QgEgCgBgJIACgZQACgiAAgrQAAgDADgCQABgCADAAQAEAAACACQACACAAADQAAAsgCAiIgBALIAAAMQAUAAAdgKIADAAQADAAACADQACABAAADQAAAFgFADQgJAEgSADQgQADgLAAQgIAAgDgDg");
	this.shape_2.setTransform(65.2,76.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AggA7QgCgDAAgDIAAgWIACgfIACgfIAAgKIABgLQACgHAFABIAHgBIALgBQANAAAMAKQAOAKAAAPQAAATgPAKQgNAKgQAAIgKgBIAAAoQAAADgCADQgDACgDAAQgCAAgDgCgAgRgfIgBAfIAJAAQALAAAJgGQAJgHAAgMQAAgIgJgHQgIgFgJAAIgGAAIgEAAg");
	this.shape_3.setTransform(56.8,76);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AghA4QgBgCAAgEQAAgDABgCQADgCADAAIAQgCIABgOIgBgNIAAgMQAAgRACgbIgKABIgKAAQgDAAgCgCQgCgCAAgEQgBgGAIgCIAXAAQAOAAAXAEQAGAAABAIQgBADgCACQgDACgDAAIgLgBIgNgCIgCAqIABAMIAAAOIgBANIAZgBQADABACACQACACAAADQAAAEgCACQgCACgDAAIgOABIgMAAIgOABIgPABQgDAAgDgCg");
	this.shape_4.setTransform(48.4,76.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgfAuQgKgLAAgQQAAgZAVgbQASgXARAAIAHABIAFABQADgEAEAAQAGAAABAHQABAGAAAJQAAADgCADQgCADgDAAQgFAAgDgGQgCgFgCgBIgIgBQgLAAgMARQgSAXAAATQAAAKAGAHQAHAHAJAAQAGAAAIgEIAOgJQAEgDACAAQAEAAACACQACADAAADQAAADgDADQgUASgTAAQgQAAgLgNg");
	this.shape_5.setTransform(39.6,76.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AghA4QgBgCAAgEQAAgDABgCQACgCAEAAIAQgCIABgOIAAgNIgBgMQAAgRACgbIgKABIgJAAQgEAAgCgCQgCgCAAgEQgBgGAIgCIAXAAQAOAAAXAEQAGAAABAIQgBADgCACQgDACgDAAIgLgBIgNgCIgCAqIABAMIAAAOIgBANIAZgBQADABACACQACACAAADQAAAEgCACQgCACgDAAIgOABIgMAAIgOABIgPABQgEAAgCgCg");
	this.shape_6.setTransform(30.5,76.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgEA4QgDgCAAgEIABgDIAAgEIAAgLIgBgLIgCgeIgCgeIgHAAQgQAAgKgCQgGgCAAgGQAAgDACgCQACgDAEAAIAMACIAMAAIAOAAIAMAAIASABIARABQAEAAACACQACACAAAEQAAADgCACQgCACgEAAIgRgBIgRAAIgFAAIABAiIACAhIAAAIIABAIQAAAFgCAEQgCAFgEAAQgCAAgCgCg");
	this.shape_7.setTransform(21.6,76.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgmA6QgCgDAAgDIgBgSIAAgSIABgUIACgUIgBgMIgBgLQAAgFADgDQADgEAFABIASABQAKABAGAEQAfAQAAAYQAAAMgKAHQgJAIgMADQAXANAMAOQACACAAADQAAADgCADQgDACgDAAQgDAAgCgCQgZgZgegJIABAPIAAAPQAAADgCADQgCACgEAAQgDAAgCgCgAgYghIABAJIgBAPIgCAOIAEAAIADABQATAAAJgGQAEgBAEgEQAEgEAAgDQAAgLgMgJQgKgIgMgBIgLgBg");
	this.shape_8.setTransform(11,76.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAbAoIgFgZIgVAEIgTAEIgNAdQgCAFgEAAQgEAAgCgDQgCgBAAgEQAAgDALgYQAAgBAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgHAHgBQAJgPANgWQARgcAFAAQAGAAACAIIAFAaIALA0IAEALIACAJQAAADgCACQgCACgDABQgHgBgFgRgAgJAFIAbgFIgGgdg");
	this.shape_9.setTransform(0.1,76.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgfA7QgCgDAAgDIAAgWIABgfIABgfIAAgKIABgLQACgHAGABIAHgBIALgBQANAAAMAKQANAKAAAPQAAATgOAKQgMAKgSAAIgJgBIgBAoQAAADgCADQgBACgEAAQgDAAgBgCgAgQgfIgCAfIAIAAQAMAAAJgGQAKgHAAgMQgBgIgIgHQgJgFgJAAIgGAAIgEAAg");
	this.shape_10.setTransform(-9.4,76);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgmA0QgKgKABgVQgBgUAKgUQAJgVAOgMQALgJAKAAQAGAAAMAEQAOAGgBAHQABADgDACQgCADgEAAIgEgCQgMgHgHAAQgGAAgGAFQgDADgGAIQgRAYAAAaQAAAOAEAGQAFAGANAAQANAAAJgJQALgJAEgRQgVABgOAHIgDABQgDAAgDgCQgCgDAAgDQAAgEAEgCQAPgKApAAQADAAACADQACABAAADQABAFgFACQgEAYgPAOQgPANgUAAQgTAAgJgKg");
	this.shape_11.setTransform(-23.4,76.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgzA8QgCgDAAgEIABgJIAAgKIABgNIAAgPIAAgOIgBgPIAAgPIgBgOQAAgDADgDQADgDADAAQAFAAAFAJQAUAdAOASQARAWAWATIAAgJIAAgKQAAgggDgUIgCgIIgBgHQAAgJAIAAQANAAAAAxIAAAYIgBAZIgBAMQgBAIgHAAQgEAAgGgGQgegdgog2IAAASIgBAQIABATIAAATQAAAUgIAAQgEAAgDgCg");
	this.shape_12.setTransform(-34.9,76.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AggA4QgCgCgBgEQABgDACgCQACgCADAAIAQgCIABgOIgBgNIAAgMQAAgRACgbIgKABIgKAAQgDAAgCgCQgCgCgBgEQAAgGAIgCIAXAAQAOAAAXAEQAHAAAAAIQAAADgDACQgCACgDAAIgNgBIgMgCIgBAqIAAAMIAAAOIAAANIAXgBQADABADACQACACAAADQAAAEgCACQgDACgDAAIgNABIgMAAIgOABIgPABQgDAAgCgCg");
	this.shape_13.setTransform(-45.5,76.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AggA7QgFgCAAgJIACgZQACgiAAgrQAAgDACgCQACgCAEAAQADAAACACQADACAAADQAAAsgDAiIgBALIAAAMQATAAAegKIACAAQADAAADADQABABABADQgBAFgEADQgJAEgSADQgQADgLAAQgHAAgEgDg");
	this.shape_14.setTransform(-53.9,76.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgmA0QgKgKABgVQgBgUAKgUQAJgVAOgMQALgJAKAAQAGAAAMAEQAOAGgBAHQABADgDACQgCADgEAAIgEgCQgMgHgHAAQgGAAgGAFQgDADgGAIQgRAYAAAaQAAAOAEAGQAFAGANAAQANAAAJgJQALgJAEgRQgVABgOAHIgDABQgDAAgDgCQgCgDAAgDQAAgEAEgCQAPgKApAAQADAAACADQACABAAADQABAFgFACQgEAYgPAOQgPANgUAAQgTAAgJgKg");
	this.shape_15.setTransform(-63.5,76.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgzA8QgCgDAAgEIABgJIAAgKIABgNIAAgPIAAgOIgBgPIAAgPIgBgOQAAgDADgDQADgDADAAQAFAAAFAJQAUAdAOASQARAWAWATIAAgJIAAgKQAAgggDgUIgCgIIgBgHQAAgJAIAAQANAAAAAxIAAAYIgBAZIgBAMQgBAIgHAAQgEAAgGgGQgegdgog2IAAASIgBAQIABATIAAATQAAAUgIAAQgEAAgDgCg");
	this.shape_16.setTransform(-75,76.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAbAoIgFgZIgVAEIgTAEIgNAdQgCAFgEAAQgEAAgCgDQgCgBAAgEQAAgDALgYQAAgBAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgHAHgBQAJgPANgWQARgcAFAAQAGAAACAIIAFAaIALA0IAEALIACAJQAAADgCACQgCACgDABQgHgBgFgRgAgJAFIAbgFIgGgdg");
	this.shape_17.setTransform(-87.1,76.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgXA9QgJgCgEgDIgBAAQgDAAgCgDQgCgCAAgDIAAgYIABgYIAAgZIgBgbQAAgDAEgEQADgDADAAIAMAFIAOAGQAUAIAPAPQASASAAAVQAAANgGAMQgGAMgLAHQgLAIgVAAIgNgCgAgcgUIAAAVIgBApIACABQAGAFALAAQAQAAAIgGQAHgFAFgIQAEgJAAgJQAAgUgXgQQgHgFgcgMg");
	this.shape_18.setTransform(-98.1,76.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgGAHQgCgDAAgEQAAgDACgDQADgCADAAQAEAAADACQACADAAADQAAAEgCADQgDACgEABQgDgBgDgCg");
	this.shape_19.setTransform(-110.5,81.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgdAvQgIgMAAgUQAAgkAfgcIAGgHQAFgFADAAQADAAACACQACACAAADQABADgIAIIgPAPQgGAGgEANIALgFIAHgBQASAAAJAJQAKAJAAARQAAASgKAMQgLAMgRAAQgUAAgJgPgAgMACIgKAFIAAAIQAAAOAFAJQAFALAMAAQALAAAGgJQAGgHAAgNQAAgKgGgFQgGgFgLAAQgGAAgGACg");
	this.shape_20.setTransform(-117.4,76.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFF00").ss(1,1,1).p("AT5FKMgnxAAAIHgqTIchAAg");
	this.shape_21.setTransform(-22.4,61.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF66FF").s().p("Az4FKIHgqTIchAAIDwKTg");
	this.shape_22.setTransform(-22.4,61.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#458FFE").s().p("AwGKXQgKgOACgSIgCgZQAAgNALgHQAJgFAVgEQAXgoBBhKQBmhuAHgKQAHgKAcg3QAVgrAbgYQAOgMAMgVIAPghQANgYARgJQAQgIAUABQAFAAAMAEIDZACIBDAAIAAgCIAFggIgBhEQgrgOg2gOIhxgcQhtgeAAg2QAAgSAngmQAtgsAqAAQDOAAArARQAKAFADAIQABAFAKAAQBHAAAagLQAUgNAXgFIBCgFQAlgEAVgVIAAhXQjcAgiNhPQgwgagegjQgYgbAAgMQAAg+BCAAQAkAAA5AsQA4ArAiAAIBggBQgWgagFgVQgCgHAAgkQAAiICZAAQB/AABDBFQAsAtAAAjQAAASgDAJQgDAHgPAVQgCADAAADIBagjQAvgVAZgWQAKgIARglQAUgfAmAAQBDAAgHBSQAABWgyAbQgRAJgkAKQgtALgTAHQhWAggbA2QgQAfAAA8QAAAnAEAGQANAVBCAaQBMAdAPACIDsAdQA7AIAfAbQALAJAnAKQApALAGAEQAxAhAOAPQAQATAAAZQAAAjgWAcQgYAfguAIQAUBFA1BOQAWAgAoBqQASAwAJAdQAaAPAAAiQAAAcgeAOQg+Abi3gEQh6gDgJgEQgIgDgSgBQg1AAzkAZQiDACgnAGQghAFg1AAQg6AAgUgdgAsUIyIAAAAIAAgBIAAABg");
	this.shape_23.setTransform(-15.7,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_23}]},2).wait(1));

	// Layer 4
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(250,255,255,0.702)").s().p("AtCmhIfBAZIEKMRMgsRAAZg");
	this.shape_24.setTransform(-24.3,62.4);
	this.shape_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(1).to({_off:false},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.6,-52.8,155.3,105.7);


// stage content:
(lib.menu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{VerbalsMenu:0,end:89});

	// timeline functions:
	this.frame_0 = function() {
		this.btn_skip.addEventListener("click", skip.bind(this));
		
		function skip()
		{
			this.gotoAndPlay("end");
		}
		playSound("background_SAT_IV14",-1);
		playSound("background_SAT_IV14",-1);
	}
	this.frame_1 = function() {
		playSound("ZoomingSound");
	}
	this.frame_16 = function() {
		playSound("_2a");
	}
	this.frame_29 = function() {
		playSound("SENameOfPerson");
	}
	this.frame_35 = function() {
		playSound("SENameOfPerson");
	}
	this.frame_41 = function() {
		playSound("SENameOfPerson");
	}
	this.frame_47 = function() {
		playSound("SENameOfPerson");
	}
	this.frame_53 = function() {
		playSound("SENameOfPerson");
	}
	this.frame_59 = function() {
		playSound("SENameOfPerson");
	}
	this.frame_65 = function() {
		playSound("SENameOfPerson");
	}
	this.frame_81 = function() {
		playSound("ball_passes");
	}
	this.frame_89 = function() {
		this.stop();
		this.btn_intro.addEventListener("click", openIntro.bind(this));
		this.btn_inf.addEventListener("click", openInf.bind(this));
		this.btn_ger.addEventListener("click", openGer.bind(this));
		this.btn_pre.addEventListener("click", openPre.bind(this));
		this.btn_all.addEventListener("click", openAll.bind(this));
		this.btn_chapt.addEventListener("click", openChapters.bind(this));
		
		function openChapters(){
		
		 window.open ("../../mainMenu.html","_self");
		}
		
		function openIntro(){
		
		 window.open ("../intro/intro_Scene1.html","_self");
		}
		
		function openInf(){
		
		 window.open ("../inf/inf_Scene1.html","_self");
		}
		
		function openGer(){
		
		 window.open ("../ger/ger_Scene1.html","_self");
		}
		
		function openPre(){
		
		 window.open ("../pre/pre_Scene1.html","_self");
		}
		
		function openAll(){
		
		 window.open ("../all/all_Scene1.html","_self");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(15).call(this.frame_16).wait(13).call(this.frame_29).wait(6).call(this.frame_35).wait(6).call(this.frame_41).wait(6).call(this.frame_47).wait(6).call(this.frame_53).wait(6).call(this.frame_59).wait(6).call(this.frame_65).wait(16).call(this.frame_81).wait(8).call(this.frame_89).wait(1));

	// main
	this.instance = new lib.Copyright("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(275,394.4,0.582,0.582);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90));

	// Title
	this.instance_1 = new lib.VERBALStitle();
	this.instance_1.parent = this;
	this.instance_1.setTransform(270.4,200.2,0.25,0.25);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({scaleX:1.23,scaleY:1.23,x:276.2,y:197.6},15).to({scaleX:0.63,scaleY:0.63,x:270.4,y:200.2},7).wait(58).to({scaleX:0.54,scaleY:0.54,y:223.2},8).wait(1));

	// Buttons
	this.btn_chapt = new lib.SwitchChapter();
	this.btn_chapt.parent = this;
	this.btn_chapt.setTransform(499.9,387.8,0.53,0.53);
	new cjs.ButtonHelper(this.btn_chapt, 0, 1, 2, false, new lib.SwitchChapter(), 3);

	this.btn_all = new lib.MickButton();
	this.btn_all.parent = this;
	this.btn_all.setTransform(98.1,257.9,0.615,0.615);
	new cjs.ButtonHelper(this.btn_all, 0, 1, 2, false, new lib.MickButton(), 3);

	this.btn_dang = new lib.BuffyButton();
	this.btn_dang.parent = this;
	this.btn_dang.setTransform(262.6,301.4,0.799,0.799);
	new cjs.ButtonHelper(this.btn_dang, 0, 1, 2, false, new lib.BuffyButton(), 3);

	this.btn_past = new lib.TwiggsButton();
	this.btn_past.parent = this;
	this.btn_past.setTransform(439.9,275.1,0.736,0.736);
	new cjs.ButtonHelper(this.btn_past, 0, 1, 2, false, new lib.TwiggsButton(), 3);

	this.btn_pre = new lib.MonleyButton();
	this.btn_pre.parent = this;
	this.btn_pre.setTransform(473.9,111.4,0.827,0.827);
	new cjs.ButtonHelper(this.btn_pre, 0, 1, 2, false, new lib.MonleyButton(), 3);

	this.btn_ger = new lib.SamButton();
	this.btn_ger.parent = this;
	this.btn_ger.setTransform(344.9,94.4,0.789,0.789);
	new cjs.ButtonHelper(this.btn_ger, 0, 1, 2, false, new lib.SamButton(), 3);

	this.btn_inf = new lib.BubButton();
	this.btn_inf.parent = this;
	this.btn_inf.setTransform(217.3,128.6,0.791,0.791);
	new cjs.ButtonHelper(this.btn_inf, 0, 1, 2, false, new lib.BubButton(), 3);

	this.btn_intro = new lib.CarmenButton();
	this.btn_intro.parent = this;
	this.btn_intro.setTransform(101.3,131.4,0.847,0.847);
	new cjs.ButtonHelper(this.btn_intro, 0, 1, 2, false, new lib.CarmenButton(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.btn_intro},{t:this.btn_inf},{t:this.btn_ger},{t:this.btn_pre},{t:this.btn_past},{t:this.btn_dang},{t:this.btn_all},{t:this.btn_chapt}]},89).wait(1));

	// Type
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AglAtQgPgNABgVQgBgYAPgVQASgXAXAAQAZAAALALQAMALAAAZQAAAYgNAUQgQAYgZAAQgUAAgPgNgAgZgYQgMARAAASQAAAOALAJQAKAJAOAAQASAAALgSQALgQAAgTQgBgSgHgHQgIgHgSAAQgQAAgNASg");
	this.shape.setTransform(100,123.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgkA4QgDgDAAgDIAAgRIgBgRIACgTIABgUIAAgLIgBgLQAAgFACgDQADgEAFABIASABQAKABAFAEQAeAQAAAXQAAALgKAHQgIAHgMAEQAXAMALANQACADAAACQAAAEgDACQgCACgDAAQgDAAgCgCQgYgYgdgJIABAPIAAAOQAAADgCADQgCACgDAAQgDAAgCgCgAgXggIABAJIgBAPIgCANIAEAAIADAAQASAAAJgFQAEgBAEgEQADgEAAgCQAAgLgLgIQgKgJgLgBIgLgBg");
	this.shape_1.setTransform(89.4,123.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgEA2QgDgCAAgDIABgEIAAgDIAAgLIgBgLIgBgcIgCgeIgHABQgQAAgJgDQgGgBAAgGQAAgDACgCQACgDADAAIAMACIAMAAIANAAIANAAIAQABIARABQADAAACACQACACAAADQAAADgCADQgCACgDAAIgRgBIgQgBIgGAAIACAhIACAgIABAIIAAAHQAAAFgCAEQgCAFgEAAQgCAAgCgCg");
	this.shape_2.setTransform(80,123.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgwA5QgDgCAAgDIABgKIAAgJIABgOIAAgNIAAgOIAAgOIgBgOIgBgOQAAgDADgDQADgDADAAQAEAAAGAJQASAbAOASQARAVAVATIAAgJIgBgJQAAgggCgTIgCgHIgBgIQAAgJAHAAQANAAAAAwIAAAXIAAAYIgCAMQgBAIgGAAQgEAAgGgGQgegcglg0IgBARIAAAPIAAATIABASQAAAUgIAAQgEAAgCgDg");
	this.shape_3.setTransform(68.4,123.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AggA2QgBgCAAgDQAAgEABgCQADgCADAAIAPgBIACgOIgBgMIgBgNQABgPACgaIgKABIgJAAQgEAAgCgDQgCgBAAgEQAAgGAHgCIAWAAQAOAAAWADQAGABAAAHQAAAEgDACQgCABgCAAIgMAAIgMgCIgCAnIAAANIABANIgBAMIAYAAQACAAACACQACACAAADQAAADgCADQgCACgCAAIgNAAIgMAAIgOACIgOABQgDAAgDgCg");
	this.shape_4.setTransform(58.3,123.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgdAzQgNgHAAgKQgBgEADgBQACgCADAAQAEAAACAEQAEAFADACQAGAEAMAAQAKAAAKgFQANgGAAgLQAAgJgLgGQgJgEgMgBQgLAAgJgEQgKgGAAgLQAAgNAPgLQAOgKAOAAQAHAAAJADQAMADAAAFQAAAGgHAAIgKgBIgLgCQgLAAgIAGQgIAFAAAIQAAAHALACIAPACQAQABAKAJQAJAIAAAMQAAASgRAKQgOAJgRAAQgNAAgMgFg");
	this.shape_5.setTransform(263.2,104.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgfA4QgHgGAAgYIAAgKIAAgMIAAgEIABgDIABggIAAgHIgBgIQAAgJAHAAQADAAACACIARgDIAOgCQASABAKAEQAFABAAAGQAAADgCACQgCADgDAAIgCgBQgNgDgLgBIgMABIgQAEIABAHIgBAdIAfgEIARgBQADAAADACQACACAAAEQAAAFgHABIgRACIghACIgBAKIAAAJQAAAQACADQACADAKAAIANgBIANAAIAFAAIAEgBQAIAAAAAHQAAAHgHABQgGABgWAAQgXABgGgHg");
	this.shape_6.setTransform(253.5,104.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMA1QgJgWgLgpIgGgUQgEgPAAgFQAAgDACgCQACgCADAAQAGAAACAGIACANIAHAZQAHAaAHATIAAgBIATg0IAGgSQAEgLAFgFQADgDADAAQADAAACACQACACAAADQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgFAHgCAHIgGAQIgUA0IgIATQgBAEgEAAQgGAAgCgGg");
	this.shape_7.setTransform(244.2,104.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AggA2QgCgCABgEQgBgDACgBQADgDADAAIAQgCIABgNIgBgMIAAgNQAAgPACgaIgKABIgJAAQgEgBgCgCQgCgCAAgDQAAgGAHgBIAWgBQANAAAWADQAHABAAAHQAAAEgCACQgDABgDAAIgLAAIgMgCIgCAnIAAANIABANIgBAMIAYAAQACAAACACQACACABADQgBADgCADQgCACgCAAIgNAAIgMAAIgOACIgOABQgDAAgDgCg");
	this.shape_8.setTransform(234.8,104.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgfA2QgCgCAAgEQAAgDACgBQACgDADAAIAPgCIABgNIAAgMIgBgNQAAgPACgaIgJABIgKAAQgDgBgCgCQgCgCAAgDQAAgGAHgBIAWgBQANAAAXADQAGABAAAHQAAAEgDACQgBABgDAAIgMAAIgMgCIgBAnIAAANIAAANIAAAMIAWAAQAEAAACACQABACAAADQAAADgBADQgCACgEAAIgMAAIgMAAIgOACIgOABQgDAAgCgCg");
	this.shape_9.setTransform(216.4,104.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgfA2QgCgCAAgEQAAgDACgBQACgDADAAIAPgCIABgNIAAgMIgBgNQAAgPACgaIgJABIgKAAQgDgBgCgCQgCgCAAgDQAAgGAHgBIAWgBQANAAAXADQAGABAAAHQAAAEgDACQgCABgCAAIgMAAIgMgCIgBAnIAAANIAAANIAAAMIAWAAQAEAAABACQACACAAADQAAADgCADQgBACgEAAIgMAAIgMAAIgOACIgOABQgDAAgCgCg");
	this.shape_10.setTransform(196.2,104.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgiA7QgDgCAAgDIABgsIABgqIgBgKIAAgKQAAgCACgCQACgDAEAAIAEACIAQgDIAMgBQAIAAALACQAPAEAAAFQAAAEgCACQgCACgDAAIgDgBQgJgCgPAAIgKAAIgPACIAAAgQAOgEAHAAIAXABQAGABAAAHQAAADgCADQgCAAgDAAIgLAAIgLAAQgFAAgQADIgBAzQAAADgCACQgCACgDABQgDgBgCgCg");
	this.shape_11.setTransform(188,104.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgwA5QgDgCAAgDIABgKIAAgJIABgOIAAgNIAAgOIAAgOIgBgOIgBgOQAAgDADgDQADgDADAAQAEAAAGAJQASAbAOASQARAVAVATIAAgJIgBgJQAAgggCgTIgCgHIgBgIQAAgJAHAAQANAAAAAwIAAAXIAAAYIgCAMQgBAIgGAAQgEAAgGgGQgegcglg0IgBARIAAAPIAAATIABASQAAAUgIAAQgEAAgCgDg");
	this.shape_12.setTransform(177.1,104.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgfA2QgCgCAAgEQAAgDACgBQACgDADAAIAPgCIABgNIAAgMIgBgNQAAgPACgaIgJABIgKAAQgDgBgCgCQgCgCAAgDQAAgGAHgBIAWgBQANAAAXADQAGABAAAHQAAAEgDACQgCABgCAAIgMAAIgMgCIgBAnIAAANIAAANIAAAMIAWAAQAEAAABACQACACAAADQAAADgCADQgBACgEAAIgMAAIgMAAIgOACIgOABQgDAAgCgCg");
	this.shape_13.setTransform(167,104.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgEA2QgDgCAAgDIABgEIAAgDIAAgLIgBgLIgBgcIgCgeIgHABQgQAAgJgDQgGgBAAgGQAAgDACgCQACgDADAAIAMACIAMAAIANAAIANAAIAQABIARABQADAAACACQACACAAADQAAADgCADQgCACgDAAIgRgBIgQgBIgGAAIACAhIACAgIABAIIAAAHQAAAFgCAEQgCAFgEAAQgCAAgCgCg");
	this.shape_14.setTransform(80,123.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgwA5QgDgCAAgDIABgKIAAgJIABgOIAAgNIAAgOIAAgOIgBgOIgBgOQAAgDADgDQADgDADAAQAEAAAGAJQASAbAOASQARAVAVATIAAgJIgBgJQAAgggCgTIgCgHIgBgIQAAgJAHAAQANAAAAAwIAAAXIAAAYIgCAMQgBAIgGAAQgEAAgGgGQgegcglg0IgBARIAAAPIAAATIABASQAAAUgIAAQgEAAgCgDg");
	this.shape_15.setTransform(68.4,123.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgdAzQgNgHAAgKQgBgEADgBQACgCADAAQAEAAACAEQAEAFADACQAGAEAMAAQAKAAAKgFQANgGAAgLQAAgJgLgGQgJgEgMgBQgLAAgJgEQgKgGAAgLQAAgNAPgLQAOgKAOAAQAHAAAJADQAMADAAAFQAAAGgHAAIgKgBIgLgCQgLAAgIAGQgIAFAAAIQAAAHALACIAPACQAQABAKAJQAJAIAAAMQAAASgRAKQgOAJgRAAQgNAAgMgFg");
	this.shape_16.setTransform(378.7,109.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgWA7QgJgCgEgDIAAAAQgEAAgCgDQgCgCAAgDIABgXIABgXIgBgYIAAgaQAAgDADgDQADgEADAAIAMAFIANAGQAUAHAOAPQASARAAAUQAAANgGALQgGAMgKAHQgMAIgUAAQgFAAgHgCgAgbgUIAAAVIgBAoIACAAQAGAFAKAAQAQAAAHgFQAHgFAFgIQAEgJAAgIQAAgUgXgPQgGgFgbgMg");
	this.shape_17.setTransform(368.2,109.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgfArQgKgKgCgVQgBgJAAgbIABgQIABgKQACgFAEAAQAHAAAAAMIAAArQAAArAeAAQAdABAAhKIAAgHIAAgGQAAgFACgDQACgEAEAAQAHgBAAAKIAAAJIAAAKQAABTgrAAQgWAAgLgNg");
	this.shape_18.setTransform(345.2,109.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgfA4QgHgGAAgYIAAgKIAAgMIAAgDIABgEIABgfIAAgIIgBgIQAAgJAHAAQADAAACACIARgDIAOgBQASAAAKAEQAFABAAAGQAAADgCACQgCADgDAAIgCgBQgNgDgLgBIgMABIgQAEIABAIIgBAcIAfgEIARgBQADAAADACQACACAAAEQAAAGgHAAIgRABIghADIgBAKIAAAJQAAAQACAEQACACAKAAIANgBIANAAIAFAAIAEgBQAIAAAAAHQAAAHgHABQgGABgWAAQgXABgGgHg");
	this.shape_19.setTransform(325.7,109.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgkAyQgJgKAAgUQAAgTAJgUQAIgTAOgNQAKgIAJAAQAHAAAKAEQAOAGAAAGQAAADgCACQgDACgCAAIgFgBQgLgHgIAAQgFAAgGAFIgIALQgRAWAAAaQAAAOAFAFQAEAGANAAQAMAAAJgIQAKgJAFgQQgVAAgNAIIgEABQgDgBgCgCQgCgCAAgDQAAgEAEgDQAOgJAnAAQADAAADACQACABgBAEQAAAFgDACQgFAWgPAOQgOANgSAAQgTAAgIgKg");
	this.shape_20.setTransform(315.8,109.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgkA4QgDgDAAgDIAAgRIgBgRIACgTIABgUIAAgLIgBgLQAAgFACgDQADgEAFABIASABQAKABAFAEQAeAQAAAXQAAALgKAHQgIAHgMAEQAXAMALANQACADAAACQAAAEgDACQgCACgDAAQgDAAgCgCQgYgYgdgJIABAPIAAAOQAAADgCADQgCACgDAAQgDAAgCgCgAgXggIABAJIgBAPIgCANIAEAAIADAAQASAAAJgFQAEgBAEgEQADgEAAgCQAAgLgLgIQgKgJgLgBIgLgBg");
	this.shape_21.setTransform(89.4,123.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgwA5QgDgCAAgDIABgKIAAgJIABgOIAAgNIAAgOIAAgOIgBgOIgBgOQAAgDADgDQADgDADAAQAEAAAGAJQASAbAOASQARAVAVATIAAgJIgBgJQAAgggCgTIgCgHIgBgIQAAgJAHAAQANAAAAAwIAAAXIAAAYIgCAMQgBAIgGAAQgEAAgGgGQgegcglg0IgBARIAAAPIAAATIABASQAAAUgIAAQgEAAgCgDg");
	this.shape_22.setTransform(68.4,123.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgdAzQgNgHAAgKQgBgEADgBQACgCADAAQAEAAACAEQAEAFADACQAGAEAMAAQAKAAAKgFQANgGAAgLQAAgJgLgGQgJgEgMgBQgLAAgJgEQgKgGAAgLQAAgNAPgLQAOgKAOAAQAHAAAJADQAMADAAAFQAAAGgHAAIgKgBIgLgCQgLAAgIAGQgIAFAAAIQAAAHALACIAPACQAQABAKAJQAJAIAAAMQAAASgRAKQgOAJgRAAQgNAAgMgFg");
	this.shape_23.setTransform(520,130.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgfA4QgHgGAAgYIAAgKIAAgMIAAgDIABgEIABgfIAAgIIgBgIQAAgJAHAAQADAAACACIARgDIAOgBQASAAAKADQAFADAAAFQAAADgCACQgCACgDABIgCgBQgNgEgLAAIgMABIgQAEIABAIIgBAcIAfgEIARgBQADAAADACQACACAAADQAAAHgHAAIgRABIghADIgBALIAAAIQAAAQACAEQACACAKAAIANgBIANAAIAFAAIAEgBQAIAAAAAIQAAAGgHABQgGACgWAAQgXAAgGgHg");
	this.shape_24.setTransform(510.3,130.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgfA5QgEgCAAgJIABgYQACghAAgoQAAgDACgDQACgCADAAQADAAADACQACADAAADQAAApgCAhIgBALIgBALQATAAAdgJIACAAQADgBACADQACACAAADQAAAFgFACQgIAEgSADQgPADgKAAQgIAAgDgDg");
	this.shape_25.setTransform(501.5,130.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgeA4IgCgEIAAgWIABgeIACgeIAAgKIABgLQACgGAFABIAGgBIALgBQAMABAMAIQANALAAAOQAAASgOAKQgMAKgRgBIgIgBIgBAoIgBAEQgDACgDAAQgCAAgCgCgAgQgrIAAAOIgCAdIAIAAQAMAAAIgGQAJgGAAgMQABgIgJgGQgIgFgJAAIgFAAIgFAAg");
	this.shape_26.setTransform(493.4,130.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgfA2QgDgCAAgDQAAgEADgCQACgCADAAIAQgBIAAgOIAAgMIAAgNQAAgQABgZIgJABIgKAAQgDAAgCgCQgCgDAAgDQAAgGAHgCIAWAAQAOAAAVADQAHABAAAHQAAAEgCACQgCABgEAAIgLAAIgMgCIgBAnIAAANIAAANIAAANIAWgBQAEAAACACQACACAAADQAAAEgCACQgCACgEAAIgMAAIgMAAIgNACIgPABQgDAAgCgCg");
	this.shape_27.setTransform(485.3,130.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgeAtQgKgLAAgQQAAgYAVgaQASgVAQAAIAHAAIAFABQACgEAEAAQAFAAACAHIABAOQAAADgCADQgCADgDAAQgFAAgCgGQgCgFgCgBIgIAAQgKAAgMAQQgSAWAAASQAAAKAGAGQAGAHAJAAQAHAAAHgDIANgJQAEgDADAAQADAAACACQACADAAADQAAADgDACQgTASgTAAQgPAAgLgMg");
	this.shape_28.setTransform(476.8,130.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgfA2QgCgCAAgDQAAgEACgCQACgCADAAIAPgBIABgOIAAgMIgBgNQAAgQACgZIgJABIgKAAQgDAAgCgCQgCgDAAgDQAAgGAHgCIAWAAQANAAAXADQAGABAAAHQAAAEgDACQgCABgCAAIgMAAIgMgCIgBAnIAAANIAAANIAAANIAWgBQAEAAABACQACACAAADQAAAEgCACQgBACgEAAIgMAAIgMAAIgOACIgOABQgDAAgCgCg");
	this.shape_29.setTransform(468,130.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAaAmIgFgXIgUAEIgSAEIgNAcQgCAEgEAAQgDAAgCgCQgDgCAAgDQAAgEALgXIgBgFQAAgGAHgBIAVgjQARgcAEAAQAGAAACAIIAFAZIAKAyIAFALIACAIQAAADgCACQgDACgDAAQgGAAgFgRgAgIAFIAZgFIgGgbg");
	this.shape_30.setTransform(438.7,130.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgfA4IgBgEIAAgWIABgeIACgeIAAgKIAAgLQADgGAFABIAGgBIALgBQANABALAIQANALAAAOQAAASgNAKQgNAKgQgBIgJgBIgBAoIgCAEQgCACgCAAQgDAAgDgCgAgPgrIgBAOIgBAdIAIAAQALAAAJgGQAJgGAAgMQAAgIgJgGQgIgFgIAAIgHAAIgDAAg");
	this.shape_31.setTransform(429.5,130.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgEA2QgDgCAAgDIABgEIAAgDIAAgLIgBgLIgBgcIgCgeIgHABQgQAAgJgDQgGgBAAgGQAAgDACgCQACgDADAAIAMACIAMAAIANAAIANAAIAQABIARABQADAAACACQACACAAADQAAADgCADQgCACgDAAIgRgBIgQgBIgGAAIACAhIACAgIABAIIAAAHQAAAFgCAEQgCAFgEAAQgCAAgCgCg");
	this.shape_32.setTransform(505.1,107.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgfA4QgHgHAAgXIAAgKIAAgMIAAgEIABgDIABggIAAgIIgBgIQAAgIAHAAQADAAACACIARgEIAOgBQASAAAKAFQAFACAAAEQAAADgCADQgCACgDAAIgCAAQgNgDgLAAIgMAAIgQAEIABAHIgBAcIAfgCIARgCQADAAADACQACACAAAEQAAAFgHABIgRACIghACIgBAKIAAAJQAAARACACQACACAKAAIANAAIANAAIAFgBIAEAAQAIAAAAAHQAAAHgHABQgGACgWgBQgXAAgGgGg");
	this.shape_33.setTransform(483,107.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgdAzQgNgHAAgKQgBgEADgBQACgCADAAQAEAAACAEQAEAFADACQAGAEAMAAQAKAAAKgFQANgGAAgLQAAgJgLgGQgJgEgMgBQgLAAgJgEQgKgGAAgLQAAgNAPgLQAOgKAOAAQAHAAAJADQAMADAAAFQAAAGgHAAIgKgBIgLgCQgLAAgIAGQgIAFAAAIQAAAHALACIAPACQAQABAKAJQAJAIAAAMQAAASgRAKQgOAJgRAAQgNAAgMgFg");
	this.shape_34.setTransform(473,108);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgfA4QgHgHAAgXIAAgKIAAgMIAAgEIABgDIABggIAAgIIgBgIQAAgIAHAAQADAAACACIARgEIAOgBQASAAAKAFQAFACAAAEQAAADgCADQgCACgDAAIgCAAQgNgDgLAAIgMAAIgQAEIABAHIgBAcIAfgCIARgCQADAAADACQACACAAAEQAAAFgHABIgRACIghACIgBAKIAAAJQAAARACACQACACAKAAIANAAIANAAIAFgBIAEAAQAIAAAAAHQAAAHgHABQgGACgWgBQgXAAgGgGg");
	this.shape_35.setTransform(463.3,107.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgkA4QgDgDAAgDIAAgRIgBgRIACgTIABgUIAAgLIgBgLQAAgFACgDQADgEAFABIASABQAKABAFAEQAeAQAAAXQAAALgKAHQgIAHgMAEQAXAMALANQACADAAACQAAAEgDACQgCACgDAAQgDAAgCgCQgYgYgdgJIABAPIAAAOQAAADgCADQgCACgDAAQgDAAgCgCgAgXggIABAJIgBAPIgCANIAEAAIADAAQASAAAJgFQAEgBAEgEQADgEAAgCQAAgLgLgIQgKgJgLgBIgLgBg");
	this.shape_36.setTransform(453.8,107.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgeA5IgCgGIAAgVIABgeIACgeIAAgKIABgKQACgHAFABIAGgBIALgBQANAAALAJQANALAAAOQAAASgOAKQgMAJgQABIgJgBIgBAmIgBAGQgCABgEABQgCgBgCgBgAgQgrIAAANIgCAdIAJABQALAAAIgFQAKgIgBgLQAAgIgIgGQgIgGgJABIgFAAIgFAAg");
	this.shape_37.setTransform(445.1,107.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgkA4QgDgDAAgDIAAgRIgBgRIACgTIABgUIAAgLIgBgLQAAgFACgDQADgEAFABIASABQAKABAFAEQAeAQAAAXQAAALgKAHQgIAHgMAEQAXAMALANQACADAAACQAAAEgDACQgCACgDAAQgDAAgCgCQgYgYgdgJIABAPIAAAOQAAADgCADQgCACgDAAQgDAAgCgCgAgXggIABAJIgBAPIgCANIAEAAIADAAQASAAAJgFQAEgBAEgEQADgEAAgCQAAgLgLgIQgKgJgLgBIgLgBg");
	this.shape_38.setTransform(89.4,123.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgEA2QgDgCAAgDIABgEIAAgDIAAgLIgBgLIgBgcIgCgeIgHABQgQAAgJgDQgGgBAAgGQAAgDACgCQACgDADAAIAMACIAMAAIANAAIANAAIAQABIARABQADAAACACQACACAAADQAAADgCADQgCACgDAAIgRgBIgQgBIgGAAIACAhIACAgIABAIIAAAHQAAAFgCAEQgCAFgEAAQgCAAgCgCg");
	this.shape_39.setTransform(80,123.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgwA5QgDgCAAgDIABgKIAAgJIABgOIAAgNIAAgOIAAgOIgBgOIgBgOQAAgDADgDQADgDADAAQAEAAAGAJQASAbAOASQARAVAVATIAAgJIgBgJQAAgggCgTIgCgHIgBgIQAAgJAHAAQANAAAAAwIAAAXIAAAYIgCAMQgBAIgGAAQgEAAgGgGQgegcglg0IgBARIAAAPIAAATIABASQAAAUgIAAQgEAAgCgDg");
	this.shape_40.setTransform(68.4,123.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgfA4QgHgHAAgXIAAgKIAAgMIAAgEIABgDIABggIAAgIIgBgIQAAgIAHAAQADAAACACIARgEIAOgBQASAAAKAFQAFACAAAEQAAADgCADQgCACgDAAIgCAAQgNgDgLAAIgMABIgQADIABAHIgBAcIAfgDIARgBQADAAADACQACACAAAEQAAAFgHABIgRACIghADIgBAJIAAAJQAAARACACQACACAKAAIANAAIANAAIAFgBIAEAAQAIAAAAAHQAAAHgHABQgGACgWgBQgXAAgGgGg");
	this.shape_41.setTransform(459.7,303);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgfA6QgEgDAAgIIABgZQACggAAgpQAAgEACgCQACgCADAAQADAAADACQACACAAAEQAAApgCAhIgBALIgBALQATAAAdgJIACgBQADAAACADQACACAAADQAAAFgFACQgIAEgSADQgPADgKAAQgIAAgDgCg");
	this.shape_42.setTransform(450.9,303.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgfA5IgBgGIAAgVIABgeIACgeIAAgKIABgKQACgHAFABIAGgBIALgBQANAAALAJQANALAAAOQAAASgOAKQgMAJgQAAIgJAAIgBAmIgBAGQgDABgCAAQgDAAgDgBgAgQgrIAAANIgBAdIAIABQALAAAIgFQAKgIgBgLQAAgIgIgGQgIgGgJABIgFAAIgFAAg");
	this.shape_43.setTransform(442.8,302.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AggA2QgCgCAAgEQAAgCACgCQADgDADAAIAQgCIABgNIgBgNIAAgMQAAgPACgaIgKAAIgJAAQgEAAgCgCQgCgCAAgDQAAgHAHAAIAWgBQAOAAAVADQAHABAAAHQAAAEgCABQgCACgEAAIgLAAIgMgCIgCAoIAAAMIABANIgBAMIAYAAQACAAACACQADADAAADQAAADgDACQgCACgCAAIgNABIgMAAIgNABIgPABQgDAAgDgCg");
	this.shape_44.setTransform(434.7,303.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgfA2QgCgCgBgEQABgCACgCQACgDADAAIAQgCIAAgNIAAgNIAAgMQgBgPACgaIgJAAIgKAAQgDAAgCgCQgCgCAAgDQAAgHAHAAIAWgBQANAAAXADQAGABAAAHQAAAEgCABQgCACgEAAIgLAAIgMgCIgBAoIAAAMIAAANIAAAMIAWAAQADAAADACQABADABADQgBADgBACQgDACgDAAIgMABIgMAAIgNABIgPABQgDAAgCgCg");
	this.shape_45.setTransform(417.4,303.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgeA5IgCgGIAAgVIABgeIACgeIAAgKIAAgKQACgHAGABIAHgBIAKgBQAMAAAMAJQANALAAAOQAAASgNAKQgNAJgRAAIgIAAIgBAmIgCAGQgBABgDAAQgEAAgBgBgAgPgrIgBANIgCAdIAIABQAMAAAJgFQAIgIABgLQAAgIgJgGQgIgGgIABIgHAAIgDAAg");
	this.shape_46.setTransform(378.9,302.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAaAmIgFgXIgUAEIgSAEIgNAcQgCAEgEAAQgDAAgCgCQgDgCAAgDQAAgEALgXIgBgFQAAgGAHgBIAVgjQARgcAEAAQAGAAACAIIAFAZIAKAyIAFALIACAIQAAADgCACQgDACgDAAQgGAAgFgRgAgIAFIAZgFIgGgbg");
	this.shape_47.setTransform(418.2,280.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgfA4IgBgEIAAgWIABgeIACgeIAAgKIAAgLQACgGAGABIAHgBIAKAAQAMAAAMAJQANAJAAAPQAAASgNAKQgNAKgRAAIgIgCIgBAoIgCAEQgBACgDABQgEgBgCgCgAgPgrIgBAOIgCAdIAIAAQAMAAAJgGQAIgGABgMQAAgIgJgGQgIgFgIgBIgHAAIgDABg");
	this.shape_48.setTransform(409.1,280);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgdAzQgNgHAAgKQgBgEADgBQACgCADAAQAEAAACAEQAEAFADACQAGAEAMAAQAKAAAKgFQANgGAAgLQAAgJgLgGQgJgEgMgBQgLAAgJgEQgKgGAAgLQAAgNAPgLQAOgKAOAAQAHAAAJADQAMADAAAFQAAAGgHAAIgKgBIgLgCQgLAAgIAGQgIAFAAAIQAAAHALACIAPACQAQABAKAJQAJAIAAAMQAAASgRAKQgOAJgRAAQgNAAgMgFg");
	this.shape_49.setTransform(520,130.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgeAtQgKgLAAgQQAAgYAVgaQASgVAQAAIAHAAIAFABQACgEAEAAQAFAAACAHIABAOQAAADgCADQgCADgDAAQgFAAgCgGQgCgFgCgBIgIAAQgKAAgMAQQgSAWAAASQAAAKAGAGQAGAHAJAAQAHAAAHgDIANgJQAEgDADAAQADAAACACQACADAAADQAAADgDACQgTASgTAAQgPAAgLgMg");
	this.shape_50.setTransform(476.8,130.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAaAmIgFgXIgUAEIgSAEIgNAcQgCAEgEAAQgDAAgCgCQgDgCAAgDQAAgEALgXIgBgFQAAgGAHgBIAVgjQARgcAEAAQAGAAACAIIAFAZIAKAyIAFALIACAIQAAADgCACQgDACgDAAQgGAAgFgRgAgIAFIAZgFIgGgbg");
	this.shape_51.setTransform(438.7,130.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgEA2QgDgCAAgDIABgEIAAgDIAAgLIgBgLIgBgcIgCgeIgHABQgQAAgJgDQgGgBAAgGQAAgDACgCQACgDADAAIAMACIAMAAIANAAIANAAIAQABIARABQADAAACACQACACAAADQAAADgCADQgCACgDAAIgRgBIgQgBIgGAAIACAhIACAgIABAIIAAAHQAAAFgCAEQgCAFgEAAQgCAAgCgCg");
	this.shape_52.setTransform(505.1,107.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgdAzQgNgHAAgKQgBgEADgBQACgCADAAQAEAAACAEQAEAFADACQAGAEAMAAQAKAAAKgFQANgGAAgLQAAgJgLgGQgJgEgMgBQgLAAgJgEQgKgGAAgLQAAgNAPgLQAOgKAOAAQAHAAAJADQAMADAAAFQAAAGgHAAIgKgBIgLgCQgLAAgIAGQgIAFAAAIQAAAHALACIAPACQAQABAKAJQAJAIAAAMQAAASgRAKQgOAJgRAAQgNAAgMgFg");
	this.shape_53.setTransform(473,108);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgkA4QgDgDAAgDIAAgRIgBgRIACgTIABgUIAAgLIgBgLQAAgFACgDQADgEAFABIASABQAKABAFAEQAeAQAAAXQAAALgKAHQgIAHgMAEQAXAMALANQACADAAACQAAAEgDACQgCACgDAAQgDAAgCgCQgYgYgdgJIABAPIAAAOQAAADgCADQgCACgDAAQgDAAgCgCgAgXggIABAJIgBAPIgCANIAEAAIADAAQASAAAJgFQAEgBAEgEQADgEAAgCQAAgLgLgIQgKgJgLgBIgLgBg");
	this.shape_54.setTransform(89.4,123.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgEA2QgDgCAAgDIABgEIAAgDIAAgLIgBgLIgBgcIgCgeIgHABQgQAAgJgDQgGgBAAgGQAAgDACgCQACgDADAAIAMACIAMAAIANAAIANAAIAQABIARABQADAAACACQACACAAADQAAADgCADQgCACgDAAIgRgBIgQgBIgGAAIACAhIACAgIABAIIAAAHQAAAFgCAEQgCAFgEAAQgCAAgCgCg");
	this.shape_55.setTransform(80,123.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgfA4QgHgGAAgYIAAgKIAAgMIAAgDIABgEIABgfIAAgIIgBgIQAAgJAHAAQADAAACACIARgDIAOgBQASAAAKADQAFACAAAGQAAADgCACQgCACgDABIgCgBQgNgEgLAAIgMABIgQAEIABAIIgBAcIAfgEIARgBQADAAADACQACACAAADQAAAHgHAAIgRABIghADIgBALIAAAIQAAAQACAEQACACAKAAIANgBIANAAIAFAAIAEgBQAIAAAAAIQAAAGgHABQgGACgWAAQgXAAgGgHg");
	this.shape_56.setTransform(291.5,319.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgeA4IgCgEIAAgWIABgeIACgeIAAgKIABgLQACgGAFABIAGgBIALgBQAMABAMAIQANALAAAOQAAASgOAKQgMAKgQgBIgJgBIgBAoIgBAEQgCACgEAAQgCAAgCgCgAgQgrIAAAOIgCAdIAJAAQALAAAIgGQAKgGgBgMQAAgIgIgGQgIgFgJgBIgFAAIgFABg");
	this.shape_57.setTransform(274.6,319);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AggA2QgCgCAAgDQAAgEACgCQADgCADAAIAQgBIABgOIgBgMIAAgNQAAgQABgZIgJABIgJAAQgEAAgCgCQgCgDAAgDQAAgGAHgCIAWAAQAOAAAVADQAHABAAAHQAAAEgCACQgDABgDAAIgLgBIgMgBIgCAnIAAANIABANIgBANIAYgBQACAAADACQACACAAADQAAAEgCACQgDACgCAAIgNAAIgMAAIgNACIgPABQgDAAgDgCg");
	this.shape_58.setTransform(266.5,319.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgfA2QgCgCAAgDQAAgEACgCQACgCADAAIAPgBIABgOIAAgMIgBgNQAAgQACgZIgJABIgKAAQgDAAgCgCQgCgDAAgDQAAgGAHgCIAWAAQANAAAXADQAGABAAAHQAAAEgDACQgBABgDAAIgMgBIgMgBIgBAnIAAANIAAANIAAANIAWgBQAEAAACACQABACAAADQAAAEgBACQgCACgEAAIgMAAIgMAAIgOACIgOABQgDAAgCgCg");
	this.shape_59.setTransform(249.2,319.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgfA4IgBgEIAAgWIABgeIACgeIAAgKIAAgLQACgGAGABIAHgBIAKgBQAMABAMAIQANALAAAOQAAASgNAKQgNAKgRgBIgIgBIgBAoIgCAEQgCACgCAAQgEAAgCgCgAgPgrIgBAOIgBAdIAHAAQAMAAAJgGQAIgGABgMQAAgIgJgGQgIgFgIgBIgHAAIgDABg");
	this.shape_60.setTransform(210.7,319);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgkAyQgJgKAAgUQAAgTAJgUQAIgTAOgNQAKgIAJAAQAHAAAKAEQAOAFAAAHQAAADgCADQgDABgDAAIgEgBQgLgHgIAAQgFAAgGAGIgIAKQgRAXAAAZQAAAOAFAFQAEAGANAAQAMAAAJgIQAKgJAFgRQgVACgNAGIgEABQgDAAgCgCQgCgDAAgCQAAgEAEgDQAOgIAnAAQADAAADACQABAAAAAEQAAAEgDACQgFAXgPANQgOAOgSAAQgTAAgIgKg");
	this.shape_61.setTransform(292.8,296.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AggA2QgBgCAAgEQAAgCABgCQADgDADAAIAPgCIACgNIgBgNIgBgMQABgPACgaIgKAAIgJAAQgEAAgCgCQgCgCAAgDQAAgHAHAAIAWgBQAOAAAWADQAGABAAAHQAAAEgDABQgCACgCAAIgMAAIgMgCIgCAoIAAAMIABANIgBAMIAYAAQACAAACACQACADAAADQAAADgCACQgCACgCAAIgNABIgMAAIgOABIgOABQgDAAgDgCg");
	this.shape_62.setTransform(271.6,296.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgkAyQgKgKABgUQgBgTAKgUQAIgTAOgNQAJgIAKAAQAHAAAKAEQAOAFAAAHQAAADgCADQgDABgDAAIgEgBQgLgHgIAAQgFAAgGAGIgIAKQgRAXAAAZQAAAOAFAFQAEAGANAAQAMAAAJgIQALgJAEgRQgVACgNAGIgEABQgDAAgCgCQgCgDAAgCQAAgEAEgDQAOgIAnAAQAEAAACACQABAAAAAEQAAAEgDACQgFAXgOANQgPAOgSAAQgTAAgIgKg");
	this.shape_63.setTransform(254.2,296.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgfA6QgEgDAAgIIABgZQACggAAgpQAAgEACgCQACgCADAAQADAAADACQACACAAAEQAAApgCAhIgBALIgBALQATAAAdgJIACgBQADAAACADQACACAAADQAAAFgFACQgIAEgSADQgPADgKAAQgIAAgDgCg");
	this.shape_64.setTransform(450.9,303.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAaAmIgFgXIgUAEIgSAEIgNAcQgCAEgEAAQgDAAgCgCQgDgCAAgDQAAgEALgXIgBgFQAAgGAHgBIAVgjQARgcAEAAQAGAAACAIIAFAZIAKAyIAFALIACAIQAAADgCACQgDACgDAAQgGAAgFgRgAgIAFIAZgFIgGgbg");
	this.shape_65.setTransform(418.2,280.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgWA7QgJgCgEgDIAAAAQgEAAgCgDQgCgCAAgDIABgXIABgXIgBgYIAAgaQAAgDADgDQADgEADAAIAMAFIANAGQAUAHAOAPQASARAAAUQAAANgGALQgGAMgKAHQgMAIgUAAQgFAAgHgCgAgbgUIAAAVIgBAoIACAAQAGAFAKAAQAQAAAHgFQAHgFAFgIQAEgJAAgIQAAgUgXgPQgGgFgbgMg");
	this.shape_66.setTransform(368.2,109.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgfA5QgEgCAAgJIABgYQACghAAgoQAAgDACgDQACgCADAAQADAAADACQACADAAADQAAApgCAhIgBALIgBALQATAAAdgJIACAAQADgBACADQACACAAADQAAAFgFACQgIAEgSADQgPADgKAAQgIAAgDgDg");
	this.shape_67.setTransform(501.5,130.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgeAtQgKgLAAgQQAAgYAVgaQASgVAQAAIAHAAIAFABQACgEAEAAQAFAAACAHIABAOQAAADgCADQgCADgDAAQgFAAgCgGQgCgFgCgBIgIAAQgKAAgMAQQgSAWAAASQAAAKAGAGQAGAHAJAAQAHAAAHgDIANgJQAEgDADAAQADAAACACQACADAAADQAAADgDACQgTASgTAAQgPAAgLgMg");
	this.shape_68.setTransform(476.8,130.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AAaAmIgFgXIgUAEIgSAEIgNAcQgCAEgEAAQgDAAgCgCQgDgCAAgDQAAgEALgXIgBgFQAAgGAHgBIAVgjQARgcAEAAQAGAAACAIIAFAZIAKAyIAFALIACAIQAAADgCACQgDACgDAAQgGAAgFgRgAgIAFIAZgFIgGgbg");
	this.shape_69.setTransform(438.7,130.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgwA5QgDgCAAgDIABgKIAAgJIABgOIAAgNIAAgOIAAgOIgBgOIgBgOQAAgDADgDQADgDADAAQAEAAAGAJQASAbAOASQARAVAVATIAAgJIgBgJQAAgggCgTIgCgHIgBgIQAAgJAHAAQANAAAAAwIAAAXIAAAYIgCAMQgBAIgGAAQgEAAgGgGQgegcglg0IgBARIAAAPIAAATIABASQAAAUgIAAQgEAAgCgDg");
	this.shape_70.setTransform(493.5,107.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgdAzQgNgHAAgKQgBgEADgBQACgCADAAQAEAAACAEQAEAFADACQAGAEAMAAQAKAAAKgFQANgGAAgLQAAgJgLgGQgJgEgMgBQgLAAgJgEQgKgGAAgLQAAgNAPgLQAOgKAOAAQAHAAAJADQAMADAAAFQAAAGgHAAIgKgBIgLgCQgLAAgIAGQgIAFAAAIQAAAHALACIAPACQAQABAKAJQAJAIAAAMQAAASgRAKQgOAJgRAAQgNAAgMgFg");
	this.shape_71.setTransform(473,108);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgkA4QgDgDAAgDIAAgRIgBgRIACgTIABgUIAAgLIgBgLQAAgFACgDQADgEAFABIASABQAKABAFAEQAeAQAAAXQAAALgKAHQgIAHgMAEQAXAMALANQACADAAACQAAAEgDACQgCACgDAAQgDAAgCgCQgYgYgdgJIABAPIAAAOQAAADgCADQgCACgDAAQgDAAgCgCgAgXggIABAJIgBAPIgCANIAEAAIADAAQASAAAJgFQAEgBAEgEQADgEAAgCQAAgLgLgIQgKgJgLgBIgLgBg");
	this.shape_72.setTransform(89.4,123.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgEA2QgDgCAAgDIABgEIAAgDIAAgLIgBgLIgBgcIgCgeIgHABQgQAAgJgDQgGgBAAgGQAAgDACgCQACgDADAAIAMACIAMAAIANAAIANAAIAQABIARABQADAAACACQACACAAADQAAADgCADQgCACgDAAIgRgBIgQgBIgGAAIACAhIACAgIABAIIAAAHQAAAFgCAEQgCAFgEAAQgCAAgCgCg");
	this.shape_73.setTransform(80,123.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgwA5QgDgCAAgDIABgKIAAgJIABgOIAAgNIAAgOIAAgOIgBgOIgBgOQAAgDADgDQADgDADAAQAEAAAGAJQASAbAOASQARAVAVATIAAgJIgBgJQAAgggCgTIgCgHIgBgIQAAgJAHAAQANAAAAAwIAAAXIAAAYIgCAMQgBAIgGAAQgEAAgGgGQgegcglg0IgBARIAAAPIAAATIABASQAAAUgIAAQgEAAgCgDg");
	this.shape_74.setTransform(68.4,123.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgdAzQgNgHAAgKQgBgEADgBQACgCADAAQAEAAACAEQAEAFADACQAGAEAMAAQAKAAAKgFQANgGAAgLQAAgJgLgGQgJgEgMgBQgLAAgJgEQgKgGAAgLQAAgNAPgLQAOgKAOAAQAHAAAJADQAMADAAAFQAAAGgHAAIgKgBIgLgCQgLAAgIAGQgIAFAAAIQAAAHALACIAPACQAQABAKAJQAJAIAAAMQAAASgRAKQgOAJgRAAQgNAAgMgFg");
	this.shape_75.setTransform(118.8,310.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgfA5QgEgDAAgHIABgZQACghAAgoQAAgEACgCQACgCADAAQADAAADACQACACAAAEQAAApgCAhIgBALIgBALQATAAAdgJIACAAQADAAACACQACACAAADQAAAFgFACQgIAEgSADQgPADgKAAQgIAAgDgDg");
	this.shape_76.setTransform(109.6,310.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AAaAmIgFgXIgUAEIgSAEIgNAcQgCAEgEAAQgDAAgCgCQgDgCAAgDQAAgEALgXIgBgFQAAgGAHgBIAVgjQARgcAEAAQAGAAACAIIAFAZIAKAyIAFALIACAIQAAADgCACQgDACgDAAQgGAAgFgRgAgIAFIAZgFIgGgbg");
	this.shape_77.setTransform(99.7,310.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AghA4QgDgDAAgDIAAgVIABgdIACgeIAAgUQABgEACgBQAKgDANAAQALAAAMAIQAOALAAAOQAAATgPAKQALAFAGAGQAFAFAAAHQAAAJgJAIQgHAGgHADQgQAGgZAAQgEAAgCgDgAgWAdIAAAPQATAAAMgFQAFgCAEgEQAFgEAAgCQAAgDgKgFQgHgDgGgCIgHgBIgDAAIgDAAIgIAAIgBAQgAgTgrIAAANIgBAcIALABQAKgBAHgGQAHgGAAgLQAAgHgHgFQgIgGgHAAIgMAAg");
	this.shape_78.setTransform(90,310.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgfA4QgHgGAAgYIAAgKIAAgMIAAgDIABgEIABgfIAAgIIgBgIQAAgJAHAAQADAAACACIARgDIAOgBQASAAAKADQAFACAAAGQAAADgCACQgCADgDAAIgCgBQgNgDgLgBIgMABIgQAEIABAIIgBAcIAfgEIARgBQADAAADACQACACAAADQAAAHgHAAIgRABIghADIgBAKIAAAJQAAAQACAEQACACAKAAIANgBIANAAIAFAAIAEgBQAIAAAAAHQAAAHgHABQgGABgWAAQgXABgGgHg");
	this.shape_79.setTransform(71,310.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgMA1QgJgWgLgpIgGgUQgEgPAAgFQAAgDACgCQACgCADAAQAGAAACAGIACANIAHAZQAHAaAHATIAAgBIATg0IAGgSQAEgLAFgFQADgDADAAQADAAACACQACACAAADQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgFAHgCAHIgGAQIgUA0IgIATQgBAEgEAAQgGAAgCgGg");
	this.shape_80.setTransform(61.7,310.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgkAyQgJgKAAgUQAAgTAJgTQAIgVAOgMQAKgIAJAAQAHAAAKAFQAOAEAAAHQAAADgCADQgDABgDAAIgEgBQgLgHgIAAQgFAAgGAGIgIAKQgRAXAAAZQAAANAFAGQAEAGANAAQAMAAAJgIQAKgJAFgRQgVACgNAGIgEABQgDAAgCgCQgCgDAAgDQAAgEAEgCQAOgIAnAAQADAAADACQABABABADQgBAEgDACQgFAXgPANQgOAOgSAAQgTAAgIgKg");
	this.shape_81.setTransform(143.9,287.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AggA2QgBgCAAgEQAAgCABgCQADgDADAAIAPgCIACgNIgBgNIgBgLQABgQACgaIgKAAIgJAAQgEAAgCgCQgCgCAAgDQAAgHAHAAIAWgBQAOAAAWADQAGABAAAHQAAADgDACQgCACgCAAIgMgBIgMgBIgCAoIAAAMIABANIgBANIAYgBQACAAACACQACADAAADQAAADgCACQgCACgCAAIgNABIgMAAIgOABIgOABQgDAAgDgCg");
	this.shape_82.setTransform(122.6,287.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AAtA3IgEgLIgCgNQgEgMgGgnIgPArIgEAOQgCAJgDAFQgDAFgFAAQgEAAgDgEQgBgDgBgFIgCgIQgIgagGgdIgCANIgKAmIgEAUQgBAGgGAAQgDAAgDgDQgBgCAAgDQgBgMAGgSIAIgdIAEgXQADgQAEgFQADgEAEAAQAFAAACAFQADAHAEAUQAEAYAHAbQAKgbAIgfIACgKQACgHACgEQADgFAFAAQAGAAAEAMIACARQAEAgAHAYIAEAMIADANQgBADgCACQgDACgDAAQgDAAgDgEg");
	this.shape_83.setTransform(112,287.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AAtA3IgEgLIgDgNQgDgMgGgnIgPArIgEAOQgCAJgDAFQgEAFgEAAQgEAAgCgEQgCgDgBgFIgDgIQgHgagGgdIgCANIgKAmIgEAUQgCAGgFAAQgDAAgCgDQgCgCAAgDQgBgMAGgSIAIgdIAEgXQAEgQADgFQADgEAEAAQAFAAACAFQADAHAEAUQADAYAJAbQAKgbAHgfIACgKQABgHADgEQACgFAFAAQAHAAAEAMIACARQAFAgAGAYIADAMIAEANQgBADgCACQgCACgDAAQgEAAgDgEg");
	this.shape_84.setTransform(98.7,287.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AAaAmIgFgXIgUAEIgSAEIgNAcQgCAEgEAAQgDAAgCgCQgDgCAAgDQAAgEALgXIgBgFQAAgGAHgBIAVgjQARgcAEAAQAGAAACAIIAFAZIAKAyIAFALIACAIQAAADgCACQgDACgDAAQgGAAgFgRgAgIAFIAZgFIgGgbg");
	this.shape_85.setTransform(86.4,287.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgkA4QgDgDAAgDIAAgRIgBgRIACgTIABgUIAAgLIgBgLQAAgFACgDQADgEAFABIASABQAKABAFAEQAeAQAAAXQAAALgKAHQgIAHgMAEQAXAMALANQACADAAACQAAAEgDACQgCACgDAAQgDAAgCgCQgYgYgdgJIABAPIAAAOQAAADgCADQgCACgDAAQgDAAgCgCgAgXggIABAJIgBAPIgCANIAEAAIADAAQASAAAJgFQAEgBAEgEQADgEAAgCQAAgLgLgIQgKgJgLgBIgLgBg");
	this.shape_86.setTransform(76.5,287.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AglAyQgIgKgBgUQABgTAIgTQAJgVAPgMQAJgIAJAAQAHAAAKAFQAOAEAAAHQAAADgCADQgCABgDAAIgFgBQgLgHgIAAQgFAAgFAGIgJAKQgRAXAAAZQAAANAEAGQAFAGAMAAQANAAAJgIQALgJADgRQgUACgNAGIgEABQgDAAgCgCQgCgDAAgDQAAgEAEgCQAOgIAoAAQACAAACACQADABAAADQAAAEgFACQgEAXgPANQgOAOgTAAQgRAAgKgKg");
	this.shape_87.setTransform(66.6,287.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AAaAmIgFgXIgUAEIgSAEIgNAcQgCAEgEAAQgDAAgCgCQgDgCAAgDQAAgEALgXIgBgFQAAgGAHgBIAVgjQARgcAEAAQAGAAACAIIAFAZIAKAyIAFALIACAIQAAADgCACQgDACgDAAQgGAAgFgRgAgIAFIAZgFIgGgbg");
	this.shape_88.setTransform(55.8,287.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgfA2QgCgCAAgEQAAgCACgCQACgDADAAIAPgCIABgNIAAgNIgBgLQAAgQACgaIgJAAIgKAAQgDAAgCgCQgCgCAAgDQAAgHAHAAIAWgBQANAAAXADQAGABAAAHQAAADgDACQgBACgDAAIgMgBIgMgBIgBAoIAAAMIAAANIAAANIAWgBQAEAAABACQACADAAADQAAADgCACQgBACgEAAIgMABIgMAAIgOABIgOABQgDAAgCgCg");
	this.shape_89.setTransform(46.4,287.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgWA7QgJgCgEgDIAAAAQgEAAgCgDQgCgCAAgDIABgXIABgXIgBgYIAAgaQAAgDADgDQADgEADAAIAMAFIANAGQAUAHAOAPQASARAAAUQAAANgGALQgGAMgKAHQgMAIgUAAQgFAAgHgCgAgbgUIAAAVIgBAoIACAAQAGAFAKAAQAQAAAHgFQAHgFAFgIQAEgJAAgIQAAgUgXgPQgGgFgbgMg");
	this.shape_90.setTransform(37.1,287.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgkA4QgDgDAAgDIAAgRIgBgRIACgTIABgUIAAgLIgBgLQAAgFACgDQADgEAFABIASABQAKABAFAEQAeAQAAAXQAAALgKAHQgIAHgMAEQAXAMALANQACADAAACQAAAEgDACQgCACgDAAQgDAAgCgCQgYgYgdgJIABAPIAAAOQAAADgCADQgCACgDAAQgDAAgCgCgAgXggIABAJIgBAPIgCANIAEAAIADAAQASAAAJgFQAEgBAEgEQADgEAAgCQAAgLgLgIQgKgJgLgBIgLgBg");
	this.shape_91.setTransform(89.4,123.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgwA5QgDgCAAgDIABgKIAAgJIABgOIAAgNIAAgOIAAgOIgBgOIgBgOQAAgDADgDQADgDADAAQAEAAAGAJQASAbAOASQARAVAVATIAAgJIgBgJQAAgggCgTIgCgHIgBgIQAAgJAHAAQANAAAAAwIAAAXIAAAYIgCAMQgBAIgGAAQgEAAgGgGQgegcglg0IgBARIAAAPIAAATIABASQAAAUgIAAQgEAAgCgDg");
	this.shape_92.setTransform(68.4,123.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgTAiQgJgFAAgHQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAIAEgBQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAIAFAFQADADAJAAQAGAAAGgDQAJgEAAgIQAAgGgHgEQgGgDgIAAQgIAAgEgCQgIgEABgIQAAgIAJgHQAJgHAJAAIALABQAIADAAADQAAAEgEAAIgHgBQgFgBgDAAQgGAAgFAEQgGAEAAAFQAAAEAIACIAJABQALABAGAGQAGAEAAAJQAAALgLAHQgJAGgLAAQgKAAgHgDg");
	this.shape_93.setTransform(255.4,182.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgVAmQgEgFAAgPIAAgHIABgIIgBgDIABgCIABgUIgBgGIAAgFQAAgGAEAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAIALgCIAJgBQALABAIACQADACAAADIgBADQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAAAAAIgCgBQgIgCgIAAIgIABIgKACIABAGIgBASIAUgCIAMgBQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAADgEABIgMABIgVACIAAAHIAAAGQgBAKACACQACACAGgBIAIAAIAJAAIADAAIACgBQAGAAAAAGQAAADgEABQgFABgOAAQgPAAgFgDg");
	this.shape_94.setTransform(249,182.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgIAjQgGgOgHgbIgEgOIgDgNQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAQAEAAABAEIACAJIAFAQIAJAeIAAAAIAMgjIAEgMQADgHADgEIAEgBQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABIgBADIgFAJIgEALIgNAiIgFAMQgBADgDAAQgDAAgCgEg");
	this.shape_95.setTransform(242.7,182.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgVAkQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAAAAAgBIAEgBIALgBIAAgJIAAgIIAAgIIABgbIgHAAIgGAAQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgFAFAAIAOAAQAJAAAPACQAEAAAAAFQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAIgIgBIgIgBIgBAaIAAAIIAAAJIAAAIIAQAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABIgDABIgIAAIgIAAIgJABIgKABQgBAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_96.setTransform(236.5,182.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgCAkQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgCIABgCIgBgHIAAgHIgBgTIgBgUIgFAAQgLAAgGgBQgEgBAAgEQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAIAIABIAIAAIAJAAIAIAAIALABIALAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABIABADIgBAEQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgLAAIgLgBIgEAAIACAWIABAVIAAAFIAAAFIgBAGQgBADgDAAQAAAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAAAg");
	this.shape_97.setTransform(230.7,182.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgVAkQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAAAAAgBIAEgBIALgBIAAgJIAAgIIAAgIIABgbIgHAAIgGAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgFAEAAIAPAAQAJAAAPACQAEAAAAAFQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAIgHgBIgIgBIgBAaIAAAIIAAAJIAAAIIAPAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABIgDABIgIAAIgIAAIgJABIgKABQgBAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_98.setTransform(224.2,182.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AggAmQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAgGIAAgGIABgJIAAgJIAAgJIgBgKIAAgJIgBgJQAAAAAAgBQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAgBQABAAAAAAQABAAABgBQAAAAABAAQACAAAEAGIAVAeQALANAOANIAAgGIAAgGQAAgUgCgNIgBgFIgBgFQAAgGAFAAQAJAAAAAgIgBAPIAAAQIgBAIQAAAFgFAAQgCAAgEgEQgUgTgZgiIAAALIAAAKIAAAMIAAANQAAANgFAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape_99.setTransform(217.6,182.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgUAkQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAAAABgBIADgBIAKgBIABgJIgBgIIAAgIIACgbIgGAAIgHAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgFAEAAIAQAAQAIAAAPACQAEAAAAAFQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAIgHgBIgIgBIgBAaIAAAIIAAAJIAAAIIAOAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQABAAAAABQAAAAgBABQAAABAAAAQAAABAAAAQgBAAAAABIgEABIgIAAIgIAAIgJABIgJABQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAg");
	this.shape_100.setTransform(210.9,182.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgXAnQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIAAgdIAAgcIAAgGIAAgHQABAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQABAAABAAIACABIALgBIAHgBIANACQAKACAAAEIgBADQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgBgBQgHgCgKAAIgGABIgKABIAAAVQAJgCAFAAIAPAAQAEABABAEQAAABgBAAQAAABAAABQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgHgBIgHAAIgOACIgBAiQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBg");
	this.shape_101.setTransform(205.4,182.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AggAmQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAgGIAAgGIABgJIAAgJIAAgJIgBgKIAAgJIgBgJQAAAAAAgBQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAgBQABAAAAAAQABAAABgBQAAAAABAAQACAAAEAGIAVAeQALANAOANIAAgGIAAgGQAAgUgCgNIgBgFIgBgFQAAgGAFAAQAJAAAAAgIgBAPIAAAQIgBAIQAAAFgFAAQgCAAgEgEQgUgTgZgiIAAALIAAAKIAAAMIAAANQAAANgFAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape_102.setTransform(198.2,182.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgUAkQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAAAABgBIADgBIAKgBIABgJIgBgIIAAgIIABgbIgFAAIgHAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgFAEAAIAQAAQAIAAAPACQAEAAAAAFQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAIgIgBIgHgBIgCAaIAAAIIAAAJIAAAIIAPAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQABAAAAABQAAAAgBABQAAABAAAAQAAABAAAAQgBAAAAABIgEABIgIAAIgIAAIgJABIgJABQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAg");
	this.shape_103.setTransform(191.4,182.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgEAFQAAgBAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAABgBQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAgBAAg");
	this.shape_104.setTransform(184.5,185.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AAPAlIgDgBIgIABIgGAAIgGAAIgGABIgBAAIgCAAQgDAAgBgEIgBgGQAAgLAGgHQADgEANgHIAIgHQAEgFAAgGQAAgDgEgCQgDgDgEAAQgDAAgEADIgHAFIgEACQgFAAAAgEQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQAGgGAEgCQAGgEAFAAQAIAAAGAFQAHAFAAAHQAAAGgBADQgCAFgDADQgDADgJAGQgIAFgDADQgFAHAAAIIAKgBIAOgCIAHACQAEABAAADIgBAEQgBAAAAABQAAAAgBAAQAAAAgBAAQAAABgBAAIgDgBg");
	this.shape_105.setTransform(180.1,182.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgXApQgLgFAAgJQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQADAAACAEQADAEACACQAFADAKAAQAIAAAIgEQAKgFAAgJQAAgIgIgEQgIgEgJAAQgKAAgGgDQgJgFAAgJQAAgKAMgJQAMgIALAAQAGAAAHACQAKACAAAEQAAAFgGAAIgIgBIgJgBQgIAAgHAEQgGAFAAAHQAAAEAIACIAMACQAOABAHAHQAHAGAAAKQAAAOgNAJQgLAHgOAAQgLAAgJgEg");
	this.shape_106.setTransform(459.3,323.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgZAuQgGgGAAgTIAAgIIABgKIgBgDIABgCIABgaIAAgGIgBgGQAAgIAGAAQABAAAAAAQABAAABABQAAAAAAAAQABABAAAAIAOgDIALgBQAOAAAJAEQAEABAAAFIgCAEQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgCgBQgKgCgJAAIgKABIgMACIAAAGIgBAXIAZgCIAOgCQABAAAAAAQABAAABABQAAAAABAAQAAABABAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAABQAAAEgGABIgOABIgbACIAAAIIAAAHQAAAOACACQABACAIAAIAKgBIALAAIAEAAIADgBQAHAAAAAHQAAAEgFACQgGABgSAAQgSAAgFgFg");
	this.shape_107.setTransform(451.4,323.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgZAvQgDgDAAgGIABgUQABgbAAggQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAgBQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAABQABAAABAAQAAAAABAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAhgBAbIgBAJIAAAJQAPAAAXgIIACAAQAAAAABAAQAAAAABAAQABAAAAABQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAEgDABQgHADgOADQgNACgIABQgGgBgDgBg");
	this.shape_108.setTransform(444.2,323.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgYAuIgCgEIAAgSIABgYIACgYIAAgIIAAgIQACgGAEABIAGgBIAIAAQAKAAAKAHQAKAJAAALQAAAPgLAIQgKAHgNAAIgHgBIgBAgIgBAEIgEACQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBgBAAAAgAgMgjIAAAMIgCAXIAHAAQAJAAAHgEQAHgGAAgJQAAgHgHgEQgHgFgGAAIgFAAIgDAAg");
	this.shape_109.setTransform(437.6,323.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgZAsQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAIANgCIAAgLIAAgKIgBgKQAAgNACgUIgIAAIgHAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgHAFAAIASgBQALAAASADQAFABAAAFQAAABAAABQAAABAAAAQgBABAAAAQAAABgBAAIgEACIgJgBIgKgCIgBAgIAAALIAAAKIAAAKIASAAQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAABQgBAAAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAIgKABIgKAAIgKAAIgMABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_110.setTransform(431.1,323.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgYAkQgIgJAAgMQAAgTARgVQAOgSANAAIAFAAIAFABQACgDADAAQAEAAABAFIABAMQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAQgCADgDAAQgDAAgCgEIgEgGIgGAAQgIAAgKAOQgPARABAPQgBAIAGAFQAFAGAHAAQAFAAAGgEIAKgGQAEgDACAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAAAABABQAAABAAAAQABABAAAAQAAABAAABQAAACgDACQgPAOgPAAQgMAAgJgKg");
	this.shape_111.setTransform(424.3,323.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgZAsQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAgBABAAQAAAAABgBQAAAAAAAAQABAAABAAQAAAAABAAIANgCIAAgLIAAgKIgBgKQAAgNACgUIgIAAIgHAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgHAFAAIASgBQALAAASADQAFABAAAFQAAABAAABQAAABAAAAQAAABgBAAQAAABgBAAIgEACIgJgBIgKgCIgBAgIAAALIAAAKIAAAKIASAAQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAABQgBAAAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAIgKABIgKAAIgKAAIgMABQgBAAAAAAQgBAAgBAAQAAAAAAAAQgBgBAAAAg");
	this.shape_112.setTransform(417.1,323.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgEAsQAAgBAAAAQgBgBAAAAQAAgBAAgBQgBAAABgBIAAgCIAAgDIAAgJIAAgJIgCgWIgBgYIgGAAQgNAAgHgCQgFgBAAgFQAAgBAAAAQAAgBAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAABAAQAAAAABAAIAJABIAKABIALgBIAKAAIANABIAOABQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABABAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQgBAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgOgBIgNgBIgFAAIACAbIABAaIABAGIAAAGQAAAEgBADQgCAEgDAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAgBAAg");
	this.shape_113.setTransform(410.2,323.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgdAtQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAIgBgOIAAgOIABgQIACgQIgBgJIgBgJQAAgDACgDQACgDAEAAIAPACQAIABAEADQAYAMAAATQAAAJgIAGQgGAFgKADQATAKAIALIACAEQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAgBAAQgTgUgXgHIABAMIAAAMQAAAAgBABQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAAAAAgBgAgSgaIABAIIgBALIgBALIACAAIACAAQAPAAAHgEIAGgEQAEgDAAgCQAAgIgKgIQgHgGgKgBIgIgBg");
	this.shape_114.setTransform(401.8,323.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AAVAfQgCgGgCgNIgQADIgPAEQgDAHgHAPQgCAEgDAAQgBAAAAgBQgBAAgBAAQAAAAgBgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgDAJgUQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAgFAGgBIARgdQAOgWADAAQAFAAABAGIAEAVIAJAoIADAJIACAHQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQgFAAgEgOgAgHAEIAVgEIgFgWg");
	this.shape_115.setTransform(393.3,323.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgYAuIgCgEIAAgSIABgYIACgYIAAgIIAAgIQACgGAEABIAGgBIAIAAQAKAAAKAHQAKAJAAALQAAAPgLAIQgKAHgNAAIgHgBIgBAgIgBAEIgEACQgBAAAAgBQgBAAgBAAQAAAAAAAAQgBgBAAAAgAgMgjIAAAMIgCAXIAHAAQAJAAAHgEQAHgGAAgJQAAgHgHgEQgHgFgGAAIgFAAIgDAAg");
	this.shape_116.setTransform(385.8,323.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgEAsQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBIAAgCIAAgDIAAgJIAAgJIgCgWIgBgYIgGAAQgNAAgHgCQgFgBAAgFQAAgBAAAAQAAgBAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAABAAQAAAAABAAIAKABIAJABIALgBIAKAAIAOABIANABQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABABAAQAAABAAABQAAAAAAABQAAAAAAABQAAABAAAAQgBAAAAABQgBAAAAABQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAIgNgBIgOgBIgEAAIABAbIABAaIABAGIAAAGQAAAEgBADQgCAEgDAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAgBAAg");
	this.shape_117.setTransform(442.5,304.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgXApQgLgFAAgJQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQADAAACAEQADAEACACQAFADAKAAQAIAAAIgEQAKgFAAgJQAAgIgIgEQgIgEgJAAQgKAAgGgDQgJgFAAgJQAAgKAMgJQAMgIALAAQAGAAAHACQAKACAAAEQAAAFgGAAIgIgBIgJgBQgIAAgHAEQgGAFAAAHQAAAEAIACIAMACQAOABAHAHQAHAGAAAKQAAAOgNAJQgLAHgOAAQgLAAgJgEg");
	this.shape_118.setTransform(433.6,305.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AAVAfQgCgGgCgNIgQADIgPAEQgDAHgHAPQgCADgDAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgDAJgUQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgEAGgCIARgcQAOgXADAAQAFAAABAGIAEAUIAJApIADAJIACAHQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgFAAgEgOgAgHAEIAVgEIgFgWg");
	this.shape_119.setTransform(424.8,305.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgYAuIgCgEIAAgRIABgZIACgYIAAgIIAAgIQACgGAEABIAGgBIAIAAQAKAAAKAHQAKAJAAALQAAAPgLAIQgKAHgNAAIgHgBIgBAgIgBAEIgEABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAgAgMgjIAAALIgCAYIAHAAQAJAAAHgEQAHgGAAgJQAAgHgHgEQgHgFgGAAIgFAAIgDAAg");
	this.shape_120.setTransform(417.4,304.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgEAFQgCgCAAgDQAAgCACgCQACgCACAAQADAAACACQACACAAACQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_121.setTransform(409,309.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgdAjIgBgDQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAQACAAACADIAFAEQAEADAGAAQAJAAAIgHQAGgIAAgKQAAgJgDgFQgDgHgJAAQgEAAgFACQgDACgDADIgGAGQgDACgDAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIABgKIADgYIgBgFIgCgDQAAgEAGAAIAEAAIAEAAIAKAAIAJAAIAFAAIAFAAIAEgBIACAAQABAAABABQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAHgPgBIgEAAIgEAAIgJAAIgKABIgCAUQAIgHAMAAQAOAAAGAKQAHAJgBANQAAAPgJALQgJALgQAAQgQAAgJgNg");
	this.shape_122.setTransform(403.8,305);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgWAoQgLgFAAgJQAAAAAAgBQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQADAAACADIAGAGQAFADAJAAQAIAAAIgEQAKgFAAgJQAAgHgJgEQgHgEgJAAQgJAAgHgDQgIgFAAgJQAAgKAMgIQALgIALAAIANABQAJADAAAEQAAAFgFAAIgIgBQgGgCgDABQgIAAgHAEQgGAEAAAHQAAAFAIACIAMABQANABAIAHQAGAGAAAKQAAAOgMAIQgLAHgOAAQgLAAgIgEg");
	this.shape_123.setTransform(378.9,159.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgRAvQgHgCgDgCIgBAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQAAgBgBAAQAAgBgBAAQAAAAAAgBQAAAAgBgBQAAgBAAAAIABgTIAAgSIAAgTIAAgVQAAgCACgDQADgCACAAIAKAEIAKAFQAPAFAMAMQAOAOAAAPQAAAKgFAJQgFAJgIAGQgJAGgQAAIgJgBgAgVgPIAAAPIgBAgIABABQAGADAHAAQANAAAGgEQAFgEAEgGQADgHAAgHQAAgPgSgMQgFgEgVgJg");
	this.shape_124.setTransform(370.6,159.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgmAtQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIABgHIAAgIIAAgKIABgLIgBgLIAAgLIAAgLIgCgLQAAgDADgCQACgCADAAQADAAAFAGQAOAWALAOQAOAQAQAQIAAgHIAAgIQAAgYgCgPIgCgGIgBgHQAAgGAHAAQAJAAABAlIgBATIAAATIgBAJQgBAGgFAAQgEAAgEgEQgXgXgegpIAAANIAAANIAAAOIAAAPQAAAPgGAAQgDAAgCgCg");
	this.shape_125.setTransform(361.4,159.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgZAjQgHgJgCgRQgBgGAAgWIABgNIABgHQABgFAEAAQAFAAAAAKIAAAiQAAAjAYAAQAXAAAAg7IAAgFIAAgFQAAgEABgDQACgDADAAQAGAAAAAIIAAAIIAAAHQAABCgjAAQgRAAgJgKg");
	this.shape_126.setTransform(352.3,159.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgdAsQAAAAgBgBQAAgBAAAAQgBgBAAAAQAAgBAAAAIAAgOIAAgOIABgOIABgQIgBgJIAAgJQAAgDACgDQACgDAEABIAOABQAIABAEADQAYAMAAASQAAAJgIAGQgHAFgJADQASAKAJAKIABAEQAAABAAAAQAAABAAAAQgBABAAABQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgTgTgXgHIABALIAAAMQAAAAAAABQAAAAAAABQAAAAgBABQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAgAgSgZIABAHIgBAMIgBAKIACAAIADAAQAOAAAHgEIAGgDQADgEAAgCQAAgIgJgHQgIgGgJgBIgIgBg");
	this.shape_127.setTransform(344.2,159.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgZAtQgFgFAAgUIAAgIIABgJIgBgDIABgCIABgZIAAgHIgBgGQAAgHAGABQAAAAABAAQABAAAAAAQABAAAAAAQAAABABAAIANgDIALgBQAOABAIADQAEABAAAEQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgCAAQgKgDgJAAIgKABIgMADIABAGIgBAWIAYgDIAOAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQAAAAAAABQAAABAAABQAAADgFABIgOABIgaADIAAAIIAAAGQAAANABADQACACAHgBIAKAAIALAAIAEgBIADAAQAGAAAAAHQAAAEgFABQgFABgRAAQgSAAgGgEg");
	this.shape_128.setTransform(336.8,159.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgdAoQgHgIAAgQQAAgPAHgPQAHgQALgKQAIgHAHAAQAFAAAJAEQALAEAAAFQAAABgBAAQAAABAAABQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgEgBQgJgGgGAAQgEAAgEAFIgHAIQgNASAAAUQAAALADAEQAEAFAKAAQAJAAAIgHQAIgHADgNQgQABgKAGIgDAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAAAgBIgCgEQAAgDADgCQAMgHAfAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAABQABAAAAAAQAAAAABABQAAAAAAABQAAABAAAAQAAAEgDACQgDARgMALQgMALgOAAQgPAAgHgIg");
	this.shape_129.setTransform(329,159.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgEAFQgCgCAAgDQAAgCACgCQACgCACAAQADAAACACQACACAAACQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_130.setTransform(319.8,163.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgPAqQgIgEgDgIIAAgCQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABgBQAAAAAAAAQABAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABABIACAEQACADAEABQADABAFAAQAGAAAEgDQAGgEAAgGQAAgJgHgGQgGgEgIgBQgGgBAAgEQAAgDAFgCIAMgDQAEgCADgCQACgCAAgEQAAgFgEgDQgFgEgGABQgEAAgEACIgGADIgEACQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBIgBgEQAAgEAJgFQAHgEAFAAQAMAAAHAGQAIAGAAALQAAANgLAFIgCAAQAIADADAFQAEAGAAAJQAAAKgIAJQgIAHgLABQgIAAgHgEg");
	this.shape_131.setTransform(314.6,159.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgWAoQgKgFgBgJQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQACAAADADQADAEACACQAFADAJAAQAIAAAIgEQAJgFAAgJQAAgHgIgEQgHgDgJgBQgJAAgHgDQgHgEAAgJQgBgKAMgIQALgIALAAQAFAAAIACQAIACABAEQAAAFgGAAIgIgBIgJgCQgHABgGAEQgHAEAAAGQAAAFAJACIAKACQANAAAIAIQAHAFAAAKQAAANgNAIQgKAHgOAAQgKAAgJgDg");
	this.shape_132.setTransform(323.1,358.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgYAsQgGgFABgTIAAgHIAAgJIAAgEIABgCIABgZIgBgGIAAgFQAAgIAFABIAFABIAMgCIALgBQAOgBAIAEQADABAAAFIgBADQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgBAAQgLgCgIgBIgKABIgMADIABAFIgBAXIAYgDIANgBQABAAABAAQAAAAABAAQAAABABAAQAAAAABAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQABAEgGAAIgNACIgaACIAAAIIAAAGQAAANABACQACACAHAAIAKAAIALgBIAEAAIACAAQAHAAAAAGQgBAFgEAAQgGACgQAAQgSAAgFgFg");
	this.shape_133.setTransform(315.5,357.9);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgYAtQgDgDAAgGIABgTQACgZgBggQAAAAABgBQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAABAAAAQAAAggBAaIgBAIIAAAJQAPAAAVgHIACAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAADgDACQgHADgOACQgLADgJAAQgFAAgDgCg");
	this.shape_134.setTransform(308.7,358.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgYAsIgBgEIAAgRIABgXIABgXIAAgIIABgIQACgFAEAAIAFAAIAIgBQAKAAAJAIQAKAHAAAMQAAANgLAIQgKAHgMAAIgHAAIgBAeIgBAEQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAgAgMghIAAAKIgBAXIAGAAQAIAAAHgEQAIgFAAgJQgBgHgGgEQgHgFgGAAIgEAAIgEABg");
	this.shape_135.setTransform(302.4,357.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgZAqQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAgBAAgBIABgDIAFgCIAMgCIAAgKIAAgJIAAgKQAAgMABgUIgHAAIgIAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgGAFAAIARgBQALABARACQAFABAAAFQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAIgEACIgJgBIgKgCIgBAgIAAAJIABAKIgBAJIASAAQABAAABABQAAAAABAAQAAAAABAAQAAABABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIgJAAIgKAAIgKACIgLABIgFgCg");
	this.shape_136.setTransform(296.1,358.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgXAjQgIgJAAgMQAAgSARgUQANgRANAAIAFAAIAEABQACgDADAAQAEAAABAFIABAMIgBAEQgBAAAAABQgBAAAAAAQgBAAgBABQAAAAgBAAQgEAAgBgEQgCgEgBgBQgBgBgFAAQgIAAgKANQgNARAAAOQAAAIAEAFQAFAFAHAAQAFAAAGgDIAKgGQADgDACAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAIACAEQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgPANgPAAQgMAAgIgJg");
	this.shape_137.setTransform(289.4,357.9);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgZAqQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAgBAAgBIABgDIAFgCIAMgCIAAgKIAAgJIgBgKQAAgMACgUIgHAAIgHAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgGAFAAIARgBQALABARACQAFABAAAFQAAABAAAAQAAABAAAAQgBABAAAAQgBABAAAAIgEACIgJgBIgKgCIgBAgIAAAJIABAKIgBAJIASAAQABAAABABQAAAAABAAQAAAAABAAQAAABABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIgJAAIgKAAIgKACIgLABIgFgCg");
	this.shape_138.setTransform(282.7,358.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgDAqQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgDIAAgCIAAgIIAAgJIgBgWIgCgXIgFAAQgMAAgIgBQgFgCAAgFIACgDQAAgBABAAQABgBAAAAQABAAAAAAQABgBAAAAIAKABIAJACIAKAAIAJgBIAOABIAMABQABAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIgMAAIgOgBIgDAAIABAaIABAYIABAGIAAAGIgBAHQgCADgDABQAAgBAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_139.setTransform(276,357.9);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgcArQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIAAgOIgBgNIACgPIABgPIgBgJIAAgIQAAgEABgCQADgDADAAIAOABQAIABAEADQAXAMAAASQAAAJgHAFQgHAGgJADQARAJAJALQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABQgBAAAAABQAAAAAAABQgBAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgEgBQgTgTgWgHIAAAMIABALQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAIgEgCgAgRgZIAAAHIgBAMIgBAKIADAAIACAAQAOAAAHgEIAGgEQADgDAAgCQAAgIgJgHQgHgGgJgBIgJgBg");
	this.shape_140.setTransform(267.9,357.9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AAUAeIgEgSIgPACIgOAEIgKAVQgCAEgDAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgDAJgSIgBgDQAAgFAFgBQAHgMAKgPQAMgWAEAAQAEAAACAGIADATIAJAnIADAJIACAGQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAQgFAAgEgNgAgGAEIATgEIgEgVg");
	this.shape_141.setTransform(259.8,358.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgYAsIgBgEIAAgRIABgXIABgXIAAgIIABgIQABgFAFAAIAFAAIAIgBQAKAAAIAIQALAHAAAMQAAANgLAIQgKAHgMAAIgHAAIAAAeIgCAEQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAgAgMghIAAAKIgBAXIAGAAQAJAAAGgEQAIgFgBgJQAAgHgGgEQgHgFgGAAIgEAAIgEABg");
	this.shape_142.setTransform(252.7,357.8);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgcAnQgHgIAAgQQAAgOAHgPQAHgQALgJQAHgHAHAAQAFAAAJAEQAKAEAAAFQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAgBABQAAAAAAAAQgBABgBAAQAAAAgBAAIgDgCQgJgFgGAAQgEAAgEAEIgHAJQgNARAAATQAAALAEAEQADAFAKAAQAJAAAHgGQAIgHAEgNQgQABgLAFIgCABQgBAAAAAAQgBgBgBAAQAAAAAAAAQgBgBAAAAQgBgBAAAAQAAgBAAAAQgBAAAAgBQAAgBAAAAQAAgDADgCQAMgHAeAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAEgDABQgDASgMAKQgLALgOAAQgOAAgHgIg");
	this.shape_143.setTransform(242.2,357.9);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgmAsIgBgDIAAgIIABgHIAAgLIAAgKIAAgKIAAgMIgBgLIgBgKQABgDACgCQACgCADgBQADABAFAGQAOAWAKAOQAOAPAQAPIAAgHIAAgHQAAgYgCgPIgCgFIgCgHQAAgGAHgBQAKABgBAkIAAASIAAAUIAAAJQgBAFgGAAQgDAAgEgEQgXgWgegoIAAANIAAAMIAAAOIAAAOQAAAPgFAAQgDAAgDgCg");
	this.shape_144.setTransform(233.6,358);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgYAqQgBAAAAgBQAAgBgBAAQAAgBAAAAQAAgBAAgBIACgDIADgCIANgCIABgKIgBgJIAAgKQAAgMACgUIgIAAIgIAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgGAFAAIARgBQAKABASACQAFABAAAFQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAIgEACIgJgBIgKgCIgBAgIAAAJIABAKIgBAJIASAAQABAAABABQAAAAABAAQAAAAABAAQAAABAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIgJAAIgKAAIgKACIgMABIgDgCg");
	this.shape_145.setTransform(225.7,358.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgYAtQgDgDAAgGIABgTQABgZAAggQAAAAABgBQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQAAABABAAQAAAAAAABQAAAAAAABQABABAAAAQAAAggCAaIgBAIIAAAJQAPAAAWgHIACAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAADgEACQgGADgOACQgMADgIAAQgGAAgCgCg");
	this.shape_146.setTransform(219.4,358.1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgcAnQgHgIAAgQQAAgOAHgPQAHgQALgJQAHgHAHAAQAFAAAJAEQAKAEAAAFQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAgBABQAAAAAAAAQgBABgBAAQAAAAgBAAIgDgCQgJgFgGAAQgEAAgEAEIgHAJQgNARAAATQAAALAEAEQADAFAKAAQAJAAAHgGQAIgHAEgNQgQABgLAFIgCABQgBAAAAAAQgBgBgBAAQAAAAAAAAQgBgBAAAAQgBgBAAAAQAAgBAAAAQgBAAAAgBQAAgBAAAAQAAgDADgCQAMgHAeAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAEgDABQgDASgMAKQgLALgOAAQgOAAgHgIg");
	this.shape_147.setTransform(212.1,357.9);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgmAsIgBgDIAAgIIABgHIAAgLIAAgKIAAgKIAAgMIgBgLIgBgKQABgDACgCQACgCADgBQADABAFAGQANAWALAOQAOAPAQAPIAAgHIAAgHQAAgYgCgPIgCgFIgCgHQABgGAGgBQAKABgBAkIAAASIAAAUIgBAJQAAAFgGAAQgDAAgEgEQgYgWgcgoIAAANIgBAMIABAOIAAAOQgBAPgFAAQgEAAgCgCg");
	this.shape_148.setTransform(203.5,358);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AAUAeIgEgSIgPACIgOAEIgKAVQgCAEgDAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgDAJgSIgBgDQAAgFAFgBQAHgMAKgPQAMgWAEAAQAEAAACAGIADATIAJAnIADAJIACAGQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAQgFAAgEgNgAgGAEIATgEIgEgVg");
	this.shape_149.setTransform(194.5,358.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgRAuQgGgCgEgCIAAAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgSIABgSIAAgSIgBgVQABgCACgCQACgDACAAIAKADIAKAGQAPAFALALQAOAOAAAPQAAAKgFAJQgEAIgIAGQgJAGgQAAIgJgBgAgUgPIAAAQIgCAeIACABQAFAEAHAAQANAAAFgFQAGgDADgHQADgGAAgGQAAgPgRgMQgFgEgVgKg");
	this.shape_150.setTransform(186.3,358.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgEAFQgCgCAAgDQAAAAAAAAQAAgBAAgBQABAAAAgBQAAAAABgBQACgCACAAQADAAACACQACACAAACQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_151.setTransform(176.9,362);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgWAjQgFgIAAgPQAAgcAWgUIAFgGQAEgDACAAIAEABQAAABAAAAQABABAAAAQAAAAAAABQAAABAAAAQABACgGAGIgLALQgFAFgDAJIAJgDIAFgBQANAAAHAHQAHAGAAANQAAAOgHAIQgIAJgNAAQgPAAgHgLgAgJABIgHAFIAAAGQAAAKADAGQAEAIAJAAQAIAAAFgGQAEgFAAgKQAAgIgEgDQgFgEgIAAQgFAAgEABg");
	this.shape_152.setTransform(171.8,358);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgVAlQgJgFgBgHQAAgBABgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAQADAAABADQADAEACABQAFADAIAAQAHABAIgEQAJgFAAgHQAAgIgIgDQgGgDgIgBQgJAAgGgCQgHgFgBgIQAAgJALgIQALgIAKAAQAFABAGACQAJACAAADQgBAFgEAAIgHgBIgJgBQgHAAgGAEQgGAEAAAFQAAAFAIACIALABQALABAIAHQAFAFAAAJQAAANgLAHQgKAHgNgBQgJAAgJgDg");
	this.shape_153.setTransform(507.5,182.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgWApQgFgFgBgRIAAgIIABgIIgBgDIABgCIACgXIgBgFIgBgGQABgHAEAAQABAAABAAQAAAAABABQAAAAABAAQAAAAAAABIANgDIAJAAQANAAAIADQAEABAAAEQAAAAgBABQAAAAAAABQAAAAAAAAQgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgBAAQgKgDgIAAIgIABIgLADIAAAFIgBAVIAWgDIANgBQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAABQAAAAAAABQAAAEgEAAIgNABIgXACIgBAIIAAAGQAAAMACACQABABAHAAIAJAAIAKAAIADgBIADAAQAGAAAAAGQAAAEgEABQgGABgQAAQgQAAgEgEg");
	this.shape_154.setTransform(500.4,182);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgWAqQgDgCAAgGIABgSQABgYAAgdIACgEQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAIACAEQAAAegCAYIgBAIIAAAHQAOABAUgHIACAAQAAAAABAAQAAAAABAAQABABAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAEgDACQgGACgNACQgLADgIAAQgFAAgCgCg");
	this.shape_155.setTransform(494,182.1);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgWApIgBgEIAAgQIABgVIABgVIAAgHIABgIQABgFAEAAIAEAAIAIgBQAJAAAJAHQAJAHAAALQAAANgKAHQgJAHgLAAIgHgBIAAAcQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgBABgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBgBAAAAgAgMgVIAAAVIAGAAQAHAAAGgEQAHgFAAgIQAAgGgGgEQgGgEgGgBIgEABIgDAAg");
	this.shape_156.setTransform(488.2,181.9);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgXAnQAAAAAAgBQgBAAAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAAAABgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQABAAAAAAIAMgBIAAgKIAAgJIgBgJIACgeIgHABIgHAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAgBAAgBQAAAAAAgBQAAgFAFAAIAQgBQAJAAAQADQAFAAAAAFQAAABAAAAQAAABAAABQAAAAgBAAQAAABgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAIgJgBIgJgBIgBAcIAAAJIABAKIgBAJIARAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgJABIgJAAIgJABIgLABQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAAAgBgBg");
	this.shape_157.setTransform(482.3,182.1);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgVAhQgIgJABgLQgBgRAPgTQANgPALAAIAGAAIADABQACgDADAAQADAAABAFIABAKIgBAEQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgDAAgCgEQgBgDgCgBQgBgBgFAAQgHAAgJAMQgMAQAAANQAAAHAEAFQAFAFAGAAQAFAAAFgDIAKgGIAEgCQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgOAMgOAAQgLAAgHgIg");
	this.shape_158.setTransform(476.2,182);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgXAnQAAAAAAgBQgBAAAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAAAABgBQAAAAAAgBQABAAAAAAQAAgBABAAQABAAAAAAQABAAAAAAIAMgBIAAgKIAAgJIgBgJIACgeIgHABIgHAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAgBAAgBQAAAAAAgBQAAgFAFAAIAQgBQAJAAAQADQAFAAAAAFQAAABAAAAQAAABAAABQAAAAgBAAQAAABgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAIgJgBIgJgBIgBAcIAAAJIABAKIgBAJIARAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgJABIgJAAIgJABIgLABQAAAAgBAAQAAAAgBgBQgBAAAAAAQAAAAgBgBg");
	this.shape_159.setTransform(469.8,182.1);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgDAnQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAgCIAAgCIAAgIIgBgIIgBgVIgBgVIgFAAQgMAAgGgBQgFgCAAgEQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAgBAAAAQABAAABAAQAAAAABAAIAIABIAJAAIAKAAIAIAAIAMABIANAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAIgNgBIgMAAIgDAAIABAYIABAWIABAGIAAAGIgBAGQgCAEgDAAIgDgCg");
	this.shape_160.setTransform(463.5,182);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgaAoIgBgEIgBgMIgBgNIACgNIABgPIAAgIIgBgIQAAgDACgCQACgDADAAIANABQAHABAEADQAVALABARQgBAIgGAFQgHAFgJADQARAIAJAKIAAAEQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgDgBQgSgSgUgGIAAALIAAAKIgBAEQgBABAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBgAgQgXIABAGIgBALIgBAJIACABIACAAQANAAAGgEIAGgDQADgDAAgCQAAgIgJgGQgGgGgIgBIgIAAg");
	this.shape_161.setTransform(456.1,182);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AATAcIgEgRIgOACIgOAEIgJAUQgBACgDAAIgEgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAAAQABgDAHgRIgBgDQABgFAFAAIAPgaQAMgUACAAQAFAAACAGIADARIAIAkIACAJIACAGQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgFAAgDgMgAgGAEIASgEIgEgTg");
	this.shape_162.setTransform(448.5,182.1);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AgWApIgBgEIAAgQIABgVIABgVIAAgHIABgIQABgFAEAAIAFAAIAIgBQAIAAAJAHQAJAHAAALQAAANgKAHQgJAHgMAAIgGgBIgBAcQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBgBAAAAgAgLgVIgCAVIAGAAQAIAAAHgEQAGgFAAgIQAAgGgGgEQgGgEgGgBIgEABIgDAAg");
	this.shape_163.setTransform(441.9,181.9);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgDAnQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAgDIAAgCIAAgIIgBgIIgBgUIgBgVIgFAAQgMAAgGgCQgFgBAAgEQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAgBAAAAQABAAABAAQAAgBABAAIAIABIAJABIAKAAIAIAAIAMAAIANABQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAIgNAAIgMgBIgDAAIABAXIABAYIABAFIAAAFIgBAHQgCAEgDgBIgDgBg");
	this.shape_164.setTransform(502.9,165.4);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AgjAqIgBgEIAAgHIAAgHIABgKIAAgKIAAgJIAAgLIgBgKIgBgKQAAAAAAgBQABgBAAAAQAAgBAAAAQABgBAAAAQACgCADAAQADAAAEAGQANAUAKANQAMAPAPAOIAAgHIAAgHQAAgWgBgOIgCgFIgBgGQAAgGAGAAQAJAAAAAiIAAARIAAARIgBAJQgBAFgFAAQgDAAgEgEQgWgUgbglIAAAMIAAALIAAANIAAANQAAAOgFAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_165.setTransform(494.5,165.4);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgXApQgEgFAAgRIAAgIIAAgIIAAgDIAAgCIABgXIAAgFIgBgGQAAgHAGAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAABABIALgDIAKAAQANAAAIADQAEABgBAEQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgCAAQgIgDgJAAIgJABIgLADIABAFIgBAVIAXgDIAMgBQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQABAAAAABQAAAEgGAAIgMABIgYACIAAAIIAAAGQAAAMABACQACABAHAAIAJAAIAKAAIADgBIADAAQAGAAAAAGQAAAEgFABQgEABgQAAQgRAAgFgEg");
	this.shape_166.setTransform(487,165.4);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgUAlQgKgFgBgIQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQACAAADADQACAEACACQAFADAJAAQAGgBAIgDQAJgEAAgJQAAgGgIgEQgGgEgIAAQgJAAgGgDQgIgEAAgHQAAgKALgIQALgHAKAAQAEgBAHACQAIACAAAEQAAAFgEAAIgHgBIgJgCQgHABgGAEQgGAEAAAGQAAAEAIACIALABQAMABAHAHQAFAFAAAJQAAAMgLAIQgKAGgMAAQgLAAgHgDg");
	this.shape_167.setTransform(479.7,165.6);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgXApQgEgFgBgRIAAgIIABgIIgBgDIACgCIABgXIgBgFIAAgGQAAgHAEAAQABAAABAAQAAAAABABQAAAAABAAQAAAAABABIAMgDIAJAAQANAAAIADQADABABAEQAAAAgBABQAAAAAAABQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgCAAQgJgDgIAAIgJABIgKADIAAAFIgBAVIAWgDIANgBQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAEgEAAIgNABIgXACIgBAIIAAAGQAAAMACACQABABAHAAIAJAAIAKAAIADgBIADAAQAGAAAAAGQAAAEgEABQgFABgRAAQgQAAgFgEg");
	this.shape_168.setTransform(472.6,165.4);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AgaAoIgBgEIgBgMIAAgNIABgNIABgPIAAgIIgBgIQAAgDABgCQADgDADAAIANABQAHABAEADQAVALABARQAAAIgIAFQgFAFgKADQARAIAIAKIABAEQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAIgFgBQgRgSgUgGIAAALIAAAKIgBAEQgBABAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBgAgQgXIAAAGIAAALIgBAJIACABIACAAQANAAAHgEIAFgDQADgDAAgCQAAgIgIgGQgHgGgIgBIgJAAg");
	this.shape_169.setTransform(465.7,165.4);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AgWApIgBgEIAAgQIABgVIABgWIAAgHIAAgIQACgEAEAAIAEAAIAIAAQAJAAAIAGQAKAIAAAKQAAANgKAHQgJAHgLAAIgHgBIAAAcQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAgAgMgVIAAAVIAGAAQAHAAAGgEQAHgFAAgIQAAgGgGgFQgGgEgGAAIgEABIgDAAg");
	this.shape_170.setTransform(459.5,165.3);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AgEAEQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgCACgCQABAAAAgBQABAAAAAAQABAAABAAQAAAAAAAAQADgBACACQACACAAACQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgCACgDAAQAAAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_171.setTransform(452,169.2);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AAIAiIAAgCIAAgDIAAgMIgWAAIgKgBQgFgBAAgDQAAgCADgEIAEgFIAZglQAEgFAFAAQAGAAAAAFIAAArIADAAQAJAAAAAFQAAAEgEABIgIABIAAATQAAAFgEAAQgGAAAAgIgAgNAHIAVAAIAAghIgVAhg");
	this.shape_172.setTransform(447.2,165.3);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AgfApQgGgIgBgQQABgQAGgQQAIgQALgLQAJgHAHAAQAFABAKADQALAEAAAGQgBABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIgDgCQgKgFgGAAQgEAAgFAEIgHAJQgOATABAVQgBALAEAEQAEAGAKAAQAKAAAIgIQAIgHADgNQgQABgLAFIgDABQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAgBgBQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgEADgCQAMgHAgAAQABAAABAAQAAAAABABQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAABQAAABAAAAQAAAEgDACQgDATgMALQgNALgPgBQgPABgIgJg");
	this.shape_173.setTransform(147.4,328.3);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AgoAvQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAgBIABgHIAAgIIAAgLIAAgLIAAgLIAAgMIgBgMIAAgLQAAgDADgCQACgCACAAQAEAAAEAHQAPAWAMAPQAOARARAQIAAgIIAAgHQAAgagCgQIgCgGIgBgGQAAgHAHAAQAKAAAAAnIAAATIAAAUIgBAKQgBAGgGAAQgDAAgFgFQgYgXgfgrIAAAOIAAANIAAAPIAAAPQAAAQgHAAQgDAAgCgCg");
	this.shape_174.setTransform(138.2,328.4);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AgaAtQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAIANgBIAAgLIAAgLIgBgKQAAgNACgVIgIABIgIAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgGAGgBIASAAQALAAASADQAGAAAAAGQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABIgEABIgKgBIgKgBIgBAgIAAALIAAAKIAAALIATgBQAAAAABAAQABAAAAABQABAAAAAAQABABAAAAQABABAAAAQAAABAAAAQABABAAABQAAAAAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAIgKAAIgKAAIgLABIgMABQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_175.setTransform(129.8,328.4);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AAlAtQgCgDgBgGIgCgLIgIgpIgMAjIgEAMIgEALQgDAEgDAAQgEAAgCgEIgCgGIgCgHQgGgVgFgXIgCAKIgIAfIgDARQgCAFgEAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAgKAEgPIAHgXIADgTQADgNADgFQACgDAEAAQAEAAACAEQACAGADAQQADAUAHAWQAIgWAGgZIACgJIADgIQACgFAEAAQAGAAACAKIADAOQADAbAGATIADAKIACALQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBABgBAAQAAAAgBAAQgDAAgCgEg");
	this.shape_176.setTransform(121,328.4);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AAlAtQgCgDgBgGIgCgLIgIgpIgMAjIgEAMIgEALQgDAEgDAAQgEAAgCgEIgCgGIgCgHQgGgVgFgXIgCAKIgIAfIgDARQgCAFgEAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAgKAEgPIAHgXIADgTQADgNADgFQACgDAEAAQAEAAACAEQACAGADAQQADAUAHAWQAIgWAGgZIACgJIADgIQACgFAEAAQAGAAACAKIADAOQADAbAGATIADAKIACALQAAAAAAABQgBABAAAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBABgBAAQAAAAgBAAQgDAAgCgEg");
	this.shape_177.setTransform(110.1,328.4);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AAVAfIgEgTIgQADIgPAEIgKAXQgCADgEAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgDAJgTIgBgEQAAgFAGgBIASgdQANgXADAAQAFAAACAHIAEAUIAJApIADAKIACAGQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQgGAAgEgPgAgHAEIAVgEIgFgXg");
	this.shape_178.setTransform(100,328.4);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AgeAuQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAgBIAAgOIgBgOIACgQIABgQIgBgKIAAgJQAAgDACgCQACgDAEgBIAPACQAIABAEADQAZANAAATQAAAJgIAGQgHAFgKADQATAKAJAMQAAAAABABQAAAAAAABQAAAAAAABQABAAAAABQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAABQAAAAgBAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgVgTgXgHIABALIAAAMQAAABgBABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABQgBAAAAAAQgBAAAAAAQgBAAgBABQAAgBgBAAQAAAAgBAAQAAAAgBAAQgBgBAAAAgAgSgaIAAAHIAAAMIgCALIADAAIACAAQAPABAIgFQADgBADgDQADgDAAgCQAAgJgJgHQgJgGgJgCIgJAAg");
	this.shape_179.setTransform(91.8,328.3);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AgeApQgIgIAAgQQAAgQAIgQQAHgQALgLQAJgHAHAAQAGABAIADQAMAEAAAGQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQgBAAAAABQgBAAAAAAQgBAAgBAAIgDgCQgJgFgHAAQgEAAgEAEIgIAJQgOATAAAVQAAALAEAEQAEAGAKAAQAKAAAIgIQAIgHAEgNQgRABgLAFIgDABQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgEADgCQANgHAfAAQABAAABAAQAAAAABABQAAAAABAAQAAAAAAABQABAAAAAAQABAAAAABQAAAAAAABQABABAAAAQAAAEgEACQgEATgLALQgMALgQgBQgPABgHgJg");
	this.shape_180.setTransform(83.6,328.3);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AAVAfIgEgTIgQADIgPAEIgKAXQgCADgEAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgDAJgTIgBgEQAAgFAGgBIASgdQANgXADAAQAFAAACAHIAEAUIAJApIADAKIACAGQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQgGAAgEgPgAgHAEIAVgEIgFgXg");
	this.shape_181.setTransform(74.7,328.4);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AgaAtQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAIANgBIAAgLIAAgLIgBgKQAAgNACgVIgIABIgIAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgGAGgBIASAAQALAAASADQAGAAAAAGQAAABAAAAQgBABAAABQAAAAAAABQgBAAAAABIgEABIgKgBIgKgBIgBAgIAAALIAAAKIAAALIATgBQAAAAABAAQABAAAAABQABAAAAAAQABABAAAAQABABAAAAQAAABAAAAQABABAAABQAAAAAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAIgKAAIgKAAIgLABIgMABQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_182.setTransform(66.9,328.4);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AgSAxQgHgCgDgDIgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgTIABgTIAAgUIgBgVQAAgDADgDQACgCADAAIAKAEIAKAFQARAGAMAMQAOAOAAAQQAAALgEAKQgGAJgIAFQgKAHgQAAIgKgBgAgWgQIABAQIgBAhIABABQAFAEAIAAQANAAAGgFQAGgDAEgHQADgHAAgHQAAgQgSgNIgcgNg");
	this.shape_183.setTransform(59.2,328.4);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AgVApQgIgIAAgOQAAgQAJgJQAIgJANAAQAHAAAEACIAFAEIACgiQABgGAFAAQAFAAAAAGIgCAlIgBARQAAAUACALIAAABQAAAAAAABQAAAAAAABQAAABgBAAQAAAAgBABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgDAAgCgGQgEADgFACQgFACgEAAQgMAAgJgJgAgNABQgFAGAAAMQAAAIAFAFQAGAGAHAAQAEAAAEgCIAGgFIACgCIAAgKIAAgHIAAgHQgCgFgEgCQgEgCgFAAQgJAAgFAFg");
	this.shape_184.setTransform(47.2,328.1);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AAPAdIgCgNIgBgNIAAgFIABgGQAAgNgFAAQgHAAgFAIQgGAIgDAKIAAAGIgBAGIABAFIAAAGQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAgBAAAAIAAgGIgBgFIABgRIABgRIAAgGIAAgFQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAQABAAABAAQAAAAABAAQAFAAABAIIAAAHQAKgOAKAAQAJAAAEAJQADAFAAALIAAAHIAAAEIABANIACANQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBABAAAAQgBABAAAAQAAAAgBAAQgBAAAAAAQgGAAAAgGg");
	this.shape_185.setTransform(40.5,329.7);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AATAfIgDgFIgLAFQgEACgCAAQgOAAgHgIQgGgIAAgPQAAgOAKgKQAKgKANAAQAGgBAGADQAIAEAAAFIgBACIgBAHIAAANIABAMIADAKIACAEIAAABQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAIgFgCgAgJgOQgHAIAAAJQAAAKAEAEQADAFAHAAQAFAAAEgCIAGgFIgCgWIAAgGIACgHIgFgBIgCgBQgIAAgHAIg");
	this.shape_186.setTransform(33.9,329.9);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AgYAqQgLgGAAgJQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAQADAAACAEIAGAHQAFADAKAAQAIAAAIgFQALgEgBgKQABgIgJgEQgIgDgJgBQgKAAgGgDQgJgFAAgJQAAgLAMgJQAMgIAMAAQAFAAAHACQAKADAAAEQABAFgGAAIgIgCQgHgBgDAAQgIABgHAEQgGAFgBAGQAAAFAJADIAMABQAOABAIAIQAHAFAAALQAAAOgOAIQgLAIgOAAQgLAAgKgEg");
	this.shape_187.setTransform(131.7,309.7);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AgaAvQgDgCAAgHIABgUQACgaAAgiQAAgBAAAAQAAgBAAgBQABAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQABABAAABQAAAAAAABQAAAigBAbIgCAJIAAAJQAQAAAXgHIACgBQABAAAAAAQABABAAAAQABAAAAAAQABABABAAQAAABAAAAQAAABABAAQAAABAAABQAAAAAAABQAAADgEACQgHADgOADQgNACgJAAQgFAAgEgCg");
	this.shape_188.setTransform(124.1,309.5);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AAVAfIgEgTIgQADIgPAEIgKAXQgCADgEAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgDAJgTIgBgEQAAgFAGgBIASgdQANgXADAAQAFAAACAHIAEAUIAJApIADAKIACAGQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQgGAAgEgPgAgHAEIAVgEIgFgXg");
	this.shape_189.setTransform(115.9,309.5);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AgbAuQgDgCAAgCIAAgSIABgYIACgZIAAgRQAAAAABgBQAAgBAAAAQAAgBABAAQAAAAAAgBQAJgCAKAAQAKAAAJAIQAMAHAAANQAAAPgMAJQAJAEAEAEQAFAEAAAGQAAAIgIAGQgGAFgGACQgMAGgVAAQgDAAgCgDgAgSAYIAAAMQAQAAAJgEQAEgCAEgDQAEgDAAgCQAAgCgIgEQgGgDgFgBIgGgBIgCAAIgCAAIgHgBIgBAOgAgPgjIAAAKIgCAYIAKAAQAIgBAGgEQAGgGAAgIQAAgGgHgEQgGgGgGAAIgJABg");
	this.shape_190.setTransform(107.9,309.3);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AgeAuQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIgBgOIAAgOIABgQIABgQIgBgKIAAgJQAAgDACgCQACgDAEgBIAOACQAJABAEADQAZANAAATQAAAJgIAGQgHAFgKADQATAKAJAMQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAABQAAAAgBAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAQgUgTgXgHIAAALIAAAMQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAgAgTgaIABAHIgBAMIgBALIACAAIAEAAQAOABAHgFQAEgBADgDQADgDAAgCQAAgJgKgHQgIgGgJgCIgJAAg");
	this.shape_191.setTransform(99.9,309.4);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AgZAvQgHgGABgUIAAgIIAAgKIAAgCIAAgEIACgZIgBgGIgBgHQAAgIAHAAQAAAAABABQAAAAABAAQAAAAABABQABAAAAAAIAOgDIALgBQAPABAJADQADABAAAFQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAIgCAAQgKgDgJAAIgKABIgNADIABAGIgBAXIAZgCIAPgBQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAABAAAAQAAAFgFABIgPABIgbACIgBAIIAAAHQAAAOACADQACABAIAAIALAAIAKgBIAEAAIAEAAQAGAAAAAGQAAAGgFAAQgGABgSAAQgSAAgFgEg");
	this.shape_192.setTransform(92.3,309.4);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AgKAsQgHgTgJghIgFgQQgDgNAAgEQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAgBQABAAAAAAQABAAAAgBQABAAAAAAQABAAABAAQAEAAABAFIADALIAFAUQAGAVAFARIABgBIAPgrIAGgPQADgJAEgFQACgCACAAQABAAABAAQAAAAABAAQAAABABAAQAAABABAAQAAABABAAQAAABAAAAQAAABAAAAQABABAAABIgBADQgFAGgCAGIgEANIgQArIgHAPQgBAEgEAAQgFAAgBgFg");
	this.shape_193.setTransform(84.6,309.5);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AgGAsIAAgWIABgWIAAgVIABgWQAAgGAFAAQAGAAAAAGIAAAWIAAAVIgBAeIgBAOQAAAGgFAAQgGAAAAgGg");
	this.shape_194.setTransform(74.8,309.2);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AgGAsIABgWIABgWIAAgVIAAgWQAAgGAFAAQAGAAAAAGIAAAWIAAAVIgBAeIgBAOQgBAGgEAAQgGAAAAgGg");
	this.shape_195.setTransform(71.4,309.2);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AAVAfIgEgTIgQADIgPAEIgKAXQgCADgEAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgDAJgTIgBgEQAAgFAGgBIASgdQANgXADAAQAFAAACAHIAEAUIAJApIADAKIACAGQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQgGAAgEgPgAgHAEIAVgEIgFgXg");
	this.shape_196.setTransform(65.1,309.5);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AgEAGQgCgCAAgEQAAgCACgCQACgCACgBQADABACACQACACAAACQAAAEgCACQgCACgDAAQgCAAgCgCg");
	this.shape_197.setTransform(55.4,313.7);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AgTAuQAAAAgBgBQAAgBAAAAQgBgBAAAAQAAgBAAAAIAEgMIAOggQAIgUAJgLIABgBIgdgBIgOAAQgGgBAAgFQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAQABAAAAAAIAXAAIAWABIALAAQAHgBAAAEQAAADgEAEIgGAHQgHAJgHANIgLAYIgEANIgGAOQgCACgDAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape_198.setTransform(50.1,309.6);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AgbAjQgNgKAAgRQAAgSAMgQQANgSASAAQATAAAJAJQAKAIgBATQABATgLAPQgNASgRAAQgQAAgLgJgAgTgSQgJAMAAAOQAAALAIAHQAIAHAMAAQAMAAAJgOQAIgMAAgPQAAgNgGgGQgGgFgOAAQgNAAgJAOg");
	this.shape_199.setTransform(114.3,180.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AgcArQAAAAgBgBQAAgBAAAAQAAgBAAAAQgBgBAAAAIAAgOIgBgNIABgOIACgQIAAgJIgBgIQAAgDACgCQACgDADgBIAOACQAIABAEACQAXAMAAASQAAAJgIAFQgGAFgKAEQASAJAJAKQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgFgBQgSgTgWgHIABALIAAAMQAAAAAAABQAAAAgBABQAAAAAAABQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAgAgRgYIAAAGIAAAMIgBAKIACAAIACAAQAOAAAHgEIAFgDQADgDABgDQAAgIgJgGQgIgHgIAAIgIgBg");
	this.shape_200.setTransform(106.1,179.9);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AgDAqQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIAAgDIABgDIgBgIIAAgIIgCgWIgBgXIgFAAQgMAAgIgBQgEgCAAgEQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABAAABAAQAAAAABAAIAJABIAJABIAKAAIAKAAIAMAAIANABQABAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIgNAAIgMgBIgFAAIACAZIABAZIABAGIAAAGIgBAGQgBAEgEAAIgDgBg");
	this.shape_201.setTransform(98.9,179.9);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AglAsIgCgEIABgIIAAgHIAAgKIAAgLIAAgKIAAgLIgBgLIAAgKQAAgDACgCQACgCADAAQADAAAEAGQAOAWALAOQANAPAQAPIAAgHIAAgHQAAgYgCgOIgCgGIgBgHQAAgGAGAAQAKAAAAAlIAAASIAAASIgBAJQgBAGgFgBQgDAAgFgDQgXgWgcgoIgBAMIAAANIAAANIABAPQAAAPgGAAQgDAAgCgCg");
	this.shape_202.setTransform(89.9,180);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AgYAqIgCgEQAAgBABAAQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAIAMgBIABgLIgBgJIAAgKIABggIgGABIgIAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAgBQAAAAAAgBQAAgFAGgBIARAAQAKAAARACQAFABAAAFQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBABIgEABIgJgBIgJgBIgCAeIABAKIAAAKIgBAKIASgBQABAAABAAQAAABABAAQAAAAABAAQAAABABAAQAAABAAAAQAAAAABABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQgBAAAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAIgJAAIgKAAIgKABIgLABQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_203.setTransform(82.1,180);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AgEAFQgCgCAAgDQAAAAAAAAQAAgBAAgBQABAAAAgBQABAAAAgBQACgCACAAQADAAACACQABABAAAAQAAABABAAQAAABAAABQAAAAAAAAQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_204.setTransform(74,184);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AABAsIgKAAIgFAAQgDgCAAgDQAAgGAJAAIACAAIADAAIgBgHIAAgIIABgVIABgWQgHAGgDAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAQAAgDAFgEIAIgHQAEgFAFAAQAEAAAAAEIgBAEIAAAEIAAAGIAAAFIgBAUIgBASIAAAIIABAHIAGAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAg");
	this.shape_205.setTransform(70,179.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4},{t:this.shape_3,p:{x:68.4,y:123.9}},{t:this.shape_2,p:{x:80,y:123.7}},{t:this.shape_1,p:{x:89.4,y:123.7}},{t:this.shape}]},32).to({state:[{t:this.shape_4},{t:this.shape_15,p:{x:68.4,y:123.9}},{t:this.shape_14,p:{x:80,y:123.7}},{t:this.shape_1,p:{x:89.4,y:123.7}},{t:this.shape},{t:this.shape_13},{t:this.shape_12,p:{x:177.1,y:104.4}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_3,p:{x:206.4,y:104.4}},{t:this.shape_9},{t:this.shape_2,p:{x:226.2,y:104.3}},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5,p:{x:263.2,y:104.6}}]},7).to({state:[{t:this.shape_4},{t:this.shape_22,p:{x:68.4,y:123.9}},{t:this.shape_14,p:{x:80,y:123.7}},{t:this.shape_21,p:{x:89.4,y:123.7}},{t:this.shape},{t:this.shape_20},{t:this.shape_19},{t:this.shape_1,p:{x:335,y:109.3}},{t:this.shape_18},{t:this.shape_15,p:{x:356.7,y:109.5}},{t:this.shape_17,p:{x:368.2,y:109.5}},{t:this.shape_16,p:{x:378.7,y:109.7}},{t:this.shape_13},{t:this.shape_12,p:{x:177.1,y:104.4}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_3,p:{x:206.4,y:104.4}},{t:this.shape_9},{t:this.shape_2,p:{x:226.2,y:104.3}},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5,p:{x:263.2,y:104.6}}]},6).to({state:[{t:this.shape_4},{t:this.shape_40,p:{x:68.4,y:123.9}},{t:this.shape_39,p:{x:80,y:123.7}},{t:this.shape_38,p:{x:89.4,y:123.7}},{t:this.shape},{t:this.shape_37},{t:this.shape_36,p:{x:453.8,y:107.7}},{t:this.shape_35},{t:this.shape_34,p:{x:473,y:108}},{t:this.shape_33},{t:this.shape_22,p:{x:493.5,y:107.8}},{t:this.shape_32,p:{x:505.1,y:107.7}},{t:this.shape_31},{t:this.shape_30,p:{x:438.7,y:130.8}},{t:this.shape_21,p:{x:449.1,y:130.6}},{t:this.shape_14,p:{x:459.4,y:130.6}},{t:this.shape_29},{t:this.shape_28,p:{x:476.8,y:130.6}},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25,p:{x:501.5,y:130.8}},{t:this.shape_24},{t:this.shape_23,p:{x:520,y:130.9}},{t:this.shape_20},{t:this.shape_19},{t:this.shape_1,p:{x:335,y:109.3}},{t:this.shape_18},{t:this.shape_15,p:{x:356.7,y:109.5}},{t:this.shape_17,p:{x:368.2,y:109.5}},{t:this.shape_16,p:{x:378.7,y:109.7}},{t:this.shape_13},{t:this.shape_12,p:{x:177.1,y:104.4}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_3,p:{x:206.4,y:104.4}},{t:this.shape_9},{t:this.shape_2,p:{x:226.2,y:104.3}},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5,p:{x:263.2,y:104.6}}]},6).to({state:[{t:this.shape_4},{t:this.shape_40,p:{x:68.4,y:123.9}},{t:this.shape_55,p:{x:80,y:123.7}},{t:this.shape_54,p:{x:89.4,y:123.7}},{t:this.shape},{t:this.shape_37},{t:this.shape_38,p:{x:453.8,y:107.7}},{t:this.shape_35},{t:this.shape_53,p:{x:473,y:108}},{t:this.shape_33},{t:this.shape_22,p:{x:493.5,y:107.8}},{t:this.shape_52,p:{x:505.1,y:107.7}},{t:this.shape_31},{t:this.shape_51,p:{x:438.7,y:130.8}},{t:this.shape_36,p:{x:449.1,y:130.6}},{t:this.shape_39,p:{x:459.4,y:130.6}},{t:this.shape_29},{t:this.shape_50,p:{x:476.8,y:130.6}},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25,p:{x:501.5,y:130.8}},{t:this.shape_24},{t:this.shape_49,p:{x:520,y:130.9}},{t:this.shape_20},{t:this.shape_19},{t:this.shape_21,p:{x:335,y:109.3}},{t:this.shape_18},{t:this.shape_15,p:{x:356.7,y:109.5}},{t:this.shape_17,p:{x:368.2,y:109.5}},{t:this.shape_34,p:{x:378.7,y:109.7}},{t:this.shape_48},{t:this.shape_47,p:{x:418.2,y:280.3}},{t:this.shape_23,p:{x:429.1,y:280.4}},{t:this.shape_32,p:{x:439.9,y:280.1}},{t:this.shape_46},{t:this.shape_30,p:{x:388.1,y:303.2}},{t:this.shape_1,p:{x:398.5,y:303}},{t:this.shape_14,p:{x:408.8,y:303}},{t:this.shape_45},{t:this.shape_28,p:{x:426.2,y:303}},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42,p:{x:450.9,y:303.2}},{t:this.shape_41},{t:this.shape_16,p:{x:469.4,y:303.3}},{t:this.shape_13},{t:this.shape_12,p:{x:177.1,y:104.4}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_3,p:{x:206.4,y:104.4}},{t:this.shape_9},{t:this.shape_2,p:{x:226.2,y:104.3}},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5,p:{x:263.2,y:104.6}}]},6).to({state:[{t:this.shape_4},{t:this.shape_74,p:{x:68.4,y:123.9}},{t:this.shape_73},{t:this.shape_72,p:{x:89.4,y:123.7}},{t:this.shape},{t:this.shape_37},{t:this.shape_54,p:{x:453.8,y:107.7}},{t:this.shape_35},{t:this.shape_71},{t:this.shape_33},{t:this.shape_70},{t:this.shape_55,p:{x:505.1,y:107.7}},{t:this.shape_31},{t:this.shape_69},{t:this.shape_38,p:{x:449.1,y:130.6}},{t:this.shape_52,p:{x:459.4,y:130.6}},{t:this.shape_29},{t:this.shape_68},{t:this.shape_27},{t:this.shape_26},{t:this.shape_67},{t:this.shape_24},{t:this.shape_53,p:{x:520,y:130.9}},{t:this.shape_20},{t:this.shape_19},{t:this.shape_36,p:{x:335,y:109.3}},{t:this.shape_18},{t:this.shape_40,p:{x:356.7,y:109.5}},{t:this.shape_66,p:{x:368.2,y:109.5}},{t:this.shape_49,p:{x:378.7,y:109.7}},{t:this.shape_48},{t:this.shape_65,p:{x:418.2,y:280.3}},{t:this.shape_34,p:{x:429.1,y:280.4}},{t:this.shape_39,p:{x:439.9,y:280.1}},{t:this.shape_46},{t:this.shape_51,p:{x:388.1,y:303.2}},{t:this.shape_21,p:{x:398.5,y:303}},{t:this.shape_32,p:{x:408.8,y:303}},{t:this.shape_45},{t:this.shape_50,p:{x:426.2,y:303}},{t:this.shape_44},{t:this.shape_43},{t:this.shape_64,p:{x:450.9,y:303.2}},{t:this.shape_41},{t:this.shape_23,p:{x:469.4,y:303.3}},{t:this.shape_13},{t:this.shape_22,p:{x:177.1,y:104.4}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_15,p:{x:206.4,y:104.4}},{t:this.shape_9},{t:this.shape_14,p:{x:226.2,y:104.3}},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_16,p:{x:263.2,y:104.6}},{t:this.shape_17,p:{x:220.9,y:296.4}},{t:this.shape_47,p:{x:231.5,y:296.4}},{t:this.shape_12,p:{x:243.1,y:296.4}},{t:this.shape_63},{t:this.shape_42,p:{x:263.5,y:296.5}},{t:this.shape_62},{t:this.shape_3,p:{x:281.7,y:296.4}},{t:this.shape_61},{t:this.shape_60},{t:this.shape_30,p:{x:219.9,y:319.3}},{t:this.shape_1,p:{x:230.3,y:319.1}},{t:this.shape_2,p:{x:240.6,y:319.1}},{t:this.shape_59},{t:this.shape_28,p:{x:258,y:319.2}},{t:this.shape_58},{t:this.shape_57},{t:this.shape_25,p:{x:282.7,y:319.4}},{t:this.shape_56},{t:this.shape_5,p:{x:301.2,y:319.5}}]},6).to({state:[{t:this.shape_4},{t:this.shape_92},{t:this.shape_73},{t:this.shape_91},{t:this.shape},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_74,p:{x:132.8,y:287.7}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_72,p:{x:80.3,y:310.5}},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_37},{t:this.shape_54,p:{x:453.8,y:107.7}},{t:this.shape_35},{t:this.shape_71},{t:this.shape_33},{t:this.shape_70},{t:this.shape_55,p:{x:505.1,y:107.7}},{t:this.shape_31},{t:this.shape_69},{t:this.shape_38,p:{x:449.1,y:130.6}},{t:this.shape_52,p:{x:459.4,y:130.6}},{t:this.shape_29},{t:this.shape_68},{t:this.shape_27},{t:this.shape_26},{t:this.shape_67},{t:this.shape_24},{t:this.shape_53,p:{x:520,y:130.9}},{t:this.shape_66,p:{x:220.9,y:296.4}},{t:this.shape_65,p:{x:231.5,y:296.4}},{t:this.shape_40,p:{x:243.1,y:296.4}},{t:this.shape_63},{t:this.shape_64,p:{x:263.5,y:296.5}},{t:this.shape_62},{t:this.shape_22,p:{x:281.7,y:296.4}},{t:this.shape_61},{t:this.shape_60},{t:this.shape_51,p:{x:219.9,y:319.3}},{t:this.shape_36,p:{x:230.3,y:319.1}},{t:this.shape_39,p:{x:240.6,y:319.1}},{t:this.shape_59},{t:this.shape_50,p:{x:258,y:319.2}},{t:this.shape_58},{t:this.shape_57},{t:this.shape_25,p:{x:282.7,y:319.4}},{t:this.shape_56},{t:this.shape_49,p:{x:301.2,y:319.5}},{t:this.shape_20},{t:this.shape_19},{t:this.shape_21,p:{x:335,y:109.3}},{t:this.shape_18},{t:this.shape_15,p:{x:356.7,y:109.5}},{t:this.shape_17,p:{x:368.2,y:109.5}},{t:this.shape_34,p:{x:378.7,y:109.7}},{t:this.shape_48},{t:this.shape_47,p:{x:418.2,y:280.3}},{t:this.shape_23,p:{x:429.1,y:280.4}},{t:this.shape_32,p:{x:439.9,y:280.1}},{t:this.shape_46},{t:this.shape_30,p:{x:388.1,y:303.2}},{t:this.shape_1,p:{x:398.5,y:303}},{t:this.shape_14,p:{x:408.8,y:303}},{t:this.shape_45},{t:this.shape_28,p:{x:426.2,y:303}},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42,p:{x:450.9,y:303.2}},{t:this.shape_41},{t:this.shape_16,p:{x:469.4,y:303.3}},{t:this.shape_13},{t:this.shape_12,p:{x:177.1,y:104.4}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_3,p:{x:206.4,y:104.4}},{t:this.shape_9},{t:this.shape_2,p:{x:226.2,y:104.3}},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5,p:{x:263.2,y:104.6}}]},6).to({state:[]},12).to({state:[{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93}]},8).wait(1));

	// V
	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#0000FF").ss(1,1,1).p("AArArQgSASgZAAQgYAAgSgSQgSgSAAgZQAAgYASgSQASgSAYAAQAZAAASASQASASAAAYQAAAZgSASg");
	this.shape_206.setTransform(254,204.3,0.781,0.781);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FF0066").s().p("AgqArQgSgSAAgZQAAgYASgSQASgSAYAAQAZAAASASQASASAAAYQAAAZgSASQgSASgZAAQgYAAgSgSg");
	this.shape_207.setTransform(254,204.3,0.781,0.781);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#0000FF").ss(1,1,1).p("AhQgEQAKgDAKgDQgHgKgHgJQALAAAKAAQgEgLgDgLQAIACAJABQACABADABQAAgLAAgMQAHAHAJAGQAEgLAFgLQAGAJAFAJQAFgIAFgHQACgCABgCQADAKADAKQAKgHAKgFQgBAKAAALQAMgDAKgCQgFAIgFAJQANABALABQgHAHgHAIQALAEAKAFQgHAFgJAGQAJAGAJAIQgCAAgBAAQgJABgIACQAGALAGAKQgKgBgKgCQACANABAMQgIgFgIgFQgCAMgCAMQgHgHgGgIQgFAMgGAKQgEgIgFgJQgFAGgIAFQgCADgDADQgCgKAAgKQgLAFgMAFQADgKACgKQgMACgNABQACgEABgDQAEgFADgGQgMgCgLgDQAHgFAJgGQgLgHgKgGg");
	this.shape_208.setTransform(241.5,198);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FF125F").s().p("AADA/IgMALIgGAGIgCgUIgXAKIAGgUIgaADIADgHIAHgLIgXgFIAPgLIgUgNIgBgKIATgGIgOgTIAVAAIgHgWIARADIAEACIAAgXIARANIAIgWIANASIAJgPIADgEIAGAUIAUgMIgBAVIAWgFIgKARIAYACIgPAPIAXAJIgRALIASAOIgDAAIgRADIAMAVIgUgDIADAZIgQgKIgEAYIgOgPIgKAWIgJgRg");
	this.shape_209.setTransform(241.5,198);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#0000FF").ss(1,1,1).p("AhxgLQAUgDAUgDQgPgOgPgPQATADAUAEQgJgTgJgTQAOAGAOAHQAEACAEADQgDgVgCgVQANAPANAPQAFgVAFgUQAIASAHASQAIgOAIgOQACgEACgEQACATABAUQARgOAQgNQgFATgFATQAVgHATgHQgMAPgMAQQAXgBATgBQgPAMgQALQAVAGAUAGQgSAHgSAFQARAMARAMQgCAAgDAAQgQAAgRgBQANASAMARQgSgGgSgGQAGAVAFAUQgOgLgOgNQgCAVgBAVQgKgQgKgQQgHAUgIAUQgEgSgEgSQgKALgKAKQgFAGgFAFQACgTACgTQgTALgSALQAIgRAIgSQgVAFgWAEQAEgFAEgFQAJgJAJgKQgVgCgWgCQASgJARgIQgUgKgTgIg");
	this.shape_210.setTransform(229,191.9);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FF2457").s().p("AAABNIgUAVIgKALIAEgmIglAXIAQgkIgrAJIAIgKIASgTIgrgEIAjgRIgngSIgCgJIAogHIgegdIAnAHIgSglIAcAMIAIAFIgFgpIAaAdIAKgpIAPAlIAQgcIAEgIIADAmIAhgaIgKAlIAogNIgYAeIAqgBIgfAWIApANIgkALIAiAZIgFgBIghAAIAZAiIgkgMIALAqIgcgZIgDArIgUghIgPAoIgIgkg");
	this.shape_211.setTransform(229,191.9);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#0000FF").ss(1,1,1).p("AiSgRQAdgCAdgDQgWgUgXgVQAdAHAcAHQgOgbgPgaQAUALAUAMQAGADAFAEQgFgegFgeQASAXASAXQAFgeAFgeQAKAcAJAbQALgVALgUQADgGADgGQABAdAAAdQAWgVAXgVQgJAcgJAcQAcgMAcgMQgTAWgSAXQAggDAcgDQgYAQgYAQQAeAIAdAHQgbAHgcAHQAaAQAaARQgEgBgEgBQgZgBgZgCQAUAYATAYQgagLgbgLQAKAeAJAdQgUgTgUgUQgBAeAAAfQgOgZgOgaQgJAegJAdQgEgcgGgcQgNAQgNAQQgGAJgHAIQAEgcAFgcQgaARgZARQANgaAOgZQgeAIgfAHQAHgHAGgGQAOgNAPgOQgfgCgfgCQAbgLAagLQgdgMgcgMg");
	this.shape_212.setTransform(216.6,185.6);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FF3750").s().p("AgGBbIgaAgIgNARIAJg4IgzAiIAbgzIg9APIANgNIAdgbIg+gEIA1gWIg5gYIgBgJIA6gFIgtgpIA5AOIgdg1IAoAXIALAHIgKg8IAkAuIAKg8IATA3IAWgpIAGgMIABA6IAtgqIgSA4IA4gYIglAtIA8gGIgwAgIA7APIg3AOIA0AhIgIgCIgygDIAnAwIg1gWIATA7IgognIgBA9IgcgzIgSA7IgKg4g");
	this.shape_213.setTransform(216.6,185.6);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#0000FF").ss(1,1,1).p("Ai0gXQAngCAngCQgfgagegaQAmAKAlAKQgUgigTgjQAZAQAaARQAHAFAHAFQgIgngIgnQAXAfAYAgQAFgoAGgoQAMAlALAlQANgcAOgbQAEgIAEgIQgBAngBAmQAdgcAdgcQgOAlgNAkQAlgRAkgQQgaAdgZAdQAqgFAlgEQggAUgiAVQAoAIAnAJQglAJgmAHQAjAVAiAVQgFgBgFgBQghgDghgEQAaAfAZAfQgigQgkgQQAPAmAOAmQgbgbgagaQgBAnACAoQgSgigRgjQgLAngLAnQgFgmgGgmQgQAWgRAVQgIALgIAMQAHgmAHgmQghAYghAWQATghAUghQgnALgnALQAIgIAJgJQAUgRAUgRQgpgCgogCQAkgOAjgOQglgOgmgPg");
	this.shape_214.setTransform(204.2,179.4);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FF4949").s().p("AgLBpIghArIgQAXIAOhMIhCAuIAnhCIhOAWIARgRIAogiIhRgEIBHgcIhLgdIgBgIIBOgEIg9g0IBLAUIgnhFIAzAhIAOAKIgQhOIAvA/IALhQIAXBKIAbg3IAIgQIgCBNIA6g4IgbBJIBJghIgzA6IBPgJIhCApIBPARIhLAQIBFAqIgKgCIhCgHIAzA+IhGggIAdBMIg1g1QgBAnACAoIgjhFIgWBOIgLhMg");
	this.shape_215.setTransform(204.2,179.4);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#0000FF").ss(1,1,1).p("AjVgdQAwgCAwgCQgmgfglggQAuAOAuAOQgZgrgZgqQAfAVAfAVQAJAHAJAGQgLgwgKgwQAcAoAcAnQAGgxAGgxQAOAuANAvQAQgjARgjQAFgJAEgKQgBAvgDAxQAjgjAjgjQgRAtgSAtQAtgWAsgWQggAlggAkQA0gHAugGQgpAZgqAYQAxAKAwAKQguAJgvAKQArAZAqAZQgGgBgGgBQgpgFgqgGQAhAmAgAmQgrgVgsgVQATAuASAvQghghgggiQAAAwACAxQgVgrgVgrQgNAwgNAwQgFgvgHgwQgTAbgTAaQgKAOgKAPQAKgvAJgwQgoAegoAdQAYgpAZgqQgvAPgwAPQALgLAMgKQAZgVAZgVQgygBgygCQAtgRAtgRQgvgRgvgSg");
	this.shape_216.setTransform(191.8,173.2);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FF5B42").s().p("AgRB3IgmA1IgUAdIATheIhQA6IAxhSIhfAdIAXgVIAygqIhkgDIBagiIhegiIAAgHIBggEIhLg/IBcAbIgyhUIA+AqIASANIgVhgIA4BPIAMhjIAbBdIAhhFIAJgTIgEBgIBGhHIgjBbIBZgrIhABIIBigNIhTAxIBhAUIhdATIBVAyIgMgDIhTgKIBBBMIhXgrIAlBdIhBhCQAAAwACAxIgqhXIgaBhIgMhgg");
	this.shape_217.setTransform(191.8,173.2);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#0000FF").ss(1,1,1).p("Aj3gjQA6gCA7gBQguglgugmQA4ARA3ASQgfgygegyQAkAZAlAbQALAHAKAIQgNg5gNg5QAhAvAhAwQAGg7AHg6QAQA4APA4QATgqATgpQAGgMAFgMQgCA6gEA6QApgrAqgqQgWA1gWA2QA1gaA1gbQgnArgnAsQA+gJA3gIQgyAdgzAdQA7ALA5ALQg4AKg5ALQA0AeAzAdQgHgCgIgBQgxgGgygIQAnAtAnAsQgzgZg0gaQAWA3AXA3QgngpgngoQABA5AEA6QgZg0gZg0QgPA5gPA5QgGg5gHg5QgWAggWAgQgMARgMARQANg4AMg5QgvAkgwAjQAegxAfgyQg5ATg5ARQAOgMAOgMQAfgZAegZQg7gBg8gBQA3gUA2gUQg4gTg4gVg");
	this.shape_218.setTransform(179.4,167);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FF6D3A").s().p("AgWCGIgtBAIgXAiIAZhxIhfBHIA9hjIhyAkIAcgYIA9gyIh3gCIBtgoIhwgoIgBgGIB0gDIhbhLIBvAjIg9hkIBJA0IAVAPIgbhyIBDBfIANh1IAfBwIAmhTIALgYIgGB0IBShVIgrBrIBpg1IhNBXIB1gRIhlA6IB0AWIhxAVIBnA7IgPgDIhjgOIBOBZIhngzIAtBuIhOhRQABA5AEA6IgyhoIgeByIgNhyg");
	this.shape_219.setTransform(179.4,167);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#0000FF").ss(1,1,1).p("AkZgqQBEgBBEgBQg2grg1grQBBAVBAAVQgkg6glg6QArAfArAfQAMAJAMAJQgQhCgQhDQAmA4AmA4QAHhEAHhEQASBBARBCQAWgxAWgwQAGgOAHgOQgEBEgFBDQAwgyAvgxQgaA+gaA/QA9ggA9gfQguAygtAyQBIgLA/gJQg6Ahg7AhQBDANBEAMQhCALhDANQA8AhA8AiQgIgCgJgBQg6gJg6gIQAuAzAtAzQg7gfg9gfQAbBAAaBAQgsgwgtgwQABBCAFBFQgcg9gcg+QgSBDgRBCQgGhDgHhDQgaAmgZAkQgOAUgNAUQAPhBAPhCQg3Aqg3ApQAkg5Akg5QhBAVhCAVQARgOAQgOQAkgcAjgdQhEgBhFgBQA/gWBAgXQhBgWhBgYg");
	this.shape_220.setTransform(167,160.8);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FF8033").s().p("AgbCUIgzBKIgbAoIAeiDIhuBTIBIhyIiDAqIAhgcIBHg5IiJgCIB/gtIiCguIgBgGICIgCIhrhWICBAqIhJh0IBWA+IAYASIggiFIBMBwIAOiIIAjCDIAshhIANgcIgJCHIBfhjIg0B9IB6g/IhbBkICHgUIh1BCICHAZIiFAYIB4BDIgRgDIh0gRIBbBmIh4g+IA1CAIhZhgQABBCAFBFIg4h7IgjCFIgNiGg");
	this.shape_221.setTransform(167,160.8);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#0000FF").ss(1,1,1).p("Ak6gwQBNgBBNgBQg9gwg9gxQBKAZBJAYQgqhCgqhCQAxAkAwAkQAOALANAKQgShLgShMQArBAArBAQAHhNAHhOQAUBLATBKQAZg3AZg3QAHgQAHgQQgFBNgGBNQA2g5A1g5QgeBIgeBHQBFgkBFgkQg0A5g0A4QBSgMBIgMQhDAmhEAlQBNAOBNAOQhMANhLANQBEAmBEAlQgJgBgKgCQhDgKhCgKQA0A6A1A6QhEgkhFgkQAfBIAeBIQgyg2g0g3QADBLAFBOQgfhGgghHQgUBMgSBLQgIhMgHhMQgdAqgcAqQgPAXgQAXQAShLAShLQg+Avg+AwQAphBAqhBQhLAZhKAZQATgRAUgPQAoghApggQhOgBhOgBQBIgZBJgaQhKgZhKgag");
	this.shape_222.setTransform(154.6,154.6);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FF922C").s().p("AghCjIg5BUIgfAuIAkiWIh8BfIBTiCIiVAxIAngfIBRhBIicgCICRgyIiUg0IAAgFICagCIh6hhICTAxIhUiEIBhBIIAbAVIgkiXIBWCBIAOibIAnCUIAyhuIAOggIgLCbIBrhyIg8CPICKhJIhoBxICagXIiHBKICaAcIiXAaICIBLIgTgDIiFgUIBpB0IiJhIIA9CRIhmhuQADBLAFBOIg/iNIgmCYIgPiZg");
	this.shape_223.setTransform(154.6,154.6);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#0000FF").ss(1,1,1).p("Alcg2QBYAABXgBQhFg2hFg2QBTAcBSAbQgvhJgwhKQA2ApA2ApQAQAMAPAMQgVhVgVhVQAvBIAxBJQAIhXAHhXQAWBUAVBUQAcg+Abg+QAIgSAIgSQgGBXgHBWQA8hAA8hAQgjBQgiBQQBNgpBOgpQg7BAg7A/QBcgOBRgNQhMAqhNApQBXAPBWAPQhVAOhWAPQBNAqBNAqQgLgCgLgCQhLgMhKgMQA7BBA7BBQhMgphNgpQAjBRAiBRQg5g+g5g+QADBUAHBXQgjhPgkhPQgVBVgVBUQgIhWgIhWQggAwggAvQgQAagRAZQAUhUAVhUQhGA2hFA1QAvhJAvhJQhTAchUAcQAWgRAWgSQAugkAugkQhXgBhYAAQBSgcBSgdQhTgchTgdg");
	this.shape_224.setTransform(142.2,148.3);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FFA424").s().p("AgmCxIhABfIgiAzIAqioIiLBrIBeiSIinA4IAsgjIBchIIiwgBICkg5Iilg5IgBgEICugBIiJhsIClA3IhfiTIBsBSIAeAYIgqiqIBhCRIAPiuIArCoIA3h8IAQgkIgNCtIB3iAIhECgICbhSIh2B/ICtgbIiZBTICtAeIirAdICaBUIgWgEIiWgYIB3CCIiahSIBGCiIhzh8QAEBUAHBXIhHieIgqCpIgQisg");
	this.shape_225.setTransform(142.2,148.3);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#0000FF").ss(1,1,1).p("Al+g8QBhAABhgBQhNg7hMg8QBbAgBcAfQg1hSg1hRQA8AuA7AtQARAOARANQgXhegYheQA1BQA1BRQAIhgAIhhQAYBeAXBdQAfhFAehFQAJgTAIgUQgHBfgIBhQBChIBChHQgmBZgnBZQBVgvBWgtQhCBGhBBHQBmgQBZgPQhVAuhUAtQBfARBhAQQhfAPhfAQQBVAvBVAuQgMgDgNgBQhTgOhSgNQBBBHBCBIQhVguhVguQAnBaAnBZQg/hFhAhFQAEBdAIBhQgnhZgnhYQgXBfgXBdQgJhfgIhgQgjA1giA0QgTAdgTAcQAXhdAYheQhNA8hNA8QA1hRA0hRQhcAfhcAgQAZgUAYgTQAzgoA0gpQhhAAhiAAQBcgeBbggQhcgfhcggg");
	this.shape_226.setTransform(129.8,142.1);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FFB61D").s().p("AgrDAIhGBpIgmA5IAvi7IiaB3IBqiiIi5A/IAygmIBmhRIjDAAIC3g+Ii4g/IgBgDIDCAAIiZh4IC3A+IhqiiIB4BbIAhAbIgvi9IBqCiIARjBIAuC7IA9iKIASgnIgQDAICEiPIhNCxICrhbIiDCNIDAggIiqBcIC/AhIi+AgICrBcIgZgFIilgbICECPIiqhbIBNCzIh/iKQAFBcAHBiIhNixIgvC8IgQi/g");
	this.shape_227.setTransform(129.8,142.1);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#0000FF").ss(1,1,1).p("AmfhDQBqABBqAAQhUhBhUhCQBkAjBlAiQg7hZg6hZQBBAyBCAzQASAPATAOQgahngbhnQA6BZA7BZQAIhqAJhqQAaBnAZBnQAhhMAhhMQAJgWAKgWQgJBqgJBqQBJhPBIhOQgrBhgrBhQBegzBegyQhJBOhIBNQBwgSBjgRQheAzheAyQBqARBpASQhoAQhpASQBdAzBeAyQgNgDgNgCQhbgPhcgPQBJBOBIBOQhdgzhegyQAsBhAqBiQhFhLhGhMQAFBlAJBqQgrhggqhiQgZBngaBoQgJhpgIhrQgmA7gmA6QgVAfgUAfQAahmAahoQhUBChUBCQA6hYA6hZQhlAjhlAjQAbgVAbgWQA5gsA5gsQhrABhrAAQBlgjBkgiQhlgihlgig");
	this.shape_228.setTransform(117.4,135.9);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FFC816").s().p("AgxDNIhMB0IgpA/IA0jOIioCEIB0iyIjKBGIA2gqIByhYIjVABIDIhFIjKhEIAAgDIDUABIioiCIDJBEIh0iyICCBlIAmAeIg1jOIB0CyIARjVIAzDOIBCiYIATgsIgRDVICQieIhWDDIC8hmIiRCcIDTgkIi7BlIDSAjIjRAiIC8BkIgbgEIi3gfICRCdIi7hlIBWDDIiLiYQAFBnAJBpIhVjCIgzDPIgRjUg");
	this.shape_229.setTransform(117.4,135.9);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#0000FF").ss(1,1,1).p("AnBhJQB1ABBzABQhchHhchHQBuAmBtAmQhAhhhAhhQBHA3BIA3QAUARAUAQQgdhwgchxQA+BiA/BhQAKh0AIh0QAdBxAbBwQAjhTAkhTQALgXAKgYQgKB0gKBzQBOhWBOhWQguBqgvBqQBmg4Blg3QhPBVhPBUQB7gUBqgTQhlA3hnA3QBzATByASQhyAShyASQBmA3BnA3QgOgDgPgDQhkgQhjgRQBPBVBPBVQhmg4hmg3QAwBqAvBrQhLhUhNhTQAFBvAKB0QgthqgvhrQgbBxgcBxQgJhzgIh0QgqA/gpA/QgWAjgWAiQAdhwAchwQhbBIhcBHQBBhgA/hhQhuAmhuAnQAegXAegXQA+gwA+gwQh1ABh0AAQBuglBtglQhtgkhvgmg");
	this.shape_230.setTransform(105,129.7);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FFDB0F").s().p("Ag3DcIhRB+IgtBFIA5jgIi3CPICAjBIjbBNIA7guIB8hgIjpABIDchKIjdhKIAAgCIDoACIi4iOIDcBMIiAjCICOBuIAoAhIg5jhIB+DDIASjoIA3DhIBHimIAVgvIgUDnICcisIhdDUIDLhvIidCpIDkgnIjMBuIDlAlIjkAkIDNBuIgegGIjHghICfCqIjMhvIBfDVIiXinQAFBvAJB0IhcjVIg3DiIgSjng");
	this.shape_231.setTransform(105,129.7);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#0000FF").ss(1,1,1).p("AnihPQB+ABB9ABQhkhMhjhNQB2ApB3AqQhGhphFhpQBNA8BNA9QAVARAWASQgfh6ggh5QBEBpBEBqQAKh9AJh+QAeB6AdB6QAnhaAmhZQALgaAMgaQgLB9gMB9QBVhdBVhdQg0BzgzByQBug8Bvg9QhWBchWBcQCEgXB0gUQhvA7hvA7QB8AVB8ATQh8ATh8ATQBvA8BvA6QgPgCgRgDQhrgShsgTQBWBcBWBcQhvg9hug8QA0ByAzBzQhRhahShaQAGB4ALB9Qgyhzgyh0QgdB6geB7QgJh9gKh9QgsBEgsBEQgYAmgYAlQAgh5Afh7QhjBPhiBOQBFhpBFhoQh2Aph3ApQAggYAggZQBEg0BDgzQh+AAh+ABQB4goB2goQh3gnh3gog");
	this.shape_232.setTransform(92.6,123.5);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FFED07").s().p("Ag8DqIhYCJIgwBLIA/jzIjFCcICKjRIjtBSIBAgxICHhoIj8ACIDuhQIjuhPIAAgBID7ACIjHiZIDtBTIiLjSICaB5IArAjIg/jzICIDTIATj7IA7D0IBNizIAXgzIgXD6ICqi7IhnDlIDdh4IisC3ID4gqIjeB1ID4AoIj4AmIDeB3IgggGIjXglICsC4Ijdh5IBnDlIiji0QAGB4ALB9IhkjmIg7DzIgTj6g");
	this.shape_233.setTransform(92.6,123.5);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#0000FF").ss(1,1,1).p("ABkjqIC1jJIhvD3IDtiDIi5DGIELgvIjvB/IELApIkLAqIDvB/IkLgvIC5DGIjtiDIBvD3Ii1jJIAYENIhqj4Ig/EGIgUkNIiSDjIBEkFIjUCoICWjhIj/BaIDXilIkPADIEBhWIkBhVIEPADIjXilID/BaIiWjhIDUCoIhEkFICSDjIAUkNIA/EGIBqj4g");
	this.shape_234.setTransform(80.2,117.2);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FFFF00").s().p("AhBD5IiSDjIBEkFIjUCoICWjhIj/BaIDXilIkPADIEBhWIkBhVIEPADIjXilID/BaIiWjhIDUCoIhEkFICSDjIAUkNIA/EGIBqj4IgYENIC1jJIhvD3IDtiDIi5DGIELgvIjvB/IELApIkLAqIDvB/IkLgvIC5DGIjtiDIBvD3Ii1jJIAYENIhqj4Ig/EGg");
	this.shape_235.setTransform(80.2,117.2);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#0000FF").ss(1,1,1).p("AB8n3IgYENIC1jJIhvD3IDtiDIi5DGIELgvIjvB/IELApIkLAqIDvB/IkLgvIC5DGIjtiDIBvD3Ii1jJIAYENIhqj4Ig/EGIgUkNIiSDjIBEkFIjUCoICWjhIj/BaIDXilIkPADIEBhWIkBhVIEPADIjXilID/BaIiWjhIDUCoIhEkFICSDjIAUkNIA/EGg");
	this.shape_236.setTransform(80.2,117.2);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("#0000FF").ss(1,1,1).p("AoSiaID1ACIigiJIDoBLIhpi7IDECMIgmjaICNC9IAjjgIBJDaIBsjPIgBBQIgNCdICYiUIhdDhIDGhZIibC3IDegTIjHB8IDfA3IjaA1ICuBqIjxgnICHClIjZhtIBJDNIirinIACDhIhrjQIhJDbIgkjgIiACwIA5jtIixB5IB9jPIjVA4ICzidIjhgRIDWhaIjMhXg");
	this.shape_237.setTransform(80.7,117.9);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FFFF00").s().p("AiUEjIiACwIA5jtIixB5IB9jPIjVA4ICzidIjhgRIDWhaIjMhXIgKgDID1ACIifiJIDnBLIhpi7IDECMIgmjaICNC9IAjjgIBJDaIBsjPIgBBQIgNCdICXiUIhcDhIDGhZIibC3IDfgTIjIB8IDeA3IjZA1ICuBqIjxgnICHClIjZhtIBJDNIiqinIABDhIhrjQIhJDbg");
	this.shape_238.setTransform(80.7,117.9);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("#0000FF").ss(1,1,1).p("AogjfIDbACIhohuIDRA8Ig+iWIC0BwIgHiuICHCXIA0izIBSCvIBuimIAHBAIgLCMIB6hfIhLDLICegwIh7CqICyAIIigB6ICzBDIivBBIB0BVIjYgfIBVCEIjFhYIAjClIigiGIgWC0IhtimIhRCvIgzi0IhvB+IAujVIiNBKIBki9IirAVICQiUIi1gkICrhgIijhbg");
	this.shape_239.setTransform(81.2,118.5);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FFFF00").s().p("AjmFMIhuB+IAujVIiOBKIBki9IirAVICQiUIi1gkICrhgIijhbIgIgDIDcACIhphuIDRA8Ig+iWIC0BwIgGiuICHCXIAzizIBSCvIBuimIAHBAIgLCMIB6hfIhKDLICdgwIh7CqICyAIIigB6ICyBDIiuBBIB1BVIjZgfIBUCEIjEhYIAjClIigiGIgWC0IhsimIhRCvg");
	this.shape_240.setTransform(81.2,118.5);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("#0000FF").ss(1,1,1).p("AoukkIDCABIgyhSIC6AtIgRhwICkBUIAYiDICCByIBEiHIBaCDIBvh8IAQAwIgIB8IBbgrIg4C2IB2gIIhcCdICFAjIh3B4ICGBPIiDBOIA5A/IjAgXIAjBjIiwhCIgDB8IiVhlIgsCHIhwh8IhZCDIhEiHIhcBMIAii9IhqAaIBLirIiAgNIBsiLIiIg5ICBhkIh7hhg");
	this.shape_241.setTransform(81.8,119.2);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#FFFF00").s().p("Ak5F2IhcBMIAii9IhqAaIBLirIh/gNIBriLIiHg5ICAhkIh7hhIgFgCIDBABIgxhSIC5AtIgRhwICkBUIAYiDICCByIBEiHIBaCDIBvh8IAQAwIgIB8IBbgrIg4C2IB3gIIhdCdICFAjIh3B4ICGBPIiEBOIA6A/IjAgXIAjBjIiwhCIgDB8IiUhlIgtCHIhwh8IhZCDg");
	this.shape_242.setTransform(81.8,119.2);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("#0000FF").ss(1,1,1).p("Ao7lpICnABIAGg3ICiAeIAchLICUA4IA2hXIB9BMIBUhaIBjBXIBxhTIAXAgIgFBsIA9AKIglCgIBPAhIg+CPIBZA9IhQB4IBZBcIhXBZIgCAqIimgPIgPBCIidgsIgoBSIiJhDIhFBaIhxhTIhiBYIhThaIgrAZIggAAIAXilIhHgVIAyiYIhVgwIBIiDIhahNIBVhpIhRhmg");
	this.shape_243.setTransform(82.3,119.8);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FFFF00").s().p("AmLGhIgrAZIgggBIAXilIhHgVIAyiYIhVgvIBIiEIhahMIBVhqIhRhlIgEgCICnABIAGg3ICiAeIAchLICUA4IA2hXIB9BMIBUhaIBjBXIBxhSIAXAfIgFBsIA9AKIglCgIBPAhIg+CQIBZA9IhQB3IBZBbIhXBaIgCArIimgQIgPBCIidgrIgoBSIiJhEIhFBaIhxhTIhiBYg");
	this.shape_244.setTransform(82.3,119.8);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f().s("#0000FF").ss(1,1,1).p("ApJmuICOAAIA8gbICMAPIBHgmICEAcIBVgrIB5AmIBkgtIBrAsIBygqIAgAQIgCBbIAeA/IgTCKIAoBKIgfCBIAsBZIgnB2IAsBnIgsBnIg8AVIiNgIIhCAhIiIgWIhOAqIh+giIhcAtIhzgpIhqArIhjgtIgpANIgQgnIALiNIgjhEIAZiGIgrhSIAkh7IgthgIArhvIgphqg");
	this.shape_245.setTransform(82.8,120.5);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FFFF00").s().p("AndHKIgpANIgQgnIALiNIgjhEIAZiGIgrhSIAkh7IgthgIArhvIgphqIgCgBICOABIA8gcICMAPIBHgmICEAdIBVgsIB5AmIBkgtIBrAsIBygqIAgAQIgCBbIAeA/IgTCKIAoBLIgfCAIAsBZIgnB2IAsBoIgsBmIg8AVIiNgIIhCAhIiIgWIhOApIh+ghIhcAsIhzgoIhqArg");
	this.shape_246.setTransform(82.8,120.5);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f().s("#0000FF").ss(1,1,1).p("AJYnzIAAPnIyvAAIAAvng");
	this.shape_247.setTransform(83.3,121.1);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FFFF00").s().p("ApXH0IAAvnISvAAIAAPng");
	this.shape_248.setTransform(83.3,121.1);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("#0000FF").ss(1,1,1).p("AJYH0IyvAAIAAvnISvAAg");
	this.shape_249.setTransform(83.3,121.1);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FFFF33").s().p("ApXH0IAAvnISvAAIAAPng");
	this.shape_250.setTransform(83.3,121.1);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("#0000FF").ss(1,1,1).p("ApRmhIQzgnIBwNsIwbAlg");
	this.shape_251.setTransform(84.5,127.9);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FFFF33").s().p("ApRmhIQzgnIBwNsIwbAlg");
	this.shape_252.setTransform(84.5,127.9);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("#0000FF").ss(1,1,1).p("ApLlPIO4hOIDfLwIuHBLg");
	this.shape_253.setTransform(85.7,134.6);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FFFF33").s().p("ApLlPIO4hOIDfLwIuHBLg");
	this.shape_254.setTransform(85.7,134.6);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f().s("#0000FF").ss(1,1,1).p("ApFj+IM8hzIFPJ0IrzBvg");
	this.shape_255.setTransform(86.8,141.4);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#FFFF33").s().p("ApFj+IM8hzIFPJ0IrzBvg");
	this.shape_256.setTransform(86.8,141.4);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f().s("#0000FF").ss(1,1,1).p("Ao/isILAiaIG/H5IpgCUg");
	this.shape_257.setTransform(88,148.2);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#FFFF33").s().p("Ao/isILAiaIG/H5IpgCUg");
	this.shape_258.setTransform(88,148.2);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f().s("#0000FF").ss(1,1,1).p("Ao5haIJEjBIIvF9InNC6g");
	this.shape_259.setTransform(89.2,154.9);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#FFFF33").s().p("Ao5haIJEjBIIvF+InNC5g");
	this.shape_260.setTransform(89.2,154.9);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f().s("#0000FF").ss(1,1,1).p("Ao0gIIHKjoIKfECIk6Dfg");
	this.shape_261.setTransform(90.4,161.7);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#FFFF33").s().p("AozgIIHKjoIKdECIk5Dfg");
	this.shape_262.setTransform(90.4,161.7);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("#0000FF").ss(1,1,1).p("AotBJIFOkOIMNCIIilEDg");
	this.shape_263.setTransform(91.5,168.4);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#FFFF33").s().p("AotBJIFOkNIMNCHIilEDg");
	this.shape_264.setTransform(91.5,168.4);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f().s("#0000FF").ss(1,1,1).p("AlViZIN+AMIgSEnIw/AAg");
	this.shape_265.setTransform(92.7,175.2);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#FFFF33").s().p("AooCaIDTkzIN+AMIgSEng");
	this.shape_266.setTransform(92.7,175.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_207},{t:this.shape_206}]},9).to({state:[{t:this.shape_209},{t:this.shape_208}]},1).to({state:[{t:this.shape_211},{t:this.shape_210}]},1).to({state:[{t:this.shape_213},{t:this.shape_212}]},1).to({state:[{t:this.shape_215},{t:this.shape_214}]},1).to({state:[{t:this.shape_217},{t:this.shape_216}]},1).to({state:[{t:this.shape_219},{t:this.shape_218}]},1).to({state:[{t:this.shape_221},{t:this.shape_220}]},1).to({state:[{t:this.shape_223},{t:this.shape_222}]},1).to({state:[{t:this.shape_225},{t:this.shape_224}]},1).to({state:[{t:this.shape_227},{t:this.shape_226}]},1).to({state:[{t:this.shape_229},{t:this.shape_228}]},1).to({state:[{t:this.shape_231},{t:this.shape_230}]},1).to({state:[{t:this.shape_233},{t:this.shape_232}]},1).to({state:[{t:this.shape_235},{t:this.shape_234}]},1).to({state:[{t:this.shape_235},{t:this.shape_236}]},7).to({state:[{t:this.shape_238},{t:this.shape_237}]},1).to({state:[{t:this.shape_240},{t:this.shape_239}]},1).to({state:[{t:this.shape_242},{t:this.shape_241}]},1).to({state:[{t:this.shape_244},{t:this.shape_243}]},1).to({state:[{t:this.shape_246},{t:this.shape_245}]},1).to({state:[{t:this.shape_248},{t:this.shape_247}]},1).to({state:[{t:this.shape_250},{t:this.shape_249}]},45).to({state:[{t:this.shape_252},{t:this.shape_251}]},1).to({state:[{t:this.shape_254},{t:this.shape_253}]},1).to({state:[{t:this.shape_256},{t:this.shape_255}]},1).to({state:[{t:this.shape_258},{t:this.shape_257}]},1).to({state:[{t:this.shape_260},{t:this.shape_259}]},1).to({state:[{t:this.shape_262},{t:this.shape_261}]},1).to({state:[{t:this.shape_264},{t:this.shape_263}]},1).to({state:[{t:this.shape_266},{t:this.shape_265}]},1).wait(1));

	// E
	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f().s("#0000FF").ss(1,1,1).p("AArArQgSASgZAAQgYAAgSgSQgSgSAAgZQAAgYASgSQASgSAYAAQAZAAASASQASASAAAYQAAAZgSASg");
	this.shape_267.setTransform(254,204.3,0.781,0.781);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#FF0066").s().p("AgqArQgSgSAAgZQAAgYASgSQASgSAYAAQAZAAASASQASASAAAYQAAAZgSASQgSASgZAAQgYAAgSgSg");
	this.shape_268.setTransform(254,204.3,0.781,0.781);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("#0000FF").ss(1,1,1).p("AhPgEQAJgDALgEQgIgJgGgJQAKAAAKAAQgEgLgCgLQAHABAKACQABABADABQAAgMAAgLQAIAGAIAHQAEgLAFgLQAGAJAFAIQAFgHAFgHQACgCACgCQACAKADAKQAKgHAKgGQgBALAAAKQAMgCALgCQgGAIgFAJQANABALABQgHAHgHAHQALAFALAFQgIAFgJAFQAJAHAIAIQgBAAgBgBQgIACgJACQAGAKAGALQgKgBgKgCQACANACAMQgJgFgIgFQgCAMgCAMQgGgHgHgIQgFALgGALQgEgJgFgIQgFAFgHAGQgDADgDACQgCgJAAgKQgLAFgLAFQACgKADgKQgNACgMAAQABgDABgDQAEgFAEgGQgNgDgLgCQAIgGAIgFQgLgHgKgHg");
	this.shape_269.setTransform(251.1,196.9);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#ED0B71").s().p("AAEA/IgOALIgFAFIgCgTIgWAKIAFgUIgZACIACgGIAIgLIgYgFIAQgLIgVgOIgBgJIAUgHIgPgSIAVAAIgGgWIARADIADACIABgXIAQANIAJgWIALARIAKgOIAEgEIAEAUIAVgNIgCAVIAYgEIgKARIAWACIgNAOIAVAKIgQAKIARAPIgCgBIgRAEIAMAVIgUgDIAEAZIgRgKIgEAYIgNgPIgLAWIgIgRg");
	this.shape_270.setTransform(251.1,196.9);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f().s("#0000FF").ss(1,1,1).p("AhxgLQAUgDATgCQgPgPgOgPQATADAUAEQgJgTgJgTQAOAGAOAHQAEACAEADQgDgVgCgUQANAOANAPQAFgVAEgUQAIASAIASQAIgOAIgOQACgEACgEQACAUABATQARgOAQgNQgFATgFATQAUgHAUgHQgMAPgMAQQAXgBATgBQgPAMgQAMQAVAGAUAGQgSAGgSAFQARANARAMQgCgBgDAAQgQAAgRgBQAMASANARQgSgGgTgGQAHAVAFAVQgOgMgPgMQgBAVgBAUQgKgQgKgQQgIAUgHAUQgFgSgDgSQgLALgKAKQgEAGgFAGQACgTACgUQgTAMgSAKQAIgRAIgSQgWAFgVAEQAEgFAEgFQAJgJAJgKQgWgCgVgCQARgJARgIQgTgJgTgJg");
	this.shape_271.setTransform(248.3,189.6);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#DB167C").s().p("AAABNIgVAVIgJAMIAEgnIglAWIAQgjIgrAJIAIgKIASgTIgrgEIAigRIgmgSIgCgKIAngFIgdgeIAnAHIgSgmIAcANIAIAFIgFgpIAaAdIAJgpIAQAkIAQgcIAEgIIADAnIAhgbIgKAmIAogOIgYAfIAqgCIgfAYIApAMIgkALIAiAZIgFgBIghgBIAZAjIglgMIAMAqIgdgYIgCApIgUggIgPAoIgIgkg");
	this.shape_272.setTransform(248.3,189.6);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f().s("#0000FF").ss(1,1,1).p("AiSgRQAdgCAdgDQgXgUgWgVQAcAHAdAHQgPgbgOgaQAUALAUAMQAFADAGAEQgFgegFgeQASAXASAXQAFgeAFgeQAKAcAJAbQALgVALgUQADgGADgGQABAdAAAdQAWgVAXgVQgJAcgJAcQAcgMAcgMQgTAWgSAXQAggDAcgDQgYAQgYAQQAeAIAdAHQgbAHgcAHQAaAQAaARQgEgBgEgBQgZgBgZgCQAUAYATAYQgbgLgbgLQALAdAJAeQgUgTgUgUQgBAeAAAfQgOgZgOgaQgJAegKAdQgDgcgGgcQgNAQgNAQQgGAJgHAIQAEgcAFgdQgaASgZARQANgaAOgZQgeAIgfAHQAHgHAGgGQAOgNAPgOQgfgCgfgCQAbgLAagLQgdgMgcgMg");
	this.shape_273.setTransform(245.5,182.3);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#C82187").s().p("AgGBbIgaAgIgNARIAJg5IgzAjIAbgzIg9APIANgNIAdgbIg+gEIA1gWIg5gYIgBgJIA6gFIgtgpIA5AOIgdg1IAoAXIALAHIgKg8IAkAuIAKg8IATA3IAWgpIAGgMIABA6IAtgqIgSA4IA4gYIglAtIA8gGIgwAgIA7APIg3AOIA0AhIgIgCIgygDIAnAwIg2gWIAUA7IgognIgBA9IgcgzIgTA7IgJg4g");
	this.shape_274.setTransform(245.5,182.3);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f().s("#0000FF").ss(1,1,1).p("Ai0gXQAngCAngCQgegagegaQAlAKAlALQgUgjgTgiQAZAPAaARQAHAFAHAFQgIgngIgnQAXAfAYAgQAFgoAGgnQAMAlALAlQANgcAOgcQAEgIAEgIQgBAngBAnQAdgdAdgbQgOAkgNAlQAlgRAkgRQgaAdgZAdQAqgEAlgFQggAUghAUQAnAJAnAJQglAJgmAIQAjAUAiAVQgFgBgFgBQghgDghgEQAaAfAZAfQgigQgjgQQAOAmAOAmQgbgagagbQgBAnACAoQgSgigRgiQgLAngLAmQgFgmgGglQgQAVgRAVQgIAMgIALQAHgmAHglQghAXghAXQATghAUgiQgnALgnALQAJgIAIgJQAUgRAUgRQgpgCgogBQAkgOAjgPQglgOgmgPg");
	this.shape_275.setTransform(242.7,175);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#B62C92").s().p("AgLBpIghArIgQAWIAOhKIhCAtIAnhCIhOAWIARgRIAogiIhRgEIBHgcIhLgdIgBgIIBOgFIg8g0IBKAWIgnhGIAzAhIAOAKIgQhOIAvA+IALhPIAXBLIAbg4IAIgQIgCBNIA6g3IgbBIIBJghIgzA6IBPgJIhBAoIBOARIhLARIBFAqIgKgCIhCgHIAzA+IhFghIAcBNIg1g1QgBAnACAoIgjhEIgWBMIgLhLg");
	this.shape_276.setTransform(242.7,175);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f().s("#0000FF").ss(1,1,1).p("AjWgdQAxgCAwgCQgmggglgfQAuAOAuANQgZgqgZgqQAfAVAfAVQAJAHAIAGQgKgwgLgwQAcAnAdAoQAGgyAGgwQAOAuANAuQAQgiARgjQAFgKAEgKQgCAwgBAxQAjgkAjgjQgTAtgRAuQAtgWAtgVQghAkggAkQA0gHAugGQgpAZgqAYQAxAKAxAKQgwAJgvAKQArAZAsAYQgHgBgGgBQgpgFgqgFQAgAmAhAlQgrgUgsgWQATAvASAuQghghghghQABAwACAxQgUgrgVgrQgOAwgNAvQgGgvgGgvQgTAagUAbQgKAOgJAOQAJgvAKgvQgoAdgoAdQAYgpAZgpQgwAPgvAOQALgKALgLQAZgVAZgUQgygCgxgBQAtgRAsgSQgugQgugSg");
	this.shape_277.setTransform(239.9,167.6);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#A4379D").s().p("AgRB4IgmA1IgUAcIAUheIhRA6IAxhSIhfAdIAWgVIAzgpIhkgDIBagjIhegiIgBgHIBhgEIhLg/IBdAbIgzhUIA+AqIARANIgUhgIA4BPIAMhiIAbBcIAghFIAKgUIgDBhIBGhHIgkBbIBagrIhBBIIBigNIhTAxIBiAUIhfATIBWAxIgMgCIhTgKIBBBLIhXgqIAlBdIhBhCQAAAwACAxIgqhWIgaBfIgMheg");
	this.shape_278.setTransform(239.9,167.6);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f().s("#0000FF").ss(1,1,1).p("Aj3gjQA6gCA6gBQgugmgtglQA3ARA4ASQgfgzgfgxQAlAZAlAbQALAHAKAIQgOg5gMg5QAgAvAiAwQAGg7AGg6QARA4APA4QATgqATgpQAGgMAFgMQgDA6gDA6QApgrApgqQgVA1gWA2QA1gaA0gbQgmArgnArQA+gIA3gIQgyAdgzAdQA6ALA6ALQg4AKg5ALQA0AeAzAdQgIgCgHgBQgygHgygHQAoAtAnAsQgzgZg1gbQAXA4AWA3QgmgpgngoQABA5ADA6QgYg0gZg0QgPA5gPA5QgHg5gGg5QgWAggXAgQgLARgMARQANg4AMg5QgwAkgwAjQAfgxAfgyQg6ASg4ASQAOgMAOgMQAfgZAegZQg8gBg7gBQA2gUA2gUQg4gTg3gVg");
	this.shape_279.setTransform(237.1,160.3);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#9242A8").s().p("AgWCGIgtBAIgXAiIAZhxIhgBHIA+hjIhyAkIAcgYIA9gyIh3gCIBsgoIhvgoIgBgGIB0gDIhbhLIBvAjIg+hkIBKA0IAUAPIgahyIBDBfIAMh1IAgBwIAmhTIALgYIgGB0IBShVIgrBrIBpg1IhNBWIB1gQIhlA6IB0AWIhxAVIBnA7IgPgDIhjgOIBNBZIhmg0IAsBvIhOhRQABA5AEA6IgxhoIgeByIgNhyg");
	this.shape_280.setTransform(237.1,160.3);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f().s("#0000FF").ss(1,1,1).p("AkZgqQBEAABEgCQg2grg1gqQBBAUBAAVQgkg6glg6QArAfArAfQAMAJAMAKQgQhDgQhCQAmA4AmA4QAHhFAHhEQASBCARBBQAWgxAWgwQAGgOAHgOQgEBEgFBDQAwgyAvgxQgaA+gaA/QA9gfA9ggQguAygtAyQBIgKA/gKQg6Ahg7AhQBDANBEAMQhCAMhDAMQA8AiA8AhQgIgCgJgBQg6gIg6gJQAuAzAtAzQg7geg9gfQAbA/AaBAQgsgwgtgvQABBCAFBEQgcg9gcg+QgSBDgRBCQgGhCgHhDQgaAlgZAlQgOAUgNAUQAPhCAPhCQg3Aqg3ApQAkg5Akg5QhBAVhCAWQARgOAQgOQAkgdAjgdQhEAAhFgBQA/gXBAgXQhBgWhBgYg");
	this.shape_281.setTransform(234.3,153);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#804DB3").s().p("AgbCUIgzBLIgbAnIAeiDIhuBTIBIhzIiDAsIAhgcIBHg6IiJgCIB/gtIiCguIgBgGICIgCIhrhWICBAqIhJh0IBWA+IAYASIggiFIBMBxIAOiJIAjCCIAshgIANgcIgJCHIBfhkIg0B+IB6g/IhbBkICHgUIh1BCICHAZIiFAYIB4BCIgRgDIh0gRIBbBnIh4g9IA1B/IhZhgQABBCAFBEIg4h6IgjCFIgNiGg");
	this.shape_282.setTransform(234.3,153);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f().s("#0000FF").ss(1,1,1).p("Ak6gwQBNAABOgBQg+gwg9gyQBKAZBJAYQgqhBgphCQAwAkAwAjQAOALAOAKQgThLgShMQArBBArBAQAHhOAIhOQAUBLATBKQAYg2AZg4QAHgQAHgPQgFBNgGBNQA2g5A2g5QgfBHgeBIQBGglBFgkQg1A5g0A5QBSgNBIgLQhDAmhEAlQBNAOBNANQhLANhMAOQBEAlBEAmQgJgCgKgCQhDgKhCgKQA1A6A0A6QhEgkhFgjQAfBIAfBIQgzg3gzg3QACBLAGBOQgghGgghGQgTBMgTBLQgHhMgIhNQgcAqgdAqQgPAXgQAXQAShLAShLQg+Awg+AvQAphBAqhBQhKAZhLAZQATgQAUgQQAoghApggQhOAAhOgBQBJgZBIgbQhKgZhKgag");
	this.shape_283.setTransform(231.5,145.6);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#6D57BD").s().p("AghCiIg5BVIgfAuIAkiWIh8BfIBTiCIiVAyIAnggIBRhBIicgBICRg0IiUgzIAAgFICbgBIh7hhICTAwIhTiDIBgBHIAcAVIgliXIBWCAIAPibIAnCWIAxhvIAOgfIgLCZIBshyIg9CPICLhIIhpByICagYIiHBLICaAbIiXAbICIBLIgTgEIiFgUIBpB0IiJhIIA+CQIhmhtQACBLAGBOIhAiMIgmCWIgPiZg");
	this.shape_284.setTransform(231.5,145.6);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f().s("#0000FF").ss(1,1,1).p("Alcg2QBXAABXgBQhFg2hEg2QBSAbBTAdQgwhKgvhJQA2AoA2AoQAPAMAQANQgVhVgVhVQAwBIAwBJQAHhXAIhYQAWBVAVBUQAcg+Abg/QAIgRAIgSQgGBXgHBWQA8hAA7hAQgiBQgiBQQBNgpBNgpQg6A/g7BAQBcgOBRgNQhNAphMArQBXAPBWAOQhVAOhWAPQBNAqBNAqQgLgCgLgCQhLgMhLgMQA8BCA7BAQhNgphNgpQAjBRAjBRQg5g+g5g+QADBUAGBXQgjhPgjhQQgVBWgWBUQgHhWgIhWQggAwgfAvQgRAagSAZQAVhUAVhUQhGA2hFA2QAvhKAvhIQhTAbhUAdQAWgSAWgRQAugkAugmQhXAAhYAAQBSgcBSgcQhTgdhTgdg");
	this.shape_285.setTransform(228.7,138.3);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#5B62C8").s().p("AgmCxIg/BfIgjA0IAqipIiLBsIBeiSIinA4IAsgjIBchJIivgBICkg5Iimg5IgBgEICugBIiJhsIClA4IhfiUIBsBRIAfAZIgqiqIBgCRIAPiuIArCoIA3h8IAQgkIgNCtIB3iAIhECgICahTIh1CBICtgcIiZBUICtAdIirAdICaBUIgWgEIiWgYIB3CCIiahSIBGCiIhyh8QADBUAGBXIhGieIgrCpIgPisg");
	this.shape_286.setTransform(228.7,138.3);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f().s("#0000FF").ss(1,1,1).p("Al+g8QBiAABgAAQhNg8hNg8QBdAfBbAfQg1hRg1hRQA8AtA8AuQARANARAOQgYhegYheQA1BRA1BQQAJhgAIhhQAXBdAYBeQAehFAehFQAJgUAJgUQgIBhgIBgQBDhIBBhHQgmBZgnBYQBWguBVguQhBBHhCBHQBmgRBagOQhVAuhVAuQBgAQBgAQQhfAPhfAQQBVAvBVAuQgMgCgMgDQhTgNhTgOQBCBIBBBIQhUguhWguQAoBZAmBaQg/hFg/hFQAEBdAHBgQgmhYgnhYQgXBegYBeQgIhfgIhhQgjA1gjA1QgTAcgTAdQAYhdAXheQhNA8hMA7QA0hRA1hQQhcAfhdAgQAZgUAZgTQAygoA0gpQhhABhhgBQBbgfBbgfQhcgfhcggg");
	this.shape_287.setTransform(226,130.9);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#496DD3").s().p("AgsC/IhFBqIgmA5IAvi7IiaB3IBpihIi4A/IAxgnIBnhRIjCAAIC2g+Ii4g/IAAgDIDBAAIiah4IC4A+IhqiiIB4BbIAiAbIgwi8IBqChIARjBIAuC7IA9iKIARgoIgPDBICEiPIhNCxICrhcIiDCOIC/gfIiqBcIDBAgIi/AfICrBdIgYgFIingbICFCQIirhcIBOCzIh+iKQAEBdAHBgIhOiwIguC8IgRjAg");
	this.shape_288.setTransform(226,130.9);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f().s("#0000FF").ss(1,1,1).p("AmfhDQBqABBrAAQhVhBhUhCQBlAjBkAiQg6hZg7hZQBCAyBBAzQATAPASAOQgahngbhnQA6BZA7BZQAIhqAJhqQAaBnAZBnQAihMAghMQAJgWAKgWQgJBqgJBqQBJhPBIhOQgrBhgrBhQBegzBegyQhJBOhIBNQBwgSBigRQhdAzheAyQBqARBpASQhoAQhpARQBdAzBfAyQgNgCgPgCQhagPhcgQQBJBPBIBOQhdgzhegyQAsBiAqBhQhFhMhGhMQAFBmAJBrQgqhigrhhQgZBngaBoQgJhqgIhqQgmA7gmA5QgVAggUAgQAahnAahnQhUBChUBBQA6hZA6hZQhlAjhkAjQAagVAbgVQA5gsA5gsQhrAAhrAAQBlgiBlgiQhmgihlgig");
	this.shape_289.setTransform(223.2,123.6);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#3778DE").s().p("AgxDOIhMB0IgpA/IA0jOIioCDIB0ixIjJBFIA1gqIByhYIjVABIDIhFIjJhEIgBgDIDUABIioiCIDJBFIh1iyICDBkIAmAdIg1jOIB0CyIARjUIAzDOIBCiYIATgrIgRDTICQidIhWDCIC8hlIiRCbIDTgjIi7BlIDSAjIjRAhIC8BmIgbgFIi3geICRCcIi6hlIBVDEIiLiYQAFBlAJBrIhVjDIgzDPIgRjTg");
	this.shape_290.setTransform(223.2,123.6);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f().s("#0000FF").ss(1,1,1).p("AnBhIQB0AAB0AAQhchGhchIQBuAnBtAmQhAhhg/hhQBHA3BHA3QAUARAUAQQgdhwgdhxQA/BhA/BhQAJhzAKh0QAcBxAbBwQAjhSAkhUQAKgXALgYQgKB0gKBzQBOhWBPhWQgwBqgvBqQBng3Bmg4QhQBVhPBUQB6gUBrgSQhmA3hmA1QBzAUByASQhyAShyASQBmA3BnA2QgPgCgPgDQhjgQhkgRQBQBVBPBVQhmg3hmg4QAvBrAwBqQhMhUhLhTQAFBvAKB0QguhqgvhqQgaBwgcBxQgJhzgKh0QgoA/gpBAQgXAigWAiQAdhwAchwQhbBIhbBHQA/hgBAhhQhtAmhvAnQAegYAegWQA+gwA+gwQh0ABh1AAQBuglBuglQhuglhvglg");
	this.shape_291.setTransform(220.4,116.3);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#2483E9").s().p("Ag2DcIhSB/IgtBEIA5jgIi2CPICAjBIjdBMIA8gtIB8hgIjpABIDchKIjchKIAAgBIDoAAIi5iOIDcBNIiAjCICOBvIApAgIg7jhIB+DDIATjoIA3DhIBHilIAVgwIgUDnICdisIhfDVIDNhwIieCpIDkgmIjMBtIDmAlIjlAkIDNBtIgdgEIjHgiICeCqIjLhvIBeDUIiXimQAFBvAKB0IhcjVIg3DhIgSjmg");
	this.shape_292.setTransform(220.4,116.3);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f().s("#0000FF").ss(1,1,1).p("AnihPQB+ABB9ABQhkhMhkhNQB3ApB3AqQhGhphFhoQBNA8BMA8QAWARAWASQgfh5ggh6QBEBqBEBpQAKh9AJh+QAeB6AdB6QAnhaAmhZQALgaALgaQgKB+gMB9QBVheBUhdQgzBzgzBzQBug9Bug9QhVBchWBcQCEgXB0gUQhvA7hvA7QB8AUB8AUQh8ATh8AUQBvA7BvA7QgPgDgRgDQhrgShsgTQBWBdBVBbQhug8hug9QA0BzAzBzQhShahRhbQAFB4ALB9Qgxhzgyh0QgdB7geB5QgJh8gKh+QgsBFgsBFQgYAkgYAmQAgh6Afh5QhjBOhjBNQBGhoBFhpQh2Aqh3AqQAggZAggZQBEg0BDg0Qh+ACh+AAQB3gnB3gpQh3gnh3gog");
	this.shape_293.setTransform(217.6,108.9);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#128EF4").s().p("Ag8DrIhYCJIgwBKIA/jzIjGCbICLjRIjtBUIBAgxICHhpIj8ADIDuhQIjuhPIAAgBID7ACIjIiaIDuBTIiLjRICZB4IAsAjIg/jzICIDTIATj6IA7D0IBNi0IAWg0IgWD7ICpi7IhmDmIDch6IirC4ID4gqIjeB1ID4AoIj4AnIDeB2IgggGIjXglICrC4Ijch5IBnDmIiji1QAFB4ALB9IhjjnIg7D0IgTj5g");
	this.shape_294.setTransform(217.6,108.9);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f().s("#0000FF").ss(1,1,1).p("AjNidIiWjhIDUCoIhEkFICSDjIAUkNIA/EGIBqj4IgYENIC1jJIhvD3IDtiDIi5DGIELgvIjvB/IELApIkLAqIDvB/IkLgvIC5DGIjtiDIBvD3Ii1jJIAYENIhqj4Ig/EGIgUkNIiSDjIBEkFIjUCoICWjhIj/BaIDXilIkPADIEBhWIkBhVIEPADIjXilg");
	this.shape_295.setTransform(214.8,101.6);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#0099FF").s().p("AhBD5IiSDjIBEkFIjUCoICWjhIj/BaIDXilIkPADIEBhWIkBhVIEPADIjXilID/BaIiWjhIDUCoIhEkFICSDjIAUkNIA/EGIBqj4IgYENIC1jJIhvD3IDtiDIi5DGIELgvIjvB/IELApIkLAqIDvB/IkLgvIC5DGIjtiDIBvD3Ii1jJIAYENIhqj4Ig/EGg");
	this.shape_296.setTransform(214.8,101.6);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f().s("#0000FF").ss(1,1,1).p("AnMj3ID/BaIiWjhIDUCoIhEkFICSDjIAUkNIA/EGIBqj4IgYENIC1jJIhvD3IDtiDIi5DGIELgvIjvB/IELApIkLAqIDvB/IkLgvIC5DGIjtiDIBvD3Ii1jJIAYENIhqj4Ig/EGIgUkNIiSDjIBEkFIjUCoICWjhIj/BaIDXilIkPADIEBhWIkBhVIEPADg");
	this.shape_297.setTransform(214.8,101.6);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f().s("#0000FF").ss(1,1,1).p("AoPiaID1ACIigiJIDnBLIhqi7IDECMIgmjaICNC+IAijhIBJDbIBrjPIAAA0IgQC7ICYiVIhdDhIDGhaIibC4IDegUIjHB7IDfA3IjfA2IC0BpIjxgnICIClIjZhtIBKDOIirioIACDhIhrjPIhIDaIgkjgIh+CvIA5jtIixB5IB9jPIjVA4IC0icIjigRIDWhZIjWhag");
	this.shape_298.setTransform(215,103);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#0099FF").s().p("AiTEjIh+CuIA5jsIixB4IB9jOIjVA4IC0icIjigRIDWhZIjWhbIAAAAID1ACIigiJIDnBLIhqi7IDECLIgmjZICNC9IAijgIBJDaIBrjPIAAA1IgQC7ICYiVIhdDhIDGhbIibC5IDegUIjHB7IDfA3IjfA2IC0BpIjxgnICIClIjZhuIBKDOIirinIACDgIhrjPIhIDbg");
	this.shape_299.setTransform(215,103);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f().s("#0000FF").ss(1,1,1).p("AoajfIDbACIhqhuIDRA8Ig+iWICzBwIgIiuICHCXIAzizIBQCvIBtimIAFAqIgMCnIB5hgIhKDKICegxIh8CqICyAHIifB5ICyBCIiyBCIB5BVIjXgfIBVCEIjEhYIAkClIifiGIgWC0IhsimIhQCvIg0i0IhqB7IAujUIiNBKIBki8IirAWICQiUIi1gjICrhfg");
	this.shape_300.setTransform(215.2,104.3);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#0099FF").s().p("AjlFMIhqB7IAujUIiNBKIBki8IirAWICQiUIi1gjICrhfIirhgIDbACIhqhuIDRA8Ig+iWICzBwIgIiuICHCXIAzizIBQCvIBtimIAFAqIgMCnIB5hgIhKDKICegxIh8CqICyAHIifB5ICyBCIiyBCIB5BVIjXgfIBVCEIjEhYIAkClIifiGIgWC0IhsimIhQCvg");
	this.shape_301.setTransform(215.2,104.3);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f().s("#0000FF").ss(1,1,1).p("AolkkIDBACIgzhTIC5AtIgShwICjBUIAXiDICBByIBCiHIBZCDIBvh8IAKAgIgKCSIBbgrIg3C0IB2gIIhcCcICFAhIh4B4ICGBOIiGBOIA/BAIi+gYIAjBjIivhBIgCB7IiThkIgsCGIhuh8IhZCDIhDiGIhWBGIAii8IhqAbIBLipIiAgMIBsiLIiIg3ICBhkIiBhkg");
	this.shape_302.setTransform(215.4,105.7);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#0099FF").s().p("Ak2F3IhWBFIAii7IhqAbIBLipIiAgNIBsiKIiIg3ICBhkIiBhlIAAAAIDBACIgzhTIC5AtIgShwICjBTIAXiCICBBxIBCiGIBZCDIBvh8IAKAgIgKCSIBbgsIg3C1IB2gJIhcCdICFAhIh4B4ICGBNIiGBPIA/A/Ii+gXIAjBjIivhCIgCB8IiThkIgsCGIhuh8IhZCDg");
	this.shape_303.setTransform(215.4,105.7);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f().s("#0000FF").ss(1,1,1).p("AowlpICmABIAFg3IChAeIAahLICTA4IA1hXIB7BMIBThaIBhBXIBwhTIAPAVIgGB/IA8AJIglCfIBPAgIg9COIBYA7IhPB2IBZBbIhZBaIAEAqIilgPIgOBCIibgsIgnBSIiIhDIhEBaIhvhTIhiBYIhShaIgdASIglAAIAXijIhHgUIAyiXIhVguIBHiCIhahLIBWhpIhWhog");
	this.shape_304.setTransform(215.6,107.1);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#0099FF").s().p("AmIGgIgdASIglAAIAXijIhHgUIAyiXIhVguIBHiCIhahLIBWhpIhWhoIAAgBICmABIAFg3IChAeIAahLICTA4IA1hXIB7BMIBThaIBhBXIBwhTIAPAWIgGB/IA8AJIglCeIBPAgIg9COIBYA7IhPB2IBZBbIhZBaIAEAqIilgPIgOBCIibgsIgnBSIiIhCIhEBaIhvhUIhiBYg");
	this.shape_305.setTransform(215.6,107.1);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f().s("#0000FF").ss(1,1,1).p("Ao7muICMABIA7gcICKAPIBGglICCAcIBTgsIB3AmIBigtIBqAsIBxgqIAUALIgDBrIAeA9IgSCIIAnBKIgeB+IAsBYIgoB0IAtBmIgtBmIg2AWIiMgIIhAAhIiHgWIhMApIh8ghIhbAtIhxgqIhqAsIhigtIgbAJIgTgrIALiLIgjhDIAZiEIgqhQIAjh6IgtheIArhuIgrhtg");
	this.shape_306.setTransform(215.8,108.4);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#0099FF").s().p("AnaHKIgbAJIgTgrIALiLIgjhDIAZiEIgqhQIAjh6IgtheIArhuIgrhtIAAgBICMABIA7gcICKAPIBGglICCAcIBTgsIB3AmIBigtIBqAsIBxgqIAUALIgDBrIAeA9IgSCIIAnBKIgeB+IAsBYIgoB0IAtBmIgtBmIg2AWIiMgIIhAAhIiHgWIhMApIh8ghIhbAtIhxgqIhqAsg");
	this.shape_307.setTransform(215.8,108.4);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f().s("#0000FF").ss(1,1,1).p("AJHH0IyNAAIAAvnISNAAg");
	this.shape_308.setTransform(216,109.8);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#0099FF").s().p("ApGH0IAAvnISNAAIAAPng");
	this.shape_309.setTransform(216,109.8);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f().s("#0000FF").ss(1,1,1).p("Ao1mWIQPg+IBcNqIvrA+g");
	this.shape_310.setTransform(215.3,116.8);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#0099FF").s().p("Ao1mWIQPg+IBcNqIvrA+g");
	this.shape_311.setTransform(215.3,116.8);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f().s("#0000FF").ss(1,1,1).p("Aokk4IORh8IC4LtItJB8g");
	this.shape_312.setTransform(214.5,123.8);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#0099FF").s().p("Aokk4IORh8IC4LtItJB8g");
	this.shape_313.setTransform(214.5,123.8);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f().s("#0000FF").ss(1,1,1).p("AoTjbIMTi6IEUJwIqoC6g");
	this.shape_314.setTransform(213.8,130.8);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#0099FF").s().p("AoTjbIMUi5IETJvIqoC7g");
	this.shape_315.setTransform(213.8,130.8);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f().s("#0000FF").ss(1,1,1).p("AoCh9IKWj4IFvHzIoGD4g");
	this.shape_316.setTransform(213.1,137.8);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#0099FF").s().p("AoCh9IKWj4IFvHzIoGD4g");
	this.shape_317.setTransform(213.1,137.8);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f().s("#0000FF").ss(1,1,1).p("AnxgfIIYk3IHLF2IllE3g");
	this.shape_318.setTransform(212.3,144.8);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#0099FF").s().p("AnxgfIIYk3IHLF2IllE3g");
	this.shape_319.setTransform(212.3,144.8);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f().s("#0000FF").ss(1,1,1).p("AngA9IGblzIImD6IjEFzg");
	this.shape_320.setTransform(211.6,151.8);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#0099FF").s().p("AngA9IGblzIImD6IjEFzg");
	this.shape_321.setTransform(211.6,151.8);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f().s("#0000FF").ss(1,1,1).p("AnPCbIEdmyIKCB9IgiGyg");
	this.shape_322.setTransform(210.9,158.8);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#0099FF").s().p("AnPCbIEdmyIKCB9IgiGyg");
	this.shape_323.setTransform(210.9,158.8);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f().s("#0000FF").ss(1,1,1).p("Alej3ILeAAIB/HvIv9AAg");
	this.shape_324.setTransform(216.5,165.8);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#0099FF").s().p("An+D4ICgnvILeAAIB/Hvg");
	this.shape_325.setTransform(216.5,165.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_268},{t:this.shape_267}]},9).to({state:[{t:this.shape_270},{t:this.shape_269}]},1).to({state:[{t:this.shape_272},{t:this.shape_271}]},1).to({state:[{t:this.shape_274},{t:this.shape_273}]},1).to({state:[{t:this.shape_276},{t:this.shape_275}]},1).to({state:[{t:this.shape_278},{t:this.shape_277}]},1).to({state:[{t:this.shape_280},{t:this.shape_279}]},1).to({state:[{t:this.shape_282},{t:this.shape_281}]},1).to({state:[{t:this.shape_284},{t:this.shape_283}]},1).to({state:[{t:this.shape_286},{t:this.shape_285}]},1).to({state:[{t:this.shape_288},{t:this.shape_287}]},1).to({state:[{t:this.shape_290},{t:this.shape_289}]},1).to({state:[{t:this.shape_292},{t:this.shape_291}]},1).to({state:[{t:this.shape_294},{t:this.shape_293}]},1).to({state:[{t:this.shape_296},{t:this.shape_295}]},1).to({state:[{t:this.shape_296},{t:this.shape_297}]},13).to({state:[{t:this.shape_299},{t:this.shape_298}]},1).to({state:[{t:this.shape_301},{t:this.shape_300}]},1).to({state:[{t:this.shape_303},{t:this.shape_302}]},1).to({state:[{t:this.shape_305},{t:this.shape_304}]},1).to({state:[{t:this.shape_307},{t:this.shape_306}]},1).to({state:[{t:this.shape_309},{t:this.shape_308}]},1).to({state:[{t:this.shape_309},{t:this.shape_308}]},39).to({state:[{t:this.shape_311},{t:this.shape_310}]},1).to({state:[{t:this.shape_313},{t:this.shape_312}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_317},{t:this.shape_316}]},1).to({state:[{t:this.shape_319},{t:this.shape_318}]},1).to({state:[{t:this.shape_321},{t:this.shape_320}]},1).to({state:[{t:this.shape_323},{t:this.shape_322}]},1).to({state:[{t:this.shape_325},{t:this.shape_324}]},1).wait(1));

	// R
	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f().s("#0000FF").ss(1,1,1).p("AArArQgSASgZAAQgYAAgSgSQgSgSAAgZQAAgYASgSQASgSAYAAQAZAAASASQASASAAAYQAAAZgSASg");
	this.shape_326.setTransform(254,204.3,0.781,0.781);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#FF0066").s().p("AgqArQgSgSAAgZQAAgYASgSQASgSAYAAQAZAAASASQASASAAAYQAAAZgSASQgSASgZAAQgYAAgSgSg");
	this.shape_327.setTransform(254,204.3,0.781,0.781);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f().s("#0000FF").ss(1,1,1).p("AhQgEQAKgEAKgDQgHgJgHgJQAKAAAKAAQgDgLgDgLQAIABAJACQACABACABQAAgMAAgLQAIAGAJAHQAEgLAEgLQAGAIAGAJQAFgHAFgHQABgCACgCQADAKACAKQAKgHAKgGQAAALgBAKQANgCAKgCQgFAIgFAIQAMABALACQgGAHgHAHQALAFAKAFQgIAFgIAFQAIAHAJAIQgBAAgBAAQgJABgIABQAGALAGALQgKgBgKgCQACANABAMQgIgFgIgFQgCAMgDAMQgGgIgGgHQgFALgGAKQgEgIgFgIQgGAFgHAGQgDACgCADQgCgKgBgJQgLAFgLAEQACgJADgKQgMABgNACQABgEABgDQAEgGAEgFQgMgCgLgDQAHgGAIgGQgKgFgLgIg");
	this.shape_328.setTransform(260.9,196.8);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#F0125F").s().p("AADA/IgMALIgGAFIgCgTIgXAKIAGgTIgaACIACgHIAIgLIgXgFIAPgMIgVgMIAAgKIATgGIgOgTIAVAAIgHgWIARAEIAEABIAAgXIARANIAIgWIANARIAJgNIADgFIAGAUIAUgNIgCAVIAXgEIgKARIAYACIgPAPIAXAJIgRALIASAOIgDAAIgRADIAMAVIgUgDIADAZIgQgKIgEAXIgOgOIgKAVIgJgQg");
	this.shape_329.setTransform(260.9,196.8);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f().s("#0000FF").ss(1,1,1).p("AhxgLQAUgCATgDQgOgPgPgPQATAEAUADQgJgTgJgTQAOAHAOAGQAEADAEACQgDgVgCgUQANAOANAPQAFgVAFgUQAIASAHASQAIgOAIgOQACgEACgEQACAUABATQARgOAQgNQgFATgFAUQAVgIATgGQgMAPgMAPQAXgBATgBQgPAMgQAMQAVAGAUAGQgSAGgSAGQARAMARAMQgCgBgDAAQgQAAgRAAQANARAMARQgSgGgSgGQAGAVAFAVQgOgMgOgMQgCAVgBAVQgKgQgKgRQgHAVgIATQgEgSgEgSQgKALgLAKQgEAGgFAGQACgTACgTQgTALgSAKQAIgRAIgSQgVAFgWAEQAEgFAEgFQAJgJAJgJQgWgDgVgCQARgIARgJQgTgJgTgJg");
	this.shape_330.setTransform(267.7,189.4);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#E22457").s().p("AAABMIgVAWIgJALIAEglIglAVIAQgjIgrAJIAIgKIASgTIgrgEIAigRIgmgSIgCgKIAngGIgdgdIAnAHIgSgmIAcANIAIAEIgFgoIAaAdIAKgpIAPAkIAQgcIAEgIIADAnIAhgbIgKAmIAogOIgYAfIAqgCIgfAXIApANIgkALIAiAZIgFgBIghAAIAZAiIgkgNIALArIgcgYQgCAVgBAVIgUghIgPAoIgIglg");
	this.shape_331.setTransform(267.7,189.4);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f().s("#0000FF").ss(1,1,1).p("AiSgRQAdgCAdgDQgXgUgWgVQAcAHAdAHQgPgbgOgaQAUALAUAMQAFADAGAEQgGgegFgeQASAXATAXQAFgeAFgeQAKAcAJAbQALgVALgUQADgGADgGQABAdAAAdQAWgVAXgVQgJAcgKAcQAdgMAcgMQgTAWgTAXQAhgDAcgDQgYAQgYAQQAeAIAdAHQgbAHgcAHQAaAQAaARQgEgBgEgBQgZgBgZgCQAUAYATAYQgbgLgbgLQALAdAJAeQgUgTgUgUQgBAeAAAfQgOgZgOgaQgJAegKAdQgDgcgGgcQgNAQgNAQQgHAJgGAIQAEgcAFgdQgaASgZAQQANgZAOgZQgeAIgfAHQAHgHAGgGQAOgOAPgNQgfgCgfgCQAbgLAagMQgdgLgcgMg");
	this.shape_332.setTransform(274.7,181.9);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#D33750").s().p("AgGBbIgaAgIgNARIAJg5IgzAiIAbgyIg9APIANgNIAdgbIg+gEIA1gXIg5gXIgBgJIA6gFIgtgpIA5AOIgdg1IAoAXIALAHIgLg8IAlAuIAKg8IATA3IAWgpIAGgMIABA6IAtgqIgTA4IA5gYIgmAtIA9gGIgwAgIA7APIg3AOIA0AhIgIgCIgygDIAnAwIg2gWIAUA7IgognIgBA9IgcgzIgTA7IgJg4g");
	this.shape_333.setTransform(274.7,181.9);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f().s("#0000FF").ss(1,1,1).p("Ai0gXQAngCAngCQgfgagegaQAmAKAlAKQgUgigUgjQAaAQAaARQAHAFAHAFQgIgngIgnQAXAfAXAgQAGgoAFgoQAMAlALAlQAOgcAOgbQAEgIAEgIQgBAngBAmQAdgcAcgcQgNAlgNAkQAkgQAkgRQgZAdgZAdQAqgFAlgEQghAUghAVQAoAIAnAJQglAJgmAHQAjAVAiAVQgFgBgFgBQghgDgigEQAaAfAaAfQgigQgkgQQAPAmANAmQgagagbgbQAAAnABAoQgRgigRgjQgMAngKAnQgGgmgFgmQgRAWgQAVQgIALgIAMQAHgmAHgmQghAYghAXQATgiATghQgnALgnALQAJgIAJgJQAUgRAUgRQgpgCgogCQAkgOAjgOQglgOgmgPg");
	this.shape_334.setTransform(281.6,174.5);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#C54949").s().p("AgLBpIghArIgQAXIAOhMIhCAvIAmhDIhOAWIASgRIAogiIhRgEIBHgcIhLgdIgBgIIBOgEIg9g0IBLAUIgohFIA0AhIAOAKIgQhOIAuA/IALhQIAXBKIAcg3IAIgQIgCBNIA5g4IgaBJIBIghIgyA6IBPgJIhCApIBPARIhLAQIBFAqIgKgCIhDgHIA0A+IhGggIAcBMIg1g1IABBPIgihFIgWBOIgLhMg");
	this.shape_335.setTransform(281.6,174.5);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f().s("#0000FF").ss(1,1,1).p("AjVgdQAwgCAwgCQgmgfgmggQAvAOAuANQgZgqgZgqQAfAVAfAVQAJAHAJAGQgLgwgKgwQAcAnAcAoQAGgyAGgwQAOAuANAuQARgiAQgjQAFgKAEgKQgCAxgBAwQAjgkAjgjQgSAtgRAuQAsgWAsgVQggAkgfAkQAzgHAvgGQgqAZgqAYQAxAKAwAKQguAJgvAKQArAZAqAZQgFgCgHgBQgpgEgqgGQAgAmAhAlQgrgUgsgVQATAuASAvQghgiggghQAAAwACAxQgUgrgWgrQgNAwgNAvQgGgvgGgvQgTAagTAbQgKAOgKAOQAJgvAKgvQgoAegoAdQAYgqAZgpQgwAPgwAOQAMgKAMgLQAYgUAZgVQgxgCgygBQAtgRAtgRQgvgRgvgSg");
	this.shape_336.setTransform(288.6,167);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#B65B42").s().p("AgQB4IgnA1IgUAcIATheIhQA7IAyhTIhhAdIAYgVIAxgpIhjgDIBagiIhdgjIgBgHIBhgEIhNg/IBdAbIgyhUIA/AqIARANIgVhgIA4BPIAMhiIAbBcIAhhFIAKgUIgFBhIBGhHIgjBbIBZgrIhABIIBjgNIhUAxIBhAUIhdATIBWAyIgNgDIhTgKIBBBLIhWgpIAkBdIhChDQABAwADAxIgrhWIgaBfIgLheg");
	this.shape_337.setTransform(288.6,167);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f().s("#0000FF").ss(1,1,1).p("Aj3gkQA6gBA6gBQgugmgtglQA3ARA4ASQgfgzgfgyQAlAaAlAaQALAIAKAIQgOg5gNg5QAhAvAiAwQAGg7AHg6QAPA4AQA3QATgpATgqQAFgLAGgMQgDA6gDA5QApgqApgrQgWA2gVA2QA1gaA0gbQgnArgmArQA+gIA3gIQgzAdgyAdQA6ALA6ALQg5AKg4ALQAzAeA0AdQgHgCgIgBQgygHgygHQAoAtAmAsQgygag0gaQAWA4AWA3QgngpgmgoQAAA5AEA6QgYg0gZg0QgPA5gPA5QgGg5gHg5QgXAggWAfQgLASgMARQAMg4ANg5QgwAkgvAjQAegxAegyQg5ASg4ASQAOgMAOgMQAegZAegZQg7gBg7gBQA2gUA2gUQg3gTg4gVg");
	this.shape_338.setTransform(295.5,159.6);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#A86D3A").s().p("AgWCGIgtA/IgXAjIAZhxIhfBHIA8hjIhyAkIAdgYIA9gyIh3gCIBsgoIhvgoIgBgHIB0gCIhbhLIBvAjIg+hlIBKA0IAUAQIgahyIBCBfIAOh1IAeBvIAnhTIALgXIgHBzIBThVIgrBsIBpg1IhNBWIB1gQIhlA6IB0AWIhxAVIBmA7IgOgDIhkgOIBOBZIhmg0IAsBvIhOhRQACA5ADA6IgxhoIgeByIgNhyg");
	this.shape_339.setTransform(295.5,159.6);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f().s("#0000FF").ss(1,1,1).p("AkZgqQBEgBBEgBQg2grg1grQBAAVBBAVQglg6gkg6QArAfAqAfQAMAJAMAJQgPhCgQhDQAmA4AmA4QAHhEAHhEQASBBARBCQAWgxAWgwQAGgOAGgOQgEBEgEBDQAvgyAwgxQgaA+gaA/QA9ggA9gfQguAygtAyQBIgLA/gJQg7Ahg7AhQBEANBDAMQhCALhCANQA8AhA8AiQgJgCgIgBQg6gJg7gIQAuAzAuAzQg8gfg8gfQAbBAAaBAQgtgwgtgwQACBCAFBFQgcg9gdg+QgRBDgRBCQgHhDgHhDQgZAmgaAkQgNAUgOAUQAQhBAPhCQg3Aqg3ApQAkg5Akg5QhCAVhBAVQAQgOARgOQAkgcAjgdQhFgBhEgBQA/gWA/gXQhAgWhBgYg");
	this.shape_340.setTransform(302.5,152.1);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#998033").s().p("AgbCUIg0BKIgbAoIAfiDIhuBTIBIhyIiDAqIAigcIBGg5IiJgCIB+gtIiBguIAAgGICHgCIhrhWICBAqIhJh0IBWA+IAXASIgfiFIBMBwIAOiIIAjCDIAshhIAMgcIgICHIBfhjIg0B9IB6g/IhbBkICHgUIh2BCICHAZIiDAYIB3BDIgRgDIh1gRIBcBmIh4g+IA2CAIhahgQACBCAEBFIg5h7IgiCFIgNiGg");
	this.shape_341.setTransform(302.5,152.1);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f().s("#0000FF").ss(1,1,1).p("Ak6gvQBNgBBOgBQg+gwg9gxQBKAYBJAYQgqhBgphCQAwAkAwAkQAOAKAOALQgThMgShMQArBBArBAQAHhOAIhNQAUBKATBLQAYg3AZg3QAHgQAHgQQgFBNgFBNQA1g5A2g5QgfBHgeBIQBGglBFgkQg1A5g0A5QBSgNBIgLQhDAmhEAlQBOAOBMANQhLANhMAOQBEAlBFAmQgKgCgKgBQhCgKhDgLQA1A6A0A6QhEgjhFgkQAfBIAfBIQgzg3gzg3QACBLAGBOQgghGgghGQgTBMgTBLQgHhMgIhNQgcArgdAqQgPAWgPAXQAShLARhLQg+Awg+AvQAphBAqhBQhKAZhLAZQATgQAUgQQApggAoghQhOAAhOgBQBJgZBIgaQhKgZhKgbg");
	this.shape_342.setTransform(309.4,144.7);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#8A922C").s().p("AghCjIg5BUIgeAuIAjiWIh8BfIBTiCIiVAxIAngfIBRhBIicgBICRgzIiUg0IAAgFICbgCIh7hhICTAxIhTiDIBgBHIAcAVIgliXIBWCBIAPibIAnCVIAxhuIAOghIgKCbIBrhyIg9CPICLhJIhpByICagYIiHBLICaAbIiXAaICJBLIgUgDIiFgUIBpB0IiJhHIA+CQIhmhuQACBLAGBOIhAiNIgmCYIgPiZg");
	this.shape_343.setTransform(309.4,144.7);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f().s("#0000FF").ss(1,1,1).p("Alcg2QBXAABXgBQhFg2hEg2QBSAcBTAcQgwhKgvhJQA2AoA2ApQAPAMAPAMQgVhVgVhVQAwBJAxBIQAHhXAIhXQAWBUAVBUQAcg+Abg+QAIgSAIgSQgGBXgHBXQA8hBA7hAQgiBQgjBQQBOgpBNgpQg7BAg7BAQBdgPBQgNQhMAqhMApQBXAQBWAOQhWAOhVAPQBNAqBNAqQgLgCgLgCQhLgMhLgMQA8BBA7BBQhNgphNgpQAjBRAjBRQg5g+g5g+QADBUAGBXQgjhPgjhPQgVBVgWBVQgHhWgIhXQggAwggAvQgRAagRAaQAVhUAVhVQhGA2hFA1QAvhIAvhJQhTAchUAcQAWgSAWgRQAuglAugkQhYAAhXgBQBSgcBRgdQhSgbhTgeg");
	this.shape_344.setTransform(316.3,137.2);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#7CA424").s().p("AgmCxIhABfIgiA0IAqipIiLBrIBeiRIinA3IAsgjIBchJIivAAICjg5Iilg5IgBgEICugBIiJhsIClA4IhfiTIBsBRIAeAXIgqipIBhCRIAPivIArCpIA3h8IAQgkIgNCtIB3iAIhFCgICbhSIh2CAICtgcIiYBTICtAeIirAdICaBUIgWgEIiWgYIB3CCIiahSIBGChIhyh7QADBUAGBXIhGieIgrCqIgPitg");
	this.shape_345.setTransform(316.3,137.2);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f().s("#0000FF").ss(1,1,1).p("Al+g8QBhAABhgBQhNg7hMg8QBbAfBcAgQg1hSg0hRQA7AuA7AtQARANASAOQgYhegYhfQA1BRA1BRQAJhhAIhgQAYBdAXBeQAehFAehFQAJgUAIgUQgGBggJBhQBDhIBBhHQgmBZgnBYQBWguBWgtQhDBGhBBHQBmgQBagPQhVAuhVAtQBgARBgAQQhfAPhfAQQBVAuBWAvQgNgDgMgBQhTgOhTgOQBCBIBBBIQhVguhVguQAoBaAnBYQhAhEg/hFQADBcAJBiQgnhZgohYQgWBegYBeQgIhfgIhgQgjA0gjA1QgTAdgSAcQAXhdAXheQhMA8hOA7QA1hQA1hSQhcAghdAgQAZgUAYgTQA0gpAzgoQhhAAhiAAQBcgeBbggQhcgfhcggg");
	this.shape_346.setTransform(323.3,129.8);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#6DB61D").s().p("AgsC/IhFBqIgmA5IAvi7IiaB3IBqiiIi4BAIAwgnIBnhQIjCAAIC2g/Ii4g/IAAgDIDBgBIiZh3IC3A/IhpijIB2BbIAjAbIgwi9IBqCiIARjBIAvC7IA8iKIARgoIgPDBICEiPIhNCyICshcIiECNIC/gfIipBbIDAAhIi+AfICrBdIgZgFIimgbICDCQIiqhcIBPCzIh/iLQADBdAJBhIhPiwIguC8IgRjAg");
	this.shape_347.setTransform(323.3,129.8);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f().s("#0000FF").ss(1,1,1).p("AmfhDQBqABBqAAQhUhBhUhCQBlAjBkAjQg6hag7hYQBCAyBBAyQATAPASAPQgahogahnQA6BaA6BYQAIhqAJhqQAaBnAZBnQAhhMAhhMQAKgWAJgVQgJBpgJBqQBJhOBIhPQgrBhgrBhQBegyBegzQhJBOhIBOQBwgTBigQQhdAyheAyQBqASBpARQhpARhoARQBeAzBdAyQgNgDgOgCQhbgPhbgPQBIBOBJBOQhdgyhegzQArBiArBiQhFhMhGhNQAFBnAJBqQgrhhgqhiQgZBogaBnQgJhqgIhqQgmA7gmA5QgUAggVAgQAahnAahnQhUBChUBCQA6haA6hYQhlAjhlAjQAbgWAcgVQA4gsA5gsQhrABhrAAQBlgiBkgiQhlgihlgjg");
	this.shape_348.setTransform(330.2,122.3);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#5FC816").s().p("AgxDNIhMB0IgpA/IA1jNIipCEIB1izIjLBHIA3grIBxhYIjWAAIDKhDIjLhFIAAgCIDVAAIipiDIDJBFIh1iyICDBlIAlAeIg0jOIB0CyIARjVIAzDOIBCiYIATgsIgSDVICRieIhVDDIC7hmIiQCcIDRgkIi7BlIDTAjIjRAiIC7BkIgbgEIi2gfICRCdIi7hlIBXDDIiMiYQAFBmAJBqIhVjCIgyDPIgSjUg");
	this.shape_349.setTransform(330.2,122.3);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f().s("#0000FF").ss(1,1,1).p("AnAhIQB0AABzABQhchHhchHQBuAmBtAmQg/hhhAhhQBHA3BHA4QAUAQAUAQQgchwgdhxQA+BiBABhQAJh0AJh0QAcBxAbBwQAkhTAjhSQALgYAKgYQgKB0gKBzQBPhWBOhWQgvBqgvBqQBmg3Bmg4QhPBVhPBVQB6gVBrgSQhmA2hnA3QBzATBzASQhyAShzASQBnA3BmA3QgOgDgPgCQhkgRhjgRQBPBVBPBVQhmg3hmg4QAwBqAvBrQhLhThMhUQAFBvAKB0QguhqguhrQgbBxgdBxQgIhzgJh0QgpBAgpA/QgWAigXAiQAdhwAdhwQhcBIhbBIQBAhhBAhhQhuAnhuAmQAdgXAegXQA+gwA+gwQh0ABh0AAQBuglBtglQhugkhugmg");
	this.shape_350.setTransform(337.2,114.8);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#50DB0F").s().p("Ag3DcIhRB/IgtBEIA6jgIi3CQICAjCIjdBNIA8guIB8hgIjoABIDbhKIjchKIAAgBIDnABIi4iOIDbBMIiAjCICPBvIAoAgIg5jhIB9DDIATjoIA2DhIBIilIAVgwIgUDnICdisIhfDUIDNhvIifCqIDmgnIjNBtIDmAlIjlAkIDNBuIgdgFIjHgiICeCqIjMhvIBeDVIiXinQAGBvAKB0IhcjVIg4DiIgSjng");
	this.shape_351.setTransform(337.2,114.8);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f().s("#0000FF").ss(1,1,1).p("AnihPQB+ABB9ABQhkhNhjhMQB3ApB2AqQhFhphGhpQBNA8BNA8QAWASAVASQgfh6ggh5QBEBpBEBqQAKh+AJh9QAeB6AdB6QAnhaAmhaQAMgZALgaQgLB9gMB9QBVhdBVhdQg0BygzBzQBug8Bvg9QhWBchWBcQCEgXB0gUQhvA7hvA7QB8AUB8AUQh8ATh7ATQBvA8BuA6QgPgDgRgCQhrgShsgTQBWBcBWBcQhug9hvg9QA0B0AzBzQhRhbhShaQAGB4ALB9Qgyhzgyh0QgdB7geB5QgJh9gKh9QgsBFgsBEQgYAlgYAlQAgh5Afh5QhjBNhiBOQBFhoBFhpQh2Aqh3AqQAggZAhgZQBDg0BDg0Qh+ABh+ABQB4goB2goQh3gnh3gog");
	this.shape_352.setTransform(344.1,107.4);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#42ED07").s().p("Ag8DqIhYCJIgwBKIA/jzIjFCdICKjSIjtBUIBBgyICGhnIj8ABIDuhQIjuhPIAAgBID7ACIjHiZIDtBTIiLjSICaB4IArAkIg/jzICIDTIATj6IA7DzIBNi0IAXgzIgXD6ICqi6IhnDlIDdh4IisC3ID4grIjeB2ID4AoIj3AmIDdB2IgggFIjXglICsC4Ijdh6IBnDnIiji1QAGB4ALB9IhkjmIg7D0IgTj7g");
	this.shape_353.setTransform(344.1,107.4);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f().s("#0000FF").ss(1,1,1).p("ABkjqIC1jJIhvD3IDtiDIi5DGIELgvIjvB/IELApIkLAqIDvB/IkLgvIC5DGIjtiDIBvD3Ii1jJIAYENIhqj4Ig/EGIgUkNIiSDjIBEkFIjUCoICWjhIj/BaIDXilIkPADIEBhWIkBhVIEPADIjXilID/BaIiWjhIDUCoIhEkFICSDjIAUkNIA/EGIBqj4g");
	this.shape_354.setTransform(351,99.9);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#33FF00").s().p("AhBD5IiSDjIBEkFIjUCoICWjhIj/BaIDXilIkPADIEBhWIkBhVIEPADIjXilID/BaIiWjhIDUCoIhEkFICSDjIAUkNIA/EGIBqj4IgYENIC1jJIhvD3IDtiDIi5DGIELgvIjvB/IELApIkLAqIDvB/IkLgvIC5DGIjtiDIBvD3Ii1jJIAYENIhqj4Ig/EGg");
	this.shape_355.setTransform(351,99.9);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f().s("#0000FF").ss(1,1,1).p("AoDiaIDzACIihiJIDnBLIhsi7IDDCMIgojaICMC9IAhjgIBHDaIBjjHIgUDyICXiWIhdDgIDGhcIiaC3IDegWIjHB7IDeA1IjeA0IC1BqIjwgnICJClIjXhtIBKDNIipinIADDgIhpjPIhHDbIgViCIgGhmIh6CsIA5jrIiwB6IB9jNIjVA5ICzibIjigQIDWhXg");
	this.shape_356.setTransform(350.4,102);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#33FF00").s().p("AiFGBIgGhmIh6CsIA6jrIixB6IB9jNIjVA5ICzibIjigQIDXhXIjXhaID0ACIiiiJIDnBLIhri7IDCCMIgojaICMC9IAhjgIBHDaIBjjHIgUDyICXiWIhdDgIDGhcIiaC3IDegWIjHB7IDfA1IjfA0IC1BqIjwgnICJClIjXhtIBLDNIiqinIADDgIhpjPIhHDbg");
	this.shape_357.setTransform(350.4,102);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f().s("#0000FF").ss(1,1,1).p("AoBjfIDYACIhshuIDOA8IhBiWICxBwIgLiuICECXIAxizIBOCvIA+hhIAdg2IgQDXIB5hjIhKDIICeg0Ih7CnICxAFIifB2ICyBAIiyA/IB8BVIjVgfIBYCEIjBhYIAmClIiciGIgTC0IhqimIhOCvIgchoIgGhaIhhB0IAujSIiOBNIBki5IiqAYICPiQIi0giICrhcIirhdg");
	this.shape_358.setTransform(349.7,104.1);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#33FF00").s().p("AjPGYIgGhaIhhB0IAujSIiOBNIBki5IiqAYICPiQIi0ghICrhdIirhdIAAAAIDYACIhshuIDOA8IhBiWICxBwIgLiuICECXIAxizIBOCvIA+hhIAdg2IgQDXIB5hjIhKDIICeg0Ih7CoICxAEIifB3ICyA/IiyBAIB8BUIjVgfIBYCEIjBhXIAmCkIiciGIgTC0IhqimIhOCvg");
	this.shape_359.setTransform(349.7,104.1);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f().s("#0000FF").ss(1,1,1).p("AoAkkIC9ACIg3hTIC1AtIgVhwICeBUIATiDIB9ByIA/iHIBVCDIBUhmIgMC8IBbgwIg4CxIB3gMIhcCYICFAcIh4B1ICGBKIiGBKIBDBAIi7gYIAoBjIirhBIABB7IiOhkIgpCGIhqh8IhVCDIglhOIgEhOIhJA8IAii3IhqAfIBLimIh/gIIBriHIiIgzICBhgIiBhgg");
	this.shape_360.setTransform(349,106.2);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#33FF00").s().p("AkaGvIgEhOIhJA8IAii4IhqAfIBLilIiAgJIBsiGIiIg0ICBhfIiBhhIAAAAIC9ABIg3hSIC1AtIgVhxICfBVIASiDIB9ByIA/iHIBVCDIBUhmIgMC7IBbgvIg4CwIB3gLIhcCYICFAcIh4B0ICFBKIiFBLIBDBAIi7gYIAoBjIishBIADB7IiPhlIgpCHIhqh8IhVCDg");
	this.shape_361.setTransform(349,106.2);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f().s("#0000FF").ss(1,1,1).p("An+lpIChABIgBg3ICcAeIAVhLICNA4IAvhXIB3BMIBNhaIBcBXIA+gwIAPgFIgICgIA9AEIglCZIBPAcIg+CHIBZA3IhQBxIBZBVIhZBVIAJArIifgQIgJBCIiWgsIgiBTIiChDIg/BZIhqhSIhcBXIgtg0IgDhDIgxAFIAXieIhGgOIAyiSIhWgpIBIh9IhahGIBVhjIhVhjg");
	this.shape_362.setTransform(348.3,108.3);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#33FF00").s().p("AllHGIgDhDIgxAFIAXieIhGgOIAyiSIhWgpIBIh9IhahGIBVhjIhVhjIAAgBIChABIgBg3ICcAeIAVhLICNA4IAvhXIB3BMIBNhaIBcBXIA+gwIAPgFIgICgIA9AEIglCZIBPAcIg+CHIBZA3IhQBxIBZBVIhZBVIAJArIifgQIgJBCIiWgsIgiBTIiChDIg/BZIhqhSIhcBXg");
	this.shape_363.setTransform(348.3,108.3);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f().s("#0000FF").ss(1,1,1).p("An8muICFAAIA0gbICDAPIBAgmIB8AcIBMgrIBwAmIBcgtIBjAsIA+gYIAHATIgECFIAfA3IgTCCIAoBDIgfB4IAsBRIgoBtIAtBgIgtBfIgwAWIiEgIIg6AhIiAgWIhGAqIh2giIhUAtIhqgpIhjArIg2gaIgBg3IgZgzIALiEIgjg8IAZh+IgqhJIAkh0IgthXIAqhoIgqhmg");
	this.shape_364.setTransform(347.7,110.4);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#33FF00").s().p("AmwHdIgCg4IgYgyIAMiEIgkg8IAZh+IgqhJIAkh0IgthXIAqhoIgqhmIAAgBICFABIA0gcICEAPIA/gmIB8AcIBLgrIBxAmIBcgtIBjAsIA+gYIAHATIgECGIAfA2IgTCBIAoBEIggB4IAtBRIgoBtIAtBfIgtBgIgwAWIiEgIIg6AhIiAgWIhHAqIh1giIhUAtIhrgpIhjArg");
	this.shape_365.setTransform(347.7,110.4);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f().s("#0000FF").ss(1,1,1).p("AH8H0Iv3AAIAAvnIP3AAg");
	this.shape_366.setTransform(347,112.4);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#33FF00").s().p("An7H0IAAvnIP3AAIAAPng");
	this.shape_367.setTransform(347,112.4);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#33CC33").s().p("An7H0IAAvnIP3AAIAAPng");
	this.shape_368.setTransform(347,112.4);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f().s("#0000FF").ss(1,1,1).p("An0nPIPpAAIAAOfIvpAAg");
	this.shape_369.setTransform(347,117);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#2DD22D").s().p("An0HQIAAufIPpAAIAAOfg");
	this.shape_370.setTransform(347,117);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f().s("#0000FF").ss(1,1,1).p("AnsmqIPZAAIAANVIvZAAg");
	this.shape_371.setTransform(347.1,121.5);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#26D926").s().p("AnsGrIAAtVIPZAAIAANVg");
	this.shape_372.setTransform(347.1,121.5);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f().s("#0000FF").ss(1,1,1).p("AnlmGIPLAAIAAMNIvLAAg");
	this.shape_373.setTransform(347.1,126);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#20DF20").s().p("AnlGHIAAsNIPLAAIAAMNg");
	this.shape_374.setTransform(347.1,126);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f().s("#0000FF").ss(1,1,1).p("AndliIO7AAIAALEIu7AAg");
	this.shape_375.setTransform(347.1,130.6);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#1AE61A").s().p("AndFiIAArDIO7AAIAALDg");
	this.shape_376.setTransform(347.1,130.6);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f().s("#0000FF").ss(1,1,1).p("AnWk9IOtAAIAAJ7IutAAg");
	this.shape_377.setTransform(347.2,135.1);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#13EC13").s().p("AnWE+IAAp7IOtAAIAAJ7g");
	this.shape_378.setTransform(347.2,135.1);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f().s("#0000FF").ss(1,1,1).p("AnOkZIOdAAIAAIzIudAAg");
	this.shape_379.setTransform(347.2,139.6);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#0DF20D").s().p("AnOEaIAAozIOdAAIAAIzg");
	this.shape_380.setTransform(347.2,139.6);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f().s("#0000FF").ss(1,1,1).p("AnHj0IOPAAIAAHpIuPAAg");
	this.shape_381.setTransform(347.2,144.1);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#06F906").s().p("AnHD1IAAnpIOPAAIAAHpg");
	this.shape_382.setTransform(347.2,144.1);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f().s("#0000FF").ss(1,1,1).p("AHADRIt/AAIAAmhIN/AAg");
	this.shape_383.setTransform(347.3,148.7);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#00FF00").s().p("Am/DRIAAmhIN/AAIAAGhg");
	this.shape_384.setTransform(347.3,148.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_327},{t:this.shape_326}]},9).to({state:[{t:this.shape_329},{t:this.shape_328}]},1).to({state:[{t:this.shape_331},{t:this.shape_330}]},1).to({state:[{t:this.shape_333},{t:this.shape_332}]},1).to({state:[{t:this.shape_335},{t:this.shape_334}]},1).to({state:[{t:this.shape_337},{t:this.shape_336}]},1).to({state:[{t:this.shape_339},{t:this.shape_338}]},1).to({state:[{t:this.shape_341},{t:this.shape_340}]},1).to({state:[{t:this.shape_343},{t:this.shape_342}]},1).to({state:[{t:this.shape_345},{t:this.shape_344}]},1).to({state:[{t:this.shape_347},{t:this.shape_346}]},1).to({state:[{t:this.shape_349},{t:this.shape_348}]},1).to({state:[{t:this.shape_351},{t:this.shape_350}]},1).to({state:[{t:this.shape_353},{t:this.shape_352}]},1).to({state:[{t:this.shape_355},{t:this.shape_354}]},1).to({state:[{t:this.shape_355},{t:this.shape_354}]},19).to({state:[{t:this.shape_357},{t:this.shape_356}]},1).to({state:[{t:this.shape_359},{t:this.shape_358}]},1).to({state:[{t:this.shape_361},{t:this.shape_360}]},1).to({state:[{t:this.shape_363},{t:this.shape_362}]},1).to({state:[{t:this.shape_365},{t:this.shape_364}]},1).to({state:[{t:this.shape_367},{t:this.shape_366}]},1).to({state:[{t:this.shape_368},{t:this.shape_366}]},33).to({state:[{t:this.shape_370},{t:this.shape_369}]},1).to({state:[{t:this.shape_372},{t:this.shape_371}]},1).to({state:[{t:this.shape_374},{t:this.shape_373}]},1).to({state:[{t:this.shape_376},{t:this.shape_375}]},1).to({state:[{t:this.shape_378},{t:this.shape_377}]},1).to({state:[{t:this.shape_380},{t:this.shape_379}]},1).to({state:[{t:this.shape_382},{t:this.shape_381}]},1).to({state:[{t:this.shape_384},{t:this.shape_383}]},1).wait(1));

	// B
	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f().s("#0000FF").ss(1,1,1).p("AArArQgSASgZAAQgYAAgSgSQgSgSAAgZQAAgYASgSQASgSAYAAQAZAAASASQASASAAAYQAAAZgSASg");
	this.shape_385.setTransform(254,204.3,0.781,0.781);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#FF0066").s().p("AgqArQgSgSAAgZQAAgYASgSQASgSAYAAQAZAAASASQASASAAAYQAAAZgSASQgSASgZAAQgYAAgSgSg");
	this.shape_386.setTransform(254,204.3,0.781,0.781);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f().s("#0000FF").ss(1,1,1).p("AhPgEQAJgDAKgDQgHgJgHgKQAKAAALAAQgEgLgDgLQAJACAIACQACAAADABQgBgLABgMQAIAHAIAGQAEgLAFgLQAGAJAGAJQAEgIAFgGQACgCABgCQADAJACAKQALgGAKgGQgBAKgBALQANgDALgCQgFAIgGAJQANABALABQgHAHgHAIQALAEALAFQgIAFgJAGQAJAGAIAIQgBAAgBAAQgIACgJABQAGALAGAKQgKgBgKgBQACAMABAMQgIgEgIgGQgCAMgCAMQgHgHgGgIQgFAMgGAKQgEgIgEgJQgGAGgHAFQgDADgDADQgBgKgBgKQgLAFgLAFQACgKACgKQgMACgMABQABgEABgDQAEgFAEgGQgMgCgMgDQAIgFAIgGQgLgHgKgGg");
	this.shape_387.setTransform(268.9,198.7);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#FF0B62").s().p("AAEA/IgNALIgGAGIgCgUIgWAJIAEgTIgYADIACgHIAIgLIgYgFIAQgLIgVgOIgBgJIATgHIgOgSIAVAAIgHgWIARADIAFACIAAgXIAQANIAJgWIAMASIAJgPIADgDIAFATIAVgMIgCAVIAYgFIgLAQIAYADIgOAOIAWAKIgRAKIARAPIgCgBIgRADIAMAWIgUgCIADAYIgQgKIgEAYIgNgPIgLAWIgIgRg");
	this.shape_388.setTransform(268.9,198.7);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f().s("#0000FF").ss(1,1,1).p("AhxgLQAUgDATgDQgPgPgOgOQATADAUADQgJgTgJgSQAOAGAOAHQAEACAEACQgDgUgCgVQANAPANAPQAFgVAFgUQAIARAHATQAIgOAIgOQACgEACgEQACATABAUQARgOAQgNQgFATgFATQAVgHATgHQgMAPgMAPQAXgBATAAQgPAMgQALQAVAGAUAGQgSAHgSAFQARAMARAMQgCAAgDgBQgQAAgRAAQANASAMARQgSgGgTgHQAHAVAFAVQgOgMgOgMQgCAVgBAVQgKgQgKgQQgHAUgIAUQgEgSgEgTQgKALgLALQgEAFgFAGQACgTACgTQgTALgSALQAIgSAIgRQgVAEgWAFQAEgFAEgFQAJgKAJgJQgWgCgVgDQARgIARgJQgTgJgTgIg");
	this.shape_389.setTransform(283.9,193.1);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#FF165F").s().p("AAABNIgVAVIgJALIAEgmIglAWIAQgjIgrAJIAIgKIASgTIgrgEIAigRIgmgSIgCgKIAngGIgdgdIAnAHIgSgmIAcANIAIAEIgFgoIAaAdIAKgpIAPAkIAQgcIAEgIIADAnIAhgbIgKAmIAogNIgYAeIAqgCIgfAXIApANIgkALIAiAZIgFgBIghAAIAZAiIglgNIAMArIgcgZQgCAWgBAVIgUghIgPAoIgIgkg");
	this.shape_390.setTransform(283.9,193.1);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f().s("#0000FF").ss(1,1,1).p("AiSgRQAdgCAdgDQgXgUgWgVQAcAHAdAHQgPgbgOgaQAUALAUAMQAFADAGAEQgGgegFgeQASAXATAXQAFgeAFgeQAKAcAJAbQALgVALgUQADgGADgGQAAAdAAAdQAXgVAXgVQgJAcgKAcQAdgMAcgMQgTAWgTAWQAhgCAcgDQgYAQgYAQQAeAHAdAIQgbAHgcAHQAaAQAZARQgDgBgEgBQgZgBgZgCQATAYATAYQgagLgbgLQALAdAJAeQgUgTgVgUQgBAeABAfQgOgZgOgaQgJAegKAdQgEgcgFgcQgNAQgNAQQgHAJgGAIQAEgcAFgdQgaASgaAQQAOgZANgaQgeAIgeAIQAHgHAGgHQAOgNAPgNQgfgCgfgCQAagLAbgMQgdgMgcgLg");
	this.shape_391.setTransform(299,187.5);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#FF215B").s().p("AgGBbIgaAgIgNARIAJg5Ig0AiIAbgzIg8AQIANgOIAdgaIg+gEIA1gXIg5gXIgBgJIA6gFIgtgpIA5AOIgdg1IAoAXIALAHIgLg8IAlAuIAKg8IATA3IAWgpIAGgMIAAA6IAugqIgTA4IA5gYIgmAsIA9gFIgwAgIA7APIg3AOIAzAhIgHgCIgygDIAmAwIg1gWIAUA7IgpgnQgBAeABAfIgcgzIgTA7IgJg4g");
	this.shape_392.setTransform(299,187.5);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f().s("#0000FF").ss(1,1,1).p("Ai0gXQAngCAngDQgfgZgegbQAmALAlAKQgUgigUgjQAaAQAZARQAHAFAIAFQgIgngIgnQAXAfAXAfQAGgnAGgoQAMAlALAlQANgcANgbQAFgIAEgIQgBAmgBAnQAdgcAdgcQgOAlgNAkQAlgRAjgQQgZAdgZAdQAqgFAlgEQggAUghAUQAnAJAnAJQglAIgmAIQAjAVAiAUQgFAAgFgBQghgDghgEQAZAfAbAfQgjgQgjgQQAOAmAOAlQgbgagagaQAAAnAAAoQgRgigRgjQgLAngLAmQgFglgGgmQgRAWgPAVQgJALgIAMQAHgmAHgmQghAXghAXQATghAUghQgoALgnALQAJgJAKgIQATgRATgRQgogCgogCQAkgOAkgOQgngOglgPg");
	this.shape_393.setTransform(314,181.9);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#FF2C57").s().p("AgLBqIghAqIgQAXIAOhLIhBAuIAlhDIhOAXIASgSIAogiIhRgDIBIgdIhMgdIgBgIIBOgEIg9g1IBLAVIgohEIA0AgIAOAKIgQhOIAvA/IALhPIAXBJIAbg3IAIgQIgCBOIA6g4IgbBJIBJgiIgzA7IBPgJIhBAnIBOASIhLARIBFAoIgKgBIhDgHIA0A+IhGggIAcBLIg0g0IABBPIgjhEIgWBMIgLhKg");
	this.shape_394.setTransform(314,181.9);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f().s("#0000FF").ss(1,1,1).p("AjVgeQAwgBAwgCQgmgggmgfQAvAOAuAOQgZgrgagqQAgAVAfAVQAJAGAIAHQgKgwgLgwQAdAnAcAoQAGgyAGgwQAOAuANAuQARgjAPgiQAFgKAFgKQgCAwgBAxQAjgjAigjQgSAtgRAtQAtgWAsgWQggAkggAlQA0gHAugGQgpAZgqAYQAxAKAwAKQguAJgvAKQAqAZArAZQgGgCgGgBQgpgFgqgFQAgAmAhAlQgrgUgsgVQATAuASAuQghgggggiQAAAwACAxQgUgrgWgsQgNAxgNAvQgGgugGgxQgTAcgUAaQgKAOgJAPQAJgwAKguQgoAdgoAdQAYgqAZgpQgwAPgwAPQAMgLALgKQAZgVAZgWQgygBgxgBQAtgRAsgRQgugRgvgSg");
	this.shape_395.setTransform(329.1,176.3);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#FF3754").s().p("AgQB3IgoA2IgTAcIAThdIhQA5IAyhSIhhAdIAYgVIAxgqIhjgDIBZgiIhcgiIgBgIIBhgDIhNg/IBdAbIgyhUIA+AqIASANIgWhgIA5BPIAMhiIAbBcIAhhFIAJgUIgEBhIBGhHIgjBbIBZgrIhABIIBigNIhTAxIBhAUIhdATIBWAyIgNgDIhTgKIBBBMIhWgqIAkBcIhChCIADBhIgqhXIgaBhIgLhgg");
	this.shape_396.setTransform(329.1,176.3);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f().s("#0000FF").ss(1,1,1).p("Aj3gjQA6gCA6gBQguglgtgmQA3ASA4ARQgfgygfgyQAlAaAlAaQAKAIALAHQgNg5gOg5QAhAwAiAvQAGg6AHg7QAQA4APA4QATgqATgpQAGgMAFgMQgDA6gDA6QApgrApgqQgWA2gVA2QA1gbA0gaQgnArgmArQA+gJA2gIQgyAdgyAdQA6ALA6ALQg4AKg5AMQA0AdAzAdQgIgBgHgCQgygGgygHQAoAsAnAtQg0gag0gaQAXA3AWA3QgngpgmgoQABA5ADA7QgYg0gZg1QgPA6gPA4QgGg4gHg6QgWAggXAgQgMARgLARQAMg4ANg5QgwAkgvAjQAegxAegxQg4ASg5ASQAOgNAOgMQAegZAegYQg7gBg7gCQA2gTA2gVQg4gTg3gVg");
	this.shape_397.setTransform(344.1,170.7);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#FF4250").s().p("AgWCGIgtBAIgXAiIAZhxIhfBHIA8hiIhxAkIAcgZIA8gxIh2gDIBsgoIhvgoIgBgGIB0gEIhbhKIBvAjIg+hkIBKAzIAVAQIgbhzIBDBgIANh1IAfBvIAmhTIALgXIgGBzIBShVIgrBsIBpg1IhNBXIB0gRIhkA5IB0AXIhxAVIBnA7IgPgDIhkgNIBPBZIhog0IAtBtIhNhRQABA5ADA7IgxhoIgeByIgNhyg");
	this.shape_398.setTransform(344.1,170.7);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f().s("#0000FF").ss(1,1,1).p("AkZgqQBEgBBEgBQg2grg1grQBBAVBAAVQgkg6glg6QArAfArAfQAMAJAMAJQgQhCgQhDQAmA4AmA4QAHhEAHhEQASBBARBBQAWgwAWgwQAGgOAHgOQgEBDgFBEQAwgyAvgyQgaA/gaA/QA9ggA9gfQguAygtAyQBIgLA/gJQg6Ahg7AhQBDAMBEANQhCALhDANQA8AhA8AhQgIgBgJgCQg6gIg6gJQAuA0AtAzQg7gfg9gfQAbBAAaBAQgsgwgtgvQABBBAFBEQgcg9gcg9QgSBDgRBCQgGhDgHhDQgaAlgZAmQgOAUgNAUQAPhCAPhCQg3Aqg3ApQAkg5Akg6QhBAWhCAWQARgPAQgOQAkgcAjgdQhEgBhFgBQA/gWBAgXQhBgXhBgXg");
	this.shape_399.setTransform(359.1,165.1);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#FF4D4D").s().p("AgbCVIgzBJIgbApIAeiEIhuBTIBIhzIiDArIAhgcIBHg5IiJgBIB/guIiCguIgBgFICIgDIhrhVICBApIhJh0IBWA+IAYATIggiFIBMBvIAOiIIAjCDIAshhIANgcIgJCHIBfhjIg0B9IB6g/IhbBkICHgUIh1BCICHAZIiFAYIB4BDIgRgEIh0gQIBbBmIh4g+IA1B/IhZheQABBCAFBEIg4h7IgjCFIgNiFg");
	this.shape_400.setTransform(359.1,165.1);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f().s("#0000FF").ss(1,1,1).p("Ak6gwQBNAABOgBQg9gxg+gwQBKAYBKAYQgrhCgphBQAwAjAwAkQAOALAOALQgThMgShMQArBAArBBQAHhOAIhOQAUBLATBLQAZg4AYg3QAHgPAIgQQgGBNgFBNQA1g5A2g5QgeBHgfBHQBGgkBFgkQg0A5g1A5QBTgNBIgLQhEAlhDAmQBNANBMAOQhLANhMANQBEAmBFAmQgKgCgKgCQhCgKhDgKQA1A6A0A6QhEgkhEgkQAeBJAfBIQgzg3gzg3QACBLAGBOQgghGgghHQgTBMgTBMQgHhNgIhMQgdAqgcAqQgPAXgPAXQAShLAShLQg/Awg+AvQAqhBAphBQhKAZhLAYQAUgPASgQQAqggApghQhPgBhOAAQBJgaBIgZQhJgahKgag");
	this.shape_401.setTransform(374.2,159.4);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#FF5749").s().p("AghCjIg5BUIgfAuIAkiWIh8BfIBTiCIiVAxIAmgfIBShBIicgBICRgzIiTg0IgBgFICbgBIh7hhICUAwIhViDIBhBHIAbAWIgkiYIBWCBIAOicIAoCWIAxhvIAPgfIgLCaIBqhyIg8COICKhIIhoByICbgYIiHBLICZAbIiXAaICIBMIgTgEIiFgUIBpB0IiIhIIA8CRIhmhuQADBLAGBOIhAiNIgmCYIgPiZg");
	this.shape_402.setTransform(374.2,159.4);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f().s("#0000FF").ss(1,1,1).p("Alcg2QBXAABXgBQhFg2hEg2QBSAcBTAbQgwhJgvhKQA2ApA2ApQAPAMAQAMQgVhVgVhVQAwBIAwBJQAHhXAIhXQAWBUAVBUQAcg+Abg+QAIgSAIgSQgGBXgHBWQA8hAA8hAQgjBQgiBQQBNgpBOgpQg7BAg7A/QBcgOBRgNQhNAqhMApQBXAPBWAPQhVAOhWAPQBNAqBNAqQgLgCgLgCQhLgMhLgMQA8BBA7BBQhNgphNgpQAjBRAjBRQg5g+g5g+QADBUAHBXQgkhPgjhPQgVBVgWBUQgHhWgIhWQggAwgfAvQgRAagSAZQAVhUAVhUQhGA2hFA1QAvhJAvhJQhTAchUAcQAWgRAWgSQAugkAugkQhXgBhYAAQBSgcBSgdQhTgchTgdg");
	this.shape_403.setTransform(389.2,153.8);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#FF6245").s().p("AgmCxIg/BfIgjAzIAqioIiLBrIBeiSIinA4IAsgjIBchIIivgBICkg5Iimg5IgBgEICugBIiJhsIClA3IhfiTIBsBSIAfAYIgqiqIBgCRIAPiuIArCoIA3h8IAQgkIgNCtIB4iAIhFCgICbhSIh2B/ICtgbIiZBTICtAeIirAdICaBUIgWgEIiWgYIB3CCIiahSIBGCiIhyh8QADBUAHBXIhHieIgrCpIgPisg");
	this.shape_404.setTransform(389.2,153.8);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f().s("#0000FF").ss(1,1,1).p("Al9g8QBgAABhAAQhNg8hMg8QBcAfBbAfQg1hRg1hRQA8AtA8AuQARANAQAOQgXhegYheQA1BQA1BRQAIhhAJhgQAYBdAXBeQAehFAehFQAJgUAJgUQgIBhgIBgQBChIBChHQgmBYgnBZQBWguBVguQhBBHhCBHQBmgRBagPQhVAvhVAuQBgAQBfAQQhfAPhfAQQBWAvBVAuQgMgDgMgCQhTgNhTgOQBCBIBBBHQhUgthWguQAnBZAnBaQg/hFg/hFQADBdAIBgQgnhYgnhYQgWBegYBeQgIhggJhgQgiA1gjA1QgTAcgTAdQAYhdAXheQhNA8hNA7QA1hRA1hRQhcAghdAfQAZgTAYgTQA0goAzgpQhhAAhhAAQBbgfBbgfQhcgfhcggg");
	this.shape_405.setTransform(404.2,148.2);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#FF6D42").s().p("AgsC/IhFBqIgmA5IAvi7IiaB3IBqiiIi5A/IAxgmIBnhRIjCAAIC2g+Ii4g/IAAgDIDBAAIiZh4IC3A+IhqiiIB4BbIAhAbIgvi8IBqChIARjBIAvC7IA8iKIASgoIgQDBICEiPIhNCxICrhcIiDCOIDAggIiqBdIC/AgIi+AfICrBdIgYgFIimgbICDCPIiqhbIBOCzIh+iKQADBdAIBgIhOiwIguC8IgRjAg");
	this.shape_406.setTransform(404.2,148.2);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f().s("#0000FF").ss(1,1,1).p("AmfhDQBrABBqAAQhVhBhUhCQBlAjBkAiQg6hZg7hZQBCAzBCAyQASAPATAPQgbhngahoQA6BZA6BZQAIhqAJhqQAaBnAaBnQAghMAhhMQAKgWAKgWQgJBqgJBqQBIhPBIhOQgrBhgrBiQBfgzBdgzQhJBOhHBOQBvgTBjgRQheAzhdAyQBpASBpARQhpAQhoASQBeAyBeAyQgOgCgNgCQhcgPhagQQBIBPBJBOQhegzhdgyQAqBiArBhQhEhMhGhMQAFBmAIBqQgqhhgrhhQgYBogbBnQgIhqgJhqQgmA7gmA5QgUAggUAfQAZhmAbhnQhVBBhUBCQA7hZA6hYQhlAjhmAiQAcgVAbgVQA4gsA5gsQhrAAhqAAQBkghBkgjQhkghhmgjg");
	this.shape_407.setTransform(419.3,142.6);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#FF783E").s().p("AgxDOIhLB0IgqA/IA0jOIioCDIB1ixIjKBFIA2gpIBxhZIjVAAIDIhEIjJhEIgBgDIDVABIipiDIDKBGIh1iyICCBkIAmAeIg1jPIB0CyIASjUIAyDOIBCiYIAUgrIgSDTICQidIhWDDIC8hmIiRCcIDSgjIi6BkIDSAjIjRAiIC8BlIgbgFIi3geICSCcIi7hlIBVDEIiKiYQAFBlAIBrIhVjDIgzDPIgRjTg");
	this.shape_408.setTransform(419.3,142.6);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f().s("#0000FF").ss(1,1,1).p("AnAhIQBzABB0AAQhbhHhdhHQBuAmBtAmQhAhhhAhhQBIA3BHA4QAUAQAUAQQgdhwgdhxQA/BiBABhQAIh0AJh0QAcBxAbBwQAlhTAjhSQAKgYALgYQgKB0gKBzQBPhWBNhWQgvBqgvBqQBmg3Bmg4QhPBVhOBVQB6gVBqgSQhlA2hmA3QByATByASQhxAShzASQBmA3BnA3QgPgDgPgCQhjgRhjgRQBOBVBQBVQhmg3hlg4QAuBrAvBqQhLhThLhUQAFBvAKB0QguhqgvhrQgaBxgcBxQgKhzgJh0QgpBAgoA/QgWAigXAiQAdhwAdhwQhcBIhbBIQA/hhBBhhQhuAnhuAmQAegXAdgXQA+gwA+gwQh0ABh1AAQBuglBuglQhugkhugmg");
	this.shape_409.setTransform(434.3,137);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#FF833A").s().p("Ag2DcIhSB/IgtBEIA5jgIi2CQIB/jCIjbBNIA7guIB8hgIjpABIDchKIjdhKIAAgBIDpABIi5iOIDcBMIiAjCICOBvIApAgIg7jhIB+DDIASjoIA4DhIBHilIAVgwIgUDnICcisIhdDUIDLhvIidCqIDkgnIjLBtIDkAlIjkAkIDNBuIgegFIjHgiICfCqIjMhvIBeDVIiWinQAFBvAJB0IhcjVIg2DiIgSjng");
	this.shape_410.setTransform(434.3,137);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f().s("#0000FF").ss(1,1,1).p("AnihPQB+ABB9ABQhkhNhjhMQB3ApB2AqQhFhphGhpQBNA8BNA8QAWASAVASQgfh6ggh5QBEBpBEBqQAKh9AJh+QAeB6AdB6QAnhaAmhaQAMgZALgaQgLB9gLB9QBUhdBVhdQg0BzgzByQBug8Bvg9QhWBchWBcQCEgXB0gUQhvA7hvA7QB8AUB8AUQh8ATh7ATQBvA8BvA7QgQgDgRgDQhrgShsgTQBWBcBWBcQhug9hvg8QA0BzAzBzQhRhbhShaQAGB4ALB9Qgyhzgyh0QgdB7geB5QgJh9gKh9QgsBFgsBEQgYAlgYAlQAgh5Afh5QhjBNhiBOQBFhoBGhpQh3Aqh3AqQAggZAhgZQBDgzBDg1Qh+ABh+ABQB4gnB2goQh3goh3gog");
	this.shape_411.setTransform(449.3,131.4);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#FF8E37").s().p("Ag8DqIhYCJIgwBKIA/jzIjFCcICLjRIjuBTIBBgxICGhoIj8ACIDuhPIjuhQIAAgBID7ACIjHiZIDtBTIiLjRICaB3IArAkIg/jzICIDTIATj6IA7DzIBNizIAXg0IgWD7ICpi7IhnDmIDdh6IisC4ID4grIjeB2ID4AoIj3AnIDeB2IghgGIjXglICsC4Ijdh6IBnDnIiji1QAGB4ALB9IhkjnIg7D0IgTj6g");
	this.shape_412.setTransform(449.3,131.4);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f().s("#0000FF").ss(1,1,1).p("AHpioIjvB/IELApIkLAqIDvB/IkLgvIC5DGIjtiDIBvD3Ii1jJIAYENIhqj4Ig/EGIgUkNIiSDjIBEkFIjUCoICWjhIj/BaIDXilIkPADIEBhWIkBhVIEPADIjXilID/BaIiWjhIDUCoIhEkFICSDjIAUkNIA/EGIBqj4IgYENIC1jJIhvD3IDtiDIi5DGg");
	this.shape_413.setTransform(464.4,125.8);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#FF9933").s().p("AhBD5IiSDjIBEkFIjUCoICWjhIj/BaIDXilIkPADIEBhWIkBhVIEPADIjXilID/BaIiWjhIDUCoIhEkFICSDjIAUkNIA/EGIBqj4IgYENIC1jJIhvD3IDtiDIi5DGIELgvIjvB/IELApIkLAqIDvB/IkLgvIC5DGIjtiDIBvD3Ii1jJIAYENIhqj4Ig/EGg");
	this.shape_414.setTransform(464.4,125.8);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f().s("#0000FF").ss(1,1,1).p("ADeB6IC5DGIjtiDIBvD3Ii1jJIAYENIhqj4Ig/EGIgUkNIiSDjIBEkFIjUCoICWjhIj/BaIDXilIkPADIEBhWIkBhVIEPADIjXilID/BaIiWjhIDUCoIhEkFICSDjIAUkNIA/EGIBqj4IgYENIC1jJIhvD3IDtiDIi5DGIELgvIjvB/IELApIkLAqIDvB/g");
	this.shape_415.setTransform(464.4,125.8);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f().s("#0000FF").ss(1,1,1).p("AoSiaID1ACIigiJIDpBLIhqi7IDECMIgmjaICNC9IAjjgIBJDbIBsjQIgBBQIgNCdICXiUIhcDhIDFhZIiaC4IDfgUIjIB8IDfA3IjaA1ICvBqIjygnICHClIjZhtIBJDOIiqioIABDhIhsjPIhIDaIgkjgIiACwIA5jtIiwB5IB9jPIjVA4ICyidIjhgRIDWhag");
	this.shape_416.setTransform(465.7,124.8);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#FF9933").s().p("AiUEjIiACwIA5jtIiwB5IB9jPIjWA4ICzidIjhgRIDWhaIjWhaID1ACIigiJIDoBLIhpi7IDECMIgmjaICNC9IAjjgIBJDbIBsjQIgBBQIgNCdICXiUIhcDhIDGhZIibC4IDegUIjHB8IDfA3IjaA1ICuBqIjxgnICHClIjZhtIBJDOIirioIABDhIhrjPIhIDag");
	this.shape_417.setTransform(465.7,124.8);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f().s("#0000FF").ss(1,1,1).p("AofjfIDaACIhohuIDRA8Ig+iWIC0BwIgGiuICGCYIA1i0IBRCvIBtimIAIBAIgLCNIB6hgIhKDMICdgxIh6CqICxAIIigB6ICzBDIivBBIB0BVIjYgfIBUCEIjEhXIAkCkIigiGIgXC0IhtimIhQCvIg0izIhuB+IAtjVIiNBJIBki9IirAWICQiVIi0gkICqhfIiihcg");
	this.shape_418.setTransform(467,123.8);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#FF9933").s().p("AjmFNIhvB+IAvjVIiOBJIBki9IirAWICQiVIi0gkICrhfIijhcIgIgDIDaACIhohuIDRA8Ig+iWIC0BwIgHiuICHCYIA0i0IBSCvIBtimIAIBAIgLCNIB5hgIhKDMICfgxIh8CqICyAIIigB6ICzBDIivBBIB0BVIjYgfIBVCEIjFhXIAkCkIihiGIgVC0IhuimIhRCvg");
	this.shape_419.setTransform(467,123.8);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f().s("#0000FF").ss(1,1,1).p("AoukkIDCACIgyhTIC6AtIgRhwICkBTIAYiCICCBxIBEiGIBaCDIBvh8IAQAvIgIB8IBagqIg3C2IB3gIIhdCdICFAiIh3B5ICGBPIiDBOIA5BAIjAgYIAjBjIixhBIgCB7IiVhkIgtCGIhvh8IhZCDIhEiGIhcBLIAii9IhqAaIBLirIiAgMIBsiMIiIg4ICBhmIh7hgg");
	this.shape_420.setTransform(468.4,122.8);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#FF9933").s().p("Ak4F3IhdBLIAii9IhqAaIBLiqIiAgOIBsiLIiIg4ICBhmIh6hgIgHgCIDCACIgyhTIC6AtIgRhwICkBTIAYiCICCBxIBEiGIBaCDIBvh8IAPAvIgHB8IBagqIg3C2IB2gIIhcCdICGAiIh4B5ICFBPIiCBNIA5BAIjAgXIAjBjIixhCIgCB8IiVhkIgtCGIhvh8IhZCDg");
	this.shape_421.setTransform(468.4,122.8);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f().s("#0000FF").ss(1,1,1).p("Ao7lpICnABIAGg3ICiAeIAchLICUA4IA2hXIB9BLIBUhZIBjBXIBxhTIAXAgIgFBrIA9ALIglCfIBPAiIg+CPIBZA9IhQB4IBZBcIhXBZIgCAqIimgPIgPBCIidgsIgoBSIiJhDIhFBaIhxhTIhiBYIhThaIgrAZIgggBIAXikIhHgVIAyiYIhVgwIBIiDIhahNIBVhqIhRhlg");
	this.shape_422.setTransform(469.7,121.8);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#FF9933").s().p("AmLGgIgrAaIgggBIAXilIhHgVIAyiZIhVgvIBIiDIhahMIBVhrIhRhkIgEgCICnABIAGg3ICiAeIAchLICUA4IA2hXIB9BMIBUhaIBjBXIBxhTIAXAhIgFBrIA9AKIglCfIBPAiIg+CPIBZA9IhQB4IBZBbIhXBaIgCAqIimgPIgPBCIidgsIgoBSIiJhCIhFBaIhxhUIhiBYg");
	this.shape_423.setTransform(469.7,121.8);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f().s("#0000FF").ss(1,1,1).p("ApJmuICOAAIA8gbICMAPIBHgmICEAcIBVgrIB5AmIBkgtIBrArIBygpIAgAQIgCBbIAeA/IgTCKIAoBLIgfCAIAsBZIgnB2IAsBnIgsBnIg8AVIiNgIIhCAhIiIgWIhOApIh+ghIhcAtIhzgqIhqAsIhjgtIgpANIgQgnIALiNIgjhEIAZiGIgrhSIAkh7IgthgIArhvIgphrg");
	this.shape_424.setTransform(471,120.8);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#FF9933").s().p("AndHKIgpAMIgQgmIALiNIgjhEIAZiGIgrhSIAkh7IgthgIArhvIgphqIgCgBICOABIA8gcICMAPIBHgmICEAcIBVgrIB5AmIBkgtIBrAsIBygqIAgAQIgCBbIAeA/IgTCKIAoBLIgfCAIAsBZIgnB2IAsBnIgsBnIg8AUIiNgHIhCAhIiIgWIhOApIh+giIhcAtIhzgpIhqAsg");
	this.shape_425.setTransform(471,120.8);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f().s("#0000FF").ss(1,1,1).p("AJYH0IyvAAIAAvnISvAAg");
	this.shape_426.setTransform(472.3,119.8);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#FF9933").s().p("ApXH0IAAvnISvAAIAAPng");
	this.shape_427.setTransform(472.3,119.8);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#EC8E02").s().p("ApXH0IAAvnISvAAIAAPng");
	this.shape_428.setTransform(472.3,119.8);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f().s("#0000FF").ss(1,1,1).p("ApOnXQJOANJPgNQgJHZAJHWQpPgPpOAPQAKnYgKnXg");
	this.shape_429.setTransform(472.7,126.3);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#EE8F0F").s().p("ApOHYQAKnYgKnXQJOANJPgNQgKHZAKHWQpPgPpOAPg");
	this.shape_430.setTransform(472.7,126.3);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f().s("#0000FF").ss(1,1,1).p("ApFm7QJFAaJGgaQgTG+ATG5QpGgepFAeQAVm8gVm7g");
	this.shape_431.setTransform(473.1,132.8);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#F1911B").s().p("ApFG8QAVm8gVm7QJFAaJGgaQgTG+ATG5QpGgepFAeg");
	this.shape_432.setTransform(473.1,132.8);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f().s("#0000FF").ss(1,1,1).p("Ao8mgQI8AoI9goQgdGlAdGcQo9guo8AuQAfmhgfmgg");
	this.shape_433.setTransform(473.5,139.3);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#F39228").s().p("Ao8GgQAfmggfmgQI8AoI9goQgdGlAdGbQo9gto8Atg");
	this.shape_434.setTransform(473.5,139.3);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f().s("#0000FF").ss(1,1,1).p("AozmEQIzA2I0g2QgmGLAmF+Qo0g9ozA9QAqmFgqmEg");
	this.shape_435.setTransform(473.9,145.7);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#F69434").s().p("AozGFQAqmFgqmEQIzA2I0g2QgmGLAmF+Qo0g9ozA9g");
	this.shape_436.setTransform(473.9,145.7);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f().s("#0000FF").ss(1,1,1).p("AorloQIrBDIshDQgwFxAwFgQoshMorBMQA1lpg1log");
	this.shape_437.setTransform(474.3,152.2);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#F89541").s().p("AoqFpQA1lpg1loQIqBDIrhDQgvFxAvFgQorhMoqBMg");
	this.shape_438.setTransform(474.3,152.2);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f().s("#0000FF").ss(1,1,1).p("AoilMQIiBQIjhQQg6FXA6FCQojhboiBbQBAlNhAlMg");
	this.shape_439.setTransform(474.7,158.7);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#FA964D").s().p("AoiFNQBAlNhAlMQIiBPIjhPQg6FXA6FCQojhboiBbg");
	this.shape_440.setTransform(474.7,158.7);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f().s("#0000FF").ss(1,1,1).p("AoZkwQIZBdIahdQhDE8BDElQoahqoZBqQBKkxhKkwg");
	this.shape_441.setTransform(475.1,165.2);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#FD985A").s().p("AoZExQBKkxhKkwQIZBdIahdQhDE8BDElQoahqoZBqg");
	this.shape_442.setTransform(475.1,165.2);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f().s("#0000FF").ss(1,1,1).p("AoQEVQBVkVhVkUQIQBqIRhqQhMEiBMEHQoRh5oQB5g");
	this.shape_443.setTransform(475.5,171.6);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#FF9966").s().p("AoQEVQBVkVhVkUQIQBqIRhqQhMEiBMEHQoRh5oQB5g");
	this.shape_444.setTransform(475.5,171.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_386},{t:this.shape_385}]},9).to({state:[{t:this.shape_388},{t:this.shape_387}]},1).to({state:[{t:this.shape_390},{t:this.shape_389}]},1).to({state:[{t:this.shape_392},{t:this.shape_391}]},1).to({state:[{t:this.shape_394},{t:this.shape_393}]},1).to({state:[{t:this.shape_396},{t:this.shape_395}]},1).to({state:[{t:this.shape_398},{t:this.shape_397}]},1).to({state:[{t:this.shape_400},{t:this.shape_399}]},1).to({state:[{t:this.shape_402},{t:this.shape_401}]},1).to({state:[{t:this.shape_404},{t:this.shape_403}]},1).to({state:[{t:this.shape_406},{t:this.shape_405}]},1).to({state:[{t:this.shape_408},{t:this.shape_407}]},1).to({state:[{t:this.shape_410},{t:this.shape_409}]},1).to({state:[{t:this.shape_412},{t:this.shape_411}]},1).to({state:[{t:this.shape_414},{t:this.shape_413}]},1).to({state:[{t:this.shape_414},{t:this.shape_415}]},25).to({state:[{t:this.shape_417},{t:this.shape_416}]},1).to({state:[{t:this.shape_419},{t:this.shape_418}]},1).to({state:[{t:this.shape_421},{t:this.shape_420}]},1).to({state:[{t:this.shape_423},{t:this.shape_422}]},1).to({state:[{t:this.shape_425},{t:this.shape_424}]},1).to({state:[{t:this.shape_427},{t:this.shape_426}]},1).to({state:[{t:this.shape_428},{t:this.shape_426}]},27).to({state:[{t:this.shape_430},{t:this.shape_429}]},1).to({state:[{t:this.shape_432},{t:this.shape_431}]},1).to({state:[{t:this.shape_434},{t:this.shape_433}]},1).to({state:[{t:this.shape_436},{t:this.shape_435}]},1).to({state:[{t:this.shape_438},{t:this.shape_437}]},1).to({state:[{t:this.shape_440},{t:this.shape_439}]},1).to({state:[{t:this.shape_442},{t:this.shape_441}]},1).to({state:[{t:this.shape_444},{t:this.shape_443}]},1).wait(1));

	// A
	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f().s("#0000FF").ss(1,1,1).p("AArArQgSASgZAAQgYAAgSgSQgSgSAAgZQAAgYASgSQASgSAYAAQAZAAASASQASASAAAYQAAAZgSASg");
	this.shape_445.setTransform(254,204.3,0.781,0.781);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#FF0066").s().p("AgqArQgSgSAAgZQAAgYASgSQASgSAYAAQAZAAASASQASASAAAYQAAAZgSASQgSASgZAAQgYAAgSgSg");
	this.shape_446.setTransform(254,204.3,0.781,0.781);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f().s("#0000FF").ss(1,1,1).p("AhPgEQAKgDAKgEQgIgJgGgJQAKAAAKAAQgEgLgCgLQAHABAKACQACABACABQAAgMAAgLQAIAGAIAHQAFgLAEgLQAGAJAFAIQAFgHAGgHQABgCACgCQACAKADAKQAKgHAKgGQAAALgBAKQAMgCALgCQgFAIgFAJQAMABALABQgHAHgHAHQAMAFAKAFQgIAFgJAFQAJAHAJAIQgBAAgCgBQgIACgJACQAGAKAGALQgJgBgLgCQADANABAMQgIgFgJgFQgCAMgCAMQgGgHgHgIQgFALgGALQgEgJgEgIQgGAFgHAGQgDADgDACQgBgJgBgKQgLAFgLAEQACgJADgKQgNACgMAAQABgDABgDQAEgGAEgFQgNgDgLgCQAIgGAIgGQgLgGgKgHg");
	this.shape_447.setTransform(266.4,210.8);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#FF005F").s().p("AAEA/IgOALIgFAFIgCgTIgWAJIAFgTIgZACIACgGIAIgLIgYgFIAPgMIgUgNIgBgJIAUgHIgPgSIAVAAIgGgWIARADIADACIABgXIAQANIAJgWIALARIAKgOIAEgEIAEAUIAVgNIgCAVIAYgEIgKARIAXACIgOAOIAWAKIgRAKIARAPIgCgBIgRAEIAMAVIgUgDIAEAZIgRgKIgEAYIgNgPIgLAWIgIgRg");
	this.shape_448.setTransform(266.4,210.8);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f().s("#0000FF").ss(1,1,1).p("AhwgLQATgDAUgCQgPgPgPgPQATADAUAEQgJgTgJgTQAOAGAPAHQADACAEADQgDgVgCgUQANAOANAPQAFgVAFgUQAIASAHASQAIgOAIgOQACgEADgEQABAUABATQARgOAQgNQgFATgFATQAVgHATgHQgMAPgMAQQAXgBATgBQgPAMgQAMQAVAGAUAGQgSAGgSAFQARANARAMQgCgBgCAAQgRAAgRgBQANASAMARQgSgGgSgGQAGAVAFAVQgOgMgOgMQgCAVgBAUQgKgQgKgQQgHAUgIAUQgEgSgEgSQgKALgKAKQgFAGgFAGQACgTABgUQgSAMgSAKQAIgRAIgSQgVAFgWAEQAEgFAEgFQAJgJAJgKQgVgCgWgCQASgJARgIQgUgJgUgJg");
	this.shape_449.setTransform(278.9,217.4);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#FF0057").s().p("AgBBNIgTAVIgKAMIADgnIgkAWIAPgjIgqAJIAHgKIATgTIgrgEIAigRIgmgSIgBgKIAmgFIgdgeIAmAHIgRgmIAcANIAIAFIgFgpIAaAdIAKgpIAPAkIAPgcIAGgIIACAnIAhgbIgKAmIAogOIgYAfIAqgCIgfAYIApAMIglALIAjAZIgFgBIghgBIAZAjIglgMIAMAqIgdgYIgCApIgUggIgPAoIgJgkg");
	this.shape_450.setTransform(278.9,217.4);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f().s("#0000FF").ss(1,1,1).p("AiSgRQAdgCAdgDQgXgUgWgVQAcAHAdAHQgPgbgOgaQAUALAUAMQAFADAGAEQgGgegFgeQASAXATAXQAFgeAFgeQAKAcAJAbQALgVALgUQADgGADgGQAAAdABAdQAWgVAXgVQgJAcgKAcQAdgMAcgMQgTAWgTAXQAhgDAcgDQgYAQgYAQQAeAIAdAHQgbAHgcAHQAaAQAaARQgEgBgEgBQgZgBgZgCQATAYAUAYQgbgLgbgLQALAdAJAeQgUgTgVgUQAAAeAAAfQgOgZgOgaQgJAegKAdQgEgcgFgcQgNAQgNAQQgHAJgGAIQAEgcAFgdQgaASgZAQQANgZAOgZQgfAIgeAHQAHgHAGgGQAOgOAPgNQgfgCgfgCQAbgLAagMQgdgLgcgMg");
	this.shape_451.setTransform(291.4,224);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#FF0050").s().p("AgGBbIgaAgIgNARIAJg5IgzAiIAbgyIg9APIANgNIAdgbIg+gEIA1gXIg5gXIgBgJIA6gFIgtgpIA5AOIgdg1IAoAXIALAHIgLg8IAlAuIAKg8IATA3IAWgpIAGgMIABA6IAtgqIgTA4IA5gYIgmAtIA9gGIgwAgIA7APIg3AOIA0AhIgIgCIgygDIAnAwIg2gWIAUA7IgpgnIAAA9IgcgzIgTA7IgJg4g");
	this.shape_452.setTransform(291.4,224);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f().s("#0000FF").ss(1,1,1).p("Ai0gXQAngCAmgDQgegagegaQAlALAmAKQgUgjgUgiQAaAQAZARQAHAFAHAFQgHgngIgnQAXAfAXAfQAGgoAFgnQAMAlALAlQAOgcANgbQAFgIADgIQAAAmgBAnQAdgcAcgcQgNAkgNAlQAkgRAkgQQgZAdgZAdQAqgFAlgEQghAUghAUQAoAJAnAIQgmAJglAJQAjAUAiAUQgFAAgFgBQghgEgigDQAaAfAaAeQgjgPgjgRQAPAnANAlQgagagbgaQAAAnABAoQgRgigRgjQgMAogKAlQgGglgFgmQgRAWgQAVQgIALgIALQAHglAHgmQghAXghAXQATghATgiQgnAMgnALQAJgJAJgIQAUgRATgRQgogCgogBQAjgPAkgOQgmgOglgPg");
	this.shape_453.setTransform(304,230.6);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#FF0049").s().p("AgLBqIghAqIgQAWIAOhKIhCAuIAmhEIhNAXIASgRIAmgiIhQgDIBHgdIhLgdIgBgIIBNgFIg7g0IBKAWIgohFIAzAgIAPAKIgQhOIAuA/IALhQIAXBKIAbg3IAJgQIgCBNIA5g3IgaBJIBIgiIgyA6IBPgJIhCAoIBPARIhKASIBEApIgKgCIhCgHIAzA9IhFgfIAcBLIg1g0QgBAnACAoIgjhEIgWBMIgLhKg");
	this.shape_454.setTransform(304,230.6);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f().s("#0000FF").ss(1,1,1).p("AjVgdQAwgCAwgCQgmggglgfQAuAOAuANQgZgqgZgqQAfAVAgAVQAIAHAJAGQgKgwgLgwQAcAnAcAoQAGgyAHgwQAOAuAMAuQARgiAQgjQAFgKAFgKQgCAwgCAxQAjgkAjgjQgSAtgRAuQAtgWAsgVQghAkgfAkQAzgHAvgGQgqAZgpAYQAxAKAvAKQguAJgvAKQArAZArAYQgGgBgHgBQgpgFgqgFQAhAmAgAlQgrgUgsgWQATAvASAuQggghghghQAAAwADAxQgVgrgVgrQgNAwgOAvQgFgvgHgvQgSAagUAbQgKAOgKAOQAKgvAKgvQgoAdgpAeQAYgqAZgpQgvAPgwAOQAMgKALgLQAZgUAYgVQgxgCgygBQAtgRAtgRQgvgRgugSg");
	this.shape_455.setTransform(316.5,237.1);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#FF0042").s().p("AgQB4IgnA1IgUAcIATheIhQA7IAyhTIhgAdIAXgVIAxgpIhjgDIBagiIhdgjIgBgHIBhgEIhMg/IBcAbIgyhUIA/AqIARANIgVhgIA5BPIAMhiIAaBcIAhhFIAKgUIgFBhIBGhHIgjBbIBZgrIhABIIBjgNIhTAxIBgAUIhdATIBWAxIgNgCIhTgKIBBBLIhWgqIAkBdIhBhCQAAAwADAxIgqhWIgbBfIgLheg");
	this.shape_456.setTransform(316.5,237.1);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f().s("#0000FF").ss(1,1,1).p("Aj3gjQA6gCA6gBQgugmgtglQA3ARA3ASQgfgzgegxQAlAZAlAbQAKAHALAIQgOg5gNg5QAhAvAiAwQAGg7AHg6QAPA4AQA4QASgqAUgpQAFgMAGgMQgDA6gDA6QApgrApgqQgWA1gVA2QA1gaA0gbQgnArgmArQA+gIA2gIQgyAdgyAdQA6ALA6ALQg5AKg4ALQAzAeA0AdQgHgCgIgBQgygHgygHQAoAtAmAsQgzgZgzgbQAWA4AWA3QgngpgmgoQAAA5AEA6QgYg0gZg0QgPA5gPA5QgGg5gHg5QgXAggWAgQgLARgMARQAMg4ANg5QgwAkgvAjQAegxAegyQg5ASg4ASQAOgMAOgMQAegZAegZQg7gBg7gBQA2gUA2gUQg3gTg5gVg");
	this.shape_457.setTransform(329,243.7);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#FF003A").s().p("AgWCGIgtBAIgXAiIAZhxIhgBHIA9hjIhyAkIAdgYIA8gyIh2gCIBsgoIhvgoIgBgGIB0gDIhbhLIBvAjIg+hkIBKA0IAUAPIgahyIBDBfIAMh1IAgBwIAmhTIALgYIgHB0IBThVIgrBrIBpg1IhNBWIB0gQIhkA6IB0AWIhxAVIBmA7IgOgDIhkgOIBOBZIhmg0IAsBvIhOhRQABA5AEA6IgxhoIgeByIgNhyg");
	this.shape_458.setTransform(329,243.7);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f().s("#0000FF").ss(1,1,1).p("AkZgqQBEAABEgCQg2grg1grQBBAVBAAVQgkg6glg6QArAfArAfQAMAJAMAKQgQhDgQhDQAmA4AmA4QAHhEAHhEQASBBARBBQAWgwAWgwQAGgOAHgOQgEBEgFBDQAwgyAvgyQgaA/gaA/QA9ggA9gfQguAygtAyQBIgKA/gKQg6Ahg7AhQBDANBEAMQhCAMhDAMQA8AiA8AgQgIgBgJgCQg6gHg6gKQAuA0AtAzQg7gfg9geQAbA/AaBAQgsgwgtgvQABBCAFBDQgcg8gcg+QgSBDgRBCQgGhCgHhDQgaAlgZAlQgOAUgNAUQAPhCAPhCQg3Aqg3ApQAkg5Akg6QhBAWhCAWQARgOAQgPQAkgcAjgdQhEAAhFgBQA/gXBAgXQhBgWhBgYg");
	this.shape_459.setTransform(341.5,250.3);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#FF0033").s().p("AgbCVIgzBKIgbAnIAeiDIhuBTIBIhzIiDAsIAhgcIBHg6IiJgCIB/gtIiCguIgBgGICIgCIhrhVICBApIhJh0IBWA+IAYASIggiFIBMBxIAOiJIAjCCIAshgIANgcIgJCHIBfhkIg0B+IB6g/IhbBkICHgUIh1BCICHAZIiFAYIB4BCIgRgDIh0gRIBbBnIh4g9IA1B/IhZhgQABBCAFBEIg4h6IgjCFIgNiFg");
	this.shape_460.setTransform(341.5,250.3);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f().s("#0000FF").ss(1,1,1).p("Ak6gwQBNgBBOgBQg+gwg9gxQBKAZBKAYQgqhCgqhCQAwAkAwAkQAOALAOAKQgThLgShMQArBAArBAQAHhNAIhOQAUBLATBKQAZg3AYg3QAHgQAHgQQgFBNgFBNQA1g5A2g5QgeBIgfBHQBGgkBFgkQg0A5g1A5QBTgNBIgLQhEAlhEAlQBOAOBMAOQhLANhMANQBEAmBFAlQgKgBgKgCQhCgKhDgKQA1A6A0A6QhEgkhFgjQAfBHAfBIQgzg2gzg3QACBLAGBOQgghGgghHQgTBNgTBLQgHhNgIhMQgcAqgdAqQgPAXgPAXQAShLAShLQg/Awg+AvQAqhBAphBQhKAZhLAZQATgRAUgPQApghAoggQhOAAhOgCQBJgZBIgaQhKgZhJgag");
	this.shape_461.setTransform(354,256.8);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#FF002C").s().p("AghCjIg5BUIgeAuIAkiWIh9BfIBTiCIiVAxIAngfIBRhBIicgCICRgyIiTg0IgBgFICbgCIh7hhICUAxIhUiEIBgBIIAcAWIgliYIBWCAIAPiaIAnCUIAxhuIAOgfIgKCaIBrhzIg9CQICLhJIhpByICbgYIiIBKICaAcIiXAaICJBMIgUgEIiFgUIBpB0IiJhHIA+CQIhmhuQACBLAGBOIhAiNIgmCYIgPiZg");
	this.shape_462.setTransform(354,256.8);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f().s("#0000FF").ss(1,1,1).p("Alcg2QBXAABXgBQhFg2hFg2QBTAbBTAcQgwhJgvhKQA2ApA2AoQAPAMAPAMQgVhUgVhVQAwBIAwBJQAIhXAIhYQAWBVAVBUQAcg/Abg+QAIgRAIgSQgHBXgGBWQA8hAA7hAQgiBQgjBQQBOgqBNgpQg7BAg7BAQBdgOBQgNQhMAphMAqQBWAPBXAPQhWAOhVAPQBNAqBNAqQgLgCgLgCQhLgMhLgMQA7BBA8BBQhNgphNgpQAjBRAjBRQg5g+g6g+QAEBUAGBXQgjhPgjhQQgVBWgWBUQgIhWgHhWQggAwggAvQgRAagRAZQAVhUAVhUQhGA2hFA1QAvhJAvhJQhUAchTAdQAWgSAWgRQAuglAuglQhYAAhXAAQBSgcBRgdQhSgchTgdg");
	this.shape_463.setTransform(366.6,263.4);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#FF0024").s().p("AgmCxIhABfIgiA0IAqipIiLBrIBeiRIinA4IAsgjIBchJIivgBICjg5Iilg5IgBgEICugBIiKhsICmA4IhfiUIBsBRIAeAZIgqiqIBgCRIAQiuIArCoIA3h8IAQgkIgNCtIB3iAIhFCgICbhTIh2CBICtgcIiYBUICtAdIirAdICaBUIgWgEIiWgYIB3CCIiahSIBGCiIhzh8QAEBUAGBXIhGieIgrCpIgPisg");
	this.shape_464.setTransform(366.6,263.4);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f().s("#0000FF").ss(1,1,1).p("Al9g8QBgAABhAAQhNg8hMg8QBcAfBbAfQg1hRg1hRQA8AtA8AuQARANARAOQgYhegYheQA1BRA1BQQAIhgAJhhQAYBdAXBeQAehFAehFQAJgUAJgUQgIBhgIBgQBChIBChHQgmBZgnBYQBWguBVguQhBBHhCBHQBmgRBagOQhVAuhVAuQBgAQBfAQQheAPhgAQQBWAvBVAuQgMgCgMgDQhTgNhTgOQBCBIBCBIQhVguhWguQAnBZAnBaQg/hFg/hFQAEBdAHBgQgmhYgohYQgWBegYBeQgIhfgJhhQgiA1gjA1QgTAcgTAdQAYhdAXheQhNA8hMA7QA0hRA1hQQhcAfhdAgQAZgUAYgTQA0goAzgpQhhABhhgBQBbgfBbgfQhcgfhcggg");
	this.shape_465.setTransform(379.1,269.9);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#FF001D").s().p("AgsC/IhFBqIgmA5IAvi7IiZB3IBpihIi5A/IAxgnIBnhRIjCAAIC2g+Ii4g/IAAgDIDBAAIiZh4IC3A+IhqiiIB4BbIAiAbIgwi8IBqChIARjBIAvC7IA8iKIASgoIgQDBICEiPIhNCxICrhcIiDCOIDAgfIiqBcIC/AgIi+AfICrBdIgYgFIimgbICECQIirhcIBOCzIh+iKQAEBdAHBgIhOiwIguC8IgRjAg");
	this.shape_466.setTransform(379.1,269.9);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f().s("#0000FF").ss(1,1,1).p("AmfhDQBqABBqAAQhUhBhUhCQBlAjBkAiQg6hZg7hZQBCAyBBAzQATAPASAPQgahngahoQA6BaA6BZQAIhrAJhqQAaBnAZBnQAhhMAhhMQAKgVAJgXQgIBqgKBrQBJhPBIhPQgrBhgrBhQBegyBegzQhJBOhHBNQBvgSBjgRQheAzheAyQBqARBpASQhpAQhoARQBeA0BdAyQgNgDgNgCQhcgPhbgPQBJBOBIBOQhdgyhegzQArBiArBiQhFhMhFhNQAEBnAJBpQgrhggqhiQgZBogaBnQgIhqgJhpQgmA6gmA5QgUAggVAfQAahmAahnQhUBBhUBDQA6haA6hYQhkAjhmAjQAbgWAcgVQA4gsA5gsQhrABhrAAQBlgiBkgjQhlgihlgig");
	this.shape_467.setTransform(391.6,276.5);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#FF0016").s().p("AgxDOIhLBzIgqA/IA1jNIipCDIB0iyIjJBGIA2gqIBxhYIjVABIDJhFIjLhEIAAgDIDUABIioiCIDKBEIh1ixICCBkIAlAeIg0jPIB0CyIARjUIAzDOIBCiYIAUgrIgSDTICQidIhWDCIC8hlIiQCbIDRgjIi7BlIDTAjIjRAhIC7BlIgbgEIi2geICRCcIi6hlIBVDDIiKiXQAEBlAJBrIhVjDIgyDPIgSjTg");
	this.shape_468.setTransform(391.6,276.5);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f().s("#0000FF").ss(1,1,1).p("AnBhJQB1ABBzAAQhchGhchHQBuAmBuAmQhAhhhAhhQBHA3BHA3QAUARAUAQQgchwgehxQA/BhBABiQAJh0AJh0QAcBxAbBwQAkhTAjhTQALgXAKgYQgKBzgKB0QBPhWBOhWQgvBqgvBqQBmg4Bmg3QhPBVhPBVQB6gVBrgTQhmA3hnA3QBzASBzATQhzARhyAUQBnA2BmA2QgPgCgPgDQhjgQhjgRQBPBVBPBVQhmg3hmg4QAwBqAvBrQhMhUhLhTQAFBvAKB0QguhqguhqQgbBwgcBxQgJhzgJh0QgpA/gpA/QgXAjgWAiQAdhwAdhwQhcBIhbBHQBAhgBAhhQhuAmhuAnQAdgYAegWQA+gwA+gwQh0AAh1ABQBugkBugmQhugkhugmg");
	this.shape_469.setTransform(404.1,283.1);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#FF000F").s().p("Ag2DcIhSB+IgtBFIA6jgIi3CQICAjCIjcBNIA7guIB8hgIjpABIDchKIjchKIgBgCIDoABIi4iNIDcBMIiAjCICOBvIAoAgIg6jhIB/DCIASjnIA3DhIBHimIAVgvIgUDnICdisIheDVIDMhwIieCpIDlgnIjNBtIDmAmIjlAkIDNBuIgegGIjGghICeCqIjMhvIBfDUIiXimQAFBvAKB0IhcjUIg3DhIgSjng");
	this.shape_470.setTransform(404.1,283.1);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f().s("#0000FF").ss(1,1,1).p("AnihPQB9ABB+ABQhjhMhkhNQB2ApB3AqQhFhphGhoQBNA8BNA8QAVARAXASQggh5ggh6QBEBqBEBpQAKh9AKh+QAeB6AdB6QAmhaAmhZQAMgaALgaQgLB+gLB9QBUheBVhdQg0BzgzBzQBvg9Bug9QhWBchWBcQCEgXB0gUQhvA7hvA7QB8AUB8AUQh7ATh8AUQBvA7BvA7QgQgDgQgDQhsgShsgTQBWBcBWBcQhug8hug9QAzBzAzBzQhRhbhShaQAGB4ALB9Qgyhzgyh0QgcB7geB5QgKh8gKh+QgrBFgsBEQgZAlgYAmQAgh6Afh5QhjBOhiBOQBFhpBFhpQh2Aqh3AqQAggZAhgZQBDgzBDg1Qh9ACh/AAQB4gnB3goQh3goh4gog");
	this.shape_471.setTransform(416.7,289.6);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#FF0007").s().p("Ag8DqIhYCKIgwBKIA/jzIjGCcICMjRIjvBTIBBgxICHhpIj8ACIDvhPIjvhPIAAgCID7ADIjHiaIDtBTIiLjRICZB4IAtAkIhAj0ICIDTIATj7IA8D1IBMi0IAXgzIgXD6ICpi7IhmDmIDch6IirC4ID4gqIjeB2ID4AnIj4AnIDfB2IghgGIjXglICrC4Ijbh5IBmDmIiji1QAFB4ALB9IhjjnIg7D0IgTj6g");
	this.shape_472.setTransform(416.7,289.6);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f().s("#0000FF").ss(1,1,1).p("AjTnbICSDjIAUkNIA/EGIBqj4IgYENIC1jJIhvD3IDtiDIi5DGIELgvIjvB/IELApIkLAqIDvB/IkLgvIC5DGIjtiDIBvD3Ii1jJIAYENIhqj4Ig/EGIgUkNIiSDjIBEkFIjUCoICWjhIj/BaIDXilIkPADIEBhWIkBhVIEPADIjXilID/BaIiWjhIDUCog");
	this.shape_473.setTransform(429.2,296.2);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#FF0000").s().p("AhBD5IiSDjIBEkFIjUCoICWjhIj/BaIDXilIkPADIEBhWIkBhVIEPADIjXilID/BaIiWjhIDUCoIhEkFICSDjIAUkNIA/EGIBqj4IgYENIC1jJIhvD3IDtiDIi5DGIELgvIjvB/IELApIkLAqIDvB/IkLgvIC5DGIjtiDIBvD3Ii1jJIAYENIhqj4Ig/EGg");
	this.shape_474.setTransform(429.2,296.2);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f().s("#0000FF").ss(1,1,1).p("AoSiaID1ACIigiJIDpBLIhqi7IDECMIgmjaICNC9IAjjgIBJDbIBsjPIgBBPIgNCdICYiUIhdDhIDGhZIibC4IDegUIjHB8IDfA3IjbA1ICwBqIjygnICHClIjZhtIBJDOIiqioIABDhIhrjPIhJDaIgkjgIiACwIA5jtIiwB5IB9jPIjVA4ICzidIjigRIDWhag");
	this.shape_475.setTransform(428.2,296.3);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#FF0000").s().p("AiUEjIiACwIA5jtIiwB5IB9jPIjVA4ICzidIjigRIDWhaIjWhaID1ACIigiJIDpBLIhqi7IDECMIgmjaICNC9IAjjgIBJDbIBsjPIgBBPIgNCdICYiUIhdDhIDGhZIibC4IDegUIjHB8IDfA3IjbA1ICwBqIjygnICHClIjZhtIBJDOIiqioIABDhIhrjPIhJDag");
	this.shape_476.setTransform(428.2,296.3);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f().s("#0000FF").ss(1,1,1).p("AofjfIDaACIhohuIDRA8Ig+iWIC0BwIgGiuICGCYIA0i0IBSCvIBtimIAIBAIgLCNIB6hgIhLDMICegxIh7CqICyAIIigB6ICyBDIiuBBIB0BVIjYgfIBUCEIjEhXIAjCkIigiGIgWC0IhtimIhQCvIg0izIhvB+IAujVIiNBJIBki9IirAWICQiVIi0gkICqhfIijhcg");
	this.shape_477.setTransform(427.3,296.5);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#FF0000").s().p("AjmFNIhvB+IAujVIiNBJIBki9IiqAWICPiVIi0gkICrhfIijhcIgIgDIDaACIhohuIDRA8Ig9iWIC0BwIgIiuICHCYIA0i0IBSCvIBtimIAIBAIgKCNIB4hgIhKDMICfgxIh8CqICyAIIigB6ICzBDIivBBIB0BVIjYgfIBVCEIjFhXIAjCkIigiGIgWC0IhtimIhRCvg");
	this.shape_478.setTransform(427.3,296.5);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f().s("#0000FF").ss(1,1,1).p("AotkkIDBACIgyhTIC6AtIgRhwICkBTIAYiCICCByIBEiHIBaCDIBvh8IAQAwIgIB8IBbgrIg4C2IB3gIIhdCdICFAiIh3B5ICFBPIiDBOIA6BAIi/gYIAiBjIiwhBIgDB7IiVhkIgsCGIhwh8IhZCDIhEiGIhcBLIAii9IhqAaIBLiqIiAgNIBsiMIiHg4ICAhlIh6hhg");
	this.shape_479.setTransform(426.4,296.7);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#FF0000").s().p("Ak5F2IhcBMIAii9IhqAaIBLiqIiAgOIBsiLIiHg5ICAhlIh6hgIgGgCIDBABIgyhSIC6AtIgRhwICkBUIAYiDICCBxIBEiGIBaCDIBvh8IAQAvIgIB9IBbgrIg4C1IB3gHIhdCdICFAjIh3B4ICFBPIiDBOIA6BAIi/gYIAiBjIiwhBIgDB7IiVhlIgsCHIhwh8IhZCDg");
	this.shape_480.setTransform(426.4,296.7);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f().s("#0000FF").ss(1,1,1).p("Ao7lpICnABIAGg3ICiAeIAchLICUA4IA2hXIB9BMIBUhaIBjBYIBxhTIAXAgIgFBrIA9AKIglCgIBPAiIg+CPIBZA9IhQB3IBZBcIhXBZIgBArIingQIgPBCIidgsIgoBTIiJhDIhFBaIhxhTIhiBXIhThaIgqAaIghgBIAXilIhHgVIAyiYIhVgwIBIiDIhahMIBVhqIhRhlg");
	this.shape_481.setTransform(425.4,296.8);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#FF0000").s().p("AmLGgIgqAZIghgBIAXikIhHgVIAyiYIhVgwIBIiDIhahNIBVhqIhRhlIgEgBICnABIAGg3ICiAeIAchLICUA4IA2hXIB9BLIBUhZIBjBYIBxhTIAXAfIgFBrIA9ALIglCgIBPAiIg+CPIBZA8IhQB4IBZBcIhXBZIgBArIingQIgPBCIidgsIgoBSIiJhDIhFBaIhxhSIhiBXg");
	this.shape_482.setTransform(425.4,296.8);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f().s("#0000FF").ss(1,1,1).p("ApJmuICOABIA8gcICMAPIBHglICEAbIBUgrIB6AmIBkgtIBrAsIBygqIAgAQIgDBbIAeA/IgSCKIAoBLIgfCAIAsBZIgoB2IAtBoIgrBmIg9AUIiNgHIhBAhIiJgWIhOApIh+ghIhdAtIhygqIhqAsIhkgtIgoANIgRgnIAMiMIgjhFIAZiGIgrhSIAkh7IgthgIAqhvIgohqg");
	this.shape_483.setTransform(424.5,297);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#FF0000").s().p("AneHKIgpAMIgPgmIALiNIgkhEIAaiGIgrhSIAkh7IgthgIArhvIgphrIgCAAICOAAIA9gbICKAPIBIglICEAcIBUgsIB6AmIBkgtIBrAsIBygqIAgAQIgCBbIAeA/IgTCKIAnBLIgeCAIAtBZIgpB2IAtBoIgsBlIg8AVIiNgHIhBAhIiJgWIhOApIh+ghIhcAtIhzgqIhrAsg");
	this.shape_484.setTransform(424.5,297);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f().s("#0000FF").ss(1,1,1).p("ApXH0IAAvnISvAAIAAPng");
	this.shape_485.setTransform(423.6,297.1);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#FF0000").s().p("ApXH0IAAvnISvAAIAAPng");
	this.shape_486.setTransform(423.6,297.1);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f().s("#0000FF").ss(1,1,1).p("AJYnzIAAPnIyvAAIAAvng");
	this.shape_487.setTransform(423.6,297.1);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f().s("#0000FF").ss(1,1,1).p("ApamTQIcgeIcglIB9NqIwHBDg");
	this.shape_488.setTransform(422.4,298.4);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#FF0000").s().p("ApamTQIcgeIbglIB9NqIwFBDg");
	this.shape_489.setTransform(422.4,298.4);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f().s("#0000FF").ss(1,1,1).p("Apck0QHgg7HfhKID6LtIteCFg");
	this.shape_490.setTransform(421.2,299.8);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#FF0000").s().p("Apck0QHgg7HfhJID6LtIteCFg");
	this.shape_491.setTransform(421.2,299.8);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f().s("#0000FF").ss(1,1,1).p("ApfjUQGkhYGjhvIF4JwIq1DHg");
	this.shape_492.setTransform(420,301.1);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#FF0000").s().p("ApfjUQGkhYGjhvIF4JwIq1DHg");
	this.shape_493.setTransform(420,301.1);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f().s("#0000FF").ss(1,1,1).p("Apih0QFoh2FniUIH2HzIoOEKg");
	this.shape_494.setTransform(418.8,302.5);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#FF0000").s().p("Apih0QFoh2FniUIH2HzIoOEKg");
	this.shape_495.setTransform(418.8,302.5);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f().s("#0000FF").ss(1,1,1).p("ApkgUQEsiUEsi5IJxF2IllFNg");
	this.shape_496.setTransform(417.6,303.8);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#FF0000").s().p("ApkgUQEsiUEsi5IJxF2IllFNg");
	this.shape_497.setTransform(417.6,303.8);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f().s("#0000FF").ss(1,1,1).p("ApnBLQDwixDwjdILvD6Ii8GOg");
	this.shape_498.setTransform(416.4,305.2);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#FF0000").s().p("ApnBKQDwiwDwjeILvD7Ii8GNg");
	this.shape_499.setTransform(416.4,305.2);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f().s("#0000FF").ss(1,1,1).p("ApqCqQC0jNC0kDINsB9IgUHQg");
	this.shape_500.setTransform(415.2,306.5);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#FF0000").s().p("ApqCqQC0jNC0kDINtB9IgVHQg");
	this.shape_501.setTransform(415.2,306.5);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f().s("#0000FF").ss(1,1,1).p("AIjkJICVITI1vAAQB4jsB4kng");
	this.shape_502.setTransform(421.4,307.9);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#FF0000").s().p("Aq3EKQB4jsB4knIPqAAICVITg");
	this.shape_503.setTransform(421.4,307.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_446},{t:this.shape_445}]},9).to({state:[{t:this.shape_448},{t:this.shape_447}]},1).to({state:[{t:this.shape_450},{t:this.shape_449}]},1).to({state:[{t:this.shape_452},{t:this.shape_451}]},1).to({state:[{t:this.shape_454},{t:this.shape_453}]},1).to({state:[{t:this.shape_456},{t:this.shape_455}]},1).to({state:[{t:this.shape_458},{t:this.shape_457}]},1).to({state:[{t:this.shape_460},{t:this.shape_459}]},1).to({state:[{t:this.shape_462},{t:this.shape_461}]},1).to({state:[{t:this.shape_464},{t:this.shape_463}]},1).to({state:[{t:this.shape_466},{t:this.shape_465}]},1).to({state:[{t:this.shape_468},{t:this.shape_467}]},1).to({state:[{t:this.shape_470},{t:this.shape_469}]},1).to({state:[{t:this.shape_472},{t:this.shape_471}]},1).to({state:[{t:this.shape_474},{t:this.shape_473}]},1).to({state:[{t:this.shape_474},{t:this.shape_473}]},31).to({state:[{t:this.shape_476},{t:this.shape_475}]},1).to({state:[{t:this.shape_478},{t:this.shape_477}]},1).to({state:[{t:this.shape_480},{t:this.shape_479}]},1).to({state:[{t:this.shape_482},{t:this.shape_481}]},1).to({state:[{t:this.shape_484},{t:this.shape_483}]},1).to({state:[{t:this.shape_486},{t:this.shape_485}]},1).to({state:[{t:this.shape_486},{t:this.shape_487}]},21).to({state:[{t:this.shape_489},{t:this.shape_488}]},1).to({state:[{t:this.shape_491},{t:this.shape_490}]},1).to({state:[{t:this.shape_493},{t:this.shape_492}]},1).to({state:[{t:this.shape_495},{t:this.shape_494}]},1).to({state:[{t:this.shape_497},{t:this.shape_496}]},1).to({state:[{t:this.shape_499},{t:this.shape_498}]},1).to({state:[{t:this.shape_501},{t:this.shape_500}]},1).to({state:[{t:this.shape_503},{t:this.shape_502}]},1).wait(1));

	// L
	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f().s("#0000FF").ss(1,1,1).p("AArArQgSASgZAAQgYAAgSgSQgSgSAAgZQAAgYASgSQASgSAYAAQAZAAASASQASASAAAYQAAAZgSASg");
	this.shape_504.setTransform(254,204.3,0.781,0.781);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#FF0066").s().p("AgqArQgSgSAAgZQAAgYASgSQASgSAYAAQAZAAASASQASASAAAYQAAAZgSASQgSASgZAAQgYAAgSgSg");
	this.shape_505.setTransform(254,204.3,0.781,0.781);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f().s("#0000FF").ss(1,1,1).p("AhPgEQAJgEAKgDQgHgJgHgJQALAAAKAAQgEgLgDgLQAIABAJACQADABACABQAAgMAAgLQAIAGAIAHQAEgLAFgLQAGAIAFAJQAFgHAFgHQACgCABgCQADAKADAKQAKgHAKgGQgBALAAAKQAMgCALgCQgFAIgFAIQAMABALACQgHAHgHAHQALAFAKAFQgHAFgJAFQAJAHAJAIQgCAAgBgBQgJACgIABQAGALAGALQgKgBgKgCQACANABAMQgIgFgIgFQgCAMgCALQgHgHgGgHQgFALgGALQgEgJgEgIQgGAFgHAGQgDACgDADQgCgJAAgKQgLAFgLAEQACgJADgKQgNABgMABQABgDABgDQAEgGAEgFQgNgDgLgCQAIgGAIgGQgLgGgKgHg");
	this.shape_506.setTransform(254.5,211.5);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#FF0771").s().p("AADA/IgMALIgGAFIgCgTIgXAJIAGgTIgaACIADgGIAHgLIgXgFIAPgMIgUgNIgBgJIATgHIgOgSIAVAAIgHgWIARADIAEACIAAgXIARANIAIgWIAMARIAKgOIADgEIAGAUIAUgNIgBAVIAWgEIgKAQIAYADIgPAOIAXAKIgRAKIASAPIgDgBIgRADIAMAWIgUgDIADAZIgQgKIgEAXIgOgOIgKAWIgJgRg");
	this.shape_507.setTransform(254.5,211.5);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f().s("#0000FF").ss(1,1,1).p("AhxgLQAUgCAUgEQgPgOgPgPQATAEAUADQgJgTgJgTQAOAHAOAGQAEACAEADQgDgVgCgUQANAOANAPQAFgVAFgUQAIASAHASQAIgOAIgOQACgDACgFQACAUABATQARgOAQgNQgFATgFATQAVgGATgHQgMAPgMAPQAXgBATgBQgPAMgQAMQAVAGAUAFQgSAHgSAGQARAMARAMQgCgBgDAAQgQAAgRAAQANARAMARQgSgGgSgGQAGAVAFAVQgOgMgOgMQgCAVgBAVQgKgQgKgRQgHAVgIATQgEgSgEgSQgKALgKAKQgFAGgFAGQACgTACgTQgTALgSALQAIgSAIgSQgVAFgWAEQAEgFAEgFQAJgJAJgJQgVgDgWgCQASgIARgJQgUgJgTgJg");
	this.shape_508.setTransform(254.9,218.7);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#FF0F7C").s().p("AAABMIgUAWIgKAMIAEgnIglAXIAQgkIgrAJIAIgKIASgSIgrgGIAjgQIgngSIgCgKIAogFIgegeIAnAHIgSgmIAcANIAIAFIgFgqIAaAeIAKgpIAPAkIAQgcIAEgIIADAnIAhgbIgKAnIAogOIgYAeIAqgCIgfAYIApALIgkANIAiAXIgFgBIghAAIAZAjIgkgMIALApIgcgXIgDApIgUggIgPAoIgIglg");
	this.shape_509.setTransform(254.9,218.7);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f().s("#0000FF").ss(1,1,1).p("AiSgRQAdgCAdgDQgWgUgXgUQAdAGAcAHQgOgagPgbQAUALAUAMQAGADAFAEQgFgegFgdQASAWASAYQAFgfAFgeQAKAcAJAcQALgWALgUQADgGADgGQABAdAAAdQAWgVAXgUQgJAbgJAcQAcgMAcgMQgTAWgSAXQAggDAcgCQgYAPgYAQQAeAIAdAHQgbAIgcAGQAaARAaAQQgEgBgEAAQgZgCgZgCQAUAYATAYQgbgLgagLQAKAeAJAdQgUgTgUgTQgBAeAAAeQgOgZgOgaQgJAegJAdQgEgcgGgcQgNARgNAPQgGAJgHAIQAEgcAFgcQgaARgZARQANgaAOgZQgeAIgfAHQAHgGAGgHQAOgNAPgOQgfgCgfgCQAbgLAagLQgdgMgcgMg");
	this.shape_510.setTransform(255.5,225.9);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#FF1687").s().p("AgGBbIgaAgIgNARIAJg4IgzAiIAbgzIg9APIANgOIAdgaIg+gEIA1gXIg5gXIgBgJIA6gFIgtgpIA5AOIgdg1IAoAXIALAHIgKg7IAkAuIAKg9IATA3IAWgpIAGgNIABA7IAtgqIgSA4IA4gYIglAtIA8gGIgwAgIA7AOIg3APIA0AhIgIgCIgygDIAnAwIg1gWIATA6IgogmIgBA9IgcgzIgSA7IgKg4g");
	this.shape_511.setTransform(255.5,225.9);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f().s("#0000FF").ss(1,1,1).p("Ai0gXQAngCAngDQgfgagegaQAmALAlAKQgUgjgTgiQAZAQAaARQAHAFAHAFQgIgngIgnQAXAfAYAfQAFgnAGgoQAMAlALAlQANgcAOgbQAEgIAEgIQgBAmgBAnQAdgcAdgcQgOAlgNAkQAlgRAkgQQgaAdgZAdQAqgFAlgEQggAUgiAUQAoAJAnAJQglAIgmAIQAjAVAiAUQgFAAgFgBQghgEghgDQAaAfAZAfQgigQgkgRQAPAnAOAlQgbgagagaQgBAnACAoQgSgigRgjQgLAngLAmQgFglgGgmQgQAWgRAVQgIALgIAMQAHgmAHgmQghAXghAXQATghAUghQgnALgnALQAIgJAJgIQAUgRAUgRQgpgCgogCQAkgOAjgOQglgOgmgPg");
	this.shape_512.setTransform(256,233.1);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#FF1D92").s().p("AgLBpIghArIgQAXIAOhMIhCAuIAnhCIhOAWIARgRIAogiIhRgEIBHgcIhLgdIgBgIIBOgFIg9gzIBLAVIgnhGIAzAhIAOAKIgQhOIAvA+IALhPIAXBLIAbg4IAIgQIgCBNIA6g4IgbBJIBJghIgzA6IBPgJIhCAoIBPASIhLAQIBFAqIgKgCIhCgHIAzA+IhGghIAdBNIg1g1QgBAnACAoIgjhFIgWBOIgLhMg");
	this.shape_513.setTransform(256,233.1);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f().s("#0000FF").ss(1,1,1).p("AjVgdQAwgCAwgCQgmggglgfQAuAOAuANQgZgqgZgqQAfAVAfAVQAJAHAJAGQgLgwgKgwQAcAnAcAoQAGgyAGgwQAOAuANAuQARgiAQgjQAFgKAEgKQgBAwgDAxQAjgkAjgjQgRAtgSAuQAtgWAsgVQggAkggAkQA1gHAtgGQgpAZgqAYQAxAKAwAKQguAJgvAKQArAZAqAYQgGgBgGgBQgpgFgqgFQAhAmAgAlQgrgUgsgWQATAvASAuQghghggghQAAAwACAxQgVgrgVgrQgNAwgNAvQgFgvgHgvQgTAagTAbQgKAOgKAOQAKgvAJgvQgoAdgoAdQAYgpAZgpQgvAPgwAOQALgKAMgLQAZgVAZgUQgygCgygBQAtgRAtgSQgvgQgvgSg");
	this.shape_514.setTransform(256.6,240.3);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#FF249D").s().p("AgRB4IgmA1IgUAcIATheIhQA6IAxhSIhfAdIAXgVIAygpIhkgDIBagjIhegiIAAgHIBggEIhLg/IBcAbIgyhUIA+AqIASANIgVhgIA4BPIAMhiIAbBcIAhhFIAJgUIgEBhIBGhHIgjBbIBZgrIhABIIBigNIhTAxIBhAUIhdATIBVAxIgMgCIhTgKIBBBLIhXgqIAlBdIhBhCQAAAwACAxIgqhWIgaBfIgMheg");
	this.shape_515.setTransform(256.6,240.3);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f().s("#0000FF").ss(1,1,1).p("Aj3gkQA6gBA6gBQgugmgtglQA3ARA4ASQgfgygfgyQAlAaAlAZQAKAJALAHQgOg5gNg6QAhAxAiAvQAGg6AHg7QAQA4APA3QATgpATgpQAFgMAGgMQgCA5gEA6QApgqApgrQgWA3gVA2QA1gbA0gbQgnAsgnAqQA/gIA3gIQgyAdgzAcQA6AMA6ALQg4AKg5ALQAzAdA0AeQgIgBgHgCQgygHgygGQAoAsAnAtQg0gbg0gZQAXA3AWA3QgngogmgpQABA4ADA8QgYg1gZg0QgPA5gPA5QgGg5gHg5QgWAggXAgQgMARgLARQAMg4ANg5QgwAjgvAkQAegxAegyQg4ASg5ATQAOgNAOgMQAegZAegZQg7AAg7gCQA2gTA2gUQg4gUg3gVg");
	this.shape_516.setTransform(257.1,247.5);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#FF2CA8").s().p("AgWCGIgsA/IgYAjIAZhwIhfBGIA9hiIhyAkIAcgZIA8gyIh2gCIBsgnIhvgpIgBgHIB1gDIhchKIBvAjIg9hkIBJAzIAVAQIgbhzIBDBgIANh1IAfBvIAmhTIALgXIgGBzIBThUIgsBsIBqg2IhPBXIB2gRIhlA5IB0AXIhxAVIBnA7IgPgDIhjgNIBOBZIhog0IAtBtIhNhRQABA6ADA7IgxhpIgeByIgNhyg");
	this.shape_517.setTransform(257.1,247.5);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f().s("#0000FF").ss(1,1,1).p("AkZgqQBEgBBEgBQg2grg1grQBBAVBAAVQgkg6glg6QArAfArAfQAMAJAMAJQgQhCgQhDQAmA4AmA4QAHhEAHhEQASBBARBCQAWgxAWgwQAGgOAHgOQgEBEgFBDQAwgyAvgxQgaA+gaA/QA9ggA9gfQguAygtAyQBIgLA/gJQg6Ahg7AhQBDANBEAMQhCALhDANQA8AhA8AiQgIgCgJgBQg6gJg6gIQAuAzAtAzQg7gfg9gfQAbBAAaBAQgsgwgtgwQABBCAFBFQgcg9gcg+QgSBDgRBCQgGhDgHhDQgaAmgZAkQgOAUgNAUQAPhBAPhCQg3Aqg3ApQAkg5Akg5QhBAVhCAVQARgOAQgOQAkgcAjgdQhEgBhFgBQA/gWBAgXQhBgWhBgYg");
	this.shape_518.setTransform(257.7,254.7);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#FF33B3").s().p("AgbCUIgzBKIgbAoIAeiDIhuBTIBIhyIiDAqIAhgcIBHg5IiJgCIB/gtIiCguIgBgGICIgCIhrhWICBAqIhJh0IBWA+IAYASIggiFIBMBwIAOiIIAjCDIAshhIANgcIgJCHIBfhjIg0B9IB6g/IhbBkICHgUIh1BCICHAZIiFAYIB4BDIgRgDIh0gRIBbBmIh4g+IA1CAIhZhgQABBCAFBFIg4h7IgjCFIgNiGg");
	this.shape_519.setTransform(257.7,254.7);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f().s("#0000FF").ss(1,1,1).p("Ak6gwQBNgBBNAAQg9gxg9gwQBKAYBJAYQgqhCgqhBQAxAjAwAkQAOALANAKQgShLgShMQArBAArBBQAHhOAHhOQAUBLATBLQAZg4AZg3QAHgQAHgQQgFBOgGBNQA2g6A1g4QgeBHgeBHQBFgkBFgkQg0A5g0A5QBSgNBIgLQhDAlhEAmQBNANBNAOQhMANhLANQBEAmBEAmQgJgCgKgCQhDgKhCgKQA0A6A1A6QhEgkhFgkQAfBIAeBJQgyg3g0g3QADBLAFBOQgfhGgghHQgUBMgSBMQgIhNgHhMQgdAqgcAqQgPAXgQAXQAShLAShLQg+Awg+AvQAphBAqhBQhLAZhKAYQATgPAUgQQAoghApggQhOgBhOAAQBIgaBJgaQhKgZhKgag");
	this.shape_520.setTransform(258.2,261.9);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#FF3ABD").s().p("AghCjIg5BUIgfAuIAkiWIh8BfIBTiCIiVAxIAngfIBRhBIicgBICRg0IiUgzIAAgFICagBIh6hhICTAwIhUiDIBhBHIAbAVIgkiXIBWCBIAOicIAnCWIAyhvIAOggIgLCbIBrhyIg8COICKhIIhoByICagYIiHBLICaAbIiXAaICIBMIgTgEIiFgUIBpB0IiJhIIA9CRIhmhuQADBLAFBOIg/iNIgmCYIgPiZg");
	this.shape_521.setTransform(258.2,261.9);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f().s("#0000FF").ss(1,1,1).p("Alcg2QBXAABYgBQhFg2hGg2QBUAbBSAcQgvhJgwhKQA2ApA2AoQAQAMAPANQgVhVgWhVQAwBIAxBJQAHhXAIhYQAWBVAVBUQAcg/Abg+QAIgRAIgSQgHBXgGBWQA8hAA8hAQgjBQgiBQQBNgpBOgqQg8BAg6BAQBcgOBRgNQhMAphNAqQBXAPBWAPQhVAOhWAPQBNAqBNAqQgLgCgMgCQhKgMhKgMQA6BBA8BBQhNgphMgpQAjBRAiBRQg5g+g5g+QADBUAHBXQgjhPgkhQQgVBWgWBUQgIhWgHhWQggAwggAvQgQAagSAZQAVhUAVhUQhGA2hFA2QAvhKAvhJQhTAchUAdQAWgSAWgRQAuglAuglQhXAAhZAAQBTgcBRgcQhTgdhSgdg");
	this.shape_522.setTransform(258.8,269.1);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#FF42C8").s().p("AgmCxIhABfIgiAzIAqioIiLBsIBeiTIinA5IAsgjIBchJIiwgBICkg5Iilg4IgBgFICugBIiJhsIClA3IhfiTIBsBRIAeAZIgqiqIBhCRIAPiuIArCoIA3h8IAQgkIgNCuIB3iBIhECgICbhTIh2CAICtgbIiZBUICtAdIirAdICaBUIgWgEIiWgYIB3CCIiahRIBGChIhzh8QAEBUAHBXIhHifIgqCqIgQisg");
	this.shape_523.setTransform(258.8,269.1);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f().s("#0000FF").ss(1,1,1).p("Al+g8QBhAABhAAQhNg8hMg8QBbAfBcAfQg1hRg1hRQA8AtA7AuQARANARAOQgXhegYheQA1BQA1BRQAIhhAIhgQAYBdAXBeQAfhFAehFQAJgUAIgUQgHBhgIBgQBDhIBBhHQgmBYgnBZQBVguBWguQhCBHhBBHQBmgRBagOQhVAuhVAuQBfAQBhAQQhfAPhfAQQBVAvBVAuQgMgDgNgCQhSgNhTgOQBBBIBCBHQhVgthVguQAnBZAnBaQg/hFg/hFQADBdAIBgQgnhYgnhYQgWBegYBeQgJhggIhgQgjA1giA1QgTAcgTAdQAXhdAYheQhNA8hNA7QA1hRA0hRQhcAghcAfQAZgTAYgTQAzgoA0gpQhhAAhiAAQBcgfBbgfQhcgfhcggg");
	this.shape_524.setTransform(259.3,276.3);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#FF49D3").s().p("AgrC/IhGBqIgmA5IAvi7IiZB3IBpiiIi5A/IAygmIBmhRIjDAAIC3g+Ii4g/IgBgDIDCAAIiZh4IC3A+IhqiiIB3BbIAiAbIgvi8IBqChIARjBIAvC7IA8iKIASgoIgQDBICEiPIhNCxICrhcIiDCOIDAgfIiqBcIC/AgIi+AfICrBdIgZgFIilgbICDCPIiphbIBNCzIh/iKQAEBdAIBgIhNiwIgvC8IgQjAg");
	this.shape_525.setTransform(259.3,276.3);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f().s("#0000FF").ss(1,1,1).p("AmfhCQBqAABqAAQhUhBhUhCQBkAjBlAjQg7hag6hZQBBAzBCAyQASAPATAPQgahngbhoQA6BaA7BYQAIhqAJhqQAaBnAZBnQAhhMAhhMQAJgVAKgWQgJBqgJBpQBJhOBIhPQgrBhgrBiQBegzBegzQhJBOhIBOQBwgTBjgRQheAzheAyQBqASBpARQhpAQhpASQBeAyBeAzQgNgDgNgCQhcgPhbgPQBJBOBIBOQhdgyhegzQArBiArBiQhFhMhGhNQAFBmAJBrQgrhhgqhiQgZBogaBnQgJhpgIhqQgmA6gmA6QgVAfgUAgQAahnAahnQhUBChUBBQA6hYA6hZQhlAjhlAjQAbgWAbgVQA5gsA5gsQhrABhrAAQBlgiBkgjQhlghhlgjg");
	this.shape_526.setTransform(259.9,283.5);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#FF50DE").s().p("AgxDOIhLB0IgqA/IA0jOIioCDIB0ixIjJBGIA2grIBxhYIjVABIDIhFIjKhEIAAgCIDUAAIioiDIDJBGIh0izICCBlIAlAeIg0jPIB0CyIARjUIAzDOIBCiYIATgrIgRDTICQidIhWDDIC8hmIiRCcIDSgkIi6BlIDSAjIjRAiIC8BlIgbgFIi3geICRCcIi7hlIBWDEIiKiZQAEBmAJBrIhVjDIgzDPIgRjTg");
	this.shape_527.setTransform(259.9,283.5);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f().s("#0000FF").ss(1,1,1).p("AnAhIQB0AABzABQhchHhchHQBuAmBuAmQhAhhhAhhQBHA3BHA4QAUAQAUAQQgchwgdhxQA/BiA/BhQAJh0AJh0QAcBxAbBwQAkhTAjhSQALgYAKgYQgKB0gKBzQBPhWBOhWQgvBqgvBqQBmg4Bmg3QhPBVhPBUQB6gUBrgTQhmA3hnA3QBzATBzASQhzAShyASQBnA3BmA3QgOgDgPgCQhkgRhjgRQBPBVBPBVQhmg3hmg4QAwBqAvBrQhLhUhMhTQAFBvAKB0QguhqguhrQgbBxgdBxQgIhzgJh0QgpBAgpA/QgWAigXAiQAdhwAdhwQhcBIhbBHQBAhgBAhhQhuAmhuAnQAdgXAegXQA+gwA+gwQh0ABh0AAQBtglBuglQhugkhugmg");
	this.shape_528.setTransform(260.4,290.7);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#FF57E9").s().p("Ag2DcIhSB/IgtBEIA5jgIi2CPICAjBIjdBNIA8guIB8hgIjoABIDahKIjbhKIAAgBIDnABIi4iOIDcBMIiBjCICPBvIAoAgIg6jhIB+DDIASjoIA3DhIBIilIAVgwIgUDnICdisIhfDUIDMhvIidCpIDlgnIjNBuIDmAlIjlAkIDNBuIgdgFIjHgiICdCqIjLhvIBeDVIiXinQAFBvAKB0IhbjVIg3DiIgSjng");
	this.shape_529.setTransform(260.4,290.7);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f().s("#0000FF").ss(1,1,1).p("AnihPQB+ACB9AAQhkhMhjhNQB2AqB3ApQhGhphFhoQBNA8BNA8QAVASAWARQgfh5ggh6QBEBqBEBpQAKh9AJh9QAeB6AdB5QAnhZAmhaQALgaAMgaQgLB+gMB9QBVheBVhdQg0BzgzBzQBug9Bvg8QhWBchWBbQCEgWB0gVQhvA8hvA6QB8AUB8AUQh8ATh8AUQBvA7BvA7QgPgDgRgDQhrgShsgTQBWBcBWBcQhug9hvg8QA0BzAzBzQhRhbhShaQAGB4ALB9QgyhzgyhzQgdB6geB5QgJh8gKh+QgsBFgsBEQgYAmgYAlQAgh6Afh5QhjBOhiBOQBFhpBFhpQh2Aqh3AqQAggZAggZQBEgzBDg0Qh+ABh+AAQB4gnB2goQh3goh3gog");
	this.shape_530.setTransform(260.9,297.9);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#FF5FF4").s().p("Ag8DqIhYCJIgwBLIA/jzIjFCcICKjSIjtBUIBAgyICHhnIj8ABIDuhPIjuhQIAAgBID7ACIjHiZIDtBTIiLjRICaB4IArAjIg/jzICIDTIATj6IA7DzIBNizIAXg0IgXD7ICqi7IhnDmIDdh5IisC3ID4grIjeB2ID4AoIj4AnIDeB2IgggGIjXglICsC4Ijdh5IBnDmIiji1QAGB4ALB9IhkjmIg7DzIgTj6g");
	this.shape_531.setTransform(260.9,297.9);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f().s("#0000FF").ss(1,1,1).p("AASj/IBqj4IgYENIC1jJIhvD3IDtiDIi5DGIELgvIjvB/IELApIkLAqIDvB/IkLgvIC5DGIjtiDIBvD3Ii1jJIAYENIhqj4Ig/EGIgUkNIiSDjIBEkFIjUCoICWjhIj/BaIDXilIkPADIEBhWIkBhVIEPADIjXilID/BaIiWjhIDUCoIhEkFICSDjIAUkNg");
	this.shape_532.setTransform(261.5,305.1);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#FF66FF").s().p("AhBD5IiSDjIBEkFIjUCoICWjhIj/BaIDXilIkPADIEBhWIkBhVIEPADIjXilID/BaIiWjhIDUCoIhEkFICSDjIAUkNIA/EGIBqj4IgYENIC1jJIhvD3IDtiDIi5DGIELgvIjvB/IELApIkLAqIDvB/IkLgvIC5DGIjtiDIBvD3Ii1jJIAYENIhqj4Ig/EGg");
	this.shape_533.setTransform(261.5,305.1);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f().s("#0000FF").ss(1,1,1).p("AB8n3IgYENIC1jJIhvD3IDtiDIi5DGIELgvIjvB/IELApIkLAqIDvB/IkLgvIC5DGIjtiDIBvD3Ii1jJIAYENIhqj4Ig/EGIgUkNIiSDjIBEkFIjUCoICWjhIj/BaIDXilIkPADIEBhWIkBhVIEPADIjXilID/BaIiWjhIDUCoIhEkFICSDjIAUkNIA/EGg");
	this.shape_534.setTransform(261.5,305.1);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f().s("#0000FF").ss(1,1,1).p("AojiiID3ACIidiJIDrBLIhni8IDHCMIgjjaICQC+IAljhIBLDbIBvjPIABCVIgHBTICYiRIhdDjIDGhXIibC7IDegRIjHB/IDfA5IjeA5ICwBpIj0gmICECkIjbhtIBGDOIitioIgBDhIhujPIhLDbIgnjhIiIC2IA5jwIixB2IB9jRIjVA1ICzifIjhgUIDWhdIjUhcg");
	this.shape_535.setTransform(260.6,305.3);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#FF66FF").s().p("AidErIiIC2IA5jwIixB2IB9jRIjVA1ICzifIjhgUIDWhdIjUhcIgCgBID3ACIidiJIDrBLIhni8IDHCMIgjjaICQC+IAljhIBLDbIBvjPIABCVIgHBTICYiRIhdDjIDGhXIibC7IDegRIjHB/IDfA5IjeA5ICwBpIj0gmICECkIjbhtIBGDOIitioIgBDhIhujPIhLDbg");
	this.shape_536.setTransform(260.6,305.3);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f().s("#0000FF").ss(1,1,1).p("ApCjvIDhABIhkhtIDXA8Ig5iWIC6BwIgCivICMCYIA5i0IBYCvIBzilIARB3IgFBLIB5haIhKDRICegsIh7CwICyANIigB/ICyBJIiyBIIBzBUIjegfIBQCEIjKhYIAeClIiliGIgcC0IhyimIhWCvIg5i0Ih/CJIAujaIiOBEIBkjCIiqAQICQiaIi1gpICrhlIiqhlg");
	this.shape_537.setTransform(259.8,305.5);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#FF66FF").s().p("Aj4FdIh/CJIAujaIiOBEIBkjCIiqAQICPiaIi0gpICrhlIiqhlIgBAAIDgABIhjhtIDXA8Ig4iWIC5BwIgCivICNCYIA4i0IBYCvIBzilIASB3IgGBLIB5haIhKDRICegsIh8CwICzANIigB/ICyBJIiyBIIBzBUIjegfIBQCEIjKhYIAeClIiliGIgbC0IhyimIhXCvg");
	this.shape_538.setTransform(259.8,305.5);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f().s("#0000FF").ss(1,1,1).p("Aphk9IDKACIgqhTIDCAtIgJhwICsBTIAgiCICKByIBLiHIBiCDIB4h8IAjBZIgEBDIBbgiIg4C9IB3ABIhdClICFAqIh3CBICFBXIiFBXIA1A/IjHgXIAbBjIi5hCIgKB8IidhkIg1CGIh3h8IhiCDIhMiHIhbBLIgZARIAijFIhqASIBLiyIiAgVIBsiUIiIhBICBhsIiAhtg");
	this.shape_539.setTransform(258.9,305.8);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#FF66FF").s().p("AlUGPIhcBLIgZAQIAijEIhqASIBMiyIiAgWIBriTIiHhAICBhuIiAhsIgBAAIDKACIgqhTIDCAtIgJhwICsBTIAfiCICLBxIBLiGIBiCDIB3h8IAjBZIgDBEIBbgjIg4C+IB3AAIhdClICFArIh4CAICGBXIiFBXIA1BAIjHgYIAbBjIi5hBIgLB7IichlIg1CHIh3h8IhiCDg");
	this.shape_540.setTransform(258.9,305.8);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f().s("#0000FF").ss(1,1,1).p("AqAmLICyACIARg3ICtAeIAmhLICeA4IBChXICHBMIBfhaIBtBXIB7hTIA1A8IgDA7IA9AWIglCqIBPAsIg+CaIBZBIIhQCCIBZBmIhYBmIgJAqIixgPIgaBBIingsIgzBTIiUhDIhQBZIh7hSIhtBXIhfhaIhaAyIgQgDIAWiwIhGggIAyijIhVg6IBHiOIhahXIBWh0IhVh0g");
	this.shape_541.setTransform(258.1,306);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#FF66FF").s().p("AmwHCIhaAxIgQgDIAWiwIhHggIAzijIhVg6IBHiNIhahYIBWh0IhVh0IgBgBICyABIAQg2ICtAdIAnhKICeA3IBBhWICIBMIBehaIBtBXIB8hTIA1A8IgDA8IA8AUIglCrIBQAsIg+CaIBZBHIhQCDIBZBmIhZBlIgJArIiwgQIgaBCIiogrIgzBSIiThDIhQBZIh8hSIhtBYg");
	this.shape_542.setTransform(258.1,306);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f().s("#0000FF").ss(1,1,1).p("AoEnXIBKgbICZAPIBVgmICRAcIBigrICGAlIBxgsIB5ArIB/gpIBGAeIgBAzIAeBNIgTCXIAoBYIgfCPIAtBlIgoCDIAsB2IgsB1IhGAVIibgIIhPAhIiVgWIhcApIiLghIhqAtIiAgqIh4AsIhxgtIhZAZIgIgZIALiZIgjhSIAZiUIgrhfIAkiIIgthuIArh8Igrh8g");
	this.shape_543.setTransform(257.2,306.2);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#FF66FF").s().p("AoLH0IhZAYIgIgYIALiZIgjhSIAZiUIgrhfIAkiJIgthtIArh8Igrh7ICbAAIBKgbICZAOIBVglICRAcIBigsICGAmIBxgsIB5ArIB/gpIBGAdIgBA0IAeBMIgTCYIAoBYIgfCPIAtBlIgoCDIAsB2IgsB1IhGAUIibgIIhPAhIiVgVIhcApIiLgiIhqAtIiAgpIh4Asg");
	this.shape_544.setTransform(257.2,306.2);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f().s("#0000FF").ss(1,1,1).p("AK/ImI19AAIAAxLIV9AAg");
	this.shape_545.setTransform(256.3,306.3);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#FF66FF").s().p("Aq+ImIAAxLIV9AAIAARLg");
	this.shape_546.setTransform(256.3,306.3);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f().s("#0000FF").ss(1,1,1).p("ArZm/IT9hCIC3PBIy2BCg");
	this.shape_547.setTransform(253.7,311.9);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#FF60FF").s().p("ArZm/IT9hCIC2PBIy1BCg");
	this.shape_548.setTransform(253.7,311.9);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f().s("#0000FF").ss(1,1,1).p("Ar1laIR+iEIFtM4IvuCEg");
	this.shape_549.setTransform(251,317.5);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#FF59FF").s().p("Ar1laIR+iDIFtM3IvuCFg");
	this.shape_550.setTransform(251,317.5);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f().s("#0000FF").ss(1,1,1).p("AsQj0IP+jGIIjKvIsmDGg");
	this.shape_551.setTransform(248.3,323);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#FF53FF").s().p("AsQj0IP+jGIIjKvIsmDGg");
	this.shape_552.setTransform(248.3,323);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f().s("#0000FF").ss(1,1,1).p("AsriOIN+kIILZIlIpfEIg");
	this.shape_553.setTransform(245.7,328.5);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#FF4DFF").s().p("AsriOIN+kIILZIlIpfEIg");
	this.shape_554.setTransform(245.7,328.5);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f().s("#0000FF").ss(1,1,1).p("AtGgoIL+lKIOPGbImXFKg");
	this.shape_555.setTransform(243,334);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#FF46FF").s().p("AtHgoIL/lKIOQGbImYFKg");
	this.shape_556.setTransform(243,334);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f().s("#0000FF").ss(1,1,1).p("AtiA8IJ/mLIRGETIjQGLg");
	this.shape_557.setTransform(240.4,339.6);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#FF40FF").s().p("AtiA9IJ/mLIRGESIjQGLg");
	this.shape_558.setTransform(240.4,339.6);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f().s("#0000FF").ss(1,1,1).p("At9CiIH/nNIT8CKIgIHNg");
	this.shape_559.setTransform(237.7,345.1);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#FF39FF").s().p("At9CiIH/nNIT8CKIgIHNg");
	this.shape_560.setTransform(237.7,345.1);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f().s("#0000FF").ss(1,1,1).p("AP6EII/zAAIGAoPIWzAAg");
	this.shape_561.setTransform(244.6,350.6);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#FF33FF").s().p("Av5EIIGAoPIWzAAIDAIPg");
	this.shape_562.setTransform(244.6,350.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_505},{t:this.shape_504}]},9).to({state:[{t:this.shape_507},{t:this.shape_506}]},1).to({state:[{t:this.shape_509},{t:this.shape_508}]},1).to({state:[{t:this.shape_511},{t:this.shape_510}]},1).to({state:[{t:this.shape_513},{t:this.shape_512}]},1).to({state:[{t:this.shape_515},{t:this.shape_514}]},1).to({state:[{t:this.shape_517},{t:this.shape_516}]},1).to({state:[{t:this.shape_519},{t:this.shape_518}]},1).to({state:[{t:this.shape_521},{t:this.shape_520}]},1).to({state:[{t:this.shape_523},{t:this.shape_522}]},1).to({state:[{t:this.shape_525},{t:this.shape_524}]},1).to({state:[{t:this.shape_527},{t:this.shape_526}]},1).to({state:[{t:this.shape_529},{t:this.shape_528}]},1).to({state:[{t:this.shape_531},{t:this.shape_530}]},1).to({state:[{t:this.shape_533},{t:this.shape_532}]},1).to({state:[{t:this.shape_533},{t:this.shape_534}]},37).to({state:[{t:this.shape_536},{t:this.shape_535}]},1).to({state:[{t:this.shape_538},{t:this.shape_537}]},1).to({state:[{t:this.shape_540},{t:this.shape_539}]},1).to({state:[{t:this.shape_542},{t:this.shape_541}]},1).to({state:[{t:this.shape_544},{t:this.shape_543}]},1).to({state:[{t:this.shape_546},{t:this.shape_545}]},1).to({state:[{t:this.shape_546},{t:this.shape_545}]},15).to({state:[{t:this.shape_548},{t:this.shape_547}]},1).to({state:[{t:this.shape_550},{t:this.shape_549}]},1).to({state:[{t:this.shape_552},{t:this.shape_551}]},1).to({state:[{t:this.shape_554},{t:this.shape_553}]},1).to({state:[{t:this.shape_556},{t:this.shape_555}]},1).to({state:[{t:this.shape_558},{t:this.shape_557}]},1).to({state:[{t:this.shape_560},{t:this.shape_559}]},1).to({state:[{t:this.shape_562},{t:this.shape_561}]},1).wait(1));

	// S
	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f().s("#0000FF").ss(1,1,1).p("AArArQgSASgZAAQgYAAgSgSQgSgSAAgZQAAgYASgSQASgSAYAAQAZAAASASQASASAAAYQAAAZgSASg");
	this.shape_563.setTransform(254,204.3,0.781,0.781);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#FF0066").s().p("AgqArQgSgSAAgZQAAgYASgSQASgSAYAAQAZAAASASQASASAAAYQAAAZgSASQgSASgZAAQgYAAgSgSg");
	this.shape_564.setTransform(254,204.3,0.781,0.781);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f().s("#0000FF").ss(1,1,1).p("AhQgEQAKgDAKgEQgHgJgHgJQAKAAALAAQgEgLgDgLQAIABAJACQACABACABQAAgMABgLQAIAGAIAHQAEgLAFgLQAGAJAGAIQAEgHAFgHQACgCABgCQADAKACAKQALgHAKgGQgBALgBAKQANgCALgCQgFAIgGAIQANACALABQgHAHgHAHQALAFALAFQgJAFgIAFQAJAHAIAIQgBAAgBgBQgIACgJACQAGAKAGALQgKgBgKgCQACANABAMQgIgFgIgFQgCAMgCAMQgHgHgGgIQgFALgGALQgEgJgEgIQgGAFgIAGQgCADgDACQgBgJgBgKQgLAFgLAEQACgJACgKQgMABgMABQABgDABgDQAEgGADgFQgMgDgLgCQAIgGAHgGQgKgGgKgHg");
	this.shape_565.setTransform(241.4,211);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#FF075F").s().p("AAEA/IgNALIgGAFIgCgTIgWAJIAEgTIgYACIACgGIAIgLIgYgFIAQgMIgVgNIgCgJIAUgHIgNgSIAUAAIgHgWIARADIAFACIAAgXIARANIAIgWIAMARIAJgOIADgEIAFAUIAVgNIgCAVIAYgEIgKAQIAXADIgOAOIAWAKIgRAKIARAPIgCgBIgRAEIAMAVIgUgDIADAZIgPgKIgFAYIgNgPIgLAWIgIgRg");
	this.shape_566.setTransform(241.4,211);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f().s("#0000FF").ss(1,1,1).p("AhxgLQATgDAUgDQgPgOgOgPQATADATAEQgJgTgIgTQAOAGAOAHQAEACAEADQgDgVgCgVQANAPANAPQAEgVAFgUQAIASAIASQAIgOAHgOQADgEACgEQACATABAUQAQgOARgNQgFATgFATQAUgHAUgHQgMAPgMAQQAWgBAUgBQgQAMgPALQAUAHAUAGQgRAGgSAFQARANARALQgCAAgCAAQgSAAgRgBQANASANARQgSgFgSgHQAFAVAGAVQgOgMgPgNQgBAVgBAVQgKgQgKgQQgIAUgHAUQgFgSgEgSQgKALgKAKQgEAGgFAGQABgUACgTQgSAMgSAKQAHgRAIgSQgVAFgVAFQAEgGADgFQAJgJAKgKQgWgCgVgCQARgJARgIQgTgJgUgJg");
	this.shape_567.setTransform(228.8,217.8);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#FF0F57").s().p("AAABNIgVAVIgJAMIAEgnIglAXIAPgkIgqAKIAHgLIATgSIgqgFIAigRIgogSIgBgKIAngFIgdgeIAmAHIgRglIAdAMIAHAFIgFgqIAaAeIAKgpIAPAkIAPgbIAFgIIADAmIAhgbIgKAnIAogPIgYAfIAqgCIgfAYIAoAMIgkAMIAjAXIgEAAIgigBIAZAjIgkgMIALApIgcgXIgDApIgVggIgOAoIgIgkg");
	this.shape_568.setTransform(228.8,217.8);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f().s("#0000FF").ss(1,1,1).p("AiSgRQAdgCAdgDQgXgUgWgVQAcAHAdAHQgPgbgOgaQAUALAUAMQAFADAGAEQgGgegFgeQASAXATAXQAFgeAFgeQAKAcAJAbQALgVALgUQADgGADgGQABAdAAAdQAWgVAXgVQgJAcgKAcQAdgMAcgMQgTAWgTAWQAhgCAcgDQgYAQgYAQQAeAHAdAIQgbAHgcAHQAaAQAaARQgEgBgEgBQgZgBgZgCQAUAYATAYQgbgLgbgLQALAdAJAeQgUgTgUgUQgBAeAAAfQgOgZgOgaQgJAegKAdQgDgcgGgcQgNAQgNAQQgHAJgGAIQAEgcAFgdQgaASgZAQQANgZAOgaQgeAIgfAIQAHgHAGgHQAOgNAPgNQgfgCgfgCQAbgLAagMQgdgMgcgLg");
	this.shape_569.setTransform(216.3,224.6);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#FF1650").s().p("AgGBbIgaAgIgNARIAJg5IgzAiIAbgzIg9AQIANgOIAdgaIg+gEIA1gXIg5gXIgBgJIA6gFIgtgpIA5AOIgdg1IAoAXIALAHIgLg8IAlAuIAKg8IATA3IAWgpIAGgMIABA6IAtgqIgTA4IA5gYIgmAsIA9gFIgwAgIA7APIg3AOIA0AhIgIgCIgygDIAnAwIg2gWIAUA7IgognIgBA9IgcgzIgTA7IgJg4g");
	this.shape_570.setTransform(216.3,224.6);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f().s("#0000FF").ss(1,1,1).p("Ai0gYQAngCAngCQgegagegaQAkALAmAKQgUgjgTgiQAZAQAZAQQAHAGAIAFQgIgngIgnQAXAfAXAfQAGgoAFgnQANAlALAlQANgcANgcQAFgHAEgIQgBAmgBAnQAdgcAcgcQgNAkgNAlQAkgRAkgQQgZAdgZAdQAqgFAlgEQggAUghAUQAnAJAnAIQgmAJgkAIQAiAVAiAUQgFgBgFgBQghgDgigDQAaAfAaAeQgigQgjgQQAOAmANAmQgagagagaQgBAnACAoQgSgigRgjQgLAngLAmQgGglgFgmQgQAVgRAVQgIAMgIALQAHglAHgmQghAXghAXQATghAUgiQgnAMgoALQAKgJAJgIQATgRATgRQgogCgogCQAjgOAkgOQgmgOglgPg");
	this.shape_571.setTransform(203.8,231.4);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#FF1D49").s().p("AgLBpIghAqIgQAXIAOhLIhCAvIAmhEIhOAXIASgRIAogiIhRgEIBHgcIhLgdIgBgJIBOgDIg9g1IBLAVIgohFIA0AgIANALIgPhOIAvA/IAKhPIAYBJIAbg4IAIgPIgCBNIA6g4IgbBKIBJgiIgzA6IBPgJIhBAoIBOASIhLARIBFAoIgKgCIhDgGIA0A9IhGgfIAcBLIg0g0QgBAnACAoIgjhEIgWBMIgLhLg");
	this.shape_572.setTransform(203.8,231.4);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f().s("#0000FF").ss(1,1,1).p("AjVgeQAwgBAwgCQglgggmgfQAuANAvAOQgagqgZgqQAfAVAgAVQAIAGAJAHQgKgwgLgwQAcAnAdAoQAFgyAGgxQAOAvANAuQARgjAQgiQAFgKAFgKQgCAwgCAxQAjgkAjgjQgSAtgRAuQAsgWAtgWQggAkggAlQA0gHAugGQgqAYgpAZQAxAKAwAJQgvAKgvAKQArAZArAYQgGgBgHgBQgpgFgqgFQAhAmAgAlQgrgVgrgVQASAvASAuQggghghghQAAAwADAxQgVgrgVgsQgOAxgMAvQgGgvgHgwQgTAbgTAaQgKAPgKAOQAKgvAKgvQgpAdgoAdQAYgpAZgpQgvAPgwAOQAMgKALgLQAZgVAZgVQgygBgygCQAtgQAtgSQgvgQgugSg");
	this.shape_573.setTransform(191.2,238.1);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#FF2442").s().p("AgRB3IgmA1IgUAdIAUheIhRA6IAxhSIhfAdIAXgVIAygpIhkgEIBagiIhegiIgBgHIBigEIhMg/IBdAbIgzhUIA+AqIASANIgVhgIA4BPIAMhjIAbBeIAhhGIAJgTIgDBgIBFhGIgiBaIBYgrIhABIIBigNIhTAxIBiATIheAUIBWAyIgNgCIhTgLIBBBMIhWgrIAkBdIhBhCQAAAwADAxIgrhXIgaBhIgMhgg");
	this.shape_574.setTransform(191.2,238.1);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f().s("#0000FF").ss(1,1,1).p("Aj3gkQA6gBA6gBQgugmgtglQA3ARA3ASQgegygfgyQAlAaAlAZQAKAJALAHQgOg5gMg6QAgAxAiAvQAGg6AHg7QAQA3APA4QATgpATgpQAGgMAFgMQgDA6gDA5QApgqApgrQgWA3gVA2QA1gbA0gbQgnAsgmAqQA+gIA2gIQgyAdgyAdQA6ALA6ALQg4AKg5AMQA0AcAzAeQgHgBgIgCQgygHgygGQAoAsAnAsQg0gZgzgbQAWA3AWA3QgmgogngoQABA5ADA6QgYgzgZg1QgPA6gPA4QgGg4gHg6QgWAggXAgQgLARgMARQAMg5ANg4QgwAkgvAjQAegyAegwQg5ASg4ASQAOgNAOgMQAegZAfgZQg8AAg7gCQA2gTA2gUQg3gUg5gVg");
	this.shape_575.setTransform(178.7,244.9);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#FF2C3A").s().p("AgWCGIgtBAIgXAiIAZhxIhgBHIA9hjIhyAkIAdgYIA8gyIh2gCIBsgoIhvgoIgBgHIB0gCIhbhLIBvAiIg+hkIBKA1IAUAQIgahzIBDBfIAMh1IAgBwIAmhTIALgYIgHB0IBThWIgrBsIBpg0IhNBVIB0gQIhkA6IB0AWIhxAWIBmA5IgOgCIhkgOIBOBZIhmg0IAsBvIhOhRQABA4AEA8IgxhpIgeByIgNhyg");
	this.shape_576.setTransform(178.7,244.9);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f().s("#0000FF").ss(1,1,1).p("AkZgqQBEgBBEgBQg2grg1grQBBAVBAAVQgkg6glg6QArAfArAfQAMAJAMAJQgQhCgQhDQAmA4AmA4QAHhEAHhEQASBBARBCQAWgxAWgwQAGgOAHgOQgEBEgFBDQAwgyAvgxQgaA+gaA/QA9ggA9gfQguAygtAyQBIgLA/gJQg6Ahg7AhQBDANBEAMQhCALhDANQA8AhA8AiQgIgCgJgBQg6gJg6gIQAuAzAtAzQg7gfg9gfQAbBAAaBAQgsgwgtgwQABBCAFBFQgcg9gcg+QgSBDgRBCQgGhDgHhDQgaAmgZAkQgOAUgNAUQAPhBAPhCQg3Aqg3ApQAkg5Akg5QhBAVhCAVQARgOAQgOQAkgcAjgdQhEgBhFgBQA/gWBAgXQhBgWhBgYg");
	this.shape_577.setTransform(166.2,251.6);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#FF3333").s().p("AgbCUIgzBKIgbAoIAeiDIhuBTIBIhyIiDAqIAhgcIBHg5IiJgCIB/gtIiCguIgBgGICIgCIhrhWICBAqIhJh0IBWA+IAYASIggiFIBMBwIAOiIIAjCDIAshhIANgcIgJCHIBfhjIg0B9IB6g/IhbBkICHgUIh1BCICHAZIiFAYIB4BDIgRgDIh0gRIBbBmIh4g+IA1CAIhZhgQABBCAFBFIg4h7IgjCFIgNiGg");
	this.shape_578.setTransform(166.2,251.6);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f().s("#0000FF").ss(1,1,1).p("Ak6gwQBNAABOgBQg+gxg9gwQBKAYBKAYQgqhCgqhBQAwAjAwAkQAOALAOAKQgThLgShMQArBAArBBQAHhOAIhOQAUBLATBLQAZg4AYg3QAHgQAHgQQgFBOgFBNQA1g6A2g4QgeBHgfBHQBGgkBFgkQg0A5g1A5QBTgNBIgLQhEAlhEAmQBOANBMAOQhLANhMANQBEAmBFAmQgKgCgKgCQhCgKhDgKQA1A6A0A6QhEgkhFgkQAfBJAfBIQgzg3gzg3QACBLAGBOQgghGgghHQgTBMgTBMQgHhNgIhMQgcAqgdAqQgPAXgPAXQAShLAShLQg/Awg+AvQAqhBAphBQhKAZhLAYQATgPAUgQQApghAoggQhOgBhOAAQBJgaBIgaQhKgZhJgag");
	this.shape_579.setTransform(153.6,258.4);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#FF3A2C").s().p("AghCjIg5BUIgeAuIAkiWIh9BfIBTiCIiVAxIAngfIBRhBIicgBICRg0IiTgzIgBgFICbgBIh7hhICUAwIhUiDIBgBHIAcAVIgliXIBWCBIAPicIAnCWIAxhvIAOggIgKCbIBrhyIg9COICLhIIhpByICbgYIiIBLICaAbIiXAaICJBMIgUgEIiFgUIBpB0IiJhIIA+CRIhmhuQACBLAGBOIhAiNIgmCYIgPiZg");
	this.shape_580.setTransform(153.6,258.4);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f().s("#0000FF").ss(1,1,1).p("Alcg2QBXAABXgBQhFg2hFg2QBTAcBTAbQgwhJgvhKQA2ApA2ApQAPAMAPAMQgVhVgVhVQAwBJAwBIQAIhXAIhXQAWBUAVBUQAcg+Abg+QAIgSAIgSQgGBXgHBWQA8hAA7hAQgiBQgjBQQBOgpBNgpQg7BAg7A/QBdgOBQgNQhMAqhMApQBWAPBXAPQhWAOhVAPQBNAqBNAqQgLgCgLgCQhLgMhLgMQA8BBA7BBQhNgphNgpQAjBRAjBRQg5g+g5g+QADBUAGBXQgjhPgjhPQgVBVgWBUQgHhVgIhXQggAwggAvQgRAagRAaQAVhVAVhUQhGA2hFA1QAvhJAvhJQhTAchUAdQAWgSAWgSQAugkAugkQhYAAhXgBQBSgcBRgdQhSgchTgdg");
	this.shape_581.setTransform(141.1,265.1);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#FF4224").s().p("AgmCxIhABfIgiA0IAqipIiLBrIBeiSIinA5IAsgkIBchIIivgBICjg5Iilg5IgBgEICugBIiKhsICmA3IhfiTIBsBSIAeAYIgqiqIBgCRIAQiuIArCoIA3h8IAQgkIgNCtIB3iAIhFCgICbhSIh2B/ICtgbIiYBTICtAeIirAdICaBUIgWgEIiWgYIB3CCIiahSIBGCiIhyh8QADBUAGBXIhGieIgrCpIgPisg");
	this.shape_582.setTransform(141.1,265.1);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f().s("#0000FF").ss(1,1,1).p("Al9g8QBgAABhAAQhNg8hMg8QBcAfBbAgQg1hSg1hRQA8AtA8AuQARANARAOQgYhegYheQA1BRA1BQQAIhgAJhhQAYBeAXBdQAehFAehFQAJgUAJgUQgIBhgIBgQBChIBChHQgmBZgnBYQBWguBVguQhBBHhCBHQBmgQBagPQhVAuhVAuQBgAQBfAQQheAPhgAQQBWAvBVAuQgMgCgMgCQhTgOhTgOQBCBIBCBIQhVguhWguQAnBaAnBZQg/hFg/hFQAEBdAHBgQgmhYgohYQgWBegYBeQgIhfgJhgQgiA1gjA0QgTAdgTAcQAYhdAXheQhNA8hMA7QA0hQA1hRQhcAfhdAgQAZgUAYgTQA0goAzgpQhhABhhAAQBbggBbgfQhcgfhcggg");
	this.shape_583.setTransform(128.6,271.9);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#FF491D").s().p("AgsDAIhFBpIgmA5IAvi7IiZB3IBpihIi5A/IAxgnIBnhRIjCABIC2g/Ii4g/IAAgDIDBAAIiZh4IC3A/IhqijIB4BbIAiAbIgwi8IBqChIARjBIAvC7IA8iKIASgoIgQDBICEiPIhNCxICrhcIiDCOIDAgfIiqBcIC/AgIi+AfICrBdIgYgEIimgcICECQIirhcIBOCzIh+iKQAEBdAHBgIhOiwIguC8IgRi/g");
	this.shape_584.setTransform(128.6,271.9);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f().s("#0000FF").ss(1,1,1).p("AmfhDQBqABBqAAQhUhBhUhCQBlAjBkAjQg6hag7hYQBCAyBBAyQATAPASAPQgahngahnQA6BZA6BZQAIhqAJhrQAaBnAZBnQAhhMAhhMQAKgVAJgWQgJBqgJBqQBJhPBIhPQgrBigrBhQBegzBegzQhJBOhHBOQBvgTBjgQQheAyheAyQBqASBpARQhpARhoARQBeAzBdAyQgNgCgNgDQhcgPhbgPQBJBOBIBPQhdgzhegzQArBiArBiQhFhMhGhMQAFBmAJBqQgrhhgqhiQgZBogaBnQgJhpgIhqQgmA6gmA6QgUAfgVAgQAahnAahnQhUBChUBCQA6hZA6hZQhlAjhlAjQAbgVAcgVQA4gsA5gtQhrABhrAAQBlgiBkgiQhlgihlgjg");
	this.shape_585.setTransform(116.1,278.7);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#FF5016").s().p("AgxDNIhMB0IgpA/IA0jNIioCDIB0ixIjKBFIA3gqIBxhYIjVABIDIhFIjJhEIgBgDIDUABIioiCIDJBEIh1ixICEBkIAlAeIg1jPIB0CzIARjVIAzDOIBCiYIAUgsIgSDUICQidIhWDDIC8hmIiRCcIDTgkIi7BlIDSAjIjRAiIC8BkIgbgEIi3gfICRCeIi6hmIBVDDIiLiYQAFBnAJBqIhVjDIgzDPIgRjUg");
	this.shape_586.setTransform(116.1,278.7);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f().s("#0000FF").ss(1,1,1).p("AnBhJQB1ABBzABQhchHhchHQBuAmBuAmQhAhhhAhhQBHA3BHA3QAUARAUAQQgchwgehxQA/BhBABiQAJh0AJh0QAcBxAbBwQAkhTAjhTQALgXAKgYQgKB0gKBzQBPhWBOhWQgvBqgvBqQBmg4Bmg3QhPBVhPBUQB6gUBrgTQhmA3hnA3QBzASBzATQhzAShyASQBnA3BmA3QgPgDgPgDQhjgQhjgRQBPBVBPBVQhmg4hmg3QAwBqAvBrQhMhUhLhTQAFBvAKB0QguhqguhrQgbBxgcBxQgJh0gJhzQgpA/gpA/QgXAjgWAiQAdhwAdhwQhcBIhbBHQBAhgBAhhQhuAmhuAmQAdgWAegXQA+gwA+gwQh0AAh1ABQBuglBuglQhuglhuglg");
	this.shape_587.setTransform(103.5,285.4);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#FF570F").s().p("Ag2DcIhSB+IgtBFIA6jgIi3CPICAjBIjcBMIA7gtIB8hgIjpABIDchKIjchKIgBgCIDoACIi4iOIDcBMIiAjCICOBuIAoAhIg6jhIB/DDIASjoIA3DhIBHimIAVgvIgUDnICdisIheDUIDMhvIieCpIDlgnIjNBuIDmAlIjlAkIDNBuIgegGIjGghICeCqIjMhvIBfDVIiXinQAFBvAKB0IhcjVIg3DiIgSjng");
	this.shape_588.setTransform(103.5,285.4);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f().s("#0000FF").ss(1,1,1).p("AnihOQB9ABB+AAQhkhMhkhNQB3AqB3ApQhFhphGhoQBNA8BMA8QAWASAXASQggh6ggh6QBEBqBEBpQAKh9AJh9QAeB6AdB6QAnhaAmhaQAMgZAKgaQgKB9gMB9QBVhdBVhdQg0BygzBzQBug8Bvg9QhWBbhWBdQCEgXB0gUQhvA7hvA7QB8AUB8ATQh7ATh9AUQBwA7BvA7QgQgDgQgCQhsgThsgTQBWBdBWBbQhug8hug9QAzBzAzBzQhRhahThbQAHB4ALB9QgyhzgyhzQgdB6geB6QgKh9gJh9QgsBFgrBEQgZAlgYAlQAgh5Afh6QhjBOhjBOQBGhpBFhoQh3Aqh3ApQAhgZAggYQBDg0BEg0Qh+ABh+ABQB3goB3goQh3gnh3gog");
	this.shape_589.setTransform(91,292.2);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#FF5F07").s().p("Ag8DrIhYCJIgwBKIA/jzIjFCcICKjSIjtBUIBBgxICGhpIj8ADIDuhQIjuhPIAAgBID7ABIjHiZIDtBTIiLjRICaB4IAsAjIhAjzICIDTIATj6IA7D0IBNi0IAWg0IgWD7ICqi7IhnDmIDdh6IisC5ID3gsIjdB2ID4AoIj3AnIDdB2IgfgGIjYglICrC4Ijbh5IBmDmIiji1QAFB4AMB9IhkjnIg7D0IgTj5g");
	this.shape_590.setTransform(91,292.2);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f().s("#0000FF").ss(1,1,1).p("AEZmzIhvD3IDtiDIi5DGIELgvIjvB/IELApIkLAqIDvB/IkLgvIC5DGIjtiDIBvD3Ii1jJIAYENIhqj4Ig/EGIgUkNIiSDjIBEkFIjUCoICWjhIj/BaIDXilIkPADIEBhWIkBhVIEPADIjXilID/BaIiWjhIDUCoIhEkFICSDjIAUkNIA/EGIBqj4IgYENg");
	this.shape_591.setTransform(78.5,298.9);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#FF6600").s().p("AhBD5IiSDjIBEkFIjUCoICWjhIj/BaIDXilIkPADIEBhWIkBhVIEPADIjXilID/BaIiWjhIDUCoIhEkFICSDjIAUkNIA/EGIBqj4IgYENIC1jJIhvD3IDtiDIi5DGIELgvIjvB/IELApIkLAqIDvB/IkLgvIC5DGIjtiDIBvD3Ii1jJIAYENIhqj4Ig/EGg");
	this.shape_592.setTransform(78.5,298.9);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f().s("#0000FF").ss(1,1,1).p("AoaiaID2ACIifiJIDpBLIhpi7IDFCMIgljaICOC9IAkjgIBJDaIBtjPIAAChIgGBGICYiUIhdDiIDGhZIibC5IDfgSIjIB8IDfA4IjaA2ICuBqIjygnICGClIjahtIBIDNIirinIAADgIhsjPIhKDbIgkjgIiIC3IA5juIixB4IB9jQIjVA3IC0idIjigTIDWhaIjNhYg");
	this.shape_593.setTransform(80.5,298.3);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#FF6600").s().p("AiUEjIiIC3IA5juIixB4IB+jQIjWA3IC0idIjigTIDWhaIjNhYIgJgDID2ACIifiJIDpBLIhpi7IDFCMIgljaICOC9IAkjgIBJDaIBtjPIAAChIgGBGICYiUIhdDiIDGhZIibC5IDegSIjHB8IDfA4IjaA2ICuBqIjygnICGClIjahtIBIDNIirinIAADgIhsjPIhKDbg");
	this.shape_594.setTransform(80.5,298.3);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f().s("#0000FF").ss(1,1,1).p("AovjeIDcABIhnhtIDTA8Ig8iWIC2BwIgFivICICXIA2izIBSCvIBwimIARCBIgFA/IB5heIhKDNICegvIh7CsICyAJIigB8ICyBFIiuBCIBzBVIjagfIBTCEIjHhXIAiCkIihiGIgYC0IhvimIhSCvIg2izIh9CLIAtjXIiNBIIBki+IiqATICPiWIi0gmICrhhIikhdg");
	this.shape_595.setTransform(82.5,297.7);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#FF6600").s().p("AjnFMIh9CMIAtjXIiNBIIBki+IiqATICPiWIi0glICrhiIikhdIgHgDIDcACIhnhuIDTA8Ig8iWIC2BxIgFivICICXIA2izIBSCvIBwimIARCBIgFA/IB5heIhKDNICegvIh7CsICyAJIigB8ICyBEIiuBDIBzBVIjagfIBTCEIjHhXIAiCkIihiGIgYC0IhvimIhSCvg");
	this.shape_596.setTransform(82.5,297.7);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f().s("#0000FF").ss(1,1,1).p("ApFkkIDDABIgvhSIC9AtIgPhwICnBUIAaiDICEByIBHiHIBcCDIBxh8IAjBgIgDA4IBagoIg3C4IB2gFIhcCfICFAlIh3B7ICFBSIiCBPIA3BAIjCgXIAgBjIizhCIgFB8IiXhkIgwCGIhxh8IhdCDIhGiHIhdBPIgWAQIAii/IhqAYIBLitIiAgQIBsiOIiHg7ICAhnIh7hjg");
	this.shape_597.setTransform(84.6,297.1);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#FF6600").s().p("Ak6F2IhdBPIgWARIAii/IhqAXIBLitIiAgQIBsiOIiHg6ICAhoIh7hjIgFgCIDDABIgvhSIC9AtIgPhwICnBUIAaiDICEByIBHiHIBcCEIBxh9IAjBhIgDA3IBagoIg3C4IB2gFIhcCgICFAkIh3B8ICFBRIiCBQIA3BAIjCgYIAgBjIizhBIgFB7IiXhlIgwCHIhxh8IhdCDg");
	this.shape_598.setTransform(84.6,297.1);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f().s("#0000FF").ss(1,1,1).p("ApblpICrABIAJg3ICmAeIAehLICYA4IA5hXICBBMIBXhaIBlBYIB0hUIA0BBIgCAwIA9AOIglCjIBPAlIg+CSIBZBBIhQB6IBZBfIhXBdIgEAqIiqgPIgTBBIifgrIgsBTIiMhEIhJBaIh0hSIhmBXIhWhaIhbA1IgPgCIAXioIhGgZIAyibIhWgyIBIiHIhahQIBVhtIhRhpg");
	this.shape_599.setTransform(86.6,296.5);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#FF6600").s().p("AmMGgIhbA1IgPgCIAXioIhGgZIAyibIhWgyIBIiHIhahQIBVhtIhRhoIgEgCICrABIAJg3ICmAeIAehLICYA4IA5hXICBBMIBXhaIBlBXIB0hTIA0BBIgCAxIA9ANIglCjIBPAlIg+CTIBZBAIhQB7IBZBeIhXBdIgEAqIiqgPIgTBCIifgsIgsBSIiMhCIhJBZIh0hTIhmBYg");
	this.shape_600.setTransform(86.6,296.5);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f().s("#0000FF").ss(1,1,1).p("ApxmuICSABIBBgcICQAPIBLglICJAcIBYgsIB9AmIBogtIBvAsIB2gpIBGAgIgBApIAeBEIgTCOIAoBPIgfCFIAsBcIgnB6IAsBsIgrBpIhAAWIiRgIIhGAhIiNgWIhSApIiCghIhhAtIh3gqIhuAsIhogtIhXAaIgIgTIALiQIgjhJIAZiKIgqhWIAjiAIgthkIArhzIgphug");
	this.shape_601.setTransform(88.6,295.9);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#FF6600").s().p("AnfHKIhXAaIgIgTIALiQIgjhJIAZiKIgrhWIAkiAIgthkIArhzIgphuIgCgBICSABIBBgcICQAPIBLglICIAcIBZgsIB9AmIBogtIBvAsIB2gpIBGAgIgBApIAdBEIgSCOIAnBPIgeCFIAsBcIgnB6IAsBsIgrBpIhAAWIiSgIIhFAhIiNgWIhSApIiCghIhhAtIh3gqIhvAsg");
	this.shape_602.setTransform(88.6,295.9);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f().s("#0000FF").ss(1,1,1).p("AKIH0I0PAAIAAvnIUPAAg");
	this.shape_603.setTransform(90.6,295.3);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#FF6600").s().p("AqHH0IAAvnIUPAAIAAPng");
	this.shape_604.setTransform(90.6,295.3);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f().s("#0000FF").ss(1,1,1).p("AqHnzIUPAAIAAPnI0PAAg");
	this.shape_605.setTransform(90.6,295.3);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f().s("#0000FF").ss(1,1,1).p("AqbmSISQhEICnNpIx7BEg");
	this.shape_606.setTransform(90.6,297.2);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#FF6C00").s().p("AqbmSISQhEICnNpIx7BEg");
	this.shape_607.setTransform(90.6,297.2);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f().s("#0000FF").ss(1,1,1).p("AqwkxIQTiJIFOLtIvpCIg");
	this.shape_608.setTransform(90.6,299.2);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#FF7300").s().p("AqvkyIQSiIIFOLsIvpCJg");
	this.shape_609.setTransform(90.6,299.2);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f().s("#0000FF").ss(1,1,1).p("ArEjRIOUjNIH1JwItVDMg");
	this.shape_610.setTransform(90.6,301.1);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#FF7900").s().p("ArEjRIOUjNIH1JwItVDMg");
	this.shape_611.setTransform(90.6,301.1);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f().s("#0000FF").ss(1,1,1).p("ArYhwIMVkRIKcHzIrDEQg");
	this.shape_612.setTransform(90.6,303);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#FF8000").s().p("ArYhwIMVkRIKcHzIrDEQg");
	this.shape_613.setTransform(90.6,303);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f().s("#0000FF").ss(1,1,1).p("ArsgQIKYlVINBF2IovFVg");
	this.shape_614.setTransform(90.6,305);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#FF8600").s().p("ArsgQIKXlVINCF2IovFVg");
	this.shape_615.setTransform(90.6,305);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f().s("#0000FF").ss(1,1,1).p("AsBBQIIZmYIPqD6ImdGYg");
	this.shape_616.setTransform(90.6,306.9);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#FF8C00").s().p("AsBBPIIamXIPoD6ImdGXg");
	this.shape_617.setTransform(90.6,306.9);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f().s("#0000FF").ss(1,1,1).p("AsVCwIGbncISQB8IkKHdg");
	this.shape_618.setTransform(90.5,308.9);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#FF9300").s().p("AsVCwIGbncISQB9IkKHcg");
	this.shape_619.setTransform(90.5,308.9);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f().s("#0000FF").ss(1,1,1).p("AoNkQIU3AAIh3IhI3cAAg");
	this.shape_620.setTransform(90.5,310.8);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#FF9900").s().p("AspERIEcohIU3AAIh3Ihg");
	this.shape_621.setTransform(90.5,310.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_564},{t:this.shape_563}]},9).to({state:[{t:this.shape_566},{t:this.shape_565}]},1).to({state:[{t:this.shape_568},{t:this.shape_567}]},1).to({state:[{t:this.shape_570},{t:this.shape_569}]},1).to({state:[{t:this.shape_572},{t:this.shape_571}]},1).to({state:[{t:this.shape_574},{t:this.shape_573}]},1).to({state:[{t:this.shape_576},{t:this.shape_575}]},1).to({state:[{t:this.shape_578},{t:this.shape_577}]},1).to({state:[{t:this.shape_580},{t:this.shape_579}]},1).to({state:[{t:this.shape_582},{t:this.shape_581}]},1).to({state:[{t:this.shape_584},{t:this.shape_583}]},1).to({state:[{t:this.shape_586},{t:this.shape_585}]},1).to({state:[{t:this.shape_588},{t:this.shape_587}]},1).to({state:[{t:this.shape_590},{t:this.shape_589}]},1).to({state:[{t:this.shape_592},{t:this.shape_591}]},1).to({state:[{t:this.shape_592},{t:this.shape_591}]},43).to({state:[{t:this.shape_594},{t:this.shape_593}]},1).to({state:[{t:this.shape_596},{t:this.shape_595}]},1).to({state:[{t:this.shape_598},{t:this.shape_597}]},1).to({state:[{t:this.shape_600},{t:this.shape_599}]},1).to({state:[{t:this.shape_602},{t:this.shape_601}]},1).to({state:[{t:this.shape_604},{t:this.shape_603}]},1).to({state:[{t:this.shape_604},{t:this.shape_605}]},9).to({state:[{t:this.shape_607},{t:this.shape_606}]},1).to({state:[{t:this.shape_609},{t:this.shape_608}]},1).to({state:[{t:this.shape_611},{t:this.shape_610}]},1).to({state:[{t:this.shape_613},{t:this.shape_612}]},1).to({state:[{t:this.shape_615},{t:this.shape_614}]},1).to({state:[{t:this.shape_617},{t:this.shape_616}]},1).to({state:[{t:this.shape_619},{t:this.shape_618}]},1).to({state:[{t:this.shape_621},{t:this.shape_620}]},1).wait(1));

	// Skip
	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#000000").s().p("AgVAbQgKgIAAgMQAAgOAJgNQALgOAOAAQAOAAAIAHQAHAGAAAPQAAAPgIAMQgKAOgOAAQgNAAgIgIgAgPgOQgHAKAAALQAAAIAHAGQAGAFAJAAQAKAAAHgLQAGgKAAgLQAAgKgFgFQgEgEgLAAQgKAAgIALg");
	this.shape_622.setTransform(68,384.4);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#000000").s().p("AgWAiIgBgEIAAgKIgBgLIABgLIABgMIAAgHIgBgGQAAgBAAAAQAAgBABgBQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAAgBABAAQABAAAAAAIALABQAGABADACQASAJAAAOQAAAHgGAEQgFAEgHACQAOAIAHAIIABADIgCADQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAIgDgCQgPgOgRgFIABAIIAAAJIgBAEIgDABIgEgBgAgNgTIAAAFIAAAJIgBAIIACAAIACAAQAKAAAFgDIAFgDIACgEQAAgGgHgFQgFgFgHgBIgHAAg");
	this.shape_623.setTransform(61.6,384.3);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#000000").s().p("AgCAgQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBIAAgCIAAgCIAAgGIAAgHIgBgRIgCgSIgEAAIgQgBQgDgBAAgDQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAAAAAAAIAIABIAHAAIAIAAIAHAAIALABIAJAAIADABQABABAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgJAAIgLgBIgDAAIACAUIAAATIABAFIAAAEIgBAGQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAAAQgBAAAAgBg");
	this.shape_624.setTransform(56,384.3);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#000000").s().p("AgdAjIgBgEIAAgFIAAgGIAAgIIABgIIgBgIIAAgJIAAgIIAAgJQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABAAAAAAQACAAAEAFQALARAIALQALAMAMALIAAgFIAAgGQAAgSgBgMIgCgEIgBgFQAAgFAFAAQAHAAABAcIAAAOIAAAPIgBAHQgBAEgEAAQgDAAgDgDQgSgRgXgfIAAAKIAAAJIAAALIAAALQAAAMgEAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_625.setTransform(49,384.3);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#000000").s().p("AgTAhIgBgEIABgDIADgBIAKgBIAAgIIAAgIIAAgHIABgZIgGAAIgFAAIgEgBIgBgDQAAgEAEgBIAOAAQAIAAANACQAEAAAAAFQAAABAAAAQAAAAgBABQAAAAAAAAQAAABgBAAIgDABIgHgBIgHgBIgBAYIAAAIIAAAIIAAAIIAOgBQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABIABACIgBAEIgDABIgIABIgHAAIgIABIgJAAIgDgBg");
	this.shape_626.setTransform(42.8,384.4);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#000000").s().p("AgSAiIgBgDIAAgNIAAgSIABgSIAAgGIABgGQABgEAEAAIADAAIAHAAQAHAAAIAFQAHAGAAAJQAAALgIAFQgIAGgJAAIgFAAIgBAXIgBADIgDABIgDgBgAgJgSIgBASIAFAAQAHAAAFgDQAFgEAAgHQAAgFgFgEQgFgDgFAAIgEAAIgCAAg");
	this.shape_627.setTransform(35.3,384.2);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#000000").s().p("AgTAhIgBgEIABgDIADgBIAKgBIAAgIIAAgIIAAgHIABgZIgGAAIgFAAIgEgBIgBgDQAAgEAEgBIAOAAQAIAAANACQAEAAAAAFQAAABAAAAQAAAAgBABQAAAAAAAAQAAABgBAAIgDABIgHgBIgHgBIgBAYIAAAIIAAAIIAAAIIAOgBQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABIABACIgBAEIgDABIgIABIgHAAIgIABIgJAAIgDgBg");
	this.shape_628.setTransform(30.4,384.4);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#000000").s().p("AgVAiIgBgEIABgeIAAgfQAAgBAAAAQAAAAABgBQAAAAAAAAQAAgBABAAIADgCQAAAAABABQAAAAABAAQAAAAAAAAQABABAAAAIABADIAAANIgBAOIANgOIAMgPIAEgCIADABIABAEQAAADgLAMIgPAQIAPAQIAFAFIAFADQAEAAAAADIgBAEQAAAAgBAAQAAABAAAAQgBAAAAAAQgBABAAAAQgHgBgMgLIgNgOIAAAAIAAAYQAAAFgDgBQgDABgCgDg");
	this.shape_629.setTransform(25.5,384.5);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#000000").s().p("AgRAfQgIgEAAgHIABgDQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAABABAAIAEAFQAEADAHAAQAGAAAGgDQAHgEAAgHQAAgGgGgDQgFgDgHAAQgHAAgFgCQgHgEAAgGQAAgIAJgHQAJgGAIAAIAKACQAHACAAACQAAAEgEAAIgGgBIgHAAQgGAAgFADQgFADAAAFQAAAEAHABIAIABQAKABAGAGQAFAEAAAHQAAALgJAGQgJAGgKAAQgIAAgHgDg");
	this.shape_630.setTransform(19.2,384.5);

	this.btn_skip = new lib.Symbol60();
	this.btn_skip.parent = this;
	this.btn_skip.setTransform(59.6,383.7,0.725,0.527);
	new cjs.ButtonHelper(this.btn_skip, 0, 1, 2, false, new lib.Symbol60(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_skip},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622}]}).to({state:[]},89).wait(1));

	// Bk
	this.instance_2 = new lib.Background();
	this.instance_2.parent = this;
	this.instance_2.setTransform(273.2,200.3,1,1,0,0,0,0,-0.3);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30).to({_off:false},0).to({alpha:1},42).wait(18));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(288.2,574.8,299,21.6);
// library properties:
lib.properties = {
	id: 'F473A1FF045EFA489688380B23292554',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/background_SAT_IV14.mp3", id:"background_SAT_IV14"},
		{src:"sounds/ball_passes.mp3", id:"ball_passes"},
		{src:"sounds/Clave.mp3", id:"Clave"},
		{src:"sounds/highclick.mp3", id:"highclick"},
		{src:"sounds/SENameOfPerson.mp3", id:"SENameOfPerson"},
		{src:"sounds/_2a.mp3", id:"_2a"},
		{src:"sounds/ZoomingSound.mp3", id:"ZoomingSound"}
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
an.compositions['F473A1FF045EFA489688380B23292554'] = {
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