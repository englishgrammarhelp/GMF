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


(lib.wild = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgiBCQgOgOAAgVQAAgaAOgOQAOgRAVABQALAAAGADIAKAHIADg3QABgJAIAAQAJAAAAAJQAAAOgEAvIgBAbQAAAhADAQIAAADQAAAEgDACQgDADgDAAQgGgBgDgIQgHAEgIADQgHADgIAAQgUAAgNgOgAgWABQgIAKAAAUQAAANAJAJQAIAIAMABQAIAAAFgEQAEgBAHgHIADgDIAAgRIAAgLIAAgLQgEgIgGgDQgGgEgJAAQgPAAgIAIg");
	this.shape.setTransform(32.7,16.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgKBHIABgjIABgkIAAgiIABgkQAAgJAIAAQAKAAAAAJIAAAkIgBAiIgBAwIgBAXQgBAKgIAAQgJgBAAgJg");
	this.shape_1.setTransform(24.1,16.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgIBHQgDgDgBgEIAAgSIAAgRIABgXIABgWQAAgEADgDQACgDAFAAQACAAADADQADADAAAEIgBAWIgBAXIABARIAAASQAAAEgDADQgDACgDABQgEgBgCgCgAgGg1QgDgDAAgFQAAgEADgEQAEgEADAAQAFAAAEAEQADAEAAAEQAAAFgDADQgEADgFAAQgDAAgEgDg");
	this.shape_2.setTransform(18.8,16.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAGAcIgEgXIgCgUIgIARIgPApIgDAFQgDAGgHAAQgHAAgIgdQgDgPgEgZIgCgPIgBgOQAAgFADgCQACgDAFAAQAHAAACAIIACAOIACAPIAFArQALgdAMgoQADgLAHAAQAIAAACANIAHAjIAHAlIAHgaIANg1QABgGAHAAQAEAAADADQADADAAAEIgBAEQgHAggNAnQgDAJgGAKQgDAFgHAAQgKgBgGgag");
	this.shape_3.setTransform(9,19.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.wild, new cjs.Rectangle(0,0,40.7,31.9), null);


(lib.whistle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AghAqQgPgMAAgWQAAgYANgSQANgSAWAAQAQAAAKAFQAMAHAAAOQAAAKgLAIIgUAKIglARQAGAIAIAEQAIAFAKAAQAHAAAJgDQALgDAEgFQADgGAEAAQADAAADADQADADAAADQAAALgSAIQgPAGgOAAQgVAAgOgLgAgUgZQgHAJgEARIAegNQAQgJAIgGQgJgIgOAAQgMAAgIAKg");
	this.shape.setTransform(63.2,19.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgKBHIABgjIABgkIAAgiIABgkQAAgJAIAAQAKAAAAAJIAAAkIgBAiIgBAwIgBAXQgBAKgIAAQgJgBAAgJg");
	this.shape_1.setTransform(54.8,16.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgFBEQgDgCAAgEIAAgLIAAgLIgCg4IgWgCQgIgBAAgJQAAgDACgDQADgDAEAAIAUABIAAgNIAAgMQAAgEADgCQADgDADAAQAJAAABAOIAAAIIAAAHIAAAFIANgBQALAAADABQAGABAAAIQAAAEgCADQgEADgEAAIgEgBIgGAAIgMACIACA5IAAAEIAAAFQAAAVgKAAQgEAAgCgDg");
	this.shape_2.setTransform(47.4,17.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgbA2QgPgFAAgKQABgEADgDQACgDAFAAQADAAAEAFQADACAIACIALABQAHAAAGgCQAJgDAAgGQAAgNgSgFIgJgCQgNgDgGgEQgHgEgBgLQAAgVATgJIATgGQANgDAFgDQAEgCAFAAQAEAAACADQADADAAAEIACAIIABAJQgBAEgCADQgDADgEAAQgFAAgDgEQgBgDgBgIIgXAHQgPAGAAAKIAGABQAWAEALAHQAQAKAAATQAAAQgOAIQgLAHgRAAQgNAAgMgFg");
	this.shape_3.setTransform(37.5,18.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgJBHQgCgDAAgEIAAgSIgBgRIABgXIABgWQAAgEACgDQADgDAEAAQAEAAADADQACADAAAEIgBAWIgBAXIABARIAAASQAAAEgDADQgCACgEABQgEgBgDgCgAgGg1QgDgDAAgFQAAgEADgEQAEgEADAAQAGAAADAEQADAEAAAEQAAAFgDADQgDADgGAAQgDAAgEgDg");
	this.shape_4.setTransform(30.3,16.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAaBKIgEgXIgBgXIAAgIIAAgIQAAgRgJAAQgMAAgJAKQgFAGgJAQQAAAmgDAGQgDAGgGAAQgEAAgDgCQgDgDAAgEIABgEQABgDAAgMIABgOIAAhHIABgQIgBgJIgBgKQAAgEADgCQACgDAFAAQAIAAABAIIABARIAAAWIgBAVIAAAJQAIgLAKgFQAIgGAKAAQAQAAAGALQAEAHABARIABATIACAUIADAUIABADQAAAEgDADQgDACgEAAQgHAAgDgHg");
	this.shape_5.setTransform(21.7,16.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAGAcIgEgXIgCgUIgIARIgPApIgDAFQgDAGgHAAQgHAAgIgdQgDgPgEgZIgCgPIgBgOQAAgFADgCQACgDAFAAQAHAAACAIIACAOIACAPIAFArQALgdAMgoQADgLAHAAQAIAAACANIAHAjIAHAlIAHgaIANg1QABgGAHAAQAEAAADADQADADAAAEIgBAEQgHAggNAnQgDAJgGAKQgDAFgHAAQgKgBgGgag");
	this.shape_6.setTransform(9,19.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.whistle, new cjs.Rectangle(0,0,70.7,31.9), null);


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


(lib.shells = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgWAvQgNgFgBgJQABgDACgCQACgCAEgBQADAAAEAFQACACAHABIAKAAQAFABAGgCQAHgDAAgFQABgLgRgFIgHgBQgLgDgFgDQgHgDAAgKQAAgSARgHIAPgFIAQgGQAEgCADABQAEgBADADQABADAAADIABAHIABAHQAAAEgCACQgCADgEAAQgEAAgCgDQgCgDgBgGIgTAGQgMAFAAAIIAEABQATAEAJAFQAOAIAAARQAAAOgLAHQgLAFgNAAQgMAAgJgDg");
	this.shape.setTransform(42.9,16.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgJA9IABgfIABgeIABgeIAAgeQAAgIAHAAQAJAAAAAIIgBAeIAAAeIgBApIgBAUQgBAIgGAAQgJAAAAgIg");
	this.shape_1.setTransform(36.6,14.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgJA9IABgfIABgeIABgeIAAgeQAAgIAHAAQAJAAAAAIIgBAeIAAAeIgBApIgBAUQgBAIgGAAQgJAAAAgIg");
	this.shape_2.setTransform(31.9,14.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgcAkQgNgKAAgTQAAgVALgOQALgRATAAQANAAAJAFQALAGAAAMQAAAIgJAHIgSAIIgfAPQAEAIAHADQAHAEAJAAQAFAAAIgDQAKgDADgEQADgEADgBQADABACACQADACAAADQAAAKgPAGQgNAGgMAAQgSAAgMgKgAgRgVQgGAHgEAPIAagLQAOgHAHgGQgIgGgMAAQgKgBgHAJg");
	this.shape_3.setTransform(24.9,16.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAXBAIgEgUIgBgUIAAgHIAAgGQAAgPgIAAQgKAAgIAJQgEAFgHANQAAAhgDAFQgCAGgFAAQgEAAgCgDQgDgCAAgDIABgEIABgMIAAgNIAAg9IABgOIgBgIIgBgIQAAgDADgCQACgDAEAAQAGAAACAIIABAOIgBATIAAASIAAAHQAHgJAIgEQAHgFAIAAQAOAAAGAJQADAHABAOIAAAQIACARIADARIAAADQAAADgCADQgDACgDAAQgGAAgCgGg");
	this.shape_4.setTransform(15.2,14.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgXAvQgNgFABgJQgBgDADgCQADgCADgBQACAAAFAFQACACAHABIAKAAQAFABAGgCQAIgDAAgFQgBgLgQgFIgHgBQgLgDgFgDQgHgDAAgKQAAgSARgHQAFgDAKgCIAQgGQADgCAFABQADgBACADQADADAAADIABAHIABAHQAAAEgCACQgDADgDAAQgFAAgCgDQgBgDgBgGIgTAGQgNAFgBAIIAGABQASAEAJAFQAOAIAAARQAAAOgMAHQgJAFgOAAQgLAAgLgDg");
	this.shape_5.setTransform(5.7,16.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.shells, new cjs.Rectangle(0,0,49.2,27.4), null);


(lib.sail = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNBZIABgtIACgsIAAgrIABgsQAAgNALAAQAMAAAAANIgBAsIAAArIgCA8IgBAdQgBAMgKAAQgMAAAAgMg");
	this.shape.setTransform(37.5,20);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgLBYQgEgDAAgFIAAgWIAAgWIABgdIABgbQAAgGADgDQAEgEAFAAQAEAAAEAEQADADAAAGIgBAbIgBAdIAAAWIAAAWQAAAFgDADQgDAEgFAAQgFAAgDgEgAgHhCQgEgFAAgFQAAgGAEgEQAEgFAFAAQAGAAAEAFQAEAEAAAGQAAAFgEAFQgEAEgGAAQgFAAgEgEg");
	this.shape_1.setTransform(30.8,20.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAnA+IgIgIIgVAJQgJADgFAAQgcAAgNgQQgNgPAAgfQAAgdAVgVQAUgVAbAAQALAAANAGQARAHAAAJQAAAEgDACIgCAPIAAAbQgBAPADAJIAHAVIADAHIABACQAAAEgEAEQgDADgEAAQgDAAgGgGgAgUgeQgNAQAAATQAAAUAHAKQAHAKAOAAQALAAAIgEIAMgKQgEgfAAgQIABgLIACgOIgIgDIgFgBQgSAAgOAPg");
	this.shape_2.setTransform(20.6,23.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AghBEQgTgHAAgMQAAgFAEgDQADgEAFAAQAEAAAGAFQADADAKACIAOACQAJgBAIgCQALgEAAgHQAAgRgXgFIgLgDQgRgEgGgEQgKgHAAgNQAAgaAYgLQAHgDAPgFIAXgHQAFgDAGAAQAFAAAEAEQADADAAAGIACALIABAJQAAAGgDADQgEAEgFAAQgHAAgCgEQgCgDgBgLQgKADgTAGQgSAHAAAMIAHACQAbAFAOAJQATAMAAAYQAAAUgRAKQgOAJgVAAQgQAAgOgGg");
	this.shape_3.setTransform(7.8,23);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.sail, new cjs.Rectangle(0,0,43,38.9), null);


(lib.parrot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgFBEQgDgCAAgEIAAgLIAAgLIgCg4IgWgCQgIgBAAgJQAAgDACgDQADgDAEAAIAUABIAAgNIAAgMQAAgEADgCQACgDAEAAQAJAAABAOIAAAIIAAAHIAAAFIANgBQALAAADABQAGABAAAIQAAAEgCADQgDADgFAAIgEgBIgGAAIgMACIACA5IAAAEIAAAFQAAAVgKAAQgEAAgCgDg");
	this.shape.setTransform(57.4,17.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgcApQgNgNgBgXQgBgVAMgRQAOgUAXAAQAUAAAKASQAIAPgBAUQAAAVgLAPQgMASgUAAQgQAAgMgNgAgRgTQgGALAAANQAAAOAIAIQAGAHAJAAQAJAAAHgIQAJgIAAgOQACglgWAAQgOAAgIAOg");
	this.shape_1.setTransform(47.3,19.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AglAtIAAhEIAAgJIAAgKQAAgKAJAAQAJAAABAQQASgSAXAAQAHAAAEAGQAEAGAAAMIAAAHQgBAMgIAAQgJAAAAgJIAAgHIAAgIQgQABgIAHQgJAHgGAMIAAA1QABAKgLAAQgIAAAAgKg");
	this.shape_2.setTransform(37.7,19.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AglAtIAAhEIABgJIAAgKQgBgKAJAAQAKAAAAAQQASgSAWAAQAJAAADAGQAEAGAAAMIAAAHQAAAMgJAAQgJAAAAgJIAAgHIAAgIQgQABgJAHQgIAHgGAMIABA1QAAAKgLAAQgIAAAAgKg");
	this.shape_3.setTransform(28.1,19.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAfAyIgHgHIgQAHQgHADgEAAQgWAAgLgNQgKgMAAgZQAAgXAQgQQAQgRAWAAQAIAAALAEQAOAGAAAHQAAADgCACIgCAMIgBAVQAAAMACAHIAGARIADAGIAAABQAAAEgDADQgDACgDAAQgCAAgFgEgAgPgYQgMANAAAPQAAAQAGAIQAFAIAMAAQAJAAAGgDIAKgIQgEgZAAgNIABgJIACgKIgGgDIgFgBQgOAAgKAMg");
	this.shape_4.setTransform(17.9,19.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AglBPQgDgCAAgFIAAgnIAAglQAAgWgBgSIgCgUQABgGACgFQADgGAFAAQAFAAACADQADACgBAEIAAAEIgBAFQAJgFAIgEQAHgCAHgBQAUABAJARQAIAOAAAXQAAAVgMANQgMAPgUAAQgIAAgNgDIAAAuQAAAFgCACQgDADgEAAQgEAAgDgDgAgIgyQgGACgIAIQACAWAAAXQALAFAJgBQAMABAHgKQAFgHABgNQAAgRgFgJQgFgJgIAAQgIAAgHAFg");
	this.shape_5.setTransform(7.5,21.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.parrot, new cjs.Rectangle(0,0,64.2,31.9), null);


(lib.love = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgpA1QgTgPAAgcQAAgfAQgVQAQgXAcAAQAUAAANAGQAPAIAAASQAAANgOAKQgGAEgTAIIguAWQAHALAKAEQAKAGANgBQAIABAMgDQAOgFAEgGQAEgGAFAAQAEAAAEACQADADAAAFQAAANgWALQgTAHgRAAQgbAAgRgNgAgYggQgKAMgFAVIAlgQQAVgLAKgIQgLgKgSAAQgOAAgKAMg");
	this.shape.setTransform(41.3,23.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgNA4IgTgxIgVg3IgBgGQAAgFADgDQAEgEAFAAQAHAAADAHIAgBVQAIgTANglIALgcQAEgHAHAAQAFAAAEAEQADADAAAFQAAAFgTAvIgaA4QAAAMgKAAQgJAAgEgLg");
	this.shape_1.setTransform(28.3,23.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgkA0QgQgRgBgcQgBgbAPgVQARgZAdAAQAZAAAMAXQAKASAAAZQAAAagOATQgQAWgZAAQgUAAgPgPgAgVgYQgIAOAAARQAAARAKAKQAIAIAKAAQAMAAAJgJQALgKAAgSQACgugbAAQgRAAgKARg");
	this.shape_2.setTransform(15.3,23.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgNBZIABgtIACgsIAAgrIABgsQAAgNALAAQAMAAAAANIgBAsIAAArIgCA8IgBAdQgBAMgKAAQgMAAAAgMg");
	this.shape_3.setTransform(5.5,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.love, new cjs.Rectangle(0,0,50.1,38.9), null);


(lib.like = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AghAqQgPgMAAgWQAAgYANgSQANgSAWAAQAQAAAKAFQAMAHAAAOQAAAKgLAIIgUAKIglARQAGAIAIAEQAIAFAKAAQAHAAAJgDQALgDAEgFQADgGAEAAQADAAADADQADADAAADQAAALgSAIQgPAGgOAAQgVAAgOgLgAgUgZQgHAJgEARIAegNQAQgJAIgGQgJgIgOAAQgMAAgIAKg");
	this.shape.setTransform(29.6,19.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAaBLQgFgKgKgOIgQgXIgSAMIgBAeQAAAEgDADQgDADgEAAQgJAAgBgOIABgYIACgYIAAghIABgiIgBgKIAAgLQAAgEADgDQACgCAEAAQAEAAADACQADADAAAEIABALIAAALIgBAfIAAAhIAZgVIAVgWQADgEAEAAQADAAADADQAEADAAAEQAAAEgDADQgMAOgSAPIAWAdQAPAVgBAGQAAAEgCACQgEADgEAAQgFAAgDgFg");
	this.shape_1.setTransform(19.2,16.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgIBHQgEgDAAgEIAAgSIAAgRIABgXIABgWQAAgEADgDQACgDAFAAQACAAADADQADADAAAEIgBAWIgBAXIAAARIABASQAAAEgDADQgDACgDABQgEgBgCgCgAgGg1QgDgDAAgFQAAgEADgEQAEgEAEAAQAEAAAEAEQADAEAAAEQAAAFgDADQgEADgEAAQgEAAgEgDg");
	this.shape_2.setTransform(10.6,16.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgKBHIABgjIABgkIAAgiIABgkQAAgJAIAAQAKAAAAAJIAAAkIgBAiIgBAwIgBAXQgBAKgIAAQgJgBAAgJg");
	this.shape_3.setTransform(4.8,16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.like, new cjs.Rectangle(0,0,37.1,31.9), null);


(lib.island = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgrBTQgRgRAAgbQAAghARgSQARgUAbAAQAPAAAHAFIAMAIQABgzACgSQACgLAKAAQALAAAAAMQAAARgFA5QgBASgBARQABApADAVIABADQAAAEgEAEQgEADgEAAQgIAAgDgLQgJAGgJAEQgJADgKAAQgZAAgRgRgAgcACQgKAMAAAYQAAAQALALQALAMAPAAQAJAAAIgEIANgKIAEgEIgBgVIAAgOIABgOQgFgKgIgEQgIgFgLAAQgTAAgKALg");
	this.shape.setTransform(61.3,20.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAeA8IgEgbQgCgPAAgMIABgKIAAgMQAAgagKAAQgNAAgMAQQgKAOgHAXIgBALIgBAMIABALIAAALQAAAGgDADQgDADgGAAQgEAAgEgDQgEgDABgGIgBgLIgBgLIACgiIACgjIAAgLIgBgMQAAgFADgDQAEgEAFAAQALAAABAQIABAPQAUgcAUAAQAUAAAIARQAFALABAXIAAANIAAAKQgBAKADAQQADAQAAAKQAAAGgEADQgDADgGAAQgKAAgBgLg");
	this.shape_1.setTransform(47.7,23.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAnA+IgIgIIgVAJQgJADgFAAQgcAAgNgQQgNgPAAgfQAAgdAVgVQAUgVAbAAQALAAANAGQARAHAAAJQAAAEgDACIgCAPIAAAbQgBAPADAJIAHAVIADAHIABACQAAAEgEAEQgDADgEAAQgDAAgGgGgAgUgeQgNAQAAATQAAAUAHAKQAHAKAOAAQALAAAIgEIAMgKQgEgfAAgQIABgLIACgOIgIgDIgFgBQgSAAgOAPg");
	this.shape_2.setTransform(34.5,23.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgNBZIABgtIACgsIAAgrIABgsQAAgNALAAQAMAAAAANIAAAsIgBArIgCA8IgBAdQgBAMgKAAQgMAAAAgMg");
	this.shape_3.setTransform(24.7,20);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AghBEQgTgHAAgMQAAgFAEgDQADgEAFAAQAEAAAGAFQADADAKACIAOACQAJgBAIgCQALgEAAgHQAAgRgXgFIgLgDQgRgEgGgEQgKgHAAgNQAAgaAYgLQAHgDAPgFIAXgHQAFgDAGAAQAFAAAEAEQADADAAAGIACALIABAJQAAAGgDADQgEAEgFAAQgHAAgCgEQgCgDgBgLQgKADgTAGQgSAHAAAMIAHACQAbAFAOAJQATAMAAAYQAAAUgRAKQgOAJgVAAQgQAAgOgGg");
	this.shape_4.setTransform(14.8,23);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgLBYQgEgDAAgFIAAgWIAAgWIABgdIABgbQAAgGADgDQAEgEAFAAQAEAAAEAEQADADAAAGIgBAbIgBAdIAAAWIAAAWQAAAFgDADQgDAEgFAAQgFAAgDgEgAgHhCQgEgFAAgFQAAgGAEgEQAEgFAFAAQAGAAAEAFQAEAEAAAGQAAAFgEAFQgEAEgGAAQgFAAgEgEg");
	this.shape_5.setTransform(5.8,20.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.island, new cjs.Rectangle(0,0,70.8,38.9), null);


(lib.I = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag1BaQgDgEAAgFQAAgFADgEQAEgDAFAAQAIAAASgDQABgKAAgNIgBgVIAAgUQAAgbADgqIgQAAIgQAAQgFAAgEgDQgDgEAAgFQAAgLALgBIAlgBQAYgBAkAGQALABAAAMQAAAGgEADQgEADgEAAIgUgBIgUgDQgDAkAAAeIABAVIAAAWIAAAVIAmgBQAFAAAEAEQADADAAAFQAAAGgDADQgEAFgFAAIgUAAIgVAAIgXACQgQACgIAAQgFABgEgEg");
	this.shape.setTransform(8.9,20.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.I, new cjs.Rectangle(0,0,17.9,38.9), null);


(lib.go = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgYAjQgMgLAAgTQgBgTAKgOQAMgRAUAAQARAAAJAQQAGALAAASQAAASgKANQgKAPgRAAQgOAAgKgLgAgOgRQgGAKAAAMQAAALAHAHQAFAGAIAAQAIAAAGgGQAHgIABgLQABgggTAAQgLAAgHALg");
	this.shape.setTransform(15.2,16.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdBBQgKgCAAgHQAAgHAHAAIALABQAGACAJAAQAPgBAGgPQAEgKABgVQgFAIgHAEQgGAEgGAAQgQAAgKgKQgJgKAAgQQAAgXANgNQAOgPAVAAQAJAAAFACQAFACADAEQAJABAAAJIgCAQIgCAQIgCAbQAAARgDALQgFANgIAHQgJAIgTAAQgLAAgIgCgAgPgpQgHAKAAAPQgBAMAFAFQAFAGAJAAQAHAAAJgIQAGgJACgJIAEgcIgIgEIgHgBQgPAAgJALg");
	this.shape_1.setTransform(6.2,18.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.go, new cjs.Rectangle(0,0,21.7,27.4), null);


(lib.gather = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AggAmIAAg5IABgIIAAgJQAAgIAHAAQAIgBABAOQAPgPATAAQAHAAAEAFQADAFAAALIAAAGQgBAKgIAAQgHAAAAgIIAAgHIAAgHQgOACgHAGQgHAFgFALIAAAtQAAAJgIAAQgIAAAAgJg");
	this.shape.setTransform(51.5,16.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgcAkQgNgKAAgTQAAgVALgOQALgRATAAQANAAAJAFQALAGAAAMQAAAIgJAHIgSAIIgfAPQAEAIAHADQAHAEAJAAQAFAAAIgDQAKgDADgEQADgEADgBQADABACACQADACAAADQAAAKgPAGQgNAGgMAAQgSAAgMgKgAgRgVQgGAHgEAPIAagLQAOgHAHgGQgIgGgMAAQgKgBgHAJg");
	this.shape_1.setTransform(42.5,16.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAXBAIgEgUIgBgUIAAgHIAAgGQAAgPgIAAQgKAAgIAJQgEAFgHANQAAAhgDAFQgCAGgFAAQgEAAgCgDQgDgCAAgDIABgEIABgMIAAgNIAAg9IABgOIgBgIIgBgIQAAgDADgCQACgDAEAAQAGAAACAIIABAOIgBATIAAASIAAAHQAHgJAIgEQAHgFAIAAQAOAAAGAJQADAHABAOIAAAQIACARIADARIAAADQAAADgCADQgDACgDAAQgGAAgCgGg");
	this.shape_2.setTransform(32.8,14.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgEA7QgDgCAAgDIAAgKIABgJIgCgxIgTgBQgHgBAAgHQAAgEACgDQACgCAEAAIARABIAAgLIAAgKQAAgDACgDQADgDADABQAHAAABAMIAAAHIAAAGIAAAEIAMgBQAJAAACABQAFABAAAHQAAAEgCACQgCACgEAAIgEAAIgEAAIgMABIACAxIAAADIAAAFQAAASgJABQgCAAgCgDg");
	this.shape_3.setTransform(23.7,15.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAbArQgEgEgCgDIgOAHQgGACgDAAQgUAAgJgLQgIgKAAgVQAAgUAOgOQAOgOASgBQAHABAJADQAMAFAAAHIgCADIgBALIgBASQAAAKACAGQAAAEAFALIACAFIAAABQAAADgCACQgCACgDABQgCAAgEgEgAgNgUQgKAKAAAOQAAANAFAHQAFAHAKAAQAHAAAFgDIAJgGQgDgWAAgLIABgIIABgJIgFgCIgEgBQgMAAgJALg");
	this.shape_4.setTransform(15.3,16.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgdBBQgKgCAAgHQAAgHAHAAIALABQAGACAJAAQAPgBAGgPQAEgKABgVQgFAIgHAEQgGAEgGAAQgQAAgKgKQgJgKAAgQQAAgXANgNQAOgPAVAAQAJAAAFACQAFACADAEQAJABAAAJIgCAQIgCAQIgCAbQAAARgDALQgFANgIAHQgJAIgTAAQgLAAgIgCgAgPgpQgHAKAAAPQgBAMAFAFQAFAGAJAAQAHAAAJgIQAGgJACgJIAEgcIgIgEIgHgBQgPAAgJALg");
	this.shape_5.setTransform(6.2,18.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.gather, new cjs.Rectangle(0,0,57.2,27.4), null);


(lib.beach = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAXBAIgEgUIgBgUIAAgHIAAgGQAAgPgIAAQgKAAgIAJQgEAFgHANQAAAhgDAFQgCAGgFAAQgEAAgCgDQgDgCAAgDIABgEIABgMIAAgNIAAg9IABgOIgBgIIgBgIQAAgDADgCQACgDAEAAQAGAAACAIIABAOIgBATIAAASIAAAHQAHgJAIgEQAHgFAIAAQAOAAAGAJQADAHABAOIAAAQIACARIADARIAAADQAAADgCADQgDACgDAAQgGAAgCgGg");
	this.shape.setTransform(44,14.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgXAlQgMgLAAgSQAAgQALgSQANgVAOAAQAJAAAKAEQANAFAAAIQAAADgDACQgCADgDAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAIgDgEQgFgDgMAAQgHAAgJAPQgHAOAAAJQAAALAHAGQAHAHAKAAQAFgBAGgCIAKgFIAEgBQADgBACADQACACAAAEQAAAGgNAFQgLAFgIABQgQAAgLgLg");
	this.shape_1.setTransform(34.6,16.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAbArQgEgEgCgDIgOAHQgGACgDAAQgUAAgJgLQgIgKAAgVQAAgUAOgOQAOgOASgBQAHABAJADQAMAFAAAHIgCADIgBALIgBASQAAAKACAGQAAAEAFALIACAFIAAABQAAADgCACQgCACgDABQgCAAgEgEgAgNgUQgKAKAAAOQAAANAFAHQAFAHAKAAQAHAAAFgDIAJgGQgDgWAAgLIABgIIABgJIgFgCIgEgBQgMAAgJALg");
	this.shape_2.setTransform(25.7,16.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgcAkQgNgKAAgTQAAgVALgOQALgRATAAQANAAAJAFQALAGAAAMQAAAIgJAHIgSAIIgfAPQAEAIAHADQAHAEAJAAQAFAAAIgDQAKgDADgEQADgEADgBQADABACACQADACAAADQAAAKgPAGQgNAGgMAAQgSAAgMgKgAgRgVQgGAHgEAPIAagLQAOgHAHgGQgIgGgMAAQgKgBgHAJg");
	this.shape_3.setTransform(16.8,16.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgZA/QgCAEgFAAQgDAAgCgCQgCgCAAgEIAAgHIAAgGIAAgbIgBgZIAAgXIAAgYQAAgEADgFQADgFAEAAQAHAAgBAIIAAADIgBADIAAATIAAAVQAIgFAHgCQAGgCAFAAQARAAAMANQAKAMAAATQAAAUgMAMQgMAOgRAAQgNAAgLgFgAgNgDIgMAIIAAAOIAAANIAAAOIALAFQAGABAHAAQAKAAAJgJQAHgIAAgNQAAgMgGgJQgHgIgLAAQgHAAgHAEg");
	this.shape_4.setTransform(7.1,14.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.beach, new cjs.Rectangle(0,0,50.8,27.4), null);


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


(lib.PrepositionTint = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AioiyIFRFl");
	this.shape.setTransform(16.9,17.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1,1).p("AHJkbImrAAII3I3ApUkaIJygB");
	this.shape_1.setTransform(93.6,64.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.PrepositionTint, new cjs.Rectangle(-1.5,-1.5,156.3,95.6), null);


(lib.Prepositionisdiagrammed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIAIQgDgDAAgFQAAgEADgEQAEgDAEAAQAFAAAEADQADAEAAAEQAAAFgDADQgEAEgFAAQgEAAgEgEg");
	this.shape.setTransform(442.8,23.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AghAqQgPgMAAgWQAAgYANgSQANgSAWAAQAQAAAKAFQAMAHAAAOQAAAKgLAIIgUAKIglARQAGAIAIAEQAIAFAKAAQAHAAAJgDQALgDAEgFQADgGAEAAQADAAADADQADADAAADQAAALgSAIQgPAGgOAAQgVAAgOgLgAgUgZQgHAJgEARIAegNQAQgJAIgGQgJgIgOAAQgMAAgIAKg");
	this.shape_1.setTransform(434.9,19.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAYAwIgDgWIgBgVIAAgJIAAgJQAAgVgHAAQgLAAgJANQgJAMgFARIgBAKIgBAJIABAJIAAAJQAAAEgCADQgDACgEAAQgEAAgDgCQgDgDAAgEIAAgJIgBgJIABgbIACgcIgBgJIAAgJQAAgFADgCQADgDAEAAQAJAAABANIAAALQARgWAQAAQAPAAAHAOQAEAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgDADQgDADgDAAQgJAAgBgJg");
	this.shape_2.setTransform(424.3,19.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgJBHQgDgDAAgEIAAgSIAAgRIABgXIABgWQAAgEADgDQADgDADAAQAEAAACADQADADAAAEIgBAWIgBAXIAAARIABASQAAAEgDADQgDACgDABQgEgBgDgCgAgFg1QgEgDAAgFQAAgEAEgEQADgEAEAAQAFAAADAEQADAEAAAEQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_3.setTransform(416.3,16.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgKBHIABgjIABgkIAAgiIABgkQAAgJAIAAQAKAAAAAJIAAAkIgBAiIgBAwIgBAXQgBAKgIAAQgJgBAAgJg");
	this.shape_4.setTransform(410.5,16.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AghAqQgPgMAAgWQAAgYANgSQANgSAWAAQAQAAAKAFQAMAHAAAOQAAAKgLAIIgUAKIglARQAGAIAIAEQAIAFAKAAQAHAAAJgDQALgDAEgFQADgGAEAAQADAAADADQADADAAADQAAALgSAIQgPAGgOAAQgVAAgOgLgAgUgZQgHAJgEARIAegNQAQgJAIgGQgJgIgOAAQgMAAgIAKg");
	this.shape_5.setTransform(396.5,19.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAaBKIgEgXIgBgXIAAgIIAAgIQAAgRgJAAQgMAAgJAKQgFAGgJAQQAAAmgDAGQgDAGgGAAQgEAAgDgCQgDgDAAgEIABgEQABgDAAgMIABgOIAAhHIABgQIgBgJIgBgKQAAgEADgCQACgDAFAAQAIAAABAIIABARIAAAWIgBAVIAAAJQAIgLAKgFQAIgGAKAAQAQAAAGALQAEAHABARIABATIACAUIADAUIABADQAAAEgDADQgDACgEAAQgHAAgDgHg");
	this.shape_6.setTransform(385.2,16.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgGBEQgDgCAAgEIABgLIAAgLIgCg4IgVgCQgJgBAAgJQAAgDADgDQACgDAEAAIAVABIAAgNIgBgMQAAgEACgCQAEgDAEAAQAHAAACAOIAAAIIAAAHIAAAFIAOgBQAKAAADABQAGABAAAIQAAAEgDADQgDADgDAAIgGgBIgEAAIgOACIACA5IAAAEIAAAFQABAVgLAAQgCAAgEgDg");
	this.shape_7.setTransform(374.6,17.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AglAtIAAhEIAAgJIAAgKQAAgKAJAAQAJAAABAQQASgSAXAAQAHAAAEAGQAEAGAAAMIAAAHQAAAMgKAAQgIAAAAgJIgBgHIAAgIQgPABgIAHQgJAHgGAMIAAA1QABAKgLAAQgIAAAAgKg");
	this.shape_8.setTransform(359.4,19.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AghAqQgPgMAAgWQAAgYANgSQANgSAWAAQAQAAAKAFQAMAHAAAOQAAAKgLAIIgUAKIglARQAGAIAIAEQAIAFAKAAQAHAAAJgDQALgDAEgFQADgGAEAAQADAAADADQADADAAADQAAALgSAIQgPAGgOAAQgVAAgOgLgAgUgZQgHAJgEARIAegNQAQgJAIgGQgJgIgOAAQgMAAgIAKg");
	this.shape_9.setTransform(349,19.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgiBCQgOgOAAgVQAAgaAOgOQAOgRAVABQALAAAGADIAKAHIADg3QABgJAIAAQAJAAAAAJQAAAOgEAvIgBAbQAAAhADAQIAAADQAAAEgDACQgDADgDAAQgGgBgDgIQgHAEgIADQgHADgIAAQgUAAgNgOgAgWABQgIAKAAAUQAAANAJAJQAIAIAMABQAIAAAFgEQAEgBAHgHIADgDIAAgRIAAgLIAAgLQgEgIgGgDQgGgEgJAAQgPAAgIAIg");
	this.shape_10.setTransform(337.4,16.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAYAwIgDgWIgBgVIAAgJIAAgJQAAgVgHAAQgLAAgJANQgJAMgFARIgBAKIgBAJIABAJIAAAJQAAAEgCADQgDACgEAAQgEAAgDgCQgDgDAAgEIAAgJIgBgJIABgbIACgcIgBgJIAAgJQAAgFADgCQADgDAEAAQAJAAABANIAAALQARgWAQAAQAPAAAHAOQAEAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgDADQgDADgDAAQgJAAgBgJg");
	this.shape_11.setTransform(326.7,19.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAWAvQgMAGgPAAQgNAAgIgGQgKgGgBgMQgEgaAAgTQAAgOADgRQABgIAIAAQAEAAADACQADAEAAADIgBAPIgCAPIABAbQABALACAIIAHACIAGABQAMAAAPgEIgBgUIAAgSQAAgVACgQQABgIAJgBQAEABADACQACADAAAEIgBAlIAAAUIAAAVIAAAHIAAAGQAAAEgCADQgDADgEAAQgIAAgCgJg");
	this.shape_12.setTransform(316,19.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgiBCQgOgOAAgVQAAgaAOgOQAOgRAVABQALAAAGADIAKAHIADg3QABgJAIAAQAJAAAAAJQAAAOgEAvIgBAbQAAAhADAQIAAADQAAAEgDACQgDADgDAAQgGgBgDgIQgHAEgIADQgHADgIAAQgUAAgNgOgAgWABQgIAKAAAUQAAANAJAJQAIAIAMABQAIAAAFgEQAEgBAHgHIADgDIAAgRIAAgLIAAgLQgEgIgGgDQgGgEgJAAQgPAAgIAIg");
	this.shape_13.setTransform(298.9,16.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AghAqQgPgMAAgWQAAgYANgSQANgSAWAAQAQAAAKAFQAMAHAAAOQAAAKgLAIIgUAKIglARQAGAIAIAEQAIAFAKAAQAHAAAJgDQALgDAEgFQADgGAEAAQADAAADADQADADAAADQAAALgSAIQgPAGgOAAQgVAAgOgLgAgUgZQgHAJgEARIAegNQAQgJAIgGQgJgIgOAAQgMAAgIAKg");
	this.shape_14.setTransform(287.8,19.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgFA6QgDgDAAgFIgCgiQgCgXAAgLQAAgLgDgFQgHADgHAHIgMANIgFAGIgBAQIgBARIABAIIABAIQAAAEgDACQgDADgEAAQgLAAAAgZIABgRIABgRIgBgPIgBgQQAAgWAKAAQAEAAADADQADADAAAEIAAAGIAAAGIAAAKQAFgKAKgIQAKgJAGAAQAQAAAFAPQAFgHAHgDQAIgEAJAAQARAAAGASIAEAbIAHA3QAAAEgDADQgDACgEAAQgIAAgCgIIgDgeIgDgeIgEgNQgDgJgEAAQgEAAgJAGQgKAGgDAEIABASIADAZQACAPAAAKQAAAFgDADQgDACgEAAQgDAAgDgCg");
	this.shape_15.setTransform(274.5,19.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgFA6QgDgDAAgFIgCgiQgCgXAAgLQAAgLgDgFQgHADgHAHIgMANIgFAGIgBAQIgBARIABAIIABAIQAAAEgDACQgDADgEAAQgLAAAAgZIABgRIABgRIgBgPIgBgQQAAgWAKAAQAEAAADADQADADAAAEIAAAGIAAAGIAAAKQAFgKAKgIQAKgJAGAAQAQAAAFAPQAFgHAHgDQAIgEAJAAQARAAAGASIAEAbIAHA3QAAAEgDADQgDACgEAAQgIAAgCgIIgDgeIgDgeIgEgNQgDgJgEAAQgEAAgJAGQgKAGgDAEIABASIADAZQACAPAAAKQAAAFgDADQgDACgEAAQgDAAgDgCg");
	this.shape_16.setTransform(259,19.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAfAyIgHgHIgQAHQgHADgEAAQgXAAgKgNQgKgMAAgZQAAgXARgQQAPgRAWAAQAIAAALAEQAOAGAAAHQAAADgCACIgCAMIgBAVQAAAMACAHIAGARIACAGIABABQAAAEgDADQgDACgDAAQgCAAgFgEgAgQgYQgLANAAAPQAAAQAGAIQAGAIALAAQAJAAAGgDIAKgIQgEgZAAgNIABgJIABgKIgFgDIgFgBQgOAAgLAMg");
	this.shape_17.setTransform(246,19.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AglAtIAAhEIABgJIAAgKQAAgKAIAAQAJAAABAQQASgSAXAAQAHAAAEAGQAEAGAAAMIAAAHQAAAMgKAAQgIAAAAgJIgBgHIAAgIQgPABgJAHQgIAHgGAMIABA1QAAAKgKAAQgJAAAAgKg");
	this.shape_18.setTransform(236.3,19.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AghBMQgNgDAAgHQAAgJAJAAIAMABQAIACAKAAQASAAAHgSQAEgMABgZQgGAKgGAFQgIAFgIAAQgSAAgLgMQgLgMAAgSQAAgbAPgQQAQgRAaAAQAIABAHACQAGACADAFQALAAAAALQgBAIgCALIgCATIgCAfQgBAUgEAMQgDAQgKAHQgMAJgVAAQgNAAgJgBgAgRgwQgJAMAAARQAAAOAFAHQAGAGALABQAIAAAKgLQAIgKABgKIAEghIgHgFIgJgBQgSAAgKANg");
	this.shape_19.setTransform(225.8,21.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAfAyIgHgHIgQAHQgHADgEAAQgWAAgLgNQgKgMAAgZQAAgXAQgQQAQgRAWAAQAJAAAKAEQANAGAAAHQAAADgBACIgCAMIAAAVQgBAMACAHIAGARIADAGIAAABQAAAEgDADQgDACgDAAQgCAAgFgEgAgPgYQgMANAAAPQAAAQAGAIQAGAIALAAQAJAAAGgDIAKgIQgDgZgBgNIABgJIACgKIgHgDIgDgBQgPAAgKAMg");
	this.shape_20.setTransform(215.6,19.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgJBHQgCgDAAgEIAAgSIgBgRIABgXIABgWQAAgEACgDQAEgDADAAQAEAAACADQADADAAAEIgBAWIgBAXIAAARIABASQAAAEgDADQgDACgDABQgEgBgDgCgAgFg1QgEgDAAgFQAAgEAEgEQADgEAEAAQAFAAADAEQADAEAAAEQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_21.setTransform(207.8,16.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgiBCQgOgOAAgVQAAgaAOgOQAOgRAVABQALAAAGADIAKAHIADg3QABgJAIAAQAJAAAAAJQAAAOgEAvIgBAbQAAAhADAQIAAADQAAAEgDACQgDADgDAAQgGgBgDgIQgHAEgIADQgHADgIAAQgUAAgNgOgAgWABQgIAKAAAUQAAANAJAJQAIAIAMABQAIAAAFgEQAEgBAHgHIADgDIAAgRIAAgLIAAgLQgEgIgGgDQgGgEgJAAQgPAAgIAIg");
	this.shape_22.setTransform(198.9,16.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgbA2QgPgFAAgKQABgEADgDQACgDAFAAQADAAAEAFQADACAIACIALABQAHAAAGgCQAJgDAAgGQAAgNgSgFIgJgCQgNgDgGgEQgHgEgBgLQAAgVATgJIATgGQANgDAFgDQAEgCAFAAQAEAAACADQADADAAAEIACAIIABAJQgBAEgCADQgDADgEAAQgFAAgCgEQgCgDgBgIIgXAHQgPAGAAAKIAGABQAWAEALAHQAQAKAAATQAAAQgOAIQgLAHgRAAQgNAAgMgFg");
	this.shape_23.setTransform(182,18.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgJBHQgCgDAAgEIAAgSIgBgRIABgXIABgWQAAgEACgDQADgDAEAAQAEAAADADQACADAAAEIgBAWIgBAXIABARIAAASQAAAEgDADQgCACgEABQgEgBgDgCgAgGg1QgDgDAAgFQAAgEADgEQAEgEADAAQAGAAADAEQADAEAAAEQAAAFgDADQgDADgGAAQgDAAgEgDg");
	this.shape_24.setTransform(174.8,16.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0033FF").s().p("AhBBMQgDgDAAgEIABgNIAAgLIABgTIABgSIgBgTIAAgTIgCgSIgBgTQAAgEAFgEQADgDAFAAQAGAAAHALQAYAkATAZQAXAbAcAaIAAgMIgBgNQAAgpgDgaIgDgKIgCgLQAAgLALAAQARAAAAA/IAAAgIgBAgIgCAQQgBAKgJAAQgGAAgHgHQgogmgyhGIAAAXIgBAUIABAZIAAAZQAAAagKAAQgGgBgDgDg");
	this.shape_25.setTransform(157.9,16.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0033FF").s().p("AgxA9QgUgSAAgcQAAggAUgcQAWgfAhAAQAgAAAQAPQAQAOAAAhQAAAhgSAbQgWAfggAAQgbAAgUgQgAgiggQgPAWAAAZQAAATAOAMQANALAUAAQAXAAAPgYQAOgWAAgZQAAgXgKgKQgKgJgYAAQgXAAgRAYg");
	this.shape_26.setTransform(141.9,17);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0033FF").s().p("AgqBIQgDgDAAgEQAAgEADgDQADgDADAAIAVgCIACgSIgBgRIgBgQQAAgWADgiIgNABIgMAAQgEAAgEgDQgCgDAAgEQAAgJAJgBIAdgBQATAAAeAFQAIABAAAJQAAAFgEACQgCADgEAAIgQgCIgPgCQgCAdAAAZIAAAQIAAARIAAARIAeAAQAEAAADADQADACAAAFQAAAEgDADQgDADgEAAIgRAAIgQAAIgSACIgUACQgDAAgDgDg");
	this.shape_27.setTransform(128.4,16.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0033FF").s().p("AgGBIQgDgDAAgFIAAgEIABgFIgBgNIgBgPIgCgmIgDgoIgIAAQgWAAgMgCQgIgDAAgHQAAgEADgEQADgCAEAAIAQABIAQABIARAAIARAAIAWABIAXABQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAIgXgBIgWgBIgHAAIADAsQACAbAAAQIABAKIAAAKQAAAHgCAFQgCAHgGgBQgDAAgDgCg");
	this.shape_28.setTransform(117,16.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0033FF").s().p("AgqBIQgDgDAAgEQAAgEADgDQACgDAEAAIAWgCIABgSIgBgRIAAgQQAAgWACgiIgMABIgOAAQgDAAgEgDQgCgDAAgEQAAgJAJgBIAdgBQATAAAeAFQAIABAAAJQAAAFgEACQgCADgEAAIgQgCIgQgCQgBAdAAAZIAAAQIAAARIAAARIAeAAQAEAAADADQADACAAAFQAAAEgDADQgDADgEAAIgRAAIgPAAIgTACIgUACQgEAAgCgDg");
	this.shape_29.setTransform(103.9,16.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0033FF").s().p("AgnBEQgRgJgBgOQAAgEADgDQADgCAEgBQAEABAEAFQAGAIADACQAIAGARgBQANABANgHQARgJAAgPQAAgMgOgHQgMgGgQgBQgPAAgMgGQgNgHAAgPQAAgSAUgOQASgOATABQAKgBAMAEQAPAEAAAGQABAJgJAAIgOgCIgPgCQgOAAgLAIQgLAHAAALQABAIAOAEIATABQAXACANANQALAKAAARQAAAXgVANQgTAMgXAAQgSAAgQgGg");
	this.shape_30.setTransform(91.6,17.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0033FF").s().p("AgxA9QgUgSAAgcQAAggAUgcQAWgfAhAAQAgAAAQAPQAQAOAAAhQAAAhgSAbQgWAfggAAQgbAAgUgQgAgiggQgPAWAAAZQAAATAOAMQANALAUAAQAXAAAPgYQAOgWAAgZQAAgXgKgKQgKgJgYAAQgXAAgRAYg");
	this.shape_31.setTransform(76.6,17);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#0033FF").s().p("AgpBLQgCgDAAgEIAAgcIABgoIADgoIAAgNQAAgKABgFQACgIAIABIAJgCIANAAQARAAAQANQARANAAASQAAAZgSANQgRANgVAAIgNgBIgBAzQABAEgDADQgDADgDAAQgEAAgDgDgAgQg6IgFAAIAAASIgDAoIAMAAQAOAAAMgIQANgJAAgQQAAgKgMgIQgMgIgLAAIgIABg");
	this.shape_32.setTransform(63.5,16.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0033FF").s().p("AgqBLQgJgIAAggIAAgOIABgPIgBgGQAAgBACgEIABgpIgBgKIAAgLQgBgMAKAAQAFAAADADIAVgEIATgCQAYAAAOAFQAHADgBAHQAAADgCADQgDAEgEAAIgDAAQgRgFgPAAIgRABIgUAFIABAKIgCAmIAqgFIAXgCQAFAAACADQADACABAFQgBAIgIACIgYACIgsADIAAAOIgBALQAAAVADAFQACACAOAAIARAAIASgBIAGAAIAFAAQALgBAAALQAAAIgJABQgIACgeAAQgfAAgIgIg");
	this.shape_33.setTransform(52.2,16.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#0033FF").s().p("AgxBKQgDgDAAgEIgBgXIAAgXIACgaIACgbIgBgPIgBgOQAAgGADgEQAEgFAGAAIAYACQANACAIAFQAoAVAAAeQAAAPgOAKQgLAJgQAFQAfAQAPATQACADAAADQAAAEgDADQgDADgEAAQgDAAgEgDQgggggngLIABATIABAUQAAAEgDADQgDADgEAAQgEAAgDgDgAgegrIAAAMIgBATIgCATIAEAAIAEAAQAZAAAMgHQAFgCAFgFQAFgFAAgEQAAgOgPgLQgNgLgQgCIgOgBg");
	this.shape_34.setTransform(39.6,16.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0033FF").s().p("AgoBLQgDgDAAgEIAAgcIABgoIADgoIAAgNQAAgKABgFQACgIAIABIAJgCIANAAQASAAAPANQARANAAASQAAAZgSANQgRANgVAAIgNgBIgBAzQABAEgDADQgDADgDAAQgEAAgCgDgAgQg6IgFAAIAAASIgDAoIAMAAQAOAAAMgIQAMgJAAgQQABgKgMgIQgLgIgMAAIgIABg");
	this.shape_35.setTransform(28.1,16.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAiAzIgHgfIgaAFIgYAFIgRAmQgEAFgEAAQgFAAgDgDQgCgDAAgEQAAgFAOgfQgBgCgBgDQAAgIAKgDQALgTARgcQAWglAGAAQAHAAAEALIAFAhIAPBDIAGAPIADALQAAAEgDADQgEADgDAAQgKAAgGgXgAgMAHIAjgHIgIglg");
	this.shape_36.setTransform(9.3,17);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#0066FF").s().p("AhBBMQgDgDAAgEIABgNIAAgLIABgTIABgSIgBgTIAAgTIgCgSIgBgTQAAgEAFgEQADgDAFAAQAGAAAHALQAYAkATAZQAXAbAcAaIAAgMIgBgNQAAgpgDgaIgDgKIgCgLQAAgLALAAQARAAAAA/IAAAgIgBAgIgCAQQgBAKgJAAQgGAAgHgHQgogmgyhGIAAAXIgBAUIABAZIAAAZQAAAagKAAQgGgBgDgDg");
	this.shape_37.setTransform(157.9,16.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#0066FF").s().p("AgxA9QgUgSAAgcQAAggAUgcQAWgfAhAAQAgAAAQAPQAQAOAAAhQAAAhgSAbQgWAfggAAQgbAAgUgQgAgiggQgPAWAAAZQAAATAOAMQANALAUAAQAXAAAPgYQAOgWAAgZQAAgXgKgKQgKgJgYAAQgXAAgRAYg");
	this.shape_38.setTransform(141.9,17);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#0066FF").s().p("AgqBIQgDgDAAgEQAAgEADgDQADgDADAAIAVgCIACgSIgBgRIgBgQQAAgWADgiIgNABIgMAAQgEAAgEgDQgCgDAAgEQAAgJAJgBIAdgBQATAAAeAFQAIABAAAJQAAAFgEACQgCADgEAAIgQgCIgPgCQgCAdAAAZIAAAQIAAARIAAARIAeAAQAEAAADADQADACAAAFQAAAEgDADQgDADgEAAIgRAAIgQAAIgSACIgUACQgDAAgDgDg");
	this.shape_39.setTransform(128.4,16.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#0066FF").s().p("AgGBIQgDgDAAgFIAAgEIABgFIgBgNIgBgPIgCgmIgDgoIgIAAQgWAAgMgCQgIgDAAgHQAAgEADgEQADgCAEAAIAQABIAQABIARAAIARAAIAWABIAXABQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAIgXgBIgWgBIgHAAIADAsQACAbAAAQIABAKIAAAKQAAAHgCAFQgCAHgGgBQgDAAgDgCg");
	this.shape_40.setTransform(117,16.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#0066FF").s().p("AgqBIQgDgDAAgEQAAgEADgDQACgDAEAAIAWgCIABgSIgBgRIAAgQQAAgWACgiIgMABIgOAAQgDAAgEgDQgCgDAAgEQAAgJAJgBIAdgBQATAAAeAFQAIABAAAJQAAAFgEACQgCADgEAAIgQgCIgQgCQgBAdAAAZIAAAQIAAARIAAARIAeAAQAEAAADADQADACAAAFQAAAEgDADQgDADgEAAIgRAAIgPAAIgTACIgUACQgEAAgCgDg");
	this.shape_41.setTransform(103.9,16.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#0066FF").s().p("AgnBEQgRgJgBgOQAAgEADgDQADgCAEgBQAEABAEAFQAGAIADACQAIAGARgBQANABANgHQARgJAAgPQAAgMgOgHQgMgGgQgBQgPAAgMgGQgNgHAAgPQAAgSAUgOQASgOATABQAKgBAMAEQAPAEAAAGQABAJgJAAIgOgCIgPgCQgOAAgLAIQgLAHAAALQABAIAOAEIATABQAXACANANQALAKAAARQAAAXgVANQgTAMgXAAQgSAAgQgGg");
	this.shape_42.setTransform(91.6,17.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#0066FF").s().p("AgxA9QgUgSAAgcQAAggAUgcQAWgfAhAAQAgAAAQAPQAQAOAAAhQAAAhgSAbQgWAfggAAQgbAAgUgQgAgiggQgPAWAAAZQAAATAOAMQANALAUAAQAXAAAPgYQAOgWAAgZQAAgXgKgKQgKgJgYAAQgXAAgRAYg");
	this.shape_43.setTransform(76.6,17);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#0066FF").s().p("AgpBLQgCgDAAgEIAAgcIABgoIADgoIAAgNQAAgKABgFQACgIAIABIAJgCIANAAQARAAAQANQARANAAASQAAAZgSANQgRANgVAAIgNgBIgBAzQABAEgDADQgDADgDAAQgEAAgDgDgAgQg6IgFAAIAAASIgDAoIAMAAQAOAAAMgIQANgJAAgQQAAgKgMgIQgMgIgLAAIgIABg");
	this.shape_44.setTransform(63.5,16.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#0066FF").s().p("AgqBLQgJgIAAggIAAgOIABgPIgBgGQAAgBACgEIABgpIgBgKIAAgLQgBgMAKAAQAFAAADADIAVgEIATgCQAYAAAOAFQAHADgBAHQAAADgCADQgDAEgEAAIgDAAQgRgFgPAAIgRABIgUAFIABAKIgCAmIAqgFIAXgCQAFAAACADQADACABAFQgBAIgIACIgYACIgsADIAAAOIgBALQAAAVADAFQACACAOAAIARAAIASgBIAGAAIAFAAQALgBAAALQAAAIgJABQgIACgeAAQgfAAgIgIg");
	this.shape_45.setTransform(52.2,16.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#0066FF").s().p("AgxBKQgDgDAAgEIgBgXIAAgXIACgaIACgbIgBgPIgBgOQAAgGADgEQAEgFAGAAIAYACQANACAIAFQAoAVAAAeQAAAPgOAKQgLAJgQAFQAfAQAPATQACADAAADQAAAEgDADQgDADgEAAQgDAAgEgDQgggggngLIABATIABAUQAAAEgDADQgDADgEAAQgEAAgDgDgAgegrIAAAMIgBATIgCATIAEAAIAEAAQAZAAAMgHQAFgCAFgFQAFgFAAgEQAAgOgPgLQgNgLgQgCIgOgBg");
	this.shape_46.setTransform(39.6,16.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#0066FF").s().p("AgoBLQgDgDAAgEIAAgcIABgoIADgoIAAgNQAAgKABgFQACgIAIABIAJgCIANAAQASAAAPANQARANAAASQAAAZgSANQgRANgVAAIgNgBIgBAzQABAEgDADQgDADgDAAQgEAAgCgDgAgQg6IgFAAIAAASIgDAoIAMAAQAOAAAMgIQAMgJAAgQQABgKgMgIQgLgIgMAAIgIABg");
	this.shape_47.setTransform(28.1,16.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_36},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,447.4,31.9);


(lib.CaratBlack = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AKQCSIwLAAIkUkj");
	this.shape.setTransform(65.6,14.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#330033").ss(3,1,1).p("AqPiRIEUEjIQLAA");
	this.shape_1.setTransform(65.6,14.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#660066").ss(3,1,1).p("AqPiRIEUEjIQLAA");
	this.shape_2.setTransform(65.6,14.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#990099").ss(3,1,1).p("AqPiRIEUEjIQLAA");
	this.shape_3.setTransform(65.6,14.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CC00CC").ss(3,1,1).p("AqPiRIEUEjIQLAA");
	this.shape_4.setTransform(65.6,14.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF00FF").ss(3,1,1).p("AKQCSIwLAAIkUkj");
	this.shape_5.setTransform(65.6,14.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},4).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},5).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// Layer 3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(3,1,1).p("AAACmIAAlL");
	this.shape_6.setTransform(76.1,45.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#330033").ss(3,1,1).p("AAAilIAAFL");
	this.shape_7.setTransform(76.1,45.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#660066").ss(3,1,1).p("AAAilIAAFL");
	this.shape_8.setTransform(76.1,45.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#990099").ss(3,1,1).p("AAAilIAAFL");
	this.shape_9.setTransform(76.1,45.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#CC00CC").ss(3,1,1).p("AAAilIAAFL");
	this.shape_10.setTransform(76.1,45.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FF00FF").ss(3,1,1).p("AAACmIAAlL");
	this.shape_11.setTransform(76.1,45.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6}]}).to({state:[{t:this.shape_6}]},4).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},5).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_6}]},1).wait(1));

	// Layer 1
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(3,1,1).p("AiCBBICCiCICDCC");
	this.shape_12.setTransform(76.1,69);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#330033").ss(3,1,1).p("AiCBBICCiCICDCC");
	this.shape_13.setTransform(76.1,69);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#660066").ss(3,1,1).p("AiCBBICCiCICDCC");
	this.shape_14.setTransform(76.1,69);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#990099").ss(3,1,1).p("AiCBBICCiCICDCC");
	this.shape_15.setTransform(76.1,69);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#CC00CC").ss(3,1,1).p("AiCBBICCiCICDCC");
	this.shape_16.setTransform(76.1,69);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FF00FF").ss(3,1,1).p("AiCBBICCiCICDCC");
	this.shape_17.setTransform(76.1,69);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12}]}).to({state:[{t:this.shape_12}]},4).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},5).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_12}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,134.2,78.5);


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
	this.shape_17.graphics.f("#000000").s().p("AgOAfQgHgFAAgJQAAgOAKgEQgIgFAAgJQAAgIAGgFQAGgGAHAAQATAAAAASQAAAGgCADIgHAEQAHADACAEQADAEAAAIQAAAJgGAFQgHAFgJAAQgJAAgFgEgAgJAGQgEAEABAHQAAAFAFADQADACAEAAQAHAAAEgEQACgDAAgGQAAgFgEgEQgDgCgGgCIgJAFgAgIgXQgCADAAAFQAAAHAKACIAHgDQADgCAAgFQAAgGgDgCQgCgCgFAAQgFAAgDADg");
	this.shape_17.setTransform(-36.3,1.6);

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


(lib.Bk2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("EgoHgXiMBQPAAAMAAAAvFMhQPAAAg");
	this.shape.setTransform(256.8,150.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFDDFF","#66CCFF"],[0,1],-3.8,-102.8,-3.9,201.7).s().p("EgoHAXjMAAAgvFMBQPAAAMAAAAvFg");
	this.shape_1.setTransform(256.8,150.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Bk2, new cjs.Rectangle(-1,-1,515.6,303.5), null);


(lib.PrepDiaBlack = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.PrepositionTint();
	this.instance.parent = this;
	this.instance.setTransform(76.7,48.8,1,1,0,0,0,76.7,48.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,156.3,95.6);


(lib.InfinitiveBuiltonaCarat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIAIQgDgDAAgFQAAgEADgEQAEgDAEAAQAFAAADADQAEAEAAAEQAAAFgEADQgDAEgFAAQgEAAgEgEg");
	this.shape.setTransform(330.6,23.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgGBEQgCgCAAgEIAAgLIAAgLIgCg4IgWgCQgIgBAAgJQAAgDACgDQADgDAEAAIAUABIAAgNIAAgMQAAgEADgCQACgDAEAAQAJAAABAOIAAAIIAAAHIAAAFIANgBQALAAADABQAGABAAAIQAAAEgDADQgCADgFAAIgEgBIgGAAIgMACIACA5IAAAEIAAAFQAAAVgKAAQgEAAgDgDg");
	this.shape_1.setTransform(323.3,17.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAfAyIgGgHIgRAHQgHADgEAAQgXAAgKgNQgKgMAAgZQAAgXAQgQQARgRAVAAQAJAAAKAEQANAGAAAHQAAADgCACIgBAMIAAAVQgBAMACAHIAGARIACAGIABABQAAAEgDADQgCACgEAAQgCAAgFgEgAgPgYQgMANAAAPQAAAQAGAIQAFAIAMAAQAIAAAHgDIAJgIQgCgZAAgNIAAgJIABgKIgGgDIgDgBQgPAAgKAMg");
	this.shape_2.setTransform(313.5,19.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AglAtIAAhEIAAgJIAAgKQAAgKAJAAQAKAAAAAQQASgSAWAAQAJAAADAGQAEAGAAAMIAAAHQgBAMgIAAQgJAAAAgJIAAgHIAAgIQgQABgJAHQgIAHgGAMIAAA1QAAAKgKAAQgIAAAAgKg");
	this.shape_3.setTransform(303.9,19.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAfAyIgGgHIgRAHQgHADgEAAQgXAAgKgNQgKgMAAgZQAAgXARgQQAPgRAWAAQAIAAALAEQAOAGAAAHQAAADgCACIgCAMIgBAVQAAAMACAHIAGARIACAGIABABQAAAEgDADQgDACgDAAQgCAAgFgEgAgQgYQgLANAAAPQAAAQAGAIQAGAIALAAQAJAAAGgDIAKgIQgEgZAAgNIABgJIABgKIgFgDIgFgBQgOAAgLAMg");
	this.shape_4.setTransform(293.7,19.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgbArQgOgMAAgWQAAgTANgUQAPgYARAAQAKAAAMAFQAOAGAAAHQAAAFgCACQgDADgDAAQgDAAgCgCIgEgDQgGgEgNgBQgJABgKARQgJAQAAALQAAAOAJAHQAIAHAMAAQAGAAAHgDIALgHIAEgBQAEAAACADQADADAAADQAAAHgPAIQgNAFgJAAQgTAAgNgMg");
	this.shape_5.setTransform(283.5,19.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAfAyIgGgHIgRAHQgHADgEAAQgXAAgKgNQgKgMAAgZQAAgXAQgQQARgRAVAAQAJAAAKAEQANAGAAAHQAAADgCACIgBAMIAAAVQgBAMACAHIAGARIACAGIABABQAAAEgDADQgCACgEAAQgCAAgFgEgAgPgYQgMANAAAPQAAAQAGAIQAFAIAMAAQAIAAAHgDIAJgIQgCgZAAgNIAAgJIACgKIgHgDIgDgBQgPAAgKAMg");
	this.shape_6.setTransform(267.2,19.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAYAwIgDgWIgBgVIAAgJIAAgJQAAgVgHAAQgLAAgJANQgJAMgFARIgBAKIgBAJIABAJIAAAJQAAAEgCADQgDACgEAAQgEAAgDgCQgDgDAAgEIAAgJIgBgJIABgbIACgcIgBgJIAAgJQAAgFADgCQADgDAEAAQAJAAABANIAAALQARgWAQAAQAPAAAHAOQAEAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgDADQgDADgDAAQgJAAgBgJg");
	this.shape_7.setTransform(251.1,19.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgcApQgNgNgBgXQgBgVAMgRQAOgUAXAAQAUAAAKASQAIAPgBAUQAAAVgLAPQgMASgUAAQgQAAgMgNgAgRgTQgGALAAANQAAAOAIAIQAGAHAJAAQAJAAAHgIQAJgIAAgOQACglgWAAQgOAAgIAOg");
	this.shape_8.setTransform(240.2,19.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgFBEQgEgCAAgEIABgLIAAgLIgCg4IgVgCQgJgBAAgJQAAgDACgDQADgDAEAAIAUABIAAgNIAAgMQAAgEACgCQAEgDADAAQAJAAABAOIAAAIIAAAHIAAAFIAOgBQAKAAADABQAGABAAAIQAAAEgCADQgEADgDAAIgGgBIgEAAIgOACIADA5IAAAEIAAAFQAAAVgLAAQgDAAgCgDg");
	this.shape_9.setTransform(224.5,17.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgKBHIABgjIABgkIAAgiIABgkQAAgJAIAAQAKAAAAAJIAAAkIgBAiIgBAwIgBAXQgBAKgIAAQgJgBAAgJg");
	this.shape_10.setTransform(217,16.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgJBHQgCgDAAgEIAAgSIgBgRIABgXIABgWQAAgEACgDQADgDAFAAQADAAADADQACADAAAEIgBAWIgBAXIABARIAAASQAAAEgDADQgCACgEABQgEgBgDgCgAgGg1QgDgDAAgFQAAgEADgEQAEgEADAAQAGAAADAEQADAEAAAEQAAAFgDADQgDADgGAAQgDAAgEgDg");
	this.shape_11.setTransform(211.7,16.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAWAvQgMAGgPAAQgNAAgIgGQgKgGgBgMQgEgaAAgTQAAgOADgRQABgIAIAAQAEAAADACQADAEAAADIgBAPIgCAPIABAbQABALACAIIAHACIAGABQAMAAAPgEIgBgUIAAgSQAAgVACgQQABgIAJgBQAEABADACQACADAAAEIgBAlIAAAUIAAAVIAAAHIAAAGQAAAEgCADQgDADgEAAQgIAAgCgJg");
	this.shape_12.setTransform(203.5,19.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgdBJQgDAFgFAAQgEAAgCgCQgDgDAAgEIABgIIAAgHIgBgfIAAgeIAAgbIAAgcQAAgFACgFQAEgGAFAAQAIAAAAAJIgBADIAAAEIgBAWIAAAZQAJgGAHgCQAIgEAGAAQAVAAANAQQAMAOAAAXQAAAWgOAPQgPAQgUAAQgPAAgMgGgAgPgDIgOAIIAAARIAAAPIAAAQIANAGQAGABAIAAQANABAJgKQAJgLAAgOQAAgPgHgJQgIgKgNAAQgHAAgJAFg");
	this.shape_13.setTransform(192.6,16.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgbA2QgOgFAAgKQAAgEADgDQACgDAFAAQACAAAGAFQACACAIACIALABQAHAAAHgCQAIgDABgGQgBgNgSgFIgJgCQgNgDgGgEQgHgEgBgLQAAgVAUgJIASgGQANgDAFgDQAEgCAFAAQAEAAACADQADADAAAEIACAIIABAJQgBAEgCADQgDADgEAAQgGAAgCgEQgBgDgBgIIgXAHQgOAGAAAKIAFABQAWAEALAHQAQAKAAATQAAAQgOAIQgLAHgRAAQgNAAgMgFg");
	this.shape_14.setTransform(175.3,18.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgJBHQgCgDAAgEIAAgSIgBgRIABgXIABgWQAAgEACgDQAEgDADAAQADAAAEADQACADAAAEIgBAWIgBAXIAAARIABASQAAAEgDADQgCACgEABQgEgBgDgCgAgFg1QgEgDAAgFQAAgEAEgEQADgEADAAQAGAAADAEQADAEAAAEQAAAFgDADQgDADgGAAQgDAAgDgDg");
	this.shape_15.setTransform(168.1,16.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAYAwIgDgWIgBgVIABgJIAAgJQgBgVgHAAQgLAAgJANQgJAMgFARIgBAKIgBAJIABAJIAAAJQABAEgDADQgDACgEAAQgFAAgCgCQgCgDAAgEIgBgJIgBgJIACgbIABgcIgBgJIAAgJQABgFACgCQADgDAEAAQAJAAABANIAAALQAQgWARAAQAQAAAFAOQAFAJAAASIAAAKIAAAIQAAAIACANQACANAAAIQAAAEgDADQgCADgFAAQgIAAgBgJg");
	this.shape_16.setTransform(22.2,19.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAiAzIgHgfIgaAFIgYAFIgRAmQgEAFgEAAQgFAAgDgDQgCgDAAgEQAAgFAOgfQgBgCgBgDQAAgIAKgDQALgTARgcQAWglAGAAQAHAAAEALIAFAhIAPBDIAGAPIADALQAAAEgDADQgEADgDAAQgKAAgGgXgAgMAHIAjgHIgIglg");
	this.shape_17.setTransform(9.3,17);

	this.instance = new lib.INFINITIVE();
	this.instance.parent = this;
	this.instance.setTransform(96.9,17.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.InfinitiveBuiltonaCarat, new cjs.Rectangle(0,0,335.2,31.9), null);


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
		
		 window.open ("inf_Scene8.html","_self");
		}
		
		
		function openPrev(){
		
		 window.open ("inf_Scene6a.html","_self");
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


(lib.InfinitivesPrepositions2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_95 = function() {
		playSound("ball_passes");
	}
	this.frame_132 = function() {
		playSound("SENameofIdea");
	}
	this.frame_158 = function() {
		playSound("ball_passes");
	}
	this.frame_166 = function() {
		playSound("ball_passes");
	}
	this.frame_173 = function() {
		playSound("ball_passes");
	}
	this.frame_181 = function() {
		playSound("_7a");
	}
	this.frame_186 = function() {
		playSound("_7a");
	}
	this.frame_194 = function() {
		playSound("SENameOfPerson");
	}
	this.frame_206 = function() {
		playSound("SENameOfPerson");
	}
	this.frame_214 = function() {
		playSound("highclick");
	}
	this.frame_226 = function() {
		playSound("_6b");
	}
	this.frame_302 = function() {
		playSound("ball_passes");
	}
	this.frame_308 = function() {
		playSound("ball_passes");
	}
	this.frame_314 = function() {
		playSound("diagnal_line");
	}
	this.frame_320 = function() {
		playSound("diagnal_line");
	}
	this.frame_326 = function() {
		playSound("SENameOfPerson");
	}
	this.frame_334 = function() {
		playSound("SENameOfPerson");
	}
	this.frame_343 = function() {
		playSound("lowclick");
	}
	this.frame_358 = function() {
		playSound("_6b");
	}
	this.frame_445 = function() {
		playSound("diagnal_line");
	}
	this.frame_452 = function() {
		playSound("diagnal_line");
	}
	this.frame_460 = function() {
		playSound("_7a");
	}
	this.frame_468 = function() {
		playSound("_7a");
	}
	this.frame_478 = function() {
		playSound("diagnal_line");
	}
	this.frame_490 = function() {
		playSound("SENameOfPerson");
	}
	this.frame_502 = function() {
		playSound("SENameOfPerson");
	}
	this.frame_509 = function() {
		playSound("highclick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(95).call(this.frame_95).wait(37).call(this.frame_132).wait(26).call(this.frame_158).wait(8).call(this.frame_166).wait(7).call(this.frame_173).wait(8).call(this.frame_181).wait(5).call(this.frame_186).wait(8).call(this.frame_194).wait(12).call(this.frame_206).wait(8).call(this.frame_214).wait(12).call(this.frame_226).wait(76).call(this.frame_302).wait(6).call(this.frame_308).wait(6).call(this.frame_314).wait(6).call(this.frame_320).wait(6).call(this.frame_326).wait(8).call(this.frame_334).wait(9).call(this.frame_343).wait(15).call(this.frame_358).wait(87).call(this.frame_445).wait(7).call(this.frame_452).wait(8).call(this.frame_460).wait(8).call(this.frame_468).wait(10).call(this.frame_478).wait(12).call(this.frame_490).wait(12).call(this.frame_502).wait(7).call(this.frame_509).wait(54));

	// 1
	this.instance = new lib.I();
	this.instance.parent = this;
	this.instance.setTransform(136.2,229.9,0.763,0.763,0,0,0,8.9,19.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(108).to({_off:false},0).to({alpha:1},3).wait(83).to({x:64.5,y:101.2},12).to({x:89.4,y:127.4},8).wait(43).to({alpha:0},6).wait(1).to({scaleX:0.71,scaleY:0.71,x:116.7,y:45.5},0).to({alpha:1},7).wait(55).to({x:95.4,y:92.9},8).to({x:88.4,y:129.8},9).wait(50).to({alpha:0},7).to({_off:true},1).wait(4).to({_off:false,regX:8.8,scaleX:0.73,scaleY:0.73,x:91.6,y:53.3},0).to({alpha:1},7).wait(78).to({x:73.7,y:110.1},12).to({x:86.7,y:127.5},7).wait(54));

	// 2
	this.instance_1 = new lib.love();
	this.instance_1.parent = this;
	this.instance_1.setTransform(163.2,229.9,0.763,0.763,0,0,0,24.9,19.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.instance_2 = new lib.go();
	this.instance_2.parent = this;
	this.instance_2.setTransform(135.8,45.5,1,1,0,0,0,10.9,13.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.instance_3 = new lib.like();
	this.instance_3.parent = this;
	this.instance_3.setTransform(117.6,53.5,0.881,0.881,0,0,0,18.5,16);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(108).to({_off:false},0).to({alpha:1},3).wait(83).to({x:175.1,y:101.2},12).to({x:195,y:127.4},8).wait(43).to({alpha:0},6).to({_off:true},1).wait(299));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(264).to({_off:false},0).to({alpha:1},7).wait(55).to({x:192.8,y:86.3},8).to({y:128.1},9).wait(50).to({alpha:0},7).to({_off:true},1).wait(162));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(405).to({_off:false},0).to({alpha:1},7).wait(78).to({x:197.2,y:114.8},12).to({y:127.7},7).wait(54));

	// 3
	this.instance_4 = new lib.to();
	this.instance_4.parent = this;
	this.instance_4.setTransform(194.7,229.9,0.763,0.763,0,0,0,14.6,19.4);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(108).to({_off:false},0).to({alpha:1},3).wait(83).to({x:263.3,y:62},12).to({rotation:45,x:295,y:84.7},8).wait(43).to({alpha:0},6).wait(1).to({regX:14.5,scaleX:0.71,scaleY:0.71,rotation:0,x:158.3,y:45.5},0).to({alpha:1},7).wait(55).to({x:145.9,y:166.9},8).to({rotation:45,x:182.7,y:153.2},9).wait(50).to({alpha:0},7).to({_off:true},1).wait(4).to({_off:false,regX:14.6,regY:19.3,scaleX:0.73,scaleY:0.73,rotation:0,x:234.9,y:53.3},0).to({alpha:1},7).wait(78).to({x:391.6,y:99.2},12).to({regY:19.4,rotation:45,x:379.1,y:117.6},7).wait(54));

	// 4
	this.instance_5 = new lib.sail();
	this.instance_5.parent = this;
	this.instance_5.setTransform(222.8,229.9,0.763,0.763,0,0,0,21.5,19.4);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.instance_6 = new lib.the();
	this.instance_6.parent = this;
	this.instance_6.setTransform(186.1,45.6,0.86,0.86,0,0,0,18.1,16);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.instance_7 = new lib.whistle();
	this.instance_7.parent = this;
	this.instance_7.setTransform(192.8,53.5,0.881,0.881,0,0,0,35.3,16);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(108).to({_off:false},0).to({alpha:1},3).wait(83).to({x:328.3,y:62},12).to({y:92.9},8).wait(43).to({alpha:0},6).to({_off:true},1).wait(299));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(264).to({_off:false},0).to({alpha:1},7).wait(55).to({x:281.1,y:188.9},8).to({regX:18,regY:16.1,rotation:45,x:258.7,y:184.9},9).wait(50).to({alpha:0},7).to({_off:true},1).wait(162));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(405).to({_off:false},0).to({alpha:1},7).wait(78).to({x:360.6,y:70.3},12).to({x:335,y:94.4},7).wait(54));

	// 5
	this.instance_8 = new lib.to();
	this.instance_8.parent = this;
	this.instance_8.setTransform(251.5,229.9,0.763,0.763,0,0,0,14.6,19.4);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.instance_9 = new lib.beach();
	this.instance_9.parent = this;
	this.instance_9.setTransform(229.1,45.5,1,1,0,0,0,25.4,13.7);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(108).to({_off:false},0).to({alpha:1},3).wait(83).to({x:364.8,y:82.8},12).to({rotation:45,x:380.8,y:117.6},8).wait(43).to({alpha:0},6).to({_off:true},1).wait(141).to({_off:false,regX:14.4,regY:19.3,scaleX:0.73,scaleY:0.73,rotation:0,x:146.7,y:53.3},0).to({alpha:1},7).wait(78).to({x:297.5,y:60},12).to({regX:14.5,rotation:45,x:294,y:88.5},7).wait(54));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(264).to({_off:false},0).to({alpha:1},7).wait(55).to({x:193.9,y:188.8},8).to({x:218.9,y:156.5},9).wait(50).to({alpha:0},7).to({_off:true},1).wait(162));

	// 6
	this.instance_10 = new lib.the();
	this.instance_10.parent = this;
	this.instance_10.setTransform(281.2,229.2,0.976,0.976,0,0,0,17.9,15.9);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.instance_11 = new lib.to();
	this.instance_11.parent = this;
	this.instance_11.setTransform(267.3,45.5,0.706,0.706,0,0,0,14.7,19.4);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(108).to({_off:false},0).to({alpha:1},3).wait(83).to({x:474.3,y:189.3},12).to({regY:16,rotation:45,x:457.5,y:148.5},8).wait(43).to({alpha:0},6).to({_off:true},1).wait(141).to({_off:false,regX:18,regY:16.1,scaleX:0.92,scaleY:0.92,rotation:0,x:261.9,y:53},0).to({alpha:1},7).wait(78).to({x:454.2,y:187.7},12).to({rotation:45,x:422.3,y:151.8},7).wait(54));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(264).to({_off:false},0).to({alpha:1},7).wait(55).to({x:266.5,y:58.9},8).to({rotation:45,x:292.3,y:83.4},9).wait(50).to({alpha:0},7).to({_off:true},1).wait(162));

	// 7
	this.instance_12 = new lib.island();
	this.instance_12.parent = this;
	this.instance_12.setTransform(327.2,229.9,0.763,0.763,0,0,0,35.5,19.4);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.instance_13 = new lib.gather();
	this.instance_13.parent = this;
	this.instance_13.setTransform(308.2,45.5,1,1,0,0,0,28.6,13.7);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.instance_14 = new lib.wild();
	this.instance_14.parent = this;
	this.instance_14.setTransform(298.1,53.5,0.881,0.881,0,0,0,20.4,16);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(108).to({_off:false},0).to({alpha:1},3).wait(83).to({x:415.9,y:87.6},12).to({x:422.9,y:119.4},8).wait(43).to({alpha:0},6).to({_off:true},1).wait(299));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(264).to({_off:false},0).to({alpha:1},7).wait(55).to({x:329.1,y:73},8).to({x:334.1,y:91.9},9).wait(50).to({alpha:0},7).to({_off:true},1).wait(162));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(405).to({_off:false},0).to({alpha:1},7).wait(78).to({x:482.1,y:145.2},12).to({regX:20.3,rotation:45,x:455.7,y:148.7},7).wait(54));

	// 8
	this.instance_15 = new lib.shells();
	this.instance_15.parent = this;
	this.instance_15.setTransform(361.4,45.5,1,1,0,0,0,24.6,13.7);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.instance_16 = new lib.parrot();
	this.instance_16.parent = this;
	this.instance_16.setTransform(348.3,53.5,0.881,0.881,0,0,0,32.1,16);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(264).to({_off:false},0).to({alpha:1},7).wait(55).to({x:416.2,y:72.9},8).to({x:404.2,y:92.9},9).wait(50).to({alpha:0},7).to({_off:true},1).wait(162));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(405).to({_off:false},0).to({alpha:1},7).wait(78).to({x:453.8,y:102.1},12).to({x:420.4,y:120.1},7).wait(54));

	// INfin
	this.instance_17 = new lib.InfinitiveBuiltonaCarat();
	this.instance_17.parent = this;
	this.instance_17.setTransform(244.1,109,1.13,1.13,0,0,0,157.8,15.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(94).to({regY:15.9,scaleX:0.86,scaleY:0.86,x:134.5,y:10.7},8).wait(461));

	// Carat
	this.instance_18 = new lib.CaratBlack();
	this.instance_18.parent = this;
	this.instance_18.setTransform(248.1,51.7,1.014,1.014,0,0,0,65.5,37.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(94).to({scaleX:0.76,scaleY:0.76,x:345,y:32.1},8).wait(64).to({x:323.9,y:113.7},6).wait(391));

	// Sentence
	this.instance_19 = new lib.SentenceLine();
	this.instance_19.parent = this;
	this.instance_19.setTransform(249,139.1,0.782,0.782,0,0,0,205.5,29.4);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(132).to({_off:false},0).to({alpha:1},9).wait(17).to({x:213},8).wait(397));

	// PrepDiag
	this.instance_20 = new lib.PrepDiaBlack();
	this.instance_20.parent = this;
	this.instance_20.setTransform(264,241.4,0.915,0.915,0,0,0,76.8,48.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(94).to({scaleX:0.71,scaleY:0.71,x:435.3,y:261},8).wait(71).to({x:439.3,y:173.1},8).to({x:408.9,y:142.5},5).wait(116).to({x:394.1,y:178.7},6).to({x:211,y:177},6).wait(146).to({x:436.4},8).to({x:409.6,y:141.7},9).wait(86));

	// PRepos
	this.instance_21 = new lib.Prepositionisdiagrammed();
	this.instance_21.parent = this;
	this.instance_21.setTransform(254,165.3,1.105,1.105,0,0,0,228.2,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(94).to({regX:228.1,scaleX:0.94,scaleY:0.94,x:216.8,y:281.8},8).wait(461));

	// Extras1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AgYAAIAxAA");
	this.shape.setTransform(376.7,107.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AhFAAICLAA");
	this.shape_1.setTransform(381.2,107.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("AhyAAIDlAA");
	this.shape_2.setTransform(385.7,107.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(2,1,1).p("AigAAIFBAA");
	this.shape_3.setTransform(390.3,107.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("AjNAAIGbAA");
	this.shape_4.setTransform(394.8,107.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(2,1,1).p("Aj6AAIH1AA");
	this.shape_5.setTransform(399.3,107.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(2,1,1).p("AknAAIJPAA");
	this.shape_6.setTransform(403.8,107.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(2,1,1).p("AkAAAIIBAA");
	this.shape_7.setTransform(399.9,107.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(2,1,1).p("AjZAAIG0AA");
	this.shape_8.setTransform(396.1,107.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(2,1,1).p("AizAAIFnAA");
	this.shape_9.setTransform(392.2,107.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(2,1,1).p("AiMAAIEZAA");
	this.shape_10.setTransform(388.3,107.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(2,1,1).p("AhlAAIDLAA");
	this.shape_11.setTransform(384.4,107.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(2,1,1).p("Ag+AAIB+AA");
	this.shape_12.setTransform(380.6,107.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0066FF").s().p("AgUAbQgJgIAAgOQAAgPAHgLQAJgLANgBQAKABAGADQAIAEAAAJQAAAGgHAFQgDADgKADIgWALQADAFAFACQAFADAGAAQAEAAAGgCQAHgBACgDQACgEADAAQAAAAABAAQAAAAABABQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAGgLAFQgJAFgJAAQgNgBgIgGgAgMgPQgFAFgCALIATgIQAKgGAEgDQgFgFgJgBQgHABgFAGg");
	this.shape_13.setTransform(434.1,210.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0066FF").s().p("AgQAiQgKgEAAgFQAAgBABgBQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAABgBQAAAAABAAQAAAAABAAQAAgBABAAQABAAAEADIAGADIAHABQAEgBAEgBQAGgCAAgEQAAgIgLgCIgGgCQgIgCgDgDQgGgBABgHQgBgNAMgGIALgDIAMgFIAFAAQABAAAAAAQABAAABAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAABABQAAAAAAABQAAABAAABIABAEIAAAGQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBIgBgHIgPAEQgIAEgBAGIAEABQANADAHAEQAKAGAAALQAAAKgJAGQgHADgKAAQgIABgHgDg");
	this.shape_14.setTransform(427.4,210.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0066FF").s().p("AAUAfIgFgEIgKAEQgEACgDAAQgOAAgGgIQgHgIAAgPQAAgOALgKQAKgLANAAQAGAAAGADQAIADAAAFIgBADIgBAIIgBAMIABAMIAFALIABADIABABQAAABgBAAQAAABAAABQAAAAgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAIgDgDgAgKgOQgGAHAAAJQgBAKAEAFQADAFAIAAQAEAAAEgCIAHgEIgCgYIABgFIAAgHIgDgCIgDAAQgIAAgIAIg");
	this.shape_15.setTransform(421.3,210.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0066FF").s().p("AgXAcIAAgqIAAgGIABgGQAAgGAFAAQAGAAAAAKQALgLAOAAQAFAAACAEQADADAAAIIAAAEQgBAIgFAAQgGAAAAgGIAAgFIAAgFQgKABgEAFQgGAEgDAIIAAAgQAAAGgGAAQgGAAAAgGg");
	this.shape_16.setTransform(415.3,210.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0066FF").s().p("AAQAuIgCgOIgBgPIAAgEIAAgFQAAgLgGAAQgHAAgFAHIgJANQAAAYgCADQgCAFgDAAQgBAAgBgBQAAAAgBAAQAAAAgBgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAgBIABgCIAAgJIABgJIAAgsIABgKIgBgGIgBgGQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABgBQAAAAABAAQABAAAAAAQAFAAABAFIABAMIAAAMIAAAOIAAAFQAEgGAGgEQAFgDAGAAQALAAADAGQADAFAAAKIAAAMIACANIACAMIABACQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAgBAAQgFAAgBgFg");
	this.shape_17.setTransform(408.6,208.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0066FF").s().p("AgZAvQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIAAgSIABgZIACgZIAAgIIABgJQABgFAFABIAFgBIAJgBQAKAAAKAIQALAIAAAMQAAAPgMAIQgKAIgOAAIgHAAIAAAgQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAIgEgCgAgNgYIgBAYIAGAAQAKAAAHgEQAHgGAAgKQAAgHgHgFQgHgEgGAAIgFAAIgEAAg");
	this.shape_18.setTransform(401.7,208.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0066FF").s().p("AgZAwQgEgDAAgGIABgVQACgbAAgiQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQAAAAABAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAABAAAAQAAAjgCAbIgBAJIAAAJQAQABAXgIIACAAQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAAEgEACQgHADgOADQgNACgJAAQgGAAgCgCg");
	this.shape_19.setTransform(467.4,190);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0066FF").s().p("AAVAgIgEgUIgQAEIgPACIgLAYQgCAEgDgBQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAgCAJgUIgBgDQAAgFAGgCIARgdQAOgXADAAQAFAAACAHIAEAUIAJAqIADAJIACAHQAAAAAAABQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgGAAgEgOgAgHAEIAVgEIgFgXg");
	this.shape_20.setTransform(459.1,190.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0066FF").s().p("AgoAvQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAgBAAAAIAAgIIABgIIAAgLIAAgLIAAgLIAAgNIgBgLIAAgLQgBgDADgDQADgCADAAQACAAAGAHQAPAXALAPQAOARARAQIAAgIIAAgHQABgagDgQIgBgGIgBgHQgBgHAHAAQALAAAAAoIgBATIAAAUIgBAKQgBAGgFAAQgEAAgEgEQgZgYgggrIAAAOIAAANIAAAPIAAAPQABARgHAAQgDAAgCgDg");
	this.shape_21.setTransform(449.8,190);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0066FF").s().p("AgeAmQgNgLAAgRQAAgVANgRQAOgTAUAAQAUAAAKAJQAKAJAAAVQAAAUgMARQgNATgUAAQgRAAgMgKgAgVgUQgJAOAAAQQAAAMAJAHQAIAHAMAAQAOAAAKgPQAIgOAAgPQAAgPgGgGQgGgGgPABQgOAAgLAOg");
	this.shape_22.setTransform(439.7,190);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0066FF").s().p("AgaAtQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQABgBAAAAQABgBAAAAQABAAAAAAQABgBAAAAQABAAABAAIAMgBIABgMIAAgJIgBgLIACgiIgIAAIgIABQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAgGAGAAIATgBQAKAAATADQAFAAAAAGQAAABAAABQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgKgBIgJAAIgCAhIAAAKIABAKIgBALIATgBQABAAAAABQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAABABAAQAAABAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgKABIgLAAIgLABIgLABQgBAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape_23.setTransform(431.3,190);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0066FF").s().p("AgDAtQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIAAgDIAAgCIAAgJIgBgJIgBgYIgCgYIgFAAQgOAAgHgCQgFgBAAgFQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAgBQACgBADAAIAKABIAKAAIALAAIAKAAIAOAAIAOABQAAAAABABQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAIgOgBIgOgBIgEAAIABAcIACAaIAAAHIABAHQAAADgCAEQgBADgEAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_24.setTransform(424.1,189.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0066FF").s().p("AgaAtQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABgBAAAAQABgBAAAAQABAAAAAAQABgBAAAAQABAAABAAIAMgBIABgMIAAgJIgBgLIACgiIgIAAIgIABQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAgGAGAAIATgBQAKAAATADQAFAAAAAGQAAABAAABQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgKgBIgJAAIgCAhIAAAKIABAKIgBALIATgBQABAAAAABQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAABABAAQAAABAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgKABIgLAAIgLABIgLABQgBAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape_25.setTransform(416,190);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0066FF").s().p("AgYAqQgLgFAAgJQAAgBAAAAQAAgBAAgBQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABgBQAAAAABAAQABAAAAAAQADAAACADQADAFADACQAFADAKAAQAIAAAJgEQAKgFAAgKQAAgHgJgEQgHgFgKAAQgKAAgGgDQgJgFAAgJQAAgLAMgJQAMgJAMAAQAFAAAIACQAKADAAAEQAAAGgGAAIgIgBIgKgCQgIAAgHAFQgHAEAAAHQAAAFAJACIAMABQAOACAIAHQAHAHAAAKQAAAOgNAJQgMAIgOgBQgLABgKgFg");
	this.shape_26.setTransform(408.2,190.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0066FF").s().p("AgeAmQgNgLAAgRQAAgVANgRQAOgTAUAAQAUAAAKAJQAKAJAAAVQAAAUgMARQgNATgUAAQgRAAgMgKgAgVgUQgJAOAAAQQAAAMAJAHQAIAHAMAAQAOAAAKgPQAIgOAAgPQAAgPgGgGQgGgGgPABQgOAAgLAOg");
	this.shape_27.setTransform(398.9,190);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0066FF").s().p("AgZAvQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIAAgSIABgZIACgZIAAgIIABgJQABgFAFABIAFgBIAJgBQAKAAAKAIQALAIAAAMQAAAPgMAIQgKAIgOAAIgHAAIAAAgQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAIgEgCgAgNgYIgBAYIAGAAQAKAAAHgEQAHgGAAgKQAAgHgHgFQgHgEgGAAIgFAAIgEAAg");
	this.shape_28.setTransform(390.7,189.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0066FF").s().p("AgaAvQgGgGAAgTIAAgJIABgKIgBgDIABgCIACgaIgBgHIgBgHQAAgHAHAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAABABIAOgDIALgBQAPAAAJAEQAEABAAAEQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAIgCAAQgKgDgKAAIgKABIgNADIABAGIgBAXIAagDIAOgBQABAAAAAAQABAAABAAQAAABABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAABAAABQAAAEgFAAIgPACIgbADIAAAIIgBAHQAAANACADQACABAIAAIAKAAIAMAAIADAAIAEgBQAGAAAAAHQAAAFgFABQgFABgTAAQgSAAgGgFg");
	this.shape_29.setTransform(383.7,189.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0066FF").s().p("AgeAuQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAgBAAAAIAAgPIgBgOIACgQIABgRIgBgJIAAgJQAAgDABgDQACgDAFAAIAOABQAJABAEADQAaANAAATQAAAKgJAGQgHAFgKADQATALAJALQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAgBAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBQgUgTgYgHIABAMIAAAMQAAAAAAABQAAABAAAAQAAABgBAAQAAABgBAAQAAABAAAAQgBAAAAAAQgBABgBAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBgAgTgbIABAIIgBAMIgBALIACAAIADAAQAPAAAHgEIAHgEQADgDAAgDQAAgIgKgIQgIgGgJgBIgJgBg");
	this.shape_30.setTransform(375.8,189.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0066FF").s().p("AgZAvQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIAAgSIABgZIACgZIAAgIIABgJQABgFAFABIAFgBIAJgBQAKAAAKAIQALAIAAAMQAAAPgMAIQgKAIgOAAIgHAAIAAAgQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAIgEgCgAgNgYIgBAYIAGAAQAKAAAHgEQAHgGAAgKQAAgHgHgFQgHgEgGAAIgFAAIgEAAg");
	this.shape_31.setTransform(368.5,189.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF00FF").s().p("AgZAtQgGgFAAgTIAAgIIABgKIgBgDIABgCIABgZIAAgHIgBgHQAAgGAGAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABIAOgEIALgBQAOAAAJAEQAEABAAAEQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAIgCgBQgKgCgJAAIgKABIgMACIAAAHIgBAWIAZgDIAOAAQABAAAAAAQABAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAABAAABQAAAEgFAAIgOACIgbADIAAAIIAAAGQAAAOACABQABACAIAAIAKAAIALAAIAEgBIADAAQAGAAAAAHQAAAEgFABQgFACgSAAQgSgBgFgFg");
	this.shape_32.setTransform(354.2,67.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF00FF").s().p("AgKArQgHgSgJggIgEgRQgEgMAAgEQAAAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAQAFAAABAFIACAKIAGAVQAFAVAGAPIAAgBIAPgpIAFgPQAEgJAEgEQABgDADAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAQABABAAABQAAAAAAABIgBADQgEAGgCAGIgEANIgRAqIgGAOQgBAEgDAAQgFAAgCgFg");
	this.shape_33.setTransform(346.7,68);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF00FF").s().p("AgZAsQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAIANgBIABgLIgBgKIAAgKQAAgNACgUIgIAAIgIAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAgFAFgBIASAAQALAAASACQAFABAAAGQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgKgBIgJgCIgCAgIABALIAAAKIAAAKIASAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABABQAAAAAAABQABAAAAAAQAAABAAABQABAAAAABQAAAAgBABQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAIgKAAIgJAAIgLABIgMABQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_34.setTransform(339.1,68);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF00FF").s().p("AgDAsQgBgBAAAAQgBgBAAgBQAAAAAAgBQAAAAAAgBIAAgCIAAgDIAAgJIAAgIIgCgXIgBgYIgGAAQgNAAgHgCQgFgBAAgFQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABAAQABAAAAAAIAKABIAJABIALAAIAKAAIANAAIAOABQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBABAAAAIgOgBIgNAAIgEAAIABAaIACAaIAAAGIAAAGIgBAHQgCAEgDAAIgDgBg");
	this.shape_35.setTransform(332.1,67.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF00FF").s().p("AgZAsQAAgBgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAAAAAgBQAAgBABAAQAAgBAAAAQABAAAAgBQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAIANgBIAAgLIAAgKIgBgKQAAgNACgUIgIAAIgHAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAgFAGgBIASAAQAKAAASACQAFABAAAGQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgJgBIgKgCIgCAgIABALIAAAKIAAAKIATAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAABQABAAAAABQABAAAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAABgBAAQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAIgLAAIgKAAIgKABIgMABQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_36.setTransform(324.2,68);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF00FF").s().p("AgnAuQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIAAgIIABgHIAAgLIAAgLIAAgLIAAgMIgBgLIAAgLQAAgDACgCQADgCADAAQADAAAEAHIAaAlQAOAQAQAQIAAgIIAAgHQAAgZgBgQIgCgGIgBgGQgBgHAHAAQAKAAAAAmIAAATIgBAUIAAAJQgBAGgFAAQgEAAgEgEQgZgXgdgqIgBANIAAANIAAAPIABAPQAAAPgHAAQgDAAgCgCg");
	this.shape_37.setTransform(316.1,68);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF00FF").s().p("AgZAsQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAIANgBIABgLIgBgKIAAgKQAAgNACgUIgIAAIgIAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAgFAFgBIATAAQAKAAASACQAFABAAAGQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgKgBIgJgCIgBAgIAAALIAAAKIAAAKIASAAQABAAABAAQAAAAABAAQAAAAABABQAAAAAAABQABAAAAABQABAAAAAAQAAABAAABQABAAAAABQAAAAgBABQAAABAAAAQAAABgBAAQAAABgBAAQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAIgJAAIgKAAIgLABIgMABQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_38.setTransform(307.9,68);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF00FF").s().p("AgcAwQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBIABgiIAAgjIAAgHIAAgIQAAgBAAAAQAAgBABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAIAEABIANgCIAJgBQAHAAAJACQAMADAAAEQAAABAAAAQAAABgBABQAAAAAAAAQgBABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgDAAQgHgDgMAAIgIABIgMACIAAAZQALgDAGAAIASABQAGABAAAFQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAAAQgBAAAAAAIgKAAIgIAAQgEAAgNADIgBAoQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAABQgBAAAAAAQgBAAgBABQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape_39.setTransform(301.3,68);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF00FF").s().p("AgnAuQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgIIAAgHIAAgLIAAgLIAAgLIAAgMIAAgLIgBgLQAAgDACgCQACgCAEAAQADAAAEAHIAaAlQAOAQARAQIAAgIIAAgHQAAgZgCgQIgDgGIgBgGQAAgHAHAAQAKAAAAAmIAAATIgBAUIAAAJQgBAGgGAAQgDAAgFgEQgXgXgfgqIAAANIAAANIAAAPIAAAPQABAPgHAAQgDAAgCgCg");
	this.shape_40.setTransform(292.5,68);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF00FF").s().p("AgZAsQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAIANgBIABgLIgBgKIAAgKQAAgNABgUIgIAAIgHAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAgFAFgBIASAAQALAAASACQAFABAAAGQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgKgBIgJgCIgCAgIABALIAAAKIAAAKIASAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABABQAAAAAAABQABAAAAAAQAAABAAABQABAAAAABQAAAAgBABQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAIgKAAIgKAAIgKABIgMABQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_41.setTransform(284.3,68);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(254,78,254,0.443)").s().p("AobEJIAAokIQ4AAIgPIFIj6AAIgGgBIgGAAIAGABIhHAAIAAABIAAAxg");
	this.shape_42.setTransform(321.2,84.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(86,153,254,0.482)").s().p("ArHIxIAAwuIAAgyIBGAAIAAAAIAAgBIAHABIVCAAIAARgg");
	this.shape_43.setTransform(412.4,163.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},314).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},125).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape}]},1).to({state:[]},1).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},65).wait(45));

	// Extras2
	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#0066FF").s().p("AgUAaQgJgHAAgOQAAgPAHgKQAJgMANAAQAKAAAGADQAIAFAAAIQAAAGgHAFQgDADgKADIgWALQADAFAFACQAFAEAGAAQAEAAAGgCQAHgDACgDQACgDADAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAAAQAAAIgLAEQgJAEgJAAQgNABgIgIgAgMgQQgFAGgCALIATgIQAKgGAEgEQgFgEgJAAQgHAAgFAFg");
	this.shape_44.setTransform(432.5,202.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#0066FF").s().p("AgQAiQgJgDAAgHQAAAAAAgBQAAAAAAgBQAAAAABgBQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQACAAADADIAHABIAGABQAFABADgCQAGgCAAgEQAAgIgLgDIgGgBQgIgCgDgCQgGgDAAgHQABgNAMgFIAKgEIALgDIAGgCQABAAAAABQABAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAIABAGIABAFQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAABQAAAAgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgBAAgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAIgCgHIgNAEQgJAFAAAFIADABQANADAHAEQAKAGAAALQAAALgJAEQgHAEgKABQgIAAgHgDg");
	this.shape_45.setTransform(425.8,202.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#0066FF").s().p("AATAfIgDgEIgLAEQgEACgCAAQgPAAgGgIQgHgIABgPQgBgOALgKQAKgLANAAQAGAAAGADQAIADAAAFIgBADIgBAIIgBAMIABAMIAFALIABADIAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAIgEgDgAgJgOQgIAHABAJQAAAKADAFQADAFAIAAQAEAAAFgCIAGgEIgCgYIAAgFIABgHIgDgCIgDAAQgJAAgGAIg");
	this.shape_46.setTransform(419.7,202.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#0066FF").s().p("AgXAcIAAgqIAAgGIABgGQAAgGAFAAQAGAAAAAKQALgLAOAAQAFAAACAEQADADAAAIIAAAEQgBAIgFAAQgGAAAAgGIAAgFIAAgFQgKABgEAFQgGAEgDAIIAAAgQAAAGgGAAQgGAAAAgGg");
	this.shape_47.setTransform(413.7,202.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#0066FF").s().p("AARAuIgDgOIgCgOIABgGIAAgEQAAgLgFABQgIAAgFAFIgJAOQAAAYgCAEQgCADgEAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAAgDIABgJIAAgJIAAgsIABgKIgBgGIgBgGQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAgBABAAQABAAAAAAQAGAAAAAGIABAKIgBAOIAAANIAAAGQAFgIAGgCQAFgEAHAAQAJAAAEAHQADAEAAAKIAAAMIACAMIACANIABACQAAABgBAAQAAABAAAAQAAABgBAAQAAABAAAAQgBABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQgFAAAAgFg");
	this.shape_48.setTransform(407,200.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#0066FF").s().p("AgZAvQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIAAgSIABgZIACgZIAAgIIABgJQABgFAFABIAFgBIAJgBQAKAAAKAIQALAIAAAMQAAAPgMAIQgKAIgOAAIgHAAIAAAgQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAIgEgCgAgNgYIgBAYIAGAAQAKAAAHgEQAHgGAAgKQAAgHgHgFQgHgEgGAAIgFAAIgEAAg");
	this.shape_49.setTransform(400.1,200.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#0066FF").s().p("AgZAwQgEgDAAgGIABgVQACgbAAgiQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQAAAAABAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAABAAAAQAAAjgCAbIgBAJIAAAJQAQABAXgIIACAAQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAAEgEACQgHADgOADQgNACgJAAQgGAAgCgCg");
	this.shape_50.setTransform(465.8,181.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#0066FF").s().p("AAVAfIgEgTIgQADIgPAEIgLAXQgCAEgDAAQAAAAgBgBQgBAAAAAAQgBAAAAgBQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAgDAJgTIgBgEQAAgEAGgCIARgdQAOgXADAAQAFAAACAGIAEAVIAJApIADAKIACAGQAAABAAABQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgGAAgEgPgAgHAEIAVgEIgFgXg");
	this.shape_51.setTransform(457.5,181.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#0066FF").s().p("AgoAvQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgIIABgIIAAgLIAAgLIAAgLIAAgNIgBgLIgBgLQABgDACgDQADgCADAAQADAAAFAHQAOAXAMAPQAOARARAQIAAgIIAAgHQAAgagCgQIgCgGIAAgHQAAgHAGAAQALAAAAAoIgBATIAAAUIgBAKQgBAGgFAAQgEAAgFgEQgZgYgegrIgBAOIAAANIABAPIAAAPQAAARgHAAQgDAAgCgDg");
	this.shape_52.setTransform(448.2,181.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#0066FF").s().p("AgeAmQgNgLAAgSQAAgTANgSQAOgTAUAAQAUAAAKAJQAKAKAAATQAAAVgMARQgNATgUAAQgRAAgMgKgAgVgTQgJANAAAPQAAAMAJAIQAIAGAMAAQAOAAAKgOQAIgOAAgQQAAgOgGgGQgGgFgPgBQgOABgLAPg");
	this.shape_53.setTransform(438.1,181.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#0066FF").s().p("AgaAtQAAAAgBgBQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBABgBQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABAAABAAIAMgBIABgMIAAgKIgBgKIACgiIgIAAIgIAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAgGAGAAIATAAQAKgBATADQAFAAAAAHQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAIgKgCIgJgBIgCAhIAAALIABAKIgBALIATAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAAAQAAABABAAQAAABAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgKABIgKAAIgMAAIgLABQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape_54.setTransform(429.7,181.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#0066FF").s().p("AgDAtQgBAAAAgBQAAgBgBAAQAAgBAAAAQAAgBAAAAIAAgDIAAgDIAAgJIgBgJIgBgXIgCgZIgFAAQgOAAgHgCQgFgBAAgFQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAgBQACgCADAAIAKABIAKABIALAAIAKAAIAOAAIAOACQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAABABAAQAAABAAAAQAAABAAAAQAAABAAABQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAIgOgBIgOAAIgEAAIABAbIACAbIAAAGIABAGQAAAFgCACQgBAEgEABQAAAAAAgBQgBAAgBAAQAAAAAAAAQgBgBAAAAg");
	this.shape_55.setTransform(422.5,181.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#0066FF").s().p("AgaAtQAAAAgBgBQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBABgBQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABAAABAAIAMgBIABgMIAAgKIgBgKIACgiIgIAAIgIAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAgGAGAAIATAAQAKgBATADQAFAAAAAHQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAIgKgCIgJgBIgCAhIAAALIABAKIgBALIATAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAAAQAAABABAAQAAABAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgKABIgKAAIgMAAIgLABQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape_56.setTransform(414.4,181.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#0066FF").s().p("AgYAqQgLgFAAgJQAAgBAAAAQAAgBAAgBQABAAAAgBQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAQABAAAAAAQADAAACAEQADAEADABQAFAEAKAAQAIAAAJgEQAKgFAAgJQAAgIgJgFQgHgEgKAAQgKAAgGgDQgJgFAAgJQAAgLAMgJQAMgJAMABQAFAAAIACQAKACAAAEQAAAFgGAAIgIgBIgKgBQgIAAgHAEQgHAGAAAGQAAAFAJACIAMACQAOABAIAIQAHAFAAALQAAAOgNAJQgMAHgOABQgLgBgKgEg");
	this.shape_57.setTransform(406.6,182);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#0066FF").s().p("AgeAmQgNgLAAgSQAAgTANgSQAOgTAUAAQAUAAAKAJQAKAKAAATQAAAVgMARQgNATgUAAQgRAAgMgKgAgVgTQgJANAAAPQAAAMAJAIQAIAGAMAAQAOAAAKgOQAIgOAAgQQAAgOgGgGQgGgFgPgBQgOABgLAPg");
	this.shape_58.setTransform(397.3,181.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#0066FF").s().p("AgZAvQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIAAgSIABgZIACgZIAAgIIABgJQABgFAFABIAFgBIAJgBQAKAAAKAIQALAIAAAMQAAAPgMAIQgKAIgOAAIgHAAIAAAgQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQgBAAAAAAIgEgCgAgNgYIgBAYIAGAAQAKAAAHgEQAHgGAAgKQAAgHgHgFQgHgEgGAAIgFAAIgEAAg");
	this.shape_59.setTransform(389.1,181.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#0066FF").s().p("AgaAvQgGgFAAgUIAAgIIABgKIgBgEIABgCIACgbIgBgGIgBgGQAAgIAHAAQAAAAABAAQAAAAABAAQABABAAAAQAAABABAAIAOgDIALgBQAPAAAJADQAEACAAAFQAAAAAAABQAAAAgBABQAAAAAAABQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAIgCgBQgKgCgKAAIgKAAIgNADIABAGIgBAYIAagDIAOgBQABAAAAAAQABAAABABQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAAFgFABIgPABIgbACIAAAJIgBAHQAAANACADQACABAIABIAKAAIAMgBIADAAIAEAAQAGAAAAAFQAAAGgFABQgFABgTAAQgSAAgGgFg");
	this.shape_60.setTransform(382.1,181.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#0066FF").s().p("AgeAuQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIgBgPIAAgOIABgQIABgRIAAgJIgBgJQAAgDACgDQACgDAFAAIAPABQAIABAEADQAaANAAATQgBAKgIAGQgHAFgKADQATALAJALQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAgBAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBgBQgUgTgYgHIABAMIAAAMQAAAAAAABQAAABAAAAQAAABgBAAQAAABgBAAQAAABAAAAQgBAAAAAAQgBABgBAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBgAgSgbIAAAIIgBAMIgBALIADAAIACAAQAPAAAIgEIAGgEQADgDAAgDQAAgIgJgIQgIgGgKgBIgJgBg");
	this.shape_61.setTransform(374.2,181.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#0066FF").s().p("AgZAvQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIAAgSIABgZIACgZIAAgIIABgJQABgFAFABIAFgBIAJgBQAKAAAKAIQALAIAAAMQAAAPgMAIQgKAIgOAAIgHAAIAAAgQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQgBABAAAAQAAAAgBAAQgBABAAAAQgBAAAAAAIgEgCgAgNgYIgBAYIAGAAQAKAAAHgEQAHgGAAgKQAAgHgHgFQgHgEgGAAIgFAAIgEAAg");
	this.shape_62.setTransform(366.9,181.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FF00FF").s().p("AgZAtQgGgFAAgTIAAgIIABgKIgBgDIABgCIABgZIAAgHIgBgHQAAgGAGAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABIAOgEIALgBQAOAAAJAEQAEABAAAEQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAIgCgBQgKgCgJAAIgKABIgMACIAAAHIgBAWIAZgDIAOAAQABAAAAAAQABAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAABAAABQAAAEgFAAIgOACIgbADIAAAIIAAAGQAAAOACABQABACAIAAIAKAAIALAAIAEgBIADAAQAGAAAAAHQAAAEgFABQgFACgSAAQgSgBgFgFg");
	this.shape_63.setTransform(354.2,67.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FF00FF").s().p("AgKArQgHgSgJggIgEgRQgEgMAAgEQAAAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAQAFAAABAFIACAKIAGAVQAFAVAGAPIAAgBIAPgpIAFgPQAEgJAEgEQABgDADAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAQABABAAABQAAAAAAABIgBADQgEAGgCAGIgEANIgRAqIgGAOQgBAEgDAAQgFAAgCgFg");
	this.shape_64.setTransform(346.7,68);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FF00FF").s().p("AgZAsQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAIANgBIABgLIgBgKIAAgKQAAgNACgUIgIAAIgIAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAgFAFgBIASAAQALAAASACQAFABAAAGQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgKgBIgJgCIgCAgIABALIAAAKIAAAKIASAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABABQAAAAAAABQABAAAAAAQAAABAAABQABAAAAABQAAAAgBABQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAIgKAAIgJAAIgLABIgMABQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_65.setTransform(339.1,68);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FF00FF").s().p("AgDAsQgBgBAAAAQgBgBAAgBQAAAAAAgBQAAAAAAgBIAAgCIAAgDIAAgJIAAgIIgCgXIgBgYIgGAAQgNAAgHgCQgFgBAAgFQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABAAQABAAAAAAIAKABIAJABIALAAIAKAAIANAAIAOABQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBABAAAAIgOgBIgNAAIgEAAIABAaIACAaIAAAGIAAAGIgBAHQgCAEgDAAIgDgBg");
	this.shape_66.setTransform(332.1,67.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FF00FF").s().p("AgZAsQAAgBgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAAAAAgBQAAgBABAAQAAgBAAAAQABAAAAgBQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAIANgBIAAgLIAAgKIgBgKQAAgNACgUIgIAAIgHAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAgFAGgBIASAAQAKAAASACQAFABAAAGQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgJgBIgKgCIgCAgIABALIAAAKIAAAKIATAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAABQABAAAAABQABAAAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAABgBAAQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAIgLAAIgKAAIgKABIgMABQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_67.setTransform(324.2,68);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FF00FF").s().p("AgnAuQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIAAgIIABgHIAAgLIAAgLIAAgLIAAgMIgBgLIAAgLQAAgDACgCQADgCADAAQADAAAEAHIAaAlQAOAQAQAQIAAgIIAAgHQAAgZgBgQIgCgGIgBgGQgBgHAHAAQAKAAAAAmIAAATIgBAUIAAAJQgBAGgFAAQgEAAgEgEQgZgXgdgqIgBANIAAANIAAAPIABAPQAAAPgHAAQgDAAgCgCg");
	this.shape_68.setTransform(316.1,68);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FF00FF").s().p("AgZAsQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAIANgBIABgLIgBgKIAAgKQAAgNACgUIgIAAIgIAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAgFAFgBIATAAQAKAAASACQAFABAAAGQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgKgBIgJgCIgBAgIAAALIAAAKIAAAKIASAAQABAAABAAQAAAAABAAQAAAAABABQAAAAAAABQABAAAAABQABAAAAAAQAAABAAABQABAAAAABQAAAAgBABQAAABAAAAQAAABgBAAQAAABgBAAQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAIgJAAIgKAAIgLABIgMABQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_69.setTransform(307.9,68);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FF00FF").s().p("AgcAwQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBIABgiIAAgjIAAgHIAAgIQAAgBAAAAQAAgBABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAIAEABIANgCIAJgBQAHAAAJACQAMADAAAEQAAABAAAAQAAABgBABQAAAAAAAAQgBABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgDAAQgHgDgMAAIgIABIgMACIAAAZQALgDAGAAIASABQAGABAAAFQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAAAQgBAAAAAAIgKAAIgIAAQgEAAgNADIgBAoQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAABQgBAAAAAAQgBAAgBABQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape_70.setTransform(301.3,68);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FF00FF").s().p("AgnAuQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgIIAAgHIAAgLIAAgLIAAgLIAAgMIAAgLIgBgLQAAgDACgCQACgCAEAAQADAAAEAHIAaAlQAOAQARAQIAAgIIAAgHQAAgZgCgQIgDgGIgBgGQAAgHAHAAQAKAAAAAmIAAATIgBAUIAAAJQgBAGgGAAQgDAAgFgEQgXgXgfgqIAAANIAAANIAAAPIAAAPQABAPgHAAQgDAAgCgCg");
	this.shape_71.setTransform(292.5,68);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FF00FF").s().p("AgZAsQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAIANgBIABgLIgBgKIAAgKQAAgNABgUIgIAAIgHAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAgFAFgBIASAAQALAAASACQAFABAAAGQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgKgBIgJgCIgCAgIABALIAAAKIAAAKIASAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABABQAAAAAAABQABAAAAAAQAAABAAABQABAAAAABQAAAAgBABQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAIgKAAIgKAAIgKABIgMABQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_72.setTransform(284.3,68);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(254,78,254,0.443)").s().p("AobESIAAojIQ4AAIAAGvIioAAIAAB0g");
	this.shape_73.setTransform(321.2,83.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(86,153,254,0.482)").s().p("ApQI0IAAvyIAAh1ICoAAIP5AAIAARng");
	this.shape_74.setTransform(417.8,155.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(2,1,1).p("AAAAWIAAgr");
	this.shape_75.setTransform(373.2,104.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(2,1,1).p("AAAgiIAABF");
	this.shape_76.setTransform(373.3,103.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(2,1,1).p("AAAguIAABd");
	this.shape_77.setTransform(373.4,101.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(2,1,1).p("AAAg7IAAB2");
	this.shape_78.setTransform(373.5,100.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(2,1,1).p("AAAhHIAACP");
	this.shape_79.setTransform(373.6,99.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(2,1,1).p("AAABUIAAio");
	this.shape_80.setTransform(373.7,98.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#0066FF").s().p("AgUAbQgJgIAAgOQAAgPAHgKQAJgMANgBQAKABAGADQAIAEAAAJQAAAGgHAFQgDACgKAEIgWALQADAFAFACQAFADAGAAQAEAAAGgCQAHgCACgCQACgEADAAQAAAAABAAQAAAAABABQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAGgLAFQgJAFgJAAQgNgBgIgGgAgMgQQgFAGgCALIATgIQAKgGAEgDQgFgFgJgBQgHABgFAFg");
	this.shape_81.setTransform(191.2,212.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#0066FF").s().p("AgQAiQgKgEABgFQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAABgBQAAAAABAAQAAAAABAAQAAgBABAAQACAAADAEIAHACIAGABQAFgBADgBQAGgCAAgEQAAgIgLgCIgGgCQgIgCgDgDQgGgBAAgIQABgNALgFIALgDIALgFIAGgBQABAAAAABQABAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAABAAABIABAEIAAAGQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgBAAgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBIgCgHIgNAEQgKAEAAAGIAEABQANACAHAFQAKAFAAAMQAAAKgJAGQgHADgKAAQgIABgHgDg");
	this.shape_82.setTransform(184.5,212.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#0066FF").s().p("AAUAfIgFgEIgKAEQgFACgCAAQgOAAgGgIQgHgIAAgPQAAgOALgKQAKgLANAAQAGAAAGADQAIADAAAFIgBADIgBAIIgBAMIABAMIAFALIABADIAAABQAAABAAAAQAAABAAABQAAAAgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAIgDgDgAgJgOQgIAHABAJQgBAKAEAFQADAFAIAAQAEAAAEgCIAHgEIgCgYIABgFIAAgHIgDgCIgDAAQgJAAgGAIg");
	this.shape_83.setTransform(178.4,212.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#0066FF").s().p("AAQAuIgCgOIgCgOIABgGIAAgEQAAgLgGAAQgHAAgFAGIgJAOQAAAXgCAFQgCADgEAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAgBIABgCIABgJIAAgJIAAgsIABgKIgBgGIgBgGQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABgBQAAAAABgBQAAAAABAAQABAAAAAAQAGAAAAAGIABALIAAAMIAAAOIAAAFQAEgHAGgDQAFgDAGAAQAKAAAEAHQADAEAAAKIAAAMIACAMIACANIABACQAAABgBAAQAAABAAAAQAAABgBAAQAAABAAAAQgBABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgEAAgCgFg");
	this.shape_84.setTransform(165.7,211.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#0066FF").s().p("AAVAgIgEgUIgQADIgPADIgLAYQgCAEgDgBQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAgDAJgTIgBgDQAAgGAGgBIARgdQAOgXADAAQAFAAACAHIAEAUIAJAqIADAJIACAHQAAAAAAABQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgGAAgEgOgAgHAEIAVgEIgFgXg");
	this.shape_85.setTransform(216.2,192.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#0066FF").s().p("AgoAvQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIAAgIIABgIIAAgLIAAgLIAAgLIAAgNIgBgLIAAgLQAAgDACgDQADgCADAAQACAAAGAHQAPAXALAPQAOARARAQIAAgIIAAgHQAAgagCgQIgBgGIgBgHQAAgHAGAAQALAAAAAoIgBATIAAAUIgBAKQgBAGgFAAQgEAAgEgEQgagYgegrIgBAOIAAANIABAPIAAAPQAAARgHAAQgDAAgCgDg");
	this.shape_86.setTransform(206.9,192.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#0066FF").s().p("AgeAmQgNgLAAgRQAAgVANgRQAOgTAUAAQAUAAAKAJQAKAKAAAUQAAAUgMARQgNATgUAAQgRAAgMgKgAgVgUQgJAOAAAQQAAAMAJAHQAIAHAMAAQAOAAAKgPQAIgNAAgQQAAgPgGgGQgGgGgPABQgOgBgLAPg");
	this.shape_87.setTransform(196.8,192.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#0066FF").s().p("AgaAtQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQABgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAABAAIAMgBIABgMIAAgJIgBgLIACgiIgIAAIgIABQgBgBAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAgGAGAAIATAAQALAAASACQAFAAAAAHQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgKgBIgJAAIgCAhIAAAKIABAKIgBALIATgBQABAAAAABQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAABABAAQAAABAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgKABIgLAAIgLABIgLABQgBAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape_88.setTransform(188.4,192.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#0066FF").s().p("AgDAtQgBAAAAgBQAAgBgBAAQAAgBAAAAQAAgBAAAAIAAgEIAAgCIAAgJIgBgJIgBgYIgCgYIgFAAQgOAAgHgCQgFgCAAgEQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAgBQACgBADAAIAKAAIAKABIALAAIAKAAIAOAAIAOABQAAAAABABQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAIgOgBIgOgBIgEAAIABAcIACAbIAAAGIABAHQAAAEgCADQgBADgEAAQAAAAAAAAQgBAAgBAAQAAAAAAAAQgBgBAAAAg");
	this.shape_89.setTransform(181.2,192.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#0066FF").s().p("AgaAtQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQABgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAABAAIAMgBIABgMIAAgJIgBgLIACgiIgIAAIgIABQgBgBAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAgGAGAAIATAAQALAAASACQAFAAAAAHQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgKgBIgJAAIgCAhIAAAKIABAKIgBALIATgBQABAAAAABQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAABABAAQAAABAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgKABIgLAAIgLABIgLABQgBAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape_90.setTransform(173.1,192.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#0066FF").s().p("AgYAqQgLgFAAgJQAAgBAAAAQAAgBAAgBQABAAAAgBQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAQABAAAAAAQADAAACADQADAFADACQAFADAKAAQAIAAAJgEQAKgFAAgKQAAgHgJgEQgHgEgKgBQgKAAgGgDQgJgFAAgJQAAgLAMgJQAMgJAMAAQAFAAAIACQAKADAAAEQAAAFgGABIgIgBIgKgCQgIAAgHAEQgHAFAAAHQAAAFAJACIAMABQAOACAIAHQAHAHAAAKQAAAPgNAIQgMAIgOAAQgLAAgKgFg");
	this.shape_91.setTransform(165.3,192.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#0066FF").s().p("AgeAmQgNgLAAgRQAAgVANgRQAOgTAUAAQAUAAAKAJQAKAKAAAUQAAAUgMARQgNATgUAAQgRAAgMgKgAgVgUQgJAOAAAQQAAAMAJAHQAIAHAMAAQAOAAAKgPQAIgNAAgQQAAgPgGgGQgGgGgPABQgOgBgLAPg");
	this.shape_92.setTransform(156,192.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#0066FF").s().p("AgaAvQgGgGAAgTIAAgIIABgLIgBgDIABgCIACgaIgBgHIgBgHQAAgHAHAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAABABIAOgDIALgBQAPAAAJAEQAEABAAAEQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBABQAAAAgBAAQgBAAAAAAIgCAAQgKgDgKAAIgKABIgNACIABAHIgBAXIAagDIAOgBQABAAAAAAQABAAABAAQAAABABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAABAAABQAAAEgFAAIgPACIgbADIAAAIIgBAHQAAAOACACQACABAIAAIAKAAIAMAAIADAAIAEgBQAGABAAAFQAAAGgFABQgFABgTAAQgSAAgGgFg");
	this.shape_93.setTransform(140.8,192.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#0066FF").s().p("AgeAuQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAgBAAAAIAAgPIgBgOIABgQIABgRIAAgJIgBgJQAAgDACgDQACgDAFAAIAPABQAIABAEADQAaANAAATQAAAKgJAGQgHAFgKADQATALAJALQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAgBAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAgBgBQAAAAgBgBQgUgTgYgHIABAMIAAAMQAAAAAAABQAAABAAAAQAAABgBAAQAAABgBAAQAAABAAAAQgBAAAAAAQgBABgBAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBgAgTgbIABAIIgBAMIgBALIADAAIACAAQAPAAAHgEIAHgEQADgDAAgDQAAgIgKgIQgHgGgKgBIgJgBg");
	this.shape_94.setTransform(132.9,192.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#0066FF").s().p("AgZAvQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIAAgSIABgZIACgZIAAgIIABgJQABgFAFABIAFgBIAJgBQAKAAAKAIQALAIAAAMQAAAPgMAIQgKAIgOAAIgHAAIAAAgQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAIgEgCgAgNgYIgBAYIAGAAQAKAAAHgEQAHgGAAgKQAAgHgHgFQgHgEgGAAIgFAAIgEAAg");
	this.shape_95.setTransform(125.6,192.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FF00FF").s().p("AgZAtQgGgFAAgTIAAgIIABgKIgBgDIABgCIABgaIAAgGIgBgGQAAgIAGABQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABIAOgDIALgBQAOAAAJADQAEACAAAEQAAAAAAABQAAAAgBABQAAAAAAABQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAIgCgBQgKgCgJAAIgKAAIgMADIAAAGIgBAXIAZgDIAOgBQABAAAAABQABAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAABAAABQAAAEgFAAIgOACIgbADIAAAIIAAAGQAAANACACQABACAIAAIAKAAIALAAIAEgBIADAAQAGAAAAAHQAAAEgFABQgFABgSABQgSAAgFgGg");
	this.shape_96.setTransform(380.4,68.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FF00FF").s().p("AgKArQgHgSgIggIgGgRIgDgQQAAAAAAgBQAAgBAAAAQABgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAQAEAAACAFIACAKIAGAVQAFAVAGAPIAAgBIAPgpIAFgPQADgJAEgEQACgDADAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABABAAAAQAAABAAAAQABABAAABQAAAAAAABIgBADQgEAGgCAGIgFANIgPAqIgHAOQgBAEgEAAQgEAAgCgFg");
	this.shape_97.setTransform(372.8,68.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FF00FF").s().p("AgZAsQAAgBgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAAAAAgBQAAgBABAAQAAgBAAAAQABAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAIANgBIAAgLIAAgKIgBgKQAAgNACgUIgHAAIgIAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAgFAGgBIASAAQAKAAASACQAFABAAAGQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgJgBIgKgCIgBAgIAAALIAAAKIAAAKIATAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAABgBAAQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAIgKAAIgLAAIgKABIgMABQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_98.setTransform(365.2,68.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FF00FF").s().p("AgDAsQgBgBAAAAQAAgBgBgBQAAAAAAgBQAAAAAAgBIAAgCIAAgDIAAgJIAAgIIgCgXIgBgYIgGAAQgNAAgHgCQgFgBAAgFQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAIAKABIAJABIALAAIAKAAIANAAIAOABQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBABAAAAIgOgBIgNAAIgEAAIABAaIACAaIAAAGIAAAGIgBAHQgCAEgDAAIgDgBg");
	this.shape_99.setTransform(358.3,68.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FF00FF").s().p("AgZAsQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAIANgBIABgLIgBgKIAAgKQAAgNACgUIgIAAIgIAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAgFAFgBIASAAQALAAASACQAFABAAAGQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgKgBIgJgCIgCAgIABALIAAAKIAAAKIASAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAAgBABQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAIgKAAIgJAAIgLABIgMABQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_100.setTransform(350.3,68.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FF00FF").s().p("AgnAuQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgIIAAgHIABgLIAAgLIAAgLIgBgMIAAgLIgBgLQAAgDACgCQACgCADAAQADAAAFAHIAaAlQANAQASAQIAAgIIAAgHQAAgZgDgQIgCgGIgBgGQABgHAGAAQAKAAAAAmIAAATIAAAUIgBAJQgBAGgGAAQgDAAgFgEQgYgXgegqIAAANIAAANIAAAPIAAAPQAAAPgGAAQgDAAgCgCg");
	this.shape_101.setTransform(342.3,68.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FF00FF").s().p("AgZAsQAAgBgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAAAAAgBQAAgBABAAQAAgBAAAAQABAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAIANgBIAAgLIAAgKIgBgKQAAgNACgUIgIAAIgHAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAgFAGgBIASAAQAKAAASACQAFABAAAGQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgJgBIgKgCIgCAgIABALIAAAKIAAAKIATAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAIgLAAIgKAAIgKABIgMABQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_102.setTransform(334.1,68.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FF00FF").s().p("AgcAwQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAgBIABgiIAAgjIAAgHIAAgIQAAgBAAAAQAAgBABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAIAEABIANgCIAJgBQAHAAAJACQAMADAAAEQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQgBAAAAAAIgDAAQgHgDgMAAIgIABIgMACIAAAZQALgDAGAAIASABQAGABAAAFQAAABAAAAQgBABAAABQAAAAAAABQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBAAQgBAAAAAAIgKAAIgIAAQgEAAgNADIgBAoQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAABQgBAAAAAAQgBAAgBABQAAAAgBAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_103.setTransform(327.4,68.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FF00FF").s().p("AgnAuQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIAAgIIABgHIABgLIAAgLIAAgLIgBgMIgBgLIAAgLQAAgDACgCQACgCADAAQADAAAFAHIAaAlQANAQARAQIAAgIIAAgHQAAgZgCgQIgCgGIAAgGQAAgHAGAAQAKAAAAAmIAAATIAAAUIgBAJQgBAGgFAAQgEAAgFgEQgYgXgdgqIgBANIAAANIAAAPIABAPQgBAPgGAAQgDAAgCgCg");
	this.shape_104.setTransform(318.7,68.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FF00FF").s().p("AgZAsQAAgBgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAAAAAgBQAAgBABAAQAAgBAAAAQABAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAIANgBIAAgLIAAgKIgBgKQAAgNADgUIgIAAIgIAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAgFAGgBIASAAQAKAAASACQAFABAAAGQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgJgBIgKgCIgBAgIAAALIAAAKIAAAKIATAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAABgBAAQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAIgKAAIgKAAIgLABIgMABQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_105.setTransform(310.4,68.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("rgba(254,78,254,0.443)").s().p("AtYE2IAAprIaxAAIAAJrgADRDEIAAipg");
	this.shape_106.setTransform(352.8,87);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("rgba(86,153,254,0.482)").s().p("AsYGyIAAtjIYxAAIAANjg");
	this.shape_107.setTransform(195,186.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(2,1,1).p("AAAhLIAACX");
	this.shape_108.setTransform(373.7,99);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(2,1,1).p("AAAhDIAACH");
	this.shape_109.setTransform(373.7,99.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(2,1,1).p("AAAg7IAAB3");
	this.shape_110.setTransform(373.7,100.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(2,1,1).p("AAAgzIAABn");
	this.shape_111.setTransform(373.7,101.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(2,1,1).p("AAAgqIAABV");
	this.shape_112.setTransform(373.7,102.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(2,1,1).p("AAAAbIAAg1");
	this.shape_113.setTransform(373.7,103.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(2,1,1).p("AgrgrQArArAsAs");
	this.shape_114.setTransform(392.1,137.3);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(2,1,1).p("AhDhEQARARAiAiQAlAmAwAw");
	this.shape_115.setTransform(394.6,139.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(1.9,1,1).p("AhcheQASATAzA0QAxAxBEBF");
	this.shape_116.setTransform(397.1,142.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(1.8,1,1).p("Ah1h3QAUAUBEBFQA8A9BXBZ");
	this.shape_117.setTransform(399.5,145);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(1.7,1,1).p("AiOiRQAVAVBWBYQBHBHBrBv");
	this.shape_118.setTransform(402,147.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(1.7,1,1).p("AinirQAXAXBnBqQBRBTCACD");
	this.shape_119.setTransform(404.5,150.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(1.6,1,1).p("AjAjEQAYAYB5B8QBcBeCUCX");
	this.shape_120.setTransform(407,152.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(1.5,1,1).p("AjZjeQAZAZCKCNQBnBqCpCt");
	this.shape_121.setTransform(409.5,155.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62,p:{x:366.9,y:181.6}},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50,p:{x:465.8,y:181.9}},{t:this.shape_49,p:{x:400.1,y:200.6}},{t:this.shape_48},{t:this.shape_47,p:{x:413.7,y:202.3}},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]},226).to({state:[]},34).to({state:[{t:this.shape_75}]},60).to({state:[{t:this.shape_76,p:{x:373.3}}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_107},{t:this.shape_106},{t:this.shape_80},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_62,p:{x:147.8,y:192.1}},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_50,p:{x:224.5,y:192.4}},{t:this.shape_49,p:{x:158.8,y:211.1}},{t:this.shape_84},{t:this.shape_47,p:{x:172.4,y:212.8}},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81}]},33).to({state:[{t:this.shape_80}]},38).to({state:[{t:this.shape_80}]},56).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_76,p:{x:373.7}}]},1).to({state:[{t:this.shape_113}]},1).to({state:[]},1).to({state:[{t:this.shape_114}]},18).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).wait(78));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.8,11.9,494.4,270.9);


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
(lib.inf_Scene7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{scene7:0,scene7_repeat:526});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_3 = function() {
		playSound("infinitiveisbuiltonacarat");
	}
	this.frame_53 = function() {
		playSound("DiagrammedunderthelineGreg");
	}
	this.frame_115 = function() {
		playSound("ilovetosail");
	}
	this.frame_275 = function() {
		playSound("igotobeachshells");
	}
	this.frame_415 = function() {
		playSound("iliketowhistle");
	}
	this.frame_536 = function() {
		this.gotoAndPlay("scene7_repeat");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(50).call(this.frame_53).wait(62).call(this.frame_115).wait(160).call(this.frame_275).wait(140).call(this.frame_415).wait(121).call(this.frame_536).wait(1));

	// Lesson
	this.instance = new lib.InfinitivesPrepositions2();
	this.instance.parent = this;
	this.instance.setTransform(265.4,193,1,1,0,0,0,243.4,148.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(537));

	// main
	this.UI = new lib.UI();
	this.UI.parent = this;
	this.UI.setTransform(548,53.9,1,1,0,0,0,54,40.5);

	this.instance_1 = new lib.Bk2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(275.4,195,1,1,0,0,0,256.8,150.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZAxQgKgKAAgQQAAgTAKgLQAKgMAQAAQAIABAFACIAGAFQABgeACgLQABgGAFAAQAHAAAAAHIgDAsIgBAUQAAAYACANIAAABQAAABAAAAQAAABAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAABgBAAQAAAAgBAAQgBABAAAAQgFAAgCgHQgFAEgGACQgFACgFAAQgPAAgKgKgAgQABQgGAHAAAPQAAAJAGAHQAHAGAJAAQAFAAAEgCIAIgGIACgCIAAgMIAAgJIAAgIQgDgGgEgCQgFgDgGAAQgLAAgGAGg");
	this.shape.setTransform(349.4,25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgYAfQgLgJAAgQQAAgSAKgMQAJgOAQAAQAMAAAHAEQAKAFAAAKQAAAHgJAGIgPAHIgaANQAEAGAGADQAGADAHAAQAFAAAGgCQAJgCACgEQADgEADAAQAAAAABAAQABABAAAAQABAAAAAAQABABAAAAQABABAAAAQAAABAAAAQABAAAAABQAAABAAAAQAAAIgNAGQgLAFgKAAQgPAAgLgIgAgOgTQgGAHgCANIAWgKQAMgGAFgFQgGgFgLAAQgIAAgGAGg");
	this.shape_1.setTransform(341.2,27);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgDAqQgCgCAAgDIgCgaIgCgYQABgIgDgEQgFACgFAFIgIAKIgEAEIgBAMIgBAMIABAGIAAAGQAAADgCACQgCACgCAAQgJAAAAgTIABgMIABgMIgBgMIAAgLQgBgQAIAAQACAAADACQACACAAADIAAAFIgBAEIAAAHQAFgHAHgGQAHgHAFAAQALAAAEAMQAEgGAFgCQAGgDAGAAQANAAAEANIACAUIAGAoQAAADgCACQgDACgDAAQgFAAgCgGIgCgWIgCgWIgDgJQgCgHgDAAQgCAAgIAFIgJAHIABANIACASIABATQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_2.setTransform(331.5,27);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgDAqQgCgCAAgDIgCgaIgCgYQAAgIgCgEQgFACgFAFIgIAKIgEAEIgBAMIgBAMIABAGIAAAGQAAADgBACQgDACgDAAQgIAAAAgTIABgMIABgMIgBgMIAAgLQAAgQAGAAQAEAAACACQACACAAADIAAAFIgBAEIAAAHQAEgHAHgGQAIgHAFAAQALAAADAMQAFgGAFgCQAFgDAIAAQALAAAFANIACAUIAGAoQAAADgCACQgCACgDAAQgHAAgBgGIgCgWIgDgWIgCgJQgCgHgDAAQgCAAgIAFIgJAHIABANIACASIABATQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_3.setTransform(320,27);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAXAlIgFgFIgMAFQgFACgCAAQgSAAgHgJQgHgJgBgTQABgQALgMQAMgNAQAAQAHAAAHAEQAKAEAAAFQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABIgBAJIAAAPIABAOIAFAMIACAEIAAABQAAADgCACQgBABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQgCAAgDgDgAgLgRQgIAJAAALQAAAMAEAGQAEAGAJAAQAFAAAFgDIAIgFQgDgTAAgJIAAgHIACgHIgFgCIgDgBQgKAAgIAJg");
	this.shape_4.setTransform(310.5,27);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgbAhIAAgyIAAgHIABgHQAAgHAFAAQAIAAAAAMQANgNAQAAQAGAAADAEQADAEAAAJIAAAFQgBAJgGAAQgHAAAAgHIAAgFIAAgGQgMABgFAFQgHAFgEAJIAAAnQABAHgIAAQgGAAAAgHg");
	this.shape_5.setTransform(303.4,27);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgYA4QgJgCAAgGQAAgGAGAAIAJABQAGABAHAAQANAAAFgNQAEgJAAgSQgEAHgFADQgGAFgGAAQgNgBgIgIQgIgKAAgNQAAgTALgMQAMgMASAAQAHAAAFABQAEADADADQAHAAAAAJIgBANIgCANIgCAYQAAAOgDAJQgDAMgHAFQgJAHgPAAQgKAAgGgBgAgMgjQgHAJAAAMQAAALAEAEQAEAGAIgBQAGABAHgIQAGgIABgHIADgYIgGgDIgGgBQgNgBgHAKg");
	this.shape_6.setTransform(295.6,28.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAXAlIgFgFIgMAFQgFACgCAAQgSAAgHgJQgIgJAAgTQABgQAMgMQALgNAQAAQAHAAAHAEQAKAEAAAFQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABIgBAJIAAAPIABAOIAFAMIACAEIAAABQAAADgCACQgBABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQgCAAgDgDgAgLgRQgIAJAAALQAAAMAEAGQAEAGAJAAQAFAAAFgDIAIgFQgDgTAAgJIABgHIABgHIgFgCIgDgBQgKAAgIAJg");
	this.shape_7.setTransform(288.1,27);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgGA0QgCgCAAgDIgBgNIAAgNIABgRIABgQQAAgDACgCQABgCAEAAQACAAACACQACACAAADIgBAQIAAARIAAANIAAANQAAADgCACQgCACgCAAQgDAAgCgCgAgEgnQgDgCAAgEQAAgDADgCQACgDADAAQADAAADADQACACAAADQAAAEgCACQgDACgDAAQgDAAgCgCg");
	this.shape_8.setTransform(282.4,25.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgWA6QgIgCgEgDIAAAAQgDAAgDgCQgCgDAAgDIABgWIAAgXIAAgYIAAgZQAAgDADgDQADgDADAAIALAEIANAGQAUAHAOAPQARARAAATQAAAMgGAMQgGALgKAHQgLAHgTAAIgNgBgAgagTIAAAUIgBAnIACABQAFAEAKAAQAPAAAIgFQAHgFAEgIQAEgIABgJQAAgTgXgOQgGgFgagMg");
	this.shape_9.setTransform(275.2,25.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0099FF").s().p("AgcAyQgNgGgBgLQAAgDACgCQADgCADAAQADAAADAEQADAGADABQAGAEAMAAQAKAAAKgEQAMgGAAgLQAAgKgKgFQgJgEgMgBQgLAAgIgEQgKgFAAgLQAAgNAOgLQAOgKAOAAQAHAAAJADQALADAAAFQAAAGgGAAIgKgBQgIgCgDAAQgLAAgHAGQgJAFAAAIQAAAGALACIAOACQARABAJAJQAJAIAAAMQAAARgQAKQgOAJgRAAQgNAAgLgFg");
	this.shape_10.setTransform(260.2,25.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0099FF").s().p("AgvA4QgDgCAAgDIABgJIAAgJIAAgOIABgNIAAgOIgBgNIgBgOIAAgNQAAgEADgCQADgDADAAQAEgBAFAJQATAbANARQAQAUAVAUIAAgJIgBgJQABgfgCgTIgCgHIgCgIQAAgIAHAAQANAAAAAvIAAAXIAAAXIgCALQAAAIgHAAQgEAAgFgFQgegcglgzIAAAQIAAAPIAAASIAAASQAAAUgHAAQgEAAgCgDg");
	this.shape_11.setTransform(249.3,25.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0099FF").s().p("AgjAsQgPgNAAgUQAAgYAOgUQARgXAXABQAYAAALAKQAMALAAAYQAAAXgNAVQgQAXgXgBQgUAAgOgMgAgZgYQgLARAAASQAAAOAKAJQAKAHAPABQAQAAAMgSQAKgPAAgTQAAgRgIgIQgHgGgSAAQgQAAgNARg");
	this.shape_12.setTransform(237.5,25.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0099FF").s().p("AgfA1QgCgCAAgDQAAgEACgCQACgCADAAIAQgBIAAgOIAAgMIAAgMQAAgPACgZIgKAAIgJAAQgDAAgCgCQgCgCAAgDQAAgHAGAAIAWgBQANAAAWADQAGABAAAHQAAADgCACQgCACgDAAIgMgBIgLgCIgCAnIAAANIABAMIgBAMIAXAAQADAAACACQACACAAADQAAAEgCACQgCACgDAAIgMAAIgMAAIgNACIgPABQgDAAgCgCg");
	this.shape_13.setTransform(227.6,25.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0099FF").s().p("AgEA1QgDgCAAgDIABgEIAAgDIAAgKIgBgLIgBgcIgCgdIgHAAQgQAAgJgCQgFgBAAgGIABgFQADgDADABIALABIAMABIANAAIAMgBIARABIAQABQADAAACACQACACAAADQAAADgCADQgCACgDAAIgQgBIgRgBIgFAAIACAgIACAfIAAAIIABAIQAAAFgCADQgCAFgEAAQgCAAgCgCg");
	this.shape_14.setTransform(219.2,25.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0099FF").s().p("AgfA1QgCgCAAgDQAAgEACgCQACgCADAAIAQgBIAAgOIAAgMIAAgMQAAgPACgZIgKAAIgJAAQgDAAgCgCQgCgCAAgDQAAgHAGAAIAWgBQANAAAWADQAGABAAAHQAAADgCACQgCACgDAAIgMgBIgLgCIgCAnIAAANIABAMIgBAMIAXAAQADAAACACQACACAAADQAAAEgCACQgCACgDAAIgMAAIgMAAIgNACIgPABQgDAAgCgCg");
	this.shape_15.setTransform(209.6,25.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0099FF").s().p("AgcAyQgNgGgBgLQAAgDACgCQADgCADAAQADAAADAEQADAGADABQAGAEAMAAQAKAAAKgEQAMgGAAgLQAAgKgKgFQgJgEgMgBQgLAAgIgEQgKgFAAgLQAAgNAOgLQAOgKAOAAQAHAAAJADQALADAAAFQAAAGgGAAIgKgBQgIgCgDAAQgLAAgHAGQgJAFAAAIQAAAGALACIAOACQARABAJAJQAJAIAAAMQAAARgQAKQgOAJgRAAQgNAAgLgFg");
	this.shape_16.setTransform(200.5,25.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0099FF").s().p("AgjAsQgPgNAAgUQAAgYAOgUQARgXAXABQAYAAALAKQAMALAAAYQAAAXgNAVQgQAXgXgBQgUAAgOgMgAgZgYQgLARAAASQAAAOAKAJQAKAHAPABQAQAAAMgSQAKgPAAgTQAAgRgIgIQgHgGgSAAQgQAAgNARg");
	this.shape_17.setTransform(189.5,25.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0099FF").s().p("AgeA4QgCgCAAgDIAAgVIACgeIACgdIAAgKIABgKQABgGAFAAIAHgBIAKAAQAMAAAMAJQAMAKAAAOQAAASgNAJQgMAKgQAAIgIgBIgBAmQAAADgCACQAAAAgBAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgDAAgDgBgAgPgqIAAANIgCAdIAIAAQALAAAIgFQAKgHAAgLQgBgIgIgGQgIgFgJAAIgFAAIgEAAg");
	this.shape_18.setTransform(179.9,25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0099FF").s().p("AgeA3QgIgGABgXIAAgKIAAgMIAAgEQAAAAAAAAQAAAAAAgBQAAAAAAgBQABgBAAAAIABgfIgBgIIAAgHQAAgJAHAAQADABACACIAQgEIAOgBQASAAAKAEQAEACAAAFQAAACgCADQgCADgCgBIgDAAQgMgEgLABIgMABIgPADIABAHIgBAcIAegDIARgBQADAAACACQACACABADQgBAFgGABIgSABIgfAEIgBAKIAAAIQAAAPACAEQACABAKAAIAMAAIAOAAIADgBIAFAAQAHAAABAIQgBAFgGACQgHABgVAAQgWAAgGgGg");
	this.shape_19.setTransform(171.6,25.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0099FF").s().p("AgkA2QgCgCAAgDIAAgRIgBgRIACgTIABgTIgBgLIAAgLQAAgEACgDQADgEAEABIASABQAKABAFAEQAdAPAAAWQAAALgJAIQgIAGgMAEQAWAMALANQACACAAADQAAADgCACQgCADgDAAQgDAAgDgDQgXgXgcgIIAAAOIABAOQAAADgCACQgDACgDAAQgDAAgCgCgAgWggIAAAJIAAAOIgCAOIADAAIADAAQASAAAJgFQAEgBADgEQAEgEAAgDQAAgKgLgIQgKgIgLgBIgLgBg");
	this.shape_20.setTransform(162.3,25.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0099FF").s().p("AgeA4QgBgCAAgDIAAgVIABgeIABgdIAAgKIABgKQACgGAFAAIAHgBIALAAQALAAAMAJQANAKAAAOQgBASgNAJQgMAKgQAAIgJgBIAAAmQAAADgCACQAAAAgBAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgEAAgCgBgAgPgqIAAANIgCAdIAIAAQALAAAJgFQAIgHABgLQAAgIgJgGQgIgFgIAAIgGAAIgEAAg");
	this.shape_21.setTransform(153.8,25);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgFAGQgDgCAAgEQAAgDADgCQACgDADAAQAEAAACADQADACAAADQAAAEgDACQgCADgEAAQgDAAgCgDg");
	this.shape_22.setTransform(143.7,30.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgTAoQgLgEAAgHQAAgDACgCQACgCADAAQACAAAEADQACACAGABIAIABQAFAAAEgCQAHgCAAgEQAAgKgOgEIgGgBQgKgCgEgDQgFgDAAgIQAAgPAOgHIAMgEIAOgFQADgBADAAQADAAACACQACACAAADIABAGIABAGQAAADgCACQgCACgDAAQgEAAgBgCIgCgIIgRAFQgKAFAAAGIAEACQAPADAIAFQAMAGAAAPQAAALgKAGQgIAFgMAAQgKAAgIgDg");
	this.shape_23.setTransform(138.1,26.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgHAhIgLgdIgNggIAAgDQAAgDACgCQACgCADgBQAEABACAEIASAxIANggIAGgQQACgFAEAAQADAAADACQACACAAADQAAADgMAcIgPAhQAAAGgGABQgEgBgDgGg");
	this.shape_24.setTransform(131.2,26.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF00FF").s().p("AgcAyQgNgGgBgLQAAgDACgCQADgCADAAQADAAADAEQADAGADABQAGAEAMAAQAKAAAKgEQAMgGAAgLQAAgKgKgFQgJgEgMgBQgLAAgIgEQgKgFAAgLQAAgNAOgLQAOgKAOAAQAHAAAJADQALADAAAFQAAAGgGAAIgKgBQgIgCgDAAQgLAAgHAGQgJAFAAAIQAAAGALACIAOACQARABAJAJQAJAIAAAMQAAARgQAKQgOAJgRAAQgNAAgLgFg");
	this.shape_25.setTransform(118.2,25.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF00FF").s().p("AgeA3QgIgGABgXIAAgKIAAgMIAAgEQAAAAAAAAQAAAAAAgBQAAAAAAgBQABgBAAAAIABgfIgBgIIAAgHQAAgJAHAAQADABACACIAQgEIAOgBQASAAAKAEQAEACAAAFQAAACgCADQgCADgCgBIgDAAQgMgEgLABIgMABIgPADIABAHIgBAcIAegDIARgBQADAAACACQACACABADQgBAFgGABIgSABIgfAEIgBAKIAAAIQAAAPACAEQACABAJAAIANAAIAOAAIADgBIAFAAQAHAAABAIQgBAFgGACQgHABgVAAQgWAAgGgGg");
	this.shape_26.setTransform(108.6,25.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF00FF").s().p("AgMA0QgJgVgKgoIgGgUQgEgPAAgFQAAgDACgCQACgCADAAQAFAAACAGIADAMIAHAZQAGAaAHATIAAgBIATgzIAGgSQAEgLAEgFQADgDADAAQADAAACACQACACAAAEIgBAEIgHAOIgGAQIgTAzIgIASQgBAEgEAAQgGAAgCgGg");
	this.shape_27.setTransform(99.5,25.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF00FF").s().p("AgfA1QgCgCAAgDQAAgEACgCQACgCADAAIAQgBIAAgOIAAgMIAAgMQAAgPACgZIgKAAIgJAAQgDAAgCgCQgCgCAAgDQAAgHAGAAIAWgBQANAAAWADQAGABAAAHQAAADgCACQgCACgDAAIgMgBIgLgCIgCAnIAAANIABAMIgBAMIAXAAQADAAACACQACACAAADQAAAEgCACQgCACgDAAIgMAAIgMAAIgNACIgPABQgDAAgCgCg");
	this.shape_28.setTransform(90.3,25.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF00FF").s().p("AgEA1QgDgCAAgDIABgEIAAgDIAAgKIgBgLIgBgcIgCgdIgHAAQgQAAgJgCQgFgBAAgGIABgFQADgDADABIALABIAMABIANAAIAMgBIARABIAQABQADAAACACQACACAAADQAAADgCADQgCACgDAAIgQgBIgRgBIgFAAIACAgIACAfIAAAIIABAIQAAAFgCADQgCAFgEAAQgCAAgCgCg");
	this.shape_29.setTransform(81.9,25.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF00FF").s().p("AgfA1QgCgCAAgDQAAgEACgCQACgCADAAIAQgBIAAgOIAAgMIAAgMQAAgPACgZIgKAAIgJAAQgDAAgCgCQgCgCAAgDQAAgHAGAAIAWgBQANAAAWADQAGABAAAHQAAADgCACQgCACgDAAIgMgBIgLgCIgCAnIAAANIABAMIgBAMIAXAAQADAAACACQACACAAADQAAAEgCACQgCACgDAAIgMAAIgMAAIgNACIgPABQgDAAgCgCg");
	this.shape_30.setTransform(72.2,25.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF00FF").s().p("AgwA4QgBgCAAgDIAAgJIABgJIAAgOIAAgNIAAgOIAAgNIgBgOIgBgNQAAgEACgCQADgDAEAAQAEgBAGAJQARAbAOARQARAUAUAUIAAgJIgBgJQAAgfgCgTIgCgHIgBgIQAAgIAIAAQAMAAAAAvIAAAXIgBAXIAAALQgCAIgGAAQgEAAgGgFQgdgcgkgzIgBAQIAAAPIAAASIABASQAAAUgIAAQgEAAgDgDg");
	this.shape_31.setTransform(62.5,25.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF00FF").s().p("AgfA1QgCgCAAgDQAAgEACgCQACgCADAAIAQgBIAAgOIAAgMIAAgMQAAgPACgZIgKAAIgJAAQgDAAgCgCQgCgCAAgDQAAgHAGAAIAWgBQANAAAWADQAGABAAAHQAAADgCACQgCACgDAAIgMgBIgLgCIgCAnIAAANIABAMIgBAMIAXAAQADAAACACQACACAAADQAAAEgCACQgCACgDAAIgMAAIgMAAIgNACIgPABQgDAAgCgCg");
	this.shape_32.setTransform(52.5,25.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF00FF").s().p("AgiA6QgCgCAAgDIABgqIAAgqIAAgJIAAgKQAAgDACgCQACgCADAAIAEABIAQgCIALgBQAJAAAKACQAPAEAAAFQAAADgCACQgCACgDAAIgDAAQgJgDgPAAIgKAAIgNACIgBAfQAOgDAHAAIAWABQAGABAAAGQAAAEgBACQgCABgEAAIgLgBIgKAAQgFAAgQAEIgBAxQAAADgCACQgCACgDAAQgDAAgCgCg");
	this.shape_33.setTransform(44.5,25.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF00FF").s().p("AgwA4QgCgCAAgDIABgJIAAgJIAAgOIABgNIAAgOIgBgNIgBgOIAAgNQAAgEACgCQADgDAEAAQAEgBAGAJQARAbAOARQARAUAUAUIAAgJIAAgJQAAgfgDgTIgCgHIgBgIQAAgIAIAAQAMAAAAAvIAAAXIgBAXIgBALQgBAIgGAAQgEAAgGgFQgdgcgkgzIgBAQIAAAPIAAASIABASQAAAUgIAAQgEAAgDgDg");
	this.shape_34.setTransform(33.9,25.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF00FF").s().p("AgfA1QgCgCAAgDQAAgEACgCQACgCADAAIAQgBIAAgOIAAgMIAAgMQAAgPACgZIgKAAIgJAAQgDAAgCgCQgCgCAAgDQAAgHAGAAIAWgBQANAAAWADQAGABAAAHQAAADgCACQgCACgDAAIgMgBIgLgCIgCAnIAAANIABAMIgBAMIAXAAQADAAACACQACACAAADQAAAEgCACQgCACgDAAIgMAAIgMAAIgNACIgPABQgDAAgCgCg");
	this.shape_35.setTransform(23.9,25.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.UI}]}).wait(537));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(282.5,200.6,534,398.7);
// library properties:
lib.properties = {
	id: 'BC33A758BF882148A3CBD11586FA6588',
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/bgmusic.mp3", id:"bgmusic"},
		{src:"sounds/bgmInf.mp3", id:"bgmInf"},
		{src:"sounds/ball_passes.mp3", id:"ball_passes"},
		{src:"sounds/_3a.mp3", id:"_3a"},
		{src:"sounds/_4b.mp3", id:"_4b"},
		{src:"sounds/wrong_answer.mp3", id:"wrong_answer"},
		{src:"sounds/SENameofIdea.mp3", id:"SENameofIdea"},
		{src:"sounds/diagnal_line.mp3", id:"diagnal_line"},
		{src:"sounds/DiagrammedunderthelineGreg.mp3", id:"DiagrammedunderthelineGreg"},
		{src:"sounds/_7a.mp3", id:"_7a"},
		{src:"sounds/highclick.mp3", id:"highclick"},
		{src:"sounds/igotobeachshells.mp3", id:"igotobeachshells"},
		{src:"sounds/iliketowhistle.mp3", id:"iliketowhistle"},
		{src:"sounds/ilovetosail.mp3", id:"ilovetosail"},
		{src:"sounds/infinitiveisbuiltonacarat.mp3", id:"infinitiveisbuiltonacarat"},
		{src:"sounds/lowclick.mp3", id:"lowclick"},
		{src:"sounds/parrotmove1.mp3", id:"parrotmove1"},
		{src:"sounds/parrotmove2.mp3", id:"parrotmove2"},
		{src:"sounds/SENameOfPerson.mp3", id:"SENameOfPerson"},
		{src:"sounds/_6b.mp3", id:"_6b"},
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
an.compositions['BC33A758BF882148A3CBD11586FA6588'] = {
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