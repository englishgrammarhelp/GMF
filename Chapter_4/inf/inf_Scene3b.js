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


(lib.will = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNBZIACgtIABgsIAAgrIABgsQAAgNALAAQAMAAAAANIAAAsIgBArIgCA8IgBAdQgBAMgKAAQgMAAAAgMg");
	this.shape.setTransform(15.6,0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgNBZIACgtIABgsIABgrIAAgsQAAgNALAAQAMAAAAANIAAAsIgBArIgCA8IgBAdQgBAMgKAAQgMAAAAgMg");
	this.shape_1.setTransform(8.7,0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgLBYQgEgDAAgFIAAgWIAAgWIABgdIABgbQAAgGADgDQAEgEAFAAQAEAAAEAEQADADAAAGIgBAbIgBAdIAAAWIAAAWQAAAFgDADQgDAEgFAAQgFAAgDgEgAgHhCQgEgFAAgFQAAgGAEgEQAEgFAFAAQAGAAAEAFQAEAEAAAGQAAAFgEAFQgEAEgGAAQgFAAgEgEg");
	this.shape_2.setTransform(2,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAHAjIgFgdIgDgaIgJAXIgTAyQgCAFgDACQgDAIgJAAQgJAAgJgkQgEgUgEgfIgDgTIgBgSQAAgFADgDQAEgEAFABQAJAAACAKIACASIADASIAGA1QAOgkAPgyQAEgNAJAAQAJAAAEAPIAIAsQAEAeAEARIAJghIAQhCQACgHAIAAQAGAAADADQAFAEAAAEIgCAGQgKAogPAxQgDAMgIALQgFAGgHABQgNgBgIghg");
	this.shape_3.setTransform(-10.2,4.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-19.4,42,38.8);


(lib.Wecaps = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgpA1QgTgPAAgcQAAgeAQgWQAQgYAcAAQAUAAANAIQAPAHAAASQAAAMgOAKQgGAFgTAIIguAWQAHAKAKAGQAKAEANAAQAIAAAMgDQAOgDAEgHQAEgGAFgBQAEAAAEAEQADADAAAEQAAANgWAKQgTAJgRAAQgbAAgRgOgAgYggQgKALgFAXIAlgRQAVgLAKgIQgLgKgSABQgOgBgKAMg");
	this.shape.setTransform(13.3,4.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAcBgQgGgDAAgGQgFgPgCgJIgKg1QgFgfgCgVQgKApgNAbQgPAggDATIABAFQAAAFgFAEQgFAEgFAAQgRAAAAgPIgDgQIgOg8QgHgdgUg4IgBgGQAAgLAOAAQAHAAAEAJIAJAZQAIAWAHAgIALA1QAOgfANgqIALglQALgbAKAAQAJAAADAIQAFALAEAnQADAUAGAbIAKAxQAQgnAZhCIAGgYQAEgOAEgIQAFgGAHgBQANABAAALIgFANIgEANIgHAWIglBXQgEAPgNAbQgEAIgJAAQgFAAgEgDg");
	this.shape_1.setTransform(-6.2,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.9,-19.4,43.9,38.8);


(lib.want = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHBWQgEgDAAgFIABgOIAAgOIgChGIgbgCQgLgCAAgKQAAgGADgDQADgEAFAAIAaACIAAgQIgBgPQAAgGADgDQAEgDAFAAQAKAAACASIAAALIAAAHIAAAHIARgCQANAAAEABQAHADAAAJQAAAFgDAEQgDADgGAAIgGAAIgGAAIgQACIACBHIAAAFIAAAGQABAbgOAAQgDAAgEgDg");
	this.shape.setTransform(21.5,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAeA7IgDgaQgCgOAAgNIAAgLIABgLQgBgbgJAAQgOAAgLARQgLAOgHAWIgBAMIgBAMIABALIABALQAAAFgEAEQgDADgGAAQgFAAgDgDQgDgEgBgFIAAgLIgBgLIACgiIABgiIAAgMIAAgMQAAgFAEgEQADgDAFAAQALAAABAQIAAAOQAVgbAVAAQATAAAIARQAFAMAAAWIAAAMIAAALQAAAKADAQQADAQAAAKQAAAGgDADQgEADgFAAQgLAAgBgMg");
	this.shape_1.setTransform(9.4,3.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAnA+IgIgIIgVAJQgJADgFAAQgcAAgNgQQgNgPAAgfQAAgdAVgVQAUgVAbAAQALAAANAGQARAHAAAJQAAAEgDACIgCAPIAAAbQgBAPADAJIAHAVIADAHIABACQAAAEgEAEQgDADgEAAQgDAAgGgGgAgUgeQgNAQAAATQAAAUAHAKQAHAKAOAAQALAAAIgEIAMgKQgEgfAAgQIABgLIACgOIgIgDIgFgBQgSAAgOAPg");
	this.shape_2.setTransform(-3.8,4.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAIAjIgGgdIgCgaIgLAXIgSAyQgBAFgEACQgEAIgHAAQgKAAgIgkQgFgUgEgfIgDgTIgCgSQABgFADgDQADgEAFABQAKAAACAKIACASIACASIAHA1QAOgkAPgyQAEgNAJAAQAJAAAEAPIAIAsQAFAeADARIAJghIAQhCQACgHAJAAQAFAAAEADQADAEAAAEIgBAGQgKAogPAxQgDAMgIALQgFAGgHABQgNgBgHghg");
	this.shape_3.setTransform(-18.7,4.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.5,-19.4,59,38.8);


(lib.tub = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgkBcQgEAFgGAAQgEAAgEgDQgDgDAAgFIABgJIAAgKIgBgmIgBgmIABgiIAAgiQAAgHADgGQAEgIAGAAQAKAAgBALIAAAFIgBAFIAAAbIAAAfQAKgHAKgEQAJgDAIAAQAbAAAQAUQAPASAAAbQAAAcgSATQgSAUgZAAQgTAAgPgHgAgSgFIgSALIAAAVIAAAUIAAAUIARAGQAHADAKAAQAQAAAMgNQALgMAAgTQAAgSgKgMQgJgMgRAAQgJAAgKAFg");
	this.shape.setTransform(12.7,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAbA6QgPAIgTAAQgQAAgKgHQgMgIgCgPQgFggAAgZQAAgQAEgWQABgKAKAAQAGAAADADQAEADAAAGIgCASIgCASIABAiQACAPACAJIAIADIAIABQAPABATgGIAAgYIgBgYQAAgaADgTQABgLAKAAQAGAAADADQAEAEAAAEIgDAuIAAAaIABAaIAAAIIAAAJQAAAFgDAEQgEADgFAAQgJAAgDgMg");
	this.shape_1.setTransform(-1.5,4.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgHBWQgEgDAAgFIABgOIAAgOIgChGIgbgCQgLgCAAgKQAAgGADgDQADgEAFAAIAaACIAAgQIgBgPQAAgGADgDQAEgDAFAAQAKAAACASIAAALIAAAHIAAAHIARgCQANAAAEABQAHADAAAJQAAAFgDAEQgDADgGAAIgGAAIgGAAIgQACIACBHIAAAFIAAAGQABAbgOAAQgDAAgEgDg");
	this.shape_2.setTransform(-14,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.9,-19.4,43.8,38.8);


(lib.told = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgrBUQgRgSAAgbQAAggARgTQASgUAaAAQAPAAAHAEIAMAJQABg0ACgRQACgLAKAAQALAAAAAMQAAAQgFA7QgBAQgBATQABApADAUIABADQAAAFgEADQgDADgFAAQgIAAgDgLQgJAGgJAEQgKADgJAAQgZAAgRgQgAgcACQgKAMAAAZQAAAQALALQALALAPAAQAJAAAIgEIANgKIAEgDIgBgWIAAgOIABgPQgFgJgIgEQgIgFgLAAQgTAAgKALg");
	this.shape.setTransform(15.9,0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgNBZIACgtIABgsIAAgrIABgsQAAgNALAAQAMAAAAANIAAAsIgBArIgCA8IgBAdQgBAMgKAAQgMAAAAgMg");
	this.shape_1.setTransform(5.2,0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgkA0QgQgRgBgcQgBgbAPgVQARgZAdAAQAZAAAMAXQAKASAAAZQAAAagOATQgQAWgZAAQgUAAgPgPgAgVgYQgIAOAAARQAAARAKAKQAIAIAKAAQAMAAAJgJQALgKAAgSQACgugbAAQgRAAgKARg");
	this.shape_2.setTransform(-5,4.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgHBWQgEgDAAgFIABgOIAAgOIgChGIgbgCQgLgCAAgKQAAgGADgDQADgEAFAAIAaACIAAgQIgBgPQAAgGADgDQAEgDAFAAQAKAAACASIAAALIAAAHIAAAHIARgCQANAAAEABQAHADAAAJQAAAFgDAEQgDADgGAAIgGAAIgGAAIgQACIACBHIAAAFIAAAGQABAbgOAAQgDAAgEgDg");
	this.shape_3.setTransform(-17.3,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.3,-19.4,50.7,38.8);


(lib.to = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgkA0QgQgRgBgcQgBgbAPgVQARgZAdAAQAZAAAMAXQAKASAAAZQAAAagOATQgQAWgZAAQgUAAgPgPgAgVgYQgIAOAAARQAAARAKAKQAIAIAKAAQAMAAAJgJQALgKAAgSQACgugbAAQgRAAgKARg");
	this.shape.setTransform(20.3,23.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgHBWQgEgDAAgFIABgOIAAgOIgChGIgbgCQgLgCAAgKQAAgGADgDQADgEAFAAIAaACIAAgQIgBgPQAAgGADgDQAEgDAFAAQAKAAACASIAAALIAAAHIAAAHIARgCQANAAAEABQAHADAAAJQAAAFgDAEQgDADgGAAIgGAAIgGAAIgQACIACBHIAAAFIAAAGQABAbgOAAQgDAAgEgDg");
	this.shape_1.setTransform(8,21.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.to, new cjs.Rectangle(0,0,29.1,38.9), null);


(lib.the = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AghAqQgPgMAAgWQAAgYANgSQANgSAWAAQAQAAAKAFQAMAHAAAOQAAAKgLAIIgUAKIglARQAGAIAIAEQAIAFAKAAQAHAAAJgDQALgDAEgFQADgGAEAAQADAAADADQADADAAADQAAALgSAIQgPAGgOAAQgVAAgOgLgAgUgZQgHAJgEARIAegNQAQgJAIgGQgJgIgOAAQgMAAgIAKg");
	this.shape.setTransform(28.7,19.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAaBKIgEgXIgBgXIAAgIIAAgIQAAgRgJAAQgMAAgJAKQgFAGgJAQQAAAmgDAGQgDAGgGAAQgEAAgDgCQgDgDAAgEIABgEQABgDAAgMIABgOIAAhHIABgQIgBgJIgBgKQAAgEADgCQACgDAFAAQAIAAABAIIABARIAAAWIgBAVIAAAJQAIgLAKgFQAIgGAKAAQAQAAAGALQAEAHABARIABATIACAUIADAUIABADQAAAEgDADQgDACgEAAQgHAAgDgHg");
	this.shape_1.setTransform(17.4,16.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgFBEQgDgCgBgEIABgLIAAgLIgCg4IgVgCQgJgBAAgJQAAgDACgDQADgDAEAAIAUABIAAgNIAAgMQAAgEACgCQAEgDADAAQAJAAABAOIAAAIIAAAHIAAAFIAOgBQAKAAADABQAGABAAAIQAAAEgCADQgDADgFAAIgFgBIgEAAIgOACIADA5IAAAEIAAAFQAAAVgKAAQgEAAgCgDg");
	this.shape_2.setTransform(6.8,17.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.the, new cjs.Rectangle(0,0,36.1,31.9), null);


(lib.that = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHBWQgEgDAAgFIABgOIAAgOIgChGIgbgCQgLgCAAgKQAAgGADgDQADgEAFAAIAaACIAAgQIgBgPQAAgGADgDQAEgDAFAAQAKAAACASIAAALIAAAHIAAAHIARgCQANAAAEABQAHADAAAJQAAAFgDAEQgDADgGAAIgGAAIgGAAIgQACIACBHIAAAFIAAAGQABAbgOAAQgDAAgEgDg");
	this.shape.setTransform(19.5,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAnA+IgIgIIgVAJQgJADgFAAQgcAAgNgQQgNgPAAgfQAAgdAVgVQAUgVAbAAQALAAANAGQARAHAAAJQAAAEgDACIgCAPIAAAbQgBAPADAJIAHAVIADAHIABACQAAAEgEAEQgDADgEAAQgDAAgGgGgAgUgeQgNAQAAATQAAAUAHAKQAHAKAOAAQALAAAIgEIAMgKQgEgfAAgQIABgLIACgOIgIgDIgFgBQgSAAgOAPg");
	this.shape_1.setTransform(7.2,4.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAiBcQgDgJgDgTQgCgSAAgLIAAgKIAAgJQAAgXgLAAQgPABgLANQgHAHgKAUQAAAvgFAIQgDAIgHAAQgFgBgEgDQgEgDAAgFIACgFQAAgEAAgOIABgSIAAhZIABgVIgBgLIgBgLQAAgGADgDQAEgDAFAAQAKgBACALQACAMAAAJIgBAbQgBAOABANIAAALQAJgNAMgIQAKgGANAAQAVAAAHANQAGAKAAAUIABAYIADAZQABAPACAKIABAEQAAAFgEAEQgDACgGAAQgIABgCgKg");
	this.shape_2.setTransform(-6.2,0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgHBWQgEgDAAgFIABgOIAAgOIgChGIgbgCQgLgCAAgKQAAgGADgDQADgEAFAAIAaACIAAgQIgBgPQAAgGADgDQAEgDAFAAQAKAAACASIAAALIAAAHIAAAHIARgCQANAAAEABQAHADAAAJQAAAFgDAEQgDADgGAAIgGAAIgGAAIgQACIACBHIAAAFIAAAGQABAbgOAAQgDAAgEgDg");
	this.shape_3.setTransform(-19.6,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.5,-19.4,55.1,38.8);


(lib.tell = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgLBOIABgnIABgnIAAgmIABgnQAAgLAJAAQAMAAAAALIgBAnIgBAmIgCA1IgBAZQgBALgIAAQgKAAAAgLg");
	this.shape.setTransform(14.2,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgLBOIABgnIABgnIAAgmIABgnQAAgLAJAAQALAAAAALIAAAnIgBAmIgCA1IgBAZQAAALgJAAQgKAAAAgLg");
	this.shape_1.setTransform(8.2,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgkAvQgQgOAAgYQAAgbANgTQAOgVAZAAQARAAAMAHQANAHAAAPQAAALgMAJQgGAEgQAHIgpATQAGAJAKAFQAIAEALAAQAHAAALgDQAMgDAEgGQADgGAFAAQAEAAACADQAEADAAAEQgBAMgTAIQgQAIgQAAQgXAAgPgMgAgWgcQgIAKgEAUIAggPQATgKAIgHQgJgIgQAAQgNAAgJAKg");
	this.shape_2.setTransform(-0.7,3.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgGBMQgDgDAAgFIAAgLIAAgNIgCg+IgYgCQgJgBAAgJQAAgFADgDQADgDAEAAIAXACIgBgPIAAgNQAAgFADgDQADgCAEAAQAJAAACAPIAAAKIAAAGIAAAGIAPgBQALAAAEABQAGACAAAIQAAAFgDADQgDADgEAAIgGAAIgFgBIgPACIACA+IAAAFIABAGQAAAYgMgBQgDAAgDgCg");
	this.shape_3.setTransform(-12.1,1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.3,-17.3,38.7,34.7);


(lib.supplies = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgdA7QgRgFAAgLQAAgFAEgDQADgDAEAAQAEAAAFAGQACACAJABIANABQAIAAAGgCQAKgDAAgGQAAgPgUgFIgKgDQgOgDgGgEQgJgFAAgMQAAgXAVgJQAGgDAOgEIAUgGQAEgDAGAAQAEAAADAEQADADAAAEIABAKIACAJQAAAEgDADQgDAEgFAAQgGAAgCgFQgCgCgBgKIgZAIQgQAHAAAKIAGACQAYAFAMAHQARAKAAAWQAAARgPAJQgMAIgSAAQgPgBgMgFg");
	this.shape.setTransform(34.6,3.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgkAvQgQgOAAgYQAAgbANgTQAOgVAZAAQARAAALAHQAOAHAAAPQAAALgMAJQgGAEgQAHIgpATQAGAJAKAFQAIAEALAAQAHAAAKgDQANgDAEgGQAEgGAEAAQADAAADADQAEADAAAEQAAAMgUAIQgQAIgQAAQgXAAgPgMgAgWgcQgIAKgEAUIAhgPQASgKAIgHQgJgIgQAAQgNAAgJAKg");
	this.shape_1.setTransform(23.7,3.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgJBOQgEgDAAgFIAAgTIgBgUIACgZIABgYQAAgFADgDQADgDAFAAQADAAADADQADADAAAFIgBAYIgBAZIAAAUIABATQgBAFgDADQgDADgDAAQgEAAgDgDgAgGg6QgDgEAAgFQAAgFADgEQAEgEAEAAQAFAAAEAEQAEAEgBAFQABAFgEAEQgEADgFAAQgEAAgEgDg");
	this.shape_2.setTransform(14.6,0.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgMBOIACgnIABgnIABgmIAAgnQAAgLAKAAQALAAgBALIAAAnIgBAmIgBA1IgBAZQgBALgJAAQgLAAAAgLg");
	this.shape_3.setTransform(8.3,0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgpBXQgDgDAAgFIAAgrIAAgpIgBgrIgCgWQAAgIADgFQADgGAGAAQAEAAADADQADADAAAEIAAADIgBAHQAJgHAJgDQAIgDAHAAQAWAAAKATQAJAQAAAZQAAAXgNAPQgNAQgWAAQgKAAgNgEIAAAzQAAAFgDADQgDADgFAAQgEAAgDgDgAgKg4QgFADgJAIIABAyQAMAFALAAQANAAAHgKQAGgIAAgOQAAgTgEgKQgFgKgKAAQgJAAgIAFg");
	this.shape_4.setTransform(-0.5,6.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgpBXQgDgDAAgFIAAgrIAAgpIgBgrIgCgWQAAgIADgFQADgGAGAAQAEAAADADQADADAAAEIAAADIgBAHQAJgHAJgDQAIgDAHAAQAWAAAKATQAJAQAAAZQAAAXgNAPQgNAQgWAAQgKAAgNgEIAAAzQAAAFgDADQgDADgFAAQgEAAgDgDgAgKg4QgFADgJAIIABAyQAMAFALAAQANAAAHgKQAGgIAAgOQAAgTgEgKQgFgKgKAAQgJAAgIAFg");
	this.shape_5.setTransform(-12.2,6.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAZA0QgOAGgRABQgNAAgKgHQgKgGgCgOQgFgcABgWQgBgPAEgSQABgKAJAAQAFAAADAEQADADAAAEIgCAQIgBAQIABAeQABANADAIIAGACIAHABQANAAARgEIAAgWIAAgTQAAgYACgRQABgKAJAAQAFAAADADQACADAAAEIgBAqIAAAWIAAAWIAAAIIAAAHQAAAFgCADQgEADgEAAQgIAAgCgKg");
	this.shape_6.setTransform(-23.9,3.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgdA7QgRgFAAgLQAAgFAEgDQADgDAEAAQAEAAAFAGQACACAJABIANABQAIAAAGgCQAKgDAAgGQAAgPgUgFIgKgDQgOgDgGgEQgJgFAAgMQAAgXAVgJQAGgDAOgEIAUgGQAEgDAGAAQAEAAADAEQADADAAAEIABAKIACAJQAAAEgDADQgDAEgFAAQgGAAgCgFQgCgCgBgKIgZAIQgQAHAAAKIAGACQAYAFAMAHQARAKAAAWQAAARgPAJQgMAIgSAAQgPgBgMgFg");
	this.shape_7.setTransform(-35.3,3.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.4,-17.3,84.8,34.7);


(lib.Slim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGBIQgEgEAAgFQAAgPgDgdQgDgbAAgPQAAgNgDgHQgJAEgJAIIgOAQIgGAIIgCAVIgBAVIABAKIABAKQAAAFgDADQgEADgFAAQgOAAAAgfIABgWIACgVIgBgTIgCgUQAAgbANAAQAFAAAEAEQAEAEAAAFIgBAHIgBAIIABAMQAGgNAMgKQANgLAIAAQATAAAHATQAGgJAKgEQAJgFAMAAQAUAAAIAWQABAFAEAeQADAUAFAxQABAFgEADQgEADgFAAQgKAAgBgKQgDgOgCgYIgEglQgBgIgDgIQgEgLgFAAQgFAAgMAHQgMAHgDAFQgBALABAMIAEAfQACATAAANQAAAFgDAEQgEADgFAAQgEAAgDgDg");
	this.shape.setTransform(15.8,4.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgLBYQgEgDAAgFIAAgWIAAgWIABgdIABgbQAAgGADgDQAEgEAFAAQAEAAAEAEQADADAAAGIgBAbIgBAdIAAAWIAAAWQAAAFgDADQgDAEgFAAQgFAAgDgEgAgHhCQgEgFAAgFQAAgGAEgEQAEgFAFAAQAGAAAEAFQAEAEAAAGQAAAFgEAFQgEAEgGAAQgFAAgEgEg");
	this.shape_1.setTransform(2.6,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgNBZIACgtIABgsIABgrIAAgsQAAgNALAAQAMAAAAANIgBAsIAAArIgCA8IgBAdQgBAMgKAAQgMAAAAgMg");
	this.shape_2.setTransform(-4.5,0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgwBUQgXgKAAgSQgBgFAEgEQAEgDAFAAQAGAAAEAHQAHAJAFAEQAKAGAUABQASAAAQgJQAVgLAAgSQAAgQgSgIQgPgIgUAAQgUgBgNgHQgSgKAAgSQAAgWAZgSQAYgRAYAAQAMAAAPAEQATAFAAAIQAAALgLAAIgRgDQgMgCgHAAQgSAAgNAJQgOAKAAANQAAALASADIAZADQAcADAQAPQAPANAAAUQAAAegbARQgYAPgdAAQgXAAgSgJg");
	this.shape_3.setTransform(-16.5,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.4,-19.4,54.8,38.8);


(lib.should = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AglBJQgPgPgBgYQAAgcAQgRQAPgRAXAAQAMAAAHAEIAKAHQACgtACgQQACgJAIAAQAKAAAAAKQAAAPgFAzIgBAfQAAAkAEASIAAACQAAAFgEADQgCACgEAAQgHAAgDgKQgIAGgIADQgJADgHAAQgXAAgOgPgAgZACQgJAKAAAWQAAANAKAKQAKALAOgBQAHAAAGgCQAFgDAIgGIACgEIAAgTIAAgMIAAgMQgDgJgHgEQgHgEgKAAQgQAAgKAKg");
	this.shape.setTransform(26.1,0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgMBOIACgnIABgnIAAgmIABgnQAAgLAKAAQAKAAABALIgBAnIgBAmIgBA1IgCAZQgBALgIAAQgLAAAAgLg");
	this.shape_1.setTransform(16.7,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAZA0QgOAGgRABQgNAAgKgHQgKgGgCgOQgFgcABgWQgBgPAEgSQACgKAIAAQAFAAADAEQADADAAAEIgCAQIgBAQIABAeQABANADAIIAGACIAHABQANAAAQgEIAAgWIAAgTQABgYACgRQABgKAJAAQAEAAAEADQACADAAAEIgBAqIAAAWIAAAWIAAAIIABAHQAAAFgDADQgDADgFAAQgIAAgCgKg");
	this.shape_2.setTransform(8,3.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AggAuQgOgPgBgaQAAgXAMgSQAPgWAaAAQAWAAALAUQAJAPgBAXQAAAXgMARQgOATgWAAQgSAAgNgNgAgTgVQgHAMAAAOQAAAQAJAJQAHAHAJAAQALAAAIgIQAJgJAAgQQACgogYAAQgPAAgJAPg");
	this.shape_3.setTransform(-3.7,3.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAdBRQgCgJgCgQQgCgPAAgKIAAgJIAAgIQAAgUgKAAQgNAAgKAMQgGAGgJASQAAApgEAHQgDAHgGAAQgFAAgDgDQgDgDAAgEIABgFQABgDAAgNIAAgQIABhNIAAgSIgBgLIgBgKQAAgEADgDQAEgDAEAAQAJAAABAJQACALAAAIIgBAXIAAAYIAAAJQAJgLAKgGQAJgGALAAQASAAAHALQAEAJABASIABAVIACAWQABAMADAKIAAADQAAAFgDADQgDACgFAAQgIAAgCgIg");
	this.shape_4.setTransform(-15.5,0.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgdA7QgRgFAAgLQAAgFAEgDQADgDAEAAQAEAAAFAGQACACAJABIANABQAIAAAGgCQAKgDAAgGQAAgPgUgFIgKgDQgOgDgGgEQgJgFAAgMQAAgXAVgJQAGgDAOgEIAUgGQAEgDAGAAQAEAAADAEQADADAAAEIABAKIACAJQAAAEgDADQgDAEgFAAQgGAAgCgFQgCgCgBgKIgZAIQgQAHAAAKIAGACQAYAFAMAHQARAKAAAWQAAARgPAJQgMAIgSAAQgPgBgMgFg");
	this.shape_5.setTransform(-27.6,3.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.7,-17.3,69.5,34.7);


(lib.Sam = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGBIQgEgEAAgFQAAgPgDgdQgDgbAAgPQAAgNgDgHQgJAEgJAIIgOAQIgGAIIgCAVIgBAVIABAKIABAKQAAAFgDADQgEADgFAAQgOAAAAgfIABgWIACgVIgBgTIgCgUQAAgbANAAQAFAAAEAEQAEAEAAAFIgBAHIgBAIIABAMQAGgNAMgKQANgLAIAAQATAAAHATQAGgJAKgEQAJgFAMAAQAUAAAIAWQABAFAEAeQADAUAFAxQABAFgEADQgEADgFAAQgKAAgBgKQgDgOgCgYIgEglQgBgIgDgIQgEgLgFAAQgFAAgMAHQgMAHgDAFQgBALABAMIAEAfQACATAAANQAAAFgDAEQgEADgFAAQgEAAgDgDg");
	this.shape.setTransform(15.3,4.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAnA+IgIgIIgVAJQgJADgFAAQgcAAgNgQQgNgPAAgfQAAgdAVgVQAUgVAbAAQALAAANAGQARAHAAAJQAAAEgDACIgCAPIAAAbQgBAPADAJIAHAVIADAHIABACQAAAEgEAEQgDADgEAAQgDAAgGgGgAgUgeQgNAQAAATQAAAUAHAKQAHAKAOAAQALAAAIgEIAMgKQgEgfAAgQIABgLIACgOIgIgDIgFgBQgSAAgOAPg");
	this.shape_1.setTransform(-1,4.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgwBUQgXgKAAgSQgBgFAEgEQAEgDAFAAQAGAAAEAHQAHAJAFAEQAKAGAUABQASAAAQgJQAVgLAAgSQAAgQgSgIQgPgIgUAAQgUgBgNgHQgSgKAAgSQAAgWAZgSQAYgRAYAAQAMAAAPAEQATAFAAAIQAAALgLAAIgRgDQgMgCgHAAQgSAAgNAJQgOAKAAANQAAALASADIAZADQAcADAQAPQAPANAAAUQAAAegbARQgYAPgdAAQgXAAgSgJg");
	this.shape_2.setTransform(-16,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.8,-19.4,53.8,38.8);


(lib.row = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAIAjIgGgdIgCgaIgKAXIgTAyQgCAFgDACQgEAIgHAAQgJAAgJgkQgFgUgEgfIgDgTIgCgSQAAgFAEgDQAEgEAFABQAJAAACAKIACASIADASIAGA1QAOgkAPgyQAEgNAJAAQAJAAAEAPIAIAsQAEAeAEARIAJghIAQhCQACgHAIAAQAGAAADADQAFAEAAAEIgCAGQgKAogPAxQgDAMgIALQgFAGgHABQgNgBgHghg");
	this.shape.setTransform(12.7,4.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgkA0QgQgRgBgcQgBgbAPgVQARgZAdAAQAZAAAMAXQAKASAAAZQAAAagOATQgQAWgZAAQgUAAgPgPgAgVgYQgIAOAAARQAAARAKAKQAIAIAKAAQAMAAAJgJQALgKAAgSQACgugbAAQgRAAgKARg");
	this.shape_1.setTransform(-2.8,4.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgvA4IAAhVIABgMIAAgMQAAgMALAAQAMAAAAAUQAXgWAcAAQAKAAAEAHQAGAHAAAPIAAAJQgBAPgMAAQgLAAAAgMIAAgIIAAgLQgUADgKAIQgKAIgIAQIABBCQAAAMgNAAQgLAAAAgMg");
	this.shape_2.setTransform(-14.7,4.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.2,-19.4,46.5,38.8);


(lib.now = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAZA8QgMAAgGgdIgFgZIgCgXIgJAUIgQAsQgCAEgCACQgDAHgIAAQgIAAgHggQgEgRgEgbIgDgQIgBgRQAAgEADgDQADgDAFAAQAIAAACAJIACAQIACAPIAGAwIAZhMQADgMAIAAQAJAAADAOIAHAmQAEAaADAQIAIgeIAOg5QACgHAHAAQAFAAADADQADADAAAFIgBAFQgIAjgOArQgDAKgHAKQgDAFgGAAIgBAAg");
	this.shape.setTransform(11.4,3.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AggAuQgOgPgBgaQAAgXAMgSQAPgWAaAAQAWAAALAUQAJAPgBAXQAAAXgMARQgOATgVAAQgTAAgNgNgAgSgVQgIAMAAAOQABAQAIAJQAHAHAKAAQAKAAAIgIQAJgJAAgQQACgogYAAQgPAAgIAPg");
	this.shape_1.setTransform(-2,3.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAaA1IgDgYIgBgYIAAgJIAAgKQAAgXgIAAQgMAAgKAOQgKANgGATIgBALIAAAKIAAAJIABAKQAAAFgDADQgDADgFAAQgEAAgDgDQgDgDAAgFIgBgKIAAgJIABgeIACgfIgBgKIAAgKQAAgFADgDQADgCAFAAQAJgBABAOIABANQASgYASAAQARAAAHAQQAEAJABAUIAAALIAAAJQAAAJACAOQACAOAAAJQAAAEgDADQgDAEgEAAQgKgBgBgJg");
	this.shape_2.setTransform(-13.1,3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.1,-17.3,42.2,34.7);


(lib.muscles = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AghBEQgTgHAAgMQAAgFAEgEQADgEAFAAQAEAAAGAHQADADAKABIAOABQAJAAAIgCQALgEAAgHQAAgQgXgHIgLgDQgRgDgGgFQgKgFAAgOQAAgaAYgKQAHgEAPgEIAXgIQAFgDAGABQAFgBAEAEQADADAAAGIACAKIABAKQAAAGgDADQgEAEgFAAQgHAAgCgFQgCgCgBgKQgKACgTAGQgSAIAAALIAHACQAbAFAOAJQATAMAAAYQAAAUgRAKQgOAIgVAAQgQAAgOgFg");
	this.shape.setTransform(38.7,3.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgpA1QgTgPAAgcQAAgeAQgWQAQgYAcAAQAUAAANAIQAPAHAAASQAAAMgOAKQgGAFgTAIIguAWQAHAKAKAGQAKAEANAAQAIAAAMgDQAOgDAEgHQAEgGAFgBQAEAAAEAEQADADAAAEQAAANgWAKQgTAJgRAAQgbAAgRgOgAgYggQgKALgFAXIAlgRQAVgLAKgIQgLgKgSABQgOgBgKAMg");
	this.shape_1.setTransform(26.3,4.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgNBZIABgtIACgsIAAgrIABgsQAAgNALAAQAMAAAAANIgBAsIAAArIgCA8IgBAdQgBAMgKAAQgMAAAAgMg");
	this.shape_2.setTransform(15.9,0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgiA2QgSgQAAgaQAAgYARgaQASgeAWAAQAMAAAPAGQASAHAAALQAAAEgDAEQgDAEgEAAQgEAAgDgDIgFgEQgHgGgQAAQgMAAgMAXQgLAUAAAOQAAAQALAJQAKAJAPAAQAIAAAIgEIAOgHIAFgCQAFAAADADQAEAEAAAEQAAAJgTAJQgRAHgLAAQgYAAgQgPg");
	this.shape_3.setTransform(6.1,4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AghBEQgTgHAAgMQAAgFAEgEQADgEAFAAQAEAAAGAHQADADAKABIAOABQAJAAAIgCQALgEAAgHQAAgQgXgHIgLgDQgRgDgGgFQgKgFAAgOQAAgaAYgKQAHgEAPgEIAXgIQAFgDAGABQAFgBAEAEQADADAAAGIACAKIABAKQAAAGgDADQgEAEgFAAQgHAAgCgFQgCgCgBgKQgKACgTAGQgSAIAAALIAHACQAbAFAOAJQATAMAAAYQAAAUgRAKQgOAIgVAAQgQAAgOgFg");
	this.shape_4.setTransform(-6.8,3.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAbA6QgPAIgTAAQgQAAgKgHQgMgIgCgPQgFggAAgZQAAgQAEgWQABgKAKAAQAGAAADADQAEADAAAGIgCASIgCASIABAiQACAPACAJIAIADIAIABQAPABATgGIAAgYIgBgYQAAgaADgTQABgLAKAAQAGAAADADQAEAEAAAEIgDAuIAAAaIABAaIAAAIIAAAJQAAAFgDAEQgEADgFAAQgJAAgDgMg");
	this.shape_5.setTransform(-19,4.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgGBIQgEgEAAgFQAAgPgDgdQgDgbAAgPQAAgNgDgHQgJAEgJAIIgOAQIgGAIIgCAVIgBAVIABAKIABAKQAAAFgDADQgEADgFAAQgOAAAAgfIABgWIACgVIgBgTIgCgUQAAgbANAAQAFAAAEAEQAEAEAAAFIgBAHIgBAIIABAMQAGgNAMgKQANgLAIAAQATAAAHATQAGgJAKgEQAJgFAMAAQAUAAAIAWQABAFAEAeQADAUAFAxQABAFgEADQgEADgFAAQgKAAgBgKQgDgOgCgYIgEglQgBgIgDgIQgEgLgFAAQgFAAgMAHQgMAHgDAFQgBALABAMIAEAfQACATAAANQAAAFgDAEQgEADgFAAQgEAAgDgDg");
	this.shape_6.setTransform(-35.1,4.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.1,-19.4,94.3,38.8);


(lib.Mick = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAaBLQgFgKgKgOIgRgXIgRAMIgBAeQAAAEgDADQgDADgEAAQgJAAgBgOIABgYIABgYIABghIABgiIgBgKIgBgLQABgEADgDQACgCAEAAQAEAAADACQADADAAAEIABALIAAALIgBAfIAAAhIAYgVIAWgWQADgEAEAAQADAAADADQAEADAAAEQAAAEgDADQgMAOgSAPIAVAdQAQAVgBAGQAAAEgCACQgDADgEAAQgGAAgDgFg");
	this.shape.setTransform(41.6,16.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgbArQgOgMAAgWQAAgTANgUQAPgYARAAQAJAAAMAFQAPAGABAHQgBAFgCACQgCADgEAAQgDAAgCgCIgEgDQgGgEgNgBQgJABgKARQgJAQABALQgBAOAJAHQAJAHALAAQAGAAAGgDIAMgHIAEgBQAEAAADADQACADAAADQAAAHgPAIQgNAFgJAAQgTAAgNgMg");
	this.shape_1.setTransform(30.5,19.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgIBHQgEgDAAgEIAAgSIAAgRIABgXIABgWQAAgEADgDQACgDAFAAQACAAADADQADADAAAEIgBAWIgBAXIAAARIABASQAAAEgDADQgDACgDABQgEgBgCgCgAgGg1QgDgDAAgFQAAgEADgEQAEgEAEAAQAEAAAEAEQADAEAAAEQAAAFgDADQgEADgEAAQgEAAgEgDg");
	this.shape_2.setTransform(22.7,16.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AA8BJQgDgEgCgLIgEgRQgEgPgJg0IgTA5IgGASIgHATQgEAHgGAAQgGAAgDgGQgDgEgBgHIgDgLQgKgigIgmIgDASIgMAyQgBAJgFASQgDAHgGAAQgFAAgDgDQgCgDAAgFQAAgPAHgYIALgnIAFgfQAEgVAFgGQAEgHAGAAQAGAAAEAIQADAIAFAbQAFAgAKAlQAOglAKgpIADgOQADgIACgFQAEgIAGAAQAJAAAFARIADAWQAGAsAJAfIAEARIAEAQQAAAEgDADQgEADgEAAQgFAAgDgGg");
	this.shape_3.setTransform(11,17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Mick, new cjs.Rectangle(0,0,48.5,31.9), null);


(lib.his = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AghBEQgTgHAAgMQAAgFAEgEQADgEAFAAQAEAAAGAHQADADAKABIAOABQAJAAAIgCQALgEAAgHQAAgQgXgHIgLgDQgRgDgGgFQgKgFAAgOQAAgaAYgKQAHgEAPgEIAXgIQAFgDAGABQAFgBAEAEQADADAAAGIACAKIABAKQAAAGgDADQgEAEgFAAQgHAAgCgFQgCgCgBgKQgKACgTAGQgSAIAAALIAHACQAbAFAOAJQATAMAAAYQAAAUgRAKQgOAIgVAAQgQAAgOgFg");
	this.shape.setTransform(10.5,3.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgLBYQgEgDAAgFIAAgWIAAgWIABgdIABgbQAAgGADgDQAEgEAFAAQAEAAAEAEQADADAAAGIgBAbIgBAdIAAAWIAAAWQAAAFgDADQgDAEgFAAQgFAAgDgEgAgHhCQgEgFAAgFQAAgGAEgEQAEgFAFAAQAGAAAEAFQAEAEAAAGQAAAFgEAFQgEAEgGAAQgFAAgEgEg");
	this.shape_1.setTransform(1.5,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAhBcQgDgJgCgTQgCgSAAgLIABgKIAAgJQAAgXgMAAQgPABgMANQgGAHgLAUQAAAvgDAIQgEAIgHAAQgFgBgEgDQgEgDAAgFIABgFQACgEAAgOIAAgSIABhZIAAgVIgBgLIgBgLQAAgGAEgDQADgDAFAAQAKgBACALQACAMAAAJIgBAbQgBAOAAANIAAALQAKgNAMgIQALgGAMAAQAUAAAIANQAFAKABAUIABAYIACAZQACAPADAKIAAAEQAAAFgDAEQgEACgFAAQgJABgDgKg");
	this.shape_2.setTransform(-9.3,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.9,-19.4,37.8,38.8);


(lib.guy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AggBgQgEgEAAgFQAAgMAbg6IgshUIgFgIQgEgGAAgEQAAgFAEgEQAEgDAFAAQAFAAADAEQAVAdAXA1IASgqQAKgWAJgQQAEgHAGAAQAFAAAEAEQAEADAAAFIgCAGIgqBbQgQAhgHAWIgIAYQgDAJgIAAQgFAAgEgDg");
	this.shape.setTransform(12.8,7.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAbA6QgPAIgTAAQgQAAgKgHQgMgIgCgPQgFggAAgZQAAgQAEgWQABgKAKAAQAGAAADADQAEADAAAGIgCASIgCASIABAiQACAPACAJIAIADIAIABQAPABATgGIAAgYIgBgYQAAgaADgTQABgLAKAAQAGAAADADQAEAEAAAEIgDAuIAAAaIABAaIAAAIIAAAJQAAAFgDAEQgEADgFAAQgJAAgDgMg");
	this.shape_1.setTransform(0.2,4.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgqBfQgPgEAAgJQAAgLAKAAIAPACQAKACANAAQAWAAAJgXQAGgPAAgeQgGAMgJAGQgJAGgLAAQgWAAgOgPQgOgPAAgXQAAghATgUQAUgVAgAAQAMAAAHADQAIADAEAGQANAAAAAOQAAAJgDAPIgDAWIgDAoQAAAZgFAPQgFAUgMAKQgPALgbAAQgQAAgLgCgAgWg9QgLAPAAAWQAAASAGAIQAHAJAOgBQALAAAMgMQAKgNACgNQACgNADgcQgFgEgFgBQgFgCgGAAQgWAAgNAPg");
	this.shape_2.setTransform(-13.2,7.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.7,-19.4,43.5,38.8);


(lib.get = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHBWQgEgDAAgFIABgOIAAgOIgChGIgbgCQgLgCAAgKQAAgGADgDQADgEAFAAIAaACIAAgQIgBgPQAAgGADgDQAEgDAFAAQAKAAACASIAAALIAAAHIAAAHIARgCQANAAAEABQAHADAAAJQAAAFgDAEQgDADgGAAIgGAAIgGAAIgQACIACBHIAAAFIAAAGQABAbgOAAQgDAAgEgDg");
	this.shape.setTransform(13.4,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgpA1QgTgPAAgcQAAgeAQgWQAQgYAcAAQAUAAANAIQAPAHAAASQAAAMgOAKQgGAFgTAIIguAWQAHAKAKAGQAKAEANAAQAIAAAMgDQAOgDAEgHQAEgGAFgBQAEAAAEAEQADADAAAEQAAANgWAKQgTAJgRAAQgbAAgRgOgAgYggQgKALgFAXIAlgRQAVgLAKgIQgLgKgSABQgOgBgKAMg");
	this.shape_1.setTransform(0.9,4.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgqBfQgPgEAAgJQAAgLAKAAIAPACQAKACANAAQAWAAAJgXQAGgPAAgeQgGAMgJAGQgJAGgLAAQgWAAgOgPQgOgPAAgXQAAghATgUQAUgVAgAAQAMAAAHADQAIADAEAGQANAAAAAOQAAAJgDAPIgDAWIgDAoQAAAZgFAPQgFAUgMAKQgPALgbAAQgQAAgLgCgAgWg9QgLAPAAAWQAAASAGAIQAHAJAOgBQALAAAMgMQAKgNACgNQACgNADgcQgFgEgFgBQgFgCgGAAQgWAAgNAPg");
	this.shape_2.setTransform(-12.9,7.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.4,-19.4,43,38.8);


(lib.food = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgrBUQgRgSAAgbQAAggARgTQARgUAbAAQAPAAAHAEIAMAJQABg0ACgRQACgLAKAAQALAAAAAMQAAAQgFA7QgBAQgBATQABApADAUIABADQAAAFgEADQgEADgEAAQgIAAgDgLQgJAGgJAEQgJADgKAAQgZAAgRgQgAgcACQgKAMAAAZQAAAQALALQALALAPAAQAJAAAIgEIANgKIAEgDIgBgWIAAgOIABgPQgFgJgIgEQgIgFgLAAQgTAAgKALg");
	this.shape.setTransform(19.4,0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgkA0QgQgRgBgcQgBgbAPgVQARgZAdAAQAZAAAMAXQAKASAAAZQAAAagOATQgQAWgZAAQgUAAgPgPgAgVgYQgIAOAAARQAAARAKAKQAIAIAKAAQAMAAAJgJQALgKAAgSQACgugbAAQgRAAgKARg");
	this.shape_1.setTransform(5.3,4.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgkA0QgQgRgBgcQgBgbAPgVQARgZAdAAQAZAAAMAXQAKASAAAZQAAAagOATQgQAWgZAAQgUAAgPgPgAgVgYQgIAOAAARQAAARAKAKQAIAIAKAAQAMAAAJgJQALgKAAgSQACgugbAAQgRAAgKARg");
	this.shape_2.setTransform(-7.8,4.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgTBoQgEgDAAgFIAAgDQADgPAAgTIAAghIAAgjIgUABQgMAAAAgLQAAgMAVgBIAMAAIACgTQADgbAKgNQAMgPAcAAQARAAAAALQAAAMgQAAQgeAAgDApIgBAIIAbgCQAUAAAAAMQAAAJgKACIgKABQgFgBgXACIgBAbIABAXIAAAWQABAYgDANQgCAJgIAAQgGAAgDgDg");
	this.shape_3.setTransform(-20.7,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.9,-19.4,57.9,38.8);


(lib.flex = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAmBCIgngzIgXAZIgWAUQgDAEgFAAQgFAAgDgDQgDgEgBgFQAAgDADgEIALgLIALgLIAagaIgQgXQgJgOgIgGQgEgEAAgFQAAgFADgEQADgDAFAAQAIAAAOASIAUAeIAYgWQAPgOAFgIQAEgGAGAAQAEAAAEADQADAEABAFQAAAGgMAMIgRARIgXAVIApAzQACAEABAEQgBAFgDADQgEAEgEAAQgFAAgEgEg");
	this.shape.setTransform(16.7,3.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgpA1QgTgPAAgcQAAgeAQgWQAQgYAcAAQAUAAANAIQAPAHAAASQAAAMgOAKQgGAFgTAIIguAWQAHAKAKAGQAKAEANAAQAIAAAMgDQAOgDAEgHQAEgGAFgBQAEAAAEAEQADADAAAEQAAANgWAKQgTAJgRAAQgbAAgRgOgAgYggQgKALgFAXIAlgRQAVgLAKgIQgLgKgSABQgOgBgKAMg");
	this.shape_1.setTransform(2.7,4.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgNBZIABgtIACgsIABgrIAAgsQAAgNALAAQAMAAAAANIgBAsIAAArIgCA8IgBAdQgBAMgKAAQgMAAAAgMg");
	this.shape_2.setTransform(-7.8,0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgTBoQgDgDgBgFIAAgDQADgPAAgTIAAghIAAgjIgUABQgMAAAAgLQAAgMAVgBIAMAAIACgTQADgbAKgNQANgPAbAAQARAAAAALQAAAMgQAAQgeAAgDApIgBAIIAbgCQAUAAAAAMQAAAJgKACIgKABQgFgBgXACIAAAbIAAAXIAAAWQAAAYgCANQgBAJgKAAQgFAAgDgDg");
	this.shape_3.setTransform(-17.8,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.1,-19.4,52.2,38.8);


(lib.bring = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgqBfQgPgEAAgJQAAgLAKAAIAPACQAKACANAAQAWAAAJgXQAGgPAAgeQgGAMgJAGQgJAGgLAAQgWAAgOgPQgOgPAAgXQAAghATgUQAUgVAgAAQAMAAAHADQAIADAEAGQANAAAAAOQAAAJgDAPIgDAWIgDAoQAAAZgFAPQgFAUgMAKQgPALgbAAQgQAAgLgCgAgWg9QgLAPAAAWQAAASAGAIQAHAJAOgBQALAAAMgMQAKgNACgNQACgNADgcQgFgEgFgBQgFgCgGAAQgWAAgNAPg");
	this.shape.setTransform(23.3,7.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAeA7IgDgaQgCgOgBgNIABgLIABgLQAAgbgLAAQgNAAgLARQgLAOgHAWIgBAMIgBAMIABALIABALQgBAFgDAEQgDADgGAAQgEAAgEgDQgDgEAAgFIgBgLIgBgLIACgiIABgiIAAgMIAAgMQAAgFADgEQAEgDAFAAQALAAABAQIABAOQAUgbAUAAQAUAAAIARQAFAMAAAWIAAAMIAAALQABAKACAQQADAQAAAKQAAAGgEADQgDADgGAAQgKAAgBgMg");
	this.shape_1.setTransform(10.6,3.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgLBYQgEgDAAgFIAAgWIAAgWIABgdIABgbQAAgGADgDQAEgEAFAAQAEAAAEAEQADADAAAGIgBAbIgBAdIAAAWIAAAWQAAAFgDADQgDAEgFAAQgFAAgDgEgAgHhCQgEgFAAgFQAAgGAEgEQAEgFAFAAQAGAAAEAFQAEAEAAAGQAAAFgEAFQgEAEgGAAQgFAAgEgEg");
	this.shape_2.setTransform(0.5,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgvA4IAAhVIABgMIAAgMQAAgMALAAQAMAAAAAUQAXgWAcAAQAKAAAEAHQAGAHAAAPIAAAJQgBAPgMAAQgLAAAAgMIAAgIIAAgLQgUADgKAIQgKAIgIAQIABBCQAAAMgNAAQgLAAAAgMg");
	this.shape_3.setTransform(-8.9,4.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgkBcQgEAFgGAAQgEAAgEgDQgDgDAAgFIABgJIAAgKIgBgmIgBgmIABgiIAAgiQAAgHADgGQAEgIAGAAQAKAAgBALIAAAFIgBAFIAAAbIAAAfQAKgHAKgEQAJgDAIAAQAbAAAQAUQAPASAAAbQAAAcgSATQgSAUgZAAQgTAAgPgHgAgSgFIgSALIAAAVIAAAUIAAAUIARAGQAHADAKAAQAQAAAMgNQALgMAAgTQAAgSgKgMQgJgMgRAAQgJAAgKAFg");
	this.shape_4.setTransform(-22.4,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.2,-19.4,64.4,38.8);


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


(lib.InfinitObjDef = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgJAJQgDgDAAgGQAAgFADgDQAEgEAFAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFAAQgFAAgEgEg");
	this.shape.setTransform(221.7,21.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgHBPQgDgDAAgFIAAgFIABgFIgBgQIAAgPQAAgQgDgbQgDgeAAgNIgKAAQgXAAgOgDQgIgCAAgJQAAgEADgEQADgDAFAAIARACIARABIAUAAIASAAIAZABIAZABQAEAAADADQADADAAAFQAAAFgDADQgDADgEAAIgZgBIgYgBIgIAAIADAwQACAeAAARIABALIABAMQAAAHgDAGQgDAHgGAAQgDAAgEgDg");
	this.shape_1.setTransform(212.3,14);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgsBCQgPgRAAgWQAAgkAfgmQAZgfAZgBIAKABIAHABQAEgFAGAAQAHAAACAKQACAJAAAMQAAAEgCAEQgDAEgGAAQgHAAgDgIQgDgHgDgBQgCgBgJAAQgPAAgSAXQgaAgAAAcQAAAOAJAKQAJAKANAAQAKAAALgGIATgMQAGgFADAAQAFAAADAEQADADAAAFQAAAFgEADQgcAZgcAAQgWAAgQgRg");
	this.shape_2.setTransform(197.5,14);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AguBTQgLgJAAgjIABgQIAAgRIgBgFQAAgDACgCIACguIgBgMIgBgMQAAgMALAAQAFAAADACQANgDALgBQAMgDAJAAQAaAAAPAHQAIACAAAIQAAAEgDAEQgDADgFAAIgDAAQgSgGgRABQgJAAgKABIgWAGIABALIgCAoIAugEIAagCQAEAAAEADQADADAAAFQAAAIgKACIgaACIgwAFIgBAOIAAANQAAAYADAEQADACAOAAIATAAIAUAAIAHgBIAGgBQALAAAAALQAAAKgJABQgKADghAAQghAAgJgJg");
	this.shape_3.setTransform(184.1,14);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgrBKQgUgPgBgTQAAgOAMAAQAKAAABANQAAAJAMAJQAMAJALAAQAIAAADg3QACgYAAgnIgBgLIgGAAIgMAAIgMgBQgGAAgCgDQgEgDAAgFQAAgLAPAAIALAAIAKABIAUgBIAUgBQAZAAAAAMQAAAFgDADQgEAEgEAAIgGgBIgIgBIgMAAIABANQAABPgLAlQgHAYgRAAQgTAAgSgOg");
	this.shape_4.setTransform(169.7,14.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgyBTQgEgFAAgEIAAggIACgrIADgsQgBgJACgUQAAgGADgBQAPgFASAAQASAAASANQAUAPAAAWQAAAcgWAOQARAHAIAJQAIAIAAAKQAAANgPAMQgJAJgLAEQgXAJgmAAQgEAAgFgEgAggArIAAAWQAcgBAQgHQAIgCAHgHQAGgFAAgDQAAgFgNgGQgLgGgJgCIgLgBIgEAAIgEAAIgNgCIAAAZgAgcg/IAAASIgCAqIAQABQAPgBALgJQALgJAAgPQAAgLgMgIQgLgJgMAAIgQABg");
	this.shape_5.setTransform(155.9,13.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag2BCQgWgTAAgeQAAglAWgeQAYgiAkAAQAkABARAPQASAQAAAkQAAAlgUAdQgXAjgkgBQgeABgWgTgAgmgjQgQAYAAAcQAAAUAPANQAPAMAWABQAZgBARgaQAPgXAAgdQAAgZgMgLQgLgKgaABQgZAAgTAag");
	this.shape_6.setTransform(139.8,14.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgdA8QgRgHAAgKQAAgFAEgDQADgDAEAAQAEAAAFAFQACADAJACIANABQAIAAAGgCQAKgEAAgHQAAgOgUgFIgKgCQgOgDgGgFQgJgFAAgMQAAgWAVgKQAGgDAOgEIAUgHQAEgBAGAAQAEAAADACQADADAAAFIABAJIACAJQAAAFgDADQgDADgFAAQgGAAgCgDQgCgEgBgIIgZAHQgQAHAAAKIAGACQAYAEAMAIQARALAAAUQAAASgPAJQgMAHgSAAQgPAAgMgEg");
	this.shape_7.setTransform(118.7,16.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgGBLQgDgCAAgEIAAgNIAAgMIgCg9IgYgCQgJgBAAgKQAAgFADgDQADgDAEAAIAXACIgBgPIAAgNQAAgEADgDQADgEAEAAQAJAAACAQIAAAKIAAAGIAAAHIAPgCQALAAAEABQAGACAAAIQAAAFgDADQgDADgEAAIgGAAIgFAAIgPABIACA/IAAAFIABAFQAAAXgMABQgDAAgDgEg");
	this.shape_8.setTransform(108.4,14.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgJBOQgDgDAAgFIgBgTIgBgUIACgZIABgYQAAgFADgDQADgDAFAAQADAAADADQADADAAAFIgBAYIgBAZIAAAUIABATQAAAFgDADQgDADgEAAQgEAAgDgDgAgGg6QgDgEAAgFQAAgFADgEQAEgEAEAAQAFAAAEAEQAEAEAAAFQAAAFgEAEQgEADgFAAQgEAAgEgDg");
	this.shape_9.setTransform(100.4,14);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgmBJQgPgPAAgYQABgdAPgQQAPgRAXAAQAMAAAIAEIAKAHQABgtACgPQABgKAJAAQAJAAAAAKQAAAPgDAzIgCAeQAAAlADASIAAACQAAAFgCADQgDACgFAAQgGAAgDgJQgIAFgIADQgIADgJAAQgWAAgPgPgAgYABQgJALAAAWQAAAOAKAKQAJAJANABQAIAAAHgEQAEgBAHgIIAEgDIAAgSIAAgNIAAgNQgFgIgGgDQgHgFgJAAQgSAAgIAJg");
	this.shape_10.setTransform(84.1,13.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAaA0IgDgXIgBgXIAAgJIAAgLQAAgXgIAAQgMAAgKAOQgKANgGATIgBALIAAAKIAAAKIABAKQAAAEgDADQgDADgFAAQgEAAgDgDQgDgDAAgEIgBgKIAAgKIABgeIACgeIgBgKIAAgLQAAgEADgDQADgDAFgBQAJAAABAOIABANQASgYASAAQARAAAHAPQAEALABATIAAALIAAAJQAAAJACAOQACAOAAAJQAAAFgDACQgDADgEAAQgKAAgBgKg");
	this.shape_11.setTransform(72.2,16.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAiA3IgHgIIgSAIQgIAEgEAAQgZAAgMgPQgLgNAAgbQAAgaASgSQASgSAYAAQAJgBAMAFQAOAGAAAJQAAADgCACIgBAOIgBAWQAAANACAJIAGASIADAGIABACQAAAEgDADQgDACgEABQgCgBgGgEgAgRgaQgNANAAASQAAARAHAJQAGAIAMABQAKgBAHgEIALgIQgEgbAAgOIABgKIACgMIgHgCIgFgBQgPAAgMANg");
	this.shape_12.setTransform(60.6,16.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AguBTQgLgJAAgjIABgQIAAgRIgBgFQAAgDACgCIACguIgBgMIgBgMQAAgMALAAQAFAAADACQANgDALgBQAMgDAJAAQAaAAAPAHQAIACAAAIQAAAEgDAEQgDADgFAAIgDAAQgSgGgRABQgJAAgKABIgWAGIABALIgCAoIAugEIAagCQAEAAAEADQADADAAAFQAAAIgKACIgaACIgwAFIgBAOIAAANQAAAYADAEQADACAOAAIATAAIAUAAIAHgBIAGgBQALAAAAALQAAAKgJABQgKADghAAQghAAgJgJg");
	this.shape_13.setTransform(41.9,14);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgSBOQgNgggRg9IgIgdQgGgWAAgHQgBgFAEgDQADgDAEAAQAIAAADAJIAEASIALAlQAKAnAJAdIABgCIAchNIAJgaQAGgQAHgIQADgFAGAAQAEAAADAEQADADABAFQAAADgCADQgHAKgFALIgHAXIgeBOQgEANgHANQgDAHgGAAQgIAAgDgJg");
	this.shape_14.setTransform(28.2,14.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgvBPQgCgDAAgFQAAgEACgEQADgDAFAAQAHAAAQgCIABgUIAAgSIgBgSQAAgYADglIgOAAIgOABQgEAAgEgDQgDgEAAgEQAAgKAKgBIAggBQAVAAAgAEQAKACAAAKQAAAFgEADQgDACgEAAIgSgBIgRgCQgCAfgBAbIABATIAAATIAAASIAiAAQAEAAAEADQACADABAFQgBAEgCADQgEAEgEAAIgSAAIgSAAIgVACIgVACQgFAAgDgDg");
	this.shape_15.setTransform(14.4,14.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgHBPQgDgDAAgFIAAgFIABgFIgBgQIAAgPQAAgQgDgbQgDgeAAgNIgKAAQgXAAgOgDQgIgCAAgJQAAgEADgEQADgDAFAAIARACIARABIAUAAIASAAIAZABIAZABQAEAAADADQADADAAAFQAAAFgDADQgDADgEAAIgZgBIgYgBIgIAAIADAwQACAeAAARIABALIABAMQAAAHgDAGQgDAHgGAAQgDAAgEgDg");
	this.shape_16.setTransform(1.8,14);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AguBPQgDgDgBgFQABgEADgEQADgDAEAAQAHAAAQgCIABgUIgBgSIAAgSQAAgYADglIgOAAIgOABQgEAAgEgDQgDgEAAgEQAAgKAKgBIAhgBQAUAAAhAEQAJACAAAKQAAAFgEADQgDACgEAAIgRgBIgSgCQgCAfAAAbIAAATIABATIgBASIAhAAQAFAAADADQADADABAFQgBAEgDADQgDAEgFAAIgSAAIgSAAIgUACIgVACQgEAAgDgDg");
	this.shape_17.setTransform(-12.5,14.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AhHBUQgEgDAAgFIABgOIABgOIABgTIAAgUIAAgVIAAgVIgCgUIgCgVQABgEAEgFQAEgEAGABQAGAAAHAMQAcAoAUAbQAZAeAfAcIAAgNIAAgOQAAgtgFgdIgCgLQgDgHABgEQAAgNALAAQASAAAABGIAAAjIAAAjIgCASQgBAKgKAAQgGAAgIgIQgsgpg4hNIAAAZIAAAXIAAAaIAAAbQAAAdgLAAQgGAAgDgDg");
	this.shape_18.setTransform(-27.2,14.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgvBPQgDgDAAgFQAAgEADgEQADgDAFAAQAHAAAQgCIABgUIAAgSIgBgSQAAgYADglIgOAAIgOABQgFAAgDgDQgDgEAAgEQAAgKAKgBIAhgBQAUAAAhAEQAJACAAAKQAAAFgEADQgDACgEAAIgSgBIgRgCQgCAfgBAbIABATIAAATIAAASIAhAAQAFAAAEADQACADAAAFQAAAEgCADQgEAEgFAAIgSAAIgSAAIgTACIgWACQgFAAgDgDg");
	this.shape_19.setTransform(-42.1,14.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("Ag0BXQgCgDAAgFIABg/IAAg/IAAgOIAAgOQAAgFADgDQADgEAEAAQAEAAADACIAYgDIARgBQANAAAQADQAVAFAAAIQAAAFgCADQgEAEgEAAIgFgBQgNgFgWAAIgPABIgWADIAAAuQAVgFALAAQAPAAASACQAKABAAAKQAAAFgDADQgDACgFAAIgQgBIgQAAQgIAAgYAFIgBBKQAAAFgDADQgDADgEAAQgFAAgEgDg");
	this.shape_20.setTransform(-54.1,14.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AhHBUQgEgDABgFIABgOIAAgOIABgTIAAgUIAAgVIAAgVIgCgUIgBgVQgBgEAFgFQAEgEAFABQAHAAAIAMQAbAoAUAbQAZAeAeAcIAAgNIAAgOQAAgtgDgdIgDgLQgCgHgBgEQAAgNAMAAQASAAABBGIAAAjIgBAjIgCASQgCAKgJAAQgGAAgIgIQgsgpg4hNIAAAZIgBAXIABAaIAAAbQAAAdgLAAQgGAAgDgDg");
	this.shape_21.setTransform(-70.1,14.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AguBPQgDgDgBgFQABgEADgEQADgDAEAAQAHAAAQgCIABgUIgBgSIAAgSQAAgYADglIgOAAIgOABQgEAAgEgDQgDgEAAgEQAAgKAKgBIAhgBQAUAAAhAEQAJACAAAKQAAAFgEADQgDACgEAAIgRgBIgSgCQgCAfAAAbIAAATIABATIgBASIAhAAQAFAAADADQADADABAFQgBAEgDADQgDAEgFAAIgSAAIgSAAIgUACIgVACQgEAAgDgDg");
	this.shape_22.setTransform(-85,14.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgkAvQgQgOAAgYQAAgbANgTQAOgVAZAAQARAAAMAHQANAHAAAPQAAALgMAJQgFAEgSAHIgoATQAGAJAKAFQAIAEALAAQAIAAAKgDQAMgDAEgGQADgGAEAAQAFAAACADQADADABAEQgBAMgTAIQgRAIgPAAQgXAAgPgMgAgWgcQgJAKgDAUIAggPQATgKAIgHQgJgIgQAAQgNAAgJAKg");
	this.shape_23.setTransform(-103.4,16.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAdBRQgCgJgCgQQgCgPAAgKIAAgJIAAgIQAAgUgKAAQgNAAgKAMQgGAGgJASQAAApgEAHQgDAHgGAAQgFAAgDgDQgDgDAAgEIABgFQABgDAAgNIAAgQIABhNIAAgSIgBgLIgBgKQAAgEADgDQAEgDAEAAQAJAAABAJQACALAAAIIgBAXIAAAYIAAAJQAJgLAKgGQAJgGALAAQASAAAHALQAEAJABASIABAVIACAWQABAMADAKIAAADQAAAFgDADQgDACgFAAQgIAAgCgIg");
	this.shape_24.setTransform(-115.8,13.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgGBLQgDgCAAgEIAAgNIAAgMIgCg9IgYgCQgJgBAAgKQAAgFADgDQADgDAEAAIAXACIgBgPIAAgNQAAgEADgDQADgEAEAAQAJAAACAQIAAAKIAAAGIAAAHIAPgCQALAAAEABQAGACAAAIQAAAFgDADQgDADgEAAIgGAAIgFAAIgPABIACA/IAAAFIABAFQAAAXgMABQgDAAgDgEg");
	this.shape_25.setTransform(-127.5,14.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAaA0IgDgXIgBgXIAAgJIAAgLQAAgXgIAAQgMAAgKAOQgKANgGATIgBALIAAAKIAAAKIABAKQAAAEgDADQgDADgFAAQgEAAgDgDQgDgDAAgEIgBgKIAAgKIABgeIACgeIgBgKIAAgLQAAgEADgDQADgDAFgBQAJAAABAOIABANQASgYASAAQARAAAHAPQAEALABATIAAALIAAAJQAAAJACAOQACAOAAAJQAAAFgDACQgDADgEAAQgKAAgBgKg");
	this.shape_26.setTransform(-144.7,16.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgkAvQgQgOAAgYQAAgbANgTQAOgVAZAAQARAAAMAHQANAHAAAPQAAALgMAJQgFAEgSAHIgoATQAGAJAKAFQAIAEALAAQAIAAAKgDQAMgDAEgGQADgGAEAAQAFAAACADQADADABAEQgBAMgTAIQgRAIgPAAQgXAAgPgMgAgWgcQgJAKgDAUIAggPQATgKAIgHQgJgIgQAAQgNAAgJAKg");
	this.shape_27.setTransform(-156.5,16.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgkAvQgQgOAAgYQAAgbANgTQAOgVAZAAQARAAAMAHQANAHAAAPQAAALgMAJQgGAEgQAHIgpATQAGAJAKAFQAIAEALAAQAHAAALgDQAMgDAEgGQADgGAFAAQADAAADADQAEADAAAEQgBAMgTAIQgQAIgQAAQgXAAgPgMgAgWgcQgIAKgEAUIAggPQATgKAIgHQgJgIgQAAQgNAAgJAKg");
	this.shape_28.setTransform(-168.5,16.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAZA8QgMAAgGgdIgFgZIgCgXIgJAUIgQAsQgCAEgCACQgDAHgIAAQgIAAgHggQgEgRgEgbIgDgQIgBgRQAAgEADgDQADgDAFAAQAIAAACAJIACAQIACAPIAGAwIAZhMQADgMAIAAQAJAAADAOIAHAmQAEAaADAQIAIgeIAOg5QACgHAHAAQAFAAADADQADADAAAFIgBAFQgIAjgOArQgDAKgHAKQgDAFgGAAIgBAAg");
	this.shape_29.setTransform(-182.3,16.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgGBLQgDgCAAgEIAAgNIAAgMIgCg9IgYgCQgJgBAAgKQAAgFADgDQADgDAEAAIAXACIgBgPIAAgNQAAgEADgDQADgEAEAAQAJAAACAQIAAAKIAAAGIAAAHIAPgCQALAAAEABQAGACAAAIQAAAFgDADQgDADgEAAIgGAAIgFAAIgPABIACA/IAAAFIABAFQAAAXgMABQgDAAgDgEg");
	this.shape_30.setTransform(-195,14.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgkAvQgQgOAAgYQAAgbANgTQAOgVAZAAQARAAAMAHQANAHAAAPQAAALgMAJQgFAEgSAHIgoATQAGAJAKAFQAIAEALAAQAIAAAKgDQAMgDAEgGQADgGAEAAQAFAAACADQADADABAEQgBAMgTAIQgRAIgPAAQgXAAgPgMgAgWgcQgJAKgDAUIAggPQATgKAIgHQgJgIgQAAQgNAAgJAKg");
	this.shape_31.setTransform(-206,16.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AggBQQgDAFgFAAQgEAAgDgCQgDgDAAgFIAAgIIAAgIIAAgiIgBghIAAgeIAAgeQAAgGADgFQAEgHAGAAQAIAAAAAJIgBAFIAAAEIAAAYIgBAbQAKgGAIgDQAJgEAGAAQAXAAAOASQAOAQAAAYQAAAZgQARQgQARgWAAQgRAAgNgHgAgQgEIgQAJIAAATIAAARIAAARIAPAGQAHACAIAAQAOAAAKgLQAKgLAAgQQAAgQgIgLQgIgKgPAAQgIAAgJAFg");
	this.shape_32.setTransform(-218.5,13.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgmBJQgOgPAAgYQAAgdAPgQQAPgRAXAAQAMAAAIAEIAKAHQABgtACgPQABgKAJAAQAKAAgBAKQAAAPgEAzIgBAfQAAAjADATIAAACQAAAFgCADQgEACgEAAQgGAAgDgKQgIAGgIADQgJADgIAAQgWAAgPgPgAgYACQgJAKAAAWQAAANAKALQAJAKANgBQAJAAAGgCQAEgCAHgHIAEgEIAAgTIAAgMIAAgNQgFgIgGgEQgHgEgJAAQgSAAgIAKg");
	this.shape_33.setTransform(250.2,-18.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgkAvQgQgOgBgYQAAgbAOgTQAPgVAYAAQARAAALAHQAOAHAAAPQAAALgMAJQgGAEgQAHIgpATQAGAJAKAFQAIAEALAAQAHAAAKgDQANgDAEgGQADgGAFAAQADAAAEADQADADAAAEQAAAMgUAIQgQAIgQAAQgXAAgPgMgAgWgcQgIAKgFAUIAigPQASgKAIgHQgJgIgQAAQgNAAgJAKg");
	this.shape_34.setTransform(238,-16);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgeAvQgPgOAAgXQAAgVAOgXQAQgZATAAQALAAANAEQAQAHAAAJQAAAEgCADQgDADgEAAQgDAAgCgBIgFgFQgGgEgPAAQgKAAgKATQgKASAAAMQAAAOAKAJQAJAHANAAQAGAAAHgEIANgGIAFgCQAEABACADQADACAAAFQAAAHgQAIQgPAGgJAAQgVAAgPgNg");
	this.shape_35.setTransform(226.2,-15.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAiA3IgHgIIgSAJQgIADgEAAQgZAAgMgPQgLgNAAgbQAAgZASgTQASgSAYAAQAJgBAMAFQAOAGAAAJQAAADgCACIgBANIgBAXQAAANACAIIAGATIADAGIABACQAAAEgDADQgDACgEAAQgCAAgGgEgAgRgaQgNAOAAARQAAARAHAJQAGAIAMABQAKAAAHgFIALgIQgEgbAAgOIABgKIACgMIgHgDIgFAAQgPAAgMANg");
	this.shape_36.setTransform(214.9,-15.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgMBOIACgnIABgnIABgmIAAgnQAAgLAKAAQALAAgBALIAAAnIgBAmIgBA1IgBAZQgCALgIAAQgLAAAAgLg");
	this.shape_37.setTransform(206.2,-19);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgpBXQgDgDAAgFIAAgrIAAgpIgBgrIgCgWQAAgIADgFQADgGAGAAQAEAAADADQADADAAAEIAAADIgBAHQAJgHAJgDQAIgDAHAAQAWAAAKATQAJAQAAAZQAAAXgNAPQgNAQgWAAQgKAAgNgEIAAAzQAAAFgDADQgDADgFAAQgEAAgDgDgAgKg4QgFADgJAIIABAyQAMAFALAAQANAAAHgKQAGgIAAgOQAAgTgEgKQgFgKgKAAQgJAAgIAFg");
	this.shape_38.setTransform(197.4,-13.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgdA8QgRgHAAgKQAAgFAEgDQADgDAEAAQAEAAAFAFQACADAJACIANAAQAIAAAGgBQAKgDAAgHQAAgPgUgFIgKgDQgOgDgGgEQgJgFAAgMQAAgXAVgJQAGgDAOgEIAUgHQAEgCAGAAQAEAAADADQADADAAAFIABAJIACAJQAAAGgDACQgDADgFABQgGgBgCgEQgCgDgBgIIgZAHQgQAHAAAKIAGACQAYAFAMAHQARAKAAAWQAAARgPAJQgMAIgSgBQgPAAgMgEg");
	this.shape_39.setTransform(179.2,-16.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgJBOQgEgDAAgFIAAgTIgBgUIACgZIABgYQAAgFADgDQADgDAFAAQADAAADADQADADAAAFIgBAYIgBAZIAAAUIABATQAAAFgEADQgDADgDAAQgEAAgDgDgAgGg6QgEgEABgFQgBgFAEgEQAEgEAEAAQAFAAAEAEQADAEAAAFQAAAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_40.setTransform(171.3,-18.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAdBRQgCgJgCgQQgCgPAAgKIAAgJIAAgIQAAgUgKAAQgNAAgKAMQgGAGgJASQAAApgEAHQgDAHgGAAQgFAAgDgDQgDgDAAgEIABgFQABgDAAgNIAAgQIABhNIAAgSIgBgLIgBgKQAAgEADgDQAEgDAEAAQAJAAABAJQACALAAAIIgBAXIAAAYIAAAJQAJgLAKgGQAJgGALAAQASAAAHALQAEAJABASIABAVIACAWQABAMADAKIAAADQAAAFgDADQgDACgFAAQgIAAgCgIg");
	this.shape_41.setTransform(155.3,-18.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgdA8QgRgHAAgKQAAgFAEgDQADgDAEAAQAEAAAFAFQACADAJACIANAAQAIAAAGgBQAKgDAAgHQAAgPgUgFIgKgDQgOgDgGgEQgJgFAAgMQAAgXAVgJQAGgDAOgEIAUgHQAEgCAGAAQAEAAADADQADADAAAFIABAJIACAJQAAAGgDACQgDADgFABQgGgBgCgEQgCgDgBgIIgZAHQgQAHAAAKIAGACQAYAFAMAHQARAKAAAWQAAARgPAJQgMAIgSgBQgPAAgMgEg");
	this.shape_42.setTransform(143.1,-16.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAiA3IgHgIIgSAJQgIADgEAAQgZAAgMgPQgLgNAAgbQAAgZASgTQASgSAYAAQAJgBAMAFQAOAGAAAJQAAADgCACIgBANIgBAXQAAANACAIIAGATIADAGIABACQAAAEgDADQgDACgEAAQgCAAgGgEgAgRgaQgNAOAAARQAAARAHAJQAGAIAMABQAKAAAHgFIALgIQgEgbAAgOIABgKIACgMIgHgDIgFAAQgPAAgMANg");
	this.shape_43.setTransform(132.5,-15.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgLBOIABgnIABgnIAAgmIABgnQAAgLAJAAQALAAAAALIAAAnIgBAmIgCA1IAAAZQgBALgJAAQgKAAAAgLg");
	this.shape_44.setTransform(123.8,-19);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgdA8QgRgHAAgKQAAgFAEgDQADgDAEAAQAEAAAFAFQACADAJACIANAAQAIAAAGgBQAKgDAAgHQAAgPgUgFIgKgDQgOgDgGgEQgJgFAAgMQAAgXAVgJQAGgDAOgEIAUgHQAEgCAGAAQAEAAADADQADADAAAFIABAJIACAJQAAAGgDACQgDADgFABQgGgBgCgEQgCgDgBgIIgZAHQgQAHAAAKIAGACQAYAFAMAHQARAKAAAWQAAARgPAJQgMAIgSgBQgPAAgMgEg");
	this.shape_45.setTransform(115.1,-16.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAmA4IgHgiIgdAFIgcAHIgSAoQgDAHgHgBQgEAAgDgCQgDgEgBgEQAAgGARgiQgCgDAAgDQAAgIALgDQAMgWASgeQAZgpAGAAQAJAAACAMIAIAkIAQBKIAFARQAEAJAAADQAAAEgEADQgDADgEAAQgKAAgHgZgAgNAIQANgEAZgEIgIgpg");
	this.shape_46.setTransform(95.3,-18.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgJAJQgDgDAAgGQAAgFADgDQAEgEAFAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFAAQgFAAgEgEg");
	this.shape_47.setTransform(78.2,-10.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgkAvQgRgOAAgYQAAgbAOgTQAOgVAZAAQARAAALAHQAOAHAAAPQAAALgMAJQgFAEgSAHIgoATQAGAJAJAFQAJAEALAAQAIAAAJgDQANgDAEgGQAEgGADAAQAEAAAEADQACADAAAEQAAAMgTAIQgRAIgPAAQgXAAgPgMgAgVgcQgJAKgFAUIAhgPQATgKAIgHQgJgIgQAAQgNAAgIAKg");
	this.shape_48.setTransform(69.6,-16);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgLAyIgQgsIgUgxIgBgEQAAgFAEgDQADgDAEAAQAHAAADAGIAbBLQAHgSAMgfIAJgZQAEgGAGAAQAEgBAEAEQADADAAAEQAAAFgSApIgWAyQAAAKgJAAQgHAAgEgJg");
	this.shape_49.setTransform(58.1,-16);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgKBOQgCgDAAgFIgBgTIAAgUIABgZIABgYQAAgFADgDQADgDAEAAQAEAAADADQADADAAAFIgBAYIgBAZIAAAUIAAATQAAAFgCADQgDADgEAAQgFAAgDgDgAgGg6QgDgEgBgFQABgFADgEQAEgEAEAAQAFAAAEAEQADAEABAFQgBAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_50.setTransform(49.8,-18.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgGBMQgDgDAAgEIAAgMIAAgNIgCg+IgYgCQgJAAAAgKQAAgFADgDQADgDAEAAIAXACIgBgPIAAgNQAAgEADgDQADgDAEAAQAJAAACAPIAAAKIAAAGIAAAHIAPgCQALAAAEABQAGACAAAIQAAAFgDADQgDADgEAAIgGAAIgFgBIgPACIACA+IAAAGIABAFQAAAYgMgBQgDAAgDgCg");
	this.shape_51.setTransform(41.3,-17.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgJBOQgDgDgBgFIAAgTIgBgUIACgZIABgYQAAgFADgDQADgDAFAAQADAAADADQADADAAAFIgBAYIgBAZIAAAUIABATQAAAFgEADQgDADgDAAQgEAAgDgDgAgGg6QgEgEABgFQgBgFAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAFQAAAFgEAEQgEADgFAAQgEAAgEgDg");
	this.shape_52.setTransform(33.3,-18.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAaA0IgDgXIgBgYIAAgJIAAgKQAAgXgIAAQgMAAgKAOQgKANgGATIgBALIAAAKIAAAJIABAKQAAAFgDADQgDADgFAAQgEAAgDgDQgDgDAAgFIgBgKIAAgJIABgeIACgfIgBgKIAAgKQAAgFADgDQADgCAFAAQAJAAABANIABANQASgYASAAQARAAAHAQQAEAJABAUIAAALIAAAJQAAAJACAOQACAOAAAJQAAAEgDADQgDADgEABQgKAAgBgLg");
	this.shape_53.setTransform(24.5,-16.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgKBOQgCgDAAgFIgBgTIAAgUIABgZIABgYQAAgFADgDQADgDAEAAQAEAAADADQADADAAAFIgBAYIgBAZIAAAUIAAATQAAAFgCADQgDADgEAAQgFAAgDgDgAgGg6QgDgEgBgFQABgFADgEQAEgEAEAAQAFAAAEAEQADAEABAFQgBAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_54.setTransform(15.7,-18.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgRBcQgDgDAAgFIAAgBQACgOAAgRIAAgdIAAgeIgRABQgKgBgBgJQABgLASgBIAKAAIADgQQACgZAKgKQAJgOAYgBQAPAAAAALQAAALgNgBQgaABgDAjIgBAHIAYgBQARAAAAAKQAAAJgJABIgIAAIgZACIgBAXIABAUIAAAVQAAATgCAMQgBAIgIAAQgEABgEgDg");
	this.shape_55.setTransform(6.6,-18.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAaA0IgDgXIgBgYIAAgJIAAgKQAAgXgIAAQgMAAgKAOQgKANgGATIgBALIAAAKIAAAJIABAKQAAAFgDADQgDADgFAAQgEAAgDgDQgDgDAAgFIgBgKIAAgJIABgeIACgfIgBgKIAAgKQAAgFADgDQADgCAFAAQAJAAABANIABANQASgYASAAQARAAAHAQQAEAJABAUIAAALIAAAJQAAAJACAOQACAOAAAJQAAAEgDADQgDADgEABQgKAAgBgLg");
	this.shape_56.setTransform(-4.3,-16.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgKBOQgCgDAAgFIgBgTIAAgUIABgZIABgYQAAgFADgDQADgDAEAAQAEAAADADQADADAAAFIgBAYIgBAZIAAAUIAAATQAAAFgCADQgDADgEAAQgFAAgDgDgAgGg6QgDgEgBgFQABgFADgEQAEgEAEAAQAFAAAEAEQADAEAAAFQAAAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_57.setTransform(-13.1,-18.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgkAvQgQgOAAgYQAAgbANgTQAPgVAYAAQARAAAMAHQANAHAAAPQAAALgMAJQgFAEgSAHIgoATQAGAJAJAFQAJAEALAAQAIAAAKgDQAMgDAEgGQADgGAEAAQAFAAACADQADADAAAEQAAAMgTAIQgQAIgQAAQgXAAgPgMgAgWgcQgJAKgDAUIAggPQATgKAIgHQgJgIgQAAQgNAAgJAKg");
	this.shape_58.setTransform(-28.8,-16);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAdBRQgCgJgCgQQgCgPAAgKIAAgJIAAgIQAAgUgKAAQgNAAgKAMQgGAGgJASQAAApgEAHQgDAHgGAAQgFAAgDgDQgDgDAAgEIABgFQABgDAAgNIAAgQIABhNIAAgSIgBgLIgBgKQAAgEADgDQAEgDAEAAQAJAAABAJQACALAAAIIgBAXIAAAYIAAAJQAJgLAKgGQAJgGALAAQASAAAHALQAEAJABASIABAVIACAWQABAMADAKIAAADQAAAFgDADQgDACgFAAQgIAAgCgIg");
	this.shape_59.setTransform(-41.2,-18.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgGBMQgDgDAAgEIAAgMIAAgNIgCg+IgYgCQgJAAAAgKQAAgFADgDQADgDAEAAIAXACIgBgPIAAgNQAAgEADgDQADgDAEAAQAJAAACAPIAAAKIAAAGIAAAHIAPgCQALAAAEABQAGACAAAIQAAAFgDADQgDADgEAAIgGAAIgFgBIgPACIACA+IAAAGIABAFQAAAYgMgBQgDAAgDgCg");
	this.shape_60.setTransform(-52.9,-17.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgdA8QgRgHAAgKQAAgFAEgDQADgDAEAAQAEAAAFAFQACADAJACIANAAQAIAAAGgBQAKgDAAgHQAAgPgUgFIgKgDQgOgDgGgEQgJgFAAgMQAAgXAVgJQAGgDAOgEIAUgHQAEgCAGAAQAEAAADADQADADAAAFIABAJIACAJQAAAGgDACQgDADgFABQgGgBgCgEQgCgDgBgIIgZAHQgQAHAAAKIAGACQAYAFAMAHQARAKAAAWQAAARgPAJQgMAIgSgBQgPAAgMgEg");
	this.shape_61.setTransform(-70.3,-16.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AAiA3IgHgIIgSAJQgIADgEAAQgZAAgMgPQgLgNAAgbQAAgZASgTQASgSAYAAQAJgBAMAFQAOAGAAAJQAAADgCACIgBANIgBAXQAAANACAIIAGATIADAGIABACQAAAEgDADQgDACgEAAQgCAAgGgEgAgRgaQgNAOAAARQAAARAHAJQAGAIAMABQAKAAAHgFIALgIQgEgbAAgOIABgKIACgMIgHgDIgFAAQgPAAgMANg");
	this.shape_62.setTransform(-80.9,-15.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgkAvQgRgOAAgYQAAgbAOgTQAPgVAYAAQARAAALAHQAOAHAAAPQAAALgMAJQgGAEgQAHIgpATQAGAJAJAFQAJAEALAAQAHAAAKgDQANgDAEgGQAEgGAEAAQADAAAEADQACADAAAEQABAMgUAIQgRAIgPAAQgXAAgPgMgAgVgcQgKAKgEAUIAigPQASgKAIgHQgJgIgQAAQgNAAgIAKg");
	this.shape_63.setTransform(-98.9,-16);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAaA0IgDgXIgBgYIAAgJIAAgKQAAgXgIAAQgMAAgKAOQgKANgGATIgBALIAAAKIAAAJIABAKQAAAFgDADQgDADgFAAQgEAAgDgDQgDgDAAgFIgBgKIAAgJIABgeIACgfIgBgKIAAgKQAAgFADgDQADgCAFAAQAJAAABANIABANQASgYASAAQARAAAHAQQAEAJABAUIAAALIAAAJQAAAJACAOQACAOAAAJQAAAEgDADQgDADgEABQgKAAgBgLg");
	this.shape_64.setTransform(-110.6,-16.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgJBOQgEgDAAgFIAAgTIgBgUIACgZIABgYQAAgFADgDQADgDAFAAQADAAADADQADADAAAFIgBAYIgBAZIAAAUIABATQgBAFgDADQgDADgDAAQgEAAgDgDgAgGg6QgDgEAAgFQAAgFADgEQAEgEAEAAQAFAAAEAEQAEAEgBAFQABAFgEAEQgEADgFAAQgEAAgEgDg");
	this.shape_65.setTransform(-119.5,-18.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgMBOIACgnIABgnIABgmIAAgnQAAgLAKAAQALAAgBALIAAAnIgBAmIgBA1IgBAZQgBALgJAAQgLAAAAgLg");
	this.shape_66.setTransform(-125.8,-19);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgkAvQgQgOAAgYQAAgbANgTQAOgVAZAAQARAAAMAHQANAHAAAPQAAALgMAJQgFAEgSAHIgoATQAGAJAKAFQAIAEALAAQAIAAAKgDQAMgDAEgGQADgGAEAAQAFAAACADQADADABAEQgBAMgTAIQgRAIgPAAQgXAAgPgMgAgWgcQgJAKgDAUIAggPQATgKAIgHQgJgIgQAAQgNAAgJAKg");
	this.shape_67.setTransform(-141.2,-16);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgFA/QgDgDAAgFQAAgNgDgZQgDgZAAgNQAAgLgDgGQgHADgIAIIgNAOIgFAHIgCASIgBASIABAJIABAJQAAAEgDADQgDADgFAAQgMAAAAgbIABgUIACgSIgBgRIgBgRQAAgYALAAQAEAAADADQAEAEAAAEIgBAGIAAAHIAAALQAFgLALgJQALgKAIAAQARAAAFARQAGgIAIgEQAIgEALAAQASAAAGAUQACADADAbIAHA8QABAFgEADQgDADgEAAQgJAAgCgKIgEghIgDggQgBgIgDgHQgEgJgEAAQgEAAgLAGIgNAKIAAAVIAEAbQACARAAALQAAAFgDADQgDADgFAAQgEAAgCgDg");
	this.shape_68.setTransform(-155.8,-15.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AAiA3IgHgIIgSAJQgIADgEAAQgZAAgMgPQgLgNAAgbQAAgZASgTQASgSAYAAQAJgBAMAFQAOAGAAAJQAAADgCACIgBANIgBAXQAAANACAIIAGATIADAGIABACQAAAEgDADQgDACgEAAQgCAAgGgEgAgRgaQgNAOAAARQAAARAHAJQAGAIAMABQAKAAAHgFIALgIQgEgbAAgOIABgKIACgMIgHgDIgFAAQgPAAgMANg");
	this.shape_69.setTransform(-170.1,-15.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgdA8QgRgHAAgKQAAgFAEgDQADgDAEAAQAEAAAFAFQACADAJACIANAAQAIAAAGgBQAKgDAAgHQAAgPgUgFIgKgDQgOgDgGgEQgJgFAAgMQAAgXAVgJQAGgDAOgEIAUgHQAEgCAGAAQAEAAADADQADADAAAFIABAJIACAJQAAAGgDACQgDADgFABQgGgBgCgEQgCgDgBgIIgZAHQgQAHAAAKIAGACQAYAFAMAHQARAKAAAWQAAARgPAJQgMAIgSgBQgPAAgMgEg");
	this.shape_70.setTransform(-181.4,-16.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgkAvQgRgOAAgYQAAgbAOgTQAPgVAYAAQARAAALAHQAOAHAAAPQAAALgMAJQgGAEgQAHIgpATQAGAJAJAFQAJAEALAAQAHAAAKgDQANgDAEgGQAEgGAEAAQADAAAEADQACADAAAEQABAMgUAIQgRAIgPAAQgXAAgPgMgAgVgcQgKAKgEAUIAigPQASgKAIgHQgJgIgQAAQgNAAgIAKg");
	this.shape_71.setTransform(-198.8,-16);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AAdBRQgCgJgCgQQgCgPAAgKIAAgJIAAgIQAAgUgKAAQgNAAgKAMQgGAGgJASQAAApgEAHQgDAHgGAAQgFAAgDgDQgDgDAAgEIABgFQABgDAAgNIAAgQIABhNIAAgSIgBgLIgBgKQAAgEADgDQAEgDAEAAQAJAAABAJQACALAAAIIgBAXIAAAYIAAAJQAJgLAKgGQAJgGALAAQASAAAHALQAEAJABASIABAVIACAWQABAMADAKIAAADQAAAFgDADQgDACgFAAQgIAAgCgIg");
	this.shape_72.setTransform(-211.3,-18.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgGBMQgDgDAAgEIAAgMIAAgNIgCg+IgYgCQgJAAAAgKQAAgFADgDQADgDAEAAIAXACIgBgPIAAgNQAAgEADgDQADgDAEAAQAJAAACAPIAAAKIAAAGIAAAHIAPgCQALAAAEABQAGACAAAIQAAAFgDADQgDADgEAAIgGAAIgFgBIgPACIACA+IAAAGIABAFQAAAYgMgBQgDAAgDgCg");
	this.shape_73.setTransform(-223,-17.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AAaA0IgDgXIgBgYIAAgJIAAgKQAAgXgIAAQgMAAgKAOQgKANgGATIgBALIAAAKIAAAJIABAKQAAAFgDADQgDADgFAAQgEAAgDgDQgDgDAAgFIgBgKIAAgJIABgeIACgfIgBgKIAAgKQAAgFADgDQADgCAFAAQAJAAABANIABANQASgYASAAQARAAAHAQQAEAJABAUIAAALIAAAJQAAAJACAOQACAOAAAJQAAAEgDADQgDADgEABQgKAAgBgLg");
	this.shape_74.setTransform(-240.1,-16.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AggAtQgOgPgBgZQAAgXAMgSQAPgWAaAAQAWAAALAUQAJAPgBAXQAAAXgMARQgOATgWAAQgSAAgNgOgAgTgVQgHAMAAAOQAAAQAJAJQAHAHAJAAQALAAAIgIQAJgJAAgPQACgpgYAAQgPAAgJAPg");
	this.shape_75.setTransform(-252,-15.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgmBJQgPgPAAgYQAAgcAQgRQAPgRAXAAQAMAAAIAEIAKAHQABgtACgQQACgJAIAAQAJAAAAAKQAAAPgDAzIgCAfQAAAkADASIAAACQAAAFgCACQgEADgDAAQgHAAgDgKQgIAGgIADQgIADgJAAQgWAAgPgPgAgZACQgIAKgBAWQAAANALAKQAJALANgBQAIAAAHgCQAEgDAHgGIADgEIAAgTIAAgMIAAgMQgEgJgGgEQgHgEgKAAQgQAAgKAKg");
	this.shape_76.setTransform(245.1,-51.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgkAvQgQgOAAgYQAAgbANgTQAOgVAZAAQARAAAMAHQANAHAAAPQAAALgMAJQgGAEgQAHIgpATQAGAJAKAFQAIAEALAAQAHAAALgDQAMgDAEgGQADgGAFAAQAEAAACADQAEADAAAEQgBAMgTAIQgQAIgQAAQgXAAgPgMgAgWgcQgIAKgEAUIAggPQATgKAIgHQgJgIgQAAQgNAAgJAKg");
	this.shape_77.setTransform(232.9,-48.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgFA/QgDgDAAgFQAAgNgDgZQgDgZAAgNQAAgLgDgGQgHADgIAIIgNAOIgFAHIgCASIgBASIABAJIABAJQAAAEgDADQgDADgFAAQgMAAAAgbIABgUIACgSIgBgRIgBgRQAAgYALAAQAEAAADADQAEAEAAAEIgBAGIAAAHIAAALQAFgLALgJQALgKAIAAQARAAAFARQAGgIAIgEQAIgEALAAQASAAAGAUQACADADAbIAHA8QABAFgEADQgDADgEAAQgJAAgCgKIgEghIgDggQgBgIgDgHQgEgJgEAAQgEAAgLAGIgNAKIAAAVIAEAbQACARAAALQAAAFgDADQgDADgFAAQgEAAgCgDg");
	this.shape_78.setTransform(218.2,-48.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgFA/QgDgDAAgFQAAgNgDgZQgDgZAAgNQAAgLgDgGQgHADgIAIIgNAOIgFAHIgCASIgBASIABAJIABAJQAAAEgDADQgDADgFAAQgMAAAAgbIABgUIACgSIgBgRIgBgRQAAgYALAAQAEAAADADQAEAEAAAEIgBAGIAAAHIAAALQAFgLALgJQALgKAIAAQARAAAFARQAGgIAIgEQAIgEALAAQASAAAGAUQACADADAbIAHA8QABAFgEADQgDADgEAAQgJAAgCgKIgEghIgDggQgBgIgDgHQgEgJgEAAQgEAAgLAGIgNAKIAAAVIAEAbQACARAAALQAAAFgDADQgDADgFAAQgEAAgCgDg");
	this.shape_79.setTransform(201.1,-48.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AAiA3IgHgIIgSAJQgIACgEAAQgZAAgMgOQgLgNAAgcQAAgZASgSQASgTAYAAQAJABAMAEQAOAGAAAIQAAADgCADIgBANIgBAXQAAAOACAHIAGATIADAGIABABQAAAFgDADQgDADgEgBQgCABgGgFgAgRgaQgNAOAAAQQAAASAHAIQAGAKAMgBQAKAAAHgDIALgIQgEgcAAgOIABgKIACgLIgHgEIgFgBQgPAAgMAOg");
	this.shape_80.setTransform(186.8,-48.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgpAyIAAhLIABgLIAAgKQAAgLAJAAQALAAAAASQAUgUAZAAQAIAAAFAGQAEAHAAANIAAAHQgBAOgKAAQgJAAAAgLIgBgHIAAgJQgRACgJAIQgKAGgGAOIAAA7QAAAKgKAAQgKAAAAgKg");
	this.shape_81.setTransform(176.2,-48.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgkBTQgOgCAAgJQAAgJAJAAIANACQAJABALAAQAUAAAIgUQAFgNAAgbQgGALgIAFQgIAFgJAAQgTAAgNgNQgMgNAAgUQAAgdARgSQARgSAdAAQAKAAAGACQAHADAEAFQALAAAAANQAAAHgCANIgDAUIgCAkQgBAVgEAOQgFARgKAIQgNAKgYAAQgOAAgJgCgAgTg1QgKANAAATQAAAQAGAHQAGAHAMAAQAKAAAKgLQAJgLABgLQADgMACgZIgJgEQgEgCgFAAQgUAAgLAOg");
	this.shape_82.setTransform(164.6,-45.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AAiA3IgHgIIgSAJQgIACgEAAQgZAAgMgOQgLgNAAgcQAAgZASgSQASgTAYAAQAJABAMAEQAOAGAAAIQAAADgCADIgBANIgBAXQAAAOACAHIAGATIADAGIABABQAAAFgDADQgDADgEgBQgCABgGgFgAgRgaQgNAOAAAQQAAASAHAIQAGAKAMgBQAKAAAHgDIALgIQgEgcAAgOIABgKIACgLIgHgEIgFgBQgPAAgMAOg");
	this.shape_83.setTransform(153.3,-48.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgKBOQgCgDAAgFIgBgTIAAgUIABgZIABgYQAAgFADgDQADgDAEAAQAEAAADADQADADAAAFIgBAYIgBAZIAAAUIAAATQAAAFgCADQgDADgEAAQgFAAgDgDgAgGg6QgDgEgBgFQABgFADgEQAEgEAEAAQAFAAAEAEQADAEAAAFQAAAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_84.setTransform(144.8,-51.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgmBJQgOgPAAgYQAAgcAPgRQAPgRAXAAQAMAAAIAEIAKAHQABgtACgQQABgJAJAAQAKAAgBAKQAAAPgEAzIgBAfQAAAkADASIAAACQAAAFgCACQgEADgEAAQgGAAgDgKQgIAGgIADQgJADgIAAQgWAAgPgPgAgYACQgJAKAAAWQAAANAKAKQAJALANgBQAJAAAFgCQAFgDAHgGIAEgEIAAgTIAAgMIAAgMQgFgJgGgEQgHgEgJAAQgSAAgIAKg");
	this.shape_85.setTransform(135,-51.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgdA7QgRgFAAgLQAAgFAEgDQADgDAEAAQAEAAAFAGQACACAJABIANABQAIAAAGgCQAKgDAAgGQAAgPgUgFIgKgDQgOgDgGgEQgJgFAAgMQAAgXAVgJQAGgDAOgEIAUgGQAEgDAGAAQAEAAADAEQADADAAAEIABAKIACAJQAAAEgDADQgDAEgFAAQgGAAgCgFQgCgCgBgKIgZAIQgQAHAAAKIAGACQAYAFAMAHQARAKAAAWQAAARgPAJQgMAIgSAAQgPgBgMgFg");
	this.shape_86.setTransform(116.4,-49);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgJBOQgDgDAAgFIgBgTIgBgUIACgZIABgYQAAgFADgDQADgDAFAAQADAAADADQADADAAAFIgBAYIgBAZIAAAUIABATQAAAFgDADQgDADgEAAQgEAAgDgDgAgGg6QgDgEAAgFQAAgFADgEQAEgEAEAAQAFAAAEAEQAEAEAAAFQAAAFgEAEQgEADgFAAQgEAAgEgDg");
	this.shape_87.setTransform(108.5,-51.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AguBTQgLgKAAgiIABgPIAAgSIgBgFQAAgDACgDIACguIgBgLIgBgMQAAgNALAAQAFAAADAEQANgEALgCQAMgBAJAAQAaAAAPAGQAIADAAAHQAAAEgDAEQgDADgFABIgDgBQgSgFgRgBQgJAAgKACIgWAFIABALIgCAqIAugFIAagCQAEAAAEADQADADAAAFQAAAIgKACIgaACIgwAEIgBAPIAAANQAAAYADADQADAEAOAAIATAAIAUgBIAHAAIAGgCQALAAAAAMQAAAJgJACQgKABghAAQghAAgJgIg");
	this.shape_88.setTransform(92.1,-51.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgSBOQgOgggPg9IgJgdQgGgWgBgHQABgFADgDQADgDAEAAQAJAAACAJIAEASIAKAlQALAnAJAdIABgCIAchNIAJgaQAGgQAHgIQAEgFAEAAQAEAAAEAEQAEADgBAFQAAADgCADQgHAKgDALIgIAXIgdBOQgGANgHANQgCAHgGAAQgJAAgCgJg");
	this.shape_89.setTransform(78.5,-51.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AguBPQgEgDAAgFQAAgEAEgEQADgDAEAAQAHAAAQgCIABgUIgBgSIAAgSQAAgYADglIgOAAIgOABQgFAAgDgDQgDgEAAgEQAAgKAKgBIAhgBQAUAAAhAEQAJACAAAKQAAAFgEADQgDACgEAAIgRgBIgSgCQgDAfAAAbIABATIAAATIAAASIAhAAQAFAAADADQADADAAAFQAAAEgDADQgDAEgFAAIgSAAIgSAAIgTACIgWACQgEAAgDgDg");
	this.shape_90.setTransform(64.7,-51.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgHBPQgDgDAAgFIAAgFIABgFIgBgQIAAgPQAAgQgDgbQgDgeAAgNIgKAAQgXAAgOgDQgIgCAAgJQAAgEADgEQADgDAFAAIARACIARABIAUAAIASAAIAZABIAZABQAEAAADADQADADAAAFQAAAFgDADQgDADgEAAIgZgBIgYgBIgIAAIADAwQACAeAAARIABALIABAMQAAAHgDAGQgDAHgGAAQgDAAgEgDg");
	this.shape_91.setTransform(52.1,-51.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgvBPQgCgDAAgFQAAgEACgEQADgDAFAAQAHAAAQgCIABgUIAAgSIgBgSQAAgYADglIgOAAIgOABQgEAAgEgDQgDgEAAgEQAAgKAKgBIAggBQAVAAAgAEQAKACAAAKQAAAFgEADQgDACgEAAIgSgBIgRgCQgDAfABAbIAAATIAAATIAAASIAiAAQAEAAAEADQADADAAAFQAAAEgDADQgEAEgEAAIgSAAIgSAAIgVACIgVACQgFAAgDgDg");
	this.shape_92.setTransform(37.7,-51.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AhHBTQgEgDABgEIABgOIAAgNIABgVIAAgUIAAgTIAAgWIgCgVIgBgTQgBgFAFgEQAEgEAFgBQAHAAAIANQAbAoAUAaQAZAfAeAdIAAgOIAAgNQAAgvgDgbIgDgMQgCgHgBgFQAAgMAMAAQASAAABBGIAAAiIgBAkIgCARQgCALgJAAQgGAAgIgHQgsgqg4hNIAAAYIgBAYIABAbIAAAbQAAAdgLAAQgGAAgDgFg");
	this.shape_93.setTransform(23,-51.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AguBPQgDgDgBgFQABgEADgEQADgDAEAAQAHAAAQgCIABgUIgBgSIAAgSQAAgYADglIgOAAIgOABQgEAAgEgDQgDgEAAgEQAAgKAKgBIAhgBQAUAAAhAEQAJACAAAKQAAAFgEADQgDACgEAAIgRgBIgSgCQgCAfAAAbIAAATIABATIgBASIAhAAQAFAAADADQADADABAFQgBAEgDADQgDAEgFAAIgSAAIgSAAIgUACIgVACQgEAAgDgDg");
	this.shape_94.setTransform(8.2,-51.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("Ag0BXQgDgDAAgFIABg/IABg/IAAgOIAAgOQAAgFADgDQADgEAEAAQAEAAADACIAYgDIASgBQAMAAAQADQAWAFgBAIQAAAFgCADQgDAEgFAAIgEgBQgOgFgVAAIgQABIgVADIAAAuQAUgFAKAAQAQAAASACQAKABAAAKQAAAFgDADQgDACgFAAIgQgBIgRAAQgHAAgYAFIgBBKQAAAFgDADQgDADgFAAQgEAAgEgDg");
	this.shape_95.setTransform(-3.9,-51.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AhHBTQgDgDgBgEIABgOIABgNIAAgVIABgUIgBgTIAAgWIgBgVIgBgTQAAgFAEgEQAEgEAFgBQAGAAAIANQAbAoAVAaQAZAfAfAdIAAgOIAAgNQgBgvgEgbIgCgMQgCgHAAgFQgBgMAMAAQATAAAABGIAAAiIgBAkIgBARQgCALgKAAQgGAAgIgHQgsgqg3hNIgBAYIAAAYIAAAbIABAbQAAAdgMAAQgGAAgDgFg");
	this.shape_96.setTransform(-19.9,-51.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgvBPQgCgDAAgFQAAgEACgEQADgDAFAAQAHAAAQgCIABgUIAAgSIgBgSQAAgYADglIgOAAIgOABQgEAAgEgDQgDgEAAgEQAAgKAKgBIAggBQAVAAAgAEQAKACAAAKQAAAFgEADQgDACgEAAIgSgBIgRgCQgDAfABAbIAAATIAAATIAAASIAiAAQAEAAAEADQADADAAAFQAAAEgDADQgEAEgEAAIgSAAIgSAAIgVACIgVACQgFAAgDgDg");
	this.shape_97.setTransform(-34.7,-51.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgkAvQgRgOAAgYQAAgbAOgTQAPgVAYAAQARAAALAHQAOAHAAAPQAAALgMAJQgGAEgQAHIgpATQAGAJAKAFQAIAEALAAQAHAAAKgDQANgDAEgGQADgGAFAAQADAAAEADQADADAAAEQAAAMgUAIQgQAIgQAAQgXAAgPgMgAgWgcQgIAKgFAUIAigPQASgKAIgHQgJgIgQAAQgNAAgJAKg");
	this.shape_98.setTransform(-53.1,-48.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AAdBRQgCgJgCgQQgCgPAAgKIAAgJIAAgIQAAgUgKAAQgNAAgKAMQgGAGgJASQAAApgEAHQgDAHgGAAQgFAAgDgDQgDgDAAgEIABgFQABgDAAgNIAAgQIABhNIAAgSIgBgLIgBgKQAAgEADgDQAEgDAEAAQAJAAABAJQACALAAAIIgBAXIAAAYIAAAJQAJgLAKgGQAJgGALAAQASAAAHALQAEAJABASIABAVIACAWQABAMADAKIAAADQAAAFgDADQgDACgFAAQgIAAgCgIg");
	this.shape_99.setTransform(-65.6,-51.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgGBMQgDgDAAgFIAAgLIAAgNIgCg+IgYgCQgJgBAAgJQAAgFADgDQADgDAEAAIAXACIgBgPIAAgNQAAgFADgDQADgCAEAAQAJAAACAPIAAAKIAAAGIAAAGIAPgBQALAAAEABQAGACAAAIQAAAFgDADQgDADgEAAIgGAAIgFgBIgPACIACA+IAAAFIABAGQAAAYgMgBQgDAAgDgCg");
	this.shape_100.setTransform(-77.3,-50.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgRBcQgDgDAAgFIABgCQABgOAAgQIAAgdIAAgeIgRAAQgLABAAgKQABgMASAAIAKAAIACgQQADgYAKgLQAJgPAYAAQAPAAAAALQAAALgNAAQgaAAgDAkIgBAGIAYgBQARAAAAAKQAAAJgJABIgIABIgZABIgBAXIABAVIAAAUQAAATgCAMQgBAJgIgBQgFAAgDgCg");
	this.shape_101.setTransform(-94.8,-51);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AggAuQgOgPgBgaQAAgXAMgSQAPgWAaAAQAWAAALAUQAJAPgBAXQAAAXgMAQQgOAUgWAAQgSAAgNgNgAgTgVQgHAMAAAOQAAAQAJAJQAHAHAJAAQALAAAIgIQAJgJAAgQQACgogYAAQgPAAgJAPg");
	this.shape_102.setTransform(-106.1,-48.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgHBPQgDgDAAgFIAAgFIABgFIgBgQIAAgPQAAgQgDgbQgDgeAAgNIgKAAQgXAAgOgDQgIgCAAgJQAAgEADgEQADgDAFAAIARACIARABIAUAAIASAAIAZABIAZABQAEAAADADQADADAAAFQAAAFgDADQgDADgEAAIgZgBIgYgBIgIAAIADAwQACAeAAARIABALIABAMQAAAHgDAGQgDAHgGAAQgDAAgEgDg");
	this.shape_103.setTransform(-124.8,-51.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgsBCQgPgQAAgXQAAgjAfgnQAZggAZABIAKAAIAHACQAEgGAGAAQAHAAACAJQACAJAAANQAAAFgCADQgDAEgGAAQgHAAgDgIQgDgHgDgCQgCgBgJAAQgPAAgSAYQgaAgAAAcQAAAOAJAJQAJALANAAQAKAAALgFIATgOQAGgEADAAQAFAAADADQADAEAAAEQAAAFgEAEQgcAZgcAAQgWAAgQgRg");
	this.shape_104.setTransform(-139.6,-51.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AguBTQgLgKAAgiIABgPIAAgSIgBgFQAAgDACgDIACguIgBgLIgBgMQAAgNALAAQAFAAADAEQANgEALgCQAMgBAJAAQAaAAAPAGQAIADAAAHQAAAEgDAEQgDADgFABIgDgBQgSgFgRgBQgJAAgKACIgWAFIABALIgCAqIAugFIAagCQAEAAAEADQADADAAAFQAAAIgKACIgaACIgwAEIgBAPIAAANQAAAYADADQADAEAOAAIATAAIAUgBIAHAAIAGgCQALAAAAAMQAAAJgJACQgKABghAAQghAAgJgIg");
	this.shape_105.setTransform(-153,-51.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgrBKQgVgPABgTQgBgOALAAQAMAAgBANQAAAJANAJQAMAJALAAQAIAAADg3QACgYAAgnIAAgLIgHAAIgMAAIgNgBQgFAAgDgDQgDgDAAgFQAAgLAPAAIALAAIAKABIAUgBIAUgBQAZAAgBAMQABAFgDADQgDAEgFAAIgHgBIgHgBIgMAAIAAANQAABPgKAlQgHAYgRAAQgTAAgSgOg");
	this.shape_106.setTransform(-167.4,-50.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgyBTQgEgFAAgEIAAgfIACgrIADgsQgBgLACgTQAAgFADgCQAPgFASAAQASAAASANQAUAPAAAWQAAAbgWAQQARAGAIAIQAIAJAAAKQAAANgPAMQgJAIgLAEQgXAKgmAAQgEAAgFgEgAggArIAAAWQAcgBAQgHQAIgDAHgGQAGgGAAgCQAAgGgNgGQgLgEgJgDIgLgCIgEAAIgEAAIgNAAIAAAYgAgcg/IAAATIgCApIAQACQAPgCALgJQALgJAAgPQAAgLgMgIQgLgJgMAAIgQABg");
	this.shape_107.setTransform(-181.2,-51.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("Ag1BDQgXgUAAgfQAAgkAWgeQAZghAjAAQAjAAASAPQASARAAAjQAAAlgVAeQgXAhgkABQgeAAgUgSgAgmgkQgQAZAAAbQAAAWAPANQAPAMAVgBQAaABAQgbQAQgXAAgdQAAgZgLgLQgMgJgagBQgZAAgTAag");
	this.shape_108.setTransform(-197.3,-51);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgkAvQgQgOAAgYQAAgbANgTQAOgVAZAAQARAAAMAHQANAHAAAPQAAALgMAJQgFAEgSAHIgoATQAGAJAKAFQAIAEALAAQAIAAAKgDQAMgDAEgGQADgGAEAAQAFAAACADQADADABAEQgBAMgTAIQgRAIgPAAQgXAAgPgMgAgWgcQgJAKgDAUIAggPQATgKAIgHQgJgIgQAAQgNAAgJAKg");
	this.shape_109.setTransform(-218.6,-48.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AAdBRQgCgJgCgQQgCgPAAgKIAAgJIAAgIQAAgUgKAAQgNAAgKAMQgGAGgJASQAAApgEAHQgDAHgGAAQgFAAgDgDQgDgDAAgEIABgFQABgDAAgNIAAgQIABhNIAAgSIgBgLIgBgKQAAgEADgDQAEgDAEAAQAJAAABAJQACALAAAIIgBAXIAAAYIAAAJQAJgLAKgGQAJgGALAAQASAAAHALQAEAJABASIABAVIACAWQABAMADAKIAAADQAAAFgDADQgDACgFAAQgIAAgCgIg");
	this.shape_110.setTransform(-231,-51.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgHBPQgDgDAAgFIAAgFIABgFIgBgQIAAgPQAAgQgDgbQgDgeAAgNIgKAAQgXAAgOgDQgIgCAAgJQAAgEADgEQADgDAFAAIARACIARABIAUAAIASAAIAZABIAZABQAEAAADADQADADAAAFQAAAFgDADQgDADgEAAIgZgBIgYgBIgIAAIADAwQACAeAAARIABALIABAMQAAAHgDAGQgDAHgGAAQgDAAgEgDg");
	this.shape_111.setTransform(-244.1,-51.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#999999").s().p("AAdBRQgCgJgCgQQgCgPAAgKIAAgJIAAgIQAAgUgKAAQgNAAgKAMQgGAGgJASQAAApgEAHQgDAHgGAAQgFAAgDgDQgDgDAAgEIABgFQABgDAAgNIAAgQIABhNIAAgSIgBgLIgBgKQAAgEADgDQAEgDAEAAQAJAAABAJQACALAAAIIgBAXIAAAYIAAAJQAJgLAKgGQAJgGALAAQASAAAHALQAEAJABASIABAVIACAWQABAMADAKIAAADQAAAFgDADQgDACgFAAQgIAAgCgIg");
	this.shape_112.setTransform(155.3,-18.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#999999").s().p("AgdA8QgRgHAAgKQAAgFAEgDQADgDAEAAQAEAAAFAFQACADAJACIANAAQAIAAAGgBQAKgDAAgHQAAgPgUgFIgKgDQgOgDgGgEQgJgFAAgMQAAgXAVgJQAGgDAOgEIAUgHQAEgCAGAAQAEAAADADQADADAAAFIABAJIACAJQAAAGgDACQgDADgFABQgGgBgCgEQgCgDgBgIIgZAHQgQAHAAAKIAGACQAYAFAMAHQARAKAAAWQAAARgPAJQgMAIgSgBQgPAAgMgEg");
	this.shape_113.setTransform(143.1,-16.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#999999").s().p("AAiA3IgHgIIgSAJQgIADgEAAQgZAAgMgPQgLgNAAgbQAAgZASgTQASgSAYAAQAJgBAMAFQAOAGAAAJQAAADgCACIgBANIgBAXQAAANACAIIAGATIADAGIABACQAAAEgDADQgDACgEAAQgCAAgGgEgAgRgaQgNAOAAARQAAARAHAJQAGAIAMABQAKAAAHgFIALgIQgEgbAAgOIABgKIACgMIgHgDIgFAAQgPAAgMANg");
	this.shape_114.setTransform(132.5,-15.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#999999").s().p("AgLBOIABgnIABgnIAAgmIABgnQAAgLAJAAQALAAAAALIAAAnIgBAmIgCA1IAAAZQgBALgJAAQgKAAAAgLg");
	this.shape_115.setTransform(123.8,-19);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#999999").s().p("AgdA8QgRgHAAgKQAAgFAEgDQADgDAEAAQAEAAAFAFQACADAJACIANAAQAIAAAGgBQAKgDAAgHQAAgPgUgFIgKgDQgOgDgGgEQgJgFAAgMQAAgXAVgJQAGgDAOgEIAUgHQAEgCAGAAQAEAAADADQADADAAAFIABAJIACAJQAAAGgDACQgDADgFABQgGgBgCgEQgCgDgBgIIgZAHQgQAHAAAKIAGACQAYAFAMAHQARAKAAAWQAAARgPAJQgMAIgSgBQgPAAgMgEg");
	this.shape_116.setTransform(115.1,-16.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#999999").s().p("AgkAvQgRgOAAgYQAAgbAOgTQAPgVAYAAQARAAALAHQAOAHAAAPQAAALgMAJQgGAEgQAHIgpATQAGAJAJAFQAJAEALAAQAHAAAKgDQANgDAEgGQAEgGAEAAQADAAAEADQACADAAAEQABAMgUAIQgRAIgPAAQgXAAgPgMgAgVgcQgKAKgEAUIAigPQASgKAIgHQgJgIgQAAQgNAAgIAKg");
	this.shape_117.setTransform(-98.9,-16);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#999999").s().p("AAaA0IgDgXIgBgYIAAgJIAAgKQAAgXgIAAQgMAAgKAOQgKANgGATIgBALIAAAKIAAAJIABAKQAAAFgDADQgDADgFAAQgEAAgDgDQgDgDAAgFIgBgKIAAgJIABgeIACgfIgBgKIAAgKQAAgFADgDQADgCAFAAQAJAAABANIABANQASgYASAAQARAAAHAQQAEAJABAUIAAALIAAAJQAAAJACAOQACAOAAAJQAAAEgDADQgDADgEABQgKAAgBgLg");
	this.shape_118.setTransform(-110.6,-16.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#999999").s().p("AgJBOQgEgDAAgFIAAgTIgBgUIACgZIABgYQAAgFADgDQADgDAFAAQADAAADADQADADAAAFIgBAYIgBAZIAAAUIABATQgBAFgDADQgDADgDAAQgEAAgDgDgAgGg6QgDgEAAgFQAAgFADgEQAEgEAEAAQAFAAAEAEQAEAEgBAFQABAFgEAEQgEADgFAAQgEAAgEgDg");
	this.shape_119.setTransform(-119.5,-18.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#999999").s().p("AgMBOIACgnIABgnIABgmIAAgnQAAgLAKAAQALAAgBALIAAAnIgBAmIgBA1IgBAZQgBALgJAAQgLAAAAgLg");
	this.shape_120.setTransform(-125.8,-19);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#999999").s().p("AgkAvQgQgOAAgYQAAgbANgTQAOgVAZAAQARAAAMAHQANAHAAAPQAAALgMAJQgFAEgSAHIgoATQAGAJAKAFQAIAEALAAQAIAAAKgDQAMgDAEgGQADgGAEAAQAFAAACADQADADABAEQgBAMgTAIQgRAIgPAAQgXAAgPgMgAgWgcQgJAKgDAUIAggPQATgKAIgHQgJgIgQAAQgNAAgJAKg");
	this.shape_121.setTransform(-141.2,-16);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#999999").s().p("AgFA/QgDgDAAgFQAAgNgDgZQgDgZAAgNQAAgLgDgGQgHADgIAIIgNAOIgFAHIgCASIgBASIABAJIABAJQAAAEgDADQgDADgFAAQgMAAAAgbIABgUIACgSIgBgRIgBgRQAAgYALAAQAEAAADADQAEAEAAAEIgBAGIAAAHIAAALQAFgLALgJQALgKAIAAQARAAAFARQAGgIAIgEQAIgEALAAQASAAAGAUQACADADAbIAHA8QABAFgEADQgDADgEAAQgJAAgCgKIgEghIgDggQgBgIgDgHQgEgJgEAAQgEAAgLAGIgNAKIAAAVIAEAbQACARAAALQAAAFgDADQgDADgFAAQgEAAgCgDg");
	this.shape_122.setTransform(-155.8,-15.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#999999").s().p("AAiA3IgHgIIgSAJQgIADgEAAQgZAAgMgPQgLgNAAgbQAAgZASgTQASgSAYAAQAJgBAMAFQAOAGAAAJQAAADgCACIgBANIgBAXQAAANACAIIAGATIADAGIABACQAAAEgDADQgDACgEAAQgCAAgGgEgAgRgaQgNAOAAARQAAARAHAJQAGAIAMABQAKAAAHgFIALgIQgEgbAAgOIABgKIACgMIgHgDIgFAAQgPAAgMANg");
	this.shape_123.setTransform(-170.1,-15.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#999999").s().p("AgdA8QgRgHAAgKQAAgFAEgDQADgDAEAAQAEAAAFAFQACADAJACIANAAQAIAAAGgBQAKgDAAgHQAAgPgUgFIgKgDQgOgDgGgEQgJgFAAgMQAAgXAVgJQAGgDAOgEIAUgHQAEgCAGAAQAEAAADADQADADAAAFIABAJIACAJQAAAGgDACQgDADgFABQgGgBgCgEQgCgDgBgIIgZAHQgQAHAAAKIAGACQAYAFAMAHQARAKAAAWQAAARgPAJQgMAIgSgBQgPAAgMgEg");
	this.shape_124.setTransform(-181.4,-16.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FF0066").s().p("AguBTQgLgKAAgiIABgPIAAgSIgBgFQAAgDACgDIACguIgBgLIgBgMQAAgNALAAQAFAAADAEQANgEALgCQAMgBAJAAQAaAAAPAGQAIADAAAHQAAAEgDAEQgDADgFABIgDgBQgSgFgRgBQgJAAgKACIgWAFIABALIgCAqIAugFIAagCQAEAAAEADQADADAAAFQAAAIgKACIgaACIgwAEIgBAPIAAANQAAAYADADQADAEAOAAIATAAIAUgBIAHAAIAGgCQALAAAAAMQAAAJgJACQgKABghAAQghAAgJgIg");
	this.shape_125.setTransform(92.1,-51.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FF0066").s().p("AgSBOQgOgggPg9IgJgdQgGgWgBgHQABgFADgDQADgDAEAAQAJAAACAJIAEASIAKAlQALAnAJAdIABgCIAchNIAJgaQAGgQAHgIQAEgFAEAAQAEAAAEAEQAEADgBAFQAAADgCADQgHAKgDALIgIAXIgdBOQgGANgHANQgCAHgGAAQgJAAgCgJg");
	this.shape_126.setTransform(78.5,-51.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FF0066").s().p("AguBPQgEgDAAgFQAAgEAEgEQADgDAEAAQAHAAAQgCIABgUIgBgSIAAgSQAAgYADglIgOAAIgOABQgFAAgDgDQgDgEAAgEQAAgKAKgBIAhgBQAUAAAhAEQAJACAAAKQAAAFgEADQgDACgEAAIgRgBIgSgCQgDAfAAAbIABATIAAATIAAASIAhAAQAFAAADADQADADAAAFQAAAEgDADQgDAEgFAAIgSAAIgSAAIgTACIgWACQgEAAgDgDg");
	this.shape_127.setTransform(64.7,-51.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FF0066").s().p("AgHBPQgDgDAAgFIAAgFIABgFIgBgQIAAgPQAAgQgDgbQgDgeAAgNIgKAAQgXAAgOgDQgIgCAAgJQAAgEADgEQADgDAFAAIARACIARABIAUAAIASAAIAZABIAZABQAEAAADADQADADAAAFQAAAFgDADQgDADgEAAIgZgBIgYgBIgIAAIADAwQACAeAAARIABALIABAMQAAAHgDAGQgDAHgGAAQgDAAgEgDg");
	this.shape_128.setTransform(52.1,-51.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FF0066").s().p("AgvBPQgCgDAAgFQAAgEACgEQADgDAFAAQAHAAAQgCIABgUIAAgSIgBgSQAAgYADglIgOAAIgOABQgEAAgEgDQgDgEAAgEQAAgKAKgBIAggBQAVAAAgAEQAKACAAAKQAAAFgEADQgDACgEAAIgSgBIgRgCQgDAfABAbIAAATIAAATIAAASIAiAAQAEAAAEADQADADAAAFQAAAEgDADQgEAEgEAAIgSAAIgSAAIgVACIgVACQgFAAgDgDg");
	this.shape_129.setTransform(37.7,-51.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FF0066").s().p("AhHBTQgEgDABgEIABgOIAAgNIABgVIAAgUIAAgTIAAgWIgCgVIgBgTQgBgFAFgEQAEgEAFgBQAHAAAIANQAbAoAUAaQAZAfAeAdIAAgOIAAgNQAAgvgDgbIgDgMQgCgHgBgFQAAgMAMAAQASAAABBGIAAAiIgBAkIgCARQgCALgJAAQgGAAgIgHQgsgqg4hNIAAAYIgBAYIABAbIAAAbQAAAdgLAAQgGAAgDgFg");
	this.shape_130.setTransform(23,-51.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FF0066").s().p("AguBPQgDgDgBgFQABgEADgEQADgDAEAAQAHAAAQgCIABgUIgBgSIAAgSQAAgYADglIgOAAIgOABQgEAAgEgDQgDgEAAgEQAAgKAKgBIAhgBQAUAAAhAEQAJACAAAKQAAAFgEADQgDACgEAAIgRgBIgSgCQgCAfAAAbIAAATIABATIgBASIAhAAQAFAAADADQADADABAFQgBAEgDADQgDAEgFAAIgSAAIgSAAIgUACIgVACQgEAAgDgDg");
	this.shape_131.setTransform(8.2,-51.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FF0066").s().p("Ag0BXQgDgDAAgFIABg/IABg/IAAgOIAAgOQAAgFADgDQADgEAEAAQAEAAADACIAYgDIASgBQAMAAAQADQAWAFgBAIQAAAFgCADQgDAEgFAAIgEgBQgOgFgVAAIgQABIgVADIAAAuQAUgFAKAAQAQAAASACQAKABAAAKQAAAFgDADQgDACgFAAIgQgBIgRAAQgHAAgYAFIgBBKQAAAFgDADQgDADgFAAQgEAAgEgDg");
	this.shape_132.setTransform(-3.9,-51.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FF0066").s().p("AhHBTQgDgDgBgEIABgOIABgNIAAgVIABgUIgBgTIAAgWIgBgVIgBgTQAAgFAEgEQAEgEAFgBQAGAAAIANQAbAoAVAaQAZAfAfAdIAAgOIAAgNQgBgvgEgbIgCgMQgCgHAAgFQgBgMAMAAQATAAAABGIAAAiIgBAkIgBARQgCALgKAAQgGAAgIgHQgsgqg3hNIgBAYIAAAYIAAAbIABAbQAAAdgMAAQgGAAgDgFg");
	this.shape_133.setTransform(-19.9,-51.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FF0066").s().p("AgvBPQgCgDAAgFQAAgEACgEQADgDAFAAQAHAAAQgCIABgUIAAgSIgBgSQAAgYADglIgOAAIgOABQgEAAgEgDQgDgEAAgEQAAgKAKgBIAggBQAVAAAgAEQAKACAAAKQAAAFgEADQgDACgEAAIgSgBIgRgCQgDAfABAbIAAATIAAATIAAASIAiAAQAEAAAEADQADADAAAFQAAAEgDADQgEAEgEAAIgSAAIgSAAIgVACIgVACQgFAAgDgDg");
	this.shape_134.setTransform(-34.7,-51.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#33CC00").s().p("AgHBPQgDgDAAgFIAAgFIABgFIgBgQIAAgPQAAgQgDgbQgDgeAAgNIgKAAQgXAAgOgDQgIgCAAgJQAAgEADgEQADgDAFAAIARACIARABIAUAAIASAAIAZABIAZABQAEAAADADQADADAAAFQAAAFgDADQgDADgEAAIgZgBIgYgBIgIAAIADAwQACAeAAARIABALIABAMQAAAHgDAGQgDAHgGAAQgDAAgEgDg");
	this.shape_135.setTransform(-124.8,-51.3);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#33CC00").s().p("AgsBCQgPgQAAgXQAAgjAfgnQAZggAZABIAKAAIAHACQAEgGAGAAQAHAAACAJQACAJAAANQAAAFgCADQgDAEgGAAQgHAAgDgIQgDgHgDgCQgCgBgJAAQgPAAgSAYQgaAgAAAcQAAAOAJAJQAJALANAAQAKAAALgFIATgOQAGgEADAAQAFAAADADQADAEAAAEQAAAFgEAEQgcAZgcAAQgWAAgQgRg");
	this.shape_136.setTransform(-139.6,-51.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#33CC00").s().p("AguBTQgLgKAAgiIABgPIAAgSIgBgFQAAgDACgDIACguIgBgLIgBgMQAAgNALAAQAFAAADAEQANgEALgCQAMgBAJAAQAaAAAPAGQAIADAAAHQAAAEgDAEQgDADgFABIgDgBQgSgFgRgBQgJAAgKACIgWAFIABALIgCAqIAugFIAagCQAEAAAEADQADADAAAFQAAAIgKACIgaACIgwAEIgBAPIAAANQAAAYADADQADAEAOAAIATAAIAUgBIAHAAIAGgCQALAAAAAMQAAAJgJACQgKABghAAQghAAgJgIg");
	this.shape_137.setTransform(-153,-51.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#33CC00").s().p("AgrBKQgVgPABgTQgBgOALAAQAMAAgBANQAAAJANAJQAMAJALAAQAIAAADg3QACgYAAgnIAAgLIgHAAIgMAAIgNgBQgFAAgDgDQgDgDAAgFQAAgLAPAAIALAAIAKABIAUgBIAUgBQAZAAgBAMQABAFgDADQgDAEgFAAIgHgBIgHgBIgMAAIAAANQAABPgKAlQgHAYgRAAQgTAAgSgOg");
	this.shape_138.setTransform(-167.4,-50.7);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#33CC00").s().p("AgyBTQgEgFAAgEIAAgfIACgrIADgsQgBgLACgTQAAgFADgCQAPgFASAAQASAAASANQAUAPAAAWQAAAbgWAQQARAGAIAIQAIAJAAAKQAAANgPAMQgJAIgLAEQgXAKgmAAQgEAAgFgEgAggArIAAAWQAcgBAQgHQAIgDAHgGQAGgGAAgCQAAgGgNgGQgLgEgJgDIgLgCIgEAAIgEAAIgNAAIAAAYgAgcg/IAAATIgCApIAQACQAPgCALgJQALgJAAgPQAAgLgMgIQgLgJgMAAIgQABg");
	this.shape_139.setTransform(-181.2,-51.4);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#33CC00").s().p("Ag1BDQgXgUAAgfQAAgkAWgeQAZghAjAAQAjAAASAPQASARAAAjQAAAlgVAeQgXAhgkABQgeAAgUgSgAgmgkQgQAZAAAbQAAAWAPANQAPAMAVgBQAaABAQgbQAQgXAAgdQAAgZgLgLQgMgJgagBQgZAAgTAag");
	this.shape_140.setTransform(-197.3,-51);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99,p:{x:-65.6}},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91,p:{x:52.1}},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78,p:{x:218.2}},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72,p:{x:-211.3,y:-18.9}},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68,p:{x:-155.8,y:-15.9}},{t:this.shape_67,p:{x:-141.2,y:-16}},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64,p:{x:-110.6}},{t:this.shape_63,p:{x:-98.9}},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59,p:{x:-41.2}},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43,p:{x:132.5}},{t:this.shape_42,p:{x:143.1}},{t:this.shape_41,p:{x:155.3}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_91,p:{x:-244.1}},{t:this.shape_99,p:{x:-231}},{t:this.shape_67,p:{x:-218.6,y:-48.6}},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_72,p:{x:-65.6,y:-51.5}},{t:this.shape_98},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_78,p:{x:201.1}},{t:this.shape_68,p:{x:218.2,y:-48.5}},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_64,p:{x:-240.1}},{t:this.shape_73},{t:this.shape_59,p:{x:-211.3}},{t:this.shape_63,p:{x:-198.8}},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_43,p:{x:-80.9}},{t:this.shape_42,p:{x:-70.3}},{t:this.shape_60},{t:this.shape_41,p:{x:-41.2}},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},7).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-263,-69.5,525.1,100);


(lib.SentenceLine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("EAgHAAAI2PAAI6bAAIvjAA");
	this.shape.setTransform(205.5,34.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1,1).p("ANOkkIAAFbAtNElIAAjuIAAk0");
	this.shape_1.setTransform(184.1,29.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.SentenceLine, new cjs.Rectangle(-1.5,-1.5,414,61.7), null);


(lib.CaratforInfinitiveObjDRAWN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF00FF").s().p("AgYAtQgHgFAAgTIABgIIAAgKIgBgCIACgEIABgYIgBgHIAAgGQAAgHAGAAQAAAAABAAQAAAAABAAQAAABABAAQABAAAAABIANgDIALgBQAOAAAJAEQADABAAAEQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgCAAQgKgDgJAAIgKABIgMACIABAHIgBAWIAYgCIAOgBQABAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAABQAAAAAAABQABABAAAAQAAAFgGAAIgOABIgaADIgBAIIAAAHQABANACACQAAACAJAAIAKgBIAKAAIAEAAIAEAAQAFAAABAGQgBAEgFABQgFACgSAAQgSAAgEgFg");
	this.shape.setTransform(158.5,-20.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF00FF").s().p("AgJArQgHgSgJggIgFgRQgDgMgBgDQAAgBABgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAQAEAAABAEIADALIAFAUQAFAUAGAQIAAgBIAPgpIAFgPQADgIAEgFQACgCACAAQABAAABAAQAAAAABAAQAAAAABABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQABAAAAABIgBADIgGAMIgFANIgPApIgHAPQgBADgEAAQgEAAgBgEg");
	this.shape_1.setTransform(151.1,-20.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF00FF").s().p("AgZArQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAAAQAAgBAAAAQABgBAAgBQAAAAAAAAQABgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAQABAAAAAAIANgBIAAgLIAAgKIAAgKIABghIgHABIgIAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBgBAAAAQAAAAAAgBQgBgBAAAAQAAgBAAAAQAAgGAGAAIARgBQALAAASADQAFAAAAAGQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAIgKgBIgJgBIgBAfIAAAKIAAALIAAAKIASgBQABAAAAAAQABAAABABQAAAAAAAAQABABAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgKABIgKAAIgKABIgMABQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAAAgBgBg");
	this.shape_2.setTransform(143.5,-20.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF00FF").s().p("AgDArQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAIAAgDIAAgCIAAgJIAAgJIgCgWIgBgYIgGAAQgMAAgIgCQgEgBAAgEQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAIAJACIAJAAIALAAIAKAAIANABIAOAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgOAAIgNgBIgEAAIABAaIACAaIAAAGIAAAGIgBAHQgCAEgDAAIgDgCg");
	this.shape_3.setTransform(136.7,-20.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF00FF").s().p("AgZArQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAAAQAAgBAAAAQABgBAAgBQAAAAAAAAQABgBAAAAQABgBAAAAQABgBAAAAQAAAAABAAQABAAAAAAIANgBIAAgLIAAgKIAAgKIABghIgHABIgIAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBgBAAAAQAAAAAAgBQgBgBAAAAQAAgBAAAAQAAgGAGAAIARgBQALAAASADQAFAAAAAGQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQgBAAAAAAIgKgBIgJgBIgBAfIAAAKIAAALIAAAKIASgBQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgKABIgKAAIgKABIgMABQAAAAgBAAQgBAAAAgBQAAAAgBAAQAAAAgBgBg");
	this.shape_4.setTransform(128.8,-20.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF00FF").s().p("AgmAuQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIAAgHIABgHIAAgLIAAgLIAAgLIAAgMIgBgKIgBgLQAAgDADgCQACgDADAAQADAAAFAHQAOAWALAOQAOARAQAPIAAgHIAAgIQAAgYgCgPIgBgHIgCgGQAAgHAHAAQAKAAAAAmIAAATIAAATIgBAKQgBAGgGAAQgDAAgEgFQgYgWgegqIAAAOIgBAMIABAOIAAAPQAAAQgGAAQgDAAgCgCg");
	this.shape_5.setTransform(120.8,-20.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF00FF").s().p("AgZArQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAAAQAAgBAAAAQABgBAAgBQAAAAAAAAQABgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAQABAAAAAAIANgBIAAgLIAAgKIAAgKIABghIgHABIgIAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBgBAAAAQAAAAAAgBQgBgBAAAAQAAgBAAAAQAAgGAGAAIARgBQALAAASADQAFAAAAAGQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQAAABgBAAQgBAAAAAAIgKgBIgJgBIgBAfIAAAKIAAALIAAAKIASgBQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgKABIgKAAIgKABIgMABQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAAAgBgBg");
	this.shape_6.setTransform(112.7,-20.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF00FF").s().p("AgbAvQgBAAAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBIAAgiIABgiIAAgIIAAgIQAAAAAAgBQAAAAAAgBQAAAAABgBQAAgBAAAAQABAAAAgBQAAAAABAAQABAAAAAAQABAAAAAAIAEABIANgCIAJgBQAHAAAJACQALACAAAFIgBAEQgBAAAAABQAAAAgBABQAAAAgBAAQgBAAAAAAIgDgBQgHgCgMAAIgIABIgMABIAAAaQAMgDAFAAIASABQAGAAAAAFQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAIgKAAIgIAAQgEAAgNADIAAAoQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAAAQgBABAAAAQAAAAgBABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_7.setTransform(106.1,-20.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF00FF").s().p("AgmAuQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIAAgHIABgHIAAgLIAAgLIAAgLIAAgMIgBgKIgBgLQAAgDADgCQACgDADAAQADAAAFAHQAOAWALAOQAOARAQAPIAAgHIAAgIQAAgYgCgPIgBgHIgCgGQAAgHAHAAQAKAAAAAmIAAATIAAATIgBAKQgBAGgGAAQgDAAgEgFQgYgWgegqIAAAOIgBAMIABAOIAAAPQAAAQgGAAQgDAAgCgCg");
	this.shape_8.setTransform(97.4,-20.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF00FF").s().p("AgZArQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAAAQAAgBAAAAQABgBAAgBQAAAAAAAAQABgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAQABAAAAAAIANgBIAAgLIAAgKIAAgKIABghIgHABIgIAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBgBAAAAQAAAAAAgBQgBgBAAAAQAAgBAAAAQAAgGAGAAIARgBQALAAASADQAFAAAAAGQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQAAABgBAAQgBAAAAAAIgKgBIgJgBIgBAfIAAAKIAAALIAAAKIASgBQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgKABIgKAAIgKABIgMABQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAAAgBgBg");
	this.shape_9.setTransform(89.3,-20.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0000FF").s().p("AgCAnQgBAAAAgBQgBAAAAAAQAAgBAAgBQgBAAAAgBIABgCIAAgCIAAgIIgBgIIgBgVIgCgVIgEAAQgMAAgGgCQgFgBAAgEQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAIAIABIAJABIAKAAIAJAAIALAAIAMABQABAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAIgMgBIgLAAIgFAAIACAYIABAXIABAFIAAAGQAAAEgBACQgCAEgDAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAAAAAgBg");
	this.shape_10.setTransform(11.8,-44);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0000FF").s().p("AgVAhQgIgJAAgKQABgSAPgSQAMgRAMABIAEAAIAFABQABgDADAAQAEAAABAEIABALIgBAEQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQgDAAgBgEQgCgDgCgBIgFgBQgIAAgIAMQgNAQAAAOQAAAGAFAFQAEAGAGAAQAFgBAFgDIAKgGIAFgCQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAIACAFQAAAAAAABQAAAAAAABQgBAAAAABQAAABgBAAQgOANgOAAQgLAAgHgJg");
	this.shape_11.setTransform(4.4,-43.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0000FF").s().p("AgWApQgFgFgBgRIAAgIIABgIIgBgDIABgCIACgXIgBgFIgBgHQAAgGAGAAQABAAAAAAQAAAAABABQAAAAABAAQAAABAAAAIANgDIAJgBQANAAAIADQAEACAAADIgBAEQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIgBAAQgJgDgJAAIgIABIgLADIAAAFIAAAVIAVgDIAOgBIADABQABABAAAAQAAABABAAQAAABAAAAQAAABAAABQAAADgFABIgNACIgXACIAAAHIgBAGQAAAMACACQABABAHAAIAJAAIAKAAIADAAIAEAAQAFAAAAAFQAAAEgEABQgGABgPAAQgQABgFgFg");
	this.shape_12.setTransform(-2.2,-43.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0000FF").s().p("AgVAlQgKgIAAgJQAAgHAGAAQAFAAAAAHQAAAEAGAFQAGAEAFAAQAEAAACgbIABgfIgBgGIgDAAIgFAAIgHAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgFAIAAIAGAAIAEAAIAKAAIAKgBQAMAAAAAHQAAAAAAABQAAAAAAABQgBAAAAAAQAAABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgEAAIgDgBIgGABIAAAGQAAAngFASQgDAMgJAAQgJAAgJgHg");
	this.shape_13.setTransform(-9.4,-43.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0000FF").s().p("AgYApQgCgCAAgCIAAgQIABgVIABgWIABgOIABgEQAIgCAJAAQAIAAAJAGQAKAIAAALQAAANgLAHQAIAEAEAEQAEAEAAAFQAAAGgHAGQgFAFgFACQgLAEgTAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBgAgPAVIAAALQANAAAIgEQAEgBADgDQAEgDAAgBQAAgDgHgDIgKgDIgFgBIgCAAIgCAAIgGgBIAAAMgAgNgfIAAAKIgBAUIAIABQAHgBAFgEQAFgFAAgHQAAgGgFgEQgGgEgFAAIgIAAg");
	this.shape_14.setTransform(-16.3,-44);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0000FF").s().p("AgXAgQgGgIgCgPIgBgaIAAgMIABgHQACgEADAAQAFAAAAAJIAAAfQAAAgAWAAQAVAAAAg1IAAgGIAAgEQAAgDABgDQACgDACAAQAGAAAAAHIAAAGIAAAHQAAA9ggAAQgQAAgIgJg");
	this.shape_15.setTransform(-24,-43.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0000FF").s().p("AgVAlQgJgFgBgIQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABgBABAAQAAAAABAAQACAAACADIAFAGQAFADAIAAQAIAAAHgEQAJgEAAgIQAAgHgIgEQgGgDgJgBQgIAAgGgCQgIgFAAgIQAAgJALgIQAKgIAKAAQAGAAAGACQAJADAAADQAAAFgFAAIgIgBIgIgBQgHAAgGAEQgGAEAAAGQAAAEAIACIAKABQANABAGAHQAHAFAAAJQAAANgMAHQgKAHgNAAQgJAAgJgEg");
	this.shape_16.setTransform(-31.8,-43.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF6600").s().p("AgEA0QgCgCAAgDIAAgIIAAgJIgBgqIgQgBQgHgBAAgGQAAgDACgCQACgCADAAIAPABIAAgKIAAgJQAAgDACgCQACgCADAAQAGgBABALIAAAHIAAAEIAAAFIAKgBIAKABQAFABAAAFQAAADgCACQgCACgEAAIgDAAIgEAAIgKABIACAqIAAAEIAAAEQAAAQgIAAQgCAAgCgCg");
	this.shape_17.setTransform(181.2,50.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF6600").s().p("AAYAlIgFgFIgNAGQgFACgDAAQgRAAgIgKQgHgJAAgTQAAgRAMgMQAMgNAQAAQAHAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBAJIgBAPQAAAKACAFIAEANIACAEIAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAQgCAAgDgEgAgLgRQgJAJAAALQAAAMAFAGQAEAGAIAAQAGAAAFgDIAIgFQgDgTAAgJIABgHIABgIIgFgCIgDgBQgKAAgIAKg");
	this.shape_18.setTransform(173.8,51.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF6600").s().p("AgcAiIAAgzIABgHIAAgHQAAgIAGAAQAIAAgBAMQAOgNARAAQAGAAADAEQACAEABAKIAAAFQgBAJgGAAQgHAAAAgHIAAgFIgBgHQgLACgGAFQgGAFgFAJIAAAoQAAAHgHAAQgHAAAAgHg");
	this.shape_19.setTransform(166.6,51.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF6600").s().p("AAYAlIgFgFIgNAGQgFACgDAAQgRAAgIgKQgHgJAAgTQAAgRAMgMQAMgNAQAAQAHAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBAJIgBAPQAAAKACAFIAEANIACAEIAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAQgCAAgDgEgAgLgRQgJAJAAALQAAAMAFAGQAEAGAIAAQAGAAAFgDIAIgFQgDgTAAgJIABgHIABgIIgFgCIgDgBQgKAAgIAKg");
	this.shape_20.setTransform(158.9,51.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF6600").s().p("AgUAgQgLgJAAgQQAAgOAKgQQALgRANAAQAHAAAJADQALAFAAAGQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAIgEgBIgDgDQgEgDgKAAQgGAAgIANQgGAMAAAIQAAAKAGAFQAGAGAJAAQAEAAAFgDIAJgEIADgBQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADQAAAFgMAFQgJAEgHAAQgOAAgKgJg");
	this.shape_21.setTransform(151.3,51.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FF3300").ss(2,1,1).p("AhNAqQBWh8BFA8");
	this.shape_22.setTransform(137.5,51.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FF3300").ss(2,1,1).p("AgZgjIgDBHIA5AA");
	this.shape_23.setTransform(132.6,52.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAqAlQgmhdg3AZAAqAlIgngKAA0gHIgKAs");
	this.shape_24.setTransform(22.2,-41.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FF00FF").ss(2,1,1).p("Ag2AeQA8hYAxAr");
	this.shape_25.setTransform(79.3,-17.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FF00FF").ss(2,1,1).p("AgSgZIgCAyIApAA");
	this.shape_26.setTransform(75.9,-16.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#009900").s().p("AgDAnQAAAAAAgBQgBAAAAAAQAAgBAAgBQAAAAAAgBIAAgCIAAgCIAAgIIAAgIIgCgVIgBgVIgFAAQgMAAgHgCQgEgBAAgEQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAIAJABIAJABIAJAAIAJAAIANAAIAMABQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAABQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAIgMgBIgNAAIgDAAIABAYIABAXIAAAFIABAGQAAAEgCACQgBAEgDAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBgBg");
	this.shape_27.setTransform(209.3,-20.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#009900").s().p("AgWAhQgGgIAAgLQAAgSAOgSQANgRAMABIAFAAIADAAQACgCADAAQAEAAABAEIAAALIAAAEQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgEAAgCgEQAAgBAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAIgGgBQgIAAgIAMQgNAQAAAOQAAAGAEAFQAFAGAGAAQAFAAAGgEIAJgGIAEgCQABAAABAAQAAAAABAAQAAABABAAQAAAAABABIABADQAAABAAABQAAAAgBABQAAAAAAABQgBABAAAAQgPANgNAAQgKAAgJgJg");
	this.shape_28.setTransform(201.9,-20.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#009900").s().p("AgWApQgGgFAAgRIAAgHIABgJIgBgDIABgCIABgXIAAgFIgBgHQAAgGAGAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAABIANgDIAKgBQAMAAAIAEQAEABAAADIgCAFQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgCAAQgJgDgIAAIgJABIgLADIAAAFIAAAVIAVgDIAOgBIAEABQAAABAAAAQAAABABAAQAAABAAAAQAAABAAABQAAADgFABIgNACIgYACIAAAHIAAAGQAAAMACACQABACAHgBIAJAAIAKAAIADgBIADAAQAGABAAAFQAAAEgEABQgGABgPAAQgRABgEgFg");
	this.shape_29.setTransform(195.2,-20.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#009900").s().p("AgVAlQgKgIAAgJQAAgHAFAAQAGAAAAAHQAAAEAGAFQAGAEAFAAQAEAAACgbIABgfIgBgGIgDAAIgFAAIgHAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgFAIAAIAGAAIAEAAIAKAAIAKgBQAMAAAAAHQAAAAAAABQAAAAAAABQgBAAAAAAQAAABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAIgEAAIgDgBIgGABIAAAGQAAAngFASQgDAMgJAAQgJAAgJgHg");
	this.shape_30.setTransform(188,-20.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#009900").s().p("AgYApQgCgCAAgCIAAgQIABgVIABgWIABgOIABgEQAIgCAJAAQAIAAAJAGQAKAIAAALQAAANgLAHQAIAEAEAEQAEAEAAAFQAAAGgHAGQgFAFgFACQgLAEgTAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBgAgPAVIAAALQANAAAIgEQAEgBADgDQAEgDAAgBQAAgDgHgDIgKgDIgFgBIgCAAIgCAAIgGgBIAAAMgAgNgfIAAAKIgBAUIAIABQAHgBAFgEQAFgFAAgHQAAgGgFgEQgGgEgFAAIgIAAg");
	this.shape_31.setTransform(181.2,-20.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#009900").s().p("AgaAhQgLgKAAgPQAAgRALgPQAMgRARAAQASAAAIAIQAJAIAAASQAAARgKAPQgLARgRAAQgQAAgKgJgAgSgRQgIAMAAANQAAALAHAGQAIAGALAAQAMAAAIgNQAHgMAAgNQAAgNgFgFQgGgFgNAAQgMAAgJANg");
	this.shape_32.setTransform(173.1,-20.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FF3300").ss(2,1,1).p("AhNAqIA6AAAhKgdIgDBHABOgWQhFg8hWB8");
	this.shape_33.setTransform(137.5,51.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#009900").ss(1.5,1,1).p("AAqAlQgmhdg3AZAAqAlIgngKAA0gHIgKAs");
	this.shape_34.setTransform(218.7,-16.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FF00FF").ss(2,1,1).p("Ag0gUIgCAyIApAAAA3gPQgxgrg8BY");
	this.shape_35.setTransform(79.3,-17.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_24},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},16).wait(17));

	// Layer 8
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(3,1,1).p("AgqgpIAABTQAqAAArAA");
	this.shape_36.setTransform(167.9,25);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(3,1,1).p("AhBgwIAABhQBBAABCAA");
	this.shape_37.setTransform(170.2,24.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(3,1,1).p("AhYg3IAABwQBYAABZAA");
	this.shape_38.setTransform(172.5,23.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(3,1,1).p("Ahvg/IAAB+QBvAABwAA");
	this.shape_39.setTransform(174.8,22.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(3,1,1).p("AiGhGIAACNQCGAACIAA");
	this.shape_40.setTransform(177.2,22.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(3,1,1).p("AiehNIAACbQCeAACfAA");
	this.shape_41.setTransform(179.5,21.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(3,1,1).p("Ai1hUIAACpQC1AAC2AA");
	this.shape_42.setTransform(181.8,20.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(3,1,1).p("AjMhcIAAC5QDMAADNAA");
	this.shape_43.setTransform(184.1,20);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(3,1,1).p("AjjhjIAADHQDjAADlAA");
	this.shape_44.setTransform(186.5,19.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(3,1,1).p("Aj7hqIAADVQD8AAD7AA");
	this.shape_45.setTransform(188.8,18.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(3,1,1).p("AkShxIAADjQESAAETAA");
	this.shape_46.setTransform(191.1,17.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(3,1,1).p("Akph4IAADxQEqAAEpAA");
	this.shape_47.setTransform(193.4,17.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(3,1,1).p("AlAiAIAAEAQFAAAFBAA");
	this.shape_48.setTransform(195.7,16.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(3,1,1).p("AlYiHIAAEPQFYAAFYAA");
	this.shape_49.setTransform(198.1,15.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(3,1,1).p("AlviOIAAEdQFvAAFwAA");
	this.shape_50.setTransform(200.4,14.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(3,1,1).p("AmGiVIAAErQGHAAGGAA");
	this.shape_51.setTransform(202.7,14.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(3,1,1).p("AmdicIAAE5QGdAAGeAA");
	this.shape_52.setTransform(205,13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36}]}).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).wait(17));

	// Layer 9
	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(3,1,1).p("AGlJAICDiEICDCEAIoG8IgJmMIndAAIkSkjIgDAAIshAAAjTjiIAACiAIfAwIHWAAAjTjzIAAlM");
	this.shape_53.setTransform(62.3,24.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_53).wait(33));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.4,-53.8,227.4,137.2);


(lib.CaratforInfinitiveObj = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF00FF").s().p("AgYAtQgHgFAAgTIABgIIAAgKIgBgCIACgEIABgYIgBgHIAAgGQAAgHAGAAQAAAAABAAQAAAAABAAQAAABABAAQABAAAAABIANgDIALgBQAOAAAJAEQADABAAAEQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgCAAQgKgDgJAAIgKABIgMACIABAHIgBAWIAYgCIAOgBQABAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAABQAAAAAAABQABABAAAAQAAAFgGAAIgOABIgaADIgBAIIAAAHQABANACACQAAACAJAAIAKgBIAKAAIAEAAIAEAAQAFAAABAGQgBAEgFABQgFACgSAAQgSAAgEgFg");
	this.shape.setTransform(158.5,-20.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF00FF").s().p("AgJArQgHgSgJggIgFgRQgDgMgBgDQAAgBABgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAQAEAAABAEIADALIAFAUQAFAUAGAQIAAgBIAPgpIAFgPQADgIAEgFQACgCACAAQABAAABAAQAAAAABAAQAAAAABABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQABAAAAABIgBADIgGAMIgFANIgPApIgHAPQgBADgEAAQgEAAgBgEg");
	this.shape_1.setTransform(151.1,-20.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF00FF").s().p("AgZArQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAAAQAAgBAAAAQABgBAAgBQAAAAAAAAQABgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAQABAAAAAAIANgBIAAgLIAAgKIAAgKIABghIgHABIgIAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBgBAAAAQAAAAAAgBQgBgBAAAAQAAgBAAAAQAAgGAGAAIARgBQALAAASADQAFAAAAAGQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAIgKgBIgJgBIgBAfIAAAKIAAALIAAAKIASgBQABAAAAAAQABAAABABQAAAAAAAAQABABAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgKABIgKAAIgKABIgMABQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAAAgBgBg");
	this.shape_2.setTransform(143.5,-20.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF00FF").s().p("AgDArQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAIAAgDIAAgCIAAgJIAAgJIgCgWIgBgYIgGAAQgMAAgIgCQgEgBAAgEQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAIAJACIAJAAIALAAIAKAAIANABIAOAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgOAAIgNgBIgEAAIABAaIACAaIAAAGIAAAGIgBAHQgCAEgDAAIgDgCg");
	this.shape_3.setTransform(136.7,-20.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF00FF").s().p("AgZArQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAAAQAAgBAAAAQABgBAAgBQAAAAAAAAQABgBAAAAQABgBAAAAQABgBAAAAQAAAAABAAQABAAAAAAIANgBIAAgLIAAgKIAAgKIABghIgHABIgIAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBgBAAAAQAAAAAAgBQgBgBAAAAQAAgBAAAAQAAgGAGAAIARgBQALAAASADQAFAAAAAGQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQgBAAAAAAIgKgBIgJgBIgBAfIAAAKIAAALIAAAKIASgBQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgKABIgKAAIgKABIgMABQAAAAgBAAQgBAAAAgBQAAAAgBAAQAAAAgBgBg");
	this.shape_4.setTransform(128.8,-20.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF00FF").s().p("AgmAuQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIAAgHIABgHIAAgLIAAgLIAAgLIAAgMIgBgKIgBgLQAAgDADgCQACgDADAAQADAAAFAHQAOAWALAOQAOARAQAPIAAgHIAAgIQAAgYgCgPIgBgHIgCgGQAAgHAHAAQAKAAAAAmIAAATIAAATIgBAKQgBAGgGAAQgDAAgEgFQgYgWgegqIAAAOIgBAMIABAOIAAAPQAAAQgGAAQgDAAgCgCg");
	this.shape_5.setTransform(120.8,-20.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF00FF").s().p("AgZArQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAAAQAAgBAAAAQABgBAAgBQAAAAAAAAQABgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAQABAAAAAAIANgBIAAgLIAAgKIAAgKIABghIgHABIgIAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBgBAAAAQAAAAAAgBQgBgBAAAAQAAgBAAAAQAAgGAGAAIARgBQALAAASADQAFAAAAAGQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQAAABgBAAQgBAAAAAAIgKgBIgJgBIgBAfIAAAKIAAALIAAAKIASgBQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgKABIgKAAIgKABIgMABQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAAAgBgBg");
	this.shape_6.setTransform(112.7,-20.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF00FF").s().p("AgbAvQgBAAAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBIAAgiIABgiIAAgIIAAgIQAAAAAAgBQAAAAAAgBQAAAAABgBQAAgBAAAAQABAAAAgBQAAAAABAAQABAAAAAAQABAAAAAAIAEABIANgCIAJgBQAHAAAJACQALACAAAFIgBAEQgBAAAAABQAAAAgBABQAAAAgBAAQgBAAAAAAIgDgBQgHgCgMAAIgIABIgMABIAAAaQAMgDAFAAIASABQAGAAAAAFQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAIgKAAIgIAAQgEAAgNADIAAAoQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAAAQgBABAAAAQAAAAgBABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_7.setTransform(106.1,-20.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF00FF").s().p("AgmAuQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIAAgHIABgHIAAgLIAAgLIAAgLIAAgMIgBgKIgBgLQAAgDADgCQACgDADAAQADAAAFAHQAOAWALAOQAOARAQAPIAAgHIAAgIQAAgYgCgPIgBgHIgCgGQAAgHAHAAQAKAAAAAmIAAATIAAATIgBAKQgBAGgGAAQgDAAgEgFQgYgWgegqIAAAOIgBAMIABAOIAAAPQAAAQgGAAQgDAAgCgCg");
	this.shape_8.setTransform(97.4,-20.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF00FF").s().p("AgZArQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAAAQAAgBAAAAQABgBAAgBQAAAAAAAAQABgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAQABAAAAAAIANgBIAAgLIAAgKIAAgKIABghIgHABIgIAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBgBAAAAQAAAAAAgBQgBgBAAAAQAAgBAAAAQAAgGAGAAIARgBQALAAASADQAFAAAAAGQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQAAABgBAAQgBAAAAAAIgKgBIgJgBIgBAfIAAAKIAAALIAAAKIASgBQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgKABIgKAAIgKABIgMABQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAAAgBgBg");
	this.shape_9.setTransform(89.3,-20.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0000FF").s().p("AgCAnQgBAAAAgBQgBAAAAAAQAAgBAAgBQgBAAAAgBIABgCIAAgCIAAgIIgBgIIgBgVIgCgVIgEAAQgMAAgGgCQgFgBAAgEQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAIAIABIAJABIAKAAIAJAAIALAAIAMABQABAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAIgMgBIgLAAIgFAAIACAYIABAXIABAFIAAAGQAAAEgBACQgCAEgDAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAAAAAgBg");
	this.shape_10.setTransform(11.8,-44);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0000FF").s().p("AgVAhQgIgJAAgKQABgSAPgSQAMgRAMABIAEAAIAFABQABgDADAAQAEAAABAEIABALIgBAEQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQgDAAgBgEQgCgDgCgBIgFgBQgIAAgIAMQgNAQAAAOQAAAGAFAFQAEAGAGAAQAFgBAFgDIAKgGIAFgCQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAAAIACAFQAAAAAAABQAAAAAAABQgBAAAAABQAAABgBAAQgOANgOAAQgLAAgHgJg");
	this.shape_11.setTransform(4.4,-43.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0000FF").s().p("AgWApQgFgFgBgRIAAgIIABgIIgBgDIABgCIACgXIgBgFIgBgHQAAgGAGAAQABAAAAAAQAAAAABABQAAAAABAAQAAABAAAAIANgDIAJgBQANAAAIADQAEACAAADIgBAEQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIgBAAQgJgDgJAAIgIABIgLADIAAAFIAAAVIAVgDIAOgBIADABQABABAAAAQAAABABAAQAAABAAAAQAAABAAABQAAADgFABIgNACIgXACIAAAHIgBAGQAAAMACACQABABAHAAIAJAAIAKAAIADAAIAEAAQAFAAAAAFQAAAEgEABQgGABgPAAQgQABgFgFg");
	this.shape_12.setTransform(-2.2,-43.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0000FF").s().p("AgVAlQgKgIAAgJQAAgHAGAAQAFAAAAAHQAAAEAGAFQAGAEAFAAQAEAAACgbIABgfIgBgGIgDAAIgFAAIgHAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgFAIAAIAGAAIAEAAIAKAAIAKgBQAMAAAAAHQAAAAAAABQAAAAAAABQgBAAAAAAQAAABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgEAAIgDgBIgGABIAAAGQAAAngFASQgDAMgJAAQgJAAgJgHg");
	this.shape_13.setTransform(-9.4,-43.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0000FF").s().p("AgYApQgCgCAAgCIAAgQIABgVIABgWIABgOIABgEQAIgCAJAAQAIAAAJAGQAKAIAAALQAAANgLAHQAIAEAEAEQAEAEAAAFQAAAGgHAGQgFAFgFACQgLAEgTAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBgAgPAVIAAALQANAAAIgEQAEgBADgDQAEgDAAgBQAAgDgHgDIgKgDIgFgBIgCAAIgCAAIgGgBIAAAMgAgNgfIAAAKIgBAUIAIABQAHgBAFgEQAFgFAAgHQAAgGgFgEQgGgEgFAAIgIAAg");
	this.shape_14.setTransform(-16.3,-44);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0000FF").s().p("AgXAgQgGgIgCgPIgBgaIAAgMIABgHQACgEADAAQAFAAAAAJIAAAfQAAAgAWAAQAVAAAAg1IAAgGIAAgEQAAgDABgDQACgDACAAQAGAAAAAHIAAAGIAAAHQAAA9ggAAQgQAAgIgJg");
	this.shape_15.setTransform(-24,-43.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0000FF").s().p("AgVAlQgJgFgBgIQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABgBABAAQAAAAABAAQACAAACADIAFAGQAFADAIAAQAIAAAHgEQAJgEAAgIQAAgHgIgEQgGgDgJgBQgIAAgGgCQgIgFAAgIQAAgJALgIQAKgIAKAAQAGAAAGACQAJADAAADQAAAFgFAAIgIgBIgIgBQgHAAgGAEQgGAEAAAGQAAAEAIACIAKABQANABAGAHQAHAFAAAJQAAANgMAHQgKAHgNAAQgJAAgJgEg");
	this.shape_16.setTransform(-31.8,-43.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#009900").s().p("AgDAnQAAAAAAgBQgBAAAAAAQAAgBAAgBQAAAAAAgBIAAgCIAAgCIAAgIIAAgIIgCgVIgBgVIgFAAQgMAAgHgCQgEgBAAgEQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAIAJABIAJABIAJAAIAJAAIANAAIAMABQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAABQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAIgMgBIgNAAIgDAAIABAYIABAXIAAAFIABAGQAAAEgCACQgBAEgDAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBgBg");
	this.shape_17.setTransform(209.3,-20.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#009900").s().p("AgWAhQgGgIAAgLQAAgSAOgSQANgRAMABIAFAAIADAAQACgCADAAQAEAAABAEIAAALIAAAEQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgEAAgCgEQAAgBAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAIgGgBQgIAAgIAMQgNAQAAAOQAAAGAEAFQAFAGAGAAQAFAAAGgEIAJgGIAEgCQABAAABAAQAAAAABAAQAAABABAAQAAAAABABIABADQAAABAAABQAAAAgBABQAAAAAAABQgBABAAAAQgPANgNAAQgKAAgJgJg");
	this.shape_18.setTransform(201.9,-20.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#009900").s().p("AgWApQgGgFAAgRIAAgHIABgJIgBgDIABgCIABgXIAAgFIgBgHQAAgGAGAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAABIANgDIAKgBQAMAAAIAEQAEABAAADIgCAFQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgCAAQgJgDgIAAIgJABIgLADIAAAFIAAAVIAVgDIAOgBIAEABQAAABAAAAQAAABABAAQAAABAAAAQAAABAAABQAAADgFABIgNACIgYACIAAAHIAAAGQAAAMACACQABACAHgBIAJAAIAKAAIADgBIADAAQAGABAAAFQAAAEgEABQgGABgPAAQgRABgEgFg");
	this.shape_19.setTransform(195.2,-20.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#009900").s().p("AgVAlQgKgIAAgJQAAgHAFAAQAGAAAAAHQAAAEAGAFQAGAEAFAAQAEAAACgbIABgfIgBgGIgDAAIgFAAIgHAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgFAIAAIAGAAIAEAAIAKAAIAKgBQAMAAAAAHQAAAAAAABQAAAAAAABQgBAAAAAAQAAABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAIgEAAIgDgBIgGABIAAAGQAAAngFASQgDAMgJAAQgJAAgJgHg");
	this.shape_20.setTransform(188,-20.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#009900").s().p("AgYApQgCgCAAgCIAAgQIABgVIABgWIABgOIABgEQAIgCAJAAQAIAAAJAGQAKAIAAALQAAANgLAHQAIAEAEAEQAEAEAAAFQAAAGgHAGQgFAFgFACQgLAEgTAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBgAgPAVIAAALQANAAAIgEQAEgBADgDQAEgDAAgBQAAgDgHgDIgKgDIgFgBIgCAAIgCAAIgGgBIAAAMgAgNgfIAAAKIgBAUIAIABQAHgBAFgEQAFgFAAgHQAAgGgFgEQgGgEgFAAIgIAAg");
	this.shape_21.setTransform(181.2,-20.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#009900").s().p("AgaAhQgLgKAAgPQAAgRALgPQAMgRARAAQASAAAIAIQAJAIAAASQAAARgKAPQgLARgRAAQgQAAgKgJgAgSgRQgIAMAAANQAAALAHAGQAIAGALAAQAMAAAIgNQAHgMAAgNQAAgNgFgFQgGgFgNAAQgMAAgJANg");
	this.shape_22.setTransform(173.1,-20.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF6600").s().p("AgEA0QgCgCAAgDIAAgIIAAgJIgBgqIgQgBQgHgBAAgGQAAgDACgCQACgCADAAIAPABIAAgKIAAgJQAAgDACgCQACgCADAAQAGgBABALIAAAHIAAAEIAAAFIAKgBIAKABQAFABAAAFQAAADgCACQgCACgEAAIgDAAIgEAAIgKABIACAqIAAAEIAAAEQAAAQgIAAQgCAAgCgCg");
	this.shape_23.setTransform(181.2,50.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF6600").s().p("AAYAlIgFgFIgNAGQgFACgDAAQgRAAgIgKQgHgJAAgTQAAgRAMgMQAMgNAQAAQAHAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBAJIgBAPQAAAKACAFIAEANIACAEIAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAQgCAAgDgEgAgLgRQgJAJAAALQAAAMAFAGQAEAGAIAAQAGAAAFgDIAIgFQgDgTAAgJIABgHIABgIIgFgCIgDgBQgKAAgIAKg");
	this.shape_24.setTransform(173.8,51.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF6600").s().p("AgcAiIAAgzIABgHIAAgHQAAgIAGAAQAIAAgBAMQAOgNARAAQAGAAADAEQACAEABAKIAAAFQgBAJgGAAQgHAAAAgHIAAgFIgBgHQgLACgGAFQgGAFgFAJIAAAoQAAAHgHAAQgHAAAAgHg");
	this.shape_25.setTransform(166.6,51.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF6600").s().p("AAYAlIgFgFIgNAGQgFACgDAAQgRAAgIgKQgHgJAAgTQAAgRAMgMQAMgNAQAAQAHAAAIAEQAKAEAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgBAJIgBAPQAAAKACAFIAEANIACAEIAAABQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAQgCAAgDgEgAgLgRQgJAJAAALQAAAMAFAGQAEAGAIAAQAGAAAFgDIAIgFQgDgTAAgJIABgHIABgIIgFgCIgDgBQgKAAgIAKg");
	this.shape_26.setTransform(158.9,51.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF6600").s().p("AgUAgQgLgJAAgQQAAgOAKgQQALgRANAAQAHAAAJADQALAFAAAGQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAIgEgBIgDgDQgEgDgKAAQgGAAgIANQgGAMAAAIQAAAKAGAFQAGAGAJAAQAEAAAFgDIAJgEIADgBQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADQAAAFgMAFQgJAEgHAAQgOAAgKgJg");
	this.shape_27.setTransform(151.3,51.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FF3300").ss(2,1,1).p("AhNAqIA6AAAhKgdIgDBHABOgWQhFg8hWB8");
	this.shape_28.setTransform(137.5,51.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#009900").ss(1.5,1,1).p("AA0gHIgKAsQgmhdg3AZAADAbIAnAK");
	this.shape_29.setTransform(218.7,-16.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FF00FF").ss(2,1,1).p("Ag0gUIgCAyIApAAAA3gPQgxgrg8BY");
	this.shape_30.setTransform(79.3,-17.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#0000FF").ss(1.5,1,1).p("AA0gHIgKAsQgmhdg3AZAADAbIAnAK");
	this.shape_31.setTransform(22.2,-41.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 7
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(3,1,1).p("AmdicIAAE5QGdAAGeAA");
	this.shape_32.setTransform(205,13.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_32).wait(1));

	// Layer 1
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(3,1,1).p("AGlJAICDiEICDCEAIoG8IgJmMIndAAIkSkjIgDAAIshAAAjTjiIAACiAIfAwIHWAAAjTjzIAAlM");
	this.shape_33.setTransform(62.3,24.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_33).wait(1));

}).prototype = getMCSymbolPrototype(lib.CaratforInfinitiveObj, new cjs.Rectangle(-40.4,-53.8,288.4,137.2), null);


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


(lib.Wave2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Egj7AEmIgKgPIgFgLQgOgdAAgfQgCgkAQgIQAEgCAFAAQAmAAABADQACACADABIADgCQgEgMAAgFQAAhRBcAAQATAAAiALQAiAKAQAAIADgBQAAgTADgMQAEgOAHgEQAGgFAlAAQAaAAAvAPIAYAIIAGACIADABIAMADIAJgNQADgEAFgEQAKgGARAAIACAAIADAAIADAAIAAgEIgDgBQADhKBZAAQATAAAiALQAiALAQAAIADgBQAAgUADgMQAEgOAHgFQAGgEAlAAQAaAAAvAPIAYAIIAVAHIAJgOQAKgOAbAAIAGAAQAaACASAUIAMAUIgCAEIAAANIADABIACgBQgBgGACgFIAAABIADgDIgBgDQAGgLAWgJIAcgNQAdgPASAAQAHABAaASIAaASQAAAAABAAQAAAAABAAQAAAAAAAAQAAAAAAgBQAEgcAHgHQAGgEAaAAQAaAAAKARQAKAQADAAQAEgJAGgJQANgTAoAAQAmAAAGAPIACANQABAHAEAEQAPggAEgDQATgTAvAAQAiAAAKARQAMAVADABQALgnAqAAQAdAAANATIAJgOQAKgOAfAAQAbAAATAKIAtAYQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAgBIAAgCIgCgJQAHgLANgKQAagVAgAAQAbAAAIAGIAGAMIAJAVIADgBQgBgKANgMQASgPAcAAQARAAAKADIAUAIQABAAABAAQABAAAAgBQAAAAABgBQAAgBAAgBIgBgCIAKAAIA5AhIADgBIABgEQAAgDgNgHQgMgGAAgFQAAgIAXgHQAegJAygBIAkACQADABADADQAFAGADAEQAGAUAEAAQAAAAABAAQAAAAABAAQAAAAAAAAQABgBAAAAQgFgXALgWQAGgNAfgEQA0gIAJAAQAjAAAFANQABADAAAGQABADAFAAIACgBIABgEQgKgPAAgLQAAgHAEgFQAJgKAeAAQASAAAMAHIAvAhIgBABIgIAEIADAEIATgFQAAgDgKgHIACgLIAkgCQAeAAAYAXQABAAABAAQAAAAAAAAQABAAAAAAQABgBAAAAQgEgJACgEQAEgGAgAAQAKAAAzAMIAEgBIABgDIgSgRQgSgSAAgRQAAgIADgDQAJgKAgAAQA6gBAmAUQAhAQAAAUIgCAQQAAAHADABQALgJADgdQAEgJAMgKQAVgQAfAAQAmAAANAQQANAQABAAQACAAAGgNQALgNAdAAQARAAAsAfIACgGIgBgGQACgCAdABQAHgBASAQQAEAAAEgOQAJgMAeAAQAVAAAsALIAXAGIAlAQQAIAAAAgDQgRgKAAgLQAAgKALgKQARgRAmAAQAdAAAcAOQAaANAAAKIgDALIAAAHIADABQALAAACgbQARgYAlAAQAKAAAPAOIAGAEQAKAJADAAQAEAAAGgRQALgSAZAAQAKAAAuAPQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAAAAAIABgDIgDgJIASgBQASAAAFALIAVgVQAdgTAigBQAlAAAHAXIALAjQAAAFgIADQACAEAJABQABAAAAAAQABAAAAAAQABAAAAAAQAAAAAAAAIAAgKIgBgGIACAAQAGgRAugTQAxgTAwAAQAoAAALAbQAGgGAZgBIAAgFIAAgEIAFAEQAGAFADAAQACAAADgFIAFgMQAKgRAagBQAKAAAtAPQABAAAAAAQABAAAAAAQABAAAAgBQAAAAAAAAIAAgDIgCgJIASAAQASAAAEAKIAWgVQAcgTAjgBQAlABAGAWIALAjQAAAGgHADQABADAKABQAAAAABAAQAAAAABAAQAAAAAAAAQAAAAAAgBIABgJIgBgGIACAAQAFgRAvgTQAxgTAwAAQAoAAALAbQAHgHAfAAQBSAAAAA2QAAAKgDADQgKAIgnACQAMAEAIAMQAGAJAAAFQAAAfikAAQgrAAgNgIQgFgKgEgEQgDAGAAAMQgFAJgDAAQgSAJgLABIABgFQgDgTgHAAQAAAAgBAAQAAAAAAAAQgBABAAAAQAAAAgBABIAHARIgBAFIgBAAIABAAQgLAXhgAAQhJAAgVgSQgHgHgEgMIgHgUQgPAWgTAOIgJAFIgiAOIgFABIgDAAIgSABIAAACQgmAEg+AAQgsAAgMgIQgGgLgEgDQgCAHAAALQgFAJgDAAQgSAJgLABIAAgFQgCgTgHAAQgBAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAABIAGARIgBAFIAAAAIAAAAQgKAYhhAAQhJgBgUgSQgHgHgEgMIgHgUQgqA5g9ABQgngBgFgWIABgHQAAgFgCgBIAAgCIgDgBIgCABQgBAAAAAAQgBABAAAAQAAABAAAAQgBABAAAAQAAADADACIAAAEQgFASg9ARQg5AQgiAAQg4AAgWgeQgMgegGgBIgCABIAAAIIAFANQAAASgfAWQgkAYgsAAQgsAAgcgZQgcgagHABQgKAAgGAIQgKANgTAJQgyAZgZAAQgYAAgDgKQAAgMgEgEQg1AwgtgBQggAAgNgQQgJgUgHgFQgXBEheAAQgpAAgRgKQgRgOgMgIQgMgJAAgPQAAgPgFgEQgaAtgGAGQgdAbg9ABQhDAAgFglQAAgBAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAgBAAIAAgDIgDAAIgCABIgDAAIgCAAIAAADIAEAEQgcAAgKAXQgJAWgYAAQgWAAgOgVQgPgWgFAAQgEgBgHASQgIAPgQAAQgOAAgJgMQgGgNgDAAIgDACQACAVgVARQg5AhgdABQgsAAgHgyIgCggQgBgQgFAAQgWAAAAAwQAAANgRANQgWATgigBQgcAAAAgMQAEgFAAgDQAAgEgGAAQAEADgRAAQgVAAgOgMQgNgNgGAAQgGAAgPAbQgQAbgUAAQgPAAgOgRIgMgSQgGABgHAWQgRAWg0AAQgSAAgIgLQgGgMgCAAQgEgBgSAjQgaAigrAAQgdAAgKgMQgGgRgGgCQgKAagLAGQgJAFgbAAQgYAAgVgYQgRgUAAgJQAEgLgHAAIgDABQgOBLhdgBQgWAAgCgSQgBgTgIABQgFgBAAALQAAAKAIAJQAAAPgcANQgcAOgiAAQgrAAgTgYQgKgOAAgPIACgSIAAgFIgEgBIgCABQACAGgDAHQgFAKgPALQgQAMgQAEQgIACgIAAQgYAAgRgLIAAgEIgEAAIgBABQgIgFgGgJQgPgSAAgNQAAgHAHgIIAGgIIgCgCIgCgBQgPAAAAAaQAAANAPAVQAHAKAJAGQgdAigYAMIgGADQgYAKg9AAQgSAAgKgNQgFgGgDgIQAAAAgBAAQAAABgBAAQAAAAAAABQAAAAAAAAQgBAGgEAGQgGAKgPAMQgZATgXAAQgbAAgVgJIAAAEIgBACQgFAJgOALQgQALgQAEQgIACgIAAQgYAAgRgKIAAgFIgEAAIgBABQgIgFgGgIQgPgTAAgOQAAgGAHgHIAGgJIgCgDIgCAAQgPAAAAAZQAAAOAPAVQAHAKAJAGQgdAigYANIgGACQgYAKg9AAQgSAAgKgMQgFgHgDgJQAAABgBAAQAAABgBAAQAAAAAAABQAAAAAAABQgBAFgEAHQgGAJgPALQgZAUgXAAQg5AAgfgogA8tA2IABAAIgBgDgA9nA5IgDgBIAGgEIADgBIgDAGIAAABIgDgBg");
	this.shape.setTransform(3.2,6.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("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");
	this.shape_1.setTransform(3.2,6.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Wave2, new cjs.Rectangle(-230.2,-27.9,466.9,67.9), null);


(lib.Wave1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(7.3,-2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("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");
	this.shape_1.setTransform(7.6,-1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Wave1, new cjs.Rectangle(-225.3,-34.9,465.9,66), null);


(lib.SlimWins = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#996600").s().p("Ag1AmIAAgZQgHgPAAgKIABgFIAFgCIAigCIAVgNIAYAGQALAAAGgKQAHgJAFgBIAGAAIABACQgMAVACAQQgIgIgNABQgZgBgUASQgTAPAAALQAAAKAIAJQAAABAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAIgDAAQgHgMgQACg");
	this.shape.setTransform(1.3,-39.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUAUIAAgBQgFgRAEgPQAAgFAIgCQAIgDAGAKQAFAIgDAPQgDgEgEAAQgIAAAAAJQAAAHAHAAIADAAIAAAAQgFADgEAAQgFAAgEgFgAAKASIAAgBQgEgHABgGQgBgOAJgMQAEgFAFAGQgBAPgEAMIgCAAQgHAAAAAFQAAAHAEABIgBAAIgDgBg");
	this.shape_1.setTransform(4,-37);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("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");
	this.shape_2.setTransform(-0.1,3.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FF00").s().p("AgXBRIAAgBIAAAAQgrgSgGgLQgEgGAAg3QgMgzAbgWQBKAAASgCIAAAOQANBaAlAsIgWACIgKgDIgCgCQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBABAAAAIgBAAQghgBgJABQACgNAAgKQAAgUgCgKIgDAAIAAAoQAAAXgIAPIgNgFg");
	this.shape_3.setTransform(-1.4,11.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("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");
	this.shape_4.setTransform(-0.2,1.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC99").s().p("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");
	this.shape_5.setTransform(-4.9,1.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("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IAFACQAHAAAAADQAAADgJAAQABAGAAAJQACAMgCAHIAAACQAAAEgBADIgFAEIgGAEIgGACIABABIAAAAQgjAAgHgFQgIgGgEAAQgNAAgLACIgBACIgCgBIgJgDIgQgGIAAAAIgHgDIgNgFIgCAAQgNgFgHAAQAGgVgZgJQgZgIgGAHQgHAIgUgCIgkgMIACgHIACABIAhgkIAAAAQALgPAIgIIAAAAIAKgIIAFgFIADgEIABACIAGgFQAQgVAQASIADACIgJALIgGAEIgBgCIAAACIABAAIADABIABgBQAGAAADACQAHgBAIgHIAHgGQAGgIgKgKQgYgbgxAfIgDACIgQAMIgRAJQgEACgaAVIgNAMIgIAQIgHAPQgIAIgCAHQgGACASAHIAVAGIABAAIACABIABAAICCA0IAKAEIALAFIAAAAIAZAKIgXgRQgDgCADACIAQAGIACAEIAAAAIADACIAFAFIgBACIgCgCIACADIAAABIAAAAIgCAEQAAABABAAQAAAAAAgBQABAAAAgBQAAgBAAgBIABADIAAgGIACALQATAyAKAYIAKAXIgBAAIALAcgACzlOIAMAVIAFgBQADgBAFgNQgLAEgGgCQgDgBgEgIIgBgCIAAADgADdk8IAHgFIgFgHQgHACgGgCIgCAHIABgCIAMAHgAC4lTIAHAHQAJAHABgHQgEgEgHgMIgFgKQgEANADAGgADjlUIABACIAIgDIAAAAQgFgIgLABIADAGIABgBIAAgBIADAEgABLmRQgJACAAAFQgDARAFARIgBAAQAIAJAKgGIABgBIgDABQgHAAAAgIQAAgJAHAAQAGAAACAEQAEgQgFgIQgGgHgGAAIgDAAgAAelkIADgBQABAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQgIgJAAgKQAAgLATgPQAVgSAZAAQANAAAIAHQgCgQAMgUIgBgCIgGAAQgEAAgIAKQgGAJgLAAIgYgGIgWANIgiACIgFACIgBAGQAAAJAHARIAAAYIAEAAQANAAAGALgABnmTQgIAMABAPQgBAHAEAHIAAAAQAAABABAAQAAAAABAAQAAABABgBQAAAAAAAAQgDgBAAgGQAAgGAGAAIADAAQADgMABgPQgCgEgDAAQAAAAgBAAQAAAAgBABQAAAAgBAAQAAABgBAAgAihl+IAFADIATgPIABgEIgBACQgIAGgDAAQgGAAgLgIQACAOACACgAi/mPIAFAHIAOgDIABACIABgHQgHAAgHgEIgHAFgAiPmcQgLAJgGADQgBAHALgEIAJgEQAFgEABgOIgIAHgAjAmlIgBAAIAHAFIACgBQABgBABgBQABAAABgBQAAAAAAABQABAAgBAAIABABIAFgEQgFgCgEAAQgFAAgEADgACplDIgDgEIAHAFIADACQgEAAgDgDgAiLl9IADgBIAJgCIgEADIgEABIgEgBg");
	this.shape_6.setTransform(-4.8,1.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgJAcIAAgBQgFgHgEgHIACAAQAJAAAAgJQAEgHgNAAQgFAAgCACIAAgBQgCgFAHgFQAGgGAKAHQAGAEADAMIABABQADAIAAAKIgCACIgEAAQgEAEgDAAQgEAAgDgCgAANAJIgCgEIAEABQAFAAAAgGIgBgGIgFgBQgGgBgBADQgDgKACgKQADgGAGAEQAFAOACANIABAAQAEAKgGADIgBAAIACAAQgBABAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIAAAAIgCAAg");
	this.shape_7.setTransform(-1.4,-39);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#996600").s().p("AgZA9IgJgWQgNgNgEgJIgBgGIAEgDIAegOIAQgUIAXgEQAKgEADgLQACgMAFgCIAFgCIACABQgEAXAJAPQgLgEgMAFQgXAJgMAYQgLAWAEAKQAEAJAKAFQAAABABAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgCACQgLgIgOAHg");
	this.shape_8.setTransform(-5.7,-40.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCC99").s().p("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");
	this.shape_9.setTransform(-4.9,1.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("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QACACAEAAIAGgBQAHgCABACQABADgIADQADAFAEAJQAFAKABAHIABACIABACIAAAEIACgBIAAAAIgEADIgGACIABABIAAAAQgjAAgHgFQgIgGgEAAQgNAAgLACIgBACIgCgBIgJgDIgQgGIAAAAIgHgDIgNgFIgCAAQgNgFgHAAQAGgVgZgJQgZgIgGAHQgHAIgUgCIgkgMIACgHIACABIAhgkIAAAAQALgPAIgIIAAAAIAKgIIAFgFIADgEIABACIAGgFQAQgVAQASIADACIgJALIgGAEIgBgCIAAACIABAAIADABIABgBQAGAAADACQAHgCAIgGIAHgGQAGgIgKgKQgYgbgxAfIgDACIgQAMIgRAJQgEACgaAVIgNAMIgIAQIgHAPQgIAIgCAHQgGACASAHIAVAGIABAAIACABIABAAICCA0IAKAEIALAFIAAAAIAZAKIgXgRQgDgCADACIAQAGIACAEIAAAAIADACIAFAFIgBACIgCgCIACADIAAABIAAAAIgCAEQAAAAABAAQAAAAAAAAQABAAAAgBQAAgBAAgBIABADIAAgGIACALQATAyAKAYIAKAXIgBAAIALAcgACzlHIAMAVIAFgBQADgBAFgNQgLAEgGgCQgDgBgEgIIgBgCIAAADgADdk1IAHgFIgFgHQgHACgGgCIgCAHIABgCIAMAHgAC4lMIAHAHQAJAHABgHQgEgEgHgMIgFgKQgEANADAGgADjlNIABACIAIgDIAAAAQgFgIgLABIADAGIABgBIAAgBIADAEgAgIlcIADgCQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQgLgFgEgJQgEgLALgVQANgZAWgJQAMgFALADQgJgOAEgXIgCgBIgGACQgEACgDAMQgCALgKAEIgYAEIgPAUIgfAPIgDADIABAGQADAIAOANIAJAXQAHgEAGAAQAGAAAGAFgAAYluIAAAAQAJAFAHgHIADAAIACgBQABgKgEgIIgBgBQgDgNgHgFQgKgGgGAGQgHAFACAEIAAACQADgCAFAAQAMAAgDAIQgBAJgIAAIgDAAQAEAHAFAHgAihl3IAFADIATgPIABgEIgBACQgIAGgDAAQgGAAgLgIQACAOACACgAAwmAIACAFIACgBIAAABQABAAABAAQAAAAABAAQAAAAAAAAQABgBAAAAIgCAAIABgBQAHgCgFgKIgBgBQgCgNgEgOQgHgEgCAGQgCAKACAJQACgCAFABIAGABIAAAGQAAAHgFAAIgEgBIADAEgAi/mIIAFAHIAOgDIABACIABgHQgHAAgHgEIgHAFgAiPmVQgLAJgGADQgBAGALgDIAJgEQAFgFABgNIgIAHgAjAmeIgBAAIAHAFIACgBQABgBABgBQABAAABgBQAAAAAAAAQABABgBAAIABABIAFgEQgFgCgEAAQgFAAgEADgAAjj3IAAABIgCAAIACgBgACpk8IgDgEIAHAFIADACQgEAAgDgDgAiLl2IADgBIAJgCIgEADIgEABIgEgBg");
	this.shape_10.setTransform(-4.8,0.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_11.setTransform(-2.4,-36.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("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gVAJAFALQABAEAGAEQACACAEAAIAGgBQAHgCABACQABADgIADQADAFAEAJQAFAKABAHIABACIABACIAAAEIACgBIAAAAIgEADIgGACIABABIAAAAQgjAAgHgFQgIgGgEAAQgNAAgLACIgBACIgCgBIgJgDIgQgGIAAAAIgHgDIgNgFIgCAAQgNgFgHAAQAGgVgZgJQgZgIgGAHQgHAIgUgCIgkgMIACgHIACABIAhgkIAAAAQALgPAIgIIAAAAIAKgIIAFgFIADgEIABACIAGgFQAQgVAQASIADACIgJALIgGAEIgBgCIAAACIABAAIADABIABgBQAGAAADACQAHgCAIgGIAHgGQAGgIgKgKQgYgbgxAfIgDACIgQAMIgRAJQgEACgaAVIgNAMIgIAQIgHAPQgIAIgCAHQgGACASAHIAVAGIABAAIACABIABAAICCA0IAKAEIALAFIAAAAIAZAKIgXgRQgDgCADACIAQAGIACAEIAAAAIADACIAFAFIgBACIgCgCIACADIAAABIAAAAIgCAEQAAAAABAAQAAAAAAAAQABAAAAgBQAAgBAAgBIABADIAAgGIACALQATAyAKAYIAKAXIgBAAIALAcgACzlHIAMAVIAFgBQADgBAFgNQgLAEgGgCQgDgBgEgIIgBgCIAAADgADdk1IAHgFIgFgHQgHACgGgCIgCAHIABgCIAMAHgAC4lMIAHAHQAJAHABgHQgEgEgHgMIgFgKQgEANADAGgADjlNIABACIAIgDIAAAAQgFgIgLABIADAGIABgBIAAgBIADAEgAgIlcIADgCQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQgLgFgEgJQgEgLALgVQANgZAWgJQAMgFALADQgJgOAEgXIgCgBIgGACQgEACgDAMQgCALgKAEIgYAEIgPAUIgfAPIgDADIABAGQADAIAOANIAJAXQAHgEAGAAQAGAAAGAFgAihl3IAFADIATgPIABgEIgBACQgIAGgDAAQgGAAgLgIQACAOACACgAi/mIIAFAHIAOgDIABACIABgHQgHAAgHgEIgHAFgAiPmVQgLAJgGADQgBAGALgDIAJgEQAFgFABgNIgIAHgAjAmeIgBAAIAHAFIACgBQABgBABgBQABAAABgBQAAAAAAAAQABABgBAAIABABIAFgEQgFgCgEAAQgFAAgEADgAAjj3IAAABIgCAAIACgBgACpk8IgDgEIAHAFIADACQgEAAgDgDgAiLl2IADgBIAJgCIgEADIgEABIgEgBgAAEl7QAAgJATAAQAIAAABACQgDAAgWALIgDgEgAAqmDIABAAIAAACIgBgCgAAMmMIABAAIAAABg");
	this.shape_12.setTransform(-4.8,0.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFCC99").s().p("AABHCQgFgEgZgFIgegGQgTABAAgLQAIgIABgFQAGgJgBgEQAAgJAEgTIAKg2QAGglAGgRIACgHQAHgCAAgEIAAgpIAAgbQgBgOgBgHQAOALAZAJIgCANIAAAmQAAAGANARQAAAFgEADIgEAEQgDACgIAAQgCADgBAOIgKAhQgCANgLAUQgOAaAAAIQAAAQAMAJQAaAPAgAAQAPAAAIgGQAIAAAAAHIgCAGQgDgCgCAAQgBAAgBABQAAAAgBAAQAAAAAAABQAAAAAAABQAAABAGADIgEAHQgBAAAAgBQgBAAAAAAQgBAAgBAAQAAgBgBAAQgBAAAAABQgBAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABABAAQAAAAABAAIgLAFQgDgFgIAAQgFAAAAADQAAABAAABQAAABAAAAQABABAAAAQABAAABAAQAAgCAFAAIAEAFIgRADQgKAAgFgLgAB/HHQgRgMgLgTQgJgOgFgCQgSgGAAgJQAOg0ACgMQAKgeAAgkQAAgSgCgFQgPgXgEgIQgSglgHgMIAiACIASAiIAFAMQAAAGAHAMQACAJAGABQAGACAAAIIgHAMIAAAhIAAACIgCAAIgDAJQgWA5AAAKQAAAIAFAEIATANIAQANIAJAGIAUAFIgCAEIgEgBQgBAAAAABQgBAAAAAAQgBAAAAABQAAAAAAAAQAAACAFACQAFACAAADQAAADgDADQgCgHgHAAQgBAAAAABQgBAAAAAAQgBAAAAABQAAAAAAAAQAAACAIAIQAAAEgFACQgBgIgJAAQgBAAgBAAQgBAAAAABQgBAAAAABQAAAAAAABQAAACAGABIAEAFIAAADgAgYADQAAgTgHgYIgDAAIAAgGIgVhFIgKgbIAAAAIgJgXQgLgYgTgzIgCgKIABABIAAgFIgBACIgFgFIgDgCIgCgEIgPgGQgEgCADACIAYARIgagKIAAgBIgLgEIgKgEIiCg0IAAAAIgDgBIgBAAIgVgGQgSgHAGgDQACgHAIgHIAHgPIAIgQIANgMQAagVAEgDIARgIIARgNIACgBQAxgfAZAaQAJALgGAIIgHAGQgIAGgHACQgDgDgGABIgBABIgDgBIABAAIAFgEIAJgLIgCgCQgRgSgQAVIgGAEIgBgBIgDADIgEAGIgLAIIAAAAQgIAIgKAOIgBABIghAjIgCAAIgCAHIAkAMQAUABAHgHQAGgHAZAIQAZAJgGAUQAHABANAFIACAAIANAFIAHADIAAAAIARAGIAIADIADAAIAAgBQALgCANAAQAEAAAIAGQAHAEAjABIAAgBIgBAAIAHgDIAEgCIgBAAIgCAAIAAgDIAAgCIgCgCQgBgHgFgKQgEgJgDgFQAIgEgBgCQgBgDgHADIgFAAQgEABgCgCQgHgEgBgEQgFgLAWgJQAHgDARAFQAIgEgDgJQgNgGgDgJQgDgFAKgTQALgYAVgJQAIgDADADIABABIAAABQAHAAADACIADACIAFAVIABABQgNABAAAHIABADIAEAAIAKgEQADAHgDADIACAEIADAAIAFAEIgBAHQgCAKgSAEQABAEALgFQAKgEADgHQADAKgCAHQgDAHAAAFQgGAFgIAEQgQAHgOgLQgLgMgBAAIgCACIACAGQADAHAHAFQAOAKAVgIIANgHQAFATAEALQgBADgTAIIgPgCQgPACgEgCQgWgPgCABIgCADIACAFQAHAGANAEQgBADAAAEIACgBQAAAMAFAGIAIAJIAEABIAZABIADACQAFACgBABIAAABIAJAIIAAgCQAJAFAPABQAMABAQgBIAAAAIAHgBIANAAIABAAQANAAAHACQABgWAYAAQAZAAAEAKQADAJATAFIAjAAIAAgHIgCAAIgSgtIAAAAQgFgSgFgKIAAAAIgHgLIgCgGIgCgEIgBABIgDgGQgJgagUAMIgCABIAEANIAEAGIAAAAIgDAAIAAgBQgGgDgDABQgGgDgFgJIgEgIQgDgKAMgGQAegRAiAtIABACIALASIAMANIAUAgIAIAQIACARIABARQAFAKAAAHQAFAFgTAAIgUgBIgBAAIgDAAIAAAAIiDAGIgKABIgLAAIAAABIgaABIAagIQADgBgDAAIgQABIgDADIgDABIgGADQgNALgGAVQgGAaggAHIAAAFIARAAQgDAbAAA0QACAtgBAWgAAhkEIACAAIAAgCIgCACgAAYl8IAAAAIAAAAIAAAAgAAEmJIADAEQAWgLADAAQgBgDgHAAQgUAAAAAKgAArmPIAAgCIgBAAIABACgAANmaIAAAAIAAgBIAAABgAhrj4IABgCIABAGIgCgEgAhrj5IgBgDIABACIABAAIgBABgACzlVIAAgDIABABQAEAJADABQAGACAMgFQgGAOgCABIgGABgADSlKIgBACIABgHQAGACAHgCIAFAHIgHAFIgLgHgAC/lUIgGgGQgEgGAEgNIAFAKQAHAMAEAEQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQgCAAgFgEgADjlbQgBgBAAgBQgBgBAAgBQgBAAAAAAQAAAAAAABIgBABIgDgGQALgBAFAIIAAAAIgIADIgBgCgAihmFQgCgCgCgPQALAJAGAAQADAAAIgGIABgCIgBADIgTAQgAi/mXIAIgFQAGAFAHAAIgBAHIAAgCIgOADgAigmYQAGgCALgJIAIgHQgBANgFAFIgJADIgGACQgFAAABgFgAjAmsIAAAAQAHgGALAFIgFAEIgBgBQABAAgBgBQAAAAAAAAQgBAAgBABQAAABgCABIgBABIgHgFg");
	this.shape_13.setTransform(-4.9,1.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("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AJgIAEQgRgFgIADQgVAJAFALQABAEAGAEQACACAEAAIAGgBQAHgCABACQABADgIADQADAFAEAJQAFAKABAHIABACIABACIAAAEIACgBIAAAAIgEADIgGACIABABIAAAAQgjAAgHgFQgIgGgEAAQgNAAgLACIgBACIgCgBIgJgDIgHgCIgJgEIAAAAIgHgDIgNgFIgCAAQgNgFgHAAQAGgVgZgJQgZgIgGAHQgHAIgUgCIgkgMIACgHIACABIAhgkIAAAAQALgPAIgIIAAAAIAKgIIAFgFIADgEIABACIAGgFQAQgVAQASIADACIgJALIgGAEIgBgCIAAACIABAAIADABIABgBQAGAAADACQAHgCAIgGIAHgGQAGgIgKgKQgYgbgxAfIgDACIgQAMIgRAJQgEACgaAVIgNAMIgIAQIgHAPQgIAIgCAHQgGACASAHIAVAGIABAAIACABIABAAICCA0IAKAEIALAFIAAAAIAVAIIAEACIgEgDIgTgOQgDgCADACIAQAGIACAEIAAAAIABAAIACACIAFAFIgBACIgCgCIACADIAAABIAAAAIgCAEQAAAAABAAQAAAAAAAAQABAAAAgBQAAgBAAgBIABADIAAgGIACALQATAyAKAYIAKAXIgBAAIALAcgACzlHIAMAVIAFgBQADgBAFgNQgLAEgGgCQgDgBgEgIIgBgCIAAADgADdk1IAHgFIgFgHQgHACgGgCIgCAHIABgCIAMAHgAC4lMIAHAHQAJAHABgHQgEgEgHgMIgFgKQgEANADAGgADjlNIABACIAIgDIAAAAQgFgIgLABIADAGIABgBIAAgBIADAEgAgIlcIADgCQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQgLgFgEgJQgEgLALgVQANgZAWgJQAMgFALADQgJgOAEgXIgCgBIgGACQgEACgDAMQgCALgKAEIgYAEIgPAUIgfAPIgDADIABAGQADAIAOANIAJAXQAHgEAGAAQAGAAAGAFgAihl3IAFADIATgPIABgEIgBACQgIAGgDAAQgGAAgLgIQACAOACACgAi/mIIAFAHIAOgDIABACIABgHQgHAAgHgEIgHAFgAiPmVQgLAJgGADQgBAGALgDIAJgEQAFgFABgNIgIAHgAjAmeIgBAAIAHAFIACgBQABgBABgBQABAAABgBQAAAAAAAAQABABgBAAIABABIAFgEQgFgCgEAAQgFAAgEADgAAjj3IAAABIgCAAIACgBgACpk8IgDgEIAHAFIADACQgEAAgDgDgAiLl2IADgBIAJgCIgEADIgEABIgEgBgAAEl7QAAgJATAAQAIAAABACQgDAAgWALIgDgEgAAqmDIABAAIAAACIgBgCgAAMmMIABAAIAAABg");
	this.shape_14.setTransform(-4.8,0.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFCC99").s().p("AABHCQgFgEgZgFIgegGQgTABAAgLQAIgIABgFQAGgJgBgEQAAgJAEgTIAKg2QAGglAGgRIACgHQAHgCAAgEIAAgpIAAgbQgBgOgBgHQAOALAZAJIgCANIAAAmQAAAGANARQAAAFgEADIgEAEQgDACgIAAQgCADgBAOIgKAhQgCANgLAUQgOAaAAAIQAAAQAMAJQAaAPAgAAQAPAAAIgGQAIAAAAAHIgCAGQgDgCgCAAQgBAAgBABQAAAAgBAAQAAAAAAABQAAAAAAABQAAABAGADIgEAHQgBAAAAgBQgBAAAAAAQgBAAgBAAQAAgBgBAAQgBAAAAABQgBAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABABAAQAAAAABAAIgLAFQgDgFgIAAQgFAAAAADQAAABAAABQAAABAAAAQABABAAAAQABAAABAAQAAgCAFAAIAEAFIgRADQgKAAgFgLgAB/HHQgRgMgLgTQgJgOgFgCQgSgGAAgJQAOg0ACgMQAKgeAAgkQAAgSgCgFQgPgXgEgIQgSglgHgMIAiACIASAiIAFAMQAAAGAHAMQACAJAGABQAGACAAAIIgHAMIAAAhIAAACIgCAAIgDAJQgWA5AAAKQAAAIAFAEIATANIAQANIAJAGIAUAFIgCAEIgEgBQgBAAAAABQgBAAAAAAQgBAAAAABQAAAAAAAAQAAACAFACQAFACAAADQAAADgDADQgCgHgHAAQgBAAAAABQgBAAAAAAQgBAAAAABQAAAAAAAAQAAACAIAIQAAAEgFACQgBgIgJAAQgBAAgBAAQgBAAAAABQgBAAAAABQAAAAAAABQAAACAGABIAEAFIAAADgAgYADQAAgTgHgYIgDAAIAAgGIgVhFIgKgbIAAAAIgJgXQgLgYgTgzIgCgKIABABIAAgFIgBACIgFgFIgCgCIgBAAIgCgEIgPgGQgEgCADACIATANIAFAEIgFgCIgVgIIAAgBIgLgEIgKgEIiCg0IAAAAIgDgBIgBAAIgVgGQgSgHAGgDQACgHAIgHIAHgPIAIgQIANgMQAagVAEgDIARgIIARgNIACgBQAxgfAZAaQAJALgGAIIgHAGQgIAGgHACQgDgDgGABIgBABIgDgBIABAAIAFgEIAJgLIgCgCQgRgSgQAVIgGAEIgBgBIgDADIgEAGIgLAIIAAAAQgIAIgKAOIgBABIghAjIgCAAIgCAHIAkAMQAUABAHgHQAGgHAZAIQAZAJgGAUQAHABANAFIACAAIANAFIAHADIAAAAIAJADIAIADIAIADIADAAIAAgBQALgCANAAQAEAAAIAGQAHAEAjABIAAgBIgBAAIAHgDIAEgCIgBAAIgCAAIAAgDIAAgCIgCgCQgBgHgFgKQgEgJgDgFQAIgEgBgCQgBgDgHADIgFAAQgEABgCgCQgHgEgBgEQgFgLAWgJQAHgDARAFQAIgEgDgJQgNgGgDgJQgDgFAKgTQALgYAVgJQAIgDADADIABABIAAABQAHAAADACIADACIAFAVIABABQgNABAAAHIABADIAEAAIAKgEQADAHgDADIACAEIADAAIAFAEIgBAHQgCAKgSAEQABAEALgFQAKgEADgHQADAKgCAHQgDAHAAAFQgGAFgIAEQgQAHgOgLQgLgMgBAAIgCACIACAGQADAHAHAFQAOAKAVgIIANgHQAFATAEALQgBADgTAIIgPgCQgPACgEgCQgWgPgCABIgCADIACAFQAHAGANAEQgBADAAAEIACgBQAAAMAFAGIAIAJIAEABIAZABIADACQAFACgBABIAAABIAJAIIAAgCQAJAFAPABIABAAQAMABAPgBIAAAAIAHgBIANAAIABAAQANAAAHACQABgWAYAAQAZAAAEAKQADAJATAFIAjAAIAAgHIgCAAIgSgtIAAAAQgFgSgFgKIAAAAIgHgLIgCgGIgCgEIgBABIgDgGQgJgagUAMIgCABIAEANIAEAGIAAAAIgDAAIAAgBQgGgDgDABQgGgDgFgJIgEgIQgDgKAMgGQAegRAiAtIABACIALASIAMANIAUAgIAIAQIACARIABARQAFAKAAAHQAFAFgTAAIgUgBIgBAAIgDAAIAAAAIiDAGIgKABIgLAAIAAABIgaABIAagIQADgBgDAAIgQABIgDADIgDABIgFADIgBAAQgNALgGAVQgGAaggAHIAAAFIARAAQgDAbAAA0QACAtgBAWgAAhkEIACAAIAAgCIgCACgAAYl8IAAAAIAAAAIAAAAgAAEmJIADAEQAWgLADAAQgBgDgHAAQgUAAAAAKgAArmPIAAgCIgBAAIABACgAANmaIAAAAIAAgBIAAABgAhrj4IABgCIABAGIgCgEgAhrj5IgBgDIABACIABAAIgBABgACzlVIAAgDIABABQAEAJADABQAGACAMgFQgGAOgCABIgGABgADSlKIgBACIABgHQAGACAHgCIAFAHIgHAFIgLgHgAC/lUIgGgGQgEgGAEgNIAFAKQAHAMAEAEQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQgCAAgFgEgADjlbQgBgBAAgBQgBgBAAgBQgBAAAAAAQAAAAAAABIgBABIgDgGQALgBAFAIIAAAAIgIADIgBgCgAihmFQgCgCgCgPQALAJAGAAQADAAAIgGIABgCIgBADIgTAQgAi/mXIAIgFQAGAFAHAAIgBAHIAAgCIgOADgAigmYQAGgCALgJIAIgHQgBANgFAFIgJADIgGACQgFAAABgFgAjAmsIAAAAQAHgGALAFIgFAEIgBgBQABAAgBgBQAAAAAAAAQgBAAgBABQAAABgCABIgBABIgHgFg");
	this.shape_15.setTransform(-4.9,1.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("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ADQgVAJAFALQABAEAGAEQACACAEAAIAGgBQAHgCABACQABADgIADQADAFAEAJQAFAKABAHIABACIABACIAAAEIABgBIABAAIgEADIgGACIAAABIABAAQgkAAgGgFQgIgGgFAAIgPABIAAgCIAAgCIgIgBIgDAGIAAAAIABgDIgCADQAAgBAAgBQAAgBAAgBQAAAAgBAAQAAAAAAAAIAAAEQgHACgLAGIgKABIAAABIgLACIgMACIiIAbIgBAAIgCAAIgBABIgWACQgTADAFADQABAIAHAIIAEAQIAFARIALAOIAZAcIAPALIAOAPIACACQArAnAdgVQALgIgEgKIgGgGQgHgIgHgDQgDACgGgCIAAgBIgEAAIgBABIAAABIACgBIAFAFIAGAMIgCABQgTAPgNgYIgFgFIgBABIgCgDIgEgGIgJgKIAAAAQgGgJgIgQIAAgBIgbgoIgBAAIgCgHIAmgGQAUADAFAIQAGAIAZgDQAagEgCgVIAIAAIANgCIACAAIANgCIAIgCIAAAAIABAAIAQgDIAIgBIABAAIABAAIgBAJIgEgBIgBgBIgBABIgDAAIAAABQATAyAKAYIAKAXIgBAAIALAcgAC+hmIgHAGQgDAGADANIAFgKQAHgMAFgEQAAAAgBgBQAAgBAAAAQgBAAAAgBQgBAAAAAAQgDAAgEAEgADahXQAMABAEgIIAAAAIgHgDIgBACQgBACgBABQAAAAgBABQAAAAAAAAQgBAAAAgBIgBAAgACxhlIAAAEIABgCQAFgIADgBQAFgCAMAEQgGgNgCgBIgGgCgADdhqIAGgHIgIgGIgLAHIgBgBIABAGIAGAAIAHABgAitiBQAFADAJALIAHAJQACgNgFgGIgIgFQgEgDgDAAQgBAAAAABQgBAAAAAAQgBABAAABQAAAAAAABgAjRhzIAAAAQAHAIALgEIgEgEIgBAAQAAABAAAAQAAAAgBAAQAAAAgBgBQgBgBgBgBIgBgCIgIAEgAigiJQAEABAGAHIABACIAAgDIgRgTIgFACQgCACgFANQAKgFAGAAIACAAgAjMiHIAHAGQAHgDAHABIAAgHIgBACIgNgGgAgDlcIADgCQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQgLgFgEgJQgEgLALgVQAMgZAXgJQAMgFAKADQgIgOAEgXIgCgBIgGACQgEACgDAMQgCALgKAEIgYAEIgPAUIgfAPIgDADIABAGQADAIAOANIAJAXQAHgEAGAAQAGAAAGAFgAAdluIAAAAQAJAFAHgHIADAAIACgBQAAgKgDgIIgBgBQgDgNgHgFQgKgGgGAGQgHAFACAEIAAACQADgCAEAAQANAAgEAIQAAAJgJAAIgCAAQAEAHAFAHgAA1mAIACAFIACgBIAAABQABAAABAAQAAAAAAAAQABAAAAAAQABgBAAAAIgCAAIABgBQAHgCgFgKIgBgBQgCgNgEgOQgHgEgCAGQgDAKADAJQACgCAFABIAFABIABAGQAAAHgFAAIgEgBIADAEgACohvQADgDAEAAIgDACIgHAFIADgEgAiSiPIgDgBQAEAAAEACIADADIgIgEgAAoj3IAAABIgCAAIACgBg");
	this.shape_16.setTransform(-5.3,0.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFCC99").s().p("AAGG5QgGgEgZgEIgdgHQgUABAAgKQAIgJACgEQAFgKAAgEQgBgIAFgTIAKg3QAGgkAFgSIADgGQAGgCAAgEIAAgpIAAgbQAAgPgBgGQAOAKAZAJIgCANIAAAnQAAAFAMASQAAAFgEADIgEADQgDACgHABQgDACgCAOIgIAhQgCANgMAUQgOAbAAAHQAAAQANAJQAZAQAgAAQAQAAAHgHQAJAAAAAHIgCAHQgDgCgDAAQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAABQAAABAHAEIgFAGQAAAAAAgBQgBAAAAAAQgBAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAAAAAABQgBAAAAABQAAAAABABQAAAAAAAAQAAABABAAQAAAAAAABIgLAEQgCgEgIAAQgFAAAAADQAAABAAAAQAAABAAABQABAAAAAAQABABAAAAQABgDAEAAIAFAFIgRADQgKAAgFgLgACEG/QgSgMgLgUQgIgOgGgBQgRgGAAgJQAOg1ACgMQAKgdAAglQAAgSgDgEQgOgXgEgJQgSglgHgMIAiACIASAjIAFALQAAAGAGANQACAIAHACQAFABAAAJIgGAMIAAAgIAAACIgCAAIgEAKQgVA4AAALQAAAIAEAEIAUANIAQAMIAIAGIAUAGIgBADIgEAAQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAAAABQAAACAFACQAFABAAAEQAAACgEADQgBgGgHAAQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAAAABQAAABAHAIQAAAEgEADQgCgJgJAAQgBAAAAAAQgBAAgBABQAAAAAAABQgBAAAAABQAAADAGABIAEAEIAAAEgAgUgFQAAgTgHgYIgCAAIAAgGIgVhFIgLgcIABAAIgKgXQgKgYgTgyIAAgBIADAAIACAAIAEABIABgJIgBAAIgBAAIgIABIgQADIgBAAIAAAAIgIACIgNACIgCAAIgNACIgIAAQACAVgaAEQgaAEgFgJQgFgIgUgDIgmAGIACAHIABAAIAbAoIAAABQAHAQAHAJIAAAAIAJAKIAEAGIACADIABgBIAFAFQANAYATgPIACgBIgGgMIgFgFIgBgBIAEAAIAAABQAGACADgCQAHADAHAIIAGAGQAEAKgLAIQgdAVgrgnIgCgCIgOgPIgPgLIgZgcIgLgOIgFgRIgEgQQgHgIgBgIQgFgDATgDIAWgCIABgBIACAAIABAAICIgbIAMgCIALgCIAAgBIAKgBQALgGAHgCIABAAIACgDIgBADIAAAAIADgGIAIABIAAACIAAACIAPgBQAFAAAIAGQAGAFAkAAIgBAAIAAgBIAGgCIAEgDIgBAAIgBABIAAgEIgBgCIgBgCQgBgHgFgKQgEgJgDgFQAIgDgBgDQgBgCgHACIgGABQgEAAgCgCQgGgEgBgEQgFgLAVgJQAIgDAQAFQAJgEgEgJQgMgFgEgKQgCgFAKgTQAKgYAWgJQAIgDADADIABABIgEAQIgFgCQgGgEgIADIgHAGIgDAHQAAAIAEAJQADAHAEAGQAPAVAVgUIABgEQAFgHAGADIAFADIgBAIQgCAJgSAFQABADALgEQAJgEADgHQAEAJgCAHQgDAHgBAFQgFAGgIADQgQAHgOgLQgLgMgBABIgDABIACAGQADAHAIAGQAOAKAVgJIANgHQAFATAEALQgBADgTAIIgPgCQgPACgEgCQgWgPgCABIgCADIACAFQAHAGAMAFQgBACABAEIACgBQAAAMAEAGIAIAKIAFAAIAZACIADABQAFACgBABIAAABIAJAIIgBgCQAKAFAOABIAAACIAHAAIAPABIALAAIAKABICDAGIAAAAIADAAIABAAIAUgBQATAAgFAFQAAAHgFAKIgBAQIgCARIgIAQIgUAfIgMAOIgLARIgBACQgiAtgegRQgLgHACgJIAEgIQAGgJAFgDQAEABAFgCIAAgCIADAAIAAABIgEAFIgEANIADABQATAMAJgaIADgFIABABIACgEIADgHIAGgLIAAAAQAFgKAFgRIAAAAIATgsIABAAIAAgIIgjAAQgSAGgEAJQgEAJgYAAQgZAAgBgVQgGACgOAAIgBAAIgNgBIgHAAIAAAAIgPgBIgHABIAAgBQgMAKgGAWQgHAaggAHIAAAFIASAAQgEAbAAA0QADAsgCAXgAAmkNIACAAIAAgBIgCABgAC3h3IAHgGQAIgHACAGQgFAEgHAMIgFAKQgDgNADgGgADahuIADgFIABAAQAAABABAAQAAAAAAAAQABgBAAAAQABgBABgCIABgCIAHADIAAAAQgEAHgJAAIgDAAgACxh8IAMgVIAGACQACABAGANQgMgEgFACQgDABgFAIIgBACIAAgEgADQiCIgBgGIABABIALgHIAIAGIgGAHQgHgCgGABgAifiKQgJgLgFgDQAAgHAKAGIAIAFQAFAGgCANIgHgJgAjRiKIAAAAIAIgEIABACQABABABABQABABAAAAQABAAAAAAQAAAAAAgBIABAAIAEAEIgGABQgHAAgFgFgAiWiYQgGgHgEgBQgGgBgMAGQAFgNACgCIAFgCIARATIAAADIgBgCgAjMieIAHgHIANAGIABgCIAAAHQgHgBgHADIgHgGgAhijeIABAAIAAABIgBgBg");
	this.shape_17.setTransform(-5.3,2.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape},{t:this.shape_1},{t:this.shape_3}]},8).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_3}]},6).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_3},{t:this.shape_8},{t:this.shape_11}]},8).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_7},{t:this.shape_3},{t:this.shape_8}]},2).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_11},{t:this.shape_3},{t:this.shape_8}]},2).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_3},{t:this.shape_8},{t:this.shape_7}]},4).to({state:[{t:this.shape_2},{t:this.shape_4},{t:this.shape},{t:this.shape_1},{t:this.shape_3}]},9).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.5,-45,56.6,93.4);


(lib.SamTunRow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AgJA6QABgKAEgGQACgCABgCQACgGACgGQACgHADgIQACgFAAgHQgBgIABgJQABgUgFgT");
	this.shape.setTransform(-21.1,-3.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AAYiCQgTAKgSAJQgTAKgSAKQgEABgIABQAcgXAcgYQAJgJAJgHQAEgDAFgFQglgCgoABQgLAAgKgBQgFgBgFgCQAogWAvgIQAUgEAUgDQAOgCAPAAQgRgkgegbQAvARAnAfQAZgfAOgjQAPAfANAjQAEAJABgBQAIgSAWgGQAUgGAUgEQASgDASAEQgRAGgWAPQgJAGgHAIQATAEAYACQAfADAcALQALAFAKAJQgdgFgigCQgRgCgFAJQAoAZAhAdQAOALAKAOQgWgHgdgLQgNgFgLgGQAOAUAXAbQANAPAKAQQgTgLgZgNQgTgLgRgMQAJAUABAYQABAVADAVQgIgFgHgNQgEgGgDgFQgFgGgEgFQgIgKgOgEQgFgFgGgDQgUgMgQAEQgIgJgHgMQgHgMgKgHQgDAIgGAIQgGAJgFAGQgGgQgFgSQgDgKgCgKQgIAIgJAFQgQAIgRAGQgBgOgBgOQgBgJgDgKQgGACgFAEQgJAGgHAHQgFAEgEAGQAAABgBABQgJAPgHATQgGATgPATQgPAHgTAFQgMAEAFAKQAHAQAWAAQgBAUAFATQAGAUAKAQQABABAAABQASAGAUgLQATgKAMgQQANgQAEgUAC5hOQgGACgEAEQgLAKgEAQQgBAKgDAAADog+QAKAIAGALQAFAJgBAMQgDAVgTAKQgRAJgVgFQgVgGgLgOAEHglQAFAUgJATQgHATgBAWQgBAHAAAGQAIALAPAOQADADAEADQAAABABAAAC6ghQAOgCAKAEABPCCQAFgJAGgIQAFgJAFgIQgOAEgWgCQgDAAgDgBABJCMQgBADgCACQgCAFgEACQgOAKgVABQgLABgJADQgJADgHAGQgRALgKASQgDAGgEAIQgGALgGANQgQgIgTgGQgTgHgUAAQgVABgRAKQgBABAAAAQgRALgLAQQgEAHgEAFAEzB4QAKANAIANQAKARAKASQALARACAUQAAABABAAIAFAcAEhBhQAGAHAGAHQACADACACQAAABABABAAiiOQgFAGgFAGAAUgnQgEgTAOgRQAJgLAMgCAkgBZQAEgLAHgKQAKgSALgRQALgTALgNQAHgHALgHQATgFAUgBQAUgCBHA3IgcgaQAQAOAPAOQAPANAQAOQAOAMALAQAkqByQACgFABgEQACgEABgEAktB8QgDALgCALQgEATgCAUQgCAPgCAPQAFABAGADQACABACACQAQANAIASQAFALATAKAAiBbQgFgDgFgCQgTgKgJgPAgCCHQABABAAABQAFAOAFAQAgVBlQAIAMAGAMAAfEHQACgBADgCQAMgFAGgJAltEeQAAAAAAAAQAUgRAJgFQgLgWANgSQADgDACgCQAGgFAHAB");
	this.shape_1.setTransform(-5.4,-20.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("AplAuQBAgQAMguIAAgBQAAgKADgFIgBgOIAAgBQAegJAGAbQAFADAAAGQgBAFgCAKIgBAMIgOAUQgGAKALAPQgBAKhLAAQgUAAgKgQgAI1AMQgLAAgMgWQgDgDgDgGIgBgCQgEgBgBgEIAAgNIACgBIAAgBIABgDIgDABIAAgBIAUgNIADgEQAKANAEAdIABABQAUAWAaAIg");
	this.shape_2.setTransform(0.8,41.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFFFCC","#FFFFFF"],[0,1],-63.1,27.6,-63.1,-2.9).s().p("AncESQAAgng0AAQgGAAgEABQABAOgIAUIgSgEQgngLgQgJQgmgVgJgYIgNggQgbhMgnhJIgbgvQBaAvBgACIElAGQCOAHCfgXQCagVCcgEIEUgJIApgBIgBgBQg4gKg5ABQiHAJiHADQiRADiNATQiAASiCgCIkNgDQiCgChzg6IAAAAIglgZQgLgNgHgQQhMi8DMANQCUAFCRAlIAoABQAxAAAGgBIAAAAIgDAJIgDAJQgJgBhQgCQg3AAg0gJQiUgVhmA2QgVAcAKAVIAAAAIAAAAQAJATANAQQCBBYENgQQEOgPgXAOIDwgVQBJgGABACQBPgJClADQAmAECLgGQBTgGBLggQAogSAAgWQAAgWgkgWQg3ghhyAAIh0AEIiHADIhDABQgRABAAAEIgBABIgDgFIgMgOIBkADIEygGIBDgDQAvgBAgAHQBeASAABYQAAAHgCAJQgwBEhNASQgNANgHAPQggBVgpBQQgUAYgeAVQgEAIgIAGQgIAIgPAFQAFgMAAgDQAAgJgKAAQgDAAgWAOQgWAPAAAEIAAAFQhxAVkOAAIiGABQi/AAklgDgAgKjKIgnABIAAgBQgBgCgFgDIgFACIgOgXQAMABAYAAQAiAAAFgBQADAAABgEIAGABQAWACAOgEIgKAQIgLARQgKgCgaAAg");
	this.shape_3.setTransform(0,12.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#92E9FE","#EEF7FF"],[0,1],-26.2,-0.2,26.3,-0.2).s().p("AgRBDQiCgGg6ACIgGgcIAAgBQgDgUgKgPIgVgkQgHgNgKgNQAGADARAAIDEgEIAcgDICuACIANADIAWAHQAXAJAIAHQAmAcAAAJQAAAXhAAOQhLAhhpAAIgkgBg");
	this.shape_4.setTransform(51.7,-2.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#92E9FE","#EEF7FF"],[0,1],-3.7,0,3.8,0).s().p("AglgOIABAAQAIADAiAAIAgAAIgEAGQgCAEgDABQgPAKgUABQgLABgJADQgEgPgHgOg");
	this.shape_5.setTransform(-1.8,-5.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F1D38D").s().p("AlsDgQAUgRAJgFQgLgXANgRIAGgFQAFgFAHABIAEgeQACgUAEgTIAFgWIAEAAQAGAAgBgCIgBgEQAAgCgEgCIgBAAIADgJIAEgJQADAAAAgGIAAgBIALgVIAVgiQALgTALgNQAHgJALgGQATgGAUgBQAUgBBHA3IgcgZIAfAbIAfAbQAOAMALAQIgBAEIAAAEIAIACIANAXQAAABAAAAQgBABAAAAQAAABAAAAQAAAAAAABQAAACAAABQAAABAAAAQAAABAAgBQAAAAAAgBQADAEADAAIABACQAFAOAFAQQAJgDALgBQAVgBAOgKQAEgDACgEIADgFIAJgBQAEgBAAgFQAAgCgHgBIALgRIAKgRQgNAEgXgCIgGgBIAAgCQAAgEgYgBIgKgEQgTgKgJgOQAGABAHAAIAAAAIAAAAQALAAAMgFIABAAIAAAAIAAgBIABAAQATgKAMgQQANgQAEgVQgEAVgNAQQgMAQgTAKIgBAAIAAABIAAAAIgBAAQgMAFgLAAIAAAAIAAAAQgHAAgGgBIgBgCQgKgQgGgUQgFgUABgUQgWAAgHgQQgFgLAMgDQATgFAQgHQAOgTAGgTQAHgTAJgPIAKgMQAIgHAIgHQAFgDAGgCQADAJABAKIACAcQARgGAQgJQAJgEAIgIIAFAUQAFASAGAQIALgPQAGgIADgIQAKAHAHAMQAHAMAIAJIgKAGQgLAKgEAQQgBAKgDAAQADAAABgKQAEgQALgKIAKgGQARgEATAMIALAHQAKAJAGAKQAEAIAAAJIAAAFQgDAVgTALIAAAAQgLAGgLAAIgBAAIAAAAIgMgCIgCAAQgWgGgLgPQALAPAWAGIACAAIAMACIAAAAIABAAQALAAALgGIAAAAQATgLADgVIAAgFQAAgJgEgIQgGgKgKgJQAPAFAHAKIAJALQAFAUgJAUQgHATgBAWIgBANQAIAKAPAOIAHAGIABABIAAACQAAAEACACIAGABIAMAOIAEAFIABACIAAABIABABQAKAMAIAOIAVAjQAKARACAUIABABIAFAcIlNAQIAFgDQAMgFAGgJQgGAJgMAFIgFADQhlARhpgEIgbgDIAJgMQAKgQARgLIACgBQAQgKAVgBIADAAIAAAAIAAAAQAQAAAQAFIAEACQATAGAQAIIAMgYIAHgPQAKgRARgLQAHgGAJgDQgJADgHAGQgRALgKARIgHAPIgMAYQgQgIgTgGIgEgCQgQgFgQAAIAAAAIAAAAIgDAAQgVABgQAKIgCABQgRALgKAQIgJAMQgcALgXgKQgTgKgFgLQgIgSgQgNIgEgDQgGgDgFgBQAFABAGADIAEADQAQANAIASQAFALATAKIg3ADIgWAEIghAEIgCABIAAAAgAiUB+IgFAPIgEALIgDAFQgFAFAAAKQAAgKAFgFIADgFIAEgLIAFgPQADgFAAgHIAAgBIgBgLIAAgGIAAgIQAAgQgDgPQADAPAAAQIAAAIIAAAGIABALIAAABQAAAHgDAFgADThdIgBAAIAAAAIgBgBQgFgCgHAAIgBAAIAAAAIgIABIgBAAIABAAIAIgBIAAAAIABAAQAHAAAFACIABABIAAAAIABAAgAAVhlIgBgJQAAgOALgNQAJgMAMgBQgMABgJAMQgLANAAAOIABAJgAj8DUIAAAAgAAgDJIAAAAgAgDAAIAAAAg");
	this.shape_6.setTransform(-5.5,-14.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#92E9FE","#EEF7FF"],[0,1],-23.9,0.6,22.7,0.6).s().p("AgyBKQhHgQhAgkQgegXgLgLIAAAAIAAAAQAfhCBhgKQBhgLCOAcIBWgBIgFAWQgEATgCAUIgEAdQgHgBgGAFIgFAFQgNARALAXQgJAFgUARQggADghAAQhLAAhJgSg");
	this.shape_7.setTransform(-58.3,-1.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("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");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.4,-50.4,178.9,99.9);


(lib.MickLegR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("AA1B/QgHgHAOgOIARgNQAMgMgBgXQAAgUgFgEQgDgDhvgBQhwAAgSgSQgNgMgGg2QgEg0AIgMIAAAAIBngNQgBAGADAJIAFAQQAEAVgFAQQgEACgEADQgNAOAHAFIAEgCIASgUQAIgCAtATQASAIAiASQARAJA5AHQA2AGADADQAGAGgBAHQAAAOgMAKQgRAPgHAOQADAmgOANQgHAIgkAAIgBAAQgiAAgEgFg");
	this.shape.setTransform(1.2,8.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABpDpQglgBgHgHQgJgJADgEIAdgeQARgRgLggIhvgCQhwgBgUgUQgOgOgFg0QgDgkACgfIgZADQgEgEAEgiIAEgrQABgIAJguIAIAAQgMAtgEBUIAYgCIAtgHQAFAAAcgGQAEAAALACQALABADgEIAVgqIADgIIAAAAQAEgIAMgKQATgPACgKQAEgSAAggIAAgKQAAANgCgKIgCgWQgGgIgMgHIABgBIAEgCQAUAAADAoIABAHIgBAVQgBAXgGAMQgFAOgcAfIgCADQgMAfgJALQALA3gEAMQAggEBMAuQATAKA2ADQAwADAKAKQAHAHABALQACAQgRAQQgTATgCADQADAogPAPQgKAKgmAAIAAAAgAikgYIAAAAQgIAMAEAzQAGA2ANANQASASBwAAQBvABAEADQAEAEAAAUQABAXgMAMIgQANQgPAOAHAHQAFAFAiAAQAkAAAHgIQAOgNgCgmQAHgOAQgPQANgKAAgOQAAgHgGgGQgDgDg2gHQg4gHgSgJQghgSgUgIQgrgTgIACIgTAUIgEACQgHgFAOgOQADgDAFgCQAEgQgEgUIgFgQQgDgJACgGg");
	this.shape_1.setTransform(0,-1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AhSgaQAhgqAPgJIAAgBIACAAIAHgBQAcgEAVgRQAjAAARgBIgBABQANAHAFAIIAEAWQABAKAAgNIABAKQAAAggFASQgCAJgTAPQgNAKgDAIIgBAAIgDAIIgUAqQgEAEgKgBQgMgCgDAAQgbAGgFAAIguAHIgYACQAEhUAMgsg");
	this.shape_2.setTransform(-9.5,-13.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.1,-24.3,40.2,46.6);


(lib.MickLegL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("Ag1CpIgEgCIgHgGQgLgJgBgEIASgUQAaABANAFQAJAFADAAQAJAAALgOIAJgPQAAgGhJg2QhIg1AAgfQAJgYACgNQACgXADgMQAHgbAYgZIARgPQAYAIBEAOIAaAVIggAlQgEAFg1AfQADAFAcANQAJAFAFASQAMAsABADQATAfANAQQAFAGAgALQAbAKAAALQAAAMgyAPIg0AdQg3AAgRACQABgCgEgDg");
	this.shape.setTransform(-2.5,7.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgWBCQgNgJhMgMIgDgBIgCABIgCgBIAzg7IAHgJIALgNQAagcAcgQQAQgSARAIQAaAAAUARQAKAAgFAKQAVAEAGAtQAIAmgNADIgFAAIgnAeQgxAmgCAAg");
	this.shape_1.setTransform(3.2,-15.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhID1IgBABQgGACAAgCQAAAAABAAQAAgBAAAAQABAAABAAQABgBABAAQgKgDgHgFQgMgIAAgJQAFgcAcAAQAPAAAMAGIAOAEQAGABAJgLQAIgKAAgBQAAgChJg2QhIg3AAgiQAAgKADgGQAFgHADgNQABgcADgKQAGgRAVgcQALgPAIgHQgBgBgBAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAlgvAdggIAGgHQAVgWAPgNIgGABIAAgBIAHgEIABABQAOgLAJgEIAAAJQgdARgZAbIgLAOIgHAIIgzA8IACABIACgBIADACQBMALAMAJIAnAcQACAAAxgmIAngeIAFAAIAGAAIgxAlIg2ArIgGgEQgZAtg4AWIABABQAjANAFAcIAEAXQACAPAGAJQAWAmALAJQAVARAZAGQAPACgBANQABATgxALQgDABgWAQQgdAQgpABQgWgBgPgEgAhiDaQABAEALAJIAHAGIAEACQAEADgBACQARgCA3AAIA0gdQAygPAAgMQAAgLgbgKQgggLgFgGQgNgQgTgfQgBgDgLgtQgFgSgJgFQgdgNgDgFQA1geAEgFIAgglIgagVQhEgOgYgIIgRAPQgYAZgHAbQgDAMgCAXQgCAMgJAYQAAAfBIA2QBJA2AAAGIgIAPQgLAOgKAAQgDAAgJgFQgNgFgagBIgSAUgAgBjeIABAEQgCADgJABgAAaj5IAAAAIAAADIgBACg");
	this.shape_2.setTransform(-0.3,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-25.2,30.7,50.3);


(lib.MickArmL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("ABcDnIAAgFQgSgIgtgbQhIgsgPgVIgQgXQgDgGgFABQgFABgCgFIAAgLQAAgEAHgUIgMgXQgNgVAAgSQAAgaASgbQARgaAAgIQAAgNgcgHQghgIgKgTQAHAAAKgEQgGgJgJgFQgGgDAAgGQgBgHALAAQAMAIAGAAIAFgBIAAgEQgLgKgOgUIAAgGIAIAAIAvAXIAEgBQgDgJgKgMQgIgJAAgHIABgLQA1AYAHA8IAFABQADAAAIgLQAHgMAEAAQAKAAAAAgQAAATgMALQgMAMAAAOQAOAXAAAbQgIAtAAAKQAAAHADACIABgBQA6AdAWAdIALAQQAJARAMgGQAOgHAKAKIAcAhIABAAQACAYgIAVQgMAcgbADIgCAAIgFABIgEAAg");
	this.shape.setTransform(0.1,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABcDvIiEhPIAAAAQgJgGgOgVQgNgVgOgJQgGgEAAgPQAAgDAHgWIgMgVQgNgWAAgTQAAgbAHgJQAQgWAMgbQgGgHgjgPQgegNAAgMQAAgKAKAAQgOgJAAgJQAAgOARgCIgIgWQAAgKAKAAIAkAMQgJgGAAgPQAAgRAJgBQAXAAAWAiQASAaADAVQADgCAEgIQAFgHAJgBQAMAAADAUIABATQAAAUgLAOQgNAOAAAHQAOAWAAAdQgFAYgCAiQAMABAfAXQAaATAMANQAKAKACAHQAIAPAMgDQAQgEAIAFQAMAHANAWIACAAQAFAAgBAfQgDBAg3ABIgFAAgAhJBnIAQAYQAOAVBIAsQAuAbARAIIAAAEIAEAAIAGAAIACgBQAbgDALgbQAIgVgCgYIAAgBIAAABIgdgiQgKgJgOAHQgLAGgKgSIgKgPQgWgeg6gcIgCAAQgDgCAAgHQAAgKAJgtQAAgagPgXQAAgPAMgLQAMgLAAgUQAAgfgJAAQgEAAgIALQgHALgEAAIgEgBQgIg7g0gYIgCAKQAAAIAIAJQAKALADAJIgEABIgvgWIgHAAIAAAGQANAUALAKIAAADIgFABQgFAAgMgIQgLAAAAAHQAAAGAHADQAJAGAFAJQgJADgHAAQAKATAgAIQAcAIAAANQAAAHgRAaQgRAcAAAZQAAATAMAVIANAWQgIAVAAAEIABAKQABAGAFgBIADAAQAEAAACAEg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-23.8,31,47.7);


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


(lib.DoogBod = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTBDQgKgCgFgDQgDgCgBgCQgCgDABgGIAAgCIACAEQACABASAAQARAAAHgDIAQgMIACgBIAJgKIAAACQABABgDAFQgDAFgQARIgHAGQgJAGgJAAIgHgBgAAXAlIgBACIACgCIAAAAgAAdgDQACgDAAgGQAAgNgKABIgEAAIgBgQQAAgNAMABQALACABAMIAAAMQAAAXgKAAIgBAAgAgQgPQgCgDADABIADgDIAAgHQgBgOgFAAIgHABIAAgHQgCgHACgHQACgIAJACQAJABABAMIACANIAAAXQgIAEgDAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAgBg");
	this.shape.setTransform(-7.8,-14.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgwAwQhVgQAEgtIAjAFIgSgDIgCgCQASADAiAAQBMAAAogTQAWgLAEgLQApACAKAzQhMAyhEAAQgSAAgRgEg");
	this.shape_1.setTransform(5.8,24.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("AgbDpIgEgBIgCgCIABgBQgLgEAAgTIAAgLQABgHgGgEQgLgHABgRQAAgLgBgFQAAAAABgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIgHgGIg7grQgEgDgGgIIgNgWQgJgOgEgbIgBgIIAHgcQADgPAQgNQARgNAIACIAAgHIAAAAIAAgBIAFAPQAQAWAwAAQAaAAAAgEQAAgEgtgCQgqgIgDghIAAgEQAAgSAMgSQAHgKADgGQAHAFAHAAIAFAAIABgFQgegPAAgFQAAgBAAgBQAAgBABAAQAAgBAAAAQAAAAABAAIARADIABAAQAGAEANAAQAJAAACgJIAAgJIgBgYQgDgWgNABQgMABgBADIgDAEQgCACAAgKQgCgHAEgBIAEgBIAJgBQANAAACADQACADACAAQAGAAADgHQACgIADAAQAPAAAGALIAEAMQABAHAMAKIABADQAgAMACAfQgMABAAAOIABAHIACABIAEAAQgDgOAJgCIACACIACgCQAHABAFAKIADALQAAAIgQAFQgQAGAAAQIABAFQAAALACAHIABACIADAFIAEAAQAKgGALgDIAagBQAQAAAMAFIAEADQAMAJALAWIACAEIABAEQACAJAAAJIAAANIAAADIgEAJIgCACIAAABQgIAQgNAMIgDgCQgGAXABAgQgBAEAMAVQAMAWAZAoQAAAFgZAPQgeARgeAAgAAdDKQAAAFAEAIQAGAMAHAAIAEAAIABgDQgNgLgBgHQAFgNgIgEQgFAEAAAJgAgMDPQAAAOAHAAIAFAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQgGgCgBgJQAAgJgCgDQgDADAAAKgAAHDEQAAAJAFAAIAEgBIAAgRIgEAAQgHgBACAKgAgbCXQAAAGAGAJQAGAJAIAAIAFAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAgBAAgBIgSgPIAAgJQAAgGgEgCQgDAFAAAHgAASCHQgBADAAAGQAAAGAGALQAIAOAHAAIAEgDIAAgCIgQgSQgDgDAAgHQAAgFgCgCIgCgBIgBABgAheBrQAAAFAEAAQArgBAIgIIgEgFQgzAIAAABgAgMBMQAAAIAHAJQALAOAYAAIAdABQANgBACgGQhDgFgHgIQgDgGgGgOQgDAEAAAEgAhdhjQAAANAEAHQAGALAMACQAWACARgPIADgCQAQgOADgLQAHgEgJgLQgbAfgWgDQgWgDgHgFIgDgDIAAAFgAgPjHQgRABgCAPQgEAvAWAAQAPAAABgQIAAgPQAAgggOAAIgBAAgABmhDIAAgBIACABIgCAAgAgWhnIAAAAIgCACg");
	this.shape_2.setTransform(-3.1,-0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("ABBBBIAAgBQAAgHgIgSQgMgXgNAAIgEAAIgTgeQgIgNgQAAQgKAAgCANIgCABQgDAAgQgFQgOAAgSAOQgPAKgFAKIgBAAIAAgHQAjgeAAgFQAAgCgOgDIAQgKQAGgDAKACQAJACAHgIQAAAAgBgBQAAAAAAgBQAAAAAAgBQABAAAAgBQgBgBgYAAQgVAAgNADQAHgSA0AAQArAAAKAPQABALACAGQgDACAAAEIAAADQAAAAAAABQABAAAAAAQAAAAABAAQABAAABAAQAEAAAAgCQAAgEALAAQAhAAARAaIAMAcIAAABQgGgDgFAAIgBAAQgKgSgZgQIgEAEIAbAcQANAPAAANQAAAGgEAEIgDgCIAAgCQAAgIgJgTQgMgYgMAAQgDAAgBADIASAXQAMAQAAAIQAAAHgEALQgEgDgEgBg");
	this.shape_3.setTransform(-4.6,-22.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("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");
	this.shape_4.setTransform(0,-2.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgvA3QgHgHgDgGQgCgDAAgCQAAgDAEgGIABgBIAAAEQABACAPAJQAQAKAIAAIASgCIADAAIANgEIgBACQAAABgFADQgFADgWAGIgJACIgFAAQgMAAgIgIgAAgATIgBAAIgBgBQgGgEAAgIQAAgEAFgFIAAAAIABgDIAAAAIACgDQAAAEAIAAQALAAAAgJQABgJgJAAIgDAAQAFgHAIAGQAKAHgFALIgGAJQgKAQgHAAIgDAAgAgDgPIABgCIgBgGIACgNIACgFIABgBQABADAGAAQAMAAAAgKQgBgKgHgBQAFgFAGAGQAHAFgFALIgEAMIgMAVQgMAAgBgFg");
	this.shape_5.setTransform(-5.8,-16.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFCC99").s().p("AgbDpIgEgBIgCgCIABgBQgLgEAAgSIAAgMQABgHgGgEQgLgHABgQQAAgLgBgGQAAAAABgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIgHgFIg7gsQgEgDgGgIIgNgWQgJgOgEgbIgBgIIAHgcQABgJAHgIIAAgFQAFgOAXgDQAXgEAEABIABAAQAIAIgFgGIACABQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABIAAABIAIAFIABAAQAWANACgDQACgEgmgYQgggcAOgeIACgEQAJgPATgKQALgFAGgEQADAIAHADIADACIADgCQgRgdACgEQABgBAAAAQABgBAAAAQAAgBABAAQAAAAAAAAIAOALIABABQACAHALAGQAJAFAGgHIAFgIIAKgVQAIgVgLgFQgKgFgCABIgFACQgDABAFgIQACgIADACIAEABIAIADQALAHABADQAAAEACABQAFADAFgFQAGgFADABQANAIAAAMIgDAMQgDAGAIAQIgBAEQAVAZgNAcQgMgEgHAMIgDAHIABABIAEACQAFgOAIADIACACIACAAQAGAEgBALIgCALIgCACIgEACQgFACgLgCQgQgDgIAOIgCAFQgFAIgBAGIAJgEIACgHIADgFQAFgJAOADIAEgBIABAAIAAAAIAKAAIAHAAIABAAIAZgBQAQAAAMAFIAEADQAMAJALAXIACADIABAEQACAJAAAJIAAANIAAADIgEAJIgCACIAAABQgIAQgNAMIgDgCQgGAXABAgQgBAEAMAWQAMAVAZAoQAAAGgZAOQgeASgeAAgAAdDKQAAAFAEAJQAGALAHAAIAEAAIABgDQgNgLgBgGQAFgOgIgDQgFADAAAJgAgMDPQAAAOAHAAIAFAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAgBAAgBQgGgBgBgKQAAgJgCgDQgDADAAAKgAAHDEQAAAJAFAAIAEAAIAAgSIgEAAQgHAAACAJgAgbCXQAAAHAGAIQAGAJAIAAIAFAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAgBAAAAIgSgQIAAgJQAAgGgEgCQgDAFAAAHgAASCIQgBADAAAFQAAAGAGAMQAIANAHAAIAEgDIAAgCIgQgSQgDgCAAgIQAAgFgCgBIgCgBIgBABgAheBrQAAAFAEAAQArAAAIgJIgEgEQgzAHAAABgAgMBMQAAAIAHAJQALAOAYAAIAdABQANAAACgHQhDgEgHgJQgDgGgGgOQgDAEAAAEgAAmg2IABAAIgCgBIABABgAhUiGQgGALAAAIQgBAMAKAIQARANAXgEIADgBQAVgEAIgIQAJAAgCgPQgoAOgRgNQgSgOgDgIIgBgEIgDAFgAAJiyQgaAnARALQANAHAKgMIAIgNQAQgcgPgIQgGgDgFAAQgHAAgFAHgABmhDIAAgBIACABIgCAAgAh1hXIgBgDIAAgEIADAJgAh2huIABgCIABAAIAAgBIgCAMg");
	this.shape_6.setTransform(-3.1,-0.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFF00").s().p("AAfBYIABgBQADgGACgUQACgagMgHIgDgBIgCgjQAAgQgOgIQgIgFgIALIgCgBQgDgBgMgNQgMgHgXAEQgSACgJAFIgBAAIADgGQAvgJACgEQABgCgLgKIATAAQAGAAAJAHQAGAFAJgDQAAAAAAgBQAAgBAAAAQAAAAABAAQAAgBABAAQAAgBgUgMQgSgLgNgEQAPgMAsAaQAmAWABASQgEAKgBAGQgEAAgCAEIgBACQgBABABAAQAAAAAAABQAAAAABABQAAAAABABQABAAABAAQABABAAAAQABgBAAAAQABAAAAgBQABgDAKAGQAdAQACAeIgFAfIAAABQgDgFgFgDIgBAAQABgWgOgaIgFABIAJAnQAEATgHALQgDAGgGACIgBgFIABgBQAEgHACgVQABgbgKgGQgDgBgCACIAEAdQADATgEAHQgEAHgJAHQgCgEgDgDg");
	this.shape_7.setTransform(0.2,-20.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("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");
	this.shape_8.setTransform(0,-2.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_1},{t:this.shape_5}]},4).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},15).wait(81));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.4,-29.8,39,59.6);


(lib.DoogArmRt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjsArQAAgEADAAQgJgKAAgIIABgEQgDgFAAgGQAAgFAKAAIAmANIALAAIgBgIQAAgKAIAAQATAAAQANQAPAOALADQAEABAFgBIA8gWIASgFIgEABIA3gHIAIgLIAJgKIAKgKQAUgPAZgFIAVgDIASgUIAHgFIAIgEQAUgFAUADQAKACALADQAIACAHAEQAOAIADANIAFAWQACAMgHALQgIAOgPAGQgMAFgNAEIgSAFQgRAFgPAIQgYAMgWARQgOALgSgBQgMADgLgCIgYAHIgLABIgNADQgVADgVgEQgNgDgOgCIgggIQgRgFgLAPQgLAPgXAAIAAAAQgsAAgWgzgAjnArQAIAOAOAPQAQASAWAAQAWAAALgPQAKgPAGACIAOADIAaAFIAgAFIAkAEIATgCIAUgFIATgGQAHADAHAAQAIACAIgEQAJgDAIgGIALgIIAGgEQASgNAWgKIARgJIABgBIA2gVQASgGAAgXQgEgagDgDIgGgFIgHgIQgIgHgLgBQgYgDgYAHQgLADgIAHQgGAGgEAJIgYADQgMAFgLAFQgLAFgLAHQgFADgFAFIgJAKQgIAKgNACIgUADIg3AQQgeAJgIAEIgIADIgDABQgMABgWgRQgWgRgKAAQgFAAACAJQABAJgLAAQgOAAgLgGQgMgGgHgBIgFACQAKAYApAOIAAABIAAACIgJAAQgcgNgMgMQAEAKAnAjIAAACIgDAAIgcgYIgFgEg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("AjQBIQgOgPgIgOIABgCIAFAEIAcAZIADgBIAAgCQgngjgEgJQAMAMAcANIAJAAIAAgCIAAgCQgpgOgKgYIAFgBQAHAAAMAHQALAGAOAAQALAAgBgJQgCgJAFAAQAKAAAWAQQAWARAMgBIADAAIAIgEQAIgEAegJIA3gQIAUgCQANgDAIgJIAJgKQAFgFAFgEQALgHALgEQALgGAMgEIAYgEQAEgIAGgHQAIgHALgCQAYgIAYAEQALAAAIAHIAHAJIAGAFQADACAEAbQAAAWgSAHIg2AVIgBABIgRAJQgWAJgSAOIgGADIgLAJQgIAGgJADQgIAEgIgDQgHABgHgEIgTAHIgUAFIgTABIgkgEIgggFIgagFIgOgDQgGgCgKAPQgLAPgWAAIAAAAQgWAAgQgRg");
	this.shape_1.setTransform(-0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-9.4,49.1,18.9);


(lib.BuffyHangin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAeAFQgDAJgDAEABJgIIACgBIgBAAAg/gRIgJAFIgCgD");
	this.shape.setTransform(5.5,-81.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF00FF").s().p("AgDE0QgRgWgdgbIgdgaQgygsgVgUIgHgHQA1AFA2gEQAegCAdgFIAigHQAhgHA1gQIBXgZIAGAHIAoBDIgVAMQggATgiAMIgBAAQhCAXgYAPQgPAKgaAZQgVARgWAAIgEAAgAiBiUQhSgKgagYQgbgaACgaQACgYAZgTQAYgSAlgHQAngGAmAJIgPAgQgIAXATAGQAEgIAFgSQAFgTADgHQARgIASgEQAbgHAaACQAjADAsASIBNAkQAtAUAhAFQgjAYhFAYQhDAWg2AHQgeAEggAAIgEAAQglAAgngEg");
	this.shape_1.setTransform(7.6,-10.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAcAYIgNAAIgmAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBgBQgIgCgDgFIgIgIQgGgGgDAAIgMgYIABAAIAMADIAFAEIARAQQARALAeABQAXABAegEIghARQgBgBgGAAgAgwANIACACIgBAAIgBgCg");
	this.shape_2.setTransform(1.1,-71.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC3333").s().p("AAPAfIgaAAQgOgBgHgFQgIgFgIgPIABAAQANAOALAAIA0gBIgOAIIgDACIgBABQAAAAAAAAQAAABABAAQAAAAABAAQABAAABAAIAAAAIAAABgAAPgHQgagBgHgDQgFgCgNgJIgLgIIABAAQAeAFALAGQAGAEAOABIACAAIAUACIAMAGIgigBg");
	this.shape_3.setTransform(1.1,-70.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FAFFFF").s().p("AAkAvQgPgCgCgHIAOABQAJAAAHgCQACgHAAgJQAAgLgCgGIgOgBIgEgBIAFgFQANgcAqAUQAHAbgTASQgHANgcAAIgIAAgABPAhIACgCIgBAAIgBACgAhDAZQgIAAgEgEQgIgDgFgJIAIABQAPAAAEgGQABgCAAgJQAGgWgXAAQgGAAgFACQAFgJAJgKIAeAAQAHAGAGATQACAHgGAKQgBAXgRAFIgJABIgBAAg");
	this.shape_4.setTransform(4.9,-85.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CF9767").s().p("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");
	this.shape_5.setTransform(-1,23);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#524740").s().p("AkQNcIAEAAQgBAEABAYQABAPgEAHIgBACgAjvNVQgBggAGgNQgBAIABAqQABAggFANQAAgJgBgpgAFIMqIgCgGIAEAGQALAQAGAVQgMgQgHgVgAEyMoQgCgLAAgRQAAgaAFgKIAABJIgDgJgAg7MGQAMgXAIgUQgDAWgMAWQgKATgRATQAMgUAKgTgAjrKrQAAgRAFgEQgBADACAXQABARgGAEQABgEgCgWgAFKGpIAFAuIAAAQQAAAngFAYgAjxHEIADgCQACAKgCAIQgBgIgCgIgAANC4QgUAAgGgFIA2AAQgGAFgVAAIgBAAgABtkRQAZAHASAPQgZgIgSgOgAhqkVQgWgBgEABQAEgGARABIAaABQgEAEgNAAIgEAAgACgmjQAhgOAbAOgAimmjQAJgGAXAAQAXAAAJAGgAkmnsQgZgSgJgaQALAXAaASIAwAcQgigNgRgMgAjrpfQAAgXAFgOQABAEgBASQgBAOAFADIAAAeQgKgDABgdgAjMqyQABgXgGgIQAKgQAAAmQABAlgGAKQgBgGABgggAlZqZQgEgdAIgVQAGgOAQgSIgSAiQgIAVAFAbgAhEsLQATAAAGAGQgIABgSgBQgPgBgGAFQABgJAVgBgABcsbQgBAHgSgCQgRgCgCAGQgKgJAwAAgAjuuPQgCAfggAIQAZgNAJgag");
	this.shape_6.setTransform(4.8,-14.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9E9E9A").s().p("Ak9MkIAAghQgCgVAGgGIAAA8gAFdo/QARgTgFgeQgGgdgSgMQAOgSgJgZIgKgVIgIgSIAGgNQAFgHAGgCQgFAYARAMIAGAEIAIAFQAIAGAEAFQAAAJgJATQgHAQADARQAUAJAEAbQACARgEAhIgIABQgQAAgPgKgAlnp7QgBgHALgCQALgCAAgGIAXhSQAOgxASgLQAFA4geArQAIAlgJAfQgJAfgYANQgRgaAAgagAE2pxQgGgGgFgRIgHgcQgGgPgJgEQACgTgDgPIgCgGQgDgIgLgVQASgNgBgaQAQABAFANQAEAJgBAVIAAAeIABAEQACASALAHIgEATQgEAMAAAIQABAKALAKQAMAKABAJQgGACgFAAQgHAAgEgFgAkTqmQABgSAAgEQAAgfAVguQAFAIAAAXQgCAgABAGQgCAGgKAQQgJANAAAMQgGgDABgOgAmGq3IABgaIAEAAIAAAvQgGgEABgRg");
	this.shape_7.setTransform(9.2,-8.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("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");
	this.shape_8.setTransform(-0.9,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.BuffyHangin, new cjs.Rectangle(-73.3,-113.6,144.7,259.4), null);


(lib.Bkr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AfRn8IAAP5Mg+hAAAIAAr2");
	this.shape.setTransform(-2.9,77.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AfRkxIAAAAIAAB5AfRiqIAAEWAfRk/IAApDMg+hAAAIAALuAfRB0IgBIDA/QiBIAAAAIAADqIAAMa");
	this.shape_1.setTransform(-2.9,-38.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#78FEE3","#F8DDFF","#FFFFFF"],[0,0.525,1],2.6,-31.9,2.6,28.7).s().p("A/Ql2MA+hAAAIAAJCIgBAAQgFAAgFgCIgFgDQgDgCjMgCIgJAAIgFAAIAAAAQgEgBgGAAIgCAAIgCgCQhXgDgJAJIgvgBIiSAAIgOgFQgHgCgTgLQgigSgiAAIgsABIgJgDIh9AAIgHgCIgSgEQgdgMgHgCQg1gSgdAAQgRABgMAEQgNADgOAAQgSAAgGgFQgGgGgNAAIgEAAIgGgBIgXAAQgZgGg5AAIATgcIAkgvIAegwQANgOAlgjQAvg2AngmIAAA+QgJAOAAADQAAADAFACIAeg1IAAAUQAAAUgKAlQAAAEADABQAUgOALgYIASglQAMAdAFAgIACABQAagWAEgIQACgHAAgaQAAgNgJggQAKAKAkAvQAMAAAAgaQAAgTgGgKQgNgQgMgVQAzgBAAgGQAAgehOAGQAbgOAAgIQAAgIgLAAQgjAAgYAaQAAgtgEAAQgiAygIAAIgBAAQgdg9gnAAQgDAAAAAEQAAAGAnA+QgQgEgxgBQgiAAglANQgfALAAAEIABADIAFABIAsgCQA5AAAgANIAUAJQg4Avh2CJQgQASglA/IgBgBQgig0gJgoIgJg2QgEgdgGgGIAAAAIA7AmQAEAAAAgLQAAgLgCgEIgNgUQgGgIgPgLIgVgQIAIAAQATAEAMARQARAZASAAQAJAAAAgQQAAgwg6gJIADgCIAsgDIAuABQAEABAAgFQAAgFgQgIQgWgLghAAQguAAgkANIAAgBQAGgJAlgbQARgNAQgEQAOgEAXgBQAQAAAAgFQAAgJg0AAQgsAAgjAWQgdASABAMQgIgsgTAAIgDABIAAAHQADAMAAAQQAAAUgHAUQgXgTghAAQgTAAAAADQAAAFAmAeQgVgIgjAiQghAeAAAKIABAEIADABQAEAAAYgQQAfgNAjAGQgwAcAAAuIABAMIADAAQAIAAAcgfQAdggAYgEIgBAAQgmAsAAAXIAAAFQABAFAHAAQAGAAARgRQAQgRAEgHQAEgHAYgPIAIgGQAEArA2CBIACAIIgXAAQgPgFhpgMQgEAAgSgIQgTgIgEgEQgVgVgUAAQgRAEgQgBQgPABgvgVQgwgUgpAAQgbAEghAAQgYAAgSgMQgRgMg4gBQgUgBgjgKIgggKQg5AAgIACIgHACQgFgCgPgCQgZgDgEgFQgNgPgYAAQgSAAgwAPQgZAJgWAJQhHAQggASQhAAbgUAMQg5AghBAAQgZAAgIgEQgIgDgLAAQgOAAgsARQgmAOgRAJQgrAWhOAQQjSAhggAJQgKgIgPABIgSADQgCgagBgEQgFgLgSAAQgPAAgXALQgIgagfAAQgWAAgNAWQgIgHgOAAQgrAAAAApQAAAIACADIgBAAQghABgKAJQgFAGAAANQAAAFAEANQgFgGgZABQghgBgPATIAAgGQAAgZgjgJQApgPAhgJIgCgEQgKgPgRAFQghAIgDAAQAOgKAagNIAdgNQAHgDAAgHQAAgHgIgBQghABg9AdQAGgIAJgPQAKgPASgIQAHgDAYgVQAZgVAAgDIAAgCIgEgBQgDAAggALQghAKgHAEQgOAHgWAbIAAgIIAKgxQAUgwAAgDIAAgDIgDAAQgrAagWAlQgNAVgOAqQgvhAgCAAIgDABIAAAFIAvBsIhfg8IgCABIAAAFIASAvQALAdAfARIg6ABQgJgEgeAAIgUAAQABABAAAAQABABAAAAQAAABAAAAQgBABAAABQAQAJAuAQIAfANIATAPQgJAHgCANQgcgSgLAAQgcAAgIAVQgEALACAMIgCAAQgBgIgEgGQgIgKgXAAQgaAAgJAOQgEAHAAAKIAAAAIgDABQAAgKgPgNQgTgQgbAAQgKAAgPAeIgPgOQgJgHgYAAQgQAAgDAVIAAAZIgbgNQgUgHgUgBQgOAAgiAegAbZDKIAAgCIAHABIgDABg");
	this.shape_2.setTransform(-2.9,-90.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#00FF00","#006600"],[0,1],0,0,0,0,0,17.6).s().p("AidBNIATAAQAMADApAAIAjAAQABAAAAgBQAAAAAAAAQAAgBAAgBQAAAAAAgBQgkgagFgQQgSgngBgEIABgBQAvAbAsAdQAEAAAAgEQgdg/gKgYIAAAAQAFAJAOAPQAPARAEAAQABAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAQAJgqAJgTQARgfAlgaIABABQgWAvAAA1QAAAPADAEIADgBQABgWAVgUQAcgZAygHQgoAggWARQgEACgPAWQgRAVAAADIABAEIACABIAvgaQAMgGArgHIAFAAIAAADQgJAEgoAVQguAZAAAFIABADIACAAQAJAAgEgEQAGgEA6AAQgHABgeAKQggALAAAFIAQABQASAFAFAOQADAHACALQgXgOgLAAQglAAgCAcQgIgIgPAAQgbAAgEAOQgMgEgEAAQgPAAgKAFQgQgOhTghg");
	this.shape_3.setTransform(-152.9,-74.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#00FF00","#006600"],[0,1],0,0,0,0,0,17.2).s().p("Ag/BtQAPgkADgCIASgTQAHgJAPgEIAMgCQAAgDgLAAQgnAAgeAeIgsAoIAAgJQAIggAHgGIATgSIANgIQAbgKAEADIgBgBQhRgBgkANIAAAAQAKgSAOgMQAIgHAPgFQARgIALAAQAFAAAAgDQAAgBgNgOQgOgPgFgDIAXAAQAHADAlAWQAAAAABgBQAAAAAAAAQABAAABgBQAAAAABgBQgDgFAAgDQAHgVAAgKIAAgfQAHAJAMAhQACABAbglQAwgXALAAQAYAAAfADIgBAAQgigBgSAJIgcASQgmAUAAASIAAADQABADAGAAQAGAAALgHQAKgGA2AAQAkAAAIAFIARAKQhmgBAAALQAAAFAiAGQAhAMAAAhQAAAKgFgBQgEAAgXgWQgYgWgTAAQgLAAAAAFQAAAFAXAQQAbAVAKAWIAAAHQgTgIgZgTQgVgPgCAAQgHAAAAAIQAAAJgNAJQgVAPgIAJIgsArg");
	this.shape_4.setTransform(66,-103.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#00FF00","#006600"],[0,1],0,0,0,0,0,17.7).s().p("AAUBBQACgigHAAQgKAAgJAlIgBAAQADgcgBgQQAAgcgNAAIgHACIgCgCIgCABQgTgMgIgCQgmgLgJgBIhDAAQAfgOAFgBQAFgBAoAAQA2AAAHAFIAGAFQAEAAAAgHQAAgUgmgvQApANAUAvQAFAAAQgSQAPgRAFgKIAAAnIAEABQAFAAAQgOQAJgGAZgIIALAAIAAAFIgUAJQgNAGAAAGIACADIAuABIAZAEQALAGAAAHQg3ACAAADQAAACARAWQASAWAAAVQAAAOgFAEQgRgUgIgNIgeggIgDABIAAAFQAOArAAANQAAAogWALQgVhIgFAAIgDACQgDAtggAgQAGgPAAgeg");
	this.shape_5.setTransform(102.3,-107.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FFFF99","#FEB770"],[0,1],-9.6,-41.4,12.8,42.1).s().p("A7FGNQifgCgMgKQgDgCACgEQgDgDgfAAQgFAAgdAIQgVAGgOAHIAAsZIAFAAIAAABIA5AEQAmACCygBQAAAIACgFMA2lAABIAAgFIAAgCIgBgDIAGABQCxAAAtACIAQACIABAEQAAACgHAAIgKAAIAAICIgJAAQgmADgHgDQgFgHgOgDQgZgFh8AAIgHAAIACAIIAAABIgIAAQgYAAgLADQgLgCgHgEQgIgGgHgDQgXgKhcAAIgXAAQhmACgJABIgPADIggAJIgoALQgYAHAAAIIADAMQAAAahCAAQgLAAgigNIgjgPQhNgjgIAAIg/ASQg9ASgnAAIgxgCQgRAAgGAEIgDACQgNAAgNAFQgeAFAAAEIhLgBIgogDIhLgBIgKgBIjrgCQgIgDgIAAQgJAAgCADIgoAOQgcAKgEAJQgDAHgBAQQgBAEgMAEQgFAFgDAAIijABQAAAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBgBIlkAAIgbgCQhAAAgLAGQgHADgDADQgPAFgBAJQABARgmAAIgbgBIgDgCIiWgBIgSgEQhJAAgXADIgNAFQgQABgLAJQgtAbhggCQh4gCgFABQhEANgFAMQgHAOgMAEQgIABgEAFQABAGgEABIhGAAQiAAAgHgDQgGgEhIAAQiFAAhTAQQg6AKgGAKIgIAAQgOAAgCAEgAoBgYQAAAKADAEIADgCIAAgPQAAgMAHgCIAHAAIgBgDIgGAAQgNACAAASgAqWklIAAANQAEAEAFAAQAFAAAAgDQgIgEAAgDQgBgIgCAAIgDABg");
	this.shape_6.setTransform(-2,11.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#996666","#FEB770"],[0,1],-61.2,14.9,-61.2,-10.2).s().p("AXbCxQgMgOg9AAQgUgEg4ABQAEgCgwAAQgDAAgIARIAAgTIgKgBIgBAAQgFgHgQAAQgSAAgIAFIgBgBQAAgfg1AAQgZAAgUAHQgFgRgWAAQgYAAgaATQgNgPgZAAQgYAAgHAEQgEAFgHADIgFgIQgFgFgLAAQgHAAgEADQgCgGgFgEQgIgIgTAAQgLAAgCADQgDADgFAAQgLgPgaAAQgUAAgFAMQgDAHABAHIAAAHIgBgBQgWgKgJAAQgRAAgHAOQgFAIAAAHQAAAHABADIgBAAQgLgLgVAAQgPAAgEADQgEAEgEAAQAAgbgiAAQgUAAgQALQAAgggdAAQgeAAgRAUIgJgIQgJgHgLAAQgtAAgNApQgmgPgYAAIgDgBIgogsQgNgQgVgeQgLgRgKgcIgDgJIACgGQAMABANgDQAmgHAZAFQAcAEAIAAIACgBIAoAKQAOAAALgDQALgEAmAAIBCASQALABAaANIAUADICAACQAIADANAAIAggCQAgAAAfASQAeATBCAAICNAAIABABIAhAAQBAABgaADQAhAAAHgGIABACIAMAAQDFACAHAEIAOAHIABAAIADAAIAAB5QgDgJgFgFgApECvIgRAFQgRgFgQAAQgHACgJAAQgEgGgPAAIgMACQgfgVgLAGQgBgSgRAAIgJABQgCgHgEgIQgJgQgOAAQgLAAgJgIQgIgIgJAAQgFAAgIAHQgOgRgQAAQgZAAAAATQAAAJAEAJQAAAAgBABQAAAAAAAAQgBABAAgBQgBAAgBAAQgWgCgEADQgHAFgPAAQgCgOgEgBIgcgBIAEgKQgNgpgJAAIgVAPQgKgOgRAAQgfAAAAAWQgIgHgUAAQgjAAAAAYQAAAKADAGQgGgGgQAAQgWAAgEAQIgUgCQgQAAgIAFQgGAFgBAAQgFgIgaAAQgzAAAAAYIABALQgegegXAAQgLAAgUAGQABgLgJgKQgLgOgVgBQgCgWgIgGQgGgEgWAAQgbAFgJAAQgEgJgFgGQAhgCBbgVIB0gUQBRgQAhgRQAQgKApgPQAtgSAPAAQALAAAIAEQAIADAZAAQAfAAAOgDIAWgHQARgEAggPQAQgFAYgOQATgGAfgQIAsgUQAMgHAtgGQAUgLAWgHQAjgRAmAAQAWAAANANQAMAOAnAAIAAAAIAKgCIA+gDQANAABMAVQAxACAXANQAWALATAAQAnAAAVgEQAlAAAxAUQAyAVAOAAQATAAAOgEQASAAANAOQAQARAjAJQAUAFAkgBQAegBAbALIAIADIAdACIAEAMQgpBFgBANQgdAAAAATQAAANAEAEQgMgGgMAAIgJAAQgGABAAADIAAACIgBABQgZAXAKAWQgbgWgKAAIgLABIgFgFQgJgKgMAAIgdAJQAAgXgYAAQgQAAgFATQgBgEgWAAQgaAAAAAJIACAHQgGgEgkgCQgHgRgYACQABgIgCgFQgFgLgUAAIgXAHQgCgQgKgDQgDgBgTAAQgvAAAAARQAAADAFASQgGgDgMAAQgKAAgGAFQgEADAAACQgUgJgOAAQgSAAgCAEIgDACQgCgBgZAAQgZAAgKAFQgFAFgDAAQACgDgQAAQgTAAgOAHQgOAGACAHQgOgLgMAAQgHAAgBAHIABAKQgLgIgGAAQgEAAgCAKIgCALQgNgTgKAAQgPAAAAANQAAAJAFAVIgBABQgSgHgJAAgAFQB+QAAglgoAAQgRAFgFAAIgBgBQgCgKgFgGIACgHIACgMQAAgDAMgVIAMgRIAOAcIAYAtIAWAiIgSACg");
	this.shape_7.setTransform(46.5,-76.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#02D22C","#028F01"],[0,1],2.3,-12.2,2.3,23.2).s().p("AbyDvIgFAAIAAADUgDHgADgzfgABIgBADIi2gEIhZgDQgBAAAAAAQgBAAAAABQAAAAAAABQgBAAAAABIABABIgFAAIAAjqIAHAAIABAAQAHAAACgFIAFgMQAJgTAoAAQARAAAMANQANAQAKAHQAEgGgEgdQAAgbAbAAQAJAAANARQAOASADACIAFgCIADgZQAFgRAQAAQATAAAPAQQALASACABQADgDAAgHIADgBIACAPIACAJQADAGADAAQABAAAAAAQABgBAAAAQAAAAABAAQAAAAAAgBIAAgGQgHgIAAgNQAAgKACgDQAHgMAXAAQAVAAAJAQQAKAPACAAQAAAAABAAQABAAAAAAQAAAAABgBQAAAAAAAAQgDgQACgLQAFgXAcAAQALAAAfAWQABAAABAAQAAAAAAAAQABAAAAAAQAAgBAAAAIAAgSQADgGAGgDIACgBQAJgEAPAAQASAAACAKQAAAAABAAQABgBAAAAQAAAAABAAQAAgBAAAAIABgLQAFgHAUAAQAQAAAEALQADAKADAAQABAAAAAAQABgBAAAAQAAAAABAAQAAAAAAAAQgEgNACgJQADgSAfAAQAVAAAIALQAFAGADAJIADgCIADgPQAJgPAjAAQAkAAAFARQABAAAAAAQABAAAAgBQABAAAAAAQAAAAAAAAIAAgEQgMgaAAgFQAAgWAoAAQAUAAAEAFIAEAEQABAAABAAQAAAAAAAAQABAAAAgBQAAAAAAAAQgGgNgSgCQgCgOACgKQAGgWAfAAQATAAABAOIADABQABAAAAAAQABgBAAAAQABAAAAAAQAAAAAAAAQACgdAdAAQAUAAAKAPQAFAIADAKIACAAQAFgFADgIQAFgFAXAAQAUAAAAAZQAAALgJAIQgJAIAAAEQAAAEADABQACgCAIgLQAKgKAVAAQAPAAAMARQAFAIADAMIADgCQAAgEADgCQAHgGAaAAQAfAAABANIADAWIAHgCQAeAAAAAcQAAAGgGADQgHAEAAAEIABAEIADAAQACAAAKgJQAKgKAXAAQAbAAAgAhIADAAIABgEIgDgPQAAgTAsAAQAWAAAGAHIAHAGQACgCAAgHQAFgHAVAAQARAAAEAGIAFAGQABAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAIAAgGQgDgCAAgHQAAgJAVAAQAMAAAHAGQAGAGADAAQAEAAAAgEQgIgNAAgLIACgJQAGgJAVAAQATAAAKAKIAKAJIAEgBIAAgDQgJgOAAgEQAAgMAYAAQAUAAACAKIADAOQADgCAGgKQAHgKAJgDIAOAiQAAAHgOAPIADAEIAGgFQAEgEAPAAQAQAAAAAHQAAAJgPALIAAADIAEABQAEAAAHgJQAHgIAOAAQAGAAAGAIQAFAHAEAAIAEgDQgLgMAAgEIAAgBQAiACAAgFQgIgSAAgEIACgGQAEgHAMAAQAKAAAIAIQAIAGAAAEQAAAMABABQADgCACgLQACgIAJAAQAHAAAIAGQAIAGAAADQAAACgDAFIAFAFIACgGQACgFAIAAQAUAAAEAdIgBACIABADIAAAAQABAHABAGQAFgDAAgKIAHgEQANAAAAARIgEAJQAAAEADABIAFgGQADgFAHAAQANAAAVAVQAEgBAAgIIAOgBQAEAAAHAKQAIAJAEAAIADgBIAAgDQAAgDgHgIIAXAAQAEACANADIADAFQABAEAFAAQAGAAAAgFQAAgFgGgBIACgDIAQAAQAGACAZAKQABAAAAAAQABAAAAAAQABAAAAAAQAAgBAAAAIAAgDQgHgJgCgHQAAgLgDgGIAAgLIALAAIAZAVQAAAAABAAQAAgBABAAQAAAAAAAAQAAAAAAAAIADgWQADABAOAJQAHAAgDgTQAOAGAQANIADgBQgEgbApAAQAOAAgBAGQAAAJADACQAGgFgFgLQADgJAmAAQAaAAABADIADAHQADAAABgIQAAgHARAAQAdAAAGAPIAEgBQgCgFABgEQACgGAOAAQAVAAAJAQIAEgCIgPgmQAAgHAUgDIAUgBQAbAAADAFQACADgEAGQACAPABABIAEgCIgBgIQAFgGAdAAQAJAAAAAOQAAAGgMAGIAAADIADABQADAAATgGQASAAAAAIQAAACgCAEQAAABADADQAJgDAFAAQAaAAAUAOIAFAAIABgDQgMgOgCgFQANgCAHAAQAXAAACAEIADAJQADgDAAgDQgBgGAAgFQACgLAMAAQAQAAACAIQACAEgBAIQgGAEAAACIAHAFIAMgJQAMgIAKAAQATAAgBAMQAAASADAEQADgBAAgLQgBgJAOAAIAxAiQABAAAAAAQABgBAAAAQABAAAAAAQAAAAAAAAIABgEQgKgUAAgGQAAgIAJgPIAHgJQAcAAAEAHQAEAGAEAAQAEAAAAgFQgJgQAAgJIACgHQAFgHAPAAQAQAAAKANQAIAJAAAGQAAAEgDAHIABAIIADAAQAFAAAAgLQAAgMAVAAQAhAAAAAgQAAAHgFAFQgFAEAAADIAAAEIAEABQAFAAAEgKQAEgLATAAIADAAQAFAGABAAQABAAABAAQAAAAAAgBQABAAAAAAQAAAAAAAAIABgDQAIAEAGAHQAFAHAFALQADgBAAgIIgCgLQAAgFAWAAQAjAAAdAWQAEgHAHgRQASgYAaAAQAJAAAKAJQAKAIADAAQACAAAGgLQALgLAYAAQAWAAABAQQACAVADADQAFgTAiAAQAXAAAEAUIADAWIADgBQgCgVAeAAQAVAAAMAQQALAPADAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAIABgDQgMgSAAgNIADgMQAGgLAPAAQAHAAAbAMIAQAHQAEAAABgDIgTgKQgDgJABgGQABgOAXAAQAcAAAEAOIAEAPIADgCQgCgGABgEQADgIATAAQASAAAGAKIAHANIACAAQAAgBAAAAQAAAAABgBQAAgBAAAAQAAgBAAgBQABgDAIAAQAOAAACALQADAOABABIADgCQgCgXApAAQAcAAAGALQADAGADAJIADgBQAAgcAsAAQARAAAFANQAGAOAEAAQAAAAABAAQAAAAABgBQAAAAAAAAQAAAAAAAAIAAgDIgBgHQAGgGAhAAQAxAAAAAXIgFALIAAAFQACAFAFAAIADgCIgBgBIADgIQAGgIATAAQAIAAAFABQAAABgBAAQAAAAgBAAQAAAAgBABQgBAAgBAAQADAWADAGQACAFAGACQAGADAJAAQAEgDABgLQADgKATACQAAAGAEAAIAAAQIAIAAQADgKgFgJQADgEA4AAQADAAACAMQACANAHADIAEgDQAHgQAGgEQAvAAACADQgFATAKADIAUAGQAFAAACgCIAAEWQgugCixgBg");
	this.shape_8.setTransform(-2.9,-51.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABxDsIAJgRQADAAADACQAAAAABAAQABgBAAAAQABAAAAAAQABgBAAAAQAFAAAFAGQAEAGAAADQAAACgIAFQgJAGgJAAQgHAAAAgLgACyDRQAAgJAMgGQACAEABAAQADAAADgCQAQAAAAAIQgKANgMAAQgPAAAAgIgASKCgQAAgEAHgFIAHgFIAAgBIAHgCIADADIAEAAIAAAJQgHAPgKAAQgLAAAAgKgATQCIQAAgIAPgEIABAEIARAGQgGALgWAAQgFAAAAgJgAzwhvIACgJQAFgJAIAAIABAAQADAJARAWIAAAPQgkgJAAgTgAAMiiIAAgFIADgCIAUgCQABgBAAgLQgBgJAGgOQAQABACAKQACAKAIAAQAAAAABAAQAAAAABgBQAAAAAAAAQAAAAAAAAIABACIgBADQAAADAMAKIAAAPQAKARgnAAQgqAAAAgagAB6jAIAEgIQAEAAALAHQALAHAAAEQAAAFgJAAQgVAAAAgPgACxjxQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAABAAQAMAAAEgBIACAHIAGAJQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAAAIgIAAIgSgOg");
	this.shape_9.setTransform(8.9,64.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0033FF").s().p("AJMCgIACAAIAAAEgApKiWIABgDQgEgFAAgFIAIAAQAKAFAEAAQgOAFgEAFg");
	this.shape_10.setTransform(74.7,61);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#6FC6FF","#0709FF","#00BFF3","#0033FF","#0060EE","#0202FD"],[0,0.243,0.541,0.706,0.933,1],1.7,-33.3,6.9,51.4).s().p("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");
	this.shape_11.setTransform(-2.9,75.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6699FF").s().p("AGcAMIAAgBIAAABgAg3AKIACAAIAAAAgAmbgKIAAgBIADABIgDAAg");
	this.shape_12.setTransform(128.9,-62);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#996600").s().p("AgRDVIgagkQgEgHgTgmIgQghIAKgRIACACQAKAeALAQQA0BOATALQgIABgFADIgEADQgJgKgNgDgAiLCaIAohIIAAgBIADgGQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAgBgBQABgJAIgMIAIgMIAEgDQAdgxATgYQBShsBdhSIACACQADAAADgCIAHAAIAAAGQgaAQgXAeQggAngLAKQgvAqghA3IgiAuQgNATgIAOIAAAAIgLATIABABQgEAIgJAMIAAgBIgFAHIABABIgOARIgTArQgGgEgKgBgAhnAwIgCgHIgihZQgRhEgHgSQAIgGAAgDIABAAIACABQABAIAHAPIADAWQAEAcAEASQAJAmAjA0IACAEIgGAIQgFAFgBAGQgEgKAAgEg");
	this.shape_13.setTransform(84.7,-85);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("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AQgMAAgCALQAAAFABAGQAAADgDADIgDgJQgCgEgXAAQgHAAgNACQACAFAMAOIgBADIgFAAQgUgOgaAAQgFAAgJADQgDgDAAgBQACgEAAgCQAAgIgSAAQgTAGgDAAIgDgBIAAgDQAMgGAAgGQAAgOgJAAQgdAAgFAGIABAIIgEACQgBgBgCgPQAEgGgCgDQgDgFgbAAIgUABQgUADAAAHIAPAmIgEACQgJgQgVAAQgOAAgCAGQgBAEACAFIgEABQgGgPgdAAQgRAAAAAHQgBAIgDAAIgDgHQgBgDgaAAQgmAAgDAJQAFALgGAFQgDgCAAgJQABgGgOAAQgpAAAEAbIgDABQgQgNgOgGQADATgHAAQgOgJgDgBIgDAWQAAAAAAAAQAAAAAAAAQgBAAAAABQgBAAAAAAIgZgVIgLAAIAAALQADAGAAALQACAHAHAJIAAADQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAQgZgKgGgCIgQAAIgCADQAGABAAAFQAAAFgGAAQgFAAgBgEIgDgFQgNgDgEgCIgXAAQAHAIAAADIAAADIgDABQgEAAgIgJQgHgKgEAAIgOABQAAAIgEABQgVgVgNAAQgHAAgDAFIgFAGQgDgBAAgEIAEgJQAAgRgNAAIgHAEQgBAKgEADQgCgGAAgHIAAAAIgBgDIABgCQgEgdgUAAQgIAAgCAFIgCAGIgFgFQADgFAAgCQAAgDgIgGQgIgGgHAAQgJAAgCAIQgCALgDACQgBgBAAgMQAAgEgIgGQgIgIgKAAQgMAAgEAHIgCAGQAAAEAIASQAAAFgigCIAAABQAAAEALAMIgEADQgEAAgFgHQgGgIgGAAQgOAAgHAIQgHAJgEAAIgEgBIAAgDQAPgLAAgJQAAgHgQAAQgPAAgEAEIgGAFIgDgEQAOgPAAgHIgOgiQgJADgHAKQgGAKgDACIgDgOQgCgKgUAAQgYAAAAAMQAAAEAJAOIAAADIgEABIgKgJQgKgKgTAAQgVAAgGAJIgCAJQAAALAIANQAAAEgEAAQgDAAgGgGQgHgGgMAAQgVAAAAAJQAAAHADACIAAAGQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgFgGQgEgGgRAAQgVAAgFAHQAAAHgCACIgHgGQgGgHgWAAQgsAAAAATIADAPIgBAEIgDAAQggghgbAAQgXAAgKAKQgKAJgCAAIgDAAIgBgEQAAgEAHgEQAGgDAAgGQAAgcgeAAIgHACIgDgWQgBgNgfAAQgaAAgHAGQgDACAAAEIgDACQgDgMgFgIQgMgRgPAAQgVAAgKAKQgIALgCACQgDgBAAgEQAAgEAJgIQAJgIAAgLQAAgZgUAAQgXAAgFAFQgDAIgFAFIgCAAQgDgKgFgIQgKgPgUAAQgdAAgCAdQAAAAAAAAQgBAAAAAAQAAAAgBABQAAAAgBAAIgDgBQgBgOgTAAQgfAAgGAWQgDAKADAOQASACAGANQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgEgEQgEgFgUAAQgoAAAAAWQAAAFAMAaIAAAEQAAAAAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAQgFgRgkAAQgjAAgJAPIgDAPIgDACQgDgJgFgGQgIgLgVAAQgfAAgDASQgCAJAEANQAAAAgBAAQAAAAAAAAQgBAAAAABQgBAAAAAAQgDAAgDgKQgEgLgQAAQgUAAgFAHIgBALQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgCgKgSAAQgPAAgJAEIgCABQgGADgDAGIAAASQAAAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAQgfgWgLAAQgcAAgFAXQgCALADAQQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgCAAgKgPQgJgQgVAAQgXAAgHAMQgCADAAAKQAAANAHAIIAAAGQAAABgBAAQAAAAAAAAQgBAAAAABQgBAAAAAAQgEAAgCgGgAg5niIACAAIAAgBQgGgVAAgJQAAgNAPAAQALAAANATIABgLQADgKADAAQAGAAALAIIgBgKQAAgHAIAAQAMAAAOALQgCgHAOgGQAOgHASAAQARAAgDADQAEAAAFgFQAJgFAZAAQAZAAADABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAQABAAAAAAQABAAAAgBQABAAAAgBQAAgBABAAQACgEASAAQAOAAAUAJQAAgCADgDQAGgFALAAQALAAAHADQgGgSAAgDQAAgRAvAAQATAAAEABQAJADADAQIAWgHQAUAAAFALQADAFgBAIQAXgCAIARQAjACAGAEIgBgHQAAgJAaAAQAWAAACAEQAEgTARAAQAYAAAAAXIAdgJQALAAAJAKIAGAFIA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");
	this.shape_14.setTransform(-3.2,-9.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Bkr, new cjs.Rectangle(-204.3,-129.4,403.2,258.8), null);


(lib.Basket = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgwAcQgTgWgBgLQADgCACgEIgEgBQAEgLAWAAQAOAAAEACIgEAJIgHgEIgCAAIgBADIAIAGIgDAHIAFABQADgCACgDQAOAEAQAAQAJAAAIgHIAFAEQAFAHAAARIAAAGIhTABgAAoAWQAAgXgQgNQABgDAAgDQACgBAMgBIAGAGQgDADAAAMIADAIQAFAJAHAAQAHAAAFgCIgBAGIAAAFIAAAAIgPACIgOAAgAgKgQQgFAEgEABIABgIIAAgFIADgBIABgCIABAAIABACQAXAHAMAJQgSgHgPAAg");
	this.shape.setTransform(9,-0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#993399").s().p("AAdBHQAAgDAJgGIgDgBIADgCIAFACQAGAMAAACIgPABQgFAAAAgFgAA9AzIAEgGQAQAAAKASQgegEAAgIgAAMAyIAHAAQAAAAABAAQAAgBAAAAQAAgBABgBQAAAAAAgBQACAAABAAQABAAAAAAQABAAgBgBQAAAAgBAAIAHAAIAAAAIAEAGQgDAIgMAAQgIAAAAgJgAgEAtIgFgIQAAgHAGAAQACAAALAKIAAACIgCADgAATAoIgEgHQABAAAAgBQABAAAAgBQAAAAABgBQAAAAABAAQAAgBAAgBQAAAAgBgBQAAAAAAAAQAAAAAAAAIABgMIABAAIAAACIAFAAIgCABIAAANIAMABIAAABQADAHgSAAIgBAAgAgOAkIADggIAIgHIAAAAIADALIgBABQgHAHAAAFQAAACADADQgIAFAAAFgAhAAcQAAgDAHgHIgEgBIABgBIAIABIABAAIAAAHQAAAGgMACQAAAAgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBgAAAAYIgEgDQAHgLAHgCIAEAAIABAHQAAAIgFAFQgEgEgGAAgAAnAbIgFgHIgDABIgCAAIAEgEIAGAAIAEAHIgBADgAhaAFQAAgKADAAIAAAAQAGgCAHAFIgBADIAEAIIAEAFIgEACIgKAEQgJAAAAgPgAAYAMIAAgHQADgFAEAAQgDgCgEAAIgBgEIAGAAIACgDQAFAGABALIAAAAIgCABIACADgAg7AMIAAgBQgCgKgEgEIAIgCIABAAIAFAEIAAANgAhHABIAAgBIABAAQAHAHAAAEIgBABQgHgDAAgIgAARADQgCgCgDAAQgDAAgEACIgBAAIAAgHIABgEIAFgBIAAADIAGAAQAEADgBAGgAgHgJIAAgJQAFAAACABIgBAAIAAAFIgBADIgEABgAARgNQAGgEADgEIACAAIAAADIABADIgBAAIgDABIACABQgCACgFAAIgDgCgAg7gRIAAgEQAAgKgHgEIAAgBQAEABAIAHIADADIAAAGIAAAGIgIgEgAABgjQAAgLADAAQAMAAAJAKIAAACIgBAAIgCABIACADQgCAHgJAAQgMAAAAgMgAgEg+QADACAEABIADAIIgBAAQgFAAgBAIIgCAJQAAAHADADIgEgBIgEABIAEgmgAg9g0QAAgFAKgBIABgCIACADIgBAPIgIABQgEAAAAgLgAAEhCIgDAAIAAACIgEgFIACgEIALAAIAAgCIABAAIAAAAIAAAAQAGAFACAAQADAHgKABQgCgEgGAAg");
	this.shape_1.setTransform(22.7,-1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00CC00").s().p("AhTAXIADgDQAMAAADADQgBAEgNAAQgDAAgBgEgAgCAJIACgEQALAAANAFIAAABIgXABIgDgDgABPgIIgKgBQgFgGAAgEQAAgDAFgCQAAAAAAgBQAAAAAAAAQAAAAAAAAQABgBAAAAQAEAGAFACQABAJAEAFIAAAAQgDgDgCgBgAAAgKIAAgCQAMgMABAAQADAGAAADQgQAAAAAFg");
	this.shape_2.setTransform(7.5,-2.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9AEBFE").s().p("AAKAjIgKgKQgGgNgegDQAMgEAPgGIADACIABgBQgUgNgRgVQAcgBANAHQAHAEAJAJQAKAGAFAJQAEAFAFACQABAEADACIgFAAQgEAAgBADIgHAAIgDABIAAABIgKABIAAAMIACAEIgFAAgAglAQIAAgBIAAABg");
	this.shape_3.setTransform(12.3,-7.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#99FF00").s().p("AgpAJQAAgIAEgEQAIgLALAHQAGADAFgCIAAACIgGACIAGABIAAABIACAAIACABQADAEANAAQAJAAAAgHQAAgIgTgBIAEgEQAEgEAJAEIAEABQACAMAQAUIhPAAIgEgJg");
	this.shape_4.setTransform(-0.7,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DA8B58").s().p("AhhAYQgYgVgHgDIgBAAIADgWIALABQABAAAAAAQAAAAAAgBQABAAAAAAQAAgBAAgBIgDgBIAKgJIAFgFQAogDAiAAQBSAAALAQIADgBIACAKIgBAHQgIgDgUgBQgQAAgDAPIgLAAQgHAAgDADIgBgCQAGgMAJgFQAHgFAGgBQAAgBAAgBQAAAAgBgBQAAAAAAAAQAAAAgBAAQgYALgGAIQgEAFgBAIIgCAAQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAgBIgDAAIAAAEIAAABIgPAAQgSAAAAAbIABAIQgYAAgbgTgABggMIADAAQACgCAAgFQABgMgLAAIAAgBQAfAGACAFIAGAJIgEAAIgKAKQgJgGgLgEgABLgZIgDgKIATADIAAAAIgBABQgDAAgFAHIgFAGIgCABg");
	this.shape_5.setTransform(-0.6,-2.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF99CC").s().p("Ah5AuIAEgSQADgMAUgPIAFgCIABAAQAFAAA2gWQAzgVAigBIAEAAIgBABIAYAjQAKAJAcAWQgFAAgNAEQgNAEgDADIgMgBIAAgBQgHgVgCAAIgCABIAGASQgQgDgugBIAbgOIAAAFIASAAIABgDQAAgDgRAAIAAAAQAMgGAZgEQgDgBgNAAQgLAAgVALIgcAOIhFAAQgRAAgPAHQgOAHAAAIIAAAAIgEAAg");
	this.shape_6.setTransform(-1,-9.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFF00").s().p("AAmBSQABgHgBgTQAAgMACgIQAagSAQgKQAMgCAPAAQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAABgQAIQgTAHgFAZIgEAUIgDAAQgBAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAAAIAAACIAEABIgEATIgXgLgAALBIQACgHAAgMQAAgTgBgCIgGgNQAEgCAAgEIAAgCQAGgEAEgJIAFgDIACAAIACgCQAQgHAjgFIgoAqQgDAEgBAIIgCABIAAAEIABAAIgBARIABAXIgYgIgAgBBEQgLgDAAgRQAAgMAFgRIACAAIAEACIAAAAQACAJAEAEQAFAGAAANIgGARIgFgCgAgBADIAJgVIACADQAGAGAFADQgTALAAAFIgBAAIgCgHgAhtgVIAAgBQAPgIANgFIAgAHQgIAPgFAMQgPgRgggDgAASgQIBMgwIABABIAAALQgEADgFAMQgBADgLADQgKADgHAEIgIAAIgWAOIgJgGgAgpg/QAAgTAKgKIAMAVIgVAbIgBgTg");
	this.shape_7.setTransform(-20.2,-12);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("ABiEZIgFABQiiAAhAgWQhmgigThpQgDgBAAgFIABgHIAAgGIAAhiQAAgOgIgfQgGghgBgPQABgNAFgRIgCABIgNgMQgLgGgdgCIgBgDQAAgEATgHIAMgEIACgBIgCAAIgBAAIAJgFQATAAAOAKIAEgGIgBgbQAAgRABgBQABgDAOgUQAAAKAKAWIAJgMQA8hIAggCIAAgCICAADQAzACAWAEQAqAJBNBCQAZAVAABBIgCASIAAAAIABAAQAMAAABABIgBADIgLAAIgDAEIAGAEIgBgCIADAAQAHAAABAFQAKgCgDgGQgCAAgGgFIAAgBIAAAAIgDgDIAAgDIACAAQARAAgFAMQABAMgEAAIgHAAIgBAHQAPABADANIAAAEQAGADgCALIAAAEQAMADgEARIAAAEIADAAQADAKAAAEQgBAJgDgBIgDAAIAAABQAAAIgEADQAGABgBAHIAAAEQAEAAAEADIABACIAAABQAEAFAAAHQAAAIgFAAQgYAAAAgLQAAgFACgDIgIABQgFAAgEgHIgCgHQgPgBgFgFIgCgHQAAgFAIgFQgDgEAAgBQAAgEAIgIIABgBIgEgMIAAAAIgIAJIgDAfIgIBDQgBALgDAOIgBAEQgJAdgUArQgLAagaAhIACAAQgCAJgKADQgNAPgIAGIACABQAAABABAAQAAABAAAAQAAAAAAAAQgBABAAAAIgGgCgABdEVQgCgEAJgHIAKgFIABgCIgZAAIgBgEIARAAIALgBIACgGQANgSAFgFQALgIAWgpQAJgRAJgeIALgyIABgOQgFADgLAEQgUAHgMAAIgEgCIA0gTQACgfAIgtQALg+AAghQAAgigDgKQgHgaghgUIg0gqQgKgHgbgIQgmgLiiAAQg0AAg0BbQgaAtgRAuQABAMAGAbQAIAcAAAdIgCAwQgCAXACAQIAFgJQARgXAOAAQAFAAACACQgWAKgNAQIgHAKIABACQAMBDAbAcQAXAWBAAcQA9AZAUABIA1AAQAIgPAAgMIAAgeIADAAIAAAWQAAAJgHAaIAqABQAFgFAAgEQAAgJgIgQQgJgRgCgIIAAgBIADAAQAKAAAJA0IAAAIIAaADIAAAAgAEGArIAEABQgKAHAAACQAAAGAGAAIAOgBQAAgDgFgMIgFgCIgEACgAD4ApQALAAAEgHIgFgGIABgBIgBAAIgHAAQABABABAAQAAAAAAAAQgBAAgBAAQgBAAgCAAQAAABAAABQAAABgBAAQAAABAAAAQgBAAAAAAIgHAAQAAAJAJAAgADaAUIAEAHIAOAAIABgCIAAgDQgMgKgCAAQgFABAAAHgAD2AMQgBABAAAAQAAAAgBABQAAAAgBABQAAAAAAABIAEAHQATAAgDgIIgBgBIgMAAIAAgNIACgBIgEAAIgBgBIAAgFIgBAEIgBAMIAAAAIABACgADeAEIAFACQAGABAFADQAEgFAAgHIgBgGIgEAAQgHACgIAKgAEKAJIADAAIABgDIgEgGIgGAAIgEAEQgBACAAADIAFAAIgCgFIADgBIAFAGgAEIgEIgBgEIACAAIAAgBQgBgMgGgGIgCAEIgGAAIABAEQAEAAADABQgEABgDAFIAAAIIANAAgAD1gNIACAAQAAgHgDgDIgGAAIgBgDIgFAAIgBAEIAAAJIACAAQADgCADAAQAEAAACACgADYgVIAAAAIAEgBIgEgBIAAACgADbgkIAAAJIABABIAEAAIABgDIABgFIABAAQgCgCgFAAIgBAAgAD8gnIACAAQgDAFgGAEIACACQAFgBACgCIgCgBIADAAIABAAIAAgEIgBgDIgBgDIgCADgADoggIAGAAIABgEQgFAAgEgCIACAGgADkg0QAAAMAMAAQAJAAACgHIgCgDIACgBIABAAIAAgCQgJgKgMAAQgDAAAAALgADagpIAEgBIAFABQgDgEgBgGIACgJQACgJAFABIABAAIAAgBIgDgHQgFgBgDgDIgEAngAk3iPIgBABIABAAQAgAEAPARQAFgNAIgOIgggHQgNAEgPAIgAjzi4IACAUIAUgcIgMgUQgKAJAAATgAglENQgggCgtgkIACgCQAJAFAXAQQAaAOAjABIACACIgBACgAhMDkQg0gXAAgNIAAgEIADAAQAGALAlAWQAuAaAeAAQAIAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBABAAIACACIAAAGIgGABQgZAAgzgYgABODrQAkgOANgDIABABQAAADgSAHQgUAIgGAAgAiRDoQgCgJAAgVQAAgcALgJQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAAEgEAIQgFAKABALIAAAfgAghDWQARgRAIgXIAEgpIACAAQABAGAAAKQABAsghAXIAAAAI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");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#D78028","#B9AD46"],[0,1],-23.9,0,24,0).s().p("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");
	this.shape_9.setTransform(-2.3,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.2,-28.2,64.5,56.5);


(lib.InfinitivecanhaveanObject = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.INFINITIVE();
	this.instance.parent = this;
	this.instance.setTransform(-94.6,0.2,1.162,1.162,0,0,0,-2.2,-1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgJAJQgDgDAAgGQAAgFADgDQAEgEAFAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFAAQgFAAgEgEg");
	this.shape.setTransform(240.1,8.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgHBPQgDgDAAgFIAAgFIABgFIgBgQIAAgPQAAgQgDgbQgDgeAAgNIgKAAQgXAAgOgDQgIgCAAgJQAAgEADgEQADgDAFAAIARACIARABIAUAAIASAAIAZABIAZABQAEAAADADQADADAAAFQAAAFgDADQgDADgEAAIgZgBIgYgBIgIAAIADAwQACAeAAARIABALIABAMQAAAHgDAGQgDAHgGAAQgDAAgEgDg");
	this.shape_1.setTransform(230.7,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgsBCQgPgQAAgXQAAgjAfgnQAZggAZABIAKAAIAHACQAEgGAGAAQAHAAACAJQACAJAAANQAAAFgCADQgDAEgGAAQgHAAgDgIQgDgHgDgCQgCgBgJAAQgPAAgSAYQgaAgAAAcQAAAOAJAJQAJALANAAQAKAAALgFIATgOQAGgEADAAQAFAAADADQADAEAAAEQAAAFgEAEQgcAZgcAAQgWAAgQgRg");
	this.shape_2.setTransform(215.9,0.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AguBTQgLgKAAgiIABgPIAAgSIgBgFQAAgDACgDIACguIgBgLIgBgMQAAgNALAAQAFAAADAEQANgEALgCQAMgBAJAAQAaAAAPAGQAIADAAAHQAAAEgDAEQgDADgFABIgDgBQgSgFgRgBQgJAAgKACIgWAFIABALIgCAqIAugFIAagCQAEAAAEADQADADAAAFQAAAIgKACIgaACIgwAEIgBAPIAAANQAAAYADADQADAEAOAAIATAAIAUgBIAHAAIAGgCQALAAAAAMQAAAJgJACQgKABghAAQghAAgJgIg");
	this.shape_3.setTransform(202.5,0.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgrBKQgVgPABgTQgBgOALAAQAMAAgBANQAAAJANAJQAMAJALAAQAIAAADg3QACgYAAgnIAAgLIgHAAIgMAAIgNgBQgFAAgDgDQgDgDAAgFQAAgLAPAAIALAAIAKABIAUgBIAUgBQAZAAgBAMQABAFgDADQgDAEgFAAIgHgBIgHgBIgMAAIAAANQAABPgKAlQgHAYgRAAQgTAAgSgOg");
	this.shape_4.setTransform(188.1,1.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgyBTQgEgFAAgEIAAgfIACgrIADgsQgBgLACgTQAAgFADgCQAPgFASAAQASAAASANQAUAPAAAWQAAAbgWAQQARAGAIAIQAIAJAAAKQAAANgPAMQgJAIgLAEQgXAKgmAAQgEAAgFgEgAggArIAAAWQAcgBAQgHQAIgDAHgGQAGgGAAgCQAAgGgNgGQgLgEgJgDIgLgBIgEAAIgEAAIgNgBIAAAYgAgcg/IAAATIgCApIAQACQAPgCALgJQALgJAAgPQAAgLgMgIQgLgJgMAAIgQABg");
	this.shape_5.setTransform(174.3,0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag1BDQgXgUAAgfQAAgkAWgeQAZghAjAAQAjAAASAPQASARAAAjQAAAlgUAeQgYAhgkABQgeAAgUgSgAgmgkQgQAZAAAbQAAAWAPANQAPAMAVgBQAaABAQgbQAQgXAAgdQAAgZgLgLQgMgJgagBQgZAAgTAag");
	this.shape_6.setTransform(158.2,1.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAaA1IgDgYIgBgYIAAgJIAAgKQAAgXgIAAQgMAAgKAOQgKANgGATIgBALIAAAKIAAAJIABAKQAAAFgDADQgDADgFAAQgEAAgDgDQgDgDAAgFIgBgKIAAgJIABgeIACgfIgBgKIAAgKQAAgFADgDQADgCAFAAQAJgBABAOIABANQASgYASAAQARAAAHAQQAEAJABAUIAAALIAAAJQAAAJACAOQACAOAAAJQAAAEgDADQgDAEgEAAQgKgBgBgJg");
	this.shape_7.setTransform(137.3,3.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAiA3IgHgIIgSAJQgIACgEAAQgZAAgMgOQgLgNAAgcQAAgZASgSQASgTAYAAQAJABAMAEQAOAGAAAIQAAADgCADIgBANIgBAXQAAAOACAHIAGATIADAGIABABQAAAFgDADQgDADgEgBQgCABgGgFgAgRgaQgNAOAAAQQAAASAHAJQAGAJAMAAQAKgBAHgDIALgIQgEgcAAgOIABgKIACgLIgHgEIgFgBQgPAAgMAOg");
	this.shape_8.setTransform(125.7,3.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgkAvQgQgOAAgYQAAgbANgTQAOgVAZAAQARAAAMAHQANAHAAAPQAAALgMAJQgFAEgSAHIgoATQAGAJAKAFQAIAEALAAQAIAAAKgDQAMgDAEgGQADgGAEAAQAFAAACADQADADABAEQgBAMgTAIQgRAIgPAAQgXAAgPgMgAgWgcQgJAKgDAUIAggPQATgKAIgHQgJgIgQAAQgNAAgJAKg");
	this.shape_9.setTransform(107.7,3.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAdBSQgGgLgLgOIgSgbIgUAPIgBAgQAAAEgCAEQgDADgFAAQgLAAAAgPIABgaIABgbIABgkIAAglIAAgMIgBgMQAAgEADgEQADgCAFAAQAEAAADACQADAEAAAEIABAMIABAMIgBAiIgBAlQAPgMANgLIAXgZQAEgEAEABQAEAAAEACQADAEAAAEQAAAEgDAEQgOAPgTARIAYAgQAQAWAAAHQAAAEgDADQgEADgEAAQgGABgDgHg");
	this.shape_10.setTransform(96.1,0.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAiA3IgHgIIgSAJQgIACgEAAQgZAAgMgOQgLgNAAgcQAAgZASgSQASgTAYAAQAJABAMAEQAOAGAAAIQAAADgCADIgBANIgBAXQAAAOACAHIAGATIADAGIABABQAAAFgDADQgDADgEgBQgCABgGgFgAgRgaQgNAOAAAQQAAASAHAJQAGAJAMAAQAKgBAHgDIALgIQgEgcAAgOIABgKIACgLIgHgEIgFgBQgPAAgMAOg");
	this.shape_11.setTransform(83.9,3.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgGBMQgDgDAAgFIAAgLIAAgNIgCg+IgYgCQgJgBAAgJQAAgFADgDQADgDAEAAIAXACIgBgPIAAgNQAAgFADgDQADgCAEAAQAJAAACAPIAAAKIAAAGIAAAGIAPgBQALAAAEABQAGACAAAIQAAAFgDADQgDADgEAAIgGAAIgFgBIgPACIACA+IAAAFIABAGQAAAYgMgBQgDAAgDgCg");
	this.shape_12.setTransform(73.1,1.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AggAuQgOgPgBgaQAAgXAMgSQAPgWAaAAQAWAAALAUQAJAPgBAXQAAAXgMARQgOATgWAAQgSAAgNgNgAgTgVQgHAMAAAOQAAAQAJAJQAHAHAJAAQALAAAIgIQAJgJAAgQQACgogYAAQgPAAgJAPg");
	this.shape_13.setTransform(55.5,3.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgdA7QgRgFAAgLQAAgFAEgDQADgDAEAAQAEAAAFAGQACACAJABIANABQAIAAAGgCQAKgDAAgGQAAgPgUgFIgKgDQgOgDgGgEQgJgFAAgMQAAgXAVgJQAGgDAOgEIAUgGQAEgDAGAAQAEAAADAEQADADAAAEIABAKIACAJQAAAEgDADQgDAEgFAAQgGAAgCgFQgCgCgBgKIgZAIQgQAHAAAKIAGACQAYAFAMAHQARAKAAAWQAAARgPAJQgMAIgSAAQgPgBgMgFg");
	this.shape_14.setTransform(44.2,3.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgLBOIABgnIABgnIAAgmIABgnQAAgLAJAAQAMAAAAALIgBAnIgBAmIgCA1IgBAZQgBALgIAAQgKAAAAgLg");
	this.shape_15.setTransform(36.2,0.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAiA3IgHgIIgSAJQgIACgEAAQgZAAgMgOQgLgNAAgcQAAgZASgSQASgTAYAAQAJABAMAEQAOAGAAAIQAAADgCADIgBANIgBAXQAAAOACAHIAGATIADAGIABABQAAAFgDADQgDADgEgBQgCABgGgFgAgRgaQgNAOAAAQQAAASAHAJQAGAJAMAAQAKgBAHgDIALgIQgEgcAAgOIABgKIACgLIgHgEIgFgBQgPAAgMAOg");
	this.shape_16.setTransform(27.5,3.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAaA1IgDgYIgBgYIAAgJIAAgKQAAgXgIAAQgMAAgKAOQgKANgGATIgBALIAAAKIAAAJIABAKQAAAFgDADQgDADgFAAQgEAAgDgDQgDgDAAgFIgBgKIAAgJIABgeIACgfIgBgKIAAgKQAAgFADgDQADgCAFAAQAJgBABAOIABANQASgYASAAQARAAAHAQQAEAJABAUIAAALIAAAJQAAAJACAOQACAOAAAJQAAAEgDADQgDAEgEAAQgKgBgBgJg");
	this.shape_17.setTransform(9.9,3.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAiA3IgHgIIgSAJQgIACgEAAQgZAAgMgOQgLgNAAgcQAAgZASgSQASgTAYAAQAJABAMAEQAOAGAAAIQAAADgCADIgBANIgBAXQAAAOACAHIAGATIADAGIABABQAAAFgDADQgDADgEgBQgCABgGgFgAgRgaQgNAOAAAQQAAASAHAJQAGAJAMAAQAKgBAHgDIALgIQgEgcAAgOIABgKIACgLIgHgEIgFgBQgPAAgMAOg");
	this.shape_18.setTransform(-1.7,3.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgeAvQgPgOAAgXQAAgUAOgYQAQgaATABQALAAANAEQAQAGAAAJQAAAFgCADQgDADgEAAQgDAAgCgCIgFgDQgGgGgPAAQgKAAgKAUQgKASAAAMQAAAPAKAHQAJAIANAAQAGAAAHgDIANgHIAFgBQAEAAACADQADACAAAFQAAAHgQAIQgPAGgJAAQgVAAgPgNg");
	this.shape_19.setTransform(-13,3.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAaA1IgDgYIgBgYIAAgJIAAgKQAAgXgIAAQgMAAgKAOQgKANgGATIgBALIAAAKIAAAJIABAKQAAAFgDADQgDADgFAAQgEAAgDgDQgDgDAAgFIgBgKIAAgJIABgeIACgfIgBgKIAAgKQAAgFADgDQADgCAFAAQAJgBABAOIABANQASgYASAAQARAAAHAQQAEAJABAUIAAALIAAAJQAAAJACAOQACAOAAAJQAAAEgDADQgDAEgEAAQgKgBgBgJg");
	this.shape_20.setTransform(-174.8,3.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAmA4IgHgiIgdAFIgbAHIgTApQgDAFgHAAQgEAAgDgCQgDgEgBgFQAAgEARgiQgCgEAAgDQAAgJAKgCQANgWASgeQAZgpAGAAQAJAAACAMIAHAkIARBKIAFARQAEAJAAACQAAAFgEADQgDADgEAAQgKAAgHgZgAgNAIQANgEAZgEIgIgog");
	this.shape_21.setTransform(-189,1.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00CC00").s().p("AgHBPQgDgDAAgFIAAgFIABgFIgBgQIAAgPQAAgQgDgbQgDgeAAgNIgKAAQgXAAgOgDQgIgCAAgJQAAgEADgEQADgDAFAAIARACIARABIAUAAIASAAIAZABIAZABQAEAAADADQADADAAAFQAAAFgDADQgDADgEAAIgZgBIgYgBIgIAAIADAwQACAeAAARIABALIABAMQAAAHgDAGQgDAHgGAAQgDAAgEgDg");
	this.shape_22.setTransform(230.7,0.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00CC00").s().p("AgsBCQgPgQAAgXQAAgjAfgnQAZggAZABIAKAAIAHACQAEgGAGAAQAHAAACAJQACAJAAANQAAAFgCADQgDAEgGAAQgHAAgDgIQgDgHgDgCQgCgBgJAAQgPAAgSAYQgaAgAAAcQAAAOAJAJQAJALANAAQAKAAALgFIATgOQAGgEADAAQAFAAADADQADAEAAAEQAAAFgEAEQgcAZgcAAQgWAAgQgRg");
	this.shape_23.setTransform(215.9,0.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00CC00").s().p("AguBTQgLgKAAgiIABgPIAAgSIgBgFQAAgDACgDIACguIgBgLIgBgMQAAgNALAAQAFAAADAEQANgEALgCQAMgBAJAAQAaAAAPAGQAIADAAAHQAAAEgDAEQgDADgFABIgDgBQgSgFgRgBQgJAAgKACIgWAFIABALIgCAqIAugFIAagCQAEAAAEADQADADAAAFQAAAIgKACIgaACIgwAEIgBAPIAAANQAAAYADADQADAEAOAAIATAAIAUgBIAHAAIAGgCQALAAAAAMQAAAJgJACQgKABghAAQghAAgJgIg");
	this.shape_24.setTransform(202.5,0.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00CC00").s().p("AgrBKQgVgPABgTQgBgOALAAQAMAAgBANQAAAJANAJQAMAJALAAQAIAAADg3QACgYAAgnIAAgLIgHAAIgMAAIgNgBQgFAAgDgDQgDgDAAgFQAAgLAPAAIALAAIAKABIAUgBIAUgBQAZAAgBAMQABAFgDADQgDAEgFAAIgHgBIgHgBIgMAAIAAANQAABPgKAlQgHAYgRAAQgTAAgSgOg");
	this.shape_25.setTransform(188.1,1.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00CC00").s().p("AgyBTQgEgFAAgEIAAgfIACgrIADgsQgBgLACgTQAAgFADgCQAPgFASAAQASAAASANQAUAPAAAWQAAAbgWAQQARAGAIAIQAIAJAAAKQAAANgPAMQgJAIgLAEQgXAKgmAAQgEAAgFgEgAggArIAAAWQAcgBAQgHQAIgDAHgGQAGgGAAgCQAAgGgNgGQgLgEgJgDIgLgBIgEAAIgEAAIgNgBIAAAYgAgcg/IAAATIgCApIAQACQAPgCALgJQALgJAAgPQAAgLgMgIQgLgJgMAAIgQABg");
	this.shape_26.setTransform(174.3,0.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00CC00").s().p("Ag1BDQgXgUAAgfQAAgkAWgeQAZghAjAAQAjAAASAPQASARAAAjQAAAlgUAeQgYAhgkABQgeAAgUgSgAgmgkQgQAZAAAbQAAAWAPANQAPAMAVgBQAaABAQgbQAQgXAAgdQAAgZgLgLQgMgJgagBQgZAAgTAag");
	this.shape_27.setTransform(158.2,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape}]},4).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-198.9,-17.9,443.9,36);


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


(lib.SamTub = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SamTunRow("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(53.2,49.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:7.3},12).to({rotation:-7.7},23).to({rotation:0},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.2,-1,178.9,99.9);


(lib.Race2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A/FIeIAAw7MA+LAAAIAAQ7g");
	mask.setTransform(-5,33.5);

	// Layer 2
	this.instance = new lib.Wave1();
	this.instance.parent = this;
	this.instance.setTransform(-8,30.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-12,y:11.3},17).to({x:-8,y:30.2},14).to({x:6.8,y:45.8},14).to({x:-11.5,y:12.2},14).to({x:-8,y:30.2},10).wait(1));

	// Layer 3
	this.instance_1 = new lib.Wave2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1.3,64.9);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-2.7,y:51.7},13).to({x:15.7,y:84.5},25).to({x:9.3,y:76.1},11).to({x:6.9,y:73.3},12).to({x:1.3,y:64.9},8).wait(1));

	// Layer 1
	this.instance_2 = new lib.BuffyHangin();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-88.1,-50.8,0.317,0.317,0,0,0,-4.5,16.1);

	this.instance_3 = new lib.SlimWins();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-147.6,-52.8,1.029,1.029,0,0,0,-0.2,1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-204,-100.9,398.1,188.7);


(lib.MickBring = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.DoogArmRt("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-6,-30.8,1.236,1.427,0,71.3,-117,20.2,-5.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({startPosition:0},0).to({regX:20.3,skewX:26.3,skewY:-162,x:-1.8,y:-30.7},9).wait(25).to({skewX:26.3},0).to({regX:20.2,skewX:71.3,skewY:-117,x:-6,y:-30.8},8).wait(40));

	// supplies
	this.instance_1 = new lib.Basket("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(23,-8.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({startPosition:0},0).to({rotation:30,x:58,y:-12.4},9).wait(25).to({startPosition:0},0).to({rotation:0,x:23,y:-8.2},8).wait(40));

	// Layer 5
	this.instance_2 = new lib.MickLegR("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-8.8,5.5,1.448,1.213,0,-18.2,167.7,-9.8,-17.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({startPosition:0},0).to({skewX:-3.2,skewY:182.7,x:-10.5,y:3.8},6).wait(29).to({skewX:-3.2},0).to({skewX:-18.2,skewY:167.7,x:-8.8,y:5.5},8).wait(40));

	// Layer 1
	this.instance_3 = new lib.DoogBod("single",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(4.1,-1.4,1.464,1.193,0,0,180,0,21.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({startPosition:0},0).to({skewX:15,skewY:195},9).wait(25).to({startPosition:0},0).to({skewX:0,skewY:180},8).wait(40));

	// Layer 3
	this.instance_4 = new lib.MickArmL("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(28.1,-25.3,1.104,1.104,0,129.2,-39.2,7.7,15.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({startPosition:0},0).to({skewX:84.2,skewY:-84.2,x:32.3},9).wait(25).to({startPosition:0},0).to({skewX:129.2,skewY:-39.2,x:28.1},8).wait(40));

	// Layer 4
	this.instance_5 = new lib.MickLegL("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(8.2,3.9,1.448,1.213,0,18.2,-167.7,7.4,-20.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({startPosition:0},0).to({skewX:3.2,skewY:-182.7},6).wait(29).to({skewX:3.2},0).to({skewX:18.2,skewY:-167.7},8).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.3,-62.9,95.6,123.5);


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
		
		 window.open ("inf_Scene4a.html","_self");
		}
		
		function openPrev(){
		
		 window.open ("inf_Scene3a.html","_self");
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


(lib.InfinObjLesson = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		playSound("ball_passes");
	}
	this.frame_94 = function() {
		playSound("SENameofIdea");
	}
	this.frame_172 = function() {
		playSound("ball_passes");
	}
	this.frame_211 = function() {
		playSound("_6b");
	}
	this.frame_227 = function() {
		playSound("SENameofIdea");
	}
	this.frame_242 = function() {
		playSound("ball_passes");
	}
	this.frame_254 = function() {
		playSound("diagnal_line");
	}
	this.frame_284 = function() {
		playSound("SENameOfPerson");
	}
	this.frame_292 = function() {
		playSound("SENameOfPerson");
	}
	this.frame_300 = function() {
		playSound("highclick");
	}
	this.frame_351 = function() {
		playSound("_6b");
	}
	this.frame_383 = function() {
		playSound("SENameOfPerson");
	}
	this.frame_391 = function() {
		playSound("SENameOfPerson");
	}
	this.frame_398 = function() {
		playSound("lowclick");
	}
	this.frame_445 = function() {
		playSound("ball_passes");
	}
	this.frame_456 = function() {
		playSound("_6b");
	}
	this.frame_467 = function() {
		playSound("ball_passes");
	}
	this.frame_479 = function() {
		playSound("ball_passes");
	}
	this.frame_487 = function() {
		playSound("diagnal_line");
	}
	this.frame_503 = function() {
		playSound("SENameOfPerson");
	}
	this.frame_511 = function() {
		playSound("SENameOfPerson");
	}
	this.frame_518 = function() {
		playSound("highclick");
	}
	this.frame_560 = function() {
		playSound("_6b");
	}
	this.frame_577 = function() {
		playSound("diagnal_line");
	}
	this.frame_600 = function() {
		playSound("SENameOfPerson");
	}
	this.frame_608 = function() {
		playSound("SENameOfPerson");
	}
	this.frame_618 = function() {
		playSound("lowclick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(45).call(this.frame_94).wait(78).call(this.frame_172).wait(39).call(this.frame_211).wait(16).call(this.frame_227).wait(15).call(this.frame_242).wait(12).call(this.frame_254).wait(30).call(this.frame_284).wait(8).call(this.frame_292).wait(8).call(this.frame_300).wait(51).call(this.frame_351).wait(32).call(this.frame_383).wait(8).call(this.frame_391).wait(7).call(this.frame_398).wait(47).call(this.frame_445).wait(11).call(this.frame_456).wait(11).call(this.frame_467).wait(12).call(this.frame_479).wait(8).call(this.frame_487).wait(16).call(this.frame_503).wait(8).call(this.frame_511).wait(7).call(this.frame_518).wait(42).call(this.frame_560).wait(17).call(this.frame_577).wait(23).call(this.frame_600).wait(8).call(this.frame_608).wait(10).call(this.frame_618).wait(37));

	// slash1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2.5,1,1).p("AgiglIBFBL");
	this.shape.setTransform(224.1,170.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2.5,1,1).p("Ag5hGIBzCN");
	this.shape_1.setTransform(226.4,174);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2.5,1,1).p("AhRhnICjDP");
	this.shape_2.setTransform(228.8,177.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(2.5,1,1).p("AhoiIIDRER");
	this.shape_3.setTransform(231.1,180.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2.5,1,1).p("Ah/ipID/FT");
	this.shape_4.setTransform(233.4,183.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(2.5,1,1).p("AiXjKIEvGV");
	this.shape_5.setTransform(235.8,187.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(2.5,1,1).p("AgSgpIAmBT");
	this.shape_6.setTransform(410.7,198.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(2.5,1,1).p("Agag0IA1Bp");
	this.shape_7.setTransform(306,198.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(2.5,1,1).p("AHmhRIBSCwAo3heIBXCv");
	this.shape_8.setTransform(360.1,202.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(2.5,1,1).p("AHRh/IB8ENApMiMIB3D1");
	this.shape_9.setTransform(362.2,207);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(2.5,1,1).p("AG8iuICmFqAphi7ICYE6");
	this.shape_10.setTransform(364.3,211.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(2.5,1,1).p("AGnjcIDQHGAp2jpIC5GA");
	this.shape_11.setTransform(366.4,216.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(2.5,1,1).p("AGSkLID6IkAqLkYIDZHG");
	this.shape_12.setTransform(368.5,220.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},487).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[]},58).to({state:[{t:this.shape_7},{t:this.shape_6}]},27).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).wait(73));

	// slash2
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#333333").ss(3.5,1,1).p("Ag0g4IBpBx");
	this.shape_13.setTransform(397.9,182.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#333333").ss(3.5,1,1).p("AhdhtIC7Db");
	this.shape_14.setTransform(402.1,187.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#333333").ss(3.5,1,1).p("AiHiiIEPFG");
	this.shape_15.setTransform(406.2,193);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#333333").ss(3.5,1,1).p("AixjYIFjGx");
	this.shape_16.setTransform(410.4,198.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#333333").ss(3.5,1,1).p("AjbkNIG3Ib");
	this.shape_17.setTransform(414.6,203.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#333333").ss(3.5,1,1).p("AkFlCIILKF");
	this.shape_18.setTransform(418.8,208.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#333333").ss(3.5,1,1).p("Akvl3IJfLv");
	this.shape_19.setTransform(423,214.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_13}]},254).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[]},184).wait(211));

	// 1
	this.instance = new lib.Wecaps("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(46.7,324.2);
	this.instance._off = true;

	this.instance_1 = new lib.Mick();
	this.instance_1.parent = this;
	this.instance_1.setTransform(64.1,321.9,1.252,1.252,0,0,0,24.3,15.9);
	this.instance_1._off = true;

	this.instance_2 = new lib.Slim("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(3.9,319.7,0.869,0.869);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(234).to({_off:false},0).wait(50).to({startPosition:0},0).to({x:-41.2,y:206},8).to({x:7.7,y:220.8},8).to({_off:true},31).wait(20).to({_off:false,x:34,y:324.4},0).wait(32).to({startPosition:0},0).to({x:-5.3,y:180.3},8).to({x:15,y:219.2},7).to({_off:true},46).wait(211));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(467).to({_off:false},0).wait(36).to({x:16.1,y:198.1},8).to({x:29.3,y:229.5},7).to({_off:true},32).wait(105));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(560).to({_off:false},0).wait(40).to({startPosition:0},0).to({x:13.8,y:199.7},8).to({x:31.4,y:232.1},10).wait(37));

	// 2
	this.instance_3 = new lib.told("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(97.3,324.2);
	this.instance_3._off = true;

	this.instance_4 = new lib.want("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(88.8,324.4);
	this.instance_4._off = true;

	this.instance_5 = new lib.will("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(117.5,322.5);
	this.instance_5._off = true;

	this.instance_6 = new lib.should("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(65.1,320.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(234).to({_off:false},0).wait(50).to({startPosition:0},0).to({x:110.9,y:189.7},8).to({x:162.5,y:219.2},8).to({_off:true},31).wait(324));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(351).to({_off:false},0).wait(32).to({startPosition:0},0).to({x:151.9,y:184.8},8).to({x:161.4,y:219.2},7).to({_off:true},46).wait(211));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(467).to({_off:false},0).wait(36).to({startPosition:0},0).to({x:123.2,y:188},8).to({x:127,y:229},7).to({_off:true},32).wait(105));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(560).to({_off:false},0).wait(40).to({startPosition:0},0).to({x:114.4,y:199.3},8).to({x:124.5,y:230.3},10).wait(37));

	// 3
	this.instance_7 = new lib.Slim("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(153.4,324.2);
	this.instance_7._off = true;

	this.instance_8 = new lib.Sam("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(147.6,324.4);
	this.instance_8._off = true;

	this.instance_9 = new lib.get("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(163.3,322.2);
	this.instance_9._off = true;

	this.instance_10 = new lib.tell("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(122.2,320.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(234).to({_off:false},0).wait(50).to({startPosition:0},0).to({x:101.8,y:116.3},8).to({x:169.7,y:123.1},8).to({_off:true},31).wait(324));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(351).to({_off:false},0).wait(32).to({startPosition:0},0).to({x:87.9,y:107.1},8).to({x:169.4,y:122.3},7).to({_off:true},46).wait(211));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(467).to({_off:false},0).wait(36).to({startPosition:0},0).to({x:194.3,y:188},8).to({x:182.9,y:227.6},7).to({_off:true},32).wait(105));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(560).to({_off:false},0).wait(40).to({startPosition:0},0).to({x:228.3,y:199.3},8).to({x:194.1,y:230.3},10).wait(37));

	// 4
	this.instance_11 = new lib.to();
	this.instance_11.parent = this;
	this.instance_11.setTransform(198.7,324.2,1,1,0,0,0,14.6,19.4);
	this.instance_11._off = true;

	this.instance_12 = new lib.the();
	this.instance_12.parent = this;
	this.instance_12.setTransform(210,322.3,1.225,1.225,0,0,0,18.1,16);
	this.instance_12._off = true;

	this.instance_13 = new lib.Mick();
	this.instance_13.parent = this;
	this.instance_13.setTransform(170.2,320.6,1.112,1.112,0,0,0,24.3,16);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(234).to({_off:false},0).wait(50).to({x:239.5,y:77.5},8).to({rotation:45,x:244.4,y:145.7},8).to({_off:true},31).wait(20).to({_off:false,rotation:0,x:192,y:324.4},0).wait(32).to({x:231.4,y:80.7},8).to({rotation:45,x:245,y:145.9},7).to({_off:true},46).wait(211));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(467).to({_off:false},0).wait(36).to({x:262.6,y:202.3},8).to({regX:18,scaleX:1.22,scaleY:1.22,rotation:45,x:255.2,y:186.8},7).to({_off:true},32).wait(105));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(560).to({_off:false},0).wait(40).to({x:198.3,y:138.7},8).to({x:237.3,y:150.1},10).wait(37));

	// 5
	this.instance_14 = new lib.flex("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(242.7,324.2);
	this.instance_14._off = true;

	this.instance_15 = new lib.row("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(233.4,324.4);
	this.instance_15._off = true;

	this.instance_16 = new lib.guy("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(257.4,322.2);
	this.instance_16._off = true;

	this.instance_17 = new lib.to();
	this.instance_17.parent = this;
	this.instance_17.setTransform(211.9,320.1,0.916,0.916,0,0,0,14.6,19.4);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(234).to({_off:false},0).wait(50).to({startPosition:0},0).to({x:309.3,y:87.8},8).to({x:301.2,y:156.2},8).to({_off:true},31).wait(324));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(351).to({_off:false},0).wait(32).to({startPosition:0},0).to({x:304.1,y:83.5},8).to({x:301.4,y:157.2},7).to({_off:true},46).wait(211));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(467).to({_off:false},0).wait(36).to({startPosition:0},0).to({x:203.7,y:145.4},8).to({x:238.5,y:145.8},7).to({_off:true},32).wait(105));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(560).to({_off:false},0).wait(40).to({x:290,y:143.2},8).to({regX:14.5,rotation:45,x:301,y:166.9},10).wait(37));

	// 6
	this.instance_18 = new lib.his("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(290.7,324.2);
	this.instance_18._off = true;

	this.instance_19 = new lib.that("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(288.6,324.4);
	this.instance_19._off = true;

	this.instance_20 = new lib.to();
	this.instance_20.parent = this;
	this.instance_20.setTransform(297,322.2,1,1,0,0,0,14.6,19.4);
	this.instance_20._off = true;

	this.instance_21 = new lib.bring("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(255.7,319.9,0.87,0.87);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(234).to({_off:false},0).wait(50).to({startPosition:0},0).to({x:485,y:206},8).to({rotation:45,x:442.6},8).to({_off:true},31).wait(324));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(351).to({_off:false},0).wait(32).to({startPosition:0},0).to({x:481.3,y:213.9},8).to({rotation:45,x:441.8,y:208.6},7).to({_off:true},46).wait(211));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(467).to({_off:false},0).wait(36).to({x:295.7,y:127.1},8).to({rotation:45,x:301.6,y:169.2},7).to({_off:true},32).wait(105));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(560).to({_off:false},0).wait(40).to({startPosition:0},0).to({x:353.1,y:126.7},8).to({x:346.8,y:175.9},10).wait(37));

	// 7
	this.instance_22 = new lib.muscles("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(359.7,323.3);
	this.instance_22._off = true;

	this.instance_23 = new lib.tub("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(341,324.4);
	this.instance_23._off = true;

	this.instance_24 = new lib.bring("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(347.1,322.2);
	this.instance_24._off = true;

	this.instance_25 = new lib.the();
	this.instance_25.parent = this;
	this.instance_25.setTransform(306.6,320.1,1.09,1.09,0,0,0,18.1,16);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(234).to({_off:false},0).wait(50).to({startPosition:0},0).to({x:460.5,y:87.8},8).to({x:419,y:155.2},8).to({_off:true},31).wait(324));
	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(351).to({_off:false},0).wait(32).to({startPosition:0},0).to({x:441.6,y:145.9},8).to({x:407.7,y:157.2},7).to({_off:true},46).wait(211));
	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(467).to({_off:false},0).wait(36).to({startPosition:0},0).to({x:354,y:124.6},8).to({x:351.5,y:175.2},7).to({_off:true},32).wait(105));
	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(560).to({_off:false},0).wait(40).to({x:453.5,y:250.5},8).to({rotation:60,x:435.2,y:219.5},10).wait(37));

	// 8
	this.instance_26 = new lib.food("synched",0);
	this.instance_26.parent = this;
	this.instance_26.setTransform(411.4,322.2);
	this.instance_26._off = true;

	this.instance_27 = new lib.supplies("synched",0);
	this.instance_27.parent = this;
	this.instance_27.setTransform(371.1,320.2);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(467).to({_off:false},0).wait(36).to({startPosition:0},0).to({x:436,y:124.6},8).to({x:431.8,y:176.2},7).to({_off:true},32).wait(105));
	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(560).to({_off:false},0).wait(40).to({startPosition:0},0).to({x:430,y:126.2},8).to({x:436.3,y:173.9},10).wait(37));

	// 9
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAZA8QgMAAgGgdIgFgZIgCgXIgJAUIgQAsQgCAEgCACQgDAHgIAAQgIAAgHggQgEgRgEgbIgDgQIgBgRQAAgEADgDQADgDAFAAQAIAAACAJIACAQIACAPIAGAwIAZhMQADgMAIAAQAJAAADAOIAHAmQAEAaADAQIAIgeIAOg5QACgHAHAAQAFAAADADQADADAAAFIgBAFQgIAjgOArQgDAKgHAKQgDAFgGAAIgBAAg");
	this.shape_20.setTransform(448.3,324.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AggAtQgOgOgBgZQAAgYAMgSQAPgWAaAAQAWAAALAUQAJAPgBAXQAAAXgMARQgOATgWAAQgSAAgNgOgAgTgVQgHAMAAAPQAAAPAJAJQAHAHAJAAQALAAAIgIQAJgJAAgPQACgpgYAAQgPAAgJAPg");
	this.shape_21.setTransform(434.8,324.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAaA0IgDgXIgBgYIAAgIIAAgLQAAgXgIAAQgMAAgKAOQgKANgGATIgBALIAAAKIAAAKIABAKQAAAEgDADQgDADgFAAQgEAAgDgDQgDgDAAgEIgBgKIAAgKIABgeIACgeIgBgKIAAgLQAAgEADgDQADgDAFgBQAJAAABAOIABANQASgYASAAQARAAAHAPQAEALABATIAAALIAAAJQAAAJACAOQACAOAAAJQAAAFgDADQgDACgEAAQgKAAgBgKg");
	this.shape_22.setTransform(423.8,323.9);

	this.instance_28 = new lib.now("synched",0);
	this.instance_28.parent = this;
	this.instance_28.setTransform(436.9,320.5);
	this.instance_28._off = true;

	this.text = new cjs.Text("now", "22px 'Comic Sans MS'");
	this.text.lineHeight = 33;
	this.text.parent = this;
	this.text.setTransform(333.8,190.5,1,1,60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},560).to({state:[{t:this.instance_28}]},40).to({state:[{t:this.instance_28}]},8).to({state:[{t:this.text}]},10).wait(37));
	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(600).to({_off:false},0).to({x:285.3,y:220.9},8).to({_off:true,rotation:60,x:333.8,y:190.5,text:"now",font:"22px 'Comic Sans MS'",color:"#000000",textAlign:0,lineHeight:32.7,lineWidth:38},10).wait(37));

	// 10
	this.instance_29 = new lib.SamTub("synched",0);
	this.instance_29.parent = this;
	this.instance_29.setTransform(52.4,-0.7,0.76,0.768,0,0,180);
	this.instance_29.alpha = 0;
	this.instance_29._off = true;

	this.instance_30 = new lib.SlimWins();
	this.instance_30.parent = this;
	this.instance_30.setTransform(464.5,52.8,1.368,1.257,0,0,180,-0.2,1.7);
	this.instance_30.alpha = 0;
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(351).to({_off:false},0).to({alpha:1},8).wait(86).to({startPosition:29},0).to({alpha:0,startPosition:36},7).to({_off:true},1).wait(202));
	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(560).to({_off:false},0).to({alpha:1},8).wait(87));

	// Carat
	this.instance_31 = new lib.CaratforInfinitiveObjDRAWN();
	this.instance_31.parent = this;
	this.instance_31.setTransform(162.4,269.1,1.382,1.382,0,0,0,65.5,37.8);
	this.instance_31.alpha = 0;
	this.instance_31._off = true;

	this.instance_32 = new lib.CaratforInfinitiveObj();
	this.instance_32.parent = this;
	this.instance_32.setTransform(162.4,269.1,1.382,1.382,0,0,0,65.5,37.8);
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(93).to({_off:false},0).to({alpha:1},15).to({_off:true},64).wait(483));
	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(172).to({_off:false},0).to({scaleX:0.98,scaleY:0.98,x:177,y:80.2},12).wait(58).to({regX:65.6,regY:37.9,scaleX:1.16,scaleY:1.16,x:243.8,y:186.8},12).wait(190).to({regX:65.5,regY:37.8,scaleX:0.7,scaleY:0.7,x:188.1,y:60.3},9).wait(26).to({regX:65.7,scaleX:0.95,scaleY:0.95,x:300.5,y:201.3},6).wait(170));

	// SENTENCE
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(0,0,0,0.6)").s().p("AgKALQgEgFAAgGQAAgFAEgFQAFgEAFAAQAHAAAEAEQAEAFAAAFQAAAGgEAFQgEAEgHAAQgFAAgFgEg");
	this.shape_23.setTransform(408.3,334);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(0,0,0,0.6)").s().p("AghBEQgTgHAAgMQAAgFAEgDQADgFAFAAQAEAAAGAHQADADAKABIAOACQAJAAAIgDQALgDAAgIQAAgRgXgFIgLgEQgRgDgGgFQgKgFAAgOQAAgZAYgMQAHgDAPgFIAXgHQAFgCAGgBQAFABAEADQADADAAAGIACALIABAKQAAAFgDAEQgEADgFAAQgHAAgCgEQgCgEgBgKQgKACgTAHQgSAHAAAMIAHACQAbAFAOAJQATALAAAZQAAAUgRAKQgOAJgVgBQgQABgOgGg");
	this.shape_24.setTransform(398.7,327.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(0,0,0,0.6)").s().p("AgpA1QgTgQAAgbQAAgeAQgWQAQgXAcgBQAUABANAGQAPAJAAARQAAANgOAJQgGAFgTAIIguAWQAHALAKAEQAKAFANABQAIAAAMgEQAOgEAEgGQAEgHAFAAQAEABAEADQADADAAAEQAAANgWAKQgTAJgRgBQgbAAgRgNgAgYggQgKALgFAXIAlgRQAVgLAKgIQgLgJgSAAQgOAAgKALg");
	this.shape_25.setTransform(386.3,328.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(0,0,0,0.6)").s().p("AgNBZIACgtIABgsIABgrIAAgsQAAgNALAAQAMAAAAANIAAAsIgBArIgCA8IgBAdQgBAMgKAAQgMAAAAgMg");
	this.shape_26.setTransform(375.8,324.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(0,0,0,0.6)").s().p("AgiA2QgSgQAAgaQAAgYARgaQASgeAWAAQAMAAAPAGQASAHAAALQAAAEgDAEQgDAEgEAAQgEAAgDgDIgFgEQgHgGgQAAQgMAAgMAXQgLAUAAAOQAAAQALAJQAKAJAPAAQAIAAAIgEIAOgHIAFgCQAFAAADADQAEAEAAAEQAAAJgTAJQgRAHgLAAQgYAAgQgPg");
	this.shape_27.setTransform(366,328.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(0,0,0,0.6)").s().p("AghBEQgTgHAAgMQAAgFAEgDQADgFAFAAQAEAAAGAHQADADAKABIAOACQAJAAAIgDQALgDAAgIQAAgRgXgFIgLgEQgRgDgGgFQgKgFAAgOQAAgZAYgMQAHgDAPgFIAXgHQAFgCAGgBQAFABAEADQADADAAAGIACALIABAKQAAAFgDAEQgEADgFAAQgHAAgCgEQgCgEgBgKQgKACgTAHQgSAHAAAMIAHACQAbAFAOAJQATALAAAZQAAAUgRAKQgOAJgVgBQgQABgOgGg");
	this.shape_28.setTransform(353.1,327.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(0,0,0,0.6)").s().p("AAbA6QgPAIgTAAQgQAAgKgHQgMgIgCgPQgFggAAgZQAAgQAEgWQABgKAKAAQAGAAADADQAEADAAAGIgCASIgCASIABAiQACAPACAJIAIADIAIABQAPABATgGIAAgZIgBgXQAAgaADgTQABgMAKAAQAGABADADQAEADAAAFIgDAvIAAAZIABAaIAAAIIAAAJQAAAFgDADQgEAEgFAAQgJAAgDgMg");
	this.shape_29.setTransform(340.9,328.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(0,0,0,0.6)").s().p("AgGBIQgEgEAAgFQAAgPgDgdQgDgbAAgPQAAgNgDgHQgJAEgJAIIgOAQIgGAIIgCAVIgBAVIABAKIABAKQAAAFgDADQgEADgFAAQgOAAAAgfIABgWIACgVIgBgTIgCgUQAAgbANAAQAFAAAEAEQAEAEAAAFIgBAHIgBAIIABAMQAGgNAMgKQANgLAIAAQATAAAHATQAGgJAKgEQAJgFAMAAQAUAAAIAWQABAFAEAeQADAUAFAxQABAFgEADQgEADgFAAQgKAAgBgKQgDgOgCgYIgEglQgBgIgDgIQgEgLgFAAQgFAAgMAHQgMAHgDAFQgBALABAMIAEAfQACATAAANQAAAFgDAEQgEADgFAAQgEAAgDgDg");
	this.shape_30.setTransform(324.9,328.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(0,0,0,0.6)").s().p("AghBEQgTgHAAgMQAAgFAEgDQADgFAFAAQAEAAAGAHQADADAKABIAOACQAJAAAIgDQALgDAAgIQAAgRgXgFIgLgEQgRgDgGgFQgKgFAAgOQAAgZAYgMQAHgDAPgFIAXgHQAFgCAGgBQAFABAEADQADADAAAGIACALIABAKQAAAFgDAEQgEADgFAAQgHAAgCgEQgCgEgBgKQgKACgTAHQgSAHAAAMIAHACQAbAFAOAJQATALAAAZQAAAUgRAKQgOAJgVgBQgQABgOgGg");
	this.shape_31.setTransform(301.1,327.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(0,0,0,0.6)").s().p("AgLBYQgEgDAAgFIAAgWIAAgWIABgdIABgbQAAgGADgDQAEgEAFAAQAEAAAEAEQADADAAAGIgBAbIgBAdIAAAWIAAAWQAAAFgDADQgDAEgFAAQgFAAgDgEgAgHhCQgEgFAAgFQAAgGAEgEQAEgFAFAAQAGAAAEAFQAEAEAAAGQAAAFgEAFQgEAEgGAAQgFAAgEgEg");
	this.shape_32.setTransform(292.1,325.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(0,0,0,0.6)").s().p("AAiBcQgDgJgDgTQgCgSAAgLIAAgKIAAgJQAAgXgLAAQgPABgLANQgHAHgKAUQAAAvgFAIQgDAIgHAAQgFAAgEgEQgEgDAAgFIACgFQAAgDABgPIAAgSIAAhZIABgUIgBgMIgBgMQAAgFADgDQAEgEAFABQAKAAACAKQACAMAAAJIgBAbQgBANABAOIAAALQAJgNAMgIQAKgGANAAQAVAAAHANQAGAKAAAUIABAYIADAZQABAOACAMIABADQAAAFgEADQgDADgGAAQgIAAgCgJg");
	this.shape_33.setTransform(281.3,325);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(0,0,0,0.6)").s().p("AAmBCIgmgzIgZAZIgUAUQgEAEgEAAQgFAAgEgDQgEgEAAgFQABgDADgEIAKgLIALgLIAagaIgQgXQgJgOgIgGQgEgEAAgFQAAgFADgEQAEgDAEAAQAHAAAPASIAUAeIAYgWQAPgOAFgIQAEgGAGAAQAEAAAEADQAEAEgBAFQAAAGgLAMIgSARIgVAVIAoAzQACAEAAAEQABAFgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_34.setTransform(259.1,327.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(0,0,0,0.6)").s().p("AgpA1QgTgQAAgbQAAgeAQgWQAQgXAcgBQAUABANAGQAPAJAAARQAAANgOAJQgGAFgTAIIguAWQAHALAKAEQAKAFANABQAIAAAMgEQAOgEAEgGQAEgHAFAAQAEABAEADQADADAAAEQAAANgWAKQgTAJgRgBQgbAAgRgNgAgYggQgKALgFAXIAlgRQAVgLAKgIQgLgJgSAAQgOAAgKALg");
	this.shape_35.setTransform(245.1,328.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(0,0,0,0.6)").s().p("AgNBZIACgtIABgsIABgrIAAgsQAAgNALAAQAMAAAAANIAAAsIgBArIgCA8IgBAdQgBAMgKAAQgMAAAAgMg");
	this.shape_36.setTransform(234.6,324.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(0,0,0,0.6)").s().p("AgTBoQgEgDAAgFIAAgDQADgPAAgTIAAghIAAgjIgTABQgNAAAAgLQAAgMAWgBIALAAIACgTQADgbALgNQAMgPAaAAQASAAAAALQAAAMgQAAQgeAAgDApIgBAIIAbgCQAUAAAAAMQAAAJgJACIgLABQgFgBgXACIgBAbIABAXIAAAWQAAAYgCANQgCAJgIAAQgFAAgEgDg");
	this.shape_37.setTransform(224.6,325.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(0,0,0,0.6)").s().p("AgkA0QgQgRgBgcQgBgbAPgVQARgZAdAAQAZAAAMAXQAKASAAAZQAAAagOATQgQAWgZAAQgUAAgPgPgAgVgYQgIAOAAARQAAARAKAKQAIAIAKAAQAMAAAJgJQALgKAAgSQACgugbAAQgRAAgKARg");
	this.shape_38.setTransform(204.2,328.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(0,0,0,0.6)").s().p("AgHBWQgEgDAAgFIABgOIAAgOIgChGIgbgCQgLgCAAgKQAAgGADgDQADgEAFAAIAaACIAAgQIgBgPQAAgGADgDQAEgDAFAAQAKAAACASIAAALIAAAHIAAAHIARgCQANAAAEABQAHADAAAJQAAAFgDAEQgDADgGAAIgGAAIgGAAIgQACIACBHIAAAFIAAAGQABAbgOAAQgDAAgEgDg");
	this.shape_39.setTransform(191.9,326.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(0,0,0,0.6)").s().p("AgGBIQgEgEAAgFQAAgPgDgdQgDgbAAgPQAAgNgDgHQgJAEgJAIIgOAQIgGAIIgCAVIgBAVIABAKIABAKQAAAFgDADQgEADgFAAQgOAAAAgfIABgWIACgVIgBgTIgCgUQAAgbANAAQAFAAAEAEQAEAEAAAFIgBAHIgBAIIABAMQAGgNAMgKQANgLAIAAQATAAAHATQAGgJAKgEQAJgFAMAAQAUAAAIAWQABAFAEAeQADAUAFAxQABAFgEADQgEADgFAAQgKAAgBgKQgDgOgCgYIgEglQgBgIgDgIQgEgLgFAAQgFAAgMAHQgMAHgDAFQgBALABAMIAEAfQACATAAANQAAAFgDAEQgEADgFAAQgEAAgDgDg");
	this.shape_40.setTransform(169.1,328.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(0,0,0,0.6)").s().p("AgLBYQgEgDAAgFIAAgWIAAgWIABgdIABgbQAAgGADgDQAEgEAFAAQAEAAAEAEQADADAAAGIgBAbIgBAdIAAAWIAAAWQAAAFgDADQgDAEgFAAQgFAAgDgEgAgHhCQgEgFAAgFQAAgGAEgEQAEgFAFAAQAGAAAEAFQAEAEAAAGQAAAFgEAFQgEAEgGAAQgFAAgEgEg");
	this.shape_41.setTransform(156,325.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(0,0,0,0.6)").s().p("AgNBZIABgtIACgsIABgrIAAgsQAAgNALAAQAMAAAAANIgBAsIAAArIgCA8IgBAdQgBAMgKAAQgMAAAAgMg");
	this.shape_42.setTransform(148.8,324.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(0,0,0,0.6)").s().p("AgwBUQgXgKAAgTQgBgFAEgDQAEgDAFAAQAGAAAEAHQAHAJAFAEQAKAHAUAAQASAAAQgJQAVgKAAgTQAAgPgSgJQgPgIgUgBQgUAAgNgHQgSgKAAgSQAAgWAZgSQAYgRAYAAQAMAAAPAEQATAFAAAJQAAAKgLAAIgRgDQgMgCgHAAQgSAAgNAJQgOAKAAANQAAALASADIAZAEQAcACAQAPQAPANAAAUQAAAegbARQgYAPgdAAQgXAAgSgJg");
	this.shape_43.setTransform(136.8,325.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(0,0,0,0.6)").s().p("AgrBUQgRgSAAgbQAAggASgTQAQgUAbAAQAOAAAIAEIAMAJQABg0ACgRQACgLAJAAQAMAAAAAMQAAAQgFA6QgCARABASQgBAqAEAUIAAADQABAEgEAEQgDADgFAAQgIAAgDgLQgJAHgJADQgJADgKAAQgZAAgRgQgAgcACQgLAMAAAZQAAAPAMAMQALALAPAAQAKAAAGgDIAOgLIADgEIAAgVIAAgOIAAgOQgEgKgIgEQgHgFgLAAQgUAAgKALg");
	this.shape_44.setTransform(113.2,324.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(0,0,0,0.6)").s().p("AgNBZIABgtIACgsIABgrIAAgsQAAgNALAAQAMAAAAANIgBAsIAAArIgCA8IgBAdQgBAMgKAAQgMAAAAgMg");
	this.shape_45.setTransform(102.5,324.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(0,0,0,0.6)").s().p("AgkA0QgQgRgBgcQgBgbAPgVQARgZAdAAQAZAAAMAXQAKASAAAZQAAAagOATQgQAWgZAAQgUAAgPgPgAgVgYQgIAOAAARQAAARAKAKQAIAIAKAAQAMAAAJgJQALgKAAgSQACgugbAAQgRAAgKARg");
	this.shape_46.setTransform(92.2,328.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(0,0,0,0.6)").s().p("AgHBWQgEgDAAgFIABgOIAAgOIgChGIgbgCQgLgCAAgKQAAgGADgDQADgEAFAAIAaACIAAgQIgBgPQAAgGADgDQAEgDAFAAQAKAAACASIAAALIAAAHIAAAHIARgCQANAAAEABQAHADAAAJQAAAFgDAEQgDADgGAAIgGAAIgGAAIgQACIACBHIAAAFIAAAGQABAbgOAAQgDAAgEgDg");
	this.shape_47.setTransform(79.9,326.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(0,0,0,0.6)").s().p("AgpA1QgTgQAAgbQAAgeAQgWQAQgXAcgBQAUABANAGQAPAJAAARQAAANgOAJQgGAFgTAIIguAWQAHALAKAEQAKAFANABQAIAAAMgEQAOgEAEgGQAEgHAFAAQAEABAEADQADADAAAEQAAANgWAKQgTAJgRgBQgbAAgRgNgAgYggQgKALgFAXIAlgRQAVgLAKgIQgLgJgSAAQgOAAgKALg");
	this.shape_48.setTransform(60,328.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(0,0,0,0.6)").s().p("AAcBgQgGgDABgGQgGgPgCgJIgKg1QgFgggCgTQgLAogMAbQgPAggDATIABAFQAAAFgFAEQgFADgFABQgRgBAAgPIgDgPIgOg8QgHgdgUg5IgBgEQABgMANAAQAHAAAEAJIAKAZQAHAWAHAfIAMA2QANgfANgqIALglQALgbAKAAQAJAAADAJQAFAKAEAnQADAUAGAcIAKAwQAQgoAZhCIAGgWQAEgPAEgIQAFgHAHAAQANAAAAANIgFAMIgEANIgHAWIgkBXQgFAOgNAcQgEAIgJAAQgFAAgEgDg");
	this.shape_49.setTransform(40.5,325.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(0,0,0,0.6)").s().p("AgKALQgEgFAAgGQAAgFAEgFQAEgEAGAAQAHAAAEAEQAEAFAAAFQAAAGgEAFQgEAEgHAAQgGAAgEgEg");
	this.shape_50.setTransform(363.8,334.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(0,0,0,0.6)").s().p("AglBcQgDAFgGAAQgEAAgEgDQgDgDAAgFIABgJIAAgKIgBgmIgBgmIABgiIAAgiQAAgHADgGQAEgIAGAAQAKAAgBALIAAAFIgBAFIAAAbIAAAfQAKgHAKgEQAJgDAIAAQAbAAAQAUQAPASAAAbQAAAcgSATQgSAUgZAAQgTAAgQgHgAgTgFIgRALIAAAVIAAAUIAAAUIARAGQAHADAKAAQAQAAALgNQAMgMAAgTQAAgSgKgMQgJgMgRAAQgJAAgLAFg");
	this.shape_51.setTransform(353.4,325.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(0,0,0,0.6)").s().p("AAbA6QgPAIgTAAQgQAAgKgHQgMgIgCgPQgFggAAgZQAAgQAEgVQABgLAKAAQAGAAADADQAEADAAAGIgCASIgCASIABAjQACAOACAJIAIADIAIABQAPAAATgFIAAgYIgBgYQAAgaADgTQABgLAKAAQAGgBADAEQAEAEAAAEIgDAuIAAAaIABAaIAAAIIAAAJQAAAFgDAEQgEADgFAAQgJAAgDgMg");
	this.shape_52.setTransform(339.3,328.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(0,0,0,0.6)").s().p("AAnA+IgIgIIgVAJQgJADgFAAQgcAAgNgQQgNgPAAgfQAAgdAVgVQAUgVAbAAQALAAANAGQARAHAAAJQAAAEgDACIgCAPIAAAbQgBAPADAJIAHAVIADAHIABACQAAAEgEAEQgDADgEAAQgDAAgGgGgAgUgeQgNAQAAATQAAAUAHAKQAHAKAOAAQALAAAIgEIAMgKQgEgfAAgQIABgLIACgOIgIgDIgFgBQgSAAgOAPg");
	this.shape_53.setTransform(295.3,328.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(0,0,0,0.6)").s().p("AAhBdQgDgKgCgTQgCgSAAgLIABgKIAAgKQAAgVgMAAQgPgBgMANQgGAIgLAUQAAAugDAJQgEAIgHgBQgFAAgEgDQgEgDAAgFIABgFQACgEAAgOIAAgSIABhZIAAgVIgBgLIgBgLQAAgGAEgDQADgEAFAAQAKAAACALQACAMAAAJIgBAcQgBAMAAAOIAAALQAKgOAMgGQALgHAMAAQAUAAAIANQAFAJABAVIABAYIACAZQACAPADAKIAAAEQAAAFgDAEQgEACgFAAQgJABgDgJg");
	this.shape_54.setTransform(281.8,325.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(0,0,0,0.6)").s().p("AgHBWQgEgDAAgFIABgOIAAgOIgChGIgbgCQgLgCAAgKQAAgGADgDQADgEAFAAIAaACIAAgQIgBgPQAAgGADgDQAEgDAFAAQAKAAACASIAAALIAAAHIAAAHIARgCQANAAAEABQAHADAAAJQAAAFgDAEQgDADgGAAIgGAAIgGAAIgQACIACBHIAAAFIAAAGQABAbgOAAQgDAAgEgDg");
	this.shape_55.setTransform(268.5,326.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(0,0,0,0.6)").s().p("AAHAjIgEgcIgEgaIgKAWIgSAyQgCAFgDADQgDAGgJABQgIAAgKgkQgEgUgEgfIgDgSIgCgSQABgGADgDQADgDAFAAQAKAAACAKIADASIABASIAIA1QANglAPgxQAEgNAJAAQAJAAAEAPIAIAsQAFAeAEARIAJghIAPhCQACgHAJAAQAEAAAFADQADADAAAGIgBAFQgKAogPAxQgDAMgIALQgFAGgHABQgNgBgIghg");
	this.shape_56.setTransform(246.7,328.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(0,0,0,0.6)").s().p("AguA4IAAhVIAAgMIAAgMQAAgMALAAQAMAAAAAUQAXgWAcAAQAKAAAFAHQAEAHAAAPIAAAJQgBAPgLAAQgKAAAAgMIAAgIIgBgLQgTADgLAIQgLAIgHAQIAABCQAAAMgMAAQgKAAAAgMg");
	this.shape_57.setTransform(219.3,328.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(0,0,0,0.6)").s().p("AgHBWQgEgDAAgFIABgOIAAgOIgChGIgbgCQgLgCAAgKQAAgGADgDQADgEAFAAIAaACIAAgQIgBgPQAAgGADgDQAEgDAFAAQAKAAACASIAAALIAAAHIAAAHIARgCQANAAAEABQAHADAAAJQAAAFgDAEQgDADgGAAIgGAAIgGAAIgQACIACBHIAAAFIAAAGQABAbgOAAQgDAAgEgDg");
	this.shape_58.setTransform(186.4,326.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(0,0,0,0.6)").s().p("AAnA+IgIgIIgVAJQgJADgFAAQgcAAgNgQQgNgPAAgfQAAgdAVgVQAUgVAbAAQALAAANAGQARAHAAAJQAAAEgDACIgCAPIAAAbQgBAPADAJIAHAVIADAHIABACQAAAEgEAEQgDADgEAAQgDAAgGgGgAgUgeQgNAQAAATQAAAUAHAKQAHAKAOAAQALAAAIgEIAMgKQgEgfAAgQIABgLIACgOIgIgDIgFgBQgSAAgOAPg");
	this.shape_59.setTransform(147.3,328.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(0,0,0,0.6)").s().p("AgwBVQgXgLAAgSQgBgGAEgCQAEgEAFAAQAGAAAEAHQAHAJAFAEQAKAGAUAAQASABAQgJQAVgLAAgSQAAgQgSgIQgPgIgUAAQgUgBgNgHQgSgKAAgSQAAgWAZgSQAYgRAYAAQAMAAAPAEQATAFAAAIQAAALgLAAIgRgDQgMgCgHAAQgSAAgNAKQgOAJAAANQAAALASADIAZADQAcACAQAQQAPANAAAUQAAAdgbASQgYAPgdAAQgXAAgSgIg");
	this.shape_60.setTransform(132.3,325.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(0,0,0,0.6)").s().p("AgHBWQgEgDAAgFIABgOIAAgOIgChGIgbgCQgLgCAAgKQAAgGADgDQADgEAFAAIAaACIAAgQIgBgPQAAgGADgDQAEgDAFAAQAKAAACASIAAALIAAAHIAAAHIARgCQANAAAEABQAHADAAAJQAAAFgDAEQgDADgGAAIgGAAIgGAAIgQACIACBHIAAAFIAAAGQABAbgOAAQgDAAgEgDg");
	this.shape_61.setTransform(110.1,326.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(0,0,0,0.6)").s().p("AAeA7IgEgaQgCgOAAgNIABgLIAAgLQABgbgLABQgNAAgMAQQgLAOgGAXIgBALIgBAMIABALIAAALQAAAGgCADQgEAEgFgBQgFABgEgEQgDgDAAgGIgBgLIgBgLIACgiIACgiIAAgMIgBgMQAAgFADgEQAEgDAFAAQALAAABAQIAAAOQAVgbAUAAQAUAAAIARQAFALABAXIAAAMIAAALQgBAKADAQQADAQAAAKQAAAGgEADQgDADgFAAQgLAAgBgMg");
	this.shape_62.setTransform(98,328.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(0,0,0,0.6)").s().p("AAnA+IgIgIIgVAJQgJADgFAAQgcAAgNgQQgNgPAAgfQAAgdAVgVQAUgVAbAAQALAAANAGQARAHAAAJQAAAEgDACIgCAPIAAAbQgBAPADAJIAHAVIADAHIABACQAAAEgEAEQgDADgEAAQgDAAgGgGgAgUgeQgNAQAAATQAAAUAHAKQAHAKAOAAQALAAAIgEIAMgKQgEgfAAgQIABgLIACgOIgIgDIgFgBQgSAAgOAPg");
	this.shape_63.setTransform(84.8,328.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(0,0,0,0.6)").s().p("AAIAjIgGgcIgDgaIgJAWIgTAyQgCAFgDADQgDAGgJABQgJAAgIgkQgFgUgEgfIgDgSIgBgSQAAgGADgDQAEgDAFAAQAJAAACAKIACASIADASIAGA1QAOglAPgxQAEgNAJAAQAJAAAEAPIAIAsQAEAeAEARIAJghIAQhCQACgHAIAAQAGAAADADQAFADAAAGIgCAFQgKAogPAxQgDAMgIALQgFAGgHABQgNgBgHghg");
	this.shape_64.setTransform(69.9,328.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(0,0,0,0.6)").s().p("AgpA1QgTgPAAgcQAAgeAQgWQAQgYAcABQAUgBANAIQAPAHAAASQAAAMgOAKQgGAFgTAIIguAWQAHAKAKAGQAKAEANAAQAIAAAMgDQAOgDAEgHQAEgGAFgBQAEAAAEADQADADAAAFQAAANgWALQgTAHgRABQgbAAgRgOgAgYggQgKAMgFAWIAlgRQAVgLAKgIQgLgKgSAAQgOAAgKAMg");
	this.shape_65.setTransform(47.2,328.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(0,0,0,0.6)").s().p("AAbBgQgEgDAAgGQgGgPgBgJIgKg1QgGgfgCgVQgLApgMAbQgOAggFASIACAGQAAAFgFAEQgEADgGAAQgRAAAAgOIgDgQIgOg8QgHgdgUg4IgBgGQAAgLANAAQAIAAAFAJIAJAZQAGAWAIAgIAMA1QANgfANgrIAMgkQALgbAJAAQAIAAAEAIQAEALAFAoQACATAHAbIAKAxQAQgnAZhCIAGgYQAEgOAFgIQAEgGAHgBQANAAAAAMIgFANIgEANIgHAWIgkBXQgGAPgLAbQgFAIgJAAQgGAAgEgDg");
	this.shape_66.setTransform(27.7,325.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(0,0,0,0.498)").s().p("AgKALQgEgFAAgGQAAgFAEgFQAEgEAGAAQAHAAAEAEQAEAFAAAFQAAAGgEAFQgEAEgHAAQgGAAgEgEg");
	this.shape_67.setTransform(441.3,332);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(0,0,0,0.498)").s().p("AgrBUQgRgSAAgbQAAggASgTQAQgUAbAAQAOAAAIAEIALAJQACg0ADgRQABgLAKAAQALAAAAAMQAAAQgFA7QgBAQAAATQAAApADAUIABADQgBAFgDADQgDADgFAAQgHAAgEgLQgJAGgJAEQgJADgKAAQgZAAgRgQgAgcACQgLAMAAAZQAAAQAMALQALALAPAAQAKAAAGgEIAOgKIADgDIAAgWIAAgOIAAgPQgEgJgIgEQgIgFgKAAQgUAAgKALg");
	this.shape_68.setTransform(430.7,322.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(0,0,0,0.498)").s().p("AgkA0QgQgRgBgcQgBgbAPgVQARgZAdAAQAZAAAMAXQAKASAAAZQAAAagOATQgQAWgZAAQgUAAgPgPgAgVgYQgIAOAAARQAAARAKAKQAIAIAKAAQAMAAAJgJQALgKAAgSQACgugbAAQgRAAgKARg");
	this.shape_69.setTransform(416.6,326.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(0,0,0,0.498)").s().p("AgkA0QgQgRgBgcQgBgbAPgVQARgZAdAAQAZAAAMAXQAKASAAAZQAAAagOATQgQAWgZAAQgUAAgPgPgAgVgYQgIAOAAARQAAARAKAKQAIAIAKAAQAMAAAJgJQALgKAAgSQACgugbAAQgRAAgKARg");
	this.shape_70.setTransform(403.4,326.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(0,0,0,0.498)").s().p("AgTBoQgEgDABgFIAAgDQACgPAAgTIAAghIAAgjIgTABQgNAAAAgLQAAgMAWgBIALAAIACgTQADgbALgNQALgPAbAAQASAAAAALQAAAMgQAAQgdAAgEApIAAAIIAbgCQATAAAAAMQAAAJgJACIgKABQgGgBgWACIgBAbIAAAXIABAWQAAAYgDANQgBAJgKAAQgEAAgEgDg");
	this.shape_71.setTransform(390.5,323.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(0,0,0,0.498)").s().p("AgqBfQgPgEAAgJQAAgLAKAAIAPACQAKACANAAQAWAAAJgXQAGgPAAgeQgGAMgJAGQgJAGgLAAQgWAAgOgPQgOgPAAgXQAAghATgUQAUgVAgAAQAMAAAHADQAIADAEAGQANAAAAAOQAAAJgDAPIgDAWIgDAoQAAAZgFAPQgFAUgMAKQgPALgbAAQgQAAgLgCgAgWg9QgLAPAAAWQAAASAGAIQAHAJAOgBQALAAAMgMQAKgNACgNQACgNADgcQgFgEgFgBQgFgCgGAAQgWAAgNAPg");
	this.shape_72.setTransform(370.1,329.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(0,0,0,0.498)").s().p("AAeA7IgDgaQgDgOAAgNIABgLIAAgLQAAgbgKAAQgNAAgMARQgKAOgHAWIgBAMIgBAMIABALIAAALQAAAFgDAEQgDADgGAAQgEAAgEgDQgEgEABgFIgBgLIgBgLIACgiIACgiIAAgMIgBgMQAAgFADgEQAEgDAFAAQALAAABAQIABAOQAUgbAUAAQAUAAAIARQAFAMABAWIAAAMIAAALQAAAKACAQQADAQAAAKQAAAFgEAEQgDADgGAAQgKAAgBgMg");
	this.shape_73.setTransform(357.4,326.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(0,0,0,0.498)").s().p("AgLBYQgEgDAAgFIAAgWIAAgWIABgdIABgbQAAgGADgDQAEgEAFAAQAEAAAEAEQADADAAAGIgBAbIgBAdIAAAWIAAAWQAAAFgDADQgDAEgFAAQgFAAgDgEgAgHhCQgEgFAAgFQAAgGAEgEQAEgFAFAAQAGAAAEAFQAEAEAAAGQAAAFgEAFQgEAEgGAAQgFAAgEgEg");
	this.shape_74.setTransform(347.3,323.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(0,0,0,0.498)").s().p("AgvA4IAAhVIABgMIAAgMQAAgMALAAQAMAAAAAUQAXgWAcAAQAKAAAEAHQAGAHAAAPIAAAJQgBAPgMAAQgLAAAAgMIAAgIIAAgLQgUADgKAIQgLAIgHAQIABBCQAAAMgNAAQgLAAAAgMg");
	this.shape_75.setTransform(338,326.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(0,0,0,0.498)").s().p("AgkBcQgFAFgFAAQgEAAgEgDQgDgDAAgFIABgJIAAgKIgBgmIgBgmIAAgiIAAgiQABgHADgGQADgIAHAAQAKAAAAALIgBAFIAAAFIgBAbIAAAfQALgHAJgEQAJgDAIAAQAbAAAQAUQAPASAAAbQAAAcgSATQgSAUgZAAQgTAAgPgHgAgSgFIgSALIAAAVIAAAUIAAAUIARAGQAHADAKAAQAQAAAMgNQALgMAAgTQAAgSgKgMQgJgMgRAAQgJAAgKAFg");
	this.shape_76.setTransform(324.4,323);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(0,0,0,0.498)").s().p("AgkA0QgQgRgBgcQgBgbAPgVQARgZAdAAQAZAAAMAXQAKASAAAZQAAAagOATQgQAWgZAAQgUAAgPgPgAgVgYQgIAOAAARQAAARAKAKQAIAIAKAAQAMAAAJgJQALgKAAgSQACgugbAAQgRAAgKARg");
	this.shape_77.setTransform(302.5,326.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(0,0,0,0.498)").s().p("AgHBWQgEgDAAgFIABgOIAAgOIgChGIgbgCQgLgCAAgKQAAgGADgDQADgEAFAAIAaACIAAgQIgBgPQAAgGADgDQAEgDAFAAQAKAAACASIAAALIAAAHIAAAHIARgCQANAAAEABQAHADAAAJQAAAFgDAEQgDADgGAAIgGAAIgGAAIgQACIACBHIAAAFIAAAGQABAbgOAAQgDAAgEgDg");
	this.shape_78.setTransform(290.2,324.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(0,0,0,0.498)").s().p("AggBgQgEgEAAgFQAAgMAbg6IgshUIgFgIQgEgGAAgEQAAgFAEgEQAEgDAFAAQAFAAADAEQAVAdAXA1IASgqQAKgWAJgQQAEgHAGAAQAFAAAEAEQAEADAAAFIgCAGIgqBbQgQAhgHAWIgIAYQgDAJgIAAQgFAAgEgDg");
	this.shape_79.setTransform(270,329.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(0,0,0,0.498)").s().p("AAbA6QgPAIgTAAQgQAAgKgHQgMgIgCgPQgFggAAgZQAAgQAEgWQABgKAKAAQAGAAADADQAEADAAAGIgCASIgCASIABAiQACAPACAJIAIADIAIABQAPABATgGIAAgYIgBgYQAAgaADgTQABgLAKAAQAGAAADADQAEAEAAAEIgDAuIAAAaIABAaIAAAIIAAAJQAAAFgDADQgEAEgFAAQgJAAgDgMg");
	this.shape_80.setTransform(257.4,326.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(0,0,0,0.498)").s().p("AgqBfQgPgEAAgJQAAgLAKAAIAPACQAKACANAAQAWAAAJgXQAGgPAAgeQgGAMgJAGQgJAGgLAAQgWAAgOgPQgOgPAAgXQAAghATgUQAUgVAgAAQAMAAAHADQAIADAEAGQANAAAAAOQAAAJgDAPIgDAWIgDAoQAAAZgFAPQgFAUgMAKQgPALgbAAQgQAAgLgCgAgWg9QgLAPAAAWQAAASAGAIQAHAJAOgBQALAAAMgMQAKgNACgNQACgNADgcQgFgEgFgBQgFgCgGAAQgWAAgNAPg");
	this.shape_81.setTransform(244.1,329.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("rgba(0,0,0,0.498)").s().p("AgpA1QgTgPAAgcQAAgeAQgWQAQgYAcAAQAUAAANAIQAPAHAAASQAAAMgOAKQgGAFgTAIIguAWQAHAKAKAGQAKAEANAAQAIAAAMgDQAOgDAEgHQAEgGAFgBQAEAAAEAEQADADAAAEQAAANgWALQgTAIgRAAQgbAAgRgOgAgYggQgKALgFAXIAlgRQAVgLAKgIQgLgKgSABQgOgBgKAMg");
	this.shape_82.setTransform(223.5,326.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("rgba(0,0,0,0.498)").s().p("AAiBcQgDgKgDgSQgCgSAAgLIAAgKIAAgJQAAgXgLAAQgPAAgLAOQgHAHgKAUQAAAvgFAIQgDAIgHAAQgFgBgEgDQgEgDAAgFIABgFQABgEAAgOIABgSIAAhZIABgVIgBgLIgBgLQAAgGADgDQAEgDAFAAQAKgBACALQACAMAAAJIgBAbQgBAOABANIAAALQAKgNALgIQALgGAMAAQAVAAAHANQAGAKAAAUIABAYIACAZQACAPACAKIABAEQAAAFgEAEQgDACgGAAQgIABgCgKg");
	this.shape_83.setTransform(209.4,323);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("rgba(0,0,0,0.498)").s().p("AgHBWQgEgDAAgFIABgOIAAgOIgChGIgbgCQgLgCAAgKQAAgGADgDQADgEAFAAIAaACIAAgQIgBgPQAAgGADgDQAEgDAFAAQAKAAACASIAAALIAAAHIAAAHIARgCQANAAAEABQAHADAAAJQAAAFgDAEQgDADgGAAIgGAAIgGAAIgQACIACBHIAAAFIAAAGQABAbgOAAQgDAAgEgDg");
	this.shape_84.setTransform(196.1,324.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("rgba(0,0,0,0.498)").s().p("AgHBWQgEgDAAgFIABgOIAAgOIgChGIgbgCQgLgCAAgKQAAgGADgDQADgEAFAAIAaACIAAgQIgBgPQAAgGADgDQAEgDAFAAQAKAAACASIAAALIAAAHIAAAHIARgCQANAAAEABQAHADAAAJQAAAFgDAEQgDADgGAAIgGAAIgGAAIgQACIACBHIAAAFIAAAGQABAbgOAAQgDAAgEgDg");
	this.shape_85.setTransform(176.8,324.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("rgba(0,0,0,0.498)").s().p("AgpA1QgTgPAAgcQAAgeAQgWQAQgYAcAAQAUAAANAIQAPAHAAASQAAAMgOAKQgGAFgTAIIguAWQAHAKAKAGQAKAEANAAQAIAAAMgDQAOgDAEgHQAEgGAFgBQAEAAAEAEQADADAAAEQAAANgWALQgTAIgRAAQgbAAgRgOgAgYggQgKALgFAXIAlgRQAVgLAKgIQgLgKgSABQgOgBgKAMg");
	this.shape_86.setTransform(164.3,326.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("rgba(0,0,0,0.498)").s().p("AgqBfQgPgEAAgJQAAgLAKAAIAPACQAKACANAAQAWAAAJgXQAGgPAAgeQgGAMgJAGQgJAGgLAAQgWAAgOgPQgOgPAAgXQAAghATgUQAUgVAgAAQAMAAAHADQAIADAEAGQANAAAAAOQAAAJgDAPIgDAWIgDAoQAAAZgFAPQgFAUgMAKQgPALgbAAQgQAAgLgCgAgWg9QgLAPAAAWQAAASAGAIQAHAJAOgBQALAAAMgMQAKgNACgNQACgNADgcQgFgEgFgBQgFgCgGAAQgWAAgNAPg");
	this.shape_87.setTransform(150.5,329.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("rgba(0,0,0,0.498)").s().p("AgNBZIACgtIABgsIABgrIAAgsQAAgNALAAQAMAAAAANIgBAsIAAArIgCA8IgBAdQgBAMgKAAQgMAAAAgMg");
	this.shape_88.setTransform(133.2,322.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("rgba(0,0,0,0.498)").s().p("AgNBZIABgtIACgsIABgrIAAgsQAAgNALAAQAMAAAAANIgBAsIAAArIgCA8IgBAdQgBAMgKAAQgMAAAAgMg");
	this.shape_89.setTransform(126.3,322.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("rgba(0,0,0,0.498)").s().p("AgLBYQgEgDAAgFIAAgWIAAgWIABgdIABgbQAAgGADgDQAEgEAFAAQAEAAAEAEQADADAAAGIgBAbIgBAdIAAAWIAAAWQAAAFgDADQgDAEgFAAQgFAAgDgEgAgHhCQgEgFAAgFQAAgGAEgEQAEgFAFAAQAGAAAEAFQAEAEAAAGQAAAFgEAFQgEAEgGAAQgFAAgEgEg");
	this.shape_90.setTransform(119.6,323.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("rgba(0,0,0,0.498)").s().p("AAIAjIgGgdIgCgaIgKAXIgTAyQgBAFgEACQgEAIgHAAQgKAAgIgkQgFgUgEgfIgDgTIgCgRQABgGADgDQADgEAGABQAJAAACAKIACASIACASIAHA1QAOgkAPgyQAEgNAJAAQAKAAADAPIAIAsQAFAeADARIAJghIAQhCQACgHAIAAQAFAAAEADQAEAEAAAFIgBAFQgKAogPAxQgDAMgIALQgFAGgHABQgNgBgHghg");
	this.shape_91.setTransform(107.4,326.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("rgba(0,0,0,0.498)").s().p("AAhBeQgHgNgNgRIgUgdIgWAQIgCAlQAAAFgDAEQgDADgGAAQgMAAAAgRIACgeIABgeIABgqIAAgqIAAgNIgBgNQAAgGADgDQAEgDAFgBQAFABAEADQADADAAAGIAAAOIABAMIgBAoIAAApQAQgNAPgOIAbgbQAEgFAEABQAFAAAEADQAEAEAAAFQAAAFgEADQgPASgWATIAbAkQATAaAAAHQAAAFgEAEQgEAEgFgBQgHAAgDgGg");
	this.shape_92.setTransform(85.3,322.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("rgba(0,0,0,0.498)").s().p("AgiA2QgSgQAAgaQAAgYARgaQASgeAWAAQAMAAAPAGQASAHAAALQAAAEgDAEQgDAEgEAAQgEAAgDgDIgFgEQgHgGgQAAQgMAAgMAXQgLAUAAAOQAAAQALAJQAKAJAPAAQAIAAAIgEIAOgHIAFgCQAFAAADADQAEAEAAAEQAAAJgTAJQgRAHgLAAQgYAAgQgPg");
	this.shape_93.setTransform(71.5,326.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("rgba(0,0,0,0.498)").s().p("AgLBYQgEgDAAgFIAAgWIAAgWIABgdIABgbQAAgGADgDQAEgEAFAAQAEAAAEAEQADADAAAGIgBAbIgBAdIAAAWIAAAWQAAAFgDADQgDAEgFAAQgFAAgDgEgAgHhCQgEgFAAgFQAAgGAEgEQAEgFAFAAQAGAAAEAFQAEAEAAAGQAAAFgEAFQgEAEgGAAQgFAAgEgEg");
	this.shape_94.setTransform(61.7,323.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("rgba(0,0,0,0.498)").s().p("ABLBcQgEgGgDgNIgEgVQgFgUgLhCIgZBJIgGAXQgFAOgEAJQgGAJgIAAQgGAAgFgIIgFgNIgDgNQgMgsgKgwIgFAWIgPBAQgBALgFAWQgEAKgJAAQgFAAgEgFQgDgDAAgGQAAgUAJgeIANgwIAHgmQAGgbAFgJQAGgHAHAAQAHAAAEAJQAFALAFAiQAHAoAOAuQARguANgzIADgSQADgLAEgGQAEgKAIAAQALAAAFAVQACAHADAWQAIA2AKAnIAGAVQAFARAAAEQAAAFgEADQgEAEgFAAQgHAAgEgHg");
	this.shape_95.setTransform(47.1,323.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("rgba(0,0,0,0.498)").s().p("AgJAJQgDgDAAgGQAAgFADgDQAEgEAFAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFAAQgFAAgEgEg");
	this.shape_96.setTransform(458.3,328.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("rgba(0,0,0,0.498)").s().p("AAZA8QgMAAgGgdIgFgZIgCgXIgJAUIgQAsQgCAEgCACQgDAHgIAAQgIAAgHggQgEgRgEgbIgDgQIgBgRQAAgEADgDQADgDAFAAQAIAAACAJIACAQIACAPIAGAwIAZhMQADgMAIAAQAJAAADAOIAHAmQAEAaADAQIAIgeIAOg5QACgHAHAAQAFAAADADQADADAAAFIgBAFQgIAjgOArQgDAKgHAKQgDAFgGAAIgBAAg");
	this.shape_97.setTransform(448,323.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("rgba(0,0,0,0.498)").s().p("AggAtQgOgOgBgZQAAgYAMgSQAPgWAaAAQAWAAALAUQAJAQAAAWQAAAXgNARQgOATgWAAQgRAAgOgOgAgTgVQgHAMAAAPQAAAPAJAJQAHAHAJAAQALAAAIgIQAJgJAAgPQACgpgYAAQgPAAgJAPg");
	this.shape_98.setTransform(434.5,323.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("rgba(0,0,0,0.498)").s().p("AAaA0IgDgXIgBgYIAAgIIAAgLQAAgXgIAAQgMAAgKAOQgKANgGATIgBALIAAAKIAAAKIABAJQAAAFgDADQgDADgFAAQgEAAgDgDQgDgDAAgFIgBgJIAAgKIABgeIACgfIgBgJIAAgLQAAgEADgDQADgDAFAAQAJAAABANIABANQASgYASAAQARAAAHAQQAEAJABAUIAAALIAAAJQAAAJACAOQACAOAAAJQAAAEgDADQgDADgEAAQgKAAgBgKg");
	this.shape_99.setTransform(423.5,323.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("rgba(0,0,0,0.498)").s().p("AgdA8QgRgHAAgKQAAgFAEgDQADgDAEAAQAEAAAFAFQACADAJACIANABQAIAAAGgCQAKgEAAgGQAAgPgUgFIgKgDQgOgDgGgEQgJgFAAgMQAAgXAVgJQAGgDAOgEIAUgHQAEgBAGgBQAEAAADADQADAEAAAEIABAJIACAJQAAAGgDACQgDADgFAAQgGAAgCgEQgCgDgBgIIgZAHQgQAHAAAKIAGACQAYAEAMAIQARAKAAAWQAAARgPAJQgMAIgSgBQgPAAgMgEg");
	this.shape_100.setTransform(405.3,323.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("rgba(0,0,0,0.498)").s().p("AgkAvQgQgOAAgYQAAgbANgTQAOgVAZAAQARAAAMAHQANAHAAAPQAAALgMAJQgGAEgQAHIgpATQAGAJAKAFQAIAEALAAQAHAAALgDQAMgDAEgGQADgGAFAAQADAAADADQAEADAAAEQgBAMgTAIQgQAIgQAAQgXAAgPgMgAgWgcQgIAKgEAUIAggPQATgKAIgHQgJgIgQAAQgNAAgJAKg");
	this.shape_101.setTransform(394.4,323.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("rgba(0,0,0,0.498)").s().p("AgKBOQgDgDAAgFIAAgTIAAgUIABgZIABgYQAAgFADgDQADgDAEAAQAEAAADADQADADAAAFIgBAYIgBAZIAAAUIAAATQAAAFgDADQgDADgDAAQgFAAgDgDgAgGg6QgEgEAAgFQAAgFAEgEQAEgEAEAAQAFAAAEAEQAEAEgBAFQABAFgEAEQgEADgFAAQgEAAgEgDg");
	this.shape_102.setTransform(385.3,321);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("rgba(0,0,0,0.498)").s().p("AgMBOIACgnIABgnIABgmIAAgnQAAgLAKAAQALAAAAALIgBAnIgBAmIgBA1IgBAZQgCALgIAAQgLAAAAgLg");
	this.shape_103.setTransform(379,320.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("rgba(0,0,0,0.498)").s().p("AgpBXQgDgDAAgFIAAgrIAAgpIgBgrIgCgWQAAgIADgFQADgGAGAAQAEAAADADQADADAAAEIAAADIgBAHQAJgHAJgDQAIgDAHAAQAWAAAKATQAJAQAAAZQAAAXgNAPQgNAQgWAAQgKAAgNgEIAAAzQAAAFgDADQgDADgFAAQgEAAgDgDgAgKg4QgFADgJAIIABAyQAMAFALAAQANAAAHgKQAGgIAAgOQAAgTgEgKQgFgKgKAAQgJAAgIAFg");
	this.shape_104.setTransform(370.2,326.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("rgba(0,0,0,0.498)").s().p("AgpBXQgDgDAAgFIAAgrIAAgpIgBgrIgCgWQAAgIADgFQADgGAGAAQAEAAADADQADADAAAEIAAADIgBAHQAJgHAJgDQAIgDAHAAQAWAAAKATQAJAQAAAZQAAAXgNAPQgNAQgWAAQgKAAgNgEIAAAzQAAAFgDADQgDADgFAAQgEAAgDgDgAgKg4QgFADgJAIIABAyQAMAFALAAQANAAAHgKQAGgIAAgOQAAgTgEgKQgFgKgKAAQgJAAgIAFg");
	this.shape_105.setTransform(358.5,326.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("rgba(0,0,0,0.498)").s().p("AAZAzQgOAIgRgBQgNAAgKgGQgKgGgCgOQgFgdABgUQgBgPAEgTQACgJAIAAQAFAAADACQADADAAAFIgCAQIgBARIABAdQABANADAHIAGAEIAHABQANgBAQgEIAAgWIAAgTQABgYACgRQABgKAJAAQAEAAAEADQACADAAAEIgBAqIAAAVIAAAYIAAAHIABAHQAAAEgDADQgDADgFABQgIAAgCgLg");
	this.shape_106.setTransform(346.8,323.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("rgba(0,0,0,0.498)").s().p("AgdA8QgRgHAAgKQAAgFAEgDQADgDAEAAQAEAAAFAFQACADAJACIANABQAIAAAGgCQAKgEAAgGQAAgPgUgFIgKgDQgOgDgGgEQgJgFAAgMQAAgXAVgJQAGgDAOgEIAUgHQAEgBAGgBQAEAAADADQADAEAAAEIABAJIACAJQAAAGgDACQgDADgFAAQgGAAgCgEQgCgDgBgIIgZAHQgQAHAAAKIAGACQAYAEAMAIQARAKAAAWQAAARgPAJQgMAIgSgBQgPAAgMgEg");
	this.shape_107.setTransform(335.4,323.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("rgba(0,0,0,0.498)").s().p("AgkAvQgQgOAAgYQAAgbANgTQAOgVAZAAQARAAAMAHQANAHAAAPQAAALgMAJQgGAEgQAHIgpATQAGAJAKAFQAIAEALAAQAHAAAKgDQANgDAEgGQAEgGAEAAQADAAADADQAEADAAAEQAAAMgUAIQgQAIgQAAQgXAAgPgMgAgWgcQgIAKgEAUIAhgPQASgKAIgHQgJgIgQAAQgNAAgJAKg");
	this.shape_108.setTransform(318,323.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("rgba(0,0,0,0.498)").s().p("AAdBRQgCgJgCgQQgCgPAAgKIAAgJIAAgIQAAgUgKAAQgNAAgKAMQgGAGgJASQAAApgEAHQgDAHgGAAQgFAAgDgDQgDgDAAgEIABgFQABgDAAgNIAAgQIABhNIAAgSIgBgLIgBgKQAAgEADgDQAEgDAEAAQAJAAABAJQACALAAAIIgBAXIAAAYIAAAJQAJgLAKgGQAJgGALAAQASAAAHALQAEAJABASIABAVIACAWQABAMADAKIAAADQAAAFgDADQgDACgFAAQgIAAgCgIg");
	this.shape_109.setTransform(305.6,320.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("rgba(0,0,0,0.498)").s().p("AgGBMQgDgDAAgEIAAgNIAAgMIgCg+IgYgBQgJgBAAgKQAAgFADgDQADgDAEAAIAXACIgBgPIAAgNQAAgEADgDQADgDAEgBQAJABACAPIAAAKIAAAGIAAAHIAPgCQALAAAEABQAGACAAAIQAAAFgDADQgDADgEAAIgGAAIgFAAIgPABIACA+IAAAGIABAFQAAAYgMAAQgDAAgDgDg");
	this.shape_110.setTransform(293.9,321.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("rgba(0,0,0,0.498)").s().p("AgkBTQgOgCAAgJQAAgJAJAAIANACQAJABALAAQAUAAAIgUQAFgNAAgbQgGALgIAFQgIAFgJAAQgTAAgNgNQgMgNAAgUQAAgdARgSQARgSAdAAQAKAAAGACQAHADAEAFQALAAAAANQAAAHgCANIgDAUIgCAkQgBAVgEAOQgFARgKAIQgNAKgYAAQgOAAgJgCgAgTg1QgKANAAATQAAAQAGAHQAGAHAMAAQAKAAAKgLQAJgLABgLQADgMACgZIgJgEQgEgCgFAAQgUAAgLAOg");
	this.shape_111.setTransform(276.1,326.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("rgba(0,0,0,0.498)").s().p("AAaA0IgDgXIgBgYIAAgIIAAgLQAAgXgIAAQgMAAgKAOQgKANgGATIgBALIAAAKIAAAKIABAJQAAAFgDADQgDADgFAAQgEAAgDgDQgDgDAAgFIgBgJIAAgKIABgeIACgfIgBgJIAAgLQAAgEADgDQADgDAFAAQAJAAABANIABANQASgYASAAQARAAAHAQQAEAJABAUIAAALIAAAJQAAAJACAOQACAOAAAJQAAAEgDADQgDADgEAAQgKAAgBgKg");
	this.shape_112.setTransform(265,323.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("rgba(0,0,0,0.498)").s().p("AgKBOQgDgDAAgFIAAgTIgBgUIACgZIABgYQAAgFADgDQADgDAEAAQAEAAADADQADADAAAFIgBAYIgBAZIAAAUIAAATQAAAFgDADQgDADgDAAQgFAAgDgDgAgGg6QgEgEAAgFQAAgFAEgEQAEgEAEAAQAFAAAEAEQAEAEgBAFQABAFgEAEQgEADgFAAQgEAAgEgDg");
	this.shape_113.setTransform(256.2,321);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("rgba(0,0,0,0.498)").s().p("AgpAxIAAhKIABgKIAAgMQAAgKAJAAQALAAAAARQAUgTAZAAQAIAAAFAHQAEAGAAANIAAAIQgBANgKAAQgJAAAAgLIgBgHIAAgJQgRACgJAHQgKAIgGAOIAAA5QAAALgKAAQgKAAAAgLg");
	this.shape_114.setTransform(247.9,323.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("rgba(0,0,0,0.498)").s().p("AggBQQgDAFgFAAQgEAAgDgCQgDgDAAgFIAAgIIAAgIIAAgiIgBghIAAgeIAAgeQAAgGADgFQAEgHAGAAQAIAAAAAJIgBAFIAAAEIAAAYIgBAbQAKgGAIgDQAJgEAGAAQAXAAAOASQAOAQAAAYQAAAZgQARQgQARgWAAQgRAAgNgHgAgQgEIgQAJIAAATIAAARIAAARIAPAGQAHACAIAAQAOAAAKgLQAKgLAAgQQAAgQgIgLQgIgKgPAAQgIAAgJAFg");
	this.shape_115.setTransform(236,320.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("rgba(0,0,0,0.498)").s().p("AggAtQgOgOgBgZQAAgYAMgSQAPgWAaAAQAWAAALAUQAJAQgBAWQAAAXgMARQgOATgWAAQgSAAgNgOgAgTgVQgHAMAAAPQAAAPAJAJQAHAHAJAAQALAAAIgIQAJgJAAgPQACgpgYAAQgPAAgJAPg");
	this.shape_116.setTransform(216.8,323.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("rgba(0,0,0,0.498)").s().p("AgGBMQgDgDAAgEIAAgNIAAgMIgCg+IgYgBQgJgBAAgKQAAgFADgDQADgDAEAAIAXACIgBgPIAAgNQAAgEADgDQADgDAEgBQAJABACAPIAAAKIAAAGIAAAHIAPgCQALAAAEABQAGACAAAIQAAAFgDADQgDADgEAAIgGAAIgFAAIgPABIACA+IAAAGIABAFQAAAYgMAAQgDAAgDgDg");
	this.shape_117.setTransform(206,321.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("rgba(0,0,0,0.498)").s().p("AAdBSQgGgKgLgPIgSgaIgTANIgCAhQAAAFgDADQgDADgEAAQgLAAAAgPIABgbIABgaIABglIAAglIAAgLIgBgLQAAgGAEgCQADgDAEgBQAEABADADQAEACAAAGIAAAMIABALIgBAiIAAAlQAOgLANgMIAXgZQAEgEAEAAQAEABADADQAEADAAAFQAAADgDADQgOAQgTARIAXAgQARAWAAAHQAAAEgDAEQgDACgFAAQgGAAgDgGg");
	this.shape_118.setTransform(189,320.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("rgba(0,0,0,0.498)").s().p("AgeAvQgPgOAAgXQAAgUAOgYQAQgaATAAQALABANAEQAQAGAAAKQAAAEgCADQgDADgEAAQgDAAgCgBIgFgFQgGgEgPAAQgKAAgKATQgKASAAAMQAAAOAKAJQAJAHANAAQAGAAAHgEIANgGIAFgCQAEAAACAEQADACAAAEQAAAIgQAIQgPAGgJABQgVAAgPgOg");
	this.shape_119.setTransform(176.8,323.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("rgba(0,0,0,0.498)").s().p("AgJBOQgDgDgBgFIAAgTIgBgUIACgZIABgYQAAgFADgDQADgDAFAAQADAAADADQADADAAAFIgBAYIgBAZIAAAUIABATQAAAFgEADQgDADgDAAQgEAAgDgDgAgGg6QgEgEABgFQgBgFAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAFQAAAFgEAEQgEADgFAAQgEAAgEgDg");
	this.shape_120.setTransform(168.3,321);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("rgba(0,0,0,0.498)").s().p("ABCBRQgDgFgDgMIgEgTQgEgRgJg5IgWA/IgGAUIgIAUQgFAJgGgBQgHABgEgIIgEgLIgDgLQgLgngIgqIgEAUIgOA3QgBAKgEATQgDAJgIAAQgFAAgDgEQgDgDAAgFQAAgRAHgbIANgqIAFgiQAFgYAFgHQAFgGAGAAQAHAAAEAIQADAKAGAdQAFAjANAoQAOgoAMgtIADgPQACgKADgGQAEgIAIAAQAJAAAFASQABAGADATQAGAwAKAiIAFATQAEAPAAADQAAAEgEAEQgDADgEAAQgGAAgEgGg");
	this.shape_121.setTransform(155.4,321.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("rgba(0,0,0,0.498)").s().p("AgMBOIACgnIABgnIABgmIAAgnQAAgLAKAAQALAAAAALIgBAnIgBAmIgBA1IgBAZQgCALgIAAQgLAAAAgLg");
	this.shape_122.setTransform(136,320.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("rgba(0,0,0,0.498)").s().p("AgMBOIACgnIABgnIAAgmIABgnQAAgLAKAAQAKAAABALIgBAnIgBAmIgCA1IgBAZQgBALgIAAQgLAAAAgLg");
	this.shape_123.setTransform(130,320.6);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("rgba(0,0,0,0.498)").s().p("AgkAvQgRgOAAgYQAAgbAOgTQAPgVAYAAQARAAALAHQAOAHAAAPQAAALgMAJQgGAEgQAHIgpATQAGAJAKAFQAIAEALAAQAHAAAKgDQANgDAEgGQAEgGAEAAQADAAAEADQACADAAAEQABAMgUAIQgRAIgPAAQgXAAgPgMgAgVgcQgKAKgEAUIAigPQASgKAIgHQgJgIgQAAQgNAAgIAKg");
	this.shape_124.setTransform(121.1,323.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("rgba(0,0,0,0.498)").s().p("AgGBMQgDgDAAgEIAAgNIAAgMIgCg+IgYgBQgJgBAAgKQAAgFADgDQADgDAEAAIAXACIgBgPIAAgNQAAgEADgDQADgDAEgBQAJABACAPIAAAKIAAAGIAAAHIAPgCQALAAAEABQAGACAAAIQAAAFgDADQgDADgEAAIgGAAIgFAAIgPABIACA+IAAAGIABAFQAAAYgMAAQgDAAgDgDg");
	this.shape_125.setTransform(109.7,321.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("rgba(0,0,0,0.498)").s().p("AgmBJQgOgPAAgYQAAgcAPgRQAPgRAXAAQAMAAAIAEIAKAHQABgtACgPQABgKAJAAQAKAAAAAKQgBAPgEAzIgBAfQAAAjADATIAAACQAAAEgDAEQgCACgFAAQgGAAgDgJQgIAFgIADQgJADgIAAQgWAAgPgPgAgYACQgKAKABAWQgBAOALAKQAJAJANABQAJAAAFgDQAEgDAIgGIAEgEIAAgTIAAgMIAAgNQgFgIgGgDQgHgFgJAAQgSAAgIAKg");
	this.shape_126.setTransform(91.5,320.8);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("rgba(0,0,0,0.498)").s().p("AgLBOIABgnIABgnIAAgmIABgnQAAgLAJAAQAMAAAAALIgBAnIgBAmIgCA1IgBAZQgBALgIAAQgKAAAAgLg");
	this.shape_127.setTransform(82.1,320.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("rgba(0,0,0,0.498)").s().p("AAYAzQgNAIgQgBQgPAAgJgGQgKgGgCgOQgFgdAAgUQAAgPAEgTQACgJAIAAQAFAAADACQADADAAAFIgBAQIgCARIABAdQABANACAHIAIAEIAHABQANgBAPgEIAAgWIAAgTQAAgYACgRQABgKAKAAQAEAAADADQAEADAAAEIgDAqIAAAVIABAYIAAAHIABAHQgBAEgDADQgDADgEABQgJAAgCgLg");
	this.shape_128.setTransform(73.4,323.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("rgba(0,0,0,0.498)").s().p("AggAtQgOgOgBgZQAAgYAMgSQAPgWAaAAQAWAAALAUQAJAQgBAWQAAAXgMARQgOATgWAAQgSAAgNgOgAgTgVQgHAMAAAPQAAAPAJAJQAHAHAJAAQALAAAIgIQAJgJAAgPQACgpgYAAQgPAAgJAPg");
	this.shape_129.setTransform(61.7,323.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("rgba(0,0,0,0.498)").s().p("AAdBRQgCgJgCgQQgCgPAAgKIAAgJIAAgIQAAgUgKAAQgNAAgKAMQgGAGgJASQAAApgEAHQgDAHgGAAQgFAAgDgDQgDgDAAgEIABgFQABgDAAgNIAAgQIABhNIAAgSIgBgLIgBgKQAAgEADgDQAEgDAEAAQAJAAABAJQACALAAAIIgBAXIAAAYIAAAJQAJgLAKgGQAJgGALAAQASAAAHALQAEAJABASIABAVIACAWQABAMADAKIAAADQAAAFgDADQgDACgFAAQgIAAgCgIg");
	this.shape_130.setTransform(49.9,320.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("rgba(0,0,0,0.498)").s().p("AgdA8QgRgHAAgKQAAgFAEgDQADgDAEAAQAEAAAFAFQACADAJACIANABQAIAAAGgCQAKgEAAgGQAAgPgUgFIgKgDQgOgDgGgEQgJgFAAgMQAAgXAVgJQAGgDAOgEIAUgHQAEgBAGgBQAEAAADADQADAEAAAEIABAJIACAJQAAAGgDACQgDADgFAAQgGAAgCgEQgCgDgBgIIgZAHQgQAHAAAKIAGACQAYAEAMAIQARAKAAAWQAAARgPAJQgMAIgSgBQgPAAgMgEg");
	this.shape_131.setTransform(37.8,323.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("rgba(0,0,0,0.498)").s().p("AgFA/QgDgDAAgFQAAgNgDgZQgDgZAAgNQAAgLgDgGQgHADgIAIIgNAOIgFAHIgCASIgBASIABAJIABAJQAAAEgDADQgDADgFAAQgMAAAAgbIABgUIACgSIgBgRIgBgRQAAgYALAAQAEAAADADQAEAEAAAEIgBAGIAAAHIAAALQAFgLALgJQALgKAIAAQARAAAFARQAGgIAIgEQAIgEALAAQASAAAGAUQACADADAbIAHA8QABAFgEADQgDADgEAAQgJAAgCgKIgEghIgDggQgBgIgDgHQgEgJgEAAQgEAAgLAGIgNAKIAAAVIAEAbQACARAAALQAAAFgDADQgDADgFAAQgEAAgCgDg");
	this.shape_132.setTransform(17.8,323.8);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("rgba(0,0,0,0.498)").s().p("AgKBOQgCgDAAgFIgBgTIAAgUIABgZIABgYQAAgFADgDQADgDAEAAQAEAAADADQADADAAAFIgBAYIgBAZIAAAUIAAATQAAAFgCADQgDADgEAAQgFAAgDgDgAgGg6QgDgEgBgFQABgFADgEQAEgEAEAAQAFAAAEAEQADAEABAFQgBAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_133.setTransform(6.2,321);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("rgba(0,0,0,0.498)").s().p("AgMBOIACgnIABgnIAAgmIABgnQAAgLAKAAQAKAAABALIgBAnIgBAmIgCA1IgBAZQgBALgIAAQgLAAAAgLg");
	this.shape_134.setTransform(-0.1,320.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("rgba(0,0,0,0.498)").s().p("AgrBKQgUgJAAgQQAAgFADgCQADgDAFAAQAFAAAEAGQAGAIAEADQAJAGASAAQAPAAAOgHQATgKAAgQQAAgOgQgHQgNgHgSgBQgRAAgMgGQgPgJAAgQQAAgTAWgQQAVgPAVAAQAKAAANAEQASAEAAAIQAAAJgKAAIgPgCQgLgDgGAAQgQABgLAIQgMAIAAAMQAAAJAQADQAGACAQABQAYACAOANQANAMAAASQAAAZgYAQQgUANgbAAQgTAAgRgIg");
	this.shape_135.setTransform(-10.6,321.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47,p:{x:79.9,y:326.2}},{t:this.shape_46,p:{x:92.2,y:328.4}},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39,p:{x:191.9,y:326.2}},{t:this.shape_38,p:{x:204.2,y:328.4}},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30,p:{x:324.9,y:328.3}},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},211).to({state:[]},120).to({state:[{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_30,p:{x:163.6,y:328.5}},{t:this.shape_58},{t:this.shape_46,p:{x:198.7,y:328.5}},{t:this.shape_57},{t:this.shape_38,p:{x:231.3,y:328.5}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_47,p:{x:307.5,y:326.4}},{t:this.shape_39,p:{x:326.8,y:326.4}},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50}]},20).to({state:[]},86).to({state:[{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67}]},19).to({state:[]},94).to({state:[{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96}]},10).wait(95));

	// Diag.
	this.instance_33 = new lib.SentenceLine();
	this.instance_33.parent = this;
	this.instance_33.setTransform(185.7,233,1.134,1.134,0,0,0,205.5,29.3);
	this.instance_33.alpha = 0;
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(227).to({_off:false},0).to({alpha:1},19).wait(221).to({regX:205.6,scaleX:0.93,scaleY:0.93,x:176.3,y:240.4},5).wait(183));

	// Def
	this.instance_34 = new lib.InfinitObjDef();
	this.instance_34.parent = this;
	this.instance_34.setTransform(222.8,104.9,1.069,1.069);
	this.instance_34._off = true;

	this.instance_35 = new lib.MickBring("synched",8);
	this.instance_35.parent = this;
	this.instance_35.setTransform(-14.9,47.7,0.858,0.858);
	this.instance_35.alpha = 0;
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(56).to({_off:false},0).wait(104).to({alpha:0},10).to({_off:true},1).wait(484));
	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(459).to({_off:false},0).to({alpha:1},8).wait(188));

	// Title
	this.instance_36 = new lib.InfinitivecanhaveanObject();
	this.instance_36.parent = this;
	this.instance_36.setTransform(182,66.5,1.265,1.265,0,0,0,-8.2,1.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(42).to({regX:-8.3,regY:1.7,scaleX:0.98,scaleY:0.98,x:197.9,y:2.9},14).wait(116).to({regY:1.6,scaleX:0.87,scaleY:0.87,x:205.7,y:1.5},0).to({scaleX:0.87,scaleY:0.87,x:97.6,y:-32.3},8).wait(475));

	// White
	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("rgba(255,255,255,0.843)").s().p("EgsqAD+IAAn7MBZVAAAIAAH7g");
	this.shape_136.setTransform(221.7,61.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("rgba(255,255,255,0.831)").s().p("EgsnAD5IAAnxMBZPAAAIAAHxg");
	this.shape_137.setTransform(221.6,57.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("rgba(255,255,255,0.824)").s().p("EgslADzIAAnlMBZLAAAIAAHlg");
	this.shape_138.setTransform(221.5,52.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("rgba(255,255,255,0.812)").s().p("EgsiADuIAAnbMBZFAAAIAAHbg");
	this.shape_139.setTransform(221.5,48.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("rgba(255,255,255,0.804)").s().p("EgsgADoIAAnPMBZBAAAIAAHPg");
	this.shape_140.setTransform(221.4,44.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("rgba(255,255,255,0.792)").s().p("EgsdADjIAAnFMBY7AAAIAAHFg");
	this.shape_141.setTransform(221.3,40.4);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("rgba(255,255,255,0.784)").s().p("EgsaADeIAAm7MBY2AAAIAAG7g");
	this.shape_142.setTransform(221.3,36.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("rgba(255,255,255,0.773)").s().p("EgsYADYIAAmwMBYxAAAIAAGwg");
	this.shape_143.setTransform(221.2,32);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("rgba(255,255,255,0.761)").s().p("EgsWADTIAAmlMBYtAAAIAAGlg");
	this.shape_144.setTransform(221.1,27.8);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("rgba(255,255,255,0.753)").s().p("EgsTADOIAAmbMBYnAAAIAAGbg");
	this.shape_145.setTransform(221.1,23.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("rgba(255,255,255,0.741)").s().p("EgsRADIIAAmPMBYjAAAIAAGPg");
	this.shape_146.setTransform(221,19.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("rgba(255,255,255,0.733)").s().p("EgsOADDIAAmFMBYdAAAIAAGFg");
	this.shape_147.setTransform(220.9,15.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("rgba(255,255,255,0.722)").s().p("EgsMAC9IAAl6MBYZAAAIAAF6g");
	this.shape_148.setTransform(220.9,11.1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("rgba(255,255,255,0.714)").s().p("EgsJAC4IAAlvMBYTAAAIAAFvg");
	this.shape_149.setTransform(220.8,6.9);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("rgba(255,255,255,0.702)").s().p("EgsHACzIAAllMBYPAAAIAAFlg");
	this.shape_150.setTransform(220.7,2.7);

	this.instance_37 = new lib.SlimWins();
	this.instance_37.parent = this;
	this.instance_37.setTransform(-3.1,90.4,2.132,2.132,0,0,0,-0.3,1.7);
	this.instance_37.alpha = 0;
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_136}]}).to({state:[{t:this.shape_136}]},42).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[]},111).to({state:[{t:this.instance_37}]},44).to({state:[{t:this.instance_37}]},10).to({state:[{t:this.instance_37}]},116).to({state:[{t:this.instance_37}]},10).wait(308));
	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(211).to({_off:false},0).to({alpha:1},10).wait(116).to({scaleX:1.49,scaleY:1.49,x:-13.9,y:63.8,alpha:0},10).wait(308));

	// Bk
	this.instance_38 = new lib.Bk();
	this.instance_38.parent = this;
	this.instance_38.setTransform(220.8,167.7,1.024,1.233,0,0,0,253.7,150.7);
	this.instance_38.alpha = 0;
	this.instance_38._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(49).to({_off:false},0).to({alpha:1},7).wait(599));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.2,35.9,571.8,51.5);


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
(lib.inf_Scene3b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene3b:0,scene3b_repeat:838});

	// timeline functions:
	this.frame_4 = function() {
		playSound("aninfinitivecantakeobject");
	}
	this.frame_50 = function() {
		playSound("objectofinfinitive");
	}
	this.frame_226 = function() {
		playSound("WetoldSlimtoflex");
	}
	this.frame_350 = function() {
		playSound("WeWantSamtorowtub");
	}
	this.frame_465 = function() {
		playSound("MickwillgetGuy");
	}
	this.frame_560 = function() {
		playSound("Slimshouldtellmick");
	}
	this.frame_846 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(46).call(this.frame_50).wait(176).call(this.frame_226).wait(124).call(this.frame_350).wait(115).call(this.frame_465).wait(95).call(this.frame_560).wait(286).call(this.frame_846).wait(1));

	// content
	this.instance = new lib.InfinObjLesson();
	this.instance.parent = this;
	this.instance.setTransform(269.8,204,0.814,0.814,0,0,0,216.7,183.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(847));

	// char
	this.instance_1 = new lib.Race2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(279.6,238.8,1.171,1.171);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(847));

	// main
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,53.9,1,1,0,0,0,54,40.5);

	this.instance_2 = new lib.Bkr();
	this.instance_2.parent = this;
	this.instance_2.setTransform(277.3,192,1.171,1.171);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.UI}]}).wait(847));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(281.2,200.6,552,398.7);
// library properties:
lib.properties = {
	id: '69AA7AD229968149920B67FD04548525',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/aninfinitivecantakeobject.mp3", id:"aninfinitivecantakeobject"},
		{src:"sounds/bgmusic.mp3", id:"bgmusic"},
		{src:"sounds/bgmusic2.mp3", id:"bgmusic2"},
		{src:"sounds/bgmInf.mp3", id:"bgmInf"},
		{src:"sounds/ball_passes.mp3", id:"ball_passes"},
		{src:"sounds/_3a.mp3", id:"_3a"},
		{src:"sounds/_4b.mp3", id:"_4b"},
		{src:"sounds/wrong_answer.mp3", id:"wrong_answer"},
		{src:"sounds/SENameofIdea.mp3", id:"SENameofIdea"},
		{src:"sounds/diagnal_line.mp3", id:"diagnal_line"},
		{src:"sounds/_7a.mp3", id:"_7a"},
		{src:"sounds/highclick.mp3", id:"highclick"},
		{src:"sounds/lowclick.mp3", id:"lowclick"},
		{src:"sounds/MickwillgetGuy.mp3", id:"MickwillgetGuy"},
		{src:"sounds/objectofinfinitive.mp3", id:"objectofinfinitive"},
		{src:"sounds/parrotmove1.mp3", id:"parrotmove1"},
		{src:"sounds/parrotmove2.mp3", id:"parrotmove2"},
		{src:"sounds/SENameOfPerson.mp3", id:"SENameOfPerson"},
		{src:"sounds/Slimshouldtellmick.mp3", id:"Slimshouldtellmick"},
		{src:"sounds/_6b.mp3", id:"_6b"},
		{src:"sounds/WetoldSlimtoflex.mp3", id:"WetoldSlimtoflex"},
		{src:"sounds/WeWantSamtorowtub.mp3", id:"WeWantSamtorowtub"},
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
an.compositions['69AA7AD229968149920B67FD04548525'] = {
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